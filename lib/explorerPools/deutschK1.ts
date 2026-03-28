// lib/explorerPools/deutschK1.ts
// ═══════════════════════════════════════════════════════════════════════════════
// ASTRODEUTSCH K1 — Pool data for all 9 islands
// Pure TypeScript — no JSX here!
// Each island has its own LABELS export + POOL export.
// The DynamicExplorer component picks 5 random topics per session.
//
// POOL SIZE GUIDELINE: aim for 7-10 topics per island so variety is real.
// DIFFICULTY TAGS: easy / medium / hard
// LANGUAGE: nur Deutsch (de) — kein en/hu/ro nötig für AstroDeutsch!
//   AstroMagyar → nur hu, AstroBiologie/Sachkunde/Physik → de+en+hu+ro
// ═══════════════════════════════════════════════════════════════════════════════

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Buchstabeninsel (Letters)
// ─────────────────────────────────────────────────────────────────────────────

export const LETTER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Buchstaben Entdecken",

    t1_title: "Die Vokale",
    t1_text:  "Im Alphabet gibt es besondere Buchstaben: A, E, I, O, U. Das sind die Vokale. Sie klingen offen und singend — probiere es aus: Aaa, Eee, Iii!",
    t1_b1: "Es gibt 5 Vokale: A, E, I, O, U",
    t1_b2: "Vokale klingen offen und laut",
    t1_b3: "Alle anderen Buchstaben heißen Konsonanten",
    t1_inst: "Finde alle Vokale im Wort!",
    t1_h1: "Vokale sind: A, E, I, O, U.",
    t1_h2: "A, U und O sind Vokale. T ist ein Konsonant.",
    t1_w1: "A", t1_w2: "U", t1_w3: "T", t1_w4: "O",
    t1_q: "Welcher Buchstabe ist ein Vokal?",
    t1_qa: "E", t1_qb: "B", t1_qc: "K", t1_qd: "S",

    t2_title: "Vokal oder Konsonant?",
    t2_text:  "Es gibt nur 5 Vokale: A, E, I, O, U. Alle anderen 21 Buchstaben sind Konsonanten. Konsonanten brauchen Vokale, um deutlich zu klingen!",
    t2_b1: "5 Vokale, 21 Konsonanten",
    t2_b2: "Jedes Wort hat mindestens einen Vokal",
    t2_inst: "Sortiere: Vokal oder Konsonant?",
    t2_h1: "A, E, I, O, U sind Vokale.",
    t2_h2: "E und O sind Vokale. B, K, S, T sind Konsonanten.",
    t2_bv: "Vokal 🔴", t2_bk: "Konsonant 🔵",
    t2_e: "E", t2_b: "B", t2_o: "O", t2_k: "K", t2_s: "S", t2_t: "T",
    t2_q: "Wie viele Vokale gibt es im deutschen Alphabet?",
    t2_qa: "5", t2_qb: "3", t2_qc: "8", t2_qd: "21",

    t3_title: "Groß- und Kleinbuchstaben",
    t3_text:  "Jeder Buchstabe hat zwei Formen: einen großen und einen kleinen. Am Satzanfang schreiben wir immer groß!",
    t3_b1: "A und a sind derselbe Buchstabe",
    t3_b2: "Satzanfang: immer groß!",
    t3_b3: "Namen schreiben wir auch groß",
    t3_inst: "Verbinde Groß- und Kleinbuchstaben!",
    t3_h1: "Jeder Großbuchstabe hat einen passenden Kleinbuchstaben.",
    t3_h2: "A gehört zu a, B zu b, D zu d.",
    t3_A: "A", t3_a: "a", t3_B: "B", t3_b2l: "b",
    t3_D: "D", t3_d: "d", t3_G: "G", t3_g: "g", t3_R: "R", t3_r: "r",
    t3_q: "Wann schreiben wir einen Großbuchstaben?",
    t3_qa: "Am Satzanfang", t3_qb: "Am Satzende", t3_qc: "Nie", t3_qd: "Nur bei Vokalen",

    t4_title: "Die Umlaute",
    t4_text:  "Im Deutschen gibt es besondere Buchstaben: ä, ö und ü. Sie entstehen aus a, o, u mit zwei Punkten — den Umlautpunkten. Sie klingen anders!",
    t4_b1: "ä klingt wie ein helles a",
    t4_b2: "ö klingt zwischen o und e",
    t4_b3: "ü klingt zwischen u und i",
    t4_inst: "Finde die Umlaute!",
    t4_h1: "Umlaute haben zwei Punkte: ä, ö, ü.",
    t4_h2: "ä und ö sind Umlaute. B und p nicht.",
    t4_u1: "ä", t4_u2: "B", t4_u3: "ö", t4_u4: "p",
    t4_q: "Welcher Buchstabe ist ein Umlaut?",
    t4_qa: "ö", t4_qb: "a", t4_qc: "b", t4_qd: "k",

    t5_title: "Anlaute erkennen",
    t5_text:  "Der Anlaut ist der erste Buchstabe eines Wortes. 🐱 Katze fängt mit K an! Wenn du den Anlaut kennst, kannst du Wörter besser lesen und schreiben.",
    t5_b1: "Anlaut = erster Buchstabe des Wortes",
    t5_b2: "🐱 Katze → K,  🍎 Apfel → A",
    t5_inst: "Verbinde das Bild mit seinem Anlaut!",
    t5_h1: "Schau auf das erste Bild — welchen Laut hörst du?",
    t5_h2: "Katze → K,  Apfel → A,  Esel → E,  Maus → M",
    t5_l1: "🐱 Katze", t5_r1: "K",
    t5_l2: "🍎 Apfel",  t5_r2: "A",
    t5_l3: "🐴 Esel",   t5_r3: "E",
    t5_l4: "🐭 Maus",   t5_r4: "M",
    t5_q: "Welchen Anlaut hat das Wort 'Sonne'?",
    t5_qa: "S", t5_qb: "O", t5_qc: "N", t5_qd: "Z",

    t6_title: "Buchstaben zählen",
    t6_text:  "Jedes Wort besteht aus Buchstaben! 'Hund' hat 4 Buchstaben: H-U-N-D. Wenn du Buchstaben zählen kannst, lernst du viel über Wörter.",
    t6_b1: "Buchstaben zählen hilft beim Schreiben",
    t6_b2: "Eis = 3 Buchstaben, Hund = 4 Buchstaben",
    t6_inst: "Sortiere die Wörter nach ihrer Buchstabenzahl!",
    t6_h1: "Zähle jeden Buchstaben einzeln.",
    t6_h2: "Eis(3), Arm(3) → kurz.  Hund(4), Rose(4) → lang.",
    t6_b3l: "3 Buchstaben 📝", t6_b4l: "4 Buchstaben 📖",
    t6_i1: "Eis", t6_i2: "Hund", t6_i3: "Arm", t6_i4: "Rose",
    t6_q: "Wie viele Buchstaben hat 'Mond'?",
    t6_qa: "4", t6_qb: "3", t6_qc: "5", t6_qd: "2",

    t7_title: "Das Alphabet",
    t7_text:  "Das deutsche Alphabet hat 26 Buchstaben — von A bis Z. Dazu kommen die Umlaute ä, ö, ü und das ß. Die Buchstaben haben eine feste Reihenfolge!",
    t7_b1: "26 Buchstaben von A bis Z",
    t7_b2: "Plus ä, ö, ü und ß",
    t7_b3: "Die Reihenfolge ist immer gleich",
    t7_inst: "Finde die Vokale in A-B-C-D-E!",
    t7_h1: "Vokale im Alphabet: A und E (in A-B-C-D-E).",
    t7_h2: "A und E sind Vokale. B, C, D sind Konsonanten.",
    t7_w1: "A", t7_w2: "B", t7_w3: "C", t7_w4: "D", t7_w5: "E",
    t7_q: "Welcher Buchstabe kommt im Alphabet nach C?",
    t7_qa: "D", t7_qb: "A", t7_qc: "B", t7_qd: "E",

    t8_title: "Das Eszett (ß)",
    t8_text: "Das ß ist ein besonderer Buchstabe! Es klingt wie 'ss': Straße, Fuß.",
    t8_b1: "ß ist ein deutscher Buchstabe",
    t8_b2: "ß klingt wie 'ss'",
    t8_b3: "Straße, Fuß, Grüße haben ß",
    t8_inst: "Finde alle Wörter mit ß!",
    t8_h1: "ß ist ein einzelner Buchstabe, nicht zwei!",
    t8_h2: "Straße hat ß. Wasser hat ss.",
    t8_w1: "Straße", t8_w2: "Wasser", t8_w3: "Fuß", t8_w4: "Fuss",
    t8_q: "Welches Wort hat das Eszett ß?",
    t8_qa: "Straße", t8_qb: "Strasse", t8_qc: "Grüße", t8_qd: "Nase",

    t9_title: "Nachlaute erkennen",
    t9_text: "Der Nachlaut ist der letzte Buchstabe. Haus→S, Hund→D.",
    t9_b1: "Nachlaut = letzter Buchstabe",
    t9_b2: "Haus → S, Hund → D",
    t9_b3: "Nachlaute helfen beim Schreiben",
    t9_inst: "Was ist der Nachlaut?",
    t9_h1: "Höre den letzten Laut!",
    t9_h2: "Haus → S, Brot → T",
    t9_w1: "Haus", t9_w2: "Brot", t9_w3: "Hand", t9_w4: "Sonne",
    t9_q: "Welchen Nachlaut hat 'Brot'?",
    t9_qa: "T", t9_qb: "B", t9_qc: "R", t9_qd: "D",

    t10_title: "Druckschrift und Schreibschrift",
    t10_text: "Zwei Schriftarten: Druckschrift und Schreibschrift (verbunden).",
    t10_b1: "Zwei verschiedene Schriftarten",
    t10_b2: "Druckschrift und Schreibschrift",
    t10_b3: "Gleiche Buchstaben, andere Form",
    t10_inst: "Erkenne die Schriftart!",
    t10_h1: "Druckschrift: einzelne Buchstaben",
    t10_h2: "Schreibschrift: verbundene Buchstaben",
    t10_w1: "Druckschrift", t10_w2: "Schreibschrift", t10_w3: "GROSS", t10_w4: "Klein",
    t10_q: "Wie heißt die schreibende Schriftart?",
    t10_qa: "Schreibschrift", t10_qb: "Druckschrift", t10_qc: "Blockschrift", t10_qd: "Bilderschrift",

    t11_title: "Der Mitlaut oder Konsonant",
    t11_text: "Konsonanten: B, C, D, F, G... Sie brauchen Vokale zum Klingen!",
    t11_b1: "Konsonanten sind Mitlaute",
    t11_b2: "Es gibt 21 Konsonanten",
    t11_b3: "Konsonanten brauchen Vokale",
    t11_inst: "Zähle die Konsonanten!",
    t11_h1: "Konsonanten: B, C, D, F, G, H, ...",
    t11_h2: "Vokale: A, E, I, O, U",
    t11_w1: "B", t11_w2: "E", t11_w3: "T", t11_w4: "I",
    t11_q: "Wie viele Konsonanten hat das Alphabet?",
    t11_qa: "21", t11_qb: "5", t11_qc: "26", t11_qd: "10",

    t12_title: "Doppelkonsonanten",
    t12_text: "Bett, Sonne, Ball haben zwei gleiche Konsonanten.",
    t12_b1: "Doppelkonsonanten = zwei Konsonanten",
    t12_b2: "Bett, Sonne, Ball haben tt, nn, ll",
    t12_b3: "Der Vokal davor ist kurz",
    t12_inst: "Wörter mit Doppelkonsonanten finden!",
    t12_h1: "Schau auf tt in 'Bett'!",
    t12_h2: "Sonne hat nn. Das ist Doppel!",
    t12_w1: "Bett", t12_w2: "Essen", t12_w3: "Ball", t12_w4: "Beet",
    t12_q: "Welches Wort hat Doppelkonsonanten?",
    t12_qa: "Bett", t12_qb: "Bet", t12_qc: "Beta", t12_qd: "Beete",

    t13_title: "Lautgruppen am Wortanfang",
    t13_text: "Sprache (spr), Strand (str), Schrank (schr). Diese Gruppen nennt man Blends!",
    t13_b1: "Lautgruppen am Anfang kombinieren Laute",
    t13_b2: "Sprache, Strand, Schrank haben Gruppen",
    t13_b3: "Blends helfen beim Sprechen",
    t13_inst: "Was ist die Lautgruppe?",
    t13_h1: "Sprache: spr am Anfang!",
    t13_h2: "Schrank: schr. Strand: str.",
    t13_w1: "Sprache", t13_w2: "Schrank", t13_w3: "Strand", t13_w4: "Schule",
    t13_q: "Welche Lautgruppe hat 'Straße'?",
    t13_qa: "str", t13_qb: "sp", t13_qc: "sch", t13_qd: "st",

    t14_title: "Stille Buchstaben (stumme Laute)",
    t14_text: "In 'Knabe' ist das k sehr leise. Manchmal schreiben wir Buchstaben leise.",
    t14_b1: "Manche Buchstaben sind sehr leise",
    t14_b2: "k in 'Knabe' ist leise",
    t14_b3: "Stumme Laute sind schwierig",
    t14_inst: "Höre genau hin!",
    t14_h1: "Knabe: Der k ist fast lautlos!",
    t14_h2: "Der Anfangslaut klingt nur wie 'nabe'!",
    t14_w1: "Knabe", t14_w2: "Knie", t14_w3: "Knobel", t14_w4: "Knauf",
    t14_q: "Welcher Buchstabe ist in 'Knabe' leise?",
    t14_qa: "k", t14_qb: "n", t14_qc: "a", t14_qd: "b",

    t15_title: "Buchstabenrätsel lösen",
    t15_text: "'Ich bin ein Vokal und komme in Ohr vor.' Welcher Buchstabe bin ich?",
    t15_b1: "Rätsel trainieren Buchstabenwissen",
    t15_b2: "Mit Hinweisen findest du Lösungen",
    t15_b3: "Rätsel sind lustig und lehrreich",
    t15_inst: "Löse das Rätsel!",
    t15_h1: "Der Vokal kommt in Ohr vor.",
    t15_h2: "Die Antwort ist O!",
    t15_w1: "O", t15_w2: "A", t15_w3: "E", t15_w4: "U",
    t15_q: "Welcher Vokal: 'Ich bin in Apfel und Arm'?",
    t15_qa: "A", t15_qb: "E", t15_qc: "I", t15_qd: "O",
  },
  // AstroDeutsch = nur Deutsch. Kein en/hu/ro nötig.
};

