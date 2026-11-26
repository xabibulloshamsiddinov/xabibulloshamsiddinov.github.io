// Playable Mini-Game: "Bug Blaster: Dev Edition"
// Portfolio ichida o'ynaladigan mini-arkada. Hamma harakat delta time bilan (60/120/144 Hz da bir xil tezlik).

const tx = (key, vars) => (window.t ? window.t(key, vars) : key);

class MiniGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = 640;
        this.height = this.canvas.height = 360;

        this.state = 'menu';          // menu | running | paused | over
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('gamedev_minigame_highscore') || '0', 10);

        this.player = { x: 0, y: 0, width: 28, height: 28, speed: 6, cooldown: 0, shield: 3, powerTimer: 0 };
        this.bullets = [];
        this.enemies = [];
        this.particles = [];
        this.stars = [];
        this.spawnTimer = 0;
        this.shakeTimer = 0;
        this.keys = {};
        this.pointerDown = false;
        this.pointerTarget = null;
        this.visible = true;

        this.initStars();
        this.bindEvents();
        this.redraw();
    }

    // Movement constants are "per 60 Hz frame"; dt scales them to the real frame time.
    static get BUG_TYPES() {
        return [
            { name: 'NullRef', color: '#ff4d6d', size: 22, hp: 1, speed: 2.2, pts: 100 },
            { name: 'MemoryLeak', color: '#f77f00', size: 28, hp: 2, speed: 1.6, pts: 200 },
            { name: 'SpaghettiCode', color: '#fcbf49', size: 34, hp: 3, speed: 1.1, pts: 350 },
            { name: '404Bug', color: '#a06cd5', size: 20, hp: 1, speed: 2.8, pts: 150 }
        ];
    }

    initStars() {
        this.stars = [];
        for (let i = 0; i < 50; i++) {
            this.stars.push({ x: Math.random() * this.width, y: Math.random() * this.height, speed: Math.random() * 1.5 + 0.5, size: Math.random() * 2 + 1 });
        }
    }

    canvasActive() {
        return document.activeElement === this.canvas || (this.state === 'running' && this.visible);
    }

    bindEvents() {
        window.addEventListener('keydown', (e) => {
            const gameKeys = ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
            const active = this.canvasActive();
            if (active && gameKeys.includes(e.code)) e.preventDefault();
            if (!active && document.activeElement !== this.canvas) return;
            this.keys[e.code] = true;
            const confirm = e.code === 'Space' || e.code === 'Enter' || e.code === 'KeyR';
            if (confirm && this.state !== 'running') {
                e.preventDefault();
                this.state === 'paused' ? this.resume() : this.start();
            }
        });
        window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
        window.addEventListener('blur', () => { this.keys = {}; this.pointerDown = false; });

        const toCanvas = (clientX, clientY) => {
            const rect = this.canvas.getBoundingClientRect();
            return { x: (clientX - rect.left) * this.width / rect.width, y: (clientY - rect.top) * this.height / rect.height };
        };

        this.canvas.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            this.canvas.focus({ preventScroll: true });
            if (this.state === 'menu' || this.state === 'over') { this.start(); }
            else if (this.state === 'paused') { this.resume(); }
            this.pointerDown = true;
            this.pointerTarget = toCanvas(e.clientX, e.clientY);
            this.canvas.setPointerCapture?.(e.pointerId);
        });
        this.canvas.addEventListener('pointermove', (e) => {
            if (this.pointerDown) this.pointerTarget = toCanvas(e.clientX, e.clientY);
        });
        const release = () => { this.pointerDown = false; this.pointerTarget = null; };
        this.canvas.addEventListener('pointerup', release);
        this.canvas.addEventListener('pointercancel', release);
        this.canvas.style.touchAction = 'none';

        // Pause when the cabinet scrolls out of view or the tab is hidden.
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(([entry]) => {
                this.visible = entry.isIntersecting;
                if (!this.visible) this.pause();
            }, { threshold: 0.25 }).observe(this.canvas);
        }
        document.addEventListener('visibilitychange', () => { if (document.hidden) this.pause(); });
    }

    start() {
        this.state = 'running';
        this.score = 0;
        Object.assign(this.player, { x: this.width / 2, y: this.height - 50, shield: 3, powerTimer: 0, cooldown: 0 });
        this.bullets = [];
        this.enemies = [];
        this.particles = [];
        this.spawnTimer = 0;
        if (window.soundFX) window.soundFX.playClick();
        this.runLoop();
    }

    pause() {
        if (this.state !== 'running') return;
        this.state = 'paused';
        this.keys = {};
        this.pointerDown = false;
        this.redraw();
    }

    resume() {
        if (this.state !== 'paused') return;
        this.state = 'running';
        this.runLoop();
    }

    runLoop() {
        this.lastTime = performance.now();
        const loop = (now) => {
            if (this.state !== 'running') return;
            const dt = Math.min((now - this.lastTime) / (1000 / 60), 3);   // 1.0 = one 60 Hz frame
            this.lastTime = now;
            this.update(dt);
            this.render();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    clampPlayer() {
        this.player.x = Math.max(20, Math.min(this.width - 20, this.player.x));
        this.player.y = Math.max(30, Math.min(this.height - 30, this.player.y));
    }

    spawnEnemy() {
        const types = MiniGame.BUG_TYPES;
        const type = types[Math.floor(Math.random() * types.length)];
        this.enemies.push({ x: Math.random() * (this.width - 60) + 30, y: -30, ...type, maxHp: type.hp });
    }

    shoot() {
        const p = this.player;
        this.bullets.push({ x: p.x, y: p.y - 15, radius: 4, speed: 9 });
        if (p.powerTimer > 0) {
            this.bullets.push({ x: p.x - 8, y: p.y - 12, radius: 3, speed: 8.5 });
            this.bullets.push({ x: p.x + 8, y: p.y - 12, radius: 3, speed: 8.5 });
        }
        if (window.soundFX) window.soundFX.playLaser();
    }

    addParticles(x, y, color, count = 8) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            this.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color, life: 1, decay: Math.random() * 0.04 + 0.02, size: Math.random() * 3 + 2 });
        }
    }

    update(dt) {
        const p = this.player;

        // Movement: keyboard, or ease toward the pointer while it is held down.
        if (this.keys.ArrowLeft || this.keys.KeyA) p.x -= p.speed * dt;
        if (this.keys.ArrowRight || this.keys.KeyD) p.x += p.speed * dt;
        if (this.keys.ArrowUp || this.keys.KeyW) p.y -= p.speed * dt;
        if (this.keys.ArrowDown || this.keys.KeyS) p.y += p.speed * dt;
        if (this.pointerDown && this.pointerTarget) {
            const k = 1 - Math.pow(1 - 0.25, dt);
            p.x += (this.pointerTarget.x - p.x) * k;
            p.y += (this.pointerTarget.y - p.y) * k;
        }
        this.clampPlayer();

        // Fire with Space / J, or automatically while the mouse / finger is held down.
        p.cooldown -= dt;
        const firing = this.keys.Space || this.keys.KeyJ || this.pointerDown;
        if (firing && p.cooldown <= 0) {
            this.shoot();
            p.cooldown = p.powerTimer > 0 ? 6 : 12;
        }
        if (p.powerTimer > 0) p.powerTimer -= dt;

        for (const s of this.stars) {
            s.y += s.speed * dt;
            if (s.y > this.height) { s.y = 0; s.x = Math.random() * this.width; }
        }

        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];
            b.y -= b.speed * dt;
            if (b.y < -10) this.bullets.splice(i, 1);
        }

        this.spawnTimer += dt;
        const spawnInterval = Math.max(25, 60 - Math.floor(this.score / 600));
        if (this.spawnTimer >= spawnInterval) {
            this.spawnEnemy();
            this.spawnTimer -= spawnInterval;
        }

        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            e.y += e.speed * dt;

            if (Math.hypot(e.x - p.x, e.y - p.y) < e.size / 2 + p.width / 2) {
                this.enemies.splice(i, 1);
                p.shield--;
                this.shakeTimer = 10;
                this.addParticles(p.x, p.y, '#ff0055', 15);
                if (window.soundFX) window.soundFX.playExplosion();
                if (p.shield <= 0) { this.gameOver(); return; }
                continue;
            }

            for (let j = this.bullets.length - 1; j >= 0; j--) {
                const b = this.bullets[j];
                if (Math.hypot(e.x - b.x, e.y - b.y) < e.size / 2 + b.radius) {
                    this.bullets.splice(j, 1);
                    e.hp--;
                    this.addParticles(b.x, b.y, '#00f0ff', 4);
                    if (e.hp <= 0) {
                        this.score += e.pts;
                        this.addParticles(e.x, e.y, e.color, 14);
                        this.enemies.splice(i, 1);
                        if (window.soundFX) window.soundFX.playExplosion();
                        if (Math.random() < 0.15) {          // coffee: 4 s of triple shot
                            p.powerTimer = 240;
                            if (window.soundFX) window.soundFX.playCoin();
                        }
                        break;
                    }
                }
            }
            if (e.y > this.height + 40) this.enemies.splice(i, 1);
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const q = this.particles[i];
            q.x += q.vx * dt;
            q.y += q.vy * dt;
            q.life -= q.decay * dt;
            if (q.life <= 0) this.particles.splice(i, 1);
        }

        if (this.shakeTimer > 0) this.shakeTimer -= dt;
    }

    gameOver() {
        this.state = 'over';
        this.pointerDown = false;
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('gamedev_minigame_highscore', String(this.highScore));
        }
        this.render();
    }

    /** Draw the current state once (menu, pause, game over, or after a language change). */
    redraw() {
        if (!this.ctx) return;
        if (this.state === 'menu') this.renderMenu();
        else this.render();
    }

    drawBackground() {
        const c = this.ctx;
        c.fillStyle = '#0a0d14';
        c.fillRect(0, 0, this.width, this.height);
        c.fillStyle = '#ffffff88';
        for (const s of this.stars) c.fillRect(s.x, s.y, s.size, s.size);
    }

    render() {
        const c = this.ctx;
        c.save();
        if (this.shakeTimer > 0) c.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
        this.drawBackground();

        c.fillStyle = '#00f0ff';
        c.shadowColor = '#00f0ff';
        c.shadowBlur = 10;
        for (const b of this.bullets) { c.beginPath(); c.arc(b.x, b.y, b.radius, 0, Math.PI * 2); c.fill(); }
        c.shadowBlur = 0;

        for (const e of this.enemies) {
            c.save();
            c.translate(e.x, e.y);
            c.fillStyle = e.color;
            c.shadowColor = e.color;
            c.shadowBlur = 8;
            c.beginPath(); c.arc(0, 0, e.size / 2, 0, Math.PI * 2); c.fill();
            c.shadowBlur = 0;
            c.fillStyle = '#ffffff';
            c.font = '10px monospace';
            c.textAlign = 'center';
            c.fillText(e.name, 0, -e.size / 2 - 4);
            c.restore();
        }

        for (const q of this.particles) {
            c.fillStyle = q.color;
            c.globalAlpha = Math.max(0, q.life);
            c.fillRect(q.x, q.y, q.size, q.size);
        }
        c.globalAlpha = 1;

        const p = this.player;
        c.save();
        c.translate(p.x, p.y);
        c.fillStyle = p.powerTimer > 0 ? '#ffb703' : '#478cbf';
        c.shadowColor = c.fillStyle;
        c.shadowBlur = 12;
        c.beginPath();
        c.moveTo(0, -p.height / 2);
        c.lineTo(-p.width / 2, p.height / 2);
        c.lineTo(0, p.height / 3);
        c.lineTo(p.width / 2, p.height / 2);
        c.closePath();
        c.fill();
        c.fillStyle = '#ffffff';
        c.beginPath(); c.arc(0, -2, 3, 0, Math.PI * 2); c.fill();
        c.restore();

        c.fillStyle = '#00f0ff';
        c.font = 'bold 14px monospace';
        c.textAlign = 'left';
        c.fillText(`SCORE: ${this.score}`, 16, 26);
        c.fillText(`HI: ${this.highScore}`, 16, 46);
        c.textAlign = 'right';
        c.fillStyle = p.shield === 1 ? '#ff4d6d' : '#00ff9d';
        c.fillText('SHIELD: ' + '◆ '.repeat(Math.max(0, p.shield)), this.width - 16, 26);
        if (p.powerTimer > 0) {
            c.fillStyle = '#ffb703';
            c.fillText(tx('mini.boost'), this.width - 16, 46);
        }

        if (this.state === 'over' || this.state === 'paused') {
            c.fillStyle = 'rgba(10, 13, 20, 0.85)';
            c.fillRect(0, 0, this.width, this.height);
            c.textAlign = 'center';
            if (this.state === 'over') {
                c.fillStyle = '#ff4d6d';
                c.font = 'bold 28px monospace';
                c.fillText(tx('mini.over'), this.width / 2, this.height / 2 - 25);
                c.fillStyle = '#ffffff';
                c.font = '15px monospace';
                c.fillText(tx('mini.score', { s: this.score, h: this.highScore }), this.width / 2, this.height / 2 + 10);
                c.fillStyle = '#00f0ff';
                c.font = '13px monospace';
                c.fillText(tx('mini.again'), this.width / 2, this.height / 2 + 45);
            } else {
                c.fillStyle = '#00f0ff';
                c.font = 'bold 26px monospace';
                c.fillText('II  PAUSE', this.width / 2, this.height / 2 - 6);
                c.fillStyle = '#a0aec0';
                c.font = '13px monospace';
                c.fillText(tx('mini.start'), this.width / 2, this.height / 2 + 28);
            }
        }
        c.restore();
    }

    renderMenu() {
        const c = this.ctx;
        this.drawBackground();
        c.textAlign = 'center';
        c.fillStyle = '#00f0ff';
        c.font = 'bold 24px monospace';
        c.fillText(tx('mini.title'), this.width / 2, this.height / 2 - 35);
        c.fillStyle = '#a0aec0';
        c.font = '13px monospace';
        c.fillText(tx('mini.sub'), this.width / 2, this.height / 2 - 10);
        c.fillStyle = '#00ff9d';
        c.font = 'bold 15px monospace';
        c.fillText(tx('mini.start'), this.width / 2, this.height / 2 + 35);
        c.fillStyle = '#718096';
        c.font = '12px monospace';
        c.fillText(tx('mini.help'), this.width / 2, this.height / 2 + 70);
    }
}

window.MiniGame = MiniGame;
