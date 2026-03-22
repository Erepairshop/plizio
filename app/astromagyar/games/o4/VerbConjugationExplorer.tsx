"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Alanyi ragozás",
    tx1: "Az alanyi ragozást akkor használjuk, amikor a tárgy határozatlan (nem tudjuk, kinek vagy milyen tárgyat).",
    q1: "Melyik mondat helyes?",
    a1: "Én olvasok egy könyvet.",
    b1: "Én olvasom egy könyvet.",
    c1: "Én olvasok a könyvet.",
    d1: "Én olvassa egy könyvet.",
    t2: "Tárgyas ragozás",
    tx2: "A tárgyas ragozást akkor használjuk, amikor a tárgy határozott (tudjuk, melyik tárgy).",
    q2: "Melyik mondatban helyes a tárgyas ragozás?",
    a2: "Én szeretem a macskámat.",
    b2: "Én szeretek a macskámat.",
    c2: "Én szeretlek a macskámat.",
    d2: "Én szeretlek macskámat.",
    t3: "Jelen idő",
    tx3: "A jelen idő az 'vagyok', 'vagy', 'van', 'vagyunk', 'vagytok', 'vannak' igékkel működik.",
    q3: "Melyik helyes ragozás?",
    a3: "Ő vagyok tanár.",
    b3: "Ő vagy tanár.",
    c3: "Ő van tanár.",
    d3: "Ők vannak tanárok.",
    t4: "Múlt idő -t/-tt végződés",
    tx4: "Az igék múlt idejehez gyakran -t vagy -tt végződést adunk: olvas-t, szeret-t, beszél-t.",
    q4: "Mi a mondat helyes múlt ideje?",
    a4: "Tegnap az iskolás játszt.",
    b4: "Tegnap az iskolás játszott.",
    c4: "Tegnap az iskolás játszat.",
    d4: "Tegnap az iskolás játszot.",
    t5: "Igekötők és ige",
    tx5: "Az igekötő megváltoztatja az ige jelentését: fel-olvas, ki-ír, be-csuk, le-jön.",
    q5: "Melyik helyes mondatban van igekötő?",
    a5: "Ő fel olvasott egy újságot.",
    b5: "Ő felolvasott egy újságot.",
    c5: "Ő olvasta fel egy újságot.",
    d5: "Ő felolvasott újságot.",
  },
  de: {
    t1: "Unbestimmte Konjugation",
    tx1: "Die unbestimmte Konjugation verwenden wir, wenn das Objekt unbestimmt ist.",
    q1: "Welcher Satz ist korrekt?",
    a1: "Ich lese ein Buch.",
    b1: "Ich lese das Buch.",
    c1: "Ich liest ein Buch.",
    d1: "Ich lese bücher.",
    t2: "Bestimmte Konjugation",
    tx2: "Die bestimmte Konjugation verwenden wir, wenn das Objekt bestimmt ist.",
    q2: "Welcher Satz hat die richtige bestimmte Konjugation?",
    a2: "Ich liebe meinen Kater.",
    b2: "Ich liebe meinen Katers.",
    c2: "Ich liebst meinen Kater.",
    d2: "Ich lieben meinen Kater.",
    t3: "Gegenwart",
    tx3: "Die Gegenwart wird mit 'bin', 'bist', 'ist', 'sind' gebildet.",
    q3: "Welche Konjugation ist richtig?",
    a3: "Ich sind ein Lehrer.",
    b3: "Du bist ein Lehrer.",
    c3: "Wir ist Lehrer.",
    d3: "Sie bin Lehrer.",
    t4: "Vergangenheit",
    tx4: "Die Vergangenheit wird oft mit -t oder -tt gebildet.",
    q4: "Welcher Satz ist in der Vergangenheit richtig?",
    a4: "Gestern spiel ich.",
    b4: "Gestern spielte ich.",
    c4: "Gestern ich spielte.",
    d4: "Gestern spielt ich.",
    t5: "Verbpartikeln",
    tx5: "Verbpartikeln ändern die Bedeutung: auf-machen, aus-gehen, ein-treten, weg-laufen.",
    q5: "Welcher Satz hat die richtige Partikel?",
    a5: "Ich aufmachte die Tür.",
    b5: "Ich machte auf die Tür.",
    c5: "Ich machte die Tür auf.",
    d5: "Ich aufmachen die Tür.",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="60" cy="80" r="20" fill="#FF6B6B" opacity="0.3" />
          <text x="120" y="85" textAnchor="middle" fontSize="48">
            📖
          </text>
          <circle cx="180" cy="80" r="20" fill="#4ECDC4" opacity="0.3" />
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "a1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="80" cy="80" r="25" fill="#FFE66D" opacity="0.3" />
          <text x="120" y="85" textAnchor="middle" fontSize="48">
            🎯
          </text>
          <circle cx="160" cy="80" r="20" fill="#95E1D3" opacity="0.3" />
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "a2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="60" y="85" textAnchor="middle" fontSize="40">
            ⏱️
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="40">
            ✨
          </text>
          <text x="120" y="145" textAnchor="middle" fontSize="12" fill="#AAA">
            Jelen idő
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "d3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="50" y="60" width="140" height="60" rx="8" fill="#B44DFF" opacity="0.2" />
          <text x="120" y="95" textAnchor="middle" fontSize="14" fill="#FFF" fontWeight="bold">
            -t / -tt
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "b4",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <text x="60" y="85" textAnchor="middle" fontSize="20">
              ↑
            </text>
            <text x="100" y="85" textAnchor="middle" fontSize="20">
              →
            </text>
            <text x="140" y="85" textAnchor="middle" fontSize="20">
              ↓
            </text>
            <text x="180" y="85" textAnchor="middle" fontSize="20">
              ←
            </text>
          </g>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Igekötők
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "b5",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function VerbConjugationExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
