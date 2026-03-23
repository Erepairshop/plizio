// ─── PHYSICS GENERATORS K7: EARTH & SPACE ────────────────────────────────
// "Erde & Weltall" theme — gravity, solar system, orbits, seasons, space exploration
// Grade 7 (13-14 years old)
//
// Generates ~32-35 MCQ + 8 Typing questions per subtopic using seeded PRNG
// F = GMm/r², Kepler's laws, orbital mechanics, tides

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumMCQ {
  const options = [...wrong, correct];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return {
    type: "mcq",
    question,
    options,
    correctAnswer: correct,
    theme: topic,
    subtopic,
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answers: string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer: answers[0],
  };
}

// ─── UNIVERSAL GRAVITATION (F = GMm/r²) ──────────────────────────────────

function generateGravityMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "gravity_universal", q4("Newtons Gravitationsgesetz?", "Newton's law of gravitation?", "Newton gravitációs törvénye?", "Legea gravitației Newton?", lang),
      q4("F = G × (M × m) / r²; G=6.674×10⁻¹¹ N·m²/kg²", "F = G × (M × m) / r²; G=6.674×10⁻¹¹ N·m²/kg²", "F = G × (M × m) / r²; G=6.674×10⁻¹¹ N·m²/kg²", "F = G × (M × m) / r²; G=6.674×10⁻¹¹ N·m²/kg²", lang),
      [q4("F = G × M / r", "F = G × M / r", "F = G × M / r", "F = G × M / r", lang), q4("F = m × r²", "F = m × r²", "F = m × r²", "F = m × r²", lang), q4("F = g × h", "F = g × h", "F = g × h", "F = g × h", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "gravity_universal", q4("Gravitationskonstante G?", "Gravitational constant G?", "Gravitációs állandó G?", "Constantă gravitațională G?", lang),
      q4("G = 6.674 × 10⁻¹¹ N·m²/kg²; universell für alle Massen", "G = 6.674 × 10⁻¹¹ N·m²/kg²; universal for all masses", "G = 6.674 × 10⁻¹¹ N·m²/kg²; univerzális minden tömeghez", "G = 6.674 × 10⁻¹¹ N·m²/kg²; universal pentru toate masele", lang),
      [q4("G ≈ 9.81 m/s²", "G ≈ 9.81 m/s²", "G ≈ 9,81 m/s²", "G ≈ 9,81 m/s²", lang), q4("G = 3×10⁸ m/s", "G = 3×10⁸ m/s", "G = 3×10⁸ m/s", "G = 3×10⁸ m/s", lang), q4("G = 1 N/kg", "G = 1 N/kg", "G = 1 N/kg", "G = 1 N/kg", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "gravity_universal", q4("Schwerkraft vs Gewicht?", "Gravity vs weight?", "Gravitáció vs súly?", "Gravitație vs greutate?", lang),
      q4("Gravitationskraft F = GMm/r² (universell); Gewicht W = m×g (lokal auf Erde)", "Gravitational force F = GMm/r² (universal); weight W = m×g (local on Earth)", "Gravitációs erő F = GMm/r² (univerzális); súly W = m×g (helyi a Földön)", "Forță gravitațională F = GMm/r² (universală); greutate W = m×g (locală pe Pământ)", lang),
      [q4("Gleich", "Same", "Ugyanaz", "Același", lang), q4("Gravitatie nur im Weltall", "Gravity only in space", "Gravitáció csak az űrben", "Gravitație doar în spațiu", lang), q4("Gewicht konservativ", "Weight conservative", "Súly konzervatív", "Greutate conservativă", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("earth_space", "gravity_universal", q4("Gravitationskraft proportional zu 1/r²?", "Gravitational force proportional to 1/r²?", "Gravitációs erő arányos 1/r²-tel?", "Forță gravitațională proporțională cu 1/r²?", lang),
      q4("Ja; Verdopplung r → 1/4 Kraft; Verdreifachung r → 1/9 Kraft", "Yes; doubling r → 1/4 force; tripling r → 1/9 force", "Igen; r megduplázása → 1/4 erő; r megharmadása → 1/9 erő", "Da; dublare r → 1/4 forță; triplu r → 1/9 forță", lang),
      [q4("Nein, 1/r", "No, 1/r", "Nem, 1/r", "Nu, 1/r", lang), q4("Nein, r", "No, r", "Nem, r", "Nu, r", lang), q4("Nein, konstant", "No, constant", "Nem, állandó", "Nu, constant", lang)], rng));
  }

  return questions;
}

function generateGravityTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("earth_space", "gravity_universal", q4("Unterschied Masse × Gewicht?", "Difference mass × weight?", "Különbség tömeg × súly?", "Diferență masă × greutate?", lang),
      [q4("Massa = Stoffmenge [kg] (invariant überall); Gewicht = m×g [N] (lokal, variiert mit g)", "Mass = amount of matter [kg] (invariant everywhere); weight = m×g [N] (local, varies with g)", "Tömeg = anyagmennyiség [kg] (invariáns mindenhol); súly = m×g [N] (helyi, g-vel változik)", "Masă = cantitate materie [kg] (invariantă pretutindeni); greutate = m×g [N] (locală, variază cu g)", lang)]),
    createTyping("earth_space", "gravity_universal", q4("Gravitationsfeldstärke g?", "Gravitational field strength g?", "Gravitációs térerősség g?", "Intensitate câmp gravitațional g?", lang),
      [q4("g = GM/r²; lokal auf Erde g≈9.81 m/s²; auf Mond g≈1.62 m/s²", "g = GM/r²; locally on Earth g≈9.81 m/s²; on Moon g≈1.62 m/s²", "g = GM/r²; helyileg a Földön g≈9,81 m/s²; a Holdon g≈1,62 m/s²", "g = GM/r²; local pe Pământ g≈9,81 m/s²; pe Lună g≈1,62 m/s²", lang)]),
  ];
}

// ─── SOLAR SYSTEM ─────────────────────────────────────────────────────────

function generateSolarSystemMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "solar_system", q4("Sonnensystem Struktur?", "Solar system structure?", "Naprendszer szerkezete?", "Structura sistemului solar?", lang),
      q4("Sonne (Zentrum) → Planeten, Asteroiden, Kometen in Umlaufbahnen", "Sun (center) → planets, asteroids, comets in orbits", "Nap (közép) → bolygók, aszteroidák, üstökösök pályákon", "Soare (centru) → planete, asteroizi, comete în orbite", lang),
      [q4("Nur Planeten", "Only planets", "Csak bolygók", "Doar planete", lang), q4("Sonne nur am Rand", "Sun only at edge", "Nap csak a szélén", "Soare doar la margine", lang), q4("Keine asteroidák", "No asteroids", "Nincsenek aszteroidák", "Fără asteroizi", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const planet = pick([
      { q: q4("Quecksilber (Mercury)?", "Mercury?", "Higany?", "Mercur?", lang), a: q4("Kleine, heiß, nah bei Sonne, keine Monde", "Small, hot, close to Sun, no moons", "Kicsi, forró, közel a Naphoz, nincs hold", "Mic, cald, aproape de Soare, fără luni", lang) },
      { q: q4("Venus?", "Venus?", "Vénusz?", "Venus?", lang), a: q4("Größte Atmosphäre, heiß, rückläufig rotiert", "Thick atmosphere, hot, rotates backwards", "Vastag légkör, forró, visszafelé forog", "Atmosferă deasă, cald, se rotește invers", lang) },
      { q: q4("Mars (Rote Planet)?", "Mars (Red planet)?", "Mars (Vörös bolygó)?", "Marte (Planeta roșie)?", lang), a: q4("Viel Eisen Oxid, 2 Monde (Phobos, Deimos), Wasserspuren", "Iron oxide, 2 moons (Phobos, Deimos), water traces", "Vasoxid, 2 hold (Phobos, Deimos), víz nyomok", "Oxid fier, 2 luni (Phobos, Deimos), urme apă", lang) },
    ], rng);
    questions.push(createMCQ("earth_space", "solar_system", planet.q, planet.a, [q4("Nur Eis", "Only ice", "Csak jég", "Doar gheață", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("earth_space", "solar_system", q4("Planeten-Reihenfolge von Sonne?", "Planet order from Sun?", "Bolygók sorrendje a Naptól?", "Ordinea planete de la Soare?", lang),
      q4("Merkur, Venus, Erde, Mars, (Asteroid Belt), Jupiter, Saturn, Uranus, Neptun", "Mercury, Venus, Earth, Mars, (Asteroid Belt), Jupiter, Saturn, Uranus, Neptune", "Higany, Vénusz, Föld, Mars, (Aszteroidöv), Jupiter, Szaturnusz, Uránusz, Neptunusz", "Mercur, Venus, Pământ, Marte, (Centura asteroizi), Jupiter, Saturn, Uranus, Neptun", lang),
      [q4("Mars, Erde, Venus", "Mars, Earth, Venus", "Mars, Föld, Vénusz", "Marte, Pământ, Venus", lang), q4("Keine Asteroiden", "No asteroids", "Nincs aszteroidöv", "Fără asteroizi", lang), q4("Nur Gasriesen", "Only gas giants", "Csak gázóriások", "Doar giganți de gaz", lang)], rng));
  }

  return questions;
}

function generateSolarSystemTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("earth_space", "solar_system", q4("Terrestrische vs Gasriesen?", "Terrestrial vs gas giants?", "Szárazföldi vs gázóriások?", "Terestru vs giganți gaz?", lang),
      [q4("Terrestrisch (Merkur, Venus, Erde, Mars): kleine, dicht, Gestein; Gasriesen (Jupiter, Saturn, Uranus, Neptun): groß, Gase/Flüssigkeiten", "Terrestrial (Mercury, Venus, Earth, Mars): small, dense, rock; Gas giants (Jupiter, Saturn, Uranus, Neptune): large, gases/liquids", "Szárazföldi (Higany, Vénusz, Föld, Mars): kis, sűrű, kőzet; Gázóriások (Jupiter, Szaturnusz, Uránusz, Neptunusz): nagy, gázok/folyadékok", "Terestru (Mercur, Venus, Pământ, Marte): mici, dense, roci; Giganți gaz (Jupiter, Saturn, Uranus, Neptun): mari, gaze/lichide", lang)]),
  ];
}

// ─── ORBITS & KEPLER'S LAWS ──────────────────────────────────────────────

function generateOrbitsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "orbits", q4("Keplers 1. Gesetz?", "Kepler's 1st law?", "Kepler 1. törvénye?", "Legea 1 Kepler?", lang),
      q4("Planeten bewegen sich in elliptischen Bahnen; Sonne in einem Brennpunkt", "Planets move in elliptical orbits; Sun at one focus", "Bolygók elliptikus pályákon mozognak; Nap az egyik fókuszban", "Planetele se mișcă în orbite eliptice; Soare la un focar", lang),
      [q4("Kreisbahn um Sonne", "Circular orbit around Sun", "Körkörös pálya a Nap körül", "Orbită circulară în jurul Soarelui", lang), q4("Ellipse mit Sonne zentral", "Ellipse with Sun central", "Ellipszis Nappal a központban", "Elipsă cu Soare central", lang), q4("Parabolische Fluchtbahn", "Parabolic escape orbit", "Parabolikus szökési pálya", "Orbită parabolică de evadare", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "orbits", q4("Keplers 2. Gesetz?", "Kepler's 2nd law?", "Kepler 2. törvénye?", "Legea 2 Kepler?", lang),
      q4("Flächensatz: gleiche Flächen in gleicher Zeit → schneller in Perihel, langsamer in Aphel", "Equal areas in equal times → faster at perihelion, slower at aphelion", "Felületi sebesség: egyenlő területek egyenlő időben → gyorsabb perihelionban, lassabb aphelionban", "Viteză areolară: arii egale în timpi egali → mai rapid la periheliu, mai lent la afeliu", lang),
      [q4("Konstante Geschwindigkeit", "Constant velocity", "Állandó sebesség", "Viteză constantă", lang), q4("Keine Sonnennähe-effekt", "No Sun proximity effect", "Nincs Nap közelség hatás", "Fără efect proximitate Soare", lang), q4("Lineare Bewegung", "Linear motion", "Lineáris mozgás", "Mișcare liniară", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("earth_space", "orbits", q4("Umlaufzeit vs Bahnradius (Keplers 3. Gesetz)?", "Orbital period vs radius (Kepler's 3rd)?", "Keringési idő vs pálya sugara (Kepler 3)?", "Perioada orbitală vs rază (Kepler 3)?", lang),
      q4("T² ∝ a³; Quadrat der Umlaufzeit proportional zum Kubus der Halbachse", "T² ∝ a³; square of period proportional to cube of semi-major axis", "T² ∝ a³; az időszak négyzete arányos a féltengely kockájával", "T² ∝ a³; pătratul perioadei proporțional cu cub semiaxă majoră", lang),
      [q4("T ∝ a", "T ∝ a", "T ∝ a", "T ∝ a", lang), q4("T ∝ √a", "T ∝ √a", "T ∝ √a", "T ∝ √a", lang), q4("T ∝ a²", "T ∝ a²", "T ∝ a²", "T ∝ a²", lang)], rng));
  }

  return questions;
}

function generateOrbitsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("earth_space", "orbits", q4("Perihelion vs Aphelion?", "Perihelion vs aphelion?", "Perihelion vs aphelion?", "Periheliu vs afeliu?", lang),
      [q4("Perihelion = nächster Punkt zur Sonne (schneller); Aphelion = farthest point (slower)", "Perihelion = closest to Sun (faster); aphelion = farthest (slower)", "Perihelion = legközelebb a Naphoz (gyorsabb); aphelion = legtávolabbi (lassabb)", "Periheliu = cea mai apropiată de Soare (mai rapid); afeliu = cea mai depărtată (mai lent)", lang)]),
    createTyping("earth_space", "orbits", q4("Orbitalgeschwindigkeit?", "Orbital velocity?", "Keringési sebesség?", "Viteză orbitală?", lang),
      [q4("v = √(GM/r); nagyobb G,M → gyorsabb; nagyobb r → lassabb", "v = √(GM/r); larger G,M → faster; larger r → slower", "v = √(GM/r); größer G,M → schneller; größer r → langsamer", "v = √(GM/r); mai mare G,M → mai rapid; mai mare r → mai lent", lang)]),
  ];
}

// ─── SEASONS & TIDES ──────────────────────────────────────────────────────

function generateSeasonsTidesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "seasons_tides", q4("Jahreszeiten: Ursache?", "Seasons: cause?", "Évszakok: oka?", "Anotimpuri: cauză?", lang),
      q4("Erdachse Neigung 23.5° → unterschiedliche Sonneneinstrahlung während Umlauf", "Earth's axial tilt 23.5° → different solar radiation during orbit", "Föld tengelyferdültsége 23,5° → különböző napsugárzás keringés alatt", "Înclinație axă Pământ 23,5° → radiație solară diferită în orbita", lang),
      [q4("Exzentrizität der Umlaufbahn", "Orbital eccentricity", "A pálya excentricitása", "Excentricitatea orbitei", lang), q4("Nur Entfernung von Sonne", "Only distance from Sun", "Csak a Nap távolsága", "Doar distanța de la Soare", lang), q4("Mondphase-abhängig", "Moon phase dependent", "Hold fázis függő", "Depinde de faza Lunii", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "seasons_tides", q4("Sommer auf N-Halbkugel?", "Northern hemisphere summer?", "Nyár az északi féltekén?", "Vară pe emisfera nord?", lang),
      q4("Juni-Sommer: Achse kippt zur Sonne, mehr direktes Licht, längere Tage", "June summer: axis tilts toward Sun, more direct light, longer days", "Június-nyár: tengely a Nap felé dől, több közvetlen fény, hosszabb napok", "Iunie vară: axă se-nclinează către Soare, mai mult lumină directă, zile mai lungi", lang),
      [q4("Erde nächster Sonne", "Earth closest to Sun", "Föld legközelebb a Naphoz", "Pământ cel mai aproape de Soare", lang), q4("Sonne über Äquator", "Sun over equator", "Nap az Egyenlítő fölött", "Soare deasupra ecuatorului", lang), q4("Mondgravitation maximal", "Moon gravity max", "Hold gravitáció max", "Gravitație Lună max", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("earth_space", "seasons_tides", q4("Gezeitenvariation (Tides)?", "Tidal variation?", "Árapály-változatok?", "Variație maree?", lang),
      q4("Mondgravitation zieht Wasser → Springflut (Vollmond, Neumond), Nippflut (Halbmond)", "Moon gravity pulls water → spring tides (full/new moon), neap tides (quarter moon)", "Hold gravitáció vizet húz → nagyholdas árapály (teljeshó, újhold), kicsi árapály (féldhold)", "Gravitație Lună trage apă → maree vii (plinăciune, lună nouă), maree moarte (sfert lună)", lang),
      [q4("Nur Sonne zieht", "Only Sun pulls", "Csak a Nap húz", "Doar Soarele trage", lang), q4("Gleichmäßig immer", "Always uniform", "Mindig egyenletes", "Întotdeauna uniform", lang), q4("Keine Mondeinfluss", "No Moon influence", "Nincs holdhatás", "Fără influență Lună", lang)], rng));
  }

  return questions;
}

function generateSeasonsTidesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("earth_space", "seasons_tides", q4("Tag & Nacht Definition?", "Day & night definition?", "Nap és éj definíciója?", "Ziua și noaptea definiție?", lang),
      [q4("Dag = Seite der Erde der Sonne zugewandt (12h durchschnittlich); Nacht = entgegen gewendet", "Day = side of Earth facing Sun (~12h average); night = opposite", "Nap = Föld Naphoz forduló oldala (~12h átlag); éjszaka = ellenkező", "Zi = latura Pământ către Soare (~12h medie); noapte = opus", lang)]),
  ];
}

