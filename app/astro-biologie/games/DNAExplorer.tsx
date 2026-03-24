"use client";
// DNAExplorer.tsx — Bio Island i1: DNS & Genetika (K8)
// Topics: 1) DNS szerkezete 2) Nukleotidok 3) Bázispárok 4) Mendel törvényei 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { DNAHelixSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Nukleotid absztrakt ábrázolása */}
        <circle cx="-30" cy="0" r="15" fill="#F87171" /> {/* Foszfát */}
        <path d="M -15,0 L 15,0" stroke="#94A3B8" strokeWidth="2" />
        <rect x="15" y="-15" width="30" height="30" fill="#60A5FA" /> {/* Cukor */}
        <path d="M 45,0 L 75,0" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="75,-15 105,0 75,15" fill="#34D399" /> {/* Bázis */}
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" textAnchor="middle">🌱</text>
        <path d="M -15,0 L 15,0" stroke="#8B5CF6" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="50" y="10" fontSize="30" fontWeight="bold" fill="#7C3AED" textAnchor="middle">Aa</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "DNS és Genetika",
    // T1: DNS Szerkezete (Label-diagram)
    t1_title: "A kettős hélix",
    t1_text: "A DNS (dezoxiribonukleinsav) az élővilág tervrajza. Szerkezete egy megcsavart létrához hasonlít, ahol az oldalsó váz és a belső bázispárok szigorú rendben követik egymást.",
    t1_b1: "Cukor-foszfát váz: a molekula stabil oldalsó része.",
    t1_b2: "Nitrogéntartalmú bázisok: a kód hordozói a szálak között.",
    t1_b3: "Kettős hélix: a két szál egymás körüli csavarodása.",
    t1_inst: "Címkézd fel a DNS hélix részeit!",
    t1_area_backbone: "Cukor-foszfát váz",
    t1_area_basepair: "Bázispár",
    t1_area_helix: "Hélix szerkezet",
    t1_q: "Hogy nevezzük a DNS molekula jellegzetes, csavart alakját?",
    t1_q_a: "Kettős hélix", t1_q_b: "Sima kör", t1_q_c: "Háromszög", t1_q_d: "Kocka",

    // T2: Nukleotidok
    t2_title: "Az építőkövek: Nukleotidok",
    t2_text: "A DNS óriásmolekula kisebb egységekből, nukleotidokból épül fel. Minden nukleotid három részből áll.",
    t2_b1: "Foszfátcsoport: biztosítja a kapcsolódást a vázban.",
    t2_b2: "Dezoxiribóz: egy öt szénatomos cukormolekula.",
    t2_b3: "Bázis: Adenin (A), Timin (T), Citozin (C) vagy Guanin (G).",
    t2_inst: "Mi alkot egy nukleotidot? Válogasd össze!",
    t2_bucket_igen: "Nukleotid része",
    t2_bucket_nem: "Nem része",
    t2_item_n1: "Foszfátcsoport", t2_item_n2: "Cukor (Dezoxiribóz)", t2_item_n3: "Nitrogénbázis",
    t2_item_r1: "Klorofill", t2_item_r2: "Vérplazma",
    t2_q: "Hányféle nitrogéntartalmú bázis fordulhat elő a DNS-ben?",
    t2_q_a: "Négy", t2_q_b: "Kettő", t2_q_c: "Húsz", t2_q_d: "Végtelen",

    // T3: Bázispárok (Match-pairs)
    t3_title: "A bázispárosodás szabálya",
    t3_text: "A DNS két szála között a bázisok nem véletlenszerűen, hanem kiegészítő (komplementer) módon kapcsolódnak össze hidrogénkötésekkel.",
    t3_b1: "Az Adenin párja mindig a Timin (A-T).",
    t3_b2: "A Citozin párja mindig a Guanin (C-G).",
    t3_b3: "Ez a szabály teszi lehetővé a DNS pontos másolódását.",
    t3_inst: "Párosítsd össze a komplementer bázisokat!",
    t3_l1: "Adenin (A)", t3_r1: "Timin (T)",
    t3_l2: "Citozin (C)", t3_r2: "Guanin (G)",
    t3_l3: "Timin (T)", t3_r3: "Adenin (A)",
    t3_q: "Milyen kötés tartja össze a bázispárokat a két szál között?",
    t3_q_a: "Hidrogénkötés", t3_q_b: "Mágneses vonzás", t3_q_c: "Ragasztó", t3_q_d: "Nincs kötés",

    // T4: Mendel törvényei
    t4_title: "Az öröklődés atyja: Mendel",
    t4_text: "Gregor Mendel borsókísérleteivel fektette le a genetika alapjait. Rájött, hogy a tulajdonságok meghatározott szabályok szerint öröklődnek.",
    t4_b1: "Uniformitás törvénye: az első utódnemzedék (F1) minden egyede egyforma.",
    t4_b2: "Hasadás törvénye: a második nemzedékben (F2) megjelennek a szülői tulajdonságok.",
    t4_b3: "Domináns-recesszív öröklődés: az egyik gén elnyomhatja a másikat.",
    t4_inst: "Töltsd ki a hiányzó részt Mendelről!",
    t4_gap_sentence: "Mendel rájött, hogy a tulajdonságokat {gap} hordozzák az utódokba.",
    t4_c1: "gének", t4_c2: "vízcseppek", t4_c3: "szélviharok",
    t4_q: "Melyik növényt használta Mendel a híres kísérleteihez?",
    t4_q_a: "Borsót", t4_q_b: "Tölgyfát", t4_q_c: "Rózsát", t4_q_d: "Búzát",

    // T5: Review
    t5_title: "Genetikai összefoglaló",
    t5_text: "A genetika a biológia egyik leggyorsabban fejlődő ága, az orvostudománytól a mezőgazdaságig mindenhol jelen van.",
    t5_b1: "DNS = örökítőanyag kettős hélix szerkezettel.",
    t5_b2: "A-T és C-G bázispárok.",
    t5_b3: "Gének határozzák meg a tulajdonságainkat.",
    t5_inst: "Hogyan nevezzük a DNS egy-egy működési egységét?",
    t5_gap_sentence2: "A tulajdonságokat meghatározó DNS szakasz a {gap}.",
    t5_c51: "gén", t5_c52: "atom", t5_c53: "sejt",
    t5_q: "Mi a genetika tudományának fő tárgya?",
    t5_q_a: "Az öröklődés és a változatosság vizsgálata", t5_q_b: "A kövek osztályozása", t5_q_c: "A felhők mozgása", t5_q_d: "A csillagok fénye",
  },
  en: {
    explorer_title: "DNA and Genetics",
    t1_title: "The Double Helix", t1_text: "DNA is the blueprint of life. It looks like a twisted ladder with a backbone and base pairs.",
    t1_b1: "Sugar-phosphate backbone: the stable side of the molecule.", t1_b2: "Nitrogenous bases: carriers of the code.", t1_b3: "Double helix: the twisting of the two strands.",
    t1_inst: "Label the parts of the DNA helix!",
    t1_area_backbone: "Backbone", t1_area_basepair: "Base pair", t1_area_helix: "Helix structure",
    t1_q: "What is the shape of the DNA molecule?", t1_q_a: "Double helix", t1_q_b: "Circle", t1_q_c: "Cube", t1_q_d: "Star",

    t2_title: "Nucleotides", t2_text: "DNA is built from nucleotides. Each has three parts.",
    t2_b1: "Phosphate group: connects the backbone.", t2_b2: "Deoxyribose: a 5-carbon sugar.", t2_b3: "Base: A, T, C, or G.",
    t2_inst: "What makes up a nucleotide? Sort them!",
    t2_bucket_igen: "Part of nucleotide", t2_bucket_nem: "Not a part",
    t2_item_n1: "Phosphate", t2_item_n2: "Sugar", t2_item_n3: "Base",
    t2_item_r1: "Chlorophyll", t2_item_r2: "Plasma",
    t2_q: "How many types of nitrogenous bases are in DNA?", t2_q_a: "Four", t2_q_b: "Two", t2_q_c: "Twenty", t2_q_d: "Infinite",

    t3_title: "Base Pairing Rule", t3_text: "Bases connect in a specific way using hydrogen bonds.",
    t3_b1: "Adenine pairs with Thymine (A-T).", t3_b2: "Cytosine pairs with Guanine (C-G).", t3_b3: "This allows exact DNA replication.",
    t3_inst: "Match the complementary bases!",
    t3_l1: "Adenine (A)", t3_r1: "Thymine (T)",
    t3_l2: "Cytosine (C)", t3_r2: "Guanine (G)",
    t3_l3: "Thymine (T)", t3_r3: "Adenine (A)",
    t3_q: "What bond holds base pairs together?", t3_q_a: "Hydrogen bond", t3_q_b: "Magnetic", t3_q_c: "Glue", t3_q_d: "None",

    t4_title: "Mendel's Laws", t4_text: "Gregor Mendel founded genetics with his pea experiments.",
    t4_b1: "Law of Uniformity: F1 generation individuals are identical.", t4_b2: "Law of Segregation: parental traits reappear in F2.", t4_b3: "Dominant-recessive inheritance.",
    t4_inst: "Complete the sentence about Mendel!", t4_gap_sentence: "Mendel discovered that traits are carried by {gap}.",
    t4_c1: "genes", t4_c2: "water", t4_c3: "wind",
    t4_q: "Which plant did Mendel use for his experiments?", t4_q_a: "Pea", t4_q_b: "Oak", t4_q_c: "Rose", t4_q_d: "Wheat",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge of genetics basics!",
    t5_b1: "DNA = double helix.", t5_b2: "A-T and C-G pairing.", t5_b3: "Genes determine traits.",
    t5_inst: "What is a segment of DNA that codes for a trait?", t5_gap_sentence2: "The functional unit of DNA is a {gap}.",
    t5_c51: "gene", t5_c52: "atom", t5_c53: "cell",
    t5_q: "What is the main subject of genetics?", t5_q_a: "Heredity and variation", t5_q_b: "Rocks", t5_q_c: "Clouds", t5_q_d: "Stars",
  },
  de: {
    explorer_title: "DNA und Genetik",
    t1_title: "Die Doppelhelix", t1_text: "DNA ist der Bauplan des Lebens. Sie sieht aus wie eine verdrehte Strickleiter.",
    t1_b1: "Zucker-Phosphat-Rückgrat: der stabile äußere Teil.", t1_b2: "Stickstoffbasen: Träger des Codes.", t1_b3: "Doppelhelix: die Windung der zwei Stränge.",
    t1_inst: "Beschrifte die DNA-Teile!",
    t1_area_backbone: "Rückgrat", t1_area_basepair: "Basenpaar", t1_area_helix: "Helix-Struktur",
    t1_q: "Welche Form hat das DNA-Molekül?", t1_q_a: "Doppelhelix", t1_q_b: "Kreis", t1_q_c: "Würfel", t1_q_d: "Stern",

    t2_title: "Nukleotide", t2_text: "DNA besteht aus Nukleotiden. Jedes hat drei Teile.",
    t2_b1: "Phosphatgruppe: verbindet das Rückgrat.", t2_b2: "Desoxyribose: ein Zucker.", t2_b3: "Base: A, T, C oder G.",
    t2_inst: "Was bildet ein Nukleotid? Sortiere!",
    t2_bucket_igen: "Teil des Nukleotids", t2_bucket_nem: "Kein Teil",
    t2_item_n1: "Phosphat", t2_item_n2: "Zucker", t2_item_n3: "Base",
    t2_item_r1: "Chlorophyll", t2_item_r2: "Plasma",
    t2_q: "Wie viele Basentypen gibt es in der DNA?", t2_q_a: "Vier", t2_q_b: "Zwei", t2_q_c: "Zwanzig", t2_q_d: "Unendlich",

    t3_title: "Basenpaarungsregel", t3_text: "Basen binden sich über Wasserstoffbrücken.",
    t3_b1: "Adenin paart mit Thymin (A-T).", t3_b2: "Cytosin paart mit Guanin (C-G).", t3_b3: "Ermöglicht exakte Replikation.",
    t3_inst: "Verbinde die Basenpaare!",
    t3_l1: "Adenin (A)", t3_r1: "Thymin (T)",
    t3_l2: "Cytosin (C)", t3_r2: "Guanin (G)",
    t3_l3: "Thymin (T)", t3_r3: "Adenin (A)",
    t3_q: "Welche Bindung hält Basenpaare zusammen?", t3_q_a: "Wasserstoffbrücke", t3_q_b: "Magnetismus", t3_q_c: "Kleber", t3_q_d: "Keine",

    t4_title: "Mendelsche Regeln", t4_text: "Gregor Mendel begründete die Genetik mit Erbsenversuchen.",
    t4_b1: "Uniformitätsregel: F1-Generation ist gleich.", t4_b2: "Spaltungsregel: Merkmale spalten sich in F2 auf.", t4_b3: "Dominant-rezessive Vererbung.",
    t4_inst: "Ergänze den Satz über Mendel!", t4_gap_sentence: "Mendel erkannte, dass Merkmale durch {gap} vererbt werden.",
    t4_c1: "Gene", t4_c2: "Wasser", t4_c3: "Wind",
    t4_q: "Welche Pflanze nutzte Mendel?", t4_q_a: "Erbse", t4_q_b: "Eiche", t4_q_c: "Rose", t4_q_d: "Weizen",

    t5_title: "Zusammenfassung", t5_text: "Teste dein Wissen!",
    t5_b1: "DNA = Doppelhelix.", t5_b2: "A-T und C-G Paarung.", t5_b3: "Gene bestimmen Merkmale.",
    t5_inst: "Wie nennt man einen DNA-Abschnitt?", t5_gap_sentence2: "Die Funktionseinheit der DNA ist das {gap}.",
    t5_c51: "Gen", t5_c52: "Atom", t5_c53: "Zelle",
    t5_q: "Was ist das Hauptthema der Genetik?", t5_q_a: "Vererbung und Variabilität", t5_q_b: "Steine", t5_q_c: "Wolken", t5_q_d: "Sterne",
  },
  ro: {
    explorer_title: "ADN și Genetică",
    t1_title: "Dublul Helix", t1_text: "ADN-ul este planul vieții. Arată ca o scară răsucită.",
    t1_b1: "Cadru zahăr-fosfat: partea stabilă.", t1_b2: "Baze azotate: purtătoarele codului.", t1_b3: "Dublu helix: răsucirea firelor.",
    t1_inst: "Etichetează părțile helixului ADN!",
    t1_area_backbone: "Cadru", t1_area_basepair: "Pereche de baze", t1_area_helix: "Structură helix",
    t1_q: "Ce formă are molecula de ADN?", t1_q_a: "Dublu helix", t1_q_b: "Cerc", t1_q_c: "Cub", t1_q_d: "Stea",

    t2_title: "Nucleotide", t2_text: "ADN-ul este format din nucleotide. Fiecare are trei părți.",
    t2_b1: "Grup fosfat: conectează cadrul.", t2_b2: "Dezoxiriboză: un zahăr.", t2_b3: "Bază: A, T, C sau G.",
    t2_inst: "Ce formează un nucleotid? Sortează!",
    t2_bucket_igen: "Parte din nucleotid", t2_bucket_nem: "Nu face parte",
    t2_item_n1: "Fosfat", t2_item_n2: "Zahăr", t2_item_n3: "Bază",
    t2_item_r1: "Clorofilă", t2_item_r2: "Plasmă",
    t2_q: "Câte tipuri de baze azotate sunt în ADN?", t2_q_a: "Patru", t2_q_b: "Două", t2_q_c: "Douăzeci", t2_q_d: "Infinit",

    t3_title: "Regula perechilor de baze", t3_text: "Bazele se leagă prin punți de hidrogen.",
    t3_b1: "Adenina se leagă cu Timina (A-T).", t3_b2: "Citozina se leagă cu Guanina (C-G).", t3_b3: "Permite replicarea exactă.",
    t3_inst: "Potrivește bazele complementare!",
    t3_l1: "Adenină (A)", t3_r1: "Timină (T)",
    t3_l2: "Citozină (C)", t3_r2: "Guanină (G)",
    t3_l3: "Timină (T)", t3_r3: "Adenină (A)",
    t3_q: "Ce legătură ține perechile de baze unite?", t3_q_a: "Legătură de hidrogen", t3_q_b: "Magnetism", t3_q_c: "Lipici", t3_q_d: "Niciuna",

    t4_title: "Legile lui Mendel", t4_text: "Gregor Mendel a pus bazele geneticii cu experimentele pe mazăre.",
    t4_b1: "Legea uniformității: prima generație (F1) este identică.", t4_b2: "Legea segregării: trăsăturile reapar în F2.", t4_b3: "Moștenire dominant-recesivă.",
    t4_inst: "Completează fraza despre Mendel!", t4_gap_sentence: "Mendel a descoperit că trăsăturile sunt purtate de {gap}.",
    t4_c1: "gene", t4_c2: "apă", t4_c3: "vânt",
    t4_q: "Ce plantă a folosit Mendel?", t4_q_a: "Mazăre", t4_q_b: "Stejar", t4_q_c: "Trandafir", t4_q_d: "Grâu",

    t5_title: "Recapitulare", t5_text: "Testează-ți cunoștințele!",
    t5_b1: "ADN = dublu helix.", t5_b2: "Perechi A-T și C-G.", t5_b3: "Genele determină trăsăturile.",
    t5_inst: "Cum numim o unitate funcțională de ADN?", t5_gap_sentence2: "Secvența de ADN care codifică o trăsătură este o {gap}.",
    t5_c51: "genă", t5_c52: "atom", t5_c53: "celulă",
    t5_q: "Care este subiectul principal al geneticii?", t5_q_a: "Ereditatea și variabilitatea", t5_q_b: "Pietrele", t5_q_c: "Norii", t5_q_d: "Stelele",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <DNAHelixSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "backbone", x: 20, y: 50, label: "t1_area_backbone" },
        { id: "basepair", x: 50, y: 48, label: "t1_area_basepair" },
        { id: "helix",    x: 80, y: 50, label: "t1_area_helix" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "igen", label: "t2_bucket_igen" },
        { id: "nem", label: "t2_bucket_nem" },
      ],
      items: [
        { text: "t2_item_n1", bucketId: "igen" },
        { text: "t2_item_r1", bucketId: "nem" },
        { text: "t2_item_n2", bucketId: "igen" },
        { text: "t2_item_r2", bucketId: "nem" },
        { text: "t2_item_n3", bucketId: "igen" },
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
    svg: (lang) => <DNAHelixSvg lang={lang} />,
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
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
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const DNAExplorer = memo(function DNAExplorer({
  color = "#2563EB", // Blue-600 a tudomány és genetika színe
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
      grade={8} 
      explorerId="bio_k8_dna_genetics" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default DNAExplorer;
