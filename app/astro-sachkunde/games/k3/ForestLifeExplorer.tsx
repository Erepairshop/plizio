"use client";
// ForestLifeExplorer.tsx — Sachkunde Island i3: Forest Life (K3)
// Topics: 1) Az erdő rétegei 2) Erdei ragadozók 3) Háziállat-tenyésztés 4) Az erdő szabályai 5) Keresd a makkokat!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Talajszint */}
      <rect x="0" y="110" width="240" height="30" fill="#78350F" />
      <path d="M 0,110 Q 20,105 40,110 T 80,110 T 120,110 T 160,110 T 200,110 T 240,110" fill="none" stroke="#65A30D" strokeWidth="4" />
      
      {/* Fatörzs */}
      <rect x="105" y="40" width="30" height="70" fill="#92400E" />
      <path d="M 115,40 L 115,110 M 125,40 L 125,110" stroke="#78350F" strokeWidth="2" />
      
      {/* Cserjeszint */}
      <circle cx="70" cy="100" r="15" fill="#4ADE80" />
      <circle cx="85" cy="105" r="12" fill="#22C55E" />
      <circle cx="155" cy="100" r="18" fill="#16A34A" />
      <circle cx="175" cy="105" r="12" fill="#22C55E" />

      {/* Lombkoronaszint */}
      <circle cx="120" cy="35" r="35" fill="#15803D" />
      <circle cx="90" cy="45" r="25" fill="#16A34A" />
      <circle cx="150" cy="45" r="25" fill="#16A34A" />
      <circle cx="105" cy="20" r="20" fill="#22C55E" />
      <circle cx="135" cy="20" r="20" fill="#22C55E" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Farkas (Ragadozó) */}
      <g transform="translate(60, 75)">
        <polygon points="0,0 -15,-20 -5,-5" fill="#64748B" />
        <polygon points="0,0 15,-20 5,-5" fill="#64748B" />
        <ellipse cx="0" cy="5" rx="15" ry="12" fill="#94A3B8" />
        <polygon points="-10,10 10,10 0,25" fill="#475569" />
        <circle cx="-5" cy="5" r="2" fill="#000" />
        <circle cx="5" cy="5" r="2" fill="#000" />
        <circle cx="0" cy="25" r="2" fill="#000" />
      </g>
      {/* Szarvas (Növényevő) */}
      <g transform="translate(180, 75)">
        <ellipse cx="0" cy="0" rx="12" ry="20" fill="#B45309" transform="rotate(20)" />
        {/* Agancs */}
        <path d="M -5,-15 Q -15,-30 -10,-40 M -10,-25 L -20,-25 M 0,-15 Q 10,-30 5,-40 M 5,-25 L 15,-25" fill="none" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-5" cy="-5" r="2" fill="#000" />
        <circle cx="5" cy="-2" r="2" fill="#000" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Tehén és Tej */}
      <g transform="translate(60, 60)">
        {/* Tehén teste */}
        <rect x="-20" y="-15" width="40" height="25" fill="#FFFFFF" rx="5" />
        <circle cx="-10" cy="-5" r="6" fill="#000000" />
        <circle cx="10" cy="0" r="8" fill="#000000" />
        <rect x="20" y="-20" width="12" height="12" fill="#FFFFFF" rx="3" />
        <rect x="20" y="-20" width="5" height="5" fill="#000000" />
      </g>
      <g transform="translate(180, 60)">
        {/* Tejesüveg */}
        <rect x="-10" y="-20" width="20" height="35" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="3" rx="2" />
        <rect x="-5" y="-25" width="10" height="5" fill="#3B82F6" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#3B82F6" strokeWidth="2" />
      </g>
      {/* Nyíl */}
      <path d="M 100,60 L 140,60" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="4 4" markerEnd="url(#arrow)" />
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      {/* Tiltótábla */}
      <g transform="translate(120, 80)">
        {/* Oszlop */}
        <rect x="-5" y="-10" width="10" height="60" fill="#78350F" />
        {/* Tábla alap */}
        <rect x="-40" y="-40" width="80" height="50" fill="#FDE047" rx="5" />
        <rect x="-35" y="-35" width="70" height="40" fill="#FFFFFF" rx="2" />
        {/* Piros áthúzás (Tilos) */}
        <circle cx="0" cy="-15" r="12" fill="none" stroke="#EF4444" strokeWidth="4" />
        <line x1="-8" y1="-23" x2="8" y2="-7" stroke="#EF4444" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#D1FAE5" rx="20" />
      {/* Erdei háttér fával */}
      <rect x="30" y="40" width="20" height="100" fill="#92400E" />
      <circle cx="40" cy="40" r="40" fill="#15803D" />
      <circle cx="80" cy="30" r="30" fill="#16A34A" />
      <circle cx="180" cy="110" r="25" fill="#4ADE80" />
      <path d="M 0,120 Q 120,100 240,120 L 240,140 L 0,140 Z" fill="#22C55E" opacity="0.5" />
      {/* 5 Elrejtett makk (Csak vizuális dekor, a tap-count emoji gombokat generál fölé) */}
      <g fill="#B45309">
        <ellipse cx="60" cy="115" rx="6" ry="8" />
        <ellipse cx="140" cy="125" rx="6" ry="8" />
        <ellipse cx="200" cy="90" rx="6" ry="8" />
        <ellipse cx="90" cy="60" rx="6" ry="8" />
        <ellipse cx="170" cy="50" rx="6" ry="8" />
      </g>
      <g fill="#78350F">
        <path d="M 54,115 Q 60,110 66,115 Z" />
        <path d="M 134,125 Q 140,120 146,125 Z" />
        <path d="M 194,90 Q 200,85 206,90 Z" />
        <path d="M 84,60 Q 90,55 96,60 Z" />
        <path d="M 164,50 Q 170,45 176,50 Z" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Erdei Élet és Állatok",
    // T1: Erdő rétegei
    t1_title: "Az erdő emeletei",
    t1_text: "Az erdő olyan, mint egy többszintes ház! Minden emeleten más növények és állatok élnek.",
    t1_b1: "A legmagasabb a lombkoronaszint, ahol a madarak fészkelnek.",
    t1_b2: "Alatta a cserjeszint (bokrok) található.",
    t1_b3: "Legalul a talajszint és a gyökérszint van a gombákkal.",
    t1_inst: "Keresd meg az erdő rétegeit az ábrán!",
    t1_area_canopy: "Lombkoronaszint",
    t1_area_bush: "Cserjeszint",
    t1_area_ground: "Talajszint",
    t1_q: "Melyik az erdő legfelső rétege?",
    t1_q_a: "A lombkoronaszint", t1_q_b: "A cserjeszint", t1_q_c: "A talajszint", t1_q_d: "A gyökérszint",

    // T2: Erdei ragadozók
    t2_title: "Ragadozók és Növényevők",
    t2_text: "Az erdőben az állatok különböző dolgokat esznek. Vannak, akik növényeket rágcsálnak, és vannak, akik vadásznak.",
    t2_b1: "A szarvas és a nyúl növényevők, leveleket esznek.",
    t2_b2: "A farkas és a róka húsevő ragadozók.",
    t2_b3: "A medve mindenevő: húst és bogyókat is megeszik.",
    t2_inst: "Ragadozó vagy Növényevő? Válogasd szét!",
    t2_bucket_ragadozo: "Ragadozó 🐺",
    t2_bucket_novenyevo: "Növényevő 🦌",
    t2_item_r1: "Farkas", t2_item_r2: "Róka",
    t2_item_n1: "Szarvas", t2_item_n2: "Nyúl",
    t2_q: "Mit eszik egy növényevő állat?",
    t2_q_a: "Füvet, leveleket és bogyókat", t2_q_b: "Kisebb állatokat", t2_q_c: "Csak vizet iszik", t2_q_d: "Rovarokat",

    // T3: Háziállat-tenyésztés
    t3_title: "Állatok a farmon",
    t3_text: "Az emberek évezredek óta tenyésztenek háziállatokat (haszonállatokat), hogy élelmet és ruhát kapjanak tőlük.",
    t3_b1: "A tehén finom tejet ad nekünk.",
    t3_b2: "A tyúk tojást tojik.",
    t3_b3: "A birka vastag bundájából meleg gyapjút készítünk.",
    t3_inst: "Párosítsd az állatot azzal, amit ad nekünk!",
    t3_l1: "Tehén", t3_r1: "Tej",
    t3_l2: "Tyúk", t3_r2: "Tojás",
    t3_l3: "Birka", t3_r3: "Gyapjú",
    t3_q: "Melyik állat bundájából készül a meleg pulóver?",
    t3_q_a: "A birkáéból", t3_q_b: "A tehénéből", t3_q_c: "A tyúkéból", t3_q_d: "A disznóéból",

    // T4: Az erdő szabályai (Highlight-text)
    t4_title: "Az erdő szabályai",
    t4_text: "Az erdő az állatok otthona. Amikor kirándulunk, vendégek vagyunk, ezért be kell tartanunk a szabályokat!",
    t4_b1: "Soha ne dobáld el a szemetet!",
    t4_b2: "Ne kiabálj, mert megijeszted az állatokat.",
    t4_b3: "Vigyázz a növényekre is!",
    t4_inst: "Keresd meg és jelöld meg a mondatban a KÉT tiltott dolgot!",
    t4_tok0: "Az", t4_tok1: "erdőben", t4_tok2: "tilos", t4_tok3: "szemetelni", t4_tok4: "és", t4_tok5: "hangoskodni",
    t4_q: "Miért nem szabad hangoskodni az erdőben?",
    t4_q_a: "Mert megijesztjük vele az állatokat", t4_q_b: "Mert felébresztjük a fákat", t4_q_c: "Mert esni fog az eső", t4_q_d: "Mert eltévedünk",

    // T5: Keresd a makkokat (Tap-count)
    t5_title: "Mókusok eledele",
    t5_text: "A tölgyfa termése a makk. Ősszel a mókusok és a vaddisznók sokat esznek belőle, vagy elrejtik télire.",
    t5_b1: "A makk nagyon tápláló az erdei állatoknak.",
    t5_b2: "A mókusok elássák, és néha elfelejtik hol van.",
    t5_b3: "Ahol elfelejtik, ott új tölgyfa nőhet!",
    t5_inst: "A képen elbújt 5 darab makk. Kattints rájuk, hogy összegyűjtsd őket!",
    t5_q: "Mit csinál a mókus a makkal ősszel?",
    t5_q_a: "Megeszi vagy elrejti télire", t5_q_b: "Fészket épít belőle", t5_q_c: "Bedobja a tóba", t5_q_d: "Odaadja a medvének",
  },
  en: {
    explorer_title: "Forest Life & Animals",
    t1_title: "Layers of the Forest", t1_text: "The forest is like a multi-story house! Different plants and animals live on each floor.",
    t1_b1: "The highest is the canopy, where birds nest.", t1_b2: "Below it is the understory (bushes).", t1_b3: "At the bottom is the forest floor with roots and mushrooms.",
    t1_inst: "Find the layers of the forest on the diagram!",
    t1_area_canopy: "Canopy layer", t1_area_bush: "Understory (Bushes)", t1_area_ground: "Forest floor",
    t1_q: "Which is the highest layer of the forest?",
    t1_q_a: "The canopy layer", t1_q_b: "The understory", t1_q_c: "The forest floor", t1_q_d: "The root layer",

    t2_title: "Forest Predators", t2_text: "Animals eat different things in the forest. Some munch on plants, while others hunt.",
    t2_b1: "Deer and rabbits are herbivores, eating leaves.", t2_b2: "Wolves and foxes are carnivores (predators).", t2_b3: "Bears are omnivores: they eat meat and berries.",
    t2_inst: "Predator or Herbivore? Sort them out!",
    t2_bucket_ragadozo: "Predator 🐺", t2_bucket_novenyevo: "Herbivore 🦌",
    t2_item_r1: "Wolf", t2_item_r2: "Fox",
    t2_item_n1: "Deer", t2_item_n2: "Rabbit",
    t2_q: "What does an herbivorous animal eat?",
    t2_q_a: "Grass, leaves, and berries", t2_q_b: "Smaller animals", t2_q_c: "Only drinks water", t2_q_d: "Insects",

    t3_title: "Livestock Breeding", t3_text: "Humans have been breeding farm animals (livestock) for thousands of years to get food and clothes.",
    t3_b1: "Cows give us delicious milk.", t3_b2: "Hens lay eggs.", t3_b3: "We make warm wool from sheep's thick fleece.",
    t3_inst: "Match the animal with what it gives us!",
    t3_l1: "Cow", t3_r1: "Milk",
    t3_l2: "Hen", t3_r2: "Egg",
    t3_l3: "Sheep", t3_r3: "Wool",
    t3_q: "Which animal's fleece is used to make a warm sweater?",
    t3_q_a: "A sheep's", t3_q_b: "A cow's", t3_q_c: "A hen's", t3_q_d: "A pig's",

    t4_title: "Forest Rules", t4_text: "The forest is home to animals. When we visit, we are guests, so we must follow the rules!",
    t4_b1: "Never throw away trash!", t4_b2: "Don't shout, or you will scare the animals.", t4_b3: "Protect the plants too!",
    t4_inst: "Find and mark the TWO forbidden things in the sentence!",
    t4_tok0: "In", t4_tok1: "forests,", t4_tok2: "no", t4_tok3: "littering", t4_tok4: "and", t4_tok5: "shouting",
    t4_q: "Why shouldn't you shout in the forest?",
    t4_q_a: "Because it scares the animals", t4_q_b: "Because it wakes up the trees", t4_q_c: "Because it will rain", t4_q_d: "Because we will get lost",

    t5_title: "Squirrel's Food", t5_text: "The fruit of the oak tree is the acorn. In autumn, squirrels and wild boars eat a lot of them, or hide them for winter.",
    t5_b1: "Acorns are very nutritious for forest animals.", t5_b2: "Squirrels bury them and sometimes forget where.", t5_b3: "Where they forget, a new oak tree might grow!",
    t5_inst: "There are 5 acorns hidden in the picture. Tap them to collect!",
    t5_q: "What does the squirrel do with acorns in autumn?",
    t5_q_a: "Eats them or hides them for winter", t5_q_b: "Builds a nest with them", t5_q_c: "Throws them in the lake", t5_q_d: "Gives them to the bear",
  },
  de: {
    explorer_title: "Leben im Wald",
    t1_title: "Stockwerke des Waldes", t1_text: "Der Wald ist wie ein mehrstöckiges Haus! Auf jeder Etage leben andere Pflanzen und Tiere.",
    t1_b1: "Ganz oben ist die Baumkrone, wo Vögel nisten.", t1_b2: "Darunter ist die Strauchschicht (Büsche).", t1_b3: "Ganz unten ist die Bodenschicht mit Wurzeln und Pilzen.",
    t1_inst: "Finde die Schichten des Waldes auf dem Bild!",
    t1_area_canopy: "Baumkrone", t1_area_bush: "Strauchschicht", t1_area_ground: "Bodenschicht",
    t1_q: "Was ist die oberste Schicht des Waldes?",
    t1_q_a: "Die Baumkrone", t1_q_b: "Die Strauchschicht", t1_q_c: "Die Bodenschicht", t1_q_d: "Die Wurzelschicht",

    t2_title: "Raubtiere im Wald", t2_text: "Im Wald essen die Tiere verschiedene Dinge. Manche knabbern an Pflanzen, andere jagen.",
    t2_b1: "Hirsche und Hasen sind Pflanzenfresser.", t2_b2: "Wölfe und Füchse sind Fleischfresser (Raubtiere).", t2_b3: "Bären sind Allesfresser: Fleisch und Beeren.",
    t2_inst: "Raubtier oder Pflanzenfresser? Sortiere sie!",
    t2_bucket_ragadozo: "Raubtier 🐺",
    t2_bucket_novenyevo: "Pflanzenfresser 🦌",
    t2_item_r1: "Wolf", t2_item_r2: "Fuchs",
    t2_item_n1: "Hirsch", t2_item_n2: "Hase",
    t2_q: "Was frisst ein Pflanzenfresser?",
    t2_q_a: "Gras, Blätter und Beeren", t2_q_b: "Kleinere Tiere", t2_q_c: "Trinkt nur Wasser", t2_q_d: "Insekten",

    t3_title: "Nutztiere", t3_text: "Menschen züchten seit Tausenden von Jahren Nutztiere, um Nahrung und Kleidung zu bekommen.",
    t3_b1: "Die Kuh gibt uns leckere Milch.", t3_b2: "Das Huhn legt Eier.", t3_b3: "Aus dem dicken Fell der Schafe machen wir warme Wolle.",
    t3_inst: "Verbinde das Tier mit dem, was es uns gibt!",
    t3_l1: "Kuh", t3_r1: "Milch",
    t3_l2: "Huhn", t3_r2: "Eier",
    t3_l3: "Schaf", t3_r3: "Wolle",
    t3_q: "Aus dem Fell welches Tieres machen wir einen warmen Pullover?",
    t3_q_a: "Aus dem des Schafes", t3_q_b: "Aus dem der Kuh", t3_q_c: "Aus dem des Huhns", t3_q_d: "Aus dem des Schweins",

    t4_title: "Regeln im Wald", t4_text: "Der Wald ist das Zuhause der Tiere. Wenn wir dort sind, sind wir Gäste und müssen die Regeln befolgen!",
    t4_b1: "Wirf niemals Müll weg!", t4_b2: "Schreie nicht, sonst erschreckst du die Tiere.", t4_b3: "Schütze auch die Pflanzen!",
    t4_inst: "Finde und markiere die ZWEI verbotenen Dinge im Satz!",
    t4_tok0: "Im", t4_tok1: "Wald:", t4_tok2: "Kein", t4_tok3: "Müll", t4_tok4: "und", t4_tok5: "Lärm",
    t4_q: "Warum soll man im Wald nicht laut sein?",
    t4_q_a: "Weil es die Tiere erschreckt", t4_q_b: "Weil es die Bäume weckt", t4_q_c: "Weil es regnen wird", t4_q_d: "Weil wir uns verlaufen",

    t5_title: "Eicheln suchen", t5_text: "Die Frucht der Eiche ist die Eichel. Im Herbst essen Eichhörnchen und Wildschweine viele davon oder verstecken sie.",
    t5_b1: "Eicheln sind sehr nahrhaft für Waldtiere.", t5_b2: "Eichhörnchen vergraben sie und vergessen manchmal wo.", t5_b3: "Wo sie es vergessen, kann eine neue Eiche wachsen!",
    t5_inst: "Auf dem Bild sind 5 Eicheln versteckt. Tippe sie an, um sie zu sammeln!",
    t5_q: "Was macht das Eichhörnchen im Herbst mit den Eicheln?",
    t5_q_a: "Es isst sie oder versteckt sie für den Winter", t5_q_b: "Es baut ein Nest daraus", t5_q_c: "Es wirft sie in den See", t5_q_d: "Es gibt sie dem Bären",
  },
  ro: {
    explorer_title: "Viața în Pădure",
    t1_title: "Nivelurile pădurii", t1_text: "Pădurea este ca o casă cu mai multe etaje! La fiecare etaj trăiesc alte plante și animale.",
    t1_b1: "Cel mai sus este coronamentul, unde păsările își fac cuib.", t1_b2: "Dedesubt este nivelul tufișurilor.", t1_b3: "Jos de tot este solul cu rădăcini și ciuperci.",
    t1_inst: "Găsește nivelurile pădurii în imagine!",
    t1_area_canopy: "Coronament (Copaci)", t1_area_bush: "Tufișuri", t1_area_ground: "Solul pădurii",
    t1_q: "Care este cel mai înalt nivel al pădurii?",
    t1_q_a: "Coronamentul", t1_q_b: "Nivelul tufișurilor", t1_q_c: "Solul pădurii", t1_q_d: "Nivelul rădăcinilor",

    t2_title: "Prădătorii pădurii", t2_text: "În pădure, animalele mănâncă lucruri diferite. Unele ronțăie plante, altele vânează.",
    t2_b1: "Cerbul și iepurele sunt erbivore, mănâncă frunze.", t2_b2: "Lupul și vulpea sunt prădători carnivori.", t2_b3: "Ursul este omnivor: mănâncă carne și fructe de pădure.",
    t2_inst: "Prădător sau Erbivor? Sortează-le!",
    t2_bucket_ragadozo: "Prădător 🐺",
    t2_bucket_novenyevo: "Erbivor 🦌",
    t2_item_r1: "Lup", t2_item_r2: "Vulpe",
    t2_item_n1: "Cerb", t2_item_n2: "Iepure",
    t2_q: "Ce mănâncă un animal erbivor?",
    t2_q_a: "Iarbă, frunze și fructe de pădure", t2_q_b: "Animale mai mici", t2_q_c: "Bea doar apă", t2_q_d: "Insecte",

    t3_title: "Animale de fermă", t3_text: "Oamenii cresc animale de fermă de mii de ani pentru a obține hrană și haine.",
    t3_b1: "Vaca ne dă lapte delicios.", t3_b2: "Găina face ouă.", t3_b3: "Facem lână caldă din blana groasă a oii.",
    t3_inst: "Potrivește animalul cu ceea ce ne oferă!",
    t3_l1: "Vacă", t3_r1: "Lapte",
    t3_l2: "Găină", t3_r2: "Ouă",
    t3_l3: "Oaie", t3_r3: "Lână",
    t3_q: "Din blana cărui animal facem un pulover călduros?",
    t3_q_a: "Din a oii", t3_q_b: "Din a vacii", t3_q_c: "Din a găinii", t3_q_d: "Din a porcului",

    t4_title: "Regulile pădurii", t4_text: "Pădurea este casa animalelor. Când mergem acolo, suntem oaspeți, așa că trebuie să respectăm regulile!",
    t4_b1: "Nu arunca niciodată gunoi!", t4_b2: "Nu striga, pentru că vei speria animalele.", t4_b3: "Ai grijă și de plante!",
    t4_inst: "Găsește și marchează cele DOUĂ lucruri interzise în propoziție!",
    t4_tok0: "În", t4_tok1: "pădure:", t4_tok2: "fără", t4_tok3: "gunoi", t4_tok4: "și", t4_tok5: "gălăgie",
    t4_q: "De ce nu ai voie să faci gălăgie în pădure?",
    t4_q_a: "Pentru că speriem animalele", t4_q_b: "Pentru că trezim copacii", t4_q_c: "Pentru că va ploua", t4_q_d: "Pentru că ne rătăcim",

    t5_title: "Caută ghindele", t5_text: "Fructul stejarului este ghinda. Toamna, veverițele și mistreții mănâncă multe sau le ascund pentru iarnă.",
    t5_b1: "Ghindele sunt foarte hrănitoare pentru animalele pădurii.", t5_b2: "Veverițele le îngroapă și uneori uită unde.", t5_b3: "Acolo unde uită, poate crește un nou stejar!",
    t5_inst: "Sunt 5 ghinde ascunse în imagine. Apasă pe ele ca să le aduni!",
    t5_q: "Ce face veverița cu ghindele toamna?",
    t5_q_a: "Le mănâncă sau le ascunde pentru iarnă", t5_q_b: "Face un cuib din ele", t5_q_c: "Le aruncă în lac", t5_q_d: "I le dă ursului",
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
        { id: "canopy", x: 50, y: 25, label: "t1_area_canopy" },
        { id: "bush",   x: 30, y: 70, label: "t1_area_bush" },
        { id: "ground", x: 50, y: 85, label: "t1_area_ground" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ragadozo", label: "t2_bucket_ragadozo" },
        { id: "novenyevo", label: "t2_bucket_novenyevo" },
      ],
      items: [
        { text: "t2_item_r1", bucketId: "ragadozo" },
        { text: "t2_item_n1", bucketId: "novenyevo" },
        { text: "t2_item_r2", bucketId: "ragadozo" },
        { text: "t2_item_n2", bucketId: "novenyevo" },
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
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
      type: "highlight-text",
      // Szavak:
      // HU: [0:Az] [1:erdőben] [2:tilos] [3:szemetelni] [4:és] [5:hangoskodni]
      // EN: [0:In] [1:forests,] [2:no] [3:littering] [4:and] [5:shouting]
      // DE: [0:Im] [1:Wald:] [2:Kein] [3:Müll] [4:und] [5:Lärm]
      // RO: [0:În] [1:pădure:] [2:fără] [3:gunoi] [4:și] [5:gălăgie]
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [3, 5],
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
      tapCount: { emoji: "🌰", count: 5 },
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
  icon: "🌲",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ForestLifeExplorer = memo(function ForestLifeExplorer({
  color = "#15803D", // Zöld az erdőhöz
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
      explorerId="sachkunde_k3_forest_life" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ForestLifeExplorer;
