"use client";
// CircleExplorer7 — Circle Perimeter & Area for Grade 7 (island i7)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Tiszta, modern körök) ──────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <rect width="240" height="160" fill="#F0FDFA" rx="20" />
    <g transform="translate(120, 80)">
      <circle cx="0" cy="0" r="40" fill="none" stroke="#0D9488" strokeWidth="4" />
      <circle cx="0" cy="0" r="3" fill="#0D9488" />
      <line x1="0" y1="0" x2="40" y2="0" stroke="#0D9488" strokeWidth="2" strokeDasharray="4 2" />
      <text x="25" y="-5" fontSize="12" fill="#0F766E">r</text>
      
      <line x1="-40" y1="0" x2="40" y2="0" stroke="#0F766E" strokeWidth="2" />
      <text x="-10" y="20" fontSize="12" fill="#0F766E">d = 2r</text>
      
      <text x="0" y="60" fontSize="14" fontWeight="bold" fill="#0D9488" textAnchor="middle">π ≈ K / d</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FDF2F8" rx="20" />
    <g transform="translate(120, 70)">
      <circle cx="0" cy="0" r="30" fill="none" stroke="#DB2777" strokeWidth="3" />
      <text x="0" y="5" fontSize="22" fontWeight="black" fill="#BE185D" textAnchor="middle">K</text>
      <text x="0" y="-35" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">r = 5 cm</text>
    </g>
    <text x="120" y="125" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">K = 2 · r · π</text>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFFBEB" rx="20" />
    <g transform="translate(120, 70)">
      <circle cx="0" cy="0" r="40" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="3" />
      <text x="0" y="5" fontSize="22" fontWeight="black" fill="#B45309" textAnchor="middle">T</text>
      <text x="0" y="-45" fontSize="12" fontWeight="bold" fill="#92400E" textAnchor="middle">r = 3 cm</text>
    </g>
    <text x="120" y="125" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">T = r² · π</text>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Kör és π",
    t1_title: "A π rejtélye",
    t1_text: "A π (pi) egy állandó szám, ami megmutatja, hányszor hosszabb a kör kerülete (K) az átmérőjénél (d). Ez egy irracionális szám, végtelen sok tizedesjeggyel.",
    t1_b1: "π ≈ 3,14",
    t1_b2: "K = d · π",
    t1_b3: "Hasznos a fizikában és mérnöki tudományban",
    t1_inst: "Használd a csúszkát! Ha a kerület 10π, mennyi az átmérő?",
    t1_h1: "Oszd el a kerületet a π-vel.",
    t1_h2: "A válasz 10. Állítsd a csúszkát 10-re.",
    t1_q: "Milyen matematikai állandóval definiálódik a π?",
    t1_q_a: "A kerület és az átmérő aránya", t1_q_b: "A terület és az átmérő aránya", t1_q_c: "2-szeres a sugár", t1_q_d: "A sugár hossza",
    t2_title: "Kerület számítása",
    t2_text: "A kerület a kör hossza. Használjuk az egyenletmegoldót, hogy kiszámoljuk, ha a sugár (r) ismert! Vegyük a π értékét körülbelül 3,14-nek.",
    t2_b1: "K = 2 · r · π",
    t2_b2: "Példa: r=5 cm -> K = 2 · 5 · 3,14",
    t2_b3: "Így számoljuk lépésről lépésre",
    t2_inst: "Számold ki a kerületet r=5 esetén! (Használd π ≈ 3,14-et!)",
    t2_step1: "Számold ki a 2 · 5 műveletet.",
    t2_step2: "Szorozd meg a 10-et 3,14-gyel.",
    t2_h1: "2 · 5 = 10, majd 10 · 3,14 = 31,4.",
    t2_h2: "Az eredmény 31,4 cm.",
    t2_q: "Mekkora a kerület, ha r = 1 cm? (π ≈ 3,14)",
    t2_q_a: "6,28 cm", t2_q_b: "3,14 cm", t2_q_c: "1 cm", t2_q_d: "10 cm",
    t3_title: "Terület számítása",
    t3_text: "A terület megmutatja, mekkora síkrészt fed le a kör. A képlet: r a négyzeten, szorozva a π-vel.",
    t3_b1: "T = r² · π",
    t3_b2: "Az r² jelentése r · r",
    t3_b3: "A π ≈ 3,14 itt is",
    t3_inst: "Ábrázold a π értékét (3,14) a számegyenesen!",
    t3_h1: "Keress egy pozíciót 3 és 3,2 között.",
    t3_h2: "Koppints a 3-as után kicsivel. Itt lesz a 3,14.",
    t3_q: "Ha r = 2, mekkora a terület? (π ≈ 3,14)",
    t3_q_a: "12,56", t3_q_b: "6,28", t3_q_c: "4", t3_q_d: "2",
  },
  de: {
    explorer_title: "Kreis und π",
    t1_title: "Das Geheimnis von π",
    t1_text: "π (pi) ist eine Konstante, die zeigt, wie viel mal länger der Umfang (K) eines Kreises als sein Durchmesser (d) ist. Es ist eine irrationale Zahl mit unendlich vielen Dezimalstellen.",
    t1_b1: "π ≈ 3,14",
    t1_b2: "U = d · π",
    t1_b3: "Nützlich in Physik und Technik",
    t1_inst: "Verwende den Schieberegler! Wenn der Umfang 10π ist, wie viel ist der Durchmesser?",
    t1_h1: "Dividiere den Umfang durch π.",
    t1_h2: "Die Antwort ist 10. Stelle den Schieberegler auf 10.",
    t1_q: "Durch welche mathematische Konstante ist π definiert?",
    t1_q_a: "Verhältnis von Umfang zu Durchmesser", t1_q_b: "Verhältnis von Fläche zu Durchmesser", t1_q_c: "2-faches des Radius", t1_q_d: "Länge des Radius",
    t2_title: "Umfang berechnen",
    t2_text: "Der Umfang ist die Länge des Kreises. Wir verwenden die Gleichungslösung, um ihn zu berechnen, wenn der Radius (r) bekannt ist! Nehmen wir π ≈ 3,14.",
    t2_b1: "U = 2 · r · π",
    t2_b2: "Beispiel: r=5 cm -> U = 2 · 5 · 3,14",
    t2_b3: "So berechnen wir es Schritt für Schritt",
    t2_inst: "Berechne den Umfang für r=5! (Verwende π ≈ 3,14!)",
    t2_step1: "Berechne 2 · 5.",
    t2_step2: "Multipliziere 10 mit 3,14.",
    t2_h1: "2 · 5 = 10, dann 10 · 3,14 = 31,4.",
    t2_h2: "Das Ergebnis ist 31,4 cm.",
    t2_q: "Wie groß ist der Umfang, wenn r = 1 cm? (π ≈ 3,14)",
    t2_q_a: "6,28 cm", t2_q_b: "3,14 cm", t2_q_c: "1 cm", t2_q_d: "10 cm",
    t3_title: "Fläche berechnen",
    t3_text: "Die Fläche zeigt, wie viel Platz der Kreis einnimmt. Die Formel: r zum Quadrat mal π.",
    t3_b1: "A = r² · π",
    t3_b2: "r² bedeutet r · r",
    t3_b3: "π ≈ 3,14 auch hier",
    t3_inst: "Markiere den Wert von π (3,14) auf der Zahlenlinie!",
    t3_h1: "Finde die Position zwischen 3 und 3,2.",
    t3_h2: "Tippe etwas nach der 3. Hier ist 3,14.",
    t3_q: "Wenn r = 2, wie groß ist die Fläche? (π ≈ 3,14)",
    t3_q_a: "12,56", t3_q_b: "6,28", t3_q_c: "4", t3_q_d: "2",
  },
  en: {
    explorer_title: "Circles & π",
    t1_title: "The Mystery of π",
    t1_text: "π (pi) is a constant that shows how many times longer the circumference (C) of a circle is than its diameter (d). It is an irrational number.",
    t1_b1: "π ≈ 3.14",
    t1_b2: "C = d · π",
    t1_b3: "Constant for all circles",
    t1_inst: "Use the slider! If C = 10π, what is the diameter?",
    t1_h1: "Divide the circumference by π.",
    t1_h2: "Result is 10. Set the slider.",
    t1_q: "Which mathematical constant is π defined by?",
    t1_q_a: "Ratio of Circumference to Diameter", t1_q_b: "Ratio of Area to Diameter", t1_q_c: "2 times the Radius", t1_q_d: "Length of Radius",
    t2_title: "Calculating Circumference",
    t2_text: "Circumference is the distance around the circle. Let's compute it step-by-step when radius (r) is known, using π ≈ 3.14.",
    t2_b1: "C = 2 · r · π",
    t2_b2: "Example: r=5 cm -> C = 2 · 5 · 3.14",
    t2_b3: "Multiply radius first",
    t2_inst: "Calculate the circumference if r=5! (Use π ≈ 3.14!)",
    t2_step1: "Calculate 2 · 5.",
    t2_step2: "Multiply 10 by 3.14.",
    t2_h1: "2 · 5 = 10, then 10 · 3.14 = 31.4.",
    t2_h2: "Result is 31.4 cm.",
    t2_q: "What is the perimeter if r = 1 cm? (π ≈ 3.14)",
    t2_q_a: "6.28 cm", t2_q_b: "3.14 cm", t2_q_c: "1 cm", t2_q_d: "10 cm",
    t3_title: "Calculating Area",
    t3_text: "Area shows how much flat space the circle covers. Formula: r squared times π.",
    t3_b1: "A = r² · π",
    t3_b2: "r² means r · r",
    t3_b3: "π ≈ 3.14 here as well",
    t3_inst: "Plot the value of π (3.14) on the number line!",
    t3_h1: "Find the position between 3 and 3.2.",
    t3_h2: "Tap slightly after 3. This is 3.14.",
    t3_q: "If r = 2, what is the area? (π ≈ 3.14)",
    t3_q_a: "12.56", t3_q_b: "6.28", t3_q_c: "4", t3_q_d: "2",
  },
  ro: {
    explorer_title: "Cercul și π",
    t1_title: "Misterul lui π",
    t1_text: "π (pi) este o constantă care arată de câte ori mai lung este circumferința (K) unui cerc decât diametrul lui (d). Este un număr irațional cu infinit de zecimale.",
    t1_b1: "π ≈ 3,14",
    t1_b2: "C = d · π",
    t1_b3: "Util în fizică și inginerie",
    t1_inst: "Folosește glisierul! Dacă circumferința este 10π, cât este diametrul?",
    t1_h1: "Împarte circumferința la π.",
    t1_h2: "Răspunsul este 10. Setează glisierul pe 10.",
    t1_q: "Prin care constantă matematică este definit π?",
    t1_q_a: "Raportul circumferinței la diametru", t1_q_b: "Raportul ariei la diametru", t1_q_c: "De 2 ori raza", t1_q_d: "Lungimea razei",
    t2_title: "Calcularea Circumferinței",
    t2_text: "Circumferința este lungimea cercului. Folosim metoda rezolvării ecuației pentru a o calcula atunci când se cunoaște raza (r)! Luăm π ≈ 3,14.",
    t2_b1: "C = 2 · r · π",
    t2_b2: "Exemplu: r=5 cm -> C = 2 · 5 · 3,14",
    t2_b3: "Așa o calculăm pas cu pas",
    t2_inst: "Calculează circumferința pentru r=5! (Folosește π ≈ 3,14!)",
    t2_step1: "Calculează 2 · 5.",
    t2_step2: "Înmulțește 10 cu 3,14.",
    t2_h1: "2 · 5 = 10, apoi 10 · 3,14 = 31,4.",
    t2_h2: "Rezultatul este 31,4 cm.",
    t2_q: "Care este circumferința dacă r = 1 cm? (π ≈ 3,14)",
    t2_q_a: "6,28 cm", t2_q_b: "3,14 cm", t2_q_c: "1 cm", t2_q_d: "10 cm",
    t3_title: "Calcularea Ariei",
    t3_text: "Aria arată cât spațiu ocupă cercul. Formula: r la pătrat ori π.",
    t3_b1: "A = r² · π",
    t3_b2: "r² înseamnă r · r",
    t3_b3: "π ≈ 3,14 și aici",
    t3_inst: "Marchează valoarea lui π (3,14) pe axa numerelor!",
    t3_h1: "Găsește poziția între 3 și 3,2.",
    t3_h2: "Apasă puțin după 3. Aici este 3,14.",
    t3_q: "Dacă r = 2, care este aria? (π ≈ 3,14)",
    t3_q_a: "12,56", t3_q_b: "6,28", t3_q_c: "4", t3_q_d: "2",
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
      type: "ratio-slider",
      baseValue: 1,      // unit diameter
      basePrice: 1,      // unit pi (K=pi*d)
      targetValue: 10,   // diameter we want to find
      targetPrice: 10,   // result circumference (10pi)
      unitName: "d",
      currency: "π",
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
      equation: "K = 2 · 5 · 3,14",
      steps: [
        { instruction: "t2_step1", choices: [8, 10, 15, 20], answer: 10, equation: "K = 10 · 3,14" },
        { instruction: "t2_step2", choices: [31.4, 3.14, 6.28, 62.8], answer: 31.4, equation: "K = 31,4 cm" }
      ],
      finalAnswer: 31.4,
      variable: "K",
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
      max: 5,
      start: 0,
      target: 3.14, // Roughly pi
      step: 0.2, // fine step for pi
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
  icon: "⭕",
  topics: TOPICS,
  rounds: [],
};

const CircleExplorer7 = memo(function CircleExplorer7({
  color = "#DB2777",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_circles" color={color} lang={lang} onDone={onDone} />;
});

export default CircleExplorer7;
