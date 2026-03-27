import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — NomenArtikelInsel
// Thema: Nomen erkennen, der/die/das, Groß-/Kleinschreibung
// ─────────────────────────────────────────────────────────────────────────────

export const NOMEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nomen & Artikel",

    // T1: Was ist ein Nomen?
    t1_title: "Was ist ein Nomen?",
    t1_text: "Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
    t1_b1: "Nomen = Namen für Dinge, Tiere, Menschen",
    t1_b2: "Nomen schreiben wir immer GROSS!",
    t1_b3: "Jedes Nomen hat einen Artikel: der, die oder das",
    t1_inst: "Finde alle Nomen!",
    t1_h1: "Nomen sind immer großgeschrieben.",
    t1_h2: "Hund und Katze sind Nomen. schläft und groß sind es nicht.",
    t1_w1: "Hund", t1_w2: "schläft", t1_w3: "Katze", t1_w4: "groß",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Der, die oder das?
    t2_title: "Der, die oder das?",
    t2_text: "Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
    t2_b1: "der → männlich (Maskulinum) 🔵",
    t2_b2: "die → weiblich (Femininum) 🔴",
    t2_b3: "das → sächlich (Neutrum) 🟢",
    t2_inst: "Sortiere: der, die oder das?",
    t2_h1: "Drei Artikel: der, die, das.",
    t2_h2: "der Hund, die Katze, das Haus",
    t2_bd: "der 🔵", t2_bdi: "die 🔴", t2_bda: "das 🟢",
    t2_i1: "Hund", t2_i2: "Katze", t2_i3: "Haus", t2_i4: "Baum", t2_i5: "Blume",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Groß oder klein? (gap-fill)
    t3_title: "Groß oder klein?",
    t3_text: "Achtung, Falle! Nomen müssen wir immer mit einem großen Anfangsbuchstaben schreiben. Wenn sie klein geschrieben sind, ist es falsch!",
    t3_b1: "Der erste Buchstabe ist GROSS.",
    t3_inst: "Welches Wort ist richtig geschrieben?",
    t3_h1: "Suche das Wort mit dem großen Anfangsbuchstaben.",
    t3_h2: "Das Wort 'Auto' schreibt man groß.",
    t3_sent: "Das ist ein schnelles ___.",
    t3_c1: "Auto", t3_c2: "auto", t3_c3: "aUto", t3_c4: "AuTo",
    // Quiz: MANUAL (specifikus szabály miatt)
    t3_q: "Wie schreiben wir Nomen?",
    t3_qa: "Am Anfang groß", t3_qb: "Immer klein", t3_qc: "Alles groß", t3_qd: "Nur am Satzende",

    // T4: Einzahl und Mehrzahl
    t4_title: "Einzahl und Mehrzahl",
    t4_text: "Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t4_b1: "Einzahl = 1 (Singular)",
    t4_b2: "Mehrzahl = viele (Plural)",
    t4_inst: "Verbinde die Einzahl mit der Mehrzahl!",
    t4_h1: "Hund wird zu Hunde.",
    t4_h2: "Apfel wird zu Äpfel.",
    t4_l1: "Hund", t4_r1: "Hunde",
    t4_l2: "Katze", t4_r2: "Katzen",
    t4_l3: "Apfel", t4_r3: "Äpfel",
    t4_l4: "Haus", t4_r4: "Häuser",
    // Quiz: GENERATOR (plural)

    // T5: Nomen im Satz
    t5_title: "Nomen im Satz finden",
    t5_text: "Ein Nomen versteckt sich nicht nur am Anfang, es kann überall im Satz stehen. Aber es verrät sich durch den großen Buchstaben!",
    t5_b1: "Nomen können überall stehen.",
    t5_b2: "Sie verraten sich durch den großen Buchstaben.",
    t5_inst: "Finde das Nomen in diesem Satz!",
    t5_h1: "Wer oder was singt hier?",
    t5_h2: "Das Nomen ist 'Vogel'.",
    // Tokens for sentence display
    t5_w1: "Der", t5_w2: "kleine", t5_w3: "Vogel", t5_w4: "singt", t5_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Zusammengesetzte Nomen
    t6_title: "Zusammengesetzte Nomen",
    t6_text: "Wir können zwei Nomen zusammenbauen! Baum + Haus = Baumhaus. Wichtig: Der Artikel richtet sich immer nach dem LETZTEN Wort (das Haus -> das Baumhaus).",
    t6_b1: "Nomen 1 + Nomen 2 = Neues Nomen",
    t6_b2: "Artikel gehört zum letzten Wort!",
    t6_inst: "Baue das Wort zusammen!",
    t6_h1: "Wir suchen eine Tasche für die Schule.",
    t6_h2: "Schul + tasche.",
    t6_f1: "Schul", t6_f2: "tasche",
    // Quiz: MANUAL (specifikus szabályteszt)
    t6_q: "Welcher Artikel passt zu 'Hundehütte'? (die Hütte)",
    t6_qa: "die", t6_qb: "der", t6_qc: "das", t6_qd: "ein",

    // T7: Ordnung im Satz
    t7_title: "Ordnung im Satz",
    t7_text: "Ein Satz ist wie ein Puzzle. Der Großbuchstabe kommt an den Anfang, der Punkt an das Ende. Dazwischen müssen die Wörter Sinn ergeben!",
    t7_b1: "Satzanfang groß.",
    t7_b2: "Satzende = Punkt.",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Wer macht was?",
    t7_h2: "Der Hund bellt.",
    t7_s1: "Der", t7_s2: "Hund", t7_s3: "bellt.",
    // Quiz: GENERATOR (nomen_k2) - teszteljük, felismeri-e a főnevet a kirakott mondatban
  }
};

export const NOMEN_POOL: PoolTopicDef[] = [
  // ── 1. Was ist ein Nomen? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "der Hund" }, { emoji: "🐱", label: "die Katze" }, { emoji: "🏠", label: "das Haus" }] },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0, 2], // Hund, Katze
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 2. Der, die oder das? (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" },
      { text: "die", emoji: "🔴", color: "#991B1B", bg: "#FEE2E2" },
      { text: "das", emoji: "🟢", color: "#065F46", bg: "#D1FAE5" },
    ]},
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t2_bd" }, { id: "die", label: "t2_bdi" }, { id: "das", label: "t2_bda" }],
      items: [
        { text: "t2_i1", bucketId: "der" }, // Hund
        { text: "t2_i2", bucketId: "die" }, // Katze
        { text: "t2_i3", bucketId: "das" }, // Haus
        { text: "t2_i4", bucketId: "der" }, // Baum
        { text: "t2_i5", bucketId: "die" }, // Blume
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 3. Groß oder klein? (gap-fill) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "Auto", highlightChars: ["A"], color: "#10B981" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], // Auto, auto, aUto, AuTo
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Einzahl / Mehrzahl (match-pairs) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["Hund", "Hunde"], ["Haus", "Häuser"]], color: "#7C3AED" },
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
    quiz: { generate: "plural" },
  },

  // ── 5. Nomen im Satz (highlight-text) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Der", "kleine", "Vogel", "singt", "."], highlightIndices: [2], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5"],
      correctIndices: [2], // Vogel
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 6. Zusammengesetzte Nomen (word-order) ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Schul", word2: "tasche", result: "Schultasche", color: "#EC4899" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_f2", "t6_f1"], // keverve jelenik meg: tasche, Schul
      correctOrder: [1, 0], // Helyes: Schul -> tasche
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Ordnung im Satz (sentence-build) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "Der Hund bellt." }] },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_s1", "t7_s2", "t7_s3"], // Der, Hund, bellt.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verbeninsel
// Thema: Verben erkennen, Grundform (Infinitiv), Konjugation ich/du/er
// ─────────────────────────────────────────────────────────────────────────────

