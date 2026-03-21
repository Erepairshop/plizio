// ─── BIOLOGIE GENERATORS (Klasse 5) ───────────────────────────────────────
// 35 MCQ + 5 Typing kérdésgenerátorok
//
// Adatok szerkezete:
// - FISH, AMPHIBIANS, REPTILES, BIRDS, MAMMALS — állat adatok
// - PLANT_PARTS, PHOTOSYNTHESIS_DATA — növény adatok
// - ORGANS, SENSES, NUTRIENTS — emberi test adatok
//
// Generátor függvények: genFish(), genBird(), stb.
// Export: GENERATORS tábla tartalmazza az összes generátor függvényt

import type { BiologieQuestion, BiologieMCQ, BiologieTyping } from "./biologieCurriculum";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mkMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[]
): BiologieMCQ {
  const uniqueWrong = [...new Set(wrong.filter((w) => w !== correct))];
  const opts = shuffle([correct, ...uniqueWrong.slice(0, 3)]);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function mkTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): BiologieTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── KLASSE 5 ADATOK ──────────────────────────────────────────────────────

// WIRBELTIERE (Gerinces állatok)
const FISH: { name: string; habitat: string; organ: string; example: string }[] = [
  { name: "Kiemák", habitat: "Víz", organ: "Branchien", example: "Csuka" },
  { name: "Úszóhólyag", habitat: "Víz", organ: "Schwimmblase", example: "Pisztráng" },
  { name: "Pikkelyek", habitat: "Víz", organ: "Schuppen", example: "Hal" },
  { name: "Gerinc", habitat: "Víz", organ: "Wirbelsäule", example: "Hal" },
  { name: "Úszók", habitat: "Víz", organ: "Flossen", example: "Karpát" },
];

const AMPHIBIANS: { name: string; stage: string; description: string }[] = [
  { name: "Béka", stage: "Metamorfózis", description: "Vízi→szárazföldi" },
  { name: "Gőte", stage: "Metamorfózis", description: "Tüdővel légzik" },
  { name: "Szalamandra", stage: "Metamorfózis", description: "Nedves élőhelyen él" },
  { name: "Béka (fejlett)", stage: "Felnőtt", description: "Tüdő + bőr légzés" },
  { name: "Kétéltű lárva", stage: "Lárva", description: "Kiemákkal légzik" },
];

const REPTILES: { name: string; features: string; skin: string; example: string }[] = [
  { name: "Kigyó", features: "Mérgező", skin: "Pikkelyes", example: "Vipera" },
  { name: "Teknős", features: "Páncél", skin: "Pikkelyes", example: "Vízi teknős" },
  { name: "Hüllő általában", features: "Hidegvérű", skin: "Pikkelyes", example: "Gyík" },
  { name: "Krokodil", features: "Erős állkapocs", skin: "Pikkelyes", example: "Nílusi krokodil" },
  { name: "Gekkó", features: "Tapadókorongjei", skin: "Puhább", example: "Házgekkó" },
];

const BIRDS: { name: string; feature: string; example: string; adaptation: string }[] = [
  { name: "Toll", feature: "Repüléshez", example: "Sas", adaptation: "Könnyű, erős" },
  { name: "Szárnyak", feature: "Repüléshez", example: "Galamb", adaptation: "Izmos" },
  { name: "Üreges csontok", feature: "Könnyűség", example: "Fecske", adaptation: "Könnyebb test" },
  { name: "Légzacskók", feature: "Légzéshez", example: "Sárgarigó", adaptation: "Hatékony légzés" },
  { name: "Kerek pupilla", feature: "Látáshoz", example: "Búbos gerle", adaptation: "Éles látás" },
];

const MAMMALS: { name: string; feature: string; example: string }[] = [
  { name: "Szőr", feature: "Szigetelés", example: "Macska" },
  { name: "Tejmirigy", feature: "Szoptatás", example: "Anya" },
  { name: "Embrió", feature: "Méhben fejlődik", example: "Ember" },
  { name: "Meleg vérűség", feature: "Állandó hőmérséklet", example: "Oroszlán" },
  { name: "Kar (végtag)", feature: "Különböző forma", example: "Denevér" },
];

