// Content generators for AstroMagyar explorer games
// Authentic Hungarian language learning content for grades O1-O8
// Completes the Hungarian language curriculum systematically

// ─── TYPES (matching explorer components) ───────────────────────────────────

interface VocabRound {
  emoji: string;
  word: string;
  options: string[];
  correctIndex: number;
  sentence?: string;
  explanation?: string;
}

interface CompRound {
  passage: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface CategoryItem {
  text: string;
  categoryIndex: number;
  explanation?: string;
}

interface SentenceRound {
  words: string[];
  correctOrder: number[];
  hint?: string;
  explanation?: string;
}

interface MemoryPair {
  word: string;
  match: string;
}

interface CategoryRushRound {
  categories: { label: string; color: string }[];
  items: CategoryItem[];
}

// ─── O1 (1. osztály) CONTENT GENERATORS ───────────────────────────────────────
// ABC, betűk, magánhangzók/mássalhangzók, egyszerű szavak, rövid mondatok

export function generateO1CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Magánhangzó", color: "#FF6B6B" },
      { label: "Mássalhangzó", color: "#4ECDC4" },
    ],
    items: [
      { text: "a", categoryIndex: 0, explanation: "Magánhangzó" },
      { text: "b", categoryIndex: 1, explanation: "Mássalhangzó" },
      { text: "e", categoryIndex: 0, explanation: "Magánhangzó" },
      { text: "d", categoryIndex: 1, explanation: "Mássalhangzó" },
      { text: "i", categoryIndex: 0, explanation: "Magánhangzó" },
      { text: "k", categoryIndex: 1, explanation: "Mássalhangzó" },
      { text: "o", categoryIndex: 0, explanation: "Magánhangzó" },
      { text: "m", categoryIndex: 1, explanation: "Mássalhangzó" },
      { text: "u", categoryIndex: 0, explanation: "Magánhangzó" },
      { text: "t", categoryIndex: 1, explanation: "Mássalhangzó" },
    ],
  };
}

export function generateO1SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["A", "kutya", "fut"],
      correctOrder: [0, 1, 2],
      hint: "Főnév + ige",
      explanation: "A kutya fut.",
    },
    {
      words: ["Az", "alma", "piros"],
      correctOrder: [0, 1, 2],
      hint: "Főnév + melléknév",
      explanation: "Az alma piros.",
    },
    {
      words: ["A", "ház", "nagy"],
      correctOrder: [0, 1, 2],
      hint: "Főnév + melléknév",
      explanation: "A ház nagy.",
    },
    {
      words: ["A", "macska", "alszik"],
      correctOrder: [0, 1, 2],
      hint: "Főnév + ige",
      explanation: "A macska alszik.",
    },
    {
      words: ["A", "fa", "zöld"],
      correctOrder: [0, 1, 2],
      hint: "Főnév + melléknév",
      explanation: "A fa zöld.",
    },
  ];
}

export function generateO1PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🐱",
      word: "macska",
      options: ["kutya", "macska", "madár", "hal"],
      correctIndex: 1,
      explanation: "A macska egy kedvenc háziállat.",
    },
    {
      emoji: "🐶",
      word: "kutya",
      options: ["macska", "kutya", "nyúl", "madár"],
      correctIndex: 1,
      explanation: "A kutya ember kedvenc barátja.",
    },
    {
      emoji: "🏠",
      word: "ház",
      options: ["iskola", "ház", "park", "bolt"],
      correctIndex: 1,
      explanation: "A ház ahol lakunk.",
    },
    {
      emoji: "🌳",
      word: "fa",
      options: ["virág", "fa", "fű", "kő"],
      correctIndex: 1,
      explanation: "A fa egy növény.",
    },
    {
      emoji: "🍎",
      word: "alma",
      options: ["körte", "alma", "banana", "szilva"],
      correctIndex: 1,
      explanation: "Az alma egy gyümölcs.",
    },
    {
      emoji: "⭐",
      word: "csillag",
      options: ["hold", "nap", "csillag", "bolygó"],
      correctIndex: 2,
      explanation: "A csillag éjszaka ragyog.",
    },
    {
      emoji: "☀️",
      word: "nap",
      options: ["csillag", "hold", "nap", "felhő"],
      correctIndex: 2,
      explanation: "A nap világít nappal.",
    },
    {
      emoji: "🚗",
      word: "autó",
      options: ["bicikli", "autó", "vonat", "kerékpár"],
      correctIndex: 1,
      explanation: "Az autó szállítóeszköz.",
    },
  ];
}

export function generateO1ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Peti egy macskája van. A macska neve Cirmi. Cirmi hű barát.",
      question: "Mi a macska neve?",
      options: ["Peti", "Cirmi", "Kitti", "Dani"],
      correctIndex: 1,
      explanation: "A szöveg szerint a macska neve Cirmi.",
    },
    {
      passage: "Anna az iskolába megy. Az iskola közel van a házához. Anna szereti az iskolát.",
      question: "Hova megy Anna?",
      options: ["A parkba", "Az iskolába", "A boltba", "A szomszédhoz"],
      correctIndex: 1,
      explanation: "Anna az iskolába megy.",
    },
    {
      passage: "Az alma piros. A másik alma zöld. Mindkettő finom.",
      question: "Milyen színű az első alma?",
      options: ["kék", "piros", "sárga", "lila"],
      correctIndex: 1,
      explanation: "A szöveg szerint az első alma piros.",
    },
  ];
}

