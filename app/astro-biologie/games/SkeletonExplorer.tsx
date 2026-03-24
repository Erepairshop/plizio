"use client";
// SkeletonExplorer.tsx — Bio Island i6: Csontváz és Izmok (K5)
// Topics: 1) Csontváz 2) Ízületek 3) Izomrendszer 4) Izomtípusok 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { SkeletonSvg, MusclesSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" textAnchor="middle">🦴</text>
        <path d="M -10,0 L 10,0" stroke="#0284C7" strokeWidth="4" strokeDasharray="4 2" />
        <text x="40" y="10" fontSize="40" textAnchor="middle">🦴</text>
        <circle cx="0" cy="0" r="15" fill="none" stroke="#38BDF8" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="15" fontSize="40" textAnchor="middle">💪</text>
        <text x="0" y="15" fontSize="40" textAnchor="middle">❤️</text>
        <text x="50" y="15" fontSize="40" textAnchor="middle">🫀</text>
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
        <text x="-20" y="15" fontSize="35" textAnchor="middle">🦴</text>
        <text x="25" y="15" fontSize="35" textAnchor="middle">💪</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Csontváz és Izmok",
    // T1: Csontváz
    t1_title: "A csontvázrendszer",
    t1_text: "A csontváz testünk szilárd váza. Megadja a test alakját, támasztja az izmokat, és megvédi a legfontosabb belső szerveinket.",
    t1_b1: "Koponya: védi az agyat.",
    t1_b2: "Mellkas (bordák): védi a szívet és a tüdőt.",
    t1_b3: "Gerincoszlop: a test fő tengelye, védi a gerincvelőt.",
    t1_inst: "Melyik szervet védi a koponya?",
    t1_gap_sentence: "A koponya kemény csontjai az {gap} védik a sérülésektől.",
    t1_c1: "agyat", t1_c2: "szívet", t1_c3: "gyomrot",
    t1_q: "Mi a csontvázrendszer egyik fő feladata?",
    t1_q_a: "A belső szervek védelme", t1_q_b: "A vér pumpálása", t1_q_c: "A táplálék emésztése", t1_q_d: "Az oxigén felvétele",

    // T2: Ízületek
    t2_title: "Csontok és Ízületek",
    t2_text: "A csontok találkozási helyeit ízületeknek nevezzük. Ezek teszik lehetővé, hogy a csontvázunk mozogni tudjon, de vannak merev kapcsolatok is.",
    t2_b1: "Mozgatható ízületek: térd, könyök, váll.",
    t2_b2: "Részben mozgatható: gerinccsigolyák közötti porckorongok.",
    t2_b3: "Merev kapcsolat: a koponyacsontok varratai (összenőttek).",
    t2_inst: "Mozgatható ízület vagy merev kapcsolat? Válogasd szét!",
    t2_bucket_moz: "Mozgatható",
    t2_bucket_mer: "Merev (Nem mozgó)",
    t2_item_m1: "Térd", t2_item_m2: "Könyök",
    t2_item_x1: "Koponya", t2_item_x2: "Medencecsontok",
    t2_q: "Milyen kapcsolat van az agykoponya csontjai között?",
    t2_q_a: "Merev, összenőtt (varratos)", t2_q_b: "Szabadon mozgó", t2_q_c: "Részben mozgó", t2_q_d: "Nincs közöttük kapcsolat",

    // T3: Izomrendszer
    t3_title: "Az izomrendszer",
    t3_text: "Az izmok az aktív mozgásszerveink. Képesek összehúzódni és elernyedni, ezzel mozgatják a csontokat.",
    t3_b1: "A vázizmok inakkal rögzülnek a csontokhoz.",
    t3_b2: "Összehúzódáskor az izom megrövidül és megvastagszik.",
    t3_b3: "Az izmok általában párban dolgoznak (pl. hajlító és feszítő).",
    t3_inst: "Tedd sorba a mondat szavait!",
    t3_w1: "Az", t3_w2: "izmok", t3_w3: "inakkal", t3_w4: "tapadnak", t3_w5: "a", t3_w6: "csontokhoz.",
    t3_q: "Mivel rögzülnek a vázizmok a csontokhoz?",
    t3_q_a: "Inakkal", t3_q_b: "Porcokkal", t3_q_c: "Ízületekkel", t3_q_d: "Bőrrel",

    // T4: Izomtípusok
    t4_title: "Izomtípusok a testben",
    t4_text: "Testünkben három különböző izomszövet található, melyek felépítése és működése is eltér.",
    t4_b1: "Vázizom (harántcsíkolt): gyors, de fáradékony, akaratlagosan mozgatható (pl. kar).",
    t4_b2: "Simaizom: lassú, de kitartó, akaratunktól független (pl. belek falában).",
    t4_b3: "Szívizom: gyors és fáradhatatlan, önállóan működik.",
    t4_inst: "Párosítsd az izomtípust a jellemzőjével!",
    t4_l1: "Vázizom", t4_r1: "Akaratlagosan mozgatható",
    t4_l2: "Simaizom", t4_r2: "Belső szervek fala (akaratlan)",
    t4_l3: "Szívizom", t4_r3: "Fáradhatatlan pumpa",
    t4_q: "Melyik izomtípust tudjuk a saját akaratunkkal mozgatni?",
    t4_q_a: "Vázizom (Harántcsíkolt izom)", t4_q_b: "Simaizom", t4_q_c: "Szívizom", t4_q_d: "Egyiket sem",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a csontok és izmok világáról!",
    t5_b1: "Csontváz: passzív támasz és védelem.",
    t5_b2: "Ízületek: a csontok találkozása, a mozgás helye.",
    t5_b3: "Izmok: inakkal tapadnak, összehúzódva mozgatnak.",
    t5_inst: "Kik hozzák mozgásba a csontvázat?",
    t5_gap_sentence2: "A csontvázat az aktívan összehúzódó {gap} mozgatják.",
    t5_c51: "izmok", t5_c52: "inak", t5_c53: "ízületek",
    t5_q: "Melyik állítás IGAZ az izmokra?",
    t5_q_a: "Összehúzódáskor megrövidülnek és megvastagszanak.", t5_q_b: "A csontok termelik őket.", t5_q_c: "Minden izmot tudunk akaratlagosan mozgatni.", t5_q_d: "Soha nem fáradnak el.",
  },
  en: {
    explorer_title: "Skeleton and Muscles",
    t1_title: "The Skeletal System", t1_text: "The skeleton is the solid frame of our body. It gives shape, supports muscles, and protects our most important internal organs.",
    t1_b1: "Skull: protects the brain.", t1_b2: "Rib cage: protects the heart and lungs.", t1_b3: "Spine: the main axis, protects the spinal cord.",
    t1_inst: "Which organ does the skull protect?", t1_gap_sentence: "The hard bones of the skull protect the {gap} from injury.",
    t1_c1: "brain", t1_c2: "heart", t1_c3: "stomach",
    t1_q: "What is one main function of the skeletal system?", t1_q_a: "Protecting internal organs", t1_q_b: "Pumping blood", t1_q_c: "Digesting food", t1_q_d: "Taking in oxygen",

    t2_title: "Bones and Joints", t2_text: "The places where bones meet are called joints. They allow our skeleton to move, though some connections are rigid.",
    t2_b1: "Movable joints: knee, elbow, shoulder.", t2_b2: "Partly movable: cartilage disks between vertebrae.", t2_b3: "Immovable connection: skull sutures (fused together).",
    t2_inst: "Movable joint or immovable connection? Sort them!",
    t2_bucket_moz: "Movable", t2_bucket_mer: "Immovable",
    t2_item_m1: "Knee", t2_item_m2: "Elbow", t2_item_x1: "Skull", t2_item_x2: "Pelvic bones",
    t2_q: "What kind of connection exists between the bones of the skull?", t2_q_a: "Immovable, fused (sutures)", t2_q_b: "Freely movable", t2_q_c: "Partly movable", t2_q_d: "No connection at all",

    t3_title: "The Muscular System", t3_text: "Muscles are our active organs of motion. They can contract and relax, thereby moving the bones.",
    t3_b1: "Skeletal muscles are attached to bones by tendons.", t3_b2: "When contracting, a muscle shortens and thickens.", t3_b3: "Muscles usually work in pairs (e.g., flexor and extensor).",
    t3_inst: "Put the words in order!",
    t3_w1: "Muscles", t3_w2: "attach", t3_w3: "to", t3_w4: "bones", t3_w5: "with", t3_w6: "tendons.",
    t3_q: "What attaches skeletal muscles to bones?", t3_q_a: "Tendons", t3_q_b: "Cartilage", t3_q_c: "Joints", t3_q_d: "Skin",

    t4_title: "Muscle Types", t4_text: "There are three different types of muscle tissue in our body, differing in structure and function.",
    t4_b1: "Skeletal muscle (striated): fast but tires easily, controlled voluntarily (e.g., arm).", t4_b2: "Smooth muscle: slow but tireless, involuntary (e.g., in intestines).", t4_b3: "Cardiac muscle: fast and tireless, works independently.",
    t4_inst: "Match the muscle type to its characteristic!",
    t4_l1: "Skeletal muscle", t4_r1: "Controlled voluntarily", t4_l2: "Smooth muscle", t4_r2: "Walls of internal organs", t4_l3: "Cardiac muscle", t4_r3: "Tireless pump",
    t4_q: "Which type of muscle can we control with our own will?", t4_q_a: "Skeletal muscle (Striated)", t4_q_b: "Smooth muscle", t4_q_c: "Cardiac muscle", t4_q_d: "None of them",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about bones and muscles!",
    t5_b1: "Skeleton: passive support and protection.", t5_b2: "Joints: where bones meet and movement occurs.", t5_b3: "Muscles: attach with tendons, move by contracting.",
    t5_inst: "What sets the skeleton in motion?", t5_gap_sentence2: "The skeleton is moved by the actively contracting {gap}.",
    t5_c51: "muscles", t5_c52: "tendons", t5_c53: "joints",
    t5_q: "Which statement is TRUE about muscles?", t5_q_a: "They shorten and thicken when contracting.", t5_q_b: "They are produced by bones.", t5_q_c: "We can control every muscle voluntarily.", t5_q_d: "They never get tired.",
  },
  de: {
    explorer_title: "Skelett und Muskeln",
    t1_title: "Das Skelettsystem", t1_text: "Das Skelett ist das feste Gerüst unseres Körpers. Es gibt die Form vor, stützt die Muskeln und schützt wichtige Organe.",
    t1_b1: "Schädel: schützt das Gehirn.", t1_b2: "Brustkorb (Rippen): schützt Herz und Lunge.", t1_b3: "Wirbelsäule: Hauptachse, schützt das Rückenmark.",
    t1_inst: "Welches Organ wird vom Schädel geschützt?", t1_gap_sentence: "Die harten Knochen des Schädels schützen das {gap}.",
    t1_c1: "Gehirn", t1_c2: "Herz", t1_c3: "Magen",
    t1_q: "Was ist eine Hauptaufgabe des Skelettsystems?", t1_q_a: "Schutz der inneren Organe", t1_q_b: "Blut pumpen", t1_q_c: "Nahrung verdauen", t1_q_d: "Sauerstoff aufnehmen",

    t2_title: "Knochen und Gelenke", t2_text: "Die Verbindungsstellen von Knochen nennt man Gelenke. Sie machen das Skelett beweglich, aber es gibt auch unbewegliche Verbindungen.",
    t2_b1: "Bewegliche Gelenke: Knie, Ellenbogen, Schulter.", t2_b2: "Teilbeweglich: Knorpelscheiben (Bandscheiben) der Wirbelsäule.", t2_b3: "Unbeweglich (starr): Schädelnähte (verwachsen).",
    t2_inst: "Beweglich oder unbeweglich? Sortiere!",
    t2_bucket_moz: "Beweglich", t2_bucket_mer: "Unbeweglich",
    t2_item_m1: "Knie", t2_item_m2: "Ellenbogen", t2_item_x1: "Schädel", t2_item_x2: "Beckenknochen",
    t2_q: "Welche Art von Verbindung besteht zwischen den Schädelknochen?", t2_q_a: "Unbeweglich, verwachsen (Nähte)", t2_q_b: "Frei beweglich", t2_q_c: "Teilbeweglich", t2_q_d: "Keine Verbindung",

    t3_title: "Das Muskelsystem", t3_text: "Muskeln sind unsere aktiven Bewegungsorgane. Sie können sich zusammenziehen (kontrahieren) und entspannen und so die Knochen bewegen.",
    t3_b1: "Skelettmuskeln sind mit Sehnen an Knochen befestigt.", t3_b2: "Beim Zusammenziehen wird der Muskel kürzer und dicker.", t3_b3: "Muskeln arbeiten meist paarweise (Beuger und Strecker).",
    t3_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t3_w1: "Muskeln", t3_w2: "sind", t3_w3: "mit", t3_w4: "Sehnen", t3_w5: "an", t3_w6: "Knochen", t3_w7: "befestigt.",
    t3_q: "Womit sind die Skelettmuskeln an den Knochen befestigt?", t3_q_a: "Mit Sehnen", t3_q_b: "Mit Knorpel", t3_q_c: "Mit Gelenken", t3_q_d: "Mit der Haut",

    t4_title: "Muskelarten", t4_text: "In unserem Körper gibt es drei Arten von Muskelgewebe, die sich in Aufbau und Funktion unterscheiden.",
    t4_b1: "Skelettmuskulatur (quergestreift): schnell, ermüdet aber, willkürlich steuerbar (z.B. Arm).", t4_b2: "Glatte Muskulatur: langsam, ausdauernd, unwillkürlich (z.B. Darm).", t4_b3: "Herzmuskel: schnell und unermüdlich, arbeitet autonom.",
    t4_inst: "Verbinde die Muskelart mit ihrer Eigenschaft!",
    t4_l1: "Skelettmuskulatur", t4_r1: "Willkürlich bewegbar", t4_l2: "Glatte Muskulatur", t4_r2: "Wände innerer Organe", t4_l3: "Herzmuskel", t4_r3: "Unermüdliche Pumpe",
    t4_q: "Welche Muskelart können wir mit unserem eigenen Willen steuern?", t4_q_a: "Skelettmuskulatur", t4_q_b: "Glatte Muskulatur", t4_q_c: "Herzmuskel", t4_q_d: "Gar keine",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Knochen und Muskeln!",
    t5_b1: "Skelett: passive Stütze und Schutz.", t5_b2: "Gelenke: Knochenverbindungen, Orte der Bewegung.", t5_b3: "Muskeln: durch Sehnen verbunden, bewegen durch Kontraktion.",
    t5_inst: "Was setzt das Skelett in Bewegung?", t5_gap_sentence2: "Das Skelett wird durch die sich kontrahierenden {gap} bewegt.",
    t5_c51: "Muskeln", t5_c52: "Sehnen", t5_c53: "Gelenke",
    t5_q: "Welche Aussage über Muskeln ist WAHR?", t5_q_a: "Sie werden beim Zusammenziehen kürzer und dicker.", t5_q_b: "Sie werden von Knochen produziert.", t5_q_c: "Wir können jeden Muskel willkürlich steuern.", t5_q_d: "Sie ermüden niemals.",
  },
  ro: {
    explorer_title: "Schelet și Mușchi",
    t1_title: "Sistemul Scheletic", t1_text: "Scheletul este cadrul solid al corpului. Dă formă, susține mușchii și protejează cele mai importante organe interne.",
    t1_b1: "Craniul: protejează creierul.", t1_b2: "Cutia toracică: protejează inima și plămânii.", t1_b3: "Coloana vertebrală: axul principal, protejează măduva spinării.",
    t1_inst: "Ce organ protejează craniul?", t1_gap_sentence: "Oasele dure ale craniului protejează {gap} de răni.",
    t1_c1: "creierul", t1_c2: "inima", t1_c3: "stomacul",
    t1_q: "Care este o funcție principală a sistemului scheletic?", t1_q_a: "Protejarea organelor interne", t1_q_b: "Pomparea sângelui", t1_q_c: "Digestia alimentelor", t1_q_d: "Asimilarea oxigenului",

    t2_title: "Oase și Articulații", t2_text: "Locurile unde se întâlnesc oasele se numesc articulații. Ele permit mișcarea scheletului, dar există și conexiuni fixe.",
    t2_b1: "Articulații mobile: genunchi, cot, umăr.", t2_b2: "Parțial mobile: discurile cartilaginoase dintre vertebre.", t2_b3: "Conexiune fixă (imobilă): suturile craniului.",
    t2_inst: "Articulație mobilă sau conexiune fixă? Sortează-le!",
    t2_bucket_moz: "Mobil", t2_bucket_mer: "Imobil (Fix)",
    t2_item_m1: "Genunchi", t2_item_m2: "Cot", t2_item_x1: "Craniu", t2_item_x2: "Oasele bazinului",
    t2_q: "Ce fel de conexiune există între oasele craniului?", t2_q_a: "Fixă, sudată (suturi)", t2_q_b: "Liber mobilă", t2_q_c: "Parțial mobilă", t2_q_d: "Nu există conexiune",

    t3_title: "Sistemul Muscular", t3_text: "Mușchii sunt organele active ale mișcării. Se pot contracta și relaxa, punând oasele în mișcare.",
    t3_b1: "Mușchii scheletici sunt atașați de oase prin tendoane.", t3_b2: "La contracție, mușchiul se scurtează și se îngroașă.", t3_b3: "Mușchii lucrează de obicei în perechi (flexor și extensor).",
    t3_inst: "Pune cuvintele în ordine!",
    t3_w1: "Mușchii", t3_w2: "se", t3_w3: "atașează", t3_w4: "de", t3_w5: "oase", t3_w6: "prin", t3_w7: "tendoane.",
    t3_q: "Cu ce sunt atașați mușchii scheletici de oase?", t3_q_a: "Tendoane", t3_q_b: "Cartilaje", t3_q_c: "Articulații", t3_q_d: "Piele",

    t4_title: "Tipuri de Mușchi", t4_text: "În corpul nostru există trei tipuri de țesut muscular, care diferă prin structură și funcție.",
    t4_b1: "Mușchi scheletic (striat): rapid dar obosește, controlat voluntar (ex. braț).", t4_b2: "Mușchi neted: lent dar neobosit, involuntar (ex. intestine).", t4_b3: "Mușchi cardiac: rapid și neobosit, funcționează independent.",
    t4_inst: "Potrivește tipul de mușchi cu trăsătura sa!",
    t4_l1: "Mușchi scheletic", t4_r1: "Controlat voluntar", t4_l2: "Mușchi neted", t4_r2: "Pereții organelor interne", t4_l3: "Mușchi cardiac", t4_r3: "Pompă neobosită",
    t4_q: "Ce tip de mușchi putem controla cu propria noastră voință?", t4_q_a: "Mușchiul scheletic (striat)", t4_q_b: "Mușchiul neted", t4_q_c: "Mușchiul cardiac", t4_q_d: "Niciunul",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre oase și mușchi!",
    t5_b1: "Schelet: suport pasiv și protecție.", t5_b2: "Articulații: unde se întâlnesc oasele și are loc mișcarea.", t5_b3: "Mușchi: fixați cu tendoane, mișcă prin contracție.",
    t5_inst: "Ce pune scheletul în mișcare?", t5_gap_sentence2: "Scheletul este mișcat de {gap} care se contractă activ.",
    t5_c51: "mușchii", t5_c52: "tendoanele", t5_c53: "articulațiile",
    t5_q: "Care afirmație este ADEVĂRATĂ despre mușchi?", t5_q_a: "Se scurtează și se îngroașă când se contractă.", t5_q_b: "Sunt produși de oase.", t5_q_c: "Putem controla voluntar fiecare mușchi.", t5_q_d: "Nu obosesc niciodată.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <SkeletonSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
      type: "drag-to-bucket",
      buckets: [
        { id: "moz", label: "t2_bucket_moz" },
        { id: "mer", label: "t2_bucket_mer" },
      ],
      items: [
        { text: "t2_item_m1", bucketId: "moz" },
        { text: "t2_item_x1", bucketId: "mer" },
        { text: "t2_item_m2", bucketId: "moz" },
        { text: "t2_item_x2", bucketId: "mer" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
    svg: (lang) => <MusclesSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5], 
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
  icon: "🦴",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SkeletonExplorer = memo(function SkeletonExplorer({
  color = "#EF4444", // Izmokra (piros) és vérre utaló szín
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
      explorerId="bio_k5_skeleton_muscles" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SkeletonExplorer;