export const LETTER_POOL: PoolTopicDef[] = [
  // ── 1. Die Vokale — highlight vowels in AUTO ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText:  "t1_text",
    svg: { type: "letter-circles", letters: ["A","E","I","O","U"], color: "#FF2D78", showNotes: true },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1","t1_w2","t1_w3","t1_w4"],  // A U T O
      correctIndices: [0, 1, 3],                    // A, U, O are vowels
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Vokal oder Konsonant — drag-to-bucket ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText:  "t2_text",
    svg: {
      type: "two-groups",
      left:  { items: ["A","E","I"], bg: "#FEE2E2", border: "#EF4444" },
      right: { items: ["B","D","K"], bg: "#DBEAFE", border: "#3B82F6" },
    },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "v", label: "t2_bv" }, { id: "k", label: "t2_bk" }],
      items: [
        { text: "t2_e", bucketId: "v" },
        { text: "t2_b", bucketId: "k" },
        { text: "t2_o", bucketId: "v" },
        { text: "t2_k", bucketId: "k" },
        { text: "t2_s", bucketId: "k" },
        { text: "t2_t", bucketId: "k" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Groß/Kleinbuchstaben — match-pairs ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText:  "t3_text",
    svg: { type: "letter-pairs", pairs: [["A","a"],["B","b"],["D","d"]], color: "#7C3AED", dimColor: "#A78BFA" },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_A", right: "t3_a" },
        { left: "t3_B", right: "t3_b2l" },
        { left: "t3_D", right: "t3_d" },
        { left: "t3_G", right: "t3_g" },
        { left: "t3_R", right: "t3_r" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Die Umlaute — highlight ä ö ─────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText:  "t4_text",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "ä", emoji: "🐻", color: "#92400E", bg: "#FDE68A" },
        { text: "ö", emoji: "🦁", color: "#065F46", bg: "#D1FAE5" },
        { text: "ü", emoji: "🐦", color: "#1E40AF", bg: "#DBEAFE" },
      ],
    },
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_u1","t4_u2","t4_u3","t4_u4"],  // ä B ö p
      correctIndices: [0, 2],                        // ä and ö are umlauts
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Anlaute erkennen — match-pairs ─────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText:  "t5_text",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🐱", label: "K..." },
        { emoji: "🍎", label: "A..." },
        { emoji: "🐴", label: "E..." },
        { emoji: "🐭", label: "M..." },
      ],
    },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t5_l1", right: "t5_r1" },
        { left: "t5_l2", right: "t5_r2" },
        { left: "t5_l3", right: "t5_r3" },
        { left: "t5_l4", right: "t5_r4" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Buchstaben zählen — drag-to-bucket ─────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText:  "t6_text",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🧊", label: "Eis" },
        { emoji: "🐕", label: "Hund" },
        { emoji: "💪", label: "Arm" },
        { emoji: "🌹", label: "Rose" },
      ],
    },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "3", label: "t6_b3l" }, { id: "4", label: "t6_b4l" }],
      items: [
        { text: "t6_i1", bucketId: "3" },  // Eis = 3
        { text: "t6_i2", bucketId: "4" },  // Hund = 4
        { text: "t6_i3", bucketId: "3" },  // Arm = 3
        { text: "t6_i4", bucketId: "4" },  // Rose = 4
      ],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Das Alphabet — highlight vowels in A-E ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText:  "t7_text",
    svg: {
      type: "letter-circles",
      letters: ["A","B","C","D","E"],
      color: "#0EA5E9",
    },
    bulletKeys: ["t7_b1", "t7_b2", "t7_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1","t7_w2","t7_w3","t7_w4","t7_w5"],  // A B C D E
      correctIndices: [0, 4],                                // A and E are vowels
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Das Eszett (ß) — highlight Eszett words ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText:  "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "ß", emoji: "🤔", color: "#7C3AED", bg: "#F3E8FF" } ] },
    bulletKeys: ["t8_b1", "t8_b2", "t8_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1","t8_w2","t8_w3","t8_w4"],  // Straße Wasser Fuß Fuss
      correctIndices: [0, 2],                        // Straße and Fuß have ß
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Nachlaute erkennen — match-pairs ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText:  "t9_text",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🏠", label: "Haus" },
        { emoji: "🍞", label: "Brot" },
        { emoji: "✋", label: "Hand" },
        { emoji: "☀️", label: "Sonne" },
      ],
    },
    bulletKeys: ["t9_b1", "t9_b2", "t9_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t9_w1", right: "S" },
        { left: "t9_w2", right: "T" },
        { left: "t9_w3", right: "D" },
        { left: "t9_w4", right: "E" },
      ],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Druckschrift und Schreibschrift — highlight text ──── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText:  "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "Print", color: "#1F2937", bg: "#F3F4F6" }, { text: "Script", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1","t10_w2","t10_w3","t10_w4"],  // Druckschrift Schreibschrift GROSS Klein
      correctIndices: [0, 3],                            // Druckschrift and Klein
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Der Mitlaut oder Konsonant — drag-to-bucket ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText:  "t11_text",
    svg: {
      type: "two-groups",
      left:  { items: ["B","C","D"], bg: "#DBEAFE", border: "#3B82F6" },
      right: { items: ["A","E","U"], bg: "#FEE2E2", border: "#EF4444" },
    },
    bulletKeys: ["t11_b1", "t11_b2", "t11_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "cons", label: "Konsonant" }, { id: "vowel", label: "Vokal" }],
      items: [
        { text: "t11_w1", bucketId: "cons" },  // B
        { text: "t11_w2", bucketId: "vowel" }, // E
        { text: "t11_w3", bucketId: "cons" },  // T
        { text: "t11_w4", bucketId: "vowel" }, // I
      ],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Doppelkonsonanten — highlight text ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText:  "t12_text",
    svg: { type: "text-bubbles", items: [ { text: "tt", color: "#B91C1C", bg: "#FEE2E2" }, { text: "nn", color: "#059669", bg: "#D1FAE5" }, { text: "ll", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t12_b1", "t12_b2", "t12_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1","t12_w2","t12_w3","t12_w4"],  // Bett Essen Ball Beet
      correctIndices: [0, 1, 2],                        // Bett, Essen, Ball have double consonants
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Lautgruppen am Wortanfang — match-pairs ───────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText:  "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "spr", color: "#7C3AED", bg: "#F3E8FF" }, { text: "str", color: "#0EA5E9", bg: "#F0F9FF" }, { text: "schr", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t13_b1", "t13_b2", "t13_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t13_w1", right: "spr" },
        { left: "t13_w2", right: "schr" },
        { left: "t13_w3", right: "str" },
        { left: "t13_w4", right: "sch" },
      ],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Stille Buchstaben (stumme Laute) — highlight text ──── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText:  "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "k", emoji: "🤐", color: "#6366F1", bg: "#E0E7FF" } ] },
    bulletKeys: ["t14_b1", "t14_b2", "t14_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1","t14_w2","t14_w3","t14_w4"],  // Knabe Knie Knobel Knauf
      correctIndices: [0, 1, 2, 3],                    // All start with silent k
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Buchstabenrätsel lösen — gap-fill ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText:  "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "? = ?", emoji: "🤔", color: "#8B5CF6", bg: "#F3E8FF" } ] },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🔤", count: 4 },
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Silbeninsel (Syllables)
// ─────────────────────────────────────────────────────────────────────────────

export const SYLLABLE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Silben Klatschen",

    t1_title: "Was ist eine Silbe?",
    t1_text: "Wörter kann man in Stücke teilen. Jedes Stück ist eine Silbe. Wir können Silben klatschen! 👏 To-ma-te hat drei Silben.",
    t1_b1: "Wörter bestehen aus Silben.",
    t1_b2: "Klatsche beim Sprechen mit!",
    t1_inst: "Wie viele Silben hat das Wort 'Banane'?",
    t1_h1: "Klatsche: Ba - na - ne.",
    t1_h2: "Es sind 3 Klatscher.",
    t1_q: "Wie viele Silben hat 'Banane'?",
    t1_qa: "3", t1_qb: "2", t1_qc: "4", t1_qd: "1",

    t2_title: "Kurze Wörter",
    t2_text: "Manche Wörter sind ganz kurz. Man klatscht nur einmal. Das sind einsilbige Wörter, wie 'Hund', 'Maus' oder 'Baum'.",
    t2_b1: "Einmal klatschen = 1 Silbe.",
    t2_inst: "Welches Wort hat nur 1 Silbe?",
    t2_h1: "Sprich die Wörter laut und klatsche.",
    t2_h2: "A-pfel (2), Scho-ko-la-de (4), Haus (1).",
    t2_w1: "Apfel", t2_w2: "Haus", t2_w3: "Katze", t2_w4: "Schokolade",
    t2_q: "Welches Wort hat nur EINE Silbe?",
    t2_qa: "Haus", t2_qb: "Hase", t2_qc: "Banane", t2_qd: "Blume",

    t3_title: "Zweisilbige Wörter",
    t3_text: "Viele Wörter haben zwei Silben. Klatsche zweimal: Blu-me 🌸, Au-to 🚗, Vo-gel 🐦.",
    t3_b1: "Zweimal klatschen = 2 Silben.",
    t3_inst: "Sortiere die Wörter nach Silben!",
    t3_h1: "Klatsche: Baum (1), Au-to (2).",
    t3_h2: "Hund(1), Maus(1) → 1 Silbe. Kat-ze(2), Blu-me(2) → 2 Silben.",
    t3_b1l: "1 Silbe 👏", t3_b2l: "2 Silben 👏👏",
    t3_i1: "Baum", t3_i2: "Katze", t3_i3: "Hund", t3_i4: "Auto",
    t3_q: "Wie viele Silben hat 'Vogel'?",
    t3_qa: "2", t3_qb: "1", t3_qc: "3", t3_qd: "4",

    t4_title: "Silbenkönige (Vokale)",
    t4_text: "Jede Silbe braucht einen 'Silbenkönig'! Das ist immer ein Vokal (A, E, I, O, U) oder ein Umlaut (Ä, Ö, Ü). Ohne Vokal gibt es keine Silbe!",
    t4_b1: "Jede Silbe hat einen Vokal.",
    t4_b2: "Vokale sind die Könige der Wörter 👑.",
    t4_inst: "Finde die Silbenkönige im Wort 'Ro-se'!",
    t4_h1: "Suche die Vokale (A,E,I,O,U) im Wort R-O-S-E.",
    t4_h2: "O und E sind die Könige.",
    t4_w1: "R", t4_w2: "O", t4_w3: "S", t4_w4: "E",
    t4_q: "Was braucht jede Silbe?",
    t4_qa: "Einen Vokal", t4_qb: "Einen Konsonanten", t4_qc: "Ein großes R", t4_qd: "Zwei Buchstaben",

    t5_title: "Lange Wörter",
    t5_text: "Einige Wörter sind sehr lang! Man muss oft klatschen. E-le-fant 🐘 hat drei Silben. Scho-ko-la-de 🍫 hat sogar vier!",
    t5_b1: "Dreimal klatschen = 3 Silben.",
    t5_b2: "E-le-fant, To-ma-te, Scho-ko-la-de.",
    t5_inst: "Verbinde das Bild mit der richtigen Silbenzahl!",
    t5_h1: "Klatsche die Wörter: Haus, Apfel, Tomate.",
    t5_h2: "Haus (1), Apfel (2), Tomate (3).",
    t5_l1: "🏠 Haus", t5_r1: "1 👏",
    t5_l2: "🍎 Apfel", t5_r2: "2 👏👏",
    t5_l3: "🍅 Tomate", t5_r3: "3 👏👏👏",
    t5_l4: "🍫 Schokolade", t5_r4: "4 👏👏👏👏",
    t5_q: "Wie viele Silben hat 'Schokolade'?",
    t5_qa: "4", t5_qb: "3", t5_qc: "2", t5_qd: "5",

    t6_title: "Silbenpuzzle",
    t6_text: "Wir können Silben zusammensetzen, um neue Wörter zu bauen. Aus 'Au' und 'to' wird 'Auto'!",
    t6_b1: "Silben bauen Wörter.",
    t6_inst: "Welche Silbe fehlt? 'Kat - ...'",
    t6_h1: "Das Wort heißt 'Katze'.",
    t6_h2: "Die fehlende Silbe ist 'ze'.",
    t6_w1: "ze", t6_w2: "to", t6_w3: "me", t6_w4: "ma",
    t6_q: "Aus welchen Silben besteht 'Hose'?",
    t6_qa: "Ho - se", t6_qb: "H - ose", t6_qc: "Hos - e", t6_qd: "Ho - s - e",

    t7_title: "Trennung am Zeilenende",
    t7_text: "Wenn der Platz in der Zeile nicht reicht, trennen wir Wörter. Aber Achtung: Wir trennen immer genau zwischen den Silben! ✂️",
    t7_b1: "Trennen geht nur nach Silben.",
    t7_b2: "Blu-me ist richtig. Bl-ume ist falsch.",
    t7_inst: "Welche Trennung ist richtig?",
    t7_h1: "Klatsche das Wort 'Schule': Schu - le.",
    t7_h2: "Die Trennung 'Schu-le' ist richtig.",
    t7_w1: "Schu-le", t7_w2: "Sch-ule", t7_w3: "Schul-e", t7_w4: "S-chule",
    t7_q: "Wie trennt man 'Sonne' richtig?",
    t7_qa: "Son - ne", t7_qb: "So - nne", t7_qc: "Sonn - e", t7_qd: "S - onne",

    t8_title: "Silben betonen",
    t8_text: "Manche Silben sprechen wir lauter und deutlicher. Das ist die Betonung! Mut-TER — die zweite Silbe ist laut.",
    t8_b1: "Betonung = lautere Silbe",
    t8_b2: "Mut-TER: TER ist betont",
    t8_inst: "Wo ist die Betonung?",
    t8_h1: "Sprich das Wort laut: Mut-TER.",
    t8_h2: "Die zweite Silbe TER ist lauter!",
    t8_w1: "Mut-ter", t8_w2: "Va-ter", t8_w3: "Schwe-ster", t8_w4: "Groß-mutter",
    t8_q: "Welche Silbe ist in 'VA-ter' betont?",
    t8_qa: "VA", t8_qb: "ter", t8_qc: "VA-ter", t8_qd: "Beide",

    t9_title: "Silben mit Umlauten",
    t9_text: "Ä, Ö, Ü sind auch Silbenkönige wie A, E, I, O, U. Hä-schen hat zwei Silben — eine mit Ä!",
    t9_b1: "Umlaute zählen wie Vokale",
    t9_b2: "Ä, Ö, Ü = Silbenkönige 👑",
    t9_inst: "Wie viele Silben hat 'Hä-schen'?",
    t9_h1: "Zähle die Silbenkönige: Hä (1) und schen (2).",
    t9_h2: "Das Wort hat 2 Silben!",
    t9_w1: "Hä-schen", t9_w2: "Lö-we", t9_w3: "Für-ste", t9_w4: "Käschen",
    t9_q: "Wie viele Silben hat 'Lö-we'?",
    t9_qa: "2", t9_qb: "1", t9_qc: "3", t9_qd: "4",

    t10_title: "Silben mit Diphtongen",
    t10_text: "Manchmal sind zwei Vokale zusammen eine Silbe: 'Haus' hat 1 Silbe, 'au' ist ein Diphthong!",
    t10_b1: "Zwei Vokale können eine Silbe sein",
    t10_b2: "au, ei, eu, ie = Diphtonge",
    t10_inst: "Wie viele Silben hat 'Haus'?",
    t10_h1: "Klatsche 'Haus' — nur einmal!",
    t10_h2: "au ist zusammen eine Silbe.",
    t10_w1: "Haus", t10_w2: "Leim", t10_w3: "Bier", t10_w4: "Euro",
    t10_q: "Welches Wort ist einsilbig?",
    t10_qa: "Haus", t10_qb: "Ha-us", t10_qc: "Hau-sen", t10_qd: "Haust",

    t11_title: "Silbenklatschen fortgeschritten",
    t11_text: "Schwierige Wörter klatsche langsam und deutlich! Ele-pho-to-gra-fie hat 5 Silben.",
    t11_b1: "Langsam sprechen hilft",
    t11_b2: "Jede Silbe = eine Bewegung",
    t11_inst: "Wie viele Silben?",
    t11_h1: "Sprich jede Silbe einzeln.",
    t11_h2: "Ele-phant: 3, Lokomo-tive: 4",
    t11_w1: "Ele-phant", t11_w2: "Lo-ko-mo-tive", t11_w3: "Fahr-zeug", t11_w4: "Fahrt",
    t11_q: "Wie viele Silben hat 'Lokomotive'?",
    t11_qa: "4", t11_qb: "3", t11_qc: "5", t11_qd: "2",

    t12_title: "Silben versteckte Rätsel",
    t12_text: "Manche Wörter haben versteckte Silben. Reißverschluss: Reiß-ver-schluss hat 3!",
    t12_b1: "Schwierige Wörter zeigen alle Silben",
    t12_b2: "Langsam sprechen offenbart Silben",
    t12_inst: "Wie viele Silben findest du?",
    t12_h1: "Sprich: Reißverschluss langsam.",
    t12_h2: "Reiß-ver-schluss = 3 Silben.",
    t12_w1: "Reißverschluss", t12_w2: "Obst", t12_w3: "Strom", t12_w4: "Wald",
    t12_q: "Wie viele Silben hat 'Reißverschluss'?",
    t12_qa: "3", t12_qb: "2", t12_qc: "4", t12_qd: "1",

    t13_title: "Silbenpause und Rhythmus",
    t13_text: "Jede Silbe hat einen Rhythmus! Klatsch mit dem Takt: Schok-o-la-de 👏👏👏👏",
    t13_b1: "Silben haben Rhythmus",
    t13_b2: "Takt hilft beim Merken",
    t13_inst: "Finde den Rhythmus!",
    t13_h1: "Klatsche langsam Scho-ko-la-de.",
    t13_h2: "Vier Klatscher = vier Silben!",
    t13_w1: "Schokolade", t13_w2: "Pizza", t13_w3: "Musik", t13_w4: "Rhythmus",
    t13_q: "Wie viele Klatscher bei 'Schokolade'?",
    t13_qa: "4", t13_qb: "2", t13_qc: "3", t13_qd: "5",

    t14_title: "Silben am Satzende",
    t14_text: "Nicht nur Wörter haben Silben! Auch Sätze: 'Das ist schö-ner!' Hier kannst du die Silben deutlich klatschen.",
    t14_b1: "Sätze enthalten mehrere Silben",
    t14_b2: "Klatsch im Satz langsam",
    t14_inst: "Zähle alle Silben im Satz!",
    t14_h1: "Satz: 'Das ist schö-ner!' — klatsch!",
    t14_h2: "Das-ist-schö-ner: 4 Klatscher",
    t14_w1: "Das ist schöner", t14_w2: "Das-ist-gut", t14_w3: "Ich mag dich", t14_w4: "Alle Wörter",
    t14_q: "Wie viele Silben in 'Ich-mag-dich'?",
    t14_qa: "3", t14_qb: "2", t14_qc: "4", t14_qd: "1",

    t15_title: "Silben Meister-Challenge",
    t15_text: "Jetzt bist du ein Silben-Meister! Alle schwierigen Wörter beherrschst du: Vergnügungspark, Fahrradschloss, Regenschauer!",
    t15_b1: "Du kannst jetzt Silben zählen",
    t15_b2: "Beliebig lange Wörter sind keine Angst mehr!",
    t15_b3: "Klatschen hilft immer",
    t15_inst: "Teste dein Können!",
    t15_h1: "Klatsche langsam und deutlich.",
    t15_h2: "Zähle jede Bewegung!",
    t15_w1: "Vergnügungspark", t15_w2: "Fahrradschloss", t15_w3: "Regenschauer", t15_w4: "Schulranzen",
    t15_q: "Wie viele Silben hat 'Vergnügungspark'?",
    t15_qa: "5", t15_qb: "4", t15_qc: "6", t15_qd: "3",
  }
};

export const SYLLABLE_POOL: PoolTopicDef[] = [
  // ── 1. Was ist eine Silbe? — highlight text ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "Ba", color: "#B45309", bg: "#FEF3C7" }, { text: "na", color: "#047857", bg: "#D1FAE5" }, { text: "ne", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["3"], // Simplest representation
      correctIndices: [0],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Kurze Wörter — highlight 1 syllable word ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [ { emoji: "🍎", label: "A-pfel" }, { emoji: "🏠", label: "Haus" }, { emoji: "🍫", label: "Scho-ko-la-de" } ] },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [1], // Haus is 1 syllable
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Zweisilbige Wörter — drag-to-bucket ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Baum", "Hund"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Kat-ze", "Au-to"], bg: "#DBEAFE", border: "#3B82F6" } },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "1", label: "t3_b1l" }, { id: "2", label: "t3_b2l" }],
      items: [
        { text: "t3_i1", bucketId: "1" }, // Baum
        { text: "t3_i2", bucketId: "2" }, // Katze
        { text: "t3_i3", bucketId: "1" }, // Hund
        { text: "t3_i4", bucketId: "2" }, // Auto
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Silbenkönige — highlight vowels ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-circles", letters: ["R", "O", "S", "E"], color: "#F59E0B" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], // R O S E
      correctIndices: [1, 3], // O and E
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Lange Wörter — match-pairs ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [ { emoji: "🏠", label: "Haus" }, { emoji: "🍅", label: "To-ma-te" }, { emoji: "🐘", label: "E-le-fant" } ] },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t5_l1", right: "t5_r1" },
        { left: "t5_l2", right: "t5_r2" },
        { left: "t5_l3", right: "t5_r3" },
        { left: "t5_l4", right: "t5_r4" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Silbenpuzzle — highlight correct missing syllable ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "Kat", emoji: "🐱", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "...", emoji: "❓", color: "#B45309", bg: "#FEF3C7" } ] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"], // ze, to, me, ma
      correctIndices: [0], // ze
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Trennung am Zeilenende — highlight correct separation ─────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["Schu-le", "Son-ne"], bg: "#D1FAE5", border: "#059669" }, right: { items: ["Sch-ule", "Sonn-e"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], // Schu-le is correct
      correctIndices: [0],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Silben betonen — highlight text ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "MUT", color: "#B91C1C", bg: "#FEE2E2" }, { text: "ter", color: "#6B7280", bg: "#F3F4F6" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Silben mit Umlauten — highlight-text ─────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [ { text: "Ä", emoji: "🐰", color: "#D97706", bg: "#FEF3C7" }, { text: "Ö", emoji: "🦁", color: "#059669", bg: "#D1FAE5" }, { text: "Ü", emoji: "🐦", color: "#3B82F6", bg: "#DBEAFE" } ] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [0, 1],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Silben mit Diphtongen — drag-to-bucket ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "au", color: "#7C3AED", bg: "#F3E8FF" }, { text: "ei", color: "#0EA5E9", bg: "#F0F9FF" }, { text: "ie", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "one", label: "1 Silbe 👏" }, { id: "many", label: "2+ Silben 👏👏" }],
      items: [
        { text: "t10_w1", bucketId: "one" },
        { text: "t10_w2", bucketId: "one" },
        { text: "t10_w3", bucketId: "one" },
        { text: "t10_w4", bucketId: "many" },
      ],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Silbenklatschen fortgeschritten — match-pairs ──────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [ { emoji: "🐘", label: "Ele-phant" }, { emoji: "🚂", label: "Lo-ko-mo-tive" } ] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t11_w1", right: "3" },
        { left: "t11_w2", right: "4" },
        { left: "t11_w3", right: "2" },
        { left: "t11_w4", right: "1" },
      ],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Silben versteckte Rätsel — highlight-text ────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [ { text: "Reiß-ver-schluss", emoji: "🤔", color: "#6366F1", bg: "#E0E7FF" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Silbenpause und Rhythmus — tap-count ───────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "👏👏👏👏", color: "#DC2626", bg: "#FEE2E2" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "👏", count: 4 },
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Silben am Satzende — drag-to-bucket ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "Das-ist-schö-ner", color: "#059669", bg: "#D1FAE5" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "3", label: "3 Silben" }, { id: "4", label: "4 Silben" }],
      items: [
        { text: "t14_w1", bucketId: "4" },
        { text: "t14_w2", bucketId: "3" },
        { text: "t14_w3", bucketId: "3" },
        { text: "t14_w4", bucketId: "3" },
      ],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Silben Meister-Challenge — highlight-text ────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "MEISTER!", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [0],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Wörterinsel (Words)
