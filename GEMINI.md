# GEMINI.md — Plizio projekt

Auto-loadolt context. Legtöbb feladat: SEO-tartalom feltöltés POI fájlokba.

## CONTENT RULES (kötelező)

1. **4 nyelv (de/hu/ro/en) saját nyelvű, helyes ékezettel** — nincs cross-language szennyezés. Hu: ő ű á é í ó ö ü. De: ä ö ü ß. Ro: ă â î ș ț.
2. **EGYEDI tartalom** POI-nként — NE template, NE ismétlés, NE 2 azonos description.
3. **Konkrét tények** (évszám, méret, népesség, név). Hallucinálni TILOS — ha nem tudod, hagyd ki.
4. **Hosszúságok**: `description` 2-3 mondat, `descriptionAdvanced` 80-150 szó, `facts` 4-6 rövid (<60 char), `factsAdvanced` 6-8 részletes.
5. **Klisé TILOS**: "csodálatos", "lenyűgöző", "felejthetetlen", "történelmi jelentőségű" stb. — KONKRÉT helyett.

## SYNTAX SHIBBOLETHEK (parser-killer hibák)

- **Apostrof string-ben TILOS single-quote-tal**: `'Giant's Causeway'` ❌ → `"Giant's Causeway"` ✅. Bármely string ami `'`-t tartalmaz, KÖTELEZŐ double-quote.
- **Array close**: `export const x: POI[] = [ ... ];` — pontosan EGY `];` a fájl végén, semmi extra.
- **POI objektumok közt vessző**: `},` kell ha még jön POI.
- **NE escape-elj** `\"` idézőjellel — natív `"` használandó.
- **Mojibake TILOS**: `Ã©` `Å'` `Ű'` jelek = bug. Natív UTF-8 (`é`, `ő`, `ű`) közvetlenül.
- **NEM literál `\n`** (escaped newline) string közepén — valódi sortörés a fájlban.

## NO TEMPLATES / NO HELPERS

- TILOS `n()`, `t()`, `makeCityPoi()`, `THEMES = {...}` típusú segédfüggvény a tartalom-fájlban.
- TILOS `${name}` template literal `description`/`facts`-ban — minden mező LITERÁL string.
- TILOS JS-script generáló (pl. `generate.js`) → boilerplate output. Direkt írd a TS-be saját tudásból.
- TILOS dinamikus `import()` — mindig statikus.

## POI INTERFACE (lib/visualLab/data/poi.ts)

- `id`: kebab-case ország-prefix-szel (`us-`, `de-`, `ro-` stb.)
- `type`: enum — `state-capital | city | river | mountain | lake | island | forest | sea | historical | landmark | animal-habitat | agriculture | kid-landmark | industry | port | region | country`
- `parent`: ISO/régió code (`DE-BY`, `US-CA`, `RO-CJ`, vagy ország ID)
- `coords: [lon, lat]` — **lon ELSŐ**, Ny-féltekén lon NEGATÍV
- `name`, `description`: mind a 4 nyelv kötelező, nincs üres string
- `descriptionAdvanced`, `factsAdvanced`: 4-lang
- `image`: csak ha tudod hogy létezik `/public/geo-images/{country-slug}/{poi-slug}.webp`. WebP only, .jpg/.png TILOS. Ha nem létezik, hagyd ki.
- `historyYear: [1914, 1918]` tartomány formátum
- `historyPeriod`: lowercase string (`"modern"`, `"colonial"`)

## WORKFLOW

1. Olvasd a célfájlt 1×, ne ismételd.
2. Append/edit a meglévőhöz, NE duplikálj POI-blokkot.
3. **NE FUTTASS `tsc`-t** — háttér-runner ellenőrzi.
4. **NE pushold** — user csinálja. Commit OK, push TILOS.
5. **NE futtass** `npx next build`-et, `vercel deploy`-t.
6. Capacity-exhausted (429) → várj 30s, 1 retry, aztán folytasd / lépj ki.
7. Shell-hiba (AttachConsole/pty) → ne loop-olj retry-vel, hagyd ki.
8. Subagent recursion (`generalist` delegáció) → NE delegálj, dolgozz közvetlenül.

## BATCH MÉRET

- **multi4 SEO task (4 lang egyszerre):** 10-12 POI/batch (4 lang × 600+ char × 12 POI ≈ output cap szélén)
- **single-lang task:** Max 30-50 POI/batch
- 100+ → biztos template-fallback.
- Output token limit ~32k — ha sok kell, oszd több batch-re, mindegyik után apply_seo_json.py futtatás.

## WIKIPEDIA KONTEXTUS (multi4 promptban)

A multi4 prompt elején `## WIKIPEDIA KONTEXTUS` blokk van, POI-nkénti faktikus alapokkal.
- Ezeket a tényeket HASZNÁLD (dátumok, népesség, koordináta).
- NE halucinálj — ami nincs a wikiben + nem általános földrajzi tudás → hagyd ki.
- Saját stílusban írd meg, NE másold a wiki szöveget.

## ÖNELLENŐRZÉS commit előtt

5 random POI-n nézd: description EGYEDI? 4 nyelv saját nyelvű? Konkrét tény? Apostrof double-quote-os? Ha bármelyik fail → REGENERÁLD.

## REPO

- Plizio repo: `C:/Users/User/plizio-repo` (Next.js, SEO, POI). PunktePass repo (`punktepass-code`) MÁSIK projekt — ne keverd.
- POI fájlok: `lib/visualLab/data/*Poi.ts`, `poiExtra*V2.ts`
- Új fájlnál: vedd fel `allCountryPois.ts`-be (`import` + spread `...xxxAllPoi,`).
