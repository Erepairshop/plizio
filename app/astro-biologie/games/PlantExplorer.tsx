"use client";
// PlantExplorer.tsx — Bio Island i4: Növényi szervek (K5)
// Topics: 1) Gyökér 2) Szár 3) Levél 4) Fotoszintézis 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { PlantAnatomySvg, PhotosynthesisSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-10" y="-40" width="20" height="80" fill="#65A30D" rx="4" />
        <path d="M -20,10 L -20,-20 L -25,-15 M -20,-20 L -15,-15" fill="none" stroke="#3F6212" strokeWidth="3" />
        <path d="M 20,-10 L 20,20 L 15,15 M 20,20 L 25,15" fill="none" stroke="#3F6212" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#DCFCE7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="15" fontSize="50" textAnchor="middle">🍃</text>
        <text x="-40" y="-15" fontSize="25" textAnchor="middle">☀️</text>
        <text x="40" y="25" fontSize="20" textAnchor="middle">💧</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌱</text>
        <text x="20" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Növényi Szervek",
    // T1: Gyökér
    t1_title: "A gyökér szerepe",
    t1_text: "A gyökér a növény föld alatti része. Rögzíti a növényt a talajban, és felszívja a vizet, valamint az abban oldott ásványi anyagokat.",
    t1_b1: "Rögzítés: tartja a növényt a széllel szemben.",
    t1_b2: "Felszívás: a gyökérszőrök veszik fel a vizet.",
    t1_b3: "Raktározás: egyes növények (pl. répa) itt tárolják a tápanyagot.",
    t1_inst: "Mit szív fel a gyökér a talajból?",
    t1_gap_sentence: "A gyökér felszívja a {gap} és az ásványi anyagokat.",
    t1_c1: "vizet", t1_c2: "fényt", t1_c3: "levegőt",
    t1_q: "Melyik NEM a gyökér feladata?",
    t1_q_a: "Fotoszintézis", t1_q_b: "Víz felszívása", t1_q_c: "Rögzítés a talajban", t1_q_d: "Tápanyag raktározása",

    // T2: Szár
    t2_title: "A szár feladata",
    t2_text: "A szár köti össze a gyökeret a levelekkel. Szállítócsöveiben áramlik a víz felfelé, és az elkészült tápanyag lefelé.",
    t2_b1: "Tartás: a leveleket a fény felé emeli.",
    t2_b2: "Vízszállítás: a gyökértől a levelekig.",
    t2_b3: "Tápanyagszállítás: a levelektől a többi szervhez.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "szár", t2_w3: "szállítja", t2_w4: "a", t2_w5: "vizet.",
    t2_q: "Mi áramlik a szárban lévő csövekben?",
    t2_q_a: "Víz és tápanyagok", t2_q_b: "Csak levegő", t2_q_c: "Vér", t2_q_d: "Föld",

    // T3: Levél
    t3_title: "A levél, a növény 'konyhája'",
    t3_text: "A levelek laposak és zöldek, hogy minél több napfényt fogjanak fel. Itt készül a növény tápláléka, és itt lélegzik a gázcserenyílásokon át.",
    t3_b1: "Zöld szín: a klorofill (zöld színtest) okozza.",
    t3_b2: "Táplálékkészítés: itt zajlik a fotoszintézis.",
    t3_b3: "Gázcsere: szén-dioxidot vesz fel, oxigént ad le.",
    t3_inst: "Párosítsd a szervet a fő feladatával!",
    t3_l1: "Gyökér", t3_r1: "Víz felszívása",
    t3_l2: "Szár", t3_r2: "Anyagok szállítása",
    t3_l3: "Levél", t3_r3: "Táplálék készítése",
    t3_q: "Milyen anyag adja a levelek zöld színét?",
    t3_q_a: "Klorofill", t3_q_b: "Víz", t3_q_c: "Nektár", t3_q_d: "Cukor",

    // T4: Fotoszintézis
    t4_title: "A csodálatos fotoszintézis",
    t4_text: "A fotoszintézis során a növény napfény, víz és szén-dioxid segítségével cukrot (táplálékot) és oxigént állít elő.",
    t4_b1: "Szükséges: Napfény, víz (H2O), szén-dioxid (CO2).",
    t4_b2: "Eredmény: Szőlőcukor (táplálék) és Oxigén (O2).",
    t4_b3: "E nélkül nem lenne élet a Földön!",
    t4_inst: "Mire van szüksége a növénynek, és mi keletkezik? Válogasd szét!",
    t4_bucket_kell: "Szükséges (bemenet)",
    t4_bucket_lesz: "Keletkezik (kimenet)",
    t4_item_k1: "Napfény", t4_item_k2: "Szén-dioxid",
    t4_item_l1: "Oxigén", t4_item_l2: "Cukor",
    t4_q: "Milyen gázt bocsátanak ki a növények a fotoszintézis során?",
    t4_q_a: "Oxigént", t4_q_b: "Szén-dioxidot", t4_q_c: "Nitrogént", t4_q_d: "Héliumot",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a növények szerveiről és a fotoszintézisről!",
    t5_b1: "Gyökér szív, szár szállít, levél termel.",
    t5_b2: "A fotoszintézishez fény, víz és CO2 kell.",
    t5_b3: "Eredménye: oxigén és cukor.",
    t5_inst: "Milyen gázt termelnek a növények?",
    t5_gap_sentence2: "A növények a fotoszintézis során {gap} termelnek.",
    t5_c51: "oxigént", t5_c52: "szén-dioxidot", t5_c53: "vizet",
    t5_q: "Melyik állítás IGAZ a szárra?",
    t5_q_a: "Összeköti a gyökeret a levelekkel.", t5_q_b: "Itt szívódik fel a víz a talajból.", t5_q_c: "Itt történik a megporzás.", t5_q_d: "Rögzíti a növényt a földben.",
  },
  en: {
    explorer_title: "Plant Organs",
    t1_title: "Role of the Root", t1_text: "The root is the underground part of the plant. It anchors the plant and absorbs water and minerals.",
    t1_b1: "Anchorage: holds the plant against the wind.", t1_b2: "Absorption: root hairs take up water.", t1_b3: "Storage: some plants store food here (e.g., carrots).",
    t1_inst: "What does the root absorb from the soil?", t1_gap_sentence: "The root absorbs {gap} and minerals.",
    t1_c1: "water", t1_c2: "light", t1_c3: "air",
    t1_q: "Which of these is NOT a function of the root?", t1_q_a: "Photosynthesis", t1_q_b: "Absorbing water", t1_q_c: "Anchoring in the soil", t1_q_d: "Storing nutrients",

    t2_title: "Function of the Stem", t2_text: "The stem connects the roots to the leaves. Its tubes transport water upwards and food downwards.",
    t2_b1: "Support: lifts leaves toward the light.", t2_b2: "Water transport: from roots to leaves.", t2_b3: "Nutrient transport: from leaves to the rest of the plant.",
    t2_inst: "Put the words in order!",
    t2_w1: "The", t2_w2: "stem", t2_w3: "transports", t2_w4: "the", t2_w5: "water.",
    t2_q: "What flows inside the tubes of the stem?", t2_q_a: "Water and nutrients", t2_q_b: "Only air", t2_q_c: "Blood", t2_q_d: "Soil",

    t3_title: "The Leaf: The Plant's Kitchen", t3_text: "Leaves are flat and green to catch sunlight. They make the plant's food and breathe through tiny pores.",
    t3_b1: "Green color: caused by chlorophyll.", t3_b2: "Food production: photosynthesis happens here.", t3_b3: "Gas exchange: takes in CO2, releases O2.",
    t3_inst: "Match the organ with its main function!",
    t3_l1: "Root", t3_r1: "Absorbing water", t3_l2: "Stem", t3_r2: "Transporting materials", t3_l3: "Leaf", t3_r3: "Making food",
    t3_q: "What substance gives leaves their green color?", t3_q_a: "Chlorophyll", t3_q_b: "Water", t3_q_c: "Nectar", t3_q_d: "Sugar",

    t4_title: "Amazing Photosynthesis", t4_text: "Through photosynthesis, a plant uses sunlight, water, and carbon dioxide to create sugar (food) and oxygen.",
    t4_b1: "Needs: Sunlight, water (H2O), carbon dioxide (CO2).", t4_b2: "Result: Glucose (sugar) and Oxygen (O2).", t4_b3: "Life on Earth depends on this process!",
    t4_inst: "What does the plant need, and what does it produce? Sort them!",
    t4_bucket_kell: "Needed (Input)", t4_bucket_lesz: "Produced (Output)",
    t4_item_k1: "Sunlight", t4_item_k2: "Carbon dioxide", t4_item_l1: "Oxygen", t4_item_l2: "Sugar",
    t4_q: "What gas do plants release during photosynthesis?", t4_q_a: "Oxygen", t4_q_b: "Carbon dioxide", t4_q_c: "Nitrogen", t4_q_d: "Helium",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about plant organs and photosynthesis!",
    t5_b1: "Root absorbs, stem transports, leaf produces.", t5_b2: "Photosynthesis needs light, water, CO2.", t5_b3: "Result: oxygen and sugar.",
    t5_inst: "What gas do plants produce?", t5_gap_sentence2: "During photosynthesis, plants produce {gap}.",
    t5_c51: "oxygen", t5_c52: "carbon dioxide", t5_c53: "water",
    t5_q: "Which statement is TRUE about the stem?", t5_q_a: "It connects the roots to the leaves.", t5_q_b: "It absorbs water from the soil.", t5_q_c: "Pollination happens here.", t5_q_d: "It anchors the plant in the ground.",
  },
  de: {
    explorer_title: "Pflanzenorgane",
    t1_title: "Rolle der Wurzel", t1_text: "Die Wurzel ist der unterirdische Teil der Pflanze. Sie verankert die Pflanze und nimmt Wasser und Mineralien auf.",
    t1_b1: "Verankerung: hält die Pflanze im Boden.", t1_b2: "Aufnahme: Wurzelhaare saugen Wasser auf.", t1_b3: "Speicher: manche Pflanzen speichern hier Nahrung (z.B. Karotte).",
    t1_inst: "Was nimmt die Wurzel aus dem Boden auf?", t1_gap_sentence: "Die Wurzel nimmt {gap} und Mineralien auf.",
    t1_c1: "Wasser", t1_c2: "Licht", t1_c3: "Luft",
    t1_q: "Was ist KEINE Aufgabe der Wurzel?", t1_q_a: "Fotosynthese", t1_q_b: "Wasseraufnahme", t1_q_c: "Verankerung im Boden", t1_q_d: "Nährstoffspeicherung",

    t2_title: "Aufgabe der Sprossachse", t2_text: "Die Sprossachse (Stängel) verbindet Wurzeln und Blätter. In ihren Leitbündeln fließt Wasser nach oben und Nahrung nach unten.",
    t2_b1: "Stütze: hebt die Blätter zum Licht.", t2_b2: "Wassertransport: von der Wurzel zu den Blättern.", t2_b3: "Nährstofftransport: von den Blättern zum Rest der Pflanze.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Der", t2_w2: "Stängel", t2_w3: "transportiert", t2_w4: "das", t2_w5: "Wasser.",
    t2_q: "Was fließt in den Röhren der Sprossachse?", t2_q_a: "Wasser und Nährstoffe", t2_q_b: "Nur Luft", t2_q_c: "Blut", t2_q_d: "Erde",

    t3_title: "Das Blatt: Die Küche der Pflanze", t3_text: "Blätter sind flach und grün, um Sonnenlicht einzufangen. Hier entsteht die Nahrung, und hier atmet die Pflanze durch Spaltöffnungen.",
    t3_b1: "Grüne Farbe: durch Chlorophyll (Blattgrün).", t3_b2: "Nahrungsproduktion: hier findet die Fotosynthese statt.", t3_b3: "Gasaustausch: nimmt CO2 auf, gibt O2 ab.",
    t3_inst: "Verbinde das Organ mit seiner Hauptaufgabe!",
    t3_l1: "Wurzel", t3_r1: "Wasser aufnehmen", t3_l2: "Sprossachse", t3_r2: "Stoffe transportieren", t3_l3: "Blatt", t3_r3: "Nahrung herstellen",
    t3_q: "Welcher Stoff verleiht den Blättern ihre grüne Farbe?", t3_q_a: "Chlorophyll", t3_q_b: "Wasser", t3_q_c: "Nektar", t3_q_d: "Zucker",

    t4_title: "Die Fotosynthese", t4_text: "Bei der Fotosynthese erzeugt die Pflanze mit Hilfe von Sonnenlicht, Wasser und Kohlendioxid Zucker (Nahrung) und Sauerstoff.",
    t4_b1: "Benötigt: Sonnenlicht, Wasser (H2O), Kohlendioxid (CO2).", t4_b2: "Ergebnis: Traubenzucker und Sauerstoff (O2).", t4_b3: "Ohne diesen Prozess gäbe es kein Leben auf der Erde!",
    t4_inst: "Was braucht die Pflanze, und was entsteht? Sortiere!",
    t4_bucket_kell: "Wird benötigt", t4_bucket_lesz: "Entsteht",
    t4_item_k1: "Sonnenlicht", t4_item_k2: "Kohlendioxid", t4_item_l1: "Sauerstoff", t4_item_l2: "Zucker",
    t4_q: "Welches Gas geben Pflanzen bei der Fotosynthese ab?", t4_q_a: "Sauerstoff", t4_q_b: "Kohlendioxid", t4_q_c: "Stickstoff", t4_q_d: "Helium",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Pflanzenorgane und Fotosynthese!",
    t5_b1: "Wurzel saugt, Stängel transportiert, Blatt produziert.", t5_b2: "Fotosynthese braucht Licht, Wasser, CO2.", t5_b3: "Ergebnis: Sauerstoff und Zucker.",
    t5_inst: "Welches Gas produzieren Pflanzen?", t5_gap_sentence2: "Pflanzen produzieren bei der Fotosynthese {gap}.",
    t5_c51: "Sauerstoff", t5_c52: "Kohlendioxid", t5_c53: "Wasser",
    t5_q: "Welche Aussage über die Sprossachse ist WAHR?", t5_q_a: "Sie verbindet die Wurzel mit den Blättern.", t5_q_b: "Sie nimmt Wasser aus dem Boden auf.", t5_q_c: "Hier findet die Bestäubung statt.", t5_q_d: "Sie verankert die Pflanze im Boden.",
  },
  ro: {
    explorer_title: "Organele Plantelor",
    t1_title: "Rolul Rădăcinii", t1_text: "Rădăcina este partea subterană a plantei. Fixează planta și absoarbe apa și mineralele.",
    t1_b1: "Fixare: susține planta împotriva vântului.", t1_b2: "Absorbție: perii radiculari preiau apa.", t1_b3: "Depozitare: unele plante stochează hrana aici (ex. morcovul).",
    t1_inst: "Ce absoarbe rădăcina din sol?", t1_gap_sentence: "Rădăcina absoarbe {gap} și minerale.",
    t1_c1: "apă", t1_c2: "lumină", t1_c3: "aer",
    t1_q: "Care dintre acestea NU este o funcție a rădăcinii?", t1_q_a: "Fotosinteza", t1_q_b: "Absorbția apei", t1_q_c: "Fixarea în sol", t1_q_d: "Depozitarea nutrienților",

    t2_title: "Funcția Tulpinii", t2_text: "Tulpina conectează rădăcina cu frunzele. Vasele ei transportă apa în sus și hrana în jos.",
    t2_b1: "Susținere: ridică frunzele spre lumină.", t2_b2: "Transportul apei: de la rădăcini la frunze.", t2_b3: "Transportul nutrienților: de la frunze la restul plantei.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Tulpina", t2_w2: "transportă", t2_w3: "apa", t2_w4: "către", t2_w5: "frunze.",
    t2_q: "Ce circulă prin vasele tulpinii?", t2_q_a: "Apă și nutrienți", t2_q_b: "Doar aer", t2_q_c: "Sânge", t2_q_d: "Pământ",

    t3_title: "Frunza: Bucătăria Plantei", t3_text: "Frunzele sunt plate și verzi pentru a prinde lumina soarelui. Aici se produce hrana și tot aici planta respiră prin pori mici.",
    t3_b1: "Culoare verde: cauzată de clorofilă.", t3_b2: "Producerea hranei: aici are loc fotosinteza.", t3_b3: "Schimb de gaze: preia CO2, eliberează O2.",
    t3_inst: "Potrivește organul cu funcția sa principală!",
    t3_l1: "Rădăcină", t3_r1: "Absoarbe apa", t3_l2: "Tulpină", t3_r2: "Transportă substanțe", t3_l3: "Frunză", t3_r3: "Produce hrana",
    t3_q: "Ce substanță dă frunzelor culoarea verde?", t3_q_a: "Clorofila", t3_q_b: "Apa", t3_q_c: "Nectarul", t3_q_d: "Zahărul",

    t4_title: "Uimitoarea Fotosinteză", t4_text: "Prin fotosinteză, planta folosește lumina soarelui, apa și dioxidul de carbon pentru a crea zahăr (hrană) și oxigen.",
    t4_b1: "Necesită: Lumină solară, apă (H2O), dioxid de carbon (CO2).", t4_b2: "Rezultat: Zahăr (glucoză) și Oxigen (O2).", t4_b3: "Fără acest proces nu ar exista viață pe Pământ!",
    t4_inst: "De ce are nevoie planta și ce produce? Sortează-le!",
    t4_bucket_kell: "Necesar (Intrare)", t4_bucket_lesz: "Produs (Ieșire)",
    t4_item_k1: "Lumină solară", t4_item_k2: "Dioxid de carbon", t4_item_l1: "Oxigen", t4_item_l2: "Zahăr",
    t4_q: "Ce gaz eliberează plantele în timpul fotosintezei?", t4_q_a: "Oxigen", t4_q_b: "Dioxid de carbon", t4_q_c: "Azot", t4_q_d: "Heliu",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre organele plantelor și fotosinteză!",
    t5_b1: "Rădăcina absoarbe, tulpina transportă, frunza produce.", t5_b2: "Fotosinteza necesită lumină, apă, CO2.", t5_b3: "Rezultat: oxigen și zahăr.",
    t5_inst: "Ce gaz produc plantele?", t5_gap_sentence2: "În timpul fotosintezei, plantele produc {gap}.",
    t5_c51: "oxigen", t5_c52: "dioxid de carbon", t5_c53: "apă",
    t5_q: "Care afirmație este ADEVĂRATĂ despre tulpină?", t5_q_a: "Conectează rădăcinile cu frunzele.", t5_q_b: "Absoarbe apa din sol.", t5_q_c: "Aici are loc polenizarea.", t5_q_d: "Fixează planta în pământ.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <PlantAnatomySvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_b2",
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
      instruction: "t2_inst",
      hint1: "t2_b2",
      hint2: "t2_b1",
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
      hint1: "t3_b2",
      hint2: "t3_b1",
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
    svg: (lang) => <PhotosynthesisSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "kell", label: "t4_bucket_kell" },
        { id: "lesz", label: "t4_bucket_lesz" },
      ],
      items: [
        { text: "t4_item_k1", bucketId: "kell" },
        { text: "t4_item_l1", bucketId: "lesz" },
        { text: "t4_item_k2", bucketId: "kell" },
        { text: "t4_item_l2", bucketId: "lesz" },
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
  icon: "🌱",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PlantExplorer = memo(function PlantExplorer({
  color = "#16A34A", // Élénkzöld a növények miatt
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
      explorerId="bio_k5_plants" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PlantExplorer;