// ─────────────────────────────────────────────────────────────────────────────

export const WORD_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wörterinsel",

    t1_title: "Buchstaben und Wörter",
    t1_text: "Buchstaben allein bedeuten meistens nichts. Aber zusammen bilden sie Wörter! Aus 'B-A-U-M' wird ein 'Baum' 🌳.",
    t1_b1: "Buchstaben = A, B, C",
    t1_b2: "Wort = Auto, Katze",
    t1_inst: "Sortiere: Ist es ein Buchstabe oder ein Wort?",
    t1_h1: "Ein Wort besteht aus mehreren Buchstaben.",
    t1_h2: "'M' ist ein Buchstabe. 'Maus' ist ein Wort.",
    t1_bw: "Wort 📝", t1_bb: "Buchstabe 🔤",
    t1_i1: "A", t1_i2: "Hund", t1_i3: "O", t1_i4: "Sonne",
    t1_q: "Was ist 'Katze'?",
    t1_qa: "Ein Wort", t1_qb: "Ein Buchstabe", t1_qc: "Eine Zahl", t1_qd: "Eine Silbe",

    t2_title: "Namenwörter (Nomen)",
    t2_text: "Wörter für Menschen, Tiere und Dinge nennen wir Namenwörter (oder Nomen). Namenwörter schreiben wir am Anfang immer GROSS!",
    t2_b1: "Menschen, Tiere, Dinge = Nomen.",
    t2_b2: "Nomen schreibt man GROSS.",
    t2_inst: "Welches Wort ist ein Namenwort (Tier)?",
    t2_h1: "Suche das Tier. Es wird großgeschrieben.",
    t2_h2: "Der 'Vogel' ist ein Tier.",
    t2_w1: "und", t2_w2: "Vogel", t2_w3: "klein", t2_w4: "schnell",
    t2_q: "Wie schreiben wir Namenwörter (Nomen)?",
    t2_qa: "Am Anfang groß", t2_qb: "Am Anfang klein", t2_qc: "Alles groß", t2_qd: "Alles klein",

    t3_title: "Die drei Fahnen (Artikel)",
    t3_text: "Jedes Namenwort hat eine kleine Fahne, die davor steht: der Begleiter (Artikel). Es gibt drei wichtige Begleiter: DER, DIE und DAS.",
    t3_b1: "der (männlich) 🔵",
    t3_b2: "die (weiblich) 🔴",
    t3_b3: "das (sächlich) 🟢",
    t3_inst: "Finde den Begleiter (Artikel) im Text!",
    t3_h1: "Suche das Wörtchen 'der', 'die' oder 'das'.",
    t3_h2: "'das' ist der Begleiter von Auto.",
    t3_w1: "Hier", t3_w2: "fährt", t3_w3: "das", t3_w4: "Auto",
    t3_q: "Welches Wort ist ein Begleiter (Artikel)?",
    t3_qa: "die", t3_qb: "Haus", t3_qc: "und", t3_qd: "ich",

    t4_title: "Wörter verbinden",
    t4_text: "Manchmal können sich zwei Namenwörter an den Händen halten und ein neues Wort bilden! Baum 🌳 + Haus 🏠 = Baumhaus.",
    t4_b1: "Zwei Wörter werden zu einem.",
    t4_b2: "Hund + Hütte = Hundehütte.",
    t4_inst: "Verbinde die Wörter richtig!",
    t4_h1: "Welches Tier passt zu welchem Haus?",
    t4_h2: "Vogel + Haus = Vogelhaus.",
    t4_l1: "Baum", t4_r1: "Haus",
    t4_l2: "Hund", t4_r2: "Hütte",
    t4_l3: "Eis", t4_r3: "Bär",
    t4_l4: "Schnee", t4_r4: "Mann",
    t4_q: "Aus welchen Wörtern besteht 'Regenschirm'?",
    t4_qa: "Regen + Schirm", t4_qb: "Re + Gen + Schirm", t4_qc: "Reg + Enschirm", t4_qd: "Regen + Sonne",

    t5_title: "Menschen, Tiere, Dinge",
    t5_text: "Namenwörter können Menschen (Oma), Tiere (Hund) oder Dinge (Tisch) sein. Kannst du sie richtig einordnen?",
    t5_b1: "Mensch: Opa, Baby",
    t5_b2: "Tier: Katze, Maus",
    t5_b3: "Ding: Stuhl, Ball",
    t5_inst: "Ist es ein Tier oder ein Ding?",
    t5_h1: "Lebt es oder ist es ein Gegenstand?",
    t5_h2: "Hase und Bär sind Tiere. Ball und Auto sind Dinge.",
    t5_bt: "Tier 🐾", t5_bd: "Ding 📦",
    t5_i1: "Hase", t5_i2: "Ball", t5_i3: "Bär", t5_i4: "Auto",
    t5_q: "Was ist ein 'Apfel'?",
    t5_qa: "Ein Ding (Pflanze)", t5_qb: "Ein Tier", t5_qc: "Ein Mensch", t5_qd: "Ein Begleiter",

    t6_title: "Wörter zählen",
    t6_text: "Wörter in einem Satz stehen nie direkt zusammen. Zwischen jedem Wort ist eine kleine Pause: das Leerzeichen! So können wir sie zählen.",
    t6_b1: "Zwischen Wörtern ist Platz (Leerzeichen).",
    t6_b2: "'Der Hund bellt.' = 3 Wörter.",
    t6_inst: "Wie viele Wörter hat dieser Satz: 'Ich sehe den Mond.'?",
    t6_h1: "Zähle jedes Wort einzeln: Ich (1) sehe (2)...",
    t6_h2: "Es sind genau 4 Wörter.",
    t6_w1: "Ich", t6_w2: "sehe", t6_w3: "den", t6_w4: "Mond",
    t6_q: "Wie viele Wörter hat der Satz: 'Die Katze schläft.'?",
    t6_qa: "3", t6_qb: "2", t6_qc: "4", t6_qd: "5",

    t7_title: "Sinnvolle Wörter",
    t7_text: "Nicht jede Buchstabenreihe ist ein Wort. 'Blu-me' bedeutet etwas. 'Xy-lo-pff' ist Quatsch!",
    t7_b1: "Echte Wörter haben eine Bedeutung.",
    t7_b2: "Quatschwörter bedeuten nichts.",
    t7_inst: "Finde das Quatschwort!",
    t7_h1: "Welches Wort gibt es nicht in echt?",
    t7_h2: "'Blork' ist kein echtes Wort.",
    t7_w1: "Hund", t7_w2: "Blork", t7_w3: "Baum", t7_w4: "Haus",
    t7_q: "Welches ist ein echtes Wort?",
    t7_qa: "Sonne", t7_qb: "Rmpf", t7_qc: "Lululu", t7_qd: "Ktz",

    t8_title: "Wort-Familien",
    t8_text: "Wörter können verwandt sein! Baum, Bäume, Baumhaus — alle gehören zur Familie von 'Baum'.",
    t8_b1: "Verwandte Wörter haben einen gemeinsamen Wortstamm",
    t8_b2: "Baum → Bäume, Baumhaus, Baumstamm",
    t8_inst: "Finde die Wort-Familie!",
    t8_h1: "Welche Wörter gehören zusammen?",
    t8_h2: "Baum, Bäume und Baumhaus gehören zusammen!",
    t8_q: "Welches Wort gehört zur Baum-Familie?",
    t8_qa: "Baumhaus", t8_qb: "Maus", t8_qc: "Haus", t8_qd: "Auto",

    t9_title: "Gegensätze",
    t9_text: "Manche Wörter bedeuten das genaue Gegenteil! Groß ist das Gegenteil von klein. Schnell und langsam sind Gegensätze.",
    t9_b1: "Gegensätze sind Wörter mit entgegengesetzter Bedeutung",
    t9_b2: "groß ↔ klein,  schnell ↔ langsam",
    t9_inst: "Finde das Gegenteil!",
    t9_h1: "Welches Wort bedeutet das Gegenteil?",
    t9_h2: "Gegenteil von 'groß' ist 'klein'!",
    t9_q: "Welches Wort ist das Gegenteil von 'heiß'?",
    t9_qa: "kalt", t9_qb: "warm", t9_qc: "heiß", t9_qd: "eiskalt",

    t10_title: "Wörter nach Länge",
    t10_text: "Manche Wörter sind kurz: 'Hund', 'Haus'. Andere sind lang: 'Elefant', 'Lokomotive'. Wir können Wörter nach ihrer Länge sortieren!",
    t10_b1: "Kurze Wörter haben wenige Buchstaben",
    t10_b2: "Lange Wörter haben viele Buchstaben",
    t10_inst: "Sortiere nach Wort-Länge!",
    t10_h1: "Zähle die Buchstaben: 'Hund' = 4, 'Elefant' = 7",
    t10_h2: "Hund ist kurz, Elefant ist lang.",
    t10_q: "Welches Wort ist am kürzesten?",
    t10_qa: "Haus", t10_qb: "Elefant", t10_qc: "Lokomotive", t10_qd: "Auto",

    t11_title: "Anfangsbuchstaben",
    t11_text: "Viele Wörter können mit dem gleichen Buchstaben anfangen! Baum, Ball, Blume — alle fangen mit B an. Das nennt man 'Alliteration'!",
    t11_b1: "Worte mit gleichem Anfangslaut heißen 'Alliteration'",
    t11_b2: "Baum, Ball, Blume → alle beginnen mit B",
    t11_inst: "Welche Wörter gehören zusammen?",
    t11_h1: "Schau auf die Anfangsbuchstaben!",
    t11_h2: "Alle B-Wörter gehören zusammen!",
    t11_q: "Welches Wort passt zu 'Schmetterling' und 'Schule'?",
    t11_qa: "Schrank", t11_qb: "Blume", t11_qc: "Mond", t11_qd: "Sonne",

    t12_title: "Gegenstände benennen",
    t12_text: "Jeder Gegenstand hat einen Namen! Ein Stuhl ist zum Sitzen, ein Tisch zum Essen. Kannst du die Gegenstände richtig benennen?",
    t12_b1: "Gegenstände haben Namen",
    t12_b2: "Wir können Gegenstände beschreiben und benennen",
    t12_inst: "Welcher Name passt?",
    t12_h1: "Wofür brauchen wir den Gegenstand?",
    t12_h2: "Ein Stuhl ist zum Sitzen — es ist ein Stuhl!",
    t12_q: "Worauf sitzt man?",
    t12_qa: "auf einem Stuhl", t12_qb: "auf einem Tisch", t12_qc: "auf der Straße", t12_qd: "auf dem Dach",

    t13_title: "Wort-Rätsel",
    t13_text: "'Ich bin groß, habe Äste und Blätter. Im Herbst werden meine Blätter rot und gelb.' Was bin ich? → Ein Baum!",
    t13_b1: "Rätsel helfen, Wörter besser zu verstehen",
    t13_b2: "Mit Hinweisen kann man das Wort erraten",
    t13_inst: "Löse das Rätsel!",
    t13_h1: "Höre auf die Beschreibung!",
    t13_h2: "Ein Baum hat Äste und Blätter!",
    t13_q: "Rätsel: 'Ich bin rund, gelb und süß. Affen mögen mich sehr!' Was bin ich?",
    t13_qa: "Eine Banane", t13_qb: "Ein Apfel", t13_qc: "Eine Orange", t13_qd: "Eine Erdbeere",

    t14_title: "Nomen und Verben",
    t14_text: "Wörter können Nomen oder Verben sein! 'Hund' ist ein Nomen (was ist es?). 'Bellen' ist ein Verb (was tut der Hund?). Wir können Wörter sortieren!",
    t14_b1: "Nomen: Gegenstände, Tiere, Menschen (Wer oder Was?)",
    t14_b2: "Verben: Handlungen, Tätigkeiten (Was tut es?)",
    t14_inst: "Ist es ein Nomen oder Verb?",
    t14_h1: "Frage: 'Was ist das?' oder 'Was tut es?'",
    t14_h2: "'Katze' = Nomen (Was?), 'laufen' = Verb (Was tut es?)",
    t14_q: "Welches Wort ist ein Verb?",
    t14_qa: "spielen", t14_qb: "Tisch", t14_qc: "Baum", t14_qd: "Haus",

    t15_title: "Wort-Meister",
    t15_text: "Du kennst jetzt alle Wort-Themen! Familien, Gegensätze, Längen, Anfangsbuchstaben — alles beherrschst du! Bist du wirklich ein Wort-Meister?",
    t15_b1: "Du beherrschst alle Wort-Techniken",
    t15_b2: "Wort-Wissen ist sehr wichtig für das Lesen!",
    t15_b3: "Herzlichen Glückwunsch!",
    t15_inst: "Teste dein ganzes Wort-Wissen!",
    t15_h1: "Nutze alles, was du gelernt hast!",
    t15_h2: "Du schaffst es, Wort-Meister!",
    t15_q: "Welches Wort passt AM BESTEN zu allen Kriterien?",
    t15_qa: "Blume", t15_qb: "Xyzq", t15_qc: "Bewegung", t15_qd: "Rot",
  }
};

