// lib/hungarianGenerators7.ts
// Hungarian Grade 7 (7. osztály) question generators - EXPANDED
// Advanced topics: Language history, rhetoric, stylistics, variants, composition, syntax, communication, media,
// literary analysis, pragmatics, multimodal texts, language creativity
// 25 subtopics: 25 MCQ generators (30 q each) + 25 typing generators (15 q each) = 1125 questions total

import type { CurriculumMCQ } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };
type MagyarTyping = CurriculumMCQ & { type: "typing" };

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string
): MagyarTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
    options: [],
    correct: -1,
  } as MagyarTyping;
}

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

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[]
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct),
  };
}

// ─── DATA LISTS ──────────────────────────────────────────────────────────────

const SOUND_CHANGES = [
  { name: "Assimiláció", example: "ml > mm (pl. elmúlt > emmúlt)" },
  { name: "Disszimiláció", example: "Hasonló hangok eltávolodnak egymástól" },
  { name: "Metatézis", example: "Hangok felcserélődnek (pl. bereg > bereg)" },
  { name: "Afarézis", example: "Szó elején levő hang eltűnik" },
  { name: "Apokópa", example: "Szó végén levő hang eltűnik" },
];

const LOANWORD_SOURCES = [
  { source: "Szláv", example: "barát, város, család" },
  { source: "Német", example: "pincér, pohár, borjú" },
  { source: "Latin", example: "deák, pap, szék" },
  { source: "Török", example: "szultán, szandál, paprika" },
  { source: "Francia", example: "modell, rovat, újság" },
];

const RHETORIC_ERRORS = [
  { name: "Ad hominem (személyeskedés)", description: "Az érvelő helyett az érv támadása" },
  { name: "Érvek többszörözése", description: "Ugyanaz az érv többszöri ismétlése" },
  { name: "Hamis dilemma", description: "Csak két lehetőség közül választás lehetősége" },
  { name: "Klasszikus körforgalom", description: "Az érv bizonyítása önmaga bizonyításával" },
  { name: "Generalizálás", description: "Egy esetre alapozott általános kijelentés" },
];

const PERSUASION_TECHNIQUES = [
  { technique: "Emocionális meggyőzés", example: "Érzelmekre apellálás" },
  { technique: "Logikai meggyőzés", example: "Érvelés és bizonyítékok" },
  { technique: "Hitelesség", example: "Szakértő ismertségére való hivatkozás" },
  { technique: "Társadalmi bizonyítás", example: "Széles elfogadottságra való hivatkozás" },
  { technique: "Szorongás keltés", example: "Félelem használata motivációként" },
];

const STYLE_LAYERS = [
  { layer: "Hivatalos stílus", context: "Jogi, adminisztratív dokumentumok" },
  { layer: "Szépirodalmi stílus", context: "Versek, regények, elbeszélések" },
  { layer: "Tudományos stílus", context: "Cikkek, tanulmányok, szakkönyvek" },
  { layer: "Közéleti/publicisztikai stílus", context: "Újságcikkek, szónoki beszédek" },
  { layer: "Hétköznapi/beszélt stílus", context: "Barátok között, családi beszélgetés" },
];

const TEXT_STYLE_ELEMENTS = [
  { element: "Szókincs", context: "Választott szavak gazdagsága" },
  { element: "Mondatszerkesztés", context: "Rövid, hosszú, összetett mondatok" },
  { element: "Figurák", context: "Metafora, hasonlat, metonímia" },
  { element: "Ritmus és dallamosság", context: "Szavak hangsúlyozása és tempója" },
  { element: "Hang- és betűalapú játékok", context: "Alliteráció, assznonancia, rím" },
];

const DIALECT_REGIONS = [
  { dialect: "Palóc nyelvjárás", region: "Észak-Magyarország (Nógrád, Gömör)" },
  { dialect: "Dunántúli nyelvjárás", region: "Dunántúl" },
  { dialect: "Alföldi nyelvjárás", region: "Alföld" },
  { dialect: "Szepesi nyelvjárás", region: "Szepesség" },
  { dialect: "Erdélyi nyelvjárás", region: "Erdély" },
];

const ARGUMENT_TEXTS = [
  { text: "A kutyák kell hogy szabadok legyenek az utcákon", stance: "Pro", reason: "Természetes szükséglet" },
  { text: "Az iskolákban kötelező az okostelefon használat", stance: "Con", reason: "Figyelem szórása" },
  { text: "A zöld energia jövője", stance: "Pro", reason: "Környezetvédelem" },
];

const JOURNALISM_TEXTS = [
  { title: "Közlekedési baleset az M3-ason", type: "Híreszerzés" },
  { title: "Az éghajlat megváltozása és következményei", type: "Analitikus cikk" },
  { title: "Interjú a város polgármesterével", type: "Interjú" },
  { title: "Szerkesztői levél az oktatási reformról", type: "Szerkesztői cikk" },
  { title: "Helyi esemény: a nyári fesztivál", type: "Tudósítás" },
];

const COMPLEX_SENTENCES = [
  { sentence: "Mivel késő volt, nem mentünk el a moziba.", type: "Alárendelő" },
  { sentence: "Olvastam és érdekes volt a könyv.", type: "Mellérendelő" },
  { sentence: "Ha időd van, gyere el a találkozóra.", type: "Alárendelő" },
  { sentence: "Szép az idő, tehát ki fogunk menni.", type: "Mellérendelő" },
  { sentence: "Mert rossz volt az időjárás, maradtunk otthon.", type: "Alárendelő" },
];

const VERBAL_COMMUNICATION = [
  { context: "Hallgatás közben", skill: "Aktív hallgatás" },
  { context: "Válaszadás", skill: "Érthető és pontos kommunikáció" },
  { context: "Kérdések felvetése", skill: "Kiegészítő kérdések feltevése" },
  { context: "Empátia kifejezése", skill: "Másik személy érzelmeire való reagálás" },
  { context: "Összehangoztás", skill: "Mindkét fél egyetértésre jutása" },
];

const NONVERBAL_COMMUNICATION = [
  { type: "Testbeszéd", example: "Testtartás, mozdulatok" },
  { type: "Szemkontaktus", example: "Tekintetetés intenzitása" },
  { type: "Gesztusok", example: "Kézmozgások és fejmozdulatok" },
  { type: "Arcmimic", example: "Arckifejezés és érzelmek" },
  { type: "Hanglejtés", example: "Szólamvastagság, ritmus, tempó" },
];

const MEDIA_TEXTS = [
  { type: "Reklám", characteristic: "Rövid, ütős, figyelemfelkeltő" },
  { type: "Hír", characteristic: "Objektív, tények alapú" },
  { type: "Vélemények rovatcikk", characteristic: "Szubjektív, érvelő" },
  { type: "Szólam", characteristic: "Vitás, érzelmi" },
  { type: "Dokumentum", characteristic: "Hosszú, alapos, adatbázis alapú" },
];

