# Xabibullo Shamsiddinov — Game Developer Portfolio

Godot 4.6 va Unity 6 da qilingan 7 ta haqiqiy loyiha, 3D/Blender ishlari va brauzerda o'ynaladigan 2 ta o'yin.
Hamma rasmlar o'yinlarning o'zidan olingan, kod parchalari loyiha fayllaridan ko'chirilgan.

## Ichida nima bor

| Bo'lim | Mazmuni |
|---|---|
| O'yinlar | Night Tashkent, Rocket Boost, Neon Rails, Choyhona Simulator, Avatar: Elemental Arena, MarsGo, Bunker. Har birida galereya, mexanikalar, hal qilingan muammo va haqiqiy kod |
| Brauzerda o'ynash | `games/rocket-boost` va `games/neon-rails` — Godot Web (WASM) build'lari, iframe'da ochiladi |
| 3D ishlar | Blender Python skriptlari bilan qilingan sedan, SUV, hazmat personaj, Zaher, bunker ombori; Sketchfab → Godot pipeline |
| Ko'nikmalar | foizlar o'rniga har ko'nikma qaysi loyihada ishlatilgani |
| Yo'l | sanalar loyiha fayllari va commit tarixidan |
| Bonus | sahifaning o'zida yozilgan "Bug Blaster" HTML5 Canvas o'yini |

## Tuzilishi

```text
index.html            sahifa
css/style.css         uslublar
js/projects-data.js   HAMMA MA'LUMOT: loyihalar (PROJECTS_DATA), 3D ishlar (ART_DATA), profil (DEVELOPER_PROFILE)
js/main.js            kartalar, modal + galereya, o'yin oynasi, filtrlar
js/mini-game.js       Bug Blaster
js/audio.js           8-bit ovozlar (Web Audio API)
assets/images/<loyiha>/   skrinshot va renderlar (1280px JPG)
games/<o'yin>/        Godot Web eksportlari (single-thread, maxsus header kerak emas)
```

## Ishga tushirish

Godot web o'yinlari `file://` dan ishlamaydi, server kerak:

```bash
python -m http.server 8000
# keyin brauzerda: http://localhost:8000
```

## Internetga joylash (GitHub Pages)

1. GitHub'da `portfolio` (yoki `xabibulloshamsiddinov.github.io`) repo oching va shu papkani push qiling.
2. Settings → Pages → Branch: `main`, papka: `/ (root)`.
3. Sayt: `https://xabibulloshamsiddinov.github.io/portfolio/`.

`index.wasm` fayllari ~36 MB — GitHub'ning 100 MB fayl chegarasidan kichik, LFS kerak emas.

## Yangilash

- **Kontaktlar:** `js/projects-data.js` → `DEVELOPER_PROFILE.socials`. Bo'sh qoldirilganlari saytda ko'rinmaydi.
- **Yangi loyiha:** `PROJECTS_DATA` ga obyekt qo'shing (`cover`, `gallery`, `metrics`, `mechanics`, `technicalChallenge`,
  `codeSource`, `codeSnippet`, `links.play` / `links.github`). Rasmlarni `assets/images/<id>/` ga qo'ying.
- **Rocket Boost web build'ini yangilash:**
  `Godot_v4.6.3-stable_win64.exe --path <star-wars-by-rocket> --headless --export-release "Web" <bu papka>/games/rocket-boost/index.html`
- **Neon Rails:** `godot --headless --path <finding-wall-e> --export-release "Web" build/web/index.html`, keyin `build/web/*` ni `games/neon-rails/` ga nusxalang.

## Litsenziya eslatmalari

- Xarita ma'lumotlari © OpenStreetMap contributors (ODbL).
- Night Tashkent mashinalari Sketchfab'dan (Q.SARDOR, own.guest, Ddiaz Design); litsenziyalar loyihadagi `assets/cars/CREDITS.md` da.
- Avatar: Elemental Arena — notijoriy fan-prototip, personajlar Nickelodeon'ga tegishli.

## Keyingi qadamlar

- [ ] itch.io / LinkedIn / Telegram / email havolalarini qo'shish
- [ ] Har bir o'yinga 5–10 soniyalik gameplay GIF yoki video
- [ ] Rezyume PDF tugmasi
- [ ] Night Tashkent va Choyhona uchun web yoki APK yuklab olish havolasi
