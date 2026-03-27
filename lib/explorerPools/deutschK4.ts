// lib/explorerPools/deutschK4.ts
// ASTRODEUTSCH K4 — Klasse 4 (9-10 Jahre)
// LANGUAGE: nur Deutsch (de)
// POOL SIZE: 7-10 topics per island
// DIFFICULTY: easy / medium / hard

// K4 Interactive Types (volle Palette!):
//   highlight-text, drag-to-bucket, match-pairs, gap-fill,
//   sentence-build, word-order, physics-bucket, physics-magnet,
//   physics-slingshot, physics-stacker

// QUIZ — Generator verwenden:
//   "nominativ"           → Nominativ Kasus
//   "akkusativ"           → Akkusativ Kasus
//   "dativ"               → Dativ Kasus
//   "genitiv"             → Genitiv Kasus
//   "praeteritum"         → Präteritum Formen
//   "perfekt"             → Perfekt (hat/ist + Partizip)
//   "plural"              → Singular→Plural
//   "verben_k3"           → Verbkonjugation
//   "adjektive_gegenteil" → Adjektiv Steigerung
//   "satzzeichen_k1"      → Satzzeichen
//   "artikel_k2"          → der/die/das

import type { PoolTopicDef } from "./types";

// ── i1 — Kasusinsel (Nominativ & Akkusativ) ──────────────────────────────────
// Thema: Nominativ (Wer?) und Akkusativ (Wen?) erkennen und anwenden
// SVG: sentence-display (Der Hund beißt den Mann.), two-groups (Nom/Akk),
//      text-bubbles (der→den, die→die, das→das)
// Quiz: { generate: "nominativ" } oder { generate: "akkusativ" }

// export const KASUS_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const KASUS_POOL: PoolTopicDef[] = [ ... ];

// ── i2 — Dativinsel ──────────────────────────────────────────────────────────
// Thema: Dativ (Wem?) — dem/der/dem, Präpositionen mit Dativ (mit, bei, nach...)
// SVG: text-bubbles (dem/der/dem), sentence-display, icon-grid (Präpositionen)
// Quiz: { generate: "dativ" }

// export const DATIV_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const DATIV_POOL: PoolTopicDef[] = [ ... ];

// ── i3 — Zeitformeninsel ─────────────────────────────────────────────────────
// Thema: Präsens, Präteritum, Perfekt, Futur I (werden + Infinitiv)
// SVG: two-groups (hat/ist Perfekt), sentence-display, text-bubbles (Futur: wird spielen)
// Quiz: { generate: "praeteritum" } oder { generate: "perfekt" }

// export const ZEITFORM4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ZEITFORM4_POOL: PoolTopicDef[] = [ ... ];

// ── i4 — Wortarteninsel ──────────────────────────────────────────────────────
// Thema: Nomen, Verb, Adjektiv, Pronomen, Präposition — alle Wortarten K4
// SVG: icon-grid (Wortarten), two-groups (Nomen/Verb/Adjektiv), drag-to-bucket
// Quiz: { generate: "nomen_k2" } oder { generate: "verben_k3" }

// export const WORTART_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const WORTART_POOL: PoolTopicDef[] = [ ... ];

// ── i5 — Satzgliederinsel ────────────────────────────────────────────────────
// Thema: Subjekt, Prädikat, Objekt (Akk/Dat), Adverbiale Bestimmung
// SVG: sentence-display (farbig markiert), two-groups (Satzglied / kein Satzglied)
// Quiz: kézi (nincs direkt generátor)

// export const SATZGLIED4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SATZGLIED4_POOL: PoolTopicDef[] = [ ... ];

// ── i6 — Satzarteninsel ──────────────────────────────────────────────────────
// Thema: Haupt- und Nebensatz, Konjunktionen (weil, dass, wenn, obwohl)
// SVG: sentence-display (Nebensatz hervorgehoben), compound-word (HS + NS)
// Quiz: kézi (Konjunktionen + Satzbau)

// export const SATZART4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SATZART4_POOL: PoolTopicDef[] = [ ... ];

// ── i7 — Verbeninsel (Trennbare Verben & Futur) ──────────────────────────────
// Thema: Trennbare Verben (aufmachen → macht auf), Futur I (wird spielen)
// SVG: compound-word (auf+machen), sentence-display (Er macht die Tür auf.)
// Quiz: { generate: "verben_k3" }

// export const VERB4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const VERB4_POOL: PoolTopicDef[] = [ ... ];

// ── i8 — Rechtschreibungsinsel ───────────────────────────────────────────────
// Thema: das/dass, ä/äu vs. e/eu, Komma bei Aufzählungen, ß/ss, Silbentrennung
// SVG: word-display (das vs dass), letter-pairs, sentence-display (Komma markiert)
// Quiz: { generate: "satzzeichen_k1" } oder kézi (das/dass)

// export const RECHT4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const RECHT4_POOL: PoolTopicDef[] = [ ... ];

// ── i9 — Große Prüfung K4 ───────────────────────────────────────────────────
// Thema: Wiederholung Kasus, Zeitformen, Wortarten, Rechtschreibung
// SVG: simple-icon (🌟), icon-grid (K4 Themen Mix)
// Quiz: mix — { generate: "nominativ" }, { generate: "perfekt" }, { generate: "plural" }

// export const EXAM4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const EXAM4_POOL: PoolTopicDef[] = [ ... ];
