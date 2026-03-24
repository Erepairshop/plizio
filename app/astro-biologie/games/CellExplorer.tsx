"use client";
// CellExplorer.tsx — Bio Island i1: Sejtek & Mikroszkóp (K7)
// Topics: 1) Sejt felépítése 2) Sejtszervecskék 3) Prokarióta vs Eukarióta 4) Mikroszkóp 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { CellStructureSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">🦠</text>
        <path d="M -10,0 L 10,0" stroke="#15803D" strokeWidth="3" strokeDasharray="4 2" />
        <text x="40" y="0" fontSize="40" textAnchor="middle">🌿</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-15" r="25" fill="none" stroke="#64748B" strokeWidth="4" />
        <line x1="0" y1="10" x2="0" y2="40" stroke="#64748B" strokeWidth="6" />
        <rect x="-20" y="40" width="40" height="8" rx="2" fill="#64748B" />
        <text x="0" y="-10" fontSize="20" textAnchor="middle">🔬</text>
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
        <text x="0" y="15" fontSize="40" textAnchor="middle">🔬</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Sejtek és Mikroszkóp",
    // T1: Sejtstruktúra (Label-diagram)
    t1_title: "Az eukarióta sejt",
    t1_text: "Minden összetettebb élőlény sejtje eukarióta. Legfőbb jellemzője a körülhatárolt sejtmag, amely az örökítőanyagot tárolja.",
    t1_b1: "Sejtmag: az irányító központ (DNS).",
    t1_b2: "Sejthártya: vékony, rugalmas védőburok.",
    t1_b3: "Mitokondrium: energiát termel a sejtnek.",
    t1_inst: "Kattints a pontokra és válaszd ki a sejt megfelelő részét!",
    t1_area_nucleus: "Sejtmag",
    t1_area_membrane: "Sejthártya",
    t1_area_mito: "Mitokondrium",
    t1_area_cyto: "Sejtplazma",
    t1_q: "Melyik rész irányítja a sejt életfolyamatait?",
    t1_q_a: "Sejtmag", t1_q_b: "Vakuólum", t1_q_c: "Sejtfal", t1_q_d: "Csillók",

    // T2: Sejtszervecskék
    t2_title: "Sejtszervecskék feladata",
    t2_text: "A sejt belsejében különböző feladatokra szakosodott egységek, sejtszervecskék találhatók.",
    t2_b1: "Riboszómák: a fehérjék 'gyárai'.",
    t2_b2: "Zöld színtest: a fotoszintézis helyszíne (csak növényekben).",
    t2_b3: "Vakuólum: tápanyagok és víz tárolása.",
    t2_inst: "Párosítsd a szervecskét a funkciójával!",
    t2_l1: "Mitokondrium", t2_r1: "Energiatermelés",
    t2_l2: "Riboszóma", t2_r2: "Fehérje előállítás",
    t2_l3: "Zöld színtest", t2_r3: "Cukorgyártás fényből",
    t2_q: "Melyik szervecske felelős a sejt energiájáért?",
    t2_q_a: "Mitokondrium", t2_q_b: "Sejtmag", t2_q_c: "Riboszóma", t2_q_d: "Vakuólum",

    // T3: Prokarióta vs Eukarióta
    t3_title: "Egyszerű és összetett sejtek",
    t3_text: "A prokarióták (pl. baktériumok) ősi, egyszerűbb felépítésű sejtek, míg az eukarióták bonyolult belső hálózattal rendelkeznek.",
    t3_b1: "Prokarióta: nincs sejtmag, a DNS a plazmában szabadon van.",
    t3_b2: "Eukarióta: van sejtmag és membránnal határolt szervecskék.",
    t3_b3: "A baktériumok mindig prokarióták.",
    t3_inst: "Miben tér el a baktérium sejtje a miénktől?",
    t3_gap_sentence: "A prokarióta sejteknek nincs körülhatárolt {gap}.",
    t3_c1: "sejtmagjuk", t3_c2: "plazmájuk", t3_c3: "DNS-ük",
    t3_q: "Melyik élőlény eukarióta?",
    t3_q_a: "Gomba", t3_q_b: "Baktérium", t3_q_c: "Kékmoszat", t3_q_d: "Vírus",

    // T4: Mikroszkóp
    t4_title: "A mikroszkóp használata",
    t4_text: "A fénymikroszkóp lencserendszere segít láthatóvá tenni a sejteket. A nagyítás az objektív és az okulár értékétől függ.",
    t4_b1: "Okulár: a szemhez közeli lencse.",
    t4_b2: "Objektív: a tárgyhoz közeli lencse.",
    t4_b3: "Tárgyasztal: ide kerül a vizsgált metszet.",
    t4_inst: "Tedd sorba a fény útját a mikroszkópban (alulról felfelé)!",
    t4_w1: "Fényforrás", t4_w2: "Metszet", t4_w3: "Objektív", t4_w4: "Tubus", t4_w5: "Okulár",
    t4_q: "Mit teszünk a tárgyasztalra a vizsgálathoz?",
    t4_q_a: "Metszetet (preparátumot)", t4_q_b: "Tükröt", t4_q_c: "Szemüveget", t4_q_d: "Lámpát",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Ellenőrizd a tudásod a sejttan alapjairól!",
    t5_b1: "Eukarióta = van sejtmag.",
    t5_b2: "A növényi sejtnek van sejtfala és zöld színtestje.",
    t5_b3: "A mikroszkóp a láthatatlan világ kapuja.",
    t5_inst: "Hogyan nevezzük az energiatermelő szervet?",
    t5_gap_sentence2: "A sejt 'erőműve' a {gap}.",
    t5_c51: "mitokondrium", t5_c52: "riboszóma", t5_c53: "sejtmag",
    t5_q: "Melyik állítás IGAZ az eukarióta sejtre?",
    t5_q_a: "Rendelkezik körülhatárolt sejtmaggal.", t5_q_b: "Nincs benne DNS.", t5_q_c: "Minden esetben baktérium.", t5_q_d: "Csak élettelen dolgokban van.",
  },
  en: {
    explorer_title: "Cells and Microscope",
    t1_title: "Eukaryotic Cell", t1_text: "Every complex organism is made of eukaryotic cells, characterized by a nucleus containing DNA.",
    t1_b1: "Nucleus: the control center (DNA).", t1_b2: "Membrane: thin, flexible protective layer.", t1_b3: "Mitochondria: produces energy for the cell.",
    t1_inst: "Click the dots and label the parts of the cell!",
    t1_area_nucleus: "Nucleus", t1_area_membrane: "Cell membrane", t1_area_mito: "Mitochondria", t1_area_cyto: "Cytoplasm",
    t1_q: "Which part controls cell activities?", t1_q_a: "Nucleus", t1_q_b: "Vacuole", t1_q_c: "Cell wall", t1_q_d: "Cilia",

    t2_title: "Organelle Functions", t2_text: "Inside the cell, specialized units called organelles perform daily tasks.",
    t2_b1: "Ribosomes: protein 'factories'.", t2_b2: "Chloroplasts: site of photosynthesis (plants only).", t2_b3: "Vacuole: storage for nutrients and water.",
    t2_inst: "Match the organelle with its function!",
    t2_l1: "Mitochondria", t2_r1: "Energy production", t2_l2: "Ribosome", t2_r2: "Protein synthesis", t2_l3: "Chloroplast", t2_r3: "Sugar from light",
    t2_q: "Which organelle is responsible for cell energy?", t2_q_a: "Mitochondria", t2_q_b: "Nucleus", t2_q_c: "Ribosome", t2_q_d: "Vacuole",

    t3_title: "Prokaryote vs Eukaryote", t3_text: "Prokaryotes (like bacteria) are ancient and simple, while eukaryotes have complex internal networks.",
    t3_b1: "Prokaryote: no nucleus, DNA is free in cytoplasm.", t3_b2: "Eukaryote: has a nucleus and membrane-bound organelles.", t3_b3: "Bacteria are always prokaryotes.",
    t3_inst: "How does a bacterium differ from our cells?", t3_gap_sentence: "Prokaryotic cells have no defined {gap}.",
    t3_c1: "nucleus", t3_c2: "plasma", t3_c3: "DNA",
    t3_q: "Which organism is eukaryotic?", t3_q_a: "Fungus", t3_q_b: "Bacteria", t3_q_c: "Cyanobacteria", t3_q_d: "Virus",

    t4_title: "Using a Microscope", t4_text: "The lens system of a light microscope makes cells visible. Magnification depends on the objective and ocular lenses.",
    t4_b1: "Ocular: lens closest to the eye.", t4_b2: "Objective: lens closest to the object.", t4_b3: "Stage: where the slide is placed.",
    t4_inst: "Put the path of light in order (bottom to top)!",
    t4_w1: "Light source", t4_w2: "Slide", t4_w3: "Objective", t4_w4: "Tube", t4_w5: "Ocular",
    t4_q: "What do we place on the stage for observation?", t4_q_a: "A slide", t4_q_b: "A mirror", t4_q_c: "Glasses", t4_q_d: "A lamp",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge of cell biology basics!",
    t5_b1: "Eukaryote = has nucleus.", t5_b2: "Plant cell = has cell wall and chloroplast.", t5_b3: "Microscope = door to the invisible world.",
    t5_inst: "What do we call the energy-producing organelle?", t5_gap_sentence2: "The cell's 'power plant' is the {gap}.",
    t5_c51: "mitochondria", t5_c52: "ribosome", t5_c53: "nucleus",
    t5_q: "Which statement is TRUE about eukaryotic cells?", t5_q_a: "They have a defined nucleus.", t5_q_b: "They have no DNA.", t5_q_c: "They are always bacteria.", t5_q_d: "They only exist in non-living things.",
  },
  de: {
    explorer_title: "Zellen und Mikroskop",
    t1_title: "Die eukaryotische Zelle", t1_text: "Alle komplexen Organismen bestehen aus eukaryotischen Zellen, die einen Zellkern mit DNA besitzen.",
    t1_b1: "Zellkern: Steuerzentrum (DNA).", t1_b2: "Zellmembran: dünne, flexible Schutzhülle.", t1_b3: "Mitochondrium: erzeugt Energie für die Zelle.",
    t1_inst: "Klicke auf die Punkte und benenne die Zellteile!",
    t1_area_nucleus: "Zellkern", t1_area_membrane: "Zellmembran", t1_area_mito: "Mitochondrium", t1_area_cyto: "Zellplasma",
    t1_q: "Welcher Teil steuert die Vorgänge in der Zelle?", t1_q_a: "Zellkern", t1_q_b: "Vakuole", t1_q_c: "Zellwand", t1_q_d: "Geißeln",

    t2_title: "Aufgaben der Organellen", t2_text: "Im Inneren der Zelle erledigen spezialisierte Organellen die täglichen Aufgaben.",
    t2_b1: "Ribosomen: Fabriken für Proteine.", t2_b2: "Chloroplast: Ort der Fotosynthese (nur Pflanzen).", t2_b3: "Vakuole: Speicher für Nährstoffe und Wasser.",
    t2_inst: "Verbinde das Organell mit seiner Funktion!",
    t2_l1: "Mitochondrium", t2_r1: "Energiegewinnung", t2_l2: "Ribosom", t2_r2: "Proteinbildung", t2_l3: "Chloroplast", t2_r3: "Zucker aus Licht",
    t2_q: "Welches Organell liefert der Zelle Energie?", t2_q_a: "Mitochondrium", t2_q_b: "Zellkern", t2_q_c: "Ribosom", t2_q_d: "Vakuole",

    t3_title: "Prokaryot vs Eukaryot", t3_text: "Prokaryoten (Bakterien) sind einfach aufgebaut, während Eukaryoten komplexe Strukturen besitzen.",
    t3_b1: "Prokaryot: kein Zellkern, DNA liegt frei im Plasma.", t3_b2: "Eukaryot: besitzt Zellkern und Organellen.", t3_b3: "Bakterien sind immer Prokaryoten.",
    t3_inst: "Was unterscheidet Bakterien von unseren Zellen?", t3_gap_sentence: "Prokaryotische Zellen haben keinen echten {gap}.",
    t3_c1: "Zellkern", t3_c2: "Zellsaft", t3_c3: "Farbstoff",
    t3_q: "Welches Lebewesen ist ein Eukaryot?", t3_q_a: "Pilz", t3_q_b: "Bakterium", t3_q_c: "Blaualge", t3_q_d: "Virus",

    t4_title: "Das Mikroskop", t4_text: "Das Mikroskop macht Zellen sichtbar. Die Vergrößerung wird durch Objektiv und Okular bestimmt.",
    t4_b1: "Okular: Linse am Auge.", t4_b2: "Objektiv: Linse am Objekt.", t4_b3: "Objekttisch: Platz für das Präparat.",
    t4_inst: "Bringe den Lichtweg in die richtige Reihenfolge!",
    t4_w1: "Lichtquelle", t4_w2: "Präparat", t4_w3: "Objektiv", t4_w4: "Tubus", t4_w5: "Okular",
    t4_q: "Was legen wir zur Untersuchung auf den Objekttisch?", t4_q_a: "Präparat", t4_q_b: "Spiegel", t4_q_c: "Brille", t4_q_d: "Lampe",

    t5_title: "Zusammenfassung", t5_text: "Teste dein Wissen über die Grundlagen der Zellbiologie!",
    t5_b1: "Eukaryot = mit Zellkern.", t5_b2: "Pflanzenzelle = mit Zellwand und Chloroplast.", t5_b3: "Mikroskop = Tor zur unsichtbaren Welt.",
    t5_inst: "Wie nennt man das Energiekraftwerk der Zelle?", t5_gap_sentence2: "Das Kraftwerk der Zelle ist das {gap}.",
    t5_c51: "Mitochondrium", t5_c52: "Ribosom", t5_c53: "Zellkern",
    t5_q: "Was trifft auf eukaryotische Zellen zu?", t5_q_a: "Sie haben einen abgegrenzten Zellkern.", t5_q_b: "Sie haben keine DNA.", t5_q_c: "Es sind immer Bakterien.", t5_q_d: "Sie sind unbelebte Materie.",
  },
  ro: {
    explorer_title: "Celule și Microscop",
    t1_title: "Celula eucariotă", t1_text: "Toate organismele complexe sunt formate din celule eucariote, caracterizate printr-un nucleu cu ADN.",
    t1_b1: "Nucleu: centrul de control (ADN).", t1_b2: "Membrană: înveliș subțire și elastic.", t1_b3: "Mitocondrie: produce energie pentru celulă.",
    t1_inst: "Apasă pe puncte și numește părțile celulei!",
    t1_area_nucleus: "Nucleu", t1_area_membrane: "Membrană", t1_area_mito: "Mitocondrie", t1_area_cyto: "Citoplasmă",
    t1_q: "Care parte coordonează viața celulei?", t1_q_a: "Nucleul", t1_q_b: "Vacuola", t1_q_c: "Peretele celular", t1_q_d: "Cilii",

    t2_title: "Funcțiile organitelor", t2_text: "În interiorul celulei există unități specializate numite organite.",
    t2_b1: "Ribozomi: 'fabricile' de proteine.", t2_b2: "Cloroplast: locul fotosintezei (doar la plante).", t2_b3: "Vacuolă: depozit de nutrienți și apă.",
    t2_inst: "Potrivește organitul cu funcția sa!",
    t2_l1: "Mitocondrie", t2_r1: "Producerea energiei", t2_l2: "Ribozom", t2_r2: "Sinteza proteinelor", t2_l3: "Cloroplast", t2_r3: "Zahăr din lumină",
    t2_q: "Care organit este responsabil de energia celulei?", t2_q_a: "Mitocondria", t2_q_b: "Nucleul", t2_q_c: "Ribozomul", t2_q_d: "Vacuola",

    t3_title: "Procariote vs Eucariote", t3_text: "Procariotele (ex: bacterii) sunt simple, în timp ce eucariotele au o rețea internă complexă.",
    t3_b1: "Procariot: fără nucleu, ADN-ul este liber în citoplasmă.", t3_b2: "Eucariot: are nucleu și organite delimitate de membrane.", t3_b3: "Bacteriile sunt întotdeauna procariote.",
    t3_inst: "Prin ce diferă bacteria de celulele noastre?", t3_gap_sentence: "Celulele procariote nu au un {gap} delimitat.",
    t3_c1: "nucleu", t3_c2: "plasmă", t3_c3: "ADN",
    t3_q: "Care organism este eucariot?", t3_q_a: "Ciuperca", t3_q_b: "Bacteria", t3_q_c: "Alga albastră", t3_q_d: "Virusul",

    t4_title: "Utilizarea microscopului", t4_text: "Microscopul optic face celulele vizibile. Mărirea depinde de ocular și obiectiv.",
    t4_b1: "Ocular: lentila apropiată de ochi.", t4_b2: "Obiectiv: lentila apropiată de obiect.", t4_b3: "Măsuță: locul unde se pune preparatul.",
    t4_inst: "Pune în ordine drumul luminii (de jos în sus)!",
    t4_w1: "Sursă lumină", t4_w2: "Preparat", t4_w3: "Obiectiv", t4_w4: "Tub", t4_w5: "Ocular",
    t4_q: "Ce punem pe măsuța microscopului?", t4_q_a: "Preparatul", t4_q_b: "Oglinda", t4_q_c: "Ochelarii", t4_q_d: "Lampa",

    t5_title: "Recapitulare", t5_text: "Testează-ți cunoștințele despre bazele citologiei!",
    t5_b1: "Eucariot = cu nucleu.", t5_b2: "Celulă vegetală = cu perete celular și cloroplast.", t5_b3: "Microscop = ușa către lumea invizibilă.",
    t5_inst: "Cum numim centrala energetică a celulei?", t5_gap_sentence2: "Centrala energetică a celulei este {gap}.",
    t5_c51: "mitocondria", t5_c52: "ribozomul", t5_c53: "nucleul",
    t5_q: "Ce afirmație este ADEVĂRATĂ despre celulele eucariote?", t5_q_a: "Au un nucleu bine definit.", t5_q_b: "Nu au ADN.", t5_q_c: "Sunt întotdeauna bacterii.", t5_q_d: "Sunt materie nevie.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <CellStructureSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "nucleus",  x: 50, y: 40, label: "t1_area_nucleus" },
        { id: "membrane", x: 15, y: 55, label: "t1_area_membrane" },
        { id: "mito",     x: 75, y: 65, label: "t1_area_mito" },
        { id: "cyto",     x: 40, y: 20, label: "t1_area_cyto" },
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
    svg: (lang) => <CellStructureSvg lang={lang} />,
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
  icon: "🔬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CellExplorer = memo(function CellExplorer({
  color = "#10B981", // Emerald-500 a biológiai sejtekhez
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
      grade={7} 
      explorerId="bio_k7_cells" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default CellExplorer;