export const WORD_POOL: PoolTopicDef[] = [
  // ── 1. Buchstaben vs Wörter — drag-to-bucket ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["A", "O"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Auto", "Oma"], bg: "#D1FAE5", border: "#059669" } },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "w", label: "t1_bw" }, { id: "b", label: "t1_bb" }],
      items: [
        { text: "t1_i1", bucketId: "b" }, // A
        { text: "t1_i2", bucketId: "w" }, // Hund
        { text: "t1_i3", bucketId: "b" }, // O
        { text: "t1_i4", bucketId: "w" }, // Sonne
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Namenwörter (Großschreibung) — highlight text ───────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "und", color: "#6B7280", bg: "#F3F4F6" }, { text: "Vogel", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "klein", color: "#6B7280", bg: "#F3F4F6" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [1], // Vogel
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Die drei Fahnen (Artikel) — highlight text ─────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [ { emoji: "🔵", label: "der" }, { emoji: "🔴", label: "die" }, { emoji: "🟢", label: "das" } ] },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Hier fährt das Auto
      correctIndices: [2], // das
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Wörter verbinden — match-pairs ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["Baum", "Haus"], ["Eis", "Bär"]], color: "#059669", dimColor: "#A7F3D0" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
      ],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Tier oder Ding? — drag-to-bucket ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Katze", "Hund"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Tisch", "Buch"], bg: "#E0E7FF", border: "#4F46E5" } },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "t", label: "t5_bt" }, { id: "d", label: "t5_bd" }],
      items: [
        { text: "t5_i1", bucketId: "t" }, // Hase
        { text: "t5_i2", bucketId: "d" }, // Ball
        { text: "t5_i3", bucketId: "t" }, // Bär
        { text: "t5_i4", bucketId: "d" }, // Auto
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Wörter zählen — highlight text ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-circles", letters: ["1", "2", "3", "4"], color: "#8B5CF6" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"], // Ich sehe den Mond
      correctIndices: [0, 1, 2, 3], // highlight all to "count" them
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Quatschwörter — highlight text ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "text-bubbles", items: [ { text: "Baum", color: "#047857", bg: "#D1FAE5" }, { text: "Blork", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], // Hund, Blork, Baum, Haus
      correctIndices: [1], // Blork is fake
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Wort-Familien — match-pairs ───────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "Baum", color: "#047857", bg: "#D1FAE5" }, { text: "Bäume", color: "#047857", bg: "#D1FAE5" }, { text: "Baumhaus", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "Baum", right: "Familie 🌳" },
        { left: "Haus", right: "Familie 🏠" },
        { left: "Kind", right: "Familie 👶" },
        { left: "Hund", right: "Familie 🐕" },
      ],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Gegensätze — match-pairs ───────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["groß", "heiß", "schnell"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["klein", "kalt", "langsam"], bg: "#DBEAFE", border: "#3B82F6" } },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "groß", right: "klein" },
        { left: "heiß", right: "kalt" },
        { left: "schnell", right: "langsam" },
        { left: "hell", right: "dunkel" },
      ],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Wörter nach Länge — drag-to-bucket ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "icon-grid", items: [ { emoji: "🔤", label: "Kurz" }, { emoji: "🔤🔤🔤", label: "Mittel" }, { emoji: "🔤🔤🔤🔤🔤", label: "Lang" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "short", label: "Kurz (1-3)" }, { id: "long", label: "Lang (4+)" }],
      items: [
        { text: "Haus", bucketId: "short" },
        { text: "Auto", bucketId: "short" },
        { text: "Elefant", bucketId: "long" },
        { text: "Lokomotive", bucketId: "long" },
      ],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Anfangsbuchstaben — match-pairs ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: "B...", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "S...", color: "#059669", bg: "#D1FAE5" }, { text: "K...", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "Baum", right: "B-Familie" },
        { left: "Sonne", right: "S-Familie" },
        { left: "Katze", right: "K-Familie" },
        { left: "Blume", right: "B-Familie" },
      ],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Gegenstände benennen — drag-to-bucket ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [ { emoji: "🪑", label: "zum Sitzen" }, { emoji: "🍽️", label: "zum Essen" }, { emoji: "🛏️", label: "zum Schlafen" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🛋️", count: 3 },
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Wort-Rätsel — highlight-text ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "?", emoji: "🤔", color: "#8B5CF6", bg: "#F3E8FF" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["Banane", "Apfel", "Orange", "Erdbeere"],
      correctIndices: [0],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Nomen und Verben — drag-to-bucket ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["Katze", "Tisch", "Buch"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["spielen", "laufen", "essen"], bg: "#D1FAE5", border: "#059669" } },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nomen", label: "Nomen 📝" }, { id: "verb", label: "Verb 🏃" }],
      items: [
        { text: "spielen", bucketId: "verb" },
        { text: "Tisch", bucketId: "nomen" },
        { text: "laufen", bucketId: "verb" },
        { text: "Baum", bucketId: "nomen" },
      ],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Wort-Meister — highlight-text ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "MEISTER!", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["Blume", "Xyzq", "Bewegung", "Rot"],
      correctIndices: [0],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Reiminsel (Rhymes)
// ─────────────────────────────────────────────────────────────────────────────

export const RHYME_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Reiminsel",

    t1_title: "Was ist ein Reim?",
    t1_text: "Wenn zwei Wörter am Ende genau gleich klingen, dann reimen sie sich! Maus 🐭 und Haus 🏠 reimen sich. Höre genau hin!",
    t1_b1: "Reimwörter klingen am Ende gleich.",
    t1_b2: "Maus - Haus, Hund - Mund.",
    t1_inst: "Welches Wort reimt sich auf 'Maus'?",
    t1_h1: "Es muss am Ende wie '-aus' klingen.",
    t1_h2: "Maus reimt sich auf Haus.",
    t1_w1: "Haus", t1_w2: "Katze", t1_w3: "Käse", t1_w4: "Baum",
    t1_q: "Was machen Reimwörter?",
    t1_qa: "Sie klingen am Ende gleich", t1_qb: "Sie haben dieselbe Farbe", t1_qc: "Sie fangen mit dem gleichen Buchstaben an", t1_qd: "Sie sind immer Tiere",

    t2_title: "Reim-Paare finden",
    t2_text: "Ein Reim-Paar sind zwei Wörter, die dicke Freunde sind, weil sie so ähnlich klingen. Hase und Nase sind ein tolles Paar!",
    t2_b1: "Hase reimt sich auf Nase.",
    t2_b2: "Baum reimt sich auf Traum.",
    t2_inst: "Verbinde die Wörter, die sich reimen!",
    t2_h1: "Sprich die Wörter laut.",
    t2_h2: "Hase-Nase, Baum-Traum, Hund-Mund.",
    t2_l1: "Hase", t2_r1: "Nase",
    t2_l2: "Baum", t2_r2: "Traum",
    t2_l3: "Hund", t2_r3: "Mund",
    t2_l4: "Tanne", t2_r4: "Kanne",
    t2_q: "Welches Wort reimt sich auf 'Hund'?",
    t2_qa: "Mund", t2_qb: "Katze", t2_qc: "Knochen", t2_qd: "Wald",

    t3_title: "Das passt nicht!",
    t3_text: "Manchmal versteckt sich ein Wort, das überhaupt nicht reimt. Das ist der Quatschmacher in der Gruppe!",
    t3_b1: "Drei Wörter reimen sich.",
    t3_b2: "Ein Wort klingt ganz anders.",
    t3_inst: "Finde das Wort, das sich NICHT reimt!",
    t3_h1: "Drei Wörter enden auf '-ose'.",
    t3_h2: "'Baum' reimt sich nicht auf Hose, Rose und Dose.",
    t3_w1: "Hose", t3_w2: "Rose", t3_w3: "Baum", t3_w4: "Dose",
    t3_q: "Warum passt 'Baum' nicht zu 'Rose'?",
    t3_qa: "Es klingt am Ende anders", t3_qb: "Es ist zu groß", t3_qc: "Es hat weniger Buchstaben", t3_qd: "Es ist ein Ding",

    t4_title: "Tier-Reime",
    t4_text: "Auch unsere Lieblingstiere können reimen! Weißt du, was sich auf 'Bär' reimt? Oder auf 'Schwein'?",
    t4_b1: "Bär reimt sich auf schwer.",
    t4_b2: "Schwein reimt sich auf klein.",
    t4_inst: "Verbinde das Tier mit dem passenden Reim!",
    t4_h1: "Was reimt sich auf Bär? Schwer!",
    t4_h2: "Schwein-klein, Kuh-Schuh.",
    t4_l1: "Bär", t4_r1: "schwer",
    t4_l2: "Schwein", t4_r2: "klein",
    t4_l3: "Kuh", t4_r3: "Schuh",
    t4_l4: "Maus", t4_r4: "Haus",
    t4_q: "Was reimt sich auf 'Kuh'?",
    t4_qa: "Schuh", t4_qb: "Milch", t4_qc: "Gras", t4_qd: "Muuuh",

    t5_title: "Kurze Reime",
    t5_text: "Kleine Wörter können auch reimen! Tee ☕ und See 🌊 sind nur drei Buchstaben lang, aber ein perfektes Reim-Paar.",
    t5_b1: "See reimt sich auf Tee.",
    t5_b2: "Eis reimt sich auf heiß.",
    t5_inst: "Welches Wort reimt sich auf 'Eis'?",
    t5_h1: "Es endet auf den gleichen Klang.",
    t5_h2: "Eis - heiß.",
    t5_w1: "kalt", t5_w2: "heiß", t5_w3: "Schnee", t5_w4: "Winter",
    t5_q: "Welches Wort reimt sich auf 'See'?",
    t5_qa: "Tee", t5_qb: "Wasser", t5_qc: "Boot", t5_qd: "Fisch",

    t6_title: "Bilder-Reime",
    t6_text: "Manchmal haben wir keine Buchstaben, sondern nur Bilder. Aber wenn wir sie laut aussprechen, hören wir den Reim!",
    t6_b1: "Sprich das Bild laut aus.",
    t6_b2: "👑 (Krone) reimt sich auf 🍋 (Zitrone).",
    t6_inst: "Verbinde die Bilder, die sich reimen!",
    t6_h1: "Krone - Zitrone, Haus - Maus.",
    t6_h2: "Stern - Laterne (Nein!), Stern - gern.",
    t6_l1: "👑 Krone", t6_r1: "🍋 Zitrone",
    t6_l2: "🏠 Haus", t6_r2: "🐭 Maus",
    t6_l3: "👻 Geist", t6_r3: "🍦 Eis",
    t6_l4: "🔥 Feuer", t6_r4: "👹 Ungeheuer",
    t6_q: "Was reimt sich auf das Bild 🏠 (Haus)?",
    t6_qa: "🐭 Maus", t6_qb: "🌳 Baum", t6_qc: "🚗 Auto", t6_qd: "☀️ Sonne",

    t7_title: "Reime sortieren",
    t7_text: "Können wir Wörter in Reim-Familien sortieren? Alle Wörter, die auf '-aus' enden, gehören in ein Haus. Alle, die auf '-und' enden, zum Hund!",
    t7_b1: "Familie '-aus': Maus, Raus.",
    t7_b2: "Familie '-und': Mund, Rund.",
    t7_inst: "Sortiere die Wörter in die richtige Reim-Familie!",
    t7_h1: "Hört es sich an wie Maus oder wie Hund?",
    t7_h2: "Mund und rund gehören zum Hund.",
    t7_ba: "Wie Haus 🏠", t7_bb: "Wie Hund 🐶",
    t7_i1: "Maus", t7_i2: "Mund", t7_i3: "raus", t7_i4: "rund",
    t7_q: "In welche Familie gehört 'Applaus'?",
    t7_qa: "Wie Haus", t7_qb: "Wie Hund", t7_qc: "Wie Baum", t7_qd: "Wie Katze",
    t8_title: "Reim-Gedicht",
    t8_text: "Gedichte sind voller Reime! Wenn wir Verse mit Reimen schreiben, entsteht ein schönes Reim-Gedicht.",
    t8_b1: "Gedichte können reimen.",
    t8_b2: "Zwei Verse mit Reim am Ende.",
    t8_inst: "Welches Wort reimt sich auf 'Licht'?",
    t8_h1: "Es muss auf '-icht' enden.",
    t8_h2: "Licht - Nacht (Nein!), Licht - Wicht.",
    t8_w1: "Nacht", t8_w2: "Wicht", t8_w3: "Baum", t8_w4: "Tritt",
    t8_q: "Welches Wort reimt sich auf 'Licht'?",
    t8_qa: "Wicht", t8_qb: "Dunkel", t8_qc: "Sonne", t8_qd: "Tag",

    t9_title: "Anfang-Reime (Alliteration)",
    t9_text: "Manchmal fangen Wörter mit demselben Buchstaben an. Das heißt Alliteration! Beispiel: 'Bolde Bären bauen Brücken.'",
    t9_b1: "Alle Wörter beginnen mit 'B'.",
    t9_b2: "Das klingt lustig und rhythmisch.",
    t9_inst: "Welches Wort passt zur Alliteration mit 'S'?",
    t9_h1: "Es muss mit 'S' anfangen.",
    t9_h2: "Sonne, Stern, ... Schnee.",
    t9_w1: "Stern", t9_w2: "Regen", t9_w3: "Sonne", t9_w4: "Sturm",
    t9_q: "Welches Wort gehört zu 'Sonne, Sommer, ...'?",
    t9_qa: "Sturm", t9_qb: "Regen", t9_qc: "Mond", t9_qd: "Nacht",

    t10_title: "Langsame und schnelle Reime",
    t10_text: "Manche Reime sind nah beieinander (schnelle Reime). Manche sind weit entfernt (langsame Reime). Beides klingt schön!",
    t10_b1: "Schnelle Reime: Hand - Band.",
    t10_b2: "Langsame Reime: ... später ... wieder.",
    t10_inst: "Sind diese Reime nah oder weit entfernt?",
    t10_h1: "Zähle die Wörter dazwischen.",
    t10_h2: "Nah: 0-2 Wörter. Weit: 3+ Wörter.",
    t10_w1: "nah", t10_w2: "weit", t10_w3: "schnell", t10_w4: "langsam",
    t10_q: "Wie heißt ein Reim, der weit entfernt ist?",
    t10_qa: "Langsamer Reim", t10_qb: "Schneller Reim", t10_qc: "Doppel-Reim", t10_qd: "Gebrochener Reim",

    t11_title: "Lustige Schein-Reime",
    t11_text: "Manche Wörter sehen so aus, als würden sie sich reimen, aber sie tun es nicht! Oder sie klingen so, als würden sie sich reimen, aber das ist Betrug!",
    t11_b1: "Schein-Reime sehen oder klingen falsch.",
    t11_b2: "Beispiel: 'Lachen' und 'Dachen' (Nein!).",
    t11_inst: "Finde das Wort, das NICHT wirklich reimt!",
    t11_h1: "Sprich die Wörter laut.",
    t11_h2: "Dachen klingt nicht wie Lachen.",
    t11_w1: "Lachen", t11_w2: "machen", t11_w3: "Dachen", t11_w4: "Sachen",
    t11_q: "Welches ist kein echtes Reim-Paar?",
    t11_qa: "Lachen - Dachen", t11_qb: "Lachen - machen", t11_qc: "Sachen - machen", t11_qd: "Dachen - Sachen",

    t12_title: "Reim-Spiele",
    t12_text: "Reime sind super zum Spielen! Wer findet die meisten Reim-Paare in einer Minute? Los geht's!",
    t12_b1: "Spiele machen Reimen Spaß.",
    t12_b2: "Schneller finden = mehr Punkte.",
    t12_inst: "Finde schnell ein Reim-Paar!",
    t12_h1: "Denke an bekannte Reime.",
    t12_h2: "Apfel - Duffel, Tisch - Fisch.",
    t12_w1: "Tisch", t12_w2: "Bisch", t12_w3: "Fisch", t12_w4: "Wisch",
    t12_q: "Welches Wort reimt sich auf 'Tisch'?",
    t12_qa: "Fisch", t12_qb: "Teller", t12_qc: "Stuhl", t12_qd: "Besteck",

    t13_title: "Reime im Namen",
    t13_text: "Sogar Namen können reimen! Michael und Chantal? Nein. Aber Anna und Hanna? Ja! Vielleicht heißt dein bester Freund so, dass sein Name mit deinem reimt!",
    t13_b1: "Viele Namen können reimen.",
    t13_b2: "Anna - Hanna, Paul - Saul.",
    t13_inst: "Auf welchen Namen reimt sich 'Paul'?",
    t13_h1: "Es muss mit '-aul' enden.",
    t13_h2: "Saul, Maul (aber das ist kein Name!).",
    t13_w1: "Saul", t13_w2: "Peter", t13_w3: "Maul", t13_w4: "Klaus",
    t13_q: "Welcher Name reimt sich auf 'Saul'?",
    t13_qa: "Paul", t13_qb: "Peter", t13_qc: "Klaus", t13_qd: "Anna",

    t14_title: "Bewegungsreime",
    t14_text: "Wir können mit unserem Körper reimen! Wenn wir beim Reimen Bewegungen machen, merken wir uns die Worte besser. Springe, hüpfe, drehe dich!",
    t14_b1: "Bewegungen + Reime = doppelter Spaß.",
    t14_b2: "Hand - Band (dabei klatschen).",
    t14_l1: "Springe", t14_r1: "Springe",
    t14_l2: "Hüpfe", t14_r2: "Hüpfe",
    t14_l3: "Drehe", t14_r3: "Drehe",
    t14_l4: "Dreh dich", t14_r4: "Dreh dich",
    t14_q: "Was ist ein Bewegungs-Reim?",
    t14_qa: "Reim mit Körperbewegungen", t14_qb: "Nur Worte ohne Bewegung", t14_qc: "Tanzen ohne Musik", t14_qd: "Springen ohne zu zählen",

    t15_title: "Reim-Meister",
    t15_text: "Du bist jetzt ein echtes Reim-Meister! Du kennst alles über Reime: Was sie sind, wie sie funktionieren, und wie man mit ihnen spielt. Gratuliere dir selbst! 🎉",
    t15_b1: "Du kannst alle Reim-Arten.",
    t15_b2: "Reim-Meister ist dein neuer Titel!",
    t15_inst: "Was ist ein Reim?",
    t15_h1: "Denke an alles, was du gelernt hast.",
    t15_h2: "Reime sind Wörter, die am Ende gleich klingen.",
    t15_w1: "klingen", t15_w2: "gleich", t15_w3: "Farbe", t15_w4: "Tier",
    t15_q: "Was machst du jetzt, wenn du Reime hörst?",
    t15_qa: "Ich erkenne die Muster gleich", t15_qb: "Ich bin verwirrt", t15_qc: "Ich ignoriere sie", t15_qd: "Ich vergesse sie",
  }
};

