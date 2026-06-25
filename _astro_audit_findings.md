# Astro route audit — mester-jelentés (2026-06-25)

13 tárgy read-only auditja (Explore agentek), m1-fókusszal + m1↔m2/m3 téma-illeszkedés.
Architektúra: app/astro-<tárgy>/<osztály>/page.tsx, m1 = ExplorerEngine + lib/explorerPools,
m2/m3 = components/astro-games/M2Engine|M3Engine + lib/astro/<tárgy>GameRegistry (generátorokból).

VERIFIKÁLT: M2Engine ismeretlen gameKey → "Unknown M2 gameKey" placeholder (NEM crash).
VERIFIKÁLT: romanaGameRegistry csak 9 generikus kulcsot exportál (nincs tap-match/memory-pairs/... kid-kulcs).

## SZISZTÉMÁS HIBÁK (kereszt-metsző)

### S1 — Interaktív MONOTÓNIA az m1-ben [HIGH — a user fő szempontja] — szinte minden tárgy
- ai: 100% uniform 5-típus (match-pairs/gap-fill/drag-to-bucket/word-order/highlight-text) minden szigeten
- informatika K1-K5: CSAK match-pairs
- english K2-K8: azonos eloszlás minden osztályon (nincs progresszió); K1: 33% physics-slingshot
- geographie K5-K8: csak match-pairs/drag-to-bucket/word-order + simple-icon dekor; 0 térkép-interaktív
- kemia K5: 60% drag-to-bucket; biologie K5: 86/91 topic csak generate-fallback
- magyar O2-O4: 72-91 simple-icon (töltelék); sachkunde K1: 64% gap-fill, K2-K4: 60-70% gap-fill+word-order

### S2 — Tárgyhoz NEM illő interaktívok [HIGH]
- english/magyar m1: "physics-slingshot/magnet/bucket/stacker" típusok nyelvtanra (név- és mechanika-zavar)
- english K1 i9 m3 = gravity-sort (matek-játék angol kurzusban)
- kemia: nincs kémiai interaktív (reakció/pH); geographie: nincs térkép-katt/koord; physik: a physics-* interaktívok alulhasználtak, m2/m3 SOSEM használja őket; math: SVG-k stubok

### S3 — m1↔m2/m3 téma-illeszkedés gyenge/nincs [HIGH — a user explicit szempontja] — minden tárgy
- m2/m3 NEM sziget/téma-szűrt: egy gameKey generikus pool-t húz, nem azt a témát amit m1 tanított az adott szigeten
- LEGSÚLYOSABB: ai — az m2/m3 INFORMATIKA tartalmat tölt (CPU/SSD/böngésző), nem AI-t (teljes téma-eltérés)

### S4 — Be-nem-kötött / hiányzó tartalom (orphan) [HIGH/CRITICAL]
- ai: a 36 m1 island-pool 100% ORPHAN, a route placeholder oldalt renderel ("in development") → teljes AI m1 jelenleg halott kód
- math: G7-G8 teljesen ÜRES (16 stub explorer, 0 topic); G3 csonka (8-ból 2); G1: 3 orphan explorer (Subtraction/WordProblem/Shapes) → 3 sziget m1 hiányzik
- physik K7: i2-i9 üres pool (custom *Explorer.tsx fallback) — csak i1 a pool-rendszerben
- informatika: K5 i2 hiányzik, K6 i3-i9 csonka (5 topic /15 helyett), K7/K8 i5 csonka
- sachkunde K5-K8: pool létezik, de NINCS route (orphan)
- magyar: O4 route hiányos (lib/astroMagyar4 nem létezik → crash/404 a /astromagyar/4-en); O4Explorer nincs

