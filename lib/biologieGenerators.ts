// ─── BIOLOGIE GENERATORS (Klasse 5) ───────────────────────────────────────
// English Test mintájára strukturálva
// 24 subtopic × 2 (MCQ + Typing) = 48 generátor
// Minden MCQ generátor: 30 kérdés
// Minden Typing generátor: 5 kérdés

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setBiologieGeneratorMap } from "./biologieCurriculum";

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

function getT(t: Trans | string, lang: string): string {
  if (typeof t === "string") return t;
  return t[lang] || t["de"] || "";
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
...  const seen = new Set<string>();
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

// ─── DATA POOLS (KLASSE 5) ────────────────────────────────────────────────

type Trans = Record<string, string>;

// WIRBELTIERE
const FISH_DATA: { name: Trans; organ: Trans; habitat: Trans }[] = [
  {
    name: { de: "Hecht", en: "Pike", hu: "Csuka", ro: "Știucă" },
    organ: { de: "Kiemen", en: "Gills", hu: "Kopoltyú", ro: "Branhii" },
    habitat: { de: "Süßwasser", en: "Freshwater", hu: "Édesvíz", ro: "Apă dulce" }
  },
  {
    name: { de: "Forelle", en: "Trout", hu: "Pisztráng", ro: "Păstrăv" },
    organ: { de: "Kiemen", en: "Gills", hu: "Kopoltyú", ro: "Branhii" },
    habitat: { de: "Kalte Flüsse", en: "Cold rivers", hu: "Hideg folyók", ro: "Râuri reci" }
  },
  {
    name: { de: "Barsch", en: "Perch", hu: "Sügér", ro: "Biban" },
    organ: { de: "Kiemen", en: "Gills", hu: "Kopoltyú", ro: "Branhii" },
    habitat: { de: "Seen", en: "Lakes", hu: "Tavak", ro: "Lacuri" }
  },
  {
    name: { de: "Hai", en: "Shark", hu: "Cápa", ro: "Rechin" },
    organ: { de: "Kiemen", en: "Gills", hu: "Kopoltyú", ro: "Branhii" },
    habitat: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" }
  },
  {
    name: { de: "Kabeljau", en: "Cod", hu: "Tőkehal", ro: "Cod" },
    organ: { de: "Kiemen", en: "Gills", hu: "Kopoltyú", ro: "Branhii" },
    habitat: { de: "Meeresboden", en: "Seabed", hu: "Tengerfenék", ro: "Fundul mării" }
  },
];

const AMPHIBIAN_DATA: { name: Trans; transformation: Trans; feature: Trans }[] = [
  {
    name: { de: "Frosch", en: "Frog", hu: "Béka", ro: "Broască" },
    transformation: { de: "Kaulquappe → Frosch", en: "Tadpole → Frog", hu: "Ebihal → Béka", ro: "Mormoloc → Broască" },
    feature: { de: "4 Beine", en: "4 legs", hu: "4 láb", ro: "4 picioare" }
  },
  {
    name: { de: "Molch", en: "Newt", hu: "Gőte", ro: "Triton" },
    transformation: { de: "Lunge + Haut Atmung", en: "Lung + Skin respiration", hu: "Tüdő + bőr légzés", ro: "Respirație prin plămâni + piele" },
    feature: { de: "Schwanz", en: "Tail", hu: "Farok", ro: "Coadă" }
  },
  {
    name: { de: "Salamander", en: "Salamander", hu: "Szalamandra", ro: "Salamandră" },
    transformation: { de: "Feucht Habitat", en: "Moist habitat", hu: "Nedves élőhely", ro: "Habitat umed" },
    feature: { de: "Farben", en: "Colors", hu: "Színek", ro: "Culori" }
  },
];

const REPTILE_DATA: { name: Trans; feature: Trans; diet: Trans }[] = [
  {
    name: { de: "Schlange", en: "Snake", hu: "Kígyó", ro: "Șarpe" },
    feature: { de: "Schuppen", en: "Scales", hu: "Pikkelyek", ro: "Solzi" },
    diet: { de: "Fleischfresser", en: "Carnivore", hu: "Húsevő", ro: "Carnivor" }
  },
  {
    name: { de: "Eidechse", en: "Lizard", hu: "Gyík", ro: "Șopârlă" },
    feature: { de: "Vier Beine", en: "Four legs", hu: "Négy láb", ro: "Patru picioare" },
    diet: { de: "Insekten", en: "Insects", hu: "Rovarok", ro: "Insecte" }
  },
  {
    name: { de: "Schildkröte", en: "Turtle", hu: "Teknős", ro: "Broască țestoasă" },
    feature: { de: "Panzer", en: "Shell", hu: "Páncél", ro: "Carapace" },
    diet: { de: "Pflanzen", en: "Plants", hu: "Növények", ro: "Plante" }
  },
  {
    name: { de: "Krokodil", en: "Crocodile", hu: "Krokodil", ro: "Crocodil" },
    feature: { de: "Starke Kiefer", en: "Strong jaws", hu: "Erős állkapocs", ro: "Fălci puternice" },
    diet: { de: "Fleischfresser", en: "Carnivore", hu: "Húsevő", ro: "Carnivor" }
  },
];

const BIRD_DATA: { name: Trans; adaptation: Trans; feature: Trans }[] = [
  {
    name: { de: "Adler", en: "Eagle", hu: "Sas", ro: "Vultur" },
    adaptation: { de: "Hohlknochen", en: "Hollow bones", hu: "Üreges csontok", ro: "Oase goale" },
    feature: { de: "Scharfe Augen", en: "Sharp eyes", hu: "Éles szemek", ro: "Ochi ascuțiți" }
  },
  {
    name: { de: "Schwalbe", en: "Swallow", hu: "Fecske", ro: "Rândunică" },
    adaptation: { de: "Leichte Flügel", en: "Light wings", hu: "Könnyű szárnyak", ro: "Aripi ușoare" },
    feature: { de: "Schnell", en: "Fast", hu: "Gyors", ro: "Rapid" }
  },
  {
    name: { de: "Ente", en: "Duck", hu: "Kacsa", ro: "Rață" },
    adaptation: { de: "Wasserdicht", en: "Waterproof", hu: "Vízhatlan", ro: "Impermeabil" },
    feature: { de: "Webbed Füße", en: "Webbed feet", hu: "Úszóhártyás lábak", ro: "Picioare cu membrană" }
  },
];

const MAMMAL_DATA: { name: Trans; feature: Trans; diet: Trans }[] = [
  {
    name: { de: "Löwe", en: "Lion", hu: "Oroszlán", ro: "Leu" },
    feature: { de: "Haare", en: "Hair", hu: "Szőr", ro: "Păr" },
    diet: { de: "Fleisch", en: "Meat", hu: "Hús", ro: "Carne" }
  },
  {
    name: { de: "Kuh", en: "Cow", hu: "Tehén", ro: "Vacă" },
    feature: { de: "Euter", en: "Udder", hu: "Tőgy", ro: "Uger" },
    diet: { de: "Gras", en: "Grass", hu: "Fű", ro: "Iarbă" }
  },
  {
    name: { de: "Mensch", en: "Human", hu: "Ember", ro: "Om" },
    feature: { de: "Großes Gehirn", en: "Large brain", hu: "Nagy agy", ro: "Creier mare" },
    diet: { de: "Omnivore", en: "Omnivore", hu: "Mindenevő", ro: "Omnivor" }
  },
];

// PFLANZEN
const PLANT_ORGANS: { organ: Trans; function: Trans; location: Trans }[] = [
  {
    organ: { de: "Blatt", en: "Leaf", hu: "Levél", ro: "Frunză" },
    function: { de: "Fotosynthese", en: "Photosynthesis", hu: "Fotoszintézis", ro: "Fotosinteză" },
    location: { de: "Oberirdisch", en: "Above ground", hu: "Föld felett", ro: "Suprateran" }
  },
  {
    organ: { de: "Wurzel", en: "Root", hu: "Gyökér", ro: "Rădăcină" },
    function: { de: "Wasser aufnahme", en: "Water absorption", hu: "Vízfelvétel", ro: "Absorbția apei" },
    location: { de: "Unterirdisch", en: "Underground", hu: "Föld alatt", ro: "Subteran" }
  },
  {
    organ: { de: "Stamm", en: "Stem", hu: "Szár", ro: "Tulpină" },
    function: { de: "Stützung", en: "Support", hu: "Alátámasztás", ro: "Susținere" },
    location: { de: "Zentral", en: "Central", hu: "Központi", ro: "Central" }
  },
  {
    organ: { de: "Blüte", en: "Flower", hu: "Virág", ro: "Floare" },
    function: { de: "Fortpflanzung", en: "Reproduction", hu: "Szaporodás", ro: "Reproducere" },
    location: { de: "Blätter", en: "Leaves", hu: "Levelek", ro: "Frunze" }
  },
];

const PHOTOSYNTHESIS_COMPONENTS: { input: Trans; role: Trans; source: Trans }[] = [
  {
    input: { de: "CO2", en: "CO2", hu: "CO2", ro: "CO2" },
    role: { de: "Gas", en: "Gas", hu: "Gáz", ro: "Gaz" },
    source: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }
  },
  {
    input: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" },
    role: { de: "Nährstoff", en: "Nutrient", hu: "Tápanyag", ro: "Nutrient" },
    source: { de: "Wurzeln", en: "Roots", hu: "Gyökerek", ro: "Rădăcini" }
  },
  {
    input: { de: "Licht", en: "Light", hu: "Fény", ro: "Lumină" },
    role: { de: "Energie", en: "Energy", hu: "Energia", ro: "Energie" },
    source: { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare" }
  },
];

// KÖRPER
const BONES: { bone: Trans; protects: Trans; location: Trans }[] = [
  {
    bone: { de: "Schädel", en: "Skull", hu: "Koponya", ro: "Craniu" },
    protects: { de: "Gehirn", en: "Brain", hu: "Agy", ro: "Creier" },
    location: { de: "Kopf", en: "Head", hu: "Fej", ro: "Cap" }
  },
  {
    bone: { de: "Wirbelsäule", en: "Spine", hu: "Gerinc", ro: "Coloana vertebrală" },
    protects: { de: "Rückenmark", en: "Spinal cord", hu: "Gerincvelő", ro: "Măduva spinării" },
    location: { de: "Rücken", en: "Back", hu: "Hát", ro: "Spate" }
  },
  {
    bone: { de: "Rippen", en: "Ribs", hu: "Bordák", ro: "Coaste" },
    protects: { de: "Lunge", en: "Lungs", hu: "Tüdő", ro: "Plămâni" },
    location: { de: "Brust", en: "Chest", hu: "Mellkas", ro: "Piept" }
  },
];

const MUSCLES: { muscle: Trans; function: Trans; type: Trans }[] = [
  {
    muscle: { de: "Herz", en: "Heart", hu: "Szív", ro: "Inimă" },
    function: { de: "Pumpen", en: "Pumping", hu: "Pumpálás", ro: "Pompare" },
    type: { de: "Unwillkürlich", en: "Involuntary", hu: "Akaratlan", ro: "Involuntar" }
  },
  {
    muscle: { de: "Bizeps", en: "Biceps", hu: "Bicepsz", ro: "Biceps" },
    function: { de: "Arm beugen", en: "Arm flexion", hu: "Karmélység", ro: "Flexia brațului" },
    type: { de: "Willkürlich", en: "Voluntary", hu: "Akart", ro: "Voluntar" }
  },
  {
    muscle: { de: "Zwerchfell", en: "Diaphragm", hu: "Rekeszizom", ro: "Diafragmă" },
    function: { de: "Atmung", en: "Breathing", hu: "Légzés", ro: "Respirație" },
    type: { de: "Unwillkürlich", en: "Involuntary", hu: "Akaratlan", ro: "Involuntar" }
  },
];

// SINNESORGANE
const SENSES: { sense: Trans; organ: Trans; receptor: Trans }[] = [
  {
    sense: { de: "Sehen", en: "Vision", hu: "Látás", ro: "Vedere" },
    organ: { de: "Auge", en: "Eye", hu: "Szem", ro: "Ochi" },
    receptor: { de: "Fotoreceptor", en: "Photoreceptor", hu: "Fotoreceptor", ro: "Fotoreceptor" }
  },
  {
    sense: { de: "Hören", en: "Hearing", hu: "Hallás", ro: "Auz" },
    organ: { de: "Ohr", en: "Ear", hu: "Fül", ro: "Ureche" },
    receptor: { de: "Haarzelle", en: "Hair cell", hu: "Szőrsejt", ro: "Celulă ciliată" }
  },
  {
    sense: { de: "Riechen", en: "Smell", hu: "Szaglás", ro: "Miros" },
    organ: { de: "Nase", en: "Nose", hu: "Orr", ro: "Nas" },
    receptor: { de: "Chemorezeptor", en: "Chemoreceptor", hu: "Kemoreceptor", ro: "Chemoreceptor" }
  },
  {
    sense: { de: "Schmecken", en: "Taste", hu: "Ízlelés", ro: "Gust" },
    organ: { de: "Zunge", en: "Tongue", hu: "Nyelv", ro: "Limbă" },
    receptor: { de: "Geschmacksknospe", en: "Taste bud", hu: "Ízlelőbimbó", ro: "Papilă gustativă" }
  },
  {
    sense: { de: "Tasten", en: "Touch", hu: "Tapintás", ro: "Pipăit" },
    organ: { de: "Haut", en: "Skin", hu: "Bőr", ro: "Piele" },
    receptor: { de: "Mechanorezeptor", en: "Mechanoreceptor", hu: "Mechanoreceptor", ro: "Mecanoreceptor" }
  },
];

// ERNÄHRUNG
const NUTRIENTS: { nutrient: Trans; source: Trans; function: Trans }[] = [
  {
    nutrient: { de: "Eiweiß", en: "Protein", hu: "Fehérje", ro: "Proteină" },
    source: { de: "Fleisch", en: "Meat", hu: "Hús", ro: "Carne" },
    function: { de: "Wachstum", en: "Growth", hu: "Növekedés", ro: "Creștere" }
  },
  {
    nutrient: { de: "Kohlenhydrate", en: "Carbohydrates", hu: "Szénhidrátok", ro: "Carbohidrați" },
    source: { de: "Getreide", en: "Cereal", hu: "Gabona", ro: "Cereale" },
    function: { de: "Energie", en: "Energy", hu: "Energia", ro: "Energie" }
  },
  {
    nutrient: { de: "Fett", en: "Fat", hu: "Zsír", ro: "Grăsime" },
    source: { de: "Öl", en: "Oil", hu: "Olaj", ro: "Ulei" },
    function: { de: "Speicherung", en: "Storage", hu: "Tárolás", ro: "Stocare" }
  },
  {
    nutrient: { de: "Vitamin", en: "Vitamin", hu: "Vitamin", ro: "Vitamină" },
    source: { de: "Obst", en: "Fruit", hu: "Gyümölcs", ro: "Fructe" },
    function: { de: "Immunität", en: "Immunity", hu: "Immunitás", ro: "Immunitate" }
  },
];

const DIGESTIVE_ORGANS: { organ: Trans; enzyme?: Trans; function: Trans; product?: Trans }[] = [
  {
    organ: { de: "Mund", en: "Mouth", hu: "Száj", ro: "Gură" },
    enzyme: { de: "Speichel", en: "Saliva", hu: "Nyál", ro: "Salivă" },
    function: { de: "Zerkleinerung", en: "Grinding", hu: "Őrlés", ro: "Mărunțire" }
  },
  {
    organ: { de: "Magen", en: "Stomach", hu: "Gyomor", ro: "Stomac" },
    enzyme: { de: "Salzsäure", en: "Hydrochloric acid", hu: "Sósav", ro: "Acid clorhidric" },
    function: { de: "Auflösung", en: "Dissolution", hu: "Feloldás", ro: "Dizolvare" }
  },
  {
    organ: { de: "Dünndarm", en: "Small intestine", hu: "Vékonybél", ro: "Intestin subțire" },
    enzyme: { de: "Pankreasenzyme", en: "Pancreatic enzymes", hu: "Hasnyálmirigy enzimek", ro: "Enzime pancreatice" },
    function: { de: "Absorption", en: "Absorption", hu: "Felszívódás", ro: "Absorbție" }
  },
  {
    organ: { de: "Leber", en: "Liver", hu: "Máj", ro: "Ficat" },
    product: { de: "Galle", en: "Bile", hu: "Epe", ro: "Bilă" },
    function: { de: "Fettabbau", en: "Fat breakdown", hu: "Zsírbontás", ro: "Descompunerea grăsimilor" }
  },
];

// ─── K5 GENERATORS (24 subtopics × 2 = 48 Generators) ─────────────────────

export const K5_Generators: Record<string, Record<string, (seed?: number, lang?: string) => CurriculumQuestion[]>> = {
  // WIRBELTIERE (6 subtopics)
  wirbeltiere: {
    // Fish (30 MCQ)
    fish: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const fish = pick(FISH_DATA, rng);
        const question = [
          { de: `Welches Organ benutzt ${getT(fish.name, lang)} zum Atmen?`, en: `Which organ does ${getT(fish.name, lang)} use for breathing?`, hu: `Melyik szervet használja a ${getT(fish.name, lang)} a légzéshez?`, ro: `Ce organ folosește ${getT(fish.name, lang)} pentru respirație?` },
          { de: `In welchem Habitat lebt die ${getT(fish.name, lang)}?`, en: `In which habitat does the ${getT(fish.name, lang)} live?`, hu: `Milyen élőhelyen él a ${getT(fish.name, lang)}?`, ro: `În ce habitat trăiește ${getT(fish.name, lang)}?` },
          { de: `${getT(fish.name, lang)} haben welche spezialisierte Struktur?`, en: `What specialized structure do ${getT(fish.name, lang)} have?`, hu: `Milyen speciális struktúrával rendelkezik a ${getT(fish.name, lang)}?`, ro: `Ce structură specializată are ${getT(fish.name, lang)}?` },
          { de: `Welcher Fisch lebt in ${getT(fish.habitat, lang)}?`, en: `Which fish lives in ${getT(fish.habitat, lang)}?`, hu: `Melyik hal él itt: ${getT(fish.habitat, lang)}?`, ro: `Care pește trăiește în ${getT(fish.habitat, lang)}?` },
        ][i % 4][lang] || `Welches Organ benutzt ${getT(fish.name, "de")} zum Atmen?`;

        const answer = [getT(fish.organ, lang), getT(fish.habitat, lang), getT(fish.organ, lang), getT(fish.name, lang)][i % 4];

        const w_organ = { de: ["Lungen", "Tracheen", "Haut"], en: ["Lungs", "Trachea", "Skin"], hu: ["Tüdő", "Légcső", "Bőr"], ro: ["Plămâni", "Trahee", "Piele"] }[lang] || ["Lungen", "Tracheen", "Haut"];
        const w_habitat = { de: ["Wald", "Wüste", "Berge"], en: ["Forest", "Desert", "Mountains"], hu: ["Erdő", "Sivatag", "Hegyek"], ro: ["Pădure", "Deșert", "Munți"] }[lang] || ["Wald", "Wüste", "Berge"];
        const w_struct = { de: ["Haare", "Federn", "Hörner"], en: ["Hair", "Feathers", "Horns"], hu: ["Szőr", "Tollak", "Szarvak"], ro: ["Păr", "Pene", "Coarne"] }[lang] || ["Haare", "Federn", "Hörner"];
        const w_fish = { de: ["Frosch", "Salamander", "Schildkröte"], en: ["Frog", "Salamander", "Turtle"], hu: ["Béka", "Szalamandra", "Teknős"], ro: ["Broască", "Salamandră", "Broască țestoasă"] }[lang] || ["Forelle", "Hai", "Barsch"];

        const wrongAnswers = [w_organ, w_habitat, w_struct, w_fish][i % 4];
        questions.push(createMCQ("wirbeltiere", "fish", question, answer, wrongAnswers, rng));
      }
      return questions;
    },
    // Fish Typing (5)
    fish_typing: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const t = {
        ex_fw: { de: "Nenne ein Beispiel für einen Süßwasserfisch", en: "Name an example of a freshwater fish", hu: "Nevezz meg egy édesvízi halat", ro: "Dă un exemplu de pește de apă dulce" },
        organ: { de: "Welches Organ benutzt der Fisch zum Atmen?", en: "Which organ does the fish use to breathe?", hu: "Melyik szervet használja a hal a légzéshez?", ro: "Ce organ folosește peștele pentru respirație?" },
        swim: { de: "Wie heißt die Struktur der Fische zum Schwimmen?", en: "What is the name of the structure fish use for swimming?", hu: "Hogy hívják a halak úszáshoz használt struktúráját?", ro: "Cum se numește structura peștilor pentru înot?" },
        habitat: { de: "In welchem Lebensraum leben Fische?", en: "In which habitat do fish live?", hu: "Milyen élőhelyen élnek a halak?", ro: "În ce habitat trăiesc peștii?" },
        shark: { de: "Ein Hai lebt in welchem Wasser?", en: "In what type of water does a shark live?", hu: "Milyen vízben él a cápa?", ro: "În ce fel de apă trăiește un rechin?" },
      };
      return [
        createTyping("wirbeltiere", "fish", getT(t.ex_fw, lang), [getT(FISH_DATA[0].name, lang), getT(FISH_DATA[1].name, lang), getT(FISH_DATA[2].name, lang)]),
        createTyping("wirbeltiere", "fish", getT(t.organ, lang), [getT(FISH_DATA[0].organ, lang)]),
        createTyping("wirbeltiere", "fish", getT(t.swim, lang), [{ de: "Flossen", en: "Fins", hu: "Uszonyok", ro: "Înotătoare" }[lang] || "Flossen"]),
        createTyping("wirbeltiere", "fish", getT(t.habitat, lang), [{ de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }[lang] || "Wasser"]),
        createTyping("wirbeltiere", "fish", getT(t.shark, lang), [getT(FISH_DATA[3].habitat, lang)]),
      ];
    },

    // Amphibian (30 MCQ)
    amphibian: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const amp = pick(AMPHIBIAN_DATA, rng);
        const question = [
          { de: `Die ${getT(amp.name, lang)} durchläuft welche Metamorphose?`, en: `Which metamorphosis does the ${getT(amp.name, lang)} undergo?`, hu: `Milyen metamorfózison megy keresztül a ${getT(amp.name, lang)}?`, ro: `Ce metamorfoză parcurge ${getT(amp.name, lang)}?` },
          { de: `${getT(amp.name, lang)} haben welches Merkmal?`, en: `What feature do ${getT(amp.name, lang)} have?`, hu: `Milyen jellemzője van a ${getT(amp.name, lang)}-nak/nek?`, ro: `Ce caracteristică are ${getT(amp.name, lang)}?` },
          { de: `${getT(amp.feature, lang)} ist ein Merkmal der ${getT(amp.name, lang)}?`, en: `${getT(amp.feature, lang)} is a feature of which animal?`, hu: `A ${getT(amp.feature, lang)} melyik állat jellemzője?`, ro: `${getT(amp.feature, lang)} este o caracteristică a cărui animal?` },
          { de: `Welche Transformation macht ${getT(amp.name, lang)} durch?`, en: `What transformation does ${getT(amp.name, lang)} undergo?`, hu: `Milyen átalakuláson megy keresztül a ${getT(amp.name, lang)}?`, ro: `Ce transformare parcurge ${getT(amp.name, lang)}?` },
        ][i % 4][lang] || `Die ${getT(amp.name, "de")} durchläuft welche Metamorphose?`;

        const answer = [getT(amp.transformation, lang), getT(amp.feature, lang), getT(amp.name, lang), getT(amp.transformation, lang)][i % 4];
        const w_meta = { de: ["Keine", "Schnelle", "Rückwärts"], en: ["None", "Fast", "Reverse"], hu: ["Nincs", "Gyors", "Visszafelé"], ro: ["Niciuna", "Rapidă", "Inversă"] }[lang] || ["Keine", "Schnelle", "Rückwärts"];
        const w_feat = { de: ["Panzer", "Schuppen", "Fell"], en: ["Shell", "Scales", "Fur"], hu: ["Páncél", "Pikkelyek", "Szőr"], ro: ["Carapace", "Solzi", "Blană"] }[lang] || ["Panzer", "Schuppen", "Fell"];
        const w_name = { de: ["Fisch", "Reptil", "Vogel"], en: ["Fish", "Reptile", "Bird"], hu: ["Hal", "Hüllő", "Madár"], ro: ["Pește", "Reptilă", "Pasăre"] }[lang] || ["Frosch", "Molch", "Salamander"];

        const wrongAnswers = [w_meta, w_feat, w_name, w_meta][i % 4];
        questions.push(createMCQ("wirbeltiere", "amphibian", question, answer, wrongAnswers, rng));
      }
      return questions;
    },
    // Amphibian Typing (5)
    amphibian_typing: (seed?: number, lang: string = "de") => {
      const t = {
        ex: { de: "Nenne ein Beispiel für ein Amphibium", en: "Name an example of an amphibian", hu: "Nevezz meg egy kétéltűt", ro: "Dă un exemplu de amfibian" },
        meta: { de: "Welche Metamorphose durchlaufen Amphibien?", en: "What metamorphosis do amphibians undergo?", hu: "Milyen metamorfózison mennek keresztül a kétéltűek?", ro: "Ce metamorfoză parcurg amfibienii?" },
        legs: { de: "Amphibien haben wie viele Beine?", en: "How many legs do amphibians have?", hu: "Hány lába van a kétéltűeknek?", ro: "Câte picioare au amfibienii?" },
        habitat: { de: "In welchem Habitat leben Amphibien?", en: "In which habitat do amphibians live?", hu: "Milyen élőhelyen élnek a kétéltűek?", ro: "În ce habitat trăiesc amfibienii?" },
        frog: { de: "Was ist ein Merkmal von Fröschen?", en: "What is a feature of frogs?", hu: "Mi a békák egyik jellemzője?", ro: "Care este o caracteristică a broaștelor?" },
      };
      return [
        createTyping("wirbeltiere", "amphibian", getT(t.ex, lang), [getT(AMPHIBIAN_DATA[0].name, lang), getT(AMPHIBIAN_DATA[1].name, lang), getT(AMPHIBIAN_DATA[2].name, lang)]),
        createTyping("wirbeltiere", "amphibian", getT(t.meta, lang), [{ de: "Wasser zu Land", en: "Water to land", hu: "Vízi és szárazföldi", ro: "De la apă la uscat" }[lang] || "Wasser zu Land"]),
        createTyping("wirbeltiere", "amphibian", getT(t.legs, lang), ["4", { de: "vier", en: "four", hu: "négy", ro: "patru" }[lang] || "vier"]),
        createTyping("wirbeltiere", "amphibian", getT(t.habitat, lang), [{ de: "Feucht", en: "Moist", hu: "Nedves", ro: "Umed" }[lang] || "Feucht"]),
        createTyping("wirbeltiere", "amphibian", getT(t.frog, lang), [{ de: "Sprünge", en: "Jumping", hu: "Ugrás", ro: "Sărituri" }[lang] || "Sprünge"]),
      ];
    },

    // Reptile (30 MCQ)
    reptile: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        skin: { de: "Womit ist die Haut der [NAME] bedeckt?", en: "What is the skin of the [NAME] covered with?", hu: "Mivel van borítva a [NAME] bőre?", ro: "Cu ce este acoperită pielea [NAME]?" },
        diet: { de: "Die [NAME] ist ein [DIET]", en: "The [NAME] is a [DIET]", hu: "A [NAME] egy [DIET]", ro: "[NAME] este un [DIET]" },
      };
      for (let i = 0; i < 30; i++) {
        const rep = pick(REPTILE_DATA, rng);
        const w_skin = { de: ["Haare", "Federn", "Schleim"], en: ["Hair", "Feathers", "Mucus"], hu: ["Szőr", "Tollak", "Nyálka"], ro: ["Păr", "Pene", "Mucus"] }[lang] || ["Haare", "Federn", "Schleim"];
        const w_diet = { de: ["Pflanzenfresser", "Omnivore", "Detritus"], en: ["Herbivore", "Omnivore", "Detritus"], hu: ["Növényevő", "Mindenevő", "Dögevő"], ro: ["Erbivor", "Omnivor", "Detritivor"] }[lang] || ["Pflanzenfresser", "Omnivore", "Detritus"];

        questions.push(
          createMCQ("wirbeltiere", "reptile",
            getT(t.skin, lang).replace("[NAME]", getT(rep.name, lang)), getT(rep.feature, lang), w_skin, rng),
          createMCQ("wirbeltiere", "reptile",
            getT(t.diet, lang).replace("[NAME]", getT(rep.name, lang)).replace("[DIET]", getT(rep.diet, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    // Reptile Typing (5)
    reptile_typing: (seed?: number, lang: string = "de") => {
      const t = {
        ex: { de: "Nenne eine Echse", en: "Name a lizard", hu: "Nevezz meg egy gyíkot", ro: "Dă un exemplu de șopârlă" },
        cover: { de: "Mit was ist ein Reptil bedeckt?", en: "What is a reptile covered with?", hu: "Mivel van borítva egy hüllő?", ro: "Cu ce este acoperit un reptil?" },
        legs: { de: "Wie viele Beine hat eine Schlange?", en: "How many legs does a snake have?", hu: "Hány lába van a kígyónak?", ro: "Câte picioare are un șarpe?" },
        cold: { de: "Tiere mit wechselwarmer Körpertemperatur sind...", en: "Animals with variable body temperature are...", hu: "A változó testhőmérsékletű állatok...", ro: "Animalele cu temperatură corporală variabilă sunt..." },
        croc: { de: "Ein Krokodil ist ein...", en: "A crocodile is a...", hu: "A krokodil egy...", ro: "Un crocodil este un..." },
      };
      return [
        createTyping("wirbeltiere", "reptile", getT(t.ex, lang), [getT(REPTILE_DATA[1].name, lang)]),
        createTyping("wirbeltiere", "reptile", getT(t.cover, lang), [getT(REPTILE_DATA[0].feature, lang)]),
        createTyping("wirbeltiere", "reptile", getT(t.legs, lang), ["0", { de: "null", en: "zero", hu: "nulla", ro: "zero" }[lang] || "null"]),
        createTyping("wirbeltiere", "reptile", getT(t.cold, lang), [{ de: "Reptilien", en: "Reptiles", hu: "Hüllők", ro: "Reptile" }[lang] || "Reptilien"]),
        createTyping("wirbeltiere", "reptile", getT(t.croc, lang), [{ de: "Reptil", en: "Reptile", hu: "Hüllő", ro: "Reptilă" }[lang] || "Reptil"]),
      ];
    },

    // Bird (30 MCQ)
    bird: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        adapt: { de: "Welche Anpassung hilft [NAME] zu fliegen?", en: "Which adaptation helps [NAME] to fly?", hu: "Melyik alkalmazkodás segíti a [NAME]-t a repülésben?", ro: "Ce adaptare ajută [NAME] să zboare?" },
        feat: { de: "Das Merkmal \"[FEAT]\" hat [NAME]?", en: "The feature \"[FEAT]\" belongs to [NAME]?", hu: "A \"[FEAT]\" jellemző a [NAME]-ra/re?", ro: "Caracteristica \"[FEAT]\" aparține [NAME]?" },
      };
      for (let i = 0; i < 30; i++) {
        const bird = pick(BIRD_DATA, rng);
        const w_adapt = { de: ["Fell", "Schuppen", "Zähne"], en: ["Fur", "Scales", "Teeth"], hu: ["Szőr", "Pikkelyek", "Fogak"], ro: ["Blană", "Solzi", "Dinți"] }[lang] || ["Fell", "Schuppen", "Zähne"];
        questions.push(
          createMCQ("wirbeltiere", "bird",
            getT(t.adapt, lang).replace("[NAME]", getT(bird.name, lang)), getT(bird.adaptation, lang), w_adapt, rng),
          createMCQ("wirbeltiere", "bird",
            getT(t.feat, lang).replace("[FEAT]", getT(bird.feature, lang)).replace("[NAME]", getT(bird.name, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    // Bird Typing (5)
    bird_typing: (seed?: number, lang: string = "de") => {
      const t = {
        feather: { de: "Welches Tier hat Federn?", en: "Which animal has feathers?", hu: "Melyik állatnak van tolla?", ro: "Care animal are pene?" },
        bones: { de: "Hohlknochen sind in welchem Tier?", en: "Hollow bones are in which animal?", hu: "Melyik állatnak vannak üreges csontjai?", ro: "Oasele goale sunt la care animal?" },
        feat: { de: "Welches Merkmal hat ein Vogel?", en: "What feature does a bird have?", hu: "Mi a madarak jellemzője?", ro: "Ce caracteristică are o pasăre?" },
        fly: { de: "Nenne einen fliegenden Vogel", en: "Name a flying bird", hu: "Nevezz meg egy repülő madarat", ro: "Dă un exemplu de pasăre care zboară" },
        enable: { de: "Was ermöglicht Vögeln zu fliegen?", en: "What enables birds to fly?", hu: "Mi teszi lehetővé a madarak repülését?", ro: "Ce le permite păsărilor să zboare?" },
      };
      return [
        createTyping("wirbeltiere", "bird", getT(t.feather, lang), [{ de: "Vogel", en: "Bird", hu: "Madár", ro: "Pasăre" }[lang] || "Vogel"]),
        createTyping("wirbeltiere", "bird", getT(t.bones, lang), [{ de: "Vögel", en: "Birds", hu: "Madarak", ro: "Păsări" }[lang] || "Vögel"]),
        createTyping("wirbeltiere", "bird", getT(t.feat, lang), [{ de: "Schnabel", en: "Beak", hu: "Csőr", ro: "Cioc" }[lang] || "Schnabel"]),
        createTyping("wirbeltiere", "bird", getT(t.fly, lang), [getT(BIRD_DATA[0].name, lang), getT(BIRD_DATA[1].name, lang)]),
        createTyping("wirbeltiere", "bird", getT(t.enable, lang), [getT(BIRD_DATA[0].adaptation, lang)]),
      ];
    },

    // Mammal (30 MCQ)
    mammal: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        feat: { de: "Das Merkmal \"[FEAT]\" haben Säugetiere wie [NAME]?", en: "Mammals like [NAME] have the feature \"[FEAT]\"?", hu: "A \"[FEAT]\" jellemző az olyan emlősökre, mint a [NAME]?", ro: "Mamiferele precum [NAME] au caracteristica \"[FEAT]\"?" },
        diet: { de: "[NAME] sind [DIET]", en: "[NAME] are [DIET]", hu: "A [NAME] egy [DIET]", ro: "[NAME] sunt [DIET]" },
      };
      for (let i = 0; i < 30; i++) {
        const mam = pick(MAMMAL_DATA, rng);
        const w_diet = { de: ["Insektenfresser", "Parasiten", "Detritus"], en: ["Insectivores", "Parasites", "Detritus"], hu: ["Rovarevők", "Paraziták", "Dögevők"], ro: ["Insectivore", "Paraziți", "Detritivori"] }[lang] || ["Insektenfresser", "Parasiten", "Detritus"];
        questions.push(
          createMCQ("wirbeltiere", "mammal",
            getT(t.feat, lang).replace("[FEAT]", getT(mam.feature, lang)).replace("[NAME]", getT(mam.name, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("wirbeltiere", "mammal",
            getT(t.diet, lang).replace("[NAME]", getT(mam.name, lang)).replace("[DIET]", getT(mam.diet, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    // Mammal Typing (5)
    mammal_typing: (seed?: number, lang: string = "de") => {
      const t = {
        hair: { de: "Welches Tier hat Haare?", en: "Which animal has hair?", hu: "Melyik állatnak van szőre?", ro: "Care animal are păr?" },
        human: { de: "Menschen sind welche Art?", en: "What kind of species are humans?", hu: "Milyen faj az ember?", ro: "Oamenii sunt ce fel de specie?" },
        ex: { de: "Nenne ein Säugetier", en: "Name a mammal", hu: "Nevezz meg egy emlőst", ro: "Dă un exemplu de mamifer" },
        limbs: { de: "Säugetiere haben wie viele Gliedmaßen?", en: "How many limbs do mammals have?", hu: "Hány végtagja van az emlősöknek?", ro: "Câte membre au mamiferele?" },
        feat: { de: "Was ist ein Merkmal von Säugetieren?", en: "What is a feature of mammals?", hu: "Mi az emlősök egyik jellemzője?", ro: "Care este o caracteristică a mamiferelor?" },
      };
      return [
        createTyping("wirbeltiere", "mammal", getT(t.hair, lang), [{ de: "Säugetiere", en: "Mammals", hu: "Emlősök", ro: "Mamifere" }[lang] || "Säugetiere"]),
        createTyping("wirbeltiere", "mammal", getT(t.human, lang), [{ de: "Säugetiere", en: "Mammals", hu: "Emlősök", ro: "Mamifere" }[lang] || "Säugetiere"]),
        createTyping("wirbeltiere", "mammal", getT(t.ex, lang), [getT(MAMMAL_DATA[0].name, lang)]),
        createTyping("wirbeltiere", "mammal", getT(t.limbs, lang), ["4", { de: "vier", en: "four", hu: "négy", ro: "patru" }[lang] || "vier"]),
        createTyping("wirbeltiere", "mammal", getT(t.feat, lang), [getT(MAMMAL_DATA[0].feature, lang)]),
      ];
    },

    // Vertebrate Comparison (30 MCQ)
    vertebrate_comparison: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        invertebrate: { de: "Welches ist ein wirbelloses Tier?", en: "Which is an invertebrate animal?", hu: "Melyik egy gerinctelen állat?", ro: "Care este un animal nevertebrat?" },
        backbone: { de: "Welches Merkmal haben alle Wirbeltiere?", en: "Which feature do all vertebrates have?", hu: "Milyen jellemzője van minden gerincesnek?", ro: "Ce caracteristică au toate vertebratele?" },
        diff: { de: "Fische und Amphibien unterscheiden sich in...", en: "Fish and amphibians differ in...", hu: "A halak és a kétéltűek különböznek a...", ro: "Peștii și amfibienii diferă prin..." },
      };
      const a = {
        insect: { de: "Insekt", en: "Insect", hu: "Rovar", ro: "Insectă" },
        backbone: { de: "Wirbelsäule", en: "Spinal column", hu: "Gerincoszlop", ro: "Coloană vertebrală" },
        breathing: { de: "Atmung", en: "Breathing", hu: "Légzés", ro: "Respirație" },
      };
      for (let i = 0; i < 30; i++) {
        const questions_list = [
          createMCQ("wirbeltiere", "vertebrate_comparison", getT(t.invertebrate, lang), getT(a.insect, lang),
            { de: ["Fisch", "Vogel", "Säugetier"], en: ["Fish", "Bird", "Mammal"], hu: ["Hal", "Madár", "Emlős"], ro: ["Pește", "Pasăre", "Mamifer"] }[lang] || ["Fisch", "Vogel", "Säugetier"], rng),
          createMCQ("wirbeltiere", "vertebrate_comparison", getT(t.backbone, lang), getT(a.backbone, lang),
            { de: ["Flügel", "Schuppen", "Lungen"], en: ["Wings", "Scales", "Lungs"], hu: ["Szárnyak", "Pikkelyek", "Tüdők"], ro: ["Aripi", "Solzi", "Plămâni"] }[lang] || ["Flügel", "Schuppen", "Lungen"], rng),
          createMCQ("wirbeltiere", "vertebrate_comparison", getT(t.diff, lang), getT(a.breathing, lang),
            { de: ["Größe", "Farbe", "Gewicht"], en: ["Size", "Color", "Weight"], hu: ["Méret", "Szín", "Súly"], ro: ["Mărime", "Culoare", "Greutate"] }[lang] || ["Größe", "Farbe", "Gewicht"], rng),
        ];
        questions.push(pick(questions_list, rng));
      }
      return questions;
    },
    // Vertebrate Comparison Typing (5)
    vertebrate_comparison_typing: (seed?: number, lang: string = "de") => {
      const t = {
        no_vert: { de: "Welches ist kein Wirbeltier?", en: "Which is not a vertebrate?", hu: "Melyik nem gerinces?", ro: "Care nu este un vertebrat?" },
        all_vert: { de: "Was haben alle Wirbeltiere?", en: "What do all vertebrates have?", hu: "Mije van minden gerincesnek?", ro: "Ce au toate vertebratele?" },
        classes: { de: "Wie viele Wirbeltierklassen gibt es?", en: "How many vertebrate classes are there?", hu: "Hány gerinces osztály létezik?", ro: "Câte clase de vertebrate există?" },
        inv: { de: "Nenne ein wirbelloses Tier", en: "Name an invertebrate animal", hu: "Nevezz meg egy gerinctelen állatot", ro: "Dă un exemplu de animal nevertebrat?" },
        percent: { de: "Wirbellose sind wie viel % aller Tierarten?", en: "Invertebrates are what % of all animal species?", hu: "A gerinctelenek az összes állatfaj hány %-át teszik ki?", ro: "Nevertebratele reprezintă ce % din toate speciile de animale?" },
      };
      return [
        createTyping("wirbeltiere", "vertebrate_comparison", getT(t.no_vert, lang), [{ de: "Insekt", en: "Insect", hu: "Rovar", ro: "Insectă" }[lang] || "Insekt"]),
        createTyping("wirbeltiere", "vertebrate_comparison", getT(t.all_vert, lang), [{ de: "Wirbelsäule", en: "Backbone", hu: "Gerinc", ro: "Coloană vertebrală" }[lang] || "Wirbelsäule"]),
        createTyping("wirbeltiere", "vertebrate_comparison", getT(t.classes, lang), ["5", { de: "fünf", en: "five", hu: "öt", ro: "cinci" }[lang] || "fünf"]),
        createTyping("wirbeltiere", "vertebrate_comparison", getT(t.inv, lang), [{ de: "Insekt", en: "Insect", hu: "Rovar", ro: "Insectă" }[lang] || "Insekt"]),
        createTyping("wirbeltiere", "vertebrate_comparison", getT(t.percent, lang), ["95", "97", "99"]),
      ];
    },
  },

  // PFLANZEN (5 subtopics)
  pflanzen: {
    plant_parts: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        func: { de: "[ORGAN] Funktion: [FUNC]?", en: "[ORGAN] function: [FUNC]?", hu: "[ORGAN] funkciója: [FUNC]?", ro: "[ORGAN] funcție: [FUNC]?" },
        photo: { de: "Welches Organ macht Fotosynthese?", en: "Which organ performs photosynthesis?", hu: "Melyik szerv végzi a fotoszintézist?", ro: "Ce organ realizează fotosinteza?" },
      };
      for (let i = 0; i < 30; i++) {
        const organ = pick(PLANT_ORGANS, rng);
        questions.push(
          createMCQ("pflanzen", "plant_parts",
            getT(t.func, lang).replace("[ORGAN]", getT(organ.organ, lang)).replace("[FUNC]", getT(organ.function, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("pflanzen", "plant_parts",
            getT(t.photo, lang), getT(PLANT_ORGANS[0].organ, lang), [getT(PLANT_ORGANS[1].organ, lang), getT(PLANT_ORGANS[2].organ, lang), getT(PLANT_ORGANS[3].organ, lang)], rng)
        );
      }
      return questions.slice(0, 30);
    },
    plant_parts_typing: (seed?: number, lang: string = "de") => {
      const t = {
        parts: { de: "Welche Teile hat eine Pflanze?", en: "What parts does a plant have?", hu: "Milyen részei vannak egy növénynek?", ro: "Ce părți are o plantă?" },
        water: { de: "Womit nimmt die Pflanze Wasser auf?", en: "What does the plant use to absorb water?", hu: "Mivel vesz fel vizet a növény?", ro: "Cu ce absoarbe planta apa?" },
        photo: { de: "Was macht Fotosynthese?", en: "What performs photosynthesis?", hu: "Mi végzi a fotoszintézist?", ro: "Ce realizează fotosinteza?" },
        support: { de: "Welches Organ stützt die Pflanze?", en: "Which organ supports the plant?", hu: "Melyik szerv támasztja alá a növényt?", ro: "Ce organ susține planta?" },
        repro: { de: "Welches Organ ist für die Fortpflanzung?", en: "Which organ is for reproduction?", hu: "Melyik szerv szolgál a szaporodásra?", ro: "Ce organ este pentru reproducere?" },
      };
      return [
        createTyping("pflanzen", "plant_parts", getT(t.parts, lang), [{ de: "Wurzel, Stamm, Blatt", en: "Root, stem, leaf", hu: "Gyökér, szár, levél", ro: "Rădăcină, tulpină, frunză" }[lang] || "Wurzel, Stamm, Blatt"]),
        createTyping("pflanzen", "plant_parts", getT(t.water, lang), [getT(PLANT_ORGANS[1].organ, lang)]),
        createTyping("pflanzen", "plant_parts", getT(t.photo, lang), [getT(PLANT_ORGANS[0].organ, lang)]),
        createTyping("pflanzen", "plant_parts", getT(t.support, lang), [getT(PLANT_ORGANS[2].organ, lang)]),
        createTyping("pflanzen", "plant_parts", getT(t.repro, lang), [getT(PLANT_ORGANS[3].organ, lang)]),
      ];
    },

    photosynthesis: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        need: { de: "[INPUT] ist notwendig für Fotosynthese?", en: "[INPUT] is necessary for photosynthesis?", hu: "A [INPUT] szükséges a fotoszintézishez?", ro: "[INPUT] este necesar pentru fotosinteză?" },
        role: { de: "Die Fotosynthese benötigt [INPUT] als...", en: "Photosynthesis needs [INPUT] as a...", hu: "A fotoszintézisnek szüksége van [INPUT]-ra mint...", ro: "Fotosinteza are nevoie de [INPUT] ca..." },
      };
      for (let i = 0; i < 30; i++) {
        const comp = pick(PHOTOSYNTHESIS_COMPONENTS, rng);
        questions.push(
          createMCQ("pflanzen", "photosynthesis",
            getT(t.need, lang).replace("[INPUT]", getT(comp.input, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("pflanzen", "photosynthesis",
            getT(t.role, lang).replace("[INPUT]", getT(comp.input, lang)), getT(comp.role, lang),
            { de: ["Abfall", "Gift", "Lärm"], en: ["Waste", "Poison", "Noise"], hu: ["Hulladék", "Méreg", "Zaj"], ro: ["Deșeu", "Otravă", "Zgomot"] }[lang] || ["Abfall", "Gift", "Lärm"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    photosynthesis_typing: (seed?: number, lang: string = "de") => {
      const t = {
        need: { de: "Was ist notwendig für Fotosynthese?", en: "What is necessary for photosynthesis?", hu: "Mi szükséges a fotoszintézishez?", ro: "Ce este necesar pentru fotosinteză?" },
        color: { de: "Welcher Farbstoff macht Fotosynthese?", en: "Which pigment performs photosynthesis?", hu: "Melyik festékanyag végzi a fotoszintézist?", ro: "Ce pigment realizează fotosinteza?" },
        purpose: { de: "Fotosynthese dient der Erzeugung von...", en: "Photosynthesis serves to produce...", hu: "A fotoszintézis célja a ... előállítása", ro: "Fotosinteza servește la producerea de..." },
        where: { de: "Wo findet Fotosynthese statt?", en: "Where does photosynthesis take place?", hu: "Hol megy végbe a fotoszintézis?", ro: "Unde are loc fotosinteza?" },
        product: { de: "Nenne ein Produkt der Fotosynthese", en: "Name a product of photosynthesis", hu: "Nevezz meg a fotoszintézis egy termékét", ro: "Dă un exemplu de produs al fotosintezei" },
      };
      return [
        createTyping("pflanzen", "photosynthesis", getT(t.need, lang), [{ de: "CO2, Wasser, Licht", en: "CO2, water, light", hu: "CO2, víz, fény", ro: "CO2, apă, lumină" }[lang] || "CO2, Wasser, Licht"]),
        createTyping("pflanzen", "photosynthesis", getT(t.color, lang), [{ de: "Chlorophyll", en: "Chlorophyll", hu: "Klorofill", ro: "Clorofilă" }[lang] || "Chlorophyll"]),
        createTyping("pflanzen", "photosynthesis", getT(t.purpose, lang), [{ de: "Energie", en: "Energy", hu: "Energia", ro: "Energie" }[lang] || "Energie"]),
        createTyping("pflanzen", "photosynthesis", getT(t.where, lang), [getT(PLANT_ORGANS[0].organ, lang)]),
        createTyping("pflanzen", "photosynthesis", getT(t.product, lang), [{ de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }[lang] || "Sauerstoff"]),
      ];
    },

    flower_structure: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        pollen: { de: "Welcher Teil der Blüte produziert Pollen?", en: "Which part of the flower produces pollen?", hu: "A virág melyik része termel pollent?", ro: "Ce parte a florii produce polen?" },
        purpose: { de: "Die Blüte dient der...", en: "The flower serves for...", hu: "A virág a ... szolgál", ro: "Floarea servește pentru..." },
      };
      const a = {
        stamens: { de: "Staubgefäße", en: "Stamens", hu: "Porzók", ro: "Stamine" },
        repro: { de: "Fortpflanzung", en: "Reproduction", hu: "Szaporodás", ro: "Reproducere" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("pflanzen", "flower_structure", getT(t.pollen, lang), getT(a.stamens, lang),
            { de: ["Kelch", "Krone", "Fruchtknoten"], en: ["Calyx", "Corolla", "Ovary"], hu: ["Csésze", "Párta", "Magház"], ro: ["Caliciu", "Corolă", "Ovar"] }[lang] || ["Kelch", "Krone", "Fruchtknoten"], rng),
          createMCQ("pflanzen", "flower_structure", getT(t.purpose, lang), getT(a.repro, lang),
            { de: ["Ernährung", "Stützung", "Wasserspeicherung"], en: ["Nutrition", "Support", "Water storage"], hu: ["Táplálkozás", "Alátámasztás", "Vízraktározás"], ro: ["Nutriție", "Susținere", "Stocarea apei"] }[lang] || ["Ernährung", "Stützung", "Wasserspeicherung"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    flower_structure_typing: (seed?: number, lang: string = "de") => {
      const t = {
        parts: { de: "Nenne die Teile einer Blüte", en: "Name the parts of a flower", hu: "Nevezd meg a virág részeit", ro: "Numește părțile unei flori" },
        pollination: { de: "Was ist Bestäubung?", en: "What is pollination?", hu: "Mi a beporzás?", ro: "Ce este polenizarea?" },
        insect: { de: "Welches Insekt bestäubt Blüten?", en: "Which insect pollinates flowers?", hu: "Melyik rovar porozza be a virágokat?", ro: "Ce insectă polenizează florile?" },
        pistil: { de: "Wie heißt der weibliche Blütenteil?", en: "What is the name of the female flower part?", hu: "Hogy hívják a virág női részét?", ro: "Cum se numește partea feminină a florii?" },
        color: { de: "Welche Farbe hat die Krone meist?", en: "What color is the corolla usually?", hu: "Milyen színű általában a párta?", ro: "Ce culoare are de obicei corola?" },
      };
      return [
        createTyping("pflanzen", "flower_structure", getT(t.parts, lang), [{ de: "Kelch, Krone, Staubgefäße, Stempel", en: "Calyx, corolla, stamens, pistil", hu: "Csésze, párta, porzók, termő", ro: "Caliciu, corolă, stamine, pistil" }[lang] || "Kelch, Krone, Staubgefäße, Stempel"]),
        createTyping("pflanzen", "flower_structure", getT(t.pollination, lang), [{ de: "Pollenübertragung", en: "Pollen transfer", hu: "Pollenátvitel", ro: "Transfer de polen" }[lang] || "Pollenübertragung"]),
        createTyping("pflanzen", "flower_structure", getT(t.insect, lang), [{ de: "Biene", en: "Bee", hu: "Méh", ro: "Albină" }[lang] || "Biene"]),
        createTyping("pflanzen", "flower_structure", getT(t.pistil, lang), [{ de: "Stempel", en: "Pistil", hu: "Termő", ro: "Pistil" }[lang] || "Stempel"]),
        createTyping("pflanzen", "flower_structure", getT(t.color, lang), [{ de: "Bunt", en: "Colorful", hu: "Színes", ro: "Colorat" }[lang] || "Bunt"]),
      ];
    },

    plant_reproduction: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        germ: { de: "Wie heißt der Prozess, wenn Samen keimen?", en: "What is the process called when seeds sprout?", hu: "Hogy hívják a folyamatot, amikor a magok kikelnek?", ro: "Cum se numește procesul când semințele încolțesc?" },
        need: { de: "Ein Samen braucht zum Keimen...", en: "A seed needs to germinate...", hu: "A magnak a csírázáshoz szüksége van...", ro: "O sămânță are nevoie pentru a încolți de..." },
      };
      const a = {
        germ: { de: "Keimung", en: "Germination", hu: "Csírázás", ro: "Germinare" },
        cond: { de: "Wasser, Wärme, Luft", en: "Water, warmth, air", hu: "Víz, hő, levegő", ro: "Apă, căldură, aer" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("pflanzen", "plant_reproduction", getT(t.germ, lang), getT(a.germ, lang),
            { de: ["Pollination", "Befruchtung", "Blüte"], en: ["Pollination", "Fertilization", "Flowering"], hu: ["Beporzás", "Megtermékenyítés", "Virágzás"], ro: ["Polenizare", "Fertilizare", "Înflorire"] }[lang] || ["Pollination", "Befruchtung", "Blüte"], rng),
          createMCQ("pflanzen", "plant_reproduction", getT(t.need, lang), getT(a.cond, lang),
            { de: ["Nur Sonne", "Nur Nährstoffe", "Nur Wasser"], en: ["Only sun", "Only nutrients", "Only water"], hu: ["Csak napfény", "Csak tápanyagok", "Csak víz"], ro: ["Doar soare", "Doar nutrienți", "Doar apă"] }[lang] || ["Nur Sonne", "Nur Nährstoffe", "Nur Wasser"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    plant_reproduction_typing: (seed?: number, lang: string = "de") => {
      const t = {
        seed: { de: "Was ist ein Samen?", en: "What is a seed?", hu: "Mi a mag?", ro: "Ce este o sămânță?" },
        leaf: { de: "Wie heißt das erste Blatt bei der Keimung?", en: "What is the name of the first leaf during germination?", hu: "Hogy hívják az első levelet a csírázáskor?", ro: "Cum se numește prima frunză la germinare?" },
        cond: { de: "Nenne 3 Bedingungen für die Keimung", en: "Name 3 conditions for germination", hu: "Nevezz meg 3 feltételt a csírázáshoz", ro: "Numește 3 condiții pentru germinare" },
        sex: { de: "Was ist sexuelle Vermehrung?", en: "What is sexual reproduction?", hu: "Mi az ivaros szaporodás?", ro: "Ce este reproducerea sexuală?" },
        veg: { de: "Was ist vegetative Vermehrung?", en: "What is vegetative reproduction?", hu: "Mi az ivartalan szaporodás?", ro: "Ce este reproducerea vegetativă?" },
      };
      return [
        createTyping("pflanzen", "plant_reproduction", getT(t.seed, lang), [{ de: "Keimling", en: "Seedling", hu: "Csíra", ro: "Germen" }[lang] || "Keimling"]),
        createTyping("pflanzen", "plant_reproduction", getT(t.leaf, lang), [{ de: "Keimblatt", en: "Cotyledon", hu: "Sziklevél", ro: "Cotiledon" }[lang] || "Keimblatt"]),
        createTyping("pflanzen", "plant_reproduction", getT(t.cond, lang), [{ de: "Wasser, Wärme, Luft", en: "Water, warmth, air", hu: "Víz, hő, levegő", ro: "Apă, căldură, aer" }[lang] || "Wasser, Wärme, Luft"]),
        createTyping("pflanzen", "plant_reproduction", getT(t.sex, lang), [{ de: "Mit Samen", en: "With seeds", hu: "Maggal", ro: "Prin semințe" }[lang] || "Mit Samen"]),
        createTyping("pflanzen", "plant_reproduction", getT(t.veg, lang), [{ de: "Ohne Samen", en: "Without seeds", hu: "Mag nélkül", ro: "Fără semințe" }[lang] || "Ohne Samen"]),
      ];
    },

    plant_types: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        no_flow: { de: "Welche ist keine blühende Pflanze?", en: "Which is not a flowering plant?", hu: "Melyik nem virágos növény?", ro: "Care nu este o plantă cu flori?" },
        ferns: { de: "Farne sind Pflanzen ohne...", en: "Ferns are plants without...", hu: "A páfrányok ... nélküli növények", ro: "Ferigile sunt plante fără..." },
      };
      const a = {
        moss: { de: "Moos", en: "Moss", hu: "Moha", ro: "Mușchi" },
        flowers: { de: "Blüten", en: "Flowers", hu: "Virágok", ro: "Flori" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("pflanzen", "plant_types", getT(t.no_flow, lang), getT(a.moss, lang),
            { de: ["Rose", "Weizen", "Apfelbaum"], en: ["Rose", "Wheat", "Apple tree"], hu: ["Rózsa", "Búza", "Almafa"], ro: ["Trandafir", "Grâu", "Măr"] }[lang] || ["Rose", "Weizen", "Apfelbaum"], rng),
          createMCQ("pflanzen", "plant_types", getT(t.ferns, lang), getT(a.flowers, lang),
            { de: ["Blätter", "Stamm", "Wurzeln"], en: ["Leaves", "Stem", "Roots"], hu: ["Levelek", "Szár", "Gyökerek"], ro: ["Frunze", "Tulpină", "Rădăcini"] }[lang] || ["Blätter", "Stamm", "Wurzeln"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    plant_types_typing: (seed?: number, lang: string = "de") => {
      const t = {
        no_flow: { de: "Nenne eine nicht-blühende Pflanze", en: "Name a non-flowering plant", hu: "Nevezz meg egy nem virágos növényt", ro: "Dă un exemplu de plantă fără flori" },
        spores: { de: "Welche Pflanzen haben Sporen?", en: "Which plants have spores?", hu: "Melyik növényeknek van spórája?", ro: "Care plante au spori?" },
        flow: { de: "Nenne eine blühende Pflanze", en: "Name a flowering plant", hu: "Nevezz meg egy virágos növényt", ro: "Dă un exemplu de plantă cu flori" },
        grass: { de: "Gräser haben wie viele Keimblätter?", en: "How many cotyledons do grasses have?", hu: "Hány sziklevele van a füveknek?", ro: "Câte cotiledoane au ierbile?" },
        dicot: { de: "Nenne eine zweikeimblättrige Pflanze", en: "Name a dicot plant", hu: "Nevezz meg egy kétszikű növényt", ro: "Dă un exemplu de plantă dicotiledonată" },
      };
      return [
        createTyping("pflanzen", "plant_types", getT(t.no_flow, lang), [{ de: "Moos", en: "Moss", hu: "Moha", ro: "Mușchi" }[lang] || "Moos"]),
        createTyping("pflanzen", "plant_types", getT(t.spores, lang), [{ de: "Moos, Farn", en: "Moss, fern", hu: "Moha, páfrány", ro: "Mușchi, ferigă" }[lang] || "Moos, Farn"]),
        createTyping("pflanzen", "plant_types", getT(t.flow, lang), [{ de: "Rose", en: "Rose", hu: "Rózsa", ro: "Trandafir" }[lang] || "Rose"]),
        createTyping("pflanzen", "plant_types", getT(t.grass, lang), ["1", { de: "eins", en: "one", hu: "egy", ro: "unu" }[lang] || "eins"]),
        createTyping("pflanzen", "plant_types", getT(t.dicot, lang), [{ de: "Bohne", en: "Bean", hu: "Bab", ro: "Fasole" }[lang] || "Bohne"]),
      ];
    },
  },

  // KÖRPER (4 subtopics)
  koerper: {
    skeleton: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        protects: { de: "[BONE] schützt das/die [PROT]?", en: "[BONE] protects the [PROT]?", hu: "A [BONE] védi a [PROT]-t?", ro: "[BONE] protejează [PROT]?" },
        loc: { de: "Wo ist der [BONE]?", en: "Where is the [BONE]?", hu: "Hol van a [BONE]?", ro: "Unde este [BONE]?" },
      };
      for (let i = 0; i < 30; i++) {
        const bone = pick(BONES, rng);
        questions.push(
          createMCQ("koerper", "skeleton", getT(t.protects, lang).replace("[BONE]", getT(bone.bone, lang)).replace("[PROT]", getT(bone.protects, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("koerper", "skeleton", getT(t.loc, lang).replace("[BONE]", getT(bone.bone, lang)), getT(bone.location, lang),
            { de: ["Bein", "Arm", "Bauch"], en: ["Leg", "Arm", "Abdomen"], hu: ["Láb", "Kar", "Has"], ro: ["Picior", "Braț", "Abdomen"] }[lang] || ["Bein", "Arm", "Bauch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    skeleton_typing: (seed?: number, lang: string = "de") => {
      const t = {
        count: { de: "Wie viele Knochen hat ein Mensch?", en: "How many bones does a human have?", hu: "Hány csontja van egy embernek?", ro: "Câte oase are un om?" },
        protect: { de: "Was schützt die Wirbelsäule?", en: "What does the spine protect?", hu: "Mit véd a gerincoszlop?", ro: "Ce protejează coloana vertebrală?" },
        long: { de: "Welcher Knochen ist der längste?", en: "Which bone is the longest?", hu: "Melyik a leghosszabb csont?", ro: "Care os este cel mai lung?" },
        skull: { de: "Was ist der Schädel?", en: "What is the skull?", hu: "Mi a koponya?", ro: "Ce este craniul?" },
        func: { de: "Welche Funktion hat das Skelett?", en: "What is the function of the skeleton?", hu: "Mi a csontváz funkciója?", ro: "Care este funcția scheletului?" },
      };
      return [
        createTyping("koerper", "skeleton", getT(t.count, lang), ["206"]),
        createTyping("koerper", "skeleton", getT(t.protect, lang), [getT(BONES[1].protects, lang)]),
        createTyping("koerper", "skeleton", getT(t.long, lang), [{ de: "Oberschenkelknochen", en: "Femur", hu: "Combcsont", ro: "Femur" }[lang] || "Oberschenkelknochen"]),
        createTyping("koerper", "skeleton", getT(t.skull, lang), [getT(BONES[0].bone, lang)]),
        createTyping("koerper", "skeleton", getT(t.func, lang), [{ de: "Stützung", en: "Support", hu: "Alátámasztás", ro: "Susținere" }[lang] || "Stützung"]),
      ];
    },

    muscles: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        func: { de: "[MUSCLE] Funktion: [FUNC]?", en: "[MUSCLE] function: [FUNC]?", hu: "[MUSCLE] funkciója: [FUNC]?", ro: "[MUSCLE] funcție: [FUNC]?" },
        type: { de: "Der [MUSCLE] ist ein [TYPE] Muskel?", en: "The [MUSCLE] is an [TYPE] muscle?", hu: "A [MUSCLE] egy [TYPE] izom?", ro: "[MUSCLE] este un mușchi [TYPE]?" },
      };
      for (let i = 0; i < 30; i++) {
        const muscle = pick(MUSCLES, rng);
        questions.push(
          createMCQ("koerper", "muscles", getT(t.func, lang).replace("[MUSCLE]", getT(muscle.muscle, lang)).replace("[FUNC]", getT(muscle.function, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("koerper", "muscles", getT(t.type, lang).replace("[MUSCLE]", getT(muscle.muscle, lang)).replace("[TYPE]", getT(muscle.type, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    muscles_typing: (seed?: number, lang: string = "de") => {
      const t = {
        count: { de: "Wie viele Muskeln hat der Körper etwa?", en: "About how many muscles does the body have?", hu: "Körülbelül hány izom van a testben?", ro: "Aproximativ câți mușchi are corpul?" },
        invol: { de: "Was ist ein unwillkürlicher Muskel?", en: "What is an involuntary muscle?", hu: "Mi az akaratlan izom?", ro: "Ce este un mușchi involuntar?" },
        large: { de: "Nenne einen großen Muskel", en: "Name a large muscle", hu: "Nevezz meg egy nagy izmot", ro: "Dă un exemplu de mușchi mare" },
        unit: { de: "Was ist die kleinste Einheit des Muskels?", en: "What is the smallest unit of the muscle?", hu: "Mi az izom legkisebb egysége?", ro: "Care este cea mai mică unitate a mușchiului?" },
        func: { de: "Muskeln sind für...", en: "Muscles are for...", hu: "Az izmok a ... szolgálnak", ro: "Mușchii sunt pentru..." },
      };
      return [
        createTyping("koerper", "muscles", getT(t.count, lang), ["600"]),
        createTyping("koerper", "muscles", getT(t.invol, lang), [getT(MUSCLES[0].muscle, lang)]),
        createTyping("koerper", "muscles", getT(t.large, lang), [getT(MUSCLES[1].muscle, lang)]),
        createTyping("koerper", "muscles", getT(t.unit, lang), [{ de: "Sarkomer", en: "Sarcomere", hu: "Szarkomer", ro: "Sarcomer" }[lang] || "Sarkomer"]),
        createTyping("koerper", "muscles", getT(t.func, lang), [{ de: "Bewegung", en: "Movement", hu: "Mozgás", ro: "Mișcare" }[lang] || "Bewegung"]),
      ];
    },

    skin: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        func: { de: "Welche ist eine Funktion der Haut?", en: "Which is a function of the skin?", hu: "Melyik a bőr egyik funkciója?", ro: "Care este o funcție a pielii?" },
        layers: { de: "Die Haut hat wie viele Schichten?", en: "How many layers does the skin have?", hu: "Hány rétege van a bőrnek?", ro: "Câte straturi are pielea?" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("koerper", "skin", getT(t.func, lang), { de: "Schutz", en: "Protection", hu: "Védelem", ro: "Protecție" }[lang] || "Schutz",
            { de: ["Verdauung", "Atmung", "Zirkulation"], en: ["Digestion", "Breathing", "Circulation"], hu: ["Emésztés", "Légzés", "Keringés"], ro: ["Digestie", "Respirație", "Circulație"] }[lang] || ["Verdauung", "Atmung", "Zirkulation"], rng),
          createMCQ("koerper", "skin", getT(t.layers, lang), "3", ["2", "4", "5"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    skin_typing: (seed?: number, lang: string = "de") => {
      const t = {
        outer: { de: "Was ist die äußerste Hautschicht?", en: "What is the outermost layer of the skin?", hu: "Mi a legkülső bőrréteg?", ro: "Care este stratul exterior al pielii?" },
        blood: { de: "Welche Schicht hat Blutgefäße?", en: "Which layer has blood vessels?", hu: "Melyik rétegben vannak vérerek?", ro: "Care strat are vase de sânge?" },
        below: { de: "Was ist unter der Dermis?", en: "What is below the dermis?", hu: "Mi van az irha (dermis) alatt?", ro: "Ce este sub dermă?" },
        percent: { de: "Wie viel % des Körpergewichts ist etwa Haut?", en: "About what % of body weight is skin?", hu: "A testsúly kb. hány %-a a bőr?", ro: "Aproximativ ce % din greutatea corpului este pielea?" },
        protect: { de: "Haut schützt vor...", en: "Skin protects against...", hu: "A bőr véd a ... ellen", ro: "Pielea protejează împotriva..." },
      };
      return [
        createTyping("koerper", "skin", getT(t.outer, lang), [{ de: "Epidermis", en: "Epidermis", hu: "Hámréteg", ro: "Epidermă" }[lang] || "Epidermis"]),
        createTyping("koerper", "skin", getT(t.blood, lang), [{ de: "Dermis", en: "Dermis", hu: "Irha", ro: "Dermă" }[lang] || "Dermis"]),
        createTyping("koerper", "skin", getT(t.below, lang), [{ de: "Hypodermis", en: "Hypodermis", hu: "Bőralja", ro: "Hipodermă" }[lang] || "Hypodermis"]),
        createTyping("koerper", "skin", getT(t.percent, lang), ["16"]),
        createTyping("koerper", "skin", getT(t.protect, lang), [{ de: "UV, Infektionen", en: "UV, infections", hu: "UV, fertőzések", ro: "UV, infecții" }[lang] || "UV, Infektionen"]),
      ];
    },

    body_systems: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        blood: { de: "Welches System transportiert Blut?", en: "Which system transports blood?", hu: "Melyik rendszer szállítja a vért?", ro: "Care sistem transportă sângele?" },
        breath: { de: "Das Atmen ist Funktion des...", en: "Breathing is a function of the...", hu: "A légzés a ... funkciója", ro: "Respirația este funcția..." },
      };
      const a = {
        circ: { de: "Kreislauf", en: "Circulation", hu: "Keringési rendszer", ro: "Sistem circulator" },
        resp: { de: "Atemsystem", en: "Respiratory system", hu: "Légzőrendszer", ro: "Sistem respirator" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("koerper", "body_systems", getT(t.blood, lang), getT(a.circ, lang),
            { de: ["Nerven", "Verdauung", "Lymph"], en: ["Nerves", "Digestion", "Lymph"], hu: ["Idegrendszer", "Emésztés", "Nyirokrendszer"], ro: ["Nervi", "Digestie", "Limfă"] }[lang] || ["Nerven", "Verdauung", "Lymph"], rng),
          createMCQ("koerper", "body_systems", getT(t.breath, lang), getT(a.resp, lang),
            { de: ["Verdauung", "Nierensystem", "Hormonsystem"], en: ["Digestion", "Urinary system", "Endocrine system"], hu: ["Emésztés", "Kiválasztó rendszer", "Hormonrendszer"], ro: ["Digestie", "Sistem urinar", "Sistem endocrin"] }[lang] || ["Verdauung", "Nierensystem", "Hormonsystem"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    body_systems_typing: (seed?: number, lang: string = "de") => {
      const t = {
        list: { de: "Nenne 3 Körpersysteme", en: "Name 3 body systems", hu: "Nevezz meg 3 szervrendszert", ro: "Numește 3 sisteme ale corpului" },
        lymph: { de: "Was ist die Hauptfunktion des Lymphsystems?", en: "What is the main function of the lymphatic system?", hu: "Mi a nyirokrendszer fő funkciója?", ro: "Care este funcția principală a sistemului limfatic?" },
        endo: { de: "Das Hormonsystem heißt auch...", en: "The hormonal system is also called...", hu: "A hormonrendszert más néven ... hívják", ro: "Sistemul hormonal se mai numește și..." },
        nerv: { de: "Das Nervensystem teilt sich in...", en: "The nervous system is divided into...", hu: "Az idegrendszer felosztható ...", ro: "Sistemul nervos este împărțit în..." },
        ph: { de: "Welches System reguliert hauptsächlich den pH-Wert?", en: "Which system mainly regulates the pH value?", hu: "Melyik rendszer szabályozza főként a pH-értéket?", ro: "Care sistem reglează în principal valoarea pH-ului?" },
      };
      return [
        createTyping("koerper", "body_systems", getT(t.list, lang), [{ de: "Kreislauf, Atmung, Verdauung", en: "Circulation, respiration, digestion", hu: "Keringés, légzés, emésztés", ro: "Circulație, respirație, digestie" }[lang] || "Kreislauf, Atmung, Verdauung"]),
        createTyping("koerper", "body_systems", getT(t.lymph, lang), [{ de: "Immunität", en: "Immunity", hu: "Immunitás", ro: "Immunitate" }[lang] || "Immunität"]),
        createTyping("koerper", "body_systems", getT(t.endo, lang), [{ de: "Endokrin", en: "Endocrine", hu: "Endokrin", ro: "Endocrin" }[lang] || "Endokrin"]),
        createTyping("koerper", "body_systems", getT(t.nerv, lang), [{ de: "Zentral und Peripher", en: "Central and Peripheral", hu: "Központi és környéki", ro: "Central și periferic" }[lang] || "Zentral und Peripher"]),
        createTyping("koerper", "body_systems", getT(t.ph, lang), [{ de: "Nieren", en: "Kidneys", hu: "Vesék", ro: "Rinichi" }[lang] || "Nieren"]),
      ];
    },
  },

  // SINNESORGANE (5 subtopics)
  sinnesorgane: {
    eye: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        layers: { de: "Das Auge hat wie viele Schichten?", en: "How many layers does the eye have?", hu: "Hány rétege van a szemnek?", ro: "Câte straturi are ochiul?" },
        iris: { de: "Die Iris reguliert die...", en: "The iris regulates the...", hu: "Az írisz szabályozza a...", ro: "Irisul reglează..." },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("sinnesorgane", "eye", getT(t.layers, lang), "3", ["2", "4", "5"], rng),
          createMCQ("sinnesorgane", "eye", getT(t.iris, lang), { de: "Pupillengröße", en: "Pupil size", hu: "Pupillaméret", ro: "Mărimea pupilei" }[lang] || "Pupillengröße",
            { de: ["Fokus", "Tränen", "Scharfe"], en: ["Focus", "Tears", "Sharpness"], hu: ["Fókusz", "Könnyek", "Élesség"], ro: ["Focalizare", "Lacrimi", "Claritate"] }[lang] || ["Fokus", "Tränen", "Scharfe"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    eye_typing: (seed?: number, lang: string = "de") => {
      const t = {
        focus: { de: "Welcher Teil fokussiert das Auge?", en: "Which part focuses the eye?", hu: "Melyik rész fókuszálja a szemet?", ro: "Ce parte focalizează ochiul?" },
        iris: { de: "Was ist die Iris?", en: "What is the iris?", hu: "Mi az írisz?", ro: "Ce este irisul?" },
        retina: { de: "Welche Schicht hat Photorezeptoren?", en: "Which layer has photoreceptors?", hu: "Melyik rétegben vannak fotoreceptorok?", ro: "Care strat are fotoreceptori?" },
        blind: { de: "Was ist der blinde Fleck?", en: "What is the blind spot?", hu: "Mi a vakfolt?", ro: "Ce este pata oarbă?" },
        color: { de: "Welche Farbenblindheit ist am häufigsten?", en: "Which color blindness is most common?", hu: "Melyik színtévesztés a leggyakoribb?", ro: "Care daltonism este cel mai frecvent?" },
      };
      return [
        createTyping("sinnesorgane", "eye", getT(t.focus, lang), [{ de: "Linse", en: "Lens", hu: "Lencse", ro: "Lentilă" }[lang] || "Linse"]),
        createTyping("sinnesorgane", "eye", getT(t.iris, lang), [{ de: "Farbteil", en: "Colored part", hu: "Szivárványhártya", ro: "Partea colorată" }[lang] || "Farbteil"]),
        createTyping("sinnesorgane", "eye", getT(t.retina, lang), [{ de: "Netzhaut", en: "Retina", hu: "Retina", ro: "Retină" }[lang] || "Netzhaut"]),
        createTyping("sinnesorgane", "eye", getT(t.blind, lang), [{ de: "Optischer Nerv", en: "Optic nerve", hu: "Látóideg kilépése", ro: "Nervul optic" }[lang] || "Optischer Nerv"]),
        createTyping("sinnesorgane", "eye", getT(t.color, lang), [{ de: "Rot-Grün", en: "Red-green", hu: "Vörös-zöld", ro: "Roșu-verde" }[lang] || "Rot-Grün"]),
      ];
    },

    ear: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        cells: { de: "Wo sind die Hörzellen?", en: "Where are the hearing cells?", hu: "Hol találhatók a hallósejtek?", ro: "Unde sunt celulele auditive?" },
        cochlea: { de: "Die Schnecke ist Teil des...", en: "The cochlea is part of the...", hu: "A csiga a ... része", ro: "Melcul este parte a..." },
      };
      const a = {
        inner: { de: "Innenohr", en: "Inner ear", hu: "Belső fül", ro: "Urechea internă" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("sinnesorgane", "ear", getT(t.cells, lang), getT(a.inner, lang),
            { de: ["Außenohr", "Mittelohr", "Trommelfell"], en: ["Outer ear", "Middle ear", "Eardrum"], hu: ["Külső fül", "Középfül", "Dobhártya"], ro: ["Urechea externă", "Urechea medie", "Timpan"] }[lang] || ["Außenohr", "Mittelohr", "Trommelfell"], rng),
          createMCQ("sinnesorgane", "ear", getT(t.cochlea, lang), getT(a.inner, lang),
            { de: ["Mittelohr", "Außenohr", "Gehörgang"], en: ["Middle ear", "Outer ear", "Ear canal"], hu: ["Középfül", "Külső fül", "Hallójárat"], ro: ["Urechea medie", "Urechea externă", "Canalul auditiv"] }[lang] || ["Mittelohr", "Außenohr", "Ohr"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    ear_typing: (seed?: number, lang: string = "de") => {
      const t = {
        cochlea: { de: "Welches Organ heißt auch Cochlea?", en: "Which organ is also called the cochlea?", hu: "Melyik szervet hívják cochleának is?", ro: "Care organ se mai numește și cochlee?" },
        tube: { de: "Die Ohrtrompete verbindet das Mittelohr mit dem...", en: "The Eustachian tube connects the middle ear to the...", hu: "A fülkürt összeköti a középfület a...", ro: "Trompa lui Eustachio conectează urechea medie cu..." },
        bones: { de: "Nenne die drei Gehörknöchelchen", en: "Name the three auditory ossicles", hu: "Nevezd meg a három hallócsontocskát", ro: "Numește cele trei oscioare auditive" },
        balance: { de: "Der Gleichgewichtssinn ist im...", en: "The sense of balance is in the...", hu: "Az egyensúlyérzék a ... található", ro: "Simțul echilibrului este în..." },
        sound: { de: "Hören erfolgt durch...", en: "Hearing occurs through...", hu: "A hallás ... történik", ro: "Auzul are loc prin..." },
      };
      return [
        createTyping("sinnesorgane", "ear", getT(t.cochlea, lang), [{ de: "Schnecke", en: "Cochlea", hu: "Csiga", ro: "Melc" }[lang] || "Schnecke"]),
        createTyping("sinnesorgane", "ear", getT(t.tube, lang), [{ de: "Rachen", en: "Throat", hu: "Garat", ro: "Gât" }[lang] || "Rachen"]),
        createTyping("sinnesorgane", "ear", getT(t.bones, lang), [{ de: "Hammer, Amboss, Steigbügel", en: "Hammer, anvil, stirrup", hu: "Kalapács, üllő, kengyel", ro: "Ciocan, nicovală, scăriță" }[lang] || "Hammer, Amboss, Steigbügel"]),
        createTyping("sinnesorgane", "ear", getT(t.balance, lang), [{ de: "Innenohr", en: "Inner ear", hu: "Belső fül", ro: "Urechea internă" }[lang] || "Innenohr"]),
        createTyping("sinnesorgane", "ear", getT(t.sound, lang), [{ de: "Schallwellen", en: "Sound waves", hu: "Hanghullámok", ro: "Unde sonore" }[lang] || "Schallwellen"]),
      ];
    },

    nose: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        sense: { de: "Der Geruchssinn ist im...", en: "The sense of smell is in the...", hu: "A szaglás a ... található", ro: "Simțul mirosului este în..." },
        recep: { de: "Riechrezeptoren sind...", en: "Smell receptors are...", hu: "A szaglóreceptorok ...", ro: "Receptorii olfactivi sunt..." },
      };
      const a = {
        epi: { de: "Nasenepithel", en: "Nasal epithelium", hu: "Szaglóhám", ro: "Epiteliu nazal" },
        chem: { de: "Chemorezeptoren", en: "Chemoreceptors", hu: "Kemoreceptorok", ro: "Chemoreceptori" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("sinnesorgane", "nose", getT(t.sense, lang), getT(a.epi, lang),
            { de: ["Zunge", "Haut", "Ohr"], en: ["Tongue", "Skin", "Ear"], hu: ["Nyelv", "Bőr", "Fül"], ro: ["Limbă", "Piele", "Ureche"] }[lang] || ["Zunge", "Haut", "Ohr"], rng),
          createMCQ("sinnesorgane", "nose", getT(t.recep, lang), getT(a.chem, lang),
            { de: ["Photorezeptoren", "Mechanorezeptoren", "Thermorezeptoren"], en: ["Photoreceptors", "Mechanoreceptors", "Thermoreceptors"], hu: ["Fotoreceptorok", "Mechanoreceptorok", "Termoreceptorok"], ro: ["Fotoreceptori", "Mecanoreceptori", "Termoreceptori"] }[lang] || ["Photorezeptoren", "Mechanorezeptoren", "Thermorezeptoren"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    nose_typing: (seed?: number, lang: string = "de") => {
      const t = {
        epi: { de: "Was ist das Riechepithel?", en: "What is the olfactory epithelium?", hu: "Mi a szaglóhám?", ro: "Ce este epiteliul olfactiv?" },
        count: { de: "Wie viele Düfte kann die Nase etwa erkennen?", en: "About how many scents can the nose recognize?", hu: "Körülbelül hány illatot tud az orr felismerni?", ro: "Aproximativ câte mirosuri poate recunoaște nasul?" },
        nerve: { de: "Der Riechnerv ist der...", en: "The olfactory nerve is the...", hu: "A szaglóideg a ...", ro: "Nervul olfactiv este..." },
        sneeze: { de: "Niesen ist ein...", en: "Sneezing is a...", hu: "A tüsszentés egy...", ro: "Strănutul este un..." },
        old: { de: "Viele alte Menschen verlieren den Sinn für...", en: "Many old people lose their sense of...", hu: "Sok idős ember elveszíti a ... érzékét", ro: "Mulți oameni în vârstă își pierd simțul..." },
      };
      return [
        createTyping("sinnesorgane", "nose", getT(t.epi, lang), [{ de: "Geruchszellen", en: "Smell cells", hu: "Szaglósejtek", ro: "Celule olfactive" }[lang] || "Geruchszellen"]),
        createTyping("sinnesorgane", "nose", getT(t.count, lang), ["1000", { de: "Tausende", en: "Thousands", hu: "Ezrek", ro: "Mii" }[lang] || "1000"]),
        createTyping("sinnesorgane", "nose", getT(t.nerve, lang), [{ de: "Olfaktorischer Nerv", en: "Olfactory nerve", hu: "Szaglóideg", ro: "Nerv olfactiv" }[lang] || "Olfaktorischer Nerv"]),
        createTyping("sinnesorgane", "nose", getT(t.sneeze, lang), [{ de: "Reflex", en: "Reflex", hu: "Reflex", ro: "Reflex" }[lang] || "Reflex"]),
        createTyping("sinnesorgane", "nose", getT(t.old, lang), [{ de: "Geruch", en: "Smell", hu: "Szaglás", ro: "Miros" }[lang] || "Geruch"]),
      ];
    },

    tongue: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        buds: { de: "Geschmacksknospen sind auf der...", en: "Taste buds are on the...", hu: "Az ízlelőbimbók a ... vannak", ro: "Papilele gustative sunt pe..." },
        count: { de: "Wie viele Grundgeschmacksrichtungen gibt es?", en: "How many basic tastes are there?", hu: "Hány alapíz létezik?", ro: "Câte gusturi de bază există?" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("sinnesorgane", "tongue", getT(t.buds, lang), getT(SENSES[3].organ, lang),
            { de: ["Mund", "Lippe", "Zahnfleisch"], en: ["Mouth", "Lip", "Gums"], hu: ["Száj", "Ajak", "Íny"], ro: ["Gură", "Buze", "Gingii"] }[lang] || ["Mund", "Lippe", "Zahnfleisch"], rng),
          createMCQ("sinnesorgane", "tongue", getT(t.count, lang), "5", ["4", "6", "3"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    tongue_typing: (seed?: number, lang: string = "de") => {
      const t = {
        list: { de: "Die 5 Geschmacksrichtungen sind...", en: "The 5 tastes are...", hu: "Az 5 alapíz a következő:", ro: "Cele 5 gusturi sunt..." },
        papillae: { de: "Was sind Papillen?", en: "What are papillae?", hu: "Mik azok a papillák?", ro: "Ce sunt papilele?" },
        sweet: { de: "Wo schmeckt die Zunge meist süß?", en: "Where does the tongue usually taste sweet?", hu: "Hol érzi a nyelv leginkább az édeset?", ro: "Unde simte limba cel mai mult dulcele?" },
        bitter: { de: "Bitter wird meist am... wahrgenommen", en: "Bitter is usually perceived at the...", hu: "A keserűt leginkább a ... érezzük", ro: "Amarul este perceput de obicei la..." },
        flavor: { de: "Geschmack und Geruch zusammen ergeben den...", en: "Taste and smell together result in the...", hu: "Az ízlelés és a szaglás együtt adja a...", ro: "Gustul și mirosul împreună dau..." },
      };
      return [
        createTyping("sinnesorgane", "tongue", getT(t.list, lang), [{ de: "Süß, Salzig, Sauer, Bitter, Umami", en: "Sweet, salty, sour, bitter, umami", hu: "Édes, sós, savanyú, keserű, umami", ro: "Dulce, sărat, acru, amar, umami" }[lang] || "Süß, Salzig, Sauer, Bitter, Umami"]),
        createTyping("sinnesorgane", "tongue", getT(t.papillae, lang), [{ de: "Zungenhöcker", en: "Tongue bumps", hu: "Ízlelőbimbók struktúrája", ro: "Papile" }[lang] || "Zungenhöcker"]),
        createTyping("sinnesorgane", "tongue", getT(t.sweet, lang), [{ de: "Spitze", en: "Tip", hu: "A nyelv hegye", ro: "Vârf" }[lang] || "Spitze"]),
        createTyping("sinnesorgane", "tongue", getT(t.bitter, lang), [{ de: "Hinten", en: "Back", hu: "Hátul", ro: "Spate" }[lang] || "Hinten"]),
        createTyping("sinnesorgane", "tongue", getT(t.flavor, lang), [{ de: "Geschmack", en: "Flavor", hu: "Zamat", ro: "Aromă" }[lang] || "Geschmack"]),
      ];
    },

    skin_sense: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        mech: { de: "Mechanorezeptoren sind für...", en: "Mechanoreceptors are for...", hu: "A mechanoreceptorok a ... szolgálnak", ro: "Mecanoreceptorii sunt pentru..." },
        therm: { de: "Thermorezeptoren erkennen...", en: "Thermoreceptors detect...", hu: "A termoreceptorok érzékelik a...", ro: "Termoreceptorii detectează..." },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("sinnesorgane", "skin_sense", getT(t.mech, lang), { de: "Berührung", en: "Touch", hu: "Érintés", ro: "Atingere" }[lang] || "Berührung",
            { de: ["Wärme", "Licht", "Schall"], en: ["Heat", "Light", "Sound"], hu: ["Hő", "Fény", "Hang"], ro: ["Căldură", "Lumină", "Sunet"] }[lang] || ["Wärme", "Licht", "Schall"], rng),
          createMCQ("sinnesorgane", "skin_sense", getT(t.therm, lang), { de: "Temperatur", en: "Temperature", hu: "Hőmérséklet", ro: "Temperatură" }[lang] || "Temperatur",
            { de: ["Druck", "Schmerz", "Textur"], en: ["Pressure", "Pain", "Texture"], hu: ["Nyomás", "Fájdalom", "Textúra"], ro: ["Presiune", "Durere", "Textură"] }[lang] || ["Druck", "Schmerz", "Textur"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    skin_sense_typing: (seed?: number, lang: string = "de") => {
      const t = {
        merkel: { de: "Merkel-Zellen sind ein Typ von...", en: "Merkel cells are a type of...", hu: "A Merkel-sejtek egyfajta ...", ro: "Celulele Merkel sunt un tip de..." },
        pain: { de: "Schmerzrezeptoren heißen...", en: "Pain receptors are called...", hu: "A fájdalomreceptorokat ... hívják", ro: "Receptorii de durere se numesc..." },
        cold: { de: "Kälterezeptoren reagieren auf...", en: "Cold receptors react to...", hu: "A hidegreceptorok reagálnak a...", ro: "Receptorii de frig reacționează la..." },
        warm: { de: "Wärmerezeptoren sind in der...", en: "Heat receptors are in the...", hu: "A hőreceptorok a ... találhatók", ro: "Receptorii de căldură sunt în..." },
        proprio: { de: "Propriozeption ist...", en: "Proprioception is...", hu: "A propriocepció a...", ro: "Propriocepția este..." },
      };
      return [
        createTyping("sinnesorgane", "skin_sense", getT(t.merkel, lang), [getT(SENSES[4].receptor, lang)]),
        createTyping("sinnesorgane", "skin_sense", getT(t.pain, lang), [{ de: "Nozizeptoren", en: "Nociceptors", hu: "Noziceptorok", ro: "Nociceptori" }[lang] || "Nozizeptoren"]),
        createTyping("sinnesorgane", "skin_sense", getT(t.cold, lang), [{ de: "Kälte", en: "Cold", hu: "Hideg", ro: "Frig" }[lang] || "Kälte"]),
        createTyping("sinnesorgane", "skin_sense", getT(t.warm, lang), [{ de: "Dermis", en: "Dermis", hu: "Irha", ro: "Dermă" }[lang] || "Dermis"]),
        createTyping("sinnesorgane", "skin_sense", getT(t.proprio, lang), [{ de: "Körperbewusstsein", en: "Body awareness", hu: "Testtudat", ro: "Conștientizarea corpului" }[lang] || "Körperbewusstsein"]),
      ];
    },
  },

  // ERNÄHRUNG (4 subtopics)
  ernaehrung: {
    nutrients: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        source: { de: "[NUT] kommt von [SRC]?", en: "[NUT] comes from [SRC]?", hu: "A [NUT] forrása a [SRC]?", ro: "[NUT] provine din [SRC]?" },
        func: { de: "[NUT] ist für [FUNC]?", en: "[NUT] is for [FUNC]?", hu: "A [NUT] a ... szolgál", ro: "[NUT] este pentru [FUNC]?" },
      };
      for (let i = 0; i < 30; i++) {
        const nut = pick(NUTRIENTS, rng);
        questions.push(
          createMCQ("ernaehrung", "nutrients", getT(t.source, lang).replace("[NUT]", getT(nut.nutrient, lang)).replace("[SRC]", getT(nut.source, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("ernaehrung", "nutrients", getT(t.func, lang).replace("[NUT]", getT(nut.nutrient, lang)).replace("[FUNC]", getT(nut.function, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    nutrients_typing: (seed?: number, lang: string = "de") => {
      const t = {
        list: { de: "Nenne 5 wichtige Nährstoffe", en: "Name 5 important nutrients", hu: "Nevezz meg 5 fontos tápanyagot", ro: "Numește 5 nutrienți importanți" },
        energy: { de: "Welche Nährstoffe liefern Energie?", en: "Which nutrients provide energy?", hu: "Mely tápanyagok szolgáltatnak energiát?", ro: "Care nutrienți furnizează energie?" },
        vitc: { de: "Wo findest du viel Vitamin C?", en: "Where do you find lots of vitamin C?", hu: "Miben találsz sok C-vitamint?", ro: "Unde găsești multă vitamină C?" },
        calcium: { de: "Kalzium ist wichtig für...", en: "Calcium is important for...", hu: "A kalcium fontos a...", ro: "Calciul este important pentru..." },
        iron: { de: "Eisen ist wichtig für das...", en: "Iron is important for...", hu: "A vas fontos a...", ro: "Fierul este important pentru..." },
      };
      return [
        createTyping("ernaehrung", "nutrients", getT(t.list, lang), [{ de: "Eiweiß, Kohlenhydrate, Fett, Vitamin, Mineralien", en: "Protein, carbohydrates, fat, vitamins, minerals", hu: "Fehérje, szénhidrát, zsír, vitamin, ásványi anyagok", ro: "Proteine, carbohidrați, grăsimi, vitamine, minerale" }[lang] || "Eiweiß, Kohlenhydrate, Fett, Vitamin, Mineralien"]),
        createTyping("ernaehrung", "nutrients", getT(t.energy, lang), [{ de: "Kohlenhydrate, Fett, Eiweiß", en: "Carbohydrates, fat, protein", hu: "Szénhidrátok, zsírok, fehérjék", ro: "Carbohidrați, grăsimi, proteine" }[lang] || "Kohlenhydrate, Fett, Eiweiß"]),
        createTyping("ernaehrung", "nutrients", getT(t.vitc, lang), [getT(NUTRIENTS[3].source, lang)]),
        createTyping("ernaehrung", "nutrients", getT(t.calcium, lang), [{ de: "Knochen", en: "Bones", hu: "Csontok", ro: "Oase" }[lang] || "Knochen"]),
        createTyping("ernaehrung", "nutrients", getT(t.iron, lang), [{ de: "Blut", en: "Blood", hu: "Vér", ro: "Sânge" }[lang] || "Blut"]),
      ];
    },

    digestive_system: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        func: { de: "[ORG] Funktion: [FUNC]?", en: "[ORG] function: [FUNC]?", hu: "[ORG] funkciója: [FUNC]?", ro: "[ORG] funcție: [FUNC]?" },
        prod: { de: "Im [ORG] wird [ENZ] produziert?", en: "Is [ENZ] produced in the [ORG]?", hu: "A [ORG]-ban/ben [ENZ] termelődik?", ro: "În [ORG] se produce [ENZ]?" },
      };
      for (let i = 0; i < 30; i++) {
        const organ = pick(DIGESTIVE_ORGANS, rng);
        questions.push(
          createMCQ("ernaehrung", "digestive_system", getT(t.func, lang).replace("[ORG]", getT(organ.organ, lang)).replace("[FUNC]", getT(organ.function, lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng),
          createMCQ("ernaehrung", "digestive_system", getT(t.prod, lang).replace("[ORG]", getT(organ.organ, lang)).replace("[ENZ]", getT(organ.enzyme || organ.product || "", lang)), { de: "wahr", en: "true", hu: "igaz", ro: "adevărat" }[lang] || "wahr", [{ de: "falsch", en: "false", hu: "hamis", ro: "fals" }[lang] || "falsch"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    digestive_system_typing: (seed?: number, lang: string = "de") => {
      const t = {
        list: { de: "Nenne 5 Verdauungsorgane", en: "Name 5 digestive organs", hu: "Nevezz meg 5 emésztőszervet", ro: "Numește 5 organe digestive" },
        fat: { de: "Wo wird Fett hauptsächlich verdaut?", en: "Where is fat mainly digested?", hu: "Hol emésztődik meg főként a zsír?", ro: "Unde este digerată în principal grăsimea?" },
        bile: { de: "Die Leber produziert...", en: "The liver produces...", hu: "A máj ... termel", ro: "Ficatul produce..." },
        stomach: { de: "Wie lange bleibt Nahrung etwa im Magen?", en: "How long does food stay in the stomach?", hu: "Körülbelül mennyi ideig marad az étel a gyomorban?", ro: "Cât timp rămâne alimentul în stomac?" },
        length: { de: "Der Dünndarm ist etwa wie lang?", en: "How long is the small intestine approximately?", hu: "Körülbelül milyen hosszú a vékonybél?", ro: "Cât de lung este aproximativ intestinul subțire?" },
      };
      return [
        createTyping("ernaehrung", "digestive_system", getT(t.list, lang), [{ de: "Mund, Magen, Dünndarm, Dickdarm, Anus", en: "Mouth, stomach, small intestine, large intestine, anus", hu: "Száj, gyomor, vékonybél, vastagbél, végbélnyílás", ro: "Gură, stomac, intestin subțire, intestin gros, anus" }[lang] || "Mund, Magen, Dünndarm, Dickdarm, Anus"]),
        createTyping("ernaehrung", "digestive_system", getT(t.fat, lang), [getT(DIGESTIVE_ORGANS[2].organ, lang)]),
        createTyping("ernaehrung", "digestive_system", getT(t.bile, lang), [getT(DIGESTIVE_ORGANS[3].product || "", lang)]),
        createTyping("ernaehrung", "digestive_system", getT(t.stomach, lang), [{ de: "2-4 Stunden", en: "2-4 hours", hu: "2-4 óra", ro: "2-4 ore" }[lang] || "2-4 Stunden"]),
        createTyping("ernaehrung", "digestive_system", getT(t.length, lang), ["5-7m", { de: "5-7 Meter", en: "5-7 meters", hu: "5-7 méter", ro: "5-7 metri" }[lang] || "5-7 Meter"]),
      ];
    },

    digestive_organs: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        enzymes: { de: "Welches Organ produziert Verdauungsenzyme?", en: "Which organ produces digestive enzymes?", hu: "Melyik szerv termel emésztőenzimeket?", ro: "Care organ produce enzime digestive?" },
        filter: { de: "Die Leber filtert...", en: "The liver filters...", hu: "A máj kiszűri a...", ro: "Ficatul filtrează..." },
      };
      const a = {
        pancreas: { de: "Bauchspeicheldrüse", en: "Pancreas", hu: "Hasnyálmirigy", ro: "Pancreas" },
        toxins: { de: "Gifte", en: "Toxins", hu: "Mérgek", ro: "Toxine" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("ernaehrung", "digestive_organs", getT(t.enzymes, lang), getT(a.pancreas, lang),
            { de: ["Leber", "Magen", "Mundspeicheldrüse"], en: ["Liver", "Stomach", "Salivary gland"], hu: ["Máj", "Gyomor", "Nyálmirigy"], ro: ["Ficat", "Stomac", "Glanda salivară"] }[lang] || ["Leber", "Magen", "Mundspeicheldrüse"], rng),
          createMCQ("ernaehrung", "digestive_organs", getT(t.filter, lang), getT(a.toxins, lang),
            { de: ["Nährstoffe", "Bakterien", "Viren"], en: ["Nutrients", "Bacteria", "Viruses"], hu: ["Tápanyagok", "Baktériumok", "Vírusok"], ro: ["Nutrienți", "Bacterii", "Virusuri"] }[lang] || ["Nährstoffe", "Bakterien", "Viren"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    digestive_organs_typing: (seed?: number, lang: string = "de") => {
      const t = {
        liver_loc: { de: "Wo sitzt die Leber?", en: "Where is the liver located?", hu: "Hol helyezkedik el a máj?", ro: "Unde este situat ficatul?" },
        liver_weight: { de: "Wie schwer ist die Leber etwa?", en: "How heavy is the liver approximately?", hu: "Körülbelül milyen nehéz a máj?", ro: "Cât de greu este aproximativ ficatul?" },
        pancreas: { de: "Was ist der Fachbegriff für die Bauchspeicheldrüse?", en: "What is the technical term for the pancreas?", hu: "Mi a hasnyálmirigy szakneve?", ro: "Care este termenul tehnic pentru pancreas?" },
        insulin: { de: "Die Bauchspeicheldrüse produziert neben Enzymen auch...", en: "The pancreas produces enzymes and also...", hu: "A hasnyálmirigy az enzimeken kívül ... is termel", ro: "Pancreasul produce enzime și de asemenea..." },
        gallstones: { de: "Gallensteine entstehen in der...", en: "Gallstones form in the...", hu: "Az epekövek a ... keletkeznek", ro: "Pietrele la fiere se formează în..." },
      };
      return [
        createTyping("ernaehrung", "digestive_organs", getT(t.liver_loc, lang), [{ de: "Rechts unter den Rippen", en: "Right under the ribs", hu: "Jobb oldalon a bordák alatt", ro: "În dreapta sub coaste" }[lang] || "Rechts unter den Rippen"]),
        createTyping("ernaehrung", "digestive_organs", getT(t.liver_weight, lang), ["1,5 kg"]),
        createTyping("ernaehrung", "digestive_organs", getT(t.pancreas, lang), ["Pankreas"]),
        createTyping("ernaehrung", "digestive_organs", getT(t.insulin, lang), ["Insulin"]),
        createTyping("ernaehrung", "digestive_organs", getT(t.gallstones, lang), [{ de: "Gallenblase", en: "Gallbladder", hu: "Epehólyag", ro: "Vezica biliară" }[lang] || "Gallenblase"]),
      ];
    },

    healthy_diet: (seed?: number, lang: string = "de") => {
      const rng = seed ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];
      const t = {
        calcium: { de: "Welcher Nährstoff ist für die Knochen besonders wichtig?", en: "Which nutrient is especially important for the bones?", hu: "Melyik tápanyag különösen fontos a csontok számára?", ro: "Care nutrient este deosebit de important pentru oase?" },
        healthy: { de: "Eine gesunde Ernährung beinhaltet viel...", en: "A healthy diet includes lots of...", hu: "Az egészséges táplálkozás sok ... tartalmaz", ro: "O dietă sănătoasă include mult..." },
      };
      const a = {
        calcium: { de: "Kalzium", en: "Calcium", hu: "Kalcium", ro: "Calciu" },
        veg: { de: "Obst & Gemüse", en: "Fruit & Vegetables", hu: "Gyümölcs és zöldség", ro: "Fructe și legume" },
      };
      for (let i = 0; i < 30; i++) {
        questions.push(
          createMCQ("ernaehrung", "healthy_diet", getT(t.calcium, lang), getT(a.calcium, lang),
            { de: ["Eisen", "Natrium", "Kalium"], en: ["Iron", "Sodium", "Potassium"], hu: ["Vas", "Nátrium", "Kálium"], ro: ["Fier", "Sodiu", "Potasiu"] }[lang] || ["Eisen", "Natrium", "Kalium"], rng),
          createMCQ("ernaehrung", "healthy_diet", getT(t.healthy, lang), getT(a.veg, lang),
            { de: ["Nur Fleisch", "Nur Kohlenhydrate", "Nur Fett"], en: ["Only meat", "Only carbohydrates", "Only fat"], hu: ["Csak hús", "Csak szénhidrát", "Csak zsír"], ro: ["Doar carne", "Doar carbohidrați", "Doar grăsimi"] }[lang] || ["Nur Fleisch", "Nur Kohlenhydrate", "Nur Fett"], rng)
        );
      }
      return questions.slice(0, 30);
    },
    healthy_diet_typing: (seed?: number, lang: string = "de") => {
      const t = {
        balanced: { de: "Was versteht man unter einer ausgewogenen Ernährung?", en: "What is meant by a balanced diet?", hu: "Mit értünk kiegyensúlyozott táplálkozáson?", ro: "Ce se înțelege printr-o dietă echilibrată?" },
        water: { de: "Wie viel Wasser sollte man täglich etwa trinken?", en: "How much water should you drink daily approximately?", hu: "Körülbelül mennyi vizet kellene inni naponta?", ro: "Câtă apă ar trebui să bei zilnic aproximativ?" },
        fiber: { de: "Ballaststoffe finden sich vor allem in...", en: "Fiber is mainly found in...", hu: "Rostanyagok főként a ... találhatók", ro: "Fibrele se găsesc în principal în..." },
        sugar: { de: "Zucker sollte in der Ernährung...", en: "Sugar should be ... in the diet", hu: "A cukrot az étrendben ... kellene", ro: "Zahărul ar trebui să fie ... în dietă" },
        healthy: { de: "Gesunde Ernährung bedeutet auch...", en: "Healthy eating also means...", hu: "Az egészséges táplálkozás azt is jelenti, hogy...", ro: "Alimentația sănătoasă înseamnă și..." },
      };
      return [
        createTyping("ernaehrung", "healthy_diet", getT(t.balanced, lang), [{ de: "Alle Nährstoffe im richtigen Verhältnis", en: "All nutrients in the right proportion", hu: "Minden tápanyag a megfelelő arányban", ro: "Toți nutrienții în proporția corectă" }[lang] || "Alle Nährstoffe im richtigen Verhältnis"]),
        createTyping("ernaehrung", "healthy_diet", getT(t.water, lang), ["2 Liter", "8 Gläser"]),
        createTyping("ernaehrung", "healthy_diet", getT(t.fiber, lang), [{ de: "Vollkorn, Gemüse, Obst", en: "Whole grains, vegetables, fruit", hu: "Teljes kiőrlésű gabona, zöldség, gyümölcs", ro: "Cereale integrale, legume, fructe" }[lang] || "Vollkorn, Gemüse, Obst"]),
        createTyping("ernaehrung", "healthy_diet", getT(t.sugar, lang), [{ de: "Reduziert werden", en: "Reduced", hu: "Csökkenteni", ro: "Redus" }[lang] || "Reduziert werden"]),
        createTyping("ernaehrung", "healthy_diet", getT(t.healthy, lang), [{ de: "Wenig Salz und Zucker", en: "Little salt and sugar", hu: "Kevés só és cukor", ro: "Puțină sare și zahár" }[lang] || "Wenig Salz und Zucker"]),
      ];
    },
  },
};

// ─── GENERATOR MAP ─────────────────────────────────────────────────────────

export const GENERATOR_MAP: Record<
  number,
  Record<string, Record<string, (seed?: number, lang?: string) => CurriculumQuestion[]>>
> = {
  5: K5_Generators,
};

// ─── Automatikus regisztráció ─────────────────────────────────────────────

setBiologieGeneratorMap(GENERATOR_MAP);