export const RHYME_POOL: PoolTopicDef[] = [
  // ── 1. Was ist ein Reim? — highlight text ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "Maus", emoji: "🐭", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "Haus", emoji: "🏠", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], // Haus, Katze, Käse, Baum
      correctIndices: [0], // Haus
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Reim-Paare finden — match-pairs ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["Hase", "Nase"], ["Hund", "Mund"]], color: "#D97706", dimColor: "#FDE68A" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Das passt nicht! — highlight text (Odd one out) ────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "Hose", emoji: "👖", color: "#B91C1C", bg: "#FEE2E2" }, { text: "Rose", emoji: "🌹", color: "#B91C1C", bg: "#FEE2E2" }, { text: "Dose", emoji: "🥫", color: "#B91C1C", bg: "#FEE2E2" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Hose, Rose, Baum, Dose
      correctIndices: [2], // Baum does not rhyme
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Tier-Reime — match-pairs ───────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [ { emoji: "🐻", label: "Bär" }, { emoji: "🐷", label: "Schwein" }, { emoji: "🐮", label: "Kuh" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
      ],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Kurze Reime — highlight text ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "Eis", emoji: "🍦", color: "#0EA5E9", bg: "#E0F2FE" }, { text: "heiß", emoji: "🔥", color: "#DC2626", bg: "#FEE2E2" } ] },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"], // kalt, heiß, Schnee, Winter
      correctIndices: [1], // heiß
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Bilder-Reime — match-pairs ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [ { emoji: "👑", label: "Krone" }, { emoji: "🍋", label: "Zitrone" } ] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
        { left: "t6_l4", right: "t6_r4" },
      ],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Reime sortieren — drag-to-bucket ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["Haus", "aus"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Hund", "rund"], bg: "#E0E7FF", border: "#4F46E5" } },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "a", label: "t7_ba" }, { id: "u", label: "t7_bb" }],
      items: [
        { text: "t7_i1", bucketId: "a" }, // Maus -> Haus
        { text: "t7_i2", bucketId: "u" }, // Mund -> Hund
        { text: "t7_i3", bucketId: "a" }, // raus -> Haus
        { text: "t7_i4", bucketId: "u" }, // rund -> Hund
      ],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Reim-Gedicht — highlight text ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "Tag", emoji: "☀️", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Schlag", emoji: "⚡", color: "#DC2626", bg: "#FEE2E2" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Anfang-Reime (Alliteration) — match-pairs ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "letter-circles", letters: ["T", "B", "W"], color: "#8B5CF6" },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [0, 2],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Langsame und schnelle Reime — highlight text ────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "Hund-Mund", emoji: "⚡", color: "#22C55E", bg: "#DCFCE7" }, { text: "Schmetter-Ring", emoji: "🐢", color: "#06B6D4", bg: "#CFFAFE" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [1],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Lustige Schein-Reime — highlight text ──────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [ { emoji: "👀", label: "Schauen" }, { emoji: "👂", label: "Hören" } ] },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [2],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qb" },
  },

  // ── 12. Reim-Spiele — match-pairs ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [ { text: "Hose", emoji: "👖", color: "#B91C1C", bg: "#FEE2E2" }, { text: "Rose", emoji: "🌹", color: "#DB2777", bg: "#FCE7F3" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0, 1, 3],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Reime im Namen — match-pairs ───────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "Mia", emoji: "👧", color: "#EC4899", bg: "#F9E7F3" }, { text: "Pia", emoji: "👧", color: "#EC4899", bg: "#F9E7F3" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Bewegungsreime — match-pairs ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "icon-grid", items: [ { emoji: "🕺", label: "Tanzen" }, { emoji: "🤸", label: "Springen" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "Hopse", right: "Topse" },
        { left: "Tänzer", right: "Glänzer" },
        { left: "Walzer", right: "Balzer" },
        { left: "Sprung", right: "Klang" },
      ],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Reim-Meister — highlight text ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "⭐ Meister ⭐", emoji: "👑", color: "#FBBF24", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [0, 3],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Satzinsel (Sentences)
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzinsel",

    t1_title: "Was ist ein Satz?",
    t1_text: "Ein Satz ist wie eine kleine Geschichte. Er fängt immer mit einem GROSSEN Buchstaben an und hört meistens mit einem Punkt (.) auf.",
    t1_b1: "Satzanfang = Großbuchstabe",
    t1_b2: "Satzende = Punkt (.)",
    t1_inst: "Finde den Satzanfang!",
    t1_h1: "Der erste Buchstabe im Satz muss groß sein.",
    t1_h2: "Das 'D' in 'Der' ist groß.",
    t1_w1: "Der", t1_w2: "Hund", t1_w3: "spielt", t1_w4: "im", t1_w5: "Garten.",
    t1_q: "Wie endet ein normaler Erzählsatz?",
    t1_qa: "Mit einem Punkt (.)", t1_qb: "Mit einem Komma (,)", t1_qc: "Mit einer Zahl", t1_qd: "Gar nicht",

    t2_title: "Das Satzende (Punkt)",
    t2_text: "Der Punkt (.) sagt uns: 'Hier ist der Satz fertig. Mach eine kleine Pause beim Lesen!'",
    t2_b1: "Der Punkt (.) schließt den Satz ab.",
    t2_inst: "Wo gehört der Punkt hin?",
    t2_h1: "Der Punkt kommt immer ganz ans Ende.",
    t2_h2: "Nach dem Wort 'schläft' ist der Satz zu Ende.",
    t2_w1: "Die", t2_w2: "Katze", t2_w3: "schläft", t2_w4: ".",
    t2_q: "Wo steht das Satzzeichen?",
    t2_qa: "Am Ende des Satzes", t2_qb: "Am Anfang", t2_qc: "In der Mitte", t2_qd: "Unter dem Wort",

    t3_title: "Fragesätze (?)",
    t3_text: "Wenn wir etwas wissen wollen, stellen wir eine Frage. Dann benutzen wir ein Fragezeichen (?). Die Stimme geht am Ende nach oben!",
    t3_b1: "Fragen enden mit (?)",
    t3_b2: "Wer? Wie? Was? Wo?",
    t3_inst: "Welches Satzzeichen passt hier: 'Wie geht es dir'?",
    t3_h1: "Das ist eine Frage, also brauchen wir das Fragezeichen.",
    t3_h2: "Das Zeichen (?) ist richtig.",
    t3_w1: ".", t3_w2: "?", t3_w3: "!", t3_w4: ",",
    t3_q: "Welches Wort leitet oft eine Frage ein?",
    t3_qa: "Wer", t3_qb: "und", t3_qc: "ist", t3_qd: "nicht",

    t4_title: "Wörter ordnen",
    t4_text: "In einem Satz dürfen die Wörter nicht purzeln! Sie müssen in der richtigen Reihenfolge stehen, damit wir sie verstehen.",
    t4_b1: "Die Reihenfolge ist wichtig.",
    t4_b2: "Ich - esse - Apfel (Richtig!). Apfel - ich - esse (Falsch!).",
    t4_inst: "Welcher Satz ist richtig gebaut?",
    t4_h1: "Wer macht was? 'Ich spiele Ball.'",
    t4_h2: "'Ich spiele Ball' ergibt Sinn.",
    t4_w1: "Ich spiele Ball.", t4_w2: "Ball spiele Ich.", t4_w3: "Spiele Ball Ich.", t4_w4: "Ich Ball spiele.",
    t4_q: "Was passiert, wenn man Wörter im Satz vertauscht?",
    t4_qa: "Der Satz ist schwer zu verstehen", t4_qb: "Nichts passiert", t4_qc: "Die Buchstaben werden kleiner", t4_qd: "Der Punkt verschwindet",

    t5_title: "Punkt oder Fragezeichen?",
    t5_text: "Erzählen wir etwas (Punkt) oder fragen wir etwas (Fragezeichen)? Du musst entscheiden!",
    t5_b1: "Aussage = Punkt (.)",
    t5_b2: "Frage = Fragezeichen (?)",
    t5_inst: "Sortiere: Gehört ein Punkt vagy Fragezeichen am Ende?",
    t5_h1: "Ist es eine Information oder eine Frage?",
    t5_h2: "'Ich bin groß.' (Punkt). 'Bist du groß?' (Fragezeichen).",
    t5_bp: "Punkt (.) 🔵", t5_bf: "Fragezeichen (?) 🔴",
    t5_i1: "Ich heiße Tim.", t5_i2: "Wie heißt du?", t5_i3: "Es regnet.", t5_i4: "Regnet es?",
    t5_q: "Was kommt nach 'Wo ist mein Teddy'?",
    t5_qa: "Ein Fragezeichen (?)", t5_qb: "Ein Punkt (.)", t5_qc: "Ein Ausrufezeichen (!)", t5_qd: "Nichts",

    t6_title: "Ausrufezeichen (!)",
    t6_text: "Das Ausrufezeichen (!) benutzen wir, wenn wir etwas laut rufen, befehlen oder wenn etwas ganz wichtig ist: 'Stopp!' 🛑 vagy 'Hilfe!' 🆘",
    t6_b1: "Rufen oder Befehlen.",
    t6_b2: "Wichtiges hervorheben.",
    t6_inst: "Welches Wort braucht ein Ausrufezeichen!",
    t6_h1: "Suche das Wort, das man laut ruft.",
    t6_h2: "'Halt!' ruft man laut.",
    t6_w1: "und", t6_w2: "Halt", t6_w3: "leise", t6_w4: "vielleicht",
    t6_q: "Was zeigt ein Ausrufezeichen (!) an?",
    t6_qa: "Dass man laut ruft oder befiehlt", t6_qb: "Dass man eine Frage stellt", t6_qc: "Dass der Satz ganz lang ist", t6_qd: "Dass man flüstert",

    t7_title: "Satz-Detektiv",
    t7_text: "Ein echter Satz-Detektiv sieht sofort, ob ein Satz gesund ist (Groß am Anfang, Zeichen am Ende) oder ob er Hilfe braucht!",
    t7_b1: "Anfang groß?",
    t7_b2: "Ende mit Zeichen?",
    t7_inst: "Finde den fehlerfreien Satz!",
    t7_h1: "Achte auf den großen Buchstaben am Anfang.",
    t7_h2: "'Die Sonne scheint.' ist perfekt.",
    t7_w1: "die Sonne scheint.", t7_w2: "Die Sonne scheint", t7_w3: "Die Sonne scheint.", t7_w4: "die sonne scheint",
    t7_q: "Was fehlt hier: 'ich gehe nach hause'?",
    t7_qa: "Großbuchstabe und Punkt", t7_qb: "Nur der Punkt", t7_qc: "Nur der Großbuchstabe", t7_qd: "Nichts fehlt",
    t8_title: "Sätze verlängern",
    t8_text: "Kurze Sätze sind langweilig. Wir können sie verlängern, indem wir mehr Wörter hinzufügen! 'Der Hund läuft' → 'Der schnelle Hund läuft durch den Park.'",
    t8_b1: "Adjektive machen Sätze interessanter.",
    t8_b2: "'Schnell' macht den Satz lebendig.",
    t8_inst: "Welches Wort verlängert den Satz?",
    t8_h1: "Ein Adjektiv (Eigenschaft).",
    t8_h2: "'schnelle' oder 'große'.",
    t8_w1: "schnelle", t8_w2: "läuft", t8_w3: "Park", t8_w4: "und",
    t8_q: "Was verlängert einen Satz?",
    t8_qa: "Adjektive und Präpositionen", t8_qb: "Nur Verben", t8_qc: "Nur Artikel", t8_qd: "Satzzeichen",

    t9_title: "Sätze kombinieren",
    t9_text: "Zwei kurze Sätze können wir mit 'und' oder 'weil' verbinden! 'Der Hund läuft. Er ist glücklich.' → 'Der Hund läuft, weil er glücklich ist.'",
    t9_b1: "Mit 'und' verbindest du zwei Aussagen.",
    t9_b2: "Mit 'weil' sagst du einen Grund.",
    t9_inst: "Welches Wort verbindet die Sätze?",
    t9_h1: "Es verbindet zwei Gedanken.",
    t9_h2: "'und' oder 'weil'.",
    t9_w1: "und", t9_w2: "oder", t9_w3: "weil", t9_w4: "aber",
    t9_q: "Mit welchem Wort verbindest du einen Grund?",
    t9_qa: "weil", t9_qb: "und", t9_qc: "oder", t9_qd: "aber",

    t10_title: "Satzarten",
    t10_text: "Es gibt verschiedene Arten von Sätzen! Aussagesätze (Punkt), Fragesätze (Fragezeichen), Ausrufesätze (Ausrufezeichen).",
    t10_b1: "Aussagesatz: 'Das ist schön.'",
    t10_b2: "Fragesatz: 'Ist das schön?' Ausrufesatz: 'Das ist wunderbar!'",
    t10_inst: "Welche Art von Satz ist das?",
    t10_h1: "Schau auf das Satzzeichen.",
    t10_h2: "? = Frage, ! = Ausruf, . = Aussage.",
    t10_w1: "Aussagesatz", t10_w2: "Fragesatz", t10_w3: "Ausrufesatz", t10_w4: "Befehlssatz",
    t10_q: "Was endet mit einem Fragezeichen?",
    t10_qa: "Fragesatz", t10_qb: "Aussagesatz", t10_qc: "Ausrufesatz", t10_qd: "Befehlssatz",

    t11_title: "Satzglieder",
    t11_text: "Ein Satz hat Teile: Subjekt (Wer?), Prädikat (Was tut es?), Objekt (Was/Wen?). 'Der Hund frisst den Knochen.' → Subjekt: Der Hund, Prädikat: frisst, Objekt: den Knochen.",
    t11_b1: "Subjekt: Wer oder was?",
    t11_b2: "Prädikat: Was tut es?",
    t11_inst: "Was ist das Subjekt?",
    t11_h1: "Wer handelt in dem Satz?",
    t11_h2: "'Der Hund' ist das Subjekt.",
    t11_w1: "Subjekt", t11_w2: "Prädikat", t11_w3: "Objekt", t11_w4: "Verb",
    t11_q: "Was ist das Prädikat?",
    t11_qa: "Das Verb/Die Tätigkeit", t11_qb: "Das Wer-Wort", t11_qc: "Das Wen-Wort", t11_qd: "Das Satzsignal",

    t12_title: "Zeitformen im Satz",
    t12_text: "Verben können in verschiedenen Zeiten stehen! Präsens (jetzt): 'Der Hund läuft.' Präteritum (früher): 'Der Hund lief.' Perfekt (gerade passiert): 'Der Hund ist gelaufen.'",
    t12_b1: "Präsens = Gegenwart (jetzt).",
    t12_b2: "Präteritum = Vergangenheit (früher).",
    t12_inst: "Welche Zeitform ist das?",
    t12_h1: "Schau auf das Verb genau hin.",
    t12_h2: "'läuft' = Präsens, 'lief' = Präteritum.",
    t12_w1: "Präsens", t12_w2: "Präteritum", t12_w3: "Perfekt", t12_w4: "Futur",
    t12_q: "'Der Hund lief' - welche Zeitform?",
    t12_qa: "Präteritum", t12_qb: "Präsens", t12_qc: "Perfekt", t12_qd: "Futur",

    t13_title: "Sätze umdrehen",
    t13_text: "Wir können die Wortfolge ändern, ohne die Bedeutung zu ändern! 'Der Hund frisst einen Knochen.' → 'Einen Knochen frisst der Hund.' Interessant, nicht wahr?",
    t13_b1: "Das Objekt kann am Anfang stehen.",
    t13_b2: "Aber das Prädikat bleibt das Verb.",
    t13_inst: "Welche Umstellung ist richtig?",
    t13_h1: "Das Verb bleibt an Stelle 2.",
    t13_h2: "'Den Apfel iss ich.' ist richtig.",
    t13_w1: "umstellen", t13_w2: "Satz", t13_w3: "Wort", t13_w4: "Ordnung",
    t13_q: "Was ändert sich beim Umstellen?",
    t13_qa: "Die Betonung und vielleicht Nuance", t13_qb: "Das Verb verschwindet", t13_qc: "Der Satz wird falsch", t13_qd: "Nichts",

    t14_title: "Sätze mit Adjektiven schmücken",
    t14_text: "Adjektive machen Sätze schöner! 'Der Hund läuft.' → 'Der schnelle, glückliche Hund läuft.' Viele Adjektive zusammen sind wie Blumenschmuck!",
    t14_b1: "Adjektive beschreiben Eigenschaften.",
    t14_b2: "Sie machen den Satz interessanter.",
    t14_inst: "Welches Adjektiv passt am besten?",
    t14_h1: "Denke an eine Eigenschaft.",
    t14_h2: "'schnell', 'frech', 'groß'.",
    t14_w1: "schnell", t14_w2: "groß", t14_w3: "lustig", t14_w4: "blau",
    t14_q: "Warum brauchen Sätze Adjektive?",
    t14_qa: "Sie machen sie interessanter", t14_qb: "Sie sind Regeln", t14_qc: "Sie verändern die Zeit", t14_qd: "Sie sind pflicht",

    t15_title: "Sätze-Meister",
    t15_text: "Du bist jetzt ein Sätze-Meister! Du kennst alle Arten von Sätzen, Satzteile, Zeitformen und wie man sie verbessert. Du kannst jetzt schöne, lange, interessante Sätze schreiben! 🎉",
    t15_b1: "Du kennst Satzglieder und Zeitformen.",
    t15_b2: "Du kannst Sätze kombinieren und verlängern.",
    t15_inst: "Was bist du jetzt?",
    t15_h1: "Du hast viel über Sätze gelernt.",
    t15_h2: "Sätze-Meister ist dein Titel!",
    t15_w1: "Sätze-Meister", t15_w2: "Schreib-König", t15_w3: "Wort-Experte", t15_w4: "Grammatik-Held",
    t15_q: "Welche Fähigkeit hast du jetzt?",
    t15_qa: "Ich kann gut Sätze bilden", t15_qb: "Ich kenne keine Verben", t15_qc: "Ich bin verwirrt", t15_qd: "Ich habe alles vergessen",
  }
};