// PFLANZEN (Növények)
const PLANT_PARTS: { part: string; function: string; type: string }[] = [
  { part: "Gyökér", function: "Vízfelvétel", type: "Föld alatt" },
  { part: "Szár", function: "Tartás, szállítás", type: "Támogatás" },
  { part: "Levél", function: "Fotoszintézis", type: "Zöld" },
  { part: "Virág", function: "Szaporodás", type: "Szép" },
  { part: "Mag", function: "Szaporodás", type: "Új növény" },
];

const PHOTOSYNTHESIS_DATA: { input: string; output: string; requirement: string }[] = [
  { input: "Szén-dioxid (CO2)", output: "Cukrot", requirement: "Fény" },
  { input: "Víz", output: "Oxigén", requirement: "Klorofill" },
  { input: "Fény", output: "Energia", requirement: "Levél" },
  { input: "Napsugárzás", output: "Szerves anyag", requirement: "Zöld szín" },
  { input: "Klorofill", output: "Fotorendszer", requirement: "Fény" },
];

const FLOWER_PARTS: { part: string; function: string; example: string }[] = [
  { part: "Szirmok", function: "Vonzódás", example: "Sárga" },
  { part: "Porzók", function: "Virágpor termelés", example: "Sárga por" },
  { part: "Bibeszál", function: "Pollenfogadás", example: "Végén ragacsos" },
  { part: "Csészelevél", function: "Védelem", example: "Zöld" },
  { part: "Magház", function: "Magnövekedés", example: "Lezárt" },
];

// MEIN KÖRPER (Testünk)
const SKELETON_BONES: { bone: string; location: string; function: string }[] = [
  { bone: "Koponya", location: "Fej", function: "Agyvédelme" },
  { bone: "Gerinc", location: "Hát", function: "Támogatás, mozgás" },
  { bone: "Csontváz", location: "Egész test", function: "Tartás" },
  { bone: "Bordák", location: "Mellkas", function: "Szervvédelem" },
  { bone: "Válllapáte", location: "Váll", function: "Kar mozgatása" },
];

const MUSCLES: { muscle: string; location: string; action: string }[] = [
  { muscle: "Bicepsz", location: "Felkar", action: "Kar hajlítása" },
  { muscle: "Tricepsz", location: "Felkar", action: "Kar nyújtása" },
  { muscle: "Quadricepsz", location: "Comb", action: "Láb nyújtása" },
  { muscle: "Szív", location: "Mellkas", action: "Vérpumpálás" },
  { muscle: "Rekusztartó", location: "Hasizmok", action: "Törzs mozgatása" },
];

// SINNESORGANE (Érzékszervek)
const SENSES: { sense: string; organ: string; function: string; receptor: string }[] = [
  { sense: "Látás", organ: "Szem", function: "Fényfelfogás", receptor: "Fotoreceptor" },
  { sense: "Hallás", organ: "Fül", function: "Hangfelfogás", receptor: "Hallócella" },
  { sense: "Szaglás", organ: "Orr", function: "Szaglófelfogás", receptor: "Olfaktórium" },
  { sense: "Ízlelés", organ: "Nyelv", function: "Íz érzékelése", receptor: "Ízpapillák" },
  { sense: "Tapintás", organ: "Bőr", function: "Nyomásfelfogás", receptor: "Mekanoreceptor" },
];

const EYE_PARTS: { part: string; function: string; color: string }[] = [
  { part: "Szaruhártya", function: "Fénytörés", color: "Átlátszó" },
  { part: "Iris", function: "Fény szabályozás", color: "Zöld/Kék/Barna" },
  { part: "Lencse", function: "Fókuszálás", color: "Átlátszó" },
  { part: "Hálóhártya", function: "Képfogadás", color: "Vöröses" },
  { part: "Látóideg", function: "Jelzésküldés", color: "Fehér" },
];

