"use client";
// WordClassExplorerK4 — Island i4: Wortarten (Word Classes)
// Topics: 1) Die 4 Wortarten 2) Pronomen (ich/du/er) 3) Adjektiv-Steigerung 4) Zusammengesetzte Nomen 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-30" width="80" height="25" rx="4" fill="#DBEAFE" />
        <text x="-50" y="-13" fontSize="10" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Nomen (Haus)</text>
        
        <rect x="10" y="-30" width="80" height="25" rx="4" fill="#FEE2E2" />
        <text x="50" y="-13" fontSize="10" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Verben (laufen)</text>
        
        <rect x="-90" y="5" width="80" height="25" rx="4" fill="#D1FAE5" />
        <text x="-50" y="22" fontSize="10" fontWeight="bold" fill="#047857" textAnchor="middle">Adjektive (schön)</text>
        
        <rect x="10" y="5" width="80" height="25" rx="4" fill="#FEF3C7" />
        <text x="50" y="22" fontSize="10" fontWeight="bold" fill="#B45309" textAnchor="middle">Pronomen (ich)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-5" fontSize="30" textAnchor="middle">👦</text>
        <text x="-40" y="25" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">Peter</text>
        
        <path d="M -15,5 L 15,5" stroke="#F97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        
        <rect x="25" y="-15" width="40" height="30" rx="4" fill="#FED7AA" />
        <text x="45" y="5" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">er</text>
        
        <text x="0" y="45" fontSize="10" fill="#9A3412" textAnchor="middle">Pronomen ersetzen Nomen!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="10" width="30" height="20" fill="#86EFAC" rx="2" />
        <text x="-65" y="45" fontSize="10" fontWeight="bold" fill="#15803D" textAnchor="middle">groß</text>
        
        <rect x="-20" y="-10" width="30" height="40" fill="#4ADE80" rx="2" />
        <text x="-5" y="45" fontSize="10" fontWeight="bold" fill="#15803D" textAnchor="middle">größer</text>
        
        <rect x="40" y="-30" width="30" height="60" fill="#22C55E" rx="2" />
        <text x="55" y="45" fontSize="10" fontWeight="bold" fill="#15803D" textAnchor="middle">am größten</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-5" fontSize="14" fontWeight="bold" fill="#4338CA" textAnchor="middle">das Haus</text>
        <text x="0" y="-5" fontSize="14" fontWeight="bold" fill="#312E81" textAnchor="middle">+</text>
        <text x="60" y="-5" fontSize="14" fontWeight="bold" fill="#4338CA" textAnchor="middle">die Tür</text>
        
        <path d="M 60,10 L 60,25 L 10,25" fill="none" stroke="#4338CA" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <text x="0" y="40" fontSize="16" fontWeight="black" fill="#312E81" textAnchor="middle">DIE Haustür</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad4_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BE185D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad4_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">🧩</text>
        <text x="30" y="0" fontSize="30" textAnchor="middle">🧠</text>
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Wortarten-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortarten",

    // T1
    t1_title: "Die 4 Wortarten",
    t1_text: "Jedes Wort in einem Satz gehört zu einer bestimmten Familie, den 'Wortarten'. Die 4 wichtigsten sind: Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wie-Wörter) und Pronomen (Fürwörter).",
    t1_b1: "Nomen: der Baum, das Haus",
    t1_b2: "Verben: rennen, spielen",
    t1_b3: "Adjektive: groß, schön (kleingeschrieben!)",
    t1_inst: "Welches Wort gehört zu welcher Wortart? Verbinde sie!",
    t1_h1: "Großgeschrieben ist das Nomen. Ein Wort mit 'ich/du/er' ist ein Pronomen.",
    t1_h2: "'schnell' ist ein Adjektiv, 'laufen' ist ein Verb.",
    t1_l1: "Haus", t1_r1: "Nomen",
    t1_l2: "laufen", t1_r2: "Verb",
    t1_l3: "schnell", t1_r3: "Adjektiv",
    t1_l4: "ich", t1_r4: "Pronomen",
    t1_q: "Welche Wortart beschreibt, WIE etwas ist (z.B. groß, bunt)?",
    t1_q_a: "Das Adjektiv", t1_q_b: "Das Nomen", t1_q_c: "Das Verb", t1_q_d: "Das Pronomen",

    // T2
    t2_title: "Pronomen (Fürwörter)",
    t2_text: "Pronomen sind kleine Wörter, die für ein Nomen stehen (Pro-Nomen = für das Nomen). Sie helfen uns, nicht immer den gleichen Namen sagen zu müssen.",
    t2_b1: "der Mann ➔ er",
    t2_b2: "die Frau ➔ sie",
    t2_b3: "das Kind ➔ es",
    t2_inst: "Welches Pronomen ersetzt das Nomen richtig?",
    t2_h1: "Der Satz ist: 'Das ist Herr Müller. ___ ist Lehrer.'",
    t2_h2: "Herr Müller ist ein Mann (männlich). Wir brauchen 'Er'.",
    t2_gap_sentence: "Das ist Herr Müller. {gap} ist Lehrer.",
    t2_c1: "Er", t2_c2: "Sie", t2_c3: "Es",
    t2_q: "Welches Pronomen ersetzt 'das Auto'?",
    t2_q_a: "es", t2_q_b: "er", t2_q_c: "sie", t2_q_d: "ich",

    // T3
    t3_title: "Adjektive steigern",
    t3_text: "Mit Adjektiven können wir Dinge vergleichen. Wir nennen das 'Steigern'. Es gibt den Positiv (Grundform), Komparativ (mit -er) und Superlativ (am ...-sten).",
    t3_b1: "schnell ➔ schneller ➔ am schnellsten",
    t3_b2: "gut ➔ besser ➔ am besten (unregelmäßig!)",
    t3_b3: "hoch ➔ höher ➔ am höchsten",
    t3_inst: "Bringe die Adjektive in die richtige Reihenfolge (Steigerung)!",
    t3_h1: "Beginne mit der normalen Grundform (klein).",
    t3_h2: "Dann kommt die Form mit -er, und zuletzt 'am ...-sten'.",
    t3_w1: "klein", t3_w2: "kleiner", t3_w3: "am kleinsten",
    t3_q: "Wie lautet der Komparativ (die zweite Stufe) von 'stark'?",
    t3_q_a: "stärker", t3_q_b: "stark", t3_q_c: "am stärksten", t3_q_d: "starker",

    // T4
    t4_title: "Zusammengesetzte Nomen",
    t4_text: "Im Deutschen können wir zwei Nomen zusammenkleben, um ein neues Wort zu bauen! Wichtig: Der Artikel (der/die/das) des neuen Wortes kommt IMMER vom LETZTEN Wort!",
    t4_b1: "das Haus + die Tür = DIE Haustür",
    t4_b2: "der Hund + die Hütte = DIE Hundehütte",
    t4_b3: "Das letzte Wort ist der 'Chef'!",
    t4_inst: "Welcher Artikel passt zum neuen Wort?",
    t4_h1: "Wir bauen: der Apfel + der Baum = ___ Apfelbaum.",
    t4_h2: "Das letzte Wort ist 'Baum' (der Baum). Also bleibt es 'der'.",
    t4_gap_sentence: "der Apfel + der Baum = {gap} Apfelbaum.",
    t4_c1: "der", t4_c2: "die", t4_c3: "das",
    t4_q: "Welchen Artikel hat das Wort 'die Kinder' + 'das Zimmer' = ___ Kinderzimmer?",
    t4_q_a: "das", t4_q_b: "die", t4_q_c: "der", t4_q_d: "den",

    // T5
    t5_title: "Wortarten-Mix",
    t5_text: "Beweise, dass du ein Wortarten-Profi bist! Kannst du Nomen, Verben und Adjektive in einem Satz erkennen?",
    t5_b1: "Nomen: Dinge/Menschen (groß)",
    t5_b2: "Verben: Aktionen (oft am Ende mit -en)",
    t5_b3: "Adjektive: Eigenschaften",
    t5_inst: "Welche Wortart ist das Wort? Sortiere sie in die richtigen Körbe!",
    t5_h1: "Hund und Baum sind Nomen (Korb 1).",
    t5_h2: "lachen und spielen sind Verben. rot und schnell sind Adjektive.",
    t5_bucket_nom: "Nomen 🏷️",
    t5_bucket_verb: "Verben 🏃",
    t5_bucket_adj: "Adjektive 🎨",
    t5_item_hund: "Hund", t5_item_baum: "Baum",
    t5_item_lachen: "lachen", t5_item_spielen: "spielen",
    t5_item_rot: "rot", t5_item_schnell: "schnell",
    t5_q: "Welches dieser Wörter ist ein Pronomen?",
    t5_q_a: "wir", t5_q_b: "Haus", t5_q_c: "singen", t5_q_d: "schön",
  },
  en: {
    explorer_title: "Word Classes",
    t1_inst: "Which word belongs to which word class? Match them!",
    t1_h1: "Capitalized words are Nouns. A word with 'ich/du/er' is a Pronoun.",
    t1_h2: "'schnell' is an Adjective, 'laufen' is a Verb.",
    t2_inst: "Which pronoun correctly replaces the noun?",
    t2_h1: "The sentence is: 'Das ist Herr Müller. ___ ist Lehrer.'",
    t2_h2: "Herr Müller is a man (masculine). We need 'Er'.",
    t3_inst: "Put the adjectives in the correct order (comparison)!",
    t3_h1: "Start with the basic form (klein).",
    t3_h2: "Then the form with -er, and finally 'am ...-sten'.",
    t4_inst: "Which article fits the new compound word?",
    t4_h1: "We are building: der Apfel + der Baum = ___ Apfelbaum.",
    t4_h2: "The last word is 'Baum' (der Baum). So it remains 'der'.",
    t5_inst: "Which word class is this? Sort them into the correct buckets!",
    t5_h1: "Hund and Baum are Nouns.",
    t5_h2: "lachen and spielen are Verbs. rot and schnell are Adjectives.",
    t5_bucket_nom: "Nouns 🏷️",
    t5_bucket_verb: "Verbs 🏃",
    t5_bucket_adj: "Adjectives 🎨",
  },
  hu: {
    explorer_title: "Szófajok",
    t1_inst: "Melyik szó melyik szófajhoz tartozik? Kösd össze őket!",
    t1_h1: "A nagybetűs szó a Főnév. Az 'ich/du/er' egy Névmás.",
    t1_h2: "A 'schnell' egy Melléknév, a 'laufen' egy Ige.",
    t2_inst: "Melyik névmás helyettesíti helyesen a főnevet?",
    t2_h1: "A mondat: 'Das ist Herr Müller. ___ ist Lehrer.'",
    t2_h2: "Herr Müller egy férfi (hímnemű). Az 'Er' (Ő) kell ide.",
    t3_inst: "Tedd a mellékneveket a helyes fokozási sorrendbe!",
    t3_h1: "Kezdd az alapfokkal (klein).",
    t3_h2: "Aztán a középfok (-er), és végül a felsőfok ('am ...-sten').",
    t4_inst: "Melyik névelő illik az új összetett szóhoz?",
    t4_h1: "Ezt rakjuk össze: der Apfel + der Baum = ___ Apfelbaum.",
    t4_h2: "Az utolsó szó a 'Baum' (der Baum). Tehát 'der' marad.",
    t5_inst: "Milyen szófajú a szó? Válogasd őket a megfelelő kosarakba!",
    t5_h1: "A Hund és a Baum Főnevek.",
    t5_h2: "A lachen és spielen Igék. A rot és schnell Melléknevek.",
    t5_bucket_nom: "Főnevek 🏷️",
    t5_bucket_verb: "Igék 🏃",
    t5_bucket_adj: "Melléknevek 🎨",
  },
  ro: {
    explorer_title: "Părți de vorbire",
    t1_inst: "Care cuvânt aparține cărei părți de vorbire? Leagă-le!",
    t1_h1: "Cuvântul scris cu majusculă este Substantiv. 'ich/du/er' este Pronume.",
    t1_h2: "'schnell' este Adjectiv, 'laufen' este Verb.",
    t2_inst: "Care pronume înlocuiește corect substantivul?",
    t2_h1: "Propoziția este: 'Das ist Herr Müller. ___ ist Lehrer.'",
    t2_h2: "Herr Müller este un bărbat (masculin). Avem nevoie de 'Er'.",
    t3_inst: "Pune adjectivele în ordinea corectă de comparație!",
    t3_h1: "Începe cu forma de bază (klein).",
    t3_h2: "Apoi forma cu -er, și la final 'am ...-sten'.",
    t4_inst: "Ce articol se potrivește noului cuvânt compus?",
    t4_h1: "Construim: der Apfel + der Baum = ___ Apfelbaum.",
    t4_h2: "Ultimul cuvânt este 'Baum' (der Baum). Deci rămâne 'der'.",
    t5_inst: "Ce parte de vorbire este cuvântul? Sortează-le în coșuri!",
    t5_h1: "Hund și Baum sunt Substantive.",
    t5_h2: "lachen și spielen sunt Verbe. rot și schnell sunt Adjective.",
    t5_bucket_nom: "Substantive 🏷️",
    t5_bucket_verb: "Verbe 🏃",
    t5_bucket_adj: "Adjective 🎨",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // Haus -> Nomen
        { left: "t1_l2", right: "t1_r2" }, // laufen -> Verb
        { left: "t1_l3", right: "t1_r3" }, // schnell -> Adjektiv
        { left: "t1_l4", right: "t1_r4" }, // ich -> Pronomen
      ],
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // Er, Sie, Es
      correctIndex: 0,
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3"], // klein, kleiner, am kleinsten
      correctOrder: [0, 1, 2],
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
      choices: ["t4_c1", "t4_c2", "t4_c3"], // der, die, das
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
        { id: "nom", label: "t5_bucket_nom" },
        { id: "verb", label: "t5_bucket_verb" },
        { id: "adj", label: "t5_bucket_adj" },
      ],
      items: [
        { text: "t5_item_hund", bucketId: "nom" },
        { text: "t5_item_lachen", bucketId: "verb" },
        { text: "t5_item_rot", bucketId: "adj" },
        { text: "t5_item_baum", bucketId: "nom" },
        { text: "t5_item_spielen", bucketId: "verb" },
        { text: "t5_item_schnell", bucketId: "adj" },
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
  icon: "🧩",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordClassExplorerK4 = memo(function WordClassExplorerK4({
  color = "#BE185D",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone?: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_wordclass" color={color} lang={lang} onDone={onDone} />;
});

export default WordClassExplorerK4;
