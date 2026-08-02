# CODEX.md - Gyors projektjegyzetek

Ez a fájl rövid, gyakorlati összefoglaló Codexnek.
Nem váltja ki a `CLAUDE.md`-t, hanem gyors képbehozásra szolgál.

## Célzott architektúra-memók

- POI HTML generátor, POI-modulok és tartalmi mélyítés:
  `docs/poi-generator-architecture.md`

## Statikus országtérképek és kvíz

- Generátor: `scripts/build-static-maps.mts`.
- Kimenet: `public/<orszag-slug>-map/`, nyelvenként `de/`, `hu/`, `ro/`, `en/`.
- Gyors deploy: `.github/workflows/deploy-static-maps.yml`; nem igényel teljes Next buildet.
- A térképes kvíz közös, vanilla JavaScript motorja a generátorban van.
- Németország (`de`) referencia-poolja a generátorban maradt; az új országpoolok adatvezéreltek:
  `data/map-quiz-pools/*.json`.
- A generátor az összes JSON-fragmentumot automatikusan betölti, és hibával leáll duplikált
  ország, nem 10 feladat, hibás séma, hiányzó nyelv vagy nem létező térképi ID esetén.
- 2026-07 állapot: minden konfigurált országos térkép kész Európában, Észak- és
  Dél-Amerikában, Afrikában, Ázsiában és Óceániában.
- Összesen 194 ország × 10 feladat × 4 nyelv. Ebből 193 ország külső JSON-pool,
  Németország referencia-poolja továbbra is a generátorban van.
- Feladattípusok: POI-keresés, régiókeresés, kakukktojás és földrajzi sorrend.
- Ha egy országhoz nincs pool, a generált oldalon sem kvízgomb, sem kvízpanel nem jelenik meg.
- Kvíz közben legfeljebb 30 POI lehet látható.
- A kvíz végén nevet kér; a meglévő `plizio_username` localStorage-kulcsot használja.
- A helyi eredménylista kulcsa: `plizio_map_quiz_scores_v1`.
  Egy rekord: `{ map, lang, name, score, total, at }`; legfeljebb 100 rekord marad.
- A POI-kártya „Bővebben” linkje a `public/data/_poi-url-index.json` hiteles indexből jön.
  Térképgenerálás előtt mindig fusson:
  `npx tsx scripts/build-poi-url-index.mts`.
- A POI HTML-generátor csak akkor rendereli a papírszínű, lokalizált térképkvíz CTA-t,
  ha a célország kész map HTML-je ténylegesen tartalmazza a `quizLaunch` elemet.
- A CTA nyelvi útvonala `de/hu/ro/en`; a további POI-oldalnyelvek az angol kvízre esnek vissza.

## POI-kép fetch

- A tényleges hiánylistát a `scripts/_build_missing_img_worklist.mjs` készíti.
- VPS-listás ellenőrzésnél add át az `IMAGE_MANIFEST_FILE` környezeti változót; a script
  az explicit `image` mező mellett a `<poi-id>.webp` névkonvenciót is ellenőrzi.
- A 2026-07-23-i tényleges VPS-listával 4 895 kép nélküli, koordinátás POI maradt.
- Production fetchhez csak szigorú névegyezésű Wikidata P18/Wikipedia forrás engedélyezett,
  legalább 65 KB és 800×450 px kapuval. A laza Commons-geosearch és stock fallback tiltott,
  mert vizuálisan téves találatot adhat.
- Új fetch előtt kötelező egy külön staging mappás mintakör és kézi vizuális ellenőrzés.
- A térképgenerátor szándékosan hibával leáll, ha az URL-index 1000-nél kevesebb elemet
  tartalmaz, mert ez tipikusan félbemaradt delta index, és link nélküli térképet készítene.
- Egy térkép újragenerálása:
  `npx tsx scripts/build-static-maps.mts de`.
- Böngészős ellenőrzésnél tesztelendő: mind a négy feladattípus, mobilnézet, 30-as POI-limit,
  név- és pontmentés, valamint a POI-kártya SEO-linkje.

## Memo backup

- Windows Task Scheduler feladat: `PlizioMemoryBackup`, naponta 18:00.
- Script: `C:\Users\User\backup_memory.ps1`.
- A VPS-archívum együtt tartalmazza a Claude memory mappát, ezt a `CODEX.md`-t,
  a `SESSION_STATE.md`-t és a Vonko `CODEX_MEMO.md`-t.
