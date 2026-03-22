// ─── PHYSIK GENERATORS (Klasse 5) — Magnetismus ─────────────────────────────
// 4 subtopics × 2 (MCQ + Typing) = 8 generátor
// Minden MCQ generátor: 35 kérdés
// Minden Typing generátor: 10 kérdés

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK5GeneratorMap } from "./physikCurriculum5";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

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

function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─── DATA POOLS ────────────────────────────────────────────────────────────

const MAGNETIC_MATERIALS = [
  { name: "Eisen", magnetic: true, symbol: "Fe" },
  { name: "Nickel", magnetic: true, symbol: "Ni" },
  { name: "Kobalt", magnetic: true, symbol: "Co" },
  { name: "Kupfer", magnetic: false, symbol: "Cu" },
  { name: "Aluminium", magnetic: false, symbol: "Al" },
  { name: "Zink", magnetic: false, symbol: "Zn" },
  { name: "Stahl", magnetic: true, symbol: "Fe-C" },
  { name: "Gold", magnetic: false, symbol: "Au" },
];

const MAGNET_TYPES = [
  { type: "Stabmagnet", shape: "Stab", poles: 2 },
  { type: "Hufeissenmagnet", shape: "Hufeisen", poles: 2 },
  { type: "Ringmagnet", shape: "Ring", poles: 2 },
  { type: "Elektromagnet", source: "Strom", poles: 2 },
];

const MAGNET_INTERACTIONS = [
  { pole1: "Nord", pole2: "Nord", result: "Abstoßung" },
  { pole1: "Nord", pole2: "Süd", result: "Anziehung" },
  { pole1: "Süd", pole2: "Süd", result: "Abstoßung" },
  { pole1: "Süd", pole2: "Nord", result: "Anziehung" },
];

// ─── 25. MAGNETS (MCQ GENERATOR) ───────────────────────────────────────────

function generateMagnetsMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "magnetism";
  const subtopic = "magnets";
  const questions: CurriculumMCQ[] = [];

  // Template 1: Which material is magnetic? (7 versions)
  for (let i = 0; i < 7; i++) {
    const magnetic = pick(
      MAGNETIC_MATERIALS.filter(m => m.magnetic),
      rng
    );
    const wrongMaterials = pick(
      [
        MAGNETIC_MATERIALS.filter(m => !m.magnetic),
        MAGNETIC_MATERIALS.filter(m => !m.magnetic),
      ],
      rng
    );
    const question = q4(
      `Welches Material ist magnetisch?`,
      `Which material is magnetic?`,
      `Melyik anyag mágneses?`,
      `Care material este magnetic?`,
      "de" // Default language, will be overridden in generator
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        magnetic.name,
        wrongMaterials.map(m => m.name),
        rng
      )
    );
  }

  // Template 2: What happens when two north poles meet? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was passiert, wenn zwei Nordpole sich treffen?`,
      `What happens when two north poles meet?`,
      `Mi történik, ha két északi pólus találkozik?`,
      `Ce se întâmplă când doi poli nord se întâlnesc?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Sie stoßen sich ab",
        ["Sie ziehen sich an", "Nichts passiert", "Sie verbinden sich"],
        rng
      )
    );
  }

  // Template 3: What is a compass needle? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was ist eine Kompassnadel?`,
      `What is a compass needle?`,
      `Mi az egy iránytű tűje?`,
      `Ce este acul unei busole?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Ein magnetisiertes Stück Eisen",
        ["Eine Kupferspitze", "Ein Papierstreifen", "Ein Stahlgewicht"],
        rng
      )
    );
  }

  // Template 4: Which is NOT magnetic? (7 versions)
  for (let i = 0; i < 7; i++) {
    const notMagnetic = pick(
      MAGNETIC_MATERIALS.filter(m => !m.magnetic),
      rng
    );
    const magneticMaterials = pick(
      [
        MAGNETIC_MATERIALS.filter(m => m.magnetic),
        MAGNETIC_MATERIALS.filter(m => m.magnetic),
      ],
      rng
    );
    const question = q4(
      `Welches ist NICHT magnetisch?`,
      `Which is NOT magnetic?`,
      `Melyik NEM mágneses?`,
      `Care NU este magnetic?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        notMagnetic.name,
        magneticMaterials.map(m => m.name),
        rng
      )
    );
  }

  // Template 5: What type of magnet attracts iron filings? (7 versions)
  for (let i = 0; i < 7; i++) {
    const magnet = pick(MAGNET_TYPES, rng);
    const question = q4(
      `Welcher Magnet-Typ zieht Eisenfeilspäne an?`,
      `What type of magnet attracts iron filings?`,
      `Milyen típusú mágnes vonzza az vasfilings-t?`,
      `Ce tip de magnet atrage particulele de fier?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        magnet.type,
        MAGNET_TYPES.filter(m => m.type !== magnet.type).map(m => m.type),
        rng
      )
    );
  }

  return questions;
}

// ─── 25. MAGNETS (TYPING GENERATOR) ────────────────────────────────────────

function generateMagnetsTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "magnetism";
  const subtopic = "magnets";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Jeder Magnet hat einen ___ Pol und einen ___ Pol.`,
        `Every magnet has a ___ pole and a ___ pole.`,
        `Minden mágnesnek van egy ___ pólusa és egy ___ pólusa.`,
        `Fiecare magnet are un pol ___ și un pol ___.`,
        "de"
      ),
      ["Nord", "South"] // English answer
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Wenn man zwei Magnete mit denselben Polen zusammenbringt, ___ sie sich.`,
        `When two magnets with the same poles meet, they ___ each other.`,
        `Ha két mágnes ugyanolyan pólussal találkozik, ___ egymást.`,
        `Când doi magneți cu aceiași poli se întâlnesc, se ___.`,
        "de"
      ),
      ["repel", "abstoßen", "taszítják", "resping"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Das Material ___ ist sehr magnetisch.`,
        `The material ___ is very magnetic.`,
        `Az ___ anyag nagyon mágneses.`,
        `Materialul ___ este foarte magnetic.`,
        "de"
      ),
      ["Eisen", "iron", "vas", "fier"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine Kompassnadel zeigt immer zum ___ Pol der Erde.`,
        `A compass needle always points to Earth's ___ pole.`,
        `Az iránytű tűje mindig a Föld ___ pólusára mutat.`,
        `Acul unei busole arată întotdeauna către polul ___ al Pământului.`,
        "de"
      ),
      ["Nord", "north", "észak", "nord"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ Pole ziehen sich an, gleiche Pole stoßen sich ab.`,
        `___ poles attract, like poles repel.`,
        `Az ___ pólusok vonzódnak, az azonosak taszítódnak.`,
        `Polii ___ se atrag, polii asemeni se resping.`,
        "de"
      ),
      ["Ungleiche", "opposite", "ellentétes", "opuși"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ ist ein magnet, der Strom nutzt.`,
        `An ___ is a magnet powered by electricity.`,
        `Az ___ egy mágnes, amely villamos árammal működik.`,
        `Un ___ este un magnet alimentat de curent electric.`,
        "de"
      ),
      ["Elektromagnet", "electromagnet", "elektromágnes", "electromagnet"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die unsichtbare Kraft um einen Magnet herum ist das ___ .`,
        `The invisible force around a magnet is the ___ .`,
        `A mágnes körüli láthatatlan erő a ___ .`,
        `Forța invizibilă în jurul unui magnet este ___ .`,
        "de"
      ),
      ["Magnetfeld", "magnetic field", "mágneses mező", "câmp magnetic"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ ist ein Material, das NICHT magnetisch ist.`,
        `___ is a material that is NOT magnetic.`,
        `A ___ olyan anyag, amely NEM mágneses.`,
        `___ este un material care NU este magnetic.`,
        "de"
      ),
      ["Kupfer", "copper", "réz", "cupru"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Magnetische Feldlinien gehen von ___ zu ___ Pol.`,
        `Magnetic field lines go from ___ to ___ pole.`,
        `A mágneses térvonalak az ___ pólusról az ___ pólusra mennek.`,
        `Liniile de câmp magnetic merg de la polul ___ la polul ___.`,
        "de"
      ),
      ["Nord", "South"] // Short form
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ sind Materialien, die von Magneten angezogen werden.`,
        `___ are materials that are attracted by magnets.`,
        `A ___ olyan anyagok, amelyeket a mágnesek vonzanak.`,
        `___ sunt materiale care sunt atrase de magneți.`,
        "de"
      ),
      ["Ferromagnetische Stoffe", "ferromagnetic materials", "ferromágneses anyagok", "materiale feromagnetice"]
    )
  );

  return questions;
}

