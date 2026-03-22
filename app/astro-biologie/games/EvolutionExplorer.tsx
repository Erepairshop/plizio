"use client";
// EvolutionExplorer — Island i9: Evolution Basics (Evolúció alapjai) Grade 7
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Adaptation, natural selection, fossils, behavior & learning

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Adaptation
    r1_title: "Adaptation: Survival Tools",
    r1_text: "Organisms have special features that help them survive in their environment. These are called adaptations.",
    r1_fact1: "Adaptations are body or behavior features shaped by environment over time",
    r1_fact2: "Camouflage helps animals hide from predators (tiger stripes, leaf insect)",
    r1_fact3: "Beak shapes differ in birds—short for seeds, long for insects or flowers",
    r1_fact4: "Desert plants have thick waxy leaves to conserve water in dry heat",

    // Round 2: Natural Selection
    r2_title: "Natural Selection: Survival of the Fittest",
    r2_text: "In nature, individuals with helpful traits are more likely to survive and reproduce. This is natural selection.",
    r2_fact1: "Within a population, there is variation—individuals differ in traits",
    r2_fact2: "Competition for resources (food, water, space) means not all survive",
    r2_fact3: "Organisms with helpful traits have better chances to survive and have offspring",
    r2_fact4: "Over many generations, helpful traits become more common in the population",

    // Round 3: Fossils
    r3_title: "Fossils: Windows to the Past",
    r3_text: "Fossils are preserved remains of ancient organisms. They show us what life was like long ago.",
    r3_fact1: "Fossils form when organisms are buried in sediment and minerals replace organic material",
    r3_fact2: "Fossils show sequences of change—species looked different in the distant past",
    r3_fact3: "Similar bone structures in different animals suggest common ancestors",
    r3_fact4: "The fossil record is incomplete, but it shows clear patterns of life's history",

    // Round 4: Behavior & Learning
    r4_title: "Innate vs. Learned Behavior",
    r4_text: "Some behaviors are instinctive (inborn), while others are learned through experience.",
    r4_fact1: "Innate (instinctive) behavior: spider web building, bird migration, reflex responses",
    r4_fact2: "Learned behavior: using tools, learning from parents, conditioning (reward/punishment)",
    r4_fact3: "Many behaviors mix innate + learned (birds may inherit song template, then learn details)",
    r4_fact4: "Learning allows animals to adapt quickly to new challenges in their lifetime",

    // Round 5: Quiz
    r5_title: "Quick Review",

    // Quiz Questions
    q1_q: "What do we call special features that help an organism survive in its environment?",
    q1_adaptation: "Adaptations",
    q1_mutation: "Mutations",
    q1_variation: "Variation",
    q1_evolution: "Evolution",

    q2_q: "Which process causes helpful traits to become more common in a population?",
    q2_natural: "Natural selection",
    q2_migration: "Migration",
    q2_mutation: "Random mutation",
    q2_adaptation: "Adaptation",

    q3_q: "What do fossils tell us about the history of life?",
    q3_sequence: "How species changed over time",
    q3_climate: "Past climate patterns only",
    q3_locations: "Where dinosaurs lived",
    q3_extinction: "Why species went extinct",
  },
  de: {
    r1_title: "Anpassung: Überlebenswerkzeuge",
    r1_text: "Organismen haben spezielle Merkmale, die ihnen helfen, in ihrer Umgebung zu überleben. Diese werden Anpassungen genannt.",
    r1_fact1: "Anpassungen sind Körper- oder Verhaltensmerkmale, die über Zeit durch die Umwelt geprägt werden",
    r1_fact2: "Tarnung hilft Tieren, sich vor Raubtieren zu verstecken (Tigerstreifen, Stabheuschrecke)",
    r1_fact3: "Schnabelformen unterscheiden sich bei Vögeln—kurz für Samen, lang für Insekten oder Blumen",
    r1_fact4: "Wüstenpflanzen haben dicke wachsige Blätter, um Wasser in trockener Hitze zu sparen",

    r2_title: "Natürliche Auswahl: Überleben der Stärksten",
    r2_text: "In der Natur haben Individuen mit hilfreichen Merkmalen bessere Chancen zu überleben und sich fortzupflanzen. Das ist natürliche Auswahl.",
    r2_fact1: "In einer Population gibt es Variation—Individuen unterscheiden sich in Merkmalen",
    r2_fact2: "Wettbewerb um Ressourcen (Nahrung, Wasser, Raum) bedeutet, dass nicht alle überleben",
    r2_fact3: "Organismen mit hilfreichen Merkmalen haben bessere Chancen zu überleben und Nachkommen zu bekommen",
    r2_fact4: "Über viele Generationen hinweg werden hilfreiche Merkmale häufiger in der Population",

    r3_title: "Fossilien: Fenster zur Vergangenheit",
    r3_text: "Fossilien sind erhaltene Überreste antiker Organismen. Sie zeigen uns, wie das Leben vor langer Zeit aussah.",
    r3_fact1: "Fossilien entstehen, wenn Organismen in Sediment begraben werden und Mineralien organisches Material ersetzen",
    r3_fact2: "Fossilien zeigen Veränderungsabläufe—Arten sahen in der fernen Vergangenheit anders aus",
    r3_fact3: "Ähnliche Knochenstrukturen in verschiedenen Tieren deuten auf gemeinsame Vorfahren hin",
    r3_fact4: "Das Fossilienarchiv ist unvollständig, zeigt aber klare Muster der Lebensgeschichte",

    r4_title: "Angeborenes vs. Erlerntes Verhalten",
    r4_text: "Manche Verhaltensweisen sind instinktiv (angeboren), während andere durch Erfahrung gelernt werden.",
    r4_fact1: "Angeborenes Verhalten: Spinnennetzbildung, Vogelzug, Reflexantworten",
    r4_fact2: "Erlerntes Verhalten: Werkzeuggebrauch, Lernen von Eltern, Konditionierung (Belohnung/Bestrafung)",
    r4_fact3: "Viele Verhaltensweisen vermischen angeboren + gelernt (Vögel können Gesangsvorlage erben, dann Details lernen)",
    r4_fact4: "Lernen ermöglicht es Tieren, sich schnell an neue Herausforderungen in ihrem Leben anzupassen",

    r5_title: "Schnelle Wiederholung",

    q1_q: "Wie nennen wir spezielle Merkmale, die einem Organismus helfen, in seiner Umgebung zu überleben?",
    q1_adaptation: "Anpassungen",
    q1_mutation: "Mutationen",
    q1_variation: "Variation",
    q1_evolution: "Evolution",

    q2_q: "Welcher Prozess führt dazu, dass hilfreiche Merkmale in einer Population häufiger werden?",
    q2_natural: "Natürliche Auswahl",
    q2_migration: "Migration",
    q2_mutation: "Zufällige Mutation",
    q2_adaptation: "Anpassung",

    q3_q: "Was sagen uns Fossilien über die Geschichte des Lebens?",
    q3_sequence: "Wie sich Arten im Laufe der Zeit verändert haben",
    q3_climate: "Nur frühere Klimamuster",
    q3_locations: "Wo Dinosaurier lebten",
    q3_extinction: "Warum Arten ausstarben",
  },
  hu: {
    r1_title: "Alkalmazkodás: Túlélési Eszközök",
    r1_text: "Az organizmusok speciális tulajdonságokkal rendelkeznek, amelyek segítenek nekik túlélni környezetükben. Ezeket alkalmazkodásnak nevezzük.",
    r1_fact1: "Az alkalmazkodások test- vagy viselkedésmódosulások, amelyeket az idő múlásával a környezet alakít",
    r1_fact2: "A szín- és mintaváltozat segít az állatoknak elbújni a ragadozók elől (tigris csíkok, levél rovar)",
    r1_fact3: "A csőrök formái különböznek a madaraknál—rövid a magoknál, hosszú a rovaroknál vagy virágoknak",
    r1_fact4: "A sivatagi növények vastagszélű viaszos levelekkel rendelkeznek, hogy megőrizzék a vizet a száraz melegben",

    r2_title: "Természetes Szelekcó: A Legerősebb Túlélése",
    r2_text: "A természetben azok az egyedek, amelyek hasznos tulajdonságokkal rendelkeznek, nagyobb valószínűséggel túlélik és szaporodnak. Ez a természetes szelekcó.",
    r2_fact1: "Egy populáción belül variáció van—az egyedek különböznek a tulajdonságaikban",
    r2_fact2: "Az erőforrások (táplálék, víz, hely) versenye azt jelenti, hogy nem mindenki túlél",
    r2_fact3: "Az organizmusok hasznos tulajdonságokkal jobb eséllyel maradnak fenn és szarmaztathetnек utódokat",
    r2_fact4: "Sok generáció alatt a hasznos tulajdonságok a populációban egyre gyakoribbaká válnak",

    r3_title: "Fosszíliák: Ablakok a Múltba",
    r3_text: "A fosszíliák az ősi organizmusok megőrzött maradványai. Megmutatják nekünk, hogyan nézett ki az élet régen.",
    r3_fact1: "A fosszíliák akkor keletkeznek, amikor organizmusokat üledékbe temetik és ásványok helyettesítik az organikus anyagot",
    r3_fact2: "A fosszíliák változási sorozatokat mutatnak—fajok másként néztek ki a távoli múltban",
    r3_fact3: "Hasonló csontszerkezetek a különböző állatokban közös ősöket sugallnak",
    r3_fact4: "A fosszíliarekord hiányos, de az élet történetének egyértelmű mintázatait mutatja",

    r4_title: "Veleszületett vs. Tanult Viselkedés",
    r4_text: "Néhány viselkedés ösztönös (veleszületett), míg mások tapasztalaton keresztül tanultak.",
    r4_fact1: "Veleszületett viselkedés: pók háló szövés, madár vándorlás, reflex válaszok",
    r4_fact2: "Tanult viselkedés: szerszám használat, szülőktől tanulás, kondicionálás (jutalom/büntetés)",
    r4_fact3: "Sok viselkedés kevered veleszületett + tanult (madarak örökölhetnek dal sablont, majd részleteket tanulnak)",
    r4_fact4: "A tanulás lehetővé teszi az állatoknak, hogy gyorsan alkalmazkodjanak az élet új kihívásaihoz",

    r5_title: "Gyors Áttekintés",

    q1_q: "Hogyan nevezzük azokat a speciális tulajdonságokat, amelyek segítenek egy organizmusnak túlélni környezetében?",
    q1_adaptation: "Alkalmazkodások",
    q1_mutation: "Mutációk",
    q1_variation: "Variáció",
    q1_evolution: "Evolúció",

    q2_q: "Melyik folyamat okozza, hogy a hasznos tulajdonságok egy populációban gyakoribbaká válnak?",
    q2_natural: "Természetes szelekcó",
    q2_migration: "Migráció",
    q2_mutation: "Véletlen mutáció",
    q2_adaptation: "Alkalmazkodás",

    q3_q: "Mit mondanak nekünk a fosszíliák az élet történetéről?",
    q3_sequence: "Hogyan változtak a fajok az idő múlásával",
    q3_climate: "Csak korábbi éghajlati minták",
    q3_locations: "Hol éltek a dinoszauruszok",
    q3_extinction: "Miért haltak ki a fajok",
  },
  ro: {
    r1_title: "Adaptare: Instrumente de Supraviețuire",
    r1_text: "Organismele au caracteristici speciale care le ajută să supraviețuiască în mediul lor. Acestea se numesc adaptări.",
    r1_fact1: "Adaptările sunt caracteristici ale corpului sau comportamentului modelate de mediu în timp",
    r1_fact2: "Colorația de camuflaj ajută animalele să se ascundă de răpitori (dungi tigru, insecta frunze)",
    r1_fact3: "Formele ciocurilor diferă la păsări—scurt pentru semințe, lung pentru insecte sau flori",
    r1_fact4: "Plantele din deșert au frunze groase și ceruase pentru a conserva apa în căldura uscată",

    r2_title: "Selecția Naturală: Supraviețuirea Celor mai Puternici",
    r2_text: "În natură, indivizii cu trăsături utile sunt mai ușor să supraviețuiască și să se reproduceă. Aceasta este selecția naturală.",
    r2_fact1: "Într-o populație, există variație—indivizii diferă în trăsături",
    r2_fact2: "Competiția pentru resurse (hrană, apă, spațiu) înseamnă că nu toți supraviețuiesc",
    r2_fact3: "Organismele cu trăsături utile au șanse mai bune să supraviețuiască și să aibă descendenți",
    r2_fact4: "De-a lungul multor generații, trăsăturile utile devin mai comune în populație",

    r3_title: "Fosile: Ferestre în Trecut",
    r3_text: "Fosilele sunt rămășițe păstrate ale organismelor antice. Ne arată cum arăta viața demult.",
    r3_fact1: "Fosilele se formează când organismele sunt îngropate în sediment și mineralele înlocuiesc materia organică",
    r3_fact2: "Fosilele arată secvențe de schimbare—speciile arătau diferit în trecut îndepărtat",
    r3_fact3: "Structuri osoase similare în animale diferite sugerează strămoși comuni",
    r3_fact4: "Registrul fosilifer este incomplet, dar arată modele clare ale istoriei vieții",

    r4_title: "Comportament Înnăscut vs. Învățat",
    r4_text: "Unele comportamente sunt instinctive (înnăscute), în timp ce altele sunt învățate prin experiență.",
    r4_fact1: "Comportament înnăscut: tesătura pânzei de păianjen, migrația păsărilor, răspunsuri reflexe",
    r4_fact2: "Comportament învățat: utilizarea uneltelor, învățare de la părinți, condiționare (recompensă/pedeapsă)",
    r4_fact3: "Multe comportamente amestecă înnăscut + învățat (păsările pot moșteni șablon cântec, apoi invață detaliile)",
    r4_fact4: "Învățarea permite animalelor să se adapteze rapid la noi provocări în viața lor",

    r5_title: "Recapitulare Rapidă",

    q1_q: "Cum numim caracteristicile speciale care ajută un organism să supraviețuiască în mediul său?",
    q1_adaptation: "Adaptări",
    q1_mutation: "Mutații",
    q1_variation: "Variație",
    q1_evolution: "Evoluție",

    q2_q: "Ce proces face ca trăsăturile utile să devină mai comune într-o populație?",
    q2_natural: "Selecția naturală",
    q2_migration: "Migrație",
    q2_mutation: "Mutație aleatorie",
    q2_adaptation: "Adaptare",

    q3_q: "Ce ne spun fosilele despre istoria vieții?",
    q3_sequence: "Cum s-au schimbat speciile în timp",
    q3_climate: "Doar modele climatice anterioare",
    q3_locations: "Unde au trăit dinozaurii",
    q3_extinction: "De ce au dispărut speciile",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (simple shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Adaptation examples — camouflage, beaks, leaf insect, desert plant */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="evo_sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#evo_sky)" />

      {/* Tiger stripes (left) */}
      <g>
        <ellipse cx="40" cy="60" rx="18" ry="20" fill="#FF8800" />
        <path d="M 28 45 Q 30 48 28 52 M 32 45 Q 34 48 32 52 M 36 45 Q 38 48 36 52" stroke="#333" strokeWidth="2" fill="none" />
        <path d="M 50 50 Q 52 55 50 60 M 54 50 Q 56 55 54 60 M 58 50 Q 60 55 58 60" stroke="#333" strokeWidth="2" fill="none" />
      </g>

      {/* Short beak bird (center-left) */}
      <g>
        <circle cx="100" cy="65" r="15" fill="#FFD700" />
        <polygon points="115,65 125,62 125,68" fill="#FF6600" />
        <circle cx="108" cy="62" r="2" fill="#333" />
      </g>

      {/* Leaf insect (center-right) */}
      <g>
        <ellipse cx="160" cy="70" rx="16" ry="20" fill="#228B22" transform="rotate(-20 160 70)" />
        <path d="M 155 60 Q 160 55 165 60" stroke="#1a5c1a" strokeWidth="1" fill="none" />
        <path d="M 155 80 Q 160 85 165 80" stroke="#1a5c1a" strokeWidth="1" fill="none" />
      </g>

      {/* Desert plant (right) */}
      <g>
        <polygon points="210,120 205,90 215,90" fill="#90EE90" />
        <rect x="208" y="105" width="4" height="15" fill="#A0826D" />
        <circle cx="205" cy="100" r="3" fill="#228B22" />
        <circle cx="215" cy="100" r="3" fill="#228B22" />
      </g>
    </svg>
  );
}

