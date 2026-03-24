"use client";
// PhotosynthesisExplorer.tsx — Bio Island i3: Fotoszintézis (K7)
// Topics: 1) Kloroplasztisz 2) Fényszakasz 3) Sötétszakasz (Calvin-ciklus) 4) Anyagcsere egyenlet 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ChloroplastSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="40" textAnchor="middle">☀️</text>
        <path d="M 0,-10 L 0,20" stroke="#FACC15" strokeWidth="4" markerEnd="url(#arrow)" />
        <rect x="-30" y="20" width="60" height="30" rx="5" fill="#16A34A" />
        <text x="0" y="42" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">ATP</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="10" fontSize="25" textAnchor="middle">💧</text>
        <text x="-25" y="10" fontSize="25" textAnchor="middle">➕</text>
        <text x="10" y="10" fontSize="25" textAnchor="middle">☁️</text>
        <path d="M 35,0 L 55,0" stroke="#65A30D" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="80" y="10" fontSize="25" textAnchor="middle">🍬</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌿</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">⚡</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Fotoszintézis",
    // T1: Kloroplasztisz (Label-diagram)
    t1_title: "A zöld színtest szerkezete",
    t1_text: "A fotoszintézis a kloroplasztiszokban zajlik. Ez egy kettős membránnal határolt szervecske, amelynek belsejében különleges membránrendszer (gránum) található.",
    t1_b1: "Külső membrán: elhatárolja a színtestet a plazmától.",
    t1_b2: "Sztróma: a belső kocsonyás állomány.",
    t1_b3: "Gránum: egymásra rakott korongok, itt van a klorofill.",
    t1_inst: "Címkézd fel a kloroplasztisz részeit!",
    t1_area_outer: "Külső membrán",
    t1_area_inner: "Belső membrán",
    t1_area_stroma: "Sztróma (alapállomány)",
    t1_area_granum: "Gránum",
    t1_q: "Milyen anyag adja a kloroplasztisz zöld színét?",
    t1_q_a: "Klorofill", t1_q_b: "Hemoglobin", t1_q_c: "Inzulin", t1_q_d: "Melanin",

    // T2: Fényszakasz
    t2_title: "A fényszakasz",
    t2_text: "A folyamat első része fényenergiát igényel. A klorofill molekulák megkötik a napfényt, és energiadús molekulákat hoznak létre.",
    t2_b1: "A víz felhasad: oxigén szabadul fel.",
    t2_b2: "Energia tárolódik el ATP formájában.",
    t2_b3: "Ez a szakasz a gránumok membránján történik.",
    t2_inst: "Párosítsd a fényszakasz jellemzőit!",
    t2_l1: "Helyszín", t2_r1: "Gránum membrán",
    t2_l2: "Melléktermék", t2_r2: "Oxigén (O2)",
    t2_l3: "Energiaforrás", t2_r3: "Napfény",
    t2_q: "Melyik gáz szabadul fel a fotoszintézis fényszakaszában?",
    t2_q_a: "Oxigén", t2_q_b: "Szén-dioxid", t2_q_c: "Nitrogén", t2_q_d: "Metán",

    // T3: Sötétszakasz
    t3_title: "A sötétszakasz (Calvin-ciklus)",
    t3_text: "Ez a szakasz már nem igényel közvetlen fényt, de szüksége van a fényszakaszban termelt energiára. Itt épül fel a szén-dioxidból a cukor.",
    t3_b1: "Helyszín: a kloroplasztisz alapállománya (sztróma).",
    t3_b2: "Bemenet: szén-dioxid (CO2).",
    t3_b3: "Eredmény: szőlőcukor (glükóz).",
    t3_inst: "Mire van szüksége a növénynek a cukorgyártáshoz? Válogasd szét!",
    t3_bucket_be: "Bemenet (kell hozzá)",
    t3_bucket_ki: "Kimenet (keletkezik)",
    t3_item_b1: "Szén-dioxid", t3_item_b2: "Fényenergia",
    t3_item_k1: "Szőlőcukor", t3_item_k2: "Keményítő",
    t3_q: "Hogy hívjuk a fotoszintézis során keletkező tápanyagot?",
    t3_q_a: "Szőlőcukor (Glükóz)", t3_q_b: "Keményítő", t3_q_c: "Zsír", t3_q_d: "Fehérje",

    // T4: Anyagcsere egyenlet
    t4_title: "A fotoszintézis egyenlete",
    t4_text: "Foglaljuk össze egyetlen kémiai folyamatban! A növény szervetlen anyagokból (víz, CO2) szerves anyagot (cukor) állít elő fény segítségével.",
    t4_b1: "6 víz + 6 szén-dioxid + fény -> 1 cukor + 6 oxigén.",
    t4_b2: "Ez az autotróf életmód alapja.",
    t4_b3: "A folyamat szinte minden földi élet alapja.",
    t4_inst: "Tedd sorba a folyamat elemeit (Bemenet -> Kimenet)!",
    t4_w1: "Víz", t4_w2: "Szén-dioxid", t4_w3: "Fény", t4_w4: "Cukor", t4_w5: "Oxigén",
    t4_q: "Milyen típusú folyamat a fotoszintézis az anyagcsere szerint?",
    t4_q_a: "Felépítő folyamat", t4_q_b: "Lebontó folyamat", t4_q_c: "Kizárólag gázcsere", t4_q_d: "Emésztés",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Készen állsz a fotoszintézis mesteri szintjére? Ellenőrizzük a tanultakat!",
    t5_b1: "A klorofill a gránumokban van.",
    t5_b2: "Fényből kémiai energia lesz.",
    t5_b3: "A CO2-ből cukor épül fel a sztrómában.",
    t5_inst: "Melyik gáz szükséges a sötétszakaszhoz?",
    t5_gap_sentence2: "A növény a levegőből {gap} köt meg a cukorgyártáshoz.",
    t5_c51: "szén-dioxidot", t5_c52: "oxigént", t5_c53: "héliumot",
    t5_q: "Melyik állítás IGAZ?",
    t5_q_a: "A fotoszintézis során a fényenergia kémiai energiává alakul.", t5_q_b: "A növények csak éjszaka fotoszintetizálnak.", t5_q_c: "A fotoszintézis a mitokondriumban zajlik.", t5_q_d: "A kloroplasztiszban nincs membrán.",
  },
  en: {
    explorer_title: "Photosynthesis",
    t1_title: "Chloroplast Structure", t1_text: "Photosynthesis happens in chloroplasts, organelles with a double membrane and internal stacks called grana.",
    t1_b1: "Outer membrane: separates the organelle from cytoplasm.", t1_b2: "Stroma: the fluid-filled space inside.", t1_b3: "Granum: stacks of disks containing chlorophyll.",
    t1_inst: "Label the parts of the chloroplast!",
    t1_area_outer: "Outer membrane", t1_area_inner: "Inner membrane", t1_area_stroma: "Stroma", t1_area_granum: "Granum",
    t1_q: "What pigment gives the chloroplast its green color?", t1_q_a: "Chlorophyll", t1_q_b: "Hemoglobin", t1_q_c: "Carotene", t1_q_d: "Melanin",

    t2_title: "Light Reactions", t2_text: "The first part needs light. Chlorophyll captures sunlight to create energy-rich molecules.",
    t2_b1: "Water is split: oxygen is released.", t2_b2: "Energy is stored as ATP.", t2_b3: "This happens on the granum membranes.",
    t2_inst: "Match the features of light reactions!",
    t2_l1: "Location", t2_r1: "Thylakoid/Granum membrane", t2_l2: "Byproduct", t2_r2: "Oxygen (O2)", t2_l3: "Source", t2_r3: "Sunlight",
    t2_q: "Which gas is released during the light reactions?", t2_q_a: "Oxygen", t2_q_b: "Carbon dioxide", t2_q_c: "Nitrogen", t2_q_d: "Argon",

    t3_title: "Dark Reactions (Calvin Cycle)", t3_text: "This stage doesn't need light directly but uses the energy produced earlier to turn CO2 into sugar.",
    t3_b1: "Location: the stroma of the chloroplast.", t3_b2: "Input: Carbon dioxide (CO2).", t3_b3: "Result: Glucose (sugar).",
    t3_inst: "What does the plant need for sugar production? Sort them!",
    t3_bucket_be: "Inputs", t3_bucket_ki: "Outputs",
    t3_item_b1: "Carbon dioxide", t3_item_b2: "Energy (ATP)", t3_item_k1: "Glucose", t3_item_k2: "Starch",
    t3_q: "What is the nutrient produced during photosynthesis called?", t3_q_a: "Glucose", t3_q_b: "Starch", t3_q_c: "Protein", t3_q_d: "Fat",

    t4_title: "Metabolic Equation", t4_text: "Plants turn inorganic materials (water, CO2) into organic matter (sugar) using light.",
    t4_b1: "6 Water + 6 CO2 + Light -> 1 Sugar + 6 Oxygen.", t4_b2: "This is the basis of autotrophic life.", t4_b3: "Almost all life on Earth depends on this.",
    t4_inst: "Put the components in order (Inputs -> Outputs)!",
    t4_w1: "Water", t4_w2: "CO2", t4_w3: "Light", t4_w4: "Sugar", t4_w5: "Oxygen",
    t4_q: "What type of process is photosynthesis?", t4_q_a: "Anabolic (building)", t4_q_b: "Catabolic (breaking down)", t4_q_c: "Just gas exchange", t4_q_d: "Digestion",

    t5_title: "Summary Quiz", t5_text: "Are you ready for the mastery of photosynthesis?",
    t5_b1: "Chlorophyll is in the grana.", t5_b2: "Light becomes chemical energy.", t5_b3: "CO2 becomes sugar in the stroma.",
    t5_inst: "Which gas is required for the dark reactions?", t5_gap_sentence2: "Plants capture {gap} from the air to make sugar.",
    t5_c51: "carbon dioxide", t5_c52: "oxygen", t5_c53: "nitrogen",
    t5_q: "Which statement is TRUE?", t5_q_a: "Light energy is converted into chemical energy.", t5_q_b: "Plants only photosynthesize at night.", t5_q_c: "It happens in mitochondria.", t5_q_d: "Chloroplasts have no membranes.",
  },
  de: {
    explorer_title: "Fotosynthese",
    t1_title: "Aufbau des Chloroplasten", t1_text: "Fotosynthese findet in Chloroplasten statt. Sie haben eine Doppelmembran und Stapel im Inneren, die Grana genannt werden.",
    t1_b1: "Äußere Membran: grenzt das Organell ab.", t1_b2: "Stroma: die Grundsubstanz im Inneren.", t1_b3: "Granum: Stapel, die Chlorophyll enthalten.",
    t1_inst: "Beschrifte den Chloroplasten!",
    t1_area_outer: "Äußere Membran", t1_area_inner: "Innere Membran", t1_area_stroma: "Stroma", t1_area_granum: "Granum",
    t1_q: "Welcher Farbstoff macht den Chloroplasten grün?", t1_q_a: "Chlorophyll", t1_q_b: "Hämoglobin", t1_q_c: "Melanin", t1_q_d: "Pektin",

    t2_title: "Lichtreaktion", t2_text: "Der erste Teil benötigt Licht. Chlorophyll fängt Sonnenlicht ein, um Energie zu speichern.",
    t2_b1: "Wasser wird gespalten: Sauerstoff wird frei.", t2_b2: "Energie wird als ATP gespeichert.", t2_b3: "Findet an den Thylakoidmembranen statt.",
    t2_inst: "Verbinde die Merkmale der Lichtreaktion!",
    t2_l1: "Ort", t2_r1: "Granum-Membran", t2_l2: "Nebenprodukt", t2_r2: "Sauerstoff (O2)", t2_l3: "Quelle", t2_r3: "Sonnenlicht",
    t2_q: "Welches Gas wird bei der Lichtreaktion abgegeben?", t2_q_a: "Sauerstoff", t2_q_b: "Kohlendioxid", t2_q_c: "Stickstoff", t2_q_d: "Wasserstoff",

    t3_title: "Dunkelreaktion", t3_text: "Benötigt kein direktes Licht, nutzt aber die Energie der Lichtreaktion, um aus CO2 Zucker aufzubauen.",
    t3_b1: "Ort: Stroma des Chloroplasten.", t3_b2: "Input: Kohlendioxid (CO2).", t3_b3: "Ergebnis: Traubenzucker (Glukose).",
    t3_inst: "Was braucht die Pflanze, was entsteht? Sortiere!",
    t3_bucket_be: "Input", t3_bucket_ki: "Output",
    t3_item_b1: "Kohlendioxid", t3_item_b2: "Energie (ATP)", t3_item_k1: "Glukose", t3_item_k2: "Stärke",
    t3_q: "Wie heißt der bei der Fotosynthese entstehende Nährstoff?", t3_q_a: "Traubenzucker", t3_q_b: "Fett", t3_q_c: "Eiweiß", t3_q_d: "Mineral",

    t4_title: "Die Reaktionsgleichung", t4_text: "Pflanzen machen aus anorganischen Stoffen (Wasser, CO2) mit Licht organische Stoffe (Zucker).",
    t4_b1: "Wasser + CO2 + Licht -> Zucker + Sauerstoff.", t4_b2: "Grundlage des autotrophen Lebens.", t4_b3: "Basis fast allen Lebens auf der Erde.",
    t4_inst: "Bringe die Komponenten in Ordnung (Input -> Output)!",
    t4_w1: "Wasser", t4_w2: "CO2", t4_w3: "Licht", t4_w4: "Zucker", t4_w5: "Sauerstoff",
    t4_q: "Was für ein Prozess ist die Fotosynthese?", t4_q_a: "Aufbauender Prozess", t4_q_b: "Abbauender Prozess", t4_q_c: "Nur Gasaustausch", t4_q_d: "Verdauung",

    t5_title: "Zusammenfassung", t5_text: "Bist du bereit für den Fotosynthese-Check?",
    t5_b1: "Chlorophyll ist in den Grana.", t5_b2: "Licht wird zu chemischer Energie.", t5_b3: "Zucker wird im Stroma gebaut.",
    t5_inst: "Welches Gas wird für die Dunkelreaktion benötigt?", t5_gap_sentence2: "Die Pflanze nimmt {gap} aus der Luft auf.",
    t5_c51: "Kohlendioxid", t5_c52: "Sauerstoff", t5_c53: "Stickstoff",
    t5_q: "Welche Aussage ist RICHTIG?", t5_q_a: "Lichtenergie wird in chemische Energie umgewandelt.", t5_q_b: "Pflanzen brauchen keinen Sauerstoff.", t5_q_c: "Findet im Zellkern statt.", t5_q_d: "Ist ein Abbauprozess.",
  },
  ro: {
    explorer_title: "Fotosinteza",
    t1_title: "Structura Cloroplastului", t1_text: "Fotosinteza are loc în cloroplaste. Acestea au o membrană dublă și teancuri interne numite grana.",
    t1_b1: "Membrana externă: separă organitul de citoplasmă.", t1_b2: "Stroma: substanța fundamentală din interior.", t1_b3: "Granum: teancuri de discuri care conțin clorofilă.",
    t1_inst: "Etichetează părțile cloroplastului!",
    t1_area_outer: "Membrană externă", t1_area_inner: "Membrană internă", t1_area_stroma: "Stroma", t1_area_granum: "Granum",
    t1_q: "Ce pigment dă culoarea verde cloroplastului?", t1_q_a: "Clorofila", t1_q_b: "Hemoglobina", t1_q_c: "Melanina", t1_q_d: "Carotenul",

    t2_title: "Faza de Lumină", t2_text: "Prima parte necesită lumină. Clorofila captează energia solară pentru a crea molecule bogate în energie.",
    t2_b1: "Apa este descompusă: se eliberează oxigen.", t2_b2: "Energia este stocată sub formă de ATP.", t2_b3: "Are loc pe membranele granelor.",
    t2_inst: "Potrivește caracteristicile fazei de lumină!",
    t2_l1: "Locație", t2_r1: "Membrana granumului", t2_l2: "Subprodus", t2_r2: "Oxigen (O2)", t2_l3: "Sursă", t2_r3: "Lumina solară",
    t2_q: "Ce gaz este eliberat în faza de lumină?", t2_q_a: "Oxigen", t2_q_b: "Dioxid de carbon", t2_q_c: "Azot", t2_q_d: "Metan",

    t3_title: "Faza de Întuneric", t3_text: "Nu necesită lumină directă, dar folosește energia produsă anterior pentru a transforma CO2 în zahăr.",
    t3_b1: "Locație: stroma cloroplastului.", t3_b2: "Intrare: Dioxid de carbon (CO2).", t3_b3: "Rezultat: Glucoză (zahăr).",
    t3_inst: "De ce are nevoie planta? Sortează-le!",
    t3_bucket_be: "Intrări", t3_bucket_ki: "Ieșiri",
    t3_item_b1: "Dioxid de carbon", t3_item_b2: "Energie (ATP)", t3_item_k1: "Glucoză", t3_item_k2: "Amidon",
    t3_q: "Cum se numește nutrientul produs prin fotosinteză?", t3_q_a: "Glucoză", t3_q_b: "Amidon", t3_q_c: "Proteine", t3_q_d: "Grăsimi",

    t4_title: "Ecuația Procesului", t4_text: "Plantele transformă substanțele anorganice (apă, CO2) în substanțe organice (zahăr) folosind lumina.",
    t4_b1: "Apă + CO2 + Lumină -> Zahăr + Oxigen.", t4_b2: "Baza vieții autotrofe.", t4_b3: "Aproape toată viața pe Pământ depinde de asta.",
    t4_inst: "Pune componentele în ordine (Intrare -> Ieșire)!",
    t4_w1: "Apa", t4_w2: "CO2", t4_w3: "Lumina", t4_w4: "Zahărul", t4_w5: "Oxigenul",
    t4_q: "Ce fel de proces este fotosinteza?", t4_q_a: "Proces de sinteză (anabolism)", t4_q_b: "Proces de descompunere", t4_q_c: "Doar schimb de gaze", t4_q_d: "Digestie",

    t5_title: "Recapitulare", t5_text: "Ești gata pentru testul final despre fotosinteză?",
    t5_b1: "Clorofila se află în grana.", t5_b2: "Lumina devine energie chimică.", t5_b3: "Zahărul se construiește în stromă.",
    t5_inst: "Ce gaz este necesar pentru faza de întuneric?", t5_gap_sentence2: "Planta fixează {gap} din aer pentru a produce zahăr.",
    t5_c51: "dioxidul de carbon", t5_c52: "oxigenul", t5_c53: "azotul",
    t5_q: "Care afirmație este ADEVĂRATĂ?", t5_q_a: "Energia luminoasă este transformată în energie chimică.", t5_q_b: "Plantele fac fotosinteză doar noaptea.", t5_q_c: "Are loc în mitocondrie.", t5_q_d: "Cloroplastul nu are membrane.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ChloroplastSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "outer", x: 15, y: 30, label: "t1_area_outer" },
        { id: "inner", x: 25, y: 50, label: "t1_area_inner" },
        { id: "stroma", x: 50, y: 65, label: "t1_area_stroma" },
        { id: "granum", x: 75, y: 40, label: "t1_area_granum" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b3",
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
    svg: (lang) => <ChloroplastSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "be", label: "t3_bucket_be" },
        { id: "ki", label: "t3_bucket_ki" },
      ],
      items: [
        { text: "t3_item_b1", bucketId: "be" },
        { text: "t3_item_k1", bucketId: "ki" },
        { text: "t3_item_b2", bucketId: "be" },
        { text: "t3_item_k2", bucketId: "ki" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b2",
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
  icon: "⚡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PhotosynthesisExplorer = memo(function PhotosynthesisExplorer({
  color = "#059669", // Emerald-600 a klorofillhoz és fotoszintézishez
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
      explorerId="bio_k7_photosynthesis" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PhotosynthesisExplorer;
