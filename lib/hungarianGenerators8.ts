// lib/hungarianGenerators8.ts
// Grade 8 (8. osztály) Hungarian language generators
// 10 topics for advanced secondary school: language history, style, text analysis, debate

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
    correct: opts.indexOf(correct)
  };
}

// ─── DATA LISTS ─────────────────────────────────────────────────────────────

const TEXTS_OMAGYR = [
  { title: "Halotti beszéd", time: "1100-as évek", author: "ismeretlen", excerpt: "Atyáink atya" },
  { title: "Ómagyar Mária-siralom", time: "1100-as évek", author: "ismeretlen", excerpt: "O feli Virgo Maria" },
  { title: "Königsberg-töredék", time: "1200-as évek", author: "ismeretlen", excerpt: "Predicatio sancti Gregorii" },
];

const CODICES = [
  { name: "Müncheni kódex", date: "1466", content: "Imádságok, legendák", significance: "Ómagyar nyelvemléke" },
  { name: "Winkler kódex", date: "1440-50", content: "Bibliai történetek", significance: "Legrégebb teljes magyar szöveg" },
  { name: "Jókai kódex", date: "1372-1382", content: "Szentséges eseményi", significance: "Középkori bibliai feldolgozás" },
  { name: "Érdy kódex", date: "1526-1527", content: "Egyházi szövegek", significance: "Protestáns reformáció nyomai" },
];

const LITERARY_DEVICES = [
  { device: "alliteráció", example: "Szél, szikra, szándék", description: "Azonos kezdőhang ismétlése" },
  { device: "ritmika", example: "Taka, taka, taka — végig", description: "Hangsor rendszeres ismétlődése" },
  { device: "irónia", example: "Milyen gyönyörű a vihar!", description: "Ellentétes értelmezéssel mondott kijelentés" },
  { device: "szatíra", example: "A politikus beszéde (visszásító gúny)", description: "Társadalmi kritika élces kifejezésével" },
  { device: "paródia", example: "Klasszikus mű nyúzása", description: "Mű vagy stílus gúnyos utánzása" },
];

const LITERARY_ANALYSIS = [
  { element: "motívum", definition: "Kisebb szövegelemek ismétlődő tartalmi egysége" },
  { element: "szimbólum", definition: "Valóság + elvont gondolat egysége" },
  { element: "allegória", definition: "Szimbolikus történet konkrét és elvont értelme" },
  { element: "metafora", definition: "Szó valódi és átvitt értékének összekapcsolása" },
];

const CRITICAL_THINKING = [
  { question: "Mi a szöveg fő mondanivalója?", skill: "értelmezés, szintézis" },
  { question: "Hogyan támogatja a szerző érvelését?", skill: "elemzés, kritika" },
  { question: "Ki a narrátori szövegben?", skill: "nézőpont-felismerés" },
  { question: "Milyen előítélet rejlik a szövegben?", skill: "kritikai gondolkodás" },
];

const SPELLING_RULES = [
  { rule: "Végig/végig", context: "Nagy betűs: Végig az úton (ld. betű szó kezdete)", note: "Csak kisbetűvel: végig járok" },
  { rule: "Még/még", context: "Még nem. / Még egyszer", note: "Időhatározó = még; intenzív = még" },
  { rule: "Írás/írásjel", context: "Az írás művészet. Az kérdőjel (.)", note: "Helyes elválasztás: írás/írásjel" },
  { rule: "Nagybetűs nevek", context: "Budapest, Péter, Magyarország", note: "Mindig nagybetűvel kezdjük" },
];

const COMMON_HUNGARIAN = [
  { word: "nyelvhasználat", example: "A beszélgetés nyelvhasználata formális", category: "regiszter" },
  { word: "stílus", example: "Irodalmi vs. köznyelvi stílus", category: "szövegjellemzés" },
  { word: "szóhasználat", example: "Archaikus szóhasználat (rég. szó)", category: "szókincs" },
];

const SCIENTIFIC_TEXT = [
  { term: "absztrakt", definition: "Tudományos cikk rövid összefoglalása" },
  { term: "hipotézis", definition: "Felvetett, még igazolatlan feltételezés" },
  { term: "konklúzió", definition: "Kutatás végeredménye, következtetés" },
  { term: "módszertani rész", definition: "Hogyan végezték a kutatást?" },
];

