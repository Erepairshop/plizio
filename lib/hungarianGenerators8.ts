// lib/hungarianGenerators8.ts
// Grade 8 (8. osztály) Hungarian language generators
// 10 topics for advanced secondary school: language history, style, text analysis, debate

import type { CurriculumMCQ, CurriculumTyping, CurriculumQuestion } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };
type MagyarTyping = CurriculumTyping & { type: "typing" };

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): MagyarTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
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
  { name: "Müncheni kódex", date: "1466", content: "Imádságok, legendák", significance: "Ómagyar nyelvemlék" },
  { name: "Winkler kódex", date: "1440-50", content: "Bibliai történetek", significance: "Legrégebbi teljes magyar szöveg" },
  { name: "Jókai kódex", date: "1372-1382", content: "Szentférenc-legenda", significance: "Középkori bibliai feldolgozás" },
  { name: "Érdy kódex", date: "1526-1527", content: "Egyházi szövegek", significance: "Protestáns reformáció nyomai" },
];

const LITERARY_DEVICES = [
  { device: "alliteráció", example: "Szél, szikra, szándék", description: "Azonos kezdőhang ismétlése" },
  { device: "ritmika", example: "Taka-taka megy a szekér", description: "Hangsor rendszeres ismétlődése" },
  { device: "irónia", example: "Milyen gyönyörű a vihar!", description: "Ellentétes értelmezéssel mondott kijelentés" },
  { device: "szatíra", example: "A politikus ünnepi szavainak gúnyos felidézése", description: "Társadalmi kritika éles, gúnyos kifejezése" },
  { device: "paródia", example: "Klasszikus mű tréfás utánzása", description: "Mű vagy stílus gúnyos utánzása" },
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
  { question: "Ki a narrátor a szövegben?", skill: "nézőpont-felismerés" },
  { question: "Milyen előítélet rejlik a szövegben?", skill: "kritikai gondolkodás" },
];

const SPELLING_RULES = [
  { rule: "Végig/végig", context: "Mindig kisbetűvel: végig az úton (határozószó)", note: "Mondat elején nagybetűvel kezdjük" },
  { rule: "Még/még", context: "Még nem érkezett meg. / Még egyszer próbáld!", note: "Időhatározóként és nyomatékosításra is használatos" },
  { rule: "Írás/írásjel", context: "Az írás művészet. A kérdőjel (?) kérdést jelöl.", note: "Helyes elválasztás: írás | jel" },
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
  { technique: "szocializáció", example: "Mindenki így gondolja, te is így kellene...", effect: "Közösségi nyomásra" },
  { technique: "etikai érv", example: "Az ember természete jó. Ezért...", effect: "Morális értékekre" },
];

