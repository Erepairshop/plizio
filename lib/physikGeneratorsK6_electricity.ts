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

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_ELECTRICITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  series_circuits: (lang = "en", seed = 0) => [...generateSeriesCircuitsMCQ(lang, seed), ...generateSeriesCircuitsTyping(lang, seed)],
  series_circuits_mcq: (lang = "en", seed = 0) => generateSeriesCircuitsMCQ(lang, seed),
  series_circuits_typing: (lang = "en", seed = 0) => generateSeriesCircuitsTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
