"use client";
// SubtractionExplorer3 — Subtraction Island (Part-Whole Relationship, Decomposition, Mental Math to 1000)
// Topic mode with interactive blocks

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Part-whole relationship ────────────────────────────────────────────

const PartWholeSvg = memo(function PartWholeSvg({ whole = 700, part = 300, lang = "en" }: { whole?: number; part?: number; lang?: string }) {
  const remaining = whole - part;
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="pwG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9999" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#pwG)" rx="16" />

      {/* Whole bar */}
      <g transform="translate(40, 25)">
        <rect width="160" height="30" fill="#FF6B6B" opacity="0.25" rx="4" />
        <text x="80" y="22" fontSize="16" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
          {t.pw_whole}: {whole}
        </text>
      </g>

      {/* Arrow down */}
      <line x1="120" y1="65" x2="120" y2="78" stroke="#FF6B6B" strokeWidth="2" opacity="0.4" />

      {/* Two parts */}
      <g transform="translate(20, 90)">
        <rect width="50" height="25" fill="#FF6B6B" opacity="0.3" rx="4" />
        <text x="25" y="18" fontSize="13" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
          {part}
        </text>
      </g>

      <text x="120" y="108" fontSize="12" fontWeight="bold" fill="#FF6B6B" textAnchor="middle" opacity="0.5">
        +
      </text>

      <g transform="translate(170, 90)">
        <rect width="50" height="25" fill="#FF6B6B" opacity="0.3" rx="4" />
        <text x="25" y="18" fontSize="13" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
          {remaining}
        </text>
      </g>
    </svg>
  );
});

// ─── SVG: Subtraction decomposition ──────────────────────────────────────────

const SubDecompositionSvg = memo(function SubDecompositionSvg({ total = 600, taken = 200, lang = "en" }: { total?: number; taken?: number; lang?: string }) {
  const left = total - taken;
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="subG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9999" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#subG)" rx="16" />

      {/* Start */}
      <g transform="translate(75, 20)">
        <rect width="90" height="35" fill="#FF6B6B" opacity="0.2" rx="4" />
        <text x="45" y="22" fontSize="18" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
          {total}
        </text>
      </g>

      {/* Minus */}
      <text x="120" y="70" fontSize="14" fontWeight="bold" fill="#FF6B6B" textAnchor="middle" opacity="0.5">
        −
      </text>

      <g transform="translate(30, 80)">
        <rect width="50" height="35" fill="#FF6B6B" opacity="0.3" rx="4" />
        <text x="25" y="22" fontSize="16" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
          {taken}
        </text>
      </g>

      {/* Equals */}
      <text x="160" y="108" fontSize="14" fontWeight="bold" fill="#FF6B6B" textAnchor="middle" opacity="0.5">
        =
      </text>

      <g transform="translate(180, 80)">
        <rect width="50" height="35" fill="#00FF88" opacity="0.3" rx="4" />
        <text x="25" y="22" fontSize="16" fontWeight="bold" fill="#00FF88" textAnchor="middle">
          {left}
        </text>
      </g>
    </svg>
  );
});

// ─── SVG: Subtraction on number line ─────────────────────────────────────────

