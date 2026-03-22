// ─── PHYSICS GENERATORS K6: ELECTRICITY ────────────────────────────────────────
// "Elektrizität" theme — Series circuits (Soros kapcsolás) with MCQ + Typing
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Series circuit: single path, I is same, U-total = U1 + U2 + U3, R-total = R1 + R2 + R3

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

/** Create typing question */
function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

/** Multilingual helper */
function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─── 1. SERIES CIRCUITS ────────────────────────────────────────────────────

const SERIES_CIRCUITS_DATA = {
  examples: [
    { en: "old Christmas lights", de: "alte Weihnachtslichter", hu: "régi karácsonyi lámpák", ro: "ornamente de Crăciun vechi" },
    { en: "a simple flashlight with batteries", de: "eine einfache Taschenlampe mit Batterien", hu: "egyszerű zseblámpa elemekkel", ro: "o lanternă simplă cu baterii" },
    { en: "a circuit with resistors in a line", de: "ein Stromkreis mit Widerständen in einer Linie", hu: "ellenállások lineáris áramköre", ro: "un circuit cu rezistențe în linie" },
    { en: "doorbell system", de: "Türklingelsystem", hu: "ajtócsengő rendszer", ro: "sistem de sonerie ușii" },
    { en: "a string of LED lights", de: "eine Lichterkette", hu: "LED-es izzósor", ro: "un șir de lumini LED" },
    { en: "three batteries connected end-to-end", de: "drei Batterien hintereinander verbunden", hu: "három elem egymás után kötve", ro: "trei baterii conectate cap la coadă" },
    { en: "radio components connected in sequence", de: "Radiokomponenten in Reihe verbunden", hu: "rádióalkatrészek sorosan kötve", ro: "componente radio conectate în serie" },
    { en: "a simple switch with a light bulb", de: "ein einfacher Schalter mit einer Glühbirne", hu: "egyszerű kapcsoló izzóval", ro: "un comutator simplu cu o bec" },
  ],

  properties: [
    { en: "single path for current", de: "einzelner Pfad für den Strom", hu: "egyetlen út az áramnak", ro: "cale unică pentru curent" },
    { en: "current is the same everywhere", de: "Strom ist überall gleich", hu: "áram mindenhol azonos", ro: "curentul este același peste tot" },
    { en: "voltages add up", de: "Spannungen addieren sich", hu: "feszültségek összeadódnak", ro: "tensiunile se adună" },
    { en: "resistances add up", de: "Widerstände addieren sich", hu: "ellenállások összeadódnak", ro: "rezistențele se adună" },
    { en: "if one component breaks, all stop", de: "wenn eine Komponente ausfällt, alle stoppen", hu: "ha egy komponens elromlik, mind megáll", ro: "dacă o componentă se defectează, toate se opresc" },
  ],

  formulas: [
    { en: "I-total = I1 = I2 = I3", de: "I-total = I1 = I2 = I3", hu: "I-össz = I1 = I2 = I3", ro: "I-total = I1 = I2 = I3" },
    { en: "U-total = U1 + U2 + U3", de: "U-total = U1 + U2 + U3", hu: "U-össz = U1 + U2 + U3", ro: "U-total = U1 + U2 + U3" },
    { en: "R-total = R1 + R2 + R3", de: "R-total = R1 + R2 + R3", hu: "R-össz = R1 + R2 + R3", ro: "R-total = R1 + R2 + R3" },
  ],

  disadvantages: [
    { en: "if one light breaks, all go dark", de: "wenn ein Licht ausfällt, alle werden dunkel", hu: "ha egy lámpa kiégett, mind elsötétedik", ro: "dacă o lumină se defectează, toate se-ntunecă" },
    { en: "brightness decreases as you add more lights", de: "Helligkeit nimmt mit mehr Lichtern ab", hu: "fényerősség csökken több lámpával", ro: "luminozitatea scade cu mai multe lumini" },
    { en: "higher total resistance", de: "höherer Gesamtwiderstand", hu: "magasabb teljes ellenállás", ro: "rezistență totală mai mare" },
  ],

  advantages: [
    { en: "simple to construct and understand", de: "einfach zu konstruieren und zu verstehen", hu: "egyszerű felépíteni és megérteni", ro: "simplu de construit și înțeles" },
    { en: "uses less wire than parallel", de: "benötigt weniger Draht als parallel", hu: "kevesebb drót kell, mint párhuzamosan", ro: "folosește mai puțin fir decât în paralel" },
    { en: "only one switch needed", de: "nur ein Schalter erforderlich", hu: "csak egy kapcsoló szükséges", ro: "doar un comutator necesar" },
  ],
};

