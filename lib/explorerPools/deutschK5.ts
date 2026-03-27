// lib/explorerPools/deutschK5.ts
// ASTRODEUTSCH K5 — Klasse 5 (10-11 Jahre)
// LANGUAGE: nur Deutsch (de)
// POOL SIZE: 7-10 topics per island
// DIFFICULTY: easy / medium / hard

// K5 Interactive Types — volle Palette, Physics empfohlen ab K5:
//   highlight-text, drag-to-bucket, match-pairs, gap-fill,
//   sentence-build, word-order, physics-bucket, physics-magnet,
//   physics-slingshot, physics-stacker

// physics-magnet:    pairs: [{ left: "t1_l1", right: "t1_r1" }, ...]
// physics-slingshot: question: "t1_q", targets: [{ id: "id1", text: "t1_t1", isCorrect: true }, ...]
// physics-stacker:   words: ["t1_w1","t1_w2","t1_w3"], correctOrder: [0,1,2]
// physics-bucket:    buckets: [{id:"b1",label:"t1_b1"},...], items: [{text:"t1_i1",bucketId:"b1"},...]

// QUIZ — Generator verwenden:
//   "steigerung"          → Komparativ & Superlativ
//   "adjektive_gegenteil" → Adjektiv Gegenteil
//   "nominativ"           → Nominativ
//   "akkusativ"           → Akkusativ
//   "dativ"               → Dativ
//   "genitiv"             → Genitiv
//   "praeteritum"         → Präteritum
//   "perfekt"             → Perfekt
//   "plural"              → Plural
//   "verben_k3"           → Verbkonjugation
//   "synonyme"            → Synonyme
//   "antonyme"            → Antonyme
//   "satzzeichen_k1"      → Satzzeichen

import type { PoolTopicDef } from "./types";

// ── i1 — Adjektive & Steigerung (📊, #3B82F6) ───────────────────────────────
// Thema: Komparativ, Superlativ, attributive Adjektive (der große Hund)
// SVG: letter-pairs ([groß, größer], [größer, am größten]), text-bubbles, sentence-display
// Quiz: { generate: "steigerung" }

// export const ADJEKTIV5_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ADJEKTIV5_POOL: PoolTopicDef[] = [ ... ];

// ── i2 — Pronomen (👤, #EF4444) ─────────────────────────────────────────────
// Thema: Personal-, Possessiv-, Reflexivpronomen (ich/mir/mich, mein/dein...)
// SVG: two-groups (Personalpron./Possessivpron.), text-bubbles (ich→mir→mich)
// Quiz: { generate: "nominativ" }

// export const PRONOMEN_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const PRONOMEN_POOL: PoolTopicDef[] = [ ... ];

// ── i3 — Präpositionen & Konjunktionen (🔗, #10B981) ────────────────────────
// Thema: Präpositionen mit Dativ/Akkusativ, koordinierende/subordinierende Konj.
// SVG: icon-grid (Präpositionen), two-groups (Dativ/Akkusativ Präp.), sentence-display
// Quiz: { generate: "dativ" }

// export const PRAEP_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const PRAEP_POOL: PoolTopicDef[] = [ ... ];

// ── i4 — Satzglieder (🔬, #F59E0B) ─────────────────────────────────────────
// Thema: Subjekt, Prädikat, Objekte (Nom/Akk/Dat), Adverbialbestimmungen
// SVG: sentence-display (farbig markiert), two-groups
// Quiz: kézi (nincs direkt generátor)

// export const SATZGLIED5_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SATZGLIED5_POOL: PoolTopicDef[] = [ ... ];

// ── i5 — Zeichensetzung (📌, #6366F1) ───────────────────────────────────────
// Thema: Komma bei Nebensätzen, Aufzählungen, direkter Rede, Semikolon
// SVG: sentence-display (Komma markiert), text-bubbles (, ; : ! ?)
// Quiz: { generate: "satzzeichen_k1" }

// export const ZEICHEN5_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ZEICHEN5_POOL: PoolTopicDef[] = [ ... ];

// ── i6 — Partizip & Plusquamperfekt (📜, #EC4899) ───────────────────────────
// Thema: Partizip I/II, Plusquamperfekt (hatte gespielt, war gelaufen)
// SVG: compound-word (spielen → hatte gespielt), text-bubbles (hatte/war + Part.II)
// Quiz: { generate: "perfekt" }

// export const PARTIZIP_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const PARTIZIP_POOL: PoolTopicDef[] = [ ... ];

// ── i7 — Passiv (🔄, #14B8A6) ───────────────────────────────────────────────
// Thema: Vorgangspassiv (wird gebaut), Zustandspassiv (ist gebaut)
// SVG: sentence-display (Aktiv→Passiv), two-groups (Aktiv/Passiv)
// Quiz: kézi (Aktiv→Passiv Umformung)

// export const PASSIV_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const PASSIV_POOL: PoolTopicDef[] = [ ... ];

// ── i8 — Rechtschreibung & Wortschatz (📚, #A855F7) ─────────────────────────
// Thema: Fremdwörter, Synonyme, Antonyme, schwierige Wörter (Rhythmus, Philosophie)
// SVG: word-display, text-bubbles, icon-grid (Synonym-Paare)
// Quiz: { generate: "synonyme" } oder { generate: "antonyme" }

// export const WORTSCHATZ5_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const WORTSCHATZ5_POOL: PoolTopicDef[] = [ ... ];

// ── i9 — Große Prüfung K5 (🌟, #4ECDC4) ────────────────────────────────────
// Thema: Wiederholung aller K5-Themen
// SVG: simple-icon (🌟), icon-grid (K5 Mix)
// Quiz: mix — { generate: "steigerung" }, { generate: "perfekt" }, { generate: "synonyme" }

// export const EXAM5_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const EXAM5_POOL: PoolTopicDef[] = [ ... ];
