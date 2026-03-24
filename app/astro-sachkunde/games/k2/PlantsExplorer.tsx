"use client";
// PlantsExplorer.tsx — Sachkunde Island i4: Plants (K2)
// Topics: 1) Növényi részek 2) Magtól virágig 3) Mire van szüksége? 4) Fák és bokrok 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Föld */}
      <rect x="0" y="100" width="240" height="40" fill="#78350F" />
      <g transform="translate(120, 100)">
        {/* Gyökerek */}
        <path d="M 0,0 Q -10,15 -5,30 M 0,0 Q 15,10 10,30 M 0,0 Q 5,20 20,25" stroke="#D97706" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Szár */}
        <rect x="-3" y="-60" width="6" height="60" fill="#16A34A" />
        {/* Levelek */}
        <path d="M -3,-30 Q -20,-40 -30,-20 Q -15,-15 -3,-30" fill="#22C55E" />
        <path d="M 3,-40 Q 25,-50 35,-30 Q 15,-20 3,-40" fill="#22C55E" />
        {/* Virág (Szirmok és közép) */}
        <g transform="translate(0, -65)">
          <circle cx="0" cy="-12" r="8" fill="#F472B6" />
          <circle cx="0" cy="12" r="8" fill="#F472B6" />
          <circle cx="-12" cy="0" r="8" fill="#F472B6" />
          <circle cx="12" cy="0" r="8" fill="#F472B6" />
          <circle cx="-8" cy="-8" r="8" fill="#F472B6" />
          <circle cx="8" cy="8" r="8" fill="#F472B6" />
          <circle cx="-8" cy="8" r="8" fill="#F472B6" />
          <circle cx="8" cy="-8" r="8" fill="#F472B6" />
          <circle cx="0" cy="0" r="10" fill="#FDE047" />
        </g>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      <rect x="0" y="90" width="240" height="50" fill="#8B5CF6" opacity="0.2" />
      <line x1="0" y1="90" x2="240" y2="90" stroke="#78350F" strokeWidth="4" strokeDasharray="8 4" />
      
      {/* 1. Mag */}
      <g transform="translate(40, 105)">
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#92400E" />
      </g>
      {/* 2. Csíra */}
      <g transform="translate(90, 100)">
        <ellipse cx="0" cy="5" rx="6" ry="4" fill="#92400E" />
        <path d="M 0,5 Q 5,-10 15,-5" stroke="#84CC16" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* 3. Kis növény */}
      <g transform="translate(140, 90)">
        <rect x="-2" y="-20" width="4" height="20" fill="#22C55E" />
        <path d="M -2,-10 Q -15,-15 -10,-5 Z" fill="#4ADE80" />
        <path d="M 2,-15 Q 15,-20 10,-10 Z" fill="#4ADE80" />
      </g>
      {/* 4. Virág */}
      <g transform="translate(200, 90)">
        <rect x="-2" y="-35" width="4" height="35" fill="#16A34A" />
        <path d="M -2,-15 Q -15,-20 -10,-10 Z" fill="#22C55E" />
        <circle cx="0" cy="-40" r="10" fill="#EF4444" />
        <circle cx="0" cy="-40" r="4" fill="#FBBF24" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Napfény */}
      <g transform="translate(60, 50)">
        <circle cx="0" cy="0" r="15" fill="#FBBF24" />
        <line x1="0" y1="-20" x2="0" y2="-30" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="20" x2="0" y2="30" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <line x1="-20" y1="0" x2="-30" y2="0" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="0" x2="30" y2="0" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* Víz / Eső */}
      <g transform="translate(180, 50)">
        <path d="M 0,-15 Q 10,0 0,10 Q -10,0 0,-15" fill="#3B82F6" />
        <path d="M -15,-5 Q -5,10 -15,20 Q -25,10 -15,-5" fill="#60A5FA" />
        <path d="M 15,-5 Q 25,10 15,20 Q 5,10 15,-5" fill="#60A5FA" />
      </g>
      {/* Plusz jel */}
      <path d="M 110,50 L 130,50 M 120,40 L 120,60" stroke="#0EA5E9" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Fa */}
      <g transform="translate(70, 110)">
        <rect x="-10" y="-40" width="20" height="40" fill="#78350F" rx="2" />
        <circle cx="0" cy="-55" r="30" fill="#15803D" />
        <circle cx="-15" cy="-40" r="20" fill="#16A34A" />
        <circle cx="15" cy="-40" r="20" fill="#22C55E" />
      </g>
      {/* Bokor */}
      <g transform="translate(170, 110)">
        <path d="M 0,0 L -15,-20 M 0,0 L 0,-25 M 0,0 L 15,-20" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
        <circle cx="-15" cy="-25" r="15" fill="#4ADE80" />
        <circle cx="0" cy="-30" r="18" fill="#22C55E" />
        <circle cx="15" cy="-25" r="15" fill="#16A34A" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        {/* Növény és Szív absztrakt kompozíció */}
        <path d="M -10,30 Q -30,0 0,-20 Q 30,0 10,30 Z" fill="#22C55E" />
        <path d="M 0,-20 L 0,30" stroke="#15803D" strokeWidth="3" />
        <path d="M 0,30 L 10,10 A 10,10 0 0,0 -10,10 Z" fill="#EF4444" transform="translate(25, -20) scale(0.8)" />
        <circle cx="-25" cy="-10" r="6" fill="#FBBF24" />
        <circle cx="20" cy="15" r="4" fill="#3B82F6" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Növények Világa",
    // T1: Növényi részek (Label-diagram)
    t1_title: "Miből áll egy növény?",
    t1_text: "A növényeknek több fontos részük van. Mindegyiknek megvan a maga feladata, hogy a növény szépen növekedjen.",
    t1_b1: "A gyökér a föld alatt van, iszik és kapaszkodik.",
    t1_b2: "A szár tartja a növényt, és szállítja a vizet.",
    t1_b3: "A levelek napfényt gyűjtenek, a virág pedig szép és illatos.",
    t1_inst: "Keresd meg a növény részeit az ábrán!",
    t1_area_root: "Gyökér",
    t1_area_stem: "Szár",
    t1_area_leaf: "Levél",
    t1_area_flower: "Virág",
    t1_q: "Melyik rész van a föld alatt?",
    t1_q_a: "A gyökér", t1_q_b: "A szár", t1_q_c: "A levél", t1_q_d: "A virág",

    // T2: Magtól virágig (Word-order)
    t2_title: "Hogyan nő a növény?",
    t2_text: "Minden nagy növény egy apró magból indul. Ahogy telik az idő, egyre nagyobb és szebb lesz.",
    t2_b1: "Először elültetjük a magot a földbe.",
    t2_b2: "Aztán kibújik egy kis csíra.",
    t2_b3: "Végül megnő, és kinyílik a gyönyörű virág.",
    t2_inst: "Tedd sorba, hogyan nő a növény!",
    t2_w1: "Mag", t2_w2: "Csíra", t2_w3: "Kis növény", t2_w4: "Virág",
    t2_q: "Miből indul a növény növekedése?",
    t2_q_a: "Egy apró magból", t2_q_b: "Egy nagy fából", t2_q_c: "Egy kőből", t2_q_d: "Egy felhőből",

    // T3: Mire van szüksége? (Drag-to-bucket)
    t3_title: "Mit 'eszik' a növény?",
    t3_text: "A növények nem esznek szendvicset! Ahhoz, hogy éljenek, egészen más dolgokra van szükségük a természettől.",
    t3_b1: "Nagyon fontos nekik a víz (eső).",
    t3_b2: "Szükségük van a napfényre és a jó földre.",
    t3_b3: "A csoki és az üdítő tönkretenné őket!",
    t3_inst: "Válogasd szét! Mire van szüksége a növénynek?",
    t3_bucket_kell: "Kell a növénynek",
    t3_bucket_nem: "Nem kell neki",
    t3_item_k1: "Napfény", t3_item_k2: "Eső (Víz)",
    t3_item_n1: "Cukorka", t3_item_n2: "Kóla",
    t3_q: "Mi az, amire a növénynek BIZTOSAN szüksége van?",
    t3_q_a: "Víz és napfény", t3_q_b: "Sütemény", t3_q_c: "Tej", t3_q_d: "Sötétség",

    // T4: Fák és bokrok (Match-pairs)
    t4_title: "Fák, bokrok, füvek",
    t4_text: "Nem minden növény egyforma. Vannak hatalmas fák, kisebb bokrok és puha füvek.",
    t4_b1: "A fáknak vastag, kemény fás törzsük van.",
    t4_b2: "A bokroknak sok vékony fás águk van közel a földhöz.",
    t4_b3: "A fű puha, zöld és vékony szárú.",
    t4_inst: "Párosítsd a növényt a tulajdonságával!",
    t4_l1: "Fa", t4_r1: "Vastag, kemény törzs",
    t4_l2: "Bokor", t4_r2: "Sok vékony ág a földtől",
    t4_l3: "Fű", t4_r3: "Puha, zöld és kicsi",
    t4_q: "Milyen a fa törzse?",
    t4_q_a: "Vastag és kemény fás", t4_q_b: "Puha és zöld", t4_q_c: "Üvegből van", t4_q_d: "Hajlékony és kék",

    // T5: Összefoglaló (Gap-fill)
    t5_title: "A növények ajándéka",
    t5_text: "A növények nagyon fontosak nekünk és az állatoknak is. Tisztítják a levegőt, és finom gyümölcsöket adnak.",
    t5_b1: "A levelek oxigént (friss levegőt) termelnek.",
    t5_b2: "Sok állatnak jelentenek otthont és élelmet.",
    t5_b3: "Vigyázzunk rájuk, ne tördeljük az ágakat!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "A növények levelei friss {gap} adnak nekünk, hogy tudjunk lélegezni.",
    t5_c51: "levegőt", t5_c52: "játékot", t5_c53: "ruhát",
    t5_q: "Miért fontosak a növények?",
    t5_q_a: "Mert friss levegőt és élelmet adnak", t5_q_b: "Mert jókat lehet rajtuk dobolni", t5_q_c: "Mert melegek télen", t5_q_d: "Nem fontosak",
  },
  en: {
    explorer_title: "World of Plants",
    t1_title: "Parts of a Plant", t1_text: "Plants have different important parts. Each part has a job to help the plant grow beautifully.",
    t1_b1: "The root is under the ground, it drinks and holds on.", t1_b2: "The stem holds the plant and carries water.", t1_b3: "Leaves catch sunlight, and flowers are pretty.",
    t1_inst: "Find the parts of the plant in the picture!",
    t1_area_root: "Root", t1_area_stem: "Stem", t1_area_leaf: "Leaf", t1_area_flower: "Flower",
    t1_q: "Which part is under the ground?",
    t1_q_a: "The root", t1_q_b: "The stem", t1_q_c: "The leaf", t1_q_d: "The flower",

    t2_title: "From Seed to Flower", t2_text: "Every big plant starts from a tiny seed. As time passes, it grows bigger and prettier.",
    t2_b1: "First, we plant the seed in the soil.", t2_b2: "Then a small sprout comes out.", t2_b3: "Finally, it grows and a beautiful flower blooms.",
    t2_inst: "Put the growing steps in order!",
    t2_w1: "Seed", t2_w2: "Sprout", t2_w3: "Small plant", t2_w4: "Flower",
    t2_q: "What does the plant's growth start from?",
    t2_q_a: "A tiny seed", t2_q_b: "A big tree", t2_q_c: "A rock", t2_q_d: "A cloud",

    t3_title: "What do plants need?", t3_text: "Plants don't eat sandwiches! To live, they need completely different things from nature.",
    t3_b1: "Water (rain) is very important to them.", t3_b2: "They need sunlight and good soil.", t3_b3: "Candy and soda would ruin them!",
    t3_inst: "Sort them out! What does a plant need?",
    t3_bucket_kell: "Plant needs this",
    t3_bucket_nem: "Does not need",
    t3_item_k1: "Sunlight", t3_item_k2: "Rain (Water)",
    t3_item_n1: "Candy", t3_item_n2: "Cola",
    t3_q: "What does a plant DEFINITELY need?",
    t3_q_a: "Water and sunlight", t3_q_b: "Cake", t3_q_c: "Milk", t3_q_d: "Darkness",

    t4_title: "Trees, Bushes, Grass", t4_text: "Not all plants are the same. There are huge trees, smaller bushes, and soft grass.",
    t4_b1: "Trees have a thick, hard wooden trunk.", t4_b2: "Bushes have many thin wooden branches near the ground.", t4_b3: "Grass is soft, green, and thin.",
    t4_inst: "Match the plant with its feature!",
    t4_l1: "Tree", t4_r1: "Thick, hard trunk",
    t4_l2: "Bush", t4_r2: "Many thin branches",
    t4_l3: "Grass", t4_r3: "Soft, green and small",
    t4_q: "What is a tree trunk like?",
    t4_q_a: "Thick and hard wood", t4_q_b: "Soft and green", t4_q_c: "Made of glass", t4_q_d: "Flexible and blue",

    t5_title: "Gift of Plants", t5_text: "Plants are very important to us and animals. They clean the air and give us yummy fruits.",
    t5_b1: "Leaves make oxygen (fresh air).", t5_b2: "They provide home and food for many animals.", t5_b3: "Take care of them, don't break their branches!",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "Plant leaves give us fresh {gap} so we can breathe.",
    t5_c51: "air", t5_c52: "toys", t5_c53: "clothes",
    t5_q: "Why are plants important?",
    t5_q_a: "Because they give fresh air and food", t5_q_b: "Because we can drum on them", t5_q_c: "Because they are warm in winter", t5_q_d: "They are not important",
  },
  de: {
    explorer_title: "Welt der Pflanzen",
    t1_title: "Teile einer Pflanze", t1_text: "Pflanzen haben verschiedene wichtige Teile. Jeder Teil hat eine Aufgabe, damit die Pflanze wächst.",
    t1_b1: "Die Wurzel ist unter der Erde, sie trinkt und hält fest.", t1_b2: "Der Stängel hält die Pflanze und trägt das Wasser.", t1_b3: "Blätter fangen Sonnenlicht, Blüten sind schön.",
    t1_inst: "Finde die Teile der Pflanze im Bild!",
    t1_area_root: "Wurzel", t1_area_stem: "Stängel", t1_area_leaf: "Blatt", t1_area_flower: "Blüte",
    t1_q: "Welcher Teil ist unter der Erde?",
    t1_q_a: "Die Wurzel", t1_q_b: "Der Stängel", t1_q_c: "Das Blatt", t1_q_d: "Die Blüte",

    t2_title: "Vom Samen zur Blüte", t2_text: "Jede große Pflanze beginnt als winziger Same. Mit der Zeit wird sie größer und schöner.",
    t2_b1: "Zuerst pflanzen wir den Samen in die Erde.", t2_b2: "Dann kommt ein kleiner Keimling heraus.", t2_b3: "Am Ende wächst sie und eine Blume blüht.",
    t2_inst: "Bringe die Wachstumsphasen in die richtige Reihenfolge!",
    t2_w1: "Same", t2_w2: "Keimling", t2_w3: "Kleine Pflanze", t2_w4: "Blüte",
    t2_q: "Woraus beginnt eine Pflanze zu wachsen?",
    t2_q_a: "Aus einem winzigen Samen", t2_q_b: "Aus einem großen Baum", t2_q_c: "Aus einem Stein", t2_q_d: "Aus einer Wolke",

    t3_title: "Was brauchen Pflanzen?", t3_text: "Pflanzen essen keine Sandwiches! Um zu leben, brauchen sie ganz andere Dinge aus der Natur.",
    t3_b1: "Wasser (Regen) ist sehr wichtig für sie.", t3_b2: "Sie brauchen Sonnenlicht und gute Erde.", t3_b3: "Bonbons und Cola würden sie kaputt machen!",
    t3_inst: "Sortiere! Was braucht eine Pflanze?",
    t3_bucket_kell: "Braucht die Pflanze",
    t3_bucket_nem: "Braucht sie nicht",
    t3_item_k1: "Sonnenlicht", t3_item_k2: "Regen (Wasser)",
    t3_item_n1: "Bonbon", t3_item_n2: "Cola",
    t3_q: "Was braucht eine Pflanze UNBEDINGT?",
    t3_q_a: "Wasser und Sonnenlicht", t3_q_b: "Kuchen", t3_q_c: "Milch", t3_q_d: "Dunkelheit",

    t4_title: "Bäume, Büsche, Gras", t4_text: "Nicht alle Pflanzen sind gleich. Es gibt riesige Bäume, kleinere Büsche und weiches Gras.",
    t4_b1: "Bäume haben einen dicken, harten Holzstamm.", t4_b2: "Büsche haben viele dünne Äste nahe am Boden.", t4_b3: "Gras ist weich, grün und dünn.",
    t4_inst: "Verbinde die Pflanze mit ihrer Eigenschaft!",
    t4_l1: "Baum", t4_r1: "Dicker, harter Stamm",
    t4_l2: "Busch", t4_r2: "Viele dünne Äste",
    t4_l3: "Gras", t4_r3: "Weich, grün und klein",
    t4_q: "Wie ist ein Baumstamm?",
    t4_q_a: "Dick und hart aus Holz", t4_q_b: "Weich und grün", t4_q_c: "Aus Glas", t4_q_d: "Biegsam und blau",

    t5_title: "Das Geschenk der Pflanzen", t5_text: "Pflanzen sind für uns und die Tiere sehr wichtig. Sie reinigen die Luft und geben uns Essen.",
    t5_b1: "Die Blätter machen Sauerstoff (frische Luft).", t5_b2: "Sie sind Zuhause und Nahrung für viele Tiere.", t5_b3: "Pass auf sie auf, brich keine Äste ab!",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Pflanzenblätter geben uns frische {gap}, damit wir atmen können.",
    t5_c51: "Luft", t5_c52: "Spielzeuge", t5_c53: "Kleidung",
    t5_q: "Warum sind Pflanzen wichtig?",
    t5_q_a: "Weil sie frische Luft und Essen geben", t5_q_b: "Weil man auf ihnen trommeln kann", t5_q_c: "Weil sie im Winter warm sind", t5_q_d: "Sie sind nicht wichtig",
  },
  ro: {
    explorer_title: "Lumea Plantelor",
    t1_title: "Părțile plantei", t1_text: "Plantele au mai multe părți importante. Fiecare are un rol ca planta să crească frumos.",
    t1_b1: "Rădăcina e sub pământ, bea apă și se fixează.", t1_b2: "Tulpina susține planta și transportă apa.", t1_b3: "Frunzele prind lumina, iar floarea este frumoasă.",
    t1_inst: "Găsește părțile plantei în imagine!",
    t1_area_root: "Rădăcină", t1_area_stem: "Tulpină", t1_area_leaf: "Frunză", t1_area_flower: "Floare",
    t1_q: "Care parte este sub pământ?",
    t1_q_a: "Rădăcina", t1_q_b: "Tulpina", t1_q_c: "Frunza", t1_q_d: "Floarea",

    t2_title: "De la sămânță la floare", t2_text: "Orice plantă mare începe de la o sămânță mică. Cu timpul, crește tot mai mare și mai frumoasă.",
    t2_b1: "Prima dată plantăm sămânța în pământ.", t2_b2: "Apoi iese un mic germene.", t2_b3: "La final, crește și se deschide o floare frumoasă.",
    t2_inst: "Pune etapele de creștere în ordine!",
    t2_w1: "Sămânță", t2_w2: "Germene", t2_w3: "Plantă mică", t2_w4: "Floare",
    t2_q: "Din ce începe să crească planta?",
    t2_q_a: "Dintr-o sămânță mică", t2_q_b: "Dintr-un copac mare", t2_q_c: "Dintr-o piatră", t2_q_d: "Dintr-un nor",

    t3_title: "De ce au nevoie?", t3_text: "Plantele nu mănâncă sandvișuri! Pentru a trăi, au nevoie de lucruri complet diferite din natură.",
    t3_b1: "Apa (ploaia) este foarte importantă pentru ele.", t3_b2: "Au nevoie de lumina soarelui și pământ bun.", t3_b3: "Bomboanele și sucul le-ar strica!",
    t3_inst: "Sortează-le! De ce are nevoie o plantă?",
    t3_bucket_kell: "Are nevoie",
    t3_bucket_nem: "Nu are nevoie",
    t3_item_k1: "Lumina soarelui", t3_item_k2: "Ploaie (Apă)",
    t3_item_n1: "Bomboane", t3_item_n2: "Cola",
    t3_q: "De ce are planta SIGUR nevoie?",
    t3_q_a: "De apă și soare", t3_q_b: "De prăjitură", t3_q_c: "De lapte", t3_q_d: "De întuneric",

    t4_title: "Copaci, Tufișuri, Iarbă", t4_text: "Nu toate plantele sunt la fel. Există copaci uriași, tufișuri mai mici și iarbă moale.",
    t4_b1: "Copacii au un trunchi gros și tare din lemn.", t4_b2: "Tufișurile au multe crengi subțiri aproape de pământ.", t4_b3: "Iarba este moale, verde și subțire.",
    t4_inst: "Potrivește planta cu proprietatea ei!",
    t4_l1: "Copac", t4_r1: "Trunchi gros și tare",
    t4_l2: "Tufiș", t4_r2: "Multe crengi subțiri",
    t4_l3: "Iarbă", t4_r3: "Moale, verde și mică",
    t4_q: "Cum este trunchiul unui copac?",
    t4_q_a: "Gros și tare, din lemn", t4_q_b: "Moale și verde", t4_q_c: "Din sticlă", t4_q_d: "Flexibil și albastru",

    t5_title: "Cadoul plantelor", t5_text: "Plantele sunt foarte importante pentru noi și pentru animale. Ne curăță aerul și ne dau fructe bune.",
    t5_b1: "Frunzele produc oxigen (aer proaspăt).", t5_b2: "Ele sunt casă și hrană pentru multe animale.", t5_b3: "Să avem grijă de ele, nu le rupeți crengile!",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Frunzele plantelor ne dau {gap} proaspăt ca să putem respira.",
    t5_c51: "aer", t5_c52: "jucării", t5_c53: "haine",
    t5_q: "De ce sunt plantele importante?",
    t5_q_a: "Pentru că dau aer proaspăt și hrană", t5_q_b: "Pentru că putem bate la tobe pe ele", t5_q_c: "Pentru că sunt calde iarna", t5_q_d: "Nu sunt importante",
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
        { id: "flower", x: 50, y: 25, label: "t1_area_flower" },
        { id: "leaf",   x: 35, y: 45, label: "t1_area_leaf" },
        { id: "stem",   x: 50, y: 60, label: "t1_area_stem" },
        { id: "root",   x: 50, y: 85, label: "t1_area_root" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "kell", label: "t3_bucket_kell" },
        { id: "nem", label: "t3_bucket_nem" },
      ],
      items: [
        { text: "t3_item_k1", bucketId: "kell" },
        { text: "t3_item_n1", bucketId: "nem" },
        { text: "t3_item_k2", bucketId: "kell" },
        { text: "t3_item_n2", bucketId: "nem" },
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
  icon: "🌱",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PlantsExplorer = memo(function PlantsExplorer({
  color = "#22C55E", // Green-500 a növényekhez
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
      explorerId="sachkunde_k2_plants" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PlantsExplorer;
