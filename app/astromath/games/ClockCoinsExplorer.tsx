"use client";
// ClockCoinsExplorer — Reading the clock, coins & comparing lengths (G1 i8)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Clock Face ─────────────────────────────────────────────────────────

const ClockSvg = memo(function ClockSvg({ hour = 3 }: { hour?: number }) {
  const hourAngle = (hour % 12) * 30; // 30 degrees per hour
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="clkG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#clkG)" rx="16" />
      {/* Clock body */}
      <circle cx="120" cy="60" r="40" fill="white" stroke="#F59E0B" strokeWidth="2.5" opacity="0.95" />
      {/* Hour markers */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
        const angle = (h * 30) * (Math.PI / 180);
        const x = 120 + 32 * Math.cos(angle - Math.PI / 2);
        const y = 60 + 32 * Math.sin(angle - Math.PI / 2);
        return (
          <text
            key={`hour-${h}`}
            x={x}
            y={y}
            fontSize="12"
            fontWeight="bold"
            fill="#1F2937"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {h === 0 ? 12 : h}
          </text>
        );
      })}
      {/* Minute hand (pointing to 12) */}
      <line
        x1="120"
        y1="60"
        x2="120"
        y2="28"
        stroke="#1F2937"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Hour hand (pointing to specified hour) */}
      <line
        x1="120"
        y1="60"
        x2={120 + 20 * Math.cos((hourAngle * Math.PI) / 180 - Math.PI / 2)}
        y2={60 + 20 * Math.sin((hourAngle * Math.PI) / 180 - Math.PI / 2)}
        stroke="#F59E0B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="120" cy="60" r="4" fill="#1F2937" />
      {/* Label */}
      <text x="120" y="128" fontSize="12" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
        {hour}:00
      </text>
    </svg>
  );
});

// ─── SVG: Coins ──────────────────────────────────────────────────────────────

const CoinsSvg = memo(function CoinsSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const coins = [
    { value: 5, color: "#F97316", x: 60, y: 45 },
    { value: 5, color: "#F97316", x: 120, y: 45 },
    { value: 2, color: "#FBBF24", x: 180, y: 45 },
    { value: 1, color: "#FCD34D", x: 90, y: 85 },
    { value: 1, color: "#FCD34D", x: 150, y: 85 },
  ];

  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="coinG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#coinG)" rx="16" />
      {/* Coins */}
      {coins.map((coin, i) => (
        <g key={`coin-${i}`} transform={`translate(${coin.x}, ${coin.y})`}>
          <circle cx="0" cy="0" r="13" fill={coin.color} opacity="0.85" stroke={coin.color} strokeWidth="1.5" />
          <circle cx="-4" cy="-4" r="3.5" fill="white" opacity="0.35" />
          <text x="0" y="4.5" fontSize="10" fontWeight="900" fill="white" textAnchor="middle" opacity="0.95">
            {coin.value}¢
          </text>
        </g>
      ))}
      {/* Total label */}
      <text x="120" y="128" fontSize="11" fontWeight="bold" fill="#D97706" textAnchor="middle">
        = 14¢ {t.svg_total}
      </text>
    </svg>
  );
});

// ─── SVG: Comparing Lengths ─────────────────────────────────────────────────

