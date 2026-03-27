// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Pluralinsel
// Thema: Pluralformen (-e, -er, -en, -s, Umlaut)
// ─────────────────────────────────────────────────────────────────────────────

export const PLURAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pluralinsel",

    // T1: Einzahl oder Mehrzahl?
    t1_title: "Einzahl oder Mehrzahl?",
    t1_text: "Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t1_b1: "Einzahl = Singular (1 Ding).",
    t1_b2: "Mehrzahl = Plural (viele Dinge).",
    t1_inst: "Sortiere die Wörter: Einzahl oder Mehrzahl?",
    t1_h1: "Ist es nur ein Ding oder sind es viele?",
    t1_h2: "Baum ist Einzahl, Bäume ist Mehrzahl.",
    t1_be: "Einzahl 🍎", t1_bm: "Mehrzahl 🍎🍎",
    t1_i1: "Baum", t1_i2: "Hunde", t1_i3: "Autos", t1_i4: "Katze",

    // T2: Plural mit -e
    t2_title: "Plural mit -e",
    t2_text: "Viele Nomen bekommen in der Mehrzahl einfach ein '-e' ans Ende gehängt. Aus 'der Tisch' wird 'die Tische', aus 'der Hund' wird 'die Hunde'.",
    t2_b1: "Oft hängen wir ein -e an.",
    t2_inst: "Verbinde die Einzahl mit der Mehrzahl!",
    t2_h1: "Suche das Wort mit dem -e am Ende.",
    t2_h2: "Hund -> Hunde, Tisch -> Tische.",
    t2_l1: "Hund", t2_r1: "Hunde",
    t2_l2: "Tisch", t2_r2: "Tische",
    t2_l3: "Schuh", t2_r3: "Schuhe",
    t2_l4: "Stift", t2_r4: "Stifte",

    // T3: Plural mit -er (und Umlaut)
    t3_title: "Plural mit -er (und Umlaut)",
    t3_text: "Einige Wörter verändern sich stark! Sie bekommen ein '-er' am Ende und aus a, o, u wird oft ä, ö, ü (Umlaut). Das Buch ➔ die Bücher.",
    t3_b1: "Endung: -er.",
    t3_b2: "a, o, u werden oft zu ä, ö, ü.",
    t3_inst: "Welches Wort passt in die Lücke?",
    t3_h1: "Denk an den Umlaut (ä/ö/ü) und das '-er'.",
    t3_h2: "Buch wird zu Bücher.",
    t3_sent: "Ich lese gerne spannende ___.",
    t3_c1: "Bücher", t3_c2: "Bucher", t3_c3: "Buchen", t3_c4: "Büche",

    // T4: Plural mit -n oder -en
    t4_title: "Plural mit -n oder -en",
    t4_text: "Viele Nomen, die auf -e enden, bekommen in der Mehrzahl nur ein '-n'. Andere bekommen ein '-en'. die Blume ➔ die Blumen, die Frau ➔ die Frauen.",
    t4_b1: "Wörter auf -e bekommen oft ein -n.",
    t4_b2: "Andere bekommen -en.",
    t4_inst: "Finde das Plural-Wort im Satz!",
    t4_h1: "Suche das Nomen, das viele Menschen beschreibt.",
    t4_h2: "Das Wort 'Frauen' steht in der Mehrzahl.",
    t4_w1: "Die", t4_w2: "Frauen", t4_w3: "trinken", t4_w4: "Tee", t4_w5: ".",

    // T5: Plural mit -s
    t5_title: "Plural mit -s",
    t5_text: "Wörter, die aus anderen Sprachen zu uns gekommen sind, bekommen oft ein '-s' im Plural. das Auto ➔ die Autos, das Baby ➔ die Babys.",
    t5_b1: "Fremdwörter bekommen oft ein -s.",
    t5_inst: "Baue den Satz richtig zusammen!",
    t5_h1: "Wer macht was? 'Die Autos fahren...'",
    t5_h2: "Die Autos fahren schnell.",
    t5_f1: "Die", t5_f2: "Autos", t5_f3: "fahren", t5_f4: "schnell.",

    // T6: Plural ohne Endung
    t6_title: "Plural ohne Veränderung",
    t6_text: "Manche Wörter verändern sich gar nicht! Sie sehen im Plural genauso aus wie im Singular. der Lehrer ➔ die Lehrer, das Mädchen ➔ die Mädchen.",
    t6_b1: "Wort bleibt gleich.",
    t6_b2: "Nur der Artikel (die) ändert sich.",
    t6_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "Der Artikel (Die) steht ganz vorne.",
    t6_h2: "Die Mädchen spielen.",
    t6_o1: "Die", t6_o2: "Mädchen", t6_o3: "spielen.",

    // T7: Der Plural-Meister
    t7_title: "Der Plural-Meister",
    t7_text: "Jetzt kennst du alle Pluralformen (-e, -er, -en, -s und ohne Endung). Zeit für den Meister-Test!",
    t7_b1: "Achte auf die richtige Endung.",
    t7_inst: "Welches ist die richtige Pluralform von 'Apfel'?",
    t7_h1: "Der Apfel bekommt einen Umlaut, aber keine neue Endung.",
    t7_h2: "Der Plural ist 'Äpfel'.",
    t7_sent2: "Im Korb liegen viele ___.",
    t7_c2_1: "Äpfel", t7_c2_2: "Apfeln", t7_c2_3: "Äpfeln", t7_c2_4: "Apfels",
  }
};

export const PLURAL_POOL: PoolTopicDef[] = [
  // ── 1. Einzahl oder Mehrzahl? (drag-to-bucket) ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Baum", "Katze"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Hunde", "Autos"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "e", label: "t1_be" }, { id: "m", label: "t1_bm" }],
      items: [
        { text: "t1_i1", bucketId: "e" }, // Baum
        { text: "t1_i2", bucketId: "m" }, // Hunde
        { text: "t1_i3", bucketId: "m" }, // Autos
        { text: "t1_i4", bucketId: "e" }, // Katze
      ],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 2. Plural mit -e (match-pairs) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["Hund", "Hund-e"], ["Tisch", "Tisch-e"]], color: "#10B981" },
    bulletKeys: ["t2_b1"],
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
    quiz: { generate: "plural" },
  },

  // ── 3. Plural mit -er + Umlaut (gap-fill) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "Bücher", highlightChars: ["ü", "e", "r"], color: "#8B5CF6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], // Bücher
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 4. Plural mit -n/-en (highlight-text) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "Blume-n", color: "#EC4899", bg: "#FCE7F3" }, { text: "Frau-en", color: "#EC4899", bg: "#FCE7F3" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"],
      correctIndices: [1], // Frauen
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 5. Plural mit -s (sentence-build) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "🚗🚗", label: "Autos" }, { emoji: "👶👶", label: "Babys" }] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"], // Die, Autos, fahren, schnell.
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 6. Plural ohne Veränderung (word-order) ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["der Lehrer", "die Lehrer"], ["das Mädchen", "die Mädchen"]], color: "#F59E0B" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o3", "t6_o1"], // Mädchen, spielen., Die
      correctOrder: [2, 0, 1], // Die -> Mädchen -> spielen.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 7. Plural-Meister Check (gap-fill) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🍎🍎", title: "Mehrzahl!", bg: "#FEF3C7" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t7_sent2",
      choices: ["t7_c2_1", "t7_c2_2", "t7_c2_3", "t7_c2_4"], // Äpfel
      correctIndex: 0,
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "plural" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verbinsel
// Thema: Verbkonjugation Präsens (ich laufe, du läufst...), starke/schwache Verben
// ─────────────────────────────────────────────────────────────────────────────

