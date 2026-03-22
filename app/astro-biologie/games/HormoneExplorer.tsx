"use client";
// HormoneExplorer — Island i6: Hormones & Endocrine System Grade 8
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Endocrine glands, hormone function, feedback mechanisms, imbalances

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Endocrine Glands
    r1_title: "Endocrine Glands & Hormones",
    r1_text: "The endocrine system controls body functions through chemical messengers called hormones.",
    r1_fact1: "Pituitary gland: The master gland that controls growth, reproduction, and other glands",
    r1_fact2: "Thyroid gland: Produces hormones that control metabolism and energy",
    r1_fact3: "Adrenal glands: Release stress hormones like adrenaline for fight-or-flight",
    r1_fact4: "Pancreas: Produces insulin and glucagon to regulate blood sugar",

    // Round 2: How Hormones Work
    r2_title: "How Hormones Travel & Work",
    r2_text: "Hormones travel through the bloodstream and bind to target cells to trigger responses.",
    r2_fact1: "Hormones are chemical messengers that travel slowly but affect many cells",
    r2_fact2: "Target cells have receptors that recognize specific hormones",
    r2_fact3: "When a hormone binds to its receptor, it activates the target cell's response",
    r2_fact4: "Different organs are target organs for different hormones",

    // Round 3: Feedback Mechanisms
    r3_title: "Negative Feedback: The Thermostat",
    r3_text: "Your body uses negative feedback to keep hormone levels balanced, like a thermostat.",
    r3_fact1: "Negative feedback means: when levels get too high, production slows down",
    r3_fact2: "Example: High blood sugar → pancreas releases insulin → blood sugar drops → less insulin",
    r3_fact3: "This keeps your body in homeostasis (balanced state)",
    r3_fact4: "Without feedback, hormone levels would swing wildly up and down",

    // Round 4: Hormone Imbalances
    r4_title: "When Hormones Go Wrong",
    r4_text: "Imbalances in hormones cause diseases. Understanding these helps us treat them.",
    r4_fact1: "Diabetes: Pancreas doesn't produce enough insulin or cells ignore it → blood sugar stays high",
    r4_fact2: "Hypothyroidism: Thyroid doesn't produce enough hormone → slow metabolism, fatigue",
    r4_fact3: "Hyperthyroidism: Too much thyroid hormone → fast metabolism, nervousness",
    r4_fact4: "Growth hormone imbalance: Can cause gigantism (too much) or dwarfism (too little)",

    // Round 3 MCQ
    r3_q: "What does negative feedback do in hormone regulation?",
    r3_q_insulin: "Increases insulin production",
    r3_q_negative: "Stabilizes hormones around a set point",
    r3_q_thyroid: "Reduces thyroid activity",
    r3_q_adrenaline: "Always increases stress hormone levels",

    // Round 4 MCQ
    r4_q: "What disease is caused by growth hormone imbalance?",
    r4_q_diabetes: "Diabetes",
    r4_q_growth: "Gigantism or dwarfism",
    r4_q_thyroid: "Hyperthyroidism",
    r4_q_stress: "Chronic fatigue",

    // Round 5: Quiz
    r5_title: "Hormone Review",
    r5_text: "",

    // Quiz Questions (2-3 questions)
    q1_q: "Which gland is called the 'master gland'?",
    q1_pituitary: "Pituitary gland",
    q1_thyroid: "Thyroid gland",
    q1_pancreas: "Pancreas",
    q1_adrenal: "Adrenal glands",

    q2_q: "What does negative feedback do in hormone regulation?",
    q2_stabilize: "Stabilizes hormone levels around a set point",
    q2_increase: "Constantly increases hormone production",
    q2_decrease: "Always decreases hormone levels",
    q2_random: "Changes hormone levels randomly",

    q3_q: "What hormone does the pancreas produce to lower blood sugar?",
    q3_insulin: "Insulin",
    q3_glucagon: "Glucagon",
    q3_adrenaline: "Adrenaline",
    q3_thyroxine: "Thyroxine",
  },
  de: {
    r1_title: "Endokrine Drüsen & Hormone",
    r1_text: "Das endokrine System steuert Körperfunktionen durch chemische Botenstoffe namens Hormone.",
    r1_fact1: "Hypophyse: Die Meisterdrüse, die Wachstum, Fortpflanzung und andere Drüsen kontrolliert",
    r1_fact2: "Schilddrüse: Produziert Hormone, die Stoffwechsel und Energie kontrollieren",
    r1_fact3: "Nebennieren: Geben Stresshormone wie Adrenalin für Kampf-oder-Flucht frei",
    r1_fact4: "Bauchspeicheldrüse: Produziert Insulin und Glukagon zur Blutzuckerregulation",

    r2_title: "Wie Hormone Reisen & Wirken",
    r2_text: "Hormone reisen durch die Blutbahn und binden an Zielzellen, um Reaktionen auszulösen.",
    r2_fact1: "Hormone sind chemische Botenstoffe, die langsam reisen, aber viele Zellen beeinflussen",
    r2_fact2: "Zielzellen haben Rezeptoren, die bestimmte Hormone erkennen",
    r2_fact3: "Wenn ein Hormon an seinen Rezeptor bindet, aktiviert es die Reaktion der Zielzelle",
    r2_fact4: "Verschiedene Organe sind Zielorgane für verschiedene Hormone",

    r3_title: "Negative Rückkopplung: Das Thermostat",
    r3_text: "Dein Körper nutzt negative Rückkopplung, um Hormonspiegel ausgewogen zu halten.",
    r3_fact1: "Negative Rückkopplung bedeutet: Wenn Werte zu hoch sind, verlangsamt sich die Produktion",
    r3_fact2: "Beispiel: Hoher Blutzucker → Bauchspeicheldrüse gibt Insulin frei → Blutzucker sinkt → weniger Insulin",
    r3_fact3: "Dies erhält deine Körperhomöostase (ausgeglichener Zustand)",
    r3_fact4: "Ohne Rückkopplung würden Hormonspiegel wild auf und ab schwingen",

    r4_title: "Wenn Hormone Schiefgehen",
    r4_text: "Hormonungleichgewichte verursachen Krankheiten. Diese zu verstehen hilft uns, sie zu behandeln.",
    r4_fact1: "Diabetes: Bauchspeicheldrüse produziert nicht genug Insulin oder Zellen ignorieren es → Blutzucker bleibt hoch",
    r4_fact2: "Hypothyreose: Schilddrüse produziert nicht genug Hormon → langsamer Stoffwechsel, Müdigkeit",
    r4_fact3: "Hyperthyreose: Zu viel Schilddrüsenhormon → schneller Stoffwechsel, Nervosität",
    r4_fact4: "Wachstumshormonstörung: Kann Gigantismus (zu viel) oder Zwergwuchs (zu wenig) verursachen",

    // Round 3 MCQ
    r3_q: "Was bewirkt negative Rückkopplung bei der Hormonregulation?",
    r3_q_insulin: "Erhöht die Insulinproduktion",
    r3_q_negative: "Stabilisiert Hormone um einen Sollwert",
    r3_q_thyroid: "Reduziert die Schilddrüsenaktivität",
    r3_q_adrenaline: "Erhöht immer die Stresshormonspiegel",

    // Round 4 MCQ
    r4_q: "Welche Krankheit wird durch ein Wachstumshormonstörung verursacht?",
    r4_q_diabetes: "Diabetes",
    r4_q_growth: "Gigantismus oder Zwergwuchs",
    r4_q_thyroid: "Hyperthyreose",
    r4_q_stress: "Chronische Müdigkeit",

    r5_title: "Hormon-Wiederholung",
    r5_text: "",

    q1_q: "Welche Drüse wird 'Meisterdrüse' genannt?",
    q1_pituitary: "Hypophyse",
    q1_thyroid: "Schilddrüse",
    q1_pancreas: "Bauchspeicheldrüse",
    q1_adrenal: "Nebennieren",

    q2_q: "Was bewirkt negative Rückkopplung bei der Hormonregulation?",
    q2_stabilize: "Stabilisiert Hormonspiegel um einen Sollwert",
    q2_increase: "Erhöht ständig die Hormonproduktion",
    q2_decrease: "Senkt immer Hormonspiegel",
    q2_random: "Ändert Hormonspiegel zufällig",

    q3_q: "Welches Hormon produziert die Bauchspeicheldrüse, um Blutzucker zu senken?",
    q3_insulin: "Insulin",
    q3_glucagon: "Glukagon",
    q3_adrenaline: "Adrenalin",
    q3_thyroxine: "Thyroxin",
  },
  hu: {
    r1_title: "Endokrin mirigyek és Hormonok",
    r1_text: "Az endokrin rendszer a szervezet funkcióit hormonok nevű kémiai hírvivők segítségével szabályozza.",
    r1_fact1: "Hipofízis: A fő mirigy, amely a növekedést, szaporodást és más mirigyeket szabályozza",
    r1_fact2: "Pajzsmirigy: Hormonokat termel, amelyek az anyagcserét és energiát szabályozzák",
    r1_fact3: "Mellékvese: Stresszhormonokat, például adrenalint szabadít fel a küzdelem-vagy-menekülés válaszhoz",
    r1_fact4: "Hasnyálmirigy: Inzulint és glukagont termel a vércukorszint szabályozásához",

    r2_title: "Hogyan Utaznak és Működnek a Hormonok",
    r2_text: "A hormonok a vérkeringésben utaznak, és célsejtek kötődnek, hogy válaszokat váltanak ki.",
    r2_fact1: "A hormonok kémiai hírvivők, amelyek lassan utaznak, de sok sejtet befolyásolnak",
    r2_fact2: "A célsejtek receptorokkal rendelkeznek, amelyek felismerik az adott hormonokat",
    r2_fact3: "Amikor egy hormon receptorajához kötődik, aktiválja a célsejt válaszát",
    r2_fact4: "Különböző szervek különböző hormonok célszervei",

    r3_title: "Negatív Visszacsatolás: A Termosztát",
    r3_text: "A tested negatív visszacsatolást használ az hormonszint kiegyensúlyozásához.",
    r3_fact1: "A negatív visszacsatolás azt jelenti: amikor a szintek túl magasak, a termelés lelassul",
    r3_fact2: "Példa: Magas vércukorszint → hasnyálmirigy inzulint szabadít fel → vércukorszint csökken → kevesebb inzulin",
    r3_fact3: "Ez fenntartja szervezeted homeoszázisát (egyensúlyi állapota)",
    r3_fact4: "Visszacsatolás nélkül a hormonszintek vadul ingadoznának",

    r4_title: "Amikor a Hormonok Rosszul Mennek",
    r4_text: "A hormonok egyensúlyvesztése betegségeket okoz. Ezek megértése segít kezelni őket.",
    r4_fact1: "Diabetes: A hasnyálmirigy nem termel elég inzulint vagy a sejtek figyelmen kívül hagyják → a vércukorszint magas marad",
    r4_fact2: "Hipotireózis: A pajzsmirigy nem termel elég hormont → lassú anyagcsere, fáradtság",
    r4_fact3: "Hipertireózis: Túl sok pajzsmirigy-hormon → gyors anyagcsere, idegesség",
    r4_fact4: "Növekedési hormon egyensúlyvesztése: Óriásteremtést (túl sok) vagy törpeséget (túl kevés) okozhat",

    // Round 3 MCQ
    r3_q: "Mit tesz a negatív visszacsatolás a hormon szabályozásában?",
    r3_q_insulin: "Növeli az inzulintermelést",
    r3_q_negative: "Stabilizálja a hormonokat egy értékpont körül",
    r3_q_thyroid: "Csökkenti a pajzsmirigy aktivitást",
    r3_q_adrenaline: "Mindig növeli a stresszhormon szintjeit",

    // Round 4 MCQ
    r4_q: "Milyen betegséget okoz a növekedési hormon egyensúlyvesztése?",
    r4_q_diabetes: "Diabetes",
    r4_q_growth: "Óriásteremtés vagy törpeség",
    r4_q_thyroid: "Hipertireózis",
    r4_q_stress: "Krónikus fáradtság",

    r5_title: "Hormon Áttekintés",
    r5_text: "",

    q1_q: "Melyik mirigyét nevezik 'mester mirigy'-nek?",
    q1_pituitary: "Hipofízis",
    q1_thyroid: "Pajzsmirigy",
    q1_pancreas: "Hasnyálmirigy",
    q1_adrenal: "Mellékvese",

    q2_q: "Mit tesz a negatív visszacsatolás a hormon szabályozásában?",
    q2_stabilize: "Stabilizálja a hormonszintet egy értékpont körül",
    q2_increase: "Folyamatosan növeli a hormontermelést",
    q2_decrease: "Mindig csökkenti a hormonszintet",
    q2_random: "Véletlenszerűen változtatja a hormonszinteket",

    q3_q: "Melyik hormont termel a hasnyálmirigy a vércukorszint csökkentésére?",
    q3_insulin: "Inzulin",
    q3_glucagon: "Glukagon",
    q3_adrenaline: "Adrenalin",
    q3_thyroxine: "Tiroxin",
  },
  ro: {
    r1_title: "Glande Endocrine și Hormoni",
    r1_text: "Sistemul endocrin controlează funcțiile corpului prin mesageri chimici numiți hormoni.",
    r1_fact1: "Hipofiza: Glanda maestră care controlează creșterea, reproducția și alte glande",
    r1_fact2: "Glanda tiroidă: Produce hormoni care controlează metabolismul și energia",
    r1_fact3: "Glandele suprarenale: Eliberează hormoni de stres, cum ar fi adrenalina, pentru răspunsul luptă-sau-fuge",
    r1_fact4: "Pancreasul: Produce insulină și glucagon pentru a regula glicemia",

    r2_title: "Cum se Deplasează și Funcționează Hormonii",
    r2_text: "Hormonii se deplasează prin fluxul sanguin și se leagă de celulele țintă pentru a declanșa răspunsuri.",
    r2_fact1: "Hormonii sunt mesageri chimici care se deplasează lent, dar afectează multe celule",
    r2_fact2: "Celulele țintă au receptori care recunosc hormoni specifici",
    r2_fact3: "Când un hormon se leagă de receptorul său, activează răspunsul celulei țintă",
    r2_fact4: "Diferitele organe sunt organe țintă pentru diferiți hormoni",

    r3_title: "Feedback Negativ: Termostat",
    r3_text: "Corpul tău folosește feedback negativ pentru a menține nivelurile de hormoni echilibrate.",
    r3_fact1: "Feedback negativ înseamnă: când nivelurile sunt prea ridicate, producția încetinește",
    r3_fact2: "Exemplu: Glicemie ridicată → pancreasul eliberează insulină → glicemia scade → mai puțină insulină",
    r3_fact3: "Aceasta menține homeostazia corpului tău (stare echilibrată)",
    r3_fact4: "Fără feedback, nivelurile de hormoni s-ar balansa sălbatic în sus și în jos",
    r3_q: "Ce face feedback-ul negativ în reglarea hormonilor?",
    r3_q_insulin: "Mărește producția de insulină",
    r3_q_negative: "Stabilizează hormonii în jurul unui punct stabilit",
    r3_q_thyroid: "Reduce activitatea tiroidei",
    r3_q_adrenaline: "Crește pur și simplu nivelurile de stres",

    r4_title: "Când Hormonii se Strică",
    r4_text: "Dezechilibrele hormonale provoacă boli. Înțelegerea acestora ne ajută să le tratăm.",
    r4_fact1: "Diabetul: Pancreasul nu produce suficientă insulină sau celulele o ignora → glicemia rămâne ridicată",
    r4_fact2: "Hipotireoidism: Glanda tiroidă nu produce suficient hormon → metabolism lent, oboseală",
    r4_fact3: "Hipertireoidism: Prea mult hormon tiroidian → metabolism rapid, nervozitate",
    r4_fact4: "Dezechilibru al hormonului de creștere: Poate cauza gigantism (prea mult) sau nanismul (prea puțin)",
    r4_q: "Ce maladie cauzează un dezechilibru de hormon de creștere?",
    r4_q_diabetes: "Diabetul",
    r4_q_growth: "Gigantism sau nanismul",
    r4_q_thyroid: "Hipertireoidismul",
    r4_q_stress: "Oboseala cronică",

    r5_title: "Recapitulare Hormoni",
    r5_text: "",

    q1_q: "Care glandă este numită 'glanda maestră'?",
    q1_pituitary: "Hipofiza",
    q1_thyroid: "Glanda tiroidă",
    q1_pancreas: "Pancreasul",
    q1_adrenal: "Glandele suprarenale",

    q2_q: "Ce face feedback-ul negativ în reglarea hormonilor?",
    q2_stabilize: "Stabilizează nivelurile de hormoni în jurul unui punct stabilit",
    q2_increase: "Crește constant producția de hormoni",
    q2_decrease: "Scade întotdeauna nivelurile de hormoni",
    q2_random: "Modifică nivelurile de hormoni aleatoriu",

    q3_q: "Ce hormon produce pancreasul pentru a scădea nivelul zahărului din sânge?",
    q3_insulin: "Insulina",
    q3_glucagon: "Glucagon",
    q3_adrenaline: "Adrenalina",
    q3_thyroxine: "Tiroxina",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (placeholder shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

const SVG_R1 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Pituitary (small circle at top center) */}
    <circle cx="120" cy="30" r="12" fill="#8B5CF6" opacity="0.8" />
    {/* Thyroid (two lobes connected below pituitary) */}
    <circle cx="100" cy="70" r="14" fill="#06B6D4" opacity="0.8" />
    <circle cx="140" cy="70" r="14" fill="#06B6D4" opacity="0.8" />
    {/* Adrenals (above kidneys) */}
    <rect x="70" y="100" width="15" height="20" fill="#F59E0B" opacity="0.8" rx="3" />
    <rect x="155" y="100" width="15" height="20" fill="#F59E0B" opacity="0.8" rx="3" />
    {/* Pancreas (bottom center) */}
    <path d="M 100 130 Q 120 135 140 130 Q 130 145 110 145 Q 100 140 100 130" fill="#10B981" opacity="0.8" />
  </svg>
);