const REFUTATION = [
  { method: "ellenpéldával", example: "Azt mondod, hogy minden kutya veszélyes? De x kutya nem az!", effect: "Általánosítás cáfolása" },
  { method: "logikai hibával", example: "Petitio principii — a tézist bizonyítékként használja", effect: "Érvelési hiba felismerése" },
  { method: "forrás megkérdőjelezésével", example: "Ez az adatforrás megbízhatatlan, mert...", effect: "Bizonyíték hitelességének kérdése" },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateOmagyarNyelvemlekek(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Melyik a legrégebbi ismert magyar szövegemlék?", "Halotti beszéd"],
    ["Mi az Ómagyar Mária-siralom?", ["ómagyar nyelvemléke", "lírai szöveg", "vallásos szöveg"]],
    ["Melyik korszakból való a Halotti Beszéd?", "1100-as évek"],
    ["Mit bizonyítanak az ómagyar szövegemlékek?", ["a magyar nyelv régiségét", "a magyar írásbeliség kezdetét"]],
    ["Melyik ómagyar szöveg vallásos lírai alkotás?", "Ómagyar Mária-siralom"],
    ["Milyen nyelven íródtak az első magyar szövegemlékek?", ["latinul és magyarul", "latin és magyar"]],
    ["Mi a Königsberg-töredék?", ["ómagyar szöveg", "töredékes szövegemlék"]],
    ["Melyik évszázadból való az Ómagyar Mária-siralom?", "1100-as évek"],
    ["Mit jelent az 'ómagyar' szó a nyelvtörténetben?", ["korai magyar", "régi magyar"]],
    ["Milyen műfajú a Halotti Beszéd?", ["halotti prédikáció", "egyházi szöveg"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nyelvtort", "omagyr", t[0], t[1])));
  return q;
}

export function generateKodexekFejlodese(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Melyik a legrégebbi teljes magyar szöveget tartalmazó kódex?", "Winkler kódex"],
    ["Mi a Jókai kódex tartalma?", ["Szentférenc-legenda", "ferences legenda"]],
    ["Milyen szövegeket tartalmaztak a középkori kódexek?", ["egyházi szövegek", "imádságok és legendák"]],
    ["Melyik kódex tartalmaz protestáns reformáció nyomait?", "Érdy kódex"],
    ["Mi a Müncheni kódex?", ["ómagyar nyelvemlék", "középkori kódex"]],
    ["Mikor írták a Jókai kódexet?", "1372-1382"],
    ["Milyen anyagra írták a középkori kódexeket?", ["pergamenre", "bőrre"]],
    ["Ki készítette a középkori kódexeket?", ["szerzetesek", "apácák", "kolostori másolók"]],
    ["Mit jelent a kódex szó?", ["könyv", "kéziratos könyv"]],
    ["Melyik kódex tartalmaz bibliai történeteket?", "Winkler kódex"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nyelvtort", "kodexek", t[0], t[1])));
  return q;
}

export function generateAlliteracioRitmika(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi az alliteráció?", ["azonos kezdőhang ismétlése", "szavak azonos betűvel kezdődnek"]],
    ["Adj példát alliterációra!", ["sóhaj sóvárgás", "szél szikra szándék"]],
    ["Mit jelent a ritmika a szövegben?", ["hangsor rendszeres ismétlődése", "szavak ritmusos elrendezése"]],
    ["Milyen hatást kelt az alliteráció?", ["zenei hatást", "ritmust", "nyomatékot"]],
    ["Hol fordul elő leggyakrabban az alliteráció?", ["versekben", "költeményekben"]],
    ["Mi a különbség az alliteráció és a rím között?", ["alliteráció elején, rím végén", "más helyzetű hangismétlés"]],
    ["Melyik stilisztikai eszköz a 'szép szó, szívből szól'?", "alliteráció"],
    ["Mi az asonánc?", ["azonos magánhangzók ismétlése", "magánhangzó-alliteráció"]],
    ["Mit fejez ki a ritmus a szövegben?", ["tempót és dallamot", "hangzásbeli rendszert"]],
    ["Adj példát ritmikus mondatra!", ["Taka-taka megy a szekér", "Jön a tavasz, virít a rét"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("stilus", "alliteracio_ritmika", t[0], t[1])));
  return q;
}

export function generateIronjaSzatira(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi az irónia?", ["ellentétes értelmezéssel mondott kijelentés", "gúnyos megjegyzés"]],
    ["Adj példát ironikus kijelentésre!", ["Milyen szép az idő!", "Remek ötlet!"]],
    ["Mi a szatíra célja?", ["társadalmi kritika", "gúnyos társadalomkritika"]],
    ["Mi a paródia?", ["mű gúnyos utánzása", "tréfás utánzás"]],
    ["Melyik irodalmi eszköz az 'éles gúny a politikusokra'?", "szatíra"],
    ["Miben különbözik az irónia a szarkazmustól?", ["szarkazmus erősebb és kegyetlenebb", "szarkazmus sértőbb"]],
    ["Ki a szatíra legismertebb magyar mestere?", ["Mikszáth Kálmán", "Karinthy Frigyes"]],
    ["Milyen szándékkal él a szerző iróniával?", ["humoros hatásra", "kritikára", "meglepetésre"]],
    ["Mi a groteszk?", ["komikus és rémisztő keveréke", "torz ábrázolás"]],
    ["Mit jelent az önirónia?", ["önmagán való gúnyolódás", "saját hibák ironikus emlegetése"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("stilus", "irónia_szatira", t[0], t[1])));
  return q;
}

export function generateIrodalmielemzes(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi a metafora?", ["szó átvitt értelmű használata", "képes kifejezés"]],
    ["Mi az allegória?", ["szimbolikus történet elvont értelemmel", "elvont gondolat képes ábrázolása"]],
    ["Mi a szimbólum az irodalomban?", ["valóság és elvont gondolat egysége", "jelkép"]],
    ["Mi a motívum a szövegelemzésben?", ["ismétlődő tartalmi egység", "visszatérő elem"]],
    ["Nevezz meg egy motívumot a magyar irodalomból!", ["halál", "szabadság", "szerelem", "természet"]],
    ["Mi a hasonlat?", ["két dolog hasonlóságát fejezi ki", "összehasonlítás 'mint' szóval"]],
    ["Mi a metonímia?", ["dolog neve helyett kapcsolódó szó áll", "névcsere"]],
    ["Mit jelent a szinekdoché?", ["rész az egész helyett", "egész a rész helyett"]],
    ["Mi a hiperbola?", ["szándékos túlzás", "erősen nagyított kifejezés"]],
    ["Mi a personifikáció?", ["élettelen dolog emberi tulajdonságot kap", "megszemélyesítés"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "irodalmi_elemzes", t[0], t[1])));
  return q;
}

export function generateKritikaiGondolkodas(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi az első lépés a szöveg kritikai elemzésekor?", ["a fő mondanivaló azonosítása", "téma meghatározása"]],
    ["Milyen kérdést teszel fel kritikai olvasáskor a szerzőről?", ["Mi a szerző célja?", "Ki írta?"]],
    ["Mit vizsgálsz egy érv elemzésekor?", ["van-e bizonyítéka", "mire épül az érv"]],
    ["Mi az elfogultság (bias) egy szövegben?", ["egyoldalú nézőpont", "részrehajló vélemény"]],
    ["Hogyan ellenőrzöd egy állítás igazságát?", ["forrásból", "más forrással összevetve"]],
    ["Mit jelent a forrás megbízhatósága?", ["mennyire hiteles az információforrás", "a forrás hitelessége"]],
    ["Mi a propaganda?", ["manipulatív, egyoldalú meggyőzés", "politikai manipuláció"]],
    ["Mit jelent a tényszerű állítás?", ["igazolható, ellenőrizhető kijelentés", "tény"]],
    ["Mit jelent a véleményes állítás?", ["szubjektív nézőpont", "szubjektív kijelentés"]],
    ["Miért fontos a kritikai gondolkodás az olvasásban?", ["hogy ne legyünk manipulálhatók", "a valóság megismeréséhez"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "kritikai_gondolkodas", t[0], t[1])));
  return q;
}

export function generateHelyesirasOsszefoglalo(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
        "Az összetett szavakat az összetételi határnál kell elválasztani",
        ["Soha nem lehet választani", "Csak az előtagot", "Csak az utótagot"]
      ));
    } else {
      q.push(createMCQ("helyesiras", "osszefoglalo",
        `Milyen szavakat írunk nagybetűvel?`,
        "Tulajdonneveket és mondatkezdő betűket",
        ["Minden melléknevet", "Minden igét", "Minden szót, ami fontos"]
      ));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Milyen szavakat írunk nagybetűvel?", ["tulajdonneveket", "tulajdonnév"]],
    ["Hogyan írjuk az összetett szavakat?", ["egybeírva vagy kötőjellel", "összetételi határon választva el"]],
    ["Mi a helyes: 'barátom' vagy 'baratom'?", "barátom"],
    ["Hogyan jelöljük a hosszú magánhangzókat?", ["ékezet", "kettős ékezet"]],
    ["Milyen jelet tesz kérdő mondat végére?", "kérdőjelet"],
    ["Hogyan írjuk a 'ly' hangot az 'újság' szóban?", "j-vel"],
    ["Mi a helyes elválasztás: 'ba-rát' vagy 'bar-át'?", "ba-rát"],
    ["Mikor nem tesszük ki a hosszú mássalhangzót?", ["szóhatáron", "összetett szavak határán"]],
    ["Hogyan írjuk: 'különben' vagy 'külömben'?", "különben"],
    ["Hány szótagra bontható a 'magyarország' szó?", ["öt", "5"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "osszefoglalo", t[0], t[1])));
  return q;
}

