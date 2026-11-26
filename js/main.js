// Portfolio controller: language (UZ/EN), rendering, modal, browser games, background, nav.

/* ==========================================================================
   0. LANGUAGE
   ========================================================================== */
const LANGS = ['uz', 'en'];

function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
        const saved = localStorage.getItem('portfolio_lang');
        if (LANGS.includes(saved)) return saved;
    } catch (e) { /* storage blocked */ }
    const prefs = navigator.languages || [navigator.language || ''];
    return prefs.some(l => String(l).toLowerCase().startsWith('uz')) ? 'uz' : 'en';
}

let LANG = detectLang();

/** Pick the current language from a {uz, en} object (plain strings pass through). */
function tr(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return v[LANG] ?? v.uz ?? v.en ?? '';
}

/** UI string by key, with {name} placeholders. */
function t(key, vars) {
    let s = tr(UI_TEXT[key]) || key;
    if (vars) for (const [k, val] of Object.entries(vars)) s = s.replace(`{${k}}`, val);
    return s;
}
window.t = t;

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sfx = (name) => { if (window.soundFX) window.soundFX[name](); };

function applyStatic() {
    document.documentElement.lang = LANG;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('.lang-btn').forEach(b => {
        const on = b.dataset.lang === LANG;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
    });
    updateSoundButton();
}

function setLang(lang) {
    if (!LANGS.includes(lang) || lang === LANG) return;
    LANG = lang;
    try { localStorage.setItem('portfolio_lang', lang); } catch (e) { /* ignore */ }
    renderAll();
    if (currentProject) fillModal(currentProject);
    if (window.activeMiniGame) window.activeMiniGame.redraw();
}

function renderAll() {
    applyStatic();
    renderProjects();
    renderLearning();
    renderArt();
    renderSkills();
    renderTimeline();
    renderSocialLinks();
}

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => { sfx('playClick'); setLang(b.dataset.lang); }));
    initAudioToggle();
    initBackgroundCanvas();
    initFilters();
    initModal();
    initGamePlayer();
    initMiniGame();
    initNav();
});

/* ==========================================================================
   1. SOUND (off by default; hover/click blips once the visitor turns it on)
   ========================================================================== */
function updateSoundButton() {
    const btn = document.getElementById('sound-toggle');
    if (!btn || !window.soundFX) return;
    const on = window.soundFX.enabled;
    btn.innerHTML = `<span>${on ? '🔊' : '🔇'}</span> <span>${esc(t(on ? 'sound.on' : 'sound.off'))}</span>`;
    btn.classList.toggle('muted', !on);
    btn.setAttribute('aria-pressed', on);
}

function initAudioToggle() {
    document.getElementById('sound-toggle')?.addEventListener('click', () => {
        window.soundFX.toggle();
        updateSoundButton();
    });
    // Delegated, so cards rendered later get the sounds too.
    let lastHover = null;
    document.addEventListener('pointerover', (e) => {
        const el = e.target.closest('a, button, [role="button"]');
        if (el && el !== lastHover && e.pointerType === 'mouse') sfx('playHover');
        lastHover = el;
    });
    document.addEventListener('click', (e) => {
        if (e.target.closest('a, button, [role="button"]') && !e.target.closest('#sound-toggle, .lang-btn')) sfx('playClick');
    });
}

/* ==========================================================================
   2. BACKGROUND PARTICLES (paused while a game is open, static for reduced motion)
   ========================================================================== */
const bgState = { paused: false, draw: null };

function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = 0, height = 0;
    const resize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
    resize();

    const particles = [];
    const count = Math.min(60, Math.floor(width / 25));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width, y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? '#00f0ff' : '#478cbf',
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    let running = false;
    let last = performance.now();

    function frame(now) {
        const dt = Math.min((now - last) / 16.667, 3);   // 1.0 = one 60 Hz frame
        last = now;
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx * dt; p.y += p.vy * dt;
            if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
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
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
        if (running) requestAnimationFrame(frame);
    }

    function update() {
        const shouldRun = !reduced.matches && !bgState.paused && !document.hidden;
        if (shouldRun && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
        else if (!shouldRun) running = false;
        if (!shouldRun && !running) frame(performance.now()); // one static frame
    }
    bgState.update = update;

    window.addEventListener('resize', () => { resize(); if (!running) frame(performance.now()); });
    document.addEventListener('visibilitychange', update);
    reduced.addEventListener?.('change', update);
    update();
}

function setBackgroundPaused(paused) {
    bgState.paused = paused;
    bgState.update?.();
}

/* ==========================================================================
   3. PROJECTS: grouped by status, filtered by engine / feature
   ========================================================================== */