const MEDIA_MANIPULATION = [
  { technique: "Szelektív információ", example: "Csak az egyik oldal felmutatása" },
  { technique: "Túlzás", example: "Dolgok nagyítása vagy kis részletek hangsúlyozása" },
  { technique: "Direkt hazugság", example: "Nyilt hamis információ közlése" },
  { technique: "Félrevezető szövegezés", example: "Félreértelmező/torzító szövegezés" },
  { technique: "Érzelmek manipulálása", example: "Félelem vagy düh keltése" },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateHangvaltozas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik hangváltozás?"
      const sc = pick(SOUND_CHANGES, rng);
      const correct = sc.name;
      const wrong = SOUND_CHANGES.filter((s) => s.name !== correct)
        .slice(0, 3)
        .map((s) => s.name);
      q.push(createMCQ("nyelvtort", "hangvaltozas", `Melyik a ${sc.example}?`, correct, wrong));
    } else if (type === 1) {
      // "Mi történik ebben a hangváltozásban?"
      const sc = pick(SOUND_CHANGES, rng);
      const correct = sc.example;
      const wrong = SOUND_CHANGES.filter((s) => s.name !== sc.name)
        .slice(0, 3)
        .map((s) => s.example);
      q.push(createMCQ("nyelvtort", "hangvaltozas", `${sc.name} - melyik a jó leírás?`, correct, wrong));
    } else {
      // "Melyik nem hangváltozás?"
      const allItems = SOUND_CHANGES.map((s) => s.name);
      const correct = "Szóalkotás";
      const wrong = allItems.slice(0, 3);
      q.push(
        createMCQ(
          "nyelvtort",
          "hangvaltozas",
          "Melyik nem hangváltozás?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateJovenenyszszo(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik jövevényszó?"
      const ls = pick(LOANWORD_SOURCES, rng);
      const correct = ls.example.split(",")[0].trim();
      const wrongSources = LOANWORD_SOURCES.filter((l) => l.source !== ls.source);
      const wrong = wrongSources.slice(0, 3).map((l) => l.example.split(",")[0].trim());
      q.push(createMCQ("nyelvtort", "jovenényszó_haladó", `Melyik ${ls.source} jövevényszó?`, correct, wrong));
    } else if (type === 1) {
      // "Honnan származik?"
      const word = pick(["barát", "város", "pincér", "szultán", "modell"], rng);
      const sourceMap: Record<string, string> = {
        barát: "Szláv",
        város: "Szláv",
        pincér: "Német",
        szultán: "Török",
        modell: "Francia",
      };
      const correct = sourceMap[word] || "Ismeretlen";
      const wrong = ["Szláv", "Német", "Török", "Francia"].filter((s) => s !== correct).slice(0, 3);
      q.push(createMCQ("nyelvtort", "jovenényszó_haladó", `Honnan származik a "${word}" szó?`, correct, wrong));
    } else {
      // "Melyik nem jövevényszó?"
      const correct = "Madár";
      const wrong = ["Város", "Barát", "Szultán"];
      q.push(
        createMCQ(
          "nyelvtort",
          "jovenényszó_haladó",
          "Melyik nem jövevényszó?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateErvelesHalado(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik az érvelési hiba?"
      const err = pick(RHETORIC_ERRORS, rng);
      const correct = err.name;
      const wrong = RHETORIC_ERRORS.filter((e) => e.name !== correct)
        .slice(0, 3)
        .map((e) => e.name);
      q.push(createMCQ("retorika", "erveles_haladó", `Melyik érvelési hiba? ${err.description}`, correct, wrong));
    } else if (type === 1) {
      // "Miben áll a hiba?"
      const err = pick(RHETORIC_ERRORS, rng);
      const correct = err.description;
      const wrong = RHETORIC_ERRORS.filter((e) => e.name !== err.name)
        .slice(0, 3)
        .map((e) => e.description);
      q.push(createMCQ("retorika", "erveles_haladó", `${err.name} - miben áll a hiba?`, correct, wrong));
    } else {
      // "Ez hibás vagy helyes érvelés?"
      const correct = "Helyes érvelés, mivel tényeken alapul";
      const wrong = ["Ad hominem hiba", "Klasszikus körforgalom", "Hamis dilemma"];
      q.push(
        createMCQ(
          "retorika",
          "erveles_haladó",
          "Helyes vagy hibás? 'Az ember azért van, hogy gondolkozzon.'",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateMeggyozesHalado(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik meggyőzési technika?"
      const tech = pick(PERSUASION_TECHNIQUES, rng);
      const correct = tech.technique;
      const wrong = PERSUASION_TECHNIQUES.filter((t) => t.technique !== correct)
        .slice(0, 3)
        .map((t) => t.technique);
      q.push(createMCQ("retorika", "meggyozes_haladó", `Melyik technika? ${tech.example}`, correct, wrong));
    } else if (type === 1) {
      // "Mit működésez be?"
      const tech = pick(PERSUASION_TECHNIQUES, rng);
      const correct = tech.example;
      const wrong = PERSUASION_TECHNIQUES.filter((t) => t.technique !== tech.technique)
        .slice(0, 3)
        .map((t) => t.example);
      q.push(createMCQ("retorika", "meggyozes_haladó", `${tech.technique} - mit működésez be?`, correct, wrong));
    } else {
      // "Szakértői tudás mely kategória?"
      const correct = "Hitelesség";
      const wrong = ["Emocionális meggyőzés", "Logikai meggyőzés", "Társadalmi bizonyítás"];
      q.push(
        createMCQ(
          "retorika",
          "meggyozes_haladó",
          "Az orvos tanácsa mely meggyőzési technikát használja?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateStilustorzetegek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik stílus?"
      const sl = pick(STYLE_LAYERS, rng);
      const correct = sl.layer;
      const wrong = STYLE_LAYERS.filter((s) => s.layer !== correct)
        .slice(0, 3)
        .map((s) => s.layer);
      q.push(createMCQ("stilisztika", "stilusretegek", `Melyik stílus? ${sl.context}`, correct, wrong));
    } else if (type === 1) {
      // "Hol szokásos?"
      const sl = pick(STYLE_LAYERS, rng);
      const correct = sl.context;
      const wrong = STYLE_LAYERS.filter((s) => s.layer !== sl.layer)
        .slice(0, 3)
        .map((s) => s.context);
      q.push(createMCQ("stilisztika", "stilusretegek", `${sl.layer} - hol szokásos?`, correct, wrong));
    } else {
      // "Melyik nem stílus?"
      const correct = "Hétköznapi szókincs";
      const wrong = ["Hivatalos stílus", "Szépirodalmi stílus", "Tudományos stílus"];
      q.push(
        createMCQ(
          "stilisztika",
          "stilusretegek",
          "Melyik nem jellemzi a stilisztikai rétegeket?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateSzovegstilus(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik szövegstílus eleme?"
      const elem = pick(TEXT_STYLE_ELEMENTS, rng);
      const correct = elem.element;
      const wrong = TEXT_STYLE_ELEMENTS.filter((e) => e.element !== correct)
        .slice(0, 3)
        .map((e) => e.element);
      q.push(createMCQ("stilisztika", "szovegstilus", `Melyik elem? ${elem.context}`, correct, wrong));
    } else if (type === 1) {
      // "Mit jelent?"
      const elem = pick(TEXT_STYLE_ELEMENTS, rng);
      const correct = elem.context;
      const wrong = TEXT_STYLE_ELEMENTS.filter((e) => e.element !== elem.element)
        .slice(0, 3)
        .map((e) => e.context);
      q.push(createMCQ("stilisztika", "szovegstilus", `${elem.element} - mit jelent?`, correct, wrong));
    } else {
      // "Figurahatás"
      const correct = "Metafora";
      const wrong = ["Szókincs", "Mondatszerkesztés", "Ritmus"];
      q.push(
        createMCQ(
          "stilisztika",
          "szovegstilus",
          "Melyik a 'Szívedben ég az ég' példája?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateTajnyelv(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik nyelvjárás?"
      const dial = pick(DIALECT_REGIONS, rng);
      const correct = dial.dialect;
      const wrong = DIALECT_REGIONS.filter((d) => d.dialect !== correct)
        .slice(0, 3)
        .map((d) => d.dialect);
      q.push(createMCQ("nyelvv", "tajnyelv", `Melyik nyelvjárás? ${dial.region}`, correct, wrong));
    } else if (type === 1) {
      // "Hol beszélnek?"
      const dial = pick(DIALECT_REGIONS, rng);
      const correct = dial.region;
      const wrong = DIALECT_REGIONS.filter((d) => d.dialect !== dial.dialect)
        .slice(0, 3)
        .map((d) => d.region);
      q.push(createMCQ("nyelvv", "tajnyelv", `${dial.dialect} - hol beszélnek?`, correct, wrong));
    } else {
      // "Jellemzője"
      const correct = "Hangtani és morfológiai eltérések az irodalmi nyelvtől";
      const wrong = ["Csak írott forma", "Csak szókincs eltérés", "Csak szintaxis eltérés"];
      q.push(
        createMCQ(
          "nyelvv",
          "tajnyelv",
          "Mi a nyelvjárás jellemzője?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateErveloSzoveg(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik az érvelő szöveg?"
      const correct = "Az okostelefont korlátozni kellene az iskolákban";
      const wrong = ["Múlt pénteken jó volt az idő", "A szék négy lábú bútorzat", "Az ég kék"];
      q.push(
        createMCQ(
          "szoveg",
          "ervelo_szoveg",
          "Melyik érvelő szöveg?",
          correct,
          wrong
        )
      );
    } else if (type === 1) {
      // "Mi az érvelő szöveg célja?"
      const correct = "Meggyőzni az olvasót a szerző véleményéről";
      const wrong = ["Szórakoztatni az olvasót", "Tudósítani az olvasót", "Leírni egy helyzetet"];
      q.push(
        createMCQ(
          "szoveg",
          "ervelo_szoveg",
          "Mi az érvelő szöveg célja?",
          correct,
          wrong
        )
      );
    } else {
      // "Mi szükséges?"
      const correct = "Érv, bizonyíték és lezárás";
      const wrong = ["Csak szép szavak", "Csak érzelmek", "Csak vicc és humor"];
      q.push(
        createMCQ(
          "szoveg",
          "ervelo_szoveg",
          "Mit tartalmazzon az érvelő szöveg?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateTobbszoroszszeretett(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik összetett mondat típusa?"
      const sent = pick(COMPLEX_SENTENCES, rng);
      const correct = sent.type;
      const wrong = ["Egyszerű mondat", "Összetett mondat", "Komplexus mondat"].filter((s) => s !== correct).slice(0, 3);
      q.push(createMCQ("mondat", "tobbsz_osszetett", `Milyen típusú? "${sent.sentence}"`, correct, wrong));
    } else if (type === 1) {
      // "Alárendelő vagy mellérendelő?"
      const correct = "Alárendelő mondat";
      const wrong = ["Mellérendelő mondat", "Egyszerű mondat", "Összetett mondat"];
      q.push(
        createMCQ(
          "mondat",
          "tobbsz_osszetett",
          "'Mert sötét volt, nem mentünk el.' - milyen?",
          correct,
          wrong
        )
      );
    } else {
      // "Mi az oka?"
      const correct = "Alkötmondatok közötti viszony";
      const wrong = ["Szókincs", "Számszabály", "Tagmondatok száma"];
      q.push(
        createMCQ(
          "mondat",
          "tobbsz_osszetett",
          "Mi dönti el, hogy alárendelő vagy mellérendelő?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateKommunikacioVerbalis(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik kommunikációs elem?"
      const vc = pick(VERBAL_COMMUNICATION, rng);
      const correct = vc.skill;
      const wrong = VERBAL_COMMUNICATION.filter((v) => v.skill !== correct)
        .slice(0, 3)
        .map((v) => v.skill);
      q.push(createMCQ("komm", "verbalis", `Melyik skill? ${vc.context}`, correct, wrong));
    } else if (type === 1) {
      // "Mikor kell?"
      const vc = pick(VERBAL_COMMUNICATION, rng);
      const correct = vc.context;
      const wrong = VERBAL_COMMUNICATION.filter((v) => v.skill !== vc.skill)
        .slice(0, 3)
        .map((v) => v.context);
      q.push(createMCQ("komm", "verbalis", `${vc.skill} - mikor szükséges?`, correct, wrong));
    } else {
      // "Mi az aktív hallgatás?"
      const correct = "Teljes figyelem az előadóra";
      const wrong = ["Csak szavak hallgatása", "Nem szólni közbe", "Hangosan hallgatás"];
      q.push(
        createMCQ(
          "komm",
          "verbalis",
          "Mi az aktív hallgatás?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

export function generateMediaszoveg(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik médiaszöveg típus?"
      const media = pick(MEDIA_TEXTS, rng);
      const correct = media.type;
      const wrong = MEDIA_TEXTS.filter((m) => m.type !== correct)
        .slice(0, 3)
        .map((m) => m.type);
      q.push(createMCQ("media", "mediaszoveg", `Melyik típus? ${media.characteristic}`, correct, wrong));
    } else if (type === 1) {
      // "Mi a jellegzetessége?"
      const media = pick(MEDIA_TEXTS, rng);
      const correct = media.characteristic;
      const wrong = MEDIA_TEXTS.filter((m) => m.type !== media.type)
        .slice(0, 3)
        .map((m) => m.characteristic);
      q.push(createMCQ("media", "mediaszoveg", `${media.type} - jellegzetessége?`, correct, wrong));
    } else {
      // "Melyik médium?"
      const correct = "Televízió, rádió, internet, újság";
      const wrong = ["Csak nyomtatott média", "Csak online média", "Csak audio média"];
      q.push(
        createMCQ(
          "media",
          "mediaszoveg",
          "Mi az a média?",
          correct,
          wrong
        )
      );
    }
  }

  return q;
}

// ───── TYPING GENERATORS FOR EXISTING TOPICS (11) ─────────────────────────────

export function generateHangvaltozas_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("nyelvtort", "hangvaltozas", "Mi az assimiláció?", "Hasonló hangok összeolvadása vagy egymáshoz hasonlóvá válása"));
    } else if (type === 1) {
      q.push(createTyping("nyelvtort", "hangvaltozas", "Add meg a metatézis definícióját!", "Hangok felcserélődése szón belül"));
    } else if (type === 2) {
      q.push(createTyping("nyelvtort", "hangvaltozas", "Melyik hangváltozás amikor egy szó végéről hang tűnik el?", "Apokópa"));
    } else if (type === 3) {
      q.push(createTyping("nyelvtort", "hangvaltozas", "A disszimiláció során mi történik?", "Hasonló hangok eltávolodnak egymástól"));
    } else {
      q.push(createTyping("nyelvtort", "hangvaltozas", "Mi az afarézis?", "Szó elején levő hang eltűnése"));
    }
  }

  return q;
}

export function generateJovenenyszszo_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("nyelvtort", "jovenényszó_haladó", "Melyik nyelvből származik a 'barát' szó?", "Szláv"));
    } else if (type === 1) {
      q.push(createTyping("nyelvtort", "jovenényszó_haladó", "Honnan ered a 'pohár' szó?", "Német"));
    } else if (type === 2) {
      q.push(createTyping("nyelvtort", "jovenényszó_haladó", "A 'paprika' szó melyik nyelvből való?", "Török"));
    } else if (type === 3) {
      q.push(createTyping("nyelvtort", "jovenényszó_haladó", "Mi a jövevényszó?", "Egy másik nyelvből átvett szó"));
    } else {
      q.push(createTyping("nyelvtort", "jovenényszó_haladó", "Melyik szó francia eredetű: város, modell vagy család?", "Modell"));
    }
  }

  return q;
}

export function generateErvelesHalado_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("retorika", "erveles_haladó", "Melyik érvelési hiba amikor az érvelő helyett az érvet támadják?", "Ad hominem"));
    } else if (type === 1) {
      q.push(createTyping("retorika", "erveles_haladó", "Mi a hamis dilemma?", "Csak két lehetőség közül való választás lehetősége"));
    } else if (type === 2) {
      q.push(createTyping("retorika", "erveles_haladó", "Melyik hiba amikor az érvet önmaga bizonyításával bizonyítják?", "Klasszikus körforgalom"));
    } else if (type === 3) {
      q.push(createTyping("retorika", "erveles_haladó", "Mi történik a disszimilációnál?", "Ugyanaz az érv többszöri ismétlése"));
    } else {
      q.push(createTyping("retorika", "erveles_haladó", "Mit jelent a generalizálás az érvelésben?", "Egy esetre alapozott általános kijelentés"));
    }
  }

  return q;
}

export function generateMeggyozesHalado_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("retorika", "meggyozes_haladó", "Melyik meggyőzési technika az érzelmi reagálásra építő?", "Emocionális meggyőzés"));
    } else if (type === 1) {
      q.push(createTyping("retorika", "meggyozes_haladó", "Mi az az ethos az érvelésben?", "A szakértő ismertsége és hitelessége"));
    } else if (type === 2) {
      q.push(createTyping("retorika", "meggyozes_haladó", "Melyik technika amikor sok ember egyetértése alapján győznek meg?", "Társadalmi bizonyítás"));
    } else if (type === 3) {
      q.push(createTyping("retorika", "meggyozes_haladó", "Mit jelent a pátosz?", "Érzelmi reagálás keltése"));
    } else {
      q.push(createTyping("retorika", "meggyozes_haladó", "Melyik meggyőzési mód logikai érveken alapul?", "Logikai meggyőzés"));
    }
  }

  return q;
}

export function generateStilustorzetegek_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("stilisztika", "stilusretegek", "Melyik stílust használunk jogi dokumentumokhoz?", "Hivatalos stílus"));
    } else if (type === 1) {
      q.push(createTyping("stilisztika", "stilusretegek", "Hol szokásos a szépirodalmi stílus?", "Versek, regények, elbeszélések"));
    } else if (type === 2) {
      q.push(createTyping("stilisztika", "stilusretegek", "Melyik stílus jellemzi a tudományos cikkeket?", "Tudományos stílus"));
    } else if (type === 3) {
      q.push(createTyping("stilisztika", "stilusretegek", "Mit használunk újságcikkekhez?", "Közéleti/publicisztikai stílus"));
    } else {
      q.push(createTyping("stilisztika", "stilusretegek", "Melyik stílus a barátok közötti beszélgetésben szokásos?", "Hétköznapi/beszélt stílus"));
    }
  }

  return q;
}

