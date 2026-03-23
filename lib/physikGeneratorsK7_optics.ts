// ─── K7 PHYSICS GENERATORS: OPTICS ─────────────────────────────────────────
// "Optik" theme — Lenses, image formation, eye optics, optical instruments
// Grade 7 (Klasse 7 / 8th grade physics)
//
// 5 subtopics × ~70 questions (7 MCQ + 8 typing per subtopic)
// Lens formula: 1/f = 1/do + 1/di
// Magnification: M = di/do = hi/ho
// Power: P = 1/f (in diopters)

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

// ─── LENSES: CONVEX ───────────────────────────────────────────────────────

function generateConvexLensMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  // Convex lens properties
  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "optics", "lenses_convex",
        q4(
          "Welche Linsenform ist konvex?",
          "Which lens shape is convex?",
          "Melyik lencseforma konvex?",
          "Ce formă de lentilă este convexă?",
          lang
        ),
        q4("Nach außen gewölbt", "Bulging outward", "Kifelé domborodó", "Bombată spre exterior", lang),
        [
          q4("Nach innen gewölbt", "Caved inward", "Befelé domborodó", "Concavă", lang),
          q4("Flach", "Flat", "Lapos", "Plană", lang),
          q4("Unregelmäßig", "Irregular", "Szabálytalan", "Neregulată", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      const f = 10 + Math.floor(rng() * 30);
      qs.push(createMCQ(
        "optics", "lenses_convex",
        q4(
          `Eine Sammellinse hat Brennweite f = ${f} cm. Wo entsteht ein reelles Bild?`,
          `A converging lens has focal length f = ${f} cm. Where is a real image formed?`,
          `Egy gyűjtőlencse gyújtótávolsága f = ${f} cm. Hol képződik valódi kép?`,
          `O lentilă convergentă are lungimea focală f = ${f} cm. Unde se formează imaginea reală?`,
          lang
        ),
        q4("Túl a 2f pontnak", "Beyond 2f point", "A 2f pont túloldalán", "Dincolo de punctul 2f", lang),
        [
          q4("Az f és 2f között", "Between f and 2f", "Az f és 2f között", "Între f și 2f", lang),
          q4("Az f ponton", "At f point", "Az f pontban", "La punctul f", lang),
          q4("Az objektív előtt", "In front of lens", "A lencse előtt", "În fața lentilei", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "optics", "lenses_convex",
        q4(
          "Wie ändert sich die Brennweite einer Linse, wenn die Dicke zunimmt?",
          "How does focal length change as lens thickness increases?",
          "Hogyan változik a gyújtótávolság, ha a lencse vastagsága nő?",
          "Cum se schimbă lungimea focală pe măsură ce grosimea lentilei crește?",
          lang
        ),
        q4("Sie wird kürzer", "It becomes shorter", "Rövidebb lesz", "Se scurtează", lang),
        [
          q4("Sie bleibt gleich", "Stays the same", "Ugyanolyan marad", "Rămâne la fel", lang),
          q4("Sie wird länger", "It becomes longer", "Hosszabb lesz", "Se lungește", lang),
          q4("Sie wird null", "Becomes zero", "Nullává válik", "Devine zero", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "optics", "lenses_convex",
        q4(
          "Eine Sammellinse fokussiert parallele Lichtstrahlen in ihrem Brennpunkt. Was ist die optische Kraft?",
          "A converging lens focuses parallel light rays at its focal point. What is optical power?",
          "Egy gyűjtőlencse a párhuzamos sugarakat a gyújtópontjában fókuszálja. Mi a dioptriaérték?",
          "O lentilă convergentă focalizează razele paralele în punctul focal. Ce este puterea optică?",
          lang
        ),
        q4("P = 1/f (dioptrije)", "P = 1/f (diopters)", "P = 1/f (dioptria)", "P = 1/f (dioptrii)", lang),
        [
          q4("P = f (Meter)", "P = f (meters)", "P = f (méter)", "P = f (metri)", lang),
          q4("P = 2f", "P = 2f", "P = 2f", "P = 2f", lang),
          q4("P = f²", "P = f²", "P = f²", "P = f²", lang),
        ],
        rng
      ));
    } else if (idx === 4) {
      qs.push(createMCQ(
        "optics", "lenses_convex",
        q4(
          "Welcher Ausdruck beschreibt die Linsengleichung?",
          "Which expression describes the lens equation?",
          "Melyik kifejezés írja le a lencseegyenletet?",
          "Care expresie descrie ecuația lentilei?",
          lang
        ),
        q4("1/f = 1/do + 1/di", "1/f = 1/do + 1/di", "1/f = 1/do + 1/di", "1/f = 1/do + 1/di", lang),
        [
          q4("f = do + di", "f = do + di", "f = do + di", "f = do + di", lang),
          q4("1/f = do + di", "1/f = do + di", "1/f = do + di", "1/f = do + di", lang),
          q4("f = 1/do - 1/di", "f = 1/do - 1/di", "f = 1/do - 1/di", "f = 1/do - 1/di", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateConvexLensTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed + 1000);
  const qs: CurriculumTyping[] = [];

  const examples = [
    { do: 30, f: 10, di: 15, ans: "15" },
    { do: 20, f: 5, di: 6.67, ans: "6.67" },
    { do: 40, f: 8, di: 10, ans: "10" },
    { do: 50, f: 10, di: 12.5, ans: "12.5" },
    { do: 25, f: 5, di: 6.25, ans: "6.25" },
  ];

  for (let i = 0; i < 8; i++) {
    const ex = pick(examples, rng);
    qs.push(createTyping(
      "optics", "lenses_convex",
      q4(
        `Objekt bei ${ex.do}cm vor Linse (f=${ex.f}cm). Bildweite? Antwort in cm:`,
        `Object at ${ex.do}cm from lens (f=${ex.f}cm). Image distance? Answer in cm:`,
        `Tárgy ${ex.do}cm-re a lencsétől (f=${ex.f}cm). Képtávolság? Válasz cm-ben:`,
        `Obiect la ${ex.do}cm de lentilă (f=${ex.f}cm). Distanța imaginii? Răspuns în cm:`,
        lang
      ),
      ex.ans
    ));
  }

  return qs;
}

// ─── LENSES: CONCAVE ───────────────────────────────────────────────────────

function generateConcaveLensMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "optics", "lenses_concave",
        q4(
          "Welche Linsenform ist konkav (Zerstreuungslinse)?",
          "Which lens shape is concave (diverging lens)?",
          "Melyik lencseforma konkáv (szórólencsе)?",
          "Care formă de lentilă este concavă (lentilă divergentă)?",
          lang
        ),
        q4("Nach innen gewölbt", "Caved inward", "Befelé domborodó", "Concavă spre interior", lang),
        [
          q4("Nach außen gewölbt", "Bulging outward", "Kifelé domborodó", "Bombată spre exterior", lang),
          q4("Flach", "Flat", "Lapos", "Plană", lang),
          q4("Sphärisch", "Spherical", "Gömb alakú", "Sferică", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "optics", "lenses_concave",
        q4(
          "Eine Zerstreuungslinse erzeugt immer welche Art von Bild?",
          "A diverging lens always produces what type of image?",
          "Egy szórólencsе mindig milyen képet hoz létre?",
          "O lentilă divergentă produce întotdeauna ce tip de imagine?",
          lang
        ),
        q4("Virtuell, aufrecht, verkleinert", "Virtual, upright, reduced", "Virtuális, felfelé fordított, csökkentett", "Virtuală, dreaptă, redusă", lang),
        [
          q4("Reell, umgekehrt, vergrößert", "Real, inverted, magnified", "Valódi, fordított, nagyított", "Reală, inversată, mărită", lang),
          q4("Reell, aufrecht, verkleinert", "Real, upright, reduced", "Valódi, felfelé fordított, csökkentett", "Reală, dreaptă, redusă", lang),
          q4("Virtuell, umgekehrt, vergrößert", "Virtual, inverted, enlarged", "Virtuális, fordított, nagyított", "Virtuală, inversată, mărită", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "optics", "lenses_concave",
        q4(
          "Wie ist das Vorzeichen der Brennweite einer Zerstreuungslinse?",
          "What is the sign of focal length for a diverging lens?",
          "Mi a szórólencsе gyújtótávolságának előjele?",
          "Care este semnul lungimii focale a unei lentile divergente?",
          lang
        ),
        q4("Negativ", "Negative", "Negatív", "Negativ", lang),
        [
          q4("Positiv", "Positive", "Pozitív", "Pozitiv", lang),
          q4("Null", "Zero", "Nulla", "Zero", lang),
          q4("Komplex", "Complex", "Komplex", "Complex", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "optics", "lenses_concave",
        q4(
          "Warum werden Zerstreuungslinsen in Brillen für Kurzsichtigkeit verwendet?",
          "Why are diverging lenses used in glasses for myopia (shortsightedness)?",
          "Miért használnak szórólencsét rövidlátás korrekciójához?",
          "De ce se folosesc lentile divergente în ochelari pentru miopie?",
          lang
        ),
        q4("Sie verringern die Brechkraft der Augen", "They reduce eye focusing power", "Csökkentik a szem fénytörő képességét", "Ele reduc puterea de focalizare a ochilor", lang),
        [
          q4("Sie verstärken die Augenmuskulatur", "They strengthen eye muscles", "Erősítik a szem izmait", "Ele întăresc mușchii ochilor", lang),
          q4("Sie heilen Astigmatismus", "They cure astigmatism", "Gyógyítják az astigmatizmust", "Vindecă astigmatismul", lang),
          q4("Sie vergrößern die Pupillen", "They enlarge pupils", "Megverőítik a pupillákat", "Ele măresc pupilele", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "optics", "lenses_concave",
        q4(
          "Die Linsenmacher bezeichnen Zerstreuungslinsen oft als negativ oder minus. Warum?",
          "Lens makers often call diverging lenses negative or minus. Why?",
          "Az lencsekészítők a szórólencseket gyakran negatívnak vagy minusznak hívják. Miért?",
          "Producătorii de lentile numesc adesea lentilele divergente negative sau minus. De ce?",
          lang
        ),
        q4("Weil ihre Brennweite negativ ist", "Because their focal length is negative", "Mert a gyújtótávolságuk negatív", "Pentru că lungimea lor focală este negativă", lang),
        [
          q4("Weil sie Licht absorbieren", "Because they absorb light", "Mert felszívják a fényt", "Pentru că absorb lumina", lang),
          q4("Weil sie Licht streuen", "Because they scatter light", "Mert szóródnak a fényt", "Pentru că împrăștie lumina", lang),
          q4("Weil sie dunkel gefärbt sind", "Because they are dark colored", "Mert sötéten vannak festve", "Pentru că sunt colorate în negru", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateConcaveLensTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed + 2000);
  const qs: CurriculumTyping[] = [];

  for (let i = 0; i < 8; i++) {
    const f = -(5 + Math.floor(rng() * 20));
    qs.push(createTyping(
      "optics", "lenses_concave",
      q4(
        `Zerstreuungslinse mit f=${f}cm. Brennweite negativ? (ja/nein)`,
        `Diverging lens with f=${f}cm. Is focal length negative? (yes/no)`,
        `Szórólencsе f=${f}cm-vel. Gyújtótávolság negatív? (igen/nem)`,
        `Lentilă divergentă cu f=${f}cm. Lungimea focală este negativă? (da/nu)`,
        lang
      ),
      ["ja", "yes", "igen", "da"]
    ));
  }

  return qs;
}

// ─── IMAGE FORMATION ───────────────────────────────────────────────────────

function generateImageFormationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "optics", "image_formation",
        q4(
          "Wie heißt das Verhältnis von Bildgröße zu Objektgröße?",
          "What is the ratio of image size to object size called?",
          "A kép és a tárgy méretének aránya hogyan hívják?",
          "Cum se numește raportul dintre dimensiunea imaginii și dimensiunea obiectului?",
          lang
        ),
        q4("Vergrößerung / Magnification", "Magnification", "Nagyítás / Magnification", "Mărire / Magnification", lang),
        [
          q4("Brechung", "Refraction", "Fénytörés", "Refracție", lang),
          q4("Reflexion", "Reflection", "Visszaverődés", "Reflexie", lang),
          q4("Dispersion", "Dispersion", "Diszperzió", "Dispersie", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "optics", "image_formation",
        q4(
          "Welche Bedingung führt zu einem reellen, umgekehrten Bild bei einer Sammellinse?",
          "What condition produces a real, inverted image with a converging lens?",
          "Milyen feltétel hoz létre valódi, fordított képet gyűjtőlencséve?",
          "Ce condiție produce o imagine reală, inversată cu o lentilă convergentă?",
          lang
        ),
        q4("Objekt außerhalb von 2f", "Object beyond 2f", "Tárgy a 2f-en kívül", "Obiect dincolo de 2f", lang),
        [
          q4("Objekt zwischen f und 2f", "Object between f and 2f", "Tárgy f és 2f között", "Obiect între f și 2f", lang),
          q4("Objekt in f", "Object at f", "Tárgy az f-ben", "Obiect la f", lang),
          q4("Objekt vor f", "Object before f", "Tárgy az f előtt", "Obiect înaintea f", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "optics", "image_formation",
        q4(
          "Die Magnification ist -2. Was bedeutet das Minuszeichen?",
          "The magnification is -2. What does the negative sign mean?",
          "A nagyítás -2. Mit jelent a mínusz jel?",
          "Mărirea este -2. Ce înseamnă semnul negativ?",
          lang
        ),
        q4("Das Bild ist umgekehrt", "The image is inverted", "A kép fordított", "Imaginea este inversată", lang),
        [
          q4("Das Bild ist halb so groß", "The image is half as large", "A kép fele olyan nagy", "Imaginea este jumătate din mărime", lang),
          q4("Das Bild ist virtuell", "The image is virtual", "A kép virtuális", "Imaginea este virtuală", lang),
          q4("Das Licht wird absorbiert", "Light is absorbed", "A fény felszívódik", "Lumina este absorbită", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "optics", "image_formation",
        q4(
          "Bei einer Zerstreuungslinse entstehen nur welche Art von Bildern?",
          "With a diverging lens, only what type of images are formed?",
          "Szórólencsénél csak milyen típusú képek keletkeznek?",
          "Cu o lentilă divergentă, se formează doar ce tip de imagini?",
          lang
        ),
        q4("Virtuelle, aufrechte, verkleinerte", "Virtual, upright, reduced", "Virtuális, felfelé fordított, csökkentett", "Virtuale, drepte, reduse", lang),
        [
          q4("Reelle und virtuelle", "Real and virtual", "Valódi és virtuális", "Reale și virtuale", lang),
          q4("Reelle, umgekehrte, vergrößerte", "Real, inverted, magnified", "Valódi, fordított, nagyított", "Reale, inverse, mărite", lang),
          q4("Nur reelle", "Only real", "Csak valódi", "Doar reale", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "optics", "image_formation",
        q4(
          "Die Vergrößerung M = di/do. Wenn di = do, dann M = ?",
          "Magnification M = di/do. If di = do, then M = ?",
          "Nagyítás M = di/do. Ha di = do, akkor M = ?",
          "Mărire M = di/do. Dacă di = do, atunci M = ?",
          lang
        ),
        q4("1", "1", "1", "1", lang),
        [
          q4("2", "2", "2", "2", lang),
          q4("0", "0", "0", "0", lang),
          q4("-1", "-1", "-1", "-1", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateImageFormationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  for (let i = 0; i < 8; i++) {
    qs.push(createTyping(
      "optics", "image_formation",
      q4(
        `Bild ist real, umgekehrt. Welche Linse? (konvex/konkav)`,
        `Image is real, inverted. What lens type? (convex/concave)`,
        `A kép valódi, fordított. Milyen lencsétípus? (konvex/konkáv)`,
        `Imaginea este reală, inversată. Ce tip de lentilă? (convexă/concavă)`,
        lang
      ),
      ["konvex", "convex", "konvex", "convexă"]
    ));
  }

  return qs;
}

// ─── EYE OPTICS ───────────────────────────────────────────────────────────

function generateEyeOpticsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "optics", "eye_optics",
        q4(
          "Das Auge ist optisch ähnlich wie welches optisches Gerät?",
          "The eye is optically similar to which optical device?",
          "A szem optikai szempontból milyen eszközhöz hasonló?",
          "Ochiul este optic similar cu ce dispozitiv optic?",
          lang
        ),
        q4("Eine Kamera", "A camera", "Egy fényképezőgép", "O cameră", lang),
        [
          q4("Ein Mikroskop", "A microscope", "Egy mikroszkóp", "Un microscop", lang),
          q4("Ein Teleskop", "A telescope", "Egy távcső", "Un telescop", lang),
          q4("Eine Lupe", "A magnifying glass", "Egy nagyító", "O lupă", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "optics", "eye_optics",
        q4(
          "Welcher Teil des Auges stellt das Licht scharf ein (fokussiert)?",
          "Which part of the eye adjusts focus (focusing)?",
          "A szem melyik része állítja be a fókuszt?",
          "Ce parte a ochiului ajustează focalizarea?",
          lang
        ),
        q4("Die Linse / Crystalline lens", "The lens", "A lencse", "Cristalinul", lang),
        [
          q4("Die Hornhaut / Cornea", "The cornea", "A szaruhártya", "Cornea", lang),
          q4("Die Netzhaut / Retina", "The retina", "A retina", "Retina", lang),
          q4("Die Iris", "The iris", "Az írisz", "Iris", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "optics", "eye_optics",
        q4(
          "Bei Kurzsichtigkeit können Nahgegenstände scharf gesehen werden, aber Fernobjekte sind verschwommen. Wo fokussiert das Licht?",
          "In myopia (shortsightedness), near objects are clear but distant objects blur. Where does light focus?",
          "Rövidlátásban a közeli tárgyak élesek, de a távoli elmosódottak. Hol fókuszálódik a fény?",
          "La miopie, obiectele apropiate sunt clare, dar cele îndepărtate sunt neclar. Unde se focalizează lumina?",
          lang
        ),
        q4("Vor der Netzhaut", "In front of retina", "A retina előtt", "Înainte de retină", lang),
        [
          q4("Auf der Netzhaut", "On the retina", "A retinán", "Pe retină", lang),
          q4("Hinter der Netzhaut", "Behind retina", "A retina mögött", "În spatele retinei", lang),
          q4("In der Linse", "In the lens", "A lencséban", "În cristaldin", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "optics", "eye_optics",
        q4(
          "Wie wird Weitsichtigkeit (Hyperopie) korrigiert?",
          "How is farsightedness (hyperopia) corrected?",
          "Hogyan korrigálják a távollátást?",
          "Cum se corectează prezbiopia (hipermetropia)?",
          lang
        ),
        q4("Mit Sammellinsen (Plus)", "With converging lenses (Plus)", "Gyűjtőlencsékkel (Plus)", "Cu lentile convergente (Plus)", lang),
        [
          q4("Mit Zerstreuungslinsen (Minus)", "With diverging lenses (Minus)", "Szórólencsékkel (Minus)", "Cu lentile divergente (Minus)", lang),
          q4("Mit Zylinderlinsen", "With cylindrical lenses", "Hengeres lencsékkel", "Cu lentile cilindrice", lang),
          q4("Sie wird nicht korrigiert", "It is not corrected", "Nem korrigálható", "Nu se corectează", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "optics", "eye_optics",
        q4(
          "Die Pupille kontrahiert und dilatiert, um was zu kontrollieren?",
          "The pupil contracts and dilates to control what?",
          "A pupilla összehúzódik és tágul, hogy mit szabályozzon?",
          "Pupila se contractă și se dilatează pentru a controla ce?",
          lang
        ),
        q4("Die Lichtmenge im Auge", "The amount of light entering", "A szemen keresztülható fénymennyi", "Cantitatea de lumină care intră", lang),
        [
          q4("Die Fokussierfähigkeit", "The focusing ability", "A fókuszáló képességet", "Capacitatea de focalizare", lang),
          q4("Die Farberkennung", "Color perception", "A szín felismerést", "Percepția culorilor", lang),
          q4("Die Bewegung des Auges", "Eye movement", "A szem mozgását", "Mișcarea ochilor", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateEyeOpticsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  for (let i = 0; i < 8; i++) {
    const condition = pick(["Myopie / Myopia", "Hyperopie / Hyperopia", "Astigmatismus / Astigmatism", "Presbyopie / Presbyopia"], mulberry32(seed + i));
    qs.push(createTyping(
      "optics", "eye_optics",
      q4(
        `Auge fokussiert Licht vor der Netzhaut. Welche Sehstörung? (Myopia/Hyperopia/...)`,
        `Eye focuses light in front of retina. Which vision defect? (Myopia/Hyperopia/...)`,
        `A szem a retina előtt fókuszálja a fényt. Milyen látáshiba? (Myopia/Hyperopia/...)`,
        `Ochiul focalizează lumina în fața retinei. Ce defect de vedere? (Myopia/Hyperopia/...)`,
        lang
      ),
      ["Myopia", "Myopie", "myopia", "miopie"]
    ));
  }

  return qs;
}

// ─── OPTICAL INSTRUMENTS ──────────────────────────────────────────────────

function generateOpticalInstrumentsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    const idx = i % 5;
    if (idx === 0) {
      qs.push(createMCQ(
        "optics", "optical_instruments",
        q4(
          "Ein Mikroskop besteht aus einer Objektiv- und einer Okularlinse. Wie sind sie angeordnet?",
          "A microscope has objective and eyepiece lenses. How are they arranged?",
          "Egy mikroszkóp objektív és okulár lencsékből áll. Hogyan vannak elrendezve?",
          "Un microscop are lentile obiectiv și ocular. Cum sunt dispuse?",
          lang
        ),
        q4("Beide Sammellinsen in Serie", "Both converging lenses in series", "Mindkét gyűjtőlencsе sorban", "Ambele lentile convergente în serie", lang),
        [
          q4("Eine Sammel-, eine Zerstreuungslinse", "One converging, one diverging", "Egy gyűjtő-, egy szórólencse", "Una convergentă, una divergentă", lang),
          q4("Beide Zerstreuungslinsen", "Both diverging lenses", "Mindkét szórólencse", "Ambele lentile divergente", lang),
          q4("Parallel angeordnet", "Arranged in parallel", "Párhuzamosan elrendezve", "Aranjate în paralel", lang),
        ],
        rng
      ));
    } else if (idx === 1) {
      qs.push(createMCQ(
        "optics", "optical_instruments",
        q4(
          "Die Vergrößerung eines Mikroskops ist das Produkt zweier Vergrößerungen. Welcher zwei?",
          "The magnification of a microscope is the product of two magnifications. Which two?",
          "A mikroszkóp nagyítása két nagyítás szorzata. Melyik kettő?",
          "Mărirea unui microscop este produsul a două măriri. Care sunt acelea?",
          lang
        ),
        q4("Objektiv × Okular", "Objective × Eyepiece", "Objektív × Okulár", "Obiectiv × Ocular", lang),
        [
          q4("Objektiv + Okular", "Objective + Eyepiece", "Objektív + Okulár", "Obiectiv + Ocular", lang),
          q4("Objektiv / Okular", "Objective / Eyepiece", "Objektív / Okulár", "Obiectiv / Ocular", lang),
          q4("Okular / Objektiv", "Eyepiece / Objective", "Okulár / Objektív", "Ocular / Obiectiv", lang),
        ],
        rng
      ));
    } else if (idx === 2) {
      qs.push(createMCQ(
        "optics", "optical_instruments",
        q4(
          "Ein Teleskop für die Beobachtung von Objekten im Weltall besteht aus welchen Linsentypen?",
          "A telescope for observing objects in space consists of what lens types?",
          "A távcsé az űr megfigyelésére milyen lencsétípusokból áll?",
          "Un telescop pentru observarea obiectelor din spațiu este format din ce tipuri de lentile?",
          lang
        ),
        q4("Große Objektivlinse + kleine Okularlinse (beide konvex)", "Large objective + small eyepiece (both convex)", "Nagy objektív + kis okulár (mindkettő konvex)", "Obiectiv mare + ocular mic (ambele convexe)", lang),
        [
          q4("Beide konkav", "Both concave", "Mindkettő konkáv", "Ambele concave", lang),
          q4("Konkave Objektiv-, konvexe Okularlinse", "Concave objective, convex eyepiece", "Konkáv objektív, konvex okulár", "Obiectiv concav, ocular convex", lang),
          q4("Eine Linse + ein Spiegel", "One lens + one mirror", "Egy lencse + egy tükör", "O lentilă + o oglindă", lang),
        ],
        rng
      ));
    } else if (idx === 3) {
      qs.push(createMCQ(
        "optics", "optical_instruments",
        q4(
          "Die Brennweite der Okularlinse eines Teleskops ist kurz. Was folgt daraus für die Vergrößerung?",
          "The focal length of a telescope's eyepiece is short. What does this imply for magnification?",
          "A távcső okulárjának gyújtótávolsága rövid. Mit jelent ez a nagyításra?",
          "Lungimea focală a ocularului telescopului este scurtă. Ce implică aceasta pentru mărire?",
          lang
        ),
        q4("Höhere Vergrößerung", "Higher magnification", "Magasabb nagyítás", "Mărire mai mare", lang),
        [
          q4("Niedrigere Vergrößerung", "Lower magnification", "Alacsonyabb nagyítás", "Mărire mai mică", lang),
          q4("Keine Auswirkung", "No effect", "Nincs hatás", "Fără efect", lang),
          q4("Schlechtere Bildqualität", "Worse image quality", "Rosszabb képminőség", "Calitate imagine mai slabă", lang),
        ],
        rng
      ));
    } else {
      qs.push(createMCQ(
        "optics", "optical_instruments",
        q4(
          "Welches optische Instrument wird verwendet, um kleine Gegenstände zu vergrößern?",
          "Which optical instrument is used to magnify small objects?",
          "Melyik optikai eszközt használnak a kis tárgyak nagyításához?",
          "Ce instrument optic se folosește pentru a mări obiectele mici?",
          lang
        ),
        q4("Lupe / Magnifying glass", "Magnifying glass", "Nagyító / Lupe", "Lupă", lang),
        [
          q4("Teleskop", "Telescope", "Távcső", "Telescop", lang),
          q4("Brille", "Glasses", "Szemüveg", "Ochelari", lang),
          q4("Prisma", "Prism", "Prizma", "Prismă", lang),
        ],
        rng
      ));
    }
  }

  return qs;
}

function generateOpticalInstrumentsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const qs: CurriculumTyping[] = [];

  const instruments = ["Mikroskop / Microscope", "Teleskop / Telescope", "Lupe / Magnifying glass", "Prismenglas / Prism binoculars"];

  for (let i = 0; i < 8; i++) {
    const instr = pick(instruments, mulberry32(seed + i));
    qs.push(createTyping(
      "optics", "optical_instruments",
      q4(
        `Verwendet Objektiv- und Okularlinsen zur Vergrößerung. Welches Instrument? (Mikroskop/Teleskop)`,
        `Uses objective and eyepiece lenses for magnification. Which instrument? (Microscope/Telescope)`,
        `Objektív és okulár lencséket használ nagyításhoz. Melyik eszköz? (Mikroszkóp/Távcső)`,
        `Folosește lentile obiectiv și ocular pentru mărire. Ce instrument? (Microscop/Telescop)`,
        lang
      ),
      ["Mikroskop", "Microscope", "microscope", "microscop"]
    ));
  }

  return qs;
}

// ─── EXPORT ALL GENERATORS ────────────────────────────────────────────────

export const K7_OPTICS_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  // Convex lenses
  lenses_convex: (lang = "en", seed = 0) => [...generateConvexLensMCQ(lang, seed), ...generateConvexLensTyping(lang, seed)],
  lenses_convex_mcq: (lang = "en", seed = 0) => generateConvexLensMCQ(lang, seed),
  lenses_convex_typing: (lang = "en", seed = 0) => generateConvexLensTyping(lang, seed),

  // Concave lenses
  lenses_concave: (lang = "en", seed = 0) => [...generateConcaveLensMCQ(lang, seed), ...generateConcaveLensTyping(lang, seed)],
  lenses_concave_mcq: (lang = "en", seed = 0) => generateConcaveLensMCQ(lang, seed),
  lenses_concave_typing: (lang = "en", seed = 0) => generateConcaveLensTyping(lang, seed),

  // Image formation
  image_formation: (lang = "en", seed = 0) => [...generateImageFormationMCQ(lang, seed), ...generateImageFormationTyping(lang, seed)],
  image_formation_mcq: (lang = "en", seed = 0) => generateImageFormationMCQ(lang, seed),
  image_formation_typing: (lang = "en", seed = 0) => generateImageFormationTyping(lang, seed),

  // Eye optics
  eye_optics: (lang = "en", seed = 0) => [...generateEyeOpticsMCQ(lang, seed), ...generateEyeOpticsTyping(lang, seed)],
  eye_optics_mcq: (lang = "en", seed = 0) => generateEyeOpticsMCQ(lang, seed),
  eye_optics_typing: (lang = "en", seed = 0) => generateEyeOpticsTyping(lang, seed),

  // Optical instruments
  optical_instruments: (lang = "en", seed = 0) => [...generateOpticalInstrumentsMCQ(lang, seed), ...generateOpticalInstrumentsTyping(lang, seed)],
  optical_instruments_mcq: (lang = "en", seed = 0) => generateOpticalInstrumentsMCQ(lang, seed),
  optical_instruments_typing: (lang = "en", seed = 0) => generateOpticalInstrumentsTyping(lang, seed),
};
