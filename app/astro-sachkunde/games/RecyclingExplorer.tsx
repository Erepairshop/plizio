"use client";
// RecyclingExplorer.tsx — Sachkunde Island i7: Materials & Recycling (K1)
// Topics: 1) Miből van? 2) Szemétválogatás 3) A kukák színei 4) Újrahasznosítás 5) Vigyázzunk a természetre!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { 
  MaterialsSvg, 
  WasteSeparationSvg, 
  RecyclingBinsSvg, 
  WhyRecycleSvg, 
  ProtectNatureSvg 
} from "@/app/astro-sachkunde/svg/k1/TrafficRecyclingSvg";

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Anyagok és Újrahasznosítás",
    // T1: Miből van? (Match-pairs)
    t1_title: "Miből készült?",
    t1_text: "A körülöttünk lévő tárgyak különböző anyagokból készülnek. Van, ami fából, papírból, műanyagból vagy üvegből van.",
    t1_b1: "A fákból fát és papírt csinálunk.",
    t1_b2: "A játékaink sokszor műanyagból vannak, mert az nem törik el könnyen.",
    t1_b3: "Az ablak és a pohár üvegből készül, ami átlátszó, de törékeny.",
    t1_inst: "Párosítsd az anyagot a tárggyal!",
    t1_l1: "Fa 🪵", t1_r1: "Szék és asztal",
    t1_l2: "Papír 📄", t1_r2: "Könyv és füzet",
    t1_l3: "Műanyag 🧴", t1_r3: "Játékautó és legó",
    t1_q: "Miből készül az ablaküveg?",
    t1_q_a: "Üvegből", t1_q_b: "Papírból", t1_q_c: "Fából", t1_q_d: "Pamutból",

    // T2: Szemétválogatás (Drag-to-bucket)
    t2_title: "Válogassuk szét a szemetet!",
    t2_text: "A szemetet nem szabad egyetlen nagy kukába dobni! Szét kell válogatnunk, hogy megvédjük a Földet.",
    t2_b1: "A papírt a papíros kukába tesszük.",
    t2_b2: "A műanyag palackot a műanyagos kukába dobjuk.",
    t2_b3: "Ezt hívjuk szelektív hulladékgyűjtésnek.",
    t2_inst: "Papír vagy Műanyag? Húzd a megfelelő helyre!",
    t2_bucket_papir: "Papír kuka 📦",
    t2_bucket_muanyag: "Műanyag kuka 🧴",
    t2_item_p1: "Régi újság", t2_item_p2: "Karton doboz",
    t2_item_m1: "Üres ásványvizes flakon", t2_item_m2: "Joghurtos pohár",
    t2_q: "Hová kell dobni a kiürült müzlis dobozt?",
    t2_q_a: "A papírgyűjtőbe", t2_q_b: "A fűbe", t2_q_c: "A műanyagos kukába", t2_q_d: "Az üveges kukába",

    // T3: Kukák színei (Label-diagram)
    t3_title: "A kukák színei",
    t3_text: "A szelektív kukák különböző színűek, hogy könnyen tudjuk, mit hová kell dobni.",
    t3_b1: "A KÉK kukába gyűjtjük a papírt.",
    t3_b2: "A SÁRGA kukába kerül a műanyag és a fém.",
    t3_b3: "A ZÖLD kukába dobjuk az üveget.",
    t3_inst: "Keresd meg, melyik színű kuka mit jelent!",
    t3_area_blue: "Kék (Papír)",
    t3_area_yellow: "Sárga (Műanyag)",
    t3_area_green: "Zöld (Üveg)",
    t3_q: "Milyen színű kukába dobjuk a műanyag flakont?",
    t3_q_a: "Sárga", t3_q_b: "Kék", t3_q_c: "Piros", t3_q_d: "Fekete",

    // T4: Újrahasznosítás (Word-order)
    t4_title: "Régi dologból valami új!",
    t4_text: "Ha jó helyre dobjuk a szemetet, a gyárakban újrahasznosítják. Vagyis a régi szemétből teljesen új dolgokat készítenek!",
    t4_b1: "A régi papírból új füzet lesz.",
    t4_b2: "A műanyag palackokból akár polár pulcsi is készülhet.",
    t4_b3: "Így kevesebb fát kell kivágni.",
    t4_inst: "Mi a sorrend? Hogyan lesz az üdítőből új tárgy?",
    t4_w1: "Megiszom az üdítőt", t4_w2: "Sárga kukába dobom", t4_w3: "Elviszi a kukásautó", t4_w4: "Új játék készül belőle",
    t4_q: "Mi történik a papírral, ha a kék kukába dobjuk?",
    t4_q_a: "Új papírt csinálnak belőle", t4_q_b: "Elássák a föld alá", t4_q_c: "Üveg lesz belőle", t4_q_d: "Felgyújtják",

    // T5: Természetvédelem (Gap-fill)
    t5_title: "Vigyázzunk az erdőre!",
    t5_text: "A természet az állatok és a növények otthona. Soha ne dobjuk el a szemetet az utcán vagy az erdőben!",
    t5_b1: "A szemét veszélyes az állatokra.",
    t5_b2: "Mindig keressünk egy szemeteskukát.",
    t5_b3: "Ha nincs kuka, vigyük haza a zsebünkben vagy a táskánkban!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Ha kirándulunk az erdőben, a szemetet mindig a {gap} kell dobni.",
    t5_c51: "kukába", t5_c52: "bokorba", t5_c53: "patakba",
    t5_q: "Mit csinálj a csokipapírral, ha megetted a csokit a parkban?",
    t5_q_a: "Keresek egy kukát és beledobom", t5_q_b: "Eldobom a fűbe", t5_q_c: "Otthagyom a padon", t5_q_d: "Bedugom egy fa odvába",
  },
  en: {
    explorer_title: "Materials & Recycling",
    t1_title: "What is it made of?", t1_text: "Things around us are made of different materials, like wood, paper, plastic, or glass.",
    t1_b1: "Trees give us wood and paper.", t1_b2: "Our toys are often made of plastic because it doesn't break easily.", t1_b3: "Windows and glasses are made of glass, which is clear but fragile.",
    t1_inst: "Match the material with the object!",
    t1_l1: "Wood 🪵", t1_r1: "Chair and table",
    t1_l2: "Paper 📄", t1_r2: "Book and notebook",
    t1_l3: "Plastic 🧴", t1_r3: "Toy car and Lego",
    t1_q: "What is a window made of?",
    t1_q_a: "Glass", t1_q_b: "Paper", t1_q_c: "Wood", t1_q_d: "Cotton",

    t2_title: "Sorting the Trash", t2_text: "We shouldn't throw everything in one big bin! We sort our trash to protect the Earth.",
    t2_b1: "Paper goes into the paper bin.", t2_b2: "Plastic bottles go into the plastic bin.", t2_b3: "This is called recycling or waste separation.",
    t2_inst: "Paper or Plastic? Drag to the right bin!",
    t2_bucket_papir: "Paper Bin 📦",
    t2_bucket_muanyag: "Plastic Bin 🧴",
    t2_item_p1: "Old newspaper", t2_item_p2: "Cardboard box",
    t2_item_m1: "Empty water bottle", t2_item_m2: "Yogurt cup",
    t2_q: "Where should you throw an empty cereal box?",
    t2_q_a: "In the paper bin", t2_q_b: "In the grass", t2_q_c: "In the plastic bin", t2_q_d: "In the glass bin",

    t3_title: "Colors of the Bins", t3_text: "Recycling bins have different colors so we easily know what goes where.",
    t3_b1: "The BLUE bin is for paper.", t3_b2: "The YELLOW bin is for plastic and metal.", t3_b3: "The GREEN bin is for glass.",
    t3_inst: "Find what each color means!",
    t3_area_blue: "Blue (Paper)", t3_area_yellow: "Yellow (Plastic)", t3_area_green: "Green (Glass)",
    t3_q: "Which bin do we use for plastic bottles?",
    t3_q_a: "Yellow", t3_q_b: "Blue", t3_q_c: "Red", t3_q_d: "Black",

    t4_title: "Old to New!", t4_text: "If we put trash in the right bin, factories can recycle it. That means making brand new things out of old trash!",
    t4_b1: "Old paper becomes new notebooks.", t4_b2: "Plastic bottles can become a warm fleece sweater.", t4_b3: "This way, we cut down fewer trees.",
    t4_inst: "What is the order? How does a bottle become a new toy?",
    t4_w1: "I drink the water", t4_w2: "Throw it in the yellow bin", t4_w3: "Garbage truck takes it", t4_w4: "It becomes a new toy",
    t4_q: "What happens to paper when we put it in the blue bin?",
    t4_q_a: "It is made into new paper", t4_q_b: "It is buried underground", t4_q_c: "It turns into glass", t4_q_d: "It is burned",

    t5_title: "Protect Nature!", t5_text: "Nature is home to animals and plants. Never throw trash on the street or in the forest!",
    t5_b1: "Trash is dangerous for animals.", t5_b2: "Always look for a trash can.", t5_b3: "If there is no bin, take it home in your bag!",
    t5_inst: "Fill in the word!",
    t5_gap_sentence: "When we walk in the forest, we must always throw our trash in the {gap}.",
    t5_c51: "trash can", t5_c52: "bush", t5_c53: "river",
    t5_q: "What should you do with your candy wrapper in the park?",
    t5_q_a: "Find a bin and throw it in", t5_q_b: "Throw it in the grass", t5_q_c: "Leave it on the bench", t5_q_d: "Put it in a tree hole",
  },
  de: {
    explorer_title: "Materialien & Recycling",
    t1_title: "Woraus ist das gemacht?", t1_text: "Die Dinge um uns herum bestehen aus verschiedenen Materialien wie Holz, Papier, Plastik oder Glas.",
    t1_b1: "Aus Bäumen machen wir Holz und Papier.", t1_b2: "Unsere Spielzeuge sind oft aus Plastik, weil es nicht so schnell kaputtgeht.", t1_b3: "Fenster und Gläser sind aus Glas, das durchsichtig, aber zerbrechlich ist.",
    t1_inst: "Verbinde das Material mit dem Gegenstand!",
    t1_l1: "Holz 🪵", t1_r1: "Stuhl und Tisch",
    t1_l2: "Papier 📄", t1_r2: "Buch und Heft",
    t1_l3: "Plastik 🧴", t1_r3: "Spielzeugauto",
    t1_q: "Woraus besteht ein Fenster?",
    t1_q_a: "Aus Glas", t1_q_b: "Aus Papier", t1_q_c: "Aus Holz", t1_q_d: "Aus Baumwolle",

    t2_title: "Müll trennen", t2_text: "Wir werfen nicht alles in einen großen Eimer! Wir trennen unseren Müll, um die Erde zu schützen.",
    t2_b1: "Papier kommt in die Papiertonne.", t2_b2: "Plastikflaschen kommen in den Gelben Sack/Tonne.", t2_b3: "Das nennt man Mülltrennung.",
    t2_inst: "Papier oder Plastik? Sortiere den Müll!",
    t2_bucket_papir: "Papiertonne 📦",
    t2_bucket_muanyag: "Gelbe Tonne 🧴",
    t2_item_p1: "Alte Zeitung", t2_item_p2: "Pappkarton",
    t2_item_m1: "Leere Wasserflasche", t2_item_m2: "Joghurtbecher",
    t2_q: "Wohin gehört die leere Müslischachtel?",
    t2_q_a: "In die Papiertonne", t2_q_b: "Auf die Wiese", t2_q_c: "In die Plastiktonne", t2_q_d: "In den Glascontainer",

    t3_title: "Farben der Mülltonnen", t3_text: "Die Mülltonnen haben verschiedene Farben, damit wir wissen, was wo hinein gehört.",
    t3_b1: "Die BLAUE Tonne ist für Papier.", t3_b2: "Die GELBE Tonne ist für Plastik und Metall.", t3_b3: "Der GRÜNE (oder weiße) Container ist für Glas.",
    t3_inst: "Finde heraus, wofür die Farben stehen!",
    t3_area_blue: "Blau (Papier)", t3_area_yellow: "Gelb (Plastik)", t3_area_green: "Grün/Weiß (Glas)",
    t3_q: "In welche Tonne werfen wir eine Plastikflasche?",
    t3_q_a: "Gelb", t3_q_b: "Blau", t3_q_c: "Rot", t3_q_d: "Schwarz",

    t4_title: "Aus Alt mach Neu!", t4_text: "Wenn wir den Müll richtig trennen, wird er recycelt. Das bedeutet, aus altem Müll werden ganz neue Dinge gemacht!",
    t4_b1: "Aus altem Papier werden neue Hefte.", t4_b2: "Aus Plastikflaschen kann ein warmer Pullover werden.", t4_b3: "So müssen wir weniger Bäume fällen.",
    t4_inst: "Wie ist die Reihenfolge? Wie wird die Flasche zum Spielzeug?",
    t4_w1: "Ich trinke das Wasser", t4_w2: "Ich werfe sie in die gelbe Tonne", t4_w3: "Das Müllauto holt sie ab", t4_w4: "Ein neues Spielzeug entsteht",
    t4_q: "Was passiert mit Papier, wenn wir es in die blaue Tonne werfen?",
    t4_q_a: "Es wird zu neuem Papier gemacht", t4_q_b: "Es wird vergraben", t4_q_c: "Es wird zu Glas", t4_q_d: "Es wird verbrannt",

    t5_title: "Natur schützen!", t5_text: "Die Natur ist das Zuhause von Tieren und Pflanzen. Wirf niemals Müll auf die Straße oder in den Wald!",
    t5_b1: "Müll ist gefährlich für Tiere.", t5_b2: "Suche immer einen Mülleimer.", t5_b3: "Wenn es keinen Mülleimer gibt, nimm den Müll mit nach Hause!",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Wenn wir im Wald spazieren gehen, werfen wir den Müll immer in den {gap}.",
    t5_c51: "Mülleimer", t5_c52: "Busch", t5_c53: "Bach",
    t5_q: "Was machst du mit dem Schokoladenpapier im Park?",
    t5_q_a: "Ich suche einen Mülleimer und werfe es rein", t5_q_b: "Ich werfe es ins Gras", t5_q_c: "Ich lasse es auf der Bank", t5_q_d: "Ich stecke es in ein Baumloch",
  },
  ro: {
    explorer_title: "Materiale și Reciclare",
    t1_title: "Din ce este făcut?", t1_text: "Obiectele din jurul nostru sunt făcute din materiale diferite: lemn, hârtie, plastic sau sticlă.",
    t1_b1: "Din copaci facem lemn și hârtie.", t1_b2: "Jucăriile sunt adesea din plastic, pentru că nu se sparg ușor.", t1_b3: "Fereastra și paharul sunt din sticlă, care e transparentă, dar fragilă.",
    t1_inst: "Potrivește materialul cu obiectul!",
    t1_l1: "Lemn 🪵", t1_r1: "Scaun și masă",
    t1_l2: "Hârtie 📄", t1_r2: "Carte și caiet",
    t1_l3: "Plastic 🧴", t1_r3: "Mașinuță și lego",
    t1_q: "Din ce este făcută o fereastră?",
    t1_q_a: "Din sticlă", t1_q_b: "Din hârtie", t1_q_c: "Din lemn", t1_q_d: "Din bumbac",

    t2_title: "Sortăm gunoiul", t2_text: "Nu aruncăm totul într-un singur coș mare! Sortăm gunoiul ca să protejăm Pământul.",
    t2_b1: "Hârtia merge la coșul de hârtie.", t2_b2: "Sticla de plastic merge la coșul de plastic.", t2_b3: "Asta se numește colectare selectivă.",
    t2_inst: "Hârtie sau Plastic? Trage la coșul corect!",
    t2_bucket_papir: "Coș de Hârtie 📦",
    t2_bucket_muanyag: "Coș de Plastic 🧴",
    t2_item_p1: "Ziar vechi", t2_item_p2: "Cutie de carton",
    t2_item_m1: "Sticlă de apă goală", t2_item_m2: "Pahar de iaurt",
    t2_q: "Unde trebuie să arunci cutia goală de cereale?",
    t2_q_a: "La coșul de hârtie", t2_q_b: "În iarbă", t2_q_c: "La coșul de plastic", t2_q_d: "La coșul de sticlă",

    t3_title: "Culorile coșurilor", t3_text: "Coșurile de reciclare au culori diferite, ca să știm ușor ce merge și unde.",
    t3_b1: "Coșul ALBASTRU este pentru hârtie.", t3_b2: "Coșul GALBEN este pentru plastic și metal.", t3_b3: "Coșul VERDE este pentru sticlă.",
    t3_inst: "Găsește ce înseamnă fiecare culoare!",
    t3_area_blue: "Albastru (Hârtie)", t3_area_yellow: "Galben (Plastic)", t3_area_green: "Verde (Sticlă)",
    t3_q: "În ce coș aruncăm o sticlă de plastic?",
    t3_q_a: "Galben", t3_q_b: "Albastru", t3_q_c: "Roșu", t3_q_d: "Negru",

    t4_title: "Din vechi facem nou!", t4_text: "Dacă aruncăm gunoiul în coșul corect, fabricile îl reciclează. Asta înseamnă că fac lucruri noi din gunoi vechi!",
    t4_b1: "Hârtia veche devine caiete noi.", t4_b2: "Sticlele de plastic pot deveni un pulover călduros.", t4_b3: "Așa tăiem mai puțini copaci.",
    t4_inst: "Care este ordinea? Cum devine sticla o jucărie nouă?",
    t4_w1: "Beau sucul", t4_w2: "O arunc în coșul galben", t4_w3: "Mașina de gunoi o ia", t4_w4: "Devine o jucărie nouă",
    t4_q: "Ce se întâmplă cu hârtia dacă o aruncăm în coșul albastru?",
    t4_q_a: "Se face hârtie nouă din ea", t4_q_b: "Este îngropată în pământ", t4_q_c: "Se transformă în sticlă", t4_q_d: "Se dă foc",

    t5_title: "Să protejăm natura!", t5_text: "Natura este casa animalelor și a plantelor. Nu arunca niciodată gunoi pe stradă sau în pădure!",
    t5_b1: "Gunoiul este periculos pentru animale.", t5_b2: "Caută mereu un coș de gunoi.", t5_b3: "Dacă nu ai coș, ia-l acasă în buzunar sau ghiozdan!",
    t5_inst: "Completează cuvântul!",
    t5_gap_sentence: "Când ne plimbăm prin pădure, aruncăm mereu gunoiul la {gap}.",
    t5_c51: "coșul de gunoi", t5_c52: "tufiș", t5_c53: "râu",
    t5_q: "Ce faci cu ambalajul de ciocolată în parc?",
    t5_q_a: "Găsesc un coș și îl arunc acolo", t5_q_b: "Îl arunc pe iarbă", t5_q_c: "Îl las pe bancă", t5_q_d: "Îl bag într-o scorbură",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <MaterialsSvg lang={lang} />,
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
    svg: (lang) => <WasteSeparationSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "papir", label: "t2_bucket_papir" },
        { id: "muanyag", label: "t2_bucket_muanyag" },
      ],
      items: [
        { text: "t2_item_p1", bucketId: "papir" },
        { text: "t2_item_m1", bucketId: "muanyag" },
        { text: "t2_item_p2", bucketId: "papir" },
        { text: "t2_item_m2", bucketId: "muanyag" },
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
    svg: (lang) => <RecyclingBinsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "blue",   x: 25, y: 50, label: "t3_area_blue" },
        { id: "yellow", x: 50, y: 50, label: "t3_area_yellow" },
        { id: "green",  x: 75, y: 50, label: "t3_area_green" },
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
    svg: (lang) => <WhyRecycleSvg lang={lang} />,
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
    svg: (lang) => <ProtectNatureSvg lang={lang} />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b2",
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
  icon: "♻️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RecyclingExplorer = memo(function RecyclingExplorer({
  color = "#10B981", // Emerald-500 a környezetvédelemhez
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
      grade={1} 
      explorerId="sachkunde_k1_recycling" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default RecyclingExplorer;
