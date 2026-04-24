// Aggregate FAQ map — used by POI detail pages to look up FAQ for a given POI.
// New country FAQ files are registered here.

import type { CountryFaqMap, FaqItem } from "./types";
import { deFaq } from "./deFaq";
import { huFaq } from "./huFaq";
import { roFaq } from "./roFaq";

// Placeholder for future FAQ imports (Gemini will generate e.g. ./deFaq, ./huFaq, ./roFaq).
// Register new imports here as they are created.

const ALL_FAQ: CountryFaqMap = {
  ...deFaq,
  ...huFaq,
  ...roFaq,
};

export type Lang = "de" | "hu" | "ro" | "en";

/** Returns FAQ items for a POI in the requested language, or undefined if none exist. */
export function getFaqForPoi(poiId: string, lang: Lang): FaqItem[] | undefined {
  const entry = ALL_FAQ[poiId];
  if (!entry) return undefined;
  return entry[lang] ?? entry.en ?? entry.de;
}

/** For FAQPage Schema.org generation — returns FAQ items regardless of source. */
export function hasFaqForPoi(poiId: string): boolean {
  return !!ALL_FAQ[poiId];
}

export type { CountryFaqMap, FaqItem, PoiFaqLocalized } from "./types";
