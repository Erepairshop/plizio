"use client";
// ForestExplorer — Grade 6 Biology: Forest Ecosystem (Waldökosystem)
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Forest layers, food chains, decomposition, ecosystem functions

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Forest Layers
    r1_title: "Forest Layers",
    r1_text: "A forest has several layers stacked on top of each other, like a cake. Each layer has different plants and animals.",
    r1_fact1: "Canopy: The tallest trees that catch sunlight ☀️",
    r1_fact2: "Understory: Smaller trees and shrubs in the shade 🌳",
    r1_fact3: "Herb Layer: Low plants, ferns, and flowers 🌿",
    r1_fact4: "Forest Floor: Moss, mushrooms, and dead leaves 🍄",

    // Round 2: Food Chains
    r2_title: "Food Chains in the Forest",
    r2_text: "Energy flows through the forest in a food chain. Plants make food from sunlight, animals eat plants, and bigger animals eat smaller animals.",
    r2_fact1: "Producers: Plants and trees make food from sunlight (plants don't eat anything)",
    r2_fact2: "Primary Consumers: Herbivores eat plants (deer, rabbits, insects)",
    r2_fact3: "Secondary Consumers: Carnivores eat herbivores (birds, foxes)",
    r2_fact4: "Decomposers: Break down dead things (bacteria, fungi) 🍄",

    // Round 3: Decomposition
    r3_title: "Decomposition & Nutrient Cycle",
    r3_text: "When plants and animals die, decomposers break them down. The nutrients return to the soil, and new plants grow.",
    r3_fact1: "Fungi and bacteria break down dead leaves, wood, and animals 🍄",
    r3_fact2: "Earthworms mix the soil and help decompose organic matter 🪱",
    r3_fact3: "Decomposition releases nutrients back into the soil",
    r3_fact4: "Plants absorb these nutrients to grow, completing the nutrient cycle",
    r3_q: "What happens to nutrients when decomposers break down dead plants?",
    r3_nutrients: "Nutrients return to the soil",
    r3_disappear: "Nutrients disappear completely",
    r3_pollute: "Nutrients pollute the water",
    r3_escape: "Nutrients escape into the air",

    // Round 4: Forest as Ecosystem
    r4_title: "Forest Ecosystem Functions",
    r4_text: "Forests are vital ecosystems. They produce oxygen, absorb carbon dioxide, store water, and provide homes for millions of organisms.",
    r4_fact1: "Forests produce oxygen that we breathe 💨",
    r4_fact2: "Forests absorb carbon dioxide from the atmosphere (CO₂ ↓)",
    r4_fact3: "Roots and soil store water, preventing floods 💧",
    r4_fact4: "Forests are home to biodiversity: thousands of species live there 🦌🐿️🦅",
    r4_q: "Which gas do forests remove from the atmosphere?",
    r4_co2: "Carbon dioxide (CO₂)",
    r4_o2: "Oxygen (O₂)",
    r4_n2: "Nitrogen (N₂)",
    r4_ch4: "Methane (CH₄)",

    // Round 5: Quiz
    r5_title: "Forest Quiz",

    q1_q: "What is the topmost layer of a forest called?",
    q1_canopy: "Canopy",
    q1_understory: "Understory",
    q1_herbLayer: "Herb layer",
    q1_floor: "Forest floor",

    q2_q: "Which organisms break down dead wood and leaves?",
    q2_decomposers: "Decomposers (fungi, bacteria)",
    q2_herbivores: "Herbivores",
    q2_producers: "Producers",
    q2_carnivores: "Carnivores",

    q3_q: "What does a forest absorb from the air to help fight climate change?",
    q3_co2: "Carbon dioxide (CO₂)",
    q3_oxygen: "Oxygen (O₂)",
    q3_nitrogen: "Nitrogen (N₂)",
    q3_water: "Water vapor",
  },
  de: {
    r1_title: "Waldschichten",
    r1_text: "Ein Wald hat mehrere Schichten übereinander, wie ein Kuchen. Jede Schicht hat unterschiedliche Pflanzen und Tiere.",
    r1_fact1: "Kronenschicht: Die höchsten Bäume, die Sonnenlicht einfangen ☀️",
    r1_fact2: "Strauchschicht: Kleinere Bäume und Sträucher im Schatten 🌳",
    r1_fact3: "Krautschicht: Niedrige Pflanzen, Farne und Blumen 🌿",
    r1_fact4: "Waldboden: Moos, Pilze und abgestorbene Blätter 🍄",

    r2_title: "Nahrungsketten im Wald",
    r2_text: "Energie fließt durch den Wald in einer Nahrungskette. Pflanzen machen Nahrung aus Sonnenlicht, Tiere essen Pflanzen, und größere Tiere essen kleinere Tiere.",
    r2_fact1: "Produzenten: Pflanzen und Bäume machen Nahrung aus Sonnenlicht (Pflanzen essen nichts)",
    r2_fact2: "Primäre Konsumenten: Herbivoren essen Pflanzen (Hirsche, Kaninchen, Insekten)",
    r2_fact3: "Sekundäre Konsumenten: Fleischfresser essen Pflanzenfresser (Vögel, Füchse)",
    r2_fact4: "Zersetzer: Bauen tote Dinge ab (Bakterien, Pilze) 🍄",

    r3_title: "Zersetzung & Nährstoffkreislauf",
    r3_text: "Wenn Pflanzen und Tiere sterben, bauen Zersetzer sie ab. Die Nährstoffe kehren in den Boden zurück, und neue Pflanzen wachsen.",
    r3_fact1: "Pilze und Bakterien bauen tote Blätter, Holz und Tiere ab 🍄",
    r3_fact2: "Regenwürmer lockern den Boden auf und helfen beim Abbau organischer Stoffe 🪱",
    r3_fact3: "Zersetzung setzt Nährstoffe in den Boden frei",
    r3_fact4: "Pflanzen nehmen diese Nährstoffe auf, um zu wachsen, was den Nährstoffkreislauf abschließt",
    r3_q: "Was passiert mit Nährstoffen, wenn Zersetzer tote Pflanzen abbauen?",
    r3_nutrients: "Nährstoffe kehren in den Boden zurück",
    r3_disappear: "Nährstoffe verschwinden vollständig",
    r3_pollute: "Nährstoffe verschmutzen das Wasser",
    r3_escape: "Nährstoffe entweichen in die Luft",

    r4_title: "Waldökosystem-Funktionen",
    r4_text: "Wälder sind lebenswichtige Ökosysteme. Sie produzieren Sauerstoff, absorbieren Kohlendioxid, speichern Wasser und bieten Lebensraum für Millionen von Organismen.",
    r4_fact1: "Wälder produzieren Sauerstoff, den wir atmen 💨",
    r4_fact2: "Wälder absorbieren Kohlendioxid aus der Atmosphäre (CO₂ ↓)",
    r4_fact3: "Wurzeln und Boden speichern Wasser und verhindern Überschwemmungen 💧",
    r4_fact4: "Wälder sind Lebensraum für Millionen: Tausende von Arten leben dort 🦌🐿️🦅",
    r4_q: "Welches Gas entfernen Wälder aus der Atmosphäre?",
    r4_co2: "Kohlendioxid (CO₂)",
    r4_o2: "Sauerstoff (O₂)",
    r4_n2: "Stickstoff (N₂)",
    r4_ch4: "Methan (CH₄)",

    r5_title: "Waldquiz",

    q1_q: "Wie heißt die oberste Schicht eines Waldes?",
    q1_canopy: "Kronenschicht",
    q1_understory: "Strauchschicht",
    q1_herbLayer: "Krautschicht",
    q1_floor: "Waldboden",

    q2_q: "Welche Organismen bauen totes Holz und Blätter ab?",
    q2_decomposers: "Zersetzer (Pilze, Bakterien)",
    q2_herbivores: "Pflanzenfresser",
    q2_producers: "Produzenten",
    q2_carnivores: "Fleischfresser",

    q3_q: "Was absorbiert ein Wald aus der Luft, um den Klimawandel zu bekämpfen?",
    q3_co2: "Kohlendioxid (CO₂)",
    q3_oxygen: "Sauerstoff (O₂)",
    q3_nitrogen: "Stickstoff (N₂)",
    q3_water: "Wasserdampf",
  },
  hu: {
    r1_title: "Az erdő rétegei",
    r1_text: "Az erdőnek több rétege van egymás felett, mint egy torta. Mindegyik rétegnek más-más növényi és állati élete van.",
    r1_fact1: "Lombkoronaszint: A legmagasabb fák, amelyek napfényt fognak ☀️",
    r1_fact2: "Cserjeszint: Kisebb fák és cserjék az árnyékban 🌳",
    r1_fact3: "Fűszint: Alacsony növények, páfrányfélék és virágok 🌿",
    r1_fact4: "Erdőtalaj: Moha, gombák és elhalt levelek 🍄",

    r2_title: "Táplálékláncok az erdőben",
    r2_text: "Az energia az erdőben egy táplálékláncban áramlik. A növények napfényből készítik az ételt, az állatok a növényeket eszik, és a nagyobb állatok a kisebbeket.",
    r2_fact1: "Termelők: Növények és fák napfényből készítik az ételt (a növények nem esznek)",
    r2_fact2: "Elsődleges fogyasztók: Herbivórák esznek növényt (szarvas, nyúl, rovarok)",
    r2_fact3: "Másodlagos fogyasztók: Carnivórák esznek herbivórákat (madarak, rókák)",
    r2_fact4: "Lebontók: Elpusztulhat dolgok lebontása (baktériumok, gombák) 🍄",

    r3_title: "Lebontás és tápanyagkör",
    r3_text: "Amikor növények és állatok meghalnak, a lebontók lebontják őket. A tápanyagok visszatérnek a talajba, és új növények nőnek.",
    r3_fact1: "Gombák és baktériumok lebontják az elhalt leveleket, a fát és az állatokat 🍄",
    r3_fact2: "A földigiliszták fellazítják a talajt és segítik az szerves anyag lebontását 🪱",
    r3_fact3: "A lebontás felszabadítja a tápanyagokat a talajba",
    r3_fact4: "A növények felszívják ezeket a tápanyagokat a növekedéshez, ami befejezi a tápanyagkört",
    r3_q: "Mi történik a tápanyagokkal, amikor a lebontók elpusztult növényeket lebontanak?",
    r3_nutrients: "A tápanyagok visszatérnek a talajba",
    r3_disappear: "A tápanyagok teljesen eltűnnek",
    r3_pollute: "A tápanyagok szennyezik a vizet",
    r3_escape: "A tápanyagok szöknek a levegőbe",

    r4_title: "Erdőökoszisztéma funkciók",
    r4_text: "Az erdők létfontosságú ökoszisztémák. Oxigént termelnek, felszívják a szén-dioxidot, vizet tárolnak, és otthont nyújtanak millió organizmusnak.",
    r4_fact1: "Az erdők oxigént termelnek, amit lélegzünk 💨",
    r4_fact2: "Az erdők felszívják a szén-dioxidot az atmoszkférából (CO₂ ↓)",
    r4_fact3: "A gyökerek és talaj vizet tárolnak, megakadályozva az áradásokat 💧",
    r4_fact4: "Az erdők az biodiverzitás otthona: millió faj él ott 🦌🐿️🦅",
    r4_q: "Melyik gázt távolítják el az erdők a légkörből?",
    r4_co2: "Szén-dioxid (CO₂)",
    r4_o2: "Oxigén (O₂)",
    r4_n2: "Nitrogén (N₂)",
    r4_ch4: "Metán (CH₄)",

    r5_title: "Erdőkvíz",

    q1_q: "Hogyan hívják az erdő legfelső rétegét?",
    q1_canopy: "Lombkoronaszint",
    q1_understory: "Cserjeszint",
    q1_herbLayer: "Fűszint",
    q1_floor: "Erdőtalaj",

    q2_q: "Mely organizmusok lebontják az elhalt fát és leveleket?",
    q2_decomposers: "Lebontók (gombák, baktériumok)",
    q2_herbivores: "Herbivórák",
    q2_producers: "Termelők",
    q2_carnivores: "Carnivórák",

    q3_q: "Mit szív fel az erdő a levegőből az éghajlatváltozás elleni küzdelemhez?",
    q3_co2: "Szén-dioxid (CO₂)",
    q3_oxygen: "Oxigén (O₂)",
    q3_nitrogen: "Nitrogén (N₂)",
    q3_water: "Vízpára",
  },
  ro: {
    r1_title: "Straturile păderii",
    r1_text: "O pădure are mai multe straturi suprapuse, ca un tort. Fiecare strat are plante și animale diferite.",
    r1_fact1: "Coronament: Cei mai înalți copaci care captează lumina soarelui ☀️",
    r1_fact2: "Stratul arborescent: Copaci mai mici și arbuști la umbră 🌳",
    r1_fact3: "Stratul ierburos: Plante mici, ferigile și flori 🌿",
    r1_fact4: "Tapisul păderii: Mușchi, ciuperci și frunze moarte 🍄",

    r2_title: "Lanțuri trofice în pădure",
    r2_text: "Energia curge prin pădure într-un lanț trofic. Plantele fac mâncare din lumina soarelui, animalele mănâncă plante, și animalele mai mari mănâncă pe cele mai mici.",
    r2_fact1: "Producători: Plante și copaci fac mâncare din lumina soarelui (plantele nu mănâncă nimic)",
    r2_fact2: "Consumatori primari: Erbivori mănâncă plante (cerbi, iepuri, insecte)",
    r2_fact3: "Consumatori secundari: Carnivori mănâncă erbivori (păsări, vulpi)",
    r2_fact4: "Descompozitori: Descompun lucruri moarte (bacterii, ciuperci) 🍄",

    r3_title: "Descompunere și ciclul nutrienților",
    r3_text: "Când plantele și animalele mor, descompoziitorii le descompun. Nutrienții se întorc în sol, și cresc plante noi.",
    r3_fact1: "Ciupercile și bacteriile descompun frunzele moarte, lemnul și animalele 🍄",
    r3_fact2: "Viermii de pământ amestecă solul și ajută la descompunerea materiei organice 🪱",
    r3_fact3: "Descompunerea eliberează nutrienți în sol",
    r3_fact4: "Plantele absorb acești nutrienți pentru a crește, completând ciclul nutrienților",
    r3_q: "Ce se întâmplă cu nutrienții când descompoziitorii descompun plantele moarte?",
    r3_nutrients: "Nutrienții se întorc în sol",
    r3_disappear: "Nutrienții dispar complet",
    r3_pollute: "Nutrienții poluează apa",
    r3_escape: "Nutrienții se scapă în aer",

    r4_title: "Funcțiile ecosistemului păderii",
    r4_text: "Pădurile sunt ecosisteme vitale. Produc oxigen, absorb dioxid de carbon, stochează apă și oferă acasă pentru milioane de organisme.",
    r4_fact1: "Pădurile produc oxigen pe care îl respirăm 💨",
    r4_fact2: "Pădurile absorb dioxid de carbon din atmosferă (CO₂ ↓)",
    r4_fact3: "Rădăcinile și solul stochează apă, prevenind inundațiile 💧",
    r4_fact4: "Pădurile sunt acasă pentru biodiversitate: mii de specii trăiesc acolo 🦌🐿️🦅",
    r4_q: "Ce gaz elimină pădurile din atmosferă?",
    r4_co2: "Dioxid de carbon (CO₂)",
    r4_o2: "Oxigen (O₂)",
    r4_n2: "Azot (N₂)",
    r4_ch4: "Metan (CH₄)",

    r5_title: "Quiz despre pădure",

    q1_q: "Cum se numește cea mai de sus strat a unei păduri?",
    q1_canopy: "Coronament",
    q1_understory: "Stratul arborescent",
    q1_herbLayer: "Stratul ierburos",
    q1_floor: "Tapisul păderii",

    q2_q: "Care organisme descompun lemnul și frunzele moarte?",
    q2_decomposers: "Descompozitori (ciuperci, bacterii)",
    q2_herbivores: "Erbivori",
    q2_producers: "Producători",
    q2_carnivores: "Carnivori",

    q3_q: "Ce absorbe pădurile din aer pentru a lupta împotriva schimbărilor climatice?",
    q3_co2: "Dioxid de carbon (CO₂)",
    q3_oxygen: "Oxigen (O₂)",
    q3_nitrogen: "Azot (N₂)",
    q3_water: "Vapori de apă",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (NO TEXT INSIDE SVG)
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Forest layers cross-section */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="forestSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F6FF" />
        </linearGradient>
        <linearGradient id="forestSoil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6F47" />
          <stop offset="100%" stopColor="#5D4A2A" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="240" height="160" fill="url(#forestSky)" />

      {/* Sun */}
      <circle cx="200" cy="20" r="12" fill="#FFD700" opacity="0.9" />

      {/* Canopy layer — tall trees */}
      <g id="canopy">
        <rect x="0" y="0" width="240" height="35" fill="#2D5016" opacity="0.85" />
        <circle cx="40" cy="35" r="22" fill="#3D7C1C" />
        <circle cx="60" cy="28" r="25" fill="#3D7C1C" />
        <circle cx="85" cy="30" r="24" fill="#4A9B3D" />
        <circle cx="120" cy="25" r="26" fill="#3D7C1C" />
        <circle cx="155" cy="32" r="25" fill="#4A9B3D" />
        <circle cx="180" cy="28" r="23" fill="#3D7C1C" />
        <circle cx="210" cy="35" r="22" fill="#4A9B3D" />
      </g>

      {/* Understory layer — shrubs */}
      <g id="understory">
        <rect x="0" y="35" width="240" height="30" fill="#5A7D4D" opacity="0.7" />
        <polygon points="30,65 20,50 40,50" fill="#6B9D5C" />
        <polygon points="70,65 60,50 80,50" fill="#6B9D5C" />
        <polygon points="110,65 100,50 120,50" fill="#7AB26D" />
        <polygon points="160,65 150,50 170,50" fill="#6B9D5C" />
        <polygon points="210,65 200,50 220,50" fill="#7AB26D" />
      </g>

      {/* Herb layer — low plants */}
      <g id="herbLayer">
        <rect x="0" y="65" width="240" height="25" fill="#6FA86F" opacity="0.6" />
        <circle cx="25" cy="75" r="6" fill="#7DB87D" />
        <circle cx="50" cy="78" r="5" fill="#7DB87D" />
        <circle cx="75" cy="76" r="6" fill="#8DCC8D" />
        <circle cx="100" cy="77" r="5" fill="#7DB87D" />
        <circle cx="135" cy="75" r="6" fill="#8DCC8D" />
        <circle cx="160" cy="78" r="5" fill="#7DB87D" />
        <circle cx="190" cy="76" r="6" fill="#8DCC8D" />
        <circle cx="220" cy="77" r="5" fill="#7DB87D" />
      </g>

      {/* Forest floor — moss and decomposition */}
      <g id="floor">
        <rect x="0" y="90" width="240" height="70" fill="url(#forestSoil)" />
        {/* Mushrooms */}
        <circle cx="40" cy="105" r="4" fill="#DC7A1C" />
        <ellipse cx="40" cy="108" rx="7" ry="4" fill="#D47A1C" opacity="0.8" />
        <circle cx="120" cy="108" r="4" fill="#DC7A1C" />
        <ellipse cx="120" cy="111" rx="7" ry="4" fill="#D47A1C" opacity="0.8" />
        <circle cx="200" cy="106" r="4" fill="#DC7A1C" />
        <ellipse cx="200" cy="109" rx="7" ry="4" fill="#D47A1C" opacity="0.8" />
        {/* Dead leaves scattered */}
        <ellipse cx="60" cy="130" rx="8" ry="5" fill="#8B4513" opacity="0.6" transform="rotate(-20 60 130)" />
        <ellipse cx="100" cy="140" rx="8" ry="5" fill="#9B5624" opacity="0.6" transform="rotate(30 100 140)" />
        <ellipse cx="160" cy="135" rx="8" ry="5" fill="#8B4513" opacity="0.6" transform="rotate(-40 160 135)" />
      </g>

      {/* Vertical arrows showing layer structure */}
      <line x1="15" y1="10" x2="15" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  );
}

