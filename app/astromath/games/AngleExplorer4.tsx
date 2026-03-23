"use client";
// AngleExplorer4 — Angles & Symmetry for Grade 4 (island i8)
// Uses ExplorerEngine with 3 topics: angle types, symmetry, angle measurement
// Topic mode: interactive learning blocks + MCQ

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Angle types (right, acute, obtuse) ──────────────────────────────────

const AngleTypesSvg = memo(function AngleTypesSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="atG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#atG)" rx="16" />

      {/* Right angle (90°) */}
      <g transform="translate(25, 40)">
        <line x1="0" y1="40" x2="40" y2="40" stroke="#EF4444" strokeWidth="3" />
        <line x1="40" y1="40" x2="40" y2="0" stroke="#EF4444" strokeWidth="3" />
        <rect x="35" y="35" width="5" height="5" fill="none" stroke="#EF4444" strokeWidth="1" />
        <text x="20" y="58" fontSize="10" fontWeight="bold" fill="#EF4444" textAnchor="middle">{t.at_right}</text>
        <text x="20" y="70" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">90°</text>
      </g>

      {/* Acute angle (45°) */}
      <g transform="translate(105, 45)">
        <line x1="0" y1="35" x2="35" y2="35" stroke="#10B981" strokeWidth="3" />
        <line x1="0" y1="35" x2="25" y2="10" stroke="#10B981" strokeWidth="3" />
        <path d="M 12 32 Q 15 28 18 24" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.6" />
        <text x="20" y="58" fontSize="10" fontWeight="bold" fill="#10B981" textAnchor="middle">{t.at_acute}</text>
        <text x="20" y="70" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">&lt;90°</text>
      </g>

      {/* Obtuse angle (120°) */}
      <g transform="translate(185, 35)">
        <line x1="0" y1="45" x2="40" y2="45" stroke="#8B5CF6" strokeWidth="3" />
        <line x1="0" y1="45" x2="15" y2="5" stroke="#8B5CF6" strokeWidth="3" />
        <path d="M 15 35 Q 18 25 22 18" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
        <text x="20" y="68" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{t.at_obtuse}</text>
        <text x="20" y="80" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">&gt;90°</text>
      </g>
    </svg>
  );
});

// ─── SVG: Line of symmetry (mirror line) ───────────────────────────────────────

const SymmetrySvg = memo(function SymmetrySvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="symG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#symG)" rx="16" />

      {/* Left half of butterfly */}
      <g transform="translate(30, 40)">
        {/* Body */}
        <circle cx="20" cy="30" r="3" fill="#10B981" />
        {/* Left wing top */}
        <ellipse cx="10" cy="15" rx="8" ry="12" fill="#10B981" opacity="0.7" />
        {/* Left wing bottom */}
        <ellipse cx="8" cy="45" rx="7" ry="11" fill="#10B981" opacity="0.7" />
      </g>

      {/* Mirror line */}
      <line x1="60" y1="10" x2="60" y2="130" stroke="rgba(236, 72, 153, 0.8)" strokeWidth="2" strokeDasharray="4,4" />

      {/* Right half of butterfly (mirrored) */}
      <g transform="translate(60, 40)">
        {/* Body */}
        <circle cx="20" cy="30" r="3" fill="#10B981" />
        {/* Right wing top (mirrored) */}
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="#10B981" opacity="0.7" />
        {/* Right wing bottom (mirrored) */}
        <ellipse cx="32" cy="45" rx="7" ry="11" fill="#10B981" opacity="0.7" />
      </g>

      {/* Label */}
      <text x="120" y="130" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {t.sym_label}
      </text>
    </svg>
  );
});

// ─── SVG: Protractor and angle measurement ─────────────────────────────────────