export function generateKozmaGyar(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const item = pick(COMMON_HUNGARIAN, rng);
      q.push(createMCQ("norma", "kozmagyar",
        `A "közmagyar" fogalmához sorolható a "${item.word}" szó, melynek kategóriája:`,
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
        ["Csak regényekben", "Csak szómagyarázatokban", "Egyáltalán nem"]
      ));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a közmagyar?", ["az egész magyar közösség által értett nyelvváltozat", "sztenderd magyar"]],
    ["Hol használják leggyakrabban a közmagyart?", ["médiában és oktatásban", "közmédiában"]],
    ["Mi a különbség a formális és informális stílus között?", ["formális szabályosabb, informális kötöttebb", "helyzethez igazított nyelvhasználat"]],
    ["Mi a regiszter a nyelvhasználatban?", ["a formális vagy informális szint", "stílusszint"]],
    ["Mit jelent a nyelvhasználat?", ["hogyan és milyen szavakkal fejezzük ki magunkat", "a szavak megválasztása"]],
    ["Adj példát formális nyelvhasználatra!", ["Tisztelt igazgató úr!", "Kérem szépen engedje meg"]],
    ["Adj példát informális nyelvhasználatra!", ["szia!", "Hogy vagy?"]],
    ["Mi a szleng?", ["informális, csoportspecifikus szókincs", "argó"]],
    ["Mi az irodalmi nyelv?", ["normatív írott nyelvváltozat", "gondosan megformált írott nyelv"]],
    ["Mi a különbség a táj- és irodalmi nyelv között?", ["tájnyelv regionális, irodalmi normatív", "területi különbség"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("norma", "kozmagyar", t[0], t[1])));
  return q;
}

export function generateTudomanyosSzoveg(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi az absztrakt egy tudományos cikkben?", ["rövid összefoglalás", "kutatás rövid kivonata"]],
    ["Mi a hipotézis?", ["igazolatlan feltételezés", "tesztelendő feltevés"]],
    ["Mi a konklúzió?", ["következtetés", "kutatás végeredménye"]],
    ["Milyen fő részekből áll egy tudományos cikk?", ["bevezetés, módszertan, eredmények, konklúzió", "absztrakt és irodalomjegyzék"]],
    ["Mi a módszertani rész?", ["hogyan végezték a kutatást", "a kutatás módszere"]],
    ["Mi jellemzi a tudományos stílust?", ["objektív, pontos, szakszókincs", "tárgyilagos és pontos"]],
    ["Mit jelent a forráshivatkozás?", ["felhasznált irodalom jelölése", "forrás megjelölése"]],
    ["Mi az irodalomjegyzék?", ["felhasznált források listája", "bibliográfia"]],
    ["Miért fontos az objektivitás a tudományban?", ["hogy az eredmények ellenőrizhetők legyenek", "hitelesség miatt"]],
    ["Mit jelent a replikálhatóság?", ["a kutatás megismételhető és ellenőrizhető", "reprodukálhatóság"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "tudomanyos", t[0], t[1])));
  return q;
}

export function generateErvelesTechnika(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Mi az analógia az érvelésben?", ["két hasonló dolog összehasonlítása", "hasonlatosságra épülő érv"]],
    ["Mi a logikai érvelés alapja?", ["premisszák és következtetés", "logikus gondolatsor"]],
    ["Mit jelent az etikai érv?", ["morális értékekre épülő érv", "értékekre hivatkozó érv"]],
    ["Mi az érzelmi érv (patosz)?", ["érzelmekre ható meggyőzés", "érzelmi meggyőzés"]],
    ["Adj példát jó érvelésre!", ["bizonyítékokkal támasztja alá", "logikus és tényeken alapuló"]],
    ["Mi az ellentmondás az érvelésben?", ["egymásnak ellentmondó állítások", "logikai ellentét"]],
    ["Mi a deduktív következtetés?", ["általánosból jutunk a különösre", "általánostól az egyediig"]],
    ["Mi az induktív következtetés?", ["egyediből jutunk az általánosra", "egyeditől az általánosig"]],
    ["Mit jelent az érvrendszer?", ["összefüggő érvek hálózata", "egymást erősítő érvek"]],
    ["Miért kell bizonyíték az érvhez?", ["hogy az állítás hiteles legyen", "az érv alátámasztásához"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("vita", "erveles_technika", t[0], t[1])));
  return q;
}

