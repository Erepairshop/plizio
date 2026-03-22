"use client";
// PlantExplorer — Island i4: Plant Organs (Pflanzenorgane) Grade 5
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Plant parts, photosynthesis, water transport, leaf function

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Plant Parts
    r1_title: "Plant Parts & Functions",
    r1_text: "Plants have four main organs that work together. Each part has a special job.",
    r1_fact1: "Roots absorb water and minerals from the soil",
    r1_fact2: "Stems support the plant and transport water upward",
    r1_fact3: "Leaves capture sunlight to make food (photosynthesis)",
    r1_fact4: "Flowers are for reproduction (making seeds)",

    // Round 2: Photosynthesis
    r2_title: "Photosynthesis: How Plants Make Food",
    r2_text: "Plants use sunlight, water, and carbon dioxide to make their own food (glucose) and release oxygen.",
    r2_fact1: "Photosynthesis happens mainly in the leaves",
    r2_fact2: "Three things needed: sunlight ☀️, water 💧, carbon dioxide CO₂",
    r2_fact3: "Two things produced: glucose (sugar) 🍬, oxygen O₂",
    r2_fact4: "This oxygen is what we breathe — plants give us fresh air!",

    // Round 3: Water Transport
    r3_title: "Water Transport: The Journey",
    r3_text: "Water travels through a plant from root to leaf in a process called transpiration.",
    r3_fact1: "Water enters through root hairs in the soil",
    r3_fact2: "The stem acts like a highway, moving water upward",
    r3_fact3: "Leaves use water for photosynthesis and release extra water vapor",
    r3_root: "Root absorbs water",
    r3_stem: "Stem transports water",
    r3_leaf: "Leaf uses & transpires",

    // Round 4: Leaf Structure
    r4_title: "Inside a Leaf",
    r4_text: "Leaves have a special structure for photosynthesis. Stomata are tiny pores that control gas exchange.",
    r4_fact1: "Stomata are pores on the leaf's underside for gas exchange",
    r4_fact2: "Chloroplasts inside leaf cells contain chlorophyll (green pigment)",
    r4_fact3: "CO₂ enters through stomata; O₂ exits through stomata",
    r4_fact4: "Guard cells open and close stomata to conserve water",

    // Round 5: Quiz
    r5_title: "Quick Review",

    // Quiz Questions (3 questions)
    q1_q: "Which plant part absorbs water and minerals from soil?",
    q1_root: "Root",
    q1_stem: "Stem",
    q1_leaf: "Leaf",
    q1_flower: "Flower",

    q2_q: "What three things does a plant need for photosynthesis?",
    q2_a: "Sunlight, water, CO₂",
    q2_b: "Sunlight, oxygen, nitrogen",
    q2_c: "Water, glucose, oxygen",
    q2_d: "Soil, air, sunlight",

    q3_q: "Which gas do plants release during photosynthesis?",
    q3_oxygen: "Oxygen",
    q3_co2: "Carbon dioxide",
    q3_nitrogen: "Nitrogen",
    q3_hydrogen: "Hydrogen",

    // Round 3 MCQ (Water Transport)
    r3_q: "What do stomata do on leaves?",
    r3_q_photosynthesis: "Control gas exchange (CO₂ in, O₂ out)",
    r3_q_transport: "Transport water upward",
    r3_q_stomata: "Protect the leaf surface",
    r3_q_root: "Absorb water from soil",

    // Round 4 MCQ (Leaf Structure)
    r4_q: "Which organelles in leaf cells contain chlorophyll?",
    r4_chloroplasts: "Chloroplasts",
    r4_mitochondria: "Mitochondria",
    r4_vacuoles: "Vacuoles",
    r4_membranes: "Cell membranes",
  },
  de: {
    r1_title: "Pflanzenteile & Funktionen",
    r1_text: "Pflanzen haben vier Hauptorgane, die zusammenarbeiten. Jeder Teil hat eine spezielle Aufgabe.",
    r1_fact1: "Wurzeln nehmen Wasser und Mineralstoffe aus dem Boden auf",
    r1_fact2: "Stängel stützen die Pflanze und transportieren Wasser nach oben",
    r1_fact3: "Blätter fangen Sonnenlicht ein, um Nahrung herzustellen (Fotosynthese)",
    r1_fact4: "Blüten dienen der Fortpflanzung (Samenbildung)",

    r2_title: "Fotosynthese: Wie Pflanzen Nahrung machen",
    r2_text: "Pflanzen nutzen Sonnenlicht, Wasser und Kohlendioxid, um ihre eigene Nahrung (Glukose) herzustellen und Sauerstoff freizusetzen.",
    r2_fact1: "Fotosynthese findet hauptsächlich in den Blättern statt",
    r2_fact2: "Drei Dinge nötig: Sonnenlicht ☀️, Wasser 💧, Kohlendioxid CO₂",
    r2_fact3: "Zwei Dinge entstehen: Glukose (Zucker) 🍬, Sauerstoff O₂",
    r2_fact4: "Dieser Sauerstoff ist, was wir atmen — Pflanzen geben uns frische Luft!",

    r3_title: "Wassertransport: Die Reise",
    r3_text: "Wasser wandert durch eine Pflanze von der Wurzel zum Blatt in einem Prozess namens Transpiration.",
    r3_fact1: "Wasser dringt durch Wurzelhaar in den Boden ein",
    r3_fact2: "Der Stängel fungiert wie eine Autobahn und transportiert Wasser nach oben",
    r3_fact3: "Blätter nutzen Wasser für die Fotosynthese und geben überschüssigen Wasserdampf ab",
    r3_root: "Wurzel nimmt Wasser auf",
    r3_stem: "Stängel transportiert Wasser",
    r3_leaf: "Blatt nutzt & verdunstet",

    r4_title: "Im Inneren eines Blattes",
    r4_text: "Blätter haben eine spezielle Struktur für die Fotosynthese. Stomata sind winzige Poren, die den Gasaustausch kontrollieren.",
    r4_fact1: "Stomata sind Poren auf der Blattunterseite für den Gasaustausch",
    r4_fact2: "Chloroplasten in Blattzellen enthalten Chlorophyll (grüner Farbstoff)",
    r4_fact3: "CO₂ tritt durch Stomata ein; O₂ tritt durch Stomata aus",
    r4_fact4: "Schließzellen öffnen und schließen Stomata, um Wasser zu sparen",

    r5_title: "Schnelle Wiederholung",

    q1_q: "Welcher Pflanzenteil nimmt Wasser und Mineralstoffe aus dem Boden auf?",
    q1_root: "Wurzel",
    q1_stem: "Stängel",
    q1_leaf: "Blatt",
    q1_flower: "Blüte",

    q2_q: "Welche drei Dinge braucht eine Pflanze für die Fotosynthese?",
    q2_a: "Sonnenlicht, Wasser, CO₂",
    q2_b: "Sonnenlicht, Sauerstoff, Stickstoff",
    q2_c: "Wasser, Glukose, Sauerstoff",
    q2_d: "Boden, Luft, Sonnenlicht",

    q3_q: "Welches Gas geben Pflanzen während der Fotosynthese ab?",
    q3_oxygen: "Sauerstoff",
    q3_co2: "Kohlendioxid",
    q3_nitrogen: "Stickstoff",
    q3_hydrogen: "Wasserstoff",

    // Round 3 MCQ (Wassertransport)
    r3_q: "Was machen Stomata auf Blättern?",
    r3_q_photosynthesis: "Kontrollieren Gasaustausch (CO₂ rein, O₂ raus)",
    r3_q_transport: "Transportieren Wasser nach oben",
    r3_q_stomata: "Schützen die Blattoberfläche",
    r3_q_root: "Nehmen Wasser aus dem Boden auf",

    // Round 4 MCQ (Blattstruktur)
    r4_q: "Welche Organellen in Blattzellen enthalten Chlorophyll?",
    r4_chloroplasts: "Chloroplasten",
    r4_mitochondria: "Mitochondrien",
    r4_vacuoles: "Vakuolen",
    r4_membranes: "Zellmembranen",
  },
  hu: {
    r1_title: "Növényrészek és funkcióik",
    r1_text: "A növényeknek négy fő szerve van, amelyek együttműködnek. Mindegyik résznek speciális feladata van.",
    r1_fact1: "A gyökerek felszívják a vizet és ásványi anyagokat a talajból",
    r1_fact2: "A szár támogatja a növényt és felfelé szállítja a vizet",
    r1_fact3: "A levelek megkötik a napfényt az élelmiszer-készítéshez (fotoszintézis)",
    r1_fact4: "A virágok a szaporodásra szolgálnak (magképzés)",

    r2_title: "Fotoszintézis: Hogyan készítik a növények az ételt",
    r2_text: "A növények napfényt, vizet és szén-dioxidot használnak a saját tápanyag (glükóz) előállításához és oxigén felszabadításához.",
    r2_fact1: "A fotoszintézis főleg a levelekben történik",
    r2_fact2: "Három dolog szükséges: napfény ☀️, víz 💧, szén-dioxid CO₂",
    r2_fact3: "Két dolog keletkezik: glükóz (cukor) 🍬, oxigén O₂",
    r2_fact4: "Ez az oxigén az, amit mi lélegzünk — a növények friss levegőt adnak nekünk!",

    r3_title: "Vízszállítás: Az utazás",
    r3_text: "A víz a növényen keresztül a gyökérzettől a levélig utazik egy transzpirációnak nevezett folyamatban.",
    r3_fact1: "A víz a talajban lévő gyökérszőrön keresztül lép be",
    r3_fact2: "A szár olyan, mint egy autópálya, felfelé szállítja a vizet",
    r3_fact3: "A levelek vizet használnak a fotoszintézishez és felszabadítanak felesleges vízgőzt",
    r3_root: "Gyökér felszívja a vizet",
    r3_stem: "Szár szállítja a vizet",
    r3_leaf: "Levél használja és elpárolog",

    r4_title: "Egy levél belseje",
    r4_text: "A leveleknek speciális szerkezete van a fotoszintézishez. A stómák apró pórusok, amelyek szabályozzák a gázcsere.",
    r4_fact1: "A stómák a levél alsó felén található pórusok a gázcseréhez",
    r4_fact2: "A levelekben lévő kloroplasztok klorofill (zöld pigment) tartalmaz",
    r4_fact3: "CO₂ a stómákon keresztül jut be; O₂ a stómákon keresztül jut ki",
    r4_fact4: "Őrzőcellák nyitják és zárják a stómákat a víz megtakarítása érdekében",

    r5_title: "Gyors felülvizsgálat",

    q1_q: "Mely növényrész szívja fel a vizet és ásványi anyagokat a talajból?",
    q1_root: "Gyökér",
    q1_stem: "Szár",
    q1_leaf: "Levél",
    q1_flower: "Virág",

    q2_q: "Mely három dolog szükséges egy növénynek a fotoszintézishez?",
    q2_a: "Napfény, víz, CO₂",
    q2_b: "Napfény, oxigén, nitrogén",
    q2_c: "Víz, glükóz, oxigén",
    q2_d: "Talaj, levegő, napfény",

    q3_q: "Mely gázt bocsátanak ki a növények a fotoszintézis során?",
    q3_oxygen: "Oxigén",
    q3_co2: "Szén-dioxid",
    q3_nitrogen: "Nitrogén",
    q3_hydrogen: "Hidrogén",

    // Round 3 MCQ (Vízszállítás)
    r3_q: "Mit csinálnak a stómák a leveleken?",
    r3_q_photosynthesis: "Szabályozzák a gázcserét (CO₂ be, O₂ ki)",
    r3_q_transport: "Felfelé szállítanak vizet",
    r3_q_stomata: "Védelemben a lev felszínét",
    r3_q_root: "Felszívnak vizet a talajból",

    // Round 4 MCQ (Lev szerkezete)
    r4_q: "Mely organellumok a levelek sejtjeiben tartalmaznak klorofilt?",
    r4_chloroplasts: "Kloroplasztok",
    r4_mitochondria: "Mitokondriók",
    r4_vacuoles: "Vakuólumok",
    r4_membranes: "Sejtmembranak",
  },
  ro: {
    r1_title: "Părți ale plantei și funcții",
    r1_text: "Plantele au patru organe principale care funcționează împreună. Fiecare parte are o sarcină specială.",
    r1_fact1: "Rădăcinile absorb apă și minerale din sol",
    r1_fact2: "Tulpina susține planta și transportă apa în sus",
    r1_fact3: "Frunzele captează lumina soarelui pentru a face hrana (fotosinteza)",
    r1_fact4: "Florile sunt pentru reproducție (producerea semințelor)",

    r2_title: "Fotosinteza: Cum fac plantele hrana",
    r2_text: "Plantele folosesc lumina soarelui, apa și dioxid de carbon pentru a-și face propria hrană (glucoză) și a elibera oxigen.",
    r2_fact1: "Fotosinteza se întâmplă mai ales în frunze",
    r2_fact2: "Trei lucruri necesare: lumina soarelui ☀️, apă 💧, dioxid de carbon CO₂",
    r2_fact3: "Două lucruri produse: glucoză (zahăr) 🍬, oxigen O₂",
    r2_fact4: "Acest oxigen este ceea ce respirăm — plantele ne dau aer proaspăt!",

    r3_title: "Transport de apă: Călătoria",
    r3_text: "Apa se deplasează prin plantă de la rădăcină la frunză într-un proces numit transpiație.",
    r3_fact1: "Apa intră prin părul rădăcinii din sol",
    r3_fact2: "Tulpina acționează ca o autostradă, transportând apa în sus",
    r3_fact3: "Frunzele folosesc apa pentru fotosinteza și eliberează vaporii de apă în exces",
    r3_root: "Rădăcina absoarbe apa",
    r3_stem: "Tulpina transportă apa",
    r3_leaf: "Frunza folosește și transpiră",

    r4_title: "În interiorul unei frunze",
    r4_text: "Frunzele au o structură specială pentru fotosinteza. Stomatele sunt pori microscopici care controlează schimbul de gaze.",
    r4_fact1: "Stomatele sunt pori pe partea inferioară a frunzei pentru schimbul de gaze",
    r4_fact2: "Cloroplastele din celulele frunzei conțin clorofil (pigment verde)",
    r4_fact3: "CO₂ intră prin stomatele; O₂ iese prin stomatele",
    r4_fact4: "Celulele de pază deschid și închid stomatele pentru a conserva apa",

    r5_title: "Recapitulare rapidă",

    q1_q: "Care parte a plantei absoarbe apa și mineralele din sol?",
    q1_root: "Rădăcină",
    q1_stem: "Tulpină",
    q1_leaf: "Frunză",
    q1_flower: "Floare",

    q2_q: "Care trei lucruri sunt necesare unei plante pentru fotosinteza?",
    q2_a: "Lumina soarelui, apa, CO₂",
    q2_b: "Lumina soarelui, oxigen, azot",
    q2_c: "Apă, glucoză, oxigen",
    q2_d: "Sol, aer, lumina soarelui",

    q3_q: "Care gaz eliberează plantele în timpul fotosintezei?",
    q3_oxygen: "Oxigen",
    q3_co2: "Dioxid de carbon",
    q3_nitrogen: "Azot",
    q3_hydrogen: "Hidrogen",

    // Round 3 MCQ (Transport de apă)
    r3_q: "Ce fac stomatele pe frunze?",
    r3_q_photosynthesis: "Controlează schimbul de gaze (CO₂ in, O₂ out)",
    r3_q_transport: "Transportă apa în sus",
    r3_q_stomata: "Protejează suprafața frunzei",
    r3_q_root: "Absorb apă din sol",

    // Round 4 MCQ (Structura frunzei)
    r4_q: "Care organele din celulele frunzei conțin clorofil?",
    r4_chloroplasts: "Cloroplaste",
    r4_mitochondria: "Mitocondrii",
    r4_vacuoles: "Vacuole",
    r4_membranes: "Membrane celulare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Full plant with labeled parts (root, stem, leaf, flower) */
function SVG_R1(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="p1_sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
        <linearGradient id="p1_soil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6E50" /><stop offset="40%" stopColor="#6B4E30" /><stop offset="100%" stopColor="#4A3520" />
        </linearGradient>
        <linearGradient id="p1_root" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A07050" /><stop offset="100%" stopColor="#6B4530" />
        </linearGradient>
        <linearGradient id="p1_stem" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E7D32" /><stop offset="50%" stopColor="#4CAF50" /><stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
        <linearGradient id="p1_leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784" /><stop offset="50%" stopColor="#4CAF50" /><stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="p1_petal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" /><stop offset="50%" stopColor="#FFB74D" /><stop offset="100%" stopColor="#FF8A65" />
        </linearGradient>
        <radialGradient id="p1_sun" cx="80%" cy="15%">
          <stop offset="0%" stopColor="rgba(255,235,150,0.4)" /><stop offset="100%" stopColor="rgba(255,235,150,0)" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="240" height="105" fill="url(#p1_sky)" />
      <circle cx="200" cy="20" r="40" fill="url(#p1_sun)" />

      {/* Soil cross-section */}
      <rect x="0" y="105" width="240" height="55" fill="url(#p1_soil)" />
      {/* Soil layers */}
      <path d="M 0 115 Q 60 112 120 115 Q 180 118 240 115" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none" />
      <path d="M 0 130 Q 60 128 120 131 Q 180 134 240 130" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" fill="none" />
      {/* Soil particles */}
      <g fill="rgba(0,0,0,0.08)">
        <circle cx="40" cy="125" r="1.5" /><circle cx="80" cy="135" r="1" /><circle cx="150" cy="128" r="1.2" />
        <circle cx="190" cy="140" r="0.8" /><circle cx="100" cy="145" r="1" /><circle cx="170" cy="118" r="0.7" />
      </g>

      {/* ROOTS — branching system underground */}
      <g>
        {/* Main taproot */}
        <path d="M 120 105 Q 118 120 120 140 Q 121 148 120 155" stroke="url(#p1_root)" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Lateral roots */}
        <path d="M 120 115 Q 105 120 90 130 Q 80 136 72 140" stroke="url(#p1_root)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 120 115 Q 135 120 150 128 Q 160 134 168 138" stroke="url(#p1_root)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 120 125 Q 110 132 98 140" stroke="url(#p1_root)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 120 125 Q 130 130 142 138" stroke="url(#p1_root)" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Root hairs */}
        <g stroke="#A08060" strokeWidth="0.6" opacity="0.5" strokeLinecap="round" fill="none">
          <path d="M 85 133 L 80 136" /><path d="M 90 128 L 86 132" /><path d="M 95 136 L 90 140" />
          <path d="M 155 130 L 160 134" /><path d="M 148 135 L 152 139" /><path d="M 145 125 L 150 128" />
          <path d="M 118 138 L 114 142" /><path d="M 122 145 L 126 148" />
        </g>
        {/* Water absorption arrows (blue dots moving toward roots) */}
        <g fill="rgba(100,180,255,0.4)">
          <circle cx="68" cy="142" r="1.5" /><circle cx="75" cy="138" r="1.2" /><circle cx="82" cy="134" r="1" />
          <circle cx="172" cy="140" r="1.5" /><circle cx="165" cy="136" r="1.2" /><circle cx="158" cy="132" r="1" />
        </g>
      </g>

      {/* STEM — with xylem suggestion */}
      <path d="M 120 105 Q 119 85 120 55" stroke="url(#p1_stem)" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Internal transport lines */}
      <path d="M 118 105 Q 117 85 118 55" stroke="rgba(100,180,255,0.2)" strokeWidth="1.5" fill="none" />
      <path d="M 122 105 Q 121 85 122 55" stroke="rgba(100,180,255,0.2)" strokeWidth="1.5" fill="none" />
      {/* Stem highlight */}
      <path d="M 116 105 Q 115 85 116 55" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

      {/* LEAVES — with veins */}
      {/* Left leaf */}
      <g transform="translate(80, 70) rotate(-30)">
        <ellipse cx="0" cy="0" rx="15" ry="24" fill="url(#p1_leaf)" />
        {/* Midrib */}
        <path d="M 0,-22 L 0,22" stroke="rgba(30,80,30,0.3)" strokeWidth="0.8" fill="none" />
        {/* Veins */}
        <g stroke="rgba(30,80,30,0.2)" strokeWidth="0.5" fill="none">
          <path d="M 0,-14 Q 6,-10 12,-8" /><path d="M 0,-6 Q 6,-2 12,0" />
          <path d="M 0,4 Q 6,8 12,10" /><path d="M 0,12 Q 6,16 11,18" />
          <path d="M 0,-14 Q -6,-10 -12,-8" /><path d="M 0,-6 Q -6,-2 -12,0" />
          <path d="M 0,4 Q -6,8 -12,10" /><path d="M 0,12 Q -6,16 -11,18" />
        </g>
        {/* Highlight */}
        <ellipse cx="-3" cy="-5" rx="5" ry="10" fill="rgba(255,255,255,0.08)" />
      </g>

      {/* Right leaf */}
      <g transform="translate(160, 75) rotate(30)">
        <ellipse cx="0" cy="0" rx="15" ry="24" fill="url(#p1_leaf)" />
        <path d="M 0,-22 L 0,22" stroke="rgba(30,80,30,0.3)" strokeWidth="0.8" fill="none" />
        <g stroke="rgba(30,80,30,0.2)" strokeWidth="0.5" fill="none">
          <path d="M 0,-14 Q 6,-10 12,-8" /><path d="M 0,-6 Q 6,-2 12,0" />
          <path d="M 0,4 Q 6,8 12,10" /><path d="M 0,12 Q 6,16 11,18" />
          <path d="M 0,-14 Q -6,-10 -12,-8" /><path d="M 0,-6 Q -6,-2 -12,0" />
          <path d="M 0,4 Q -6,8 -12,10" /><path d="M 0,12 Q -6,16 -11,18" />
        </g>
        <ellipse cx="-3" cy="-5" rx="5" ry="10" fill="rgba(255,255,255,0.08)" />
      </g>

      {/* FLOWER — detailed petals */}
      <g transform="translate(120, 35)">
        {/* Petals - 5 overlapping */}
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="url(#p1_petal)" opacity="0.9" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="url(#p1_petal)" opacity="0.85" transform="rotate(72)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="url(#p1_petal)" opacity="0.8" transform="rotate(144)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="url(#p1_petal)" opacity="0.85" transform="rotate(216)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="url(#p1_petal)" opacity="0.9" transform="rotate(288)" />
        {/* Center - pistil */}
        <circle cx="0" cy="0" r="4" fill="#FFD700" />
        <circle cx="0" cy="0" r="2.5" fill="#FFA000" />
        {/* Pollen dots */}
        <g fill="#FFE082" opacity="0.7">
          <circle cx="-1" cy="-1" r="0.6" /><circle cx="1" cy="0.5" r="0.5" /><circle cx="0" cy="1.5" r="0.4" />
        </g>
      </g>

      {/* Color-coded section indicators */}
      <circle cx="120" cy="148" r="3" fill="rgba(139,90,60,0.4)" stroke="#A07050" strokeWidth="0.8" />
      <circle cx="120" cy="80" r="3" fill="rgba(74,175,74,0.4)" stroke="#4CAF50" strokeWidth="0.8" />
      <circle cx="80" cy="55" r="3" fill="rgba(107,203,119,0.4)" stroke="#6BCB77" strokeWidth="0.8" />
      <circle cx="120" cy="20" r="3" fill="rgba(255,183,77,0.4)" stroke="#FFB74D" strokeWidth="0.8" />
    </svg>
  );
}

