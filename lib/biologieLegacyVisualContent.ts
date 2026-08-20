export type BiologieLegacyLang = "de" | "hu" | "ro" | "en";

type Localized = Record<BiologieLegacyLang, string>;
const l = (de: string, hu: string, ro: string, en: string): Localized => ({ de, hu, ro, en });

export function biologieLegacyLang(lang?: string): BiologieLegacyLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

export const LEGACY_VISUAL_UI = {
  de: {
    classificationLabel: "Körperbau-Detektiv",
    classificationPrompt: "Zu welcher Tiergruppe gehört dieses Tier?",
    vertebrate: "Wirbeltier",
    invertebrate: "Wirbellos",
    evidence: "Merkmal",
    organLabel: "Organ-System-Mission",
    organPrompt: "Welches Körpersystem arbeitet hauptsächlich mit diesem Organ?",
    function: "Aufgabe",
    nutritionLabel: "Nährstoff-Labor",
    nutritionPrompt: "Welcher Nährstoff steht bei diesem Lebensmittel als Lernschwerpunkt im Vordergrund?",
    nutritionHint: "Lebensmittel enthalten meist mehrere Nährstoffe. Gesucht ist der typische Schwerpunkt.",
    foodChainLabel: "Nahrungsnetz-Pfad",
    foodChainPrompt: "Baue die Nahrungskette vom Produzenten bis zum Endkonsumenten.",
    chain: "Deine Kette",
    tapOrder: "Tippe die Lebewesen in der richtigen Reihenfolge an.",
    lifecycleLabel: "Lebenszyklus-Labor",
    lifecyclePrompt: "Ordne die Entwicklungsphasen vom Anfang bis zum erwachsenen Stadium.",
    sequence: "Deine Reihenfolge",
    tapStages: "Tippe die Phasen in der richtigen Reihenfolge an.",
    correct: "Richtig",
    solution: "Lösung",
    reset: "Zurücksetzen",
  },
  hu: {
    classificationLabel: "Testfelépítés-detektív",
    classificationPrompt: "Melyik állatcsoportba tartozik ez az állat?",
    vertebrate: "Gerinces",
    invertebrate: "Gerinctelen",
    evidence: "Ismertetőjegy",
    organLabel: "Szervrendszer-küldetés",
    organPrompt: "Melyik szervrendszerhez tartozik elsősorban ez a szerv?",
    function: "Feladat",
    nutritionLabel: "Tápanyag-labor",
    nutritionPrompt: "Melyik tápanyag a tanulási szempontból jellemző fő csoport ennél az élelmiszernél?",
    nutritionHint: "Az élelmiszerek általában többféle tápanyagot tartalmaznak. A jellegzetes fő csoportot keresd.",
    foodChainLabel: "Tápláléklánc-ösvény",
    foodChainPrompt: "Építsd fel a táplálékláncot a termelőtől a csúcsfogyasztóig.",
    chain: "A láncod",
    tapOrder: "Koppints az élőlényekre a helyes sorrendben.",
    lifecycleLabel: "Életciklus-labor",
    lifecyclePrompt: "Rendezd sorba a fejlődési szakaszokat a kezdettől a kifejlett állapotig.",
    sequence: "A sorrended",
    tapStages: "Koppints a szakaszokra a helyes sorrendben.",
    correct: "Helyes",
    solution: "Megoldás",
    reset: "Törlés",
  },
  ro: {
    classificationLabel: "Detectivul structurii corpului",
    classificationPrompt: "Din ce grup de animale face parte acest animal?",
    vertebrate: "Vertebrat",
    invertebrate: "Nevertebrat",
    evidence: "Indiciu",
    organLabel: "Misiunea sistemelor de organe",
    organPrompt: "Din ce sistem al corpului face parte în principal acest organ?",
    function: "Rol",
    nutritionLabel: "Laboratorul nutrienților",
    nutritionPrompt: "Ce nutrient reprezintă grupa principală studiată pentru acest aliment?",
    nutritionHint: "Alimentele conțin de obicei mai mulți nutrienți. Alege grupa caracteristică principală.",
    foodChainLabel: "Traseul lanțului trofic",
    foodChainPrompt: "Construiește lanțul trofic de la producător la consumatorul final.",
    chain: "Lanțul tău",
    tapOrder: "Atinge organismele în ordinea corectă.",
    lifecycleLabel: "Laboratorul ciclului de viață",
    lifecyclePrompt: "Ordonează etapele de dezvoltare de la început până la stadiul adult.",
    sequence: "Ordinea ta",
    tapStages: "Atinge etapele în ordinea corectă.",
    correct: "Corect",
    solution: "Soluție",
    reset: "Resetează",
  },
  en: {
    classificationLabel: "Body-plan detective",
    classificationPrompt: "Which animal group does this animal belong to?",
    vertebrate: "Vertebrate",
    invertebrate: "Invertebrate",
    evidence: "Clue",
    organLabel: "Organ-system mission",
    organPrompt: "Which body system mainly works with this organ?",
    function: "Function",
    nutritionLabel: "Nutrient laboratory",
    nutritionPrompt: "Which nutrient is the characteristic learning focus for this food?",
    nutritionHint: "Foods usually contain several nutrients. Choose the typical main group used in this exercise.",
    foodChainLabel: "Food-chain pathway",
    foodChainPrompt: "Build the food chain from producer to final consumer.",
    chain: "Your chain",
    tapOrder: "Tap the organisms in the correct order.",
    lifecycleLabel: "Life-cycle laboratory",
    lifecyclePrompt: "Order the developmental stages from the beginning to the adult stage.",
    sequence: "Your sequence",
    tapStages: "Tap the stages in the correct order.",
    correct: "Correct",
    solution: "Solution",
    reset: "Reset",
  },
} as const;

