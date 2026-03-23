"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const ArrayModelSvg = memo(function ArrayModelSvg({ rows = 4, cols = 6 }: { rows?: number; cols?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="arrG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFB3B3" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#arrG)" rx="16" />
      <g transform="translate(60, 40)">
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => (
            <circle key={`${r}-${c}`} cx={c * 12} cy={r * 12} r="4" fill="#FF6B6B" opacity="0.8" />
          ))
        )}
      </g>
      <text x="120" y="130" fontSize="14" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {rows} × {cols} = {rows * cols}
      </text>
      <text x="120" y="150" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ({rows} × {cols} = {rows * cols})
      </text>
    </svg>
  );
});

const SkipCountingSvg = memo(function SkipCountingSvg({ start = 5, count = 8, lang = "en" }: { start?: number; count?: number; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const sequence = Array.from({ length: count + 1 }, (_, i) => start * i);
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="skipG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#skipG)" rx="16" />
      <text x="120" y="25" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">
        {t.skip_count_by} {start}:
      </text>
      <g transform="translate(20, 50)">
        {sequence.map((num, i) => (
          <g key={i} transform={`translate(${i * 28}, 0)`}>
            <circle cx="8" cy="15" r="8" fill="#4ECDC4" opacity="0.6" />
            <text x="8" y="19" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">
              {num}
            </text>
            {i < sequence.length - 1 && (
              <text x="18" y="18" fontSize="10" fill="rgba(255,255,255,0.5)">
                →
              </text>
            )}
          </g>
        ))}
      </g>
      <text x="120" y="125" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        {t.total}: {sequence[sequence.length - 1]}
      </text>
    </svg>
  );
});

