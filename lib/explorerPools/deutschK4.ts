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


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Kasusinsel (Nominativ & Akkusativ)
// Thema: Nominativ (Wer?) und Akkusativ (Wen?) erkennen und anwenden
// ─────────────────────────────────────────────────────────────────────────────

export const KASUS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Kasus-Zentrale (Nom & Akk)",

    // T1: Was ist ein Kasus? (Fall)
    t1_title: "Was ist ein Kasus?",
    t1_text: "Nomen können ihre Form verändern, je nachdem, welche Aufgabe sie im Satz haben. Das nennen wir 'Fälle' oder Kasus. Heute lernen wir den 1. Fall (Nominativ) und den 4. Fall (Akkusativ).",
    t1_b1: "Nomen verändern sich.",
    t1_b2: "Es gibt insgesamt 4 Fälle.",
    t1_inst: "Welches Wort beschreibt die Veränderung der Nomen?",
    t1_h1: "Es ist ein anderes Wort für 'Fall'.",
    t1_h2: "Das Wort heißt 'Kasus'.",
    t1_w1: "Verb", t1_w2: "Kasus", t1_w3: "Adjektiv", t1_w4: "Punkt",
    // Quiz: GENERATOR (nominativ)

    // T2: Der Nominativ (1. Fall)
    t2_title: "Der Nominativ (Wer oder was?)",
    t2_text: "Das Subjekt eines Satzes steht immer im Nominativ. Wir fragen: Wer oder was tut etwas? 'Der Hund bellt.' -> Wer bellt? Der Hund.",
    t2_b1: "Frage: Wer oder was?",
    t2_b2: "Das Subjekt steht im Nominativ.",
    t2_inst: "Finde das Nomen im Nominativ!",
    t2_h1: "Frage: Wer oder was fliegt?",
    t2_h2: "'Der Vogel' ist das Subjekt.",
    t2_w2_1: "Der Vogel", t2_w2_2: "sieht", t2_w2_3: "den Wurm", t2_w2_4: ".",
    // Quiz: GENERATOR (nominativ)

    // T3: Der Akkusativ (4. Fall)
    t3_title: "Der Akkusativ (Wen oder was?)",
    t3_text: "Das Objekt, mit dem etwas gemacht wird, steht oft im Akkusativ. Wir fragen: Wen oder was sieht der Hund? Den Ball!",
    t3_b1: "Frage: Wen oder was?",
    t3_b2: "Oft das Ziel einer Handlung.",
    t3_inst: "Finde das Nomen im Akkusativ!",
    t3_h1: "Frage: Wen oder was frisst die Katze?",
    t3_h2: "Sie frisst 'den Fisch'.",
    t3_w3_1: "Die Katze", t3_w3_2: "frisst", t3_w3_3: "den Fisch", t3_w3_4: ".",
    // Quiz: GENERATOR (akkusativ)

    // T4: Nur Maskulin ändert sich!
    t4_title: "Achtung: der ➔ den",
    t4_text: "Das Wichtigste beim Akkusativ: Nur männliche Nomen (der) ändern ihren Artikel zu 'den'. Weiblich (die) und sächlich (das) bleiben gleich!",
    t4_b1: "der Hund ➔ den Hund",
    t4_b2: "die Katze ➔ die Katze (bleibt!)",
    t4_inst: "Ziehe die Artikel in die richtige Box!",
    t4_h1: "Überlege: Welcher Artikel ändert sich im Akkusativ?",
    t4_h2: "Nur 'der' wird zu 'den'.",
    t4_bn: "Nominativ (der/die/das)", t4_ba: "Akkusativ (den/die/das)",
    t4_i1: "der", t4_i2: "den", t4_i3: "die", t4_i4: "das",
    // Quiz: MANUAL (der/den Regel)
    t4_q: "Welcher Artikel verändert sich im Akkusativ?",
    t4_qa: "nur der (maskulin)", t4_qb: "nur die (feminin)", t4_qc: "nur das (neutral)", t4_qd: "alle",

    // T5: Nominativ oder Akkusativ?
    t5_title: "Nom oder Akk?",
    t5_text: "Kannst du die Satzglieder unterscheiden? Der 'Täter' ist Nominativ, das 'Ziel' ist Akkusativ.",
    t5_b1: "Wer? ➔ Nominativ",
    t5_b2: "Wen? ➔ Akkusativ",
    t5_inst: "Sortiere die markierten Wörter!",
    t5_h1: "Frage nach dem Wort: Wer oder Wen?",
    t5_h2: "Der Jäger (Wer?) ➔ Nom. Den Hasen (Wen?) ➔ Akk.",
    t5_i5_1: "Der Jäger", t5_i5_2: "den Hasen", t5_i5_3: "Das Kind", t5_i5_4: "den Apfel",
    // Quiz: GENERATOR (akkusativ)

    // T6: Sätze bauen mit Kasus
    t6_title: "Kasus-Baumeister",
    t6_text: "Baue einen Satz mit Nominativ und Akkusativ. Achte darauf, dass der Artikel zum Fall passt!",
    t6_b1: "Subjekt (Nom) + Verb + Objekt (Akk).",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Wer (Der Junge) macht was (kauft) mit wem (den Kuchen)?",
    t6_h2: "Der Junge kauft den Kuchen.",
    t6_f1: "Der Junge", t6_f2: "kauft", t6_f3: "den Kuchen.",
    // Quiz: MANUAL
    t6_q: "Was ist 'den Kuchen' im Satz 'Der Junge kauft den Kuchen'?",
    t6_qa: "Akkusativ-Objekt", t6_qb: "Subjekt", t6_qc: "Prädikat", t6_qd: "Adjektiv",

    // T7: Magnet-Challenge (Physics!)
    t7_title: "Magnet-Jagd",
    t7_text: "Bist du bereit für die Physik-Challenge? Ziehe alle Wörter, die im Akkusativ stehen, in das Ziel!",
    t7_b1: "Suche nach 'den', 'die' vagy 'das' als Objekt.",
    t7_inst: "Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "Frage 'Wen oder was?'.",
    t7_h2: "den Ball, den Brief, die Blume.",
    t7_target: "Akkusativ 🧲",
    t7_m1: "den Ball", t7_m2: "den Brief", t7_m3: "der Hund", t7_m4: "das Haus (Akk)",
    // Quiz: GENERATOR (akkusativ)
  }
};