export function generateSeriesCircuitsMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a series circuit?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Was ist eine Soros-Schaltung?", "What is a series circuit?", "Mi a soros áramkör?", "Ce este un circuit în serie?", lang),
      q4("Ein Stromkreis mit einem einzigen Weg für den Strom", "A circuit with a single path for current", "Egy áramkör egyetlen úttal az áramnak", "Un circuit cu o cale unică pentru curent", lang),
      [
        q4("Ein Stromkreis mit mehreren parallelen Pfaden", "A circuit with multiple parallel paths", "Áramkör több párhuzamos úttal", "Un circuit cu mai multe căi paralele", lang),
        q4("Ein Stromkreis ohne Spannung", "A circuit without voltage", "Feszültség nélküli áramkör", "Un circuit fără tensiune", lang),
        q4("Ein Stromkreis, der nicht funktioniert", "A circuit that does not work", "Nem működő áramkör", "Un circuit care nu funcționează", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a series circuit?"
  for (let i = 0; i < 8; i++) {
    const example = pick(SERIES_CIRCUITS_DATA.examples, rng);
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Welches ist ein Beispiel für eine Soros-Schaltung?", "Which is an example of a series circuit?", "Melyik a soros áramkör példája?", "Care este un exemplu de circuit în serie?", lang),
      q4(example.de, example.en, example.hu, example.ro, lang),
      [
        q4("Ein Haus mit mehreren Steckdosen an verschiedenen Wänden", "A house with multiple outlets on different walls", "Ház több aljzattal különböző falakon", "O casă cu mai multe prize pe pereți diferiți", lang),
        q4("Ein Auto mit mehreren unabhängigen Lichtern", "A car with multiple independent lights", "Autó több független lámpával", "Un automobil cu mai multe lumini independente", lang),
        q4("Ein Schlafzimmer mit mehreren Leuchten an verschiedenen Schaltern", "A bedroom with several lights on different switches", "Hálószoba több lámpával különböző kapcsolókon", "O dormitor cu mai multe lumini pe comutatoare diferite", lang),
      ],
      rng
    ));
  }

  // Template 3: "In a series circuit, how is the current?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("In einer Soros-Schaltung ist der Strom überall...", "In a series circuit, the current is everywhere...", "Egy soros áramkörben az áram mindenhol...", "Într-un circuit în serie, curentul este peste tot...", lang),
      q4("gleich", "the same", "azonos", "la fel", lang),
      [
        q4("verschieden", "different", "különböző", "diferit", lang),
        q4("null", "zero", "nulla", "zero", lang),
        q4("nur positive", "only positive", "csak pozitív", "doar pozitiv", lang),
      ],
      rng
    ));
  }

  // Template 4: "What happens to total voltage in a series circuit?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Was passiert mit der Gesamtspannung in einer Soros-Schaltung?", "What happens to total voltage in a series circuit?", "Mi történik az összes feszültséggel egy soros áramkörben?", "Ce se întâmplă cu tensiunea totală într-un circuit în serie?", lang),
      q4("Sie ist die Summe aller Einzelspannungen", "It is the sum of all individual voltages", "Az összes egyedi feszültség összege", "Este suma tuturor tensiunilor individuale", lang),
      [
        q4("Sie ist die gleiche wie jede Einzelspannung", "It is the same as each individual voltage", "Ez ugyanaz, mint minden egyes feszültség", "Este la fel cu fiecare tensiune individuală", lang),
        q4("Sie ist die durchschnittliche Spannung", "It is the average voltage", "Az átlagos feszültség", "Este tensiunea medie", lang),
        q4("Sie ist immer null", "It is always zero", "Mindig nulla", "Este întotdeauna zero", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is the main disadvantage of a series circuit?"
  for (let i = 0; i < 4; i++) {
    const disadv = pick(SERIES_CIRCUITS_DATA.disadvantages, rng);
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Was ist der Hauptnachteil einer Soros-Schaltung?", "What is the main disadvantage of a series circuit?", "Mi a soros áramkör fő hátránya?", "Care este principalul dezavantaj al unui circuit în serie?", lang),
      q4(disadv.de, disadv.en, disadv.hu, disadv.ro, lang),
      [
        q4("Es braucht zu viel Strom", "It requires too much current", "Túl sok áramot igényel", "Necesită prea mult curent", lang),
        q4("Es braucht zu viel Spannung", "It requires too much voltage", "Túl sok feszültséget igényel", "Necesită prea multă tensiune", lang),
        q4("Es ist zu teuer zu bauen", "It is too expensive to build", "Túl drága felépíteni", "Este prea scump de construit", lang),
      ],
      rng
    ));
  }

  // Template 6: "What is a characteristic of series circuit resistance?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Welches ist eine Eigenschaft des Soros-Schaltungswiderstands?", "What is a characteristic of series circuit resistance?", "Mi jellemzi a soros áramkör ellenállást?", "Care este o caracteristică a rezistenței circuitului în serie?", lang),
      q4("Der Gesamtwiderstand ist die Summe aller Widerstände", "Total resistance is the sum of all resistances", "A teljes ellenállás az összes ellenállás összege", "Rezistența totală este suma tuturor rezistențelor", lang),
      [
        q4("Der Gesamtwiderstand ist die Durchschnitt aller Widerstände", "Total resistance is the average of all resistances", "A teljes ellenállás az összes ellenállás átlaga", "Rezistența totală este media tuturor rezistențelor", lang),
        q4("Der Gesamtwiderstand ist größer als der größte einzelne Widerstand", "Total resistance is greater than the largest single resistance", "A teljes ellenállás nagyobb, mint a legnagyobb egyedi ellenállás", "Rezistența totală este mai mare decât cea mai mare rezistență individuală", lang),
        q4("Der Gesamtwiderstand ist immer null", "Total resistance is always zero", "A teljes ellenállás mindig nulla", "Rezistența totală este întotdeauna zero", lang),
      ],
      rng
    ));
  }

  // Template 7: "Real-world application of series circuit"
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "electricity",
      "series_circuits",
      q4("Welche Anwendung nutzt eine Soros-Schaltung in der Praxis?", "Which application uses a series circuit in practice?", "Melyik alkalmazás használ soros áramkört a gyakorlatban?", "Care dintre aceste aplicații folosește un circuit în serie în practică?", lang),
      q4("Alte Weihnachtslichter", "Old Christmas lights", "Régi karácsonyi lámpák", "Ornamente de Crăciun vechi", lang),
      [
        q4("Eine moderne intelligente Hausbeleuchtung", "Modern smart home lighting", "Modern okos házi világítás", "Iluminatul modern al casei inteligente", lang),
        q4("Die Beleuchtung in einem modernen Bürogebäude", "Lighting in a modern office building", "Világítás egy modern irodaépületben", "Iluminarea într-o clădire de birou modernă", lang),
        q4("Ein Navigationsgerät im Auto", "A navigation system in a car", "Navigációs rendszer egy autóban", "Un sistem de navigație într-o mașină", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateSeriesCircuitsTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Definiere kurz, was eine Soros-Schaltung ist und nenne ihre Haupteigenschaft bezüglich des Stroms.", "Define briefly what a series circuit is and state its main property regarding current.", "Röviden határozd meg, mi a soros áramkör, és nevezd meg annak fő tulajdonságát az áramra vonatkozóan.", "Definește pe scurt ce este un circuit în serie și enumeră proprietatea sa principală cu privire la curent.", lang),
    [
      q4("Ein Stromkreis mit einem einzigen Pfad; der Strom ist überall gleich", "A circuit with a single path; the current is the same everywhere", "Egyetlen úttal rendelkező áramkör; az áram mindenhol azonos", "Un circuit cu o cale unică; curentul este același peste tot", lang),
      q4("Eine Schaltung mit nur einem Pfad, in der die Stromstärke überall identisch ist", "A circuit with only one path where the current intensity is identical everywhere", "Csak egy úttal rendelkező áramkör, ahol az áramintenzitás mindenhol azonos", "Un circuit cu un singur drum unde intensitatea curentului este identică peste tot", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Nenne drei Beispiele für Soros-Schaltungen aus dem Alltag.", "Name three examples of series circuits from everyday life.", "Nevezz meg három soros áramkörre példát a mindennapi életből.", "Numește trei exemple de circuite în serie din viața de zi cu zi.", lang),
    [
      q4("alte Weihnachtslichter, Taschenlampe mit Batterien, Türklingel", "old Christmas lights, flashlight with batteries, doorbell", "régi karácsonyi lámpák, zseblámpa elemekkel, ajtócsengő", "ornamente de Crăciun vechi, lanternă cu baterii, sonerie ușii", lang),
      q4("Weihnachtslichter, Taschenlampe, Türklingelsystem", "Christmas lights, flashlight, doorbell system", "Karácsonyi lámpák, zseblámpa, ajtócsengő rendszer", "Lumini de Crăciun, lanternă, sistem de sonerie", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Schreibe die Formel auf für die Gesamtspannung in einer Soros-Schaltung mit drei Widerständen.", "Write the formula for total voltage in a series circuit with three resistances.", "Írd fel a képletet a teljes feszültséghez egy soros áramkörben három ellenállással.", "Scrie formula pentru tensiunea totală într-un circuit în serie cu trei rezistențe.", lang),
    [
      q4("U-total = U1 + U2 + U3", "U-total = U1 + U2 + U3", "U-össz = U1 + U2 + U3", "U-total = U1 + U2 + U3", lang),
      q4("Utotal = U1 + U2 + U3", "Utotal = U1 + U2 + U3", "Utotal = U1 + U2 + U3", "Utotal = U1 + U2 + U3", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Was passiert mit der Helligkeit von Lichtern, wenn man mehr Lichter zu einer Soros-Schaltung hinzufügt?", "What happens to the brightness of lights when you add more lights to a series circuit?", "Mi történik az izzók fényerejével, ha több lámpát adsz hozzá egy soros áramkörhöz?", "Ce se întâmplă cu luminozitatea becurilor atunci când adaugi mai multe becuri la un circuit în serie?", lang),
    [
      q4("Die Helligkeit nimmt ab, weil der Gesamtwiderstand steigt und die Spannung an jedem Licht sinkt", "Brightness decreases because total resistance increases and voltage at each light decreases", "A fényerősség csökken, mert az összes ellenállás nő és az egyes lámpákon a feszültség csökken", "Luminozitatea scade pentru că rezistența totală crește și tensiunea la fiecare lumină scade", lang),
      q4("Helligkeit sinkt wegen erhöhtem Widerstand", "Brightness decreases due to increased resistance", "Fényerősség csökken fokozódott ellenállás miatt", "Luminozitatea scade din cauza rezistenței crescute", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Wenn in einer Soros-Schaltung mit drei Lichtern ein Licht kaputt geht, was passiert mit den anderen Lichtern?", "If one light breaks in a series circuit with three lights, what happens to the other lights?", "Ha egy lámpa elromlik egy három lámpa soros áramkörben, mi történik a többi lámpával?", "Dacă un bec se defectează într-un circuit în serie cu trei becuri, ce se întâmplă cu celelalte becuri?", lang),
    [
      q4("Alle Lichter gehen aus, weil der Stromkreis unterbrochen ist", "All lights go out because the circuit is broken", "Minden lámpa kialszik, mert az áramkör szakad", "Toate becurile se sting pentru că circuitul este întrerupt", lang),
      q4("Alle Lichter erlöschen", "All lights go out", "Összes lámpa kialszik", "Toate becurile se sting", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Schreibe die Formel für den Gesamtwiderstand einer Soros-Schaltung mit vier Widerständen auf.", "Write the formula for total resistance in a series circuit with four resistances.", "Írd fel a képletet a teljes ellenálláshoz egy soros áramkörben négy ellenállással.", "Scrie formula pentru rezistența totală într-un circuit în serie cu patru rezistențe.", lang),
    [
      q4("R-total = R1 + R2 + R3 + R4", "R-total = R1 + R2 + R3 + R4", "R-össz = R1 + R2 + R3 + R4", "R-total = R1 + R2 + R3 + R4", lang),
      q4("Rtotal = R1 + R2 + R3 + R4", "Rtotal = R1 + R2 + R3 + R4", "Rtotal = R1 + R2 + R3 + R4", "Rtotal = R1 + R2 + R3 + R4", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Nenne einen Vorteil von Soros-Schaltungen im Vergleich zu Parallelschaltungen.", "Name one advantage of series circuits compared to parallel circuits.", "Nevezz meg egy előnyét a soros áramköröknek a párhuzamos áramkörökhöz képest.", "Numește un avantaj al circuitelor în serie în comparație cu circuitele paralele.", lang),
    [
      q4("Einfacher zu konstruieren und zu verstehen, braucht weniger Draht", "Simpler to construct and understand, requires less wire", "Egyszerűbb felépíteni és megérteni, kevesebb drót szükséges", "Mai simplu de construit și înțeles, necesită mai puțin fir", lang),
      q4("Weniger Draht nötig, einfacherer Aufbau", "Less wire needed, simpler construction", "Kevesebb drót szükséges, egyszerűbb felépítés", "Mai puțin fir necesar, construcție mai simplă", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("In einer Soros-Schaltung fließt überall der gleiche... (komplettiere den Satz)", "In a series circuit, the same... flows everywhere. (complete the sentence)", "Egy soros áramkörben mindenhol ugyanaz a... folyik. (egészítsd ki a mondatot)", "Într-un circuit în serie, același... curge peste tot. (completează propoziția)", lang),
    [
      q4("Strom", "current", "áram", "curent", lang),
      q4("Stromfluss", "current flow", "áramfolyás", "flux de curent", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "series_circuits",
    q4("Warum werden moderne Weihnachtslichter normalerweise nicht mehr in einer Soros-Schaltung hergestellt?", "Why are modern Christmas lights normally no longer made in a series circuit design?", "Miért nem készülnek a modern karácsonyi lámpák normálisan már nem soros áramkörrel?", "De ce luminile de Crăciun moderne nu sunt mai fabricate în mod normal în design cu circuit în serie?", lang),
    [
      q4("Weil wenn ein Licht kaputt geht, alle anderen auch ausfallen; Parallelschaltungen sind besser", "Because if one light breaks, all others fail too; parallel circuits are better", "Mert ha egy lámpa elromlik, az összes többi is elromlik; párhuzamos áramkörök jobbak", "Pentru că dacă o lumină se defectează, toate celelalte se defectează și; circuitele paralele sunt mai bune", lang),
      q4("Ein fehlerhaftes Licht deaktiviert alle anderen", "One broken light deactivates all others", "Egy hibás lámpa deaktiválja az összes többit", "O lumină defectuoasă dezactivează toate celelalte", lang),
    ]
  ));

  return questions;
}

// ─── 2. PARALLEL CIRCUITS ─────────────────────────────────────────────────

const PARALLEL_CIRCUITS_DATA = {
  examples: [
    { en: "modern home electrical wiring", de: "moderne Hausverkabelung", hu: "modern házvezetékek", ro: "cablarea electrică casei moderne" },
    { en: "a car with multiple lights", de: "ein Auto mit mehreren Lichtern", hu: "autó több lámpával", ro: "o mașină cu mai multe lumini" },
    { en: "a room with multiple light switches", de: "ein Zimmer mit mehreren Lichtschaltern", hu: "szoba több világítási kapcsolóval", ro: "o cameră cu mai multe comutatoare de lumină" },
    { en: "household outlets on a wall", de: "Steckdosen an der Wand", hu: "falba szerelt aljzatok", ro: "prize electrice pe perete" },
    { en: "a power strip with multiple plugs", de: "eine Steckdosenleiste", hu: "többszörös aljzat", ro: "o bară de alimentare cu mai multe prize" },
    { en: "street lamps on a city block", de: "Straßenlaternen in einem Wohnblock", hu: "utcai lámpák egy házcsoportban", ro: "lămpile străzii pe un bloc de case" },
    { en: "industrial factory machinery", de: "industrielle Fabrikmaschinen", hu: "ipari gyári gépek", ro: "mașinăria din fabrică industrială" },
    { en: "multiple appliances in a kitchen", de: "mehrere Geräte in der Küche", hu: "több konyhai készülék", ro: "mai multe aparate în bucătărie" },
  ],

  properties: [
    { en: "multiple paths for current", de: "mehrere Pfade für den Strom", hu: "több út az áramnak", ro: "mai multe căi pentru curent" },
    { en: "voltage is the same on all branches", de: "Spannung ist auf allen Ästen gleich", hu: "feszültség mindenhol azonos", ro: "tensiunea este aceeași pe toate ramurile" },
    { en: "currents add up", de: "Ströme addieren sich", hu: "áramok összeadódnak", ro: "curenții se adună" },
    { en: "total resistance is smaller than any single resistance", de: "Gesamtwiderstand kleiner als jeder Einzelwiderstand", hu: "teljes ellenállás kisebb, mint bármelyik egyedi ellenállás", ro: "rezistența totală este mai mică decât orice rezistență individuală" },
    { en: "if one branch breaks, others still work", de: "wenn ein Ast ausfällt, andere funktionieren noch", hu: "ha egy ág elromlik, a többiek működnek", ro: "dacă o ramură se defectează, altele funcționează încă" },
  ],

  formulas: [
    { en: "I-total = I1 + I2 + I3", de: "I-total = I1 + I2 + I3", hu: "I-össz = I1 + I2 + I3", ro: "I-total = I1 + I2 + I3" },
    { en: "U-total = U1 = U2 = U3", de: "U-total = U1 = U2 = U3", hu: "U-össz = U1 = U2 = U3", ro: "U-total = U1 = U2 = U3" },
    { en: "1/R-total = 1/R1 + 1/R2 + 1/R3", de: "1/R-total = 1/R1 + 1/R2 + 1/R3", hu: "1/R-össz = 1/R1 + 1/R2 + 1/R3", ro: "1/R-total = 1/R1 + 1/R2 + 1/R3" },
  ],

  advantages: [
    { en: "if one branch breaks, others continue to work", de: "wenn ein Ast ausfällt, andere funktionieren weiter", hu: "ha egy ág elromlik, a többi továbbra is működik", ro: "dacă o ramură se defectează, altele continuă să funcționeze" },
    { en: "each device gets full voltage", de: "jedes Gerät erhält volle Spannung", hu: "minden eszköz teljes feszültséget kap", ro: "fiecare dispozitiv primește tensiune completă" },
    { en: "lower total resistance", de: "niedrigerer Gesamtwiderstand", hu: "alacsonyabb teljes ellenállás", ro: "rezistență totală mai joasă" },
    { en: "allows independent control of devices", de: "ermöglicht unabhängige Kontrolle von Geräten", hu: "lehetővé teszi az eszközök független vezérlését", ro: "permite controlul independent al dispozitivelor" },
  ],

  disadvantages: [
    { en: "more complex to construct", de: "komplexer zu konstruieren", hu: "összetettebb a felépítésben", ro: "mai complex de construit" },
    { en: "requires more wire", de: "benötigt mehr Draht", hu: "több drót szükséges", ro: "necesită mai mult fir" },
    { en: "higher total current from power source", de: "höherer Gesamtstrom aus der Stromquelle", hu: "magasabb összes áram az energiaforrásból", ro: "curent total mai mare din sursă" },
  ],
};

export function generateParallelCircuitsMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a parallel circuit?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Was ist eine Parallelschaltung?", "What is a parallel circuit?", "Mi a párhuzamos áramkör?", "Ce este un circuit paralel?", lang),
      q4("Ein Stromkreis mit mehreren Wegen für den Strom", "A circuit with multiple paths for current", "Egy áramkör több úttal az áramnak", "Un circuit cu mai multe căi pentru curent", lang),
      [
        q4("Ein Stromkreis mit nur einem Weg für den Strom", "A circuit with only one path for current", "Áramkör csak egy úttal", "Un circuit cu o singură cale pentru curent", lang),
        q4("Ein Stromkreis ohne Spannung", "A circuit without voltage", "Feszültség nélküli áramkör", "Un circuit fără tensiune", lang),
        q4("Ein Stromkreis, der sich nicht dreht", "A circuit that does not rotate", "Nem forog áramkör", "Un circuit care nu se rotește", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a parallel circuit?"
  for (let i = 0; i < 8; i++) {
    const example = pick(PARALLEL_CIRCUITS_DATA.examples, rng);
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Welches ist ein Beispiel für eine Parallelschaltung?", "Which is an example of a parallel circuit?", "Melyik a párhuzamos áramkör példája?", "Care este un exemplu de circuit paralel?", lang),
      q4(example.de, example.en, example.hu, example.ro, lang),
      [
        q4("Alte Weihnachtslichter hintereinander", "Old Christmas lights in a line", "Régi karácsonyi lámpák sorban", "Ornamente de Crăciun vechi în linie", lang),
        q4("Ein Stromkreis mit nur einem Licht und einer Batterie", "A circuit with only one light and one battery", "Egy lámpa és egy elem áramköre", "Un circuit cu o singură lumină și o baterie", lang),
        q4("Drei Widerstände hintereinander verbunden", "Three resistances connected in a line", "Három ellenállás sorban kötve", "Trei rezistențe conectate în linie", lang),
      ],
      rng
    ));
  }

  // Template 3: "In a parallel circuit, how is the voltage?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("In einer Parallelschaltung ist die Spannung überall...", "In a parallel circuit, the voltage is everywhere...", "Egy párhuzamos áramkörben a feszültség mindenhol...", "Într-un circuit paralel, tensiunea este peste tot...", lang),
      q4("gleich", "the same", "azonos", "la fel", lang),
      [
        q4("verschieden", "different", "különböző", "diferit", lang),
        q4("null", "zero", "nulla", "zero", lang),
        q4("addiert sich", "adds up", "összeadódik", "se adună", lang),
      ],
      rng
    ));
  }

  // Template 4: "What happens to total current in a parallel circuit?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Was passiert mit dem Gesamtstrom in einer Parallelschaltung?", "What happens to total current in a parallel circuit?", "Mi történik az összes árammal egy párhuzamos áramkörben?", "Ce se întâmplă cu curentul total într-un circuit paralel?", lang),
      q4("Der Gesamtstrom ist die Summe aller Einzelströme", "Total current is the sum of all individual currents", "Az összes áram az egyedi áramok összege", "Curentul total este suma tuturor curenților individuali", lang),
      [
        q4("Der Gesamtstrom ist gleich jedem Einzelstrom", "Total current equals each individual current", "Az összes áram egyenlő minden egyedi árammal", "Curentul total este egal cu fiecare curent individual", lang),
        q4("Der Gesamtstrom ist der Durchschnitt", "Total current is the average", "Az összes áram az átlag", "Curentul total este media", lang),
        q4("Der Gesamtstrom ist immer null", "Total current is always zero", "Az összes áram mindig nulla", "Curentul total este întotdeauna zero", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is the main advantage of a parallel circuit?"
  for (let i = 0; i < 4; i++) {
    const adv = pick(PARALLEL_CIRCUITS_DATA.advantages, rng);
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Was ist der Hauptvorteil einer Parallelschaltung?", "What is the main advantage of a parallel circuit?", "Mi a párhuzamos áramkör fő előnye?", "Care este principalul avantaj al unui circuit paralel?", lang),
      q4(adv.de, adv.en, adv.hu, adv.ro, lang),
      [
        q4("Sie braucht weniger Strom", "It requires less current", "Kevesebb áramot igényel", "Necesită mai puțin curent", lang),
        q4("Sie ist billiger zu bauen", "It is cheaper to build", "Olcsóbb felépíteni", "Este mai ieftin de construit", lang),
        q4("Sie braucht weniger Draht", "It requires less wire", "Kevesebb drót szükséges", "Necesită mai puțin fir", lang),
      ],
      rng
    ));
  }

  // Template 6: "What is the formula for parallel circuit resistance?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Welche Formel beschreibt den Gesamtwiderstand einer Parallelschaltung?", "Which formula describes total resistance in a parallel circuit?", "Melyik képlet írja le a teljes ellenállást egy párhuzamos áramkörben?", "Care formulă descrie rezistența totală într-un circuit paralel?", lang),
      q4("1/R-total = 1/R1 + 1/R2 + 1/R3", "1/R-total = 1/R1 + 1/R2 + 1/R3", "1/R-össz = 1/R1 + 1/R2 + 1/R3", "1/R-total = 1/R1 + 1/R2 + 1/R3", lang),
      [
        q4("R-total = R1 + R2 + R3", "R-total = R1 + R2 + R3", "R-össz = R1 + R2 + R3", "R-total = R1 + R2 + R3", lang),
        q4("R-total = (R1 + R2 + R3) / 3", "R-total = (R1 + R2 + R3) / 3", "R-össz = (R1 + R2 + R3) / 3", "R-total = (R1 + R2 + R3) / 3", lang),
        q4("R-total = R1 × R2 × R3", "R-total = R1 × R2 × R3", "R-össz = R1 × R2 × R3", "R-total = R1 × R2 × R3", lang),
      ],
      rng
    ));
  }

  // Template 7: "Real-world application of parallel circuit"
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "electricity",
      "parallel_circuits",
      q4("Welche Anwendung nutzt eine Parallelschaltung in der Praxis?", "Which application uses a parallel circuit in practice?", "Melyik alkalmazás használ párhuzamos áramkört a gyakorlatban?", "Care dintre aceste aplicații folosește un circuit paralel în practică?", lang),
      q4("Die Elektrizität in einem modernen Haus", "Electricity in a modern home", "A modern házban az elektrizitás", "Electricitatea în o casă modernă", lang),
      [
        q4("Alte Weihnachtslichter", "Old Christmas lights", "Régi karácsonyi lámpák", "Ornamente de Crăciun vechi", lang),
        q4("Eine einfache Taschenlampe mit einer Batterie", "A simple flashlight with one battery", "Egyszerű zseblámpa egy elemmel", "O lanternă simplă cu o baterie", lang),
        q4("Ein Radio mit Serie-Batterien", "A radio with series batteries", "Egy rádió soros elemekkel", "O radio cu baterii în serie", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateParallelCircuitsTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Definiere kurz, was eine Parallelschaltung ist und nenne ihre Haupteigenschaft bezüglich der Spannung.", "Define briefly what a parallel circuit is and state its main property regarding voltage.", "Röviden határozd meg, mi a párhuzamos áramkör, és nevezd meg annak fő tulajdonságát a feszültségre vonatkozóan.", "Definește pe scurt ce este un circuit paralel și enumeră proprietatea sa principală cu privire la tensiune.", lang),
    [
      q4("Ein Stromkreis mit mehreren Pfaden; die Spannung ist überall gleich", "A circuit with multiple paths; the voltage is the same everywhere", "Több úttal rendelkező áramkör; a feszültség mindenhol azonos", "Un circuit cu mai multe căi; tensiunea este același peste tot", lang),
      q4("Schaltung mit mehreren Wegen, überall gleiche Spannung", "Circuit with multiple paths, same voltage everywhere", "Több úttal rendelkező áramkör, mindenhol azonos feszültség", "Circuit cu mai multe căi, aceeași tensiune peste tot", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Nenne drei Beispiele für Parallelschaltungen aus dem Alltag.", "Name three examples of parallel circuits from everyday life.", "Nevezz meg három párhuzamos áramkörre példát a mindennapi életből.", "Numește trei exemple de circuite paralele din viața de zi cu zi.", lang),
    [
      q4("moderne Hausverkabelung, Auto mit mehreren Lichtern, Mehrfachsteckdosen", "modern home wiring, car with multiple lights, power strips", "modern házvezetékek, autó több lámpával, többszörös aljzatok", "cablarea electrică casei moderne, mașină cu mai multe lumini, bare de alimentare", lang),
      q4("Hausverkabelung, Autolicht, Steckdosenleiste", "Home wiring, car lighting, power strip", "Házvezetékek, autó fénye, többszörös aljzat", "Cablare casei, iluminare auto, bară de alimentare", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Schreibe die Formel für die Gesamtspannung in einer Parallelschaltung mit drei Ästen auf.", "Write the formula for total voltage in a parallel circuit with three branches.", "Írd fel a képletet a teljes feszültséghez egy párhuzamos áramkörben három ággal.", "Scrie formula pentru tensiunea totală într-un circuit paralel cu trei ramuri.", lang),
    [
      q4("U-total = U1 = U2 = U3", "U-total = U1 = U2 = U3", "U-össz = U1 = U2 = U3", "U-total = U1 = U2 = U3", lang),
      q4("Utotal = U1 = U2 = U3", "Utotal = U1 = U2 = U3", "Utotal = U1 = U2 = U3", "Utotal = U1 = U2 = U3", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Was passiert mit dem Gesamtstrom, wenn man mehr Äste zu einer Parallelschaltung hinzufügt?", "What happens to total current when you add more branches to a parallel circuit?", "Mi történik az összes árammal, ha több ágat adsz hozzá egy párhuzamos áramkörhöz?", "Ce se întâmplă cu curentul total atunci când adaugi mai multe ramuri la un circuit paralel?", lang),
    [
      q4("Der Gesamtstrom nimmt zu, weil der Gesamtwiderstand sinkt", "Total current increases because total resistance decreases", "Az összes áram nő, mert az összes ellenállás csökken", "Curentul total crește pentru că rezistența totală scade", lang),
      q4("Gesamtstrom steigt mit mehr Ästen", "Total current increases with more branches", "Az összes áram több ággal nő", "Curentul total crește cu mai multe ramuri", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Wenn in einer Parallelschaltung mit drei Ästen ein Ast kaputt geht, was passiert mit den anderen Ästen?", "If one branch breaks in a parallel circuit with three branches, what happens to the other branches?", "Ha egy ág elromlik egy három ágú párhuzamos áramkörben, mi történik a többi ággal?", "Dacă o ramură se defectează într-un circuit paralel cu trei ramuri, ce se întâmplă cu celelalte ramuri?", lang),
    [
      q4("Die anderen Äste funktionieren weiter, weil sie unabhängige Wege sind", "Other branches continue to work because they are independent paths", "A többi ág működik tovább, mert független utak", "Alte ramuri continuă să funcționeze deoarece sunt căi independente", lang),
      q4("Andere Äste funktionieren noch", "Other branches still work", "Más ramas siguen funcionando", "Alte ramuri funcționează incă", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Schreibe die Formel für den Gesamtwiderstand einer Parallelschaltung mit zwei Widerständen auf.", "Write the formula for total resistance in a parallel circuit with two resistances.", "Írd fel a képletet a teljes ellenálláshoz egy párhuzamos áramkörben két ellenállással.", "Scrie formula pentru rezistența totală într-un circuit paralel cu două rezistențe.", lang),
    [
      q4("1/R-total = 1/R1 + 1/R2", "1/R-total = 1/R1 + 1/R2", "1/R-össz = 1/R1 + 1/R2", "1/R-total = 1/R1 + 1/R2", lang),
      q4("1/Rtotal = 1/R1 + 1/R2", "1/Rtotal = 1/R1 + 1/R2", "1/Rtotal = 1/R1 + 1/R2", "1/Rtotal = 1/R1 + 1/R2", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Nenne einen Vorteil von Parallelschaltungen im Vergleich zu Seriensch altungen.", "Name one advantage of parallel circuits compared to series circuits.", "Nevezz meg egy előnyét a párhuzamos áramköröknek a soros áramkörökhöz képest.", "Numește un avantaj al circuitelor paralele în comparație cu circuitele în serie.", lang),
    [
      q4("Wenn ein Gerät ausfällt, funktionieren die anderen noch; jedes Gerät bekommt volle Spannung", "If one device fails, others still work; each device gets full voltage", "Ha egy eszköz elromlik, a többi működik; minden eszköz teljes feszültséget kap", "Dacă un dispozitiv se defectează, altele funcționează încă; fiecare dispozitiv primește tensiune completă", lang),
      q4("Ein Gerät kaputt, andere funktionieren; volle Spannung pro Gerät", "One device broken, others work; full voltage per device", "Egy eszköz elromlik, mások működnek; teljes feszültség eszközönként", "Un dispozitiv defect, altele funcționează; tensiune completă pe dispozitiv", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("In einer Parallelschaltung ist die Spannung überall die... (komplettiere)", "In a parallel circuit, the voltage everywhere is the... (complete)", "Egy párhuzamos áramkörben a feszültség mindenhol a... (egészítsd ki)", "Într-un circuit paralel, tensiunea peste tot este... (completează)", lang),
    [
      q4("gleiche", "same", "azonos", "aceeași", lang),
      q4("gleich", "same", "ugyanaz", "identic", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "parallel_circuits",
    q4("Warum werden moderne Häuser mit Parallelschaltungen verkabelt statt mit Serienverbindungen?", "Why are modern homes wired with parallel circuits instead of series connections?", "Miért szerelik a modern házakat párhuzamos áramkörrel szerelve, nem soros kötéssel?", "De ce sunt casele moderne cablate cu circuite paralele în loc de conexiuni în serie?", lang),
    [
      q4("Weil wenn ein Gerät ausfällt, nicht alles dunkel wird; jedes Gerät kann unabhängig gesteuert werden", "Because if one device fails, everything doesn't go dark; each device can be controlled independently", "Mert ha egy eszköz elromlik, nem sötétedik el minden; minden eszköz független vezérlésű lehet", "Pentru că dacă un dispozitiv se defectează, nu totul se-ntunecă; fiecare dispozitiv poate fi controlat independent", lang),
      q4("Ein Fehler bricht nicht alles; unabhängige Kontrolle möglich", "One failure doesn't break everything; independent control possible", "Egy hiba nem töri el az egészet; független vezérlés lehetséges", "O defecțiune nu strică totul; control independent posibil", lang),
    ]
  ));

  return questions;
}

// ─── 3. CURRENT AND VOLTAGE ────────────────────────────────────────────────

const CURRENT_VOLTAGE_DATA = {
  examples: [
    { en: "a battery (voltage source)", de: "eine Batterie (Spannungsquelle)", hu: "elem (feszültségforrás)", ro: "o baterie (sursă de tensiune)" },
    { en: "a light bulb (consumer)", de: "eine Glühbirne (Verbraucher)", hu: "izzó (fogyasztó)", ro: "un bec (consumator)" },
    { en: "a motor (consumer)", de: "ein Motor (Verbraucher)", hu: "motor (fogyasztó)", ro: "un motor (consumator)" },
    { en: "a power outlet (voltage source)", de: "eine Steckdose (Spannungsquelle)", hu: "aljzat (feszültségforrás)", ro: "o priză (sursă de tensiune)" },
    { en: "an ammeter (measures current)", de: "ein Amperemeter (misst Strom)", hu: "ampermérő (áramot mér)", ro: "un ampermetru (măsoară curentul)" },
    { en: "a voltmeter (measures voltage)", de: "ein Voltmeter (misst Spannung)", hu: "voltmérő (feszültséget mér)", ro: "un voltmetru (măsoară tensiunea)" },
    { en: "a resistor (limits current)", de: "ein Widerstand (begrenzt Strom)", hu: "ellenállás (korlátozza az áramot)", ro: "o rezistență (limitează curentul)" },
    { en: "a switch (controls circuit)", de: "ein Schalter (steuert Stromkreis)", hu: "kapcsoló (vezérli az áramkört)", ro: "un comutator (controlează circuitul)" },
  ],

  units: [
    { en: "Ampere (A) - unit of current", de: "Ampere (A) - Stromeinheit", hu: "Amper (A) - áramegység", ro: "Amper (A) - unitate de curent" },
    { en: "Volt (V) - unit of voltage", de: "Volt (V) - Spannungseinheit", hu: "Volt (V) - feszültségegység", ro: "Volt (V) - unitate de tensiune" },
    { en: "Ohm (Ω) - unit of resistance", de: "Ohm (Ω) - Widerstandseinheit", hu: "Ohm (Ω) - ellenállásegység", ro: "Ohm (Ω) - unitate de rezistență" },
  ],

  relationships: [
    { en: "U = I × R (Ohm's Law)", de: "U = I × R (Ohmsches Gesetz)", hu: "U = I × R (Ohm törvénye)", ro: "U = I × R (Legea lui Ohm)" },
    { en: "higher voltage → higher current", de: "höhere Spannung → höherer Strom", hu: "magasabb feszültség → magasabb áram", ro: "tensiune mai mare → curent mai mare" },
    { en: "higher resistance → lower current", de: "höherer Widerstand → niedrigerer Strom", hu: "magasabb ellenállás → alacsonyabb áram", ro: "rezistență mai mare → curent mai mic" },
  ],

  roles: [
    { en: "voltage source (battery, power outlet)", de: "Spannungsquelle (Batterie, Steckdose)", hu: "feszültségforrás (elem, aljzat)", ro: "sursă de tensiune (baterie, priză)" },
    { en: "consumer (bulb, motor, heater)", de: "Verbraucher (Birne, Motor, Heizer)", hu: "fogyasztó (izzó, motor, fűtés)", ro: "consumator (bec, motor, încălzitor)" },
    { en: "conductor (wire, copper, aluminum)", de: "Leiter (Draht, Kupfer, Aluminium)", hu: "vezető (drót, réz, alumínium)", ro: "conductor (fir, cupru, aluminiu)" },
  ],
};

export function generateCurrentVoltageMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is electric current?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("Was ist elektrischer Strom?", "What is electric current?", "Mi az elektromos áram?", "Ce este curentul electric?", lang),
      q4("Die Bewegung von Ladungsträgern (Elektronen) durch einen Leiter", "The movement of charge carriers (electrons) through a conductor", "Töltéshordozók (elektronok) mozgása egy vezetőn keresztül", "Mișcarea purtătorilor de sarcină (electroni) printr-un conductor", lang),
      [
        q4("Ein Material, das Elektrizität speichert", "A material that stores electricity", "Elektromosságot tárolo anyag", "Un material care depozitează electricitate", lang),
        q4("Eine Kraft, die Objekte anzieht", "A force that attracts objects", "Egy erő, amely attracts objekteket", "O forță care atrage obiecte", lang),
        q4("Ein Werkzeug zum Messen von Spannung", "A tool for measuring voltage", "Az feszültség mérésére szolgáló eszköz", "Un instrument pentru măsurarea tensiunii", lang),
      ],
      rng
    ));
  }

  // Template 2: "What is voltage?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("Was ist Spannung?", "What is voltage?", "Mi a feszültség?", "Ce este tensiunea?", lang),
      q4("Die Differenz der elektrischen Potentiale zwischen zwei Punkten", "The difference in electrical potential between two points", "Az elektromos potenciálkülönbség két pont között", "Diferența de potențial electric între două puncte", lang),
      [
        q4("Die Menge des fließenden Stroms", "The amount of flowing current", "A folyó áram mennyisége", "Cantitatea de curent care curge", lang),
        q4("Das Material, das Strom leitet", "The material that conducts current", "Az áramot vezető anyag", "Materialul care conduce curentul", lang),
        q4("Die Farbe eines Stromkabels", "The color of a power cable", "Egy töltési kábel szína", "Culoarea unui cablu de alimentare", lang),
      ],
      rng
    ));
  }

  // Template 3: "What unit measures current?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("In welcher Einheit wird Strom gemessen?", "In which unit is current measured?", "Melyik egységben mérjük az áramot?", "În ce unitate se măsoară curentul?", lang),
      q4("Ampere (A)", "Ampere (A)", "Amper (A)", "Amper (A)", lang),
      [
        q4("Volt (V)", "Volt (V)", "Volt (V)", "Volt (V)", lang),
        q4("Ohm (Ω)", "Ohm (Ω)", "Ohm (Ω)", "Ohm (Ω)", lang),
        q4("Watt (W)", "Watt (W)", "Watt (W)", "Watt (W)", lang),
      ],
      rng
    ));
  }

  // Template 4: "What unit measures voltage?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("In welcher Einheit wird Spannung gemessen?", "In which unit is voltage measured?", "Melyik egységben mérjük a feszültséget?", "În ce unitate se măsoară tensiunea?", lang),
      q4("Volt (V)", "Volt (V)", "Volt (V)", "Volt (V)", lang),
      [
        q4("Ampere (A)", "Ampere (A)", "Amper (A)", "Amper (A)", lang),
        q4("Ohm (Ω)", "Ohm (Ω)", "Ohm (Ω)", "Ohm (Ω)", lang),
        q4("Joule (J)", "Joule (J)", "Joule (J)", "Joule (J)", lang),
      ],
      rng
    ));
  }

  // Template 5: "What does Ohm's Law state?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("Was besagt das Ohmsche Gesetz?", "What does Ohm's Law state?", "Mit a kimondásról az Ohm törvénye?", "Ce afirmă Legea lui Ohm?", lang),
      q4("U = I × R (Spannung = Strom × Widerstand)", "U = I × R (Voltage = Current × Resistance)", "U = I × R (Feszültség = Áram × Ellenállás)", "U = I × R (Tensiune = Curent × Rezistență)", lang),
      [
        q4("I = U + R", "I = U + R", "I = U + R", "I = U + R", lang),
        q4("R = U / I", "R = U / I", "R = U / I", "R = U / I", lang),
        q4("U = I / R", "U = I / R", "U = I / R", "U = I / R", lang),
      ],
      rng
    ));
  }

  // Template 6: "What is a voltage source?"
  for (let i = 0; i < 4; i++) {
    const example = pick(CURRENT_VOLTAGE_DATA.examples, rng);
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("Was ist eine Spannungsquelle?", "What is a voltage source?", "Mi a feszültségforrás?", "Ce este o sursă de tensiune?", lang),
      q4("Ein Gerät, das elektrische Energie liefert (z.B. Batterie)", "A device that supplies electrical energy (e.g. battery)", "Az elektromos energiát szolgáló eszköz (pl. elem)", "Un dispozitiv care furnizează energie electrică (de ex. baterie)", lang),
      [
        q4("Ein Gerät, das Strom verbraucht", "A device that consumes current", "Az áramot fogyasztó eszköz", "Un dispozitiv care consumă curent", lang),
        q4("Ein Werkzeug zum Messen von Strom", "A tool for measuring current", "Az áram mérésére szolgáló eszköz", "Un instrument pentru măsurarea curentului", lang),
        q4("Ein Material, das Elektrizität speichert", "A material that stores electricity", "Az elektromosságot tárolo anyag", "Un material care depozitează electricitate", lang),
      ],
      rng
    ));
  }

  // Template 7: "Higher voltage causes..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "current_voltage",
      q4("Höhere Spannung führt zu...", "Higher voltage leads to...", "Magasabb feszültség ...-hez vezet", "Tensiune mai mare duce la...", lang),
      q4("höherem Strom (bei gleichem Widerstand)", "higher current (at same resistance)", "magasabb áramhoz (azonos ellenállásnál)", "curent mai mare (la aceeași rezistență)", lang),
      [
        q4("niedrigerem Strom", "lower current", "alacsonyabb áramhoz", "curent mai mic", lang),
        q4("gleichem Strom", "same current", "azonos áramhoz", "același curent", lang),
        q4("keine Veränderung des Stroms", "no change in current", "az áram nincs változása", "nicio schimbare a curentului", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateCurrentVoltageTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Definiere Elektrischer Strom und nenne seine Einheit.", "Define electric current and name its unit.", "Határozd meg az elektromos áramot és nevezd meg az egységét.", "Definește curentul electric și numește unitatea sa.", lang),
    [
      q4("Strom ist die Bewegung von Elektronen durch einen Leiter, gemessen in Ampere (A)", "Current is the movement of electrons through a conductor, measured in Amperes (A)", "Az áram az elektronok mozgása egy vezetőn keresztül, ampert (A) mérve", "Curentul este mișcarea electronilor printr-un conductor, măsurat în Amperi (A)", lang),
      q4("Elektronen bewegung, Einheit Ampere", "Electron movement, unit Ampere", "Elektronmozgás, egység Amper", "Mișcare de electroni, unitate Amper", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Definiere Spannung und nenne ihre Einheit.", "Define voltage and name its unit.", "Határozd meg a feszültséget és nevezd meg az egységét.", "Definește tensiunea și numește unitatea sa.", lang),
    [
      q4("Spannung ist die Potentialdifferenz zwischen zwei Punkten, gemessen in Volt (V)", "Voltage is the potential difference between two points, measured in Volts (V)", "A feszültség két pont közötti potenciálkülönbség, voltban (V) mérve", "Tensiunea este diferența de potențial între două puncte, măsurată în Volți (V)", lang),
      q4("Potentialdifferenz, Einheit Volt", "Potential difference, unit Volt", "Potenciálkülönbség, egység Volt", "Diferență de potențial, unitate Volt", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Schreibe die Formel für das Ohmsche Gesetz auf.", "Write the formula for Ohm's Law.", "Írd fel az Ohm törvénye képletét.", "Scrie formula Legii lui Ohm.", lang),
    [
      q4("U = I × R", "U = I × R", "U = I × R", "U = I × R", lang),
      q4("U=I*R", "U=I*R", "U=I*R", "U=I*R", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Nenne ein Beispiel für eine Spannungsquelle und ein Beispiel für einen Verbraucher.", "Name an example of a voltage source and an example of a consumer.", "Adj meg egy feszültségforrás és egy fogyasztó példáját.", "Numește un exemplu de sursă de tensiune și un exemplu de consumator.", lang),
    [
      q4("Spannungsquelle: Batterie; Verbraucher: Glühbirne", "Voltage source: Battery; Consumer: Light bulb", "Feszültségforrás: elem; Fogyasztó: izzó", "Sursă de tensiune: Baterie; Consumator: Bec", lang),
      q4("Batterie und Lampe", "Battery and lamp", "Elem és lámpa", "Baterie și lampă", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Was passiert mit dem Strom, wenn die Spannung konstant bleibt aber der Widerstand erhöht wird?", "What happens to the current when voltage stays constant but resistance increases?", "Mi történik az árammal, ha a feszültség azonos marad, de az ellenállás nő?", "Ce se întâmplă cu curentul atunci când tensiunea rămâne constantă, dar rezistența crește?", lang),
    [
      q4("Der Strom nimmt ab (sinkt)", "The current decreases", "Az áram csökken", "Curentul scade", lang),
      q4("Strom wird kleiner", "Current becomes smaller", "Áram kisebb lesz", "Curentul devine mai mic", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Nenne die drei Größen in der Formel U = I × R und ihre Einheiten.", "Name the three quantities in the formula U = I × R and their units.", "Nevezd meg a három mennyiséget az U = I × R képletben és az egységeit.", "Numește cele trei mărimi din formula U = I × R și unitățile lor.", lang),
    [
      q4("U = Spannung (Volt), I = Strom (Ampere), R = Widerstand (Ohm)", "U = Voltage (Volt), I = Current (Ampere), R = Resistance (Ohm)", "U = Feszültség (Volt), I = Áram (Amper), R = Ellenállás (Ohm)", "U = Tensiune (Volt), I = Curent (Amper), R = Rezistență (Ohm)", lang),
      q4("Spannung (V), Strom (A), Widerstand (Ω)", "Voltage (V), Current (A), Resistance (Ω)", "Feszültség (V), Áram (A), Ellenállás (Ω)", "Tensiune (V), Curent (A), Rezistență (Ω)", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Was ist der Unterschied zwischen einer Spannungsquelle und einem Verbraucher?", "What is the difference between a voltage source and a consumer?", "Mi a különbség a feszültségforrás és a fogyasztó között?", "Care este diferența dintre o sursă de tensiune și un consumator?", lang),
    [
      q4("Spannungsquelle liefert elektrische Energie; Verbraucher nutzt die Energie", "Voltage source supplies electrical energy; Consumer uses the energy", "Feszültségforrás elektromos energiát szolgáltat; Fogyasztó felhasználja az energiát", "Sursa de tensiune furnizează energie electrică; Consumatorul consumă energia", lang),
      q4("Quelle liefert, Verbraucher nutzt", "Source supplies, consumer uses", "Forrás szolgáltat, fogyasztó használ", "Sursă furnizează, consumator utilizează", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Welche Geräte würdest du verwenden, um Strom und Spannung in einem Stromkreis zu messen?", "Which devices would you use to measure current and voltage in a circuit?", "Mely eszközöket használnál az áram és feszültség mérésére egy áramkörben?", "Ce dispozitive ai folosi pentru a măsura curentul și tensiunea într-un circuit?", lang),
    [
      q4("Ammeter für Strom, Voltmeter für Spannung", "Ammeter for current, Voltmeter for voltage", "Ampermérő az áramhoz, voltmérő a feszültséghez", "Ampermetru pentru curent, Voltmetru pentru tensiune", lang),
      q4("Ampermeter und Voltmeter", "Ampermeter and Voltmeter", "Ampermérő és voltmérő", "Ampermetru și voltmetru", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "current_voltage",
    q4("Bei einer Batterie von 6 Volt und einem Widerstand von 2 Ohm, wie groß ist der Strom (nutze U=I×R)?", "With a battery of 6 Volts and a resistance of 2 Ohm, how large is the current (use U=I×R)?", "6 voltos elem és 2 ohm ellenállás esetén mekkora az áram (használd az U=I×R)?", "Cu o baterie de 6 Volți și o rezistență de 2 Ohm, cât este curentul (folosește U=I×R)?", lang),
    [
      q4("3 Ampere", "3 Amperes", "3 Amper", "3 Amperi", lang),
      q4("I = 3 A", "I = 3 A", "I = 3 A", "I = 3 A", lang),
    ]
  ));

  return questions;
}

// ─── 4. RESISTANCE ────────────────────────────────────────────────────────

const RESISTANCE_DATA = {
  examples: [
    { en: "copper wire (good conductor)", de: "Kupferdraht (guter Leiter)", hu: "rézdrót (jó vezető)", ro: "fir de cupru (bun conductor)" },
    { en: "rubber (insulator)", de: "Gummi (Isolator)", hu: "gumi (szigetelő)", ro: "cauciuc (izolator)" },
    { en: "nichrome wire (high resistance)", de: "Nickel-Chrom-Draht (hoher Widerstand)", hu: "nikkel-króm drót (magas ellenállás)", ro: "fir nichrom (rezistență mare)" },
    { en: "resistor (electronic component)", de: "Widerstand (elektronische Komponente)", hu: "ellenállás (elektronikai alkatrész)", ro: "rezistență (componentă electronică)" },
    { en: "a lightbulb filament (glowing from resistance)", de: "eine Glühbirne (leuchtet durch Widerstand)", hu: "izzó szála (ellenállás miatt izzó)", ro: "filament de bec (strălucitor din cauza rezistenței)" },
    { en: "coal (moderate resistance)", de: "Kohle (mittlerer Widerstand)", hu: "szén (közepes ellenállás)", ro: "cărbune (rezistență moderată)" },
    { en: "silver (excellent conductor)", de: "Silber (ausgezeichneter Leiter)", hu: "ezüst (kitűnő vezető)", ro: "argint (conductor excelent)" },
    { en: "glass (excellent insulator)", de: "Glas (ausgezeichneter Isolator)", hu: "üveg (kitűnő szigetelő)", ro: "sticlă (izolator excelent)" },
  ],

  factors: [
    { en: "longer wire → higher resistance", de: "längerer Draht → höherer Widerstand", hu: "hosszabb drót → magasabb ellenállás", ro: "fir mai lung → rezistență mai mare" },
    { en: "thicker wire → lower resistance", de: "dickerer Draht → niedrigerer Widerstand", hu: "vastagabb drót → alacsonyabb ellenállás", ro: "fir mai gros → rezistență mai mică" },
    { en: "different materials have different resistivities", de: "verschiedene Materialien haben verschiedene Spezifische Widerstände", hu: "különböző anyagok eltérő fajlagos ellenállása", ro: "diferite materiale au rezistivități diferite" },
    { en: "temperature affects resistance", de: "Temperatur beeinflusst Widerstand", hu: "hőmérséklet befolyásolja az ellenállást", ro: "temperatura afectează rezistența" },
  ],

  conductors: [
    { en: "copper", de: "Kupfer", hu: "réz", ro: "cupru" },
    { en: "silver", de: "Silber", hu: "ezüst", ro: "argint" },
    { en: "aluminum", de: "Aluminium", hu: "alumínium", ro: "aluminiu" },
    { en: "gold", de: "Gold", hu: "arany", ro: "aur" },
  ],

  insulators: [
    { en: "rubber", de: "Gummi", hu: "gumi", ro: "cauciuc" },
    { en: "plastic", de: "Kunststoff", hu: "műanyag", ro: "plastic" },
    { en: "glass", de: "Glas", hu: "üveg", ro: "sticlă" },
    { en: "ceramic", de: "Keramik", hu: "kerámia", ro: "ceramică" },
  ],
};

export function generateResistanceMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is resistance?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Was ist Widerstand (Resistance)?", "What is resistance?", "Mi az ellenállás?", "Ce este rezistența?", lang),
      q4("Der Widerstand gegen den Stromfluss durch ein Material", "Opposition to the flow of current through a material", "Az áramfolyás elleni ellenállás egy anyagon keresztül", "Opoziția la fluxul de curent printr-un material", lang),
      [
        q4("Die Menge des fließenden Stroms", "The amount of flowing current", "A folyó áram mennyisége", "Cantitatea de curent care curge", lang),
        q4("Die Potentialdifferenz zwischen zwei Punkten", "The potential difference between two points", "Két pont közötti potenciálkülönbség", "Diferența de potențial între două puncte", lang),
        q4("Die Farbe eines Stromkabels", "The color of a power cable", "A töltési kábel szína", "Culoarea unui cablu de alimentare", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is a good conductor?"
  for (let i = 0; i < 8; i++) {
    const example = pick(RESISTANCE_DATA.examples, rng);
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Welches ist ein guter Leiter?", "Which is a good conductor?", "Melyik a jó vezető?", "Care este un bun conductor?", lang),
      q4(example.de, example.en, example.hu, example.ro, lang),
      [
        q4("Gummi", "Rubber", "Gumi", "Cauciuc", lang),
        q4("Kunststoff", "Plastic", "Műanyag", "Plastic", lang),
        q4("Glas", "Glass", "Üveg", "Sticlă", lang),
      ],
      rng
    ));
  }

  // Template 3: "What is the formula for resistance?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Welche Formel beschreibt Widerstand?", "Which formula describes resistance?", "Melyik képlet írja le az ellenállást?", "Care formulă descrie rezistența?", lang),
      q4("R = U / I", "R = U / I", "R = U / I", "R = U / I", lang),
      [
        q4("R = U × I", "R = U × I", "R = U × I", "R = U × I", lang),
        q4("R = I / U", "R = I / U", "R = I / U", "R = I / U", lang),
        q4("R = U + I", "R = U + I", "R = U + I", "R = U + I", lang),
      ],
      rng
    ));
  }

  // Template 4: "What affects resistance?"
  for (let i = 0; i < 5; i++) {
    const factor = pick(RESISTANCE_DATA.factors, rng);
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Welcher Faktor beeinflusst den Widerstand eines Drahtes?", "Which factor affects the resistance of a wire?", "Melyik tényező befolyásolja a drót ellenállását?", "Care factor afectează rezistența unui fir?", lang),
      q4(factor.de, factor.en, factor.hu, factor.ro, lang),
      [
        q4("Die Farbe des Drahtes", "The color of the wire", "A drót szína", "Culoarea firului", lang),
        q4("Die Form des Stromkreises", "The shape of the circuit", "Az áramkör alakja", "Forma circuitului", lang),
        q4("Das Alter des Drahtes", "The age of the wire", "A drót kora", "Vârsta firului", lang),
      ],
      rng
    ));
  }

  // Template 5: "What happens when wire gets longer?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Was passiert mit dem Widerstand, wenn der Draht länger wird?", "What happens to resistance when the wire gets longer?", "Mi történik az ellenállással, ha a drót hosszabb lesz?", "Ce se întâmplă cu rezistența când firul devine mai lung?", lang),
      q4("Der Widerstand nimmt zu", "Resistance increases", "Az ellenállás nő", "Rezistența crește", lang),
      [
        q4("Der Widerstand nimmt ab", "Resistance decreases", "Az ellenállás csökken", "Rezistența scade", lang),
        q4("Der Widerstand bleibt gleich", "Resistance stays the same", "Az ellenállás ugyanaz marad", "Rezistența rămâne aceeași", lang),
        q4("Der Widerstand wird null", "Resistance becomes zero", "Az ellenállás nulla lesz", "Rezistența devine zero", lang),
      ],
      rng
    ));
  }

  // Template 6: "What happens when wire gets thicker?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Was passiert mit dem Widerstand, wenn der Draht dicker wird?", "What happens to resistance when the wire gets thicker?", "Mi történik az ellenállással, ha a drót vastagabb lesz?", "Ce se întâmplă cu rezistența când firul devine mai gros?", lang),
      q4("Der Widerstand nimmt ab", "Resistance decreases", "Az ellenállás csökken", "Rezistența scade", lang),
      [
        q4("Der Widerstand nimmt zu", "Resistance increases", "Az ellenállás nő", "Rezistența crește", lang),
        q4("Der Widerstand bleibt gleich", "Resistance stays the same", "Az ellenállás ugyanaz marad", "Rezistența rămâne aceeași", lang),
        q4("Der Widerstand wird unendlich", "Resistance becomes infinite", "Az ellenállás végtelen lesz", "Rezistența devine infinită", lang),
      ],
      rng
    ));
  }

  // Template 7: "Difference between conductor and insulator"
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "electricity",
      "resistance",
      q4("Was ist der Unterschied zwischen einem Leiter und einem Isolator?", "What is the difference between a conductor and an insulator?", "Mi a különbség a vezető és a szigetelő között?", "Care este diferența dintre un conductor și un izolator?", lang),
      q4("Leiter hat niedriger Widerstand; Isolator hat sehr hoher Widerstand", "Conductor has low resistance; Insulator has very high resistance", "Vezető alacsony ellenállása van; Szigetelő nagyon magas ellenállása", "Conductorul are rezistență mică; Izolatorul are rezistență foarte mare", lang),
      [
        q4("Leiter ist harrt; Isolator ist weich", "Conductor is hard; Insulator is soft", "Vezető kemény; Szigetelő puha", "Conductorul este dur; Izolatorul este moale", lang),
        q4("Leiter ist rot; Isolator ist blau", "Conductor is red; Insulator is blue", "Vezető piros; Szigetelő kék", "Conductorul este roșu; Izolatorul este albastru", lang),
        q4("Leiter ist schwer; Isolator ist leicht", "Conductor is heavy; Insulator is light", "Vezető nehéz; Szigetelő könnyű", "Conductorul este greu; Izolatorul este ușor", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateResistanceTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Definiere Widerstand und nenne seine Einheit.", "Define resistance and name its unit.", "Határozd meg az ellenállást és nevezd meg az egységét.", "Definește rezistența și numește unitatea sa.", lang),
    [
      q4("Widerstand ist die Opposition gegen Stromfluss, gemessen in Ohm (Ω)", "Resistance is opposition to current flow, measured in Ohm (Ω)", "Az ellenállás az áramfolyás elleni opposition, ohmban (Ω) mérve", "Rezistența este opoziția la fluxul de curent, măsurată în Ohm (Ω)", lang),
      q4("Opposition gegen Strom, Einheit Ohm", "Opposition to current, unit Ohm", "Áram elleni opposition, egység Ohm", "Opoziție la curent, unitate Ohm", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Schreibe die Formel für Widerstand auf.", "Write the formula for resistance.", "Írd fel az ellenállás képletét.", "Scrie formula pentru rezistență.", lang),
    [
      q4("R = U / I", "R = U / I", "R = U / I", "R = U / I", lang),
      q4("R=U/I", "R=U/I", "R=U/I", "R=U/I", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Nenne drei Faktoren, die den Widerstand eines Drahtes beeinflussen.", "Name three factors that affect the resistance of a wire.", "Nevezz meg három tényezőt, amely befolyásolja a drót ellenállását.", "Numește trei factori care afectează rezistența unui fir.", lang),
    [
      q4("Länge (länger = höherer Widerstand), Dicke (dicker = niedrigerer Widerstand), Material (Leitfähigkeit)", "Length (longer = higher resistance), Thickness (thicker = lower resistance), Material (conductivity)", "Hossz (hosszabb = magasabb ellenállás), Vastagság (vastagabb = alacsonyabb ellenállás), Anyag (vezetőképesség)", "Lungime (mai lung = rezistență mai mare), Grosime (mai gros = rezistență mai mică), Material (conductivitate)", lang),
      q4("Länge, Dicke, Materialart", "Length, Thickness, Type of material", "Hossz, vastagság, anyag típusa", "Lungime, grosime, tip de material", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Was ist der Unterschied zwischen Leiter und Isolator?", "What is the difference between conductor and insulator?", "Mi a különbség a vezető és a szigetelő között?", "Care este diferența dintre conductor și izolator?", lang),
    [
      q4("Leiter: niedriger Widerstand, ermöglicht Stromfluss; Isolator: hoher Widerstand, verhindert Stromfluss", "Conductor: low resistance, allows current; Insulator: high resistance, blocks current", "Vezető: alacsony ellenállás, lehetővé teszi az áramot; Szigetelő: magas ellenállás, megakadályozza az áramot", "Conductor: rezistență mică, permite curentul; Izolator: rezistență mare, blochează curentul", lang),
      q4("Leiter leitet, Isolator leitet nicht", "Conductor conducts, Insulator does not", "Vezető vezet, szigetelő nem", "Conductor conduce, izolator nu", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Warum wird ein Glühbirnenfaden heiß und leuchtet?", "Why does a lightbulb filament get hot and glow?", "Miért lesz meleg és izzik az izzó szála?", "De ce se-ncinzește și strălucește un filament de bec?", lang),
    [
      q4("Weil der hohe Widerstand des Fadens eine große Menge Wärme erzeugt, die den Faden zum Leuchten bringt", "Because the high resistance of the filament produces a lot of heat that makes it glow", "Mert a szál magas ellenállása sok hőt termel, amely az szálat izzani teszi", "Pentru că rezistența mare a filamentului produce o mulțime de căldură care-l face să strălucească", lang),
      q4("Hoher Widerstand erzeugt Wärme und Licht", "High resistance generates heat and light", "Magas ellenállás hő és fényt termel", "Rezistență mare generează căldură și lumină", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Nenne drei gute Leiter und drei Isolatoren.", "Name three good conductors and three insulators.", "Nevezz meg három jó vezetőt és három szigetelőt.", "Numește trei buni conductori și trei izolatori.", lang),
    [
      q4("Leiter: Kupfer, Silber, Aluminium; Isolatoren: Gummi, Kunststoff, Glas", "Conductors: Copper, Silver, Aluminum; Insulators: Rubber, Plastic, Glass", "Vezetők: Réz, Ezüst, Alumínium; Szigetelők: Gumi, Műanyag, Üveg", "Conductori: Cupru, Argint, Aluminiu; Izolatori: Cauciuc, Plastic, Sticlă", lang),
      q4("Cu, Ag, Al; Gummi, Kunststoff, Glas", "Cu, Ag, Al; Rubber, Plastic, Glass", "Réz, Ezüst, Alumínium; Gumi, Műanyag, Üveg", "Cupru, Argint, Aluminiu; Cauciuc, Plastic, Sticlă", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Was ist Spezifischer Widerstand (Resistivität) und worauf hängt es ab?", "What is specific resistance (resistivity) and what does it depend on?", "Mi a fajlagos ellenállás és mitől függ?", "Ce este rezistivitatea și de ce depinde?", lang),
    [
      q4("Spezifischer Widerstand ist eine Materialeigenschaft, die anzeigt, wie viel ein Material dem Stromfluss widersteht; hängt vom Material ab", "Specific resistance is a material property showing how much a material opposes current; depends on the material", "A fajlagos ellenállás egy anyagtulajdonság, amely azt mutatja, mennyire ellenáll az anyag az áramnak; az anyagtól függ", "Rezistivitatea este o proprietate a materialului care arată cât de mult se opune materialul curentului; depinde de material", lang),
      q4("Materialeigenschaft, abhängig vom Stoff", "Material property, depends on substance", "Anyagtulajdonság, az anyagtól függ", "Proprietate a materialului, depinde de substanță", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Wie ändert sich der Widerstand mit der Länge und Dicke eines Drahtes (qualitativ)?", "How does resistance change with the length and thickness of a wire (qualitatively)?", "Hogyan változik az ellenállás a drót hosszúságának és vastagságának függvényében (minőségileg)?", "Cum se schimbă rezistența cu lungimea și grosimea unui fir (calitativ)?", lang),
    [
      q4("Länger → höherer Widerstand; Dicker → niedrigerer Widerstand", "Longer → higher resistance; Thicker → lower resistance", "Hosszabb → magasabb ellenállás; Vastagabb → alacsonyabb ellenállás", "Mai lung → rezistență mai mare; Mai gros → rezistență mai mică", lang),
      q4("Mit Länge steigt, mit Dicke sinkt der Widerstand", "Resistance increases with length, decreases with thickness", "Az ellenállás hosszúsággal nő, vastagsággal csökken", "Rezistența crește cu lungimea, scade cu grosimea", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "resistance",
    q4("Bei einer Spannung von 12 Volt und einem Widerstand von 4 Ohm, wie groß ist der Strom (nutze R=U/I)?", "With a voltage of 12 Volts and a resistance of 4 Ohm, what is the current (use R=U/I)?", "12 voltos feszültség és 4 ohm ellenállás esetén mekkora az áram (használd az R=U/I)?", "Cu o tensiune de 12 Volți și o rezistență de 4 Ohm, cât este curentul (folosește R=U/I)?", lang),
    [
      q4("3 Ampere", "3 Amperes", "3 Amper", "3 Amperi", lang),
      q4("I = 3 A", "I = 3 A", "I = 3 A", "I = 3 A", lang),
    ]
  ));

  return questions;
}

// ─── 5. ELECTRICAL SAFETY ────────────────────────────────────────────────

const ELECTRICAL_SAFETY_DATA = {
  hazards: [
    { en: "short circuit", de: "Kurzschluss", hu: "rövidzárlat", ro: "scurtcircuit" },
    { en: "electric shock", de: "Stromschlag", hu: "áramütés", ro: "șoc electric" },
    { en: "fire from overheating", de: "Brand durch Überhitzung", hu: "tűz túlmelegedésből", ro: "foc din supraîncălzire" },
    { en: "electrocution", de: "Stromtod", hu: "elektromosságtól való halál", ro: "electrocuție" },
    { en: "damaged insulation", de: "beschädigte Isolierung", hu: "megrongálódott szigetelés", ro: "izolație dăunată" },
  ],

  protections: [
    { en: "fuse (Sicherung)", de: "Sicherung", hu: "biztosíték", ro: "fuzibil" },
    { en: "circuit breaker", de: "Schutzschalter", hu: "automata biztosíték", ro: "întreruptor de circuit" },
    { en: "grounding (Erdung)", de: "Erdung", hu: "földelés", ro: "punere la pământ" },
    { en: "GFI/GFCI (RCD/FI-relé)", de: "FI-Schutzschalter", hu: "FI-relé", ro: "întreruptor diferențial" },
    { en: "insulation", de: "Isolierung", hu: "szigetelés", ro: "izolație" },
    { en: "lightning rod", de: "Blitzableiter", hu: "villámhárító", ro: "paratrăznet" },
  ],

  rules: [
    { en: "never touch wet hands near outlets", de: "niemals mit feuchten Händen Steckdosen berühren", hu: "soha ne érintsd meg az aljzatot nedves kézzel", ro: "niciodată nu atingeți prize cu mâini ude" },
    { en: "unplug devices before servicing", de: "Geräte vor Wartung ausstecken", hu: "szerelés előtt húzd ki az eszköz a dugóját", ro: "scoateți aparatul înainte de întreținere" },
    { en: "do not overload circuits", de: "überlasten Sie nicht die Stromkreise", hu: "ne terhelj túl áramköröket", ro: "nu supraîncărcați circuitele" },
    { en: "keep cords away from water", de: "halten Sie Kabel weg von Wasser", hu: "tartsd a kábelt távol vízből", ro: "ții cablurile departe de apă" },
    { en: "never use damaged cords", de: "verwenden Sie niemals beschädigte Kabel", hu: "soha ne használj megrongálódott kábelt", ro: "niciodată nu utilizați cabluri deteriorate" },
    { en: "install safety switches in bathrooms", de: "installieren Sie Sicherungsschalter im Badezimmer", hu: "szerelj biztonsági kapcsolót a fürdőszobában", ro: "instalați întreruptoare de siguranță în baie" },
    { en: "call electrician for repairs", de: "rufen Sie einen Elektriker an", hu: "hívj szakembert javításra", ro: "apelați electricianul pentru reparații" },
  ],

  bodyCurrent: [
    { en: "below 1 mA: barely perceptible", de: "unter 1 mA: kaum wahrnehmbar", hu: "1 mA alatt: alig érezhető", ro: "sub 1 mA: abia perceptibil" },
    { en: "1-5 mA: painful but not dangerous", de: "1-5 mA: schmerzhaft, aber nicht lebensbedrohlich", hu: "1-5 mA: fájdalmas, de nem veszélyes", ro: "1-5 mA: dureros, dar nu periculos" },
    { en: "5-10 mA: loss of muscle control", de: "5-10 mA: Muskelverlust", hu: "5-10 mA: izomveszteség", ro: "5-10 mA: pierderea controlului muscular" },
    { en: "above 50 mA: fatal", de: "über 50 mA: tödlich", hu: "50 mA fölött: halálos", ro: "peste 50 mA: fatal" },
  ],
};

export function generateElectricalSafetyMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a short circuit?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Was ist ein Kurzschluss?", "What is a short circuit?", "Mi a rövidzárlat?", "Ce este un scurtcircuit?", lang),
      q4("Ein Stromkreis mit unbeabsichtigtem Pfad niedriger Widerstand", "A circuit with an unintended low-resistance path", "Egy áramkör nem szándékos alacsony ellenállási úttal", "Un circuit cu o cale neintentionată de rezistență scăzută", lang),
      [
        q4("Ein Stromkreis mit sehr hohem Widerstand", "A circuit with very high resistance", "Nagyon magas ellenállási áramkör", "Un circuit cu rezistență foarte mare", lang),
        q4("Ein Stromkreis, der nicht funktioniert", "A circuit that does not work", "Nem működő áramkör", "Un circuit care nu funcționează", lang),
        q4("Ein Stromkreis mit moderatem Widerstand", "A circuit with moderate resistance", "Mérsékelt ellenállási áramkör", "Un circuit cu rezistență moderată", lang),
      ],
      rng
    ));
  }

  // Template 2: "What is a fuse used for?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Wofür wird eine Sicherung verwendet?", "What is a fuse used for?", "Mire használnak biztosítékot?", "Pentru ce se folosește un fuzibil?", lang),
      q4("Um den Stromkreis zu unterbrechen, wenn zu viel Strom fließt", "To break the circuit when too much current flows", "Az áramkört megszakítani, ha túl sok áram folyik", "Pentru a întrerupe circuitul când curge prea mult curent", lang),
      [
        q4("Um die Spannung zu erhöhen", "To increase voltage", "A feszültség növelésére", "Pentru a crește tensiunea", lang),
        q4("Um den Widerstand zu verringern", "To decrease resistance", "Az ellenállás csökkentésére", "Pentru a scădea rezistența", lang),
        q4("Um den Stromfluss zu messen", "To measure current flow", "Az áramfolyás mérésére", "Pentru a măsura fluxul de curent", lang),
      ],
      rng
    ));
  }

  // Template 3: "What is grounding?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Was ist Erdung?", "What is grounding?", "Mi a földelés?", "Ce este punerea la pământ?", lang),
      q4("Ein Sicherheitssystem, das überschüssigen Strom in die Erde leitet", "A safety system that directs excess current into the earth", "Egy biztonsági rendszer, amely a felesleges áramot a földre vezeti", "Un sistem de siguranță care conduce curentul în exces în pământ", lang),
      [
        q4("Ein System, das den Stromfluss stoppt", "A system that stops current flow", "Az áramfolyást megállító rendszer", "Un sistem care oprește fluxul de curent", lang),
        q4("Ein System, das die Spannung erhöht", "A system that increases voltage", "A feszültséget növelő rendszer", "Un sistem care crește tensiunea", lang),
        q4("Ein System, das Wärme erzeugt", "A system that generates heat", "Hőt termelő rendszer", "Un sistem care generează căldură", lang),
      ],
      rng
    ));
  }

  // Template 4: "What does a GFI/GFCI (FI-relé) do?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Was macht ein FI-Schutzschalter?", "What does a GFI/GFCI (FI-relé) do?", "Mit csinál az FI-relé?", "Ce face un întreruptor diferențial?", lang),
      q4("Unterbricht den Stromkreis, wenn Strom zu Erde leckt", "Breaks the circuit when current leaks to ground", "Megszakítja az áramkört, ha az áram a földre szivárog", "Întrerupe circuitul când curentul se scurgă la pământ", lang),
      [
        q4("Erhöht die Spannung im Stromkreis", "Increases voltage in the circuit", "Növeli az áramkör feszültségét", "Crește tensiunea în circuit", lang),
        q4("Verringert den Widerstand", "Decreases resistance", "Csökkenti az ellenállást", "Reduce rezistența", lang),
        q4("Erzeugt einen Stromfluss", "Creates current flow", "Áramfolyást hoz létre", "Creează fluxul de curent", lang),
      ],
      rng
    ));
  }

  // Template 5: "What are dangers of body current?"
  for (let i = 0; i < 5; i++) {
    const current = pick(ELECTRICAL_SAFETY_DATA.bodyCurrent, rng);
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Welche Auswirkung hat Strom auf den menschlichen Körper?", "What are the dangers of electric current on the body?", "Mi a veszélye a testáramnak?", "Care sunt pericolele curentului electric pe corp?", lang),
      q4(current.de, current.en, current.hu, current.ro, lang),
      [
        q4("Strom hat keine Auswirkung auf den Körper", "Current has no effect on the body", "Az áramnak nincs hatása a testre", "Curentul nu are efect pe corp", lang),
        q4("Strom wärmt nur den Körper", "Current only warms the body", "Az áram csak felmelegíti a testet", "Curentul doar încălzește corpul", lang),
        q4("Strom verlangsamt den Herzschlag", "Current slows the heartbeat", "Az áram lassítja a szívdobbanást", "Curentul încetinește ritmul cardiac", lang),
      ],
      rng
    ));
  }

  // Template 6: "What safety rule?"
  for (let i = 0; i < 4; i++) {
    const rule = pick(ELECTRICAL_SAFETY_DATA.rules, rng);
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Was ist eine wichtige Elektrosicherheitsregel?", "What is an important electrical safety rule?", "Mi a fontos elektromosságbiztonsági szabály?", "Care este o regulă importantă de siguranță electrică?", lang),
      q4(rule.de, rule.en, rule.hu, rule.ro, lang),
      [
        q4("Verwenden Sie immer beschädigte Kabel", "Always use damaged cords", "Mindig használj megrongálódott kábelt", "Utilizați întotdeauna cabluri deteriorate", lang),
        q4("Überladen Sie die Stromkreise", "Overload the circuits", "Túlterhelj áramköröket", "Supraîncărcați circuitele", lang),
        q4("Spielen Sie mit Steckdosen", "Play with outlets", "Játssz az aljzatokkal", "Jucați-vă cu prize", lang),
      ],
      rng
    ));
  }

  // Template 7: "What is lightning protection?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "electricity",
      "electrical_safety",
      q4("Was ist ein Blitzableiter?", "What is a lightning rod?", "Mi a villámhárító?", "Ce este un paratrăznet?", lang),
      q4("Ein Metallstab, der Blitzstrom sicher in die Erde leitet", "A metal rod that safely directs lightning to ground", "Egy fémlap, amely biztonságosan vezeti a villámáramot a földre", "O tijă metalică care conduce în siguranță curentul fulgerului la pământ", lang),
      [
        q4("Ein Gerät, das Blitze verhindert", "A device that prevents lightning", "A villámot megakadályozó eszköz", "Un dispozitiv care previne fulgerele", lang),
        q4("Ein Gerät, das Spannung erhöht", "A device that increases voltage", "A feszültséget növelő eszköz", "Un dispozitiv care crește tensiunea", lang),
        q4("Ein Gerät, das Wärme erzeugt", "A device that generates heat", "Hőt termelő eszköz", "Un dispozitiv care generează căldură", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateElectricalSafetyTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Definiere Kurzschluss und erkläre seine Gefahr.", "Define short circuit and explain its danger.", "Határozd meg a rövidzárlat és magyarázd meg a veszélyét.", "Definește scurtcircuitul și explică pericolul acestuia.", lang),
    [
      q4("Ein unbeabsichtigter niedriger Widerstand Pfad, der zu großem Stromfluss und Überhitzung führt", "An unintended low-resistance path leading to excessive current and overheating", "Egy nem szándékos alacsony ellenállási út, amely túl sok áramhoz és túlmelegedéshez vezet", "O cale neintentionată de rezistență scăzută care duce la curent excesiv și supraîncălzire", lang),
      q4("Rövidzárlat: alacsony ellenállás, nagy áram, hő", "Short circuit: low resistance, high current, heat", "Rövidzárlat: alacsony ellenállás, nagy áram, hő", "Scurtcircuit: rezistență scăzută, curent mare, căldură", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Nenne drei Schutzvorrichtungen gegen Stromgefahren.", "Name three safety devices against electrical hazards.", "Nevezz meg három biztonsági eszközt az elektromosságveszély ellen.", "Numește trei dispozitive de siguranță împotriva pericolelor electrice.", lang),
    [
      q4("Sicherung/Schutzschalter, Erdung/FI-Schutzschalter, Isolierung", "Fuse/Circuit breaker, Grounding/GFI, Insulation", "Biztosíték/Automata, Földelés/FI-relé, Szigetelés", "Fuzibil/Întreruptor, Punere la pământ/Întreruptor diferențial, Izolație", lang),
      q4("Biztosíték, FI-relé, szigetelés", "Fuse, GFI, Insulation", "Biztosíték, FI-relé, szigetelés", "Fuzibil, Întreruptor diferențial, Izolație", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Was ist Erdung und warum ist sie wichtig?", "What is grounding and why is it important?", "Mi a földelés és miért fontos?", "Ce este punerea la pământ și de ce este importantă?", lang),
    [
      q4("Erdung leitet überschüssigen Strom sicher in die Erde, um Stromschläge zu verhindern", "Grounding directs excess current safely to earth, preventing electric shock", "A földelés biztonságosan vezeti a felesleges áramot a földre, megakadályozva az áramütést", "Punerea la pământ conduce în siguranță curentul în exces la pământ, prevenind șocurile electrice", lang),
      q4("Erdung: felesleges áram → föld → biztonság", "Grounding: excess current → earth → safety", "Föld: felesleges áram → föld → biztonság", "Pământ: curent în exces → pământ → siguranță", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Was macht ein FI-Schutzschalter (RCD)?", "What does a GFI/RCD circuit breaker do?", "Mit csinál az FI-relé (RCD) érték?", "Ce face un întreruptor diferențial (RCD)?", lang),
    [
      q4("Ein FI-Schutzschalter misst den Stromfluss und unterbreitet den Stromkreis, wenn Strom zur Erde leckt", "A GFI measures current flow and breaks the circuit if current leaks to ground", "Az FI-relé méri az áramfolyást és megszakítja az áramkört, ha az áram a földre szivárog", "Un GFI măsoară fluxul de curent și întrerupe circuitul dacă curentul se scurgă la pământ", lang),
      q4("FI-relé: áram lezárás → föld → switch szünet", "GFI: current → earth → switch break", "FI: áram → föld → kapcsoló szünete", "FI: curent → pământ → întrerupere comutator", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Nenne drei wichtige Sicherheitsregeln für den Umgang mit Elektrizität.", "Name three important safety rules for handling electricity.", "Nevezz meg három fontos biztonsági szabályt az elektromosság kezeléséhez.", "Numește trei reguli importante de siguranță pentru manipularea energiei electrice.", lang),
    [
      q4("Niemals mit feuchten Händen Steckdosen berühren; Geräte vor Wartung ausstecken; keine beschädigten Kabel verwenden", "Never touch outlets with wet hands; Unplug devices before service; Never use damaged cords", "Soha ne érintsd az aljzatot nedves kézzel; Szerelés előtt húzd ki az eszközt; Soha megrongálódott kábelt ne használ", "Niciodată nu atingeți prizele cu mâini ude; Scoateți aparatul înainte de service; Nu utilizați cabluri deteriorate", lang),
      q4("Nedves kezek - nem; Szerelés - ki; Kábelek - egész", "Wet hands - no; Service - unplug; Cords - intact", "Nedves - nem; Szerelés - kihuztás; Kábelek - egész", "Mâini ude - nu; Service - deconectat; Cabluri - întregi", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Was sind die Gefahren verschiedener Stromstärken auf den menschlichen Körper?", "What are the dangers of different current levels on the human body?", "Mik az eltérő áramintenzitások veszélyei az emberi testre?", "Care sunt pericolele diferitelor niveluri de curent pe corpul uman?", lang),
    [
      q4("Unter 1 mA: kaum wahrnehmbar; 1-5 mA: schmerzhaft; 5-10 mA: Muskelverlust; über 50 mA: tödlich", "Below 1 mA: barely felt; 1-5 mA: painful; 5-10 mA: muscle loss; Over 50 mA: fatal", "1 mA alatt: alig érzékelhető; 1-5 mA: fájdalmas; 5-10 mA: izomvesztés; 50 mA felett: halálos", "Sub 1 mA: abia simțit; 1-5 mA: dureros; 5-10 mA: pierdere musculară; Peste 50 mA: fatal", lang),
      q4("Kicsi: nincs; 1-5mA: fájdalom; 5-10: izmok; 50+: halál", "Small: none; 1-5mA: pain; 5-10: muscles; 50+: death", "Kicsi: nincs; 1-5: fájdalom; 5-10: izmok; 50+: halál", "Mic: nimic; 1-5: durere; 5-10: mușchi; 50+: moarte", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Nenne fünf Sicherheitsregeln beim Umgang mit Elektrizität.", "Name five safety rules when handling electricity.", "Nevezz meg öt biztonsági szabályt az elektromosság kezelésekor.", "Numește cinci reguli de siguranță atunci când manipulezi energia electrică.", lang),
    [
      q4("1. Niemals mit feuchten Händen; 2. Ausstecken vor Wartung; 3. Keine beschädigten Kabel; 4. Nicht überladen; 5. Fachmann rufen", "1. Never wet hands; 2. Unplug before service; 3. No damaged cords; 4. Don't overload; 5. Call electrician", "1. Soha nedves kezek; 2. Szerelés előtt ki; 3. Nincs megrongálódott kábel; 4. Nem túlterhelt; 5. Szakember", "1. Niciodată mâini ude; 2. Deconectare înainte de service; 3. Fără cabluri deteriorate; 4. Nu supraîncărcați; 5. Apelați electrician", lang),
      q4("Nedves - ki; Szerelés - ki; Kábelek - egész; Nem túl; Szakember", "Wet - unplug; Service - unplug; Cables - intact; Not over; Technician", "Nedves - ki; Szerelés - ki; Kábelek - egész; Nem túl; Szakember", "Ude - deconectat; Service - deconectat; Cabluri - întregi; Nu prea; Tehnician", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Was ist ein Blitzableiter und wo wird er verwendet?", "What is a lightning rod and where is it used?", "Mi a villámhárító és hol használják?", "Ce este un paratrăznet și unde se folosește?", lang),
    [
      q4("Ein Metallstab, der Blitzstrom sicher in die Erde leitet, wird auf Dächern von Gebäuden installiert", "A metal rod that safely directs lightning to ground, installed on building roofs", "Egy fémlap, amely biztonságosan vezeti a villámáramot a földre, az épületek tetejére szerelve", "O tijă metalică care conduce curentul fulgerului la pământ, instalată pe acoperișurile clădirilor", lang),
      q4("Villámhárító: metall, föld, tető", "Lightning rod: metal, ground, roof", "Villámhárító: fém, föld, tető", "Paratrăznet: metal, pământ, acoperiș", lang),
    ]
  ));

  questions.push(createTyping(
    "electricity",
    "electrical_safety",
    q4("Wann sollte man einen Elektriker anrufen statt selbst zu reparieren?", "When should you call an electrician instead of repairing yourself?", "Mikor hívj szakembert szerelésnél saját helyett?", "Când ar trebui să apelezi un electrician în loc să repari singur?", lang),
    [
      q4("Immer wenn es um Stromkreise, Verdrahtung oder komplexe Reparaturen geht; nur einfache Aufgaben selbst", "Always for circuits, wiring or complex repairs; only simple tasks yourself", "Mindig áramkörök, vezetékek vagy összetett szerelések esetén; csak egyszerű feladatok magad", "Întotdeauna pentru circuite, cablare sau reparații complexe; doar sarcini simple singur", lang),
      q4("Áramkör, vezeték, komplex: szakember", "Circuit, wiring, complex: expert", "Áramkör, vezeték, komplex: szakember", "Circuit, cablare, complex: expert", lang),
    ]
  ));

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_ELECTRICITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  series_circuits: (lang = "en", seed = 0) => [...generateSeriesCircuitsMCQ(lang, seed), ...generateSeriesCircuitsTyping(lang, seed)],
  series_circuits_mcq: (lang = "en", seed = 0) => generateSeriesCircuitsMCQ(lang, seed),
  series_circuits_typing: (lang = "en", seed = 0) => generateSeriesCircuitsTyping(lang, seed),

  parallel_circuits: (lang = "en", seed = 0) => [...generateParallelCircuitsMCQ(lang, seed), ...generateParallelCircuitsTyping(lang, seed)],
  parallel_circuits_mcq: (lang = "en", seed = 0) => generateParallelCircuitsMCQ(lang, seed),
  parallel_circuits_typing: (lang = "en", seed = 0) => generateParallelCircuitsTyping(lang, seed),

  current_voltage: (lang = "en", seed = 0) => [...generateCurrentVoltageMCQ(lang, seed), ...generateCurrentVoltageTyping(lang, seed)],
  current_voltage_mcq: (lang = "en", seed = 0) => generateCurrentVoltageMCQ(lang, seed),
  current_voltage_typing: (lang = "en", seed = 0) => generateCurrentVoltageTyping(lang, seed),

  resistance: (lang = "en", seed = 0) => [...generateResistanceMCQ(lang, seed), ...generateResistanceTyping(lang, seed)],
  resistance_mcq: (lang = "en", seed = 0) => generateResistanceMCQ(lang, seed),
  resistance_typing: (lang = "en", seed = 0) => generateResistanceTyping(lang, seed),

  electrical_safety: (lang = "en", seed = 0) => [...generateElectricalSafetyMCQ(lang, seed), ...generateElectricalSafetyTyping(lang, seed)],
  electrical_safety_mcq: (lang = "en", seed = 0) => generateElectricalSafetyMCQ(lang, seed),
  electrical_safety_typing: (lang = "en", seed = 0) => generateElectricalSafetyTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
