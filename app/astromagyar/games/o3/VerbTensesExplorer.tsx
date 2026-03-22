"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Múlt idő", tx1: "A múlt idővel a volt eseményekről beszélünk. Például: 'Tegnap sétáltam az erdőben.' Az ige múlt időben -t vagy -tt végződést kap.",
    q1: "Melyik mondat fejezi ki a múlt időt?", a1: "Tegnap sétáltam", b1: "Ma sétálok", c1: "Holnap sétálni fogok", d1: "Éppen sétálok",

    t2: "Jelen idő", tx2: "A jelen idővel most történő eseményekről beszélünk. Például: 'Most éppen olvasok.' Az ige jelen időben alapformában vagy -ok/-ek/-ik végződést kap.",
    q2: "Melyik ige van jelen időben?", a2: "olvasok", b2: "olvastam", c2: "olvasni", d2: "olvasnak",

    t3: "Jövő idő", tx3: "A jövő idővel a majd történő eseményekről beszélünk. Például: 'Holnap futni fogok.' Az ige jövő időben 'fog' segédige mellé kerül.",
    q3: "Melyik mondat fejezi ki a jövő időt?", a3: "Holnap futni fogok", b3: "Tegnap futottam", c3: "Most futok", d3: "Futni szeretek",

    t4: "Igeidők gyakorlása", tx4: "Az igeidők megértése segít világosan elmondani, mikor történik egy cselekvés. Múlt, jelen, jövő.",
    q4: "Az 'elvittem' ige melyik időben van?", a4: "Múlt időben", b4: "Jelen időben", c4: "Jövő időben", d4: "Feltételes módban",

    t5: "Összes igeidő", tx5: "Az igeidők helyes használata fontos a kifejezéshez. Gyakorold az összes igeidőt!",
    q5: "Melyik mondat mutat helyes igeidőt?", a5: "Holnap megfestik a házat", b5: "Holnap megfestik volt a házat", c5: "Holnap megfestett a házat", d5: "Most megfestik a házat",
  },
  de: {
    t1: "Vergangenheit", tx1: "Mit der Vergangenheit sprechen wir über vergangene Ereignisse. Zum Beispiel: 'Gestern bin ich im Wald spaziert.' Das Verb erhält die Endung -t oder -tt.",
    q1: "Welcher Satz drückt die Vergangenheit aus?", a1: "Gestern bin ich spaziert", b1: "Ich spaziere heute", c1: "Morgen werde ich spazieren", d1: "Ich spaziere gerade",

    t2: "Gegenwart", tx2: "Mit der Gegenwart sprechen wir über gerade geschehende Ereignisse. Zum Beispiel: 'Ich lese gerade.' Das Verb hat die Grundform oder die Endung -e.",
    q2: "Welches Verb ist in der Gegenwart?", a2: "Ich lese", b2: "Ich las", c2: "zu lesen", d2: "Sie lesen",

    t3: "Zukunft", tx3: "Mit der Zukunft sprechen wir über künftige Ereignisse. Zum Beispiel: 'Morgen werde ich laufen.' Das Verb steht mit dem Hilfsmittel 'werden'.",
    q3: "Welcher Satz drückt die Zukunft aus?", a3: "Morgen werde ich laufen", b3: "Gestern bin ich gelaufen", c3: "Jetzt laufe ich", d3: "Laufen mögen",

    t4: "Zeiten üben", tx4: "Das Verständnis der Zeiten hilft, ein Geschehen klar auszudrücken. Vergangenheit, Gegenwart, Zukunft.",
    q4: "In welcher Zeit ist das Verb 'ich nahm'?", a4: "Vergangenheit", b4: "Gegenwart", c4: "Zukunft", d4: "Bedingter Modus",

    t5: "Alle Zeiten", tx5: "Die richtige Verwendung der Zeiten ist wichtig zum Ausdruck. Übe alle Zeiten!",
    q5: "Welcher Satz zeigt die richtige Zeit?", a5: "Morgen malt sie das Haus", b5: "Morgen hat sie das Haus gemalt", c5: "Morgen malte sie das Haus", d5: "Jetzt malt sie das Haus",
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
          <circle cx="120" cy="50" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="58" textAnchor="middle" fontSize="24" fill="#4ECDC4">⏳</text>
          <path d="M 40 90 L 200 90" stroke="#4ECDC4" strokeWidth="3" />
          <text x="60" y="130" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">Múlt</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">Jelen</text>
          <text x="180" y="130" textAnchor="middle" fontSize="12" fill="#B44DFF" fontWeight="bold">Jövő</text>
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
          <circle cx="120" cy="80" r="35" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="92" textAnchor="middle" fontSize="16" fill="#B44DFF" fontWeight="bold">MOST</text>
          <text x="120" y="110" textAnchor="middle" fontSize="12" fill="#B44DFF">olvasok</text>
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
          <path d="M 40 80 L 200 80" stroke="#FF6B9D" strokeWidth="2" />
          <circle cx="40" cy="80" r="8" fill="#FF6B9D" />
          <text x="40" y="105" textAnchor="middle" fontSize="10" fill="#FF6B9D" fontWeight="bold">Múlt</text>
          <circle cx="120" cy="80" r="8" fill="#FF6B9D" />
          <text x="120" y="105" textAnchor="middle" fontSize="10" fill="#FF6B9D" fontWeight="bold">Most</text>
          <circle cx="200" cy="80" r="10" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="200" y="105" textAnchor="middle" fontSize="10" fill="#95E1D3" fontWeight="bold">Jövő ➜</text>
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
          <rect x="40" y="50" width="60" height="60" rx="6" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="70" y="75" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">elvittem</text>
          <text x="70" y="95" textAnchor="middle" fontSize="11" fill="#4ECDC4">Múlt</text>
          <rect x="140" y="50" width="60" height="60" rx="6" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="170" y="75" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">viselj</text>
          <text x="170" y="95" textAnchor="middle" fontSize="11" fill="#95E1D3">Parancs</text>
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
          <circle cx="50" cy="50" r="16" fill="#4ECDC4" opacity="0.8" />
          <text x="50" y="58" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">-tam</text>
          <circle cx="120" cy="50" r="16" fill="#B44DFF" opacity="0.8" />
          <text x="120" y="58" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">-ok</text>
          <circle cx="190" cy="50" r="16" fill="#95E1D3" opacity="0.8" />
          <text x="190" y="58" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">-fog</text>
          <text x="50" y="120" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Múlt</text>
          <text x="120" y="120" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Jelen</text>
          <text x="190" y="120" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Jövő</text>
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

export default function VerbTensesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
