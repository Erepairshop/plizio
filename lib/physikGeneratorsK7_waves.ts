// ─── K7 PHYSICS GENERATORS: WAVES ─────────────────────────────────────────
// "Wellen" theme — Wave equations, electromagnetic spectrum, light properties, interference
// Grade 7 (Klasse 7 / 8th grade physics)
//
// 4 subtopics × ~70 questions (7 MCQ + 8 typing per subtopic)
// Wave speed: v = f × λ
// Wave equation: y = A sin(kx - ωt)
// Electromagnetic spectrum: radio → visible → gamma rays

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

// ─── WAVE EQUATION ────────────────────────────────────────────────────────

function generateWaveEquationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "waves", "wave_equation",
        q4(
          "Die Wellenverschwindungsformel ist v = f × λ. Was ist v?",
          "The wave equation is v = f × λ. What is v?",
          "A hullámegyenlet v = f × λ. Mi a v?",
          "Ecuația undelor este v = f × λ. Ce este v?",
          lang
        ),
        q4("Wellengeschwindigkeit / Wave speed", "Wave speed", "Hullámsebesség", "Viteza undei", lang),
        [
          q4("Frequenz", "Frequency", "Frekvencia", "Frecvență", lang),
          q4("Wellenlänge", "Wavelength", "Hullámhossz", "Lungime de undă", lang),
          q4("Amplitude", "Amplitude", "Amplitúdó", "Amplitudine", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      const f = 5 + Math.floor(rng() * 15);
      const lambda = 2 + Math.floor(rng() * 5);
      const v = f * lambda;
      qs.push(createMCQ(
        "waves", "wave_equation",
        q4(
          `Eine Welle mit Frequenz f=${f}Hz und Wellenlänge λ=${lambda}m. Welche Geschwindigkeit?`,
          `A wave with frequency f=${f}Hz and wavelength λ=${lambda}m. What is the speed?`,
          `Hullám frekvenciája f=${f}Hz és hullámhossza λ=${lambda}m. Mekkora a sebesség?`,
          `O undă cu frecvența f=${f}Hz și lungimea de undă λ=${lambda}m. Care este viteza?`,
          lang
        ),
        q4(`${v}m/s`, `${v}m/s`, `${v}m/s`, `${v}m/s`, lang),
        [
          q4(`${f + lambda}m/s`, `${f + lambda}m/s`, `${f + lambda}m/s`, `${f + lambda}m/s`, lang),
          q4(`${f - lambda}m/s`, `${f - lambda}m/s`, `${f - lambda}m/s`, `${f - lambda}m/s`, lang),
          q4(`${f / lambda}m/s`, `${f / lambda}m/s`, `${f / lambda}m/s`, `${f / lambda}m/s`, lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "waves", "wave_equation",
        q4(
          "Was ist die Amplitude einer Welle?",
          "What is the amplitude of a wave?",
          "Mi a hullám amplitúdója?",
          "Ce este amplitudinea unei unde?",
          lang
        ),
        q4("Maximale Auslenkung von der Gleichgewichtslage", "Maximum displacement from equilibrium", "A maximális eltérés az egyensúlyi helyzetből", "Maximul de deplasare din poziția de echilibru", lang),
        [
          q4("Abstand zwischen zwei Wellen", "Distance between two waves", "Távolság két hullám között", "Distanța între două unde", lang),
          q4("Zeit für eine vollständige Schwingung", "Time for one complete oscillation", "Egy teljes rezgés időtartama", "Timp pentru o oscilație completă", lang),
          q4("Anzahl der Wellen pro Sekunde", "Number of waves per second", "Hullámok száma egy másodperc alatt", "Numărul de unde pe secundă", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "waves", "wave_equation",
        q4(
          "Die Periodendauer T und Frequenz f sind umgekehrt proportional. Welche Beziehung?",
          "Period T and frequency f are inversely proportional. What is the relationship?",
          "A periódusidő T és frekvencia f fordítottan arányos. Mi a kapcsolat?",
          "Perioada T și frecvența f sunt invers proporționale. Care este relația?",
          lang
        ),
        q4("T = 1/f oder f = 1/T", "T = 1/f or f = 1/T", "T = 1/f vagy f = 1/T", "T = 1/f sau f = 1/T", lang),
        [
          q4("T = f", "T = f", "T = f", "T = f", lang),
          q4("T = 2πf", "T = 2πf", "T = 2πf", "T = 2πf", lang),
          q4("T = f²", "T = f²", "T = f²", "T = f²", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "waves", "wave_equation",
        q4(
          "Die Wellenlänge λ ist der Abstand zwischen zwei aufeinanderfolgenden... was?",
          "Wavelength λ is the distance between two consecutive... what?",
          "A hullámhossz λ két egymást követő... közötti távolság?",
          "Lungimea de undă λ este distanța dintre două... consecutive?",
          lang
        ),
        q4("Wellenbergen oder Wellentälern", "Crests or troughs", "Hullámhegyeken vagy hullámvölgyekben", "Creste sau jgheaburi", lang),
        [
          q4("Atomen", "Atoms", "Atomok", "Atomi", lang),
          q4("Schwingungen", "Oscillations", "Rezgések", "Oscilații", lang),
          q4("Partikeln", "Particles", "Részecskék", "Particule", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateWaveEquationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed + 1000);
  const qs: CurriculumTyping[] = [];

  const examples = [
    { f: 10, lambda: 2, v: 20 },
    { f: 5, lambda: 4, v: 20 },
    { f: 8, lambda: 3, v: 24 },
    { f: 6, lambda: 5, v: 30 },
    { f: 12, lambda: 2.5, v: 30 },
  ];

  for (let i = 0; i < 8; i++) {
    const ex = pick(examples, rng);
    qs.push(createTyping(
      "waves", "wave_equation",
      q4(
        `f=${ex.f}Hz, λ=${ex.lambda}m. Wellengeschwindigkeit v in m/s:`,
        `f=${ex.f}Hz, λ=${ex.lambda}m. Wave speed v in m/s:`,
        `f=${ex.f}Hz, λ=${ex.lambda}m. Hullámsebesség v m/s-ben:`,
        `f=${ex.f}Hz, λ=${ex.lambda}m. Viteza undei v în m/s:`,
        lang
      ),
      String(ex.v)
    ));
  }

  return qs;
}

// ─── ELECTROMAGNETIC SPECTRUM ──────────────────────────────────────────────

function generateEMSpectrumMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "waves", "electromagnetic_spectrum",
        q4(
          "Welche elektromagnetischen Wellen haben die längsten Wellenlängen?",
          "Which electromagnetic waves have the longest wavelengths?",
          "Mely elektromágneses hullámoknak van a leghosszabb hullámhossza?",
          "Care unde electromagnetice au cele mai lungi lungimi de undă?",
          lang
        ),
        q4("Radiowellen", "Radio waves", "Rádiohullámok", "Unde radio", lang),
        [
          q4("Mikrowellen", "Microwaves", "Mikrohullámok", "Microunde", lang),
          q4("Lichtwellen", "Light waves", "Fényhullámok", "Unde de lumină", lang),
          q4("Röntgenstrahlen", "X-rays", "Röntgensugarak", "Raze X", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "waves", "electromagnetic_spectrum",
        q4(
          "In welcher Reihenfolge nimmt die Frequenz in einem EM-Spektrum zu?",
          "In what order does frequency increase in an EM spectrum?",
          "Milyen sorrendben nő a frekvencia az EM-spektrumban?",
          "În ce ordine crește frecvența într-un spectru EM?",
          lang
        ),
        q4("Radio → Mikro → IR → Sichtbar → UV → Röntgen → Gamma", "Radio → Micro → IR → Visible → UV → X → Gamma", "Rádió → Mikro → IR → Látható → UV → Röntgen → Gamma", "Radio → Micro → IR → Vizibil → UV → Raze X → Gamma", lang),
        [
          q4("Gamma → Röntgen → UV → Sichtbar → IR → Mikro → Radio", "Gamma → X → UV → Visible → IR → Micro → Radio", "Gamma → Röntgen → UV → Látható → IR → Mikro → Rádió", "Gamma → Raze X → UV → Vizibil → IR → Micro → Radio", lang),
          q4("Mikro → Radio → IR → Sichtbar → UV → Röntgen → Gamma", "Micro → Radio → IR → Visible → UV → X → Gamma", "Mikro → Rádió → IR → Látható → UV → Röntgen → Gamma", "Micro → Radio → IR → Vizibil → UV → Raze X → Gamma", lang),
          q4("Alle haben die gleiche Frequenz", "All have the same frequency", "Mindegyiknek ugyanaz a frekvenciája", "Toate au aceeași frecvență", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "waves", "electromagnetic_spectrum",
        q4(
          "Sichtbares Licht ist nur ein kleiner Teil des elektromagnetischen Spektrums. Warum sehen wir es?",
          "Visible light is only a small part of the EM spectrum. Why do we see it?",
          "A látható fény csak az EM-spektrum egy kis része. Miért látjuk?",
          "Lumina vizibilă este doar o mică parte a spectrului EM. De ce o vedem?",
          lang
        ),
        q4("Unsere Augen sind für diese Wellenlängen empfindlich", "Our eyes are sensitive to these wavelengths", "Szemünk érzékeny ezekre a hullámhosszakra", "Ochii noștri sunt sensibili la aceste lungimi de undă", lang),
        [
          q4("Es ist die einzige elektromagnetische Strahlung", "It is the only EM radiation", "Ez az egyetlen elektromágneses sugárzás", "Este singura radiație EM", lang),
          q4("Es hat die höchste Energie", "It has the highest energy", "A legmagasabb energiájú", "Are cea mai mare energie", lang),
          q4("Es hat die längsten Wellenlängen", "It has the longest wavelengths", "A leghosszabb hullámhosszak", "Are cele mai lungi lungimi de undă", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "waves", "electromagnetic_spectrum",
        q4(
          "Welche EM-Strahlung wird für medizinische Diagnose (Knochenbrüche) verwendet?",
          "Which EM radiation is used for medical diagnosis (bone fractures)?",
          "Mely EM-sugárzást használnak orvosi diagnosztikához?",
          "Care radiație EM se utilizează pentru diagnosticul medical (fracturi osoase)?",
          lang
        ),
        q4("Röntgenstrahlen", "X-rays", "Röntgensugarak", "Raze X", lang),
        [
          q4("Radiowellen", "Radio waves", "Rádiohullámok", "Unde radio", lang),
          q4("Sichtbares Licht", "Visible light", "Látható fény", "Lumina vizibilă", lang),
          q4("Gammastrahlung", "Gamma rays", "Gammasugárzás", "Raze gamma", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "waves", "electromagnetic_spectrum",
        q4(
          "Mikrowellen und Radiowellen sind nicht sichtbar. Warum nicht?",
          "Microwaves and radio waves are not visible. Why not?",
          "Mikró- és rádióhullámok nem láthatók. Miért nem?",
          "Microundele și undele radio nu sunt vizibile. De ce nu?",
          lang
        ),
        q4("Ihre Wellenlängen sind viel zu groß für unsere Augen", "Their wavelengths are too large for our eyes", "Hullámhosszuk túl nagy a szemünk számára", "Lungimile lor de undă sunt prea mari pentru ochii noștri", lang),
        [
          q4("Sie werden durch die Atmosphäre absorbiert", "They are absorbed by the atmosphere", "A légkör felszívja őket", "Sunt absorbite de atmosferă", lang),
          q4("Sie haben zu wenig Energie", "They have too little energy", "Túl kevés energiájuk van", "Au prea puțină energie", lang),
          q4("Sie durchdringen undurchsichtige Materialien", "They penetrate opaque materials", "Áthatják az átlátszatlan anyagokat", "Penetrează materialele opace", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateEMSpectrumTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  const types = ["Radiowellen", "Mikrowellen", "Infrarot", "Sichtbares Licht", "Ultraviolett", "Röntgenstrahlen", "Gammastrahlung"];
  const enTypes = ["Radio waves", "Microwaves", "Infrared", "Visible light", "Ultraviolet", "X-rays", "Gamma rays"];

  for (let i = 0; i < 8; i++) {
    const type = pick(types, mulberry32(seed + i));
    qs.push(createTyping(
      "waves", "electromagnetic_spectrum",
      q4(
        `${type} haben welche Wellenlänge? (lang/kurz)`,
        `${enTypes[types.indexOf(type)]} have what wavelength? (long/short)`,
        `${type} milyen hullámhosszúak? (hosszú/rövid)`,
        `${type} au ce lungime de undă? (lung/scurt)`,
        lang
      ),
      ["lang", "long", "hosszú", "lung"]
    ));
  }

  return qs;
}

// ─── INFRARED & UV ────────────────────────────────────────────────────────

function generateInfraredUVMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "waves", "infrared_uv",
        q4(
          "Infrarotstrahlung (IR) wird manchmal als Wärmestrahlung bezeichnet. Warum?",
          "Infrared radiation (IR) is sometimes called heat radiation. Why?",
          "Az infravörös sugárzást gyakran hősugarazásnak nevezzük. Miért?",
          "Radiația infraroșie (IR) este uneori numită radiație termică. De ce?",
          lang
        ),
        q4("Weil sie von warmen Objekten emittiert wird", "Because it is emitted by warm objects", "Mert a meleg objektumok kibocsátják", "Pentru că este emisă de obiecte calde", lang),
        [
          q4("Weil sie Licht absorbiert", "Because it absorbs light", "Mert felszívja a fényt", "Pentru că absoarbe lumina", lang),
          q4("Weil sie die Temperatur senkt", "Because it reduces temperature", "Mert csökkenti a hőmérsékletet", "Pentru că scade temperatura", lang),
          q4("Weil sie Mikrowellen erzeugt", "Because it produces microwaves", "Mert mikrométhullámokat hoz létre", "Pentru că produce microunde", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "waves", "infrared_uv",
        q4(
          "Ultraviolett (UV) Strahlung hat mehr Energie als sichtbares Licht. Welcher Begriff beschreibt das?",
          "Ultraviolet (UV) radiation has more energy than visible light. What term describes this?",
          "Az ultraibolya (UV) sugárzás több energiával rendelkezik, mint a látható fény. Mi ezt a terméket?",
          "Radiația ultravioletă (UV) are mai multă energie decât lumina vizibilă. Ce termen descrie asta?",
          lang
        ),
        q4("Höhere Frequenz", "Higher frequency", "Magasabb frekvencia", "Frecvență mai mare", lang),
        [
          q4("Längere Wellenlänge", "Longer wavelength", "Hosszabb hullámhossz", "Lungime de undă mai mare", lang),
          q4("Langsamere Ausbreitung", "Slower propagation", "Lassabb terjedés", "Propagare mai lentă", lang),
          q4("Geringere Amplitude", "Lower amplitude", "Kisebb amplitúdó", "Amplitudine mai mică", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "waves", "infrared_uv",
        q4(
          "UV-Strahlung kann Hautkrebs verursachen. Welcher Sonnenschutzmechanismus schützt vor UV?",
          "UV radiation can cause skin cancer. Which sun protection mechanism protects from UV?",
          "Az UV-sugárzás bőrrákot okozhat. Melyik napvédelem nyújt védelmet az UV ellen?",
          "Radiația UV poate causa cancer de piele. Ce mecanism de protecție solară protejează de UV?",
          lang
        ),
        q4("UV-Filter in Sonnencreme", "UV filter in sunscreen", "UV-szűrő napsütésben", "Filtru UV în creme solare", lang),
        [
          q4("Infrarotreflexion", "Infrared reflection", "Infravörös visszaverődés", "Reflexia infraroșie", lang),
          q4("Sichtbares Licht Absorption", "Visible light absorption", "Látható fény felszívódása", "Absorpția luminii vizibile", lang),
          q4("Radiowellen Blockade", "Radio wave blockade", "Rádiohullám blokád", "Blocare de unde radio", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "waves", "infrared_uv",
        q4(
          "Welche Region des EM-Spektrums liegt zwischen IR und sichtbarem Licht?",
          "Which region of the EM spectrum lies between IR and visible light?",
          "Az EM-spektrum melyik régiója van az IR és a látható fény között?",
          "Care regiune a spectrului EM se află între IR și lumina vizibilă?",
          lang
        ),
        q4("Keine (sie sind direkt benachbart)", "None (they are adjacent)", "Egyik sem (közvetlenül szomszédosak)", "Nici una (sunt adiacente)", lang),
        [
          q4("Röntgenstrahlen", "X-rays", "Röntgensugarak", "Raze X", lang),
          q4("Mikrowellen", "Microwaves", "Mikrohullámok", "Microunde", lang),
          q4("Ultraviolett", "Ultraviolet", "Ultraibolya", "Ultraviolet", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "waves", "infrared_uv",
        q4(
          "Thermische Kameras sehen im Infrarotbereich. Was zeigen sie?",
          "Thermal cameras see in the infrared range. What do they show?",
          "A hőkamerák az infravörös tartományban látnak. Mit mutatnak?",
          "Camerele termice văd în domeniul infraroșu. Ce arată?",
          lang
        ),
        q4("Wärmeverlust / Temperaturverteilung", "Heat loss / Temperature distribution", "Hővesztség / Hőmérséklet-eloszlás", "Pierdere de căldură / Distribuția temperaturii", lang),
        [
          q4("Optische Täuschungen", "Optical illusions", "Optikai illúziók", "Iluzia optică", lang),
          q4("Chemische Reaktionen", "Chemical reactions", "Kémiai reakciók", "Reacții chimice", lang),
          q4("Magnetische Felder", "Magnetic fields", "Mágneses mezők", "Câmpuri magnetice", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateInfraredUVTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  for (let i = 0; i < 8; i++) {
    const type = pick(["IR", "UV"], mulberry32(seed + i));
    qs.push(createTyping(
      "waves", "infrared_uv",
      q4(
        `${type === "IR" ? "Infrarote" : "Ultraviolette"} Strahlung ist ${type === "IR" ? "Wärmestrahlung" : "energiereich"}. (true/false)`,
        `${type} radiation is ${type === "IR" ? "heat radiation" : "high-energy"}. (true/false)`,
        `${type === "IR" ? "Infravörös" : "Ultraibolya"} sugárzás ${type === "IR" ? "hősugarazás" : "nagy energiájú"}. (igaz/hamis)`,
        `Radiația ${type} este ${type === "IR" ? "radiație termică" : "cu energie ridicată"}. (adevărat/fals)`,
        lang
      ),
      ["true", "igaz", "adevărat", "wahr"]
    ));
  }

  return qs;
}

// ─── WAVE INTERFERENCE ────────────────────────────────────────────────────

function generateWaveInterferenceMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "waves", "wave_interference",
        q4(
          "Was ist Interferenz von Wellen?",
          "What is interference of waves?",
          "Mi a hullámok interferenciája?",
          "Ce este interferența undelor?",
          lang
        ),
        q4("Wenn zwei Wellen sich überlagern und addieren oder subtrahieren", "When two waves overlap and add or subtract", "Amikor két hullám átfedésben van és összeadódik vagy kivonja", "Când două unde se suprapun și se adună sau scad", lang),
        [
          q4("Wenn Wellen die Richtung ändern", "When waves change direction", "Amikor a hullámok irányt változtatnak", "Când undele schimbă direcția", lang),
          q4("Wenn Wellen absorbiert werden", "When waves are absorbed", "Amikor a hullámok felszívódnak", "Când undele sunt absorbite", lang),
          q4("Wenn Wellen schneller werden", "When waves speed up", "Amikor a hullámok gyorsabbá válnak", "Când undele accelerează", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "waves", "wave_interference",
        q4(
          "Konstruktive Interferenz tritt auf, wenn zwei Wellenberge sich treffen. Was passiert?",
          "Constructive interference occurs when two crests meet. What happens?",
          "Konstruktív interferencia akkor fordul elő, amikor két hullámhegy találkozik. Mi történik?",
          "Interferența constructivă apare când două creste se întâlnesc. Ce se întâmplă?",
          lang
        ),
        q4("Die Amplituden addieren sich, Ergebnis ist größer", "Amplitudes add up, result is larger", "Az amplitúdók összeadódnak, az eredmény nagyobb", "Amplitudinile se adună, rezultatul este mai mare", lang),
        [
          q4("Die Amplituden subtrahieren sich", "Amplitudes subtract", "Az amplitúdók kivonódnak", "Amplitudinile se scad", lang),
          q4("Die Wellen vernichten sich", "Waves cancel out", "A hullámok kiiktatják egymást", "Undele se anulează", lang),
          q4("Die Frequenz verdoppelt sich", "Frequency doubles", "A frekvencia megduplázódik", "Frecvența se dublează", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "waves", "wave_interference",
        q4(
          "Destruktive Interferenz tritt auf, wenn ein Wellenberg und ein Wellental sich treffen. Das Ergebnis?",
          "Destructive interference occurs when a crest and trough meet. The result?",
          "Destruktív interferencia akkor fordul elő, amikor hullámhegy és hullámvölgy találkozik. Az eredmény?",
          "Interferența distructivă apare când o creastă și o depresiune se întâlnesc. Rezultatul?",
          lang
        ),
        q4("Die Amplituden kompensieren sich, teilweise oder vollständig", "Amplitudes cancel, partially or completely", "Az amplitúdók kiiktatják egymást, részlegesen vagy teljesen", "Amplitudinile se anulează, parțial sau complet", lang),
        [
          q4("Die Amplituden addieren sich doppelt", "Amplitudes double add", "Az amplitúdók duplán összeadódnak", "Amplitudinile se adună de două ori", lang),
          q4("Die Wellen verschwinden sofort", "Waves disappear immediately", "A hullámok azonnal eltűnnek", "Undele dispar imediat", lang),
          q4("Die Wellenlänge wird größer", "Wavelength increases", "A hullámhossz növekszik", "Lungimea de undă se mărește", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "waves", "wave_interference",
        q4(
          "Doppelspalt-Experiment zeigt Interferenz. Was sieht man auf einem Schirm?",
          "Double-slit experiment shows interference. What appears on a screen?",
          "A kétréses kísérlet interferenciát mutat. Mit látunk a képernyőn?",
          "Experimentul cu dublu fantă arată interferență. Ce apare pe un ecran?",
          lang
        ),
        q4("Alternating bright and dark bands (stripes)", "Alternating bright and dark bands", "Váltakozó világos és sötét sávok", "Benzi alternante luminoase și întunecate", lang),
        [
          q4("Nur eine helle Linie in der Mitte", "Only one bright line in the center", "Csak egy fényes vonal a közepén", "Doar o linie luminoasă în centru", lang),
          q4("Eine gleichmäßig helle Oberfläche", "Uniformly bright surface", "Egyenletesen világos felület", "Suprafață uniform luminoasă", lang),
          q4("Ein dunkler Schirm ohne Muster", "Dark screen with no pattern", "Sötét képernyő minta nélkül", "Ecran întunecat fără model", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "waves", "wave_interference",
        q4(
          "Interferenzmuster entstehen auch bei Schallwellen in einem Raum. Welche Bedingung muss erfüllt sein?",
          "Interference patterns also occur with sound waves in a room. What condition must be met?",
          "Interferenciamintázatok keletkeznek egy szobában a hanghullámokkal is. Milyen feltétel szükséges?",
          "Modelele de interferență apar și cu unde sonore într-o cameră. Ce condiție trebuie îndeplinită?",
          lang
        ),
        q4("Die Wellen müssen kohärent sein (samme Frequenz, Phase)", "Waves must be coherent (same frequency, phase)", "A hullámoknak koherenségenek kell lenni (ugyanaz a frekvencia, fázis)", "Undele trebuie să fie coerente (aceeași frecvență, fază)", lang),
        [
          q4("Die Wellen müssen unterschiedliche Frequenzen haben", "Waves must have different frequencies", "A hullámoknak különböző frekvenciákkal kell rendelkezniük", "Undele trebuie să aibă frecvențe diferite", lang),
          q4("Die Schallgeschwindigkeit muss null sein", "Sound speed must be zero", "A hangsebességnek nullának kell lennie", "Viteza sunetului trebuie să fie zero", lang),
          q4("Der Raum muss vollkommen dunkel sein", "The room must be completely dark", "A szobának teljesen sötétnek kell lennie", "Camera trebuie să fie complet întunecată", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateWaveInterferenceTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  for (let i = 0; i < 8; i++) {
    const type = pick(["konstruktiv", "destruktiv"], mulberry32(seed + i));
    qs.push(createTyping(
      "waves", "wave_interference",
      q4(
        `${type === "konstruktiv" ? "Konstruktive" : "Destruktive"} Interferenz: Wellenberge treffen auf ${type === "konstruktiv" ? "Wellenberge" : "Wellentäler"}. (konstruktiv/destruktiv)`,
        `${type === "konstruktiv" ? "Constructive" : "Destructive"} interference: Crests meet ${type === "konstruktiv" ? "crests" : "troughs"}. (constructive/destructive)`,
        `${type === "konstruktiv" ? "Konstruktív" : "Destruktív"} interferencia: Hullámhegyek találkoznak ${type === "konstruktiv" ? "hullámhegyekkel" : "hullámvölgyekkel"}.`,
        `${type === "konstruktiv" ? "Constructivă" : "Distructivă"} interferență: Crestele se întâlnesc ${type === "konstruktiv" ? "cu crestele" : "cu depresiunile"}. (constructivă/distructivă)`,
        lang
      ),
      ["konstruktiv", "constructive", "konstruktív", "constructivă"]
    ));
  }

  return qs;
}

// ─── EXPORT ALL GENERATORS ────────────────────────────────────────────────

export const K7_WAVES_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  // Wave equation
  wave_equation: (lang = "en", seed = 0) => [...generateWaveEquationMCQ(lang, seed), ...generateWaveEquationTyping(lang, seed)],
  wave_equation_mcq: (lang = "en", seed = 0) => generateWaveEquationMCQ(lang, seed),
  wave_equation_typing: (lang = "en", seed = 0) => generateWaveEquationTyping(lang, seed),

  // EM spectrum
  electromagnetic_spectrum: (lang = "en", seed = 0) => [...generateEMSpectrumMCQ(lang, seed), ...generateEMSpectrumTyping(lang, seed)],
  electromagnetic_spectrum_mcq: (lang = "en", seed = 0) => generateEMSpectrumMCQ(lang, seed),
  electromagnetic_spectrum_typing: (lang = "en", seed = 0) => generateEMSpectrumTyping(lang, seed),

  // IR & UV
  infrared_uv: (lang = "en", seed = 0) => [...generateInfraredUVMCQ(lang, seed), ...generateInfraredUVTyping(lang, seed)],
  infrared_uv_mcq: (lang = "en", seed = 0) => generateInfraredUVMCQ(lang, seed),
  infrared_uv_typing: (lang = "en", seed = 0) => generateInfraredUVTyping(lang, seed),

  // Wave interference
  wave_interference: (lang = "en", seed = 0) => [...generateWaveInterferenceMCQ(lang, seed), ...generateWaveInterferenceTyping(lang, seed)],
  wave_interference_mcq: (lang = "en", seed = 0) => generateWaveInterferenceMCQ(lang, seed),
  wave_interference_typing: (lang = "en", seed = 0) => generateWaveInterferenceTyping(lang, seed),
};
