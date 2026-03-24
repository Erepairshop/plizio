"use client";
// AnimalKingdomExplorer.tsx — Sachkunde Island i2: Animal Kingdom (K3)
// Topics: 1) Állatcsoportok 2) Táplálékháló 3) Rovarok testrészei 4) Pillangó életciklusa 5) Keresd a pillangókat!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Emlős (Medve fej) */}
      <g transform="translate(70, 75)">
        <circle cx="0" cy="0" r="30" fill="#92400E" />
        <circle cx="-25" cy="-25" r="12" fill="#78350F" />
        <circle cx="25" cy="-25" r="12" fill="#78350F" />
        <circle cx="0" cy="10" r="15" fill="#D97706" />
        <circle cx="0" cy="5" r="6" fill="#000" />
        <circle cx="-10" cy="-10" r="4" fill="#000" />
        <circle cx="10" cy="-10" r="4" fill="#000" />
      </g>
      {/* Madár (Kacsa fej) */}
      <g transform="translate(170, 75)">
        <circle cx="0" cy="0" r="28" fill="#10B981" />
        <path d="M 15,-5 Q 40,0 45,10 Q 20,15 10,10 Z" fill="#F59E0B" />
        <circle cx="5" cy="-10" r="4" fill="#000" />
        <circle cx="-5" cy="-10" r="4" fill="#000" />
        <rect x="-15" y="25" width="30" height="10" fill="#FFFFFF" rx="5" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Fű (Termelő) */}
      <g transform="translate(40, 90)">
        <path d="M -10,20 L -20,-10 L 0,20 L 0,-20 L 10,20 L 20,-15 L 20,20 Z" fill="#22C55E" />
      </g>
      {/* Nyíl */}
      <path d="M 65,90 L 95,90" fill="none" stroke="#F59E0B" strokeWidth="4" markerEnd="url(#arrow)" />
      {/* Egér (Elsődleges fogyasztó) */}
      <g transform="translate(120, 90)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#94A3B8" />
        <circle cx="-15" cy="-10" r="8" fill="#64748B" />
        <circle cx="15" cy="0" r="3" fill="#000" />
        <path d="M -18,0 Q -30,-5 -35,5" fill="none" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* Nyíl */}
      <path d="M 145,90 L 175,90" fill="none" stroke="#EF4444" strokeWidth="4" markerEnd="url(#arrow)" />
      {/* Bagoly (Csúcsragadozó) */}
      <g transform="translate(200, 80)">
        <ellipse cx="0" cy="0" rx="15" ry="25" fill="#78350F" />
        <circle cx="-6" cy="-10" r="6" fill="#FDE047" />
        <circle cx="6" cy="-10" r="6" fill="#FDE047" />
        <circle cx="-6" cy="-10" r="2" fill="#000" />
        <circle cx="6" cy="-10" r="2" fill="#000" />
        <polygon points="-4,-2 4,-2 0,4" fill="#F59E0B" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Rovar (Hangya) */}
      <g transform="translate(120, 70) rotate(-15)">
        {/* Lábak */}
        <path d="M -15,0 L -25,-20 M -15,0 L -25,20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 0,0 L 0,-25 M 0,0 L 0,25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 15,0 L 25,-20 M 15,0 L 25,20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        
        {/* Potroh (Abdomen) */}
        <ellipse cx="-25" cy="0" rx="20" ry="14" fill="#1E3A8A" />
        {/* Tor (Thorax) */}
        <ellipse cx="5" cy="0" rx="12" ry="10" fill="#2563EB" />
        {/* Fej (Head) */}
        <circle cx="25" cy="0" r="10" fill="#3B82F6" />
        
        {/* Csápok */}
        <path d="M 30,-5 Q 40,-15 45,-10 M 30,5 Q 40,15 45,10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="-3" r="2" fill="#FFF" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* 1. Pete */}
      <g transform="translate(30, 70)">
        <path d="M -15,0 Q 0,-15 15,0 Q 0,15 -15,0 Z" fill="#22C55E" />
        <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        <circle cx="-5" cy="2" r="2" fill="#FFFFFF" />
        <circle cx="5" cy="-2" r="2.5" fill="#FFFFFF" />
      </g>
      {/* 2. Hernyó */}
      <g transform="translate(90, 70)">
        <circle cx="-15" cy="0" r="6" fill="#84CC16" />
        <circle cx="-5" cy="-3" r="6" fill="#65A30D" />
        <circle cx="5" cy="-3" r="6" fill="#84CC16" />
        <circle cx="15" cy="0" r="7" fill="#4D7C0F" />
        <circle cx="17" cy="-2" r="1.5" fill="#000" />
      </g>
      {/* 3. Báb */}
      <g transform="translate(150, 70)">
        <path d="M 0,-25 L 0,-15" stroke="#78350F" strokeWidth="3" />
        <path d="M -8,-15 C -15,5 15,5 8,-15 Z" fill="#A3E635" />
        <path d="M -8,-15 L 8,-15" stroke="#4D7C0F" strokeWidth="2" />
      </g>
      {/* 4. Pillangó */}
      <g transform="translate(210, 70)">
        <ellipse cx="0" cy="0" rx="3" ry="12" fill="#1E293B" />
        <path d="M 0,-5 Q 15,-20 15,0 Z" fill="#F43F5E" />
        <path d="M 0,5 Q 10,15 12,5 Z" fill="#FB7185" />
        <path d="M 0,-5 Q -15,-20 -15,0 Z" fill="#F43F5E" />
        <path d="M 0,5 Q -10,15 -12,5 Z" fill="#FB7185" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#D1FAE5" rx="20" />
      {/* Háttér erdő/rét (Néhány bokor) */}
      <circle cx="40" cy="120" r="30" fill="#10B981" />
      <circle cx="120" cy="130" r="40" fill="#059669" />
      <circle cx="200" cy="120" r="35" fill="#34D399" />
      <circle cx="20" cy="40" r="20" fill="#6EE7B7" opacity="0.5" />
      <circle cx="220" cy="30" r="25" fill="#6EE7B7" opacity="0.5" />
      
      {/* 5 Elrejtett Pillangó (Kizárólag geometria, amit majd a játék motor tapCount-ja számol!) */}
      {/* A motor a gombra teszi az emojit (🦋) a kattintáskor, a háttér csak dísz */}
      <g transform="translate(30, 30) scale(0.6)">
        <polygon points="0,0 10,-10 10,10" fill="#F472B6" />
        <polygon points="0,0 -10,-10 -10,10" fill="#F472B6" />
      </g>
      <g transform="translate(100, 50) scale(0.5) rotate(45)">
        <polygon points="0,0 10,-10 10,10" fill="#60A5FA" />
        <polygon points="0,0 -10,-10 -10,10" fill="#60A5FA" />
      </g>
      <g transform="translate(180, 25) scale(0.7) rotate(-20)">
        <polygon points="0,0 10,-10 10,10" fill="#FBBF24" />
        <polygon points="0,0 -10,-10 -10,10" fill="#FBBF24" />
      </g>
      <g transform="translate(70, 100) scale(0.4) rotate(15)">
        <polygon points="0,0 10,-10 10,10" fill="#A78BFA" />
        <polygon points="0,0 -10,-10 -10,10" fill="#A78BFA" />
      </g>
      <g transform="translate(190, 90) scale(0.6) rotate(-40)">
        <polygon points="0,0 10,-10 10,10" fill="#F87171" />
        <polygon points="0,0 -10,-10 -10,10" fill="#F87171" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Állatok Országa",
    // T1: Állatcsoportok
    t1_title: "Emlősök és Madarak",
    t1_text: "Az állatokat csoportokba osztjuk. A madaraknak tolluk van és tojást raknak. Az emlősök szőrrel borítottak és kicsinyeket ellenek.",
    t1_b1: "A kutya, a macska és a medve emlős állat.",
    t1_b2: "A kacsa, a sas és a pingvin madár.",
    t1_b3: "A madaraknak csőrük és szárnyuk van.",
    t1_inst: "Emlős vagy Madár? Válogasd szét őket!",
    t1_bucket_emlos: "Emlős (Szőrös)",
    t1_bucket_madar: "Madár (Tollas)",
    t1_item_e1: "Medve", t1_item_e2: "Kutya",
    t1_item_m1: "Kacsa", t1_item_m2: "Sas",
    t1_q: "Mi borítja a madarak testét?",
    t1_q_a: "Toll", t1_q_b: "Szőr", t1_q_c: "Pikkely", t1_q_d: "Páncél",

    // T2: Táplálékháló
    t2_title: "A táplálékháló",
    t2_text: "A természetben az állatok egy hatalmas hálózatban élnek. A növényeket megeszik a növényevők, akiket a ragadozók ejtenek el.",
    t2_b1: "A növények (pl. fű) energiát termelnek a Napból.",
    t2_b2: "A kisállatok (pl. egér) megeszik a növényeket.",
    t2_b3: "A csúcsragadozók (pl. bagoly) vadásznak a kisebb állatokra.",
    t2_inst: "Keresd meg a tápláléklánc szereplőit a képen!",
    t2_area_plant: "Növény (Termelő)",
    t2_area_mouse: "Egér (Fogyasztó)",
    t2_area_owl: "Bagoly (Csúcsragadozó)",
    t2_q: "Kik állnak a tápláléklánc legtetején?",
    t2_q_a: "A csúcsragadozók", t2_q_b: "A növények", t2_q_c: "A bogarak", t2_q_d: "A kövek",

    // T3: Rovarok testrészei (Highlight-text)
    t3_title: "A rovarok titkai",
    t3_text: "Tudtad, hogy minden rovarnak hat lába van? És a testük mindig három fő részre van osztva!",
    t3_b1: "A fejen vannak a csápok és a szemek.",
    t3_b2: "A torhoz csatlakoznak a lábak és a szárnyak.",
    t3_b3: "A potroh a test leghátsó, legnagyobb része.",
    t3_inst: "Keresd meg és jelöld meg a mondatban a HÁROM testrészt!",
    t3_tok0: "A", t3_tok1: "rovarok", t3_tok2: "három", t3_tok3: "része:", t3_tok4: "fej,", t3_tok5: "a", t3_tok6: "tor,", t3_tok7: "és", t3_tok8: "potroh.",
    t3_q: "Hány lába van egy rovarnak (pl. a hangyának)?",
    t3_q_a: "Hat lába", t3_q_b: "Négy lába", t3_q_c: "Nyolc lába", t3_q_d: "Száz lába",

    // T4: Pillangó életciklusa
    t4_title: "A pillangó varázslata",
    t4_text: "A pillangók nem pillangóként születnek! Életük során csodálatos átalakuláson mennek keresztül, amit metamorfózisnak hívunk.",
    t4_b1: "A falevélen lévő apró petéből kis hernyó kel ki.",
    t4_b2: "A hernyó sokat eszik, majd bebábozódik.",
    t4_b3: "A bábból végül egy gyönyörű pillangó bújik elő.",
    t4_inst: "Tedd helyes sorrendbe a pillangó életciklusát!",
    t4_w1: "Pete", t4_w2: "Hernyó", t4_w3: "Báb", t4_w4: "Pillangó",
    t4_q: "Mi lesz a hernyóból, miután eleget evett?",
    t4_q_a: "Báb", t4_q_b: "Hal", t4_q_c: "Madár", t4_q_d: "Csiga",

    // T5: Keresd a pillangókat (Tap-count)
    t5_title: "Pillangó vadászat",
    t5_text: "A réten rengeteg színes pillangó repked a virágok között. Némelyik nagyon jól el tud bújni!",
    t5_b1: "A pillangók a virágok nektárjával táplálkoznak.",
    t5_b2: "A szárnyaik nagyon sérülékenyek.",
    t5_b3: "Nézz jól körül a képen!",
    t5_inst: "Keresd meg és bökj rá az 5 darab pillangóra a képen!",
    t5_q: "Mivel táplálkoznak a pillangók?",
    t5_q_a: "A virágok nektárjával", t5_q_b: "Falevelekkel", t5_q_c: "Kisebb bogarakkal", t5_q_d: "Fűvel",
  },
  en: {
    explorer_title: "The Animal Kingdom",
    t1_title: "Mammals and Birds", t1_text: "Animals are divided into groups. Birds have feathers and lay eggs. Mammals have fur and give birth to live babies.",
    t1_b1: "Dogs, cats, and bears are mammals.", t1_b2: "Ducks, eagles, and penguins are birds.", t1_b3: "Birds have a beak and wings.",
    t1_inst: "Mammal or Bird? Sort them out!",
    t1_bucket_emlos: "Mammal (Fur)",
    t1_bucket_madar: "Bird (Feathers)",
    t1_item_e1: "Bear", t1_item_e2: "Dog",
    t1_item_m1: "Duck", t1_item_m2: "Eagle",
    t1_q: "What covers the body of a bird?",
    t1_q_a: "Feathers", t1_q_b: "Fur", t1_q_c: "Scales", t1_q_d: "Armor",

    t2_title: "The Food Web", t2_text: "In nature, animals live in a huge network. Plants are eaten by herbivores, who are caught by predators.",
    t2_b1: "Plants (like grass) produce energy from the Sun.", t2_b2: "Small animals (like mice) eat the plants.", t2_b3: "Apex predators (like owls) hunt smaller animals.",
    t2_inst: "Find the members of the food chain in the picture!",
    t2_area_plant: "Plant (Producer)",
    t2_area_mouse: "Mouse (Consumer)",
    t2_area_owl: "Owl (Apex Predator)",
    t2_q: "Who is at the very top of the food chain?",
    t2_q_a: "The apex predators", t2_q_b: "The plants", t2_q_c: "The bugs", t2_q_d: "The rocks",

    t3_title: "Insect Secrets", t3_text: "Did you know every insect has six legs? And their bodies are always divided into three main parts!",
    t3_b1: "The head has the antennae and eyes.", t3_b2: "The thorax connects the legs and wings.", t3_b3: "The abdomen is the largest, back part.",
    t3_inst: "Find and mark the THREE body parts in the sentence!",
    t3_tok0: "The", t3_tok1: "three", t3_tok2: "insect", t3_tok3: "parts:", t3_tok4: "head,", t3_tok5: "a", t3_tok6: "thorax,", t3_tok7: "and", t3_tok8: "abdomen.",
    t3_q: "How many legs does an insect (like an ant) have?",
    t3_q_a: "Six legs", t3_q_b: "Four legs", t3_q_c: "Eight legs", t3_q_d: "A hundred legs",

    t4_title: "Butterfly Magic", t4_text: "Butterflies are not born as butterflies! They go through an amazing change called metamorphosis.",
    t4_b1: "A tiny caterpillar hatches from an egg on a leaf.", t4_b2: "The caterpillar eats a lot, then becomes a chrysalis (pupa).", t4_b3: "Finally, a beautiful butterfly emerges.",
    t4_inst: "Put the butterfly's life cycle in the correct order!",
    t4_w1: "Egg", t4_w2: "Caterpillar", t4_w3: "Chrysalis (Pupa)", t4_w4: "Butterfly",
    t4_q: "What does a caterpillar become after eating enough?",
    t4_q_a: "A chrysalis", t4_q_b: "A fish", t4_q_c: "A bird", t4_q_d: "A snail",

    t5_title: "Butterfly Hunt", t5_text: "Many colorful butterflies are flying in the meadow. Some can hide very well!",
    t5_b1: "Butterflies feed on flower nectar.", t5_b2: "Their wings are very fragile.", t5_b3: "Look closely at the picture!",
    t5_inst: "Find and tap the 5 butterflies in the picture!",
    t5_q: "What do butterflies feed on?",
    t5_q_a: "Flower nectar", t5_q_b: "Tree leaves", t5_q_c: "Smaller bugs", t5_q_d: "Grass",
  },
  de: {
    explorer_title: "Das Tierreich",
    t1_title: "Säugetiere und Vögel", t1_text: "Tiere werden in Gruppen eingeteilt. Vögel haben Federn und legen Eier. Säugetiere haben Fell und bekommen lebende Babys.",
    t1_b1: "Hunde, Katzen und Bären sind Säugetiere.", t1_b2: "Enten, Adler und Pinguine sind Vögel.", t1_b3: "Vögel haben einen Schnabel und Flügel.",
    t1_inst: "Säugetier oder Vogel? Sortiere sie!",
    t1_bucket_emlos: "Säugetier (Fell)",
    t1_bucket_madar: "Vogel (Federn)",
    t1_item_e1: "Bär", t1_item_e2: "Hund",
    t1_item_m1: "Ente", t1_item_m2: "Adler",
    t1_q: "Womit ist der Körper eines Vogels bedeckt?",
    t1_q_a: "Mit Federn", t1_q_b: "Mit Fell", t1_q_c: "Mit Schuppen", t1_q_d: "Mit Panzer",

    t2_title: "Das Nahrungsnetz", t2_text: "In der Natur leben Tiere in einem riesigen Netz. Pflanzen werden von Pflanzenfressern gegessen, die von Raubtieren gejagt werden.",
    t2_b1: "Pflanzen (z.B. Gras) machen Energie aus der Sonne.", t2_b2: "Kleine Tiere (z.B. Mäuse) fressen die Pflanzen.", t2_b3: "Spitzenprädatoren (z.B. Eulen) jagen kleinere Tiere.",
    t2_inst: "Finde die Mitglieder der Nahrungskette im Bild!",
    t2_area_plant: "Pflanze (Erzeuger)",
    t2_area_mouse: "Maus (Verbraucher)",
    t2_area_owl: "Eule (Spitzenprädator)",
    t2_q: "Wer steht ganz oben in der Nahrungskette?",
    t2_q_a: "Die Spitzenprädatoren", t2_q_b: "Die Pflanzen", t2_q_c: "Die Käfer", t2_q_d: "Die Steine",

    t3_title: "Insekten-Geheimnisse", t3_text: "Wusstest du, dass jedes Insekt sechs Beine hat? Und ihr Körper ist immer in drei Hauptteile geteilt!",
    t3_b1: "Am Kopf sind die Fühler und Augen.", t3_b2: "An der Brust sind die Beine und Flügel befestigt.", t3_b3: "Der Hinterleib ist der größte Teil hinten.",
    t3_inst: "Finde und markiere die DREI Körperteile im Satz!",
    t3_tok0: "Die", t3_tok1: "drei", t3_tok2: "Teile", t3_tok3: "sind:", t3_tok4: "Kopf,", t3_tok5: "die", t3_tok6: "Brust,", t3_tok7: "und", t3_tok8: "Hinterleib.",
    t3_q: "Wie viele Beine hat ein Insekt (z.B. eine Ameise)?",
    t3_q_a: "Sechs Beine", t3_q_b: "Vier Beine", t3_q_c: "Acht Beine", t3_q_d: "Hundert Beine",

    t4_title: "Schmetterlings-Magie", t4_text: "Schmetterlinge werden nicht als Schmetterlinge geboren! Sie machen eine Metamorphose durch.",
    t4_b1: "Aus einem kleinen Ei schlüpft eine Raupe.", t4_b2: "Die Raupe frisst viel und verpuppt sich.", t4_b3: "Schließlich schlüpft ein schöner Schmetterling.",
    t4_inst: "Bringe den Lebenszyklus des Schmetterlings in die richtige Reihenfolge!",
    t4_w1: "Ei", t4_w2: "Raupe", t4_w3: "Puppe", t4_w4: "Schmetterling",
    t4_q: "Was wird aus der Raupe, wenn sie genug gegessen hat?",
    t4_q_a: "Eine Puppe", t4_q_b: "Ein Fisch", t4_q_c: "Ein Vogel", t4_q_d: "Eine Schnecke",

    t5_title: "Schmetterlingsjagd", t5_text: "Viele bunte Schmetterlinge fliegen über die Wiese. Manche können sich sehr gut verstecken!",
    t5_b1: "Schmetterlinge ernähren sich von Blumennektar.", t5_b2: "Ihre Flügel sind sehr empfindlich.", t5_b3: "Schau dir das Bild genau an!",
    t5_inst: "Finde und tippe auf die 5 Schmetterlinge im Bild!",
    t5_q: "Wovon ernähren sich Schmetterlinge?",
    t5_q_a: "Vom Nektar der Blumen", t5_q_b: "Von Baumblättern", t5_q_c: "Von kleineren Käfern", t5_q_d: "Von Gras",
  },
  ro: {
    explorer_title: "Regnul Animal",
    t1_title: "Mamifere și Păsări", t1_text: "Animalele sunt împărțite în grupuri. Păsările au pene și fac ouă. Mamiferele au blană și nasc pui vii.",
    t1_b1: "Câinii, pisicile și urșii sunt mamifere.", t1_b2: "Rațele, vulturii și pinguinii sunt păsări.", t1_b3: "Păsările au cioc și aripi.",
    t1_inst: "Mamifer sau Pasăre? Sortează-le!",
    t1_bucket_emlos: "Mamifer (Cu blană)",
    t1_bucket_madar: "Pasăre (Cu pene)",
    t1_item_e1: "Urs", t1_item_e2: "Câine",
    t1_item_m1: "Rață", t1_item_m2: "Vultur",
    t1_q: "Cu ce este acoperit corpul unei păsări?",
    t1_q_a: "Cu pene", t1_q_b: "Cu blană", t1_q_c: "Cu solzi", t1_q_d: "Cu armură",

    t2_title: "Rețeaua trofică", t2_text: "În natură, animalele trăiesc într-o rețea uriașă. Plantele sunt mâncate de erbivore, care sunt prinse de prădători.",
    t2_b1: "Plantele (ex. iarba) produc energie de la Soare.", t2_b2: "Animalele mici (ex. șoarecele) mănâncă plantele.", t2_b3: "Prădătorii de top (ex. bufnița) vânează animale mai mici.",
    t2_inst: "Găsește membrii lanțului trofic din imagine!",
    t2_area_plant: "Plantă (Producător)",
    t2_area_mouse: "Șoarece (Consumator)",
    t2_area_owl: "Bufniță (Prădător de top)",
    t2_q: "Cine se află chiar în vârful lanțului trofic?",
    t2_q_a: "Prădătorii de top", t2_q_b: "Plantele", t2_q_c: "Gândacii", t2_q_d: "Pietrele",

    t3_title: "Secretele insectelor", t3_text: "Știai că fiecare insectă are șase picioare? Și corpul lor este mereu împărțit în trei părți principale!",
    t3_b1: "Capul are antene și ochi.", t3_b2: "Toracele leagă picioarele și aripile.", t3_b3: "Abdomenul este cea mai mare parte, din spate.",
    t3_inst: "Găsește și marchează cele TREI părți ale corpului în propoziție!",
    t3_tok0: "Cele", t3_tok1: "trei", t3_tok2: "părți", t3_tok3: "sunt:", t3_tok4: "capul,", t3_tok5: "un", t3_tok6: "torace,", t3_tok7: "și", t3_tok8: "abdomen.",
    t3_q: "Câte picioare are o insectă (de exemplu, o furnică)?",
    t3_q_a: "Șase picioare", t3_q_b: "Patru picioare", t3_q_c: "Opt picioare", t3_q_d: "O sută de picioare",

    t4_title: "Magia fluturilor", t4_text: "Fluturii nu se nasc ca fluturi! Ei trec printr-o schimbare uimitoare numită metamorfoză.",
    t4_b1: "O omidă mică iese dintr-un ou pe o frunză.", t4_b2: "Omida mănâncă mult, apoi devine o crisalidă (pupă).", t4_b3: "În final, apare un fluture frumos.",
    t4_inst: "Pune ciclul de viață al fluturelui în ordinea corectă!",
    t4_w1: "Ou", t4_w2: "Omidă", t4_w3: "Pupă", t4_w4: "Fluture",
    t4_q: "În ce se transformă omida după ce a mâncat destul?",
    t4_q_a: "Într-o pupă (crisalidă)", t4_q_b: "Într-un pește", t4_q_c: "Într-o pasăre", t4_q_d: "Într-un melc",

    t5_title: "Vânătoarea de fluturi", t5_text: "Mulți fluturi colorați zboară pe pajiște. Unii se pot ascunde foarte bine!",
    t5_b1: "Fluturii se hrănesc cu nectarul florilor.", t5_b2: "Aripile lor sunt foarte fragile.", t5_b3: "Privește cu atenție imaginea!",
    t5_inst: "Găsește și apasă pe cei 5 fluturi din imagine!",
    t5_q: "Cu ce se hrănesc fluturii?",
    t5_q_a: "Cu nectarul florilor", t5_q_b: "Cu frunzele copacilor", t5_q_c: "Cu gândaci mai mici", t5_q_d: "Cu iarbă",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "emlos", label: "t1_bucket_emlos" },
        { id: "madar", label: "t1_bucket_madar" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "emlos" },
        { text: "t1_item_m1", bucketId: "madar" },
        { text: "t1_item_e2", bucketId: "emlos" },
        { text: "t1_item_m2", bucketId: "madar" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "plant", x: 20, y: 70, label: "t2_area_plant" },
        { id: "mouse", x: 50, y: 70, label: "t2_area_mouse" },
        { id: "owl",   x: 85, y: 60, label: "t2_area_owl" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [4, 6, 8], // fej, tor, potroh (mind a 4 nyelvnél tökéletesen ezekre az indexekre esnek a kulcsszavak a fordításokban!)
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b3",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b3",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🦋", count: 5 }, // A játékmotor innen veszi az emojit a gombhoz
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🦁",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AnimalKingdomExplorer = memo(function AnimalKingdomExplorer({
  color = "#D97706", // Amber-600 az oroszlán és állatok miatt
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={3} 
      explorerId="sachkunde_k3_animal_kingdom" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default AnimalKingdomExplorer;