### S5 — m2/m3 gameKey hiányzik a registryből → "Unknown gameKey" placeholder [MEDIUM, NEM crash]
- romana: registry csak 9 generikus kulcs, de C1-C3 szigetek kid-kulcsokat hívnak (tap-match/memory-pairs/drag-sort/...) → placeholder
- english + math: hasonlóan flag-elve (kid-kulcsok hiányoznak a registryből)
- deutsch / magyar / sachkunde: OK (mind a 18 kulcs megvan)
- TEENDŐ: per-tárgy ellenőrzés, mely registry-kben hiányoznak a hivatkozott kulcsok

### S6 — Tartalmi korrupció / placeholder / hibás válasz [CRITICAL, konkrét] — VERIFIKÁLNI fix előtt
- romana C5-C7: ~3100 "?" az ékezetek helyett (encoding-korrupció) [agent-jelentés]
- sachkunde K4-K8: ~802 placeholder rossz-válasz ("falsch"/"nicht"/"vielleicht") [agent-jelentés]
- ai K8 i7/i8/i9: csonka (9 hiányzó topic)
- geschichte: hiányzó CrownSvg (K6, 2 ref) → error-box; SVG-export duplikáció (Pyramid/Scroll/Knight)
- informatika K2 HU: "the" szivárgás (a tegnapi test-route fix a data/-ban volt; explorer-oldal külön ellenőrzendő)

