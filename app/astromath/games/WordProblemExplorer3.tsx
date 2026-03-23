"use client";
// WordProblemExplorer3 — Word Problems Island (3 topics)
// Uses ExplorerEngine for teach → interact → quiz flow

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Addition story visualization ──────────────────────────────────────

const AdditionStorySvg = memo(function AdditionStorySvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="addStoryG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#addStoryG)" rx="16" />

      {/* Start: 3 apples */}
      <text x="20" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🍎 🍎 🍎
      </text>
      <text x="20" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        Start: 3 apples
      </text>

      {/* Plus: 2 more */}
      <text x="120" y="45" fontSize="16" fontWeight="bold" fill="#10B981">
        +
      </text>
      <text x="150" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🍎 🍎
      </text>
      <text x="150" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        Add: 2 more
      </text>

      {/* Total: 5 apples */}
      <text x="35" y="100" fontSize="14" fontWeight="bold" fill="#10B981">
        🍎 🍎 🍎 🍎 🍎
      </text>
      <text x="20" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        Total: 5 apples
      </text>

      {/* Equation */}
      <text x="180" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        3 + 2 = 5
      </text>
    </svg>
  );
});

// ─── SVG: Subtraction story visualization ───────────────────────────────────

const SubtractionStorySvg = memo(function SubtractionStorySvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="subStoryG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#subStoryG)" rx="16" />

      {/* Start: 7 toys */}
      <text x="15" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🧸 🧸 🧸 🧸 🧸 🧸 🧸
      </text>
      <text x="15" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        Start: 7 toys
      </text>

      {/* Remove: 3 toys */}
      <text x="100" y="45" fontSize="16" fontWeight="bold" fill="#FF6B6B">
        -
      </text>
      <text x="130" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🧸 🧸 🧸
      </text>
      <text x="120" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        Remove: 3
      </text>

      {/* Left: 4 toys */}
      <text x="15" y="100" fontSize="14" fontWeight="bold" fill="#10B981">
        🧸 🧸 🧸 🧸
      </text>
      <text x="15" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        Left: 4 toys
      </text>

      {/* Equation */}
      <text x="180" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        7 - 3 = 4
      </text>
    </svg>
  );
});

// ─── SVG: Multiplication story visualization ────────────────────────────────

const MultiplicationStorySvg = memo(function MultiplicationStorySvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mulStoryG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mulStoryG)" rx="16" />

      {/* 3 boxes, 4 items each */}
      <text x="15" y="35" fontSize="12" fontWeight="bold" fill="#10B981">
        Box 1: 🍊 🍊 🍊 🍊
      </text>
      <text x="15" y="55" fontSize="12" fontWeight="bold" fill="#10B981">
        Box 2: 🍊 🍊 🍊 🍊
      </text>
      <text x="15" y="75" fontSize="12" fontWeight="bold" fill="#10B981">
        Box 3: 🍊 🍊 🍊 🍊
      </text>

      {/* Equation & Total */}
      <text x="150" y="50" fontSize="11" fontWeight="bold" fill="#10B981">
        3 × 4 = 12
      </text>
      <text x="150" y="80" fontSize="11" fill="#10B981" opacity="0.8">
        Total: 12 oranges
      </text>

      <text x="20" y="125" fontSize="10" fill="#10B981" opacity="0.7" fontWeight="bold">
        Groups × items per group = total
      </text>
    </svg>
  );
});

