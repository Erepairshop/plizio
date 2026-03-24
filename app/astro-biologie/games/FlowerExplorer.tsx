"use client";
// FlowerExplorer.tsx — Bio Island i5: Virág és Szaporodás (K5)
// Topics: 1) Virág részei 2) Beporzás 3) Magképzés 4) Termések 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { FlowerPartsSvg, PollinationSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🌸</text>
        <path d="M -15,0 L 15,0" stroke="#DB2777" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="40" y="15" fontSize="40" textAnchor="middle">🌰</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-35" y="15" fontSize="40" textAnchor="middle">🍎</text>
        <text x="0" y="15" fontSize="40" textAnchor="middle">🍒</text>
        <text x="35" y="15" fontSize="40" textAnchor="middle">🥜</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌺</text>
        <text x="20" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Virág és Szaporodás",
    // T1: Virág részei
    t1_title: "A virág részei",
    t1_text: "A virág a növény szaporítószerve. A színes sziromlevelek csalogatják a rovarokat. A porzó a hím ivarszerv, a termő pedig a női ivarszerv.",
    t1_b1: "Sziromlevél: színes, illatos rovarcsalogató.",
    t1_b2: "Porzó: itt termelődik a virágpor.",
    t1_b3: "Termő: aljában található a magház a magkezdeményekkel.",
    t1_inst: "Hol termelődik a virágpor?",
    t1_gap_sentence: "A virágpor a virág {gap} termelődik.",
    t1_c1: "porzójában", t1_c2: "termőjében", t1_c3: "gyökerében",
    t1_q: "Mi a sziromlevelek fő feladata?",
    t1_q_a: "A rovarok odacsalogatása", t1_q_b: "A víz felszívása", t1_q_c: "A növény rögzítése", t1_q_d: "A fotoszintézis",

    // T2: Beporzás
    t2_title: "A beporzás",
    t2_text: "A beporzás (megporzás) az a folyamat, amikor a virágpor a porzóról a termő bibéjére jut. Ezt leggyakrabban rovarok vagy a szél végzik.",
    t2_b1: "Rovarmegporzás: a méhek nektárt gyűjtenek, közben virágport visznek át.",
    t2_b2: "Szélmegporzás: a szél fújja át a könnyű virágport (pl. fűfélék, fák).",
    t2_b3: "A sikeres beporzás a magképzés feltétele.",
    t2_inst: "Tedd sorba a beporzás lépését leíró szavákat!",
    t2_w1: "A", t2_w2: "rovarok", t2_w3: "virágport", t2_w4: "visznek", t2_w5: "a", t2_w6: "bibére.",
    t2_q: "Mi vonzza a méheket a virágokhoz a színeken kívül?",
    t2_q_a: "A nektár és az illat", t2_q_b: "A levelek árnyéka", t2_q_c: "A tövisek", t2_q_d: "A gyökerek",

    // T3: Magképzés
    t3_title: "Megtermékenyítés és magképzés",
    t3_text: "Miután a virágpor a bibére jutott, egy pollentömlőt növeszt a magházig. Ott a hímivarsejt egyesül a petesejttel – ez a megtermékenyítés. Ebből fejlődik ki a mag.",
    t3_b1: "A magkezdeményből mag lesz.",
    t3_b2: "A mag rejti az új növény embrióját.",
    t3_b3: "A magházból pedig kialakul a termés.",
    t3_inst: "Párosítsd a virág részeit azzal, amivé fejlődnek!",
    t3_l1: "Magkezdemény", t3_r1: "Mag",
    t3_l2: "Magház", t3_r2: "Termés",
    t3_l3: "Petesejt + hímivarsejt", t3_r3: "Növényi embrió (csíra)",
    t3_q: "Mivé fejlődik a magkezdemény a megtermékenyítés után?",
    t3_q_a: "Maggá", t3_q_b: "Sziromlevéllé", t3_q_c: "Gyökérré", t3_q_d: "Szárrá",

    // T4: Termések
    t4_title: "A termések világa",
    t4_text: "A termés feladata a magok védelme és elterjesztése. Két fő típusa van: a húsos és a száraz termés.",
    t4_b1: "Húsos termés: lédús, az állatok megeszik (pl. alma, cseresznye).",
    t4_b2: "Száraz termés: kemény vagy papírszerű héj (pl. dió, mogyoró, mák).",
    t4_b3: "A magokat a szél, víz vagy állatok terjesztik.",
    t4_inst: "Húsos vagy száraz termés? Válogasd szét!",
    t4_bucket_hus: "Húsos termés",
    t4_bucket_sza: "Száraz termés",
    t4_item_h1: "Alma", t4_item_h2: "Cseresznye",
    t4_item_s1: "Dió", t4_item_s2: "Mogyoró",
    t4_q: "Mi a termés fő biológiai feladata?",
    t4_q_a: "A magok védelme és terjesztése", t4_q_b: "A növény rögzítése", t4_q_c: "A fotoszintézis", t4_q_d: "Víz felszívása",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a virágokról és a szaporodásról!",
    t5_b1: "Porzó = hím, Termő = női ivarszerv.",
    t5_b2: "Beporzás -> Megtermékenyítés -> Mag -> Termés.",
    t5_b3: "A termés védi és terjeszti a magot.",
    t5_inst: "Mi fejlődik a magházból?",
    t5_gap_sentence2: "A virágzás és megtermékenyítés után a magházból {gap} fejlődik.",
    t5_c51: "termés", t5_c52: "levél", t5_c53: "gyökér",
    t5_q: "Melyik állítás IGAZ a beporzásra?",
    t5_q_a: "A virágpor a porzóról a termő bibéjére jut.", t5_q_b: "A sziromlevelek lehullanak.", t5_q_c: "A gyökér vizet szív fel.", t5_q_d: "A mag kicsírázik.",
  },
  en: {
    explorer_title: "Flowers and Reproduction",
    t1_title: "Parts of a Flower", t1_text: "The flower is the reproductive organ of the plant. Colorful petals attract insects. The stamen is the male part, and the pistil is the female part.",
    t1_b1: "Petal: colorful and fragrant to attract insects.", t1_b2: "Stamen: produces pollen.", t1_b3: "Pistil: contains the ovary with ovules at its base.",
    t1_inst: "Where is pollen produced?", t1_gap_sentence: "Pollen is produced in the {gap} of the flower.",
    t1_c1: "stamen", t1_c2: "pistil", t1_c3: "root",
    t1_q: "What is the main function of the petals?", t1_q_a: "To attract insects", t1_q_b: "To absorb water", t1_q_c: "To anchor the plant", t1_q_d: "To photosynthesize",

    t2_title: "Pollination", t2_text: "Pollination is the process where pollen is transferred from the stamen to the stigma of the pistil. This is usually done by insects or the wind.",
    t2_b1: "Insect pollination: bees collect nectar and transfer pollen.", t2_b2: "Wind pollination: the wind blows light pollen (e.g., grasses, trees).", t2_b3: "Successful pollination is needed to make seeds.",
    t2_inst: "Put the words describing pollination in order!",
    t2_w1: "Insects", t2_w2: "carry", t2_w3: "pollen", t2_w4: "to", t2_w5: "the", t2_w6: "stigma.",
    t2_q: "What attracts bees to flowers besides their colors?", t2_q_a: "Nectar and scent", t2_q_b: "The shade of leaves", t2_q_c: "Thorns", t2_q_d: "Roots",

    t3_title: "Fertilization and Seed Formation", t3_text: "After pollen lands on the stigma, it grows a tube down to the ovary. There, the male cell joins the egg cell – this is fertilization. A seed develops from this.",
    t3_b1: "The ovule becomes the seed.", t3_b2: "The seed hides the embryo of the new plant.", t3_b3: "The ovary develops into the fruit.",
    t3_inst: "Match the flower parts with what they become!",
    t3_l1: "Ovule", t3_r1: "Seed", t3_l2: "Ovary", t3_r2: "Fruit", t3_l3: "Egg cell + male cell", t3_r3: "Plant embryo",
    t3_q: "What does the ovule develop into after fertilization?", t3_q_a: "A seed", t3_q_b: "A petal", t3_q_c: "A root", t3_q_d: "A stem",

    t4_title: "The World of Fruits", t4_text: "The purpose of the fruit is to protect and disperse the seeds. There are two main types: fleshy and dry fruits.",
    t4_b1: "Fleshy fruit: juicy, eaten by animals (e.g., apple, cherry).", t4_b2: "Dry fruit: hard or papery shell (e.g., walnut, hazelnut).", t4_b3: "Seeds are dispersed by wind, water, or animals.",
    t4_inst: "Fleshy or dry fruit? Sort them!",
    t4_bucket_hus: "Fleshy fruit", t4_bucket_sza: "Dry fruit",
    t4_item_h1: "Apple", t4_item_h2: "Cherry", t4_item_s1: "Walnut", t4_item_s2: "Hazelnut",
    t4_q: "What is the main biological function of a fruit?", t4_q_a: "To protect and disperse seeds", t4_q_b: "To anchor the plant", t4_q_c: "To perform photosynthesis", t4_q_d: "To absorb water",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about flowers and reproduction!",
    t5_b1: "Stamen = male, Pistil = female.", t5_b2: "Pollination -> Fertilization -> Seed -> Fruit.", t5_b3: "The fruit protects and spreads the seed.",
    t5_inst: "What develops from the ovary?", t5_gap_sentence2: "After flowering and fertilization, the ovary develops into a {gap}.",
    t5_c51: "fruit", t5_c52: "leaf", t5_c53: "root",
    t5_q: "Which statement is TRUE about pollination?", t5_q_a: "Pollen is transferred from the stamen to the stigma.", t5_q_b: "The petals fall off.", t5_q_c: "The root absorbs water.", t5_q_d: "The seed sprouts.",
  },
  de: {
    explorer_title: "Blüten und Fortpflanzung",
    t1_title: "Teile einer Blüte", t1_text: "Die Blüte ist das Fortpflanzungsorgan der Pflanze. Bunte Kronblätter locken Insekten an. Das Staubblatt ist der männliche Teil, der Stempel der weibliche.",
    t1_b1: "Kronblatt: bunt und duftend, lockt Insekten an.", t1_b2: "Staubblatt: hier wird der Pollen (Blütenstaub) gebildet.", t1_b3: "Stempel: enthält den Fruchtknoten mit den Samenanlagen.",
    t1_inst: "Wo wird der Blütenstaub gebildet?", t1_gap_sentence: "Der Pollen wird im {gap} gebildet.",
    t1_c1: "Staubblatt", t1_c2: "Stempel", t1_c3: "Wurzel",
    t1_q: "Was ist die Hauptaufgabe der Kronblätter?", t1_q_a: "Insekten anzulocken", t1_q_b: "Wasser aufzusaugen", t1_q_c: "Die Pflanze zu verankern", t1_q_d: "Fotosynthese zu betreiben",

    t2_title: "Die Bestäubung", t2_text: "Bestäubung ist der Vorgang, bei dem Pollen vom Staubblatt auf die Narbe des Stempels gelangt. Das passiert meist durch Insekten oder den Wind.",
    t2_b1: "Insektenbestäubung: Bienen sammeln Nektar und übertragen Pollen.", t2_b2: "Windbestäubung: Der Wind weht leichten Pollen (z.B. Gräser, Bäume).", t2_b3: "Erfolgreiche Bestäubung ist nötig für die Samenbildung.",
    t2_inst: "Bringe die Wörter zur Bestäubung in die richtige Reihenfolge!",
    t2_w1: "Insekten", t2_w2: "tragen", t2_w3: "den", t2_w4: "Pollen", t2_w5: "zur", t2_w6: "Narbe.",
    t2_q: "Was lockt Bienen neben den Farben noch zu den Blüten?", t2_q_a: "Nektar und Duft", t2_q_b: "Der Schatten der Blätter", t2_q_c: "Dornen", t2_q_d: "Wurzeln",

    t3_title: "Befruchtung und Samenbildung", t3_text: "Landet der Pollen auf der Narbe, wächst ein Pollenschlauch zum Fruchtknoten. Dort verschmilzt die männliche Zelle mit der Eizelle – die Befruchtung. Daraus entsteht der Same.",
    t3_b1: "Aus der Samenanlage wird der Same.", t3_b2: "Der Same enthält den Embryo der neuen Pflanze.", t3_b3: "Aus dem Fruchtknoten entwickelt sich die Frucht.",
    t3_inst: "Verbinde die Blütenteile damit, zu was sie sich entwickeln!",
    t3_l1: "Samenanlage", t3_r1: "Same", t3_l2: "Fruchtknoten", t3_r2: "Frucht", t3_l3: "Eizelle + männl. Zelle", t3_r3: "Pflanzenembryo",
    t3_q: "Wozu entwickelt sich die Samenanlage nach der Befruchtung?", t3_q_a: "Zu einem Samen", t3_q_b: "Zu einem Kronblatt", t3_q_c: "Zu einer Wurzel", t3_q_d: "Zu einem Stängel",

    t4_title: "Die Welt der Früchte", t4_text: "Die Frucht schützt den Samen und hilft bei seiner Verbreitung. Es gibt zwei Hauptarten: fleischige Früchte und Trockenfrüchte.",
    t4_b1: "Fleischige Frucht: saftig, wird von Tieren gefressen (z.B. Apfel, Kirsche).", t4_b2: "Trockenfrucht: harte oder papierartige Schale (z.B. Walnuss, Haselnuss).", t4_b3: "Samen werden durch Wind, Wasser oder Tiere verbreitet.",
    t4_inst: "Fleischig oder trocken? Sortiere die Früchte!",
    t4_bucket_hus: "Fleischige Frucht", t4_bucket_sza: "Trockenfrucht",
    t4_item_h1: "Apfel", t4_item_h2: "Kirsche", t4_item_s1: "Walnuss", t4_item_s2: "Haselnuss",
    t4_q: "Was ist die wichtigste biologische Aufgabe einer Frucht?", t4_q_a: "Schutz und Verbreitung der Samen", t4_q_b: "Verankerung der Pflanze", t4_q_c: "Fotosynthese", t4_q_d: "Wasseraufnahme",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Blüten und Fortpflanzung!",
    t5_b1: "Staubblatt = männlich, Stempel = weiblich.", t5_b2: "Bestäubung -> Befruchtung -> Same -> Frucht.", t5_b3: "Die Frucht schützt und verbreitet den Samen.",
    t5_inst: "Was entsteht aus dem Fruchtknoten?", t5_gap_sentence2: "Nach Blüte und Befruchtung entwickelt sich aus dem Fruchtknoten die {gap}.",
    t5_c51: "Frucht", t5_c52: "Blatt", t5_c53: "Wurzel",
    t5_q: "Welche Aussage über die Bestäubung ist WAHR?", t5_q_a: "Pollen gelangt vom Staubblatt auf die Narbe.", t5_q_b: "Die Kronblätter fallen ab.", t5_q_c: "Die Wurzel saugt Wasser auf.", t5_q_d: "Der Same keimt.",
  },
  ro: {
    explorer_title: "Flori și Reproducere",
    t1_title: "Părțile unei Flori", t1_text: "Floarea este organul de reproducere al plantei. Petalele colorate atrag insectele. Staminul este partea masculină, iar pistilul este partea feminină.",
    t1_b1: "Petala: colorată și parfumată, atrage insectele.", t1_b2: "Stamina: aici se produce polenul.", t1_b3: "Pistilul: conține ovarul cu ovulele la bază.",
    t1_inst: "Unde este produs polenul?", t1_gap_sentence: "Polenul este produs în {gap} florii.",
    t1_c1: "stamina", t1_c2: "pistilul", t1_c3: "rădăcina",
    t1_q: "Care este funcția principală a petalelor?", t1_q_a: "Să atragă insectele", t1_q_b: "Să absoarbă apa", t1_q_c: "Să fixeze planta", t1_q_d: "Să facă fotosinteză",

    t2_title: "Polenizarea", t2_text: "Polenizarea este procesul prin care polenul este transferat de pe stamină pe stigmatul pistilului. Acest lucru este făcut de obicei de insecte sau vânt.",
    t2_b1: "Polenizare prin insecte: albinele adună nectar și transferă polen.", t2_b2: "Polenizare prin vânt: vântul suflă polenul ușor (ex. ierburi, arbori).", t2_b3: "Polenizarea reușită este necesară pentru a face semințe.",
    t2_inst: "Pune cuvintele care descriu polenizarea în ordine!",
    t2_w1: "Insectele", t2_w2: "duc", t2_w3: "polenul", t2_w4: "către", t2_w5: "stigmat.", t2_w6: "",
    t2_q: "Ce atrage albinele la flori pe lângă culorile lor?", t2_q_a: "Nectarul și parfumul", t2_q_b: "Umbra frunzelor", t2_q_c: "Spinii", t2_q_d: "Rădăcinile",

    t3_title: "Fecundarea și Formarea Semințelor", t3_text: "După ce polenul ajunge pe stigmat, îi crește un tub până la ovar. Acolo, celula masculină se unește cu ovulul – aceasta este fecundarea. De aici se dezvoltă sămânța.",
    t3_b1: "Ovulul devine sămânță.", t3_b2: "Sămânța ascunde embrionul noii plante.", t3_b3: "Ovarul se dezvoltă în fruct.",
    t3_inst: "Potrivește părțile florii cu ceea ce devin ele!",
    t3_l1: "Ovul", t3_r1: "Sămânță", t3_l2: "Ovar", t3_r2: "Fruct", t3_l3: "Celula ou + celula masculină", t3_r3: "Embrionul plantei",
    t3_q: "În ce se transformă ovulul după fecundare?", t3_q_a: "Într-o sămânță", t3_q_b: "Într-o petală", t3_q_c: "Într-o rădăcină", t3_q_d: "Într-o tulpină",

    t4_title: "Lumea Fructelor", t4_text: "Scopul fructului este de a proteja și a răspândi semințele. Există două tipuri principale: fructe cărnoase și fructe uscate.",
    t4_b1: "Fructe cărnoase: zemoase, mâncate de animale (ex. măr, cireașă).", t4_b2: "Fructe uscate: coajă tare sau ca hârtia (ex. nucă, alună).", t4_b3: "Semințele sunt răspândite de vânt, apă sau animale.",
    t4_inst: "Fruct cărnos sau uscat? Sortează-le!",
    t4_bucket_hus: "Fruct cărnos", t4_bucket_sza: "Fruct uscat",
    t4_item_h1: "Măr", t4_item_h2: "Cireașă", t4_item_s1: "Nucă", t4_item_s2: "Alună",
    t4_q: "Care este principala funcție biologică a unui fruct?", t4_q_a: "Protejarea și răspândirea semințelor", t4_q_b: "Fixarea plantei", t4_q_c: "Fotosinteza", t4_q_d: "Absorbția apei",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre flori și reproducere!",
    t5_b1: "Stamină = masculin, Pistil = feminin.", t5_b2: "Polenizare -> Fecundare -> Sămânță -> Fruct.", t5_b3: "Fructul protejează și răspândește sămânța.",
    t5_inst: "Ce se dezvoltă din ovar?", t5_gap_sentence2: "După înflorire și fecundare, ovarul se dezvoltă într-un {gap}.",
    t5_c51: "fruct", t5_c52: "frunză", t5_c53: "rădăcină",
    t5_q: "Care afirmație este ADEVĂRATĂ despre polenizare?", t5_q_a: "Polenul este transferat de pe stamină pe stigmat.", t5_q_b: "Petalele cad.", t5_q_c: "Rădăcina absoarbe apa.", t5_q_d: "Sămânța încolțește.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <FlowerPartsSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <PollinationSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
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
      type: "drag-to-bucket",
      buckets: [
        { id: "hus", label: "t4_bucket_hus" },
        { id: "sza", label: "t4_bucket_sza" },
      ],
      items: [
        { text: "t4_item_h1", bucketId: "hus" },
        { text: "t4_item_s1", bucketId: "sza" },
        { text: "t4_item_h2", bucketId: "hus" },
        { text: "t4_item_s2", bucketId: "sza" },
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
  icon: "🌸",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const FlowerExplorer = memo(function FlowerExplorer({
  color = "#DB2777", // Rózsaszín árnyalat a virágokhoz
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
      explorerId="bio_k5_flowers" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default FlowerExplorer;
