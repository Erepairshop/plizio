import type { PoolTopicDef } from "./types";

// ─── K7 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Konjunktiv I              💭
//   i2 = Werden-Passiv             🔧
//   i3 = Passiv + Modalverb        ⚙️
//   i4 = Stilmittel                🎭
//   i5 = Kausal- & Konditionalsatz 🔀
//   i6 = Konzessiv- & Finalsatz    🎯
//   i7 = Temporalsatz              ⏱️
//   i8 = Infinitivkonstruktionen   🌿
//   i9 = Große Prüfung             🌟
//
// Struktur je Topic:
//   infoTitle, infoText, svg, bulletKeys?, hintKey?, interactive, quiz, difficulty?
//
// svg Typen: "two-groups" | "text-bubbles" | "article-noun" | "letter-circles" |
//   "word-syllables" | "compound-word" | "icon-grid" | "rhyme-pair" |
//   "sentence-display" | "word-display" | "simple-icon"
//
// WICHTIG bei two-groups:   border Feld PFLICHT!
// WICHTIG bei text-bubbles: color Feld PFLICHT in jedem item!
//
// interactive Typen: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" |
//   "physics-magnet" | "physics-stacker" | "physics-slingshot" | "physics-bucket"
//
// physics-magnet:    pairs: [{ left: "t1_l1", right: "t1_r1" }, ...]
// physics-slingshot: question: "t1_q", targets: [{ id: "1", text: "t1_t1", isCorrect: true }, ...]
// physics-stacker:   words: ["t1_w1","t1_w2","t1_w3"], correctOrder: [0,1,2]
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   ODER: { generate: "relativsatz_k7" }
//   Verfügbare Generatoren: "konjunktiv2" | "passiv" | "synonyme" | "antonyme"
//                           "steigerung" | "praeteritum" | "perfekt" | "plural"
//                           "nominativ" | "akkusativ" | "dativ" | "genitiv"
//
// Ziel: 15-20 Topics pro Pool für maximale Abwechslung!
// LABELS nur "de"!
// ──────────────────────────────────────────────────────────────────────────────


export const KONJ1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nachrichten-Zentrum (Konjunktiv I)",

    // T1 - Intro
    t1_title: "Was ist Konjunktiv I?",
    t1_text: "Wir nutzen den Konjunktiv I, um neutral zu berichten, was andere gesagt haben (Indirekte Rede).",
    t1_inst: "Welches Verb steht im Konjunktiv I?",
    t1_h1: "Suche nach der Endung -e.", t1_h2: "Er sagt, er 'komme' gleich.",
    t1_w1: "kommt", t1_w2: "komme", t1_w3: "kam", t1_w4: "käme",

    // T2 - Verb: sein
    t2_title: "Der Star: SEI",
    t2_text: "Das Verb 'sein' ist im Konjunktiv I unregelmäßig: ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien.",
    t2_inst: "Wähle die richtige Form von 'sein'!",
    t2_h1: "Dritte Person Einzahl (er/sie/es).", t2_h2: "Er sagt, er 'sei' bereit.",
    t2_sent2: "Sie behauptet, sie ___ krank.",
    t2_c1: "sei", t2_c2: "ist", t2_c3: "wäre", t2_c4: "seien",

    // T3 - Verb: haben
    t3_title: "Besitz im Konjunktiv I",
    t3_text: "Haben wird zu: habe, habest, habe, haben, habet, haben.",
    t3_inst: "Sortiere 'haben' in den Konjunktiv-Eimer!",
    t3_h1: "Suche die Form mit -e.", t3_h2: "habe.",
    t3_b3_1: "Konjunktiv I", t3_b3_2: "Indikativ",
    t3_i3_1: "habe", t3_i3_2: "hat", t3_i3_3: "haben", t3_i3_4: "hast",

    // T4 - Bildung (Stamm + e)
    t4_title: "Der Bauplan",
    t4_text: "Präsens-Stamm + Endung: -e, -est, -e, -en, -et, -en.",
    t4_inst: "Setze den Baustein richtig zusammen!",
    t4_h1: "geh- + -e.", t4_h2: "gehe.",
    t4_w4_1: "geh", t4_w4_2: "e",

    // T5 - Berichtsverben
    t5_title: "Wer sagt was?",
    t5_text: "Indirekte Rede folgt oft nach Verben wie sagen, meinen, behaupten oder berichten.",
    t5_inst: "Verbinde die Berichtsverben mit ihrer Bedeutung!",
    t5_h1: "behaupten = etwas sagen, das vielleicht nicht stimmt.",
    t5_ml5: "berichten", t5_mr5: "informieren",
    t5_ml5_2: "behaupten", t5_mr5_2: "feststellen",

    // T6 - Konj I vs II (Ersatzregel)
    t6_title: "Die Rettungsregel",
    t6_text: "Ist der Konjunktiv I gleich wie der Indikativ (z.B. wir gehen), weichen wir auf den Konjunktiv II (wir gingen) aus.",
    t6_inst: "Welche Form ist die korrekte Ersatzform (Konj II)?",
    t6_h1: "Suche das Präteritum mit Umlaut oder würde-Form.", t6_h2: "Sie sagen, sie 'gingen'.",
    t6_sent6: "Sie sagen, sie ___ (gehen) nach Hause.",
    t6_c6_1: "gingen", t6_c6_2: "gehen", t6_c6_3: "gehe", t6_c6_4: "ginge",

    // T7 - Indirekte Fragen (ob)
    t7_title: "Fragen ohne Fragezeichen",
    t7_text: "Ja/Nein-Fragen werden in der indirekten Rede mit 'ob' eingeleitet.",
    t7_inst: "Welches Bindewort leitet die Frage ein?",
    t7_h1: "Er fragt, ___ du kommst.", t7_h2: "ob.",
    t7_sent7: "Er fragt, ___ sie Zeit habe.",
    t7_c7_1: "ob", t7_c7_2: "dass", t7_c7_3: "wenn", t7_c7_4: "wie",

    // T8 - W-Fragen
    t8_title: "W-Fragen indirekt",
    t8_text: "W-Fragen behalten ihr Fragewort (wann, wie, wo), aber das Verb rutscht ans Ende.",
    t8_inst: "Baue den indirekten Fragesatz!",
    t8_h1: "Er möchte wissen, wann...", t8_h2: "...der Bus komme.",
    t8_f8_1: "Er fragt,", t8_f8_2: "wann", t8_f8_3: "der Zug", t8_f8_4: "ankomme.",

    // T9 - Modalverben: müsse
    t9_title: "Pflicht im Konjunktiv",
    t9_text: "Modalverben verlieren im Konjunktiv I oft ihren Umlaut (außer bei können/müssen). Beispiel: er müsse.",
    t9_inst: "Finde die richtige Konjunktiv-Form von müssen!",
    t9_h1: "er + müsse.", t9_h2: "müsse.",
    t9_q9: "Er sagt, er ___ gehen.",
    t9_t1: "müsse", t9_t2: "muss", t9_t3: "müsste", t9_t4: "musste",

    // T10 - Indirekter Befehl (sollen)
    t10_title: "Befehle weitergeben",
    t10_text: "Befehle werden in der indirekten Rede meist mit 'sollen' oder 'müssen' umschrieben.",
    t10_inst: "Wähle das passende Hilfsverb für den Befehl!",
    t10_h1: "Mama sagt: 'Räum auf!' -> Er sagt, ich ___ aufräumen.", t10_h2: "solle.",
    t10_sent10: "Der Lehrer sagt, wir ___ leise sein.",
    t10_c10: "sollen", t10_c10_2: "müssen", t10_c10_3: "sein", t10_c10_4: "hatten",

    // T11 - Vergangenheit (habe/sei + P2)
    t11_title: "Was war geschehen?",
    t11_text: "Vergangenheit: 'habe' oder 'sei' + Partizip II. Beispiel: er habe gesagt.",
    t11_inst: "Staple die Zeitform richtig!",
    t11_h1: "Hilfsverb (Konj I) + Partizip II.", t11_h2: "er + habe + gelacht.",
    t11_sw11_1: "er", t11_sw11_2: "habe", t11_sw11_3: "gelacht",

    // T12 - Futur I (werde + Inf)
    t12_title: "Blick in die Zukunft",
    t12_text: "Zukunft im Konjunktiv I: werde + Infinitiv. Beispiel: er werde kommen.",
    t12_inst: "Welche Form beschreibt die Zukunft?",
    t12_h1: "werde + kommen.", t12_h2: "er werde kommen.",
    t12_q12: "Sie sagt, sie ___ bald ___ .",
    t12_t12_1: "werde reisen", t12_t12_2: "würde reisen", t12_t12_3: "werdet reisen", t12_t12_4: "ist gereist",

    // T13 - Nachrichten-Check
    t13_title: "Nachrichten-Profi",
    t13_text: "In Zeitungen findest du oft Konjunktiv I. Erkenne ihn im Satz!",
    t13_inst: "Markiere das Konjunktiv I Verb!",
    t13_h1: "Suche das Verb mit der Endung -e.", t13_h2: "gebe.",
    t13_w13_1: "Der", t13_w13_2: "Minister", t13_w13_3: "sagte,", t13_w13_4: "es", t13_w13_5: "gebe", t13_w13_6: "keine", t13_w13_7: "Gefahr",

    // T14 - Höflichkeit & Distanz
    t14_title: "Distanz wahren",
    t14_text: "Konjunktiv I zeigt: Das ist nicht meine Meinung, ich zitiere nur.",
    t14_inst: "Welches Satzzeichen leitet die indirekte Rede oft ein?",
    t14_h1: "Es steht vor dem Nebensatz.", t14_h2: "Das Komma.",
    t14_q14: "Was trennt Haupt- und Nebensatz?",
    t14_ans14: "Komma", t14_ans14_2: "Punkt", t14_ans14_3: "Fragezeichen", t14_ans14_4: "Ausrufezeichen",

    // T15 - Magnet: Formen-Match
    t15_title: "Formen-Magnet",
    t15_text: "Párosítsd az alanyt a helyes Konjunktiv I alakkal!",
    t15_inst: "Használd a mágnest!",
    t15_h1: "ich habe, du habest, er habe.",
    t15_ml15: "ich", t15_mr15: "habe",
    t15_ml15_2: "du", t15_mr15_2: "habest",
    t15_ml15_3: "ihr", t15_mr15_3: "habet"
  }
};