/** Round 2 SVG: Natural selection — population with variation, arrows showing selection */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="evo_land" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" /><stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="#DAEAF6" />
      <rect y="100" width="240" height="60" fill="url(#evo_land)" />

      {/* Population of animals (before) */}
      <g>
        {/* Tall one */}
        <circle cx="50" cy="75" r="8" fill="#FF6B6B" />
        <rect x="46" y="83" width="8" height="12" fill="#FF6B6B" />

        {/* Medium ones */}
        <circle cx="80" cy="85" r="6" fill="#4ECDC4" />
        <rect x="77" y="91" width="6" height="8" fill="#4ECDC4" />
        <circle cx="110" cy="90" r="6" fill="#4ECDC4" />
        <rect x="107" y="96" width="6" height="8" fill="#4ECDC4" />

        {/* Short one */}
        <circle cx="140" cy="100" r="5" fill="#FFD93D" />
        <rect x="138" y="105" width="5" height="6" fill="#FFD93D" />
      </g>

      {/* Arrow indicating selection */}
      <path d="M 160 80 L 180 80" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#333" />
        </marker>
      </defs>

      {/* Population after selection (tall ones survive, reproduce) */}
      <g>
        <circle cx="190" cy="70" r="8" fill="#FF6B6B" />
        <rect x="186" y="78" width="8" height="12" fill="#FF6B6B" />
        <circle cx="210" cy="75" r="8" fill="#FF6B6B" />
        <rect x="206" y="83" width="8" height="12" fill="#FF6B6B" />
      </g>
    </svg>
  );
}

