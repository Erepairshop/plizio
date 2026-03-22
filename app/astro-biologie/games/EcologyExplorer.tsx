"use client";
// EcologyExplorer — Ecology & Symbiosis (Ökologie & Symbiose) Grade 7
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Population, ecological niche, competition, symbiosis, biogeochemical cycles

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Population
    r1_title: "Population: Living Together",
    r1_text: "A population is all the members of one species living in the same area. Populations have birth rates, death rates, and can grow or shrink.",
    r1_fact1: "Population size depends on available resources (food, water, shelter, space)",
    r1_fact2: "Birth rate is how many new individuals are born in a population",
    r1_fact3: "Death rate is how many individuals die in a population",
    r1_fact4: "When births > deaths, population grows; when deaths > births, population shrinks",

    // Round 2: Competition & Niche
    r2_title: "Competition & Ecological Niche",
    r2_text: "Organisms compete for the same resources. An ecological niche is the specific role and place of an organism in its habitat.",
    r2_fact1: "Competition for food, water, light, and space shapes populations",
    r2_fact2: "Organisms with better traits are more likely to win competition (survival of the fittest)",
    r2_fact3: "A niche includes what the organism eats, where it lives, and how it behaves",
    r2_fact4: "Reducing competition helps different species coexist in the same habitat",

    // Round 3: Symbiosis
    r3_title: "Symbiosis: Living Together",
    r3_text: "Symbiosis means two different species live together closely. There are three types: mutualism, commensalism, and parasitism.",
    r3_fact1: "Mutualism: both species benefit (clownfish protect anemone, anemone protects fish)",
    r3_fact2: "Commensalism: one benefits, one not harmed (remora fish stuck to shark)",
    r3_fact3: "Parasitism: one benefits, one harmed (tapeworm inside host, lice on animals)",
    r3_fact4: "Symbiosis allows species to survive in harsh environments",

    // Round 4: Biogeochemical Cycles
    r4_title: "Carbon & Nitrogen Cycles",
    r4_text: "Nutrients cycle between the biotic (living) and abiotic (non-living) parts of ecosystems. Two key cycles are carbon and nitrogen.",
    r4_fact1: "Carbon cycle: CO₂ in atmosphere → plants absorb → animals eat plants → respiration returns CO₂",
    r4_fact2: "Nitrogen cycle: N₂ in atmosphere → bacteria convert to usable forms → plants absorb → animals eat → decomposers return N₂",
    r4_fact3: "Decomposers (bacteria, fungi) break down dead matter and return nutrients to soil",
    r4_fact4: "Without these cycles, life would not have a continuous supply of essential elements",

    // Round 5: Quiz
    r5_title: "Ecology Review",

    // Quiz Questions
    q1_q: "What do we call all members of one species living in the same area?",
    q1_population: "Population",
    q1_community: "Community",
    q1_ecosystem: "Ecosystem",
    q1_biome: "Biome",

    q2_q: "Which type of symbiosis benefits both species?",
    q2_mutualism: "Mutualism",
    q2_parasitism: "Parasitism",
    q2_commensalism: "Commensalism",
    q2_predation: "Predation",

    q3_q: "Which organisms break down dead matter and return nutrients to soil?",
    q3_decomposers: "Decomposers",
    q3_producers: "Producers",
    q3_consumers: "Consumers",
    q3_herbivores: "Herbivores",
  },
  de: {
    r1_title: "Population: Zusammenleben",
    r1_text: "Eine Population ist alle Mitglieder einer Art, die im gleichen Gebiet leben. Populationen haben Geburtsraten, Sterblichkeitsraten und können wachsen oder schrumpfen.",
    r1_fact1: "Populationsgröße hängt von verfügbaren Ressourcen ab (Nahrung, Wasser, Unterkunft, Platz)",
    r1_fact2: "Geburtenrate ist, wie viele neue Personen in einer Population geboren werden",
    r1_fact3: "Sterblichkeitsrate ist, wie viele Personen in einer Population sterben",
    r1_fact4: "Wenn Geburten > Todesfälle, wächst die Population; wenn Todesfälle > Geburten, schrumpft sie",

    r2_title: "Wettbewerb & Ökologische Nische",
    r2_text: "Organismen konkurrieren um die gleichen Ressourcen. Eine ökologische Nische ist die spezifische Rolle und der Ort eines Organismus in seinem Lebensraum.",
    r2_fact1: "Wettbewerb um Nahrung, Wasser, Licht und Platz formt Populationen",
    r2_fact2: "Organismen mit besseren Merkmalen gewinnen eher Wettbewerb (Überleben der Stärksten)",
    r2_fact3: "Eine Nische umfasst, was der Organismus isst, wo er lebt und wie er sich verhält",
    r2_fact4: "Verringerung von Wettbewerb hilft verschiedenen Arten, im gleichen Lebensraum zusammenzuleben",

    r3_title: "Symbiose: Zusammenleben",
    r3_text: "Symbiose bedeutet, dass zwei verschiedene Arten eng zusammenleben. Es gibt drei Typen: Mutualismus, Kommensalismus und Parasitismus.",
    r3_fact1: "Mutualismus: beide Arten profitieren (Clownfisch schützt Seeanemone, Anemone schützt Fisch)",
    r3_fact2: "Kommensalismus: eine profitiert, eine ist nicht geschädigt (Schiffshalter am Hai)",
    r3_fact3: "Parasitismus: eine profitiert, eine ist geschädigt (Bandwurm im Host, Läuse auf Tieren)",
    r3_fact4: "Symbiose ermöglicht Arten, in rauen Umgebungen zu überleben",

    r4_title: "Kohlenstoff- & Stickstoffzyklen",
    r4_text: "Nährstoffe zirkulieren zwischen den biotischen (lebenden) und abiotischen (nicht-lebenden) Teilen von Ökosystemen. Zwei wichtige Zyklen sind Kohlenstoff und Stickstoff.",
    r4_fact1: "Kohlenstoffzyklus: CO₂ in Atmosphäre → Pflanzen nehmen auf → Tiere essen Pflanzen → Respiration gibt CO₂ zurück",
    r4_fact2: "Stickstoffzyklus: N₂ in Atmosphäre → Bakterien konvertieren zu nutzbaren Formen → Pflanzen nehmen auf → Tiere essen → Zersetzer geben N₂ zurück",
    r4_fact3: "Zersetzer (Bakterien, Pilze) bauen tote Materie ab und geben Nährstoffe an Boden zurück",
    r4_fact4: "Ohne diese Zyklen hätte das Leben keine kontinuierliche Versorgung mit essentiellen Elementen",

    r5_title: "Ökologie-Übersicht",

    q1_q: "Wie nennen wir alle Mitglieder einer Art, die im gleichen Gebiet leben?",
    q1_population: "Population",
    q1_community: "Gemeinschaft",
    q1_ecosystem: "Ökosystem",
    q1_biome: "Biom",

    q2_q: "Welche Art von Symbiose kommt beiden Arten zugute?",
    q2_mutualism: "Mutualismus",
    q2_parasitism: "Parasitismus",
    q2_commensalism: "Kommensalismus",
    q2_predation: "Raubtierschaft",

    q3_q: "Welche Organismen bauen tote Materie ab und geben Nährstoffe an den Boden zurück?",
    q3_decomposers: "Zersetzer",
    q3_producers: "Produzenten",
    q3_consumers: "Verbraucher",
    q3_herbivores: "Herbivoren",
  },
  hu: {
    r1_title: "Populáció: Együttélés",
    r1_text: "Egy populáció egy faj összes tagja, akik ugyanabban a terülteben élnek. A populációknak születési és halálozási rátáik vannak, és növekedhetnek vagy csökkenhetnek.",
    r1_fact1: "Populáció mérete az elérhető erőforrásoktól függ (étel, víz, búvóhely, tér)",
    r1_fact2: "Születési ráta az, hogy hány új egyed születik a populációban",
    r1_fact3: "Halálozási ráta az, hogy hány egyed hal meg a populációban",
    r1_fact4: "Ha születések > halálozások, a populáció nő; ha halálozások > születések, csökken",

    r2_title: "Verseny & Ökológiai Niches",
    r2_text: "Az organizmusok ugyanazokért az erőforrásokért versenyeznek. Az ökológiai niches egy organizmus specifikus szerepe és helye a biotópjában.",
    r2_fact1: "Az élelmiszer, víz, fény és hely versengése alakítja a populációkat",
    r2_fact2: "Az olyan organizmusok, amelyeknek jobb tulajdonságai vannak, nagyobb valószínűséggel nyerik meg a versenyt (a legalkalmasabbak túlélése)",
    r2_fact3: "A niches magában foglal, hogy az organizmus mit eszik, hol él és hogyan viselkedik",
    r2_fact4: "A verseny csökkentése segít a különböző fajoknak ugyanabban a biotópban együttélni",

    r3_title: "Szimbiózis: Együttélés",
    r3_text: "A szimbiózis azt jelenti, hogy két különböző faj szorosan együtt él. Három típus van: mutualitás, kommenzalizmus és parazitizmus.",
    r3_fact1: "Mutualitás: mindkét faj előnyt lát (bohóchal védi a tengerimagonemót, anemón védi a halat)",
    r3_fact2: "Kommenzalizmus: egyik előnyt lát, egy nem sérült (remora hal a cápa mellett)",
    r3_fact3: "Parazitizmus: egyik előnyt lát, egy sérült (poloska a hostban, lények az állatokon)",
    r3_fact4: "A szimbiózis lehetővé teszi a fajoknak, hogy kemény környezetben megéljenek",

    r4_title: "Szén- & Nitrogén-ciklus",
    r4_text: "A tápanyagok ciklizálnak az ökoszisztémák biotikus (élő) és abiotikus (élettelen) részei között. Két fő ciklus a szén és a nitrogén.",
    r4_fact1: "Szén-ciklus: CO₂ a légkörben → növények felszívnak → állatok megeszik a növényeket → légzés visszatér CO₂-t",
    r4_fact2: "Nitrogén-ciklus: N₂ a légkörben → baktériumok használható formákra konvertálnak → növények felszívnak → állatok megeszik → bomlasztók N₂-t adnak vissza",
    r4_fact3: "Bomlasztók (baktériumok, gombák) feldarabolják a halott anyagot és tápanyagokat adnak a talajnak",
    r4_fact4: "Ezek nélkül a ciklus az élet nem lenne folyamatos ellátása az essentia elemekből",

    r5_title: "Ökológia-áttekintés",

    q1_q: "Mit hívunk egy faj összes tagjának, akik ugyanabban a terülteben élnek?",
    q1_population: "Populáció",
    q1_community: "Közösség",
    q1_ecosystem: "Ökoszisztéma",
    q1_biome: "Biom",

    q2_q: "Melyik szimbiózis típus előnyös mindkét fajra?",
    q2_mutualism: "Mutualitás",
    q2_parasitism: "Parazitizmus",
    q2_commensalism: "Kommenzalizmus",
    q2_predation: "Ragadozás",

    q3_q: "Mely organizmusok bontanak le halott anyagot és adnak vissza tápanyagokat a talajnak?",
    q3_decomposers: "Bomlasztók",
    q3_producers: "Termelők",
    q3_consumers: "Fogyasztók",
    q3_herbivores: "Herbivórák",
  },
  ro: {
    r1_title: "Populație: Trăind Împreună",
    r1_text: "O populație este toți membrii unei specii care trăiesc în aceeași zonă. Populațiile au rate de natalitate și mortalitate și pot crește sau micșora.",
    r1_fact1: "Dimensiunea populației depinde de resursele disponibile (hrană, apă, adăpost, spațiu)",
    r1_fact2: "Rata natalității este câte indivizi noi se nasc într-o populație",
    r1_fact3: "Rata mortalității este câți indivizi mor într-o populație",
    r1_fact4: "Când nașteri > decese, populația crește; când decese > nașteri, scade",

    r2_title: "Competiție & Nișă Ecologică",
    r2_text: "Organismele concurează pentru aceleași resurse. O nișă ecologică este rolul și locul specific al unui organism în habitatul său.",
    r2_fact1: "Competiția pentru hrană, apă, lumină și spațiu modelează populațiile",
    r2_fact2: "Organismele cu trăsături mai bune sunt mai susceptibile să câștige competiția (supraviețuirea celor mai potriviți)",
    r2_fact3: "O nișă include ceea ce mănâncă organismul, unde trăiește și cum se comportă",
    r2_fact4: "Reducerea competiției ajută speciile diferite să coexiste în același habitat",

    r3_title: "Simbiază: Trăind Împreună",
    r3_text: "Simbiaza înseamnă că două specii diferite trăiesc împreună. Există trei tipuri: mutualism, comensalism și parazitism.",
    r3_fact1: "Mutualism: ambele specii beneficiază (pești clovn protejează anemona, anemona protejează peștele)",
    r3_fact2: "Comensalism: unul beneficiază, altul nu este prejudiciat (peștele remora lipit de cărările de rechin)",
    r3_fact3: "Parazitism: unul beneficiază, altul este rănit (tenioida în gazdă, păduchi pe animale)",
    r3_fact4: "Simbiaza permite speciilor să supraviețuiască în medii grele",

    r4_title: "Cicluri de Carbon și Azot",
    r4_text: "Nutrienții ciclează între părțile biotice (vii) și abiotice (nevii) ale ecosistemelor. Două cicluri cheie sunt carbonul și azotul.",
    r4_fact1: "Ciclu de carbon: CO₂ în atmosferă → plante absorb → animale mănâncă plante → respirație returnează CO₂",
    r4_fact2: "Ciclu de azot: N₂ în atmosferă → bacteriile convertesc în forme utilizabile → plante absorb → animale mănâncă → descompozitori returnează N₂",
    r4_fact3: "Descompozitorii (bacterii, ciuperci) descompun materia moartă și returnează nutrienți solului",
    r4_fact4: "Fără aceste cicluri, viața nu ar avea o aprovizionare continuă cu elemente esențiale",

    r5_title: "Recapitulare Ecologie",

    q1_q: "Cum numim toți membrii unei specii care trăiesc în aceeași zonă?",
    q1_population: "Populație",
    q1_community: "Comunitate",
    q1_ecosystem: "Ecosistem",
    q1_biome: "Biom",

    q2_q: "Ce tip de simbiază beneficiază ambelor specii?",
    q2_mutualism: "Mutualism",
    q2_parasitism: "Parazitism",
    q2_commensalism: "Comensalism",
    q2_predation: "Prădare",

    q3_q: "Ce organisme descompun materia moartă și returnează nutrienți solului?",
    q3_decomposers: "Descompozitori",
    q3_producers: "Producători",
    q3_consumers: "Consumatori",
    q3_herbivores: "Erbivori",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (simple shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="eco_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#eco_bg)" />
      <rect x="30" y="110" width="20" height="30" fill="#4CAF50" />
      <rect x="65" y="100" width="20" height="40" fill="#4CAF50" />
      <rect x="100" y="80" width="20" height="60" fill="#4CAF50" />
      <rect x="135" y="50" width="20" height="90" fill="#FF9800" />
      <rect x="170" y="70" width="20" height="70" fill="#F44336" />
    </svg>
  );
}