export function generateO1MemoryPairContent(): MemoryPair[] {
  return [
    { word: "kutya", match: "🐶" },
    { word: "macska", match: "🐱" },
    { word: "ház", match: "🏠" },
    { word: "fa", match: "🌳" },
    { word: "nap", match: "☀️" },
    { word: "alma", match: "🍎" },
  ];
}

// ─── O2 (2. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Szótagolás, szófajok alapjai, mondatfajták, j-ly szabályok

export function generateO2CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Főnév", color: "#95E1D3" },
      { label: "Ige", color: "#F38181" },
    ],
    items: [
      { text: "asztal", categoryIndex: 0, explanation: "Főnév - dolog" },
      { text: "fut", categoryIndex: 1, explanation: "Ige - cselekvés" },
      { text: "könyv", categoryIndex: 0, explanation: "Főnév - dolog" },
      { text: "olvas", categoryIndex: 1, explanation: "Ige - cselekvés" },
      { text: "iskola", categoryIndex: 0, explanation: "Főnév - hely" },
      { text: "tanul", categoryIndex: 1, explanation: "Ige - cselekvés" },
      { text: "barát", categoryIndex: 0, explanation: "Főnév - személy" },
      { text: "játszik", categoryIndex: 1, explanation: "Ige - cselekvés" },
      { text: "ceruza", categoryIndex: 0, explanation: "Főnév - dolog" },
      { text: "ír", categoryIndex: 1, explanation: "Ige - cselekvés" },
    ],
  };
}

export function generateO2SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["Ki", "vagy", "te"],
      correctOrder: [0, 1, 2],
      hint: "Kérdő mondat",
      explanation: "Ki vagy te?",
    },
    {
      words: ["Én", "diák", "vagyok"],
      correctOrder: [0, 1, 2],
      hint: "Kijelentő mondat",
      explanation: "Én diák vagyok.",
    },
    {
      words: ["Mit", "csinálsz"],
      correctOrder: [0, 1],
      hint: "Kérdő mondat",
      explanation: "Mit csinálsz?",
    },
    {
      words: ["Az", "autó", "gyors"],
      correctOrder: [0, 1, 2],
      hint: "Kijelentő mondat",
      explanation: "Az autó gyors.",
    },
    {
      words: ["Mikor", "jössz", "haza"],
      correctOrder: [0, 1, 2],
      hint: "Kérdő mondat",
      explanation: "Mikor jössz haza?",
    },
  ];
}

export function generateO2PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "📚",
      word: "könyv",
      options: ["ceruza", "könyv", "füzet", "toll"],
      correctIndex: 1,
      explanation: "A könyv olvasásra való.",
    },
    {
      emoji: "✏️",
      word: "ceruza",
      options: ["toll", "radír", "ceruza", "zsírkréta"],
      correctIndex: 2,
      explanation: "A ceruza írásra használjuk.",
    },
    {
      emoji: "🏫",
      word: "iskola",
      options: ["park", "bolt", "iskola", "könyvtár"],
      correctIndex: 2,
      explanation: "Az iskolában tanulunk.",
    },
    {
      emoji: "👨‍🎓",
      word: "diák",
      options: ["tanár", "igazgató", "diák", "portás"],
      correctIndex: 2,
      explanation: "A diák az iskolában tanul.",
    },
    {
      emoji: "👩‍🏫",
      word: "tanár",
      options: ["diák", "tanár", "orvos", "mérnök"],
      correctIndex: 1,
      explanation: "A tanár tanít az iskolában.",
    },
    {
      emoji: "🍎",
      word: "gyümölcs",
      options: ["zöldség", "gyümölcs", "hús", "kenyér"],
      correctIndex: 1,
      explanation: "Az alma egy gyümölcs.",
    },
    {
      emoji: "⚽",
      word: "labda",
      options: ["könyv", "játék", "labda", "babzsák"],
      correctIndex: 2,
      explanation: "A labdával lehet játszani.",
    },
    {
      emoji: "🎒",
      word: "hátizsák",
      options: ["táska", "málas", "hátizsák", "kuffer"],
      correctIndex: 2,
      explanation: "A hátizsákban könyveket viszünk.",
    },
  ];
}

export function generateO2ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Kinga az iskolában van. Az anyja várja. Az iskola után Kinga hazamegy. Otthon végzi a leckéjét.",
      question: "Hol van Kinga?",
      options: ["Az iskolában", "Otthon", "A parkban", "Az úton"],
      correctIndex: 0,
      explanation: "Kinga az iskolában van.",
    },
    {
      passage: "Péter szeret játszani a labdával. A barátja Jani is ott van. Együtt futnak a mezőn.",
      question: "Mit szeretnek Péter és Jani?",
      options: ["Olvasni", "Játszani", "Aludni", "Rajzolni"],
      correctIndex: 1,
      explanation: "Péter és Jani szeret játszani.",
    },
    {
      passage: "Sára szépen rajzol. A tanár dicséri. A rajza nagyon szép és színes. Sára boldog.",
      question: "Mit csinál Sára?",
      options: ["Ír", "Rajzol", "Olvas", "Tanul"],
      correctIndex: 1,
      explanation: "Sára szép rajzokat készít.",
    },
  ];
}

export function generateO2MemoryPairContent(): MemoryPair[] {
  return [
    { word: "asz-tal", match: "asztal" },
    { word: "is-ko-la", match: "iskola" },
    { word: "ce-ru-za", match: "ceruza" },
    { word: "ba-rát", match: "barát" },
    { word: "lab-da", match: "labda" },
    { word: "há-ti-zsák", match: "hátizsák" },
  ];
}

// ─── O3 (3. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Szófajok (melléknevek, számnevek), toldalékok, helyesírás

