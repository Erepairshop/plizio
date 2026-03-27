import type { PoolTopicDef } from "./types";

// ─── K6 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Aktiv & Passiv           🔄
//   i2 = Konjunktiv II            🌀
//   i3 = Infinitiv mit zu         ∞
//   i4 = Synonyme & Antonyme      🔀
//   i5 = Fremdwörter              🌐
//   i6 = Relativsatz & Kausalsatz 🔗
//   i7 = Wortbildung              🧩
//   i8 = Zeichensetzung           📌
//   i9 = Große Prüfung            🌟
//
// Struktur je Topic:
//   id, title (label key), svg, hint1, hint2, interactive, quiz
//
// svg Typen: "two-groups" | "word-card" | "text-bubbles" | "article-noun" |
//   "letter-circles" | "sentence-flow" | "image-label" | "comparison-table"
//
// WICHTIG bei two-groups:   border Feld PFLICHT!
// WICHTIG bei text-bubbles: color Feld PFLICHT in jedem item!
// WICHTIG bei article-noun: articleColor PFLICHT (der=#1D4ED8, die=#B91C1C, das=#065F46)
//
// interactive Typen: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" | "physics-magnet" |
//   "physics-stacker" | "physics-slingshot" | "physics-bucket"
//
// physics-magnet:    pairs: [{ left: "t1_l1", right: "t1_r1" }, ...]
// physics-slingshot: question: "t1_q", targets: [{ id: "id1", text: "t1_t1", isCorrect: true }, ...]
// physics-stacker:   words: ["t1_w1","t1_w2","t1_w3"], correctOrder: [0,1,2]
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   ODER: { generate: "generator_key" }
//   Verfügbare Generatoren: "passiv" | "konjunktiv2" | "synonyme" | "antonyme"
//                           "steigerung" | "praeteritum" | "perfekt" | "plural"
//
// 7-10 Topics pro Pool; LABELS nur "de"!
// ──────────────────────────────────────────────────────────────────────────────

// ─── i1: Aktiv & Passiv ───────────────────────────────────────────────────────

export const PASSIV6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Aktiv & Passiv",
    // TODO: alle label keys für die Topics hier eintragen
  },
};

export const PASSIV6_POOL: PoolTopicDef[] = [
  // TODO: 7-10 topics
  // Beispiel:
  // {
  //   id: "t1",
  //   title: "aktiv_title",
  //   svg: { type: "two-groups",
  //          left:  { label: "aktiv_left",  items: ["...", "..."], bg: "#dbeafe", border: "#93c5fd" },
  //          right: { label: "passiv_right", items: ["...", "..."], bg: "#fce7f3", border: "#f9a8d4" } },
  //   hint1: "aktiv_hint1",
  //   hint2: "aktiv_hint2",
  //   interactive: { type: "drag-to-bucket", buckets: ["aktiv_b1", "passiv_b2"],
  //                  items: [{ text: "t1_i1", bucket: 0 }, { text: "t1_i2", bucket: 1 }] },
  //   quiz: { generate: "passiv" },
  // },
];

// ─── i2: Konjunktiv II ────────────────────────────────────────────────────────

export const KONJ6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konjunktiv II",
    // TODO
  },
};

export const KONJ6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i3: Infinitiv mit zu ─────────────────────────────────────────────────────

export const INF6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv mit zu",
    // TODO
  },
};

export const INF6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i4: Synonyme & Antonyme ──────────────────────────────────────────────────

export const SYN6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Synonyme & Antonyme",
    // TODO
  },
};

export const SYN6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i5: Fremdwörter ──────────────────────────────────────────────────────────

export const FREMD6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Fremdwörter",
    // TODO
  },
};

export const FREMD6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i6: Relativsatz & Kausalsatz ────────────────────────────────────────────

export const REL6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Relativsatz & Kausalsatz",
    // TODO
  },
};

export const REL6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i7: Wortbildung ──────────────────────────────────────────────────────────

export const WORT6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortbildung",
    // TODO
  },
};

export const WORT6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i8: Zeichensetzung ───────────────────────────────────────────────────────

export const ZEICHEN6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeichensetzung",
    // TODO
  },
};

export const ZEICHEN6_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i9: Große Prüfung ────────────────────────────────────────────────────────

export const EXAM6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung",
    // TODO: gemischte Topics aus allen K6-Inseln
  },
};

export const EXAM6_POOL: PoolTopicDef[] = [
  // TODO
];