export const KASUS_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "📦", label: "Nomen" }, { emoji: "🔄", label: "Kasus" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [1],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "article-noun", article: "Der", articleColor: "#3B82F6", noun: "Vogel", emoji: "🐦" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "article-noun", article: "Den", articleColor: "#EF4444", noun: "Fisch", emoji: "🐟" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [2],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "akkusativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "der ➔ den", color: "#B91C1C", bg: "#FEE2E2" }] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t4_bn" }, { id: "a", label: "t4_ba" }],
      items: [
        { text: "t4_i1", bucketId: "n" },
        { text: "t4_i2", bucketId: "a" },
        { text: "t4_i3", bucketId: "a" }, // die (akk)
        { text: "t4_i4", bucketId: "n" }, // das (nom)
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Wer?"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Wen?"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t5_h2" }, { id: "a", label: "t5_h2" }], // simplified labels
      items: [
        { text: "t5_i1", bucketId: "n" },
        { text: "t5_i2", bucketId: "a" },
        { text: "t5_i3", bucketId: "n" },
        { text: "t5_i4", bucketId: "a" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "akkusativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Der Junge", "kauft", "den Kuchen", "."], highlightIndices: [2], color: "#10B981" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3"],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Akkusativ-Suche", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-magnet",
      pairs: [{ left: "t7_m1", right: "t7_m3" }, { left: "t7_m2", right: "t7_m3" }, { left: "t7_m4", right: "t7_m3" }],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "akkusativ" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Dativinsel
// Thema: Dativ (Wem?) — dem/der/dem, Präpositionen mit Dativ
// ─────────────────────────────────────────────────────────────────────────────

export const DATIV_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Dativ-Dschungel (Wem?)",

    // T1: Der 3. Fall (Dativ)
    t1_title: "Was ist der Dativ?",
    t1_text: "Der Dativ ist der 3. Fall. Wir benutzen ihn oft, wenn wir jemandem etwas geben oder helfen. Die Frage lautet immer: WEM oder WAS?",
    t1_b1: "Frage: Wem oder was?",
    t1_b2: "Oft das 'Ziel' einer Gabe oder Hilfe.",
    t1_inst: "Finde das Nomen im Dativ!",
    t1_h1: "Frage: WEM hilft das Kind?",
    t1_h2: "Es hilft 'dem Opa'.",
    t1_w1: "Das Kind", t1_w2: "hilft", t1_w3: "dem Opa", t1_w4: ".",
    // Quiz: GENERATOR (dativ)

    // T2: Artikel im Dativ
    t2_title: "Die Artikel ändern sich",
    t2_text: "Im Dativ verändern sich alle Artikel! Der und Das werden zu 'dem'. Die wird zu 'der'. Und im Plural? Da wird 'die' zu 'den' und das Nomen bekommt oft ein extra -n!",
    t2_b1: "der / das ➔ dem",
    t2_b2: "die ➔ der",
    t2_b3: "Plural: die ➔ den (...n)",
    t2_inst: "Verbinde den Nominativ mit dem richtigen Dativ!",
    t2_h1: "Überlege: Was wird aus 'der' und 'die'?",
    t2_h2: "der -> dem, die -> der.",
    t2_l1: "der Hund", t2_r1: "dem Hund",
    t2_l2: "die Katze", t2_r2: "der Katze",
    t2_l3: "das Haus", t2_r3: "dem Haus",
    t2_l4: "die Kinder", t2_r4: "den Kindern",
    // Quiz: GENERATOR (dativ)

    // T3: Verben mit Dativ
    t3_title: "Besondere Verben",
    t3_text: "Einige Verben brauchen immer den Dativ. Man kann sie sich wie 'Dativ-Magneten' vorstellen: helfen, danken, gehören, gratulieren.",
    t3_b1: "helfen + Dativ",
    t3_b2: "gehören + Dativ",
    t3_inst: "Welches Wort passt in die Lücke?",
    t3_h1: "Das Verb 'gehören' braucht den Dativ von 'der Junge'.",
    t3_h2: "Es heißt 'dem Jungen'.",
    t3_sent: "Das Fahrrad gehört ___.",
    t3_c1: "dem Jungen", t3_c2: "den Jungen", t3_c3: "der Junge", t3_c4: "des Jungen",
    // Quiz: GENERATOR (dativ)

    // T4: Präpositionen mit Dativ
    t4_title: "Dativ-Präpositionen",
    t4_text: "Es gibt Wörter, nach denen IMMER der Dativ kommt. Merk dir den Spruch: 'Mit, nach, von, seit, aus, zu, bei - schreibt man stets mit Fall Nummer 3!'",
    t4_b1: "aus, bei, mit, nach, seit, von, zu.",
    t4_inst: "Sortiere die Dativ-Präpositionen in den Korb!",
    t4_h1: "Suche nach Wörtern wie 'mit', 'von' oder 'zu'.",
    t4_h2: "Diese Wörter verlangen immer den 3. Fall.",
    t4_target: "Dativ-Starter 🧺",
    t4_i1: "mit", t4_i2: "nach", t4_i3: "von", t4_i4: "für (Akk)",
    // Quiz: MANUAL
    t4_q: "Welches Wort gehört NICHT zu den Dativ-Präpositionen?",
    t4_qa: "für", t4_qb: "mit", t4_qc: "bei", t4_qd: "seit",

    // T5: Pronomen im Dativ
    t5_title: "Mir, dir, ihm, ihr",
    t5_text: "Auch die Fürwörter (Pronomen) ändern sich im Dativ. Aus 'ich' wird 'mir', aus 'du' wird 'dir'.",
    t5_b1: "ich ➔ mir",
    t5_b2: "du ➔ dir",
    t5_inst: "Welches Pronomen passt hier?",
    t5_h1: "Wenn ich dir danke, sage ich: Ich danke...",
    t5_h2: "Ich danke 'dir'.",
    t5_sent_p: "Ich danke ___ für das Geschenk.",
    t5_cp1: "dir", t5_cp2: "dich", t5_cp3: "du", t5_cp4: "dein",
    // Quiz: MANUAL
    t5_q: "Was ist der Dativ von 'wir'?",
    t5_qa: "uns", t5_qb: "euch", t5_qc: "wir", t5_qd: "unser",

    // T6: Wo oder Wohin?
    t6_title: "Wo? (Dativ)",
    t6_text: "Wenn wir nach einem festen Ort fragen (Wo?), benutzen wir den Dativ. 'Ich bin IN DER Schule.' (Wo? -> Schule ist weiblich, also 'der').",
    t6_b1: "Wo? ➔ Dativ (Ort)",
    t6_b2: "Wohin? ➔ Akkusativ (Richtung)",
    t6_inst: "Baue den Satz im Dativ zusammen!",
    t6_h1: "Frage: Wo sitzt die Katze?",
    t6_h2: "Auf dem Tisch (Dativ).",
    t6_f1: "Die Katze", t6_f2: "sitzt", t6_f3: "auf dem Tisch.",
    // Quiz: GENERATOR (dativ)

    // T7: Physics Bucket (Catch the Dative!)
    t7_title: "Dativ-Fänger",
    t7_text: "Jetzt wird es schnell! Fange nur die Wörter, die im Dativ stehen. Achte auf 'dem', 'der' und 'mir'!",
    t7_b1: "Fange dem, der, den, mir, dir.",
    t7_inst: "Bewege den Korb und fange die Dativ-Wörter!",
    t7_h1: "Achte auf die typischen Dativ-Endungen.",
    t7_h2: "dem Baum, der Frau, mir.",
    t7_i1: "dem Baum", t7_i2: "der Frau", t7_i3: "mir", t7_i4: "den Hund (Akk)",
  }
};

export const DATIV_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎁", title: "Wem gebe ich es?", bg: "#F1F5F9" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2], // dem Opa
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "die ➔ der", color: "#B91C1C", bg: "#FEE2E2" },
      { text: "das ➔ dem", color: "#1E40AF", bg: "#DBEAFE" }
    ]},
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "helfen", highlightChars: ["f", "e", "n"], color: "#8B5CF6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "🛣️", label: "nach" }, { emoji: "🤝", label: "mit" }] },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "d", label: "t4_target" }],
      items: [
        { text: "t4_i1", bucketId: "d" },
        { text: "t4_i2", bucketId: "d" },
        { text: "t4_i3", bucketId: "d" },
        { text: "t4_i4", bucketId: "none" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-pairs", pairs: [["ich", "mir"], ["du", "dir"]], color: "#EC4899" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent_p",
      choices: ["t5_cp1", "t5_cp2", "t5_cp3", "t5_cp4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Die Katze", "sitzt", "auf dem Tisch"], highlightIndices: [2], color: "#F59E0B" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3"],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧺", title: "Dativ-Fänger", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-bucket",
      buckets: [{ id: "d", label: "Dativ" }],
      items: [
        { text: "t7_i1", bucketId: "d" },
        { text: "t7_i2", bucketId: "d" },
        { text: "t7_i3", bucketId: "d" },
        { text: "t7_i4", bucketId: "wrong" },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "dativ" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Zeitformeninsel (K4)
// Thema: Präsens, Präteritum, Perfekt, Futur I (werden + Infinitiv)
// ─────────────────────────────────────────────────────────────────────────────

export const ZEITFORM4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Reisende K4",

    // T1: Die Zeitformen im Überblick
    t1_title: "Die vier Zeiten",
    t1_text: "In der 4. Klasse beherrschen wir vier Zeitformen: Präsens (Gegenwart), Präteritum (Erzähl-Vergangenheit), Perfekt (Sprech-Vergangenheit) und neu: das Futur I (Zukunft).",
    t1_b1: "Präsens: Ich spiele.",
    t1_b2: "Vergangenheit: Ich spielte / Ich habe gespielt.",
    t1_b3: "Zukunft: Ich werde spielen.",
    t1_inst: "Welches Wort gehört zur Zukunft (Futur)?",
    t1_h1: "Suche nach einem Wort, das 'später' bedeutet.",
    t1_h2: "Das Wort 'morgen' deutet auf die Zukunft hin.",
    t1_w1: "morgen", t1_w2: "gestern", t1_w3: "heute", t1_w4: "damals",
    // Quiz: GENERATOR (praeteritum)

    // T2: Das Futur I (Zukunft)
    t2_title: "Das Futur I",
    t2_text: "Wir benutzen das Futur I, wenn wir über Pläne oder Vermutungen in der Zukunft sprechen. Es besteht immer aus zwei Teilen: werden + Grundform.",
    t2_b1: "Helfer: werden (gebeugt).",
    t2_b2: "Hauptverb: Grundform (am Satzende).",
    t2_inst: "Finde das Futur I in diesem Satz!",
    t2_h1: "Suche nach der Kombination aus 'wird' und einem Verb am Ende.",
    t2_h2: "'wird regnen' ist das Futur I.",
    t2_w2_1: "Es", t2_w2_2: "wird", t2_w2_3: "morgen", t2_w2_4: "regnen", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Aus welchen zwei Teilen besteht das Futur I?",
    t2_qa: "werden + Grundform", t2_qb: "haben + Partizip", t2_qc: "sein + Partizip", t2_qd: "nur die Grundform",

    // T3: 'werden' konjugieren
    t3_title: "Das Hilfsverb 'werden'",
    t3_text: "Das Wort 'werden' ist der Motor für die Zukunft. Es verändert sich je nachdem, wer etwas tun wird: ich werde, du wirst, er wird, wir werden...",
    t3_b1: "ich werde, du wirst, er wird.",
    t3_b2: "wir werden, ihr werdet, sie werden.",
    t3_inst: "Welche Form von 'werden' passt hier?",
    t3_h1: "Das Subjekt ist 'Du'.",
    t3_h2: "Es heißt: Du 'wirst'.",
    t3_sent: "Du ___ später ein Profi sein.",
    t3_c1: "wirst", t3_c2: "werde", t3_c3: "werden", t3_c4: "werdet",
    // Quiz: GENERATOR (verben_k3)

    // T4: Satzbau im Futur
    t4_title: "Satzbau im Futur",
    t4_text: "Achtung! Das Hilfsverb 'werden' steht an 2. Stelle, aber das eigentliche Tunwort (die Grundform) rutscht ganz ans Ende des Satzes.",
    t4_b1: "werden ➔ Platz 2.",
    t4_b2: "Infinitiv ➔ Satzende.",
    t4_inst: "Baue den Satz im Futur zusammen!",
    t4_h1: "Beginne mit 'Wir', dann 'werden'. Das Verb 'lernen' kommt ans Ende.",
    t4_h2: "Wir werden morgen lernen.",
    t4_f1: "Wir", t4_f2: "werden", t4_f3: "morgen", t4_f4: "lernen.",
    // Quiz: MANUAL
    t4_q: "Wo steht das Hauptverb im Futur I?",
    t4_qa: "Ganz am Ende", t4_qb: "An zweiter Stelle", t4_qc: "Direkt nach 'werden'", t4_qd: "Am Satzanfang",

    // T5: Zeitformen-Check (Sortieren)
    t5_title: "Zeiten-Sortierer",
    t5_text: "Kannst du alle vier Zeiten unterscheiden? Gestern (Vergangenheit), Heute (Präsens) und Morgen (Futur).",
    t5_b1: "ich lerne (Präsens)",
    t5_b2: "ich lernte (Präteritum)",
    t5_b3: "ich werde lernen (Futur)",
    t5_inst: "Sortiere die Sätze in die richtige Zeitform!",
    t5_h1: "Achte auf 'wird' (Futur) und die Vergangenheitsformen.",
    t5_h2: "ich spiele -> Präsens. ich habe gespielt -> Perfekt.",
    t5_b_past: "Vergangenheit 🔙", t5_b_pres: "Präsens 🏠", t5_b_fut: "Futur 🚀",
    t5_i1: "ich lachte", t5_i2: "ich lache", t5_i3: "ich werde lachen", t5_i4: "ich habe gelacht",
    // Quiz: GENERATOR (perfekt)

    // T6: Futur I Profi
    t6_title: "Futur-Profi",
    t6_text: "Das Futur nutzen wir auch für Versprechen: 'Ich werde meine Hausaufgaben machen.' Oder für Vorhersagen: 'Es wird bald schneien.'",
    t6_b1: "Versprechen & Vorhersagen.",
    t6_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "Der Satzanfang ist groß (Ich).",
    t6_h2: "Ich werde dir helfen.",
    t6_o1: "Ich", t6_o2: "werde", t6_o3: "dir", t6_o4: "helfen.",
    // Quiz: GENERATOR (praeteritum)

    // T7: Slingshot Challenge (Physics!)
    t7_title: "Futur-Schleuder",
    t7_text: "Nur die Sätze im Futur I bringen Punkte! Schieße auf die richtigen Ziele.",
    t7_b1: "Suche nach Sätzen mit 'werden' + Verb am Ende.",
    t7_inst: "Schieße auf die Futur-Sätze!",
    t7_h1: "Ein Futur-Satz braucht immer eine Form von 'werden'.",
    t7_h2: "Er wird gehen, Wir werden spielen.",
    t7_m1: "Er wird gehen", t7_m2: "Wir werden spielen", t7_m3: "Ich lerne", t7_m4: "Du hast gelacht",
  }
};

export const ZEITFORM4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕰️", label: "Präsens" }, { emoji: "🔙", label: "Perfekt" }, { emoji: "🚀", label: "Futur" }] },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "werden", word2: "laufen", result: "Futur I", color: "#8B5CF6" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [1, 3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "ich werde", color: "#1E40AF", bg: "#DBEAFE" }, { text: "du wirst", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Wir", "werden", "morgen", "lernen"], highlightIndices: [1, 3], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Jetzt"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Später"], bg: "#F5F3FF", border: "#8B5CF6" } },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "pa", label: "t5_b_past" }, { id: "pr", label: "t5_b_pres" }, { id: "fu", label: "t5_b_fut" }],
      items: [
        { text: "t5_i1", bucketId: "pa" },
        { text: "t5_i2", bucketId: "pr" },
        { text: "t5_i3", bucketId: "fu" },
        { text: "t5_i4", bucketId: "pa" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "perfekt" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🚀", title: "Zukunft!", bg: "#F1F5F9" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Slingshot!", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t7_id1", text: "t7_m1", isCorrect: true },
        { id: "t7_id2", text: "t7_m2", isCorrect: true },
        { id: "t7_id3", text: "t7_m3", isCorrect: false },
        { id: "t7_id4", text: "t7_m4", isCorrect: false },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "praeteritum" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Wortarteninsel
// Thema: Nomen, Verb, Adjektiv, Pronomen, Präposition — alle Wortarten K4
// ─────────────────────────────────────────────────────────────────────────────

export const WORTART_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortarten-Palast",

    // T1: Die Wortarten-Familie
    t1_title: "Die Wortarten-Familie",
    t1_text: "In einem Satz hat jedes Wort eine feste Rolle. Wir unterscheiden Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wiewörter), Pronomen (Fürwörter) und Präpositionen (Verhältniswörter).",
    t1_b1: "Nomen, Verben, Adjektive.",
    t1_b2: "Pronomen und Präpositionen.",
    t1_inst: "Welches Wort ist eine Präposition (Verhältniswort)?",
    t1_h1: "Suche nach einem kurzen Wort, das einen Ort oder eine Richtung angibt.",
    t1_h2: "Das Wort 'auf' ist eine Präposition.",
    t1_w1: "Haus", t1_w2: "laufen", t1_w3: "auf", t1_w4: "schön",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Pronomen (Die Stellvertreter)
    t2_title: "Pronomen (Fürwörter)",
    t2_text: "Pronomen stehen 'für' ein Nomen. Sie helfen uns, Wiederholungen zu vermeiden. Statt 'Der Junge spielt' sagen wir 'Er spielt'.",
    t2_b1: "Personalpronomen: ich, du, er, sie, es...",
    t2_b2: "Possessivpronomen: mein, dein, sein...",
    t2_inst: "Finde das Pronomen im Satz!",
    t2_h1: "Welches Wort ersetzt eine Person?",
    t2_h2: "'Wir' ist das Pronomen.",
    t2_w2_1: "Wir", t2_w2_2: "gehen", t2_w2_3: "heute", t2_w2_4: "baden", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Welches Wort ist ein Possessivpronomen (Besitzanzeiger)?",
    t2_qa: "mein", t2_qb: "mir", t2_qc: "man", t2_qd: "mit",

    // T3: Präpositionen (Wo ist es?)
    t3_title: "Präpositionen",
    t3_text: "Präpositionen zeigen uns, wo etwas ist oder wann etwas passiert. Sie stehen meistens vor einem Nomen. Beispiele: in, auf, unter, vor, hinter.",
    t3_b1: "Verhältniswörter (Ort/Zeit).",
    t3_inst: "Welches Wort passt zum Bild (Katze 📦)?",
    t3_h1: "Wo ist die Katze? Sie ist im Karton.",
    t3_h2: "Die Präposition ist 'in'.",
    t3_w3_1: "in", t3_w3_2: "über", t3_w3_3: "unter", t3_w3_4: "neben",
    // Quiz: MANUAL
    t3_q: "Welches Wort ist eine Präposition?",
    t3_qa: "hinter", t3_qb: "heute", t3_qc: "hell", t3_qd: "holen",

    // T4: Wortarten sortieren
    t4_title: "Der große Sortierer",
    t4_text: "Kannst du die fünf wichtigsten Wortarten unterscheiden? Denk an die Großschreibung bei Nomen!",
    t4_b1: "Nomen, Verb, Adjektiv.",
    t4_b2: "Pronomen, Präposition.",
    t4_inst: "Sortiere die Wörter in die richtigen Boxen!",
    t4_h1: "Frage dich: Was kann man tun (Verb)? Wie ist es (Adjektiv)?",
    t4_h2: "Baum -> Nomen, singen -> Verb, bunt -> Adjektiv.",
    t4_bn: "Nomen 📦", t4_bv: "Verb 🏃", t4_ba: "Adjektiv 🎨",
    t4_i1: "Apfel", t4_i2: "lachen", t4_i3: "schnell", t4_i4: "Sonne",
    // Quiz: GENERATOR (verben_k3)

    // T5: Zahlwörter (Numerale)
    t5_title: "Zahlwörter",
    t5_text: "Auch Zahlen gehören zu einer Wortart: den Numeralen. Wir schreiben sie meistens klein (eins, zwei, viele, einige).",
    t5_b1: "eins, zwei, hundert...",
    t5_b2: "viele, einige, alle.",
    t5_inst: "Welches Wort ist ein Zahlwort (Numeral)?",
    t5_h1: "Suche nach einer Menge oder einer Zahl.",
    t5_h2: "'viele' ist ein Zahlwort.",
    t5_w5_1: "viele", t5_w5_2: "vielleicht", t5_w5_3: "viertel", t5_w5_4: "vogel",
    // Quiz: MANUAL
    t5_q: "Wie schreiben wir Zahlwörter wie 'eins' oder 'viele' normalerweise?",
    t5_qa: "klein", t5_qb: "groß", t5_qc: "immer groß", t5_qd: "mit Bindestrich",

    // T6: Wortarten im Text erkennen
    t6_title: "Text-Analyse",
    t6_text: "In einem Satz verstecken sich viele Wortarten. Kannst du sie alle benennen?",
    t6_b1: "Nomen = Groß.",
    t6_b2: "Verben = Platz 2.",
    t6_inst: "Was ist das Wort 'mein' in diesem Satz?",
    t6_h1: "Es zeigt, wem der Hund gehört.",
    t6_h2: "Es ist ein Pronomen.",
    t6_sent_a: "Mein Hund spielt.",
    t6_ca1: "Pronomen", t6_ca2: "Nomen", t6_ca3: "Verb", t6_ca4: "Adjektiv",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wortarten-Turm (Physics Stacker!)
    t7_title: "Der Wortarten-Turm",
    t7_text: "Staple nur die Steine mit der richtigen Wortart! Heute suchen wir alle ADJEKTIVE (Wiewörter).",
    t7_b1: "Staple die Wiewörter.",
    t7_inst: "Baue einen Turm aus Adjektiven!",
    t7_h1: "Suche Wörter, die beschreiben, wie etwas ist.",
    t7_h2: "bunt, groß, schnell, klug.",
    t7_target: "Adjektiv-Turm 🧱",
    t7_s1: "bunt", t7_s2: "groß", t7_s3: "schnell", t7_s4: "Baum (Falsch)",
    // Quiz: GENERATOR (verben_k3)
  }
};

export const WORTART_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏷️", label: "Nomen" }, { emoji: "🏃", label: "Verb" }, { emoji: "🎨", label: "Adjektiv" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "ich", color: "#1E40AF", bg: "#DBEAFE" }, { text: "mein", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "📦", label: "in / auf" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [0],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Nomen"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Verb"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t4_bn" }, { id: "v", label: "t4_bv" }, { id: "a", label: "t4_ba" }],
      items: [
        { text: "t4_i1", bucketId: "n" },
        { text: "t4_i2", bucketId: "v" },
        { text: "t4_i3", bucketId: "a" },
        { text: "t4_i4", bucketId: "n" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "viele", highlightChars: ["v"], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4"],
      correctIndices: [0],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Mein", "Hund", "spielt"], highlightIndices: [0], color: "#10B981" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_a",
      choices: ["t6_ca1", "t6_ca2", "t6_ca3", "t6_ca4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stein auf Stein", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k3" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Satzgliederinsel
// Thema: Subjekt, Prädikat, Objekt (Akk/Dat), Adverbiale Bestimmung
// ─────────────────────────────────────────────────────────────────────────────

export const SATZGLIED4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzbau-Meisterwerk",

    // T1: Subjekt und Prädikat (Wiederholung)
    t1_title: "Das Grundgerüst",
    t1_text: "Jeder Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut es?). Sie sind das Herzstück des Satzes.",
    t1_b1: "Subjekt = Der Täter.",
    t1_b2: "Prädikat = Die Handlung.",
    t1_inst: "Finde das Subjekt in diesem Satz!",
    t1_h1: "Frage: Wer oder was rennt schnell?",
    t1_h2: "'Das Pferd' ist das Subjekt.",
    t1_w1: "Das Pferd", t1_w2: "rennt", t1_w3: "schnell", t1_w4: "über die Wiese", t1_w5: ".",
    t1_q: "Welches Satzglied ist 'rennt' im Satz 'Das Pferd rennt'?",
    t1_qa: "Prädikat", t1_qb: "Subjekt", t1_qc: "Objekt", t1_qd: "Adverbiale",

    // T2: Das Akkusativ-Objekt (Wen-Ergänzung)
    t2_title: "Das Akkusativ-Objekt",
    t2_text: "Das Akkusativ-Objekt ist die Wen-oder-Was-Ergänzung. Wir fragen: Wen oder was sieht das Kind? Den Regenbogen.",
    t2_b1: "Frage: Wen oder was?",
    t2_b2: "Oft im 4. Fall (Akkusativ).",
    t2_inst: "Klicke auf das Akkusativ-Objekt!",
    t2_h1: "Frage: Wen oder was kauft der Vater?",
    t2_h2: "Er kauft 'einen Apfel'.",
    t2_w2_1: "Der Vater", t2_w2_2: "kauft", t2_w2_3: "einen Apfel", t2_w2_4: ".",
    t2_q: "Wie fragen wir nach dem Akkusativ-Objekt?",
    t2_qa: "Wen oder was?", t2_qb: "Wem?", t2_qc: "Wo?", t2_qd: "Wann?",

    // T3: Das Dativ-Objekt (Wem-Ergänzung)
    t3_title: "Das Dativ-Objekt",
    t3_text: "Das Dativ-Objekt ist die Wem-Ergänzung. Wir fragen: Wem gibt die Lehrerin das Buch? Dem Schüler.",
    t3_b1: "Frage: Wem?",
    t3_b2: "Oft im 3. Fall (Dativ).",
    t3_inst: "Welches Satzglied ist 'dem Freund'?",
    t3_h1: "Frage: WEM hilft das Mädchen?",
    t3_h2: "Es ist das Dativ-Objekt.",
    t3_sent: "Das Mädchen hilft ___.",
    t3_c1: "dem Freund (Dativ-Objekt)", t3_c2: "den Freund (Akkusativ-Objekt)", t3_c3: "der Freund (Subjekt)", t3_c4: "hilft (Prädikat)",
    t3_q: "Was ist das Dativ-Objekt in: 'Ich danke dem Lehrer.'?",
    t3_qa: "dem Lehrer", t3_qb: "Ich", t3_qc: "danke", t3_qd: "Es gibt keins",

    // T4: Adverbiale Bestimmung der Zeit (Wann?)
    t4_title: "Wann passiert es?",
    t4_text: "Die adverbiale Bestimmung der Zeit (Zeitergänzung) sagt uns, wann etwas passiert. Wir fragen: Wann, wie lange oder wie oft?",
    t4_b1: "Frage: Wann?",
    t4_b2: "Beispiele: heute, gestern, am Abend.",
    t4_inst: "Finde die Zeitergänzung im Satz!",
    t4_h1: "Welches Wort sagt uns, WANN wir ins Kino gehen?",
    t4_h2: "'Heute Abend' ist die Zeitergänzung.",
    t4_w4_1: "Heute Abend", t4_w4_2: "gehen", t4_w4_3: "wir", t4_w4_4: "ins Kino", t4_w4_5: ".",
    t4_q: "Welches Wort ist eine adverbiale Bestimmung der Zeit?",
    t4_qa: "morgens", t4_qb: "dort", t4_qc: "schnell", t4_qd: "laufen",

    // T5: Adverbiale Bestimmung des Ortes (Wo?)
    t5_title: "Wo passiert es?",
    t5_text: "Die adverbiale Bestimmung des Ortes (Ortsergänzung) sagt uns, wo etwas ist oder wohin etwas geht. Wir fragen: Wo, woher oder wohin?",
    t5_b1: "Frage: Wo / Wohin?",
    t5_b2: "Beispiele: im Park, nach Hause, dort.",
    t5_inst: "Sortiere die Satzglieder!",
    t5_h1: "Frage nach dem Ort (Wo?) und der Zeit (Wann?).",
    t5_h2: "im Wald -> Ort. am Sonntag -> Zeit.",
    t5_bo: "Ort 📍", t5_bz: "Zeit 🕒",
    t5_i1: "im Garten", t5_i2: "gestern", t5_i3: "nach Berlin", t5_i4: "um 8 Uhr",
    t5_q: "Welche Frage gehört zur Ortsergänzung?",
    t5_qa: "Wo?", t5_qb: "Wann?", t5_qc: "Wie?", t5_qd: "Warum?",

    // T6: Satzglieder bestimmen (Mix)
    t6_title: "Der Profi-Check",
    t6_text: "Ein Satz kann viele Glieder haben. Kannst du sie alle in einem Satz finden? Subjekt, Prädikat, Objekt und Adverbiale.",
    t6_b1: "Bestimme alle Teile.",
    t6_inst: "Bringe die Bausteine in die richtige Reihenfolge!",
    t6_h1: "Beginne mit der Zeit (Morgen), dann das Prädikat (besucht).",
    t6_h2: "Morgen besucht uns die Tante.",
    t6_o1: "Morgen", t6_o2: "besucht", t6_o3: "uns", t6_o4: "die Tante.",
    t6_q: "Was ist 'Morgen' im Satz 'Morgen besucht uns die Tante'?",
    t6_qa: "Zeitergänzung", t6_qb: "Ortsergänzung", t6_qc: "Subjekt", t6_qd: "Objekt",

    // T7: Satzglied-Stapler (Physics!)
    t7_title: "Der Glieder-Stapler",
    t7_text: "Nur die Steine mit OBJEKTEN dürfen auf den Stapel! Achte auf die Fragen 'Wen?' und 'Wem?'.",
    t7_b1: "Sammle Akkusativ- und Dativ-Objekte.",
    t7_inst: "Staple nur die Objekte!",
    t7_h1: "Suche nach Ergänzungen wie 'den Ball' oder 'mir'.",
    t7_h2: "den Brief (Akk-Objekt), dem Kind (Dat-Objekt).",
    t7_target: "Objekt-Stapel 🧱",
    t7_s1: "den Brief", t7_s2: "dem Kind", t7_s3: "die Tasche", t7_s4: "läuft (Falsch)",
  }
};

export const SATZGLIED4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Das Pferd", "rennt", "schnell", "."], highlightIndices: [0, 1], color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "Wen?", emoji: "🔍", color: "#B91C1C", bg: "#FEE2E2" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [2],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "Wem?", emoji: "🤝", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕒", label: "Wann?" }] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4", "t4_w4_5"],
      correctIndices: [0],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Wo?"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["Wann?"], bg: "#FEF3C7", border: "#F59E0B" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "o", label: "t5_bo" }, { id: "z", label: "t5_bz" }],
      items: [
        { text: "t5_i1", bucketId: "o" },
        { text: "t5_i2", bucketId: "z" },
        { text: "t5_i3", bucketId: "o" },
        { text: "t5_i4", bucketId: "z" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Morgen", "besucht", "uns", "die Tante"], highlightIndices: [0, 1, 2, 3], color: "#8B5CF6" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Objekt-Stapler", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Satzarteninsel
// Thema: Haupt- und Nebensatz, Konjunktionen (weil, dass, wenn, obwohl)
// ─────────────────────────────────────────────────────────────────────────────

export const SATZART4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satz-Dschungel (HS & NS)",

    // T1: Hauptsatz vs. Nebensatz
    t1_title: "Hauptsatz und Nebensatz",
    t1_text: "Ein Hauptsatz kann alleine stehen (Ich spiele). Ein Nebensatz braucht immer einen Hauptsatz und wird durch ein Komma getrennt. Er gibt uns mehr Infos.",
    t1_b1: "Hauptsatz (HS) = kann alleine stehen.",
    t1_b2: "Nebensatz (NS) = braucht den HS.",
    t1_inst: "Welcher Teil ist der Nebensatz?",
    t1_h1: "Suche den Teil, der nach dem Komma steht.",
    t1_h2: "'weil ich müde bin' ist der Nebensatz.",
    t1_w1: "Ich schlafe", t1_w2: ",", t1_w3: "weil ich müde bin", t1_w4: ".",
    t1_q: "Wodurch werden Haupt- und Nebensatz immer getrennt?",
    t1_qa: "Durch ein Komma", t1_qb: "Durch einen Punkt", t1_qc: "Gar nicht", t1_qd: "Durch ein Ausrufezeichen",

    // T2: Die Verb-Kick-Regel
    t2_title: "Das Verb am Ende",
    t2_text: "Das Wichtigste im Nebensatz: Das gebeugte Verb rutscht ganz an das Ende! 'Ich weiß, dass du heute KOMMST.'",
    t2_b1: "Kötőszó (Konjunktion) am Anfang.",
    t2_b2: "Verb am Satzende.",
    t2_inst: "Finde das Verb am Ende des Nebensatzes!",
    t2_h1: "Suche das Tunwort ganz am Ende.",
    t2_h2: "Das Wort 'scheint' steht ganz hinten.",
    t2_w2_1: "Ich freue mich", t2_w2_2: ",", t2_w2_3: "dass die Sonne", t2_w2_4: "scheint", t2_w2_5: ".",
    t2_q: "Wo steht das Verb in einem Nebensatz mit 'weil'?",
    t2_qa: "Ganz am Ende", t2_qb: "An zweiter Stelle", t2_qc: "Ganz am Anfang", t2_qd: "Hinter dem Komma",

    // T3: Weil, dass, wenn
    t3_title: "Wichtige Konjunktionen",
    t3_text: "Konjunktionen sind die Kleber zwischen den Sätzen. 'weil' erklärt den Grund, 'wenn' eine Bedingung und 'dass' leitet oft einen Gedanken ein.",
    t3_b1: "weil (Grund)",
    t3_b2: "wenn (Bedingung)",
    t3_b3: "dass (Ergänzung)",
    t3_inst: "Welches Bindewort passt in die Lücke?",
    t3_h1: "Es wird ein Grund gesucht (Warum?).",
    t3_h2: "Benutze 'weil'.",
    t3_sent: "Ich lerne viel ___ ich eine gute Note will.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn", t3_c4: "obwohl",
    t3_q: "Welches Wort ist eine Konjunktion (Bindewort)?",
    t3_qa: "obwohl", t3_qb: "oft", t3_qc: "oben", t3_qd: "ohne",

    // T4: Satzgefüge bauen
    t4_title: "Satzgefüge bauen",
    t4_text: "Wenn wir einen Hauptsatz und einen Nebensatz verbinden, nennen wir das ein Satzgefüge. Vergiss das Komma zwischen den Bausteinen nicht!",
    t4_b1: "HS + Komma + NS.",
    t4_inst: "Verbinde die passenden Satzteile!",
    t4_h1: "Welcher Grund passt zu welcher Handlung?",
    t4_h2: "Ich ziehe die Jacke an -> weil es kalt ist.",
    t4_l1: "Ich esse etwas", t4_r1: "weil ich Hunger habe.",
    t4_l2: "Ich lerne", t4_r2: "dass ich es verstehe.",
    t4_l3: "Ich komme mit", t4_r3: "wenn du mich fragst.",
    t4_l4: "Ich weiß", t4_r4: "dass du da bist.",
    t4_q: "Wie heißt die Verbindung aus Haupt- und Nebensatz?",
    t4_qa: "Satzgefüge", t4_qb: "Satzreihe", t4_qc: "Wortfamilie", t4_qd: "Aussagesatz",

    // T5: Das Verb wandert (Physics Slingshot!)
    t5_title: "Verb-Schleuder",
    t5_text: "Im Nebensatz muss das Verb nach hinten! Schieße nur auf die Nebensätze, in denen das Verb am ENDE steht.",
    t5_b1: "Achte auf das Wort ganz hinten.",
    t5_inst: "Triff die richtigen Nebensätze!",
    t5_h1: "Suche Sätze wie '... weil er lacht.'",
    t5_h2: "... wenn es regnet, ... dass du kommst.",
    t5_m1: "... wenn es regnet", t5_m2: "... dass du kommst", t5_m3: "... weil er lacht", t5_m4: "... er lacht laut (Falsch)",
    t5_q: "Welcher Nebensatz ist richtig gebaut?",
    t5_qa: "... weil ich heute gehe.", t5_qb: "... weil ich gehe heute.", t5_qc: "... weil gehe ich heute.", t5_qd: "... ich gehe heute.",

    // T6: Obwohl - Der Gegensatz
    t6_title: "Obwohl (Der Gegensatz)",
    t6_text: "Das Wort 'obwohl' nutzen wir, wenn etwas anders ist, als man denkt. 'Ich gehe raus, obwohl es regnet.'",
    t6_b1: "obwohl = ein Hindernis.",
    t6_inst: "Welches Wort passt hier: '___ es spät ist, lese ich.'?",
    t6_h1: "Es ist spät (Hindernis), aber ich lese trotzdem.",
    t6_h2: "Wähle 'Obwohl'.",
    t6_sent_o: "___ es regnet, spielen wir draußen.",
    t6_co1: "Obwohl", t6_co2: "Weil", t6_co3: "Dass", t6_co4: "Wenn",
    t6_q: "Was macht das Verb nach dem Wort 'obwohl'?",
    t6_qa: "Es wandert ans Ende", t6_qb: "Es steht an Platz 2", t6_qc: "Es verschwindet", t6_qd: "Es wird groß geschrieben",

    // T7: Der Satz-Baumeister
    t7_title: "Satzbau-Prüfung",
    t7_text: "Baue ein komplettes Satzgefüge. Achte auf das Komma und die Position des Verbs im Nebensatz!",
    t7_b1: "HS ➔ Komma ➔ NS (Verb am Ende).",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Hauptsatz zuerst: 'Ich hoffe'. Dann das Komma.",
    t7_h2: "Ich hoffe, dass du kommst.",
    t7_f1: "Ich hoffe,", t7_f2: "dass", t7_f3: "du", t7_f4: "kommst.",
    t7_q: "Was ist 'kommst' in diesem Satzgefüge?",
    t7_qa: "Das Verb im Nebensatz", t7_qb: "Das Subjekt", t7_qc: "Die Konjunktion", t7_qd: "Ein Adjektiv",
  }
};

export const SATZART4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "compound-word", word1: "Hauptsatz", word2: "Nebensatz", result: "Satzgefüge", color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "sentence-display", words: ["Ich freue mich,", "dass die Sonne", "scheint"], highlightIndices: [2], color: "#EF4444" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "weil", color: "#1E40AF", bg: "#DBEAFE" }, { text: "wenn", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔗", title: "Satz-Verbinder", bg: "#F1F5F9" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Verb-Ende Check", bg: "#F1F5F9" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t5_id1", text: "t5_m1", isCorrect: true },
        { id: "t5_id2", text: "t5_m2", isCorrect: true },
        { id: "t5_id3", text: "t5_m3", isCorrect: true },
        { id: "t5_id4", text: "t5_m4", isCorrect: false },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "obwohl", highlightChars: ["o"], color: "#F59E0B" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_o",
      choices: ["t6_co1", "t6_co2", "t6_co3", "t6_co4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", title: "Satzbau-Profi", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Verbeninsel (Trennbare Verben & Futur)
// Thema: Trennbare Verben (aufmachen → macht auf), Futur I (wird spielen)
// ─────────────────────────────────────────────────────────────────────────────

export const VERB4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Igen-Kraftwerk",

    // T1: Was sind trennbare Verben?
    t1_title: "Die Trennbaren",
    t1_text: "Einige Verben haben einen Vorsatz (Präfix). Wenn wir sie im Satz beugen, trennt sich dieser Vorsatz ab und springt ganz ans Ende des Satzes. Beispiel: AUFstehen ➔ Ich stehe um 7 Uhr AUF.",
    t1_b1: "Präfix (vorne) trennt sich ab.",
    t1_b2: "Das Präfix steht am Satzende.",
    t1_inst: "Welches Wort ist ein trennbares Verb?",
    t1_h1: "Kannst du den vorderen Teil abtrennen? (auf-machen, an-fangen)",
    t1_h2: "'anfangen' ist trennbar.",
    t1_w1: "anfangen", t1_w2: "lernen", t1_w3: "singen", t1_w4: "sehen",
    // Quiz: GENERATOR (verben_k3)

    // T2: Die Satzklammer
    t2_title: "Die Satzklammer",
    t2_text: "Das Verb und sein abgetrennter Teil bilden eine Klammer um den Rest des Satzes. Vorne steht das gebeugte Verb, hinten der Vorsatz. 'Er MACHT das Fenster AUF.'",
    t2_b1: "Verb an Platz 2.",
    t2_b2: "Vorsatz am Ende.",
    t2_inst: "Finde das Präfix am Satzende!",
    t2_h1: "Welches kleine Wort steht ganz hinten és egy igéhez tartozik?",
    t2_h2: "Das Wort 'aus' gehört zu 'sieht'.",
    t2_w2_1: "Das Licht", t2_w2_2: "geht", t2_w2_3: "plötzlich", t2_w2_4: "aus", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Wo steht das Präfix bei einem trennbaren Verb im Aussagesatz?",
    t2_qa: "Ganz am Ende", t2_qb: "Direkt vor dem Verb", t2_qc: "Am Satzanfang", t2_qd: "Hinter dem Subjekt",

    // T3: Futur I (Wiederholung & Vertiefung)
    t3_title: "Blick in die Zukunft",
    t3_text: "Das Futur I bilden wir mit 'werden' und der Grundform am Ende. 'Wir werden morgen ein Eis essen.' Das Verb am Ende bleibt immer in der Grundform!",
    t3_b1: "werden + Grundform (Infinitiv).",
    t3_inst: "Welche Form ist die richtige Grundform für das Ende?",
    t3_h1: "Die Grundform endet meist auf -en.",
    t3_h2: "Er wird morgen 'kommen'.",
    t3_sent: "Er wird morgen pünktlich ___.",
    t3_c1: "kommen", t3_c2: "kam", t3_c3: "gekommen", t3_c4: "kommt",
    // Quiz: MANUAL
    t3_q: "In welcher Form steht das Hauptverb im Futur I?",
    t3_qa: "Grundform (Infinitiv)", t3_qb: "Partizip II", t3_qc: "Präteritum", t3_qd: "Gebeugte Form",

    // T4: Werden - Der Zukunfts-Motor
    t4_title: "Der Zukunfts-Motor",
    t4_text: "Das Hilfsverb 'werden' muss sich an das Subjekt anpassen. Kannst du es richtig ragozni?",
    t4_b1: "ich werde, du wirst, er wird.",
    t4_b2: "wir werden, ihr werdet, sie werden.",
    t4_inst: "Sortiere: Welches 'werden' passt zu wem?",
    t4_h1: "Schau auf die Endung: -e, -st, -d.",
    t4_h2: "ich werde, du wirst, er wird.",
    t4_bw1: "ich / wir / sie", t4_bw2: "du / er / ihr",
    t4_i1: "werde", t4_i2: "wirst", t4_i3: "wird", t4_i4: "werden",
    // Quiz: GENERATOR (verben_k3)

    // T5: Trennbar oder nicht?
    t5_title: "Trenn-Check",
    t5_text: "Nicht jedes Verb mit einem Vorsatz ist trennbar! Verben mit be-, ent-, ver- oder zer- trennen sich NIE. Beispiel: VERstehen ➔ Ich verstehe dich (nicht: ich stehe ver dich).",
    t5_b1: "Trennbar: auf-, an-, ab-, mit-.",
    t5_b2: "Nicht trennbar: be-, ver-, ent-, zer-.",
    t5_inst: "Welches Verb ist NICHT trennbar?",
    t5_h1: "Suche nach einem Wort, das mit 'ver-' vagy 'be-' anfängt.",
    t5_h2: "'verlieren' trennt sich nie.",
    t5_w3_1: "aufmachen", t5_w3_2: "mitkommen", t5_w3_3: "verlieren", t5_w3_4: "anfangen",
    // Quiz: MANUAL
    t5_q: "Welches Präfix trennt sich NIE vom Verb?",
    t5_qa: "ver-", t5_qb: "auf-", t5_qc: "mit-", t5_qd: "ab-",

    // T6: Sätze bauen im Futur
    t6_title: "Futur-Satzbau",
    t6_text: "Baue einen Satz über deine Pläne. Denk dran: 'werden' auf Platz 2, das andere Verb ganz nach hinten!",
    t6_b1: "werden ➔ Platz 2.",
    t6_b2: "Grundform ➔ Ende.",
    t6_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "Beginne mit 'Ich werde'.",
    t6_h2: "Ich werde später Fußball spielen.",
    t6_o1: "Ich", t6_o2: "werde", t6_o3: "später", t6_o4: "Fußball spielen.",
    // Quiz: MANUAL
    t6_q: "Wo steht 'werden' im Aussagesatz?",
    t6_qa: "An zweiter Stelle", t6_qb: "Ganz am Ende", t6_qc: "Am Anfang", t6_qd: "Hinter dem Verb",

    // T7: Präfix-Schleuder (Slingshot!)
    t7_title: "Präfix-Schleuder",
    t7_text: "Schieße die Vorsätze an das Ende der Sätze! Nur trennbare Verben sind heute unsere Ziele.",
    t7_b1: "auf-, an-, aus-, mit-.",
    t7_inst: "Schieße das Präfix ans Satzende!",
    t7_h1: "Welches kleine Wort passt zum Verb?",
    t7_h2: "auf-stehen, aus-gehen, mit-spielen.",
    t7_target: "Satzende 🎯",
    t7_m1: "auf", t7_m2: "an", t7_m3: "mit", t7_m4: "ver (Falsch)",
    // Quiz: GENERATOR (verben_k3)
  }
};

export const VERB4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "compound-word", word1: "auf", word2: "machen", result: "aufmachen", color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "sentence-display", words: ["Das Licht", "geht", "plötzlich", "aus"], highlightIndices: [1, 3], color: "#F59E0B" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#1E40AF", bg: "#DBEAFE" }, { text: "Infinitiv", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["ich", "werde"], ["du", "wirst"]], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "b1", label: "t4_bw1" }, { id: "b2", label: "t4_bw2" }],
      items: [
        { text: "t4_i1", bucketId: "b1" },
        { text: "t4_i2", bucketId: "b2" },
        { text: "t4_i3", bucketId: "b2" },
        { text: "t4_i4", bucketId: "b1" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["an-", "auf-"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["ver-", "be-"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w3_1", "t5_w3_2", "t5_w3_3", "t5_w3_4"],
      correctIndices: [2],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Ich", "werde", "Fußball", "spielen"], highlightIndices: [1, 3], color: "#8B5CF6" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏹", title: "Präfix-Jäger", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t7_id1", text: "t7_m1", isCorrect: true },
        { id: "t7_id2", text: "t7_m2", isCorrect: true },
        { id: "t7_id3", text: "t7_m3", isCorrect: true },
        { id: "t7_id4", text: "t7_m4", isCorrect: false },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k3" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Rechtschreibungsinsel
// Thema: das/dass, ä/äu vs. e/eu, Komma bei Aufzählungen, ß/ss, Silbentrennung
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreib-Olymps",

    // T1: das oder dass? (Der Trick)
    t1_title: "das oder dass?",
    t1_text: "Das ist die wichtigste Regel! Kannst du 'das' durch 'dieses', 'jenes' oder 'welches' ersetzen? Dann schreiben wir es mit einem 's'. Wenn nicht (meist nach einem Komma), schreiben wir 'dass'.",
    t1_b1: "das = dieses, jenes, welches.",
    t1_b2: "dass = Bindewort (nach dem Komma).",
    t1_inst: "Kannst du 'das' ersetzen?",
    t1_h1: "Probiere: 'Ich sehe das Haus' -> 'Ich sehe dieses Haus'. Geht!",
    t1_h2: "Wenn es geht, schreibst du 'das'.",
    t1_sent: "Ich hoffe, ___ du kommst.",
    t1_c1: "dass", t1_c2: "das", t1_c3: "das s", t1_c4: "daß",
    t1_q: "Wann schreiben wir 'das' mit nur einem 's'?",
    t1_qa: "Wenn man 'dieses' sagen kann", t1_qb: "Nach jedem Komma", t1_qc: "Immer am Satzanfang", t1_qd: "Nie",

    // T2: ä oder e? äu oder eu?
    t2_title: "ä oder e? äu oder eu?",
    t2_text: "Such das verwandte Wort! Wenn es ein Wort mit 'a' oder 'au' gibt, schreiben wir 'ä' oder 'äu'. Beispiel: Haus ➔ Häuser, Hand ➔ Hände. Aber: fertig (kein Wort mit a).",
    t2_b1: "a ➔ ä, au ➔ äu.",
    t2_b2: "Kein verwandtes Wort ➔ e / eu.",
    t2_inst: "Welches Wort wird mit 'äu' geschrieben?",
    t2_h1: "Suche ein Wort, das von einem Wort mit 'au' kommt.",
    t2_h2: "Häuser kommt von Haus.",
    t2_w2_1: "Häuser", t2_w2_2: "Eulen", t2_w2_3: "Keulen", t2_w2_4: "Beulen",
    t2_q: "Warum schreiben wir 'Hände' mit 'ä'?",
    t2_qa: "Weil es von 'Hand' kommt", t2_qb: "Weil es schöner aussieht", t2_qc: "Weil es kurz ist", t2_qd: "Weil alle Nomen ä haben",

    // T3: ß oder ss?
    t3_title: "ß oder ss?",
    t3_text: "Hör auf den Vokal! Nach einem KURZEN Vokal schreiben wir 'ss' (Fluss, essen). Nach einem LANGEN Vokal vagy Zwielaut (au, ei, ie) schreiben wir 'ß' (Fuß, beißen).",
    t3_b1: "Kurz ➔ ss.",
    t3_b2: "Lang / Zwielaut ➔ ß.",
    t3_inst: "Welches Wort braucht ein 'ß'?",
    t3_h1: "Hör genau hin: Ist der Vokal lang?",
    t3_h2: "Bei 'Fuß' ist das u lang, also ß.",
    t3_w3_1: "Fuß", t3_w3_2: "Fluss", t3_w3_3: "Essen", t3_w3_4: "Kuss",
    t3_q: "Was schreiben wir nach einem Zwielaut wie 'ei' oder 'au'?",
    t3_qa: "Immer ß", t3_qb: "Immer ss", t3_qc: "Einfach nur s", t3_qd: "Gar nichts",

    // T4: Silbentrennung
    t4_title: "Wörter trennen",
    t4_text: "Wenn am Ende der Zeile kein Platz mehr ist, trennen wir Wörter in Silben. Merke: 'Trenn nie st, denn es tut ihm weh!' (Aber ck wird jetzt auch nicht mehr getrennt).",
    t4_b1: "Trennen nach Sprechsilben.",
    t4_b2: "ck, ch, sch bleiben zusammen.",
    t4_inst: "Wo ist die richtige Trennung?",
    t4_h1: "Klatsche das Wort: Was-ser.",
    t4_h2: "Wähle 'Was-ser'.",
    t4_w4_1: "Was-ser", t4_w4_2: "Wass-er", t4_w4_3: "Wa-sser", t4_w4_4: "W-asser",
    t4_q: "Darf man 'st' bei der Silbentrennung trennen?",
    t4_qa: "Nein, niemals", t4_qb: "Ja, immer", t4_qc: "Nur bei Nomen", t4_qd: "Nur am Satzende",

    // T5: Komma-Profi
    t5_title: "Komma-Check",
    t5_text: "In der 4. Klasse setzen wir Kommas bei Aufzählungen UND zwischen Haupt- und Nebensätzen (vor Wörtern wie weil, dass, wenn).",
    t5_b1: "Aufzählungen (A, B und C).",
    t5_b2: "Satzgefüge (HS, NS).",
    t5_inst: "Wo fehlt das Komma?",
    t5_h1: "Suche das Bindewort 'weil'. Davor muss ein Komma stehen.",
    t5_h2: "Ich lache, weil es lustig ist.",
    t5_w5_1: "Ich lache", t5_w5_2: "weil es", t5_w5_3: "lustig ist", t5_w5_4: ".",
    t5_q: "Welches Wort braucht meistens ein Komma davor?",
    t5_qa: "weil", t5_qb: "und", t5_qc: "oder", t5_qd: "ein",

    // T6: Das/Dass Gap-Fill
    t6_title: "Das/Dass-Meister",
    t6_text: "Übung macht den Meister! Kannst du in diesem Satz das richtige 'das' vagy 'dass' einsetzen?",
    t6_b1: "Check: Dieses, jenes, welches?",
    t6_inst: "Wähle das richtige Wort!",
    t6_h1: "Ich weiß ... (Bindewort) ... das Auto (Artikel) schnell ist.",
    t6_h2: "dass (Bindewort) / das (Artikel).",
    t6_sent_d: "Ich weiß, ___ ___ Auto rot ist.",
    t6_cd1: "dass / das", t6_cd2: "das / dass", t6_cd3: "dass / dass", t6_cd4: "das / das",
    t6_q: "Welches Wort im Satz 'Ich sehe das Kind' kann man durch 'welches' ersetzen?",
    t6_qa: "das", t6_qb: "sehe", t6_qc: "Ich", t6_qd: "Kind",

    // T7: Rechtschreib-Stapler (Physics!)
    t7_title: "Fehler-Fresser",
    t7_text: "Staple nur die Wörter, die RICHTIG geschrieben sind. Achte auf alle Regeln!",
    t7_b1: "Check: ss/ß, ä/e, das/dass.",
    t7_inst: "Baue den Turm aus richtigen Wörtern!",
    t7_h1: "Hände (von Hand) ist richtig. Fluss (kurz) ist richtig.",
    t7_h2: "Hände, Fluss, dass, Fußball.",
    t7_target: "Richtig-Stapel ✅",
    t7_s1: "Hände", t7_s2: "Fluss", t7_s3: "Fußball", t7_s4: "Hende (Falsch)",
  }
};

export const RECHT4_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "das / dass", highlightChars: ["s"], color: "#EF4444" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      correctIndex: 0,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "Hand", word2: "➔", result: "Hände", color: "#10B981" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-pairs", pairs: [["u (kurz)", "ss"], ["u (lang)", "ß"]], color: "#3B82F6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [0],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-syllables", parts: ["Was", "ser"], color: "#0EA5E9", showClap: true },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"],
      correctIndices: [0],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Ich lache", ",", "weil es lustig ist"], highlightIndices: [1], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4"],
      correctIndices: [1], // The comma index
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "das", bg: "#DBEAFE", color: "#1E40AF" }, { text: "dass", bg: "#FEE2E2", color: "#B91C1C" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_d",
      choices: ["t6_cd1", "t6_cd2", "t6_cd3", "t6_cd4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stack Challenge", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K4 (Final Review)
// Thema: Wiederholung Kasus, Zeitformen, Wortarten, Rechtschreibung
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K4-Diplom",

    // T1: Kasus-Check (Nom, Akk, Dat)
    t1_title: "Das Kasus-Diplom",
    t1_text: "In der 4. Klasse beherrschst du alle Fälle! Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Achte besonders auf die Artikeländerungen.",
    t1_b1: "der ➔ den (Akk) / dem (Dat).",
    t1_b2: "die ➔ der (Dat).",
    t1_inst: "Welcher Fall wird hier gesucht?",
    t1_h1: "Frage: WEM hilft das Kind?",
    t1_h2: "Es ist der Dativ (3. Fall).",
    t1_w1: "Nominativ", t1_w2: "Akkusativ", t1_w3: "Dativ", t1_w4: "Genitiv",
    // Quiz: GENERATOR (dativ)

    // T2: Zeitformen (Futur I & Perfekt)
    t2_title: "Meister der Zeit",
    t2_text: "Ob gestern, heute oder morgen – du weißt, wie man die Verben beugt. Futur I mit 'werden' und Perfekt mit 'haben/sein'.",
    t2_b1: "Futur: Ich werde spielen.",
    t2_b2: "Perfekt: Ich habe gespielt.",
    t2_inst: "Welcher Satz steht im Futur I?",
    t2_h1: "Suche nach einer Form von 'werden'.",
    t2_h2: "'Wir werden lachen' ist Zukunft.",
    t2_s2_1: "Wir werden lachen", t2_s2_2: "Wir lachten", t2_s2_3: "Wir haben gelacht",
    // Quiz: GENERATOR (perfekt)

    // T3: Haupt- und Nebensätze
    t3_title: "Satzbau-Experte",
    t3_text: "Du kannst Sätze mit 'weil', 'dass' oder 'wenn' verbinden. Denk an das Komma und das Verb am Ende des Nebensatzes!",
    t3_b1: "Konjunktion leitet NS ein.",
    t3_b2: "Verb steht ganz hinten.",
    t3_inst: "Baue das Satzgefüge richtig zusammen!",
    t3_h1: "Hauptsatz zuerst, dann das Komma.",
    t3_h2: "Ich weiß, dass du recht hast.",
    t3_f1: "Ich weiß,", t3_f2: "dass", t3_f3: "du", t3_f4: "recht hast.",
    // Quiz: MANUAL
    t3_q: "Wo steht das Verb im Nebensatz?",
    t3_qa: "Ganz am Ende", t3_qb: "An zweiter Stelle", t3_qc: "Direkt nach dem Komma", t3_qd: "Ganz am Anfang",

    // T4: Satzglieder bestimmen
    t4_title: "Satzglieder-Analyse",
    t4_text: "Subjekt, Prädikat, Objekt oder Adverbiale? Du kannst den Satz in seine Einzelteile zerlegen.",
    t4_b1: "Wer? Was? Wen? Wem? Wann? Wo?",
    t4_inst: "Finde die adverbiale Bestimmung des Ortes (Ortsergänzung)!",
    t4_h1: "Frage: WO spielt das Kind?",
    t4_h2: "'im Garten' ist der Ort.",
    t4_w4_1: "Das Kind", t4_w4_2: "spielt", t4_w4_3: "im Garten", t4_w4_4: ".",
    // Quiz: MANUAL
    t4_q: "Was ist 'das Kind' in diesem Satz?",
    t4_qa: "Subjekt", t4_qb: "Prädikat", t4_qc: "Objekt", t4_qd: "Zeitergänzung",

    // T5: das oder dass?
    t5_title: "Das/Dass-Finale",
    t5_text: "Ein s oder zwei s? Wenn du 'dieses' oder 'welches' sagen kannst, nimm das 'das'. Sonst 'dass'.",
    t5_b1: "das = Ersatzprobe möglich.",
    t5_b2: "dass = Bindewort.",
    t5_inst: "Welches Wort passt in die Lücke?",
    t5_h1: "Probiere: 'dieses Buch'. Geht das?",
    t5_h2: "Ja, also schreiben wir 'das'.",
    t5_sent: "Ich lese ___ spannende Buch.",
    t5_c1: "das", t5_c2: "dass", t5_c3: "daß", t5_c4: "das s",
    // Quiz: MANUAL
    t5_q: "Ich finde, ___ du toll bist. (Was passt?)",
    t5_qa: "dass", t5_qb: "das", t5_qc: "das s", t5_qd: "daß",

    // T6: Wortarten-Mix
    t6_title: "Wortarten-Profi",
    t6_text: "Nomen, Verben, Adjektive, Pronomen und Präpositionen – du kennst sie alle!",
    t6_b1: "Alle Wortarten im Griff.",
    t1_inst_6: "Finde das Pronomen!",
    t6_h1: "Welches Wort steht für eine Person?",
    t6_h2: "'Euch' ist das Pronomen.",
    t6_w6_1: "Ich", t6_w6_2: "helfe", t6_w6_3: "euch", t6_w6_4: "gerne", t6_w6_5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Astro-Abschluss (Magnet Challenge!)
    t7_title: "Astro-Abschlussprüfung",
    t7_text: "Herzlichen Glückwunsch! Du bist am Ende deiner Reise. Sammle noch einmal alle Akkusativ-Objekte ein!",
    t7_b1: "Finde alle Wen-oder-Was-Ergänzungen.",
    t7_inst: "Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "Frage: Wen oder was?",
    t7_h2: "den Schatz, die Sterne, das Ziel.",
    t7_target: "Akkusativ 🧲",
    t7_m1: "den Schatz", t7_m2: "die Sterne", t7_m3: "das Ziel", t7_m4: "der Kapitän (Nom)",
    // Quiz: MIX-GENERATOR
  }
};

export const EXAM4_POOL: PoolTopicDef[] = [
  // ── 1. Kasus Check (highlight-text) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "Wem?", emoji: "🤝", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2], // Dativ
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 2. Zeitformen Check (highlight-text) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [{ emoji: "🚀", label: "Zukunft" }, { emoji: "🔙", label: "Vergangenheit" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_s2_1", "t2_s2_2", "t2_s2_3"],
      correctIndices: [0], // Futur I
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 3. Satzbau HS/NS (sentence-build) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "compound-word", word1: "Satz 1", word2: "Satz 2", result: "Komma!", color: "#8B5CF6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t3_f1", "t3_f2", "t3_f3", "t3_f4"],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Satzglieder (highlight-text) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Das Kind", "spielt", "im Garten"], highlightIndices: [2], color: "#10B981" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"],
      correctIndices: [2], // im Garten
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },

  // ── 5. das/dass (gap-fill) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "das / dass", highlightChars: ["s"], color: "#EF4444" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Wortarten Check (highlight-text) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏷️", label: "Wortarten" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4", "t6_w6_5"],
      correctIndices: [0, 2], // Ich, euch
      instruction: "t1_inst_6", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Astro-Finale (physics-magnet) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", title: "K4 Champion!", bg: "#FEF3C7" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-magnet",
      pairs: [{ left: "t7_m1", right: "t7_m4" }, { left: "t7_m2", right: "t7_m4" }, { left: "t7_m3", right: "t7_m4" }],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nominativ" }, // Final mix check
  },
];
