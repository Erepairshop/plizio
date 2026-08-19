// ─── PHYSICS GENERATORS K7: GRAVITY, SOLAR SYSTEM, AND SPACE ─────────────────
// "Gravitáció, Naprendszer és Űr" theme — Universal gravity, orbits, seasons, exploration
// Grade 7 (13-14 years old)
//
// Generates 32-35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// F = GMm/r², weight vs mass, g = 9.8 m/s²
// Kepler's laws, orbital mechanics, Earth's rotation/tilt

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

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

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumMCQ {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return {
    type: "mcq" as const,
    topic,
    subtopic,
    question,
    options,
    correct: options.indexOf(correct),
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing" as const,
    topic,
    subtopic,
    question,
    answer,
  };
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

// ─── UNIVERSAL GRAVITY ─────────────────────────────────────────────────────

function generateGravityMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Newtons Gesetz der Schwerkraft?", "Newton's Law of Gravity?", "Newton súlyosság törvénye?", "Legea gravitației Newton?", lang), q4("F = GMm/r²", "F = GMm/r²", "F = GMm/r²", "F = GMm/r²", lang), [q4("F = m·a", "F = m·a", "F = m·a", "F = m·a", lang), q4("F = k·q/r", "F = k·q/r", "F = k·q/r", "F = k·q/r", lang), q4("F = m·g·h", "F = m·g·h", "F = m·g·h", "F = m·g·h", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Gravitationskraft: Entfernung?", "Gravitational force: distance?", "Gravitációs erő: távolság?", "Forță gravitație: distanță?", lang), q4("Verhältnis zu 1/r²", "Proportional to 1/r²", "1/r² arányos", "Proporțional la 1/r²", lang), [q4("Verhältnis zu 1/r", "Proportional to 1/r", "1/r arányos", "Proporțional la 1/r", lang), q4("Anteil an r", "Proportional to r", "r arányos", "Proporțional la r", lang), q4("Konstant", "Constant", "Konstans", "Constant", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Masse vs Gewicht: Unterschied?", "Mass vs Weight: difference?", "Tömeg vs Súly: különbség?", "Masă vs Greutate: diferență?", lang), q4("Masse: kg (Materie), Gewicht: N (Kraft)", "Mass: kg (matter), Weight: N (force)", "Tömeg: kg (anyag), Súly: N (erő)", "Masă: kg (materie), Greutate: N (forță)", lang), [q4("Dieselbe Sache.", "Same thing", "Azonos dolog", "Același lucru", lang), q4("Nur Masse Erde", "Mass only Earth", "Tömeg csak Föld", "Masă doar Pământ", lang), q4("Gewicht immer konstant", "Weight always constant", "Súly mindig konstans", "Greutate mereu constantă", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("g Wert Erdoberfläche?", "g value Earth surface?", "g értéke Föld?", "Valoare g Pământ?", lang), q4("9.8 m/s² ≈ 10 m/s²", "9.8 m/s² ≈ 10 m/s²", "9,8 m/s² ≈ 10 m/s²", "9,8 m/s² ≈ 10 m/s²", lang), [q4("3.8 m/s²", "3.8 m/s²", "3,8 m/s²", "3,8 m/s²", lang), q4("20 m/s²", "20 m/s²", "20 m/s²", "20 m/s²", lang), q4("100 m/s²", "100 m/s²", "100 m/s²", "100 m/s²", lang)], rng));
  }
  return questions;
}

function generateGravityTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "gravity_universal", q4("F = GMm/r² Komponensek?", "F = GMm/r² components?", "F = GMm/r² komponensek?", "F = GMm/r² componente?", lang), [q4("G=gravitational Konstante, M=larger Masse, m=smaller, r=distance", "G=gravitational constant, M=larger mass, m=smaller, r=distance", "G=gravitációs állandó, M=nagyobb tömeg, m=kisebb, r=távolság", "G=constantă gravitație, M=masă mai mare, m=mai mică, r=distanță", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Gewicht F = m·g Beispiel 50kg Erde?", "Weight F = m·g example 50kg Earth?", "Súly F = m·g 50kg Föld?", "Greutate F = m·g 50kg Pământ?", lang), [q4("F = 50 × 9.8 = 490 N", "F = 50 × 9.8 = 490 N", "F = 50 × 9,8 = 490 N", "F = 50 × 9,8 = 490 N", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Erhöhung der Höhe: g nimmt ab?", "Height increase: g decreases?", "Magasság növ: g csökken?", "Înălțime crește: g scade?", lang), [q4("Ja, g ~ 1/r² durch Entfernung, höher = weiter = niedriger g", "Yes, g ~ 1/r² by distance, higher = farther = lower g", "Igen, g ~ 1/r² szerint, magasabb = messzebb = alacsonyabb g", "Da, g ~ 1/r² după distanță, mai sus = mai departe = g mai mic", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Mond g Wert?", "Moon g value?", "Hold g értéke?", "Valoare g Lună?", lang), [q4("≈ 1.6 m/s² (≈ 1/6 Erde g)", "≈ 1.6 m/s² (≈ 1/6 Earth g)", "≈ 1,6 m/s² (≈ 1/6 Föld g)", "≈ 1,6 m/s² (≈ 1/6 g Pământ)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Doppelte Entfernung: F = ?", "Double distance: F = ?", "Kétszeres távolság: F = ?", "Dublu distanță: F = ?", lang), [q4("1/4 ursprüngliche Kraft (durch r²)", "1/4 original force (due to r²)", "1/4 az eredeti erő (r² miatt)", "1/4 forța originală (din cauza r²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Gewicht Mond 50kg?", "Weight Moon 50kg?", "Súly Holdon 50kg?", "Greutate Lună 50kg?", lang), [q4("F = 50 × 1.6 = 80 N (≈ 1/6 Erdgewicht)", "F = 50 × 1.6 = 80 N (≈ 1/6 Earth weight)", "F = 50 × 1,6 = 80 N (≈ 1/6 Föld súly)", "F = 50 × 1,6 = 80 N (≈ 1/6 greutate Pământ)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Schwerkraft: attraktiv oder abstoßend?", "Gravity: attractive or repulsive?", "Gravitáció: vonzó?", "Gravitație: atractivă?", lang), [q4("Immer attraktiv (zwischen den Massen)", "Always attractive (between masses)", "Mindig vonzó (2 tömeg között)", "Mereu atractivă (între mase)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("G Gravitationskonstante Einheit?", "G gravitational constant unit?", "G állandó egysége?", "Unitate constantă G?", lang), [q4("N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Schwerkraftbereich?", "Gravity range?", "Gravitáció hatótáv?", "Rază gravitație?", lang), [q4("Unendlich (aber sinkt durch 1/r²))", "Infinite (but decreases by 1/r²)", "Végtelen (de csökken 1/r²-tel)", "Infinită (dar scade cu 1/r²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Äquator gegen Pol: g?", "Equator vs Pole: g?", "Egyenlítő vs Pólus: g?", "Ecuator vs Pol: g?", lang), [q4("Pol größer (Erde oblate, Pol näher an der Mitte)", "Pole greater (Earth oblate, pole closer to center)", "Póluson nagyobb (Föld lapított, pólus közelebb középponthoz)", "Pol mai mare (Pământ ovat, pol mai aproape de centru)", lang)]),
  ];
}

// ─── SOLAR SYSTEM ──────────────────────────────────────────────────────────

function generateSolarSystemMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Naprendszer központja?", "Solar System center?", "Naprendszer középpontja?", "Centrul Sistemului Solar?", lang), q4("Sonne", "Sun", "Nap", "Soarele", lang), [q4("Erde", "Earth", "Föld", "Pământul", lang), q4("Mond", "Moon", "Hold", "Luna", lang), q4("Venus", "Venus", "Vénusz", "Venus", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Ordnung der Planeten (von der Sonne)?", "Planets order (from Sun)?", "Bolygók sorrendje?", "Ordinea planete?", lang), q4("Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun", "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", "Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz", "Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus, Neptun", lang), [q4("Merkur, Erde, Venus, Mars...", "Mercury, Earth, Venus, Mars...", "Merkúr, Föld, Vénusz, Mars...", "Mercur, Pământ, Venus, Marte...", lang), q4("Venus, Merkur, Erde...", "Venus, Mercury, Earth...", "Vénusz, Merkúr, Föld...", "Venus, Mercur, Pământ...", lang), q4("Jupiter zuerst", "Jupiter first", "Jupiter első", "Jupiter primul", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Erdtyp?", "Earth type?", "Föld típusa?", "Tip Pământ?", lang), q4("Rocky Planet (fest)", "Rocky planet (solid)", "Kőzetbolygó (szilárd)", "Planetă stâncoasă (solidă)", lang), [q4("Gasplanet", "Gas planet", "Gázbolygó", "Planetă gazoasă", lang), q4("Eisplanet", "Ice planet", "Jégbolygó", "Planetă de gheață", lang), q4("Zentrum des Sonnensystems", "Solar System center", "Naprendszer központja", "Centrul Sistemului Solar", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Jupiter & Saturn: Gasriesen?", "Jupiter & Saturn: gas giants?", "Jupiter & Saturnus: gáz?", "Jupiter & Saturn: gaz?", lang), q4("Ja, Gasriesen (keine feste Oberfläche)", "Yes, gas giants (no solid surface)", "Igen, gázbolygók (nincs szilárd felszín)", "Da, giganți de gaz (fără suprafață solidă)", lang), [q4("Nein, felsige Planeten", "No, rocky planets", "Nem, kőzetbolygók", "Nu, planete stâncoase", lang), q4("Nur Jupiter", "Only Jupiter", "Csak Jupiter", "Doar Jupiter", lang), q4("Sterne", "Stars", "Csillagok", "Stele", lang)], rng));
  }
  return questions;
}

function generateSolarSystemTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "solar_system", q4("Sonnensystem: Wie viele Planeten?", "Solar System: how many planets?", "Naprendszer: hány bolygó?", "Sistem solar: câte planete?", lang), [q4("8 (Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun)", "8 (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)", "8 (Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz)", "8 (Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus, Neptun)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Pluto: Planet oder Zwerg?", "Pluto: planet or dwarf?", "Plútó: bolygó vagy törpe?", "Pluto: planetă sau pitic?", lang), [q4("Zwergplanet (offiziell seit 2006))", "Dwarf planet (officially since 2006)", "Törpebolygó (2006 óta hivatalosan)", "Planetă pitică (oficial din 2006)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Erde und Jupiter: Entfernung?", "Earth and Jupiter: distance?", "Föld-Jupiter: távolság?", "Pământ-Jupiter: distanță?", lang), [q4("≈ 600 Millionen km (variabel, orbital)", "≈ 600 million km (variable, orbital)", "≈ 600 millió km (variábilis)", "≈ 600 milioane km (variabilă)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Kuiper Belt: Was?", "Kuiper Belt: what?", "Kuiper-öv: mi van?", "Centură Kuiper: ce?", lang), [q4("Eisige Körper und Zwergplaneten (z.B. Pluto, Eris)", "Icy bodies and dwarf planets (e.g. Pluto, Eris)", "Jégbolygók és törpebolygók (pl. Plútó)", "Corpuri glaciale și planete pitice (de ex. Pluto)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Asteroidengürtel: Ort?", "Asteroid Belt: location?", "Aszteroidapálya: hely?", "Centură asteroizi: locație?", lang), [q4("Zwischen Mars und Jupiter", "Between Mars and Jupiter", "Mars és Jupiter között", "Între Marte și Jupiter", lang)]),
    createTyping("gravity_space", "solar_system", q4("Sonnenkomposition?", "Sun composition?", "Nap összetétele?", "Compoziție Soare?", lang), [q4("Wasserstoff und Heliumplasma (Kernfusion geschieht im Kern)", "Hydrogen and helium plasma (nuclear fusion happens in the core)", "Hidrogén és hélium plazma (a fúzió a Nap magjában zajlik)", "Hidrogen și heliu în stare de plasmă (fuziunea nucleară are loc în nucleu)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Entfernung zwischen Erde und Sonne?", "Earth-Sun distance?", "Föld-Nap távolság?", "Distanță Pământ-Soare?", lang), [q4("≈ 150 Mio. km = 1 AU (Astronomische Einheit)", "≈ 150 million km = 1 AU (Astronomical Unit)", "≈ 150 millió km = 1 UA", "≈ 150 milioane km = 1 UA (Unitate Astronomică)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Venus: heißester Planet?", "Venus: hottest planet?", "Vénusz: legmelegebb?", "Venus: cea mai fierbinte?", lang), [q4("Ja (≈ 460°C), durch CO2 Gewächshaus", "Yes (≈ 460°C), due to CO2 greenhouse", "Igen (≈ 460°C), CO2 üvegház miatt", "Da (≈ 460°C), din cauza efectului de seră CO2", lang)]),
    createTyping("gravity_space", "solar_system", q4("Mars: Roter Planet? Warum?", "Mars: red planet? Why?", "Mars: vörös? Miért?", "Marte: roșu? De ce?", lang), [q4("Oberfläche von Eisenoxid (rusty)", "Iron oxide (rusty) surface", "Vas-oxid felszín", "Suprafață oxid fier (rozată)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Alter des Sonnensystems?", "Solar System age?", "Naprendszer kora?", "Vârstă Sistem Solar?", lang), [q4("≈ 4.6 Milliarden Jahre", "≈ 4.6 billion years", "≈ 4,6 milliárd év", "≈ 4,6 miliarde ani", lang)]),
  ];
}

// ─── ORBITS ────────────────────────────────────────────────────────────────

function generateOrbitalMechanicsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Keplers 1st-Gesetz?", "Kepler's 1st Law?", "Kepler 1. törvénye?", "Legea 1 Kepler?", lang), q4("Planeten umkreisen elliptisch", "Planets orbit elliptically", "Bolygók elliptikus pályán", "Planete orbitează eliptic", lang), [q4("Planeten kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreisförmig kreis", "Planets orbit circularly", "Bolygók körkörös pályán", "Planete orbitează circular", lang), q4("Planeten umkreisen parabolisch", "Planets orbit parabolically", "Bolygók parabolikus pályán", "Planete orbitează parabolic", lang), q4("Planeten umkreisen gerade", "Planets orbit straight", "Bolygók egyenes vonalon", "Planete orbitează în linie dreaptă", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Keplers 2nd-Gesetz?", "Kepler's 2nd Law?", "Kepler 2. törvénye?", "Legea 2 Kepler?", lang), q4("Gleiche Flächen in gleicher Zeit (areale Geschwindigkeit)", "Equal areas in equal time (areal velocity)", "Azonos terület söpörve", "Arii egale în timp egal", lang), [q4("Gleiche Geschwindigkeit", "Equal velocity", "Azonos sebesség", "Viteză egală", lang), q4("Gleiche Winkelgeschwindigkeit", "Equal angular velocity", "Azonos szögsebesség", "Viteză unghiulară egală", lang), q4("Gleichbeschleunigung", "Equal acceleration", "Azonos gyorsulás", "Accelerație egală", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Keplers 3rd-Gesetz?", "Kepler's 3rd Law?", "Kepler 3. törvénye?", "Legea 3 Kepler?", lang), q4("T² ~ a³ (Periode quadratisch ~ Halb-Hauptachse gewürfelt)", "T² ~ a³ (period squared ~ semi-major axis cubed)", "T² ~ a³ (periódus² ~ félnagytengely³)", "T² ~ a³ (perioada² ~ semi-axa majoră³)", lang), [q4("T ~ a", "T ~ a", "T ~ a", "T ~ a", lang), q4("T ~ a²", "T ~ a²", "T ~ a²", "T ~ a²", lang), q4("T ~ √a", "T ~ √a", "T ~ √a", "T ~ √a", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Orbitale Geschwindigkeit: Näher zur Sonne?", "Orbital velocity: closer to Sun?", "Pályasebesség: Naphoz közelebb?", "Viteza orbitală: mai aproape de Soare?", lang), q4("Höhere Geschwindigkeit (größer v)", "Higher velocity (greater v)", "Nagyobb sebesség", "Viteză mai mare", lang), [q4("Niedrigere Geschwindigkeit", "Lower velocity", "Kisebb sebesség", "Viteză mai mică", lang), q4("Gleiche Geschwindigkeit", "Same velocity", "Azonos sebesség", "Viteză aceeași", lang), q4("Nullgeschwindigkeit", "Zero velocity", "Nulla sebesség", "Viteză zero", lang)], rng));
  }
  return questions;
}

function generateOrbitalMechanicsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "orbits", q4("Kepler Gesetze: Schwerkraft?", "Kepler laws: gravity?", "Kepler törvények: gravitáció?", "Legile Kepler: gravitație?", lang), [q4("Kepler Gesetze folgen aus Newtons Gravitationsgesetz", "Kepler laws follow from Newton's gravity law", "Kepler törvények Newton törvényből következnek", "Legile Kepler urmează din legea gravitației Newton", lang)]),
    createTyping("gravity_space", "orbits", q4("Elliptische Umlaufbahn: Perihelion, Aphelion?", "Elliptical orbit: perihelion, aphelion?", "Elliptikus pálya: perihelion, aphelion?", "Orbită eliptică: perihelion, aphelion?", lang), [q4("Perihelion: am nächsten Sonne, Aphelion: am weitesten", "Perihelion: closest to Sun, aphelion: farthest", "Perihelion: legközelebb Naphoz, aphelion: legtávolabb", "Perihelion: cea mai aproape de Soare, aphelion: cea mai departe", lang)]),
    createTyping("gravity_space", "orbits", q4("Erd-Orbitalperiode?", "Earth orbital period?", "Föld pályaideje?", "Perioada orbitală Pământ?", lang), [q4("1 Jahr = Tage 365.25", "1 year = 365.25 days", "1 év = 365,25 nap", "1 an = 365,25 zile", lang)]),
    createTyping("gravity_space", "orbits", q4("Geostationäre Umlaufbahn?", "Geostationary orbit?", "Szinkronpálya (Föld)?", "Orbită geostaționară?", lang), [q4("Höhe ≈ 36000 km, Zeitraum = 24 Stunden (Überstand über derselben Stelle)", "Height ≈ 36000 km, period = 24 hrs (stays over same spot)", "Magasság ≈ 36000 km, periódus = 24 óra", "Înălțime ≈ 36000 km, perioada = 24 ore (rămâne deasupra aceluiași loc)", lang)]),
    createTyping("gravity_space", "orbits", q4("Orbitalgeschwindigkeit Formel: v = ?", "Orbital speed formula: v = ?", "Pályasebesség: v = ?", "Viteză orbitală: v = ?", lang), [q4("v = √(GM/r)", "v = √(GM/r)", "v = √(GM/r)", "v = √(GM/r)", lang)]),
    createTyping("gravity_space", "orbits", q4("Satellitenhöhe: Geschwindigkeitseffekt?", "Satellite height: speed effect?", "Szatellita magasság: sebesség?", "Înălțime satelit: efect viteză?", lang), [q4("Höhere = niedrigere Geschwindigkeit (v ~ 1/√r)", "Higher = lower speed (v ~ 1/√r)", "Magasabb = alacsonyabb sebesség", "Mai sus = viteză mai mică (v ~ 1/√r)", lang)]),
    createTyping("gravity_space", "orbits", q4("Zentripetalkraft: Orbit liefert?", "Centripetal force: orbit provides?", "Centripetális erő: pályán?", "Forță centripetă: orbită?", lang), [q4("Gravitationskraft (Sonnen- oder Planetenzug)", "Gravitational force (Sun or planet's pull)", "Gravitációs erő (Nap vagy bolygó vonzása)", "Forță gravitațională (atracția Soarelui sau planetei)", lang)]),
    createTyping("gravity_space", "orbits", q4("Jupitermond Io: Orbitalperiode?", "Jupiter moon Io: orbital period?", "Jupiter Hold Io: pályaideje?", "Luna Jupiter Io: perioadă orbitală?", lang), [q4("≈ 1.77 Tage", "≈ 1.77 days", "≈ 1,77 nap", "≈ 1,77 zile", lang)]),
    createTyping("gravity_space", "orbits", q4("Umlaufbahnzustand?", "Circular orbit condition?", "Körpálya feltétele?", "Condiție orbită circulară?", lang), [q4("v konstant, r konstant (orbitale Geschwindigkeit = Zentripetal Accel)", "v constant, r constant (orbital speed = centripetal accel.)", "v konstans, r konstans", "v constant, r constant (viteză orbitală = accelerație centripetă)", lang)]),
    createTyping("gravity_space", "orbits", q4("Kepler-Bewegung: Energieeinsparung?", "Kepler motion: energy conservation?", "Kepleri mozgás: energia?", "Mișcare Kepler: energie?", lang), [q4("Ja, E_total = Ek + Ep = Konstante (gebundene Umlaufbahnen)", "Yes, E_total = Ek + Ep = constant (bound orbits)", "Igen, E_total = Ek + Ep = konstans", "Da, E_total = Ek + Ep = constant (pentru orbite legate)", lang)]),
  ];
}

