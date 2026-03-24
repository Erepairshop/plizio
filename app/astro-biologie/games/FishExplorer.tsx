"use client";
// FishAmphibianExplorerK5.tsx — Bio Island: Halak és Kétéltűek (K5)
// Topics: 1) Halak 2) Kétéltűek 3) Légzés 4) Béka életciklus 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { FishAnatomySvg, FrogLifeSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="10" fontSize="40" textAnchor="middle">🐸</text>
        <text x="30" y="10" fontSize="40" textAnchor="middle">🦎</text>
        <text x="0" y="45" fontSize="14" fontWeight="bold" fill="#3F6212" textAnchor="middle">🌊 ↔ 🌿</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="5" fontSize="30" textAnchor="middle">🫧</text>
        <text x="0" y="5" fontSize="20" fill="#0284C7" textAnchor="middle">vs</text>
        <text x="40" y="5" fontSize="30" textAnchor="middle">🫁</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">🫧 → 🫁</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
        <text x="-15" y="5" fontSize="25" textAnchor="middle">🐟</text>
        <text x="15" y="5" fontSize="25" textAnchor="middle">🐸</text>
        <text x="0" y="50" fontSize="14" fontWeight="black" fill="#A16207" textAnchor="middle">QUIZ</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Halak és Kétéltűek",
    // T1: Halak
    t1_title: "A halak világa",
    t1_text: "A halak kizárólag vízben élnek. Testüket pikkelyek borítják, úszóikkal mozognak, és a vízben oldott oxigént lélegzik be.",
    t1_b1: "Élőhely: édesvíz vagy sósvíz.",
    t1_b2: "Kültakaró: nyálkás pikkelyek.",
    t1_b3: "Mozgás: uszonyok segítségével.",
    t1_inst: "Mivel lélegeznek a halak a víz alatt?",
    t1_gap_sentence: "A halak a víz alatt {gap} lélegeznek.",
    t1_c1: "kopoltyúval", t1_c2: "tüdővel", t1_c3: "bőrrel",
    t1_q: "Milyen szervvel mozognak a halak a vízben?",
    t1_q_a: "Uszonyokkal", t1_q_b: "Lábakkal", t1_q_c: "Szárnyakkal", t1_q_d: "Csápokkal",

    // T2: Kétéltűek
    t2_title: "A kétéltűek élete",
    t2_text: "A kétéltűek (pl. békák, szalamandrák) életük egy részét vízben, másik részét szárazföldön töltik. Bőrük vékony és nedves.",
    t2_b1: "Két élettér: víz és szárazföld.",
    t2_b2: "Vékony, mirigyes, nedves bőr.",
    t2_b3: "Petékkel szaporodnak a vízben.",
    t2_inst: "Hal vagy kétéltű? Válogasd szét az állatokat!",
    t2_bucket_fish: "Halak",
    t2_bucket_amph: "Kétéltűek",
    t2_item_f1: "Ponty", t2_item_f2: "Cápa",
    t2_item_a1: "Levelibéka", t2_item_a2: "Foltos szalamandra",
    t2_q: "Milyen a kétéltűek bőre?",
    t2_q_a: "Vékony és nedves", t2_q_b: "Száraz és pikkelyes", t2_q_c: "Szőrös", t2_q_d: "Tollas",

    // T3: Légzés
    t3_title: "Légzőszervek",
    t3_text: "A légzés módja az élőhelytől függ. A vízben a kopoltyú szűri ki az oxigént, a szárazföldön a tüdő és a bőr segít.",
    t3_b1: "Halak és ebihalak: Kopoltyú.",
    t3_b2: "Felnőtt békák: Tüdő és bőrlégzés.",
    t3_b3: "A békák a bőrükön át is vesznek fel oxigént!",
    t3_inst: "Melyik állat hogyan lélegzik? Párosítsd össze!",
    t3_l1: "Felnőtt hal", t3_r1: "Kopoltyú",
    t3_l2: "Ebihal (béka lárva)", t3_r2: "Kopoltyú (vízi)",
    t3_l3: "Felnőtt béka", t3_r3: "Tüdő és bőr",
    t3_q: "Hogyan lélegzik a kifejlett béka a tüdő mellett?",
    t3_q_a: "A bőrén keresztül", t3_q_b: "Csak kopoltyúval", t3_q_c: "A szemeivel", t3_q_d: "Sehogyan",

    // T4: Béka életciklus
    t4_title: "A béka átalakulása",
    t4_text: "A békák teljes átalakuláson mennek keresztül (metamorfózis). A vízben kikelő lárva fokozatosan szárazföldi állattá változik.",
    t4_b1: "A nőstény petéket rak a vízbe.",
    t4_b2: "Kikel az ebihal (kopoltyú, farok).",
    t4_b3: "Kifejlődnek a lábak, eltűnik a farok.",
    t4_inst: "Tedd sorba a béka fejlődési szakaszait!",
    t4_w1: "Pete", t4_w2: "Ebihal", t4_w3: "Négy lábú ebihal", t4_w4: "Kifejlett béka",
    t4_q: "Hogy hívják a béka lárváját?",
    t4_q_a: "Ebihal", t4_q_b: "Hernyó", t4_q_c: "Poronty", t4_q_d: "Nympha",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod! Mennyire ismered a halak és a kétéltűek világát?",
    t5_b1: "Halak: pikkely, kopoltyú, uszony.",
    t5_b2: "Kétéltűek: átalakulás, nedves bőr.",
    t5_b3: "Mindkét csoport hidegvérű (változó testhőmérsékletű).",
    t5_inst: "Milyen hőmérsékletű a vérük ezeknek az állatoknak?",
    t5_gap_sentence2: "A halak és kétéltűek testhőmérséklete {gap}.",
    t5_c21: "változó (hidegvérűek)", t5_c22: "állandó (melegvérűek)", t5_c23: "mindig forró",
    t5_q: "Melyik állítás IGAZ a kétéltűekre?",
    t5_q_a: "Életük egy részét vízben, egy részét szárazföldön töltik.", t5_q_b: "Csak sós vízben élnek.", t5_q_c: "Testüket tollak borítják.", t5_q_d: "Nem raknak petéket.",
  },
  en: {
    explorer_title: "Fish and Amphibians",
    t1_title: "World of Fish", t1_text: "Fish live exclusively in water, have scales, and breathe with gills.",
    t1_b1: "Habitat: fresh or saltwater.", t1_b2: "Covering: slimy scales.", t1_b3: "Movement: fins.",
    t1_inst: "What do fish use to breathe underwater?", t1_gap_sentence: "Fish breathe underwater using {gap}.",
    t1_c1: "gills", t1_c2: "lungs", t1_c3: "skin",
    t1_q: "What organs do fish use to move?", t1_q_a: "Fins", t1_q_b: "Legs", t1_q_c: "Wings", t1_q_d: "Antennae",

    t2_title: "Life of Amphibians", t2_text: "Amphibians live both in water and on land. They have smooth, moist skin.",
    t2_b1: "Two habitats: water and land.", t2_b2: "Thin, moist skin.", t2_b3: "Reproduce with eggs in water.",
    t2_inst: "Fish or Amphibian? Sort the animals!",
    t2_bucket_fish: "Fish", t2_bucket_amph: "Amphibians",
    t2_item_f1: "Carp", t2_item_f2: "Shark", t2_item_a1: "Tree frog", t2_item_a2: "Salamander",
    t2_q: "What kind of skin do amphibians have?", t2_q_a: "Thin and moist", t2_q_b: "Dry and scaly", t2_q_c: "Furry", t2_q_d: "Feathery",

    t3_title: "Respiratory Organs", t3_text: "Breathing depends on the habitat. Gills in water, lungs and skin on land.",
    t3_b1: "Fish & tadpoles: Gills.", t3_b2: "Adult frogs: Lungs and skin.", t3_b3: "Frogs also breathe through their skin!",
    t3_inst: "How do these animals breathe? Match them!",
    t3_l1: "Adult fish", t3_r1: "Gills", t3_l2: "Tadpole", t3_r2: "Gills (aquatic)", t3_l3: "Adult frog", t3_r3: "Lungs and skin",
    t3_q: "How does an adult frog breathe besides using lungs?", t3_q_a: "Through its skin", t3_q_b: "Only with gills", t3_q_c: "Through its eyes", t3_q_d: "It doesn't breathe",

    t4_title: "Frog Lifecycle", t4_text: "Frogs undergo a complete metamorphosis from a water-dwelling larva to a land-dwelling adult.",
    t4_b1: "Females lay eggs in water.", t4_b2: "Tadpole hatches (gills, tail).", t4_b3: "Legs develop, tail disappears.",
    t4_inst: "Put the frog's developmental stages in order!",
    t4_w1: "Egg", t4_w2: "Tadpole", t4_w3: "Froglet", t4_w4: "Adult frog",
    t4_q: "What is the larva of a frog called?", t4_q_a: "Tadpole", t4_q_b: "Caterpillar", t4_q_c: "Fry", t4_q_d: "Nymph",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge! How well do you know fish and amphibians?",
    t5_b1: "Fish: scales, gills, fins.", t5_b2: "Amphibians: metamorphosis, moist skin.", t5_b3: "Both are cold-blooded.",
    t5_inst: "What is the body temperature of these animals?",
    t5_gap_sentence2: "Fish and amphibians are {gap}.",
    t5_c21: "cold-blooded", t5_c22: "warm-blooded", t5_c23: "always hot",
    t5_q: "Which statement is TRUE for amphibians?", t5_q_a: "They spend part of their lives in water, part on land.", t5_q_b: "They live only in salt water.", t5_q_c: "They are covered in feathers.", t5_q_d: "They do not lay eggs.",
  },
  de: {
    explorer_title: "Fische und Amphibien",
    t1_title: "Welt der Fische", t1_text: "Fische leben nur im Wasser, haben Schuppen und atmen mit Kiemen.",
    t1_b1: "Lebensraum: Süß- oder Salzwasser.", t1_b2: "Haut: schleimige Schuppen.", t1_b3: "Bewegung: Flossen.",
    t1_inst: "Womit atmen Fische unter Wasser?", t1_gap_sentence: "Fische atmen unter Wasser mit {gap}.",
    t1_c1: "Kiemen", t1_c2: "Lungen", t1_c3: "Haut",
    t1_q: "Mit welchem Organ bewegen sich Fische?", t1_q_a: "Mit Flossen", t1_q_b: "Mit Beinen", t1_q_c: "Mit Flügeln", t1_q_d: "Mit Fühlern",

    t2_title: "Leben der Amphibien", t2_text: "Amphibien leben teils im Wasser, teils an Land. Sie haben eine feuchte Haut.",
    t2_b1: "Zwei Lebensräume: Wasser und Land.", t2_b2: "Dünne, feuchte Haut.", t2_b3: "Legen Eier im Wasser ab.",
    t2_inst: "Fisch oder Amphibie? Sortiere die Tiere!",
    t2_bucket_fish: "Fische", t2_bucket_amph: "Amphibien",
    t2_item_f1: "Karpfen", t2_item_f2: "Hai", t2_item_a1: "Laubfrosch", t2_item_a2: "Salamander",
    t2_q: "Was für eine Haut haben Amphibien?", t2_q_a: "Dünn und feucht", t2_q_b: "Trocken und schuppig", t2_q_c: "Haarig", t2_q_d: "Gefiedert",

    t3_title: "Atmungsorgane", t3_text: "Die Atmung hängt vom Lebensraum ab. Kiemen im Wasser, Lunge und Haut an Land.",
    t3_b1: "Fische & Kaulquappen: Kiemen.", t3_b2: "Erwachsene Frösche: Lunge und Haut.", t3_b3: "Frösche atmen auch durch die Haut!",
    t3_inst: "Wie atmen diese Tiere? Verbinde sie!",
    t3_l1: "Erwachsener Fisch", t3_r1: "Kiemen", t3_l2: "Kaulquappe", t3_r2: "Kiemen (Wasser)", t3_l3: "Erwachsener Frosch", t3_r3: "Lunge und Haut",
    t3_q: "Wie atmet ein erwachsener Frosch neben der Lunge?", t3_q_a: "Durch die Haut", t3_q_b: "Nur mit Kiemen", t3_q_c: "Durch die Augen", t3_q_d: "Gar nicht",

    t4_title: "Lebenszyklus Frosch", t4_text: "Frösche durchlaufen eine Metamorphose von der Wasserlarve zum Landtier.",
    t4_b1: "Weibchen legt Eier (Laich) ins Wasser.", t4_b2: "Kaulquappe schlüpft (Kiemen, Schwanz).", t4_b3: "Beine wachsen, Schwanz verschwindet.",
    t4_inst: "Bringe die Entwicklungsstadien des Frosches in die richtige Reihenfolge!",
    t4_w1: "Ei (Laich)", t4_w2: "Kaulquappe", t4_w3: "Jungfrosch", t4_w4: "Erwachsener Frosch",
    t4_q: "Wie nennt man die Larve des Frosches?", t4_q_a: "Kaulquappe", t4_q_b: "Raupe", t4_q_c: "Made", t4_q_d: "Nymphe",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Fische und Amphibien!",
    t5_b1: "Fische: Schuppen, Kiemen, Flossen.", t5_b2: "Amphibien: Metamorphose, feuchte Haut.", t5_b3: "Beide sind wechselwarm.",
    t5_inst: "Welche Körpertemperatur haben diese Tiere?",
    t5_gap_sentence2: "Fische und Amphibien sind {gap}.",
    t5_c21: "wechselwarm", t5_c22: "gleichwarm", t5_c23: "immer heiß",
    t5_q: "Welche Aussage über Amphibien ist WAHR?", t5_q_a: "Sie verbringen einen Teil des Lebens im Wasser, einen an Land.", t5_q_b: "Sie leben nur in Salzwasser.", t5_q_c: "Sie haben Federn.", t5_q_d: "Sie legen keine Eier.",
  },
  ro: {
    explorer_title: "Pești și Amfibieni",
    t1_title: "Lumea Peștilor", t1_text: "Peștii trăiesc exclusiv în apă, au solzi și respiră prin branhii.",
    t1_b1: "Habitat: apă dulce sau sărată.", t1_b2: "Piele: solzi mucoși.", t1_b3: "Mișcare: cu ajutorul înotătoarelor.",
    t1_inst: "Cu ce respiră peștii sub apă?", t1_gap_sentence: "Peștii respiră sub apă cu ajutorul {gap}.",
    t1_c1: "branhiilor", t1_c2: "plămânilor", t1_c3: "pielii",
    t1_q: "Ce organe folosesc peștii pentru a se mișca?", t1_q_a: "Înotătoarele", t1_q_b: "Picioarele", t1_q_c: "Aripile", t1_q_d: "Antenele",

    t2_title: "Viața Amfibienilor", t2_text: "Amfibienii trăiesc o parte din viață în apă și o parte pe uscat.",
    t2_b1: "Două habitate: apă și uscat.", t2_b2: "Piele subțire și umedă.", t2_b3: "Se înmulțesc prin ouă în apă.",
    t2_inst: "Pește sau Amfibian? Sortează animalele!",
    t2_bucket_fish: "Pești", t2_bucket_amph: "Amfibieni",
    t2_item_f1: "Crap", t2_item_f2: "Rechin", t2_item_a1: "Brotăcel", t2_item_a2: "Salamandră",
    t2_q: "Cum este pielea amfibienilor?", t2_q_a: "Subțire și umedă", t2_q_b: "Uscată și solzoasă", t2_q_c: "Păroasă", t2_q_d: "Cu pene",

    t3_title: "Organe Respiratorii", t3_text: "Modul de respirație depinde de habitat. Branhii în apă, plămâni și piele pe uscat.",
    t3_b1: "Pești și mormoloci: Branhii.", t3_b2: "Broaște adulte: Plămâni și piele.", t3_b3: "Broaștele respiră și prin piele!",
    t3_inst: "Cum respiră aceste animale? Potrivește-le!",
    t3_l1: "Pește adult", t3_r1: "Branhii", t3_l2: "Mormoloc", t3_r2: "Branhii (acvatice)", t3_l3: "Broască adultă", t3_r3: "Plămâni și piele",
    t3_q: "Cum respiră o broască adultă, pe lângă plămâni?", t3_q_a: "Prin piele", t3_q_b: "Doar prin branhii", t3_q_c: "Prin ochi", t3_q_d: "Nu respiră",

    t4_title: "Ciclul de Viață al Broaștei", t4_text: "Broaștele trec printr-o metamorfoză completă, de la larvă la adult.",
    t4_b1: "Femela depune ouă în apă.", t4_b2: "Iese mormolocul (branhii, coadă).", t4_b3: "Apar picioarele, dispare coada.",
    t4_inst: "Pune etapele de dezvoltare ale broaștei în ordine!",
    t4_w1: "Ou", t4_w2: "Mormoloc", t4_w3: "Broască tânără", t4_w4: "Broască adultă",
    t4_q: "Cum se numește larva broaștei?", t4_q_a: "Mormoloc", t4_q_b: "Omidă", t4_q_c: "Pui", t4_q_d: "Nimfă",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre pești și amfibieni!",
    t5_b1: "Pești: solzi, branhii, înotătoare.", t5_b2: "Amfibieni: metamorfoză, piele umedă.", t5_b3: "Ambele au sânge rece.",
    t5_inst: "Cum este temperatura sângelui acestor animale?",
    t5_gap_sentence2: "Peștii și amfibienii sunt animale cu sânge {gap}.",
    t5_c21: "rece (temperatură variabilă)", t5_c22: "cald", t5_c23: "fierbinte",
    t5_q: "Care afirmație este ADEVĂRATĂ pentru amfibieni?", t5_q_a: "Petrec o parte din viață în apă și o parte pe uscat.", t5_q_b: "Trăiesc doar în apă sărată.", t5_q_c: "Au corpul acoperit cu pene.", t5_q_d: "Nu depun ouă.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <FishAnatomySvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_b3",
      hint2: "t1_b1",
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
        { id: "fish", label: "t2_bucket_fish" },
        { id: "amph", label: "t2_bucket_amph" },
      ],
      items: [
        { text: "t2_item_f1", bucketId: "fish" },
        { text: "t2_item_a1", bucketId: "amph" },
        { text: "t2_item_f2", bucketId: "fish" },
        { text: "t2_item_a2", bucketId: "amph" },
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
    svg: (lang) => <FrogLifeSvg lang={lang} />,
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
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c21", "t5_c22", "t5_c23"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b3",
      hint2: "t5_b1",
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
  icon: "🐟",
  topics: TOPICS,
  rounds: [], // Rounds kept empty as required by the engine spec currently
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const FishAmphibianExplorerK5 = memo(function FishAmphibianExplorerK5({
  color = "#0284C7", // Kék árnyalat a vizes élővilág miatt
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
      grade={5} 
      explorerId="bio_k5_fish_amphibians" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default FishAmphibianExplorerK5;
