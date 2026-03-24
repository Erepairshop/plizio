"use client";
// HormoneExplorer.tsx — Bio Island i3: Hormonok (K8)
// Topics: 1) Belső elválasztású mirigyek 2) Hogyan hatnak a hormonok? 3) Vércukor szabályozás 4) Pajzsmirigy és anyagcsere 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { HormoneSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF4FF" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,0 L 40,0" stroke="#A855F7" strokeWidth="4" markerEnd="url(#arrow)" strokeDasharray="8 4" />
        <circle cx="-70" cy="0" r="15" fill="#C084FC" />
        <rect x="45" y="-20" width="40" height="40" rx="5" fill="#E9D5FF" stroke="#7E22CE" strokeWidth="2" />
        <text x="-70" y="5" fontSize="10" fill="white" textAnchor="middle">G</text>
        <text x="65" y="5" fontSize="10" fill="#7E22CE" textAnchor="middle">T</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">⚗️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hormonrendszer",
    // T1: Mirigyek (Label-diagram)
    t1_title: "Belső elválasztású mirigyek",
    t1_text: "A hormonokat speciális mirigyek termelik, melyek váladékukat közvetlenül a vérbe ürítik. Ezek az anyagok távoli szervek működését hangolják össze.",
    t1_b1: "Agyalapi mirigy: a rendszer karmestere, más mirigyeket irányít.",
    t1_b2: "Pajzsmirigy: az anyagcsere sebességéért felel.",
    t1_b3: "Hasnyálmirigy: a vércukorszintet szabályozza.",
    t1_inst: "Címkézd fel a legfontosabb hormontermelő mirigyeket!",
    t1_area_pituitary: "Agyalapi mirigy",
    t1_area_thyroid: "Pajzsmirigy",
    t1_area_pancreas: "Hasnyálmirigy",
    t1_area_adrenal: "Mellékvese",
    t1_q: "Hová ürítik váladékukat a belső elválasztású mirigyek?",
    t1_q_a: "Közvetlenül a vérbe", t1_q_b: "A bőrfelszínre", t1_q_c: "A tápcsatornába", t1_q_d: "A tüdőbe",

    // T2: Hormonhatás (Match-pairs)
    t2_title: "Hírvivők a vérben",
    t2_text: "A hormonok kémiai hírvivők. Csak azokon a sejtcsoportokon (célszerveken) hatnak, amelyek rendelkeznek a megfelelő receptorral.",
    t2_b1: "A hatás lassabb, de tartósabb, mint az idegrendszeré.",
    t2_b2: "Már egészen kis mennyiség is óriási változást okoz.",
    t2_b3: "Példa: az adrenalin felkészíti a testet a harcra vagy menekülésre.",
    t2_inst: "Párosítsd a hormont a rá jellemző hatással!",
    t2_l1: "Inzulin", t2_r1: "Vércukorszint csökkentése",
    t2_l2: "Adrenalin", t2_r2: "Gyorsabb szívverés, riadó",
    t2_l3: "Növekedési hormon", t2_r3: "Csontok és izmok fejlődése",
    t2_q: "Melyik állítás igaz a hormonális szabályozásra?",
    t2_q_a: "Lassabb, de tartósabb hatású, mint az idegi jelek", t2_q_b: "Fénysebességgel terjed", t2_q_c: "Csak az agyban hat", t2_q_d: "Nincs köze a vérhez",

    // T3: Vércukor (Gap-fill)
    t3_title: "A vércukorszint egyensúlya",
    t3_text: "A hasnyálmirigy két hormonnal, az inzulinnal és a glukagonnal tartja egyensúlyban a vér cukorszintjét.",
    t3_b1: "Inzulin: segít a cukornak bejutni a sejtekbe (csökkenti a szintet).",
    t3_b2: "Glukagon: raktározott cukrot szabadít fel (emeli a szintet).",
    t3_b3: "Cukorbetegség: ha az inzulinhatás elmarad, a vércukorszint túl magas lesz.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "Étkezés után a hasnyálmirigy {gap} termel, hogy csökkentse a vércukorszintet.",
    t3_c1: "inzulint", t3_c2: "adrenalint", t3_c3: "epét",
    t3_q: "Melyik szervünk termeli az inzulint?",
    t3_q_a: "Hasnyálmirigy", t3_q_b: "Máj", t3_q_c: "Vese", t3_q_d: "Gyomor",

    // T4: Pajzsmirigy
    t4_title: "Anyagcsere és pajzsmirigy",
    t4_text: "A pajzsmirigy hormonjai (pl. tiroxin) határozzák meg, milyen gyorsan 'égessük' el a tápanyagokat.",
    t4_b1: "Túlműködés: fogyás, nyugtalanság, gyors szívverés.",
    t4_b2: "Alulműködés: hízás, fáradékonyság, lassúság.",
    t4_b3: "A pajzsmirigy működéséhez jódra van szüksége a szervezetnek.",
    t4_inst: "Melyik elem nélkülözhetetlen a pajzsmirigy működéséhez?",
    t4_gap_sentence2: "A tiroxin hormon előállításához a szervezetnek {gap} van szüksége.",
    t4_c51: "jódra", t4_c52: "vasra", t4_c53: "cukorra",
    t4_q: "Mi történik a testtel pajzsmirigy-alulműködés esetén?",
    t4_q_a: "Lassul az anyagcsere és fáradékonyság lép fel", t4_q_b: "Hirtelen extra energia keletkezik", t4_q_c: "Kizöldül a bőr", t4_q_d: "Megáll a növekedés",

    // T5: Review
    t5_title: "Hormonális összefoglaló",
    t5_text: "A hormonok az életfolyamatok láthatatlan irányítói, a növekedéstől a szaporodásig.",
    t5_b1: "Mirigyek váladéka a vérbe kerül.",
    t5_b2: "A szabályozás alapja a visszacsatolás.",
    t5_b3: "A hormonok célszerveken hatnak.",
    t5_inst: "Hogy nevezzük az agyalapi mirigy által termelt, növekedést serkentő anyagot?",
    t5_gap_sentence3: "A testünk növekedését a {gap} irányítja.",
    t5_c61: "növekedési hormon", t5_c62: "inzulin", t5_c63: "adrenalin",
    t5_q: "Melyik mirigy irányítja a többi belső elválasztású mirigyet?",
    t5_q_a: "Agyalapi mirigy", t5_q_b: "Pajzsmirigy", t5_q_c: "Mellékvese", t5_q_d: "Ivar mirigyek",
  },
  en: {
    explorer_title: "Endocrine System",
    t1_title: "Endocrine Glands", t1_text: "Hormones are produced by special glands that release their secretions directly into the blood.",
    t1_b1: "Pituitary gland: the master gland, controls others.", t1_b2: "Thyroid: responsible for metabolic rate.", t1_b3: "Pancreas: regulates blood sugar levels.",
    t1_inst: "Label the most important endocrine glands!",
    t1_area_pituitary: "Pituitary gland", t1_area_thyroid: "Thyroid gland", t1_area_pancreas: "Pancreas", t1_area_adrenal: "Adrenal gland",
    t1_q: "Where do endocrine glands release their hormones?", t1_q_a: "Directly into the blood", t1_q_b: "To skin surface", t1_q_c: "To digestive tract", t1_q_d: "To lungs",

    t2_title: "Messengers in Blood", t2_text: "Hormones are chemical messengers. They only act on target cells with the correct receptor.",
    t2_b1: "Action is slower but longer-lasting than the nervous system.", t2_b2: "Small amounts cause huge changes.", t2_b3: "E.g., adrenaline prepares for fight or flight.",
    t2_inst: "Match the hormone with its effect!",
    t2_l1: "Insulin", t2_r1: "Lowering blood sugar",
    t2_l2: "Adrenaline", t2_r2: "Fast heartbeat, alert",
    t2_l3: "Growth hormone", t2_r3: "Bone and muscle development",
    t2_q: "Which statement is true for hormonal regulation?", t2_q_a: "Slower but longer-lasting than nerve signals", t2_q_b: "Travels at light speed", t2_q_c: "Only acts in the brain", t2_q_d: "Not related to blood",

    t3_title: "Blood Sugar Balance", t3_text: "The pancreas balances sugar with insulin and glucagon.",
    t3_b1: "Insulin: helps sugar enter cells (lowers level).", t3_b2: "Glucagon: releases stored sugar (raises level).", t3_b3: "Diabetes: occurs if insulin action fails.",
    t3_inst: "Complete the sentence!", t3_gap_sentence: "After eating, the pancreas produces {gap} to lower blood sugar.",
    t3_c1: "insulin", t3_c2: "adrenaline", t3_c3: "bile",
    t3_q: "Which organ produces insulin?", t3_q_a: "Pancreas", t3_q_b: "Liver", t3_q_c: "Kidney", t3_q_d: "Stomach",

    t4_title: "Metabolism & Thyroid", t4_text: "Thyroid hormones (e.g., thyroxine) determine how fast we 'burn' nutrients.",
    t4_b1: "Hyperthyroidism: weight loss, restlessness.", t4_b2: "Hypothyroidism: weight gain, fatigue.", t4_b3: "The body needs iodine for thyroid function.",
    t4_inst: "Which element is vital for the thyroid?", t4_gap_sentence2: "To produce thyroxine, the body needs {gap}.",
    t4_c51: "iodine", t4_c52: "iron", t4_c53: "sugar",
    t4_q: "What happens during hypothyroidism?", t4_q_a: "Metabolism slows down and fatigue occurs", t4_q_b: "Sudden extra energy", t4_q_c: "Skin turns green", t4_q_d: "Growth stops",

    t5_title: "Hormonal Summary", t5_text: "Hormones are invisible directors of life processes.",
    t5_b1: "Gland secretions enter the blood.", t5_b2: "Regulation is based on feedback.", t5_b3: "Hormones act on target organs.",
    t5_inst: "What is the substance produced by the pituitary that stimulates growth?", t5_gap_sentence3: "Body growth is directed by {gap}.",
    t5_c61: "growth hormone", t5_c62: "insulin", t5_c63: "adrenaline",
    t5_q: "Which gland directs other endocrine glands?", t5_q_a: "Pituitary gland", t5_q_b: "Thyroid", t5_q_c: "Adrenal", t5_q_d: "Gonads",
  },
  de: {
    explorer_title: "Hormonsystem",
    t1_title: "Endokrine Drüsen", t1_text: "Hormone werden von speziellen Drüsen direkt ins Blut abgegeben.",
    t1_b1: "Hypophyse: Dirigent des Systems, steuert andere Drüsen.", t1_b2: "Schilddrüse: verantwortlich für Stoffwechseltempo.", t1_b3: "Bauchspeicheldrüse: regelt den Blutzucker.",
    t1_inst: "Beschrifte die wichtigsten Hormondrüsen!",
    t1_area_pituitary: "Hypophyse", t1_area_thyroid: "Schilddrüse", t1_area_pancreas: "Bauchspeicheldrüse", t1_area_adrenal: "Nebenniere",
    t1_q: "Wohin geben endokrine Drüsen ihre Hormone ab?", t1_q_a: "Direkt ins Blut", t1_q_b: "Auf die Haut", t1_q_c: "In den Darm", t1_q_d: "In die Lunge",

    t2_title: "Botenstoffe im Blut", t2_text: "Hormone sind chemische Botenstoffe. Sie wirken nur an Zielzellen mit dem passenden Rezeptor.",
    t2_b1: "Wirkung langsamer, aber anhaltender als beim Nervensystem.", t2_b2: "Winzige Mengen bewirken große Änderungen.", t2_b3: "Z.B. Adrenalin bereitet auf Kampf oder Flucht vor.",
    t2_inst: "Verbinde Hormon und Wirkung!",
    t2_l1: "Insulin", t2_r1: "Senkung des Blutzuckers",
    t2_l2: "Adrenalin", t2_r2: "Herzschlag beschleunigen",
    t2_l3: "Wachstumshormon", t2_r3: "Entwicklung von Knochen",
    t2_q: "Was stimmt für die hormonelle Steuerung?", t2_q_a: "Langsamer, aber langlebiger als Nervensignale", t2_q_b: "Lichtgeschwindigkeit", t2_q_c: "Nur im Gehirn", t2_q_d: "Kein Bezug zum Blut",

    t3_title: "Blutzucker-Gleichgewicht", t3_text: "Die Bauchspeicheldrüse nutzt Insulin und Glukagon.",
    t3_b1: "Insulin: senkt den Spiegel.", t3_b2: "Glukagon: hebt den Spiegel.", t3_b3: "Diabetes: tritt auf, wenn Insulin nicht wirkt.",
    t3_inst: "Ergänze den Satz!", t3_gap_sentence: "Nach dem Essen produziert der Körper {gap}.",
    t3_c1: "Insulin", t3_c2: "Adrenalin", t3_c3: "Galle",
    t3_q: "Welches Organ bildet Insulin?", t3_q_a: "Bauchspeicheldrüse", t3_q_b: "Leber", t3_q_c: "Niere", t3_q_d: "Magen",

    t4_title: "Schilddrüse", t4_text: "Schilddrüsenhormone (z.B. Thyroxin) regeln die Energieverbrennung.",
    t4_b1: "Überfunktion: Gewichtsverlust, Unruhe.", t4_b2: "Unterfunktion: Gewichtszunahme, Müdigkeit.", t4_b3: "Der Körper benötigt Jod für die Schilddrüse.",
    t4_inst: "Welches Element ist lebensnotwendig?", t4_gap_sentence2: "Für Thyroxin braucht der Körper {gap}.",
    t4_c51: "Jod", t4_c52: "Eisen", t4_c53: "Zucker",
    t4_q: "Was passiert bei einer Schilddrüsenunterfunktion?", t4_q_a: "Stoffwechsel verlangsamt sich", t4_q_b: "Extra Energie", t4_q_c: "Haut wird grün", t4_q_d: "Wachstumsstopp",

    t5_title: "Zusammenfassung", t5_text: "Hormone steuern fast alles im Körper.",
    t5_b1: "Abgabe ins Blut.", t5_b2: "Regelung durch Rückkopplung.", t5_b3: "Wirken an Zielorganen.",
    t5_inst: "Wie heißt das Hormon für das Körperwachstum?", t5_gap_sentence3: "Das Wachstum wird durch das {gap} gesteuert.",
    t5_c61: "Wachstumshormon", t5_c62: "Insulin", t5_c63: "Adrenalin",
    t5_q: "Welche Drüse steuert die anderen?", t5_q_a: "Hypophyse", t5_q_b: "Schilddrüse", t5_q_c: "Nebenniere", t5_q_d: "Keimdrüsen",
  },
  ro: {
    explorer_title: "Sistemul Endocrin",
    t1_title: "Glandele Endocrine", t1_text: "Hormonii sunt produși de glande speciale care își varsă secreția direct în sânge.",
    t1_b1: "Hipofiza: coordonatorul sistemului, conduce alte glande.", t1_b2: "Tiroida: responsabilă de rata metabolismului.", t1_b3: "Pancreasul: reglează nivelul zahărului în sânge.",
    t1_inst: "Etichetează principalele glande endocrine!",
    t1_area_pituitary: "Hipofiza", t1_area_thyroid: "Tiroida", t1_area_pancreas: "Pancreas", t1_area_adrenal: "Suprarenale",
    t1_q: "Unde își varsă glandele endocrine hormonii?", t1_q_a: "Direct în sânge", t1_q_b: "La suprafața pielii", t1_q_c: "În tubul digestiv", t1_q_d: "În plămâni",

    t2_title: "Mesageri în Sânge", t2_text: "Hormonii sunt mesageri chimici. Acționează doar pe celulele țintă cu receptorul corect.",
    t2_b1: "Acțiune mai lentă, dar mai durabilă decât a sistemului nervos.", t2_b2: "Cantități mici cauzează schimbări uriașe.", t2_b3: "Ex: adrenalina pregătește corpul pentru luptă sau fugă.",
    t2_inst: "Potrivește hormonul cu efectul său!",
    t2_l1: "Insulina", t2_r1: "Scăderea glicemiei",
    t2_l2: "Adrenalina", t2_r2: "Bătăi rapide de inimă",
    t2_l3: "Hormon de creștere", t2_r3: "Dezvoltarea oaselor",
    t2_q: "Ce este adevărat despre reglarea hormonală?", t2_q_a: "Mai lentă, dar cu efect mai lung decât semnalele nervoase", t2_q_b: "Se propagă cu viteza luminii", t2_q_c: "Acționează doar în creier", t2_q_d: "Nu are legătură cu sângele",

    t3_title: "Echilibrul Glicemiei", t3_text: "Pancreasul echilibrează zahărul prin insulină și glucagon.",
    t3_b1: "Insulina: scade nivelul glicemiei.", t3_b2: "Glucagonul: crește nivelul glicemiei.", t3_b3: "Diabetul: apare când insulina nu funcționează corect.",
    t3_inst: "Completează fraza!", t3_gap_sentence: "După masă, pancreasul produce {gap} pentru a scădea glicemia.",
    t3_c1: "insulină", t3_c2: "adrenalină", t3_c3: "bilă",
    t3_q: "Care organ produce insulina?", t3_q_a: "Pancreasul", t3_q_b: "Ficatul", t3_q_c: "Rinichiul", t3_q_d: "Stomacul",

    t4_title: "Tiroida", t4_text: "Hormonii tiroidieni (ex: tiroxina) determină cât de repede 'ardem' nutrienții.",
    t4_b1: "Hipertiroidism: scădere în greutate, neliniște.", t4_b2: "Hipotiroidism: îngrășare, oboseală.", t4_b3: "Corpul are nevoie de iod pentru tiroidă.",
    t4_inst: "Ce element este vital pentru tiroidă?", t4_gap_sentence2: "Pentru a produce tiroxină, corpul are nevoie de {gap}.",
    t4_c51: "iod", t4_c52: "fier", t4_c53: "zahăr",
    t4_q: "Ce se întâmplă în caz de hipotiroidism?", t4_q_a: "Metabolismul încetinește și apare oboseala", t4_q_b: "Energie extra subită", t4_q_c: "Pielea devine verde", t4_q_d: "Creșterea se oprește",

    t5_title: "Recapitulare", t5_text: "Hormonii sunt regizorii invizibili ai vieții.",
    t5_b1: "Secreție în sânge.", t5_b2: "Reglare prin feedback.", t5_b3: "Acțiune pe organe țintă.",
    t5_inst: "Cum se numește hormonul care stimulează creșterea corpului?", t5_gap_sentence3: "Creșterea corpului este dirijată de {gap}.",
    t5_c61: "hormonul de creștere", t5_c62: "insulină", t5_c63: "adrenalină",
    t5_q: "Care glandă coordonează celelalte glande endocrine?", t5_q_a: "Hipofiza", t5_q_b: "Tiroida", t5_q_c: "Suprarenalele", t5_q_d: "Gonadele",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <HormoneSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "pituitary", x: 50, y: 15, label: "t1_area_pituitary" },
        { id: "thyroid",   x: 50, y: 30, label: "t1_area_thyroid" },
        { id: "adrenal",   x: 42, y: 55, label: "t1_area_adrenal" },
        { id: "pancreas",  x: 58, y: 60, label: "t1_area_pancreas" },
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
    svg: (lang) => <HormoneSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
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
    svg: (lang) => <HormoneSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence2",
      choices: ["t4_c51", "t4_c52", "t4_c53"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_b3",
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
      sentence: "t5_gap_sentence3",
      choices: ["t5_c61", "t5_c62", "t5_c63"],
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
  icon: "⚗️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const HormoneExplorer = memo(function HormoneExplorer({
  color = "#A855F7", // Purple-500 a hormonokhoz
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
      explorerId="bio_k8_hormones" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default HormoneExplorer;
