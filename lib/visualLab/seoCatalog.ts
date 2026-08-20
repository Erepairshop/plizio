export const VISUAL_LAB_LANGS = ["de", "hu", "ro", "en"] as const;
export type VisualLabSeoLang = (typeof VISUAL_LAB_LANGS)[number];

export const VISUAL_LAB_SUBJECT_IDS = [
  "sachkunde", "geographie", "geschichte", "astromath", "deutsch", "english",
  "magyar", "romana", "informatika", "physik", "kemia", "biologie",
] as const;
export type VisualLabSeoSubjectId = (typeof VISUAL_LAB_SUBJECT_IDS)[number];

export type LocalizedText = Record<VisualLabSeoLang, string>;
export type VisualLabMechanic =
  | "campaign" | "catch" | "classify" | "sequence" | "memory" | "identify"
  | "build" | "analyze" | "calculate" | "network" | "edit" | "plan";

export interface VisualLabSeoGame {
  id: string;
  key: `${VisualLabSeoSubjectId}:${string}`;
  grades: readonly number[];
  mechanic: VisualLabMechanic;
  name: LocalizedText;
  focus: LocalizedText;
  skillIds: readonly string[];
}

export interface VisualLabSeoSubject {
  id: VisualLabSeoSubjectId;
  slug: LocalizedText;
  locales: readonly VisualLabSeoLang[];
  grades: readonly number[];
  name: LocalizedText;
  focus: LocalizedText;
  games: readonly VisualLabSeoGame[];
}

export interface LocalizedVisualLabGameContent {
  lang: VisualLabSeoLang;
  subjectId: VisualLabSeoSubjectId;
  gameId: string;
  key: `${VisualLabSeoSubjectId}:${string}`;
  url: string;
  canonical: string;
  name: string;
  subjectName: string;
  title: string;
  description: string;
  intro: string;
  gradeText: string;
  mechanicName: string;
  mechanicDescription: string;
  learningOutcomes: readonly string[];
  skillIds: readonly string[];
  grades: readonly number[];
  levelCount: 5;
  isAccessibleForFree: true;
}

const ALL = VISUAL_LAB_LANGS;
const G1_8 = [1, 2, 3, 4, 5, 6, 7, 8] as const;
const G1_4 = [1, 2, 3, 4] as const;
const G2_8 = [2, 3, 4, 5, 6, 7, 8] as const;
const G3_8 = [3, 4, 5, 6, 7, 8] as const;
const G5_8 = [5, 6, 7, 8] as const;
const G5_7 = [5, 6, 7] as const;
const G5_6 = [5, 6] as const;

const L = (de: string, hu: string, ro: string, en: string): LocalizedText => ({ de, hu, ro, en });

function game(
  subjectId: VisualLabSeoSubjectId,
  id: string,
  grades: readonly number[],
  mechanic: VisualLabMechanic,
  name: LocalizedText,
  focus: LocalizedText,
  skillIds: readonly string[],
): VisualLabSeoGame {
  return { id, key: `${subjectId}:${id}`, grades, mechanic, name, focus, skillIds };
}

const COMMON_NAMES = {
  meteor: L("Sternenfang", "Csillagfogó", "Prinde stelele", "Star Catch"),
  orbit: L("Orbit Sortieren", "Pályarendező", "Sortare orbitală", "Orbit Sort"),
  signal: L("Signalläufer", "Jelfutó", "Alergător de semnale", "Signal Runner"),
  constellation: L("Sternbilder", "Csillagkép-építő", "Constructor de constelații", "Constellation Builder"),
  memory: L("Memory Radar", "Memóriaradar", "Radar de memorie", "Memory Radar"),
} as const;

function legacyFive(subjectId: VisualLabSeoSubjectId, subjectFocus: LocalizedText): VisualLabSeoGame[] {
  return [
    game(subjectId, "meteor-catch", G5_6, "catch", COMMON_NAMES.meteor, subjectFocus, ["recognition", "speed"]),
    game(subjectId, "orbit-sort", G5_7, "classify", COMMON_NAMES.orbit, subjectFocus, ["classification", "comparison"]),
    game(subjectId, "signal-runner", G5_8, "sequence", COMMON_NAMES.signal, subjectFocus, ["sequence", "decision-making"]),
    game(subjectId, "constellation-builder", G5_8, "build", COMMON_NAMES.constellation, subjectFocus, ["relationships", "construction"]),
    game(subjectId, "memory-radar", G5_8, "memory", COMMON_NAMES.memory, subjectFocus, ["recall", "matching"]),
  ];
}

const subjectNames: Record<VisualLabSeoSubjectId, LocalizedText> = {
  sachkunde: L("Sachkunde", "Környezetismeret", "Cunoașterea mediului", "General knowledge"),
  geographie: L("Geographie", "Földrajz", "Geografie", "Geography"),
  geschichte: L("Geschichte", "Történelem", "Istorie", "History"),
  astromath: L("Mathematik", "Matematika", "Matematică", "Mathematics"),
  deutsch: L("Deutsch", "Német nyelv", "Limba germană", "German language"),
  english: L("Englisch", "Angol nyelv", "Limba engleză", "English language"),
  magyar: L("Ungarisch", "Magyar nyelv", "Limba maghiară", "Hungarian language"),
  romana: L("Rumänisch", "Román nyelv", "Limba română", "Romanian language"),
  informatika: L("Informatik", "Informatika", "Informatică", "Informatics"),
  physik: L("Physik", "Fizika", "Fizică", "Physics"),
  kemia: L("Chemie", "Kémia", "Chimie", "Chemistry"),
  biologie: L("Biologie", "Biológia", "Biologie", "Biology"),
};