export type AnimalClass = "vertebrate" | "invertebrate";
export const ANIMAL_CLASSIFICATION = [
  { id: "salmon", kind: "vertebrate", name: l("Lachs", "Lazac", "Somon", "Salmon"), clue: l("Flossen und Kiemen", "Uszonyok és kopoltyúk", "Înotătoare și branhii", "Fins and gills") },
  { id: "frog", kind: "vertebrate", name: l("Frosch", "Béka", "Broască", "Frog"), clue: l("Metamorphose und feuchte Haut", "Átalakulás és nedves bőr", "Metamorfoză și piele umedă", "Metamorphosis and moist skin") },
  { id: "lizard", kind: "vertebrate", name: l("Eidechse", "Gyík", "Șopârlă", "Lizard"), clue: l("Trockene Schuppenhaut", "Száraz pikkelyes bőr", "Piele uscată cu solzi", "Dry scaly skin") },
  { id: "eagle", kind: "vertebrate", name: l("Adler", "Sas", "Vultur", "Eagle"), clue: l("Federn und Flügel", "Tollak és szárnyak", "Pene și aripi", "Feathers and wings") },
  { id: "dolphin", kind: "vertebrate", name: l("Delfin", "Delfin", "Delfin", "Dolphin"), clue: l("Atmet mit Lungen", "Tüdővel lélegzik", "Respiră cu plămânii", "Breathes with lungs") },
  { id: "bat", kind: "vertebrate", name: l("Fledermaus", "Denevér", "Liliac", "Bat"), clue: l("Fell und Milchdrüsen", "Szőrzet és emlőmirigyek", "Blană și glande mamare", "Fur and mammary glands") },
  { id: "bee", kind: "invertebrate", name: l("Biene", "Méh", "Albină", "Bee"), clue: l("Sechs Beine und Außenskelett", "Hat láb és külső váz", "Șase picioare și exoschelet", "Six legs and an exoskeleton") },
  { id: "spider", kind: "invertebrate", name: l("Spinne", "Pók", "Păianjen", "Spider"), clue: l("Acht Beine", "Nyolc láb", "Opt picioare", "Eight legs") },
  { id: "octopus", kind: "invertebrate", name: l("Oktopus", "Polip", "Caracatiță", "Octopus"), clue: l("Acht Arme und kein Innenskelett", "Nyolc kar és nincs belső váz", "Opt brațe și fără schelet intern", "Eight arms and no internal skeleton") },
  { id: "earthworm", kind: "invertebrate", name: l("Regenwurm", "Földigiliszta", "Râmă", "Earthworm"), clue: l("Gegliederter weicher Körper", "Szelvényezett puha test", "Corp moale segmentat", "Segmented soft body") },
  { id: "starfish", kind: "invertebrate", name: l("Seestern", "Tengeri csillag", "Stea de mare", "Starfish"), clue: l("Fünfstrahliger Körperbau", "Ötsugaras testfelépítés", "Simetrie radială în cinci brațe", "Five-rayed body plan") },
  { id: "snail", kind: "invertebrate", name: l("Schnecke", "Csiga", "Melc", "Snail"), clue: l("Muskel-Fuß und Schale", "Izmos láb és ház", "Picior muscular și cochilie", "Muscular foot and shell") },
] as const;