/** Round 2 SVG: Food chain arrow diagram */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="chainBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(135,206,235,0.3)" />
          <stop offset="100%" stopColor="rgba(139,90,60,0.3)" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#chainBg)" />

      {/* Sun */}
      <circle cx="20" cy="20" r="12" fill="#FFD700" />

      {/* Producer: Plant */}
      <g id="plant">
        <ellipse cx="50" cy="80" rx="15" ry="28" fill="#4A8B4A" />
        <ellipse cx="35" cy="70" rx="12" ry="20" fill="#5BA85B" transform="rotate(-25 35 70)" />
        <ellipse cx="65" cy="70" rx="12" ry="20" fill="#5BA85B" transform="rotate(25 65 70)" />
        <rect x="45" y="105" width="10" height="18" fill="#8B6F47" />
      </g>
      <text x="50" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.7)">Plant</text>

      {/* Arrow 1 */}
      <path d="M 75 80 L 95 80" stroke="rgba(255,255,255,0.6)" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Primary Consumer: Rabbit/Herbivore */}
      <g id="herbivore">
        <ellipse cx="120" cy="80" rx="14" ry="16" fill="#8B6F47" />
        <circle cx="130" cy="70" r="9" fill="#9B7F57" />
        <circle cx="128" cy="68" r="3" fill="black" />
        <path d="M 135 65 L 140 60" stroke="#9B7F57" strokeWidth="2" />
        <path d="M 137 65 L 142 60" stroke="#9B7F57" strokeWidth="2" />
      </g>
      <text x="120" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.7)">Herbivore</text>

      {/* Arrow 2 */}
      <path d="M 145 80 L 165 80" stroke="rgba(255,255,255,0.6)" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Secondary Consumer: Fox/Carnivore */}
      <g id="carnivore">
        <ellipse cx="190" cy="80" rx="16" ry="14" fill="#DC5D1C" />
        <circle cx="202" cy="72" r="9" fill="#E06D2C" />
        <circle cx="200" cy="70" r="3" fill="black" />
        <path d="M 206 67 L 212 62" stroke="#E06D2C" strokeWidth="2" />
        <path d="M 208 67 L 214 62" stroke="#E06D2C" strokeWidth="2" />
        <path d="M 177 75 L 170 80" stroke="#DC5D1C" strokeWidth="3" />
      </g>
      <text x="190" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.7)">Carnivore</text>

      {/* Arrow from sun to plant */}
      <path d="M 32 32 L 45 60" stroke="rgba(255,215,0,0.5)" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />

      {/* Decomposer at bottom */}
      <g id="decomposer">
        <ellipse cx="120" cy="130" rx="20" ry="10" fill="#8B6F47" opacity="0.6" />
        <circle cx="105" cy="125" r="4" fill="#DC7A1C" />
        <circle cx="120" cy="122" r="4" fill="#DC7A1C" />
        <circle cx="135" cy="125" r="4" fill="#DC7A1C" />
      </g>
      <text x="120" y="155" textAnchor="middle" fontSize="9" fontWeight="bold" fill="rgba(255,255,255,0.6)">Decomposers</text>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.6)" />
        </marker>
      </defs>
    </svg>
  );
}

