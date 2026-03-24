"use client";
// SyllableExplorerK1 — Island i2: Silben & Laute (Syllables & Sounds)
// Topics: 1) Syllables (Clapping)  2) Diphthongs (au, ei, eu)  3) sp/st sounds

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="sylGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#sylGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" fontWeight="bold" fill="#2563EB" textAnchor="middle">Son</text>
        <text x="0" y="-10" fontSize="24" fontWeight="bold" fill="#93C5FD" textAnchor="middle">-</text>
        <text x="50" y="-10" fontSize="24" fontWeight="bold" fill="#2563EB" textAnchor="middle">ne</text>
        <text x="-50" y="25" fontSize="20" textAnchor="middle">👏</text>
        <text x="50" y="25" fontSize="20" textAnchor="middle">👏</text>
        <text x="0" y="45" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">= 2 ✂️</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <g transform="translate(-60, 0)">
          <circle cx="0" cy="0" r="25" fill="#FDE68A" />
          <text x="0" y="6" fontSize="20" fontWeight="900" fill="#D97706" textAnchor="middle">au</text>
          <text x="0" y="-30" fontSize="14" textAnchor="middle">🐭</text>
        </g>
        <g transform="translate(0, 0)">
          <circle cx="0" cy="0" r="25" fill="#FECACA" />
          <text x="0" y="6" fontSize="20" fontWeight="900" fill="#DC2626" textAnchor="middle">ei</text>
          <text x="0" y="-30" fontSize="14" textAnchor="middle">🍦</text>
        </g>
        <g transform="translate(60, 0)">
          <circle cx="0" cy="0" r="25" fill="#D1FAE5" />
          <text x="0" y="6" fontSize="20" fontWeight="900" fill="#059669" textAnchor="middle">eu</text>
          <text x="0" y="-30" fontSize="14" textAnchor="middle">🦉</text>
        </g>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="sylGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#sylGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-5" fontSize="28" fontWeight="black" fill="#7C3AED" textAnchor="middle">Sp</text>
        <text x="-40" y="20" fontSize="12" fill="#8B5CF6" textAnchor="middle">"Schp"</text>
        
        <text x="40" y="-5" fontSize="28" fontWeight="black" fill="#7C3AED" textAnchor="middle">St</text>
        <text x="40" y="20" fontSize="12" fill="#8B5CF6" textAnchor="middle">"Scht"</text>
        
        <line x1="0" y1="-30" x2="0" y2="30" stroke="#C4B5FD" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Silben & Laute",
    // Topic 1
    t1_title: "Silben klatschen",
    t1_text: "Jedes Wort besteht aus Silben. Wir können sie klatschen! 'Hund' hat einen Klatscher (1 Silbe). 'Son-ne' hat zwei Klatscher (2 Silben).",
    t1_b1: "Hund = 1 Klatscher 👏",
    t1_b2: "Son-ne = 2 Klatscher 👏👏",
    t1_b3: "Ba-na-ne = 3 Klatscher 👏👏👏",
    t1_inst: "Sortiere die Wörter nach Silben (1 oder 2 Klatscher)!",
    t1_h1: "Sprich das Wort laut und klatsche mit.",
    t1_h2: "Maus = 1, Auto (Au-to) = 2.",
    t1_bucket_1: "1 Silbe 👏",
    t1_bucket_2: "2 Silben 👏👏",
    t1_item_hund: "Hund", t1_item_maus: "Maus",
    t1_item_sonne: "Sonne", t1_item_auto: "Auto", t1_item_katze: "Katze",
    t1_q: "Wie viele Silben hat das Wort 'Banane'?",
    t1_q_a: "3", t1_q_b: "2", t1_q_c: "1", t1_q_d: "4",

    // Topic 2
    t2_title: "Besondere Laute (au, ei, eu)",
    t2_text: "Wenn zwei Vokale zusammenstehen, machen sie manchmal einen neuen Ton! 'A' und 'u' wird zu 'au' (wie Aua!). 'E' und 'i' wird zu 'ei' (wie Eis).",
    t2_b1: "a + u = au (Maus)",
    t2_b2: "e + i = ei (Eis)",
    t2_b3: "e + u = eu (Eule)",
    t2_inst: "Welcher Laut fehlt? Verbinde die Paare!",
    t2_h1: "Schau dir das Wort an: M_s braucht 'au' für Maus.",
    t2_h2: "_s braucht 'ei' für Eis.",
    t2_l1: "M__s 🐭", t2_r1: "au",
    t2_l2: "__s 🍦", t2_r2: "ei",
    t2_l3: "__le 🦉", t2_r3: "eu",
    t2_q: "Welche zwei Buchstaben hörst du im Wort 'Eis'?",
    t2_q_a: "ei", t2_q_b: "ie", t2_q_c: "au", t2_q_d: "eu",

    // Topic 3
    t3_title: "Sp und St am Anfang",
    t3_text: "Wenn ein Wort mit 'Sp' oder 'St' beginnt, sprechen wir es wie 'Schp' oder 'Scht'. Zum Beispiel: Spielen, Stern, Stein.",
    t3_b1: "St klingt wie Scht (Stern)",
    t3_b2: "Sp klingt wie Schp (Spinne)",
    t3_b3: "Nur am Wortanfang!",
    t3_inst: "Finde die zwei Wörter, die mit Sp oder St beginnen!",
    t3_h1: "Suche nach Wörtern, die mit S und p oder S und t anfangen.",
    t3_h2: "Die Wörter sind 'Spinne' und 'Stern'.",
    t3_w1: "Die", t3_w2: "Spinne", t3_w3: "sitzt", t3_w4: "am", t3_w5: "Stern",
    t3_q: "Wie sprechen wir 'St' im Wort 'Stern' aus?",
    t3_q_a: "Scht", t3_q_b: "S-t", t3_q_c: "Z", t3_q_d: "Sch",
  },
  en: {
    explorer_title: "Syllables & Sounds",
    t1_title: "Clapping Syllables",
    t1_text: "Every word is made of syllables. We can clap them! 'Hund' gets 1 clap. 'Son-ne' gets 2 claps.",
    t1_b1: "Hund = 1 clap 👏",
    t1_b2: "Son-ne = 2 claps 👏👏",
    t1_b3: "Ba-na-ne = 3 claps 👏👏👏",
    t1_inst: "Sort the words by syllables (1 or 2 claps)!",
    t1_h1: "Say the word out loud and clap along.",
    t1_h2: "Maus = 1, Auto (Au-to) = 2.",
    t1_bucket_1: "1 Syllable 👏",
    t1_bucket_2: "2 Syllables 👏👏",
    t1_item_hund: "Hund", t1_item_maus: "Maus",
    t1_item_sonne: "Sonne", t1_item_auto: "Auto", t1_item_katze: "Katze",
    t1_q: "How many syllables does the word 'Banane' have?",
    t1_q_a: "3", t1_q_b: "2", t1_q_c: "1", t1_q_d: "4",

    t2_title: "Special Sounds (au, ei, eu)",
    t2_text: "When two vowels stand together, they sometimes make a new sound! 'A' and 'u' make 'au'. 'E' and 'i' make 'ei'.",
    t2_b1: "a + u = au (Maus)",
    t2_b2: "e + i = ei (Eis)",
    t2_b3: "e + u = eu (Eule)",
    t2_inst: "Which sound is missing? Match the pairs!",
    t2_h1: "Look at the word: M_s needs 'au' for Maus.",
    t2_h2: "_s needs 'ei' for Eis.",
    t2_l1: "M__s 🐭", t2_r1: "au",
    t2_l2: "__s 🍦", t2_r2: "ei",
    t2_l3: "__le 🦉", t2_r3: "eu",
    t2_q: "Which two letters do you hear in the word 'Eis'?",
    t2_q_a: "ei", t2_q_b: "ie", t2_q_c: "au", t2_q_d: "eu",

    t3_title: "Sp and St sounds",
    t3_text: "If a German word starts with 'Sp' or 'St', we pronounce it like 'Schp' or 'Scht'. For example: Spielen, Stern.",
    t3_b1: "St sounds like Scht (Stern)",
    t3_b2: "Sp sounds like Schp (Spinne)",
    t3_b3: "Only at the beginning of words!",
    t3_inst: "Find the two words that start with Sp or St!",
    t3_h1: "Look for words starting with S-p or S-t.",
    t3_h2: "The words are 'Spinne' and 'Stern'.",
    t3_w1: "Die", t3_w2: "Spinne", t3_w3: "sitzt", t3_w4: "am", t3_w5: "Stern",
    t3_q: "How do we pronounce 'St' in the word 'Stern'?",
    t3_q_a: "Scht", t3_q_b: "S-t", t3_q_c: "Z", t3_q_d: "Sch",
  },
  hu: {
    explorer_title: "Szótagok és Hangok",
    t1_title: "Szótagolás tapssal",
    t1_text: "Minden szó szótagokból áll. El tudjuk őket tapsolni! A 'Hund' (kutya) 1 taps. A 'Son-ne' (nap) 2 taps.",
    t1_b1: "Hund = 1 taps 👏",
    t1_b2: "Son-ne = 2 taps 👏👏",
    t1_b3: "Ba-na-ne = 3 taps 👏👏👏",
    t1_inst: "Válogasd szét a szavakat szótagok szerint (1 vagy 2 taps)!",
    t1_h1: "Mondd ki hangosan a szót és tapsolj hozzá.",
    t1_h2: "Maus = 1, Auto (Au-to) = 2.",
    t1_bucket_1: "1 Szótag 👏",
    t1_bucket_2: "2 Szótag 👏👏",
    t1_item_hund: "Hund", t1_item_maus: "Maus",
    t1_item_sonne: "Sonne", t1_item_auto: "Auto", t1_item_katze: "Katze",
    t1_q: "Hány szótagból áll a 'Banane' szó?",
    t1_q_a: "3", t1_q_b: "2", t1_q_c: "1", t1_q_d: "4",

    t2_title: "Kettőshangzók (au, ei, eu)",
    t2_text: "Ha két magánhangzó egymás mellett áll a németben, gyakran új hangot adnak ki! Az 'A' és 'u' 'au'-vá olvad. Az 'E' és 'i' pedig 'ei'-nek (ájn-nak) hangzik.",
    t2_b1: "a + u = au (Maus - egér)",
    t2_b2: "e + i = ei (Eis - fagyi)",
    t2_b3: "e + u = eu (Eule - bagoly)",
    t2_inst: "Melyik hang hiányzik? Párosítsd össze őket!",
    t2_h1: "Nézd meg a szót: M_s-be az 'au' kell (Maus).",
    t2_h2: "A _s-be pedig 'ei' kell (Eis).",
    t2_l1: "M__s 🐭", t2_r1: "au",
    t2_l2: "__s 🍦", t2_r2: "ei",
    t2_l3: "__le 🦉", t2_r3: "eu",
    t2_q: "Milyen betűket írunk le, ha az 'Eis' szót hallod?",
    t2_q_a: "ei", t2_q_b: "ie", t2_q_c: "au", t2_q_d: "eu",

    t3_title: "Sp és St szókezdés",
    t3_text: "Ha egy német szó 'Sp'-vel vagy 'St'-vel kezdődik, azt mindig 'S' betűvel (Schp, Scht) ejtjük! Például: Spielen (játszani), Stern (csillag).",
    t3_b1: "St kiejtése Scht (Stern)",
    t3_b2: "Sp kiejtése Schp (Spinne)",
    t3_b3: "Ez a szabály csak a szó elején érvényes!",
    t3_inst: "Keresd meg azt a két szót a mondatban, ami Sp-vel vagy St-vel kezdődik!",
    t3_h1: "Keresd azokat, amik nagy S-sel kezdődnek.",
    t3_h2: "A két szó: 'Spinne' (pók) és 'Stern' (csillag).",
    t3_w1: "Die", t3_w2: "Spinne", t3_w3: "sitzt", t3_w4: "am", t3_w5: "Stern",
    t3_q: "Hogyan ejtjük az 'St'-t a 'Stern' szó elején?",
    t3_q_a: "Scht (S-t)", t3_q_b: "S-z-t", t3_q_c: "Z", t3_q_d: "Sch",
  },
  ro: {
    explorer_title: "Silabe și Sunete",
    t1_title: "Batem din palme silabele",
    t1_text: "Fiecare cuvânt este format din silabe. Putem să batem din palme! 'Hund' are 1 bătaie. 'Son-ne' are 2 bătăi.",
    t1_b1: "Hund = 1 silabă 👏",
    t1_b2: "Son-ne = 2 silabe 👏👏",
    t1_b3: "Ba-na-ne = 3 silabe 👏👏👏",
    t1_inst: "Sortează cuvintele după silabe (1 sau 2 bătăi)!",
    t1_h1: "Rostește cuvântul cu voce tare și bate din palme.",
    t1_h2: "Maus = 1, Auto (Au-to) = 2.",
    t1_bucket_1: "1 Silabă 👏",
    t1_bucket_2: "2 Silabe 👏👏",
    t1_item_hund: "Hund", t1_item_maus: "Maus",
    t1_item_sonne: "Sonne", t1_item_auto: "Auto", t1_item_katze: "Katze",
    t1_q: "Câte silabe are cuvântul 'Banane'?",
    t1_q_a: "3", t1_q_b: "2", t1_q_c: "1", t1_q_d: "4",

    t2_title: "Diftongi (au, ei, eu)",
    t2_text: "Când două vocale stau împreună, uneori formează un sunet nou! 'A' și 'u' devin 'au'. 'E' și 'i' devin 'ei'.",
    t2_b1: "a + u = au (Maus)",
    t2_b2: "e + i = ei (Eis)",
    t2_b3: "e + u = eu (Eule)",
    t2_inst: "Care sunet lipsește? Potrivește perechile!",
    t2_h1: "Privește cuvântul: M_s are nevoie de 'au' pentru Maus.",
    t2_h2: "_s are nevoie de 'ei' pentru Eis.",
    t2_l1: "M__s 🐭", t2_r1: "au",
    t2_l2: "__s 🍦", t2_r2: "ei",
    t2_l3: "__le 🦉", t2_r3: "eu",
    t2_q: "Ce litere auzi în cuvântul 'Eis'?",
    t2_q_a: "ei", t2_q_b: "ie", t2_q_c: "au", t2_q_d: "eu",

    t3_title: "Sunetele Sp și St",
    t3_text: "Dacă un cuvânt german începe cu 'Sp' sau 'St', îl pronunțăm ca 'Șp' sau 'Șt'. Exemplu: Spielen, Stern.",
    t3_b1: "St sună ca Șt (Stern)",
    t3_b2: "Sp sună ca Șp (Spinne)",
    t3_b3: "Doar la începutul cuvântului!",
    t3_inst: "Găsește cele două cuvinte care încep cu Sp sau St!",
    t3_h1: "Caută cuvintele care încep cu S-p sau S-t.",
    t3_h2: "Cuvintele sunt 'Spinne' și 'Stern'.",
    t3_w1: "Die", t3_w2: "Spinne", t3_w3: "sitzt", t3_w4: "am", t3_w5: "Stern",
    t3_q: "Cum pronunțăm 'St' în cuvântul 'Stern'?",
    t3_q_a: "Șt", t3_q_b: "S-t", t3_q_c: "Z", t3_q_d: "Ș",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Syllables (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "1_silbe", label: "t1_bucket_1" },
        { id: "2_silben", label: "t1_bucket_2" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "1_silbe" },
        { text: "t1_item_sonne", bucketId: "2_silben" },
        { text: "t1_item_maus", bucketId: "1_silbe" },
        { text: "t1_item_katze", bucketId: "2_silben" },
        { text: "t1_item_auto", bucketId: "2_silben" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // 3
    },
  },
  // ── Topic 2: Diphthongs (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // ei
    },
  },
  // ── Topic 3: Sp and St starting sounds (highlight-text) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"], // Die Spinne sitzt am Stern
      correctIndices: [1, 4], // Spinne, Stern
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Scht
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "👏",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SyllableExplorerK1 = memo(function SyllableExplorerK1({
  color = "#3B82F6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_syllable" color={color} lang={lang} onDone={onDone} />;
});

export default SyllableExplorerK1;
