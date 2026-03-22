"use client";
// PhotosynthesisExplorer — Klasse 7: Photosynthesis & Cellular Respiration
// Teaching-first pattern: R1-R4 info rounds with MCQ, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Photosynthesis Overview
    r1_title: "Photosynthesis: Making Food from Light",
    r1_text: "Plants are nature's solar panels! They capture sunlight and convert it into food (glucose) using water and carbon dioxide.",
    r1_fact1: "Photosynthesis needs: sunlight, water (H₂O), and carbon dioxide (CO₂)",
    r1_fact2: "Products made: glucose (C₆H₁₂O₆) for energy and oxygen (O₂) we breathe",
    r1_fact3: "This happens primarily in chloroplasts inside leaf cells",
    r1_fact4: "Equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",

    // Round 2: Cellular Respiration
    r2_title: "Cellular Respiration: Breaking Down Food for Energy",
    r2_text: "Cells in ALL living things (plants and animals) break down glucose to release energy in the form of ATP.",
    r2_fact1: "Respiration happens in mitochondria (the powerhouse of the cell)",
    r2_fact2: "It requires: glucose (food) and oxygen (O₂)",
    r2_fact3: "Products: carbon dioxide (CO₂), water (H₂O), and ATP energy",
    r2_fact4: "Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy",

    // Round 3: Energy Transfer in Ecosystems
    r3_title: "Energy Flow: From Sun to Life",
    r3_text: "Energy from the sun flows through all living things. Plants capture it, herbivores eat plants, carnivores eat herbivores.",
    r3_fact1: "Producers (plants) capture solar energy through photosynthesis",
    r3_fact2: "Primary consumers (herbivores) eat plants and get energy",
    r3_fact3: "Secondary/tertiary consumers (carnivores) eat other animals",
    r3_fact4: "Energy transfers from one level to the next, but some is always lost as heat",

    // Round 4: Photosynthesis vs Respiration
    r4_title: "Comparing Photosynthesis & Respiration",
    r4_text: "These two processes are complementary: photosynthesis builds molecules, respiration breaks them down.",
    r4_fact1: "Photosynthesis: uses light energy, produces glucose (anabolic process)",
    r4_fact2: "Respiration: releases chemical energy, consumes glucose (catabolic process)",
    r4_fact3: "Location: photosynthesis in chloroplasts, respiration in mitochondria",
    r4_fact4: "One produces O₂ (photo), the other uses O₂ (respiration) — they cycle together!",

    // Round 5: Quiz
    r5_title: "Energy & Life Review",

    // Quiz Questions
    q1_q: "Where in the cell does photosynthesis primarily occur?",
    q1_chloroplast: "Chloroplast",
    q1_mitochondrion: "Mitochondrion",
    q1_nucleus: "Nucleus",
    q1_vacuole: "Vacuole",

    q2_q: "What is the main product of photosynthesis that animals need?",
    q2_oxygen: "Oxygen",
    q2_glucose: "Glucose",
    q2_carbon: "Carbon dioxide",
    q2_water: "Water",

    q3_q: "In cellular respiration, what organelle converts glucose into ATP?",
    q3_mitochondria: "Mitochondria",
    q3_chloroplast: "Chloroplast",
    q3_ribosome: "Ribosome",
    q3_lysosome: "Lysosome",

    q4_q: "Which statement correctly pairs inputs and outputs?",
    q4_a: "Photosynthesis: CO₂ + H₂O → glucose + O₂",
    q4_b: "Photosynthesis: O₂ + glucose → CO₂ + H₂O",
    q4_c: "Respiration: CO₂ + H₂O → glucose + O₂",
    q4_d: "Respiration: light → glucose + O₂",

    // Round-specific MCQ
    r3_q: "Where does most energy transfer occur in an ecosystem?",
    r3_q_plants: "Plants capturing sunlight and making glucose",
    r3_q_animals: "Animals eating each other",
    r3_q_decomposers: "Decomposers breaking down dead matter",
    r3_q_ground: "Energy stored in the ground",
  },
  de: {
    r1_title: "Photosynthese: Nahrung aus Licht machen",
    r1_text: "Pflanzen sind Sonnenkollektoren der Natur! Sie fangen Sonnenlicht ein und wandeln es in Nahrung (Glukose) um.",
    r1_fact1: "Photosynthese braucht: Sonnenlicht, Wasser (H₂O) und Kohlendioxid (CO₂)",
    r1_fact2: "Produkte: Glukose (C₆H₁₂O₆) für Energie und Sauerstoff (O₂) zum Atmen",
    r1_fact3: "Dies geschieht hauptsächlich in Chloroplasten in Blattzellen",
    r1_fact4: "Gleichung: 6CO₂ + 6H₂O + Lichtenergie → C₆H₁₂O₆ + 6O₂",

    r2_title: "Zellatmung: Nahrung für Energie aufbrechen",
    r2_text: "Zellen in ALLEN Lebewesen (Pflanzen und Tiere) bauen Glukose ab, um Energie in Form von ATP freizusetzen.",
    r2_fact1: "Respiration findet in Mitochondrien statt (das Kraftwerk der Zelle)",
    r2_fact2: "Sie benötigt: Glukose (Nahrung) und Sauerstoff (O₂)",
    r2_fact3: "Produkte: Kohlendioxid (CO₂), Wasser (H₂O) und ATP-Energie",
    r2_fact4: "Gleichung: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP-Energie",

    r3_title: "Energiefluss: Von der Sonne zum Leben",
    r3_text: "Energie von der Sonne fließt durch alle Lebewesen. Pflanzen fangen sie ein, Herbivoren essen Pflanzen, Carnivoren essen andere Tiere.",
    r3_fact1: "Produzenten (Pflanzen) fangen Solarenergie durch Photosynthese ein",
    r3_fact2: "Primärkonsumenten (Herbivoren) essen Pflanzen und bekommen Energie",
    r3_fact3: "Sekundär-/Tertiärkonsumenten (Carnivoren) essen andere Tiere",
    r3_fact4: "Energie wird von einer Ebene zur nächsten übertragen, aber etwas wird immer als Wärme verloren",

    r4_title: "Photosynthese vs. Respiration vergleichen",
    r4_text: "Diese zwei Prozesse sind komplementär: Photosynthese baut Moleküle auf, Respiration baut sie ab.",
    r4_fact1: "Photosynthese: nutzt Lichtenergie, produziert Glukose (anaboler Prozess)",
    r4_fact2: "Respiration: gibt chemische Energie frei, verbraucht Glukose (kataboler Prozess)",
    r4_fact3: "Ort: Photosynthese in Chloroplasten, Respiration in Mitochondrien",
    r4_fact4: "Eine produziert O₂ (Photo), die andere nutzt O₂ (Respiration) — sie zyklieren zusammen!",

    r5_title: "Energie & Leben Wiederholung",

    q1_q: "Wo in der Zelle findet Photosynthese hauptsächlich statt?",
    q1_chloroplast: "Chloroplast",
    q1_mitochondrion: "Mitochondrium",
    q1_nucleus: "Zellkern",
    q1_vacuole: "Vakuole",

    q2_q: "Welches ist das Hauptprodukt der Photosynthese, das Tiere brauchen?",
    q2_oxygen: "Sauerstoff",
    q2_glucose: "Glukose",
    q2_carbon: "Kohlendioxid",
    q2_water: "Wasser",

    q3_q: "In der Zellatmung, welches Organell wandelt Glukose in ATP um?",
    q3_mitochondria: "Mitochondrien",
    q3_chloroplast: "Chloroplast",
    q3_ribosome: "Ribosom",
    q3_lysosome: "Lysosom",

    q4_q: "Welche Aussage paart Eingaben und Ausgaben korrekt?",
    q4_a: "Photosynthese: CO₂ + H₂O → Glukose + O₂",
    q4_b: "Photosynthese: O₂ + Glukose → CO₂ + H₂O",
    q4_c: "Respiration: CO₂ + H₂O → Glukose + O₂",
    q4_d: "Respiration: Licht → Glukose + O₂",

    r3_q: "Wo findet die meiste Energieübertragung in einem Ökosystem statt?",
    r3_q_plants: "Pflanzen fangen Sonnenlicht ein und machen Glukose",
    r3_q_animals: "Tiere essen sich gegenseitig",
    r3_q_decomposers: "Zersetzer bauen tote Materie ab",
    r3_q_ground: "Energie im Boden gespeichert",
  },
  hu: {
    r1_title: "Fotoszintézis: Táplálék a fényből",
    r1_text: "A növények a természet napelempanelei! Megkötik a napfényt és átalakítják étellé (glükóz) víz és szén-dioxid segítségével.",
    r1_fact1: "Fotoszintézishez szükséges: napfény, víz (H₂O) és szén-dioxid (CO₂)",
    r1_fact2: "Termékek: glükóz (C₆H₁₂O₆) az energiához és oxigén (O₂) amit lélegzünk",
    r1_fact3: "Ez főleg a chloroplasztokban történik a levelek sejtjeiben",
    r1_fact4: "Egyenlet: 6CO₂ + 6H₂O + fényenergia → C₆H₁₂O₆ + 6O₂",

    r2_title: "Sejtlégzés: Tápanyag lebontása energiához",
    r2_text: "Az ÖSSZES élő szervezet sejtei (növények és állatok) lebontanak glükózt ATP formájában felszabadítva az energiát.",
    r2_fact1: "A légzés a mitokondriumban történik (a sejt erőműve)",
    r2_fact2: "Szükséges: glükóz (táplálék) és oxigén (O₂)",
    r2_fact3: "Termékek: szén-dioxid (CO₂), víz (H₂O) és ATP-energia",
    r2_fact4: "Egyenlet: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP-energia",

    r3_title: "Energiaáramlás: A Naptól az életre",
    r3_text: "A Nap energiája minden élőlényen keresztül áramlik. A növények megkötik, a növényevők isznak a növényekből, a ragadozók más állatokat esznek.",
    r3_fact1: "Termelők (növények) megkötik a napenergiát fotoszintézissel",
    r3_fact2: "Elsődleges fogyasztók (növényevők) isznak növényeket és energiát kapnak",
    r3_fact3: "Másodlagos/harmadlagos fogyasztók (ragadozók) más állatokat esznek",
    r3_fact4: "Az energia az egyik szintről a másikra kerül, de egy része mindig hőként veszik el",

    r4_title: "Fotoszintézis vs. Sejtlégzés összehasonlítása",
    r4_text: "Ez a két folyamat kiegészíti egymást: a fotoszintézis felépít molekulákat, a légzés lebontja azokat.",
    r4_fact1: "Fotoszintézis: fényenergiát használ, glükózt termel (anabolikus folyamat)",
    r4_fact2: "Sejtlégzés: kémiai energiát szabadít fel, glükózt fogyaszt (katabolikus folyamat)",
    r4_fact3: "Helye: fotoszintézis chloroplasztban, légzés mitokondriumban",
    r4_fact4: "Az egyik O₂-t termel (foto), a másik O₂-t használ (légzés) — együtt ciklizálnak!",

    r5_title: "Energia & Élet Áttekintés",

    q1_q: "Hol történik a fotoszintézis elsősorban a sejtben?",
    q1_chloroplast: "Kloroplaszt",
    q1_mitochondrion: "Mitokondrium",
    q1_nucleus: "Sejt mag",
    q1_vacuole: "Vakuólum",

    q2_q: "Mi a fotoszintézis fő terméke, amire az állatok szükségük van?",
    q2_oxygen: "Oxigén",
    q2_glucose: "Glükóz",
    q2_carbon: "Szén-dioxid",
    q2_water: "Víz",

    q3_q: "A sejtlégzésben mely organellum alakítja át a glükózt ATP-vé?",
    q3_mitochondria: "Mitokondrium",
    q3_chloroplast: "Kloroplaszt",
    q3_ribosome: "Riboszóma",
    q3_lysosome: "Lizoszóma",

    q4_q: "Mely kijelentés párosítja helyesen a bemeneteket és kimeneteket?",
    q4_a: "Fotoszintézis: CO₂ + H₂O → glükóz + O₂",
    q4_b: "Fotoszintézis: O₂ + glükóz → CO₂ + H₂O",
    q4_c: "Sejtlégzés: CO₂ + H₂O → glükóz + O₂",
    q4_d: "Sejtlégzés: fény → glükóz + O₂",

    r3_q: "Hol történik a legtöbb energiaátvitel az ökoszisztémában?",
    r3_q_plants: "A növények megkötik a napfényt és glükózt készítsenek",
    r3_q_animals: "Az állatok megeszik egymást",
    r3_q_decomposers: "A lebomlók felbomlanak az elhalt anyagot",
    r3_q_ground: "Energia a talajban tárolt",
  },
  ro: {
    r1_title: "Fotosinteza: Făcând Mâncare din Lumină",
    r1_text: "Plantele sunt panourile solare ale naturii! Captează lumina soarelui și o transformă în mâncare (glucoză) folosind apă și dioxid de carbon.",
    r1_fact1: "Fotosinteza necesită: lumina soarelui, apă (H₂O) și dioxid de carbon (CO₂)",
    r1_fact2: "Produse: glucoză (C₆H₁₂O₆) pentru energie și oxigen (O₂) pe care respirăm",
    r1_fact3: "Aceasta se întâmplă în principal în cloroplaste în celulele frunzelor",
    r1_fact4: "Ecuație: 6CO₂ + 6H₂O + energie luminoasă → C₆H₁₂O₆ + 6O₂",

    r2_title: "Respirația Celulară: Descompunerea Mâncării pentru Energie",
    r2_text: "Celulele din TOȚI organismele vii (plante și animale) descompun glucoza pentru a elibera energie sub formă de ATP.",
    r2_fact1: "Respirația se întâmplă în mitocondrii (centrala electrică a celulei)",
    r2_fact2: "Necesită: glucoză (mâncare) și oxigen (O₂)",
    r2_fact3: "Produse: dioxid de carbon (CO₂), apă (H₂O) și energie ATP",
    r2_fact4: "Ecuație: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie ATP",

    r3_title: "Fluxul de Energie: De la Soare la Viață",
    r3_text: "Energia de la soare curgă prin toate ființele vii. Plantele o captează, erbivore mănâncă plante, carnivore mănâncă alte animale.",
    r3_fact1: "Producători (plante) captează energia solară prin fotosinteză",
    r3_fact2: "Consumatori primari (erbivore) mănâncă plante și obțin energie",
    r3_fact3: "Consumatori secundari/terțiari (carnivore) mănâncă alte animale",
    r3_fact4: "Energia se transferă de la un nivel la altul, dar o parte se pierde întotdeauna sub formă de căldură",

    r4_title: "Comparând Fotosinteza și Respirația",
    r4_text: "Aceste două procese sunt complementare: fotosinteza construiește molecule, respirația le descompune.",
    r4_fact1: "Fotosinteza: utilizează energia luminoasă, produce glucoză (proces anabolic)",
    r4_fact2: "Respirația: eliberează energie chimică, consumă glucoză (proces catabolic)",
    r4_fact3: "Locație: fotosinteza în cloroplaste, respirație în mitocondrii",
    r4_fact4: "Una produce O₂ (foto), cealaltă folosește O₂ (respirație) — ciclează împreună!",

    r5_title: "Energia & Viață Recapitulare",

    q1_q: "Unde în celulă se întâmplă în principal fotosinteza?",
    q1_chloroplast: "Cloroplast",
    q1_mitochondrion: "Mitocondrion",
    q1_nucleus: "Nucleu",
    q1_vacuole: "Vacuolă",

    q2_q: "Care este produsul principal al fotosintezei de care au nevoie animalele?",
    q2_oxygen: "Oxigen",
    q2_glucose: "Glucoză",
    q2_carbon: "Dioxid de carbon",
    q2_water: "Apă",

    q3_q: "În respirația celulară, care organelă convertește glucoza în ATP?",
    q3_mitochondria: "Mitocondrii",
    q3_chloroplast: "Cloroplast",
    q3_ribosome: "Ribozom",
    q3_lysosome: "Lizozom",

    q4_q: "Care afirmație asociază corect intrările și ieșirile?",
    q4_a: "Fotosinteza: CO₂ + H₂O → glucoză + O₂",
    q4_b: "Fotosinteza: O₂ + glucoză → CO₂ + H₂O",
    q4_c: "Respirația: CO₂ + H₂O → glucoză + O₂",
    q4_d: "Respirația: lumină → glucoză + O₂",

    r3_q: "Unde se transferă cea mai mare parte din energie într-un ecosistem?",
    r3_q_plants: "Plante care captează lumina soarelui și fac glucoză",
    r3_q_animals: "Animalele care se mănâncă reciproc",
    r3_q_decomposers: "Descompozitori care descompun materia moartă",
    r3_q_ground: "Energia stocată în sol",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (simple colored shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="ps1_sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#ps1_sky)" />

      {/* Sun */}
      <circle cx="200" cy="30" r="25" fill="#FFD700" opacity="0.8" />

      {/* Cloud showing CO₂ in */}
      <g fill="#E0E0E0" opacity="0.7">
        <ellipse cx="40" cy="40" rx="20" ry="12" />
        <ellipse cx="55" cy="35" rx="18" ry="10" />
      </g>

      {/* Plant with leaf */}
      <g>
        {/* Stem */}
        <rect x="115" y="80" width="10" height="70" fill="#4CAF50" />
        {/* Leaf */}
        <ellipse cx="140" cy="90" rx="25" ry="35" fill="#81C784" transform="rotate(-30 140 90)" />
        {/* Root */}
        <path d="M 120 150 Q 110 160 105 165" stroke="#A07050" strokeWidth="4" fill="none" />
        <path d="M 120 150 Q 130 160 135 165" stroke="#A07050" strokeWidth="4" fill="none" />
      </g>

      {/* Water droplets */}
      <g fill="#42A5F5" opacity="0.6">
        <circle cx="100" cy="140" r="4" />
        <circle cx="140" cy="155" r="4" />
      </g>

      {/* Glucose/energy inside plant (yellow glow) */}
      <circle cx="120" cy="100" r="15" fill="rgba(255, 235, 100, 0.4)" />

      {/* Oxygen out (blue arrows up) */}
      <path d="M 150 70 L 150 40" stroke="#42A5F5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 160 75 L 160 35" stroke="#42A5F5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#42A5F5" />
        </marker>
      </defs>
    </svg>
  );
}