// ─── 26. MAGNETIC FIELD (MCQ GENERATOR) ────────────────────────────────────

function generateMagneticFieldMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "magnetism";
  const subtopic = "magnetic_field";
  const questions: CurriculumMCQ[] = [];

  // Template 1: Magnetic field lines go from ___ to ___ (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Magnetische Feldlinien gehen vom ___ zum ___ Pol.`,
      `Magnetic field lines go from ___ to ___ pole.`,
      `Mágneses térvonalak az ___ pólusról az ___ pólusra mennek.`,
      `Liniile de câmp magnetic merg de la polul ___ la polul ___.`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Nordpol / Südpol",
        ["Südpol / Nordpol", "Osten / Westen", "Oben / Unten"],
        rng
      )
    );
  }

  // Template 2: How can you visualize a magnetic field? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Wie kann man ein Magnetfeld sichtbar machen?`,
      `How can you visualize a magnetic field?`,
      `Hogyan lehet láthatóvá tenni egy mágneses mezőt?`,
      `Cum poți vizualiza un câmp magnetic?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Mit Eisenfeilspänen",
        ["Mit Sand", "Mit Wasser", "Mit Papier"],
        rng
      )
    );
  }

  // Template 3: Where is a magnet's field strongest? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Wo ist das Magnetfeld eines Magneten am stärksten?`,
      `Where is a magnet's magnetic field strongest?`,
      `Hol a legerősebb egy mágnes mágneses mezője?`,
      `Unde este cel mai puternic câmpul magnetic al unui magnet?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "An den Polen",
        ["In der Mitte", "Überall gleich", "Nur außen"],
        rng
      )
    );
  }

  // Template 4: What creates Earth's magnetic field? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was erzeugt das Magnetfeld der Erde?`,
      `What creates Earth's magnetic field?`,
      `Mi hozza létre a Föld mágneses mezőjét?`,
      `Ce creează câmpul magnetic al Pământului?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Flüssiges Eisen im Erdkern",
        ["Der Mond", "Die Sonne", "Die Atmosphäre"],
        rng
      )
    );
  }

  // Template 5: Iron filings pattern around a bar magnet (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Wie sieht das Muster von Eisenfeilspänen um einen Stabmagnet aus?`,
      `What pattern do iron filings make around a bar magnet?`,
      `Milyen mintázatot alkotnak az vasfilings egy stab körül?`,
      `Ce model fac particulele de fier în jurul unui magnet bară?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Bögen zwischen den Polen",
        ["Konzentrische Kreise", "Zickzack-Linien", "Gerade Linien"],
        rng
      )
    );
  }

  return questions;
}

// ─── 26. MAGNETIC FIELD (TYPING GENERATOR) ────────────────────────────────

function generateMagneticFieldTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "magnetism";
  const subtopic = "magnetic_field";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Magnetische Feldlinien zeigen vom ___ zum ___ Pol.`,
        `Magnetic field lines point from ___ to ___ pole.`,
        `A mágneses térvonalak az ___ pólusról az ___ pólusra mutatnak.`,
        `Liniile de câmp magnetic arată de la polul ___ la polul ___.`,
        "de"
      ),
      ["Nord", "south"] // Multiple accepted answers
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ können das Magnetfeld sichtbar machen.`,
        `___ can show magnetic field lines.`,
        `A ___ láthatóvá tehet a mágneses térvonalakat.`,
        `___ poate arăta liniile de câmp magnetic.`,
        "de"
      ),
      ["Eisenfeilspäne", "iron filings", "vasfilings", "particulele de fier"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Der unsichtbare Raum um einen Magnet herum ist das ___ .`,
        `The invisible space around a magnet is the ___ .`,
        `A láthatatlan tér egy mágnes körül a ___ .`,
        `Spațiul invizibil din jurul unui magnet este ___ .`,
        "de"
      ),
      ["Magnetfeld", "magnetic field", "mágneses mező", "câmp magnetic"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Das Erdmagnetfeld wird durch ___ im Erdkern erzeugt.`,
        `Earth's magnetic field is created by ___ in the core.`,
        `A Föld mágneses mezője a magban lévő ___ hozza létre.`,
        `Câmpul magnetic terestru este creat de ___ din nucleul Pământului.`,
        "de"
      ),
      ["flüssiges Eisen", "liquid iron", "folyékony vas", "fier lichid"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Das Magnetfeld ist an den ___ am stärksten.`,
        `The magnetic field is strongest at the ___ .`,
        `A mágneses mező a ___ helyen a legerősebb.`,
        `Câmpul magnetic este cel mai puternic la ___ .`,
        "de"
      ),
      ["Polen", "poles", "pólus", "poli"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Feldlinien zeigen die ___ und Richtung des Magnetfeldes.`,
        `Field lines show the ___ and direction of the magnetic field.`,
        `A térvonalak a mágneses mező ___ és irányát mutatják.`,
        `Liniile de câmp arată ___ și direcția câmpului magnetic.`,
        "de"
      ),
      ["Stärke", "strength", "erő", "intensitate"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ erzeugt ein Magnetfeld ohne Strom.`,
        `A ___ creates a magnetic field without electricity.`,
        `Egy ___ mágneses mezőt hoz létre áram nélkül.`,
        `Un ___ creează un câmp magnetic fără electricitate.`,
        "de"
      ),
      ["Permanentmagnet", "permanent magnet", "állandó mágnes", "magnet permanent"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die Kompassnadel zeigt zum ___ Magnetpol der Erde.`,
        `The compass needle points to Earth's ___ magnetic pole.`,
        `Az iránytű a Föld ___ mágneses pólusára mutat.`,
        `Acul busolei arată către polul magnetic ___ al Pământului.`,
        "de"
      ),
      ["Nord", "north", "északi", "nord"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Magnetische Feldlinien ___ sich nie.`,
        `Magnetic field lines never ___ each other.`,
        `A mágneses térvonalak soha nem ___ egymást.`,
        `Liniile de câmp magnetic nu se ___ niciodată.`,
        "de"
      ),
      ["schneiden", "cross", "keresztezik", "intersectează"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Der ___ ein Magnet wird, desto stärker ist sein Magnetfeld.`,
        `The ___ a magnet is, the stronger its magnetic field.`,
        `Minél ___ egy mágnes, annál erősebb a mágneses mezője.`,
        `Cu cât ___ este un magnet, cu atât mai puternic este câmpul său.`,
        "de"
      ),
      ["stärker", "stronger", "erősebb", "mai puternic"]
    )
  );

  return questions;
}