export const KONJ1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "komme", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t1_inst", targets: [{ id: "1", text: "t1_w2", isCorrect: true }, { id: "2", text: "t1_w1", isCorrect: false }, { id: "3", text: "t1_w3", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "sei", color: "#3B82F6", bg: "#F1F5F9" }, { text: "seien", color: "#3B82F6", bg: "#F1F5F9" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "easy",
    svg: { type: "two-groups", left: { items: ["t3_i3_1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t3_i3_2"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "k1", label: "t3_b3_1" }, { id: "ind", label: "t3_b3_2" }], items: [{ text: "t3_i3_1", bucketId: "k1" }, { text: "t3_i3_2", bucketId: "ind" }, { text: "t3_i3_3", bucketId: "k1" }, { text: "t3_i3_4", bucketId: "ind" }], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "easy",
    svg: { type: "compound-word", word1: "geh-", word2: "-e", result: "geh-+-e", color: "#6366F1" },
    interactive: { type: "word-order", words: ["t4_w4_1", "t4_w4_2"], correctOrder: [0, 1], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🗣️", label: "sagen" }, { emoji: "📰", label: "berichten" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_ml5", right: "t5_mr5" }, { left: "t5_ml5_2", right: "t5_mr5_2" }], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["K", "II"], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "❓" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t8_f8_1", "t8_f8_2", "t8_f8_3", "t8_f8_4"], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "müsse", color: "#3B82F6", bg: "#DBEAFE" }] },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_t1", isCorrect: true }, { id: "2", text: "t9_t2", isCorrect: false }, { id: "3", text: "t9_t3", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "article-noun", article: "Der", articleColor: "#1D4ED8", noun: "Befehl" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📜" },
    interactive: { type: "physics-stacker", words: ["t11_sw11_1", "t11_sw11_2", "t11_sw11_3"], correctOrder: [0, 1, 2], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "word-display", word: "werde kommen", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5", "t13_w13_6", "t13_w13_7"], correctIndices: [4], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🗞️" },
    interactive: { type: "gap-fill", sentence: "Ich sage ___ er komme.", choices: [",", ".", "!", "?"], correctIndex: 0, instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { question: "t14_q14", choices: ["t14_ans14", "t14_ans14_2", "t14_ans14_3", "t14_ans14_4"], answer: "t14_ans14" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t15_ml15", right: "t15_mr15" }, { left: "t15_ml15_2", right: "t15_mr15_2" }, { left: "t15_ml15_3", right: "t15_mr15_3" }], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  }
];

export const PASSIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Prozess-Fabrik (Passiv)",

    // T1 - Intro: Was ist Passiv?
    t1_title: "Was passiert hier?",
    t1_text: "Im Passiv ist die Handlung wichtig, nicht wer sie ausführt. 'Der Apfel wird gegessen.'",
    t1_inst: "Welcher Satz steht im Passiv?",
    t1_h1: "Suche nach einer Form von 'werden' und einem Partizip II.",
    t1_q1: "Finde das Passiv:",
    t1_ans1: "Das Brot wird gebacken.", t1_ans2: "Ich backe Brot.",

    // T2 - Präsens Passiv (wird)
    t2_title: "Gegenwart (Präsens)",
    t2_text: "Bildung: werden (Präsens) + Partizip II. 'Das Auto wird repariert.'",
    t2_inst: "Wähle die richtige Form von 'werden'!",
    t2_h1: "Einzahl (Singular): wird. Mehrzahl (Plural): werden.",
    t2_sent2: "Die Pakete ___ heute verschickt.",
    t2_c2_1: "werden", t2_c2_2: "wird", t2_c2_3: "worden", t2_c2_4: "wurde",

    // T3 - Präteritum Passiv (wurde)
    t3_title: "Vergangenheit (Präteritum)",
    t3_text: "Bildung: wurde + Partizip II. 'Das Haus wurde 1990 gebaut.'",
    t3_inst: "Setze das Präteritum Passiv ein!",
    t3_h1: "Es ist bereits passiert (Einzahl).",
    t3_sent3: "Der Dieb ___ gestern gefasst.",
    t3_c3_1: "wurde", t3_c3_2: "wird", t3_c3_3: "ist", t3_c3_4: "war",

    // T4 - Perfekt Passiv (ist ... worden)
    t4_title: "Perfekt Passiv",
    t4_text: "Bildung: sein + Partizip II + worden. Achtung: GEWORDEN gibt es hier nicht!",
    t4_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t4_h1: "Hilfsverb 'ist' an Position 2, 'worden' ganz am Ende.",
    t4_w4_1: "Die Tür", t4_w4_2: "ist", t4_w4_3: "geöffnet", t4_w4_4: "worden.",

    // T5 - Plusquamperfekt Passiv (war ... worden)
    t5_title: "Vorvergangenheit",
    t5_text: "Bildung: war + Partizip II + worden. Das passierte vor einem anderen Ereignis.",
    t5_inst: "Welches Hilfsverb fehlt für das Plusquamperfekt?",
    t5_h1: "Die Präteritum-Form von 'sein'.",
    t5_sent5: "Nachdem der Brief geschrieben ___ ___ , wurde er abgeschickt.",
    t5_c5_1: "worden war", t5_c5_2: "worden ist", t5_c5_3: "worden wird", t5_c5_4: "war",

    // T6 - Futur I Passiv (wird ... werden)
    t6_title: "Zukunft (Futur I)",
    t6_text: "Bildung: wird + Partizip II + werden. 'Es wird gemacht werden.'",
    t6_inst: "Staple die Verben für die Zukunft!",
    t6_h1: "wird + Partizip + werden.",
    t6_sw6_1: "Das Projekt", t6_sw6_2: "wird", t6_sw6_3: "beendet", t6_sw6_4: "werden.",

    // T7 - Täter nennen (von + Dativ)
    t7_title: "Der Täter (von)",
    t7_text: "Wenn wir den Täter im Passiv nennen, nutzen wir 'von' + Dativ (Personen/Urheber).",
    t7_inst: "Sortiere nach der richtigen Präposition!",
    t7_h1: "Personen = von. Mittel/Werkzeuge = durch.",
    t7_b7_1: "von (Person) 👤", t7_b7_2: "durch (Mittel) ⚙️",
    t7_i7_1: "von dem Lehrer", t7_i7_2: "durch den Wind", t7_i7_3: "von der Mutter", t7_i7_4: "durch das Feuer",

    // T8 - Instrument (durch + Akkusativ)
    t8_title: "Mittel & Wege (durch)",
    t8_text: "Für Instrumente, Mittel oder Ursachen nutzen wir 'durch' + Akkusativ.",
    t8_inst: "Verbinde das Instrument mit der Handlung!",
    t8_h1: "durch den Wind -> weggeweht.",
    t8_ml8: "durch den Wind", t8_mr8: "weggeweht",
    t8_ml8_2: "durch den Regen", t8_mr8_2: "nass geworden",

    // T9 - Umwandlung: Aktiv zu Passiv
    t9_title: "Aktiv ➔ Passiv",
    t9_text: "Das Akkusativ-Objekt wird zum Subjekt. 'Ich (S) esse den Apfel (O)' -> 'Der Apfel (S) wird gegessen.'",
    t9_inst: "Baue den Passiv-Satz aus den Bruchstücken!",
    t9_h1: "Aktiv: Der Mechaniker repariert das Auto.",
    t9_f9_1: "Das Auto", t9_f9_2: "wird", t9_f9_3: "vom Mechaniker", t9_f9_4: "repariert.",

    // T10 - Dativ-Objekt Falle
    t10_title: "Die Dativ-Falle",
    t10_text: "Dativ-Objekte bleiben im Passiv im Dativ! 'Er hilft mir' -> 'Mir wird geholfen.'",
    t10_inst: "Welches Pronomen ist richtig?",
    t10_h1: "Dativ: mir, dir, ihm, uns, euch, ihnen.",
    t10_sent10: "___ wird von allen gratuliert.",
    t10_c10_1: "Ihm", t10_c10_2: "Er", t10_c10_3: "Ihn", t10_c10_4: "Seiner",

    // T11 - Passiv ohne Subjekt (Es wird...)
    t11_title: "Es wird getanzt!",
    t11_text: "Verben ohne Akkusativ-Objekt bilden das Passiv mit 'es' oder ganz ohne Subjekt.",
    t11_inst: "Markiere das unpersönliche Passiv!",
    t11_h1: "Suche nach Sätzen wie 'Es wird...' oder 'Dort wird...'.",
    t11_w11_1: "In", t11_w11_2: "der", t11_w11_3: "Disco", t11_w11_4: "wird", t11_w11_5: "viel", t11_w11_6: "gelacht",

    // T12 - Magnet: Zeitformen Match
    t12_title: "Zeit-Magnet",
    t12_text: "Párosítsd a mondatokat a megfelelő igeidővel!",
    t12_inst: "Használd a mágnest!",
    t12_h1: "wird = Präsens, wurde = Präteritum.",
    t12_ml12: "Es wird gemacht.", t12_mr12: "Präsens",
    t12_ml12_2: "Es wurde gemacht.", t12_mr12_2: "Präteritum",
    t12_ml12_3: "Es ist gemacht worden.", t12_mr12_3: "Perfekt",

    // T13 - Partizip II Check
    t13_title: "Das Partizip-Ziel",
    t13_text: "Im Passiv steht das Partizip II immer am Ende (Satzklammer).",
    t13_inst: "Schieße auf das richtige Partizip II!",
    t13_h1: "Was ist das Partizip von 'rufen'?", t13_h2: "gerufen.",
    t13_q13: "Das Kind wird ___ .",
    t13_t13_1: "gerufen", t13_t13_2: "rufen", t13_t13_3: "rief", t13_t13_4: "ruft",

    // T14 - Werden: Passiv vs. Futur
    t14_title: "Passiv oder Futur?",
    t14_text: "'Werden' kann Passiv (wird gebaut) oder Futur (wird bauen) sein.",
    t14_inst: "Sortiere die 'werden'-Sätze!",
    t14_h1: "Passiv braucht ein Partizip II (ge-). Futur braucht einen Infinitiv.",
    t14_b14_1: "Passiv 📦", t14_b14_2: "Futur 🚀",
    t14_i14_1: "Er wird gefragt.", t14_i14_2: "Er wird fragen.", t14_i14_3: "Wir werden gesucht.", t14_i14_4: "Wir werden suchen.",

    // T15 - Finale: Prozess-Meister
    t15_title: "Passiv-Abschluss",
    t15_text: "Kannst du einen komplexen Satz im Präteritum Passiv bilden?",
    t15_inst: "Staple die Wörter zum Präteritum Passiv!",
    t15_h1: "wurde + Partizip II.",
    t15_sw15_1: "Das Tor", t15_sw15_2: "wurde", t15_sw15_3: "geschlossen.",
  }
};

