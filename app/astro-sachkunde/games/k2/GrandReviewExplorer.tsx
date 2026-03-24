"use client";
// GrandReviewExplorer.tsx — Sachkunde Island i9: Grand Review (K2)
// Topics: 1) Táplálkozás 2) Növények 3) Vízkörzés 4) Állatok és élőhelyek 5) Nagy K2 Bajnok

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Alma (Egészséges) */}
      <g transform="translate(70, 75)">
        <circle cx="0" cy="0" r="25" fill="#EF4444" />
        <path d="M 0,-25 Q 15,-40 25,-25 Q 15,-15 0,-25" fill="#22C55E" />
        <rect x="-2" y="-35" width="4" height="15" fill="#78350F" />
      </g>
      {/* Vizespohár (Egészséges) */}
      <g transform="translate(170, 75)">
        <path d="M -15,-20 L 15,-20 L 10,25 L -10,25 Z" fill="#BAE6FD" stroke="#3B82F6" strokeWidth="3" strokeLinejoin="round" />
        <path d="M -12,-5 L 12,-5" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <rect x="0" y="95" width="240" height="45" fill="#78350F" />
      <g transform="translate(120, 95)">
        {/* Gyökér */}
        <path d="M 0,0 Q -15,15 -5,30 M 0,0 Q 15,20 10,35" fill="none" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        {/* Szár */}
        <rect x="-4" y="-55" width="8" height="55" fill="#16A34A" />
        {/* Levél */}
        <path d="M -4,-25 Q -25,-35 -35,-15 Q -15,-10 -4,-25" fill="#22C55E" />
        <path d="M 4,-35 Q 25,-45 35,-25 Q 15,-20 4,-35" fill="#22C55E" />
        {/* Virág */}
        <circle cx="0" cy="-60" r="15" fill="#F472B6" />
        <circle cx="0" cy="-75" r="10" fill="#F472B6" />
        <circle cx="0" cy="-45" r="10" fill="#F472B6" />
        <circle cx="-15" cy="-60" r="10" fill="#F472B6" />
        <circle cx="15" cy="-60" r="10" fill="#F472B6" />
        <circle cx="0" cy="-60" r="12" fill="#FDE047" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        {/* Víz */}
        <path d="M -90,40 Q -40,30 0,40 T 90,40 L 90,70 L -90,70 Z" fill="#3B82F6" />
        {/* Nap */}
        <circle cx="-50" cy="-35" r="20" fill="#FBBF24" />
        {/* Felhő */}
        <path d="M 30,-35 A 15,15 0 0,0 15,-20 A 15,15 0 0,0 45,-5 L 75,-5 A 15,15 0 0,0 85,-30 A 20,20 0 0,0 30,-35 Z" fill="#94A3B8" />
        {/* Eső */}
        <line x1="35" y1="0" x2="30" y2="15" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="5" x2="50" y2="20" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="0" x2="70" y2="15" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        {/* Körforgás nyíl */}
        <path d="M -30,20 Q -20,-10 10,-10" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6 4" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      {/* Erdő (Fa) */}
      <g transform="translate(60, 90)">
        <rect x="-10" y="-30" width="20" height="40" fill="#78350F" rx="2" />
        <circle cx="0" cy="-45" r="30" fill="#15803D" />
        <circle cx="-15" cy="-30" r="20" fill="#16A34A" />
        <circle cx="15" cy="-30" r="20" fill="#22C55E" />
      </g>
      {/* Tó (Víz) */}
      <g transform="translate(180, 90)">
        <ellipse cx="0" cy="15" rx="40" ry="15" fill="#3B82F6" />
        <path d="M -20,15 Q 0,20 20,10" fill="none" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 75)">
        {/* Nagy Kupa */}
        <path d="M -30,-30 L 30,-30 L 20,10 A 20,20 0 0,1 -20,10 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="4" strokeLinejoin="round" />
        <rect x="-10" y="25" width="20" height="15" fill="#D97706" />
        <rect x="-25" y="40" width="50" height="10" fill="#B45309" rx="3" />
        {/* Kupa fülei */}
        <path d="M -30,-20 C -50,-20 -50,0 -25,5" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
        <path d="M 30,-20 C 50,-20 50,0 25,5" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
        {/* Csillag */}
        <polygon points="0,-15 5,-5 15,-5 7,2 10,12 0,5 -10,12 -7,2 -15,-5 -5,-5" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Nagy K2 Kvíz",
    // T1: Táplálkozás
    t1_title: "1. Próba: Táplálkozás",
    t1_text: "Ahhoz, hogy erős legyél, jól kell enned! Emlékszel még, mik a testünk legjobb barátai?",
    t1_b1: "A zöldségek és gyümölcsök tele vannak vitaminnal.",
    t1_b2: "A tiszta víz a legegészségesebb ital.",
    t1_b3: "A túl sok cukor rosszat tesz a fognak.",
    t1_inst: "Egészséges vagy Egészségtelen? Válogasd szét!",
    t1_bucket_egeszseges: "Egészséges",
    t1_bucket_rossz: "Egészségtelen",
    t1_item_e1: "Alma", t1_item_e2: "Tiszta víz",
    t1_item_r1: "Cukorka", t1_item_r2: "Kóla",
    t1_q: "Mit kell tennünk minden nap, hogy a fogunk egészséges maradjon?",
    t1_q_a: "Fogat kell mosnunk", t1_q_b: "Sok csokit kell ennünk", t1_q_c: "Rágót kell lenyelnünk", t1_q_d: "Nem kell csinálni semmit",

    // T2: Növények
    t2_title: "2. Próba: Növények",
    t2_text: "A növények csodálatosak, friss levegőt adnak nekünk. Ismételjük át a részeiket!",
    t2_b1: "A gyökér a föld alatt van.",
    t2_b2: "A szár tartja meg a növényt.",
    t2_b3: "A levelek napfényt gyűjtenek.",
    t2_inst: "Keresd meg a növény részeit az ábrán!",
    t2_area_root: "Gyökér",
    t2_area_stem: "Szár",
    t2_area_leaf: "Levél",
    t2_area_flower: "Virág",
    t2_q: "Mire van BIZTOSAN szüksége egy növénynek a növekedéshez?",
    t2_q_a: "Vízre és napfényre", t2_q_b: "Cukorra és tejre", t2_q_c: "Sötétségre", t2_q_d: "Kavicsokra",

    // T3: Vízkörzés
    t3_title: "3. Próba: Vízkörzés",
    t3_text: "A víz sosincs egy helyben, folyamatosan körbe-körbe utazik a világban.",
    t3_b1: "A Nap felmelegíti a tavakat.",
    t3_b2: "A pára felszáll és felhő lesz belőle.",
    t3_b3: "A felhőből újra eső esik a földre.",
    t3_inst: "Mi a vízkörzés sorrendje?",
    t3_w1: "Nap melegít", t3_w2: "Pára felszáll", t3_w3: "Felhő lesz", t3_w4: "Esik az eső",
    t3_q: "Mi melegíti fel a vizet a természetben?",
    t3_q_a: "A Nap", t3_q_b: "A Hold", t3_q_c: "A csillagok", t3_q_d: "A fák",

    // T4: Állatok és élőhelyek
    t4_title: "4. Próba: Hol élnek az állatok?",
    t4_text: "A bolygónkon rengetegféle élőhely található. Minden állat megtalálja a neki valót!",
    t4_b1: "A halak a vízben élnek és kopoltyúval lélegeznek.",
    t4_b2: "A mókusok az erdőben, a fákon ugrálnak.",
    t4_b3: "Vigyáznunk kell az otthonukra!",
    t4_inst: "Párosítsd az állatot az otthonával!",
    t4_l1: "Hal", t4_r1: "Tó (Víz)",
    t4_l2: "Mókus", t4_r2: "Erdő (Fák)",
    t4_l3: "Teve", t4_r3: "Sivatag (Homok)",
    t4_q: "Mit tesz a medve télen, amikor nagyon hideg van?",
    t4_q_a: "Téli álmot alszik", t4_q_b: "Elrepül délre", t4_q_c: "Fürdik a tóban", t4_q_d: "Fagyit eszik",

    // T5: Nagy K2 Bajnok
    t5_title: "5. Próba: A te világod",
    t5_text: "Szuper ügyes voltál idén! Megtanultad, hogyan vigyázz magadra, a természetre és a környezetedre.",
    t5_b1: "Mindenki része a nagy közösségnek.",
    t5_b2: "Takarékoskodj a vízzel és védd az állatokat!",
    t5_b3: "Legyél okos és kíváncsi kutató!",
    t5_inst: "Egészítsd ki az utolsó mondatot!",
    t5_gap_sentence: "Ha vigyázunk a természetre és segítünk egymásnak, a világ egy {gap} hely lesz.",
    t5_c51: "jobb", t5_c52: "rosszabb", t5_c53: "szomorúbb",
    t5_q: "Mit csinálsz, ha szemetet látsz az erdőben?",
    t5_q_a: "Felveszem és a kukába dobom", t5_q_b: "Én is odadobom az enyémet", t5_q_c: "Rálépek", t5_q_d: "Felgyújtom",
  },
  en: {
    explorer_title: "Grand K2 Quiz",
    t1_title: "Trial 1: Nutrition", t1_text: "To be strong, you must eat well! Do you remember what our body's best friends are?",
    t1_b1: "Vegetables and fruits are full of vitamins.", t1_b2: "Clean water is the healthiest drink.", t1_b3: "Too much sugar is bad for your teeth.",
    t1_inst: "Healthy or Unhealthy? Sort them out!",
    t1_bucket_egeszseges: "Healthy", t1_bucket_rossz: "Unhealthy",
    t1_item_e1: "Apple", t1_item_e2: "Clean water",
    t1_item_r1: "Candy", t1_item_r2: "Cola",
    t1_q: "What must we do every day to keep our teeth healthy?",
    t1_q_a: "Brush our teeth", t1_q_b: "Eat lots of chocolate", t1_q_c: "Swallow chewing gum", t1_q_d: "Do nothing",

    t2_title: "Trial 2: Plants", t2_text: "Plants are amazing, they give us fresh air. Let's review their parts!",
    t2_b1: "The root is under the ground.", t2_b2: "The stem holds the plant up.", t2_b3: "The leaves collect sunlight.",
    t2_inst: "Find the parts of the plant in the picture!",
    t2_area_root: "Root", t2_area_stem: "Stem", t2_area_leaf: "Leaf", t2_area_flower: "Flower",
    t2_q: "What does a plant DEFINITELY need to grow?",
    t2_q_a: "Water and sunlight", t2_q_b: "Sugar and milk", t2_q_c: "Darkness", t2_q_d: "Pebbles",

    t3_title: "Trial 3: Water Cycle", t3_text: "Water never stays in one place, it constantly travels around the world.",
    t3_b1: "The Sun warms the lakes.", t3_b2: "Vapor rises and becomes a cloud.", t3_b3: "Rain falls from the cloud back to the ground.",
    t3_inst: "What is the order of the water cycle?",
    t3_w1: "Sun warms water", t3_w2: "Vapor rises", t3_w3: "Becomes a cloud", t3_w4: "Rain falls",
    t3_q: "What warms the water in nature?",
    t3_q_a: "The Sun", t3_q_b: "The Moon", t3_q_c: "The stars", t3_q_d: "The trees",

    t4_title: "Trial 4: Habitats", t4_text: "There are many habitats on our planet. Every animal finds the right one!",
    t4_b1: "Fish live in the water and breathe with gills.", t4_b2: "Squirrels jump on trees in the forest.", t4_b3: "We must protect their homes!",
    t4_inst: "Match the animal with its home!",
    t4_l1: "Fish", t4_r1: "Lake (Water)",
    t4_l2: "Squirrel", t4_r2: "Forest (Trees)",
    t4_l3: "Camel", t4_r3: "Desert (Sand)",
    t4_q: "What does the bear do in winter when it's very cold?",
    t4_q_a: "Sleeps (hibernates)", t4_q_b: "Flies south", t4_q_c: "Bathes in the lake", t4_q_d: "Eats ice cream",

    t5_title: "Trial 5: Your World", t5_text: "You did great this year! You learned how to take care of yourself, nature, and your environment.",
    t5_b1: "Everyone is part of the big community.", t5_b2: "Save water and protect animals!", t5_b3: "Be a smart and curious explorer!",
    t5_inst: "Fill in the final sentence!",
    t5_gap_sentence: "If we protect nature and help each other, the world will be a {gap} place.",
    t5_c51: "better", t5_c52: "worse", t5_c53: "sadder",
    t5_q: "What do you do if you see trash in the forest?",
    t5_q_a: "Pick it up and put it in the bin", t5_q_b: "Throw mine there too", t5_q_c: "Step on it", t5_q_d: "Burn it",
  },
  de: {
    explorer_title: "Das große K2-Quiz",
    t1_title: "1. Prüfung: Ernährung", t1_text: "Um stark zu sein, musst du gut essen! Erinnerst du dich an die besten Freunde unseres Körpers?",
    t1_b1: "Gemüse und Obst stecken voller Vitamine.", t1_b2: "Sauberes Wasser ist das gesündeste Getränk.", t1_b3: "Zu viel Zucker ist schlecht für die Zähne.",
    t1_inst: "Gesund oder Ungesund? Sortiere sie!",
    t1_bucket_egeszseges: "Gesund", t1_bucket_rossz: "Ungesund",
    t1_item_e1: "Apfel", t1_item_e2: "Wasser",
    t1_item_r1: "Bonbon", t1_item_r2: "Cola",
    t1_q: "Was müssen wir jeden Tag tun, damit unsere Zähne gesund bleiben?",
    t1_q_a: "Zähne putzen", t1_q_b: "Viel Schokolade essen", t1_q_c: "Kaugummi schlucken", t1_q_d: "Gar nichts tun",

    t2_title: "2. Prüfung: Pflanzen", t2_text: "Pflanzen sind wunderbar, sie geben uns frische Luft. Wiederholen wir ihre Teile!",
    t2_b1: "Die Wurzel ist unter der Erde.", t2_b2: "Der Stängel hält die Pflanze.", t2_b3: "Die Blätter sammeln Sonnenlicht.",
    t2_inst: "Finde die Teile der Pflanze im Bild!",
    t2_area_root: "Wurzel", t2_area_stem: "Stängel", t2_area_leaf: "Blatt", t2_area_flower: "Blüte",
    t2_q: "Was braucht eine Pflanze UNBEDINGT zum Wachsen?",
    t2_q_a: "Wasser und Sonnenlicht", t2_q_b: "Zucker und Milch", t2_q_c: "Dunkelheit", t2_q_d: "Steine",

    t3_title: "3. Prüfung: Wasserkreislauf", t3_text: "Wasser bleibt nie an einem Ort, es reist ständig um die Welt.",
    t3_b1: "Die Sonne erwärmt die Seen.", t3_b2: "Dampf steigt auf und wird zur Wolke.", t3_b3: "Regen fällt aus der Wolke zurück auf die Erde.",
    t3_inst: "Wie ist die Reihenfolge des Wasserkreislaufs?",
    t3_w1: "Sonne wärmt", t3_w2: "Dampf steigt auf", t3_w3: "Wird zur Wolke", t3_w4: "Regen fällt",
    t3_q: "Was erwärmt das Wasser in der Natur?",
    t3_q_a: "Die Sonne", t3_q_b: "Der Mond", t3_q_c: "Die Sterne", t3_q_d: "Die Bäume",

    t4_title: "4. Prüfung: Lebensräume", t4_text: "Es gibt viele Lebensräume auf unserem Planeten. Jedes Tier findet den richtigen!",
    t4_b1: "Fische leben im Wasser und atmen mit Kiemen.", t4_b2: "Eichhörnchen springen auf Bäumen im Wald.", t4_b3: "Wir müssen ihr Zuhause schützen!",
    t4_inst: "Verbinde das Tier mit seinem Zuhause!",
    t4_l1: "Fisch", t4_r1: "See (Wasser)",
    t4_l2: "Eichhörnchen", t4_r2: "Wald (Bäume)",
    t4_l3: "Kamel", t4_r3: "Wüste (Sand)",
    t4_q: "Was macht der Bär im Winter, wenn es sehr kalt ist?",
    t4_q_a: "Er hält Winterschlaf", t4_q_b: "Er fliegt in den Süden", t4_q_c: "Er badet im See", t4_q_d: "Er isst Eis",

    t5_title: "5. Prüfung: Deine Welt", t5_text: "Du hast dieses Jahr toll mitgemacht! Du weißt jetzt, wie du auf dich und die Natur aufpasst.",
    t5_b1: "Jeder ist Teil der Gemeinschaft.", t5_b2: "Spare Wasser und schütze die Tiere!", t5_b3: "Sei ein schlauer Entdecker!",
    t5_inst: "Ergänze den letzten Satz!",
    t5_gap_sentence: "Wenn wir die Natur schützen und einander helfen, wird die Welt ein {gap} Ort.",
    t5_c51: "besserer", t5_c52: "schlechterer", t5_c53: "traurigerer",
    t5_q: "Was machst du, wenn du Müll im Wald siehst?",
    t5_q_a: "Ich hebe ihn auf und werfe ihn in den Mülleimer", t5_q_b: "Ich werfe meinen auch dazu", t5_q_c: "Ich trete darauf", t5_q_d: "Ich verbrenne ihn",
  },
  ro: {
    explorer_title: "Marele Test K2",
    t1_title: "Proba 1: Alimentație", t1_text: "Pentru a fi puternic, trebuie să mănânci bine! Mai știi care sunt cei mai buni prieteni ai corpului nostru?",
    t1_b1: "Legumele și fructele sunt pline de vitamine.", t1_b2: "Apa curată este cea mai sănătoasă băutură.", t1_b3: "Prea mult zahăr face rău la dinți.",
    t1_inst: "Sănătos sau Nesănătos? Sortează-le!",
    t1_bucket_egeszseges: "Sănătos", t1_bucket_rossz: "Nesănătos",
    t1_item_e1: "Măr", t1_item_e2: "Apă curată",
    t1_item_r1: "Bomboană", t1_item_r2: "Cola",
    t1_q: "Ce trebuie să facem în fiecare zi pentru ca dinții noștri să rămână sănătoși?",
    t1_q_a: "Să ne spălăm pe dinți", t1_q_b: "Să mâncăm multă ciocolată", t1_q_c: "Să înghițim guma", t1_q_d: "Să nu facem nimic",

    t2_title: "Proba 2: Plante", t2_text: "Plantele sunt minunate, ne dau aer proaspăt. Să repetăm părțile lor!",
    t2_b1: "Rădăcina este sub pământ.", t2_b2: "Tulpina ține planta dreaptă.", t2_b3: "Frunzele adună lumina soarelui.",
    t2_inst: "Găsește părțile plantei în imagine!",
    t2_area_root: "Rădăcină", t2_area_stem: "Tulpină", t2_area_leaf: "Frunză", t2_area_flower: "Floare",
    t2_q: "De ce are planta NEAPĂRAT nevoie ca să crească?",
    t2_q_a: "De apă și lumina soarelui", t2_q_b: "De zahăr și lapte", t2_q_c: "De întuneric", t2_q_d: "De pietricele",

    t3_title: "Proba 3: Circuitul Apei", t3_text: "Apa nu stă niciodată pe loc, ea călătorește continuu prin lume.",
    t3_b1: "Soarele încălzește lacurile.", t3_b2: "Vaporii se ridică și devin nori.", t3_b3: "Ploaia cade din nori înapoi pe pământ.",
    t3_inst: "Care este ordinea circuitului apei?",
    t3_w1: "Soarele încălzește", t3_w2: "Vaporii se ridică", t3_w3: "Se face nor", t3_w4: "Cade ploaia",
    t3_q: "Ce încălzește apa în natură?",
    t3_q_a: "Soarele", t3_q_b: "Luna", t3_q_c: "Stelele", t3_q_d: "Copacii",

    t4_title: "Proba 4: Habitate", t4_text: "Pe planeta noastră există multe habitate. Fiecare animal îl găsește pe cel potrivit!",
    t4_b1: "Peștii trăiesc în apă și respiră prin branhii.", t4_b2: "Veverițele sar pe copaci în pădure.", t4_b3: "Trebuie să le protejăm casa!",
    t4_inst: "Potrivește animalul cu casa lui!",
    t4_l1: "Pește", t4_r1: "Lac (Apă)",
    t4_l2: "Veveriță", t4_r2: "Pădure (Copaci)",
    t4_l3: "Cămilă", t4_r3: "Deșert (Nisip)",
    t4_q: "Ce face ursul iarna, când este foarte frig?",
    t4_q_a: "Doarme (hibernează)", t4_q_b: "Zboară spre sud", t4_q_c: "Se scaldă în lac", t4_q_d: "Mănâncă înghețată",

    t5_title: "Proba 5: Lumea ta", t5_text: "Ai fost super anul acesta! Ai învățat cum să ai grijă de tine, de natură și de mediu.",
    t5_b1: "Toată lumea face parte din comunitate.", t5_b2: "Economisește apa și protejează animalele!", t5_b3: "Fii un explorator deștept!",
    t5_inst: "Completează ultima propoziție!",
    t5_gap_sentence: "Dacă protejăm natura și ne ajutăm, lumea va fi un loc mai {gap}.",
    t5_c51: "bun", t5_c52: "rău", t5_c53: "trist",
    t5_q: "Ce faci dacă vezi gunoi în pădure?",
    t5_q_a: "Îl iau și îl arunc la coș", t5_q_b: "Îl arunc și pe al meu acolo", t5_q_c: "Calc pe el", t5_q_d: "Îi dau foc",
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
        { id: "egeszseges", label: "t1_bucket_egeszseges" },
        { id: "rossz", label: "t1_bucket_rossz" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "egeszseges" },
        { text: "t1_item_r1", bucketId: "rossz" },
        { text: "t1_item_e2", bucketId: "egeszseges" },
        { text: "t1_item_r2", bucketId: "rossz" },
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
      type: "label-diagram",
      areas: [
        { id: "flower", x: 50, y: 15, label: "t2_area_flower" },
        { id: "leaf",   x: 35, y: 55, label: "t2_area_leaf" },
        { id: "stem",   x: 50, y: 70, label: "t2_area_stem" },
        { id: "root",   x: 50, y: 85, label: "t2_area_root" },
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3],
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
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
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
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GrandReviewExplorer = memo(function GrandReviewExplorer({
  color = "#F59E0B", // Arany/Amber a bajnokoknak
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
      grade={2} 
      explorerId="sachkunde_k2_grand_review" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default GrandReviewExplorer;