// ─── SPACE EXPLORATION ────────────────────────────────────────────────────

function generateSpaceExplorationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("earth_space", "space_exploration", q4("Fluchtgeschwindigkeit Erde?", "Escape velocity Earth?", "Szökési sebesség Föld?", "Viteză evadare Pământ?", lang),
      q4("v_escape = √(2GM/r) ≈ 11.2 km/s; nötig um Gravitationsfeld zu verlassen", "v_escape = √(2GM/r) ≈ 11.2 km/s; needed to leave gravitational field", "v_escape = √(2GM/r) ≈ 11,2 km/s; szükséges a gravitációs mező elhagyásához", "v_escape = √(2GM/r) ≈ 11,2 km/s; necesar pentru a abandona câmpul gravitațional", lang),
      [q4("11.2 m/s", "11.2 m/s", "11,2 m/s", "11,2 m/s", lang), q4("11.2 mm/s", "11.2 mm/s", "11,2 mm/s", "11,2 mm/s", lang), q4("112 km/s", "112 km/s", "112 km/s", "112 km/s", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const mission = pick([
      { q: q4("Apollo-Mission?", "Apollo mission?", "Apollo misszió?", "Misiune Apollo?", lang), a: q4("1969-1972: Bemannt Mondlandung (Apollo 11 Neil Armstrong); 6 erfolgreiche Landungen", "1969-1972: manned moon landing (Apollo 11 Neil Armstrong); 6 successful landings", "1969-1972: emberi holdleszállás (Apollo 11 Neil Armstrong); 6 sikeres leszállás", "1969-1972: aterizare omului pe Lună (Apollo 11 Neil Armstrong); 6 aterizări reușite", lang) },
      { q: q4("ISS (International Space Station)?", "ISS?", "ISS (Nemzetközi Űrállomás)?", "ISS?", lang), a: q4("Seit 1998 in Umlaufbahn; kontinuierliche Besatzung ~400 km Höhe", "Since 1998 in orbit; continuous crew ~400 km altitude", "1998 óta pályán; folyamatos személyzet ~400 km magasság", "Din 1998 în orbită; echipaj continuu ~400 km altitudine", lang) },
      { q: q4("Mars-Rover?", "Mars rovers?", "Mars-kutatórobotok?", "Roboți Mars?", lang), a: q4("Curiosity, Perseverance: Roboter auf Mars durchsuchen Geologie, Wasser, Leben-Spuren", "Curiosity, Perseverance: robots on Mars exploring geology, water, life traces", "Curiosity, Perseverance: robotok a Marson felfedezik geológiát, vizet, élet nyomait", "Curiosity, Perseverance: roboți pe Marte explorând geologie, apă, urme viață", lang) },
    ], rng);
    questions.push(createMCQ("earth_space", "space_exploration", mission.q, mission.a, [q4("Nur theoretisch", "Only theoretical", "Csak elméleti", "Doar teoretic", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("earth_space", "space_exploration", q4("Satellit-Typen?", "Satellite types?", "Műholddok típusai?", "Tipuri sateliți?", lang),
      q4("Kommunikation, GPS, Wetter, Erdbeobachtung, Wissenschaft → verschiedene Orbits (GEO, LEO, MEO)", "Communication, GPS, weather, Earth observation, science → different orbits (GEO, LEO, MEO)", "Kommunikáció, GPS, időjárás, Föld-megfigyelés, tudomány → különböző pályák (GEO, LEO, MEO)", "Comunicație, GPS, vreme, observare Pământ, știință → orbite diferite (GEO, LEO, MEO)", lang),
      [q4("Nur Kommunikation", "Only communication", "Csak kommunikáció", "Doar comunicație", lang), q4("Nur GEO-Orbit", "Only GEO orbit", "Csak GEO-pálya", "Doar orbita GEO", lang), q4("Keine Unterschiede", "No differences", "Nincs különbség", "Fără diferențe", lang)], rng));
  }

  return questions;
}

function generateSpaceExplorationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("earth_space", "space_exploration", q4("Orbittypen: GEO vs LEO vs MEO?", "Orbit types: GEO vs LEO vs MEO?", "Pálya típusok: GEO vs LEO vs MEO?", "Tipuri orbite: GEO vs LEO vs MEO?", lang),
      [q4("GEO (Geostationär): 36000km, 24h Umlauf, Kommunikation; LEO (nah): 200-2000km, <2h Umlauf, ISS; MEO: 2000-36000km, GPS (20200km)", "GEO (geostationary): 36000km, 24h orbit, communication; LEO (low): 200-2000km, <2h orbit, ISS; MEO: 2000-36000km, GPS (20200km)", "GEO (geostacionárius): 36000km, 24h keringés, kommunikáció; LEO (alacsony): 200-2000km, <2h keringés, ISS; MEO: 2000-36000km, GPS", "GEO (geostaţionar): 36000km, orbită 24h, comunicare; LEO (joasă): 200-2000km, orbită <2h, ISS; MEO: 2000-36000km, GPS", lang)]),
  ];
}

// ─── EXPORT ───────────────────────────────────────────────────────────────

export const K7_EARTH_SPACE_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  gravity_universal: (lang = "en", seed = 0) => [...generateGravityMCQ(lang, seed), ...generateGravityTyping(lang, seed)],
  gravity_universal_mcq: (lang = "en", seed = 0) => generateGravityMCQ(lang, seed),
  gravity_universal_typing: (lang = "en", seed = 0) => generateGravityTyping(lang, seed),

  solar_system: (lang = "en", seed = 0) => [...generateSolarSystemMCQ(lang, seed), ...generateSolarSystemTyping(lang, seed)],
  solar_system_mcq: (lang = "en", seed = 0) => generateSolarSystemMCQ(lang, seed),
  solar_system_typing: (lang = "en", seed = 0) => generateSolarSystemTyping(lang, seed),

  orbits: (lang = "en", seed = 0) => [...generateOrbitsMCQ(lang, seed), ...generateOrbitsTyping(lang, seed)],
  orbits_mcq: (lang = "en", seed = 0) => generateOrbitsMCQ(lang, seed),
  orbits_typing: (lang = "en", seed = 0) => generateOrbitsTyping(lang, seed),

  seasons_tides: (lang = "en", seed = 0) => [...generateSeasonsTidesMCQ(lang, seed), ...generateSeasonsTidesTyping(lang, seed)],
  seasons_tides_mcq: (lang = "en", seed = 0) => generateSeasonsTidesMCQ(lang, seed),
  seasons_tides_typing: (lang = "en", seed = 0) => generateSeasonsTidesTyping(lang, seed),

  space_exploration: (lang = "en", seed = 0) => [...generateSpaceExplorationMCQ(lang, seed), ...generateSpaceExplorationTyping(lang, seed)],
  space_exploration_mcq: (lang = "en", seed = 0) => generateSpaceExplorationMCQ(lang, seed),
  space_exploration_typing: (lang = "en", seed = 0) => generateSpaceExplorationTyping(lang, seed),
};
