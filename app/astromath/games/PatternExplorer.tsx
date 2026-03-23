"use client";
// PatternExplorer — Data & Patterns for Grade 1 (island i9)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Tally Chart ──────────────────────────────────────────────────────

const TallyChartSvg = memo(function TallyChartSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="tallyG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E879F9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F4A8FF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#tallyG)" rx="16" />

      {/* Column labels */}
      <text x="50" y="20" fontSize="12" fontWeight="bold" fill="#E879F9" textAnchor="middle">🍎</text>
      <text x="120" y="20" fontSize="12" fontWeight="bold" fill="#E879F9" textAnchor="middle">🍌</text>
      <text x="190" y="20" fontSize="12" fontWeight="bold" fill="#E879F9" textAnchor="middle">🍇</text>

      {/* Apples: 4 */}
      <text x="40" y="45" fontSize="16" textAnchor="middle">||||</text>
      <text x="60" y="60" fontSize="13" fontWeight="bold" fill="#E879F9" textAnchor="middle">4</text>

      {/* Bananas: 3 */}
      <text x="110" y="45" fontSize="16" textAnchor="middle">|||</text>
      <text x="130" y="60" fontSize="13" fontWeight="bold" fill="#E879F9" textAnchor="middle">3</text>

      {/* Grapes: 2 */}
      <text x="180" y="45" fontSize="16" textAnchor="middle">||</text>
      <text x="200" y="60" fontSize="13" fontWeight="bold" fill="#E879F9" textAnchor="middle">2</text>

      {/* Dividing line */}
      <line x1="20" y1="80" x2="220" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

      {/* Total */}
      <text x="120" y="110" fontSize="13" fontWeight="bold" fill="#E879F9" textAnchor="middle">Total: 4 + 3 + 2 = 9 fruits</text>
      <text x="120" y="145" fontSize="12" fill="#E879F9" textAnchor="middle" opacity="0.7">The favorite is apples (4 tally marks)</text>
    </svg>
  );
});

// ─── SVG: Sequence Pattern ─────────────────────────────────────────────────

const SequenceSvg = memo(function SequenceSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="seqG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#seqG)" rx="16" />

      {/* Sequence numbers */}
      <text x="30" y="50" fontSize="20" fontWeight="bold" fill="#06B6D4" textAnchor="middle">2</text>
      <text x="60" y="50" fontSize="16" fill="#06B6D4" textAnchor="middle">→ +2</text>
      <text x="90" y="50" fontSize="20" fontWeight="bold" fill="#06B6D4" textAnchor="middle">4</text>
      <text x="120" y="50" fontSize="16" fill="#06B6D4" textAnchor="middle">→ +2</text>
      <text x="150" y="50" fontSize="20" fontWeight="bold" fill="#06B6D4" textAnchor="middle">6</text>
      <text x="180" y="50" fontSize="16" fill="#06B6D4" textAnchor="middle">→ +2</text>
      <text x="210" y="50" fontSize="20" fontWeight="bold" fill="#06B6D4" textAnchor="middle">8</text>

      {/* Pattern description */}
      <text x="120" y="85" fontSize="12" fill="#06B6D4" textAnchor="middle" fontWeight="bold">Pattern Rule: Add 2 each time</text>
      <text x="120" y="110" fontSize="12" fill="#06B6D4" textAnchor="middle" opacity="0.8">What comes next after 8?</text>
      <text x="120" y="130" fontSize="13" fontWeight="bold" fill="#06B6D4" textAnchor="middle">? ? ?</text>
    </svg>
  );
});

// ─── SVG: Sorting & Classifying ────────────────────────────────────────────

const SortingClassSvg = memo(function SortingClassSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="sortG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#sortG)" rx="16" />

      {/* Left group: Big circles */}
      <text x="60" y="25" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="middle">Big</text>
      <text x="50" y="55" fontSize="18" textAnchor="middle">🔵</text>
      <text x="70" y="55" fontSize="18" textAnchor="middle">🔵</text>
      <text x="50" y="80" fontSize="18" textAnchor="middle">🔵</text>
      <text x="60" y="105" fontSize="13" fontWeight="bold" fill="#10B981" textAnchor="middle">3 big</text>

      {/* Plus sign */}
      <text x="120" y="65" fontSize="24" fill="#10B981" textAnchor="middle" opacity="0.6">+</text>

      {/* Right group: Small circles */}
      <text x="180" y="25" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="middle">Small</text>
      <text x="165" y="55" fontSize="12" textAnchor="middle">🔵</text>
      <text x="180" y="55" fontSize="12" textAnchor="middle">🔵</text>
      <text x="195" y="55" fontSize="12" textAnchor="middle">🔵</text>
      <text x="175" y="75" fontSize="12" textAnchor="middle">🔵</text>
      <text x="180" y="105" fontSize="13" fontWeight="bold" fill="#10B981" textAnchor="middle">4 small</text>

      {/* Equals and total */}
      <line x1="30" y1="130" x2="210" y2="130" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
      <text x="120" y="155" fontSize="14" fontWeight="bold" fill="#10B981" textAnchor="middle">Total: 3 + 4 = 7 circles</text>
    </svg>
  );
});

