"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Mondat részei", tx1: "Minden mondatnak vannak összetevői. A legfontosabbak az alany (ki), az állítmány (mit csinál) és a tárgy (mit).",
    q1: "Mi az alany a mondatban?", a1: "Az, aki vagy ami a cselekvést végzi", b1: "Az igét kifejező szó", c1: "A mondat vége", d1: "A vessző helye",

    t2: "Alany felismerése", tx2: "Az alany a kérdésre válaszol: 'Ki?', 'Mi?' A 'Macska ugrott' mondatban az alany a 'macska'.",
    q2: "Melyik az alany az 'Alma sárga' mondatban?", a2: "Alma", b2: "Sárga", c2: "A szín", d2: "A szó",

    t3: "Állítmány felismerése", tx3: "Az állítmány az a szó, amely kifejezi a cselekvést vagy az állapotot. Általában az ige. 'Suli után futottam haza' - az állítmány: futottam.",
    q3: "Mi az állítmány az 'Én szeretek olvasni' mondatban?", a3: "Szeretek", b3: "Én", c3: "Olvasni", d3: "Én szeretek",

    t4: "Tárgy azonosítása", tx4: "A tárgy az a főnév, amit az ige kifejez. Kérdés: 'Mit?' 'Elolvastam egy könyvet' - a tárgy: egy könyvet.",
    q4: "Melyik a tárgy az 'Lánc a lánc' mondatban?", a4: "a lánc", b4: "Lánc", c4: "a", d4: "Lánc a",

    t5: "Mondatelemzés gyakorlása", tx5: "A mondatelemzés segít a nyelvtan megértésében. Gyakorlásával jobb lesz az írásban és beszédben.",
    q5: "Mit jelent a mondatelemzés?", a5: "A mondat részeinek felismerése és nevesítése", b5: "A mondat utolsó szavának megértése", c5: "Az igék számbavétele", d5: "A szavak hosszának mérése",
  },
  de: {
    t1: "Teile eines Satzes", tx1: "Jeder Satz hat Komponenten. Die wichtigsten sind das Subjekt (wer), das Prädikat (was tut) und das Objekt (was).",
    q1: "Was ist das Subjekt im Satz?", a1: "Der, der oder was die Handlung ausführt", b1: "Das Wort, das das Verb ausdrückt", c1: "Das Ende des Satzes", d1: "Die Stelle des Kommas",

    t2: "Subjekt erkennen", tx2: "Das Subjekt antwortet auf die Frage: 'Wer?', 'Was?' Im Satz 'Die Katze sprang' ist das Subjekt 'Katze'.",
    q2: "Welches ist das Subjekt im Satz 'Der Apfel ist rot'?", a2: "Der Apfel", b2: "Rot", c2: "Die Farbe", d2: "Das Wort",

    t3: "Prädikat erkennen", tx3: "Das Prädikat ist das Wort, das die Handlung oder den Zustand ausdrückt. Normalerweise das Verb. 'Nach der Schule bin ich nach Hause gerannt' - das Prädikat: bin gerannt.",
    q3: "Was ist das Prädikat im Satz 'Ich liebe Lesen'?", a3: "Liebe", b3: "Ich", c3: "Lesen", d3: "Ich liebe",

    t4: "Objekt identifizieren", tx4: "Das Objekt ist das Nomen, das das Verb ausdrückt. Frage: 'Was?' 'Ich las ein Buch' - das Objekt: ein Buch.",
    q4: "Welches ist das Objekt im Satz 'Das Kind spielt eine Flöte'?", a4: "eine Flöte", b4: "Kind", c4: "Das", d4: "spielt",

    t5: "Satzanalyse üben", tx5: "Die Satzanalyse hilft beim Verständnis der Grammatik. Mit Übung wird man besser im Schreiben und Sprechen.",
    q5: "Was bedeutet Satzanalyse?", a5: "Erkennung und Benennung der Teile eines Satzes", b5: "Verständnis des letzten Wortes des Satzes", c5: "Zählen von Verben", d5: "Messung der Wortlänge",
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
          <rect x="30" y="40" width="180" height="80" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="65" fontSize="11" fill="#4ECDC4" fontWeight="bold">Alany</text>
          <text x="120" y="65" fontSize="11" fill="#95E1D3" fontWeight="bold">Állítmány</text>
          <text x="180" y="65" fontSize="11" fill="#B44DFF" fontWeight="bold">Tárgy</text>
          <line x1="50" y1="75" x2="220" y2="75" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.5" />
          <text x="60" y="110" fontSize="9" fill="#4ECDC4">Ki/Mi?</text>
          <text x="120" y="110" fontSize="9" fill="#95E1D3">Mit csinál?</text>
          <text x="180" y="110" fontSize="9" fill="#B44DFF">Mit?</text>
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
          <rect x="40" y="50" width="160" height="50" rx="6" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="70" textAnchor="middle" fontSize="12" fill="#B44DFF" fontWeight="bold">Macska ugrott</text>
          <line x1="40" y1="82" x2="200" y2="82" stroke="#B44DFF" strokeWidth="1" opacity="0.5" />
          <text x="60" y="100" textAnchor="middle" fontSize="10" fill="#4ECDC4" fontWeight="bold">Alany</text>
          <text x="140" y="100" textAnchor="middle" fontSize="10" fill="#95E1D3" fontWeight="bold">Állítmány</text>
          <text x="120" y="135" textAnchor="middle" fontSize="9" fill="white">Ki ugrott? Macska</text>
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
          <rect x="40" y="50" width="160" height="50" rx="6" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="65" textAnchor="middle" fontSize="11" fill="#FF6B9D" fontWeight="bold">Én szeretek olvasni</text>
          <line x1="40" y1="82" x2="200" y2="82" stroke="#FF6B9D" strokeWidth="1" opacity="0.5" />
          <text x="70" y="100" textAnchor="middle" fontSize="9" fill="#95E1D3" fontWeight="bold">Alany (Én)</text>
          <text x="150" y="100" textAnchor="middle" fontSize="9" fill="#B44DFF" fontWeight="bold">Állítmány</text>
          <text x="120" y="135" textAnchor="middle" fontSize="9" fill="white">Mit csinálok? Szeretek</text>
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
          <rect x="40" y="45" width="160" height="60" rx="6" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="60" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Elolvastam egy könyvet</text>
          <text x="60" y="85" fontSize="9" fill="#95E1D3" fontWeight="bold">Alany: én</text>
          <text x="120" y="85" fontSize="9" fill="#4ECDC4" fontWeight="bold">Állítmány</text>
          <text x="180" y="85" fontSize="9" fill="#B44DFF" fontWeight="bold">Tárgy</text>
          <text x="120" y="110" textAnchor="middle" fontSize="9" fill="white">Mit olvastam? Egy könyvet</text>
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
          <circle cx="60" cy="65" r="18" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="72" textAnchor="middle" fontSize="10" fill="#4ECDC4" fontWeight="bold">A</text>
          <circle cx="120" cy="65" r="18" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="72" textAnchor="middle" fontSize="10" fill="#95E1D3" fontWeight="bold">Á</text>
          <circle cx="180" cy="65" r="18" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="180" y="72" textAnchor="middle" fontSize="10" fill="#B44DFF" fontWeight="bold">T</text>
          <line x1="78" y1="65" x2="102" y2="65" stroke="#FF6B9D" strokeWidth="2" />
          <line x1="138" y1="65" x2="162" y2="65" stroke="#FF6B9D" strokeWidth="2" />
          <text x="60" y="130" textAnchor="middle" fontSize="9" fill="white">Alany</text>
          <text x="120" y="130" textAnchor="middle" fontSize="9" fill="white">Állítmány</text>
          <text x="180" y="130" textAnchor="middle" fontSize="9" fill="white">Tárgy</text>
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

export default function SentenceAnalysisO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
