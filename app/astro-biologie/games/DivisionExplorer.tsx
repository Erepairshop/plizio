"use client";
// DivisionExplorer.tsx — Bio Island i2: Sejtoszlás & Ciklus (K7) - JAVÍTOTT
// Topics: 1) A sejtciklus 2) Kromoszómák 3) A mitózis fázisai 4) Osztódás jelentősége 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { MitosisSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Körkörös nyíl a ciklusnak */}
        <circle cx="0" cy="0" r="45" fill="none" stroke="#8B5CF6" strokeWidth="6" strokeDasharray="210 70" />
        <path d="M 40,-15 L 50,0 L 30,0 Z" fill="#8B5CF6" transform="rotate(15, 45, -15)" />
        <text x="0" y="5" fontSize="30" textAnchor="middle">⏳</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="35" textAnchor="middle">🩹</text>
        <path d="M -15,0 L 15,0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="45" y="10" fontSize="35" textAnchor="middle">💪</text>
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
        <text x="0" y="15" fontSize="40" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Sejtoszlás és Ciklus",
    // T1: Sejtciklus
    t1_title: "A sejt életútja",
    t1_text: "A sejtciklus folyamatos körforgás: növekedésből és osztódásból áll. Az osztódás előtt a sejtnek feltétlenül meg kell kettőznie az örökítőanyagát.",
    t1_b1: "Interfázis: a sejt növekszik és DNS-t másol.",
    t1_b2: "DNS replikáció: a genetikai kód megduplázódik.",
    t1_b3: "Osztódás: az anyasejtből két utódsejt lesz.",
    t1_inst: "Mi történik az osztódás előtti nyugalmi szakaszban?",
    t1_gap_sentence: "Az osztódás előtt a sejt {gap} a DNS állományát.",
    t1_c1: "megkettőzi", t1_c2: "elveszíti", t1_c3: "megemészti",
    t1_q: "Melyik szakaszban tölti a sejt az ideje 90%-át?",
    t1_q_a: "Interfázis (növekedés)", t1_q_b: "Mitózis (osztódás)", t1_q_c: "Pusztulás", t1_q_d: "Gázcsere",

    // T2: Kromoszómák (Label-diagram)
    t2_title: "A DNS csomagolása",
    t2_text: "Az osztódás során a DNS-szálak szorosan összetekerednek, és mikroszkóppal is látható kromoszómákat alkotnak.",
    t2_b1: "Kromatida: a kromoszóma két azonos fele.",
    t2_b2: "Centromer: a középső befűződés, ami összetartja a két felet.",
    t2_b3: "Gén: a DNS azon szakasza, ami egy tulajdonságot kódol.",
    t2_inst: "Címkézd fel a kromoszóma részeit!",
    t2_area_chromatid: "Kromatida",
    t2_area_centromere: "Centromer",
    t2_area_gene: "Gén",
    t2_q: "Hány kromatidából áll egy osztódó kromoszóma?",
    t2_q_a: "Kettő", t2_q_b: "Négy", t2_q_c: "Egy", t2_q_d: "Nyolc",

    // T3: Mitózis fázisai (Word-order)
    t3_title: "A mitózis menete",
    t3_text: "A mitózis (számtartó osztódás) során egy anyasejtből két, genetikailag azonos utódsejt keletkezik. Ennek 4 fő szakasza van.",
    t3_b1: "Profázis: a kromoszómák láthatóvá válnak.",
    t3_b2: "Metafázis: a kromoszómák középre rendeződnek.",
    t3_b3: "Anafázis: a kromatidák szétválnak a pólusok felé.",
    t3_inst: "Tedd sorrendbe a mitózis fázisait!",
    t3_w1: "Profázis", t3_w2: "Metafázis", t3_w3: "Anafázis", t3_w4: "Telofázis",
    t3_q: "Melyik fázisban válnak szét a kromatidák?",
    t3_q_a: "Anafázis", t3_q_b: "Profázis", t3_q_c: "Metafázis", t3_q_d: "Telofázis",

    // T4: Osztódás jelentősége
    t4_title: "Növekedés és gyógyulás",
    t4_text: "Miért fontos az osztódás? A többsejtű lények ezen keresztül növekednek, és így pótolják az elpusztult sejtjeiket (pl. sebgyógyulás).",
    t4_b1: "Növekedés: sejtjeink száma nő.",
    t4_b2: "Regeneráció: elhalt bőrsejtek pótlása.",
    t4_b3: "Ivartalan szaporodás: egysejtűeknél utódlás.",
    t4_inst: "Mikor történik mitózis a testünkben? Válogasd szét!",
    t4_bucket_igen: "Mitózis történik",
    t4_bucket_nem: "Nem sejtosztódás",
    t4_item_i1: "Sebgyógyulás", t4_item_i2: "Gyerekek növekedése",
    t4_item_n1: "Ebéd elfogyasztása", t4_item_n2: "Álmodozás",
    t4_q: "Az anyasejthez képest milyen az utódsejtek DNS-e mitózis után?",
    t4_q_a: "Teljesen azonos", t4_q_b: "Fele annyi", t4_q_c: "Dupla annyi", t4_q_d: "Teljesen más",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld, mit tanultál a sejt életciklusáról és az osztódásról!",
    t5_b1: "Interfázis = DNS másolás.",
    t5_b2: "Mitózis = 2 azonos utódsejt.",
    t5_b3: "Kromoszóma = tömörített DNS.",
    t5_inst: "Hogy hívjuk a sejtosztódás fő típusát a testünkben?",
    t5_gap_sentence2: "A testünk növekedését a {gap} folyamata biztosítja.",
    t5_c51: "mitózis", t5_c52: "emésztés", t5_c53: "keringés",
    t5_q: "Melyik állítás IGAZ a kromoszómákra?",
    t5_q_a: "Osztódáskor láthatóvá váló örökítőanyag.", t5_q_b: "Csak a vízben találhatók.", t5_q_c: "Azonosak a baktériumokkal.", t5_q_d: "Nincs bennük DNS.",
  },
  en: {
    explorer_title: "Cell Division & Cycle",
    t1_title: "Cell Life Cycle", t1_text: "The cell cycle is a continuous rotation of growth and division. Before dividing, the cell must replicate its DNA.",
    t1_b1: "Interphase: growth and DNA copying.", t1_b2: "DNA replication: doubling the genetic code.", t1_b3: "Division: one parent cell becomes two daughter cells.",
    t1_inst: "What happens during the resting phase before division?", t1_gap_sentence: "Before dividing, the cell {gap} its DNA content.",
    t1_c1: "replicates", t1_c2: "loses", t1_c3: "digests",
    t1_q: "In which stage does a cell spend 90% of its time?", t1_q_a: "Interphase", t1_q_b: "Mitosis", t1_q_c: "Death", t1_q_d: "Gas exchange",

    t2_title: "Packaging DNA", t2_text: "During division, DNA strands coil tightly to form chromosomes, visible under a microscope.",
    t2_b1: "Chromatid: two identical halves of a chromosome.", t2_b2: "Centromere: the center part holding them together.", t2_b3: "Gene: segment of DNA coding for a trait.",
    t2_inst: "Label the parts of the chromosome!",
    t2_area_chromatid: "Chromatid", t2_area_centromere: "Centromere", t2_area_gene: "Gene",
    t2_q: "How many chromatids are in a dividing chromosome?", t2_q_a: "Two", t2_q_b: "Four", t2_q_c: "One", t2_q_d: "Eight",

    t3_title: "Process of Mitosis", t3_text: "Mitosis results in two genetically identical daughter cells. It has 4 main phases.",
    t3_b1: "Prophase: chromosomes become visible.", t3_b2: "Metaphase: chromosomes align in the middle.", t3_b3: "Anaphase: chromatids separate to poles.",
    t3_inst: "Put the phases of mitosis in order!",
    t3_w1: "Prophase", t3_w2: "Metaphase", t3_w3: "Anaphase", t3_w4: "Telophase",
    t3_q: "In which phase do chromatids separate?", t3_q_a: "Anaphase", t3_q_b: "Prophase", t3_q_c: "Metaphase", t3_q_d: "Telophase",

    t4_title: "Growth and Healing", t4_text: "Multicellular organisms grow and replace dead cells through division (e.g., wound healing).",
    t4_b1: "Growth: increase in cell count.", t4_b2: "Regeneration: replacing skin cells.", t4_b3: "Asexual reproduction: offspring in unicellulars.",
    t4_inst: "When does mitosis happen? Sort them!",
    t4_bucket_igen: "Mitosis happens", t4_bucket_nem: "Not division",
    t4_item_i1: "Wound healing", t4_item_i2: "Kids growing",
    t4_item_n1: "Eating lunch", t4_item_n2: "Dreaming",
    t4_q: "How is the daughter cell DNA compared to the parent?", t4_q_a: "Identical", t4_q_b: "Half", t4_q_c: "Double", t4_q_d: "Different",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about cell cycle!",
    t5_b1: "Interphase = DNA copying.", t5_b2: "Mitosis = 2 identical cells.", t5_b3: "Chromosome = packed DNA.",
    t5_inst: "What is the main type of cell division in our body?", t5_gap_sentence2: "Our body grows through the process of {gap}.",
    t5_c51: "mitosis", t5_c52: "digestion", t5_c53: "circulation",
    t5_q: "Which statement is TRUE about chromosomes?", t5_q_a: "DNA visible during division.", t5_q_b: "Only found in water.", t5_q_c: "Same as bacteria.", t5_q_d: "No DNA inside.",
  },
  de: {
    explorer_title: "Zellteilung & Zyklus",
    t1_title: "Lebenszyklus der Zelle", t1_text: "Zellteilung ist ein Kreislauf aus Wachstum und Teilung. Vorher muss die DNA verdoppelt werden.",
    t1_b1: "Interphase: Wachstum und DNA-Kopie.", t1_b2: "DNA-Replikation: Verdopplung des Codes.", t1_b3: "Teilung: Aus einer Zelle werden zwei.",
    t1_inst: "Was passiert vor der Teilung?", t1_gap_sentence: "Vor der Teilung {gap} die Zelle ihre DNA.",
    t1_c1: "verdoppelt", t1_c2: "verliert", t1_c3: "frisst",
    t1_q: "Wo verbringt die Zelle die meiste Zeit?", t1_q_a: "Interphase", t1_q_b: "Mitose", t1_q_c: "Tod", t1_q_d: "Atmung",

    t2_title: "Verpackung der DNA", t2_text: "Während der Teilung rollt sich die DNA zu sichtbaren Chromosomen auf.",
    t2_b1: "Chromatid: eine der zwei identischen Hälften.", t2_b2: "Centromer: die Haltestelle in der Mitte.", t2_b3: "Gen: DNA-Abschnitt für ein Merkmal.",
    t2_inst: "Beschrifte das Chromosom!",
    t2_area_chromatid: "Chromatid", t2_area_centromere: "Centromer", t2_area_gene: "Gen",
    t2_q: "Aus wie vielen Chromatiden besteht ein Chromosom?", t2_q_a: "Zwei", t2_q_b: "Vier", t2_q_c: "Eins", t2_q_d: "Acht",

    t3_title: "Ablauf der Mitose", t3_text: "Die Mitose erzeugt zwei identische Zellen. Sie hat 4 Phasen.",
    t3_b1: "Prophase: Kernhülle zerfällt.", t3_b2: "Metaphase: Chromosomen in der Mitte.", t3_b3: "Anaphase: Trennung der Chromatiden.",
    t3_inst: "Bringe die Mitose-Phasen in Reihenfolge!",
    t3_w1: "Prophase", t3_w2: "Metaphase", t3_w3: "Anaphase", t3_w4: "Telophase",
    t3_q: "Wann trennen sich die Chromatiden?", t3_q_a: "Anaphase", t3_q_b: "Prophase", t3_q_c: "Metaphase", t3_q_d: "Telophase",

    t4_title: "Wachstum und Heilung", t4_text: "Zellteilung ermöglicht Wachstum und die Heilung von Wunden.",
    t4_b1: "Wachstum: Zellzahl steigt.", t4_b2: "Regeneration: Hauterneuerung.", t4_b3: "Vermehrung: bei Einzellern.",
    t4_inst: "Wann findet Mitose statt?",
    t4_bucket_igen: "Mitose", t4_bucket_nem: "Keine Teilung",
    t4_item_i1: "Wundheilung", t4_item_i2: "Größer werden",
    t4_item_n1: "Essen", t4_item_n2: "Träumen",
    t4_q: "Wie ist die DNA der Tochterzellen?", t4_q_a: "Identisch", t4_q_b: "Halbiert", t4_q_c: "Verdoppelt", t4_q_d: "Anders",

    t5_title: "Zusammenfassung", t5_text: "Teste dein Wissen!",
    t5_b1: "Interphase = DNA-Kopie.", t5_b2: "Mitose = 2 identische Zellen.", t5_b3: "Chromosom = verpackte DNA.",
    t5_inst: "Wie heißt die Körperzellteilung?", t5_gap_sentence2: "Körperwachstum geschieht durch {gap}.",
    t5_c51: "Mitose", t5_c52: "Verdauung", t5_c53: "Laufen",
    t5_q: "Was sind Chromosomen?", t5_q_a: "Erbgutträger", t5_q_b: "Bakterien", t5_q_c: "Wasserpflanzen", t5_q_d: "Zucker",
  },
  ro: {
    explorer_title: "Diviziune & Ciclu Celular",
    t1_title: "Ciclul de Viață al Celulei", t1_text: "Ciclul celular este o rotație continuă: creștere și diviziune. Înainte de a se divide, celula trebuie să își replice ADN-ul.",
    t1_b1: "Interfaza: creștere și copierea ADN-ului.", t1_b2: "Replicarea ADN-ului: dublarea codului genetic.", t1_b3: "Diviziunea: o celulă mamă devine două celule fiice.",
    t1_inst: "Ce se întâmplă în faza de repaus înainte de diviziune?", t1_gap_sentence: "Înainte de diviziune, celula își {gap} ADN-ul.",
    t1_c1: "duplică", t1_c2: "pierde", t1_c3: "consumă",
    t1_q: "În ce etapă își petrece celula 90% din timp?", t1_q_a: "Interfază", t1_q_b: "Mitoză", t1_q_c: "Moarte", t1_q_d: "Respirație",

    t2_title: "Împachetarea ADN-ului", t2_text: "În timpul diviziunii, firele de ADN se înfășoară strâns și formează cromozomi vizibili la microscop.",
    t2_b1: "Cromatidă: cele două jumătăți identice ale unui cromozom.", t2_b2: "Centromer: partea centrală care le ține unite.", t2_b3: "Genă: segment de ADN care codifică o trăsătură.",
    t2_inst: "Etichetează părțile cromozomului!",
    t2_area_chromatid: "Cromatidă", t2_area_centromere: "Centromer", t2_area_gene: "Genă",
    t2_q: "Din câte cromatide este format un cromozom aflat în diviziune?", t2_q_a: "Două", t2_q_b: "Patru", t2_q_c: "Una", t2_q_d: "Opt",

    t3_title: "Procesul Mitozei", t3_text: "Mitoza rezultă în două celule fiice identice genetic. Are 4 faze principale.",
    t3_b1: "Profaza: cromozomii devin vizibili.", t3_b2: "Metafaza: cromozomii se aliniază la mijloc.", t3_b3: "Anafaza: cromatidele se separă spre poli.",
    t3_inst: "Pune fazele mitozei în ordine!",
    t3_w1: "Profază", t3_w2: "Metafază", t3_w3: "Anafază", t3_w4: "Telofază",
    t3_q: "În ce fază se separă cromatidele?", t3_q_a: "Anafază", t3_q_b: "Profază", t3_q_c: "Metafază", t3_q_d: "Telofază",

    t4_title: "Creștere și Vindecare", t4_text: "Organismele multicelulare cresc și înlocuiesc celulele moarte prin diviziune (ex: vindecarea rănilor).",
    t4_b1: "Creștere: creșterea numărului de celule.", t4_b2: "Regenerare: înlocuirea celulelor pielii.", t4_b3: "Reproducere asexuată: la unicelulare.",
    t4_inst: "Când are loc mitoza? Sortează-le!",
    t4_bucket_igen: "Are loc mitoza", t4_bucket_nem: "Nu e diviziune",
    t4_item_i1: "Vindecarea rănilor", t4_item_i2: "Creșterea copiilor",
    t4_item_n1: "Mâncatul prânzului", t4_item_n2: "Visatul",
    t4_q: "Cum este ADN-ul celulei fiice față de cel al mamei?", t4_q_a: "Identic", t4_q_b: "Jumătate", t4_q_c: "Dublu", t4_q_d: "Diferit",

    t5_title: "Recapitulare", t5_text: "Testează-ți cunoștințele!",
    t5_b1: "Interfază = copiere ADN.", t5_b2: "Mitoză = 2 celule identice.", t5_b3: "Cromozom = ADN împachetat.",
    t5_inst: "Cum se numește diviziunea celulelor corpului?", t5_gap_sentence2: "Corpul crește prin procesul de {gap}.",
    t5_c51: "mitoză", t5_c52: "digestie", t5_c53: "circulație",
    t5_q: "Ce sunt cromozomii?", t5_q_a: "Purtători ai eredității", t5_q_b: "Bacterii", t5_q_c: "Plante", t5_q_d: "Zahăr",
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
    svg: (lang) => <MitosisSvg lang={lang} />, // A kromoszóma szerkezete
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "chromatid",  x: 40, y: 30, label: "t2_area_chromatid" },
        { id: "centromere", x: 50, y: 55, label: "t2_area_centromere" },
        { id: "gene",       x: 60, y: 75, label: "t2_area_gene" },
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
    svg: (lang) => <MitosisSvg lang={lang} />, // Osztódási fázisok
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
      type: "drag-to-bucket",
      buckets: [
        { id: "igen", label: "t4_bucket_igen" },
        { id: "nem", label: "t4_bucket_nem" },
      ],
      items: [
        { text: "t4_item_i1", bucketId: "igen" },
        { text: "t4_item_n1", bucketId: "nem" },
        { text: "t4_item_i2", bucketId: "igen" },
        { text: "t4_item_n2", bucketId: "nem" },
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
  icon: "⚗️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const DivisionExplorer = memo(function DivisionExplorer({
  color = "#8B5CF6", // Violet-500
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
      explorerId="bio_k7_division" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default DivisionExplorer;
