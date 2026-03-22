"use client";
// DNAExplorer — Klasse 8: DNA & Genetics (DNA und Vererbung)
// Teaching-first pattern: R1-R4 info rounds with MCQ, R5 review quiz
// Topic: DNA structure, genes, heredity, DNA replication

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: DNA Structure
    r1_title: "DNA Structure: The Double Helix",
    r1_text: "DNA is shaped like a twisted ladder called a double helix. It contains genetic information that makes you unique.",
    r1_fact1: "DNA is made of four nucleotides: Adenine (A), Thymine (T), Guanine (G), Cytosine (C)",
    r1_fact2: "These nucleotides form base pairs: A pairs with T, G pairs with C",
    r1_fact3: "The backbone of DNA is made of sugar and phosphate molecules",
    r1_fact4: "DNA is found in the nucleus of almost every cell in your body",
    r1_q: "Which base pairs with Adenine (A) in DNA?",
    r1_t: "Thymine (T)",
    r1_g: "Guanine (G)",
    r1_c: "Cytosine (C)",
    r1_p: "Phosphate",

    // Round 2: Genes & Chromosomes
    r2_title: "Genes & Chromosomes",
    r2_text: "Genes are segments of DNA that code for specific traits. Chromosomes are packages of DNA that carry many genes.",
    r2_fact1: "Humans have 46 chromosomes (23 pairs) in most cells",
    r2_fact2: "One chromosome contains thousands of genes",
    r2_fact3: "Genes control traits like eye color, height, and hair texture",
    r2_fact4: "Each parent contributes 23 chromosomes to their child",
    r2_q: "How many chromosomes do humans typically have?",
    r2_46: "46 (23 pairs)",
    r2_23: "23",
    r2_92: "92",
    r2_dna: "DNA only (no chromosomes)",

    // Round 3: Heredity & Traits
    r3_title: "Heredity: Passing Traits Down",
    r3_text: "Traits are passed from parents to children through genes. Some traits are dominant; others are recessive.",
    r3_fact1: "Dominant traits appear if you inherit one dominant gene",
    r3_fact2: "Recessive traits appear only if you inherit two recessive genes",
    r3_fact3: "Gregor Mendel studied pea plants to discover heredity laws",
    r3_fact4: "A Punnett square shows possible genetic combinations from parents",
    r3_q: "If a dominant trait is D and recessive is d, when does the recessive trait show?",
    r3_dd: "When a person has dd (two recessive genes)",
    r3_dd_or_d: "When a person has d (any d gene)",
    r3_d_only: "When a person has D only",
    r3_always: "It always shows",

    // Round 4: DNA Replication
    r4_title: "DNA Replication: Copying DNA",
    r4_text: "Before a cell divides, DNA must be copied so each new cell has the same genetic information.",
    r4_fact1: "The DNA double helix unzips, separating the two strands",
    r4_fact2: "Each separated strand serves as a template for a new strand",
    r4_fact3: "Base pairing rules ensure the copy is exact: A with T, G with C",
    r4_fact4: "The result is two identical DNA molecules with the same genes",
    r4_q: "What guides the attachment of nucleotides in DNA replication?",
    r4_bp: "Base pairing rules (A-T, G-C)",
    r4_sz: "Enzyme size",
    r4_temp: "Temperature",
    r4_ph: "pH level",

    // Round 5: Review Quiz
    r5_title: "DNA & Genetics Review",

    // Quiz questions (3 total)
    q1_q: "DNA is shaped like a...",
    q1_a: "Double helix",
    q1_b: "Circle",
    q1_c: "Straight line",
    q1_d: "Triangle",

    q2_q: "A gene codes for a...",
    q2_a: "Specific trait (like eye color)",
    q2_b: "Energy source",
    q2_c: "Cell membrane",
    q2_d: "Mitochondrion",

    q3_q: "If you inherit a recessive gene from each parent (dd), you...",
    q3_a: "Show the recessive trait",
    q3_b: "Show the dominant trait",
    q3_c: "Show both traits equally",
    q3_d: "Show no trait",
  },
  de: {
    // Round 1: DNA Structure
    r1_title: "DNA-Struktur: Die Doppelhelix",
    r1_text: "DNA hat die Form einer verdrehten Leiter, genannt Doppelhelix. Sie enthält genetische Informationen, die dich einzigartig machen.",
    r1_fact1: "DNA besteht aus vier Basen: Adenin (A), Thymin (T), Guanin (G), Cytosin (C)",
    r1_fact2: "Diese Basen bilden Basenpaare: A paart sich mit T, G paart sich mit C",
    r1_fact3: "Das Grundgerüst der DNA besteht aus Zucker- und Phosphatmolekülen",
    r1_fact4: "DNA befindet sich im Zellkern in fast jeder Zelle deines Körpers",
    r1_q: "Welche Base paart sich mit Adenin (A) in DNA?",
    r1_t: "Thymin (T)",
    r1_g: "Guanin (G)",
    r1_c: "Cytosin (C)",
    r1_p: "Phosphat",

    // Round 2: Genes & Chromosomes
    r2_title: "Gene & Chromosomen",
    r2_text: "Gene sind DNA-Abschnitte, die für bestimmte Merkmale kodieren. Chromosomen sind Pakete aus DNA, die viele Gene tragen.",
    r2_fact1: "Menschen haben 46 Chromosomen (23 Paare) in den meisten Zellen",
    r2_fact2: "Ein Chromosom enthält tausende von Genen",
    r2_fact3: "Gene kontrollieren Merkmale wie Augenfarbe, Größe und Haarstruktur",
    r2_fact4: "Jeder Elternteil trägt 23 Chromosomen zu seinem Kind bei",
    r2_q: "Wie viele Chromosomen haben Menschen normalerweise?",
    r2_46: "46 (23 Paare)",
    r2_23: "23",
    r2_92: "92",
    r2_dna: "Nur DNA (keine Chromosomen)",

    // Round 3: Heredity & Traits
    r3_title: "Vererbung: Merkmale weitergeben",
    r3_text: "Merkmale werden von Eltern an Kinder durch Gene weitergegeben. Einige Merkmale sind dominant, andere rezessiv.",
    r3_fact1: "Dominante Merkmale treten auf, wenn du ein dominantes Gen ererbst",
    r3_fact2: "Rezessive Merkmale treten nur auf, wenn du zwei rezessive Gene ererbst",
    r3_fact3: "Gregor Mendel studierte Erbsenpflanzen, um Vererbungsgesetze zu entdecken",
    r3_fact4: "Ein Punnett-Quadrat zeigt mögliche genetische Kombinationen von Eltern",
    r3_q: "Wenn ein dominantes Merkmal D ist und rezessiv d, wann zeigt sich das rezessive Merkmal?",
    r3_dd: "Wenn eine Person dd hat (zwei rezessive Gene)",
    r3_dd_or_d: "Wenn eine Person d hat (irgendein d-Gen)",
    r3_d_only: "Wenn eine Person nur D hat",
    r3_always: "Es zeigt sich immer",

    // Round 4: DNA Replication
    r4_title: "DNA-Replikation: DNA kopieren",
    r4_text: "Bevor sich eine Zelle teilt, muss DNA kopiert werden, damit jede neue Zelle die gleichen genetischen Informationen hat.",
    r4_fact1: "Die DNA-Doppelhelix entwindet sich und trennt die beiden Stränge",
    r4_fact2: "Jeder getrennte Strang dient als Vorlage für einen neuen Strang",
    r4_fact3: "Basenpaarungsregeln stellen sicher, dass die Kopie exakt ist: A mit T, G mit C",
    r4_fact4: "Das Ergebnis sind zwei identische DNA-Moleküle mit denselben Genen",
    r4_q: "Was leitet die Bindung von Nukleotiden bei der DNA-Replikation?",
    r4_bp: "Basenpaarungsregeln (A-T, G-C)",
    r4_sz: "Enzymgröße",
    r4_temp: "Temperatur",
    r4_ph: "pH-Wert",

    // Round 5: Review Quiz
    r5_title: "DNA & Genetik Wiederholung",

    // Quiz questions (3 total)
    q1_q: "DNA hat die Form einer...",
    q1_a: "Doppelhelix",
    q1_b: "Kreis",
    q1_c: "Gerade Linie",
    q1_d: "Dreieck",

    q2_q: "Ein Gen kodiert für...",
    q2_a: "Ein spezifisches Merkmal (wie Augenfarbe)",
    q2_b: "Eine Energiequelle",
    q2_c: "Eine Zellmembran",
    q2_d: "Ein Mitochondrion",

    q3_q: "Wenn du von jedem Elternteil ein rezessives Gen ererbst (dd), dann...",
    q3_a: "Zeigst du das rezessive Merkmal",
    q3_b: "Zeigst du das dominante Merkmal",
    q3_c: "Zeigst du beide Merkmale gleichermaßen",
    q3_d: "Zeigst du kein Merkmal",
  },
  hu: {
    // Round 1: DNA Structure
    r1_title: "A DNS szerkezete: A kettős spirál",
    r1_text: "A DNS egy csavart létrához hasonló kettős spirál alakú. Genetikai információkat tartalmaz, amelyek egyedivé tesznek.",
    r1_fact1: "A DNS négy bázisból áll: Adenin (A), Timin (T), Guanin (G), Citozin (C)",
    r1_fact2: "Ezek a bázisok bázispárokat képeznek: A a T-vel, G a C-vel párosodik",
    r1_fact3: "A DNS gerincét cukor- és foszfátmolekulák alkotják",
    r1_fact4: "A DNS az sejtmagban található az emberi test szinte minden sejtjében",
    r1_q: "Mely bázis párosodik az Adeninnel (A) a DNS-ben?",
    r1_t: "Timin (T)",
    r1_g: "Guanin (G)",
    r1_c: "Citozin (C)",
    r1_p: "Foszfát",

    // Round 2: Genes & Chromosomes
    r2_title: "Gének és kromoszómák",
    r2_text: "A gének a DNS olyan szakaszai, amelyek meghatározott jellegzetes tulajdonságokat kódolnak. A kromoszómák DNS-csomagok, amelyek sok gént tartalmaznak.",
    r2_fact1: "Az embernek 46 kromoszómája van (23 pár) a legtöbb sejtben",
    r2_fact2: "Egy kromoszóma több ezer gént tartalmaz",
    r2_fact3: "A gének olyan tulajdonságokat szabályoznak, mint a szemszín, a magasság és a hajstruktura",
    r2_fact4: "Mindegyik szülő 23 kromoszómát ad az gyermekének",
    r2_q: "Hány kromoszómája van az embernek általában?",
    r2_46: "46 (23 pár)",
    r2_23: "23",
    r2_92: "92",
    r2_dna: "Csak DNS (nincs kromoszóma)",

    // Round 3: Heredity & Traits
    r3_title: "Örökletes tulajdonságok: Jellegek továbbadása",
    r3_text: "Az örökletes tulajdonságok szülőtől gyermekhez gének útján továbbadódnak. Egyes jellegek dominánsak, mások recesszívek.",
    r3_fact1: "A domináns jellegek megjelennek, ha egy domináns gént örököltél",
    r3_fact2: "A recesszív jellegek csak akkor jelennek meg, ha két recesszív gént örököltél",
    r3_fact3: "Gregor Mendel borsónovel tanulmányozta az öröklődési törvényeket",
    r3_fact4: "A Punnett-négyzet a szülőktől lehetséges genetikai kombinációkat mutatja",
    r3_q: "Ha a domináns jel D és recesszív d, mikor jelenik meg a recesszív jel?",
    r3_dd: "Ha valakinek dd van (két recesszív gén)",
    r3_dd_or_d: "Ha valakinek d van (bármilyen d gén)",
    r3_d_only: "Ha valakinek csak D van",
    r3_always: "Mindig megjelenik",

    // Round 4: DNA Replication
    r4_title: "DNS-replikáció: DNS másolás",
    r4_text: "Egy sejt osztódása előtt a DNS-t meg kell másolni, hogy minden új sejt ugyanazokkal a genetikai információkkal rendelkezzen.",
    r4_fact1: "A DNS kettős spirál felcsavarodása, és a két szál elválasztódik",
    r4_fact2: "Minden elválasztott szál sablonként szolgál egy új szálhoz",
    r4_fact3: "A bázispárosítási szabályok biztosítják a pontos másolatot: A a T-vel, G a C-vel",
    r4_fact4: "Az eredmény két azonos DNS-molekula, ugyanazzal a génekkel",
    r4_q: "Mi vezérli a nukleotidok kötődését a DNS-replikációban?",
    r4_bp: "Bázispárosítási szabályok (A-T, G-C)",
    r4_sz: "Enzim mérete",
    r4_temp: "Hőmérséklet",
    r4_ph: "pH érték",

    // Round 5: Review Quiz
    r5_title: "DNS és genetika ismétlés",

    // Quiz questions (3 total)
    q1_q: "A DNS alakja egy...",
    q1_a: "Kettős spirál",
    q1_b: "Kör",
    q1_c: "Egyenes vonal",
    q1_d: "Háromszög",

    q2_q: "Egy gén egy ... kódol",
    q2_a: "Meghatározott tulajdonságért (mint például a szemszín)",
    q2_b: "Energia forrásért",
    q2_c: "Sejtmembránért",
    q2_d: "Mitokondrium-ért",

    q3_q: "Ha mindkét szülőtől egy recesszív gént örököltél (dd), akkor...",
    q3_a: "Megmutatod a recesszív tulajdonságot",
    q3_b: "Megmutatod a domináns tulajdonságot",
    q3_c: "Egyenlően mutatod meg mindkét tulajdonságot",
    q3_d: "Nem mutatod meg a tulajdonságot",
  },
  ro: {
    // Round 1: DNA Structure
    r1_title: "Structura ADN: Dubla helice",
    r1_text: "ADN-ul are forma unei scări răsucite numită dubla helice. Conține informații genetice care te fac unic.",
    r1_fact1: "ADN-ul este alcătuit din patru baze: Adenină (A), Timină (T), Guanină (G), Citozină (C)",
    r1_fact2: "Aceste baze formează perechi: A se pereează cu T, G se pereează cu C",
    r1_fact3: "Coloana vertebrală a ADN-ului este făcută din molecule de zahăr și fosfat",
    r1_fact4: "ADN-ul se găsește în nucleul aproape fiecărei celule a corpului tău",
    r1_q: "Care bază se pereează cu Adenina (A) în ADN?",
    r1_t: "Timină (T)",
    r1_g: "Guanină (G)",
    r1_c: "Citozină (C)",
    r1_p: "Fosfat",

    // Round 2: Genes & Chromosomes
    r2_title: "Gene și cromozomi",
    r2_text: "Genele sunt segmente de ADN care codifică trăsături specifice. Cromozomii sunt pachete de ADN care poartă multe gene.",
    r2_fact1: "Oamenii au 46 de cromozomi (23 perechi) în majoritatea celulelor",
    r2_fact2: "Un cromozom conține mii de gene",
    r2_fact3: "Genele controlează trăsături cum ar fi culoarea ochilor, înălțimea și structura părului",
    r2_fact4: "Fiecare părinte contribuie 23 de cromozomi copilului lor",
    r2_q: "Câți cromozomi au oamenii de obicei?",
    r2_46: "46 (23 perechi)",
    r2_23: "23",
    r2_92: "92",
    r2_dna: "Doar ADN (fără cromozomi)",

    // Round 3: Heredity & Traits
    r3_title: "Moștenire: Transmiterea trăsăturilor",
    r3_text: "Trăsăturile sunt transmise de la părinți la copii prin gene. Unele trăsături sunt dominante; altele sunt recesive.",
    r3_fact1: "Trăsăturile dominante apar dacă moștenești un gen dominant",
    r3_fact2: "Trăsăturile recesive apar doar dacă moștenești două gene recesive",
    r3_fact3: "Gregor Mendel a studiat plantele de mazăre pentru a descoperi legile moștenirii",
    r3_fact4: "Un pătrat Punnett arată combinații genetice posibile de la părinți",
    r3_q: "Dacă un trait dominant este D și recesiv d, când apare traits-ul recesiv?",
    r3_dd: "Când o persoană are dd (două gene recesive)",
    r3_dd_or_d: "Când o persoană are d (orice gen d)",
    r3_d_only: "Când o persoană are doar D",
    r3_always: "Apare întotdeauna",

    // Round 4: DNA Replication
    r4_title: "Replicarea ADN-ului: Copierea ADN",
    r4_text: "Înainte ca o celulă să se împartă, ADN-ul trebuie copiat, astfel încât fiecare celulă nouă să aibă aceleași informații genetice.",
    r4_fact1: "Dubla helice a ADN-ului se deșurubează, separând cei doi lanțuri",
    r4_fact2: "Fiecare lanț separat servește ca șablon pentru un lanț nou",
    r4_fact3: "Regulile perecherii de baze asigură o copiere exactă: A cu T, G cu C",
    r4_fact4: "Rezultatul sunt două molecule de ADN identice cu aceleași gene",
    r4_q: "Ce ghidează atașarea nucleotidelor în replicarea ADN-ului?",
    r4_bp: "Reguli de perechiere a bazelor (A-T, G-C)",
    r4_sz: "Dimensiunea enzimei",
    r4_temp: "Temperatura",
    r4_ph: "Nivelul pH",

    // Round 5: Review Quiz
    r5_title: "ADN și genetică - recapitulare",

    // Quiz questions (3 total)
    q1_q: "ADN-ul are forma unui...",
    q1_a: "Dubla helice",
    q1_b: "Cerc",
    q1_c: "Linie dreaptă",
    q1_d: "Triunghi",

    q2_q: "Un gen codifică un...",
    q2_a: "Trait specific (cum ar fi culoarea ochilor)",
    q2_b: "Sursă de energie",
    q2_c: "Membrană celulară",
    q2_d: "Mitocondriu",

    q3_q: "Dacă moștenești un gen recesiv de la fiecare părinte (dd), atunci...",
    q3_a: "Arăți traits-ul recesiv",
    q3_b: "Arăți traits-ul dominant",
    q3_c: "Arăți ambele traits în mod egal",
    q3_d: "Nu arăți niciun trait",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations (simple colored shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

const DNAHelix = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    <defs>
      <linearGradient id="helixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    {/* Backbone - two vertical lines */}
    <line x1="80" y1="20" x2="80" y2="140" stroke="#E879F9" strokeWidth="6" />
    <line x1="160" y1="20" x2="160" y2="140" stroke="#E879F9" strokeWidth="6" />
    {/* Spiral rungs - base pairs */}
    {[20, 40, 60, 80, 100, 120, 140].map((y) => (
      <g key={y}>
        <line x1="80" y1={y} x2="160" y2={y} stroke="url(#helixGrad)" strokeWidth="4" />
        <circle cx="85" cy={y} r="3" fill="#3B82F6" />
        <circle cx="155" cy={y} r="3" fill="#3B82F6" />
      </g>
    ))}
    {/* Twisted effect - curved guides */}
    <path d="M 70 20 Q 60 80 70 140" stroke="rgba(59,130,246,0.2)" strokeWidth="2" fill="none" />
    <path d="M 170 20 Q 180 80 170 140" stroke="rgba(59,130,246,0.2)" strokeWidth="2" fill="none" />
  </svg>
);

const Chromosomes = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    <defs>
      <linearGradient id="chromGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    {/* Nucleus circle */}
    <circle cx="120" cy="80" r="70" fill="rgba(6,182,212,0.1)" stroke="#06B6D4" strokeWidth="2" />
    {/* Chromosomes - X shapes */}
    {[[80, 50], [140, 50], [100, 90], [140, 90], [80, 120]].map(([x, y], i) => (
      <g key={i}>
        <line x1={x - 12} y1={y - 12} x2={x + 12} y2={y + 12} stroke="url(#chromGrad)" strokeWidth="3" />
        <line x1={x - 12} y1={y + 12} x2={x + 12} y2={y - 12} stroke="url(#chromGrad)" strokeWidth="3" />
      </g>
    ))}
    {/* Center nucleus label area */}
    <circle cx="120" cy="80" r="6" fill="#06B6D4" />
  </svg>
);