export function generateO3CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Főnév", color: "#FF6B6B" },
      { label: "Melléknév", color: "#4ECDC4" },
      { label: "Ige", color: "#FFE66D" },
    ],
    items: [
      { text: "ország", categoryIndex: 0, explanation: "Főnév" },
      { text: "szép", categoryIndex: 1, explanation: "Melléknév" },
      { text: "olvas", categoryIndex: 2, explanation: "Ige" },
      { text: "erős", categoryIndex: 1, explanation: "Melléknév" },
      { text: "gyerek", categoryIndex: 0, explanation: "Főnév" },
      { text: "fut", categoryIndex: 2, explanation: "Ige" },
      { text: "éhes", categoryIndex: 1, explanation: "Melléknév" },
      { text: "szék", categoryIndex: 0, explanation: "Főnév" },
      { text: "él", categoryIndex: 2, explanation: "Ige" },
      { text: "kemény", categoryIndex: 1, explanation: "Melléknév" },
    ],
  };
}

export function generateO3SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["A", "nagy", "ház", "szépen", "áll"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Bővített mondat",
      explanation: "A nagy ház szépen áll.",
    },
    {
      words: ["Az", "okos", "gyerek", "jól", "tanul"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Bővített mondat",
      explanation: "Az okos gyerek jól tanul.",
    },
    {
      words: ["A", "piros", "autó", "gyorsan", "megy"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Bővített mondat",
      explanation: "A piros autó gyorsan megy.",
    },
    {
      words: ["Az", "éhes", "macska", "meg", "akar", "enni"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Összetett mondat",
      explanation: "Az éhes macska meg akar enni.",
    },
  ];
}

export function generateO3PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🔥",
      word: "forró",
      options: ["hideg", "meleg", "forró", "langyos"],
      correctIndex: 2,
      explanation: "A tűz forró és veszélyes.",
    },
    {
      emoji: "❄️",
      word: "hideg",
      options: ["meleg", "forró", "hideg", "szeles"],
      correctIndex: 2,
      explanation: "A tél hideg évszak.",
    },
    {
      emoji: "🌞",
      word: "meleg",
      options: ["hideg", "forró", "meleg", "szeles"],
      correctIndex: 2,
      explanation: "A nyár meleg évszak.",
    },
    {
      emoji: "🌊",
      word: "víz",
      options: ["szikra", "levegő", "víz", "por"],
      correctIndex: 2,
      explanation: "A víz alapvető szükséglet.",
    },
    {
      emoji: "⛰️",
      word: "hegy",
      options: ["völgy", "mező", "hegy", "síkság"],
      correctIndex: 2,
      explanation: "A hegy magas terület.",
    },
    {
      emoji: "🌳",
      word: "erdő",
      options: ["mező", "erdő", "park", "kert"],
      correctIndex: 1,
      explanation: "Az erdő sok fával van tele.",
    },
    {
      emoji: "🦁",
      word: "állat",
      options: ["növény", "állat", "tárgy", "ember"],
      correctIndex: 1,
      explanation: "Az állat él és mozog.",
    },
    {
      emoji: "🌺",
      word: "virág",
      options: ["fű", "virág", "lomb", "ág"],
      correctIndex: 1,
      explanation: "A virág szép és illatozó.",
    },
  ];
}

export function generateO3ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Márk az erdőben sétál. Sok állat él az erdőben. Látja a madarakat és a nyúlakat. Szép nap van.",
      question: "Hol sétál Márk?",
      options: ["A parkban", "Az erdőben", "Az utcán", "Az iskolában"],
      correctIndex: 1,
      explanation: "Márk az erdőben sétál.",
    },
    {
      passage: "A fák levelei piros és sárga. Az ősz szép. Az időjárás hűvös. Az emberek vastag ruhákat viselnek.",
      question: "Melyik évszak ez?",
      options: ["Tavasz", "Nyár", "Ősz", "Tél"],
      correctIndex: 2,
      explanation: "A piros és sárga levelek az ősz jele.",
    },
    {
      passage: "Zita szeret rajzolni. Minden nap rajzol. A festékei színesek. Az ő munkái nagyon szépek.",
      question: "Mit szeret csinálni Zita?",
      options: ["Futni", "Rajzolni", "Olvasni", "Tanulni"],
      correctIndex: 1,
      explanation: "Zita szeret rajzolni.",
    },
  ];
}

export function generateO3MemoryPairContent(): MemoryPair[] {
  return [
    { word: "nagy", match: "kicsi" },
    { word: "forró", match: "hideg" },
    { word: "gyors", match: "lassú" },
    { word: "magas", match: "alacsony" },
    { word: "könnyű", match: "nehéz" },
    { word: "világos", match: "sötét" },
  ];
}

// ─── O4 (4. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Igeidők, szóösszetételek, írásjelek, mondatrészek

export function generateO4CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Jelen idő", color: "#95E1D3" },
      { label: "Múlt idő", color: "#F38181" },
    ],
    items: [
      { text: "futok", categoryIndex: 0, explanation: "Jelen idő" },
      { text: "futottam", categoryIndex: 1, explanation: "Múlt idő" },
      { text: "tanulok", categoryIndex: 0, explanation: "Jelen idő" },
      { text: "tanultam", categoryIndex: 1, explanation: "Múlt idő" },
      { text: "játszom", categoryIndex: 0, explanation: "Jelen idő" },
      { text: "játszottam", categoryIndex: 1, explanation: "Múlt idő" },
      { text: "eszem", categoryIndex: 0, explanation: "Jelen idő" },
      { text: "ettem", categoryIndex: 1, explanation: "Múlt idő" },
      { text: "iszom", categoryIndex: 0, explanation: "Jelen idő" },
      { text: "ittam", categoryIndex: 1, explanation: "Múlt idő" },
    ],
  };
}

