"use client";
// WordProblemExplorer3 — Word Problems Island (3 topics)
// Uses ExplorerEngine for teach → interact → quiz flow

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Addition story visualization ──────────────────────────────────────

const AdditionStorySvg = memo(function AdditionStorySvg({ lang = "en" }: { lang: string }) {
  const t = LABELS[lang] || LABELS.en;
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
        {t.add_svg_start}
      </text>

      {/* Plus: 2 more */}
      <text x="120" y="45" fontSize="16" fontWeight="bold" fill="#10B981">
        +
      </text>
      <text x="150" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🍎 🍎
      </text>
      <text x="150" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        {t.add_svg_add}
      </text>

      {/* Total: 5 apples */}
      <text x="35" y="100" fontSize="14" fontWeight="bold" fill="#10B981">
        🍎 🍎 🍎 🍎 🍎
      </text>
      <text x="20" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        {t.add_svg_total}
      </text>

      {/* Equation */}
      <text x="180" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        3 + 2 = 5
      </text>
    </svg>
  );
});

// ─── SVG: Subtraction story visualization ───────────────────────────────────

const SubtractionStorySvg = memo(function SubtractionStorySvg({ lang = "en" }: { lang: string }) {
  const t = LABELS[lang] || LABELS.en;
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
        {t.sub_svg_start}
      </text>

      {/* Remove: 3 toys */}
      <text x="100" y="45" fontSize="16" fontWeight="bold" fill="#FF6B6B">
        -
      </text>
      <text x="130" y="40" fontSize="14" fontWeight="bold" fill="#10B981">
        🧸 🧸 🧸
      </text>
      <text x="120" y="60" fontSize="11" fill="#10B981" opacity="0.8">
        {t.sub_svg_remove}
      </text>

      {/* Left: 4 toys */}
      <text x="15" y="100" fontSize="14" fontWeight="bold" fill="#10B981">
        🧸 🧸 🧸 🧸
      </text>
      <text x="15" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        {t.sub_svg_left}
      </text>

      {/* Equation */}
      <text x="180" y="120" fontSize="11" fontWeight="bold" fill="#10B981">
        7 - 3 = 4
      </text>
    </svg>
  );
});

// ─── SVG: Multiplication story visualization ────────────────────────────────

const MultiplicationStorySvg = memo(function MultiplicationStorySvg({ lang = "en" }: { lang: string }) {
  const t = LABELS[lang] || LABELS.en;
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
        {t.mul_svg_box1} 🍊 🍊 🍊 🍊
      </text>
      <text x="15" y="55" fontSize="12" fontWeight="bold" fill="#10B981">
        {t.mul_svg_box2} 🍊 🍊 🍊 🍊
      </text>
      <text x="15" y="75" fontSize="12" fontWeight="bold" fill="#10B981">
        {t.mul_svg_box3} 🍊 🍊 🍊 🍊
      </text>

      {/* Equation & Total */}
      <text x="150" y="50" fontSize="11" fontWeight="bold" fill="#10B981">
        3 × 4 = 12
      </text>
      <text x="150" y="80" fontSize="11" fill="#10B981" opacity="0.8">
        {t.mul_svg_total}
      </text>

      <text x="20" y="125" fontSize="10" fill="#10B981" opacity="0.7" fontWeight="bold">
        {t.mul_svg_formula}
      </text>
    </svg>
  );
});