const subjectSlugs: Record<VisualLabSeoSubjectId, LocalizedText> = {
  sachkunde: L("sachkunde", "kornyezetismeret", "cunoasterea-mediului", "general-knowledge"),
  geographie: L("geographie", "foldrajz", "geografie", "geography"),
  geschichte: L("geschichte", "tortenelem", "istorie", "history"),
  astromath: L("mathematik", "matematika", "matematica", "mathematics"),
  deutsch: L("deutsch", "nemet", "limba-germana", "german"),
  english: L("englisch", "angol", "limba-engleza", "english"),
  magyar: L("ungarisch", "magyar", "limba-maghiara", "hungarian"),
  romana: L("rumaenisch", "roman", "limba-romana", "romanian"),
  informatika: L("informatik", "informatika", "informatica", "computer-science"),
  physik: L("physik", "fizika", "fizica", "physics"),
  kemia: L("chemie", "kemia", "chimie", "chemistry"),
  biologie: L("biologie", "biologia", "biologie", "biology"),
};
const subjectFocus: Record<VisualLabSeoSubjectId, LocalizedText> = {
  sachkunde: L("Natur, Alltag, Zeit und Zusammenhänge verstehen", "a természet, a mindennapok, az idő és az összefüggések megértése", "înțelegerea naturii, vieții cotidiene, timpului și legăturilor", "understanding nature, everyday life, time and relationships"),
  geographie: L("Karten, Räume, Klima und Mensch-Umwelt-Beziehungen untersuchen", "térképek, tájak, éghajlat és ember-környezet kapcsolatok vizsgálata", "analizarea hărților, spațiilor, climei și relațiilor om-mediu", "exploring maps, places, climate and human-environment relationships"),
  geschichte: L("Epochen, Quellen, Ursachen und Folgen historisch einordnen", "korszakok, források, okok és következmények történelmi értelmezése", "interpretarea epocilor, surselor, cauzelor și efectelor istorice", "interpreting periods, sources, causes and consequences in history"),
  astromath: L("Zahlen, Operationen, Geometrie, Größen und Daten sicher anwenden", "számok, műveletek, geometria, mértékek és adatok biztos alkalmazása", "folosirea sigură a numerelor, operațiilor, geometriei, măsurilor și datelor", "applying numbers, operations, geometry, measures and data with confidence"),
  deutsch: L("Lesen, Schreiben, Wortschatz, Rechtschreibung und Grammatik üben", "német olvasás, írás, szókincs, helyesírás és nyelvtan gyakorlása", "exersarea citirii, scrierii, vocabularului, ortografiei și gramaticii germane", "practising German reading, writing, vocabulary, spelling and grammar"),
  english: L("Englisches Lesen, Schreiben, Wortschatz und Grammatik üben", "angol olvasás, írás, szókincs és nyelvtan gyakorlása", "exersarea citirii, scrierii, vocabularului și gramaticii engleze", "practising English reading, writing, vocabulary and grammar"),
  magyar: L("Ungarisches Lesen, Schreiben, Wortschatz und Grammatik üben", "magyar olvasás, írás, szókincs, helyesírás és nyelvtan gyakorlása", "exersarea citirii, scrierii, vocabularului și gramaticii maghiare", "practising Hungarian reading, writing, vocabulary and grammar"),
  romana: L("Rumänisches Lesen, Schreiben, Wortschatz und Grammatik üben", "román olvasás, írás, szókincs és nyelvtan gyakorlása", "exersarea citirii, scrierii, vocabularului, ortografiei și gramaticii române", "practising Romanian reading, writing, vocabulary and grammar"),
  informatika: L("Daten, Algorithmen, Systeme, Netzwerke und Sicherheit verstehen", "adatok, algoritmusok, rendszerek, hálózatok és biztonság megértése", "înțelegerea datelor, algoritmilor, sistemelor, rețelelor și securității", "understanding data, algorithms, systems, networks and security"),
  physik: L("Kräfte, Energie, Elektrizität, Optik und Messdaten untersuchen", "erők, energia, elektromosság, fénytan és mérési adatok vizsgálata", "investigarea forțelor, energiei, electricității, opticii și măsurătorilor", "investigating forces, energy, electricity, optics and measurements"),
  kemia: L("Stoffe, Elemente, Reaktionen, Bindungen und Laborsicherheit untersuchen", "anyagok, elemek, reakciók, kötések és laborbiztonság vizsgálata", "investigarea substanțelor, elementelor, reacțiilor, legăturilor și siguranței", "investigating substances, elements, reactions, bonds and laboratory safety"),
  biologie: L("Zellen, Organismen, Lebensräume, Systeme und Gesundheit untersuchen", "sejtek, élőlények, élőhelyek, rendszerek és egészség vizsgálata", "investigarea celulelor, organismelor, habitatelor, sistemelor și sănătății", "investigating cells, organisms, habitats, systems and health"),
};

function skillGame(subjectId: VisualLabSeoSubjectId, id: string, name: LocalizedText, focus: LocalizedText, mechanic: VisualLabMechanic, skills: string[]): VisualLabSeoGame {
  return game(subjectId, id, G5_8, mechanic, name, focus, skills);
}

function languageGames(subjectId: "deutsch" | "english" | "magyar" | "romana", seasonal = false): VisualLabSeoGame[] {
  const f = subjectFocus[subjectId];
  const games = [
    game(subjectId, "tipp-sturm", G1_8, "identify", L("Tipp-Sturm", "Gépelési vihar", "Furtuna tastării", "Typing Storm"), f, ["spelling", "typing"]),
    game(subjectId, "wort-waechter", G1_8, "identify", L("Wort-Wächter", "Szóőr", "Paznicul cuvintelor", "Word Guardian"), f, ["spelling", "vocabulary"]),
    game(subjectId, "artikel-asteroids", [1,2,3,4,5], "classify", L("Artikel-Asteroiden", "Névelő-aszteroidák", "Asteroizii articolelor", "Article Asteroids"), f, ["articles", "grammar"]),
    game(subjectId, "satzbau-sniper", G1_8, "sequence", L("Satzbau-Sniper", "Mondatépítő", "Lunetistul propozițiilor", "Sentence Sniper"), f, ["syntax", "sentence-building"]),
    game(subjectId, "silben-slicer", G1_4, "classify", L("Silben-Slicer", "Szótagvágó", "Tăietorul de silabe", "Syllable Slicer"), f, ["syllables", "phonology"]),
    game(subjectId, "verben-vortex", G1_8, "identify", L("Verben-Vortex", "Igeörvény", "Vârtejul verbelor", "Verb Vortex"), f, ["verbs", "conjugation"]),
    game(subjectId, "lese-detektiv", G2_8, "analyze", L("Lese-Detektiv", "Olvasásdetektív", "Detectivul lecturii", "Reading Detective"), f, ["reading-comprehension", "evidence"]),
    game(subjectId, "grammatik-scanner", G2_8, "classify", L("Grammatik-Scanner", "Nyelvtanszkenner", "Scanner gramatical", "Grammar Scanner"), f, ["grammar", "classification"]),
    game(subjectId, "text-retter", G2_8, "edit", L("Text-Retter", "Szövegmegmentő", "Salvatorul textului", "Text Rescuer"), f, ["editing", "punctuation"]),
    game(subjectId, "wort-netz", G2_8, "network", L("Wort-Netz", "Szóháló", "Rețeaua cuvintelor", "Word Network"), f, ["vocabulary", "word-relations"]),
    game(subjectId, "schreibwerkstatt", G2_8, "plan", L("Schreibwerkstatt", "Íróműhely", "Atelier de scriere", "Writing Workshop"), f, ["writing", "text-structure"]),
    game(subjectId, "literatur-lupe", G5_8, "analyze", L("Literatur-Lupe", "Irodalmi nagyító", "Lupa literară", "Literature Lens"), f, ["literature", "interpretation"]),
  ];
  if (seasonal) games.push(
    game(subjectId, "grusel-builder", G1_8, "build", L("Grusel-Geschichte", "Rémtörténet-építő", "Constructor de povești misterioase", "Spooky Story Builder"), f, ["creative-writing", "story-structure"]),
    game(subjectId, "grusel-bild", G1_8, "plan", L("Grusel-Bildgeschichte", "Képes rémtörténet", "Poveste misterioasă în imagini", "Spooky Picture Story"), f, ["visual-literacy", "storytelling"]),
  );
  return games;
}

