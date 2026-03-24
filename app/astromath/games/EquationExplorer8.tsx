"use client";
// EquationExplorer8 — Advanced Equations & Inequalities for Grade 8 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Pro-stílusú, letisztult grafika) ──────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="eq8Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#eq8Grad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Fractional Equation Visualization */}
      <text x="0" y="-10" fontSize="24" fontWeight="900" fill="#312E81" textAnchor="middle">x / 3 + 2 = 5</text>
      <path d="M -40,15 L 40,15" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 2" />
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F8FAFC" rx="24" />
    <g transform="translate(120, 70)">
      <rect x="-100" y="-25" width="200" height="50" fill="white" stroke="#64748B" strokeWidth="1" rx="12" />
      <text x="-45" y="8" fontSize="18" fontWeight="bold" fill="#1E293B" textAnchor="middle">5x - 8</text>
      <text x="0" y="8" fontSize="22" fontWeight="black" fill="#4F46E5" textAnchor="middle">=</text>
      <text x="45" y="8" fontSize="18" fontWeight="bold" fill="#1E293B" textAnchor="middle">2x + 7</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0FDF4" rx="24" />
    <g transform="translate(120, 70)">
      <text x="0" y="-25" fontSize="16" fontWeight="bold" fill="#15803D" textAnchor="middle">-2x {" < "} 6</text>
      <path d="M -30,0 L 30,0" stroke="#166534" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="0" y="25" fontSize="18" fontWeight="black" fill="#10B981" textAnchor="middle">x {" > "} -3</text>
      <circle cx="0" cy="40" r="3" fill="#DC2626" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Equations & Inequalities",
    t1_title: "Equations with Fractions",
    t1_text: "When an equation has fractions, the first step is usually to eliminate the denominator. Multiply every term on both sides by the denominator (or the LCD)!",
    t1_b1: "Multiply every term by the denominator",
    t1_b2: "Removes the fractions and makes solving easier",
    t1_b3: "Be careful with parentheses when multiplying!",
    t1_inst: "Solve: x / 3 + 2 = 5. First step: multiply by 3!",
    t1_step1: "Multiply 2 and 5 by 3!",
    t1_step2: "Subtract 6 from 15!",
    t1_h1: "The equation becomes: x + 6 = 15.",
    t1_h2: "x = 15 - 6, which is 9.",
    t1_q: "Multiply x/4 = 5 by what to eliminate the fraction?",
    t1_q_a: "4", t1_q_b: "5", t1_q_c: "x", t1_q_d: "20",
    t2_title: "Variables on Both Sides",
    t2_text: "Pro technique: rearrange so variables (x) are on one side and numbers on the other. We use the balance method to achieve this.",
    t2_b1: "Subtract the smaller x term from both sides",
    t2_b2: "Collect numbers on the other side",
    t2_b3: "Finally divide by the coefficient of x",
    t2_inst: "Solve: 5x - 8 = 2x + 7",
    t2_step1: "Subtract 2x from both sides! (5x - 2x = ?)",
    t2_step2: "Add 8 to 7! (3x = ?)",
    t2_h1: "You get a 3x - 8 = 7 equation, then 3x = 15.",
    t2_h2: "Divide 15 by 3: the answer is 5.",
    t2_q: "What is x in 2x = x + 4?",
    t2_q_a: "4", t2_q_b: "2", t2_q_c: "8", t2_q_d: "0",
    t3_title: "Inequalities' Trick",
    t3_text: "Solving inequalities is like solving equations, but there's one critical rule: if you multiply or divide by a negative number, the inequality sign flips!",
    t3_b1: "If -2x < 6, then x > -3",
    t3_b2: "Use open or closed circles on the number line",
    t3_b3: "The solution is a range of numbers",
    t3_inst: "Plot on the number line: x > -3. Which direction does the arrow point?",
    t3_h1: "'Greater than' means moving right from the point.",
    t3_h2: "Click the region to the right of -3.",
  },
  de: {
    explorer_title: "Gleichungen & Ungleichungen",
    t1_title: "Gleichungen mit Brüchen",
    t1_text: "Wenn eine Gleichung Brüche enthält, ist der erste Schritt normalerweise das Eliminieren des Nenners. Multipliziere jeden Term mit dem Nenner (oder dem Hauptnenner)!",
    t1_b1: "Multipliziere jeden Term mit dem Nenner",
    t1_b2: "Entfernt die Brüche und vereinfacht das Lösen",
    t1_b3: "Achte auf Klammern beim Multiplizieren!",
    t1_inst: "Löse: x / 3 + 2 = 5. Erster Schritt: mit 3 multiplizieren!",
    t1_step1: "Multipliziere 2 und 5 mit 3!",
    t1_step2: "Ziehe 6 von 15 ab!",
    t1_h1: "Die Gleichung wird zu: x + 6 = 15.",
    t1_h2: "x = 15 - 6, das ist 9.",
    t1_q: "Mit was multipliziert man x/4 = 5, um den Bruch zu eliminieren?",
    t1_q_a: "4", t1_q_b: "5", t1_q_c: "x", t1_q_d: "20",
    t2_title: "Variablen auf Beiden Seiten",
    t2_text: "Profi-Technik: Ordne so um, dass Variablen (x) auf einer Seite und Zahlen auf der anderen sind. Nutze die Waage-Methode.",
    t2_b1: "Subtrahiere den kleineren x-Term von beiden Seiten",
    t2_b2: "Sammle Zahlen auf der anderen Seite",
    t2_b3: "Teile abschließend durch den Koeffizienten von x",
    t2_inst: "Löse: 5x - 8 = 2x + 7",
    t2_step1: "Subtrahiere 2x von beiden Seiten! (5x - 2x = ?)",
    t2_step2: "Addiere 8 zu 7! (3x = ?)",
    t2_h1: "Du erhältst 3x - 8 = 7, dann 3x = 15.",
    t2_h2: "Teile 15 durch 3: die Antwort ist 5.",
    t2_q: "Was ist x in 2x = x + 4?",
    t2_q_a: "4", t2_q_b: "2", t2_q_c: "8", t2_q_d: "0",
    t3_title: "Die Ungleichungs-Falle",
    t3_text: "Ungleichungen zu lösen ist wie Gleichungen zu lösen, aber es gibt eine kritische Regel: Wenn du mit einer negativen Zahl multiplizierst oder dividierst, dreht sich das Ungleichheitszeichen um!",
    t3_b1: "Wenn -2x < 6, dann x > -3",
    t3_b2: "Nutze offene oder geschlossene Kreise auf der Zahlengeraden",
    t3_b3: "Die Lösung ist ein Bereich von Zahlen",
    t3_inst: "Trage auf der Zahlengeraden ein: x > -3. In welche Richtung zeigt der Pfeil?",
    t3_h1: "'Größer als' bedeutet nach rechts vom Punkt.",
    t3_h2: "Klick auf die Region rechts von -3.",
  },
  hu: {
    explorer_title: "Egyenletek & Egyenlőtlenségek",
    t1_title: "Törtes egyenletek",
    t1_text: "Ha az egyenletben törtet látsz, az első lépés általában a nevező eltüntetése. Szorozd meg az egyenlet minden tagját a nevezővel (vagy a közös nevezővel)!",
    t1_b1: "A nevezővel való szorzás minden tagra vonatkozik",
    t1_b2: "Eltünteti a törteket, így egyszerűbbé válik a dolgod",
    t1_b3: "Vigyázz a zárójelekre szorzáskor!",
    t1_inst: "Oldd meg: x / 3 + 2 = 5. Első lépés a szorzás 3-mal!",
    t1_step1: "Szorozd meg a 2-t és az 5-öt is 3-mal!",
    t1_step2: "Vond ki a 6-ot a 15-ből!",
    t1_h1: "Az egyenlet így néz ki: x + 6 = 15.",
    t1_h2: "x = 15 - 6, azaz 9.",
    t2_title: "Változók mindkét oldalon",
    t2_text: "Profi technika: rendezd úgy az egyenletet, hogy az ismeretlenek (x) az egyik oldalon, a számok a másikon legyenek. Ezt 'mérlegelvvel' érjük el.",
    t2_b1: "Vond ki a kisebb x-es tagot mindkét oldalból",
    t2_b2: "Végezd el a számok rendezését is",
    t2_b3: "Végül oszd el az x együtthatójával",
    t2_inst: "Oldd meg: 5x - 8 = 2x + 7",
    t2_step1: "Vond ki a 2x-et mindkét oldalból! (5x - 2x = ?)",
    t2_step2: "Add hozzá a 8-at a 7-hez! (3x = ?)",
    t2_h1: "Kapsz egy 3x - 8 = 7 egyenletet, majd 3x = 15.",
    t2_h2: "A 15 osztva 3-mal lesz a megoldás: 5.",
    t3_title: "Egyenlőtlenségek 'csapdája'",
    t3_text: "Az egyenlőtlenségek megoldása hasonló az egyenletekéhez, de van egy kritikus szabály: ha negatív számmal szorzol vagy osztasz, a relációs jel megfordul!",
    t3_b1: "Ha -2x < 6, akkor x > -3",
    t3_b2: "A számegyenesen nyitott vagy zárt kört használunk",
    t3_b3: "A megoldás egy számtartomány",
    t3_inst: "Ábrázold a számegyenesen: x > -3. Melyik irányba indul a nyíl?",
    t3_h1: "A 'nagyobb' azt jelenti, hogy a ponttól jobbra haladunk.",
    t3_h2: "Koppints a -3-tól jobbra lévő tartományra.",
  },
  ro: {
    explorer_title: "Ecuații & Inegalități",
    t1_title: "Ecuații cu Fracții",
    t1_text: "Când o ecuație are fracții, pasul inițial este, de obicei, eliminarea numitorului. Înmulțești fiecare termen cu numitorul (sau LCD)!",
    t1_b1: "Înmulțește fiecare termen cu numitorul",
    t1_b2: "Elimină fracțiile și ușurează rezolvarea",
    t1_b3: "Atenție la paranteze la înmulțire!",
    t1_inst: "Rezolvă: x / 3 + 2 = 5. Primul pas: înmulțește cu 3!",
    t1_step1: "Înmulțește 2 și 5 cu 3!",
    t1_step2: "Scade 6 din 15!",
    t1_h1: "Ecuația devine: x + 6 = 15.",
    t1_h2: "x = 15 - 6, care este 9.",
    t1_q: "Cu ce înmulțești x/4 = 5 pentru a elimina fracția?",
    t1_q_a: "4", t1_q_b: "5", t1_q_c: "x", t1_q_d: "20",
    t2_title: "Variabile pe Ambele Părți",
    t2_text: "Tehnică profesională: rearanjează ca variabilele (x) să fie pe o parte și numerele pe cealaltă. Folosim metoda balanței.",
    t2_b1: "Scade termenul x mai mic din ambele părți",
    t2_b2: "Colectează numerele pe cealaltă parte",
    t2_b3: "În final, împarte la coeficientul lui x",
    t2_inst: "Rezolvă: 5x - 8 = 2x + 7",
    t2_step1: "Scade 2x din ambele părți! (5x - 2x = ?)",
    t2_step2: "Adună 8 la 7! (3x = ?)",
    t2_h1: "Obții 3x - 8 = 7, apoi 3x = 15.",
    t2_h2: "Împarte 15 la 3: răspunsul este 5.",
    t2_q: "Care este x în 2x = x + 4?",
    t2_q_a: "4", t2_q_b: "2", t2_q_c: "8", t2_q_d: "0",
    t3_title: "Capcana Inegalităților",
    t3_text: "Rezolvarea inegalităților este asemănătoare rezolvării ecuațiilor, dar există o regulă critică: dacă înmulțești sau împarți la un număr negativ, semnul inegalității se inversează!",
    t3_b1: "Dacă -2x < 6, atunci x > -3",
    t3_b2: "Folosește cercuri deschise sau închise pe linia numerelor",
    t3_b3: "Soluția este o gamă de numere",
    t3_inst: "Trasează pe linia numerelor: x > -3. În ce direcție arată săgeata?",
    t3_h1: "'Mai mare decât' înseamnă mișcare la dreapta punctului.",
    t3_h2: "Clic pe regiunea din dreapta lui -3.",
  }
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "equation-solver",
      equation: "x/3 + 2 = 5",
      steps: [
        { instruction: "t1_step1", choices: [6, 15, 21, 9], answer: 6, equation: "x + 6 = 15" },
        { instruction: "t1_step2", choices: [3, 9, 12, 15], answer: 9, equation: "x = 9" }
      ],
      finalAnswer: 9,
      variable: "x",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "5x - 8 = 2x + 7",
      steps: [
        { instruction: "t2_step1", choices: [3, 7, 2, 8], answer: 3, equation: "3x - 8 = 7" },
        { instruction: "t2_step2", choices: [10, 15, 1, 5], answer: 15, equation: "3x = 15" }
      ],
      finalAnswer: 5,
      variable: "x",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: -10,
      max: 10,
      start: 0,
      target: 5, // Any value > -3
      step: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚙️",
  topics: TOPICS,
  rounds: [],
};

const EquationExplorer8 = memo(function EquationExplorer8({
  color = "#4F46E5",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_eq_adv" color={color} lang={lang} onDone={onDone} />;
});

export default EquationExplorer8;