export function generateSzovegstilus_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("stilisztika", "szovegstilus", "Mit jelent az alliteráció?", "Egymást követő szavak azonos hanggal kezdődnek"));
    } else if (type === 1) {
      q.push(createTyping("stilisztika", "szovegstilus", "Mi a metonímia?", "Egy dolog neve helyett egy másik dolog nevét használjuk"));
    } else if (type === 2) {
      q.push(createTyping("stilisztika", "szovegstilus", "Melyik szövegstílus eleme az assznonancia?", "Hang- és betűalapú játékok"));
    } else if (type === 3) {
      q.push(createTyping("stilisztika", "szovegstilus", "Mi a hasonlat?", "Két dolog közötti hasonlóság kifejezése 'mint' szóval"));
    } else {
      q.push(createTyping("stilisztika", "szovegstilus", "Mit jelent a ritmus egy szövegben?", "Szavak hangsúlyozása és tempója"));
    }
  }

  return q;
}

export function generateTajnyelv_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("nyelvv", "tajnyelv", "Hol beszélnek palóc nyelvjárást?", "Észak-Magyarország (Nógrád, Gömör)"));
    } else if (type === 1) {
      q.push(createTyping("nyelvv", "tajnyelv", "Melyik nyelvjárás az Alföld jellegzetes?", "Alföldi nyelvjárás"));
    } else if (type === 2) {
      q.push(createTyping("nyelvv", "tajnyelv", "Hol használják a szepesi nyelvjárást?", "Szepesség"));
    } else if (type === 3) {
      q.push(createTyping("nyelvv", "tajnyelv", "Mi a nyelvjárás jellemzője?", "Hangtani és morfológiai eltérések az irodalmi nyelvtől"));
    } else {
      q.push(createTyping("nyelvv", "tajnyelv", "Melyik nyelvjárás dunántúli?", "Dunántúli nyelvjárás"));
    }
  }

  return q;
}