- VPS cél: `/home/erik/backups/claude-memory`, 30 napi archívum megőrzésével.

## Munkamód

- Ennél a projektnél közvetlenül a `main` ágon dolgozunk.
- Push is mindig a `main`-ra megy.
- Többen dolgoznak párhuzamosan ugyanazon a repón: Claude, Gemini, Codex.
- Minden új kör előtt érdemes `fetch/pull` a `main`-ról.
- Ha vannak idegen lokális módosítások, ne vidd bele őket a saját commitba.
- Ha valami mások által módosított fájlban van, előbb nézd meg, hogy tényleg a te körödhöz tartozik-e.

### Takarékos mód

- A heti limit és a kreditek kímélése miatt inkább kevesebb, nagyobb kört csináljunk.
- Ne bontsd túl apró lépésekre a munkát, ha egyben is végigvihető.
- Build és deploy csak akkor menjen, ha tényleg tesztelendő állapot van.
- A mechanikus tartalomfeltöltést vagy ismétlődő munkát lehetőleg mini agentek végezzék.
- Köztes ellenőrzésekből csak a szükséges minimum menjen.
- Rövid állapotkérdésekre lehetőleg tool nélkül vagy minimális toolhasználattal válaszolj.
- Ha több apró fix várható egymás után, érdemes őket összevárni és egy körben megcsinálni.

## Token-takarékos workflow

- Ennél a repónál a beolvasási limit a szűk keresztmetszet, nem az írás.
- Emiatt mindig a legkisebb szükséges kontextussal dolgozz.

### Alapszabályok

- Először mindig ezt a fájlt és a `SESSION_STATE.md`-t olvasd, ne a teljes repo-t.
- Ne nyiss meg teljes nagy fájlokat, ha elég `rg` + célzott `sed` sorablak.
- Ugyanazt a fájlt ne olvasd vissza teljesen többször egy körben.
- Ha csak hibahely kell, a dev log / user által küldött hiba legyen a belépő pont.
- Build log helyett előbb:
  - `npm run lint`
  - `npm run preflight`
  - `npm run dev:host`
- A hostos dev preview elsődleges hibakeresési eszköz, nem a full build.

### Mikor mit használj

- UI vagy runtime hibához: dev preview + pontos fájl/sor
- TS/szerkezeti hibához: `lint` vagy `preflight`
- Deploy előtt: csak akkor build, ha a javítások már devben tiszták

### Több agent / több ember mellett

- A másik agenttől mindig rövid diff-összefoglalót kérj, ne teljes kódbemásolást.
- Reviewhoz elég a touched file + releváns blokk, nem kell az egész fájl.
- Push előtt mindig `fetch/pull`, hogy ne olvassunk feleslegesen régi állapotot.

## Build és deploy

- A build output az `out/` mappába megy.
- A repo gyökerében nem maradhat build output (`index.html`, `_next/`, stb.).
- Ennél a repónál a teljes production build lassú és memóriaigényes lehet.
- Build előtt előbb gyors preflight menjen, ne rögtön `next build`.
- Gyors ellenőrzések:
  - `npm run lint`
  - `npm run preflight`
  - `npm run typecheck`
- Ha a TypeScript check memóriaigényes vagy elfogy a heap:
  - `NODE_OPTIONS="--max-old-space-size=4096" npx tsc --noEmit --pretty false`
- Jelenlegi jelentésük:
  - `npm run lint`: gyors szerkezeti ellenőrzés, most főleg duplikált object key-k kiszúrására
  - `npm run preflight`: `lint` + `typecheck`
  - `npm run typecheck`: külön TS ellenőrzés build előtt
- Ha build kell, nagy heap-pel érdemes futtatni, különben könnyen OOM-ba futhat.
- Ha build kell:
  - `./scripts/deploy-build.sh`
- Ha szerveres staging feltöltés kell:
  - `./scripts/deploy-upload.sh`
- Ha szerveres aktiválás kell:
  - `./scripts/deploy-activate.sh`
- Teljes kör:
  - `./scripts/deploy-all.sh`

### Szerver

- Host: `72.61.100.230`
- Port: `65002`
- User: `u660905446`
- Target: `~/domains/plizio.com/public_html`

### Deploy logika

