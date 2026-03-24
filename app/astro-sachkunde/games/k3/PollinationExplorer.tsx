"use client";
// PollinationExplorer.tsx — Sachkunde Island i4: Plants & Pollination (K3)
// Topics: 1) Virág részei 2) Fotoszintézis 3) Beporzás 4) Magok utazása 5) Keresd a méheket!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF4FF" rx="20" />
      <g transform="translate(120, 95)">
        {/* Szár */}
        <rect x="-3" y="-55" width="6" height="55" fill="#16A34A" />
        {/* Levél */}
        <path d="M 3,-30 Q 30,-40 40,-20 Q 20,-10 3,-30 Z" fill="#22C55E" />
        <path d="M -3,-40 Q -30,-50 -40,-30 Q -20,-20 -3,-40 Z" fill="#22C55E" />
        {/* Virágszirmok */}
        <g transform="translate(0, -60)">
          <ellipse cx="0" cy="-15" rx="8" ry="18" fill="#F472B6" />
          <ellipse cx="0" cy="15" rx="8" ry="18" fill="#F472B6" />
          <ellipse cx="-15" cy="0" rx="18" ry="8" fill="#F472B6" />
          <ellipse cx="15" cy="0" rx="18" ry="8" fill="#F472B6" />
          <ellipse cx="-10" cy="-10" rx="12" ry="12" fill="#F9A8D4" />
          <ellipse cx="10" cy="10" rx="12" ry="12" fill="#F9A8D4" />
          <ellipse cx="-10" cy="10" rx="12" ry="12" fill="#F9A8D4" />
          <ellipse cx="10" cy="-10" rx="12" ry="12" fill="#F9A8D4" />
          {/* Középső rész (Porzó/Bibe) */}
          <circle cx="0" cy="0" r="10" fill="#FBBF24" />
          <circle cx="0" cy="0" r="6" fill="#F59E0B" />
        </g>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Nagy levél */}
      <g transform="translate(120, 70)">
        <path d="M -40,0 Q 0,-40 40,0 Q 0,40 -40,0 Z" fill="#22C55E" />
        <line x1="-35" y1="0" x2="35" y2="0" stroke="#16A34A" strokeWidth="2" />
        <line x1="-10" y1="0" x2="10" y2="-15" stroke="#16A34A" strokeWidth="2" />
        <line x1="10" y1="0" x2="25" y2="-10" stroke="#16A34A" strokeWidth="2" />
      </g>
      {/* Napfény befelé */}
      <g transform="translate(40, 30)">
        <circle cx="0" cy="0" r="12" fill="#FBBF24" />
        <path d="M 15,10 L 40,25" fill="none" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrow)" />
      </g>
      {/* Víz befelé */}
      <g transform="translate(40, 110)">
        <path d="M 0,-10 Q 8,5 0,10 Q -8,5 0,-10 Z" fill="#3B82F6" />
        <path d="M 15,-10 L 40,-25" fill="none" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrow)" />
      </g>
      {/* Oxigén kifelé */}
      <g transform="translate(200, 70)">
        <circle cx="0" cy="0" r="15" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="2" />
        <path d="M -40,0 L -20,0" fill="none" stroke="#7DD3FC" strokeWidth="3" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* Két virág */}
      <g transform="translate(50, 90)">
        <rect x="-2" y="0" width="4" height="40" fill="#16A34A" />
        <circle cx="0" cy="0" r="15" fill="#FDE047" />
        <circle cx="0" cy="0" r="8" fill="#F59E0B" />
      </g>
      <g transform="translate(190, 90)">
        <rect x="-2" y="0" width="4" height="40" fill="#16A34A" />
        <circle cx="0" cy="0" r="15" fill="#FBCFE8" />
        <circle cx="0" cy="0" r="8" fill="#F472B6" />
      </g>
      {/* Geometriai méhecske száll a virágporral */}
      <g transform="translate(120, 40)">
        <path d="M -15,0 Q -25,-15 -10,-10 Z" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
        <path d="M -5,0 Q 5,-15 10,-10 Z" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#FBBF24" />
        <rect x="-4" y="-7" width="3" height="14" fill="#000" />
        <rect x="4" y="-7" width="3" height="14" fill="#000" />
        <circle cx="10" cy="-2" r="1.5" fill="#000" />
        {/* Virágpor (Pollen) pöttyök */}
        <circle cx="-5" cy="12" r="2" fill="#D97706" />
        <circle cx="0" cy="15" r="2" fill="#D97706" />
        <circle cx="5" cy="12" r="2" fill="#D97706" />
      </g>
      {/* Röppálya */}
      <path d="M 60,70 Q 120,20 180,70" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3F4F6" rx="20" />
      {/* Pitypang (Szél) */}
      <g transform="translate(60, 70)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#16A34A" strokeWidth="2" />
        <circle cx="0" cy="0" r="10" fill="#E2E8F0" />
        <path d="M 0,0 L 15,-15 M 0,0 L 20,-5 M 0,0 L 10,-20" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="20" cy="-15" r="2" fill="#94A3B8" />
        <circle cx="25" cy="-5" r="2" fill="#94A3B8" />
      </g>
      {/* Málna/Bogyó (Állatok) */}
      <g transform="translate(120, 70)">
        <circle cx="-5" cy="0" r="6" fill="#EF4444" />
        <circle cx="5" cy="0" r="6" fill="#EF4444" />
        <circle cx="0" cy="-8" r="6" fill="#EF4444" />
        <path d="M 0,-15 L 0,-25 Q 5,-25 5,-20" fill="none" stroke="#16A34A" strokeWidth="2" />
      </g>
      {/* Kókusz (Víz) */}
      <g transform="translate(180, 70)">
        <path d="M -20,10 Q 0,20 20,10" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#78350F" />
        <circle cx="-3" cy="-3" r="1.5" fill="#451A03" />
        <circle cx="3" cy="-3" r="1.5" fill="#451A03" />
        <circle cx="0" cy="2" r="1.5" fill="#451A03" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Virágos rét (dekoráció a tap-count mögé) */}
      <circle cx="50" cy="100" r="15" fill="#FDE047" opacity="0.6" />
      <circle cx="150" cy="50" r="12" fill="#FBCFE8" opacity="0.6" />
      <circle cx="200" cy="110" r="18" fill="#BFDBFE" opacity="0.6" />
      <circle cx="90" cy="40" r="10" fill="#C4B5FD" opacity="0.6" />
      
      {/* A méheket (🐝) a játékmotor teszi rá gombként, ez csak a rét alapja. */}
      <path d="M 0,120 Q 60,90 120,130 T 240,110 L 240,140 L 0,140 Z" fill="#A3E635" opacity="0.4" />
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Növények és Beporzás",
    // T1: Virág részei
    t1_title: "A virág anatómiája",
    t1_text: "A virágok nemcsak szépek, hanem fontos szerepük van a növény szaporodásában. A színes szirmok vonzzák a rovarokat.",
    t1_b1: "A szirmok színesek és illatosak.",
    t1_b2: "A virág közepén található a porzó, rajta a virágporral.",
    t1_b3: "A szár tartja a virágot, a levél pedig napfényt gyűjt.",
    t1_inst: "Keresd meg a virág részeit az ábrán!",
    t1_area_petal: "Szirmok",
    t1_area_center: "Porzó (Közép)",
    t1_area_stem: "Szár",
    t1_area_leaf: "Levél",
    t1_q: "Miért színesek és illatosak a virág szirmai?",
    t1_q_a: "Hogy odavonzzák a rovarokat", t1_q_b: "Hogy megijesszék az állatokat", t1_q_c: "Hogy esőt csináljanak", t1_q_d: "Nincs különösebb oka",

    // T2: Fotoszintézis
    t2_title: "A növények konyhája",
    t2_text: "A növények saját maguknak készítik az ételt! Ezt a csodát fotoszintézisnek hívják.",
    t2_b1: "A növénynek napfényre, vízre és szén-dioxidra van szüksége.",
    t2_b2: "Ezekből cukrot készít magának, hogy nőni tudjon.",
    t2_b3: "Közben pedig friss oxigént bocsát ki a levegőbe nekünk!",
    t2_inst: "Mit használ fel a növény, és mit ad nekünk?",
    t2_bucket_needs: "A növénynek KELL",
    t2_bucket_gives: "A növény ADJA",
    t2_item_n1: "Napfény", t2_item_n2: "Víz",
    t2_item_g1: "Oxigén (Friss levegő)", t2_item_g2: "Cukor (Élelem)",
    t2_q: "Mi az a fontos gáz, amit a növények termelnek, és amit mi belélegzünk?",
    t2_q_a: "Az oxigén", t2_q_b: "A szén-dioxid", t2_q_c: "A füst", t2_q_d: "A pára",

    // T3: Beporzás (Highlight-text) - Cél index: [1, 3] -> méhek, virágpor
    t3_title: "A beporzás varázslata",
    t3_text: "Ahhoz, hogy a virágból termés és mag legyen, a virágpornak el kell jutnia az egyik virágról a másikra.",
    t3_b1: "A méhek a nektárt keresik a virágokon.",
    t3_b2: "Közben a virágpor ráragad a szőrös testükre.",
    t3_b3: "Amikor átmennek a következő virágra, beporozzák azt.",
    t3_inst: "Keresd meg és jelöld meg a MONDATBAN a rovart és amit szállít!",
    t3_tok0: "A", t3_tok1: "méhek", t3_tok2: "a", t3_tok3: "virágpor", t3_tok4: "szállításával", t3_tok5: "segítenek.",
    t3_q: "Mi ragad a méhecske testére, amikor a virágokon mászkál?",
    t3_q_a: "A virágpor (pollen)", t3_q_b: "A víz", t3_q_c: "A levél", t3_q_d: "A föld",

    // T4: Magok utazása
    t4_title: "Az utazó magok",
    t4_text: "Ha a magok mindig a nagy fa alá esnének, nem lenne helyük nőni. Ezért messzire kell utazniuk!",
    t4_b1: "A pitypang magjait a szél fújja el messzire.",
    t4_b2: "A finom bogyókat az állatok megeszik és elviszik.",
    t4_b3: "A kókuszdió a tenger vizén ringatózva utazik új szigetekre.",
    t4_inst: "Párosítsd a magot azzal, ahogyan utazik!",
    t4_l1: "Pitypang", t4_r1: "A szél fújja",
    t4_l2: "Málna/Bogyó", t4_r2: "Az állatok viszik",
    t4_l3: "Kókuszdió", t4_r3: "A víz úsztatja",
    t4_q: "Hogyan utazik a pitypang (gyermekláncfű) magja?",
    t4_q_a: "A szél fújja el kis ejtőernyőkkel", t4_q_b: "A víz sodorja el", t4_q_c: "A madarak viszik el a csőrükben", t4_q_d: "A mókusok ássák el",

    // T5: Keresd a méheket (Tap-count)
    t5_title: "A szorgos méhek",
    t5_text: "Tavasszal a rét tele van zümmögő méhekkel. Nagyon fontos munkát végeznek a természetben!",
    t5_b1: "A méhek nélkül sokkal kevesebb gyümölcsünk lenne.",
    t5_b2: "Óvjuk a méheket, ne bántsuk őket!",
    t5_b3: "Nézz körül a réten, és számold meg őket!",
    t5_inst: "A réten 5 méhecske gyűjti a nektárt. Bökj rájuk, hogy megszámold őket!",
    t5_q: "Mi történne, ha eltűnnének a méhek?",
    t5_q_a: "Sokkal kevesebb gyümölcsünk és zöldségünk lenne", t5_q_b: "Több almánk lenne", t5_q_c: "Télen is meleg lenne", t5_q_d: "Semmi nem változna",
  },
  en: {
    explorer_title: "Plants & Pollination",
    t1_title: "Anatomy of a Flower", t1_text: "Flowers are not only pretty, they play a key role in plant reproduction. Colorful petals attract insects.",
    t1_b1: "The petals are colorful and smell nice.", t1_b2: "In the center is the stamen with pollen.", t1_b3: "The stem holds the flower, the leaf catches sun.",
    t1_inst: "Find the parts of the flower on the diagram!",
    t1_area_petal: "Petals", t1_area_center: "Center (Pollen)", t1_area_stem: "Stem", t1_area_leaf: "Leaf",
    t1_q: "Why are flower petals colorful and fragrant?",
    t1_q_a: "To attract insects", t1_q_b: "To scare animals away", t1_q_c: "To make it rain", t1_q_d: "For no particular reason",

    t2_title: "Plant Kitchen", t2_text: "Plants make their own food! This miracle is called photosynthesis.",
    t2_b1: "Plants need sunlight, water, and carbon dioxide.", t2_b2: "They use these to make sugar to grow.", t2_b3: "Meanwhile, they release fresh oxygen into the air for us!",
    t2_inst: "What does the plant use, and what does it give us?",
    t2_bucket_needs: "Plant NEEDS",
    t2_bucket_gives: "Plant GIVES",
    t2_item_n1: "Sunlight", t2_item_n2: "Water",
    t2_item_g1: "Oxygen (Fresh air)", t2_item_g2: "Sugar (Food)",
    t2_q: "What is the important gas that plants produce and we breathe?",
    t2_q_a: "Oxygen", t2_q_b: "Carbon dioxide", t2_q_c: "Smoke", t2_q_d: "Vapor",

    // Cél: [1, 3] -> bees, pollen
    t3_title: "The Magic of Pollination", t3_text: "For a flower to become fruit and seed, pollen must travel from one flower to another.",
    t3_b1: "Bees look for nectar in flowers.", t3_b2: "Meanwhile, pollen sticks to their fuzzy bodies.", t3_b3: "When they visit the next flower, they pollinate it.",
    t3_inst: "Find and mark the insect and what it carries in the sentence!",
    t3_tok0: "The", t3_tok1: "bees", t3_tok2: "carry", t3_tok3: "pollen", t3_tok4: "to", t3_tok5: "help.",
    t3_q: "What sticks to the bee's body when it crawls on flowers?",
    t3_q_a: "Pollen", t3_q_b: "Water", t3_q_c: "Leaves", t3_q_d: "Dirt",

    t4_title: "Traveling Seeds", t4_text: "If seeds always fell under the big tree, they wouldn't have room to grow. They must travel far!",
    t4_b1: "Dandelion seeds are blown away by the wind.", t4_b2: "Tasty berries are eaten and carried by animals.", t4_b3: "Coconuts travel on the sea to new islands.",
    t4_inst: "Match the seed with how it travels!",
    t4_l1: "Dandelion", t4_r1: "Blown by wind",
    t4_l2: "Berry", t4_r2: "Carried by animals",
    t4_l3: "Coconut", t4_r3: "Floats on water",
    t4_q: "How does the dandelion seed travel?",
    t4_q_a: "Blown by the wind with tiny parachutes", t4_q_b: "Washed away by water", t4_q_c: "Carried by birds in their beaks", t4_q_d: "Squirrels bury it",

    t5_title: "Busy Bees", t5_text: "In spring, the meadow is full of buzzing bees. They do a very important job in nature!",
    t5_b1: "Without bees, we would have much less fruit.", t5_b2: "Protect the bees, do not hurt them!", t5_b3: "Look around the meadow and count them!",
    t5_inst: "There are 5 bees collecting nectar. Tap them to count!",
    t5_q: "What would happen if bees disappeared?",
    t5_q_a: "We would have much less fruit and vegetables", t5_q_b: "We would have more apples", t5_q_c: "It would be warm in winter", t5_q_d: "Nothing would change",
  },
  de: {
    explorer_title: "Pflanzen & Bestäubung",
    t1_title: "Anatomie der Blume", t1_text: "Blumen sind nicht nur schön, sie sind wichtig für die Fortpflanzung. Bunte Blütenblätter locken Insekten an.",
    t1_b1: "Die Blütenblätter sind bunt und duften.", t1_b2: "In der Mitte ist der Staubbeutel mit Pollen.", t1_b3: "Der Stängel hält die Blume, das Blatt fängt Sonne.",
    t1_inst: "Finde die Teile der Blume auf dem Bild!",
    t1_area_petal: "Blütenblätter", t1_area_center: "Mitte (Pollen)", t1_area_stem: "Stängel", t1_area_leaf: "Blatt",
    t1_q: "Warum sind Blütenblätter bunt und duften?",
    t1_q_a: "Um Insekten anzulocken", t1_q_b: "Um Tiere zu erschrecken", t1_q_c: "Um Regen zu machen", t1_q_d: "Ohne Grund",

    t2_title: "Pflanzen-Küche", t2_text: "Pflanzen machen ihr Essen selbst! Dieses Wunder nennt man Photosynthese.",
    t2_b1: "Pflanzen brauchen Sonnenlicht, Wasser und Kohlendioxid.", t2_b2: "Daraus machen sie Zucker zum Wachsen.", t2_b3: "Dabei geben sie frischen Sauerstoff für uns ab!",
    t2_inst: "Was braucht die Pflanze und was gibt sie uns?",
    t2_bucket_needs: "Pflanze BRAUCHT",
    t2_bucket_gives: "Pflanze GIBT",
    t2_item_n1: "Sonnenlicht", t2_item_n2: "Wasser",
    t2_item_g1: "Sauerstoff (Luft)", t2_item_g2: "Zucker (Essen)",
    t2_q: "Welches wichtige Gas produzieren Pflanzen, das wir einatmen?",
    t2_q_a: "Sauerstoff", t2_q_b: "Kohlendioxid", t2_q_c: "Rauch", t2_q_d: "Dampf",

    // Cél: [1, 3] -> Bienen, Pollen
    t3_title: "Die Magie der Bestäubung", t3_text: "Damit aus einer Blume eine Frucht wird, müssen Pollen von einer Blume zur anderen reisen.",
    t3_b1: "Bienen suchen Nektar in den Blumen.", t3_b2: "Dabei kleben Pollen an ihrem pelzigen Körper.", t3_b3: "Wenn sie zur nächsten Blume fliegen, bestäuben sie diese.",
    t3_inst: "Finde und markiere das Insekt und was es trägt im Satz!",
    t3_tok0: "Die", t3_tok1: "Bienen", t3_tok2: "tragen", t3_tok3: "Pollen", t3_tok4: "zum", t3_tok5: "Helfen.",
    t3_q: "Was klebt am Körper der Biene, wenn sie auf Blumen klettert?",
    t3_q_a: "Pollen (Blütenstaub)", t3_q_b: "Wasser", t3_q_c: "Blätter", t3_q_d: "Erde",

    t4_title: "Reisende Samen", t4_text: "Wenn Samen immer unter den Baum fallen würden, hätten sie keinen Platz zum Wachsen. Sie müssen weit reisen!",
    t4_b1: "Die Samen des Löwenzahns werden vom Wind verweht.", t4_b2: "Leckere Beeren werden von Tieren gegessen und weggetragen.", t4_b3: "Kokosnüsse schwimmen auf dem Meer zu neuen Inseln.",
    t4_inst: "Verbinde den Samen mit seiner Art zu reisen!",
    t4_l1: "Löwenzahn", t4_r1: "Vom Wind verweht",
    t4_l2: "Beere", t4_r2: "Von Tieren getragen",
    t4_l3: "Kokosnuss", t4_r3: "Schwimmt auf Wasser",
    t4_q: "Wie reist der Same des Löwenzahns?",
    t4_q_a: "Der Wind weht ihn mit kleinen Fallschirmen weg", t4_q_b: "Das Wasser spült ihn weg", t4_q_c: "Vögel tragen ihn", t4_q_d: "Eichhörnchen vergraben ihn",

    t5_title: "Fleißige Bienen", t5_text: "Im Frühling ist die Wiese voller summender Bienen. Sie leisten sehr wichtige Arbeit!",
    t5_b1: "Ohne Bienen hätten wir viel weniger Obst.", t5_b2: "Schütze die Bienen, tu ihnen nicht weh!", t5_b3: "Schau dich um und zähle sie!",
    t5_inst: "Auf der Wiese sammeln 5 Bienen Nektar. Tippe sie an, um sie zu zählen!",
    t5_q: "Was würde passieren, wenn die Bienen verschwinden?",
    t5_q_a: "Wir hätten viel weniger Obst und Gemüse", t5_q_b: "Wir hätten mehr Äpfel", t5_q_c: "Es wäre im Winter warm", t5_q_d: "Nichts würde sich ändern",
  },
  ro: {
    explorer_title: "Plante și Polenizare",
    t1_title: "Anatomia florii", t1_text: "Florile nu sunt doar frumoase, au un rol important în înmulțirea plantelor. Petalele colorate atrag insectele.",
    t1_b1: "Petalele sunt colorate și miros frumos.", t1_b2: "În mijloc se află staminele cu polen.", t1_b3: "Tulpina ține floarea, frunza adună lumina.",
    t1_inst: "Găsește părțile florii pe desen!",
    t1_area_petal: "Petale", t1_area_center: "Mijloc (Polen)", t1_area_stem: "Tulpină", t1_area_leaf: "Frunză",
    t1_q: "De ce sunt petalele colorate și parfumate?",
    t1_q_a: "Pentru a atrage insectele", t1_q_b: "Pentru a speria animalele", t1_q_c: "Pentru a aduce ploaia", t1_q_d: "Fără niciun motiv",

    t2_title: "Bucătăria plantei", t2_text: "Plantele își fac singure mâncarea! Această minune se numește fotosinteză.",
    t2_b1: "Plantele au nevoie de lumină, apă și dioxid de carbon.", t2_b2: "Din acestea fac zahăr pentru a crește.", t2_b3: "În același timp, eliberează oxigen proaspăt pentru noi!",
    t2_inst: "Ce folosește planta și ce ne oferă?",
    t2_bucket_needs: "Planta ARE NEVOIE",
    t2_bucket_gives: "Planta OFERĂ",
    t2_item_n1: "Lumina soarelui", t2_item_n2: "Apă",
    t2_item_g1: "Oxigen (Aer proaspăt)", t2_item_g2: "Zahăr (Hrană)",
    t2_q: "Care este gazul important pe care îl produc plantele și pe care îl respirăm noi?",
    t2_q_a: "Oxigenul", t2_q_b: "Dioxidul de carbon", t2_q_c: "Fumul", t2_q_d: "Vaporii",

    // Cél: [1, 3] -> albine, polen
    t3_title: "Magia polenizării", t3_text: "Pentru ca din floare să iasă fruct și sămânță, polenul trebuie să ajungă de la o floare la alta.",
    t3_b1: "Albinele caută nectar în flori.", t3_b2: "În acest timp, polenul se lipește de corpul lor blănos.", t3_b3: "Când merg la următoarea floare, o polenizează.",
    t3_inst: "Găsește și marchează insecta și ce transportă în propoziție!",
    t3_tok0: "Aceste", t3_tok1: "albine", t3_tok2: "duc", t3_tok3: "polen", t3_tok4: "pentru", t3_tok5: "ajutor.",
    t3_q: "Ce se lipește de corpul albinei când merge pe flori?",
    t3_q_a: "Polenul", t3_q_b: "Apa", t3_q_c: "Frunzele", t3_q_d: "Pământul",

    t4_title: "Semințe călătoare", t4_text: "Dacă semințele ar cădea mereu sub copac, nu ar avea loc să crească. Ele trebuie să călătorească departe!",
    t4_b1: "Semințele de păpădie sunt suflate de vânt.", t4_b2: "Fructele de pădure sunt mâncate și transportate de animale.", t4_b3: "Nucile de cocos călătoresc pe apă spre insule noi.",
    t4_inst: "Potrivește sămânța cu modul în care călătorește!",
    t4_l1: "Păpădie", t4_r1: "Suflată de vânt",
    t4_l2: "Zmeură/Fructe", t4_r2: "Dusă de animale",
    t4_l3: "Nucă de cocos", t4_r3: "Plutește pe apă",
    t4_q: "Cum călătorește sămânța de păpădie?",
    t4_q_a: "E suflată de vânt cu mici parașute", t4_q_b: "E luată de apă", t4_q_c: "E dusă de păsări în cioc", t4_q_d: "E îngropată de veverițe",

    t5_title: "Albine hărnicuțe", t5_text: "Primăvara, pajiștea e plină de albine care bâzâie. Ele fac o treabă foarte importantă în natură!",
    t5_b1: "Fără albine, am avea mult mai puține fructe.", t5_b2: "Protejați albinele, nu le faceți rău!", t5_b3: "Uită-te pe pajiște și numără-le!",
    t5_inst: "Pe pajiște sunt 5 albine. Apasă pe ele ca să le numeri!",
    t5_q: "Ce s-ar întâmpla dacă ar dispărea albinele?",
    t5_q_a: "Am avea mult mai puține fructe și legume", t5_q_b: "Am avea mai multe mere", t5_q_c: "Ar fi cald iarna", t5_q_d: "Nu s-ar schimba nimic",
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
      type: "label-diagram",
      areas: [
        { id: "petal",  x: 35, y: 35, label: "t1_area_petal" },
        { id: "center", x: 50, y: 35, label: "t1_area_center" },
        { id: "stem",   x: 50, y: 65, label: "t1_area_stem" },
        { id: "leaf",   x: 65, y: 75, label: "t1_area_leaf" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "needs", label: "t2_bucket_needs" },
        { id: "gives", label: "t2_bucket_gives" },
      ],
      items: [
        { text: "t2_item_n1", bucketId: "needs" },
        { text: "t2_item_g1", bucketId: "gives" },
        { text: "t2_item_n2", bucketId: "needs" },
        { text: "t2_item_g2", bucketId: "gives" },
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
      // Szavak:
      // HU: [0:A] [1:méhek] [2:a] [3:virágpor] [4:szállításával] [5:segítenek.]
      // EN: [0:The] [1:bees] [2:carry] [3:pollen] [4:to] [5:help.]
      // DE: [0:Die] [1:Bienen] [2:tragen] [3:Pollen] [4:zum] [5:Helfen.]
      // RO: [0:Aceste] [1:albine] [2:duc] [3:polen] [4:pentru] [5:ajutor.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [1, 3], 
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
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
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
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
      tapCount: { emoji: "🐝", count: 5 }, // A tap-count motor méhecskéket rajzol a gombokra
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
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
  icon: "🌸",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PollinationExplorer = memo(function PollinationExplorer({
  color = "#EC4899", // Pink-500 a virágok miatt
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
      explorerId="sachkunde_k3_pollination" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PollinationExplorer;