export const SENTENCE_POOL: PoolTopicDef[] = [
  // ── 1. Was ist ein Satz? — highlight sentence start ──────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "ABC...", emoji: "✍️", color: "#1D4ED8", bg: "#DBEAFE" }, { text: ".", emoji: "🏁", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"], // Der Hund spielt im Garten.
      correctIndices: [0], // Der
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Das Satzende — highlight punctuation ─────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [ { emoji: "🛑", label: "Punkt = Stopp" } ] },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], // Die Katze schläft .
      correctIndices: [3], // .
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Fragesätze (?) — highlight correct sign ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-circles", letters: ["?", ".", "!"], color: "#EF4444" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // . ? ! ,
      correctIndices: [1], // ?
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Wörter ordnen — highlight correct sentence ───────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Ich", "spiele", "Ball"], bg: "#D1FAE5", border: "#059669" }, right: { items: ["Ball", "Ich", "spiele"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctIndices: [0],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Punkt vagy Fragezeichen? — drag-to-bucket ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [ { emoji: "💬", label: "." }, { emoji: "❓", label: "?" } ] },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "p", label: "t5_bp" }, { id: "f", label: "t5_bf" }],
      items: [
        { text: "t5_i1", bucketId: "p" },
        { text: "t5_i2", bucketId: "f" },
        { text: "t5_i3", bucketId: "p" },
        { text: "t5_i4", bucketId: "f" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Ausrufezeichen (!) — highlight text ─────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "Stopp!", emoji: "🛑", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"], // und, Halt, leise, vielleicht
      correctIndices: [1], // Halt
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Satz-Detektiv — highlight correct option ────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["A", "."], ["a", "X"]], color: "#7C3AED", dimColor: "#C4B5FD" },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"],
      correctIndices: [2], // Die Sonne scheint.
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Aussage oder Frage? Revisited — highlight text ──── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: ".", emoji: "💬", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "?", emoji: "❓", color: "#DC2626", bg: "#FEE2E2" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [2],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Befehl und Ausrufezeichen — highlight text ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [ { text: "Sitz!", emoji: "🐕", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [1],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Wiederholung von Wörtern — match-pairs ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "Schnell, schnell, schnell!", emoji: "⚡", color: "#22C55E", bg: "#DCFCE7" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [1],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Sehr lange Sätze — highlight correct ─────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: "Langer Satz mit vielen Wörtern...", emoji: "📝", color: "#7C3AED", bg: "#F3E8FF" } ] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [0],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Sätze mit 'und' — highlight text ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [ { text: "und", emoji: "🔗", color: "#059669", bg: "#D1FAE5" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Fragen mit Fragewörtern — highlight text ──────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "Wo?", emoji: "🤔", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Beziehung zwischen Sätzen — highlight text ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["Es regnet."], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Darum bleibe ich drinnen."], bg: "#DBEAFE", border: "#1D4ED8" } },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [0],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Satz-Meister — highlight text ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "⭐ Meister ⭐", emoji: "👑", color: "#FBBF24", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [1],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Bilderinsel (Vocabulary)
// ─────────────────────────────────────────────────────────────────────────────

export const BILDER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Bilderinsel",

    t1_title: "Wörter für Dinge",
    t1_text: "Alles, was wir sehen können, hat einen Namen! 🍎 Apfel, 🚗 Auto, 🏠 Haus. Diese Wörter helfen uns, die Welt zu beschreiben.",
    t1_b1: "Dinge haben Namen.",
    t1_b2: "Schau dir das Bild genau an.",
    t1_inst: "Welches Wort passt zum Bild 🍎?",
    t1_h1: "Das Bild zeigt eine Frucht.",
    t1_h2: "Es ist ein Apfel.",
    t1_w1: "Apfel", t1_w2: "Auto", t1_w3: "Hund", t1_w4: "Buch",
    t1_q: "Was zeigt das Bild 🏠?",
    t1_qa: "Haus", t1_qb: "Baum", t1_qc: "Schule", t1_qd: "Mond",

    t2_title: "Wörter für Tiere",
    t2_text: "Tiere sind lebendige Wesen. Jedes Tier hat seinen eigenen Namen: 🐱 Katze, 🐶 Hund, 🐭 Maus. Kannst du sie alle erkennen?",
    t2_b1: "Tiere erkennen und benennen.",
    t2_inst: "Verbinde das Tier mit seinem Namen!",
    t2_h1: "Miau macht die Katze, Wuff macht der Hund.",
    t2_h2: "🐱-Katze, 🐶-Hund, 🐭-Maus.",
    t2_l1: "🐱 Katze", t2_r1: "Katze",
    t2_l2: "🐶 Hund",  t2_r2: "Hund",
    t2_l3: "🐭 Maus",  t2_r3: "Maus",
    t2_l4: "🐘 Elefant", t2_r4: "Elefant",
    t2_q: "Welches Tier macht 'Miau'?",
    t2_qa: "Katze", t2_qb: "Hund", t2_qc: "Maus", t2_qd: "Elefant",

    t3_title: "Was machen wir? (Verben)",
    t3_text: "Bilder können uns auch zeigen, was jemand gerade macht. Wir nennen diese Wörter Tunwörter: 🏃 rennen, 😴 schlafen, 🎨 malen.",
    t3_b1: "Tunwörter zeigen Aktionen.",
    t3_b2: "Was macht das Kind auf dem Bild?",
    t3_inst: "Welches Wort passt zur Aktion 🏃?",
    t3_h1: "Das Kind bewegt sich sehr schnell.",
    t3_h2: "Das Wort ist 'rennen'.",
    t3_w1: "schlafen", t3_w2: "rennen", t3_w3: "essen", t3_w4: "lesen",
    t3_q: "Was zeigt das Bild 😴?",
    t3_qa: "schlafen", t3_qb: "laufen", t3_qc: "singen", t3_qd: "lachen",

    t4_title: "Farben entdecken",
    t4_text: "Die Welt ist bunt! ❤️ Rot wie eine Erdbeere, 💙 Blau wie das Meer, 💛 Gelb wie die Sonne. Kennst du alle Farben?",
    t4_b1: "Farben benennen.",
    t4_b2: "Rot, Blau, Gelb, Grün.",
    t4_inst: "Verbinde die Farbe mit dem passenden Ding!",
    t4_h1: "Was ist rot? Eine Erdbeere!",
    t4_h2: "❤️-Erdbeere, 💙-Meer, 💛-Sonne.",
    t4_l1: "❤️ Rot", t4_r1: "Erdbeere",
    t4_l2: "💙 Blau", t4_r2: "Meer",
    t4_l3: "💛 Gelb", t4_r3: "Sonne",
    t4_l4: "💚 Grün", t4_r4: "Gras",
    t4_q: "Welche Farbe hat eine Banane?",
    t4_qa: "Gelb", t4_qb: "Rot", t4_qc: "Blau", t4_qd: "Schwarz",

    t5_title: "Was passt zusammen?",
    t5_text: "Einige Dinge gehören einfach zusammen. 🧤 Handschuhe passen zu den Händen, 👞 Schuhe zu den Füßen.",
    t5_b1: "Dinge kombinieren.",
    t5_b2: "Was braucht man wofür?",
    t5_inst: "Sortiere: Was gehört zum Kopf und was zu den Füßen?",
    t5_h1: "Eine Mütze trägt man oben.",
    t5_h2: "Mütze/Brille -> Kopf. Socken/Schuhe -> Füße.",
    t5_bk: "Kopf 👤", t5_bf: "Füße 👣",
    t5_i1: "Mütze", t5_i2: "Socke", t5_i3: "Brille", t5_i4: "Schuh",
    t5_q: "Was trägt man an den Händen?",
    t5_qa: "Handschuhe", t5_qb: "Hut", t5_qc: "Hose", t5_qd: "Schal",

    t6_title: "Oberbegriffe finden",
    t6_text: "Wir können Dinge in Gruppen ordnen. 🍎 Apfel és 🍌 Banane sind beides 'Obst'. 🚗 Auto és 🚲 Fahrrad sind 'Fahrzeuge'.",
    t6_b1: "Gruppen bilden.",
    t6_inst: "Welches Wort passt NICHT in die Gruppe 'Obst'?",
    t6_h1: "Drei Wörter sind Früchte.",
    t6_h2: "'Hund' ist ein Tier, kein Obst.",
    t6_w1: "Apfel", t6_w2: "Banane", t6_w3: "Hund", t6_w4: "Birne",
    t6_q: "Was ist ein Oberbegriff für 'Auto, Bus, LKW'?",
    t6_qa: "Fahrzeuge", t6_qb: "Tiere", t6_qc: "Essen", t6_qd: "Möbel",

    t7_title: "Gegenteile",
    t7_text: "Manche Bilder zeigen genau das Gegenteil: ☀️ Tag und 🌙 Nacht, 🐘 groß und 🐭 klein.",
    t7_b1: "Gegenteile erkennen.",
    t7_inst: "Verbinde die Gegenteile!",
    t7_h1: "Was ist das Gegenteil von 'groß'?",
    t7_h2: "Groß - klein, Tag - Nacht.",
    t7_l1: "groß 🐘", t7_r1: "klein 🐭",
    t7_l2: "Tag ☀️",  t7_r2: "Nacht 🌙",
    t7_l3: "heiß 🔥", t7_r3: "kalt ❄️",
    t7_l4: "lachen 😄", t7_r4: "weinen 😢",
    t7_q: "Was ist das Gegenteil von 'kalt'?",
    t7_qa: "heiß", t7_qb: "nass", t7_qc: "dunkel", t7_qd: "klein",
    t8_title: "Farben-Bildvokabeln",
    t8_text: "Jede Farbe hat ein Wort! 🔴 (rot), 🟢 (grün), 🔵 (blau), 🟡 (gelb). Wenn wir Bilder mit Farben verbinden, merken wir uns die Wörter besser!",
    t8_b1: "Farben helfen beim Lernen.",
    t8_b2: "🔴 = rot, 🟢 = grün.",
    t8_inst: "Welche Farbe ist das?",
    t8_h1: "Schau auf die Farbe genau hin.",
    t8_h2: "Rot, Grün, Blau, Gelb.",
    t8_i1: "🔴", t8_i2: "🟢", t8_i3: "🔵", t8_i4: "🟡",
    t8_q: "Welche Farbe ist 🟢?",
    t8_qa: "Grün", t8_qb: "Rot", t8_qc: "Blau", t8_qd: "Gelb",

    t9_title: "Tierfiguren-Vokabeln",
    t9_text: "Tiere sind überall in unseren Bildern! 🐶 (Hund), 🐱 (Katze), 🐰 (Hase), 🦊 (Fuchs). Jedes Tier hat seinen eigenen Namen.",
    t9_b1: "Tiere haben deutsche Namen.",
    t9_b2: "🐶 = Hund, 🐱 = Katze.",
    t9_inst: "Welches Tier ist das?",
    t9_h1: "Es ist ein vierbeiniges Tier.",
    t9_h2: "🐱 = Katze (felino).",
    t9_i1: "🐶", t9_i2: "🐱", t9_i3: "🐰", t9_i4: "🦊",
    t9_q: "Welches Tier ist 🐰?",
    t9_qa: "Hase", t9_qb: "Hund", t9_qc: "Katze", t9_qd: "Fuchs",

    t10_title: "Obst und Gemüse Bilder",
    t10_text: "Essen ist ein großes Thema! 🍎 (Apfel), 🍊 (Orange), 🥕 (Möhre), 🍅 (Tomate). Wenn wir die Bilder sehen, kennen wir sofort das Wort!",
    t10_b1: "Obst und Gemüse haben Namen.",
    t10_b2: "🍎 = Apfel, 🥕 = Möhre.",
    t10_inst: "Welches Obst oder Gemüse ist das?",
    t10_h1: "Denke an leckere Sachen!",
    t10_h2: "🍊 = Orange, 🍅 = Tomate.",
    t10_i1: "🍎", t10_i2: "🍊", t10_i3: "🥕", t10_i4: "🍅",
    t10_q: "Was ist 🍎?",
    t10_qa: "Apfel", t10_qb: "Orange", t10_qc: "Möhre", t10_qd: "Tomate",

    t11_title: "Körperteile-Vokabeln",
    t11_text: "Wir haben einen Körper mit vielen Teilen! 👁️ (Auge), 👂 (Ohr), 👃 (Nase), 👄 (Mund). Jeder Körperteil hat seinen Namen.",
    t11_b1: "Der Körper hat viele Teile.",
    t11_b2: "👁️ = Auge, 👂 = Ohr.",
    t11_inst: "Welcher Körperteil ist das?",
    t11_h1: "Es ist im Gesicht.",
    t11_h2: "👃 = Nase.",
    t11_i1: "👁️", t11_i2: "👂", t11_i3: "👃", t11_i4: "👄",
    t11_q: "Was ist 👁️?",
    t11_qa: "Auge", t11_qb: "Ohr", t11_qc: "Nase", t11_qd: "Mund",

    t12_title: "Möbel und Haushalt",
    t12_text: "In unserem Zuhause gibt es viele Gegenstände! 🛏️ (Bett), 🪑 (Stuhl), 🚪 (Tür), 🪟 (Fenster). Sie sind überall um uns herum!",
    t12_b1: "Möbel sind im Haus.",
    t12_b2: "🛏️ = Bett, 🪑 = Stuhl.",
    t12_inst: "Was ist das Möbelstück?",
    t12_h1: "Es ist im Schlafzimmer.",
    t12_h2: "🛏️ = Bett.",
    t12_i1: "🛏️", t12_i2: "🪑", t12_i3: "🚪", t12_i4: "🪟",
    t12_q: "Was ist 🪑?",
    t12_qa: "Stuhl", t12_qb: "Bett", t12_qc: "Tisch", t12_qd: "Lampe",

    t13_title: "Kleidungs-Vokabeln",
    t13_text: "Wir tragen Kleidung! 👕 (Hemd), 👖 (Hose), 👗 (Kleid), 🧥 (Jacke). Jedes Kleidungsstück hat einen Namen.",
    t13_b1: "Kleidung haben wir täglich.",
    t13_b2: "👕 = Hemd, 👖 = Hose.",
    t13_inst: "Welches Kleidungsstück ist das?",
    t13_h1: "Es ist etwas zum Anziehen.",
    t13_h2: "👗 = Kleid.",
    t13_i1: "👕", t13_i2: "👖", t13_i3: "👗", t13_i4: "🧥",
    t13_q: "Was ist 👕?",
    t13_qa: "Hemd", t13_qb: "Hose", t13_qc: "Kleid", t13_qd: "Jacke",

    t14_title: "Fahrzeuge und Transport",
    t14_text: "Es gibt viele Fahrzeuge! 🚗 (Auto), 🚕 (Taxi), 🚙 (Lastwagen), 🚌 (Bus). Sie fahren überall auf den Straßen!",
    t14_b1: "Fahrzeuge haben Räder.",
    t14_b2: "🚗 = Auto, 🚌 = Bus.",
    t14_inst: "Welches Fahrzeug ist das?",
    t14_h1: "Es hat Räder und eine Tür.",
    t14_h2: "🚕 = Taxi.",
    t14_i1: "🚗", t14_i2: "🚕", t14_i3: "🚙", t14_i4: "🚌",
    t14_q: "Was ist 🚌?",
    t14_qa: "Bus", t14_qb: "Auto", t14_qc: "Taxi", t14_qd: "Lastwagen",

    t15_title: "Bild-Vokabel-Meister",
    t15_text: "Du bist jetzt ein echtes Bild-Vokabel-Meister! Du kennst Farben, Tiere, Essen, Körperteile, Möbel, Kleidung und Fahrzeuge. Du kannst fast überall ein Bild sehen und das Wort kennen! 🎉",
    t15_b1: "Du kennst viele Vokabeln.",
    t15_b2: "Bilder helfen dir beim Merken.",
    t15_inst: "Was bist du jetzt?",
    t15_h1: "Du hast viel gelernt!",
    t15_h2: "Bild-Vokabel-Meister!",
    t15_i1: "🎓", t15_i2: "📚", t15_i3: "🌟", t15_i4: "✨",
    t15_q: "Wie viele Bild-Vokabeln kennst du jetzt?",
    t15_qa: "Sehr viele! Ich bin ein Meister", t15_qb: "Nur wenige", t15_qc: "Gar keine", t15_qd: "Ich weiß es nicht",
  }
};