const STATUS_GROUPS = ['released', 'wip', 'prototype'];
let currentFilter = 'all';

function matchesFilter(p, filter) {
    return filter === 'all' || p.category.includes(filter);
}

function projectButtons(p, compact) {
    const btns = [];
    if (p.links?.play) {
        btns.push(`<button type="button" class="card-btn ${compact ? 'card-btn-ghost' : 'btn btn-primary'} btn-play" data-game="${esc(p.links.play)}" data-title="${esc(p.title)}"><span>${esc(t('card.play'))}</span></button>`);
    }
    if (p.links?.github) {
        btns.push(`<a href="${esc(p.links.github)}" target="_blank" rel="noopener" class="card-btn card-btn-ghost ${compact ? '' : 'btn btn-secondary'}"><span>${esc(t('card.github'))}</span></a>`);
    }
    return btns.join('');
}

function projectCard(p) {
    const engineIcon = p.engine.includes('Godot') ? '🤖' : '⚡';
    return `
        <article class="project-card" data-id="${esc(p.id)}">
            <div class="card-banner card-banner-img" role="button" tabindex="0" data-open="${esc(p.id)}" aria-label="${esc(p.title)}: ${esc(t('card.open'))}">
                <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">
                <span class="card-badge-engine ${p.engineClass}">${engineIcon} ${esc(p.engine)}</span>
                <span class="card-badge-status status-${esc(p.status)}">${esc(tr(p.statusText))}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${esc(p.icon || '')} ${esc(p.title)}</h3>
                <div class="card-tagline">${esc(tr(p.tagline))}</div>
                <p class="card-desc">${esc(tr(p.shortDesc))}</p>
                <div class="card-tags">${p.tags.map(tag => `<span class="tag-pill">${esc(tag)}</span>`).join('')}</div>
                <div class="card-footer">
                    <button type="button" class="card-btn card-btn-primary" data-open="${esc(p.id)}"><span>${esc(t('card.details'))}</span></button>
                    ${projectButtons(p, true)}
                </div>
            </div>
        </article>`;
}

function renderProjects() {
    const box = document.getElementById('projects-groups');
    if (!box || typeof PROJECTS_DATA === 'undefined') return;
    const html = STATUS_GROUPS.map(status => {
        const items = PROJECTS_DATA.filter(p => p.status === status && matchesFilter(p, currentFilter));
        if (!items.length) return '';
        return `
            <div class="project-group">
                <h3 class="group-title">${esc(t('group.' + status))} <span class="group-count">${items.length}</span></h3>
                <div class="projects-grid">${items.map(projectCard).join('')}</div>
            </div>`;
    }).join('');
    box.innerHTML = html || `<p class="empty-note">${esc(t('group.empty'))}</p>`;
}

function renderLearning() {
    const grid = document.getElementById('learning-grid');
    if (!grid || typeof LEARNING_DATA === 'undefined') return;
    const block = grid.closest('.learning-block');
    const items = LEARNING_DATA.filter(item => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'godot') return item.engine.includes('Godot');
        if (currentFilter === 'unity') return item.engine.includes('Unity');
        return false;
    });
    block.hidden = items.length === 0;
    grid.innerHTML = items.map(item => `
        <div class="learning-item">
            <div class="learning-head">
                <strong>${esc(item.title)}</strong>
                <span class="learning-kind">${esc(tr(item.kind))}</span>
            </div>
            <div class="learning-engine">${esc(item.engine)} · ${esc(tr(item.date))}</div>
            <p>${esc(tr(item.desc))}</p>
            ${item.github ? `<a class="learning-link" href="${esc(item.github)}" target="_blank" rel="noopener">${esc(t('card.github'))} ↗</a>` : ''}
        </div>`).join('');
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.toggle('active', b === btn));
            currentFilter = btn.dataset.filter;
            renderProjects();
            renderLearning();
        });
    });

    const groups = document.getElementById('projects-groups');
    groups?.addEventListener('click', (e) => {
        const play = e.target.closest('.btn-play');
        if (play) { openGame(play.dataset.game, play.dataset.title); return; }
        const opener = e.target.closest('[data-open]');
        if (opener) openModal(opener.dataset.open, opener);
    });
    groups?.addEventListener('keydown', (e) => {
        const opener = e.target.closest('.card-banner[data-open]');
        if (opener && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(opener.dataset.open, opener); }
    });
}

/* ==========================================================================
   4. MODAL CASE STUDY (focus kept inside, Escape closes, focus returns)
   ========================================================================== */
let currentProject = null;
let modalReturnFocus = null;

