"use client";
// QuadraticExplorer8 — Quadratic Equations for Grade 8 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, technikai stílus) ──────────────────

const Topic1Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="quadGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#quadGrad1)" rx="20" />
    <g transform="translate(120, 80)">
      {/* Parabola rajz */}
      <path d="M -50,-40 Q 0,60 50,-40" fill="none" stroke="#EF4444" strokeWidth="3" />
      <text x="0" y="-30" fontSize="18" fontWeight="black" fill="#B45309" textAnchor="middle">{labels.t1_svg_eq}</text>
      <circle cx="-28" cy="15" r="4" fill="#F59E0B" />
      <circle cx="28" cy="15" r="4" fill="#F59E0B" />
      <text x="0" y="45" fontSize="10" fill="#991B1B" textAnchor="middle">{labels.t1_svg_zeros}</text>
    </g>
  </svg>
));

const Topic2Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFF7ED" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#9A3412" textAnchor="middle">{labels.t2_svg_disc}</text>
      <text x="0" y="15" fontSize="24" fontWeight="black" fill="#C2410C" textAnchor="middle">{labels.t2_svg_formula}</text>
      <rect x="-60" y="25" width="120" height="2" fill="#EA580C" />
    </g>
  </svg>
));

const Topic3Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FEF2F2" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="10" fontSize="18" fontWeight="bold" fill="#DC2626" textAnchor="middle">{labels.t3_svg_formula}</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Quadratic Equations",
    t1_title: "Standard Form and the Parabola",
    t1_text: "A quadratic equation in standard form is ax² + bx + c = 0. Its graph is a parabola. The value of 'a' determines whether the parabola opens upward or downward.",
    t1_b1: "a ≠ 0 (otherwise it would be linear)",
    t1_b2: "If a > 0, the parabola smiles (opens upward)",
    t1_b3: "The c value shows where the parabola crosses the y-axis",
    t1_inst: "Look at the parabola! Find where it crosses the x-axis! What is y when x = 2?",
    t1_h1: "Find 2 on the x-axis.",
    t1_h2: "The parabola crosses at y = 0 here. Click on 0.",
    t1_svg_eq: "ax² + bx + c = 0",
    t1_svg_zeros: "Zeros (Roots)",
    t1_q: "What shape is the graph of a quadratic function?",
    t1_q_a: "Parabola", t1_q_b: "Line", t1_q_c: "Hyperbola", t1_q_d: "Circle",
    t2_title: "The Discriminant (D)",
    t2_text: "The discriminant helps determine how many solutions the equation has without solving it. It is calculated as: D = b² - 4ac.",
    t2_b1: "D > 0: Two different real roots",
    t2_b2: "D = 0: One (double) real root",
    t2_b3: "D < 0: No real solutions",
    t2_inst: "Calculate the discriminant: x² - 6x + 9 = 0 (a=1, b=-6, c=9)",
    t2_step1: "Calculate b² (-6 · -6)",
    t2_step2: "Subtract 4ac (4 · 1 · 9)",
    t2_h1: "(-6)² = 36. 4 · 1 · 9 = 36.",
    t2_h2: "36 - 36 = 0. The discriminant is 0.",
    t2_svg_disc: "Discriminant",
    t2_svg_formula: "D = b² - 4ac",
    t2_q: "How many solutions does the equation have if D = 16?",
    t2_q_a: "2", t2_q_b: "1", t2_q_c: "0", t2_q_d: "Infinite",
    t3_title: "The Quadratic Formula",
    t3_text: "The quadratic formula gives us the x values. The order matters: calculate the part under the square root (D) first, then continue.",
    t3_b1: "Use the ± sign to get two roots",
    t3_b2: "The denominator always has 2a",
    t3_b3: "Always verify solutions by substitution",
    t3_inst: "How does the parabola change if we increase 'a'? Adjust it!",
    t3_h1: "The larger the 'a', the narrower the parabola.",
    t3_h2: "Move the slider to a higher value.",
    t3_svg_formula: "x₁,₂ = (-b ± √D) / 2a",
    t3_q: "What is x if x² = 25?",
    t3_q_a: "5 and -5", t3_q_b: "Only 5", t3_q_c: "25", t3_q_d: "0",
  },
  de: {
    explorer_title: "Quadratische Gleichungen",
    t1_title: "Normalform und Parabel",
    t1_text: "Eine quadratische Gleichung in Normalform ist ax² + bx + c = 0. Der Graph ist eine Parabel. Der Wert von 'a' bestimmt, ob die Parabel nach oben oder unten geöffnet ist.",
    t1_b1: "a ≠ 0 (sonst wäre es linear)",
    t1_b2: "Wenn a > 0, lächelt die Parabel (öffnet sich nach oben)",
    t1_b3: "Der c-Wert zeigt, wo die Parabel die y-Achse schneidet",
    t1_inst: "Schau auf die Parabel! Finde die Nullstellen! Wie groß ist y wenn x = 2?",
    t1_h1: "Finde 2 auf der x-Achse.",
    t1_h2: "Die Parabel schneidet hier bei y = 0. Klick auf 0.",
    t1_svg_eq: "ax² + bx + c = 0",
    t1_svg_zeros: "Nullstellen",
    t1_q: "Welche Form hat der Graph einer quadratischen Funktion?",
    t1_q_a: "Parabel", t1_q_b: "Gerade", t1_q_c: "Hyperbel", t1_q_d: "Kreis",
    t2_title: "Die Diskriminante (D)",
    t2_text: "Die Diskriminante hilft zu bestimmen, wie viele Lösungen die Gleichung hat, ohne sie zu lösen. Sie wird berechnet als: D = b² - 4ac.",
    t2_b1: "D > 0: Zwei verschiedene reelle Wurzeln",
    t2_b2: "D = 0: Eine (doppelte) reelle Wurzel",
    t2_b3: "D < 0: Keine reellen Lösungen",
    t2_inst: "Berechne die Diskriminante: x² - 6x + 9 = 0 (a=1, b=-6, c=9)",
    t2_step1: "Berechne b² (-6 · -6)",
    t2_step2: "Ziehe 4ac ab (4 · 1 · 9)",
    t2_h1: "(-6)² = 36. 4 · 1 · 9 = 36.",
    t2_h2: "36 - 36 = 0. Die Diskriminante ist 0.",
    t2_svg_disc: "Diskriminante",
    t2_svg_formula: "D = b² - 4ac",
    t2_q: "Wie viele Lösungen hat die Gleichung, wenn D = 16?",
    t2_q_a: "2", t2_q_b: "1", t2_q_c: "0", t2_q_d: "Unendlich",
    t3_title: "Die Lösungsformel",
    t3_text: "Die Lösungsformel gibt uns die x-Werte. Die Reihenfolge ist wichtig: Berechne zuerst den Teil unter der Quadratwurzel (D), dann geht es weiter.",
    t3_b1: "Nutze das ± Zeichen für zwei Wurzeln",
    t3_b2: "Der Nenner hat immer 2a",
    t3_b3: "Überprüfe die Lösungen immer durch Einsetzen",
    t3_inst: "Wie ändert sich die Parabel, wenn wir 'a' erhöhen? Stelle es ein!",
    t3_h1: "Je größer 'a', desto enger wird die Parabel.",
    t3_h2: "Schiebe den Schieber auf einen höheren Wert.",
    t3_svg_formula: "x₁,₂ = (-b ± √D) / 2a",
    t3_q: "Was ist x, wenn x² = 25?",
    t3_q_a: "5 und -5", t3_q_b: "Nur 5", t3_q_c: "25", t3_q_d: "0",
  },
  hu: {
    explorer_title: "Másodfokú Egyenletek",
    t1_title: "Az alapalak és a Parabola",
    t1_text: "A másodfokú egyenlet általános alakja ax² + bx + c = 0. A grafikonja egy parabola. Az 'a' értéke határozza meg, hogy a parabola felfelé vagy lefelé nyílik.",
    t1_b1: "a ≠ 0 (különben elsőfokú lenne)",
    t1_b2: "Ha a > 0, a parabola 'mosolyog' (felfelé nyílik)",
    t1_b3: "A c érték mutatja meg az y-tengelymetszetet",
    t1_inst: "Nézd a parabolát! Keresd meg a zérushelyet! Mennyi az y értéke, ha x = 2?",
    t1_h1: "Keresd meg az x tengelyen a 2-est.",
    t1_h2: "A parabola pontja itt y = 0. Koppints a 0-ra.",
    t1_svg_eq: "ax² + bx + c = 0",
    t1_svg_zeros: "Zérushelyek (Gyökök)",
    t1_q: "Milyen alakú a másodfokú függvény grafikonja?",
    t1_q_a: "Parabola", t1_q_b: "Egyenes", t1_q_c: "Hiperbola", t1_q_d: "Kör",
    t2_title: "A Diszkrimináns (D)",
    t2_text: "A diszkrimináns segít eldönteni, hány megoldása van az egyenletnek anélkül, hogy végigszámolnánk. Kiszámítása: D = b² - 4ac.",
    t2_b1: "D > 0: Két különböző valós gyök",
    t2_b2: "D = 0: Egy (kettős) valós gyök",
    t2_b3: "D < 0: Nincs valós megoldás",
    t2_inst: "Számold ki a diszkriminánst: x² - 6x + 9 = 0 (a=1, b=-6, c=9)",
    t2_step1: "Számold ki b² értékét (-6 · -6)",
    t2_step2: "Vond ki belőle a 4ac-t (4 · 1 · 9)",
    t2_h1: "(-6)² = 36. 4 · 1 · 9 = 36.",
    t2_h2: "36 - 36 = 0. A diszkrimináns 0.",
    t2_svg_disc: "Diszkrimináns",
    t2_svg_formula: "D = b² - 4ac",
    t2_q: "Hány megoldása van az egyenletnek, ha D = 16?",
    t2_q_a: "2", t2_q_b: "1", t2_q_c: "0", t2_q_d: "Végtelen",
    t3_title: "A Megoldóképlet",
    t3_text: "A megoldóképlet segítségével megkapjuk az x értékeket. Fontos a sorrend: először a gyökjel alatti részt (D) számoljuk ki, majd jöhet a többi.",
    t3_b1: "Használd a ± jelet a két gyökhöz",
    t3_b2: "A nevezőben mindig 2a szerepel",
    t3_b3: "Mindig ellenőrizd a megoldást behelyettesítéssel",
    t3_inst: "Hogyan változik a parabola, ha növeljük az 'a' értékét? Állítsd be!",
    t3_h1: "Minél nagyobb az 'a', annál szűkebb lesz a parabola.",
    t3_h2: "Húzd a csúszkát magasabb értékre.",
    t3_svg_formula: "x₁,₂ = (-b ± √D) / 2a",
    t3_q: "Mennyi az x értéke, ha x² = 25?",
    t3_q_a: "5 és -5", t3_q_b: "Csak 5", t3_q_c: "25", t3_q_d: "0",
  },
  ro: {
    explorer_title: "Ecuații Pătratice",
    t1_title: "Forma Standard și Parabola",
    t1_text: "O ecuație pătratică în formă standard este ax² + bx + c = 0. Graficul ei este o parabolă. Valoarea lui 'a' determină dacă parabola se deschide în sus sau în jos.",
    t1_b1: "a ≠ 0 (altfel ar fi liniară)",
    t1_b2: "Dacă a > 0, parabola zâmbește (se deschide în sus)",
    t1_b3: "Valoarea c arată unde parabola intersectează axa y",
    t1_inst: "Uita-te la parabolă! Găsește rădăcinile! Care este y când x = 2?",
    t1_h1: "Găsește 2 pe axa x.",
    t1_h2: "Parabola se intersectează la y = 0 aici. Clic pe 0.",
    t1_svg_eq: "ax² + bx + c = 0",
    t1_svg_zeros: "Rădăcini",
    t1_q: "Ce formă are graficul unei funcții pătratice?",
    t1_q_a: "Parabolă", t1_q_b: "Linie", t1_q_c: "Hiperbolă", t1_q_d: "Cerc",
    t2_title: "Discriminantul (D)",
    t2_text: "Discriminantul ajută la determinarea numărului de soluții fără a rezolva ecuația. Se calculează ca: D = b² - 4ac.",
    t2_b1: "D > 0: Două rădăcini reale diferite",
    t2_b2: "D = 0: O rădăcină reală (dublă)",
    t2_b3: "D < 0: Fără soluții reale",
    t2_inst: "Calculează discriminantul: x² - 6x + 9 = 0 (a=1, b=-6, c=9)",
    t2_step1: "Calculează b² (-6 · -6)",
    t2_step2: "Scade 4ac (4 · 1 · 9)",
    t2_h1: "(-6)² = 36. 4 · 1 · 9 = 36.",
    t2_h2: "36 - 36 = 0. Discriminantul este 0.",
    t2_svg_disc: "Discriminant",
    t2_svg_formula: "D = b² - 4ac",
    t2_q: "Câte soluții are ecuația dacă D = 16?",
    t2_q_a: "2", t2_q_b: "1", t2_q_c: "0", t2_q_d: "Infinit",
    t3_title: "Formula de Rezolvare",
    t3_text: "Formula de rezolvare ne dă valorile x. Ordinea este importantă: calculează mai întâi partea sub radical (D), apoi continuă.",
    t3_b1: "Folosește semnul ± pentru două rădăcini",
    t3_b2: "Numitorul are întotdeauna 2a",
    t3_b3: "Verifică întotdeauna soluțiile prin înlocuire",
    t3_inst: "Cum se schimbă parabola dacă creștem 'a'? Ajustează!",
    t3_h1: "Cu cât e mai mare 'a', cu atât mai îngustă e parabola.",
    t3_h2: "Mută glisorul la o valoare mai mare.",
    t3_svg_formula: "x₁,₂ = (-b ± √D) / 2a",
    t3_q: "Care este x dacă x² = 25?",
    t3_q_a: "5 și -5", t3_q_b: "Doar 5", t3_q_c: "25", t3_q_d: "0",
  }
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: ({ labels }) => <Topic1Svg labels={labels} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "graph-plotter",
      points: [
        { x: -1, y: 3 },
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: 0 },
        { x: 3, y: 3 }
      ],
      targetX: 2,
      targetY: 0,
      chartType: "line", // smooth curve simulated by points
      xLabel: "x",
      yLabel: "y",
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
    svg: ({ labels }) => <Topic2Svg labels={labels} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "D = (-6)² - 4 · 1 · 9",
      steps: [
        { instruction: "t2_step1", choices: [12, -12, 36, -36], answer: 36, equation: "D = 36 - 4 · 1 · 9" },
        { instruction: "t2_step2", choices: [0, 4, 36, 72], answer: 0, equation: "D = 0" }
      ],
      finalAnswer: 0,
      variable: "D",
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
    svg: ({ labels }) => <Topic3Svg labels={labels} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,
      basePrice: 10, // width visual
      targetValue: 4,
      targetPrice: 2, // narrower visual
      unitName: "a együttható",
      currency: "szélesség",
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
  icon: "∪",
  topics: TOPICS,
  rounds: [],
};

const QuadraticExplorer8 = memo(function QuadraticExplorer8({
  color = "#EF4444",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_quad" color={color} lang={lang} onDone={onDone} />;
});

export default QuadraticExplorer8;