export const PASSIV7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "📦" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#14B8A6", bg: "#F0FDFA" }, { text: "wird", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "word-display", word: "wurde", color: "#0D9488" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "text-bubbles", items: [{ text: "ist", color: "#14B8A6", bg: "#F0FDFA" }, { text: "worden", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "word-order", words: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"], correctOrder: [0, 1, 2, 3], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["w", "a", "r"], color: "#0D9488" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "physics-stacker", words: ["t6_sw6_1", "t6_sw6_2", "t6_sw6_3", "t6_sw6_4"], correctOrder: [0, 1, 2, 3], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Person"], bg: "#F0FDFA", border: "#14B8A6" }, right: { items: ["Mittel"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "v", label: "t7_b7_1" }, { id: "d", label: "t7_b7_2" }], items: [{ text: "t7_i7_1", bucketId: "v" }, { text: "t7_i7_2", bucketId: "d" }, { text: "t7_i7_3", bucketId: "v" }, { text: "t7_i7_4", bucketId: "d" }], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "dativ" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🌬️", label: "durch" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_ml8", right: "t8_mr8" }, { left: "t8_ml8_2", right: "t8_mr8_2" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "akkusativ" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t9_f9_1", "t9_f9_2", "t9_f9_3", "t9_f9_4"], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "hard",
    svg: { type: "article-noun", article: "Ihm", articleColor: "#065F46", noun: "Dativ" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "dativ" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Es wird...", color: "#0D9488", bg: "#F0FDFA" }] },
    interactive: { type: "highlight-text", tokens: ["t11_w11_1", "t11_w11_2", "t11_w11_3", "t11_w11_4", "t11_w11_5", "t11_w11_6"], correctIndices: [3, 5], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t12_ml12", right: "t12_mr12" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["g", "e", "-"], color: "#14B8A6" },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_t13_1", isCorrect: true }, { id: "2", text: "t13_t13_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Passiv"], bg: "#F0FDFA", border: "#14B8A6" }, right: { items: ["Futur"], bg: "#EFF6FF", border: "#3B82F6" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "pa", label: "t14_b14_1" }, { id: "fu", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "pa" }, { text: "t14_i14_2", bucketId: "fu" }, { text: "t14_i14_3", bucketId: "pa" }, { text: "t14_i14_4", bucketId: "fu" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🏆" },
    interactive: { type: "physics-stacker", words: ["t15_sw15_1", "t15_sw15_2", "t15_sw15_3"], correctOrder: [0, 1, 2], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  }
];


export const PASSIV_MODAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Modal-Mechanik (Passiv)",

    // T1 - Struktur Intro
    t1_title: "Die Modal-Zange",
    t1_text: "Wenn ein Modalverb (müssen, können...) ins Spiel kommt, rutscht 'werden' als Infinitiv ganz ans Ende hinter das Partizip II.",
    t1_inst: "Wie sieht die Reihenfolge am Ende aus?",
    t1_h1: "Partizip II + werden.", t1_h2: "geputzt werden.",
    t1_w1: "werden", t1_w2: "geputzt",

    // T2 - Präsens: müssen
    t2_title: "Pflicht (muss)",
    t2_text: "Etwas muss erledigt werden. Struktur: Modalverb + ... + Partizip II + werden.",
    t2_inst: "Setze die Verben richtig ein!",
    t2_h1: "Das Haus muss (ge-) + werden.", t2_h2: "muss gebaut werden.",
    t2_sent2: "Das Haus ___ heute ___ ___ .",
    t2_c2_1: "muss gebaut werden", t2_c2_2: "muss bauen werden", t2_c2_3: "wird gebaut müssen", t2_c2_4: "muss gebaut wird",

    // T3 - Präsens: können
    t3_title: "Möglichkeit (kann)",
    t3_text: "Hier geht es darum, was gemacht werden kann. 'Die Tür kann geöffnet werden.'",
    t3_inst: "Welche Form ist korrekt?",
    t3_h1: "kann + Partizip II + werden.",
    t3_sent3: "Das Problem ___ gelöst ___ .",
    t3_c3_1: "kann / werden", t3_c3_2: "wird / können", t3_c3_3: "könnte / worden", t3_c3_4: "kann / worden",

    // T4 - Präsens: dürfen (Verbot)
    t4_title: "Erlaubnis & Verbot",
    t4_text: "Oft für Schilder: 'Hier darf nicht geparkt werden.'",
    t4_inst: "Schieße auf den richtigen Passiv-Satz mit 'darf'!",
    t4_h1: "darf nicht + Partizip II + werden.",
    t4_q4: "Was darf man hier nicht?",
    t4_t4_1: "Hier darf nicht geraucht werden.", t4_t4_2: "Hier raucht man nicht.", t4_t4_3: "Man darf nicht rauchen.",

    // T5 - Präteritum: musste
    t5_title: "Vergangene Pflicht",
    t5_text: "In der Vergangenheit wird das Modalverb zu 'musste', 'konnte', etc.",
    t5_inst: "Wähle die richtige Präteritum-Form!",
    t5_h1: "Die Hausaufgabe (Einzahl) + musste.",
    t5_sent5: "Die Hausaufgabe ___ gestern gemacht ___ .",
    t5_c5_1: "musste / werden", t5_c5_2: "muss / werden", t5_c5_3: "musste / worden", t5_c5_4: "war / gemacht",

    // T6 - Präteritum: konnte
    t6_title: "Vergangene Fähigkeit",
    t6_text: "Etwas konnte erledigt werden. 'Der Fehler konnte gefunden werden.'",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Subjekt + konnte + ... + P2 + werden.",
    t6_w6_1: "Der Fehler", t6_w6_2: "konnte", t6_w6_3: "schnell", t6_w6_4: "behoben werden.",

    // T7 - Satzbau: Nebensatz
    t7_title: "Modal-Passiv im Nebensatz",
    t7_text: "Im Nebensatz rutscht das konjugierte Modalverb ganz ans Ende, HINTER 'werden'.",
    t7_inst: "Staple die Verben für das Satzende!",
    t7_h1: "... + Partizip II + werden + muss.",
    t7_sw7_1: "gemacht", t7_sw7_2: "werden", t7_sw7_3: "muss.",

    // T8 - Man (Aktiv) -> Passiv
    t8_title: "Man-Sätze umbauen",
    t8_text: "Sätze mit 'man' werden im Passiv zu Sätzen ohne Täter. 'Man muss das machen' -> 'Das muss gemacht werden.'",
    t8_inst: "Sortiere Aktiv (mit man) und Passiv (mit werden)!",
    t8_h1: "Aktiv nutzt 'man'. Passiv nutzt 'werden'.",
    t8_b8_1: "Aktiv (man) 👤", t8_b8_2: "Passiv (werden) ⚙️",
    t8_i8_1: "Man muss lüften.", t8_i8_2: "Es muss gelüftet werden.", t8_i8_3: "Man kann helfen.", t8_i8_4: "Es kann geholfen werden.",

    // T9 - Magnet: Modal-Bedeutung
    t9_title: "Bedeutungs-Magnet",
    t9_text: "Welches Modalverb passt zur Situation?",
    t9_inst: "Verbinde die Modalverben mit ihrer Passiv-Bedeutung!",
    t9_h1: "müssen = Pflicht, dürfen = Erlaubnis.",
    t9_ml9_1: "muss", t9_mr9_1: "Pflicht",
    t9_ml9_2: "darf", t9_mr9_2: "Erlaubnis",
    t9_ml9_3: "soll", t9_mr9_3: "Empfehlung",

    // T10 - Negation
    t10_title: "Nicht vergessen!",
    t10_text: "Die Negation 'nicht' steht meist vor dem Partizip II.",
    t10_inst: "Welches Wort fehlt hier?",
    t10_h1: "Das Fenster darf 'nicht'...",
    t10_sent10: "Das Fenster darf ___ geöffnet werden.",
    t10_c10_1: "nicht", t10_c10_2: "kein", t10_c10_3: "nichts", t10_c10_4: "nie",

    // T11 - Wortbildung: werden/worden
    t11_title: "Werden oder Worden?",
    t11_text: "Mit Modalverben nutzen wir im Präsens und Präteritum IMMER 'werden' (Infinitiv). 'Worden' gibt es hier nicht!",
    t11_inst: "Wähle das richtige Ende!",
    t11_h1: "Nach Modalverben steht der reine Infinitiv: werden.",
    t11_sent11: "Die Arbeit konnte beendet ___ .",
    t11_c11_1: "werden", t11_c11_2: "worden", t11_c11_3: "geworden", t11_c11_4: "wird",

    // T12 - Highlight: Das Modalverb
    t12_title: "Modalverb-Detektiv",
    t12_text: "Finde das konjugierte Modalverb im Passiv-Satz!",
    t12_inst: "Markiere das Modalverb!",
    t12_h1: "Es steht an Position 2.", t12_h2: "muss, kann, soll...",
    t12_w12_1: "Der", t12_w12_2: "Müll", t12_w12_3: "sollte", t12_w12_4: "morgen", t12_w12_5: "abgeholt", t12_w12_6: "werden",

    // T13 - Futur I (Sehr selten)
    t13_title: "Zukunft mit Modalverb",
    t13_text: "Extrem-Satzbau: 'Das wird gemacht werden müssen.' (Wird nur selten genutzt, ist aber logisch).",
    t13_inst: "Welches Verb steht ganz am Ende?",
    t13_h1: "Das Modalverb im Infinitiv.",
    t13_q13: "Das wird erledigt werden ___ .",
    t13_ans13: "müssen", t13_ans13_2: "muss", t13_ans13_3: "gemusst", t13_ans13_4: "werden",

    // T14 - Höfliche Bitte (Konjunktiv II)
    t14_title: "Höfliches Passiv",
    t14_text: "Mit 'könnte' vagy 'müsste' klingt das Passiv viel höflicher.",
    t14_inst: "Mache den Satz höflicher!",
    t14_h1: "Benutze 'könnte'.",
    t14_sent14: "___ die Musik bitte leiser gemacht werden?",
    t14_c14_1: "Könnte", t14_c14_2: "Kann", t14_c14_3: "Muss", t14_c14_4: "Wird",

    // T15 - Abschluss-Stacker
    t15_title: "Meister der Mechanik",
    t15_text: "Baue den komplexen Satz zum Abschluss!",
    t15_inst: "Staple die Satzteile richtig!",
    t15_h1: "Subjekt + Modalverb + ... + P2 + werden.",
    t15_sw15_1: "Die Briefe", t15_sw15_2: "müssen", t15_sw15_3: "sofort", t15_sw15_4: "unterschrieben werden.",
  }
};

export const PASSIV_MODAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "compound-word", word1: "Partizip II", word2: "werden", result: "Partizip II+werden", color: "#6366F1" },
    interactive: { type: "word-order", words: ["t1_w2", "t1_w1"], correctOrder: [0, 1], instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "muss", color: "#F59E0B", bg: "#FEF3C7" }, { text: "werden", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "word-display", word: "kann ... werden", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🚭" },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_t4_1", isCorrect: true }, { id: "2", text: "t4_t4_2", isCorrect: false }, { id: "3", text: "t4_t4_3", isCorrect: false }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["m", "u", "s", "s", "t", "e"], color: "#B45309" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "word-order", words: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4"], correctOrder: [0, 1, 2, 3], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t7_sw7_1", "t7_sw7_2", "t7_sw7_3"], correctOrder: [0, 1, 2], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["man lüftet"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["wird gelüftet"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t8_b8_1" }, { id: "p", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "a" }, { text: "t8_i8_2", bucketId: "p" }, { text: "t8_i8_3", bucketId: "a" }, { text: "t8_i8_4", bucketId: "p" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "word-display", word: "nicht", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "letter-circles", letters: ["z", "u"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4", "t12_w12_5", "t12_w12_6"], correctIndices: [2], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "⏱️" },
    interactive: { type: "gap-fill", sentence: "t13_q13", choices: ["t13_ans13", "t13_ans13_2", "t13_ans13_3", "t13_ans13_4"], correctIndex: 0, instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Könnte", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t14_sent14", choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"], correctIndex: 0, instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🏆" },
    interactive: { type: "physics-stacker", words: ["t15_sw15_1", "t15_sw15_2", "t15_sw15_3", "t15_sw15_4"], correctOrder: [0, 1, 2, 3], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  }
];