const CompareLengthsSvg = memo(function CompareLengthsSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="lenG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lenG)" rx="16" />
      {/* Pencil (long) */}
      <g transform="translate(30, 45)">
        <rect x="0" y="0" width="5" height="50" fill="#EC4899" rx="2" opacity="0.85" />
        <polygon points="2.5,-5 0,0 5,0" fill="#FCD34D" opacity="0.9" />
        <text x="5" y="60" fontSize="11" fontWeight="bold" fill="#EC4899" opacity="0.8">
          {t.svg_pencil}
        </text>
        <text x="5" y="75" fontSize="10" fontWeight="bold" fill="#EC4899" opacity="0.6">
          15 cm
        </text>
      </g>
      {/* Eraser (short) */}
      <g transform="translate(160, 65)">
        <rect x="0" y="0" width="8" height="20" fill="#3B82F6" rx="2" opacity="0.85" />
        <circle cx="4" cy="10" r="1.5" fill="rgba(0,0,0,0.2)" />
        <text x="8" y="35" fontSize="11" fontWeight="bold" fill="#3B82F6" opacity="0.8">
          {t.svg_eraser}
        </text>
        <text x="8" y="50" fontSize="10" fontWeight="bold" fill="#3B82F6" opacity="0.6">
          5 cm
        </text>
      </g>
      {/* Comparison arrow */}
      <text x="120" y="80" fontSize="18" fontWeight="bold" fill="#10B981" textAnchor="middle" opacity="0.6">
        ?
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Time & Money Explorer",
    // SVG labels
    svg_total: "total",
    svg_pencil: "Pencil",
    svg_eraser: "Eraser",
    // Topic 1: Reading the clock
    t1_title: "Reading the Clock",
    t1_text: "The SHORT hand shows the HOUR. When it points to a number, that's the hour! The LONG hand shows the minutes. When it points to 12, it's o'clock!",
    t1_b1: "Short hand = hour",
    t1_b2: "Long hand = minutes",
    t1_b3: "When both point up = o'clock",
    t1_inst: "Tap the number 3 on the number line — that's where 3 o'clock is!",
    t1_h1: "The short hand is pointing to which number?",
    t1_h2: "It's pointing to 3, so it's 3 o'clock!",
    t1_q: "What time is it when the short hand points to 7?",
    t1_q_3: "3 o'clock",
    t1_q_7: "7 o'clock",
    t1_q_11: "11 o'clock",
    t1_q_5: "5 o'clock",
    // Topic 2: Coins and money
    t2_title: "Counting Money",
    t2_text: "Euro coins have different values: 1¢, 2¢, 5¢, and 10¢. To count money, add up all the coin values. Start with the biggest coins first!",
    t2_b1: "Different coins have different values",
    t2_b2: "Add all the values together",
    t2_b3: "Start with the largest coins",
    t2_inst: "Combine 5¢ + 5¢ coins to make 10¢!",
    t2_h1: "How many 5¢ coins do you need?",
    t2_h2: "5 + 5 = 10 — combine them!",
    t2_q: "What is 5¢ + 2¢ + 1¢ + 1¢?",
    t2_q_8: "8¢",
    t2_q_9: "9¢",
    t2_q_10: "10¢",
    t2_q_7: "7¢",
    // Topic 3: Comparing lengths
    t3_title: "Comparing Lengths",
    t3_text: "Some objects are LONGER and some are SHORTER. We can measure with centimeters (cm). A pencil is usually longer than an eraser. Compare the numbers to see which is bigger!",
    t3_b1: "Longer = bigger number",
    t3_b2: "Shorter = smaller number",
    t3_b3: "Use numbers to compare",
    t3_inst: "Tap 15 on the number line — that's the pencil's length!",
    t3_h1: "Which is longer: 15 cm or 5 cm?",
    t3_h2: "15 is bigger, so the pencil is longer!",
    t3_q: "Which is longer: a pencil (15 cm) or an eraser (5 cm)?",
    t3_q_pencil: "Pencil",
    t3_q_eraser: "Eraser",
    t3_q_equal: "They are equal",
    t3_q_idk: "Can't tell",
  },
  de: {
    explorer_title: "Zeit & Geld Entdeckung",
    svg_total: "gesamt",
    svg_pencil: "Bleistift",
    svg_eraser: "Radierer",
    t1_title: "Uhr ablesen",
    t1_text: "Der KURZE Zeiger zeigt die STUNDE. Wenn er auf eine Zahl zeigt, ist das die Stunde! Der LANGE Zeiger zeigt die Minuten. Wenn er auf 12 zeigt, ist es Uhr!",
    t1_b1: "Kurzer Zeiger = Stunde",
    t1_b2: "Langer Zeiger = Minuten",
    t1_b3: "Beide oben = Uhr",
    t1_inst: "Tippe auf die Zahl 3 auf dem Zahlenstrahl — das ist 3 Uhr!",
    t1_h1: "Auf welche Zahl zeigt der kurze Zeiger?",
    t1_h2: "Er zeigt auf 3, also ist es 3 Uhr!",
    t1_q: "Wie spät ist es, wenn der kurze Zeiger auf 7 zeigt?",
    t1_q_3: "3 Uhr",
    t1_q_7: "7 Uhr",
    t1_q_11: "11 Uhr",
    t1_q_5: "5 Uhr",
    t2_title: "Geld zählen",
    t2_text: "Euro-Münzen haben verschiedene Werte: 1¢, 2¢, 5¢ und 10¢. Um Geld zu zählen, addiere alle Münzwerte. Beginne mit den größten Münzen!",
    t2_b1: "Verschiedene Münzen haben verschiedene Werte",
    t2_b2: "Addiere alle Werte zusammen",
    t2_b3: "Beginne mit den größten Münzen",
    t2_inst: "Kombiniere 5¢ + 5¢ Münzen zu 10¢!",
    t2_h1: "Wie viele 5¢-Münzen brauchst du?",
    t2_h2: "5 + 5 = 10 — kombiniere sie!",
    t2_q: "Was ist 5¢ + 2¢ + 1¢ + 1¢?",
    t2_q_8: "8¢",
    t2_q_9: "9¢",
    t2_q_10: "10¢",
    t2_q_7: "7¢",
    t3_title: "Längen vergleichen",
    t3_text: "Manche Gegenstände sind LÄNGER und manche KÜRZER. Wir können in Zentimetern (cm) messen. Ein Bleistift ist normalerweise länger als ein Radierer. Vergleiche die Zahlen!",
    t3_b1: "Länger = größere Zahl",
    t3_b2: "Kürzer = kleinere Zahl",
    t3_b3: "Nutze Zahlen zum Vergleichen",
    t3_inst: "Tippe auf 15 auf dem Zahlenstrahl — das ist die Länge des Bleistifts!",
    t3_h1: "Was ist länger: 15 cm oder 5 cm?",
    t3_h2: "15 ist größer, also ist der Bleistift länger!",
    t3_q: "Was ist länger: ein Bleistift (15 cm) oder ein Radierer (5 cm)?",
    t3_q_pencil: "Bleistift",
    t3_q_eraser: "Radierer",
    t3_q_equal: "Sie sind gleich lang",
    t3_q_idk: "Kann man nicht sagen",
  },
  hu: {
    explorer_title: "Idő & Pénz felfedezés",
    svg_total: "összesen",
    svg_pencil: "Ceruza",
    svg_eraser: "Radír",
    t1_title: "Az óra olvasása",
    t1_text: "A RÖVID mutató mutatja az ÓRÁT. Ha egy számra mutat, az a szám az óra! A HOSSZÚ mutató a perceket mutatja. Ha a 12-re mutat, egész óra van!",
    t1_b1: "Rövid mutató = óra",
    t1_b2: "Hosszú mutató = perc",
    t1_b3: "Mindkettő felfelé = egész óra",
    t1_inst: "Koppints a 3-as számra a számegyenesen — az 3 óra!",
    t1_h1: "Melyik számra mutat a rövid mutató?",
    t1_h2: "A 3-ra mutat, szóval 3 óra van!",
    t1_q: "Hány óra van, ha a rövid mutató a 7-re mutat?",
    t1_q_3: "3 óra",
    t1_q_7: "7 óra",
    t1_q_11: "11 óra",
    t1_q_5: "5 óra",
    t2_title: "Pénz számolása",
    t2_text: "Az euro érméinek különböző értéke van: 1¢, 2¢, 5¢ és 10¢. A pénz számolásához add össze az összes érme értékét. Kezdd a legnagyobb érméikkel!",
    t2_b1: "Különböző érméik különböző értékű",
    t2_b2: "Add össze az összes értéket",
    t2_b3: "Kezdd a legnagyobb érméikkel",
    t2_inst: "Kombinálj 5¢ + 5¢ érméket, hogy 10¢ legyen!",
    t2_h1: "Hány 5¢ érménre van szükséged?",
    t2_h2: "5 + 5 = 10 — kombináld őket!",
    t2_q: "Mennyi az 5¢ + 2¢ + 1¢ + 1¢?",
    t2_q_8: "8¢",
    t2_q_9: "9¢",
    t2_q_10: "10¢",
    t2_q_7: "7¢",
    t3_title: "Hosszúságok összehasonlítása",
    t3_text: "Egyes tárgyak HOSSZABBAK és némelyik RÖVIDEBB. Centiméterben (cm) tudjuk mérni. Egy ceruza általában hosszabb, mint egy radír. Hasonlítsd össze a számokat!",
    t3_b1: "Hosszabb = nagyobb szám",
    t3_b2: "Rövidebb = kisebb szám",
    t3_b3: "Használj számokat az összehasonlításhoz",
    t3_inst: "Koppints a 15-re a számegyenesen — az a ceruza hossza!",
    t3_h1: "Mi a hosszabb: 15 cm vagy 5 cm?",
    t3_h2: "15 nagyobb, szóval a ceruza hosszabb!",
    t3_q: "Mi a hosszabb: egy ceruza (15 cm) vagy egy radír (5 cm)?",
    t3_q_pencil: "Ceruza",
    t3_q_eraser: "Radír",
    t3_q_equal: "Egyforma hosszúak",
    t3_q_idk: "Nem tudom",
  },
  ro: {
    explorer_title: "Descoperire timp & bani",
    svg_total: "total",
    svg_pencil: "Creion",
    svg_eraser: "Radieră",
    t1_title: "Citirea orei",
    t1_text: "Acul SCURT arată ORA. Când señalează o cifră, aceea este ora! Acul LUNG arată minutele. Când señalează 12, este exact ora!",
    t1_b1: "Ac scurt = oră",
    t1_b2: "Ac lung = minute",
    t1_b3: "Amândoi sus = exact pe oră",
    t1_inst: "Atinge cifra 3 pe linia numerelor — aceea este 3 ore!",
    t1_h1: "La ce cifră señalează acul scurt?",
    t1_h2: "Señalează la 3, deci sunt 3 ore!",
    t1_q: "Cât este ceasul când acul scurt señalează la 7?",
    t1_q_3: "3 ore",
    t1_q_7: "7 ore",
    t1_q_11: "11 ore",
    t1_q_5: "5 ore",
    t2_title: "Numărarea banilor",
    t2_text: "Monedele euro au valori diferite: 1¢, 2¢, 5¢ și 10¢. Pentru a număra bani, adună valorile tuturor monedelor. Începe cu monedele mai mari!",
    t2_b1: "Monede diferite au valori diferite",
    t2_b2: "Adună toate valorile",
    t2_b3: "Începe cu monedele mai mari",
    t2_inst: "Combină monede de 5¢ + 5¢ pentru a face 10¢!",
    t2_h1: "Câte monede de 5¢ ai nevoie?",
    t2_h2: "5 + 5 = 10 — combină-le!",
    t2_q: "Cât este 5¢ + 2¢ + 1¢ + 1¢?",
    t2_q_8: "8¢",
    t2_q_9: "9¢",
    t2_q_10: "10¢",
    t2_q_7: "7¢",
    t3_title: "Compararea lungimilor",
    t3_text: "Unele obiecte sunt MAI LUNGI și altele sunt MAI SCURTE. Putem măsura în centimetri (cm). O creionul este de obicei mai lung decât un radieră. Compară numerele!",
    t3_b1: "Mai lung = număr mai mare",
    t3_b2: "Mai scurt = număr mai mic",
    t3_b3: "Folosește numere pentru a compara",
    t3_inst: "Atinge 15 pe linia numerelor — aceea este lungimea creionului!",
    t3_h1: "Ce este mai lung: 15 cm sau 5 cm?",
    t3_h2: "15 este mai mare, deci creionul este mai lung!",
    t3_q: "Ce este mai lung: o creion (15 cm) sau o radieră (5 cm)?",
    t3_q_pencil: "Creion",
    t3_q_eraser: "Radieră",
    t3_q_equal: "Sunt egale",
    t3_q_idk: "Nu pot spune",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Reading the clock
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <ClockSvg hour={3} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 1,
      max: 12,
      start: 1,
      target: 3,
      showJumps: true,
      jumpCount: 2,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_3", "t1_q_7", "t1_q_11", "t1_q_5"],
      answer: "t1_q_7",
    },
  },

  // Topic 2: Coins and money
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <CoinsSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [5, 5],
      answer: 10,
      blockIcon: "🪙",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_8", "t2_q_9", "t2_q_10", "t2_q_7"],
      answer: "t2_q_9",
    },
  },

  // Topic 3: Comparing lengths
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <CompareLengthsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 20,
      start: 0,
      target: 15,
      showJumps: false,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_pencil", "t3_q_eraser", "t3_q_equal", "t3_q_idk"],
      answer: "t3_q_pencil",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📏",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const ClockCoinsExplorer = memo(function ClockCoinsExplorer({
  color = "#FF9500",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_clockcoins" color={color} lang={lang} onDone={onDone} />;
});

export default ClockCoinsExplorer;