export const VERB3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verben-Meister",

    // T1: Was macht das Verb?
    t1_title: "Was macht das Verb?",
    t1_text: "Verben sind Tunwörter. Sie verraten uns, was jemand macht oder was in einem Satz passiert. In der Grundform enden sie meist auf '-en' (spielen, rennen).",
    t1_b1: "Verben sagen, was passiert.",
    t1_b2: "Grundform endet auf -en.",
    t1_inst: "Finde das Verb im Satz!",
    t1_h1: "Was tun die Kinder?",
    t1_h2: "Das Wort 'spielen' ist das Verb.",
    t1_w1: "Die", t1_w2: "Kinder", t1_w3: "spielen", t1_w4: "im", t1_w5: "Garten.",
    // Quiz: GENERATOR (verben_k3)

    // T2: Der Wortstamm
    t2_title: "Der Wortstamm",
    t2_text: "Wenn wir bei der Grundform das '-en' am Ende weglassen, bleibt der Wortstamm übrig! Aus 'lern-en' wird 'lern'. Daran hängen wir später die Endungen.",
    t2_b1: "Grundform minus -en = Wortstamm.",
    t2_inst: "Welcher Wortteil ist der Stamm von 'lernen'?",
    t2_h1: "Lass das '-en' am Ende weg.",
    t2_h2: "Der Stamm ist 'lern'.",
    t2_sent: "Der Wortstamm von lernen ist ___.",
    t2_c1: "lern", t2_c2: "lernen", t2_c3: "ler", t2_c4: "nen",

    // T3: Ich und Du
    t3_title: "Ich und Du",
    t3_text: "Jetzt hängen wir Endungen an den Stamm! Bei 'ich' hängen wir ein '-e' an (ich spiel-e). Bei 'du' hängen wir ein '-st' an (du spiel-st).",
    t3_b1: "ich ➔ -e (ich lache)",
    t3_b2: "du ➔ -st (du lachst)",
    t3_inst: "Sortiere die Verben: Passen sie zu 'ich' oder 'du'?",
    t3_h1: "Schau auf die Endung: -e oder -st?",
    t3_h2: "spiele -> ich. lernst -> du.",
    t3_bi: "ich 🧍", t3_bd: "du 👉",
    t3_i1: "spiele", t3_i2: "lernst", t3_i3: "lachst", t3_i4: "renne",

    // T4: Er, sie, es
    t4_title: "Er, sie, es",
    t4_text: "Wenn wir über jemand anderen sprechen (er, sie, es), bekommt das Verb die Endung '-t'. Zum Beispiel: er mach-t, sie tanz-t, es bell-t.",
    t4_b1: "er, sie, es ➔ -t",
    t4_inst: "Baue den Satz richtig zusammen!",
    t4_h1: "Wer macht was? (Er liest...)",
    t4_h2: "Er liest ein Buch.",
    t4_f1: "Er", t4_f2: "liest", t4_f3: "ein", t4_f4: "Buch.",

    // T5: Wir, ihr, sie (Plural)
    t5_title: "Wir, ihr, sie (Plural)",
    t5_text: "Jetzt sind wir viele! Bei 'wir' und 'sie' nehmen wir einfach wieder die Grundform mit '-en'. Bei 'ihr' hängen wir ein '-t' an.",
    t5_b1: "wir / sie ➔ -en (wir laufen)",
    t5_b2: "ihr ➔ -t (ihr lauft)",
    t5_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "Der Satzanfang ist groß (Wir).",
    t5_h2: "Wir lernen Deutsch.",
    t5_o1: "Wir", t5_o2: "lernen", t5_o3: "Deutsch.",

    // T6: Starke Verben (Achtung!)
    t6_title: "Starke Verben",
    t6_text: "Manche Verben sind stark und verändern sich bei 'du' und 'er/sie/es'. Aus 'a' wird 'ä' (ich fahre ➔ du fährst). Aus 'e' wird 'i' oder 'ie' (ich sehe ➔ du siehst).",
    t6_b1: "a ➔ ä (schlafen ➔ du schläfst)",
    t6_b2: "e ➔ i/ie (geben ➔ er gibt)",
    t6_inst: "Verbinde die 'ich'-Form mit der 'du'-Form!",
    t6_h1: "Denk an den Vokalwechsel! Aus a wird ä.",
    t6_h2: "ich fahre -> du fährst.",
    t6_l1: "ich fahre", t6_r1: "du fährst",
    t6_l2: "ich sehe",  t6_r2: "du siehst",
    t6_l3: "ich spreche", t6_r3: "du sprichst",
    t6_l4: "ich schlafe", t6_r4: "du schläfst",

    // T7: Verb an zweiter Stelle
    t7_title: "Der feste Platz",
    t7_text: "Egal wie du den Satz umbaust, im normalen Aussagesatz steht das Verb immer fest an der 2. Stelle! 'Heute scheint die Sonne.' oder 'Die Sonne scheint heute.'",
    t7_b1: "Verb ist immer auf Platz 2.",
    t7_inst: "Finde das Verb im Satz!",
    t7_h1: "Welches Wort steht an der zweiten Stelle und ist ein Tunwort?",
    t7_h2: "Das Wort 'scheint' ist das Verb.",
    t7_w1: "Heute", t7_w2: "scheint", t7_w3: "die", t7_w4: "Sonne", t7_w5: ".",
  }
};

export const VERB3_POOL: PoolTopicDef[] = [
  // ── 1. Was macht das Verb? (highlight-text) ───────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "spielen", emoji: "⚽", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"],
      correctIndices: [2], // spielen
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 2. Der Wortstamm (gap-fill) ───────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "lern", word2: "en", result: "lernen", color: "#F59E0B" },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_sent",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], // lern
      correctIndex: 0,
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 3. Ich und Du (drag-to-bucket) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["ich (-e)"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["du (-st)"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "ich", label: "t3_bi" }, { id: "du", label: "t3_bd" }],
      items: [
        { text: "t3_i1", bucketId: "ich" }, // spiele
        { text: "t3_i2", bucketId: "du" },  // lernst
        { text: "t3_i3", bucketId: "du" },  // lachst
        { text: "t3_i4", bucketId: "ich" }, // renne
      ],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 4. Er, sie, es (sentence-build) ───────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Er liest." }] },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"], // Er, liest, ein, Buch.
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 5. Wir, ihr, sie (word-order) ─────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-pairs", pairs: [["wir", "-en"], ["ihr", "-t"]], color: "#10B981" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "word-order",
      words: ["t5_o2", "t5_o3", "t5_o1"], // lernen, Deutsch., Wir
      correctOrder: [2, 0, 1], // Wir -> lernen -> Deutsch.
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 6. Starke Verben (match-pairs) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["a", "ä"], ["e", "ie"]], color: "#7C3AED" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
        { left: "t6_l4", right: "t6_r4" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 7. Verb an Platz 2 (highlight-text) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "sentence-display", words: ["Heute", "scheint", "die", "Sonne", "."], highlightIndices: [1], color: "#EC4899" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5"],
      correctIndices: [1], // scheint
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k3" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Steigerungsinsel
// Thema: Adjektiv Steigerung (groß → größer → am größten)
// ─────────────────────────────────────────────────────────────────────────────

export const STEIGER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Steigerungsinsel",

    // T1: Was ist Steigerung?
    t1_title: "Was ist Steigerung?",
    t1_text: "Mit Adjektiven können wir Dinge vergleichen. Es gibt drei Stufen: Die Grundform (schnell), die 1. Stufe (schneller) und die höchste Stufe (am schnellsten).",
    t1_b1: "1. schnell (Grundform)",
    t1_b2: "2. schneller (+ er)",
    t1_b3: "3. am schnellsten (am ... + sten)",
    t1_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t1_h1: "Fange mit dem normalen Wort an, dann das mit '-er', dann 'am ...'.",
    t1_h2: "klein -> kleiner -> am kleinsten.",
    t1_o1: "klein", t1_o2: "kleiner", t1_o3: "am kleinsten",
    // Quiz: GENERATOR (adjektive_gegenteil)

    // T2: Die 1. Stufe (Komparativ) + "als"
    t2_title: "Die 1. Stufe (-er)",
    t2_text: "Wenn etwas MEHR ist als das andere, hängen wir ein '-er' an das Wort. Wir benutzen dann das kleine Wort 'als'. Der Gepard ist schneller ALS der Hund.",
    t2_b1: "Endung: -er.",
    t2_b2: "Wir vergleichen mit 'als'.",
    t2_inst: "Welches Wort passt in die Lücke?",
    t2_h1: "Der Zug ist nicht nur schnell, er ist 'mehr' schnell.",
    t2_h2: "Er ist 'schneller'.",
    t2_sent: "Der Zug ist ___ als das Auto.",
    t2_c1: "schneller", t2_c2: "schnell", t2_c3: "schnellsten", t2_c4: "schnelle",

    // T3: Die höchste Stufe (Superlativ)
    t3_title: "Die höchste Stufe",
    t3_text: "Wenn etwas nicht mehr zu übertreffen ist, nutzen wir die 3. Stufe. Sie beginnt immer mit 'am' und endet auf '-sten'. Der Gepard ist AM schnellSTEN.",
    t3_b1: "am ... -sten",
    t3_b2: "Niemand ist mehr oder besser!",
    t3_inst: "Finde die höchste Stufe im Satz!",
    t3_h1: "Suche das Wort, das mit 'am' beginnt und auf '-sten' endet.",
    t3_h2: "'am lautesten' ist die höchste Stufe.",
    t3_w1: "Der", t3_w2: "Löwe", t3_w3: "brüllt", t3_w4: "am", t3_w5: "lautesten", t3_w6: ".",

    // T4: Achtung, Umlaut!
    t4_title: "Achtung, Umlaut!",
    t4_text: "Manche kurze Adjektive bekommen in der Steigerung einen Umlaut (ä, ö, ü). Aus a wird ä (alt -> älter). Aus o wird ö (groß -> größer).",
    t4_b1: "alt ➔ älter",
    t4_b2: "groß ➔ größer",
    t4_inst: "Verbinde die Grundform mit der 1. Stufe!",
    t4_h1: "Denk an den Umlaut! a -> ä, o -> ö, u -> ü.",
    t4_h2: "kalt -> kälter, jung -> jünger.",
    t4_l1: "alt", t4_r1: "älter",
    t4_l2: "groß", t4_r2: "größer",
    t4_l3: "jung", t4_r3: "jünger",
    t4_l4: "kalt", t4_r4: "kälter",

    // T5: "wie" oder "als"?
    t5_title: "Genauso 'wie' oder mehr 'als'?",
    t5_text: "Das ist ein berühmter Fehler! Sind zwei Dinge GLEICH, sagen wir 'wie' (so groß wie). Ist eines MEHR, sagen wir 'als' (größer als).",
    t5_b1: "Gleich = wie (genauso schnell wie).",
    t5_b2: "Anders = als (schneller als).",
    t5_inst: "Sortiere: Kommt 'wie' oder 'als'?",
    t5_h1: "Steht das Wort in der Grundform (schnell) oder 1. Stufe (schneller)?",
    t5_h2: "so groß -> wie. älter -> als.",
    t5_bw: "wie (gleich) ⚖️", t5_ba: "als (mehr) 📈",
    t5_i1: "so stark", t5_i2: "stärker", t5_i3: "kleiner", t5_i4: "genauso alt",

    // T6: Die Ausnahmen (gut, viel, gern)
    t6_title: "Die Ausnahmen",
    t6_text: "Drei Adjektive halten sich an keine Regeln! Sie verändern sich komplett: gut ➔ besser ➔ am besten. viel ➔ mehr ➔ am meisten. gern ➔ lieber ➔ am liebsten.",
    t6_b1: "gut ➔ besser ➔ am besten",
    t6_b2: "viel ➔ mehr ➔ am meisten",
    t6_inst: "Welches Wort ist die Steigerung von 'gut'?",
    t6_h1: "Es heißt nicht 'guter'!",
    t6_h2: "gut -> besser.",
    t6_sent_ex: "Ich bin gut, aber du bist ___.",
    t6_ce1: "besser", t6_ce2: "guter", t6_ce3: "mehr", t6_ce4: "am besten",

    // T7: Der Steigerungs-Meister
    t7_title: "Der Steigerungs-Meister",
    t7_text: "Beweise, dass du ein Meister im Vergleichen bist! Baue diesen Satz über den höchsten Berg richtig zusammen.",
    t7_b1: "Nutze die 3. Stufe für das Größte!",
    t7_inst: "Baue den Satz zusammen!",
    t7_h1: "Der Satzanfang (Der) ist groß.",
    t7_h2: "Der Berg ist am höchsten.",
    t7_f1: "Der", t7_f2: "Berg", t7_f3: "ist", t7_f4: "am höchsten.",
  }
};

