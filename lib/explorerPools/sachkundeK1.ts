// lib/explorerPools/sachkundeK1.ts
// ═══════════════════════════════════════════════════════════════════════════
// ASTRO-SACHKUNDE K1 — Pool data for all 9 islands
// Pure TypeScript — no JSX!
// LANGUAGE: de + en + hu + ro (mind a 4 kötelező!)
// Pool méret: 7-10 topic/sziget
// ═══════════════════════════════════════════════════════════════════════════

import type { PoolTopicDef } from "./types";

// ─── SVG-K — elérhető SVG komponensek (NEM importálandók ide, csak referencia!)
// import { WeatherTypesSvg, SeasonsSvg, ThermometerSvg, LightSourcesSvg, RainbowSvg }
//   from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";
// import { TrafficLightSvg, TrafficSignsSvg, VehiclesSvg, PedestrianRulesSvg, BicycleSafetySvg,
//          MaterialsSvg, RecyclingBinsSvg, WasteSeparationSvg, ProtectNatureSvg, WhyRecycleSvg }
//   from "@/app/astro-sachkunde/svg/k1/TrafficRecyclingSvg";
//
// SVG típusok a pool-ban (svg.type mező):
//   "simple-icon", "two-groups", "text-bubbles", "word-card",
//   "sentence-display", "icon-grid", "word-display"

// ─── K1 SZIGETEK TÉMÁI ────────────────────────────────────────────────────
// i1 — Test és érzékszervek (Körper & Sinne)
// i2 — Háziállatok és vadon élők (Haustiere & Wildtiere)
// i3 — Évszakok és természet (Jahreszeiten & Natur)
// i4 — Időjárás és naptár (Wetter & Kalender)
// i5 — Család és otthon (Familie & Zuhause)
// i6 — Közlekedés és biztonság (Verkehr & Sicherheit)
// i7 — Anyagok és újrahasznosítás (Materialien & Recycling)
// i8 — Természet áttekintés (Natur Wiederholung)
// i9 — Nagy finálé (Großes Finale)

// ─── INTERAKTÍV TÍPUSOK — változatosan használd! ─────────────────────────
// gap-fill       → mondat kiegészítés választással
// word-order     → mondatdarabok helyes sorrendbe
// match-pairs    → bal-jobb párosítás (állat↔hang, anyag↔kuka stb.)
// highlight-text → helyes szavak kijelölése tokenek közül
// sentence-build → szavakból mondat összerakása
// drag-to-bucket → kategóriákba húzás (pl. háziállat / vadállat)
// block-drag     → számolós feladat blokkokkal
//
// Cél: max 30% gap-fill, többi egyenletesen elosztva!

// ─── LABEL STRUKTÚRA ─────────────────────────────────────────────────────
// Minden topic: tN_title, tN_text, tN_h1, tN_h2
// + típusfüggő mezők (tN_w1..wX, tN_p1l/p1r, tN_i1..iX, tN_b1/b2 stb.)
// + tN_q, tN_qa, tN_qb, tN_qc, tN_qd  (kvízkérdés)

// ═══════════════════════════════════════════════════════════════════════════
// i1 — KÖRPER & SINNE (Test és érzékszervek)
// ═══════════════════════════════════════════════════════════════════════════

export const BODY_SENSES_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Sinne",
    // TODO: t1..t8 labels
  },
  en: {
    explorer_title: "Body & Senses",
    // TODO: t1..t8 labels
  },
  hu: {
    explorer_title: "Test és érzékszervek",
    // TODO: t1..t8 labels
  },
  ro: {
    explorer_title: "Corp și simțuri",
    // TODO: t1..t8 labels
  },
};

export const BODY_SENSES_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
  // Javasolt témák: testrészek, 5 érzékszerv, egészséges szokások,
  //   fogmosás, kézmosás, alvás, sport
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — TIERE (Állatok)
// ═══════════════════════════════════════════════════════════════════════════

export const ANIMALS_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Tiere" },
  en: { explorer_title: "Animals" },
  hu: { explorer_title: "Állatok" },
  ro: { explorer_title: "Animale" },
};

export const ANIMALS_POOL: PoolTopicDef[] = [
  // Javasolt témák: háziállatok, vadállatok, mit eszik, hol él,
  //   állathangok, match-pairs (állat↔hang), drag-to-bucket (háziállat/vadállat)
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — JAHRESZEITEN (Évszakok)
// ═══════════════════════════════════════════════════════════════════════════

export const SEASONS_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Jahreszeiten" },
  en: { explorer_title: "Seasons" },
  hu: { explorer_title: "Évszakok" },
  ro: { explorer_title: "Anotimpuri" },
};

