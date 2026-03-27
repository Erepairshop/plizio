// lib/explorerPools/deutschK1.ts
// ═══════════════════════════════════════════════════════════════════════════════
// ASTRODEUTSCH K1 — Pool data for all 9 islands
// Pure TypeScript — no JSX here!
// Each island has its own LABELS export + POOL export.
// The DynamicExplorer component picks 5 random topics per session.
//
// POOL SIZE GUIDELINE: aim for 7-10 topics per island so variety is real.
// DIFFICULTY TAGS: easy / medium / hard
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
  },
  en: {
    explorer_title: "Letter Explorer",
    t1_inst: "Find all the vowels in the word!",
    t1_h1: "Vowels are: A, E, I, O, U.",
    t1_h2: "A, U and O are vowels. T is a consonant.",
    t2_inst: "Sort: Vowel or Consonant?",
    t2_h1: "A, E, I, O, U are vowels.",
    t2_h2: "E and O are vowels. B, K, S, T are consonants.",
    t2_bv: "Vowel 🔴", t2_bk: "Consonant 🔵",
    t3_inst: "Match uppercase and lowercase letters!",
    t3_h1: "Every uppercase letter has a matching lowercase.",
    t3_h2: "A goes with a, B with b, D with d.",
    t4_inst: "Find the umlauts!",
    t4_h1: "Umlauts have two dots: ä, ö, ü.",
    t4_h2: "ä and ö are umlauts. B and p are not.",
    t5_inst: "Match the picture to its initial letter!",
    t5_h1: "Look at the picture — what sound do you hear first?",
    t5_h2: "Cat → C, Apple → A, Elephant → E, Mouse → M",
    t5_l1: "🐱 Cat", t5_r1: "C",
    t5_l2: "🍎 Apple", t5_r2: "A",
    t5_l3: "🐴 Elephant", t5_r3: "E",
    t5_l4: "🐭 Mouse", t5_r4: "M",
    t6_inst: "Sort words by their letter count!",
    t6_h1: "Count each letter individually.",
    t6_h2: "Ice(3), Arm(3) → short.  Dog(3), Rose(4) → check!",
    t6_b3l: "3 letters 📝", t6_b4l: "4 letters 📖",
    t7_inst: "Find the vowels in A-B-C-D-E!",
    t7_h1: "Vowels in the alphabet: A and E (in A-B-C-D-E).",
    t7_h2: "A and E are vowels. B, C, D are consonants.",
  },
  hu: {
    explorer_title: "Betű felfedező",
    t1_inst: "Keresd meg a magánhangzókat a szóban!",
    t1_h1: "Magánhangzók: A, E, I, O, U.",
    t1_h2: "A, U és O magánhangzók. T mássalhangzó.",
    t2_inst: "Sorold be: magánhangzó vagy mássalhangzó?",
    t2_h1: "A, E, I, O, U magánhangzók.",
    t2_h2: "E és O magánhangzók. B, K, S, T mássalhangzók.",
    t2_bv: "Magánhangzó 🔴", t2_bk: "Mássalhangzó 🔵",
    t3_inst: "Párosítsd a nagy- és kisbetűket!",
    t3_h1: "Minden nagybetűnek van kisbetű párja.",
    t3_h2: "A → a, B → b, D → d.",
    t4_inst: "Keresd az umlautos betűket!",
    t4_h1: "Umlaut betűknek két pontjuk van: ä, ö, ü.",
    t4_h2: "ä és ö umlautok. B és p nem.",
    t5_inst: "Párosítsd a képet a kezdőbetűjével!",
    t5_h1: "Nézd a képet — milyen hangot hallasz először?",
    t5_h2: "Macska → M, Alma → A, Szamár → Sz, Egér → E",
    t5_l1: "🐱 Katze", t5_r1: "K",
    t5_l2: "🍎 Apfel", t5_r2: "A",
    t5_l3: "🐴 Esel",  t5_r3: "E",
    t5_l4: "🐭 Maus",  t5_r4: "M",
    t6_inst: "Sorold be a szavakat betűszám szerint!",
    t6_h1: "Számold meg minden betűt külön.",
    t6_h2: "Eis(3), Arm(3) → rövid.  Hund(4), Rose(4) → hosszabb.",
    t6_b3l: "3 betű 📝", t6_b4l: "4 betű 📖",
    t7_inst: "Keresd a magánhangzókat az A-B-C-D-E-ben!",
    t7_h1: "Magánhangzók: A és E (A-B-C-D-E-ben).",
    t7_h2: "A és E magánhangzók. B, C, D mássalhangzók.",
  },
  ro: {
    explorer_title: "Explorator de litere",
    t1_inst: "Găsește toate vocalele din cuvânt!",
    t1_h1: "Vocalele sunt: A, E, I, O, U.",
    t1_h2: "A, U și O sunt vocale. T este o consoană.",
    t2_inst: "Sortează: Vocală sau Consoană?",
    t2_h1: "A, E, I, O, U sunt vocale.",
    t2_h2: "E și O sunt vocale. B, K, S, T sunt consoane.",
    t2_bv: "Vocală 🔴", t2_bk: "Consoană 🔵",
    t3_inst: "Potrivește literele mari cu cele mici!",
    t3_h1: "Fiecare majusculă are o minusculă corespondentă.",
    t3_h2: "A merge cu a, B cu b, D cu d.",
    t4_inst: "Găsește umlauturile!",
    t4_h1: "Umlauturile au două puncte: ä, ö, ü.",
    t4_h2: "ä și ö sunt umlauts. B și p nu sunt.",
    t5_inst: "Potrivește imaginea cu litera inițială!",
    t5_h1: "Uită-te la imagine — ce sunet auzi primul?",
    t5_h2: "Pisică → P, Măr → M, Măgar → M, Șoarece → Ș",
    t5_l1: "🐱 Katze", t5_r1: "K",
    t5_l2: "🍎 Apfel", t5_r2: "A",
    t5_l3: "🐴 Esel",  t5_r3: "E",
    t5_l4: "🐭 Maus",  t5_r4: "M",
    t6_inst: "Sortează cuvintele după numărul de litere!",
    t6_h1: "Numără fiecare literă separat.",
    t6_h2: "Eis(3), Arm(3) → scurte.  Hund(4), Rose(4) → mai lungi.",
    t6_b3l: "3 litere 📝", t6_b4l: "4 litere 📖",
    t7_inst: "Găsește vocalele din A-B-C-D-E!",
    t7_h1: "Vocalele: A și E (în A-B-C-D-E).",
    t7_h2: "A și E sunt vocale. B, C, D sunt consoane.",
  },
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
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Silbeninsel (Syllables)
// TODO: Add SYLLABLE_LABELS + SYLLABLE_POOL (friend fills this in)
// Pattern: copy LETTER section above, rename t1_… → t1_…, content = syllables topic
// ─────────────────────────────────────────────────────────────────────────────

// export const SYLLABLE_LABELS: Record<string, Record<string, string>> = { ... };
// export const SYLLABLE_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLANDS i3-i9 — same pattern
// ─────────────────────────────────────────────────────────────────────────────