function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="ps2_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" /><stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#ps2_bg)" />

      {/* Mitochondrion (large rounded rectangle) */}
      <rect x="50" y="50" width="140" height="80" rx="20" fill="none" stroke="#FF6B6B" strokeWidth="3" />
      <path d="M 70 90 Q 170 90 190 90" stroke="#FFB3B3" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Glucose entering (left) */}
      <circle cx="30" cy="90" r="12" fill="#FFD700" />
      <path d="M 42 90 L 50 90" stroke="#FFD700" strokeWidth="2" />

      {/* Oxygen entering (right) */}
      <circle cx="210" cy="70" r="8" fill="#42A5F5" />
      <circle cx="225" cy="85" r="8" fill="#42A5F5" />
      <path d="M 205 70 L 120 70" stroke="#42A5F5" strokeWidth="2" />

      {/* CO₂ exiting (up) */}
      <circle cx="100" cy="30" r="10" fill="#C0C0C0" />
      <circle cx="140" cy="35" r="10" fill="#C0C0C0" />
      <path d="M 100 42 L 100 50" stroke="#C0C0C0" strokeWidth="2" />
      <path d="M 140 47 L 140 50" stroke="#C0C0C0" strokeWidth="2" />

      {/* Water exiting (down) */}
      <circle cx="120" cy="145" r="8" fill="#87CEEB" />
      <path d="M 120 137 L 120 145" stroke="#87CEEB" strokeWidth="2" />

      {/* ATP energy burst (yellow radial) */}
      <circle cx="120" cy="90" r="20" fill="rgba(255, 235, 100, 0.35)" />
    </svg>
  );
}