- Build helyben készül.
- A jelenlegi Hostinger Cloud csomag csak 3 GB RAM, ezért a szerveren futó build nem megbízható út.
- A helyes modell most: lokális build, szerverre csak feltöltés és aktiválás.
- Az `out/` archívumba csomagolva megy fel a szerverre.
- A szerveren `.deploy-out/` stagingből aktiválódik.
- Aktiváláskor `_next -> next_static`.

### Gyors tesztelés

- Gyors UI ellenőrzéshez ne production buildet használj.
- Használd inkább:
  - `npm run dev`
  - `npm run dev:host`
- A `dev:host` hálózaton is elérhetővé teszi a dev servert, így telefonról is lehet nézni build nélkül.
- Release ellenőrzéshez továbbra is build + upload + activate kell.

## Astro tananyagos játékok

### Alapelv

- Generator-first rendszer.
- Ugyanaz a tananyag több helyen újrahasznosul:
  - explorer
  - `m2`
  - `m3`
  - test oldalak

### `m1 / m2 / m3`

- `m1`: tanítás / explorer
- `m2`: gyakorlás
- `m3`: kihívás

### Explorer rendszer

- Az új minta: pool + shared engine.
- Ne régi, külön explorer komponenseket bővíts, ha már van poolos/shared megoldás.
- Ha lehet, `DynamicExplorer` + pool adapter legyen.

### AI subject routing

- Az explorer AI-nál az explicit `subject` átadás fontos.
- Ne csak route/prefix alapján legyen levezetve, ha adapterből átadható.
- Aktív subjectek, amikkel már dolgoztunk:
  - `deutsch`
  - `english`
  - `magyar`
  - `romana`
  - `biologie`
  - `sachkunde`
  - `physik`
  - `chemie`

## AstroKemia / Chemie

- A chemistry stack a fizika mintájára épült fel.
- `astrokemia`: island + explorer flow
- `kemiatest`: generatoros chemistry test
- A chemistry explorer és test is a shared rendszerre épül.

### Chemie visualok

- A `kemiatest` kapott külön chemistry visual típusokat.
- Jelenlegi típusok:
  - `chemie-teilchenbild`
  - `chemie-trennmethode`
  - `chemie-laborsymbol`
  - `chemie-reaktion-oder-nicht`

## Physik

- A Physik explorer migráció poolos/shared irányba ment.
- K5 már korábban poolos lett.
- K6-K8 explorer poolok bővítve lettek.
- K6-K8 jelenleg `10 topic / sziget` szintre vannak emelve.

## UI minták

- Az astro grade selector maradjon a meglévő bolygós mintán.
- Az island oldalaknál mobilon fontos a lefelé autoscroll, hogy az alsó szigetrész rögtön látható legyen.
- Ha egy astro játékban hiányzik az autoscroll, a meglévő minta szerint kell javítani.

## Kritikus technikai csapdák

- `AvatarCompanion` esetén `fixed=false` mellett ne használj `scale: 0` vagy `width: 0` kezdő animációt.
- Ez üres Three.js canvashoz vezethet.
- Build/deploy commitba ne kerüljön bele véletlenül idegen lokális fájl.

## Map quiz pool bovites

- Az eredeti 10 feladatos orszagpoolok valtozatlanul a `data/map-quiz-pools/*.json` fajlokban vannak.
- A tovabbi 20 feladat orszagonkent a `data/map-quiz-pool-extensions/*.json` fajlokba kerul.
- A generator 10 vagy 30 feladatos poolt fogad el, de egy jatek mindig 10 veletlen feladatot huz.
- A sessiontol fuggetlen bovito workflow vezerloje:
  `C:\Users\User\plizio_orch\map_quiz_expansion_runner.py`
- Az aktiv orszagonkenti futas allapota:
  `C:\Users\User\plizio_orch\map_quiz_expansion_v2\state.json`
- A workflow 5 parhuzamos `gpt-5.4` workert hasznal, majd globalis validacio utan commitol,
  pushol es elinditja a `deploy-poi-full.yml` workflowt.

## Kozossegi POI-kepek

- Kep nelkuli statikus POI-oldalon a `scripts/lib/render-poi-image-contribution.mts`
  rendereli a lokalizalt feltolto UI-t.
- A backend endpoint: `deploy/php/poi-image.php`, eles URL: `/poi-image.php`.
- A bekuldesek moderacioig itt vannak:
  `/home/erik/plizio/shared/poi-image-submissions`.
- A jovahagyott kepek stabil URL-je:
  `/poi-user-images/<poi-id>.webp`, fizikai konyvtara:
  `/home/erik/plizio/shared/poi-user-images`.