/** Round 3 SVG: Fossils — layers of rock with fossil shapes */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <pattern id="evo_rock" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#A9A9A9" />
          <circle cx="5" cy="5" r="1.5" fill="#696969" />
          <circle cx="15" cy="10" r="1.5" fill="#696969" />
          <circle cx="10" cy="17" r="1.5" fill="#696969" />
        </pattern>
      </defs>

      {/* Rock layers */}
      <rect y="0" width="240" height="40" fill="#D3D3D3" />
      <rect y="40" width="240" height="40" fill="#A9A9A9" />
      <rect y="80" width="240" height="40" fill="#808080" />
      <rect y="120" width="240" height="40" fill="#696969" />

      {/* Fossils at different levels */}
      {/* Top fossil (newer) */}
      <g>
        <path d="M 50 15 Q 55 10 60 15 Q 58 20 50 18" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      </g>

      {/* Middle fossil */}
      <g>
        <circle cx="120" cy="100" r="6" fill="none" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 115 106 L 120 112" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 125 106 L 120 112" stroke="#FFD700" strokeWidth="1.5" />
      </g>

      {/* Bottom fossil (older, more different) */}
      <g>
        <ellipse cx="180" cy="140" rx="8" ry="6" fill="none" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 172 140 L 165 145" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M 188 140 L 195 145" stroke="#FFD700" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/** Round 4 SVG: Behavior — spider web, birds, learning symbols */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="evo_bg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" /><stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#evo_bg2)" />

      {/* Spider web (instinctive) */}
      <g>
        <circle cx="40" cy="50" r="1" fill="#333" />
        {/* radial lines */}
        <path d="M 40 50 L 40 20" stroke="#DCDCDC" strokeWidth="0.8" />
        <path d="M 40 50 L 60 35" stroke="#DCDCDC" strokeWidth="0.8" />
        <path d="M 40 50 L 65 50" stroke="#DCDCDC" strokeWidth="0.8" />
        <path d="M 40 50 L 60 65" stroke="#DCDCDC" strokeWidth="0.8" />
        <path d="M 40 50 L 40 80" stroke="#DCDCDC" strokeWidth="0.8" />
        {/* concentric circles */}
        <circle cx="40" cy="50" r="12" fill="none" stroke="#DCDCDC" strokeWidth="0.8" />
        <circle cx="40" cy="50" r="8" fill="none" stroke="#DCDCDC" strokeWidth="0.8" />
      </g>

      {/* Bird flying (migration) */}
      <g>
        <ellipse cx="140" cy="50" rx="8" ry="6" fill="#FFB347" />
        <path d="M 132 55 Q 125 48 120 55" stroke="#FFB347" strokeWidth="1.5" fill="none" />
        <path d="M 148 55 Q 155 48 160 55" stroke="#FFB347" strokeWidth="1.5" fill="none" />
        <circle cx="144" cy="48" r="1" fill="#333" />
      </g>

      {/* Learning symbol (light bulb / question mark) */}
      <g>
        <circle cx="210" cy="60" rx="10" ry="12" fill="none" stroke="#FFD700" strokeWidth="2" />
        <rect x="206" y="72" width="8" height="3" fill="#FFD700" />
        <line x1="210" y1="48" x2="210" y2="40" stroke="#FFD700" strokeWidth="1" />
        <line x1="218" y1="55" x2="224" y2="52" stroke="#FFD700" strokeWidth="1" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const evolutionDef: ExplorerDef = {
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
          choices: ["q1_adaptation", "q1_mutation", "q1_variation", "q1_evolution"],
          answer: "q1_adaptation",
        },
        {
          question: "q2_q",
          choices: ["q2_natural", "q2_migration", "q2_mutation", "q2_adaptation"],
          answer: "q2_natural",
        },
        {
          question: "q3_q",
          choices: ["q3_sequence", "q3_climate", "q3_locations", "q3_extinction"],
          answer: "q3_sequence",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component Export
// ─────────────────────────────────────────────────────────────────────────────

export default function EvolutionExplorer({ onDone }: { onDone?: (score: number, total: number) => void }) {
  return <ExplorerEngine def={evolutionDef} color="#D35400" lang="en" onDone={onDone} />;
}