function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="ps3_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#90EE90" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#ps3_bg)" />

      {/* Sun */}
      <circle cx="200" cy="20" r="15" fill="#FFD700" />

      {/* Plant (producer) */}
      <g>
        <rect x="35" y="70" width="8" height="60" fill="#4CAF50" />
        <ellipse cx="50" cy="75" rx="18" ry="25" fill="#81C784" />
      </g>

      {/* Herbivore (simple circle) */}
      <circle cx="120" cy="90" r="20" fill="#8B4513" />

      {/* Carnivore (larger) */}
      <circle cx="190" cy="85" r="25" fill="#D2691E" />

      {/* Energy arrows flowing left to right */}
      <path d="M 60 85 L 100 85" stroke="#FFD700" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead2)" />
      <path d="M 145 85 L 165 85" stroke="#FFD700" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead2)" />

      {/* Some energy lost as heat (wavy lines going up) */}
      <path d="M 120 70 Q 125 60 120 50" stroke="#FF6B6B" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 190 60 Q 195 45 190 30" stroke="#FF6B6B" strokeWidth="1.5" fill="none" opacity="0.6" />

      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#FFD700" />
        </marker>
      </defs>
    </svg>
  );
}

function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="ps4_compare" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A5D6A7" /><stop offset="100%" stopColor="#FFCCBC" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#ps4_compare)" />

      {/* Left side: Photosynthesis */}
      <g>
        {/* Chloroplast icon */}
        <ellipse cx="60" cy="50" rx="18" ry="22" fill="none" stroke="#4CAF50" strokeWidth="2" />
        <circle cx="60" cy="50" r="8" fill="#81C784" opacity="0.5" />

        {/* Inputs on left */}
        <circle cx="20" cy="35" r="6" fill="#FFD700" /> {/* light */}
        <circle cx="20" cy="65" r="6" fill="#87CEEB" /> {/* water */}
        <circle cx="20" cy="95" r="6" fill="#C0C0C0" /> {/* CO2 */}

        {/* Output on right */}
        <circle cx="100" cy="50" r="6" fill="#42A5F5" /> {/* O2 */}

        {/* Arrows */}
        <path d="M 28 35 L 45 50" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 28 65 L 45 55" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 28 95 L 45 60" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 75 50 L 94 50" stroke="#666" strokeWidth="1.5" fill="none" />
      </g>

      {/* Right side: Respiration */}
      <g>
        {/* Mitochondrion icon */}
        <rect x="155" y="35" width="40" height="30" rx="8" fill="none" stroke="#D32F2F" strokeWidth="2" />
        <path d="M 165 50 L 185 50" stroke="#FFAB91" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Inputs on left */}
        <circle cx="130" cy="40" r="6" fill="#FFD700" /> {/* glucose */}
        <circle cx="130" cy="75" r="6" fill="#42A5F5" /> {/* O2 */}

        {/* Outputs on right */}
        <circle cx="210" cy="40" r="6" fill="#C0C0C0" /> {/* CO2 */}
        <circle cx="210" cy="60" r="6" fill="#87CEEB" /> {/* water */}

        {/* Arrows */}
        <path d="M 138 40 L 155 45" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 138 75 L 155 60" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 195 40 L 204 40" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M 195 60 L 204 60" stroke="#666" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}