export const BILDER_POOL: PoolTopicDef[] = [
  // ── 1. Wörter für Dinge — highlight text ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [ { emoji: "🍎", label: "Apfel" }, { emoji: "🚗", label: "Auto" }, { emoji: "🏠", label: "Haus" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], // Apfel, Auto, Hund, Buch
      correctIndices: [0], // Apfel
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Wörter für Tiere — match-pairs ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [ { emoji: "🐱", label: "Katze" }, { emoji: "🐶", label: "Hund" }, { emoji: "🐘", label: "Elefant" } ] },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Was machen wir? (Verben) — highlight text ──────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "rennen", emoji: "🏃", color: "#B91C1C", bg: "#FEE2E2" }, { text: "schlafen", emoji: "😴", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // schlafen, rennen, essen, lesen
      correctIndices: [1], // rennen
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Farben entdecken — match-pairs ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-circles", letters: ["R", "B", "G"], color: "#EF4444" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
      ],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Was passt zusammen? — drag-to-bucket ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Hut", "Brille"], bg: "#E0F2FE", border: "#0EA5E9" }, right: { items: ["Socke", "Schuh"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "k", label: "t5_bk" }, { id: "f", label: "t5_bf" }],
      items: [
        { text: "t5_i1", bucketId: "k" }, // Mütze -> Kopf
        { text: "t5_i2", bucketId: "f" }, // Socke -> Füße
        { text: "t5_i3", bucketId: "k" }, // Brille -> Kopf
        { text: "t5_i4", bucketId: "f" }, // Schuh -> Füße
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Oberbegriffe (Odd one out) — highlight text ─────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [ { emoji: "🍎", label: "Obst" }, { emoji: "🐶", label: "Tier" } ] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t3_w3", "t4_w4"], // Apfel, Banane, Hund, Birne
      correctIndices: [2], // Hund is not fruit
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Gegenteile — match-pairs ───────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["☀️", "🌙"], ["🐘", "🐭"]], color: "#10B981", dimColor: "#D1FAE5" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t7_l1", right: "t7_r1" },
        { left: "t7_l2", right: "t7_r2" },
        { left: "t7_l3", right: "t7_r3" },
        { left: "t7_l4", right: "t7_r4" },
      ],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Körperteile — match-pairs ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "icon-grid", items: [ { emoji: "👁️", label: "Auge" }, { emoji: "👃", label: "Nase" }, { emoji: "👂", label: "Ohr" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Früchte und Gemüse — highlight text ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "icon-grid", items: [ { emoji: "🍎", label: "Apfel" }, { emoji: "🥕", label: "Möhre" }, { emoji: "🍅", label: "Tomate" } ] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [1],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Wetter und Jahreszeiten — match-pairs ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "icon-grid", items: [ { emoji: "☀️", label: "Sonne" }, { emoji: "🌧️", label: "Regen" }, { emoji: "❄️", label: "Schnee" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [1],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Schule und Lernmittel — highlight text ───────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [ { emoji: "✏️", label: "Bleistift" }, { emoji: "📓", label: "Heft" }, { emoji: "📖", label: "Buch" } ] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [0],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Gefühle — highlight text ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [ { emoji: "😊", label: "Glücklich" }, { emoji: "😢", label: "Traurig" }, { emoji: "😤", label: "Wütend" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [1],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Wohnräume und Möbel — highlight text ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "icon-grid", items: [ { emoji: "🛏️", label: "Bett" }, { emoji: "🚪", label: "Tür" }, { emoji: "🪑", label: "Stuhl" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Transportmittel — match-pairs ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "icon-grid", items: [ { emoji: "🚗", label: "Auto" }, { emoji: "🚂", label: "Zug" }, { emoji: "✈️", label: "Flugzeug" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [2],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Bilder-Meister — highlight text ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "⭐ Meister ⭐", emoji: "👑", color: "#FBBF24", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [0],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Artikelinsel (Articles: der, die, das)
// ─────────────────────────────────────────────────────────────────────────────

export const ARTIKEL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Artikelinsel",

    t1_title: "Die drei Begleiter",
    t1_text: "Namenwörter (Nomen) haben fast immer einen kleinen Begleiter bei sich. Wir nennen sie Artikel. Es gibt drei: DER, DIE und DAS.",
    t1_b1: "der (männlich) — blau 🔵",
    t1_b2: "die (weiblich) — rot 🔴",
    t1_b3: "das (sächlich) — grün 🟢",
    t1_inst: "Welcher Artikel ist blau (männlich)?",
    t1_h1: "Blau gehört immer zu 'der'.",
    t1_h2: "Das Wort ist 'der'.",
    t1_w1: "der", t1_w2: "die", t1_w3: "das", t1_w4: "ein",
    t1_q: "Welche Farbe hat der Artikel 'die'?",
    t1_qa: "Rot", t1_qb: "Blau", t1_qc: "Grün", t1_qd: "Gelb",

    t2_title: "Der — Der blaue Turm",
    t2_text: "Viele Wörter gehören zum blauen Turm (der). Zum Beispiel: der Hund 🐶, der Mond 🌙, der Tisch 🪑.",
    t2_b1: "Begleiter: der",
    t2_b2: "Farbe: blau",
    t2_inst: "Welches Wort passt zu 'der'?",
    t2_h1: "Sprich es laut: 'der ...'",
    t2_h2: "Es heißt 'der Hund'.",
    t2_w1: "Haus", t2_w2: "Hund", t2_w3: "Sonne", t2_w4: "Auto",
    t2_q: "Was ist richtig?",
    t2_qa: "der Mond", t2_qb: "die Mond", t2_qc: "das Mond", t2_qd: "den Mond",

    t3_title: "Die — Der rote Turm",
    t3_text: "Wörter im roten Turm (die) sind oft weiblich. Zum Beispiel: die Katze 🐱, die Sonne ☀️, die Blume 🌸.",
    t3_b1: "Begleiter: die",
    t3_b2: "Farbe: rot",
    t3_inst: "Welches Wort passt zu 'die'?",
    t3_h1: "Sprich es laut: 'die ...'",
    t3_h2: "Es heißt 'die Blume'.",
    t3_w1: "Baum", t3_w2: "Blume", t3_w3: "Kind", t3_w4: "Apfel",
    t3_q: "Was ist richtig?",
    t3_qa: "die Sonne", t3_qb: "der Sonne", t3_qc: "das Sonne", t3_qd: "die Sonnen",

    t4_title: "Das — Der grüne Turm",
    t4_text: "Zum grünen Turm (das) gehören Wörter wie: das Haus 🏠, das Auto 🚗, das Kind 👶.",
    t4_b1: "Begleiter: das",
    t4_b2: "Farbe: grün",
    t4_inst: "Welches Wort passt zu 'das'?",
    t4_h1: "Sprich es laut: 'das ...'",
    t4_h2: "Es heißt 'das Haus'.",
    t4_w1: "Tisch", t4_w2: "Haus", t4_w3: "Maus", t4_w4: "Stuhl",
    t4_q: "Was ist richtig?",
    t4_qa: "das Buch", t4_qb: "der Buch", t4_qc: "die Buch", t4_qd: "das Bücher",

    t5_title: "Die drei Türme (Sortieren)",
    t5_text: "Kannst du die Wörter in die richtigen Türme sortieren? Achte auf die Begleiter!",
    t5_b1: "der = blau 🔵",
    t5_b2: "die = rot 🔴",
    t5_b3: "das = grün 🟢",
    t5_inst: "Sortiere die Wörter in die richtigen Türme!",
    t5_h1: "Überlege: der, die oder das?",
    t5_h2: "der Hund, die Katze, das Auto.",
    t5_b_der: "der 🔵", t5_b_die: "die 🔴", t5_b_das: "das 🟢",
    t5_i1: "Hund", t5_i2: "Katze", t5_i3: "Auto", t5_i4: "Apfel", t5_i5: "Blume", t5_i6: "Haus",
    t5_q: "In welchen Turm gehört 'Ball'?",
    t5_qa: "der 🔵", t5_qb: "die 🔴", t5_qc: "das 🟢", t5_qd: "In keinen",

    t6_title: "Bilder und Begleiter",
    t6_text: "Schau dir das Bild an. Welchen Begleiter hörst du in deinem Kopf, wenn du den Namen sagst?",
    t6_b1: "Bild ansehen.",
    t6_b2: "Artikel zuordnen.",
    t6_inst: "Verbinde das Bild mit dem richtigen Artikel!",
    t6_h1: "🍎 Apfel ist 'der'. 🚗 Auto ist 'das'.",
    t6_h2: "🍎-der, 🏠-das, ☀️-die.",
    t6_l1: "🍎 Apfel", t6_r1: "der",
    t6_l2: "☀️ Sonne", t6_r2: "die",
    t6_l3: "🏠 Haus",  t6_r3: "das",
    t6_l4: "🌳 Baum",  t6_r4: "der",
    t6_q: "Welches Bild passt zu 'die'?",
    t6_qa: "🌸 Blume", t6_qb: "🚗 Auto", t6_qc: "🌙 Mond", t6_qd: "⚽ Ball",

    t7_title: "Artikel-Check",
    t7_text: "Ein Satz-Detektiv prüft auch die Begleiter. Wenn jemand 'das Katze' sagt, klingt das lustig, ist de aber falsch!",
    t7_b1: "Jedes Nomen hat nur einen richtigen Artikel.",
    t7_b2: "Lerne die Wörter immer mit ihrem Artikel.",
    t7_inst: "Welcher Artikel passt in die Lücke: '... Maus rennt.'?",
    t7_h1: "Es heißt 'die Maus'.",
    t7_h2: "Wähle 'die'.",
    t7_w1: "der", t7_w2: "die", t7_w3: "das", t7_w4: "ein",
    t7_q: "Was ist falsch?",
    t7_qa: "das Katze", t7_qb: "der Hund", t7_qc: "das Haus", t7_qd: "die Sonne",

    t8_title: "Der Alltag mit Artikeln",
    t8_text: "Jeden Tag hörst du 'der Tisch', 'die Flasche', 'das Glas'. Schau dir die Welt an - überall Artikel!",
    t8_b1: "Artikel im Alltag.",
    t8_inst: "Was ist 'der Tisch'?",
    t8_h1: "Sprich: 'der ...'",
    t8_h2: "Ein Tisch ist 'der'.",
    t8_w1: "die", t8_w2: "das", t8_w3: "der", t8_w4: "ein",
    t8_q: "Welcher Artikel ist maskulin?",
    t8_qa: "der", t8_qb: "die", t8_qc: "das", t8_qd: "en",

    t9_title: "Farben-Artikel-Paare",
    t9_text: "Wir lernen Artikel schneller, wenn wir Farben benutzen. Der = blau, Die = rot, Das = grün.",
    t9_b1: "Farbcode merken.",
    t9_inst: "Rot bedeutet?",
    t9_h1: "Rot ist weiblich.",
    t9_h2: "Rot = 'die'.",
    t9_w1: "der", t9_w2: "die", t9_w3: "das", t9_w4: "ein",
    t9_q: "Welche Farbe ist 'das'?",
    t9_qa: "Gruen", t9_qb: "Blau", t9_qc: "Rot", t9_qd: "Gelb",

    t10_title: "Zahlen und Artikel",
    t10_text: "Ein, zwei, drei... Hast du bemerkt? Wir sagen auch 'ein Hund', 'eine Katze', 'ein Auto'.",
    t10_b1: "ein, eine, ein sind auch Artikel.",
    t10_inst: "Welches Wort brauchst du vor 'Schule'?",
    t10_h1: "Die Schule ist weiblich.",
    t10_h2: "Eine Schule.",
    t10_w1: "ein", t10_w2: "eine", t10_w3: "eins", t10_w4: "ens",
    t10_q: "Was ist der Plural von 'der Hund'?",
    t10_qa: "die Hunde", t10_qb: "der Hunde", t10_qc: "das Hunde", t10_qd: "einen Hund",

    t11_title: "Artikel vor Adjektiven",
    t11_text: "Auch mit Farbadjektiven brauchen wir Artikel: 'der rote Apfel', 'die gelbe Sonne', 'das blaue Haus'.",
    t11_b1: "Artikel + Adjektiv + Nomen.",
    t11_inst: "Wie heißt es: '... rote Blume'?",
    t11_h1: "Blume ist weiblich.",
    t11_h2: "Die rote Blume.",
    t11_w1: "die", t11_w2: "der", t11_w3: "das", t11_w4: "ein",
    t11_q: "Was ist falsch?",
    t11_qa: "die blau Auto", t11_qb: "der rote Apfel", t11_qc: "das gelbe Haus", t11_qd: "die grune Wiese",

    t12_title: "Akkusativ: Den, Die, Das",
    t12_text: "Im Satz 'Ich sehe den Hund' - das ist Akkusativ! Nur 'der' wird zu 'den'. 'Die' und 'das' bleiben gleich.",
    t12_b1: "Nominativ: der, die, das",
    t12_b2: "Akkusativ: den, die, das",
    t12_inst: "Erganze: 'Ich sehe ... Hund.'",
    t12_h1: "Nominativ und Akkusativ beachten.",
    t12_h2: "Akkusativ: den Hund.",
    t12_w1: "der", t12_w2: "den", t12_w3: "dies", t12_w4: "dens",
    t12_q: "Wie heißt es im Akkusativ: 'der Tisch'?",
    t12_qa: "den Tisch", t12_qb: "die Tisch", t12_qc: "das Tisch", t12_qd: "der Tisch",

    t13_title: "Spiel: Artikel-Ratespiel",
    t13_text: "Wir spielen Detektiv! Ich sage ein Wort, du sagst den Artikel. Los geht's: 'Fenster'!",
    t13_b1: "Hore genau.",
    t13_inst: "Was ist 'Fenster'?",
    t13_h1: "Es ist sächlich.",
    t13_h2: "Das Fenster.",
    t13_w1: "der", t13_w2: "die", t13_w3: "das", t13_w4: "ein",
    t13_q: "Welches Wort ist männlich?",
    t13_qa: "der Berg", t13_qb: "die Schule", t13_qc: "das Fenster", t13_qd: "die Lampe",

    t14_title: "Dialog-Check",
    t14_text: "Guten Morgen! Das ist die Rose! Sprichst du korrekt mit Artikeln?",
    t14_b1: "Höflich sprechen.",
    t14_b2: "Artikel nicht vergessen.",
    t14_inst: "Erganzen: 'Das ist ... Schmetterling.'",
    t14_h1: "Schmetterling ist männlich.",
    t14_h2: "Das ist der Schmetterling.",
    t14_w1: "das", t14_w2: "die", t14_w3: "der", t14_w4: "ein",
    t14_q: "Was sagt man höflich?",
    t14_qa: "Guten Morgen, der Herr!", t14_qb: "Hallo, du Mann!", t14_qc: "Hallo, ein Freund!", t14_qd: "Morgen, das Lehrer!",

    t15_title: "Artikel-Quiz (alles gemischt)",
    t15_text: "Du kennst jetzt viel! Lass uns alles zusammen üben. Bereit für die große Prüfung?",
    t15_b1: "Alle Artikel gemeinsam üben.",
    t15_inst: "Was passt in: '... Bild an der Wand'?",
    t15_h1: "Es ist sächlich.",
    t15_h2: "Das Bild.",
    t15_w1: "der", t15_w2: "die", t15_w3: "das", t15_w4: "ein",
    t15_q: "Welche Aussage ist richtig?",
    t15_qa: "der Stuhl ist männlich", t15_qb: "die Fenster ist sächlich", t15_qc: "das Baum ist weiblich", t15_qd: "ein Blume ist neu",
  }
};

export const ARTIKEL_POOL: PoolTopicDef[] = [
  // ── 1. Die drei Begleiter — highlight text ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [ { emoji: "🔵", label: "der" }, { emoji: "🔴", label: "die" }, { emoji: "🟢", label: "das" } ] },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], 
      correctIndices: [0], // der
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Der (männlich) — highlight correct word ────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "der Hund", emoji: "🐶", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], // Haus, Hund, Sonne, Auto
      correctIndices: [1], // Hund
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Die (weiblich) — highlight correct word ───────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "die Blume", emoji: "🌸", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Baum, Blume, Kind, Apfel
      correctIndices: [1], // Blume
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Das (sächlich) — highlight correct word ───────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "das Haus", emoji: "🏠", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], // Tisch, Haus, Maus, Stuhl
      correctIndices: [1], // Haus
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Die drei Türme — drag-to-bucket ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [ { emoji: "🔵", label: "der" }, { emoji: "🔴", label: "die" }, { emoji: "🟢", label: "das" } ] },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t5_b_der" }, { id: "die", label: "t5_b_die" }, { id: "das", label: "t5_b_das" }],
      items: [
        { text: "t5_i1", bucketId: "der" }, // Hund
        { text: "t5_i2", bucketId: "die" }, // Katze
        { text: "t5_i3", bucketId: "das" }, // Auto
        { text: "t5_i4", bucketId: "der" }, // Apfel
        { text: "t5_i5", bucketId: "die" }, // Blume
        { text: "t5_i6", bucketId: "das" }, // Haus
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Bilder und Begleiter — match-pairs ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["der", "🍎"], ["die", "☀️"], ["das", "🏠"]], color: "#0EA5E9", dimColor: "#BAE6FD" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
        { left: "t6_l4", right: "t6_r4" },
      ],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Artikel-Check — highlight correct article ───────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "text-bubbles", items: [ { text: "die Maus", emoji: "🐭", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], // der, die, das, ein
      correctIndices: [1], // die
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Der Alltag mit Artikeln — highlight text ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "Alltag", emoji: "🏠", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t8_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [2],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Farben-Artikel-Paare — match-pairs ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [ { text: "blau", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "rot", color: "#B91C1C", bg: "#FEE2E2" }, { text: "gruen", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t9_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [1],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. Zahlen und Artikel — highlight text ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "icon-grid", items: [ { emoji: "1", label: "ein" }, { emoji: "2", label: "zwei" }, { emoji: "3", label: "drei" } ] },
    bulletKeys: ["t10_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [1],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Artikel vor Adjektiven — highlight text ────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: "der rote Apfel", emoji: "🍎", color: "#DC2626", bg: "#FEE2E2" } ] },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [0],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Akkusativ — drag-to-bucket ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [ { emoji: "📍", label: "Nominativ" }, { emoji: "👉", label: "Akkusativ" } ] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nom", label: "t12_inst" }, { id: "akk", label: "t12_h2" }],
      items: [
        { text: "t12_w1", bucketId: "nom" },
        { text: "t12_w2", bucketId: "akk" },
        { text: "t12_w3", bucketId: "nom" },
        { text: "t12_w4", bucketId: "akk" },
      ],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Artikel-Ratespiel — highlight text ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "icon-grid", items: [ { emoji: "🪟", label: "Fenster" }, { emoji: "⛰️", label: "Berg" } ] },
    bulletKeys: ["t13_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [2],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Dialog-Check — match-pairs ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "Guten Morgen!", emoji: "🌅", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t14_inst", right: "t14_w3" },
        { left: "t14_h2", right: "t14_w1" },
      ],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa","t14_qb","t14_qc","t14_qd"], answer: "t14_qa" },
  },

  // ── 15. Artikel-Quiz (gemischt) — highlight text ───────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "Zusammenfassung", emoji: "🎓", color: "#7C3AED", bg: "#EDE9FE" } ] },
    bulletKeys: ["t15_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [2],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: { question: "t15_q", choices: ["t15_qa","t15_qb","t15_qc","t15_qd"], answer: "t15_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Leseinsel (Reading)
// ─────────────────────────────────────────────────────────────────────────────

export const LESE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Leseinsel",

    t1_title: "Buchstaben verbinden",
    t1_text: "Wenn wir Buchstaben hintereinander sagen, entstehen Wörter. Sag sie erst langsam, dann immer schneller: L-E-S-E-N... Lesen!",
    t1_b1: "Buchstaben zusammenziehen.",
    t1_b2: "Vom Laut zum Wort.",
    t1_inst: "Welches Wort hörst du: M-A-M-A?",
    t1_h1: "Sag die Buchstaben laut: M... A... M... A...",
    t1_h2: "Das Wort ist 'Mama'.",
    t1_w1: "Mama", t1_w2: "Oma", t1_w3: "Papa", t1_w4: "Haus",
    t1_q: "Was wird aus H-A-U-S?",
    t1_qa: "Haus", t1_qb: "Hase", t1_qc: "Hose", t1_qd: "Hand",

    t2_title: "Blitzlesen (Kurze Wörter)",
    t2_text: "Manche Wörter sind so kurz, die können wir wie ein Blitz lesen! ⚡️ Eis, Ast, Tor, Uhr. Probier es mal ganz schnell!",
    t2_b1: "Kurze Wörter schnell erkennen.",
    t2_inst: "Welches Wort heißt 'Eis'?",
    t2_h1: "Suche das Wort mit drei Buchstaben: E-I-S.",
    t2_h2: "Da steht 'Eis'.",
    t2_w1: "Haus", t2_w2: "Eis", t2_w3: "Apfel", t2_w4: "Auto",
    t2_q: "Welches Wort hat nur 3 Buchstaben?",
    t2_qa: "Uhr", t2_qb: "Mond", t2_qc: "Sonne", t2_qd: "Blume",

    t3_title: "Wort-Bild-Check",
    t3_text: "Lies das Wort und schau dir die Bilder an. Findest du das passende Bild zum Wort?",
    t3_b1: "Genau lesen.",
    t3_b2: "Bedeutung verstehen.",
    t3_inst: "Wo ist die 'Sonne'?",
    t3_h1: "Lies das Wort: S-O-N-N-E.",
    t3_h2: "Das Bild mit der Sonne ☀️ ist richtig.",
    t3_w1: "☀️", t3_w2: "🌙", t3_w3: "⭐", t3_w4: "☁️",
    t3_q: "Welches Bild passt zum Wort 'Baum'?",
    t3_qa: "🌳", t3_qb: "🌸", t3_qc: "🍎", t3_qd: "🏠",

    t4_title: "Lies und male (Farben)",
    t4_text: "In der Schule musst du oft Aufgaben lesen. Zum Beispiel: 'Male den Apfel rot.' Kannst du die Farben schon lesen?",
    t4_b1: "Farben lesen: rot, blau, gelb, grün.",
    t4_inst: "Welches Wort heißt 'gelb'?",
    t4_h1: "Es fängt mit G an.",
    t4_h2: "Dort steht 'gelb'.",
    t4_w1: "blau", t4_w2: "rot", t4_w3: "gelb", t4_w4: "grün",
    t4_q: "Wie schreibt man die Farbe der Wiese?",
    t4_qa: "grün", t4_qb: "gelb", t4_qc: "blau", t4_qd: "rot",

    t5_title: "Sätze lesen",
    t5_text: "Jetzt wird es spannend! Wir lesen einen ganzen Satz. Was macht der Hund? 'Der Hund bellt.'",
    t5_b1: "Wort für Wort lesen.",
    t5_b2: "Den ganzen Sinn verstehen.",
    t5_inst: "Lies: 'Die Katze schläft.' Was macht die Katze?",
    t5_h1: "Lies das letzte Wort im Satz.",
    t5_h2: "Sie schläft.",
    t5_w1: "essen", t5_w2: "laufen", t5_w3: "schlafen", t5_w4: "spielen",
    t5_q: "Was macht das Kind in: 'Das Kind liest.'?",
    t5_qa: "Es liest", t5_qb: "Es schläft", t5_qc: "Es lacht", t5_qd: "Es rennt",

    t6_title: "Was fehlt im Satz?",
    t6_text: "Hier ist ein Satz mit einer Lücke. Welches Wort passt hinein, damit der Satz Sinn ergibt?",
    t6_b1: "Den Satz im Kopf fertigstellen.",
    t6_inst: "Lies: 'Ich trinke ...' - Welches Wort passt?",
    t6_h1: "Was kann man trinken?",
    t6_h2: "Man kann 'Milch' trinken.",
    t6_w1: "Pizza", t6_w2: "Milch", t6_w3: "Brot", t6_w4: "Apfel",
    t6_q: "Ergänze: 'Der Vogel ...'",
    t6_qa: "fliegt", t6_qb: "schwimmt", t6_qc: "fährt", t6_qd: "liest",

    t7_title: "Kleine Geschichten",
    t7_text: "Du kannst schon kurze Texte lesen! 'Das ist Tim. Tim hat einen Ball. Der Ball ist blau.'",
    t7_b1: "Mehrere Sätze verstehen.",
    t7_inst: "Welche Farbe hat Tims Ball?",
    t7_h1: "Lies den letzten Satz noch einmal.",
    t7_h2: "Der Ball ist blau.",
    t7_w1: "rot", t7_w2: "gelb", t7_w3: "blau", t7_w4: "grün",
    t7_q: "Wer hat den Ball?",
    t7_qa: "Tim", t7_qb: "Oma", t7_qc: "Leo", t7_qd: "Max",
  }
};

export const LESE_POOL: PoolTopicDef[] = [
  // ── 1. Buchstaben verbinden — highlight text ──────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "M", color: "#B91C1C", bg: "#FEE2E2" }, { text: "A", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "M", color: "#B91C1C", bg: "#FEE2E2" }, { text: "A", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], 
      correctIndices: [0], // Mama
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Blitzlesen — highlight 3-letter word ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-circles", letters: ["E", "I", "S"], color: "#0EA5E9" },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], 
      correctIndices: [1], // Eis
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Wort-Bild-Check — match-pairs ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [ { emoji: "☀️", label: "Sonne" }, { emoji: "🌙", label: "Mond" } ] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], 
      correctIndices: [0], // ☀️
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Lies und male (Farben) — match-pairs ─────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["rot", "blau"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["🍎", "🌊"], bg: "#F3F4F6", border: "#D1D5DB" } },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], 
      correctIndices: [2], // gelb
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Sätze lesen — highlight correct action ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "Die Katze schläft.", emoji: "🐱", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"], 
      correctIndices: [2], // schlafen
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Lückentext — highlight correct word ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["Trinken", "🥛"], ["Essen", "🍕"]], color: "#F59E0B", dimColor: "#FEF3C7" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"], 
      correctIndices: [1], // Milch
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Kleine Geschichten — highlight correct answer ─────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [ { emoji: "👦", label: "Tim" }, { emoji: "🔵", label: "blau" } ] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], 
      correctIndices: [2], // blau
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung (Final Review)
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung K1",

    t1_title: "Das Buchstaben-Quiz",
    t1_text: "Erinnerst du dich an die Vokale? Sie sind die wichtigsten Bausteine unserer Wörter.",
    t1_b1: "A, E, I, O, U sind Vokale.",
    t1_inst: "Finde den Vokal im Wort 'BUS'!",
    t1_h1: "Suche nach A, E, I, O vagy U.",
    t1_h2: "Das 'U' ist der Vokal.",
    t1_w1: "B", t1_w2: "U", t1_w3: "S",
    t1_q: "Welcher Buchstabe fehlt in 'H_nd'?",
    t1_qa: "u", t1_qb: "e", t1_qc: "i", t1_qd: "o",

    t2_title: "Silben-Meister",
    t2_text: "Kannst du Wörter noch immer richtig klatschen? Testen wir ein langes Wort!",
    t2_b1: "To-ma-te = 3 Silben.",
    t2_inst: "Wie viele Silben hat das Wort 'Elefant'?",
    t2_h1: "Klatsche: E - le - fant.",
    t2_h2: "Es sind 3 Silben.",
    t2_q: "Welches Wort hat 2 Silben?",
    t2_qa: "Auto", t2_qb: "Haus", t2_qc: "Banane", t2_qd: "Bus",

    t3_title: "Artikel-Profi",
    t3_text: "Der, die oder das? Welcher Begleiter passt zu welchem Wort? Zeig es uns!",
    t3_b1: "der 🔵, die 🔴, das 🟢",
    t3_inst: "Sortiere: der vagy das?",
    t3_h1: "der Apfel, das Haus.",
    t3_h2: "Mond ist 'der', Auto ist 'das'.",
    t3_b_der: "der 🔵", t3_b_das: "das 🟢",
    t3_i1: "Mond", t3_i2: "Auto", t3_i3: "Tisch", t3_i4: "Kind",
    t3_q: "Was ist richtig?",
    t3_qa: "die Sonne", t3_qb: "der Sonne", t3_qc: "das Sonne", t3_qd: "die Sonnen",

    t4_title: "Reim-Detektiv",
    t4_text: "Findest du die Wörter, die am Ende gleich klingen? Reim-Paare gesucht!",
    t4_b1: "Haus - Maus.",
    t4_inst: "Welches Wort reimt sich auf 'Hund'?",
    t4_h1: "Es muss wie '-und' klingen.",
    t4_h2: "Hund reimt sich auf Mund.",
    t4_w1: "Mund", t4_w2: "Katze", t4_w3: "Ball", t4_w4: "Eis",
    t4_q: "Reimt sich 'Hase' auf 'Nase'?",
    t4_qa: "Ja", t4_qb: "Nein", t4_qc: "Nur manchmal", t4_qd: "Weiß nicht",

    t5_title: "Satz-Experte",
    t5_text: "Ein Satz braucht Ordnung. Groß am Anfang, Zeichen am Ende!",
    t5_b1: "Satzanfang groß schreiben.",
    t5_inst: "Welches Satzzeichen gehört hier hin: 'Wo ist der Ball'?",
    t5_h1: "Es ist eine Frage.",
    t5_h2: "Du brauchst ein Fragezeichen (?).",
    t5_w1: ".", t5_w2: "?", t5_w3: "!", t5_w4: ",",
    t5_q: "Wie fängt jeder Satz an?",
    t5_qa: "Mit einem Großbuchstaben", t5_qb: "Mit einer Zahl", t5_qc: "Mit einem Punkt", t5_qd: "Mit einem Bild",

    t6_title: "Wort-Bild-Meister",
    t6_text: "Kannst du das Wort lesen und dem richtigen Bild zuordnen?",
    t6_b1: "Lesen und verstehen.",
    t6_inst: "Verbinde das Wort mit dem Bild!",
    t6_h1: "Lies: Blume, Baum, Apfel.",
    t6_h2: "🌸-Blume, 🌳-Baum, 🍎-Apfel.",
    t6_l1: "Blume", t6_r1: "🌸",
    t6_l2: "Baum",  t6_r2: "🌳",
    t6_l3: "Apfel", t6_r3: "🍎",
    t6_l4: "Fisch", t6_r4: "🐟",
    t6_q: "Was ist ein 'Hund'?",
    t6_qa: "🐶", t6_qb: "🐱", t6_qc: "🐭", t6_qd: "🐻",

    t7_title: "Der K1 Champion",
    t7_text: "Du hast es fast geschafft! Ein letzter Check: Kannst du diesen kurzen Text verstehen?",
    t7_b1: "Du bist ein Lese-Profi!",
    t7_inst: "Lies: 'Der Apfel ist rot.' Welche Farbe hat der Apfel?",
    t7_h1: "Schau auf das letzte Wort im Satz.",
    t7_h2: "Er ist rot.",
    t7_w1: "blau", t7_w2: "grün", t7_w3: "rot", t7_w4: "gelb",
    t7_q: "Bist du bereit für K2?",
    t7_qa: "Ja, ich bin bereit!", t7_qb: "Noch nicht", t7_qc: "Was ist K2?", t7_qd: "Vielleicht",
  }
};