/** Round 2 SVG: Photosynthesis diagram with arrows and inputs/outputs */
function SVG_R2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="p2_sun" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFF8E1" /><stop offset="40%" stopColor="#FFD54F" /><stop offset="100%" stopColor="#FF8F00" />
        </radialGradient>
        <radialGradient id="p2_sun_glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,235,100,0.4)" /><stop offset="100%" stopColor="rgba(255,235,100,0)" />
        </radialGradient>
        <linearGradient id="p2_leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784" /><stop offset="30%" stopColor="#4CAF50" /><stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="p2_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a1a" /><stop offset="100%" stopColor="#0a1a0a" />
        </linearGradient>
        <marker id="p2_arr_sun" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0.5, 6 3, 0 5.5" fill="#FFD54F" />
        </marker>
        <marker id="p2_arr_water" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0.5, 6 3, 0 5.5" fill="#64B5F6" />
        </marker>
        <marker id="p2_arr_co2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0.5, 6 3, 0 5.5" fill="#B0BEC5" />
        </marker>
        <marker id="p2_arr_o2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0.5, 6 3, 0 5.5" fill="#4FC3F7" />
        </marker>
        <marker id="p2_arr_glucose" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0.5, 6 3, 0 5.5" fill="#FFB74D" />
        </marker>
      </defs>

      <rect width="240" height="160" fill="url(#p2_bg)" />

      {/* SUN — top left with rays */}
      <circle cx="30" cy="30" r="30" fill="url(#p2_sun_glow)" />
      <circle cx="30" cy="30" r="14" fill="url(#p2_sun)" />
      {/* Rays */}
      <g stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="30" y1="8" x2="30" y2="2" /><line x1="30" y1="52" x2="30" y2="58" />
        <line x1="8" y1="30" x2="2" y2="30" /><line x1="52" y1="30" x2="58" y2="30" />
        <line x1="15" y1="15" x2="10" y2="10" /><line x1="45" y1="15" x2="50" y2="10" />
        <line x1="15" y1="45" x2="10" y2="50" /><line x1="45" y1="45" x2="50" y2="50" />
      </g>

      {/* CLOUD — water source top right */}
      <g transform="translate(200, 25)">
        <ellipse cx="0" cy="0" rx="22" ry="10" fill="rgba(100,180,255,0.25)" />
        <ellipse cx="8" cy="-5" rx="14" ry="8" fill="rgba(100,180,255,0.2)" />
        <ellipse cx="-8" cy="-3" rx="12" ry="7" fill="rgba(100,180,255,0.18)" />
        {/* Rain drops */}
        <g fill="rgba(100,180,255,0.4)">
          <path d="M -8,12 Q -7,10 -6,12 Q -7,14 -8,12 Z" />
          <path d="M 2,14 Q 3,12 4,14 Q 3,16 2,14 Z" />
          <path d="M 10,11 Q 11,9 12,11 Q 11,13 10,11 Z" />
        </g>
      </g>

      {/* CENTRAL LEAF — large with chloroplasts */}
      <g transform="translate(120, 82)">
        {/* Leaf shape */}
        <path d="M -45,0 Q -40,-28 0,-32 Q 40,-28 45,0 Q 40,28 0,32 Q -40,28 -45,0 Z" fill="url(#p2_leaf)" />
        {/* Midrib */}
        <path d="M -42,0 L 42,0" stroke="rgba(30,80,30,0.3)" strokeWidth="1" fill="none" />
        {/* Veins */}
        <g stroke="rgba(30,80,30,0.2)" strokeWidth="0.6" fill="none">
          <path d="M -30,0 Q -25,-10 -15,-16" /><path d="M -15,0 Q -10,-8 0,-12" />
          <path d="M 0,0 Q 10,-8 20,-12" /><path d="M 15,0 Q 25,-10 35,-14" />
          <path d="M -30,0 Q -25,10 -15,16" /><path d="M -15,0 Q -10,8 0,12" />
          <path d="M 0,0 Q 10,8 20,12" /><path d="M 15,0 Q 25,10 35,14" />
        </g>
        {/* Chloroplasts (green dots inside) */}
        <g fill="#2E7D32" opacity="0.4">
          <ellipse cx="-25" cy="-8" rx="3" ry="2" /><ellipse cx="-10" cy="-14" rx="3" ry="2" />
          <ellipse cx="8" cy="-10" rx="3" ry="2" /><ellipse cx="25" cy="-6" rx="3" ry="2" />
          <ellipse cx="-20" cy="8" rx="3" ry="2" /><ellipse cx="-5" cy="12" rx="3" ry="2" />
          <ellipse cx="15" cy="10" rx="3" ry="2" /><ellipse cx="30" cy="6" rx="3" ry="2" />
        </g>
        {/* Glucose symbol in center */}
        <circle cx="0" cy="0" r="8" fill="rgba(255,183,77,0.3)" stroke="#FFB74D" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#FFB74D" opacity="0.6" />
      </g>

      {/* SUNLIGHT ARROW — sun to leaf */}
      <path d="M 50 42 Q 70 55 80 65" stroke="#FFD54F" strokeWidth="2" fill="none" markerEnd="url(#p2_arr_sun)" strokeDasharray="4,2" />
      {/* Light ray particles */}
      <g fill="#FFD54F" opacity="0.4">
        <circle cx="55" cy="45" r="1.5" /><circle cx="65" cy="52" r="1.2" /><circle cx="75" cy="60" r="1" />
      </g>

      {/* WATER ARROW — cloud to leaf */}
      <path d="M 185 40 Q 165 55 155 65" stroke="#64B5F6" strokeWidth="2" fill="none" markerEnd="url(#p2_arr_water)" strokeDasharray="4,2" />
      <g fill="#64B5F6" opacity="0.4">
        <circle cx="180" cy="42" r="1.5" /><circle cx="170" cy="50" r="1.2" /><circle cx="160" cy="60" r="1" />
      </g>

      {/* CO2 ARROW — entering from below left */}
      <path d="M 30 130 Q 55 110 80 95" stroke="#B0BEC5" strokeWidth="2" fill="none" markerEnd="url(#p2_arr_co2)" strokeDasharray="4,2" />
      {/* CO2 molecule hint */}
      <g transform="translate(25, 135)" opacity="0.5">
        <circle cx="0" cy="0" r="3" fill="#90A4AE" /><circle cx="5" cy="-2" r="2" fill="#B0BEC5" /><circle cx="-5" cy="-2" r="2" fill="#B0BEC5" />
      </g>

      {/* O2 OUTPUT — exiting to top right */}
      <path d="M 155 65 Q 180 45 210 30" stroke="#4FC3F7" strokeWidth="2" fill="none" markerEnd="url(#p2_arr_o2)" />
      {/* O2 bubbles */}
      <g fill="rgba(79,195,247,0.3)">
        <circle cx="165" cy="58" r="2" /><circle cx="175" cy="50" r="2.5" /><circle cx="190" cy="40" r="2" />
      </g>

      {/* GLUCOSE OUTPUT — exiting downward */}
      <path d="M 120 115 Q 120 130 120 145" stroke="#FFB74D" strokeWidth="2" fill="none" markerEnd="url(#p2_arr_glucose)" />
      {/* Sugar particles */}
      <g fill="rgba(255,183,77,0.4)">
        <circle cx="118" cy="125" r="1.5" /><circle cx="122" cy="135" r="1.2" />
      </g>
    </svg>
  );
}

