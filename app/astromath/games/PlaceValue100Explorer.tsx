"use client";
// PlaceValue100Explorer — Place value (tens & ones) for Grade 2 (island i1)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Tens and Ones blocks ────────────────────────────────────────────────

const TensOnesSvg = memo(function TensOnesSvg({ tens = 3, ones = 4 }: { tens?: number; ones?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="pv100G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#pv100G)" rx="16" />
      {Array.from({ length: tens }, (_, i) => (
        <g key={i} transform={`translate(${16 + i * 22}, 18)`}>
          {Array.from({ length: 10 }, (_, j) => (
            <rect key={j} x="0" y={j * 9} width="16" height="8" rx="2"
              fill="#06B6D4" opacity="0.85" />
          ))}
        </g>
      ))}
      {Array.from({ length: ones }, (_, i) => (
        <rect key={i}
          x={16 + tens * 22 + 10 + (i % 5) * 17}
          y={18 + Math.floor(i / 5) * 17}
          width="14" height="14" rx="3"
          fill="#FFD700" opacity="0.85" />
      ))}
      <text x={16 + tens * 11} y="128" fontSize="10" fontWeight="800"
        fill="#06B6D4" textAnchor="middle" opacity="0.85">{tens}×10={tens*10}</text>
      <text x={220} y="80" fontSize="22" fontWeight="900"
        fill="rgba(255,255,255,0.9)" textAnchor="middle" dominantBaseline="middle">
        {tens * 10 + ones}
      </text>
    </svg>
  );
});

// ─── SVG: Number line 0-100 ───────────────────────────────────────────────────

const NumberLine100Svg = memo(function NumberLine100Svg({ highlight = 60 }: { highlight?: number }) {
  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="nl100G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#nl100G)" rx="16" />
      <line x1="15" y1="50" x2="225" y2="50"
        stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {ticks.map((n, i) => {
        const x = 15 + i * 21;
        const isHl = n === highlight;
        return (
          <g key={n}>
            <line x1={x} y1="43" x2={x} y2="57"
              stroke={isHl ? "#B44DFF" : "rgba(255,255,255,0.3)"}
              strokeWidth={isHl ? 2.5 : 1.5} />
            <text x={x} y="70" fontSize={isHl ? "10" : "8"} fontWeight={isHl ? "900" : "500"}
              fill={isHl ? "#B44DFF" : "rgba(255,255,255,0.5)"} textAnchor="middle">{n}</text>
            {isHl && <circle cx={x} cy="36" r="5" fill="#B44DFF" opacity="0.85" />}
          </g>
        );
      })}
    </svg>
  );
});

// ─── SVG: Comparison ──────────────────────────────────────────────────────────

