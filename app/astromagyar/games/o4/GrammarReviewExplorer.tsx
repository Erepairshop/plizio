"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Nyelvtani összefoglalás", tx1: "Az 4. osztályban megtanultunk szófajokról, ragozásról, igeidőkről és még sok másról.",
    q1: "Melyik a melléknév?", a1: "gyors", b1: "gyorsan", c1: "gyorsít", d1: "gyorsulás",

    t2: "Szófajok", tx2: "Szófajok: főnév, ige, melléknév, határzó, névmás, számnév, elöljáró, kötőszó.",
    q2: "Melyik a határozó?", a2: "szép", b2: "szépen", c2: "szépség", d2: "szépíteni",

    t3: "Mondatszerkesztés", tx3: "A mondat felépítése: alany + állítmány + (tárgy/határozó).",
    q3: "Mi az alany a mondatban: 'A gyerek játszik'?", a3: "játszik", b3: "a", c3: "a gyerek", d3: "játék",

    t4: "Összetett mondatok", tx4: "Összetett mondatok mellékmondatokkal vagy más mondatokkal összekapcsolódnak.",
    q4: "Mit jelent az összetett mondat?", a4: "egy egyszerű mondat", b4: "több mondat egy szövegben", c4: "több mondat, összekötve", d4: "rövid mondat",

    t5: "Nagy végzés", tx5: "Gratulálok! Az 4. osztályos magyar nyelvtanulmányokat befejezted. Jó munkát végez!",
    q5: "Milyen volt az év?", a5: "nehéz", b5: "szép", c5: "tanulságos", d5: "vidám",
  },
  de: {
    t1: "Grammatikzusammenfassung", tx1: "In der 4. Klasse haben wir viel über Wortarten, Deklination, Zeiten und mehr gelernt.",
    q1: "Welches ist ein Adjektiv?", a1: "schnell", b1: "schnell (Adverb)", c1: "beschleunigen", d1: "Schnelligkeit",

    t2: "Wortarten", tx2: "Wortarten: Substantiv, Verb, Adjektiv, Adverb, Pronomen, Numerale, Präposition, Konjunktion.",
    q2: "Welches ist ein Adverb?", a2: "schön", b2: "schön (Adverb)", c2: "Schönheit", d2: "verschönern",

    t3: "Satzaufbau", tx3: "Der Satzaufbau: Subjekt + Prädikat + (Objekt/Adverbiale).",
    q3: "Was ist das Subjekt im Satz: 'Das Kind spielt'?", a3: "spielt", b3: "das", c3: "das Kind", d3: "Spiel",

    t4: "Zusammengesetzte Sätze", tx4: "Zusammengesetzte Sätze sind mit Nebensätzen oder anderen Sätzen verbunden.",
    q4: "Was bedeutet ein zusammengesetzter Satz?", a4: "ein einfacher Satz", b4: "mehrere Sätze in einem Text", c4: "mehrere Sätze verbunden", d4: "kurzer Satz",

    t5: "Großes Ende", tx5: "Glückwunsch! Du hast dein 4. Schuljahr Deutsch abgeschlossen. Gute Arbeit!",
    q5: "Wie war das Jahr?", a5: "schwer", b5: "schön", c5: "lehrreich", d5: "lustig",
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
          <circle cx="60" cy="80" r="18" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">szófaj</text>
          <circle cx="120" cy="80" r="18" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">szófaj</text>
          <circle cx="180" cy="80" r="18" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">szófaj</text>
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
          <rect x="30" y="50" width="180" height="60" rx="6" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="85" textAnchor="middle" fontSize="13" fill="#B44DFF" fontWeight="bold">8 szófaj</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="80" y="70" fontSize="12" fill="#4ECDC4" fontWeight="bold">alany</text>
          <text x="80" y="90" fontSize="12" fill="#4ECDC4" fontWeight="bold">+ állítmány</text>
          <text x="80" y="110" fontSize="12" fill="#4ECDC4" fontWeight="bold">= mondat</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "c3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <rect x="20" y="50" width="200" height="60" rx="8" fill="none" stroke="#FFD700" strokeWidth="2" />
          <text x="120" y="85" textAnchor="middle" fontSize="13" fill="#FFD700" fontWeight="bold">Összetett mondat</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="120" cy="70" r="35" fill="none" stroke="#FFD700" strokeWidth="2" />
          <circle cx="120" cy="70" r="30" fill="#FFD700" opacity="0.15" />
          <text x="120" y="75" textAnchor="middle" fontSize="22" fill="#FFD700" fontWeight="bold">🏆</text>
          <text x="120" y="130" textAnchor="middle" fontSize="13" fill="#FFD700" fontWeight="bold">Vég!</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "c5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function GrammarReviewExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
