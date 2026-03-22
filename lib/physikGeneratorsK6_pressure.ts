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

// ─── 2. LIQUID PRESSURE ────────────────────────────────────────────────────

const LIQUID_PRESSURE_DATA = {
  examples: [
    { en: "water at the bottom of a swimming pool", de: "Wasser am Boden eines Schwimmbades", hu: "víz az uszoda alján", ro: "apă la fundul unei piscine" },
    { en: "a dam holding back water", de: "ein Staudamm hält Wasser zurück", hu: "gát által visszatartott víz", ro: "o baraj care ține apă" },
    { en: "pressure in water pipes", de: "Druck in Wasserleitungen", hu: "nyomás vízvezetékben", ro: "presiune în conductele de apă" },
    { en: "scuba diving deeper underwater", de: "Tauchen tiefer unter Wasser", hu: "búvárkodás mélyebben", ro: "scuba diving mai adânc" },
    { en: "a hydraulic press", de: "eine hydraulische Presse", hu: "hidraulikus sajtó", ro: "o presă hidraulică" },
    { en: "blood pressure in arteries", de: "Blutdruck in Arterien", hu: "vérnyomás az artériákban", ro: "presiunea sângelui în arterii" },
    { en: "a water tower", de: "ein Wasserturm", hu: "víztorony", ro: "o turn de apă" },
    { en: "an aquarium glass under pressure", de: "Aquariumglas unter Druck", hu: "akváriumüveg nyomás alatt", ro: "sticlă de acvariu sub presiune" },
  ],

  depths: [
    { depth: 1, en: "1 meter deep", de: "1 Meter tief", hu: "1 méter mélyen", ro: "1 metru adânc" },
    { depth: 5, en: "5 meters deep", de: "5 Meter tief", hu: "5 méter mélyen", ro: "5 metri adânc" },
    { depth: 10, en: "10 meters deep", de: "10 Meter tief", hu: "10 méter mélyen", ro: "10 metri adânc" },
  ],

  properties: [
    { en: "depth", de: "Tiefe", hu: "mélység", ro: "adâncime" },
    { en: "density", de: "Dichte", hu: "sűrűség", ro: "densitate" },
    { en: "connected vessels", de: "verbundene Gefäße", hu: "összefüggő edények", ro: "vase conectate" },
    { en: "gravity", de: "Schwerkraft", hu: "gravitáció", ro: "gravitație" },
  ],
};

