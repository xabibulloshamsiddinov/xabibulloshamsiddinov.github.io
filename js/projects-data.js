// Portfolio ma'lumotlari. Matnlar ikki tilda: { uz: "...", en: "..." }.
// Rasmlar o'yinlarning o'zidan olingan, kod parchalari loyiha fayllaridan ko'chirilgan (manba: `codeSource`).
// Holat (status): "released" = tugallangan / o'ynasa bo'ladi, "wip" = ishlab chiqilmoqda, "prototype" = prototip.

const PROJECTS_DATA = [
    /* ===================================================================== RELEASED */
    {
        id: "rocket-boost",
        title: "Rocket Boost",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile", "web"],
        status: "released",
        statusText: { uz: "Tugallangan · Android APK + Web", en: "Finished · Android APK + Web" },
        icon: "🚀",
        cover: "assets/images/rocket-boost/menu.jpg",
        gallery: [
            { src: "assets/images/rocket-boost/menu.jpg", caption: { uz: "Bosh menyu", en: "Main menu" } },
            { src: "assets/images/rocket-boost/level.jpg", caption: { uz: "Daraja: tezlik/burchak telemetriyasi, sensorli tugmalar", en: "A level: speed/angle telemetry and touch controls" } },
            { src: "assets/images/rocket-boost/space-guardians.jpg", caption: { uz: "Space Guardians: 1–2 o'yinchilik kooperativ shooter", en: "Space Guardians: 1–2 player co-op shooter" } },
            { src: "assets/images/rocket-boost/rockets.jpg", caption: { uz: "Raketa tanlash (Shuttle)", en: "Rocket select (Shuttle)" } },
            { src: "assets/images/rocket-boost/levels.jpg", caption: { uz: "100 ta daraja, yulduzlar bilan", en: "100 levels with star ratings" } },
            { src: "assets/images/rocket-boost/results.jpg", caption: { uz: "Qo'nish natijasi", en: "Landing result" } },
            { src: "assets/images/rocket-boost/versus.jpg", caption: { uz: "Rocket Race: 2 o'yinchi, ekran ikkiga bo'lingan", en: "Rocket Race: 2 players, split screen" } }
        ],
        tagline: { uz: "Lunar Lander uslubidagi 3D raketa o'yini: 100 daraja, 7 raketa, 3 rejim", en: "A Lunar Lander-style 3D rocket game: 100 levels, 7 rockets, 3 modes" },
        shortDesc: {
            uz: "Raketani maydonchadan maydonchaga hech narsaga urilmasdan olib borib, sekin va tik qo'ndirish kerak. Shu saytda brauzerda o'ynasa bo'ladi.",
            en: "Fly the rocket from pad to pad without touching anything and land it slowly and upright. Playable right here in the browser."
        },
        fullDesc: {
            uz: "Raketa X/Y tekisligida uchadi (Jolt Physics, Mobile renderer). 1–10-darajalar qo'lda yasalgan, 11–100-darajalar Python generatori bilan seed asosida qurilgan (har 10 darajada yangi olam va boss). 7 ta raketa (Shuttle va NUJ ham bor), qobiliyatlar (nitro, qalqon, muallaq turish, qochish), qo'shimcha rejimlar: Space Guardians (20 bosqich, bosslar, 6 samolyot) va Rocket Race (2 o'yinchi split-screen). Android uchun AdMob, sensorli boshqaruv va imzolangan APK, Yandex Games uchun web build, uz/en/ru tarjima.",
            en: "The rocket flies on the X/Y plane (Jolt Physics, Mobile renderer). Levels 1–10 are hand-made, levels 11–100 are built from a seed by a Python generator (a new world and a boss every 10 levels). 7 rockets (including a Shuttle and a UFO), abilities (nitro, shield, hover, dodge) and two extra modes: Space Guardians (20 stages, bosses, 6 ships) and Rocket Race (2-player split screen). AdMob, touch controls and a signed APK for Android, a web build for Yandex Games, and uz/en/ru localization."
        },
        role: { uz: "Solo: dizayn, dasturlash, darajalar", en: "Solo: design, programming, levels" },
        duration: { uz: "15-okt – 18-noy 2026", en: "Oct 15 – Nov 18, 2026" },
        metrics: [
            { k: { uz: "Darajalar", en: "Levels" }, v: { uz: "100 (10 qo'lda + 90 generator)", en: "100 (10 hand-made + 90 generated)" } },
            { k: { uz: "Raketalar / rejimlar", en: "Rockets / modes" }, v: "7 / 3" },
            { k: { uz: "Tillar", en: "Languages" }, v: "uz · en · ru" },
            { k: { uz: "Platforma", en: "Platforms" }, v: "Android, Web, Windows" }
        ],
        mechanics: [
            { uz: "LandingJudge: tezlik va burchak bo'yicha xavfsiz qo'nishni baholash, yulduzlar", en: "LandingJudge: rates a safe landing by speed and angle, awards stars" },
            { uz: "Seed'li Python daraja generatori: wall, hanger, slalom, laser, blade, piston, wind, pit bo'laklari", en: "Seeded Python level generator: wall, hangar, slalom, laser, blade, piston, wind and pit segments" },
            { uz: "Har bir daraja uchun avtomatik test: raketa o'lchamidagi kapsula yo'l bo'ylab hech narsaga tegmasligi tekshiriladi", en: "An automated test per level: a rocket-sized capsule sweeps the route and must not touch anything" },
            { uz: "Qobiliyatlar: Nitro, Qalqon (cooldown), Muallaq, Qochish (raycast bilan devordan itarish)", en: "Abilities: Nitro, Shield (cooldown), Hover, Dodge (raycast push away from walls)" },
            { uz: "VFX: alanga shaderi, tutun izi, portlash, qo'nish changi; Low/High sifat profillari", en: "VFX: flame shader, smoke trail, explosions, landing dust; Low/High quality profiles" },
            { uz: "Monetizatsiya: AdMob interstitial/banner/rewarded, Yandex SDK; uz/en/ru lokalizatsiya", en: "Monetization: AdMob interstitial/banner/rewarded, Yandex SDK; uz/en/ru localization" }
        ],
        technicalChallenge: {
            problem: { uz: "90 ta darajani qo'lda yasash juda uzoq, tasodifiy yasalganda esa ba'zi darajalardan o'tib bo'lmay qolishi mumkin.", en: "Building 90 levels by hand takes too long, and random levels can end up impossible to finish." },
            solution: { uz: "Python generatori har bir darajani seed bilan bo'laklardan yig'adi va raketa uchishi kerak bo'lgan yo'l nuqtalarini (route) ham yozadi. Keyin Godot testi har bir darajani yuklab, raketa o'lchamidagi kapsulani shu yo'l bo'ylab yuradi: devorga tegsa, test yiqiladi. Qayta ishga tushirilsa ham bir xil darajalar chiqadi.", en: "The Python generator assembles each level from segments using a seed and also writes the route the rocket has to fly. A Godot test then loads every level and sweeps a rocket-sized capsule along that route: if it touches a wall, the test fails. Re-running the generator gives exactly the same levels." }
        },
        codeSource: "tools/level_gen/generate_levels.py",
        codeSnippet: `class Level:
    def __init__(self, number):
        self.n = number
        self.d = (number - FIRST) / (LAST - FIRST)  # 0 = level 11, 1 = level 100
        self.rng = random.Random(SEED * 1000 + number)
        self.world = WORLDS[(number - FIRST) // 10]
        self.boss = number % 10 == 0
        d = self.d
        self.ceiling = r1(lerp(26.0, 20.0, d) + self.rng.uniform(-1.5, 1.5))
        self.gap_min = lerp(10.0, 7.0, d)
        self.route = [(0.0, 3.0)]

    def seg_wall(self, x0):
        c, g = self.ceiling, self.gap_min
        h = max(4.0, c - g - self.rng.uniform(0.0, 3.0))
        xc = x0 + SEG_W / 2
        self.block("wall", "Wall", xc, h / 2, 3, h)
        y = h + (c - h) / 2
        self.go(xc - 3.5, y)
        self.go(xc + 3.5, y)
        return SEG_W`,
        tags: ["Godot 4.6", "GDScript", "Python", "Jolt Physics", "Procedural Levels", "AdMob", "Android", "Web"],
        links: { play: "games/rocket-boost/index.html", github: "https://github.com/xabibulloshamsiddinov/rocketboosty" }
    },
    {
        id: "samurai",
        title: "Samurai: Sakura Path",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "2d", "web"],
        status: "released",
        statusText: { uz: "Tugallangan · Web", en: "Finished · Web" },
        icon: "🗡️",
        cover: "assets/images/samurai/menu.jpg",
        gallery: [
            { src: "assets/images/samurai/menu.jpg", caption: { uz: "Bosh menyu: shader bilan jonlantirilgan key art (parallaks, shamol, tuman, yaproqlar)", en: "Main menu: key art animated by a shader (parallax, wind, fog, petals)" } },
            { src: "assets/images/samurai/slash.jpg", caption: { uz: "Katana zarbasi: tig' izi, dushmanning qizil hujum ogohlantirishi", en: "Katana slash with a blade trail; enemies telegraph attacks in red" } },
            { src: "assets/images/samurai/dash.jpg", caption: { uz: "Ryvok-zarba: dushman orqali uchib o'tadi, shu payt zarar olmaydi", en: "Dash-strike: flies through enemies with invincibility frames" } },
            { src: "assets/images/samurai/wall.jpg", caption: { uz: "Devorga yopishish, devordan sakrash va tepaga chiqish", en: "Wall cling, wall jump and wall climb" } },
            { src: "assets/images/samurai/checkpoint.jpg", caption: { uz: "Nazorat nuqtasi: tosh fonar yonadi va 1 yurak tiklaydi", en: "Checkpoint: a stone lantern lights up and restores one heart" } },
            { src: "assets/images/samurai/shrine.jpg", caption: { uz: "IV daraja: qirmizi ibodatxona, oxirida oni-boss", en: "Level IV: the Crimson Shrine with the oni boss at the end" } },
            { src: "assets/images/samurai/levels.jpg", caption: { uz: "Daraja tanlash: darajalar navbat bilan ochiladi, progress saqlanadi", en: "Level select: levels unlock in order, progress is saved" } }
        ],
        tagline: { uz: "Siluet uslubidagi 2D platformer: 4 daraja, oni-boss, devorda yurish va ryvok", en: "A silhouette-style 2D platformer: 4 levels, an oni boss, wall climbing and dashes" },
        shortDesc: {
            uz: "Kasa shlyapali samuray bambuk o'rmoni, tumanli qoyalar, oy g'orlari va qirmizi ibodatxonadan o'tadi. Grafika va ovoz Python skriptlari bilan yaratilgan. Brauzerda o'ynasa bo'ladi.",
            en: "A samurai in a kasa hat crosses a bamboo grove, misty cliffs, moonlit caves and a crimson shrine. All art and audio are generated by Python scripts. Playable in the browser."
        },
        fullDesc: {
            uz: "Universitet topshirig'i sifatida boshlangan, oxirigacha yetkazilgan 2D platformer. Personajlar skeletdan yig'iladi (pozalar = bo'g'im burchaklari) va tools/gen_art_hd.py ularni 2× o'lchamda chizadi. Fon — 4 qatlamli parallaks bambuk, tuman, nurlar va oy chizadigan protsedural shader. Ovoz effektlari va musiqa (koto + taiko) gen_audio.py'da sintez qilinadi. Har darajada 2 ta nazorat nuqtasi, oxirgi darajada oni-boss. Gameplay obyektlari UI haqida bilmaydi: faqat signal chiqaradi (GameEvents shinasi). Headless smoke test hamma darajalarni, dushman AI'ini, katana, shuriken, ryvok va devorga chiqishni tekshiradi.",
            en: "A 2D platformer that started as a university assignment and was finished end to end. Characters are assembled from a skeleton (poses are joint angles) and tools/gen_art_hd.py draws them at 2× resolution. The background is a procedural shader with 4 parallax layers of bamboo, fog, light rays and a moon. Sound effects and music (koto + taiko) are synthesized by gen_audio.py. Every level has 2 checkpoints and the last one ends with an oni boss. Gameplay objects know nothing about the UI: they only emit signals (a GameEvents bus). A headless smoke test covers all levels, enemy AI, the katana, shuriken, dash and wall climbing."
        },
        role: { uz: "Solo: dizayn, dasturlash, protsedural grafika va ovoz", en: "Solo: design, programming, procedural art and audio" },
        duration: { uz: "14–21-noy 2026", en: "Nov 14–21, 2026" },
        metrics: [
            { k: { uz: "Darajalar", en: "Levels" }, v: { uz: "4 + oni-boss", en: "4 + oni boss" } },
            { k: { uz: "Grafika va ovoz", en: "Art & audio" }, v: { uz: "Python bilan generatsiya", en: "Generated with Python" } },
            { k: { uz: "Renderer", en: "Renderer" }, v: "Compatibility (WebGL 2)" },
            { k: { uz: "Tillar", en: "Languages" }, v: "en · ru" }
        ],
        mechanics: [
            { uz: "Coyote time, jump buffer va bosish davomiyligiga qarab sakrash balandligi", en: "Coyote time, jump buffering and variable jump height" },
            { uz: "Devorga yopishish, devordan sakrash va devorda tepaga chiqish", en: "Wall cling, wall jump and wall climb" },
            { uz: "Katana kombosi (2-zarba ×2 zarar), ryvok-zarba i-frame bilan, 5 soniyalik shuriken", en: "Katana combo (second hit ×2 damage), dash-strike with i-frames, a 5-second shuriken" },
            { uz: "Komponentlar: Health, Hitbox, Hurtbox, Projectile; fizik qatlamlar alohida", en: "Components: Health, Hitbox, Hurtbox, Projectile; dedicated physics layers" },
            { uz: "Sozlamalar: Master/Music/SFX shinalari, til, ekran; progress va nazorat nuqtalari saqlanadi", en: "Settings: Master/Music/SFX buses, language, display; progress and checkpoints are saved" },
            { uz: "Headless smoke test va skrinshot testlari (darajalar, jang, menyu)", en: "Headless smoke test plus screenshot tests (levels, combat, menu)" }
        ],
        technicalChallenge: {
            problem: { uz: "Platformerda boshqaruv \"qattiq\" tuyulardi: o'yinchi chekkadan sal kech sakrasa yoki yerga tegmasdan bir kadr oldin bossa, sakrash yo'qolardi.", en: "The controls felt stiff: pressing jump a frame too late after leaving a ledge, or a frame before landing, swallowed the jump." },
            solution: { uz: "Ikkita taymer qo'shdim: coyote time (chekkadan chiqqandan keyin 0.1 s ichida ham sakrash mumkin) va jump buffer (yerga tushishdan 0.12 s oldin bosilgan sakrash eslab qolinadi). Tugma erta qo'yib yuborilsa, ko'tarilish tezligi kesiladi, shuning uchun sakrash balandligini o'yinchi boshqaradi.", en: "I added two timers: coyote time (you can still jump 0.1 s after leaving a ledge) and a jump buffer (a press up to 0.12 s before landing is remembered). Releasing the button early cuts the upward speed, so the player controls the jump height." }
        },
        codeSource: "player/player.gd",
        codeSnippet: `func _handle_jump(delta: float) -> void:
	if is_on_floor():
		_coyote_timer = coyote_time
	else:
		_coyote_timer -= delta

	if Input.is_action_just_pressed("jump"):
		_jump_buffer_timer = jump_buffer_time
	else:
		_jump_buffer_timer -= delta

	if _jump_buffer_timer > 0.0 and _coyote_timer > 0.0:
		velocity.y = jump_velocity
		_jump_buffer_timer = 0.0
		_coyote_timer = 0.0
		_jump_cut_allowed = true
		Audio.play("jump", -4.0)

	# Variable jump height: releasing early cuts the ascent.
	if Input.is_action_just_released("jump") and velocity.y < 0.0 and _jump_cut_allowed:
		velocity.y *= jump_cut_multiplier
		_jump_cut_allowed = false`,
        tags: ["Godot 4.6", "GDScript", "2D Platformer", "Shaders", "Python (Pillow)", "Procedural Audio", "Web"],
        links: { play: "games/samurai/index.html", github: "https://github.com/xabibulloshamsiddinov/samurai" }
    },
    {
        id: "shooter",
        title: "Team Shooter",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "multiplayer"],
        status: "released",
        statusText: { uz: "O'ynasa bo'ladi · Windows, LAN", en: "Playable · Windows, LAN" },
        icon: "🎯",
        cover: "assets/images/shooter/overview.jpg",
        gallery: [
            { src: "assets/images/shooter/overview.jpg", caption: { uz: "\"Outpost\" xaritasi (~106 × 76 m): bazalar, yo'llar, Domination nuqtalari", en: "The \"Outpost\" map (~106 × 76 m): bases, roads, Domination points" } },
            { src: "assets/images/shooter/bot.jpg", caption: { uz: "Bot askar: protsedural IK animatsiya, jamoa kamuflyaji", en: "A bot soldier: procedural IK animation and team camouflage" } },
            { src: "assets/images/shooter/buy.jpg", caption: { uz: "CS 1.6 uslubidagi do'kon: 22 ta narsa, har qurolning statistikasi", en: "CS 1.6-style buy menu: 22 items with per-weapon stats" } },
            { src: "assets/images/shooter/smoke.jpg", caption: { uz: "HE granata portlashi", en: "An HE grenade explosion" } },
            { src: "assets/images/shooter/ctf.jpg", caption: { uz: "Capture the Flag rejimi", en: "Capture the Flag mode" } },
            { src: "assets/images/shooter/fps.jpg", caption: { uz: "Birinchi shaxs: o'q izlari (decal), HUD, kill feed", en: "First person: bullet decals, HUD, kill feed" } }
        ],
        tagline: { uz: "Jamoaviy taktik 3D FPS: TDM, CTF, Domination, LAN multiplayer va botlar", en: "A team tactical 3D FPS: TDM, CTF, Domination, LAN multiplayer and bots" },
        shortDesc: {
            uz: "Ikki jamoa cho'l xaritasida o'ynaydi. CS 1.6 uslubidagi harakat, pul va do'kon, granatalar. 12 tagacha o'yinchi LAN orqali, bo'sh joylarni botlar to'ldiradi.",
            en: "Two teams fight on a desert map with CS 1.6-style movement, money, a buy menu and grenades. Up to 12 players over LAN, with bots filling the empty slots."
        },
        fullDesc: {
            uz: "Harakat GoldSrc formulalari asosida: ishqalanish, tezlanish, havoda strafe va bunny hop. 3 rejim (Team Deathmatch, Capture the Flag, Domination) host tomonidan lobbyda tanlanadi. 21 ta qurol .tres resurslarda, har birida zarar, otish tezligi, tarqalish va zirhni teshish bor. Animatsiya fayllari bo'lmagani uchun askarlar protsedural: oyoqlar va qo'llar IK bilan. Botlar navmesh bo'ylab yuradi, ko'rish chizig'i bilan sezadi, pulga yarasha qurol oladi, granata otadi va tutun orqasini ko'rmaydi. Tarmoq: ENet listen-server, otish, pul va inventar server avtoritetida. 3D modellar Sketchfab va Poly Haven'dan (CC-BY / CC0), mualliflari o'yindagi Credits oynasida.",
            en: "Movement follows GoldSrc formulas: friction, acceleration, air strafing and bunny hopping. The host picks one of 3 modes (Team Deathmatch, Capture the Flag, Domination) in the lobby. 21 weapons live in .tres resources with damage, fire rate, spread and armor penetration. There were no animation files, so the soldiers are procedural: legs and arms use IK. Bots walk a navmesh, detect enemies by line of sight, buy what they can afford, throw grenades and can't see through smoke. Networking is an ENet listen server; shooting, money and inventory are server-authoritative. 3D models come from Sketchfab and Poly Haven (CC-BY / CC0) and are credited in the in-game Credits screen."
        },
        role: { uz: "Solo: dizayn, gameplay va tarmoq dasturlash", en: "Solo: design, gameplay and network programming" },
        duration: { uz: "20–26-noy 2026", en: "Nov 20–26, 2026" },
        metrics: [
            { k: { uz: "Rejimlar", en: "Modes" }, v: "TDM · CTF · Domination" },
            { k: { uz: "O'yinchilar", en: "Players" }, v: { uz: "12 tagacha + botlar", en: "Up to 12 + bots" } },
            { k: { uz: "Do'kon", en: "Shop" }, v: { uz: "22 narsa, 21 qurol", en: "22 items, 21 weapons" } },
            { k: { uz: "Tarmoq", en: "Network" }, v: "ENet, server-authoritative" }
        ],
        mechanics: [
            { uz: "GoldSrc harakati: ishqalanish, air strafe, bunny hop, sekin yurish va cho'kkalash", en: "GoldSrc movement: friction, air strafing, bunny hopping, walking and crouching" },
            { uz: "Pul va do'kon (CS 1.6 uslubi): buy zone, o'ldirish mukofoti, raqamlar bilan tez sotib olish", en: "Money and buy menu (CS 1.6 style): buy zone, kill rewards, number-key quick buy" },
            { uz: "Aniqlik: harakatda tarqalish, headshot, masofaga qarab zarar, snayper optikasi", en: "Accuracy: movement spread, headshots, damage falloff, sniper scope" },
            { uz: "Granatalar: HE, flashbang (ko'r qiladi), tutun (botlar orqasini ko'rmaydi)", en: "Grenades: HE, flashbang (blinds), smoke (bots can't see through it)" },
            { uz: "Bot AI: navmesh, ko'rish chizig'i, reaksiya vaqti, counter-strafe, CTF rollari", en: "Bot AI: navmesh, line of sight, reaction time, counter-strafing, CTF roles" },
            { uz: "Protsedural askar animatsiyasi (IK), jamoa rim-light shaderi, muzzle flash va gologramma shaderlari", en: "Procedural soldier animation (IK), team rim-light shader, muzzle-flash and hologram shaders" }
        ],
        technicalChallenge: {
            problem: { uz: "Multiplayer'da klient \"men tegdim\" deb yolg'on aytishi yoki harakatdagi tarqalishni o'chirib qo'yishi mumkin edi.", en: "In multiplayer a client could lie about hits or switch off its movement inaccuracy." },
            solution: { uz: "Klient faqat otish so'rovini (yo'nalish + crosshair tarqalishi) yuboradi. Server qurol egaligini va otish tezligini tekshiradi, tarqalishni o'zi hisoblagan minimaldan past qo'ymaydi, raycast'ni o'zi qiladi va zararni qo'llaydi. Pul, zirh va inventar ham faqat serverda o'zgaradi.", en: "The client only sends a fire request (direction + crosshair spread). The server checks weapon ownership and fire rate, never lets the spread go below its own estimate, does the raycast itself and applies the damage. Money, armor and inventory also change only on the server." }
        },
        codeSource: "scenes/player/player.gd",
        codeSnippet: `## \`client_spread_deg\` is what the shooter's crosshair showed; the server never
## lets it go below its own estimate for the shooter's movement state.
func server_fire(dir: Vector3, client_spread_deg: float, w_index: int) -> void:
	if not alive or not owns_weapon(w_index) or dir.length_squared() < 0.25:
		return
	var w := WEAPONS[w_index]
	if not w.is_gun() or (world and not world.is_match_running()):
		return
	var now := _now()
	if now < _server_next_fire:
		return
	_server_next_fire = now + w.fire_interval * 0.75
	dir = dir.normalized()
	var origin := sync_pos + Vector3(0, eye_height(), 0)
	# For remote shooters the server's own estimate (assuming they were aiming)
	# is a floor, so a modified client can't remove movement inaccuracy.
	var min_spread := 0.0
	if not is_multiplayer_authority():
		var v := known_velocity()
		min_spread = w.spread_deg(true, Vector2(v.x, v.z).length(), is_airborne()) * 0.8
	var spread := deg_to_rad(clampf(maxf(client_spread_deg, min_spread), 0.0, 30.0))
	var space := get_world_3d().direct_space_state
	for i in w.pellets:
		var d := _spread_direction(dir, spread)
		var query := PhysicsRayQueryParameters3D.create(origin, origin + d * w.max_range,
				GameState.LAYER_WORLD | GameState.LAYER_PLAYERS, [get_rid()])
		var hit := space.intersect_ray(query)
		# ... damage, headshots, impacts ...`,
        tags: ["Godot 4.6", "GDScript", "Multiplayer (ENet)", "Bot AI", "Navmesh", "IK", "Forward+", "Shaders"],
        links: {},
        note: { uz: "Qurollar: Aligned Games, askarlar: buh (Sketchfab, CC-BY 4.0). Proplar va teksturalar: Poly Haven (CC0). Ovozlar: Kenney (CC0), Vincent Sevedge (CC-BY 3.0).", en: "Weapons: Aligned Games, soldiers: buh (Sketchfab, CC-BY 4.0). Props and textures: Poly Haven (CC0). Audio: Kenney (CC0), Vincent Sevedge (CC-BY 3.0)." }
    },
    {
        id: "neon-rails",
        title: "Neon Rails",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile", "web"],
        status: "released",
        statusText: { uz: "v1.0 · Web", en: "v1.0 · Web" },
        icon: "🏙️",
        cover: "assets/images/neon-rails/versus.jpg",
        gallery: [
            { src: "assets/images/neon-rails/versus.jpg", caption: { uz: "Neon Pursuit: 2 o'yinchi, politsiya ta'qibi, jangovar power-up'lar", en: "Neon Pursuit: 2 players, a police chase and combat power-ups" } },
            { src: "assets/images/neon-rails/run.jpg", caption: { uz: "Endless runner: 3 yo'lak, poyezdlar, to'siqlar", en: "Endless runner: 3 lanes, trains, barriers" } },
            { src: "assets/images/neon-rails/run2.jpg", caption: { uz: "To'siq va tangalar", en: "Barriers and coins" } },
            { src: "assets/images/neon-rails/menu.jpg", caption: { uz: "Bosh menyu (portret, telefon uchun)", en: "Main menu (portrait, for phones)" } }
        ],
        tagline: { uz: "Hamma narsasi kodda yaratilgan 3D endless runner + 2 o'yinchilik poyga", en: "A 3D endless runner built entirely in code + a 2-player race" },
        shortDesc: {
            uz: "Original endless lane runner: grafika primitiv va shaderlardan, ovoz va musiqa kichik sintezatordan. Tashqi asset yo'q. Brauzerda o'ynasa bo'ladi.",
            en: "An original endless lane runner: visuals from primitives and shaders, sound and music from a small synthesizer, no external assets. Playable in the browser."
        },
        fullDesc: {
            uz: "O'yinchi uchta yo'lak bo'ylab yuguradi, sakraydi va yumalaydi. Poyezdlar, to'siqlar, rampa va chuqurlar 53 ta qo'lda yozilgan pattern'dan olinadi va har bir pattern yuklanganda validator orqali o'tib bo'ladiganligi isbotlanadi. Magnet, qalqon, jetpack, x2 ochko, missiyalar, yutuqlar va moslashuvchan qiyinlik bor. v1.1'da \"Neon Pursuit\" qo'shildi: bitta ekranda ikki mashina duel qiladi, ortidan politsiya quvadi. Keyinchalik shu kod bazasi Jura Rush'ga aylandi.",
            en: "The player runs along three lanes, jumping and rolling. Trains, barriers, ramps and pits come from 53 hand-written patterns, and each pattern is proven solvable by a validator when it loads. There are magnets, shields, a jetpack, score x2, missions, achievements and adaptive difficulty. v1.1 added \"Neon Pursuit\": two cars duel on one screen while the police chase them. This codebase later became Jura Rush."
        },
        role: { uz: "Solo: dizayn, dasturlash, protsedural grafika", en: "Solo: design, programming, procedural art" },
        duration: { uz: "Noy 2026", en: "Nov 2026" },
        metrics: [
            { k: { uz: "Patternlar", en: "Patterns" }, v: { uz: "53 ta, validator bilan", en: "53, all validated" } },
            { k: { uz: "Missiyalar", en: "Missions" }, v: { uz: "15 missiya, 12 yutuq", en: "15 missions, 12 achievements" } },
            { k: { uz: "Testlar", en: "Tests" }, v: { uz: "unit + 10 daqiqalik bot soak", en: "unit + 10-minute bot soak" } },
            { k: { uz: "Platforma", en: "Platforms" }, v: "Web, Android" }
        ],
        mechanics: [
            { uz: "Player state machine: run, jump, fall, roll, stumble, jetpack, dead; coyote time, buffered input", en: "Player state machine: run, jump, fall, roll, stumble, jetpack, dead; coyote time, buffered input" },
            { uz: "Treadmill dunyo: chunk recycling, curved-world va fog shaderlari, MultiMesh dekor", en: "Treadmill world: chunk recycling, curved-world and fog shaders, MultiMesh decor" },
            { uz: "Pattern DSL + SolvabilityValidator (qatorma-qator BFS), tension budget bo'yicha temp", en: "Pattern DSL + SolvabilityValidator (row-by-row BFS), pacing by a tension budget" },
            { uz: "Object pool, event bus, command, service locator; hamma sozlamalar .tres resurslarda", en: "Object pool, event bus, command, service locator; all tuning lives in .tres resources" },
            { uz: "Neon Pursuit: 5 yo'lakli trassa, politsiya, homing raketa, EMP, mina, nitro, qalqon", en: "Neon Pursuit: 5-lane track, police, homing missiles, EMP, mines, nitro, shields" },
            { uz: "Test bot, 10 daqiqalik soak test, Web va Android eksport", en: "Test bot, 10-minute soak test, Web and Android export" }
        ],
        technicalChallenge: {
            problem: { uz: "To'siqlar tasodifiy qo'yilsa, ba'zan o'tib bo'lmaydigan joy chiqadi va o'yinchi aybsiz yutqazadi.", en: "With random obstacles you sometimes get an impossible section and the player loses through no fault of their own." },
            solution: { uz: "Patternlarni matnli DSL'da yozdim (har qator = 3 yo'lak). SolvabilityValidator (qator, yo'lak, balandlik, kutish) holatlarida qatorma-qator qidiradi va reaksiya vaqtini hisobga oladi. Yechib bo'lmaydigan pattern'ning maksimal qiyinligi avtomatik pasaytiriladi. Shu qidiruv test bot'ni ham boshqaradi.", en: "I wrote the patterns in a text DSL (each row = 3 lanes). The SolvabilityValidator searches row by row over (row, lane, height, wait) states and accounts for reaction time. An unsolvable pattern gets its max difficulty lowered automatically. The same search also drives the test bot." }
        },
        codeSource: "scripts/gameplay/track/pattern_data.gd",
        codeSnippet: `## One pattern per line:   id ; difficulty ; min-max ; weight ; tags ; row0 row1 ... row9
## Each row is three characters (left, centre, right lane). Row 0 is reached first.
##   T  train (roof walkable)  M  moving train (oncoming)   l  low barrier (jump)
##   h  high barrier (roll)    X  full barrier (dodge)      R  ramp up to a train roof
## Every pattern is re-checked by the solvability validator at load
## (max difficulty is lowered automatically if it stops being solvable).
class_name PatternData
extends RefCounted

const TEXT: String = """
warmup_center;1;1-10;1;rest;... .c. .c. .c. .c. .c. .c. .c. .c. ...
zigzag_coins;1;1-10;1;rest;.c. .>. ..c ..< .c. .<. c.. >.. .c. ...
diag_run;1;1-10;0.8;rest;c.. >.. .c. .>. ..c ..c ..< .c. .<. c..
"""`,
        tags: ["Godot 4.6", "GDScript", "Procedural Art", "Shaders", "FSM", "Object Pool", "Web"],
        links: { play: "games/neon-rails/index.html" }
    },

    /* ===================================================================== WORK IN PROGRESS */
    {
        id: "night-tashkent",
        title: "Night Tashkent",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile"],
        status: "wip",
        statusText: { uz: "Ishlab chiqilmoqda", en: "In development" },
        icon: "🌃",
        cover: "assets/images/night-tashkent/street.jpg",
        gallery: [
            { src: "assets/images/night-tashkent/street.jpg", caption: { uz: "Ko'cha darajasi: OSM yo'llari, chinorlar, chiroq ustunlari", en: "Street level: OSM roads, plane trees, street lights" } },
            { src: "assets/images/night-tashkent/square.jpg", caption: { uz: "Amir Temur xiyoboni tepadan", en: "Amir Temur Square from above" } },
            { src: "assets/images/night-tashkent/driving-night.jpg", caption: { uz: "Tunda haydash: fara, spidometr va taxometr, minimap", en: "Night driving: headlights, speedometer, tachometer, minimap" } },
            { src: "assets/images/night-tashkent/amir-temur.jpg", caption: { uz: "Landmark: Amir Temur haykali", en: "Landmark: the Amir Temur monument" } },
            { src: "assets/images/night-tashkent/bridge.jpg", caption: { uz: "Ko'prik: balandlik ostidan o'tadigan narsaga qarab hisoblanadi", en: "Bridge: deck height depends on what passes underneath" } },
            { src: "assets/images/night-tashkent/overpass.jpg", caption: { uz: "Estakada va avtobus", en: "Overpass and a bus" } },
            { src: "assets/images/night-tashkent/logo.jpg", caption: { uz: "O'yin logotipi", en: "Game logo" } }
        ],
        tagline: { uz: "OpenStreetMap'dan qurilgan haqiqiy Toshkentda 3D mashina simulyatori", en: "A 3D driving sim in the real Tashkent, built from OpenStreetMap" },
        shortDesc: {
            uz: "Toshkentning haqiqiy yo'llari, binolari, kanallari va parklari OpenStreetMap ma'lumotidan avtomatik quriladi. Mashinada yurasiz, F bilan tushib piyoda yurasiz.",
            en: "Tashkent's real roads, buildings, canals and parks are generated automatically from OpenStreetMap data. Drive around, or press F to get out and walk."
        },
        fullDesc: {
            uz: "Python skriptlari Geofabrik'dan olingan OSM faylini o'qib, shaharni 250 metrli bo'laklarga (chunk) bo'ladi. Godot o'yinchi atrofidagi bo'laklarni WorkerThreadPool'da fon oqimida yuklab, uzoqdagilarini o'chiradi. Ustiga mashina fizikasi (avto/drift uzatmalar qutisi, yoqilg'i, faralar), kun/tun sikli, minimap va navigator, yo'l chiroqlari, sinadigan buyumlar va landmarklar (Amir Temur xiyoboni, Navoiy teatri, \"O'zbekiston\" mehmonxonasi) qo'shilgan. NPC transport uchun Sketchfab'dan 19 ta mashina/avtobus modeli Python konvertori orqali olingan, mualliflar va litsenziyalar alohida ro'yxatda yuritiladi.",
            en: "Python scripts read an OSM extract from Geofabrik and split the city into 250 m chunks. Godot streams the chunks around the player on a WorkerThreadPool background thread and frees the far ones. On top of that: car physics (auto/drift gearbox, fuel, headlights), a day/night cycle, minimap and navigator, street lights, breakable props and landmarks (Amir Temur Square, the Navoi Theatre, Hotel Uzbekistan). 19 Sketchfab car and bus models were brought in through a Python converter for NPC traffic, with authors and licenses tracked in a separate list."
        },
        role: { uz: "Solo: dizayn, dasturlash, ma'lumot pipeline", en: "Solo: design, programming, data pipeline" },
        duration: { uz: "20-okt 2026 – hozir", en: "Oct 20, 2026 – now" },
        metrics: [
            { k: { uz: "Shahar bo'laklari", en: "City chunks" }, v: { uz: "3 240 chunk (250 m)", en: "3,240 chunks (250 m)" } },
            { k: { uz: "Mashinalar", en: "Vehicles" }, v: { uz: "19 Sketchfab modeli + o'z sedanim", en: "19 Sketchfab models + my own sedan" } },
            { k: { uz: "Ma'lumot", en: "Data" }, v: "OpenStreetMap (Geofabrik .pbf)" },
            { k: { uz: "Platforma", en: "Platforms" }, v: "Windows, Android" }
        ],
        mechanics: [
            { uz: "OSM → Python → chunk pipeline (Geofabrik .pbf, pickle kesh, shahar chegarasi relation bo'yicha)", en: "OSM → Python → chunk pipeline (Geofabrik .pbf, pickle cache, city boundary from the relation)" },
            { uz: "Fon oqimida chunk streaming: masofaga qarab yuklash/o'chirish, parallel build limiti", en: "Background chunk streaming: load/unload by distance with a parallel build limit" },
            { uz: "Mashina: AUTO ↔ DRIFT rejimi, R-N-D selektor, spidometr va taxometr, yoqilg'i va zapravka", en: "Car: AUTO ↔ DRIFT modes, R-N-D selector, speedometer and tachometer, fuel and gas stations" },
            { uz: "Kun/tun sikli, yo'l chiroqlari yorug'lik xaritasi, svetoforlar, sinadigan buyumlar", en: "Day/night cycle, street-light light map, traffic lights, breakable props" },
            { uz: "Ko'priklar: deka balandligi ostidan o'tadigan narsaga qarab, yondashuv yo'llarida rampa", en: "Bridges: deck height depends on what passes underneath, with ramps on the approaches" },
            { uz: "Garaj (19 mashina), kundalik sovg'a (rewarded ad)", en: "Garage (19 cars), daily reward (rewarded ad)" }
        ],
        technicalChallenge: {
            problem: { uz: "Butun Toshkent bitta sahnaga sig'maydi: o'n minglab binolar va yo'llar xotirani to'ldirib, telefonda o'yin qotib qolardi.", en: "All of Tashkent doesn't fit in one scene: tens of thousands of buildings and roads filled the memory and the game froze on phones." },
            solution: { uz: "Shaharni oldindan Python bilan 250 metrli chunk fayllarga bo'ldim. O'yinda faqat o'yinchi atrofidagi radius ichidagi chunklar, eng yaqinidan boshlab navbat bilan yuklanadi. Fayl o'qish va mesh massivlarini qurish WorkerThreadPool'da, sahnaga qo'shish esa asosiy oqimda bajariladi.", en: "I pre-split the city into 250 m chunk files with Python. In game, only the chunks within a radius of the player are loaded, nearest first. Reading files and building mesh arrays happen on the WorkerThreadPool; adding to the scene tree happens on the main thread." }
        },
        codeSource: "scripts/CityStreamer.gd",
        codeSnippet: `func _update_wanted() -> void:
	var c := _target_xz()
	for key in _wanted_chunks():
		if loaded.has(key) or _pending.has(key):
			continue
		if _pending.size() >= Config.max_parallel_builds:
			break
		var file: String = _entries[key]["file"]
		var settings := _settings
		var dir: String = Config.data_dir
		var task := func() -> void: _build_task(key, dir, file, settings)
		_pending[key] = WorkerThreadPool.add_task(task, false, "chunk %s" % key)
	# unload far chunks
	var limit := current_radius() + Config.unload_margin
	for key: Vector2i in loaded.keys():
		if _distance_to_chunk(c, key) > limit:
			(loaded[key] as Node).queue_free()
			loaded.erase(key)
			chunk_removed.emit(key)`,
        tags: ["Godot 4.6", "GDScript", "Python", "OpenStreetMap", "Streaming", "Multithreading", "Sketchfab"],
        links: { github: "https://github.com/xabibulloshamsiddinov/night-tashkent" },
        note: { uz: "Xarita ma'lumotlari © OpenStreetMap contributors (ODbL). Mashina modellari: Q.SARDOR, own.guest, Ddiaz Design (Sketchfab).", en: "Map data © OpenStreetMap contributors (ODbL). Car models: Q.SARDOR, own.guest, Ddiaz Design (Sketchfab)." }
    },
    {
        id: "jura-rush",
        title: "Jura Rush",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile", "multiplayer"],
        status: "wip",
        statusText: { uz: "Ishlab chiqilmoqda", en: "In development" },
        icon: "🦖",
        cover: "assets/images/jura-rush/menu.jpg",
        gallery: [
            { src: "assets/images/jura-rush/menu.jpg", caption: { uz: "Bosh menyu: ortda T-Rex kutib turibdi", en: "Main menu with the T-Rex waiting behind you" } },
            { src: "assets/images/jura-rush/volcano.jpg", caption: { uz: "Volcano Ridge: braxiozavrlar podasi ustidan yugurish", en: "Volcano Ridge: running along a Brachiosaurus herd" } },
            { src: "assets/images/jura-rush/fern-valley.jpg", caption: { uz: "Fern Valley biomi", en: "The Fern Valley biome" } },
            { src: "assets/images/jura-rush/red-canyon.jpg", caption: { uz: "Red Canyon biomi", en: "The Red Canyon biome" } },
            { src: "assets/images/jura-rush/swamp.jpg", caption: { uz: "Misty Swamp: mash'alalar va to'siqlar", en: "Misty Swamp: torches and obstacles" } }
        ],
        tagline: { uz: "Mezozoy davridagi endless runner: telefonlar kontroller bo'ladigan 3 o'yinchilik rejim", en: "A Mesozoic endless runner with a 3-player mode where phones are the controllers" },
        shortDesc: {
            uz: "Neon Rails'ning davomi: g'orlik odam dinozavrlar orasidan T-Rex'dan qochadi. Kompyuterda 3 tagacha o'yinchi telefon brauzeri orqali (QR kod, ilova kerak emas) o'ynaydi.",
            en: "The follow-up to Neon Rails: a caveman outruns a T-Rex through dinosaur country. On desktop, up to 3 players join from their phone browsers (QR code, no app needed)."
        },
        fullDesc: {
            uz: "Neon Rails'ning gameplay yadrosi (53 pattern, validator) saqlangan, ustiga 4 ta kunduzgi biom (har 500 m da almashadi), haqiqiy quyosh va soyalar, braxiozavr podalari, hujum qiluvchi triceratops va qoqilganda quvadigan T-Rex qo'shilgan. Protsedural g'orlik odamning 6 ta skini, pterozavr minish, 5 ta power-up, do'kon va 3D preview, rang ko'rlik va katta matn rejimlari bor. Party rejimida Godot o'zi kichik HTTP + WebSocket server ochadi: telefonlar QR kodni skanerlab, swipe pad orqali boshqaradi, tarmoq uzilsa slotini qaytarib oladi.",
            en: "The Neon Rails gameplay core (53 patterns, validator) is kept, with 4 daylight biomes that change every 500 m, a real sun and shadows, Brachiosaurus herds, charging Triceratops and a T-Rex that hunts you after a stumble. The procedural caveman has 6 skins and a pterosaur ride, plus 5 power-ups, a shop with a 3D preview, and colour-blind and large-text modes. In party mode Godot itself runs a small HTTP + WebSocket server: phones scan a QR code, play with a swipe pad and get their slot back after a Wi-Fi drop."
        },
        role: { uz: "Solo: dizayn, dasturlash, tarmoq", en: "Solo: design, programming, networking" },
        duration: { uz: "12–24-noy 2026", en: "Nov 12–24, 2026" },
        metrics: [
            { k: { uz: "Biomlar", en: "Biomes" }, v: "4" },
            { k: { uz: "Multiplayer", en: "Multiplayer" }, v: { uz: "1–3 o'yinchi, telefon = kontroller", en: "1–3 players, phone = controller" } },
            { k: { uz: "Power-up'lar", en: "Power-ups" }, v: "5" },
            { k: { uz: "Tillar", en: "Languages" }, v: "en · uz · ru" }
        ],
        mechanics: [
            { uz: "Telefon kontrollerlar: Godot ichida HTTP + WebSocket server, QR kod, JSON protokol", en: "Phone controllers: an HTTP + WebSocket server inside Godot, QR code, JSON protocol" },
            { uz: "Qayta ulanish: telefon id'si bo'yicha slot qaytariladi, raund paytida runner kutib turadi", en: "Reconnects: a phone gets its slot back by id; mid-round its runner waits" },
            { uz: "Vertikal split-screen, lobby, READY, 3-2-1, jonlar, medal bilan natijalar", en: "Vertical split screen, lobby, READY, 3-2-1, lives, results with medals" },
            { uz: "Dinozavrlar: braxiozavr podasi ustidan yugurish, triceratops, T-Rex ta'qibi", en: "Dinosaurs: run along Brachiosaurus herds, dodge Triceratops, escape the T-Rex" },
            { uz: "Protsedural g'orlik odam: 6 skin, secondary motion, idle harakatlar", en: "Procedural caveman: 6 skins, secondary motion, idle actions" },
            { uz: "Accessibility: rang ko'rlik va katta matn rejimlari", en: "Accessibility: colour-blind and large-text modes" }
        ],
        technicalChallenge: {
            problem: { uz: "Telefonlardan keladigan xabarlar ishonchsiz: Wi-Fi uziladi, sahifa yangilanadi, noto'g'ri JSON kelishi mumkin.", en: "Messages from phones are unreliable: Wi-Fi drops, pages reload and malformed JSON can arrive." },
            solution: { uz: "Har bir telefon o'z id'si (cid) bilan \"hello\" yuboradi. Server shu id bo'yicha eski slotni topadi, eski ulanishni uzadi va runner'ni qaytaradi. Katta yoki buzilgan xabarlar jimgina tashlab yuboriladi, har bir buyruq joriy fazada (lobby/raund/natija) ruxsat etilganmi, tekshiriladi.", en: "Each phone sends \"hello\" with its own id (cid). The server finds the old slot by that id, kicks the stale connection and hands the runner back. Oversized or malformed messages are dropped silently, and each command is checked against the current phase (lobby / round / results)." }
        },
        codeSource: "scripts/party/phone_hub.gd",
        codeSnippet: `func _on_message(client: int, text: String) -> void:
	# JSON.parse (not parse_string): a malformed message from a phone is dropped silently.
	var json: JSON = JSON.new()
	if text.length() > 4096 or json.parse(text) != OK or typeof(json.data) != TYPE_DICTIONARY:
		return
	var msg: Dictionary = json.data as Dictionary
	var kind: String = str(msg.get("t", ""))
	if kind == "hello":
		_on_hello(client, msg)
		return
	if not _hello.has(client):
		return
	var m: PartyRoster.Member = roster.by_client(client)
	match kind:
		"pick":
			if m != null and phase == "lobby":
				if not roster.pick(m.slot, StringName(str(msg.get("c", "")))):
					_send_state(client)
		"ready":
			if m != null and phase == "lobby":
				roster.set_ready(m.slot, bool(msg.get("v", false)))
		"in":
			if m != null and ACTIONS.has(str(msg.get("a", ""))):
				action.emit(m.slot, ACTIONS[str(msg.get("a", ""))] as StringName)`,
        tags: ["Godot 4.6", "GDScript", "WebSocket", "Local Multiplayer", "Procedural Art", "Accessibility"],
        links: { github: "https://github.com/xabibulloshamsiddinov/jura_rush" }
    },
    {
        id: "choyhona",
        title: "Choyhona Simulator",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile"],
        status: "wip",
        statusText: { uz: "Ishlab chiqilmoqda", en: "In development" },
        icon: "🫖",
        cover: "assets/images/choyhona/game.jpg",
        gallery: [
            { src: "assets/images/choyhona/game.jpg", caption: { uz: "O'yin: mehmonlar, to'y egasining katta buyurtmasi, qurish tugmasi", en: "Gameplay: guests, a wedding host's big order, the build button" } },
            { src: "assets/images/choyhona/menu.jpg", caption: { uz: "Bosh menyu", en: "Main menu" } },
            { src: "assets/images/choyhona/logo.jpg", caption: { uz: "Key art", en: "Key art" } }
        ],
        tagline: { uz: "O'zbek choyhonasi haqida idle/tycoon o'yin", en: "An idle/tycoon game about running an Uzbek choyhona (teahouse)" },
        shortDesc: {
            uz: "O'yinchi choyhona egasi: so'ri va supalar quradi, qozonda osh, tandirda non va somsa pishiradi, samovarda choy qaynatadi, mehmonlarga xizmat qiladi.",
            en: "You run a choyhona: build tapchans and platforms, cook plov in a kazan, bake bread and samsa in a tandir, boil tea in a samovar and serve guests."
        },
        fullDesc: {
            uz: "Erkin qurish tizimi: jihoz tanlanadi, yarim shaffof \"arvoh\" chiqadi (yashil — qo'ysa bo'ladi, qizil — yo'q), o'yinchi joyni tanlab buradi. Oshxona jihozlari faqat oshxona hududiga quriladi. Xodimlar, sklad, kassa, drive-thru oynasi, kengaytirishlar, kundalik vazifalar va sovg'alar, offline daromad bor. 5 ta choyhona daraja va pul bilan ketma-ket ochiladi, har birining holati alohida saqlanadi. Narxlar so'mda.",
            en: "A free-placement build system: pick an item, a translucent \"ghost\" appears (green = valid, red = not), then place and rotate it. Kitchen equipment only fits inside the kitchen zone. There are staff, storage, a till, a drive-thru window, expansions, daily tasks and rewards, and offline income. 5 choyhonas unlock in order by level and money, each saved separately. Prices are in Uzbek som."
        },
        role: { uz: "Solo: dizayn, dasturlash", en: "Solo: design, programming" },
        duration: { uz: "Noy 2026", en: "Nov 2026" },
        metrics: [
            { k: { uz: "Choyhonalar", en: "Teahouses" }, v: { uz: "5 ta, ketma-ket ochiladi", en: "5, unlocked in order" } },
            { k: { uz: "Saqlov", en: "Save format" }, v: { uz: "v4, migratsiya bilan", en: "v4 with migrations" } },
            { k: { uz: "Testlar", en: "Tests" }, v: { uz: "5 ta avtomatik test skripti", en: "5 automated test scripts" } },
            { k: { uz: "Platforma", en: "Platform" }, v: { uz: "Android (landshaft)", en: "Android (landscape)" } }
        ],
        mechanics: [
            { uz: "Ghost-placement qurish tizimi: zona tekshiruvi (oshxona ichi/tashqarisi), burish, buzish (yarim narx qaytadi)", en: "Ghost-placement build system: zone checks (inside/outside the kitchen), rotating, demolishing (half price back)" },
            { uz: "Mehmon oqimi va buyurtmalar: osh, non, somsa, choy; VIP xona, to'y egasining katta buyurtmasi", en: "Guest flow and orders: plov, bread, samsa, tea; a VIP room and big wedding orders" },
            { uz: "Xodimlar (oshpaz, ofitsiant) va ularning vazifa taqsimoti", en: "Staff (cooks, waiters) and task assignment" },
            { uz: "Iqtisod: so'm va olmos, daraja, reyting, offline daromad, x2 daromad (rewarded ad)", en: "Economy: som and gems, levels, rating, offline income, x2 income (rewarded ad)" },
            { uz: "Save versiyalash: SAVE_VERSION 4, eski saqlovlarni yangi formatga migratsiya", en: "Save versioning: SAVE_VERSION 4 with migration of old saves" },
            { uz: "Testlar: gameplay, xodimlar, do'kon, UI smoke, features (SaveGuard real saqlovni tiklaydi)", en: "Tests: gameplay, staff, shop, UI smoke, features (SaveGuard restores the real save)" }
        ],
        technicalChallenge: {
            problem: { uz: "Bitta choyhonadan bir nechta choyhonaga o'tganda saqlov formati o'zgardi. Eski o'yinchilarning progressi yo'qolmasligi kerak edi.", en: "Going from one teahouse to several changed the save format, and existing players must not lose progress." },
            solution: { uz: "Saqlovga versiya raqami qo'shdim. Eski faylda bitta \"shahar indeksi\" bo'lsa, shu indeksgacha bo'lgan hamma choyhonalar ochiq deb hisoblanadi va hozirgi holat tanlangan choyhonaga ko'chiriladi. v1 dagi tanga so'mga o'tkaziladi. Testlar real saqlovni SaveGuard bilan himoya qiladi.", en: "I added a version number to the save. If an old file has a single \"city index\", every teahouse up to that index counts as unlocked and the current state moves to the selected teahouse. v1 coins are converted to som. Tests protect the real save with a SaveGuard." }
        },
        codeSource: "scripts/game_state.gd",
        codeSnippet: `func _load_single_choyhona(config: ConfigFile, version: int) -> void:
	flags = _as_dictionary(config.get_value("choyhona", "flags", {}))
	var data := {"upgrade_levels": config.get_value("player", "upgrade_levels", {})}
	for key: String in ["placed_buildings", "stock", "expansions", "rating", "day_time", "day_number", "intro_done"]:
		if config.has_section_key("choyhona", key):
			data[key] = config.get_value("choyhona", key)
	var city := clampi(int(config.get_value("choyhona", "city_index", 0)), 0, ChoyhonaCatalog.ITEMS.size() - 1)
	owned_choyhonas.clear()
	for i in city + 1:
		owned_choyhonas.append(ChoyhonaCatalog.ITEMS[i].id)
	current_choyhona = ChoyhonaCatalog.ITEMS[city].id
	_choyhona_saves = {}
	_apply_choyhona_data(data)
	if version < 2:
		_migrate_from_v1()
	elif version < 3:
		fill_stock()
	_queue_save()`,
        tags: ["Godot 4.6", "GDScript", "Idle/Tycoon", "Build System", "Save Migration", "Android"],
        links: { github: "https://github.com/xabibulloshamsiddinov/choyhona" }
    },
    {
        id: "bunker",
        title: "Bunker",
        engine: "Unity 6",
        engineClass: "engine-unity",
        category: ["unity", "3d", "multiplayer"],
        status: "wip",
        statusText: { uz: "Boshlang'ich bosqich · UI kit tayyor", en: "Early stage · UI kit done" },
        icon: "🛖",
        cover: "assets/images/art/storage.jpg",
        gallery: [
            { src: "assets/images/art/storage.jpg", caption: { uz: "O'yin uchun Blender'da yasalgan bunker ombori (EEVEE render)", en: "The bunker storage room modeled in Blender for the game (EEVEE render)" } },
            { src: "assets/images/art/storage-side.jpg", caption: { uz: "Ombor: modulli javonlar, quvurlar, ventilyatsiya", en: "Storage: modular shelves, pipes, ventilation" } }
        ],
        tagline: { uz: "Steam uchun onlayn social-deduction survival (\"Bunker\" kartali o'yini mantig'i)", en: "An online social-deduction survival game for Steam (based on the \"Bunker\" card game rules)" },
        shortDesc: {
            uz: "4–16 o'yinchi tasodifiy o'yinchilar bilan yoki kod orqali xonaga kiradi. Menyu, lobby va HUD UI Toolkit'da tayyor, tarmoq hozircha mock servis orqali ishlaydi.",
            en: "4–16 players join a room through matchmaking or a room code. The menu, lobby and HUD are done in UI Toolkit; networking currently runs through a mock service."
        },
        fullDesc: {
            uz: "Layout UXML'da, ko'rinish USS'da, controller'lar faqat mantiqni ulaydi. Shablonlar: xona qatori, o'yinchi kartasi, qo'ldagi karta, chat qatori. Lokalizatsiya en/uz/ru. Backend (Steam yoki Unity Gaming Services) hali tanlanmagan, shuning uchun hamma tarmoq chaqiruvlari INetworkService interfeysi orqali o'tadi va hozir MockNetworkService ishlatiladi.",
            en: "Layout is in UXML, styling in USS, and controllers only wire up logic. Templates: room row, player card, hand card, chat line. Localized to en/uz/ru. The backend (Steam or Unity Gaming Services) isn't chosen yet, so every network call goes through an INetworkService interface, currently backed by a MockNetworkService."
        },
        role: { uz: "Solo: UI arxitekturasi, 3D muhit", en: "Solo: UI architecture, 3D environment" },
        duration: { uz: "Noy 2026", en: "Nov 2026" },
        metrics: [
            { k: { uz: "UI", en: "UI" }, v: "UI Toolkit (UXML + USS)" },
            { k: { uz: "Tillar", en: "Languages" }, v: "en · uz · ru" },
            { k: { uz: "O'yinchilar", en: "Players" }, v: { uz: "4–16, onlayn", en: "4–16, online" } },
            { k: { uz: "3D", en: "3D" }, v: { uz: "Blender: 110 modulli asset, LOD0/1/2", en: "Blender: 110 modular assets, LOD0/1/2" } }
        ],
        mechanics: [
            { uz: "MainMenu, Settings, Game sahnalari; Bunker > Setup UI Scenes menyusi ularni yaratadi", en: "MainMenu, Settings and Game scenes, created by a Bunker > Setup UI Scenes editor menu" },
            { uz: "Quick match va xona kodi bilan kirish, tayyorlik, chat, o'yin boshlanishiga sanoq", en: "Quick match and room-code join, ready state, chat, a countdown to start" },
            { uz: "Custom UI elementlari: Atmosphere, HazardStrip", en: "Custom UI elements: Atmosphere, HazardStrip" },
            { uz: "INetworkService + MockNetworkService: backend'siz UI'ni to'liq sinash", en: "INetworkService + MockNetworkService: the whole UI is testable without a backend" }
        ],
        technicalChallenge: {
            problem: { uz: "Tarmoq backend'i tanlanmagan, lekin menyu, lobby va chat UI'ni hozirdan sinash kerak edi.", en: "The network backend wasn't chosen yet, but the menu, lobby and chat UI had to be testable now." },
            solution: { uz: "Hamma tarmoq amallarini bitta interfeysga yig'dim. UI faqat interfeys bilan gaplashadi, hozir esa xonalar, o'yinchilar va chatni soxta qilib beradigan mock servis ulangan. Steam yoki UGS tanlanganda UI kodiga tegmasdan faqat implementatsiya almashtiriladi.", en: "I put every network operation behind one interface. The UI only talks to that interface, which is currently backed by a mock that fakes rooms, players and chat. Once Steam or UGS is chosen, only the implementation changes; the UI code stays untouched." }
        },
        codeSource: "Assets/Bunker/Scripts/Runtime/NetworkService.cs",
        codeSnippet: `public interface INetworkService
{
    int OnlinePlayers { get; }
    RoomInfo CurrentRoom { get; }
    PlayerInfo LocalPlayer { get; }
    event Action<RoomInfo> RoomChanged;
    event Action<string, string> ChatReceived;   // (sender, message)
    event Action<int> GameCountdown;             // seconds left, 0 = load the game scene
    void FetchRooms(Action<List<RoomInfo>> done);
    void QuickMatch(Action<RoomInfo> found);
    void CancelQuickMatch();
    void CreateRoom(RoomInfo settings, Action<RoomInfo> done);
    void JoinRoom(string id, Action<RoomInfo> done);
    void JoinByCode(string code, Action<RoomInfo> done); // null = not found
    void SetReady(bool ready);
    void SendChat(string msg);
    void StartGame();
    void LeaveRoom();
}`,
        tags: ["Unity 6", "C#", "UI Toolkit", "UXML/USS", "Multiplayer (mock)", "Localization", "Blender"],
        links: {}
    },

    /* ===================================================================== PROTOTYPES */
    {
        id: "marsgo",
        title: "MarsGo",
        engine: "Unity 6",
        engineClass: "engine-unity",
        category: ["unity", "3d"],
        status: "prototype",
        statusText: { uz: "Prototip · 3/5 bosqich", en: "Prototype · 3/5 milestones" },
        icon: "🪐",
        cover: "assets/images/marsgo/level1.jpg",
        gallery: [
            { src: "assets/images/marsgo/level1.jpg", caption: { uz: "1-daraja: First Flight", en: "Level 1: First Flight" } },
            { src: "assets/images/marsgo/level2.jpg", caption: { uz: "2-daraja: Narrow Corridor", en: "Level 2: Narrow Corridor" } }
        ],
        tagline: { uz: "Rocket Boost'ning Unity 6 + URP'ga ko'chirilgan versiyasi, Mars mavzusida", en: "Rocket Boost ported to Unity 6 + URP with a Mars theme" },
        shortDesc: {
            uz: "Godot'dagi raketa o'yinini Unity 6 + URP'ga ko'chirdim: parvoz, kamera, maydonchalar, to'siqlar, yoqilg'i kapsulasi, VFX va audio.",
            en: "I ported my Godot rocket game to Unity 6 + URP: flight, camera, pads, obstacles, fuel capsules, VFX and audio."
        },
        fullDesc: {
            uz: "Maqsad — bitta o'yinni ikki xil dvijokda qilib, farqini o'rganish. Darajalar C# kodda ma'lumot sifatida (LevelLibrary) yozilgan va o'yin vaqtida LevelBuilder ularni quradi, shuning uchun sahna bitta. To'siqlar (harakatlanuvchi blok, shamol zonasi, lazer darvozasi, aylanuvchi parrak), VFX, musiqa va ovoz yo'naltirgichi bor. Build'ni -mg-shots bilan ishga tushirsa, u har bir darajani o'zi aylanib skrinshot oladi (avtomatik vizual test).",
            en: "The goal: build the same game in two engines and learn the differences. Levels are written as data in C# (LevelLibrary) and built at runtime by a LevelBuilder, so there is a single scene. Obstacles (moving blocks, wind zones, laser gates, spinning blades), VFX, music and an audio router are in. Running the build with -mg-shots makes it fly through every level and take screenshots (an automated visual test)."
        },
        role: { uz: "Solo: port, dasturlash", en: "Solo: port, programming" },
        duration: { uz: "Okt–noy 2026", en: "Oct–Nov 2026" },
        metrics: [
            { k: { uz: "Dvijok", en: "Engine" }, v: "Unity 6000.6, URP, Input System" },
            { k: { uz: "Bosqichlar", en: "Milestones" }, v: { uz: "3 / 5 tayyor", en: "3 / 5 done" } },
            { k: { uz: "To'siqlar", en: "Obstacles" }, v: { uz: "5 tur", en: "5 types" } },
            { k: { uz: "Platforma", en: "Platform" }, v: { uz: "Windows (keyin Android)", en: "Windows (Android later)" } }
        ],
        mechanics: [
            { uz: "Data-driven darajalar: LevelLibrary → LevelBuilder (runtime), bitta sahna", en: "Data-driven levels: LevelLibrary → LevelBuilder (runtime), one scene" },
            { uz: "Editor menyusi: MarsGo/Setup Project sahna va materiallarni avtomatik yaratadi", en: "Editor menu: MarsGo/Setup Project creates the scene and materials automatically" },
            { uz: "ObstacleBase: MovingBlock, WindArea, LaserGate, SpinningBlade, FuelCapsule", en: "ObstacleBase: MovingBlock, WindArea, LaserGate, SpinningBlade, FuelCapsule" },
            { uz: "AudioManager, MusicDirector, LevelAudioRouter; TimeControl timeScale'ni boshqaradi", en: "AudioManager, MusicDirector, LevelAudioRouter; TimeControl owns timeScale" },
            { uz: "AutoScreenshot: build har darajani o'zi o'ynab, rasmga oladi, saqlovga tegmaydi", en: "AutoScreenshot: the build plays every level itself and captures it without touching the save" }
        ],
        technicalChallenge: {
            problem: { uz: "Godot sahnalari (.tscn) Unity'ga to'g'ridan-to'g'ri o'tmaydi, darajalarni qo'lda qayta yig'ish esa xato chiqarishi mumkin edi.", en: "Godot scenes (.tscn) don't carry over to Unity, and rebuilding the levels by hand invites mistakes." },
            solution: { uz: "Darajalarni sahna emas, ma'lumot (LevelDef: bloklar, maydonchalar, to'siqlar) qilib yozdim. LevelBuilder ularni o'yin vaqtida seed bilan quradi. Daraja qo'shish uchun bitta ma'lumot yozuvi yetadi.", en: "I wrote the levels as data (LevelDef: blocks, pads, obstacles) instead of scenes. LevelBuilder builds them at runtime from a seed, so adding a level takes a single data entry." }
        },
        codeSource: "Assets/Scenes/MarsGo/Scripts/Level/LevelBuilder.cs",
        codeSnippet: `public static LevelInstance Build(LevelDef def, int seed)
{
    var inst = new LevelInstance { Root = new GameObject("Level: " + def.Name) };
    var root = inst.Root.transform;
    var rng = new System.Random(seed);

    var geometry = new GameObject("Geometry").transform;
    geometry.SetParent(root, false);
    foreach (var b in def.Blocks) BuildBlock(geometry, b, rng);

    BuildBackdrop(root, def, rng);

    inst.LaunchPad = BuildPad(root, "LaunchPad", Pad.PadKind.Launch, def.LaunchPad, def.LaunchPadSize);
    inst.LandingPad = BuildPad(root, "LandingPad", Pad.PadKind.Landing, def.LandingPad, def.LandingPadSize);

    var obstacles = new GameObject("Obstacles").transform;
    obstacles.SetParent(root, false);
    foreach (var o in def.Obstacles) ObstacleFactory.Build(obstacles, o);

    BuildRocket(inst, def);
    inst.LandingPad.rocket = inst.Rocket.transform;
    return inst;
}`,
        tags: ["Unity 6", "C#", "URP", "Data-driven", "Editor Tools", "Port"],
        links: { github: "https://github.com/xabibulloshamsiddinov/MarsGo" }
    },
    {
        id: "elemental-arena",
        title: "Elemental Arena",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d"],
        status: "prototype",
        statusText: { uz: "Prototip · o'quv fan-loyiha", en: "Prototype · learning fan project" },
        icon: "🌀",
        cover: "assets/images/avatar/tornado.jpg",
        gallery: [
            { src: "assets/images/avatar/tornado.jpg", caption: { uz: "Havo: tornado qobiliyati", en: "Air: the tornado ability" } },
            { src: "assets/images/avatar/battle.jpg", caption: { uz: "Arena: to'lqinlar, HP chiziqlari", en: "Arena: enemy waves, HP bars" } },
            { src: "assets/images/avatar/select.jpg", caption: { uz: "Personaj tanlash va qobiliyatlar ta'rifi", en: "Character select with ability descriptions" } },
            { src: "assets/images/avatar/menu.jpg", caption: { uz: "Bosh menyu", en: "Main menu" } },
            { src: "assets/images/avatar/appa.jpg", caption: { uz: "Uchuvchi hayvonda parvoz", en: "Riding a flying mount" } },
            { src: "assets/images/avatar/party.jpg", caption: { uz: "Jamoa NPC'lari", en: "Party NPCs" } }
        ],
        tagline: { uz: "4 element × 4 qobiliyat: 3D arena jangi (Avatar uslubidagi o'quv prototipi)", en: "4 elements × 4 abilities: a 3D arena brawler (an Avatar-inspired learning prototype)" },
        shortDesc: {
            uz: "Uchinchi shaxsdan 3D jang: havo, suv, yer va olov, har birida 4 ta qobiliyat. Combat va VFX'ni o'rganish uchun qilingan notijoriy prototip.",
            en: "Third-person 3D combat: air, water, earth and fire with 4 abilities each. A non-commercial prototype made to learn combat and VFX."
        },
        fullDesc: {
            uz: "Mexanika va VFX'ni o'rganish uchun qilingan notijoriy fan-prototip, tarqatilmaydi. Har bir element uchun LMB, RMB, Q, E qobiliyatlari: havo diski, tornado; suv qamchisi, aylanuvchi suv sharlari (qalqon), to'lqin; yer toshlari va tikanlari; olov to'pi va tepishlar. Yuklab olingan modellar rigsiz edi, ularni Blender'da Python skriptlar bilan rig qilib Godot'ga eksport qildim. Dushman to'lqinlari, NPC jamoa, pauza va sozlamalar menyusi bor.",
            en: "A non-commercial fan prototype made to learn mechanics and VFX; it is not distributed. Each element has LMB, RMB, Q and E abilities: air disc and tornado; water whip, orbiting water spheres (a shield) and a wave; earth rocks and spikes; fireballs and kicks. The downloaded models had no rigs, so I rigged them with Python scripts in Blender and exported them to Godot. Enemy waves, party NPCs, pause and settings menus are in."
        },
        role: { uz: "Solo: combat dasturlash, VFX, rigging skriptlari", en: "Solo: combat programming, VFX, rigging scripts" },
        duration: { uz: "Noy 2026", en: "Nov 2026" },
        metrics: [
            { k: { uz: "Qobiliyatlar", en: "Abilities" }, v: "4 × 4 = 16" },
            { k: { uz: "Personajlar", en: "Characters" }, v: { uz: "6 ta tanlanadigan", en: "6 playable" } },
            { k: { uz: "Rig", en: "Rigging" }, v: { uz: "Blender Python skriptlari", en: "Blender Python scripts" } },
            { k: { uz: "Maqsad", en: "Purpose" }, v: { uz: "O'qish (notijoriy)", en: "Learning (non-commercial)" } }
        ],
        mechanics: [
            { uz: "Element almashtirish, har qobiliyatga alohida cooldown", en: "Element switching with a cooldown per ability" },
            { uz: "Protsedural VFX: zarrachalar, shaffof mesh'lar, so'nib yo'qoladigan effektlar", en: "Procedural VFX: particles, translucent meshes, fading effects" },
            { uz: "Tornado: dushmanlarni sfera so'rovi bilan tortib osmonga otadi", en: "Tornado: pulls enemies in with a sphere query and throws them up" },
            { uz: "Suv sharlari qalqon vazifasini bajaradi (snaryadni yutadi)", en: "Water spheres act as a shield (they absorb projectiles)" },
            { uz: "Animator: kod bilan boshqariladigan cast/run/jump holatlari", en: "Animator: code-driven cast/run/jump states" }
        ],
        technicalChallenge: {
            problem: { uz: "Yuklab olingan personaj modellari skeletsiz (rigsiz) edi, ularni animatsiya qilib bo'lmasdi.", en: "The downloaded character models had no skeleton, so they couldn't be animated." },
            solution: { uz: "Blender uchun Python skriptlar yozdim: ular modelga skelet qo'yib, og'irliklarni bog'laydi va Godot uchun glb chiqaradi. Animatsiyalarni esa kodda suyaklarni burish orqali qildim.", en: "I wrote Blender Python scripts that add a skeleton, bind the weights and export a glb for Godot. The animations are done in code by rotating bones." }
        },
        codeSource: "scripts/bending/bender.gd",
        codeSnippet: `func _air_3() -> void:  # Tornado
	_face(0.8)
	anim.play_cast("spin", 0.8)
	var dir: Vector3 = player.flat_forward()
	var start: Vector3 = player.global_position + dir * 2.5
	var t := Node3D.new()
	world().add_child(t)
	t.global_position = start
	# ... funnel mesh + ring particles ...
	var life := 4.5
	var tick := 0.0
	while life > 0.0 and is_instance_valid(t):
		var dt := get_physics_process_delta_time()
		await get_tree().physics_frame
		life -= dt
		tick -= dt
		t.global_position += dir * 7.0 * dt
		t.global_position.y = BendUtil.ground_y(world(), t.global_position, excl())
		funnel.rotation.y += dt * 9.0
		if tick <= 0.0:
			tick = 0.1
			_tornado_pull(t.global_position)`,
        tags: ["Godot 4.6", "GDScript", "3D Combat", "VFX", "Blender Python", "Rigging"],
        links: {},
        note: { uz: "Avatar: The Last Airbender — Nickelodeon'ga tegishli. Bu notijoriy o'quv prototipi, tarqatilmaydi.", en: "Avatar: The Last Airbender belongs to Nickelodeon. This is a non-commercial learning prototype and is not distributed." }
    }
];

