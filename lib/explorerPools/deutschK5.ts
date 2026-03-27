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

// lib/explorerPools/deutschK5.ts
// ASTRODEUTSCH K5 — Klasse 5 (10-11 Jahre)
// ─────────────────────────────────────────────────────────────────────────────


// ── i1 — Adjektive & Steigerung (📊, #3B82F6) ───────────────────────────────
// Thema: Komparativ, Superlativ, attributive Adjektive
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Adjektive & Steigerung (📊, #3B82F6)
// Thema: Komparativ, Superlativ, attributive Adjektive, Vergleiche
// ─────────────────────────────────────────────────────────────────────────────

export const ADJEKTIV5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Adjektiv-Akademie",
    
    // T1: Basic Steigerung
    t1_title: "Steigerungs-Leiter",
    t1_text: "Adjektive kann man steigern: Grundform, Komparativ (+er) und Superlativ (am ...sten).",
    t1_inst: "Staple die Adjektive in der richtigen Reihenfolge (stark -> am stärksten)!",
    t1_h1: "Beginne mit der einfachsten Form.", t1_h2: "stark -> stärker -> am stärksten.",
    t1_w1: "stark", t1_w2: "stärker", t1_w3: "am stärksten",

    // T2: Unregelmäßig
    t2_title: "Spezial-Steigerung",
    t2_text: "Einige Wörter ändern sich beim Steigern komplett. Das sind die Unregelmäßigen.",
    t2_inst: "Verbinde die Grundform mit ihrem Komparativ!",
    t2_h1: "Viel wird zu mehr.", t2_h2: "Gut wird zu besser.",
    t2_l1: "gut", t2_r1: "besser", t2_l2: "viel", t2_r2: "mehr", t2_l3: "hoch", t2_r3: "höher", t2_l4: "nah", t2_r4: "näher",

    // T3: Attributiv
    t3_title: "Adjektiv-Endungen",
    t3_text: "Vor einem Nomen bekommt das Adjektiv eine Endung: 'Ein schönES Haus'.",
    t3_inst: "Welche Endung passt in die Lücke?",
    t3_h1: "Der Hund ist maskulin (der).", t3_h2: "Ein treuER Hund.",
    t3_sent: "Ich habe einen ___ Hund.",
    t3_c1: "treuen", t3_c2: "treuer", t3_c3: "treue", t3_c4: "treuem",

    // T4: Slingshot Superlativ
    t4_title: "Superlativ-Schleuder",
    t4_text: "Schieße auf alle Wörter, die im Superlativ (höchste Stufe) stehen!",
    t4_inst: "Triff nur die Superlative!",
    t4_h1: "Suche nach 'am' und '-sten'.", t4_h2: "am kleinsten, am klügsten.",
    t4_q: "Welche Ziele sind Superlative?",
    t4_t1: "am kleinsten", t4_t2: "am klügsten", t4_t3: "schneller", t4_t4: "gut",

    // T5: Adjektiv vs. Adverb
    t5_title: "Wie oder Was?",
    t5_text: "Adjektive können Nomen beschreiben vagy Verben (wie man etwas tut).",
    t5_inst: "Sortiere die Wörter: Beschreibt es ein Nomen oder ein Verb?",
    t5_h1: "Adjektiv vor Nomen braucht Endung.", t5_h2: "Adverb beim Verb bleibt starr.",
    t5_b1: "beim Nomen (schöner...)", t5_b2: "beim Verb (schön...)",
    t5_i1: "ein schneller Lauf", t5_i2: "er rennt schnell", t5_i3: "das gute Essen", t5_i4: "sie kocht gut",

    // T6: Vergleich mit "als"
    t6_title: "Schneller als...",
    t6_text: "Beim Vergleichen mit dem Komparativ benutzen wir immer 'als'.",
    t6_inst: "Baue den Vergleichs-Satz!",
    t6_h1: "A ist schneller als B.", t6_h2: "Der Zug ist schneller als das Rad.",
    t6_f1: "Der Zug", t6_f2: "ist", t6_f3: "schneller", t6_f4: "als das Rad.",

    // T7: Magnet Gegenteile
    t7_title: "Gegenteil-Magnet",
    t7_text: "Finde die Paare, die das genaue Gegenteil bedeuten!",
    t7_inst: "Bilde Paare mit dem Magneten!",
    t7_h1: "Was ist das Gegenteil von laut?", t7_h2: "Laut und leise.",
    t7_l1: "laut", t7_r1: "leise", t7_l2: "hell", t7_r2: "dunkel", t7_l3: "hart", t7_r3: "weich",

    // T8: Vergleich mit "wie"
    t8_title: "Genauso wie...",
    t8_text: "Sind zwei Dinge gleich, benutzen wir 'so ... wie'.",
    t8_inst: "Vervollständige den Satz!",
    t8_h1: "Benutze 'so' und 'wie'.", t8_h2: "Ich bin so groß wie du.",
    t8_sent_w: "Ich bin ___ ___ du.",
    t8_cw1: "so groß wie", t8_cw2: "größer als", t8_cw3: "am größten", t8_cw4: "groß",
  }
};