export const VERB_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verbeninsel",

    // T1: Was sind Verben?
    t1_title: "Was sind Verben?",
    t1_text: "Verben sagen uns, was jemand tut oder was passiert. Deshalb nennen wir sie auch Tunwörter! Beispiele: laufen 🏃, lachen 😄, schlafen 😴.",
    t1_b1: "Verben = Tunwörter.",
    t1_b2: "Sie zeigen eine Aktion oder einen Zustand.",
    t1_inst: "Finde das Verb (Tunwort)!",
    t1_h1: "Was kann man tun?",
    t1_h2: "'rennen' ist etwas, das man tun kann.",
    t1_w1: "Haus", t1_w2: "rennen", t1_w3: "und", t1_w4: "blau",
    // Quiz: GENERATOR (verben_k2)

    // T2: Nomen oder Verb?
    t2_title: "Nomen oder Verb?",
    t2_text: "Erinnerst du dich? Nomen (Dinge/Tiere) schreiben wir GROSS, Verben (Tunwörter) schreiben wir klein (außer am Satzanfang).",
    t2_b1: "Nomen = groß (Dinge, Tiere).",
    t2_b2: "Verben = klein (Aktionen).",
    t2_inst: "Sortiere: Ist es ein Nomen oder ein Verb?",
    t2_h1: "Groß = Nomen. Klein = Verb.",
    t2_h2: "Hund und Baum sind Nomen. spielen und lachen sind Verben.",
    t2_bn: "Nomen 📦", t2_bv: "Verb 🏃",
    t2_i1: "Hund", t2_i2: "spielen", t2_i3: "lachen", t2_i4: "Baum",
    // Quiz: MANUAL (szabály tesztelése)
    t2_q: "Wie schreiben wir Verben normalerweise im Satz?",
    t2_qa: "klein", t2_qb: "groß", t2_qc: "alles groß", t2_qd: "mit einem Punkt",

    // T3: Die Grundform (Infinitiv)
    t3_title: "Die Grundform (Infinitiv)",
    t3_text: "Wenn ein Verb noch nicht verändert wurde, steht es in der Grundform. Diese endet fast immer auf '-en'. Zum Beispiel: mal-en, sing-en.",
    t3_b1: "Grundform endet meist auf '-en'.",
    t3_inst: "Verbinde das Bild mit der Grundform des Verbs!",
    t3_h1: "Was tun die Leute auf den Bildern?",
    t3_h2: "Ein Buch -> lesen. Ein Bett -> schlafen.",
    t3_l1: "📖", t3_r1: "lesen",
    t3_l2: "💤", t3_r2: "schlafen",
    t3_l3: "🎨", t3_r3: "malen",
    t3_l4: "🏃", t3_r4: "laufen",
    // Quiz: MANUAL
    t3_q: "Wie endet die Grundform der meisten Verben?",
    t3_qa: "-en", t3_qb: "-er", t3_qc: "-st", t3_qd: "-t",

    // T4: Ich und Du (Konjugation)
    t4_title: "Ich und Du",
    t4_text: "Verben verändern sich! Wenn ich etwas tue, endet das Verb meistens auf '-e' (ich spiel-e). Wenn du etwas tust, endet es auf '-st' (du spiel-st).",
    t4_b1: "ich → -e (ich lache)",
    t4_b2: "du → -st (du lachst)",
    t4_inst: "Welches Verb passt in die Lücke?",
    t4_h1: "Das Wort davor ist 'Ich'.",
    t4_h2: "Bei 'Ich' endet das Verb auf '-e'.",
    t4_sent: "Ich ___ im Garten.",
    t4_c1: "spiele", t4_c2: "spielst", t4_c3: "spielt", t4_c4: "spielen",
    // Quiz: MANUAL
    t4_q: "Was ist richtig?",
    t4_qa: "du lernst", t4_qb: "du lerne", t4_qc: "du lernt", t4_qd: "du lernen",

    // T5: Er, sie, es (Konjugation)
    t5_title: "Er, sie, es",
    t5_text: "Wenn jemand anderes etwas tut (er, sie oder es), bekommt das Verb die Endung '-t'. Zum Beispiel: er lach-t, sie tanz-t, es regne-t.",
    t5_b1: "er/sie/es → -t",
    t5_inst: "Baue den Satz richtig zusammen!",
    t5_h1: "Wer macht was?",
    t5_h2: "Er trinkt Wasser.",
    t5_f1: "Er", t5_f2: "trinkt", t5_f3: "Wasser.",
    // Quiz: MANUAL
    t5_q: "Welche Endung bekommt das Verb bei 'sie (Einzahl)'?",
    t5_qa: "-t", t5_qb: "-e", t5_qc: "-st", t5_qd: "-en",

    // T6: Achtung, Vokalwechsel!
    t6_title: "Achtung, Vokalwechsel!",
    t6_text: "Manche Verben sind stark. Sie verändern nicht nur die Endung, sondern auch den Buchstaben in der Mitte! Aus 'a' wird oft 'ä' (ich laufe -> du läufst).",
    t6_b1: "Vokal in der Mitte ändert sich.",
    t6_b2: "ich fahre → du fährst",
    t6_inst: "Ordne die Wörter in die richtige Reihenfolge!",
    t6_h1: "Der Satz heißt: Du fährst schnell.",
    t6_h2: "Du -> fährst -> schnell.",
    t6_o1: "Du", t6_o2: "fährst", t6_o3: "schnell.",
    // Quiz: MANUAL
    t6_q: "Was wird aus 'ich schlafe'?",
    t6_qa: "du schläfst", t6_qb: "du schlafst", t6_qc: "du schlafe", t6_qd: "du schliefe",

    // T7: Das Verb an zweiter Stelle
    t7_title: "Das Verb an Platz 2",
    t7_text: "In einem normalen Aussagesatz hat das Verb einen ganz festen Platz: Es steht immer an der ZWEITEN Stelle! 'Der Hund rennt schnell.'",
    t7_b1: "Das Verb steht auf Platz 2.",
    t7_inst: "Finde das Verb in diesem Satz!",
    t7_h1: "Welches Wort sagt, was das Kind tut?",
    t7_h2: "Das Verb ist 'spielt'. Es steht an 2. Stelle.",
    t7_w1: "Das Kind", t7_w2: "spielt", t7_w3: "Ball", t7_w4: ".",
    // Quiz: GENERATOR (verben_k2)
  }
};

