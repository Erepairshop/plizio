# CODEX.md - Gyors projektjegyzetek

Ez a fájl rövid, gyakorlati összefoglaló Codexnek.
Nem váltja ki a `CLAUDE.md`-t, hanem gyors képbehozásra szolgál.

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

## Build és deploy

- A build output az `out/` mappába megy.
- A repo gyökerében nem maradhat build output (`index.html`, `_next/`, stb.).
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
- Az `out/` archívumba csomagolva megy fel a szerverre.
- A szerveren `.deploy-out/` stagingből aktiválódik.
- Aktiváláskor `_next -> next_static`.

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

## Mikor mit olvass

- Ha workflow vagy deploy kérdés: előbb ezt a fájlt.
- Ha mélyebb repo-specifikus részlet kell: `CLAUDE.md`.
- Ha egy konkrét feature-ön dolgozol, csak a szükséges részt olvasd be, ne az egész dokumentációt.
