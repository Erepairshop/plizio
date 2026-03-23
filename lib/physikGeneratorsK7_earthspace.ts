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
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Newton Gravitációs törvénye?", "Newton's Law of Gravity?", "Newton súlyosság törvénye?", "Legea gravitației Newton?", lang), q4("F = GMm/r²", "F = GMm/r²", "F = GMm/r²", "F = GMm/r²", lang), [q4("F = m·a", "F = m·a", "F = m·a", "F = m·a", lang), q4("F = k·q/r", "F = k·q/r", "F = k·q/r", "F = k·q/r", lang), q4("F = m·g·h", "F = m·g·h", "F = m·g·h", "F = m·g·h", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Gravitációs erő: távolság függőség?", "Gravitational force: distance?", "Gravitációs erő: távolság?", "Forță gravitație: distanță?", lang), q4("1/r² arányos", "Proportional to 1/r²", "1/r² arányos", "Proporțional la 1/r²", lang), [q4("1/r arányos", "Proportional to 1/r", "1/r arányos", "Proporțional la 1/r", lang), q4("r arányos", "Proportional to r", "r arányos", "Proporțional la r", lang), q4("Konstans", "Constant", "Konstans", "Constant", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("Tömeg vs Súly: különbség?", "Mass vs Weight: difference?", "Tömeg vs Súly: különbség?", "Masă vs Greutate: diferență?", lang), q4("Tömeg: kg (anyag), Súly: N (erő)", "Mass: kg (matter), Weight: N (force)", "Tömeg: kg (anyag), Súly: N (erő)", "Masă: kg (materie), Greutate: N (forță)", lang), [q4("Azonos dolog", "Same thing", "Azonos dolog", "Același lucru", lang), q4("Tömeg csak Föld", "Mass only Earth", "Tömeg csak Föld", "Masă doar Pământ", lang), q4("Súly mindig konstans", "Weight always constant", "Súly mindig konstans", "Greutate mereu constantă", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "gravity_universal", q4("g értéke Föld felszínén?", "g value Earth surface?", "g értéke Föld?", "Valoare g Pământ?", lang), q4("9,8 m/s² ≈ 10 m/s²", "9.8 m/s² ≈ 10 m/s²", "9,8 m/s² ≈ 10 m/s²", "9,8 m/s² ≈ 10 m/s²", lang), [q4("3,8 m/s²", "3.8 m/s²", "3,8 m/s²", "3,8 m/s²", lang), q4("20 m/s²", "20 m/s²", "20 m/s²", "20 m/s²", lang), q4("100 m/s²", "100 m/s²", "100 m/s²", "100 m/s²", lang)], rng));
  }
  return questions;
}

function generateGravityTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "gravity_universal", q4("F = GMm/r² Komponensek?", "F = GMm/r² components?", "F = GMm/r² komponensek?", "F = GMm/r² componente?", lang), [q4("G=gravitációs állandó, M=nagyobb tömeg, m=kisebb, r=távolság", "G=gravitational constant, M=larger mass, m=smaller, r=distance", "G=gravitációs állandó, M=nagyobb tömeg, m=kisebb, r=távolság", "G=constantă gravitație, M=masă mai mare, m=mai mică, r=distanță", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Súly képlet: F = m·g Például 50kg Föld?", "Weight F = m·g example 50kg Earth?", "Súly F = m·g 50kg Föld?", "Greutate F = m·g 50kg Pământ?", lang), [q4("F = 50 × 9,8 = 490 N", "F = 50 × 9.8 = 490 N", "F = 50 × 9,8 = 490 N", "F = 50 × 9,8 = 490 N", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Magasság növekedés: g csökken?", "Height increase: g decreases?", "Magasság növ: g csökken?", "Înălțime crește: g scade?", lang), [q4("Igen, g ~ 1/r² szerint, magasabb = messzebb = alacsonyabb g", "Yes, g ~ 1/r² by distance, higher = farther = lower g", "Igen, g ~ 1/r² szerint, magasabb = messzebb = alacsonyabb g", "Da, g ~ 1/r² după distanță, mai sus = mai departe = g mai mic", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Hold g értéke?", "Moon g value?", "Hold g értéke?", "Valoare g Lună?", lang), [q4("≈ 1,6 m/s² (≈ 1/6 Föld g)", "≈ 1.6 m/s² (≈ 1/6 Earth g)", "≈ 1,6 m/s² (≈ 1/6 Föld g)", "≈ 1,6 m/s² (≈ 1/6 g Pământ)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Kétszeres távolság: F = ?", "Double distance: F = ?", "Kétszeres távolság: F = ?", "Dublu distanță: F = ?", lang), [q4("1/4 az eredeti erő (r² arányos", "1/4 original force (due to r²)", "1/4 az eredeti erő (r² miatt)", "1/4 forța originală (din cauza r²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Súly Holdon 50kg?", "Weight Moon 50kg?", "Súly Holdon 50kg?", "Greutate Lună 50kg?", lang), [q4("F = 50 × 1,6 = 80 N (≈ 1/6 Föld súlyából)", "F = 50 × 1.6 = 80 N (≈ 1/6 Earth weight)", "F = 50 × 1,6 = 80 N (≈ 1/6 Föld súly)", "F = 50 × 1,6 = 80 N (≈ 1/6 greutate Pământ)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Gravitáció: vonzó vagy taszító erő?", "Gravity: attractive or repulsive?", "Gravitáció: vonzó?", "Gravitație: atractivă?", lang), [q4("Mindig vonzó (2 tömeg között)", "Always attractive (between masses)", "Mindig vonzó (2 tömeg között)", "Mereu atractivă (între mase)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Gravitációs állandó G egysége?", "G gravitational constant unit?", "G állandó egysége?", "Unitate constantă G?", lang), [q4("N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", "N·m²/kg² = m³/(kg·s²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Gravitáció hatótávolsága?", "Gravity range?", "Gravitáció hatótáv?", "Rază gravitație?", lang), [q4("Végtelen (de csökken 1/r²-tel)", "Infinite (but decreases by 1/r²)", "Végtelen (de csökken 1/r²-tel)", "Infinită (dar scade cu 1/r²)", lang)]),
    createTyping("gravity_space", "gravity_universal", q4("Egyenlítő vs Pólus: g?", "Equator vs Pole: g?", "Egyenlítő vs Pólus: g?", "Ecuator vs Pol: g?", lang), [q4("Póluson nagyobb (Föld lapított, a pólus közelebb a középponthoz)", "Pole greater (Earth oblate, pole closer to center)", "Póluson nagyobb (Föld lapított, pólus közelebb középponthoz)", "Pol mai mare (Pământ ovat, pol mai aproape de centru)", lang)]),
  ];
}

// ─── SOLAR SYSTEM ──────────────────────────────────────────────────────────

function generateSolarSystemMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Naprendszer központja?", "Solar System center?", "Naprendszer középpontja?", "Centrul Sistemului Solar?", lang), q4("Nap", "Sun", "Nap", "Soarele", lang), [q4("Föld", "Earth", "Föld", "Pământul", lang), q4("Hold", "Moon", "Hold", "Luna", lang), q4("Vénusz", "Venus", "Vénusz", "Venus", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Bolygók sorrendje (Naptól)?", "Planets order (from Sun)?", "Bolygók sorrendje?", "Ordinea planete?", lang), q4("Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz", "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", "Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz", "Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus, Neptun", lang), [q4("Merkúr, Föld, Vénusz, Mars...", "Mercury, Earth, Venus, Mars...", "Merkúr, Föld, Vénusz, Mars...", "Mercur, Pământ, Venus, Marte...", lang), q4("Vénusz, Merkúr, Föld...", "Venus, Mercury, Earth...", "Vénusz, Merkúr, Föld...", "Venus, Mercur, Pământ...", lang), q4("Jupiter első", "Jupiter first", "Jupiter első", "Jupiter primul", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Föld típusa?", "Earth type?", "Föld típusa?", "Tip Pământ?", lang), q4("Kőzetbolygó (szilárd)", "Rocky planet (solid)", "Kőzetbolygó (szilárd)", "Planetă stâncoasă (solidă)", lang), [q4("Gázbolygó", "Gas planet", "Gázbolygó", "Planetă gazoasă", lang), q4("Jégbolygó", "Ice planet", "Jégbolygó", "Planetă de gheață", lang), q4("Naprendszer központja", "Solar System center", "Naprendszer központja", "Centrul Sistemului Solar", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "solar_system", q4("Jupiter és Saturnus: gázbolygók?", "Jupiter & Saturn: gas giants?", "Jupiter & Saturnus: gáz?", "Jupiter & Saturn: gaz?", lang), q4("Igen, gázbolygók (nem szilárd felszín)", "Yes, gas giants (no solid surface)", "Igen, gázbolygók (nincs szilárd felszín)", "Da, giganți de gaz (fără suprafață solidă)", lang), [q4("Nem, kőzetbolygók", "No, rocky planets", "Nem, kőzetbolygók", "Nu, planete stâncoase", lang), q4("Csak Jupiter", "Only Jupiter", "Csak Jupiter", "Doar Jupiter", lang), q4("Csillagok", "Stars", "Csillagok", "Stele", lang)], rng));
  }
  return questions;
}

function generateSolarSystemTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "solar_system", q4("Naprendszer: hányan bolygó?", "Solar System: how many planets?", "Naprendszer: hány bolygó?", "Sistem solar: câte planete?", lang), [q4("8 (Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz)", "8 (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)", "8 (Merkúr, Vénusz, Föld, Mars, Jupiter, Saturnus, Uránusz, Neptunusz)", "8 (Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus, Neptun)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Plútó: bolygó vagy törpebolygó?", "Pluto: planet or dwarf?", "Plútó: bolygó vagy törpe?", "Pluto: planetă sau pitic?", lang), [q4("Törpebolygó (2006 óta hivatalosan)", "Dwarf planet (officially since 2006)", "Törpebolygó (2006 óta hivatalosan)", "Planetă pitică (oficial din 2006)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Föld és Jupiter: hány km távolság?", "Earth and Jupiter: distance?", "Föld-Jupiter: távolság?", "Pământ-Jupiter: distanță?", lang), [q4("≈ 600 millió km (variábilis, pálya miatt)", "≈ 600 million km (variable, orbital)", "≈ 600 millió km (variábilis)", "≈ 600 milioane km (variabilă)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Kuiper-öv: mi van?", "Kuiper Belt: what?", "Kuiper-öv: mi van?", "Centură Kuiper: ce?", lang), [q4("Jégbolygók és törpebolygók (pl. Plútó, Erisz)", "Icy bodies and dwarf planets (e.g. Pluto, Eris)", "Jégbolygók és törpebolygók (pl. Plútó)", "Corpuri glaciale și planete pitice (de ex. Pluto)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Aszteroidákövezet: helye?", "Asteroid Belt: location?", "Aszteroidapálya: hely?", "Centură asteroizi: locație?", lang), [q4("Mars és Jupiter között", "Between Mars and Jupiter", "Mars és Jupiter között", "Între Marte și Jupiter", lang)]),
    createTyping("gravity_space", "solar_system", q4("Nap összetétele?", "Sun composition?", "Nap összetétele?", "Compoziție Soare?", lang), [q4("Hidrogén és hélium plazma (nukleáris fúzió центре)", "Hydrogen and helium plasma (nuclear fusion center)", "Hidrogén és hélium plazma (nukleáris fúzió)", "Hidrogen și heliu plasmă (fuziune nucleară centru)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Föld Naptól távolsága?", "Earth-Sun distance?", "Föld-Nap távolság?", "Distanță Pământ-Soare?", lang), [q4("≈ 150 millió km = 1 AU (Csillagászati Egység)", "≈ 150 million km = 1 AU (Astronomical Unit)", "≈ 150 millió km = 1 UA", "≈ 150 milioane km = 1 UA (Unitate Astronomică)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Vénusz: legmelegebb bolygó?", "Venus: hottest planet?", "Vénusz: legmelegebb?", "Venus: cea mai fierbinte?", lang), [q4("Igen (≈ 460°C), CO2 üvegház hatás miatt", "Yes (≈ 460°C), due to CO2 greenhouse", "Igen (≈ 460°C), CO2 üvegház miatt", "Da (≈ 460°C), din cauza efectului de seră CO2", lang)]),
    createTyping("gravity_space", "solar_system", q4("Mars: vörös bolygó? Miért?", "Mars: red planet? Why?", "Mars: vörös? Miért?", "Marte: roșu? De ce?", lang), [q4("Vas-oxid (rozsdás) felszín", "Iron oxide (rusty) surface", "Vas-oxid felszín", "Suprafață oxid fier (rozată)", lang)]),
    createTyping("gravity_space", "solar_system", q4("Naprendszer kora?", "Solar System age?", "Naprendszer kora?", "Vârstă Sistem Solar?", lang), [q4("≈ 4,6 milliárd év", "≈ 4.6 billion years", "≈ 4,6 milliárd év", "≈ 4,6 miliarde ani", lang)]),
  ];
}

// ─── ORBITS ────────────────────────────────────────────────────────────────

function generateOrbitalMechanicsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Kepler 1. törvénye?", "Kepler's 1st Law?", "Kepler 1. törvénye?", "Legea 1 Kepler?", lang), q4("Bolygók elliptikus pályán keringenek", "Planets orbit elliptically", "Bolygók elliptikus pályán", "Planete orbitează eliptic", lang), [q4("Bolygók körkörös pályán", "Planets orbit circularly", "Bolygók körkörös pályán", "Planete orbitează circular", lang), q4("Bolygók parabolikus pályán", "Planets orbit parabolically", "Bolygók parabolikus pályán", "Planete orbitează parabolic", lang), q4("Bolygók egyenes vonalban", "Planets orbit straight", "Bolygók egyenes vonalon", "Planete orbitează în linie dreaptă", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Kepler 2. törvénye?", "Kepler's 2nd Law?", "Kepler 2. törvénye?", "Legea 2 Kepler?", lang), q4("Azonos időben azonos terület söpörve", "Equal areas in equal time (areal velocity)", "Azonos terület söpörve", "Arii egale în timp egal", lang), [q4("Azonos sebesség", "Equal velocity", "Azonos sebesség", "Viteză egală", lang), q4("Azonos szögsebesség", "Equal angular velocity", "Azonos szögsebesség", "Viteză unghiulară egală", lang), q4("Azonos gyorsulás", "Equal acceleration", "Azonos gyorsulás", "Accelerație egală", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Kepler 3. törvénye?", "Kepler's 3rd Law?", "Kepler 3. törvénye?", "Legea 3 Kepler?", lang), q4("T² ~ a³ (periódus négyzete ~ pálya sugara köbe)", "T² ~ a³ (period squared ~ semi-major axis cubed)", "T² ~ a³ (periódus² ~ félnagytengely³)", "T² ~ a³ (perioada² ~ semi-axa majoră³)", lang), [q4("T ~ a", "T ~ a", "T ~ a", "T ~ a", lang), q4("T ~ a²", "T ~ a²", "T ~ a²", "T ~ a²", lang), q4("T ~ √a", "T ~ √a", "T ~ √a", "T ~ √a", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "orbits", q4("Pályasebesség: közelebb Naphoz?", "Orbital velocity: closer to Sun?", "Pályasebesség: Naphoz közelebb?", "Viteza orbitală: mai aproape de Soare?", lang), q4("Magasabb sebesség (nagyobb v)", "Higher velocity (greater v)", "Nagyobb sebesség", "Viteză mai mare", lang), [q4("Alacsonyabb sebesség", "Lower velocity", "Kisebb sebesség", "Viteză mai mică", lang), q4("Azonos sebesség", "Same velocity", "Azonos sebesség", "Viteză aceeași", lang), q4("Nulla sebesség", "Zero velocity", "Nulla sebesség", "Viteză zero", lang)], rng));
  }
  return questions;
}

function generateOrbitalMechanicsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "orbits", q4("Kepler törvények: gravitáció?", "Kepler laws: gravity?", "Kepler törvények: gravitáció?", "Legile Kepler: gravitație?", lang), [q4("Kepler törvények Newton gravitáció törvényből következnek", "Kepler laws follow from Newton's gravity law", "Kepler törvények Newton törvényből következnek", "Legile Kepler urmează din legea gravitației Newton", lang)]),
    createTyping("gravity_space", "orbits", q4("Elliptikus pálya: perihelion, aphelion?", "Elliptical orbit: perihelion, aphelion?", "Elliptikus pálya: perihelion, aphelion?", "Orbită eliptică: perihelion, aphelion?", lang), [q4("Perihelion: legközelebb Naphoz, aphelion: legtávolabb", "Perihelion: closest to Sun, aphelion: farthest", "Perihelion: legközelebb Naphoz, aphelion: legtávolabb", "Perihelion: cea mai aproape de Soare, aphelion: cea mai departe", lang)]),
    createTyping("gravity_space", "orbits", q4("Föld pályaperiódusa?", "Earth orbital period?", "Föld pályaideje?", "Perioada orbitală Pământ?", lang), [q4("1 év = 365,25 nap = 365 nap 6 óra", "1 year = 365.25 days", "1 év = 365,25 nap", "1 an = 365,25 zile", lang)]),
    createTyping("gravity_space", "orbits", q4("Szinkron pálya (Föld?)", "Geostationary orbit?", "Szinkronpálya (Föld)?", "Orbită geostaționară?", lang), [q4("Magasság ≈ 36000 km, periódus = 24 óra (Föld felül marad)", "Height ≈ 36000 km, period = 24 hrs (stays over same spot)", "Magasság ≈ 36000 km, periódus = 24 óra", "Înălțime ≈ 36000 km, perioada = 24 ore (rămâne deasupra aceluiași loc)", lang)]),
    createTyping("gravity_space", "orbits", q4("Pályasebesség képlet: v = ?", "Orbital speed formula: v = ?", "Pályasebesség: v = ?", "Viteză orbitală: v = ?", lang), [q4("v = √(GM/r)", "v = √(GM/r)", "v = √(GM/r)", "v = √(GM/r)", lang)]),
    createTyping("gravity_space", "orbits", q4("Szatellita magasság: sebességre hatás?", "Satellite height: speed effect?", "Szatellita magasság: sebesség?", "Înălțime satelit: efect viteză?", lang), [q4("Magasabb = alacsonyabb sebesség (v ~ 1/√r)", "Higher = lower speed (v ~ 1/√r)", "Magasabb = alacsonyabb sebesség", "Mai sus = viteză mai mică (v ~ 1/√r)", lang)]),
    createTyping("gravity_space", "orbits", q4("Centripetális erő: pályán milyen?", "Centripetal force: orbit provides?", "Centripetális erő: pályán?", "Forță centripetă: orbită?", lang), [q4("Gravitációs erő (Nap vagy bolygó vonzása)", "Gravitational force (Sun or planet's pull)", "Gravitációs erő (Nap vagy bolygó vonzása)", "Forță gravitațională (atracția Soarelui sau planetei)", lang)]),
    createTyping("gravity_space", "orbits", q4("Jupiter Hold Io: pályaideje?", "Jupiter moon Io: orbital period?", "Jupiter Hold Io: pályaideje?", "Luna Jupiter Io: perioadă orbitală?", lang), [q4("≈ 1,77 nap", "≈ 1.77 days", "≈ 1,77 nap", "≈ 1,77 zile", lang)]),
    createTyping("gravity_space", "orbits", q4("Körpálya feltétele?", "Circular orbit condition?", "Körpálya feltétele?", "Condiție orbită circulară?", lang), [q4("v konstans, r konstans (körsebesség = centripetális gyorsulás)", "v constant, r constant (orbital speed = centripetal accel.)", "v konstans, r konstans", "v constant, r constant (viteză orbitală = accelerație centripetă)", lang)]),
    createTyping("gravity_space", "orbits", q4("Kepleri mozgás: energia megmaradás?", "Kepler motion: energy conservation?", "Kepleri mozgás: energia?", "Mișcare Kepler: energie?", lang), [q4("Igen, E_total = Ek + Ep = konstans (zárt pályánál)", "Yes, E_total = Ek + Ep = constant (bound orbits)", "Igen, E_total = Ek + Ep = konstans", "Da, E_total = Ek + Ep = constant (pentru orbite legate)", lang)]),
  ];
}

