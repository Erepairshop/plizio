"use client";
// ImmuneExplorer — Klasse 7: Immune System (Immunsystem)
// Topics: Immune cells, immune response, vaccination, antibodies, review
// Teaching-first pattern: R1-R4 info rounds + questions, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Immune Cells
    r1_title: "Immune Cells: The Body's Defenders",
    r1_text: "White blood cells are specialized defenders that protect your body from harmful invaders.",
    r1_fact1: "T-cells attack infected cells directly",
    r1_fact2: "B-cells produce antibodies (protein weapons)",
    r1_fact3: "Macrophages engulf and destroy pathogens",
    r1_fact4: "Each cell type has a unique role in defense",

    // Round 2: Immune Response
    r2_title: "Immune Response: The Defense Chain",
    r2_text: "When a pathogen invades, your body triggers a coordinated response to eliminate the threat.",
    r2_fact1: "Pathogen detected → immune system activated",
    r2_fact2: "White blood cells attack and destroy the invader",
    r2_fact3: "Memory cells remember the pathogen for future protection",
    r2_fact4: "This memory is why you don't get the same illness twice!",

    // Round 3: Vaccination
    r3_title: "Vaccination: Training the Immune System",
    r3_text: "Vaccines contain weakened or dead pathogens to teach your immune system without causing disease.",
    r3_fact1: "Vaccine contains harmless version of a pathogen",
    r3_fact2: "Immune system learns to recognize the real pathogen",
    r3_fact3: "Memory cells are created for long-term protection",
    r3_fact4: "If real pathogen invades later, body is ready!",

    // Round 4: Antibodies
    r4_title: "Antibodies: Molecular Weapons",
    r4_text: "Antibodies are Y-shaped proteins made by B-cells. Each antibody targets a specific antigen.",
    r4_fact1: "Antibodies have binding sites that fit antigens like a key in a lock",
    r4_fact2: "One antibody type targets one pathogen type",
    r4_fact3: "Antibodies neutralize toxins and mark pathogens for destruction",
    r4_fact4: "Your body produces thousands of different antibodies",

    // Round 5: Quiz
    r5_title: "Immune System Review",

    // Quiz Questions
    q1_q: "Which white blood cell produces antibodies?",
    q1_bcell: "B-cell",
    q1_tcell: "T-cell",
    q1_macro: "Macrophage",
    q1_neutr: "Neutrophil",

    q2_q: "What does a vaccine contain?",
    q2_weak: "Weakened or dead pathogen",
    q2_antibody: "Ready-made antibodies",
    q2_active: "Active disease",
    q2_memory: "Memory cells only",

    q3_q: "Why are antibodies Y-shaped?",
    q3_specific: "To bind specific antigens like a lock and key",
    q3_strength: "To be stronger",
    q3_move: "To move faster",
    q3_immune: "To signal immune cells",
  },
  de: {
    r1_title: "Immunzellen: Die Verteidiger des Körpers",
    r1_text: "Weiße Blutkörperchen sind spezialisierte Verteidiger, die deinen Körper vor schädlichen Eindringlingen schützen.",
    r1_fact1: "T-Zellen greifen infizierte Zellen direkt an",
    r1_fact2: "B-Zellen produzieren Antikörper (Proteinwaffen)",
    r1_fact3: "Makrophagen verschlingen und zerstören Pathogene",
    r1_fact4: "Jeder Zelltyp hat eine einzigartige Abwehrrolle",

    r2_title: "Immunantwort: Die Verteidigungskette",
    r2_text: "Wenn ein Pathogen eindringt, löst dein Körper eine koordinierte Reaktion aus, um die Bedrohung zu beseitigen.",
    r2_fact1: "Pathogen erkannt → Immunsystem aktiviert",
    r2_fact2: "Weiße Blutkörperchen greifen an und zerstören den Eindringling",
    r2_fact3: "Gedächtniszellen merken sich den Pathogen zur zukünftigen Abwehr",
    r2_fact4: "Deshalb bekommst du dieselbe Krankheit nicht zweimal!",

    r3_title: "Impfung: Training des Immunsystems",
    r3_text: "Impfstoffe enthalten geschwächte oder tote Pathogene, um dein Immunsystem ohne Krankheit zu trainieren.",
    r3_fact1: "Impfstoff enthält harmlose Version eines Pathogens",
    r3_fact2: "Immunsystem lernt, den echten Pathogen zu erkennen",
    r3_fact3: "Gedächtniszellen werden für langfristigen Schutz geschaffen",
    r3_fact4: "Wenn echter Pathogen später eindringt, ist der Körper bereit!",

    r4_title: "Antikörper: Molekulare Waffen",
    r4_text: "Antikörper sind Y-förmige Proteine von B-Zellen gemacht. Jeder Antikörper zielt auf ein bestimmtes Antigen.",
    r4_fact1: "Antikörper haben Bindungsstellen, die zu Antigenen passen wie ein Schlüssel",
    r4_fact2: "Ein Antikörpertyp zielt auf einen Pathogentyp",
    r4_fact3: "Antikörper neutralisieren Gifte und markieren Pathogene zur Zerstörung",
    r4_fact4: "Dein Körper produziert Tausende verschiedener Antikörper",

    r5_title: "Immunsystem Wiederholung",

    q1_q: "Welche weiße Blutkörperchen produzieren Antikörper?",
    q1_bcell: "B-Zelle",
    q1_tcell: "T-Zelle",
    q1_macro: "Makrophage",
    q1_neutr: "Neutrophil",

    q2_q: "Was enthält ein Impfstoff?",
    q2_weak: "Geschwächtes oder totes Pathogen",
    q2_antibody: "Fertige Antikörper",
    q2_active: "Aktive Krankheit",
    q2_memory: "Nur Gedächtniszellen",

    q3_q: "Warum sind Antikörper Y-förmig?",
    q3_specific: "Um spezifische Antigene wie ein Schlüssel zu binden",
    q3_strength: "Um stärker zu sein",
    q3_move: "Um schneller zu bewegen",
    q3_immune: "Um Immunzellen zu signalisieren",
  },
  hu: {
    r1_title: "Immunsejtek: A Test Védelmezői",
    r1_text: "A fehér vér sejtek speciális védelmezők, amelyek megvédik a testedet a kártékony behatolóktól.",
    r1_fact1: "T-sejtek közvetlenül támadják meg az fertőzött sejteket",
    r1_fact2: "B-sejtek antitesteket termelnek (fehérje fegyverek)",
    r1_fact3: "Makrofágok felfalják és elpusztítják a kórokozókat",
    r1_fact4: "Minden sejtfajta egyedi szerepe van a védelemben",

    r2_title: "Immun Válasz: A Védelmi Lánc",
    r2_text: "Ha egy kórokozó betolakodik, a tested koordinált választ indít a fenyegetés elhárítására.",
    r2_fact1: "Kórokozó felismerve → immunrendszer aktiválva",
    r2_fact2: "Fehér vér sejtek támadnak és elpusztítják a behatolót",
    r2_fact3: "Memória sejtek emlékeznek a kórokozóra a jövőbeli védelemhez",
    r2_fact4: "Ezért nem kapod meg kétszer ugyanazt a betegséget!",

    r3_title: "Oltás: Az Immunrendszer Képzése",
    r3_text: "Az oltások gyenge vagy halott kórokozókat tartalmaznak, hogy betanítsd az immunrendszeredet betegség nélkül.",
    r3_fact1: "Oltás egy kórokozó ártalmatlan verzióját tartalmazza",
    r3_fact2: "Az immunrendszer megtanul felismerni az igazi kórokozót",
    r3_fact3: "Memória sejtek jönnek létre hosszú távú védelemhez",
    r3_fact4: "Ha az igazi kórokozó később betolakodik, a tested készen áll!",

    r4_title: "Antitestek: Molekuláris Fegyverek",
    r4_text: "Az antitestek Y-alakú fehérjék, amelyeket B-sejtek készítenek. Minden antitest egy konkrét antigént céloz meg.",
    r4_fact1: "Az antitesteknek vannak kötőhelyek, amelyek az antigénekhez illeszkednek, mint egy kulcs a zárba",
    r4_fact2: "Egy antitest típus egy kórokozó típust céloz meg",
    r4_fact3: "Az antitestek semlegesítik a toxinokat és megjelölik a kórokozókat az elpusztításhoz",
    r4_fact4: "A tested több ezer különböző antitestet termel",

    r5_title: "Immun Rendszer Áttekintés",

    q1_q: "Melyik fehér vér sejt termel antitesteket?",
    q1_bcell: "B-sejt",
    q1_tcell: "T-sejt",
    q1_macro: "Makrofág",
    q1_neutr: "Neutrofil",

    q2_q: "Mit tartalmaz egy oltás?",
    q2_weak: "Gyenge vagy halott kórokozó",
    q2_antibody: "Kész antitestek",
    q2_active: "Aktív betegség",
    q2_memory: "Csak memória sejtek",

    q3_q: "Miért Y-alakúak az antitestek?",
    q3_specific: "Hogy konkrét antigéneket köthessenek meg, mint egy kulcs a zárba",
    q3_strength: "Hogy erősebbek legyenek",
    q3_move: "Hogy gyorsabban mozognak",
    q3_immune: "Hogy jelezzék az immunsejteket",
  },
  ro: {
    r1_title: "Celule Imunitare: Apărătorii Corpului",
    r1_text: "Globulele albe de sânge sunt apărători specializați care vă protejează corpul de invadatorii dăunători.",
    r1_fact1: "Celulele T atacă direct celulele infectate",
    r1_fact2: "Celulele B produc anticorpi (proteine arme)",
    r1_fact3: "Macrofagele înghit și distrug agenții patogeni",
    r1_fact4: "Fiecare tip de celulă are un rol unic în apărare",

    r2_title: "Răspunsul Imunitar: Lanțul de Apărare",
    r2_text: "Când un agent patogen invadează, corpul declanșează un răspuns coordonat pentru a elimina amenința.",
    r2_fact1: "Agent patogen detectat → sistem imunitar activat",
    r2_fact2: "Globulele albe atacă și distrug invadatorul",
    r2_fact3: "Celulele de memorie se amintesc de agent patogen pentru protecție viitoare",
    r2_fact4: "De aceea nu contragi aceeași boală de două ori!",

    r3_title: "Vaccinare: Antrenamentul Sistemului Imunitar",
    r3_text: "Vaccinurile conțin agenți patogeni slăbiți sau morți pentru a instrui sistemul imunitar fără boală.",
    r3_fact1: "Vaccinul conține versiune inofensivă a unui agent patogen",
    r3_fact2: "Sistemul imunitar învață să recunoască agenții patogeni reali",
    r3_fact3: "Celulele de memorie sunt create pentru protecție pe termen lung",
    r3_fact4: "Dacă agenții patogeni reali invadează mai târziu, corpul este gata!",

    r4_title: "Anticorpi: Arme Moleculare",
    r4_text: "Anticorpii sunt proteine în formă de Y fabricate de celulele B. Fiecare antiorp vizează un antigen specific.",
    r4_fact1: "Anticorpii au situri de legare care se potrivesc antigenilor ca o cheie într-un zăvor",
    r4_fact2: "Un tip de antiorp vizează un tip de agent patogen",
    r4_fact3: "Anticorpii neutralizează toxinele și marchează agenții patogeni pentru distrugere",
    r4_fact4: "Corpul produce mii de anticorpi diferiți",

    r5_title: "Revizuire Sistem Imunitar",

    q1_q: "Care globulă albă produce anticorpi?",
    q1_bcell: "Celulă B",
    q1_tcell: "Celulă T",
    q1_macro: "Macrofag",
    q1_neutr: "Neutrofil",

    q2_q: "Ce conține un vaccin?",
    q2_weak: "Agent patogen slăbit sau mort",
    q2_antibody: "Anticorpi gata",
    q2_active: "Boală activă",
    q2_memory: "Doar celule de memorie",

    q3_q: "De ce sunt anticorpii în formă de Y?",
    q3_specific: "Pentru a se lega de antigenuri specifice ca o cheie în zăvor",
    q3_strength: "Pentru a fi mai puternici",
    q3_move: "Pentru a se deplasa mai repede",
    q3_immune: "Pentru a semnala celulele imunitare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — simple colored shapes, NO TEXT
// ─────────────────────────────────────────────────────────────────────────────

function R1SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* T-cell (left) — blue */}
      <circle cx="50" cy="60" r="18" fill="#3B82F6" />
      <circle cx="50" cy="80" r="12" fill="#1E40AF" />
      {/* B-cell (center) — green */}
      <circle cx="120" cy="60" r="18" fill="#10B981" />
      <circle cx="120" cy="80" r="12" fill="#047857" />
      {/* Macrophage (right) — orange */}
      <circle cx="190" cy="60" r="18" fill="#F59E0B" />
      <circle cx="190" cy="80" r="12" fill="#D97706" />
      {/* Pathogen representation (red) */}
      <circle cx="120" cy="130" r="10" fill="#EF4444" opacity="0.7" />
    </svg>
  );
}