export const STIL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rhetorik-Labor (Stilmittel)",

    // T1 - Alliteration
    t1_title: "Gleicher Anfang (Alliteration)",
    t1_text: "Bei der Alliteration beginnen mehrere Wörter mit dem gleichen Anlaut. 'Milch macht müde Männer munter.'",
    t1_inst: "Welcher Satz ist eine Alliteration?",
    t1_h1: "Suche nach Wörtern, die mit dem gleichen Buchstaben starten.",
    t1_q1: "Finde die Alliteration:",
    t1_ans1: "Fischers Fritz fischt frische Fische.", t1_ans1_2: "Der Himmel ist heute blau.",

    // T2 - Metapher
    t2_title: "Sprachliche Bilder (Metapher)",
    t2_text: "Eine Metapher ist ein Wort in übertragener Bedeutung. 'Ein Meer von Tränen' bedeutet nicht echtes Salzwasser.",
    t2_inst: "Verbinde die Metapher mit ihrer Bedeutung!",
    t2_h1: "Warteschlange -> Menschen, die wie eine Schlange stehen.",
    t2_ml2_1: "Rabenmutter", t2_mr2_1: "Gefühlskalte Mutter",
    t2_ml2_2: "Warteschlange", t2_mr2_2: "Reihe von Menschen",
    t2_ml2_3: "Flugzeuge im Bauch", t2_mr2_3: "Verliebt sein",

    // T3 - Vergleich
    t3_title: "Stark wie ein Löwe (Vergleich)",
    t3_text: "Ein Vergleich verknüpft zwei Dinge mit dem Wort 'wie' oder 'als'.",
    t3_inst: "Setze das Vergleichswort richtig ein!",
    t3_h1: "Vergleiche brauchen meistens 'wie'.",
    t3_sent3: "Er ist schlau ___ ein Fuchs.",
    t3_c3_1: "wie", t3_c3_2: "als", t3_c3_3: "so", t3_c3_4: "und",

    // T4 - Personifikation
    t4_title: "Leblose Dinge (Personifikation)",
    t4_text: "Dinge oder Naturerscheinungen erhalten menschliche Eigenschaften. 'Die Sonne lacht.'",
    t4_inst: "Sortiere: Personifikation oder normaler Satz?",
    t4_h1: "Kann die Sonne wirklich lachen? Nein -> Personifikation.",
    t4_b4_1: "Personifikation 🎭", t4_b4_2: "Realität 🏠",
    t4_i4_1: "Die Sonne lacht.", t4_i4_2: "Die Sonne scheint.", t4_i4_3: "Der Wind singt.", t4_i4_4: "Der Wind weht.",

    // T5 - Hyperbel
    t5_title: "Übertreibung (Hyperbel)",
    t5_text: "Eine Hyperbel macht Dinge viel größer oder kleiner, als sie sind. 'Ein Meer von Tränen.'",
    t5_inst: "Ordne die Ausdrücke nach ihrer Stärke!",
    t5_h1: "viel -> riesig -> unendlich.",
    t5_sw5_1: "viel", t5_sw5_2: "riesig", t5_sw5_3: "unendlich",

    // T6 - Rhetorische Frage
    t6_title: "Fragen ohne Antwort",
    t6_text: "Eine rhetorische Frage braucht keine Antwort, weil sie jeder schon kennt. 'Wer ist schon perfekt?'",
    t6_inst: "Schieße auf die rhetorischen Fragen!",
    t6_h1: "Braucht man auf diese Frage eine Antwort?",
    t6_q6: "Welche Frage ist rhetorisch?",
    t6_t6_1: "Habe ich es dir nicht gesagt?", t6_t6_2: "Wie viel Uhr ist es?", t6_t6_3: "Wo wohnst du?",

    // T7 - Anapher
    t7_title: "Wiederholung (Anapher)",
    t7_text: "Wörter werden am Anfang aufeinanderfolgender Sätze wiederholt. 'Ich kam, ich sah, ich siegte.'",
    t7_inst: "Markiere das Wort, das wiederholt wird!",
    t7_h1: "Suche das Wort am Satzanfang.",
    t7_w7_1: "Wir", t7_w7_2: "wollen", t7_w7_3: "lernen.", t7_w7_4: "Wir", t7_w7_5: "wollen", t7_w7_6: "siegen.",

    // T8 - Klimax
    t8_title: "Steigerung (Klimax)",
    t8_text: "Eine stufenartige Steigerung von Wörtern. 'Ich kam, sah und siegte.'",
    t8_inst: "Bringe die Wörter in die richtige Steigerungsform!",
    t8_h1: "Tage -> Wochen -> Jahre.",
    t8_sw8_1: "Tage", t8_sw8_2: "Wochen", t8_sw8_3: "Jahre",

    // T9 - Antithese
    t9_title: "Gegensätze (Antithese)",
    t9_text: "Gegensätzliche Begriffe werden gegenübergestellt. 'Himmel und Hölle.'",
    t9_inst: "Verbinde die Gegensätze!",
    t9_h1: "Tag -> Nacht, Gut -> Böse.",
    t9_ml9_1: "Himmel", t9_mr9_1: "Hölle",
    t9_ml9_2: "Tag", t9_mr9_2: "Nacht",
    t9_ml9_3: "heiß", t9_mr9_3: "kalt",

    // T10 - Lautmalerei (Onomatopoesie)
    t10_title: "Klingende Wörter",
    t10_text: "Wörter, die Geräusche nachmachen. 'Kuckuck', 'Zischen', 'Wuff'.",
    t10_inst: "Párosítsd a hangutánzó szót a forrásával!",
    t10_h1: "Miau -> Katze.",
    t10_ml10_1: "Miau", t10_mr10_1: "Katze",
    t10_ml10_2: "Wuff", t10_mr10_2: "Hund",
    t10_ml10_3: "Kuckuck", t10_mr10_3: "Vogel",

    // T11 - Ellipse
    t11_title: "Kurz gefasst (Ellipse)",
    t11_text: "Ein grammatisch unvollständiger Satz. 'Erst die Arbeit, dann das Vergnügen.'",
    t11_inst: "Welches Wort wurde weggelassen?",
    t11_h1: "Ersetze die Lücke im Kopf: 'Erst kommt die Arbeit...'",
    t11_sent11: "Erst die Arbeit, dann ___ Vergnügen.",
    t11_c11_1: "das", t11_c11_2: "ein", t11_c11_3: "ist", t11_c11_4: "kommt",

    // T12 - Symbol
    t12_title: "Bilder mit Bedeutung (Symbol)",
    t12_text: "Ein konkretes Ding steht für etwas Abstraktes. 'Taube' steht für 'Frieden'.",
    t12_inst: "Verbinde das Symbol mit seiner Bedeutung!",
    t12_h1: "Herz = Liebe.",
    t12_ml12_1: "Rote Rose", t12_mr12_1: "Liebe",
    t12_ml12_2: "Taube", t12_mr12_2: "Frieden",
    t12_ml12_3: "Kleeblatt", t12_mr12_3: "Glück",

    // T13 - Euphemismus
    t13_title: "Beschönigung (Euphemismus)",
    t13_text: "Ein negatives Wort wird durch ein schöneres ersetzt. 'Ableben' statt 'Sterben'.",
    t13_inst: "Sortiere: Direkt oder Beschönigt?",
    t13_h1: "Seniorenresidenz klingt schöner als Altersheim.",
    t13_b13_1: "Euphemismus ✨", t13_b13_2: "Direkt 📢",
    t13_i13_1: "Seniorenresidenz", t13_i13_2: "Altersheim", t13_i13_3: "preiswert", t13_i13_4: "billig",

    // T14 - Oxymoron
    t14_title: "Widerspruch (Oxymoron)",
    t14_text: "Zwei Begriffe, die sich eigentlich ausschließen. 'Bittersüß', 'Hassliebe'.",
    t14_inst: "Markiere das Wort, das den Widerspruch bildet!",
    t14_h1: "Suche nach dem Wortteil, der das Gegenteil bedeutet.",
    t14_w14_1: "Das", t14_w14_2: "ist", t14_w14_3: "eine", t14_w14_4: "Hassliebe", t14_w14_5: ".",

    // T15 - Parallelismus
    t15_title: "Gleicher Bauplan",
    t15_text: "Sätze sind genau gleich aufgebaut. 'Kleine Kinder, kleine Sorgen. Große Kinder, große Sorgen.'",
    t15_inst: "Baue den parallelen Satz fertig!",
    t15_h1: "Folge dem Muster des ersten Satzteils.",
    t15_f15_1: "Kleine Kinder,", t15_f15_2: "kleine Sorgen.", t15_f15_3: "Große Kinder,", t15_f15_4: "große Sorgen.",
  }
};

