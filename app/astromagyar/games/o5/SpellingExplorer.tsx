"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Az ly/j szabály", tx1: "Az ly betűpáros ó-magyar eredetű szavakban marad: elég, folyó, kályha. Új szavakban j-t írunk: jó, járom, gitár helyett gijtár helyett gitár.",
    q1: "Melyik szóban helyes az ly?", a1: "folyó", b1: "jó", c1: "járom", d1: "jótékony",
    t2: "Egybe- és különírás 1", tx2: "Összetett szavakat egybeírunk: naplevendula, almafa. De az összetétel előtagja ha melléknév vagy határozó: sok gyerek, messze lévő. Ide nem vonatkozik az egybeirás.",
    q2: "Melyik helyesen írott?", a2: "naplevendula", b2: "nap levendula", c2: "nap-levendula", d2: "Naplevendula",
    t3: "Egybe- és különírás 2", tx3: "A főnév + ige összetételek gyakran egybeírnak: sétálunk (séta + álni), de: szoba takarít (két szó, nem összetétel).",
    q3: "Melyik helyesen összeírva?", a3: "hazamegy", b3: "ház menj", c3: "házba megy", d3: "házhoz megy",
    t4: "A kötőjel használata", tx4: "Kötőjellel írunk: összetételek rövidítéseit (párt-képviselő), fél-oldal-hosszú szavakat, és határozott szócsoportokat (három-négy éves).",
    q4: "Melyik helyesen van írva kötőjellel?", a4: "három-négy éves", b4: "három négy-éves", c4: "háromnegy-éves", d4: "három négy éves",
    t5: "Helyesírási készségek", tx5: "A magyar helyesírás rendszere logikus szabályokon alapul. Az újszavak és a visszagondolások időnként megváltoztatják ezeket a szabályokat.",
    q5: "Mi alapja az összetett szavak helyesírásának?", a5: "az értelmi kapcsolat", b5: "az írás hossza", c5: "a kiejtés", d5: "az ábécé sorrendje",
  },
  de: {
    t1: "Die ly/j-Regel", tx1: "Das Buchstabenpaar ly bleibt in altungarischen Wörtern: elég, folyó, kályha. In neuen Wörtern schreiben wir j: jó, járom.",
    q1: "In welchem Wort ist ly richtig?", a1: "folyó", b1: "jó", c1: "járom", d1: "jótékony",
    t2: "Zusammen- und Getrenntschreibung 1", tx2: "Zusammengesetzte Wörter schreiben wir zusammen: naplevendula, almafa. Aber das Präfix muss getrennt sein, wenn es ein Adjektiv ist: sok gyerek.",
    q2: "Welches ist richtig geschrieben?", a2: "naplevendula", b2: "nap levendula", c2: "nap-levendula", d2: "Naplevendula",
    t3: "Zusammen- und Getrenntschreibung 2", tx3: "Substantiv + Verb-Zusammensetzungen schreiben wir oft zusammen: sétálunk (séta + álni), aber: szoba takarít (zwei Wörter, keine Zusammensetzung).",
    q3: "Welches ist richtig zusammengeschrieben?", a3: "hazamegy", b3: "ház menj", c3: "házba megy", d3: "házhoz megy",
    t4: "Die Verwendung des Bindestrichs", tx4: "Wir schreiben mit Bindestrich: Abkürzungen von Zusammensetzungen (párt-képviselő), halb-Wörter, und bestimmte Wortgruppen (három-négy éves).",
    q4: "Welches ist richtig mit Bindestrich geschrieben?", a4: "három-négy éves", b4: "három négy-éves", c4: "háromnegy-éves", d4: "három négy éves",
    t5: "Orthographiefähigkeiten", tx5: "Das ungarische Schreibsystem basiert auf logischen Regeln. Neue Wörter und Veränderungen modifizieren manchmal diese Regeln.",
    q5: "Was ist die Grundlage für die Schreibweise zusammengesetzter Wörter?", a5: "die semantische Beziehung", b5: "die Schreiblernlänge", c5: "die Aussprache", d5: "die alphabetische Reihenfolge",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%)" }}>
          <defs>
            <linearGradient id="lyGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff9800", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#e65100", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <rect x="30" y="40" width="80" height="80" rx="8" fill="url(#lyGrad)" />
          <text x="70" y="100" textAnchor="middle" fontSize="28" fill="white" fontWeight="bold">ly</text>
          <text x="70" y="130" textAnchor="middle" fontSize="10" fill="#e65100">folyó, kályha</text>
          <rect x="130" y="40" width="80" height="80" rx="8" fill="#ffb74d" opacity="0.6" />
          <text x="170" y="100" textAnchor="middle" fontSize="28" fill="white" fontWeight="bold">j</text>
          <text x="170" y="130" textAnchor="middle" fontSize="10" fill="#e65100">új szavak</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)" }}>
          <defs>
            <linearGradient id="joinGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4caf50", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#1b5e20", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <rect x="20" y="50" width="90" height="60" rx="6" fill="url(#joinGrad)" />
          <text x="65" y="85" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">nap+levendula</text>
          <text x="65" y="130" textAnchor="middle" fontSize="10" fill="#1b5e20">= naplevendula</text>
          <rect x="130" y="50" width="90" height="60" rx="6" fill="#7cb342" opacity="0.6" />
          <text x="175" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">alma+fa</text>
          <text x="175" y="130" textAnchor="middle" fontSize="10" fill="#1b5e20">= almafa</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)" }}>
          <defs>
            <linearGradient id="verbGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#1976d2", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#0d47a1", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <rect x="25" y="50" width="85" height="70" rx="6" fill="url(#verbGrad)" />
          <text x="67.5" y="100" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">ház + megy</text>
          <text x="67.5" y="130" textAnchor="middle" fontSize="10" fill="#0d47a1">hazamegy</text>
          <rect x="130" y="50" width="85" height="70" rx="6" fill="#42a5f5" opacity="0.6" />
          <text x="172.5" y="100" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">szoba+takarít</text>
          <text x="172.5" y="130" textAnchor="middle" fontSize="10" fill="#0d47a1">szoba takarít</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)" }}>
          <defs>
            <linearGradient id="hyphenGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#7b1fa2", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#4a148c", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <rect x="20" y="50" width="200" height="70" rx="6" fill="url(#hyphenGrad)" />
          <text x="120" y="95" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">három-négy éves</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#4a148c">kötőjellel összeírva</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)" }}>
          <defs>
            <linearGradient id="spellGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#c2185b", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#880e4f", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="70" r="25" fill="url(#spellGrad)" />
          <text x="60" y="75" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Szabály</text>
          <path d="M 85 70 L 115 70" stroke="#c2185b" strokeWidth="2" />
          <circle cx="160" cy="70" r="25" fill="url(#spellGrad)" />
          <text x="160" y="75" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Logika</text>
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="#880e4f" fontWeight="bold">= Rendszer</text>
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

export default function SpellingExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
