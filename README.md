# Xabibullo Shamsiddinov — Game Developer Portfolio

**Sayt:** https://xabibulloshamsiddinov.github.io/ (inglizcha: `?lang=en`, o'zbekcha: `?lang=uz`)

Godot 4.6 va Unity 6 da qilingan 10 ta o'yin loyihasi, kichik/o'quv loyihalari, 3D/Blender ishlari
va brauzerda o'ynaladigan 3 ta o'yin (Rocket Boost, Samurai: Sakura Path, Neon Rails). Sayt ikki tilda (UZ / EN).

## Ichida nima bor

| Bo'lim | Mazmuni |
|---|---|
| O'yinlar | Holat bo'yicha guruhlangan: **tugallangan** (Rocket Boost, Samurai, Team Shooter, Neon Rails), **ishlab chiqilmoqda** (Night Tashkent, Jura Rush, Choyhona, Bunker), **prototiplar** (MarsGo, Elemental Arena). Filtr: Godot / Unity / brauzerda / multiplayer. Har birida galereya, mexanikalar, hal qilingan muammo va loyihadan kod |
| Kichik va o'quv loyihalari | Ashen Oaths, Rocket Boost (Unity), Obstacle Dodge, Kitchen Chaos, Unity City Demo, Top-down Shooter |
| Brauzerda o'ynash | `games/*` — Godot Web (WASM) build'lari, iframe'da ochiladi |
| 3D ishlar | Blender Python skriptlari bilan sedan, SUV, hazmat personaj, Zaher, bunker ombori; Sketchfab → Godot pipeline |
| Ko'nikmalar, Yo'l, Aloqa | ko'nikma qaysi loyihada ishlatilgani; sanalar commit tarixidan; email, telefon, LinkedIn, GitHub |

## Tuzilishi

```text
index.html               sahifa (matnlar JS orqali tanlangan tilda to'ldiriladi)
css/style.css            uslublar
js/content.js            interfeys matnlari (UI_TEXT), ko'nikmalar, "Yo'l" bo'limi — {uz, en}
js/projects-data.js      loyihalar (PROJECTS_DATA), o'quv loyihalari (LEARNING_DATA), 3D ishlar (ART_DATA), profil
js/main.js               til, kartalar va guruhlar, modal, o'yin oynasi, fon animatsiyasi
js/mini-game.js          Bug Blaster (delta time, klaviatura/sichqoncha/sensor)
js/audio.js              8-bit ovozlar (Web Audio API), sukut bo'yicha o'chiq
assets/images/<loyiha>/  skrinshot va renderlar; profile/ — surat; og-cover.jpg — havola preview'i
games/engine/            UMUMIY Godot 4.6.3 web dvijogi (index.wasm, index.js, worklet'lar)
games/<o'yin>/           har o'yinning index.html + index.pck (+ ikonkalar)
```

Uchala o'yin bitta `games/engine/index.wasm` (~38 MB) ni ishlatadi: brauzer uni bir marta yuklab keshlaydi,
keyingi o'yin faqat o'z `.pck` faylini (1–8 MB) yuklaydi. Har bir `games/<o'yin>/index.html` dagi `GODOT_CONFIG` da
`"executable":"../engine/index"` va `"mainPack":"index.pck"` turadi.

## Ishga tushirish

Godot web o'yinlari `file://` dan ishlamaydi, server kerak:

```bash
python -m http.server 8000
# keyin brauzerda: http://localhost:8000
```

## Web build'ni yangilash

Dvijok versiyasi **4.6.3** bo'lib qolsa, faqat `.pck` ni almashtirish kifoya (Web export template ham kerak emas):

```bash
Godot_v4.6.3-stable_win64.exe --headless --path <loyiha> --export-pack "Web" <bu papka>/games/<o'yin>/index.pck
```

Keyin `games/<o'yin>/index.html` dagi `fileSizes` → `"index.pck"` qiymatini yangi fayl hajmiga to'g'rilang.
Godot versiyasi o'zgarsa: to'liq Web eksport qiling, `index.wasm`, `index.js` va ikkala `*.worklet.js` ni
`games/engine/` ga ko'chiring va hamma o'yinlarning `.pck` larini o'sha versiyada qayta eksport qiling.

## Yangilash

- **Kontaktlar:** `js/projects-data.js` → `DEVELOPER_PROFILE.socials`. Bo'sh qoldirilganlari saytda ko'rinmaydi.
- **Yangi loyiha:** `PROJECTS_DATA` ga obyekt qo'shing (`status`: `released` / `wip` / `prototype`; matnlar `{ uz, en }`).
  Rasmlarni `assets/images/<id>/` ga qo'ying.
- **Matnlar:** `js/content.js` → `UI_TEXT`.

## Litsenziya eslatmalari

- Xarita ma'lumotlari © OpenStreetMap contributors (ODbL).
- Night Tashkent mashinalari Sketchfab'dan (Q.SARDOR, own.guest, Ddiaz Design); litsenziyalar loyihadagi `assets/cars/CREDITS.md` da.
- Team Shooter: qurollar Aligned Games, askarlar buh (Sketchfab, CC-BY 4.0); Poly Haven (CC0); Kenney (CC0); Vincent Sevedge (CC-BY 3.0).
- Elemental Arena — Avatar: The Last Airbender asosidagi notijoriy o'quv prototipi, personajlar Nickelodeon'ga tegishli.

## Keyingi qadamlar

- [ ] Har bir o'yinga 20–30 soniyalik gameplay video (YouTube) va saytga havola
- [ ] Rezyume PDF va saytda "Rezyume" tugmasi
- [ ] Rocket Boost APK / Yandex Games va Team Shooter Windows build'ini yuklab olish havolasi (GitHub Releases yoki itch.io)
- [ ] Telegram va itch.io havolalari