// ERNÄHRUNG (Táplálkozás)
const NUTRIENTS: { nutrient: string; function: string; source: string }[] = [
  { nutrient: "Fehérjék", function: "Növekedés", source: "Hús, tojás, hüvelyes" },
  { nutrient: "Szénhidrátok", function: "Energia", source: "Rizs, kenyér" },
  { nutrient: "Zsírok", function: "Energia, szigetelés", source: "Olaj, vaj" },
  { nutrient: "Vitaminok", function: "Immunerősítés", source: "Zöldség, gyümölcs" },
  { nutrient: "Ásványok", function: "Csontok", source: "Tej, saláta" },
];

const DIGESTIVE_ORGANS: { organ: string; function: string; secretion: string }[] = [
  { organ: "Szájüreg", function: "Zúzás, nyálképzés", secretion: "Nyál" },
  { organ: "Gyomor", function: "Feloldódás, kevert anyag", secretion: "Gyomorlé" },
  { organ: "Vékonybél", function: "Felszívódás", secretion: "Pancreas, máj" },
  { organ: "Vastagbél", function: "Vízfelszívódás", secretion: "Baktériumok" },
  { organ: "Máj", function: "Enzim termelés", secretion: "Epe" },
];

// ─── MCQ GENERÁTOR FÜGGVÉNYEK (35 db) ─────────────────────────────────────

// WIRBELTIERE (6 db)
function genFish(): BiologieQuestion {
  const fish = pick(FISH);
  return mkMCQ("wirbeltiere", "fish", `Mely halaknak van ${fish.organ}?`, fish.example,
    ["Béka", "Madár", "Hal", "Emlős"].filter((x) => x !== fish.example));
}

function genAmphibian(): BiologieQuestion {
  const amp = pick(AMPHIBIANS);
  return mkMCQ("wirbeltiere", "amphibian", `Mi a "${amp.description}" stadiumban?`, amp.name,
    ["Kigyó", "Béka", "Madár", "Szalamandra"].filter((x) => x !== amp.name));
}

function genReptile(): BiologieQuestion {
  const rep = pick(REPTILES);
  return mkMCQ("wirbeltiere", "reptile", `Melyik hüllőnek van ${rep.features}?`, rep.example,
    ["Kigyó", "Teknős", "Béka", "Madár"].filter((x) => x !== rep.example));
}

function genBird(): BiologieQuestion {
  const bird = pick(BIRDS);
  return mkMCQ("wirbeltiere", "bird", `A madáraknak milyen szerkezete segíti a repülést? ${bird.adaptation}`, "Szárnyak",
    ["Kiemák", "Úszók", "Szárnyak", "Gerinc"].filter((x) => x !== "Szárnyak"));
}

function genMammal(): BiologieQuestion {
  const mam = pick(MAMMALS);
  return mkMCQ("wirbeltiere", "mammal", `Melyik az emlősök jellegzetes tulajdonsága?`, mam.feature,
    ["Pikkelyek", "Szőr", "Toll", "Kiemák"].filter((x) => x !== mam.feature));
}

function genVertebrateBrainTeaser(): BiologieQuestion {
  return mkMCQ("wirbeltiere", "vertebrate_comparison",
    "Melyik állat nem gerinces?",
    "Rovar",
    ["Hal", "Madár", "Emlős", "Rovar"].filter((x) => x !== "Rovar"));
}

// PFLANZEN (5 db)
function genPlantParts(): BiologieQuestion {
  const part = pick(PLANT_PARTS);
  return mkMCQ("pflanzen", "plant_parts", `Melyik szerv végzi a ${part.function} funkcióját?`, part.part,
    ["Virág", "Gyökér", "Szár", "Levél"].filter((x) => x !== part.part));
}

function genPhotosynthesis(): BiologieQuestion {
  const ps = pick(PHOTOSYNTHESIS_DATA);
  return mkMCQ("pflanzen", "photosynthesis",
    `A fotoszintézisben az ${ps.input} melyik terméket képez?`, ps.output,
    ["Víz", "Oxigén", "Cukrot", "Szén-dioxid"].filter((x) => x !== ps.output));
}

