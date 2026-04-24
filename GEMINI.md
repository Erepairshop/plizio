# GEMINI.md — Plizio projekt Gemini-utasítások

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
3. Futtass `NODE_OPTIONS="--max-old-space-size=4096" npx tsc --noEmit` és fixáld a saját fájlod hibáit (másét NE).
4. Ha shell-hiba (AttachConsole, pty-error) jön — NE retry-olj loopban, hagyd ki a check-et, folytasd.
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
