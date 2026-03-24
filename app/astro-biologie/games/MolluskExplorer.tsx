"use client";
// MolluskExplorer.tsx — Bio Island i2: Puhatestűek és Férgek (K6)
// Topics: 1) Csigák 2) Kagylók 3) Férgek 4) Puhatestű vs. Féreg 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { MolluskSvg, WormSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">🐚</text>
        <text x="30" y="15" fontSize="45" textAnchor="middle">🌊</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#DCFCE7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🐌</text>
        <path d="M -10,0 L 10,0" stroke="#059669" strokeWidth="4" strokeDasharray="3 3" />
        <text x="40" y="15" fontSize="40" textAnchor="middle">🪱</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🐌</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Puhatestűek és Férgek",
    // T1: Csigák
    t1_title: "A csigák világa",
    t1_text: "A csigák a puhatestűek csoportjába tartoznak. Jellemzőjük a belső szerveket védő meszes csigaház és az izmos hasláb, amivel mozognak.",
    t1_b1: "A csigaház védi őket a kiszáradástól és a ragadozóktól.",
    t1_b2: "Izmos haslábukkal, nyálkán csúszva haladnak.",
    t1_b3: "A szárazföldi csigák tüdővel, a víziek kopoltyúval lélegeznek.",
    t1_inst: "Milyen váz védi a csigák puha testét?",
    t1_gap_sentence: "A csigák testét egy meszes {gap} védi.",
    t1_c1: "csigaház", t1_c2: "toll", t1_c3: "pikkely",
    t1_q: "Melyik szervvel mozognak a csigák?",
    t1_q_a: "Haslábbal", t1_q_b: "Uszonyokkal", t1_q_c: "Szárnyakkal", t1_q_d: "Csápokkal",

    // T2: Kagylók
    t2_title: "A kagylók élete",
    t2_text: "A kagylók szintén puhatestűek, de kizárólag vízben élnek. Testüket két, pánttal összekötött meszes teknő védi.",
    t2_b1: "Kétteknős meszes héj védi a testüket.",
    t2_b2: "Nincs jól elkülöníthető fejük.",
    t2_b3: "Kopoltyúval lélegeznek és a vízből szűrik ki a táplálékot.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "kagylók", t2_w3: "kopoltyúval", t2_w4: "lélegeznek", t2_w5: "a", t2_w6: "vízben.",
    t2_q: "Hogyan jutnak táplálékhoz a kagylók?",
    t2_q_a: "A vízből szűrik ki", t2_q_b: "Vadkoznak", t2_q_c: "Növényeket rágnak", t2_q_d: "Fotoszintetizálnak",

    // T3: Férgek
    t3_title: "A gyűrűsférgek",
    t3_text: "A férgeknek nincs szilárd vázuk, testük hosszúkás. A földigiliszta a gyűrűsférgek közé tartozik: teste szelvényekből áll.",
    t3_b1: "Szelvényezett test (gyűrűszerű részekből áll).",
    t3_b2: "Bőrlégzés: a nedves bőrükön át veszik fel az oxigént.",
    t3_b3: "Nagyon hasznosak: lazítják és javítják a talajt.",
    t3_inst: "Párosítsd a féreg tulajdonságait!",
    t3_l1: "Gyűrűsféreg", t3_r1: "Szelvényezett test",
    t3_l2: "Bőrlégzés", t3_r2: "Nedves bőrön át",
    t3_l3: "Földigiliszta", t3_r3: "Talajlazító",
    t3_q: "Mi történik, ha a földigiliszta bőre kiszárad?",
    t3_q_a: "Megfullad, mert nem tud lélegezni", t3_q_b: "Kemény páncéllá válik", t3_q_c: "Gyorsabban kezd mozogni", t3_q_d: "Csigává változik",

    // T4: Puhatestű vs. Féreg
    t4_title: "Különbségek és hasonlóságok",
    t4_text: "Bár a csigák, kagylók és férgek mind gerinctelenek, testfelépítésükben nagyok a különbségek.",
    t4_b1: "A puhatestűeknek gyakran van meszes héjuk.",
    t4_b2: "A férgek teste szelvényes és nincs szilárd vázuk.",
    t4_b3: "Egyik csoportnak sincsenek csontjai.",
    t4_inst: "Puhatestű vagy Féreg? Válogasd szét a jellemzőket!",
    t4_bucket_puh: "Puhatestűek",
    t4_bucket_fer: "Férgek",
    t4_item_p1: "Meszes héj", t4_item_p2: "Izmos hasláb",
    t4_item_f1: "Szelvényes test", t4_item_f2: "Láb nélküli",
    t4_q: "Mi a közös a puhatestűekben és a férgekben?",
    t4_q_a: "Egyiknek sincs belső csontváza (gerinctelenek)", t4_q_b: "Mindkettőnek van csigaháza", t4_q_c: "Mindkettő csak vízben él", t4_q_d: "Mindkettő rovar",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a csigák, kagylók és férgek világáról!",
    t5_b1: "Puhatestűek: meszes héj, hasláb, kopoltyú/tüdő.",
    t5_b2: "Férgek: szelvényes test, bőrlégzés.",
    t5_b3: "Mind gerinctelen állatok.",
    t5_inst: "Mi hiányzik ezeknek az állatoknak a testéből?",
    t5_gap_sentence2: "A puhatestűek és férgek testében nincsenek {gap}.",
    t5_c51: "csontok", t5_c52: "szervek", t5_c53: "izmok",
    t5_q: "Melyik állítás IGAZ a kagylókra?",
    t5_q_a: "Kétteknős meszes héjuk van.", t5_q_b: "A szárazföldön élnek.", t5_q_c: "Bőrlégzéssel lélegeznek.", t5_q_d: "Nagy, összetett szemük van.",
  },
  en: {
    explorer_title: "Mollusks and Worms",
    t1_title: "The World of Snails", t1_text: "Snails belong to the mollusk group. They are characterized by a calcareous shell protecting their internal organs and a muscular foot for movement.",
    t1_b1: "The shell protects them from drying out and from predators.", t1_b2: "They move by gliding on slime with their muscular foot.", t1_b3: "Land snails breathe with lungs, aquatic ones with gills.",
    t1_inst: "What protects the soft body of a snail?", t1_gap_sentence: "The snail's body is protected by a calcareous {gap}.",
    t1_c1: "shell", t1_c2: "feather", t1_c3: "scale",
    t1_q: "Which organ do snails use to move?", t1_q_a: "Muscular foot", t1_q_b: "Fins", t1_q_c: "Wings", t1_q_d: "Antennae",

    t2_title: "Life of Bivalves", t2_text: "Bivalves are also mollusks, but they live exclusively in water. Their body is protected by a two-part hinged shell.",
    t2_b1: "Protected by a two-part calcareous shell.", t2_b2: "They do not have a distinct head.", t2_b3: "They breathe with gills and filter food from the water.",
    t2_inst: "Put the words in order!",
    t2_w1: "Bivalves", t2_w2: "breathe", t2_w3: "with", t2_w4: "gills", t2_w5: "in", t2_w6: "water.",
    t2_q: "How do bivalves get their food?", t2_q_a: "They filter it from the water", t2_q_b: "They hunt", t2_q_c: "They chew plants", t2_q_d: "They photosynthesize",

    t3_title: "Annelid Worms", t3_text: "Worms have no solid skeleton and have elongated bodies. The earthworm is an annelid: its body consists of segments.",
    t3_b1: "Segmented body (made of ring-like parts).", t3_b2: "Skin breathing: they take in oxygen through moist skin.", t3_b3: "Very useful: they loosen and improve the soil.",
    t3_inst: "Match the worm's characteristics!",
    t3_l1: "Annelid", t3_r1: "Segmented body", t3_l2: "Skin breathing", t3_r2: "Through moist skin", t3_l3: "Earthworm", t3_r3: "Loosens the soil",
    t3_q: "What happens if an earthworm's skin dries out?", t3_q_a: "It suffocates because it cannot breathe", t3_q_b: "It becomes a hard shell", t3_q_c: "It moves faster", t3_q_d: "It turns into a snail",

    t4_title: "Differences and Similarities", t4_text: "Although snails, bivalves, and worms are all invertebrates, their body structures are very different.",
    t4_b1: "Mollusks often have a calcareous shell.", t4_b2: "Worms have segmented bodies and no solid skeleton.", t4_b3: "Neither group has bones.",
    t4_inst: "Mollusk or Worm? Sort the features!",
    t4_bucket_puh: "Mollusks", t4_bucket_fer: "Worms",
    t4_item_p1: "Calcareous shell", t4_item_p2: "Muscular foot", t4_item_f1: "Segmented body", t4_item_f2: "Legless",
    t4_q: "What do mollusks and worms have in common?", t4_q_a: "Neither has an internal skeleton (invertebrates)", t4_q_b: "Both have shells", t4_q_c: "Both only live in water", t4_q_d: "Both are insects",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the world of snails, bivalves, and worms!",
    t5_b1: "Mollusks: calcareous shell, muscular foot, gills/lungs.", t5_b2: "Worms: segmented body, skin breathing.", t5_b3: "All are invertebrates.",
    t5_inst: "What is missing from the bodies of these animals?", t5_gap_sentence2: "There are no {gap} in the bodies of mollusks and worms.",
    t5_c51: "bones", t5_c52: "organs", t5_c53: "muscles",
    t5_q: "Which statement is TRUE about bivalves?", t5_q_a: "They have a two-part calcareous shell.", t5_q_b: "They live on land.", t5_q_c: "They breathe through their skin.", t5_q_d: "They have large, compound eyes.",
  },
  de: {
    explorer_title: "Weichtiere und Würmer",
    t1_title: "Welt der Schnecken", t1_text: "Schnecken gehören zu den Weichtieren. Typisch ist das kalkhaltige Gehäuse, das die inneren Organe schützt, und der muskulöse Kriechfuß.",
    t1_b1: "Das Gehäuse schützt vor Austrocknung und Feinden.", t1_b2: "Sie gleiten auf Schleim mit ihrem Muskelfuß.", t1_b3: "Landschnecken atmen mit Lungen, Wasserschnecken mit Kiemen.",
    t1_inst: "Was schützt den weichen Körper der Schnecke?", t1_gap_sentence: "Der Körper der Schnecke wird durch ein kalkhaltiges {gap} geschützt.",
    t1_c1: "Gehäuse", t1_c2: "Federkleid", t1_c3: "Schuppenkleid",
    t1_q: "Mit welchem Organ bewegen sich Schnecken fort?", t1_q_a: "Mit dem Muskelfuß", t1_q_b: "Mit Flossen", t1_q_c: "Mit Flügeln", t1_q_d: "Mit Fühlern",

    t2_title: "Leben der Muscheln", t2_text: "Muscheln sind ebenfalls Weichtiere, leben aber nur im Wasser. Ihr Körper wird durch zwei scharnierartige Kalkschalen geschützt.",
    t2_b1: "Geschützt durch eine zweiklappige Kalkschale.", t2_b2: "Sie haben keinen deutlich abgegrenzten Kopf.", t2_b3: "Sie atmen mit Kiemen und filtern Nahrung aus dem Wasser.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Muscheln", t2_w2: "atmen", t2_w3: "mit", t2_w4: "Kiemen", t2_w5: "im", t2_w6: "Wasser.",
    t2_q: "Wie gelangen Muscheln an ihre Nahrung?", t2_q_a: "Sie filtern sie aus dem Wasser", t2_q_b: "Sie jagen aktiv", t2_q_c: "Sie kauen Pflanzen", t2_q_d: "Sie betreiben Fotosynthese",

    t3_title: "Die Ringelwürmer", t3_text: "Würmer haben kein festes Skelett und einen länglichen Körper. Der Regenwurm ist ein Ringelwurm: Sein Körper besteht aus Segmenten.",
    t3_b1: "Gegliederter Körper (aus ringförmigen Teilen).", t3_b2: "Hautatmung: Sie nehmen Sauerstoff durch die feuchte Haut auf.", t3_b3: "Sehr nützlich: Sie lockern und verbessern den Boden.",
    t3_inst: "Verbinde die Eigenschaften des Wurms!",
    t3_l1: "Ringelwurm", t3_r1: "Gegliederter Körper", t3_l2: "Hautatmung", t3_r2: "Durch feuchte Haut", t3_l3: "Regenwurm", t3_r3: "Lockert den Boden",
    t3_q: "Was passiert, wenn die Haut des Regenwurms austrocknet?", t3_q_a: "Er erstickt, da er nicht mehr atmen kann", t3_q_b: "Er bekommt einen harten Panzer", t3_q_c: "Er bewegt sich schneller", t3_q_d: "Er wird zu einer Schnecke",

    t4_title: "Unterschiede und Gemeinsamkeiten", t4_text: "Obwohl Schnecken, Muscheln und Würmer alle wirbellos sind, ist ihr Körperbau sehr unterschiedlich.",
    t4_b1: "Weichtiere haben oft eine Kalkschale.", t4_b2: "Würmer haben gegliederte Körper und kein festes Skelett.", t4_b3: "Keine der beiden Gruppen hat Knochen.",
    t4_inst: "Weichtier oder Wurm? Sortiere die Merkmale!",
    t4_bucket_puh: "Weichtiere", t4_bucket_fer: "Würmer",
    t4_item_p1: "Kalkschale", t4_item_p2: "Muskelfuß", t4_item_f1: "Gegliederter Körper", t4_item_f2: "Beinlos",
    t4_q: "Was haben Weichtiere und Würmer GEMEINSAM?", t4_q_a: "Beide haben kein Innenskelett (wirbellos)", t4_q_b: "Beide haben ein Gehäuse", t4_q_c: "Beide leben nur im Wasser", t4_q_d: "Beide sind Insekten",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Welt der Schnecken, Muscheln und Würmer!",
    t5_b1: "Weichtiere: Kalkschale, Muskelfuß, Kiemen/Lungen.", t5_b2: "Würmer: gegliederter Körper, Hautatmung.", t5_b3: "Alle sind wirbellose Tiere.",
    t5_inst: "Was fehlt im Körper dieser Tiere?", t5_gap_sentence2: "Im Körper von Weichtieren und Würmern gibt es keine {gap}.",
    t5_c51: "Knochen", t5_c52: "Organe", t5_c53: "Muskeln",
    t5_q: "Welche Aussage über Muscheln ist WAHR?", t5_q_a: "Sie haben eine zweiklappige Kalkschale.", t5_q_b: "Sie leben an Land.", t5_q_c: "Sie atmen durch die Haut.", t5_q_d: "Sie haben große Facettenaugen.",
  },
  ro: {
    explorer_title: "Moluște și Viermi",
    t1_title: "Lumea Melcilor", t1_text: "Melcii fac parte din grupul moluștelor. Se caracterizează printr-o cochilie calcaroasă și un picior musculos folosit pentru deplasare.",
    t1_b1: "Cochilia îi protejează de uscare și de prădători.", t1_b2: "Se deplasează alunecând pe mucus cu piciorul lor musculos.", t1_b3: "Melcii tereștri respiră prin plămâni, cei acvatici prin branhii.",
    t1_inst: "Ce protejează corpul moale al melcului?", t1_gap_sentence: "Corpul melcului este protejat de o {gap} calcaroasă.",
    t1_c1: "cochilie", t1_c2: "pană", t1_c3: "solz",
    t1_q: "Cu ce organ se deplasează melcii?", t1_q_a: "Piciorul musculos", t1_q_b: "Înotătoare", t1_q_c: "Aripi", t1_q_d: "Antene",

    t2_title: "Viața Scoicilor", t2_text: "Scoicile sunt și ele moluște, dar trăiesc exclusiv în apă. Corpul lor este protejat de o cochilie formată din două valve.",
    t2_b1: "Protejate de o cochilie calcaroasă bivalvă.", t2_b2: "Nu au un cap bine definit.", t2_b3: "Respiră prin branhii și filtrează hrana din apă.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Scoicile", t2_w2: "respiră", t2_w3: "cu", t2_w4: "branhii", t2_w5: "în", t2_w6: "apă.",
    t2_q: "Cum își obțin scoicile hrana?", t2_q_a: "O filtrează din apă", t2_q_b: "Vânează activ", t2_q_c: "Mestecă plante", t2_q_d: "Fac fotosinteză",

    t3_title: "Viermii Inelați", t3_text: "Viermii nu au un schelet solid și au corpul alungit. Râma este un vierme inelat: corpul său este format din segmente.",
    t3_b1: "Corp segmentat (format din inele).", t3_b2: "Respirație cutanată: preiau oxigenul prin pielea umedă.", t3_b3: "Foarte utile: afânează și îmbunătățesc solul.",
    t3_inst: "Potrivește caracteristicile viermelui!",
    t3_l1: "Inelat", t3_r1: "Corp segmentat", t3_l2: "Respirație cutanată", t3_r2: "Prin piele umedă", t3_l3: "Râmă", t3_r3: "Afânează solul",
    t3_q: "Ce se întâmplă dacă pielea unei râme se usucă?", t3_q_a: "Se sufocă pentru că nu mai poate respira", t3_q_b: "Devine o carapace dură", t3_q_c: "Se mișcă mai repede", t3_q_d: "Se transformă într-un melc",

    t4_title: "Diferențe și Asemănări", t4_text: "Deși melcii, scoicile și viermii sunt toate nevertebrate, structura corpului lor este foarte diferită.",
    t4_b1: "Moluștele au adesea o cochilie calcaroasă.", t4_b2: "Viermii au corpul segmentat și niciun schelet solid.", t4_b3: "Niciunul dintre grupuri nu are oase.",
    t4_inst: "Moluște sau Viermi? Sortează caracteristicile!",
    t4_bucket_puh: "Moluște", t4_bucket_fer: "Viermi",
    t4_item_p1: "Cochilie calcaroasă", t4_item_p2: "Picior musculos", t4_item_f1: "Corp segmentat", t4_item_f2: "Fără picioare",
    t4_q: "Ce au în comun moluștele și viermii?", t4_q_a: "Niciunele nu au schelet intern (nevertebrate)", t4_q_b: "Ambele au cochilie", t4_q_c: "Ambele trăiesc doar în apă", t4_q_d: "Ambele sunt insecte",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre lumea melcilor, scoicilor și viermilor!",
    t5_b1: "Moluște: cochilie calcaroasă, picior musculos, branhii/plămâni.", t5_b2: "Viermi: corp segmentat, respirație cutanată.", t5_b3: "Toate sunt animale nevertebrate.",
    t5_inst: "Ce lipsește din corpul acestor animale?", t5_gap_sentence2: "Nu există {gap} în corpul moluștelor și al viermilor.",
    t5_c51: "oase", t5_c52: "organe", t5_c53: "mușchi",
    t5_q: "Care afirmație este ADEVĂRATĂ despre scoici?", t5_q_a: "Au o cochilie calcaroasă bivalvă.", t5_q_b: "Trăiesc pe uscat.", t5_q_c: "Respiră prin piele.", t5_q_d: "Au ochi mari și compuși.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <MolluskSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t2_inst",
      hint1: "t2_b3",
      hint2: "t2_b1",
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
    svg: (lang) => <WormSvg lang={lang} />,
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
      type: "drag-to-bucket",
      buckets: [
        { id: "puh", label: "t4_bucket_puh" },
        { id: "fer", label: "t4_bucket_fer" },
      ],
      items: [
        { text: "t4_item_p1", bucketId: "puh" },
        { text: "t4_item_f1", bucketId: "fer" },
        { text: "t4_item_p2", bucketId: "puh" },
        { text: "t4_item_f2", bucketId: "fer" },
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
  icon: "🐌",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MolluskExplorer = memo(function MolluskExplorer({
  color = "#0D9488", // Mélyebb türkiz-zöld (Teal-600) a vizes és nedves élőhelyek miatt
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
      grade={6} 
      explorerId="bio_k6_mollusks_worms" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default MolluskExplorer;
