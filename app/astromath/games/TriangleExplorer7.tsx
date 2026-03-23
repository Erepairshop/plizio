"use client";
// TriangleExplorer7 — Advanced Triangles for Grade 7 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, tiszta stílus) ──────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <defs>
      <linearGradient id="triGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#DB2777" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="140" fill="url(#triGrad1)" rx="20" />
    <g transform="translate(120, 75)">
      <path d="M -60,30 L 60,30 L 0,-50 Z" fill="none" stroke="#DB2777" strokeWidth="3" strokeLinejoin="round" />
      <path d="M -45,30 A 15,15 0 0,0 -53,18" fill="none" stroke="#9D174D" strokeWidth="2" />
      <path d="M 45,30 A 15,15 0 0,1 53,18" fill="none" stroke="#9D174D" strokeWidth="2" />
      <path d="M -8,-38 A 15,15 0 0,0 8,-38" fill="none" stroke="#9D174D" strokeWidth="2" />
      <text x="0" y="55" fontSize="14" fontWeight="900" fill="#9D174D" textAnchor="middle">α + β + γ = 180°</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FDF2F8" rx="20" />
    <g transform="translate(120, 70)">
      <circle cx="0" cy="0" r="45" fill="none" stroke="#EC4899" strokeWidth="2" strokeDasharray="5 5" />
      <text x="0" y="5" fontSize="22" fontWeight="black" fill="#BE185D" textAnchor="middle">180°</text>
      <path d="M -45,0 A 45,45 0 0,1 0,-45" fill="none" stroke="#DB2777" strokeWidth="8" strokeLinecap="round" />
      <text x="-35" y="-35" fontSize="12" fontWeight="bold" fill="#DB2777">90°</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFF1F2" rx="20" />
    <g transform="translate(60, 80)">
      <line x1="0" y1="0" x2="120" y2="0" stroke="#E11D48" strokeWidth="4" />
      <text x="60" y="20" fontSize="12" fontWeight="bold" fill="#9F1239" textAnchor="middle">a + b {">"} c</text>
      <path d="M 0,-10 L 50,-40 L 120,-10" fill="none" stroke="#FB7185" strokeWidth="2" strokeDasharray="4 2" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Háromszögek Titkai",
    t1_title: "Belső szögek összege",
    t1_text: "Bármilyen háromszöget is rajzolsz, a három belső szögének összege mindig pontosan 180 fok lesz. Ez olyan, mint egy matematikai vastörvény!",
    t1_b1: "α + β + γ = 180°",
    t1_b2: "Ha két szöget ismersz, a harmadik kiszámítható",
    t1_b3: "Egy derékszögű háromszögben a két hegyesszög összege 90°",
    t1_inst: "Egyenlítsd ki a mérleget! Két szög 50° és 60°. Mennyi a harmadik, hogy kijöjjön a 180°?",
    t1_h1: "Az eddigi összeg 110°.",
    t1_h2: "A 180-hoz még 70° hiányzik.",
    t1_q: "Egy háromszög két szöge 45° és 45°. Milyen típusú ez a háromszög a szögei alapján?",
    t1_q_a: "Derékszögű", t1_q_b: "Tompaszögű", t1_q_c: "Szabályos", t1_q_d: "Hegyesszögű",
    t2_title: "Hiányzó szög keresése",
    t2_text: "Használjuk az egyenletmegoldó módszerét! Ha tudjuk az összeget, kivonással könnyen megkapjuk a keresett szöget.",
    t2_b1: "Vond ki az ismert szögeket a 180-ból",
    t2_b2: "Ügyelj a precíz számolásra",
    t2_b3: "Ellenőrizd az összeget a végén",
    t2_inst: "Számold ki x értékét: x + 120° = 180°",
    t2_step1: "Vond ki a 120-at mindkét oldalból!",
    t2_h1: "A 180 - 120 műveletet kell elvégezned.",
    t2_h2: "Az eredmény 60 lesz.",
    t2_q: "Mennyi a harmadik szög, ha α=100° és β=30°?",
    t2_q_a: "50°", t2_q_b: "60°", t2_q_c: "70°", t2_q_d: "180°",
    t3_title: "Háromszög-egyenlőtlenség",
    t3_text: "Nem minden három oldalból lehet háromszöget építeni! A szabály: bármely két oldal összegének nagyobbnak kell lennie a harmadik oldalnál.",
    t3_b1: "a + b nagyobb mint c",
    t3_b2: "a + c nagyobb mint b",
    t3_b3: "b + c nagyobb mint a",
    t3_inst: "Lehet-e háromszöget építeni 3, 4 és 10 cm-es oldalakból? Keresd meg a 7-est a számegyenesen (3+4)!",
    t3_h1: "A 3+4 csak 7, ami kisebb mint 10.",
    t3_h2: "Mivel 7 kisebb mint 10, ebből nem lesz háromszög. Koppints a 7-esre.",
    t3_q: "Melyik oldalhármasból építhető háromszög?",
    t3_q_a: "3, 4, 5", t3_q_b: "1, 2, 5", t3_q_c: "2, 2, 4", t3_q_d: "10, 2, 2",
  },
  de: {
    explorer_title: "Geheimnisse von Dreiecken",
    t1_title: "Summe der Innenwinkel",
    t1_text: "Egal welches Dreieck du zeichnest, die Summe der drei Innenwinkel ist immer genau 180 Grad. Das ist ein mathematisches Gesetz!",
    t1_b1: "α + β + γ = 180°",
    t1_b2: "Wenn du zwei Winkel kennst, kannst du den dritten berechnen",
    t1_b3: "In einem rechtwinkligen Dreieck ergeben die zwei spitzen Winkel 90°",
    t1_inst: "Balanciere die Waage! Zwei Winkel sind 50° und 60°. Was ist der dritte Winkel für 180°?",
    t1_h1: "Die bisherige Summe ist 110°.",
    t1_h2: "Um auf 180 zu kommen, fehlen noch 70°.",
    t1_q: "Ein Dreieck hat zwei Winkel von 45° und 45°. Was für ein Dreieck ist das?",
    t1_q_a: "Rechtwinkliges", t1_q_b: "Stumpfwinkliges", t1_q_c: "Gleichseitiges", t1_q_d: "Spitzwinkliges",
    t2_title: "Fehlenden Winkel finden",
    t2_text: "Wir verwenden die Gleichungslösungsmethode! Wenn wir die Summe kennen, können wir den gesuchten Winkel durch Subtraktion leicht finden.",
    t2_b1: "Subtrahiere die bekannten Winkel von 180",
    t2_b2: "Achte auf genaue Berechnungen",
    t2_b3: "Überprüfe die Summe am Ende",
    t2_inst: "Berechne x: x + 120° = 180°",
    t2_step1: "Subtrahiere 120 von beiden Seiten!",
    t2_h1: "Du musst 180 - 120 berechnen.",
    t2_h2: "Das Ergebnis ist 60.",
    t2_q: "Wie viel ist der dritte Winkel, wenn α=100° und β=30°?",
    t2_q_a: "50°", t2_q_b: "60°", t2_q_c: "70°", t2_q_d: "180°",
    t3_title: "Dreiecks-Ungleichung",
    t3_text: "Nicht jede Kombination von drei Seiten ergibt ein Dreieck! Die Regel: Die Summe von zwei beliebigen Seiten muss größer sein als die dritte Seite.",
    t3_b1: "a + b größer als c",
    t3_b2: "a + c größer als b",
    t3_b3: "b + c größer als a",
    t3_inst: "Kann man ein Dreieck mit Seiten 3, 4 und 10 cm bauen? Finde 7 auf der Zahlenlinie (3+4)!",
    t3_h1: "3+4 ist nur 7, was weniger als 10 ist.",
    t3_h2: "Da 7 weniger als 10 ist, kann kein Dreieck entstehen. Tippe auf 7.",
    t3_q: "Welche Seitenkombination ergibt ein Dreieck?",
    t3_q_a: "3, 4, 5", t3_q_b: "1, 2, 5", t3_q_c: "2, 2, 4", t3_q_d: "10, 2, 2",
  },
  en: {
    explorer_title: "Secrets of Triangles",
    t1_title: "Sum of Interior Angles",
    t1_text: "No matter what triangle you draw, the sum of the three interior angles is always exactly 180 degrees. It is a mathematical law!",
    t1_b1: "α + β + γ = 180°",
    t1_b2: "If you know two angles, you can calculate the third",
    t1_b3: "In a right triangle, the two acute angles add up to 90°",
    t1_inst: "Balance the scale! Two angles are 50° and 60°. What is the third angle to reach 180°?",
    t1_h1: "The current sum is 110°.",
    t1_h2: "We need 70° more to reach 180.",
    t1_q: "A triangle has two angles of 45° and 45°. What type of triangle is it?",
    t1_q_a: "Right-angled", t1_q_b: "Obtuse", t1_q_c: "Equilateral", t1_q_d: "Acute",
    t2_title: "Finding Missing Angle",
    t2_text: "We use the equation-solving method! If we know the sum, we can easily find the desired angle by subtraction.",
    t2_b1: "Subtract the known angles from 180",
    t2_b2: "Pay attention to precise calculation",
    t2_b3: "Check the sum at the end",
    t2_inst: "Calculate x: x + 120° = 180°",
    t2_step1: "Subtract 120 from both sides!",
    t2_h1: "You need to calculate 180 - 120.",
    t2_h2: "The result is 60.",
    t2_q: "What is the third angle if α=100° and β=30°?",
    t2_q_a: "50°", t2_q_b: "60°", t2_q_c: "70°", t2_q_d: "180°",
    t3_title: "Triangle Inequality",
    t3_text: "Not every combination of three sides makes a triangle! The rule: the sum of any two sides must be greater than the third side.",
    t3_b1: "a + b greater than c",
    t3_b2: "a + c greater than b",
    t3_b3: "b + c greater than a",
    t3_inst: "Can you build a triangle with sides 3, 4, and 10 cm? Find 7 on the number line (3+4)!",
    t3_h1: "3+4 is only 7, which is less than 10.",
    t3_h2: "Since 7 is less than 10, no triangle can be formed. Tap on 7.",
    t3_q: "Which side combination makes a triangle?",
    t3_q_a: "3, 4, 5", t3_q_b: "1, 2, 5", t3_q_c: "2, 2, 4", t3_q_d: "10, 2, 2",
  },
  ro: {
    explorer_title: "Secretele Triunghiurilor",
    t1_title: "Suma Unghiurilor Interioare",
    t1_text: "Indiferent ce triunghi desenezi, suma celor trei unghiuri interioare este întotdeauna exact 180 de grade. Este o lege matematică!",
    t1_b1: "α + β + γ = 180°",
    t1_b2: "Dacă cunoști două unghiuri, poți calcula al treilea",
    t1_b3: "Într-un triunghi dreptunghic, cele două unghiuri ascuțite adună 90°",
    t1_inst: "Echilibrează cântarul! Două unghiuri sunt 50° și 60°. Care este al treilea unghi pentru a ajunge la 180°?",
    t1_h1: "Suma curentă este 110°.",
    t1_h2: "Mai avem nevoie de 70° pentru a ajunge la 180.",
    t1_q: "Un triunghi are două unghiuri de 45° și 45°. Ce tip de triunghi este?",
    t1_q_a: "Dreptunghic", t1_q_b: "Obtuzunghic", t1_q_c: "Echilateral", t1_q_d: "Ascuțitunghic",
    t2_title: "Găsind Unghiul Lipsă",
    t2_text: "Folosim metoda rezolvării ecuației! Dacă știm suma, putem găsi ușor unghiul dorit prin scădere.",
    t2_b1: "Scade unghiurile cunoscute din 180",
    t2_b2: "Acordă atenție calculului precis",
    t2_b3: "Verifică suma la final",
    t2_inst: "Calculează x: x + 120° = 180°",
    t2_step1: "Scade 120 din ambele părți!",
    t2_h1: "Trebuie să calculezi 180 - 120.",
    t2_h2: "Rezultatul este 60.",
    t2_q: "Care este al treilea unghi dacă α=100° și β=30°?",
    t2_q_a: "50°", t2_q_b: "60°", t2_q_c: "70°", t2_q_d: "180°",
    t3_title: "Inegalitatea Triunghiului",
    t3_text: "Nu orice combinație de trei laturi face un triunghi! Regula: suma oricăror două laturi trebuie să fie mai mare decât a treia latură.",
    t3_b1: "a + b mai mare decât c",
    t3_b2: "a + c mai mare decât b",
    t3_b3: "b + c mai mare decât a",
    t3_inst: "Poți construi un triunghi cu laturi 3, 4 și 10 cm? Găsește 7 pe axa numerelor (3+4)!",
    t3_h1: "3+4 este doar 7, care este mai mic decât 10.",
    t3_h2: "Deoarece 7 este mai mic decât 10, nu se poate forma niciun triunghi. Apasă pe 7.",
    t3_q: "Care combinație de laturi formează un triunghi?",
    t3_q_a: "3, 4, 5", t3_q_b: "1, 2, 5", t3_q_c: "2, 2, 4", t3_q_d: "10, 2, 2",
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
      type: "balance-scale",
      leftWeight: 180,
      rightInitial: 110,
      unitIcon: "°",
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
      equation: "x + 120° = 180°",
      steps: [
        { instruction: "t2_step1", choices: [40, 60, 80, 100], answer: 60, equation: "x = 60°" }
      ],
      finalAnswer: 60,
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
      min: 0,
      max: 15,
      start: 0,
      target: 7,
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
  icon: "📐",
  topics: TOPICS,
  rounds: [],
};

const TriangleExplorer7 = memo(function TriangleExplorer7({
  color = "#DB2777",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_triangles" color={color} lang={lang} onDone={onDone} />;
});

export default TriangleExplorer7;