export const STEIGER_POOL: PoolTopicDef[] = [
  // ── 1. Was ist Steigerung? (word-order) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["schnell", "schneller"], ["schneller", "am schnellsten"]], color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "word-order",
      words: ["t1_o2", "t1_o3", "t1_o1"], // kleiner, am kleinsten, klein
      correctOrder: [2, 0, 1], // klein -> kleiner -> am kleinsten
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 2. Die 1. Stufe + "als" (gap-fill) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "schneller", emoji: "🚄", color: "#10B981", bg: "#D1FAE5" }, { text: "als", color: "#475569", bg: "#F1F5F9" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_sent",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], // schneller
      correctIndex: 0,
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 3. Die höchste Stufe (highlight-text) ──────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "🦁", label: "am lautesten!" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"],
      correctIndices: [3, 4], // am lautesten (2 token)
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 4. Achtung, Umlaut! (match-pairs) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["alt", "älter"], ["groß", "größer"]], color: "#F59E0B" },
    bulletKeys: ["t4_b1", "t4_b2"],
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
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 5. "wie" oder "als"? (drag-to-bucket) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["so groß", "wie"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["größer", "als"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "wie", label: "t5_bw" }, { id: "als", label: "t5_ba" }],
      items: [
        { text: "t5_i1", bucketId: "wie" }, // so stark
        { text: "t5_i2", bucketId: "als" }, // stärker
        { text: "t5_i3", bucketId: "als" }, // kleiner
        { text: "t5_i4", bucketId: "wie" }, // genauso alt
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 6. Die Ausnahmen (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "gut", word2: "???", result: "besser", color: "#EC4899" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_ex",
      choices: ["t6_ce1", "t6_ce2", "t6_ce3", "t6_ce4"], // besser
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 7. Steigerungs-Meister (sentence-build) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "⛰️", label: "am höchsten" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Der, Berg, ist, am höchsten.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Satzgliederinsel
// Thema: Subjekt, Prädikat, Objekt erkennen
// ─────────────────────────────────────────────────────────────────────────────

export const SATZGLIED_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzgliederinsel",

    // T1: Was ist ein Satzglied?
    t1_title: "Was ist ein Satzglied?",
    t1_text: "Ein Satz besteht aus Bausteinen. Manchmal ist ein Baustein nur ein Wort (Tim), manchmal sind es mehrere Wörter zusammen (Der kleine Hund). Diese Bausteine heißen Satzglieder.",
    t1_b1: "Ein Satzglied = ein Baustein.",
    t1_b2: "Es kann aus mehreren Wörtern bestehen.",
    t1_inst: "Finde das erste Satzglied!",
    t1_h1: "Wer oder was steht ganz vorne?",
    t1_h2: "'Der kleine Hund' gehört zusammen.",
    t1_w1: "Der kleine Hund", t1_w2: "bellt", t1_w3: "laut", t1_w4: ".",
    t1_q: "Aus wie vielen Wörtern kann ein Satzglied bestehen?",
    t1_qa: "Aus einem oder mehreren Wörtern", t1_qb: "Immer nur aus einem Wort", t1_qc: "Immer aus drei Wörtern", t1_qd: "Gar keinen",

    // T2: Das Prädikat (Der Motor)
    t2_title: "Das Prädikat (Der Motor)",
    t2_text: "Das Prädikat ist der Motor des Satzes! Es ist immer ein Verb (Tunwort) und sagt uns, was passiert. Ohne Prädikat funktioniert kein Satz!",
    t2_b1: "Das Prädikat = was passiert?",
    t2_b2: "Es ist immer ein Verb.",
    t2_inst: "Finde das Prädikat (den Motor) im Satz!",
    t2_h1: "Suche das Tunwort.",
    t2_h2: "Das Wort 'schläft' sagt, was passiert.",
    t2_w2_1: "Die", t2_w2_2: "Katze", t2_w2_3: "schläft", t2_w2_4: "tief", t2_w2_5: ".",
    t2_q: "Welche Wortart ist das Prädikat immer?",
    t2_qa: "Ein Verb (Tunwort)", t2_qb: "Ein Nomen (Namenwort)", t2_qc: "Ein Adjektiv (Wiewort)", t2_qd: "Ein Artikel (Begleiter)",

    // T3: Das Subjekt (Der König)
    t3_title: "Das Subjekt (Der König)",
    t3_text: "Das Subjekt ist der König im Satz! Es sagt uns, WER oder WAS etwas tut. Wir fragen: Wer oder was schläft? Die Katze!",
    t3_b1: "Frage: Wer oder was?",
    t3_b2: "Das Subjekt tut etwas.",
    t3_inst: "Wer ist der König (Subjekt) in diesem Satz?",
    t3_h1: "Frage: Wer oder was liest ein Buch?",
    t3_h2: "Tim liest ein Buch.",
    t3_sent: "___ liest ein spannendes Buch.",
    t3_c1: "Tim", t3_c2: "liest", t3_c3: "spannendes", t3_c4: "Buch",
    t3_q: "Mit welcher Frage finden wir das Subjekt?",
    t3_qa: "Wer oder was?", t3_qb: "Wie oder wo?", t3_qc: "Wann oder warum?", t3_qd: "Wen oder wem?",

    // T4: Subjekt oder Prädikat?
    t4_title: "Subjekt oder Prädikat?",
    t4_text: "Jeder vollständige Satz braucht mindestens ein Subjekt (König) und ein Prädikat (Motor). 'Der Hund' (Subjekt) + 'bellt' (Prädikat).",
    t4_b1: "Subjekt = Wer/Was?",
    t4_b2: "Prädikat = Was tut das Subjekt?",
    t4_inst: "Sortiere: Ist es Subjekt oder Prädikat?",
    t4_h1: "Wer/Was ist Subjekt. Tunwort ist Prädikat.",
    t4_h2: "Der Junge (Subjekt), lacht (Prädikat).",
    t4_bs: "Subjekt 👑", t4_bp: "Prädikat 🚂",
    t4_i1: "Der Junge", t4_i2: "lacht", t4_i3: "spielt", t4_i4: "Das Mädchen",
    t4_q: "Was fehlt hier: 'Die Sonne.'?",
    t4_qa: "Das Prädikat (Motor)", t4_qb: "Das Subjekt (König)", t4_qc: "Ein Punkt", t4_qd: "Nichts",

    // T5: Das Objekt (Das Ziel)
    t5_title: "Das Objekt",
    t5_text: "Viele Sätze haben noch ein Objekt. Es ist das Ziel der Aktion. Ich esse (was esse ich?) -> einen Apfel! 'einen Apfel' ist das Objekt.",
    t5_b1: "Objekt = Wen oder was?",
    t5_inst: "Finde das Objekt im Satz!",
    t5_h1: "Frage: Wen oder was trinkt das Kind?",
    t5_h2: "Das Kind trinkt 'die Milch'.",
    t5_w5_1: "Das Kind", t5_w5_2: "trinkt", t5_w5_3: "die Milch", t5_w5_4: ".",
    t5_q: "Was ist das Objekt im Satz: 'Leo fängt den Ball.'?",
    t5_qa: "den Ball", t5_qb: "Leo", t5_qc: "fängt", t5_qd: "Es gibt kein Objekt",

    // T6: Die Umstellprobe
    t6_title: "Die Umstellprobe",
    t6_text: "Satzglieder bleiben immer zusammen, wenn wir einen Satz umbauen! Aus 'Tim spielt heute Ball' kann 'Heute spielt Tim Ball' werden.",
    t6_b1: "Satzglieder bleiben als Baustein zusammen.",
    t6_inst: "Baue den Satz um! (Beginne mit 'Heute')",
    t6_h1: "Das Prädikat (Verb) bleibt auf Platz 2!",
    t6_h2: "Heute spielt Tim.",
    t6_o1: "Heute", t6_o2: "spielt", t6_o3: "Tim.",
    t6_q: "Was bleibt bei der Umstellprobe immer auf Platz 2 (im Aussagesatz)?",
    t6_qa: "Das Prädikat (Verb)", t6_qb: "Das Subjekt (König)", t6_qc: "Das Objekt", t6_qd: "Das letzte Wort",

    // T7: Satzglieder-Meister
    t7_title: "Satzglieder-Meister",
    t7_text: "Zeig uns, dass du ein echter Baumeister bist! Baue einen vollständigen Satz aus Subjekt, Prädikat und Objekt.",
    t7_b1: "Subjekt ➔ Prädikat ➔ Objekt.",
    t7_inst: "Bringe die Bausteine in die richtige Reihenfolge!",
    t7_h1: "Wer macht was mit wem?",
    t7_h2: "Der Hund jagt die Katze.",
    t7_f1: "Der Hund", t7_f2: "jagt", t7_f3: "die Katze.",
    t7_q: "Welches Satzglied ist 'Der Hund' in diesem Satz?",
    t7_qa: "Das Subjekt", t7_qb: "Das Prädikat", t7_qc: "Das Objekt", t7_qd: "Ein Verb",
  }
};