export const ADJEKTIV5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📊", title: "Steigerung", bg: "#EFF6FF" },
    interactive: { type: "physics-stacker", words: ["t1_w1", "t1_w2", "t1_w3"], correctOrder: [0, 1, 2], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["viel", "mehr"], ["gut", "besser"]], color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }, { left: "t2_l4", right: "t2_r4" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-display", words: ["ein", "treuer", "Hund"], highlightIndices: [1], color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Superlativ", bg: "#DBEAFE" },
    interactive: { type: "physics-slingshot", question: "t4_q", targets: [{ id: "1", text: "t4_t1", isCorrect: true }, { id: "2", text: "t4_t2", isCorrect: true }, { id: "3", text: "t4_t3", isCorrect: false }, { id: "4", text: "t4_t4", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["der gute..."], bg: "#DBEAFE", border: "#DBEAFE" }, right: { items: ["er isst gut"], bg: "#EFF6FF", border: "#EFF6FF" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "n", label: "t5_b1" }, { id: "v", label: "t5_b2" }], items: [{ text: "t5_i1", bucketId: "n" }, { text: "t5_i2", bucketId: "v" }, { text: "t5_i3", bucketId: "n" }, { text: "t5_i4", bucketId: "v" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["schneller", "als"], color: "#1D4ED8" },
    interactive: { type: "sentence-build", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Magnet-Check", bg: "#BFDBFE" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }, { left: "t7_l3", right: "t7_r3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "adjektive_gegenteil" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "so ... wie", bg: "#DBEAFE", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent_w", choices: ["t8_cw1", "t8_cw2", "t8_cw3", "t8_cw4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "steigerung" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Pronomen (👤, #EF4444)
// Thema: Personal-, Possessiv-, Reflexivpronomen, Kasus
// ─────────────────────────────────────────────────────────────────────────────

export const PRONOMEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pronomen-Palast",

    // T1: Personal Nom
    t1_title: "Wer tut es?",
    t1_text: "Personalpronomen ersetzen Nomen: ich, du, er, sie, es, wir, ihr, sie.",
    t1_inst: "Welches Pronomen ersetzt 'Der Vater'?",
    t1_h1: "Der Vater ist eine männliche Person.", t1_h2: "Er ist die richtige Wahl.",
    t1_sent: "___ arbeitet im Garten.",
    t1_c1: "Er", t1_c2: "Sie", t1_c3: "Es", t1_c4: "Wir",

    // T2: Akk/Dat Match
    t2_title: "Fälle der Pronomen",
    t2_text: "Pronomen ändern sich in den Fällen: ich (Nom) -> mich (Akk) -> mir (Dat).",
    t2_inst: "Verbinde Nominativ und Dativ!",
    t2_h1: "Ich wird zu mir.", t2_h2: "Du wird zu dir.",
    t2_l1: "ich", t2_r1: "mir", t2_l2: "du", t2_r2: "dir", t2_l3: "er", t2_r3: "ihm", t2_l4: "wir", t2_r4: "uns",

    // T3: Possessiv
    t3_title: "Wem gehört es?",
    t3_text: "Possessivpronomen zeigen den Besitz: mein, dein, sein...",
    t3_inst: "Fülle die Lücke mit dem richtigen Besitzwort!",
    t3_h1: "Das Buch gehört mir.", t3_h2: "Es ist MEIN Buch.",
    t3_sent_p: "Das ist ___ Buch.",
    t3_cp1: "mein", t3_cp2: "dein", t3_cp3: "sein", t3_cp4: "euer",

    // T4: Reflexiv Slingshot
    t4_title: "Sich-Schleuder",
    t4_text: "Reflexivpronomen beziehen sich auf das Subjekt zurück: mich, dich, sich...",
    t4_inst: "Triff alle Reflexivpronomen!",
    t4_h1: "Suche nach Wörtern wie 'mich' vagy 'sich'.", t4_h2: "mich, dich, sich, uns.",
    t4_q: "Welche Ziele sind Reflexivpronomen?",
    t4_t1: "mich", t4_t2: "sich", t4_t3: "baue", t4_t4: "Haus",

    // T5: Bucket Sort
    t5_title: "Pronomen-Eimer",
    t5_text: "Sortiere Personalpronomen (Personen) und Possessivpronomen (Besitz).",
    t5_inst: "Wirf die Wörter in den richtigen Eimer!",
    t5_h1: "Ich, wir = Personal.", t5_h2: "Mein, unser = Possessiv.",
    t5_b1: "Personal 👤", t5_b2: "Possessiv 🏠",
    t5_i1: "ich", t5_i2: "mein", t5_i3: "wir", t5_i4: "unser",

    // T6: Demonstrativ Highlight
    t6_title: "Fingerzeig-Wörter",
    t6_text: "Demonstrativpronomen zeigen auf etwas Bestimmtes: dieser, jener.",
    t6_inst: "Markiere das Demonstrativpronomen!",
    t6_h1: "Suche nach einem Wort, das 'dieser' bedeutet.", t6_h2: "Dieses Haus dort.",
    t6_w1: "Dieses", t6_w2: "Haus", t6_w3: "ist", t6_w4: "sehr", t6_w5: "alt",

    // T7: Sentence Build
    t7_title: "Pronomen-Baumeister",
    t7_text: "Baue einen Satz mit einem Dativ-Pronomen (Wem?).",
    t7_inst: "Bringe die Satzteile in Ordnung!",
    t7_h1: "Er gibt wem (mir) was (das Buch).", t7_h2: "Er gibt mir das Buch.",
    t7_f1: "Er", t7_f2: "gibt", t7_f3: "mir", t7_f4: "das Buch.",

    // T8: Verb Agreement
    t8_title: "Passende Endung",
    t8_text: "Das Verb muss zum Pronomen passen: ich lerne, du lernst.",
    t8_inst: "Wähle das passende Verb!",
    t8_h1: "Bei 'ihr' endet das Verb auf -t.", t8_h2: "Ihr lernT.",
    t8_sent_v: "Ihr ___ heute viel.",
    t8_cv1: "lernt", t8_cv2: "lernen", t8_cv3: "lernst", t8_cv4: "lerne",
  }
};

export const PRONOMEN_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "article-noun", article: "Er", articleColor: "#065F46", noun: "Vater", emoji: "👨" },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-circles", letters: ["ich", "mich", "mir"], color: "#EF4444" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }, { left: "t2_l4", right: "t2_r4" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "mein / dein", bg: "#FEE2E2", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t3_sent_p", choices: ["t3_cp1", "t3_cp2", "t3_cp3", "t3_cp4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🚀", title: "Reflexiv", bg: "#FEE2E2" },
    interactive: { type: "physics-slingshot", question: "t4_q", targets: [{ id: "1", text: "t4_t1", isCorrect: true }, { id: "2", text: "t4_t2", isCorrect: true }, { id: "3", text: "t4_t3", isCorrect: false }, { id: "4", text: "t4_t4", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["ich", "du"], bg: "#FEE2E2", border: "#FEE2E2" }, right: { items: ["mein", "sein"], bg: "#FEF2F2", border: "#FEF2F2" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "per", label: "t5_b1" }, { id: "pos", label: "t5_b2" }], items: [{ text: "t5_i1", bucketId: "per" }, { text: "t5_i2", bucketId: "pos" }, { text: "t5_i3", bucketId: "per" }, { text: "t5_i4", bucketId: "pos" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Dieses", "Haus"], color: "#DC2626" },
    interactive: { type: "highlight-text", tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4", "t6_w5"], correctIndices: [0], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", title: "Baumeister", bg: "#FEE2E2" },
    interactive: { type: "sentence-build", fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "ihr lernt", bg: "#FEE2E2", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent_v", choices: ["t8_cv1", "t8_cv2", "t8_cv3", "t8_cv4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "verben_k3" }
  }
];

          // ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Präpositionen & Konjunktionen (🔗, #10B981)
// Thema: Wechselpräpositionen (Wo/Wohin), ADUSO & Nebensatz-Konjunktionen
// ─────────────────────────────────────────────────────────────────────────────

export const PRAEP_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Bindeglied-Basis",

    // T1: Wechselpräpositionen Dativ (Wo?)
    t1_title: "Feste Orte (Dativ)",
    t1_text: "Fragst du 'Wo?' (Ort), folgt nach in, auf, unter, hinter... der Dativ.",
    t1_inst: "Welches Nomen im Dativ passt hier?",
    t1_h1: "Frage: Wo liegt das Buch? (auf + dem...)", t1_h2: "auf dem Tisch.",
    t1_sent: "Das Buch liegt auf ___.",
    t1_c1: "dem Tisch", t1_c2: "den Tisch", t1_c3: "der Tisch", t1_c4: "des Tisches",

    // T2: Wechselpräpositionen Akkusativ (Wohin?)
    t2_title: "Bewegung (Akkusativ)",
    t2_text: "Fragst du 'Wohin?' (Richtung), folgt nach den Wechselpräpositionen der Akkusativ.",
    t2_inst: "Fülle die Lücke mit dem Akkusativ!",
    t2_h1: "Frage: Wohin lege ich das Buch? (auf + den...)", t2_h2: "auf den Tisch.",
    t2_sent_a: "Ich lege das Buch auf ___.",
    t2_ca1: "den Tisch", t2_ca2: "dem Tisch", t2_ca3: "der Tisch", t2_ca4: "das Tisch",

    // T3: ADUSO (Koordinierend)
    t3_title: "Satz-Kleber (ADUSO)",
    t3_text: "ADUSO-Konjunktionen (Aber, Denn, Und, Sondern, Oder) verbinden Sätze, ohne die Wortfolge zu ändern.",
    t3_inst: "Verbinde die passenden Satzhälften!",
    t3_h1: "Denn erklärt einen Grund, Aber einen Gegensatz.", t3_h2: "Ich bleibe hier, denn es regnet.",
    t3_l1: "Ich komme mit,", t3_r1: "aber ich bin müde.",
    t3_l2: "Ich esse nichts,", t3_r2: "denn ich bin satt.",
    t3_l3: "Du spielst Klavier", t3_r3: "oder du liest ein Buch.",
    t3_l4: "Er mag Äpfel", t3_r4: "und er mag Birnen.",

    // T4: Weil (Nebensatz)
    t4_title: "Der Weil-Satz",
    t4_text: "Das Wort 'weil' schickt das gebeugte Verb ganz ans Ende des Satzes.",
    t4_inst: "Baue den Nebensatz richtig zusammen!",
    t4_h1: "Das Verb 'ist' kommt an den Schluss.", t4_h2: "... weil es heute warm 'ist'.",
    t4_o1: "weil", t4_o2: "es", t4_o3: "heute", t4_o4: "warm ist.",

    // T5: Dass (Nebensatz)
    t5_title: "Die dass-Verbindung",
    t5_text: "Nach Verben des Wissens oder Sagens (ich weiß, ich hoffe) folgt oft ein Nebensatz mit 'dass'.",
    t5_inst: "Welches Wort fehlt hier?",
    t5_h1: "Es leitet den Gedanken ein.", t5_h2: "Ich hoffe, 'dass' wir gewinnen.",
    t5_sent_d: "Ich weiß, ___ du kommen willst.",
    t5_cd1: "dass", t5_cd2: "das", t5_cd3: "weil", t5_cd4: "wenn",

    // T6: Slingshot: Konjunktionen
    t6_title: "Bindewort-Jäger",
    t6_text: "Schieße auf alle Wörter, die zwei Sätze miteinander verbinden können!",
    t6_inst: "Triff nur die Konjunktionen!",
    t6_h1: "Suche nach Wörtern wie 'wenn', 'obwohl', 'weil'.", t6_h2: "obwohl, wenn, damit, dass.",
    t6_q: "Welche Ziele sind Konjunktionen?",
    t6_t1: "obwohl", t6_t2: "damit", t6_t3: "schön", t6_t4: "schnell",

    // T7: Präpositionen mit Dativ (feste)
    t7_title: "Dativ-Starter",
    t7_text: "Es gibt Wörter, nach denen immer der Dativ kommt: Aus, bei, mit, nach, von, zu.",
    t7_inst: "Bilde Paare mit dem Magneten!",
    t7_h1: "Mit wem? Von wem?", t7_h2: "mit dem Freund, von der Schule.",
    t7_ml1: "mit", t7_mr1: "dem Freund", t7_ml2: "von", t7_mr2: "der Schule", t7_ml3: "zu", t7_mr3: "dem Arzt",

    // T8: Präpositionen Bucket (Nom/Dat)
    t8_title: "Fall-Sortierer",
    t8_text: "Sortiere, ob nach der Präposition Dativ (Wo?) oder Akkusativ (Wohin?) folgt.",
    t8_inst: "Wirf die Pakete in den richtigen Eimer!",
    t8_h1: "Im Zimmer = Wo? In das Zimmer = Wohin?",
    t8_b1: "Dativ (Wo?)", t8_b2: "Akkusativ (Wohin?)",
    t8_i1: "im Haus", t8_i2: "hinter das Regal", t8_i3: "unter dem Baum", t8_i4: "auf den Berg",

    // T9: Obwohl (Gegensatz)
    t9_title: "Das Hindernis (Obwohl)",
    t9_text: "Das Wort 'obwohl' verbindet einen Grund mit einer unerwarteten Handlung.",
    t9_inst: "Welche Konjunktion passt hier?",
    t9_h1: "Es regnet, aber wir spielen trotzdem.", t9_h2: "Wähle 'obwohl'.",
    t9_sent_o: "___ es regnet, gehen wir raus.",
    t9_co1: "Obwohl", t9_co2: "Weil", t9_co3: "Dass", t9_co4: "Damit",
  }
};

