"use client";
// DivisionExplorer — Cell Division (Zellteilung) Grade 7
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topics: Cell cycle, mitosis, why cells divide, DNA and chromosomes

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Cell Cycle
    r1_title: "The Cell Cycle",
    r1_text: "The cell cycle is the process of growth, DNA copying, and division. It has three main phases: G1, S, and G2, followed by mitosis (M phase).",
    r1_fact1: "G1 phase: Cell grows and performs normal functions",
    r1_fact2: "S phase: DNA is copied (replication) — each chromosome is duplicated",
    r1_fact3: "G2 phase: Cell continues to grow and prepares for division",
    r1_fact4: "M phase: Mitosis — the cell divides into two daughter cells",

    // Round 2: Mitosis
    r2_title: "The Stages of Mitosis",
    r2_text: "Mitosis is divided into four stages. Each stage has a specific job in dividing the cell's genetic material equally.",
    r2_fact1: "Prophase: Chromosomes condense and become visible; spindle fibers form",
    r2_fact2: "Metaphase: Chromosomes line up in the middle of the cell",
    r2_fact3: "Anaphase: Sister chromatids separate and move to opposite poles",
    r2_fact4: "Telophase: Nuclear membranes form and the cell pinches in the middle",

    // Round 3: Why Cells Divide
    r3_title: "Why Do Cells Divide?",
    r3_text: "Cells divide for three main reasons: to grow the organism, to repair damaged tissues, and to reproduce asexually.",
    r3_q: "Which is a reason cells divide?",
    r3_growth: "Organisms grow by increasing cell number",
    r3_size: "Cells become larger than normal size",
    r3_rest: "Cells need time to rest",
    r3_nutrition: "Cells need more nutrients",

    // Round 4: DNA and Chromosomes
    r4_title: "DNA and Chromosomes",
    r4_text: "DNA is coiled tightly into structures called chromosomes. Humans have 46 chromosomes (23 pairs). During mitosis, chromosomes are copied so each daughter cell gets a complete set.",
    r4_fact1: "DNA carries genetic instructions (genes) for all cell functions",
    r4_fact2: "Chromosomes are made of tightly coiled DNA",
    r4_fact3: "When DNA replicates, each chromosome has two identical sister chromatids",
    r4_fact4: "Sister chromatids separate during anaphase to ensure equal distribution",

    // Round 5: Quiz
    r5_title: "Cell Division Review",

    // Quiz Questions
    q1_q: "What is the S phase of the cell cycle?",
    q1_a: "Synthesis (DNA copying)",
    q1_b: "Separation of sister chromatids",
    q1_c: "Spinning of spindle fibers",
    q1_d: "Shrinking of the nucleus",

    q2_q: "Which stage of mitosis has chromosomes lining up in the middle?",
    q2_a: "Prophase",
    q2_b: "Metaphase",
    q2_c: "Anaphase",
    q2_d: "Telophase",

    q3_q: "How many chromosomes do humans have?",
    q3_a: "23",
    q3_b: "46",
    q3_c: "92",
    q3_d: "184",
  },

  de: {
    // Round 1: Cell Cycle
    r1_title: "Der Zellzyklus",
    r1_text: "Der Zellzyklus ist der Prozess von Wachstum, DNA-Kopieren und Teilung. Er hat drei Hauptphasen: G1, S und G2, gefolgt von Mitose (M-Phase).",
    r1_fact1: "G1-Phase: Zelle wächst und erfüllt normale Funktionen",
    r1_fact2: "S-Phase: DNA wird kopiert (Replikation) — jedes Chromosom wird dupliziert",
    r1_fact3: "G2-Phase: Zelle wächst weiter und bereitet sich auf Teilung vor",
    r1_fact4: "M-Phase: Mitose — die Zelle teilt sich in zwei Tochterzellen",

    // Round 2: Mitosis
    r2_title: "Die Stadien der Mitose",
    r2_text: "Die Mitose ist in vier Stadien unterteilt. Jedes Stadium hat eine spezifische Aufgabe bei der gleichmäßigen Teilung des genetischen Materials der Zelle.",
    r2_fact1: "Prophase: Chromosomen kondensieren und werden sichtbar; Spindelfasern bilden sich",
    r2_fact2: "Metaphase: Chromosomen reihen sich in der Mitte der Zelle auf",
    r2_fact3: "Anaphase: Schwester-Chromatiden trennen sich und bewegen sich zu entgegengesetzten Polen",
    r2_fact4: "Telophase: Kernmembranen bilden sich und die Zelle schnürt sich in der Mitte ein",

    // Round 3: Why Cells Divide
    r3_title: "Warum teilen sich Zellen?",
    r3_text: "Zellen teilen sich aus drei Hauptgründen: um den Organismus zu vergrößern, um beschädigtes Gewebe zu reparieren und um sich ungeschlechtlich zu vermehren.",
    r3_q: "Welcher Grund führt zur Zellteilung?",
    r3_growth: "Organismen wachsen durch Erhöhung der Zellzahl",
    r3_size: "Zellen werden größer als normal",
    r3_rest: "Zellen brauchen Zeit zum Ausruhen",
    r3_nutrition: "Zellen brauchen mehr Nährstoffe",

    // Round 4: DNA and Chromosomes
    r4_title: "DNA und Chromosomen",
    r4_text: "DNA ist fest in Strukturen namens Chromosomen aufgewickelt. Menschen haben 46 Chromosomen (23 Paare). Während der Mitose werden Chromosomen kopiert, sodass jede Tochterzelle einen vollständigen Satz erhält.",
    r4_fact1: "DNA trägt genetische Anweisungen (Gene) für alle Zellfunktionen",
    r4_fact2: "Chromosomen bestehen aus fest aufgewickelter DNA",
    r4_fact3: "Bei der DNA-Replikation hat jedes Chromosom zwei identische Schwester-Chromatiden",
    r4_fact4: "Schwester-Chromatiden trennen sich während der Anaphase, um gleichmäßige Verteilung zu gewährleisten",

    // Round 5: Quiz
    r5_title: "Zellteilung Übersicht",

    // Quiz Questions
    q1_q: "Was ist die S-Phase des Zellzyklus?",
    q1_a: "Synthese (DNA-Kopieren)",
    q1_b: "Trennung von Schwester-Chromatiden",
    q1_c: "Spinnen von Spindelfasern",
    q1_d: "Schrumpfen des Zellkerns",

    q2_q: "Welches Stadium der Mitose hat Chromosomen in der Mitte aufgereiht?",
    q2_a: "Prophase",
    q2_b: "Metaphase",
    q2_c: "Anaphase",
    q2_d: "Telophase",

    q3_q: "Wie viele Chromosomen haben Menschen?",
    q3_a: "23",
    q3_b: "46",
    q3_c: "92",
    q3_d: "184",
  },

  hu: {
    // Round 1: Cell Cycle
    r1_title: "A sejt ciklusa",
    r1_text: "A sejt ciklusa a növekedés, DNS másolása és osztódás folyamata. Három fő szakaszból áll: G1, S és G2, ezt követi a mitózis (M fázis).",
    r1_fact1: "G1 fázis: A sejt növekszik és normál funkciókat végez",
    r1_fact2: "S fázis: A DNS másolódik (replikáció) — minden kromoszóma megkettőződik",
    r1_fact3: "G2 fázis: A sejt tovább növekszik és felkészül az osztódásra",
    r1_fact4: "M fázis: Mitózis — a sejt két lánysejtré osztódik",

    // Round 2: Mitosis
    r2_title: "A mitózis szakaszai",
    r2_text: "A mitózis négy szakaszra van osztva. Mindegyik szakasznak saját feladata van a sejt genetikai anyagának egyenlő elosztásában.",
    r2_fact1: "Profázis: A kromoszómák kondenzálódnak és láthatóvá válnak; orsófonalak képződnek",
    r2_fact2: "Metafázis: A kromoszómák a sejt közepén sorakoznak fel",
    r2_fact3: "Anafázis: Az iker-kromatidák elválnak és ellentétes pólusok felé mozdulnak",
    r2_fact4: "Telofázis: Magmembrántartalmak képződnek és a sejt a közepén begörcsölödik",

    // Round 3: Why Cells Divide
    r3_title: "Miért osztódnak a sejtek?",
    r3_text: "A sejtek három fő okból osztódnak: az organizmus növekedéséhez, a sérült szövetek javításához és az aszexuális szaporodáshoz.",
    r3_q: "Melyik oka van a sejt osztódásnak?",
    r3_growth: "Az organizmusok a sejtek számának növekedésével nőnek",
    r3_size: "A sejtek nagyobbak lesznek, mint a normális méret",
    r3_rest: "A sejtek pihenésre van szükségük",
    r3_nutrition: "A sejtek több tápanyagot igényelnek",

    // Round 4: DNA and Chromosomes
    r4_title: "DNS és kromoszómák",
    r4_text: "A DNS szorosan összecsavarodott a kromoszómákat nevezett szerkezetekbe. Az emberek 46 kromoszómával rendelkeznek (23 pár). A mitózis során a kromoszómákat másolják, így minden lánysejt teljes készletet kap.",
    r4_fact1: "A DNS genetikai utasításokat (gének) tartalmaz az összes sejt-funkcióhoz",
    r4_fact2: "A kromoszómák szorosan csavarodott DNS-ből állnak",
    r4_fact3: "A DNS replikációja során minden kromoszómának két azonos iker-kromatidja van",
    r4_fact4: "Az iker-kromatidák az anafázis alatt elválnak az egyenlő elosztás biztosítása érdekében",

    // Round 5: Quiz
    r5_title: "Sejt osztódás áttekintés",

    // Quiz Questions
    q1_q: "Mi a sejt ciklusa S fázisa?",
    q1_a: "Szintézis (DNS másolás)",
    q1_b: "Iker-kromatidák elválása",
    q1_c: "Orsófonalak pörgése",
    q1_d: "A sejt mag zsugorodása",

    q2_q: "A mitózis mely szakaszában sorakoznak a kromoszómák a közepében?",
    q2_a: "Profázis",
    q2_b: "Metafázis",
    q2_c: "Anafázis",
    q2_d: "Telofázis",

    q3_q: "Hány kromoszómával rendelkeznek az emberek?",
    q3_a: "23",
    q3_b: "46",
    q3_c: "92",
    q3_d: "184",
  },

  ro: {
    // Round 1: Cell Cycle
    r1_title: "Ciclul celular",
    r1_text: "Ciclul celular este procesul de creștere, copiere a ADN-ului și diviziune. Are trei faze principale: G1, S și G2, urmate de mitoză (faza M).",
    r1_fact1: "Faza G1: Celula crește și efectuează funcții normale",
    r1_fact2: "Faza S: ADN-ul este copiat (replicare) — fiecare cromozom este duplicat",
    r1_fact3: "Faza G2: Celula continuă să crească și se pregătește pentru diviziune",
    r1_fact4: "Faza M: Mitoză — celula se divide în două celule fiice",

    // Round 2: Mitosis
    r2_title: "Etapele mitozei",
    r2_text: "Mitoza este împărțită în patru etape. Fiecare etapă are o sarcină specifică în împărțirea egală a materialului genetic al celulei.",
    r2_fact1: "Profază: Cromozomii se condensează și devin vizibili; se formează fibre de fus",
    r2_fact2: "Metafază: Cromozomii se aliniază în mijlocul celulei",
    r2_fact3: "Anafază: Cromatidele surori se separă și se mută la poli opuși",
    r2_fact4: "Telofază: Se formează membrane nucleare și celula se strânge în mijloc",

    // Round 3: Why Cells Divide
    r3_title: "De ce se divid celulele?",
    r3_text: "Celulele se divid din trei motive principale: pentru a crește organismul, pentru a repara țesuturile dăunate și pentru a se reproduce asexuat.",
    r3_q: "Care este un motiv pentru care se divid celulele?",
    r3_growth: "Organismele cresc prin creșterea numărului de celule",
    r3_size: "Celulele devin mai mari decât mărimea normală",
    r3_rest: "Celulele au nevoie de timp pentru a se odihni",
    r3_nutrition: "Celulele au nevoie de mai mulți nutrienți",

    // Round 4: DNA and Chromosomes
    r4_title: "ADN și cromozomi",
    r4_text: "ADN-ul este răsucit strâns în structuri numite cromozomi. Oamenii au 46 de cromozomi (23 de perechi). În timpul mitozei, cromozomii sunt copiați, astfel încât fiecare celulă fiică să primească un set complet.",
    r4_fact1: "ADN-ul conține instrucțiuni genetice (gene) pentru toate funcțiile celulare",
    r4_fact2: "Cromozomii sunt formați din ADN răsucit strâns",
    r4_fact3: "Atunci când ADN-ul se replicază, fiecare cromozom are două cromatide surori identice",
    r4_fact4: "Cromatidele surori se separă în timpul anafazei pentru a asigura distribuția egală",

    // Round 5: Quiz
    r5_title: "Recapitulare diviziune celulară",

    // Quiz Questions
    q1_q: "Ce este faza S a ciclului celular?",
    q1_a: "Sinteză (copiere ADN)",
    q1_b: "Separarea cromatidelor surori",
    q1_c: "Rotirea fibrelor de fus",
    q1_d: "Contracția nucleului",

    q2_q: "Care etapă a mitozei are cromozomii aliniați în mijloc?",
    q2_a: "Profază",
    q2_b: "Metafază",
    q2_c: "Anafază",
    q2_d: "Telofază",

    q3_q: "Câți cromozomi au oamenii?",
    q3_a: "23",
    q3_b: "46",
    q3_c: "92",
    q3_d: "184",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — Simple colored shapes
// ─────────────────────────────────────────────────────────────────────────────

function CellCycleSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* G1 phase */}
      <g>
        <circle cx="50" cy="80" r="25" fill="#A8DADC" opacity="0.6" stroke="#457B9D" strokeWidth="1.5" />
        <text x="50" y="75" textAnchor="middle" fontSize="9" fill="#333" fontWeight="bold">
          G1
        </text>
        <text x="50" y="90" textAnchor="middle" fontSize="7" fill="#333">
          Growth
        </text>
      </g>
      {/* S phase */}
      <g>
        <circle cx="120" cy="50" r="25" fill="#F4A261" opacity="0.6" stroke="#D97706" strokeWidth="1.5" />
        <text x="120" y="45" textAnchor="middle" fontSize="9" fill="#333" fontWeight="bold">
          S
        </text>
        <text x="120" y="60" textAnchor="middle" fontSize="7" fill="#333">
          DNA copy
        </text>
      </g>
      {/* G2 phase */}
      <g>
        <circle cx="190" cy="80" r="25" fill="#76C893" opacity="0.6" stroke="#2D6A4F" strokeWidth="1.5" />
        <text x="190" y="75" textAnchor="middle" fontSize="9" fill="#333" fontWeight="bold">
          G2
        </text>
        <text x="190" y="90" textAnchor="middle" fontSize="7" fill="#333">
          Prepare
        </text>
      </g>
      {/* M phase (Mitosis) */}
      <g>
        <circle cx="120" cy="125" r="25" fill="#E76F51" opacity="0.6" stroke="#D62828" strokeWidth="1.5" />
        <text x="120" y="120" textAnchor="middle" fontSize="9" fill="#333" fontWeight="bold">
          M
        </text>
        <text x="120" y="135" textAnchor="middle" fontSize="7" fill="#333">
          Divide
        </text>
      </g>
      {/* Arrows showing cycle direction */}
      <path d="M 70 70 L 100 55" fill="none" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
      <path d="M 145 55 L 165 70" fill="none" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
      <path d="M 190 105 L 150 115" fill="none" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
      <path d="M 95 115 L 75 100" fill="none" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
    </svg>
  );
}

function MitosisStageSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Prophase */}
      <g>
        <rect x="10" y="30" width="45" height="50" fill="#FFE0E6" opacity="0.5" stroke="#FF6B9D" strokeWidth="1.5" rx="3" />
        <circle cx="32.5" cy="55" r="12" fill="#FFB6D9" opacity="0.6" stroke="#FF6B9D" strokeWidth="1" />
        <text x="32.5" y="88" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Prophase
        </text>
      </g>

      {/* Metaphase */}
      <g>
        <rect x="65" y="30" width="45" height="50" fill="#B7E4C7" opacity="0.5" stroke="#52B788" strokeWidth="1.5" rx="3" />
        <line x1="70" y1="55" x2="105" y2="55" stroke="#2D6A4F" strokeWidth="2" />
        <circle cx="75" cy="55" r="4" fill="#2D6A4F" />
        <circle cx="100" cy="55" r="4" fill="#2D6A4F" />
        <text x="87.5" y="88" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Metaphase
        </text>
      </g>

      {/* Anaphase */}
      <g>
        <rect x="120" y="30" width="45" height="50" fill="#FFE5B4" opacity="0.5" stroke="#D97706" strokeWidth="1.5" rx="3" />
        <circle cx="130" cy="40" r="4" fill="#D97706" />
        <circle cx="150" cy="40" r="4" fill="#D97706" />
        <circle cx="130" cy="70" r="4" fill="#D97706" />
        <circle cx="150" cy="70" r="4" fill="#D97706" />
        <text x="142.5" y="88" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Anaphase
        </text>
      </g>

      {/* Telophase */}
      <g>
        <circle cx="175" cy="40" r="12" fill="#E6F3FF" opacity="0.6" stroke="#457B9D" strokeWidth="1" />
        <circle cx="175" cy="70" r="12" fill="#E6F3FF" opacity="0.6" stroke="#457B9D" strokeWidth="1" />
        <text x="175" y="88" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Telophase
        </text>
      </g>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#666" />
        </marker>
      </defs>
    </svg>
  );
}

function WhyCellsDivideSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Growth */}
      <g>
        <circle cx="50" cy="40" r="15" fill="#76C893" opacity="0.5" stroke="#2D6A4F" strokeWidth="1.5" />
        <text x="50" y="45" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          1
        </text>
        <text x="50" y="75" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Growth
        </text>
      </g>

      {/* Repair */}
      <g>
        <circle cx="120" cy="40" r="15" fill="#FF9F5A" opacity="0.5" stroke="#D97706" strokeWidth="1.5" />
        <text x="120" y="45" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          2
        </text>
        <text x="120" y="75" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Repair
        </text>
      </g>

      {/* Reproduction */}
      <g>
        <circle cx="190" cy="40" r="15" fill="#E76F51" opacity="0.5" stroke="#D62828" strokeWidth="1.5" />
        <text x="190" y="45" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          3
        </text>
        <text x="190" y="75" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Reproduce
        </text>
      </g>

      {/* Parent cell dividing */}
      <circle cx="120" cy="120" r="20" fill="#A8DADC" opacity="0.5" stroke="#457B9D" strokeWidth="2" />
      <line x1="120" y1="100" x2="120" y2="140" stroke="#457B9D" strokeWidth="1.5" strokeDasharray="3" />
      <circle cx="90" cy="120" r="12" fill="#B7E4C7" opacity="0.6" stroke="#52B788" strokeWidth="1" />
      <circle cx="150" cy="120" r="12" fill="#B7E4C7" opacity="0.6" stroke="#52B788" strokeWidth="1" />
    </svg>
  );
}

function DNAChromosomeSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* DNA double helix */}
      <g>
        <path d="M 30 30 Q 40 50 30 70 Q 20 50 30 30" fill="none" stroke="#FF6B9D" strokeWidth="2" />
        <path d="M 40 35 Q 50 55 40 75 Q 30 55 40 35" fill="none" stroke="#FF6B9D" strokeWidth="2" />
        <circle cx="30" cy="50" r="3" fill="#FF6B9D" />
        <circle cx="40" cy="60" r="3" fill="#FF6B9D" />
        <text x="35" y="95" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          DNA
        </text>
      </g>

      {/* Condensed chromosome */}
      <g>
        <path d="M 100 40 L 110 60 M 110 40 L 100 60" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round" />
        <text x="105" y="95" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Chromosome
        </text>
      </g>

      {/* Sister chromatids */}
      <g>
        <path d="M 170 40 L 180 60 M 180 40 L 170 60" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 180 40 L 190 60 M 190 40 L 180 60" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="180" cy="50" r="2" fill="#333" />
        <text x="180" y="95" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Sister
        </text>
        <text x="180" y="107" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Chromatids
        </text>
      </g>

      {/* Labels showing progression */}
      <path d="M 60 50 L 85 50" fill="none" stroke="#999" strokeWidth="1" markerEnd="url(#arrowhead2)" />
      <path d="M 130 50 L 155 50" fill="none" stroke="#999" strokeWidth="1" markerEnd="url(#arrowhead2)" />

      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#999" />
        </marker>
      </defs>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const DIVISION_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <CellCycleSVG />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <MitosisStageSVG />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <WhyCellsDivideSVG />,
      questions: [
        {
          question: "r3_q",
          choices: ["r3_growth", "r3_size", "r3_rest", "r3_nutrition"],
          answer: "r3_growth",
        },
      ],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <DNAChromosomeSVG />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <CellCycleSVG />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_a",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_b",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_b",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface DivisionExplorerProps {
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function DivisionExplorer({ lang = "en", onDone }: DivisionExplorerProps) {
  return <ExplorerEngine def={DIVISION_EXPLORER_DEF} color="#E76F51" lang={lang} onDone={onDone} />;
}
