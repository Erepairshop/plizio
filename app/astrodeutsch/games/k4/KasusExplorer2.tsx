"use client";
// KasusExplorer2 — Island i2: Dativ & Genitiv (K4)
// Topics: 1) Dativ 2) Genitiv 3) Präpositionen+Fall 4) Artikel (dem/des) 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="24" textAnchor="middle">🤝</text>
        <text x="0" y="10" fontSize="16" fontWeight="bold" fill="#0E7490" textAnchor="middle">Der Dativ</text>
        <rect x="-60" y="20" width="120" height="20" rx="4" fill="#CFFAFE" />
        <text x="0" y="34" fontSize="12" fontWeight="bold" fill="#0891B2" textAnchor="middle">Wem?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="-10" fontSize="24" textAnchor="middle">🚗</text>
        <path d="M -10,-15 L 10,-15" stroke="#F87171" strokeWidth="2" strokeDasharray="2 2" />
        <text x="30" y="-10" fontSize="24" textAnchor="middle">👨</text>
        <circle cx="0" cy="40" r="3" fill="#991B1B" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-25" width="70" height="30" rx="4" fill="#BBF7D0" />
        <circle cx="-45" cy="20" r="3" fill="#166534" />

        <rect x="10" y="-25" width="70" height="30" rx="4" fill="#BBF7D0" />
        <circle cx="45" cy="20" r="3" fill="#166534" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-50" cy="-20" r="4" fill="#D97706" />
        <circle cx="-50" cy="10" r="4" fill="#DC2626" />

        <circle cx="50" cy="-20" r="4" fill="#D97706" />
        <circle cx="50" cy="10" r="4" fill="#DC2626" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad2_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad2_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🧩</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Dativ & Genitiv",

    // T1
    t1_title: "Der Dativ (3. Fall)",
    t1_text: "Der Dativ antwortet auf die Frage: Wem? Er zeigt oft an, wem etwas gegeben wird oder wem geholfen wird.",
    t1_b1: "Beispiel: Ich helfe DEM MANN.",
    t1_b2: "Frage: Wem helfe ich? -> dem Mann.",
    t1_b3: "Wichtige Verben: helfen, danken, gehören.",
    t1_inst: "Wo ist das Dativ-Objekt? Markiere es!",
    t1_h1: "Frage dich: Wem schenkt das Kind eine Blume?",
    t1_h2: "Die Antwort ist 'der Mutter'.",
    t1_w1: "Das", t1_w2: "Kind", t1_w3: "schenkt", t1_w4: "der", t1_w5: "Mutter", t1_w6: "eine", t1_w7: "Blume.",
    t1_q: "Mit welchem Fragewort fragt man nach dem Dativ?",
    t1_q_a: "Wem?", t1_q_b: "Wen oder was?", t1_q_c: "Wessen?", t1_q_d: "Wer oder was?",

    // T2
    t2_title: "Der Genitiv (2. Fall)",
    t2_text: "Der Genitiv zeigt den Besitz oder die Zugehörigkeit an. Er antwortet auf die Frage: Wessen? (Whose?).",
    t2_b1: "Beispiel: Das ist das Auto DES VATERS.",
    t2_b2: "Frage: Wessen Auto ist das? -> das des Vaters.",
    t2_b3: "Achtung: Männliche und sächliche Nomen bekommen ein -s oder -es!",
    t2_inst: "Bringe den Satz mit dem Genitiv in die richtige Reihenfolge!",
    t2_h1: "Beginne mit 'Das Auto'.",
    t2_h2: "Danach kommt der Besitzer im Genitiv: 'des Vaters'.",
    t2_w1: "Das", t2_w2: "Auto", t2_w3: "des", t2_w4: "Vaters", t2_w5: "ist", t2_w6: "schnell.",
    t2_q: "Welches Fragewort gehört zum Genitiv?",
    t2_q_a: "Wessen?", t2_q_b: "Wem?", t2_q_c: "Wen?", t2_q_d: "Woher?",

    // T3
    t3_title: "Präpositionen und Fälle",
    t3_text: "Manche kleine Wörter (Präpositionen) verlangen IMMER einen bestimmten Fall. Wenn du 'mit' benutzt, folgt immer der Dativ. Nach 'wegen' folgt der Genitiv.",
    t3_b1: "Immer mit Dativ: aus, bei, mit, nach, von, zu",
    t3_b2: "Oft mit Genitiv: wegen, während, trotz",
    t3_b3: "Beispiel: MIT dem Hund (Dativ)",
    t3_inst: "Welchen Fall verlangt die Präposition? Verbinde richtig!",
    t3_h1: "'mit' und 'zu' verlangen den Dativ.",
    t3_h2: "'wegen' und 'während' verlangen den Genitiv.",
    t3_l1: "mit", t3_r1: "+ Dativ",
    t3_l2: "wegen", t3_r2: "+ Genitiv",
    t3_l3: "zu", t3_r3: "+ Dativ",
    t3_l4: "während", t3_r4: "+ Genitiv",
    t3_q: "Welche Präposition verlangt IMMER den Dativ?",
    t3_q_a: "mit", t3_q_b: "für", t3_q_c: "durch", t3_q_d: "ohne",

    // T4
    t4_title: "Artikel: dem oder des?",
    t4_text: "Im Dativ und Genitiv verändern sich die bestimmten Artikel stark. Besonders wichtig sind die männlichen und sächlichen (der/das) Wörter.",
    t4_b1: "Dativ (der/das): ➔ dem",
    t4_b2: "Genitiv (der/das): ➔ des (+s am Nomen)",
    t4_b3: "Dativ Plural: ➔ den (+n am Nomen)",
    t4_inst: "Welcher Artikel passt in die Lücke? 'Ich spiele mit ___ Hund.'",
    t4_h1: "Nach 'mit' kommt immer der Dativ.",
    t4_h2: "Der Dativ von 'der Hund' ist 'dem Hund'.",
    t4_gap_sentence: "Ich spiele mit {gap} Hund.",
    t4_c1: "dem", t4_c2: "des", t4_c3: "den",
    t4_q: "Wie lautet der Genitiv von 'das Kind'?",
    t4_q_a: "des Kindes", t4_q_b: "dem Kind", t4_q_c: "das Kind", t4_q_d: "den Kindern",

    // T5
    t5_title: "Gemischtes Kasus-Quiz",
    t5_text: "Dativ oder Genitiv? Schau auf die Endungen: 'dem' zeigt dir den Dativ (wem?), 'des' verrät den Genitiv (wessen?).",
    t5_b1: "dem Mann, dem Kind = Dativ",
    t5_b2: "des Mannes, des Kindes = Genitiv",
    t5_b3: "Weiblich: der Frau (kann beides sein!)",
    t5_inst: "Steht das Wort im Dativ oder im Genitiv? Sortiere sie!",
    t5_h1: "'dem' ist Dativ. 'des' ist Genitiv.",
    t5_h2: "Achte auch auf das '-s' oder '-es' am Ende des Nomens beim Genitiv.",
    t5_bucket_dat: "Dativ (Wem?)",
    t5_bucket_gen: "Genitiv (Wessen?)",
    t5_item_d1: "dem Hund", t5_item_d2: "dem Baum", t5_item_d3: "dem Baby",
    t5_item_g1: "des Hundes", t5_item_g2: "des Baumes", t5_item_g3: "des Babys",
    t5_q: "In welchem Fall steht: 'mit dem Auto'?",
    t5_q_a: "Dativ", t5_q_b: "Genitiv", t5_q_c: "Akkusativ", t5_q_d: "Nominativ",
  },
  en: {
    explorer_title: "Cases: Dat & Gen",
    t1_inst: "Where is the Dative object? Highlight it!",
    t1_h1: "Ask yourself: To whom does the child give a flower?",
    t1_h2: "The answer is 'der Mutter'.",
    t2_inst: "Put the sentence with the Genitive in the correct order!",
    t2_h1: "Start with 'Das Auto'.",
    t2_h2: "Then the owner in Genitive: 'des Vaters'.",
    t3_inst: "Which case does the preposition require? Match correctly!",
    t3_h1: "'mit' and 'zu' require Dativ.",
    t3_h2: "'wegen' and 'während' require Genitiv.",
    t4_inst: "Which article fits in the gap? 'Ich spiele mit ___ Hund.'",
    t4_h1: "After 'mit' comes the Dative.",
    t4_h2: "The Dative of 'der Hund' is 'dem Hund'.",
    t5_inst: "Is the word in Dative or Genitive? Sort them!",
    t5_h1: "'dem' is Dativ. 'des' is Genitive.",
    t5_h2: "Also look for the '-s' or '-es' at the end of the noun in Genitive.",
    t5_bucket_dat: "Dativ (To whom?)",
    t5_bucket_gen: "Genitiv (Whose?)",
  },
  hu: {
    explorer_title: "Esetek: Részes & Birtokos",
    t1_inst: "Hol van a részesesetű (Dativ) tárgy? Jelöld ki!",
    t1_h1: "Kérdezd meg magadtól: Kinek ad a gyerek virágot?",
    t1_h2: "A válasz: 'der Mutter'.",
    t2_inst: "Tedd a birtokos esetet tartalmazó mondatot a helyes sorrendbe!",
    t2_h1: "Kezdd a 'Das Auto'-val.",
    t2_h2: "Utána a birtokos jön Genitivben: 'des Vaters'.",
    t3_inst: "Melyik esetet vonzza a prepozíció? Kösd össze helyesen!",
    t3_h1: "A 'mit' és 'zu' Dativot vonz.",
    t3_h2: "A 'wegen' és 'während' Genitivot vonz.",
    t4_inst: "Melyik névelő illik az űrbe? 'Ich spiele mit ___ Hund.'",
    t4_h1: "A 'mit' után mindig Dativ jön.",
    t4_h2: "A 'der Hund' Dativja: 'dem Hund'.",
    t5_inst: "A szó Dativban vagy Genitivban van? Válogasd szét!",
    t5_h1: "A 'dem' Dativ. A 'des' Genitiv.",
    t5_h2: "Figyelj a főnév végén lévő '-s' vagy '-es' végződésre is Genitivnél.",
    t5_bucket_dat: "Dativ (Kinek?)",
    t5_bucket_gen: "Genitiv (Kinek a...?)",
  },
  ro: {
    explorer_title: "Cazuri: Dat & Gen",
    t1_inst: "Unde este obiectul în Dativ? Marchează-l!",
    t1_h1: "Întreabă-te: Cui îi dă copilul o floare?",
    t1_h2: "Răspunsul este 'der Mutter'.",
    t2_inst: "Așază propoziția cu Genitivul în ordinea corectă!",
    t2_h1: "Începe cu 'Das Auto'.",
    t2_h2: "Apoi posesorul în Genitiv: 'des Vaters'.",
    t3_inst: "Ce caz cere prepoziția? Leagă corect!",
    t3_h1: "'mit' și 'zu' cer Dativ.",
    t3_h2: "'wegen' și 'während' cer Genitiv.",
    t4_inst: "Ce articol se potrivește în spațiu? 'Ich spiele mit ___ Hund.'",
    t4_h1: "După 'mit' urmează întotdeauna Dativul.",
    t4_h2: "Dativul lui 'der Hund' este 'dem Hund'.",
    t5_inst: "Cuvântul este în Dativ sau Genitiv? Sortează-le!",
    t5_h1: "'dem' este Dativ. 'des' este Genitiv.",
    t5_h2: "Atenție și la '-s' sau '-es' de la sfârșitul substantivului la Genitiv.",
    t5_bucket_dat: "Dativ (Cui?)",
    t5_bucket_gen: "Genitiv (Al cui?)",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], // Das Kind schenkt der Mutter eine Blume.
      correctIndices: [3, 4], // der Mutter
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"], // Das Auto des Vaters ist schnell.
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"], // dem, des, den
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "dat", label: "t5_bucket_dat" },
        { id: "gen", label: "t5_bucket_gen" },
      ],
      items: [
        { text: "t5_item_d1", bucketId: "dat" },
        { text: "t5_item_g1", bucketId: "gen" },
        { text: "t5_item_d2", bucketId: "dat" },
        { text: "t5_item_g2", bucketId: "gen" },
        { text: "t5_item_d3", bucketId: "dat" },
        { text: "t5_item_g3", bucketId: "gen" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🤝",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KasusExplorer2 = memo(function KasusExplorer2({
  color = "#0E7490",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone?: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_kasus2" color={color} lang={lang} onDone={onDone} />;
});

export default KasusExplorer2;