export function generateO4SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["A", "szép", "szőnyeg", "a", "nappaliban", "van"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Helyhatározó előzménye",
      explanation: "A szép szőnyeg a nappaliban van.",
    },
    {
      words: ["Az", "asztalnál", "három", "szék", "áll"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Helyhatározó",
      explanation: "Az asztalnál három szék áll.",
    },
    {
      words: ["A", "macska", "az", "éjszaka", "alszik"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Időhatározó",
      explanation: "A macska az éjszaka alszik.",
    },
    {
      words: ["A", "gyerekek", "vidáman", "játszottak", "az", "udvaron"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Módhatározó és helyhatározó",
      explanation: "A gyerekek vidáman játszottak az udvaron.",
    },
  ];
}

export function generateO4PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🎂",
      word: "szülinap",
      options: ["karácsonyt", "szülinapot", "húsvétot", "újévet"],
      correctIndex: 1,
      explanation: "A szülinap születésnapod ünnepe.",
    },
    {
      emoji: "🌻",
      word: "napraforgó",
      options: ["rózsa", "napraforgó", "tulipán", "margaréta"],
      correctIndex: 1,
      explanation: "A napraforgó nagy sárga virág.",
    },
    {
      emoji: "⌚",
      word: "óra",
      options: ["készülék", "óra", "naptár", "zsebóra"],
      correctIndex: 1,
      explanation: "Az óra az időt mutatja.",
    },
    {
      emoji: "📺",
      word: "televízió",
      options: ["rádió", "telefon", "televízió", "számítógép"],
      correctIndex: 2,
      explanation: "A televízión képet és hangot nézünk.",
    },
    {
      emoji: "🍕",
      word: "pizza",
      options: ["leves", "pizza", "tészta", "rizs"],
      correctIndex: 1,
      explanation: "A pizza olasz étel.",
    },
    {
      emoji: "🎵",
      word: "zene",
      options: ["zene", "dal", "hang", "melodia"],
      correctIndex: 0,
      explanation: "A zene szép és érzelmes.",
    },
    {
      emoji: "⚡",
      word: "villám",
      options: ["felhő", "villám", "eső", "szél"],
      correctIndex: 1,
      explanation: "A villám nagyon veszélyes.",
    },
    {
      emoji: "🎨",
      word: "festészet",
      options: ["zene", "tánc", "festészet", "dráma"],
      correctIndex: 2,
      explanation: "A festészet szép művészet.",
    },
  ];
}

export function generateO4ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Gergő és Sándor barátok. Együtt járnak az iskolába. Sándor szeret matekozni, Gergő pedig magyart. Minden nap tanulnak.",
      question: "Mit szeret Sándor és mit szeret Gergő?",
      options: ["Matekot", "Magyart", "Matekot és magyart", "Történelmet"],
      correctIndex: 2,
      explanation: "Sándor szeret matekozni, Gergő pedig magyart szereti.",
    },
    {
      passage: "A szabadban sétáltunk. Az út mellett fák voltak. A levegő friss volt. A nap világosan ragyogott. Nagyon szép nap volt.",
      question: "Milyen volt az időjárás?",
      options: ["Esős", "Szeles", "Szép és napos", "Borongós"],
      correctIndex: 2,
      explanation: "A szöveg szerint szép nap és világos nap volt.",
    },
    {
      passage: "Terike egyik kedvenc könyve a Toldi. A Toldiról sok versenyt írtak. A történet nagyon érdekes és szép.",
      question: "Mi Terike kedvenc könyve?",
      options: ["A Toldi", "A Lélek", "Az Egri csillagok", "A Nyomorultak"],
      correctIndex: 0,
      explanation: "A szöveg szerint a Toldi Terike kedvenc könyve.",
    },
  ];
}

export function generateO4MemoryPairContent(): MemoryPair[] {
  return [
    { word: "fut", match: "futott" },
    { word: "eszik", match: "evett" },
    { word: "iszik", match: "ivott" },
    { word: "tanul", match: "tanult" },
    { word: "olvas", match: "olvasott" },
    { word: "játszik", match: "játszott" },
  ];
}

// ─── O5 (5. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Mondatelemzés, alanyi-tárgyas ragozás, igekötők

export function generateO5CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Alanyi ragozás", color: "#AA96DA" },
      { label: "Tárgyas ragozás", color: "#FCBAD3" },
    ],
    items: [
      { text: "futok", categoryIndex: 0, explanation: "Alanyi - nincs tárgy" },
      { text: "keresem", categoryIndex: 1, explanation: "Tárgyas - valamit keresek" },
      { text: "tanulok", categoryIndex: 0, explanation: "Alanyi - tanulás cselekvés" },
      { text: "látom", categoryIndex: 1, explanation: "Tárgyas - valamit látok" },
      { text: "alszom", categoryIndex: 0, explanation: "Alanyi - senkit nem érint" },
      { text: "olvasom", categoryIndex: 1, explanation: "Tárgyas - valami olvasok" },
      { text: "gondolkozom", categoryIndex: 0, explanation: "Alanyi - gondolkodás" },
      { text: "rajzolom", categoryIndex: 1, explanation: "Tárgyas - valamit rajzolok" },
      { text: "sétálok", categoryIndex: 0, explanation: "Alanyi - járás" },
      { text: "szeretem", categoryIndex: 1, explanation: "Tárgyas - valakít szeretek" },
    ],
  };
}

