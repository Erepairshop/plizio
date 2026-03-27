// lib/explorerPools/deutschK3.ts
// ASTRODEUTSCH K3 — Klasse 3 (8-9 Jahre)
// LANGUAGE: nur Deutsch (de)
// POOL SIZE: 7-10 topics per island
// DIFFICULTY: easy / medium / hard

// K3 empfohlene Interactive Types (mehr Variation als K2!):
//   highlight-text, drag-to-bucket, match-pairs, gap-fill,
//   sentence-build, word-order, physics-bucket, physics-magnet

// QUIZ — Generator verwenden wo möglich:
//   "plural"              → Singular→Plural
//   "verben_k3"           → Verb Konjugation (ich/du/er/wir)
//   "adjektive_gegenteil" → Adjektiv Gegenteil
//   "praeteritum"         → Präteritum Formen
//   "perfekt"             → Perfekt (hat/ist + Partizip)
//   "satzzeichen_k1"      → Satzzeichen . ? !
//   "artikel_k2"          → der/die/das (Wiederholung)
//   "nomen_k2"            → Nomen erkennen
//   Kein passender Generator → kézi: { question: "t1_q", choices: [...], answer: "t1_qa" }

import type { PoolTopicDef } from "./types";

// ── i1 — Pluralinsel ─────────────────────────────────────────────────────────
// Thema: Pluralformen (-e, -er, -en, -s, Umlaut)
// SVG: two-groups (Singular/Plural), icon-grid (Bilder+Plural), word-display

// export const PLURAL_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const PLURAL_POOL: PoolTopicDef[] = [ ... ];

// ── i2 — Verbinsel ───────────────────────────────────────────────────────────
// Thema: Verbkonjugation Präsens (ich laufe, du läufst...), starke/schwache Verben
// SVG: sentence-display (Ich ___ gerne.), text-bubbles (ich/du/er Formen), icon-grid
// Quiz: { generate: "verben_k3" }

// export const VERB3_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const VERB3_POOL: PoolTopicDef[] = [ ... ];

// ── i3 — Steigerungsinsel ────────────────────────────────────────────────────
// Thema: Adjektiv Steigerung (groß → größer → am größten)
// SVG: letter-pairs ([groß, größer], [größer, am größten]), text-bubbles
// Quiz: { generate: "adjektive_gegenteil" }

// export const STEIGER_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const STEIGER_POOL: PoolTopicDef[] = [ ... ];

// ── i4 — Satzgliederinsel ────────────────────────────────────────────────────
// Thema: Subjekt, Prädikat, Objekt erkennen
// SVG: sentence-display (Satz mit Highlighting), two-groups (Satzglied/kein Satzglied)
// Quiz: kézi (nincs generátor Satzgliederhez)

// export const SATZGLIED_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SATZGLIED_POOL: PoolTopicDef[] = [ ... ];

// ── i5 — Zeitformeninsel ─────────────────────────────────────────────────────
// Thema: Präsens vs. Präteritum vs. Perfekt (Überblick)
// SVG: three-column text-bubbles (Präsens/Präteritum/Perfekt), sentence-display
// Quiz: { generate: "praeteritum" } oder { generate: "perfekt" }

// export const ZEITFORM_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ZEITFORM_POOL: PoolTopicDef[] = [ ... ];

// ── i6 — Vergangenheitsinsel ─────────────────────────────────────────────────
// Thema: Präteritum (war, hatte, ging...) + Perfekt (hat gespielt, ist gelaufen)
// SVG: compound-word (spielen → hat gespielt), text-bubbles (hat/ist + Partizip)
// Quiz: { generate: "perfekt" }

// export const VERGANGEN_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const VERGANGEN_POOL: PoolTopicDef[] = [ ... ];

// ── i7 — Schreibungsinsel ────────────────────────────────────────────────────
// Thema: ie/ei, Doppelkonsonanten, Dehnung-h, Wörter mit v/f
// SVG: letter-circles (ie, ei, qu, v), word-display (mit Highlighting), two-groups
// Quiz: kézi oder { generate: "satzzeichen_k1" }

// export const SCHREIB_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SCHREIB_POOL: PoolTopicDef[] = [ ... ];

// ── i8 — Zeichensetzungsinsel ────────────────────────────────────────────────
// Thema: Komma bei Aufzählungen, direkte Rede, Satzzeichen Wiederholung
// SVG: sentence-display (Komma markiert), text-bubbles (. , ! ? " ")
// Quiz: { generate: "satzzeichen_k1" }

// export const ZEICHEN_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ZEICHEN_POOL: PoolTopicDef[] = [ ... ];

// ── i9 — Große Prüfung K3 ───────────────────────────────────────────────────
// Thema: Wiederholung aller K3-Themen (Plural, Verben, Steigerung, Zeitformen)
// SVG: simple-icon (🌟), icon-grid (mix K3 Themen)
// Quiz: mix — { generate: "plural" }, { generate: "verben_k3" }, { generate: "perfekt" }

// export const EXAM3_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const EXAM3_POOL: PoolTopicDef[] = [ ... ];
