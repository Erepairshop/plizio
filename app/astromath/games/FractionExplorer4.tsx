"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const CircleFractionSvg = memo(function CircleFractionSvg({ numerator = 1, denominator = 2 }: { numerator?: number; denominator?: number }) {
  const angles = Array.from({ length: denominator }, (_, i) => ({
    start: (360 / denominator) * i,
    end: (360 / denominator) * (i + 1),
    filled: i < numerator,
  }));
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="circG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFB3D9" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#circG)" rx="16" />
      {angles.map((angle, i) => {
        const rad1 = ((angle.start - 90) * Math.PI) / 180;
        const rad2 = ((angle.end - 90) * Math.PI) / 180;
        const x1 = 120 + 40 * Math.cos(rad1);
        const y1 = 75 + 40 * Math.sin(rad1);
        const x2 = 120 + 40 * Math.cos(rad2);
        const y2 = 75 + 40 * Math.sin(rad2);
        const largeArc = angle.end - angle.start > 180 ? 1 : 0;
        const d = `M 120 75 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
        return (
          <path key={i} d={d} fill={angle.filled ? "#FF6B9D" : "rgba(255,255,255,0.1)"} stroke="rgba(255,255,255,0.3)" strokeWidth="1" opacity={angle.filled ? 0.8 : 0.4} />
        );
      })}
      <circle cx="120" cy="75" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <text x="120" y="130" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {numerator}/{denominator}
      </text>
      <text x="120" y="150" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ({numerator} shaded, {denominator} total)
      </text>
    </svg>
  );
});

const BarFractionSvg = memo(function BarFractionSvg({ numerator = 2, denominator = 4 }: { numerator?: number; denominator?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="barG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#barG)" rx="16" />
      <g transform="translate(30, 50)">
        {Array.from({ length: denominator }, (_, i) => (
          <rect
            key={i}
            x={i * 35}
            y="0"
            width="32"
            height="32"
            fill={i < numerator ? "#4ECDC4" : "rgba(255,255,255,0.1)"}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            opacity={i < numerator ? 0.8 : 0.4}
            rx="4"
          />
        ))}
      </g>
      <text x="120" y="130" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {numerator}/{denominator}
      </text>
      <text x="120" y="150" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ({numerator} shaded parts)
      </text>
    </svg>
  );
});

const CompareFractionsSvg = memo(function CompareFractionsSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="compG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFE66D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#compG)" rx="16" />
      <g transform="translate(20, 30)">
        <text x="45" y="0" fontSize="11" fontWeight="bold" fill="#FFD700">1/4</text>
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={i} x={i * 20} y="10" width="18" height="20" fill={i < 1 ? "#FFD700" : "rgba(255,255,255,0.1)"} stroke="rgba(255,255,255,0.3)" strokeWidth="1" opacity={i < 1 ? 0.8 : 0.4} rx="2" />
        ))}
      </g>
      <g transform="translate(140, 30)">
        <text x="45" y="0" fontSize="11" fontWeight="bold" fill="#FF6B6B">2/4</text>
        {Array.from({ length: 4 }, (_, i) => (
          <rect key={i} x={i * 20} y="10" width="18" height="20" fill={i < 2 ? "#FF6B6B" : "rgba(255,255,255,0.1)"} stroke="rgba(255,255,255,0.3)" strokeWidth="1" opacity={i < 2 ? 0.8 : 0.4} rx="2" />
        ))}
      </g>
      <text x="120" y="110" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        2/4 is bigger than 1/4
      </text>
      <text x="120" y="130" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        More shaded parts = larger fraction
      </text>
      <text x="120" y="150" fontSize="11" fontWeight="bold" fill="#4ECDC4" textAnchor="middle">
        2/4 {">"}  1/4
      </text>
    </svg>
  );
});

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Fraction Explorer",
    t1_title: "Equal Parts of a Whole",
    t1_text: "A fraction shows equal parts of a whole. If we cut a circle into 2 equal parts and color 1, that is 1/2. The bottom number (denominator) tells how many equal parts. The top number (numerator) tells how many colored.",
    t1_b1: "A whole is divided into equal parts",
    t1_b2: "The denominator is the total parts",
    t1_b3: "The numerator is the shaded parts",
    t1_q: "If a circle is cut into 4 equal parts and 3 are shaded, what is the fraction?",
    t1_q_1_4: "1/4",
    t1_q_2_4: "2/4",
    t1_q_3_4: "3/4",
    t1_q_4_4: "4/4",
    t2_title: "Naming Fractions",
    t2_text: "Different shapes can show fractions. A bar divided into 4 equal parts with 2 shaded is 2/4. A circle divided into 8 equal parts with 5 shaded is 5/8. The shape doesn't matter—the fraction just shows parts of a whole.",
    t2_b1: "Count the total number of parts",
    t2_b2: "Count how many parts are shaded",
    t2_b3: "Write numerator over denominator",
    t2_q: "A rectangle is divided into 8 equal parts, and 6 are shaded. What is the fraction?",
    t2_q_2_8: "2/8",
    t2_q_4_8: "4/8",
    t2_q_6_8: "6/8",
    t2_q_7_8: "7/8",
    t3_title: "Comparing Fractions",
    t3_text: "We can compare fractions by looking at how many parts are shaded. If 2/4 is shaded and 1/4 is shaded, 2/4 is bigger because more parts are shaded. We write: 2/4 > 1/4.",
    t3_b1: "More shaded parts means a larger fraction",
    t3_b2: "Fewer shaded parts means a smaller fraction",
    t3_b3: "Compare the numerators when denominators are the same",
    t3_q: "Which fraction is larger: 3/8 or 5/8?",
    t3_q_2_8: "2/8",
    t3_q_3_8: "3/8",
    t3_q_5_8: "5/8",
    t3_q_6_8: "6/8",
  },
  de: {
    explorer_title: "Bruch-Entdecker",
    t1_title: "Gleiche Teile eines Ganzen",
    t1_text: "Ein Bruch zeigt gleiche Teile eines Ganzen. Wenn wir einen Kreis in 2 gleiche Teile teilen und 1 färben, ist das 1/2. Die untere Zahl (Nenner) zeigt, wie viele Teile. Die obere Zahl (Zähler) zeigt, wie viele gefärbt sind.",
    t1_b1: "Ein Ganzes wird in gleiche Teile geteilt",
    t1_b2: "Der Nenner ist die Gesamtzahl der Teile",
    t1_b3: "Der Zähler ist die Anzahl der gefärbten Teile",
    t1_q: "Wenn ein Kreis in 4 gleiche Teile geteilt ist und 3 gefärbt sind, welcher Bruch ist das?",
    t1_q_1_4: "1/4",
    t1_q_2_4: "2/4",
    t1_q_3_4: "3/4",
    t1_q_4_4: "4/4",
    t2_title: "Brüche benennen",
    t2_text: "Verschiedene Formen können Brüche zeigen. Ein Balken, geteilt in 4 gleiche Teile mit 2 gefärbt, ist 2/4. Ein Kreis geteilt in 8 gleiche Teile mit 5 gefärbt, ist 5/8. Die Form ist egal—der Bruch zeigt einfach Teile eines Ganzen.",
    t2_b1: "Zähle die Gesamtzahl der Teile",
    t2_b2: "Zähle, wie viele Teile gefärbt sind",
    t2_b3: "Schreibe Zähler über Nenner",
    t2_q: "Ein Rechteck ist in 8 gleiche Teile geteilt, und 6 sind gefärbt. Welcher Bruch?",
    t2_q_2_8: "2/8",
    t2_q_4_8: "4/8",
    t2_q_6_8: "6/8",
    t2_q_7_8: "7/8",
    t3_title: "Brüche vergleichen",
    t3_text: "Wir können Brüche vergleichen, indem wir sehen, wie viele Teile gefärbt sind. Wenn 2/4 gefärbt ist und 1/4 gefärbt ist, ist 2/4 größer weil mehr Teile gefärbt sind. Wir schreiben: 2/4 > 1/4.",
    t3_b1: "Mehr gefärbte Teile bedeuten ein größerer Bruch",
    t3_b2: "Weniger gefärbte Teile bedeuten ein kleinerer Bruch",
    t3_b3: "Vergleiche die Zähler wenn Nenner gleich sind",
    t3_q: "Welcher Bruch ist größer: 3/8 oder 5/8?",
    t3_q_2_8: "2/8",
    t3_q_3_8: "3/8",
    t3_q_5_8: "5/8",
    t3_q_6_8: "6/8",
  },
  hu: {
    explorer_title: "Tört-felfedező",
    t1_title: "Egész egyenlő részei",
    t1_text: "A tört az egész egyenlő részeit mutatja. Ha egy kört 2 egyenlő részre osztunk és 1-et színezünk, az 1/2. Az alsó szám (nevező) az összes részt mutatja. A felső szám (számláló) a színezett részeket mutatja.",
    t1_b1: "Az egész egyenlő részekre van osztva",
    t1_b2: "A nevező az összes rész száma",
    t1_b3: "A számláló a színezett részek száma",
    t1_q: "Ha egy kört 4 egyenlő részre osztunk és 3-at színezünk, melyik tört?",
    t1_q_1_4: "1/4",
    t1_q_2_4: "2/4",
    t1_q_3_4: "3/4",
    t1_q_4_4: "4/4",
    t2_title: "Törtek elnevezése",
    t2_text: "Különböző formák mutathatnak törteket. Egy 4 egyenlő részre osztott sáv 2 színezett résszel 2/4. Egy 8 egyenlő részre osztott kör 5 színezett résszel 5/8. A forma nem számít—a tört csak az egész részei.",
    t2_b1: "Számlálj meg az összes részt",
    t2_b2: "Számlálj meg a színezett részeket",
    t2_b3: "Írj számlálót a nevező fölé",
    t2_q: "Egy téglalap 8 egyenlő részre van osztva, 6 van színezve. Melyik tört?",
    t2_q_2_8: "2/8",
    t2_q_4_8: "4/8",
    t2_q_6_8: "6/8",
    t2_q_7_8: "7/8",
    t3_title: "Törtek összehasonlítása",
    t3_text: "Összehasonlíthatunk törteket a színezett részek megtekintésével. Ha 2/4 és 1/4 van színezve, 2/4 nagyobb mert több rész van színezve. Ezt írjuk: 2/4 > 1/4.",
    t3_b1: "Több színezett rész nagyobb törtöt jelent",
    t3_b2: "Kevesebb színezett rész kisebb törtöt jelent",
    t3_b3: "Hasonlítsd össze a számlálókat ha a nevezők ugyanazok",
    t3_q: "Melyik tört nagyobb: 3/8 vagy 5/8?",
    t3_q_2_8: "2/8",
    t3_q_3_8: "3/8",
    t3_q_5_8: "5/8",
    t3_q_6_8: "6/8",
  },
  ro: {
    explorer_title: "Explorare Fracții",
    t1_title: "Părți egale ale unui întreg",
    t1_text: "O fracție arată părți egale ale unui întreg. Dacă tăiem un cerc în 2 părți egale și colorăm 1, asta este 1/2. Numărul de jos (numitor) spune câte părți egale. Numărul de sus (numărător) spune câte sunt colorate.",
    t1_b1: "Un întreg este împărțit în părți egale",
    t1_b2: "Numitorul este totalul de părți",
    t1_b3: "Numărătorul sunt părțile colorate",
    t1_q: "Dacă un cerc este împărțit în 4 părți egale și 3 sunt colorate, care este fracția?",
    t1_q_1_4: "1/4",
    t1_q_2_4: "2/4",
    t1_q_3_4: "3/4",
    t1_q_4_4: "4/4",
    t2_title: "Numiri fracții",
    t2_text: "Diferite forme pot arăta fracții. O bară împărțită în 4 părți egale cu 2 colorate este 2/4. Un cerc împărțit în 8 părți egale cu 5 colorate este 5/8. Forma nu contează—fracția arată doar părți ale unui întreg.",
    t2_b1: "Numără totalul de părți",
    t2_b2: "Numără câte părți sunt colorate",
    t2_b3: "Scrie numărător peste numitor",
    t2_q: "Un dreptunghi este împărțit în 8 părți egale, și 6 sunt colorate. Care este fracția?",
    t2_q_2_8: "2/8",
    t2_q_4_8: "4/8",
    t2_q_6_8: "6/8",
    t2_q_7_8: "7/8",
    t3_title: "Comparare fracții",
    t3_text: "Putem compara fracții privind câte părți sunt colorate. Dacă 2/4 este colorat și 1/4 este colorat, 2/4 este mai mare pentru că mai multe părți sunt colorate. Scriem: 2/4 > 1/4.",
    t3_b1: "Mai multe părți colorate înseamnă fracție mai mare",
    t3_b2: "Mai puține părți colorate înseamnă fracție mai mică",
    t3_b3: "Compară numărătorii dacă numitorii sunt egal",
    t3_q: "Care fracție este mai mare: 3/8 sau 5/8?",
    t3_q_2_8: "2/8",
    t3_q_3_8: "3/8",
    t3_q_5_8: "5/8",
    t3_q_6_8: "6/8",
  },
};

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <CircleFractionSvg numerator={1} denominator={2} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <CircleFractionSvg numerator={3} denominator={4} />,
      questions: [{ question: "t1_q", choices: ["t1_q_1_4", "t1_q_2_4", "t1_q_3_4", "t1_q_4_4"], answer: "t1_q_3_4" }],
    },
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <BarFractionSvg numerator={2} denominator={4} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <BarFractionSvg numerator={6} denominator={8} />,
      questions: [{ question: "t2_q", choices: ["t2_q_2_8", "t2_q_4_8", "t2_q_6_8", "t2_q_7_8"], answer: "t2_q_6_8" }],
    },
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <CompareFractionsSvg />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <CompareFractionsSvg />,
      questions: [
        { question: "t3_q", choices: ["t3_q_2_8", "t3_q_3_8", "t3_q_5_8", "t3_q_6_8"], answer: "t3_q_5_8" },
        { question: "t1_q", choices: ["t1_q_1_4", "t1_q_2_4", "t1_q_3_4", "t1_q_4_4"], answer: "t1_q_3_4" },
        { question: "t2_q", choices: ["t2_q_2_8", "t2_q_4_8", "t2_q_6_8", "t2_q_7_8"], answer: "t2_q_6_8" },
      ],
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function FractionExplorer4({ color = "#FFD700", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} grade={4} />
  );
}