- Uj bekuldeskor az ntfy ertesites kep-elonezetet es bearer-tokenes moderacios linket tartalmaz.
  A link csak oldalt nyit; jovahagyni vagy elutasitani kulon POST gombbal lehet.
- A hianyzo stabil kep-URL `404 + Cache-Control: no-store` valaszt ad, hogy jovahagyas
  utan ugyanaz az URL azonnal kepet adhasson. Letezo kep 30 napig cachelheto.
- Az endpointot es az irhato shared konyvtarakat a full/app/vps deploy workflowk
  ujratelepitik; a POI delta deploy nem telepit szerverkonfiguraciot.

## Mikor mit olvass

- Ha workflow vagy deploy kérdés: előbb ezt a fájlt.
- Ha mélyebb repo-specifikus részlet kell: `CLAUDE.md`.
- Ha egy konkrét feature-ön dolgozol, csak a szükséges részt olvasd be, ne az egész dokumentációt.

## Learn/Astro/Test audit - 2026-08-02

- Részletes jelentés: `docs/learn-shared-deep-audit-2026-08-02.md`.
- Sachkunde élő támogatás kizárólag K1-K4; K5-K8 belső anyag nem jelenhet meg a Learn UI-ban.
- History Test országmátrix: DE/AT/CH közös német, HU/RO/US/GB valódi országos pool. Más országot ne kínáljon fel és ne legyen csendes generic fallback.
- Astro History: HU és RO országos tartalom; DE és EN őszintén generic. A progress/cache kulcs része a variant ID.
- Geography K5-K8 jelenleg lokalizált nemzetközi curriculum, nem országos. Országválasztót csak külön országadatokkal szabad megjeleníteni.
- AI/Informatics explorer audit: `node scripts/audit-learn-ai-explorer.mjs` (109 pool, üres label és duplicate key ellenőrzés).
- History country audit: `npx tsx scripts/audit-history-country-pools.mts`.
- Geography K5-K8 pool audit: `npx tsx scripts/audit-geography-pools.mts`; minden DE/EN/HU/RO témának nem üres poolt kell adnia.
- Fő route audit: `npx tsx scripts/audit-learn-routes.mts`.
- A lokális Next dev jelenleg Turbopackkal és Webpackkal is beragad a `/learn/` fordításánál; vizuális smoke-ot működő preview környezetben kell pótolni.

### Tartós audit wave 2

- A második ötagenses audit sessiontől független Windows Task Scheduler workflowként fut.
- Task neve: `PlizioLearnAuditWave2`.
- Runner: `C:\Users\User\plizio_orch\learn_audit_wave2\runner.py`.
- Állapot: `C:\Users\User\plizio_orch\learn_audit_wave2\state.json`.
- Worker logok: `C:\Users\User\plizio_orch\learn_audit_wave2\logs`.
- Rövid státusz:
  `powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\User\plizio_orch\learn_audit_wave2\status.ps1`
- Öt diszjunkt scope: AstroDeutsch, AstroRomana+RomanianTest, AstroKemia+KemiaTest,
  AstroPhysik+PhysikTest, AstroEnglish+EnglishTest.
- Maximum 5 párhuzamos worker, legfeljebb 3 automatikus próbálkozás. A workerek nem
  commitolnak és nem deployolnak; befejezés után közös review és validáció szükséges.
- A workflow 2026-08-02-án mind az 5 scope-pal sikeresen befejeződött; a közös review és
  validáció is lefutott. Az állapot/log fájlok megmaradnak későbbi mintának.
- Az AstroEnglish generátoros pooloknál a `DynamicExplorer` subject+grade alapján oldja
  fel az angol generátorokat. Audit: `npx tsx scripts/audit-astroenglish-generators.mts`.
- A következő mély audit hullám fő célja AstroMagyar/Magyar Test, majd minden élő route
  desktop/mobil vizuális smoke tesztje működő preview környezetben.

### Tartós audit wave 3

- Task Scheduler név: `PlizioLearnAuditWave3`.
- Runner: `C:\Users\User\plizio_orch\learn_audit_wave3\runner.py`.
- Állapot: `C:\Users\User\plizio_orch\learn_audit_wave3\state.json`.
- Logok: `C:\Users\User\plizio_orch\learn_audit_wave3\logs`.
- Státuszparancs:
  `powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\User\plizio_orch\learn_audit_wave3\status.ps1`