function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="eco_land" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" /><stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="#DAEAF6" />
      <rect y="80" width="240" height="80" fill="url(#eco_land)" />
      <rect x="110" y="40" width="8" height="40" fill="#8B4513" />
      <circle cx="114" cy="35" r="20" fill="#228B22" />
      <circle cx="50" cy="70" r="8" fill="#8B4513" />
      <circle cx="114" cy="50" r="5" fill="#FFB347" />
      <ellipse cx="180" cy="75" rx="10" ry="8" fill="#A0826D" />
    </svg>
  );
}

function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#E8F5FF" />
      <circle cx="35" cy="80" r="15" fill="#FF6B6B" />
      <circle cx="50" cy="85" r="8" fill="#FFB347" />
      <ellipse cx="130" cy="80" rx="18" ry="10" fill="#4A90E2" />
      <polygon points="148,80 155,75 155,85" fill="#4A90E2" />
      <circle cx="105" cy="85" r="6" fill="#777" />
      <ellipse cx="200" cy="80" rx="15" ry="12" fill="#8B7355" />
      <circle cx="195" cy="70" r="5" fill="#8B7355" />
      <circle cx="210" cy="75" r="4" fill="#C70039" />
    </svg>
  );
}

function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="eco_sky2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E8F5FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#eco_sky2)" />
      <circle cx="120" cy="80" r="35" fill="none" stroke="#4CAF50" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
      <polygon points="80,100 70,120 90,120" fill="#228B22" />
      <rect x="75" y="115" width="10" height="10" fill="#8B4513" />
      <circle cx="120" cy="130" r="8" fill="#FFB347" />
      <circle cx="160" cy="100" r="6" fill="#A0522D" />
    </svg>
  );
}

const ecologyDef: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => SVG_R1(),
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => SVG_R2(),
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => SVG_R3(),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => SVG_R4(),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => null,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_population", "q1_community", "q1_ecosystem", "q1_biome"],
          answer: "q1_population",
        },
        {
          question: "q2_q",
          choices: ["q2_mutualism", "q2_parasitism", "q2_commensalism", "q2_predation"],
          answer: "q2_mutualism",
        },
        {
          question: "q3_q",
          choices: ["q3_decomposers", "q3_producers", "q3_consumers", "q3_herbivores"],
          answer: "q3_decomposers",
        },
      ],
    },
  ],
};

export default function EcologyExplorer({ onDone }: { onDone?: (score: number, total: number) => void }) {
  return <ExplorerEngine def={ecologyDef} color="#2980B9" lang="en" onDone={onDone} />;
}