// ─── SEASONS AND TIDES ──────────────────────────────────────────────────────

function generateSeasonsTidesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Évszakok oka?", "Seasons caused by?", "Évszakok oka?", "Cauza anotimpurilor?", lang), q4("Föld tengelytiltása (23,5°)", "Earth's tilt (23.5°)", "Föld tengely-tiltása (23,5°)", "Înclinarea axei Pământului (23,5°)", lang), [q4("Föld-Nap távolság", "Earth-Sun distance", "Föld-Nap távolság", "Distanța Pământ-Soare", lang), q4("Nap fényereje", "Sun's brightness", "Nap fénye", "Strălucire Soare", lang), q4("Hold gravitációja", "Moon's gravity", "Hold gravitációja", "Gravitația Lunii", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Nyár Észak félgömb: Föld közel/távol Naptól?", "Summer Northern: Earth close/far Sun?", "Nyár Észak: Föld közel/távol?", "Vară Nord: Pământ aproape/departe?", lang), q4("Közel és félgömb felé fordított", "Actually farther (but tilted toward)", "Közel és félgömb felé fordított", "De fapt mai departe (dar înclinată către)", lang), [q4("Közel Naptól", "Closer to Sun", "Közel Naptól", "Mai aproape de Soare", lang), q4("Messze Naptól", "Farther from Sun", "Messze Naptól", "Mai departe de Soare", lang), q4("Azonos távolság", "Same distance", "Azonos távolság", "Aceeași distanță", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Dagszámítás (nap/éj) Föld forgásával?", "Day/Night caused by?", "Nappal/éjszaka oka?", "Zi/noapte cauzată de?", lang), q4("Föld tengelykörüli forgása (24 óra)", "Earth's rotation (24 hours)", "Föld forgása (24 óra)", "Rotația Pământului (24 ore)", lang), [q4("Föld Nap körüli keringése", "Earth's revolution around Sun", "Föld Nap körüli keringése", "Revoluția Pământului în jurul Soarelui", lang), q4("Hold távolsága", "Moon's distance", "Hold távolsága", "Distanța Lunii", lang), q4("Napéq valtozás", "Solar wind changes", "Nap-aktivitás", "Activitatea Soarelui", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "seasons_tides", q4("Apály-dagály: Hold gravitáció?", "Tides: Moon's gravity?", "Apály-dagály: Hold?", "Maree: gravitația Lunii?", lang), q4("Igen, Hold húzza az óceánt", "Yes, Moon pulls ocean water", "Igen, Hold húzza az óceánt", "Da, Luna trage apa oceanului", lang), [q4("Nem, Nap okozza", "No, Sun causes", "Nem, Nap okozza", "Nu, Soarele cauzează", lang), q4("Föld forgása okozza", "Earth's rotation", "Föld forgása okozza", "Rotația Pământului cauzează", lang), q4("Szél okozza", "Wind causes", "Szél okozza", "Vântul cauzează", lang)], rng));
  }
  return questions;
}

function generateSeasonsTidesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "seasons_tides", q4("Föld tengelytiltása: szög?", "Earth's tilt: angle?", "Föld tiltása: szög?", "Înclinare Pământ: unghi?", lang), [q4("23,5° az ekliptika síkjához képest", "23.5° from ecliptic plane", "23,5° az ekliptika síkjához", "23,5° de la planul eclipticii", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Napéjegyenlőség: mikor Föld?", "Equinox: when Earth?", "Napéj-egyenlőség: mikor?", "Echinocțiu: când Pământ?", lang), [q4("21 március (tavasz-É) és 23 szeptember (ősz-É)", "March 21 (vernal) & Sept 23 (autumnal)", "21 március & 23 szeptember", "21 martie & 23 septembrie", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Nappali/éjszakai hossz: nyár?", "Day/Night length: summer?", "Nappali hossz: nyár?", "Lungime zi/noapte: vară?", lang), [q4("Nappali > éjszaka (Észak: ~15-16 óra nappali)", "Day > night (North: ~15-16 hrs daylight)", "Nappali > éjszaka (~15-16 óra)", "Zi > noapte (Nord: ~15-16 ore)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Holdnegyed: dagály után?", "High tide: after Moon?", "Dagály: után Hold?", "Maree înaltă: după Lună?", lang), [q4("~6 óra után (Hold vonzása, inerciahatás)", "~6 hours after (Moon's pull, inertia)", "~6 óra után (Hold vonzása)", "~6 ore după (atracția Lunii, inerție)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Apály-dagály naponta hány?", "Tides per day: how many?", "Apály-dagály naponta?", "Maree pe zi: câte?", lang), [q4("2 dagály és 2 apály (kb 6 órás ciklus)", "2 high + 2 low (about 6 hour cycle)", "2 dagály + 2 apály (~6 óra)", "2 maree înalte + 2 joase (~6 ore)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Szökőár (spring tide): mikor?", "Spring tide: when?", "Szökőár: mikor?", "Maree de vară: când?", lang), [q4("Újhold és telihold amikor Nap-Föld-Hold egyenes", "New & full moon when Sun-Earth-Moon aligned", "Újhold és telihold (egyenesezés)", "Lună nouă și plin când Sun-Earth-Moon aliniate", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Halványár (neap tide): mikor?", "Neap tide: when?", "Halványár: mikor?", "Maree de moarte: când?", lang), [q4("Félholdnál amikor Nap-Föld-Hold derékszögben", "Half moon when Sun-Earth-Moon right angle", "Félhold (derékszög)", "Lună jumătate când Sun-Earth-Moon unghi drept", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Nyárkezdete/télkezdete: dátum?", "Summer/Winter solstice: date?", "Nyárkezdete/télkezdete: dátum?", "Solstițiu vară/iarnă: dată?", lang), [q4("21 június (nyár-É) & 21 december (tél-É)", "June 21 (summer-N) & Dec 21 (winter-N)", "21 június & 21 december", "21 iunie & 21 decembrie", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Földi nap hossza (sziderikus vs nap)?", "Day length (sidereal vs solar)?", "Nappali hossz (sziderikus vs nap)?", "Lungime zi (siderală vs solară)?", lang), [q4("Sziderikus: 23h 56m 4s (csillagokhoz); napnapi: 24h (Naphoz)", "Sidereal: 23h 56m 4s (stars); solar: 24h (Sun)", "Sziderikus: 23h 56m 4s; napnapi: 24h", "Siderală: 23h 56m 4s (stele); solară: 24h (Soare)", lang)]),
    createTyping("gravity_space", "seasons_tides", q4("Föld pálya alakja?", "Earth's orbit shape?", "Föld pályájának alakja?", "Forma orbită Pământ?", lang), [q4("Nagyon enyhe ellipszis (excentricitás ≈ 0,017, közel kör)", "Very slight ellipse (eccentricity ≈ 0.017, nearly circular)", "Nagyon enyhe ellipszis (e ≈ 0,017)", "Elipsă foarte ușoară (excentricitate ≈ 0,017, aproape cerc)", lang)]),
  ];
}

// ─── SPACE EXPLORATION ──────────────────────────────────────────────────────

function generateSpaceExplorationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Rakétahajtás: Newton 3. törvénye?", "Rocket propulsion: Newton 3rd Law?", "Rakéta: Newton 3. törvénye?", "Propulsie rachetă: Legea 3 Newton?", lang), q4("Kiürített gáz lefelé, rakéta felfelé", "Expelled gas downward, rocket upward", "Kiürített gáz lefelé, rakéta felfelé", "Gaz expulzat în jos, rachetă în sus", lang), [q4("Tüzelőanyag ég, energia felszabadul", "Fuel burns, energy released", "Tüzelőanyag ég", "Combustibil arde, energie eliberată", lang), q4("Légköri súrlódás", "Air friction", "Légköri súrlódás", "Frecare aerodinamică", lang), q4("Gravitáció lefelé húz", "Gravity pulls down", "Gravitáció lefelé", "Gravitația trage în jos", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Szökési sebesség: Föld?", "Escape velocity: Earth?", "Szökési sebesség: Föld?", "Viteza de evadare: Pământ?", lang), q4("≈ 11,2 km/s", "≈ 11.2 km/s", "≈ 11,2 km/s", "≈ 11,2 km/s", lang), [q4("≈ 8 km/s", "≈ 8 km/s", "≈ 8 km/s", "≈ 8 km/s", lang), q4("≈ 5 km/s", "≈ 5 km/s", "≈ 5 km/s", "≈ 5 km/s", lang), q4("≈ 20 km/s", "≈ 20 km/s", "≈ 20 km/s", "≈ 20 km/s", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Pályasebesség (LEO): Föld?", "Orbital velocity (LEO): Earth?", "Pályasebesség (LEO): Föld?", "Viteză orbitală (LEO): Pământ?", lang), q4("≈ 7,8 km/s (h=200km)", "≈ 7.8 km/s (h=200km)", "≈ 7,8 km/s (h=200km)", "≈ 7,8 km/s (h=200km)", lang), [q4("≈ 11,2 km/s", "≈ 11.2 km/s", "≈ 11,2 km/s", "≈ 11,2 km/s", lang), q4("≈ 3 km/s", "≈ 3 km/s", "≈ 3 km/s", "≈ 3 km/s", lang), q4("≈ 30 km/s", "≈ 30 km/s", "≈ 30 km/s", "≈ 30 km/s", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("gravity_space", "space_exploration", q4("Apollo missziók: Hold leszállás?", "Apollo missions: Moon landing?", "Apollo: Hold leszállás?", "Apollo: aterizare pe Lună?", lang), q4("1969-1972 között 6 Holdra szállt", "1969-1972: 6 moon landings", "1969-1972 között 6 leszállás", "1969-1972: 6 aterizări pe Lună", lang), [q4("1960-as évek korai", "Early 1960s", "1960-as évek korai", "Anii 1960 timpuriu", lang), q4("1980-as évek", "1980s", "1980-as évek", "Anii 1980", lang), q4("2000-as évek", "2000s", "2000-as évek", "Anii 2000", lang)], rng));
  }
  return questions;
}

function generateSpaceExplorationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("gravity_space", "space_exploration", q4("Rakétahajtás: Newton 3. törvénye?", "Rocket: Newton's 3rd Law?", "Rakéta: Newton 3. törvénye?", "Rachetă: Legea 3 Newton?", lang), [q4("Akció: gáz kiürítés lefelé; Reakció: rakéta felfelé (egyenlő nagyságú, ellentétes)", "Action: expel gas down; reaction: rocket up (equal/opposite)", "Akció: gáz lefelé; Reakció: rakéta felfelé", "Acțiune: gaz expulzat jos; reacție: rachetă sus (egal/opus)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Szökési sebesség: magasabbra jó?", "Escape velocity: higher altitude?", "Szökési sebesség: magasabban?", "Viteza evadare: mai sus?", lang), [q4("Csökken (v_esc = √(2GM/r), r nagyobb → v kisebb)", "Decreases (v_esc = √(2GM/r), larger r → lower v)", "Csökken (nagyobb magasság → alacsonyabb szökési seb.)", "Scade (înălțime mai mare → viteză evadare mai mică)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Nemzetközi Űrállomás (ISS): pályaideje?", "ISS orbital period?", "ISS: pályaideje?", "ISS: perioada orbitală?", lang), [q4("≈ 90 perc (kb 16 kör naponta)", "≈ 90 minutes (~16 orbits per day)", "≈ 90 perc (16 kör naponta)", "≈ 90 minute (~16 orbite pe zi)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Holdmissziók: fő kihívások?", "Moon missions: main challenges?", "Holdmissziók: fő kihívások?", "Misiuni Lună: provocări principale?", lang), [q4("Szökési sebesség (11,2 km/s), üzemanyag, sugárzás, Hold gravitáció (1/6 Föld)", "Escape velocity, fuel, radiation, Moon gravity (1/6 Earth)", "Szökési sebesség, üzemanyag, sugárzás, Hold gravitáció", "Viteza evadare, combustibil, radiație, gravitația Lunii (1/6 Pământ)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Marsutak: messze az ISS-nél?", "Mars missions: far from ISS?", "Mars-misszió: Föld-Mars?", "Misiuni Marte: Pământ-Marte?", lang), [q4("≈ 225 millió km legközelebben, ≈ 401 millió km legtávolabb", "≈ 225 mill km closest, ≈ 401 mill km farthest", "≈ 225-401 millió km (variábilis)", "≈ 225-401 milioane km (variabil)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Szatellita típusok: felhasználások?", "Satellite types: uses?", "Szatellita típusok: használat?", "Tipuri satelit: utilizări?", lang), [q4("Geostacionárius (időjárás, TV), Leo (GPS, képalkotás), tudományos (Hubble)", "Geostationary (weather, TV), LEO (GPS, imaging), scientific (Hubble)", "Geostacionárius, LEO, tudományos", "Geostaționară (vreme, TV), LEO (GPS, imagistică), științifică (Hubble)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Első szatellita: Szputnyik 1?", "First satellite: Sputnik 1?", "Első szatellita: Szputnyik?", "Primul satelit: Sputnik?", lang), [q4("1957 október 4, Szovjetunió, 83,6 kg", "Oct 4, 1957, Soviet, 83.6 kg", "1957 október 4, Szovjetunió", "4 octombrie 1957, Uniunea Sovietică, 83,6 kg", lang)]),
    createTyping("gravity_space", "space_exploration", q4("Gravitációs támogatás ('gravity assist')?", "Gravity assist maneuver?", "Gravitációs támogatás?", "Manevră asistență gravitațională?", lang), [q4("Szonda bolygó mellett repül, bolygó gravitáció gyorsítja/lassítja", "Probe flies by planet, its gravity accelerates/slows probe", "Szonda bolygó mellett → gravitáció gyorsít", "Sonda zbor lângă planetă, gravitația ei accelerează/încetinește", lang)]),
    createTyping("gravity_space", "space_exploration", q4("SpaceX Falcon 9: újrafelhasználható?", "SpaceX Falcon 9: reusable?", "Falcon 9: újrahasznosítható?", "Falcon 9: refolosibil?", lang), [q4("Igen, az első fokozat visszaréglik és landolnak (költségcsökkentés)", "Yes, first stage lands and reuses (cost reduction)", "Igen, első fokozat visszatér és landol", "Da, prima treaptă revine și aterizează (reducere costuri)", lang)]),
    createTyping("gravity_space", "space_exploration", q4("NASA: alapítás?", "NASA: founded?", "NASA: alapítás?", "NASA: fondată?", lang), [q4("1958 július 29 (válaszul Szputnyikra)", "July 29, 1958 (response to Sputnik)", "1958 július 29", "29 iulie 1958 (răspuns la Sputnik)", lang)]),
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