export const EXAM_POOL: PoolTopicDef[] = [
  // ── 1. Vokale — highlight text ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-circles", letters: ["B", "U", "S"], color: "#FF2D78" },
    bulletKeys: ["t1_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3"], 
      correctIndices: [1], // U
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Silben zählen — highlight correct index ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "E-le-fant", emoji: "🐘", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["1", "2", "3", "4"], 
      correctIndices: [2], // 3
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Artikel sortieren — drag-to-bucket ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [ { emoji: "🔵", label: "der" }, { emoji: "🟢", label: "das" } ] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t3_b_der" }, { id: "das", label: "t3_b_das" }],
      items: [
        { text: "t3_i1", bucketId: "der" }, // Mond
        { text: "t3_i2", bucketId: "das" }, // Auto
        { text: "t3_i3", bucketId: "der" }, // Tisch
        { text: "t3_i4", bucketId: "das" }, // Kind
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Reime finden — highlight text ───────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["Hund", "Mund"]], color: "#F59E0B" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], 
      correctIndices: [0], // Mund
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Satzzeichen (?) — highlight correct ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [ { emoji: "❓", label: "Frage" } ] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"], 
      correctIndices: [1], // ?
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Wort-Bild-Check — match-pairs ───────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [ { emoji: "🌸", label: "Blume" }, { emoji: "🌳", label: "Baum" } ] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
        { left: "t6_l4", right: "t6_r4" },
      ],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Lese-Check Champion — highlight text ────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "text-bubbles", items: [ { text: "Champion!", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], 
      correctIndices: [2], // rot
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLANDS i3-i9 — same pattern
// ─────────────────────────────────────────────────────────────────────────────