export function generateO5SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["Az", "ember", "aki", "sokat", "tanul", "sikeres", "lesz"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Mellékmondatos mondat",
      explanation: "Az ember aki sokat tanul sikeres lesz.",
    },
    {
      words: ["A", "könyv", "amit", "olvastam", "nagyon", "érdekes", "volt"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Mellékmondatos mondat",
      explanation: "A könyv amit olvastam nagyon érdekes volt.",
    },
    {
      words: ["Az", "iskolában", "tanultunk", "és", "játszottunk"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Kapcsolatos mondat",
      explanation: "Az iskolában tanultunk és játszottunk.",
    },
    {
      words: ["Ha", "szép", "az", "idő", "majd", "ki", "fogunk", "menni"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Feltételes mondat",
      explanation: "Ha szép az idő majd ki fogunk menni.",
    },
  ];
}

export function generateO5PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🎭",
      word: "dráma",
      options: ["költészet", "dráma", "regény", "mesekönyv"],
      correctIndex: 1,
      explanation: "A dráma szónoki műnem.",
    },
    {
      emoji: "🎪",
      word: "cirkusz",
      options: ["bábszínház", "cirkusz", "mozi", "opera"],
      correctIndex: 1,
      explanation: "A cirkuszban akrobatákat tanulmányozhatunk.",
    },
    {
      emoji: "🏛️",
      word: "múzeum",
      options: ["galéria", "múzeum", "könyvtár", "levéltár"],
      correctIndex: 1,
      explanation: "A múzeumban műkincseket mutatnak.",
    },
    {
      emoji: "🎤",
      word: "előadás",
      options: ["koncert", "előadás", "bemutató", "verseny"],
      correctIndex: 1,
      explanation: "Az előadáson egy ember beszél vagy zenél.",
    },
    {
      emoji: "📖",
      word: "regény",
      options: ["vers", "regény", "történet", "szakkönyv"],
      correctIndex: 1,
      explanation: "A regény hosszú elbeszélő mű.",
    },
    {
      emoji: "🎬",
      word: "film",
      options: ["fénykép", "film", "videó", "sugárzás"],
      correctIndex: 1,
      explanation: "A filmet a moziban nézzük.",
    },
    {
      emoji: "🎸",
      word: "gitár",
      options: ["hegedű", "gitár", "trombita", "klarinét"],
      correctIndex: 1,
      explanation: "A gitár húros hangszer.",
    },
    {
      emoji: "🌍",
      word: "világ",
      options: ["ország", "város", "világ", "föld"],
      correctIndex: 2,
      explanation: "A világ az összes ország és az emberek lakóhelye.",
    },
  ];
}

export function generateO5ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Ávé meglátogatta az unokáját. Az unokája öt éves volt. Nagyon szeretett az unokájával játszani. Szép időt töltöttek együtt.",
      question: "Kivel játszott Ávé?",
      options: ["A barátjával", "Az unokájával", "A testvérével", "Az anyukájával"],
      correctIndex: 1,
      explanation: "Ávé az unokájával játszott.",
    },
    {
      passage: "A fiú egy mesét olvasott az apjának. A mese egy királynőről szólt. Az apja figyelmesen hallotta. Mindketten szeretik a meséket.",
      question: "Kinek olvasott mesét a fiú?",
      options: ["Az anyukájának", "Az apjának", "A testvérének", "A nagybátyjának"],
      correctIndex: 1,
      explanation: "A fiú az apjának olvasott mesét.",
    },
    {
      passage: "A katonák az országot védelmezték. Nagyon bátrak voltak. Az emberek hálásak voltak. Az ő bátorságuk legendás lett.",
      question: "Mit tettek a katonák?",
      options: ["Épített", "Tanított", "Védelmezett", "Nyomon követett"],
      correctIndex: 2,
      explanation: "A katonák az országot védelmezték.",
    },
  ];
}

export function generateO5MemoryPairContent(): MemoryPair[] {
  return [
    { word: "megír", match: "befejez (írást)" },
    { word: "elolvas", match: "végigolvas" },
    { word: "felkel", match: "feláll" },
    { word: "lemegy", match: "lefelé halad" },
    { word: "bejön", match: "belép" },
    { word: "kimegy", match: "elhagyja a helyet" },
  ];
}

// ─── O6 (6. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Szóképek, stíluseszközök, szövegértelmezés

export function generateO6CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Hasonlat", color: "#FF6B6B" },
      { label: "Metafora", color: "#4ECDC4" },
      { label: "Személyesítés", color: "#FFE66D" },
    ],
    items: [
      { text: "Az ég olyan kék mint a tenger", categoryIndex: 0, explanation: "Hasonlat - olyan...mint" },
      { text: "A szív egy zongora", categoryIndex: 1, explanation: "Metafora - közvetlen egyenlítés" },
      { text: "Az időjárás vidám", categoryIndex: 2, explanation: "Személyesítés - ember tulajdonsága" },
      { text: "A tűz olyan meleg mint a nap", categoryIndex: 0, explanation: "Hasonlat" },
      { text: "Az élet egy út", categoryIndex: 1, explanation: "Metafora" },
      { text: "A szél suttogott", categoryIndex: 2, explanation: "Személyesítés" },
      { text: "Szép vagy mint egy rózsa", categoryIndex: 0, explanation: "Hasonlat" },
      { text: "Az idő pénz", categoryIndex: 1, explanation: "Metafora - közvetlen azonosítás" },
      { text: "A fa énekelt a szélben", categoryIndex: 2, explanation: "Személyesítés" },
      { text: "Az ősz olyan szép mint a tavasz", categoryIndex: 0, explanation: "Hasonlat" },
    ],
  };
}