const TraitInheritance = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    <defs>
      <linearGradient id="parentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
    {/* Parent circles */}
    <circle cx="60" cy="40" r="18" fill="url(#parentGrad)" opacity="0.7" />
    <circle cx="180" cy="40" r="18" fill="url(#parentGrad)" opacity="0.7" />
    {/* Lines to offspring */}
    <line x1="60" y1="58" x2="80" y2="90" stroke="rgba(236,72,153,0.3)" strokeWidth="2" />
    <line x1="180" y1="58" x2="160" y2="90" stroke="rgba(236,72,153,0.3)" strokeWidth="2" />
    {/* Offspring squares - 4 combinations */}
    {[[60, 110], [100, 110], [70, 140], [110, 140]].map(([x, y], i) => (
      <rect
        key={i}
        x={x - 12}
        y={y - 12}
        width="24"
        height="24"
        fill={i < 2 ? "#3B82F6" : "#8B5CF6"}
        opacity="0.6"
        rx="3"
      />
    ))}
  </svg>
);

const DNAReplication = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    <defs>
      <linearGradient id="repGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* Original DNA (left) */}
    <line x1="40" y1="20" x2="40" y2="100" stroke="#10B981" strokeWidth="5" />
    <line x1="80" y1="20" x2="80" y2="100" stroke="#10B981" strokeWidth="5" />
    {[25, 45, 65, 85].map((y) => (
      <line key={y} x1="40" y1={y} x2="80" y2={y} stroke="rgba(16,185,129,0.4)" strokeWidth="2" />
    ))}
    {/* Separation arrows */}
    <path d="M 90 50 L 120 50" stroke="#FCD34D" strokeWidth="2" markerEnd="url(#arrow)" />
    {/* New DNA copies (right) */}
    <line x1="160" y1="20" x2="160" y2="100" stroke="#10B981" strokeWidth="5" />
    <line x1="200" y1="20" x2="200" y2="100" stroke="#10B981" strokeWidth="5" />
    {[25, 45, 65, 85].map((y) => (
      <line key={y} x1="160" y1={y} x2="200" y2={y} stroke="rgba(16,185,129,0.4)" strokeWidth="2" />
    ))}
    {/* Equality sign below */}
    <line x1="160" y1="120" x2="200" y2="120" stroke="#10B981" strokeWidth="2" />
    <line x1="160" y1="130" x2="200" y2="130" stroke="#10B981" strokeWidth="2" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const DNA_EXPLORER: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <DNAHelix />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      hintKey: "r1_q",
      questions: [
        {
          question: "r1_q",
          choices: ["r1_t", "r1_g", "r1_c", "r1_p"],
          answer: "r1_t",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <Chromosomes />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      questions: [
        {
          question: "r2_q",
          choices: ["r2_46", "r2_23", "r2_92", "r2_dna"],
          answer: "r2_46",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <TraitInheritance />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_dd", "r3_dd_or_d", "r3_d_only", "r3_always"],
          answer: "r3_dd",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <DNAReplication />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_bp", "r4_sz", "r4_temp", "r4_ph"],
          answer: "r4_bp",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <DNAHelix />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_a",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_a",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────

export default function DNAExplorer({
  color = "#3B82F6",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={DNA_EXPLORER} color={color} lang={lang} onDone={onDone} />;
}
