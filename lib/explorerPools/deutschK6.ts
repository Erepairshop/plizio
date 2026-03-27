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

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Aktiv & Passiv (🔄, #14B8A6)
// Thema: Wer handelt? (Aktiv) vs. Was geschieht? (Passiv)
// ─────────────────────────────────────────────────────────────────────────────

export const PASSIV6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Aktiv-Passiv-Zentrale",

    // T1: Aktiv vs Passiv (Unterschied)
    t1_title: "Wer ist der Star?",
    t1_text: "Im AKTIV ist das Subjekt der Täter (Wer macht es?). Im PASSIV ist die Handlung der Star (Was passiert?).",
    t1_inst: "Ist dieser Satz Aktiv oder Passiv?",
    t1_h1: "Frage: Tut das Subjekt selbst etwas?",
    t1_h2: "Aktiv: Der Koch kocht. Passiv: Die Suppe wird gekocht.",
    t1_b1: "Aktiv 🏃", t1_b2: "Passiv 📦",
    t1_i1: "Lukas liest ein Buch.", t1_i2: "Das Buch wird gelesen.",

    // T2: Bildung Präsens Passiv
    t2_title: "Passiv-Bauplan",
    t2_text: "Passiv bauen wir mit 'werden' (gebeugt) und dem Partizip II am Ende.",
    t2_inst: "Welche Form von 'werden' passt hier?",
    t2_h1: "Das Subjekt ist 'Die Briefe' (Plural).",
    t2_h2: "Plural braucht 'werden'.",
    t2_sent: "Die Briefe ___ heute geschrieben.",
    t2_c1: "werden", t2_c2: "wird", t2_c3: "werde", t2_c4: "werdet",

    // T3: Von-Ergänzung
    t3_title: "Wer hat's getan?",
    t3_text: "Auch im Passiv können wir den Täter nennen – mit der Präposition 'von' + Dativ.",
    t3_inst: "Finde die 'von'-Ergänzung im Satz!",
    t3_h1: "Suche nach 'von' und dem Dativ.",
    t3_h2: "'von dem Lehrer' ist die Ergänzung.",
    t3_w3_1: "Die Prüfung", t3_w3_2: "wird", t3_w3_3: "von dem Lehrer", t3_w3_4: "korrigiert", t3_w3_5: ".",

    // T4: Präteritum Passiv
    t4_title: "Passiv in der Vergangenheit",
    t4_text: "Für das Präteritum Passiv nutzen wir 'wurde' statt 'wird'.",
    t4_inst: "Wähle die richtige Präteritum-Passiv-Form!",
    t4_h1: "Es war gestern (Einzahl).",
    t4_h2: "Das Auto 'wurde' repariert.",
    t4_sent_p: "Gestern ___ das Tor geschlossen.",
    t4_cp1: "wurde", t4_cp2: "wird", t4_cp3: "war", t4_cp4: "worden",

    // T5: Slingshot: Passiv-Check
    t5_title: "Passiv-Schleuder",
    t5_text: "Schieße nur auf Sätze, die im PASSIV stehen (werden + Partizip II).",
    t5_inst: "Triff die Passiv-Ziele!",
    t5_h1: "Suche nach 'wird' oder 'werden'.",
    t5_h2: "Das Zimmer wird geputzt. Die Blumen werden gegossen.",
    t5_q: "Welche Sätze sind Passiv?",
    t5_t1: "Der Film wird geguckt.", t5_t2: "Der Apfel wird gegessen.", t5_t3: "Ich esse einen Apfel.", t5_t4: "Sie guckt den Film.",

    // T6: Umformung (Aktiv -> Passiv)
    t6_title: "Satz-Verwandler",
    t6_text: "Das Akkusativ-Objekt des Aktivsatzes wird zum Subjekt des Passivsatzes.",
    t6_inst: "Bringe den Passivsatz in die richtige Reihenfolge!",
    t6_h1: "Aktiv: Der Junge (S) tritt den Ball (O).",
    t6_h2: "Passiv: Der Ball (S) wird getreten (P).",
    t6_o1: "Der Ball", t6_o2: "wird", t6_o3: "getreten.",

    // T7: Magnet: Aktiv/Passiv Paare
    t7_title: "Paar-Magnet",
    t7_text: "Finde das passende Aktiv-Passiv-Paar!",
    t7_inst: "Ziehe die Paare zusammen!",
    t7_h1: "Er kocht -> Es wird gekocht.",
    t7_ml1: "Er baut ein Haus.", t7_mr1: "Ein Haus wird gebaut.",
    t7_ml2: "Sie malt ein Bild.", t7_mr2: "Ein Bild wird gemalt.",
    t7_ml3: "Wir hören Musik.", t7_mr3: "Musik wird gehört.",

    // T8: Partizip II im Passiv
    t8_title: "Das richtige Partizip",
    t8_text: "Im Passiv brauchen wir immer das Partizip II am Ende.",
    t8_inst: "Welches Partizip passt?",
    t8_h1: "Was ist das Partizip II von 'sehen'?",
    t8_h2: "Es heißt 'gesehen'.",
    t8_sent_part: "Du wirst heute im Fernsehen ___.",
    t8_cpart1: "gesehen", t8_cpart2: "gesehenen", t8_cpart3: "gesieht", t8_cpart4: "seht",

    // T9: Stacker: Passiv-Struktur
    t9_title: "Passiv-Architekt",
    t9_text: "Baue die perfekte Passiv-Struktur!",
    t9_inst: "Staple die Bausteine korrekt!",
    t9_h1: "Subjekt -> werden -> Partizip II.",
    t9_sw1: "Das Fenster", t9_sw2: "wird", t9_sw3: "geputzt.",
  }
};