// ─── 27. STATIC ELECTRICITY (MCQ GENERATOR) ───────────────────────────────

function generateStaticElectricityMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "magnetism";
  const subtopic = "static_electricity";
  const questions: CurriculumMCQ[] = [];

  // Template 1: What causes static electricity? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was verursacht statische Elektrizität?`,
      `What causes static electricity?`,
      `Mi okozza a sztatikus elektromosságot?`,
      `Ce cauzează electricitatea statică?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Übertragung von Elektronen",
        ["Wasserbewegung", "Wärmeerzeugung", "Lichtemission"],
        rng
      )
    );
  }

  // Template 2: Why does a balloon stick to wall after rubbing? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Warum bleibt ein Ballon an der Wand haften, nachdem man ihn reibt?`,
      `Why does a balloon stick to the wall after rubbing on hair?`,
      `Miért marad egy léggömb a falhoz, miután a hajára dörzsölik?`,
      `De ce rămâne un balon pe perete după ce se freacă de păr?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Statische Ladung wird übertragen",
        ["Schwerkraft zieht ihn", "Klebstoff am Ballon", "Magnete in der Wand"],
        rng
      )
    );
  }

  // Template 3: What is lightning? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was ist Blitz?`,
      `What is lightning?`,
      `Mi a villám?`,
      `Ce este fulgerul?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Eine riesige elektrische Entladung",
        ["Ein Feuer in der Luft", "Wärmestrahlung", "Wasserdampf"],
        rng
      )
    );
  }

  // Template 4: Like charges ___ each other (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Gleiche Ladungen ___ sich gegenseitig.`,
      `Like charges ___ each other.`,
      `Az azonos töltések ___ egymást.`,
      `Sarcinile similare ___ una pe cealaltă.`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "stoßen ab",
        ["ziehen an", "neutralisieren", "verschmelzen"],
        rng
      )
    );
  }

  // Template 5: Static electricity example (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Welches ist ein Beispiel für statische Elektrizität?`,
      `Which is an example of static electricity?`,
      `Melyik a sztatikus elektromosság példája?`,
      `Care este un exemplu de electricitate statică?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Funken beim Ausziehen eines Pullovers",
        ["Licht einer LED", "Wärme eines Feuers", "Schall einer Glocke"],
        rng
      )
    );
  }

  return questions;
}

// ─── 27. STATIC ELECTRICITY (TYPING GENERATOR) ────────────────────────────

function generateStaticElectricityTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "magnetism";
  const subtopic = "static_electricity";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Statische Elektrizität wird durch die Übertragung von ___ verursacht.`,
        `Static electricity is caused by the transfer of ___ .`,
        `Statikus elektromosság az ___ átadása okozza.`,
        `Electricitatea statică este cauzată de transferul de ___ .`,
        "de"
      ),
      ["Elektronen", "electrons", "elektronok", "electroni"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Kamm zieht Papier an, nachdem man ihn durch das ___ zieht.`,
        `A comb attracts paper after running through ___ .`,
        `Egy fésű vonzza a papírt, miután a ___ -ban húzzák.`,
        `Un pieptene atrage hârtia după ce se trece prin ___ .`,
        "de"
      ),
      ["Haar", "hair", "haj", "păr"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Blitz ist eine Form der ___ Entladung.`,
        `Lightning is a form of ___ discharge.`,
        `A villám a ___ kisülés egyik formája.`,
        `Fulgerul este o formă de descărcare ___ .`,
        "de"
      ),
      ["elektrischen", "electrical", "elektromos", "electrică"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Wenn du einen Pullover ausziehst, entstehen manchmal ___ .`,
        `When you pull off a sweater, sometimes ___ form.`,
        `Amikor leveszel egy pulóvert, néha ___ alakulnak ki.`,
        `Când scoți o bluză, uneori se formează ___ .`,
        "de"
      ),
      ["Funken", "sparks", "szikrák", "scântei"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Gleiche Ladungen ___ sich gegenseitig ab.`,
        `Like charges ___ each other.`,
        `Az azonos töltések ___ egymást.`,
        `Sarcinile similare se ___ una pe cealaltă.`,
        "de"
      ),
      ["stoßen", "repel", "taszítják", "resping"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Entgegengesetzte Ladungen ___ sich gegenseitig an.`,
        `Opposite charges ___ each other.`,
        `Az ellentétes töltések ___ egymást.`,
        `Sarcinile opuse se ___ una pe cealaltă.`,
        "de"
      ),
      ["ziehen", "attract", "vonzódnak", "atrag"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Blitz ist eine sehr mächtige ___ in der Atmosphäre.`,
        `Lightning is a very powerful ___ in the atmosphere.`,
        `A villám a légkörben nagyon erős ___ .`,
        `Fulgerul este o ___ foarte puternică în atmosferă.`,
        "de"
      ),
      ["Entladung", "discharge", "kisülés", "descărcare"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Wenn du über einen Teppich gehen, kann sich ___ aufbauen.`,
        `As you walk on a carpet, ___ can build up.`,
        `Ahogy a szőnyegen sétálsz, ___ lehet felépíteni.`,
        `Pe măsură ce mergi pe o covoară, se poate acumula ___ .`,
        "de"
      ),
      ["statische Elektrizität", "static electricity", "sztatikus elektromosság", "electricitate statică"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Blitzableiter schützt ein Gebäude, indem er die ___ zur Erde leitet.`,
        `A lightning rod protects a building by guiding the ___ to ground.`,
        `Egy villámhárító az épületet azáltal védi meg, hogy a ___ -et a földre vezeti.`,
        `Un para-fulger protejează o clădire prin dirijarea ___ la pământ.`,
        "de"
      ),
      ["Entladung", "discharge", "kisülés", "descărcare"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Du kannst statische Elektrizität spüren, wenn du deine Haare ___ .`,
        `You can feel static electricity when you brush your ___ .`,
        `Statikus elektromosságot érzel, amikor a ___ -ötcsiszolod.`,
        `Poți simți electricitate statică când te ___ .`,
        "de"
      ),
      ["bürstest", "brush", "kefélsz", "piepteni"]
    )
  );

  return questions;
}

// ─── 28. SIMPLE CIRCUITS (MCQ GENERATOR) ───────────────────────────────────

function generateSimpleCircuitsMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "magnetism";
  const subtopic = "simple_circuits";
  const questions: CurriculumMCQ[] = [];

  // Template 1: What components make a simple circuit? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Welche Komponenten sind in einem einfachen Stromkreis erforderlich?`,
      `What components make a simple circuit?`,
      `Milyen komponensek szükségesek egy egyszerű áramkörhöz?`,
      `Ce componente sunt necesare pentru un circuit simplu?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Batterie, Draht und Glühbirne",
        ["Nur eine Batterie", "Nur Draht", "Nur ein Schalter"],
        rng
      )
    );
  }

  // Template 2: What happens when switch is open? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was passiert, wenn ein Schalter offen ist?`,
      `What happens when a switch is open?`,
      `Mi történik, ha egy kapcsoló nyitva van?`,
      `Ce se întâmplă când un întrerupător este deschis?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Der Stromkreis ist unterbrochen",
        ["Der Strom fließt", "Die Glühbirne leuchtet", "Nichts passiert"],
        rng
      )
    );
  }

  // Template 3: Which material is a conductor? (7 versions)
  for (let i = 0; i < 7; i++) {
    const conductors = ["Kupfer", "Eisen", "Aluminium", "Silber"];
    const insulators = ["Gummi", "Kunststoff", "Glas", "Holz"];
    const question = q4(
      `Welches Material ist ein Stromleiter?`,
      `Which material is a conductor?`,
      `Melyik anyag egy vezető?`,
      `Care material este un conductor?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        pick(conductors, rng),
        insulators.slice(0, 3).map(() => pick(insulators, rng)),
        rng
      )
    );
  }

  // Template 4: What provides energy in a circuit? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was liefert die Energie in einem Stromkreis?`,
      `What provides energy in a circuit?`,
      `Mi biztosítja az energiát az áramkörben?`,
      `Ce furnizează energia într-un circuit?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Eine Batterie oder Stromquelle",
        ["Der Schalter", "Der Draht", "Die Glühbirne"],
        rng
      )
    );
  }

  // Template 5: What stops electricity flow? (7 versions)
  for (let i = 0; i < 7; i++) {
    const question = q4(
      `Was stoppt den Stromfluss in einem Stromkreis?`,
      `What stops the flow of electricity in a circuit?`,
      `Mi állítja meg az áramáramlást az áramkörben?`,
      `Ce oprește fluxul de electricitate într-un circuit?`,
      "de"
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        question,
        "Ein offener Schalter oder Unterbrechung",
        ["Eine Batterie", "Kupferdraht", "Eine Glühbirne"],
        rng
      )
    );
  }

  return questions;
}

// ─── 28. SIMPLE CIRCUITS (TYPING GENERATOR) ──────────────────────────────

function generateSimpleCircuitsTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "magnetism";
  const subtopic = "simple_circuits";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Stromkreis braucht eine Quelle, ___, und eine Last.`,
        `A circuit needs a source, ___, and a load.`,
        `Egy áramkörnek forrás, ___, és terhelés szükséges.`,
        `Un circuit are nevoie de o sursă, ___, și o sarcină.`,
        "de"
      ),
      ["Leiter", "conductor", "vezető", "conductor"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Materialien, die Elektrizität nicht leiten, heißen ___ .`,
        `Materials that do not conduct electricity are called ___ .`,
        `Az elektromosságot nem vezető anyagokat ___ -nak nevezik.`,
        `Materialele care nu conduc electricitate se numesc ___ .`,
        "de"
      ),
      ["Isolatoren", "insulators", "szigetelők", "izolatoare"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ ist ein Metalldraht, der Elektrizität leitet.`,
        `A ___ is a metal wire that conducts electricity.`,
        `Egy ___ egy fémdrót, amely vezeti az elektromosságot.`,
        `Un ___ este un fir metalic care conduce electricitatea.`,
        "de"
      ),
      ["Leiter", "conductor", "vezető", "conductor"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine ___ unterbricht einen Stromkreis und stoppt den Stromfluss.`,
        `A ___ breaks a circuit and stops the flow of electricity.`,
        `Egy ___ megszakítja az áramkört és megállítja az áramáramlást.`,
        `Un ___ întrerupe un circuit și oprește fluxul de electricitate.`,
        "de"
      ),
      ["Unterbrechung", "break", "szünet", "întrerupere"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine ___ liefert die elektrische Energie für den Stromkreis.`,
        `A ___ provides the electrical energy for the circuit.`,
        `Egy ___ biztosítja a villamos energiát az áramkörhöz.`,
        `O ___ furnizează energia electrică pentru circuit.`,
        "de"
      ),
      ["Batterie", "battery", "akkumulátor", "baterie"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ sind Materialien, die Elektrizität leicht durchlassen.`,
        `___ are materials that allow electricity to pass through easily.`,
        `A ___ olyan anyagok, amelyek könnyen engedik át az elektromosságot.`,
        `___ sunt materiale care permit electricității să treacă ușor.`,
        "de"
      ),
      ["Leiter", "Conductors", "Vezetők", "Conductori"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `In einem geschlossenen Stromkreis fließt ___ .`,
        `In a closed circuit, ___ flows.`,
        `Egy zárt áramkörben ___ folyik.`,
        `Într-un circuit închis, ___ curge.`,
        "de"
      ),
      ["Strom", "current", "áram", "curent"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Stromkreis mit nur einer Komponente ist ein ___ Stromkreis.`,
        `A circuit with only one component is a ___ circuit.`,
        `Egy csak egy komponenssel rendelkező áramkör egy ___ áramkör.`,
        `Un circuit cu o singură componentă este un circuit ___ .`,
        "de"
      ),
      ["einfacher", "simple", "egyszerű", "simplu"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine Glühbirne in einem Stromkreis wandelt elektrische Energie in ___ um.`,
        `A light bulb in a circuit converts electrical energy into ___ .`,
        `A izzó az áramkörben az elektromos energiát ___ alakítja.`,
        `O becă într-un circuit convertește energia electrică în ___ .`,
        "de"
      ),
      ["Licht und Wärme", "light and heat", "fény és hő", "lumină și căldură"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `____ sind Objekte, die in einem Stromkreis Energie verbrauchen.`,
        `____ are objects that use energy in a circuit.`,
        `A ____ olyan objektumok, amelyek az áramkörben energiát fogyasztanak.`,
        `____ sunt obiecte care consumă energie într-un circuit.`,
        "de"
      ),
      ["Lasten", "Loads", "Terhelések", "Sarcini"]
    )
  );

  return questions;
}

// ─── EXPORT & REGISTRATION ────────────────────────────────────────────────

export const MAGNETISM_GENERATORS = {
  magnets: generateMagnetsMCQ,
  magnets_typing: generateMagnetsTyping,
  magnetic_field: generateMagneticFieldMCQ,
  magnetic_field_typing: generateMagneticFieldTyping,
  static_electricity: generateStaticElectricityMCQ,
  static_electricity_typing: generateStaticElectricityTyping,
  simple_circuits: generateSimpleCircuitsMCQ,
  simple_circuits_typing: generateSimpleCircuitsTyping,
};

// Register with curriculum
setK5GeneratorMap({
  magnetism: MAGNETISM_GENERATORS,
});