const sachkundeGames: VisualLabSeoGame[] = [
  game("sachkunde", "meteor-catch", G1_4, "catch", COMMON_NAMES.meteor, subjectFocus.sachkunde, ["recognition", "speed"]),
  game("sachkunde", "orbit-sort", G1_4, "classify", COMMON_NAMES.orbit, subjectFocus.sachkunde, ["classification", "comparison"]),
  game("sachkunde", "signal-runner", G1_4, "sequence", COMMON_NAMES.signal, subjectFocus.sachkunde, ["sequence", "decision-making"]),
  game("sachkunde", "constellation-builder", G1_4, "build", COMMON_NAMES.constellation, subjectFocus.sachkunde, ["relationships", "construction"]),
  game("sachkunde", "memory-radar", G1_4, "memory", COMMON_NAMES.memory, subjectFocus.sachkunde, ["recall", "matching"]),
  game("sachkunde", "sequence-sort", G1_4, "sequence", L("Zeitlinie Sortieren", "Idővonalrendező", "Sortare cronologică", "Sequence Sort"), subjectFocus.sachkunde, ["chronology", "sequence"]),
  game("sachkunde", "fact-swipe", G1_4, "identify", L("Fakten-Check", "Tényellenőrző", "Verificarea faptelor", "Fact Check"), subjectFocus.sachkunde, ["facts", "critical-thinking"]),
];

const mathGames: VisualLabSeoGame[] = [
  game("astromath", "math-quest", G1_8, "campaign", L("Mathe Quest", "Matek küldetés", "Misiunea matematică", "Math Quest"), subjectFocus.astromath, ["operations", "problem-solving"]),
  game("astromath", "math-campaign", G1_8, "campaign", L("Mathe-Kampagne", "Matek kaland", "Campania matematică", "Math Campaign"), subjectFocus.astromath, ["mixed-practice", "progression"]),
  game("astromath", "math-ninja", G1_8, "catch", L("Mathe Ninja", "Matek nindzsa", "Ninja matematic", "Math Ninja"), subjectFocus.astromath, ["mental-math", "operations"]),
  game("astromath", "math-defender", G1_8, "identify", L("Mathe-Verteidiger", "Matek védelmező", "Apărătorul matematic", "Math Defender"), subjectFocus.astromath, ["operations", "accuracy"]),
  game("astromath", "fraction-reactor", G3_8, "calculate", L("Bruch-Reaktor", "Törtreaktor", "Reactorul fracțiilor", "Fraction Reactor"), subjectFocus.astromath, ["fractions", "decimals-percent"]),
  game("astromath", "angle-laser", [2,3,4,5,6,7,8], "identify", L("Winkel-Laser", "Szöglézer", "Laserul unghiurilor", "Angle Laser"), subjectFocus.astromath, ["geometry", "angles"]),
  game("astromath", "time-warp", G1_8, "memory", L("Zeit-Wirbel", "Időörvény", "Vârtejul timpului", "Time Warp"), subjectFocus.astromath, ["time", "measurement"]),
  game("astromath", "star-mapper", G3_8, "identify", L("Sternenkartograf", "Csillagtérképész", "Cartograful stelar", "Star Mapper"), subjectFocus.astromath, ["coordinates", "geometry"]),
  game("astromath", "meteor-scale", G1_8, "calculate", L("Meteor-Waage", "Meteormérleg", "Balanța meteoriților", "Meteor Scale"), subjectFocus.astromath, ["equations", "balance"]),
  game("astromath", "data-orbit", G1_8, "analyze", L("Daten-Mission", "Adatküldetés", "Misiunea datelor", "Data Mission"), subjectFocus.astromath, ["data", "probability"]),
];