export const PASSIV6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["t1_i1"], bg: "#DBEAFE", border: "#1D4ED8" }, right: { items: ["t1_i2"], bg: "#FEE2E2", border: "#B91C1C" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ak", label: "t1_b1" }, { id: "pa", label: "t1_b2" }], items: [{ text: "t1_i1", bucketId: "ak" }, { text: "t1_i2", bucketId: "pa" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#14B8A6", bg: "#F0FDFA" }, { text: "Partizip II", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-flow", steps: ["von", "dem", "Lehrer"], color: "#14B8A6" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4", "t3_w3_5"], correctIndices: [2], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-card", word: "wurde", color: "#14B8A6" },
    interactive: { type: "gap-fill", sentence: "t4_sent_p", choices: ["t4_cp1", "t4_cp2", "t4_cp3", "t4_cp4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Passiv", bg: "#F0FDFA" },
    interactive: { type: "physics-slingshot", question: "t5_q", targets: [{ id: "1", text: "t5_t1", isCorrect: true }, { id: "2", text: "t5_t2", isCorrect: true }, { id: "3", text: "t5_t3", isCorrect: false }, { id: "4", text: "t5_t4", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "comparison-table", rows: [["Aktiv", "Junge"], ["Passiv", "Ball"]], color: "#14B8A6" },
    interactive: { type: "sentence-build", fragments: ["t6_o1", "t6_o2", "t6_o3"], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Magnet", bg: "#F0FDFA" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "gesehen", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent_part", choices: ["t8_cpart1", "t8_cpart2", "t8_cpart3", "t8_cpart4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stack", bg: "#F0FDFA" },
    interactive: { type: "physics-stacker", words: ["t9_sw1", "t9_sw2", "t9_sw3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "passiv" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Konjunktiv II (🌀, #6366F1)
// Thema: Wünsche, Träume, Irrealität & Höflichkeit
// ─────────────────────────────────────────────────────────────────────────────

export const KONJ2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Traum-Zentrale (Konjunktiv II)",

    // T1: Bedeutung (Wünsche)
    t1_title: "Träume und Wünsche",
    t1_text: "Den Konjunktiv II nutzen wir für Dinge, die nicht real sind, aber wir sie uns wünschen.",
    t1_inst: "Was ist ein Wunsch (Konjunktiv II)?",
    t1_h1: "Suche nach 'würde' oder 'hätte'.",
    t1_h2: "Ich 'hätte' gern Urlaub.",
    t1_w1: "Ich bin da.", t1_w2: "Ich hätte gern Eis.",

    // T2: Bildung mit 'würde'
    t2_title: "Die 'würde'-Form",
    t2_text: "Die meisten Verben bilden den Konjunktiv II mit 'würde' + Infinitiv.",
    t2_inst: "Baue den Wunsch-Satz!",
    t2_h1: "würde + fliegen.",
    t2_h2: "Ich würde gern fliegen.",
    t2_f2_1: "Ich", t2_f2_2: "würde", t2_f2_3: "gern", t2_f2_4: "fliegen.",

    // T3: hätte und wäre
    t3_title: "hätte und wäre",
    t3_text: "Haben und Sein haben eigene Formen: hätte (von haben) und wäre (von sein).",
    t3_inst: "Welches Wort passt?",
    t3_h1: "Wenn man ein Vogel ist (sein).",
    t3_h2: "Wenn ich ein Vogel 'wäre'...",
    t3_sent_hw: "Wenn ich reich ___ , kaufte ich ein Schloss.",
    t3_chw1: "wäre", t3_chw2: "bin", t3_chw3: "hätte", t3_chw4: "war",

    // T4: Höflichkeit
    t4_title: "Bitte ganz höflich!",
    t4_text: "Konjunktiv II macht Bitten viel freundlicher. 'Gib mir das!' -> 'Könntest du mir das geben?'",
    t4_inst: "Mache den Satz höflicher!",
    t4_h1: "Benutze 'könntest'.",
    t4_h2: "Könntest du mir helfen?",
    t4_sent_h: "___ du mir bitte helfen?",
    t4_chh1: "Könntest", t4_chh2: "Kannst", t4_chh3: "Wirst", t4_chh4: "Musst",

    // T5: Irreale Bedingungen
    t5_title: "Was wäre, wenn...?",
    t5_text: "Wir nutzen 'Wenn'-Sätze für irreale Situationen.",
    t5_inst: "Welche Konjunktiv-Form fehlt hier?",
    t5_h1: "Das Hilfsverb 'haben' im Konjunktiv II.",
    t5_h2: "Wenn ich Zeit 'hätte'...",
    t5_sent_wenn: "Wenn ich Zeit ___ , käme ich vorbei.",
    t5_cw1: "hätte", t5_cw2: "habe", t5_cw3: "hätte gehabt", t5_cw4: "hat",

    // T6: Stacker: Wunsch-Satz
    t6_title: "Wunsch-Stapler",
    t6_text: "Baue einen kompletten Wunsch-Satz!",
    t6_inst: "Staple die Wörter richtig!",
    t6_h1: "Wenn ich... wäre... dann...",
    t6_sw6_1: "Wenn ich", t6_sw6_2: "ein Vogel", t6_sw6_3: "wäre.",

    // T7: Slingshot: Konjunktiv jagen
    t7_title: "Konjunktiv-Jäger",
    t7_text: "Schieße nur auf Konjunktiv II Formen (hätte, wäre, würde, könnte).",
    t7_inst: "Triff die Träume!",
    t7_h1: "Achte auf Umlaute (ä).",
    t7_h2: "hätte, wäre, müsste, würde.",
    t7_q: "Wo ist der Konjunktiv II?",
    t7_t1: "hätte", t7_t2: "wäre", t7_t3: "hat", t7_t4: "ist",

    // T8: Realität vs. Wunsch
    t8_title: "Realität oder Traum?",
    t8_text: "Unterscheide zwischen echten Fakten (Indikativ) und Träumen (Konjunktiv II).",
    t8_inst: "Sortiere die Sätze!",
    t8_h1: "Träume nutzen 'würde' oder 'hätte'.",
    t8_h2: "Ich bin krank (Real). Ich wäre gern gesund (Traum).",
    t8_b8_1: "Realität 🏠", t8_b8_2: "Traum 🌀",
    t8_i8_1: "Ich habe ein Auto.", t8_i8_2: "Ich hätte gern ein Auto.",

    // T9: Modalverben im Konjunktiv II
    t9_title: "Könnte, müsste, sollte",
    t9_text: "Auch Modalverben haben Konjunktiv II Formen: könnte, müsste, sollte, dürfte.",
    t9_inst: "Welches Modalverb passt hier (Möglichkeit)?",
    t9_h1: "Es ist möglich (können).",
    t9_h2: "Wir 'könnten' gewinnen.",
    t9_sent_mod: "Wir ___ gewinnen, wenn wir trainieren.",
    t9_cm1: "könnten", t9_cm2: "können", t9_cm3: "konnten", t9_cm4: "müssen",
  }
};

export const KONJ2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["t1_w1"], bg: "#F1F5F9", border: "#64748B" }, right: { items: ["t1_w2"], bg: "#EEF2FF", border: "#6366F1" } },
    interactive: { type: "highlight-text", tokens: ["t1_w1", "t1_w2"], correctIndices: [1], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "sentence-flow", steps: ["würde", "gern", "fliegen"], color: "#6366F1" },
    interactive: { type: "sentence-build", fragments: ["t2_f2_1", "t2_f2_2", "t2_f2_3", "t2_f2_4"], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-card", word: "wäre", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t3_sent_hw", choices: ["t3_chw1", "t3_chw2", "t3_chw3", "t3_chw4"], correctIndex: 0, instruction: "t2_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "Könntest du...?", color: "#6366F1", bg: "#EEF2FF" }] },
    interactive: { type: "gap-fill", sentence: "t4_sent_h", choices: ["t4_chh1", "t4_chh2", "t4_chh3", "t4_chh4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-card", word: "hätte", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t5_sent_wenn", choices: ["t5_cw1", "t5_cw2", "t5_cw3", "t5_cw4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Wunsch", bg: "#EEF2FF" },
    interactive: { type: "physics-stacker", words: ["t6_sw6_1", "t6_sw6_2", "t6_sw6_3"], correctOrder: [0, 1, 2], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Traum", bg: "#EEF2FF" },
    interactive: { type: "physics-slingshot", question: "t7_q", targets: [{ id: "1", text: "t7_t1", isCorrect: true }, { id: "2", text: "t7_t2", isCorrect: true }, { id: "3", text: "t7_t3", isCorrect: false }, { id: "4", text: "t7_t4", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["t8_i8_1"], bg: "#F1F5F9", border: "#64748B" }, right: { items: ["t8_i8_2"], bg: "#EEF2FF", border: "#6366F1" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "re", label: "t8_b8_1" }, { id: "tr", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "re" }, { text: "t8_i8_2", bucketId: "tr" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "könnten", color: "#6366F1", bg: "#EEF2FF" }] },
    interactive: { type: "gap-fill", sentence: "t9_sent_mod", choices: ["t9_cm1", "t9_cm2", "t9_cm3", "t9_cm4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "konjunktiv2" }
  }
];



// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Infinitiv mit zu (∞, #10B981)
// Thema: Sätze verbinden, Um/Ohne/Anstatt... zu, Trennbare Verben
// ─────────────────────────────────────────────────────────────────────────────

export const INFINITIV6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv-Insel (zu + ∞)",

    // T1: Basis (Lust haben)
    t1_title: "Lust auf Infinitiv?",
    t1_text: "Den Infinitiv mit 'zu' nutzen wir oft nach Ausdrücken wie 'Lust haben' oder 'es ist wichtig'.",
    t1_inst: "Setze das 'zu' an die richtige Stelle!",
    t1_h1: "Das 'zu' steht direkt vor dem Infinitiv am Ende.",
    t1_h2: "Ich habe Lust, Eis 'zu' essen.",
    t1_sent: "Ich habe keine Lust, heute ___ ___ .",
    t1_c1: "zu lernen", t1_c2: "lernen zu", t1_c3: "lernen", t1_c4: "zu gelernt",

    // T2: Trennbare Verben (aufzustehen)
    t2_title: "Die Trennbaren (auf-zu-stehen)",
    t2_text: "Bei trennbaren Verben schleicht sich das 'zu' zwischen das Präfix und das Verb.",
    t2_inst: "Welche Form ist korrekt?",
    t2_h1: "Präfix + zu + Verb.",
    t2_h2: "auf + zu + stehen = aufzustehen.",
    t2_w2_1: "einzukaufen", t2_w2_2: "zueinkaufen", t2_w2_3: "einkaufenzu", t2_w2_4: "eingekauft",

    // T3: Um ... zu (Absicht)
    t3_title: "Wozu? (Um ... zu)",
    t3_text: "Wir nutzen 'um ... zu', wenn wir eine Absicht oder ein Ziel ausdrücken.",
    t3_inst: "Baue den Zielsatz zusammen!",
    t3_h1: "Ich lerne viel (Hauptsatz), um gute Noten zu bekommen.",
    t3_h2: "um + ... + zu + Infinitiv.",
    t3_f3_1: "Ich lerne,", t3_f3_2: "um", t3_f3_3: "gute Noten", t3_f3_4: "zu bekommen.",

    // T4: Ohne ... zu
    t4_title: "Ohne ... zu",
    t4_text: "Wenn man etwas tut, ohne eine andere Sache dabei zu machen.",
    t4_inst: "Welches Wort fehlt hier?",
    t4_h1: "Er geht weg, 'ohne' tschüss zu sagen.",
    t4_h2: "Wähle 'ohne'.",
    t4_sent_ohne: "Er ging, ___ ein Wort ___ sagen.",
    t4_co1: "ohne / zu", t4_co2: "um / zu", t4_co3: "statt / zu", t4_co4: "ohne / -",

    // T5: Anstatt ... zu
    t5_title: "Anstatt ... zu",
    t5_text: "Wenn man eine Sache macht, anstatt eine andere (eigentlich geplante) zu tun.",
    t5_inst: "Setze die Konjunktion richtig ein!",
    t5_h1: "Anstatt zu lernen, spielt er.",
    t5_h2: "Anstatt ... zu.",
    t5_sent_statt: "___ zu schlafen, ___ er fern.",
    t5_cs1: "Anstatt / sieht", t5_cs2: "Um / sieht", t5_cs3: "Ohne / sieht", t5_cs4: "Weil / sieht",

    // T6: Slingshot: Infinitiv-Check
    t6_title: "Infinitiv-Jäger",
    t6_text: "Schieße nur auf Sätze, die einen korrekten Infinitiv mit 'zu' enthalten!",
    t6_inst: "Triff die richtigen Sätze!",
    t6_h1: "Achte auf das 'zu' vor dem Verb am Ende.",
    t6_h2: "... zu singen, ... aufzuhören.",
    t6_q: "Welche Sätze haben einen Infinitiv mit zu?",
    t6_t1: "Ich hoffe, dich zu sehen.", t6_t2: "Es ist Zeit, zu gehen.", t6_t3: "Ich will gehen.", t6_t4: "Du musst lernen.",

    // T7: Magnet: Phrasen-Match
    t7_title: "Phrasen-Magnet",
    t7_text: "Verbinde den Hauptsatz mit der passenden Infinitiv-Ergänzung!",
    t7_inst: "Húzd össze a párokat!",
    t7_h1: "Lust haben -> etwas zu tun.",
    t7_ml1: "Ich habe Lust,", t7_mr1: "Fußball zu spielen.",
    t7_ml2: "Es ist gesund,", t7_mr2: "Obst zu essen.",
    t7_ml3: "Vergiss nicht,", t7_mr3: "mich anzurufen.",

    // T8: Stacker: Satzbau
    t8_title: "Infinitiv-Stapler",
    t8_text: "Baue einen Satz mit 'um ... zu'!",
    t8_inst: "Staple die Wörter in der richtigen Reihenfolge!",
    t8_h1: "Ich gehe in den Park (HS), um Fußball zu spielen.",
    t8_sw8_1: "Ich gehe,", t8_sw8_2: "um Sport", t8_sw8_3: "zu treiben.",

    // T9: Kein 'zu' bei Modalverben
    t9_title: "Vorsicht: Die Ausnahmen!",
    t9_text: "Nach Modalverben (können, müssen, wollen...) steht der Infinitiv OHNE 'zu'!",
    t9_inst: "Darf hier ein 'zu' stehen?",
    t9_h1: "Check das Verb: 'kann' ist ein Modalverb.",
    t9_h2: "Nach Modalverben kommt KEIN 'zu'.",
    t9_sent_mod: "Ich kann sehr schnell ___ .",
    t9_cm1: "laufen", t9_cm2: "zu laufen", t9_cm3: "gelaufen", t9_cm4: "lief",
  }
};

export const INFINITIV6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "zu essen", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-card", word: "auf-zu-stehen", color: "#10B981" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [0], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "verben_k3" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-flow", steps: ["um", "...", "zu"], color: "#10B981" },
    interactive: { type: "sentence-build", fragments: ["t3_f3_1", "t3_f3_2", "t3_f3_3", "t3_f3_4"], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-card", word: "ohne... zu", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t4_sent_ohne", choices: ["t4_co1", "t4_co2", "t4_co3", "t4_co4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "Anstatt zu...", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t5_sent_statt", choices: ["t5_cs1", "t5_cs2", "t5_cs3", "t5_cs4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Infinitiv", bg: "#DCFCE7" },
    interactive: { type: "physics-slingshot", question: "t6_q", targets: [{ id: "1", text: "t6_t1", isCorrect: true }, { id: "2", text: "t6_t2", isCorrect: true }, { id: "3", text: "t6_t3", isCorrect: false }, { id: "4", text: "t6_t4", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Magnet", bg: "#DCFCE7" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stack", bg: "#DCFCE7" },
    interactive: { type: "physics-stacker", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["können"], bg: "#F1F5F9", border: "#64748B" }, right: { items: ["laufen"], bg: "#DCFCE7", border: "#10B981" } },
    interactive: { type: "gap-fill", sentence: "t9_sent_mod", choices: ["t9_cm1", "t9_cm2", "t9_cm3", "t9_cm4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "verben_k3" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Synonyme & Antonyme (🔀, #EF4444)
// Thema: Wortschatz erweitern, Gegenteile & Nuancen
// ─────────────────────────────────────────────────────────────────────────────

export const SYN_ANT_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Wechsel (Synonyme & Antonyme)",

    // T1: Synonyme (Gleiche Bedeutung)
    t1_title: "Wort-Zwillinge",
    t1_text: "Synonyme sind Wörter, die fast das Gleiche bedeuten, wie 'rennen' und 'laufen'.",
    t1_inst: "Verbinde die passenden Synonyme!",
    t1_h1: "sagen -> sprechen, groß -> riesig.",
    t1_h2: "Finde die Wort-Partner.",
    t1_l1: "laufen", t1_r1: "rennen",
    t1_l2: "klug", t1_r2: "intelligent",
    t1_l3: "starten", t1_r3: "beginnen",

    // T2: Antonyme (Gegenteile)
    t2_title: "Wort-Gegner",
    t2_text: "Antonyme sind Wörter mit der gegensätzlichen Bedeutung, wie 'hell' und 'dunkel'.",
    t2_inst: "Welches Wort ist das Gegenteil von 'stark'?",
    t2_h1: "Das Gegenteil von Kraft haben.",
    t2_h2: "Es ist 'schwach'.",
    t2_sent_ant: "Er ist nicht stark, sondern ___ .",
    t2_ca1: "schwach", t2_ca2: "dick", t2_ca3: "groß", t2_ca4: "schnell",

    // T3: Magnet: Synonym-Paare
    t3_title: "Synonym-Magnet",
    t3_text: "Ziehe die passenden Wort-Paare zusammen!",
    t3_inst: "Bilde Synonym-Paare!",
    t3_h1: "lecker -> schmackhaft.",
    t3_h2: "traurig -> betrübt.",
    t3_ml3_1: "lecker", t3_mr3_1: "schmackhaft",
    t3_ml3_2: "traurig", t3_mr3_2: "betrübt",
    t3_ml3_3: "froh", t3_mr3_3: "glücklich",

    // T4: Bucket: Sortiere Syn/Ant
    t4_title: "Wort-Sortierer",
    t4_text: "Entscheide, ob das Wortpaar Synonyme vagy Antonyme sind.",
    t4_inst: "Sortiere die Paare!",
    t4_h1: "kalt/heiß = Antonym. kalt/kühl = Synonym.",
    t4_b1: "Synonyme ♊", t4_b2: "Antonyme ↔️",
    t4_i1: "kalt / heiß", t4_i2: "laufen / rennen", t4_i3: "groß / klein", t4_i4: "klug / schlau",

    // T5: Nuancen (warm -> heiß)
    t5_title: "Wort-Treppe",
    t5_text: "Manche Synonyme sind stärker vagy schwächer. Ordne sie nach ihrer Intensität!",
    t5_inst: "Staple die Wörter von 'warm' bis 'kochend'!",
    t5_h1: "warm ist am schwächsten, kochend am stärksten.",
    t5_h2: "warm -> heiß -> kochend.",
    t5_sw5_1: "warm", t5_sw5_2: "heiß", t5_sw5_3: "kochend",

    // T6: Contextual Gap-fill
    t6_title: "Das passende Wort",
    t6_text: "Wähle das Synonym, das am besten in den Satz passt.",
    t6_inst: "Welches Wort klingt hier am besten?",
    t6_h1: "Er 'rennt' den Berg hinauf (sehr schnell).",
    t6_h2: "Wähle 'rennt'.",
    t6_sent_ctx: "Der Sportler ___ so schnell er kann.",
    t6_ctx1: "rennt", t6_ctx2: "geht", t6_ctx3: "schleicht", t6_ctx4: "wandert",

    // T7: Slingshot: Finde das Synonym
    t7_title: "Szinonima-vadász",
    t7_text: "Schieße auf das richtige Synonym für 'hübsch'!",
    t7_inst: "Triff das Synonym!",
    t7_h1: "hübsch -> schön.",
    t7_h2: "Suche nach 'schön'.",
    t7_q_syn: "Was ist ein Synonym für 'hübsch'?",
    t7_t1: "schön", t7_t2: "hässlich", t7_t3: "groß", t7_t4: "alt",

    // T8: Antonym-Highlight
    t8_title: "Gegenteil-Suche",
    t8_text: "Findest du das Antonym zu 'leise' in diesem Satz?",
    t8_inst: "Markiere das Antonym!",
    t8_h1: "Was ist das Gegenteil von leise?",
    t8_h2: "Das Wort ist 'laut'.",
    t8_w8_1: "Die", t8_w8_2: "Musik", t8_w8_3: "ist", t8_w8_4: "sehr", t8_w8_5: "laut",

    // T9: Comparison Table SVG
    t9_title: "Wort-Vergleich",
    t9_text: "Hier siehst du, wie Synonyme und Antonyme im Vergleich funktionieren.",
    t9_inst: "Verbinde die passenden Gegenteile!",
    t9_h1: "neu -> alt, hell -> dunkel.",
    t9_h2: "Suche die Gegenspieler.",
    t9_ml9_1: "neu", t9_mr9_1: "alt",
    t9_ml9_2: "hell", t9_mr9_2: "dunkel",
    t9_ml9_3: "hart", t9_mr9_3: "weich",
  }
};

export const SYN_ANT_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "laufen = rennen", color: "#B91C1C", bg: "#FEE2E2" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-card", word: "stark ↔ schwach", color: "#EF4444" },
    interactive: { type: "gap-fill", sentence: "t2_sent_ant", choices: ["t2_ca1", "t2_ca2", "t2_ca3", "t2_ca4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "antonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Synonyme", bg: "#FEE2E2" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t3_ml3_1", right: "t3_mr3_1" }, { left: "t3_ml3_2", right: "t3_mr3_2" }, { left: "t3_ml3_3", right: "t3_mr3_3" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["rennen"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["kalt/heiß"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "syn", label: "t4_b1" }, { id: "ant", label: "t4_b2" }], items: [{ text: "t4_i1", bucketId: "ant" }, { text: "t4_i2", bucketId: "syn" }, { text: "t4_i3", bucketId: "ant" }, { text: "t4_i4", bucketId: "syn" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Intensität", bg: "#FEE2E2" },
    interactive: { type: "physics-stacker", words: ["t5_sw5_1", "t5_sw5_2", "t5_sw5_3"], correctOrder: [0, 1, 2], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-flow", steps: ["Der Sportler", "rennt", "schnell"], color: "#EF4444" },
    interactive: { type: "gap-fill", sentence: "t6_sent_ctx", choices: ["t6_ctx1", "t6_ctx2", "t6_ctx3", "t6_ctx4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Synonym", bg: "#FEE2E2" },
    interactive: { type: "physics-slingshot", question: "t7_q_syn", targets: [{ id: "1", text: "t7_t1", isCorrect: true }, { id: "2", text: "t7_t2", isCorrect: false }, { id: "3", text: "t7_t3", isCorrect: false }, { id: "4", text: "t7_t4", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "sentence-display", words: ["sehr", "laut"], color: "#EF4444" },
    interactive: { type: "highlight-text", tokens: ["t8_w8_1", "t8_w8_2", "t8_w8_3", "t8_w8_4", "t8_w8_5"], correctIndices: [4], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "antonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "comparison-table", rows: [["neu", "alt"], ["hell", "dunkel"]], color: "#EF4444" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "antonyme" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Fremdwörter (🌐, #A855F7)
// Thema: Griechische/Lateinische Wurzeln, Rechtschreibung (ph, th, rh, ch)
// ─────────────────────────────────────────────────────────────────────────────

export const FREMD5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Welt der Fremdwörter",

    // T1: ph-Schreibung (Griechisch)
    t1_title: "Das griechische 'ph'",
    t1_text: "Viele Wörter aus dem Griechischen schreiben wir mit 'ph' statt 'f'.",
    t1_inst: "Welches Wort ist richtig geschrieben?",
    t1_h1: "Denk an das 'ph' in Philosophie.", t1_h2: "Alphabet schreibt man mit ph.",
    t1_w1: "Alfabet", t1_w2: "Alphabet", t1_w3: "Alfabeth", t1_w4: "Alphabeth",

    // T2: th-Schreibung
    t2_title: "Das stumme 'h' bei 't'",
    t2_text: "In Fremdwörtern steht oft ein 'h' nach dem 't', das man nicht hört (z.B. Theater).",
    t2_inst: "Finde das korrekt geschriebene Wort!",
    t2_h1: "Ein Thema hat immer ein h.", t2_h2: "Thema.",
    t2_w2_1: "Tema", t2_w2_2: "Thema", t2_w2_3: "Thema h", t2_w2_4: "Teema",

    // T3: rh-Schreibung
    t3_title: "Rhythmus-Check",
    t3_text: "Wörter wie 'Rhythmus' oder 'Rhinozeros' haben ein 'h' nach dem 'r'.",
    t3_inst: "Markiere das Wort mit 'rh'!",
    t3_h1: "Rhythmus ist besonders schwer.", t3_h2: "Rh am Anfang, th in der Mitte.",
    t3_w3_1: "Rhythmus", t3_w3_2: "Rythmus", t3_w3_3: "Rithmus", t3_w3_4: "Rhythmus",

    // T4: ch als k (Orchester)
    t4_title: "Das harte 'ch'",
    t4_text: "Manchmal wird 'ch' wie ein 'k' ausgesprochen, besonders in griechischen Wörtern.",
    t4_inst: "Welches Wort wird mit 'ch' (wie k) geschrieben?",
    t4_h1: "Denk an das Orchester oder den Chor.", t4_h2: "Charakter.",
    t4_w4_1: "Karakter", t4_w4_2: "Charakter", t4_w4_3: "Karackter", t4_w4_4: "Charackter",

    // T5: Magnet: Wortbedeutung
    t5_title: "Bedeutungs-Magnet",
    t5_text: "Fremdwörter haben oft eine deutsche Entsprechung. Findest du sie?",
    t5_inst: "Verbinde das Fremdwort mit dem deutschen Wort!",
    t5_h1: "Korrekt bedeutet richtig.", t5_h2: "Zentrum bedeutet Mitte.",
    t5_ml1: "korrekt", t5_mr1: "richtig",
    t5_ml2: "Zentrum", t5_mr2: "Mitte",
    t5_ml3: "etappenweise", t5_mr3: "schrittweise",

    // T6: Slingshot: Wortschatz-Profi
    t6_title: "Fremdwort-Jäger",
    t6_text: "Triff nur die Wörter, die Fremdwörter sind (also aus einer anderen Sprache kommen)!",
    t6_inst: "Schieße auf die Fremdwörter!",
    t6_h1: "Suche Wörter wie Telefon, Computer, Mikroskop.", t6_h2: "Bibliothek, Telefon, Mikrofon.",
    t6_q: "Welche Wörter sind Fremdwörter?",
    t6_t1: "Bibliothek", t6_t2: "Telefon", t6_t3: "Baum", t6_t4: "Haus",

    // T7: Bucket: Herkunft
    t7_title: "Herkunfts-Sortierer",
    t7_text: "Kommen diese Wörter aus dem Lateinischen oder Griechischen? (Tipp: ph/th/rh ist oft Griechisch).",
    t7_inst: "Sortiere die Wörter!",
    t7_h1: "Philosophie (ph) -> Griechisch. Video (v) -> Latein.",
    t7_b1: "Griechisch (ph, th, rh)", t7_b2: "Latein (v, c, t)",
    t7_i1: "Theorie", t7_i2: "Rhythmus", t7_i3: "Aktivität", t7_i4: "Video",

    // T8: Stacker: Komplexität
    t8_title: "Wort-Turm",
    t8_text: "Staple die Fremdwörter nach ihrer Silbenzahl (von kurz nach lang)!",
    t8_inst: "Építs tornyot a szótagok szerint!",
    t8_h1: "Text -> Thema -> Telefon.", t8_h2: "1 -> 2 -> 3 Silben.",
    t8_sw1: "Text", t8_sw2: "Thema", t8_sw3: "Telefon",

    // T9: Gap-fill: Kontext
    t9_title: "Fremdwörter im Einsatz",
    t9_text: "Setze das passende Fremdwort in den Satz ein.",
    t9_inst: "Welches Wort passt?",
    t9_h1: "In einem Konzert spielt das...?", t9_h2: "Orchester.",
    t9_sent: "Das ___ spielt eine schöne Sinfonie.",
    t9_c1: "Orchester", t9_c2: "Orkester", t9_c3: "Orchester h", t9_c4: "Orkestar",
  }
};

export const FREMD5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-card", word: "Alphabet", color: "#A855F7" },
    interactive: { type: "gap-fill", sentence: "t1_w2", choices: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], correctIndex: 1, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "Thema", color: "#9333EA", bg: "#F5F3FF" }] },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "letter-circles", letters: ["R", "h", "y"], color: "#A855F7" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3"], correctIndices: [0], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-card", word: "Charakter", color: "#A855F7" },
    interactive: { type: "gap-fill", sentence: "t4_w4_2", choices: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"], correctIndex: 1, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "comparison-table", rows: [["korrekt", "richtig"]], color: "#A855F7" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t5_ml1", right: "t5_mr1" }, { left: "t5_ml2", right: "t5_mr2" }, { left: "t5_ml3", right: "t5_mr3" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌐", title: "Global", bg: "#F5F3FF" },
    interactive: { type: "physics-slingshot", question: "t6_q", targets: [{ id: "1", text: "t6_t1", isCorrect: true }, { id: "2", text: "t6_t2", isCorrect: true }, { id: "3", text: "t6_t3", isCorrect: false }, { id: "4", text: "t6_t4", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["ph/th"], bg: "#F5F3FF", border: "#A855F7" }, right: { items: ["v/c"], bg: "#FAF5FF", border: "#9333EA" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "gr", label: "t7_b1" }, { id: "la", label: "t7_b2" }], items: [{ text: "t7_i1", bucketId: "gr" }, { text: "t7_i2", bucketId: "gr" }, { text: "t7_i3", bucketId: "la" }, { text: "t7_i4", bucketId: "la" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Silben", bg: "#F5F3FF" },
    interactive: { type: "physics-stacker", words: ["t8_sw1", "t8_sw2", "t8_sw3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "Orchester", color: "#A855F7", bg: "#F5F3FF" }] },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "synonyme" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Relativsatz & Kausalsatz (🔗, #F59E0B)
// Thema: Relativpronomen (der, die, das), Kausalsätze (weil, da, denn)
// ─────────────────────────────────────────────────────────────────────────────

export const SATZ6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satz-Brücken (K6)",

    // T1: Relativpronomen maskulin (der)
    t1_title: "Der Relativsatz (der)",
    t1_text: "Ein Relativsatz beschreibt ein Nomen genauer. Er wird meist mit der, die oder das eingeleitet.",
    t1_inst: "Welches Relativpronomen passt?",
    t1_h1: "Der Mann (maskulin) ...", t1_h2: "Der Mann, DER dort steht.",
    t1_sent_r: "Dort steht der Mann, ___ ich kenne.",
    t1_cr1: "den", t1_cr2: "der", t1_cr3: "dem", t1_cr4: "das",

    // T2: Relativpronomen feminin (die)
    t2_title: "Die Relativ-Brücke (die)",
    t2_text: "Auch weibliche Nomen brauchen einen Relativsatz: 'Die Frau, DIE lacht.'",
    t2_inst: "Setze das richtige Pronomen ein!",
    t2_h1: "Die Katze (weiblich) ...", t2_h2: "Die Katze, DIE schläft.",
    t2_sent_f: "Das ist die Frau, ___ mir hilft.",
    t2_cf1: "die", t2_cf2: "der", t2_cf3: "den", t2_cf4: "welcher",

    // T3: Relativpronomen neutral (das)
    t3_title: "Das Relativ-Wort (das)",
    t3_text: "Für sächliche Nomen nehmen wir 'das'. Vorsicht: Es ist kein Artikel, sondern ein Pronomen!",
    t3_inst: "Finde das passende Pronomen!",
    t3_h1: "Das Kind (sächlich) ...", t3_h2: "Das Kind, DAS spielt.",
    t3_sent_n: "Das ist das Kind, ___ ich mag.",
    t3_cn1: "das", t3_cn2: "dass", t3_cn3: "was", t3_cn4: "den",

    // T4: Plural (die / denen)
    t4_title: "Relativsatz im Plural",
    t4_text: "Im Plural nutzen wir 'die' (Nom/Akk) oder 'denen' (Dativ).",
    t4_inst: "Welches Wort passt hier (Dativ Plural)?",
    t4_h1: "Die Kinder (Plural) ... ich helfe WEM?", t4_h2: "denen.",
    t4_sent_p: "Das sind die Kinder, ___ ich helfe.",
    t4_cp1: "denen", t4_cp2: "die", t4_cp3: "der", t4_cp4: "welche",

    // T5: Kausalsatz mit 'weil' (Verbende)
    t5_title: "Grund mit 'weil'",
    t5_text: "Ein Kausalsatz nennt den Grund. Nach 'weil' steht das Verb am Ende.",
    t5_inst: "Bringe den Satz in die richtige Ordnung!",
    t5_h1: "Verb 'regnet' muss ans Ende.", t5_h2: "weil es regnet.",
    t5_o1: "weil", t5_o2: "es", t5_o3: "heute", t5_o4: "regnet.",

    // T6: Kausalsatz mit 'da'
    t6_title: "Grund mit 'da'",
    t6_text: "Das Wort 'da' bedeutet das gleiche wie 'weil' und schickt das Verb auch ans Ende.",
    t6_inst: "Welches Verb steht am Ende?",
    t6_h1: "Da er müde ist...", t6_h2: "ist.",
    t6_sent_da: "Da er müde ___ , geht er schlafen.",
    t6_cda1: "ist", t6_cda2: "war", t6_cda3: "wird", t6_cda4: "bin",

    // T7: Kausalsatz mit 'denn' (Pos. 0)
    t7_title: "Grund mit 'denn'",
    t7_text: "Achtung! Nach 'denn' steht das Verb NICHT am Ende, sondern auf Position 2.",
    t7_inst: "Setze den Satz richtig zusammen!",
    t7_h1: "denn + Subjekt + Verb (Pos 2).", t7_h2: "denn ich habe Hunger.",
    t7_f7_1: "Ich esse,", t7_f7_2: "denn", t7_f7_3: "ich", t7_f7_4: "habe Hunger.",

    // T8: Slingshot: Relativpronomen
    t8_title: "Relativ-Jäger",
    t8_text: "Schieße auf alle Wörter, die einen Relativsatz einleiten können!",
    t8_inst: "Triff die Relativpronomen!",
    t8_h1: "Suche nach der, die, das, denen, welcher.", t8_h2: "der, denen, welche.",
    t8_q_r: "Welche Wörter sind Relativpronomen?",
    t8_t1: "der", t8_t2: "denen", t8_t3: "weil", t8_t4: "denn",

    // T9: Komma-Check
    t9_title: "Vessző-mester (K6)",
    t9_text: "Relativ- und Kausalsätze müssen immer mit einem Komma abgetrennt werden.",
    t9_inst: "Wo fehlt das Komma?",
    t9_h1: "Suche die Stelle vor dem Relativpronomen 'das'.", t9_h2: "Das Buch, das...",
    t9_w9_1: "Das Buch", t9_w9_2: "das ich lese", t9_w9_3: "ist", t9_w9_4: "gut", t9_w9_5: ".",
  }
};

export const SATZ6_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "article-noun", article: "Der", articleColor: "#1D4ED8", noun: "Mann", emoji: "👨" },
    interactive: { type: "gap-fill", sentence: "t1_sent_r", choices: ["t1_cr1", "t1_cr2", "t1_cr3", "t1_cr4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "article-noun", article: "Die", articleColor: "#B91C1C", noun: "Frau", emoji: "👩" },
    interactive: { type: "gap-fill", sentence: "t2_sent_f", choices: ["t2_cf1", "t2_cf2", "t2_cf3", "t2_cf4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "article-noun", article: "Das", articleColor: "#065F46", noun: "Kind", emoji: "👶" },
    interactive: { type: "gap-fill", sentence: "t3_sent_n", choices: ["t3_cn1", "t3_cn2", "t3_cn3", "t3_cn4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "denen", color: "#F59E0B", bg: "#FFFBEB" }] },
    interactive: { type: "gap-fill", sentence: "t4_sent_p", choices: ["t4_cp1", "t4_cp2", "t4_cp3", "t4_cp4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-flow", steps: ["weil", "...", "regnet"], color: "#F59E0B" },
    interactive: { type: "word-order", words: ["t5_o1", "t5_o2", "t5_o3", "t5_o4"], correctOrder: [0, 1, 2, 3], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-card", word: "da", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t6_sent_da", choices: ["t6_cda1", "t6_cda2", "t6_cda3", "t6_cda4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "comparison-table", rows: [["weil", "Ende"], ["denn", "Pos 2"]], color: "#F59E0B" },
    interactive: { type: "sentence-build", fragments: ["t7_f7_1", "t7_f7_2", "t7_f7_3", "t7_f7_4"], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏹", title: "Relativ", bg: "#FFFBEB" },
    interactive: { type: "physics-slingshot", question: "t8_q_r", targets: [{ id: "1", text: "t8_t1", isCorrect: true }, { id: "2", text: "t8_t2", isCorrect: true }, { id: "3", text: "t8_t3", isCorrect: false }, { id: "4", text: "t8_t4", isCorrect: false }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "sentence-display", words: ["Das Buch", ",", "das..."], highlightIndices: [1], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t9_w9_1", "t9_w9_2", "t9_w9_3", "t9_w9_4", "t9_w9_5"], correctIndices: [0], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "satzzeichen_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Wortbildung (🧩, #EC4899)
// Thema: Vorsilben, Nachsilben, Wortfamilien, Zusammensetzungen (K6)
// ─────────────────────────────────────────────────────────────────────────────

export const WORT6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Baukasten",

    // T1: Vorsilben (un-, miss-)
    t1_title: "Das Gegenteil bauen",
    t1_text: "Mit Vorsilben wie 'un-' oder 'miss-' kannst du ganz einfach das Gegenteil eines Wortes bilden.",
    t1_inst: "Bilde das Gegenteil durch Paare!",
    t1_h1: "glücklich -> unglücklich.", t1_h2: "Erfolg -> Misserfolg.",
    t1_l1: "glücklich", t1_r1: "unglücklich",
    t1_l2: "treu", t1_r2: "untreu",
    t1_l3: "Erfolg", t1_r3: "Misserfolg",

    // T2: Nachsilben -heit / -keit
    t2_title: "Nomen aus Adjektiven",
    t2_text: "Adjektive werden zu Nomen, wenn wir '-heit' oder '-keit' anhängen. Achtung: Dann schreiben wir sie GROSS!",
    t2_inst: "Welche Nachsilbe passt hier?",
    t2_h1: "frei -> Freiheit.", t2_h2: "einsam -> Einsamkeit.",
    t2_sent: "Aus frei wird die ___ .",
    t2_c1: "Freiheit", t2_c2: "Freikeit", t2_c3: "Freihung", t2_c4: "Freihit",

    // T3: Adjektiv-Endungen (-bar, -lich)
    t3_title: "Adjektive basteln",
    t3_text: "Mit '-bar' oder '-lich' machen wir aus Nomen oder Verben neue Adjektive.",
    t3_inst: "Sortiere die Adjektive in den richtigen Eimer!",
    t3_h1: "essbar, trinkbar -> man kann es tun.", t3_h2: "freundlich, herzlich -> wie jemand ist.",
    t3_b1: "-bar (machbar) 🍕", t3_b2: "-lich (eigenschaft) ❤️",
    t3_i1: "essbar", t3_i2: "trinkbar", t3_i3: "herzlich", t3_i4: "freundlich",

    // T4: Verben zu Nomen (Magnet)
    t4_title: "Vom Tun zum Namen",
    t4_text: "Oft ändert sich der Vokal, wenn aus einem Verb ein Nomen wird.",
    t4_inst: "Finde das passende Nomen zum Verb!",
    t4_h1: "fahren -> die Fahrt.", t4_h2: "fliegen -> der Flug.",
    t4_ml1: "fahren", t4_mr1: "die Fahrt",
    t4_ml2: "fliegen", t4_mr2: "der Flug",
    t4_ml3: "sprühen", t4_mr3: "der Sprung",

    // T5: Komposita mit Fugen-s
    t5_title: "Wort-Verbindung (Fugen-s)",
    t5_text: "Manchmal brauchen zwei Nomen ein 's' in der Mitte, um zusammenzuhalten.",
    t5_inst: "Baue das zusammengesetzte Wort!",
    t5_h1: "Geburtstag + Kind.", t5_h2: "Geburtstags-kind.",
    t5_o1: "Geburtstag", t5_o2: "s", t5_o3: "kind",

    // T6: Zer- vs Ver- (Slingshot)
    t6_title: "Vorsilben-Power",
    t6_text: "Vorsilben verändern die Bedeutung stark. 'zer-' bedeutet meistens 'kaputt'.",
    t6_inst: "Welche Wörter bedeuten 'kaputt machen'?",
    t6_h1: "Suche nach Wörtern mit 'zer-'.", t6_h2: "zerbrechen, zerreißen.",
    t6_q: "Welche Wörter bedeuten Zerstörung?",
    t6_t1: "zerbrechen", t6_t2: "zerreißen", t6_t3: "verlaufen", t6_t4: "bebauen",

    // T7: Wortfamilien (Bucket)
    t7_title: "Die Wortfamilie",
    t7_text: "Wörter mit dem gleichen Stamm gehören zu einer Familie.",
    t7_inst: "Sortiere die Wörter nach ihrem Stamm!",
    t7_h1: "Traum, träumen -> Stamm TRAUM.", t7_h2: "Spiel, spielen -> Stamm SPIEL.",
    t7_b7_1: "Stamm: spiel- ⚽", t7_b7_2: "Stamm: traum- 💤",
    t7_i7_1: "Spieler", t7_i7_2: "Spielfeld", t7_i7_3: "Träumer", t7_i7_4: "traumhaft",

    // T8: Nominalisierung (Highlight)
    t8_title: "Verben werden Nomen",
    t8_text: "Wenn wir 'beim', 'zum' oder 'das' vor ein Verb setzen, wird es zum Nomen.",
    t8_inst: "Markiere das großgeschriebene Nomen-Verb!",
    t8_h1: "Suche nach dem Wort direkt nach 'beim'.", t8_h2: "beim Laufen.",
    t8_w8_1: "Ich", t8_w8_2: "bin", t8_w8_3: "beim", t8_w8_4: "Laufen", t8_w8_5: "schnell",

    // T9: Wort-Länge (Stacker)
    t9_title: "Silben-Stapler",
    t9_text: "Ordne die Wörter nach der Anzahl ihrer Bausteine!",
    t9_inst: "Staple von kurz nach lang!",
    t9_h1: "Haus -> Haustür -> Haustürschlüssel.",
    t9_sw1: "Haus", t9_sw2: "Haustür", t9_sw3: "Haustürschlüssel",
  }
};

export const WORT6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["glücklich"], bg: "#FDF2F8", border: "#EC4899" }, right: { items: ["un-glücklich"], bg: "#FCE7F3", border: "#DB2777" } },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "antonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-card", word: "-heit / -keit", color: "#EC4899" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["-bar"], bg: "#FDF2F8", border: "#EC4899" }, right: { items: ["-lich"], bg: "#FCE7F3", border: "#DB2777" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "b", label: "t3_b1" }, { id: "l", label: "t3_b2" }], items: [{ text: "t3_i1", bucketId: "b" }, { text: "t3_i2", bucketId: "b" }, { text: "t3_i3", bucketId: "l" }, { text: "t3_i4", bucketId: "l" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Wort-Paare", bg: "#FDF2F8" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t4_ml1", right: "t4_mr1" }, { left: "t4_ml2", right: "t4_mr2" }, { left: "t4_ml3", right: "t4_mr3" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-flow", steps: ["Geburtstag", "s", "kind"], color: "#EC4899" },
    interactive: { type: "word-order", words: ["t5_o1", "t5_o2", "t5_o3"], correctOrder: [0, 1, 2], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Zerstörung", bg: "#FDF2F8" },
    interactive: { type: "physics-slingshot", question: "t6_q", targets: [{ id: "1", text: "t6_t1", isCorrect: true }, { id: "2", text: "t6_t2", isCorrect: true }, { id: "3", text: "t6_t3", isCorrect: false }, { id: "4", text: "t6_t4", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "antonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["spiel-"], bg: "#FDF2F8", border: "#EC4899" }, right: { items: ["traum-"], bg: "#FCE7F3", border: "#DB2777" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "s", label: "t7_b7_1" }, { id: "t", label: "t7_b7_2" }], items: [{ text: "t7_i7_1", bucketId: "s" }, { text: "t7_i7_2", bucketId: "s" }, { text: "t7_i7_3", bucketId: "t" }, { text: "t7_i7_4", bucketId: "t" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "sentence-display", words: ["beim", "Laufen"], highlightIndices: [1], color: "#BE185D" },
    interactive: { type: "highlight-text", tokens: ["t8_w8_1", "t8_w8_2", "t8_w8_3", "t8_w8_4", "t8_w8_5"], correctIndices: [3], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stapler", bg: "#FDF2F8" },
    interactive: { type: "physics-stacker", words: ["t9_sw1", "t9_sw2", "t9_sw3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "synonyme" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Zeichensetzung (📌, #6366F1)
// Thema: Komma in komplexen Sätzen, Appositionen, Direkte Rede (Advanced)
// ─────────────────────────────────────────────────────────────────────────────

export const ZEICHEN6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Punkt & Komma Profi",

    // T1: Relativsatz-Komma
    t1_title: "Der Relativsatz-Check",
    t1_text: "Relativsätze müssen durch Kommas vom Hauptsatz getrennt werden. Sie stehen oft mitten im Satz!",
    t1_inst: "Setze die zwei Kommas richtig!",
    t1_h1: "Der Satz im Satz: ', der dort spielt,'.", t1_h2: "Zwei Kommas einschließen.",
    t1_w1: "Der Hund", t1_w2: "der dort bellt", t1_w3: "ist", t1_w4: "sehr lieb", t1_w5: ".",

    // T2: Infinitivgruppen (um... zu)
    t2_title: "Infinitiv mit Komma",
    t2_text: "Infinitivgruppen mit 'um', 'ohne' vagy 'anstatt' brauchen meist ein Komma.",
    t2_inst: "Wo gehört das Komma hin?",
    t2_h1: "Suche die Stelle vor 'um'.", t2_h2: "Ich lerne, um...",
    t2_sent: "Er trainiert hart ___ um zu gewinnen.",
    t2_c1: ",", t2_c2: ";", t2_c3: ":", t2_c4: "!",

    // T3: Appositionen (Beifügungen)
    t3_title: "Zusatzinfos (Apposition)",
    t3_text: "Eine Apposition ist eine nähere Erklärung zu einem Nomen. Sie wird in Kommas eingeschlossen.",
    t3_inst: "Markiere die Apposition (die Zusatzinfo)!",
    t3_h1: "Wer ist Herr Müller?", t3_h2: "unser Mathelehrer.",
    t3_w3_1: "Herr Müller", t3_w3_2: "unser Mathelehrer", t3_w3_3: "ist", t3_w3_4: "heute", t3_w3_5: "krank",

    // T4: Anrede & Ausrufe
    t4_title: "Anrede-Vessző",
    t4_text: "Wenn wir jemanden direkt ansprechen, setzen wir ein Komma.",
    t4_inst: "Wo muss das Komma bei der Anrede stehen?",
    t4_h1: "Nach dem Namen 'Lukas'.", t4_h2: "Lukas, kommst du?",
    t4_sent_a: "Lukas ___ hilf mir bitte!",
    t4_ca1: ",", t4_ca2: "!", t4_ca3: "?", t4_ca4: ".",

    // T5: Eingeschobener Begleitsatz
    t5_title: "Rede unterbrochen",
    t5_text: "Wenn der Begleitsatz mitten in der Rede steht, brauchen wir viele Kommas.",
    t5_inst: "Baue die unterbrochene Rede zusammen!",
    t5_h1: "„Ich komme“, sagte er, „sofort.“", t5_h2: "Anführungszeichen nicht vergessen.",
    t5_f5_1: "„Ich komme“,", t5_f5_2: "sagte er,", t5_f5_3: "„sofort.“",

    // T6: Slingshot: Komma-Profi
    t6_title: "Vessző-Vadász",
    t6_text: "Triff nur die Sätze, in denen alle Kommas richtig sitzen!",
    t6_inst: "Schieße auf die richtigen Sätze!",
    t6_h1: "Achte auf Appositionen und Relativsätze.", t6_h2: "Vessző przed 'weil' és 'dass'.",
    t6_q: "Welcher Satz ist korrekt?",
    t6_t1: "Leo, mein Freund, kommt.", t6_t2: "Ich gehe, weil ich müde bin.", t6_t3: "Dass du da bist, freut mich.", t6_t4: "Er kommt weil er, Zeit hat. (Falsch)",

    // T7: Bucket: Wo ist das Komma?
    t7_title: "Komma-Gründe",
    t7_text: "Warum setzen wir hier ein Komma? Aufzählung vagy Nebensatz?",
    t7_inst: "Sortiere die Sätze nach dem Komma-Grund!",
    t7_h1: "A, B, C = Aufzählung. Ich weiß, dass... = Nebensatz.",
    t7_b1: "Aufzählung 🍎", t7_b2: "Nebensatz 🔗",
    t7_i1: "Eis, Obst und Tee", t7_i2: "Ich hoffe, dass...", t7_i3: "Hunde, Katzen, Mäuse", t7_i4: "Er lacht, weil...",

    // T8: Semikolon vs. Komma
    t8_title: "Semikolon vagy Komma?",
    t8_text: "Das Semikolon verbindet zwei fertige Sätze enger als ein Punkt.",
    t8_inst: "Verbinde die Sätze mit dem richtigen Zeichen!",
    t8_h1: "Semikolon bei zwei Hauptsätzen.", t8_h2: "Draußen regnet es; wir bleiben drin.",
    t8_l1: "Es regnet", t8_r1: "; wir bleiben drin.",
    t8_l2: "Ich mag Äpfel", t8_r2: ", Birnen und Bananen.",
    t8_l3: "Er sagt", t8_r3: ": „Hallo!“",

    // T9: Satzzeichen-Power (Stacker)
    t9_title: "Stärke-Torony",
    t9_text: "Staple die Satzzeichen nach ihrer Trennkraft (von schwach nach stark)!",
    t9_inst: "Staple die Zeichen!",
    t9_h1: "Komma -> Semikolon -> Punkt.",
    t9_sw1: "Komma (,)", t9_sw2: "Semikolon (;)", t9_sw3: "Punkt (.)",
  }
};

export const ZEICHEN6_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Hund", ",", "der...", ","], highlightIndices: [1, 3], color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"], correctIndices: [1, 3], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "um ... zu", color: "#4338CA", bg: "#EEF2FF" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-display", words: ["Herr Müller", ",", "Lehrer", ","], highlightIndices: [1, 3], color: "#4F46E5" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4", "t3_w3_5"], correctIndices: [1], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-card", word: "Lukas, ...", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t4_sent_a", choices: ["t4_ca1", "t4_ca2", "t4_ca3", "t4_ca4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-flow", steps: ["„...“,", "sagte er,", "„...“"], color: "#4338CA" },
    interactive: { type: "sentence-build", fragments: ["t5_f5_1", "t5_f5_2", "t5_f5_3"], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎯", title: "K6 Master", bg: "#EEF2FF" },
    interactive: { type: "physics-slingshot", question: "t6_q", targets: [{ id: "1", text: "t6_t1", isCorrect: true }, { id: "2", text: "t6_t2", isCorrect: true }, { id: "3", text: "t6_t3", isCorrect: true }, { id: "4", text: "t6_t4", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["A, B, C"], bg: "#EEF2FF", border: "#6366F1" }, right: { items: ["weil ..."], bg: "#E0E7FF", border: "#4F46E5" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "auf", label: "t7_b1" }, { id: "neb", label: "t7_b2" }], items: [{ text: "t7_i1", bucketId: "auf" }, { text: "t7_i2", bucketId: "neb" }, { text: "t7_i3", bucketId: "auf" }, { text: "t7_i4", bucketId: "neb" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "comparison-table", rows: [[";", "Satz"], [",", "Teil"]], color: "#4338CA" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Hierarchie", bg: "#EEF2FF" },
    interactive: { type: "physics-stacker", words: ["t9_sw1", "t9_sw2", "t9_sw3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "satzzeichen_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K6 (🌟, #4ECDC4)
// Thema: K6 Finaler Mix — Das große Astro-Diplom
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große K6-Abschlussprüfung",

    // T1: Aktiv vs Passiv (Two Groups)
    t1_title: "Aktiv-Passiv-Finale",
    t1_text: "Kannst du den Täter (Aktiv) von der Handlung (Passiv) unterscheiden?",
    t1_inst: "Sortiere die Sätze nach ihrer Form!",
    t1_h1: "Aktiv: Er macht. Passiv: Es wird gemacht.",
    t1_h2: "Achte auf 'wird' oder 'ist' + Partizip II.",
    t1_b1: "Aktiv 🏃", t1_b2: "Passiv 📦",
    t1_i1: "Der Koch bereitet das Essen zu.", t1_i2: "Das Essen wird zubereitet.",

    // T2: Konjunktiv II (Slingshot)
    t2_title: "Wunsch-Schleuder",
    t2_text: "Träume und Wünsche: Erkenne die Konjunktiv II Formen (hätte, wäre, würde).",
    t2_inst: "Schieße nur auf die Träume!",
    t2_h1: "Suche nach Umlauten (ä) oder 'würde'.",
    t2_h2: "hätte, wäre, könnte, würde.",
    t2_q: "Welche Wörter stehen im Konjunktiv II?",
    t2_t1: "hätte", t2_t2: "wäre", t2_t3: "hat", t2_t4: "ist",

    // T3: Infinitiv mit zu (Sentence Build)
    t3_title: "Infinitiv-Meister",
    t3_text: "Verbinde die Sätze mit 'um... zu' korrekt.",
    t3_inst: "Baue den Zielsatz zusammen!",
    t3_h1: "Ich lerne (HS), um gute Noten zu bekommen.",
    t3_h2: "um + ... + zu + Infinitiv.",
    t3_f3_1: "Er trainiert,", t3_f3_2: "um", t3_f3_3: "das Finale", t3_f3_4: "zu gewinnen.",

    // T4: Synonym-Intensität (Stacker)
    t4_title: "Wort-Treppe K6",
    t4_text: "Ordne die Synonyme nach ihrer Stärke (von schwach nach stark).",
    t4_inst: "Staple die Wörter richtig!",
    t4_h1: "lächeln -> lachen -> brüllen.",
    t4_sw1: "lächeln", t4_sw2: "lachen", t4_sw3: "brüllen",

    // T5: Fremdwörter ph/th (Highlight)
    t5_title: "Fremdwort-Detektiv",
    t5_text: "Erkenne die korrekt geschriebenen griechischen Fremdwörter.",
    t5_inst: "Markiere das Wort mit ph!",
    t5_h1: "Philosophie schreibt man mit ph.",
    t5_h2: "Sperre die Augen auf bei Ph/Th/Rh.",
    t5_w5_1: "Das", t5_w5_2: "Alphabet", t5_w5_3: "ist", t5_w5_4: "sehr", t5_w5_5: "lang",

    // T6: Relativsatz (Article Noun SVG)
    t6_title: "Relativ-Brücke Profi",
    t6_text: "Wähle das passende Relativpronomen für das Nomen.",
    t6_inst: "Welches Wort leitet den Relativsatz ein?",
    t6_h1: "Das Kind (sächlich) -> das.",
    t6_h2: "Vorsicht: das (Pronomen), nicht dass (Bindewort).",
    t6_sent_r: "Das ist das Kind, ___ ich gestern sah.",
    t6_cr1: "das", t6_cr2: "dass", t6_cr3: "der", t6_cr4: "den",

    // T7: Wortbildung heit/keit (Bucket)
    t7_title: "Endungs-Eimer",
    t7_text: "Welche Nomen-Endung passt zu welchem Adjektiv?",
    t7_inst: "Sortiere die Wörter in die Eimer!",
    t7_h1: "Freiheit, Übelkeit.",
    t7_b7_1: "-heit 🏗️", t7_b7_2: "-keit 🏗️",
    t7_i7_1: "Frei", t7_i7_2: "Dunkel", t7_i7_3: "Einsam", t7_i7_4: "Höflich",

    // T8: Zeichensetzung Apposition (Sentence Flow)
    t8_title: "Zusatzinfo-Komma",
    t8_text: "Appositionen (Erklärungen) brauchen Einschub-Kommas.",
    t8_inst: "Welche Satzzeichen fehlen hier?",
    t8_h1: "Lukas (Komma) mein Freund (Komma) kommt.",
    t8_sent_f: "Lukas ___ mein bester Freund ___ hilft mir.",
    t8_cf1: ",", t8_cf2: "-", t8_cf3: ":", t8_cf4: ";",

    // T9: Antonyme (Magnet)
    t9_title: "Gegenteil-Finale",
    t9_text: "Finde die perfekten Gegenspieler (Antonyme)!",
    t9_inst: "Ziehe die Gegenteile zusammen!",
    t9_h1: "Vorgänger -> Nachfolger.",
    t9_ml9: "Vorgänger", t9_mr9: "Nachfolger",
    t9_ml10: "Aktiv", t9_mr10: "Passiv",
    t9_ml11: "Realität", t9_mr11: "Wunsch",
  }
};

export const EXAM6_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Aktiv"], bg: "#DBEAFE", border: "#1D4ED8" }, right: { items: ["Passiv"], bg: "#FEE2E2", border: "#B91C1C" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "a", label: "t1_b1" }, { id: "p", label: "t1_b2" }], items: [{ text: "t1_i1", bucketId: "a" }, { text: "t1_i2", bucketId: "p" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "wäre", color: "#6366F1", bg: "#EEF2FF" }, { text: "hätte", color: "#6366F1", bg: "#EEF2FF" }] },
    interactive: { type: "physics-slingshot", question: "t2_q", targets: [{ id: "1", text: "t2_t1", isCorrect: true }, { id: "2", text: "t2_t2", isCorrect: true }, { id: "3", text: "t2_t3", isCorrect: false }, { id: "4", text: "t2_t4", isCorrect: false }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "konjunktiv2" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-flow", steps: ["um", "...", "zu"], color: "#10B981" },
    interactive: { type: "sentence-build", fragments: ["t3_f3_1", "t3_f3_2", "t3_f3_3", "t3_f3_4"], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "passiv" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "comparison-table", rows: [["schwach", "lächeln"], ["stark", "brüllen"]], color: "#EF4444" },
    interactive: { type: "physics-stacker", words: ["t4_sw1", "t4_sw2", "t4_sw3"], correctOrder: [0, 1, 2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-card", word: "Alphabet", color: "#A855F7" },
    interactive: { type: "highlight-text", tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4", "t5_w5_5"], correctIndices: [1], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "article-noun", article: "Das", articleColor: "#065F46", noun: "Kind", emoji: "🧒" },
    interactive: { type: "gap-fill", sentence: "t6_sent_r", choices: ["t6_cr1", "t6_cr2", "t6_cr3", "t6_cr4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "nominativ" }
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "image-label", label: "Nachsilben", color: "#EC4899" },
    interactive: { type: "physics-bucket", buckets: [{ id: "h", label: "t7_b7_1" }, { id: "k", label: "t7_b7_2" }], items: [{ text: "t7_i7_1", bucketId: "h" }, { text: "t7_i7_2", bucketId: "h" }, { text: "t7_i7_3", bucketId: "k" }, { text: "t7_i7_4", bucketId: "k" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "synonyme" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "sentence-flow", steps: ["Name", ",", "Apposition", ","], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t8_sent_f", choices: ["t8_cf1", "t8_cf2", "t8_cf3", "t8_cf4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "satzzeichen_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Magnet-Diplom", bg: "#4ECDC4" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9", right: "t9_mr9" }, { left: "t9_ml10", right: "t9_mr10" }, { left: "t9_ml11", right: "t9_mr11" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "antonyme" }
  }
];