// ─── SEASONS AND TIDES ──────────────────────────────────────────────────────

function generateSeasonsTidesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Jahreszeiten verursacht durch?", "Seasons caused by?", "Évszakok oka?", "Cauza anotimpurilor?", lang), q4("Erdneigung (23.5°)", "Earth's tilt (23.5°)", "Föld tengely-tiltása (23,5°)", "Înclinarea axei Pământului (23,5°)", lang), [q4("Entfernung zwischen Erde und Sonne", "Earth-Sun distance", "Föld-Nap távolság", "Distanța Pământ-Soare", lang), q4("Helligkeit der Sonne", "Sun's brightness", "Nap fénye", "Strălucire Soare", lang), q4("Die Schwerkraft des Mondes", "Moon's gravity", "Hold gravitációja", "Gravitația Lunii", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Sommer Nord: Erde nahe/ferne Sonne?", "Summer Northern: Earth close/far Sun?", "Nyár Észak: Föld közel/távol?", "Vară Nord: Pământ aproape/departe?", lang), q4("Eigentlich weiter (aber geneigt)", "Actually farther (but tilted toward)", "Közel és félgömb felé fordított", "De fapt mai departe (dar înclinată către)", lang), [q4("Näher zur Sonne", "Closer to Sun", "Közel Naptól", "Mai aproape de Soare", lang), q4("Weit von der Sonne entfernt", "Farther from Sun", "Messze Naptól", "Mai departe de Soare", lang), q4("Gleicher Abstand", "Same distance", "Azonos távolság", "Aceeași distanță", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Tag/Nacht verursacht durch?", "Day/Night caused by?", "Nappal/éjszaka oka?", "Zi/noapte cauzată de?", lang), q4("Rotation der Erde (24 Stunden)", "Earth's rotation (24 hours)", "Föld forgása (24 óra)", "Rotația Pământului (24 ore)", lang), [q4("Die Revolution der Erde um die Sonne", "Earth's revolution around Sun", "Föld Nap körüli keringése", "Revoluția Pământului în jurul Soarelui", lang), q4("Entfernung des Mondes", "Moon's distance", "Hold távolsága", "Distanța Lunii", lang), q4("Sonnenwindwechsel", "Solar wind changes", "Nap-aktivitás", "Activitatea Soarelui", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Tides: Die Schwerkraft des Mondes?", "Tides: Moon's gravity?", "Apály-dagály: Hold?", "Maree: gravitația Lunii?", lang), q4("Ja, Mond zieht Meerwasser", "Yes, Moon pulls ocean water", "Igen, Hold húzza az óceánt", "Da, Luna trage apa oceanului", lang), [q4("Nein, Sonne verursacht", "No, Sun causes", "Nem, Nap okozza", "Nu, Soarele cauzează", lang), q4("Rotation der Erde", "Earth's rotation", "Föld forgása okozza", "Rotația Pământului cauzează", lang), q4("Windursachen", "Wind causes", "Szél okozza", "Vântul cauzează", lang)], rng));
  }
  return questions;
}

function generateSeasonsTidesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "seasons_tides", q4("Die Neigung der Erde: Winkel?", "Earth's tilt: angle?", "Föld tiltása: szög?", "Înclinare Pământ: unghi?", lang), [q4("23.5° aus ekliptischer Ebene", "23.5° from ecliptic plane", "23,5° az ekliptika síkjához", "23,5° de la planul eclipticii", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Equinox: Wann Erde?", "Equinox: when Earth?", "Napéj-egyenlőség: mikor?", "Echinocțiu: când Pământ?", lang), [q4("März 21 (vernal) & Sept 23 (autumnal)", "March 21 (vernal) & Sept 23 (autumnal)", "21 március & 23 szeptember", "21 martie & 23 septembrie", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Tag/Nacht-Länge: Sommer?", "Day/Night length: summer?", "Nappali hossz: nyár?", "Lungime zi/noapte: vară?", lang), [q4("Tag > Nacht (Nord: ~15-16 Stunden Tageslicht)", "Day > night (North: ~15-16 hrs daylight)", "Nappali > éjszaka (~15-16 óra)", "Zi > noapte (Nord: ~15-16 ore)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Flut: Nach dem Mond?", "High tide: after Moon?", "Dagály: után Hold?", "Maree înaltă: după Lună?", lang), [q4("~6 Stunden nach (Mondzug, Trägheit)", "~6 hours after (Moon's pull, inertia)", "~6 óra után (Hold vonzása)", "~6 ore după (atracția Lunii, inerție)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Tides pro Tag: wie viele?", "Tides per day: how many?", "Apály-dagály naponta?", "Maree pe zi: câte?", lang), [q4("2 hoch + 2 niedrig (etwa 6 Stundenzyklus)", "2 high + 2 low (about 6 hour cycle)", "2 dagály + 2 apály (~6 óra)", "2 maree înalte + 2 joase (~6 ore)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Frühlingsflut: Wann?", "Spring tide: when?", "Szökőár: mikor?", "Maree de vară: când?", lang), [q4("Neu & Vollmond, wenn Sonne-Erde-Mond ausgerichtet", "New & full moon when Sun-Earth-Moon aligned", "Újhold és telihold (egyenesezés)", "Lună nouă și plin când Sun-Earth-Moon aliniate", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Neap Gezeiten: Wann?", "Neap tide: when?", "Halványár: mikor?", "Maree de moarte: când?", lang), [q4("Halbmond, wenn Sonne-Erde-Mond rechter Winkel", "Half moon when Sun-Earth-Moon right angle", "Félhold (derékszög)", "Lună jumătate când Sun-Earth-Moon unghi drept", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Sommer/Wintersonnenwende: Datum?", "Summer/Winter solstice: date?", "Nyárkezdete/télkezdete: dátum?", "Solstițiu vară/iarnă: dată?", lang), [q4("Juni 21 (Sommer-N) & Dez 21 (Winter-N)", "June 21 (summer-N) & Dec 21 (winter-N)", "21 június & 21 december", "21 iunie & 21 decembrie", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Tageslänge (sidereal vs. solar)?", "Day length (sidereal vs solar)?", "Nappali hossz (sziderikus vs nap)?", "Lungime zi (siderală vs solară)?", lang), [q4("Sziderikus: 23h 56m 4s (csillagokhoz); napnapi: 24h (Naphoz)", "Sidereal: 23h 56m 4s (stars); solar: 24h (Sun)", "Sziderikus: 23h 56m 4s; napnapi: 24h", "Siderală: 23h 56m 4s (stele); solară: 24h (Soare)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Die Umlaufbahnform der Erde?", "Earth's orbit shape?", "Föld pályájának alakja?", "Forma orbită Pământ?", lang), [q4("Sehr leichte Ellipse (Äkzentrizität ≈ 0.017, fast kreisförmig)", "Very slight ellipse (eccentricity ≈ 0.017, nearly circular)", "Nagyon enyhe ellipszis (e ≈ 0,017)", "Elipsă foarte ușoară (excentricitate ≈ 0,017, aproape cerc)", lang)]),
  ];
}

// ─── SPACE EXPLORATION ──────────────────────────────────────────────────────

function generateSpaceExplorationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Raketenantrieb: Newton 3rd Gesetz?", "Rocket propulsion: Newton 3rd Law?", "Rakéta: Newton 3. törvénye?", "Propulsie rachetă: Legea 3 Newton?", lang), q4("Abgeleitetes Gas nach unten, Rakete nach oben", "Expelled gas downward, rocket upward", "Kiürített gáz lefelé, rakéta felfelé", "Gaz expulzat în jos, rachetă în sus", lang), [q4("Verbrennungen von Brennstoffen, freigesetzte Energie", "Fuel burns, energy released", "Tüzelőanyag ég", "Combustibil arde, energie eliberată", lang), q4("Luftreibung", "Air friction", "Légköri súrlódás", "Frecare aerodinamică", lang), q4("Schwerkraft zieht nach unten", "Gravity pulls down", "Gravitáció lefelé", "Gravitația trage în jos", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Fluchtgeschwindigkeit: Erde?", "Escape velocity: Earth?", "Szökési sebesség: Föld?", "Viteza de evadare: Pământ?", lang), q4("≈ 11.2 km/s", "≈ 11.2 km/s", "≈ 11,2 km/s", "≈ 11,2 km/s", lang), [q4("≈ 8 km/s", "≈ 8 km/s", "≈ 8 km/s", "≈ 8 km/s", lang), q4("≈ 5 km/s", "≈ 5 km/s", "≈ 5 km/s", "≈ 5 km/s", lang), q4("≈ 20 km/s", "≈ 20 km/s", "≈ 20 km/s", "≈ 20 km/s", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Orbitalgeschwindigkeit (LEO): Erde?", "Orbital velocity (LEO): Earth?", "Pályasebesség (LEO): Föld?", "Viteză orbitală (LEO): Pământ?", lang), q4("≈ 7.8 km/s (h=200km)", "≈ 7.8 km/s (h=200km)", "≈ 7,8 km/s (h=200km)", "≈ 7,8 km/s (h=200km)", lang), [q4("≈ 11.2 km/s", "≈ 11.2 km/s", "≈ 11,2 km/s", "≈ 11,2 km/s", lang), q4("≈ 3 km/s", "≈ 3 km/s", "≈ 3 km/s", "≈ 3 km/s", lang), q4("≈ 30 km/s", "≈ 30 km/s", "≈ 30 km/s", "≈ 30 km/s", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Apollo-Missionen: Mondlandung?", "Apollo missions: Moon landing?", "Apollo: Hold leszállás?", "Apollo: aterizare pe Lună?", lang), q4("1969-1972: 6 Mondlandungen", "1969-1972: 6 moon landings", "1969-1972 között 6 leszállás", "1969-1972: 6 aterizări pe Lună", lang), [q4("Frühes 1960s", "Early 1960s", "1960-as évek korai", "Anii 1960 timpuriu", lang), q4("1980s", "1980s", "1980-as évek", "Anii 1980", lang), q4("2000s", "2000s", "2000-as évek", "Anii 2000", lang)], rng));
  }
  return questions;
}

function generateSpaceExplorationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "space_exploration", q4("Rocket: Newtons 3rd-Gesetz?", "Rocket: Newton's 3rd Law?", "Rakéta: Newton 3. törvénye?", "Rachetă: Legea 3 Newton?", lang), [q4("Aktion: Gas abstoßen; Reaktion: Rakete aufwärts (Equal/Opposit)", "Action: expel gas down; reaction: rocket up (equal/opposite)", "Akció: gáz lefelé; Reakció: rakéta felfelé", "Acțiune: gaz expulzat jos; reacție: rachetă sus (egal/opus)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Fluchtgeschwindigkeit: höhere Höhe?", "Escape velocity: higher altitude?", "Szökési sebesség: magasabban?", "Viteza evadare: mai sus?", lang), [q4("Csökken (v_esc = √(2GM/r), r nagyobb → v kisebb)", "Decreases (v_esc = √(2GM/r), larger r → lower v)", "Csökken (nagyobb magasság → alacsonyabb szökési seb.)", "Scade (înălțime mai mare → viteză evadare mai mică)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("ISS-Orbitalperiode?", "ISS orbital period?", "ISS: pályaideje?", "ISS: perioada orbitală?", lang), [q4("≈ 90 Minuten (~16 Umlaufbahnen pro Tag)", "≈ 90 minutes (~16 orbits per day)", "≈ 90 perc (16 kör naponta)", "≈ 90 minute (~16 orbite pe zi)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Mondmissionen: Hauptherausforderungen?", "Moon missions: main challenges?", "Holdmissziók: fő kihívások?", "Misiuni Lună: provocări principale?", lang), [q4("Fluchtgeschwindigkeit, Brennstoff, Strahlung, Mondgravitation (1/6 Erde)", "Escape velocity, fuel, radiation, Moon gravity (1/6 Earth)", "Szökési sebesség, üzemanyag, sugárzás, Hold gravitáció", "Viteza evadare, combustibil, radiație, gravitația Lunii (1/6 Pământ)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Marsutak: messze az ISS-nél?", "Mars missions: far from ISS?", "Mars-misszió: Föld-Mars?", "Misiuni Marte: Pământ-Marte?", lang), [q4("≈ 225 Mühle km näher, ≈ 401 Mühle km weiter", "≈ 225 mill km closest, ≈ 401 mill km farthest", "≈ 225-401 millió km (variábilis)", "≈ 225-401 milioane km (variabil)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Satellitentypen: Verwendung?", "Satellite types: uses?", "Szatellita típusok: használat?", "Tipuri satelit: utilizări?", lang), [q4("Geostationär (Wetter, TV), LEO (GPS, Bildgebung), wissenschaftlich (Hubble)", "Geostationary (weather, TV), LEO (GPS, imaging), scientific (Hubble)", "Geostacionárius, LEO, tudományos", "Geostaționară (vreme, TV), LEO (GPS, imagistică), științifică (Hubble)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Erster Satellit: Sputnik 1?", "First satellite: Sputnik 1?", "Első szatellita: Szputnyik?", "Primul satelit: Sputnik?", lang), [q4("Oktober 4, 1957, Sowjetisch, 83.6 kg", "Oct 4, 1957, Soviet, 83.6 kg", "1957 október 4, Szovjetunió", "4 octombrie 1957, Uniunea Sovietică, 83,6 kg", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Gravity Assist Manöver?", "Gravity assist maneuver?", "Gravitációs támogatás?", "Manevră asistență gravitațională?", lang), [q4("Sonde fliegt durch Planeten, seine Schwerkraft beschleunigt / slows Sonde", "Probe flies by planet, its gravity accelerates/slows probe", "Szonda bolygó mellett → gravitáció gyorsít", "Sonda zbor lângă planetă, gravitația ei accelerează/încetinește", lang)]),
    createTyping("gravity_space", "space_exploration", q4("SpaceX Falcon 9: wiederverwendbar?", "SpaceX Falcon 9: reusable?", "Falcon 9: újrahasznosítható?", "Falcon 9: refolosibil?", lang), [q4("Ja, erste Stufe Land und Wiederverwendung (Kostensenkung)", "Yes, first stage lands and reuses (cost reduction)", "Igen, első fokozat visszatér és landol", "Da, prima treaptă revine și aterizează (reducere costuri)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("NASA: gegründet?", "NASA: founded?", "NASA: alapítás?", "NASA: fondată?", lang), [q4("Juli 29, 1958 (Antwort an Sputnik)", "July 29, 1958 (response to Sputnik)", "1958 július 29", "29 iulie 1958 (răspuns la Sputnik)", lang)]),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K7_EARTH_SPACE_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  gravity_universal: (lang = "en", seed = 0) => [...generateGravityMCQ(lang, seed), ...generateGravityTyping(lang, seed)],
  gravity_universal_mcq: (lang = "en", seed = 0) => generateGravityMCQ(lang, seed),
  gravity_universal_typing: (lang = "en", seed = 0) => generateGravityTyping(lang, seed),

  solar_system: (lang = "en", seed = 0) => [...generateSolarSystemMCQ(lang, seed), ...generateSolarSystemTyping(lang, seed)],
  solar_system_mcq: (lang = "en", seed = 0) => generateSolarSystemMCQ(lang, seed),
  solar_system_typing: (lang = "en", seed = 0) => generateSolarSystemTyping(lang, seed),

  orbits: (lang = "en", seed = 0) => [...generateOrbitalMechanicsMCQ(lang, seed), ...generateOrbitalMechanicsTyping(lang, seed)],
  orbits_mcq: (lang = "en", seed = 0) => generateOrbitalMechanicsMCQ(lang, seed),
  orbits_typing: (lang = "en", seed = 0) => generateOrbitalMechanicsTyping(lang, seed),

  seasons_tides: (lang = "en", seed = 0) => [...generateSeasonsTidesMCQ(lang, seed), ...generateSeasonsTidesTyping(lang, seed)],
  seasons_tides_mcq: (lang = "en", seed = 0) => generateSeasonsTidesMCQ(lang, seed),
  seasons_tides_typing: (lang = "en", seed = 0) => generateSeasonsTidesTyping(lang, seed),

  space_exploration: (lang = "en", seed = 0) => [...generateSpaceExplorationMCQ(lang, seed), ...generateSpaceExplorationTyping(lang, seed)],
  space_exploration_mcq: (lang = "en", seed = 0) => generateSpaceExplorationMCQ(lang, seed),
  space_exploration_typing: (lang = "en", seed = 0) => generateSpaceExplorationTyping(lang, seed),
};