const geoGames = [...legacyFive("geographie", subjectFocus.geographie),
  skillGame("geographie", "karten-kompass", L("Karten-Kompass", "Térképes iránytű", "Busola hărților", "Map Compass"), L("Kartenzeichen, Maßstab, Richtung und Lage lesen", "térképjelek, méretarány, irány és helyzet olvasása", "citirea simbolurilor, scării, direcției și poziției", "reading symbols, scale, direction and location"), "identify", ["map-reading", "orientation"]),
  skillGame("geographie", "landschaft-detektiv", L("Landschafts-Detektiv", "Tájdetektív", "Detectivul peisajelor", "Landscape Detective"), L("Landschaftsformen anhand von Hinweisen erkennen", "tájformák felismerése nyomok alapján", "recunoașterea formelor de relief din indicii", "identifying landscapes from evidence"), "analyze", ["landforms", "evidence"]),
  skillGame("geographie", "klima-labor", L("Klima-Labor", "Klímalabor", "Laborator climatic", "Climate Lab"), L("Klimaelemente und Klimadiagramme auswerten", "éghajlati elemek és diagramok értelmezése", "interpretarea elementelor și diagramelor climatice", "interpreting climate elements and charts"), "analyze", ["climate", "charts"]),
  skillGame("geographie", "weltregionen-atlas", L("Weltregionen-Atlas", "Világrégió-atlasz", "Atlasul regiunilor lumii", "World Regions Atlas"), L("Weltregionen vergleichen und räumlich einordnen", "világrégiók összehasonlítása és elhelyezése", "compararea și localizarea regiunilor lumii", "comparing and locating world regions"), "classify", ["regions", "spatial-thinking"]),
  skillGame("geographie", "mensch-raum-netz", L("Mensch-Raum-Netz", "Ember-tér háló", "Rețeaua om-spațiu", "Human-Space Network"), L("Beziehungen zwischen Bevölkerung, Wirtschaft und Raum verknüpfen", "népesség, gazdaság és tér kapcsolatainak összekötése", "conectarea populației, economiei și spațiului", "connecting population, economy and place"), "network", ["human-geography", "systems"]),
  skillGame("geographie", "geo-daten-check", L("Geo-Daten-Check", "Földrajzi adatvizsgáló", "Verificarea datelor geo", "Geo Data Check"), L("Entfernungen, Dichte, Zeitzonen und Geodaten berechnen", "távolság, sűrűség, időzóna és földrajzi adatok számítása", "calcularea distanțelor, densității, fusurilor și datelor geografice", "calculating distance, density, time zones and geographic data"), "calculate", ["geodata", "calculation"]),
  skillGame("geographie", "zukunfts-planer", L("Zukunfts-Planer", "Jövőtervező", "Planificatorul viitorului", "Future Planner"), L("nachhaltige Raumentscheidungen abwägen und begründen", "fenntartható térbeli döntések mérlegelése és indoklása", "evaluarea și justificarea deciziilor spațiale durabile", "weighing and explaining sustainable spatial decisions"), "plan", ["sustainability", "decision-making"]),
];

const historyGames = [...legacyFive("geschichte", subjectFocus.geschichte),
  skillGame("geschichte", "chronik-scanner", L("Chronik-Scanner", "Krónikaszkenner", "Scannerul cronicii", "Chronicle Scanner"), L("historische Aussagen zeitlich und sachlich prüfen", "történelmi állítások időbeli és tartalmi ellenőrzése", "verificarea cronologică și factuală a afirmațiilor istorice", "checking historical claims for time and accuracy"), "analyze", ["chronology", "fact-checking"]),
  skillGame("geschichte", "epochen-sortierer", L("Epochen-Sortierer", "Korszakrendező", "Sortatorul epocilor", "Era Sorter"), L("Ereignisse und Merkmale Epochen zuordnen", "események és jellemzők korszakokhoz rendelése", "asocierea evenimentelor și trăsăturilor cu epoci", "matching events and features to periods"), "classify", ["periodization", "classification"]),
  skillGame("geschichte", "ursache-wirkung", L("Ursache und Wirkung", "Ok és következmény", "Cauză și efect", "Cause and Effect"), L("historische Ursachen, Folgen und Wechselwirkungen verbinden", "történelmi okok, következmények és kölcsönhatások összekötése", "conectarea cauzelor, efectelor și interacțiunilor istorice", "connecting historical causes, effects and interactions"), "network", ["causation", "relationships"]),
  skillGame("geschichte", "quellen-labor", L("Quellen-Labor", "Forráslabor", "Laboratorul surselor", "Source Lab"), L("Quellenart, Perspektive und Aussagekraft beurteilen", "forrástípus, nézőpont és hitelesség értékelése", "evaluarea tipului, perspectivei și valorii unei surse", "evaluating source type, perspective and value"), "analyze", ["source-criticism", "perspective"]),
  skillGame("geschichte", "zeitstrahl-analyse", L("Zeitstrahl-Analyse", "Idővonal-elemzés", "Analiza cronologiei", "Timeline Analysis"), L("Ereignisse ordnen und zeitliche Abstände deuten", "események rendezése és időbeli távolságok értelmezése", "ordonarea evenimentelor și interpretarea distanțelor în timp", "ordering events and interpreting time intervals"), "sequence", ["timeline", "chronology"]),
  skillGame("geschichte", "entscheidungs-rat", L("Historischer Rat", "Történelmi tanács", "Consiliul istoric", "Historical Council"), L("Entscheidungen aus ihrer historischen Lage heraus abwägen", "döntések mérlegelése történelmi helyzetük alapján", "evaluarea deciziilor în contextul lor istoric", "weighing decisions within their historical context"), "plan", ["context", "judgement"]),
  skillGame("geschichte", "geschichts-detektiv", L("Geschichts-Detektiv", "Történelmi nyomozó", "Detectivul istoriei", "History Detective"), L("Hinweise kombinieren und historische Schlüsse ziehen", "nyomok összekapcsolása és történelmi következtetések levonása", "combinarea indiciilor și formularea concluziilor istorice", "combining evidence and drawing historical conclusions"), "analyze", ["evidence", "inference"]),
];