const CompareSvg = memo(function CompareSvg({ a = 34, b = 57, lang = "en" }: { a?: number; b?: number; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const sym = a < b ? "<" : a > b ? ">" : "=";
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="cmp100G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#cmp100G)" rx="16" />
      <text x="60" y="68" fontSize="36" fontWeight="900"
        fill="#10B981" textAnchor="middle" dominantBaseline="middle">{a}</text>
      <text x="120" y="68" fontSize="30" fontWeight="900"
        fill="rgba(255,255,255,0.65)" textAnchor="middle" dominantBaseline="middle">{sym}</text>
      <text x="180" y="68" fontSize="36" fontWeight="900"
        fill="#F59E0B" textAnchor="middle" dominantBaseline="middle">{b}</text>
      <text x="60" y="100" fontSize="10" fill="#10B981" textAnchor="middle" opacity="0.7">
        {Math.floor(a/10)} {t.svg_tens} {a%10} {t.svg_ones}
      </text>
      <text x="180" y="100" fontSize="10" fill="#F59E0B" textAnchor="middle" opacity="0.7">
        {Math.floor(b/10)} {t.svg_tens} {b%10} {t.svg_ones}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ─────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Place Value Explorer",
    t1_title: "Tens and Ones",
    t1_text: "Every 2-digit number is made of TENS and ONES. 34 = 3 tens + 4 ones. The tens block is worth 10, each ones square is worth 1!",
    t1_b1: "Tens digit × 10 = tens value",
    t1_b2: "Ones digit × 1 = ones value",
    t1_b3: "34 = 30 + 4",
    t1_inst: "Build 34: put together 3 tens and 4 ones!",
    t1_h1: "3 blue bars = 3 tens = 30",
    t1_h2: "4 yellow squares = 4 ones → 30 + 4 = 34",
    t1_q: "Which number has 5 tens and 7 ones?",
    t1_q_57: "57",
    t1_q_75: "75",
    t1_q_50: "50",
    t1_q_507: "507",
    t2_title: "The Number Line to 100",
    t2_text: "On the number line to 100, numbers grow by 10s: 0, 10, 20 … 100. Each jump is 10 more. We use this to add and subtract tens quickly!",
    t2_b1: "Each big mark = 10 steps",
    t2_b2: "Jump right = adding tens",
    t2_b3: "Jump left = subtracting tens",
    t2_inst: "Start at 30 and jump 3 tens forward — where do you land?",
    t2_h1: "3 jumps of 10 from 30 = 30 + 30",
    t2_h2: "30 + 30 = 60 — tap 60!",
    t2_q: "What is 50 + 20?",
    t2_q_70: "70",
    t2_q_52: "52",
    t2_q_72: "72",
    t2_q_30: "30",
    t3_title: "Comparing Numbers to 100",
    t3_text: "To compare two 2-digit numbers: first look at the TENS digit. The bigger tens digit = bigger number! If tens are equal, then compare the ONES digit.",
    t3_b1: "Compare tens digit first",
    t3_b2: "Equal tens? Compare ones",
    t3_b3: "Use < (less) or > (greater)",
    t3_inst: "Tap the LARGER number: 47 or 39?",
    t3_h1: "Tens: 4 tens vs 3 tens",
    t3_h2: "4 tens > 3 tens → 47 > 39 — tap 47!",
    t3_q: "Which sign is correct? 65 __ 72",
    t3_q_lt: "< (less than)",
    t3_q_gt: "> (greater than)",
    t3_q_eq: "= (equal)",
    t3_q_ne: "≠ (not equal)",
    svg_tens: "tens",
    svg_ones: "ones",
  },
  de: {
    explorer_title: "Stellenwerte entdecken",
    t1_title: "Zehner und Einer",
    t1_text: "Jede zweistellige Zahl besteht aus ZEHNERN und EINERN. 34 = 3 Zehner + 4 Einer. Ein Zehnerblock ist 10 wert, jedes Einerkästchen ist 1 wert!",
    t1_b1: "Zehnerziffer × 10 = Zehnerwert",
    t1_b2: "Einerziffer × 1 = Einerwert",
    t1_b3: "34 = 30 + 4",
    t1_inst: "Baue die 34: lege 3 Zehner und 4 Einer zusammen!",
    t1_h1: "3 blaue Stäbe = 3 Zehner = 30",
    t1_h2: "4 gelbe Würfel = 4 Einer → 30 + 4 = 34",
    t1_q: "Welche Zahl hat 5 Zehner und 7 Einer?",
    t1_q_57: "57",
    t1_q_75: "75",
    t1_q_50: "50",
    t1_q_507: "507",
    t2_title: "Der Zahlenstrahl bis 100",
    t2_text: "Auf dem Zahlenstrahl bis 100 wachsen die Zahlen in Zehnerschritten: 0, 10, 20 … 100. Jeder Sprung ist 10 mehr. So addieren und subtrahieren wir Zehner schnell!",
    t2_b1: "Jeder große Strich = 10 Schritte",
    t2_b2: "Nach rechts = addieren",
    t2_b3: "Nach links = subtrahieren",
    t2_inst: "Starte bei 30 und springe 3 Zehner vor — wo landest du?",
    t2_h1: "3 Zehnersprünge von 30 = 30 + 30",
    t2_h2: "30 + 30 = 60 — tippe auf 60!",
    t2_q: "Was ist 50 + 20?",
    t2_q_70: "70",
    t2_q_52: "52",
    t2_q_72: "72",
    t2_q_30: "30",
    t3_title: "Zahlen bis 100 vergleichen",
    t3_text: "Um zwei zweistellige Zahlen zu vergleichen: zuerst die ZEHNERZIFFER anschauen. Die größere Zehnerziffer = die größere Zahl! Sind Zehner gleich, dann die EINER vergleichen.",
    t3_b1: "Zuerst Zehnerziffer vergleichen",
    t3_b2: "Gleiche Zehner? Dann Einer vergleichen",
    t3_b3: "< (kleiner) oder > (größer)",
    t3_inst: "Tippe auf die GRÖSSERE Zahl: 47 oder 39?",
    t3_h1: "Zehner: 4 Zehner vs. 3 Zehner",
    t3_h2: "4 Zehner > 3 Zehner → 47 > 39 — tippe auf 47!",
    t3_q: "Welches Zeichen passt? 65 __ 72",
    t3_q_lt: "< (kleiner als)",
    t3_q_gt: "> (größer als)",
    t3_q_eq: "= (gleich)",
    t3_q_ne: "≠ (ungleich)",
    svg_tens: "Z",
    svg_ones: "E",
  },
  hu: {
    explorer_title: "Helyiérték felfedezés",
    t1_title: "Tízesek és egyesek",
    t1_text: "Minden kétjegyű szám TÍZESEKBŐL és EGYESEKBŐL áll. 34 = 3 tízes + 4 egyes. Egy tízes rúd 10-et ér, minden egyes kocka 1-et!",
    t1_b1: "Tízes számjegy × 10 = tízes érték",
    t1_b2: "Egyes számjegy × 1 = egyes érték",
    t1_b3: "34 = 30 + 4",
    t1_inst: "Rakd össze a 34-et: tegyél össze 3 tízest és 4 egyest!",
    t1_h1: "3 kék rúd = 3 tízes = 30",
    t1_h2: "4 sárga kocka = 4 egyes → 30 + 4 = 34",
    t1_q: "Melyik szám tartalmaz 5 tízest és 7 egyest?",
    t1_q_57: "57",
    t1_q_75: "75",
    t1_q_50: "50",
    t1_q_507: "507",
    t2_title: "A 100-as számegyenes",
    t2_text: "A 100-as számegyenesen a számok tízenként nőnek: 0, 10, 20 … 100. Minden ugrás 10-zel több. Így adjuk össze és vonjuk ki a tízeseket gyorsan!",
    t2_b1: "Minden nagy osztás = 10 lépés",
    t2_b2: "Jobbra ugrani = összeadás",
    t2_b3: "Balra ugrani = kivonás",
    t2_inst: "Indulj a 30-tól és ugorj 3 tízest előre — hol érsz véget?",
    t2_h1: "3 tízes ugrás 30-tól = 30 + 30",
    t2_h2: "30 + 30 = 60 — koppints a 60-ra!",
    t2_q: "Mennyi 50 + 20?",
    t2_q_70: "70",
    t2_q_52: "52",
    t2_q_72: "72",
    t2_q_30: "30",
    t3_title: "Számok összehasonlítása 100-ig",
    t3_text: "Két kétjegyű szám összehasonlításához: először a TÍZES számjegyet nézd. A nagyobb tízes = a nagyobb szám! Ha a tízesek egyenlők, az EGYEST hasonlítsd.",
    t3_b1: "Először a tízes számjegyet hasonlítsd",
    t3_b2: "Egyenlő tízesek? Akkor az egyeseket",
    t3_b3: "< (kisebb) vagy > (nagyobb)",
    t3_inst: "Koppints a NAGYOBB számra: 47 vagy 39?",
    t3_h1: "Tízesek: 4 tízes vs. 3 tízes",
    t3_h2: "4 tízes > 3 tízes → 47 > 39 — koppints a 47-re!",
    t3_q: "Melyik jel helyes? 65 __ 72",
    t3_q_lt: "< (kisebb)",
    t3_q_gt: "> (nagyobb)",
    t3_q_eq: "= (egyenlő)",
    t3_q_ne: "≠ (nem egyenlő)",
    svg_tens: "tízes",
    svg_ones: "egyes",
  },
  ro: {
    explorer_title: "Explorare valori poziționale",
    t1_title: "Zeci și unități",
    t1_text: "Fiecare număr de 2 cifre este format din ZECI și UNITĂȚI. 34 = 3 zeci + 4 unități. Un baton de zeci valorează 10, fiecare cub de unități valorează 1!",
    t1_b1: "Cifra zecilor × 10 = valoarea zecilor",
    t1_b2: "Cifra unităților × 1 = valoarea unităților",
    t1_b3: "34 = 30 + 4",
    t1_inst: "Construiește 34: combină 3 zeci și 4 unități!",
    t1_h1: "3 bare albastre = 3 zeci = 30",
    t1_h2: "4 cuburi galbene = 4 unități → 30 + 4 = 34",
    t1_q: "Care număr are 5 zeci și 7 unități?",
    t1_q_57: "57",
    t1_q_75: "75",
    t1_q_50: "50",
    t1_q_507: "507",
    t2_title: "Dreapta numerelor până la 100",
    t2_text: "Pe dreapta numerelor, numerele cresc din 10 în 10: 0, 10, 20 … 100. Fiecare salt este cu 10 mai mare. Astfel adunăm și scădem zecile rapid!",
    t2_b1: "Fiecare semn mare = 10 pași",
    t2_b2: "Salt la dreapta = adunare",
    t2_b3: "Salt la stânga = scădere",
    t2_inst: "Pornește de la 30 și sari 3 zeci înainte — unde ajungi?",
    t2_h1: "3 salturi de 10 de la 30 = 30 + 30",
    t2_h2: "30 + 30 = 60 — atinge 60!",
    t2_q: "Cât este 50 + 20?",
    t2_q_70: "70",
    t2_q_52: "52",
    t2_q_72: "72",
    t2_q_30: "30",
    t3_title: "Compararea numerelor până la 100",
    t3_text: "Pentru a compara două numere de 2 cifre: privești mai întâi cifra ZECILOR. Cifra zecilor mai mare = numărul mai mare! Zeci egale? Compară UNITĂȚILE.",
    t3_b1: "Compară mai întâi cifra zecilor",
    t3_b2: "Zeci egale? Compară unitățile",
    t3_b3: "< (mai mic) sau > (mai mare)",
    t3_inst: "Atinge numărul MAI MARE: 47 sau 39?",
    t3_h1: "Zeci: 4 zeci față de 3 zeci",
    t3_h2: "4 zeci > 3 zeci → 47 > 39 — atinge 47!",
    t3_q: "Care semn este corect? 65 __ 72",
    t3_q_lt: "< (mai mic)",
    t3_q_gt: "> (mai mare)",
    t3_q_eq: "= (egal)",
    t3_q_ne: "≠ (diferit)",
    svg_tens: "zeci",
    svg_ones: "unit.",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <TensOnesSvg tens={3} ones={4} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "place-value",
      groups: [3, 4],
      answer: 34,
      tens: 3,
      ones: 4,
      blockIcon: "🟦",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_57", "t1_q_75", "t1_q_50", "t1_q_507"],
      answer: "t1_q_57",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <NumberLine100Svg highlight={60} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 100,
      step: 10,
      start: 30,
      target: 60,
      showJumps: true,
      jumpCount: 3,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_52", "t2_q_70", "t2_q_72", "t2_q_30"],
      answer: "t2_q_70",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <CompareSvg a={34} b={57} lang={lang as string} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 35,
      max: 50,
      step: 1,
      start: 39,
      target: 47,
      showJumps: false,
      jumpCount: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_lt", "t3_q_gt", "t3_q_eq", "t3_q_ne"],
      answer: "t3_q_lt",
    },
  },
];

// ─── Explorer definition ──────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "💯",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const PlaceValue100Explorer = memo(function PlaceValue100Explorer({
  color = "#4ECDC4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_placevalue100" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValue100Explorer;