export const VERB_POOL: PoolTopicDef[] = [
  // ── 1. Was sind Verben? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "rennen" }, { emoji: "😴", label: "schlafen" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [1], // rennen
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 2. Nomen oder Verb? (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["Hund", "Baum"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["lachen", "spielen"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nomen", label: "t2_bn" }, { id: "verb", label: "t2_bv" }],
      items: [
        { text: "t2_i1", bucketId: "nomen" }, // Hund
        { text: "t2_i2", bucketId: "verb" },  // spielen
        { text: "t2_i3", bucketId: "verb" },  // lachen
        { text: "t2_i4", bucketId: "nomen" }, // Baum
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Grundform (Infinitiv) (match-pairs) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "spielen", highlightChars: ["e", "n"], color: "#10B981" },
    bulletKeys: ["t3_b1"],
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

  // ── 4. Ich und Du (gap-fill) ───────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "ich spiel-e", color: "#1E40AF", bg: "#DBEAFE" }, { text: "du spiel-st", color: "#991B1B", bg: "#FEE2E2" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0, // spiele
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Er, sie, es (sentence-build) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-pairs", pairs: [["er", "-t"], ["sie", "-t"]], color: "#7C3AED" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t5_f1", "t5_f2", "t5_f3"], // Er, trinkt, Wasser.
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Vokalwechsel (word-order) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["a", "ä"], ["e", "ie"]], color: "#EF4444" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o3", "t6_o1", "t6_o2"], // keverve: schnell, Du, fährst
      correctOrder: [1, 2, 0], // Du -> fährst -> schnell.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Verb an Platz 2 (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "sentence-display", words: ["Das Kind", "spielt", "Ball", "."], highlightIndices: [1], color: "#F59E0B" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], 
      correctIndices: [1], // spielt (in der Ansicht ist es Platz 2, da "Das Kind" ein Token ist)
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adjektivinsel
// Thema: Adjektive erkennen, Gegensätze, Steigerung (groß→größer→am größten)
// ─────────────────────────────────────────────────────────────────────────────

export const ADJEKTIV_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Adjektivinsel",

    // T1: Was sind Adjektive?
    t1_title: "Was sind Adjektive?",
    t1_text: "Adjektive sagen uns, WIE ein Mensch, ein Tier oder ein Ding ist. Deshalb nennen wir sie auch Wiewörter! Zum Beispiel: der Hund ist 'schnell', der Baum ist 'hoch'.",
    t1_b1: "Adjektive = Wiewörter.",
    t1_b2: "Sie beschreiben Nomen genauer.",
    t1_inst: "Finde das Adjektiv im Satz!",
    t1_h1: "Frage dich: WIE ist die Katze?",
    t1_h2: "Die Katze ist 'müde'.",
    t1_w1: "Die", t1_w2: "Katze", t1_w3: "ist", t1_w4: "müde", t1_w5: ".",
    // Quiz: MANUAL
    t1_q: "Auf welche Frage antworten Adjektive (Wiewörter)?",
    t1_qa: "Wie ist etwas?", t1_qb: "Wer tut was?", t1_qc: "Wann passiert es?", t1_qd: "Wo ist es?",

    // T2: Gegensätze (Opposites)
    t2_title: "Gegensätze",
    t2_text: "Viele Adjektive haben einen Partner, der genau das Gegenteil bedeutet. Wenn es draußen nicht heiß ist, dann ist es... kalt!",
    t2_b1: "Gegensätze bedeuten das Gegenteil.",
    t2_b2: "groß ↔ klein, laut ↔ leise.",
    t2_inst: "Verbinde die Gegensätze!",
    t2_h1: "Was ist das Gegenteil von 'schnell'?",
    t2_h2: "schnell -> langsam, heiß -> kalt.",
    t2_l1: "heiß", t2_r1: "kalt",
    t2_l2: "groß", t2_r2: "klein",
    t2_l3: "schnell", t2_r3: "langsam",
    t2_l4: "laut", t2_r4: "leise",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T3: Nomen oder Adjektiv?
    t3_title: "Nomen oder Adjektiv?",
    t3_text: "Wir schreiben Nomen (Dinge) GROSS und Adjektive (Eigenschaften) klein. 'Das schöne Haus' - 'Haus' ist groß, 'schöne' ist klein.",
    t3_b1: "Nomen = groß.",
    t3_b2: "Adjektiv = klein.",
    t3_inst: "Sortiere die Wörter!",
    t3_h1: "Großgeschrieben = Nomen. Kleingeschrieben = Adjektiv.",
    t3_h2: "Apfel und Baum sind Nomen. bunt und weich sind Adjektive.",
    t3_bn: "Nomen 📦", t3_ba: "Adjektiv 🎨",
    t3_i1: "Apfel", t3_i2: "bunt", t3_i3: "weich", t3_i4: "Baum",
    // Quiz: MANUAL
    t3_q: "Wie schreiben wir Adjektive normalerweise im Satz?",
    t3_qa: "klein", t3_qb: "groß", t3_qc: "alles groß", t3_qd: "nur am Ende groß",

    // T4: Farben sind auch Adjektive
    t4_title: "Farben als Adjektive",
    t4_text: "Farben sagen uns auch, WIE etwas aussieht. Deshalb sind alle Farben Adjektive: rot, blau, gelb, grün!",
    t4_b1: "Alle Farben sind Adjektive.",
    t4_inst: "Welches Adjektiv passt in die Lücke?",
    t4_h1: "Welche Farbe hat eine reife Zitrone?",
    t4_h2: "Eine Zitrone ist gelb.",
    t4_sent: "Die Zitrone ist ___.",
    t4_c1: "gelb", t4_c2: "blau", t4_c3: "lila", t4_c4: "schwarz",
    // Quiz: GENERATOR (farben_k2)

    // T5: Vergleichen (Steigerung)
    t5_title: "Dinge vergleichen",
    t5_text: "Mit Adjektiven können wir Dinge vergleichen. Eine Maus ist klein. Ein Käfer ist kleiner. Ein Floh ist am kleinsten!",
    t5_b1: "Grundform: klein",
    t5_b2: "Vergleich: kleiner",
    t5_b3: "Höchste Stufe: am kleinsten",
    t5_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "Fange mit der Grundform an, dann die Steigerung.",
    t5_h2: "schnell -> schneller -> am schnellsten.",
    t5_o1: "schnell", t5_o2: "schneller", t5_o3: "am schnellsten",
    // Quiz: MANUAL
    t5_q: "Was ist richtig?",
    t5_qa: "groß - größer - am größten", t5_qb: "groß - großiger - am großesten", t5_qc: "groß - mehr groß - am mehr groß", t5_qd: "groß - kleinsten",

    // T6: Adjektive vor dem Nomen
    t6_title: "Adjektive vor dem Nomen",
    t6_text: "Oft stehen Adjektive direkt vor dem Nomen, um es zu beschreiben. Dann verändern sie ihre Endung: 'der Hund' + 'schnell' = 'der schnelle Hund'.",
    t6_b1: "Adjektive passen sich an.",
    t6_inst: "Baue den Satz in der richtigen Reihenfolge auf!",
    t6_h1: "Der Artikel (Der) kommt zuerst, dann das Adjektiv, dann das Nomen.",
    t6_h2: "Der kleine Hund bellt.",
    t6_f1: "Der", t6_f2: "kleine", t6_f3: "Hund", t6_f4: "bellt.",
    // Quiz: MANUAL
    t6_q: "Welcher Satzteil ist ein Adjektiv in: 'Das bunte Bild ist schön.'?",
    t6_qa: "bunte", t6_qb: "Das", t6_qc: "Bild", t6_qd: "ist",

    // T7: Finde das Gegenteil
    t7_title: "Finde das Gegenteil",
    t7_text: "Lass uns dein Wissen über Gegensätze noch einmal testen. Ein echter Adjektiv-Profi kennt viele Wiewörter!",
    t7_b1: "Denk an den Partner-Gegensatz.",
    t7_inst: "Welches Wort ist das Gegenteil von 'alt'?",
    t7_h1: "Wenn jemand nicht alt ist, ist er...",
    t7_h2: "Das Gegenteil von alt ist 'jung' oder 'neu'.",
    t7_sent: "Das Gegenteil von alt ist ___.",
    t7_c1: "jung", t7_c2: "groß", t7_c3: "schwer", t7_c4: "bunt",
    // Quiz: GENERATOR (adjektive_gegenteil)
  }
};

export const ADJEKTIV_POOL: PoolTopicDef[] = [
  // ── 1. Was sind Adjektive? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "schnell", color: "#10B981", bg: "#D1FAE5" }, { text: "hoch", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"],
      correctIndices: [3], // müde
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Gegensätze (match-pairs) ─────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["heiß", "kalt"], ["groß", "klein"]], color: "#EF4444" },
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
    quiz: { generate: "gegensaetze_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 3. Nomen oder Adjektiv? (drag-to-bucket) ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Haus", "Baum"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["schön", "klein"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nomen", label: "t3_bn" }, { id: "adjektiv", label: "t3_ba" }],
      items: [
        { text: "t3_i1", bucketId: "nomen" }, // Apfel
        { text: "t3_i2", bucketId: "adjektiv" }, // bunt
        { text: "t3_i3", bucketId: "adjektiv" }, // weich
        { text: "t3_i4", bucketId: "nomen" }, // Baum
      ],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Farben sind Adjektive (gap-fill) ─────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "gelb", highlightChars: ["g"], color: "#F59E0B" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0, // gelb
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "farben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 5. Vergleichen (word-order) ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐭", label: "klein" }, { emoji: "🐜", label: "kleiner" }] },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "word-order",
      words: ["t5_o2", "t5_o3", "t5_o1"], // keverve: schneller, am schnellsten, schnell
      correctOrder: [2, 0, 1], // schnell -> schneller -> am schnellsten
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Adjektive vor dem Nomen (sentence-build) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "der schnelle Hund", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], // Der, kleine, Hund, bellt.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Gegenteil finden (gap-fill) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["alt", "jung"], ["neu", "alt"]], color: "#7C3AED" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t7_sent",
      choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"],
      correctIndex: 0, // jung
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "adjektive_gegenteil" }, // ❤️ GENERATOR HASZNÁLATA
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Satzarteninsel
// Thema: Aussagesatz (.), Fragesatz (?), Ausrufesatz (!)
// ─────────────────────────────────────────────────────────────────────────────