const SVG_R2 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Hormone molecule (generic) */}
    <circle cx="40" cy="40" r="8" fill="#EC4899" opacity="0.7" />
    <circle cx="60" cy="45" r="6" fill="#EC4899" opacity="0.6" />
    {/* Blood stream (wavy line) */}
    <path
      d="M 30 80 Q 50 70 70 80 T 110 80 T 150 80 T 190 80"
      stroke="#EF4444"
      strokeWidth="12"
      fill="none"
      opacity="0.4"
    />
    {/* Target cell (large shape) */}
    <rect x="140" y="110" width="70" height="40" fill="#8B5CF6" opacity="0.3" rx="5" stroke="#8B5CF6" strokeWidth="2" />
    {/* Receptor on target cell */}
    <circle cx="175" cy="130" r="6" fill="#8B5CF6" opacity="0.9" />
  </svg>
);

const SVG_R3 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Thermostat dial (simplified) */}
    <circle cx="50" cy="50" r="25" fill="#E5E7EB" opacity="0.3" stroke="#9CA3AF" strokeWidth="2" />
    <line x1="50" y1="25" x2="50" y2="15" stroke="#9CA3AF" strokeWidth="2" />
    <circle cx="50" cy="50" r="3" fill="#F59E0B" />
    {/* Arrow showing feedback loop */}
    <path
      d="M 100 60 Q 140 40 160 80 Q 140 100 100 100"
      stroke="#10B981"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
      </marker>
    </defs>
    {/* Balance symbol (circles on scale) */}
    <rect x="140" y="115" width="60" height="8" fill="#D1D5DB" rx="2" />
    <circle cx="160" cy="110" r="10" fill="#06B6D4" opacity="0.6" />
    <circle cx="190" cy="110" r="10" fill="#06B6D4" opacity="0.6" />
  </svg>
);