/** Round 3 SVG: Decomposition cycle with dead log */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="decomposeBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F0FF" />
          <stop offset="100%" stopColor="#A0804A" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#decomposeBg)" />

      {/* Dead log */}
      <g id="deadLog">
        <ellipse cx="120" cy="70" rx="50" ry="16" fill="#6B4423" />
        <rect x="70" y="55" width="100" height="15" fill="#8B5A2B" opacity="0.8" />
        {/* Cracks in wood */}
        <path d="M 85 65 Q 95 70 105 65" stroke="#5D3A1F" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M 110 68 Q 120 72 130 68" stroke="#5D3A1F" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M 135 66 Q 145 70 155 65" stroke="#5D3A1F" strokeWidth="1" fill="none" opacity="0.6" />
      </g>

      {/* Mushrooms on log */}
      <g id="fungi">
        <circle cx="85" cy="50" r="5" fill="#DC7A1C" />
        <ellipse cx="85" cy="56" rx="9" ry="5" fill="#CD6A0C" />
        <circle cx="120" cy="48" r="6" fill="#DC7A1C" />
        <ellipse cx="120" cy="55" rx="10" ry="5" fill="#CD6A0C" />
        <circle cx="155" cy="50" r="5" fill="#DC7A1C" />
        <ellipse cx="155" cy="56" rx="9" ry="5" fill="#CD6A0C" />
      </g>

      {/* Earthworm */}
      <path d="M 100 90 Q 110 95 120 90 Q 130 85 140 90" stroke="#8B6F47" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="90" r="3" fill="#5D3A1F" />

      {/* Soil below */}
      <rect x="0" y="110" width="240" height="50" fill="#8B6F47" />

      {/* Nutrients returning to soil (arrows) */}
      <path d="M 110 85 L 110 105" stroke="rgba(100,200,100,0.7)" strokeWidth="2" markerEnd="url(#arrowgreen)" />
      <path d="M 130 85 L 130 105" stroke="rgba(100,200,100,0.7)" strokeWidth="2" markerEnd="url(#arrowgreen)" />

      {/* New plant growing from soil */}
      <g id="newPlant">
        <line x1="60" y1="110" x2="60" y2="80" stroke="#4A8B4A" strokeWidth="4" />
        <ellipse cx="50" cy="75" rx="8" ry="12" fill="#5BA85B" transform="rotate(-30 50 75)" />
        <ellipse cx="70" cy="75" rx="8" ry="12" fill="#5BA85B" transform="rotate(30 70 75)" />
      </g>

      {/* Cycle arrows */}
      <path d="M 70 70 Q 40 40 60 30" stroke="rgba(200,200,200,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
      <path d="M 180 90 Q 210 90 200 60" stroke="rgba(200,200,200,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />

      <defs>
        <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="rgba(100,200,100,0.7)" />
        </marker>
      </defs>
    </svg>
  );
}