const NumberLineJumpsSvg = memo(function NumberLineJumpsSvg({ groups = 7, size = 4, lang = "en" }: { groups?: number; size?: number; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const max = groups * size;
  const jumps = Array.from({ length: groups + 1 }, (_, i) => (i * size * 200) / max);
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="nlG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFE66D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#nlG)" rx="16" />
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {[0, size, size * 2, size * 3, size * 4, size * 5, size * 6, max].filter(v => v <= max).map((val) => {
        const x = 20 + (val / max) * 200;
        return (
          <g key={val}>
            <line x1={x} y1="45" x2={x} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <text x={x} y="75" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
              {val}
            </text>
          </g>
        );
      })}
      {jumps.map((x, i) => (
        <g key={i}>
          <circle cx={20 + x} cy="50" r="5" fill="#FFD700" opacity="0.7" />
          {i < jumps.length - 1 && (
            <path d={`M ${20 + x + 5} 48 Q ${20 + (x + jumps[i + 1]) / 2} 30 ${20 + jumps[i + 1] - 5} 48`} stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.5" />
          )}
        </g>
      ))}
      <text x="120" y="110" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">
        {groups} {t.jumps_of} {size} = {max}
      </text>
    </svg>
  );
});

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Multiplication Explorer",
    skip_count_by: "Skip count by",
    total: "Total",
    jumps_of: "jumps of",
    t1_title: "Arrays and Multiplication",
    t1_text: "An array is a group of objects arranged in rows and columns. When we count all the objects in an array, we multiply rows × columns. For example, 4 rows × 6 columns = 24 objects.",
    t1_b1: "Each row has the same number of objects",
    t1_b2: "Multiply rows by columns to find the total",
    t1_b3: "Arrays help us visualize multiplication",
    t1_q: "How many objects are in a 5 × 8 array?",
    t1_q_40: "40",
    t1_q_45: "45",
    t1_q_48: "48",
    t1_q_50: "50",
    t2_title: "Skip Counting",
    t2_text: "Skip counting is counting by a number over and over. To find 6 × 7, count by 6's seven times: 6, 12, 18, 24, 30, 36, 42. So 6 × 7 = 42.",
    t2_b1: "Skip counting helps build times tables",
    t2_b2: "Count by the first number as many times as the second",
    t2_b3: "The last number you reach is your answer",
    t2_q: "What is 8 × 6 using skip counting?",
    t2_q_42: "42",
    t2_q_48: "48",
    t2_q_54: "54",
    t2_q_56: "56",
    t3_title: "Number Line Jumps",
    t3_text: "On a number line, multiply by making equal jumps. To find 9 × 5, make 9 jumps of size 5. Each jump lands on 5, 10, 15... up to 45. So 9 × 5 = 45.",
    t3_b1: "Each jump is the same size",
    t3_b2: "Count the number of jumps and size of each jump",
    t3_b3: "Where you land is the answer",
    t3_q: "How many jumps of 7 reach 56?",
    t3_q_7: "7",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
  },
  de: {
    explorer_title: "Multiplikations-Entdecker",
    skip_count_by: "Zähle Sprünge um",
    total: "Summe",
    jumps_of: "Sprünge von",
    t1_title: "Arrays und Multiplikation",
    t1_text: "Ein Array ist eine Gruppe von Objekten, die in Reihen und Spalten angeordnet sind. Wenn wir alle Objekte in einem Array zählen, multiplizieren wir Reihen × Spalten. Zum Beispiel: 4 Reihen × 6 Spalten = 24 Objekte.",
    t1_b1: "Jede Reihe hat dieselbe Anzahl von Objekten",
    t1_b2: "Multipliziere Reihen mit Spalten, um das Total zu finden",
    t1_b3: "Arrays helfen uns, Multiplikation zu verstehen",
    t1_q: "Wie viele Objekte sind in einem 5 × 8 Array?",
    t1_q_40: "40",
    t1_q_45: "45",
    t1_q_48: "48",
    t1_q_50: "50",
    t2_title: "Zählsprünge",
    t2_text: "Zählsprünge sind Zählen in Schritten. Um 6 × 7 zu finden, zähle siebenmal um 6: 6, 12, 18, 24, 30, 36, 42. Also 6 × 7 = 42.",
    t2_b1: "Zählsprünge helfen Einmaleins zu lernen",
    t2_b2: "Zähle die erste Zahl so oft wie die zweite",
    t2_b3: "Die letzte Zahl ist die Antwort",
    t2_q: "Was ist 8 × 6 mit Zählsprüngen?",
    t2_q_42: "42",
    t2_q_48: "48",
    t2_q_54: "54",
    t2_q_56: "56",
    t3_title: "Zahlenstrahlensprünge",
    t3_text: "Auf einem Zahlenstrahl multipliziert man mit gleichmäßigen Sprüngen. Um 9 × 5 zu finden, mache 9 Sprünge der Größe 5. Jeder Sprung landet auf 5, 10, 15... bis 45. Also 9 × 5 = 45.",
    t3_b1: "Jeder Sprung ist gleich groß",
    t3_b2: "Zähle Anzahl und Größe der Sprünge",
    t3_b3: "Wo du landest, ist die Antwort",
    t3_q: "Wie viele Sprünge um 7 erreichen 56?",
    t3_q_7: "7",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
  },
  hu: {
    explorer_title: "Szorzás-felfedező",
    skip_count_by: "Számolj ugrásokat",
    total: "Összesen",
    jumps_of: "ugrás",
    t1_title: "Tömbök és szorzás",
    t1_text: "A tömb a sorokba és oszlopokba rendezett tárgyak csoportja. Amikor az összes tárgyat számolunk, szorzunk: sorok × oszlopok. Például: 4 sor × 6 oszlop = 24 tárgy.",
    t1_b1: "Minden sornak ugyanannyi tárgya van",
    t1_b2: "Szorozd a sorokat az oszlopokkal",
    t1_b3: "A tömbök segítenek megérteni a szorzást",
    t1_q: "Hány tárgy van egy 5 × 8 tömbben?",
    t1_q_40: "40",
    t1_q_45: "45",
    t1_q_48: "48",
    t1_q_50: "50",
    t2_title: "Számszámolás",
    t2_text: "A számszámolás azt jelenti, hogy egy szám után ismételten számolunk. A 6 × 7 megtalálásához hétszer számolunk 6-tal: 6, 12, 18, 24, 30, 36, 42. Tehát 6 × 7 = 42.",
    t2_b1: "A számszámolás segít megtanulni a szorzótáblát",
    t2_b2: "Számolj az első számmal annyiszor, mint a második",
    t2_b3: "Az utolsó szám a válasz",
    t2_q: "Mi az 8 × 6 számszámolással?",
    t2_q_42: "42",
    t2_q_48: "48",
    t2_q_54: "54",
    t2_q_56: "56",
    t3_title: "Számegyenes ugrások",
    t3_text: "A számegyenesen szorzunk egyenlő ugrásokkal. A 9 × 5 megtalálásához 9 ugrást teszel, mindegyik 5-ös. Minden ugráson landol: 5, 10, 15... 45-ig. Tehát 9 × 5 = 45.",
    t3_b1: "Minden ugras ugyanakora",
    t3_b2: "Számláld meg az ugrások számát és méretét",
    t3_b3: "Ahol landolsz, az a válasz",
    t3_q: "Hány ugrás a 7-essel eléri az 56-ot?",
    t3_q_7: "7",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
  },
  ro: {
    explorer_title: "Explorare Înmulțire",
    skip_count_by: "Numără salturi cu",
    total: "Total",
    jumps_of: "salturi de",
    t1_title: "Tablouri și Înmulțire",
    t1_text: "Un tablou este un grup de obiecte aranjate în rânduri și coloane. Pentru a găsi totalul, înmulțim rânduri × coloane. De exemplu: 4 rânduri × 6 coloane = 24 obiecte.",
    t1_b1: "Fiecare rând are același număr de obiecte",
    t1_b2: "Înmulțește rândurile cu coloanele",
    t1_b3: "Tablourile ajută să vizualizezi înmulțirea",
    t1_q: "Câte obiecte sunt într-un tablou 5 × 8?",
    t1_q_40: "40",
    t1_q_45: "45",
    t1_q_48: "48",
    t1_q_50: "50",
    t2_title: "Numărare cu salturi",
    t2_text: "Numărarea cu salturi înseamnă să numeri într-un model repetat. Pentru 6 × 7, numără din 6 de șapte ori: 6, 12, 18, 24, 30, 36, 42. Deci 6 × 7 = 42.",
    t2_b1: "Numărarea cu salturi te ajută să înveți tabla",
    t2_b2: "Numără cu primul număr de cât ori al doilea",
    t2_b3: "Ultimul număr este răspunsul",
    t2_q: "Care este 8 × 6 cu numărare cu salturi?",
    t2_q_42: "42",
    t2_q_48: "48",
    t2_q_54: "54",
    t2_q_56: "56",
    t3_title: "Sărituri pe Linia Numerelor",
    t3_text: "Pe o linie numerică, faci salturi egale. Pentru 9 × 5, faci 9 salturi de 5. Fiecare salt ajunge la 5, 10, 15... 45. Deci 9 × 5 = 45.",
    t3_b1: "Fiecare salt este de același mărime",
    t3_b2: "Numără numărul și mărimea săriturii",
    t3_b3: "Unde ajungi este răspunsul",
    t3_q: "Câte salturi de 7 ajung la 56?",
    t3_q_7: "7",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
  },
};

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✖️",
  rounds: [
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: (lang) => <ArrayModelSvg rows={4} cols={6} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: (lang) => <ArrayModelSvg rows={5} cols={8} />,
      questions: [{ question: "t1_q", choices: ["t1_q_40", "t1_q_45", "t1_q_48", "t1_q_50"], answer: "t1_q_40" }],
    },
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: (lang) => <SkipCountingSvg start={6} count={7} lang={lang} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: (lang) => <SkipCountingSvg start={8} count={6} lang={lang} />,
      questions: [{ question: "t2_q", choices: ["t2_q_42", "t2_q_48", "t2_q_54", "t2_q_56"], answer: "t2_q_48" }],
    },
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: (lang) => <NumberLineJumpsSvg groups={9} size={5} lang={lang} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: (lang) => <NumberLineJumpsSvg groups={8} size={7} lang={lang} />,
      questions: [
        { question: "t3_q", choices: ["t3_q_7", "t3_q_8", "t3_q_9", "t3_q_10"], answer: "t3_q_8" },
        { question: "t1_q", choices: ["t1_q_40", "t1_q_45", "t1_q_48", "t1_q_50"], answer: "t1_q_40" },
        { question: "t2_q", choices: ["t2_q_42", "t2_q_48", "t2_q_54", "t2_q_56"], answer: "t2_q_48" },
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

export default function MultiplicationExplorer4({ color = "#FF6B6B", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} grade={4} />
  );
}
