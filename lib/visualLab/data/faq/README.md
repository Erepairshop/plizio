# POI FAQ — separate table

FAQ adatok a POI objektumoktól FÜGGETLENÜL tárolódnak itt, hogy a Gemini/LLM batch-generálás
ne törje össze a POI fájlokat inline `faq:` beszúrással.

## Fájlszerkezet

- `types.ts` — típusdefiníciók (`FaqItem`, `PoiFaqLocalized`, `CountryFaqMap`)
- `index.ts` — aggregátor + `getFaqForPoi(poiId, lang)` lookup
- `{country}Faq.ts` — országspecifikus FAQ adatok, ID → 4-lang FAQ map

## Új ország hozzáadása

1. Hozz létre: `lib/visualLab/data/faq/{country}Faq.ts`
2. Tartalom:
```ts
import type { CountryFaqMap } from "./types";

export const {country}Faq: CountryFaqMap = {
  "poi-id-1": {
    de: [
      { q: "Frage 1?", a: "Antwort 1." },
      { q: "Frage 2?", a: "Antwort 2." },
    ],
    hu: [
      { q: "Kérdés 1?", a: "Válasz 1." },
      ...
    ],
    ro: [...],
    en: [...],
  },
  "poi-id-2": { ... },
};
```
3. Regisztráld `index.ts`-ben:
```ts
import { xxxFaq } from "./xxxFaq";
const ALL_FAQ: CountryFaqMap = {
  ...xxxFaq,
};
```

## Gemini prompt-sablon (biztonságos)

> Hozz létre egy ÚJ fájlt: `lib/visualLab/data/faq/{country}Faq.ts`
> Formátum: `export const {country}Faq: CountryFaqMap = { ... }`
> POI-idk forrása: `lib/visualLab/data/{country}Poi.ts` (olvasd be, nézd meg milyen `id`-k vannak).
> Minden POI-hoz 4-5 Q&A, 4-lang (de/hu/ro/en).
> TILOS a meglévő POI fájlt módosítani — csak új fájlt hozol létre.

Ez a pattern garantálja, hogy a POI fájlok érintetlenek maradnak.
