"use client";
// CellExplorer — Cell Structure (Zellaufbau) Grade 7
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topics: Animal cell, plant cell, organelles, microscope

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Animal Cell
    r1_title: "Animal Cell Structure",
    r1_text: "An animal cell is the smallest unit of life. It has a membrane, nucleus, and cytoplasm with many organelles.",
    r1_fact1: "Cell membrane controls what enters and leaves the cell",
    r1_fact2: "Nucleus contains DNA (genetic material) and controls cell activities",
    r1_fact3: "Cytoplasm is the gel-like substance where organelles are located",
    r1_fact4: "Mitochondria are the powerhouses — they produce energy (ATP)",

    // Round 2: Plant Cell
    r2_title: "Plant Cell Structure",
    r2_text: "Plant cells are similar to animal cells but have extra features: a cell wall, chloroplasts, and a large vacuole.",
    r2_fact1: "Cell wall is rigid and provides structure and support",
    r2_fact2: "Chloroplasts contain chlorophyll for photosynthesis",
    r2_fact3: "Large central vacuole stores water and maintains turgor pressure",
    r2_fact4: "Plant cells are usually larger and more rectangular than animal cells",

    // Round 3: Cell Organelles
    r3_title: "What Each Organelle Does",
    r3_text: "Organelles are tiny structures inside the cell, each with a specific job. Together they keep the cell alive.",
    r3_q: "What is the function of mitochondria?",
    r3_energy: "Produce energy (ATP) for the cell",
    r3_protein: "Synthesize proteins",
    r3_storage: "Store water and nutrients",
    r3_support: "Support and protect the cell",

    // Round 4: Microscope
    r4_title: "Observing Cells with a Microscope",
    r4_text: "Scientists use microscopes to see cells because they are very small. Different magnifications reveal different levels of detail.",
    r4_fact1: "Light microscopes use lenses to magnify cells (100x–1000x)",
    r4_fact2: "The objective lens is closest to the specimen",
    r4_fact3: "Always start with low magnification, then increase it slowly",
    r4_fact4: "Cells are typically 10–100 micrometers in diameter (μm)",

    // Round 5: Quiz
    r5_title: "Cell Structure Review",

    // Quiz Questions (3 questions)
    q1_q: "Which organelle is found in both animal and plant cells?",
    q1_a: "Nucleus",
    q1_b: "Chloroplast",
    q1_c: "Cell wall",
    q1_d: "Large vacuole",

    q2_q: "What is the main function of the cell membrane?",
    q2_a: "Produce energy",
    q2_b: "Control what enters and leaves the cell",
    q2_c: "Store water",
    q2_d: "Synthesize proteins",

    q3_q: "Which structure is unique to plant cells?",
    q3_a: "Mitochondria",
    q3_b: "Cell wall and chloroplasts",
    q3_c: "Nucleus",
    q3_d: "Ribosomes",
  },

  de: {
    // Round 1: Animal Cell
    r1_title: "Struktur der Tierzelle",
    r1_text: "Eine Tierzelle ist die kleinste Lebenseinheit. Sie hat eine Membran, einen Kern und Zytoplasma mit vielen Organellen.",
    r1_fact1: "Zellmembran kontrolliert, was in die Zelle ein- und austritt",
    r1_fact2: "Zellkern enthält DNA (genetisches Material) und steuert Zellaktivitäten",
    r1_fact3: "Zytoplasma ist die geleeähnliche Substanz, wo Organellen liegen",
    r1_fact4: "Mitochondrien sind die Kraftwerke — sie erzeugen Energie (ATP)",

    // Round 2: Plant Cell
    r2_title: "Struktur der Pflanzenzelle",
    r2_text: "Pflanzenzellen ähneln Tierzellen, haben aber zusätzliche Merkmale: eine Zellwand, Chloroplasten und eine große Vakuole.",
    r2_fact1: "Zellwand ist starr und gibt Struktur und Halt",
    r2_fact2: "Chloroplasten enthalten Chlorophyll für Fotosynthese",
    r2_fact3: "Große zentrale Vakuole speichert Wasser und erhält Turgor",
    r2_fact4: "Pflanzenzellen sind meist größer und rechteckiger als Tierzellen",

    // Round 3: Cell Organelles
    r3_title: "Was jede Organelle tut",
    r3_text: "Organellen sind winzige Strukturen in der Zelle, jede mit einer speziellen Aufgabe. Zusammen halten sie die Zelle am Leben.",
    r3_q: "Was ist die Funktion von Mitochondrien?",
    r3_energy: "Produzieren Energie (ATP) für die Zelle",
    r3_protein: "Synthetisieren Proteine",
    r3_storage: "Speichern Wasser und Nährstoffe",
    r3_support: "Stützen und schützen die Zelle",

    // Round 4: Microscope
    r4_title: "Zellen mit Mikroskop beobachten",
    r4_text: "Wissenschaftler verwenden Mikroskope, um Zellen zu sehen, weil sie sehr klein sind. Unterschiedliche Vergrößerungen zeigen verschiedene Detailebenen.",
    r4_fact1: "Lichtmikroskope verwenden Linsen zur Vergrößerung (100x–1000x)",
    r4_fact2: "Das Objektiv ist dem Präparat am nächsten",
    r4_fact3: "Immer mit niedriger Vergrößerung starten, dann langsam erhöhen",
    r4_fact4: "Zellen sind typischerweise 10–100 Mikrometer groß (μm)",

    // Round 5: Quiz
    r5_title: "Zellstruktur Übersicht",

    // Quiz Questions
    q1_q: "Welche Organelle findet sich in Tier- und Pflanzenzellen?",
    q1_a: "Zellkern",
    q1_b: "Chloroplast",
    q1_c: "Zellwand",
    q1_d: "Große Vakuole",

    q2_q: "Was ist die Hauptfunktion der Zellmembran?",
    q2_a: "Energie produzieren",
    q2_b: "Kontrolliert, was in und aus der Zelle geht",
    q2_c: "Wasser speichern",
    q2_d: "Proteine synthetisieren",

    q3_q: "Welche Struktur ist einzigartig für Pflanzenzellen?",
    q3_a: "Mitochondrien",
    q3_b: "Zellwand und Chloroplasten",
    q3_c: "Zellkern",
    q3_d: "Ribosomen",
  },

  hu: {
    // Round 1: Animal Cell
    r1_title: "Állatsejtek szerkezete",
    r1_text: "Az állatsejt az élet legkisebb egysége. Membránnal, maggal és citoplazmával rendelkezik, sok organuluval.",
    r1_fact1: "A sejthártya szabályozza, mi léphet be és ki a sejtből",
    r1_fact2: "A sejt magja DNS-t (genetikai anyagot) tartalmaz és irányítja a sejt tevékenységeit",
    r1_fact3: "A citoplazma zselészerű anyag, ahol az organellumok helyezkednek el",
    r1_fact4: "A mitokondriumok az erőmüvek — energiát (ATP) termelnek",

    // Round 2: Plant Cell
    r2_title: "Növénysejtek szerkezete",
    r2_text: "A növénysejtek hasonlítanak az állatsejtekre, de extra jellegzetességgel rendelkeznek: sejtfallal, kloroplasztokkal és nagy vakuólummal.",
    r2_fact1: "A sejtfal merev és szerkezeti támogatást nyújt",
    r2_fact2: "A kloroplasztok klorofillat tartalmaznak a fotoszintézishez",
    r2_fact3: "A nagy központi vakuólum vizet tárol és nyomást tartalmaz",
    r2_fact4: "A növénysejtek általában nagyobbak és téglalap alakúak, mint az állatsejtok",

    // Round 3: Cell Organelles
    r3_title: "Mit csinál az egyes organellum",
    r3_text: "Az organellumok apró struktúrák a sejtben, mindegyiknek saját feladata. Együtt tartják életben a sejtet.",
    r3_q: "Mi a mitokondriumok funkciója?",
    r3_energy: "Energiát (ATP) termelnek a sejtnek",
    r3_protein: "Fehérjéket szintetizálnak",
    r3_storage: "Vizet és tápanyagokat tárolnak",
    r3_support: "Támogatják és védik a sejtet",

    // Round 4: Microscope
    r4_title: "Sejtek megfigyelése mikroszkóppal",
    r4_text: "A tudósok mikroszkópot használnak a sejtek megtekintéséhez, mert nagyon kicsik. Különböző nagyítások eltérő részleteket tárnak fel.",
    r4_fact1: "A fénymikroszkópok lencsék segítségével nagyítanak (100x–1000x)",
    r4_fact2: "Az objektív lencse a legközelebb van a mintához",
    r4_fact3: "Mindig alacsony nagyítással kezdj, majd lassan növeld",
    r4_fact4: "A sejtek általában 10–100 mikrométer átmérőjűek (μm)",

    // Round 5: Quiz
    r5_title: "Sejt szerkezet áttekintés",

    // Quiz Questions
    q1_q: "Melyik organellum található meg az állat- és növénysejt egyaránt?",
    q1_a: "Sejt magja",
    q1_b: "Kloroplaszt",
    q1_c: "Sejtfal",
    q1_d: "Nagy vakuólum",

    q2_q: "Mi a sejthártya fő funkciója?",
    q2_a: "Energiatermelés",
    q2_b: "Szabályozza, mi megy be és ki a sejtből",
    q2_c: "Vizet tárol",
    q2_d: "Fehérjéket szintetizál",

    q3_q: "Melyik szerkezet egyedi a növénysejtek számára?",
    q3_a: "Mitokondriumok",
    q3_b: "Sejtfal és kloroplasztok",
    q3_c: "Sejt magja",
    q3_d: "Riboszómák",
  },

  ro: {
    // Round 1: Animal Cell
    r1_title: "Structura celulei animale",
    r1_text: "O celulă animală este cea mai mică unitate de viață. Are membrană, nucleu și citoplasmă cu multe organele.",
    r1_fact1: "Membrana celulară controlează ceea ce intră și iese din celulă",
    r1_fact2: "Nucleul conține ADN (material genetic) și controlează activitățile celulei",
    r1_fact3: "Citoplasma este substanța asemănătoare gelului unde se află organelele",
    r1_fact4: "Mitocondriile sunt centrurile energetice — produc energie (ATP)",

    // Round 2: Plant Cell
    r2_title: "Structura celulei vegetale",
    r2_text: "Celulele vegetale sunt similare cu cele animale, dar au caracteristici suplimentare: perete celular, cloroplaste și o mare vacuolă.",
    r2_fact1: "Peretele celular este rigid și oferă structură și sprijin",
    r2_fact2: "Cloroplastele conțin clorofilă pentru fotosinteză",
    r2_fact3: "Marea vacuolă centrală stochează apă și menține presiunea turgidă",
    r2_fact4: "Celulele vegetale sunt de obicei mai mari și mai dreptunghiulare decât cele animale",

    // Round 3: Cell Organelles
    r3_title: "Ce face fiecare organelă",
    r3_text: "Organelele sunt structuri mici din celulă, fiecare cu o sarcină specifică. Împreună, ține celula în viață.",
    r3_q: "Care este funcția mitocondriilor?",
    r3_energy: "Produc energie (ATP) pentru celulă",
    r3_protein: "Sintetizează proteine",
    r3_storage: "Depozitează apă și nutrienți",
    r3_support: "Sprijin și protejează celula",

    // Round 4: Microscope
    r4_title: "Observarea celulelor cu microscopul",
    r4_text: "Oamenii de știință folosesc microscoape pentru a vedea celule deoarece sunt foarte mici. Măriri diferite dezvăluie niveluri diferite de detalii.",
    r4_fact1: "Microscopele optice folosesc lentile pentru mărire (100x–1000x)",
    r4_fact2: "Lentila obiectiv este cea mai aproape de specimen",
    r4_fact3: "Întotdeauna începe cu mărire scăzută, apoi crește treptat",
    r4_fact4: "Celulele sunt de obicei 10–100 micrometri în diametru (μm)",

    // Round 5: Quiz
    r5_title: "Recapitulare structură celulă",

    // Quiz Questions
    q1_q: "Care organelă se găsește atât în celule animale, cât și vegetale?",
    q1_a: "Nucleu",
    q1_b: "Cloroplast",
    q1_c: "Perete celular",
    q1_d: "Vacuolă mare",

    q2_q: "Care este funcția principală a membranei celulare?",
    q2_a: "Produce energie",
    q2_b: "Controlează ce intră și iese din celulă",
    q2_c: "Depozitează apă",
    q2_d: "Sintetizează proteine",

    q3_q: "Care structură este unică pentru celulele vegetale?",
    q3_a: "Mitocondriile",
    q3_b: "Perete celular și cloroplaste",
    q3_c: "Nucleu",
    q3_d: "Ribozomi",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — Simple colored shapes
// ─────────────────────────────────────────────────────────────────────────────

function AnimalCellSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Outer membrane */}
      <circle cx="120" cy="80" r="70" fill="none" stroke="#4ECDC4" strokeWidth="2" />
      {/* Nucleus */}
      <circle cx="120" cy="80" r="30" fill="#FFB6D9" opacity="0.6" stroke="#FF6B9D" strokeWidth="1.5" />
      <text x="120" y="85" textAnchor="middle" fontSize="10" fill="#333" fontWeight="bold">
        Nucleus
      </text>
      {/* Mitochondria (2) */}
      <ellipse cx="65" cy="50" rx="18" ry="12" fill="#FF6B6B" opacity="0.5" stroke="#C92A2A" strokeWidth="1" />
      <ellipse cx="175" cy="110" rx="18" ry="12" fill="#FF6B6B" opacity="0.5" stroke="#C92A2A" strokeWidth="1" />
      {/* Cytoplasm background */}
      <circle cx="120" cy="80" r="68" fill="#E8F4F8" opacity="0.3" />
    </svg>
  );
}

function PlantCellSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Cell wall */}
      <rect x="20" y="20" width="200" height="120" fill="none" stroke="#90BE6D" strokeWidth="3" rx="5" />
      {/* Cell membrane */}
      <rect x="25" y="25" width="190" height="110" fill="none" stroke="#4ECDC4" strokeWidth="1.5" />
      {/* Nucleus */}
      <circle cx="120" cy="70" r="25" fill="#FFB6D9" opacity="0.6" stroke="#FF6B9D" strokeWidth="1.5" />
      {/* Chloroplasts (2) */}
      <circle cx="60" cy="100" r="20" fill="#76C893" opacity="0.6" stroke="#2D6A4F" strokeWidth="1" />
      <circle cx="180" cy="100" r="20" fill="#76C893" opacity="0.6" stroke="#2D6A4F" strokeWidth="1" />
      {/* Large vacuole */}
      <circle cx="120" cy="110" r="35" fill="#B7E4C7" opacity="0.4" stroke="#52B788" strokeWidth="1" />
      {/* Cytoplasm */}
      <rect x="25" y="25" width="190" height="110" fill="#E8F4F8" opacity="0.2" />
    </svg>
  );
}

function OrganellesSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Mitochondria */}
      <g>
        <ellipse cx="50" cy="50" rx="25" ry="20" fill="#FF6B6B" opacity="0.5" stroke="#C92A2A" strokeWidth="1.5" />
        <text x="50" y="55" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Energy
        </text>
      </g>
      {/* Ribosome */}
      <g>
        <circle cx="120" cy="40" r="15" fill="#FFD93D" opacity="0.5" stroke="#F0A500" strokeWidth="1.5" />
        <text x="120" y="45" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Protein
        </text>
      </g>
      {/* ER */}
      <g>
        <rect x="30" y="100" width="60" height="30" fill="#A8DADC" opacity="0.5" stroke="#457B9D" strokeWidth="1.5" rx="3" />
        <text x="60" y="120" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Transport
        </text>
      </g>
      {/* Golgi */}
      <g>
        <rect x="140" y="100" width="70" height="30" fill="#E1BE63" opacity="0.5" stroke="#D4A574" strokeWidth="1.5" rx="3" />
        <text x="175" y="120" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
          Processing
        </text>
      </g>
    </svg>
  );
}

function MicroscopeSVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Microscope body */}
      <rect x="90" y="20" width="60" height="100" fill="#B0B0B0" opacity="0.5" stroke="#666" strokeWidth="2" rx="5" />
      {/* Eyepiece */}
      <circle cx="120" cy="25" r="12" fill="#87CEEB" opacity="0.6" stroke="#4682B4" strokeWidth="1.5" />
      {/* Objective lens */}
      <circle cx="120" cy="130" r="15" fill="#87CEEB" opacity="0.6" stroke="#4682B4" strokeWidth="1.5" />
      {/* Stage */}
      <rect x="100" y="115" width="40" height="15" fill="#D3D3D3" opacity="0.7" stroke="#999" strokeWidth="1" />
      {/* Light */}
      <circle cx="120" cy="132" r="8" fill="#FFFF99" opacity="0.4" />
      {/* Focus knob */}
      <circle cx="165" cy="80" r="8" fill="#8B4513" opacity="0.6" stroke="#654321" strokeWidth="1" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const CELL_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <AnimalCellSVG />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <PlantCellSVG />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <OrganellesSVG />,
      questions: [
        {
          question: "r3_q",
          choices: ["r3_energy", "r3_protein", "r3_storage", "r3_support"],
          answer: "r3_energy",
        },
      ],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <MicroscopeSVG />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <AnimalCellSVG />,
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

interface CellExplorerProps {
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function CellExplorer({ lang = "en", onDone }: CellExplorerProps) {
  return <ExplorerEngine def={CELL_EXPLORER_DEF} color="#4ECDC4" lang={lang} onDone={onDone} />;
}
