// @ts-nocheck
// FAQ adatok külön táblában, POI-któl teljesen elválasztva.
// Ez garantálja, hogy a Gemini batch-ek NE módosítsák a meglévő POI objektumokat
// (ami korábban folyamatosan parse-hibákat okozott).
//
// Hozzáadni: új FAQ fájlt `{country}Faq.ts` névvel, amely a `CountryFaqMap` formátumban
// tárolja a FAQ-okat POI-id alapján.

export interface FaqItem {
  q: string;
  a: string;
}

export interface PoiFaqLocalized {
  de?: FaqItem[];
  hu?: FaqItem[];
  ro?: FaqItem[];
  en?: FaqItem[];
}

/** Map POI-id → localized FAQ (4-lang). */
export type CountryFaqMap = Record<string, PoiFaqLocalized>;