const SVG_R4 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Body silhouette (simple) */}
    <circle cx="60" cy="40" r="15" fill="#FCA5A5" opacity="0.5" />
    <rect x="45" y="55" width="30" height="40" fill="#FCA5A5" opacity="0.5" rx="3" />
    {/* Organ affected symbol (broken pieces) */}
    <circle cx="180" cy="60" r="20" fill="#EF4444" opacity="0.3" />
    <path d="M 180 40 L 190 55 L 175 65 Z" fill="#EF4444" opacity="0.6" />
    <path d="M 175 50 L 188 60 L 170 75 Z" fill="#EF4444" opacity="0.5" />
    {/* Warning symbol */}
    <polygon points="120,30 130,50 110,50" fill="#FBBF24" opacity="0.7" />
    <text x="120" y="45" fontSize="12" fill="#FBBF24" textAnchor="middle" fontWeight="bold">!</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const HORMONE_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_insulin", "r3_q_negative", "r3_q_thyroid", "r3_q_adrenaline"],
          answer: "r3_q_negative",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_q_diabetes", "r4_q_growth", "r4_q_thyroid", "r4_q_stress"],
          answer: "r4_q_thyroid",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => null,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_pituitary", "q1_thyroid", "q1_pancreas", "q1_adrenal"],
          answer: "q1_pituitary",
        },
        {
          question: "q2_q",
          choices: ["q2_stabilize", "q2_increase", "q2_decrease", "q2_random"],
          answer: "q2_stabilize",
        },
        {
          question: "q3_q",
          choices: ["q3_insulin", "q3_glucagon", "q3_adrenaline", "q3_thyroxine"],
          answer: "q3_insulin",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function HormoneExplorer({ color = "#8B5CF6", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={HORMONE_DEF} color={color} lang={lang} onDone={onDone} />;
}
