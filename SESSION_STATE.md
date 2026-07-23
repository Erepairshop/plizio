# SESSION_STATE.md

Rövid, kézi állapotfájl Codexnek.
Nem napló, hanem gyors memóriasegéd, hogy kevesebb újrabeolvasás kelljen.

## Mostani workflow

- gyors preview: `npm run dev:host`
- gyors szerkezeti check: `npm run lint`
- build előtti check: `npm run preflight`
- production build csak stabil dev állapot után

## Fontos elv

- előbb dev preview / pontos hiba
- utána célzott fájlolvasás
- csak ezután build vagy deploy

## Aktív technikai megjegyzések

- a repo nagy és memóriaigényes; a full build drága
- a Hostinger 3 GB-os szerver nem jó elsődleges build gép
- telefonos teszteléshez a hálózati dev preview a preferált út
- a statikus országtérképek közös kvízmotorja a `scripts/build-static-maps.mts` fájlban van
- az országpoolok adatfájljai: `data/map-quiz-pools/*.json`
- mind a 194 konfigurált ország 10 feladatos, négynyelvű térképkvízt kapott
- pool nélküli országban a kvíz UI nem renderelődik
- a kvízeredmények helyi kulcsa `plizio_map_quiz_scores_v1`, a név kulcsa `plizio_username`
- a POI HTML-generátor csak tényleges kvízes map esetén teszi ki a lokalizált kvíz CTA-t
- térképgenerálás előtt kötelező a teljes `build-poi-url-index.mts`, különben eltűnnek a
  POI-kártyák SEO-linkjei
- a VPS aktuális fájllistájával számolt valódi POI-képhiány 4 895; a hiánylista az explicit
  `image` mező és a `<poi-id>.webp` implicit fájlnév ellenőrzésével készül

## Map quiz expansion

- Az eredeti 10 kerdes erintetlen; a +20 kerdes kulon
  `data/map-quiz-pool-extensions/*.json` fajlokbol egyesul 30-as poolla.
- A kliens minden jatekhoz tovabbra is csak 10 veletlen feladatot valaszt.
- A hatter-workflow allapota: `C:\Users\User\plizio_orch\map_quiz_expansion_v2\state.json`.
- A hatter-workflow naploja: `C:\Users\User\plizio_orch\map_quiz_expansion_v2.log`.

## Frissítsd, ha változik

- jelenlegi fő hibaterület
- érintett fájlok
- mi lett már javítva
- mi maradt nyitva
