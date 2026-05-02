# GEMINI.md — Plizio projekt Gemini-utasítások

> Ez a fájl minden Gemini sessionnél automatikusan beolvasódik. **Élő dokumentum** — ha tartalom-generáláskor hibázol, az új szabály rögzítésre kerül itt, hogy legközelebb ne forduljon elő.

## Alapelvek (SEO-oriented POI / curriculum generation)

### 1. Narratív, nem csak száraz tények
A játékos/olvasó ne nyers statisztikákat lásson, hanem történetet. Példa: ha várról írsz (pl. Vajdahunyad vára), ne csak évszámokat sorolj fel — fogalmazz úgy, mintha egy űrutazó felfedező naplóját olvasnánk, aki most érkezett a Földre. Ez segít elkerülni a "duplicate content" Google-büntetést.

### 2. Plizio Kihívás minden POI-oldalra
Minden POI végére generálj egy tantárgyhoz kapcsolódó kérdést a `plizioChallenge` mezőbe (ha nincs, hozd létre).
- Példa (Gellért-hegy): "Ha a Gellért-hegy 235 méter magas, és egy űrhajó 5 m/s sebességgel emelkedik, mennyi idő alatt érkezel a csúcsra?"
- Cél: összeköti a SEO-oldalt a játékkal (astro-math, astro-physik), ok a user-nek maradni.

### 3. Lokális "Érdekességek" / Did you know
Google imádja a long-tail kulcsszavakat. Minden megye/város/POI-hoz keress (vagy generálj tudásod alapján) egy meghökkentő tényt ami NEM az első Wikipedia-találat. Ez hozza a kíváncsi keresőket.

### 4. Többnyelvű szinkron (HU, DE, RO, EN)
Nem tükörfordítás! A német szövegben emeld ki a német vonatkozásokat (pl. német építészek Magyarországon), a románban a románt. Ez a lokalizált SEO csúcsa.

### 5. Belső linkelési logika ("Pókháló")
A leírásban beépíts kulcsszavakat melyek más oldalakra mutatnak:
- "Ez a folyó a Duna egyik mellékága, ami keresztülfolyik Bács-Kiskun vármegyén."
- Technikai megvalósítás: később a POI-detail oldal automatikusan link-eli a megemlített POI-kat.

## POI.ts mező-szabályok (kötelező)

Minden POI-hoz amit generálsz/bővítesz, az alábbiak típusbiztosak legyenek:

- `id`: kebab-case, ország-prefix (`us-`, `de-`, `ro-` stb.), egyedi
- `type`: CSAK ezekből: `"state-capital" | "city" | "river" | "mountain" | "lake" | "island" | "forest" | "sea" | "historical" | "landmark" | "animal-habitat" | "agriculture" | "kid-landmark" | "industry" | "port" | "region" | "country"`
- `parent`: ISO country code vagy `XX-YY` régió (DE-BY, US-CA, RO-CJ stb.)
- `coords: [lon, lat]` — WGS84, **lon ELSŐ, lat MÁSODIK**, Ny-féltekén lon NEGATÍV
- `name`, `description`: kötelezően mind a 4 nyelv (de/hu/ro/en), **nincs üres string**
- `descriptionAdvanced`: 2-3 mondat, K5-K8-as szintű, 4-lang
- `facts`: 4-6 rövid tény (<60 char), 4-lang
- `factsAdvanced`: +3-5 részletes tény K5+, 4-lang
- `faq`: 4-5 Q&A a FAQPage Schema.org-hoz, 4-lang, eltérő a description-től
- `historyPeriod`: szabadon választott string (pl. "modern", "Colonial", "Classical")

## Cross-language szennyezés TILOS
Német mezőbe csak német szó, magyar mezőbe csak magyar, stb. Ékezetek helyesen (Wähle nem Waehle, törvény nem torveny, München nem Muenchen). Latin-karakterek megtartva.

## Output-formátum szabályok (gyakori hibák amiket el kell kerülni)