export const SATZGLIED_POOL: PoolTopicDef[] = [
  // ── 1. Was ist ein Satzglied? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Der kleine Hund", "bellt", "laut", "."], highlightIndices: [0], color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], // Notice tokens can contain spaces
      correctIndices: [0], // Der kleine Hund
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Das Prädikat (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [{ emoji: "🚂", label: "Motor (Prädikat)" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [2], // schläft
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Das Subjekt (gap-fill) ───────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👑", title: "Wer oder was?", bg: "#FEF3C7" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], // Tim
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Subjekt oder Prädikat? (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Der Junge"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["lacht"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "s", label: "t4_bs" }, { id: "p", label: "t4_bp" }],
      items: [
        { text: "t4_i1", bucketId: "s" }, // Der Junge
        { text: "t4_i2", bucketId: "p" }, // lacht
        { text: "t4_i3", bucketId: "p" }, // spielt
        { text: "t4_i4", bucketId: "s" }, // Das Mädchen
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Das Objekt (highlight-text) ──────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "Wen oder was?", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4"],
      correctIndices: [2], // die Milch (ein Token)
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Die Umstellprobe (word-order) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Heute", "spielt", "Tim", "."], highlightIndices: [0], color: "#F59E0B" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "word-order",
      words: ["t6_o3", "t6_o1", "t6_o2"], // Tim., Heute, spielt
      correctOrder: [1, 2, 0], // Heute -> spielt -> Tim.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Satzglieder-Meister (sentence-build) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐕", label: "Der Hund" }, { emoji: "🐈", label: "die Katze" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3"], // Der Hund, jagt, die Katze.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Zeitformeninsel
// Thema: Präsens vs. Präteritum vs. Perfekt (Überblick)
// ─────────────────────────────────────────────────────────────────────────────

export const ZEITFORM_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Reisende",

    // T1: Was sind Zeitformen?
    t1_title: "Was sind Zeitformen?",
    t1_text: "Zeitformen sagen uns, WANN etwas passiert. Passiert es gerade jetzt (Präsens) oder ist es schon vorbei (Vergangenheit)?",
    t1_b1: "Präsens = Jetzt.",
    t1_b2: "Vergangenheit = Vorbei.",
    t1_inst: "Welches Wort passt zur Gegenwart (Präsens)?",
    t1_h1: "Suche das Wort, das 'jetzt' bedeutet.",
    t1_h2: "Das Wort 'heute' passt zum Präsens.",
    t1_w1: "heute", t1_w2: "gestern", t1_w3: "früher", t1_w4: "damals",
    // Quiz: GENERATOR (verben_k3)

    // T2: Das Präsens (Gegenwart)
    t2_title: "Das Präsens",
    t2_text: "Das Präsens nutzen wir für alles, was jetzt gerade passiert oder immer gilt. 'Ich lerne Deutsch.'",
    t2_b1: "Passiert jetzt gerade.",
    t2_b2: "Regelmäßige Handlungen.",
    t2_inst: "Welches Verb steht im Präsens?",
    t2_h1: "Suche die normale Form: ich ...",
    t2_h2: "'ich spiele' ist Präsens.",
    t2_w2_1: "ich spiele", t2_w2_2: "ich spielte", t2_w2_3: "ich habe gespielt",
    // Quiz: MANUAL
    t2_q: "Wann benutzen wir das Präsens?",
    t2_qa: "Wenn etwas jetzt passiert", t2_qb: "Wenn etwas gestern war", t2_qc: "Wenn etwas morgen kommt", t2_qd: "Nur in Märchen",

    // T3: Das Präteritum (Vergangenheit 1)
    t3_title: "Das Präteritum",
    t3_text: "Das Präteritum ist die 'Erzähl-Vergangenheit'. Wir nutzen es vor allem in Büchern und Märchen. 'Es war einmal...'",
    t3_b1: "Wird oft geschrieben.",
    t3_b2: "war, hatte, ging, sagte.",
    t3_inst: "Welches Wort gehört zum Präteritum?",
    t3_h1: "Wie fängt ein Märchen oft an?",
    t3_h2: "Das Wort 'war' ist Präteritum.",
    t3_w3_1: "bin", t3_w3_2: "war", t3_w3_3: "werde", t3_w3_4: "ist",
    // Quiz: GENERATOR (praeteritum)

    // T4: Das Perfekt (Vergangenheit 2)
    t4_title: "Das Perfekt",
    t4_text: "Das Perfekt ist die 'Sprech-Vergangenheit'. Wenn wir jemandem erzählen, was wir gemacht haben, nutzen wir meistens das Perfekt: 'Ich habe gespielt.'",
    t4_b1: "Wird oft gesprochen.",
    t4_b2: "Zwei Teile: Hilfsverb (habe/bin) + Partizip (gespielt).",
    t4_inst: "Finde das Perfekt im Satz!",
    t4_h1: "Suche nach dem Satz mit 'habe' und 'ge...'.",
    t4_h2: "Ich habe gelacht.",
    t4_sent: "Gestern ___ ich viel ___.",
    t4_c1: "habe / gelacht", t4_c2: "bin / gelacht", t4_c3: "habe / lache", t4_c4: "war / gelacht",
    // Quiz: GENERATOR (perfekt)

    // T5: Zeit-Sortiermaschine
    t5_title: "Zeit-Sortierer",
    t5_text: "Kannst du Präsens und Präteritum unterscheiden? Präsens ist HEUTE, Präteritum war GESTERN.",
    t5_b1: "ich lerne (Präsens).",
    t5_b2: "ich lernte (Präteritum).",
    t5_inst: "Sortiere die Verben in die richtige Zeitform!",
    t5_h1: "Passiert es jetzt oder war es früher?",
    t5_h2: "ich singe -> Präsens. ich sang -> Präteritum.",
    t5_bpr: "Präsens (Jetzt) ☀️", t5_bpa: "Präteritum (Früher) 🌙",
    t5_i1: "ich singe", t5_i2: "ich sang", t5_i3: "du lachst", t5_i4: "du lachtest",
    // Quiz: GENERATOR (praeteritum)

    // T6: Perfekt bauen
    t6_title: "Sätze im Perfekt",
    t6_text: "Im Perfekt brauchen wir immer zwei Wörter für das Verb. Ein Helfer-Verb (haben oder sein) und das Hauptwort am Ende.",
    t6_b1: "Hilfsverb + Partizip.",
    t6_inst: "Baue den Satz im Perfekt zusammen!",
    t6_h1: "Beginne mit 'Ich', dann der Helfer 'habe'.",
    t6_h2: "Ich habe Fußball gespielt.",
    t6_f1: "Ich", t6_f2: "habe", t6_f3: "Fußball", t6_f4: "gespielt.",
    // Quiz: GENERATOR (perfekt)

    // T7: Der Zeit-Meister
    t7_title: "Der Zeit-Meister",
    t7_text: "Du bist nun ein Zeit-Reisender! Kannst du erkennen, in welcher Zeit dieser Satz steht?",
    t7_b1: "Achte auf die Verbform.",
    t7_inst: "Welche Zeitform ist das: 'Er rannte schnell.'?",
    t7_h1: "Ist es Präsens, Präteritum oder Perfekt?",
    t7_h2: "Es ist Präteritum (Erzähl-Vergangenheit).",
    t7_w7_1: "Präsens", t7_w7_2: "Präteritum", t7_w7_3: "Perfekt",
    // Quiz: GENERATOR (praeteritum)
  }
};

export const ZEITFORM_POOL: PoolTopicDef[] = [
  // ── 1. Was sind Zeitformen? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕰️", label: "Zeit" }, { emoji: "📅", label: "Heute/Gestern" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // heute
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 2. Das Präsens (highlight-text) ───────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "ich spiele", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3"],
      correctIndices: [0], // ich spiele
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Das Präteritum (highlight-text) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Märchenzeit" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [1], // war
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "praeteritum" },
  },

  // ── 4. Das Perfekt (gap-fill) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "compound-word", word1: "habe", word2: "gespielt", result: "Perfekt", color: "#8B5CF6" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], // habe / gelacht
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 5. Zeit-Sortierer (drag-to-bucket) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["ich lerne"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["ich lernte"], bg: "#F3E8FF", border: "#8B5CF6" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "pr", label: "t5_bpr" }, { id: "pa", label: "t5_bpa" }],
      items: [
        { text: "t5_i1", bucketId: "pr" }, // ich singe
        { text: "t5_i2", bucketId: "pa" }, // ich sang
        { text: "t5_i3", bucketId: "pr" }, // du lachst
        { text: "t5_i4", bucketId: "pa" }, // du lachtest
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "praeteritum" },
  },

  // ── 6. Perfekt Sätze (sentence-build) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Ich", "habe", "Fußball", "gespielt", "."], highlightIndices: [1, 3], color: "#10B981" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], // Ich, habe, Fußball, gespielt.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 7. Zeit-Meister (word-order) ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "⌛", title: "Welche Zeit?", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3"],
      correctIndices: [1], // Präteritum
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "praeteritum" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Vergangenheitsinsel
// Thema: Präteritum (war, hatte, ging...) + Perfekt (hat gespielt, ist gelaufen)
// ─────────────────────────────────────────────────────────────────────────────

export const VERGANGEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Meister der Vergangenheit",

    // T1: War und Hatte (Präteritum)
    t1_title: "War und Hatte",
    t1_text: "Die zwei wichtigsten Wörter im Präteritum sind 'war' (von sein) und 'hatte' (von haben). Wir brauchen sie ständig, um zu erzählen, wie es früher war.",
    t1_b1: "ich war, du warst, er war.",
    t1_b2: "ich hatte, du hattest, er hatte.",
    t1_inst: "Welches Wort passt in die Lücke?",
    t1_h1: "Früher besaß ich einen Hund.",
    t1_h2: "Ich 'hatte' einen Hund.",
    t1_sent: "Früher ___ ich einen kleinen Hund.",
    t1_c1: "hatte", t1_c2: "habe", t1_c3: "war", t1_c4: "bin",
    // Quiz: GENERATOR (praeteritum)

    // T2: Starke Präteritum-Formen
    t2_title: "Singen ➔ Sang",
    t2_text: "Einige Verben verändern im Präteritum ihren Stammvokal. Das klingt oft ganz anders! gehen ➔ ging, singen ➔ sang, laufen ➔ lief.",
    t2_b1: "Vokalwechsel im Stamm.",
    t2_b2: "Keine Endung bei 'ich' und 'er/sie/es'.",
    t2_inst: "Verbinde das Präsens mit dem Präteritum!",
    t2_h1: "Was ist die Vergangenheitsform von 'gehen'?",
    t2_h2: "gehen -> ging, laufen -> lief.",
    t2_l1: "ich gehe", t2_r1: "ich ging",
    t2_l2: "ich laufe", t2_r2: "ich lief",
    t2_l3: "ich singe", t2_r3: "ich sang",
    t2_l4: "ich schwimme", t2_r4: "ich schwamm",
    // Quiz: GENERATOR (praeteritum)

    // T3: Perfekt mit 'haben'
    t3_title: "Perfekt mit 'haben'",
    t3_text: "Die meisten Verben bilden das Perfekt mit 'haben'. Ich habe gelacht, du hast gespielt, wir haben gegessen.",
    t3_b1: "haben + Partizip (ge...).",
    t3_inst: "Baue den Perfekt-Satz zusammen!",
    t3_h1: "Zuerst wer (Ich), dann der Helfer (habe), dann was (Pizza), dann das Ende (gegessen).",
    t3_h2: "Ich habe Pizza gegessen.",
    t3_f1: "Ich", t3_f2: "habe", t3_f3: "Pizza", t3_f4: "gegessen.",
    // Quiz: GENERATOR (perfekt)

    // T4: Perfekt mit 'sein'
    t4_title: "Perfekt mit 'sein'",
    t4_text: "Verben der Bewegung (laufen, fliegen) oder eine Zustandsänderung (aufwachen) nutzen 'sein' als Helfer. 'Ich BIN gelaufen.'",
    t4_b1: "Bewegung ➔ sein (bin/bist/ist).",
    t4_inst: "Welches Hilfsverb passt hier?",
    t4_h1: "Fliegen ist eine Bewegung von A nach B.",
    t4_h2: "Wir brauchen 'sind'.",
    t4_sent_s: "Wir ___ nach Spanien geflogen.",
    t4_cs1: "sind", t4_cs2: "haben", t4_cs3: "waren", t4_cs4: "hatten",
    // Quiz: GENERATOR (perfekt)

    // T5: Haben oder Sein? (Sortieren)
    t5_title: "Haben oder Sein?",
    t5_text: "Das ist die große Frage! Kannst du entscheiden, welcher Helfer zu welchem Verb passt?",
    t5_b1: "Bewegung/Veränderung ➔ sein.",
    t5_b2: "Alles andere ➔ haben.",
    t5_inst: "Sortiere die Verben nach ihrem Helfer!",
    t5_h1: "Bewegt man sich dabei von einem Ort zum anderen?",
    t5_h2: "gelaufen -> sein. geschlafen (keine Bewegung) -> haben.",
    t5_bh: "haben 🤝", t5_bs: "sein 🏃",
    t5_i1: "gelacht", t5_i2: "gerannt", t5_i3: "geschlafen", t5_i4: "geflogen",
    // Quiz: GENERATOR (perfekt)

    // T6: Das Partizip II (ge-Form)
    t6_title: "Das Partizip II",
    t6_text: "Das zweite Wort im Perfekt fängt fast immer mit 'ge-' an. Aber Achtung, am Ende kann ein '-t' (gespielt) oder ein '-en' (gesehen) stehen.",
    t6_b1: "ge + Stamm + t (regelmäßig).",
    t6_b2: "ge + Stamm + en (unregelmäßig).",
    t6_inst: "Welches Wort ist ein richtiges Partizip?",
    t6_h1: "Suche das Wort, das mit 'ge-' anfängt.",
    t6_h2: "'gesungen' ist ein Partizip.",
    t6_w1: "singen", t6_w2: "gesungen", t6_w3: "sangen", t6_w4: "singt",
    // Quiz: MANUAL
    t6_q: "Wie bilden wir meistens das Partizip von 'spielen'?",
    t6_qa: "ge-spiel-t", t6_qb: "ge-spiel-en", t6_qc: "be-spiel-t", t6_qd: "spiel-te",

    // T7: Vergangenheit-Profi
    t7_title: "Vergangenheit-Profi",
    t7_text: "Du kannst jetzt Sätze in der Vergangenheit bauen! Ob Märchen (Präteritum) oder Gespräch (Perfekt) - du bist bereit.",
    t7_b1: "Präteritum vs. Perfekt.",
    t7_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t7_h1: "Der Satz steht im Perfekt. 'Ich habe...'",
    t7_h2: "Ich habe viel gelernt.",
    t7_o1: "Ich", t7_o2: "habe", t7_o3: "viel", t7_o4: "gelernt.",
    // Quiz: GENERATOR (perfekt)
  }
};

