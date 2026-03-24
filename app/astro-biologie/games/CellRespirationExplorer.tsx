"use client";
// CellRespirationExplorer.tsx — Bio Island i4: Sejt-légzés (K7)
// Topics: 1) Mitokondrium 2) Glikolízis 3) Biológiai oxidáció 4) Az ATP 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { MitochondriaSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-60" y="-10" width="40" height="20" rx="4" fill="#F59E0B" />
        <path d="M -15,0 L 15,0" stroke="#64748B" strokeWidth="3" markerEnd="url(#arrow)" />
        <rect x="20" y="-20" width="25" height="15" rx="2" fill="#EF4444" />
        <rect x="20" y="5" width="25" height="15" rx="2" fill="#EF4444" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-30" y="-40" width="60" height="80" rx="10" fill="#FDE047" stroke="#CA8A04" strokeWidth="4" />
        <rect x="-20" y="-30" width="40" height="15" fill="#16A34A" />
        <rect x="-20" y="-10" width="40" height="15" fill="#16A34A" />
        <rect x="-20" y="10" width="40" height="15" fill="#16A34A" />
        <text x="0" y="60" fontSize="20" fontWeight="bold" fill="#CA8A04" textAnchor="middle">ATP</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌬️</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">⚡</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Sejt-légzés és Energia",
    // T1: Mitokondrium (Label-diagram)
    t1_title: "A sejt erőműve",
    t1_text: "A sejtlégzés a mitokondriumban történik. Ez a szervecske alakítja át a tápanyagokat a sejt számára használható energiává. Különleges, redőzött belső membránja van.",
    t1_b1: "Külső membrán: sima felszínű védőréteg.",
    t1_b2: "Belső membrán: erősen redőzött, hogy nagyobb felületen folyhasson a munka.",
    t1_b3: "Mátrix: a belső alapállomány, ahol fontos kémiai folyamatok zajlanak.",
    t1_inst: "Címkézd fel a mitokondrium részeit!",
    t1_area_outer: "Külső membrán",
    t1_area_inner: "Belső membrán",
    t1_area_matrix: "Mátrix (alapállomány)",
    t1_area_cristae: "Taraj (redő)",
    t1_q: "Hogy hívjuk a sejt azon részét, ahol az energiatermelés zajlik?",
    t1_q_a: "Mitokondrium", t1_q_b: "Zöld színtest", t1_q_c: "Sejtmag", t1_q_d: "Riboszóma",

    // T2: Glikolízis
    t2_title: "A lebontás kezdete",
    t2_text: "Mielőtt a tápanyag belépne a mitokondriumba, a sejtplazmában megkezdődik a lebontása. Ezt glikolízisnek (cukorbontásnak) nevezzük.",
    t2_b1: "A szőlőcukor két kisebb darabra törik.",
    t2_b2: "Ehhez a szakaszhoz még nem kell oxigén.",
    t2_b3: "Kevés energia szabadul fel.",
    t2_inst: "Hol történik a glikolízis?",
    t2_gap_sentence: "A glikolízis folyamata a {gap} zajlik.",
    t2_c1: "sejtplazmában", t2_c2: "mitokondriumban", t2_c3: "sejtmagban",
    t2_q: "Szükséges oxigén a glikolízis szakaszához?",
    t2_q_a: "Nem, ez egy anaerob folyamat.", t2_q_b: "Igen, oxigén nélkül megáll.", t2_q_c: "Csak növényeknél kell.", t2_q_d: "Csak éjszaka kell.",

    // T3: Biológiai oxidáció
    t3_title: "Biológiai oxidáció",
    t3_text: "A mitokondriumban a tápanyagmaradványok oxigén segítségével teljesen lebomlanak vízre és szén-dioxidra. Ez adja a legtöbb energiát.",
    t3_b1: "Bemenet: tápanyagdarabok és Oxigén (O2).",
    t3_b2: "Kimenet: Szén-dioxid (CO2), Víz (H2O) és sok energia.",
    t3_b3: "Ez a folyamat a fotoszintézis fordítottja.",
    t3_inst: "Párosítsd a sejtlégzés bemeneteit és kimeneteit!",
    t3_l1: "Szükséges hozzá", t3_r1: "Cukor és Oxigén",
    t3_l2: "Keletkezik", t3_r2: "CO2, Víz és Energia",
    t3_l3: "Helyszín", t3_r3: "Mitokondrium",
    t3_q: "Milyen gázra van szükség a biológiai oxidációhoz?",
    t3_q_a: "Oxigénre", t3_q_b: "Nitrogénre", t3_q_c: "Szén-dioxidra", t3_q_d: "Héliumra",

    // T4: Az ATP
    t4_title: "Az ATP: a sejt akkumulátora",
    t4_text: "A felszabaduló energiát a sejt nem tudja közvetlenül tárolni. Egy speciális molekulába, az ATP-be 'csomagolja' azt.",
    t4_b1: "ATP: Adenozin-trifoszfát.",
    t4_b2: "Ha a sejtnek energiára van szüksége (pl. mozgáshoz), az ATP-t lebontja.",
    t4_b3: "Olyan, mint egy feltölthető elem.",
    t4_inst: "Melyik molekula tárolja a sejt energiáját?",
    t4_gap_sentence2: "A sejt közvetlen energiaforrása az {gap} molekula.",
    t4_c51: "ATP", t4_c52: "DNS", t4_c53: "H2O",
    t4_q: "Mi történik az ATP-vel, amikor a sejt energiát használ fel belőle?",
    t4_q_a: "Lebomlik és energia szabadul fel", t4_q_b: "Cukorrá változik", t4_q_c: "Oxigént termel", t4_q_d: "Megduplázza magát",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld tudásod a sejt energiatermeléséről!",
    t5_b1: "Mitokondrium = energiaközpont.",
    t5_b2: "Sejtlégzés = cukor + oxigén -> CO2 + víz + energia.",
    t5_b3: "Az energia ATP-ben tárolódik.",
    t5_inst: "Milyen típusú folyamat a sejtlégzés?",
    t5_gap_sentence3: "A sejtlégzés egy {gap} folyamat, mert anyagokat bont le energiáért.",
    t5_c61: "lebontó", t5_c62: "felépítő", t5_c63: "fényelnyelő",
    t5_q: "Melyik állítás IGAZ?",
    t5_q_a: "A sejtlégzés során szén-dioxid termelődik.", t5_q_b: "Csak a növények lélegeznek.", t5_q_c: "A légzéshez sötét kell.", t5_q_d: "A mitokondrium vizet bont oxigénre.",
  },
  en: {
    explorer_title: "Cellular Respiration",
    t1_title: "The Powerhouse", t1_text: "Cellular respiration occurs in the mitochondria. This organelle converts nutrients into usable energy for the cell.",
    t1_b1: "Outer membrane: smooth protective layer.", t1_b2: "Inner membrane: highly folded to increase workspace.", t1_b3: "Matrix: internal fluid where chemical cycles happen.",
    t1_inst: "Label the parts of the mitochondria!",
    t1_area_outer: "Outer membrane", t1_area_inner: "Inner membrane", t1_area_matrix: "Matrix", t1_area_cristae: "Cristae (folds)",
    t1_q: "Where does energy production happen in the cell?", t1_q_a: "Mitochondria", t1_q_b: "Chloroplast", t1_q_c: "Nucleus", t1_q_d: "Ribosome",

    t2_title: "Glycolysis", t2_text: "Before entering the mitochondria, nutrients are partially broken down in the cytoplasm. This is called glycolysis.",
    t2_b1: "Glucose is split into two smaller pieces.", t2_b2: "This stage does not require oxygen.", t2_b3: "A small amount of energy is released.",
    t2_inst: "Where does glycolysis occur?", t2_gap_sentence: "Glycolysis takes place in the {gap}.",
    t2_c1: "cytoplasm", t2_c2: "mitochondria", t2_c3: "nucleus",
    t2_q: "Is oxygen needed for glycolysis?", t2_q_a: "No, it's anaerobic.", t2_q_b: "Yes, it stops without it.", t2_q_c: "Only in plants.", t2_q_d: "Only at night.",

    t3_title: "Biological Oxidation", t3_text: "In the mitochondria, nutrient remains are fully broken down into water and CO2 using oxygen. This provides most of the energy.",
    t3_b1: "Input: nutrient fragments and Oxygen (O2).", t3_b2: "Output: Carbon dioxide (CO2), Water (H2O), and energy.", t3_b3: "This is the reverse of photosynthesis.",
    t3_inst: "Match the inputs and outputs!",
    t3_l1: "Required", t3_r1: "Sugar and Oxygen", t3_l2: "Produced", t3_r2: "CO2, Water, and Energy", t3_l3: "Location", t3_r3: "Mitochondria",
    t3_q: "Which gas is required for biological oxidation?", t3_q_a: "Oxygen", t3_q_b: "Nitrogen", t3_q_c: "Carbon dioxide", t3_q_d: "Hydrogen",

    t4_title: "ATP: Cell's Battery", t4_text: "Cells store released energy in a special molecule called ATP.",
    t4_b1: "ATP: Adenosine triphosphate.", t4_b2: "When the cell needs energy, it breaks down ATP.", t4_b3: "It's like a rechargeable battery.",
    t4_inst: "Which molecule stores cell energy?", t4_gap_sentence2: "The direct energy source for the cell is {gap}.",
    t4_c51: "ATP", t4_c52: "DNA", t4_c53: "H2O",
    t4_q: "What happens to ATP when the cell uses its energy?", t4_q_a: "It breaks down and releases energy", t4_q_b: "It turns into sugar", t4_q_c: "It produces oxygen", t4_q_d: "It doubles itself",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about cell energy!",
    t5_b1: "Mitochondria = energy center.", t5_b2: "Respiration = sugar + O2 -> CO2 + H2O + energy.", t5_b3: "Energy is stored in ATP.",
    t5_inst: "What type of process is respiration?", t5_gap_sentence3: "Respiration is a {gap} process.",
    t5_c61: "catabolic", t5_c62: "anabolic", t5_c63: "light-absorbing",
    t5_q: "Which statement is TRUE?", t5_q_a: "Carbon dioxide is produced during respiration.", t5_q_b: "Only plants breathe.", t5_q_c: "Respiration requires darkness.", t5_q_d: "Mitochondria turn water into oxygen.",
  },
  de: {
    explorer_title: "Zellatmung",
    t1_title: "Das Kraftwerk", t1_text: "Zellatmung findet in den Mitochondrien statt. Dieses Organell wandelt Nährstoffe in nutzbare Energie um.",
    t1_b1: "Äußere Membran: glatte Schutzschicht.", t1_b2: "Innere Membran: stark gefaltet für mehr Arbeitsfläche.", t1_b3: "Matrix: innere Flüssigkeit für chemische Zyklen.",
    t1_inst: "Beschrifte das Mitochondrium!",
    t1_area_outer: "Äußere Membran", t1_area_inner: "Innere Membran", t1_area_matrix: "Matrix", t1_area_cristae: "Cristae (Falten)",
    t1_q: "Wo findet die Energiegewinnung in der Zelle statt?", t1_q_a: "Mitochondrium", t1_q_b: "Chloroplast", t1_q_c: "Zellkern", t1_q_d: "Ribosom",

    t2_title: "Glykolyse", t2_text: "Bevor Nährstoffe ins Mitochondrium gelangen, werden sie im Zellplasma teilweise abgebaut. Das nennt man Glykolyse.",
    t2_b1: "Glukose wird in zwei Teile gespalten.", t2_b2: "Dieser Schritt braucht keinen Sauerstoff.", t2_b3: "Wenig Energie wird frei.",
    t2_inst: "Wo findet die Glykolyse statt?", t2_gap_sentence: "Die Glykolyse erfolgt im {gap}.",
    t2_c1: "Zellplasma", t2_c2: "Mitochondrium", t2_c3: "Zellkern",
    t2_q: "Wird Sauerstoff für die Glykolyse benötigt?", t2_q_a: "Nein, sie ist anaerob.", t2_q_b: "Ja, sonst stoppt sie.", t2_q_c: "Nur bei Pflanzen.", t2_q_d: "Nur nachts.",

    t3_title: "Biologische Oxidation", t3_text: "Im Mitochondrium werden Nährstoffe mit Sauerstoff vollständig zu Wasser und CO2 abgebaut. Das gibt viel Energie.",
    t3_b1: "Input: Nährstoffreste und Sauerstoff (O2).", t3_b2: "Output: Kohlendioxid (CO2), Wasser (H2O) und Energie.", t3_b3: "Dies ist das Gegenteil der Fotosynthese.",
    t3_inst: "Verbinde Input und Output!",
    t3_l1: "Wird benötigt", t3_r1: "Zucker und Sauerstoff", t3_l2: "Entsteht", t3_r2: "CO2, Wasser und Energie", t3_l3: "Ort", t3_r3: "Mitochondrium",
    t3_q: "Welches Gas wird für die biologische Oxidation benötigt?", t3_q_a: "Sauerstoff", t3_q_b: "Stickstoff", t3_q_c: "Kohlendioxid", t3_q_d: "Wasserstoff",

    t4_title: "ATP: Der Zell-Akku", t4_text: "Zellen speichern Energie in einem speziellen Molekül namens ATP.",
    t4_b1: "ATP: Adenosintriphosphat.", t4_b2: "Braucht die Zelle Energie, baut sie ATP ab.", t4_b3: "Es ist wie eine aufladbare Batterie.",
    t4_inst: "Welches Molekül speichert die Energie?", t4_gap_sentence2: "Die direkte Energiequelle ist das {gap}.",
    t4_c51: "ATP", t4_c52: "DNA", t4_c53: "H2O",
    t4_q: "Was passiert mit ATP, wenn die Zelle Energie verbraucht?", t4_q_a: "Es wird abgebaut und Energie wird frei", t4_q_b: "Es wird zu Zucker", t4_q_c: "Es erzeugt Sauerstoff", t4_q_d: "Es verdoppelt sich",

    t5_title: "Zusammenfassung", t5_text: "Teste dein Wissen über die Energiegewinnung!",
    t5_b1: "Mitochondrium = Energiezentrum.", t5_b2: "Zellatmung = Zucker + O2 -> CO2 + H2O + Energie.", t5_b3: "Energie wird in ATP gespeichert.",
    t5_inst: "Was für ein Prozess ist die Zellatmung?", t5_gap_sentence3: "Zellatmung ist ein {gap} Prozess.",
    t5_c61: "abbauender", t5_c62: "aufbauender", t5_c63: "lichtabsorbierender",
    t5_q: "Welche Aussage ist RICHTIG?", t5_q_a: "Bei der Zellatmung entsteht Kohlendioxid.", t5_q_b: "Nur Pflanzen atmen.", t5_q_c: "Atmung braucht Dunkelheit.", t5_q_d: "Mitochondrien spalten Wasser.",
  },
  ro: {
    explorer_title: "Respirația Celulară",
    t1_title: "Centrala celulei", t1_text: "Respirația celulară are loc în mitocondrii. Acest organit transformă nutrienții în energie utilizabilă.",
    t1_b1: "Membrana externă: strat protector neted.", t1_b2: "Membrana internă: pliată pentru a mări suprafața.", t1_b3: "Matrice: lichidul intern unde au loc ciclurile chimice.",
    t1_inst: "Etichetează părțile mitocondriei!",
    t1_area_outer: "Membrană externă", t1_area_inner: "Membrană internă", t1_area_matrix: "Matrice", t1_area_cristae: "Criste (pliuri)",
    t1_q: "Unde are loc producerea energiei în celulă?", t1_q_a: "Mitocondrie", t1_q_b: "Cloroplast", t1_q_c: "Nucleu", t1_q_d: "Ribozom",

    t2_title: "Glicoliza", t2_text: "Înainte de a intra în mitocondrie, nutrienții sunt descompuși parțial în citoplasmă. Procesul se numește glicoliză.",
    t2_b1: "Glucoza este ruptă în două fragmente.", t2_b2: "Această etapă nu necesită oxigen.", t2_b3: "Se eliberează o cantitate mică de energie.",
    t2_inst: "Unde are loc glicoliza?", t2_gap_sentence: "Glicoliza se desfășoară în {gap}.",
    t2_c1: "citoplasmă", t2_c2: "mitocondrie", t2_c3: "nucleu",
    t2_q: "Este necesar oxigenul pentru glicoliză?", t2_q_a: "Nu, este un proces anaerob.", t2_q_b: "Da, fără el se oprește.", t2_q_c: "Doar la plante.", t2_q_d: "Doar noaptea.",

    t3_title: "Oxidarea Biologică", t3_text: "În mitocondrie, fragmentele de nutrienți sunt descompuse complet în apă și CO2 folosind oxigenul.",
    t3_b1: "Intrare: fragmente de nutrienți și Oxigen (O2).", t3_b2: "Ieșire: Dioxid de carbon (CO2), Apă (H2O) și multă energie.", t3_b3: "Este procesul invers fotosintezei.",
    t3_inst: "Potrivește intrările și ieșirile!",
    t3_l1: "Necesar", t3_r1: "Zahăr și Oxigen", t3_l2: "Produs", t3_r2: "CO2, Apă și Energie", t3_l3: "Locație", t3_r3: "Mitocondrie",
    t3_q: "Ce gaz este necesar pentru oxidarea biologică?", t3_q_a: "Oxigen", t3_q_b: "Azot", t3_q_c: "Dioxid de carbon", t3_q_d: "Hidrogen",

    t4_title: "ATP: Bateria Celulei", t4_text: "Celulele stochează energia eliberată într-o moleculă specială numită ATP.",
    t4_b1: "ATP: Adenozin trifosfat.", t4_b2: "Când are nevoie de energie, celula descompune ATP-ul.", t4_b3: "Este ca o baterie reîncărcabilă.",
    t4_inst: "Care moleculă stochează energia celulei?", t4_gap_sentence2: "Sursa directă de energie a celulei este {gap}.",
    t4_c51: "ATP", t4_c52: "ADN", t4_c53: "apa",
    t4_q: "Ce se întâmplă cu ATP-ul când celula îi folosește energia?", t4_q_a: "Se descompune și eliberează energie", t4_q_b: "Se transformă în zahăr", t4_q_c: "Produce oxigen", t4_q_d: "Se dublează",

    t5_title: "Recapitulare", t5_text: "Testează-ți cunoștințele despre energia celulară!",
    t5_b1: "Mitocondrie = centrul energetic.", t5_b2: "Respirație = zahăr + O2 -> CO2 + apă + energie.", t5_b3: "Energia se stochează în ATP.",
    t5_inst: "Ce fel de proces este respirația?", t5_gap_sentence3: "Respirația celulară este un proces {gap}.",
    t5_c61: "de descompunere", t5_c62: "de sinteză", t5_c63: "de absorbție a luminii",
    t5_q: "Care afirmație este ADEVĂRATĂ?", t5_q_a: "În timpul respirației se produce dioxid de carbon.", t5_q_b: "Doar plantele respiră.", t5_q_c: "Respirația necesită întuneric.", t5_q_d: "Mitocondria descompune apa în oxigen.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <MitochondriaSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "outer",  x: 20, y: 30, label: "t1_area_outer" },
        { id: "inner",  x: 35, y: 55, label: "t1_area_inner" },
        { id: "matrix", x: 55, y: 70, label: "t1_area_matrix" },
        { id: "cristae", x: 75, y: 45, label: "t1_area_cristae" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b2",
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0,
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
    svg: (lang) => <MitochondriaSvg lang={lang} />,
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
      type: "gap-fill",
      sentence: "t4_gap_sentence2",
      choices: ["t4_c51", "t4_c52", "t4_c53"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_b3",
      hint2: "t4_b1",
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
      sentence: "t5_gap_sentence3",
      choices: ["t5_c61", "t5_c62", "t5_c63"],
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
  icon: "🌬️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CellRespirationExplorer = memo(function CellRespirationExplorer({
  color = "#F59E0B", // Borostyán (Amber-600) az ATP energiájára utalva
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
      explorerId="bio_k7_cell_respiration" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default CellRespirationExplorer;