const bioGames = [...legacyFive("biologie", subjectFocus.biologie),
  skillGame("biologie", "mikro-scanner", L("Mikro-Scanner", "Mikroszkenner", "Micro-scanner", "Micro Scanner"), L("Zellstrukturen und mikroskopische Merkmale erkennen", "sejtszerkezetek és mikroszkopikus jellemzők felismerése", "recunoașterea structurilor celulare și microscopice", "identifying cell structures and microscopic features"), "identify", ["cells", "observation"]),
  skillGame("biologie", "bio-sortierstation", L("Bio-Sortierstation", "Biorendező", "Stația de sortare bio", "Bio Sorting Station"), L("Organismen und biologische Merkmale klassifizieren", "élőlények és biológiai jellemzők osztályozása", "clasificarea organismelor și trăsăturilor biologice", "classifying organisms and biological traits"), "classify", ["taxonomy", "classification"]),
  skillGame("biologie", "prozess-puzzle", L("Prozess-Puzzle", "Folyamatkirakó", "Puzzle de procese", "Process Puzzle"), L("biologische Abläufe in die richtige Reihenfolge bringen", "biológiai folyamatok helyes sorrendbe rendezése", "ordonarea corectă a proceselor biologice", "ordering biological processes correctly"), "sequence", ["processes", "sequence"]),
  skillGame("biologie", "system-netz", L("System-Netz", "Rendszerháló", "Rețeaua sistemelor", "System Network"), L("Organe, Funktionen und Stoffkreisläufe verknüpfen", "szervek, funkciók és anyagkörforgások összekötése", "conectarea organelor, funcțiilor și circuitelor materiei", "connecting organs, functions and cycles"), "network", ["systems", "relationships"]),
  skillGame("biologie", "lebensraum-detektiv", L("Lebensraum-Detektiv", "Élőhelydetektív", "Detectivul habitatelor", "Habitat Detective"), L("Anpassungen und ökologische Beziehungen aus Hinweisen ableiten", "alkalmazkodások és ökológiai kapcsolatok kikövetkeztetése", "deducerea adaptărilor și relațiilor ecologice", "inferring adaptations and ecological relationships"), "analyze", ["ecology", "adaptation"]),
  skillGame("biologie", "forschungs-check", L("Forschungs-Check", "Kutatásvizsgáló", "Verificarea cercetării", "Research Check"), L("Versuche, Variablen und biologische Belege beurteilen", "kísérletek, változók és biológiai bizonyítékok értékelése", "evaluarea experimentelor, variabilelor și dovezilor biologice", "evaluating experiments, variables and biological evidence"), "analyze", ["scientific-method", "evidence"]),
  skillGame("biologie", "gesundheits-mission", L("Gesundheits-Mission", "Egészségküldetés", "Misiunea sănătății", "Health Mission"), L("Gesundheitsentscheidungen biologisch begründen", "egészségügyi döntések biológiai indoklása", "justificarea biologică a deciziilor pentru sănătate", "explaining health decisions through biology"), "plan", ["health", "decision-making"]),
];

const physicsGames = [
  game("physik", "formula-blitz", G5_8, "calculate", L("Formel-Blitz", "Képlet villám", "Fulgerul formulelor", "Formula Blitz"), subjectFocus.physik, ["formulas", "calculation"]),
  ...legacyFive("physik", subjectFocus.physik),
  skillGame("physik", "kraft-labor", L("Kraft-Labor", "Erőlabor", "Laboratorul forțelor", "Force Lab"), L("Kräfte, Bewegung und Gleichgewicht analysieren", "erők, mozgás és egyensúly elemzése", "analizarea forțelor, mișcării și echilibrului", "analysing forces, motion and balance"), "analyze", ["forces", "motion"]),
  skillGame("physik", "schaltkreis-werkstatt", L("Schaltkreis-Werkstatt", "Áramkörműhely", "Atelierul circuitelor", "Circuit Workshop"), L("Stromkreise aufbauen und elektrische Beziehungen prüfen", "áramkörök építése és elektromos kapcsolatok vizsgálata", "construirea circuitelor și verificarea relațiilor electrice", "building circuits and checking electrical relationships"), "build", ["electricity", "circuits"]),
  skillGame("physik", "optik-laser", L("Optik-Laser", "Optikai lézer", "Laser optic", "Optics Laser"), L("Lichtwege, Reflexion und Brechung vorhersagen", "fényutak, visszaverődés és törés előrejelzése", "prezicerea traseelor luminii, reflexiei și refracției", "predicting light paths, reflection and refraction"), "identify", ["optics", "prediction"]),
  skillGame("physik", "energie-manager", L("Energie-Manager", "Energiamenedzser", "Managerul energiei", "Energy Manager"), L("Energieformen, Umwandlungen und Wirkungsgrade verknüpfen", "energiaformák, átalakulások és hatásfok összekötése", "conectarea formelor, transformărilor și eficienței energiei", "connecting energy forms, transformations and efficiency"), "network", ["energy", "systems"]),
  skillGame("physik", "messdaten-analyse", L("Messdaten-Analyse", "Mérési adatelemzés", "Analiza măsurătorilor", "Measurement Analysis"), L("Messreihen, Diagramme und Unsicherheiten auswerten", "mérési sorok, diagramok és bizonytalanságok értelmezése", "interpretarea seriilor, diagramelor și incertitudinilor", "interpreting measurements, charts and uncertainty"), "analyze", ["measurement", "data"]),
  skillGame("physik", "experiment-check", L("Experiment-Check", "Kísérletvizsgáló", "Verificarea experimentului", "Experiment Check"), L("Versuchsaufbau, Variablen und faire Tests prüfen", "kísérleti elrendezés, változók és korrekt vizsgálatok ellenőrzése", "verificarea montajului, variabilelor și testelor corecte", "checking experimental setup, variables and fair tests"), "analyze", ["scientific-method", "variables"]),
  skillGame("physik", "formel-detektiv", L("Formel-Detektiv", "Képletdetektív", "Detectivul formulelor", "Formula Detective"), L("passende Größen, Einheiten und Formeln aus Hinweisen bestimmen", "megfelelő mennyiségek, mértékegységek és képletek meghatározása", "determinarea mărimilor, unităților și formulelor potrivite", "selecting quantities, units and formulas from evidence"), "calculate", ["formulas", "units"]),
];