export const VERGANGEN_POOL: PoolTopicDef[] = [
  // ── 1. War und Hatte (gap-fill) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "war", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "hatte", color: "#B45309", bg: "#FEF3C7" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      correctIndex: 0,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "praeteritum" },
  },

  // ── 2. Starke Präteritum (match-pairs) ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["gehe", "ging"], ["singe", "sang"]], color: "#7C3AED" },
    bulletKeys: ["t2_b1", "t2_b2"],
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
    quiz: { generate: "praeteritum" },
  },

  // ── 3. Perfekt mit haben (sentence-build) ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "compound-word", word1: "habe", word2: "gegessen", result: "Perfekt", color: "#10B981" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t3_f1", "t3_f2", "t3_f3", "t3_f4"],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 4. Perfekt mit sein (gap-fill) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "bin", emoji: "🏃", color: "#0EA5E9", bg: "#E0F2FE" }, { text: "ist", emoji: "🛫", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent_s",
      choices: ["t4_cs1", "t4_cs2", "t4_cs3", "t4_cs4"],
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 5. Haben vagy Sein? (drag-to-bucket) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["gelacht"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["gerannt"], bg: "#D1FAE5", border: "#10B981" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "h", label: "t5_bh" }, { id: "s", label: "t5_bs" }],
      items: [
        { text: "t5_i1", bucketId: "h" }, // gelacht
        { text: "t5_i2", bucketId: "s" }, // gerannt
        { text: "t5_i3", bucketId: "h" }, // geschlafen
        { text: "t5_i4", bucketId: "s" }, // geflogen
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 6. Partizip II (highlight-text) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "ge-sung-en", highlightChars: ["g", "e"], color: "#EC4899" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"],
      correctIndices: [1], // gesungen
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Vergangenheit-Profi (word-order) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🕰️", title: "Perfekt-Check", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "word-order",
      words: ["t7_o2", "t7_o4", "t7_o1", "t7_o3"], // habe, gelernt., Ich, viel
      correctOrder: [2, 0, 3, 1], // Ich -> habe -> viel -> gelernt.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "perfekt" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Schreibungsinsel
// Thema: ie/ei, Doppelkonsonanten, Dehnung-h, Wörter mit v/f
// ─────────────────────────────────────────────────────────────────────────────

export const SCHREIB_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreib-Profi",

    // T1: ie oder ei?
    t1_title: "ie oder ei?",
    t1_text: "Das kennen wir schon, aber es bleibt wichtig! Das lange 'i' schreiben wir fast immer als 'ie' (Biene). Das 'ei' klingt wie 'ai' (Eis).",
    t1_b1: "ie ➔ langes i (Lied, Knie).",
    t1_b2: "ei ➔ klingt wie ai (Seite, Reise).",
    t1_inst: "Verbinde die Wörter mit dem richtigen Laut!",
    t1_h1: "Hör genau hin: Hörst du ein langes I oder ein AI?",
    t1_h2: "Biene -> ie, Eis -> ei.",
    t1_l1: "B__ne", t1_r1: "ie",
    t1_l2: "S__te", t1_r2: "ei",
    t1_l3: "Kn__",  t1_r3: "ie",
    t1_l4: "R__se", t1_r4: "ei",
    t1_q: "Wie schreiben wir das lange I in 'Spiegel'?",
    t1_qa: "ie", t1_qb: "i", t1_qc: "ei", t1_qd: "ih",

    // T2: Das stumme h (Dehnungs-h)
    t2_title: "Das stumme h",
    t2_text: "Manche Wörter haben ein 'h', das man gar nicht hört! Es macht den Vokal davor aber ganz lang. Wir nennen es Dehnungs-h. Beispiele: fahren, Uhr, Zahn.",
    t2_b1: "Man hört es nicht, aber es macht lang.",
    t2_b2: "Steht oft vor l, m, n, r.",
    t2_inst: "Finde das Wort mit dem stummen h!",
    t2_h1: "Suche ein Wort, bei dem man den Vokal lang zieht, aber kein h hört.",
    t2_h2: "In 'Zahn' ist ein stummes h.",
    t2_w1: "Zahn", t2_w2: "Hand", t2_w3: "Sonne", t2_w4: "Mund",
    t2_q: "Welches Wort hat ein Dehnungs-h?",
    t2_qa: "fahren", t2_qb: "fallen", t2_qc: "fangen", t2_qd: "finden",

    // T3: Doppelkonsonanten (Check)
    t3_title: "Doppelt hält besser",
    t3_text: "Erinnerst du dich? Nach einem kurzen Vokal verdoppeln wir oft den Mitlaut (Konsonant). rennen, schwimmen, kommen.",
    t3_b1: "Kurzer Vokal ➔ doppelte Buchstaben.",
    t3_inst: "Welches Wort ist richtig geschrieben?",
    t3_h1: "Das 'e' in 'rennen' ist kurz.",
    t3_h2: "Wir brauchen zwei 'n'.",
    t3_w2_1: "renen", t3_w2_2: "rennen", t3_w2_3: "rennen", t3_w2_4: "reneen",
    t3_q: "Was kommt nach einem kurzen Vokal?",
    t3_qa: "Zwei gleiche Konsonanten", t3_qb: "Ein großer Buchstabe", t3_qc: "Ein stummes h", t3_qd: "Gar nichts",

    // T4: v oder f?
    t4_title: "v oder f?",
    t4_text: "Das 'v' und das 'f' klingen oft genau gleich! Viele Wörter mit 'v' muss man sich einfach merken, wie: Vater, Vogel, viel, von.",
    t4_b1: "v klingt oft wie f.",
    t4_b2: "Merkwörter: Vater, Vogel, viel.",
    t4_inst: "Welches Wort wird mit 'v' geschrieben?",
    t4_h1: "Es ist ein Tier, das fliegen kann.",
    t4_h2: "Der 'Vogel' wird mit v geschrieben.",
    t4_sent: "Der ___ fliegt hoch am Himmel.",
    t4_c1: "Vogel", t4_c2: "Fogel", t4_c3: "Wogel", t4_c4: "Bogel",
    t4_q: "Wie schreiben wir 'Vater'?",
    t4_qa: "mit v", t4_qb: "mit f", t4_qc: "mit w", t4_qd: "mit ph",

    // T5: Wörter mit qu
    t5_title: "Wörter mit qu",
    t5_text: "Das 'qu' ist ein seltener Gast. Wir sprechen es wie 'kw' aus (Qualle, Quark). Nach dem q kommt immer ein u!",
    t5_b1: "qu wird wie kw gesprochen.",
    t5_b2: "Nach q folgt immer u.",
    t5_inst: "Finde das Wort, das mit 'qu' anfängt!",
    t5_h1: "Es ist glibberig und lebt im Meer.",
    t5_h2: "Die 'Qualle' fängt mit qu an.",
    t5_w3_1: "Qualle", t5_w3_2: "Kwalle", t5_w3_3: "Kwalle", t5_w3_4: "Kualle",
    t5_q: "Was kommt immer nach dem Buchstaben 'q'?",
    t5_qa: "u", t5_qb: "w", t5_qc: "a", t5_qd: "e",

    // T6: ng oder nk?
    t6_title: "ng oder nk?",
    t6_text: "Hörst du den Unterschied am Ende? Bei 'ng' (singen, lang) ist es weich. Bei 'nk' (trinken, Bank) hörst du ein kleines 'k' am Ende.",
    t6_b1: "ng ➔ weich (Ring, Schlange).",
    t6_b2: "nk ➔ mit k-Laut (Geschenk, Dank).",
    t6_inst: "Sortiere die Wörter: ng oder nk?",
    t6_h1: "Hörst du ein weiches 'n' oder ein hartes 'k'?",
    t6_h2: "Ring -> ng, Bank -> nk.",
    t6_bng: "Endung ng", t6_bnk: "Endung nk",
    t6_i1: "Ring", t6_i2: "Bank", t6_i3: "jung", t6_i4: "Dank",
    t6_q: "Wie schreiben wir 'Geschenk' am Ende?",
    t6_qa: "nk", t6_qb: "ng", t6_qc: "nck", t6_qd: "ngk",

    // T7: Rechtschreib-Meister
    t7_title: "Rechtschreib-Meister",
    t7_text: "Jetzt bist du bereit für das große Diktat! v, f, h oder ck? Du kennst nun die wichtigsten Tricks.",
    t7_b1: "Denk an die Merkwörter!",
    t7_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t7_h1: "Der Satzanfang (Mein) ist groß.",
    t7_h2: "Mein Vater fährt viel.",
    t7_o1: "Mein", t7_o2: "Vater", t7_o3: "fährt", t7_o4: "viel.",
    t7_q: "Welches Wort in 'Mein Vater fährt viel.' hat ein stummes h?",
    t7_qa: "fährt", t7_qb: "Vater", t7_qc: "viel", t7_qd: "Mein",
  }
};

