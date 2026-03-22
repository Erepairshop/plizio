"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Helyhatározó",
    tx1: "A helyhatározó azt mutatja, hogy hol, melyik irányba történik a cselekvés: az iskolában, az erdőbe, a ház mellett.",
    q1: "Melyik mondat helyes helyhatározót tartalmaz?",
    a1: "Az gyerek fut az iskolá.",
    b1: "Az gyerek fut az iskolában.",
    c1: "Az gyerek fut az iskolához.",
    d1: "Az gyerek fut az iskolá-ba.",
    t2: "Időhatározó",
    tx2: "Az időhatározó azt mutatja, hogy mikor történik a cselekvés: hétfőn, délután, tavaly, három órakor.",
    q2: "Melyik helyes időhatározó?",
    a2: "Én játszom minden napok.",
    b2: "Én játszom minden nap.",
    c2: "Én játszom a délután.",
    d2: "Én játszom délutánai.",
    t3: "Módhatározó",
    tx3: "A módhatározó azt mutatja, hogy hogyan történik a cselekvés: lassan, vidáman, erősen, csendesen.",
    q3: "Melyik helyes módhatározó?",
    a3: "A macska fut gyors az úton.",
    b3: "A macska fut gyorsan az úton.",
    c3: "A macska fut gyorsul az úton.",
    d3: "A macska fut gyorsította az úton.",
    t4: "Okhatározó",
    tx4: "Az okhatározó azt mutatja, hogy miért történik valami: betegség miatt, szomorúság miatt, radírónál fogva.",
    q4: "Melyik helyes okhatározó?",
    a4: "A gyerek otthon marad szomorúsága miatt.",
    b4: "A gyerek otthon marad szomorú miatt.",
    c4: "A gyerek otthon marad szomorúságot miatt.",
    d4: "A gyerek otthon marad szomorúmódja miatt.",
    t5: "Cél- és eszközhatározó",
    tx5: "A célhatározó azt mutatja, hogy mire, milyen célra, az eszközhatározó azt mutatja, hogy mivel történik: ceruzával, ceruza végzésre.",
    q5: "Melyik helyes cél- vagy eszközhatározó?",
    a5: "A gyerek rajzol ceruza végzésre.",
    b5: "A gyerek rajzol ceruzára.",
    c5: "A gyerek rajzol ceruzával.",
    d5: "A gyerek rajzol ceruza-kal.",
  },
  de: {
    t1: "Lokaladverbial",
    tx1: "Das Lokaladverbial zeigt den Ort oder die Richtung: in der Schule, ins Wald, neben das Haus.",
    q1: "Welcher Satz hat das richtige Lokaladverbial?",
    a1: "Das Kind läuft die Schule.",
    b1: "Das Kind läuft in der Schule.",
    c1: "Das Kind läuft zur Schule.",
    d1: "Das Kind läuft auf Schule.",
    t2: "Temporaladverbial",
    tx2: "Das Temporaladverbial zeigt die Zeit: am Montag, am Nachmittag, letztes Jahr, um drei Uhr.",
    q2: "Welches Temporaladverbial ist richtig?",
    a2: "Ich spielen jeden Tagen.",
    b2: "Ich spielen jeden Tag.",
    c2: "Ich spielen am Nachmittagen.",
    d2: "Ich spielen nachmittägig.",
    t3: "Modaladverbial",
    tx3: "Das Modaladverbial zeigt die Art: langsam, glücklich, stark, leise.",
    q3: "Welches Modaladverbial ist richtig?",
    a3: "Die Katze läuft schnell auf die Straße.",
    b3: "Die Katze läuft schnelle auf die Straße.",
    c3: "Die Katze läuft schnellen auf die Straße.",
    d3: "Die Katze läuft schnellung auf die Straße.",
    t4: "Kausaladverbial",
    tx4: "Das Kausaladverbial zeigt den Grund: wegen Krankheit, aus Traurigkeit, für das Ziel.",
    q4: "Welches Kausaladverbial ist richtig?",
    a4: "Das Kind bleibt zu Hause wegen Traurigkeit.",
    b4: "Das Kind bleibt zu Hause traurig wegen.",
    c4: "Das Kind bleibt zu Hause aus Traurigkeit.",
    d4: "Das Kind bleibt zu Hause traurig-heit.",
    t5: "Ziel- und Instrumentaladverbial",
    tx5: "Zieladverbial zeigt das Ziel, Instrumentaladverbial zeigt das Werkzeug: mit Bleistift, zum Ziel.",
    q5: "Welches Ziel- oder Instrumentaladverbial ist richtig?",
    a5: "Das Kind zeichnet Bleistift-ziel.",
    b5: "Das Kind zeichnet zum Bleistift.",
    c5: "Das Kind zeichnet mit Bleistift.",
    d5: "Das Kind zeichnet aus Bleistift.",
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
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <rect x="30" y="50" width="50" height="70" rx="4" fill="#FF6B6B" />
            <text x="55" y="105" textAnchor="middle" fontSize="11">
              iskolá
            </text>
          </g>
          <g opacity="0.4">
            <circle cx="150" cy="90" r="30" fill="#4ECDC4" />
            <text x="150" y="95" textAnchor="middle" fontSize="12">
              hol?
            </text>
          </g>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "b1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="60" y="85" textAnchor="middle" fontSize="36">
            🕐
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="36">
            📅
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Időhatározó
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "b2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <path d="M 120,130 Q 100,80 120,40" stroke="#FFE66D" strokeWidth="3" fill="none" />
            <path d="M 120,130 Q 140,80 120,40" stroke="#FFE66D" strokeWidth="3" fill="none" />
          </g>
          <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#FFF">
            hogyan?
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "b3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="120" cy="80" r="40" fill="#B44DFF" opacity="0.2" />
          <text x="120" y="88" textAnchor="middle" fontSize="28">
            🤔
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "a4",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="80" y="85" textAnchor="middle" fontSize="32">
            🎯
          </text>
          <text x="160" y="85" textAnchor="middle" fontSize="32">
            🔧
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="11" fill="#AAA">
            Cél- és eszközhatározó
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "c5",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AdverbialsExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