- Öt scope: AstroMagyar/Magyar Test, AstroMath/Math Test, AstroBiologie/BiologieTest,
  AstroSachkunde/SachkundeTest csak K1-K4, valamint a közös Learn/Astro/Test engine és
  vizuális réteg.
- Maximum 5 párhuzamos `gpt-5.5` worker, legfeljebb 3 próbálkozás. Nincs automatikus
  commit, push vagy deploy; a végén közös review, validáció és szelektív commit kell.
- A Wave 3 mind az 5 workerrel első próbálkozásra befejeződött. A közös review és minden
  célzott validáció sikeres; részletek: `docs/learn-shared-deep-audit-2026-08-02.md`.
- Új ellenőrzések: `scripts/audit-astromagyar.mts`, `scripts/audit-astrobiologie.mts`,
  `scripts/audit-astrosachkunde.mts`, `scripts/audit-shared-learn-runtime.mjs` és
  `scripts/audit-astro-game-rounds.mts`.
- Minden 13 tantárgyi M2/M3 registry roundját az engine guardokkal együtt kell
  ellenőrizni az `audit-astro-game-rounds.mts` futtatásával.

## Terkepkviz CTA es postcard lokalizacio - 2026-08-02

- A POI HTML terkepkviz CTA most `?quiz=start` parameterrel nyitja a statikus
  orszagterkepet; forras: `scripts/generate-poi-html.mts`.
- A statikus terkep a parametert egyszer elfogyasztja, majd kozvetlenul a
  `startQuiz()` fuggvenyt hivja, a bevezeto panel kihagyasaval.
- Regi, parameter nelkuli live POI HTML-ek kompatibilitasa: az azonos originrol,
  legalabb negy URL-szegmens melysegu POI oldalrol erkezo latogatot is automatikus
  kvizinditasnak tekinti. Orszag- es fooldalrol a terkep tovabbra sem indul magatol.
- A `/postcard/` felulet es a generalt canvas/PNG mar `de`, `hu`, `ro`, `en`
  nyelven mukodik. Elsobbseg: explicit `lang` query parameter, utana a mentett
  Plizio-nyelv. A hely/orszag lokalizalt query parameterei megmaradtak.
- A `Deploy Static Maps` workflow mindig ujrageneralja a terkepeket forrasbol.
  A `Deploy App` is futtatja a `scripts/build-static-maps.mts` generatort, hogy
  egy uj app release ne irja vissza a regi statikus terkepeket.
- Feature commit: `b6a0b717bb9`; deploy-integracio: `f605b41aeb9`.

## POI fetch-kepek aktivalasa - 2026-08-02

- Az osszes Azure fetch audit `accepted` es manualis `review` jeloltjet a
  `C:\Users\User\azure-audit\activate_all_fetched_images.py` aktivalja ugy, hogy letezo
  live kepet nem ir felul, accepted jelolt elsobbseget kap, es WebP fejlecet ellenoriz.
- VPS eredmeny: 184 accepted + 296 review kep aktivalva, 22 mar letezett, 0 invalid.
- Visszakeresheto naplo:
  `/home/erik/plizio/shared/audits/fetch-activation-20260802-190157.json`.
- A POI hero kepek inline `onerror` fallbacket kapnak a tipus szerinti SVG-re; a footer
  globalis error listenere onmagaban nem eleg, mert az eager 404 a listener elott is johet.

## VPS tarhely es POI generator - 2026-08-02

- A sikertelen POI Full deploy utan a felkesz release megtoltotte a lemezt. A mar
  legeneralt `out` helyben lett az aktiv release-be szinkronizalva, majd a 34 GiB-os
  runner `out` torolve lett. A Meissen POI uj kepe es SVG fallbackje eloben ellenorizve.
- Az Ollama/Open WebUI/SearXNG/document-tools tesztkornyezet, az Ollama modellek es a
  ket Qwen treningmentes torolve lett. A szabad hely 22 GiB-rol 87 GiB-ra nott.
- VPS-en a `disk` parancs inditja az `ncdu -x /` interaktiv tarhelybongeszot.
- A POI generator nyelvenkent ujraszamolta ugyanazokat a related/nearby listakat.
  Az aktualis POI-ra korlatozott cache nem halmoz memoriat; 1000 POI-s VPS meresen
  4641 HTML keszult 22,5 masodperc alatt, kb. 206 fajl/s sebesseggel.
