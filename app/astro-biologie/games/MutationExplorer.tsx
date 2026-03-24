"use client";
// MutationExplorer.tsx — Bio Island i2: Mutáció & Géntechnika (K8)
// Topics: 1) Mutáció típusok 2) Géntechnológia 3) Genetikai tanácsadás 4) Környezeti hatások 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { DNAHelixSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🌽</text>
        <path d="M -10,0 L 10,0" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="30" y="15" fontSize="35" textAnchor="middle">⚙️</text>
        <text x="60" y="15" fontSize="30" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🩺</text>
        <text x="40" y="15" fontSize="40" textAnchor="middle">👨‍👩‍👧</text>
        <circle cx="0" cy="-20" r="20" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="-13" fontSize="20" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="0" fontSize="40" textAnchor="middle">☀️</text>
        <path d="M -20,-10 L 20,10" stroke="#EA580C" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="40" y="20" fontSize="30" textAnchor="middle">🧬</text>
        <text x="55" y="0" fontSize="25" textAnchor="middle">⚠️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mutáció és Géntechnika",
    // T1: Mutáció típusok (Drag-to-bucket)
    t1_title: "Hiba a kódban: A mutáció",
    t1_text: "A mutáció a DNS szerkezetének hirtelen, maradandó megváltozása. Ez érinthet csupán egyetlen bázist, vagy akár egész kromoszómaszakaszokat is.",
    t1_b1: "Pontmutáció: egyetlen bázis kicserélődése (pl. A helyett C).",
    t1_b2: "Kromoszóma-mutáció: nagy szakaszok törlése vagy megduplázódása.",
    t1_b3: "A mutációk lehetnek károsak, közömbösek vagy ritkán hasznosak.",
    t1_inst: "Pontmutáció vagy Kromoszóma-mutáció? Válogasd szét a példákat!",
    t1_bucket_pont: "Pontmutáció",
    t1_bucket_kromo: "Kromoszóma-mutáció",
    t1_item_p1: "Egy bázis csere", t1_item_p2: "Betűhiba a DNS-ben",
    t1_item_k1: "Szakaszvesztés", t1_item_k2: "Megduplázott génsor",
    t1_q: "Mi a mutáció definíciója?",
    t1_q_a: "A DNS tartós megváltozása", t1_q_b: "A DNS ideiglenes lehűlése", t1_q_c: "A sejtplazma mozgása", t1_q_d: "A növények öntözése",

    // T2: Géntechnológia (Match-pairs)
    t2_title: "Géntechnológia és GMO",
    t2_text: "A géntechnológia során a tudósok célzottan változtatják meg az élőlények DNS-ét, hogy hasznos tulajdonságokat érjenek el.",
    t2_b1: "GMO: Genetikailag Módosított Organizmus.",
    t2_b2: "Alkalmazás: kártevőnek ellenálló növények, gyógyszertermelés.",
    t2_b3: "Bioetika: fontos kérdés, hogyan és mire szabad használni a technológiát.",
    t2_inst: "Párosítsd a fogalmat a jelentésével!",
    t2_l1: "GMO", t2_r1: "Módosított élőlény",
    t2_l2: "Génsebészet", t2_r2: "DNS darabolás és ragasztás",
    t2_l3: "Inzulin gyártás", t2_r3: "Baktériumokba ültetett emberi gén",
    t2_q: "Mit jelent a GMO rövidítés?",
    t2_q_a: "Genetikailag Módosított Organizmus", t2_q_b: "Gyorsan Mozgó Osztódás", t2_q_c: "Géntechnológiai Magas Osztály", t2_q_d: "Gyakori Mutációs Ok",

    // T3: Genetikai tanácsadás (Gap-fill)
    t3_title: "Genetikai tanácsadás",
    t3_text: "A genetikai tanácsadás segít a családoknak megérteni az öröklődő betegségek kockázatát, és felkészülni a jövőre.",
    t3_b1: "Családfaelemzés: a betegségek előfordulásának követése a rokonoknál.",
    t3_b2: "Kromoszómavizsgálat: a szerkezet és a szám ellenőrzése.",
    t3_b3: "Segít a megelőzésben és a korai diagnózisban.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "A genetikai tanácsadás célja az {gap} betegségek kockázatának kiszámítása.",
    t3_c1: "öröklődő", t3_c2: "fertőző", t3_c3: "gyógyíthatatlan",
    t3_q: "Milyen módszerrel vizsgálják a felmenők betegségeit?",
    t3_q_a: "Családfaelemzéssel", t3_q_b: "Vérnyomásméréssel", t3_q_c: "Látásvizsgálattal", t3_q_d: "Röntgennel",

    // T4: Környezeti hatások (Word-order)
    t4_title: "Mutagén hatások",
    t4_text: "A mutációk egy része véletlen, de sok környezeti tényező (mutagének) jelentősen növelheti a DNS-hibák számát.",
    t4_b1: "Fizikai: UV-sugárzás, röntgensugárzás, radioaktivitás.",
    t4_b2: "Kémiai: dohányfüst, vegyszerek, tartósítószerek.",
    t4_b3: "Biológiai: bizonyos vírusok is károsíthatják a DNS-t.",
    t4_inst: "Tedd sorba a folyamatot (Ok -> Következmény)!",
    t4_w1: "Mutagén hatás", t4_w2: "DNS sérülés", t4_w3: "Hibás fehérje", t4_w4: "Betegség",
    t4_q: "Melyik sugárzás okozhat bőrrákot a DNS károsításával?",
    t4_q_a: "UV-sugárzás", t4_q_b: "Infravörös fény", t4_q_c: "Látható fény", t4_q_d: "Rádióhullámok",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Mennyire ismered a genetika modern eszközeit és veszélyeit?",
    t5_b1: "Mutáció = hiba a bázissorrendben.",
    t5_b2: "Géntechnika = célzott DNS módosítás.",
    t5_b3: "Mutagének = DNS károsító tényezők.",
    t5_inst: "Hogy hívjuk a nagy mennyiségű DNS-károsodást okozó anyagokat?",
    t5_gap_sentence2: "A környezetünkben lévő {gap} növelik a mutációk esélyét.",
    t5_c51: "mutagének", t5_c52: "vitaminok", t5_c53: "cukrok",
    t5_q: "Melyik állítás IGAZ a pontmutációra?",
    t5_q_a: "Csak egyetlen bázist érint a DNS-ben.", t5_q_b: "Egész szerveket tüntet el.", t5_q_c: "Mindig hasznos a szervezetnek.", t5_q_d: "Nem öröklődhet tovább.",
  },
  en: {
    explorer_title: "Mutation & Gene Tech",
    t1_title: "Errors in the Code: Mutation", t1_text: "A mutation is a sudden, permanent change in DNA structure. It can affect a single base or entire chromosome segments.",
    t1_b1: "Point mutation: replacement of a single base (e.g., A to C).", t1_b2: "Chromosome mutation: deletion or duplication of large segments.", t1_b3: "Mutations can be harmful, neutral, or rarely beneficial.",
    t1_inst: "Point or Chromosome mutation? Sort them!",
    t1_bucket_pont: "Point Mutation", t1_bucket_kromo: "Chromosome Mutation",
    t1_item_p1: "Single base swap", t1_item_p2: "Typos in DNA",
    t1_item_k1: "Segment loss", t1_item_k2: "Duplicated gene sequence",
    t1_q: "What is the definition of mutation?", t1_q_a: "Permanent change in DNA", t1_q_b: "Temporary cooling of DNA", t1_q_c: "Cytoplasm movement", t1_q_d: "Watering plants",

    t2_title: "Genetic Engineering & GMO", t2_text: "In genetic engineering, scientists purposefully change organisms' DNA to achieve useful traits.",
    t2_b1: "GMO: Genetically Modified Organism.", t2_b2: "Application: pest-resistant plants, medicine production.", t2_b3: "Bioethics: how and for what should we use this tech?",
    t2_inst: "Match the concept to its meaning!",
    t2_l1: "GMO", t2_r1: "Modified organism",
    t2_l2: "Genetic surgery", t2_r2: "Cutting and pasting DNA",
    t2_l3: "Insulin production", t2_r3: "Human gene in bacteria",
    t2_q: "What does GMO stand for?", t2_q_a: "Genetically Modified Organism", t2_q_b: "Great Mutation Order", t2_q_c: "General Medical Organization", t2_q_d: "Growth Molecule Unit",

    t3_title: "Genetic Counseling", t3_text: "Genetic counseling helps families understand the risk of hereditary diseases and prepare for the future.",
    t3_b1: "Pedigree analysis: tracking diseases in relatives.", t3_b2: "Chromosome analysis: checking structure and number.", t3_b3: "Helps with prevention and early diagnosis.",
    t3_inst: "Fill in the gap!", t3_gap_sentence: "Genetic counseling aims to calculate the risk of {gap} diseases.",
    t3_c1: "hereditary", t3_c2: "infectious", t3_c3: "curable",
    t3_q: "Which method studies ancestral diseases?", t3_q_a: "Pedigree analysis", t3_q_b: "Blood pressure test", t3_q_c: "Vision test", t3_q_d: "X-ray",

    t4_title: "Mutagenic Effects", t4_text: "Some mutations are random, but environmental factors (mutagens) can significantly increase DNA errors.",
    t4_b1: "Physical: UV rays, X-rays, radioactivity.", t4_b2: "Chemical: tobacco smoke, preservatives.", t4_b3: "Biological: certain viruses can damage DNA.",
    t4_inst: "Put the process in order (Cause -> Consequence)!",
    t4_w1: "Mutagen effect", t4_w2: "DNA damage", t4_w3: "Faulty protein", t4_w4: "Disease",
    t4_q: "Which radiation can cause skin cancer by damaging DNA?", t4_q_a: "UV radiation", t4_q_b: "Infrared", t4_q_c: "Visible light", t4_q_d: "Radio waves",

    t5_title: "Summary Quiz", t5_text: "How well do you know modern genetic tools and dangers?",
    t5_b1: "Mutation = error in base sequence.", t5_b2: "Gene tech = targeted DNA modification.", t5_b3: "Mutagens = DNA damaging factors.",
    t5_inst: "What do we call substances that cause high DNA damage?", t5_gap_sentence2: "{gap} in our environment increase the chance of mutations.",
    t5_c51: "Mutagens", t5_c52: "Vitamins", t5_c53: "Sugars",
    t5_q: "Which statement is TRUE about point mutations?", t5_q_a: "They affect a single base in DNA.", t5_q_b: "They remove entire organs.", t5_q_c: "They are always beneficial.", t5_q_d: "They cannot be inherited.",
  },
  de: {
    explorer_title: "Mutation & Gentechnik",
    t1_title: "Fehler im Code: Mutation", t1_text: "Eine Mutation ist eine plötzliche, dauerhafte Veränderung der DNA-Struktur.",
    t1_b1: "Punktmutation: Austausch einer Base.", t1_b2: "Chromosomenmutation: Verlust oder Verdopplung großer Abschnitte.", t1_b3: "Mutationen können schädlich, neutral oder nützlich sein.",
    t1_inst: "Punkt- oder Chromosomenmutation? Sortiere!",
    t1_bucket_pont: "Punktmutation", t1_bucket_kromo: "Chromosomenmutation",
    t1_item_p1: "Einzelner Basentausch", t1_item_p2: "Tippfehler in DNA",
    t1_item_k1: "Abschnittsverlust", t1_item_k2: "Verdoppelte Gensequenz",
    t1_q: "Was ist eine Mutation?", t1_q_a: "Dauerhafte DNA-Veränderung", t1_q_b: "Abkühlung der DNA", t1_q_c: "Zellbewegung", t1_q_d: "Bewässerung",

    t2_title: "Gentechnik & GMO", t2_text: "Wissenschaftler verändern gezielt DNA, um nützliche Eigenschaften zu erreichen.",
    t2_b1: "GMO: Gentechnisch veränderter Organismus.", t2_b2: "Anwendung: resistente Pflanzen, Medikamente.", t2_b3: "Bioethik: Was ist erlaubt?",
    t2_inst: "Verbinde Begriff und Bedeutung!",
    t2_l1: "GMO", t2_r1: "Verändertes Lebewesen",
    t2_l2: "Genchirurgie", t2_r2: "Schneiden und Kleben von DNA",
    t2_l3: "Insulinherstellung", t2_r3: "Menschliches Gen in Bakterien",
    t2_q: "Wofür steht GMO?", t2_q_a: "Genetisch modifizierter Organismus", t2_q_b: "Große Mutations-Ordnung", t2_q_c: "Ganz moderne Optik", t2_q_d: "Grund-Molekül-Osten",

    t3_title: "Genetische Beratung", t3_text: "Hilft Familien, Risiken für Erbkrankheiten zu verstehen.",
    t3_b1: "Stammbaumanalyse: Verfolgung von Krankheiten.", t3_b2: "Chromosomenanalyse: Prüfung der Struktur.", t3_b3: "Dient der Vorsorge.",
    t3_inst: "Ergänze den Satz!", t3_gap_sentence: "Genetische Beratung berechnet das Risiko für {gap} Krankheiten.",
    t3_c1: "erbliche", t3_c2: "infektiöse", t3_c3: "heilbare",
    t3_q: "Wie untersucht man Krankheiten der Vorfahren?", t3_q_a: "Stammbaumanalyse", t3_q_b: "Blutdruckmessen", t3_q_c: "Sehtest", t3_q_d: "Röntgen",

    t4_title: "Mutagene Wirkungen", t4_text: "Umweltfaktoren (Mutagene) erhöhen die Zahl der DNA-Fehler.",
    t4_b1: "Physikalisch: UV-Strahlen, Röntgen, Radioaktivität.", t4_b2: "Chemisch: Tabakrauch, Konservierungsstoffe.", t4_b3: "Biologisch: Viren.",
    t4_inst: "Bringe den Ablauf in Reihenfolge!",
    t4_w1: "Mutagen", t4_w2: "DNA-Schaden", t4_w3: "Defektes Protein", t4_w4: "Krankheit",
    t4_q: "Welche Strahlung verursacht Hautkrebs?", t4_q_a: "UV-Strahlung", t4_q_b: "Infrarot", t4_q_c: "Licht", t4_q_d: "Funkwellen",

    t5_title: "Abschluss-Quiz", t5_text: "Kennst du die moderne Genetik?",
    t5_b1: "Mutation = Fehler in Basenfolge.", t5_b2: "Gentechnik = DNA-Modifikation.", t5_b3: "Mutagene = DNA-Schädiger.",
    t5_inst: "Wie nennt man DNA-schädigende Stoffe?", t5_gap_sentence2: "{gap} erhöhen das Mutationsrisiko.",
    t5_c51: "Mutagene", t5_c52: "Vitamine", t5_c53: "Zucker",
    t5_q: "Was ist wahr für Punktmutationen?", t5_q_a: "Betreffen nur eine Base.", t5_q_b: "Löschen ganze Organe.", t5_q_c: "Sind immer gut.", t5_q_d: "Nicht vererbbar.",
  },
  ro: {
    explorer_title: "Mutații și Genetică",
    t1_title: "Erori în Cod: Mutația", t1_text: "Mutația este o schimbare bruscă și permanentă în structura ADN-ului.",
    t1_b1: "Mutație punctiformă: înlocuirea unei singure baze.", t1_b2: "Mutație cromozomială: pierderea sau dublarea unor segmente mari.", t1_b3: "Mutațiile pot fi dăunătoare, neutre sau utile.",
    t1_inst: "Punctiformă sau Cromozomială? Sortează!",
    t1_bucket_pont: "Mutație punctiformă", t1_bucket_kromo: "Mutație cromozomială",
    t1_item_p1: "Schimb de o bază", t1_item_p2: "Greșeală de tipar în ADN",
    t1_item_k1: "Pierdere de segment", t1_item_k2: "Secvență genică dublată",
    t1_q: "Ce este o mutație?", t1_q_a: "O schimbare permanentă a ADN-ului", t1_q_b: "Răcirea temporară a ADN-ului", t1_q_c: "Mişcarea citoplasmei", t1_q_d: "Udarea plantelor",

    t2_title: "Tehnologie Genetică", t2_text: "Oamenii de știință modifică ADN-ul pentru a obține trăsături utile.",
    t2_b1: "OMG: Organism Modificat Genetic.", t2_b2: "Aplicații: plante rezistente, producție de medicamente.", t2_b3: "Bioetica: ce este permis?",
    t2_inst: "Potrivește conceptul cu sensul său!",
    t2_l1: "OMG", t2_r1: "Organism modificat",
    t2_l2: "Inginerie genică", t2_r2: "Tăierea și lipirea ADN-ului",
    t2_l3: "Producția de insulină", t2_r3: "Genă umană în bacterii",
    t2_q: "Ce înseamnă OMG?", t2_q_a: "Organism Modificat Genetic", t2_q_b: "Ordine de Mutație Grea", t2_q_c: "Optică Modernă Generală", t2_q_d: "Unitate de Creștere",

    t3_title: "Sfatul Genetic", t3_text: "Ajută familiile să înțeleagă riscul bolilor ereditare.",
    t3_b1: "Analiza arborelui genealogic: urmărirea bolilor la rude.", t3_b2: "Analiza cromozomială: verificarea numărului.", t3_b3: "Ajută la prevenție.",
    t3_inst: "Completează fraza!", t3_gap_sentence: "Sfatul genetic calculează riscul bolilor {gap}.",
    t3_c1: "ereditare", t3_c2: "infecțioase", t3_c3: "curabile",
    t3_q: "Cum se investighează bolile strămoșilor?", t3_q_a: "Analiza arborelui genealogic", t3_q_b: "Tensiunea arterială", t3_q_c: "Test de vedere", t3_q_d: "Radiografie",

    t4_title: "Efecte Mutagene", t4_text: "Factorii de mediu (mutageni) cresc numărul erorilor ADN.",
    t4_b1: "Fizici: raze UV, raze X, radioactivitate.", t4_b2: "Chimici: fum de tutun, conservanți.", t4_b3: "Biologici: virusuri.",
    t4_inst: "Pune procesul în ordine!",
    t4_w1: "Efect mutagen", t4_w2: "Leziune ADN", t4_w3: "Proteină defectă", t4_w4: "Boală",
    t4_q: "Ce radiație poate cauza cancer de piele?", t4_q_a: "Radiația UV", t4_q_b: "Infraroșu", t4_q_c: "Lumină vizibilă", t4_q_d: "Unde radio",

    t5_title: "Recapitulare", t5_text: "Cunoști genetica modernă?",
    t5_b1: "Mutație = eroare în secvență.", t5_b2: "Tehnologie = modificare ADN.", t5_b3: "Mutageni = factori nocivi.",
    t5_inst: "Cum numim substanțele care distrug ADN-ul?", t5_gap_sentence2: "{gap} din mediu cresc șansa mutațiilor.",
    t5_c51: "Mutagenii", t5_c52: "Vitaminele", t5_c53: "Zaharurile",
    t5_q: "Ce este adevărat despre mutația punctiformă?", t5_q_a: "Afectează o singură bază.", t5_q_b: "Șterge organe întregi.", t5_q_c: "E mereu utilă.", t5_q_d: "Nu se moștenește.",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "pont", label: "t1_bucket_pont" },
        { id: "kromo", label: "t1_bucket_kromo" },
      ],
      items: [
        { text: "t1_item_p1", bucketId: "pont" },
        { text: "t1_item_k1", bucketId: "kromo" },
        { text: "t1_item_p2", bucketId: "pont" },
        { text: "t1_item_k2", bucketId: "kromo" },
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
    svg: (lang) => <DNAHelixSvg lang={lang} />,
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
  icon: "🔬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MutationExplorer = memo(function MutationExplorer({
  color = "#DC2626", // Erős vörös (Red-600) a mutációk és figyelmeztető jelek miatt
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
      explorerId="bio_k8_mutation_genetech" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default MutationExplorer;
