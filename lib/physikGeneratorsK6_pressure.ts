// ─── PHYSICS GENERATORS K6: PRESSURE ──────────────────────────────────────────────────
// "Druck" theme — Pressure basics with MCQ + Typing generators
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Formula: p = F / A (Pressure = Force / Area)
// Unit: Pascal (Pa) = N/m²

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

// ─── 1. PRESSURE BASICS ────────────────────────────────────────────────────

const PRESSURE_BASICS_DATA = {
  examples: [
    { en: "standing on ice", de: "auf Eis stehen", hu: "jégen állás", ro: "stând pe gheață" },
    { en: "lying on a bed", de: "auf einem Bett liegen", hu: "ágyon fekvés", ro: "zăcând pe pat" },
    { en: "a knife cutting through bread", de: "ein Messer schneidet Brot", hu: "kés szalonnát vág", ro: "un cuțit tăiat pâine" },
    { en: "a thumbtack on a wall", de: "eine Heftzwecke an der Wand", hu: "gombostű a falon", ro: "un pionez pe perete" },
    { en: "high heels vs flat shoes", de: "High Heels vs flache Schuhe", hu: "magas sarkú vs lapos cipő", ro: "toc înalt vs pantofi plani" },
    { en: "a scuba diver underwater", de: "ein Taucher unter Wasser", hu: "búvár a víz alatt", ro: "un scafandru sub apă" },
    { en: "air pressure in a bicycle tire", de: "Luftdruck in einem Fahrradreifen", hu: "levegőnyomás kerékpár abroncsban", ro: "presiunea aerului într-o anvelopă" },
    { en: "stepping in snow", de: "im Schnee treten", hu: "hóban lépés", ro: "pasul în zăpadă" },
  ],

  units: [
    { en: "Pascal", de: "Pascal", hu: "Pascal", ro: "Pascal" },
    { en: "N/m²", de: "N/m²", hu: "N/m²", ro: "N/m²" },
    { en: "Pa", de: "Pa", hu: "Pa", ro: "Pa" },
  ],

  conversions: [
    { en: "1 Pascal = 1 N/m²", de: "1 Pascal = 1 N/m²", hu: "1 Pascal = 1 N/m²", ro: "1 Pascal = 1 N/m²" },
    { en: "1 atm ≈ 101,325 Pa", de: "1 atm ≈ 101.325 Pa", hu: "1 atm ≈ 101 325 Pa", ro: "1 atm ≈ 101.325 Pa" },
  ],
};