export function generateErveloSzoveg_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szoveg", "ervelo_szoveg", "Mi az érvelő szöveg célja?", "Meggyőzni az olvasót a szerző véleményéről"));
    } else if (type === 1) {
      q.push(createTyping("szoveg", "ervelo_szoveg", "Mit tartalmazzon egy érvelő szöveg?", "Érv, bizonyíték és lezárás"));
    } else if (type === 2) {
      q.push(createTyping("szoveg", "ervelo_szoveg", "Mi a tézis az érvelő szövegben?", "A szerző fő állítása"));
    } else if (type === 3) {
      q.push(createTyping("szoveg", "ervelo_szoveg", "Mit jelent az érv?", "Az a pont, amely támogatja a tézist"));
    } else {
      q.push(createTyping("szoveg", "ervelo_szoveg", "Mi a bizonyíték?", "Adatok és példák, amelyek az érvet támogatják"));
    }
  }

  return q;
}

export function generateTobbszoroszszeretett_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("mondat", "tobbsz_osszetett", "Mit jelent az alárendelő mondat?", "Olyan összetett mondat ahol a tagmondatok közül az egyik a másiknak van alárendelve"));
    } else if (type === 1) {
      q.push(createTyping("mondat", "tobbsz_osszetett", "Mi a mellérendelő mondat?", "Olyan összetett mondat ahol a tagmondatok egyenlő rangúak"));
    } else if (type === 2) {
      q.push(createTyping("mondat", "tobbsz_osszetett", "Melyik kötőszó jelzi az alárendelést?", "Mert, mivel, ha, hogy"));
    } else if (type === 3) {
      q.push(createTyping("mondat", "tobbsz_osszetett", "Melyik kötőszó jelzi a mellérendelést?", "És, vagy, de, tehát"));
    } else {
      q.push(createTyping("mondat", "tobbsz_osszetett", "Mi dönti el hogy alárendelő vagy mellérendelő?", "Az alkötmondatok közötti viszony"));
    }
  }

  return q;
}

export function generateKommunikacioVerbalis_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("komm", "verbalis", "Mi az aktív hallgatás?", "Teljes figyelem az előadóra és a szavakra"));
    } else if (type === 1) {
      q.push(createTyping("komm", "verbalis", "Mit jelent az empátia a beszélgetésben?", "Másik személy érzelmeire való reagálás"));
    } else if (type === 2) {
      q.push(createTyping("komm", "verbalis", "Miért kell kiegészítő kérdéseket feltenni?", "Hogy jobban megértsük az üzenet tartalmát"));
    } else if (type === 3) {
      q.push(createTyping("komm", "verbalis", "Mit jelent az összehangoztás a beszélgetésben?", "Mindkét fél egyetértésre jutása"));
    } else {
      q.push(createTyping("komm", "verbalis", "Mi az érthető kommunikáció alapja?", "Pontos és világos szavakkal történő megfogalmazás"));
    }
  }

  return q;
}