/** Round 3 SVG: Water transport (root → stem → leaf) with order sequence */
function SVG_R3(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_rootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5A3C" />
          <stop offset="100%" stopColor="#5D3A1F" />
        </linearGradient>
        <linearGradient id="r3_stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A8B4A" />
          <stop offset="100%" stopColor="#3A6B3A" />
        </linearGradient>
        <linearGradient id="r3_leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BCB77" />
          <stop offset="100%" stopColor="#4D9B5C" />
        </linearGradient>
        <marker id="arrowhead_r3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#4DB8FF" />
        </marker>
      </defs>

      {/* Soil */}
      <rect x="20" y="115" width="200" height="35" fill="#6B4423" rx="4" />

      {/* Root */}
      <circle cx="60" cy="120" r="12" fill="url(#r3_rootGrad)" />
      <text x="60" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">
        1
      </text>

      {/* Stem (vertical with arrows) */}
      <rect x="110" y="40" width="14" height="90" fill="url(#r3_stemGrad)" rx="4" />
      <text x="117" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">
        2
      </text>

      {/* Leaf */}
      <ellipse cx="170" cy="50" rx="22" ry="28" fill="url(#r3_leafGrad3)" />
      <text x="170" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">
        3
      </text>

      {/* Water arrows (root → stem → leaf) */}
      <path d="M 72 120 Q 90 100 106 90" stroke="#4DB8FF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead_r3)" />
      <path d="M 117 50 Q 140 50 148 50" stroke="#4DB8FF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead_r3)" />

      {/* Water droplets along the path */}
      <circle cx="80" cy="110" r="3" fill="#4DB8FF" opacity="0.6" />
      <circle cx="100" cy="85" r="3" fill="#4DB8FF" opacity="0.6" />

      {/* Transpiration vapor (from leaf) */}
      <circle cx="190" cy="35" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="200" cy="30" r="2" fill="#87CEEB" opacity="0.5" />
      <circle cx="210" cy="35" r="2" fill="#87CEEB" opacity="0.5" />

      {/* Labels with arrows pointing to parts */}
      <rect x="10" y="105" width="50" height="18" rx="9" fill="rgba(139,90,60,0.3)" stroke="rgba(139,90,60,0.6)" strokeWidth="1" />
      <text x="35" y="118" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
        {l.r3_root}
      </text>

      <rect x="95" y="120" width="50" height="18" rx="9" fill="rgba(74,139,74,0.3)" stroke="rgba(74,139,74,0.6)" strokeWidth="1" />
      <text x="120" y="133" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
        {l.r3_stem}
      </text>

      <rect x="150" y="10" width="50" height="18" rx="9" fill="rgba(107,203,119,0.3)" stroke="rgba(107,203,119,0.6)" strokeWidth="1" />
      <text x="175" y="23" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
        {l.r3_leaf}
      </text>
    </svg>
  );
}

