"use client";
// HeartExplorer.tsx — Bio Island i5: Szív és Vér (K6)
// Topics: 1) A szív felépítése 2) A szív működése 3) A vérplazma 4) Vérsejtek 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { HeartSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="20" fontSize="50" textAnchor="middle">🫀</text>
        <path d="M -30,-20 Q 0,-40 30,-20" fill="none" stroke="#E11D48" strokeWidth="4" strokeDasharray="4 2" />
        <path d="M -30,20 Q 0,40 30,20" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-35" y="15" fontSize="45" textAnchor="middle">🩸</text>
        <text x="35" y="15" fontSize="45" textAnchor="middle">🧪</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-40" cy="0" r="20" fill="#EF4444" />
        <circle cx="0" cy="0" r="20" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="2" />
        <rect x="30" y="-10" width="20" height="20" rx="4" fill="#D97706" />
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">❤️</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Szív és a Vér",
    // T1: Szív felépítése
    t1_title: "A szív felépítése",
    t1_text: "A szív egy izmos, üreges szerv, amely a vért pumpálja a testben. Két pitvarból és két kamrából áll.",
    t1_b1: "Pitvarok: ide érkezik a vér a testből és a tüdőből.",
    t1_b2: "Kamrák: innen pumpálja a szív a vért a testbe és a tüdőbe.",
    t1_b3: "Billentyűk: szelepként működnek, csak egy irányba engedik a vért.",
    t1_inst: "Hány üregből áll az emberi szív?",
    t1_gap_sentence: "Az emberi szív két pitvarból és két {gap} áll.",
    t1_c1: "kamrából", t1_c2: "billentyűből", t1_c3: "tüdőből",
    t1_q: "Milyen szerepet töltenek be a szívbillentyűk?",
    t1_q_a: "Megakadályozzák a vér visszafelé áramlását", t1_q_b: "Oxigént termelnek", t1_q_c: "Összehúzzák a szívet", t1_q_d: "Tápanyagot szívnak fel",

    // T2: Szív működése
    t2_title: "A szívműködés: a motor",
    t2_text: "A szív sosem pihen. A jobb oldal oxigénben szegény, a bal oldal oxigénben gazdag vért pumpál.",
    t2_b1: "A szívizom fáradhatatlanul húzódik össze és ernyed el.",
    t2_b2: "A jobb kamra a tüdőbe pumpálja a vért oxigénért.",
    t2_b3: "A bal kamra a friss oxigénes vért pumpálja szét az egész testbe.",
    t2_inst: "Tedd sorba a szavakat, hogy értelmes mondatot kapj!",
    t2_w1: "A", t2_w2: "bal", t2_w3: "kamra", t2_w4: "a", t2_w5: "testbe", t2_w6: "pumpál.",
    t2_q: "Milyen vért pumpál a szív bal oldala?",
    t2_q_a: "Oxigénben gazdag vért", t2_q_b: "Szén-dioxidban gazdag vért", t2_q_c: "Vérplazma nélküli vért", t2_q_d: "Salakanyaggal teli vért",

    // T3: Vérplazma
    t3_title: "A vér folyadéka",
    t3_text: "A vér folyékony része a vérplazma. Többnyire vízből áll, és fontos anyagokat szállít a sejtek között.",
    t3_b1: "Szállítja a tápanyagokat (pl. cukrok, fehérjék) a sejtekhez.",
    t3_b2: "Elszállítja a sejtekből a salakanyagokat.",
    t3_b3: "Hormonokat és hőt is szállít, szabályozva a testhőmérsékletet.",
    t3_inst: "Szállít vagy Nem szállít? Válaszd ki, mi a vérplazma feladata!",
    t3_bucket_sza: "Szállítja a plazma",
    t3_bucket_nem: "Nem ez a feladata",
    t3_item_s1: "Tápanyagok", t3_item_s2: "Hormonok",
    t3_item_n1: "Levegő a tüdőn kívül", t3_item_n2: "Kőzet",
    t3_q: "Miből áll a vérplazma legnagyobb része?",
    t3_q_a: "Vízből", t3_q_b: "Vörösvérsejtekből", t3_q_c: "Fehérjéből", t3_q_d: "Zsírból",

    // T4: Vérsejtek
    t4_title: "A vér sejtes elemei",
    t4_text: "A vérplazmában úsznak a vér alakos elemei. Mindegyiknek megvan a maga különleges feladata az életben maradásunkhoz.",
    t4_b1: "Vörösvérsejtek: az oxigént és a szén-dioxidot szállítják (adják a vér piros színét).",
    t4_b2: "Fehérvérsejtek: az immunrendszer katonái, a kórokozók ellen küzdenek.",
    t4_b3: "Vérlemezkék: a véralvadásért felelnek, elállítják a vérzést a sebben.",
    t4_inst: "Párosítsd a sejteket a feladatukkal!",
    t4_l1: "Vörösvérsejtek", t4_r1: "Oxigénszállítás",
    t4_l2: "Fehérvérsejtek", t4_r2: "Védelem a kórokozóktól",
    t4_l3: "Vérlemezkék", t4_r3: "Véralvadás, sebzárás",
    t4_q: "Melyik vérsejt feladata a kórokozók (pl. baktériumok) elpusztítása?",
    t4_q_a: "A fehérvérsejteké", t4_q_b: "A vörösvérsejteké", t4_q_c: "A vérlemezkéké", t4_q_d: "A vérplazmáé",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a szív működéséről és a vér összetételéről!",
    t5_b1: "A szív négy ürege: 2 pitvar, 2 kamra.",
    t5_b2: "A vérplazma folyékony szállító közeg.",
    t5_b3: "A vörösvérsejtek szállítják az oxigént.",
    t5_inst: "Kik felelnek a vér alvadásáért?",
    t5_gap_sentence2: "Ha megvágod magad, a {gap} állítják el a vérzést.",
    t5_c51: "vérlemezkék", t5_c52: "fehérvérsejtek", t5_c53: "billentyűk",
    t5_q: "Melyik állítás IGAZ a vörösvérsejtekre?",
    t5_q_a: "Oxigént szállítanak a testben.", t5_q_b: "Ők pusztítják el a baktériumokat.", t5_q_c: "Nem találhatók meg a vérben.", t5_q_d: "A véralvadásért felelnek.",
  },
  en: {
    explorer_title: "The Heart and Blood",
    t1_title: "Structure of the Heart", t1_text: "The heart is a muscular, hollow organ that pumps blood throughout the body. It consists of two atria and two ventricles.",
    t1_b1: "Atria: receive blood from the body and lungs.", t1_b2: "Ventricles: pump blood out to the body and lungs.", t1_b3: "Valves: act as one-way doors, preventing backward blood flow.",
    t1_inst: "How many chambers does the human heart have?", t1_gap_sentence: "The human heart consists of two atria and two {gap}.",
    t1_c1: "ventricles", t1_c2: "valves", t1_c3: "lungs",
    t1_q: "What is the role of the heart valves?", t1_q_a: "They prevent blood from flowing backward.", t1_q_b: "They produce oxygen.", t1_q_c: "They contract the heart.", t1_q_d: "They absorb nutrients.",

    t2_title: "Heart Function: The Engine", t2_text: "The heart never rests. The right side pumps oxygen-poor blood, and the left side pumps oxygen-rich blood.",
    t2_b1: "The heart muscle tirelessly contracts and relaxes.", t2_b2: "The right ventricle pumps blood to the lungs for oxygen.", t2_b3: "The left ventricle pumps fresh oxygenated blood to the whole body.",
    t2_inst: "Put the words in order to make a sentence!",
    t2_w1: "The", t2_w2: "left", t2_w3: "ventricle", t2_w4: "pumps", t2_w5: "blood", t2_w6: "out.",
    t2_q: "What kind of blood does the left side of the heart pump?", t2_q_a: "Oxygen-rich blood", t2_q_b: "Carbon dioxide-rich blood", t2_q_c: "Blood without plasma", t2_q_d: "Waste-filled blood",

    t3_title: "Blood Plasma", t3_text: "The liquid part of the blood is plasma. It is mostly water and transports important substances between cells.",
    t3_b1: "Transports nutrients (like sugars, proteins) to cells.", t3_b2: "Carries waste products away from cells.", t3_b3: "Transports hormones and heat, regulating body temperature.",
    t3_inst: "Transported or Not transported? Choose what plasma does!",
    t3_bucket_sza: "Transported by plasma", t3_bucket_nem: "Not its job",
    t3_item_s1: "Nutrients", t3_item_s2: "Hormones", t3_item_n1: "Air outside lungs", t3_item_n2: "Rocks",
    t3_q: "What makes up the largest part of blood plasma?", t3_q_a: "Water", t3_q_b: "Red blood cells", t3_q_c: "Protein", t3_q_d: "Fat",

    t4_title: "Blood Cells", t4_text: "The formed elements of blood float in the plasma. Each has a specific job to keep us alive.",
    t4_b1: "Red blood cells: carry oxygen and carbon dioxide (give blood its red color).", t4_b2: "White blood cells: soldiers of the immune system, fighting pathogens.", t4_b3: "Platelets: responsible for blood clotting, stopping bleeding in wounds.",
    t4_inst: "Match the cells with their functions!",
    t4_l1: "Red blood cells", t4_r1: "Oxygen transport", t4_l2: "White blood cells", t4_r2: "Protection against pathogens", t4_l3: "Platelets", t4_r3: "Blood clotting, sealing wounds",
    t4_q: "Which blood cell is responsible for destroying pathogens (like bacteria)?", t4_q_a: "White blood cells", t4_q_b: "Red blood cells", t4_q_c: "Platelets", t4_q_d: "Blood plasma",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about how the heart works and blood composition!",
    t5_b1: "The heart has four chambers: 2 atria, 2 ventricles.", t5_b2: "Blood plasma is a liquid transport medium.", t5_b3: "Red blood cells carry oxygen.",
    t5_inst: "Who is responsible for blood clotting?", t5_gap_sentence2: "If you cut yourself, {gap} stop the bleeding.",
    t5_c51: "platelets", t5_c52: "white blood cells", t5_c53: "valves",
    t5_q: "Which statement is TRUE about red blood cells?", t5_q_a: "They transport oxygen throughout the body.", t5_q_b: "They destroy bacteria.", t5_q_c: "They are not found in the blood.", t5_q_d: "They are responsible for blood clotting.",
  },
  de: {
    explorer_title: "Herz und Blut",
    t1_title: "Aufbau des Herzens", t1_text: "Das Herz ist ein muskulöses Hohlorgan, das Blut durch den Körper pumpt. Es besteht aus zwei Vorhöfen und zwei Kammern.",
    t1_b1: "Vorhöfe: hier kommt das Blut aus dem Körper und der Lunge an.", t1_b2: "Kammern: von hier wird das Blut in Körper und Lunge gepumpt.", t1_b3: "Herzklappen: wirken als Ventile, verhindern das Zurückfließen.",
    t1_inst: "Aus wie vielen Hohlräumen besteht das menschliche Herz?", t1_gap_sentence: "Das menschliche Herz besteht aus zwei Vorhöfen und zwei {gap}.",
    t1_c1: "Kammern", t1_c2: "Klappen", t1_c3: "Lungen",
    t1_q: "Welche Funktion haben die Herzklappen?", t1_q_a: "Sie verhindern das Zurückfließen des Blutes.", t1_q_b: "Sie produzieren Sauerstoff.", t1_q_c: "Sie ziehen das Herz zusammen.", t1_q_d: "Sie nehmen Nährstoffe auf.",

    t2_title: "Herzfunktion: Der Motor", t2_text: "Das Herz ruht nie. Die rechte Seite pumpt sauerstoffarmes, die linke Seite sauerstoffreiches Blut.",
    t2_b1: "Der Herzmuskel zieht sich unermüdlich zusammen und entspannt sich.", t2_b2: "Die rechte Kammer pumpt Blut in die Lunge, um Sauerstoff zu holen.", t2_b3: "Die linke Kammer pumpt das frische, sauerstoffreiche Blut in den ganzen Körper.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Die", t2_w2: "linke", t2_w3: "Kammer", t2_w4: "pumpt", t2_w5: "das", t2_w6: "Blut.",
    t2_q: "Welches Blut pumpt die linke Seite des Herzens?", t2_q_a: "Sauerstoffreiches Blut", t2_q_b: "Kohlendioxidreiches Blut", t2_q_c: "Blut ohne Plasma", t2_q_d: "Blut mit Abfallstoffen",

    t3_title: "Blutplasma", t3_text: "Der flüssige Teil des Blutes ist das Plasma. Es besteht größtenteils aus Wasser und transportiert wichtige Stoffe.",
    t3_b1: "Transportiert Nährstoffe (z.B. Zucker, Eiweiße) zu den Zellen.", t3_b2: "Transportiert Abfallstoffe von den Zellen weg.", t3_b3: "Transportiert Hormone und Wärme, reguliert die Körpertemperatur.",
    t3_inst: "Transportiert oder Nicht? Wähle die Aufgaben des Plasmas!",
    t3_bucket_sza: "Wird vom Plasma transportiert", t3_bucket_nem: "Nicht seine Aufgabe",
    t3_item_s1: "Nährstoffe", t3_item_s2: "Hormone", t3_item_n1: "Luft", t3_item_n2: "Steine",
    t3_q: "Woraus besteht das Blutplasma zum größten Teil?", t3_q_a: "Aus Wasser", t3_q_b: "Aus roten Blutkörperchen", t3_q_c: "Aus Eiweiß", t3_q_d: "Aus Fett",

    t4_title: "Blutzellen", t4_text: "Im Plasma schwimmen die zellulären Bestandteile des Blutes. Jede Art hat eine besondere Aufgabe zum Überleben.",
    t4_b1: "Rote Blutkörperchen: transportieren Sauerstoff und CO2 (geben dem Blut die rote Farbe).", t4_b2: "Weiße Blutkörperchen: Soldaten des Immunsystems, bekämpfen Krankheitserreger.", t4_b3: "Blutplättchen: zuständig für die Blutgerinnung, verschließen Wunden.",
    t4_inst: "Verbinde die Zellen mit ihrer Aufgabe!",
    t4_l1: "Rote Blutkörperchen", t4_r1: "Sauerstofftransport", t4_l2: "Weiße Blutkörperchen", t4_r2: "Abwehr von Krankheitserregern", t4_l3: "Blutplättchen", t4_r3: "Blutgerinnung, Wundverschluss",
    t4_q: "Welche Blutzelle ist für die Vernichtung von Krankheitserregern zuständig?", t4_q_a: "Die weißen Blutkörperchen", t4_q_b: "Die roten Blutkörperchen", t4_q_c: "Die Blutplättchen", t4_q_d: "Das Blutplasma",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Herzfunktion und Blutzusammensetzung!",
    t5_b1: "Vier Herzkammern: 2 Vorhöfe, 2 Kammern.", t5_b2: "Blutplasma ist das flüssige Transportmittel.", t5_b3: "Rote Blutkörperchen transportieren Sauerstoff.",
    t5_inst: "Wer ist für die Blutgerinnung verantwortlich?", t5_gap_sentence2: "Wenn du dich schneidest, stoppen {gap} die Blutung.",
    t5_c51: "Blutplättchen", t5_c52: "weiße Blutkörperchen", t5_c53: "Herzklappen",
    t5_q: "Welche Aussage über rote Blutkörperchen ist WAHR?", t5_q_a: "Sie transportieren Sauerstoff im Körper.", t5_q_b: "Sie töten Bakterien.", t5_q_c: "Sie befinden sich nicht im Blut.", t5_q_d: "Sie sind für die Blutgerinnung verantwortlich.",
  },
  ro: {
    explorer_title: "Inima și Sângele",
    t1_title: "Structura Inimii", t1_text: "Inima este un organ musculos și cavitar care pompează sânge în corp. Este formată din două atrii și două ventricule.",
    t1_b1: "Atrii: aici ajunge sângele din corp și din plămâni.", t1_b2: "Ventricule: de aici se pompează sângele către corp și plămâni.", t1_b3: "Valvele: funcționează ca niște supape, prevenind curgerea sângelui înapoi.",
    t1_inst: "Din câte cavități este formată inima umană?", t1_gap_sentence: "Inima umană este formată din două atrii și două {gap}.",
    t1_c1: "ventricule", t1_c2: "valve", t1_c3: "plămâni",
    t1_q: "Care este rolul valvelor inimii?", t1_q_a: "Să prevină întoarcerea sângelui.", t1_q_b: "Să producă oxigen.", t1_q_c: "Să contracte inima.", t1_q_d: "Să absoarbă nutrienți.",

    t2_title: "Funcția Inimii: Motorul", t2_text: "Inima nu se odihnește niciodată. Partea dreaptă pompează sânge sărac în oxigen, iar partea stângă sânge bogat în oxigen.",
    t2_b1: "Mușchiul cardiac se contractă și se relaxează neobosit.", t2_b2: "Ventriculul drept pompează sânge în plămâni pentru oxigen.", t2_b3: "Ventriculul stâng pompează sângele proaspăt oxigenat în tot corpul.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Ventriculul", t2_w2: "stâng", t2_w3: "pompează", t2_w4: "sângele", t2_w5: "în", t2_w6: "corp.",
    t2_q: "Ce fel de sânge pompează partea stângă a inimii?", t2_q_a: "Sânge bogat în oxigen", t2_q_b: "Sânge bogat în dioxid de carbon", t2_q_c: "Sânge fără plasmă", t2_q_d: "Sânge plin cu deșeuri",

    t3_title: "Plasma Sanguină", t3_text: "Partea lichidă a sângelui este plasma. Este formată în mare parte din apă și transportă substanțe importante.",
    t3_b1: "Transportă nutrienți (zaharuri, proteine) la celule.", t3_b2: "Transportă deșeurile departe de celule.", t3_b3: "Transportă hormoni și căldură, reglând temperatura corpului.",
    t3_inst: "Transportat sau Nu? Alege ce face plasma!",
    t3_bucket_sza: "Transportat de plasmă", t3_bucket_nem: "Nu este sarcina ei",
    t3_item_s1: "Nutrienți", t3_item_s2: "Hormoni", t3_item_n1: "Aerul", t3_item_n2: "Pietre",
    t3_q: "Din ce este formată cea mai mare parte a plasmei sanguine?", t3_q_a: "Din apă", t3_q_b: "Din globule roșii", t3_q_c: "Din proteine", t3_q_d: "Din grăsime",

    t4_title: "Celulele Sângelui", t4_text: "Elementele celulare ale sângelui plutesc în plasmă. Fiecare are o sarcină specifică pentru a ne ține în viață.",
    t4_b1: "Globule roșii: transportă oxigenul și CO2 (dau culoarea roșie a sângelui).", t4_b2: "Globule albe: soldații sistemului imunitar, luptă cu agenții patogeni.", t4_b3: "Trombocite (plachete): responsabile de coagulare, opresc sângerarea rănilor.",
    t4_inst: "Potrivește celulele cu sarcina lor!",
    t4_l1: "Globule roșii", t4_r1: "Transportul oxigenului", t4_l2: "Globule albe", t4_r2: "Protecție contra patogenilor", t4_l3: "Trombocite", t4_r3: "Coagularea, închiderea rănilor",
    t4_q: "Care celulă a sângelui distruge agenții patogeni (cum ar fi bacteriile)?", t4_q_a: "Globulele albe", t4_q_b: "Globulele roșii", t4_q_c: "Trombocitele", t4_q_d: "Plasma sanguină",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre cum funcționează inima și sângele!",
    t5_b1: "Inima are 4 cavități: 2 atrii, 2 ventricule.", t5_b2: "Plasma sanguină este mediul lichid de transport.", t5_b3: "Globulele roșii transportă oxigenul.",
    t5_inst: "Cine este responsabil pentru coagularea sângelui?", t5_gap_sentence2: "Dacă te tai, {gap} opresc sângerarea.",
    t5_c51: "trombocitele", t5_c52: "globulele albe", t5_c53: "valvele",
    t5_q: "Care afirmație este ADEVĂRATĂ despre globulele roșii?", t5_q_a: "Ele transportă oxigenul în corp.", t5_q_b: "Ele distrug bacteriile.", t5_q_c: "Nu se găsesc în sânge.", t5_q_d: "Sunt responsabile de coagulare.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <HeartSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t2_inst",
      hint1: "t2_b3",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "sza", label: "t3_bucket_sza" },
        { id: "nem", label: "t3_bucket_nem" },
      ],
      items: [
        { text: "t3_item_s1", bucketId: "sza" },
        { text: "t3_item_n1", bucketId: "nem" },
        { text: "t3_item_s2", bucketId: "sza" },
        { text: "t3_item_n2", bucketId: "nem" },
      ],
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
  icon: "❤️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const HeartExplorer = memo(function HeartExplorer({
  color = "#E11D48", // Rose-600 a szívhez
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
      explorerId="bio_k6_heart" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default HeartExplorer;