function R2SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Detection arrow */}
      <line x1="30" y1="40" x2="80" y2="40" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowblue)" />
      {/* Immune response — attacking cells */}
      <circle cx="100" cy="50" r="12" fill="#10B981" />
      <circle cx="120" cy="50" r="12" fill="#10B981" />
      <circle cx="140" cy="50" r="12" fill="#10B981" />
      {/* Pathogen (red) being attacked */}
      <circle cx="180" cy="50" r="15" fill="#EF4444" opacity="0.6" />
      {/* Memory cell formation (bottom) */}
      <circle cx="120" cy="120" r="14" fill="#F59E0B" />
      <text x="120" y="125" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">✓</text>
      <defs>
        <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
        </marker>
      </defs>
    </svg>
  );
}

function R3SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Vaccine vial (left) */}
      <rect x="20" y="50" width="20" height="40" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="30" cy="50" r="10" fill="#D1D5DB" />
      {/* Weakened pathogen in vial */}
      <circle cx="30" cy="75" r="6" fill="#FCA5A5" opacity="0.8" />
      {/* Arrow to immune system */}
      <line x1="50" y1="70" x2="90" y2="70" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowblue2)" />
      {/* Immune cells learning */}
      <circle cx="120" cy="60" r="12" fill="#10B981" />
      <circle cx="120" cy="90" r="12" fill="#10B981" />
      {/* Memory cell formation */}
      <circle cx="190" cy="75" r="14" fill="#F59E0B" />
      <defs>
        <marker id="arrowblue2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
        </marker>
      </defs>
    </svg>
  );
}

