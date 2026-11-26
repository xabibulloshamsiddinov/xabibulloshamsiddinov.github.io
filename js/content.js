// Sahifa matnlari (UZ / EN), ko'nikmalar va "Yo'l" bo'limi.
// HTML'da data-i18n="kalit" -> textContent, data-i18n-html="kalit" -> innerHTML (faqat shu fayldagi ishonchli matn).

const UI_TEXT = {
    "meta.title": { uz: "Xabibullo Shamsiddinov | Game Developer Portfolio", en: "Xabibullo Shamsiddinov | Game Developer Portfolio" },
    "meta.desc": {
        uz: "Xabibullo Shamsiddinov — game developer va game designer (Toshkent). Godot 4 va Unity 6 da 10 ta o'yin, 3 tasini brauzerda o'ynasa bo'ladi.",
        en: "Xabibullo Shamsiddinov — game developer and game designer from Tashkent. 10 games in Godot 4 and Unity 6, 3 of them playable in the browser."
    },

    "nav.games": { uz: "O'yinlar", en: "Games" },
    "nav.play": { uz: "O'ynash", en: "Play" },
    "nav.art": { uz: "3D ishlar", en: "3D art" },
    "nav.skills": { uz: "Ko'nikmalar", en: "Skills" },
    "nav.journey": { uz: "Yo'l", en: "Journey" },
    "nav.contact": { uz: "Aloqa", en: "Contact" },
    "nav.hire": { uz: "Bog'lanish", en: "Contact me" },
    "nav.menu": { uz: "Menyu", en: "Menu" },
    "sound.on": { uz: "Ovoz: ON", en: "Sound: ON" },
    "sound.off": { uz: "Ovoz: OFF", en: "Sound: OFF" },
    "sound.title": { uz: "8-bit ovoz effektlarini yoqish/o'chirish", en: "Toggle 8-bit sound effects" },

    "hero.badge": { uz: "Millat Umidi University talabasi · Ish va amaliyotga ochiq", en: "Student at Millat Umidi University · Open to jobs and internships" },
    "hero.role": { uz: "Game Developer · Game Designer", en: "Game Developer · Game Designer" },
    "hero.sub": {
        uz: "Godot 4 va Unity 6 da o'yinlarni g'oyadan tayyor build'gacha olib boraman: 100 darajali raketa o'yini, LAN multiplayer FPS, 2D platformer, OpenStreetMap'dan qurilgan Toshkent. Python bilan tool va pipeline yozaman, har bir loyihada avtomatik test va skrinshot bilan tekshiraman.",
        en: "I take games in Godot 4 and Unity 6 from idea to a finished build: a 100-level rocket game, a LAN multiplayer FPS, a 2D platformer and a real Tashkent built from OpenStreetMap. I write tools and pipelines in Python and check every project with automated tests and screenshots."
    },
    "hero.cta.games": { uz: "🕹️ O'yinlarni ko'rish", en: "🕹️ See the games" },
    "hero.cta.play": { uz: "▶ Brauzerda o'ynash", en: "▶ Play in the browser" },
    "hero.cta.contact": { uz: "✉️ Bog'lanish", en: "✉️ Contact" },
    "card.location": { uz: "📍 Toshkent, O'zbekiston", en: "📍 Tashkent, Uzbekistan" },
    "card.uni": { uz: "🎓 Millat Umidi University", en: "🎓 Millat Umidi University" },
    "stat.games": { uz: "O'yin loyihasi", en: "Game projects" },
    "stat.done": { uz: "Tugallangan", en: "Finished" },
    "stat.web": { uz: "Brauzerda", en: "In browser" },
    "stat.engines": { uz: "Dvijok", en: "Engines" },

    "strip.chunks": { uz: "Toshkent chunklari (OSM)", en: "Tashkent chunks (OSM)" },
    "strip.levels": { uz: "Daraja (Rocket Boost)", en: "Levels (Rocket Boost)" },
    "strip.players": { uz: "O'yinchi LAN'da (Team Shooter)", en: "Players over LAN (Team Shooter)" },
    "strip.langs": { uz: "Lokalizatsiya", en: "Localization" },

    "projects.tag": { uz: "Mening ishlarim", en: "My work" },
    "projects.title": { uz: "O'yin loyihalari", en: "Game projects" },
    "projects.desc": {
        uz: "Rasmlar o'yinlarning o'zidan olingan. \"Batafsil\" tugmasida galereya, mexanikalar, hal qilingan texnik muammo va loyihadan olingan kod parchasi bor — har birini tushuntirib bera olaman.",
        en: "Every image comes from the games themselves. \"Details\" opens a gallery, the mechanics, a technical problem I solved and a real code excerpt from the project — I'm happy to walk through any of it."
    },
    "filter.all": { uz: "Hammasi", en: "All" },
    "filter.godot": { uz: "🤖 Godot", en: "🤖 Godot" },
    "filter.unity": { uz: "⚡ Unity", en: "⚡ Unity" },
    "filter.web": { uz: "▶ Brauzerda", en: "▶ In browser" },
    "filter.multiplayer": { uz: "👥 Multiplayer", en: "👥 Multiplayer" },
    "group.released": { uz: "✅ Tugallangan va o'ynasa bo'ladigan", en: "✅ Finished and playable" },
    "group.wip": { uz: "🛠️ Ishlab chiqilmoqda", en: "🛠️ In development" },
    "group.prototype": { uz: "🧪 Prototiplar", en: "🧪 Prototypes" },
    "group.learning": { uz: "📚 Kichik va o'quv loyihalari", en: "📚 Small and learning projects" },
    "group.empty": { uz: "Bu toifada hozircha loyiha yo'q.", en: "No projects in this category yet." },
    "card.details": { uz: "ℹ️ Batafsil", en: "ℹ️ Details" },
    "card.play": { uz: "▶ O'ynash", en: "▶ Play" },
    "card.github": { uz: "💻 GitHub", en: "💻 GitHub" },
    "card.open": { uz: "batafsil ochish", en: "open details" },

    "play.tag": { uz: "Hoziroq sinab ko'ring", en: "Try it now" },
    "play.title": { uz: "▶ Brauzerda o'ynash", en: "▶ Play in the browser" },
    "play.desc": {
        uz: "Uchala o'yin Godot'dan Web (WebAssembly) qilib eksport qilingan va bitta umumiy dvijok faylini ishlatadi: birinchi o'yin ~40 MB yuklaydi, keyingilari faqat o'z ma'lumotini (1–8 MB). Kompyuterda klaviatura bilan o'ynaladi.",
        en: "All three games are Godot Web (WebAssembly) exports sharing one engine file: the first game downloads ~40 MB, the others only their own data (1–8 MB). Best played on a computer with a keyboard."
    },
    "play.rocket.desc": { uz: "Raketani maydonchaga sekin va tik qo'ndiring. 100 daraja, Space Guardians va Rocket Race rejimlari.", en: "Land the rocket slowly and upright on the pad. 100 levels plus the Space Guardians and Rocket Race modes." },
    "play.samurai.desc": { uz: "Siluet uslubidagi 2D platformer: 4 daraja, devorga chiqish, ryvok va oni-boss.", en: "A silhouette-style 2D platformer: 4 levels, wall climbing, dashes and an oni boss." },
    "play.neon.desc": { uz: "Endless runner: poyezd va to'siqlardan qoching. Menyudagi 2 PLAYERS — bitta klaviaturada ikki kishilik poyga.", en: "Endless runner: dodge trains and barriers. 2 PLAYERS in the menu is a two-player race on one keyboard." },
    "key.thrust": { uz: "dvigatel", en: "thrust" },
    "key.turn": { uz: "burilish", en: "turn" },
    "key.restart": { uz: "qayta", en: "restart" },
    "key.move": { uz: "yurish", en: "move" },
    "key.jump": { uz: "sakrash", en: "jump" },
    "key.attack": { uz: "zarba / shuriken", en: "slash / shuriken" },
    "key.dash": { uz: "ryvok", en: "dash" },
    "key.lane": { uz: "yo'lak", en: "lane" },
    "key.roll": { uz: "yumalash", en: "roll" },
    "play.mobile": { uz: "📱 Telefonda Rocket Boost va Neon Rails'ni sensor bilan o'ynasa bo'ladi; Samurai uchun klaviatura kerak.", en: "📱 On phones Rocket Boost and Neon Rails work with touch; Samurai needs a keyboard." },
    "file.warning": {
        uz: "⚠️ Sahifa fayl sifatida (file://) ochilgan. Godot web o'yinlari faqat server orqali ishlaydi: papkada <code>python -m http.server 8000</code> ni ishga tushirib, <code>http://localhost:8000</code> ni oching.",
        en: "⚠️ This page was opened as a file (file://). Godot web games need a server: run <code>python -m http.server 8000</code> in the folder and open <code>http://localhost:8000</code>."
    },
    "arcade.title": { uz: "BONUS · BUG BLASTER (HTML5 CANVAS, SHU SAHIFADA YOZILGAN)", en: "BONUS · BUG BLASTER (HTML5 CANVAS, WRITTEN FOR THIS PAGE)" },
    "arcade.controls": { uz: "🎮 Boshqaruv: <span class=\"ctrl-badge\">W A S D</span> yoki <span class=\"ctrl-badge\">Strelkalar</span>", en: "🎮 Move: <span class=\"ctrl-badge\">W A S D</span> or <span class=\"ctrl-badge\">Arrows</span>" },
    "arcade.fire": { uz: "⚡ O'q: <span class=\"ctrl-badge\">SPACE</span> yoki sichqoncha/barmoqni bosib turing", en: "⚡ Fire: <span class=\"ctrl-badge\">SPACE</span> or hold the mouse / your finger" },
    "arcade.bonus": { uz: "☕ Bonus: qahva triple-shot beradi", en: "☕ Bonus: coffee gives a triple shot" },

    "art.tag": { uz: "Blender · Sketchfab", en: "Blender · Sketchfab" },
    "art.title": { uz: "3D modellar va asset pipeline", en: "3D models and asset pipeline" },
    "art.desc": {
        uz: "Modellarni Blender Python skriptlari bilan quraman: skriptni o'zgartirib qayta ishga tushirsam, model qaytadan yasaladi. Tayyor modellarni (Sketchfab) konvertor orqali o'yinga olaman va litsenziyasini yozib boraman.",
        en: "I build models with Blender Python scripts: change the script, re-run it, and the model is rebuilt. Ready-made models (Sketchfab) go through a converter into the game, with their licenses recorded."
    },

    "skills.tag": { uz: "Texnologiyalar", en: "Tech" },
    "skills.title": { uz: "Ko'nikmalar va qayerda ishlatganim", en: "Skills and where I used them" },
    "skills.desc": { uz: "Foizlar o'rniga har bir ko'nikma yonida u ishlatilgan loyiha yozilgan.", en: "Instead of percentages, every skill lists the projects where I used it." },

    "journey.tag": { uz: "Yo'l", en: "Journey" },
    "journey.title": { uz: "Qanday o'sib boryapman", en: "How I'm growing" },
    "journey.desc": { uz: "Sanalar loyiha fayllari va commit tarixidan olingan.", en: "Dates come from project files and commit history." },

    "contact.title": { uz: "Birga o'yin qilamizmi? 🚀", en: "Let's make games together 🚀" },
    "contact.desc": {
        uz: "Junior game developer, gameplay yoki tools programmer sifatida jamoaga qo'shilishga tayyorman (Toshkentda yoki masofadan). Kod, build yoki loyihalar haqida savol bo'lsa, yozing yoki qo'ng'iroq qiling.",
        en: "I'm ready to join a team as a junior game developer, gameplay or tools programmer (in Tashkent or remote). If you have questions about the code, builds or projects, write or call me."
    },
    "contact.email": { uz: "Email", en: "Email" },
    "contact.phone": { uz: "Telefon", en: "Phone" },

    "footer.quote": { uz: "// \"Avval o'ynaladigan qil, keyin chiroyli qil.\"", en: "// \"Make it playable first, then make it pretty.\"" },
    "footer.rights": {
        uz: "© 2026 Xabibullo Shamsiddinov. Xarita ma'lumotlari © OpenStreetMap contributors. Uchinchi tomon modellari mualliflariga tegishli.",
        en: "© 2026 Xabibullo Shamsiddinov. Map data © OpenStreetMap contributors. Third-party models belong to their authors."
    },

    "modal.close": { uz: "Yopish", en: "Close" },
    "modal.overview": { uz: "Umumiy", en: "Overview" },
    "modal.mechanics": { uz: "Mexanikalar", en: "Mechanics" },
    "modal.challenge": { uz: "Muammo va kod", en: "Problem & code" },
    "modal.engine": { uz: "DVIJOK", en: "ENGINE" },
    "modal.role": { uz: "ROL", en: "ROLE" },
    "modal.time": { uz: "VAQT", en: "TIMELINE" },
    "modal.status": { uz: "HOLAT", en: "STATUS" },
    "modal.about": { uz: "Loyiha haqida:", en: "About the project:" },
    "modal.systems": { uz: "Qilingan asosiy tizimlar:", en: "Key systems I built:" },
    "modal.problem": { uz: "⚠️ Muammo:", en: "⚠️ Problem:" },
    "modal.solution": { uz: "💡 Yechim:", en: "💡 Solution:" },
    "modal.code": { uz: "Loyihadan kod:", en: "Code from the project:" },
    "game.newtab": { uz: "↗ Yangi oynada", en: "↗ Open in new tab" },
    "game.title": { uz: "O'yin", en: "Game" },

    "mini.title": { uz: "BUG BLASTER: DEV EDITION", en: "BUG BLASTER: DEV EDITION" },
    "mini.sub": { uz: "HTML5 Canvas mini-o'yini", en: "An HTML5 Canvas mini-game" },
    "mini.start": { uz: "[ BOSHLASH: SPACE YOKI BOSING ]", en: "[ START: SPACE OR CLICK ]" },
    "mini.help": { uz: "WASD / strelkalar · SPACE yoki bosib turish = o'q", en: "WASD / arrows · SPACE or hold = fire" },
    "mini.over": { uz: "CRASH: GAME OVER!", en: "CRASH: GAME OVER!" },
    "mini.score": { uz: "Ball: {s} | Rekord: {h}", en: "Score: {s} | Best: {h}" },
    "mini.again": { uz: "Qayta o'ynash: SPACE, R yoki bosing", en: "Play again: SPACE, R or click" },
    "mini.boost": { uz: "⚡ COFFEE BOOST!", en: "⚡ COFFEE BOOST!" }
};