const CITING_RULES = [
  { format: "Lábjegyzet", example: "¹ Szerző, Mű, oldal", when: "Szöveg alatt megjegyzés" },
  { format: "Irodalomjegyzék", example: "[1] Szerző (év), Mű, Kiadó", when: "Szöveg vége után" },
  { format: "Szövegközi hivatkozás", example: "(Szerző, év)", when: "Társadalom-tudományi" },
];

const ARGUMENT_TECHNIQUES = [
  { technique: "analógia", example: "Ahogy az ember gondolkodik, a számítógép is...", effect: "Megértésre, hasonlatosságra" },
  { technique: "logikai bizonyítás", example: "Minden ember halandó. Szókratész ember. Tehát halandó.", effect: "Racionális meggyőzésre" },
  { technique: "szocializáció", example: "Mindenki ezt gondolja, te is így kellene...", effect: "Közösségi nyomásra" },
  { technique: "etikai érv", example: "Az ember természete jó. Ezért...", effect: "Morális értékekre" },
];

const REFUTATION = [
  { method: "ellenpéldával", example: "Azt mondod, hogy minden kutya veszélyes? De x kutya nem az!", effect: "Általánosítás cáfolása" },
  { method: "logikai hibával", example: "Petitio principii — a tézist bizonyítékként használja", effect: "Érvelési hiba felismerése" },
  { method: "forrás megkérdőjelezésével", example: "Ez az adatforrás megbízhatatlan, mert...", effect: "Bizonyíték hitelességének kérdése" },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateOmagyarNyelvemlekek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const text = pick(TEXTS_OMAGYR, rng);
      const others = TEXTS_OMAGYR.filter(t => t.title !== text.title).map(t => t.title);
      q.push(createMCQ("nyelvtort", "omagyr",
        `Melyik ómagyar nyelvemléket ismerjük az "${text.excerpt}" szövegrészletről?`,
        text.title,
        others.slice(0, 3)
      ));
    } else if (type === 1) {
      const text = pick(TEXTS_OMAGYR, rng);
      q.push(createMCQ("nyelvtort", "omagyr",
        `Körülbelül mely időből való a "${text.title}"?`,
        text.time,
        ["800-as évek", "1000-es évek", "1300-as évek"]
      ));
    } else {
      const text = pick(TEXTS_OMAGYR, rng);
      q.push(createMCQ("nyelvtort", "omagyr",
        `A "${text.title}" mit bizonyít a magyar nyelv fejlődéséről?`,
        "A magyar nyelv ősi gyökerét",
        ["Az államnyelv bevezetését", "A latin dominanciáját", "A német hatást"]
      ));
    }
  }

  // Typing questions
  for (let i = 0; i < 15; i++) {
    const text = pick(TEXTS_OMAGYR, rng);
    q.push({
      type: "typing",
      topic: "nyelvtort",
      subtopic: "omagyr",
      question: `Nevezz meg egy ómagyar nyelvemléket a ${text.time}-ból!`,
      correctAnswers: [text.title],
    } as any);
  }

  return q;
}