/** Round 4 SVG: Leaf cross-section with stomata, chloroplasts, gas exchange */
function SVG_R4(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_leafGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BCB77" />
          <stop offset="100%" stopColor="#4D9B5C" />
        </linearGradient>
      </defs>

      {/* Leaf shape (side view) */}
      <ellipse cx="120" cy="80" rx="80" ry="35" fill="url(#r4_leafGrad4)" />

      {/* Top epidermis */}
      <path d="M 40 80 Q 40 60 120 55 Q 200 60 200 80" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />

      {/* Bottom epidermis (with stomata) */}
      <path d="M 40 80 Q 40 100 120 105 Q 200 100 200 80" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />

      {/* Chloroplasts (green dots inside) */}
      <circle cx="70" cy="75" r="4" fill="#3B9B3B" opacity="0.8" />
      <circle cx="100" cy="70" r="4" fill="#3B9B3B" opacity="0.8" />
      <circle cx="130" cy="75" r="4" fill="#3B9B3B" opacity="0.8" />
      <circle cx="160" cy="70" r="4" fill="#3B9B3B" opacity="0.8" />
      <circle cx="190" cy="75" r="4" fill="#3B9B3B" opacity="0.8" />

      {/* Stomata (pores on underside) — small oval pores */}
      <ellipse cx="65" cy="105" rx="6" ry="8" fill="rgba(0,0,0,0.4)" />
      <ellipse cx="120" cy="108" rx="6" ry="8" fill="rgba(0,0,0,0.4)" />
      <ellipse cx="175" cy="105" rx="6" ry="8" fill="rgba(0,0,0,0.4)" />

      {/* CO₂ arrows (entering through stomata) */}
      <defs>
        <marker id="arrowhead_co2_r4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#C8C8C8" />
        </marker>
      </defs>
      <path d="M 65 125 L 65 115" stroke="#C8C8C8" strokeWidth="2" markerEnd="url(#arrowhead_co2_r4)" />
      <path d="M 120 125 L 120 115" stroke="#C8C8C8" strokeWidth="2" markerEnd="url(#arrowhead_co2_r4)" />
      <path d="M 175 125 L 175 115" stroke="#C8C8C8" strokeWidth="2" markerEnd="url(#arrowhead_co2_r4)" />

      {/* O₂ arrows (exiting through stomata) */}
      <defs>
        <marker id="arrowhead_o2_r4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#87CEEB" />
        </marker>
      </defs>
      <path d="M 50 110 L 40 120" stroke="#87CEEB" strokeWidth="2" markerEnd="url(#arrowhead_o2_r4)" />
      <path d="M 135 110 L 140 120" stroke="#87CEEB" strokeWidth="2" markerEnd="url(#arrowhead_o2_r4)" />
      <path d="M 190 110 L 200 120" stroke="#87CEEB" strokeWidth="2" markerEnd="url(#arrowhead_o2_r4)" />

      {/* Labels */}
      <text x="20" y="70" fontSize="10" fontWeight="bold" fill="white">{l.r4_fact2}</text>
      <text x="20" y="115" fontSize="10" fontWeight="bold" fill="white">{l.r4_fact1}</text>
    </svg>
  );
}