const chemistryGames = [...legacyFive("kemia", subjectFocus.kemia),
  skillGame("kemia", "stoff-scanner", L("Stoff-Scanner", "Anyagszkenner", "Scannerul substanțelor", "Substance Scanner"), L("Stoffeigenschaften erkennen und vergleichen", "anyagok tulajdonságainak felismerése és összehasonlítása", "recunoașterea și compararea proprietăților substanțelor", "identifying and comparing properties of substances"), "identify", ["materials", "properties"]),
  skillGame("kemia", "element-sortierer", L("Element-Sortierer", "Elemrendező", "Sortatorul elementelor", "Element Sorter"), L("Elemente nach Aufbau und Periodensystem ordnen", "elemek rendezése szerkezet és periódusos rendszer szerint", "ordonarea elementelor după structură și tabelul periodic", "sorting elements by structure and the periodic table"), "classify", ["elements", "periodic-table"]),
  skillGame("kemia", "reaktions-puzzle", L("Reaktions-Puzzle", "Reakciókirakó", "Puzzle de reacții", "Reaction Puzzle"), L("Reaktionsschritte und Stoffumwandlungen ordnen", "reakciólépések és anyagátalakulások rendezése", "ordonarea etapelor reacțiilor și transformărilor", "ordering reaction steps and chemical changes"), "sequence", ["reactions", "sequence"]),
  skillGame("kemia", "bindungs-labor", L("Bindungs-Labor", "Kötéslabor", "Laboratorul legăturilor", "Bonding Lab"), L("Teilchen und chemische Bindungen modellieren", "részecskék és kémiai kötések modellezése", "modelarea particulelor și legăturilor chimice", "modelling particles and chemical bonds"), "build", ["bonding", "particles"]),
  skillGame("kemia", "ph-analyse", L("pH-Analyse", "pH-elemzés", "Analiza pH", "pH Analysis"), L("Säuren, Basen und pH-Werte aus Daten bestimmen", "savak, bázisok és pH-értékek meghatározása adatokból", "determinarea acizilor, bazelor și pH-ului din date", "identifying acids, bases and pH from data"), "analyze", ["acids-bases", "data"]),
  skillGame("kemia", "sicherheits-check", L("Sicherheits-Check", "Biztonsági ellenőrzés", "Verificarea siguranței", "Safety Check"), L("Gefahrensymbole und sichere Laborentscheidungen anwenden", "veszélyjelek és biztonságos labordöntések alkalmazása", "aplicarea simbolurilor de pericol și deciziilor sigure", "applying hazard symbols and safe laboratory decisions"), "plan", ["lab-safety", "hazards"]),
  skillGame("kemia", "chemie-detektiv", L("Chemie-Detektiv", "Kémiadetektív", "Detectivul chimiei", "Chemistry Detective"), L("Stoffe und Reaktionen aus Beobachtungen erschließen", "anyagok és reakciók kikövetkeztetése megfigyelésekből", "deducerea substanțelor și reacțiilor din observații", "inferring substances and reactions from observations"), "analyze", ["evidence", "inference"]),
];

const informaticsGames: VisualLabSeoGame[] = [
  game("informatika", "binary-bit-stream", G5_8, "catch", L("Bit Stream", "Bitfolyam", "Flux de biți", "Bit Stream"), subjectFocus.informatika, ["binary", "data"]),
  game("informatika", "code-commander", G5_8, "sequence", L("Code Commander", "Kódparancsnok", "Comandantul codului", "Code Commander"), subjectFocus.informatika, ["algorithms", "sequence"]),
  game("informatika", "hardware-hero", G5_8, "classify", L("Hardware Hero", "Hardverhős", "Eroul hardware", "Hardware Hero"), subjectFocus.informatika, ["hardware", "classification"]),
  game("informatika", "packet-path", G5_8, "network", L("Packet Path", "Csomagútvonal", "Traseul pachetului", "Packet Path"), subjectFocus.informatika, ["networks", "routing"]),
  game("informatika", "virus-vault", G5_8, "identify", L("Virus Vault", "Víruspáncél", "Seiful antivirus", "Virus Vault"), subjectFocus.informatika, ["cybersecurity", "threats"]),
  skillGame("informatika", "daten-scanner", L("Daten-Scanner", "Adatszkenner", "Scanner de date", "Data Scanner"), L("Binärdaten, Formate und Wertebereiche untersuchen", "bináris adatok, formátumok és értéktartományok vizsgálata", "analizarea datelor binare, formatelor și intervalelor", "examining binary data, formats and value ranges"), "analyze", ["data", "binary"]),
  skillGame("informatika", "system-sortierer", L("System-Sortierer", "Rendszerrendező", "Sortator de sisteme", "System Sorter"), L("Hardware, Software und Systemkomponenten zuordnen", "hardver, szoftver és rendszerelemek osztályozása", "clasificarea hardware-ului, software-ului și componentelor", "classifying hardware, software and system components"), "classify", ["systems", "components"]),
  skillGame("informatika", "algorithmus-labor", L("Algorithmus-Labor", "Algoritmuslabor", "Laborator de algoritmi", "Algorithm Lab"), L("Algorithmen planen, ordnen und auf Korrektheit prüfen", "algoritmusok tervezése, rendezése és ellenőrzése", "planificarea, ordonarea și verificarea algoritmilor", "planning, ordering and checking algorithms"), "sequence", ["algorithms", "logic"]),
  skillGame("informatika", "netzwerk-router", L("Netzwerk-Router", "Hálózati útválasztó", "Router de rețea", "Network Router"), L("Datenpakete über geeignete Netzwerkwege leiten", "adatcsomagok irányítása megfelelő hálózati útvonalakon", "dirijarea pachetelor pe trasee de rețea potrivite", "routing packets through suitable network paths"), "network", ["networks", "routing"]),
  skillGame("informatika", "cyber-schutz", L("Cyber-Schutz", "Kibervédelem", "Protecție cibernetică", "Cyber Shield"), L("Risiken erkennen und mehrstufige Schutzmaßnahmen wählen", "kockázatok felismerése és többlépcsős védelem választása", "recunoașterea riscurilor și alegerea protecției în mai mulți pași", "recognising risks and choosing layered protection"), "plan", ["cybersecurity", "decision-making"]),
  skillGame("informatika", "debug-mission", L("Debug-Mission", "Hibakereső küldetés", "Misiune de depanare", "Debug Mission"), L("Fehler in Abläufen und Programmlogik systematisch finden", "hibák módszeres keresése folyamatokban és programlogikában", "găsirea sistematică a erorilor în procese și logică", "systematically finding errors in processes and program logic"), "edit", ["debugging", "logic"]),
  skillGame("informatika", "code-detektiv", L("Code-Detektiv", "Kóddetektív", "Detectivul codului", "Code Detective"), L("Codehinweise lesen und das Programmverhalten ableiten", "kódnyomok olvasása és programviselkedés kikövetkeztetése", "citirea indiciilor din cod și deducerea comportamentului", "reading code clues and inferring program behaviour"), "analyze", ["code-reading", "inference"]),
];

function subject(id: VisualLabSeoSubjectId, locales: readonly VisualLabSeoLang[], grades: readonly number[], games: VisualLabSeoGame[]): VisualLabSeoSubject {
  return { id, slug: subjectSlugs[id], locales, grades, name: subjectNames[id], focus: subjectFocus[id], games };
}

