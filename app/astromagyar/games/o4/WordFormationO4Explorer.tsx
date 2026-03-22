"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Képzők: -ás/-és végződés",
    tx1: "Az -ás/-és végződés cselekvést/folyamatot jelöl: tanulás, olvasás, futás, szeretés.",
    q1: "Melyik szó helyes képzővel van alkotva?",
    a1: "tanulás (tanul + ás)",
    b1: "tanulsa (tanul + sa)",
    c1: "tanulse (tanul + se)",
    d1: "tanulites (tanul + ites)",
    t2: "Képzők: -ó/-ő végződés",
    tx2: "A -ó/-ő végződés dolgokat vagy személyeket jelöl: tanító, olvasó, szépség, közösség.",
    q2: "Melyik szó helyes képzővel van alkotva?",
    a2: "tanítás (tanít + ás)",
    b2: "tanító (tanít + ó)",
    c2: "tanitoa (tanít + oa)",
    d2: "tanítoe (tanít + oe)",
    t3: "Előtagok: fel-, le-, ki-, be-",
    tx3: "Az előtagok változtatják az ige jelentését: felolvas, lehúz, kiír, bejön.",
    q3: "Melyik szó helyes előtaggal van alkotva?",
    a3: "olvasás - felolvasás (fel + olvasás)",
    b3: "olvasás - kiiolvasás (ki + olvasás)",
    c3: "olvasás - leolvasás (le + olvasás)",
    d3: "olvasás - beolvasás (be + olvasás)",
    t4: "Jelek: -ik végződés",
    tx4: "A -ik végződés az ige 3. személyű alakját jelzi: szeret-ik, olvas-ik, fut-ik.",
    q4: "Melyik szó helyes -ik végződéssel van írva?",
    a4: "ő szereti az autót.",
    b4: "ő szeretikel az autót.",
    c4: "ő szeretik az autót.",
    d4: "ő szeretükek az autót.",
    t5: "Ragok: birtokos rag -m, -d, -ja/-je",
    tx5: "A birtokos rag jelzi, hogy kit vagy mit birtokol: az én könyvem, a te ceruzád, az ő macskája.",
    q5: "Melyik mondat helyes birtokos raggal van írva?",
    a5: "Az én könyv szép.",
    b5: "Az én könyvem szép.",
    c5: "Az én könyvja szép.",
    d5: "Az én könyved szép.",
  },
  de: {
    t1: "Suffixe: -ung Endung",
    tx1: "Das -ung Suffix bezeichnet Handlung/Prozess: Lesen, Schreiben, Lieben.",
    q1: "Welches Wort hat das richtige Suffix?",
    a1: "Lernen - Lernung",
    b1: "Lernen - Lernung",
    c1: "Lesen - Lesung",
    d1: "Lesen - Leseng",
    t2: "Suffixe: -er/-in Endung",
    tx2: "Das -er/-in Suffix bezeichnet Personen oder Dinge: Lehrer, Schüler, Lehrerin.",
    q2: "Welches Wort hat das richtige Suffix?",
    a2: "lehren - Lehrer",
    b2: "lehren - Lehrin",
    c2: "lehren - Lehrung",
    d2: "lehren - Lehrka",
    t3: "Präfixe: auf-, ab-, aus-, ein-",
    tx3: "Präfixe ändern die Bedeutung: aufmachen, abnehmen, ausgehen, eintreten.",
    q3: "Welches Wort hat das richtige Präfix?",
    a3: "machen - aufmachen",
    b3: "machen - abmachen",
    c3: "machen - ausmachen",
    d3: "machen - einmachen",
    t4: "Verbendungen: -t/-et in 3. Person",
    tx4: "Die 3. Person Singular endet auf -t oder -et: er macht, sie liebt, es wird.",
    q4: "Welches Verb hat die richtige Endung?",
    a4: "er machen",
    b4: "er macht",
    c4: "er machte",
    d4: "er machtet",
    t5: "Kasusendungen: Nominativ -e, Akkusativ -e",
    tx5: "Die Kasusendungen zeigen die grammatische Funktion: die Katze, den Tisch, das Buch.",
    q5: "Welcher Satz hat die richtige Kasusendung?",
    a5: "Ich sehe das Katze.",
    b5: "Ich sehe die Katze.",
    c5: "Ich sehe den Katze.",
    d5: "Ich sehe die Katzen.",
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
            <rect x="40" y="60" width="50" height="50" rx="4" fill="#FF6B6B" />
            <text x="65" y="95" textAnchor="middle" fontSize="11">
              tanul
            </text>
          </g>
          <text x="110" y="90" textAnchor="middle" fontSize="18" fill="#FFE66D">
            +
          </text>
          <g opacity="0.4">
            <rect x="130" y="60" width="50" height="50" rx="4" fill="#4ECDC4" />
            <text x="155" y="95" textAnchor="middle" fontSize="11">
              -ás
            </text>
          </g>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "a1",
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
          <circle cx="70" cy="80" r="25" fill="#FFE66D" opacity="0.3" />
          <text x="70" y="88" textAnchor="middle" fontSize="16" fill="#FFF">
            -ó
          </text>
          <circle cx="170" cy="80" r="25" fill="#B44DFF" opacity="0.3" />
          <text x="170" y="88" textAnchor="middle" fontSize="16" fill="#FFF">
            -ő
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Képzők
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
            <text x="50" y="90" textAnchor="middle" fontSize="18">
              ⬆️
            </text>
          </g>
          <text x="80" y="90" textAnchor="middle" fontSize="16" fill="#FFE66D">
            ige
          </text>
          <g opacity="0.4">
            <text x="190" y="90" textAnchor="middle" fontSize="18">
              ⬇️
            </text>
          </g>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Előtagok
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
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
          <text x="70" y="85" textAnchor="middle" fontSize="32">
            🧬
          </text>
          <text x="170" y="85" textAnchor="middle" fontSize="20" fill="#FFE66D">
            -ik
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Jel: 3. személy
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "c4",
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
          <g opacity="0.4">
            <rect x="40" y="60" width="50" height="50" rx="4" fill="#FF6B6B" />
            <text x="65" y="95" textAnchor="middle" fontSize="12">
              könyv
            </text>
          </g>
          <text x="110" y="90" textAnchor="middle" fontSize="16" fill="#4ECDC4">
            +
          </text>
          <g opacity="0.4">
            <rect x="130" y="60" width="50" height="50" rx="4" fill="#10B981" />
            <text x="155" y="95" textAnchor="middle" fontSize="12" fill="#FFF">
              -em
            </text>
          </g>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "b5",
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

export default function WordFormationO4Explorer({
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
