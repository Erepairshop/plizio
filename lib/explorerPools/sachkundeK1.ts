// lib/explorerPools/sachkundeK1.ts
// ═══════════════════════════════════════════════════════════════════════════
// ASTRO-SACHKUNDE K1 — Pool data for all 9 islands
// Pure TypeScript — no JSX!
// LANGUAGE: de + ro  (hu + en könnyen hozzáadható később)
// Pool méret: 7-10 topic/sziget
// ═══════════════════════════════════════════════════════════════════════════

import type { PoolTopicDef } from "./types";

// ─── SVG referenciák (nem importálandók ide, csak tájékoztatásul) ─────────
// svg/k1/NatureWeatherSvg: WeatherTypesSvg, ThermometerSvg, SeasonsSvg,
//                          LightSourcesSvg, RainbowSvg
// svg/k1/TrafficRecyclingSvg: TrafficLightSvg, TrafficSignsSvg, VehiclesSvg,
//   PedestrianRulesSvg, BicycleSafetySvg, MaterialsSvg, RecyclingBinsSvg,
//   WasteSeparationSvg, ProtectNatureSvg, WhyRecycleSvg
//
// SVG típusok (svg.type mező): "simple-icon", "two-groups", "text-bubbles",
//   "word-card", "sentence-display", "icon-grid", "word-display"

// ─── K1 SZIGETEK TÉMÁI ────────────────────────────────────────────────────
// i1 — Körper & Sinne       (Test és érzékszervek)
// i2 — Tiere                (Állatok: háziállatok + vadállatok)
// i3 — Jahreszeiten         (Évszakok)
// i4 — Wetter               (Időjárás)
// i5 — Familie & Zuhause    (Család és otthon)
// i6 — Verkehr & Sicherheit (Közlekedés és biztonság)
// i7 — Materialien & Recycling (Anyagok és újrahasznosítás)
// i8 — Natur Wiederholung   (Természet áttekintés)
// i9 — Großes Finale        (Vegyes finálé)

// ─── INTERAKTÍV TÍPUSOK — max 30% gap-fill, többi egyenletesen! ──────────
// gap-fill       → mondat kiegészítés választással
// word-order     → mondatdarabok helyes sorrendbe
// match-pairs    → párosítás (állat↔hang, anyag↔kuka stb.)
// highlight-text → helyes szavak kijelölése tokenek közül
// sentence-build → szavakból mondat összerakása
// drag-to-bucket → kategóriákba húzás (pl. háziállat/vadállat)

// ═══════════════════════════════════════════════════════════════════════════
// i1 — KÖRPER & SINNE
// ═══════════════════════════════════════════════════════════════════════════

export const BODY_SENSES_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Sinne",
    // TODO: t1..t8 labels
    // Témák: testrészek, 5 érzékszerv, egészséges szokások,
    //   fogmosás, kézmosás, alvás, sport
  },
  ro: {
    explorer_title: "Corp și simțuri",
    // TODO: t1..t8 labels
  },
};

export const BODY_SENSES_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — TIERE
// ═══════════════════════════════════════════════════════════════════════════

export const ANIMALS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere",
    // Témák: háziállatok, vadállatok, mit eszik, hol él,
    //   állathangok, match-pairs (állat↔hang), drag-to-bucket (háziállat/vadállat)
  },
  ro: {
    explorer_title: "Animale",
  },
};

export const ANIMALS_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — JAHRESZEITEN
// ═══════════════════════════════════════════════════════════════════════════

export const SEASONS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Jahreszeiten",
    // Témák: tavasz/nyár/ősz/tél jellemzői, növények, ruházkodás, ünnepek
    // SVG: SeasonsSvg
  },
  ro: {
    explorer_title: "Anotimpuri",
  },
};

export const SEASONS_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — WETTER
// ═══════════════════════════════════════════════════════════════════════════

export const WEATHER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter",
    // Témák: időjárás típusok, hőmérséklet, szivárvány, felhők,
    //   mit veszünk fel esőben/napsütésben
    // SVG: WeatherTypesSvg, ThermometerSvg, RainbowSvg
  },
  ro: {
    explorer_title: "Vremea",
  },
};

export const WEATHER_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — FAMILIE & ZUHAUSE
// ═══════════════════════════════════════════════════════════════════════════

export const FAMILY_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Familie & Zuhause",
    // Témák: családtagok, otthoni helyiségek, házi feladatok,
    //   match-pairs (rokon↔kapcsolat), drag-to-bucket (konyha/fürdő/hálószoba)
  },
  ro: {
    explorer_title: "Familie și casă",
  },
};

export const FAMILY_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — VERKEHR & SICHERHEIT
// ═══════════════════════════════════════════════════════════════════════════

export const TRAFFIC_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verkehr & Sicherheit",
    // Témák: jelzőtáblák, lámpa színei, zebrán átkelés, járművek,
    //   biciklis szabályok, gyalogos szabályok
    // SVG: TrafficLightSvg, TrafficSignsSvg, VehiclesSvg, PedestrianRulesSvg
  },
  ro: {
    explorer_title: "Trafic și siguranță",
  },
};

export const TRAFFIC_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — MATERIALIEN & RECYCLING
// ═══════════════════════════════════════════════════════════════════════════

export const RECYCLING_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Materialien & Recycling",
    // Témák: anyagtípusok (papír/üveg/műanyag/fém), kuka színek,
    //   miért reciklálunk, drag-to-bucket (melyik kukába?)
    // SVG: MaterialsSvg, RecyclingBinsSvg, WasteSeparationSvg, ProtectNatureSvg
  },
  ro: {
    explorer_title: "Materiale și reciclare",
  },
};

export const RECYCLING_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — NATUR WIEDERHOLUNG
// ═══════════════════════════════════════════════════════════════════════════

export const NATURE_REVIEW_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Natur Wiederholung",
    // Témák: növények, állatok, természeti jelenségek, élőhelyek,
    //   mit kapunk a természettől, környezetvédelem
    // SVG: LightSourcesSvg, ProtectNatureSvg
  },
  ro: {
    explorer_title: "Recapitulare natură",
  },
};

export const NATURE_REVIEW_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — GRAND FINALE
// ═══════════════════════════════════════════════════════════════════════════

export const GRAND_FINALE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes Finale",
    // Vegyes kérdések az összes K1 témából
    // Nehezebb mix: { easy: 1, medium: 2, hard: 2 }
  },
  ro: {
    explorer_title: "Marea finală",
  },
};

export const GRAND_FINALE_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topic, vegyes az összes szigetből
];
