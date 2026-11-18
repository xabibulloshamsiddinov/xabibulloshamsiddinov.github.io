// Main Portfolio Controller & Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    initAudioToggle();
    initBackgroundCanvas();
    initProjectsGrid();
    initModal();
    initArtGrid();
    initGamePlayer();
    initSocialLinks();
    initMiniGame();
    initNav();
});

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sfx = (name) => { if (window.soundFX) window.soundFX[name](); };

/* ==========================================================================
   1. SOUND FX TOGGLE & HOVER SOUNDS
   ========================================================================== */
function initAudioToggle() {
    const soundBtn = document.getElementById('sound-toggle');
    if (!soundBtn) return;

    const updateBtnUI = (enabled) => {
        soundBtn.innerHTML = enabled ? `<span>🔊</span> <span>Ovoz: ON</span>` : `<span>🔇</span> <span>Ovoz: OFF</span>`;
        soundBtn.classList.toggle('muted', !enabled);
    };

    updateBtnUI(window.soundFX.enabled);

    soundBtn.addEventListener('click', () => updateBtnUI(window.soundFX.toggle()));

    document.querySelectorAll('a, button, .filter-btn, .social-btn').forEach(el => {
        el.addEventListener('mouseenter', () => sfx('playHover'));
        el.addEventListener('click', () => sfx('playClick'));
    });
}

/* ==========================================================================
   2. INTERACTIVE PARTICLES BACKGROUND
   ========================================================================== */
function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.min(60, Math.floor(width / 25));

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? '#00f0ff' : '#478cbf',
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.strokeStyle = '#00f0ff';
                    ctx.globalAlpha = (1 - dist / 120) * 0.12;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1.0;
        requestAnimationFrame(draw);
    }
    draw();
}

/* ==========================================================================
   3. PROJECTS GRID & FILTERING
   ========================================================================== */
function projectButtons(p, compact) {
    const btns = [];
    if (p.links && p.links.play) {
        btns.push(`<button class="card-btn ${compact ? 'card-btn-ghost' : 'btn btn-primary'} btn-play" data-game="${esc(p.links.play)}" data-title="${esc(p.title)}"><span>▶ O'ynash</span></button>`);
    }
    if (p.links && p.links.github) {
        btns.push(`<a href="${esc(p.links.github)}" target="_blank" rel="noopener" class="card-btn card-btn-ghost ${compact ? '' : 'btn btn-secondary'}"><span>💻 GitHub</span></a>`);
    }
    return btns.join('');
}

function initProjectsGrid() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!grid || typeof PROJECTS_DATA === 'undefined') return;

    function renderCards(filter) {
        grid.innerHTML = '';
        const filtered = PROJECTS_DATA.filter(p => filter === 'all' || p.category.includes(filter));

        if (filtered.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Bu toifada hozircha loyiha yo'q.</p>`;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.dataset.id = p.id;
            card.innerHTML = `
                <div class="card-banner card-banner-img">
                    <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">
                    <span class="card-badge-engine ${p.engineClass}">
                        ${p.engine.includes('Godot') ? '🤖' : '⚡'} ${esc(p.engine)}
                    </span>
                    <span class="card-badge-status">${esc(p.status)}</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${esc(p.icon || '')} ${esc(p.title)}</h3>
                    <div class="card-tagline">${esc(p.tagline)}</div>
                    <p class="card-desc">${esc(p.shortDesc)}</p>
                    <div class="card-tags">
                        ${p.tags.map(t => `<span class="tag-pill">${esc(t)}</span>`).join('')}
                    </div>
                    <div class="card-footer">
                        <button class="card-btn card-btn-primary btn-details" data-id="${esc(p.id)}">
                            <span>ℹ️ Batafsil</span>
                        </button>
                        ${projectButtons(p, true)}
                    </div>
                </div>
            `;
            card.querySelectorAll('button, a').forEach(btn => btn.addEventListener('mouseenter', () => sfx('playHover')));
            card.querySelector('.card-banner').addEventListener('click', () => openModal(p.id));
            grid.appendChild(card);
        });

        grid.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', (e) => openModal(e.currentTarget.dataset.id));
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sfx('playClick');
            renderCards(btn.dataset.filter);
        });
    });

    renderCards('all');
}

/* ==========================================================================
   4. MODAL CASE STUDY
   ========================================================================== */
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    const tabBtns = modal.querySelectorAll('.modal-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            modal.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.toggle('active', pane.id === `tab-${btn.dataset.tab}`);
            });
            sfx('playClick');
        });
    });
}