1. **Tömbzárás**: minden POI-tömb végén `];` legyen, NE csak `}`. Ha új exportot nyitsz, előtte zárd le az előzőt `];`-vel.
2. **POI-objektumok közti `,`**: minden `}` után `,` kell ha még van POI, vagy semmi ha utolsó.
3. **Ne duplikálj** teljes POI-blokkot, mindig APPEND a meglévő tömb VÉGÉRE.
4. **`}` és `];`** ne keverd össze — `}` zárja az objektumot, `];` zárja az egész array exportot.
5. Ha típushibát kapsz `as POI[]` casttal nem old meg semmit — nézd meg a coords/name/description mezőket.

## Workflow
1. Olvasd be a cél-fájlt 1×, ne ismételd.
2. Módosítsd/bővítsd a szükséges részt.
3. **NE FUTTASS `tsc`-t** — egy külön codex-runner csinálja a TypeScript ellenőrzést és javítást a háttérben. Te csak figyelj a saját fájlodban a syntax-helyességre (idézőjelek, vesszők, zárójelek, mezőnevek konzisztencia).
4. Ha shell-hiba (AttachConsole, pty-error) jön — NE retry-olj loopban, hagyd ki, folytasd.
5. Ha 429: várj 30s, 1 retry, aztán folytasd más fájllal.
6. Git commit végén, NE pushold — user csinálja.

## Tiltott műveletek
- TILOS dinamikus import (`import()`) — mindig statikus import.
- TILOS `image: "/..."` path-ot hozzáadni ha nem vagy biztos a fájl létezésében.
- TILOS `image` `.jpg`-t írni — webp a standard.
- NE érintsd a file-struktúrát (xxxCountry/xxxRegions/xxxCities/xxxLandmarks/xxxAllPoi), csak a meglévő elemekhez add hozzá a mezőket, vagy appendelj új elemeket.

## Projekt-specifikus ismeretek
- Repo: `C:/Users/User/plizio-repo`
- POI fájlok: `lib/visualLab/data/*Poi.ts`
- POI interface: `lib/visualLab/data/poi.ts`
- SEO detail oldalak: `app/[lang]/[country]/[state]/[poi]/page.tsx`
- Sitemap: `app/sitemap.ts` (auto-discover minden `*Poi.ts`-ből)
- Schema.org helpers: `components/seo/StructuredData.tsx`
- Quiz adat: `lib/visualLab/quiz/data/*Quiz.ts` — ha ehhez nyúlsz, `scripts/validateQuiz.ts` futni fog pre-commit hookban.

## POI képek szabálya
- `image` mezőt CSAK akkor adj hozzá, ha TUDOD hogy a `/public/geo-images/{country-slug}/{poi-slug}.webp` tényleg létezik. Ellenőrizd `ls public/geo-images/{country-slug}/` parancstal.
- Útvonal-konvenció: `/geo-images/{country-slug}/{poi-slug}.webp` — `country-slug` kebab-case angol (`czech-republic`, `dominican-republic`, `united-kingdom`), `poi-slug` = POI id vagy kebab-case név.
- Formátum: `.webp` kötelező (`.jpg`/`.png` TILOS).
- Ha nem létezik a kép → `image` mezőt HAGY KI, ne tegyél placeholdert.

## Kerülendő kliséfrázisok (silány SEO)
Ne használd ezeket: "csodálatos hely", "lenyűgöző táj", "történelmi jelentőségű", "felejthetetlen élmény", "pompás kilátás", "nem hiába nevezik X-nek".
Helyettük: KONKRÉT tényt írj (pl. "A torony 92 m magas" NEM "impozáns magasság"; "1867-ben épült" NEM "történelmi múltú").

## Audio / IPA
- Ha `audio` mezőt írsz, csak ha TUDOD hogy az MP3/WAV fájl létezik — ne találgasd. Inkább hagyd ki.
- Név-kiejtés IPA-átírás → `ipa: "..."` mezőként (de ez sincs a core POI-ban jelenleg).

## K5-K8 tanterv-kapcsolás
A `descriptionAdvanced` végén említsd meg, hogy a POI MELYIK tantárgyhoz / grade-hez kapcsolódik a Plizio tantervben:
- "Földrajz K7 — hegységek és folyók" / "Geschichte K8 — második világháború" / "Sachkunde K3 — állatok élőhelye"
- Ez segíti a topical authority-t + belső linkelést.