export const SATZART_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzarteninsel",

    // T1: Der Aussagesatz (.)
    t1_title: "Der Aussagesatz (.)",
    t1_text: "Wenn wir einfach etwas erzählen oder erklären, machen wir am Ende einen Punkt (.). Die Stimme geht am Satzende nach unten.",
    t1_b1: "Wir erzählen etwas.",
    t1_b2: "Am Ende steht ein Punkt (.).",
    t1_inst: "Welches Zeichen gehört an das Ende?",
    t1_h1: "Der Satz erzählt einfach nur, dass die Sonne scheint.",
    t1_h2: "Du brauchst einen Punkt (.).",
    t1_sent: "Die Sonne scheint ___",
    t1_c1: ".", t1_c2: "?", t1_c3: "!", t1_c4: ",",
    // Quiz: GENERATOR (satzzeichen_k1)
    
    // T2: Der Fragesatz (?)
    t2_title: "Der Fragesatz (?)",
    t2_text: "Wenn wir etwas wissen wollen, stellen wir eine Frage. Am Ende steht ein Fragezeichen (?). Die Stimme geht am Ende nach oben ↗!",
    t2_b1: "Wir wollen etwas wissen.",
    t2_b2: "Am Ende steht ein Fragezeichen (?).",
    t2_inst: "Baue die Frage richtig zusammen!",
    t2_h1: "Das Fragewort (Wie) steht meistens am Anfang.",
    t2_h2: "Wie heißt du?",
    t2_f1: "Wie", t2_f2: "heißt", t2_f3: "du?",
    // Quiz: MANUAL
    t2_q: "Was macht die Stimme am Ende einer Frage?",
    t2_qa: "Sie geht nach oben ↗", t2_qb: "Sie geht nach unten ↘", t2_qc: "Sie flüstert", t2_qd: "Sie macht eine Pause",

    // T3: Fragewörter
    t3_title: "Die Fragewörter",
    t3_text: "Viele Fragen beginnen mit einem speziellen Fragewort. Diese fangen oft mit 'W' an: Wer, Wie, Was, Wo, Warum!",
    t3_b1: "Fragewörter fangen meist mit 'W' an.",
    t3_inst: "Finde das Fragewort in diesem Satz!",
    t3_h1: "Suche das Wort mit 'W' am Anfang.",
    t3_h2: "Das Fragewort ist 'Wo'.",
    t3_w1: "Wo", t3_w2: "ist", t3_w3: "mein", t3_w4: "Hund", t3_w5: "?",
    // Quiz: MANUAL
    t3_q: "Welches Wort ist ein Fragewort?",
    t3_qa: "Warum", t3_qb: "Wald", t3_qc: "Wasser", t3_qd: "Wiese",

    // T4: Der Ausrufesatz (!)
    t4_title: "Der Ausrufesatz (!)",
    t4_text: "Achtung! Wenn wir etwas rufen, befehlen oder uns erschrecken, benutzen wir ein Ausrufezeichen (!). Halt! Stopp! Hilfe!",
    t4_b1: "Wir rufen, befehlen oder warnen.",
    t4_b2: "Am Ende steht ein Ausrufezeichen (!).",
    t4_inst: "Welches Satzzeichen fehlt hier: 'Pass auf'?",
    t4_h1: "Das ist eine Warnung, man ruft es oft laut.",
    t4_h2: "Du brauchst das Ausrufezeichen (!).",
    t4_sent_a: "Pass auf ___",
    t4_ca1: "!", t4_ca2: ".", t4_ca3: "?", t4_ca4: ",",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Punkt oder Fragezeichen?
    t5_title: "Punkt oder Fragezeichen?",
    t5_text: "Erkennst du den Unterschied? Eine Information bekommt einen Punkt. Eine Frage bekommt ein Fragezeichen.",
    t5_b1: "Erzählen = Punkt (.)",
    t5_b2: "Fragen = Fragezeichen (?)",
    t5_inst: "Sortiere die Sätze nach ihrem Endzeichen!",
    t5_h1: "Will der Satz etwas wissen oder nur etwas sagen?",
    t5_h2: "'Ich spiele.' ist ein Aussagesatz. 'Spielst du?' ist eine Frage.",
    t5_bp: "Punkt (.)", t5_bf: "Frage (?)",
    t5_i1: "Ich bin acht Jahre alt", t5_i2: "Wie alt bist du", t5_i3: "Es regnet heute", t5_i4: "Regnet es",
    // Quiz: MANUAL
    t5_q: "Was kommt ans Ende von: 'Ich mag Eis'?",
    t5_qa: "Ein Punkt (.)", t5_qb: "Ein Fragezeichen (?)", t5_qc: "Ein Ausrufezeichen (!)", t5_qd: "Gar nichts",

    // T6: Die Satzmelodie
    t6_title: "Die Satzmelodie",
    t6_text: "Wenn wir sprechen, singt unsere Stimme eine kleine Melodie. Beim Punkt (.) geht sie runter ↘. Beim Fragezeichen (?) geht sie hoch ↗.",
    t6_b1: "Punkt (.) ↘ Stimme runter.",
    t6_b2: "Frage (?) ↗ Stimme hoch.",
    t6_inst: "Verbinde das Zeichen mit der Satzmelodie!",
    t6_h1: "Bei der Frage geht die Stimme hoch.",
    t6_h2: "? -> Stimme hoch ↗, . -> Stimme runter ↘.",
    t6_l1: "?", t6_r1: "Stimme hoch ↗",
    t6_l2: ".", t6_r2: "Stimme runter ↘",
    t6_l3: "!", t6_r3: "Laut rufen 🗣️",
    // Quiz: MANUAL
    t6_q: "Bei welchem Zeichen geht die Stimme nach unten ↘?",
    t6_qa: "Beim Punkt (.)", t6_qb: "Beim Fragezeichen (?)", t6_qc: "Beim Komma (,)", t6_qd: "Beim Ausrufezeichen (!)",

    // T7: Sätze mischen (Wortstellung)
    t7_title: "Sätze umbauen",
    t7_text: "Wir können aus einem Aussagesatz eine Frage machen, indem wir die Wörter umstellen! 'Du kommst.' (.) wird zu 'Kommst du?' (?). Das Verb rutscht nach vorne!",
    t7_b1: "Aussage: Du spielst.",
    t7_b2: "Frage: Spielst du?",
    t7_inst: "Baue eine Frage aus diesen Wörtern!",
    t7_h1: "Bei der Frage ohne Fragewort steht das Verb (Tunwort) ganz vorne.",
    t7_h2: "Kommst du heute?",
    t7_o1: "Kommst", t7_o2: "du", t7_o3: "heute?",
    // Quiz: GENERATOR (satzzeichen_k1)
  }
};

export const SATZART_POOL: PoolTopicDef[] = [
  // ── 1. Der Aussagesatz (.) (gap-fill) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: ".", emoji: "🔵", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], // ., ?, !, ,
      correctIndex: 0, // .
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 2. Der Fragesatz (?) (sentence-build) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "?", emoji: "❓", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t2_f1", "t2_f2", "t2_f3"], // Wie, heißt, du?
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Die Fragewörter (highlight-text) ──────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-circles", letters: ["W", "e", "r", "?"], color: "#F59E0B" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctIndices: [0], // Wo
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Der Ausrufesatz (!) (gap-fill) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "!", emoji: "❗", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent_a",
      choices: ["t4_ca1", "t4_ca2", "t4_ca3", "t4_ca4"], // !, ., ?, ,
      correctIndex: 0, // !
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 5. Punkt oder Fragezeichen? (drag-to-bucket) ─────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["."], bg: "#E0F2FE", border: "#0EA5E9" }, right: { items: ["?"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "p", label: "t5_bp" }, { id: "f", label: "t5_bf" }],
      items: [
        { text: "t5_i1", bucketId: "p" }, // Punkt
        { text: "t5_i2", bucketId: "f" }, // Frage
        { text: "t5_i3", bucketId: "p" }, // Punkt
        { text: "t5_i4", bucketId: "f" }, // Frage
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Die Satzmelodie (match-pairs) ─────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["?", "↗"], [".", "↘"]], color: "#7C3AED" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Sätze umbauen (word-order) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "sentence-display", words: ["Kommst", "du", "heute", "?"], highlightIndices: [0], color: "#EC4899" },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "word-order",
      words: ["t7_o2", "t7_o3", "t7_o1"], // keverve: du, heute?, Kommst
      correctOrder: [2, 0, 1], // Kommst -> du -> heute?
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Großschreibungsinsel
// Thema: Nomen groß, Satzanfang groß, Adjektive/Verben klein
// ─────────────────────────────────────────────────────────────────────────────