export const SCHREIB_POOL: PoolTopicDef[] = [
  // ── 1. ie oder ei? (match-pairs) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["ie", "ei"]], color: "#7C3AED" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Das stumme h (highlight-text) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "Zahn", highlightChars: ["h"], color: "#F59E0B" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [0], // Zahn
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Doppelkonsonanten (highlight-text) ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["n"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["nn"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w2_1", "t3_w2_2", "t3_w2_3", "t3_w2_4"],
      correctIndices: [1], // rennen
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. v oder f? (gap-fill) ─────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-circles", letters: ["v", "f"], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], // Vogel
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Wörter mit qu (highlight-text) ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "Qualle", highlightChars: ["q", "u"], color: "#0EA5E9" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w3_1", "t5_w3_2", "t5_w3_3", "t5_w3_4"],
      correctIndices: [0], // Qualle
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. ng oder nk? (drag-to-bucket) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "ng", color: "#8B5CF6", bg: "#F3E8FF" }, { text: "nk", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "ng", label: "t6_bng" }, { id: "nk", label: "t6_bnk" }],
      items: [
        { text: "t6_i1", bucketId: "ng" }, // Ring
        { text: "t6_i2", bucketId: "nk" }, // Bank
        { text: "t6_i3", bucketId: "ng" }, // jung
        { text: "t6_i4", bucketId: "nk" }, // Dank
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Rechtschreib-Meister (word-order) ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "✍️", title: "Meister-Check!", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "word-order",
      words: ["t7_o2", "t7_o3", "t7_o1", "t7_o4"], // Vater, fährt, Mein, viel.
      correctOrder: [2, 0, 1, 3], // Mein -> Vater -> fährt -> viel.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // Review von K1-K2
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Zeichensetzungsinsel
// Thema: Komma bei Aufzählungen, direkte Rede, Satzzeichen Wiederholung
// ─────────────────────────────────────────────────────────────────────────────

export const ZEICHEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzzeichen-Experte",

    // T1: Komma bei Aufzählungen
    t1_title: "Das Komma bei Aufzählungen",
    t1_text: "Wenn wir viele Dinge nacheinander aufzählen, trennen wir sie mit einem Komma. Nur vor dem letzten Wort steht ein 'und' statt eines Kommas.",
    t1_b1: "Komma trennt Wörter in einer Liste.",
    t1_b2: "Vor dem 'und' steht kein Komma.",
    t1_inst: "Wo müssen die Kommas hin?",
    t1_h1: "Setze ein Komma zwischen die Früchte.",
    t1_h2: "Apfel, Birne, Melone und Banane.",
    t1_sent: "Ich mag Äpfel ___ Birnen ___ Melonen und Bananen.",
    t1_c1: ", / ,", t1_c2: ", / und", t1_c3: "und / ,", t1_c4: ". / .",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T2: Die wörtliche Rede (Anführungszeichen)
    t2_title: "Die wörtliche Rede",
    t2_text: "Wenn jemand etwas sagt, benutzen wir Anführungszeichen. Sie umschließen das, was gesprochen wird: „Ich spiele gerne Fußball“, sagt Tim.",
    t2_b1: "Unten fangen sie an: „",
    t2_b2: "Oben hören sie auf: “",
    t2_inst: "Finde die Redezeichen im Satz!",
    t2_h1: "Suche die Gänsefüßchen am Anfang und Ende des Gesagten.",
    t2_h2: "„Hallo“ ist die wörtliche Rede.",
    t2_w1: "„Hallo“", t2_w2: "ruft", t2_w3: "die", t2_w4: "Mutter", t2_w5: ".",
    // Quiz: MANUAL
    t2_q: "Wo stehen die ersten Anführungszeichen bei der wörtlichen Rede?",
    t2_qa: "Unten vor dem ersten Wort", t2_qb: "Oben nach dem letzten Wort", t2_qc: "Mitten im Wort", t2_qd: "Hinter dem Punkt",

    // T3: Der Begleitsatz (Doppelpunkt)
    t3_title: "Der Doppelpunkt",
    t3_text: "Wenn der Begleitsatz am Anfang steht, brauchen wir einen Doppelpunkt (:). Er kündigt an: Jetzt sagt jemand etwas!",
    t3_b1: "Begleitsatz + Doppelpunkt + Rede.",
    t3_b2: "Beispiel: Tim sagt: „Hallo!“",
    t3_inst: "Verbinde den Begleitsatz mit der passenden Rede!",
    t3_h1: "Wer sagt was? Achte auf den Doppelpunkt.",
    t3_h2: "Mama sagt: -> „Essen ist fertig!“",
    t3_l1: "Mama sagt:", t3_r1: "„Essen ist fertig!“",
    t3_l2: "Der Lehrer fragt:", t3_r2: "„Seid ihr bereit?“",
    t3_l3: "Leo ruft:", t3_r3: "„Tor für uns!“",
    t3_l4: "Papa flüstert:", t3_r4: "„Schlaf gut.“",
    // Quiz: MANUAL
    t3_q: "Welches Zeichen steht nach dem Begleitsatz 'Er sagt'?",
    t3_qa: "Doppelpunkt (:)", t3_qb: "Komma (,)", t3_qc: "Punkt (.)", t3_qd: "Fragezeichen (?)",

    // T4: Satzzeichen-Mix
    t4_title: "Satzzeichen-Mix",
    t4_text: "Kannst du alle Zeichen richtig zuordnen? Punkt, Komma, Fragezeichen und Ausrufezeichen haben alle einen Job!",
    t4_b1: ". = Erzählen",
    t4_b2: ", = Trennen",
    t4_b3: "? = Fragen",
    t4_inst: "Sortiere die Zeichen in die richtigen Töpfe!",
    t4_h1: "Was beendet einen Satz und was steht in der Mitte?",
    t4_h2: "Punkt/Fragezeichen sind am Ende. Komma ist in der Mitte.",
    t4_bm: "Satzmitte ↔️", t4_be: "Satzende 🛑",
    t4_i1: "Komma", t4_i2: "Punkt", t4_i3: "Fragezeichen", t4_i4: "Ausrufezeichen",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Redezeichen-Check
    t5_title: "Redezeichen-Check",
    t5_text: "Achtung! Bei der wörtlichen Rede müssen die Zeichen an der richtigen Stelle stehen. Erst der Doppelpunkt, dann die Gänsefüßchen unten.",
    t5_b1: "Reihenfolge: : ➔ „ ➔ “",
    t5_inst: "Welches Satzzeichen fehlt hier?",
    t5_h1: "Nach 'Er sagt' fehlt der Doppelpunkt.",
    t5_h2: "Wähle den Doppelpunkt (:).",
    t5_sent_r: "Sie antwortet ___ „Ja, gerne.“",
    t5_cr1: ":", t5_cr2: ",", t5_cr3: ".", t5_cr4: "!",
    // Quiz: MANUAL
    t5_q: "Was umschließt das, was jemand sagt?",
    t5_qa: "Anführungszeichen", t5_qb: "Klammern", t5_qc: "Kommas", t5_qd: "Doppelpunkte",

    // T6: Die Aufzählung bauen
    t6_title: "Die Aufzählung bauen",
    t6_text: "Bringe die Wörter und Satzzeichen in die richtige Reihenfolge für eine perfekte Aufzählung.",
    t6_b1: "Komma, Komma, und.",
    t6_inst: "Ordne die Bausteine!",
    t6_h1: "Nenne die Farben nacheinander mit Komma dazwischen.",
    t6_h2: "Rot, Blau, Gelb und Grün.",
    t6_o1: "Rot,", t6_o2: "Blau,", t6_o3: "Gelb", t6_o4: "und Grün.",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T7: Satzzeichen-Meister
    t7_title: "Satzzeichen-Meister",
    t7_text: "Du bist nun ein Meister der Zeichen! Ob Aufzählung oder Rede - du weißt, wo der Punkt, das Komma und die Anführungszeichen hingehören.",
    t7_b1: "Satzzeichen geben dem Satz Struktur.",
    t7_inst: "Baue diesen Satz mit wörtlicher Rede richtig zusammen!",
    t7_h1: "Begleitsatz zuerst: Tim sagt:",
    t7_h2: "Tim sagt: „Ich komme.“",
    t7_f1: "Tim sagt:", t7_f2: "„Ich", t7_f3: "komme", t7_f4: "baldt.“",
    // Quiz: GENERATOR (satzzeichen_k1)
  }
};