function genFlowerStructure(): BiologieQuestion {
  const fp = pick(FLOWER_PARTS);
  return mkMCQ("pflanzen", "flower_structure",
    `Melyik virágszerv végzi a "${fp.function}" funkciót?`, fp.part,
    ["Szirmok", "Porzók", "Bibeszál", "Csészelevél"].filter((x) => x !== fp.part));
}

function genPlantReproduction(): BiologieQuestion {
  return mkMCQ("pflanzen", "plant_reproduction",
    "Hogyan terjednek az egylevelű növények?",
    "Magvak",
    ["Spóra", "Magvak", "Fragmentáció", "Vegetatív"]);
}

function genPlantTypes(): BiologieQuestion {
  return mkMCQ("pflanzen", "plant_types",
    "Melyik nem virágos növény?",
    "Mohák",
    ["Rózsa", "Mohák", "Búza", "Fa"]);
}

// KÖRPER (4 db)
function genSkeleton(): BiologieQuestion {
  const bone = pick(SKELETON_BONES);
  return mkMCQ("koerper", "skeleton",
    `Mely csont működése a "${bone.function}"?`, bone.bone,
    ["Koponya", "Gerinc", "Bordák", "Válllapáte"].filter((x) => x !== bone.bone));
}

function genMuscles(): BiologieQuestion {
  const muscle = pick(MUSCLES);
  return mkMCQ("koerper", "muscles",
    `Mely izom végzi az "${muscle.action}" mozgást?`, muscle.muscle,
    ["Bicepsz", "Tricepsz", "Quadricepsz", "Szív"].filter((x) => x !== muscle.muscle));
}

function genSkin(): BiologieQuestion {
  return mkMCQ("koerper", "skin",
    "Mi a bőr legfontosabb funkciója?",
    "Védelem",
    ["Szabályozás", "Védelem", "Keringés", "Légzés"]);
}

function genBodySystems(): BiologieQuestion {
  return mkMCQ("koerper", "body_systems",
    "Melyik rendszer szállítja az oxigént az egész testbe?",
    "Keringési",
    ["Légzési", "Keringési", "Nervózus", "Emésztési"]);
}

// SINNESORGANE (5 db)
function genEye(): BiologieQuestion {
  const ep = pick(EYE_PARTS);
  return mkMCQ("sinnesorgane", "eye",
    `Mely szemelemé a "${ep.function}" funkció?`, ep.part,
    ["Szaruhártya", "Iris", "Lencse", "Hálóhártya"].filter((x) => x !== ep.part));
}

function genEar(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "ear",
    "Hol található a hallás receptor?",
    "Belső fül",
    ["Külső fül", "Középfül", "Belső fül", "Hallócsontok"]);
}

function genNose(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "nose",
    "Mit érzékelnék az olfaktórium?",
    "Szagot",
    ["Hangt", "Szagot", "Fényt", "Ízt"]);
}

function genTongue(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "tongue",
    "Melyek az ízpapillák?",
    "Ízreceptor",
    ["Nyál mirigy", "Ízreceptor", "Szaglósejt", "Hallósejt"]);
}

function genSkinSense(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "skin_sense",
    "Mi a tapintás receptora a bőrben?",
    "Mekanoreceptor",
    ["Fotoreceptor", "Mekanoreceptor", "Kemoreceptor", "Termoreceptor"]);
}

// ERNÄHRUNG (4 db)
function genNutrients(): BiologieQuestion {
  const nut = pick(NUTRIENTS);
  return mkMCQ("ernaehrung", "nutrients",
    `Mely tápanyag funkciója a "${nut.function}"?`, nut.nutrient,
    ["Fehérjék", "Szénhidrátok", "Zsírok", "Vitaminok"].filter((x) => x !== nut.nutrient));
}

function genDigestiveSystem(): BiologieQuestion {
  const organ = pick(DIGESTIVE_ORGANS);
  return mkMCQ("ernaehrung", "digestive_system",
    `Mely szerv végzi az "${organ.function}" funkciót?`, organ.organ,
    ["Szájüreg", "Gyomor", "Vékonybél", "Vastagbél"].filter((x) => x !== organ.organ));
}

