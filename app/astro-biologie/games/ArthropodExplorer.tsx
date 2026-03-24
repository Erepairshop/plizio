"use client";
// ArthropodExplorer.tsx — Bio Island i1: Ízeltlábúak (K6)
// Topics: 1) Rovarok 2) Pókok 3) Ízeltlábú csoportok 4) Fejlődés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { InsectAnatomySvg, SpiderAnatomySvg, ArthropodGroupsSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#DCFCE7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="15" fontSize="30" textAnchor="middle">🥚</text>
        <path d="M -40,0 L -20,0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="15" fontSize="30" textAnchor="middle">🐛</text>
        <path d="M 20,0 L 40,0" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="60" y="15" fontSize="30" textAnchor="middle">🦋</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🐜</text>
        <text x="20" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Ízeltlábúak",
    // T1: Rovarok
    t1_title: "A rovarok felépítése",
    t1_text: "A rovarok a legnagyobb állatcsoport a Földön. Testük három jól elkülöníthető részre tagolódik: fej, tor és potroh.",
    t1_b1: "A toron 3 pár (összesen 6) ízelt láb található.",
    t1_b2: "A legtöbb rovarnak szárnyai is vannak a toron.",
    t1_b3: "A fejen 1 pár csáp és összetett szemek helyezkednek el.",
    t1_inst: "Tedd sorba a mondat szavait!",
    t1_w1: "A", t1_w2: "rovaroknak", t1_w3: "mindig", t1_w4: "hat", t1_w5: "lábuk", t1_w6: "van.",
    t1_q: "Melyik testtájon találhatók a rovarok lábai és szárnyai?",
    t1_q_a: "A toron", t1_q_b: "A fejen", t1_q_c: "A potrohon", t1_q_d: "A csápokon",

    // T2: Pókok
    t2_title: "A pókszabásúak",
    t2_text: "A pókok nem rovarok! Testfelépítésük teljesen más: testük csak két fő részre tagolódik, és több lábuk van.",
    t2_b1: "Két testtáj: fejtor és potroh.",
    t2_b2: "Négy pár (összesen 8) ízelt láb a fejtoron.",
    t2_b3: "Nincsenek csápjaik és szárnyaik.",
    t2_inst: "Hány lába van egy póknak?",
    t2_gap_sentence: "Minden pókszabásúnak {gap} lába van.",
    t2_c1: "nyolc", t2_c2: "hat", t2_c3: "tíz",
    t2_q: "Hogy hívják a pókok elülső testtáját?",
    t2_q_a: "Fejtor", t2_q_b: "Tor", t2_q_c: "Potroh", t2_q_d: "Szívóka",

    // T3: Ízeltlábú csoportok
    t3_title: "Az ízeltlábúak csoportjai",
    t3_text: "Az ízeltlábúak nevüket a külső vázhoz (kitin) kapcsolódó, ízekből álló lábaikról kapták. Három fő csoportjuk van: rovarok, pókszabásúak és rákok.",
    t3_b1: "Rovarok: 6 láb, 3 testtáj.",
    t3_b2: "Pókszabásúak: 8 láb, 2 testtáj.",
    t3_b3: "Rákok: 10 vagy több láb, meszes kitinváz (pl. folyami rák).",
    t3_inst: "Rovar vagy Pók? Válogasd szét a jellemzőket!",
    t3_bucket_rov: "Rovarok",
    t3_bucket_pok: "Pókszabásúak",
    t3_item_r1: "Hat láb", t3_item_r2: "3 testtáj (fej, tor, potroh)",
    t3_item_p1: "Nyolc láb", t3_item_p2: "Nincs csáp",
    t3_q: "Milyen anyagból áll az ízeltlábúak külső váza?",
    t3_q_a: "Kitinből", t3_q_b: "Csontból", t3_q_c: "Porcból", t3_q_d: "Mészből",

    // T4: Fejlődés
    t4_title: "A rovarok egyedfejlődése",
    t4_text: "A rovarok petékkel szaporodnak, és növekedésük során vedleniük kell a merev kitinváz miatt. Fejlődésük lehet teljes vagy átalakulás nélküli (kifejlés).",
    t4_b1: "Teljes átalakulás: pete -> lárva (hernyó) -> báb -> kifejlett rovar (pl. lepke).",
    t4_b2: "Kifejlés: pete -> lárva (kicsinyített másolat) -> kifejlett rovar (pl. szöcske).",
    t4_b3: "A bábállapot a teljes átalakulás jellemzője.",
    t4_inst: "Párosítsd a fejlődési típust a jellemzőjével!",
    t4_l1: "Teljes átalakulás", t4_r1: "Van bábállapot (pl. lepke)",
    t4_l2: "Kifejlés", t4_r2: "Nincs bábállapot (pl. szöcske)",
    t4_l3: "Vedlés", t4_r3: "A régi külső váz ledobása",
    t4_q: "Mi hiányzik a kifejlés (hiányos átalakulás) szakaszaiból?",
    t4_q_a: "A bábállapot", t4_q_b: "A pete", t4_q_c: "A lárva", t4_q_d: "A kifejlett rovar",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod az ízeltlábúak világáról!",
    t5_b1: "Rovar: 6 láb, csáp. Pók: 8 láb, nincs csáp.",
    t5_b2: "Külső kitinváz, ízelt lábak.",
    t5_b3: "Fejlődésük során vedlenek.",
    t5_inst: "Miből áll az ízeltlábúak váza?",
    t5_gap_sentence2: "Az ízeltlábúak külső vázát {gap} alkotja.",
    t5_c51: "kitin", t5_c52: "csont", t5_c53: "mész",
    t5_q: "Melyik állítás IGAZ a pókokra?",
    t5_q_a: "Testük két testtájra tagolódik.", t5_q_b: "Három pár lábuk van.", t5_q_c: "Tíz csápjuk van.", t5_q_d: "Szárnyakkal repülnek.",
  },
  en: {
    explorer_title: "The Arthropods",
    t1_title: "Insect Anatomy", t1_text: "Insects are the largest animal group on Earth. Their bodies are divided into three distinct parts: head, thorax, and abdomen.",
    t1_b1: "The thorax has 3 pairs (6 total) of jointed legs.", t1_b2: "Most insects also have wings on the thorax.", t1_b3: "The head has 1 pair of antennae and compound eyes.",
    t1_inst: "Put the words in order!", t1_w1: "Insects", t1_w2: "always", t1_w3: "have", t1_w4: "exactly", t1_w5: "six", t1_w6: "legs.",
    t1_q: "Which body part holds the legs and wings of an insect?", t1_q_a: "The thorax", t1_q_b: "The head", t1_q_c: "The abdomen", t1_q_d: "The antennae",

    t2_title: "Arachnids (Spiders)", t2_text: "Spiders are not insects! Their body structure is completely different: they only have two main body parts and more legs.",
    t2_b1: "Two body parts: cephalothorax and abdomen.", t2_b2: "Four pairs (8 total) of jointed legs on the cephalothorax.", t2_b3: "They have no antennae and no wings.",
    t2_inst: "How many legs does a spider have?", t2_gap_sentence: "Every arachnid has {gap} legs.",
    t2_c1: "eight", t2_c2: "six", t2_c3: "ten",
    t2_q: "What is the front body part of a spider called?", t2_q_a: "Cephalothorax", t2_q_b: "Thorax", t2_q_c: "Abdomen", t2_q_d: "Proboscis",

    t3_title: "Arthropod Groups", t3_text: "Arthropods get their name from their jointed legs attached to an external skeleton (chitin). The main groups are insects, arachnids, and crustaceans.",
    t3_b1: "Insects: 6 legs, 3 body parts.", t3_b2: "Arachnids: 8 legs, 2 body parts.", t3_b3: "Crustaceans: 10 or more legs, calcified chitin skeleton (e.g., crabs).",
    t3_inst: "Insect or Spider? Sort the features!",
    t3_bucket_rov: "Insects", t3_bucket_pok: "Arachnids",
    t3_item_r1: "Six legs", t3_item_r2: "3 body parts", t3_item_p1: "Eight legs", t3_item_p2: "No antennae",
    t3_q: "What material makes up the exoskeleton of arthropods?", t3_q_a: "Chitin", t3_q_b: "Bone", t3_q_c: "Cartilage", t3_q_d: "Keratin",

    t4_title: "Insect Development", t4_text: "Insects reproduce by eggs and must molt their rigid exoskeleton to grow. Their development can be complete or incomplete metamorphosis.",
    t4_b1: "Complete: egg -> larva (caterpillar) -> pupa -> adult (e.g., butterfly).", t4_b2: "Incomplete: egg -> nymph (mini adult) -> adult (e.g., grasshopper).", t4_b3: "The pupal stage is the hallmark of complete metamorphosis.",
    t4_inst: "Match the type of development to its feature!",
    t4_l1: "Complete metamorphosis", t4_r1: "Has a pupa stage (butterfly)", t4_l2: "Incomplete metamorphosis", t4_r2: "No pupa stage (grasshopper)", t4_l3: "Molting", t4_r3: "Shedding the old exoskeleton",
    t4_q: "What stage is missing in incomplete metamorphosis?", t4_q_a: "The pupa stage", t4_q_b: "The egg", t4_q_c: "The larva", t4_q_d: "The adult",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the world of arthropods!",
    t5_b1: "Insect: 6 legs, antennae. Spider: 8 legs, no antennae.", t5_b2: "External chitin skeleton, jointed legs.", t5_b3: "They molt as they grow.",
    t5_inst: "What is the arthropod skeleton made of?", t5_gap_sentence2: "The exoskeleton of arthropods is made of {gap}.",
    t5_c51: "chitin", t5_c52: "bone", t5_c53: "calcium",
    t5_q: "Which statement is TRUE about spiders?", t5_q_a: "Their body is divided into two parts.", t5_q_b: "They have three pairs of legs.", t5_q_c: "They have ten antennae.", t5_q_d: "They fly with wings.",
  },
  de: {
    explorer_title: "Die Gliederfüßer",
    t1_title: "Aufbau der Insekten", t1_text: "Insekten sind die größte Tiergruppe der Erde. Ihr Körper besteht aus drei deutlich getrennten Teilen: Kopf, Brust und Hinterleib.",
    t1_b1: "An der Brust befinden sich 3 Paar (insgesamt 6) gegliederte Beine.", t1_b2: "Die meisten Insekten haben auch Flügel an der Brust.", t1_b3: "Am Kopf befinden sich 1 Paar Fühler und Facettenaugen.",
    t1_inst: "Bringe die Wörter in die richtige Reihenfolge!", t1_w1: "Insekten", t1_w2: "haben", t1_w3: "immer", t1_w4: "genau", t1_w5: "sechs", t1_w6: "Beine.",
    t1_q: "An welchem Körperteil befinden sich die Beine und Flügel der Insekten?", t1_q_a: "An der Brust", t1_q_b: "Am Kopf", t1_q_c: "Am Hinterleib", t1_q_d: "An den Fühlern",

    t2_title: "Spinnentiere", t2_text: "Spinnen sind keine Insekten! Ihr Körperbau ist völlig anders: Sie bestehen nur aus zwei Hauptteilen und haben mehr Beine.",
    t2_b1: "Zwei Körperteile: Kopfbrust und Hinterleib.", t2_b2: "Vier Paar (insgesamt 8) gegliederte Beine an der Kopfbrust.", t2_b3: "Sie haben keine Fühler und keine Flügel.",
    t2_inst: "Wie viele Beine hat eine Spinne?", t2_gap_sentence: "Jedes Spinnentier hat {gap} Beine.",
    t2_c1: "acht", t2_c2: "sechs", t2_c3: "zehn",
    t2_q: "Wie nennt man den vorderen Körperteil der Spinne?", t2_q_a: "Kopfbrust", t2_q_b: "Brust", t2_q_c: "Hinterleib", t2_q_d: "Rüssel",

    t3_title: "Gliederfüßer-Gruppen", t3_text: "Gliederfüßer haben ihren Namen von ihren gegliederten Beinen und dem Außenskelett (Chitin). Die Hauptgruppen sind Insekten, Spinnentiere und Krebstiere.",
    t3_b1: "Insekten: 6 Beine, 3 Körperteile.", t3_b2: "Spinnentiere: 8 Beine, 2 Körperteile.", t3_b3: "Krebstiere: 10 oder mehr Beine, Kalkpanzer (z.B. Flusskrebs).",
    t3_inst: "Insekt oder Spinne? Sortiere die Merkmale!",
    t3_bucket_rov: "Insekten", t3_bucket_pok: "Spinnentiere",
    t3_item_r1: "Sechs Beine", t3_item_r2: "3 Körperteile", t3_item_p1: "Acht Beine", t3_item_p2: "Keine Fühler",
    t3_q: "Aus welchem Material besteht das Außenskelett der Gliederfüßer?", t3_q_a: "Aus Chitin", t3_q_b: "Aus Knochen", t3_q_c: "Aus Knorpel", t3_q_d: "Aus Kalk",

    t4_title: "Entwicklung der Insekten", t4_text: "Insekten vermehren sich durch Eier. Da ihr Chitinpanzer nicht mitwächst, müssen sie sich häuten. Es gibt vollkommene und unvollkommene Verwandlung.",
    t4_b1: "Vollkommen: Ei -> Larve (Raupe) -> Puppe -> Insekt (z.B. Schmetterling).", t4_b2: "Unvollkommen: Ei -> Nymphe (kleines Insekt) -> Insekt (z.B. Heuschrecke).", t4_b3: "Das Puppenstadium gibt es nur bei der vollkommenen Verwandlung.",
    t4_inst: "Verbinde die Entwicklungsart mit ihrem Merkmal!",
    t4_l1: "Vollkommene Verwandlung", t4_r1: "Mit Puppenstadium (Schmetterling)", t4_l2: "Unvollkommene Verwandlung", t4_r2: "Ohne Puppenstadium (Heuschrecke)", t4_l3: "Häutung", t4_r3: "Abwerfen des alten Panzers",
    t4_q: "Welches Stadium fehlt bei der unvollkommenen Verwandlung?", t4_q_a: "Das Puppenstadium", t4_q_b: "Das Ei", t4_q_c: "Die Larve", t4_q_d: "Das erwachsene Insekt",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Welt der Gliederfüßer!",
    t5_b1: "Insekt: 6 Beine, Fühler. Spinne: 8 Beine, keine Fühler.", t5_b2: "Außenskelett aus Chitin, gegliederte Beine.", t5_b3: "Sie häuten sich während des Wachstums.",
    t5_inst: "Woraus besteht das Skelett der Gliederfüßer?", t5_gap_sentence2: "Das Außenskelett der Gliederfüßer besteht aus {gap}.",
    t5_c51: "Chitin", t5_c52: "Knochen", t5_c53: "Kalk",
    t5_q: "Welche Aussage über Spinnen ist WAHR?", t5_q_a: "Ihr Körper besteht aus zwei Teilen.", t5_q_b: "Sie haben drei Beinpaare.", t5_q_c: "Sie haben zehn Fühler.", t5_q_d: "Sie fliegen mit Flügeln.",
  },
  ro: {
    explorer_title: "Artropodele",
    t1_title: "Anatomia Insectelor", t1_text: "Insectele sunt cel mai mare grup de animale. Corpul lor este format din trei părți distincte: cap, torace și abdomen.",
    t1_b1: "Toracele are 3 perechi (6 în total) de picioare articulate.", t1_b2: "Majoritatea insectelor au și aripi pe torace.", t1_b3: "Capul are o pereche de antene și ochi compuși.",
    t1_inst: "Pune cuvintele în ordine!", t1_w1: "Insectele", t1_w2: "au", t1_w3: "întotdeauna", t1_w4: "exact", t1_w5: "șase", t1_w6: "picioare.",
    t1_q: "Pe ce parte a corpului se află picioarele și aripile insectelor?", t1_q_a: "Pe torace", t1_q_b: "Pe cap", t1_q_c: "Pe abdomen", t1_q_d: "Pe antene",

    t2_title: "Arahnidele (Păianjenii)", t2_text: "Păianjenii nu sunt insecte! Structura corpului lor este complet diferită: au doar două părți principale și mai multe picioare.",
    t2_b1: "Două părți ale corpului: cefalotorace și abdomen.", t2_b2: "Patru perechi (8 în total) de picioare pe cefalotorace.", t2_b3: "Nu au antene și nici aripi.",
    t2_inst: "Câte picioare are un păianjen?", t2_gap_sentence: "Fiecare arahnidă are {gap} picioare.",
    t2_c1: "opt", t2_c2: "șase", t2_c3: "zece",
    t2_q: "Cum se numește partea frontală a corpului unui păianjen?", t2_q_a: "Cefalotorace", t2_q_b: "Torace", t2_q_c: "Abdomen", t2_q_d: "Trompă",

    t3_title: "Grupurile de Artropode", t3_text: "Artropodele își iau numele de la picioarele lor articulate atașate unui schelet extern (chitină). Principalele grupuri sunt insectele, arahnidele și crustaceele.",
    t3_b1: "Insecte: 6 picioare, 3 părți ale corpului.", t3_b2: "Arahnide: 8 picioare, 2 părți ale corpului.", t3_b3: "Crustacee: 10 sau mai multe picioare, schelet calcaros (ex. rac).",
    t3_inst: "Insectă sau Păianjen? Sortează caracteristicile!",
    t3_bucket_rov: "Insecte", t3_bucket_pok: "Arahnide",
    t3_item_r1: "Șase picioare", t3_item_r2: "3 părți ale corpului", t3_item_p1: "Opt picioare", t3_item_p2: "Fără antene",
    t3_q: "Din ce material este format exoscheletul artropodelor?", t3_q_a: "Din chitină", t3_q_b: "Din os", t3_q_c: "Din cartilaj", t3_q_d: "Din calciu",

    t4_title: "Dezvoltarea Insectelor", t4_text: "Insectele se înmulțesc prin ouă și trebuie să năpârlească pentru a crește, deoarece exoscheletul lor este rigid. Metamorfoza poate fi completă sau incompletă.",
    t4_b1: "Completă: ou -> larvă (omidă) -> pupă -> adult (fluture).", t4_b2: "Incompletă: ou -> nimfă (adult în miniatură) -> adult (lăcustă).", t4_b3: "Stadiul de pupă există doar la metamorfoza completă.",
    t4_inst: "Potrivește tipul de dezvoltare cu caracteristica sa!",
    t4_l1: "Metamorfoză completă", t4_r1: "Are stadiu de pupă (fluture)", t4_l2: "Metamorfoză incompletă", t4_r2: "Fără stadiu de pupă (lăcustă)", t4_l3: "Năpârlire", t4_r3: "Înlăturarea vechiului exoschelet",
    t4_q: "Ce stadiu lipsește în metamorfoza incompletă?", t4_q_a: "Stadiul de pupă", t4_q_b: "Oul", t4_q_c: "Larva", t4_q_d: "Adultul",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre lumea artropodelor!",
    t5_b1: "Insectă: 6 picioare, antene. Păianjen: 8 picioare, fără antene.", t5_b2: "Exoschelet din chitină, picioare articulate.", t5_b3: "Ele năpârlesc pentru a crește.",
    t5_inst: "Din ce este format scheletul artropodelor?", t5_gap_sentence2: "Exoscheletul artropodelor este format din {gap}.",
    t5_c51: "chitină", t5_c52: "os", t5_c53: "calciu",
    t5_q: "Care afirmație este ADEVĂRATĂ despre păianjeni?", t5_q_a: "Corpul lor este format din două părți.", t5_q_b: "Au trei perechi de picioare.", t5_q_c: "Au zece antene.", t5_q_d: "Zboară cu aripi.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <InsectAnatomySvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "word-order",
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
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
    svg: (lang) => <SpiderAnatomySvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_b2",
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
    svg: (lang) => <ArthropodGroupsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "rov", label: "t3_bucket_rov" },
        { id: "pok", label: "t3_bucket_pok" },
      ],
      items: [
        { text: "t3_item_r1", bucketId: "rov" },
        { text: "t3_item_p1", bucketId: "pok" },
        { text: "t3_item_r2", bucketId: "rov" },
        { text: "t3_item_p2", bucketId: "pok" },
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
      hint1: "t5_b2",
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
  icon: "🐛",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ArthropodExplorer = memo(function ArthropodExplorer({
  color = "#CA8A04", // Sárgás-barna kitin/rovar szín
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
      explorerId="bio_k6_arthropods" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ArthropodExplorer;