export const STIL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "rhyme-pair", word1: "Fischers", word2: "Fritz", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t1_inst", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🐱", label: "Rabenmutter" }, { emoji: "🐍", label: "Warteschlange" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "easy",
    svg: { type: "two-groups", left: { items: ["Löwe", "stark"], bg: "#f0f9ff", border: "#bae6fd" }, right: { items: ["Fuchs", "schlau"], bg: "#fdf4ff", border: "#e9d5ff" } },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "steigerung" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Sonne lacht", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Wind singt", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "physics-bucket", buckets: [{ id: "p", label: "t4_b4_1" }, { id: "r", label: "t4_b4_2" }], items: [{ text: "t4_i4_1", bucketId: "p" }, { text: "t4_i4_2", bucketId: "r" }, { text: "t4_i4_3", bucketId: "p" }, { text: "t4_i4_4", bucketId: "r" }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📈" },
    interactive: { type: "physics-stacker", words: ["t5_sw5_1", "t5_sw5_2", "t5_sw5_3"], correctOrder: [0, 1, 2], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "❓" },
    interactive: { type: "physics-slingshot", question: "t6_q6", targets: [{ id: "1", text: "t6_t6_1", isCorrect: true }, { id: "2", text: "t6_t6_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_4"], correctIndices: [0, 3], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Himmel"], bg: "#EFF6FF", border: "#3B82F6" }, right: { items: ["Hölle"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "antonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-syllables", parts: ["Ku", "ckuck"], color: "#6366F1" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "✂️" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🕊️", label: "Frieden" }, { emoji: "❤️", label: "Liebe" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t12_ml12_1", right: "t12_mr12_1" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Euphemismus"], bg: "#F0FDF4", border: "#22C55E" }, right: { items: ["Direkt"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "e", label: "t13_b13_1" }, { id: "d", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "e" }, { text: "t13_i13_2", bucketId: "d" }, { text: "t13_i13_3", bucketId: "e" }, { text: "t13_i13_4", bucketId: "d" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "word-display", word: "Hassliebe", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_4"], correctIndices: [0], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "antonyme" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  }
];


export const CAUSAL_COND_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Logik-Labyrinth (Kausal & Konditional)",

    // T1 - weil (Kausal)
    t1_title: "Grund mit 'weil'",
    t1_text: "Ein Kausalsatz nennt den Grund. Nach 'weil' steht das konjugierte Verb am Ende des Satzes.",
    t1_inst: "Setze das Verb an die richtige Stelle!",
    t1_h1: "Das Verb 'ist' muss ganz nach hinten.",
    t1_sent1: "Ich bleibe zu Hause, weil es heute ___ ___ .",
    t1_c1_1: "kalt ist", t1_c1_2: "ist kalt", t1_c1_3: "kalt war", t1_c1_4: "kalt wird",

    // T2 - denn (Kausal)
    t2_title: "Grund mit 'denn'",
    t2_text: "'denn' ist eine Konjunktion auf Position 0. Das Verb steht danach auf Position 2 (wie im Hauptsatz).",
    t2_inst: "Welches Wort passt in die Lücke?",
    t2_h1: "denn + Subjekt + Verb.",
    t2_sent2: "Ich lerne viel, ___ ich will eine gute Note.",
    t2_c2_1: "denn", t2_c2_2: "weil", t2_c2_3: "da", t2_c2_4: "wenn",

    // T3 - da (Kausal)
    t3_title: "Grund mit 'da'",
    t3_text: "'da' ist ein Synonym für 'weil' und wird oft am Satzanfang genutzt. Das Verb steht am Ende.",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Da + ... + Verb.",
    t3_w3_1: "Da es regnet,", t3_w3_2: "bleiben", t3_w3_3: "wir", t3_w3_4: "drinnen.",

    // T4 - wegen (Präposition + Genitiv)
    t4_title: "Grund mit 'wegen'",
    t4_text: "'wegen' ist eine Präposition und verlangt meistens den Genitiv.",
    t4_inst: "Wähle die richtige Endung!",
    t4_h1: "wegen + des/der.",
    t4_sent4: "Wegen ___ Regens fällt das Spiel aus.",
    t4_c4_1: "des", t4_c4_2: "dem", t4_c4_3: "den", t4_c4_4: "der",

    // T5 - wenn (Konditional)
    t5_title: "Bedingung mit 'wenn'",
    t5_text: "Ein Konditionalsatz nennt eine Bedingung. 'wenn' schickt das Verb ans Ende.",
    t5_inst: "Welcher Satz ist eine Bedingung?",
    t5_h1: "Suche nach 'wenn'.",
    t5_q5: "Finde die Bedingung:",
    t5_ans5: "Wenn ich Zeit habe, komme ich.", t5_ans5_2: "Ich habe heute Zeit.",

    // T6 - falls (Konditional)
    t6_title: "Bedingung mit 'falls'",
    t6_text: "'falls' nutzt man, wenn die Bedingung weniger wahrscheinlich ist als bei 'wenn'.",
    t6_inst: "Fülle die Lücke!",
    t6_h1: "Es ist ein Synonym für 'wenn'.",
    t6_sent6: "___ es regnen sollte, nehmen wir einen Schirm.",
    t6_c6_1: "Falls", t6_c6_2: "Weil", t6_c6_3: "Dass", t6_c6_4: "Obwohl",

    // T7 - sofern (Konditional)
    t7_title: "Bedingung mit 'sofern'",
    t7_text: "'sofern' ist formeller als 'wenn' oder 'falls'.",
    t7_inst: "Markiere das Wort 'sofern'!",
    t7_h1: "Es steht am Satzanfang.",
    t7_w7_1: "Sofern", t7_w7_2: "nichts", t7_w7_3: "dazwischenkommt,", t7_w7_4: "sehen", t7_w7_5: "wir", t7_w7_6: "uns.",

    // T8 - bei (Präposition + Dativ)
    t8_title: "Bedingung mit 'bei'",
    t8_text: "Auch mit 'bei' kann man Bedingungen ausdrücken. Es folgt der Dativ.",
    t8_inst: "Wähle den richtigen Artikel!",
    t8_h1: "bei + dem (beim).",
    t8_sent8: "___ Regen bleiben wir zu Hause.",
    t8_c8_1: "Bei", t8_c8_2: "Mit", t8_c8_3: "Wegen", t8_c8_4: "Trotz",

    // T9 - Deshalb / Deswegen
    t9_title: "Folge ausdrücken",
    t9_text: "'deshalb' und 'deswegen' sind Konjunktionaladverbien. Sie stehen auf Platz 1, das Verb folgt auf Platz 2.",
    t9_inst: "Setze den Satz richtig zusammen!",
    t9_h1: "Grund (Satz 1). Deshalb + Verb + Subjekt (Satz 2).",
    t9_f9_1: "Es regnet.", t9_f9_2: "Deshalb", t9_f9_3: "bleiben", t9_f9_4: "wir zu Hause.",

    // T10 - Warum? vs. Unter welcher Bedingung?
    t10_title: "Fragewörter",
    t10_text: "Frage nach dem Grund mit 'Warum?' und nach der Bedingung mit 'Wann?' oder 'Unter welcher Bedingung?'.",
    t10_inst: "Sortiere die Fragen!",
    t10_h1: "Warum = Kausal. Unter welcher Bedingung = Konditional.",
    t10_b10_1: "Kausal (Grund) ❓", t10_b10_2: "Konditional (Bedingung) ⚖️",
    t10_i10_1: "Warum lachst du?", t10_i10_2: "Wann kommst du?", t10_i10_3: "Weshalb gehst du?", t10_i10_4: "Falls was passiert?",

    // T11 - Magnet: Bindewörter Match
    t11_title: "Logik-Magnet",
    t11_text: "Welches Bindewort passt zu welcher logischen Verknüpfung?",
    t11_inst: "Párosítsd a kötőszót a funkciójával!",
    t11_h1: "weil = Grund, wenn = Bedingung.",
    t11_ml11_1: "weil", t11_mr11_1: "Grund",
    t11_ml11_2: "wenn", t11_mr11_2: "Bedingung",
    t11_ml11_3: "obwohl", t11_mr11_3: "Gegensatz",

    // T12 - Wort-Stapler: Satzende
    t12_title: "Verb-Stapler",
    t12_text: "Im Nebensatz stehen die Verben ganz am Ende. Bei Modalverben: Vollverb + Modalverb.",
    t12_inst: "Staple die Verben für das Satzende!",
    t12_h1: "... weil ich lernen muss.",
    t12_sw12_1: "lernen", t12_sw12_2: "muss.",

    // T13 - Slingshot: Konjunktionen
    t13_title: "Logik-Jäger",
    t13_text: "Schieße auf alle Wörter, die einen Grund (Kausal) angeben!",
    t13_inst: "Triff die Kausal-Bindewörter!",
    t13_h1: "weil, da, denn.",
    t13_q13: "Was gibt einen Grund an?",
    t13_t13_1: "weil", t13_t13_2: "da", t13_t13_3: "denn", t13_t13_4: "wenn",

    // T14 - Two Groups: HS/NS vs NS/HS
    t14_title: "Satzbau-Varianten",
    t14_text: "Man kann mit dem Hauptsatz (HS) oder dem Nebensatz (NS) anfangen.",
    t14_inst: "Sortiere die Sätze!",
    t14_h1: "Nebensatz beginnt mit dem Bindewort.",
    t14_b14_1: "HS zuerst", t14_b14_2: "NS zuerst",
    t14_i14_1: "Ich komme, wenn ich Zeit habe.", t14_i14_2: "Wenn ich Zeit habe, komme ich.",

    // T15 - Finale: Logik-Profi
    t15_title: "Logik-Meister",
    t15_text: "Vervollständige diesen komplexen Satz!",
    t15_inst: "Welches Wort passt?",
    t15_h1: "Es wird eine Bedingung gesucht.",
    t15_sent15: "Ich helfe dir, ___ du mich darum bittest.",
    t15_c15_1: "sofern", t15_c15_2: "weil", t15_c15_3: "da", t15_c15_4: "denn",
  }
};

export const CAUSAL_COND_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "word-order", words: ["t1_sent1"], correctOrder: [0], instruction: "t1_inst", hint1: "h1", hint2: "h2" }, // Simpler order for intro
    quiz: { generate: "werden_passiv" } // Logic check
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "denn", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Pos. 0", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "wegen", word2: "des", result: "wegen+des", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "genitiv" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "⚖️" },
    interactive: { type: "physics-slingshot", question: "t5_inst", targets: [{ id: "1", text: "t5_ans5", isCorrect: true }, { id: "2", text: "t5_ans5_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "word-display", word: "Falls", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5", "t7_w7_6"], correctIndices: [0], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "easy",
    svg: { type: "article-noun", article: "Bei", articleColor: "#065F46", noun: "Regen" },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "dativ" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "sentence-display", words: ["Grund", "Deshalb", "Folge"], color: "#D97706" },
    interactive: { type: "sentence-build", fragments: ["t9_f9_1", "t9_f9_2", "t9_f9_3", "t9_f9_4"], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Warum?"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wann?"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "k", label: "t10_b10_1" }, { id: "c", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "k" }, { text: "t10_i10_2", bucketId: "c" }, { text: "t10_i10_3", bucketId: "k" }, { text: "t10_i10_4", bucketId: "c" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }, { left: "t11_ml11_3", right: "t11_mr11_3" }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2"], correctOrder: [0, 1], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🎯" },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_t13_1", isCorrect: true }, { id: "2", text: "t13_t13_2", isCorrect: true }, { id: "3", text: "t13_t13_3", isCorrect: true }, { id: "4", text: "t13_t13_4", isCorrect: false }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Ich komme..."], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wenn ich..."], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "h", label: "t14_b14_1" }, { id: "n", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "h" }, { text: "t14_i14_2", bucketId: "n" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "word-display", word: "sofern", color: "#B45309" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  }
];


export const KONZ_FINAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ziel- & Hindernis-Zentrum (Konzessiv & Final)",

    // T1 - obwohl (Konzessiv Intro)
    t1_title: "Obwohl (Gegengrund)",
    t1_text: "Ein Konzessivsatz nennt einen Gegengrund, der eine Handlung nicht verhindert. Nach 'obwohl' steht das Verb am Ende.",
    t1_inst: "Setze das Verb richtig ans Ende!",
    t1_h1: "Das konjugierte Verb rutscht nach hinten.",
    t1_sent1: "Ich gehe spazieren, obwohl es ___ ___ .",
    t1_c1_1: "stark regnet", t1_c1_2: "regnet stark", t1_c1_3: "hat geregnet", t1_c1_4: "regnete",

    // T2 - damit (Final Intro)
    t2_title: "Damit (Zweck/Ziel)",
    t2_text: "Finalsätze mit 'damit' geben eine Absicht an. Das Verb steht auch hier am Ende.",
    t2_inst: "Welches Wort leitet das Ziel ein?",
    t2_h1: "Ich lerne viel, ___ ich gute Noten bekomme.",
    t2_sent2: "Ich helfe dir, ___ du schneller fertig wirst.",
    t2_c2_1: "damit", t2_c2_2: "obwohl", t2_c2_3: "weil", t2_c2_4: "trotzdem",

    // T3 - um ... zu (Infinitivsatz)
    t3_title: "Um ... zu (Gleiches Subjekt)",
    t3_text: "Wenn das Subjekt in beiden Sätzen gleich ist, nutzt man oft 'um ... zu' + Infinitiv.",
    t3_inst: "Baue den Finalsatz zusammen!",
    t3_h1: "um + ... + zu + Infinitiv.",
    t3_f3_1: "Er trainiert,", t3_f3_2: "um", t3_f3_3: "fit", t3_f3_4: "zu bleiben.",

    // T4 - trotzdem (Adverb)
    t4_title: "Trostdem (Trotz des Grundes)",
    t4_text: "'trotzdem' ist ein Adverb und steht meist auf Position 1. Das Verb folgt auf Position 2.",
    t4_inst: "Wähle die richtige Satzfolge!",
    t4_h1: "Es regnet. Trotzdem (Pos 1) + gehen (Pos 2) + wir.",
    t4_sent4: "Es regnet. ___ gehen wir raus.",
    t4_c4_1: "Trotzdem", t4_c4_2: "Obwohl", t4_c4_3: "Damit", t4_c4_4: "Weil",

    // T5 - trotz (Präposition + Genitiv)
    t5_title: "Trotz (Präposition)",
    t5_text: "'trotz' verlangt den Genitiv und drückt einen Gegensatz aus.",
    t5_inst: "Wähle den richtigen Artikel im Genitiv!",
    t5_h1: "trotz + des/der.",
    t5_sent5: "Trotz ___ schlechten Wetters gehen wir wandern.",
    t5_c5_1: "des", t5_c5_2: "dem", t5_c5_3: "den", t5_c5_4: "das",

    // T6 - obwohl vs. trotzdem
    t6_title: "Obwohl vs. Trotzdem",
    t6_text: "'obwohl' leitet einen Nebensatz ein (Verb Ende). 'trotzdem' verbindet Hauptsätze.",
    t6_inst: "Sortiere die Sätze nach dem Bindewort!",
    t6_h1: "Achte auf die Verbposition.",
    t6_b6_1: "obwohl (Verb am Ende) 🔗", t6_b6_2: "trotzdem (Verb Pos. 2) 🧱",
    t6_i6_1: "..., obwohl er müde ist.", t6_i6_2: "Er ist müde; trotzdem lernt er.",

    // T7 - damit vs. um... zu
    t7_title: "Subjekt-Check",
    t7_text: "Subjekt gleich? -> um... zu. Subjekt verschieden? -> damit.",
    t7_inst: "Welches Bindewort passt hier (Subjekte: Ich / Du)?",
    t7_h1: "Zwei verschiedene Personen -> damit.",
    t7_sent7: "Ich gebe dir Geld, ___ du dir ein Eis kaufst.",
    t7_c7_1: "damit", t7_c7_2: "um", t7_c7_3: "zu", t7_c7_4: "obwohl",

    // T8 - zwar ... aber (Doppelkonjunktion)
    t8_title: "Zwar ... aber",
    t8_text: "Diese Kombination verbindet eine Einschränkung mit einem Gegensatz.",
    t8_inst: "Vervollständige die Doppelkonjunktion!",
    t8_h1: "Zwar (Einschränkung) ... aber (Gegensatz).",
    t8_sent8: "Das Auto ist ___ alt, ___ sehr zuverlässig.",
    t8_c8_1: "zwar / aber", t8_c8_2: "nicht nur / sondern auch", t8_c8_3: "weder / noch", t8_c8_4: "entweder / oder",

    // T9 - Magnet: Logik-Match
    t9_title: "Funktions-Magnet",
    t9_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t9_inst: "Húzd össze a párokat!",
    t9_h1: "damit = Absicht, obwohl = Gegensatz.",
    t9_ml9_1: "damit", t9_mr9_1: "Absicht / Ziel",
    t9_ml9_2: "obwohl", t9_mr9_2: "Gegengrund",
    t9_ml9_3: "trotz", t9_mr9_3: "Präposition",

    // T10 - obgleich / obschon (Formal)
    t10_title: "Gehobene Sprache",
    t10_text: "'obgleich' und 'obschon' bedeuten das Gleiche wie 'obwohl', klingen aber formeller.",
    t10_inst: "Finde das Synonym für 'obwohl'!",
    t10_h1: "Suche ein Wort, das ähnlich klingt.",
    t10_q10: "Was bedeutet 'obgleich'?",
    t10_ans10: "obwohl", t10_ans10_2: "deshalb", t10_ans10_3: "damit",

    // T11 - Slingshot: Final-Jäger
    t11_title: "Ziel-Jagd",
    t11_text: "Lődd le az összes szót, ami célt vagy szándékot fejez ki!",
    t11_inst: "Triff die Final-Bindewörter!",
    t11_h1: "Suche nach damit, um... zu, zwecks.",
    t11_q11: "Welche Wörter geben ein Ziel an?",
    t11_t11_1: "damit", t11_t11_2: "um... zu", t11_t11_3: "obwohl", t11_t11_4: "trotz",

    // T12 - Stacker: Satzbau (damit)
    t12_title: "Satzbau-Turm",
    t12_text: "Baue einen korrekten Finalsatz!",
    t12_inst: "Staple die Wörter in der richtigen Reihenfolge!",
    t12_h1: "Hauptsatz, + damit + Subjekt + ... + Verb.",
    t12_sw12_1: "..., damit", t12_sw12_2: "du", t12_sw12_3: "gesund", t12_sw12_4: "bleibst.",

    // T13 - Trotz vs. Wegen (Bucket)
    t13_title: "Gegensatz oder Grund?",
    t13_text: "'Trotz' ist ein Hindernis, 'Wegen' ist die Ursache.",
    t13_inst: "Sortiere die Präpositionen!",
    t13_h1: "Ursache = Wegen. Gegensatz = Trotz.",
    t13_b13_1: "Gegensatz (Trotz) ⚖️", t13_b13_2: "Grund (Wegen) 🏗️",
    t13_i13_1: "Trotz der Kälte", t13_i13_2: "Wegen der Kälte", t13_i13_3: "Trotz des Regens", t13_i13_4: "Wegen des Regens",

    // T14 - Highlight: Konjunktion
    t14_title: "Konzessiv-Detektiv",
    t14_text: "Markiere das Wort, das den Gegengrund einleitet!",
    t14_inst: "Keresd meg az 'obwohl' szót!",
    t14_w14_1: "Er", t14_w14_2: "lacht,", t14_w14_3: "obwohl", t14_w14_4: "er", t14_w14_5: "traurig", t14_w14_6: "ist",

    // T15 - Finale: Logik-Meister
    t15_title: "Abschluss-Check K6",
    t15_text: "Welches Wort passt: '___ der Hilfe schaffte er es nicht.'",
    t15_inst: "Wähle die richtige Präposition!",
    t15_h1: "Obwohl Hilfe da war, klappte es nicht -> Trotz.",
    t15_sent15: "___ der Hilfe schaffte er es nicht.",
    t15_c15_1: "Trotz", t15_c15_2: "Wegen", t15_c15_3: "Dank", t15_c15_4: "Um",
  }
};