/** Round 4 SVG: Forest ecosystem functions */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="ecosystemSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F6FF" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#ecosystemSky)" />

      {/* Sun */}
      <circle cx="210" cy="15" r="10" fill="#FFD700" />

      {/* Rain clouds */}
      <path d="M 30 25 Q 25 15 35 10 Q 45 8 50 15 Q 60 10 65 20" fill="#C0C0C0" opacity="0.7" />

      {/* Raindrops */}
      <line x1="35" y1="25" x2="33" y2="35" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="28" x2="48" y2="38" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />
      <line x1="55" y1="25" x2="53" y2="35" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />

      {/* Forest trees */}
      <g id="trees">
        <polygon points="50,90 30,130 70,130" fill="#2D5016" />
        <rect x="45" y="130" width="10" height="15" fill="#8B6F47" />

        <polygon points="130,85 110,130 150,130" fill="#3D7C1C" />
        <rect x="125" y="130" width="10" height="15" fill="#8B6F47" />

        <polygon points="200,95 180,135 220,135" fill="#2D5016" />
        <rect x="195" y="135" width="10" height="10" fill="#8B6F47" />
      </g>

      {/* O2 arrows going up (green oxygen) */}
      <path d="M 60 80 L 60 40" stroke="#00FF00" strokeWidth="2" opacity="0.7" markerEnd="url(#arrowO2)" />
      <path d="M 140 75 L 140 35" stroke="#00FF00" strokeWidth="2" opacity="0.7" markerEnd="url(#arrowO2)" />

      {/* O2 labels */}
      <text x="75" y="55" fontSize="9" fontWeight="bold" fill="#00FF00" opacity="0.8">O₂</text>
      <text x="155" y="50" fontSize="9" fontWeight="bold" fill="#00FF00" opacity="0.8">O₂</text>

      {/* CO2 arrows going down (red) */}
      <path d="M 100 35 L 100 75" stroke="#FF6B6B" strokeWidth="2" opacity="0.7" markerEnd="url(#arrowCO2)" />
      <path d="M 180 40 L 180 85" stroke="#FF6B6B" strokeWidth="2" opacity="0.7" markerEnd="url(#arrowCO2)" />

      {/* CO2 labels */}
      <text x="105" y="45" fontSize="9" fontWeight="bold" fill="#FF6B6B" opacity="0.8">CO₂</text>
      <text x="185" y="50" fontSize="9" fontWeight="bold" fill="#FF6B6B" opacity="0.8">CO₂</text>

      {/* Water cycle - cloud to roots */}
      <path d="M 45 30 Q 70 60 60 130" stroke="#4DB8FF" strokeWidth="1.5" fill="none" strokeDasharray="2,2" opacity="0.6" />

      <defs>
        <marker id="arrowO2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#00FF00" opacity="0.7" />
        </marker>
        <marker id="arrowCO2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#FF6B6B" opacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const FOREST_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      svg: () => SVG_R1(),
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      svg: () => SVG_R2(),
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      svg: () => SVG_R3(),
      questions: [
        {
          question: "r3_q",
          choices: ["r3_nutrients", "r3_disappear", "r3_pollute", "r3_escape"],
          answer: "r3_nutrients",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      svg: () => SVG_R4(),
      questions: [
        {
          question: "r4_q",
          choices: ["r4_co2", "r4_o2", "r4_n2", "r4_ch4"],
          answer: "r4_co2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <div />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_canopy", "q1_understory", "q1_herbLayer", "q1_floor"],
          answer: "q1_canopy",
        },
        {
          question: "q2_q",
          choices: ["q2_decomposers", "q2_herbivores", "q2_producers", "q2_carnivores"],
          answer: "q2_decomposers",
        },
        {
          question: "q3_q",
          choices: ["q3_co2", "q3_oxygen", "q3_nitrogen", "q3_water"],
          answer: "q3_co2",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function ForestExplorer({ color = "#2D5016", lang = "en", onDone }: { color?: string; lang?: string; onDone?: (score: number, total: number) => void }) {
  return <ExplorerEngine def={FOREST_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