export const ORGAN_SYSTEMS = {
  circulation: l("Kreislaufsystem", "Keringési rendszer", "Sistem circulator", "Circulatory system"),
  respiration: l("Atmungssystem", "Légzőrendszer", "Sistem respirator", "Respiratory system"),
  digestion: l("Verdauungssystem", "Emésztőrendszer", "Sistem digestiv", "Digestive system"),
  excretion: l("Ausscheidungssystem", "Kiválasztó rendszer", "Sistem excretor", "Excretory system"),
  nervous: l("Nervensystem", "Idegrendszer", "Sistem nervos", "Nervous system"),
  movement: l("Bewegungsapparat", "Mozgásszervrendszer", "Aparat locomotor", "Musculoskeletal system"),
} as const;

export const ORGAN_MISSIONS = [
  { id: "heart", system: "circulation", name: l("Herz", "Szív", "Inimă", "Heart"), clue: l("Pumpt Blut durch den Körper", "Vért pumpál a testben", "Pompează sângele prin corp", "Pumps blood through the body") },
  { id: "lung", system: "respiration", name: l("Lunge", "Tüdő", "Plămân", "Lung"), clue: l("Tauscht Sauerstoff und Kohlendioxid aus", "Oxigént és szén-dioxidot cserél", "Schimbă oxigenul și dioxidul de carbon", "Exchanges oxygen and carbon dioxide") },
  { id: "stomach", system: "digestion", name: l("Magen", "Gyomor", "Stomac", "Stomach"), clue: l("Mischt Nahrung mit Magensaft", "A táplálékot gyomornedvvel keveri", "Amestecă hrana cu sucul gastric", "Mixes food with gastric juice") },
  { id: "liver", system: "digestion", name: l("Leber", "Máj", "Ficat", "Liver"), clue: l("Bildet Galle für die Fettverdauung", "Epét termel a zsírok emésztéséhez", "Produce bilă pentru digestia grăsimilor", "Produces bile for fat digestion") },
  { id: "kidney", system: "excretion", name: l("Niere", "Vese", "Rinichi", "Kidney"), clue: l("Filtert Abfallstoffe aus dem Blut", "Kiszűri a salakanyagokat a vérből", "Filtrează deșeurile din sânge", "Filters waste from the blood") },
  { id: "brain", system: "nervous", name: l("Gehirn", "Agy", "Creier", "Brain"), clue: l("Verarbeitet Informationen und steuert Reaktionen", "Feldolgozza az információkat és irányítja a reakciókat", "Procesează informații și controlează reacțiile", "Processes information and controls responses") },
  { id: "spinal-cord", system: "nervous", name: l("Rückenmark", "Gerincvelő", "Măduva spinării", "Spinal cord"), clue: l("Leitet Signale zwischen Gehirn und Körper", "Jeleket továbbít az agy és a test között", "Transmite semnale între creier și corp", "Carries signals between brain and body") },
  { id: "skeleton", system: "movement", name: l("Skelett", "Csontváz", "Schelet", "Skeleton"), clue: l("Stützt den Körper und schützt Organe", "Támasztja a testet és védi a szerveket", "Susține corpul și protejează organele", "Supports the body and protects organs") },
  { id: "muscle", system: "movement", name: l("Muskel", "Izom", "Mușchi", "Muscle"), clue: l("Zieht sich zusammen und erzeugt Bewegung", "Összehúzódik és mozgást hoz létre", "Se contractă și produce mișcare", "Contracts to produce movement") },
] as const;

export const NUTRIENT_GROUPS = {
  protein: l("Proteine", "Fehérjék", "Proteine", "Proteins"),
  carbohydrate: l("Kohlenhydrate", "Szénhidrátok", "Carbohidrați", "Carbohydrates"),
  fat: l("Fette", "Zsírok", "Grăsimi", "Fats"),
  vitamin: l("Vitamine", "Vitaminok", "Vitamine", "Vitamins"),
  mineral: l("Mineralstoffe", "Ásványi anyagok", "Minerale", "Minerals"),
} as const;