// ─── LABELS ────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Problem Explorer",
    // Topic 1: Addition Story
    t1_title: "➕ Addition Story",
    t1_teach: "Read the story carefully. Find the starting number and what you add.",
    t1_bullet_1: "What do we start with? What do we add?",
    t1_bullet_2: "Start with 3, add 2 more → total is 5",
    t1_bullet_3: "Addition stories put things together",
    t1_inst: "Drag the numbers to build the addition equation",
    t1_h1: "Start",
    t1_h2: "Add",
    add_svg_start: "Start: 3 apples",
    add_svg_add: "Add: 2 more",
    add_svg_total: "Total: 5 apples",

    // Topic 2: Subtraction Story
    t2_title: "➖ Subtraction Story",
    t2_teach: "Find the total and what is taken away or removed.",
    t2_bullet_1: "What do we start with? What goes away?",
    t2_bullet_2: "Start with 7, remove 3 → left with 4",
    t2_bullet_3: "Subtraction stories take things away",
    t2_inst: "Drag the numbers to build the subtraction equation",
    t2_h1: "Start",
    t2_h2: "Remove",
    sub_svg_start: "Start: 7 toys",
    sub_svg_remove: "Remove: 3",
    sub_svg_left: "Left: 4 toys",

    // Topic 3: Multiplication Story
    t3_title: "✖️ Multiplication Story",
    t3_teach: "Count the groups and items in each group.",
    t3_bullet_1: "How many groups? How many in each?",
    t3_bullet_2: "3 groups × 4 items = 12 total",
    t3_bullet_3: "Multiplication stories are repeated groups",
    t3_inst: "Drag the numbers to build the multiplication equation",
    t3_h1: "Groups",
    t3_h2: "Items",
    mul_svg_box1: "Box 1:",
    mul_svg_box2: "Box 2:",
    mul_svg_box3: "Box 3:",
    mul_svg_total: "Total: 12 oranges",
    mul_svg_formula: "Groups × items per group = total",

    story_q1: "Maya has 5 books. Her friend gives her 3 more. How many books does she have?",
    story_a1: "8 books",
    story_q2: "There are 12 cookies. Tom eats 4. How many are left?",
    story_a2: "8 cookies",
    story_q3: "There are 4 baskets with 3 apples each. How many apples in total?",
    story_a3: "12 apples",
  },
  de: {
    explorer_title: "Sachaufgaben entdecken",
    t1_title: "➕ Additions-Geschichte",
    t1_teach: "Lies die Geschichte genau. Finde die Startzahl und was hinzukommt.",
    t1_bullet_1: "Womit fangen wir an? Was kommt hinzu?",
    t1_bullet_2: "Anfang 3, dazu 2 → Gesamt 5",
    t1_bullet_3: "Additions-Geschichten fügen Dinge zusammen",
    t1_inst: "Ziehe die Zahlen, um die Additionsgleichung zu bilden",
    t1_h1: "Start",
    t1_h2: "Dazu",
    add_svg_start: "Start: 3 Äpfel",
    add_svg_add: "Dazu: 2 mehr",
    add_svg_total: "Gesamt: 5 Äpfel",

    t2_title: "➖ Subtraktions-Geschichte",
    t2_teach: "Finde die Gesamtzahl und was genommen oder entfernt wird.",
    t2_bullet_1: "Womit fangen wir an? Was geht weg?",
    t2_bullet_2: "Anfang 7, wegnehmen 3 → übrig 4",
    t2_bullet_3: "Subtraktions-Geschichten nehmen weg",
    t2_inst: "Ziehe die Zahlen, um die Subtraktionsgleichung zu bilden",
    t2_h1: "Start",
    t2_h2: "Weg",
    sub_svg_start: "Start: 7 Spielzeuge",
    sub_svg_remove: "Weg: 3",
    sub_svg_left: "Übrig: 4 Spielzeuge",

    t3_title: "✖️ Einmaleins-Geschichte",
    t3_teach: "Zähle die Gruppen und Gegenstände in jeder Gruppe.",
    t3_bullet_1: "Wie viele Gruppen? Wie viele in jeder?",
    t3_bullet_2: "3 Gruppen × 4 Gegenstände = 12 Gesamt",
    t3_bullet_3: "Einmaleins-Geschichten sind wiederholte Gruppen",
    t3_inst: "Ziehe die Zahlen, um die Multiplikationsgleichung zu bilden",
    t3_h1: "Gruppen",
    t3_h2: "Gegenstände",
    mul_svg_box1: "Karton 1:",
    mul_svg_box2: "Karton 2:",
    mul_svg_box3: "Karton 3:",
    mul_svg_total: "Gesamt: 12 Apfelsinen",
    mul_svg_formula: "Gruppen × Gegenstände pro Gruppe = Gesamt",

    story_q1: "Maya hat 5 Bücher. Ihre Freundin gibt ihr 3 mehr. Wie viele Bücher hat sie?",
    story_a1: "8 Bücher",
    story_q2: "Es gibt 12 Kekse. Tom isst 4. Wie viele sind übrig?",
    story_a2: "8 Kekse",
    story_q3: "Es gibt 4 Körbe mit je 3 Äpfeln. Wie viele Äpfel insgesamt?",
    story_a3: "12 Äpfel",
  },
  hu: {
    explorer_title: "Szöveges feladat felfedezés",
    t1_title: "➕ Összeadás történet",
    t1_teach: "Olvasd el a történetet figyelmesen. Keress egy kezdőszámot és azt, amit hozzáadsz.",
    t1_bullet_1: "Mivel kezdünk? Mit adunk hozzá?",
    t1_bullet_2: "Kezdés 3-mal, hozzáadás 2 → összesen 5",
    t1_bullet_3: "Az összeadás története összerakja a dolgokat",
    t1_inst: "Húzd a számokat az összeadási egyenlet felépítéséhez",
    t1_h1: "Kezdés",
    t1_h2: "Hozzáadás",
    add_svg_start: "Kezdés: 3 alma",
    add_svg_add: "Hozzáadás: 2 további",
    add_svg_total: "Összesen: 5 alma",

    t2_title: "➖ Kivonás történet",
    t2_teach: "Keress egy teljes számot és azt, ami elveszik vagy elmarad.",
    t2_bullet_1: "Mivel kezdünk? Mi tűnik el?",
    t2_bullet_2: "Kezdés 7-tel, elvesz 3 → marad 4",
    t2_bullet_3: "A kivonás története elvesz dolgokat",
    t2_inst: "Húzd a számokat a kivonási egyenlet felépítéséhez",
    t2_h1: "Kezdés",
    t2_h2: "Elvétel",
    sub_svg_start: "Kezdés: 7 játékszer",
    sub_svg_remove: "Elvétel: 3",
    sub_svg_left: "Maradt: 4 játékszer",

    t3_title: "✖️ Szorzás történet",
    t3_teach: "Számolja meg a csoportokat és az elemeket mindegyikben.",
    t3_bullet_1: "Hány csoport? Hány van mindegyikben?",
    t3_bullet_2: "3 csoport × 4 elem = 12 összesen",
    t3_bullet_3: "A szorzás története ismételt csoportok",
    t3_inst: "Húzd a számokat a szorzási egyenlet felépítéséhez",
    t3_h1: "Csoportok",
    t3_h2: "Elemek",
    mul_svg_box1: "Doboz 1:",
    mul_svg_box2: "Doboz 2:",
    mul_svg_box3: "Doboz 3:",
    mul_svg_total: "Összesen: 12 narancs",
    mul_svg_formula: "Csoportok × elemek csoportonként = összesen",

    story_q1: "Mayának 5 könyve van. A barátja 3-at ad neki. Hány könyve van?",
    story_a1: "8 könyv",
    story_q2: "12 sütemény van. Tom megeszik 4-et. Hány marad?",
    story_a2: "8 sütemény",
    story_q3: "4 kosár van, mindegyikben 3 alma. Hány alma összesen?",
    story_a3: "12 alma",
  },
  ro: {
    explorer_title: "Explorare probleme",
    t1_title: "➕ Povestea adunării",
    t1_teach: "Citește cu atenție. Găsește numărul de pornire și ce se adaugă.",
    t1_bullet_1: "Cu ce începem? Ce adăugăm?",
    t1_bullet_2: "Început 3, adaugă 2 → total 5",
    t1_bullet_3: "Poveștile de adunare pun lucruri împreună",
    t1_inst: "Trage numerele pentru a construi ecuația de adunare",
    t1_h1: "Început",
    t1_h2: "Adaugă",
    add_svg_start: "Început: 3 mere",
    add_svg_add: "Adaug: 2 mai mult",
    add_svg_total: "Total: 5 mere",

    t2_title: "➖ Povestea scăderii",
    t2_teach: "Găsește totalul și ce se ia sau se elimină.",
    t2_bullet_1: "Cu ce începem? Ce dispare?",
    t2_bullet_2: "Început 7, ia 3 → rămâne 4",
    t2_bullet_3: "Poveștile de scădere iau lucruri",
    t2_inst: "Trage numerele pentru a construi ecuația de scădere",
    t2_h1: "Început",
    t2_h2: "Scade",
    sub_svg_start: "Început: 7 jucării",
    sub_svg_remove: "Scad: 3",
    sub_svg_left: "Rămase: 4 jucării",

    t3_title: "✖️ Povestea înmulțirii",
    t3_teach: "Numără grupurile și elementele din fiecare.",
    t3_bullet_1: "Câte grupuri? Câte în fiecare?",
    t3_bullet_2: "3 grupuri × 4 elemente = 12 total",
    t3_bullet_3: "Poveștile de înmulțire sunt grupuri repetate",
    t3_inst: "Trage numerele pentru a construi ecuația de înmulțire",
    t3_h1: "Grupuri",
    t3_h2: "Elemente",
    mul_svg_box1: "Cutie 1:",
    mul_svg_box2: "Cutie 2:",
    mul_svg_box3: "Cutie 3:",
    mul_svg_total: "Total: 12 portocale",
    mul_svg_formula: "Grupuri × elemente per grup = total",

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
  rounds: [],
  topics: [
    // ─ Topic 1: Addition Story ─
    {
      id: "addition_story",
      infoTitle: "t1_title",
      infoText: "t1_teach",
      svg: (lang) => <AdditionStorySvg lang={lang} />,
      bulletKeys: ["t1_bullet_1", "t1_bullet_2", "t1_bullet_3"],
      interactive: {
        mode: "combine",
        blocks: [
          { label: "t1_h1", value: "3" },
          { label: "t1_h2", value: "2" },
        ],
        instructionKey: "t1_inst",
      },
      quiz: [
        {
          question: "story_q1",
          choices: ["story_a1", "7 books", "9 books", "10 books"],
          answer: "story_a1",
        },
      ],
    },

    // ─ Topic 2: Subtraction Story ─
    {
      id: "subtraction_story",
      infoTitle: "t2_title",
      infoText: "t2_teach",
      svg: (lang) => <SubtractionStorySvg lang={lang} />,
      bulletKeys: ["t2_bullet_1", "t2_bullet_2", "t2_bullet_3"],
      interactive: {
        mode: "combine",
        blocks: [
          { label: "t2_h1", value: "7" },
          { label: "t2_h2", value: "3" },
        ],
        instructionKey: "t2_inst",
      },
      quiz: [
        {
          question: "story_q2",
          choices: ["6 cookies", "story_a2", "10 cookies", "12 cookies"],
          answer: "story_a2",
        },
      ],
    },

    // ─ Topic 3: Multiplication Story ─
    {
      id: "multiplication_story",
      infoTitle: "t3_title",
      infoText: "t3_teach",
      svg: (lang) => <MultiplicationStorySvg lang={lang} />,
      bulletKeys: ["t3_bullet_1", "t3_bullet_2", "t3_bullet_3"],
      interactive: {
        mode: "combine",
        blocks: [
          { label: "t3_h1", value: "4" },
          { label: "t3_h2", value: "3" },
        ],
        instructionKey: "t3_inst",
      },
      quiz: [
        {
          question: "story_q3",
          choices: ["10 apples", "story_a3", "14 apples", "16 apples"],
          answer: "story_a3",
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