export const SEASONS_POOL: PoolTopicDef[] = [
  // Javasolt témák: tavasz/nyár/ősz/tél jellemzői, növények évszakonként,
  //   ruházkodás, ünnepek, gravity-sort (évszak sorrendbe)
  // SVG: SeasonsSvg
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — WETTER (Időjárás)
// ═══════════════════════════════════════════════════════════════════════════

export const WEATHER_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Wetter" },
  en: { explorer_title: "Weather" },
  hu: { explorer_title: "Időjárás" },
  ro: { explorer_title: "Vremea" },
};

export const WEATHER_POOL: PoolTopicDef[] = [
  // Javasolt témák: időjárás típusok, hőmérséklet, szivárvány, felhők,
  //   mit veszünk fel esőben/napsütésben, naptár/hónapok
  // SVG: WeatherTypesSvg, ThermometerSvg, RainbowSvg
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — FAMILIE (Család)
// ═══════════════════════════════════════════════════════════════════════════

export const FAMILY_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Familie & Zuhause" },
  en: { explorer_title: "Family & Home" },
  hu: { explorer_title: "Család és otthon" },
  ro: { explorer_title: "Familie și casă" },
};

export const FAMILY_POOL: PoolTopicDef[] = [
  // Javasolt témák: családtagok, otthoni helyiségek, házi feladatok,
  //   szomszédok, match-pairs (rokon↔kapcsolat), drag-to-bucket (konyha/fürdő/hálószoba)
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — VERKEHR (Közlekedés)
// ═══════════════════════════════════════════════════════════════════════════

export const TRAFFIC_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Verkehr & Sicherheit" },
  en: { explorer_title: "Traffic & Safety" },
  hu: { explorer_title: "Közlekedés és biztonság" },
  ro: { explorer_title: "Trafic și siguranță" },
};

export const TRAFFIC_POOL: PoolTopicDef[] = [
  // Javasolt témák: közlekedési jelzőtábla, lámpa színei, zebrán átkelés,
  //   járművek típusai, biciklis szabályok, gyalogos szabályok
  // SVG: TrafficLightSvg, TrafficSignsSvg, VehiclesSvg, PedestrianRulesSvg, BicycleSafetySvg
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — RECYCLING (Újrahasznosítás)
// ═══════════════════════════════════════════════════════════════════════════

export const RECYCLING_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Materialien & Recycling" },
  en: { explorer_title: "Materials & Recycling" },
  hu: { explorer_title: "Anyagok és újrahasznosítás" },
  ro: { explorer_title: "Materiale și reciclare" },
};

export const RECYCLING_POOL: PoolTopicDef[] = [
  // Javasolt témák: anyagtípusok (papír/üveg/műanyag/fém), kuka színek,
  //   miért reciklálunk, hulladék csökkentés, drag-to-bucket (melyik kukába?)
  // SVG: MaterialsSvg, RecyclingBinsSvg, WasteSeparationSvg, ProtectNatureSvg
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — NATUR (Természet áttekintés)
// ═══════════════════════════════════════════════════════════════════════════

export const NATURE_REVIEW_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Natur Wiederholung" },
  en: { explorer_title: "Nature Review" },
  hu: { explorer_title: "Természet áttekintés" },
  ro: { explorer_title: "Recapitulare natură" },
};

export const NATURE_REVIEW_POOL: PoolTopicDef[] = [
  // Vegyes áttekintés: növények, állatok, természeti jelenségek,
  //   élőhelyek, mit kapunk a természettől, környezetvédelem
  // SVG: LightSourcesSvg, ProtectNatureSvg
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — GRAND FINALE
// ═══════════════════════════════════════════════════════════════════════════

export const GRAND_FINALE_LABELS: Record<string, Record<string, string>> = {
  de: { explorer_title: "Großes Finale" },
  en: { explorer_title: "Grand Finale" },
  hu: { explorer_title: "Nagy finálé" },
  ro: { explorer_title: "Marea finală" },
};

export const GRAND_FINALE_POOL: PoolTopicDef[] = [
  // Vegyes kérdések az összes K1 témából (test, állatok, évszakok,
  //   időjárás, család, közlekedés, recycling, természet)
  // Nehezebb kérdések, mix: { easy: 1, medium: 2, hard: 2 }
];