export function generatePressureBasicsMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is pressure?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Was ist Druck (Pressure)?", "What is pressure?", "Mit az nyomás?", "Ce este presiunea?", lang),
      q4("Die Kraft, die pro Flächeneinheit ausgeübt wird", "The force exerted per unit area", "Az erő, amely egységnyi terület alatt gyakorol", "Forța exercitată pe unitate de suprafață", lang),
      [
        q4("Die Gesamtkraft auf ein Objekt", "The total force on an object", "Az objektum teljes ereje", "Forța totală pe un obiect", lang),
        q4("Die Bewegung einer Flüssigkeit", "The movement of a liquid", "A folyadék mozgása", "Mișcarea unui lichid", lang),
        q4("Die Dichte eines Materials", "The density of a material", "Az anyag sűrűsége", "Densitatea unui material", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of pressure?"
  for (let i = 0; i < 8; i++) {
    const example = pick(PRESSURE_BASICS_DATA.examples, rng);
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4(`Welches ist ein Beispiel für Druck?`, `Which is an example of pressure?`, `Melyik egy nyomás példája?`, `Care este un exemplu de presiune?`, lang),
      example[lang as "en"],
      PRESSURE_BASICS_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is the formula for pressure?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Was ist die Formel für Druck?", "What is the formula for pressure?", "Mi a nyomás képlete?", "Care este formula presiunii?", lang),
      q4("p = F / A (Druck = Kraft / Fläche)", "p = F / A (Pressure = Force / Area)", "p = F / A (nyomás = erő / terület)", "p = F / A (presiune = forță / arie)", lang),
      [
        q4("p = F × A", "p = F × A", "p = F × A", "p = F × A", lang),
        q4("p = A / F", "p = A / F", "p = A / F", "p = A / F", lang),
        q4("p = F + A", "p = F + A", "p = F + A", "p = F + A", lang),
      ],
      rng
    ));
  }

  // Template 4: "What is the unit of pressure?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Was ist die Einheit des Drucks?", "What is the unit of pressure?", "Mi a nyomás egysége?", "Care este unitatea presiunii?", lang),
      q4("Pascal (Pa) oder N/m²", "Pascal (Pa) or N/m²", "Pascal (Pa) vagy N/m²", "Pascal (Pa) sau N/m²", lang),
      [
        q4("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)", lang),
        q4("Kilogramm (kg)", "Kilogram (kg)", "Kilogramm (kg)", "Kilogram (kg)", lang),
        q4("Meter (m)", "Meter (m)", "Méter (m)", "Metru (m)", lang),
      ],
      rng
    ));
  }

  // Template 5: "If you decrease the area..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Wenn du die Fläche verringern, dann...", "If you decrease the area, then...", "Ha csökkented a terület, akkor...", "Dacă scazi aria, atunci...", lang),
      q4("erhöht sich der Druck", "pressure increases", "a nyomás nő", "presiunea crește", lang),
      [
        q4("verringert sich der Druck", "pressure decreases", "a nyomás csökken", "presiunea scade", lang),
        q4("bleibt der Druck gleich", "pressure stays the same", "a nyomás ugyanaz marad", "presiunea rămâne aceeași", lang),
      ],
      rng
    ));
  }

  // Template 6: "If you increase the force..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Wenn du die Kraft erhöhst, dann...", "If you increase the force, then...", "Ha növelted az erőt, akkor...", "Dacă crești forța, atunci...", lang),
      q4("erhöht sich der Druck", "pressure increases", "a nyomás nő", "presiunea crește", lang),
      [
        q4("verringert sich der Druck", "pressure decreases", "a nyomás csökken", "presiunea scade", lang),
        q4("bleibt der Druck gleich", "pressure stays the same", "a nyomás ugyanaz marad", "presiunea rămâne aceeași", lang),
      ],
      rng
    ));
  }

  // Template 7: "Why do sharp objects...?"
  for (let i = 0; i < 3; i++) {
    questions.push(createMCQ(
      "pressure",
      "pressure_basics",
      q4("Warum sind scharfe Objekte wirksamer als stumpfe?", "Why are sharp objects more effective than dull ones?", "Miért hatékonyabbak az éles tárgyak, mint a tompa?", "De ce sunt mai eficiente obiectele ascuțite decât cele obtuze?", lang),
      q4("Sie konzentrieren die Kraft auf eine kleinere Fläche", "They concentrate force on a smaller area", "Az erőt egy kisebb területre koncentrálják", "Concentrează forța pe o suprafață mai mică", lang),
      [
        q4("Sie üben mehr Kraft aus", "They exert more force", "Több erőt gyakorolnak", "Exercită mai multă forță", lang),
        q4("Sie haben weniger Gewicht", "They weigh less", "Kevesebbet nyomnak", "Au mai puțin greutate", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generatePressureBasicsTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("pressure", "pressure_basics",
      q4("Definiere, was Druck ist und gib die Formel an.", "Define pressure and give the formula.", "Határozd meg, mi a nyomás, és add meg a képletet.", "Definește presiunea și dă formula.", lang),
      ["force", "Kraft", "erő", "forță", "area", "Fläche", "terület", "arie", "p = F/A", "divided by"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Was ist Pascal und wie wird es abgekürzt?", "What is Pascal and how is it abbreviated?", "Mit az Pascal és hogyan rövidítik?", "Ce este Pascal și cum se abreviază?", lang),
      ["Pa", "pascal", "unit", "Einheit", "egység", "unitate", "pressure", "N/m²"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Gib drei Beispiele für Druck im Alltag.", "Give three examples of pressure in everyday life.", "Add meg három nyomás példát a mindennapi életből.", "Dă trei exemple de presiune în viața de zi cu zi.", lang),
      ["standing", "stehen", "állás", "stând", "ice", "Eis", "jég", "gheață", "knife", "Messer", "kés", "cuțit", "sharp", "scharf", "éles", "ascuțit", "thumbtack", "Heftzwecke", "gombostű", "pionez"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Wie sind Kraft, Fläche und Druck verbunden?", "How are force, area, and pressure related?", "Hogyan kapcsolódnak az erő, terület és nyomás?", "Cum sunt forța, aria și presiunea legate?", lang),
      ["force divided by area", "Kraft geteilt durch Fläche", "erő osztva területtel", "forță împărțită la arie", "inverse", "inversely proportional", "fordított arányosság"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Was passiert mit dem Druck, wenn die Fläche kleiner wird?", "What happens to pressure when area becomes smaller?", "Mit történik a nyomással, ha a terület kisebb lesz?", "Ce se întâmplă cu presiunea când aria devine mai mică?", lang),
      ["increases", "steigt", "nő", "crește", "pressure increases", "Druck nimmt zu", "nyomás nő", "presiunea crește"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Was passiert mit dem Druck, wenn die Kraft größer wird?", "What happens to pressure when force becomes greater?", "Mit történik a nyomással, ha az erő nagyobb lesz?", "Ce se întâmplă cu presiunea când forța devine mai mare?", lang),
      ["increases", "steigt", "nő", "crește", "pressure increases", "Druck nimmt zu", "nyomás nő", "presiunea crește"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Warum schneiden scharfe Messer besser als stumpfe?", "Why do sharp knives cut better than dull ones?", "Miért vágnak jobban az éles kések, mint a tompa?", "De ce vopsesc mai bine cuțitele ascuțite decât cele obtuze?", lang),
      ["pressure", "Druck", "nyomás", "presiune", "smaller area", "kleinere Fläche", "kisebb terület", "arie mai mică", "concentrated force", "konzentrierte Kraft", "koncentrált erő", "forță concentrată"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Erkläre, warum es schwer ist, auf Eis zu laufen.", "Explain why it is hard to walk on ice.", "Magyarázd meg, miért nehéz a jégen járni.", "Explică de ce este greu să mergi pe gheață.", lang),
      ["low friction", "niedrige Reibung", "alacsony súrlódás", "frecare scăzută", "pressure", "Druck", "nyomás", "presiune", "slippery", "rutschig", "csúszós", "alunecos"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Umrechnung: 1 Pascal = ?", "Conversion: 1 Pascal = ?", "Átváltás: 1 Pascal = ?", "Conversie: 1 Pascal = ?", lang),
      ["1 N/m²", "one newton per square meter", "egy newton per négyzetméter", "un newton pe metru pătrat"]
    ),

    createTyping("pressure", "pressure_basics",
      q4("Beschreibe, wie ein Fußball Druck ausübt.", "Describe how a soccer ball exerts pressure.", "Írj le, hogyan gyakorol nyomást egy futballlabda.", "Descrie cum exercită presiune o minge de fotbal.", lang),
      ["air pressure", "Luftdruck", "levegőnyomás", "presiune aer", "inside the ball", "innen im Ball", "a labdán belül", "în interiorul mingii", "air molecules", "Luftmoleküle", "levegő molekulák", "molecule aer"]
    ),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_PRESSURE_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  pressure_basics: (lang = "en", seed = 0) => [...generatePressureBasicsMCQ(lang, seed), ...generatePressureBasicsTyping(lang, seed)],
  pressure_basics_mcq: (lang = "en", seed = 0) => generatePressureBasicsMCQ(lang, seed),
  pressure_basics_typing: (lang = "en", seed = 0) => generatePressureBasicsTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