export const GROSS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großschreibungsinsel",

    // T1: Der Satzanfang
    t1_title: "Der Satzanfang",
    t1_text: "Jeder Satz hat einen Anführer: das erste Wort. Und dieser Anführer wird immer mit einem GROSSEN Buchstaben geschrieben!",
    t1_b1: "Das erste Wort im Satz ist groß.",
    t1_b2: "Egal, welches Wort es ist.",
    t1_inst: "Welches Wort ist am Satzanfang richtig?",
    t1_h1: "Der erste Buchstabe muss groß sein.",
    t1_h2: "'Wir' wird am Anfang großgeschrieben.",
    t1_sent: "___ spielen heute im Garten.",
    t1_c1: "Wir", t1_c2: "wir", t1_c3: "wIr", t1_c4: "wiR",
    // Quiz: MANUAL
    t1_q: "Wie schreiben wir das erste Wort in einem Satz?",
    t1_qa: "Am Anfang groß", t1_qb: "Immer klein", t1_qc: "Alles groß", t1_qd: "Wie wir wollen",

    // T2: Nomen schreibt man groß
    t2_title: "Nomen schreibt man groß",
    t2_text: "Erinnerst du dich an die Namenwörter (Nomen)? Alle Menschen, Tiere, Dinge und Orte schreiben wir immer GROSS!",
    t2_b1: "Menschen, Tiere, Dinge = GROSS.",
    t2_b2: "Hund, Katze, Haus, Baum.",
    t2_inst: "Finde das richtig geschriebene Nomen!",
    t2_h1: "Es ist ein Tier, also muss es groß sein.",
    t2_h2: "'Hase' ist richtig.",
    t2_w1: "hase", t2_w2: "Hase", t2_w3: "haSe", t2_w4: "HASse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Verben und Adjektive klein
    t3_title: "Verben und Adjektive klein",
    t3_text: "Tunwörter (Verben) und Wiewörter (Adjektive) schreiben wir normalerweise klein. Sie sind die 'Leisen' im Satz.",
    t3_b1: "Verben (laufen, spielen) = klein.",
    t3_b2: "Adjektive (schnell, bunt) = klein.",
    t3_inst: "Welches Wort muss klein geschrieben werden?",
    t3_h1: "Suche das Tunwort (Verb).",
    t3_h2: "'rennen' schreiben wir klein.",
    t3_w1: "Haus", t3_w2: "Hund", t3_w3: "rennen", t3_w4: "Sonne",
    // Quiz: GENERATOR (verben_k2)

    // T4: Groß oder klein? (Sortieren)
    t4_title: "Groß oder klein?",
    t4_text: "Kannst du die Wörter richtig sortieren? Denk an die Regel: Nomen sind groß, Verben und Adjektive sind klein.",
    t4_b1: "Groß 🅰️ = Nomen.",
    t4_b2: "Klein ⓐ = Verben / Adjektive.",
    t4_inst: "Sortiere die Wörter in die richtigen Körbe!",
    t4_h1: "Was ist ein Ding (groß) und miat lehet csinálni (kicsi)?",
    t4_h2: "Apfel (Nomen) -> Groß. singen (Verb) -> Klein.",
    t4_bg: "Groß 🅰️", t4_bk: "Klein ⓐ",
    t4_i1: "Apfel", t4_i2: "singen", t4_i3: "bunt", t4_i4: "Auto",
    // Quiz: MANUAL
    t4_q: "Wie schreiben wir 'schnell' mitten im Satz?",
    t4_qa: "klein", t4_qb: "groß", t4_qc: "groß, wenn es wichtig ist", t4_qd: "mit Punkt",

    // T5: Fehler-Detektiv
    t5_title: "Fehler-Detektiv",
    t5_text: "In diesem Satz hat sich ein Fehler versteckt! Ein Nomen wurde klein geschrieben. Kannst du es finden?",
    t5_b1: "Nomen müssen groß sein.",
    t5_inst: "Klicke auf das Wort, das GROSS sein müsste!",
    t5_h1: "Suche das Tier im Satz.",
    t5_h2: "Das Wort 'maus' muss groß geschrieben werden.",
    t5_w1: "Die", t5_w2: "kleine", t5_w3: "maus", t5_w4: "piepst", t5_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Der Satz-Baumeister
    t6_title: "Der Satz-Baumeister",
    t6_text: "Baue den Satz zusammen. Achte darauf, dass das erste Wort einen großen Anfangsbuchstaben hat!",
    t6_b1: "Satzanfang = GROSS.",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Welches Wort fängt groß an? Das muss an den Start.",
    t6_h2: "Der Apfel ist rot.",
    t6_f1: "Der", t6_f2: "Apfel", t6_f3: "ist", t6_f4: "rot.",
    // Quiz: MANUAL
    t6_q: "Welches Wort im Satz 'Der Baum ist grün.' ist ein Nomen?",
    t6_qa: "Baum", t6_qb: "Der", t6_qc: "ist", t6_qd: "grün",

    // T7: Alles im Blick?
    t7_title: "Alles im Blick?",
    t7_text: "Nagybetűs check! Du weißt jetzt, wann wir groß und wann wir klein schreiben. Teste dein Wissen ein letztes Mal!",
    t7_b1: "Anfang & Nomen = GROSS.",
    t7_inst: "Welcher Satz ist perfekt geschrieben?",
    t7_h1: "Prüfe den Anfang und alle Nomen.",
    t7_h2: "'Die Katze spielt.' ist richtig.",
    t7_s1: "Die Katze spielt.", t7_s2: "die katze spielt.", t7_s3: "Die katze spielt.", t7_s4: "die Katze spielt.",
    // Quiz: GENERATOR (nomen_k2)
  }
};

export const GROSS_POOL: PoolTopicDef[] = [
  // ── 1. Der Satzanfang (gap-fill) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "Wir", highlightChars: ["W"], color: "#1D4ED8" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], // Wir, wir...
      correctIndex: 0,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Nomen groß (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "Hase", emoji: "🐰", color: "#B45309", bg: "#FEF3C7" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [1], // Hase
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },

  // ── 3. Verben/Adjektive klein (highlight-text) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "rennen" }, { emoji: "🎨", label: "bunt" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [2], // rennen
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR
  },

  // ── 4. Groß oder klein? (drag-to-bucket) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["🅰️"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["ⓐ"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "g", label: "t4_bg" }, { id: "k", label: "t4_bk" }],
      items: [
        { text: "t4_i1", bucketId: "g" }, // Apfel
        { text: "t4_i2", bucketId: "k" }, // singen
        { text: "t4_i3", bucketId: "k" }, // bunt
        { text: "t4_i4", bucketId: "g" }, // Auto
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Fehler-Detektiv (highlight-text) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Die", "kleine", "maus", "piepst", "."], highlightIndices: [2], color: "#EF4444" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      correctIndices: [2], // maus (should be Maus)
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },

  // ── 6. Satz-Baumeister (sentence-build) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🍎", label: "Der Apfel" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], // Der, Apfel, ist, rot.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Alles im Blick? (highlight-text) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🅰️", title: "Check!", bg: "#D1FAE5" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctIndices: [0], // Die Katze spielt.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Rechtschreibung1insel (ck, tz, sp, st)
// Thema: Schreibe ich ck oder k? tz oder z? sp/st am Wortanfang
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Hör-Detektive (ck, tz, sp, st)",

    // T1: ck oder k?
    t1_title: "ck oder k?",
    t1_text: "Hör genau hin! Nach einem kurz gesprochenen Vokal (a, e, i, o, u) schreiben wir meistens 'ck'. Wie bei 'Dreck' oder 'Backen'. Nach einem langen Vokal schreiben wir nur 'k'!",
    t1_b1: "Kurzer Vokal ➔ ck (Sack, lecker).",
    t1_b2: "Langer Vokal ➔ k (Haken, Schaukel).",
    t1_inst: "Welches Wort wird mit 'ck' geschrieben?",
    t1_h1: "Sprich das Wort laut: Ist das 'a' kurz vagy lang?",
    t1_h2: "Bei 'Backen' ist das 'a' kurz, also brauchen wir 'ck'.",
    t1_w1: "backen", t1_w2: "haken", t1_w3: "kuchen", t1_w4: "harken",
    // Quiz: MANUAL
    t1_q: "Wann schreiben wir meistens 'ck'?",
    t1_qa: "Nach einem kurzen Vokal", t1_qb: "Am Satzanfang", t1_qc: "Nach einem Konsonanten", t1_qd: "Immer am Ende",

    // T2: tz oder z?
    t2_title: "tz oder z?",
    t2_text: "Das ist wie bei ck! Nach einem kurzen Vokal schreiben wir 'tz' (Katze, Platz). Nach einem langen Vokal vagy Konsonanten schreiben wir nur 'z' (Herz, Walze).",
    t2_b1: "Kurzer Vokal ➔ tz (Spatz, Witze).",
    t2_b2: "Langer Vokal / Konsonant ➔ z (Pilz, kurz).",
    t2_inst: "Sortiere die Wörter!",
    t2_h1: "Kurzer Vokal braucht 'tz'.",
    t2_h2: "Katze (kurz) -> tz. Pilz (Konsonant davor) -> z.",
    t2_btz: "Wörter mit tz", t2_bz: "Wörter mit z",
    t2_i1: "Katze", t2_i2: "Pilz", t2_i3: "Spatz", t2_i4: "kurz",
    // Quiz: GENERATOR (nomen_k2)

    // T3: sp und st am Anfang
    t3_title: "sp und st am Anfang",
    t3_text: "Achtung! Am Anfang von Wörtern sprechen wir 'sp' wie 'schp' und 'st' wie 'scht'. Aber wir schreiben immer nur s-p und s-t!",
    t3_b1: "Wir sagen 'Schp', aber schreiben 'sp'.",
    t3_b2: "Wir sagen 'Scht', aber schreiben 'st'.",
    t3_inst: "Welches Wort passt zum Bild ☀️?",
    t3_h1: "Das Wort ist 'Stern'. Wir schreiben es mit s-t.",
    t3_h2: "Stern fängt mit st an.",
    t3_w1: "Stern", t3_w2: "Schtern", t3_w3: "Sctern", t3_w4: "Tern",
    // Quiz: MANUAL
    t3_q: "Wie schreiben wir das Wort 'Spiegel' am Anfang?",
    t3_qa: "sp", t3_qb: "schp", t3_qc: "shp", t3_qd: "p",

    // T4: ck oder k? (Lückentext)
    t4_title: "Der ck-Check",
    t4_text: "Kannst du die Lücken füllen? Denk an die Vokale! Wenn der Vokal kurz ist, schnappt die ck-Falle zu!",
    t4_b1: "Schne-cke (kurz) ➔ ck.",
    t4_inst: "Welches Zeichen passt in die Lücke?",
    t4_h1: "Das Wort ist 'Schnecke'. Das 'e' ist kurz.",
    t4_h2: "Wähle 'ck'.",
    t4_sent: "Die Schne___ kriecht langsam.",
    t4_c1: "cke", t4_c2: "ke", t4_c3: "ge", t4_c4: "che",
    // Quiz: GENERATOR (verben_k2)

    // T5: st oder sp?
    t5_title: "st oder sp?",
    t5_text: "Hörst du den Unterschied? Stein, Stern, Stopp fangen mit 'st' an. Spiel, Spaß, Sport fangen mit 'sp' an.",
    t5_b1: "Stein, Stopp ➔ st.",
    t5_b2: "Spiel, Spaß ➔ sp.",
    t5_inst: "Sortiere die 'Scht' und 'Schp' Wörter!",
    t5_h1: "Hör genau hin: Stein vagy Spiel?",
    t5_h2: "Stein gehört zu 'st'. Spaß gehört zu 'sp'.",
    t5_bst: "Anfang mit st", t5_bsp: "Anfang mit sp",
    t5_i1: "Stein", t5_i2: "Spaß", t5_i3: "Stern", t5_i4: "Spiel",
    // Quiz: MANUAL
    t5_q: "Welches Wort fängt mit 'sp' an?",
    t5_qa: "Sport", t5_qb: "Stuhl", t5_qc: "Sonne", t5_qd: "Schule",

    // T6: tz-Rätsel
    t6_title: "Das tz-Rätsel",
    t6_text: "Ein kleines Tier mit 'tz' am Ende? Die Katze! Ein Ort zum Sitzen? Der Platz! Alles mit kurzem Vokal.",
    t6_b1: "Katze, Platz, Satz ➔ tz.",
    t6_inst: "Verbinde die Wortteile richtig!",
    t6_h1: "Ka + tze = Katze.",
    t6_h2: "Wi + tze = Witze.",
    t6_l1: "Ka", t6_r1: "tze",
    t6_l2: "Wi", t6_r2: "tze",
    t6_l3: "Pi", t6_r3: "lz",
    t6_l4: "Ne", t6_r4: "tz",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Satzmeister mit Spezialbetűkkel
    t7_title: "Satzmeister-Prüfung",
    t7_text: "Jetzt bauen wir alles zusammen. Kannst du einen Satz mit ck, tz vagy sp richtig ordnen?",
    t7_b1: "Achte auf die Rechtschreibung!",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Wer macht was? 'Der Spatz frisst.'",
    t7_h2: "Der Spatz (st!) fliegt.",
    t7_f1: "Der", t7_f2: "Spatz", t7_f3: "fliegt", t7_f4: "hoch.",
    // Quiz: MANUAL
    t7_q: "Welches Wort im Satz 'Der Bäcker backt.' hat ein 'ck'?",
    t7_qa: "Beide (Bäcker und backt)", t7_qb: "Nur Bäcker", t7_qc: "Nur backt", t7_qd: "Keines",
  }
};