/** Round 5 SVG: Plant parts matching chart (MCQ review) */
function SVG_R5(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_rootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5A3C" />
          <stop offset="100%" stopColor="#5D3A1F" />
        </linearGradient>
        <linearGradient id="r5_stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A8B4A" />
          <stop offset="100%" stopColor="#3A6B3A" />
        </linearGradient>
        <linearGradient id="r5_leafGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BCB77" />
          <stop offset="100%" stopColor="#4D9B5C" />
        </linearGradient>
      </defs>

      {/* Small plant illustration */}
      <circle cx="80" cy="120" r="8" fill="url(#r5_rootGrad)" />
      <path d="M 80 112 Q 78 90 80 50" stroke="url(#r5_stemGrad)" strokeWidth="6" fill="none" />
      <ellipse cx="55" cy="70" rx="12" ry="18" fill="url(#r5_leafGrad5)" />
      <ellipse cx="105" cy="65" rx="12" ry="18" fill="url(#r5_leafGrad5)" />
      <circle cx="80" cy="40" r="6" fill="#FFB366" />

      {/* Function boxes on right */}
      <rect x="140" y="50" width="90" height="16" rx="8" fill="rgba(139,90,60,0.3)" stroke="rgba(139,90,60,0.6)" strokeWidth="1" />
      <text x="185" y="61" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">
        Absorbs water
      </text>

      <rect x="140" y="75" width="90" height="16" rx="8" fill="rgba(74,139,74,0.3)" stroke="rgba(74,139,74,0.6)" strokeWidth="1" />
      <text x="185" y="86" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">
        Transports water
      </text>

      <rect x="140" y="100" width="90" height="16" rx="8" fill="rgba(107,203,119,0.3)" stroke="rgba(107,203,119,0.6)" strokeWidth="1" />
      <text x="185" y="111" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">
        Captures sunlight
      </text>

      <rect x="140" y="125" width="90" height="16" rx="8" fill="rgba(255,131,66,0.3)" stroke="rgba(255,131,66,0.6)" strokeWidth="1" />
      <text x="185" y="136" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">
        Reproduces
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      questions: [
        {
          question: "q1_q",
          choices: ["q1_root", "q1_stem", "q1_leaf", "q1_flower"],
          answer: "q1_root",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      questions: [
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_photosynthesis", "r3_q_transport", "r3_q_stomata", "r3_q_root"],
          answer: "r3_q_photosynthesis",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_chloroplasts", "r4_mitochondria", "r4_vacuoles", "r4_membranes"],
          answer: "r4_chloroplasts",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: SVG_R5,
      questions: [
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
        {
          question: "q3_q",
          choices: ["q3_oxygen", "q3_co2", "q3_nitrogen", "q3_hydrogen"],
          answer: "q3_oxygen",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function PlantExplorer({ color = "#6BCB77", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
