"use client";
// WordFieldExplorerK2 — Island i8: Wortfelder (Word Fields)
// Topics: 1) Tiere & Körper  2) Wetter & Kleidung  3) Schule & Essen

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wfGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wfGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">🐶</text>
        <text x="-50" y="20" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">Tiere</text>
        
        <path d="M 0,-20 L 0,30" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" />
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">👀</text>
        <text x="50" y="20" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">Körper</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-15" fontSize="24" textAnchor="middle">☀️</text>
        <text x="-40" y="25" fontSize="24" textAnchor="middle">🕶️</text>
        
        <text x="40" y="-15" fontSize="24" textAnchor="middle">🌧️</text>
        <text x="40" y="25" fontSize="24" textAnchor="middle">☂️</text>
        
        <path d="M -40,0 L -40,5 M 40,0 L 40,5" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="45" fontSize="12" fill="#0369A1" textAnchor="middle">Was passt zusammen?</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wfGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wfGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">🎒</text>
        <text x="-40" y="25" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Schule</text>
        
        <text x="40" y="0" fontSize="30" textAnchor="middle">🥪</text>
        <text x="40" y="25" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Essen</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortfelder",

    // Topic 1
    t1_title: "Wortfeld: Tiere & Körper",
    t1_text: "Ein 'Wortfeld' ist eine Gruppe von Wörtern, die zum gleichen Thema gehören. Zum Wortfeld 'Tiere' gehören zum Beispiel Katze, Hund und Vogel. Zum Wortfeld 'Körper' gehören Arm, Bein und Kopf.",
    t1_b1: "Tiere: Hund, Maus, Pferd",
    t1_b2: "Körper: Auge, Ohr, Nase",
    t1_b3: "Wörter im Kopf in Ordner sortieren",
    t1_inst: "Sortiere die Wörter in das richtige Wortfeld!",
    t1_h1: "Lebt es und hat Fell oder Federn? Dann ist es ein Tier.",
    t1_h2: "Gehört es zu dir und deinem Körper? Dann ist es ein Körperteil.",
    t1_bucket_tiere: "Tiere 🐾",
    t1_bucket_koerper: "Körper 👀",
    t1_item_hund: "Hund", t1_item_katze: "Katze", t1_item_maus: "Maus",
    t1_item_arm: "Arm", t1_item_bein: "Bein", t1_item_auge: "Auge",
    t1_q: "Welches Wort gehört zum Wortfeld 'Körper'?",
    t1_q_a: "die Hand", t1_q_b: "das Auto", t1_q_c: "der Baum", t1_q_d: "der Hund",

    // Topic 2
    t2_title: "Wetter & Kleidung",
    t2_text: "Oft überschneiden sich Wortfelder. Wenn das Wetter kalt ist, brauchen wir warme Kleidung! Wenn die Sonne scheint, brauchen wir andere Dinge.",
    t2_b1: "Schnee ❄️ -> Schal, Mütze",
    t2_b2: "Sonne ☀️ -> Sonnenbrille",
    t2_b3: "Regen 🌧️ -> Regenschirm",
    t2_inst: "Was passt zum Wetter? Verbinde die passenden Paare!",
    t2_h1: "Was brauchst du, wenn es regnet?",
    t2_h2: "Regen passt zu Regenschirm. Sonne passt zu Sonnenbrille.",
    t2_l1: "Sonne ☀️", t2_r1: "Sonnenbrille 🕶️",
    t2_l2: "Regen 🌧️", t2_r2: "Regenschirm ☂️",
    t2_l3: "Schnee ❄️", t2_r3: "Schal 🧣",
    t2_l4: "Wind 💨", t2_r4: "Jacke 🧥",
    t2_q: "Was ziehst du an, wenn es stark regnet?",
    t2_q_a: "Regenjacke", t2_q_b: "Badehose", t2_q_c: "T-Shirt", t2_q_d: "Sonnenbrille",

    // Topic 3
    t3_title: "Schule & Essen",
    t3_text: "Hast du deinen Rucksack gepackt? Zum Wortfeld 'Schule' gehören Stifte, Hefte und Bücher. Zum Wortfeld 'Essen' gehören Pausenbrot, Apfel und Wasser.",
    t3_b1: "Schule: Heft, Stift, Buch",
    t3_b2: "Essen: Apfel, Brot, Käse",
    t3_b3: "Wähle das Wort, das logisch in den Satz passt",
    t3_inst: "Welches Wort gehört in die Lücke?",
    t3_h1: "Womit schreibt man in der Schule?",
    t3_h2: "Man schreibt mit einem Stift. 'Apfel' oder 'Ball' machen keinen Sinn.",
    t3_gap_text: "In der Schule schreibe ich mit einem {gap}.",
    t3_opt_stift: "Stift", t3_opt_apfel: "Apfel", t3_opt_ball: "Ball",
    t3_q: "Welches Wort gehört zum Wortfeld 'Schule'?",
    t3_q_a: "das Heft", t3_q_b: "die Pizza", t3_q_c: "das Bein", t3_q_d: "der Hund",
  },
  en: {
    explorer_title: "Word Fields",
    t1_inst: "Sort the words into the correct word field!",
    t1_h1: "Is it an animal (Tier) or a body part (Körper)?",
    t1_h2: "Dog (Hund) is an animal. Arm is a body part.",
    t1_bucket_tiere: "Animals 🐾",
    t1_bucket_koerper: "Body 👀",

    t2_inst: "What fits the weather? Match the correct pairs!",
    t2_h1: "What do you need when it rains?",
    t2_h2: "Rain goes with umbrella (Regenschirm). Sun goes with sunglasses.",

    t3_inst: "Which word fits in the gap?",
    t3_h1: "What do you use to write at school?",
    t3_h2: "You write with a pen (Stift).",
  },
  hu: {
    explorer_title: "Szómezők",
    t1_inst: "Válogasd a szavakat a megfelelő szómezőbe!",
    t1_h1: "Állat (Tiere) vagy testrész (Körper)?",
    t1_h2: "A Hund (kutya) állat. Az Arm (kar) testrész.",
    t1_bucket_tiere: "Állatok 🐾",
    t1_bucket_koerper: "Test 👀",

    t2_inst: "Mi illik az időjáráshoz? Kösd össze a párokat!",
    t2_h1: "Mire van szükséged, ha esik?",
    t2_h2: "A Regen (eső) a Regenschirm-höz (esernyő) illik.",

    t3_inst: "Melyik szó illik a mondatba?",
    t3_h1: "Mivel szoktál írni az iskolában?",
    t3_h2: "Tollal (Stift) írunk. A 'Stift' a jó válasz.",
  },
  ro: {
    explorer_title: "Câmpuri lexicale",
    t1_inst: "Sortează cuvintele în câmpul lexical corect!",
    t1_h1: "Este un animal (Tiere) sau o parte a corpului (Körper)?",
    t1_h2: "Hund (câine) este un animal. Arm (braț) este o parte a corpului.",
    t1_bucket_tiere: "Animale 🐾",
    t1_bucket_koerper: "Corp 👀",

    t2_inst: "Ce se potrivește vremii? Leagă perechile potrivite!",
    t2_h1: "De ce ai nevoie când plouă?",
    t2_h2: "Regen (ploaia) merge cu Regenschirm (umbrela).",

    t3_inst: "Ce cuvânt se potrivește în spațiul liber?",
    t3_h1: "Cu ce scrii la școală?",
    t3_h2: "Scrii cu un stilou/pix (Stift).",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Kategorien (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "tiere", label: "t1_bucket_tiere" },
        { id: "koerper", label: "t1_bucket_koerper" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "tiere" },
        { text: "t1_item_arm", bucketId: "koerper" },
        { text: "t1_item_katze", bucketId: "tiere" },
        { text: "t1_item_bein", bucketId: "koerper" },
        { text: "t1_item_auge", bucketId: "koerper" },
        { text: "t1_item_maus", bucketId: "tiere" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // die Hand
    },
  },
  // ── Topic 2: Wetter & Kleidung (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // Sonne -> Sonnenbrille
        { left: "t2_l2", right: "t2_r2" }, // Regen -> Regenschirm
        { left: "t2_l3", right: "t2_r3" }, // Schnee -> Schal
        { left: "t2_l4", right: "t2_r4" }, // Wind -> Jacke
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Regenjacke
    },
  },
  // ── Topic 3: Logik im Kontext (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_stift", "t3_opt_apfel", "t3_opt_ball"],
      answer: "t3_opt_stift", // Stift
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // das Heft
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordFieldExplorerK2 = memo(function WordFieldExplorerK2({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_wordfield" color={color} lang={lang} onDone={onDone} />;
});

export default WordFieldExplorerK2;