export function generateMediaszoveg_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("media", "mediaszoveg", "Mi a reklám célja?", "Figyelemfelkeltés és a termék vagy szolgáltatás népszerűsítése"));
    } else if (type === 1) {
      q.push(createTyping("media", "mediaszoveg", "Mit jelent a szelektív információ a médiában?", "Csak az egyik oldal felmutatása"));
    } else if (type === 2) {
      q.push(createTyping("media", "mediaszoveg", "Melyik médiaszöveg típus objektív?", "Hírek"));
    } else if (type === 3) {
      q.push(createTyping("media", "mediaszoveg", "Mi az a média manipuláció?", "A valóság szándékos torzítása az információ közlésében"));
    } else {
      q.push(createTyping("media", "mediaszoveg", "Mit tehetünk a médiamesések ellen?", "Kritikus gondolkodás és több forrás ellenőrzése"));
    }
  }

  return q;
}

// ─── NEW MCQ GENERATORS (14) ──────────────────────────────────────────────────

export function generateSzintaxisSzoban(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A szó fogalma a nyelvtanban";
      const wrong = ["Az írott jelek csoportja", "Egy mondat része", "A szókincs eleme"];
      q.push(createMCQ("szintaxis", "szóban", "Mi a szó a szintaxisban?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szóforma";
      const wrong = ["Szóelem", "Szógyök", "Szókincs"];
      q.push(createMCQ("szintaxis", "szóban", "Mi a szóalak másik neve?", correct, wrong));
    } else {
      const correct = "Szórendben való eltérés";
      const wrong = ["Fordítás", "Igealakvakzáció", "Szóképzés"];
      q.push(createMCQ("szintaxis", "szóban", "Mit jelent az inverz szórend?", correct, wrong));
    }
  }

  return q;
}

export function generateSzintaxisMondatszerkezet(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Alárendelő mondat";
      const wrong = ["Mellérendelő mondat", "Egyszerű mondat", "Összetett mondat"];
      q.push(createMCQ("szintaxis", "mondatszerkezet", "Melyik mondat 'Mert késő volt, otthon maradtunk'?", correct, wrong));
    } else if (type === 1) {
      const correct = "Felszólító mondat";
      const wrong = ["Kérdő mondat", "Kijelentő mondat", "Kívánó mondat"];
      q.push(createMCQ("szintaxis", "mondatszerkezet", "Milyen a 'Gyere ide azonnal!' mondat?", correct, wrong));
    } else {
      const correct = "Mellérendelő";
      const wrong = ["Alárendelő", "Egyszerű", "Megállapító"];
      q.push(createMCQ("szintaxis", "mondatszerkezet", "Melyik típus az 'Olvasott, majd tanult.'?", correct, wrong));
    }
  }

  return q;
}

export function generateSzintaxisIgealakok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Múlt idő";
      const wrong = ["Jelen idő", "Jövő idő", "Feltételes"];
      q.push(createMCQ("szintaxis", "igealakok", "Milyen időt jelöl az 'olvasott'?", correct, wrong));
    } else if (type === 1) {
      const correct = "Feltételes mód";
      const wrong = ["Felszólító mód", "Kívánó mód", "Kijelentő mód"];
      q.push(createMCQ("szintaxis", "igealakok", "Mi a 'olvasnék' módja?", correct, wrong));
    } else {
      const correct = "Személy és szám jelölés";
      const wrong = ["Szógyök", "Igekötő", "Sufixum"];
      q.push(createMCQ("szintaxis", "igealakok", "Mit jelölnek az igealak ragjai?", correct, wrong));
    }
  }

  return q;
}

export function generateIrodalomMu(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A szerző által létrehozott történet vagy ötlet";
      const wrong = ["Csak nyomtatott dokumentum", "Történelmi esemény", "Valódi történet"];
      q.push(createMCQ("irodalom", "mű", "Mi a irodalmi mű?", correct, wrong));
    } else if (type === 1) {
      const correct = "Petőfi Sándor";
      const wrong = ["Arany János", "Jókai Mór", "Babits Mihály"];
      q.push(createMCQ("irodalom", "mű", "Ki írta az 'Arany Jánosnak'?", correct, wrong));
    } else {
      const correct = "Mesélés és történetfejlesztés";
      const wrong = ["Vers", "Dráma", "Esszé"];
      q.push(createMCQ("irodalom", "mű", "Mi az elbeszélés jellemzője?", correct, wrong));
    }
  }

  return q;
}

export function generateIrodalomMufaj(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Vers";
      const wrong = ["Regény", "Novella", "Dráma"];
      q.push(createMCQ("irodalom", "műfaj", "Melyik műfaj jellemzi a 'Talán még szép az ég'?", correct, wrong));
    } else if (type === 1) {
      const correct = "Dráma";
      const wrong = ["Epika", "Líra", "Esszé"];
      q.push(createMCQ("irodalom", "műfaj", "Melyik műfaj jelent játékban előadandó művet?", correct, wrong));
    } else {
      const correct = "Novella";
      const wrong = ["Regény", "Vers", "Dráma"];
      q.push(createMCQ("irodalom", "műfaj", "Melyik a rövid elbeszélő műfaj?", correct, wrong));
    }
  }

  return q;
}

export function generateIrodalomMotivumok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Ismétlődő témák és jellegzetes elemek";
      const wrong = ["Szókincs", "Nyelvtan", "Mondatszerkesztés"];
      q.push(createMCQ("irodalom", "motívumok", "Mit jelent a motívum az irodalomban?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szerelem";
      const wrong = ["Munka", "Tanulás", "Utazás"];
      q.push(createMCQ("irodalom", "motívumok", "Melyik motívum gyakori a romantikus irodalomban?", correct, wrong));
    } else {
      const correct = "Halál";
      const wrong = ["Születés", "Közlekedés", "Munkaidő"];
      q.push(createMCQ("irodalom", "motívumok", "Melyik a klasszikus tragikus motívum?", correct, wrong));
    }
  }

  return q;
}

export function generateRoratokaHatas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az olvasó vagy hallgató érzelmeit befolyásolja";
      const wrong = ["Csak szavakat ír", "Történetet mesél", "Tényeket sorol"];
      q.push(createMCQ("retorika", "hatás", "Mi a retorikai hatás célja?", correct, wrong));
    } else if (type === 1) {
      const correct = "Ismétlés";
      const wrong = ["Szóalkotás", "Fordítás", "Szóforma"];
      q.push(createMCQ("retorika", "hatás", "Melyik retorikai eszköz az ismételt szó vagy kifejezés?", correct, wrong));
    } else {
      const correct = "Túlzás";
      const wrong = ["Szókincs", "Fordítás", "Szórend"];
      q.push(createMCQ("retorika", "hatás", "Mi a hiperbola?", correct, wrong));
    }
  }

  return q;
}

export function generateSzovegelemzesSzerkezet(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Bevezetés, fejlesztés, lezárás";
      const wrong = ["Csak fejlesztés", "Csak bevezetés", "Nem szervezett"];
      q.push(createMCQ("szoveg", "szerkezet", "Mi a szöveg alapvető szerkezete?", correct, wrong));
    } else if (type === 1) {
      const correct = "Bevezetés";
      const wrong = ["Fejlesztés", "Lezárás", "Összefoglalás"];
      q.push(createMCQ("szoveg", "szerkezet", "Hol kezdődik a főtéma bemutatása?", correct, wrong));
    } else {
      const correct = "Lezárás";
      const wrong = ["Bevezetés", "Fejlesztés", "Felsorolás"];
      q.push(createMCQ("szoveg", "szerkezet", "Mi az a része a szövegnek ahol összefoglalnak?", correct, wrong));
    }
  }

  return q;
}