// Kichik va o'quv loyihalari (galereyasiz, qisqa ro'yxat)
const LEARNING_DATA = [
    {
        title: "Ashen Oaths",
        engine: "Unity 6.6 · URP",
        kind: { uz: "Prototip", en: "Prototype" },
        desc: {
            uz: "Original fantasy action-adventure vertikal kesmasi: uchinchi shaxs boshqaruvi, elchi bilan suhbat, bosqinchi dushman, muhrni qaytarish va mojaroni hal qiladigan tanlov (1/2).",
            en: "An original fantasy action-adventure slice: third-person controls, an envoy to talk to, a raider enemy, a seal to recover and a choice (1/2) that resolves the conflict."
        },
        date: { uz: "Noy 2026", en: "Nov 2026" }
    },
    {
        title: "Rocket Boost (Unity)",
        engine: "Unity 6",
        kind: { uz: "O'quv", en: "Learning" },
        desc: {
            uz: "Raketa o'yinining ilk Unity versiyasi: 4 daraja, yoqilg'i tizimi, HUD (tezlik, balandlik, yoqilg'i), pauza menyusi, sensorli boshqaruv va sahnalarni yaratadigan editor skripti.",
            en: "The first Unity version of the rocket game: 4 levels, a fuel system, HUD (speed, altitude, fuel), pause menu, touch controls and an editor script that builds the scenes."
        },
        date: { uz: "Okt 2026", en: "Oct 2026" }
    },
    {
        title: "Obstacle Dodge",
        engine: "Unity 6",
        kind: { uz: "O'quv", en: "Learning" },
        desc: {
            uz: "Birinchi Unity o'yinim: to'siqlardan qochish, tushadigan va aylanadigan bloklar, o'yinchiga uchadigan snaryadlar, ochko hisoblagich.",
            en: "My first Unity game: dodge obstacles, falling and spinning blocks, projectiles that fly at the player, a hit counter."
        },
        date: { uz: "Okt 2026", en: "Oct 2026" }
    },
    {
        title: "Kitchen Chaos",
        engine: "Unity",
        kind: { uz: "Kurs", en: "Course" },
        desc: {
            uz: "Code Monkey'ning Kitchen Chaos kursi bo'yicha qilingan oshxona o'yini: Unity'da toza C# arxitekturasi, eventlar va Input System'ni shu kursda o'rgandim.",
            en: "A cooking game built by following Code Monkey's Kitchen Chaos course, where I learned clean C# architecture, events and the Input System in Unity."
        },
        date: { uz: "Iyul 2026", en: "Jul 2026" },
        github: "https://github.com/xabibulloshamsiddinov/KitchenChaus"
    },
    {
        title: "Unity City Demo",
        engine: "Unity 2022.3",
        kind: { uz: "O'quv", en: "Learning" },
        desc: {
            uz: "Primitivlardan yig'ilgan chorraha: yo'llar, piyodalar o'tish joyi, binolar, svetoforlar va qizil chiroqda to'xtaydigan mashinalar.",
            en: "An intersection built from primitives: roads, crosswalks, buildings, traffic lights and cars that stop on red."
        },
        date: { uz: "Sen 2026", en: "Sep 2026" }
    },
    {
        title: "Top-down Shooter 2D",
        engine: "Godot 4",
        kind: { uz: "Kurs", en: "Course" },
        desc: {
            uz: "Godot 2D Academy kursi bo'yicha: menyu, personaj tanlash, qurollar, protsedural dungeon, dushmanlar va itemlar.",
            en: "Following the Godot 2D Academy course: menus, character select, weapons, a procedural dungeon, enemies and items."
        },
        date: { uz: "2026", en: "2026" }
    }
];