export const ZEICHEN_POOL: PoolTopicDef[] = [
  // ── 1. Komma bei Aufzählungen (gap-fill) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Apfel", ",", "Birne", ",", "Banane"], highlightIndices: [1, 3], color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      correctIndex: 0, // , / ,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 2. Wörtliche Rede (highlight-text) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "„...“", emoji: "💬", color: "#8B5CF6", bg: "#F3E8FF" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctIndices: [0], // „Hallo“
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Der Begleitsatz (match-pairs) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-pairs", pairs: [["Satz:", "„Rede“"]], color: "#10B981" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
      ],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Satzzeichen-Mix (drag-to-bucket) ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "❓", label: "?" }, { emoji: "❗", label: "!" }, { emoji: "💬", label: "," }] },
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "m", label: "t4_bm" }, { id: "e", label: "t4_be" }],
      items: [
        { text: "t4_i1", bucketId: "m" }, // Komma
        { text: "t4_i2", bucketId: "e" }, // Punkt
        { text: "t4_i3", bucketId: "e" }, // Fragezeichen
        { text: "t4_i4", bucketId: "e" }, // Ausrufezeichen
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 5. Redezeichen Check (gap-fill) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "Sagt:", highlightChars: [":"], color: "#EF4444" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent_r",
      choices: ["t5_cr1", "t5_cr2", "t5_cr3", "t5_cr4"], // :
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Aufzählung bauen (word-order) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Rot", ",", "Gelb", "und", "Blau"], highlightIndices: [1, 3], color: "#F59E0B" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "word-order",
      words: ["t6_o3", "t6_o1", "t6_o4", "t6_o2"], // Gelb, Rot,, und Grün., Blau,
      correctOrder: [1, 3, 0, 2], // Rot, -> Blau, -> Gelb -> und Grün.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 7. Satzzeichen-Meister (sentence-build) ───────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📍", title: "Punktlandung!", bg: "#D1FAE5" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K3 (Final Review)
// Thema: Wiederholung aller K3-Themen (Plural, Verben, Steigerung, Zeitformen)
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung K3",

    // T1: Plural-Check (Alle Endungen)
    t1_title: "Plural-Check",
    t1_text: "Weißt du noch alle Plural-Endungen? -e, -er, -en, -s oder gar keine Endung. Teste dein Wissen!",
    t1_b1: "Achte auf Umlaute (a ➔ ä).",
    t1_inst: "Verbinde die Einzahl mit der richtigen Mehrzahl!",
    t1_h1: "Überlege genau, wie das Wort als Gruppe heißt.",
    t1_h2: "Hand ➔ Hände, Kind ➔ Kinder.",
    t1_l1: "Hand", t1_r1: "Hände",
    t1_l2: "Kind", t1_r2: "Kinder",
    t1_l3: "Auto", t1_r3: "Autos",
    t1_l4: "Blume", t1_r4: "Blumen",

    // T2: Verb-Konjugation
    t2_title: "Verb-Check",
    t2_text: "ich, du, er, sie, es... Verben verändern ihre Endung je nachdem, wer etwas tut.",
    t2_b1: "ich -e, du -st, er -t.",
    t2_inst: "Welches Verb passt perfekt in die Lücke?",
    t2_h1: "Schau dir das Pronomen am Anfang an.",
    t2_h2: "Bei 'wir' brauchen wir die Grundform (-en).",
    t2_sent: "Wir ___ heute zusammen Musik.",
    t2_c1: "hören", t2_c2: "hörst", t2_c3: "hört", t2_c4: "höre",

    // T3: Steigerung (Alles höher?)
    t3_title: "Alles höher?",
    t3_text: "Vergleichen macht Spaß! Schnell, schneller, am schnellsten. Kannst du die Stufen ordnen?",
    t3_b1: "Grundform ➔ Komparativ ➔ Superlativ.",
    t3_inst: "Bringe die Adjektive in die richtige Reihenfolge!",
    t3_h1: "Fange klein an und werde immer mehr.",
    t3_h2: "gut -> besser -> am besten.",
    t3_o1: "gut", t3_o2: "besser", t3_o3: "am besten",

    // T4: Satzglieder (Subjekt & Prädikat)
    t4_title: "Satz-Baumeister",
    t4_text: "Ein Satz braucht einen König (Subjekt) und einen Motor (Prädikat). Findest du sie?",
    t4_b1: "Subjekt = Wer oder was?",
    t4_b2: "Prädikat = Was passiert?",
    t4_inst: "Finde das Subjekt (den König) im Satz!",
    t4_h1: "Frage dich: WER kocht die Suppe?",
    t4_h2: "Die Antwort ist 'Die Oma'.",
    t4_w1: "Die Oma", t4_w2: "kocht", t4_w3: "eine", t4_w4: "Suppe", t4_w5: ".",

    // T5: Präteritum (Märchenzeit)
    t5_title: "Gestern war...",
    t5_text: "Das Präteritum brauchen wir zum Erzählen. war, hatte, ging, lief.",
    t5_b1: "Erzähl-Vergangenheit.",
    t5_inst: "Welche Form steht im Präteritum?",
    t5_h1: "Suche das Wort, das 'früher' bedeutet.",
    t5_h2: "'er rannte' ist Präteritum.",
    t5_sent_p: "Er ___ schnell nach Hause.",
    t5_cp1: "rannte", t5_cp2: "rennt", t5_cp3: "ist gerannt", t5_cp4: "rennen",

    // T6: Perfekt (Was ist passiert?)
    t6_title: "Was ist passiert?",
    t6_text: "Das Perfekt bauen wir mit haben oder sein. Ich habe gespielt. Er ist gelaufen.",
    t6_b1: "Hilfsverb + Partizip.",
    t6_inst: "Baue den Satz im Perfekt zusammen!",
    t6_h1: "Wer (Lisa), dann der Helfer (hat), dann was (ein Bild), dann das Ende (gemalt).",
    t6_h2: "Lisa hat ein Bild gemalt.",
    t6_f1: "Lisa", t6_f2: "hat", t6_f3: "ein Bild", t6_f4: "gemalt.",

    // T7: Satzzeichen (Punkt und Komma)
    t7_title: "Punkt und Komma",
    t7_text: "Satzzeichen sind wichtig für die Ordnung. Vergiss das Komma bei Aufzählungen nicht!",
    t7_b1: ". ? ! , : „ “",
    t7_inst: "Welches Satzzeichen fehlt hier?",
    t7_h1: "Es ist eine Frage. Was kommt ans Ende?",
    t7_h2: "Ein Fragezeichen (?) ist richtig.",
    t7_sent_z: "Kommst du heute zu mir ___",
    t7_cz1: "?", t7_cz2: ".", t7_cz3: "!", t7_cz4: ",",
  }
};