export function generateSzovegelemzesOsszefugges(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Logikus és érthető összekapcsolódás";
      const wrong = ["Véletlenszerű rendezés", "Szókincs gazdagsága", "Hosszú mondatok"];
      q.push(createMCQ("szoveg", "osszefu", "Mi a szövegkoherencia?", correct, wrong));
    } else if (type === 1) {
      const correct = "Kötőszavak és utalók";
      const wrong = ["Szóglossz", "Szóforma", "Szógyök"];
      q.push(createMCQ("szoveg", "osszefu", "Mit használunk a szöveg kapcsolódását jelezni?", correct, wrong));
    } else {
      const correct = "Haladás az általánostól az éspécifikus felé";
      const wrong = ["Visszatérés", "Ugrálás", "Összezavarás"];
      q.push(createMCQ("szoveg", "osszefu", "Mi a logikus szöveg jellegzetessége?", correct, wrong));
    }
  }

  return q;
}

export function generateNyelvhasznalasRegiszter(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Formális vagy informális beszéd szintje";
      const wrong = ["Hangszín", "Ritmus", "Tempó"];
      q.push(createMCQ("nyelvhasznalat", "register", "Mit jelent a regiszter?", correct, wrong));
    } else if (type === 1) {
      const correct = "Oficializáció";
      const wrong = ["Tisztázat", "Fordítás", "Másolás"];
      q.push(createMCQ("nyelvhasznalat", "register", "Melyik regiszter a hivatalos dokumentumokhoz?", correct, wrong));
    } else {
      const correct = "Informális regiszter";
      const wrong = ["Formális regiszter", "Irodalmi regiszter", "Tudományos regiszter"];
      q.push(createMCQ("nyelvhasznalat", "register", "Melyik regiszter a barátok közötti beszélgetésben szokásos?", correct, wrong));
    }
  }

  return q;
}

export function generateNyelviKreativitas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Szó vagy kifejezés újszerű és szándékos használata";
      const wrong = ["Gramatikai hiba", "Szóhiba", "Nyelvtan szabálysértés"];
      q.push(createMCQ("nyelvhasznalat", "kreativitas", "Mit jelent a nyelvi kreativitás?", correct, wrong));
    } else if (type === 1) {
      const correct = "Versformáció";
      const wrong = ["Nyomtatás", "Fordítás", "Másolás"];
      q.push(createMCQ("nyelvhasznalat", "kreativitas", "Melyik a költői forma?", correct, wrong));
    } else {
      const correct = "Újszótörvény";
      const wrong = ["Szóképzés", "Szótőzés", "Szófordítás"];
      q.push(createMCQ("nyelvhasznalat", "kreativitas", "Mit jelent az neologizmus?", correct, wrong));
    }
  }

  return q;
}

export function generatePragmatikaKontextus(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A mondat vagy szó használati helyzete és körülményei";
      const wrong = ["Nyelvtan szabályok", "Szóképzés", "Szóalakvakzáció"];
      q.push(createMCQ("pragmatika", "kontextus", "Mit jelent a kontextus a pragmatikában?", correct, wrong));
    } else if (type === 1) {
      const correct = "Azonos szó különböző helyzetekben más jelentésűek";
      const wrong = ["Szóalakvakzáció", "Szóképzés", "Szófordítás"];
      q.push(createMCQ("pragmatika", "kontextus", "Mi a kontextusfüggő jelentés?", correct, wrong));
    } else {
      const correct = "Kulturális és társadalmi helyzet";
      const wrong = ["Szintaxis", "Szóképzés", "Morfológia"];
      q.push(createMCQ("pragmatika", "kontextus", "Mit jelent szociolinguisztikai kontextus?", correct, wrong));
    }
  }

  return q;
}

export function generatePragmatikaIntenciok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A beszélő szándéka és célja az üzenettel";
      const wrong = ["Szókincs", "Szóforma", "Mondatszerkezet"];
      q.push(createMCQ("pragmatika", "intenciok", "Mit jelent a beszélő intenciója?", correct, wrong));
    } else if (type === 1) {
      const correct = "Közvetett kérés";
      const wrong = ["Közvetlen kérés", "Parancs", "Javaslat"];
      q.push(createMCQ("pragmatika", "intenciok", "Mi az implicita intenciójú kérés például?", correct, wrong));
    } else {
      const correct = "Pragmatikai értelmezés";
      const wrong = ["Literális értelmezés", "Szó szerinti értelmezés", "Fordítás"];
      q.push(createMCQ("pragmatika", "intenciok", "Mit kell érteni az 'Hideg van' mondatban amikor ablak nyitva?", correct, wrong));
    }
  }

  return q;
}

export function generateMultimedialSzoveg(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Szöveg, kép és hang együttes használata";
      const wrong = ["Csak szöveg", "Csak kép", "Csak hang"];
      q.push(createMCQ("media", "multimodal", "Mit jelent a multimodális szöveg?", correct, wrong));
    } else if (type === 1) {
      const correct = "Plakát";
      const wrong = ["Könyv", "Újság", "Levelezőlap"];
      q.push(createMCQ("media", "multimodal", "Melyik a multimodális szöveg például?", correct, wrong));
    } else {
      const correct = "Az összes elem értelmet ad";
      const wrong = ["Csak a szöveg számít", "Csak a kép számít", "Csak a hang számít"];
      q.push(createMCQ("media", "multimodal", "Mi a multimodális szöveg hatása?", correct, wrong));
    }
  }

  return q;
}

// ───── TYPING GENERATORS FOR NEW TOPICS (14) ─────────────────────────────────

export function generateSzintaxisSzoban_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szintaxis", "szóban", "Mit jelent a szó a szintaxisban?", "A nyelvtan alapegysége amely önálló jelentéssel rendelkezik"));
    } else if (type === 1) {
      q.push(createTyping("szintaxis", "szóban", "Mi a szóforma?", "Egy szó flektálható vagy inflektálható alakja"));
    } else if (type === 2) {
      q.push(createTyping("szintaxis", "szóban", "Mit jelent az inverz szórend?", "A szavak sorrendjének eltérése a szokásostól"));
    } else if (type === 3) {
      q.push(createTyping("szintaxis", "szóban", "Melyik a szóosztály?", "Az ugyanolyan szófajú szavak csoportja"));
    } else {
      q.push(createTyping("szintaxis", "szóban", "Mi a szókincs?", "Az egy személy vagy közösség által ismert szavak összeessége"));
    }
  }

  return q;
}

export function generateSzintaxisMondatszerkezet_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szintaxis", "mondatszerkezet", "Mit jelent az alárendelő mondat?", "Olyan összetett mondat ahol az egyik tagmondat a másiknak van alárendelve"));
    } else if (type === 1) {
      q.push(createTyping("szintaxis", "mondatszerkezet", "Melyik mondat az 'Ő sétál magányosan az úton'?", "Egyszerű mondat"));
    } else if (type === 2) {
      q.push(createTyping("szintaxis", "mondatszerkezet", "Mi a felszólító mondat?", "A beszélő parancsait vagy kéréseit kifejező mondat"));
    } else if (type === 3) {
      q.push(createTyping("szintaxis", "mondatszerkezet", "Mik a mellérendelő mondatok?", "Egyenlő rangú tagmondatokból álló összetett mondatok"));
    } else {
      q.push(createTyping("szintaxis", "mondatszerkezet", "Mit jelent a kérdő mondat?", "A valóságról való tájékozódást kifejező mondat"));
    }
  }

  return q;
}