export const NUTRIENT_MISSIONS = [
  { id: "egg", group: "protein", name: l("Ei", "Tojás", "Ou", "Egg"), clue: l("Baustoff für Muskeln und Gewebe", "Az izmok és szövetek építőanyaga", "Material pentru mușchi și țesuturi", "Building material for muscles and tissues") },
  { id: "lentils", group: "protein", name: l("Linsen", "Lencse", "Linte", "Lentils"), clue: l("Pflanzliche Eiweißquelle", "Növényi fehérjeforrás", "Sursă vegetală de proteine", "Plant-based protein source") },
  { id: "rice", group: "carbohydrate", name: l("Reis", "Rizs", "Orez", "Rice"), clue: l("Liefert vor allem schnell verfügbare Energie", "Főként gyorsan felhasználható energiát ad", "Oferă în principal energie disponibilă rapid", "Mainly provides readily available energy") },
  { id: "potato", group: "carbohydrate", name: l("Kartoffel", "Burgonya", "Cartof", "Potato"), clue: l("Stärke ist der typische Schwerpunkt", "A keményítő a jellemző fő összetevő", "Amidonul este componenta caracteristică", "Starch is the characteristic focus") },
  { id: "oil", group: "fat", name: l("Pflanzenöl", "Növényi olaj", "Ulei vegetal", "Vegetable oil"), clue: l("Sehr energiereicher Nährstoff", "Nagy energiatartalmú tápanyag", "Nutrient cu multă energie", "Energy-dense nutrient") },
  { id: "walnut", group: "fat", name: l("Walnuss", "Dió", "Nucă", "Walnut"), clue: l("Enthält viele ungesättigte Fettsäuren", "Sok telítetlen zsírsavat tartalmaz", "Conține mulți acizi grași nesaturați", "Contains many unsaturated fatty acids") },
  { id: "pepper", group: "vitamin", name: l("Paprika", "Paprika", "Ardei", "Bell pepper"), clue: l("Bekannt als Vitamin-C-Quelle", "Jelentős C-vitamin-forrás", "Cunoscut ca sursă de vitamina C", "Known as a source of vitamin C") },
  { id: "carrot", group: "vitamin", name: l("Karotte", "Sárgarépa", "Morcov", "Carrot"), clue: l("Enthält viel Provitamin A", "Sok A-provitamint tartalmaz", "Conține multă provitamină A", "Contains plenty of provitamin A") },
  { id: "milk", group: "mineral", name: l("Milch", "Tej", "Lapte", "Milk"), clue: l("Typische Calciumquelle", "Jellegzetes kalciumforrás", "Sursă tipică de calciu", "Typical source of calcium") },
  { id: "banana", group: "mineral", name: l("Banane", "Banán", "Banană", "Banana"), clue: l("Bekannt als Kaliumquelle", "Jelentős káliumforrás", "Cunoscută ca sursă de potasiu", "Known as a source of potassium") },
] as const;

