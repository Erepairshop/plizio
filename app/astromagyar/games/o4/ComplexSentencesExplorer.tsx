"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Mellérendelő összetett mondat",
    tx1: "Mellérendelő összetett mondatban az egyes mondatok között és, vagy, illetve szó kapcsolja össze őket.",
    q1: "Melyik mondat helyes mellérendelő összetett mondat?",
    a1: "A gyerek fut az iskolához és az barátja vár.",
    b1: "A gyerek fut az iskolához és az barátja vár.",
    c1: "A gyerek fut az iskolához, és barátja vár.",
    d1: "A gyerek fut az iskolához illetve az barátja vár.",
    t2: "Alárendelő összetett mondat - feltétel",
    tx2: "Az alárendelő összetett mondatban a mellékmondatban a feltétel van: ha, amennyiben, feltéve, hogy.",
    q2: "Melyik mondat helyes feltételes mondat?",
    a2: "Ha az időjárás szép van, a gyerekek játszani fognak.",
    b2: "Ha az időjárás szép, a gyerekek játszani fognak.",
    c2: "Amennyiben az időjárás szép, a gyerekek játszani fognak.",
    d2: "Ha az időjárás szép, a gyerekek játszottak volna.",
    t3: "Alárendelő összetett mondat - ok",
    tx3: "Az alárendelő összetett mondatban az okmondat azt mutatja, hogy miért történik valami: mert, mivel, lévén, hogy.",
    q3: "Melyik mondat helyes okmondat?",
    a3: "A gyerek tanul, mivel a vizsga fontos.",
    b3: "A gyerek tanul mivel a vizsga fontos.",
    c3: "A gyerek tanul mert az vizsga fontos.",
    d3: "A gyerek tanul mivel fontos az vizsga.",
    t4: "Alárendelő összetett mondat - cél",
    tx4: "A célmondat azt mutatja, hogy milyen céllal történik valami: hogy, amely céllal, annak érdekében, hogy.",
    q4: "Melyik mondat helyes célmondat?",
    a4: "A gyerek tanul, hogy jól teljesítsen az iskolában.",
    b4: "A gyerek tanul hogy jól teljesítsen az iskolában.",
    c4: "A gyerek tanul, mely céllal jól teljesítsen az iskolában.",
    d4: "A gyerek tanul azért, hogy jól teljesítsen az iskolában.",
    t5: "Alárendelő összetett mondat - egyéb",
    tx5: "Egyéb alárendelő mondatok: időmondat (amikor, míg), helymondat (ahol, ahova), módmondat (ahogy), minőségmondat (olyan, mint).",
    q5: "Melyik mondat helyes mellékmondat?",
    a5: "A gyerek fut ahol az testvére volt.",
    b5: "A gyerek fut, ahol az testvére volt.",
    c5: "A gyerek fut ahova az testvére volt.",
    d5: "A gyerek fut ahogy az testvére volt.",
  },
  de: {
    t1: "Beigeordnete Satzverbindung",
    tx1: "In beigeordneten Satzverbindungen werden Sätze durch und, oder, beziehungsweise verbunden.",
    q1: "Welcher Satz ist eine richtige beigeordnete Satzverbindung?",
    a1: "Das Kind läuft zur Schule und die Freundin wartet.",
    b1: "Das Kind läuft zur Schule, und die Freundin wartet.",
    c1: "Das Kind läuft zur Schule. Die Freundin wartet.",
    d1: "Das Kind läuft zur Schule, denn die Freundin wartet.",
    t2: "Unterordnende Satzverbindung - Bedingung",
    tx2: "In unterordnenden Satzverbindungen mit Bedingung steht: wenn, falls, sofern, vorausgesetzt.",
    q2: "Welcher Satz ist ein richtiger Bedingungssatz?",
    a2: "Falls das Wetter schön sein wird, spielen die Kinder.",
    b2: "Falls das Wetter schön ist, spielen die Kinder.",
    c2: "Wenn das Wetter schön ist, spielen die Kinder.",
    d2: "Wenn das Wetter schön ist, spielten die Kinder.",
    t3: "Unterordnende Satzverbindung - Grund",
    tx3: "Der Grund wird ausgedrückt mit: weil, da, zumal, da ja.",
    q3: "Welcher Satz ist ein richtiger Kausalsatz?",
    a3: "Das Kind lernt, weil die Prüfung wichtig ist.",
    b3: "Das Kind lernt weil die Prüfung wichtig ist.",
    c3: "Das Kind lernt, da die Prüfung wichtig ist.",
    d3: "Das Kind lernt, zumal die Prüfung wichtig ist.",
    t4: "Unterordnende Satzverbindung - Zweck",
    tx4: "Der Zweck wird ausgedrückt mit: damit, um ... zu, im Hinblick auf.",
    q4: "Welcher Satz ist ein richtiger Finalsatz?",
    a4: "Das Kind lernt, damit es in der Schule gut ist.",
    b4: "Das Kind lernt damit es in der Schule gut ist.",
    c4: "Das Kind lernt, um in der Schule gut zu sein.",
    d4: "Das Kind lernt zu in der Schule gut sein.",
    t5: "Unterordnende Satzverbindung - Sonstiges",
    tx5: "Weitere unterordnende Sätze: Zeitsatz (wenn, während), Lokalsatz (wo, wohin), Modalsatz (wie), Vergleichssatz (als, wie).",
    q5: "Welcher Satz ist ein richtiger Nebensatz?",
    a5: "Das Kind läuft wo die Schwester war.",
    b5: "Das Kind läuft, wo die Schwester war.",
    c5: "Das Kind läuft, wohin die Schwester war.",
    d5: "Das Kind läuft, wie die Schwester war.",
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
          <g opacity="0.4">
            <rect x="40" y="60" width="60" height="50" rx="4" fill="#FF6B6B" />
            <text x="70" y="90" textAnchor="middle" fontSize="12">
              mondat1
            </text>
          </g>
          <text x="120" y="90" textAnchor="middle" fontSize="18" fill="#FFE66D">
            és
          </text>
          <g opacity="0.4">
            <rect x="140" y="60" width="60" height="50" rx="4" fill="#4ECDC4" />
            <text x="170" y="90" textAnchor="middle" fontSize="12">
              mondat2
            </text>
          </g>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "c1",
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
          <text x="60" y="85" textAnchor="middle" fontSize="32">
            ❓
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="32">
            ✅
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Feltételmondat
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "c2",
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
          <circle cx="120" cy="80" r="40" fill="#B44DFF" opacity="0.2" />
          <text x="120" y="88" textAnchor="middle" fontSize="28">
            🤷
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
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
          <text x="80" y="85" textAnchor="middle" fontSize="32">
            🎯
          </text>
          <path d="M 140,60 L 160,80 L 140,100 L 120,80 Z" fill="#FFE66D" opacity="0.3" />
          <text x="140" y="90" textAnchor="middle" fontSize="16">
            cél
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "d4",
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
            <text x="60" y="90" textAnchor="middle" fontSize="28">
              ⏰
            </text>
          </g>
          <g opacity="0.4">
            <text x="120" y="90" textAnchor="middle" fontSize="28">
              📍
            </text>
          </g>
          <g opacity="0.4">
            <text x="180" y="90" textAnchor="middle" fontSize="28">
              🔄
            </text>
          </g>
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

export default function ComplexSentencesExplorer({
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
