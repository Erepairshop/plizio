"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Fogalmazás - Elbeszélés", tx1: "Az elbeszélésben egy eseményt vagy történetet meséltünk el. Van kezdete, közepe és vége.",
    q1: "Melyik az elbeszélés jellegzetessége?", a1: "időrend szerinti szöveg", b1: "szógyűjtés", c1: "szóképzés", d1: "kérdések felsorolása",

    t2: "Fogalmazás - Leírás", tx2: "A leírásban egy dolgot, helyet vagy személyt részletesen írunk le. Az érzékszerveink alapján írjuk le.",
    q2: "Mit írunk le leírásban?", a2: "eseményt időrendben", b2: "dolog vagy hely jellemzőit", c2: "kérdéseket", d2: "szavak jelentését",

    t3: "Szövegszerkesztés", tx3: "A szöveg összerakása értelmesnek és folytonosnak kell lennie. Össze kell kötni az ötleteket.",
    q3: "Mit jelent a szövegszerkesztés?", a3: "szavak felsorolása", b3: "ötletek összekötése", c3: "kérdések feltevése", d3: "szavak megismétlése",

    t4: "Nyelvtani helyes fogalmazás", tx4: "A fogalmazásban ügyelni kell a nyelvtani helyesírásra, szórendjére, ragozásra.",
    q4: "Melyik fontos a fogalmazásban?", a4: "nyelvtani helyesség", b4: "szavak száma", c4: "betűnagyság", d4: "sorfokozat",

    t5: "Kreatív fogalmazás", tx5: "A jó fogalmazás kreatív, érdekes és személyes. Saját gondolataival írunk.",
    q5: "Mit jelent a kreatív fogalmazás?", a5: "saját gondolatok leírása", b5: "szavak másolása", c5: "példák felsorolása", d5: "kérdések felvetése",
  },
  de: {
    t1: "Aufsatz - Erzählung", tx1: "In einer Erzählung erzählen wir ein Ereignis oder eine Geschichte. Es hat einen Anfang, eine Mitte und ein Ende.",
    q1: "Was ist das Merkmal einer Erzählung?", a1: "zeitlich geordneter Text", b1: "Wortsammlung", c1: "Wortbildung", d1: "Aufzählung von Fragen",

    t2: "Aufsatz - Beschreibung", tx2: "In einer Beschreibung beschreiben wir etwas, einen Ort oder eine Person im Detail. Wir beschreiben nach unseren Sinnen.",
    q2: "Was beschreiben wir in einer Beschreibung?", a2: "ein Ereignis zeitlich", b2: "Eigenschaften eines Dinges oder Ortes", c2: "Fragen", d2: "Bedeutung von Wörtern",

    t3: "Textzusammenhang", tx3: "Der Text muss sinnvoll und zusammenhängend sein. Wir müssen die Ideen verbinden.",
    q3: "Was bedeutet Textzusammenhang?", a3: "Aufzählung von Wörtern", b3: "Verbindung von Ideen", c3: "Stellung von Fragen", d3: "Wiederholung von Wörtern",

    t4: "Sprachlich korrekter Aufsatz", tx4: "Im Aufsatz müssen wir auf grammatikalische Korrektheit, Wortstellung und Deklination achten.",
    q4: "Was ist wichtig beim Aufsatz?", a4: "sprachliche Korrektheit", b4: "Anzahl der Wörter", c4: "Schriftgröße", d4: "Einrückung",

    t5: "Kreativer Aufsatz", tx5: "Ein guter Aufsatz ist kreativ, interessant und persönlich. Wir schreiben mit eigenen Gedanken.",
    q5: "Was bedeutet kreatives Schreiben?", a5: "Aufzeichnung eigener Gedanken", b5: "Kopieren von Wörtern", c5: "Aufzählung von Beispielen", d5: "Stellung von Fragen",
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
          <circle cx="50" cy="50" r="12" fill="#4ECDC4" />
          <text x="50" y="56" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">1.</text>
          <circle cx="120" cy="50" r="12" fill="#4ECDC4" />
          <text x="120" y="56" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">2.</text>
          <circle cx="190" cy="50" r="12" fill="#4ECDC4" />
          <text x="190" y="56" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">3.</text>
          <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">Elbeszélés</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="white/60">kezdet-közép-vég</text>
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
          <rect x="40" y="50" width="160" height="60" rx="6" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="13" fill="#FF6B9D" fontWeight="bold">Leírás</text>
          <text x="120" y="100" textAnchor="middle" fontSize="11" fill="white/60">(részletes jellemzés)</text>
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
          <circle cx="60" cy="80" r="16" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ötlet</text>
          <path d="M 80 80 L 100 80" stroke="#FFD700" strokeWidth="2" />
          <circle cx="120" cy="80" r="16" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ötlet</text>
          <path d="M 140 80 L 160 80" stroke="#FFD700" strokeWidth="2" />
          <circle cx="180" cy="80" r="16" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ötlet</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Helyesírás</text>
          <text x="120" y="80" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Szórend</text>
          <text x="120" y="100" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Ragozás</text>
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
          <circle cx="120" cy="70" r="40" fill="none" stroke="#FFD700" strokeWidth="2" />
          <text x="120" y="65" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">💭</text>
          <text x="120" y="85" textAnchor="middle" fontSize="13" fill="#FFD700" fontWeight="bold">Kreativitás</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="white/60">saját gondolatok</text>
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

export default function CompositionO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
