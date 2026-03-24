"use client";
// BioSystemsExplorer.tsx — Bio Island i7: Rendszerbiológia (K8)
// Topics: 1) Szervezet mint rendszer 2) Homeosztázis 3) Anyagcsere típusok 4) Szabályozás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { CirculationSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="-15" y="-15" width="30" height="30" rx="5" fill="#3B82F6" />
        <circle cx="-50" cy="0" r="10" fill="#EF4444" />
        <circle cx="50" cy="0" r="10" fill="#10B981" />
        <path d="M -35,0 L -15,0 M 15,0 L 35,0" stroke="#64748B" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,20 L 60,20" stroke="#0EA5E9" strokeWidth="4" />
        <circle cx="0" cy="10" r="8" fill="#F59E0B" />
        <path d="M -40,20 L 0,-10 L 40,20" fill="#BAE6FD" />
        <text x="0" y="45" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">37°C</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">🌐</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Rendszerbiológia",
    t1_title: "Szervezeti szintek",
    t1_text: "Az élő szervezet nem csak szervek halmaza, hanem egy hierarchikus rendszer, ahol minden szint az alatta lévőre épül.",
    t1_b1: "Sejt -> Szövet -> Szerv -> Szervrendszer -> Szervezet.",
    t1_b2: "Integráció: a részek összehangolt működése az egész érdekében.",
    t1_b3: "Ha egy elem kiesik, az egész rendszer egyensúlya megbillen.",
    t1_inst: "Párosítsd a szervrendszert a fő feladatával!",
    t1_l1: "Keringési rendszer", t1_r1: "Tápanyag és gázszállítás",
    t1_l2: "Légzőrendszer", t1_r2: "Gázcsere (O2 felvétel)",
    t1_l3: "Emésztőrendszer", t1_r3: "Tápanyagok lebontása",
    t1_q: "Hogy hívjuk a szervek összehangolt, közös munkáját?",
    t1_q_a: "Integráció", t1_q_b: "Szigetelődés", t1_q_c: "Párolgás", t1_q_d: "Kikristályosodás",

    t2_title: "Belső egyensúly",
    t2_text: "A homeosztázis a belső környezet dinamikus állandóságát jelenti. A szervezet folyamatosan korrigálja a változásokat.",
    t2_b1: "Testhőmérséklet: embernél kb. 37°C.",
    t2_b2: "Vércukorszint: szűk határok között mozog.",
    t2_b3: "Vízvisszatartás: a vesék szabályozzák a folyadékegyensúlyt.",
    t2_inst: "Egészítsd ki a definíciót!",
    t2_gap_sentence: "A belső környezet dinamikus állandóságát {gap} nevezzük.",
    t2_c1: "homeosztázisnak", t2_c2: "fotoszintézisnek", t2_c3: "mutációnak",
    t2_q: "Melyik szervrendszer hűti leginkább a testet?",
    t2_q_a: "A bőr (izzadás)", t2_q_b: "A csontváz", t2_q_c: "A fogazat", t2_q_d: "A hallószerv",

    t3_title: "Energia és anyagforgalom",
    t3_text: "Az anyagcsere két ellentétes folyamatból áll: felépítés (anabolizmus) és lebontás (katabolizmus).",
    t3_b1: "Felépítés: energiát igényel, egyszerűbb anyagokból bonyolultabbak lesznek.",
    t3_b2: "Lebontás: energiát szabadít fel.",
    t3_b3: "ATP: az energia közös 'pénzneme'.",
    t3_inst: "Tedd sorrendbe az anyagáramlást a szervezetben!",
    t3_w1: "Tápanyagfelvétel", t3_w2: "Felszívódás", t3_w3: "Sejtanyagcsere", t3_w4: "Kiválasztás",
    t3_q: "Milyen folyamat a sejtlégzés?",
    t3_q_a: "Lebontó folyamat", t3_q_b: "Felépítő folyamat", t3_q_c: "Csak párolgás", t3_q_d: "Nincs benne energia",

    t4_title: "Idegrendszer és hormonok",
    t4_text: "Az élettani folyamatokat az idegrendszer (gyors) és a hormonrendszer (lassúbb) együtt szabályozza.",
    t4_b1: "Neuroendokrin szabályozás: szoros együttműködés.",
    t4_b2: "Visszacsatolás (Feedback): a válasz hatása befolyásolja a folyamatot.",
    t4_b3: "Példa: a vércukorszint emelkedése inzulintermelést vált ki.",
    t4_inst: "Párosítsd a szabályozó rendszert a jellemzőjével!",
    t4_l1: "Idegrendszer", t4_r1: "Elektromos jelek, gyors válasz",
    t4_l2: "Hormonrendszer", t4_r2: "Kémiai jelek a vérben",
    t4_l3: "Visszacsatolás", t4_r3: "Önszabályozó körfolyamat",
    t4_q: "Melyik rendszer üzenetei jutnak el a vér útján a célsejtekhez?",
    t4_q_a: "Hormonrendszer", t4_q_b: "Idegrendszer", t4_q_c: "Izomrendszer", t4_q_d: "Csontrendszer",

    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld tudásod a szervezet rendszerszintű működéséről!",
    t5_b1: "Integráció = egység.",
    t5_b2: "Homeosztázis = állandóság.",
    t5_b3: "ATP = energia.",
    t5_inst: "Melyik fogalom írja le az élőlények belső egyensúlyát?",
    t5_gap_sentence2: "Az élet alapfeltétele a szervezet belső {gap}.",
    t5_c51: "egyensúlya", t5_c52: "lehűlése", t5_c53: "megszűnése",
    t5_q: "Hogy nevezzük az energiatermelő lebontó folyamatokat?",
    t5_q_a: "Katabolizmus", t5_q_b: "Anabolizmus", t5_q_c: "Vulkanizmus", t5_q_d: "Turizmus",
  },
  en: {
    explorer_title: "Systems Biology",
    t1_title: "Organizational Levels", t1_text: "Living organisms are hierarchical systems where every level builds on the one below it.",
    t1_b1: "Cell -> Tissue -> Organ -> Organ System -> Organism.", t1_b2: "Integration: coordinated function for the whole.", t1_b3: "Balance shifts if one part fails.",
    t1_inst: "Match the organ system to its main task!",
    t1_l1: "Circulatory System", t1_r1: "Nutrient and gas transport",
    t1_l2: "Respiratory System", t1_r2: "Gas exchange (O2 intake)",
    t1_l3: "Digestive System", t1_r3: "Breaking down nutrients",
    t1_q: "What is the term for the coordinated work of organs?",
    t1_q_a: "Integration", t1_q_b: "Isolation", t1_q_c: "Evaporation", t1_q_d: "Crystallization",

    t2_title: "Internal Balance", t2_text: "Homeostasis is the dynamic constancy of the internal environment.",
    t2_b1: "Body temp: ~37°C.", t2_b2: "Blood sugar: within narrow limits.", t2_b3: "Water: regulated by kidneys.",
    t2_inst: "Complete the definition!", t2_gap_sentence: "Dynamic constancy of the internal environment is called {gap}.",
    t2_c1: "homeostasis", t2_c2: "photosynthesis", t2_c3: "mutation",
    t2_q: "Which system cools the body best?",
    t2_q_a: "Skin (sweating)", t2_q_b: "Skeleton", t2_q_c: "Teeth", t2_q_d: "Auditory",

    t3_title: "Metabolism", t3_text: "Metabolism consists of anabolism (building) and catabolism (breaking down).",
    t3_b1: "Anabolism: requires energy.", t3_b2: "Catabolism: releases energy.", t3_b3: "ATP: energy currency.",
    t3_inst: "Order the flow of matter!",
    t3_w1: "Ingestion", t3_w2: "Absorption", t3_w3: "Metabolism", t3_w4: "Excretion",
    t3_q: "What type of process is cell respiration?",
    t3_q_a: "Catabolic", t3_q_b: "Anabolic", t3_q_c: "Evaporation", t3_q_d: "No energy",

    t4_title: "Control Systems", t4_text: "Processes are regulated by the nervous (fast) and endocrine (slow) systems.",
    t4_b1: "Neuroendocrine control: close cooperation.", t4_b2: "Feedback: response affects the process.", t4_b3: "Example: rising sugar triggers insulin.",
    t4_inst: "Match the system to its feature!",
    t4_l1: "Nervous System", t4_r1: "Electrical signals, fast",
    t4_l2: "Hormonal System", t4_r2: "Chemical signals in blood",
    t4_l3: "Feedback", t4_r3: "Self-regulating cycle",
    t4_q: "Which system's messages travel through the blood?",
    t4_q_a: "Endocrine", t4_q_b: "Nervous", t4_q_c: "Muscular", t4_q_d: "Skeletal",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge!",
    t5_b1: "Integration = unity.", t5_b2: "Homeostasis = constancy.", t5_b3: "ATP = energy.",
    t5_inst: "Which term describes internal balance?",
    t5_gap_sentence2: "Life requires internal {gap}.",
    t5_c51: "balance", t5_c52: "cooling", t5_c53: "ending",
    t5_q: "What do we call energy-releasing processes?",
    t5_q_a: "Catabolism", t5_q_b: "Anabolism", t5_q_c: "Volcanism", t5_q_d: "Tourism",
  },
  de: {
    explorer_title: "Biosysteme",
    t1_title: "Organisation", t1_text: "Lebewesen sind hierarchische Systeme.",
    t1_b1: "Zelle -> Gewebe -> Organ -> Organsystem -> Organismus.", t1_b2: "Integration: Zusammenarbeit für das Ganze.", t1_b3: "Gleichgewicht wackelt, wenn Teile fehlen.",
    t1_inst: "Verbinde Organsystem und Aufgabe!",
    t1_l1: "Kreislaufsystem", t1_r1: "Transport von Nährstoffen",
    t1_l2: "Atmungssystem", t1_r2: "Gasaustausch (O2)",
    t1_l3: "Verdauungssystem", t1_r3: "Nährstoffabbau",
    t1_q: "Wie nennt man das Zusammenwirken?",
    t1_q_a: "Integration", t1_q_b: "Isolation", t1_q_c: "Verdampfung", t1_q_d: "Kristallisation",

    t2_title: "Inneres Milieu", t2_text: "Homöostase ist die dynamische Konstanz des inneren Milieus.",
    t2_b1: "Körpertemp: ~37°C.", t2_b2: "Blutzucker: enge Grenzen.", t2_b3: "Wasser: durch Nieren geregelt.",
    t2_inst: "Ergänze!", t2_gap_sentence: "Die Konstanz des inneren Milieus heißt {gap}.",
    t2_c1: "Homöostase", t2_c2: "Fotosynthese", t2_c3: "Mutation",
    t2_q: "Was kühlt den Körper am besten?",
    t2_q_a: "Haut (Schwitzen)", t2_q_b: "Skelett", t2_q_c: "Zähne", t2_q_d: "Ohr",

    t3_title: "Stoffwechsel", t3_text: "Besteht aus Aufbau (Anabolismus) und Abbau (Katabolismus).",
    t3_b1: "Aufbau: braucht Energie.", t3_b2: "Abbau: setzt Energie frei.", t3_b3: "ATP: Energiewährung.",
    t3_inst: "Bringe den Stofffluss in Ordnung!",
    t3_w1: "Aufnahme", t3_w2: "Resorption", t3_w3: "Stoffwechsel", t3_w4: "Ausscheidung",
    t3_q: "Was ist Zellatmung?",
    t3_q_a: "Abbauend", t3_q_b: "Aufbauend", t3_q_c: "Verdunstung", t3_q_d: "Energielos",

    t4_title: "Steuerung", t4_text: "Nervensystem (schnell) und Hormonsystem (langsam) arbeiten zusammen.",
    t4_b1: "Neuroendokrine Steuerung.", t4_b2: "Rückkopplung: Antwort beeinflusst Prozess.", t4_b3: "Beispiel: Zucker -> Insulin.",
    t4_inst: "Verbinde System und Merkmal!",
    t4_l1: "Nervensystem", t4_r1: "Elektrisch, schnell",
    t4_l2: "Hormonsystem", t4_r2: "Chemisch, über Blut",
    t4_l3: "Rückkopplung", t4_r3: "Regelkreis",
    t4_q: "Welches System nutzt das Blut?",
    t4_q_a: "Hormonsystem", t4_q_b: "Nervensystem", t4_q_c: "Muskeln", t4_q_d: "Knochen",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen!",
    t5_b1: "Integration = Einheit.", t5_b2: "Homöostase = Konstanz.", t5_b3: "ATP = Energie.",
    t5_inst: "Wie nennt man das innere Gleichgewicht?",
    t5_gap_sentence2: "Das Leben braucht inneres {gap}.",
    t5_c51: "Gleichgewicht", t5_c52: "Abkühlen", t5_c53: "Ende",
    t5_q: "Wie heißt der abbauende Stoffwechsel?",
    t5_q_a: "Katabolismus", t5_q_b: "Anabolismus", t5_q_c: "Vulkanismus", t5_q_d: "Tourismus",
  },
  ro: {
    explorer_title: "Biosisteme",
    t1_title: "Niveluri", t1_text: "Organismele sunt sisteme ierarhice.",
    t1_b1: "Celulă -> Țesut -> Organ -> Sistem -> Organism.", t1_b2: "Integrare: funcționare coordonată.", t1_b3: "Echilibrul se pierde fără piese.",
    t1_inst: "Potrivește sistemul cu sarcina sa!",
    t1_l1: "Sistem circulator", t1_r1: "Transport nutrienți",
    t1_l2: "Sistem respirator", t1_r2: "Schimb de gaze (O2)",
    t1_l3: "Sistem digestiv", t1_r3: "Descompunere",
    t1_q: "Cum numim munca coordonată?",
    t1_q_a: "Integrare", t1_q_b: "Izolare", t1_q_c: "Evaporare", t1_q_d: "Cristalizare",

    t2_title: "Echilibru Intern", t2_text: "Homeostazia este constanța mediului intern.",
    t2_b1: "Temp corp: ~37°C.", t2_b2: "Glicemia: limite strânse.", t2_b3: "Apa: reglată de rinichi.",
    t2_inst: "Completează!", t2_gap_sentence: "Constanța mediului intern se numește {gap}.",
    t2_c1: "homeostazie", t2_c2: "fotosinteză", t2_c3: "mutație",
    t2_q: "Ce răcește corpul cel mai bine?",
    t2_q_a: "Pielea (transpirația)", t2_q_b: "Scheletul", t2_q_c: "Dinții", t2_q_d: "Auzul",

    t3_title: "Metabolism", t3_text: "Anabolism (sinteză) și catabolism (descompunere).",
    t3_b1: "Anabolism: consumă energie.", t3_b2: "Catabolism: eliberează energie.", t3_b3: "ATP: moneda energetică.",
    t3_inst: "Pune fluxul în ordine!",
    t3_w1: "Ingestie", t3_w2: "Absorbție", t3_w3: "Metabolism", t3_w4: "Excreție",
    t3_q: "Ce este respirația celulară?",
    t3_q_a: "Catabolic", t3_q_b: "Anabolic", t3_q_c: "Evaporare", t3_q_d: "Fără energie",

    t4_title: "Control", t4_text: "Sistemul nervos și cel hormonal colaborează.",
    t4_b1: "Control neuroendocrin.", t4_b2: "Feedback: răspunsul afectează procesul.", t4_b3: "Ex: zahăr -> insulină.",
    t4_inst: "Potrivește sistemul cu trăsătura!",
    t4_l1: "Sistem nervos", t4_r1: "Electric, rapid",
    t4_l2: "Sistem hormonal", t4_r2: "Chimic, prin sânge",
    t4_l3: "Feedback", t4_r3: "Ciclu de autoreglare",
    t4_q: "Mesajele cărui sistem merg prin sânge?",
    t4_q_a: "Hormonal", t4_q_b: "Nervos", t4_q_c: "Muscular", t4_q_d: "Osos",

    t5_title: "Recapitulare", t5_text: "Testează-ți cunoștințele!",
    t5_b1: "Integrare = unitate.", t5_b2: "Homeostazie = constanță.", t5_b3: "ATP = energie.",
    t5_inst: "Cum numim echilibrul intern?",
    t5_gap_sentence2: "Viața cere un {gap} intern.",
    t5_c51: "echilibru", t5_c52: "răcire", t5_c53: "sfârșit",
    t5_q: "Cum numim descompunerea energetică?",
    t5_q_a: "Catabolism", t5_q_b: "Anabolism", t5_q_c: "Vulcanism", t5_q_d: "Turism",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
    svg: (lang) => <CirculationSvg lang={lang} />,
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
    svg: (lang) => <CirculationSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
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
  icon: "🌐",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BioSystemsExplorer = memo(function BioSystemsExplorer({
  color = "#3B82F6",
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
      explorerId="bio_k8_biosystems" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default BioSystemsExplorer;
