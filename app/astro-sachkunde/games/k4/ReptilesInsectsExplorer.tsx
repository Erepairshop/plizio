"use client";
// ReptilesInsectsExplorer.tsx — Sachkunde Island i3: Reptiles & Insects (K4)
// Topics: 1) Hüllők és Kétéltűek 2) A béka fejlődése 3) Rovarok felépítése 4) Tápláléklánc 5) Keresd a katicákat!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Hüllő (Kígyó) - Szárazföld */}
      <g transform="translate(60, 70)">
        <path d="M -20,20 Q -40,0 -20,-20 T 0,-20 T 20,0" fill="none" stroke="#65A30D" strokeWidth="8" strokeLinecap="round" />
        <circle cx="20" cy="0" r="8" fill="#4D7C0F" />
        <circle cx="23" cy="-3" r="2" fill="#000" />
        <path d="M 28,0 L 35,-2 M 28,0 L 35,2" stroke="#EF4444" strokeWidth="1" /> {/* Nyelv */}
      </g>
      {/* Kétéltű (Béka) - Vízpart */}
      <g transform="translate(180, 70)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#10B981" />
        {/* Szemek */}
        <circle cx="-10" cy="-10" r="5" fill="#10B981" />
        <circle cx="-10" cy="-10" r="2" fill="#000" />
        <circle cx="10" cy="-10" r="5" fill="#10B981" />
        <circle cx="10" cy="-10" r="2" fill="#000" />
        {/* Lábak */}
        <path d="M -15,5 Q -25,-10 -30,10" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        <path d="M 15,5 Q 25,-10 30,10" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      </g>
      <line x1="120" y1="20" x2="120" y2="120" stroke="#A3E635" strokeWidth="4" strokeDasharray="5 5" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* 1. Pete */}
      <g transform="translate(40, 70)">
        <circle cx="-5" cy="-5" r="8" fill="#BAE6FD" />
        <circle cx="-5" cy="-5" r="2" fill="#000" />
        <circle cx="5" cy="5" r="8" fill="#BAE6FD" />
        <circle cx="5" cy="5" r="2" fill="#000" />
        <circle cx="8" cy="-8" r="8" fill="#BAE6FD" />
        <circle cx="8" cy="-8" r="2" fill="#000" />
      </g>
      {/* 2. Ebihal (farokkal) */}
      <g transform="translate(100, 70)">
        <circle cx="-5" cy="0" r="8" fill="#10B981" />
        <path d="M -5,0 Q 15,10 20,-5" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* 3. Ebihal (lábakkal) */}
      <g transform="translate(160, 70)">
        <circle cx="-5" cy="0" r="8" fill="#10B981" />
        <path d="M -5,0 Q 15,-10 20,5" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
        <line x1="-5" y1="5" x2="-10" y2="15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* 4. Kifejlett béka */}
      <g transform="translate(210, 70) scale(0.6)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#059669" />
        <circle cx="-10" cy="-10" r="5" fill="#059669" />
        <circle cx="10" cy="-10" r="5" fill="#059669" />
        <path d="M -15,5 Q -25,-10 -30,10" fill="none" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
        <path d="M 15,5 Q 25,-10 30,10" fill="none" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Rovar anatómia (Bogár) */}
      <g transform="translate(120, 70) rotate(-90)">
        {/* Lábak (Torhoz csatlakoznak) */}
        <line x1="-5" y1="0" x2="-25" y2="-20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <line x1="-5" y1="0" x2="-25" y2="20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-15" y2="-25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-15" y2="25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <line x1="5" y1="0" x2="0" y2="-25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <line x1="5" y1="0" x2="0" y2="25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        
        {/* Potroh (Abdomen) */}
        <ellipse cx="-20" cy="0" rx="18" ry="12" fill="#B45309" />
        {/* Tor (Thorax) */}
        <ellipse cx="5" cy="0" rx="10" ry="8" fill="#D97706" />
        {/* Fej (Head) */}
        <circle cx="22" cy="0" r="8" fill="#F59E0B" />
        
        {/* Csápok */}
        <path d="M 28,-3 Q 40,-10 45,-5 M 28,3 Q 40,10 45,5" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Növény */}
      <g transform="translate(30, 80)">
        <path d="M 0,10 L 0,-20" stroke="#16A34A" strokeWidth="3" />
        <circle cx="0" cy="-20" r="8" fill="#F472B6" />
      </g>
      <path d="M 45,70 L 65,70" fill="none" stroke="#64748B" strokeWidth="3" markerEnd="url(#arrow)" />
      {/* Rovar (Légy/Bogár) */}
      <g transform="translate(90, 70)">
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#1E293B" />
        <ellipse cx="0" cy="-5" rx="5" ry="3" fill="#94A3B8" opacity="0.6" transform="rotate(30)" />
        <ellipse cx="0" cy="5" rx="5" ry="3" fill="#94A3B8" opacity="0.6" transform="rotate(-30)" />
      </g>
      <path d="M 105,70 L 125,70" fill="none" stroke="#64748B" strokeWidth="3" markerEnd="url(#arrow)" />
      {/* Béka */}
      <g transform="translate(160, 70) scale(0.8)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#10B981" />
        <circle cx="-10" cy="-10" r="4" fill="#10B981" />
        <circle cx="10" cy="-10" r="4" fill="#10B981" />
      </g>
      <path d="M 185,70 L 205,70" fill="none" stroke="#64748B" strokeWidth="3" markerEnd="url(#arrow)" />
      {/* Kígyó */}
      <g transform="translate(225, 70)">
        <path d="M -10,10 Q -20,0 -10,-10 T 0,-10" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
        <circle cx="0" cy="-10" r="4" fill="#4D7C0F" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#D1FAE5" rx="20" />
      {/* Tavaszi rét levelekkel */}
      <path d="M 0,120 Q 60,90 120,110 T 240,100 L 240,140 L 0,140 Z" fill="#34D399" opacity="0.5" />
      <path d="M 0,140 Q 80,110 160,130 T 240,120 L 240,140 L 0,140 Z" fill="#10B981" opacity="0.6" />
      <circle cx="40" cy="50" r="20" fill="#A7F3D0" opacity="0.4" />
      <circle cx="200" cy="40" r="30" fill="#A7F3D0" opacity="0.4" />
      {/* A tap-count katicái (🐞) gombként jelennek meg ezen a háttéren */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hüllők, Kétéltűek és Rovarok",
    // T1: Hüllők és Kétéltűek
    t1_title: "Száraz és nedves bőr",
    t1_text: "A hüllők (pl. kígyók, gyíkok) bőre száraz és pikkelyes. A kétéltűek (pl. békák, szalamandrák) bőre nedves, és életük egy részét vízben töltik.",
    t1_b1: "A hüllők tojásait lágy héj védi, a szárazföldre rakják le.",
    t1_b2: "A kétéltűek vízbe rakják kocsonyás petéiket.",
    t1_b3: "A kígyó hüllő, a béka kétéltű.",
    t1_inst: "Hüllő vagy Kétéltű? Válogasd szét őket!",
    t1_bucket_hullo: "Hüllők (Pikkelyes)",
    t1_bucket_keteltu: "Kétéltűek (Nedves)",
    t1_item_h1: "Kígyó", t1_item_h2: "Gyík",
    t1_item_k1: "Béka", t1_item_k2: "Szalamandra",
    t1_q: "Milyen a hüllők (például a kígyók és gyíkok) bőre?",
    t1_q_a: "Száraz és pikkelyes", t1_q_b: "Nedves és csupasz", t1_q_c: "Tollas", t1_q_d: "Szőrös",

    // T2: A béka fejlődése
    t2_title: "A vízben kezdődik",
    t2_text: "A kétéltűek, például a békák, csodálatos átalakuláson mennek keresztül: vízi állatból szárazföldi állattá válnak.",
    t2_b1: "A békák petéket raknak a vízbe.",
    t2_b2: "A petéből kopoltyús, farokkal úszó ebihal lesz.",
    t2_b3: "Végül lábai nőnek, elhagyja a vizet, és békává válik.",
    t2_inst: "Tedd sorba a béka fejlődésének lépéseit!",
    t2_w1: "Pete (Tojás)", t2_w2: "Ebihal (Farokkal)", t2_w3: "Ebihal lábakkal", t2_w4: "Kifejlett béka",
    t2_q: "Hogyan hívjuk a béka kicsinyét, aminek még farka van és vízben úszik?",
    t2_q_a: "Ebihal", t2_q_b: "Lárva", t2_q_c: "Kígyó", t2_q_d: "Hernyó",

    // T3: Rovarok felépítése (Label-diagram)
    t3_title: "A rovarok anatómiája",
    t3_text: "Tudtad, hogy a Földön a rovarokból van a legtöbb? Minden rovarnak 6 lába van, és a testük 3 fő részre tagolódik.",
    t3_b1: "A fejen vannak a csápok, amikkel éreznek.",
    t3_b2: "A tor az a rész, amihez a 6 láb és a szárnyak csatlakoznak.",
    t3_b3: "A potroh a leghátsó, legnagyobb testrészük.",
    t3_inst: "Keresd meg a rovar testrészeit az ábrán!",
    t3_area_head: "Fej",
    t3_area_thorax: "Tor (Középen)",
    t3_area_abdomen: "Potroh (Hátul)",
    t3_area_antennae: "Csápok",
    t3_q: "Hány lába van egy rovarnak?",
    t3_q_a: "6 lába", t3_q_b: "8 lába", t3_q_c: "4 lába", t3_q_d: "Nincs lába",

    // T4: Tápláléklánc (Highlight-text) - Cél: [1, 3] -> békák, rovarokat
    t4_title: "Kisebbek és nagyobbak",
    t4_text: "A rovarok, a kétéltűek és a hüllők mind részei a táplálékláncnak. Mindenki eszik valamit, és mindenkit megeszik valaki.",
    t4_b1: "A rovarok növényeket vagy nektárt esznek.",
    t4_b2: "A békák hosszú nyelvükkel elkapják a rovarokat.",
    t4_b3: "A kígyók pedig levadásszák a békákat.",
    t4_inst: "Keresd meg és jelöld meg a MONDATBAN, hogy ki mit eszik!",
    t4_tok0: "A", t4_tok1: "békák", t4_tok2: "kisebb", t4_tok3: "rovarokat", t4_tok4: "esznek", t4_tok5: "vacsorára.",
    t4_q: "Kit eszik meg a béka a táplálékláncban?",
    t4_q_a: "A rovarokat", t4_q_b: "A kígyókat", t4_q_c: "A füvet", t4_q_d: "A madarakat",

    // T5: Keresd a katicákat! (Tap-count)
    t5_title: "Bogárvadászat",
    t5_text: "A katicabogár egy nagyon hasznos rovar, mert megeszi a növényekre káros levéltetveket.",
    t5_b1: "A katicáknak is 6 lábuk van, hiszen rovarok.",
    t5_b2: "A piros színük figyelmezteti a madarakat: 'Ne egyél meg!'",
    t5_b3: "Nézz körül a réten, és számold meg őket!",
    t5_inst: "A levelek között elbújt 5 katicabogár (🐞). Bökj rájuk, hogy megszámold őket!",
    t5_q: "Miért hasznos a katicabogár a kertben?",
    t5_q_a: "Mert megeszi a kártékony levéltetveket", t5_q_b: "Mert beporozza a virágokat", t5_q_c: "Mert szép a hangja", t5_q_d: "Mert világít a sötétben",
  },
  en: {
    explorer_title: "Reptiles, Amphibians & Insects",
    t1_title: "Dry and Moist Skin", t1_text: "Reptiles (like snakes, lizards) have dry, scaly skin. Amphibians (like frogs, salamanders) have moist skin and live near water.",
    t1_b1: "Reptiles lay their eggs on land.", t1_b2: "Amphibians lay their jelly-like eggs in water.", t1_b3: "A snake is a reptile, a frog is an amphibian.",
    t1_inst: "Reptile or Amphibian? Sort them out!",
    t1_bucket_hullo: "Reptiles (Scaly)",
    t1_bucket_keteltu: "Amphibians (Moist)",
    t1_item_h1: "Snake", t1_item_h2: "Lizard",
    t1_item_k1: "Frog", t1_item_k2: "Salamander",
    t1_q: "What kind of skin do reptiles have?",
    t1_q_a: "Dry and scaly", t1_q_b: "Moist and smooth", t1_q_c: "Feathered", t1_q_d: "Furry",

    t2_title: "Starting in Water", t2_text: "Amphibians, like frogs, go through an amazing transformation from a water animal to a land animal.",
    t2_b1: "Frogs lay eggs in the water.", t2_b2: "The egg hatches into a tadpole with gills and a tail.", t2_b3: "Finally, it grows legs, leaves the water, and becomes a frog.",
    t2_inst: "Put the stages of a frog's life in order!",
    t2_w1: "Eggs", t2_w2: "Tadpole (with tail)", t2_w3: "Tadpole with legs", t2_w4: "Adult Frog",
    t2_q: "What do we call a baby frog that swims in the water and has a tail?",
    t2_q_a: "Tadpole", t2_q_b: "Larva", t2_q_c: "Snake", t2_q_d: "Caterpillar",

    t3_title: "Insect Anatomy", t3_text: "Did you know insects are the most numerous animals on Earth? Every insect has 6 legs and a body in 3 main parts.",
    t3_b1: "The head has antennae for sensing.", t3_b2: "The thorax is the middle part where legs and wings attach.", t3_b3: "The abdomen is the rear, largest body part.",
    t3_inst: "Find the insect body parts on the diagram!",
    t3_area_head: "Head",
    t3_area_thorax: "Thorax (Middle)",
    t3_area_abdomen: "Abdomen (Rear)",
    t3_area_antennae: "Antennae",
    t3_q: "How many legs does an insect have?",
    t3_q_a: "6 legs", t3_q_b: "8 legs", t3_q_c: "4 legs", t3_q_d: "No legs",

    // Target [1, 3] -> frogs, insects
    t4_title: "Food Chains", t4_text: "Insects, amphibians, and reptiles are all part of the food chain. Everyone eats and gets eaten.",
    t4_b1: "Insects eat plants or nectar.", t4_b2: "Frogs catch insects with their long tongues.", t4_b3: "Snakes hunt and eat the frogs.",
    t4_inst: "Find and mark 'who eats what' in the sentence!",
    t4_tok0: "The", t4_tok1: "frogs", t4_tok2: "eat", t4_tok3: "insects", t4_tok4: "for", t4_tok5: "dinner.",
    t4_q: "What does the frog eat in the food chain?",
    t4_q_a: "Insects", t4_q_b: "Snakes", t4_q_c: "Grass", t4_q_d: "Birds",

    t5_title: "Bug Hunt", t5_text: "The ladybug is a very helpful insect because it eats aphids that damage plants.",
    t5_b1: "Ladybugs also have 6 legs since they are insects.", t5_b2: "Their red color warns birds: 'Don't eat me!'", t5_b3: "Look around the meadow and count them!",
    t5_inst: "5 ladybugs (🐞) are hiding in the leaves. Tap to count them!",
    t5_q: "Why is the ladybug a helpful insect in the garden?",
    t5_q_a: "It eats harmful aphids", t5_q_b: "It pollinates flowers", t5_q_c: "It sings beautifully", t5_q_d: "It glows in the dark",
  },
  de: {
    explorer_title: "Reptilien & Insekten",
    t1_title: "Trocken und Feucht", t1_text: "Reptilien (z.B. Schlangen) haben trockene, schuppige Haut. Amphibien (z.B. Frösche) haben feuchte Haut und brauchen Wasser.",
    t1_b1: "Reptilien legen Eier mit einer Schale an Land.", t1_b2: "Amphibien legen geleeartige Eier ins Wasser.", t1_b3: "Schlangen sind Reptilien, Frösche sind Amphibien.",
    t1_inst: "Reptil oder Amphibie? Sortiere sie!",
    t1_bucket_hullo: "Reptilien (Schuppen)",
    t1_bucket_keteltu: "Amphibien (Feucht)",
    t1_item_h1: "Schlange", t1_item_h2: "Eidechse",
    t1_item_k1: "Frosch", t1_item_k2: "Salamander",
    t1_q: "Welche Haut haben Reptilien (wie Schlangen und Eidechsen)?",
    t1_q_a: "Trocken und schuppig", t1_q_b: "Feucht und glatt", t1_q_c: "Gefiedert", t1_q_d: "Pelzig",

    t2_title: "Der Anfang im Wasser", t2_text: "Amphibien wie Frösche durchlaufen eine Verwandlung: Vom Wassertier zum Landtier.",
    t2_b1: "Frösche legen Eier ins Wasser.", t2_b2: "Aus dem Ei schlüpft eine Kaulquappe mit Kiemen und Schwanz.", t2_b3: "Am Ende wachsen Beine, sie verlässt das Wasser und wird zum Frosch.",
    t2_inst: "Bringe die Entwicklung des Frosches in die richtige Reihenfolge!",
    t2_w1: "Eier", t2_w2: "Kaulquappe (mit Schwanz)", t2_w3: "Kaulquappe mit Beinen", t2_w4: "Ausgewachsener Frosch",
    t2_q: "Wie nennt man ein Froschbaby, das im Wasser schwimmt und einen Schwanz hat?",
    t2_q_a: "Kaulquappe", t2_q_b: "Larve", t2_q_c: "Schlange", t2_q_d: "Raupe",

    t3_title: "Insektenkörper", t3_text: "Wusstest du, dass Insekten die meisten Tiere auf der Erde sind? Alle haben 6 Beine und 3 Körperteile.",
    t3_b1: "Am Kopf sind Fühler zum Fühlen.", t3_b2: "Die Brust ist die Mitte, wo Beine und Flügel befestigt sind.", t3_b3: "Der Hinterleib ist der größte Teil hinten.",
    t3_inst: "Finde die Insektenteile auf dem Bild!",
    t3_area_head: "Kopf",
    t3_area_thorax: "Brust (Mitte)",
    t3_area_abdomen: "Hinterleib (Hinten)",
    t3_area_antennae: "Fühler",
    t3_q: "Wie viele Beine hat ein Insekt?",
    t3_q_a: "6 Beine", t3_q_b: "8 Beine", t3_q_c: "4 Beine", t3_q_d: "Keine Beine",

    // Cél: [1, 3] -> Frösche, Insekten
    t4_title: "Nahrungsketten", t4_text: "Insekten, Amphibien und Reptilien sind Teil der Nahrungskette. Jeder frisst und wird gefressen.",
    t4_b1: "Insekten essen Pflanzen oder Nektar.", t4_b2: "Frösche fangen Insekten mit ihrer Zunge.", t4_b3: "Schlangen jagen Frösche.",
    t4_inst: "Finde und markiere im Satz, wer wen isst!",
    t4_tok0: "Die", t4_tok1: "Frösche", t4_tok2: "essen", t4_tok3: "Insekten", t4_tok4: "zum", t4_tok5: "Abendessen.",
    t4_q: "Was isst der Frosch in der Nahrungskette?",
    t4_q_a: "Insekten", t4_q_b: "Schlangen", t4_q_c: "Gras", t4_q_d: "Vögel",

    t5_title: "Käferjagd", t5_text: "Der Marienkäfer ist sehr nützlich, weil er schädliche Blattläuse frisst.",
    t5_b1: "Marienkäfer haben auch 6 Beine, weil sie Insekten sind.", t5_b2: "Ihre rote Farbe warnt Vögel: 'Friss mich nicht!'", t5_b3: "Schau dich um und zähle sie!",
    t5_inst: "Zwischen den Blättern verstecken sich 5 Marienkäfer (🐞). Tippe sie an!",
    t5_q: "Warum ist der Marienkäfer nützlich im Garten?",
    t5_q_a: "Weil er schädliche Blattläuse frisst", t5_q_b: "Weil er Blumen bestäubt", t5_q_c: "Weil er schön singt", t5_q_d: "Weil er im Dunkeln leuchtet",
  },
  ro: {
    explorer_title: "Reptile și Insecte",
    t1_title: "Piele uscată și umedă", t1_text: "Reptilele (ex. șerpi, șopârle) au pielea uscată cu solzi. Amfibienii (ex. broaște) au pielea umedă și trăiesc pe lângă apă.",
    t1_b1: "Reptilele fac ouă pe uscat.", t1_b2: "Amfibienii depun ouă gelatinoase în apă.", t1_b3: "Șarpele este o reptilă, broasca este un amfibian.",
    t1_inst: "Reptilă sau Amfibian? Sortează-le!",
    t1_bucket_hullo: "Reptile (Cu solzi)",
    t1_bucket_keteltu: "Amfibieni (Umede)",
    t1_item_h1: "Șarpe", t1_item_h2: "Șopârlă",
    t1_item_k1: "Broască", t1_item_k2: "Salamandră",
    t1_q: "Cum este pielea reptilelor?",
    t1_q_a: "Uscată și cu solzi", t1_q_b: "Umedă și netedă", t1_q_c: "Cu pene", t1_q_d: "Cu blană",

    t2_title: "Începutul în apă", t2_text: "Amfibienii, cum ar fi broaștele, trec printr-o transformare uimitoare din animal de apă în animal de uscat.",
    t2_b1: "Broaștele depun ouă în apă.", t2_b2: "Din ou iese un mormoloc cu branhii și coadă.", t2_b3: "La final îi cresc picioare, iese din apă și devine broască.",
    t2_inst: "Pune etapele de viață ale broaștei în ordine!",
    t2_w1: "Ouă", t2_w2: "Mormoloc (cu coadă)", t2_w3: "Mormoloc cu picioare", t2_w4: "Broască adultă",
    t2_q: "Cum se numește puiul de broască ce înoată în apă și are coadă?",
    t2_q_a: "Mormoloc", t2_q_b: "Larvă", t2_q_c: "Șarpe", t2_q_d: "Omidă",

    t3_title: "Anatomia insectelor", t3_text: "Știai că insectele sunt cele mai numeroase animale? Toate au 6 picioare și corpul împărțit în 3.",
    t3_b1: "Capul are antene pentru a simți.", t3_b2: "Toracele e partea din mijloc de care se prind picioarele și aripile.", t3_b3: "Abdomenul este cea mai mare parte, în spate.",
    t3_inst: "Găsește părțile insectei pe desen!",
    t3_area_head: "Cap",
    t3_area_thorax: "Torace (Mijloc)",
    t3_area_abdomen: "Abdomen (Spate)",
    t3_area_antennae: "Antene",
    t3_q: "Câte picioare are o insectă?",
    t3_q_a: "6 picioare", t3_q_b: "8 picioare", t3_q_c: "4 picioare", t3_q_d: "Niciun picior",

    // Cél: [1, 3] -> broaște, insecte
    t4_title: "Lanțul trofic", t4_text: "Insectele, amfibienii și reptilele fac parte din lanțul trofic. Toată lumea mănâncă și e mâncată.",
    t4_b1: "Insectele mănâncă plante sau nectar.", t4_b2: "Broaștele prind insecte cu limba lor lungă.", t4_b3: "Șerpii vânează broaște.",
    t4_inst: "Găsește și marchează cine mănâncă pe cine în propoziție!",
    t4_tok0: "Aceste", t4_tok1: "broaște", t4_tok2: "mănâncă", t4_tok3: "insecte", t4_tok4: "la", t4_tok5: "cină.",
    t4_q: "Ce mănâncă broasca în lanțul trofic?",
    t4_q_a: "Insecte", t4_q_b: "Șerpi", t4_q_c: "Iarbă", t4_q_d: "Păsări",

    t5_title: "Vânătoarea de gândaci", t5_text: "Buburuza este o insectă foarte utilă, deoarece mănâncă afidele care strică plantele.",
    t5_b1: "Buburuzele au și ele 6 picioare, fiind insecte.", t5_b2: "Culoarea roșie avertizează păsările: 'Nu mă mânca!'", t5_b3: "Uită-te prin iarbă și numără-le!",
    t5_inst: "5 buburuze (🐞) se ascund printre frunze. Apasă pe ele ca să le numeri!",
    t5_q: "De ce este buburuza o insectă utilă în grădină?",
    t5_q_a: "Pentru că mănâncă afidele dăunătoare", t5_q_b: "Pentru că polenizează florile", t5_q_c: "Pentru că are o voce frumoasă", t5_q_d: "Pentru că strălucește în întuneric",
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
        { id: "hullo", label: "t1_bucket_hullo" },
        { id: "keteltu", label: "t1_bucket_keteltu" },
      ],
      items: [
        { text: "t1_item_h1", bucketId: "hullo" },
        { text: "t1_item_k1", bucketId: "keteltu" },
        { text: "t1_item_h2", bucketId: "hullo" },
        { text: "t1_item_k2", bucketId: "keteltu" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b3",
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
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
      type: "label-diagram",
      areas: [
        { id: "head",     x: 80, y: 50, label: "t3_area_head" },
        { id: "thorax",   x: 55, y: 50, label: "t3_area_thorax" },
        { id: "abdomen",  x: 20, y: 50, label: "t3_area_abdomen" },
        { id: "antennae", x: 90, y: 30, label: "t3_area_antennae" },
      ],
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
      type: "highlight-text",
      // HU: [0:A] [1:békák] [2:kisebb] [3:rovarokat] [4:esznek] [5:vacsorára.]
      // EN: [0:The] [1:frogs] [2:eat] [3:insects] [4:for] [5:dinner.]
      // DE: [0:Die] [1:Frösche] [2:essen] [3:Insekten] [4:zum] [5:Abendessen.]
      // RO: [0:Aceste] [1:broaște] [2:mănâncă] [3:insecte] [4:la] [5:cină.]
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [1, 3],
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b1",
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
      tapCount: { emoji: "🐞", count: 5 }, // Katicabogár vadászat!
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
  icon: "🦎",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReptilesInsectsExplorer = memo(function ReptilesInsectsExplorer({
  color = "#10B981", // Emerald-500 a hüllők és békák zöldje miatt
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
      grade={4} 
      explorerId="sachkunde_k4_reptiles_insects" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ReptilesInsectsExplorer;