export function generateSzintaxisIgealakok_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szintaxis", "igealakok", "Mit jelent a jelen idő?", "Az éppen történő vagy szokásos cselekvés"));
    } else if (type === 1) {
      q.push(createTyping("szintaxis", "igealakok", "Mi a múlt idő?", "Az már lezárult cselekvés vagy állapot"));
    } else if (type === 2) {
      q.push(createTyping("szintaxis", "igealakok", "Mit jelent a feltételes mód?", "A lehetséges vagy feltételesen gondolt cselekvés"));
    } else if (type === 3) {
      q.push(createTyping("szintaxis", "igealakok", "Mi az imperatívusz?", "A felszólító mód amely parancsot vagy kérést fejez ki"));
    } else {
      q.push(createTyping("szintaxis", "igealakok", "Melyik szám az 'ő olvasott'?", "Egyes szám harmadik személy"));
    }
  }

  return q;
}

export function generateIrodalomMu_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("irodalom", "mű", "Mit jelent a irodalmi mű?", "A szerző által szándékosan megalkotott szöveg"));
    } else if (type === 1) {
      q.push(createTyping("irodalom", "mű", "Mi az elbeszélés?", "Egy történet prózában történő előadása"));
    } else if (type === 2) {
      q.push(createTyping("irodalom", "mű", "Mit jelent az epika?", "Az elbeszélő irodalmi műnem"));
    } else if (type === 3) {
      q.push(createTyping("irodalom", "mű", "Mi a regény?", "Hosszabb elbeszélő irodalmi mű amely összetett történetet mesél"));
    } else {
      q.push(createTyping("irodalom", "mű", "Mit jelent a novella?", "Rövid elbeszélő mű egy vagy kevés eseménnyel"));
    }
  }

  return q;
}

export function generateIrodalomMufaj_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("irodalom", "műfaj", "Mit jelent a vers?", "Lírai műnem amely ritmusban és rímelésben íródik"));
    } else if (type === 1) {
      q.push(createTyping("irodalom", "műfaj", "Mi a dráma?", "Írott vagy szóbeli forma amely játékban előadható"));
    } else if (type === 2) {
      q.push(createTyping("irodalom", "műfaj", "Melyik három nagy irodalmi műnem?", "Epika, líra és dráma"));
    } else if (type === 3) {
      q.push(createTyping("irodalom", "műfaj", "Mit jelent a tragédia?", "Az emberek végzete és erőfeszítéseik gyakran szomorú kimenetelű dráma"));
    } else {
      q.push(createTyping("irodalom", "műfaj", "Mi a komédia?", "Az emberi hibákat vagy szokásokat pajzán módon ábrázoló dráma"));
    }
  }

  return q;
}

export function generateIrodalomMotivumok_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("irodalom", "motívumok", "Mi a motívum az irodalomban?", "Ismétlődő téma vagy jellegzetes elem"));
    } else if (type === 1) {
      q.push(createTyping("irodalom", "motívumok", "Melyik motívum a romantika jellegzetes?", "Szerelem vagy természet"));
    } else if (type === 2) {
      q.push(createTyping("irodalom", "motívumok", "Mit jelent az önarckép mint motívum?", "Az egyén saját személyiségének kifejezése"));
    } else if (type === 3) {
      q.push(createTyping("irodalom", "motívumok", "Mi az isteni cselekedet motívum?", "Az Isten vagy magasabb hatalom beavatkozása az emberi sorsba"));
    } else {
      q.push(createTyping("irodalom", "motívumok", "Melyik motívum az örökkévalóság kifejezése?", "Az idő vagy halál"));
    }
  }

  return q;
}

export function generateRetorakaHatas_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("retorika", "hatás", "Mi a retorikai hatás?", "Az olvasó vagy hallgató érzelmeinek vagy gondolatainak befolyásolása"));
    } else if (type === 1) {
      q.push(createTyping("retorika", "hatás", "Mit jelent a metafora?", "Egy dolog nevét másik dolgora alkalmazzuk hasonlóság alapján"));
    } else if (type === 2) {
      q.push(createTyping("retorika", "hatás", "Mi az alliteráció?", "Egymást követő szavak azonos hanggal kezdődnek"));
    } else if (type === 3) {
      q.push(createTyping("retorika", "hatás", "Mit jelent a hiperbola?", "Szándékos és nyomatékos túlzás"));
    } else {
      q.push(createTyping("retorika", "hatás", "Mi az ironia?", "A szó valódi értelmével ellentétes értelmet fejez ki"));
    }
  }

  return q;
}

export function generateSzovegelemzesSzerkezet_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szoveg", "szerkezet", "Melyik a szöveg bevezetése?", "Az első rész mely a témát vagy a fő gondolatot bemutatja"));
    } else if (type === 1) {
      q.push(createTyping("szoveg", "szerkezet", "Mit jelent a szövegfejlesztés?", "A főtéma kifejtése és indoklása"));
    } else if (type === 2) {
      q.push(createTyping("szoveg", "szerkezet", "Mi a lezárás célja?", "Az elmondottak összefoglalása és a témához való visszatérés"));
    } else if (type === 3) {
      q.push(createTyping("szoveg", "szerkezet", "Melyik a szöveg alapvető szerkezete?", "Bevezetés, fejlesztés és lezárás"));
    } else {
      q.push(createTyping("szoveg", "szerkezet", "Mit jelent az absztrakt szövegszerkezet?", "Az általános logika amely az összes szöveget szervezi"));
    }
  }

  return q;
}

export function generateSzovegelemzesOsszefugges_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("szoveg", "osszefu", "Mi a szövegkoherencia?", "A szöveg logikus és érthető összekapcsolódása"));
    } else if (type === 1) {
      q.push(createTyping("szoveg", "osszefu", "Mit jelent a szöveglánc?", "Szavak vagy gondolatok egymásutáni kapcsolódása"));
    } else if (type === 2) {
      q.push(createTyping("szoveg", "osszefu", "Mit használunk szövegkapcsolódásra?", "Kötőszavak, hívatkozások és jelzések"));
    } else if (type === 3) {
      q.push(createTyping("szoveg", "osszefu", "Mi az inkoherencia?", "A szöveg logikátlan vagy zavaros szerkesztése"));
    } else {
      q.push(createTyping("szoveg", "osszefu", "Mit jelent a szövegdeixis?", "A szövegből való hivatkozás más részére"));
    }
  }

  return q;
}

export function generateNyelvhasznalasRegiszter_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("nyelvhasznalat", "register", "Mi a regiszter a nyelvhasználatban?", "A formális vagy informális beszéd szintje"));
    } else if (type === 1) {
      q.push(createTyping("nyelvhasznalat", "register", "Melyik regiszter a hivatalos dokumentumokhoz?", "Formális vagy magas regiszter"));
    } else if (type === 2) {
      q.push(createTyping("nyelvhasznalat", "register", "Mit jelent az informális regiszter?", "A barátok közötti beszélgetés vagy írás szintje"));
    } else if (type === 3) {
      q.push(createTyping("nyelvhasznalat", "register", "Mi a szoknyaregiszter?", "A közhasználatú és semleges nyelvhasználat szintje"));
    } else {
      q.push(createTyping("nyelvhasznalat", "register", "Mit jelent a szociolinguisztikai regiszter?", "A társadalmi helyzet szerinti nyelvhasználat"));
    }
  }

  return q;
}