const SKILLS_DATA = [
    {
        icon: "🎮",
        title: { uz: "Dvijoklar", en: "Engines" },
        rows: [
            { name: { uz: "Godot 4.6 — 2D/3D, Jolt Physics, Forward+/Mobile/Compatibility", en: "Godot 4.6 — 2D/3D, Jolt Physics, Forward+/Mobile/Compatibility" }, where: "Night Tashkent, Rocket Boost, Team Shooter, Samurai, Neon Rails, Jura Rush, Choyhona" },
            { name: { uz: "Unity 6 — URP, Input System, UI Toolkit, editor skriptlari", en: "Unity 6 — URP, Input System, UI Toolkit, editor scripting" }, where: "MarsGo, Bunker, Ashen Oaths" },
            { name: { uz: "Eksport: Android (imzolangan APK), Web/WASM, Windows", en: "Export: Android (signed APK), Web/WASM, Windows" }, where: "Rocket Boost, Samurai, Neon Rails, Team Shooter" },
            { name: { uz: "Shaderlar va VFX: alanga, fog, curved world, muzzle flash, protsedural fon", en: "Shaders & VFX: flame, fog, curved world, muzzle flash, procedural backgrounds" }, where: "Rocket Boost, Neon Rails, Team Shooter, Samurai" }
        ]
    },
    {
        icon: "💻",
        title: { uz: "Tillar", en: "Languages" },
        rows: [
            { name: { uz: "GDScript 2.0 — statik tiplar, signallar, @export, Resource", en: "GDScript 2.0 — static typing, signals, @export, Resources" }, where: { uz: "hamma Godot loyihalari", en: "all Godot projects" } },
            { name: { uz: "C# — interfeyslar, eventlar, editor skriptlari", en: "C# — interfaces, events, editor scripts" }, where: "MarsGo, Bunker, Ashen Oaths, Kitchen Chaos" },
            { name: { uz: "Python — ma'lumot pipeline, generatorlar, Blender API, Pillow", en: "Python — data pipelines, generators, Blender API, Pillow" }, where: { uz: "OSM shahar, daraja generatori, Samurai grafikasi va ovozi", en: "OSM city, level generator, Samurai art and audio" } },
            { name: { uz: "HTML/CSS/JS", en: "HTML/CSS/JS" }, where: { uz: "shu portfolio, Canvas o'yini, Jura Rush telefon kontrolleri", en: "this portfolio, its Canvas game, the Jura Rush phone controller" } }
        ]
    },
    {
        icon: "⚙️",
        title: { uz: "Gameplay va tizimlar", en: "Gameplay & systems" },
        rows: [
            { name: { uz: "Multiplayer: ENet, server avtoriteti, late join; WebSocket", en: "Multiplayer: ENet, server authority, late join; WebSocket" }, where: "Team Shooter, Jura Rush" },
            { name: { uz: "AI: navmesh botlar, ko'rish chizig'i, rollar; dushman holatlari", en: "AI: navmesh bots, line of sight, roles; enemy states" }, where: "Team Shooter, Samurai" },
            { name: { uz: "State machine, object pool, event bus, komponentlar", en: "State machines, object pools, event bus, components" }, where: "Neon Rails, Samurai" },
            { name: { uz: "Data-driven dizayn, protsedural darajalar, streaming (WorkerThreadPool)", en: "Data-driven design, procedural levels, streaming (WorkerThreadPool)" }, where: "Rocket Boost, MarsGo, Night Tashkent" },
            { name: { uz: "Save versiyalash va migratsiya, lokalizatsiya (uz/en/ru)", en: "Save versioning and migration, localization (uz/en/ru)" }, where: "Choyhona, Rocket Boost, Jura Rush" }
        ]
    },
    {
        icon: "🛠️",
        title: { uz: "Asboblar va ish usuli", en: "Tools & workflow" },
        rows: [
            { name: { uz: "Avtomatik testlar: headless test, bot soak, skrinshot tool'lar", en: "Automated testing: headless tests, bot soak, screenshot tools" }, where: "Rocket Boost, Neon Rails, Samurai, Team Shooter, MarsGo" },
            { name: { uz: "AI yordamida dasturlash (Claude Code): vazifani aniq yozish, kodni o'qib tekshirish, test", en: "AI-assisted development (Claude Code): clear specs, reading and reviewing the code, tests" }, where: { uz: "hamma yangi loyihalar", en: "all recent projects" } },
            { name: { uz: "Blender 5.2, Sketchfab, glb/FBX eksport, LOD", en: "Blender 5.2, Sketchfab, glb/FBX export, LOD" }, where: { uz: "3D ishlar bo'limi", en: "the 3D art section" } },
            { name: { uz: "Git, GitHub, Linux server (Ubuntu, systemd, netplan)", en: "Git, GitHub, Linux server (Ubuntu, systemd, netplan)" }, where: { uz: "loyiha repo'lari, universitetdagi System Administration kursi", en: "project repos, a System Administration course at university" } }
        ]
    }
];