function showGalleryImage(project, index) {
    const item = project.gallery[index];
    const main = document.getElementById('modal-gallery-main');
    main.src = item.src;
    main.alt = item.caption;
    document.getElementById('modal-gallery-caption').textContent = item.caption;
    document.querySelectorAll('#modal-gallery-thumbs img').forEach((t, i) => t.classList.toggle('active', i === index));
}

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    if (!modal || typeof PROJECTS_DATA === 'undefined') return;
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    sfx('playCoin');

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tagline').textContent = project.tagline;
    document.getElementById('modal-engine').textContent = project.engine;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-status').textContent = project.status;
    document.getElementById('modal-full-desc').textContent = project.fullDesc;

    // gallery
    const thumbs = document.getElementById('modal-gallery-thumbs');
    thumbs.innerHTML = project.gallery.map((g, i) => `<img src="${esc(g.src)}" alt="${esc(g.caption)}" data-i="${i}" loading="lazy">`).join('');
    thumbs.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => { sfx('playClick'); showGalleryImage(project, +img.dataset.i); });
    });
    thumbs.hidden = project.gallery.length < 2;
    showGalleryImage(project, 0);

    // metrics
    document.getElementById('modal-metrics').innerHTML = Object.entries(project.metrics || {}).map(([k, v]) =>
        `<div class="metric-chip"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join('');

    const note = document.getElementById('modal-note');
    note.hidden = !project.note;
    note.textContent = project.note || '';

    const actions = document.getElementById('modal-actions');
    actions.innerHTML = projectButtons(project, false);
    bindPlayButtons(actions);

    document.getElementById('modal-mechanics').innerHTML = project.mechanics.map(m => `
        <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="color: var(--accent-emerald);">✔</span>
            <span>${esc(m)}</span>
        </li>`).join('');
    document.getElementById('modal-tags').innerHTML = project.tags.map(t => `<span class="tag-pill">${esc(t)}</span>`).join('');

    document.getElementById('modal-challenge-prob').textContent = project.technicalChallenge.problem;
    document.getElementById('modal-challenge-sol').textContent = project.technicalChallenge.solution;
    document.getElementById('modal-code').textContent = project.codeSnippet;
    document.getElementById('modal-code-source').textContent = project.codeSource || '';

    const tabs = modal.querySelectorAll('.modal-tab-btn');
    tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
    modal.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === 'tab-overview'));
    modal.querySelector('.modal-container').scrollTop = 0;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

/* ==========================================================================
   5. 3D ART GRID
   ========================================================================== */
function initArtGrid() {
    const grid = document.getElementById('art-grid');
    if (!grid || typeof ART_DATA === 'undefined') return;
    grid.innerHTML = ART_DATA.map(a => `
        <figure class="art-card">
            <div class="art-img">
                <img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">
                ${a.extra ? `<img class="art-img-alt" src="${esc(a.extra)}" alt="" loading="lazy">` : ''}
            </div>
            <figcaption>
                <h3>${esc(a.title)}</h3>
                <span class="art-tool">${esc(a.tool)}</span>
                <p>${esc(a.desc)}</p>
            </figcaption>
        </figure>`).join('');
}

/* ==========================================================================
   6. BROWSER GAME PLAYER (Godot Web builds in an iframe, loaded on demand)
   ========================================================================== */
function bindPlayButtons(root) {
    root.querySelectorAll('.btn-play').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openGame(btn.dataset.game, btn.dataset.title);
        });
    });
}

function openGame(url, title) {
    if (location.protocol === 'file:') {
        const warn = document.getElementById('file-warning');
        if (warn) { warn.hidden = false; closeModal(); warn.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        return;
    }
    closeModal();
    const overlay = document.getElementById('game-overlay');
    document.getElementById('game-title').textContent = title;
    document.getElementById('game-newtab').href = url;
    document.getElementById('game-frame').src = url;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    sfx('playCoin');
}

function closeGame() {
    const overlay = document.getElementById('game-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.getElementById('game-frame').src = 'about:blank';   // stop the game and free memory
    document.body.style.overflow = '';
}

function initGamePlayer() {
    bindPlayButtons(document);
    // cards are rendered later on filter clicks: catch those too
    document.getElementById('projects-grid')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-play');
        if (btn && !btn.dataset.bound) { e.stopPropagation(); openGame(btn.dataset.game, btn.dataset.title); }
    });
    document.getElementById('game-close')?.addEventListener('click', closeGame);
    window.addEventListener('keydown', (e) => {
        const overlay = document.getElementById('game-overlay');
        if (e.key === 'Escape' && overlay?.classList.contains('open') && document.activeElement?.id !== 'game-frame') closeGame();
    });
    if (location.protocol === 'file:') {
        const warn = document.getElementById('file-warning');
        if (warn) warn.hidden = false;
    }
}

/* ==========================================================================
   7. SOCIAL LINKS (empty ones are hidden)
   ========================================================================== */
function initSocialLinks() {
    const box = document.getElementById('social-links');
    if (!box || typeof DEVELOPER_PROFILE === 'undefined') return;
    const s = DEVELOPER_PROFILE.socials;
    const items = [
        ['github', '💻', 'GitHub', s.github],
        ['itchio', '📦', 'itch.io', s.itchio],
        ['linkedin', '💼', 'LinkedIn', s.linkedin],
        ['telegram', '✈️', 'Telegram', s.telegram],
        ['email', '✉️', 'Email', s.email ? `mailto:${s.email}` : '']
    ].filter(i => i[3]);
    box.innerHTML = items.map(([, icon, label, url]) =>
        `<a href="${esc(url)}" target="_blank" rel="noopener" class="social-btn"><span>${icon}</span> <span>${label}</span></a>`).join('');
}

/* ==========================================================================
   8. MINI-GAME
   ========================================================================== */
function initMiniGame() {
    if (typeof MiniGame !== 'undefined') {
        window.activeMiniGame = new MiniGame('minigame-canvas');
    }
}

/* ==========================================================================
   9. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNav() {
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navLinks && navLinks.classList.remove('open'));
    });
}
