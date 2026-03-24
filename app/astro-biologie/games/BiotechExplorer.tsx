"use client";
// BiotechExplorer.tsx — Bio Island i6: Biotechnológia (K8)
// Topics: 1) Enzimek 2) GMO alapok 3) Pro és Kontra (GMO) 4) Klónozás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { GeneticsBiotechSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🍅</text>
        <path d="M -10,0 L 10,0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="40" y="15" fontSize="40" textAnchor="middle">🦾</text>
        <text x="0" y="-30" fontSize="25" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-35" y="15" fontSize="40" textAnchor="middle">🐑</text>
        <text x="35" y="15" fontSize="40" textAnchor="middle">🐑</text>
        <path d="M -10,10 L 10,10" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
        <text x="0" y="-10" fontSize="20" textAnchor="middle">👯</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">🧪</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Biotechnológia",
    // T1: Enzimek (Match-pairs)
    t1_title: "A sejt munkásai: Enzimek",
    t1_text: "Az enzimek olyan fehérjék, amelyek felgyorsítják a kémiai folyamatokat a szervezetben (biokatalizátorok). Nélkülük az anyagcsere túl lassú lenne az élethez.",
    t1_b1: "Specifikusság: egy enzim általában csak egyféle reakciót segít.",
    t1_b2: "Kulcs-zár modell: az enzim alakja pontosan illeszkedik a célmolekulához.",
    t1_b3: "Felhasználás: mosószerekben, élelmiszeriparban (pl. sajtkészítés).",
    t1_inst: "Párosítsd az enzimet a feladatával!",
    t1_l1: "Amiláz", t1_r1: "Keményítő bontása a nyálban",
    t1_l2: "Laktáz", t1_r2: "Tejcukor lebontása",
    t1_l3: "Lipáz", t1_r3: "Zsírok bontása",
    t1_q: "Milyen típusú óriásmolekulák az enzimek?",
    t1_q_a: "Fehérjék", t1_q_b: "Zsírok", t1_q_c: "Cukrok", t1_q_d: "Ásványi anyagok",

    // T2: GMO alapok (Gap-fill)
    t2_title: "Mik azok a GMO-k?",
    t2_text: "A Genetikailag Módosított Organizmusok (GMO) olyan élőlények, amelyek DNS-ébe mesterségesen illesztettek be más fajtól származó géneket.",
    t2_b1: "Cél: ellenállóbb növények, több vitamin, gyorsabb növekedés.",
    t2_b2: "Példa: Bt-kukorica, amely saját maga termel rovarölő anyagot.",
    t2_b3: "Aranyrizs: extra A-vitamint tartalmazó gabona.",
    t2_inst: "Töltsd ki a hiányzó szót!",
    t2_gap_sentence: "A GMO élőlények DNS-ét {gap} úton változtatják meg.",
    t2_c1: "mesterséges", t2_c2: "természetes", t2_c3: "véletlen",
    t2_q: "Mit jelent a GMO rövidítés?",
    t2_q_a: "Genetikailag Módosított Organizmus", t2_q_b: "Gyorsan Megújuló Osztódás", t2_q_c: "Géntechnológiai Magas Osztály", t2_q_d: "Gyakori Mutációs Ok",

    // T3: Pro és Kontra (Drag-to-bucket)
    t3_title: "Érvek és félelmek",
    t3_text: "A génmódosítás sok előnnyel jár, de komoly környezeti és etikai kérdéseket is felvet. Fontos a mérlegelés.",
    t3_b1: "Előny: kevesebb vegyszer kell a földekre.",
    t3_b2: "Kockázat: a módosított gének bekerülhetnek a vadon élő növényekbe.",
    t3_b3: "Gazdaság: a nagyvállalatok függőségbe hozhatják a gazdákat.",
    t3_inst: "Pro vagy Kontra? Válogasd szét a GMO-val kapcsolatos állításokat!",
    t3_bucket_pro: "Előny (Pro)",
    t3_bucket_kontra: "Kockázat (Kontra)",
    t3_item_p1: "Nagyobb terméshozam", t3_item_p2: "Kevesebb növényvédő szer",
    t3_item_k1: "Ökoszisztéma felborulása", t3_item_k2: "Allergiás reakciók esélye",
    t1_q_3: "Mi a legfőbb környezeti aggály a GMO növényekkel kapcsolatban?",
    t3_q_a: "Hogy kereszteződhetnek vadon élő rokonfajaikkal", t3_q_b: "Hogy túl szépek lesznek", t3_q_c: "Hogy elfogy tőlük a víz", t3_q_d: "Hogy megváltoztatják az időjárást",

    // T4: Klónozás (Word-order)
    t4_title: "Másolat készítése: Klónozás",
    t4_text: "A klónozás során egy élőlénnyel genetikailag teljesen azonos utódot hoznak létre. A leghíresebb példa Dolly, a bárány.",
    t4_b1: "Nem ivaros szaporodás, hanem egy testi sejt DNS-ét használják.",
    t4_b2: "Terápiás klónozás: szervek növesztése gyógyításhoz.",
    t4_b3: "Etikai határ: az emberi klónozás a legtöbb országban tiltott.",
    t4_inst: "Tedd sorrendbe a klónozás alaplépéseit!",
    t4_w1: "DNS kivétele", t4_w2: "Beültetés petesejtbe", t4_w3: "Osztódás indítása", t4_w4: "Beágyazódás",
    t4_q: "Ki volt az első klónozott emlős?",
    t4_q_a: "Dolly, a bárány", t4_q_b: "Lajka, a kutya", t4_q_c: "Cincin, a kisegér", t4_q_d: "Boci, a tehén",

    // T5: Review
    t5_title: "Biotechnológiai összefoglaló",
    t5_text: "A biotechnológia a jövő kulcsa, de nagy felelősséggel jár a használata.",
    t5_b1: "Enzimek = biológiai gyorsítók.",
    t5_b2: "GMO = módosított genetikai állomány.",
    t5_b3: "Klónozás = genetikai iker készítése.",
    t5_inst: "Hogy hívjuk az élőlények DNS-ének célzott módosítását?",
    t5_gap_sentence2: "A modern orvostudomány egyik ága a {gap}.",
    t5_c51: "géntechnológia", t5_c52: "asztrológia", t5_c53: "régészet",
    t5_q: "Melyik állítás IGAZ az enzimekre?",
    t5_q_a: "Működésüket a 'kulcs-zár' modell írja le.", t5_q_b: "Csak az űrben működnek.", t5_q_c: "Elfogyasztják a DNS-t.", t5_q_d: "Minden enzim mindenre jó.",
  },
  en: {
    explorer_title: "Biotechnology",
    t1_title: "Cell Workers: Enzymes", t1_text: "Enzymes are proteins that speed up chemical reactions in the body (biocatalysts).",
    t1_b1: "Specificity: usually help only one type of reaction.", t1_b2: "Lock-and-key model: shape fits the target molecule exactly.", t1_b3: "Usage: detergents, food industry (e.g., cheese making).",
    t1_inst: "Match the enzyme with its task!",
    t1_l1: "Amylase", t1_r1: "Breaks down starch in saliva",
    t1_l2: "Lactase", t1_r2: "Breaks down milk sugar",
    t1_l3: "Lipase", t1_r3: "Breaks down fats",
    t1_q: "What type of macromolecule are enzymes?",
    t1_q_a: "Proteins", t1_q_b: "Fats", t1_q_c: "Sugars", t1_q_d: "Minerals",

    t2_title: "What are GMOs?", t2_text: "Genetically Modified Organisms (GMOs) have DNA artificially modified by inserting genes from other species.",
    t2_b1: "Goal: resistant plants, more vitamins, faster growth.", t2_b2: "Example: Bt-corn producing its own pesticide.", t2_b3: "Golden Rice: grain with extra Vitamin A.",
    t2_inst: "Fill in the gap!", t2_gap_sentence: "The DNA of GMOs is changed through {gap} methods.",
    t2_c1: "artificial", t2_c2: "natural", t2_c3: "random",
    t2_q: "What does GMO stand for?", t2_q_a: "Genetically Modified Organism", t2_q_b: "Great Mutation Order", t2_q_c: "Global Medical Office", t2_q_d: "Growth Mode Unit",

    t3_title: "Pros and Cons", t3_text: "Genetic modification offers benefits but raises environmental and ethical concerns.",
    t3_b1: "Pro: fewer chemicals needed on fields.", t3_b2: "Con: modified genes might enter wild plants.", t3_b3: "Economy: farmers may become dependent on corporations.",
    t3_inst: "Pro or Con? Sort the GMO statements!",
    t3_bucket_pro: "Pros", t3_bucket_kontra: "Cons",
    t3_item_p1: "Higher yields", t3_item_p2: "Less pesticide use",
    t3_item_k1: "Ecological disruption", t3_item_k2: "Potential for allergies",
    t3_q: "What is a main environmental concern regarding GMOs?",
    t3_q_a: "Cross-breeding with wild relatives", t3_q_b: "Looking too perfect", t3_q_c: "Using too much water", t3_q_d: "Changing the weather",

    t4_title: "Making Copies: Cloning", t4_text: "Cloning produces a genetically identical offspring. Dolly the sheep is the most famous example.",
    t4_b1: "Uses DNA from a somatic cell, not sexual reproduction.", t4_b2: "Therapeutic cloning: growing organs for healing.", t4_b3: "Ethics: human cloning is banned in most countries.",
    t4_inst: "Order the basic steps of cloning!",
    t4_w1: "Extract DNA", t4_w2: "Insert into egg", t4_w3: "Start division", t4_w4: "Implantation",
    t4_q: "Who was the first cloned mammal?",
    t4_q_a: "Dolly the sheep", t4_q_b: "Laika the dog", t4_q_c: "Mickey Mouse", t4_q_d: "Bessie the cow",

    t5_title: "Biotech Summary", t5_text: "Biotech is key to the future but requires great responsibility.",
    t5_b1: "Enzymes = biological accelerators.", t5_b2: "GMO = modified genetic material.", t5_b3: "Cloning = making a genetic twin.",
    t5_inst: "What is the targeted modification of DNA called?",
    t5_gap_sentence2: "One branch of modern medicine is {gap}.",
    t5_c51: "genetic engineering", t5_c52: "astrology", t5_c53: "archaeology",
    t5_q: "Which statement is TRUE about enzymes?",
    t5_q_a: "Described by the 'lock-and-key' model.", t5_q_b: "They only work in space.", t5_q_c: "They eat DNA.", t5_q_d: "One enzyme works for everything.",
  },
  de: {
    explorer_title: "Biotechnologie",
    t1_title: "Zell-Arbeiter: Enzyme", t1_text: "Enzyme sind Proteine, die chemische Reaktionen im Körper beschleunigen (Biokatalysatoren).",
    t1_b1: "Spezifität: meist nur für eine Reaktion zuständig.", t1_b2: "Schlüssel-Schloss-Prinzip: passt genau zum Zielmolekül.", t1_b3: "Nutzung: Waschmittel, Lebensmittel (Käse).",
    t1_inst: "Verbinde Enzym und Aufgabe!",
    t1_l1: "Amylase", t1_r1: "Spaltet Stärke im Speichel",
    t1_l2: "Laktase", t1_r2: "Spaltet Milchzucker",
    t1_l3: "Lipase", t1_r3: "Spaltet Fette",
    t1_q: "Welche Art von Makromolekül sind Enzyme?",
    t1_q_a: "Proteine", t1_q_b: "Fette", t1_q_c: "Zucker", t1_q_d: "Mineralien",

    t2_title: "Was sind GVO?", t2_text: "Gentechnisch veränderte Organismen (GVO) haben künstlich veränderte DNA.",
    t2_b1: "Ziel: resistente Pflanzen, mehr Vitamine.", t2_b2: "Beispiel: Bt-Mais gegen Schädlinge.", t2_b3: "Goldener Reis: mit extra Vitamin A.",
    t2_inst: "Ergänze den Satz!", t2_gap_sentence: "GVO-DNA wird auf {gap} Weg verändert.",
    t2_c1: "künstlichem", t2_c2: "natürlichem", t2_c3: "zufälligem",
    t2_q: "Was bedeutet GVO?", t2_q_a: "Gentechnisch veränderter Organismus", t2_q_b: "Ganz viele Organe", t2_q_c: "Grobe Virus Ordnung", t2_q_d: "Genetische Vision",

    t3_title: "Pro und Kontra", t3_text: "Gentechnik bietet Chancen, birgt aber auch Risiken.",
    t3_b1: "Pro: weniger Pestizide nötig.", t3_b2: "Kontra: Gene könnten in Wildpflanzen gelangen.", t3_b3: "Ethik: Was darf der Mensch?",
    t3_inst: "Pro oder Kontra? Sortiere!",
    t3_bucket_pro: "Vorteil (Pro)", t3_bucket_kontra: "Risiko (Kontra)",
    t3_item_p1: "Höhere Erträge", t3_item_p2: "Weniger Spritzmittel",
    t3_item_k1: "Ökologische Folgen", t3_item_k2: "Allergierisiken",
    t3_q: "Was ist eine ökologische Sorge bei GVO?",
    t3_q_a: "Einkreuzung in Wildarten", t3_q_b: "Zu schnelles Wachstum", t3_q_c: "Falsche Farbe", t3_q_d: "Regenmangel",

    t4_title: "Kopien: Klonen", t4_text: "Klonen erzeugt genetisch identische Nachkommen. Beispiel: Schaf Dolly.",
    t4_b1: "Nutzt DNA einer Körperzelle.", t4_b2: "Therapeutisches Klonen: Organzüchtung.", t4_b3: "Menschliches Klonen ist verboten.",
    t4_inst: "Bringe die Schritte in Reihenfolge!",
    t4_w1: "DNA entnehmen", t4_w2: "In Eizelle einsetzen", t4_w3: "Teilung starten", t4_w4: "Einnistung",
    t4_q: "Wer war das erste geklonte Säugetier?",
    t4_q_a: "Schaf Dolly", t4_q_b: "Hund Laika", t4_q_c: "Maus Cincin", t4_q_d: "Kuh Berta",

    t5_title: "Zusammenfassung", t5_text: "Gentechnik ist die Zukunft, braucht aber Verantwortung.",
    t5_b1: "Enzyme = Beschleuniger.", t5_b2: "GVO = veränderte DNA.", t5_b3: "Klonen = genetischer Zwilling.",
    t5_inst: "Wie nennt man gezielte DNA-Veränderung?",
    t5_gap_sentence2: "Ein Teil der modernen Medizin ist {gap}.",
    t5_c51: "Gentechnik", t5_c52: "Astrologie", t5_c53: "Geologie",
    t5_q: "Was stimmt für Enzyme?",
    t5_q_a: "Schlüssel-Schloss-Prinzip.", t5_q_b: "Nur im Vakuum.", t5_q_c: "Fressen DNA.", t5_q_d: "Eines für alles.",
  },
  ro: {
    explorer_title: "Biotehnologie",
    t1_title: "Lucrătorii celulei: Enzimele", t1_text: "Enzimele sunt proteine care accelerează reacțiile chimice (biocatalizatori).",
    t1_b1: "Specificitate: ajută de obicei o singură reacție.", t1_b2: "Modelul cheie-broască: se potrivesc exact.", t1_b3: "Utilizare: detergenți, industria alimentară (brânză).",
    t1_inst: "Potrivește enzima cu sarcina sa!",
    t1_l1: "Amilaza", t1_r1: "Descompune amidonul în salivă",
    t1_l2: "Lactaza", t1_r2: "Descompune zahărul din lapte",
    t1_l3: "Lipaza", t1_r3: "Descompune grăsimile",
    t1_q: "Ce tip de macromolecule sunt enzimele?",
    t1_q_a: "Proteine", t1_q_b: "Grăsimi", t1_q_c: "Zaharuri", t1_q_d: "Minerale",

    t2_title: "Ce sunt OMG?", t2_text: "Organismele Modificate Genetic (OMG) au ADN modificat artificial cu gene de la alte specii.",
    t2_b1: "Scop: plante rezistente, mai multe vitamine.", t2_b2: "Exemplu: porumb Bt rezistent la dăunători.", t2_b3: "Orezul auriu: cu vitamina A.",
    t2_inst: "Completează fraza!", t2_gap_sentence: "ADN-ul OMG este schimbat pe cale {gap}.",
    t2_c1: "artificială", t2_c2: "naturală", t2_c3: "accidentală",
    t2_q: "Ce înseamnă OMG?", t2_q_a: "Organism Modificat Genetic", t2_q_b: "Ordin de Mutație Grea", t2_q_c: "Optică Modernă", t2_q_d: "Unitate Genetică",

    t3_title: "Pro și Contra", t3_text: "Modificarea genetică aduce beneficii dar și riscuri etice și ecologice.",
    t3_b1: "Pro: mai puține pesticide pe câmp.", t3_b2: "Contra: genele pot ajunge la plante sălbatice.", t3_b3: "Economie: dependența fermierilor.",
    t3_inst: "Pro sau Contra? Sortează!",
    t3_bucket_pro: "Avantaj (Pro)", t3_bucket_kontra: "Risc (Contra)",
    t3_item_p1: "Recolte mai mari", t3_item_p2: "Mai puține pesticide",
    t3_item_k1: "Perturbarea ecosistemului", t3_item_k2: "Riscuri de alergii",
    t3_q: "Care este o temere ecologică privind OMG?",
    t3_q_a: "Încrucișarea cu specii sălbatice", t3_q_b: "Aspectul prea frumos", t3_q_c: "Consumul de apă", t3_q_d: "Schimbarea vremii",

    t4_title: "Copierea: Clonarea", t4_text: "Clonarea produce un urmaș identic genetic. Exemplu: oaia Dolly.",
    t4_b1: "Folosește ADN dintr-o celulă somatică.", t4_b2: "Clonare terapeutică: creșterea organelor.", t4_b3: "Clonarea umană este interzisă.",
    t4_inst: "Pune pașii în ordine!",
    t4_w1: "Extragere ADN", t4_w2: "Inserare în ovul", t4_w3: "Pornire diviziune", t4_w4: "Implantare",
    t4_q: "Cine a fost primul mamifer clonat?",
    t4_q_a: "Oaia Dolly", t4_q_b: "Câinele Laika", t4_q_c: "Șoricelul Cincin", t4_q_d: "Vaca Berta",

    t5_title: "Recapitulare", t5_text: "Biotehnologia este viitorul, dar necesită responsabilitate.",
    t5_b1: "Enzime = acceleratori.", t5_b2: "OMG = ADN modificat.", t5_b3: "Clonare = gemeni genetici.",
    t5_inst: "Cum se numește modificarea țintită a ADN-ului?",
    t5_gap_sentence2: "O ramură a medicinei moderne este {gap}.",
    t5_c51: "ingineria genetică", t5_c52: "astrologia", t5_c53: "geologia",
    t5_q: "Ce este adevărat despre enzime?",
    t5_q_a: "Modelul cheie-broască.", t5_q_b: "Funcționează doar în vid.", t5_q_c: "Mănâncă ADN-ul.", t5_q_d: "Una singură face tot.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <GeneticsBiotechSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
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
    svg: (lang) => <GeneticsBiotechSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "pro", label: "t3_bucket_pro" },
        { id: "kontra", label: "t3_bucket_kontra" },
      ],
      items: [
        { text: "t3_item_p1", bucketId: "pro" },
        { text: "t3_item_k1", bucketId: "kontra" },
        { text: "t3_item_p2", bucketId: "pro" },
        { text: "t3_item_k2", bucketId: "kontra" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t1_q_3",
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
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
  icon: "🧪",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BiotechExplorer = memo(function BiotechExplorer({
  color = "#059669", // Emerald-600 a biotechnológiához
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
      explorerId="bio_k8_biotech" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default BiotechExplorer;