function genDigestiveOrgans(): BiologieQuestion {
  return mkMCQ("ernaehrung", "digestive_organs",
    "Mely szerv termel emésztőenzimeket?",
    "Hasnyálmirigy",
    ["Máy", "Hasnyálmirigy", "Gyomor", "Szájüreg"]);
}

function genHealthyDiet(): BiologieQuestion {
  return mkMCQ("ernaehrung", "healthy_diet",
    "Mely tápanyag szükséges a csontok erősítésére?",
    "Kalcium",
    ["Vas", "Kalcium", "Nátrium", "Kálium"]);
}

// EXTRA MCQ GENERÁTOROK (11 db további variációk)
function genFishDetail(): BiologieQuestion {
  return mkMCQ("wirbeltiere", "fish",
    "Mit használnak az uszonyokra a halak?",
    "Úszáshoz",
    ["Védelmezéshez", "Úszáshoz", "Táplálkozáshoz", "Szaporodáshoz"]);
}

function genBirdFlight(): BiologieQuestion {
  return mkMCQ("wirbeltiere", "bird",
    "Mi az üreges csontok funkciója a madarakban?",
    "Könnyűség",
    ["Erő", "Könnyűség", "Hőszabályozás", "Lemez"]);
}

function genPlantPhotosynthesisDetail(): BiologieQuestion {
  return mkMCQ("pflanzen", "photosynthesis",
    "Mely szerv végzi a fotoszintézist?",
    "Levél",
    ["Szár", "Levél", "Gyökér", "Virág"]);
}

function genSkeletonDetail(): BiologieQuestion {
  return mkMCQ("koerper", "skeleton",
    "Mely csont védi az agyat?",
    "Koponya",
    ["Gerinc", "Koponya", "Bordák", "Csípőcsont"]);
}

function genHeartFunction(): BiologieQuestion {
  return mkMCQ("koerper", "body_systems",
    "Mi a szív funkciója?",
    "Vérpumpálás",
    ["Oxigénszintézis", "Vérpumpálás", "Emésztés", "Légzés"]);
}

function genEyeVision(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "eye",
    "Mely szerv érzékeli a fényt a szemben?",
    "Hálóhártya",
    ["Iris", "Lencse", "Hálóhártya", "Szaruhártya"]);
}

function genEarHearing(): BiologieQuestion {
  return mkMCQ("sinnesorgane", "ear",
    "Mely csont továbbítja a hangot a belső fülbe?",
    "Hallócsontok",
    ["Dobhártya", "Hallócsontok", "Labyrintus", "Cochlea"]);
}

function genDigestiveTrack(): BiologieQuestion {
  return mkMCQ("ernaehrung", "digestive_organs",
    "Hol történik az étel nagy része felszívódása?",
    "Vékonybél",
    ["Gyomor", "Vékonybél", "Szájüreg", "Vastagbél"]);
}

function genMuscleType(): BiologieQuestion {
  return mkMCQ("koerper", "muscles",
    "Melyik izom akaratlan mozgást végez?",
    "Szív",
    ["Bicepsz", "Szív", "Felkarizom", "Lábizom"]);
}

function genNutrientBalance(): BiologieQuestion {
  return mkMCQ("ernaehrung", "nutrients",
    "Melyik tápanyag szükséges az energia biztosításához?",
    "Szénhidrátok",
    ["Vitamín", "Szénhidrátok", "Ásványok", "Víz"]);
}

function genPlantSeed(): BiologieQuestion {
  return mkMCQ("pflanzen", "plant_reproduction",
    "Hogyan kezdődik egy új növény?",
    "Magcsírázás",
    ["Pollináció", "Magcsírázás", "Virágzás", "Beporzás"]);
}

// ─── TYPING GENERÁTOR FÜGGVÉNYEK (5 db) ──────────────────────────────────

