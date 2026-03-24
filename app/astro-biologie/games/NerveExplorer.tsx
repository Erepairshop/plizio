"use client";
// NerveExplorer.tsx — Bio Island i8: Idegrendszer (K7)
// Topics: 1) Az idegsejt 2) Szinapszis 3) Az agy felépítése 4) A reflexív 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { NervousSystemSvg, BrainRegionsSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -40,-20 Q -20,0 -40,20" fill="none" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" />
        <path d="M 40,-20 Q 20,0 40,20" fill="none" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round" />
        <circle cx="-15" cy="-5" r="3" fill="#8B5CF6" />
        <circle cx="-10" cy="5" r="3" fill="#8B5CF6" />
        <circle cx="-15" cy="15" r="3" fill="#8B5CF6" />
        <text x="0" y="-40" fontSize="14" fill="#6D28D9" textAnchor="middle">⚡</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="10" fontSize="30" textAnchor="middle">🔨</text>
        <path d="M -40,0 L 40,0" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4 2" />
        <text x="60" y="10" fontSize="30" textAnchor="middle">🦵</text>
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
        <text x="0" y="15" fontSize="40" textAnchor="middle">🧠</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Idegrendszer",
    // T1: Idegsejt (Label-diagram)
    t1_title: "Az idegsejt (Neuron)",
    t1_text: "Az idegrendszer alapegysége a neuron. Feladata az ingerek felfogása és elektromos jelekké alakítása, majd továbbítása.",
    t1_b1: "Sejttest: tartalmazza a sejtmagot.",
    t1_b2: "Dendritek: rövid nyúlványok, amik fogadják a jeleket.",
    t1_b3: "Axon: hosszú nyúlvány, ezen halad végig az ingerület.",
    t1_inst: "Címkézd fel az idegsejt részeit!",
    t1_area_body: "Sejttest",
    t1_area_dendrite: "Dendrit",
    t1_area_axon: "Axon",
    t1_area_myelin: "Velőshüly (szigetelés)",
    t1_q: "Melyik rész továbbítja az ingerületet a sejttesttől távolodva?",
    t1_q_a: "Az axon", t1_q_b: "A dendrit", t1_q_c: "A sejtmag", t1_q_d: "A vakuólum",

    // T2: Szinapszis
    t2_title: "A szinapszis: Kapcsolódás",
    t2_text: "Az idegsejtek nem érnek össze közvetlenül. A jelek átadásához egy speciális kapcsolódási pontra, a szinapszisra van szükség.",
    t2_b1: "Ingerületátvivő anyagok: kémiai hírvivők a sejtek között.",
    t2_b2: "Szinaptikus rés: az apró hézag a két sejt között.",
    t2_b3: "Az elektromos jel itt kémiai jellé alakul.",
    t2_inst: "Hogy nevezzük a sejtek közötti jeleket?",
    t2_gap_sentence: "A sejtek közötti kommunikációért az {gap} felelősek.",
    t2_c1: "ingerületátvivő anyagok", t2_c2: "csontsejtek", t2_c3: "vörösvértestek",
    t2_q: "Mi történik a szinaptikus résben?",
    t2_q_a: "Kémiai anyagok viszik át az információt", t2_q_b: "Összeolvad a két sejt", t2_q_c: "Elfogy az energia", t2_q_d: "Csont épül",

    // T3: Agy (Label-diagram)
    t3_title: "Az emberi agy",
    t3_text: "Az agyunk a test főparancsnoksága. Különböző területei más-más funkciókért felelnek: a mozgástól az emlékezetig.",
    t3_b1: "Nagyagy: a gondolkodás és tudatos mozgás központja.",
    t3_b2: "Kisagy: az egyensúly és a mozgás koordinációja.",
    t3_b3: "Agytörzs: az életfontosságú reflexek (légzés, szívverés) központja.",
    t3_inst: "Címkézd fel az agy főbb részeit!",
    t3_area_cerebrum: "Nagyagy",
    t3_area_cerebellum: "Kisagy",
    t3_area_brainstem: "Agytörzs",
    t3_q: "Melyik agyi rész felelős az egyensúlyért és a finom mozgásokért?",
    t3_q_a: "Kisagy", t3_q_b: "Nagyagy", t3_q_c: "Agytörzs", t3_q_d: "Gerincvelő",

    // T4: Reflexív (Word-order)
    t4_title: "A reflexív",
    t4_text: "A reflex egy gyors, automatikus válasz egy ingerre. Az út, amit a jel megtesz a beérkezéstől a válaszig, a reflexív.",
    t4_b1: "Érzősejt: felfogja az ingert (pl. forró tárgy).",
    t4_b2: "Központ: feldolgozza az információt (többnyire a gerincvelőben).",
    t4_b3: "Mozgatósejt: utasítja az izmot a válaszra (pl. rántsd el a kezed).",
    t4_inst: "Tedd sorrendbe az ingerület útját a reflexívben!",
    t4_w1: "Inger", t4_w2: "Érzősejt", t4_w3: "Központ", t4_w4: "Mozgatósejt", t4_w5: "Válasz",
    t4_q: "Melyik reflex-típus segít elrántani a kezünket a forró kályhától?",
    t4_q_a: "Feltétlen reflex", t4_q_b: "Tanult reflex", t4_q_c: "Lassú reflex", t4_q_d: "Nincs ilyen",

    // T5: Review
    t5_title: "Idegrendszeri összefoglaló",
    t5_text: "Az idegrendszer összehangolja a test működését és lehetővé teszi a tanulást.",
    t5_b1: "Neuron = ingerületvezetés.",
    t5_b2: "Agy = központi vezérlés.",
    t5_b3: "Reflex = automatikus védekezés.",
    t5_inst: "Melyik szervünk a gondolkodás központja?",
    t5_gap_sentence2: "A tudatos tevékenységeinket a(z) {gap} irányítja.",
    t5_c51: "agy", t5_c52: "tüdő", t5_c53: "máj",
    t5_q: "Melyik állítás HAMIS?",
    t5_q_a: "Az idegsejtek között nincs közvetlen érintkezés.", t5_q_b: "Az agytörzs irányítja a légzést.", t5_q_c: "A neuronok csak a lábunkban vannak.", t5_q_d: "A reflexek gyorsabbak a tudatos döntésnél.",
  },
  en: {
    explorer_title: "The Nervous System",
    t1_title: "The Neuron", t1_text: "The neuron is the basic unit of the nervous system. It captures stimuli, converts them into electrical signals, and transmits them.",
    t1_b1: "Cell body: contains the nucleus.", t1_b2: "Dendrites: short branches that receive signals.", t1_b3: "Axon: long branch that carries the impulse away.",
    t1_inst: "Label the parts of the neuron!",
    t1_area_body: "Cell body", t1_area_dendrite: "Dendrite", t1_area_axon: "Axon", t1_area_myelin: "Myelin sheath",
    t1_q: "Which part carries the impulse away from the cell body?", t1_q_a: "Axon", t1_q_b: "Dendrite", t1_q_c: "Nucleus", t1_q_d: "Vacuole",

    t2_title: "The Synapse", t2_text: "Neurons don't touch directly. They use a special connection point called a synapse.",
    t2_b1: "Neurotransmitters: chemical messengers between cells.", t2_b2: "Synaptic cleft: the tiny gap between two cells.", t2_b3: "Electrical signals turn into chemical signals here.",
    t2_inst: "What are the chemical messengers called?", t2_gap_sentence: "Communication between cells is done by {gap}.",
    t2_c1: "neurotransmitters", t2_c2: "bone cells", t2_c3: "red blood cells",
    t2_q: "What happens in the synaptic cleft?", t2_q_a: "Chemicals transmit information", t2_q_b: "Cells merge", t2_q_c: "Energy is lost", t2_q_d: "Bones grow",

    t3_title: "The Human Brain", t3_text: "The brain is the body's headquarters. Different areas manage different functions.",
    t3_b1: "Cerebrum: center for thinking and voluntary movement.", t3_b2: "Cerebellum: coordination of balance and movement.", t3_b3: "Brainstem: center for vital reflexes like breathing.",
    t3_inst: "Label the main regions of the brain!",
    t3_area_cerebrum: "Cerebrum", t3_area_cerebellum: "Cerebellum", t3_area_brainstem: "Brainstem",
    t3_q: "Which part of the brain is responsible for balance?", t3_q_a: "Cerebellum", t3_q_b: "Cerebrum", t3_q_c: "Brainstem", t3_q_d: "Spinal cord",

    t4_title: "The Reflex Arc", t4_text: "A reflex is a fast, automatic response to a stimulus. The path the signal takes is the reflex arc.",
    t4_b1: "Sensory neuron: detects the stimulus.", t4_b2: "Center: processes info (usually in spinal cord).", t4_b3: "Motor neuron: commands the muscle to respond.",
    t4_inst: "Put the impulse path in order!",
    t4_w1: "Stimulus", t4_w2: "Sensory cell", t4_w3: "Center", t4_w4: "Motor cell", t4_w5: "Response",
    t4_q: "Which reflex helps you pull your hand away from a hot stove?", t4_q_a: "Innate reflex", t4_q_b: "Learned reflex", t4_q_c: "Slow reflex", t4_q_d: "None",

    t5_title: "Nervous System Summary", t5_text: "The nervous system coordinates body functions and enables learning.",
    t5_b1: "Neuron = signal transmission.", t5_b2: "Brain = central control.", t5_b3: "Reflex = automatic defense.",
    t5_inst: "Which organ is the center of thinking?", t5_gap_sentence2: "Our conscious activities are directed by the {gap}.",
    t5_c51: "brain", t5_c52: "lung", t5_c53: "liver",
    t5_q: "Which statement is FALSE?", t5_q_a: "There is no direct contact between neurons.", t5_q_b: "Brainstem controls breathing.", t5_q_c: "Neurons are only in our feet.", t5_q_d: "Reflexes are faster than conscious decisions.",
  },
  de: {
    explorer_title: "Das Nervensystem",
    t1_title: "Das Neuron", t1_text: "Das Neuron ist die Grundeinheit des Nervensystems. Es wandelt Reize in elektrische Signale um.",
    t1_b1: "Zellkörper: enthält den Zellkern.", t1_b2: "Dendriten: kurze Fortsätze, die Signale empfangen.", t1_b3: "Axon: langer Fortsatz, der den Impuls weiterleitet.",
    t1_inst: "Beschrifte das Neuron!",
    t1_area_body: "Zellkörper", t1_area_dendrite: "Dendrit", t1_area_axon: "Axon", t1_area_myelin: "Myelinscheide",
    t1_q: "Welcher Teil leitet den Impuls vom Zellkörper weg?", t1_q_a: "Axon", t1_q_b: "Dendrit", t1_q_c: "Zellkern", t1_q_d: "Vakuole",

    t2_title: "Die Synapse", t2_text: "Neuronen berühren sich nicht direkt. Sie nutzen Synapsen zur Übertragung.",
    t2_b1: "Neurotransmitter: chemische Botenstoffe.", t2_b2: "Synaptischer Spalt: die Lücke zwischen den Zellen.", t2_b3: "Elektrische Signale werden hier chemisch.",
    t2_inst: "Wie heißen die chemischen Botenstoffe?", t2_gap_sentence: "Die Kommunikation erfolgt über {gap}.",
    t2_c1: "Neurotransmitter", t2_c2: "Knochenzellen", t2_c3: "Blutkörperchen",
    t2_q: "Was passiert im synaptischen Spalt?", t2_q_a: "Chemische Stoffe übertragen Infos", t2_q_b: "Zellen verschmelzen", t2_q_c: "Energie geht verloren", t2_q_d: "Knochen wachsen",

    t3_title: "Das Gehirn", t3_text: "Das Gehirn ist die Zentrale. Verschiedene Bereiche haben verschiedene Aufgaben.",
    t3_b1: "Großhirn: Zentrum für Denken und Bewusstsein.", t3_b2: "Kleinhirn: Koordination von Gleichgewicht.", t3_b3: "Hirnstamm: Überlebenswichtige Reflexe (Atmung).",
    t3_inst: "Beschrifte die Gehirnbereiche!",
    t3_area_cerebrum: "Großhirn", t3_area_cerebellum: "Kleinhirn", t3_area_brainstem: "Hirnstamm",
    t3_q: "Welcher Teil des Gehirns ist für das Gleichgewicht zuständig?", t3_q_a: "Kleinhirn", t3_q_b: "Großhirn", t3_q_c: "Hirnstamm", t3_q_d: "Rückenmark",

    t4_title: "Der Reflexbogen", t4_text: "Ein Reflex ist eine schnelle, automatische Antwort auf einen Reiz.",
    t4_b1: "Sinneszelle: nimmt den Reiz wahr.", t4_b2: "Zentrum: verarbeitet die Info (oft im Rückenmark).", t4_b3: "Motorische Zelle: befiehlt dem Muskel die Antwort.",
    t4_inst: "Bringe den Reizweg in die richtige Reihenfolge!",
    t4_w1: "Reiz", t4_w2: "Sinneszelle", t4_w3: "Zentrum", t4_w4: "Motorische Zelle", t4_w5: "Antwort",
    t4_q: "Welcher Reflex hilft, die Hand von einer heißen Herdplatte wegzuziehen?", t4_q_a: "Unbedingter Reflex", t4_q_b: "Erlernter Reflex", t4_q_c: "Langsamer Reflex", t4_q_d: "Keiner",

    t5_title: "Zusammenfassung", t5_text: "Das Nervensystem steuert den Körper und ermöglicht Lernen.",
    t5_b1: "Neuron = Signalübertragung.", t5_b2: "Gehirn = Zentrale Steuerung.", t5_b3: "Reflex = automatischer Schutz.",
    t5_inst: "Welches Organ ist das Denkzentrum?", t5_gap_sentence2: "Bewusste Aktivitäten werden vom {gap} gesteuert.",
    t5_c51: "Gehirn", t5_c52: "Lunge", t5_c53: "Leber",
    t5_q: "Welche Aussage ist FALSCH?", t5_q_a: "Neuronen berühren sich direkt.", t5_q_b: "Hirnstamm steuert Atmung.", t5_q_c: "Neuronen sind im ganzen Körper.", t5_q_d: "Reflexe sind sehr schnell.",
  },
  ro: {
    explorer_title: "Sistemul Nervos",
    t1_title: "Neuronul", t1_text: "Neuronul este unitatea de bază a sistemului nervos. Captează stimulii și îi transformă în semnale electrice.",
    t1_b1: "Corp celular: conține nucleul.", t1_b2: "Dendrite: ramificații scurte care primesc semnale.", t1_b3: "Axon: ramificație lungă care transmite impulsul.",
    t1_inst: "Etichetează părțile neuronului!",
    t1_area_body: "Corp celular", t1_area_dendrite: "Dendrită", t1_area_axon: "Axon", t1_area_myelin: "Teacă de mielină",
    t1_q: "Care parte transmite impulsul departe de corpul celular?", t1_q_a: "Axonul", t1_q_b: "Dendrita", t1_q_c: "Nucleul", t1_q_d: "Vacuola",

    t2_title: "Sinapsa", t2_text: "Neuronii nu se ating direct. Ei folosesc un punct de conexiune numit sinapsă.",
    t2_b1: "Neurotransmițători: mesageri chimici între celule.", t2_b2: "Fantă sinaptică: spațiul mic dintre două celule.", t2_b3: "Semnalele electrice devin semnale chimice aici.",
    t2_inst: "Cum se numesc mesagerii chimici?", t2_gap_sentence: "Comunicarea între celule se face prin {gap}.",
    t2_c1: "neurotransmițători", t2_c2: "celule osoase", t2_c3: "globule roșii",
    t2_q: "Ce se întâmplă în fanta sinaptică?", t2_q_a: "Substanțe chimice transmit info", t2_q_b: "Celulele fuzionează", t2_q_c: "Se pierde energia", t2_q_d: "Cresc oasele",

    t3_title: "Creierul Uman", t3_text: "Creierul este centrul de comandă. Diferite zone gestionează funcții diferite.",
    t3_b1: "Creierul mare: centrul gândirii și mișcărilor voluntare.", t3_b2: "Creierul mic (Cerebel): coordonarea echilibrului.", t3_b3: "Trunchiul cerebral: centrul reflexelor vitale (respirație).",
    t3_inst: "Etichetează regiunile principale ale creierului!",
    t3_area_cerebrum: "Creier mare", t3_area_cerebellum: "Creier mic", t3_area_brainstem: "Trunchi cerebral",
    t3_q: "Care parte a creierului este responsabilă de echilibru?", t3_q_a: "Creierul mic", t3_q_b: "Creierul mare", t3_q_c: "Trunchiul cerebral", t3_q_d: "Măduva spinării",

    t4_title: "Arcul Reflex", t4_text: "Reflexul este un răspuns rapid, automat la un stimul. Calea urmată este arcul reflex.",
    t4_b1: "Neuron senzitiv: detectează stimulul.", t4_b2: "Centru: procesează info (de obicei în măduva spinării).", t4_b3: "Neuron motor: comandă mușchiului răspunsul.",
    t4_inst: "Pune calea impulsului în ordine!",
    t4_w1: "Stimul", t4_w2: "Celulă senzitivă", t4_w3: "Centru", t4_w4: "Celulă motorie", t4_w5: "Răspuns",
    t4_q: "Ce reflex te ajută să tragi mâna de pe o plită fierbinte?", t4_q_a: "Reflex necondiționat", t4_q_b: "Reflex învățat", t4_q_c: "Reflex lent", t4_q_d: "Niciunul",

    t5_title: "Recapitulare", t5_text: "Sistemul nervos coordonează corpul și permite învățarea.",
    t5_b1: "Neuron = transmisie semnal.", t5_b2: "Creier = control central.", t5_b3: "Reflex = apărare automată.",
    t5_inst: "Care organ este centrul gândirii?", t5_gap_sentence2: "Activitățile conștiente sunt dirijate de {gap}.",
    t5_c51: "creier", t5_c52: "plămân", t5_c53: "ficat",
    t5_q: "Care afirmație este FALSĂ?", t5_q_a: "Neuronii se ating direct.", t5_q_b: "Trunchiul cerebral controlează respirația.", t5_q_c: "Neuronii sunt în tot corpul.", t5_q_d: "Reflexele sunt mai rapide decât deciziile.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <NervousSystemSvg lang={lang} />, // Neuron view
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "body",     x: 30, y: 35, label: "t1_area_body" },
        { id: "dendrite", x: 15, y: 20, label: "t1_area_dendrite" },
        { id: "axon",     x: 60, y: 55, label: "t1_area_axon" },
        { id: "myelin",   x: 75, y: 70, label: "t1_area_myelin" },
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
    svg: (lang) => <BrainRegionsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "cerebrum",   x: 45, y: 30, label: "t3_area_cerebrum" },
        { id: "cerebellum", x: 70, y: 70, label: "t3_area_cerebellum" },
        { id: "brainstem",  x: 45, y: 80, label: "t3_area_brainstem" },
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
  icon: "🧠",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const NerveExplorer = memo(function NerveExplorer({
  color = "#7C3AED", // Violet-600 az idegrendszerhez
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
      explorerId="bio_k7_nerve" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default NerveExplorer;