export const VISUAL_LAB_SEO_SUBJECTS: readonly VisualLabSeoSubject[] = [
  subject("sachkunde", ["de"], G1_4, sachkundeGames),
  subject("geographie", ALL, G5_8, geoGames),
  subject("geschichte", ALL, G5_8, historyGames),
  subject("astromath", ALL, G1_8, mathGames),
  subject("deutsch", ["de"], G1_8, languageGames("deutsch", true)),
  subject("english", ["en"], G1_8, languageGames("english")),
  subject("magyar", ["hu"], G1_8, languageGames("magyar")),
  subject("romana", ["ro"], G1_8, languageGames("romana")),
  subject("informatika", ALL, G5_8, informaticsGames),
  subject("physik", ALL, G5_8, physicsGames),
  subject("kemia", ALL, G5_8, chemistryGames),
  subject("biologie", ALL, G5_8, bioGames),
] as const;

const SUBJECT_INDEX = new Map(VISUAL_LAB_SEO_SUBJECTS.map((item) => [item.id, item]));
const GAME_INDEX = new Map(VISUAL_LAB_SEO_SUBJECTS.flatMap((item) => item.games.map((entry) => [entry.key, entry] as const)));

export function getSubject(subjectId: string): VisualLabSeoSubject | undefined {
  return SUBJECT_INDEX.get(subjectId as VisualLabSeoSubjectId);
}

export function getSubjectBySlug(lang: VisualLabSeoLang, slug: string): VisualLabSeoSubject | undefined {
  return VISUAL_LAB_SEO_SUBJECTS.find((entry) => entry.locales.includes(lang) && entry.slug[lang] === slug);
}
export function getGame(subjectId: string, gameId: string): VisualLabSeoGame | undefined {
  return GAME_INDEX.get(`${subjectId}:${gameId}` as `${VisualLabSeoSubjectId}:${string}`);
}

export function isGameLocaleAvailable(subjectId: string, gameId: string, lang: string): boolean {
  const subjectEntry = getSubject(subjectId);
  return Boolean(subjectEntry && subjectEntry.locales.includes(lang as VisualLabSeoLang) && getGame(subjectId, gameId));
}

const MECHANICS: Record<VisualLabMechanic, { name: LocalizedText; description: LocalizedText }> = {
  campaign: { name: L("Lernkampagne", "tanulási kaland", "campanie educativă", "learning campaign"), description: L("Aufeinander aufbauende Missionen verbinden Übung und Fortschritt.", "Egymásra épülő küldetések kapcsolják össze a gyakorlást és a fejlődést.", "Misiunile succesive combină exercițiul cu progresul.", "Connected missions combine practice with visible progress.") },
  catch: { name: L("Reaktionsspiel", "reakciójáték", "joc de reacție", "reaction game"), description: L("Passende Ziele werden schnell erkannt und gezielt ausgewählt.", "A megfelelő célokat gyorsan kell felismerni és kiválasztani.", "Țintele potrivite sunt recunoscute și selectate rapid.", "Correct targets are recognised and selected quickly.") },
  classify: { name: L("Sortieraufgabe", "rendezési feladat", "sarcină de clasificare", "sorting challenge"), description: L("Begriffe und Beispiele werden nach fachlichen Merkmalen geordnet.", "A fogalmakat és példákat szakmai jellemzők szerint kell rendezni.", "Termenii și exemplele sunt grupați după criterii specifice.", "Terms and examples are grouped by subject-specific features.") },
  sequence: { name: L("Reihenfolge-Puzzle", "sorrendi kirakó", "puzzle de ordonare", "sequence puzzle"), description: L("Schritte oder Ereignisse werden in eine begründete Reihenfolge gebracht.", "A lépéseket vagy eseményeket indokolt sorrendbe kell rendezni.", "Pașii sau evenimentele sunt așezate într-o ordine justificată.", "Steps or events are placed into a reasoned order.") },
  memory: { name: L("Merkspiel", "memóriajáték", "joc de memorie", "memory challenge"), description: L("Zusammengehörige Informationen werden erkannt, erinnert und verbunden.", "Az összetartozó információkat fel kell ismerni, megjegyezni és összekapcsolni.", "Informațiile asociate sunt recunoscute, memorate și conectate.", "Related information is recognised, remembered and connected.") },
  identify: { name: L("Erkennungsaufgabe", "felismerési feladat", "sarcină de identificare", "identification challenge"), description: L("Hinweise werden ausgewertet, um die fachlich passende Lösung zu finden.", "A nyomok értelmezésével kell megtalálni a szakmailag megfelelő megoldást.", "Indiciile sunt analizate pentru a găsi soluția corectă.", "Clues are interpreted to find the subject-appropriate solution.") },
  build: { name: L("Konstruktions-Puzzle", "építő kirakó", "puzzle de construcție", "construction puzzle"), description: L("Ein Modell wird aus passenden Teilen schrittweise aufgebaut.", "A modellt megfelelő elemekből, lépésről lépésre kell felépíteni.", "Un model este construit pas cu pas din elementele potrivite.", "A model is built step by step from suitable parts.") },
  analyze: { name: L("Analyse-Labor", "elemzőlabor", "laborator de analiză", "analysis lab"), description: L("Daten und Hinweise werden verglichen, bevor eine Schlussfolgerung gewählt wird.", "Az adatokat és nyomokat össze kell vetni a következtetés előtt.", "Datele și indiciile sunt comparate înainte de formularea concluziei.", "Data and clues are compared before a conclusion is selected.") },
  calculate: { name: L("Rechenmission", "számítási küldetés", "misiune de calcul", "calculation mission"), description: L("Werte, Einheiten und Beziehungen werden berechnet und geprüft.", "Értékeket, mértékegységeket és összefüggéseket kell kiszámítani és ellenőrizni.", "Valorile, unitățile și relațiile sunt calculate și verificate.", "Values, units and relationships are calculated and checked.") },
  network: { name: L("Netzwerk-Puzzle", "hálózati kirakó", "puzzle de rețea", "network puzzle"), description: L("Knoten und Beziehungen werden zu einem funktionierenden System verbunden.", "A csomópontokat és kapcsolatokat működő rendszerré kell összekötni.", "Nodurile și relațiile sunt conectate într-un sistem funcțional.", "Nodes and relationships are connected into a working system.") },
  edit: { name: L("Fehlersuche", "hibajavítás", "depanare", "debugging challenge"), description: L("Fehler werden gefunden, erklärt und mit einer passenden Änderung behoben.", "A hibákat fel kell találni, megérteni és megfelelő módosítással javítani.", "Erorile sunt găsite, explicate și corectate prin modificarea potrivită.", "Errors are found, explained and corrected with a suitable change.") },
  plan: { name: L("Entscheidungsmission", "döntési küldetés", "misiune de decizie", "decision mission"), description: L("Mehrere Kriterien werden abgewogen, um eine begründete Entscheidung zu treffen.", "Több szempont mérlegelésével kell megalapozott döntést hozni.", "Mai multe criterii sunt evaluate pentru o decizie argumentată.", "Several criteria are weighed to make a reasoned decision.") },
};