function trapFocus(container, e) {
    if (e.key !== 'Tab') return;
    const focusables = [...container.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"], iframe')]
        .filter(el => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function initModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    document.getElementById('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { e.preventDefault(); closeModal(); }
        trapFocus(modal, e);
    });

    const tabBtns = modal.querySelectorAll('.modal-tab-btn');
    tabBtns.forEach(btn => btn.addEventListener('click', () => selectTab(btn.dataset.tab)));

    document.getElementById('modal-gallery-thumbs').addEventListener('click', (e) => {
        const thumb = e.target.closest('[data-i]');
        if (thumb && currentProject) showGalleryImage(currentProject, +thumb.dataset.i);
    });
    document.getElementById('modal-actions').addEventListener('click', (e) => {
        const play = e.target.closest('.btn-play');
        if (play) openGame(play.dataset.game, play.dataset.title);
    });
}

function selectTab(name) {
    const modal = document.getElementById('project-modal');
    modal.querySelectorAll('.modal-tab-btn').forEach(b => {
        const on = b.dataset.tab === name;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
    });
    modal.querySelectorAll('.tab-pane').forEach(pane => pane.classList.toggle('active', pane.id === `tab-${name}`));
}

function showGalleryImage(project, index) {
    const item = project.gallery[index];
    const main = document.getElementById('modal-gallery-main');
    main.src = item.src;
    main.alt = tr(item.caption);
    document.getElementById('modal-gallery-caption').textContent = tr(item.caption);
    document.querySelectorAll('#modal-gallery-thumbs [data-i]').forEach((b, i) => {
        b.classList.toggle('active', i === index);
        b.setAttribute('aria-current', i === index);
    });
    project._galleryIndex = index;
}

function fillModal(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tagline').textContent = tr(project.tagline);
    document.getElementById('modal-engine').textContent = project.engine;
    document.getElementById('modal-role').textContent = tr(project.role);
    document.getElementById('modal-duration').textContent = tr(project.duration);
    document.getElementById('modal-status').textContent = tr(project.statusText);
    document.getElementById('modal-full-desc').textContent = tr(project.fullDesc);

    const thumbs = document.getElementById('modal-gallery-thumbs');
    thumbs.innerHTML = project.gallery.map((g, i) =>
        `<button type="button" class="gallery-thumb" data-i="${i}" aria-label="${esc(tr(g.caption))}"><img src="${esc(g.src)}" alt="" loading="lazy"></button>`).join('');
    thumbs.hidden = project.gallery.length < 2;
    showGalleryImage(project, project._galleryIndex || 0);

    document.getElementById('modal-metrics').innerHTML = (project.metrics || []).map(m =>
        `<div class="metric-chip"><span>${esc(tr(m.k))}</span><strong>${esc(tr(m.v))}</strong></div>`).join('');

    const note = document.getElementById('modal-note');
    note.hidden = !project.note;
    note.textContent = tr(project.note);

    document.getElementById('modal-actions').innerHTML = projectButtons(project, false);

    document.getElementById('modal-mechanics').innerHTML = project.mechanics.map(m =>
        `<li><span class="check">✔</span><span>${esc(tr(m))}</span></li>`).join('');
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span class="tag-pill">${esc(tag)}</span>`).join('');

    document.getElementById('modal-challenge-prob').textContent = tr(project.technicalChallenge.problem);
    document.getElementById('modal-challenge-sol').textContent = tr(project.technicalChallenge.solution);
    document.getElementById('modal-code').textContent = project.codeSnippet;
    document.getElementById('modal-code-source').textContent = project.codeSource || '';
}

function openModal(projectId, opener) {
    const modal = document.getElementById('project-modal');
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!modal || !project) return;
    sfx('playCoin');
    currentProject = project;
    project._galleryIndex = 0;
    fillModal(project);
    selectTab('overview');
    modal.querySelector('.modal-container').scrollTop = 0;

    modalReturnFocus = opener || document.activeElement;
    modal.hidden = false;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal-close').focus();
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.hidden = true;
    currentProject = null;
    document.body.style.overflow = '';
    if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
    modalReturnFocus = null;
}

/* ==========================================================================
   5. 3D ART, SKILLS, TIMELINE, CONTACTS
   ========================================================================== */
function renderArt() {
    const grid = document.getElementById('art-grid');
    if (!grid || typeof ART_DATA === 'undefined') return;
    grid.innerHTML = ART_DATA.map(a => `
        <figure class="art-card">
            <div class="art-img">
                <img src="${esc(a.image)}" alt="${esc(tr(a.title))}" loading="lazy">
                ${a.extra ? `<img class="art-img-alt" src="${esc(a.extra)}" alt="" loading="lazy">` : ''}
            </div>
            <figcaption>
                <h3>${esc(tr(a.title))}</h3>
                <span class="art-tool">${esc(a.tool)}</span>
                <p>${esc(tr(a.desc))}</p>
            </figcaption>
        </figure>`).join('');
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid || typeof SKILLS_DATA === 'undefined') return;
    grid.innerHTML = SKILLS_DATA.map(cat => `
        <div class="skill-category-card">
            <div class="skill-cat-header">
                <div class="skill-cat-icon">${cat.icon}</div>
                <h3 class="skill-cat-title">${esc(tr(cat.title))}</h3>
            </div>
            <ul class="skill-items-list">
                ${cat.rows.map(r => `<li class="skill-row"><span class="skill-name">${esc(tr(r.name))}</span><span class="skill-evidence">${esc(tr(r.where))}</span></li>`).join('')}
            </ul>
        </div>`).join('');
}

function renderTimeline() {
    const box = document.getElementById('timeline');
    if (!box || typeof TIMELINE_DATA === 'undefined') return;
    box.innerHTML = TIMELINE_DATA.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${esc(tr(item.date))}</div>
                <h3 class="timeline-title">${esc(tr(item.title))}</h3>
                <p class="timeline-desc">${esc(tr(item.desc))}</p>
            </div>
        </div>`).join('');
}