export const EXAM3_POOL: PoolTopicDef[] = [
  // ── 1. Plural (match-pairs) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "👐", label: "Hände" }, { emoji: "🚗", label: "Autos" }] },
    bulletKeys: ["t1_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 2. Verben Präsens (gap-fill) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "wir hören", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_sent",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"],
      correctIndex: 0,
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 3. Steigerung (word-order) ──────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-pairs", pairs: [["gut", "besser"], ["besser", "am besten"]], color: "#F59E0B" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "word-order",
      words: ["t3_o2", "t3_o3", "t3_o1"], // besser, am besten, gut
      correctOrder: [2, 0, 1], // gut -> besser -> am besten
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "adjektive_gegenteil" },
  },

  // ── 4. Satzglieder (highlight-text) ───────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Die Oma", "kocht", "eine Suppe", "."], highlightIndices: [0], color: "#3B82F6" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctIndices: [0], // Die Oma
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 5. Präteritum (gap-fill) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "rannte", emoji: "🏃", color: "#10B981", bg: "#D1FAE5" } ] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent_p",
      choices: ["t5_cp1", "t5_cp2", "t5_cp3", "t5_cp4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "praeteritum" },
  },

  // ── 6. Perfekt (sentence-build) ──────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "hat", word2: "gemalt", result: "Perfekt", color: "#8B5CF6" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 7. Zeichensetzung (gap-fill) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌟", title: "K3 Finale!", bg: "#D1FAE5" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t7_sent_z",
      choices: ["t7_cz1", "t7_cz2", "t7_cz3", "t7_cz4"],
      correctIndex: 0,
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },
];


