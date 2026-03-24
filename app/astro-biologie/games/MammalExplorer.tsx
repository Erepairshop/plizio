"use client";
// MammalExplorer.tsx — Bio Island i3: Emlősök (K5)
// Topics: 1) Emlősök jellemzői 2) Emlős csoportok 3) Táplálkozás és Fogazat 4) Tápláléklánc 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { MammalAnatomySvg, MammalGroupsSvg, FoodChainSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="35" textAnchor="middle">🦷</text>
        <path d="M -10,-10 L 10,-10" stroke="#DB2777" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="40" y="-15" fontSize="25" textAnchor="middle">🥩</text>
        <text x="40" y="20" fontSize="25" textAnchor="middle">🌿</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="-15" y="10" fontSize="30" textAnchor="middle">🦊</text>
        <text x="20" y="10" fontSize="30" textAnchor="middle">🐻</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Emlősök Világa",
    // T1: Jellemzők
    t1_title: "Az emlősök jellemzői",
    t1_text: "Az emlősök a legfejlettebb gerincesek. Kicsinyeiket anyatejjel táplálják, testüket szőrzet borítja, és állandó testhőmérsékletűek (melegvérűek).",
    t1_b1: "Kültakaró: bőr és szőrzet.",
    t1_b2: "Légzés: fejlett tüdővel.",
    t1_b3: "Utódgondozás: a nőstények anyatejjel szoptatnak.",
    t1_inst: "Mivel táplálják az emlősök a kicsinyeiket?",
    t1_gap_sentence: "Az emlős anyák {gap} táplálják az utódaikat.",
    t1_c1: "anyatejjel", t1_c2: "növényekkel", t1_c3: "vízzel",
    t1_q: "Milyen az emlősök testhőmérséklete?",
    t1_q_a: "Állandó (melegvérűek)", t1_q_b: "Változó (hidegvérűek)", t1_q_c: "A környezettől függ", t1_q_d: "Mindig fagyos",

    // T2: Csoportok
    t2_title: "Emlős csoportok",
    t2_text: "Az emlősöket szaporodásuk alapján három nagy csoportra osztjuk: méhlepényesek (pl. kutya, ember), erszényesek (pl. kenguru) és tojásrakó emlősök (pl. kacsacsőrű emlős).",
    t2_b1: "Méhlepényesek: az utód az anyaméhben fejlődik ki.",
    t2_b2: "Erszényesek: a fejletlen utód az erszényben fejlődik tovább.",
    t2_b3: "Tojásrakók: tojással szaporodnak, de tejjel táplálnak.",
    t2_inst: "Válogasd szét az állatokat csoportjuk szerint!",
    t2_bucket_plac: "Méhlepényesek",
    t2_bucket_mars: "Erszényesek",
    t2_item_p1: "Kutya", t2_item_p2: "Ember",
    t2_item_m1: "Kenguru", t2_item_m2: "Koala",
    t2_q: "Melyik egy tojásrakó emlős?",
    t2_q_a: "Kacsacsőrű emlős", t2_q_b: "Kenguru", t2_q_c: "Delfin", t2_q_d: "Denevér",

    // T3: Fogazat
    t3_title: "Fogazat és táplálkozás",
    t3_text: "Az emlősök fogazata a táplálékukhoz alkalmazkodott. Háromféle foguk van: metszőfog, szemfog és zápfog.",
    t3_b1: "Ragadozók: nagy szemfogak a zsákmány megragadásához.",
    t3_b2: "Növényevők: redős zápfogak az őrléshez.",
    t3_b3: "Mindenevők: gumós zápfogak vegyes táplálékhoz.",
    t3_inst: "Párosítsd a táplálkozási típust a jellemző fogazattal!",
    t3_l1: "Ragadozó", t3_r1: "Nagy, hegyes szemfogak",
    t3_l2: "Növényevő", t3_r2: "Redős zápfogak",
    t3_l3: "Mindenevő", t3_r3: "Gumós zápfogak",
    t3_q: "Milyen fogai vannak egy növényevőnek a fű őrlésére?",
    t3_q_a: "Zápfogak", t3_q_b: "Szemfogak", t3_q_c: "Méregfogak", t3_q_d: "Csőr",

    // T4: Tápláléklánc
    t4_title: "A tápláléklánc",
    t4_text: "Az élőlények a természetben táplálkozási kapcsolatban állnak egymással. A növényeket (termelők) megeszik a növényevők, őket pedig a ragadozók.",
    t4_b1: "Termelők: Növények (napenergiából táplálék).",
    t4_b2: "Elsődleges fogyasztó: Növényevő állat (pl. nyúl).",
    t4_b3: "Másodlagos fogyasztó: Ragadozó állat (pl. róka).",
    t4_inst: "Tedd sorba a tápláléklánc tagjait (kit eszik meg ki)!",
    t4_w1: "Fű", t4_w2: "Nyúl", t4_w3: "Róka", t4_w4: "Farkas",
    t4_q: "Kik állnak a tápláléklánc legalján?",
    t4_q_a: "A növények (termelők)", t4_q_b: "A csúcsragadozók", t4_q_c: "A növényevők", t4_q_d: "A baktériumok",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod az emlősökről és a táplálkozásról!",
    t5_b1: "Szőrzet, anyatej, állandó testhő.",
    t5_b2: "Három csoport: méhlepényes, erszényes, tojásrakó.",
    t5_b3: "A fogazat elárulja a táplálkozást.",
    t5_inst: "Milyen kültakaró jellemző az emlősökre?",
    t5_gap_sentence2: "Az emlősök testét legtöbbször {gap} borítja.",
    t5_c51: "szőrzet", t5_c52: "pikkely", t5_c53: "toll",
    t5_q: "Melyik állítás IGAZ az emlősökre?",
    t5_q_a: "Kicsinyeiket anyatejjel táplálják.", t5_q_b: "Mindegyikük vízben él.", t5_q_c: "Hidegvérűek.", t5_q_d: "Nincsenek fogaik.",
  },
  en: {
    explorer_title: "World of Mammals",
    t1_title: "Mammal Traits", t1_text: "Mammals are advanced vertebrates. They feed their young with milk, have hair or fur, and are warm-blooded.",
    t1_b1: "Covering: skin and hair/fur.", t1_b2: "Breathing: developed lungs.", t1_b3: "Care: females produce milk.",
    t1_inst: "What do mammals feed their young?", t1_gap_sentence: "Mammal mothers feed their babies with {gap}.",
    t1_c1: "milk", t1_c2: "plants", t1_c3: "water",
    t1_q: "What is the body temperature of mammals?", t1_q_a: "Constant (warm-blooded)", t1_q_b: "Variable (cold-blooded)", t1_q_c: "Depends on the sun", t1_q_d: "Always freezing",

    t2_title: "Mammal Groups", t2_text: "Mammals are divided into three groups based on reproduction: placentals (dogs, humans), marsupials (kangaroos), and monotremes (platypus).",
    t2_b1: "Placentals: young develop in the womb.", t2_b2: "Marsupials: undeveloped young grow in a pouch.", t2_b3: "Monotremes: lay eggs but feed with milk.",
    t2_inst: "Sort the animals by their group!",
    t2_bucket_plac: "Placentals", t2_bucket_mars: "Marsupials",
    t2_item_p1: "Dog", t2_item_p2: "Human", t2_item_m1: "Kangaroo", t2_item_m2: "Koala",
    t2_q: "Which of these is an egg-laying mammal?", t2_q_a: "Platypus", t2_q_b: "Kangaroo", t2_q_c: "Dolphin", t2_q_d: "Bat",

    t3_title: "Teeth and Diet", t3_text: "Mammalian teeth are adapted to their diet. They have incisors, canines, and molars.",
    t3_b1: "Carnivores: large canines for grabbing prey.", t3_b2: "Herbivores: ridged molars for grinding.", t3_b3: "Omnivores: bumpy molars for a mixed diet.",
    t3_inst: "Match the diet type with the typical teeth!",
    t3_l1: "Carnivore", t3_r1: "Large, sharp canines", t3_l2: "Herbivore", t3_r2: "Ridged molars", t3_l3: "Omnivore", t3_r3: "Bumpy molars",
    t3_q: "What kind of teeth do herbivores use to grind grass?", t3_q_a: "Molars", t3_q_b: "Canines", t3_q_c: "Fangs", t3_q_d: "Beaks",

    t4_title: "The Food Chain", t4_text: "Living things are connected through feeding relationships. Plants are eaten by herbivores, which are eaten by carnivores.",
    t4_b1: "Producers: Plants (make food from the sun).", t4_b2: "Primary consumer: Herbivore (e.g., rabbit).", t4_b3: "Secondary consumer: Carnivore (e.g., fox).",
    t4_inst: "Put the food chain in order (who gets eaten by whom)!",
    t4_w1: "Grass", t4_w2: "Rabbit", t4_w3: "Fox", t4_w4: "Wolf",
    t4_q: "Who is at the very bottom of the food chain?", t4_q_a: "Plants (producers)", t4_q_b: "Apex predators", t4_q_c: "Herbivores", t4_q_d: "Bacteria",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about mammals and their diets!",
    t5_b1: "Hair, milk, warm-blooded.", t5_b2: "Three groups: placental, marsupial, monotreme.", t5_b3: "Teeth reveal the diet.",
    t5_inst: "What covering is typical for mammals?", t5_gap_sentence2: "Mammals' bodies are mostly covered in {gap}.",
    t5_c51: "hair/fur", t5_c52: "scales", t5_c53: "feathers",
    t5_q: "Which statement is TRUE about mammals?", t5_q_a: "They feed their young with milk.", t5_q_b: "They all live in water.", t5_q_c: "They are cold-blooded.", t5_q_d: "They have no teeth.",
  },
  de: {
    explorer_title: "Welt der Säugetiere",
    t1_title: "Merkmale der Säuger", t1_text: "Säugetiere sind hochentwickelte Wirbeltiere. Sie säugen ihren Nachwuchs mit Milch, haben Haare und sind gleichwarm.",
    t1_b1: "Körperbedeckung: Haut und Haare.", t1_b2: "Atmung: hochentwickelte Lunge.", t1_b3: "Brutpflege: Weibchen produzieren Muttermilch.",
    t1_inst: "Womit füttern Säugetiere ihren Nachwuchs?", t1_gap_sentence: "Säugetiermütter füttern ihre Babys mit {gap}.",
    t1_c1: "Milch", t1_c2: "Pflanzen", t1_c3: "Wasser",
    t1_q: "Wie ist die Körpertemperatur von Säugetieren?", t1_q_a: "Gleichwarm", t1_q_b: "Wechselwarm", t1_q_c: "Abhängig vom Wetter", t1_q_d: "Immer eiskalt",

    t2_title: "Säugetiergruppen", t2_text: "Säugetiere werden nach der Fortpflanzung in drei Gruppen geteilt: Plazentatiere (Hund, Mensch), Beuteltiere (Känguru) und Kloakentiere (Schnabeltier).",
    t2_b1: "Plazentatiere: Nachwuchs wächst im Mutterleib.", t2_b2: "Beuteltiere: Nachwuchs wächst im Beutel heran.", t2_b3: "Kloakentiere: Legen Eier, geben aber Milch.",
    t2_inst: "Sortiere die Tiere nach ihrer Gruppe!",
    t2_bucket_plac: "Plazentatiere", t2_bucket_mars: "Beuteltiere",
    t2_item_p1: "Hund", t2_item_p2: "Mensch", t2_item_m1: "Känguru", t2_item_m2: "Koala",
    t2_q: "Welches Tier ist ein eierlegendes Säugetier?", t2_q_a: "Schnabeltier", t2_q_b: "Känguru", t2_q_c: "Delfin", t2_q_d: "Fledermaus",

    t3_title: "Gebiss und Ernährung", t3_text: "Das Gebiss der Säugetiere ist an ihre Nahrung angepasst. Es gibt Schneide-, Eck- und Backenzähne.",
    t3_b1: "Fleischfresser: große Eckzähne (Fangzähne).", t3_b2: "Pflanzenfresser: breite Backenzähne zum Mahlen.", t3_b3: "Allesfresser: Höckerbackenzähne.",
    t3_inst: "Verbinde die Ernährungsweise mit dem Gebiss!",
    t3_l1: "Fleischfresser", t3_r1: "Große Fangzähne", t3_l2: "Pflanzenfresser", t3_r2: "Breite Backenzähne", t3_l3: "Allesfresser", t3_r3: "Höckerbackenzähne",
    t3_q: "Welche Zähne nutzen Pflanzenfresser zum Zermahlen von Gras?", t3_q_a: "Backenzähne", t3_q_b: "Eckzähne", t3_q_c: "Giftzähne", t3_q_d: "Schnäbel",

    t4_title: "Die Nahrungskette", t4_text: "Lebewesen sind durch ihre Ernährung miteinander verbunden. Pflanzen werden von Pflanzenfressern gefressen, diese wiederum von Fleischfressern.",
    t4_b1: "Produzenten: Pflanzen (nutzen Sonnenlicht).", t4_b2: "Primärkonsument: Pflanzenfresser (z.B. Hase).", t4_b3: "Sekundärkonsument: Fleischfresser (z.B. Fuchs).",
    t4_inst: "Bringe die Nahrungskette in die richtige Reihenfolge!",
    t4_w1: "Gras", t4_w2: "Hase", t4_w3: "Fuchs", t4_w4: "Wolf",
    t4_q: "Wer steht ganz unten in der Nahrungskette?", t4_q_a: "Pflanzen (Produzenten)", t4_q_b: "Spitzenprädatoren", t4_q_c: "Pflanzenfresser", t4_q_d: "Bakterien",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Säugetiere und Nahrungsketten!",
    t5_b1: "Haare, Milch, gleichwarm.", t5_b2: "Drei Gruppen: Plazenta-, Beutel-, Kloakentiere.", t5_b3: "Zähne verraten die Nahrung.",
    t5_inst: "Welche Körperbedeckung ist typisch für Säugetiere?", t5_gap_sentence2: "Der Körper von Säugetieren ist meist mit {gap} bedeckt.",
    t5_c51: "Haaren", t5_c52: "Schuppen", t5_c53: "Federn",
    t5_q: "Welche Aussage über Säugetiere ist WAHR?", t5_q_a: "Sie füttern ihre Jungen mit Milch.", t5_q_b: "Sie leben alle im Wasser.", t5_q_c: "Sie sind wechselwarm.", t5_q_d: "Sie haben keine Zähne.",
  },
  ro: {
    explorer_title: "Lumea Mamiferelor",
    t1_title: "Trăsăturile Mamiferelor", t1_text: "Mamiferele sunt vertebrate superioare. Își hrănesc puii cu lapte, au păr sau blană și sunt animale cu sânge cald.",
    t1_b1: "Înveliș: piele și păr/blană.", t1_b2: "Respirație: plămâni dezvoltați.", t1_b3: "Îngrijire: femelele produc lapte matern.",
    t1_inst: "Cu ce își hrănesc mamiferele puii?", t1_gap_sentence: "Mamele mamifere își hrănesc puii cu {gap}.",
    t1_c1: "lapte", t1_c2: "plante", t1_c3: "apă",
    t1_q: "Cum este temperatura corpului mamiferelor?", t1_q_a: "Constantă (sânge cald)", t1_q_b: "Variabilă (sânge rece)", t1_q_c: "Depinde de soare", t1_q_d: "Mereu înghețată",

    t2_title: "Grupuri de Mamifere", t2_text: "Mamiferele se împart în trei grupuri: placentare (câine, om), marsupiale (cangur) și monotreme (ornitorinc).",
    t2_b1: "Placentare: puii se dezvoltă în uter.", t2_b2: "Marsupiale: puii nedezvoltați cresc în marsupiu.", t2_b3: "Monotreme: depun ouă, dar dau lapte.",
    t2_inst: "Sortează animalele după grupul lor!",
    t2_bucket_plac: "Placentare", t2_bucket_mars: "Marsupiale",
    t2_item_p1: "Câine", t2_item_p2: "Om", t2_item_m1: "Cangur", t2_item_m2: "Koala",
    t2_q: "Care este un mamifer care depune ouă?", t2_q_a: "Ornitorincul", t2_q_b: "Cangurul", t2_q_c: "Delfinul", t2_q_d: "Liliacul",

    t3_title: "Dinți și Alimentație", t3_text: "Dentiția mamiferelor este adaptată alimentației. Au incisivi, canini și molari.",
    t3_b1: "Carnivore: canini mari pentru a prinde prada.", t3_b2: "Erbivore: molari cu creste pentru măcinare.", t3_b3: "Omnivore: molari cu denivelări.",
    t3_inst: "Potrivește tipul de alimentație cu dentiția!",
    t3_l1: "Carnivor", t3_r1: "Canini mari și ascuțiți", t3_l2: "Erbivor", t3_r2: "Molari cu creste", t3_l3: "Omnivor", t3_r3: "Molari cu denivelări",
    t3_q: "Ce dinți folosesc erbivorele pentru a măcina iarba?", t3_q_a: "Măselele (molarii)", t3_q_b: "Caninii", t3_q_c: "Colții de venin", t3_q_d: "Ciocul",

    t4_title: "Lanțul Trofic", t4_text: "Viețuitoarele sunt conectate prin relații de hrănire. Plantele sunt mâncate de erbivore, care sunt mâncate de carnivore.",
    t4_b1: "Producători: Plante (folosesc lumina soarelui).", t4_b2: "Consumator primar: Erbivor (ex: iepure).", t4_b3: "Consumator secundar: Carnivor (ex: vulpe).",
    t4_inst: "Pune lanțul trofic în ordinea corectă!",
    t4_w1: "Iarbă", t4_w2: "Iepure", t4_w3: "Vulpe", t4_w4: "Lup",
    t4_q: "Cine se află la baza lanțului trofic?", t4_q_a: "Plantele (producătorii)", t4_q_b: "Prădătorii de top", t4_q_c: "Erbivorele", t4_q_d: "Bacteriile",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre mamifere și lanțuri trofice!",
    t5_b1: "Păr, lapte, sânge cald.", t5_b2: "Trei grupuri: placentare, marsupiale, monotreme.", t5_b3: "Dinții arată alimentația.",
    t5_inst: "Ce înveliș este tipic pentru mamifere?", t5_gap_sentence2: "Corpul mamiferelor este acoperit de obicei cu {gap}.",
    t5_c51: "păr/blană", t5_c52: "solzi", t5_c53: "pene",
    t5_q: "Care afirmație este ADEVĂRATĂ despre mamifere?", t5_q_a: "Își hrănesc puii cu lapte.", t5_q_b: "Toate trăiesc în apă.", t5_q_c: "Au sânge rece.", t5_q_d: "Nu au dinți.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <MammalAnatomySvg lang={lang} />,
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
    svg: (lang) => <MammalGroupsSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "plac", label: "t2_bucket_plac" },
        { id: "mars", label: "t2_bucket_mars" },
      ],
      items: [
        { text: "t2_item_p1", bucketId: "plac" },
        { text: "t2_item_m1", bucketId: "mars" },
        { text: "t2_item_p2", bucketId: "plac" },
        { text: "t2_item_m2", bucketId: "mars" },
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
    svg: (lang) => <FoodChainSvg lang={lang} />,
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
  icon: "🦊",
  topics: TOPICS,
  rounds: [], 
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MammalExplorer = memo(function MammalExplorer({
  color = "#9D174D", // Sötét rózsaszínes-bordó az emlősökre
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
      explorerId="bio_k5_mammals" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default MammalExplorer;