export const PRAEP_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📍", title: "Wo?", bg: "#D1FAE5" },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🏃", title: "Wohin?", bg: "#DBEAFE" },
    interactive: { type: "gap-fill", sentence: "t2_sent_a", choices: ["t2_ca1", "t2_ca2", "t2_ca3", "t2_ca4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "akkusativ" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "aber / denn", bg: "#D1FAE5", color: "#1e293b" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }, { left: "t3_l4", right: "t3_r4" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["weil", "...", "ist"], color: "#059669" },
    interactive: { type: "sentence-build", fragments: ["t4_o1", "t4_o2", "t4_o3", "t4_o4"], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "dass", bg: "#D1FAE5", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t5_sent_d", choices: ["t5_cd1", "t5_cd2", "t5_cd3", "t5_cd4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔗", title: "Konjunktion", bg: "#ECFDF5" },
    interactive: { type: "physics-slingshot", question: "t6_q", targets: [{ id: "1", text: "t6_t1", isCorrect: true }, { id: "2", text: "t6_t2", isCorrect: true }, { id: "3", text: "t6_t3", isCorrect: false }, { id: "4", text: "t6_t4", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Dativ-Magnet", bg: "#D1FAE5" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["im Garten"], bg: "#D1FAE5", border: "#D1FAE5" }, right: { items: ["in den Garten"], bg: "#DBEAFE", border: "#DBEAFE" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "d", label: "t8_b1" }, { id: "a", label: "t8_b2" }], items: [{ text: "t8_i1", bucketId: "d" }, { text: "t8_i2", bucketId: "a" }, { text: "t8_i3", bucketId: "d" }, { text: "t8_i4", bucketId: "a" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "obwohl", bg: "#D1FAE5", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t9_sent_o", choices: ["t9_co1", "t9_co2", "t9_co3", "t9_co4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "satzzeichen_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Satzglieder (🔬, #F59E0B)
// Thema: Subjekt, Prädikat, Objekte (Nom/Akk/Dat/Gen), Adverbiale
// ─────────────────────────────────────────────────────────────────────────────

export const SATZGLIED5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzbau-Labor",

    // T1: Subjekt
    t1_title: "Der Satzgegenstand (Subjekt)",
    t1_text: "Das Subjekt sagt uns, WER oder WAS etwas tut. Es steht immer im Nominativ.",
    t1_inst: "Markiere das Subjekt im Satz!",
    t1_h1: "Frage: WER rennt über die Wiese?", t1_h2: "Das Pferd.",
    t1_w1: "Das Pferd", t1_w2: "rennt", t1_w3: "schnell", t1_w4: "über die Wiese",

    // T2: Prädikat
    t2_title: "Die Satzaussage (Prädikat)",
    t2_text: "Das Prädikat sagt uns, was das Subjekt TUT oder was passiert. Es ist immer ein Verb.",
    t2_inst: "Markiere das Prädikat!",
    t2_h1: "Frage: Was TUT die Katze?", t2_h2: "Sie schläft.",
    t2_w2_1: "Die Katze", t2_w2_2: "schläft", t2_w2_3: "auf dem Sofa", t2_w2_4: ".",

    // T3: Akkusativ-Objekt
    t3_title: "Das Akkusativ-Objekt",
    t3_text: "Wir fragen: WEN oder WAS sieht das Kind? Das Ziel der Handlung.",
    t3_inst: "Finde das Akkusativ-Objekt!",
    t3_h1: "Frage: Wen vagy was kauft der Junge?", t3_h2: "den Apfel.",
    t3_sent: "Der Junge kauft ___.",
    t3_c1: "den Apfel", t3_c2: "dem Apfel", t3_c3: "der Apfel", t3_c4: "des Apfels",

    // T4: Dativ-Objekt
    t4_title: "Das Dativ-Objekt",
    t4_text: "Wir fragen: WEM hilft das Mädchen? Oft eine Person, der geholfen wird.",
    t4_inst: "Welches Wort ist das Dativ-Objekt?",
    t4_h1: "Frage: WEM danke ich?", t4_h2: "dem Lehrer.",
    t4_sent_d: "Ich danke ___ herzlich.",
    t4_cd1: "dem Lehrer", t4_cd2: "den Lehrer", t4_cd3: "der Lehrer", t4_cd4: "des Lehrers",

    // T5: Genitiv-Objekt (K5)
    t5_title: "Wessen? (Genitiv-Objekt)",
    t5_text: "Das Genitiv-Objekt ist seltener. Wir fragen: WESSEN gedenken wir? Der Toten.",
    t5_inst: "Markiere das Genitiv-Objekt!",
    t5_h1: "Suche nach der Antwort auf 'Wessen?'.", t5_h2: "des Diebstahls.",
    t5_w5_1: "Er", t5_w5_2: "wird", t5_w5_3: "des Diebstahls", t5_w5_4: "beschuldigt", t5_w5_5: ".",

    // T6: Adverbiale Zeit
    t6_title: "Wann? (Temporal)",
    t6_text: "Die adverbiale Bestimmung der Zeit sagt uns, wann etwas passiert.",
    t6_inst: "Verbinde die Zeitangaben!",
    t6_h1: "Suche Wörter, die eine Zeit beschreiben.", t6_h2: "morgens, bald, am Montag.",
    t6_l1: "Wann?", t6_r1: "am Montag", t6_l2: "Wie lange?", t6_r2: "drei Stunden", t6_l3: "Wie oft?", t6_r3: "immer wieder",

    // T7: Adverbiale Ort
    t7_title: "Wo? (Lokal)",
    t7_text: "Die adverbiale Bestimmung des Ortes zeigt, wo oder wohin etwas geschieht.",
    t7_inst: "Finde den Ort im Satz!",
    t7_h1: "Frage: WO spielt Tim?", t7_h2: "im Park.",
    t7_w7_1: "Tim", t7_w7_2: "spielt", t7_w7_3: "im Park", t7_w7_4: "Fußball", t7_w7_5: ".",

    // T8: Stacker: Satzbau
    t8_title: "Satzbau-Architekt",
    t8_text: "Baue den Satz in der Reihenfolge: Subjekt, Prädikat, Objekt, Adverbiale.",
    t8_inst: "Staple die Satzglieder richtig!",
    t8_h1: "Wer (Lisa) macht was (liest) was (ein Buch) wann (heute)?", t8_h2: "Lisa liest heute ein Buch.",
    t8_o1: "Lisa", t8_o2: "liest", t8_o3: "heute", t8_o4: "ein Buch.",

    // T9: Adverbiale Art/Grund
    t9_title: "Wie & Warum?",
    t9_text: "Modalbestimmungen (Wie?) und Kausalbestimmungen (Warum?) erklären die Umstände.",
    t9_inst: "Sortiere in den richtigen Eimer!",
    t9_h1: "Fröhlich = Wie? Wegen des Regens = Warum?",
    t9_b1: "Wie? (Modal)", t9_b2: "Warum? (Kausal)",
    t9_i1: "fröhlich", t9_i2: "wegen der Kälte", t9_i3: "mit dem Rad", t9_i4: "aus Angst",
  }
};

export const SATZGLIED5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Das Pferd", "rennt"], highlightIndices: [0], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], correctIndices: [0], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "sentence-display", words: ["Die Katze", "schläft"], highlightIndices: [1], color: "#D97706" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📦", title: "Wen?", bg: "#FEF3C7" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "akkusativ" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Wem?", bg: "#FEF3C7" },
    interactive: { type: "gap-fill", sentence: "t4_sent_d", choices: ["t4_cd1", "t4_cd2", "t4_cd3", "t4_cd4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "Wessen?", color: "#92400E", bg: "#FEF3C7" }] },
    interactive: { type: "highlight-text", tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4", "t5_w5_5"], correctIndices: [2], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "genitiv" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕒", label: "Wann?" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "sentence-display", words: ["im Park"], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5"], correctIndices: [2], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏗️", title: "Satzbau", bg: "#FEF3C7" },
    interactive: { type: "physics-stacker", words: ["t8_o1", "t8_o2", "t8_o3", "t8_o4"], correctOrder: [0, 1, 2, 3], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Wie?"], bg: "#FFFBEB", border: "#FFFBEB" }, right: { items: ["Warum?"], bg: "#FEF3C7", border: "#FEF3C7" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "m", label: "t9_b1" }, { id: "k", label: "t9_b2" }], items: [{ text: "t9_i1", bucketId: "m" }, { text: "t9_i2", bucketId: "k" }, { text: "t9_i3", bucketId: "m" }, { text: "t9_i4", bucketId: "k" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "genitiv" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Zeichensetzung (📌, #6366F1)
// Thema: Komma bei Nebensätzen, Aufzählungen, Direkte Rede, Semikolon
// ─────────────────────────────────────────────────────────────────────────────

export const ZEICHEN5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzzeichen-Sektor",

    // T1: Komma bei weil/dass (Nebensatz)
    t1_title: "Vessző a kötőszó előtt",
    t1_text: "A németben a mellékmondatokat (weil, dass, wenn) MINDIG vesszővel választjuk el a főmondattól.",
    t1_inst: "Hova kell tenni a vesszőt?",
    t1_h1: "Keresd a kötőszót (weil).", t1_h2: "A vessző közvetlenül elé kerül.",
    t1_w1: "Ich lerne", t1_w2: "weil ich", t1_w3: "klug werden", t1_w4: "will",

    // T2: Komma bei Aufzählungen
    t2_title: "Felsorolás és vessző",
    t2_text: "Felsorolásnál vesszőt használunk, de az 'und' és 'oder' elé NEM teszünk vesszőt.",
    t2_inst: "Jelöld meg a hiányzó vesszőt!",
    t2_h1: "Sorold fel a gyümölcsöket.", t2_h2: "Apfel (vessző) Birne und...",
    t2_w2_1: "Ich mag Äpfel", t2_w2_2: "Birnen", t2_w2_3: "und Bananen", t2_w2_4: ".",

    // T3: Das Semikolon (;)
    t3_title: "A pontosvessző (;)",
    t3_text: "A pontosvessző erősebb a vesszőnél, de gyengébb a pontnál. Szoros kapcsolatban álló mondatokat köt össze.",
    t3_inst: "Melyik írásjel illik ide a legjobban?",
    t3_h1: "A két mondat összefügg, de mindkettő teljes.", t3_h2: "Használj pontosvesszőt (;).",
    t3_sent: "Draußen ist es dunkel ___ wir machen das Licht an.",
    t3_c1: ";", t3_c2: ",", t3_c3: "!", t3_c4: ":",

    // T4: Direkte Rede (Begleitsatz davor)
    t4_title: "Idézet (Mondat elején)",
    t4_text: "Ha a bevezető mondat elöl áll: Er sagt: „Ich komme.“",
    t4_inst: "Rakd össze az idézetet a helyes sorrendben!",
    t4_h1: "Bevezető mondat, kettőspont, idézőjel lent.", t4_h2: "Er sagt: „Komm mit!“",
    t4_f1: "Er sagt:", t4_f2: "„Komm", t4_f3: "schnell", t4_f4: "mit!“",

    // T5: Slingshot: Satzzeichen-Check
    t5_title: "Írásjel-vadászat",
    t5_text: "Csak azokat a mondatokat lődd le, ahol az írásjelek tökéletesek!",
    t5_inst: "Találd el a helyes mondatokat!",
    t5_h1: "Figyelj a vesszőre a 'dass' előtt.", t5_h2: "Check: Er weiß, dass...",
    t5_q: "Melyik mondat helyes?",
    t5_t1: "Er weiß, dass es regnet.", t5_t2: "Ich mag Brot, Käse und Tee.", t5_t3: "Sie sagt: „Hallo!“", t5_t4: "Ich komme weil, ich will. (Rossz)",

    // T6: Bucket: Komma vs. Kein Komma
    t6_title: "Vessző-kosár",
    t6_text: "Döntsd el, kell-e vessző az adott szó elé vagy sem!",
    t6_inst: "Dobáld a szavakat a megfelelő kosárba!",
    t6_h1: "weil, dass, aber -> KELL. und, oder -> NEM KELL.",
    t6_b1: "Kell vessző ( , )", t6_b2: "NEM kell vessző",
    t6_i1: "weil", t6_i2: "dass", t6_i3: "und", t6_i4: "oder",

    // T7: Magnet: Redezeichen
    t7_title: "Idézőjel-mágnes",
    t7_text: "Párosítsd össze a bevezető mondatot az idézettel!",
    t7_inst: "Használd a mágnest a párosításhoz!",
    t7_h1: "Keresd a kettőspontot és az idézőjelet.", t7_h2: "Sie ruft: -> „Hilfe!“",
    t7_ml1: "Er fragt:", t7_mr1: "„Wie geht es?“", t7_ml2: "Sie ruft:", t7_mr2: "„Komm her!“", t7_ml3: "Mama sagt:", t7_mr3: "„Iss auf!“",

    // T8: Stacker: Satzzeichen-Hierarchie
    t8_title: "Írásjel-torony",
    t8_text: "Rakd sorrendbe az írásjeleket erősség szerint (leggyengébbtől a legerősebbig)!",
    t8_inst: "Építs tornyot az erejük szerint!",
    t8_h1: "Vessző a leggyengébb, Pont a legerősebb.", t8_h2: "Vessző -> Pontosvessző -> Pont.",
    t8_sw1: "Komma (,)", t8_sw2: "Semikolon (;)", t8_sw3: "Punkt (.)",

    // T9: Gap-fill: Dass vs Das
    t9_title: "Das vagy Dass?",
    t9_text: "Vigyázat! A 'dass' kötőszó elé mindig kell vessző, a 'das' névelő elé csak ha mellékmondatot vezet be.",
    t9_inst: "Válaszd ki a helyes alakot!",
    t9_h1: "Ha 'azt' vagy 'hogy' a jelentése, akkor 'dass'.", t9_h2: "Ich hoffe, dass...",
    t9_sent_gap: "Ich hoffe, ___ du heute kommst.",
    t9_cg1: "dass", t9_cg2: "das", t9_cg3: "daß", t9_cg4: "des",
  }
};

export const ZEICHEN5_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Ich lerne", ",", "weil..."], highlightIndices: [1], color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], correctIndices: [1], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "A, B und C", bg: "#EEF2FF", color: "#1e293b" }] },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📌", title: "Semikolon", bg: "#E0E7FF" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Er sagt:", "„...“"], color: "#4F46E5" },
    interactive: { type: "sentence-build", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Check", bg: "#EEF2FF" },
    interactive: { type: "physics-slingshot", question: "t5_q", targets: [{ id: "1", text: "t5_t1", isCorrect: true }, { id: "2", text: "t5_t2", isCorrect: true }, { id: "3", text: "t5_t3", isCorrect: true }, { id: "4", text: "t5_t4", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: [","], bg: "#E0E7FF", border: "#E0E7FF" }, right: { items: ["X"], bg: "#EEF2FF", border: "#EEF2FF" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "y", label: "t6_b1" }, { id: "n", label: "t6_b2" }], items: [{ text: "t6_i1", bucketId: "y" }, { text: "t6_i2", bucketId: "y" }, { text: "t6_i3", bucketId: "n" }, { text: "t6_i4", bucketId: "n" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Rede", bg: "#E0E7FF" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Hierarchie", bg: "#EEF2FF" },
    interactive: { type: "physics-stacker", words: ["t8_sw1", "t8_sw2", "t8_sw3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "dass", color: "#4338CA" },
    interactive: { type: "gap-fill", sentence: "t9_sent_gap", choices: ["t9_cg1", "t9_cg2", "t9_cg3", "t9_cg4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "satzzeichen_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Partizip & Plusquamperfekt (📜, #EC4899)
// Thema: Partizip I (-d), Partizip II (ge-), Plusquamperfekt (hatte/war)
// ─────────────────────────────────────────────────────────────────────────────

export const PARTIZIP_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Archiv",

    // T1: Plusquamperfekt (hatte)
    t1_title: "A befejezett múlt előtti múlt",
    t1_text: "A Plusquamperfektet akkor használjuk, ha valami még a múltbeli esemény ELŐTT történt. Képzése: hatte + Partizip II.",
    t1_inst: "Válaszd ki a helyes Plusquamperfekt alakot!",
    t1_h1: "Keresd a 'hatte' segédigét.", t1_h2: "hatte + gespielt.",
    t1_sent: "Er ___ seine Hausaufgaben schon gemacht.",
    t1_c1: "hatte", t1_c2: "hat", t1_c3: "war", t1_c4: "wird",

    // T2: Plusquamperfekt (war)
    t2_title: "Mozgás és Plusquamperfekt",
    t2_text: "Mozgást kifejező igéknél a 'war' segédigét használjuk: war + Partizip II.",
    t2_inst: "Melyik segédige illik ide?",
    t2_h1: "A 'gehen' mozgást jelent.", t2_h2: "Tehát: war + gegangen.",
    t2_sent_w: "Wir ___ schon in den Park gegangen.",
    t2_cw1: "waren", t2_cw2: "hatten", t2_cw3: "sind", t2_cw4: "werden",

    // T3: Partizip I (A folyamatos igenév)
    t3_title: "Partizip I (-d)",
    t3_text: "A Partizip I egy éppen zajló cselekvést fejez ki. Képzése: Infinitiv + d (lachen + d = lachend).",
    t3_inst: "Melyik a helyes Partizip I alak?",
    t3_h1: "Keresd a szót, ami d-re végződik.", t3_h2: "singend.",
    t3_sent_p: "Das ___ Kind ist glücklich.",
    t3_cp1: "singende", t3_cp2: "gesungene", t3_cp3: "singt", t3_cp4: "sang",

    // T4: Partizip II (A befejezett igenév)
    t4_title: "Partizip II (ge-)",
    t4_text: "A Partizip II-t múlt idők képzéséhez használjuk. Legtöbbször ge- előtagot kap.",
    t4_inst: "Keresd meg a Partizip II alakot!",
    t4_h1: "Keresd a ge- kezdetű szót.", t4_h2: "gespielt.",
    t4_w4_1: "lachen", t4_w4_2: "lachend", t4_w4_3: "gelacht", t4_w4_4: "lacht",

    // T5: Bucket: Partizip I vs II
    t5_title: "Igenév-kosár",
    t5_text: "Válogasd szét a Partizip I (folyamatos) és Partizip II (befejezett) alakokat!",
    t5_inst: "Dobáld őket a helyükre!",
    t5_h1: "Végződés -d (P1) vagy előtag ge- (P2)?", t5_h2: "rennend (P1), gerannt (P2).",
    t5_b1: "Partizip I (-d)", t5_b2: "Partizip II (ge-)",
    t5_i1: "rennend", t5_i2: "gerannt", t5_i3: "schlafend", t5_i4: "geschlafen",

    // T6: Magnet: Infinitiv to Partizip II
    t6_title: "Múlt-mágnes",
    t6_text: "Párosítsd az igéket a befejezett igenévi alakjukkal (Partizip II)!",
    t6_inst: "Használd a mágnest a párokhoz!",
    t6_h1: "machen -> gemacht.", t6_h2: "sehen -> gesehen.",
    t6_ml1: "machen", t6_mr1: "gemacht", t6_ml2: "sehen", t6_mr2: "gesehen", t6_ml3: "trinken", t6_mr3: "getrunken",

    // T7: Slingshot: Plusquamperfekt sentences
    t7_title: "Plusquamperfekt-lövészet",
    t7_text: "Csak azokat a mondatokat találd el, amik Plusquamperfektben vannak!",
    t7_inst: "Lőj a múlt előtti múltra!",
    t7_h1: "Keresd a 'hatte' vagy 'war' + Partizip II szerkezetet.", t7_h2: "Ich hatte gelesen.",
    t7_q: "Melyik mondat Plusquamperfekt?",
    t7_t1: "Ich hatte gegessen.", t7_t2: "Sie war geflohen.", t7_t3: "Ich habe gegessen.", t7_t4: "Sie flieht. (Rossz)",

    // T8: Sentence build: Sequence
    t8_title: "Időrend-építő",
    t8_text: "A Plusquamperfektet gyakran a 'nachdem' (miután) kötőszóval használjuk.",
    t8_inst: "Építsd fel a mondatot!",
    t8_h1: "Miután (nachdem) tanultam (gelernt hatte)...", t8_h2: "Nachdem ich gelernt hatte, spielte ich.",
    t8_f1: "Nachdem ich", t8_f2: "gelernt hatte,", t8_f3: "spielte", t8_f4: "ich.",

    // T9: Stacker: Timeline
    t9_title: "Idővonal-torony",
    t9_text: "Rakd sorrendbe az igeidőket a jelentől a legtávolabbi múlt felé!",
    t9_inst: "Építsd fel az idővonalat!",
    t9_h1: "Präsens (ma) -> Perfekt (múlt) -> Plusquamperfekt (régebbi múlt).", t9_h2: "Jelen -> Múlt -> Múlt előtti múlt.",
    t9_sw1: "Präsens (heute)", t9_sw2: "Perfekt (gestern)", t9_sw3: "Plusquamperfekt (davor)",
  }
};

export const PARTIZIP_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "hatte", bg: "#FDF2F8", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "waren", bg: "#FCE7F3", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent_w", choices: ["t2_cw1", "t2_cw2", "t2_cw3", "t2_cw4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "lachend", color: "#DB2777" },
    interactive: { type: "gap-fill", sentence: "t3_sent_p", choices: ["t3_cp1", "t3_cp2", "t3_cp3", "t3_cp4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "gelacht", color: "#BE185D" },
    interactive: { type: "highlight-text", tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"], correctIndices: [2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["-d"], bg: "#FDF2F8", border: "#FDF2F8" }, right: { items: ["ge-"], bg: "#FCE7F3", border: "#FCE7F3" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "p1", label: "t5_b1" }, { id: "p2", label: "t5_b2" }], items: [{ text: "t5_i1", bucketId: "p1" }, { text: "t5_i2", bucketId: "p2" }, { text: "t5_i3", bucketId: "p1" }, { text: "t5_i4", bucketId: "p2" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Múlt", bg: "#FCE7F3" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t6_ml1", right: "t6_mr1" }, { left: "t6_ml2", right: "t6_mr2" }, { left: "t6_ml3", right: "t6_mr3" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Plusquam", bg: "#FDF2F8" },
    interactive: { type: "physics-slingshot", question: "t7_q", targets: [{ id: "1", text: "t7_t1", isCorrect: true }, { id: "2", text: "t7_t2", isCorrect: true }, { id: "3", text: "t7_t3", isCorrect: false }, { id: "4", text: "t7_t4", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "sentence-display", words: ["Nachdem", "hatte"], color: "#9D174D" },
    interactive: { type: "sentence-build", fragments: ["t8_f1", "t8_f2", "t8_f3", "t8_f4"], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Timeline", bg: "#FCE7F3" },
    interactive: { type: "physics-stacker", words: ["t9_sw1", "t9_sw2", "t9_sw3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "perfekt" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Passiv (🔄, #14B8A6)
// Thema: Vorgangspassiv (wird gebaut), Zustandspassiv (ist gebaut), Umformung
// ─────────────────────────────────────────────────────────────────────────────

export const PASSIV_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Passiv-Plattform",

    // T1: Vorgangspassiv Intro
    t1_title: "Történés (Vorgangspassiv)",
    t1_text: "A Vorgangspassiv azt hangsúlyozza, ami éppen TÖRTÉNIK. Képzése: werden + Partizip II.",
    t1_inst: "Válaszd ki a helyes segédigét!",
    t1_h1: "A ház éppen épül (werden).", t1_h2: "Das Haus 'wird' gebaut.",
    t1_sent: "Die Pizza ___ gerade vom Koch gebacken.",
    t1_c1: "wird", t1_c2: "ist", t1_c3: "hat", t1_c4: "war",

    // T2: Zustandspassiv Intro
    t2_title: "Állapot (Zustandspassiv)",
    t2_text: "A Zustandspassiv azt hangsúlyozza, hogy valami már KÉSZ van. Képzése: sein + Partizip II.",
    t2_inst: "Melyik alak fejezi ki a befejezett állapotot?",
    t2_h1: "Az ajtó már zárva van (sein).", t2_h2: "Die Tür 'ist' geschlossen.",
    t2_sent_z: "Das Fenster ___ bereits geputzt.",
    t2_cz1: "ist", t2_cz2: "wird", t2_cz3: "hat", t2_cz4: "wurde",

    // T3: Bucket: Aktiv vs. Passiv
    t3_title: "Aktiv vagy Passiv?",
    t3_text: "Döntsd el, hogy a mondat cselekvő (Aktiv) vagy szenvedő (Passiv) szerkezetű!",
    t3_inst: "Dobáld a mondatokat a megfelelő kosárba!",
    t3_h1: "Aktiv: Valaki csinál valamit. Passiv: Történik valami valakivel.",
    t3_b1: "Aktiv (Cselekvő)", t3_b2: "Passiv (Szenvedő)",
    t3_i1: "Er liest ein Buch.", t3_i2: "Das Buch wird gelesen.", t3_i3: "Sie baut ein Haus.", t3_i4: "Ein Haus ist gebaut.",

    // T4: Active to Passive (werden)
    t4_title: "Átalakítás: Történés",
    t4_text: "Cselekvőből szenvedő: 'Er baut das Haus' -> 'Das Haus wird gebaut'.",
    t4_inst: "Válaszd ki a helyes passzív alakot!",
    t4_h1: "Keresd a 'wird' + Partizip II szerkezetet.", t4_h2: "wird gerufen.",
    t4_sent_u: "Mama ruft das Kind. -> Das Kind ___.",
    t4_cu1: "wird gerufen", t4_cu2: "ist gerufen", t4_cu3: "wurde gerufen", t4_cu4: "hat gerufen",

    // T5: Active to Passive (sein)
    t5_title: "Átalakítás: Állapot",
    t5_text: "Cselekvőből állapot-passzív: 'Er schließt die Tür' -> 'Die Tür ist geschlossen'.",
    t5_inst: "Melyik fejezi ki, hogy a munka kész?",
    t5_h1: "Keresd a 'ist' + Partizip II szerkezetet.", t5_h2: "ist erledigt.",
    t5_sent_s: "Er erledigt die Arbeit. -> Die Arbeit ___.",
    t5_cs1: "ist erledigt", t5_cs2: "wird erledigt", t5_cs3: "hat erledigt", t5_cs4: "war erledigt",

    // T6: Stacker: Passive Sentence
    t6_title: "Passzív-torony",
    t6_text: "Építs fel egy helyes szenvedő mondatot!",
    t6_inst: "Rakd sorba a mondatrészeket!",
    t6_h1: "Alany (Das Auto) + segédige (wird) + végén az igenév (repariert).", t6_h2: "Das Auto wird repariert.",
    t6_sw1: "Das Auto", t6_sw2: "wird", t6_sw3: "repariert.",

    // T7: Slingshot: Identify Passive
    t7_title: "Passzív-vadász",
    t7_text: "Lődd le az összes mondatot, ami Passiv szerkezetben van!",
    t7_inst: "Csak a Passiv mondatokra lőj!",
    t7_h1: "Keresd a 'wird' vagy 'ist' + befejezett igenév párost.",
    t7_q: "Melyik a Passiv?",
    t7_t1: "Der Brief wird geschickt.", t7_t2: "Das Essen ist gekocht.", t7_t3: "Ich schicke den Brief.", t7_t4: "Du kochst das Essen.",

    // T8: Magnet: Aktiv-Passiv Pairs
    t8_title: "Pár-mágnes",
    t8_text: "Párosítsd össze a cselekvő mondatot a neki megfelelő szenvedő párjával!",
    t8_inst: "Húzd össze a párokat!",
    t8_h1: "Er schreibt -> Es wird geschrieben.",
    t8_ml1: "Er schreibt den Brief.", t8_mr1: "Der Brief wird geschrieben.",
    t8_ml2: "Sie kocht die Suppe.", t8_mr2: "Die Suppe wird gekocht.",
    t8_ml3: "Wir sehen den Film.", t8_mr3: "Der Film wird gesehen.",

    // T9: Passiv in Präteritum
    t9_title: "Múlt idejű Passiv",
    t9_text: "Múlt időben a 'werden' helyett a 'wurde' alakot használjuk: wurde + Partizip II.",
    t9_inst: "Hogy mondjuk múlt időben: 'A ház felépült'?",
    t9_h1: "Használd a 'wurde' alakot.", t9_h2: "Das Haus wurde gebaut.",
    t9_sent_p: "Das Haus ___ im letzten Jahr gebaut.",
    t9_cp1: "wurde", t9_cp2: "wird", t9_cp3: "ist", t9_cp4: "war",
  }
};

export const PASSIV_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "wird ... ge-", bg: "#CCFBF1", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "ist ... ge-", bg: "#F0FDFA", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent_z", choices: ["t2_cz1", "t2_cz2", "t2_cz3", "t2_cz4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Aktiv"], bg: "#F0FDFA", border: "#F0FDFA" }, right: { items: ["Passiv"], bg: "#CCFBF1", border: "#CCFBF1" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t3_b1" }, { id: "p", label: "t3_b2" }], items: [{ text: "t3_i1", bucketId: "a" }, { text: "t3_i2", bucketId: "p" }, { text: "t3_i3", bucketId: "a" }, { text: "t3_i4", bucketId: "p" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["wird", "gerufen"], color: "#14B8A6" },
    interactive: { type: "gap-fill", sentence: "t4_sent_u", choices: ["t4_cu1", "t4_cu2", "t4_cu3", "t4_cu4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-display", words: ["ist", "erledigt"], color: "#0D9488" },
    interactive: { type: "gap-fill", sentence: "t5_sent_s", choices: ["t5_cs1", "t5_cs2", "t5_cs3", "t5_cs4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Passiv", bg: "#F0FDFA" },
    interactive: { type: "physics-stacker", words: ["t6_sw1", "t6_sw2", "t6_sw3"], correctOrder: [0, 1, 2], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Hunting", bg: "#CCFBF1" },
    interactive: { type: "physics-slingshot", question: "t7_q", targets: [{ id: "1", text: "t7_t1", isCorrect: true }, { id: "2", text: "t7_t2", isCorrect: true }, { id: "3", text: "t7_t3", isCorrect: false }, { id: "4", text: "t7_t4", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Párok", bg: "#F0FDFA" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t8_ml1", right: "t8_mr1" }, { left: "t8_ml2", right: "t8_mr2" }, { left: "t8_ml3", right: "t8_mr3" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "wurde", bg: "#CCFBF1", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t9_sent_p", choices: ["t9_cp1", "t9_cp2", "t9_cp3", "t9_cp4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "praeteritum" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Rechtschreibung & Wortschatz (📚, #A855F7)
// Thema: Fremdwörter, Synonyme, Antonyme, schwierige Wörter (ph, th, rh)
// ─────────────────────────────────────────────────────────────────────────────

export const WORTSCHATZ5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortschatz-Wächter",

    // T1: ph vs f
    t1_title: "A 'ph' hangja",
    t1_text: "Sok idegen szóban az 'f' hangot 'ph'-val írjuk (pl. Philosophie).",
    t1_inst: "Melyik szó van helyesen írva?",
    t1_h1: "Keresd a 'ph' végződést.", t1_h2: "Geographie.",
    t1_w1_1: "Geographie", t1_w1_2: "Geografie", t1_w1_3: "Geografih", t1_w1_4: "Geographye",

    // T2: th words
    t2_title: "A néma 'h'",
    t2_text: "Vannak szavak, ahol a 't' után néma 'h' áll (pl. Thema, Theater).",
    t2_inst: "Találd meg a helyesen írt szót!",
    t2_h1: "A 'Theke' is h-val írandó.", t2_h2: "Theke.",
    t2_w2_1: "Teke", t2_w2_2: "Theke", t2_w2_3: "Theeke", t2_w2_4: "Teeke",

    // T3: rh words
    t3_title: "Ritmus és társai",
    t3_text: "Görög eredetű szavaknál az 'r' után is állhat 'h' (pl. Rhythmus).",
    t3_inst: "Melyik a 'Rhythmus' helyes írásmódja?",
    t3_h1: "rh-val kezdődik és y van benne.", t3_h2: "Rhythmus.",
    t3_w3_1: "Rhythmus", t3_w3_2: "Rythmus", t3_w3_3: "Rithmus", t3_w3_4: "Rhythmus",

    // T4: Synonym Match
    t4_title: "Szinonimák",
    t4_text: "A szinonimák hasonló jelentésű szavak.",
    t4_inst: "Használd a mágnest a szinonimák párosításához!",
    t4_h1: "beginnen -> anfangen.", t4_h2: "klug -> intelligent.",
    t4_ml4: "beginnen", t4_mr4: "anfangen", t4_ml5: "klug", t4_mr5: "intelligent", t4_ml6: "sehen", t4_mr6: "betrachten",

    // T5: Antonym Slingshot
    t5_title: "Ellentét-vadászat",
    t5_text: "Találd meg a megadott szó ellentétét!",
    t5_inst: "Lődd le a helyes ellentétet!",
    t5_h1: "Mi az ellentéte a 'hell' (világos) szónak?", t5_h2: "dunkel (sötét).",
    t5_q_a: "Gegenteil von 'hell'?",
    t5_t1: "dunkel", t5_t2: "licht", t5_t3: "klar", t5_t4: "weiß",

    // T6: Word Families (Bucket)
    t6_title: "Szócsaládok",
    t6_text: "Válogasd szét a szavakat szócsaládok szerint!",
    t6_inst: "Dobáld a szavakat a tövüknek megfelelő kosárba!",
    t6_h1: "fahren -> Fahrt, Fahrer. gehen -> Gang, Gehweg.",
    t6_b1: "fahren", t6_b2: "gehen",
    t6_i1: "die Fahrt", t6_i2: "der Fahrer", t6_i3: "der Gang", t6_i4: "der Gehweg",

    // T7: Das vs Dass (Advanced)
    t7_title: "Das vagy Dass?",
    t7_text: "Ha a szót be tudod helyettesíteni a 'dieses' vagy 'welches' szavakkal, akkor egy 's'. Ha nem, akkor 'dass'.",
    t7_inst: "Melyik alak kell ide?",
    t7_h1: "Ich weiß, 'hogy'...", t7_h2: "dass.",
    t7_sent_d: "Ich weiß, ___ du heute kommst.",
    t7_cd1: "dass", t7_cd2: "das", t7_cd3: "daß", t7_cd4: "des",

    // T8: Nominalisierung
    t8_title: "Főnevesítés",
    t8_text: "Ha az ige vagy melléknév elé névelő kerül, nagybetűvel írjuk: beim Laufen, alles Gute.",
    t8_inst: "Melyik szó van helyesen írva?",
    t8_h1: "A 'beim' után nagybetű jön.", t8_h2: "beim Laufen.",
    t8_w8_1: "beim laufen", t8_w8_2: "beim Laufen", t8_w8_3: "Beim laufen", t8_w8_4: "beimlaufen",

    // T9: Word Stacker (Complexity)
    t9_title: "Szó-torony",
    t9_text: "Rakd sorba a szavakat a hosszuk vagy nehézségük szerint!",
    t9_inst: "Építs tornyot a szavakból!",
    t9_h1: "Tag -> Tabelle -> Teleskop.",
    t9_sw1: "Tag", t9_sw2: "Tabelle", t9_sw3: "Teleskop",
  }
};

export const WORTSCHATZ5_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ph", color: "#A855F7" },
    interactive: { type: "highlight-text", tokens: ["t1_w1_1", "t1_w1_2", "t1_w1_3", "t1_w1_4"], correctIndices: [0], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Th", color: "#9333EA" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Rh", color: "#7E22CE" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3"], correctIndices: [0], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Synonym", bg: "#F5F3FF" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t4_ml4", right: "t4_mr4" }, { left: "t4_ml5", right: "t4_mr5" }, { left: "t4_ml6", right: "t4_mr6" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Antonym", bg: "#EDE9FE" },
    interactive: { type: "physics-slingshot", question: "t5_q_a", targets: [{ id: "1", text: "t5_t1", isCorrect: true }, { id: "2", text: "t5_t2", isCorrect: false }, { id: "3", text: "t5_t3", isCorrect: false }, { id: "4", text: "t5_t4", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "antonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["fahr-"], bg: "#F5F3FF", border: "#F5F3FF" }, right: { items: ["geh-"], bg: "#EDE9FE", border: "#EDE9FE" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "f", label: "t6_b1" }, { id: "g", label: "t6_b2" }], items: [{ text: "t6_i1", bucketId: "f" }, { text: "t6_i2", bucketId: "f" }, { text: "t6_i3", bucketId: "g" }, { text: "t6_i4", bucketId: "g" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "dass", color: "#6B21A8" },
    interactive: { type: "gap-fill", sentence: "t7_sent_d", choices: ["t7_cd1", "t7_cd2", "t7_cd3", "t7_cd4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "Nomen!", bg: "#F5F3FF", color: "#1e293b" }] },
    interactive: { type: "highlight-text", tokens: ["t8_w8_1", "t8_w8_2", "t8_w8_3", "t8_w8_4"], correctIndices: [1], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stacker", bg: "#EDE9FE" },
    interactive: { type: "physics-stacker", words: ["t9_sw1", "t9_sw2", "t9_sw3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "synonyme" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K5 (🌟, #4ECDC4)
// Thema: Wiederholung aller K5-Themen (Finales Diplom)
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K5-Diplom",

    // T1: Steigerung (Stacker)
    t1_title: "Fokozás-torony",
    t1_text: "Mutasd meg, hogy profi vagy a melléknevek fokozásában! Rakd sorba a szinteket.",
    t1_inst: "Építs tornyot a fokozás szabályai szerint!",
    t1_h1: "Alapfok -> Középfok -> Felsőfok.", t1_h2: "gut -> besser -> am besten.",
    t1_sw1: "gut", t1_sw2: "besser", t1_sw3: "am besten",

    // T2: Pronomen (Gap-fill)
    t2_title: "Névmás-ellenőrzés",
    t2_text: "Emlékszel még a visszaható névmásokra? 'Wir freuen uns.'",
    t2_inst: "Válaszd ki a megfelelő névmást!",
    t2_h1: "Az alany 'ihr' (ti).", t2_h2: "Ihr freut 'euch'.",
    t2_sent: "Ihr freut ___ über die Ferien.",
    t2_c1: "euch", t2_c2: "uns", t2_c3: "sich", t2_c4: "mich",

    // T3: Wechselpräpositionen (Bucket)
    t3_title: "Hely vagy irány?",
    t3_text: "Döntsd el, hogy a kifejezés hol (Dativ) vagy hová (Akkusativ) kérdésre válaszol!",
    t3_inst: "Válogasd szét a kifejezéseket!",
    t3_h1: "auf dem Tisch (hol? - Dat), auf den Tisch (hová? - Akk).",
    t3_b1: "Dativ (Wo?)", t3_b2: "Akkusativ (Wohin?)",
    t3_i1: "hinter der Tür", t3_i2: "hinter die Tür", t3_i3: "im Schrank", t3_i4: "in den Schrank",

    // T4: Satzglieder (Highlight)
    t4_title: "Mondatrész-analízis",
    t4_text: "Keresd meg a mondatban a Genitiv-Objektet (Wessen?).",
    t4_inst: "Jelöld meg a Genitiv-Objektet!",
    t4_h1: "Kérdezz rá: Kinek/Minek a mije? (Wessen?)", t4_h2: "des Diebstahls.",
    t4_w4_1: "Der Dieb", t4_w4_2: "wird", t4_w4_3: "des Diebstahls", t4_w4_4: "überführt", t4_w4_5: ".",

    // T5: Zeichensetzung (Slingshot)
    t5_title: "Vessző-mester",
    t5_text: "Lődd le azokat a mondatokat, ahol a vessző és az idézőjel is a helyén van!",
    t5_inst: "Találd el a tökéletes mondatokat!",
    t5_h1: "Figyelj a vesszőre a 'weil' előtt.", t5_h2: "Check: Er sagt: „...“",
    t5_q: "Melyik mondat helyes?",
    t5_t1: "Ich weiß, dass du da bist.", t5_t2: "Er sagt: „Hallo!“", t5_t3: "Wir essen, da wir Hunger haben.", t5_t4: "Sie lacht weil es, warm ist. (Rossz)",

    // T6: Plusquamperfekt (Gap-fill)
    t6_title: "A múlt előtti múlt",
    t6_text: "Használd a Plusquamperfektet! Mi történt korábban?",
    t6_inst: "Melyik alak fejezi ki a befejezett előzményt?",
    t6_h1: "Keresd a 'hatte' vagy 'war' segédigét.", t6_h2: "hatte gelesen.",
    t6_sent_p: "Nachdem ich ___ , ging ich schlafen.",
    t6_cp1: "gelernt hatte", t6_cp2: "gelernt habe", t6_cp3: "lernte", t6_cp4: "lernen werde",

    // T7: Passiv (Match)
    t7_title: "Aktiv -> Passiv",
    t7_text: "Párosítsd a cselekvő mondatokat a megfelelő szenvedő párjukkal!",
    t7_inst: "Húzd össze a párokat!",
    t7_h1: "Aktiv: Er kauft -> Passiv: Es wird gekauft.",
    t7_ml1: "Er kauft ein Auto.", t7_mr1: "Ein Auto wird gekauft.",
    t7_ml2: "Sie schreibt Briefe.", t7_mr2: "Briefe werden geschrieben.",
    t7_ml3: "Wir rufen dich an.", t7_mr3: "Du wirst angerufen.",

    // T8: Rechtschreibung (Magnet)
    t8_title: "Helyesírás-mágnes",
    t8_text: "Párosítsd össze a trükkös idegen szavakat a helyes írásmódjukkal!",
    t8_inst: "Használd a mágnest a párosításhoz!",
    t8_h1: "Rhythmus (rh), Philosophie (ph).", t8_h2: "Thema (th).",
    t8_ml8: "Rhy...", t8_mr8: "thmus", t8_ml9: "Philoso...", t8_mr9: "phie", t8_ml10: "Theo...", t8_mr10: "rie",

    // T9: Synonyme (Slingshot)
    t9_title: "Szókincs-finálé",
    t9_text: "Találd meg a legválasztékosabb szinonimát!",
    t9_inst: "Lődd le a helyes szinonimát!",
    t9_h1: "Mivel helyettesítheted a 'sagen' szót?", t9_h2: "mitteilen, erklären.",
    t9_q_s: "Synonym für 'sagen'?",
    t9_t1: "mitteilen", t9_t2: "laufen", t9_t3: "haben", t9_t4: "sein",
  }
};

export const EXAM5_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Steigerung", bg: "#CCFBF1" },
    interactive: { type: "physics-stacker", words: ["t1_sw1", "t1_sw2", "t1_sw3"], correctOrder: [0, 1, 2], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "steigerung" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "euch", bg: "#D1FAE5", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Dat"], bg: "#F0FDFA", border: "#F0FDFA" }, right: { items: ["Akk"], bg: "#CCFBF1", border: "#CCFBF1" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "d", label: "t3_b1" }, { id: "a", label: "t3_b2" }], items: [{ text: "t3_i1", bucketId: "d" }, { text: "t3_i2", bucketId: "a" }, { text: "t3_i3", bucketId: "d" }, { text: "t3_i4", bucketId: "a" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "dativ" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["des Diebstahls"], color: "#0D9488" },
    interactive: { type: "highlight-text", tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4", "t4_w4_5"], correctIndices: [2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "genitiv" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "K5 Master", bg: "#EEF2FF" },
    interactive: { type: "physics-slingshot", question: "t5_q", targets: [{ id: "1", text: "t5_t1", isCorrect: true }, { id: "2", text: "t5_t2", isCorrect: true }, { id: "3", text: "t5_t3", isCorrect: true }, { id: "4", text: "t5_t4", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "hatte / war", bg: "#FDF2F8", color: "#1e293b" }] },
    interactive: { type: "gap-fill", sentence: "t6_sent_p", choices: ["t6_cp1", "t6_cp2", "t6_cp3", "t6_cp4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "perfekt" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔄", title: "Mix", bg: "#F0FDFA" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Fremdwort", bg: "#F5F3FF" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t8_ml8", right: "t8_mr8" }, { left: "t8_ml9", right: "t8_mr9" }, { left: "t8_ml10", right: "t8_mr10" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚀", title: "Final", bg: "#FFFBEB" },
    interactive: { type: "physics-slingshot", question: "t9_q_s", targets: [{ id: "1", text: "t9_t1", isCorrect: true }, { id: "2", text: "t9_t2", isCorrect: false }, { id: "3", text: "t9_t3", isCorrect: false }, { id: "4", text: "t9_t4", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "synonyme" }
  }
];
