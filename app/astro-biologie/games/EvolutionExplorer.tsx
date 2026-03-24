"use client";
// EvolutionExplorer.tsx — Bio Island i9: Evolúció alapjai (K7)
// Topics: 1) A DNS szerkezete 2) Adaptáció 3) Természetes szelekció 4) Tanult viselkedés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { DNAHelixSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" textAnchor="middle">❄️</text>
        <path d="M -10,0 L 10,0" stroke="#0EA5E9" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="50" y="15" fontSize="40" textAnchor="middle">🐻‍❄️</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="10" fontSize="30" textAnchor="middle">🦋</text>
        <text x="0" y="10" fontSize="30" textAnchor="middle">🦋</text>
        <text x="50" y="10" fontSize="30" textAnchor="middle">🦅</text>
        <path d="M 40,-10 L 10,-10" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />
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
        <text x="0" y="15" fontSize="40" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Evolúció Alapjai",
    // T1: DNS Szerkezete (Label-diagram)
    t1_title: "Az élet kódja: A DNS",
    t1_text: "A DNS hordozza az összes információt, ami az élőlény felépítéséhez kell. Szerkezete egy megcsavart létrához hasonlít (kettős hélix).",
    t1_b1: "Cukor-foszfát váz: a létra két szára.",
    t1_b2: "Bázispárok: a létra fokai, ahol az információ tárolódik.",
    t1_b3: "Gén: a DNS egy meghatározott szakasza.",
    t1_inst: "Címkézd fel a DNS hélix részeit!",
    t1_area_backbone: "Cukor-foszfát váz",
    t1_area_base: "Bázispár",
    t1_area_helix: "Kettős hélix",
    t1_q: "Milyen alakú a DNS molekula?",
    t1_q_a: "Kettős hélix (csavart létra)", t1_q_b: "Sima kör", t1_q_c: "Kocka", t1_q_d: "Egyetlen hosszú szál",

    // T2: Adaptáció
    t2_title: "Alkalmazkodás (Adaptáció)",
    t2_text: "Az élőlények olyan tulajdonságokat fejlesztenek ki, amelyek segítik a túlélésüket az adott környezetben.",
    t2_b1: "Szín: rejtőzködés (mimikri) a ragadozók elől.",
    t2_b2: "Alak: pl. a kaktusz levelei tüskévé módosultak a víztakarékosság miatt.",
    t2_b3: "Viselkedés: vonulás vagy téli álom a hideg ellen.",
    t2_inst: "Párosítsd az élőlényt az alkalmazkodásával!",
    t2_l1: "Jegesmedve", t2_r1: "Vastag zsírréteg és fehér bunda",
    t2_l2: "Kaktusz", t2_r2: "Víztároló szár és tüskék",
    t2_l3: "Kaméleon", t2_r3: "Színváltoztató képesség",
    t2_q: "Mi a célja az élőlények alkalmazkodásának?",
    t2_q_a: "A túlélés és a szaporodás esélyének növelése", t2_q_b: "Hogy szebben nézzenek ki", t2_q_c: "A Nap eloltása", t2_q_d: "A kőzetek lebontása",

    // T3: Természetes szelekció
    t3_title: "Természetes szelekció",
    t3_text: "Charles Darwin elmélete szerint azok az egyedek maradnak életben és szaporodnak, akik a legjobban alkalmazkodtak a környezethez.",
    t3_b1: "Változatosság: egy populáción belül az egyedek eltérnek egymástól.",
    t3_b2: "Túlszaporodás: több utód születik, mint amennyi életben maradhat.",
    t3_b3: "Szelekció: a környezet 'kiválogatja' a legrátermettebbeket.",
    t3_inst: "Tedd sorba a szelekció folyamatának lépéseit!",
    t3_w1: "Változatosság", t3_w2: "Küzdelem a létért", t3_w3: "Szelekció", t3_w4: "Öröklődés",
    t3_q: "Ki alkotta meg a természetes szelekció elméletét?",
    t3_q_a: "Charles Darwin", t3_q_b: "Isaac Newton", t3_q_c: "Albert Einstein", t3_q_d: "Gregor Mendel",

    // T4: Tanult viselkedés
    t4_title: "Öröklött és tanult viselkedés",
    t4_text: "Az állatok viselkedése részben a génjeikben van, részben pedig az életük során tanulják meg a tapasztalataikból.",
    t4_b1: "Öröklött: pl. a pók hálószövése (tudni születik).",
    t4_b2: "Tanult: pl. a kutyák engedelmessége vagy a vadászat technikája.",
    t4_b3: "A tanulás segít rugalmasan alkalmazkodni a változó világhoz.",
    t4_inst: "Öröklött vagy Tanult viselkedés? Válogasd szét!",
    t4_bucket_oro: "Öröklött (Gének)",
    t4_bucket_tan: "Tanult (Tapasztalat)",
    t4_item_o1: "Pókháló szövés", t4_item_o2: "Madárfészek építés",
    t4_item_t1: "Trükkök bemutatása", t4_item_t2: "Veszélyes ételek elkerülése",
    t4_q: "Melyik viselkedésformát NEM kell tanulni, mert az állat vele születik?",
    t4_q_a: "Feltétlen reflex / Öröklött mozgásminta", t4_q_b: "Olvasás", t4_q_c: "Autóvezetés", t4_q_d: "Beszéd",

    // T5: Review
    t5_title: "Evolúciós összefoglaló",
    t5_text: "Az élet folyamatosan változik és alkalmazkodik. A DNS a változások alapja.",
    t5_b1: "A DNS tárolja az örökítőanyagot.",
    t5_b2: "A szelekció a legrátermettebbek túlélését jelenti.",
    t5_b3: "Az adaptáció segíti a környezethez való illeszkedést.",
    t5_inst: "Melyik molekula határozza meg a tulajdonságainkat?",
    t5_gap_sentence2: "A tulajdonságainkat a sejtmagban lévő {gap} kódolja.",
    t5_c51: "DNS", t5_c52: "ATP", t5_c53: "H2O",
    t5_q: "Melyik állítás IGAZ az evolúcióra?",
    t5_q_a: "Az élőlények tulajdonságai generációkon keresztül változnak.", t5_q_b: "Az evolúció egy hét alatt lezajlik.", t5_q_c: "Minden állat teljesen egyforma.", t5_q_d: "A DNS nem játszik szerepet benne.",
  },
  en: {
    explorer_title: "Basics of Evolution",
    t1_title: "The Code of Life: DNA", t1_text: "DNA carries all the information needed to build an organism. Its structure is like a twisted ladder (double helix).",
    t1_b1: "Sugar-phosphate backbone: the sides of the ladder.", t1_b2: "Base pairs: the rungs where info is stored.", t1_b3: "Gene: a specific segment of DNA.",
    t1_inst: "Label the parts of the DNA helix!",
    t1_area_backbone: "Sugar-phosphate backbone", t1_area_base: "Base pair", t1_area_helix: "Double helix",
    t1_q: "What is the shape of the DNA molecule?", t1_q_a: "Double helix", t1_q_b: "Circle", t1_q_c: "Cube", t1_q_d: "Single straight line",

    t2_title: "Adaptation", t2_text: "Organisms develop traits that help them survive in their specific environment.",
    t2_b1: "Color: camouflage (mimicry) from predators.", t2_b2: "Shape: e.g., cactus spines to save water.", t2_b3: "Behavior: migration or hibernation against the cold.",
    t2_inst: "Match the organism with its adaptation!",
    t2_l1: "Polar bear", t2_r1: "Thick fat and white fur",
    t2_l2: "Cactus", t2_r2: "Water-storing stem and spines",
    t2_l3: "Chameleon", t2_r3: "Color-changing ability",
    t2_q: "What is the purpose of adaptation?", t2_q_a: "Increasing chances of survival", t2_q_b: "Looking prettier", t2_q_c: "Turning off the Sun", t2_q_d: "Breaking rocks",

    t3_title: "Natural Selection", t3_text: "Darwin's theory states that individuals best adapted to their environment are more likely to survive and reproduce.",
    t3_b1: "Variation: individuals in a population differ.", t3_b2: "Overproduction: more offspring are born than can survive.", t3_b3: "Selection: environment 'selects' the fittest.",
    t3_inst: "Put the steps of natural selection in order!",
    t3_w1: "Variation", t3_w2: "Struggle for existence", t3_w3: "Selection", t3_w4: "Inheritance",
    t3_q: "Who formulated the theory of natural selection?", t3_q_a: "Charles Darwin", t3_q_b: "Isaac Newton", t3_q_c: "Albert Einstein", t3_q_d: "Gregor Mendel",

    t4_title: "Learned Behavior", t4_text: "Animal behavior is partly in their genes and partly learned from experience.",
    t4_b1: "Innate: e.g., a spider weaving a web.", t4_b2: "Learned: e.g., dog obedience or hunting techniques.", t4_b3: "Learning allows flexible adaptation to a changing world.",
    t4_inst: "Innate or Learned? Sort them!",
    t4_bucket_oro: "Innate (Genes)", t4_bucket_tan: "Learned (Experience)",
    t4_item_o1: "Web weaving", t4_item_o2: "Nest building",
    t4_item_t1: "Doing tricks", t4_item_t2: "Avoiding dangerous food",
    t4_q: "Which behavior does NOT need to be learned?", t4_q_a: "Innate reflex / Instinct", t4_q_b: "Reading", t4_q_c: "Driving", t4_q_d: "Speaking",

    t5_title: "Evolution Summary", t5_text: "Life is constantly changing. DNA is the basis of these changes.",
    t5_b1: "DNA stores genetic information.", t5_b2: "Selection means survival of the fittest.", t5_b3: "Adaptation helps fit the environment.",
    t5_inst: "Which molecule determines our traits?", t5_gap_sentence2: "Our traits are coded by {gap}.",
    t5_c51: "DNA", t5_c52: "ATP", t5_c53: "Water",
    t5_q: "Which statement is TRUE about evolution?", t5_q_a: "Traits of organisms change over generations.", t5_q_b: "Evolution happens in one week.", t5_q_c: "All animals are identical.", t5_q_d: "DNA has no role in it.",
  },
  de: {
    explorer_title: "Grundlagen der Evolution",
    t1_title: "Der Code des Lebens: DNA", t1_text: "Die DNA trägt alle Informationen zum Aufbau eines Lebewesens. Sie sieht aus wie eine verdrehte Strickleiter.",
    t1_b1: "Zucker-Phosphat-Rückgrat: die Holme der Leiter.", t1_b2: "Basenpaare: die Sprossen der Leiter.", t1_b3: "Gen: ein bestimmter DNA-Abschnitt.",
    t1_inst: "Beschrifte die Teile der DNA!",
    t1_area_backbone: "Zucker-Phosphat-Rückgrat", t1_area_base: "Basenpaar", t1_area_helix: "Doppelhelix",
    t1_q: "Welche Form hat das DNA-Molekül?", t1_q_a: "Doppelhelix", t1_q_b: "Kreis", t1_q_c: "Würfel", t1_q_d: "Einzelstrang",

    t2_title: "Anpassung (Adaptation)", t2_text: "Lebewesen entwickeln Merkmale, die ihr Überleben in ihrer Umwelt sichern.",
    t2_b1: "Farbe: Tarnung (Mimikry).", t2_b2: "Form: z.B. Kakteendornen zum Wassersparen.", t2_b3: "Verhalten: Vogelzug oder Winterschlaf.",
    t2_inst: "Verbinde Tier und Anpassung!",
    t2_l1: "Eisbär", t2_r1: "Fettschicht und weißes Fell",
    t2_l2: "Kaktus", t2_r2: "Wasserspeicher und Dornen",
    t2_l3: "Chamäleon", t2_r3: "Farbwechsel",
    t2_q: "Was ist das Ziel der Anpassung?", t2_q_a: "Überlebenschancen erhöhen", t2_q_b: "Schöner aussehen", t2_q_c: "Sonne ausschalten", t2_q_d: "Steine fressen",

    t3_title: "Selektion", t3_text: "Nach Darwin überleben die Individuen, die am besten an ihre Umwelt angepasst sind.",
    t3_b1: "Variabilität: Unterschiede innerhalb einer Population.", t3_b2: "Überproduktion: mehr Nachkommen als Ressourcen.", t3_b3: "Selektion: die Umwelt 'wählt' die Besten aus.",
    t3_inst: "Bringe die Schritte der Selektion in Reihenfolge!",
    t3_w1: "Variabilität", t3_w2: "Kampf ums Dasein", t3_w3: "Selektion", t3_w4: "Vererbung",
    t3_q: "Wer begründete die Theorie der natürlichen Selektion?", t3_q_a: "Charles Darwin", t3_q_b: "Isaac Newton", t3_q_c: "Gregor Mendel", t3_q_d: "Einstein",

    t4_title: "Lernverhalten", t4_text: "Verhalten ist teils angeboren (Gene), teils durch Erfahrung erlernt.",
    t4_b1: "Angeboren: z.B. Spinnen eines Netzes.", t4_b2: "Erlernt: z.B. Jagdtechniken oder Kommandos.", t4_b3: "Lernen ermöglicht Flexibilität.",
    t4_inst: "Angeboren oder Erlernt? Sortiere!",
    t4_bucket_oro: "Angeboren (Gene)", t4_bucket_tan: "Erlernt (Erfahrung)",
    t4_item_o1: "Netzbau", t4_item_o2: "Nestbau",
    t4_item_t1: "Tricks machen", t4_item_t2: "Giftiges Essen meiden",
    t4_q: "Welches Verhalten muss NICHT gelernt werden?", t4_q_a: "Instinkt / Reflex", t4_q_b: "Lesen", t4_q_c: "Radfahren", t4_q_d: "Klavierspielen",

    t5_title: "Zusammenfassung", t5_text: "Das Leben wandelt sich ständig durch Selektion und Anpassung.",
    t5_b1: "DNA speichert die Information.", t5_b2: "Selektion filtert die Besten.", t5_b3: "Anpassung sichert das Überleben.",
    t5_inst: "Welches Molekül bestimmt unsere Merkmale?", t5_gap_sentence2: "Merkmale werden durch die {gap} bestimmt.",
    t5_c51: "DNA", t5_c52: "ATP", t5_c53: "Wasser",
    t5_q: "Was ist RICHTIG über Evolution?", t5_q_a: "Merkmale ändern sich über Generationen.", t5_q_b: "Passiert in einer Woche.", t5_q_c: "Alle sind gleich.", t5_q_d: "DNA ist egal.",
  },
  ro: {
    explorer_title: "Bazele Evoluției",
    t1_title: "Codul Vieții: ADN", t1_text: "ADN-ul conține toate informațiile necesare pentru construirea unui organism. Structura sa este ca o scară răsucită.",
    t1_b1: "Cadru zahăr-fosfat: părțile laterale ale scării.", t1_b2: "Perechi de baze: treptele unde se stochează info.", t1_b3: "Genă: un segment specific de ADN.",
    t1_inst: "Etichetează părțile hélixului ADN!",
    t1_area_backbone: "Cadru zahăr-fosfat", t1_area_base: "Pereche de baze", t1_area_helix: "Dublu hélix",
    t1_q: "Ce formă are molecula de ADN?", t1_q_a: "Dublu hélix", t1_q_b: "Cerc", t1_q_c: "Cub", t1_q_d: "Fir drept",

    t2_title: "Adaptarea", t2_text: "Organismele dezvoltă trăsături care le ajută să supraviețuiască în mediul lor.",
    t2_b1: "Culoare: camuflaj (mimicră).", t2_b2: "Formă: ex: spinii cactusului pentru a salva apa.", t2_b3: "Comportament: migrație sau hibernare.",
    t2_inst: "Potrivește organismul cu adaptarea sa!",
    t2_l1: "Urs polar", t2_r1: "Strat de grăsime și blană albă",
    t2_l2: "Cactus", t2_r2: "Tulpină ce stochează apa și spini",
    t2_l3: "Cameleon", t2_r3: "Schimbarea culorii",
    t2_q: "Care este scopul adaptării?", t2_q_a: "Creșterea șanselor de supraviețuire", t2_q_b: "Să arate mai bine", t2_q_c: "Să stingă Soarele", t2_q_d: "Să mănânce pietre",

    t3_title: "Selecția Naturală", t3_text: "Teoria lui Darwin spune că supraviețuiesc cei mai bine adaptați indivizi.",
    t3_b1: "Variabilitate: indivizii diferă între ei.", t3_b2: "Suprapopulare: se nasc mai mulți urmași decât pot supraviețui.", t3_b3: "Selecție: mediul îi 'alege' pe cei mai apți.",
    t3_inst: "Pune pașii selecției în ordine!",
    t3_w1: "Variabilitate", t3_w2: "Lupta pentru existență", t3_w3: "Selecție", t3_w4: "Ereditate",
    t3_q: "Cine a formulat teoria selecției naturale?", t3_q_a: "Charles Darwin", t3_q_b: "Isaac Newton", t3_q_c: "Gregor Mendel", t3_q_d: "Einstein",

    t4_title: "Comportament Învățat", t4_text: "Comportamentul este parțial genetic, parțial învățat prin experiență.",
    t4_b1: "Înnăscut: ex: păianjenul care țese plasa.", t4_b2: "Învățat: ex: dresajul câinilor sau tehnicile de vânătoare.", t4_b3: "Învățarea permite adaptarea la schimbări.",
    t4_inst: "Înnăscut sau Învățat? Sortează-le!",
    t4_bucket_oro: "Înnăscut (Gene)", t4_bucket_tan: "Învățat (Experiență)",
    t4_item_o1: "Țesutul plasei", t4_item_o2: "Construcția cuibului",
    t4_item_t1: "Executarea trucurilor", t4_item_t2: "Evitarea hranei toxice",
    t4_q: "Ce comportament NU trebuie învățat?", t4_q_a: "Instinct / Reflex înnăscut", t4_q_b: "Cititul", t4_q_c: "Șofatul", t4_q_d: "Vorbitul",

    t5_title: "Recapitulare", t5_text: "Viața se schimbă constant prin selecție și adaptare.",
    t5_b1: "ADN-ul stochează informația.", t5_b2: "Selecția alege pe cei mai buni.", t5_b3: "Adaptarea asigură supraviețuirea.",
    t5_inst: "Ce moleculă determină trăsăturile noastre?",
    t5_gap_sentence2: "Trăsăturile sunt codificate de {gap}.",
    t5_c51: "ADN", t5_c52: "ATP", t5_c53: "apă",
    t5_q: "Ce este ADEVĂRAT despre evoluție?", t5_q_a: "Trăsăturile se schimbă de-a lungul generațiilor.", t5_q_b: "Are loc într-o săptămână.", t5_q_c: "Toți sunt identici.", t5_q_d: "ADN-ul nu contează.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <DNAHelixSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "backbone", x: 20, y: 50, label: "t1_area_backbone" },
        { id: "base",     x: 50, y: 50, label: "t1_area_base" },
        { id: "helix",    x: 80, y: 50, label: "t1_area_helix" },
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3],
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
    svg: (lang) => <DNAHelixSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "oro", label: "t4_bucket_oro" },
        { id: "tan", label: "t4_bucket_tan" },
      ],
      items: [
        { text: "t4_item_o1", bucketId: "oro" },
        { text: "t4_item_t1", bucketId: "tan" },
        { text: "t4_item_o2", bucketId: "oro" },
        { text: "t4_item_t2", bucketId: "tan" },
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
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EvolutionExplorer = memo(function EvolutionExplorer({
  color = "#F43F5E", // Rose-500 a DNS-hez és az élet alapjaihoz
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
      explorerId="bio_k7_evolution" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default EvolutionExplorer;