## Numerikus precizitás
- `elevation`, `length`, `area`, `historyYear` számok CSAK hivatalos forrás alapján. Ne kerekítsd kényelemből.
- Ha kételkedsz → HAGY KI a mezőt. Jobb üresen hagyni, mint rossz adattal rontani a bizalmat.
- `historyYear: [1914, 1918]` formátum tartományhoz.

## Forrás-követelmény (belső szabály)
- Ha egy tényben/számban/dátumban nem vagy biztos → NE TALÁLGASD, HAGY KI.
- Hallucination = SEO-halál. Google-penalty + user-trust-vesztés.

## Git commit üzenet formátum (egységes)
- Feature: `feat(POI): <ország> +N POI descriptionAdvanced + faq (4-lang)`
- Fix: `fix(POI): <ország> <problem> javitas`
- Doc: `docs: GEMINI.md frissites X reszel`
- Elsősoron MAGYARUL, max 1-2 mondat.

## Deploy / push TILTÁS
- `git push` TILOS — user csinálja.
- `npx next build` TILOS (sok idő, out/ commit user kezében van).
- `vercel deploy` / `netlify deploy` stb. TILOS.

## Quiz-validator barátság
- Ha `lib/visualLab/quiz/data/*Quiz.ts`-t érinted → a `husky pre-commit` fut `scripts/validateQuiz.ts`-t. Ha a teszt elbukik, a commit blokkolódik.
- A validator ellenőrzi: spot_error wrongPoiId benne van az optionPoiIds-ben, distance_guess expectedKm ±10% haversine-tól, order_by sorrend monoton (longitude / elevation).
- Mindig használj VALÓS POI id-t (grep-pel ellenőrizd `lib/visualLab/data/poi.ts`-ben).

## PP-repo / plizio-repo keresztkontamináció TILOS
- Plizio repo: `C:/Users/User/plizio-repo` (Next.js, SEO, térképek)
- PunktePass repo: `C:/Users/User/punktepass-code` (PHP/WordPress, teljesen más projekt)
- SOHA ne másolj átadatot/kódot a kettő között tudatosan kivéve, ha user kifejezetten kéri.

## Sitemap auto-discovery — új POI fájl
- Ha új `xxxPoi.ts`-t hozol létre → vedd fel a `lib/visualLab/data/allCountryPois.ts`-be:
  1. Import: `import { xxxAllPoi } from "./xxxPoi";`
  2. Spread: `...xxxAllPoi,` az ALL_COUNTRY_POIS tömbbe.
- Ez nélkül a POI-k NEM lesznek SEO-indexelve.

## FAQ minőség (featured snippet cél)
- 4-5 Q&A / POI.
- NE ismételd a `description`/`facts` tartalmát — ÚJ SZÖGBŐL közelíts.
- Kérdés-típusok: "Mikor...?", "Hány méter/km/m²...?", "Miért híres...?", "Hogyan jutok el...?", "Mi látható ma...?", "Érdekesség...?"
- Válasz 1-2 mondat, tényszerű (évszám, méret, konkrét részlet).

## Évszámok / mérföldkövek formátum
- `1848` NEM `1848 AD` / `i.sz. 1848` / `év 1848`
- `Kr. e. 500` csak ha tényleg BC/v.e.
- Tartomány: `1914–1918` (en-dash, nem kötőjel).

## Múltbéli hibák amiket NE ismételj (élő napló)
Ezeket a hibákat a te korábbi futásaid okozták — minden új Gemini-session előtt figyeld:

- **KRITIKUS (2026-04-24): `faq` mező-beszúrás elrontotta a `name` objektum záró `}`-ját sok POI fájlban** — amikor létező POI objektumba új mezőt szúrsz be (pl. `faq`), NE írj bele olyan helyre ahol az előző mező (`name`) egyetlen sorban van. Vagy a teljes `name` blokkot ÚJRAÍRD új mezővel EGYÜTT, vagy egy külön helyre szúrd be `, faq: {...}` kulcsot **CSAK miután a `name: {...}` lezárult `}`-val**. 49+ fájl vált érvénytelenné emiatt, revert-et kellett csinálni.
- **Amikor nagyon sok fájlt kell módosítani** (pl. 40+ POI-file), NE futtass 1 nagy promptot. Oszd részekre (5-10 fájl/batch). Hosszabb output = több parse-hiba.