export function generateLiquidPressureMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is liquid pressure?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("Was ist Flüssigkeitsdruck?", "What is liquid pressure?", "Mit a folyadéknyomás?", "Ce este presiunea lichidului?", lang),
      q4("Der Druck, der von einer Flüssigkeit aufgrund ihrer Gewicht und Tiefe ausgeübt wird", "The pressure exerted by a liquid due to its weight and depth", "A folyadék által súlya és mélysége miatt kifejtett nyomás", "Presiunea exercitată de un lichid din cauza greutății și adâncimii sale", lang),
      [
        q4("Der Druck von Gasmolekülen", "The pressure of gas molecules", "Gázmolekulák nyomása", "Presiunea moleculelor de gaz", lang),
        q4("Der Druck auf der Oberfläche der Flüssigkeit", "The pressure on the surface of the liquid", "Nyomás a folyadék felszínén", "Presiunea pe suprafața lichidului", lang),
        q4("Die Bewegungsgeschwindigkeit der Flüssigkeit", "The speed of movement of the liquid", "A folyadék mozgásának sebessége", "Viteza de mișcare a lichidului", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of liquid pressure?"
  for (let i = 0; i < 8; i++) {
    const example = pick(LIQUID_PRESSURE_DATA.examples, rng);
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4(`Welches ist ein Beispiel für Flüssigkeitsdruck?`, `Which is an example of liquid pressure?`, `Melyik egy folyadéknyomás példája?`, `Care este un exemplu de presiune lichidului?`, lang),
      example[lang as "en"],
      LIQUID_PRESSURE_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is the formula for liquid pressure?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("Was ist die Formel für Flüssigkeitsdruck?", "What is the formula for liquid pressure?", "Mi a folyadéknyomás képlete?", "Care este formula presiunii lichidului?", lang),
      q4("p = ρ × g × h (Druck = Dichte × Schwerkraft × Höhe/Tiefe)", "p = ρ × g × h (Pressure = Density × Gravity × Height/Depth)", "p = ρ × g × h (nyomás = sűrűség × gravitáció × magasság/mélység)", "p = ρ × g × h (presiune = densitate × gravitație × înălțime/adâncime)", lang),
      [
        q4("p = ρ + g + h", "p = ρ + g + h", "p = ρ + g + h", "p = ρ + g + h", lang),
        q4("p = ρ / g / h", "p = ρ / g / h", "p = ρ / g / h", "p = ρ / g / h", lang),
        q4("p = g × h / ρ", "p = g × h / ρ", "p = g × h / ρ", "p = g × h / ρ", lang),
      ],
      rng
    ));
  }

  // Template 4: "How does depth affect pressure?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("Wie beeinflusst die Tiefe den Druck?", "How does depth affect pressure?", "Hogyan befolyásolja a mélység a nyomást?", "Cum afectează adâncimea presiunea?", lang),
      q4("Je tiefer, desto größer der Druck", "The deeper, the greater the pressure", "Minél mélyebb, annál nagyobb a nyomás", "Cu cât mai adânc, cu atât mai mare presiunea", lang),
      [
        q4("Je tiefer, desto kleiner der Druck", "The deeper, the smaller the pressure", "Minél mélyebb, annál kisebb a nyomás", "Cu cât mai adânc, cu atât mai mică presiunea", lang),
        q4("Die Tiefe hat keinen Einfluss", "Depth has no effect", "A mélységnek nincs hatása", "Adâncimea nu are efect", lang),
      ],
      rng
    ));
  }

  // Template 5: "What are connected vessels?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("Was sind verbundene Gefäße?", "What are connected vessels?", "Mit az összefüggő edények?", "Ce sunt vasele conectate?", lang),
      q4("Gefäße, die durch eine Röhre verbunden sind, mit gleicher Flüssigkeitshöhe", "Vessels connected by a tube with equal liquid height at the same level", "Edények, amelyeket egy cső köt össze, azonos folyadékmagassággal", "Vase conectate printr-o țeavă cu înălțime egală a lichidului", lang),
      [
        q4("Gefäße mit unterschiedlicher Größe", "Vessels of different sizes", "Különböző méretű edények", "Vase de dimensiuni diferite", lang),
        q4("Gefäße, die fester geschlossen sind", "Vessels that are closed tighter", "Szorosan zárt edények", "Vase care sunt mai bine închise", lang),
      ],
      rng
    ));
  }

  // Template 6: "In connected vessels, the liquid level..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("In verbundenen Gefäßen ist der Flüssigkeitspegel...", "In connected vessels, the liquid level is...", "Összefüggő edényekben a folyadékszint...", "În vasele conectate, nivelul lichidului este...", lang),
      q4("auf gleicher Höhe in beiden Gefäßen", "at the same level in both vessels", "azonos magasságban mindkét edényben", "la același nivel în ambele vase", lang),
      [
        q4("höher im breiteren Gefäß", "higher in the wider vessel", "magasabban a szélesebb edényben", "mai înalt în vasul mai larg", lang),
        q4("abhängig vom Material des Gefäßes", "dependent on the vessel material", "az edény anyagától függ", "dependent de materialul vasului", lang),
      ],
      rng
    ));
  }

  // Template 7: "Why does pressure increase with depth?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "liquid_pressure",
      q4("Warum nimmt der Druck mit der Tiefe zu?", "Why does pressure increase with depth?", "Miért nő a nyomás a mélységgel?", "De ce crește presiunea cu adâncimea?", lang),
      q4("Wegen des Gewichts der Flüssigkeit über dem Punkt", "Due to the weight of the liquid above the point", "A felül lévő folyadék súlya miatt", "Din cauza greutății lichidului deasupra punctului", lang),
      [
        q4("Wegen der Temperatur der Flüssigkeit", "Due to the temperature of the liquid", "A folyadék hőmérséklete miatt", "Din cauza temperaturii lichidului", lang),
        q4("Wegen der Farbe der Flüssigkeit", "Due to the color of the liquid", "A folyadék színe miatt", "Din cauza culorii lichidului", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateLiquidPressureTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("pressure", "liquid_pressure",
      q4("Definiere Flüssigkeitsdruck und gib die Formel an.", "Define liquid pressure and give the formula.", "Határozd meg a folyadéknyomást és add meg a képletet.", "Definește presiunea lichidului și dă formula.", lang),
      ["liquid", "Flüssigkeit", "folyadék", "lichid", "weight", "Gewicht", "súly", "greutate", "depth", "Tiefe", "mélység", "adâncime", "p = ρ × g × h"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Gib drei Beispiele für Flüssigkeitsdruck im Alltag.", "Give three examples of liquid pressure in everyday life.", "Add meg három folyadéknyomás példát a mindennapi életből.", "Dă trei exemple de presiune lichidului în viața de zi cu zi.", lang),
      ["swimming pool", "Schwimmbad", "uszoda", "piscină", "dam", "Staudamm", "gát", "baraj", "water pipes", "Wasserleitungen", "vízvezeték", "conducte apă", "scuba diving", "Tauchen", "búvárkodás", "scuba", "hydraulic press", "hydraulische Presse", "hidraulikus sajtó"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Was sind verbundene Gefäße?", "What are connected vessels?", "Mit az összefüggő edények?", "Ce sunt vasele conectate?", lang),
      ["connected", "verbunden", "összefüggő", "conectate", "vessels", "Gefäße", "edények", "vase", "equal level", "gleiche Höhe", "azonos szint", "nivel egal"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Wie beeinflusst Tiefe den Flüssigkeitsdruck?", "How does depth affect liquid pressure?", "Hogyan befolyásolja a mélység a folyadéknyomást?", "Cum afectează adâncimea presiunea lichidului?", lang),
      ["increases", "nimmt zu", "nő", "crește", "deeper", "tiefer", "mélyebb", "mai adânc", "greater pressure", "größerer Druck", "nagyobb nyomás", "presiune mai mare"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Was sind die Variablen in der Formel p = ρ × g × h?", "What are the variables in the formula p = ρ × g × h?", "Melyek az f = ρ × g × h képlet változói?", "Care sunt variabilele din formula p = ρ × g × h?", lang),
      ["density", "Dichte", "sűrűség", "densitate", "gravity", "Schwerkraft", "gravitáció", "gravitație", "height", "Höhe", "magasság", "înălțime", "depth", "Tiefe", "mélység", "adâncime"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Warum ist der Druck am Grund eines Sees größer als an der Oberfläche?", "Why is pressure at the bottom of a lake greater than at the surface?", "Miért nagyobb a nyomás a tó fenekén, mint a felszínen?", "De ce este presiunea la fundul unui lac mai mare decât la suprafață?", lang),
      ["weight", "Gewicht", "súly", "greutate", "liquid above", "Flüssigkeit darüber", "felül lévő folyadék", "lichid deasupra", "depth", "Tiefe", "mélység", "adâncime"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Erkläre das Prinzip der verbundenen Gefäße.", "Explain the principle of connected vessels.", "Magyarázd meg az összefüggő edények elvét.", "Explică principiul vaselor conectate.", lang),
      ["equal", "gleich", "egyenlő", "egal", "level", "Höhe", "szint", "nivel", "connected", "verbunden", "összefüggő", "conectate", "pressure", "Druck", "nyomás", "presiune"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Wie nutzen Hydraulikpressen den Flüssigkeitsdruck?", "How do hydraulic presses use liquid pressure?", "Hogyan használnak hidraulikus sajtók a folyadéknyomást?", "Cum folosesc presele hidraulice presiunea lichidului?", lang),
      ["force", "Kraft", "erő", "forță", "multiply", "vervielfachen", "megsokszorozni", "înmulți", "pressure", "Druck", "nyomás", "presiune", "transmission"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Was ist die Dichte von Wasser und wie wirkt sie sich auf den Druck aus?", "What is the density of water and how does it affect pressure?", "Mi a víz sűrűsége és hogyan befolyásolja a nyomást?", "Care este densitatea apei și cum o afectează pe presiune?", lang),
      ["1000 kg/m³", "density", "Dichte", "sűrűség", "densitate", "affects", "beeinflusst", "befolyásol", "afectează"]
    ),

    createTyping("pressure", "liquid_pressure",
      q4("Beschreibe, warum Taucher einen Tauchanzug brauchen.", "Describe why divers need a diving suit.", "Írj le, miért szükségesek a búvároknak búvárruhák.", "Descrie de ce au nevoie scafandrii de costume de scufundare.", lang),
      ["pressure", "Druck", "nyomás", "presiune", "depth", "Tiefe", "mélység", "adâncime", "protect", "schützen", "védeni", "proteja", "body"]
    ),
  ];
}

// ─── 3. ATMOSPHERIC PRESSURE ───────────────────────────────────────────────

const ATMOSPHERIC_PRESSURE_DATA = {
  examples: [
    { en: "a barometer", de: "ein Barometer", hu: "barométer", ro: "un barometru" },
    { en: "weather prediction", de: "Wettervorhersage", hu: "időjárás előrejelzés", ro: "predicție meteo" },
    { en: "altitude effects on climate", de: "Höheneffekte auf Klima", hu: "magasság hatása az éghajlatra", ro: "efecte altitudinii pe climă" },
    { en: "airplane cabin pressure", de: "Flugzeugkabinendruck", hu: "repülőgép kabin nyomás", ro: "presiune cabină avion" },
    { en: "mountain climbing difficulty", de: "Schwierigkeit beim Bergsteigen", hu: "hegymászás nehézsége", ro: "dificultatea alpinismului" },
    { en: "boiling point of water changing with altitude", de: "Siedepunkt von Wasser ändert sich mit Höhe", hu: "víz forráspontja magassággal változik", ro: "punctul de fierbere al apei se schimbă cu altitudine" },
    { en: "vacuum experiment", de: "Vakuumexperiment", hu: "vákuum kísérlet", ro: "experiment în vid" },
    { en: "suction cup on a wall", de: "Saugnapf an der Wand", hu: "szívócsésze a falon", ro: "o ventuză pe perete" },
  ],

  values: [
    { en: "101,325 Pa (sea level)", de: "101.325 Pa (Meereshöhe)", hu: "101 325 Pa (tengerszint)", ro: "101.325 Pa (nivel mării)" },
    { en: "1 atmosphere (atm)", de: "1 Atmosphäre (atm)", hu: "1 légkör (atm)", ro: "1 atmosferă (atm)" },
    { en: "1 bar ≈ 100,000 Pa", de: "1 bar ≈ 100.000 Pa", hu: "1 bar ≈ 100 000 Pa", ro: "1 bar ≈ 100.000 Pa" },
  ],

  properties: [
    { en: "altitude", de: "Höhe", hu: "magasság", ro: "altitudine" },
    { en: "barometer", de: "Barometer", hu: "barométer", ro: "barometru" },
    { en: "weather systems", de: "Wettersysteme", hu: "időjárási rendszerek", ro: "sisteme meteo" },
    { en: "inversely proportional to altitude", de: "umgekehrt proportional zur Höhe", hu: "fordítottan arányos a magassággal", ro: "invers proporțional cu altitudinea" },
  ],
};

export function generateAtmosphericPressureMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is atmospheric pressure?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Was ist Luftdruck (atmosphärischer Druck)?", "What is atmospheric pressure?", "Mit a légnyomás?", "Ce este presiunea atmosferică?", lang),
      q4("Der Druck, der durch das Gewicht der Luft über uns ausgeübt wird", "The pressure exerted by the weight of air above us", "Az a nyomás, amelyet a felettünk lévő levegő súlya gyakorol", "Presiunea exercitată de greutatea aerului de deasupra noastră", lang),
      [
        q4("Der Druck von Wind und Stürmen", "The pressure of wind and storms", "Szél és viharok nyomása", "Presiunea vântului și furtunilor", lang),
        q4("Der Druck von Wasserdampf in der Atmosphäre", "The pressure of water vapor in the atmosphere", "Gőz nyomása az atmoszférában", "Presiunea vaporilor de apă în atmosferă", lang),
        q4("Der Druck der Sonne auf die Erde", "The pressure of the sun on Earth", "Nap nyomása a Földre", "Presiunea soarelui pe Pământ", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of atmospheric pressure?"
  for (let i = 0; i < 8; i++) {
    const example = pick(ATMOSPHERIC_PRESSURE_DATA.examples, rng);
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4(`Welches ist ein Beispiel für Luftdruck?`, `Which is an example of atmospheric pressure?`, `Melyik egy légnyomás példája?`, `Care este un exemplu de presiune atmosferică?`, lang),
      example[lang as "en"],
      ATMOSPHERIC_PRESSURE_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is the standard atmospheric pressure at sea level?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Was ist der Standard-Luftdruck auf Meereshöhe?", "What is the standard atmospheric pressure at sea level?", "Mi a standard légnyomás tengerszinten?", "Care este presiunea atmosferică standard la nivelul mării?", lang),
      q4("101,325 Pa oder 1 atm", "101,325 Pa or 1 atm", "101 325 Pa vagy 1 atm", "101.325 Pa sau 1 atm", lang),
      [
        q4("50,000 Pa", "50,000 Pa", "50 000 Pa", "50.000 Pa", lang),
        q4("200,000 Pa", "200,000 Pa", "200 000 Pa", "200.000 Pa", lang),
        q4("150,000 Pa", "150,000 Pa", "150 000 Pa", "150.000 Pa", lang),
      ],
      rng
    ));
  }

  // Template 4: "How does altitude affect atmospheric pressure?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Wie beeinflusst die Höhe den Luftdruck?", "How does altitude affect atmospheric pressure?", "Hogyan befolyásolja a magasság a légnyomást?", "Cum afectează altitudinea presiunea atmosferică?", lang),
      q4("Je höher, desto niedriger der Luftdruck", "The higher, the lower the atmospheric pressure", "Minél magasabb, annál alacsonyabb a légnyomás", "Cu cât mai înalt, cu atât mai mică presiunea", lang),
      [
        q4("Je höher, desto höher der Luftdruck", "The higher, the higher the pressure", "Minél magasabb, annál magasabb a légnyomás", "Cu cât mai înalt, cu atât mai mare presiunea", lang),
        q4("Die Höhe hat keinen Einfluss", "Altitude has no effect", "A magasságnak nincs hatása", "Altitudinea nu are efect", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is a barometer used for?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Wofür wird ein Barometer verwendet?", "What is a barometer used for?", "Mire használnak barométert?", "Pentru ce se folosește un barometru?", lang),
      q4("Um den Luftdruck zu messen", "To measure atmospheric pressure", "A légnyomás mérésére", "Pentru a măsura presiunea atmosferică", lang),
      [
        q4("Um die Temperatur zu messen", "To measure temperature", "A hőmérséklet mérésére", "Pentru a măsura temperatura", lang),
        q4("Um die Windgeschwindigkeit zu messen", "To measure wind speed", "A szél sebességének mérésére", "Pentru a măsura viteza vântului", lang),
        q4("Um Höhen zu messen", "To measure heights", "A magassági mérésre", "Pentru a măsura înălțimi", lang),
      ],
      rng
    ));
  }

  // Template 6: "How does atmospheric pressure relate to weather?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Wie hängt der Luftdruck mit dem Wetter zusammen?", "How does atmospheric pressure relate to weather?", "Hogyan kapcsolódik a légnyomás az időjáráshoz?", "Cum se raportează presiunea atmosferică la vreme?", lang),
      q4("Niedriger Druck bringt schlechtes Wetter, hoher Druck bringt gutes Wetter", "Low pressure brings bad weather, high pressure brings good weather", "Alacsony nyomás rossz időt hoz, magas nyomás jó időt", "Presiunea scăzută aduce vreme rea, presiunea ridicată aduce vreme bună", lang),
      [
        q4("Der Luftdruck hat keinen Einfluss auf das Wetter", "Pressure has no effect on weather", "A légnyomásnak nincs hatása az időjárásra", "Presiunea nu afectează vremea", lang),
        q4("Nur hoher Druck hat einen Einfluss", "Only high pressure has an effect", "Csak a magas nyomás hat", "Doar presiunea ridicată are efect", lang),
      ],
      rng
    ));
  }

  // Template 7: "Why is a suction cup effective?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "atmospheric_pressure",
      q4("Warum ist ein Saugnapf wirksam?", "Why is a suction cup effective?", "Miért hatékony a szívócsésze?", "De ce este eficace o ventuză?", lang),
      q4("Weil der Luftdruck es gegen die Oberfläche drückt", "Because atmospheric pressure pushes it against the surface", "Mert a légnyomás az felületre nyomja", "Pentru că presiunea atmosferică o apasă pe suprafață", lang),
      [
        q4("Weil es eine Klebstoff enthält", "Because it contains adhesive", "Mert ragasztót tartalmaz", "Pentru că conține adeziv", lang),
        q4("Weil es unter Wasser wirksamer ist", "Because it works better underwater", "Mert jobban működik víz alatt", "Pentru că funcționează mai bine sub apă", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateAtmosphericPressureTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("pressure", "atmospheric_pressure",
      q4("Definiere Luftdruck und gib den Standard-Wert an.", "Define atmospheric pressure and give the standard value.", "Határozd meg a légnyomást és add meg a standard értéket.", "Definește presiunea atmosferică și dă valoarea standard.", lang),
      ["air weight", "Luftgewicht", "levegősúly", "greutate aer", "101,325 Pa", "101325", "1 atm", "atmosphere"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Was ist ein Barometer und wie funktioniert es?", "What is a barometer and how does it work?", "Mit az egy barométer és hogyan működik?", "Ce este un barometru și cum funcționează?", lang),
      ["measures", "misst", "mér", "măsoară", "pressure", "Druck", "nyomás", "presiune", "atmospheric", "atmosphärisch", "légköri", "atmosferică", "mercury", "Quecksilber", "higanyz", "mercur"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Gib drei Beispiele für Luftdruck im Alltag.", "Give three examples of atmospheric pressure in everyday life.", "Add meg három légnyomás példát a mindennapi életből.", "Dă trei exemple de presiune atmosferică în viața de zi cu zi.", lang),
      ["barometer", "Barometer", "barométer", "barometru", "weather", "Wetter", "időjárás", "vreme", "altitude", "Höhe", "magasság", "altitudine", "plane", "Flugzeug", "repülőgép", "avion", "mountain", "Berg", "hegy", "munte"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Wie beeinflusst Höhe den Luftdruck?", "How does altitude affect atmospheric pressure?", "Hogyan befolyásolja a magasság a légnyomást?", "Cum afectează altitudinea presiunea atmosferică?", lang),
      ["decreases", "nimmt ab", "csökken", "scade", "higher", "höher", "magasabb", "mai înalt", "lower pressure", "niedrigerer Druck", "alacsonyabb nyomás", "presiune mai scăzută"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Was ist die Einheit zur Messung von Luftdruck?", "What is the unit for measuring atmospheric pressure?", "Mi a légnyomás mérésének egysége?", "Care este unitatea de măsurare a presiunii atmosferice?", lang),
      ["pascal", "Pa", "pascal", "Pa", "atm", "atmosphere", "bar", "millibar"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Warum ist das Atmen auf hohen Bergen schwerer?", "Why is breathing harder at high altitudes?", "Miért nehezebb a levegővétel magas hegyen?", "De ce este respirația mai greu la altitudini mari?", lang),
      ["lower pressure", "niedrigerer Druck", "alacsonyabb nyomás", "presiune mai scăzută", "less oxygen", "weniger Sauerstoff", "kevesebb oxigén", "mai puțin oxigen", "thin air", "dünne Luft", "ritka levegő", "aer rar"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Erkläre, wie ein Barometer funktioniert.", "Explain how a barometer works.", "Magyarázd meg, hogyan működik egy barométer.", "Explică cum funcționează un barometru.", lang),
      ["mercury", "Quecksilber", "higanyz", "mercur", "rises", "steigt", "emelkedik", "se ridică", "falls", "fällt", "esik", "cade", "pressure", "Druck", "nyomás", "presiune"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Was ist der Zusammenhang zwischen Luftdruck und Wetter?", "What is the relationship between pressure and weather?", "Mi a légnyomás és az időjárás közötti kapcsolat?", "Care este relația dintre presiune și vreme?", lang),
      ["low pressure", "niedriger Druck", "alacsony nyomás", "presiune scăzută", "bad weather", "schlechtes Wetter", "rossz idő", "vreme rea", "high pressure", "hoher Druck", "magas nyomás", "presiune ridicată", "good weather"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Warum funktioniert ein Saugnapf?", "Why does a suction cup work?", "Miért működik a szívócsésze?", "De ce funcționează o ventuză?", lang),
      ["atmospheric pressure", "Luftdruck", "légnyomás", "presiune atmosferică", "pushes", "drückt", "nyom", "apasă", "surface", "Oberfläche", "felület", "suprafață"]
    ),

    createTyping("pressure", "atmospheric_pressure",
      q4("Beschreibe, wie Flugzeugkabinen druckgekuppelt werden.", "Describe how airplane cabins are pressurized.", "Írj le, hogyan nyomástartóan lezárják a repülőgép kabinit.", "Descrie cum sunt presate cabinele avioanelor.", lang),
      ["maintain", "bewahren", "fenntartani", "menține", "pressure", "Druck", "nyomás", "presiune", "altitude", "Höhe", "magasság", "altitudine", "passengers", "Passagiere", "utasok", "pasageri", "oxygen", "Sauerstoff", "oxigén"]
    ),
  ];
}

// ─── 4. HYDRAULICS ────────────────────────────────────────────────────────

const HYDRAULICS_DATA = {
  examples: [
    { en: "a hydraulic lift (car jack)", de: "ein hydraulischer Heber (Wagenheber)", hu: "hidraulikus emelő (autóemelő)", ro: "un lift hidraulic (cric auto)" },
    { en: "hydraulic brakes in cars", de: "hydraulische Bremsen in Autos", hu: "hidraulikus fékek autókban", ro: "frâne hidraulice în mașini" },
    { en: "a hydraulic press", de: "eine hydraulische Presse", hu: "hidraulikus sajtó", ro: "o presă hidraulică" },
    { en: "bulldozer bucket", de: "Schaufel eines Baggers", hu: "buldózer kanál", ro: "cupă buldozer" },
    { en: "excavator arm", de: "Arm eines Baggers", hu: "dózer kar", ro: "brațul unui excavator" },
    { en: "airplane landing gear", de: "Fahrwerk eines Flugzeugs", hu: "repülőgép alváz", ro: "tren de aterizare avion" },
    { en: "shopping mall elevator", de: "Aufzug in Einkaufszentren", hu: "lift vásárlási központban", ro: "ascensor în mall" },
    { en: "dentist chair", de: "Zahnarztstuhl", hu: "fogorvos szék", ro: "scaun dentist" },
  ],

  laws: [
    { en: "Pascal's Law", de: "Pascals Gesetz", hu: "Pascal törvénye", ro: "Legea lui Pascal" },
  ],

  applications: [
    { en: "force multiplication", de: "Kraftvervielfachung", hu: "erő szorzás", ro: "înmulțirea forței" },
    { en: "smooth motion", de: "sanfte Bewegung", hu: "sima mozgás", ro: "mișcare netedă" },
    { en: "precise control", de: "präzise Kontrolle", hu: "pontos vezérlés", ro: "control precis" },
  ],
};

export function generateHydraulicsMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is Pascal's Law?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("Was ist Pascals Gesetz?", "What is Pascal's Law?", "Mit a Pascal törvénye?", "Ce este Legea lui Pascal?", lang),
      q4("Druck, der auf eine Flüssigkeit ausgeübt wird, wird unverändert in alle Richtungen übertragen", "Pressure applied to a fluid is transmitted unchanged in all directions", "Az egy folyadékra kifejtett nyomás változatlanul átadódik minden irányban", "Presiunea aplicată unui lichid se transmite nemodificat în toate direcțiile", lang),
      [
        q4("Druck nimmt mit der Tiefe zu", "Pressure increases with depth", "A nyomás mélységgel nő", "Presiunea crește cu adâncimea", lang),
        q4("Druck ist immer gleich", "Pressure is always the same", "A nyomás mindig azonos", "Presiunea este întotdeauna aceeași", lang),
        q4("Druck nur in eine Richtung wirkt", "Pressure only acts in one direction", "A nyomás csak egy irányban hat", "Presiunea acționează doar într-o direcție", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a hydraulic system?"
  for (let i = 0; i < 8; i++) {
    const example = pick(HYDRAULICS_DATA.examples, rng);
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4(`Welches ist ein Beispiel eines hydraulischen Systems?`, `Which is an example of a hydraulic system?`, `Melyik egy hidraulikus rendszer példája?`, `Care este un exemplu de sistem hidraulic?`, lang),
      example[lang as "en"],
      HYDRAULICS_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is the formula for hydraulic systems?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("Was ist die Formel für Hydrauliksysteme?", "What is the formula for hydraulic systems?", "Mi a hidraulikus rendszerek képlete?", "Care este formula sistemelor hidraulice?", lang),
      q4("F1/A1 = F2/A2 (Kraft1/Fläche1 = Kraft2/Fläche2)", "F1/A1 = F2/A2 (Force1/Area1 = Force2/Area2)", "F1/A1 = F2/A2 (erő1/terület1 = erő2/terület2)", "F1/A1 = F2/A2 (forță1/arie1 = forță2/arie2)", lang),
      [
        q4("F1 × A1 = F2 × A2", "F1 × A1 = F2 × A2", "F1 × A1 = F2 × A2", "F1 × A1 = F2 × A2", lang),
        q4("F1 + A1 = F2 + A2", "F1 + A1 = F2 + A2", "F1 + A1 = F2 + A2", "F1 + A1 = F2 + A2", lang),
        q4("F1 - A1 = F2 - A2", "F1 - A1 = F2 - A2", "F1 - A1 = F2 - A2", "F1 - A1 = F2 - A2", lang),
      ],
      rng
    ));
  }

  // Template 4: "How does a hydraulic lift work?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("Wie funktioniert ein hydraulischer Heber?", "How does a hydraulic lift work?", "Hogyan működik a hidraulikus emelő?", "Cum funcționează un lift hidraulic?", lang),
      q4("Kleine Kraft auf kleine Fläche erzeugt großen Druck, der große Kraft auf große Fläche erzeugt", "Small force on small area creates high pressure, which creates large force on large area", "Kis erő kis területre nagy nyomást hoz létre, amely nagy területre nagy erőt hoz létre", "Forță mică pe arie mică creează presiune mare, care creează forță mare pe arie mare", lang),
      [
        q4("Große Kraft wird direkt übertragen", "Large force is directly transmitted", "Nagy erő közvetlenül átadódik", "Forța mare se transmite direct", lang),
        q4("Es funktioniert wie ein Hebel", "It works like a lever", "Úgy működik, mint egy emelő", "Funcționează ca o pârghie", lang),
        q4("Druck wird verringert durch die Flüssigkeit", "Pressure is reduced by the liquid", "A nyomás csökken a folyadék által", "Presiunea este redusă de lichid", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is the main advantage of hydraulic systems?"
  for (let i = 0; i < 5; i++) {
    const advantages = [
      q4("Sie können große Kräfte mit kleinen Anstrengungen erzeugen", "They can generate large forces with small effort", "Nagy erőket tudnak kis erőfeszítéssel létrehozni", "Pot genera forțe mari cu efort mic", lang),
      q4("Sie sind einfach zu bauen", "They are easy to build", "Könnyű felépítésűek", "Sunt ușor de construit", lang),
      q4("Sie sind sehr billig", "They are very cheap", "Nagyon olcsók", "Sunt foarte ieftine", lang),
    ];

    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("Was ist der Hauptvorteil von Hydrauliksystemen?", "What is the main advantage of hydraulic systems?", "Mi a hidraulikus rendszerek fő előnye?", "Care este avantajul principal al sistemelor hidraulice?", lang),
      advantages[0],
      advantages.slice(1),
      rng
    ));
  }

  // Template 6: "In a hydraulic system, if the input area is smaller..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("In einem Hydrauliksystem, wenn die Eingangsfläche kleiner ist, dann...", "In a hydraulic system, if the input area is smaller, then...", "Egy hidraulikus rendszerben, ha a bemeneti terület kisebb, akkor...", "Într-un sistem hidraulic, dacă aria de intrare este mai mică, atunci...", lang),
      q4("ist die Ausgangsflache größer und die Ausgangskraft größer", "the output area is larger and the output force is larger", "a kimeneti terület nagyobb és a kimeneti erő nagyobb", "aria de ieșire este mai mare și forța de ieșire este mai mare", lang),
      [
        q4("ist die Ausgangskraft kleiner", "the output force is smaller", "a kimeneti erő kisebb", "forța de ieșire este mai mică", lang),
        q4("bleibt die Kraft gleich", "the force stays the same", "az erő ugyanaz marad", "forța rămâne aceeași", lang),
      ],
      rng
    ));
  }

  // Template 7: "Why are hydraulic brakes effective?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "pressure",
      "hydraulics",
      q4("Warum sind hydraulische Bremsen wirksam?", "Why are hydraulic brakes effective?", "Miért hatékonyak a hidraulikus fékek?", "De ce sunt eficace frânele hidraulice?", lang),
      q4("Kleine Kraft auf Pedale erzeugt großen Druck, der auf Bremsklötze wirkt", "Small force on pedal creates high pressure that acts on brake pads", "Kis erő a pedálon nagy nyomást hoz létre, amely a fékpofákra hat", "Forță mică pe pedală creează presiune mare care acționează pe garniturile de frâni", lang),
      [
        q4("Sie übertragen direkt die Kraft", "They directly transmit force", "Közvetlenül átadják az erőt", "Transmit direct forța", lang),
        q4("Sie haben starke Federn", "They have strong springs", "Erős rugóik vannak", "Au arcuri puternice", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateHydraulicsTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("pressure", "hydraulics",
      q4("Erkläre Pascals Gesetz in einfachen Worten.", "Explain Pascal's Law in simple terms.", "Magyarázd meg Pascal törvényét egyszerűen.", "Explică Legea lui Pascal în termeni simpli.", lang),
      ["pressure", "Druck", "nyomás", "presiune", "transmitted", "übertragen", "átadódik", "transmis", "all directions", "alle Richtungen", "minden irányban", "toate direcțiile", "unchanged", "unverändert", "változatlanul", "nemodificat"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Gib drei Beispiele für hydraulische Systeme.", "Give three examples of hydraulic systems.", "Add meg három hidraulikus rendszer példát.", "Dă trei exemple de sisteme hidraulice.", lang),
      ["car jack", "Wagenheber", "autóemelő", "cric auto", "brakes", "Bremsen", "fékek", "frâne", "press", "Presse", "sajtó", "presă", "excavator", "Bagger", "kotrógép", "excavator", "elevator", "Aufzug", "lift", "ascensor"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Was ist die Formel F1/A1 = F2/A2?", "What does the formula F1/A1 = F2/A2 mean?", "Mit jelent az F1/A1 = F2/A2 képlet?", "Ce înseamnă formula F1/A1 = F2/A2?", lang),
      ["pressure equal", "Druck gleich", "nyomás egyenlő", "presiune egală", "force area ratio", "Kraft-Flächen-Verhältnis", "erő-terület arány", "raport forță-arie", "Pascal law"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Wie erzeugt ein Hydraulikheber große Kräfte?", "How does a hydraulic lift generate large forces?", "Hogyan hoz létre a hidraulikus emelő nagy erőket?", "Cum generează un lift hidraulic forțe mari?", lang),
      ["small force", "kleine Kraft", "kis erő", "forță mică", "small area", "kleine Fläche", "kis terület", "arie mică", "high pressure", "hoher Druck", "magas nyomás", "presiune mare", "large area", "große Fläche", "nagy terület", "arie mare"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Was ist der Vorteil der Kraft-Vervielfachung?", "What is the advantage of force multiplication?", "Mi az erő szorzás előnye?", "Care este avantajul înmulțirii forței?", lang),
      ["small effort", "kleine Anstrengung", "kis erőfeszítés", "efort mic", "large output", "große Ausgabe", "nagy kimenet", "ieșire mare", "mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Erkläre, wie hydraulische Bremsen funktionieren.", "Explain how hydraulic brakes work.", "Magyarázd meg, hogyan működnek a hidraulikus fékek.", "Explică cum funcționează frânele hidraulice.", lang),
      ["foot pedal", "Fußpedal", "lábpedál", "pedală picior", "force", "Kraft", "erő", "forță", "pressure", "Druck", "nyomás", "presiune", "brake pads", "Bremsbeläge", "féktuskó", "garnituri frâni"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Warum verwenden Autos hydraulische statt mechanische Bremsen?", "Why do cars use hydraulic instead of mechanical brakes?", "Miért használnak autók hidraulikus helyett mechanikus féket?", "De ce folosesc mașinile frâne hidraulice în loc de mecanice?", lang),
      ["more force", "mehr Kraft", "több erő", "mai multă forță", "precise control", "präzise Kontrolle", "pontos vezérlés", "control precis", "smoother", "weicher", "simább", "mai lin", "safer", "sicherer", "biztonságosabb", "mai sigur"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Beschreibe die Anwendung von Hydraulik in Bulldozern.", "Describe the application of hydraulics in bulldozers.", "Írj le a hidraulika alkalmazását buldózerekben.", "Descrie aplicarea hidraulicii în buldozere.", lang),
      ["lift bucket", "Schaufel heben", "kanál emelése", "ridicarea cupei", "move arm", "Arm bewegen", "kar mozgatása", "mișcare braț", "digging", "Graben", "ásás", "săpare", "precise", "präzise", "pontos", "precis"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Wie nutzen Flugzeuge hydraulische Systeme?", "How do airplanes use hydraulic systems?", "Hogyan használnak repülőgépek hidraulikus rendszereket?", "Cum folosesc avioanele sisteme hidraulice?", lang),
      ["landing gear", "Fahrwerk", "alváz", "tren aterizare", "control surfaces", "Steuerflächen", "vezérlőfelületek", "suprafețe control", "extend retract", "ausfahren einfahren", "nyitás zárás", "extensie retragere", "doors"]
    ),

    createTyping("pressure", "hydraulics",
      q4("Was sind die Vorteile von Hydrauliksystemen gegenüber mechanischen?", "What are the advantages of hydraulic systems over mechanical ones?", "Melyek a hidraulikus rendszerek előnyei a mechanikus felett?", "Care sunt avantajele sistemelor hidraulice asupra celor mecanice?", lang),
      ["force multiplication", "Kraftvervielfachung", "erő szorzás", "înmulțire forță", "smooth motion", "sanfte Bewegung", "sima mozgás", "mișcare netedă", "precise control", "präzise Kontrolle", "pontos vezérlés", "control precis", "compact", "kompakt", "kompakt", "compact"]
    ),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_PRESSURE_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  pressure_basics: (lang = "en", seed = 0) => [...generatePressureBasicsMCQ(lang, seed), ...generatePressureBasicsTyping(lang, seed)],
  pressure_basics_mcq: (lang = "en", seed = 0) => generatePressureBasicsMCQ(lang, seed),
  pressure_basics_typing: (lang = "en", seed = 0) => generatePressureBasicsTyping(lang, seed),

  liquid_pressure: (lang = "en", seed = 0) => [...generateLiquidPressureMCQ(lang, seed), ...generateLiquidPressureTyping(lang, seed)],
  liquid_pressure_mcq: (lang = "en", seed = 0) => generateLiquidPressureMCQ(lang, seed),
  liquid_pressure_typing: (lang = "en", seed = 0) => generateLiquidPressureTyping(lang, seed),

  atmospheric_pressure: (lang = "en", seed = 0) => [...generateAtmosphericPressureMCQ(lang, seed), ...generateAtmosphericPressureTyping(lang, seed)],
  atmospheric_pressure_mcq: (lang = "en", seed = 0) => generateAtmosphericPressureMCQ(lang, seed),
  atmospheric_pressure_typing: (lang = "en", seed = 0) => generateAtmosphericPressureTyping(lang, seed),

  hydraulics: (lang = "en", seed = 0) => [...generateHydraulicsMCQ(lang, seed), ...generateHydraulicsTyping(lang, seed)],
  hydraulics_mcq: (lang = "en", seed = 0) => generateHydraulicsMCQ(lang, seed),
  hydraulics_typing: (lang = "en", seed = 0) => generateHydraulicsTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