// 3D ishlar: Blender (Python skriptlar bilan protsedural modellar) va Sketchfab modellarini o'yinga olish
const ART_DATA = [
    {
        title: { uz: "Sedan (protsedural)", en: "Sedan (procedural)" },
        image: "assets/images/art/sedan-front.jpg",
        extra: "assets/images/art/sedan-side.jpg",
        tool: "Blender 5.2 · Python · Cycles",
        desc: {
            uz: "build_sedan.py original 4 eshikli sedanni noldan quradi: kuzov, panel tirqishlari, chiroqlar, 5 juft parrakli disklar. glb qilib Night Tashkent'ga eksport qilingan.",
            en: "build_sedan.py builds an original 4-door sedan from scratch: body, panel gaps, lights, 5-spoke wheels. Exported as glb into Night Tashkent."
        }
    },
    {
        title: { uz: "Katta SUV (protsedural)", en: "Large SUV (procedural)" },
        image: "assets/images/art/suv-front.jpg",
        tool: "Blender 5.2 · Python",
        desc: {
            uz: "Sedan skripti asosida: 5.38 × 2.06 × 1.94 m, 22\" disklar, oldi/yon/orqa renderlar. O'yin uchun glb ~180k uchburchak (LOD hali kerak).",
            en: "Based on the sedan script: 5.38 × 2.06 × 1.94 m, 22\" wheels, front/side/rear renders. ~180k-triangle glb for the game (LODs still to do)."
        }
    },
    {
        title: { uz: "Hazmat ishchi (erkak/ayol)", en: "Hazmat worker (male/female)" },
        image: "assets/images/art/hazmat.jpg",
        extra: "assets/images/art/hazmat-detail.jpg",
        tool: "Blender · Python · FBX → Unity",
        desc: {
            uz: "Protsedural personaj ~40.5k uchburchak, ayol varianti bitta argument bilan chiqadi. Turnaround va yaqin renderlar, Unity loyihasiga FBX.",
            en: "A procedural character, ~40.5k triangles; the female variant is one argument away. Turnaround and close-up renders, FBX into Unity."
        }
    },
    {
        title: { uz: "Zaher (stilizatsiya personaj)", en: "Zaher (stylized character)" },
        image: "assets/images/art/zaher.jpg",
        tool: "Blender · Python · Godot glb + LOD1",
        desc: {
            uz: "Skelet (armature) bilan quriladigan stilizatsiya qilingan personaj, Godot uchun ikki darajali LOD eksport.",
            en: "A stylized character built with an armature, exported to Godot with two LOD levels."
        }
    },
    {
        title: { uz: "Bunker ombori", en: "Bunker storage room" },
        image: "assets/images/art/storage.jpg",
        tool: "Blender 5.2 · EEVEE · FBX",
        desc: {
            uz: "14 × 20 m xona, 268k uchburchak, 855 obyekt (112 noyob mesh instancing), 43 PBR material, 110 modulli asset LOD0/1/2 bilan, 139 UCX kolliziya, 113 FBX.",
            en: "A 14 × 20 m room: 268k triangles, 855 objects (112 unique meshes, instanced), 43 PBR materials, 110 modular assets with LOD0/1/2, 139 UCX colliders, 113 FBX files."
        }
    },
    {
        title: { uz: "Sketchfab → Godot pipeline", en: "Sketchfab → Godot pipeline" },
        image: "assets/images/art/car-cobalt.jpg",
        extra: "assets/images/art/car-nexia.jpg",
        tool: "Python · Sketchfab · glb",
        desc: {
            uz: "19 ta mashina va avtobus (Cobalt, Nexia 2, Damas, Malibu, BYD...) convert_cars.py orqali glb + json'ga o'tkazildi. Muallif va litsenziya (CC BY, CC BY-NC-SA) har biriga yozib borildi.",
            en: "19 cars and buses (Cobalt, Nexia 2, Damas, Malibu, BYD...) converted to glb + json by convert_cars.py, with the author and license (CC BY, CC BY-NC-SA) recorded for each."
        }
    }
];

// Shaxsiy ma'lumotlar. Bo'sh qoldirilgan havolalar saytda ko'rinmaydi.
const DEVELOPER_PROFILE = {
    name: "Xabibullo Shamsiddinov",
    initials: "XS",
    photo: "assets/images/profile/xabibullo.jpg",
    location: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" },
    university: "Millat Umidi University",
    socials: {
        email: "xabibulloshamsiddinov90@gmail.com",
        phone: "+998 50 734 15 27",
        linkedin: "https://www.linkedin.com/in/xabibullo-shamsiddinov-869918410/",
        github: "https://github.com/xabibulloshamsiddinov",
        telegram: "",
        itchio: ""
    }
};
