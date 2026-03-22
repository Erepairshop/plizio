"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Mi a szóösszetétel?", tx1: "Ha két vagy több szó összekapcsolódik, szóösszetétel keletkezik. Például: nap + ló = napló.",
    q1: "Melyik a szóösszetétel?", a1: "napló", b1: "szarka", c1: "játszik", d1: "gyors",

    t2: "Szóösszetételek a környezetben", tx2: "Szóösszetételek mindenhol körülöttünk vannak. Például: ceruzatartó, virágváza, háztartás.",
    q2: "Az alábbiak közül melyik szóösszetétel?", a2: "ceruzatartó", b2: "virág", c2: "ház", d2: "játék",

    t3: "Szóösszetételek felismerése", tx3: "A szóösszetételeket úgy ismerjük fel, hogy felbontjuk őket az eredeti szavakra.",
    q3: "Melyik szóösszetétel bontható fel így: szék + szín?", a3: "székszín", b3: "szék", c3: "szín", d3: "szépszín",

    t4: "Szóösszetételek értelme", tx4: "A szóösszetétel értelme az eredeti szavak egyesítésének logikájából adódik.",
    q4: "Mit jelent a 'ceruzatartó'?", a4: "Amit ceruzák tárolásához használunk", b4: "Ami ceruzával van", c4: "Amit ceruzák után keresünk", d4: "Ami ceruzát tart",

    t5: "Szóösszetételek gyakorlása", tx5: "Szóösszetételeket alkothatunk és bonthatunk felhasználva szókincsünket.",
    q5: "Melyik szóösszetétel van helyesen felírva?", a5: "teacsészé", b5: "teacsészé", c5: "tea-csészé", d5: "tea csészé",
  },
  de: {
    t1: "Was ist ein zusammengesetztes Wort?", tx1: "Wenn zwei oder mehr Wörter verbunden werden, entsteht ein zusammengesetztes Wort. Zum Beispiel: nap + ló = napló.",
    q1: "Welches ist ein zusammengesetztes Wort?", a1: "napló", b1: "szarka", c1: "játszik", d1: "gyors",

    t2: "Zusammengesetzte Wörter überall", tx2: "Zusammengesetzte Wörter sind überall um uns herum. Zum Beispiel: Stifthalter, Blumenvase, Haushalt.",
    q2: "Welches ist ein zusammengesetztes Wort?", a2: "Stifthalter", b2: "Blume", c2: "Haus", d2: "Spiel",

    t3: "Zusammengesetzte Wörter erkennen", tx3: "Wir erkennen zusammengesetzte Wörter, indem wir sie in ihre Originalwörter zerlegen.",
    q3: "Welches zusammengesetzte Wort kann so zerlegt werden: szék + szín?", a3: "székszín", b3: "szék", c3: "szín", d3: "szépszín",

    t4: "Bedeutung zusammengesetzter Wörter", tx4: "Die Bedeutung eines zusammengesetzten Wortes ergibt sich aus der Logik der Vereinigung der ursprünglichen Wörter.",
    q4: "Was bedeutet 'ceruzatartó'?", a4: "Etwas, das zum Lagern von Stiften verwendet wird", b4: "Etwas mit Bleistift", c4: "Etwas, das nach Stiften sucht", d4: "Etwas, das Stifte hält",

    t5: "Üben mit zusammengesetzten Wörtern", tx5: "Wir können zusammengesetzte Wörter bilden und zerlegen, indem wir unseren Wortschatz nutzen.",
    q5: "Welches zusammengesetzte Wort ist korrekt geschrieben?", a5: "teacsészé", b5: "teacsészé", c5: "tea-csészé", d5: "tea csészé",
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
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a52" />
          <rect x="20" y="50" width="50" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="45" y="82" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">nap</text>
          <text x="100" y="82" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <rect x="130" y="50" width="50" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="155" y="82" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">ló</text>
          <text x="220" y="82" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">=</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="60" cy="80" r="25" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="85" textAnchor="middle" fontSize="20" fill="#B44DFF" fontWeight="bold">🖊️</text>
          <circle cx="120" cy="80" r="25" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="85" textAnchor="middle" fontSize="20" fill="#B44DFF" fontWeight="bold">📦</text>
          <circle cx="180" cy="80" r="25" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="180" y="85" textAnchor="middle" fontSize="20" fill="#B44DFF" fontWeight="bold">🏠</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="20" y="50" width="45" height="50" rx="4" fill="#FF6B9D" opacity="0.4" stroke="#FF6B9D" strokeWidth="2" />
          <text x="42" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">szék</text>
          <text x="75" y="82" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">+</text>
          <rect x="95" y="50" width="45" height="50" rx="4" fill="#FF6B9D" opacity="0.4" stroke="#FF6B9D" strokeWidth="2" />
          <text x="117" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">szín</text>
          <text x="150" y="82" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">=</text>
          <rect x="160" y="50" width="60" height="50" rx="4" fill="#FF6B9D" opacity="0.4" stroke="#FF6B9D" strokeWidth="2" />
          <text x="190" y="82" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">székszín</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="120" y="45" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">ceruzatartó =</text>
          <rect x="30" y="55" width="180" height="85" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="45" y="80" fontSize="11" fill="#4ECDC4">ceruza (szín írás eszköz)</text>
          <text x="45" y="100" fontSize="11" fill="#4ECDC4">tartó (tárol, megőriz)</text>
          <text x="45" y="120" fontSize="11" fill="#4ECDC4">= Amit ceruzák tárolásához használunk</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="30" y="40" width="180" height="100" rx="8" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="40" y="65" fontSize="11" fill="#95E1D3">1. teacsészé (❌)</text>
          <text x="40" y="85" fontSize="11" fill="#95E1D3">2. tea csészé (❌)</text>
          <text x="40" y="105" fontSize="11" fill="#95E1D3">3. tea-csészé (❌)</text>
          <text x="40" y="125" fontSize="11" fill="#95E1D3">4. teáscsésze (✓)</text>
          <circle cx="220" cy="125" r="6" fill="#95E1D3" />
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function CompoundWordsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