export function generateNyelviKreativitas_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("nyelvhasznalat", "kreativitas", "Mit jelent a nyelvi kreativitás?", "Szó vagy kifejezés újszerű és szándékos használata"));
    } else if (type === 1) {
      q.push(createTyping("nyelvhasznalat", "kreativitas", "Mi az neologizmus?", "Egy újonnan keletkezett szó vagy szóhasználat"));
    } else if (type === 2) {
      q.push(createTyping("nyelvhasznalat", "kreativitas", "Melyik nyelvkreatív technika?", "Szóalkotás, újraértelmezés vagy szóépítkezés"));
    } else if (type === 3) {
      q.push(createTyping("nyelvhasznalat", "kreativitas", "Mit jelent az idiomatikus kifejezés?", "A szószerű értelmezésétől eltérő szöveges egység"));
    } else {
      q.push(createTyping("nyelvhasznalat", "kreativitas", "Mi az szomaportmanteau szó?", "Két szó összeolvadásából keletkezett szó"));
    }
  }

  return q;
}

export function generatePragmatikaKontextus_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("pragmatika", "kontextus", "Mit jelent a kontextus a pragmatikában?", "Az üzenet használati helyzete és körülményei"));
    } else if (type === 1) {
      q.push(createTyping("pragmatika", "kontextus", "Mi a szociális kontextus?", "A társadalmi helyzet vagy viszony ahol történik a kommunikáció"));
    } else if (type === 2) {
      q.push(createTyping("pragmatika", "kontextus", "Mit jelent a kulturális kontextus?", "A közös értékek és szokások rendszere"));
    } else if (type === 3) {
      q.push(createTyping("pragmatika", "kontextus", "Mi az implicita információ?", "A közvetetten vagy kimondatlanul hordozott tartalom"));
    } else {
      q.push(createTyping("pragmatika", "kontextus", "Mit jelent az extralinguisztikai kontextus?", "A szövegen kívüli körülmények amely az értelmezésre hat"));
    }
  }

  return q;
}

export function generatePragmatikaIntenciok_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("pragmatika", "intenciok", "Mit jelent a beszélő intenciója?", "A szerző szándéka az üzenettel amely elérni akar"));
    } else if (type === 1) {
      q.push(createTyping("pragmatika", "intenciok", "Mi az irónia?", "Szándékos ellentét az üzenet literális értelmezésétől"));
    } else if (type === 2) {
      q.push(createTyping("pragmatika", "intenciok", "Melyik intenciótípus a közvetett kérés?", "Az implicit performatív cselekvés"));
    } else if (type === 3) {
      q.push(createTyping("pragmatika", "intenciok", "Mit jelent az elodázott intenciót?", "Amit később vagy később értünk meg az üzenetből"));
    } else {
      q.push(createTyping("pragmatika", "intenciok", "Mi az alárendelő beszédmód?", "Közvetetten vagy burkolt módon kifejezve az intenciót"));
    }
  }

  return q;
}

export function generateMultimedialSzoveg_typing(seed?: number): MagyarTyping[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarTyping[] = [];

  for (let i = 0; i < 15; i++) {
    const type = i % 5;
    if (type === 0) {
      q.push(createTyping("media", "multimodal", "Mit jelent a multimodális szöveg?", "Szöveg, kép, hang és más elemek együttes használata"));
    } else if (type === 1) {
      q.push(createTyping("media", "multimodal", "Melyik az multimodális szöveg például?", "Plakát, képregény vagy videó"));
    } else if (type === 2) {
      q.push(createTyping("media", "multimodal", "Mi a vizuális kommunikáció?", "A képek és látható jelek által közvetített információ"));
    } else if (type === 3) {
      q.push(createTyping("media", "multimodal", "Mit jelent a szemiózis?", "A jel jelentésének folyamata"));
    } else {
      q.push(createTyping("media", "multimodal", "Mi az erősítés multimodális szövegben?", "Amikor több módus ugyanazt az üzenetet fejezi ki"));
    }
  }

  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G7_Generators_Hungarian = {
  // Original 11 MCQ + Typing
  nyelvtort_hangvaltozas: generateHangvaltozas,
  nyelvtort_hangvaltozas_typing: generateHangvaltozas_typing,
  nyelvtort_jovenényszó_haladó: generateJovenenyszszo,
  nyelvtort_jovenényszó_haladó_typing: generateJovenenyszszo_typing,
  retorika_erveles_haladó: generateErvelesHalado,
  retorika_erveles_haladó_typing: generateErvelesHalado_typing,
  retorika_meggyozes_haladó: generateMeggyozesHalado,
  retorika_meggyozes_haladó_typing: generateMeggyozesHalado_typing,
  stilisztika_stilusretegek: generateStilustorzetegek,
  stilisztika_stilusretegek_typing: generateStilustorzetegek_typing,
  stilisztika_szovegstilus: generateSzovegstilus,
  stilisztika_szovegstilus_typing: generateSzovegstilus_typing,
  nyelvv_tajnyelv: generateTajnyelv,
  nyelvv_tajnyelv_typing: generateTajnyelv_typing,
  szoveg_ervelo_szoveg: generateErveloSzoveg,
  szoveg_ervelo_szoveg_typing: generateErveloSzoveg_typing,
  mondat_tobbsz_osszetett: generateTobbszoroszszeretett,
  mondat_tobbsz_osszetett_typing: generateTobbszoroszszeretett_typing,
  komm_verbalis: generateKommunikacioVerbalis,
  komm_verbalis_typing: generateKommunikacioVerbalis_typing,
  media_mediaszoveg: generateMediaszoveg,
  media_mediaszoveg_typing: generateMediaszoveg_typing,

  // New 14 MCQ + Typing
  szintaxis_szóban: generateSzintaxisSzoban,
  szintaxis_szóban_typing: generateSzintaxisSzoban_typing,
  szintaxis_mondatszerkezet: generateSzintaxisMondatszerkezet,
  szintaxis_mondatszerkezet_typing: generateSzintaxisMondatszerkezet_typing,
  szintaxis_igealakok: generateSzintaxisIgealakok,
  szintaxis_igealakok_typing: generateSzintaxisIgealakok_typing,
  irodalom_mű: generateIrodalomMu,
  irodalom_mű_typing: generateIrodalomMu_typing,
  irodalom_műfaj: generateIrodalomMufaj,
  irodalom_műfaj_typing: generateIrodalomMufaj_typing,
  irodalom_motívumok: generateIrodalomMotivumok,
  irodalom_motívumok_typing: generateIrodalomMotivumok_typing,
  retorika_hatás: generateRoratokaHatas,
  retorika_hatás_typing: generateRetorakaHatas_typing,
  szoveg_szerkezet: generateSzovegelemzesSzerkezet,
  szoveg_szerkezet_typing: generateSzovegelemzesSzerkezet_typing,
  szoveg_osszefu: generateSzovegelemzesOsszefugges,
  szoveg_osszefu_typing: generateSzovegelemzesOsszefugges_typing,
  nyelvhasznalat_register: generateNyelvhasznalasRegiszter,
  nyelvhasznalat_register_typing: generateNyelvhasznalasRegiszter_typing,
  nyelvhasznalat_kreativitas: generateNyelviKreativitas,
  nyelvhasznalat_kreativitas_typing: generateNyelviKreativitas_typing,
  pragmatika_kontextus: generatePragmatikaKontextus,
  pragmatika_kontextus_typing: generatePragmatikaKontextus_typing,
  pragmatika_intenciok: generatePragmatikaIntenciok,
  pragmatika_intenciok_typing: generatePragmatikaIntenciok_typing,
  media_multimodal: generateMultimedialSzoveg,
  media_multimodal_typing: generateMultimedialSzoveg_typing,
};