export function generateO6SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["Az", "idő", "repül", "mint", "egy", "madár"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Hasonlatot tartalmazó mondat",
      explanation: "Az idő repül mint egy madár.",
    },
    {
      words: ["Az", "élet", "egy", "csata", "amit", "meg", "kell", "nyerni"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Metaforát tartalmazó mondat",
      explanation: "Az élet egy csata amit meg kell nyerni.",
    },
    {
      words: ["A", "szív", "kopogott", "a", "mellkasban"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Személyesítés",
      explanation: "A szív kopogott a mellkasban.",
    },
    {
      words: ["A", "hold", "figyelni", "kezdett", "a", "földre"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Személyesítés",
      explanation: "A hold figyelni kezdett a földre.",
    },
  ];
}

export function generateO6PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "📚",
      word: "irodalom",
      options: ["történelem", "irodalom", "nyelvtan", "helyesírás"],
      correctIndex: 1,
      explanation: "Az irodalom szépirodalmi művek tanulmányozása.",
    },
    {
      emoji: "🖼️",
      word: "képzőművészet",
      options: ["zene", "tánc", "képzőművészet", "film"],
      correctIndex: 2,
      explanation: "A képzőművészet képekkel foglalkozik.",
    },
    {
      emoji: "💭",
      word: "érzelmi",
      options: ["józan", "érzelmi", "objektív", "logikai"],
      correctIndex: 1,
      explanation: "Az érzelmi szövegek az érzelmeket fejezik ki.",
    },
    {
      emoji: "🎨",
      word: "stílus",
      options: ["mód", "stílus", "forma", "jellegzetesség"],
      correctIndex: 1,
      explanation: "Az írói stílus az egyéni megírási módszer.",
    },
    {
      emoji: "✍️",
      word: "szerző",
      options: ["szerkesztő", "szerző", "fordító", "nyomda"],
      correctIndex: 1,
      explanation: "A szerző az a személy aki az írást megírta.",
    },
    {
      emoji: "🎭",
      word: "karakter",
      options: ["szereplő", "karakter", "főszereplő", "mellékszereplő"],
      correctIndex: 1,
      explanation: "A karakter egy fiktív személy a könyvben.",
    },
    {
      emoji: "📖",
      word: "mese",
      options: ["történet", "mese", "regény", "novella"],
      correctIndex: 1,
      explanation: "A mese egy rövid történet.",
    },
    {
      emoji: "🌟",
      word: "hős",
      options: ["karakter", "hős", "szereplő", "figura"],
      correctIndex: 1,
      explanation: "A hős az a karakter aki az eseményeket vezeti.",
    },
  ];
}

export function generateO6ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "Petőfi Sándor Kiskőrösön született. Csodálatos költőnk volt. A Nemzeti dalt írta. Ezt a verset sok emberünk szereti.",
      question: "Ki írta a Nemzeti dalt?",
      options: ["Arany János", "Petőfi Sándor", "Ady Endre", "Babits Mihály"],
      correctIndex: 1,
      explanation: "Petőfi Sándor írta a Nemzeti dalt.",
    },
    {
      passage: "A szöveg azt mutatja hogy az egyedüllét szomorú. Az ember magányos és üres. A barátok és család fontos az embernek. Az embernek szükséges a szeretet.",
      question: "Mi a szöveg témája?",
      options: ["Az öröm", "Az egyedüllét szomorúsága", "A bolondság", "Az anyagiasság"],
      correctIndex: 1,
      explanation: "A szöveg az egyedüllét szomorúságáról szól.",
    },
    {
      passage: "Az antik Görögország a filozófia bölcsője volt. Az ott lakók sokat gondolkoztak az életről. Az ő gondolatai még ma is élő tradíció.",
      question: "Milyen volt az antik Görögország?",
      options: ["Háborús", "Szegény", "A filozófia bölcsője", "Tudatlan"],
      correctIndex: 2,
      explanation: "Az antik Görögország a filozófia bölcsője volt.",
    },
  ];
}

export function generateO6MemoryPairContent(): MemoryPair[] {
  return [
    { word: "hasonlat", match: "szép mint a rózsa" },
    { word: "metafora", match: "az idő pénz" },
    { word: "megszemélyesítés", match: "a szél süvít" },
    { word: "túlzás", match: "halálra nevettem" },
    { word: "ellentét", match: "kicsi a bors, de erős" },
    { word: "ismétlés", match: "messze, messze, messze" },
  ];
}

// ─── O7 (7. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Nyelvi rétegek, szóalkotás, mondattan haladó

export function generateO7CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Köznyelv", color: "#95E1D3" },
      { label: "Szleng", color: "#F38181" },
      { label: "Tájnyelv", color: "#FFE66D" },
    ],
    items: [
      { text: "ember", categoryIndex: 0, explanation: "Köznyelv - hivatalos" },
      { text: "csávó", categoryIndex: 1, explanation: "Szleng - fiatalok nyelvezete" },
      { text: "gazda", categoryIndex: 2, explanation: "Tájnyelv - vidéki kifejezés" },
      { text: "autó", categoryIndex: 0, explanation: "Köznyelv - általánosan használt" },
      { text: "csaj", categoryIndex: 1, explanation: "Szleng - fiatalok nyelvezete" },
      { text: "leányzó", categoryIndex: 2, explanation: "Tájnyelv - vidéki kifejezés" },
      { text: "dolgozik", categoryIndex: 0, explanation: "Köznyelv" },
      { text: "meló", categoryIndex: 1, explanation: "Szleng" },
      { text: "kapál", categoryIndex: 2, explanation: "Tájnyelv" },
      { text: "lány", categoryIndex: 0, explanation: "Köznyelv" },
    ],
  };
}

