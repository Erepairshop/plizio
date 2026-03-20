// lib/hungarianGenerators7.ts
// Hungarian Grade 7 (7. osztály) question generators
// Advanced topics: Language history, advanced rhetoric, stylistics, language variants, text composition, advanced syntax, communication, media
// 10 generator functions, each produces 45 questions (30 MCQ + 15 typing)

import type { CurriculumMCQ } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };

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

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G7_Generators_Hungarian = {
  hangvaltozas: generateHangvaltozas,
  jovenényszó_haladó: generateJovenenyszszo,
  erveles_haladó: generateErvelesHalado,
  meggyozes_haladó: generateMeggyozesHalado,
  stilusretegek: generateStilustorzetegek,
  szovegstilus: generateSzovegstilus,
  tajnyelv: generateTajnyelv,
  ervelo_szoveg: generateErveloSzoveg,
  tobbsz_osszetett: generateTobbszoroszszeretett,
  verbalis_komm: generateKommunikacioVerbalis,
  mediaszoveg: generateMediaszoveg,
};