function genFishTyping(): BiologieTyping {
  return mkTyping("wirbeltiere", "fish",
    "Nevezzen meg 3 halak jellegzetes szervét! (vesszővel elválasztva)",
    ["Kiemák, úszók, gerinc", "gerinc, kiemák, úszók", "úszók, kiemák, gerinc", "kiemák", "úszók", "gerinc"]);
}

function genBirdTyping(): BiologieTyping {
  return mkTyping("wirbeltiere", "bird",
    "Milyen adaptatív jellegzetessége van a madaraknak a repüléshez?",
    ["üreges csontok", "Üreges csontok", "szárnyak", "Szárnyak", "toll", "Toll"]);
}

function genPlantTyping(): BiologieTyping {
  return mkTyping("pflanzen", "plant_parts",
    "Mely szerv raktározza el a növényi tápanyagokat? (pl. kukorica)",
    ["mag", "Mag", "magvak", "Magvak", "csíra", "Csíra"]);
}

function genDigestiveTyping(): BiologieTyping {
  return mkTyping("ernaehrung", "digestive_organs",
    "Melyik szerv termel emésztőenzimeket? (jellegzetes enzim: tripszin)",
    ["hasnyálmirigy", "Hasnyálmirigy", "pancreas", "Pancreas"]);
}

function genSenseTyping(): BiologieTyping {
  return mkTyping("sinnesorgane", "sense",
    "Melynek a receptora az ízpapilla? (mit érzékelünk így?)",
    ["íz", "Íz", "ízlelés", "Ízlelés", "ízed"]);
}

// ─── EXPORT GENERATORS (40 db: 35 MCQ + 5 Typing) ─────────────────────────

export const GENERATORS: Record<string, () => BiologieQuestion> = {
  // WIRBELTIERE (6 MCQ)
  fish: genFish,
  amphibian: genAmphibian,
  reptile: genReptile,
  bird: genBird,
  mammal: genMammal,
  vertebrate_comparison: genVertebrateBrainTeaser,

  // PFLANZEN (5 MCQ)
  plant_parts: genPlantParts,
  photosynthesis: genPhotosynthesis,
  flower_structure: genFlowerStructure,
  plant_reproduction: genPlantReproduction,
  plant_types: genPlantTypes,

  // KÖRPER (4 MCQ)
  skeleton: genSkeleton,
  muscles: genMuscles,
  skin: genSkin,
  body_systems: genBodySystems,

  // SINNESORGANE (5 MCQ)
  eye: genEye,
  ear: genEar,
  nose: genNose,
  tongue: genTongue,
  skin_sense: genSkinSense,

  // ERNÄHRUNG (4 MCQ)
  nutrients: genNutrients,
  digestive_system: genDigestiveSystem,
  digestive_organs: genDigestiveOrgans,
  healthy_diet: genHealthyDiet,

  // EXTRA MCQ VARIÁCIÓK (11 db)
  fish_detail: genFishDetail,
  bird_flight: genBirdFlight,
  plant_photosynthesis_detail: genPlantPhotosynthesisDetail,
  skeleton_detail: genSkeletonDetail,
  heart_function: genHeartFunction,
  eye_vision: genEyeVision,
  ear_hearing: genEarHearing,
  digestive_track: genDigestiveTrack,
  muscle_type: genMuscleType,
  nutrient_balance: genNutrientBalance,
  plant_seed: genPlantSeed,

  // TYPING (5 db)
  fish_typing: genFishTyping,
  bird_typing: genBirdTyping,
  plant_typing: genPlantTyping,
  digestive_typing: genDigestiveTyping,
  sense_typing: genSenseTyping,
};

/**
 * Generiert Fragen für die gewählten Subtopics.
 * Jeder Subtopic mit Generator produziert `perSubtopic` Fragen.
 */
export function generateForSubtopics(
  subtopicIds: string[],
  perSubtopic = 10
): BiologieQuestion[] {
  const result: BiologieQuestion[] = [];
  for (const id of subtopicIds) {
    const gen = GENERATORS[id];
    if (!gen) continue;
    for (let i = 0; i < perSubtopic; i++) {
      result.push(gen());
    }
  }
  return result;
}