export const RECHT1_POOL: PoolTopicDef[] = [
  // ── 1. ck oder k? (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["ck", "k"]], color: "#EF4444" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // backen
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. tz oder z? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["tz", "z"]], color: "#3B82F6" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "tz", label: "t2_btz" }, { id: "z", label: "t2_bz" }],
      items: [
        { text: "t2_i1", bucketId: "tz" }, // Katze
        { text: "t2_i2", bucketId: "z" },  // Pilz
        { text: "t2_i3", bucketId: "tz" }, // Spatz
        { text: "t2_i4", bucketId: "z" },  // kurz
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 3. sp und st (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "sp", emoji: "🎺", color: "#B45309", bg: "#FEF3C7" }, { text: "st", emoji: "⭐", color: "#1E40AF", bg: "#DBEAFE" } ] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [0], // Stern
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. ck Check (gap-fill) ──────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "Schnecke", highlightChars: ["c", "k"], color: "#10B981" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 5. st vagy sp? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["st"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["sp"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "st", label: "t5_bst" }, { id: "sp", label: "t5_bsp" }],
      items: [
        { text: "t5_i1", bucketId: "st" }, // Stein
        { text: "t5_i2", bucketId: "sp" }, // Spaß
        { text: "t5_i3", bucketId: "st" }, // Stern
        { text: "t5_i4", bucketId: "sp" }, // Spiel
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. tz-Rätsel (match-pairs) ──────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Kat", word2: "ze", result: "Katze", color: "#8B5CF6" },
    bulletKeys: ["t6_b1"],
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
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Satzmeister (sentence-build) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐦", label: "Spatz" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Der, Spatz, fliegt, hoch.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Rechtschreibung2insel (ie, ei, eu, äu + Doppelkonsonanten)
// Thema: ie vs. ei, eu vs. äu, Doppelkonsonanten (ll, mm, nn, ss, tt)
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Zauberer (ie, ei, Doppel-L/M/N)",

    // T1: ie oder ei?
    t1_title: "ie oder ei?",
    t1_text: "Hörst du den Unterschied? Bei 'ei' (wie Eis 🍦) sagst du 'ai'. Bei 'ie' (wie Biene 🐝) sprichst du ein langes I. Vergiss das E nicht!",
    t1_b1: "ie ➔ langes I (Biene, Lied).",
    t1_b2: "ei ➔ klingt wie 'ai' (Eis, Bein).",
    t1_inst: "Welches Wort wird mit 'ie' geschrieben?",
    t1_h1: "Hörst du ein langes I vagy ein 'ai'?",
    t1_h2: "Das Wort 'Lied' hat ein langes I.",
    t1_w1: "Lied", t1_w2: "Leid", t1_w3: "Mein", t1_w4: "Bein",
    // Quiz: MANUAL
    t1_q: "Wie schreiben wir das lange I in 'Biene'?",
    t1_qa: "ie", t1_qb: "i", t1_qc: "ei", t1_qd: "ih",

    // T2: eu oder äu?
    t2_title: "eu oder äu?",
    t2_text: "Beide klingen fast gleich! Aber Achtung: Wenn ein Wort von 'au' kommt (Haus -> Häuser), schreiben wir 'äu'. Sonst schreiben wir meistens 'eu'.",
    t2_b1: "au ➔ äu (Haus ➔ Häuser).",
    t2_b2: "Sonst oft ➔ eu (Eule, neu).",
    t2_inst: "Welches Wort passt zu 'Baum'?",
    t2_h1: "Aus 'au' wird beim Plural 'äu'.",
    t2_h2: "Baum ➔ Bäume.",
    t2_w1: "Bäume", t2_w2: "Beume", t2_w3: "Baume", t2_w4: "Bime",
    // Quiz: GENERATOR (plural)

    // T3: Doppelkonsonanten (ll, mm, nn...)
    t3_title: "Doppelt hält besser!",
    t3_text: "Nach einem kurzen Vokal schreiben wir oft zwei gleiche Konsonanten. Das stoppt den Vokal ganz schnell ab! Ball, schwimmen, rennen.",
    t3_b1: "Kurzer Vokal ➔ zwei Konsonanten (ll, mm, nn).",
    t3_inst: "Welches Wort hat zwei gleiche Konsonanten?",
    t3_h1: "Sprich das Wort: Ist das 'a' kurz vagy lang?",
    t3_h2: "'Ball' hat ein kurzes A und zwei L.",
    t3_w1: "Ball", t3_w2: "Wal", t3_w3: "Mal", t3_w4: "Tal",
    // Quiz: MANUAL
    t3_q: "Was passiert nach einem kurzen Vokal oft?",
    t3_qa: "Der Konsonant wird verdoppelt", t3_qb: "Der Vokal wird groß", t3_qc: "Nichts passiert", t3_qd: "Das Wort endet auf E",

    // T4: ll oder l?
    t4_title: "Der l-Check",
    t4_text: "Hörst du es? Bei 'Wal' 🐋 ist das A lang. Bei 'Ball' ⚽ ist das A kurz. Kurze Vokale lieben doppelte Buchstaben!",
    t4_b1: "l ➔ nach langem Vokal.",
    t4_b2: "ll ➔ nach kurzem Vokal.",
    t4_inst: "Welches Wort wird mit 'll' geschrieben?",
    t4_h1: "Falle, Rolle, Welle.",
    t4_h2: "'Rolle' hat ein kurzes O.",
    t4_sent: "Das Rad macht eine Ro___.",
    t4_c1: "lle", t4_c2: "le", t4_c3: "ne", t4_c4: "me",
    // Quiz: GENERATOR (nomen_k2)

    // T5: mm oder m?
    t5_title: "Schwimmen oder Blume?",
    t5_text: "In 'schwimmen' ist das I ganz kurz ➔ mm. In 'Blume' ist das U ganz lang ➔ m. Kannst du sie sortieren?",
    t5_b1: "mm ➔ schwimmen, kommen.",
    t5_b2: "m ➔ Blume, Name.",
    t5_inst: "Sortiere die Wörter: Ein M vagy zwei MM?",
    t5_h1: "Hör auf den Vokal davor.",
    t5_h2: "kommen (kurz) -> mm. Name (lang) -> m.",
    t5_b1m: "ein m", t5_b2m: "zwei mm",
    t5_i1: "Name", t5_i2: "kommen", t5_i3: "Blume", t5_i4: "schwimmen",
    // Quiz: GENERATOR (verben_k2)

    // T6: ss oder s?
    t6_title: "Das scharfe S (ss)",
    t6_text: "Wenn das S nach einem kurzen Vokal ganz scharf klingt, schreiben wir 'ss'. Wie bei 'Wasser' vagy 'Essen'.",
    t6_b1: "ss ➔ nach kurzem Vokal (Fass, Fluss).",
    t6_b2: "s ➔ weich (Hase, Nase).",
    t6_inst: "Was passt in die Lücke: 'Das Wa...er ist kalt'?",
    t6_h1: "Das 'a' in Wasser ist kurz.",
    t6_h2: "Wir brauchen 'ss'.",
    t6_sent_s: "Das Wa___er ist kalt.",
    t6_cs1: "ss", t6_cs2: "s", t6_cs3: "ß", t6_cs4: "z",
    // Quiz: MANUAL
    t6_q: "Wie schreiben wir 'Essen'?",
    t6_qa: "mit ss", t6_qb: "mit s", t6_qc: "mit ß", t6_qd: "mit z",

    // T7: Wort-Mix-Meister
    t7_title: "Wort-Mix-Meister",
    t7_text: "Du bist jetzt ein Profi für trügerische Buchstaben! ie, ei, ll vagy ss? Du kriegst sie alle!",
    t7_b1: "Überlege: Lang vagy kurz?",
    t7_inst: "Ordne den Satz richtig!",
    t7_h1: "Wer macht was? 'Die Biene fliegt.'",
    t7_h2: "Die Biene (ie!) fliegt (ie!).",
    t7_f1: "Die", t7_f2: "Biene", t7_f3: "fliegt", t7_f4: "schnell.",
    // Quiz: GENERATOR (nomen_k2)
  }
};