export function generateKodexekFejlodese(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const codex = pick(CODICES, rng);
      const others = CODICES.filter(c => c.name !== codex.name).map(c => c.name);
      q.push(createMCQ("nyelvtort", "kodexek",
        `Melyik kódex tartalmazta az "${codex.content}" szövegeit?`,
        codex.name,
        others.slice(0, 3)
      ));
    } else if (type === 1) {
      const codex = pick(CODICES, rng);
      q.push(createMCQ("nyelvtort", "kodexek",
        `Mikor írták a ${codex.name}-t?`,
        codex.date,
        ["1200-1300", "1350-1400", "1500-1550"]
      ));
    } else {
      const codex = pick(CODICES, rng);
      q.push(createMCQ("nyelvtort", "kodexek",
        `Mi a jelentősége a ${codex.name}-nak?`,
        codex.significance,
        ["Első nyomtatott könyv", "Német nyelvü szöveg", "Latin nyelvemléke"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    const codex = pick(CODICES, rng);
    q.push({
      type: "typing",
      topic: "nyelvtort",
      subtopic: "kodexek",
      question: `Melyik kódexet írták a ${codex.date} körül?`,
      correctAnswers: [codex.name],
    } as any);
  }

  return q;
}

export function generateAlliteracioRitmika(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const device = pick(LITERARY_DEVICES.slice(0, 2), rng); // alliteráció, ritmika
      q.push(createMCQ("stilus", "alliteracio_ritmika",
        `Mi az "${device.device}" stilisztikai eszköz?`,
        device.description,
        ["Szó ellentéte", "Személyesítés", "Képszerűség"]
      ));
    } else if (type === 1) {
      const examples = ["sóhaj, sóvárgás, szenvedés", "tenger, teknő, tűz", "nyugalom, nyüzsgés", "zúgás, zambó, zsiraf"];
      const correct = pick(examples.slice(0, 2), rng);
      q.push(createMCQ("stilus", "alliteracio_ritmika",
        `Melyik szópár mutat alliterációt?`,
        correct,
        examples.filter(e => e !== correct).slice(0, 3)
      ));
    } else {
      q.push(createMCQ("stilus", "alliteracio_ritmika",
        `Mi jellemzi a ritmus fogalmát?`,
        "Hangsor rendszeres ismétlődése",
        ["Szó jelentésének váltása", "Hasonló végzések", "Ellentétes gondolatok"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    const type = i % 2;
    q.push({
      type: "typing",
      topic: "stilus",
      subtopic: "alliteracio_ritmika",
      question: type === 0 ? "Mondj egy szövegrészt, amely alliterációval rendelkezik!" : "Milyen hatást ér el az alliteráció?",
      correctAnswers: type === 0 ? ["sóhaj, sóvárgás", "zöld, zengő"] : ["Szépséget, harmóniát", "Hangsúlyos hatást"],
    } as any);
  }

  return q;
}

export function generateIronjaSzatira(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const device = pick(LITERARY_DEVICES.slice(2), rng); // irónia, szatíra, paródia
      q.push(createMCQ("stilus", "irónia_szatira",
        `Melyik stilisztikai eszköz a "${device.example}"?`,
        device.device,
        ["Metafora", "Metonímia", "Hiperbola"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("stilus", "irónia_szatira",
        `Mi az irónia jellegzetessége?`,
        "Ellentétes értelmezéssel mondott kijelentés",
        ["Túlzott méretezés", "Szó helyettesítése más szóval", "Tudomány kritikája"]
      ));
    } else {
      q.push(createMCQ("stilus", "irónia_szatira",
        `A szatíra főként mit tesz?`,
        "Társadalmi kritikát fejez ki gúnnyal",
        ["Vidámságot kelt", "Félelmet szít", "Megrendít érzelmeket"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "stilus",
      subtopic: "irónia_szatira",
      question: "Adj egy példát ironikus kijelentésre!",
      correctAnswers: ["Milyen szép az idő!", "Mennyire talpraesett a viselkedésed!", "Remek ötlet!"],
    } as any);
  }

  return q;
}

export function generateIrodalmielemzes(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const element = pick(LITERARY_ANALYSIS, rng);
      q.push(createMCQ("szoveg", "irodalmi_elemzes",
        `Melyik az "${element.element}" definíciója?`,
        element.definition,
        ["Szó valódi és átvitt értékének összekapcsolása", "Egy-egy nagyobb szövegrész", "Összefüggő gondolatsor"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "irodalmi_elemzes",
        `Mit jelent a motívum a szövegelemzésben?`,
        "Kisebb szövegelemek ismétlődő tartalmi egysége",
        ["Főcharakter személyisége", "Az elbeszélés perspektívája", "A szöveg témája"]
      ));
    } else {
      q.push(createMCQ("szoveg", "irodalmi_elemzes",
        `Mitől különbözik a szimbólum a metaforától?`,
        "A szimbólum elvont gondolatot is hordoz",
        ["A metafora csak költeményekben használatos", "A szimbólum tárgy, a metafora szó", "Nincs különbség"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "szoveg",
      subtopic: "irodalmi_elemzes",
      question: "Adj meg egy motívumot a magyar irodalomból!",
      correctAnswers: ["halál", "szerelem", "szabadság", "természet"],
    } as any);
  }

  return q;
}

export function generateKritikaiGondolkodas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const item = pick(CRITICAL_THINKING, rng);
      q.push(createMCQ("szoveg", "kritikai_gondolkodas",
        `Mit jelent a szövegben ezt kérdezni: "${item.question}"?`,
        item.skill,
        ["Nyelvhelyesség ellenőrzése", "Szóhossz mérése", "Karakterek számlálása"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "kritikai_gondolkodas",
        `Mi az első lépés a kritikai szövegelemzésben?`,
        "A szöveg fő mondanivalójának felismerése",
        ["A szöveget másolatosan felolvasni", "Minden szó jelentését megkeresni", "Az írót gyanúsítani"]
      ));
    } else {
      q.push(createMCQ("szoveg", "kritikai_gondolkodas",
        `Kritikailag gondolkodva, mitől gyanús egy érv?`,
        "Ha nem támogatott bizonyítékokkal",
        ["Ha hosszú", "Ha szép megfogalmazás", "Ha ismeretlenből ered"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "szoveg",
      subtopic: "kritikai_gondolkodas",
      question: "Milyen kérdéseket teszel fel egy szöveg kritikai elemzésekor?",
      correctAnswers: ["Ki az írója?", "Mi az célja?", "Igaz-e az amit mond?"],
    } as any);
  }

  return q;
}

export function generateHelyesirasOsszefoglalo(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const rule = pick(SPELLING_RULES, rng);
      q.push(createMCQ("helyesiras", "osszefoglalo",
        `Hogyan írjuk helyesen: "${rule.rule}"?`,
        rule.context,
        ["Mindig nagybetűvel", "Mindig kisbetűvel", "Sosem írjuk meg"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("helyesiras", "osszefoglalo",
        `Mi a szabály az összetett szavak elválasztásánál?`,
        "A szó szinte minden részét meg lehet választani",
        ["Soha nem lehet választani", "Csak az előtagot", "Csak az utótagot"]
      ));
    } else {
      q.push(createMCQ("helyesiras", "osszefoglalo",
        `Milyen szavakat írunk nagybetűvel?`,
        "Tulajdonneveket és mondatbetűket",
        ["Minden melléknevet", "Minden igét", "Minden szót, ami fontos"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "helyesiras",
      subtopic: "osszefoglalo",
      question: "Helyesen írj egy mondatot nagybetűs szavakkal!",
      correctAnswers: ["Budapest szép város.", "Péter és Anna összebarátkoztak.", "Hétfőn mentem az iskolába."],
    } as any);
  }

  return q;
}

export function generateKozmaGyar(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const item = pick(COMMON_HUNGARIAN, rng);
      q.push(createMCQ("norma", "kozmagyar",
        `A "közmagyar" terméhez sorolható a "${item.word}" szó, melynek kategóriája:`,
        item.category,
        ["Vidéki beszéd", "Szakszókincs", "Tárgyi kifejezés"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("norma", "kozmagyar",
        `Mi a közmagyar?`,
        "Az egész magyar közösség által értett és használt nyelvváltozat",
        ["A szépirodalmi szövegek nyelve", "Csak a finomabban beszélők használata", "Az írott nyelv szabályai"]
      ));
    } else {
      q.push(createMCQ("norma", "kozmagyar",
        `Hol fordul elő leggyakrabban a közmagyar?`,
        "A közmédiában és az oktatásban",
        ["Csak regényekben", "Csak szómagyarázatok körül", "Egyáltalán nem"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "norma",
      subtopic: "kozmagyar",
      question: "Adj egy példát az eltérő nyelvhasználatra!",
      correctAnswers: ["Formális vs. informális", "Tudományos vs. köznyielvi", "Archaikus vs. modern"],
    } as any);
  }

  return q;
}

export function generateTudomanyosSzoveg(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const term = pick(SCIENTIFIC_TEXT, rng);
      q.push(createMCQ("szoveg", "tudomanyos",
        `Mit jelent az "${term.term}" a tudományos szövegben?`,
        term.definition,
        ["Szöveg végét jelöli", "Bevezetés, amióta", "Főcím és alcím"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "tudomanyos",
        `Mit tartalmaz az absztrakt?`,
        "A kutatás rövid összefoglalása",
        ["Az irodalomjegyzéket", "A szerző életrajzát", "A megjegyzéseket"]
      ));
    } else {
      q.push(createMCQ("szoveg", "tudomanyos",
        `A tudományos szöveg fő jellemzője:`,
        "Objektív, pontosan bizonyított információk",
        ["Szubjektív érzelmek", "Képszerű kifejezések", "Népszerű előadás"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "szoveg",
      subtopic: "tudomanyos",
      question: "Nézz meg egy tudományos cikket! Mely részeket tartalmaz?",
      correctAnswers: ["absztrakt", "bevezetés", "konklúzió", "irodalomjegyzék"],
    } as any);
  }

  return q;
}

export function generateErvelesTechnika(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const tech = pick(ARGUMENT_TECHNIQUES, rng);
      q.push(createMCQ("vita", "erveles_technika",
        `A "${tech.technique}" érvelési technika célja:`,
        tech.effect,
        ["Félelmet szítani", "Csúfolódni", "Szórakoztatni"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("vita", "erveles_technika",
        `Mi az érvelés alapja?`,
        "Logikus gondolatsor és bizonyítékok",
        ["Csacsogás", "Gúny", "Hallgatás"]
      ));
    } else {
      q.push(createMCQ("vita", "erveles_technika",
        `Mely érvelési technika a legracionálisabb?`,
        "Logikai bizonyítás",
        ["Szocializáció", "Etikai érv", "Emocionális fellebbezés"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "vita",
      subtopic: "erveles_technika",
      question: "Adj egy példát jó érvelésre egy vitában!",
      correctAnswers: ["Bizonyítékokkal támogatott érv", "Logikus gondolatsor", "Hitelesítés"],
    } as any);
  }

  return q;
}

export function generateCafolasModszer(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const method = pick(REFUTATION, rng);
      q.push(createMCQ("vita", "cáfolás",
        `A "${method.method}" cáfolási módszer hatása:`,
        method.effect,
        ["Az érvelő támogatása", "Az érvelés erősítése", "A vita elmaradása"]
      ));
    } else if (type === 1) {
      q.push(createMCQ("vita", "cáfolás",
        `Mi az ellenpéldával történő cáfolás?`,
        "Általánosítás megcáfolása egy konkrét ellenpéldával",
        ["Az érv támogatása", "Az érv ismeretlenül hagyása", "Az érvelő támadása"]
      ));
    } else {
      q.push(createMCQ("vita", "cáfolás",
        `Melyik cáfolási módszer az etikai szinten legmagasabb?`,
        "A logikai hibák felismerése",
        ["Személyesítés", "Hangnem megváltoztatása", "Szócsata"]
      ));
    }
  }

  for (let i = 0; i < 15; i++) {
    q.push({
      type: "typing",
      topic: "vita",
      subtopic: "cáfolás",
      question: "Hogyan cáfolnál meg egy hamis általánosítást?",
      correctAnswers: ["Ellenpéldával", "Logikai bizonyítással", "Forrás megkérdőjelezésével"],
    } as any);
  }

  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G8_Generators_Hungarian = {
  nyelvtort_omagyr: generateOmagyarNyelvemlekek,
  nyelvtort_kodexek: generateKodexekFejlodese,
  stilus_alliteracio_ritmika: generateAlliteracioRitmika,
  stilus_irónia_szatira: generateIronjaSzatira,
  szoveg_irodalmi_elemzes: generateIrodalmielemzes,
  szoveg_kritikai_gondolkodas: generateKritikaiGondolkodas,
  helyesiras_osszefoglalo: generateHelyesirasOsszefoglalo,
  norma_kozmagyar: generateKozmaGyar,
  szoveg_tudomanyos: generateTudomanyosSzoveg,
  vita_erveles_technika: generateErvelesTechnika,
  vita_cafolás: generateCafolasModszer,
};