export const KONZ_FINAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "word-order", words: ["t1_sent1"], correctOrder: [0], instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "damit", color: "#B91C1C", bg: "#FEE2E2" }, { text: "Ziel", color: "#B91C1C", bg: "#FEE2E2" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "um", word2: "zu", result: "um+zu", color: "#6366F1" },
    interactive: { type: "sentence-build", fragments: ["t3_f3_1", "t3_f3_2", "t3_f3_3", "t3_f3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "word-display", word: "Trotzdem", color: "#B91C1C" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "antonyme" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "article-noun", article: "Trotz", articleColor: "#B91C1C", noun: "Wetters" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "genitiv" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["obwohl"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["trotzdem"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ob", label: "t6_b6_1" }, { id: "tr", label: "t6_b6_2" }], items: [{ text: "t6_i6_1", bucketId: "ob" }, { text: "t6_i6_2", bucketId: "tr" }], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "👤", label: "Ich" }, { emoji: "👥", label: "Du" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "antonyme" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-display", word: "obgleich", color: "#B91C1C" },
    interactive: { type: "physics-slingshot", question: "t10_h1", targets: [{ id: "1", text: "t10_ans10", isCorrect: true }, { id: "2", text: "t10_ans10_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🎯" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: true }, { id: "3", text: "t11_t11_3", isCorrect: false }, { id: "4", text: "t11_t11_4", isCorrect: false }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2", "t12_sw12_3", "t12_sw12_4"], correctOrder: [0, 1, 2, 3], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Trotz"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["Wegen"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "tr", label: "t13_b13_1" }, { id: "we", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "tr" }, { text: "t13_i13_2", bucketId: "we" }, { text: "t13_i13_3", bucketId: "tr" }, { text: "t13_i13_4", bucketId: "we" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "genitiv" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5", "t14_w14_6"], correctIndices: [2], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🏆" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "genitiv" }
  }
];


export const TEMPORAL7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Zentrum (Temporalsatz)",

    // T1 - als (Einmalig in der Vergangenheit)
    t1_title: "Einmalig in der Vergangenheit (als)",
    t1_text: "Wir nutzen 'als' für Ereignisse, die in der Vergangenheit EINMAL passiert sind (z.B. die Geburt).",
    t1_inst: "Wähle das richtige Zeitwort!",
    t1_h1: "Es passierte nur einmal in der Vergangenheit.",
    t1_sent1: "___ ich ein Kind war, wohnte ich in Berlin.",
    t1_c1_1: "Als", t1_c1_2: "Wenn", t1_c1_3: "Seit", t1_c1_4: "Während",

    // T2 - wenn (Wiederholt oder Gegenwart)
    t2_title: "Immer wenn...",
    t2_text: "Wir nutzen 'wenn' für Ereignisse, die sich wiederholen oder in der Gegenwart/Zukunft stattfinden.",
    t2_inst: "Welches Wort passt hier?",
    t2_h1: "Es passiert jedes Mal, wenn es regnet.",
    t2_sent2: "___ es regnet, nehme ich einen Schirm.",
    t2_c2_1: "Wenn", t2_c2_2: "Als", t2_c2_3: "Nachdem", t2_c2_4: "Bis",

    // T3 - während (Gleichzeitigkeit)
    t3_title: "Gleichzeitig (während)",
    t3_text: "Zwei Dinge passieren im gleichen Moment. Nach 'während' steht das Verb am Ende.",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Während + Subjekt + ... + Verb.",
    t3_w3_1: "Während ich koche,", t3_w3_2: "höre", t3_w3_3: "ich", t3_w3_4: "Musik.",

    // T4 - bevor (Vorzeitigkeit)
    t4_title: "Bevor (Reihenfolge)",
    t4_text: "Aktion A passiert vor Aktion B. 'Bevor ich schlafe, putze ich Zähne.'",
    t4_inst: "Welches Wort leitet die erste Handlung ein?",
    t4_h1: "Zuerst Zähne putzen, DANN schlafen.",
    t4_sent4: "___ ich schlafen gehe, putze ich mir die Zähne.",
    t4_c4_1: "Bevor", t4_c4_2: "Nachdem", t4_c4_3: "Während", t4_c4_4: "Seit",

    // T5 - nachdem (Nachzeitigkeit)
    t5_title: "Nachdem (Zeitform-Check)",
    t5_text: "Aktion A ist fertig, dann kommt Aktion B. Achtung: Die Zeitformen müssen sich unterscheiden!",
    t5_inst: "Wähle die richtige Zeitform (Plusquamperfekt)!",
    t5_h1: "Nachdem er gegessen HATTE (PQP), ging (Prät) er.",
    t5_sent5: "Nachdem er Hausaufgaben ___ ___ , spielte er Fußball.",
    t5_c5_1: "gemacht hatte", t5_c5_2: "gemacht hat", t5_c5_3: "macht", t5_c5_4: "machen würde",

    // T6 - seit / seitdem (Beginn)
    t6_title: "Seitdem (Dauer)",
    t6_text: "Etwas hat in der Vergangenheit begonnen und dauert noch an.",
    t6_inst: "Welches Wort passt zur Zeitspanne?",
    t6_h1: "Seit ich in der Stadt wohne...",
    t6_sent6: "___ er Sport treibt, fühlt er sich besser.",
    t6_c6_1: "Seitdem", t6_c6_2: "Als", t6_c6_3: "Bevor", t6_c6_4: "Bis",

    // T7 - bis (Endpunkt)
    t7_title: "Bis (Der Endpunkt)",
    t7_text: "Eine Handlung dauert an, bis ein bestimmter Zeitpunkt erreicht ist.",
    t7_inst: "Markiere das Wort 'bis'!",
    t7_h1: "Es steht am Anfang des Nebensatzes.",
    t7_w7_1: "Ich", t7_w7_2: "bleibe", t7_w7_3: "hier,", t7_w7_4: "bis", t7_w7_5: "du", t7_w7_6: "kommst.",

    // T8 - sobald (Unmittelbar danach)
    t8_title: "Sobald (Ganz schnell)",
    t8_text: "'sobald' bedeutet: direkt in dem Moment, nachdem etwas fertig ist.",
    t8_inst: "Welches Wort bedeutet 'sofort wenn'?",
    t8_h1: "Sobald die Glocke läutet...",
    t8_sent8: "___ ich zu Hause bin, rufe ich dich an.",
    t8_c8_1: "Sobald", t8_c8_2: "Solange", t8_c8_3: "Während", t8_c8_4: "Als",

    // T9 - solange (Gesamte Dauer)
    t9_title: "Solange (Parallel)",
    t9_text: "Zwei Handlungen dauern genau gleich lang an.",
    t9_inst: "Wähle das Wort für die ganze Dauer!",
    t9_h1: "Solange es regnet, bleiben wir hier.",
    t9_sent9: "___ du lernst, bin ich leise.",
    t9_c9_1: "Solange", t9_c9_2: "Sobald", t9_c9_3: "Als", t9_c9_4: "Bevor",

    // T10 - Magnet: Zeit-Paare
    t10_title: "Zeit-Magnet",
    t10_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t10_inst: "Húzd össze a párokat!",
    t10_h1: "während = parallel, nachdem = danach.",
    t10_ml10_1: "während", t10_mr10_1: "Gleichzeitig",
    t10_ml10_2: "nachdem", t10_mr10_2: "Danach",
    t10_ml10_3: "bevor", t10_mr10_3: "Davor",

    // T11 - Slingshot: Konjunktionen
    t11_title: "Zeit-Jäger",
    t11_text: "Schieße auf alle Wörter, die mit Zeit zu tun haben (Temporalkonjunktionen)!",
    t11_inst: "Triff die Zeit-Wörter!",
    t11_h1: "Suche nach als, wenn, während, seitdem.",
    t11_q11: "Was ist ein Zeitwort?",
    t11_t11_1: "nachdem", t11_t11_2: "solange", t11_t11_3: "bis", t11_t11_4: "weil",

    // T12 - Stacker: Zeitform-Hierarchie
    t12_title: "Zeitform-Treppe",
    t12_text: "Bei 'nachdem' nutzen wir oft das Plusquamperfekt für die erste Handlung.",
    t12_inst: "Staple die Verben für: Nachdem ich (1. Handlung) ... (2. Handlung).",
    t12_h1: "PQP (hatte) -> Präteritum (ging).",
    t12_sw12_1: "gegessen hatte", t12_sw12_2: "ging ich.",

    // T13 - Bucket: Als oder Wenn?
    t13_title: "Als oder Wenn?",
    t13_text: "Entscheide: War es einmal in der Vergangenheit (als) oder passiert es öfter (wenn)?",
    t13_inst: "Sortiere die Sätze!",
    t13_h1: "Kindheit = als. Jedes Mal = wenn.",
    t13_b13_1: "Als (Einmal / Past) ⏳", t13_b13_2: "Wenn (Immer / Present) 🔄",
    t13_i13_1: "... ich klein war.", t13_i13_2: "... ich Zeit habe.", t13_i13_3: "... ich 10 Jahre alt war.", t13_i13_4: "... ich Urlaub mache.",

    // T14 - Highlight: Nebensatz-Verb
    t14_title: "Verb-Ende Check",
    t14_text: "In Temporalsätzen steht das Verb immer am Ende.",
    t14_inst: "Markiere das Verb am Satzende!",
    t14_h1: "Keresd a mondat végét a vessző után.",
    t14_w14_1: "Seitdem", t14_w14_2: "ich", t14_w14_3: "täglich", t14_w14_4: "trainiere", t14_w14_5: ",", t14_w14_6: "bin", t14_w14_7: "ich", t14_w14_8: "fit",

    // T15 - Finale: Zeit-Profi
    t15_title: "Zeit-Meister",
    t15_text: "Setze das richtige Wort ein: 'Wir warten hier, ___ der Regen aufhört.'",
    t15_inst: "Welches Wort passt für den Endpunkt?",
    t15_h1: "Wir warten bis...",
    t15_sent15: "Wir warten hier, ___ der Regen aufhört.",
    t15_c15_1: "bis", t15_c15_2: "sobald", t15_c15_3: "während", t15_c15_4: "als",
  }
};

