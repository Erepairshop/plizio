"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Mondatelemzés alapjai", tx1: "A mondat elemzésével látható, hogy az összes szó melyik részhez tartozik, és melyik végzi a cselekvést.",
    q1: "Mit jelent a mondatelemzés?", a1: "mondat részei felsorolása", b1: "szavak ismétlése", c1: "szavak felsorolása", d1: "szavak írása",

    t2: "Az alany", tx2: "Az alany az a személy vagy dolog, amely végzi a cselekvést. Például: 'A kutya fut.' Az alany: 'a kutya'.",
    q2: "Melyik az alany? 'A macska alszik.'", a2: "alszik", b2: "a", c2: "a macska", d2: "hely",

    t3: "Az állítmány", tx3: "Az állítmány a cselekvés vagy állapot. Az ige fejezi ki az állítmányt. Például: 'A kutya fut.' Az állítmány: 'fut'.",
    q3: "Melyik az állítmány? 'A fiú olvas.'", a3: "a fiú", b3: "olvas", c3: "a", d3: "könyv",

    t4: "A tárgy", tx4: "A tárgy az, amit csinálnak valamit. Például: 'Péter olvasott egy könyvet.' A tárgy: 'egy könyvet'.",
    q4: "Melyik a tárgy? 'Anna festett egy képet.'", a4: "Anna", b4: "festett", c5: "egy képet", d4: "szín",

    t5: "Mondatelemzés gyakorlása", tx5: "Az elemzés segít megérteni a mondat szerkezetét és a szavak szerepét.",
    q5: "Válassz helyesen! 'A lány játszik' Mely szó az alany?", a5: "a lány", b5: "játszik", c5: "a", d5: "játék",
  },
  de: {
    t1: "Satzanalyse Grundlagen", tx1: "Bei der Satzanalyse wird sichtbar, zu welchem Teil jedes Wort gehört und wer die Aktion ausführt.",
    q1: "Was bedeutet Satzanalyse?", a1: "Aufzählung von Satzteilen", b1: "Wiederholung von Wörtern", c1: "Aufzählung von Wörtern", d1: "Schreiben von Wörtern",

    t2: "Das Subjekt", tx2: "Das Subjekt ist die Person oder Sache, die die Aktion ausführt. Zum Beispiel: 'Der Hund läuft.' Das Subjekt: 'der Hund'.",
    q2: "Welches ist das Subjekt? 'Die Katze schläft.'", a2: "schläft", b2: "die", c2: "die Katze", d2: "Ort",

    t3: "Das Prädikat", tx3: "Das Prädikat ist die Aktion oder der Zustand. Das Verb drückt das Prädikat aus. Zum Beispiel: 'Der Hund läuft.' Das Prädikat: 'läuft'.",
    q3: "Welches ist das Prädikat? 'Der Junge liest.'", a3: "der Junge", b3: "liest", c3: "der", d3: "Buch",

    t4: "Das Objekt", tx4: "Das Objekt ist das, woran etwas getan wird. Zum Beispiel: 'Peter las ein Buch.' Das Objekt: 'ein Buch'.",
    q4: "Welches ist das Objekt? 'Anna malte ein Bild.'", a4: "Anna", b4: "malte", c4: "ein Bild", d4: "Farbe",

    t5: "Satzanalyse üben", tx5: "Die Analyse hilft, die Satzstruktur und die Rolle der Wörter zu verstehen.",
    q5: "Wähle richtig! 'Das Mädchen spielt' Welches Wort ist das Subjekt?", a5: "das Mädchen", b5: "spielt", c5: "das", d5: "Spiel",
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
          <path d="M 40 80 L 80 80 L 100 60 L 120 80 L 160 80 L 180 60 L 200 80" stroke="#4ECDC4" strokeWidth="2" fill="none" />
          <circle cx="40" cy="80" r="5" fill="#4ECDC4" />
          <circle cx="80" cy="80" r="5" fill="#4ECDC4" />
          <circle cx="120" cy="80" r="5" fill="#4ECDC4" />
          <circle cx="160" cy="80" r="5" fill="#4ECDC4" />
          <circle cx="200" cy="80" r="5" fill="#4ECDC4" />
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Mondatelemzés</text>
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
          <rect x="30" y="55" width="90" height="50" rx="4" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="75" y="85" textAnchor="middle" fontSize="13" fill="#FF6B9D" fontWeight="bold">A kutya</text>
          <text x="140" y="85" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">→</text>
          <text x="180" y="75" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">alany</text>
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
          <rect x="30" y="55" width="90" height="50" rx="4" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="75" y="85" textAnchor="middle" fontSize="13" fill="#95E1D3" fontWeight="bold">olvas</text>
          <text x="140" y="85" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">→</text>
          <text x="180" y="75" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">állítmány</text>
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
          <rect x="30" y="55" width="90" height="50" rx="4" fill="#B44DFF" opacity="0.3" stroke="#B44DFF" strokeWidth="2" />
          <text x="75" y="85" textAnchor="middle" fontSize="13" fill="#B44DFF" fontWeight="bold">egy képet</text>
          <text x="140" y="85" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">→</text>
          <text x="180" y="75" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">tárgy</text>
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
          <circle cx="60" cy="80" r="18" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">alany</text>
          <circle cx="120" cy="80" r="18" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">áll.</text>
          <circle cx="180" cy="80" r="18" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">tárgy</text>
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
