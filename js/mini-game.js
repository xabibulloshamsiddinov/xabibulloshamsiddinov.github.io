// Playable Mini-Game: "Bug Blaster: Dev Edition"
// Portfolio ichida to'g'ridan-to'g'ri o'ynash mumkin bo'lgan mini-arkada o'yini

class MiniGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.width = this.canvas.width = 640;
        this.height = this.canvas.height = 360;

        this.isRunning = false;
        this.isGameOver = false;
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('gamedev_minigame_highscore') || '0', 10);
        
        this.player = {
            x: this.width / 2,
            y: this.height - 50,
            width: 28,
            height: 28,
            speed: 6,
            cooldown: 0,
            cooldownMax: 12,
            shield: 3,
            powerTimer: 0
        };

        this.bullets = [];
        this.enemies = [];
        this.particles = [];
        this.stars = [];
        this.spawnTimer = 0;
        this.shakeTimer = 0;

        this.keys = {};
        this.initStars();
        this.bindEvents();
        this.renderMenu();
    }

    initStars() {
        this.stars = [];
        for (let i = 0; i < 50; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                speed: Math.random() * 1.5 + 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }

    bindEvents() {
        window.addEventListener('keydown', (e) => {
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                if (document.activeElement === this.canvas || this.isRunning) {
                    e.preventDefault();
                }
            }
            this.keys[e.code] = true;
            if (e.code === 'KeyR' && this.isGameOver) {
                this.restart();
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });

        // Touch & Mouse Support
        let isPointerDown = false;
        const handlePointer = (x, y) => {
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.width / rect.width;
            const scaleY = this.height / rect.height;
            const targetX = (x - rect.left) * scaleX;
            const targetY = (y - rect.top) * scaleY;
            
            this.player.x += (targetX - this.player.x) * 0.35;
            this.player.y += (targetY - this.player.y) * 0.35;
            this.clampPlayer();
        };

        this.canvas.addEventListener('mousedown', (e) => {
            if (!this.isRunning && !this.isGameOver) this.start();
            else if (this.isGameOver) this.restart();
            isPointerDown = true;
            handlePointer(e.clientX, e.clientY);
        });

        window.addEventListener('mousemove', (e) => {
            if (isPointerDown && this.isRunning) {
                handlePointer(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mouseup', () => { isPointerDown = false; });

        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.isRunning && !this.isGameOver) this.start();
            else if (this.isGameOver) this.restart();
            isPointerDown = true;
            const touch = e.touches[0];
            handlePointer(touch.clientX, touch.clientY);
        }, { passive: false });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (isPointerDown && this.isRunning) {
                const touch = e.touches[0];
                handlePointer(touch.clientX, touch.clientY);
            }
        }, { passive: false });

        this.canvas.addEventListener('touchend', () => { isPointerDown = false; });
    }

    start() {
        this.isRunning = true;
        this.isGameOver = false;
        this.score = 0;
        this.player.shield = 3;
        this.player.x = this.width / 2;
        this.player.y = this.height - 50;
        this.bullets = [];
        this.enemies = [];
        this.particles = [];
        if (window.soundFX) window.soundFX.playClick();
        this.lastTime = performance.now();
        requestAnimationFrame((t) => this.loop(t));
    }

    restart() {
        this.start();
    }

    clampPlayer() {
        this.player.x = Math.max(20, Math.min(this.width - 20, this.player.x));
        this.player.y = Math.max(30, Math.min(this.height - 30, this.player.y));
    }

    spawnEnemy() {
        const bugTypes = [
            { name: "NullRef", color: "#ff4d6d", size: 22, hp: 1, speed: 2.2, pts: 100 },
            { name: "MemoryLeak", color: "#f77f00", size: 28, hp: 2, speed: 1.6, pts: 200 },
            { name: "SpaghettiCode", color: "#fcbf49", size: 34, hp: 3, speed: 1.1, pts: 350 },
            { name: "404Bug", color: "#a06cd5", size: 20, hp: 1, speed: 2.8, pts: 150 }
        ];

        const type = bugTypes[Math.floor(Math.random() * bugTypes.length)];
        this.enemies.push({
            x: Math.random() * (this.width - 60) + 30,
            y: -30,
            ...type,
            maxHp: type.hp
        });
    }

    shoot() {
        this.bullets.push({
            x: this.player.x,
            y: this.player.y - 15,
            radius: 4,
            speed: 9
        });
        if (this.player.powerTimer > 0) {
            // Triple fire
            this.bullets.push({ x: this.player.x - 8, y: this.player.y - 12, radius: 3, speed: 8.5 });
            this.bullets.push({ x: this.player.x + 8, y: this.player.y - 12, radius: 3, speed: 8.5 });
        }
        if (window.soundFX) window.soundFX.playLaser();
    }

    addParticles(x, y, color, count = 8) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            this.particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color,
                life: 1.0,
                decay: Math.random() * 0.04 + 0.02,
                size: Math.random() * 3 + 2
            });
        }
    }

    update() {
        // Player Movement
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) this.player.x -= this.player.speed;
        if (this.keys['ArrowRight'] || this.keys['KeyD']) this.player.x += this.player.speed;
        if (this.keys['ArrowUp'] || this.keys['KeyW']) this.player.y -= this.player.speed;
        if (this.keys['ArrowDown'] || this.keys['KeyS']) this.player.y += this.player.speed;
        this.clampPlayer();

        // Shooting
        if (this.player.cooldown > 0) this.player.cooldown--;
        if ((this.keys['Space'] || this.keys['KeyJ'] || true) && this.player.cooldown <= 0) {
            // Auto-fire or fire on space
            if (this.keys['Space'] || this.keys['KeyJ']) {
                this.shoot();
                this.player.cooldown = this.player.powerTimer > 0 ? 6 : this.player.cooldownMax;
            }
        }

        if (this.player.powerTimer > 0) this.player.powerTimer--;

        // Update Stars
        this.stars.forEach(s => {
            s.y += s.speed;
            if (s.y > this.height) {
                s.y = 0;
                s.x = Math.random() * this.width;
            }
        });

        // Update Bullets
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];
            b.y -= b.speed;
            if (b.y < -10) {
                this.bullets.splice(i, 1);
            }
        }

        // Spawn Enemies
        this.spawnTimer++;
        const spawnInterval = Math.max(25, 60 - Math.floor(this.score / 600));
        if (this.spawnTimer >= spawnInterval) {
            this.spawnEnemy();
            this.spawnTimer = 0;
        }

        // Update Enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            e.y += e.speed;

            // Check collision with player
            const distToPlayer = Math.hypot(e.x - this.player.x, e.y - this.player.y);
            if (distToPlayer < (e.size / 2 + this.player.width / 2)) {
                this.enemies.splice(i, 1);
                this.player.shield--;
                this.shakeTimer = 10;
                this.addParticles(this.player.x, this.player.y, "#ff0055", 15);
                if (window.soundFX) window.soundFX.playExplosion();

                if (this.player.shield <= 0) {
                    this.gameOver();
                    return;
                }
                continue;
            }

            // Check collision with bullets
            for (let j = this.bullets.length - 1; j >= 0; j--) {
                const b = this.bullets[j];
                const distToBullet = Math.hypot(e.x - b.x, e.y - b.y);
                if (distToBullet < e.size / 2 + b.radius) {
                    this.bullets.splice(j, 1);
                    e.hp--;
                    this.addParticles(b.x, b.y, "#00f0ff", 4);

                    if (e.hp <= 0) {
                        this.score += e.pts;
                        this.addParticles(e.x, e.y, e.color, 14);
                        this.enemies.splice(i, 1);
                        if (window.soundFX) window.soundFX.playExplosion();

                        // Random coffee powerup drop
                        if (Math.random() < 0.15) {
                            this.player.powerTimer = 240; // 4 seconds boost
                            if (window.soundFX) window.soundFX.playCoin();
                        }
                        break;
                    }
                }
            }

            if (e.y > this.height + 40) {
                this.enemies.splice(i, 1);
            }
        }

        // Update Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        if (this.shakeTimer > 0) this.shakeTimer--;
    }

    gameOver() {
        this.isRunning = false;
        this.isGameOver = true;
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('gamedev_minigame_highscore', this.highScore.toString());
        }
    }

    render() {
        this.ctx.save();
        if (this.shakeTimer > 0) {
            this.ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
        }

        // Background
        this.ctx.fillStyle = '#0a0d14';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Stars
        this.ctx.fillStyle = '#ffffff88';
        this.stars.forEach(s => {
            this.ctx.fillRect(s.x, s.y, s.size, s.size);
        });

        // Bullets
        this.ctx.fillStyle = '#00f0ff';
        this.ctx.shadowColor = '#00f0ff';
        this.ctx.shadowBlur = 10;
        this.bullets.forEach(b => {
            this.ctx.beginPath();
            this.ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
        this.ctx.shadowBlur = 0;

        // Enemies
        this.enemies.forEach(e => {
            this.ctx.save();
            this.ctx.translate(e.x, e.y);

            // Bug body
            this.ctx.fillStyle = e.color;
            this.ctx.shadowColor = e.color;
            this.ctx.shadowBlur = 8;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, e.size / 2, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.shadowBlur = 0;

            // Bug Label
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '10px monospace';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(e.name, 0, -e.size / 2 - 4);

            this.ctx.restore();
        });

        // Particles
        this.particles.forEach(p => {
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0, p.life);
            this.ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        this.ctx.globalAlpha = 1.0;

        // Player (Godot/Unity inspired triangle ship)
        this.ctx.save();
        this.ctx.translate(this.player.x, this.player.y);

        this.ctx.fillStyle = this.player.powerTimer > 0 ? '#ffb703' : '#478cbf';
        this.ctx.shadowColor = this.ctx.fillStyle;
        this.ctx.shadowBlur = 12;

        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.player.height / 2);
        this.ctx.lineTo(-this.player.width / 2, this.player.height / 2);
        this.ctx.lineTo(0, this.player.height / 3);
        this.ctx.lineTo(this.player.width / 2, this.player.height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Cockpit
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(0, -2, 3, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        // HUD: Score & Shield
        this.ctx.fillStyle = '#00f0ff';
        this.ctx.font = 'bold 14px monospace';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`SCORE: ${this.score}`, 16, 26);
        this.ctx.fillText(`HI: ${this.highScore}`, 16, 46);

        // Shields (Hearts/Batteries)
        this.ctx.textAlign = 'right';
        let shieldText = "SHIELD: ";
        for (let i = 0; i < this.player.shield; i++) shieldText += "◆ ";
        this.ctx.fillStyle = this.player.shield === 1 ? '#ff4d6d' : '#00ff9d';
        this.ctx.fillText(shieldText, this.width - 16, 26);

        if (this.player.powerTimer > 0) {
            this.ctx.fillStyle = '#ffb703';
            this.ctx.fillText(`⚡ COFFEE BOOST!`, this.width - 16, 46);
        }

        // Game Over overlay
        if (this.isGameOver) {
            this.ctx.fillStyle = 'rgba(10, 13, 20, 0.85)';
            this.ctx.fillRect(0, 0, this.width, this.height);

            this.ctx.fillStyle = '#ff4d6d';
            this.ctx.font = 'bold 28px monospace';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('CRASH: GAME OVER!', this.width / 2, this.height / 2 - 25);

            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '15px monospace';
            this.ctx.fillText(`Yig'ilgan ball: ${this.score} | Rekord: ${this.highScore}`, this.width / 2, this.height / 2 + 10);

            this.ctx.fillStyle = '#00f0ff';
            this.ctx.font = '13px monospace';
            this.ctx.fillText("Qayta o'ynash uchun [SPACE] yoki ekranni bosing", this.width / 2, this.height / 2 + 45);
        }

        this.ctx.restore();
    }

    renderMenu() {
        this.ctx.fillStyle = '#0a0d14';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = '#ffffff88';
        this.stars.forEach(s => {
            this.ctx.fillRect(s.x, s.y, s.size, s.size);
        });

        this.ctx.fillStyle = '#00f0ff';
        this.ctx.font = 'bold 24px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("BUG BLASTER: DEV EDITION", this.width / 2, this.height / 2 - 35);

        this.ctx.fillStyle = '#a0aec0';
        this.ctx.font = '13px monospace';
        this.ctx.fillText("Junior Game Dev HTML5 Canvas Prototype", this.width / 2, this.height / 2 - 10);

        this.ctx.fillStyle = '#00ff9d';
        this.ctx.font = 'bold 15px monospace';
        this.ctx.fillText("[ O'YINNI BOSHLASH UCHUN BOSING ]", this.width / 2, this.height / 2 + 35);

        this.ctx.fillStyle = '#718096';
        this.ctx.font = '12px monospace';
        this.ctx.fillText("Boshqaruv: WASD / Strelkalar / Sichqoncha + [SPACE] O'q otish", this.width / 2, this.height / 2 + 70);
    }

    loop() {
        if (!this.isRunning) return;
        this.update();
        this.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.MiniGame = MiniGame;