export const TEMPORAL7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "Als", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "easy",
    svg: { type: "text-bubbles", items: [{ text: "immer wenn", color: "#F59E0B", bg: "#FFFBEB" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "steigerung" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "compound-word", word1: "bevor", word2: "schlafen", result: "bevor+schlafen", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "word-display", word: "Nachdem", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["S", "e", "i", "t"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🛑" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5", "t7_w7_6"], correctIndices: [3], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "nominativ" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "sobald", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "word-display", word: "solange", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t9_sent9", choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"], correctIndex: 0, instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🎯" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: true }, { id: "3", text: "t11_t11_3", isCorrect: true }, { id: "4", text: "t11_t11_4", isCorrect: false }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2"], correctOrder: [0, 1], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Als"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wenn"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t13_b13_1" }, { id: "w", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "a" }, { text: "t13_i13_2", bucketId: "w" }, { text: "t13_i13_3", bucketId: "a" }, { text: "t13_i13_4", bucketId: "w" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5", "t14_w14_6", "t14_w14_7", "t14_w14_8"], correctIndices: [3], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🏆" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  }
];


export const INFINITIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv-Wald (zu + Infinitiv)",

    // T1 - Basis zu + Infinitiv
    t1_title: "Der einfache Infinitiv",
    t1_text: "Viele Sätze werden mit 'zu' + Infinitiv ergänzt, wenn das Subjekt gleich bleibt. 'Ich hoffe, dich zu sehen.'",
    t1_inst: "Setze das 'zu' an die richtige Stelle!",
    t1_h1: "Das 'zu' steht direkt vor dem Verb am Ende.",
    t1_sent1: "Ich versuche, pünktlich ___ ___ .",
    t1_c1_1: "zu kommen", t1_c1_2: "kommen zu", t1_c1_3: "zu gekommen", t1_c1_4: "gekommen",

    // T2 - Trennbare Verben (aufzustehen)
    t2_title: "Eingekesselt (aufzustehen)",
    t2_text: "Bei trennbaren Verben rutscht das 'zu' zwischen Vorsilbe und Stamm. 'einzukaufen', 'aufzustehen'.",
    t2_inst: "Welches Wort ist richtig geschrieben?",
    t2_h1: "Vorsilbe + zu + Verb.",
    t2_w2_1: "einzuschalten", t2_w2_2: "zueinschalten", t2_w2_3: "einschaltenzu", t2_w2_4: "eingeschalten",

    // T3 - um ... zu (Absicht)
    t3_title: "Wozu? (um ... zu)",
    t3_text: "Drückt eine Absicht oder ein Ziel aus. 'Ich lerne, um die Prüfung zu bestehen.'",
    t3_inst: "Vervollständige den Zielsatz!",
    t3_h1: "um ... zu + Infinitiv.",
    t3_sent3: "Er spart Geld, ___ ein Auto ___ kaufen.",
    t3_c3_1: "um / zu", t3_c3_2: "damit / zu", t3_c3_3: "ohne / zu", t3_c3_4: "um / -",

    // T4 - ohne ... zu (Einschränkung)
    t4_title: "Ohne ... zu",
    t4_text: "Drückt aus, dass eine erwartete Handlung nicht stattfindet. 'Er ging, ohne zu grüßen.'",
    t4_inst: "Baue den Satz zusammen!",
    t4_h1: "ohne + ... + zu + Infinitiv.",
    t4_f4_1: "Er lacht,", t4_f4_2: "ohne", t4_f4_3: "den Grund", t4_f4_4: "zu kennen.",

    // T5 - statt ... zu (Alternative)
    t5_title: "Anstatt ... zu",
    t5_text: "Drückt eine Alternative aus. 'Anstatt zu lernen, spielt er.'",
    t5_inst: "Welches Wort leitet die Alternative ein?",
    t5_h1: "Wähle 'Anstatt' oder 'Statt'.",
    t5_sent5: "___ zu arbeiten, schläft er.",
    t5_c5_1: "Anstatt", t5_c5_2: "Ohne", t5_c5_3: "Um", t5_c5_4: "Damit",

    // T6 - Verben mit Infinitiv (hoffen, planen)
    t6_title: "Planungs-Verben",
    t6_text: "Bestimmte Verben wie hoffen, planen, versuchen oder vergessen brauchen oft eine Infinitivkonstruktion.",
    t6_inst: "Verbinde das Verb mit der passenden Ergänzung!",
    t6_h1: "planen -> etwas zu tun.",
    t6_ml6_1: "Ich plane,", t6_mr6_1: "nach Berlin zu reisen.",
    t6_ml6_2: "Er vergisst,", t6_mr6_2: "seine Hausaufgaben zu machen.",
    t6_ml6_3: "Wir hoffen,", t6_mr6_3: "euch bald zu sehen.",

    // T7 - Nomen mit Infinitiv (Angst, Lust)
    t7_title: "Nomen-Kombis",
    t7_text: "Auch Nomen wie Angst, Lust, Zeit oder Absicht lösen oft ein 'zu' + Infinitiv aus.",
    t7_inst: "Welches Nomen passt hier?",
    t7_h1: "Ich habe ___ , ins Kino zu gehen.",
    t7_sent7: "Ich habe heute keine ___ , Hausaufgaben zu machen.",
    t7_c7_1: "Lust", t7_c7_2: "Angst", t7_c7_3: "Zeit", t7_c7_4: "Weg",

    // T8 - Adjektive mit Infinitiv (schön, schwer)
    t8_title: "Bewertung (Es ist...)",
    t8_text: "Strukturen wie 'Es ist schön/schwer/wichtig...' brauchen einen Infinitiv mit 'zu'.",
    t8_inst: "Markiere den kompletten Infinitivteil!",
    t8_h1: "Suche ab dem Wort 'zu'.",
    t8_w8_1: "Es", t8_w8_2: "ist", t8_w8_3: "wichtig,", t8_w8_4: "täglich", t8_w8_5: "zu", t8_w8_6: "trainieren",

    // T9 - Modalverben vs. Infinitiv (Kein zu!)
    t9_title: "Die 'Zu'-Verbieter",
    t9_text: "Achtung! Nach Modalverben (können, müssen...) und Verben wie sehen, hören, lassen steht KEIN 'zu'!",
    t9_inst: "Darf hier ein 'zu' stehen?",
    t9_h1: "Check das Verb: 'muss' ist ein Modalverb.",
    t9_q9: "Ich muss heute ___ .",
    t9_ans9_1: "lernen", t9_ans9_2: "zu lernen",

    // T10 - Brauchen ... zu (Negation)
    t10_title: "Brauchen + zu",
    t10_text: "Das Verb 'brauchen' benötigt im Sinne von 'müssen' in negativen Sätzen immer ein 'zu'. 'Du brauchst nicht zu kommen.'",
    t10_inst: "Setze den Satz richtig zusammen!",
    t10_h1: "nicht + zu + Infinitiv.",
    t10_f10_1: "Du brauchst", t10_f10_2: "heute", t10_f10_3: "nicht", t10_f10_4: "zu kommen.",

    // T11 - Magnet: Konstruktions-Mix
    t11_title: "Bau-Magnet",
    t11_text: "Párosítsd a kifejezéseket a szerkezetükkel!",
    t11_inst: "Húzd össze a párokat!",
    t11_h1: "um... zu = cél, ohne... zu = hiány.",
    t11_ml11_1: "um ... zu", t11_mr11_1: "Zweck / Ziel",
    t11_ml11_2: "ohne ... zu", t11_mr11_2: "Fehlende Handlung",
    t11_ml11_3: "statt ... zu", t11_mr11_3: "Alternative",

    // T12 - Slingshot: Infinitiv-Check
    t12_title: "Infinitiv-Jäger",
    t12_text: "Schieße auf alle Sätze, die einen korrekten Infinitiv mit 'zu' enthalten!",
    t12_inst: "Triff die richtigen Konstruktionen!",
    t12_h1: "Achte auf 'zu' vor dem Verb.",
    t12_q12: "Was ist richtig?",
    t12_t12_1: "Ich höre auf zu rauchen.", t12_t12_2: "Ich plane zu reisen.", t12_t12_3: "Ich kann zu singen. (Falsch)", t12_t12_4: "Ich sehe dich zu gehen. (Falsch)",

    // T13 - Bucket: Infinitiv oder Modal?
    t13_title: "Zu oder nicht zu?",
    t13_text: "Entscheide, ob der Satz ein 'zu' braucht oder nicht.",
    t13_inst: "Sortiere die Sätze!",
    t13_h1: "Modalverben = kein zu. Rest oft = zu.",
    t13_b13_1: "mit 'zu' 🌿", t13_b13_2: "ohne 'zu' 🚫",
    t13_i13_1: "Es ist Zeit zu gehen.", t13_i13_2: "Ich will gehen.", t13_i13_3: "Lust zu spielen?", t13_i13_4: "Ich kann spielen.",

    // T14 - Stacker: Komplexer Satz
    t14_title: "Satz-Architekt",
    t14_text: "Baue einen Satz mit 'anstatt ... zu'!",
    t14_inst: "Staple die Wörter richtig!",
    t14_h1: "Anstatt + ... + zu + Infinitiv, + Hauptsatz.",
    t14_sw14_1: "Anstatt zu lernen,", t14_sw14_2: "spielte er", t14_sw14_3: "lieber Fußball.",

    // T15 - Finale: Infinitiv-Meister
    t15_title: "Der ultimative Check",
    t15_text: "Wähle die korrekte Form für das elváló ige: 'Es ist schwierig, so früh ___ .'",
    t15_inst: "Welches Wort passt?",
    t15_h1: "auf + zu + stehen.",
    t15_sent15: "Es ist schwierig, so früh ___ .",
    t15_c15_1: "aufzustehen", t15_c15_2: "zu aufstehen", t15_c15_3: "aufstehen zu", t15_c15_4: "aufstehen",
  }
};