- **Orphan SEO-blokk POI objektumon kívül**: `descriptionAdvanced` / `facts` mezőket TILOS különálló blokkként beszúrni a POI után `{` / `}` nélkül. Mindig a POI OBJEKTUMON BELÜL legyenek.
- **Duplikált POI-blokk**: ne másold le a teljes POI objektumot csak mert új mezőt akarsz hozzáadni. Szerkeszd az EREDETIT.
- **Hiányzó `];` array-záró**: minden `export const xxxCities: POI[] = [` után kötelezően `];` van mielőtt új exportot nyitsz.
- **🚨 Dupla `];` a fájl végén TILOS** (2026-04-28 incident: poiExtraLuxembourg*.ts):
  - Ha az utolsó sor már `];`, NE tegyél még egy üres sort és újabb `];`-t.
  - Ellenőrizd: a fájl végének pontosan EGY `];` legyen (vagy `}` ha objektumot exportálsz), ne kettő.
  - Hiba: `error TS1128: Declaration or statement expected.`
- **Hiányzó `,` 2 POI között**: `}` után `,` kötelező ha még POI jön.
- **Escaped quote artifact**: NE írj `\"` idézőjelet a string-ekben — használj rendes `"`-t.
- **🚨 Apostróf single-quoted stringben TILOS** (2026-04-28 incident: irelandPoi.ts):
  - `'Giant's Causeway'` → SYNTAX ERROR (apostróf lezárja a stringet)
  - `'world's longest'` / `'country's population'` / `'island's history'` → SYNTAX ERROR
  - **Szabály:** Ha a string tartalmaz `'` karaktert (apostróf, possessive), KÖTELEZŐ double-quote-ot használni: `"Giant's Causeway"` ✅
  - Vonatkozik: minden nyelv (en/de/hu/ro), minden mező (`name`, `description`, `facts`, `descriptionAdvanced`, `factsAdvanced`)
  - Tömbökben is: `[ "Capital is Dublin.", "World's largest..." ]` — ha bármelyik elem apostrófot tartalmaz, az ELEM legyen double-quote-os
  - Konzisztencia kedvéért: ha kétséges, mindig `"..."` használj `'...'` helyett TS string literálokhoz
- **`historyPeriod: "Modern"`** — a régi enum szigorú volt `"modern"` lowercase-szel. Most a típus string, de ha lehet lowercase-t írj (`"modern"`, `"classical"`, `"colonial"`) konzisztencia miatt.
- **Shell-hiba loop (`AttachConsole failed`)**: ha a `tsc` / `grep` Windows-ConPTY hibát dob, NE próbálkozz újra 50×. Hagyd ki az ellenőrzést, írj tovább, aztán user kézzel ellenőrzi.
- **32k output-token limit**: ha a feladat nagy (pl. 4 ország teljes generálása egy promptban), oszd fel kisebb részekre. Inkább 2 kisebb commit, mint 1 megszakadt.

## ABSZOLÚT TILTÁSOK content-generálásnál (2026-04-26 frissítés)

Ezek a hibák ismétlődtek és AUTO-REJECT-et okoznak — ha bármelyiket látod a kimenetedben, REGENERÁLD ÚJRA a saját szavaiddal:

### TILOS TEMPLATE / HELPER FÜGGVÉNY
- **NE definiálj** `n()`, `t()`, `makeCityPoi()`, `themeDescription()`, `THEMES = {...}` típusú segéd-szerkezetet a tartalom-fájlban.
- **NE használj** `${name}` template literal-t a `description`/`facts` mezőkben — minden szöveg LITERÁL string.
- Minden POI literál `{ ... }` objektum, kézzel írt 4-lang szöveggel.
- Indok: a Pro/Flash/Codex hajlamos 100 POI batch-nél template-fallback-be esni (azonos szöveg minden városra). EZ BUKÁS.