export const RECHT2_POOL: PoolTopicDef[] = [
  // ── 1. ie oder ei? (highlight-text) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["ie", "ei"]], color: "#7C3AED" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // Lied
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. eu oder äu? (match-pairs) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "Haus", word2: "er", result: "Häuser", color: "#F59E0B" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [0], // Bäume
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 3. Doppelkonsonanten (highlight-text) ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "Ball", emoji: "⚽", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "rennen", emoji: "🏃", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [0], // Ball
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. ll oder l? (gap-fill) ────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "Rolle", highlightChars: ["l", "l"], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 5. mm vagy m? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["m"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["mm"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "m", label: "t5_b1m" }, { id: "mm", label: "t5_b2m" }],
      items: [
        { text: "t5_i1", bucketId: "m" },  // Name
        { text: "t5_i2", bucketId: "mm" }, // kommen
        { text: "t5_i3", bucketId: "m" },  // Blume
        { text: "t5_i4", bucketId: "mm" }, // schwimmen
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 6. ss vagy s? (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "ss", emoji: "💧", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_s",
      choices: ["t6_cs1", "t6_cs2", "t6_cs3", "t6_cs4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Wort-Mix (sentence-build) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐝", label: "Biene" }, { emoji: "💨", label: "schnell" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Die, Biene, fliegt, schnell.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Wortfelderinsel
// Thema: Wortfelder (Oberbegriffe: Tiere, Möbel, Essen), Wortfamilien (backen→Bäcker)
// ─────────────────────────────────────────────────────────────────────────────

export const WORTFELD_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Entdecker (Felder & Familien)",

    // T1: Was ist ein Wortfeld?
    t1_title: "Was ist ein Wortfeld?",
    t1_text: "Ein Wortfeld ist wie eine große Familie von Wörtern, die alle zum gleichen Thema gehören. Zum Beispiel gehören 'Hund', 'Katze' und 'Maus' zum Wortfeld TIERE.",
    t1_b1: "Wörter mit gleicher Bedeutung.",
    t1_b2: "Themen: Tiere, Kleidung, Sport.",
    t1_inst: "Welches Wort gehört zum Wortfeld TIERE?",
    t1_h1: "Suche nach einem Lebewesen.",
    t1_h2: "Der 'Hund' gehört zu den Tieren.",
    t1_w1: "Hund", t1_w2: "Haus", t1_w3: "Auto", t1_w4: "Apfel",
    // Quiz: GENERATOR (tiere_k1)

    // T2: Oberbegriffe (Obst oder Gemüse?)
    t2_title: "Obst oder Gemüse?",
    t2_text: "Wir können Dinge in Gruppen ordnen. Apfel und Birne sind 'Obst'. Karotte und Tomate sind 'Gemüse'. Das nennen wir Oberbegriffe.",
    t2_b1: "Oberbegriff = Name der Gruppe.",
    t2_inst: "Sortiere: Ist es Obst oder Gemüse?",
    t2_h1: "Süße Früchte sind meistens Obst.",
    t2_h2: "Apfel -> Obst. Karotte -> Gemüse.",
    t2_bo: "Obst 🍎", t2_bg: "Gemüse 🥕",
    t2_i1: "Apfel", t2_i2: "Karotte", t2_i3: "Birne", t2_i4: "Erbse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Die Wortfamilie
    t3_title: "Die Wortfamilie",
    t3_text: "Wörter in einer Wortfamilie haben alle den gleichen Wortstamm. Sie sehen sich ähnlich und gehören zusammen, wie 'fahren', 'Fahrer' und 'Fahrrad'.",
    t3_b1: "Gleicher Wortstamm.",
    t3_b2: "fahren ➔ Fahr-er, Fahr-zeug.",
    t3_inst: "Welches Wort gehört zur Familie 'fahren'?",
    t3_h1: "Suche ein Wort, in dem 'fahr' steckt.",
    t3_h2: "Das 'Fahrrad' gehört dazu.",
    t3_w1: "laufen", t3_w2: "Fahrrad", t3_w3: "spielen", t3_w4: "singen",
    // Quiz: MANUAL
    t3_q: "Was haben Wörter in einer Wortfamilie gemeinsam?",
    t3_qa: "Den Wortstamm", t3_qb: "Die gleiche Farbe", t3_qc: "Die gleiche Länge", t3_qd: "Nichts",

    // T4: Berufe finden
    t4_title: "Berufe aus Verben",
    t4_text: "Wusstest du, dass viele Berufe von Tunwörtern kommen? Jemand, der backt, ist der Bäcker. Jemand, der malt, ist der Maler.",
    t4_b1: "backen ➔ Bäcker.",
    t4_b2: "malen ➔ Maler.",
    t4_inst: "Verbinde das Tunwort mit dem Beruf!",
    t4_h1: "Was wird aus 'lehren'?",
    t4_h2: "lehren -> Lehrer, fahren -> Fahrer.",
    t4_l1: "backen", t4_r1: "Bäcker",
    t4_l2: "fahren", t4_r2: "Fahrer",
    t4_l3: "lehren", t4_r3: "Lehrer",
    t4_l4: "malen",  t4_r4: "Maler",
    // Quiz: GENERATOR (berufe_k2)

    // T5: Der Wortstamm-Check
    t5_title: "Der Wortstamm-Check",
    t5_text: "Finde den Wortstamm! In 'spielen', 'Spielfeld' und 'Mitspieler' steckt überall das Wort 'spiel'. Das ist der Stamm der Familie.",
    t5_b1: "Wortstamm finden.",
    t5_inst: "Finde den Wortstamm in 'Spielfeld'!",
    t5_h1: "Welcher Teil des Wortes ist bei 'spielen' auch dabei?",
    t5_h2: "Der Stamm ist 'spiel'.",
    t5_sent: "Der Wortstamm von Spielfeld ist ___.",
    t5_c1: "spiel", t5_c2: "feld", t5_c3: "en", t5_c4: "spie",
    // Quiz: MANUAL
    t5_q: "Was ist der Wortstamm von 'laufen, Läufer, verlaufen'?",
    t5_qa: "lauf", t5_qb: "fen", t5_qc: "ver", t5_qd: "er",

    // T6: Was passt nicht? (Oberbegriffe)
    t6_title: "Was passt nicht?",
    t6_text: "Ein Wort hat sich verlaufen! Es gehört nicht in das Wortfeld. Kannst du den Quatschmacher finden?",
    t6_b1: "Drei Wörter gehören zusammen.",
    t6_b2: "Eines passt nicht dazu.",
    t6_inst: "Welches Wort gehört NICHT zum Wortfeld MÖBEL?",
    t6_h1: "Tisch, Stuhl und Schrank sind Möbel.",
    t6_h2: "Ein 'Apfel' ist kein Möbelstück.",
    t6_w1: "Tisch", t6_w2: "Stuhl", t6_w3: "Apfel", t6_w4: "Schrank",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wörter bauen
    t7_title: "Wörter bauen",
    t7_text: "Wir können aus zwei Wörtern ein neues Wort bauen. Das kennst du schon! Tisch + Decke = Tischdecke. Es ist ein neues Wort aus dem Feld 'Essen'.",
    t7_b1: "Zusammengesetzte Wörter.",
    t7_inst: "Baue das Wort zusammen!",
    t7_h1: "Ein Schirm für den Regen.",
    t7_h2: "Regen + schirm.",
    t7_f1: "Regen", t7_f2: "schirm",
    // Quiz: MANUAL
    t7_q: "Aus welchen Wörtern besteht 'Haustür'?",
    t7_qa: "Haus + Tür", t7_qb: "Hau + Stür", t7_qc: "Hau + s + tür", t7_qd: "Hau + stür",
  }
};

export const WORTFELD_POOL: PoolTopicDef[] = [
  // ── 1. Wortfeld (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "Hund" }, { emoji: "🐱", label: "Katze" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // Hund
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "tiere_k1" },
  },

  // ── 2. Obst vagy Gemüse? (drag-to-bucket) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["🍎"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["🥕"], bg: "#D1FAE5", border: "#10B981" } },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "o", label: "t2_bo" }, { id: "g", label: "t2_bg" }],
      items: [
        { text: "t2_i1", bucketId: "o" }, // Apfel
        { text: "t2_i2", bucketId: "g" }, // Karotte
        { text: "t2_i3", bucketId: "o" }, // Birne
        { text: "t2_i4", bucketId: "g" }, // Erbse
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 3. Wortfamilie (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "Fahrrad", highlightChars: ["F", "a", "h", "r"], color: "#3B82F6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [1], // Fahrrad
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Berufe (match-pairs) ─────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "👨‍🍳", label: "Bäcker" }, { emoji: "👨‍🏫", label: "Lehrer" }] },
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
    quiz: { generate: "berufe_k2" },
  },

  // ── 5. Wortstamm (gap-fill) ──────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "spiel-en", color: "#8B5CF6", bg: "#F3E8FF" }, { text: "spiel-en", color: "#8B5CF6", bg: "#F3E8FF" } ] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Was passt nicht? (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🪑", label: "Möbel" }, { emoji: "🍎", label: "???" }] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"],
      correctIndices: [2], // Apfel
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Wörter bauen (word-order) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "compound-word", word1: "Regen", word2: "schirm", result: "Regenschirm", color: "#10B981" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "word-order",
      words: ["t7_f2", "t7_f1"], // schirm, Regen
      correctOrder: [1, 0], // Regen -> schirm
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K2 (Final Review)
// Thema: Wiederholung aller K2-Themen (Nomen, Verb, Adjektiv, Rechtschreibung)
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung K2",

    // T1: Nomen-Check
    t1_title: "Nomen-Check",
    t1_text: "Erinnerst du dich? Nomen sind Namen für Dinge, Tiere und Menschen. Wir schreiben sie immer GROSS!",
    t1_b1: "Nomen = Großschreibung.",
    t1_inst: "Finde das Nomen im Satz!",
    t1_h1: "Suche das Wort mit dem großen Anfangsbuchstaben.",
    t1_h2: "Das Wort 'Apfel' ist ein Nomen.",
    t1_w1: "Der", t1_w2: "rote", t1_w3: "Apfel", t1_w4: "schmeckt", t1_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Artikel-Meister
    t2_title: "Artikel-Meister",
    t2_text: "Der, die oder das? Jeder Begleiter hat seinen festen Platz bei einem Nomen.",
    t2_b1: "der 🔵, die 🔴, das 🟢",
    t2_inst: "Sortiere die Nomen in die richtigen Artikel-Körbe!",
    t2_h1: "Überlege: Heißt es der, die oder das?",
    t2_bd: "der 🔵", t2_bdi: "die 🔴", t2_bda: "das 🟢",
    t2_i1: "Hund", t2_i2: "Katze", t2_i3: "Haus", t2_i4: "Auto",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Verben-Profi
    t3_title: "Verben-Profi",
    t3_text: "Tunwörter sagen uns, was passiert. Kannst du sie richtig beugen?",
    t3_b1: "ich spiele, du spielst, er spielt.",
    t3_inst: "Welches Verb passt in die Lücke?",
    t3_h1: "Das Wort davor ist 'Du'.",
    t3_h2: "Bei 'Du' endet das Verb auf '-st'.",
    t3_sent: "Du ___ heute ein Lied.",
    t3_c1: "singst", t3_c2: "singen", t3_c3: "singt", t3_c4: "singe",
    // Quiz: GENERATOR (verben_k2)

    // T4: Adjektiv-Expert
    t4_title: "Adjektiv-Expert",
    t4_text: "Wie ist die Welt? Adjektive beschreiben Dinge genauer. Weißt du auch die Gegenteile?",
    t4_b1: "Adjektive = Wiewörter.",
    t4_inst: "Verbinde die Gegensätze!",
    t4_h1: "Was ist das Gegenteil von 'groß'?",
    t4_l1: "groß", t4_r1: "klein",
    t4_l2: "schnell", t4_r2: "langsam",
    t4_l3: "hell", t4_r3: "dunkel",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T5: Rechtschreib-König
    t5_title: "Rechtschreib-König",
    t5_text: "ck, tz oder ie? Ein König achtet auf jedes Detail beim Schreiben!",
    t5_b1: "Nach kurzem Vokal folgt oft ck oder tz.",
    t5_inst: "Welches Wort ist richtig geschrieben?",
    t5_h1: "Das Wort ist 'Katze'. Es hat ein kurzes 'a'.",
    t5_w1: "Katze", t5_w2: "Kaze", t5_w3: "Kattze", t5_w4: "Katse",
    // Quiz: GENERATOR (satzzeichen_k1 - vegyes review)

    // T6: Plural-Check
    t6_title: "Plural-Check",
    t6_text: "Eins oder viele? Die Mehrzahl verändert oft das ganze Wort.",
    t6_b1: "Einzahl ➔ Mehrzahl.",
    t6_inst: "Verbinde die Einzahl mit der Mehrzahl!",
    t6_l1: "Baum", t6_r1: "Bäume",
    t6_l2: "Hand", t6_r2: "Hände",
    t6_l3: "Buch", t6_r3: "Bücher",
    // Quiz: GENERATOR (plural)

    // T7: K2 Champion
    t7_title: "K2 Champion",
    t7_text: "Du hast alle Inseln gemeistert! Hier ist deine letzte Aufgabe. Baue den Satz perfekt zusammen.",
    t7_b1: "Satzanfang groß, Ende mit Punkt.",
    t7_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t7_f1: "Ich", t7_f2: "bin", t7_f3: "ein", t7_f4: "Champion!",
    // Quiz: GENERATOR (zeit_k2 - napszakok review)
  }
};