function renderSocialLinks() {
    const box = document.getElementById('social-links');
    if (!box || typeof DEVELOPER_PROFILE === 'undefined') return;
    const s = DEVELOPER_PROFILE.socials;
    const items = [
        ['✉️', t('contact.email'), s.email, s.email ? `mailto:${s.email}` : ''],
        ['📞', t('contact.phone'), s.phone, s.phone ? `tel:${s.phone.replace(/[^\d+]/g, '')}` : ''],
        ['💼', 'LinkedIn', 'xabibullo-shamsiddinov', s.linkedin],
        ['💻', 'GitHub', 'xabibulloshamsiddinov', s.github],
        ['✈️', 'Telegram', s.telegram, s.telegram],
        ['📦', 'itch.io', s.itchio, s.itchio]
    ].filter(i => i[3]);
    box.innerHTML = items.map(([icon, label, value, url]) => {
        const external = /^https?:/.test(url);
        return `<a href="${esc(url)}" ${external ? 'target="_blank" rel="noopener"' : ''} class="social-btn">
            <span class="social-icon">${icon}</span>
            <span class="social-text"><span class="social-label">${esc(label)}</span><span class="social-value">${esc(value)}</span></span>
        </a>`;
    }).join('');
}

/* ==========================================================================
   6. BROWSER GAME PLAYER (Godot Web builds in an iframe, loaded on demand)
   ========================================================================== */
let gameReturnFocus = null;

function openGame(url, title) {
    if (location.protocol === 'file:') {
        const warn = document.getElementById('file-warning');
        if (warn) { warn.hidden = false; closeModal(); warn.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        return;
    }
    gameReturnFocus = document.activeElement;
    closeModal();
    const overlay = document.getElementById('game-overlay');
    document.getElementById('game-title').textContent = title;
    document.getElementById('game-newtab').href = url;
    const frame = document.getElementById('game-frame');
    frame.title = title;
    frame.src = url;
    overlay.hidden = false;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setBackgroundPaused(true);
    window.activeMiniGame?.pause();
    sfx('playCoin');
    frame.focus();
}

function closeGame() {
    const overlay = document.getElementById('game-overlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    overlay.hidden = true;
    document.getElementById('game-frame').src = 'about:blank';   // stop the game and free memory
    document.body.style.overflow = '';
    setBackgroundPaused(false);
    if (gameReturnFocus && document.contains(gameReturnFocus)) gameReturnFocus.focus();
}

function initGamePlayer() {
    document.querySelectorAll('.play-card .btn-play').forEach(btn =>
        btn.addEventListener('click', () => openGame(btn.dataset.game, btn.dataset.title)));
    document.getElementById('game-close')?.addEventListener('click', closeGame);
    const overlay = document.getElementById('game-overlay');
    // Escape inside the iframe goes to the game; this only fires when focus is on the bar.
    overlay?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeGame();
        trapFocus(overlay, e);
    });
    if (location.protocol === 'file:') {
        const warn = document.getElementById('file-warning');
        if (warn) warn.hidden = false;
    }
}

/* ==========================================================================
   7. MINI-GAME
   ========================================================================== */
function initMiniGame() {
    if (typeof MiniGame !== 'undefined') window.activeMiniGame = new MiniGame('minigame-canvas');
}

/* ==========================================================================
   8. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNav() {
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            mobileBtn.setAttribute('aria-expanded', open);
        });
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks?.classList.remove('open');
            mobileBtn?.setAttribute('aria-expanded', 'false');
        });
    });
}
