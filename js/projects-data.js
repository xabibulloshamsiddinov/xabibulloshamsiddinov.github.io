// Portfolio ma'lumotlari: hamma loyihalar shu yerda.
// Har bir loyiha haqiqiy: rasmlar o'yinning o'zidan olingan, kod parchalari loyiha fayllaridan ko'chirilgan
// (manba yo'li `codeSource` da yozilgan). Yangi loyiha qo'shish uchun PROJECTS_DATA ga yana bitta obyekt qo'shing.

const PROJECTS_DATA = [
    {
        id: "night-tashkent",
        title: "Night Tashkent",
        tagline: "OpenStreetMap'dan qurilgan haqiqiy Toshkentda 3D mashina simulyatori",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile"],
        status: "Ishlab chiqilmoqda",
        icon: "🌃",
        cover: "assets/images/night-tashkent/street.jpg",
        gallery: [
            { src: "assets/images/night-tashkent/street.jpg", caption: "Ko'cha darajasi: OSM yo'llari, chinorlar, chiroq ustunlari" },
            { src: "assets/images/night-tashkent/square.jpg", caption: "Amir Temur xiyoboni tepadan" },
            { src: "assets/images/night-tashkent/driving-night.jpg", caption: "Tunda haydash: fara, spidometr va taxometr, minimap" },
            { src: "assets/images/night-tashkent/amir-temur.jpg", caption: "Landmark: Amir Temur haykali" },
            { src: "assets/images/night-tashkent/bridge.jpg", caption: "Ko'prik: balandlik ostidan o'tadigan narsaga qarab hisoblanadi" },
            { src: "assets/images/night-tashkent/overpass.jpg", caption: "Estakada va avtobus" },
            { src: "assets/images/night-tashkent/logo.jpg", caption: "O'yin logotipi" }
        ],
        shortDesc: "Toshkentning haqiqiy yo'llari, binolari, kanallari va parklari OpenStreetMap ma'lumotidan avtomatik quriladi. Mashinada yurasiz, F bilan tushib piyoda yurasiz.",
        fullDesc: "Python skriptlari Geofabrik'dan olingan OSM faylini o'qib, shaharni 250 metrli bo'laklarga (chunk) bo'ladi. Godot o'yinchi atrofidagi bo'laklarni WorkerThreadPool'da fon oqimida yuklab, uzoqdagilarini o'chiradi. Ustiga mashina fizikasi (avto/drift uzatmalar qutisi, yoqilg'i, faralar), kun/tun sikli, minimap va navigator, yo'l chiroqlari, sinadigan buyumlar, landmarklar (Amir Temur xiyoboni, Navoiy teatri, \"O'zbekiston\" mehmonxonasi) qo'shilgan. NPC transport uchun Sketchfab'dan 19 ta mashina/avtobus modeli Python konvertori orqali o'yinga olingan, mualliflar va litsenziyalar alohida ro'yxatda yuritiladi.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Okt 2026 – hozir",
        metrics: {
            "Shahar bo'laklari": "3 240 chunk (250 m)",
            "Kod": "~15 000 qator GDScript + Python",
            "Mashinalar": "19 ta Sketchfab modeli + o'z sedanim",
            "Platforma": "Windows, Android"
        },
        mechanics: [
            "OSM → Python → chunk pipeline (Geofabrik .pbf, pickle kesh, shahar chegarasi relation bo'yicha)",
            "Fon oqimida chunk streaming: masofaga qarab yuklash/o'chirish, parallel build limiti",
            "Mashina: AUTO ↔ DRIFT rejimi, R-N-D selektor, spidometr va taxometr, yoqilg'i va zapravka",
            "Kun/tun sikli, yo'l chiroqlari yorug'lik xaritasi, svetoforlar, sinadigan buyumlar",
            "Ko'priklar: deka balandligi ostidan o'tadigan narsaga qarab, yondashuv yo'llarida rampa",
            "Garaj (19 mashina), kundalik sovg'a (rewarded ad), ingliz tilidagi UI"
        ],
        technicalChallenge: {
            problem: "Butun Toshkent bitta sahnaga sig'maydi: o'n minglab binolar va yo'llar xotirani to'ldirib, telefonda o'yin qotib qolardi.",
            solution: "Shaharni oldindan Python bilan 250 metrli chunk fayllarga bo'ldim. O'yinda faqat o'yinchi atrofidagi radius ichidagi chunklar, eng yaqinidan boshlab navbat bilan yuklanadi. Fayl o'qish va mesh massivlarini qurish WorkerThreadPool'da, sahnaga qo'shish esa asosiy oqimda bajariladi."
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
        tags: ["Godot 4.6", "GDScript", "Python", "OpenStreetMap", "Streaming", "Forward+", "Sketchfab"],
        links: { github: "https://github.com/xabibulloshamsiddinov/night-tashkent" },
        note: "Xarita ma'lumotlari © OpenStreetMap contributors (ODbL). Mashina modellari: Q.SARDOR, own.guest, Ddiaz Design (Sketchfab)."
    },
    {
        id: "rocket-boost",
        title: "Rocket Boost",
        tagline: "Lunar Lander uslubidagi 3D raketa o'yini: 100 daraja, 7 raketa, 3 rejim",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile", "web"],
        status: "O'ynasa bo'ladi · Android APK + Web",
        icon: "🚀",
        cover: "assets/images/rocket-boost/menu.jpg",
        gallery: [
            { src: "assets/images/rocket-boost/menu.jpg", caption: "Bosh menyu" },
            { src: "assets/images/rocket-boost/level.jpg", caption: "Daraja: tezlik/burchak telemetriyasi, sensorli tugmalar, banner reklama joyi" },
            { src: "assets/images/rocket-boost/space-guardians.jpg", caption: "Space Guardians: 1–2 o'yinchilik kooperativ shooter" },
            { src: "assets/images/rocket-boost/rockets.jpg", caption: "Raketa tanlash (Shuttle)" },
            { src: "assets/images/rocket-boost/levels.jpg", caption: "100 ta daraja, yulduzlar bilan" },
            { src: "assets/images/rocket-boost/results.jpg", caption: "Qo'nish natijasi" },
            { src: "assets/images/rocket-boost/versus.jpg", caption: "Rocket Race: 2 o'yinchi, ekran ikkiga bo'lingan" }
        ],
        shortDesc: "Raketani uchish maydonchasidan qo'nish maydonchasiga hech narsaga urilmasdan olib borib, sekin va tik qo'ndirish kerak. Shu saytning o'zida, brauzerda o'ynasa bo'ladi.",
        fullDesc: "Raketa X/Y tekisligida uchadi, Jolt Physics, Mobile renderer. 1–10-darajalar qo'lda yasalgan, 11–100-darajalar Python generatori bilan seed asosida qurilgan (har 10 daraja yangi olam va boss). 7 ta raketa (jumladan Shuttle va NUJ), qobiliyatlar (nitro, qalqon, muallaq turish, qochish), qo'shimcha rejimlar: Space Guardians (20 bosqich, bosslar, 6 ta samolyot) va Rocket Race (2 o'yinchi split-screen). Android uchun AdMob reklama, sensorli boshqaruv va imzolangan APK, Yandex Games uchun web build, uz/en/ru tarjima.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Okt 2026 (~2 hafta)",
        metrics: {
            "Darajalar": "100 (10 qo'lda + 90 generator)",
            "Kod": "~21 600 qator GDScript",
            "Tillar": "O'zbek, ingliz, rus",
            "Platforma": "Android, Web, Windows"
        },
        mechanics: [
            "LandingJudge: tezlik va burchak bo'yicha xavfsiz qo'nishni baholash, yulduzlar",
            "Seed'li Python daraja generatori: wall, hanger, slalom, laser, blade, piston, wind, pit bo'laklari",
            "Har bir daraja uchun avtomatik test: raketa o'lchamidagi kapsula yo'l bo'ylab hech narsaga tegmasligi tekshiriladi",
            "Qobiliyatlar: Nitro, Qalqon (cooldown), Muallaq, Qochish (raycast bilan devordan itarish)",
            "VFX: alanga shaderi, tutun izi, portlash, qo'nish changi; Low/High sifat profillari",
            "Monetizatsiya: AdMob interstitial/banner/rewarded, Yandex SDK; uz/en/ru lokalizatsiya"
        ],
        technicalChallenge: {
            problem: "90 ta darajani qo'lda yasash juda uzoq vaqt oladi, tasodifiy yasalganda esa ba'zi darajalardan o'tib bo'lmay qolishi mumkin.",
            solution: "Python generatori har bir darajani seed bilan bo'laklardan yig'adi va raketa uchishi kerak bo'lgan yo'l nuqtalarini (route) ham yozadi. Keyin Godot testi har bir darajani yuklab, raketa o'lchamidagi kapsulani shu yo'l bo'ylab yuradi: devorga tegsa, test yiqiladi. Qayta ishga tushirilsa ham bir xil darajalar chiqadi."
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
        tags: ["Godot 4.6", "GDScript", "Jolt Physics", "Procedural Levels", "AdMob", "Android", "Web"],
        links: { play: "games/rocket-boost/index.html" }
    },
    {
        id: "neon-rails",
        title: "Neon Rails",
        tagline: "Hamma narsasi kodda yaratilgan 3D endless runner + 2 o'yinchilik poyga",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile", "web"],
        status: "v1.0 · v1.1 ishlab chiqilmoqda",
        icon: "🏙️",
        cover: "assets/images/neon-rails/versus.jpg",
        gallery: [
            { src: "assets/images/neon-rails/versus.jpg", caption: "Neon Pursuit: 2 o'yinchi, politsiya ta'qibi, jangovar power-up'lar" },
            { src: "assets/images/neon-rails/run.jpg", caption: "Endless runner: 3 yo'lak, poyezdlar, to'siqlar" },
            { src: "assets/images/neon-rails/run2.jpg", caption: "To'siq va tangalar" },
            { src: "assets/images/neon-rails/menu.jpg", caption: "Bosh menyu (portret, telefon uchun)" }
        ],
        shortDesc: "Original endless lane runner: grafika primitiv va shaderlardan, ovoz va musiqa kichik sintezatordan yaratiladi. Tashqi asset yo'q. Brauzerda o'ynasa bo'ladi.",
        fullDesc: "O'yinchi uchta yo'lak bo'ylab yuguradi, sakraydi va yumalaydi. Poyezdlar, to'siqlar, rampa va chuqurlar 53 ta qo'lda yozilgan pattern'dan olinadi, har bir pattern yuklanganda maxsus validator orqali o'tib bo'ladiganligi isbotlanadi. Magnet, qalqon, jetpack, x2 ochko, missiyalar, yutuqlar va moslashuvchan qiyinlik bor. 1.1 versiyada \"Neon Pursuit\" qo'shildi: bitta ekranda ikki mashina duel qiladi, ortidan politsiya quvadi, raketa, mina, EMP kabi power-up'lar ishlatiladi.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Noy 2026",
        metrics: {
            "Patternlar": "53 ta, validator bilan",
            "Kod": "~14 000 qator GDScript",
            "Missiyalar": "15 missiya, 12 yutuq",
            "Testlar": "unit + 10 daqiqalik bot soak"
        },
        mechanics: [
            "Player state machine: run, jump, fall, roll, stumble, jetpack, dead; coyote time, buffered input",
            "Treadmill dunyo: chunk recycling, curved-world va fog shaderlari, MultiMesh dekor",
            "Pattern DSL + SolvabilityValidator (qatorma-qator BFS), tension budget bo'yicha temp",
            "Object pool, event bus, command, service locator; hamma sozlamalar .tres resurslarda",
            "Neon Pursuit: 5 yo'lakli trassa, politsiya, homing raketa, EMP, mina, nitro, qalqon",
            "Test bot, 10 simulyatsiya daqiqalik soak test, Web va Android eksport"
        ],
        technicalChallenge: {
            problem: "To'siqlar tasodifiy qo'yilsa, ba'zan hech qanday yo'l bilan o'tib bo'lmaydigan joy chiqadi va o'yinchi aybsiz yutqazadi.",
            solution: "Patternlarni matnli DSL'da yozdim (har qator = 3 yo'lak). SolvabilityValidator (qator, yo'lak, balandlik, kutish) holatlarida qatorma-qator qidiradi va inson reaksiya vaqtini hisobga oladi. Yechib bo'lmaydigan pattern'ning maksimal qiyinligi avtomatik pasaytiriladi. Shu qidiruvning o'zi test bot'ni ham boshqaradi."
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
    {
        id: "choyhona",
        title: "Choyhona Simulator",
        tagline: "O'zbek choyhonasi haqida idle/tycoon (Pizza Ready uslubida)",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d", "mobile"],
        status: "Ishlab chiqilmoqda",
        icon: "🫖",
        cover: "assets/images/choyhona/game.jpg",
        gallery: [
            { src: "assets/images/choyhona/game.jpg", caption: "O'yin: mehmonlar, to'y egasining katta buyurtmasi, qurish tugmasi" },
            { src: "assets/images/choyhona/menu.jpg", caption: "Bosh menyu" },
            { src: "assets/images/choyhona/logo.jpg", caption: "Key art" }
        ],
        shortDesc: "O'yinchi choyhona egasi: so'ri va supalar quradi, qozonda osh, tandirda non va somsa pishiradi, samovarda choy qaynatadi, mehmonlarga xizmat qiladi.",
        fullDesc: "Erkin qurish tizimi: jihoz tanlanadi, yarim shaffof \"arvoh\" chiqadi (yashil — qo'ysa bo'ladi, qizil — yo'q), o'yinchi joyni tanlab buradi. Oshxona jihozlari faqat oshxona hududiga quriladi. Xodimlar, sklad, kassa, drive-thru oynasi, kengaytirishlar, kundalik vazifalar va sovg'alar, offline daromad bor. 5 ta choyhona daraja va pul bilan ketma-ket ochiladi, har birining holati alohida saqlanadi. Narxlar so'mda.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Noy 2026",
        metrics: {
            "Choyhonalar": "5 ta, ketma-ket ochiladi",
            "Kod": "~13 700 qator GDScript",
            "Testlar": "5 ta avtomatik test skripti",
            "Platforma": "Android (landshaft)"
        },
        mechanics: [
            "Ghost-placement qurish tizimi: zona tekshiruvi (oshxona ichi/tashqarisi), burish, buzish (yarim narx qaytadi)",
            "Mehmon oqimi va buyurtmalar: osh, non, somsa, choy; VIP xona, to'y egasining katta buyurtmasi",
            "Xodimlar (oshpaz, ofitsiant) va ularning vazifa taqsimoti",
            "Iqtisod: so'm va olmos, daraja, reyting, offline daromad, x2 daromad (rewarded ad)",
            "Save versiyalash: SAVE_VERSION 4, eski saqlovlarni yangi formatga migratsiya",
            "Testlar: gameplay, xodimlar, do'kon, UI smoke, features (SaveGuard real saqlovni tiklaydi)"
        ],
        technicalChallenge: {
            problem: "Bitta choyhonadan bir nechta choyhonaga o'tganda saqlov fayli formati o'zgardi. Eski o'yinchilarning progressi yo'qolmasligi kerak edi.",
            solution: "Saqlovga versiya raqami qo'shdim. Eski faylda bitta \"shahar indeksi\" bo'lsa, shu indeksgacha bo'lgan hamma choyhonalar ochiq deb hisoblanadi va hozirgi holat tanlangan choyhonaga ko'chiriladi. v1 dagi tanga so'mga o'tkaziladi. Testlar real saqlovni SaveGuard bilan himoya qiladi."
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
        links: {}
    },
    {
        id: "avatar-arena",
        title: "Avatar: Elemental Arena",
        tagline: "4 element, 4 qobiliyat: 3D arena jangi (fan-prototip)",
        engine: "Godot 4.6",
        engineClass: "engine-godot",
        category: ["godot", "3d"],
        status: "Prototip · notijoriy fan-loyiha",
        icon: "🌀",
        cover: "assets/images/avatar/menu.jpg",
        gallery: [
            { src: "assets/images/avatar/menu.jpg", caption: "Bosh menyu" },
            { src: "assets/images/avatar/select.jpg", caption: "Personaj tanlash va qobiliyatlar ta'rifi" },
            { src: "assets/images/avatar/battle.jpg", caption: "Arena: to'lqinlar, HP chiziqlari" },
            { src: "assets/images/avatar/tornado.jpg", caption: "Havo: tornado qobiliyati" },
            { src: "assets/images/avatar/appa.jpg", caption: "Appa'da uchish" },
            { src: "assets/images/avatar/party.jpg", caption: "Avatar holati, jamoa" }
        ],
        shortDesc: "Uchinchi shaxsdan 3D jang: havo, suv, yer va olov, har birida 4 ta qobiliyat. Personaj tanlash, jamoa NPC'lari, Appa'da uchish.",
        fullDesc: "Mexanika va VFX'ni o'rganish uchun qilingan notijoriy fan-prototip. Har bir element uchun LMB, RMB, Q, E qobiliyatlari: havo diski, havo shari ustida sirpanish, tornado; suv qamchisi, aylanuvchi suv sharlari (qalqon), to'lqin sakrashi; yer toshlari va tikanlari; olov to'pi va tepishlar. Personajlar Sketchfab'dan olingan modellar, ularni Blender'da Python skriptlar bilan rig qilib Godot'ga eksport qildim. Dushman to'lqinlari, NPC jamoa, pauza va sozlamalar menyusi bor.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Noy 2026",
        metrics: {
            "Qobiliyatlar": "4 element × 4 = 16",
            "Kod": "~5 500 qator GDScript",
            "Personajlar": "6 ta tanlanadigan",
            "Rig": "Blender Python skriptlari"
        },
        mechanics: [
            "Bender tizimi: element almashtirish, har qobiliyatga alohida cooldown",
            "Protsedural VFX: zarrachalar, shaffof mesh'lar, so'nib yo'qoladigan effektlar",
            "Tornado: dushmanlarni sfera so'rovi bilan tortib osmonga otadi",
            "Suv sharlari qalqon vazifasini bajaradi (snaryadni yutadi)",
            "Appa: minib uchish, qo'nish, chaqirish",
            "Animator: kod bilan boshqariladigan cast/run/jump holatlari"
        ],
        technicalChallenge: {
            problem: "Yuklab olingan personaj modellari skeletsiz (rigsiz) edi, ularni animatsiya qilib bo'lmasdi.",
            solution: "Blender uchun Python skriptlar yozdim (rig_aang.py, rig_zuko.py): ular modelga skelet qo'yib, og'irliklarni bog'laydi va Godot uchun glb chiqaradi. Animatsiyalarni esa kodda (AangAnimator) suyaklarni burish orqali qildim."
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
        note: "Avatar: The Last Airbender — Nickelodeon'ga tegishli. Bu notijoriy o'quv prototipi, tarqatilmaydi."
    },
    {
        id: "marsgo",
        title: "MarsGo",
        tagline: "Rocket Boost'ning Unity'ga ko'chirilgan versiyasi, Mars mavzusida",
        engine: "Unity 6",
        engineClass: "engine-unity",
        category: ["unity", "3d"],
        status: "Prototip · 3/5 bosqich tayyor",
        icon: "🪐",
        cover: "assets/images/marsgo/level1.jpg",
        gallery: [
            { src: "assets/images/marsgo/level1.jpg", caption: "1-daraja: First Flight" },
            { src: "assets/images/marsgo/level2.jpg", caption: "2-daraja: Narrow Corridor" }
        ],
        shortDesc: "Godot'dagi raketa o'yinini Unity 6 + URP'ga ko'chirdim: parvoz, kamera, maydonchalar, to'siqlar, yoqilg'i kapsulasi, VFX va audio.",
        fullDesc: "Maqsad — bitta o'yinni ikki xil dvijokda qilib, farqini o'rganish. Darajalar C# kodda ma'lumot sifatida (LevelLibrary) yozilgan va o'yin vaqtida LevelBuilder ularni quradi, shuning uchun sahna bitta. To'siqlar (harakatlanuvchi blok, shamol zonasi, lazer darvozasi, aylanuvchi parrak), VFX (alanga, portlash, qo'nish bayrami), musiqa va ovoz yo'naltirgichi bor. Build'ni -mg-shots bilan ishga tushirsa, u har bir darajani o'zi aylanib skrinshot oladi (avtomatik vizual test).",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Okt 2026",
        metrics: {
            "Dvijok": "Unity 6000.6, URP, Input System",
            "Kod": "~5 800 qator C#",
            "Bosqichlar": "3 / 5 tayyor",
            "Platforma": "Windows (keyin Android)"
        },
        mechanics: [
            "Data-driven darajalar: LevelLibrary → LevelBuilder (runtime), bitta sahna",
            "Editor menyusi: MarsGo/Setup Project sahna va materiallarni avtomatik yaratadi",
            "ObstacleBase: MovingBlock, WindArea, LaserGate, SpinningBlade, FuelCapsule",
            "AudioManager, MusicDirector, LevelAudioRouter; TimeControl timeScale'ni boshqaradi",
            "AutoScreenshot: build har darajani o'zi o'ynab, rasmga oladi, saqlovga tegmaydi"
        ],
        technicalChallenge: {
            problem: "Godot sahnalari (.tscn) Unity'ga to'g'ridan-to'g'ri o'tmaydi, 10 ta darajani qo'lda qayta yig'ish ham xato chiqarishi mumkin edi.",
            solution: "Darajalarni sahna emas, ma'lumot (LevelDef: bloklar, maydonchalar, to'siqlar) qilib yozdim. LevelBuilder ularni o'yin vaqtida seed bilan quradi. Daraja qo'shish uchun faqat bitta ma'lumot yozuvi kerak bo'ladi."
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
        links: {}
    },
    {
        id: "bunker",
        title: "Bunker (WIP)",
        tagline: "Steam uchun onlayn social-deduction survival (\"Bunker\" kartali o'yini mantig'i)",
        engine: "Unity 6",
        engineClass: "engine-unity",
        category: ["unity", "3d"],
        status: "Boshlang'ich bosqich · UI kit tayyor",
        icon: "🛖",
        cover: "assets/images/art/storage.jpg",
        gallery: [
            { src: "assets/images/art/storage.jpg", caption: "O'yin uchun Blender'da yasalgan bunker ombori (EEVEE render)" },
            { src: "assets/images/art/storage-side.jpg", caption: "Ombor: modulli javonlar, quvurlar, ventilyatsiya" }
        ],
        shortDesc: "4–16 o'yinchi tasodifiy o'yinchilar bilan yoki kod orqali xonaga kiradi. Menyu, lobby, HUD UI Toolkit'da tayyor, tarmoq hozircha mock servis orqali ishlaydi.",
        fullDesc: "Layout UXML'da, ko'rinish USS'da, controller'lar faqat mantiqni ulaydi. Shablonlar: xona qatori, o'yinchi kartasi, qo'ldagi karta, chat qatori. Lokalizatsiya en/uz/ru. Backend (Steam yoki Unity Gaming Services) hali tanlanmagan, shuning uchun hamma tarmoq chaqiruvlari INetworkService interfeysi orqali o'tadi va hozir MockNetworkService ishlatiladi. Haqiqiy backend tayyor bo'lganda faqat shu klass almashtiriladi.",
        role: "Solo developer · AI yordamida dasturlash (Claude Code)",
        duration: "Noy 2026",
        metrics: {
            "UI": "UI Toolkit (UXML + USS)",
            "Kod": "~1 900 qator C#",
            "Tillar": "en / uz / ru",
            "O'yinchilar": "4–16, onlayn"
        },
        mechanics: [
            "MainMenu, Settings, Game sahnalari; Bunker > Setup UI Scenes menyusi ularni yaratadi",
            "Quick match va xona kodi bilan kirish, tayyorlik, chat, o'yin boshlanishiga sanoq",
            "Custom UI elementlari: Atmosphere, HazardStrip",
            "INetworkService + MockNetworkService: backend'siz UI'ni to'liq sinash"
        ],
        technicalChallenge: {
            problem: "Tarmoq backend'i tanlanmagan, lekin menyu, lobby va chat UI'ni hozirdan sinash kerak edi.",
            solution: "Hamma tarmoq amallarini bitta interfeysga yig'dim. UI faqat interfeys bilan gaplashadi, hozir esa xonalar, o'yinchilar va chatni soxta qilib beradigan mock servis ulangan. Steam yoki UGS tanlanganda UI kodiga tegmasdan faqat implementatsiya almashtiriladi."
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
        tags: ["Unity 6", "C#", "UI Toolkit", "UXML/USS", "Multiplayer (mock)", "Localization"],
        links: {}
    }
];

// 3D ishlar: Blender (Python skriptlar bilan protsedural modellar) va Sketchfab modellarini o'yinga olish
const ART_DATA = [
    {
        title: "Sedan (protsedural)",
        image: "assets/images/art/sedan-front.jpg",
        extra: "assets/images/art/sedan-side.jpg",
        tool: "Blender 5.2 · Python · Cycles",
        desc: "build_sedan.py original 4 eshikli sedanni noldan quradi: kuzov, panel tirqishlari, chiroqlar, 5 juft parrakli disklar. glb qilib Night Tashkent'ga eksport qilingan."
    },
    {
        title: "Katta SUV (protsedural)",
        image: "assets/images/art/suv-front.jpg",
        tool: "Blender 5.2 · Python",
        desc: "Sedan skripti asosida: 5.38 × 2.06 × 1.94 m, 22\" disklar, oldi/yon/orqa renderlar. O'yin uchun glb ~180k uchburchak (LOD hali kerak)."
    },
    {
        title: "Hazmat ishchi (erkak/ayol)",
        image: "assets/images/art/hazmat.jpg",
        extra: "assets/images/art/hazmat-detail.jpg",
        tool: "Blender · Python · FBX → Unity",
        desc: "Protsedural personaj ~40.5k uchburchak, ayol varianti bitta argument bilan chiqadi. Turnaround va yaqin renderlar, Unity loyihasiga FBX."
    },
    {
        title: "Zaher (stilizatsiya personaj)",
        image: "assets/images/art/zaher.jpg",
        tool: "Blender · Python · Godot glb + LOD1",
        desc: "Skelet (armature) bilan quriladigan stilizatsiya qilingan personaj, Godot uchun ikki darajali LOD eksport."
    },
    {
        title: "Bunker ombori",
        image: "assets/images/art/storage.jpg",
        tool: "Blender 5.2 · EEVEE · FBX",
        desc: "14 × 20 m xona, 268k uchburchak, 855 obyekt (112 noyob mesh instancing), 43 PBR material, 110 modulli asset LOD0/1/2 bilan, 139 UCX kolliziya, 113 FBX."
    },
    {
        title: "Sketchfab → Godot pipeline",
        image: "assets/images/art/car-cobalt.jpg",
        extra: "assets/images/art/car-nexia.jpg",
        tool: "Python · Sketchfab · glb",
        desc: "19 ta mashina va avtobus (Cobalt, Nexia 2, Damas, Malibu, BYD...) convert_cars.py orqali glb + json'ga o'tkazildi. Muallif va litsenziya (CC BY, CC BY-NC-SA) har biriga yozib borildi, noaniqlari belgilab qo'yildi."
    }
];

// Rezyume va shaxsiy ma'lumotlar. Bo'sh qoldirilgan havolalar saytda ko'rinmaydi.
const DEVELOPER_PROFILE = {
    name: "Xabibullo Shamsiddinov",
    initials: "XS",
    title: "Junior Game Developer · Godot & Unity",
    location: "O'zbekiston",
    status: "Ish va amaliyot uchun ochiq",
    socials: {
        github: "https://github.com/xabibulloshamsiddinov",
        itchio: "",
        linkedin: "",
        telegram: "",
        email: ""
    }
};