export const INFINITIV7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "zu kommen", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "compound-word", word1: "ein-", word2: "zu-schalten", result: "ein-+zu-schalten", color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [0], instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "um", color: "#059669", bg: "#DCFCE7" }, { text: "zu", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "sentence-build", fragments: ["t4_f4_1", "t4_f4_2", "t4_f4_3", "t4_f4_4"], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "easy",
    svg: { type: "word-display", word: "Anstatt", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "📅", label: "planen" }, { emoji: "🧠", label: "vergessen" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_ml6_1", right: "t6_mr6_1" }, { left: "t6_ml6_2", right: "t6_mr6_2" }, { left: "t6_ml6_3", right: "t6_mr6_3" }], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Lust", color: "#059669", bg: "#DCFCE7" }, { text: "Zeit", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t8_w8_4", "t8_w8_5", "t8_w8_6"], correctIndices: [0, 1, 2], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🚫" },
    interactive: { type: "physics-slingshot", question: "t9_inst", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "hard",
    svg: { type: "sentence-display", words: ["nicht", "zu", "kommen"], color: "#10B981" },
    interactive: { type: "sentence-build", fragments: ["t10_f10_1", "t10_f10_2", "t10_f10_3", "t10_f10_4"], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }, { left: "t11_ml11_3", right: "t11_mr11_3" }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🏹" },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: true }, { id: "3", text: "t12_t12_3", isCorrect: false }, { id: "4", text: "t12_t12_4", isCorrect: false }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Zeit haben"], bg: "#DCFCE7", border: "#10B981" }, right: { items: ["wollen"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "z", label: "t13_b13_1" }, { id: "o", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "z" }, { text: "t13_i13_2", bucketId: "o" }, { text: "t13_i13_3", bucketId: "z" }, { text: "t13_i13_4", bucketId: "o" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t14_sw14_1", "t14_sw14_2", "t14_sw14_3"], correctOrder: [0, 1, 2], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["auf", "zu", "stehen"], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  }
];


export const EXAM7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Große K7-Diplom",

    // T1 - Konjunktiv I (Indirekte Rede)
    t1_title: "Indirekte Rede Profi",
    t1_text: "Zeig, dass du die indirekte Rede beherrschst. Er sagt, er ___ (sein) müde.",
    t1_inst: "Welche Form von 'sein' ist Konjunktiv I?",
    t1_h1: "Dritte Person Einzahl.", t1_h2: "er sei.",
    t1_sent1: "Er behauptet, er ___ heute keine Zeit.",
    t1_c1_1: "habe", t1_c1_2: "hat", t1_c1_3: "hätte", t1_c1_4: "habe gehabt",

    // T2 - Passiv Präsens (Werden)
    t2_title: "Passiv-Check",
    t2_text: "Bilde das Passiv im Präsens: 'Die Fenster werden geputzt.'",
    t2_inst: "Wähle das richtige Hilfsverb!",
    t2_h1: "Plural (die Fenster) + werden.",
    t2_sent2: "Die Fehler ___ sofort korrigiert.",
    t2_c2_1: "werden", t2_c2_2: "wird", t2_c2_3: "wurde", t2_c2_4: "sind",

    // T3 - Passiv Perfekt (ist ... worden)
    t3_title: "Vergangenes Passiv",
    t3_text: "Das Perfekt Passiv braucht 'ist' és 'worden'.",
    t3_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t3_h1: "ist + ... + Partizip II + worden.",
    t3_w3_1: "Das Ziel", t3_w3_2: "ist", t3_w3_3: "erreicht", t3_w3_4: "worden.",

    // T4 - Passiv + Modalverb (muss)
    t4_title: "Modal-Passiv Mix",
    t4_text: "Kombiniere Modalverb und Passiv: 'Es muss gemacht werden.'",
    t4_inst: "Welches Verb steht ganz am Ende?",
    t4_h1: "Das Hilfsverb 'werden' im Infinitiv.",
    t4_q4: "Das Auto muss repariert ___ .",
    t4_ans4_1: "werden", t4_ans4_2: "wird", t4_ans4_3: "worden", t4_ans4_4: "geworden",

    // T5 - Stilmittel (Metapher)
    t5_title: "Sprachbilder erkennen",
    t5_text: "Erkennst du die Metapher? 'Du bist ein Fels in der Brandung.'",
    t5_inst: "Schieße auf alle Metaphern!",
    t5_h1: "Suche nach Wörtern in übertragener Bedeutung.",
    t5_q5: "Was ist eine Metapher?",
    t5_t5_1: "Warteschlange", t5_t5_2: "Rabenmutter", t5_t5_3: "Schlau wie ein Fuchs (Vergleich)", t5_t5_4: "Die Sonne scheint (Real)",

    // T6 - Kausalsatz (weil / denn)
    t6_title: "Logik-Check: Grund",
    t6_text: "Nutze 'weil' (Verb Ende) vagy 'denn' (Pos. 0).",
    t6_inst: "Welches Wort passt hier (Verb steht auf Pos. 2)?",
    t6_h1: "denn + ich + habe (Verb Pos 2).",
    t6_sent6: "Ich esse, ___ ich habe Hunger.",
    t6_c6_1: "denn", t6_c6_2: "weil", t6_c6_3: "da", t6_c6_4: "sofern",

    // T7 - Konditionalsatz (wenn / falls)
    t7_title: "Bedingungs-Profi",
    t7_text: "Wähle die richtige Einleitung für die Bedingung.",
    t7_inst: "Welches Wort passt am besten?",
    t7_h1: "Falls/Wenn es regnet...",
    t7_sent7: "___ du Hilfe brauchst, ruf mich an.",
    t7_c7_1: "Wenn", t7_c7_2: "Obwohl", t7_c7_3: "Damit", t7_c7_4: "Weil",

    // T8 - Konzessivsatz (obwohl)
    t8_title: "Hindernis-Lauf",
    t8_text: "Obwohl (Nebensatz) vagy Trotzdem (Hauptsatz)?",
    t8_inst: "Sortiere die Sätze richtig!",
    t8_h1: "Obwohl + Verb am Ende. Trotzdem + Verb Pos. 2.",
    t8_b8_1: "obwohl (NS)", t8_b8_2: "trotzdem (HS)",
    t8_i8_1: "..., obwohl er krank ist.", t8_i8_2: "Er ist krank; trotzdem kommt er.",

    // T9 - Finalsatz (damit / um... zu)
    t9_title: "Ziel-Gerade",
    t9_text: "Subjekt gleich? -> um... zu. Subjekt verschieden? -> damit.",
    t9_inst: "Welche Konstruktion ist hier richtig (Subjekt: Ich / Er)?",
    t9_h1: "Zwei Personen -> damit.",
    t9_sent9: "Ich schreibe ihm, ___ er Bescheid weiß.",
    t9_c9_1: "damit", t9_c9_2: "um ... zu", t9_c9_3: "weil", t9_c9_4: "obwohl",

    // T10 - Temporalsatz (als / wenn)
    t10_title: "Zeit-Check: Als oder Wenn?",
    t10_text: "Einmal in der Vergangenheit? -> als. Immer oder Gegenwart? -> wenn.",
    t10_inst: "Wähle das richtige Zeitwort!",
    t10_h1: "Einmaliges Ereignis (Geburtstag).",
    t10_sent10: "___ ich 10 Jahre alt wurde, bekam ich ein Rad.",
    t10_c10_1: "Als", t10_c10_2: "Wenn", t10_c10_3: "Seitdem", t10_c10_4: "Nachdem",

    // T11 - Temporalsatz (nachdem + PQP)
    t11_title: "Zeitformen-Meister",
    t11_text: "Nachdem (PQP) + Präteritum. 'Nachdem er gegessen hatte, ging er.'",
    t11_inst: "Staple die Verben in der richtigen Zeitfolge!",
    t11_h1: "hatte (PQP) -> ging (Prät).",
    t12_sw11_1: "gelernt hatte,", t12_sw11_2: "machte er Pause.",

    // T12 - Infinitiv (zu + Inf)
    t12_title: "Infinitiv-Architekt",
    t12_text: "Baue den Satz mit 'zu' + Infinitiv.",
    t12_inst: "Setze den Baustein richtig!",
    t12_h1: "zu + sehen.",
    t12_sent12: "Ich hoffe, dich bald wieder ___ ___ .",
    t12_c12_1: "zu sehen", t12_c12_2: "sehen zu", t12_c12_3: "zu gesehen", t12_c12_4: "sehen",

    // T13 - Infinitiv (Trennbare Verben)
    t13_title: "Die Trennbaren (zu)",
    t13_text: "Wo steht 'zu' bei 'aufmachen'?",
    t13_inst: "Markiere das Wort 'aufzumachen'!",
    t13_h1: "Vorsilbe + zu + Verb.",
    t13_w13_1: "Es", t13_w13_2: "ist", t13_w13_3: "Zeit,", t13_w13_4: "das", t13_w13_5: "Fenster", t13_w13_6: "aufzumachen",

    // T14 - Magnet: All-Mix
    t14_title: "Diplom-Magnet",
    t14_text: "Verbinde die grammatischen Begriffe mit den Beispielen!",
    t14_inst: "Párosítsd a fogalmakat a példákkal!",
    t14_h1: "Passiv = wird, Konjunktiv = sei, Metapher = Bild.",
    t14_ml14_1: "Passiv", t14_mr14_1: "wird gebaut",
    t14_ml14_2: "Konjunktiv I", t14_mr14_2: "er sei",
    t14_ml14_3: "Metapher", t14_mr14_3: "Rabenmutter",

    // T15 - Finale Slingshot
    t15_title: "Astro-Diplom Finale",
    t15_text: "Triff die finale Entscheidung: Welcher Satz ist grammatisch perfekt?",
    t15_inst: "Schieße auf den fehlerfreien Satz!",
    t15_h1: "Achte auf Passiv + Modalverb-Struktur.",
    t15_q15: "Welcher Satz ist korrekt?",
    t15_t15_1: "Das muss gemacht werden.", t15_t15_2: "Er sagt, er ist müde. (Falsch: sei)", t15_t15_3: "Wenn es regnet, ich bleibe zu Hause. (Falsch: bleibe ich)",
  }
};

export const EXAM7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "hard",
    svg: { type: "word-display", word: "sei / habe", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "hard",
    svg: { type: "sentence-display", words: ["ist", "ge-", "worden"], color: "#14B8A6" },
    interactive: { type: "word-order", words: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], correctOrder: [0, 1, 2, 3], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "muss", word2: "werden", result: "muss+werden", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_ans4_1", isCorrect: true }, { id: "2", text: "t4_ans4_2", isCorrect: false }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎭", label: "Metapher" }] },
    interactive: { type: "physics-slingshot", question: "t5_q5", targets: [{ id: "1", text: "t5_t5_1", isCorrect: true }, { id: "2", text: "t5_t5_2", isCorrect: true }, { id: "3", text: "t5_t5_3", isCorrect: false }, { id: "4", text: "t5_t5_4", isCorrect: false }], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "denn", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "easy",
    svg: { type: "word-display", word: "Wenn", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["obwohl"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["trotzdem"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ns", label: "t8_b8_1" }, { id: "hs", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "ns" }, { text: "t8_i8_2", bucketId: "hs" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🎯" },
    interactive: { type: "gap-fill", sentence: "t9_sent9", choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"], correctIndex: 0, instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-display", word: "Als", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🧱" },
    interactive: { type: "physics-stacker", words: ["t12_sw11_1", "t12_sw11_2"], correctOrder: [0, 1], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "word-display", word: "zu sehen", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "📝", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5", "t13_w13_6"], correctIndices: [5], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "simple-icon", icon: "🧲" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t14_ml14_1", right: "t14_mr14_1" }, { left: "t14_ml14_2", right: "t14_mr14_2" }, { left: "t14_ml14_3", right: "t14_mr14_3" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "simple-icon", icon: "🎓" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  }
];
