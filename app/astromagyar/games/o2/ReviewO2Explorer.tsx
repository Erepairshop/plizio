"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szófajok végzős próba", tx1: "Most ismételjük meg az alapvető szófajokat: főnév, ige, melléknév, névmás, számnév.",
    q1: "Melyik a főnév?", a1: "kalap", b1: "sietni", c1: "szép", d1: "azon",

    t2: "Helyesírás feladatok", tx2: "Vigyázz az ékezetekre, a nagybetűkre és az egybe-különírásra!",
    q2: "Melyik szó írása helyes?", a2: "Kedd", b2: "kedd", c2: "Anya", d2: "apja",

    t3: "Mondattan", tx3: "Az angol mondatnak vannak részei: alany, állítmány, tárgy, határozó.",
    q3: "Mely szó az alany a mondatban: 'A kutya fut.'?", a3: "kutya", b3: "fut", c3: "a", d3: "pont",

    t4: "Szókincs", tx4: "Milyen jól tanultad meg az új szavakat és szócsaládokat?",
    q4: "Melyik szó rokon értelmű az 'nagyszerű'-vel?", a4: "apró", b4: "szörnyen", c4: "csodálatos", d4: "gyengén",

    t5: "Végeredmény", tx5: "Gratulálok! Befejezted a 2. osztályos magyar nyelv nagy próbáját. Jól dolgoztál!",
    q5: "Mit szoktál a legjobban csinálni a magyar órán?", a5: "olvasni", b5: "írni", c5: "beszélni", d5: "mindent",
  },
  de: {
    t1: "Wortarten Abschlussprüfung", tx1: "Wiederholen wir die grundlegenden Wortarten: Substantiv, Verb, Adjektiv, Pronomen, Numerale.",
    q1: "Welches ist ein Substantiv?", a1: "Hut", b1: "eilen", c1: "schön", d1: "jener",

    t2: "Rechtschreibung", tx2: "Achte auf Diakritika, Großbuchstaben und Getrennt-/Zusammenschreibung!",
    q2: "Welches Wort ist korrekt geschrieben?", a2: "Dienstag", b2: "dienstag", c2: "Mutter", d2: "vater",

    t3: "Satzlehre", tx3: "Ein Satz hat Teile: Subjekt, Prädikat, Objekt, Adverbiale.",
    q3: "Welches Wort ist das Subjekt im Satz 'Der Hund läuft'?", a3: "Hund", b3: "läuft", c3: "der", d3: "Punkt",

    t4: "Wortschatz", tx4: "Wie gut hast du die neuen Wörter und Wortfamilien gelernt?",
    q4: "Welches Wort bedeutet dasselbe wie 'herrlich'?", a4: "winzig", b4: "furchtbar", c4: "wunderbar", d4: "schwach",

    t5: "Endergebnis", tx5: "Glückwunsch! Du hast die Abschlussprüfung für Ungarisch 2. Klasse bestanden. Gute Arbeit!",
    q5: "Was magst du am liebsten im Ungarischunterricht?", a5: "lesen", b5: "schreiben", c5: "sprechen", d5: "alles",
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
          <circle cx="60" cy="80" r="20" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">F</text>
          <circle cx="120" cy="80" r="20" fill="#B44DFF" opacity="0.4" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">I</text>
          <circle cx="180" cy="80" r="20" fill="#FF6B9D" opacity="0.4" stroke="#FF6B9D" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">M</text>
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
          <text x="120" y="50" textAnchor="middle" fontSize="16" fill="#95E1D3" fontWeight="bold">ékezet</text>
          <text x="60" y="95" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">á é í ó ú</text>
          <text x="180" y="95" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">ő ű</text>
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
          <rect x="15" y="50" width="50" height="50" rx="4" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="1" />
          <text x="40" y="78" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">alany</text>
          <rect x="80" y="50" width="50" height="50" rx="4" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="1" />
          <text x="105" y="78" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">ige</text>
          <rect x="145" y="50" width="50" height="50" rx="4" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="1" />
          <text x="170" y="78" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">tárgy</text>
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
          <rect x="30" y="60" width="100" height="50" rx="6" fill="#B44DFF" opacity="0.2" stroke="#B44DFF" strokeWidth="2" />
          <text x="80" y="85" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">szókincs</text>
          <path d="M 135 85 L 155 85" stroke="#FFD700" strokeWidth="2" />
          <circle cx="185" cy="85" r="18" fill="#FFD700" opacity="0.2" stroke="#FFD700" strokeWidth="2" />
          <text x="185" y="90" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">új</text>
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
          <circle cx="120" cy="70" r="30" fill="none" stroke="#FFD700" strokeWidth="2" />
          <text x="120" y="60" textAnchor="middle" fontSize="20" fill="#FFD700" fontWeight="bold">🏆</text>
          <text x="120" y="130" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">Gratulálok!</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "d5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function ReviewO2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