const TIMELINE_DATA = [
    {
        date: { uz: "2026-yil 20–26-noyabr", en: "Nov 20–26, 2026" },
        title: { uz: "Team Shooter — LAN multiplayer FPS", en: "Team Shooter — a LAN multiplayer FPS" },
        desc: {
            uz: "Birinchi tarmoq o'yinim: ENet listen-server, server avtoritetidagi otish va iqtisod, 3 rejim, navmesh botlar va protsedural IK animatsiya. Windows build do'stlar bilan LAN'da sinovdan o'tdi.",
            en: "My first networked game: an ENet listen server, server-authoritative shooting and economy, 3 modes, navmesh bots and procedural IK animation. The Windows build was tested over LAN with friends."
        }
    },
    {
        date: { uz: "2026-yil 12–24-noyabr", en: "Nov 12–24, 2026" },
        title: { uz: "Samurai: Sakura Path, Jura Rush, Choyhona, Elemental Arena, Bunker", en: "Samurai: Sakura Path, Jura Rush, Choyhona, Elemental Arena, Bunker" },
        desc: {
            uz: "Universitet topshirig'i bo'lgan 2D platformerni oxirigacha yetkazdim (grafika va ovoz Python bilan). Neon Rails Jura Rush'ga aylandi va telefonlar kontroller bo'ladigan party rejimi qo'shildi. Choyhona'da 5 choyhona va save migratsiyasi, Unity'da Bunker uchun UI Toolkit kit'i.",
            en: "Finished a 2D platformer that started as a university assignment (art and audio generated with Python). Neon Rails became Jura Rush with a party mode where phones are the controllers. Choyhona got 5 teahouses and save migration; Bunker got a UI Toolkit kit in Unity."
        }
    },
    {
        date: { uz: "2026-yil 20-oktyabr – hozir", en: "Oct 20, 2026 – now" },
        title: { uz: "Night Tashkent", en: "Night Tashkent" },
        desc: {
            uz: "OpenStreetMap'dan haqiqiy Toshkentni quradigan Python pipeline, chunk streaming, mashina fizikasi, ko'priklar, landmarklar va Sketchfab mashinalari. Mashina uchun sedanni Blender'da skript bilan yasadim.",
            en: "A Python pipeline that builds the real Tashkent from OpenStreetMap, chunk streaming, car physics, bridges, landmarks and Sketchfab cars. I built the player's sedan with a Blender script."
        }
    },
    {
        date: { uz: "2026-yil 15-oktyabr – 18-noyabr", en: "Oct 15 – Nov 18, 2026" },
        title: { uz: "Rocket Boost — birinchi to'liq o'yin, keyin MarsGo (Unity)", en: "Rocket Boost — my first complete game, then MarsGo (Unity)" },
        desc: {
            uz: "Bitta prototipdan 100 darajali o'yinga: generator, 7 raketa, 2 qo'shimcha rejim, AdMob, imzolangan Android APK, Yandex Games uchun web build va uch tilga tarjima. So'ng uni Unity 6 + URP'ga ko'chirib, ikki dvijokni solishtirdim.",
            en: "From one prototype to a 100-level game: a generator, 7 rockets, 2 extra modes, AdMob, a signed Android APK, a Yandex Games web build and three languages. Then I ported it to Unity 6 + URP to compare the two engines."
        }
    },
    {
        date: { uz: "2026-yil iyul – oktyabr", en: "Jul – Oct 2026" },
        title: { uz: "Unity asoslari", en: "Unity fundamentals" },
        desc: {
            uz: "Kitchen Chaos kursi, Obstacle Dodge, Unity City Demo va Rocket Boost'ning ilk Unity versiyasi: C#, fizika, prefablar, UI va editor skriptlari.",
            en: "The Kitchen Chaos course, Obstacle Dodge, Unity City Demo and the first Unity version of Rocket Boost: C#, physics, prefabs, UI and editor scripting."
        }
    },
    {
        date: { uz: "Hozir · o'qish", en: "Now · education" },
        title: { uz: "Millat Umidi University talabasi", en: "Student at Millat Umidi University" },
        desc: {
            uz: "IT yo'nalishi. System Administration kursi: VirtualBox'da Ubuntu Server, foydalanuvchilar va huquqlar, paketlar, systemd, tarmoq (netplan, statik IP).",
            en: "IT program. A System Administration course: Ubuntu Server in VirtualBox, users and permissions, packages, systemd, networking (netplan, static IPs)."
        }
    }
];