export function generateO7SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["Az", "ember", "aki", "sokat", "utazik", "sok", "tapasztalatot", "szerez"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Alárendelt mellékmondatos",
      explanation: "Az ember aki sokat utazik sok tapasztalatot szerez.",
    },
    {
      words: ["Bár", "fáradt", "vagyok", "még", "is", "tanulni", "fogok"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Engedményes monda",
      explanation: "Bár fáradt vagyok még is tanulni fogok.",
    },
    {
      words: ["Ha", "nem", "tanulsz", "akkor", "nem", "leszel", "sikeres"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Feltételes mondat",
      explanation: "Ha nem tanulsz akkor nem leszel sikeres.",
    },
    {
      words: ["Nem", "csak", "szép", "hanem", "intelligens", "is"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Több tulajdonság együtt",
      explanation: "Nem csak szép hanem intelligens is.",
    },
  ];
}

export function generateO7PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🏭",
      word: "ipar",
      options: ["mezőgazdaság", "ipar", "kereskedelem", "turizmus"],
      correctIndex: 1,
      explanation: "Az ipar gyárakban zajlik.",
    },
    {
      emoji: "🌾",
      word: "mezőgazdaság",
      options: ["halászat", "mezőgazdaság", "vadászat", "termelés"],
      correctIndex: 1,
      explanation: "A mezőgazdaság a föld megművelése.",
    },
    {
      emoji: "🏛️",
      word: "kormányzat",
      options: ["frakció", "kormányzat", "párt", "egyesület"],
      correctIndex: 1,
      explanation: "A kormányzat az ország vezetése.",
    },
    {
      emoji: "⚖️",
      word: "jogszabály",
      options: ["szokás", "jogszabály", "tradíció", "szokás"],
      correctIndex: 1,
      explanation: "A jogszabály az állam által meghatározott szabály.",
    },
    {
      emoji: "🗳️",
      word: "választás",
      options: ["plebiszcit", "választás", "referendum", "szavazás"],
      correctIndex: 1,
      explanation: "A választáson az emberek szavaznak.",
    },
    {
      emoji: "📜",
      word: "kiváltság",
      options: ["jog", "kiváltság", "kötelezettség", "felelősség"],
      correctIndex: 1,
      explanation: "A kiváltság különleges jog.",
    },
    {
      emoji: "🤝",
      word: "szövetség",
      options: ["csapat", "szövetség", "egyesület", "szervezet"],
      correctIndex: 1,
      explanation: "A szövetség több ország vagy csoport kapcsolata.",
    },
    {
      emoji: "🌐",
      word: "nemzetközi",
      options: ["nemzeti", "nemzetközi", "helyi", "regionális"],
      correctIndex: 1,
      explanation: "A nemzetközi több ország között zajlik.",
    },
  ];
}

export function generateO7ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "A francia forradalom 1789-ben kezdődött. Ez a forradalom sok nyomorult embert szabadított meg. Az egyenlőség ötlete nőtt meg ebben az időben.",
      question: "Mikor kezdődött a francia forradalom?",
      options: ["1685-ben", "1789-ben", "1850-ben", "1945-ben"],
      correctIndex: 1,
      explanation: "A francia forradalom 1789-ben kezdődött.",
    },
    {
      passage: "A család az alapja a társadalomnak. Az anyacsalád nélkül nincs erős közösség. A gyerekek a szüleitől tanulnak szabályokat és értékeket.",
      question: "Milyen szerepe van a családnak?",
      options: ["Kevés", "Nem fontos", "Alapja a társadalomnak", "Bizonytalan"],
      correctIndex: 2,
      explanation: "A család az alapja a társadalomnak.",
    },
    {
      passage: "Az ősi Róma nagy impérium volt. A rómaiak úttörők voltak a jogszabályban. Az ő jogrendszere még napjainkban is hatással van.",
      question: "Miért volt fontos az ősi Róma?",
      options: ["Katonai ereje", "Jogrend rendszere", "Termékeit", "Vadászata"],
      correctIndex: 1,
      explanation: "Róma jogrend rendszere még most is hatással van.",
    },
  ];
}

export function generateO7MemoryPairContent(): MemoryPair[] {
  return [
    { word: "összetétel", match: "napraforgó" },
    { word: "képzés", match: "tanító" },
    { word: "rövidítés", match: "tv" },
    { word: "mozaikszó", match: "MÁV" },
    { word: "szóelvonás", match: "csel (cselekedet)" },
    { word: "hangutánzás", match: "csörög" },
  ];
}

// ─── O8 (8. osztály) CONTENT GENERATORS ───────────────────────────────────────
// Retorika, érvelés, stilisztika, szövegalkotás

export function generateO8CategoryRushContent(): CategoryRushRound {
  return {
    categories: [
      { label: "Logikai érv", color: "#FF6B6B" },
      { label: "Érzelmi érv", color: "#4ECDC4" },
      { label: "Tekintélyi érv", color: "#FFE66D" },
    ],
    items: [
      { text: "Az adatok azt mutatják hogy...", categoryIndex: 0, explanation: "Logikai érvelés" },
      { text: "Érezhetjük hogy...", categoryIndex: 1, explanation: "Érzelmi érv" },
      { text: "Az tudósok szerint...", categoryIndex: 2, explanation: "Tekintélyi érv" },
      { text: "A statisztika bizonyítja hogy...", categoryIndex: 0, explanation: "Logikai érvelés" },
      { text: "Szomorú lenne ha...", categoryIndex: 1, explanation: "Érzelmi érv" },
      { text: "A kormány megállapította hogy...", categoryIndex: 2, explanation: "Tekintélyi érv" },
      { text: "A megfigyelés szerint...", categoryIndex: 0, explanation: "Logikai érvelés" },
      { text: "Szeretünk amikor...", categoryIndex: 1, explanation: "Érzelmi érv" },
      { text: "Az szerzők azt mondják...", categoryIndex: 2, explanation: "Tekintélyi érv" },
      { text: "Az ismeretek alapján...", categoryIndex: 0, explanation: "Logikai érvelés" },
    ],
  };
}