export function generateCafolasModszer(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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

  const typingPool: [string, string | string[]][] = [
    ["Hogyan cáfolsz meg egy általánosítást?", ["ellenpéldával", "konkrét ellenpéldát mutatva"]],
    ["Mi a petitio principii?", ["a tézist bizonyítékként használják", "körben forgó érvelés"]],
    ["Mit jelent az ad hominem?", ["az érvelő személy támadása", "személyeskedő érv"]],
    ["Hogyan kérdőjelezed meg egy forrás hitelességét?", ["megvizsgálom a forrást", "ki és mikor írta"]],
    ["Mi a szalmabáb-érv?", ["torzított változat cáfolása", "félreértelmezett nézet megdöntése"]],
    ["Mi a hamis dilemma?", ["csak két lehetőséget kínál fel", "mesterséges kétválasztás"]],
    ["Miért fontos a logikai hibák felismerése?", ["hogy ne legyünk megtévesztve", "az érvelés minőségéhez"]],
    ["Adj példát sikeres cáfolatra!", ["ellenpéldával bizonyítva", "logikával lebontva"]],
    ["Mi a túlzott általánosítás hibája?", ["egy esetből általános következtetés", "egy esetből általánosít"]],
    ["Hogyan cáfolod a hamis adatot?", ["megbízható forrásból ellenőrzöm", "más forrással ütköztetem"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("vita", "cáfolás", t[0], t[1])));
  return q;
}

// ─── 14 NEW ADVANCED GENERATORS (G8) ──────────────────────────────────────────

export function generateDiscourseAnalysis(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A szöveg társadalmi kontextusának vizsgálata";
      const wrong = ["Csak nyelvhelyesség ellenőrzése", "Szavakonkénti fordítás", "Ritmusanalízis"];
      q.push(createMCQ("diskurzus", "elemzés", "Mit jelent a diskurzuselemzés?", correct, wrong));
    } else if (type === 1) {
      const correct = "Ki beszél, kinek szól, milyen kontextusban";
      const wrong = ["Milyen szavak a legfontosabbak", "Hányféle rím van", "Hány oldal hosszú"];
      q.push(createMCQ("diskurzus", "elemzés", "Mi a diskurzus szerkezete?", correct, wrong));
    } else {
      const correct = "A hatalom és tudás összefonódása a nyelvben";
      const wrong = ["A beszélő hangja", "A szöveg hossza", "Az ABC sorrendje"];
      q.push(createMCQ("diskurzus", "elemzés", "Mit tanulmányoz Foucault diskurzuselmélete?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mit jelent a diskurzuselemzés?", ["szöveg társadalmi kontextusának vizsgálata", "szöveg és kontextus összefüggése"]],
    ["Mi az intertextualitás?", ["szövegek közötti párbeszéd és hivatkozások", "szövegek egymásra utalása"]],
    ["Milyen szerepe van a hatalomnak a nyelvben?", ["szavak választása kifejezi a hatalmi viszonyokat", "hatalom és tudás összefonódik"]],
    ["Mi a diskurzus szerkezete?", ["ki beszél, kinek szól, milyen kontextusban", "résztvevők és kontextus"]],
    ["Mit jelent a háttérismeret a diskurzusban?", ["az olvasó által már ismert információ", "előzetes tudás"]],
    ["Mi a szövegkörnyezet (kontextus)?", ["az értelmezéshez szükséges körülmények", "a szöveg környezeti háttere"]],
    ["Ki Foucault és mit mondott a diskurzusról?", ["hatalom és tudás összefonódásáról írt", "diskurzuselmélet kidolgozója"]],
    ["Mi a kohézió a szövegben?", ["szövegrészek grammatikai összekapcsolódása", "szöveg belső kapcsolódása"]],
    ["Mit jelent az implikáció?", ["ki nem mondott, de közvetített tartalom", "szövegen túlmutató jelentés"]],
    ["Mi a metadiskurzus?", ["a szövegről szóló szöveg", "önreflexív szöveg"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("diskurzus", "elemzés", t[0], t[1])));
  return q;
}

export function generateSemantics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Szó vagy kifejezés jelentésének tanulmányozása";
      const wrong = ["Hang tanulmányozása", "Mondatszerkesztés", "Írásjelek használata"];
      q.push(createMCQ("szemantika", "szomantika", "Mit jelent a szemantika?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szó jelentésének szövegkörnyezetből való meghatározása";
      const wrong = ["Fordítás másik nyelvbe", "Szóhelyettesítés", "Hangtan vizsgálata"];
      q.push(createMCQ("szemantika", "szomantika", "Mit jelent a kontextusfüggő jelentés?", correct, wrong));
    } else {
      const correct = "Szó többféle jelentésének jelenléte";
      const wrong = ["Egyféle jelentés", "Nincs jelentés", "Csak írott forma"];
      q.push(createMCQ("szemantika", "szomantika", "Mi a poliszémia?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a szemantika?", ["szavak és kifejezések jelentésének tudománya", "jelentéstan"]],
    ["Mi a lexikai jelentés?", ["szó szótárban megtalálható alapjelentése", "szótári jelentés"]],
    ["Mi a figuratív jelentés?", ["átvitt, szószerinti értelmezéstől eltérő jelentés", "képes értelem"]],
    ["Mi a homonímia?", ["különböző jelentésű, azonos alakú szavak", "azonos alak, különböző jelentés"]],
    ["Mi a poliszémia?", ["egy szónak több jelentése van", "többjelentésűség"]],
    ["Mi a szinonima?", ["azonos vagy hasonló jelentésű szavak", "rokon értelmű szó"]],
    ["Mi az antonima?", ["ellentétes jelentésű szavak", "ellentétes értelmű szó"]],
    ["Mi a konnotatív jelentés?", ["szóhoz kapcsolódó mellékjelentés, érzelmi tartalom", "asszociatív jelentés"]],
    ["Mi a denotatív jelentés?", ["szó objektív, elsődleges szótári jelentése", "alapjelentés"]],
    ["Mit jelent a szemantikai mezők fogalma?", ["azonos témakörbe tartozó szavak csoportja", "szócsalád"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szemantika", "szomantika", t[0], t[1])));
  return q;
}

export function generateNarratology(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az elbeszélés szerkezetének tudományos vizsgálata";
      const wrong = ["A történet egyszerű elmondása", "Szókincs katalógusa", "Rím és ritmus"];
      q.push(createMCQ("narratologia", "narracio", "Mit jelent a narratológia?", correct, wrong));
    } else if (type === 1) {
      const correct = "Az elbeszélő személye és nézőpontja";
      const wrong = ["Az írói névjegy", "A könyv fedele", "A szerzői életrajza"];
      q.push(createMCQ("narratologia", "narracio", "Mi a narrátori perspektíva?", correct, wrong));
    } else {
      const correct = "Az elbeszélő saját élményeiből merítve, első személyben szól";
      const wrong = ["Az olvasó nem hallja az elbeszélőt", "Csend van", "Külső narrátor mesél"];
      q.push(createMCQ("narratologia", "narracio", "Mit jelent az autobiografikus narratíva?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a narratológia?", ["az elbeszélés szerkezetének tudománya", "elbeszéléselmélet"]],
    ["Mi az első személyű narráció?", ["az elbeszélő 'én' formában szól", "én-elbeszélés"]],
    ["Mi a harmadik személyű narráció?", ["az elbeszélő külső szempontból mesél", "külső narrátor"]],
    ["Mi a megbízhatatlan narrátor?", ["szándékosan vagy véletlenül félrevezet", "nem hihető narrátor"]],
    ["Mi a narrátori perspektíva?", ["az elbeszélő személye és nézőpontja", "elbeszélői látószög"]],
    ["Mi az omniszciens narrátor?", ["mindentudó elbeszélő", "mindent tud a szereplőkről"]],
    ["Mi a belső monológ?", ["szereplő gondolatainak közvetlen megjelenítése", "tudatfolyam"]],
    ["Mi az autobiografikus narratíva?", ["saját élményből merítő, első személyű elbeszélés", "önéletrajzi elbeszélés"]],
    ["Mit jelent a nézőpont az irodalomban?", ["honnan és kinek a szemével látjuk a történetet", "elbeszélői szempont"]],
    ["Mi a kerettörténet?", ["egy történeten belüli másik történet kerete", "beágyazott elbeszélés"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("narratologia", "narracio", t[0], t[1])));
  return q;
}

export function generatePragmatics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Szavaink használata konkrét helyzetekben és célokkal";
      const wrong = ["Szavak hangzásának tanulmányozása", "Szövegek hosszának mérése", "Betűk számlálása"];
      q.push(createMCQ("pragmatika", "pragmatika", "Mit jelent a pragmatika?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szavak által ki nem mondott, de közvetített szándék";
      const wrong = ["Nyílt parancs", "Közvetlen utasítás", "Szó szerinti közlés"];
      q.push(createMCQ("pragmatika", "pragmatika", "Mi az implicit kommunikáció?", correct, wrong));
    } else {
      const correct = "A szavak értelmezéséhez szükséges körülmények összessége";
      const wrong = ["Szavak hangzása", "Szókincs ismerete", "Nyelvhelyesség"];
      q.push(createMCQ("pragmatika", "pragmatika", "Mit jelent a szövegkörnyezet?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a pragmatika?", ["szavak használata konkrét helyzetekben és célokkal", "nyelvhasználat és szándék tudománya"]],
    ["Mi az előfeltevés a beszédben?", ["amit a hallgatónak már ismernie kell", "közös háttértudás"]],
    ["Mi az implikatúra?", ["az elhangzottakon túlmutató következtetett jelentés", "ki nem mondott üzenet"]],
    ["Mi a beszédaktus?", ["szavakkal való cselekvés", "kérés, parancs, ígéret stb."]],
    ["Mit jelent az udvariassági elv a kommunikációban?", ["a partnernek kellemetlenséget nem okozunk", "udvarias nyelvhasználat szabályai"]],
    ["Mi az implicit kommunikáció?", ["ki nem mondott, de közvetített szándék", "közvetett üzenet"]],
    ["Mi a társalgási implikatúra (Grice)?", ["többlettartalom, amit következtetünk", "következtetett, ki nem mondott tartalom"]],
    ["Mit jelent a relevancia a kommunikációban?", ["az üzenet kapcsolódik a helyzethez", "témába vágó közlés"]],
    ["Mi a direktív beszédaktus?", ["cselekvésre szólítja fel a hallgatót", "kérés vagy parancs típusú aktus"]],
    ["Mi a kontextus szerepe a pragmatikában?", ["az értelmezés a helyzethez kötött", "a szövegkörnyezet befolyásolja a jelentést"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("pragmatika", "pragmatika", t[0], t[1])));
  return q;
}

export function generateStyleVariable(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Egy szerző vagy mű jellegzetes nyelvhasználata";
      const wrong = ["Köznapi beszéd", "Nyelvhelyességi szabály", "Betűalak"];
      q.push(createMCQ("stílus", "variacio", "Mit jelent az idiolektus?", correct, wrong));
    } else if (type === 1) {
      const correct = "Egy társadalmi csoport beszédmódja";
      const wrong = ["Egyéni hiba", "Nyelvhelyességi eltérés", "Fordítási hiba"];
      q.push(createMCQ("stílus", "variacio", "Mit jelent a szociolektus?", correct, wrong));
    } else {
      const correct = "Egy terület vagy vidék beszédmódja";
      const wrong = ["Individuális hiba", "Általános magyar", "Modern beszéd"];
      q.push(createMCQ("stílus", "variacio", "Mit jelent a dialektus?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi az idiolektus?", ["egy személy egyedi nyelvhasználata", "egyéni stílus"]],
    ["Mi a szociolektus?", ["egy társadalmi csoport nyelvhasználata", "csoportnyelv"]],
    ["Mi a dialektus?", ["egy területre jellemző nyelvváltozat", "tájnyelv"]],
    ["Mi a regiszter?", ["a formális vagy informális szint", "stílusszint"]],
    ["Mi az archaizmus?", ["elavult, már nem használatos szó", "régi szó"]],
    ["Mi a neologizmus?", ["újonnan keletkezett szó", "új szó"]],
    ["Mi a zsargon?", ["szakmai vagy csoport-specifikus szókincs", "szaknyelv"]],
    ["Mi az eufemizmus?", ["kellemetlen dolog szépítő megnevezése", "szépítő kifejezés"]],
    ["Mi a stilisztikai variáció?", ["ugyanaz a tartalom különböző stílusban", "stílusváltozat"]],
    ["Adj példát neologizmusra!", ["internet", "szelfizik", "okostelefon"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("stílus", "variacio", t[0], t[1])));
  return q;
}

export function generateCognitiveLanguage(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az elme nyelvhasználatának pszichológiai tanulmányozása";
      const wrong = ["Szókincs memorizálása", "Nyelvtan tanulása", "Kiejtés gyakorlása"];
      q.push(createMCQ("kognitív", "nyelv", "Mit jelent a kognitív nyelvészet?", correct, wrong));
    } else if (type === 1) {
      const correct = "A gondolkodás és a nyelv közötti kapcsolat";
      const wrong = ["A szó hangsúlyozása", "A szó hossza", "A szó eredete"];
      q.push(createMCQ("kognitív", "nyelv", "Mi a szavak mentális reprezentációja?", correct, wrong));
    } else {
      const correct = "A nyelvhasználat memória és figyelem által befolyásolt";
      const wrong = ["A nyelvhasználat véletlenszerű", "Nincs rendszer", "Mindig azonos"];
      q.push(createMCQ("kognitív", "nyelv", "Hogyan befolyásolja az emlékezet a nyelvhasználatot?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a kognitív nyelvészet?", ["az elme és a nyelv kapcsolatának tudománya", "gondolkodás és nyelv kapcsolata"]],
    ["Mit jelent a konceptualizáció?", ["a valóság fogalmi megjelenítése az elmében", "fogalmi ábrázolás"]],
    ["Mi a metaforikus gondolkodás?", ["egyik terület megértése másik fogalmaival", "fogalmi metafora"]],
    ["Mi a prototípus-elmélet?", ["legtipikusabb példányok szerepe a kategorizálásban", "típuspélda-elmélet"]],
    ["Hogyan hat a nyelv a gondolkodásra?", ["a szavak befolyásolják a fogalmi kategóriákat", "a nyelv keretezi a valóságot"]],
    ["Mi a Sapir-Whorf hipotézis?", ["a nyelv meghatározza a gondolkodást", "nyelvi relativizmus"]],
    ["Mi a fogalmi keret (frame)?", ["mentális séma az értelmezéshez", "gondolati keret"]],
    ["Mit jelent a testesültség (embodiment)?", ["a nyelv a testi tapasztalaton alapul", "testből kiinduló megismerés"]],
    ["Mi a kategorizáció szerepe a nyelvben?", ["a világ jelenségeinek csoportosítása", "fogalmi osztályozás"]],
    ["Adj példát fogalmi metaforára!", ["az élet utazás", "az idő pénz", "a vita háború"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("kognitív", "nyelv", t[0], t[1])));
  return q;
}

export function generateSociolinguistics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A társadalom és a nyelv közötti kapcsolat tanulmányozása";
      const wrong = ["Nyelvhelyesség tanítása", "Szókincs növelése", "Kiejtés gyakorlása"];
      q.push(createMCQ("szociolingvisztika", "szocio", "Mit jelent a szociolingvisztika?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szociális osztály, nemi nem, kor szerinti nyelvhasználat-eltérés";
      const wrong = ["Országok közötti eltérés", "Szókincs eltérése", "Kiejtés eltérése csak"];
      q.push(createMCQ("szociolingvisztika", "szocio", "Mit tanulmányozunk szociolingvisztikában?", correct, wrong));
    } else {
      const correct = "A korlátozott és kidolgozott kód közötti különbség a nyelvhasználatban";
      const wrong = ["A felnőttek mindig jobban beszélnek a gyerekeknél", "A férfiak más kódot használnak mint a nők", "A fiatalok mindig modernebb kódot használnak"];
      q.push(createMCQ("szociolingvisztika", "szocio", "Mi a Bernstein-féle kódelmélet?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a szociolingvisztika?", ["társadalom és nyelv kapcsolatának tudománya", "társadalmi nyelvészet"]],
    ["Mi a korlátozott kód (Bernstein)?", ["egyszerűbb, kevésbé elaborált nyelvhasználat", "szűkebb szókészletű stílus"]],
    ["Mi a kidolgozott kód (Bernstein)?", ["gazdag, részletező, kontextustól független stílus", "részletező nyelvhasználat"]],
    ["Mi a diszkriminatív nyelvhasználat?", ["csoport negatív megjelölése a nyelvben", "kirekesztő nyelv"]],
    ["Mi az inkluzív nyelvhasználat?", ["mindenki számára befogadó, semleges forma", "befogadó nyelv"]],
    ["Mi a nemi nyelvhasználat?", ["nők és férfiak eltérő kommunikációs stílusa", "genderlektus"]],
    ["Mi a kódváltás?", ["két nyelv vagy stílus váltakozása egy beszélgetésen belül", "kódváltogatás"]],
    ["Hogyan hat a társadalmi osztály a nyelvhasználatra?", ["magasabb osztály általában elaborált kódot használ", "iskolázottság és stílus összefügg"]],
    ["Mi a stigmatizált nyelvváltozat?", ["negatívan megítélt, alacsony presztízsű változat", "megbélyegzett nyelvhasználat"]],
    ["Mi a presztízsváltozat?", ["magas társadalmi megítélésű nyelvváltozat", "elismert, normatív forma"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szociolingvisztika", "szocio", t[0], t[1])));
  return q;
}

export function generateHistoricalLinguistics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A nyelvek időbeli fejlődésének tanulmányozása";
      const wrong = ["Szavak betűrend szerinti csoportosítása", "Szókincs tanulása", "Nyelvhelyesség"];
      q.push(createMCQ("történeti", "nyelvészet", "Mit jelent a történeti nyelvészet?", correct, wrong));
    } else if (type === 1) {
      const correct = "A szavak eredeti forrása és fejlődése";
      const wrong = ["A szavak helyes kiejtése", "A szavak hossza", "A szavak betűszáma"];
      q.push(createMCQ("történeti", "nyelvészet", "Mit tanulmányoz az etimológia?", correct, wrong));
    } else {
      const correct = "A nyelvek közötti genetikai kapcsolatok vizsgálata";
      const wrong = ["A nyelvek politikai viszonyai", "A nyelvek esztétikai értéke", "A nyelvek számának meghatározása"];
      q.push(createMCQ("történeti", "nyelvészet", "Mit jelent a komparatív nyelvészet?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a történeti nyelvészet?", ["nyelvek időbeli fejlődésének tudománya", "diakrón nyelvészet"]],
    ["Mi az etimológia?", ["szavak eredetének és fejlődésének tanulmányozása", "szóeredet-tan"]],
    ["Mi a komparatív nyelvészet?", ["nyelvek genetikai kapcsolatainak vizsgálata", "összehasonlító nyelvészet"]],
    ["Mi a hangtörvény?", ["hangtani változások szabályszerűsége", "hangváltozás törvénye"]],
    ["Mi a nyelvrokonság?", ["közös ősnyelvre visszavezethető leszármazás", "rokon nyelvek"]],
    ["Mi a finnugor alapnyelv?", ["a magyar és rokon nyelvek közös őse", "ős-finnugor"]],
    ["Mi a nyelvújítás?", ["tudatos szóalkotás a szókincs bővítésére", "18-19. sz.-i magyar szóalkotás"]],
    ["Ki volt Kazinczy Ferenc?", ["a magyar nyelvújítás vezéralakja", "nyelvújítás vezéralakja"]],
    ["Mi a jövevényszó?", ["más nyelvből átvett szó", "idegen eredetű szó"]],
    ["Melyik nyelvcsaládhoz tartozik a magyar?", ["finnugor", "uráli"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("történeti", "nyelvészet", t[0], t[1])));
  return q;
}

export function generateTextLinguistics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A szöveg egészének összekapcsolódása és értelme";
      const wrong = ["Egyedi szavak jelentése", "Mondatok szórendje", "Betűk sorrendje"];
      q.push(createMCQ("szöveglingu", "szöveg", "Mit jelent a szöveglinguisztika?", correct, wrong));
    } else if (type === 1) {
      const correct = "Szövegrészek logikus összekapcsolódása";
      const wrong = ["Szöveg hossza", "Szavak száma", "Mondatok száma"];
      q.push(createMCQ("szöveglingu", "szöveg", "Mit jelent a koherencia?", correct, wrong));
    } else {
      const correct = "Szövegre vonatkozó szabályok és elvárások";
      const wrong = ["Bevezetőszövegek írása", "Mondatok megfordítása", "Szavak cseréje"];
      q.push(createMCQ("szöveglingu", "szöveg", "Mit jelent a textualitás?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a szöveglinguisztika?", ["szöveg egészének összekapcsolódásával foglalkozó tudomány", "szövegelemzés tudománya"]],
    ["Mi a koherencia?", ["szövegrészek logikus összekapcsolódása", "szöveg tartalmi egysége"]],
    ["Mi a kohézió?", ["szövegrészek grammatikai összekapcsolódása", "szöveg grammatikai egysége"]],
    ["Mi az anafora a szövegtanban?", ["korábbi szóra visszautaló elem", "visszautalás"]],
    ["Mi a kataforás utalás?", ["előre mutató szövegbeli utalás", "előre mutató utalás"]],
    ["Mi a téma-réma struktúra?", ["ismert (téma) és új (réma) információ rendezettsége", "mondatinformáció felépítése"]],
    ["Mit jelent a referencia a szövegben?", ["szövegbeli elem valóságra való utalása", "valóságra utalás"]],
    ["Mi a szöveg mikrostruktúrája?", ["mondatszintű összekapcsoltság", "mondatok közötti kapcsolat"]],
    ["Mi a szöveg makrostruktúrája?", ["szöveg egészének globális tartalmi szervezettsége", "szöveg átfogó szerkezete"]],
    ["Mi a szövegtípus?", ["azonos funkcióval bíró szövegek csoportja", "szövegfajta"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szöveglingu", "szöveg", t[0], t[1])));
  return q;
}

export function generateInterlanguage(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A tanuló által kialakított köztes nyelvi rendszer";
      const wrong = ["A tanuló anyanyelve", "A tanított célnyelv", "A szótár"];
      q.push(createMCQ("interlingva", "interfész", "Mit jelent az interlanguage (köztesnyelv)?", correct, wrong));
    } else if (type === 1) {
      const correct = "Az anyanyelv szabályait idegen nyelvre alkalmazni";
      const wrong = ["Szavak fordítása", "Mondatok másolása", "Betűk felismerése"];
      q.push(createMCQ("interlingva", "interfész", "Mit jelent a nyelvi transzfer?", correct, wrong));
    } else {
      const correct = "A hibák rámutatnak a tanuló aktuális tudásszintjére";
      const wrong = ["A hibákat minden áron el kell kerülni", "A tökéletességre kell törekedni", "A szótárat kell használni"];
      q.push(createMCQ("interlingva", "interfész", "Miért értékesek a tanuló hibái?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi az interlanguage (köztesnyelv)?", ["a tanuló által kialakított köztes nyelvi rendszer", "tanuló saját nyelvrendszere"]],
    ["Mi a nyelvi transzfer?", ["anyanyelv szabályainak alkalmazása idegen nyelvre", "L1 hatása L2-re"]],
    ["Mi a túlgeneralizáció a nyelvtanulásban?", ["szabályt nem odaillő esetekre is alkalmaz", "szabály túlhasználata"]],
    ["Mi a fosszilizáció?", ["hibák tartós rögzülése a tanuló nyelvében", "tanuló nyelvi hibái megmerevednek"]],
    ["Mi az L1 transzfer?", ["anyanyelv hatása az idegen nyelv elsajátítására", "anyanyelvből átvett minta"]],
    ["Miért értékesek a tanuló hibái?", ["megmutatják az aktuális tudásszintet", "a köztesnyelvi állapotot tükrözik"]],
    ["Mi a pozitív transzfer?", ["anyanyelv segíti az idegen nyelv tanulását", "hasznos anyanyelvi hatás"]],
    ["Mi a negatív transzfer (interferencia)?", ["anyanyelv gátolja az idegen nyelv tanulását", "zavaró anyanyelvi hatás"]],
    ["Mi az implicit nyelvtudás?", ["öntudatlanul elsajátított, automatizált tudás", "nem tudatos nyelvismeret"]],
    ["Mi az explicit nyelvtudás?", ["tudatosan tanult nyelvtani szabályok ismerete", "szabálytudás"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("interlingva", "interfész", t[0], t[1])));
  return q;
}

export function generatePoeticsAdvanced(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "A költészet formájának és szerkezetének tudománya";
      const wrong = ["A költészet értelmezése", "A szépséget mérése", "Az érzelmek számolása"];
      q.push(createMCQ("poétika", "haladó", "Mit jelent a poétika?", correct, wrong));
    } else if (type === 1) {
      const correct = "A verssor hossza és hangsúlyozása";
      const wrong = ["A versszakok száma", "A szavak száma", "A betűk sorrendje"];
      q.push(createMCQ("poétika", "haladó", "Mit jelent a metrikai szerkezet?", correct, wrong));
    } else {
      const correct = "A vers ritmikai egysége, szótagok meghatározott mintája";
      const wrong = ["A mondatok értelme", "A szavak hossza", "A szókincs gazdagsága"];
      q.push(createMCQ("poétika", "haladó", "Mit jelent a versláb?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a poétika?", ["a költészet formájának és szerkezetének tudománya", "verstan"]],
    ["Mi a versláb?", ["szótagok meghatározott ritmikai mintája", "ritmikai egység"]],
    ["Mi a jambus?", ["rövid + hosszú szótagból álló versláb", "rövid-hosszú"]],
    ["Mi a trocheus?", ["hosszú + rövid szótagból álló versláb", "hosszú-rövid"]],
    ["Mi a daktilus?", ["egy hosszú + két rövid szótagból álló versláb", "hosszú-rövid-rövid"]],
    ["Mi a spondeusz?", ["két hosszú szótagból álló versláb", "hosszú-hosszú"]],
    ["Mit jelent a szabadvers?", ["kötött metrikai szabályokat nem követő vers", "szabad ritmusú vers"]],
    ["Mi az alexandrinus?", ["12 szótagos, cezúrás verssor", "6+6 szótagos verssor"]],
    ["Mi a szonett?", ["14 soros, kötött rímképletű vers", "14 soros verses forma"]],
    ["Mi az enjambement?", ["a mondat átlép a következő verssorba", "áthajlás"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("poétika", "haladó", t[0], t[1])));
  return q;
}

export function generateGenreStudies(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az irodalmi műfajok tanulmányozása és osztályozása";
      const wrong = ["A szerzők életrajzai", "A könyvek címei", "A lapszámozás"];
      q.push(createMCQ("műfajok", "elméleti", "Mit jelent a műfajtan?", correct, wrong));
    } else if (type === 1) {
      const correct = "Az irodalmi műfajok közötti határok elmosódnak";
      const wrong = ["A műfajok szigorúak és rögzíttek", "Nincs műfaj", "Minden azonos"];
      q.push(createMCQ("műfajok", "elméleti", "Mi jellemzi a posztmodern műfajkeveredést?", correct, wrong));
    } else {
      const correct = "Az történelem során a műfajok megváltoznak";
      const wrong = ["A műfajok soha nem változnak", "Az műfajok véletlenszerűek", "Az műfajok nem léteznek"];
      q.push(createMCQ("műfajok", "elméleti", "Hogyan fejlődnek a műfajok?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a ballada?", ["verses epikai-lírai műfaj drámai fordulatokkal", "epikai-lírai-drámai versforma"]],
    ["Mi az óda?", ["magasztaló, emelkedett hangvételű lírai vers", "magasztaló vers"]],
    ["Mi az elégia?", ["szomorú, veszteséget sirató lírai vers", "gyászoló lírai vers"]],
    ["Mi a novella?", ["rövid, tömör elbeszélő prózai mű", "rövid próza"]],
    ["Mi a regény?", ["hosszabb, összetett elbeszélő prózai műfaj", "hosszú elbeszélő mű"]],
    ["Mi a dráma műfaja?", ["párbeszédes, előadásra szánt irodalmi mű", "színpadi mű"]],
    ["Mi a szonett?", ["14 soros kötött rímképletű vers", "14 soros vers"]],
    ["Mi a kisregény?", ["novella és regény közötti terjedelmű mű", "kisebb terjedelmű regény"]],
    ["Mi a líra?", ["az érzelmeket és gondolatokat kifejező költészet", "érzelmeket kifejező vers"]],
    ["Mi az epika?", ["történetmondó irodalmi nem", "eseményeket elbeszélő irodalom"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("műfajok", "elméleti", t[0], t[1])));
  return q;
}

export function generateReceptionAesthetics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az szöveg és olvasó közötti kölcsönhatás tanulmányozása";
      const wrong = ["A könyv nyomtatása", "A szerzői szándék elemzése", "A szókincs"];
      q.push(createMCQ("recepció", "esztétika", "Mit jelent a recepcióesztétika?", correct, wrong));
    } else if (type === 1) {
      const correct = "Az, amit az olvasó a szövegből megért";
      const wrong = ["Az, amit a szerző szándékolt", "Az, amit a kritikus mond", "Az, amit a közönség lát"];
      q.push(createMCQ("recepció", "esztétika", "Mi az olvasói értelmezés?", correct, wrong));
    } else {
      const correct = "A szöveg értelmezése nyitott, a befejezés az olvasóban születik meg";
      const wrong = ["A szöveg egyféleképpen értelmezhető", "A szöveg nem olvasható", "A szöveg értelmezése a szerzőé"];
      q.push(createMCQ("recepció", "esztétika", "Mit jelent a nyitott szöveg?", correct, wrong));
    }
  }

  const typingPool: [string, string | string[]][] = [
    ["Mi a recepcióesztétika?", ["szöveg és olvasó kölcsönhatásának vizsgálata", "befogadásközpontú irodalomelmélet"]],
    ["Mi az elvárási horizont?", ["olvasó szövegtől elvárt tapasztalat- és értékrendszere", "olvasói elvárás"]],
    ["Mit jelent a horizont-kiszélesítés?", ["szöveg felülírja az olvasó elvárásait", "elvárások meghaladása"]],
    ["Mi a hermeneutikai kör?", ["olvasó és szöveg körkörös megértési folyamata", "értelmezési kör"]],
    ["Mi az olvasói értelmezés?", ["amit az olvasó a szövegből megért", "befogadói megértés"]],
    ["Mi a nyitott szöveg (Eco)?", ["értelmezése nem lezárt, az olvasóban születik meg", "többféleképpen értelmezhető szöveg"]],
    ["Ki Jauss és mit dolgozott ki?", ["a recepcióesztétika egyik kidolgozója", "befogadáselmélet"]],
    ["Mi a hermeneutika?", ["szövegek értelmezésének tudománya", "értelmezéstan"]],
    ["Miért változik egy mű értelmezése koronként?", ["az olvasói elvárások és kontextus változnak", "kulturális kontextus változása"]],
    ["Mi az implicit olvasó (Iser)?", ["a szövegbe kódolt elvárt befogadó", "szöveg által feltételezett olvasó"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("recepció", "esztétika", t[0], t[1])));
  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G8_Generators_Hungarian = {
  omagyr: generateOmagyarNyelvemlekek,
  kodexek: generateKodexekFejlodese,
  alliteracio_ritmika: generateAlliteracioRitmika,
  ironia_szatira: generateIronjaSzatira,
  irodalmi_elemzes: generateIrodalmielemzes,
  kritikai_gondolkodas: generateKritikaiGondolkodas,
  osszefoglalo: generateHelyesirasOsszefoglalo,
  kozmagyar: generateKozmaGyar,
  tudomanyos_szoveg: generateTudomanyosSzoveg,
  ervales_technika: generateErvelesTechnika,
  "cafolás": generateCafolasModszer,
  diskurzus_elemzés: generateDiscourseAnalysis,
  szemantika_szomantika: generateSemantics,
  narratologia_narracio: generateNarratology,
  pragmatika_pragmatika: generatePragmatics,
  stílus_variacio: generateStyleVariable,
  kognitív_nyelv: generateCognitiveLanguage,
  szociolingvisztika_szocio: generateSociolinguistics,
  történeti_nyelvészet: generateHistoricalLinguistics,
  szöveglingu_szöveg: generateTextLinguistics,
  interlingva_interfész: generateInterlanguage,
  poétika_haladó: generatePoeticsAdvanced,
  műfajok_elméleti: generateGenreStudies,
  recepció_esztétika: generateReceptionAesthetics,
};
