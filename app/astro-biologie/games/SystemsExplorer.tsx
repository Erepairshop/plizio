"use client";
// SystemsExplorer.tsx — Bio Island i9: Összefoglaló (K6)
// Topics: 1) Ízeltlábúak 2) Erdei ökoszisztéma 3) Szív és Keringés 4) Légzés 5) Szaporodás és Pubertás

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ArthropodGroupsSvg, ForestLayersSvg, HeartSvg, LungsSvg, ReproductionSvg } from "@/app/astro-biologie/svg";

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Év Végi Összefoglaló K6",
    // T1: Ízeltlábúak
    t1_title: "Az Ízeltlábúak",
    t1_text: "Az ízeltlábúak a Föld legnagyobb állatcsoportja. Jellemzőjük a külső kitinváz és az ízelt lábak. Legfőbb csoportjaik a rovarok és a pókszabásúak.",
    t1_b1: "Rovarok: 3 testtáj (fej, tor, potroh), 6 láb, csápok jelenléte.",
    t1_b2: "Pókszabásúak: 2 testtáj (fejtor, potroh), 8 láb, nincsenek csápjaik.",
    t1_b3: "Mindkét csoport fejlődése során vedlik (lecseréli a szűk vázat).",
    t1_inst: "Rovar vagy Pók? Válogasd szét a jellemzőket!",
    t1_bucket_rov: "Rovarok",
    t1_bucket_pok: "Pókok",
    t1_item_r1: "6 láb", t1_item_r2: "Van csápja",
    t1_item_p1: "8 láb", t1_item_p2: "Nincs csápja",
    t1_q: "Milyen anyagból áll az ízeltlábúak külső váza?",
    t1_q_a: "Kitinből", t1_q_b: "Mészből", t1_q_c: "Porcból", t1_q_d: "Csontból",

    // T2: Erdő
    t2_title: "Az Erdei Ökoszisztéma",
    t2_text: "Az erdő egy bonyolult életközösség, ahol a növények, állatok és lebontók szigorú táplálékhálózatot alkotnak.",
    t2_b1: "Termelők: a zöld növények napfényből állítják elő a táplálékot.",
    t2_b2: "Fogyasztók: növényevő és húsevő állatok, amelyek a termelőket vagy egymást eszik.",
    t2_b3: "Lebontók: gombák és baktériumok, melyek humusszá alakítják a holt anyagokat.",
    t2_inst: "Párosítsd a szereplőt a feladatával!",
    t2_l1: "Növények", t2_r1: "Termelők (táplálékot készít)",
    t2_l2: "Állatok", t2_r2: "Fogyasztók (másokból él)",
    t2_l3: "Gombák", t2_r3: "Lebontók (eltakarítják a holt anyagot)",
    t2_q: "Mit hoznak létre a lebontók az elhalt növényekből a talajban?",
    t2_q_a: "Humuszt", t2_q_b: "Sziklát", t2_q_c: "Műanyagot", t2_q_d: "Sós vizet",

    // T3: Szív és Keringés
    t3_title: "Szív és Keringés",
    t3_text: "A keringési rendszer szállítja a vért a testben. A motorja a szív, amely négy üregből (két pitvar, két kamra) áll.",
    t3_b1: "Kis vérkör: a tüdőbe szállítja a vért, ahol az felveszi az oxigént.",
    t3_b2: "Nagy vérkör: az oxigéndús vért a test összes sejtjéhez juttatja.",
    t3_b3: "A vörösvérsejtek feladata az oxigén szállítása.",
    t3_inst: "Mik pumpálják a vért a szívből a test és a tüdő felé?",
    t3_gap_sentence: "A szívből a vért a {gap} pumpálják ki.",
    t3_c1: "kamrák", t3_c2: "pitvarok", t3_c3: "billentyűk",
    t3_q: "Milyen erek viszik el a vért a szívből?",
    t3_q_a: "Artériák (ütőerek)", t3_q_b: "Vénák (gyűjtőerek)", t3_q_c: "Nyirokerek", t3_q_d: "Légcsövek",

    // T4: Légzés
    t4_title: "A Légzőrendszer",
    t4_text: "A légzés célja az oxigén felvétele és a szén-dioxid leadása. Ez a gázcsere a tüdőhólyagocskákban történik.",
    t4_b1: "A levegő az orrüregen, a gégén és a légcsövön át jut a tüdőbe.",
    t4_b2: "A belégzést a rekeszizom és a mellkasizmok végzik.",
    t4_b3: "A sejtek az oxigént energiatermelésre használják fel.",
    t4_inst: "Tedd sorba a mondat szavait!",
    t4_w1: "Az", t4_w2: "oxigén", t4_w3: "bejut", t4_w4: "a", t4_w5: "vérbe.",
    t4_q: "Melyik izom játssza a legfőbb szerepet a légzésben?",
    t4_q_a: "A rekeszizom", t4_q_b: "A szívizom", t4_q_c: "A hasizom", t4_q_d: "A nyelvizom",

    // T5: Szaporodás
    t5_title: "Szaporodás és Pubertás",
    t5_text: "A pubertás során a hormonok hatására a test felkészül a felnőttkorra és a szaporodásra.",
    t5_b1: "A herék termelik a hímivarsejteket (spermiumokat) és a tesztoszteront.",
    t5_b2: "A petefészkek termelik a petesejteket és az ösztrogént.",
    t5_b3: "A megtermékenyített petesejt a méhben fejlődik magzattá.",
    t5_inst: "Hol fejlődik az embrió (magzat) a terhesség alatt?",
    t5_gap_sentence2: "A magzat a női {gap} fejlődik a kilenc hónap alatt.",
    t5_c51: "méhben", t5_c52: "petefészekben", t5_c53: "gyomorban",
    t5_q: "Mik irányítják a serdülőkori testi változásokat?",
    t5_q_a: "A hormonok", t5_q_b: "A vörösvérsejtek", t5_q_c: "A baktériumok", t5_q_d: "Az ízületek",
  },
  en: {
    explorer_title: "Final Review K6",
    t1_title: "The Arthropods", t1_text: "Arthropods are the largest animal group. They have an external chitin skeleton and jointed legs. The main groups are insects and arachnids.",
    t1_b1: "Insects: 3 body parts, 6 legs, have antennae.", t1_b2: "Arachnids: 2 body parts, 8 legs, no antennae.", t1_b3: "Both groups molt (shed their skeleton) to grow.",
    t1_inst: "Insect or Arachnid? Sort the features!",
    t1_bucket_rov: "Insects", t1_bucket_pok: "Arachnids",
    t1_item_r1: "6 legs", t1_item_r2: "Has antennae", t1_item_p1: "8 legs", t1_item_p2: "No antennae",
    t1_q: "What material makes up the external skeleton of arthropods?", t1_q_a: "Chitin", t1_q_b: "Calcium", t1_q_c: "Cartilage", t1_q_d: "Bone",

    t2_title: "Forest Ecosystem", t2_text: "The forest is a complex community where plants, animals, and decomposers form a strict food web.",
    t2_b1: "Producers: green plants make food from sunlight.", t2_b2: "Consumers: herbivores and carnivores that eat producers or each other.", t2_b3: "Decomposers: fungi and bacteria that turn dead matter into humus.",
    t2_inst: "Match the organism to its role!",
    t2_l1: "Plants", t2_r1: "Producers (make food)", t2_l2: "Animals", t2_r2: "Consumers (eat others)", t2_l3: "Fungi", t2_r3: "Decomposers (clean up)",
    t2_q: "What do decomposers create from dead plants in the soil?", t2_q_a: "Humus", t2_q_b: "Rocks", t2_q_c: "Plastic", t2_q_d: "Saltwater",

    t3_title: "Heart and Circulation", t3_text: "The circulatory system transports blood. Its engine is the heart, which has four chambers (two atria, two ventricles).",
    t3_b1: "Pulmonary loop: takes blood to the lungs to pick up oxygen.", t3_b2: "Systemic loop: delivers oxygen-rich blood to all body cells.", t3_b3: "Red blood cells are responsible for carrying oxygen.",
    t3_inst: "What pumps blood out of the heart to the body and lungs?", t3_gap_sentence: "Blood is pumped out of the heart by the {gap}.",
    t3_c1: "ventricles", t3_c2: "atria", t3_c3: "valves",
    t3_q: "Which blood vessels carry blood away from the heart?", t3_q_a: "Arteries", t3_q_b: "Veins", t3_q_c: "Lymph vessels", t3_q_d: "Windpipes",

    t4_title: "The Respiratory System", t4_text: "The goal of breathing is to take in oxygen and release carbon dioxide. Gas exchange happens in the alveoli.",
    t4_b1: "Air goes through the nasal cavity, larynx, and trachea to the lungs.", t4_b2: "Inhalation is driven by the diaphragm and chest muscles.", t4_b3: "Cells use oxygen to produce energy.",
    t4_inst: "Put the words in order!",
    t4_w1: "The", t4_w2: "oxygen", t4_w3: "enters", t4_w4: "the", t4_w5: "blood.",
    t4_q: "Which muscle plays the biggest role in breathing?", t4_q_a: "The diaphragm", t4_q_b: "The heart muscle", t4_q_c: "The abdominal muscle", t4_q_d: "The tongue",

    t5_title: "Reproduction and Puberty", t5_text: "During puberty, hormones prepare the body for adulthood and reproduction.",
    t5_b1: "The testes produce sperm cells and testosterone.", t5_b2: "The ovaries produce egg cells and estrogen.", t5_b3: "The fertilized egg develops into a fetus in the uterus.",
    t5_inst: "Where does the embryo (fetus) develop during pregnancy?", t5_gap_sentence2: "The fetus develops in the female {gap} during pregnancy.",
    t5_c51: "uterus", t5_c52: "ovary", t5_c53: "stomach",
    t5_q: "What controls the physical changes during puberty?", t5_q_a: "Hormones", t5_q_b: "Red blood cells", t5_q_c: "Bacteria", t5_q_d: "Joints",
  },
  de: {
    explorer_title: "Jahresrückblick K6",
    t1_title: "Die Gliederfüßer", t1_text: "Gliederfüßer sind die größte Tiergruppe. Sie haben ein Chitin-Außenskelett und Gliedmaßen. Die Hauptgruppen sind Insekten und Spinnentiere.",
    t1_b1: "Insekten: 3 Körperteile, 6 Beine, haben Fühler.", t1_b2: "Spinnentiere: 2 Körperteile, 8 Beine, keine Fühler.", t1_b3: "Beide Gruppen häuten sich, um zu wachsen.",
    t1_inst: "Insekt oder Spinne? Sortiere!",
    t1_bucket_rov: "Insekten", t1_bucket_pok: "Spinnen",
    t1_item_r1: "6 Beine", t1_item_r2: "Hat Fühler", t1_item_p1: "8 Beine", t1_item_p2: "Keine Fühler",
    t1_q: "Woraus besteht das Außenskelett der Gliederfüßer?", t1_q_a: "Aus Chitin", t1_q_b: "Aus Kalk", t1_q_c: "Aus Knorpel", t1_q_d: "Aus Knochen",

    t2_title: "Ökosystem Wald", t2_text: "Der Wald ist eine komplexe Lebensgemeinschaft aus Produzenten, Konsumenten und Zersetzern in einem Nahrungsnetz.",
    t2_b1: "Produzenten: Pflanzen stellen aus Sonnenlicht Nahrung her.", t2_b2: "Konsumenten: Tiere, die Pflanzen oder andere Tiere fressen.", t2_b3: "Zersetzer: Pilze und Bakterien, die totes Material abbauen.",
    t2_inst: "Verbinde das Lebewesen mit seiner Aufgabe!",
    t2_l1: "Pflanzen", t2_r1: "Produzenten (stellen Nahrung her)", t2_l2: "Tiere", t2_r2: "Konsumenten (fressen andere)", t2_l3: "Pilze", t2_r3: "Zersetzer (bauen ab)",
    t2_q: "Was erzeugen die Zersetzer aus toten Pflanzen im Boden?", t2_q_a: "Humus", t2_q_b: "Gestein", t2_q_c: "Plastik", t2_q_d: "Salzwasser",

    t3_title: "Herz und Kreislauf", t3_text: "Das Kreislaufsystem transportiert Blut. Der Motor ist das Herz mit vier Kammern (2 Vorhöfe, 2 Kammern).",
    t3_b1: "Lungenkreislauf: bringt Blut zur Lunge für Sauerstoff.", t3_b2: "Körperkreislauf: bringt sauerstoffreiches Blut zu den Zellen.", t3_b3: "Rote Blutkörperchen transportieren den Sauerstoff.",
    t3_inst: "Was pumpt das Blut aus dem Herzen in Körper und Lunge?", t3_gap_sentence: "Das Blut wird von den {gap} aus dem Herzen gepumpt.",
    t3_c1: "Kammern", t3_c2: "Vorhöfen", t3_c3: "Herzklappen",
    t3_q: "Welche Blutgefäße führen das Blut vom Herzen weg?", t3_q_a: "Arterien (Schlagadern)", t3_q_b: "Venen (Blutadern)", t3_q_c: "Lymphgefäße", t3_q_d: "Luftröhren",

    t4_title: "Das Atmungssystem", t4_text: "Ziel der Atmung ist Sauerstoffaufnahme und CO2-Abgabe. Der Gasaustausch findet in den Lungenbläschen statt.",
    t4_b1: "Luft strömt durch Nase, Kehlkopf und Luftröhre zur Lunge.", t4_b2: "Einatmen wird vom Zwerchfell und Brustmuskeln gesteuert.", t4_b3: "Zellen nutzen Sauerstoff zur Energiegewinnung.",
    t4_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t4_w1: "Der", t4_w2: "Sauerstoff", t4_w3: "gelangt", t4_w4: "ins", t4_w5: "Blut.",
    t4_q: "Welcher Muskel spielt die wichtigste Rolle bei der Atmung?", t4_q_a: "Das Zwerchfell", t4_q_b: "Der Herzmuskel", t4_q_c: "Der Bauchmuskel", t4_q_d: "Die Zunge",

    t5_title: "Fortpflanzung und Pubertät", t5_text: "In der Pubertät bereiten Hormone den Körper auf das Erwachsensein und die Fortpflanzung vor.",
    t5_b1: "Hoden produzieren Spermien und Testosteron.", t5_b2: "Eierstöcke produzieren Eizellen und Östrogen.", t5_b3: "Das befruchtete Ei wächst in der Gebärmutter heran.",
    t5_inst: "Wo entwickelt sich der Fötus während der Schwangerschaft?", t5_gap_sentence2: "Der Fötus entwickelt sich in der weiblichen {gap}.",
    t5_c51: "Gebärmutter", t5_c52: "Eierstock", t5_c53: "Magen",
    t5_q: "Was steuert die körperlichen Veränderungen in der Pubertät?", t5_q_a: "Die Hormone", t5_q_b: "Die roten Blutkörperchen", t5_q_c: "Die Bakterien", t5_q_d: "Die Gelenke",
  },
  ro: {
    explorer_title: "Recapitulare Finală K6",
    t1_title: "Artropodele", t1_text: "Artropodele sunt cel mai mare grup de animale. Au exoschelet de chitină și picioare articulate. Grupele principale sunt insectele și arahnidele.",
    t1_b1: "Insecte: 3 părți ale corpului, 6 picioare, au antene.", t1_b2: "Arahnide: 2 părți ale corpului, 8 picioare, fără antene.", t1_b3: "Ambele grupuri năpârlesc pentru a crește.",
    t1_inst: "Insectă sau Păianjen? Sortează caracteristicile!",
    t1_bucket_rov: "Insecte", t1_bucket_pok: "Păianjeni",
    t1_item_r1: "6 picioare", t1_item_r2: "Au antene", t1_item_p1: "8 picioare", t1_item_p2: "Fără antene",
    t1_q: "Din ce material este format exoscheletul artropodelor?", t1_q_a: "Chitină", t1_q_b: "Calciu", t1_q_c: "Cartilaj", t1_q_d: "Os",

    t2_title: "Ecosistemul Pădurii", t2_text: "Pădurea este o comunitate complexă unde plantele, animalele și descompunătorii formează o rețea trofică strictă.",
    t2_b1: "Producători: plantele verzi fac hrană din lumina soarelui.", t2_b2: "Consumatori: animalele erbivore și carnivore care mănâncă producători sau alte animale.", t2_b3: "Descompunători: ciuperci și bacterii care transformă materia moartă în humus.",
    t2_inst: "Potrivește organismul cu rolul său!",
    t2_l1: "Plante", t2_r1: "Producători (fac hrană)", t2_l2: "Animale", t2_r2: "Consumatori (mănâncă pe alții)", t2_l3: "Ciuperci", t2_r3: "Descompunători (curăță)",
    t2_q: "Ce creează descompunătorii din plantele moarte în sol?", t2_q_a: "Humus", t2_q_b: "Pietre", t2_q_c: "Plastic", t2_q_d: "Apă sărată",

    t3_title: "Inima și Circulația", t3_text: "Sistemul circulator transportă sângele. Motorul său este inima, care are patru camere (două atrii, două ventricule).",
    t3_b1: "Circuitul pulmonar: duce sângele la plămâni pentru oxigen.", t3_b2: "Circuitul sistemic: duce sângele bogat în oxigen la celule.", t3_b3: "Globulele roșii sunt responsabile pentru transportul oxigenului.",
    t3_inst: "Ce pompează sângele din inimă spre corp și plămâni?", t3_gap_sentence: "Sângele este pompat din inimă de către {gap}.",
    t3_c1: "ventricule", t3_c2: "atrii", t3_c3: "valve",
    t3_q: "Care vase de sânge transportă sângele de la inimă spre corp?", t3_q_a: "Arterele", t3_q_b: "Venele", t3_q_c: "Vasele limfatice", t3_q_d: "Traheele",

    t4_title: "Sistemul Respirator", t4_text: "Scopul respirației este preluarea oxigenului și eliminarea dioxidului de carbon. Schimbul de gaze are loc în alveole.",
    t4_b1: "Aerul intră prin cavitatea nazală, laringe și trahee în plămâni.", t4_b2: "Inspirația este condusă de diafragmă și mușchii toracici.", t4_b3: "Celulele folosesc oxigenul pentru a produce energie.",
    t4_inst: "Pune cuvintele în ordine!",
    t4_w1: "Oxigenul", t4_w2: "intră", t4_w3: "în", t4_w4: "sângele", t4_w5: "nostru.",
    t4_q: "Care mușchi are cel mai important rol în respirație?", t4_q_a: "Diafragma", t4_q_b: "Mușchiul cardiac", t4_q_c: "Mușchii abdominali", t4_q_d: "Limba",

    t5_title: "Reproducere și Pubertate", t5_text: "În timpul pubertății, hormonii pregătesc corpul pentru viața de adult și reproducere.",
    t5_b1: "Testiculele produc spermatozoizi și testosteron.", t5_b2: "Ovarele produc ovule și estrogen.", t5_b3: "Ovulul fecundat se dezvoltă într-un făt în uter.",
    t5_inst: "Unde se dezvoltă embrionul (fătul) în timpul sarcinii?", t5_gap_sentence2: "Fătul se dezvoltă în {gap} feminin în timpul sarcinii.",
    t5_c51: "uterul", t5_c52: "ovarul", t5_c53: "stomacul",
    t5_q: "Ce controlează schimbările fizice din timpul pubertății?", t5_q_a: "Hormonii", t5_q_b: "Globulele roșii", t5_q_c: "Bacteriile", t5_q_d: "Articulațiile",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ArthropodGroupsSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "rov", label: "t1_bucket_rov" },
        { id: "pok", label: "t1_bucket_pok" },
      ],
      items: [
        { text: "t1_item_r1", bucketId: "rov" },
        { text: "t1_item_p1", bucketId: "pok" },
        { text: "t1_item_r2", bucketId: "rov" },
        { text: "t1_item_p2", bucketId: "pok" },
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
    svg: (lang) => <ForestLayersSvg lang={lang} />,
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
    svg: (lang) => <HeartSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
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
    svg: (lang) => <LungsSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
    svg: (lang) => <ReproductionSvg lang={lang} />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b3",
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
  icon: "🔬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SystemsExplorer = memo(function SystemsExplorer({
  color = "#334155", // Komoly palaszürke (Slate-700) az év végi vizsgához
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
      grade={6} 
      explorerId="bio_k6_systems_review" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SystemsExplorer;
