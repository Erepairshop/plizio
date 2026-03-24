"use client";
// SenseExplorer.tsx — Bio Island i8: Érzékszervek (K5)
// Topics: 1) Látás 2) Hallás 3) Szag és Ízlelés 4) Tapintás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { EyeSvg, EarSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3E8FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-45" y="10" fontSize="35" textAnchor="middle">🫁</text>
        <text x="0" y="10" fontSize="35" textAnchor="middle">🫀</text>
        <text x="45" y="10" fontSize="35" textAnchor="middle">🥪</text>
        <path d="M -25,0 L -15,0 M 15,0 L 25,0" stroke="#9333EA" strokeWidth="4" strokeDasharray="3 3" />
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🧠</text>
        <text x="20" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Testünk Rendszerei",
    // T1: Emésztés
    t1_title: "Az emésztőrendszer",
    t1_text: "Az emésztőrendszer feladata, hogy a táplálékot lebontsa, és a szervezet számára hasznosítható tápanyagokká alakítsa.",
    t1_b1: "Szájüreg: a fogak felaprítják az ételt.",
    t1_b2: "Gyomor: a gyomorsav elkezdi a fehérjék emésztését.",
    t1_b3: "Vékonybél: itt szívódnak fel a tápanyagok a vérbe.",
    t1_inst: "Hol szívódnak fel a tápanyagok?",
    t1_gap_sentence: "A tápanyagok a {gap} szívódnak fel a véráramba.",
    t1_c1: "vékonybélben", t1_c2: "vastagbélben", t1_c3: "nyelőcsőben",
    t1_q: "Mi a gyomor fő feladata?",
    t1_q_a: "Az étel lebontása a gyomornedvekkel", t1_q_b: "A levegő szűrése", t1_q_c: "A vér pumpálása", t1_q_d: "A salakanyagok ürítése",

    // T2: Keringés
    t2_title: "A keringési rendszer",
    t2_text: "A keringési rendszer szállítja a tápanyagokat és az oxigént a test minden sejtjéhez, és elszállítja a salakanyagokat.",
    t2_b1: "Szív: az izmos pumpa, amely keringeti a vért.",
    t2_b2: "Artériák (ütőerek): a szívből viszik a vért a testbe.",
    t2_b3: "Vénák (gyűjtőerek): a testből viszik vissza a vért a szívbe.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "szív", t2_w3: "pumpálja", t2_w4: "a", t2_w5: "vért.",
    t2_q: "Milyen erek viszik a vért a szívből a test felé?",
    t2_q_a: "Artériák (ütőerek)", t2_q_b: "Vénák", t2_q_c: "Hajszálerek", t2_q_d: "Nyirokerek",

    // T3: Légzés
    t3_title: "A légzőrendszer",
    t3_text: "A légzőrendszer biztosítja a szervezet számára szükséges oxigént, és eltávolítja a felesleges szén-dioxidot.",
    t3_b1: "Orr- és szájüreg: itt áramlik be a levegő.",
    t3_b2: "Légcső: csővezeték a tüdő felé.",
    t3_b3: "Tüdő: itt történik a gázcsere (oxigén be, szén-dioxid ki).",
    t3_inst: "Párosítsd a fogalmakat!",
    t3_l1: "Belégzés", t3_r1: "Oxigén felvétele",
    t3_l2: "Kilégzés", t3_r2: "Szén-dioxid leadása",
    t3_l3: "Tüdő", t3_r3: "A gázcsere szerve",
    t3_q: "Melyik gázt lélegezzük ki nagyobb mennyiségben?",
    t3_q_a: "Szén-dioxidot", t3_q_b: "Oxigént", t3_q_c: "Nitrogént", t3_q_d: "Héliumot",

    // T4: Rendszerek együttműködése
    t4_title: "Hogyan dolgoznak együtt?",
    t4_text: "A test rendszerei nem működhetnek egymás nélkül. A keringési rendszer szállítja a tüdőből az oxigént és a bélből a tápanyagot a sejtekhez.",
    t4_b1: "A tüdő oxigént ad a vérnek.",
    t4_b2: "A vékonybél tápanyagot ad a vérnek.",
    t4_b3: "A szív mindezt elpumpálja a test minden pontjára.",
    t4_inst: "Légzőrendszer vagy Emésztőrendszer? Válogasd szét a szerveket!",
    t4_bucket_leg: "Légzőrendszer",
    t4_bucket_eme: "Emésztőrendszer",
    t4_item_l1: "Tüdő", t4_item_l2: "Légcső",
    t4_item_e1: "Gyomor", t4_item_e2: "Vékonybél",
    t4_q: "Melyik rendszer juttatja el a tápanyagokat a sejtekhez?",
    t4_q_a: "A keringési rendszer", t4_q_b: "A légzőrendszer", t4_q_c: "Az emésztőrendszer", t4_q_d: "A csontvázrendszer",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod az emberi test csodálatos rendszereiről!",
    t5_b1: "Emésztés: táplálék lebontása.",
    t5_b2: "Légzés: oxigén felvétele.",
    t5_b3: "Keringés: szállítás a szív segítségével.",
    t5_inst: "Hogyan működnek a testrendszerek?",
    t5_gap_sentence2: "A testrendszerek szorosan {gap} működnek a túlélésért.",
    t5_c51: "együtt", t5_c52: "külön", t5_c53: "egymás ellen",
    t5_q: "Melyik szerv NEM a légzőrendszer része?",
    t5_q_a: "A szív", t5_q_b: "A tüdő", t5_q_c: "A légcső", t5_q_d: "Az orrüreg",
  },
  en: {
    explorer_title: "Body Systems",
    t1_title: "The Digestive System", t1_text: "The digestive system breaks down food and turns it into nutrients the body can use.",
    t1_b1: "Mouth: teeth chew and crush the food.", t1_b2: "Stomach: stomach acid starts digesting proteins.", t1_b3: "Small intestine: nutrients are absorbed into the blood here.",
    t1_inst: "Where are nutrients absorbed?", t1_gap_sentence: "Nutrients are absorbed into the blood in the {gap}.",
    t1_c1: "small intestine", t1_c2: "large intestine", t1_c3: "esophagus",
    t1_q: "What is the main job of the stomach?", t1_q_a: "Breaking down food with juices", t1_q_b: "Filtering air", t1_q_c: "Pumping blood", t1_q_d: "Removing waste",

    t2_title: "The Circulatory System", t2_text: "The circulatory system transports nutrients and oxygen to every cell in the body and carries away waste products.",
    t2_b1: "Heart: the muscular pump that circulates blood.", t2_b2: "Arteries: carry blood away from the heart.", t2_b3: "Veins: carry blood back to the heart.",
    t2_inst: "Put the words in order!",
    t2_w1: "The", t2_w2: "heart", t2_w3: "pumps", t2_w4: "the", t2_w5: "blood.",
    t2_q: "Which blood vessels carry blood away from the heart?", t2_q_a: "Arteries", t2_q_b: "Veins", t2_q_c: "Capillaries", t2_q_d: "Lymph vessels",

    t3_title: "The Respiratory System", t3_text: "The respiratory system provides the body with necessary oxygen and removes excess carbon dioxide.",
    t3_b1: "Nose and mouth: where air enters.", t3_b2: "Trachea: the windpipe leading to the lungs.", t3_b3: "Lungs: where gas exchange happens (oxygen in, CO2 out).",
    t3_inst: "Match the concepts!",
    t3_l1: "Inhalation", t3_r1: "Taking in oxygen", t3_l2: "Exhalation", t3_r2: "Releasing carbon dioxide", t3_l3: "Lungs", t3_r3: "Organ of gas exchange",
    t3_q: "Which gas do we exhale in larger amounts?", t3_q_a: "Carbon dioxide", t3_q_b: "Oxygen", t3_q_c: "Nitrogen", t3_q_d: "Helium",

    t4_title: "How They Work Together", t4_text: "Body systems cannot work without each other. The circulatory system carries oxygen from the lungs and nutrients from the intestines to the cells.",
    t4_b1: "Lungs give oxygen to the blood.", t4_b2: "Small intestine gives nutrients to the blood.", t4_b3: "The heart pumps all of this throughout the body.",
    t4_inst: "Respiratory or Digestive System? Sort the organs!",
    t4_bucket_leg: "Respiratory System", t4_bucket_eme: "Digestive System",
    t4_item_l1: "Lungs", t4_item_l2: "Trachea", t4_item_e1: "Stomach", t4_item_e2: "Small Intestine",
    t4_q: "Which system delivers nutrients to the cells?", t4_q_a: "The circulatory system", t4_q_b: "The respiratory system", t4_q_c: "The digestive system", t4_q_d: "The skeletal system",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the amazing systems of the human body!",
    t5_b1: "Digestion: breaking down food.", t5_b2: "Respiration: taking in oxygen.", t5_b3: "Circulation: transport using the heart.",
    t5_inst: "How do body systems function?", t5_gap_sentence2: "Body systems work closely {gap} for survival.",
    t5_c51: "together", t5_c52: "apart", t5_c53: "against each other",
    t5_q: "Which organ is NOT part of the respiratory system?", t5_q_a: "The heart", t5_q_b: "The lungs", t5_q_c: "The trachea", t5_q_d: "The nasal cavity",
  },
  de: {
    explorer_title: "Körpersysteme",
    t1_title: "Das Verdauungssystem", t1_text: "Das Verdauungssystem zerkleinert die Nahrung und wandelt sie in verwertbare Nährstoffe um.",
    t1_b1: "Mundhöhle: Zähne zerkleinern das Essen.", t1_b2: "Magen: Magensäure beginnt mit der Verdauung von Proteinen.", t1_b3: "Dünndarm: Hier werden Nährstoffe ins Blut aufgenommen.",
    t1_inst: "Wo werden Nährstoffe aufgenommen?", t1_gap_sentence: "Nährstoffe werden im {gap} ins Blut aufgenommen.",
    t1_c1: "Dünndarm", t1_c2: "Dickdarm", t1_c3: "Speiseröhre",
    t1_q: "Was ist die Hauptaufgabe des Magens?", t1_q_a: "Nahrung mit Säure zersetzen", t1_q_b: "Luft filtern", t1_q_c: "Blut pumpen", t1_q_d: "Abfall ausscheiden",

    t2_title: "Das Herz-Kreislauf-System", t2_text: "Das Kreislaufsystem transportiert Nährstoffe und Sauerstoff zu allen Zellen und transportiert Abfallstoffe ab.",
    t2_b1: "Herz: der muskulöse Antrieb, der das Blut pumpt.", t2_b2: "Arterien (Schlagadern): führen Blut vom Herzen weg.", t2_b3: "Venen: führen Blut zum Herzen zurück.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Das", t2_w2: "Herz", t2_w3: "pumpt", t2_w4: "das", t2_w5: "Blut.",
    t2_q: "Welche Blutgefäße führen das Blut vom Herzen in den Körper?", t2_q_a: "Arterien", t2_q_b: "Venen", t2_q_c: "Kapillaren", t2_q_d: "Lymphgefäße",

    t3_title: "Das Atmungssystem", t3_text: "Das Atmungssystem versorgt den Körper mit Sauerstoff und entfernt überschüssiges Kohlendioxid.",
    t3_b1: "Nase und Mund: hier strömt die Luft ein.", t3_b2: "Luftröhre: das Rohr zur Lunge.", t3_b3: "Lunge: hier findet der Gasaustausch statt.",
    t3_inst: "Verbinde die Begriffe!",
    t3_l1: "Einatmen", t3_r1: "Sauerstoff aufnehmen", t3_l2: "Ausatmen", t3_r2: "Kohlendioxid abgeben", t3_l3: "Lunge", t3_r3: "Organ des Gasaustauschs",
    t3_q: "Welches Gas atmen wir in größeren Mengen aus?", t3_q_a: "Kohlendioxid", t3_q_b: "Sauerstoff", t3_q_c: "Stickstoff", t3_q_d: "Helium",

    t4_title: "Zusammenwirken der Systeme", t4_text: "Die Körpersysteme können nicht ohne einander arbeiten. Der Kreislauf bringt Sauerstoff aus der Lunge und Nährstoffe aus dem Darm zu den Zellen.",
    t4_b1: "Die Lunge gibt dem Blut Sauerstoff.", t4_b2: "Der Dünndarm gibt dem Blut Nährstoffe.", t4_b3: "Das Herz pumpt alles durch den ganzen Körper.",
    t4_inst: "Atmungssystem oder Verdauungssystem? Sortiere die Organe!",
    t4_bucket_leg: "Atmungssystem", t4_bucket_eme: "Verdauungssystem",
    t4_item_l1: "Lunge", t4_item_l2: "Luftröhre", t4_item_e1: "Magen", t4_item_e2: "Dünndarm",
    t4_q: "Welches System transportiert die Nährstoffe zu den Zellen?", t4_q_a: "Kreislaufsystem", t4_q_b: "Atmungssystem", t4_q_c: "Verdauungssystem", t4_q_d: "Skelettsystem",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die erstaunlichen Systeme des menschlichen Körpers!",
    t5_b1: "Verdauung: Nahrung zerlegen.", t5_b2: "Atmung: Sauerstoff aufnehmen.", t5_b3: "Kreislauf: Transport durch das Herz.",
    t5_inst: "Wie funktionieren die Körpersysteme?", t5_gap_sentence2: "Die Körpersysteme arbeiten eng {gap}.",
    t5_c51: "zusammen", t5_c52: "getrennt", t5_c53: "gegeneinander",
    t5_q: "Welches Organ ist KEIN Teil des Atmungssystems?", t5_q_a: "Das Herz", t5_q_b: "Die Lunge", t5_q_c: "Die Luftröhre", t5_q_d: "Die Nasenhöhle",
  },
  ro: {
    explorer_title: "Sistemele Corpului",
    t1_title: "Sistemul Digestiv", t1_text: "Sistemul digestiv descompune hrana și o transformă în nutrienți pe care corpul îi poate folosi.",
    t1_b1: "Cavitatea bucală: dinții mărunțesc mâncarea.", t1_b2: "Stomacul: acidul gastric începe digestia proteinelor.", t1_b3: "Intestinul subțire: aici nutrienții sunt absorbiți în sânge.",
    t1_inst: "Unde sunt absorbiți nutrienții?", t1_gap_sentence: "Nutrienții sunt absorbiți în sânge în {gap}.",
    t1_c1: "intestinul subțire", t1_c2: "intestinul gros", t1_c3: "esofag",
    t1_q: "Care este principala sarcină a stomacului?", t1_q_a: "Să descompună hrana cu sucuri", t1_q_b: "Să filtreze aerul", t1_q_c: "Să pompeze sângele", t1_q_d: "Să elimine deșeurile",

    t2_title: "Sistemul Circulator", t2_text: "Sistemul circulator transportă nutrienți și oxigen la fiecare celulă și elimină deșeurile.",
    t2_b1: "Inima: pompa musculară care pune sângele în mișcare.", t2_b2: "Arterele: duc sângele de la inimă în corp.", t2_b3: "Venele: aduc sângele înapoi la inimă.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Inima", t2_w2: "pompează", t2_w3: "sângele", t2_w4: "în", t2_w5: "corp.",
    t2_q: "Ce vase de sânge duc sângele de la inimă către corp?", t2_q_a: "Arterele", t2_q_b: "Venele", t2_q_c: "Capilarele", t2_q_d: "Vasele limfatice",

    t3_title: "Sistemul Respirator", t3_text: "Sistemul respirator asigură organismului oxigenul necesar și elimină dioxidul de carbon.",
    t3_b1: "Nas și gură: pe aici intră aerul.", t3_b2: "Traheea: tubul care duce la plămâni.", t3_b3: "Plămânii: aici are loc schimbul de gaze.",
    t3_inst: "Potrivește conceptele!",
    t3_l1: "Inspirație", t3_r1: "Preluarea oxigenului", t3_l2: "Expirație", t3_r2: "Eliminarea dioxidului de carbon", t3_l3: "Plămâni", t3_r3: "Organul schimbului de gaze",
    t3_q: "Ce gaz expirăm în cantități mai mari?", t3_q_a: "Dioxid de carbon", t3_q_b: "Oxigen", t3_q_c: "Azot", t3_q_d: "Heliu",

    t4_title: "Cooperarea Sistemelor", t4_text: "Sistemele corpului nu pot funcționa unele fără altele. Sistemul circulator transportă oxigen de la plămâni și nutrienți de la intestine la celule.",
    t4_b1: "Plămânii dau oxigen sângelui.", t4_b2: "Intestinul subțire dă nutrienți sângelui.", t4_b3: "Inima pompează toate acestea prin corp.",
    t4_inst: "Sistem respirator sau digestiv? Sortează organele!",
    t4_bucket_leg: "Sistemul Respirator", t4_bucket_eme: "Sistemul Digestiv",
    t4_item_l1: "Plămâni", t4_item_l2: "Trahee", t4_item_e1: "Stomac", t4_item_e2: "Intestin subțire",
    t4_q: "Care sistem livrează nutrienți celulelor?", t4_q_a: "Sistemul circulator", t4_q_b: "Sistemul respirator", t4_q_c: "Sistemul digestiv", t4_q_d: "Sistemul scheletic",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre sistemele uimitoare ale corpului uman!",
    t5_b1: "Digestie: descompunerea hranei.", t5_b2: "Respirație: asimilarea oxigenului.", t5_b3: "Circulație: transport folosind inima.",
    t5_inst: "Cum funcționează sistemele corpului?", t5_gap_sentence2: "Sistemele corpului lucrează strâns {gap}.",
    t5_c51: "împreună", t5_c52: "separat", t5_c53: "unele împotriva altora",
    t5_q: "Care organ NU face parte din sistemul respirator?", t5_q_a: "Inima", t5_q_b: "Plămânii", t5_q_c: "Traheea", t5_q_d: "Cavitatea nazală",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <DigestiveSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <HeartSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
    svg: (lang) => <LungsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b3",
      hint2: "t3_b1",
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
        { id: "leg", label: "t4_bucket_leg" },
        { id: "eme", label: "t4_bucket_eme" },
      ],
      items: [
        { text: "t4_item_l1", bucketId: "leg" },
        { text: "t4_item_e1", bucketId: "eme" },
        { text: "t4_item_l2", bucketId: "leg" },
        { text: "t4_item_e2", bucketId: "eme" },
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
  icon: "💪",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SenseExplorer = memo(function SenseExplorer({
  color = "#8B5CF6", // Lila az érzékszervek nyitott szenvediléhez
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
      explorerId="bio_k5_senses"
      color={color}
      lang={lang}
      onDone={onDone}
    />
  );
});

export default SenseExplorer;