export const EXAM2_POOL: PoolTopicDef[] = [
  // ── 1. Nomen Review (highlight-text) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "Nomen", highlightChars: ["N"], color: "#3B82F6" },
    bulletKeys: ["t1_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"],
      correctIndices: [2], // Apfel
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 2. Artikel Review (drag-to-bucket) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" },
      { text: "die", emoji: "🔴", color: "#991B1B", bg: "#FEE2E2" },
      { text: "das", emoji: "🟢", color: "#065F46", bg: "#D1FAE5" },
    ]},
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t2_bd" }, { id: "die", label: "t2_bdi" }, { id: "das", label: "t2_bda" }],
      items: [
        { text: "t2_i1", bucketId: "der" }, // Hund
        { text: "t2_i2", bucketId: "die" }, // Katze
        { text: "t2_i3", bucketId: "das" }, // Haus
        { text: "t2_i4", bucketId: "der" }, // Baum (Wait, in K1 it's already there, keep it consistent)
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 3. Verben Review (gap-fill) ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "🎤", label: "singen" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 4. Adjektiv Review (match-pairs) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["groß", "klein"]], color: "#F59E0B" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 5. Rechtschreibung Review (highlight-text) ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-circles", letters: ["ck", "tz"], color: "#EF4444" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      correctIndices: [0], // Katze
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 6. Plural Review (match-pairs) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Bäume", word2: "", result: "🌳🌳🌳", color: "#10B981" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 7. Finale Champion (sentence-build) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", title: "K2 Champion!", bg: "#FEF3C7" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Ich, bin, ein, Champion!
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "zeit_k2" },
  },
];