function R4SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Y-shaped antibody (left) */}
      <line x1="60" y1="40" x2="60" y2="70" stroke="#8B5CF6" strokeWidth="4" />
      <line x1="60" y1="70" x2="45" y2="100" stroke="#8B5CF6" strokeWidth="4" />
      <line x1="60" y1="70" x2="75" y2="100" stroke="#8B5CF6" strokeWidth="4" />
      <circle cx="60" cy="40" r="6" fill="#A78BFA" />
      <circle cx="45" cy="100" r="6" fill="#A78BFA" />
      <circle cx="75" cy="100" r="6" fill="#A78BFA" />
      {/* Antigens (red) being bound */}
      <circle cx="45" cy="110" r="8" fill="#EF4444" opacity="0.8" />
      <circle cx="75" cy="110" r="8" fill="#EF4444" opacity="0.8" />
      {/* Multiple antibodies (right side) */}
      <circle cx="160" cy="60" r="14" fill="#8B5CF6" opacity="0.6" />
      <circle cx="180" cy="80" r="14" fill="#8B5CF6" opacity="0.6" />
      <circle cx="200" cy="100" r="14" fill="#8B5CF6" opacity="0.6" />
    </svg>
  );
}

function R5SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Summary: immune cells, pathogen, shield */}
      <circle cx="50" cy="50" r="12" fill="#3B82F6" />
      <circle cx="80" cy="50" r="12" fill="#10B981" />
      <circle cx="110" cy="50" r="12" fill="#F59E0B" />
      {/* Pathogen under attack */}
      <circle cx="150" cy="70" r="15" fill="#EF4444" opacity="0.5" />
      {/* Shield symbol (right) */}
      <path
        d="M 200 40 L 220 55 L 220 95 Q 210 115 200 125 Q 190 115 190 95 L 190 55 Z"
        fill="#10B981"
        opacity="0.6"
        stroke="#047857"
        strokeWidth="2"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const IMMUNE_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <R1SVG />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <R1SVG />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_bcell", "q1_tcell", "q1_macro", "q1_neutr"],
          answer: "q1_bcell",
        },
      ],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <R2SVG />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <R3SVG />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r1_text",
      svg: () => <R5SVG />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_bcell", "q1_tcell", "q1_macro", "q1_neutr"],
          answer: "q1_bcell",
        },
        {
          question: "q2_q",
          choices: ["q2_weak", "q2_antibody", "q2_active", "q2_memory"],
          answer: "q2_weak",
        },
        {
          question: "q3_q",
          choices: ["q3_specific", "q3_strength", "q3_move", "q3_immune"],
          answer: "q3_specific",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function ImmuneExplorer({
  color = "#EF4444",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={IMMUNE_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