function SVG_R5(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="ps5_light" cx="30%" cy="30%">
          <stop offset="0%" stopColor="rgba(255, 235, 100, 0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="240" height="160" fill="#F0F0F0" />

      {/* Title/banner area with review concept */}
      <rect width="240" height="40" fill="#4CAF50" opacity="0.2" />

      {/* Cycle visualization: circular arrows showing photo/respiration cycle */}
      <circle cx="120" cy="90" r="45" fill="none" stroke="#81C784" strokeWidth="2" opacity="0.5" />

      {/* Top: Photosynthesis (sun symbol) */}
      <circle cx="120" cy="35" r="10" fill="#FFD700" />

      {/* Right: Glucose */}
      <circle cx="165" cy="90" r="10" fill="#FFEB99" />

      {/* Bottom: O2 out / CO2 in */}
      <circle cx="120" cy="145" r="8" fill="#42A5F5" />
      <circle cx="80" cy="145" r="8" fill="#C0C0C0" />

      {/* Left: Mitochondrion doing respiration */}
      <rect x="35" y="75" width="30" height="30" rx="6" fill="#FFB3B3" opacity="0.6" stroke="#D32F2F" strokeWidth="1.5" />

      {/* Arrows connecting them (clockwise cycle) */}
      <path d="M 120 45 Q 160 70 165 80" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead3)" />
      <path d="M 150 105 Q 120 150 90 150" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead3)" />
      <path d="M 50 120 Q 40 100 45 85" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead3)" />
      <path d="M 65 75 Q 95 50 110 45" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead3)" />

      <defs>
        <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#666" />
        </marker>
      </defs>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFINITION
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
          choices: ["q1_chloroplast", "q1_mitochondrion", "q1_nucleus", "q1_vacuole"],
          answer: "q1_chloroplast",
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
          choices: ["q2_oxygen", "q2_glucose", "q2_carbon", "q2_water"],
          answer: "q2_oxygen",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_plants", "r3_q_animals", "r3_q_decomposers", "r3_q_ground"],
          answer: "r3_q_plants",
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
          question: "q3_q",
          choices: ["q3_mitochondria", "q3_chloroplast", "q3_ribosome", "q3_lysosome"],
          answer: "q3_mitochondria",
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
          question: "q4_q",
          choices: ["q4_a", "q4_b", "q4_c", "q4_d"],
          answer: "q4_a",
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

export default function PhotosynthesisExplorer({ color = "#81C784", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
