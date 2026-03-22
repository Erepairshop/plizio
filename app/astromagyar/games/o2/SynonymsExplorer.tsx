"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szinonimák", tx1: "A szinonimák olyan szavak, amelyeknek ugyanaz vagy nagyon hasonló a jelentésük. Például: kutya - eb, nagy - óriási.",
    q1: "Mi a szónima az 'okos' szóhoz?", a1: "értelmes", b1: "gyors", c1: "rossz", d1: "kicsi",

    t2: "Rokon értelmű szavak", tx2: "A rokon értelmű szavak szinte ugyanazt fejezik ki, de lehetnek árnyalat-beli különbségek. Például: szép - gyönyörű, fáradt - kimerült.",
    q2: "Mely szó rokon értelmű a 'vidám'-mal?", a2: "szomorú", b2: "jókedvű", c2: "álmos", d2: "ideges",

    t3: "Szavak közötti hasonlóság", tx3: "Sok szópárnak nincs teljesen azonos, de hasonló jelentésük van. Például: kicsi - apró, fényes - világos.",
    q3: "Mely szó a leginkább hasonló az 'erős' szóhoz?", a3: "gyenge", b3: "erőteljes", c3: "hosszú", d3: "sötét",

    t4: "Szinonimák az irodalomban", tx4: "Az írók szinonimákat használnak az ismétlés elkerülésére. Például: szép - gyönyörű, házat - otthont.",
    q4: "Melyik szó használható a 'tiszta' szó helyett?", a4: "szennyes", b4: "ragyogó", c4: "igénytelen", d4: "sötét",

    t5: "Szinonimák összefoglalása", tx5: "A szinonimák gazdagabbá teszik a szövegeket és segítenek az ismétlés elkerülésében.",
    q5: "Mely szó a szónima az 'barát'-nak?", a5: "ellenfél", b5: "társa", c5: "tanár", d5: "szomszéd",
  },
  de: {
    t1: "Synonyme", tx1: "Synonyme sind Wörter mit gleicher oder sehr ähnlicher Bedeutung. Zum Beispiel: Hund - Köter, groß - riesig.",
    q1: "Was ist ein Synonym zu 'klug'?", a1: "verständig", b1: "schnell", c1: "schlecht", d1: "klein",

    t2: "Bedeutungsähnliche Wörter", tx2: "Bedeutungsähnliche Wörter drücken beinahe dasselbe aus, können aber Nuancen haben. Zum Beispiel: schön - wunderbar, müde - erschöpft.",
    q2: "Welches Wort bedeutet fast dasselbe wie 'fröhlich'?", a2: "traurig", b2: "vergnügt", c2: "schläfrig", d2: "reizbar",

    t3: "Ähnlichkeit zwischen Wörtern", tx3: "Viele Wortpaare haben keine exakte, aber eine ähnliche Bedeutung. Zum Beispiel: klein - winzig, hell - leuchtend.",
    q3: "Welches Wort ist 'stark' am ähnlichsten?", a3: "schwach", b3: "kräftig", c3: "lang", d3: "dunkel",

    t4: "Synonyme in der Literatur", tx4: "Schriftsteller verwenden Synonyme, um Wiederholungen zu vermeiden. Zum Beispiel: schön - herrlich, Haus - Heim.",
    q4: "Welches Wort kann 'sauber' ersetzen?", a4: "schmutzig", b4: "glänzend", c4: "anspruchslos", d4: "dunkel",

    t5: "Synonyme zusammengefasst", tx5: "Synonyme machen Texte reicher und helfen, Wiederholungen zu vermeiden.",
    q5: "Welches Wort ist ein Synonym zu 'Freund'?", a5: "Feind", b5: "Gefährte", c5: "Lehrer", d5: "Nachbar",
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
          <rect x="30" y="50" width="70" height="60" rx="8" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="65" y="90" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">okos</text>
          <text x="120" y="85" textAnchor="middle" fontSize="18" fill="#FFD700" fontWeight="bold">=</text>
          <rect x="140" y="50" width="70" height="60" rx="8" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="175" y="90" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">értelmes</text>
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
          <circle cx="80" cy="80" r="25" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="80" y="88" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">vidám</text>
          <path d="M 115 80 L 140 80" stroke="#FFD700" strokeWidth="2" />
          <circle cx="170" cy="80" r="25" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="170" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">vidám</text>
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
          <rect x="20" y="50" width="60" height="60" rx="6" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="50" y="88" textAnchor="middle" fontSize="16" fill="#95E1D3" fontWeight="bold">erős</text>
          <path d="M 90 80 Q 110 60 130 80" stroke="#FFD700" strokeWidth="2" fill="none" />
          <rect x="160" y="50" width="60" height="60" rx="6" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="190" y="88" textAnchor="middle" fontSize="14" fill="#95E1D3" fontWeight="bold">erős</text>
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
          <text x="30" y="70" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">A ház</text>
          <text x="30" y="90" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">tiszta.</text>
          <text x="150" y="70" textAnchor="middle" fontSize="16" fill="#4ECDC4" fontWeight="bold">Az otthon</text>
          <text x="150" y="90" textAnchor="middle" fontSize="16" fill="#4ECDC4" fontWeight="bold">ragyogó.</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="60" cy="80" r="20" fill="#B44DFF" opacity="0.4" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">szó</text>
          <path d="M 85 80 L 115 80" stroke="#FFD700" strokeWidth="2" />
          <circle cx="150" cy="80" r="20" fill="#B44DFF" opacity="0.4" stroke="#B44DFF" strokeWidth="2" />
          <text x="150" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">szó</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function SynonymsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
