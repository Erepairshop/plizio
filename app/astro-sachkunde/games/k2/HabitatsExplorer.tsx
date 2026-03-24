"use client";
// HabitatsExplorer.tsx — Sachkunde Island i2: Habitats (K2)
// Topics: 1) Élőhelyek 2) Erdő vagy Farm? 3) Tápláléklánc 4) Háziállat-gondozás 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Fa (Erdő/Szárazföld) */}
      <g transform="translate(60, 90)">
        <rect x="-10" y="-30" width="20" height="40" fill="#78350F" rx="2" />
        <circle cx="0" cy="-40" r="30" fill="#22C55E" />
        <circle cx="-15" cy="-25" r="20" fill="#16A34A" />
        <circle cx="15" cy="-25" r="20" fill="#15803D" />
      </g>
      {/* Tó (Víz) */}
      <g transform="translate(170, 90)">
        <ellipse cx="0" cy="10" rx="40" ry="15" fill="#3B82F6" />
        <path d="M -20,10 Q 0,15 20,5" stroke="#BFDBFE" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Vadon: Fenyőfa */}
      <g transform="translate(70, 80)">
        <polygon points="0,-40 -25,10 25,10" fill="#065F46" />
        <polygon points="0,-20 -20,20 20,20" fill="#047857" />
        <rect x="-5" y="20" width="10" height="15" fill="#78350F" />
      </g>
      {/* Farm: Kerítés */}
      <g transform="translate(170, 80)">
        <rect x="-30" y="0" width="60" height="5" fill="#92400E" />
        <rect x="-30" y="15" width="60" height="5" fill="#92400E" />
        <rect x="-20" y="-10" width="8" height="35" fill="#B45309" rx="2" />
        <rect x="0" y="-10" width="8" height="35" fill="#B45309" rx="2" />
        <rect x="20" y="-10" width="8" height="35" fill="#B45309" rx="2" />
      </g>
      {/* Választóvonal */}
      <line x1="120" y1="20" x2="120" y2="120" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6 6" />
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Nap -> Növény -> Bogár (Absztrakt) */}
      <g transform="translate(40, 70)">
        <circle cx="0" cy="0" r="15" fill="#FBBF24" />
        <line x1="25" y1="0" x2="45" y2="0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
      </g>
      <g transform="translate(100, 70)">
        <path d="M 0,15 C -20,15 -10,-15 0,-15 C 10,-15 20,15 0,15 Z" fill="#22C55E" />
        <line x1="25" y1="0" x2="45" y2="0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
      </g>
      <g transform="translate(160, 70)">
        <circle cx="0" cy="0" r="12" fill="#EF4444" />
        <circle cx="-5" cy="-5" r="2" fill="#000" />
        <circle cx="5" cy="4" r="2" fill="#000" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      {/* Kutyaház és Tál */}
      <g transform="translate(100, 80)">
        {/* Ház teste */}
        <rect x="-30" y="-20" width="60" height="40" fill="#D97706" />
        {/* Tető */}
        <polygon points="-40,-20 0,-50 40,-20" fill="#B91C1C" />
        {/* Ajtó */}
        <path d="M -15,20 L -15,0 C -15,-10 15,-10 15,0 L 15,20 Z" fill="#451A03" />
      </g>
      {/* Tálca */}
      <g transform="translate(170, 90)">
        <path d="M -15,10 L -20,0 L 20,0 L 15,10 Z" fill="#3B82F6" />
        <ellipse cx="0" cy="0" rx="20" ry="5" fill="#60A5FA" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      {/* Földgömb absztrakt */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="#3B82F6" />
        <path d="M -20,-20 C -10,-30 10,-20 20,-10 C 30,0 20,20 10,20 C -10,20 -30,0 -20,-20 Z" fill="#22C55E" />
        <circle cx="15" cy="-15" r="10" fill="#16A34A" />
        <circle cx="-15" cy="15" r="8" fill="#16A34A" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Élőhelyek és Állatok",
    // T1: Élőhelyek
    t1_title: "Kinek mi az otthona?",
    t1_text: "A Földön nagyon sokféle élőhely található. Van, ahol sok a fa, van, ahol csak homok van, és van, ahol hatalmas a víz.",
    t1_b1: "Az erdőben fák és bokrok adnak búvóhelyet.",
    t1_b2: "A sivatagban forróság van és kevés a víz.",
    t1_b3: "A halak és békák a vizes élőhelyeket szeretik.",
    t1_inst: "Párosítsd az állatot az élőhelyével!",
    t1_l1: "Hal", t1_r1: "Tó (Víz)",
    t1_l2: "Mókus", t1_r2: "Erdő (Fák)",
    t1_l3: "Teve", t1_r3: "Sivatag (Homok)",
    t1_q: "Milyen élőhelyen találunk sok fát, bokrot és mohát?",
    t1_q_a: "Az erdőben", t1_q_b: "A sivatagban", t1_q_c: "A tengerben", t1_q_d: "A jéghegyeken",

    // T2: Erdő vagy Farm
    t2_title: "Vadon vagy Farm?",
    t2_text: "Egyes állatok szabadon, a vadonban élnek, míg másokat az ember háziasított, és farmokon vagy tanyáken gondozza őket.",
    t2_b1: "A vadállatok (pl. szarvas, róka) az erdőben élnek.",
    t2_b2: "A haszonállatokat (pl. tehén, malac) a farmon tartjuk.",
    t2_b3: "A farmon élő állatokat az ember eteti és védi.",
    t2_inst: "Hová való ez az állat? Válogasd szét!",
    t2_bucket_vadon: "Vadon (Erdő)",
    t2_bucket_farm: "Farm (Tanya)",
    t2_item_v1: "Róka", t2_item_v2: "Szarvas",
    t2_item_f1: "Tehén", t2_item_f2: "Malac",
    t2_q: "Ki gondoskodik a farmon élő állatokról?",
    t2_q_a: "A gazda (az ember)", t2_q_b: "A medve", t2_q_c: "Magukról gondoskodnak", t2_q_d: "A madarak",

    // T3: Tápláléklánc
    t3_title: "A tápláléklánc",
    t3_text: "A természetben mindenki eszik valamit, hogy energiához jusson. Ezt a sorrendet táplálékláncnak hívjuk.",
    t3_b1: "Minden lánc a Nappal és a növényekkel kezdődik.",
    t3_b2: "A növényevők megeszik a növényeket.",
    t3_b3: "A ragadozók pedig megeszik a többi állatot.",
    t3_inst: "Tedd sorba a tápláléklánc tagjait (kicsitől a nagyig)!",
    t3_w1: "Napsugár", t3_w2: "Fű (növény)", t3_w3: "Szöcske", t3_w4: "Madár",
    t3_q: "Mivel kezdődik általában a tápláléklánc?",
    t3_q_a: "A napfénnyel és a növényekkel", t3_q_b: "A nagy ragadozókkal", t3_q_c: "Az esővel", t3_q_d: "A sötétséggel",

    // T4: Háziállat-gondozás
    t4_title: "A mi felelősségünk",
    t4_text: "Ha háziállatot (például kutyát vagy cicát) tartunk, felelősek vagyunk értük. Gondoskodnunk kell róluk!",
    t4_b1: "Minden nap friss vízre és ételre van szükségük.",
    t4_b2: "Biztosítanunk kell nekik egy meleg, biztonságos kuckót.",
    t4_b3: "A kutyákat sétálni is el kell vinni.",
    t4_inst: "Keresd meg a kutyus otthonát és tálkáját az ábrán!",
    t4_area_house: "Kutyaház",
    t4_area_bowl: "Etetőtál",
    t4_q: "Mire van szüksége egy háziállatnak MINDEN nap?",
    t4_q_a: "Friss vízre és ételre", t4_q_b: "Új játékokra", t4_q_c: "Tévénézésre", t4_q_d: "Édességre",

    // T5: Összefoglaló
    t5_title: "Vigyázzunk az állatokra!",
    t5_text: "Legyen az egy hal a tóban, egy szarvas az erdőben, vagy a kutyus az udvaron, minden állat fontos része a világnak.",
    t5_b1: "Az élőhelyeket meg kell óvnunk a szeméttől.",
    t5_b2: "A tápláléklánc tartja egyensúlyban a természetet.",
    t5_b3: "Szeressük az állatokat!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Minden állatnak szüksége van egy biztonságos {gap}, ahol élhet.",
    t5_c51: "élőhelyre", t5_c52: "autóra", t5_c53: "számítógépre",
    t5_q: "Mi a teendőnk az állatok élőhelyével?",
    t5_q_a: "Vigyáznunk kell rá és tisztán tartani", t5_q_b: "Tele kell szemetelni", t5_q_c: "Ki kell vágni a fákat", t5_q_d: "Nem kell vele törődni",
  },
  en: {
    explorer_title: "Habitats & Animals",
    t1_title: "Where is home?", t1_text: "There are many types of habitats on Earth. Some have lots of trees, some have only sand, and some are full of water.",
    t1_b1: "The forest provides shelter with trees and bushes.", t1_b2: "The desert is hot and has very little water.", t1_b3: "Fish and frogs love wet habitats.",
    t1_inst: "Match the animal to its habitat!",
    t1_l1: "Fish", t1_r1: "Lake (Water)",
    t1_l2: "Squirrel", t1_r2: "Forest (Trees)",
    t1_l3: "Camel", t1_r3: "Desert (Sand)",
    t1_q: "Which habitat has a lot of trees, bushes, and moss?",
    t1_q_a: "The forest", t1_q_b: "The desert", t1_q_c: "The ocean", t1_q_d: "The iceberg",

    t2_title: "Wild or Farm?", t2_text: "Some animals live freely in the wild, while others are domesticated and raised on farms by humans.",
    t2_b1: "Wild animals (like deer, foxes) live in the forest.", t2_b2: "Farm animals (like cows, pigs) are kept on a farm.", t2_b3: "Farm animals are fed and protected by humans.",
    t2_inst: "Where does this animal belong? Sort them!",
    t2_bucket_vadon: "Wild (Forest)",
    t2_bucket_farm: "Farm",
    t2_item_v1: "Fox", t2_item_v2: "Deer",
    t2_item_f1: "Cow", t2_item_f2: "Pig",
    t2_q: "Who takes care of the animals living on a farm?",
    t2_q_a: "The farmer (human)", t2_q_b: "The bear", t2_q_c: "They take care of themselves", t2_q_d: "The birds",

    t3_title: "The Food Chain", t3_text: "In nature, everyone eats something to get energy. This order is called the food chain.",
    t3_b1: "Every chain starts with the Sun and plants.", t3_b2: "Herbivores eat the plants.", t3_b3: "Carnivores (predators) eat other animals.",
    t3_inst: "Order the food chain from smallest to largest!",
    t3_w1: "Sunlight", t3_w2: "Grass (Plant)", t3_w3: "Grasshopper", t3_w4: "Bird",
    t3_q: "What does the food chain usually start with?",
    t3_q_a: "Sunlight and plants", t3_q_b: "Large predators", t3_q_c: "Rain", t3_q_d: "Darkness",

    t4_title: "Taking Care of Pets", t4_text: "If we keep a pet (like a dog or cat), we are responsible for them. We must care for them!",
    t4_b1: "They need fresh water and food every day.", t4_b2: "We must provide a warm, safe shelter.", t4_b3: "Dogs also need to be taken for walks.",
    t4_inst: "Find the doghouse and the bowl in the picture!",
    t4_area_house: "Doghouse", t4_area_bowl: "Feeding bowl",
    t4_q: "What does a pet need EVERY day?",
    t4_q_a: "Fresh water and food", t4_q_b: "New toys", t4_q_c: "To watch TV", t4_q_d: "Candy",

    t5_title: "Protect Our Animals!", t5_text: "Whether it's a fish in the lake or a dog in the yard, every animal is an important part of the world.",
    t5_b1: "We must protect habitats from trash.", t5_b2: "The food chain keeps nature in balance.", t5_b3: "Let's love animals!",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "Every animal needs a safe {gap} to live in.",
    t5_c51: "habitat", t5_c52: "car", t5_c53: "computer",
    t5_q: "What should we do with animal habitats?",
    t5_q_a: "Protect them and keep them clean", t5_q_b: "Litter everywhere", t5_q_c: "Cut down the trees", t5_q_d: "Ignore them",
  },
  de: {
    explorer_title: "Lebensräume",
    t1_title: "Wer wohnt wo?", t1_text: "Es gibt viele Lebensräume auf der Erde. Manche haben viele Bäume, andere nur Sand oder viel Wasser.",
    t1_b1: "Der Wald bietet Schutz durch Bäume und Büsche.", t1_b2: "In der Wüste ist es heiß und es gibt wenig Wasser.", t1_b3: "Fische und Frösche lieben das Wasser.",
    t1_inst: "Verbinde das Tier mit seinem Lebensraum!",
    t1_l1: "Fisch", t1_r1: "See (Wasser)",
    t1_l2: "Eichhörnchen", t1_r2: "Wald (Bäume)",
    t1_l3: "Kamel", t1_r3: "Wüste (Sand)",
    t1_q: "Welcher Lebensraum hat viele Bäume, Büsche und Moos?",
    t1_q_a: "Der Wald", t1_q_b: "Die Wüste", t1_q_c: "Das Meer", t1_q_d: "Der Eisberg",

    t2_title: "Wildnis oder Bauernhof?", t2_text: "Einige Tiere leben frei in der Wildnis, andere leben auf dem Bauernhof bei den Menschen.",
    t2_b1: "Wilde Tiere (z.B. Hirsch, Fuchs) leben im Wald.", t2_b2: "Nutztiere (z.B. Kuh, Schwein) leben auf dem Bauernhof.", t2_b3: "Tiere auf dem Bauernhof werden von Menschen gefüttert.",
    t2_inst: "Wohin gehört dieses Tier? Sortiere!",
    t2_bucket_vadon: "Wildnis (Wald)",
    t2_bucket_farm: "Bauernhof",
    t2_item_v1: "Fuchs", t2_item_v2: "Hirsch",
    t2_item_f1: "Kuh", t2_item_f2: "Schwein",
    t2_q: "Wer kümmert sich um die Tiere auf dem Bauernhof?",
    t2_q_a: "Der Bauer (Mensch)", t2_q_b: "Der Bär", t2_q_c: "Sie kümmern sich um sich selbst", t2_q_d: "Die Vögel",

    t3_title: "Die Nahrungskette", t3_text: "In der Natur frisst jeder etwas, um Energie zu bekommen. Das nennt man Nahrungskette.",
    t3_b1: "Jede Kette beginnt mit der Sonne und Pflanzen.", t3_b2: "Pflanzenfresser essen die Pflanzen.", t3_b3: "Fleischfresser (Raubtiere) essen andere Tiere.",
    t3_inst: "Bringe die Nahrungskette in die richtige Reihenfolge!",
    t3_w1: "Sonnenlicht", t3_w2: "Gras (Pflanze)", t3_w3: "Grashüpfer", t3_w4: "Vogel",
    t3_q: "Womit beginnt die Nahrungskette normalerweise?",
    t3_q_a: "Mit Sonnenlicht und Pflanzen", t3_q_b: "Mit großen Raubtieren", t3_q_c: "Mit Regen", t3_q_d: "Mit Dunkelheit",

    t4_title: "Haustiere pflegen", t4_text: "Wenn wir ein Haustier haben, müssen wir gut dafür sorgen und die Verantwortung übernehmen.",
    t4_b1: "Sie brauchen jeden Tag frisches Wasser und Futter.", t4_b2: "Wir müssen ihnen ein warmes, sicheres Zuhause geben.", t4_b3: "Hunde müssen auch spazieren geführt werden.",
    t4_inst: "Finde die Hundehütte und den Napf auf dem Bild!",
    t4_area_house: "Hundehütte", t4_area_bowl: "Futternapf",
    t4_q: "Was braucht ein Haustier JEDEN Tag?",
    t4_q_a: "Frisches Wasser und Futter", t4_q_b: "Neue Spielzeuge", t4_q_c: "Fernsehen", t4_q_d: "Süßigkeiten",

    t5_title: "Tiere schützen!", t5_text: "Jedes Tier ist ein wichtiger Teil unserer Welt. Wir müssen die Natur bewahren.",
    t5_b1: "Wir müssen Lebensräume vor Müll schützen.", t5_b2: "Die Nahrungskette hält die Natur im Gleichgewicht.", t5_b3: "Lasst uns die Tiere lieben!",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Jedes Tier braucht einen sicheren {gap}, um zu leben.",
    t5_c51: "Lebensraum", t5_c52: "Wagen", t5_c53: "Computer",
    t5_q: "Was sollen wir mit den Lebensräumen der Tiere machen?",
    t5_q_a: "Sie schützen und sauber halten", t5_q_b: "Überall Müll hinwerfen", t5_q_c: "Die Bäume fällen", t5_q_d: "Sie ignorieren",
  },
  ro: {
    explorer_title: "Habitate și Animale",
    t1_title: "Cine unde locuiește?", t1_text: "Există multe tipuri de habitate pe Pământ. Unele au mulți copaci, altele doar nisip sau multă apă.",
    t1_b1: "Pădurea oferă adăpost cu copaci și tufișuri.", t1_b2: "În deșert este cald și puțină apă.", t1_b3: "Peștii și broaștele iubesc apa.",
    t1_inst: "Potrivește animalul cu habitatul său!",
    t1_l1: "Pește", t1_r1: "Lac (Apă)",
    t1_l2: "Veveriță", t1_r2: "Pădure (Copaci)",
    t1_l3: "Cămilă", t1_r3: "Deșert (Nisip)",
    t1_q: "Care habitat are mulți copaci, tufișuri și mușchi?",
    t1_q_a: "Pădurea", t1_q_b: "Deșertul", t1_q_c: "Oceanul", t1_q_d: "Ghețarul",

    t2_title: "Sălbatic sau la Fermă?", t2_text: "Unele animale trăiesc libere în sălbăticie, iar altele sunt îngrijite de oameni la ferme.",
    t2_b1: "Animalele sălbatice (ex. cerbul, vulpea) trăiesc în pădure.", t2_b2: "Animalele domestice (ex. vaca, porcul) sunt la fermă.", t2_b3: "Animalele de la fermă sunt hrănite de oameni.",
    t2_inst: "Unde îi este locul acestui animal? Sortează!",
    t2_bucket_vadon: "Sălbăticie (Pădure)",
    t2_bucket_farm: "Fermă",
    t2_item_v1: "Vulpe", t2_item_v2: "Cerb",
    t2_item_f1: "Vacă", t2_item_f2: "Porc",
    t2_q: "Cine are grijă de animalele de la fermă?",
    t2_q_a: "Fermierul (omul)", t2_q_b: "Ursul", t2_q_c: "Au grijă singure de ele", t2_q_d: "Păsările",

    t3_title: "Lanțul trofic", t3_text: "În natură, fiecare mănâncă ceva pentru a avea energie. Această ordine se numește lanț trofic.",
    t3_b1: "Fiecare lanț începe cu Soarele și plantele.", t3_b2: "Erbivorele mănâncă plante.", t3_b3: "Carnivorele (prădătorii) mănâncă alte animale.",
    t3_inst: "Pune lanțul trofic în ordine (de la mic la mare)!",
    t3_w1: "Lumina soarelui", t3_w2: "Iarbă (Plantă)", t3_w3: "Lăcustă", t3_w4: "Pasăre",
    t3_q: "Cu ce începe de obicei lanțul trofic?",
    t3_q_a: "Cu lumina soarelui și plantele", t3_q_b: "Cu prădătorii mari", t3_q_c: "Cu ploaia", t3_q_d: "Cu întunericul",

    t4_title: "Îngrijirea animalelor", t4_text: "Dacă avem un animal de companie, suntem responsabili pentru el. Trebuie să îl îngrijim!",
    t4_b1: "Au nevoie de apă proaspătă și mâncare în fiecare zi.", t4_b2: "Trebuie să le oferim un adăpost cald și sigur.", t4_b3: "Câinii trebuie, de asemenea, scoși la plimbare.",
    t4_inst: "Găsește cușca câinelui și bolul în imagine!",
    t4_area_house: "Cușcă", t4_area_bowl: "Bol de mâncare",
    t4_q: "De ce are nevoie un animal de companie ÎN FIECARE zi?",
    t4_q_a: "Apă proaspătă și mâncare", t4_q_b: "Jucării noi", t4_q_c: "Să se uite la TV", t4_q_d: "Dulciuri",

    t5_title: "Protejați Animalele!", t5_text: "Fie că e un pește în lac sau un câine în curte, fiecare animal este important.",
    t5_b1: "Trebuie să protejăm habitatele de gunoi.", t5_b2: "Lanțul trofic menține natura în echilibru.", t5_b3: "Să iubim animalele!",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Fiecare animal are nevoie de un {gap} sigur în care să trăiască.",
    t5_c51: "habitat", t5_c52: "automobil", t5_c53: "calculator",
    t5_q: "Ce ar trebui să facem cu habitatele animalelor?",
    t5_q_a: "Să le protejăm și să le ținem curate", t5_q_b: "Să aruncăm gunoi", t5_q_c: "Să tăiem copacii", t5_q_d: "Să le ignorăm",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
        { id: "vadon", label: "t2_bucket_vadon" },
        { id: "farm", label: "t2_bucket_farm" },
      ],
      items: [
        { text: "t2_item_v1", bucketId: "vadon" },
        { text: "t2_item_f1", bucketId: "farm" },
        { text: "t2_item_v2", bucketId: "vadon" },
        { text: "t2_item_f2", bucketId: "farm" },
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
      type: "label-diagram",
      areas: [
        { id: "house", x: 40, y: 60, label: "t4_area_house" },
        { id: "bowl",  x: 75, y: 70, label: "t4_area_bowl" },
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
  icon: "🏡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const HabitatsExplorer = memo(function HabitatsExplorer({
  color = "#059669", // Emerald-600 a természethez
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
      explorerId="sachkunde_k2_habitats" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default HabitatsExplorer;