const ProtractorSvg = memo(function ProtractorSvg({ lang = "en" }: { lang?: string }) {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="protG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#protG)" rx="16" />

      {/* Protractor base (semicircle) */}
      <g transform="translate(120, 90)">
        {/* Semicircle */}
        <path d="M -50 0 A 50 50 0 0 1 50 0" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />

        {/* Degree marks */}
        {[0, 30, 60, 90, 120, 150, 180].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 45 * Math.cos(rad);
          const y1 = -45 * Math.sin(rad);
          const x2 = 50 * Math.cos(rad);
          const y2 = -50 * Math.sin(rad);
          return (
            <g key={`mark-${deg}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
              <text x={x1 * 1.15} y={-y1 * 1.15} fontSize="8" fill="#3B82F6" textAnchor="middle" dominantBaseline="middle">
                {deg}°
              </text>
            </g>
          );
        })}

        {/* Center point */}
        <circle cx="0" cy="0" r="3" fill="#3B82F6" />

        {/* Angle ray (45°) */}
        <line x1="0" y1="0" x2={35 * Math.cos((45 * Math.PI) / 180)} y2={-35 * Math.sin((45 * Math.PI) / 180)} stroke="#EF4444" strokeWidth="2" />

        {/* Base ray */}
        <line x1="0" y1="0" x2="40" y2="0" stroke="#EF4444" strokeWidth="2" />

        {/* Angle arc */}
        <path d="M 15 0 A 15 15 0 0 1 10.6 -10.6" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.7" />
        <text x="12" y="-8" fontSize="10" fontWeight="bold" fill="#EF4444">45°</text>
      </g>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Angles & Symmetry Explorer",
    // SVG labels (angle types)
    at_right: "Right",
    at_acute: "Acute",
    at_obtuse: "Obtuse",
    sym_label: "Symmetry: both halves match!",
    // Topic 1: Angle types
    t1_title: "Three Types of Angles",
    t1_inst: "Read about three angle types. Click 'Got it!' then answer the question.",
    t1_h1: "💡 Angles are measured in degrees (°)",
    t1_h2: "🎯 Identify angle types by their size",
    t1_text: "Angles are measured in degrees (°). A right angle is exactly 90° — like a corner of a square. An acute angle is less than 90° — sharp and pointy. An obtuse angle is more than 90° — wide and open.",
    t1_b1: "Right angle = 90°",
    t1_b2: "Acute angle < 90°",
    t1_b3: "Obtuse angle > 90°",
    t1_q: "Which type of angle is 65°?",
    t1_q_right: "Right angle",
    t1_q_acute: "Acute angle",
    t1_q_obtuse: "Obtuse angle",
    t1_q_straight: "Straight angle",
    // Topic 2: Symmetry (mirror lines)
    t2_title: "Lines of Symmetry",
    t2_inst: "Learn about mirror lines. Click 'Got it!' then answer the question.",
    t2_h1: "🪞 A line of symmetry divides shapes into mirror halves",
    t2_h2: "✨ Both halves must match perfectly",
    t2_text: "A line of symmetry divides a shape into two mirror halves. If you fold along the line, both halves match perfectly! A butterfly has vertical symmetry. A rectangle has 2 lines of symmetry. Understanding symmetry helps us recognize patterns.",
    t2_b1: "A line of symmetry mirrors the shape",
    t2_b2: "Both halves must be identical",
    t2_b3: "Shapes can have 0, 1, or more lines",
    t2_q: "How many lines of symmetry does a square have?",
    t2_q_0: "0 lines",
    t2_q_1: "1 line",
    t2_q_2: "2 lines",
    t2_q_4: "4 lines",
    // Topic 3: Measuring angles with protractor
    t3_title: "Measuring Angles",
    t3_inst: "Discover how to use a protractor. Click 'Got it!' then answer the question.",
    t3_h1: "📐 A protractor measures angles in degrees",
    t3_h2: "🔍 Center point on corner, align base ray to 0°",
    t3_text: "A protractor is a tool to measure angles in degrees. Place the center of the protractor on the angle's corner. Line up one ray with 0°. Read where the other ray points. That's the angle measurement!",
    t3_b1: "Protractor center goes on the corner",
    t3_b2: "Align one ray with 0°",
    t3_b3: "Read the degree where the other ray points",
    t3_q: "A protractor shows one ray at 0° and the other at 75°. What is the angle?",
    t3_q_15: "15°",
    t3_q_45: "45°",
    t3_q_75: "75°",
    t3_q_105: "105°",
    // Review questions (R5)
    r5_q1: "Is a 125° angle acute, right, or obtuse?",
    r5_q1_a: "Acute",
    r5_q1_b: "Right",
    r5_q1_c: "Obtuse",
    r5_q1_d: "Straight",
    r5_q2: "How many lines of symmetry does a circle have?",
    r5_q2_a: "1 line",
    r5_q2_b: "2 lines",
    r5_q2_c: "4 lines",
    r5_q2_d: "Infinite lines",
    r5_q3: "Which angle is less than 90°?",
    r5_q3_a: "95°",
    r5_q3_b: "90°",
    r5_q3_c: "88°",
    r5_q3_d: "100°",
  },
  de: {
    explorer_title: "Winkel & Symmetrie Entdecker",
    at_right: "Recht",
    at_acute: "Spitz",
    at_obtuse: "Stumpf",
    sym_label: "Symmetrie: beide Hälften passen!",
    t1_title: "Drei Winkeltypen",
    t1_inst: "Lesen Sie über drei Winkeltypen. Klicken Sie auf 'Verstanden!' und beantworten Sie die Frage.",
    t1_h1: "💡 Winkel werden in Graden (°) gemessen",
    t1_h2: "🎯 Erkenne Winkeltypen nach ihrer Größe",
    t1_text: "Winkel werden in Graden (°) gemessen. Ein rechter Winkel ist genau 90° — wie eine Ecke eines Quadrats. Ein spitzer Winkel ist kleiner als 90° — scharf und spitz. Ein stumpfer Winkel ist größer als 90° — breit und offen.",
    t1_b1: "Rechter Winkel = 90°",
    t1_b2: "Spitzer Winkel < 90°",
    t1_b3: "Stumpfer Winkel > 90°",
    t1_q: "Welcher Winkeltyp ist 65°?",
    t1_q_right: "Rechter Winkel",
    t1_q_acute: "Spitzer Winkel",
    t1_q_obtuse: "Stumpfer Winkel",
    t1_q_straight: "Gestreckter Winkel",
    t2_title: "Symmetrieachsen",
    t2_inst: "Erfahren Sie mehr über Spiegellinien. Klicken Sie auf 'Verstanden!' und beantworten Sie die Frage.",
    t2_h1: "🪞 Eine Symmetrieachse teilt Formen in Spiegelhälften",
    t2_h2: "✨ Beide Hälften müssen perfekt übereinstimmen",
    t2_text: "Eine Symmetrieachse teilt eine Form in zwei gespiegelte Hälften. Wenn du entlang der Linie faltest, passen beide Hälften perfekt! Ein Schmetterling hat vertikale Symmetrie. Ein Rechteck hat 2 Symmetrieachsen. Das Verständnis von Symmetrie hilft uns, Muster zu erkennen.",
    t2_b1: "Eine Symmetrieachse spiegelt die Form",
    t2_b2: "Beide Hälften müssen identisch sein",
    t2_b3: "Formen können 0, 1 oder mehr Achsen haben",
    t2_q: "Wie viele Symmetrieachsen hat ein Quadrat?",
    t2_q_0: "0 Linien",
    t2_q_1: "1 Linie",
    t2_q_2: "2 Linien",
    t2_q_4: "4 Linien",
    t3_title: "Winkel messen",
    t3_inst: "Entdecken Sie, wie man einen Winkelmesser verwendet. Klicken Sie auf 'Verstanden!' und beantworten Sie die Frage.",
    t3_h1: "📐 Ein Winkelmesser misst Winkel in Graden",
    t3_h2: "🔍 Mittelpunkt auf Ecke, Basisstrahl auf 0°",
    t3_text: "Ein Winkelmesser ist ein Werkzeug zum Messen von Winkeln in Grad. Platziere die Mitte des Winkelmessers auf der Ecke des Winkels. Richte einen Strahl mit 0° aus. Lies, wo der andere Strahl zeigt. Das ist die Winkelmessung!",
    t3_b1: "Winkelmesser-Mitte auf die Ecke",
    t3_b2: "Einen Strahl mit 0° ausrichten",
    t3_b3: "Lies den Grad, wo der andere Strahl zeigt",
    t3_q: "Ein Winkelmesser zeigt einen Strahl bei 0° und den anderen bei 75°. Welcher Winkel?",
    t3_q_15: "15°",
    t3_q_45: "45°",
    t3_q_75: "75°",
    t3_q_105: "105°",
    r5_q1: "Ist ein 125° Winkel spitz, recht oder stumpf?",
    r5_q1_a: "Spitzer Winkel",
    r5_q1_b: "Rechter Winkel",
    r5_q1_c: "Stumpfer Winkel",
    r5_q1_d: "Gestreckter Winkel",
    r5_q2: "Wie viele Symmetrieachsen hat ein Kreis?",
    r5_q2_a: "1 Linie",
    r5_q2_b: "2 Linien",
    r5_q2_c: "4 Linien",
    r5_q2_d: "Unendlich viele Linien",
    r5_q3: "Welcher Winkel ist kleiner als 90°?",
    r5_q3_a: "95°",
    r5_q3_b: "90°",
    r5_q3_c: "88°",
    r5_q3_d: "100°",
  },
  hu: {
    explorer_title: "Szögek & Szimmetria Felfedező",
    at_right: "Derék",
    at_acute: "Hegyes",
    at_obtuse: "Tompa",
    sym_label: "Szimmetria: mindkét fél egyezik!",
    t1_title: "Három szögtípus",
    t1_inst: "Olvasd el a három szögtípusról. Kattints a 'Értettem!' majd válaszolj a kérdésre.",
    t1_h1: "💡 A szögeket fokban (°) mérjük",
    t1_h2: "🎯 Ismerj fel szögtípusokat a méretük szerint",
    t1_text: "A szögeket fokban (°) mérjük. A derékszög pontosan 90° — mint egy négyzet sarka. Egy hegyesszög kevesebb mint 90° — éles és hegyes. Egy tompaszög több mint 90° — széles és nyitott.",
    t1_b1: "Derékszög = 90°",
    t1_b2: "Hegyesszög < 90°",
    t1_b3: "Tompaszög > 90°",
    t1_q: "Melyik szögtípus a 65°?",
    t1_q_right: "Derékszög",
    t1_q_acute: "Hegyesszög",
    t1_q_obtuse: "Tompaszög",
    t1_q_straight: "Egyenesszög",
    t2_title: "Szimmetriavonalak",
    t2_inst: "Tanuld meg a tükörvonalakat. Kattints a 'Értettem!' majd válaszolj a kérdésre.",
    t2_h1: "🪞 A szimmetriavonal az alakzatokat tükörlazákra osztja",
    t2_h2: "✨ Mindkét félnek tökéletesen egyeznie kell",
    t2_text: "A szimmetriavonal egy alakzatot két tükrözött félre oszt. Ha a vonal mentén összehajtasz, mindkét fél tökéletesen illeszkedik! A lepkének függőleges szimmetriája van. Egy téglalap 2 szimmetriavonallal rendelkezik. A szimmetria megértése segít a minták felismerésében.",
    t2_b1: "A szimmetriavonal tükrözi az alakzatot",
    t2_b2: "Mindkét félnek azonosnak kell lennie",
    t2_b3: "Az alakzatoknak lehet 0, 1 vagy több vonala",
    t2_q: "Hány szimmetriavonala van egy négyzetnek?",
    t2_q_0: "0 vonal",
    t2_q_1: "1 vonal",
    t2_q_2: "2 vonal",
    t2_q_4: "4 vonal",
    t3_title: "Szögek mérése",
    t3_inst: "Fedezd fel, hogyan kell szögmérőt használni. Kattints a 'Értettem!' majd válaszolj a kérdésre.",
    t3_h1: "📐 A szögmérő a szögeket fokokban méri",
    t3_h2: "🔍 Középpont a sarokra, alap sugár 0°-ra",
    t3_text: "A szögmérő a szögek fokban történő mérésére szolgáló eszköz. Helyezd a szögmérő közepét a szög sarkára. Igazíts egy sugarat 0°-hoz. Olvasd, hol mutat a másik sugár. Ez a szög mérése!",
    t3_b1: "Szögmérő közepét a sarokra helyezd",
    t3_b2: "Egy sugarat 0°-hoz igazíts",
    t3_b3: "Olvass ahol a másik sugár mutat",
    t3_q: "Egy szögmérő egy sugarat 0°-nál és a másikat 75°-nál mutat. Melyik a szög?",
    t3_q_15: "15°",
    t3_q_45: "45°",
    t3_q_75: "75°",
    t3_q_105: "105°",
    r5_q1: "A 125° szög hegyes, derék vagy tompa?",
    r5_q1_a: "Hegyesszög",
    r5_q1_b: "Derékszög",
    r5_q1_c: "Tompaszög",
    r5_q1_d: "Egyenesszög",
    r5_q2: "Hány szimmetriavonala van a körnek?",
    r5_q2_a: "1 vonal",
    r5_q2_b: "2 vonal",
    r5_q2_c: "4 vonal",
    r5_q2_d: "Végtelen sok vonal",
    r5_q3: "Melyik szög kevesebb mint 90°?",
    r5_q3_a: "95°",
    r5_q3_b: "90°",
    r5_q3_c: "88°",
    r5_q3_d: "100°",
  },
  ro: {
    explorer_title: "Explorare unghiuri și simetrie",
    at_right: "Drept",
    at_acute: "Acut",
    at_obtuse: "Obtuz",
    sym_label: "Simetrie: ambele jumătăți se potrivesc!",
    t1_title: "Trei tipuri de unghiuri",
    t1_inst: "Citește despre trei tipuri de unghiuri. Fă clic pe 'Am înțeles!' și răspunde la întrebare.",
    t1_h1: "💡 Unghiurile se măsoară în grade (°)",
    t1_h2: "🎯 Identifică tipurile de unghiuri după mărime",
    t1_text: "Unghiurile se măsoară în grade (°). Un unghi drept este exact 90° — ca un colț al unui pătrat. Un unghi acut este mai mic de 90° — ascuțit și țintă. Un unghi obtuz este mai mare de 90° — larg și deschis.",
    t1_b1: "Unghi drept = 90°",
    t1_b2: "Unghi acut < 90°",
    t1_b3: "Unghi obtuz > 90°",
    t1_q: "Ce tip de unghi este 65°?",
    t1_q_right: "Unghi drept",
    t1_q_acute: "Unghi acut",
    t1_q_obtuse: "Unghi obtuz",
    t1_q_straight: "Unghi alungit",
    t2_title: "Linii de simetrie",
    t2_inst: "Afișa despre linii de oglindă. Fă clic pe 'Am înțeles!' și răspunde la întrebare.",
    t2_h1: "🪞 O linie de simetrie împarte formele în jumătăți în oglindă",
    t2_h2: "✨ Ambele jumătăți trebuie să se potrivească perfect",
    t2_text: "O linie de simetrie împarte o formă în două jumătăți în oglindă. Dacă pliezi de-a lungul liniei, ambele jumătăți se potrivesc perfect! Un fluture are simetrie verticală. Un dreptunghi are 2 linii de simetrie. Înțelegerea simetriei ne ajută să recunoaștem modelele.",
    t2_b1: "O linie de simetrie oglindește forma",
    t2_b2: "Ambele jumătăți trebuie să fie identice",
    t2_b3: "Formele pot avea 0, 1 sau mai multe linii",
    t2_q: "Câte linii de simetrie are un pătrat?",
    t2_q_0: "0 linii",
    t2_q_1: "1 linie",
    t2_q_2: "2 linii",
    t2_q_4: "4 linii",
    t3_title: "Măsurarea unghiurilor",
    t3_inst: "Descoperă cum să folosești un raportor. Fă clic pe 'Am înțeles!' și răspunde la întrebare.",
    t3_h1: "📐 Un raportor măsoară unghiurile în grade",
    t3_h2: "🔍 Punct central pe colț, rază de bază la 0°",
    t3_text: "Un raportor este un instrument pentru măsurarea unghiurilor în grade. Plasează centrul raportorului pe colțul unghiului. Aliniază o rază la 0°. Citește unde indică cealaltă rază. Aceasta este măsura unghiului!",
    t3_b1: "Centrul raportorului pe colț",
    t3_b2: "Aliniază o rază la 0°",
    t3_b3: "Citește gradul unde indică cealaltă rază",
    t3_q: "Un raportor arată o rază la 0° și cealaltă la 75°. Care este unghiul?",
    t3_q_15: "15°",
    t3_q_45: "45°",
    t3_q_75: "75°",
    t3_q_105: "105°",
    r5_q1: "Un unghi de 125° este acut, drept sau obtuz?",
    r5_q1_a: "Acut",
    r5_q1_b: "Drept",
    r5_q1_c: "Obtuz",
    r5_q1_d: "Alungit",
    r5_q2: "Câte linii de simetrie are un cerc?",
    r5_q2_a: "1 linie",
    r5_q2_b: "2 linii",
    r5_q2_c: "4 linii",
    r5_q2_d: "Infinite linii",
    r5_q3: "Care unghi este mai mic de 90°?",
    r5_q3_a: "95°",
    r5_q3_b: "90°",
    r5_q3_c: "88°",
    r5_q3_d: "100°",
  },
};

// ─── TOPIC DEFINITIONS ──────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ─ Topic 1: Angle types ─
  {
    id: "t1_angles",
    title: "t1_title",
    instruction: "t1_inst",
    svg: (lang: string) => <AngleTypesSvg lang={lang} />,
    hints: ["t1_h1", "t1_h2"],
    description: "t1_text",
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactiveBlocks: [
      {
        type: "comparison",
        title: "t1_title",
        items: [
          { label: "t1_q_right", value: "90°", color: "#EF4444" },
          { label: "t1_q_acute", value: "<90°", color: "#10B981" },
          { label: "t1_q_obtuse", value: ">90°", color: "#8B5CF6" },
        ],
      },
      {
        type: "info-block",
        content: "t1_text",
      },
    ],
    questions: [
      {
        question: "t1_q",
        choices: ["t1_q_right", "t1_q_acute", "t1_q_obtuse", "t1_q_straight"],
        answer: "t1_q_acute",
      },
    ],
  },

  // ─ Topic 2: Symmetry (lines of symmetry) ─
  {
    id: "t2_symmetry",
    title: "t2_title",
    instruction: "t2_inst",
    svg: (lang: string) => <SymmetrySvg lang={lang} />,
    hints: ["t2_h1", "t2_h2"],
    description: "t2_text",
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactiveBlocks: [
      {
        type: "numbered-list",
        items: ["t2_b1", "t2_b2", "t2_b3"],
      },
      {
        type: "info-block",
        content: "t2_text",
      },
    ],
    questions: [
      {
        question: "t2_q",
        choices: ["t2_q_0", "t2_q_1", "t2_q_2", "t2_q_4"],
        answer: "t2_q_4",
      },
    ],
  },

  // ─ Topic 3: Measuring angles with protractor ─
  {
    id: "t3_protractor",
    title: "t3_title",
    instruction: "t3_inst",
    svg: (lang: string) => <ProtractorSvg lang={lang} />,
    hints: ["t3_h1", "t3_h2"],
    description: "t3_text",
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactiveBlocks: [
      {
        type: "steps",
        steps: ["t3_b1", "t3_b2", "t3_b3"],
      },
      {
        type: "info-block",
        content: "t3_text",
      },
    ],
    questions: [
      {
        question: "t3_q",
        choices: ["t3_q_15", "t3_q_45", "t3_q_75", "t3_q_105"],
        answer: "t3_q_75",
      },
    ],
  },
];

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📐",
  topics: TOPICS,
  rounds: [],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AngleExplorer4({ color = "#F59E0B", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={4}
    />
  );
}