### S7 — Nyelv-kezelés [MEDIUM] — VERIFIKÁLNI
- geographie astroGeographie.ts: hardcode "de" a getK*Questions hívásokban (43-46. sor) → nem-német m2/m3 német MCQ-t kap (a #21 lang-fix helye lehet — regresszió?)
- informatika K5/K6 test hardcode single-lang + K7/K8 fallback EN (főleg test-route)

### S8 — Tech-debt / duplikáció [LOW-MEDIUM]
- astro-deutsch (kötőjeles) = DEAD (csak visual-lab), astrodeutsch = LIVE → törlendő/tisztázandó
- lib/explorerPools: geographie .bak ×8 + biologieK5_part1.txt a forrás közt
- "physics-" elnevezésű interaktívok nyelvi tárgyakban (névzavar); types.ts @ts-nocheck

## PER-TÁRGY STÁTUSZ (worst-first)
- ai: LEGROSSZABB — m1 teljesen orphan + m2/m3 rossz tárgy (informatika) + K8 csonka
- math: G7-G8 üres, G3 csonka, G1 3 orphan explorer, registry kid-kulcs hiány
- romana: C1-C4 megy de C1-C3 m2/m3 placeholder; C5-C7 ékezet-korrupció; C5-C8 nincs route
- sachkunde: K1-K4 él (monoton), K5-K8 nincs route + 802 placeholder válasz
- informatika: K1-K5 csak match-pairs; K5 i2 / K6 i3-9 / K7-8 i5 csonka; K2 HU "the"
- physik: K5/K6/K8 gazdag (91 topic), K7 csonka (i2-9 custom fallback). Nyelv EN marad.
- geographie: 108/grade DE-only m1, monoton, lang-hardcode "de" az m2/m3-ban, .bak szemét
- geschichte: K5/K7/K8 jó, K6 generált-töltelék + monolingual seed + hiányzó CrownSvg
- deutsch: K1-K4 jó variety, K5-K8 vékonyodik (K6 a legkisebb), physics-névzavar, astro-deutsch dead dup
- magyar: O1-O3 OK (ékezet jó), O4 hiányos (crash-veszély), simple-icon töltelék; registry OK
- biologie: erős tartalom (91/grade), K5 majdnem mind generate-fallback, interaktív szegényes. Nyelv DE marad.
- kemia: K6-K8 jó, K5 túl generikus (nem kémia). Nyelv DE marad.
- english: K1 monoton (physics-slingshot 33%), K2-K8 azonos eloszlás; registry kid-kulcs hiány + gravity-sort melléfogás

## NYELV-SZABÁLY (a tegnapi konvenció)
kemia/physik/biologie nyelve MARAD (DE/DE/EN) — ott csak nem-nyelvi hibát javítunk. Többi per-nyelv.

## VERIFIKÁCIÓ + JAVÍTÁS STÁTUSZ (2026-06-25, folyt.)

### KÉSZ (verifikálva + javítva)
- **romana C5+C7 ékezet-korrupció**: VALÓS. Csak C5 (598) + C7 (1306) érintett (C6 tiszta!). 144 egyedi szó-közi token + 3 szó-végi (ora?→oraș, enun?→enunț, înva?→învață) → 1933 javítás determinisztikus token-map-pel (.before_diacritics.bak mentve). Re-grep: 0 maradék gyanús "?", legit kérdőjelek érintetlenek. Sorszám változatlan.
- **geschichte CrownSvg hiány**: VALÓS. Hozzáadva `app/astro-geschichte/svg/MittelalterSvg.tsx`-hez (memo, viewBox 0 0 240 140, korona), `export *` viszi az index.ts-ben, TopicSvgRenderer wiring igazolva → error-box megszűnt.
- **geschichte duplikált export (Pyramid/Scroll/Knight)**: NEM kell javítani — az index.ts MÁR kezeli (csak TempleSvg-t húz a GeschichteSvg-ből, a többi a "newer" fájlokból). Nincs TS-ütközés, csak esetleg nem-ideális variáns (kozmetikai).

### HAMIS FINDINGOK (verifikáció kiszűrte — NINCS teendő)
- ai K8 i7/i8/i9 csonka → HAMIS (mind 15 topic).
- math G7/G8 üres → HAMIS (van island+mission+explorer).
- math G1 3 orphan explorer (Subtraction/WordProblem/Shapes) → HAMIS (be vannak kötve a 1/page.tsx switch-ben + missions).
- magyar O4 crash (lib/astroMagyar4 nem létezik) → HAMIS (a fájl LÉTEZIK).

### KÉSZ (folyt.)
- **math/romana/english m2/m3 registry kid-kulcs hiány**: JAVÍTVA. A tartalmi fájlok (./games/<key>/<targy>.ts) MIND LÉTEZNEK + tartalmuk van (csak nem voltak bekötve). Mindhárom registry (mathGameRegistry/romanaGameRegistry/englishGameRegistry) kiegészítve az 5 kid M2 (tap-match/memory-pairs/shape-spotter/quick-tap/bubble-choice) + 4 kid M3 (drag-sort/pattern-finish/count-catch/sound-match) kulccsal, deutsch-minta szerint → nincs többé "Unknown gameKey" placeholder a kid-szigeteken.

### KÉSZ (folyt. 2) — A LEGNAGYOBB TÉTEL
- **ai m1 teljesen orphan + m2/m3 informatika**: JAVÍTVA + TYPE-TISZTA. Gating tisztázva: az aiK*_i* pool-ok MANUÁLIS quiz-formátumúak (nem generátor), bit-azonosak az informatikáéval, jó distraktorokkal → ExplorerEngine generátor nélkül megeszi. Implementáció: (a) 4 új Explorer-wrapper `app/astro-ai/games/k{5,6,7,8}/K{n}Explorer.tsx` (alias-import a INFO_K*_POOL névütközésre, `ai_k{n}_` explorerId); (b) `app/astro-ai/[grade]/AstroAIGradeClient.tsx` placeholder → teljes 1124 soros island-map+mission kliens (GRADE_CFG mind a 4 osztályra, astrinformatika minta, IslandMapSVG prop-ként kapja G-t, nincs hardkódolt K5); (c) 9 új `lib/astro/games/<key>/ai.ts` AI-tartalom (4 nyelv) + aiGameRegistry importok informatika→ai. Validálás: szűkített tsconfig (skipLibCheck) tsc → 0 hiba az astro-ai fájlokban (a teljes tsc OOM-ol; a maradék hibák pre-existing seo/geographie Lang fr/tr/hr zaj, amit a Next build tolerál).

### MEGERŐSÍTVE, MÉG HÁTRA (következő körök)
- **sachkundeK4 placeholder distraktorok**: JAVÍTVA (ÉLŐ route). 70 gap-fill distraktor (a fájl német-only a pool-ban) értelmesre cserélve, 0 placeholder maradt, .before_distractors.bak mentve.
- **sachkunde K5-K8 nincs route** [HIGH — DE pedagógiailag kérdéses]: csak app/astro-sachkunde/1-4 létezik, a K5-K8 pool orphan. MEGJ.: a sachkunde tipikusan K1-4 tantárgy (K5-8-ban szétválik bio/geo/történelem), így a K5-8 route létrehozása lehet, hogy nem is kívánt — USER-DÖNTÉS kell. A K5-8 distraktor-fix (orphan, multilang) is ide tartozik, route nélkül nem látszik → halasztva.
- **K5-K8 gap-fill placeholder distraktorok** [HIGH, SYSTEMIC] — VERIFIKÁLVA: a `_sent` kiegészítő-kérdés helyes `_qa2`-vel, de a 3 distraktor (`_qb2/_qc2/_qd2`) MINDIG placeholder: de="falsch/nicht/vielleicht", en="wrong/not/maybe" (hu/ro hasonló). SCOPE: 360 db `_qb2:"falsch"` előfordulás 7 fájlban: sachkundeK4,K5,K6,K7,K8 + informatikaK5_i9 + informatikaK7_i5. Fix = értelmes, témába vágó HAMIS válaszok mind a 4 nyelven (nagy content-meló: 360 kérdés × 3 × 4 nyelv). Megj.: a sachkunde K5-K8-nak nincs route (orphan), ott a fix csak route-tal együtt látszik; informatika K5/K7 viszont élő.
- **ai m1 teljesen orphan + m2/m3 informatika** [CRITICAL, legnagyobb]: app/astro-ai/[grade] csak "in development" placeholder; a 36 aiK*_i* pool orphan; az aiGameRegistry (AI_M2/M3_POOLS) nincs használva, az astrinformatika INFORMATIKA pooljai mennének. Teljes route-implementáció kell (astrinformatika minta).

### S3/S1 MEGA-TÉTELEK — felmérve (USER-DÖNTÉS kell, mert nagy + design)
- **S3 (m1↔m2/m3 téma-illesztés)**: a round-pool-ok (lib/astro/games/<key>/<targy>.ts) LAPOS, RITKA tömbök — gameKey-enként csak 2-6 round egy EGÉSZ tárgyra (pl. category-rush/informatika = 2 round), és NINCS rajtuk sziget/téma-tag. Tehát a téma-szűrés NEM wiring-fix: vagy (a) per-sziget round-tartalmat kell generálni (9 sziget × ~9 gameKey × N round × tárgyak = hatalmas content), vagy (b) egy könnyebb "jó-elég" heurisztika. Architektúra+content döntés kell.
- **S1 (m1 interaktív monotónia)**: a pool-okban kevés interaktív-típus rotálódik; diverzifikálás = pool-onkénti tartalom-bővítés sok tárgyon. Szintén nagy content-meló.

## JAVASOLT FÁZIS-SORREND
1. CRITICAL-konkrét, gyorsan verifikálható + javítható: romana C5-C7 ékezet, sachkunde 802 placeholder, geschichte CrownSvg, ai K8 csonka, math G1 3 orphan explorer, magyar O4 crash, astro-deutsch dead törlés, .bak/.txt takarítás
2. Orphan/wiring: ai m1 bekötése VAGY route-placeholder tisztázása; ai m2/m3 → AI tartalom (nem informatika); registry kid-kulcs pótlás (romana/english/math); physik K7 / informatika csonka szigetek / sachkunde K5-8 route
3. m1↔m2/m3 téma-illeszkedés: a gameRegistry per-sziget/téma-szűrése (a user explicit kérése)
4. m1 variety + tárgy-fit: monoton pool-ok diverzifikálása, tárgy-specifikus interaktívok (a user fő szempontja) — ez a legnagyobb meló
