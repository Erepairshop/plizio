"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Főnevek", tx1: "A főnév dolog, személy vagy lény neve. Például: kutya, szék, Péter, város.",
    q1: "Melyik a főnév?", a1: "kutya", b1: "szép", c1: "fut", d1: "nagyon",

    t2: "Igék", tx2: "Az ige cselekvést, történést vagy állapotot kifejez. Például: fut, olvas, alszik, játszik.",
    q2: "Melyik az ige?", a2: "szarka", b2: "szépen", c2: "sétál", d2: "gyors",

    t3: "Melléknevek", tx3: "A melléknév a főnevet jellemzi. Például: piros, nagy, szép, hideg.",
    q3: "Melyik a melléknév?", a3: "okos", b3: "szeretni", c3: "szobában", d3: "valamikor",

    t4: "Szóösszetételek", tx4: "Két vagy több szó összekapcsolódásakor szóösszetétel keletkezik. Például: napló = nap + ló.",
    q4: "Az alábbiak közül melyik szóösszetétel?", a4: "ceruzatartó", b4: "szarka", c4: "játszik", d4: "meleg",

    t5: "Szófajok összefoglalása", tx5: "A szófajok segítik a szöveg megértését és helyes felépítését.",
    q5: "Válassz ki egy főnevet az alábbiak közül!", a5: "virág", b5: "zöld", c5: "szikra", d5: "szalad",
  },
  de: {
    t1: "Hauptwörter", tx1: "Das Hauptwort (Substantiv) ist der Name eines Gegenstandes, einer Person oder eines Wesens. Zum Beispiel: Hund, Stuhl, Péter, Stadt.",
    q1: "Welches ist ein Hauptwort?", a1: "Hund", b1: "schön", c1: "läuft", d1: "sehr",

    t2: "Verben", tx2: "Das Verb drückt eine Handlung, ein Geschehen oder einen Zustand aus. Zum Beispiel: läuft, liest, schläft, spielt.",
    q2: "Welches ist ein Verb?", a2: "Elster", b2: "schön", c2: "spaziert", d2: "schnell",

    t3: "Adjektive", tx3: "Das Adjektiv beschreibt das Hauptwort. Zum Beispiel: rot, groß, schön, kalt.",
    q3: "Welches ist ein Adjektiv?", a3: "weise", b3: "lieben", c3: "im Zimmer", d3: "irgendwann",

    t4: "Zusammengesetzte Wörter", tx4: "Wenn zwei oder mehr Wörter verbunden werden, entsteht ein zusammengesetztes Wort.",
    q4: "Welches ist ein zusammengesetztes Wort?", a4: "Stifthalter", b4: "Elster", c4: "spielt", d4: "warm",

    t5: "Wortarten zusammengefasst", tx5: "Die Wortarten helfen uns, den Text zu verstehen und richtig zu schreiben.",
    q5: "Wähle ein Hauptwort aus!", a5: "Blume", b5: "grün", c5: "Funke", d5: "läuft",
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
          <circle cx="60" cy="80" r="30" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="85" textAnchor="middle" fontSize="36" fill="#4ECDC4">🐕</text>
          <circle cx="180" cy="80" r="30" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="180" y="85" textAnchor="middle" fontSize="36" fill="#4ECDC4">🪑</text>
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
          <text x="120" y="50" textAnchor="middle" fontSize="20" fill="#B44DFF" fontWeight="bold">futás</text>
          <path d="M 60 100 L 180 100" stroke="#B44DFF" strokeWidth="3" />
          <circle cx="80" cy="100" r="4" fill="#B44DFF" />
          <circle cx="120" cy="100" r="4" fill="#B44DFF" />
          <circle cx="160" cy="100" r="4" fill="#B44DFF" />
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="30" y="40" width="80" height="80" rx="8" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="70" y="85" textAnchor="middle" fontSize="28" fill="#FF6B9D" fontWeight="bold">piros</text>
          <rect x="130" y="40" width="80" height="80" rx="8" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="170" y="85" textAnchor="middle" fontSize="28" fill="#4ECDC4" fontWeight="bold">nagy</text>
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
          <rect x="20" y="50" width="50" height="50" rx="4" fill="#95E1D3" opacity="0.4" stroke="#95E1D3" strokeWidth="2" />
          <text x="45" y="82" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">ceruza</text>
          <text x="120" y="82" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <rect x="150" y="50" width="50" height="50" rx="4" fill="#95E1D3" opacity="0.4" stroke="#95E1D3" strokeWidth="2" />
          <text x="175" y="82" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">tartó</text>
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
          <circle cx="60" cy="50" r="12" fill="#4ECDC4" />
          <text x="60" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">F</text>
          <circle cx="120" cy="50" r="12" fill="#B44DFF" />
          <text x="120" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">I</text>
          <circle cx="180" cy="50" r="12" fill="#FF6B9D" />
          <text x="180" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">M</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Szófajok</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function WordTypesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