// ─── LABELS ────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Problem Explorer",
    // Topic 1: Addition Story
    add_story_title: "➕ Addition Story",
    add_story_teach: "Read the story carefully. Find the starting number and what you add.",
    add_story_hint_1: "What do we start with? What do we add?",
    add_story_hint_2: "Start with 3, add 2 more → total is 5",
    add_story_hint_3: "Addition stories put things together",

    // Topic 2: Subtraction Story
    sub_story_title: "➖ Subtraction Story",
    sub_story_teach: "Find the total and what is taken away or removed.",
    sub_story_hint_1: "What do we start with? What goes away?",
    sub_story_hint_2: "Start with 7, remove 3 → left with 4",
    sub_story_hint_3: "Subtraction stories take things away",

    // Topic 3: Multiplication Story
    mul_story_title: "✖️ Multiplication Story",
    mul_story_teach: "Count the groups and items in each group.",
    mul_story_hint_1: "How many groups? How many in each?",
    mul_story_hint_2: "3 groups × 4 items = 12 total",
    mul_story_hint_3: "Multiplication stories are repeated groups",

    story_q1: "Maya has 5 books. Her friend gives her 3 more. How many books does she have?",
    story_a1: "8 books",
    story_q2: "There are 12 cookies. Tom eats 4. How many are left?",
    story_a2: "8 cookies",
    story_q3: "There are 4 baskets with 3 apples each. How many apples in total?",
    story_a3: "12 apples",
  },
  de: {
    explorer_title: "Sachaufgaben entdecken",
    add_story_title: "➕ Additions-Geschichte",
    add_story_teach: "Lies die Geschichte genau. Finde die Startzahl und was hinzukommt.",
    add_story_hint_1: "Womit fangen wir an? Was kommt hinzu?",
    add_story_hint_2: "Anfang 3, dazu 2 → Gesamt 5",
    add_story_hint_3: "Additions-Geschichten fügen Dinge zusammen",

    sub_story_title: "➖ Subtraktions-Geschichte",
    sub_story_teach: "Finde die Gesamtzahl und was genommen oder entfernt wird.",
    sub_story_hint_1: "Womit fangen wir an? Was geht weg?",
    sub_story_hint_2: "Anfang 7, wegnehmen 3 → übrig 4",
    sub_story_hint_3: "Subtraktions-Geschichten nehmen weg",

    mul_story_title: "✖️ Einmaleins-Geschichte",
    mul_story_teach: "Zähle die Gruppen und Gegenstände in jeder Gruppe.",
    mul_story_hint_1: "Wie viele Gruppen? Wie viele in jeder?",
    mul_story_hint_2: "3 Gruppen × 4 Gegenstände = 12 Gesamt",
    mul_story_hint_3: "Einmaleins-Geschichten sind wiederholte Gruppen",

    story_q1: "Maya hat 5 Bücher. Ihre Freundin gibt ihr 3 mehr. Wie viele Bücher hat sie?",
    story_a1: "8 Bücher",
    story_q2: "Es gibt 12 Kekse. Tom isst 4. Wie viele sind übrig?",
    story_a2: "8 Kekse",
    story_q3: "Es gibt 4 Körbe mit je 3 Äpfeln. Wie viele Äpfel insgesamt?",
    story_a3: "12 Äpfel",
  },
  hu: {
    explorer_title: "Szöveges feladat felfedezés",
    add_story_title: "➕ Összeadás történet",
    add_story_teach: "Olvasd el a történetet figyelmesen. Keress egy kezdőszámot és azt, amit hozzáadsz.",
    add_story_hint_1: "Mivel kezdünk? Mit adunk hozzá?",
    add_story_hint_2: "Kezdés 3-mal, hozzáadás 2 → összesen 5",
    add_story_hint_3: "Az összeadás története összerakja a dolgokat",

    sub_story_title: "➖ Kivonás történet",
    sub_story_teach: "Keress egy teljes számot és azt, ami elveszik vagy elmarad.",
    sub_story_hint_1: "Mivel kezdünk? Mi tűnik el?",
    sub_story_hint_2: "Kezdés 7-tel, elvesz 3 → marad 4",
    sub_story_hint_3: "A kivonás története elvesz dolgokat",

    mul_story_title: "✖️ Szorzás történet",
    mul_story_teach: "Számolja meg a csoportokat és az elemeket mindegyikben.",
    mul_story_hint_1: "Hány csoport? Hány van mindegyikben?",
    mul_story_hint_2: "3 csoport × 4 elem = 12 összesen",
    mul_story_hint_3: "A szorzás története ismételt csoportok",

    story_q1: "Mayának 5 könyve van. A barátja 3-at ad neki. Hány könyve van?",
    story_a1: "8 könyv",
    story_q2: "12 sütemény van. Tom megeszik 4-et. Hány marad?",
    story_a2: "8 sütemény",
    story_q3: "4 kosár van, mindegyikben 3 alma. Hány alma összesen?",
    story_a3: "12 alma",
  },
  ro: {
    explorer_title: "Explorare probleme",
    add_story_title: "➕ Povestea adunării",
    add_story_teach: "Citește cu atenție. Găsește numărul de pornire și ce se adaugă.",
    add_story_hint_1: "Cu ce începem? Ce adăugăm?",
    add_story_hint_2: "Început 3, adaugă 2 → total 5",
    add_story_hint_3: "Poveștile de adunare pun lucruri împreună",

    sub_story_title: "➖ Povestea scăderii",
    sub_story_teach: "Găsește totalul și ce se ia sau se elimină.",
    sub_story_hint_1: "Cu ce începem? Ce dispare?",
    sub_story_hint_2: "Început 7, ia 3 → rămâne 4",
    sub_story_hint_3: "Poveștile de scădere iau lucruri",

    mul_story_title: "✖️ Povestea înmulțirii",
    mul_story_teach: "Numără grupurile și elementele din fiecare.",
    mul_story_hint_1: "Câte grupuri? Câte în fiecare?",
    mul_story_hint_2: "3 grupuri × 4 elemente = 12 total",
    mul_story_hint_3: "Poveștile de înmulțire sunt grupuri repetate",

    story_q1: "Maya are 5 cărți. Prietenul ei îi dă 3 mai mult. Câte cărți are?",
    story_a1: "8 cărți",
    story_q2: "Sunt 12 biscuiți. Tom mănâncă 4. Câți rămân?",
    story_a2: "8 biscuiți",
    story_q3: "Sunt 4 coșuri cu 3 mere în fiecare. Câte mere în total?",
    story_a3: "12 mere",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📖",
  rounds: [
    // ─ R1: Addition Story ─
    {
      type: "info",
      infoTitle: "add_story_title",
      infoText: "add_story_teach",
      svg: () => <AdditionStorySvg />,
      bulletKeys: ["add_story_hint_1", "add_story_hint_2", "add_story_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "add_story_title",
      infoText: "add_story_teach",
      svg: () => <AdditionStorySvg />,
      questions: [
        {
          question: "story_q1",
          choices: ["7 books", "8 books", "9 books", "10 books"],
          answer: "8 books",
        },
      ],
    },

    // ─ R2: Subtraction Story ─
    {
      type: "info",
      infoTitle: "sub_story_title",
      infoText: "sub_story_teach",
      svg: () => <SubtractionStorySvg />,
      bulletKeys: ["sub_story_hint_1", "sub_story_hint_2", "sub_story_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "sub_story_title",
      infoText: "sub_story_teach",
      svg: () => <SubtractionStorySvg />,
      questions: [
        {
          question: "story_q2",
          choices: ["6 cookies", "8 cookies", "10 cookies", "12 cookies"],
          answer: "8 cookies",
        },
      ],
    },

    // ─ R3: Multiplication Story ─
    {
      type: "info",
      infoTitle: "mul_story_title",
      infoText: "mul_story_teach",
      svg: () => <MultiplicationStorySvg />,
      bulletKeys: ["mul_story_hint_1", "mul_story_hint_2", "mul_story_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "mul_story_title",
      infoText: "mul_story_teach",
      svg: () => <MultiplicationStorySvg />,
      questions: [
        {
          question: "story_q1",
          choices: ["7 books", "8 books", "9 books", "10 books"],
          answer: "8 books",
        },
        {
          question: "story_q2",
          choices: ["6 cookies", "8 cookies", "10 cookies", "12 cookies"],
          answer: "8 cookies",
        },
        {
          question: "story_q3",
          choices: ["10 apples", "12 apples", "14 apples", "16 apples"],
          answer: "12 apples",
        },
      ],
    },
  ],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function WordProblemExplorer3({ color = "#10B981", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={3}
    />
  );
}