const SubtractionLineSvg = memo(function SubtractionLineSvg({ start = 450, step = 150, lang = "en" }: { start?: number; step?: number; lang?: string }) {
  const end = start - step;
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <defs>
        <linearGradient id="sublineG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9999" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="100" fill="url(#sublineG)" rx="16" />

      {/* Number line 0-400 */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Hundred marks */}
      {[0, 100, 200, 300, 400].map((val) => {
        const pct = val / 400;
        return (
          <g key={val}>
            <line x1={20 + pct * 200} y1="45" x2={20 + pct * 200} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <text x={20 + pct * 200} y="72" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
              {val}
            </text>
          </g>
        );
      })}

      {/* Start marker */}
      <circle cx={20 + (start / 400) * 200} cy="50" r="5" fill="#FF6B6B" opacity="0.8" />
      <text x={20 + (start / 400) * 200} y="28" fontSize="11" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
        {t.nl_start}: {start}
      </text>

      {/* Jump arrow backwards */}
      <path
        d={`M ${20 + (start / 400) * 200} 50 L ${20 + (end / 400) * 200} 50`}
        stroke="#FF6B6B"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowRedSub)"
        opacity="0.6"
      />

      {/* End marker */}
      <circle cx={20 + (end / 400) * 200} cy="50" r="5" fill="#00FF88" opacity="0.8" />
      <text x={20 + (end / 400) * 200} y="28" fontSize="11" fontWeight="bold" fill="#00FF88" textAnchor="middle">
        {t.nl_end}: {end}
      </text>

      <defs>
        <marker id="arrowRedSub" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M10,0 L10,6 L0,3 z" fill="#FF6B6B" opacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Subtraction Explorer",
    // SVG labels
    pw_whole: "Whole",
    nl_start: "Start",
    nl_end: "End",
    // Topic 1: Part-whole relationship
    t1_title: "Part and Whole",
    t1_text: "Every number can be split into two PARTS. If you know the whole and one part, you can find the other part! 700 = 300 + 400",
    t1_b1: "Whole = Part A + Part B",
    t1_b2: "If you know two, find the third",
    t1_b3: "Subtraction is the opposite of addition",
    t1_inst: "Drag the number to complete the part-whole relationship",
    t1_h1: "The whole is at the top",
    t1_h2: "Parts are at the bottom",
    t1_q: "If whole = 500 and part = 200, what is the other part?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_400: "400",
    t1_q_500: "500",
    // Topic 2: Subtraction decomposition
    t2_title: "Breaking Subtraction Apart",
    t2_text: "Break subtraction into easier steps! 600 − 200 = 400. You can also think: 600 − 100 − 100 = 400.",
    t2_b1: "Subtraction breaks into steps",
    t2_b2: "Subtract one part at a time",
    t2_b3: "Same answer, easier to do",
    t2_inst: "Place numbers on the equation to solve the subtraction",
    t2_h1: "Start with the top number",
    t2_h2: "Subtract and find the result",
    t2_q: "800 − 300 = ?",
    t2_q_500: "500",
    t2_q_400: "400",
    t2_q_600: "600",
    t2_q_700: "700",
    // Topic 3: Mental subtraction
    t3_title: "Number Line Subtraction",
    t3_text: "Use a number line to subtract! Start at 450, jump backwards 150. Where do you land? 450 − 150 = 300!",
    t3_b1: "Start at the first number",
    t3_b2: "Jump backwards by the second",
    t3_b3: "Where you land = answer",
    t3_inst: "Mark the start and jump point on the number line",
    t3_h1: "Start position is marked",
    t3_h2: "Jump backwards to find the answer",
    t3_q: "350 − 100 = ?",
    t3_q_250: "250",
    t3_q_300: "300",
    t3_q_350: "350",
    t3_q_400: "400",
  },
  de: {
    explorer_title: "Subtraktion entdecken",
    // SVG labels
    pw_whole: "Ganzes",
    nl_start: "Start",
    nl_end: "Ende",
    t1_title: "Teil und Ganzes",
    t1_text: "Jede Zahl kann man in zwei TEILE spalten. Wenn du das Ganze und einen Teil kennst, kannst du den anderen Teil finden! 700 = 300 + 400",
    t1_b1: "Ganzes = Teil A + Teil B",
    t1_b2: "Wenn du zwei kennst, finde den dritten",
    t1_b3: "Subtraktion ist das Gegenteil von Addition",
    t1_inst: "Ziehe die Zahl, um die Teil-Ganzes-Beziehung zu vervollständigen",
    t1_h1: "Das Ganze ist oben",
    t1_h2: "Die Teile sind unten",
    t1_q: "Wenn Ganzes = 500 und Teil = 200, was ist der andere Teil?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_400: "400",
    t1_q_500: "500",
    t2_title: "Subtraktion auseinander nehmen",
    t2_text: "Zerlege Subtraktion in einfachere Schritte! 600 − 200 = 400. Du kannst auch so denken: 600 − 100 − 100 = 400.",
    t2_b1: "Subtraktion zerlegt sich in Schritte",
    t2_b2: "Ziehe einen Teil nach dem anderen ab",
    t2_b3: "Gleiche Antwort, leichter zu rechnen",
    t2_inst: "Platziere Zahlen in der Gleichung, um die Subtraktion zu lösen",
    t2_h1: "Beginne mit der oberen Zahl",
    t2_h2: "Subtrahiere und finde das Ergebnis",
    t2_q: "800 − 300 = ?",
    t2_q_500: "500",
    t2_q_400: "400",
    t2_q_600: "600",
    t2_q_700: "700",
    t3_title: "Zahlenstrahl-Subtraktion",
    t3_text: "Benutze einen Zahlenstrahl zum Subtrahieren! Starte bei 450, springe 150 zurück. Wo landest du? 450 − 150 = 300!",
    t3_b1: "Starte bei der ersten Zahl",
    t3_b2: "Springe rückwärts um die zweite",
    t3_b3: "Wo du landest = die Antwort",
    t3_inst: "Markiere den Start- und Sprungpunkt auf dem Zahlenstrahl",
    t3_h1: "Startposition ist markiert",
    t3_h2: "Springe rückwärts, um die Antwort zu finden",
    t3_q: "350 − 100 = ?",
    t3_q_250: "250",
    t3_q_300: "300",
    t3_q_350: "350",
    t3_q_400: "400",
  },
  hu: {
    explorer_title: "Kivonás felfedezés",
    // SVG labels
    pw_whole: "Egész",
    nl_start: "Start",
    nl_end: "Vég",
    t1_title: "Rész és Egész",
    t1_text: "Minden számot fel lehet osztani két RÉSZRE. Ha ismered az egészet és egy részét, megtalálhatod a másik részt! 700 = 300 + 400",
    t1_b1: "Egész = Rész A + Rész B",
    t1_b2: "Ha kettőt tudsz, megtalálod a harmadikat",
    t1_b3: "A kivonás az összeadás ellenkezője",
    t1_inst: "Húzd el a számot a rész-egész kapcsolat befejezéséhez",
    t1_h1: "Az egész felül van",
    t1_h2: "A részek alul vannak",
    t1_q: "Ha egész = 500 és rész = 200, mi a másik rész?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_400: "400",
    t1_q_500: "500",
    t2_title: "Kivonás szétdarabolása",
    t2_text: "Oszd fel a kivonást könnyebb lépésekre! 600 − 200 = 400. Gondolkodhatsz úgy is: 600 − 100 − 100 = 400.",
    t2_b1: "A kivonás lépésekre bomlik",
    t2_b2: "Vegyél el egyenként",
    t2_b3: "Ugyanaz az eredmény, könnyebb",
    t2_inst: "Helyezd el a számokat az egyenletben a kivonás megoldásához",
    t2_h1: "Kezd a felső számmal",
    t2_h2: "Vegyél el és találd meg az eredményt",
    t2_q: "800 − 300 = ?",
    t2_q_500: "500",
    t2_q_400: "400",
    t2_q_600: "600",
    t2_q_700: "700",
    t3_title: "Számegyenes-kivonás",
    t3_text: "Használj számegyenest a kivonáshoz! Indulj 450-ből, ugorj vissza 150-et. Hol érsz? 450 − 150 = 300!",
    t3_b1: "Indulj az első számnál",
    t3_b2: "Ugorj vissza a másodikkal",
    t3_b3: "Ahol érsz = a válasz",
    t3_inst: "Jelöld meg a start- és ugrási pontot a számegyenesen",
    t3_h1: "A kezdőpozíció meg van jelölve",
    t3_h2: "Ugorj vissza a válasz megtalálásához",
    t3_q: "350 − 100 = ?",
    t3_q_250: "250",
    t3_q_300: "300",
    t3_q_350: "350",
    t3_q_400: "400",
  },
  ro: {
    explorer_title: "Explorare scădere",
    // SVG labels
    pw_whole: "Întreg",
    nl_start: "Start",
    nl_end: "Sfârşit",
    t1_title: "Partea și Întregul",
    t1_text: "Fiecare număr se poate împărți în două PĂRTI. Dacă cunoști întregul și o parte, poți găsi cealaltă! 700 = 300 + 400",
    t1_b1: "Întreg = Partea A + Partea B",
    t1_b2: "Dacă cunoști două, găsește al treilea",
    t1_b3: "Scăderea este opusul adunării",
    t1_inst: "Trage numărul pentru a completa relația parte-întreg",
    t1_h1: "Întregul este sus",
    t1_h2: "Părțile sunt jos",
    t1_q: "Dacă întreg = 500 și parte = 200, care este cealaltă parte?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_400: "400",
    t1_q_500: "500",
    t2_title: "Sparge scăderea în bucăți",
    t2_text: "Descompune scăderea în pași mai ușori! 600 − 200 = 400. Poți și să gândești: 600 − 100 − 100 = 400.",
    t2_b1: "Scăderea se sparge în pași",
    t2_b2: "Scazi o parte la o dată",
    t2_b3: "Același răspuns, mai ușor",
    t2_inst: "Plasează numerele în ecuație pentru a rezolva scăderea",
    t2_h1: "Începe cu numărul de sus",
    t2_h2: "Scazi și găsești rezultatul",
    t2_q: "800 − 300 = ?",
    t2_q_500: "500",
    t2_q_400: "400",
    t2_q_600: "600",
    t2_q_700: "700",
    t3_title: "Scădere pe linia numerelor",
    t3_text: "Folosește o linie de numere pentru scădere! Începe la 450, sari înapoi 150. Unde aterizezi? 450 − 150 = 300!",
    t3_b1: "Începe la primul număr",
    t3_b2: "Sari înapoi cu al doilea",
    t3_b3: "Unde aterizezi = răspuns",
    t3_inst: "Marchează punctul de start și de salt pe linia numerelor",
    t3_h1: "Poziția de start este marcată",
    t3_h2: "Sari înapoi pentru a găsi răspunsul",
    t3_q: "350 − 100 = ?",
    t3_q_250: "250",
    t3_q_300: "300",
    t3_q_350: "350",
    t3_q_400: "400",
  },
};

// ─── TOPIC DEFINITIONS ──────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Part-whole relationship
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <PartWholeSvg whole={700} part={300} lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 4],
      answer: 7,
      blockIcon: "🔢",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_200", "t1_q_300", "t1_q_400", "t1_q_500"],
      answer: "t1_q_400",
    },
  },
  // Topic 2: Subtraction decomposition
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <SubDecompositionSvg total={600} taken={200} lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [2, 4],
      answer: 6,
      blockIcon: "🔢",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_500", "t2_q_400", "t2_q_600", "t2_q_700"],
      answer: "t2_q_500",
    },
  },
  // Topic 3: Number line subtraction
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <SubtractionLineSvg start={450} step={150} lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 500,
      start: 450,
      target: 300,
      step: 50,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_250", "t3_q_300", "t3_q_350", "t3_q_400"],
      answer: "t3_q_300",
    },
  },
];

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➖",
  topics: TOPICS,
  rounds: [],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function SubtractionExplorer3({ color = "#FF6B6B", lang, onDone, onClose }: Props) {
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