function gradeText(lang: VisualLabSeoLang, grades: readonly number[]): string {
  const range = grades.length === 1 ? `${grades[0]}` : `${grades[0]}-${grades[grades.length - 1]}`;
  return lang === "de" ? `Klasse ${range}` : lang === "hu" ? `${range}. osztály` : lang === "ro" ? `clasele ${range}` : `grades ${range}`;
}

export function visualLabSubjectUrl(lang: VisualLabSeoLang, subjectId: VisualLabSeoSubjectId): string {
  const subjectEntry = getSubject(subjectId);
  if (!subjectEntry) throw new Error(`Unknown Visual Lab subject: ${subjectId}`);
  return `/${lang}/visual-lab/${subjectEntry.slug[lang]}/`;
}

export function visualLabGameUrl(lang: VisualLabSeoLang, subjectId: VisualLabSeoSubjectId, gameId: string): string {
  return `${visualLabSubjectUrl(lang, subjectId)}${gameId}/`;
}

export function getLocalizedGameContent(subjectId: string, gameId: string, lang: VisualLabSeoLang): LocalizedVisualLabGameContent | undefined {
  const subjectEntry = getSubject(subjectId);
  const gameEntry = getGame(subjectId, gameId);
  if (!subjectEntry || !gameEntry || !subjectEntry.locales.includes(lang)) return undefined;
  const subjectName = subjectEntry.name[lang];
  const name = gameEntry.name[lang];
  const focus = gameEntry.focus[lang];
  const grades = gradeText(lang, gameEntry.grades);
  const mechanic = MECHANICS[gameEntry.mechanic];
  const title = lang === "de"
    ? `${name}: ${subjectName}-Lernspiel | Plizio Visual Lab`
    : lang === "hu"
      ? `${name}: ${subjectName} tanulójáték | Plizio Visual Lab`
      : lang === "ro"
        ? `${name}: joc educativ de ${subjectName.toLowerCase()} | Plizio Visual Lab`
        : `${name}: ${subjectName} learning game | Plizio Visual Lab`;
  const description = lang === "de"
    ? `${focus} mit ${name}: kostenloses interaktives ${subjectName}-Lernspiel für ${grades} mit fünf aufbauenden Stufen.`
    : lang === "hu"
      ? `${focus} a ${name} játékban: ingyenes, interaktív ${subjectName.toLowerCase()} tanulójáték ${grades} számára, öt nehezedő szinttel.`
      : lang === "ro"
        ? `${focus} în ${name}: joc de ${subjectName.toLowerCase()} pentru ${grades}, cu cinci niveluri progresive.`
        : `${focus} with ${name}, a free interactive ${subjectName.toLowerCase()} learning game for ${grades} with five progressive levels.`;
  const intro = lang === "de"
    ? `${name} verbindet ${focus} mit einer kurzen, mobilfreundlichen ${mechanic.name}. Die Aufgaben bleiben im Stoff von ${grades} und werden über fünf Stufen schrittweise anspruchsvoller.`
    : lang === "hu"
      ? `A ${name} a következő területet gyakoroltatja: ${focus}. A mobilbarát ${mechanic.name} feladatai végig a ${grades} tananyagán belül maradnak, és öt szinten fokozatosan nehezednek.`
      : lang === "ro"
        ? `${name} exersează ${focus} printr-un ${mechanic.name} adaptat dispozitivelor mobile. Sarcinile rămân la nivelul pentru ${grades} și devin treptat mai dificile în cinci etape.`
        : `${name} develops ${focus} through a mobile-friendly ${mechanic.name}. Tasks stay within the curriculum for ${grades} and become gradually more demanding across five levels.`;
  const outcomes = lang === "de"
    ? [focus, "fachliche Hinweise vergleichen und begründet entscheiden", "den eigenen Fortschritt über fünf Schwierigkeitsstufen festigen"]
    : lang === "hu"
      ? [focus, "szakmai nyomok összehasonlítása és indokolt döntések meghozása", "a tudás megszilárdítása öt nehézségi szinten"]
      : lang === "ro"
        ? [focus, "compararea indiciilor și luarea deciziilor argumentate", "consolidarea progresului în cinci niveluri de dificultate"]
        : [focus, "compare subject clues and make reasoned decisions", "consolidate progress across five difficulty levels"];
  const url = visualLabGameUrl(lang, subjectEntry.id, gameEntry.id);
  return {
    lang, subjectId: subjectEntry.id, gameId: gameEntry.id, key: gameEntry.key,
    url, canonical: `https://plizio.com${url}`, name, subjectName, title, description,
    intro, gradeText: grades, mechanicName: mechanic.name[lang],
    mechanicDescription: mechanic.description[lang], learningOutcomes: outcomes,
    skillIds: gameEntry.skillIds, grades: gameEntry.grades, levelCount: 5,
    isAccessibleForFree: true,
  };
}

export function getVisualLabStaticParams(): Array<{ lang: VisualLabSeoLang; subjectId: VisualLabSeoSubjectId; subjectSlug: string; gameId: string }> {
  return VISUAL_LAB_SEO_SUBJECTS.flatMap((subjectEntry) =>
    subjectEntry.locales.flatMap((lang) => subjectEntry.games.map((entry) => ({ lang, subjectId: subjectEntry.id, subjectSlug: subjectEntry.slug[lang], gameId: entry.id }))),
  );
}

export function getLocalizedSubjectGames(subjectId: string, lang: VisualLabSeoLang): LocalizedVisualLabGameContent[] {
  const subjectEntry = getSubject(subjectId);
  if (!subjectEntry || !subjectEntry.locales.includes(lang)) return [];
  return subjectEntry.games.map((entry) => getLocalizedGameContent(subjectEntry.id, entry.id, lang)).filter((entry): entry is LocalizedVisualLabGameContent => Boolean(entry));
}