### TILOS NYELVI DUPLIKÁCIÓ
- **NE legyen ugyanaz a szöveg mind a 4 nyelvi mezőben**: `de: "Toulouse"` `hu: "Toulouse"` `ro: "Toulouse"` `en: "Toulouse"` ELFOGADHATÓ csak `name`-nél (helynév). Description/facts MIND a 4 nyelv NEMZETI nyelvű szöveget kapjon.
- **NE legyen ugyanaz a description 2 különböző POI-ra** — még szinonimákkal sem.

### TILOS GENERALIST SUBAGENT RECURSION
- A Gemini CLI néha próbálja delegálni a feladatot saját `generalist` subagent-hez → recursion-loop, 0 munka.
- Ha látod a logban `Skipping subagent tool 'generalist'` → NE próbáld újra a delegációt, dolgozz közvetlenül.

### BATCH MÉRET LIMIT
- **MAX 30-50 entry / batch** content-generálás. 100+ entry → biztos template-fallback.
- Ha 100+ POI kell, oszd fel 2-3 részre, külön commit-tal.

### KÖTELEZŐ ÖNELLENŐRZÉS commit előtt
- Válassz 5 random POI-t. Ellenőrizd:
  - Description EGYEDI (nem ismétlődik)?
  - Mind a 4 nyelv saját nyelvén (ékezet)?
  - Konkrét tény (szám/dátum/név)?
- Ha bármelyik check fail → REGENERÁLD. NE commitold.

### TILOS JS-SCRIPT-HIVÁS A TS-FÁJL ELŐÁLLÍTÁSRA
- Volt eset 2026-04-25: Pro generated `generate_wiki_seo.js` + `patch_seo.js` segéd-scripteket → boilerplate output, nem egyedi tartalom.
- Mindig DIREKT írd a TS-be a tartalmat saját tudásodból, nincs script-segéd.

## Nyelvspecifikus apróságok
- Hu: ékezetek (ő ű á é í ó ö ü). NE "Gyor" — Győr. NE "torveny" — törvény.
- De: umlaut (ä ö ü ß). NE "Muenchen" / NE "Kreuzberg" → München / Kreuzberg.
- Ro: diakritika (ă â î ș ț). NE "Bucuresti" → București.
- En: tiszta ASCII OK, de őrizd meg az idegen neveket ha releváns (München maradhat EN-szövegben ha a POI-nak az a hivatalos angol neve).

### TILOS SYNTAX-KORRUPCIÓ A FÁJLBAN
Nemrég 49 POI fájlban a Flash gemini ezeket a hibákat termelte (ne ismételd):
- **Literál `\n` karakterek** a fájlban (escape-elt newline-ok, nem valódi sortörés). ROSSZ: `import type { POI } from "./poi";\n\nexport const ...` egy sorban. JÓ: rendes többsoros file valódi `\n`-ekkel.
- **Sztennyező szöveg a fájlban**: `file_path: "..."`, `ergonomic_write_file=true` és hasonló tool-marker szövegek BENNRAGADTAK a TS-fájlban. SOHA ne írj olyat amit a tool számára szánsz a fájlba.
- **Hiányzó vessző két objektum között**, tipikus: `}\n  {\n    id: ...` (helyes: `},\n  {\n    id: ...`).
- **Lezáratlan string literál**: pl. `description: { de: "ez `, sortörés közepén lezárás nélkül.
- **Felesleges `]` vagy `}`** a fájl végén a `];` után.

### KÖTELEZŐ FÁJL-VÉGI SYNTAX CHECK
Mielőtt write_file: gondold át mentálisan az **első és utolsó 5 sort**:
1. Első sor: `import type { POI } from "./poi";` (valódi újsorral)
2. Második sor: üres
3. Harmadik sor: `export const poiExtra<Country><Layer>V2: POI[] = [`
4. Utolsó sor: `];` (semmi extra utána)
Ha ez nem stimmel → ne mentsd, írd újra.