export const FOOD_CHAINS_LOCALIZED = [
  { id: "meadow", habitat: l("Wiese", "Rét", "Pajiște", "Meadow"), stages: [l("Gras", "Fű", "Iarbă", "Grass"), l("Heuschrecke", "Szöcske", "Lăcustă", "Grasshopper"), l("Frosch", "Béka", "Broască", "Frog"), l("Storch", "Gólya", "Barză", "Stork")] },
  { id: "pond", habitat: l("Teich", "Tó", "Iaz", "Pond"), stages: [l("Alge", "Alga", "Algă", "Alga"), l("Wasserfloh", "Vízibolha", "Purice de apă", "Water flea"), l("Kleinfisch", "Kis hal", "Pește mic", "Small fish"), l("Hecht", "Csuka", "Știucă", "Pike")] },
  { id: "sea", habitat: l("Meer", "Tenger", "Mare", "Sea"), stages: [l("Phytoplankton", "Fitoplankton", "Fitoplancton", "Phytoplankton"), l("Krill", "Krill", "Krill", "Krill"), l("Hering", "Hering", "Hering", "Herring"), l("Hai", "Cápa", "Rechin", "Shark")] },
  { id: "forest", habitat: l("Wald", "Erdő", "Pădure", "Forest"), stages: [l("Eichenblatt", "Tölgylevél", "Frunză de stejar", "Oak leaf"), l("Raupe", "Hernyó", "Omidă", "Caterpillar"), l("Meise", "Cinege", "Pițigoi", "Tit"), l("Habicht", "Héja", "Uliu", "Hawk")] },
  { id: "field", habitat: l("Feld", "Szántóföld", "Câmp", "Field"), stages: [l("Getreide", "Gabona", "Cereale", "Grain"), l("Maus", "Egér", "Șoarece", "Mouse"), l("Schlange", "Kígyó", "Șarpe", "Snake"), l("Adler", "Sas", "Vultur", "Eagle")] },
  { id: "desert", habitat: l("Wüste", "Sivatag", "Deșert", "Desert"), stages: [l("Kaktus", "Kaktusz", "Cactus", "Cactus"), l("Heuschrecke", "Szöcske", "Lăcustă", "Grasshopper"), l("Eidechse", "Gyík", "Șopârlă", "Lizard"), l("Schlange", "Kígyó", "Șarpe", "Snake")] },
] as const;

export const LIFECYCLES_LOCALIZED = [
  { id: "frog", organism: l("Frosch", "Béka", "Broască", "Frog"), stages: [l("Ei", "Pete", "Ou", "Egg"), l("Kaulquappe", "Ebihal", "Mormoloc", "Tadpole"), l("Jungfrosch", "Fiatal béka", "Broscuță", "Froglet"), l("Frosch", "Kifejlett béka", "Broască adultă", "Adult frog")], emojis: ["🥚", "🐟", "🐸", "🐸"] },
  { id: "butterfly", organism: l("Schmetterling", "Pillangó", "Fluture", "Butterfly"), stages: [l("Ei", "Pete", "Ou", "Egg"), l("Raupe", "Hernyó", "Omidă", "Caterpillar"), l("Puppe", "Báb", "Crisalidă", "Pupa"), l("Schmetterling", "Pillangó", "Fluture", "Butterfly")], emojis: ["🥚", "🐛", "🟤", "🦋"] },
  { id: "bee", organism: l("Biene", "Méh", "Albină", "Bee"), stages: [l("Ei", "Pete", "Ou", "Egg"), l("Larve", "Lárva", "Larvă", "Larva"), l("Puppe", "Báb", "Pupă", "Pupa"), l("Biene", "Kifejlett méh", "Albină adultă", "Adult bee")], emojis: ["🥚", "🐛", "🟤", "🐝"] },
  { id: "plant", organism: l("Blütenpflanze", "Virágos növény", "Plantă cu flori", "Flowering plant"), stages: [l("Samen", "Mag", "Sămânță", "Seed"), l("Keimling", "Csíranövény", "Plăntuță", "Seedling"), l("Junge Pflanze", "Fiatal növény", "Plantă tânără", "Young plant"), l("Blütenpflanze", "Virágos növény", "Plantă cu flori", "Flowering plant")], emojis: ["🌰", "🌱", "🌿", "🌸"] },
  { id: "ladybird", organism: l("Marienkäfer", "Katicabogár", "Buburuză", "Ladybird"), stages: [l("Ei", "Pete", "Ou", "Egg"), l("Larve", "Lárva", "Larvă", "Larva"), l("Puppe", "Báb", "Pupă", "Pupa"), l("Marienkäfer", "Katicabogár", "Buburuză", "Ladybird")], emojis: ["🥚", "🐛", "🟤", "🐞"] },
  { id: "mosquito", organism: l("Mücke", "Szúnyog", "Țânțar", "Mosquito"), stages: [l("Ei", "Pete", "Ou", "Egg"), l("Larve im Wasser", "Vízi lárva", "Larvă acvatică", "Aquatic larva"), l("Puppe", "Báb", "Pupă", "Pupa"), l("Mücke", "Kifejlett szúnyog", "Țânțar adult", "Adult mosquito")], emojis: ["🥚", "🪱", "🟤", "🦟"] },
] as const;

export function text(value: Localized, lang?: string): string {
  return value[biologieLegacyLang(lang)];
}