// ─── Labels (4 languages) ──────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Data & Patterns Explorer",
    // Topic 1: Reading data (tally charts)
    t1_title: "Reading Data from Tables",
    t1_text: "A table or chart helps us count and organize information. We use tally marks (||||) to count objects. Then we add up all the tallies to find the total!",
    t1_b1: "Tally marks help us count in groups of 5",
    t1_b2: "Each group of 5 is marked with a line through 4",
    t1_b3: "Add up the groups to find the total",
    t1_inst: "Count the tallies and combine the groups!",
    t1_h1: "Count: 4 apples, 3 bananas, 2 grapes",
    t1_h2: "Total: 4 + 3 + 2 = 9 fruits",
    t1_q: "In the chart, which fruit is the favorite?",
    t1_q_apples: "Apples (4)",
    t1_q_bananas: "Bananas (3)",
    t1_q_grapes: "Grapes (2)",
    t1_q_all: "All equal",
    // Topic 2: Number sequences & patterns
    t2_title: "Number Sequences & Patterns",
    t2_text: "A pattern is a sequence of numbers or objects that follows a rule. We can find the rule by looking at how numbers change: +2, -1, ×2, etc. Once we know the rule, we can find the next number!",
    t2_b1: "Look for what changes from one number to the next",
    t2_b2: "Apply the same rule again to find the next number",
    t2_b3: "Patterns help us predict what comes next",
    t2_inst: "Tap the number where the pattern 2, 4, 6, 8 lands next!",
    t2_h1: "The pattern adds 2 each time: 2→4→6→8→?",
    t2_h2: "8 + 2 = 10 — tap number 10!",
    t2_q: "What comes next: 5, 10, 15, __?",
    t2_q_18: "18",
    t2_q_20: "20",
    t2_q_25: "25",
    t2_q_16: "16",
    // Topic 3: Sorting & classifying
    t3_title: "Sorting and Classifying Objects",
    t3_text: "We can sort objects into groups by different properties: color, size, shape, or type. When we sort, we organize things to make counting easier. We can count each group separately, then add them together!",
    t3_b1: "Choose a property to sort by (color, size, shape)",
    t3_b2: "Count each group separately",
    t3_b3: "Add the groups together to find the total",
    t3_inst: "Count the circles and combine them by size!",
    t3_h1: "Count: 3 big circles, 4 small circles",
    t3_h2: "Total: 3 + 4 = 7 circles",
    t3_q: "Sort by shape: how many circles? 🔵🔵🟢🔵🟢🔵",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_2: "2",
    t3_q_5: "5",
  },
  de: {
    explorer_title: "Daten & Muster entdecken",
    t1_title: "Daten aus Tabellen lesen",
    t1_text: "Eine Tabelle oder ein Diagramm hilft uns, Informationen zu zählen und zu organisieren. Wir verwenden Strichmarkierungen (||||), um Gegenstände zu zählen. Dann addieren wir alle Markierungen, um die Gesamtzahl zu finden!",
    t1_b1: "Strichmarkierungen helfen uns in Gruppen von 5 zu zählen",
    t1_b2: "Jede Gruppe von 5 wird mit einer Linie durch 4 gekennzeichnet",
    t1_b3: "Addiere die Gruppen, um die Gesamtzahl zu finden",
    t1_inst: "Zähle die Markierungen und kombiniere die Gruppen!",
    t1_h1: "Zähle: 4 Äpfel, 3 Bananen, 2 Trauben",
    t1_h2: "Gesamt: 4 + 3 + 2 = 9 Früchte",
    t1_q: "Welche Frucht ist in der Tabelle das Lieblingsobst?",
    t1_q_apples: "Äpfel (4)",
    t1_q_bananas: "Bananen (3)",
    t1_q_grapes: "Trauben (2)",
    t1_q_all: "Alle gleich",
    t2_title: "Zahlenfolgen & Muster",
    t2_text: "Ein Muster ist eine Folge von Zahlen oder Objekten, die einer Regel folgt. Wir können die Regel finden, indem wir schauen, wie sich Zahlen ändern: +2, -1, ×2 usw. Wenn wir die Regel kennen, können wir die nächste Zahl finden!",
    t2_b1: "Schau, was sich von einer Zahl zur nächsten ändert",
    t2_b2: "Wende die gleiche Regel wieder an, um die nächste Zahl zu finden",
    t2_b3: "Muster helfen uns vorherzusagen, was kommt",
    t2_inst: "Tippe auf die Zahl, wo die Zahlenfolge 2, 4, 6, 8 weitergeht!",
    t2_h1: "Das Muster addiert jedes Mal 2: 2→4→6→8→?",
    t2_h2: "8 + 2 = 10 — tippe auf die 10!",
    t2_q: "Was kommt als nächstes: 5, 10, 15, __?",
    t2_q_18: "18",
    t2_q_20: "20",
    t2_q_25: "25",
    t2_q_16: "16",
    t3_title: "Objekte sortieren und klassifizieren",
    t3_text: "Wir können Objekte nach verschiedenen Eigenschaften in Gruppen sortieren: Farbe, Größe, Form oder Typ. Wenn wir sortieren, organisieren wir Dinge, um das Zählen leichter zu machen. Wir können jede Gruppe einzeln zählen und dann addieren!",
    t3_b1: "Wähle eine Eigenschaft zum Sortieren (Farbe, Größe, Form)",
    t3_b2: "Zähle jede Gruppe einzeln",
    t3_b3: "Addiere die Gruppen, um die Gesamtzahl zu finden",
    t3_inst: "Zähle die Kreise und kombiniere sie nach Größe!",
    t3_h1: "Zähle: 3 große Kreise, 4 kleine Kreise",
    t3_h2: "Gesamt: 3 + 4 = 7 Kreise",
    t3_q: "Sortiere nach Form: wie viele Kreise? 🔵🔵🟢🔵🟢🔵",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_2: "2",
    t3_q_5: "5",
  },
  hu: {
    explorer_title: "Adatok & Minták felfedezés",
    t1_title: "Adatok olvasása táblázatokból",
    t1_text: "Egy táblázat vagy grafikon segít számolni és információkat szervezni. A vonásjegyeket (||||) használjuk tárgyak számlálásához. Aztán összeadjuk az összes vonást, hogy megtaláljuk az összeget!",
    t1_b1: "A vonásjegyek 5-ös csoportokra segítik a számlálást",
    t1_b2: "Minden 5-ös csoport egy vonalon keresztül van megjelölve",
    t1_b3: "Add össze a csoportokat az összesen megtalálásához",
    t1_inst: "Számold a vonásokat és kombinálj csoportokat!",
    t1_h1: "Számolás: 4 alma, 3 banán, 2 szőlő",
    t1_h2: "Összesen: 4 + 3 + 2 = 9 gyümölcs",
    t1_q: "A táblázatban melyik gyümölcs a kedvenc?",
    t1_q_apples: "Alma (4)",
    t1_q_bananas: "Banán (3)",
    t1_q_grapes: "Szőlő (2)",
    t1_q_all: "Mindegyik egyenlő",
    t2_title: "Számsorozatok & Minták",
    t2_text: "A minta egy olyan számsor vagy objektumsor, amely egy szabályt követi. Meg tudjuk találni a szabályt, ha megnézzük hogyan változnak a számok: +2, -1, ×2 stb. Amikor ismerjük a szabályt, meg tudjuk találni a következő számot!",
    t2_b1: "Nézd meg, mi változik egyik számról a másikra",
    t2_b2: "Alkalmaz ugyanezt a szabályt, hogy megtaláld a következő számot",
    t2_b3: "A minták segíteni fognak megjósolni, hogy mi jön",
    t2_inst: "Koppints arra a számra, ahol a 2, 4, 6, 8 minta folytatódik!",
    t2_h1: "A minta minden alkalommal 2-t ad: 2→4→6→8→?",
    t2_h2: "8 + 2 = 10 — koppints a 10-re!",
    t2_q: "Mi jön következő: 5, 10, 15, __?",
    t2_q_18: "18",
    t2_q_20: "20",
    t2_q_25: "25",
    t2_q_16: "16",
    t3_title: "Tárgyak szortírozása és besorolása",
    t3_text: "Tárgyakat különféle tulajdonságok szerint csoportosíthatunk: szín, méret, forma vagy típus. Amikor szortírozunk, rendszereztük a dolgokat, hogy könnyebb legyen a számlálás. Minden csoportot külön számlálhatunk, majd összeadhatjuk!",
    t3_b1: "Válassz egy tulajdonságot szortírózáshoz (szín, méret, forma)",
    t3_b2: "Számold meg minden csoportot külön",
    t3_b3: "Add össze a csoportokat az összes megtalálásához",
    t3_inst: "Számold a köröket és kombinálj méret szerint!",
    t3_h1: "Számolás: 3 nagy kör, 4 kis kör",
    t3_h2: "Összesen: 3 + 4 = 7 kör",
    t3_q: "Szortírozz forma szerint: hány kör van? 🔵🔵🟢🔵🟢🔵",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_2: "2",
    t3_q_5: "5",
  },
  ro: {
    explorer_title: "Explorare date și modele",
    t1_title: "Citirea datelor din tabele",
    t1_text: "Un tabel sau o diagramă ne ajută să numărăm și să organizăm informații. Folosim semne de liniuță (||||) pentru a număra obiecte. Apoi adunăm toate liniuțele pentru a găsi totalul!",
    t1_b1: "Semnele de liniuță ne ajută să numărăm în grupuri de 5",
    t1_b2: "Fiecare grup de 5 este marcat cu o linie peste 4",
    t1_b3: "Adună grupurile pentru a găsi totalul",
    t1_inst: "Numără liniuțele și combină grupurile!",
    t1_h1: "Numărare: 4 mere, 3 banane, 2 struguri",
    t1_h2: "Total: 4 + 3 + 2 = 9 fructe",
    t1_q: "În tabel, ce fruct este preferat?",
    t1_q_apples: "Mere (4)",
    t1_q_bananas: "Banane (3)",
    t1_q_grapes: "Struguri (2)",
    t1_q_all: "Toate egale",
    t2_title: "Secvențe de numere și modele",
    t2_text: "Un model este o secvență de numere sau obiecte care urmează o regulă. Putem găsi regula privind cum se schimbă numerele: +2, -1, ×2 etc. Odată ce știm regula, putem găsi următorul număr!",
    t2_b1: "Privește ce se schimbă de la un număr la altul",
    t2_b2: "Aplică aceeași regulă din nou pentru a găsi următorul număr",
    t2_b3: "Modelele ne ajută să prezicem ce vine",
    t2_inst: "Atinge numărul unde secvența 2, 4, 6, 8 continuă!",
    t2_h1: "Modelul adaugă 2 de fiecare dată: 2→4→6→8→?",
    t2_h2: "8 + 2 = 10 — atinge numărul 10!",
    t2_q: "Ce vine în continuare: 5, 10, 15, __?",
    t2_q_18: "18",
    t2_q_20: "20",
    t2_q_25: "25",
    t2_q_16: "16",
    t3_title: "Sortarea și clasificarea obiectelor",
    t3_text: "Putem sorta obiecte în grupuri după diferite proprietăți: culoare, mărime, formă sau tip. Când sortăm, organizăm lucrurile pentru a ușura numărarea. Putem număra fiecare grup separat, apoi le adunăm!",
    t3_b1: "Alege o proprietate după care să sortezi (culoare, mărime, formă)",
    t3_b2: "Numără fiecare grup separat",
    t3_b3: "Adună grupurile pentru a găsi totalul",
    t3_inst: "Numără cercurile și combină-le după mărime!",
    t3_h1: "Numărare: 3 cercuri mari, 4 cercuri mici",
    t3_h2: "Total: 3 + 4 = 7 cercuri",
    t3_q: "Sortează după formă: câte cercuri? 🔵🔵🟢🔵🟢🔵",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_2: "2",
    t3_q_5: "5",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Reading data from tables (tally charts)
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <TallyChartSvg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 3, 2],
      answer: 9,
      blockIcon: "🍎",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_apples", "t1_q_bananas", "t1_q_grapes", "t1_q_all"],
      answer: "t1_q_apples",
    },
  },

  // Topic 2: Number sequences & patterns
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <SequenceSvg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 20,
      start: 8,
      target: 10,
      showJumps: true,
      jumpCount: 1,
      step: 2,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_18", "t2_q_20", "t2_q_25", "t2_q_16"],
      answer: "t2_q_20",
    },
  },

  // Topic 3: Sorting & classifying
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <SortingClassSvg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 4],
      answer: 7,
      blockIcon: "🔵",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_3", "t3_q_4", "t3_q_5"],
      answer: "t3_q_3",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📊",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const PatternExplorer = memo(function PatternExplorer({
  color = "#E879F9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_patterns" color={color} lang={lang} onDone={onDone} />;
});

export default PatternExplorer;
