import type { PoolTopicDef } from "./types";

// ─── K6 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Aktiv & Passiv       🔄
//   i2 = Konjunktiv II        🌀
//   i3 = Infinitiv mit zu     ∞
//   i4 = Synonyme & Antonyme  🔀
//   i5 = Fremdwörter          🌐
//   i6 = Relativsatz & Kausalsatz 🔗
//   i7 = Wortbildung          🧩
//   i8 = Zeichensetzung       📌
//   i9 = Große Prüfung        🌟
//
// Struktúra minden topic-hoz:
//   id, title (label key), svg, hint1, hint2, interactive, quiz
//
// svg típusok: "two-groups" | "word-card" | "text-bubbles" | "article-noun" |
//   "letter-circles" | "sentence-flow" | "image-label" | "comparison-table"
//
// interactive típusok: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" | "physics-magnet" |
//   "physics-stacker" | "physics-slingshot"
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   VAGY: { generate: "generator_key" }  — ha van passender Generator
//
// 7-10 topic/pool; minden topic egy rövid tanítás + interakció + kvíz
// ──────────────────────────────────────────────────────────────────────────────

// ─── i1: Aktiv & Passiv ───────────────────────────────────────────────────────

export const PASSIV6_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Active & Passive",
    // TODO: fill in label keys for each topic
  },
  de: {
    explorer_title: "Aktiv & Passiv",
    // TODO
  },
  hu: {
    explorer_title: "Aktív & Passzív",
    // TODO
  },
  ro: {
    explorer_title: "Activ & Pasiv",
    // TODO
  },
};

export const PASSIV6_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topics
  // Minta:
  // {
  //   id: "t1",
  //   title: "aktiv_title",
  //   svg: { type: "two-groups", left: { label: "aktiv_left", items: ["...", "..."], bg: "#dbeafe", border: "#93c5fd" },
  //           right: { label: "aktiv_right", items: ["...", "..."], bg: "#fce7f3", border: "#f9a8d4" } },
  //   hint1: "aktiv_hint1",
  //   hint2: "aktiv_hint2",
  //   interactive: { type: "drag-to-bucket", buckets: ["aktiv_bucket1", "aktiv_bucket2"],
  //                  items: [{ text: "item1", bucket: 0 }, { text: "item2", bucket: 1 }] },
  //   quiz: { question: "aktiv_q1", choices: ["a1","a2","a3","a4"], answer: "a1" },
  // },
];

// ─── i2: Konjunktiv II ────────────────────────────────────────────────────────

export const KONJ6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Konjunktiv II" },
  de: { explorer_title: "Konjunktiv II" },
  hu: { explorer_title: "Konjunktív II" },
  ro: { explorer_title: "Conjunctiv II" },
};

export const KONJ6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i3: Infinitiv mit zu ─────────────────────────────────────────────────────

export const INF6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Infinitive with zu" },
  de: { explorer_title: "Infinitiv mit zu" },
  hu: { explorer_title: "Infinitív zu-val" },
  ro: { explorer_title: "Infinitiv cu zu" },
};

export const INF6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i4: Synonyme & Antonyme ──────────────────────────────────────────────────

export const SYN6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Synonyms & Antonyms" },
  de: { explorer_title: "Synonyme & Antonyme" },
  hu: { explorer_title: "Szinonimák & Antonimák" },
  ro: { explorer_title: "Sinonime & Antonime" },
};

export const SYN6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i5: Fremdwörter ──────────────────────────────────────────────────────────

export const FREMD6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Foreign Words" },
  de: { explorer_title: "Fremdwörter" },
  hu: { explorer_title: "Idegen szavak" },
  ro: { explorer_title: "Cuvinte străine" },
};

export const FREMD6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i6: Relativsatz & Kausalsatz ────────────────────────────────────────────

export const REL6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Relative & Causal Clauses" },
  de: { explorer_title: "Relativsatz & Kausalsatz" },
  hu: { explorer_title: "Vonatkozói & Okhatározói mellékmondat" },
  ro: { explorer_title: "Relative & Cauzale" },
};

export const REL6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i7: Wortbildung ──────────────────────────────────────────────────────────

export const WORT6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Word Formation" },
  de: { explorer_title: "Wortbildung" },
  hu: { explorer_title: "Szóalkotás" },
  ro: { explorer_title: "Formare de cuvinte" },
};

export const WORT6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i8: Zeichensetzung ───────────────────────────────────────────────────────

export const ZEICHEN6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Punctuation" },
  de: { explorer_title: "Zeichensetzung" },
  hu: { explorer_title: "Írásjelek" },
  ro: { explorer_title: "Punctuație" },
};

export const ZEICHEN6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i9: Große Prüfung ────────────────────────────────────────────────────────

export const EXAM6_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Big Test" },
  de: { explorer_title: "Große Prüfung" },
  hu: { explorer_title: "Nagy Próba" },
  ro: { explorer_title: "Marea probă" },
};

export const EXAM6_POOL: PoolTopicDef[] = [
  // TODO: vegyes mix az összes K6 témából
];
