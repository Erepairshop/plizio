"use client";
// MammalsBirdsExplorer.tsx — Sachkunde Island i2: Mammals & Birds (K4)
// Topics: 1) Emlősök és Madarak különbségei 2) Madarak anatómiája 3) Madárvándorlás 4) Emlősök gondoskodása 5) Keresd a tojásokat!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Emlős (Róka sziluett) */}
      <g transform="translate(60, 80)">
        <polygon points="-20,10 -15,-10 -5,-5" fill="#D97706" />
        <polygon points="-5,-5 5,-20 15,-5" fill="#D97706" />
        <ellipse cx="0" cy="5" rx="18" ry="12" fill="#F59E0B" />
        <path d="M -15,5 Q -30,0 -35,15 Q -20,15 -15,5" fill="#D97706" />
        <circle cx="10" cy="2" r="2" fill="#000" />
      </g>
      {/* Madár (Bagoly sziluett) */}
      <g transform="translate(180, 80)">
        <ellipse cx="0" cy="0" rx="15" ry="25" fill="#78350F" />
        <path d="M -15,0 Q -25,10 -15,20" fill="none" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
        <path d="M 15,0 Q 25,10 15,20" fill="none" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
        <circle cx="-6" cy="-10" r="4" fill="#FBBF24" />
        <circle cx="6" cy="-10" r="4" fill="#FBBF24" />
        <polygon points="-3,-4 3,-4 0,2" fill="#F59E0B" />
      </g>
      <line x1="120" y1="20" x2="120" y2="120" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="5 5" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Madár anatómiája (Geometriai madár) */}
      <g transform="translate(120, 70)">
        {/* Faroktollak */}
        <polygon points="-30,5 -50,-10 -45,15" fill="#3B82F6" />
        {/* Test */}
        <ellipse cx="0" cy="0" rx="35" ry="20" fill="#60A5FA" />
        {/* Szárny */}
        <path d="M -10,-5 Q 10,-25 20,-5 Q 10,15 -10,-5 Z" fill="#93C5FD" stroke="#2563EB" strokeWidth="2" />
        {/* Fej */}
        <circle cx="30" cy="-15" r="15" fill="#60A5FA" />
        {/* Csőr */}
        <polygon points="42,-20 55,-10 40,-8" fill="#F59E0B" />
        {/* Szem */}
        <circle cx="32" cy="-18" r="3" fill="#1E3A8A" />
        {/* Lábak/Karmok */}
        <line x1="-5" y1="18" x2="-10" y2="35" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
        <path d="M -10,35 L -15,40 M -10,35 L -5,40" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="18" x2="5" y2="35" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
        <path d="M 5,35 L 0,40 M 5,35 L 10,40" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Térkép és vándorlás */}
      <circle cx="120" cy="70" r="50" fill="#BAE6FD" />
      <path d="M 80,40 Q 100,20 120,40 T 150,30 Q 140,60 110,60 Z" fill="#4ADE80" />
      <path d="M 90,80 Q 120,70 140,90 T 150,110 Q 120,120 100,100 Z" fill="#FCD34D" />
      
      {/* V alakú madárraj repül délre */}
      <g transform="translate(120, 60)">
        <path d="M 0,-30 L -5,-40 M 0,-30 L 5,-40" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M -15,-15 L -20,-25 M -15,-15 L -10,-25" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 15,-15 L 10,-25 M 15,-15 L 20,-25" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M -30,0 L -35,-10 M -30,0 L -25,-10" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 30,0 L 25,-10 M 30,0 L 35,-10" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Irány nyíl */}
        <path d="M 0,0 L 0,30" stroke="#EF4444" strokeWidth="4" strokeDasharray="4 4" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      {/* Emlős anya és kicsinye (Kutya/Farkas szerű forma tejjel) */}
      <g transform="translate(120, 80)">
        {/* Anya */}
        <circle cx="-20" cy="-10" r="25" fill="#B45309" />
        <circle cx="-35" cy="-25" r="10" fill="#92400E" />
        <circle cx="-5" cy="-25" r="10" fill="#92400E" />
        <path d="M -20,15 L -20,35" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
        {/* Kicsiny */}
        <circle cx="25" cy="5" r="15" fill="#D97706" />
        <circle cx="15" cy="-5" r="6" fill="#B45309" />
        <circle cx="35" cy="-5" r="6" fill="#B45309" />
        {/* Tejcsepp */}
        <path d="M 0,5 Q 5,15 5,20 A 5,5 0 0,1 -5,20 Q -5,15 0,5 Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Fészek ágon */}
      <g transform="translate(120, 100)">
        {/* Ág */}
        <path d="M -120,0 L 50,0 Q 80,-10 120,-30" fill="none" stroke="#78350F" strokeWidth="12" strokeLinecap="round" />
        <path d="M 20,0 L 60,-40" fill="none" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
        {/* Levelek */}
        <ellipse cx="-80" cy="-15" rx="15" ry="8" fill="#4ADE80" transform="rotate(-20 -80 -15)" />
        <ellipse cx="40" cy="-30" rx="15" ry="8" fill="#22C55E" transform="rotate(30 40 -30)" />
        <ellipse cx="100" cy="-20" rx="15" ry="8" fill="#16A34A" transform="rotate(-45 100 -20)" />
        {/* Fészek */}
        <path d="M -40,0 C -40,30 40,30 40,0 Z" fill="#B45309" />
        <path d="M -35,5 Q 0,25 35,5" fill="none" stroke="#92400E" strokeWidth="3" />
        <path d="M -25,15 Q 0,30 25,15" fill="none" stroke="#92400E" strokeWidth="3" />
      </g>
      {/* A tap-count motor tojásokat (🥚) tesz ide a gombokra */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Emlősök és Madarak",
    // T1: Emlős vs Madár
    t1_title: "Tollak és szőrök",
    t1_text: "Mindkét csoport melegvérű, de sok mindenben különböznek. A madarak tojásokat raknak, az emlősök pedig eleven kicsinyeket hoznak a világra.",
    t1_b1: "A madarak testét toll borítja, és csőrük van.",
    t1_b2: "Az emlősök testét szőr borítja.",
    t1_b3: "A denevér egy különleges emlős, amelyik tud repülni!",
    t1_inst: "Válogasd szét: Melyik tulajdonság kire jellemző?",
    t1_bucket_emlos: "Emlősök (Szőrös)",
    t1_bucket_madar: "Madarak (Tollas)",
    t1_item_e1: "Szőrös test", t1_item_e2: "Eleven szülés",
    t1_item_m1: "Tojásrakás", t1_item_m2: "Csőr",
    t1_q: "Melyik állat egy repülő emlős?",
    t1_q_a: "A denevér", t1_q_b: "A sas", t1_q_c: "A pingvin", t1_q_d: "A strucc",

    // T2: Madár anatómia
    t2_title: "A repülés mesterei",
    t2_text: "A madarak teste tökéletesen alkalmazkodott a repüléshez. Csontjaik üregesek, így nagyon könnyűek.",
    t2_b1: "A csőr alakja attól függ, mit eszik a madár.",
    t2_b2: "A szárnyak és a faroktollak a repülést és a kormányzást segítik.",
    t2_b3: "A karmok a kapaszkodást és a vadászatot szolgálják.",
    t2_inst: "Keresd meg a madár részeit az ábrán!",
    t2_area_beak: "Csőr",
    t2_area_wing: "Szárny",
    t2_area_tail: "Faroktollak",
    t2_area_claws: "Karmok",
    t2_q: "Miért üregesek (belül üresek) a madarak csontjai?",
    t2_q_a: "Hogy könnyebbek legyenek a repüléshez", t2_q_b: "Hogy vizet tároljanak benne", t2_q_c: "Hogy erősebbek legyenek", t2_q_d: "Hogy zenéljenek vele",

    // T3: Madárvándorlás (Highlight-text) - Cél: [1, 4]
    t3_title: "A nagy utazás",
    t3_text: "Télen kevés a táplálék, ezért sok madár elhagyja az otthonát. Hatalmas csapatokban, gyakran 'V' alakban repülnek.",
    t3_b1: "A költöző madarak ősszel melegebb vidékre mennek.",
    t3_b2: "Vannak madarak, akik több ezer kilométert repülnek.",
    t3_b3: "Tavasszal visszatérnek a régi fészkükbe.",
    t3_inst: "Keresd meg és jelöld meg a MONDATBAN az állat nevét és az irányt!",
    t3_tok0: "A", t3_tok1: "madarak", t3_tok2: "ősszel", t3_tok3: "mindig", t3_tok4: "délre", t3_tok5: "repülnek.",
    t3_q: "Miért vándorolnak a madarak délre ősszel?",
    t3_q_a: "Mert ott melegebb van és több a táplálék", t3_q_b: "Mert ott jobb a tévéműsor", t3_q_c: "Mert menekülnek a medvék elől", t3_q_d: "Mert meg akarják nézni a tengert",

    // T4: Emlősök gondoskodása
    t4_title: "Az emlősök titka",
    t4_text: "Tudtad, hogy honnan kapták az emlősök a nevüket? Arról, hogy az anyaállat anyatejjel táplálja a kicsinyeit!",
    t4_b1: "A kicsinyek az anyaméhben fejlődnek ki.",
    t4_b2: "Születés után az anya az emlőiből tejjel eteti (szoptatja) őket.",
    t4_b3: "Az emlősök nagyon sokáig gondoskodnak a kölykeikről.",
    t4_inst: "Tedd sorba, hogyan nő fel egy kis emlős!",
    t4_w1: "Megszületik", t4_w2: "Tejet iszik", t4_w3: "Anyja gondozza", t4_w4: "Önálló lesz",
    t4_q: "Mivel táplálja az emlős anyaállat a frissen született kicsinyét?",
    t4_q_a: "Anyatejjel", t4_q_b: "Kenyérrel", t4_q_c: "Rovarokkal", t4_q_d: "Fűvel",

    // T5: Fészekrakók (Tap-count)
    t5_title: "Biztonságos fészek",
    t5_text: "A madarak gondosan építik meg a fészküket gallyakból és sárból, hogy biztonságban tartsák a tojásokat.",
    t5_b1: "A madarak ráülnek a tojásokra, hogy melegen tartsák őket.",
    t5_b2: "Ezt a folyamatot kotlásnak nevezzük.",
    t5_b3: "Vigyázzunk a madárfészkekre a fákon!",
    t5_inst: "Keresd meg a fészekben elrejtett 5 tojást (🥚)! Bökj rájuk, hogy megszámold őket!",
    t5_q: "Hogyan hívják azt, amikor a madár melegen tartja a tojásokat?",
    t5_q_a: "Kotlás", t5_q_b: "Alvás", t5_q_c: "Vándorlás", t5_q_d: "Éneklés",
  },
  en: {
    explorer_title: "Mammals & Birds",
    t1_title: "Feathers and Fur", t1_text: "Both groups are warm-blooded, but they differ in many ways. Birds lay eggs, and mammals give birth to live young.",
    t1_b1: "Birds have feathers and a beak.", t1_b2: "Mammals are covered in fur or hair.", t1_b3: "The bat is a special mammal that can fly!",
    t1_inst: "Sort it out: Which feature belongs to whom?",
    t1_bucket_emlos: "Mammals (Fur)",
    t1_bucket_madar: "Birds (Feathers)",
    t1_item_e1: "Furry body", t1_item_e2: "Live birth",
    t1_item_m1: "Laying eggs", t1_item_m2: "Beak",
    t1_q: "Which animal is a flying mammal?",
    t1_q_a: "The bat", t1_q_b: "The eagle", t1_q_c: "The penguin", t1_q_d: "The ostrich",

    t2_title: "Masters of Flight", t2_text: "Bird bodies are perfectly adapted for flying. Their bones are hollow, making them very light.",
    t2_b1: "The shape of the beak depends on what the bird eats.", t2_b2: "Wings and tail feathers help them fly and steer.", t2_b3: "Claws are used for grabbing and hunting.",
    t2_inst: "Find the parts of the bird on the diagram!",
    t2_area_beak: "Beak", t2_area_wing: "Wing", t2_area_tail: "Tail feathers", t2_area_claws: "Claws",
    t2_q: "Why are bird bones hollow (empty inside)?",
    t2_q_a: "To be lighter for flying", t2_q_b: "To store water", t2_q_c: "To be stronger", t2_q_d: "To make music",

    // Cél: [1, 4] -> birds, south
    t3_title: "The Great Journey", t3_text: "Food is scarce in winter, so many birds leave home. They fly in huge flocks, often in a 'V' shape.",
    t3_b1: "Migrating birds fly to warmer areas in autumn.", t3_b2: "Some birds fly thousands of kilometers.", t3_b3: "They return to their old nests in spring.",
    t3_inst: "Find and mark the animal and the direction in the sentence!",
    t3_tok0: "The", t3_tok1: "birds", t3_tok2: "in-autumn", t3_tok3: "fly", t3_tok4: "south", t3_tok5: "together.",
    t3_q: "Why do birds migrate south in autumn?",
    t3_q_a: "Because it is warmer and there is more food", t3_q_b: "Because the TV shows are better", t3_q_c: "Because they are fleeing from bears", t3_q_d: "To look at the sea",

    t4_title: "Mammal Care", t4_text: "Do you know where mammals got their name? From the mammary glands mothers use to feed their babies milk!",
    t4_b1: "The babies develop inside the mother's womb.", t4_b2: "After birth, the mother feeds them with milk.", t4_b3: "Mammals take care of their young for a long time.",
    t4_inst: "Put the steps of a mammal growing up in order!",
    t4_w1: "Is born", t4_w2: "Drinks milk", t4_w3: "Mother cares for it", t4_w4: "Becomes independent",
    t4_q: "What does a mother mammal feed her newborn baby?",
    t4_q_a: "Milk", t4_q_b: "Bread", t4_q_c: "Insects", t4_q_d: "Grass",

    t5_title: "Safe Nests", t5_text: "Birds carefully build their nests from twigs and mud to keep their eggs safe.",
    t5_b1: "Birds sit on the eggs to keep them warm.", t5_b2: "This process is called incubation.", t5_b3: "Protect bird nests on trees!",
    t5_inst: "Find the 5 eggs (🥚) hidden in the nest! Tap to count them!",
    t5_q: "What is it called when a bird keeps its eggs warm?",
    t5_q_a: "Incubation", t5_q_b: "Sleeping", t5_q_c: "Migration", t5_q_d: "Singing",
  },
  de: {
    explorer_title: "Säugetiere & Vögel",
    t1_title: "Federn und Fell", t1_text: "Beide Gruppen sind warmblütig, aber sehr verschieden. Vögel legen Eier, Säugetiere bringen lebende Junge zur Welt.",
    t1_b1: "Vögel haben Federn und einen Schnabel.", t1_b2: "Säugetiere sind mit Fell oder Haaren bedeckt.", t1_b3: "Die Fledermaus ist ein fliegendes Säugetier!",
    t1_inst: "Sortiere: Welche Eigenschaft gehört zu wem?",
    t1_bucket_emlos: "Säugetiere (Fell)",
    t1_bucket_madar: "Vögel (Federn)",
    t1_item_e1: "Fell", t1_item_e2: "Lebendgeburt",
    t1_item_m1: "Eier legen", t1_item_m2: "Schnabel",
    t1_q: "Welches Tier ist ein fliegendes Säugetier?",
    t1_q_a: "Die Fledermaus", t1_q_b: "Der Adler", t1_q_c: "Der Pinguin", t1_q_d: "Der Strauß",

    t2_title: "Meister des Fluges", t2_text: "Vogelkörper sind perfekt an das Fliegen angepasst. Ihre Knochen sind hohl und deshalb sehr leicht.",
    t2_b1: "Die Form des Schnabels hängt davon ab, was der Vogel frisst.", t2_b2: "Flügel und Schwanzfedern helfen beim Fliegen und Steuern.", t2_b3: "Die Krallen dienen zum Greifen und Jagen.",
    t2_inst: "Finde die Teile des Vogels auf dem Bild!",
    t2_area_beak: "Schnabel", t2_area_wing: "Flügel", t2_area_tail: "Schwanzfedern", t2_area_claws: "Krallen",
    t2_q: "Warum sind Vogelknochen hohl (innen leer)?",
    t2_q_a: "Um beim Fliegen leichter zu sein", t2_q_b: "Um Wasser zu speichern", t2_q_c: "Um stärker zu sein", t2_q_d: "Um Musik zu machen",

    // Cél: [1, 4] -> Vögel, nach-Süden
    t3_title: "Die große Reise", t3_text: "Im Winter gibt es wenig Nahrung, deshalb verlassen viele Vögel ihre Heimat. Sie fliegen oft in V-Form.",
    t3_b1: "Zugvögel fliegen im Herbst in wärmere Gebiete.", t3_b2: "Manche Vögel fliegen Tausende von Kilometern.", t3_b3: "Im Frühling kehren sie in ihr altes Nest zurück.",
    t3_inst: "Finde und markiere das Tier und die Richtung im Satz!",
    t3_tok0: "Die", t3_tok1: "Vögel", t3_tok2: "fliegen", t3_tok3: "im-Herbst", t3_tok4: "nach-Süden", t3_tok5: "zusammen.",
    t3_q: "Warum ziehen Vögel im Herbst nach Süden?",
    t3_q_a: "Weil es dort wärmer ist und es mehr Nahrung gibt", t3_q_b: "Weil das Fernsehprogramm besser ist", t3_q_c: "Weil sie vor Bären fliehen", t3_q_d: "Um sich das Meer anzusehen",

    t4_title: "Säugetier-Fürsorge", t4_text: "Säugetiere haben ihren Namen daher, dass die Mutter ihre Babys mit Milch säugt!",
    t4_b1: "Die Babys wachsen im Bauch der Mutter heran.", t4_b2: "Nach der Geburt füttert die Mutter sie mit Milch.", t4_b3: "Säugetiere kümmern sich sehr lange um ihre Jungen.",
    t4_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t4_w1: "Wird geboren", t4_w2: "Trinkt Milch", t4_w3: "Mutter pflegt es", t4_w4: "Wird selbstständig",
    t4_q: "Womit füttert eine Säugetiermutter ihr neugeborenes Baby?",
    t4_q_a: "Mit Milch", t4_q_b: "Mit Brot", t4_q_c: "Mit Insekten", t4_q_d: "Mit Gras",

    t5_title: "Sichere Nester", t5_text: "Vögel bauen sorgfältig Nester aus Zweigen und Schlamm, um ihre Eier sicher aufzubewahren.",
    t5_b1: "Vögel sitzen auf den Eiern, um sie warm zu halten.", t5_b2: "Diesen Vorgang nennt man Brüten.", t5_b3: "Schütze Vogelnester in den Bäumen!",
    t5_inst: "Finde die 5 im Nest versteckten Eier (🥚)! Tippe sie an!",
    t5_q: "Wie nennt man es, wenn der Vogel die Eier warm hält?",
    t5_q_a: "Brüten", t5_q_b: "Schlafen", t5_q_c: "Wandern", t5_q_d: "Singen",
  },
  ro: {
    explorer_title: "Mamifere și Păsări",
    t1_title: "Pene și blană", t1_text: "Ambele grupuri au sânge cald, dar sunt diferite. Păsările fac ouă, iar mamiferele nasc pui vii.",
    t1_b1: "Păsările au pene și cioc.", t1_b2: "Mamiferele sunt acoperite cu blană sau păr.", t1_b3: "Liliacul este un mamifer special care zboară!",
    t1_inst: "Sortează: Ce caracteristică aparține cui?",
    t1_bucket_emlos: "Mamifere (Blană)",
    t1_bucket_madar: "Păsări (Pene)",
    t1_item_e1: "Corp cu blană", t1_item_e2: "Naștere pui vii",
    t1_item_m1: "Depunere ouă", t1_item_m2: "Cioc",
    t1_q: "Care animal este un mamifer zburător?",
    t1_q_a: "Liliacul", t1_q_b: "Vulturul", t1_q_c: "Pinguinul", t1_q_d: "Struțul",

    t2_title: "Maeștrii zborului", t2_text: "Corpul păsărilor este adaptat perfect pentru zbor. Oasele lor sunt goale pe dinăuntru, fiind foarte ușoare.",
    t2_b1: "Forma ciocului depinde de ceea ce mănâncă pasărea.", t2_b2: "Aripile și penele cozii ajută la zbor și direcție.", t2_b3: "Ghearele sunt folosite pentru agățare și vânătoare.",
    t2_inst: "Găsește părțile păsării pe desen!",
    t2_area_beak: "Cioc",
    t2_area_wing: "Aripă",
    t2_area_tail: "Penele cozii",
    t2_area_claws: "Gheare",
    t2_q: "De ce sunt goale oasele păsărilor în interior?",
    t2_q_a: "Pentru a fi mai ușoare la zbor", t2_q_b: "Pentru a stoca apă", t2_q_c: "Pentru a fi mai puternice", t2_q_d: "Pentru a face muzică",

    // Cél: [1, 4] -> păsări, spre-sud
    t3_title: "Marea călătorie", t3_text: "Iarna este puțină hrană, așa că multe păsări pleacă. Ele zboară în stoluri mari, adesea în formă de 'V'.",
    t3_b1: "Păsările migratoare zboară spre zone mai calde toamna.", t3_b2: "Unele păsări zboară mii de kilometri.", t3_b3: "Primăvara se întorc la vechile cuiburi.",
    t3_inst: "Găsește și marchează animalul și direcția în propoziție!",
    t3_tok0: "Aceste", t3_tok1: "păsări", t3_tok2: "toamna", t3_tok3: "zboară", t3_tok4: "spre-sud", t3_tok5: "împreună.",
    t3_q: "De ce migrează păsările spre sud toamna?",
    t3_q_a: "Pentru că este mai cald și este mai multă mâncare", t3_q_b: "Pentru că emisiunile TV sunt mai bune", t3_q_c: "Pentru că fug de urși", t3_q_d: "Ca să vadă marea",

    t4_title: "Îngrijirea la mamifere", t4_text: "Știai de ce se numesc mamifere? Pentru că mamele își hrănesc puii cu lapte produs de glande mamare!",
    t4_b1: "Puii se dezvoltă în burta mamei.", t4_b2: "După naștere, mama îi hrănește cu lapte.", t4_b3: "Mamiferele au grijă de puii lor mult timp.",
    t4_inst: "Pune în ordine etapele de creștere ale unui mamifer!",
    t4_w1: "Se naște", t4_w2: "Bea lapte", t4_w3: "Mama îl îngrijește", t4_w4: "Devine independent",
    t4_q: "Cu ce își hrănește mama mamifer puiul nou-născut?",
    t4_q_a: "Cu lapte", t4_q_b: "Cu pâine", t4_q_c: "Cu insecte", t4_q_d: "Cu iarbă",

    t5_title: "Cuiburi sigure", t5_text: "Păsările construiesc cuiburi din crengi și noroi pentru a-și ține ouăle în siguranță.",
    t5_b1: "Păsările stau pe ouă pentru a le ține de cald.", t5_b2: "Acest proces se numește clocire.", t5_b3: "Atenție la cuiburile de păsări din copaci!",
    t5_inst: "Găsește cele 5 ouă (🥚) ascunse în cuib! Apasă pe ele ca să le numeri!",
    t5_q: "Cum se numește când pasărea ține ouăle la cald?",
    t5_q_a: "Clocire", t5_q_b: "Dormit", t5_q_c: "Migrare", t5_q_d: "Cântat",
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
        { id: "beak",  x: 80, y: 35, label: "t2_area_beak" },
        { id: "wing",  x: 50, y: 50, label: "t2_area_wing" },
        { id: "tail",  x: 25, y: 50, label: "t2_area_tail" },
        { id: "claws", x: 50, y: 80, label: "t2_area_claws" },
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
      type: "highlight-text",
      // HU: [0:A] [1:madarak] [2:ősszel] [3:mindig] [4:délre] [5:repülnek.]
      // EN: [0:The] [1:birds] [2:in-autumn] [3:fly] [4:south] [5:together.]
      // DE: [0:Die] [1:Vögel] [2:fliegen] [3:im-Herbst] [4:nach-Süden] [5:zusammen.]
      // RO: [0:Aceste] [1:păsări] [2:toamna] [3:zboară] [4:spre-sud] [5:împreună.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [1, 4],
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
      tapCount: { emoji: "🥚", count: 5 }, // Keresd a tojásokat!
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
  icon: "🦉",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MammalsBirdsExplorer = memo(function MammalsBirdsExplorer({
  color = "#D97706", // Amber a tollak/szőrök miatt
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
      explorerId="sachkunde_k4_mammals_birds" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default MammalsBirdsExplorer;
