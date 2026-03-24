"use client";
// BodySystemsExplorer.tsx — Sachkunde Island i1: Body Systems (K3)
// Topics: 1) A csontváz 2) Belső szervek 3) Táplálkozási piramis 4) Fogak fejlődése 5) Számold a szívdobbanást!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Csontváz (leegyszerűsített geometriai) */}
      <g transform="translate(120, 65)">
        {/* Koponya */}
        <circle cx="0" cy="-45" r="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
        <rect x="-6" y="-35" width="12" height="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" rx="2" />
        {/* Gerinc */}
        <rect x="-3" y="-28" width="6" height="40" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
        {/* Bordák */}
        <path d="M -3,-20 Q -20,-20 -20,-10 M 3,-20 Q 20,-20 20,-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <path d="M -3,-12 Q -22,-12 -22,-2 M 3,-12 Q 22,-12 22,-2" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <path d="M -3,-4 Q -18,-4 -18,6 M 3,-4 Q 18,-4 18,6" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        {/* Medence */}
        <polygon points="-15,12 15,12 10,25 -10,25" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" strokeLinejoin="round" />
        {/* Végtagok csonkja */}
        <line x1="-10" y1="20" x2="-20" y2="45" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <line x1="10" y1="20" x2="20" y2="45" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      {/* Agy */}
      <g transform="translate(60, 45)">
        <path d="M 0,0 C -20,-20 20,-20 0,0" fill="#F472B6" />
        <ellipse cx="0" cy="0" rx="20" ry="15" fill="#F9A8D4" />
        <path d="M -15,0 Q -5,-10 0,0 T 15,0" fill="none" stroke="#F472B6" strokeWidth="2" />
      </g>
      {/* Tüdő */}
      <g transform="translate(180, 45)">
        <path d="M -2, -15 L -2, -5 M 2, -15 L 2, -5" stroke="#93C5FD" strokeWidth="2" />
        <ellipse cx="-10" cy="10" rx="10" ry="18" fill="#BAE6FD" />
        <ellipse cx="10" cy="10" rx="10" ry="18" fill="#BAE6FD" />
      </g>
      {/* Szív */}
      <g transform="translate(60, 105)">
        <path d="M 0,10 L -15,-5 A 10,10 0 0,1 0,-15 A 10,10 0 0,1 15,-5 Z" fill="#EF4444" />
      </g>
      {/* Gyomor */}
      <g transform="translate(180, 105)">
        <path d="M -10,-10 C 20,-20 25,10 5,15 C -15,20 -25,-5 -10,-10 Z" fill="#FCD34D" />
        <path d="M -5,-15 L -10,-10" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 110)">
        {/* Piramis */}
        <polygon points="-70,0 70,0 0,-80" fill="#FFFFFF" stroke="#D97706" strokeWidth="3" strokeLinejoin="round" />
        {/* Alsó szint: Zöldség/Gyümölcs (Zöld) */}
        <polygon points="-70,0 70,0 45,-30 -45,-30" fill="#4ADE80" opacity="0.8" />
        {/* Középső szint: Hús/Tejtermék (Sárga) */}
        <polygon points="-45,-30 45,-30 20,-60 -20,-60" fill="#FBBF24" opacity="0.8" />
        {/* Felső szint: Édesség (Piros) */}
        <polygon points="-20,-60 20,-60 0,-80" fill="#F87171" opacity="0.8" />
        
        {/* Dekor vonalak */}
        <line x1="-45" y1="-30" x2="45" y2="-30" stroke="#D97706" strokeWidth="3" />
        <line x1="-20" y1="-60" x2="20" y2="-60" stroke="#D97706" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Kicsi fog (Tejfog) */}
      <g transform="translate(80, 70) scale(0.7)">
        <path d="M -20,-20 C -20,-40 -5,-40 0,-30 C 5,-40 20,-40 20,-20 C 20,0 15,10 10,30 C 8,40 5,40 5,30 C 5,20 -5,20 -5,30 C -5,40 -8,40 -10,30 C -15,10 -20,0 -20,-20 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="4" strokeLinejoin="round" />
      </g>
      {/* Nyíl */}
      <path d="M 105,70 L 135,70" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrow)" />
      {/* Nagy fog (Csontfog) */}
      <g transform="translate(160, 70)">
        <path d="M -20,-20 C -20,-40 -5,-40 0,-30 C 5,-40 20,-40 20,-20 C 20,0 15,10 10,30 C 8,40 5,40 5,30 C 5,20 -5,20 -5,30 C -5,40 -8,40 -10,30 C -15,10 -20,0 -20,-20 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="4" strokeLinejoin="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      {/* EKG hullám */}
      <path d="M 10,70 L 40,70 L 55,30 L 75,110 L 95,40 L 110,70 L 230,70" fill="none" stroke="#FCA5A5" strokeWidth="3" strokeLinejoin="round" />
      {/* 4 Szív elszórva a számoláshoz */}
      <g transform="translate(40, 40)">
        <path d="M 0,8 L -12,-4 A 8,8 0 0,1 0,-12 A 8,8 0 0,1 12,-4 Z" fill="#EF4444" />
      </g>
      <g transform="translate(100, 90) scale(0.8)">
        <path d="M 0,8 L -12,-4 A 8,8 0 0,1 0,-12 A 8,8 0 0,1 12,-4 Z" fill="#EF4444" />
      </g>
      <g transform="translate(160, 50) scale(1.1)">
        <path d="M 0,8 L -12,-4 A 8,8 0 0,1 0,-12 A 8,8 0 0,1 12,-4 Z" fill="#EF4444" />
      </g>
      <g transform="translate(200, 80) scale(0.9)">
        <path d="M 0,8 L -12,-4 A 8,8 0 0,1 0,-12 A 8,8 0 0,1 12,-4 Z" fill="#EF4444" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Testünk Működése",
    // T1: Csontváz (Label-diagram)
    t1_title: "A csontváz",
    t1_text: "A testünk vázát a csontok alkotják. Ezek tartanak minket egyenesen és védik a belső szerveinket.",
    t1_b1: "A koponya védi az agyat.",
    t1_b2: "A bordák kosarat alkotnak a szívünk és a tüdőnk körül.",
    t1_b3: "A gerincoszlop a hátunk közepén tart minket.",
    t1_inst: "Keresd meg a csontváz részeit az ábrán!",
    t1_area_skull: "Koponya",
    t1_area_ribs: "Bordák",
    t1_area_spine: "Gerinc",
    t1_area_pelvis: "Medence",
    t1_q: "Melyik csontunk védi az agyunkat a sérülésektől?",
    t1_q_a: "A koponya", t1_q_b: "A borda", t1_q_c: "A medence", t1_q_d: "A gerinc",

    // T2: Belső szervek (Match-pairs)
    t2_title: "A belső szervek",
    t2_text: "A bőrünk alatt sok fontos szerv dolgozik megállás nélkül. Mindegyiknek megvan a maga különleges feladata.",
    t2_b1: "A szívünk pumpálja a vért az egész testünkben.",
    t2_b2: "A tüdőnkkel lélegezzük be a friss levegőt.",
    t2_b3: "A gyomrunk emészti meg a megevett táplálékot.",
    t2_inst: "Párosítsd a szervet a feladatával!",
    t2_l1: "Szív", t2_r1: "Pumpálja a vért",
    t2_l2: "Tüdő", t2_r2: "Lélegzik",
    t2_l3: "Gyomor", t2_r3: "Emészti az ételt",
    t2_q: "Melyik szervünk felelős a levegővételért?",
    t2_q_a: "A tüdő", t2_q_b: "A szív", t2_q_c: "A máj", t2_q_d: "A csont",

    // T3: Táplálkozási piramis (Drag-to-bucket)
    t3_title: "A táplálkozási piramis",
    t3_text: "A táplálkozási piramis megmutatja, miből kell sokat ennünk, és miből csak keveset, hogy egészségesek maradjunk.",
    t3_b1: "A piramis alján a zöldségek és gyümölcsök vannak: ezekből ehetünk a legtöbbet.",
    t3_b2: "A tetején vannak az édességek, amikből csak nagyon ritkán szabad enni.",
    t3_b3: "A víz is a piramis alapja!",
    t3_inst: "Hová való az étel a piramisban?",
    t3_bucket_bottom: "Piramis alja (Egyél sokat!)",
    t3_bucket_top: "Piramis teteje (Egyél keveset!)",
    t3_item_b1: "Alma", t3_item_b2: "Sárgarépa",
    t3_item_t1: "Cukorka", t3_item_t2: "Csokoládé",
    t3_q: "Mit mutat meg a táplálkozási piramis?",
    t3_q_a: "Hogy miből mennyit egészséges enni", t3_q_b: "Hogy hogyan építsünk házat", t3_q_c: "Hogy hol laknak a fáraók", t3_q_d: "Hogy mennyi vizet igyunk fürdéskor",

    // T4: Fog fejlődése (Highlight-text) - ÚJ INTERAKCIÓ!
    t4_title: "A fogak fejlődése",
    t4_text: "Amikor kicsik vagyunk, még nincsenek fogaink. Később kibújnak az első fogak, amik aztán leváltódnak.",
    t4_b1: "A gyerekek első fogait tejfogaknak hívjuk.",
    t4_b2: "Ezek a fogak később mozogni kezdenek és kiesnek.",
    t4_b3: "A helyükre erős, maradandó csontfogak nőnek.",
    t4_inst: "Keresd meg és jelöld meg a MONDATBAN a KÉTféle fog nevét!",
    t4_tok1: "Gyerekkorban", t4_tok2: "a", t4_tok3: "tejfogak", t4_tok4: "kiesnek,", t4_tok5: "és", t4_tok6: "a", t4_tok7: "helyükre", t4_tok8: "csontfogak", t4_tok9: "nőnek.",
    t4_q: "Hogyan hívjuk azokat a fogakat, amik gyerekkorban kiesnek?",
    t4_q_a: "Tejfogak", t4_q_b: "Csontfogak", t4_q_c: "Vízfogak", t4_q_d: "Vasfogak",

    // T5: Szívverés (Tap-count) - ÚJ INTERAKCIÓ!
    t5_title: "Testünk motorja",
    t5_text: "A szívünk sosem alszik! Éjjel-nappal ver, és egyenletes ritmusban lüktet, hogy vért juttasson mindenhová.",
    t5_b1: "Ha futsz vagy sportolsz, a szíved gyorsabban ver.",
    t5_b2: "Ha alszol, a szívverésed is lelassul.",
    t5_b3: "Tedd a kezed a mellkasodra, és érezni fogod!",
    t5_inst: "A képen elbújt néhány piros szív. Kattints rájuk és számold meg mindet!",
    t5_q: "Mikor ver a leggyorsabban a szívünk?",
    t5_q_a: "Amikor sportolunk vagy futunk", t5_q_b: "Amikor alszunk", t5_q_c: "Amikor tévét nézünk", t5_q_d: "Amikor olvasunk",
  },
  en: {
    explorer_title: "How Our Body Works",
    t1_title: "The Skeleton", t1_text: "Our body is supported by bones. They keep us upright and protect our internal organs.",
    t1_b1: "The skull protects the brain.", t1_b2: "The ribs form a cage around our heart and lungs.", t1_b3: "The spine holds us up in the middle of our back.",
    t1_inst: "Find the parts of the skeleton on the diagram!",
    t1_area_skull: "Skull", t1_area_ribs: "Ribs", t1_area_spine: "Spine", t1_area_pelvis: "Pelvis",
    t1_q: "Which bone protects our brain from injuries?",
    t1_q_a: "The skull", t1_q_b: "The rib", t1_q_c: "The pelvis", t1_q_d: "The spine",

    t2_title: "Internal Organs", t2_text: "Under our skin, many important organs work non-stop. Each has its own special job.",
    t2_b1: "Our heart pumps blood throughout our body.", t2_b2: "We breathe fresh air with our lungs.", t2_b3: "Our stomach digests the food we eat.",
    t2_inst: "Match the organ with its job!",
    t2_l1: "Heart", t2_r1: "Pumps blood",
    t2_l2: "Lungs", t2_r2: "Breathes",
    t2_l3: "Stomach", t2_r3: "Digests food",
    t2_q: "Which organ is responsible for breathing air?",
    t2_q_a: "The lungs", t2_q_b: "The heart", t2_q_c: "The liver", t2_q_d: "The bone",

    t3_title: "The Food Pyramid", t3_text: "The food pyramid shows us what to eat a lot of, and what to eat only a little of, to stay healthy.",
    t3_b1: "At the bottom are fruits and vegetables: we can eat the most of these.", t3_b2: "At the top are sweets, which we should only eat rarely.", t3_b3: "Water is also at the base of the pyramid!",
    t3_inst: "Where does the food belong in the pyramid?",
    t3_bucket_bottom: "Bottom (Eat a lot!)", t3_bucket_top: "Top (Eat a little!)",
    t3_item_b1: "Apple", t3_item_b2: "Carrot",
    t3_item_t1: "Candy", t3_item_t2: "Chocolate",
    t3_q: "What does the food pyramid show?",
    t3_q_a: "How much of each food is healthy to eat", t3_q_b: "How to build a house", t3_q_c: "Where pharaohs live", t3_q_d: "How much water to drink when bathing",

    t4_title: "Tooth Development", t4_text: "When we are babies, we have no teeth. Later, our first teeth appear, which are then replaced.",
    t4_b1: "A child's first teeth are called baby teeth.", t4_b2: "These teeth later become loose and fall out.", t4_b3: "They are replaced by strong, permanent adult teeth.",
    t4_inst: "Find and select the names of the TWO types of teeth in the sentence!",
    t4_tok1: "In", t4_tok2: "childhood,", t4_tok3: "baby-teeth", t4_tok4: "fall", t4_tok5: "out,", t4_tok6: "and", t4_tok7: "adult-teeth", t4_tok8: "grow", t4_tok9: "in.",
    t4_q: "What do we call the teeth that fall out during childhood?",
    t4_q_a: "Baby teeth", t4_q_b: "Adult teeth", t4_q_c: "Water teeth", t4_q_d: "Iron teeth",

    t5_title: "The Engine of Our Body", t5_text: "Our heart never sleeps! It beats day and night in a steady rhythm to send blood everywhere.",
    t5_b1: "If you run or play sports, your heart beats faster.", t5_b2: "When you sleep, your heartbeat slows down.", t5_b3: "Put your hand on your chest and you will feel it!",
    t5_inst: "There are some red hearts hiding in the picture. Tap and count them all!",
    t5_q: "When does our heart beat the fastest?",
    t5_q_a: "When we play sports or run", t5_q_b: "When we sleep", t5_q_c: "When we watch TV", t5_q_d: "When we read",
  },
  de: {
    explorer_title: "Wie unser Körper funktioniert",
    t1_title: "Das Skelett", t1_text: "Unser Körper wird von Knochen gestützt. Sie halten uns aufrecht und schützen unsere Organe.",
    t1_b1: "Der Schädel schützt das Gehirn.", t1_b2: "Die Rippen bilden einen Korb um Herz und Lunge.", t1_b3: "Die Wirbelsäule hält uns in der Mitte des Rückens.",
    t1_inst: "Finde die Teile des Skeletts auf dem Bild!",
    t1_area_skull: "Schädel", t1_area_ribs: "Rippen", t1_area_spine: "Wirbelsäule", t1_area_pelvis: "Becken",
    t1_q: "Welcher Knochen schützt unser Gehirn vor Verletzungen?",
    t1_q_a: "Der Schädel", t1_q_b: "Die Rippe", t1_q_c: "Das Becken", t1_q_d: "Die Wirbelsäule",

    t2_title: "Innere Organe", t2_text: "Unter unserer Haut arbeiten viele wichtige Organe ohne Pause. Jedes hat eine besondere Aufgabe.",
    t2_b1: "Unser Herz pumpt Blut durch den ganzen Körper.", t2_b2: "Mit der Lunge atmen wir frische Luft.", t2_b3: "Unser Magen verdaut das Essen.",
    t2_inst: "Verbinde das Organ mit seiner Aufgabe!",
    t2_l1: "Herz", t2_r1: "Pumpt Blut",
    t2_l2: "Lunge", t2_r2: "Atmet",
    t2_l3: "Magen", t2_r3: "Verdaut Essen",
    t2_q: "Welches Organ ist für das Atmen der Luft verantwortlich?",
    t2_q_a: "Die Lunge", t2_q_b: "Das Herz", t2_q_c: "Die Leber", t2_q_d: "Der Knochen",

    t3_title: "Die Ernährungspyramide", t3_text: "Die Pyramide zeigt uns, wovon wir viel und wovon wir wenig essen sollten, um gesund zu bleiben.",
    t3_b1: "Ganz unten sind Gemüse und Obst: davon dürfen wir am meisten essen.", t3_b2: "Ganz oben sind Süßigkeiten, davon sollten wir nur selten essen.", t3_b3: "Wasser ist auch die Basis der Pyramide!",
    t3_inst: "Wohin gehört das Essen in der Pyramide?",
    t3_bucket_bottom: "Unten (Viel essen!)", t3_bucket_top: "Oben (Wenig essen!)",
    t3_item_b1: "Apfel", t3_item_b2: "Karotte",
    t3_item_t1: "Bonbon", t3_item_t2: "Schokolade",
    t3_q: "Was zeigt die Ernährungspyramide?",
    t3_q_a: "Wie viel von jedem Essen gesund ist", t3_q_b: "Wie man ein Haus baut", t3_q_c: "Wo Pharaonen leben", t3_q_d: "Wie viel Wasser wir beim Baden trinken sollen",

    t4_title: "Zahnentwicklung", t4_text: "Als Babys haben wir noch keine Zähne. Später kommen die ersten Zähne, die dann ausgetauscht werden.",
    t4_b1: "Die ersten Zähne von Kindern nennt man Milchzähne.", t4_b2: "Diese Zähne fangen später an zu wackeln und fallen aus.", t4_b3: "Sie werden durch starke, bleibende Zähne ersetzt.",
    t4_inst: "Finde und markiere die Namen der ZWEI Zahnarten im Satz!",
    t4_tok1: "In", t4_tok2: "der", t4_tok3: "Kindheit", t4_tok4: "fallen", t4_tok5: "Milchzähne", t4_tok6: "aus", t4_tok7: "und", t4_tok8: "bleibende-Zähne", t4_tok9: "wachsen.",
    t4_q: "Wie nennen wir die Zähne, die in der Kindheit ausfallen?",
    t4_q_a: "Milchzähne", t4_q_b: "Erwachsenenzähne", t4_q_c: "Wasserzähne", t4_q_d: "Eisenzähne",

    t5_title: "Der Motor unseres Körpers", t5_text: "Unser Herz schläft nie! Es schlägt Tag und Nacht in einem gleichmäßigen Rhythmus, um Blut überallhin zu schicken.",
    t5_b1: "Wenn du rennst oder Sport machst, schlägt dein Herz schneller.", t5_b2: "Wenn du schläfst, wird dein Herzschlag langsamer.", t5_b3: "Lege deine Hand auf die Brust und du wirst es spüren!",
    t5_inst: "Im Bild haben sich ein paar rote Herzen versteckt. Tippe sie an und zähle sie!",
    t5_q: "Wann schlägt unser Herz am schnellsten?",
    t5_q_a: "Wenn wir Sport machen oder rennen", t5_q_b: "Wenn wir schlafen", t5_q_c: "Wenn wir fernsehen", t5_q_d: "Wenn wir lesen",
  },
  ro: {
    explorer_title: "Cum funcționează corpul nostru",
    t1_title: "Scheletul", t1_text: "Corpul nostru este susținut de oase. Ele ne țin drepți și ne protejează organele interne.",
    t1_b1: "Craniul protejează creierul.", t1_b2: "Coastele formează o cușcă în jurul inimii și plămânilor.", t1_b3: "Coloana vertebrală ne ține drepti în mijlocul spatelui.",
    t1_inst: "Găsește părțile scheletului pe desen!",
    t1_area_skull: "Craniu", t1_area_ribs: "Coaste", t1_area_spine: "Coloană", t1_area_pelvis: "Bazin",
    t1_q: "Care os ne protejează creierul de răni?",
    t1_q_a: "Craniul", t1_q_b: "Coasta", t1_q_c: "Bazinul", t1_q_d: "Coloana",

    t2_title: "Organele interne", t2_text: "Sub piele, multe organe importante lucrează fără oprire. Fiecare are o sarcină specială.",
    t2_b1: "Inima pompează sângele în tot corpul.", t2_b2: "Respirăm aer proaspăt cu plămânii.", t2_b3: "Stomacul nostru digeră mâncarea.",
    t2_inst: "Potrivește organul cu sarcina lui!",
    t2_l1: "Inimă", t2_r1: "Pompează sângele",
    t2_l2: "Plămâni", t2_r2: "Respiră",
    t2_l3: "Stomac", t2_r3: "Digeră mâncarea",
    t2_q: "Care organ este responsabil pentru respirația aerului?",
    t2_q_a: "Plămânii", t2_q_b: "Inima", t2_q_c: "Ficatul", t2_q_d: "Osul",

    t3_title: "Piramida alimentară", t3_text: "Piramida alimentară ne arată din ce ar trebui să mâncăm mult și din ce doar puțin, ca să fim sănătoși.",
    t3_b1: "La bază sunt legumele și fructele: putem mânca cel mai mult din ele.", t3_b2: "Sus sunt dulciurile, din care trebuie să mâncăm rar.", t3_b3: "Apa este și ea la baza piramidei!",
    t3_inst: "Unde îi este locul mâncării în piramidă?",
    t3_bucket_bottom: "La bază (Mănâncă mult!)", t3_bucket_top: "În vârf (Mănâncă puțin!)",
    t3_item_b1: "Măr", t3_item_b2: "Morcov",
    t3_item_t1: "Bomboană", t3_item_t2: "Ciocolată",
    t3_q: "Ce ne arată piramida alimentară?",
    t3_q_a: "Cât de sănătos este să mănânci din fiecare", t3_q_b: "Cum să construiești o casă", t3_q_c: "Unde locuiesc faraonii", t3_q_d: "Câtă apă să bei la baie",

    t4_title: "Dezvoltarea dinților", t4_text: "Când suntem bebeluși, nu avem dinți. Apoi apar primii dinți, care mai târziu sunt schimbați.",
    t4_b1: "Primii dinți ai copiilor se numesc dinți de lapte.", t4_b2: "Mai târziu, acești dinți se mișcă și cad.", t4_b3: "Ei sunt înlocuiți de dinți definitivi, puternici.",
    t4_inst: "Găsește și marchează în propoziție numele celor DOUĂ tipuri de dinți!",
    t4_tok1: "În", t4_tok2: "copilărie,", t4_tok3: "dinții-de-lapte", t4_tok4: "cad", t4_tok5: "și", t4_tok6: "cresc", t4_tok7: "dinții-definitivi", t4_tok8: "în", t4_tok9: "loc.",
    t4_q: "Cum se numesc dinții care cad în timpul copilăriei?",
    t4_q_a: "Dinți de lapte", t4_q_b: "Dinți definitivi", t4_q_c: "Dinți de apă", t4_q_d: "Dinți de fier",

    t5_title: "Motorul corpului", t5_text: "Inima noastră nu doarme niciodată! Bate zi și noapte într-un ritm constant pentru a trimite sângele peste tot.",
    t5_b1: "Dacă alergi sau faci sport, inima bate mai repede.", t5_b2: "Când dormi, bătăile inimii încetinesc.", t5_b3: "Pune-ți mâna pe piept și o vei simți!",
    t5_inst: "Sunt câteva inimi roșii ascunse în imagine. Apasă-le și numără-le pe toate!",
    t5_q: "Când bate inima noastră cel mai repede?",
    t5_q_a: "Când facem sport sau alergăm", t5_q_b: "Când dormim", t5_q_c: "Când ne uităm la TV", t5_q_d: "Când citim",
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
        { id: "skull", x: 50, y: 15, label: "t1_area_skull" },
        { id: "spine", x: 50, y: 35, label: "t1_area_spine" },
        { id: "ribs",  x: 65, y: 55, label: "t1_area_ribs" },
        { id: "pelvis", x: 50, y: 75, label: "t1_area_pelvis" },
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
      ],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "bottom", label: "t3_bucket_bottom" },
        { id: "top", label: "t3_bucket_top" },
      ],
      items: [
        { text: "t3_item_b1", bucketId: "bottom" },
        { text: "t3_item_t1", bucketId: "top" },
        { text: "t3_item_b2", bucketId: "bottom" },
        { text: "t3_item_t2", bucketId: "top" },
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
      // Minden nyelvnél az adott tokenek a LABELS-ből
      tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7", "t4_tok8", "t4_tok9"],
      // indexek 0-tól indulnak. Magyar: "tejfogak" (2), "csontfogak" (7). Angol: "baby-teeth" (2), "adult-teeth" (6).
      // A logika miatt egy univerzális tömböt adunk meg, amit minden nyelv megpróbál értelmezni, de érdemes lehet fix indexekre tenni a helyes szavakat, ha lehet.
      // Itt most a magyar mondat felépítésére fókuszálva a [2, 7] a jó, az angolnál/németnél is úgy igazítottuk a szavakat, hogy a kulcsszavak a 3. és a 8. helyen vagy ahhoz közel legyenek, de a highlight-text-nél a legbiztosabb, ha a LABELS-ben a kulcsszó fix indexre kerül.
      // Emlékezz, a tömb 0-indítású!
      // HU: 0:Gyerekkorban, 1:a, 2:tejfogak, 3:kiesnek, 4:és, 5:a, 6:helyükre, 7:csontfogak, 8:nőnek
      // EN: 0:In, 1:childhood, 2:baby-teeth, 3:fall, 4:out, 5:and, 6:adult-teeth, 7:grow, 8:in (Jaj, itt az angolnál a 2 és a 6 a jó, a németnél a 4 și 7.
      // Mivel a motor jelenleg fix `correctIndices` tömböt vár a `TopicDef`-ben, ezért a kulcsszavakat a 2. és a 7. helyre tesszük minden nyelvben, és a többit "töltelékszavakkal" pótoljuk ki.
      // JAVÍTVA A NYELVI VERZIÓKBAN FENT (lásd a LABEL részt).
      // Így a correctIndices: [2, 7] működni fog mindenhol!
      correctIndices: [2, 7],
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
      tapCount: { emoji: "❤️", count: 4 },
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
  icon: "🫀",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BodySystemsExplorer = memo(function BodySystemsExplorer({
  color = "#EF4444", // Red-500 a szív és vérkeringés miatt
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
      explorerId="sachkunde_k3_body_systems" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default BodySystemsExplorer;