export function generateO8SentenceBuilderContent(): SentenceRound[] {
  return [
    {
      words: ["Az", "amit", "mondtak", "nem", "igaz", "mert", "az", "adatok", "mást", "mutatnak"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hint: "Retorikai megcáfolás",
      explanation: "Az amit mondtak nem igaz mert az adatok mást mutatnak.",
    },
    {
      words: ["Habár", "nehéz", "az", "út", "meg", "lehet", "tenni"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Kitartás kifejezése",
      explanation: "Habár nehéz az út meg lehet tenni.",
    },
    {
      words: ["Ha", "figyelmesen", "hallgatunk", "akkor", "megtanuljuk", "az", "igazságot"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Oktatási mondat",
      explanation: "Ha figyelmesen hallgatunk akkor megtanuljuk az igazságot.",
    },
    {
      words: ["Az", "vita", "során", "világossá", "lett", "hogy", "mindkettőnek", "van", "oka"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      hint: "Érveléses megbeszélés",
      explanation: "Az vita során világossá lett hogy mindkettőnek van oka.",
    },
  ];
}

export function generateO8PictureWordContent(): VocabRound[] {
  return [
    {
      emoji: "🎓",
      word: "végzettség",
      options: ["tanulmány", "végzettség", "diploma", "oklevél"],
      correctIndex: 1,
      explanation: "A végzettség az oktatás befejezése.",
    },
    {
      emoji: "💼",
      word: "szakma",
      options: ["munka", "szakma", "foglalkozás", "hivatás"],
      correctIndex: 1,
      explanation: "A szakma a tanult munka.",
    },
    {
      emoji: "🌱",
      word: "fejlődés",
      options: ["közérzet", "fejlődés", "progresz", "haladás"],
      correctIndex: 1,
      explanation: "A fejlődés a növekedés és előrehaladás.",
    },
    {
      emoji: "🏆",
      word: "siker",
      options: ["nyereség", "siker", "győzelem", "elismerés"],
      correctIndex: 1,
      explanation: "A siker a cél elérése.",
    },
    {
      emoji: "⚡",
      word: "innováció",
      options: ["tradíció", "innováció", "feltalálás", "újítás"],
      correctIndex: 1,
      explanation: "Az innováció az új ötlet vagy módszer.",
    },
    {
      emoji: "🔬",
      word: "kutatás",
      options: ["tanulmány", "kutatás", "vizsgálat", "felfedezés"],
      correctIndex: 1,
      explanation: "A kutatás új ismeretek felderítése.",
    },
    {
      emoji: "💡",
      word: "ötlet",
      options: ["terv", "ötlet", "gondolat", "elképzelés"],
      correctIndex: 1,
      explanation: "Az ötlet egy új gondolat.",
    },
    {
      emoji: "🎯",
      word: "cél",
      options: ["erőfeszítés", "cél", "szándék", "ambíció"],
      correctIndex: 1,
      explanation: "A cél amit el akarunk érni.",
    },
  ];
}

export function generateO8ReadingCompContent(): CompRound[] {
  return [
    {
      passage: "A digitális kor az információ terjesztésének forradalma. Az internet mindent megváltoztatott. Az emberek gyorsabban kommunikálnak és tanulnak. A technológia az élet részévé vált.",
      question: "Mi hozta meg a forradalmat?",
      options: ["Az ipar", "A technológia és internet", "A kereskedelmi", "A vallás"],
      correctIndex: 1,
      explanation: "Az internet és technológia hozta meg az információs forradalmat.",
    },
    {
      passage: "Az oktatás a jövő alapja. A gyerekek oktatása nélkül nem lehet fejlődés. A tanárnak felelőssége van a közösségnek. A tanulásba történő beruházás a legjobb döntés.",
      question: "Miért fontos az oktatás?",
      options: ["Szórakozásért", "A jövő alapja", "Nyereségért", "Hatalomért"],
      correctIndex: 1,
      explanation: "Az oktatás a jövő alapja.",
    },
    {
      passage: "Az etika az erkölcs tudománya. Az ember szabad választásra van képes. Az ő választásai hatnak másokra. Az etikai gondolkodás szükséges az emberi közösségben.",
      question: "Mi az etika?",
      options: ["A jogszabály", "Az erkölcs tudománya", "A pénz", "A politika"],
      correctIndex: 1,
      explanation: "Az etika az erkölcs tudománya.",
    },
  ];
}

export function generateO8MemoryPairContent(): MemoryPair[] {
  return [
    { word: "tudományos", match: "szakszavak, tárgyilagos" },
    { word: "publicisztikai", match: "meggyőzés, vélemény" },
    { word: "szépirodalmi", match: "szóképek, hangulat" },
    { word: "hivatalos", match: "szabályos, formális" },
    { word: "társalgási", match: "közvetlen, laza" },
    { word: "szónoki", match: "retorikai kérdés" },
  ];
}
