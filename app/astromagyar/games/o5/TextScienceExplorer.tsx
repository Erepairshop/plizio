"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szövegtípusok", tx1: "A szövegeket különbözőképpen csoportosíthatjuk: elbeszélő, leíró, érvelő, utasító. Mindegyiknek saját célja van.",
    q1: "Melyik szövegtípus egy receptet tartalmaz?", a1: "utasító", b1: "elbeszélő", c1: "leíró", d1: "érvelő",
    t2: "Szöveg összekapcsolása", tx2: "A szöveg mondatait összekötő szavak: ezért, azonban, továbbá, például, ráadásul. Ezek a szöveg kohézióját erősítik.",
    q2: "Melyik szó a szövegben logikus kapcsolatot mutat?", a2: "azonban", b2: "szék", c2: "kutya", d2: "piros",
    t3: "Bekezdések szerkezete", tx3: "Egy jó bekezdésnek van fő gondolata és támogató mondatai. Az első mondat gyakran a legfontosabb.",
    q3: "Melyik a bekezdés fő gondolata?", a3: "az első mondat", b3: "az utolsó mondat", c3: "a leghosszabb mondat", d3: "nincs fő gondolata",
    t4: "Szövegkoherencia", tx4: "A koherencia azt jelenti, hogy a szöveg logikus, egy tárgyról szól, és az ötletek egymáshoz kapcsolódnak.",
    q4: "Mi jelenti azt, hogy egy szöveg koherent?", a4: "az ötletek logikusan követik egymást", b4: "a szöveg nagyon hosszú", c4: "sok szóból áll", d4: "sok bekezdésből áll",
    t5: "Szövegszerkesztés", tx5: "Egy szöveg szerkesztésekor ellenőrizd az összefüggőséget, a nyelvhelyességet és az értelmezhetőséget.",
    q5: "Melyik fontos a szövegszerkesztéskor?", a5: "a koherencia és a nyelvhelyesség", b5: "a szöveghosszúság", c5: "a betűtípus", d5: "a papírszín",
  },
  de: {
    t1: "Texttypen", tx1: "Texte können unterschiedlich klassifiziert werden: erzählend, beschreibend, argumentierend, anweisend. Jeder hat einen eigenen Zweck.",
    q1: "Welcher Texttyp enthält ein Rezept?", a1: "anweisend", b1: "erzählend", c1: "beschreibend", d1: "argumentierend",
    t2: "Textkohäsion", tx2: "Verbindungswörter verbinden Sätze: daher, jedoch, außerdem, zum Beispiel, obendrein. Sie stärken die Textkohäsion.",
    q2: "Welches Wort zeigt logische Verbindung im Text?", a2: "jedoch", b2: "Stuhl", c2: "Hund", d2: "rot",
    t3: "Absatzstruktur", tx3: "Ein guter Absatz hat einen Hauptgedanken und unterstützende Sätze. Der erste Satz ist oft am wichtigsten.",
    q3: "Was ist die Hauptidee eines Absatzes?", a3: "der erste Satz", b3: "der letzte Satz", c3: "der längste Satz", d3: "keine Hauptidee",
    t4: "Textkoheränz", tx4: "Kohärenz bedeutet, dass ein Text logisch ist, über ein Thema spricht und die Ideen verbunden sind.",
    q4: "Was bedeutet, dass ein Text kohärent ist?", a4: "die Ideen folgen logisch aufeinander", b4: "der Text ist sehr lang", c4: "er hat viele Wörter", d4: "er hat viele Absätze",
    t5: "Textbearbeitung", tx5: "Bei der Textbearbeitung überprüfe Kohärenz, Sprachrichtigkeit und Verständlichkeit.",
    q5: "Was ist wichtig beim Textbearbeitung?", a5: "Kohärenz und Sprachrichtigkeit", b5: "die Textlänge", c5: "die Schriftart", d5: "die Papierfarbe",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)" }}>
          <rect x="20" y="30" width="40" height="100" rx="6" fill="#4caf50" opacity="0.3" stroke="#2e7d32" strokeWidth="1.5" />
          <text x="40" y="90" textAnchor="middle" fontSize="12" fill="#1b5e20" fontWeight="bold">Mesél</text>
          <rect x="70" y="30" width="40" height="100" rx="6" fill="#8bc34a" opacity="0.3" stroke="#558b2f" strokeWidth="1.5" />
          <text x="90" y="90" textAnchor="middle" fontSize="12" fill="#33691e" fontWeight="bold">Leír</text>
          <rect x="120" y="30" width="40" height="100" rx="6" fill="#cddc39" opacity="0.3" stroke="#827717" strokeWidth="1.5" />
          <text x="140" y="90" textAnchor="middle" fontSize="12" fill="#556b2f" fontWeight="bold">Vitáz</text>
          <rect x="170" y="30" width="40" height="100" rx="6" fill="#9ccc65" opacity="0.3" stroke="#558b2f" strokeWidth="1.5" />
          <text x="190" y="90" textAnchor="middle" fontSize="12" fill="#33691e" fontWeight="bold">Utasít</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f0f4c3 0%, #dcedc8 100%)" }}>
          <circle cx="50" cy="60" r="20" fill="#afb42b" opacity="0.4" />
          <text x="50" y="65" textAnchor="middle" fontSize="10" fill="#33691e" fontWeight="bold">ezért</text>
          <circle cx="120" cy="60" r="20" fill="#aed581" opacity="0.4" />
          <text x="120" y="65" textAnchor="middle" fontSize="10" fill="#33691e" fontWeight="bold">azonban</text>
          <circle cx="190" cy="60" r="20" fill="#cddc39" opacity="0.4" />
          <text x="190" y="65" textAnchor="middle" fontSize="10" fill="#33691e" fontWeight="bold">pedig</text>
          <path d="M 70 60 L 100 60" stroke="#9ccc65" strokeWidth="2" />
          <path d="M 140 60 L 170 60" stroke="#9ccc65" strokeWidth="2" />
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)" }}>
          <rect x="30" y="20" width="180" height="25" rx="4" fill="#673ab7" opacity="0.3" stroke="#4527a0" strokeWidth="2" />
          <text x="120" y="40" textAnchor="middle" fontSize="10" fill="#311b92" fontWeight="bold">Fő gondolat</text>
          <rect x="30" y="55" width="180" height="20" rx="3" fill="#7e57c2" opacity="0.2" stroke="#512da8" strokeWidth="1" />
          <text x="120" y="70" textAnchor="middle" fontSize="9" fill="#4527a0">Támogató mondat 1</text>
          <rect x="30" y="80" width="180" height="20" rx="3" fill="#7e57c2" opacity="0.2" stroke="#512da8" strokeWidth="1" />
          <text x="120" y="95" textAnchor="middle" fontSize="9" fill="#4527a0">Támogató mondat 2</text>
          <rect x="30" y="105" width="180" height="20" rx="3" fill="#7e57c2" opacity="0.2" stroke="#512da8" strokeWidth="1" />
          <text x="120" y="120" textAnchor="middle" fontSize="9" fill="#4527a0">Záró mondat</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)" }}>
          <defs>
            <linearGradient id="coherenceGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#c2185b", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#880e4f", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="80" r="25" fill="url(#coherenceGrad)" />
          <text x="60" y="85" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Logikus</text>
          <circle cx="120" cy="80" r="25" fill="url(#coherenceGrad)" />
          <text x="120" y="85" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Összefügg</text>
          <circle cx="180" cy="80" r="25" fill="url(#coherenceGrad)" />
          <text x="180" y="85" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Értelmes</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)" }}>
          <rect x="30" y="40" width="50" height="70" rx="6" fill="#00897b" opacity="0.3" stroke="#00695c" strokeWidth="2" />
          <text x="55" y="80" textAnchor="middle" fontSize="14" fill="#004d40" fontWeight="bold">✓</text>
          <text x="55" y="120" textAnchor="middle" fontSize="9" fill="#004d40">Koherencia</text>
          <rect x="95" y="40" width="50" height="70" rx="6" fill="#00bcd4" opacity="0.3" stroke="#0097a7" strokeWidth="2" />
          <text x="120" y="80" textAnchor="middle" fontSize="14" fill="#006064" fontWeight="bold">✓</text>
          <text x="120" y="120" textAnchor="middle" fontSize="9" fill="#006064">Helyesség</text>
          <rect x="160" y="40" width="50" height="70" rx="6" fill="#26c6da" opacity="0.3" stroke="#0097a7" strokeWidth="2" />
          <text x="185" y="80" textAnchor="middle" fontSize="14" fill="#00838f" fontWeight="bold">✓</text>
          <text x="185" y="120" textAnchor="middle" fontSize="9" fill="#00838f">Értelmezés</text>
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

export default function TextScienceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
