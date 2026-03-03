export type BadgeId = "vocals" | "shield" | "explorer" | "tracker" | "key";
export type KodexLevelType = "word" | "sentence" | "secretcode";

export type KodexCategory = {
  key: string;
  emoji: string;
  label: Record<string, string>;
};

export const BADGE_DEFS: Record<BadgeId, {
  emoji: string;
  name: Record<string, string>;
  desc: Record<string, string>;
}> = {
  vocals:   {
    emoji: "🎵",
    name: { hu: "Vokális", de: "Vokal", en: "Vocals", ro: "Vocale" },
    desc: { hu: "Minden magánhangzó feltárul", de: "Alle Vokale werden aufgedeckt", en: "All vowels revealed", ro: "Toate vocalele dezvăluite" },
  },
  shield:   {
    emoji: "🛡️",
    name: { hu: "Pajzs", de: "Schild", en: "Shield", ro: "Scut" },
    desc: { hu: "A következő hibás tipp nem számít életnek", de: "Nächste Fehltipp kostet kein Leben", en: "Next wrong guess costs no life", ro: "Urmatoarea greseală nu costă o viata" },
  },
  explorer: {
    emoji: "🗺️",
    name: { hu: "Felfedező", de: "Forscher", en: "Explorer", ro: "Explorator" },
    desc: { hu: "Kategória neve és emojija megjelenik", de: "Kategorie-Name und Emoji werden angezeigt", en: "Category name and emoji revealed", ro: "Numele și emoji-ul categoriei dezvăluite" },
  },
  tracker:  {
    emoji: "🔍",
    name: { hu: "Nyomkövető", de: "Spürhund", en: "Tracker", ro: "Urmăritor" },
    desc: { hu: "A leggyakoribb ismeretlen betű feltárul", de: "Häufigster unbekannter Buchstabe enthüllt", en: "Most common unknown letter revealed", ro: "Cea mai frecventă literă necunoscută dezvăluită" },
  },
  key:      {
    emoji: "🔓",
    name: { hu: "Kulcs", de: "Schlüssel", en: "Key", ro: "Cheie" },
    desc: { hu: "Egy véletlenszerű ismeretlen betű feltárul", de: "Ein zufälliger unbekannter Buchstabe enthüllt", en: "One random unknown letter revealed", ro: "O literă aleatorie necunoscută dezvăluită" },
  },
};

export const LEVEL_BADGE: Record<number, BadgeId> = {
  1: "vocals", 2: "shield", 3: "explorer",
  4: "tracker", 5: "key",   6: "vocals",
  7: "shield",  8: "explorer", 9: "tracker",
};

export const THEMES: Record<string, KodexCategory> = {
  animals: { key: "animals", emoji: "🐾", label: { hu: "Állatok",     de: "Tiere",          en: "Animals",     ro: "Animale" } },
  food:    { key: "food",    emoji: "🍕", label: { hu: "Ételek",      de: "Essen",           en: "Food",        ro: "Mâncare" } },
  sports:  { key: "sports",  emoji: "⚽", label: { hu: "Sport",       de: "Sport",           en: "Sports",      ro: "Sport" } },
  nature:  { key: "nature",  emoji: "🌿", label: { hu: "Természet",   de: "Natur",           en: "Nature",      ro: "Natură" } },
  tech:    { key: "tech",    emoji: "💻", label: { hu: "Technológia", de: "Technologie",     en: "Technology",  ro: "Tehnologie" } },
  film:    { key: "film",    emoji: "🎬", label: { hu: "Film & Zene", de: "Film & Musik",    en: "Film & Music",ro: "Film & Muzică" } },
  science: { key: "science", emoji: "🔬", label: { hu: "Tudomány",    de: "Wissenschaft",    en: "Science",     ro: "Știință" } },
  history: { key: "history", emoji: "🏛️", label: { hu: "Történelem",  de: "Geschichte",      en: "History",     ro: "Istorie" } },
  culture: { key: "culture", emoji: "🎭", label: { hu: "Kultúra",     de: "Kultur",          en: "Culture",     ro: "Cultură" } },
  secret:  { key: "secret",  emoji: "🔐", label: { hu: "Titkos Kód", de: "Geheimcode",      en: "Secret Code", ro: "Cod Secret" } },
};

export type LevelConfig = {
  levelNum: number;
  type: KodexLevelType;
  theme: KodexCategory;
  showCatEmoji: boolean;
  showCatName: boolean;
  lives: number;
  badgeReward?: BadgeId;
};

export const LEVEL_CONFIGS: LevelConfig[] = [
  { levelNum: 1,  type: "word",       theme: THEMES.animals, showCatEmoji: true,  showCatName: true,  lives: 6, badgeReward: "vocals"   },
  { levelNum: 2,  type: "word",       theme: THEMES.food,    showCatEmoji: true,  showCatName: true,  lives: 6, badgeReward: "shield"   },
  { levelNum: 3,  type: "word",       theme: THEMES.sports,  showCatEmoji: true,  showCatName: false, lives: 5, badgeReward: "explorer" },
  { levelNum: 4,  type: "sentence",   theme: THEMES.nature,  showCatEmoji: false, showCatName: true,  lives: 5, badgeReward: "tracker"  },
  { levelNum: 5,  type: "sentence",   theme: THEMES.tech,    showCatEmoji: false, showCatName: false, lives: 5, badgeReward: "key"      },
  { levelNum: 6,  type: "sentence",   theme: THEMES.film,    showCatEmoji: true,  showCatName: false, lives: 4, badgeReward: "vocals"   },
  { levelNum: 7,  type: "sentence",   theme: THEMES.science, showCatEmoji: false, showCatName: false, lives: 4, badgeReward: "shield"   },
  { levelNum: 8,  type: "sentence",   theme: THEMES.history, showCatEmoji: false, showCatName: true,  lives: 4, badgeReward: "explorer" },
  { levelNum: 9,  type: "sentence",   theme: THEMES.culture, showCatEmoji: false, showCatName: false, lives: 3, badgeReward: "tracker"  },
  { levelNum: 10, type: "secretcode", theme: THEMES.secret,  showCatEmoji: true,  showCatName: true,  lives: 3 },
];

export type SecretCodeData = {
  text: string;
  // 9 unique letters to reveal, one collected after each level 1-9
  revealLetters: string[];
};

// 5 secret codes per language — one is randomly selected at expedition start
const SECRET_CODES_LIST: Record<string, SecretCodeData[]> = {
  hu: [
    { text: "A TUDÁS A LEGJOBB FEGYVER",          revealLetters: ["T", "U", "Á", "L", "G", "J", "B", "F", "Y"] },
    // leaves: A,D,S,E,O,V,R
    { text: "MINDEN NEHÉZSÉG ELTŰNIK IDŐVEL",      revealLetters: ["M", "N", "H", "É", "Z", "S", "G", "T", "Ű"] },
    // leaves: I,D,E,L,K,Ő,V
    { text: "A BARÁTSÁG A LEGNAGYOBB KINCS",       revealLetters: ["B", "Á", "R", "S", "L", "E", "N", "Y", "O"] },
    // leaves: A,T,G,K,I,C
    { text: "BÁTORSÁG NÉLKÜL NINCS SIKER",         revealLetters: ["B", "Á", "T", "O", "G", "N", "K", "Ü", "I"] },
    // leaves: R,S,É,L,C,E
    { text: "LÉGY ÖNMAGAD ÉS BOLDOG LESZEL",       revealLetters: ["L", "É", "G", "Y", "Ö", "N", "M", "D", "S"] },
    // leaves: A,B,O,E,Z
     {
    text: "KITARTÁS MINDENT LEGYŐZ",
    revealLetters: ["K", "I", "T", "A", "R", "S", "M", "N", "D"]
  },
  // marad: E,L,G,Y,Ő,Z

  {
    text: "HIGGY MAGADBAN MINDIG",
    revealLetters: ["H", "I", "G", "Y", "M", "A", "D", "B", "N"]
  },
  // marad: O,I,D,G

  {
    text: "A BÁTORSÁG ÚT A SIKERHEZ",
    revealLetters: ["A", "B", "Á", "T", "O", "R", "S", "Ú", "I"]
  },
  // marad: G,T,A,K,E,R,H,E,Z

  {
    text: "A JÖVŐ AZOKÉ AKIK TESZNEK",
    revealLetters: ["A", "J", "Ö", "V", "Z", "O", "K", "T", "E"]
  },
  // marad: A,K,I,K,S,Z,N,E,K
  ],
  de: [
    { text: "DAS WISSEN ÖFFNET ALLE TÜREN",        revealLetters: ["D", "S", "W", "I", "N", "Ö", "F", "L", "Ü"] },
    // leaves: A,E,T,R
    { text: "ÜBUNG MACHT DEN MEISTER STARK",       revealLetters: ["Ü", "B", "U", "G", "M", "C", "H", "D", "I"] },
    // leaves: N,A,T,E,S,R,K
    { text: "EHRLICHKEIT IST DIE BESTE TUGEND",    revealLetters: ["H", "R", "L", "C", "K", "T", "D", "B", "U"] },
    // leaves: E,I,S,G,N
    { text: "GLAUBE AN DICH UND DEINE STÄRKE",     revealLetters: ["G", "L", "U", "B", "N", "D", "I", "C", "H"] },
    // leaves: A,E,S,T,Ä,R,K
    { text: "MIT AUSDAUER ERREICHT MAN ALLES",     revealLetters: ["M", "I", "T", "U", "D", "R", "C", "H", "N"] },
    // leaves: A,S,E,L
    {
    text: "DAS WISSEN ÖFFNET ALLE TÜREN",
    revealLetters: ["D", "S", "W", "I", "N", "Ö", "F", "L", "Ü"]
  },
  // leaves: A,E,T,R   

  {
    text: "WISSEN IST MACHT UND STÄRKE",
    revealLetters: ["W", "I", "S", "E", "N", "M", "A", "C", "H"]
  },
  // leaves: T,U,D,Ä,R,K,E   

  {
    text: "ÜBUNG MACHT DEN MEISTER STARK",
    revealLetters: ["Ü", "B", "U", "G", "M", "C", "H", "D", "I"]
  },
  // leaves: N,A,T,E,S,R,K  

  {
    text: "EHRLICHKEIT IST DIE BESTE TUGEND",
    revealLetters: ["H", "R", "L", "C", "K", "T", "D", "B", "U"]
  },
  // leaves: E,I,S,G,N   

  {
    text: "GLAUBE AN DICH UND DEINE STÄRKE",
    revealLetters: ["G", "L", "U", "B", "N", "D", "I", "C", "H"]
  },
  // leaves: A,E,S,T,Ä,R,K  

  {
    text: "MIT AUSDAUER ERREICHT MAN ALLES",
    revealLetters: ["M", "I", "T", "U", "D", "R", "C", "H", "N"]
  },
  // leaves: A,S,E,L   

  {
    text: "GEDULD FÜHRT ZUM GROSSEN ZIEL",
    revealLetters: ["G", "E", "D", "U", "L", "F", "H", "R", "T"]
  },
  // leaves: Z,U,M,G,R,O,S,S,E,N,Z,I,E,L  

  {
    text: "WER KÄMPFT KANN GEWINNEN",
    revealLetters: ["W", "E", "R", "K", "Ä", "M", "P", "F", "T"]
  },
  // leaves: K,A,N,N,G,E,W,I,N,N,E,N   
  ],
  en: [
    { text: "KNOWLEDGE IS THE BEST WEAPON",        revealLetters: ["K", "N", "W", "L", "D", "G", "I", "H", "B"] },
    // leaves: O,E,S,T,A,P
    { text: "THE ONLY WAY OUT IS THROUGH",         revealLetters: ["T", "H", "N", "L", "Y", "W", "A", "U", "S"] },
    // leaves: E,O,I,R,G
    { text: "BELIEVE IN YOURSELF AND YOUR DREAMS", revealLetters: ["B", "L", "I", "V", "N", "Y", "O", "F", "D"] },
    // leaves: E,U,R,S,A,M
    { text: "FAILURE IS THE MOTHER OF SUCCESS",    revealLetters: ["F", "A", "L", "U", "R", "T", "H", "M", "O"] },
    // leaves: I,E,S,C
    { text: "DREAM BIG WORK HARD STAY HUMBLE",     revealLetters: ["D", "R", "M", "B", "I", "G", "W", "K", "H"] },
    // leaves: E,A,O,S,T,Y,U,L
    en: [
  {
    text: "KNOWLEDGE IS THE BEST WEAPON",
    revealLetters: ["K", "N", "W", "L", "D", "G", "I", "H", "B"]
  },
  // leaves: O,E,S,T,A,P   

  {
    text: "THE ONLY WAY OUT IS THROUGH",
    revealLetters: ["T", "H", "N", "L", "Y", "W", "A", "U", "S"]
  },
  // leaves: E,O,I,R,G  

  {
    text: "BELIEVE IN YOURSELF AND YOUR DREAMS",
    revealLetters: ["B", "L", "I", "V", "N", "Y", "O", "F", "D"]
  },
  // leaves: E,U,R,S,A,M  

  {
    text: "FAILURE IS THE MOTHER OF SUCCESS",
    revealLetters: ["F", "A", "L", "U", "R", "T", "H", "M", "O"]
  },
  // leaves: I,E,S,C   

  {
    text: "DREAM BIG WORK HARD STAY HUMBLE",
    revealLetters: ["D", "R", "M", "B", "I", "G", "W", "K", "H"]
  },
  // leaves: E,A,O,S,T,Y,U,L   
]
  ],
  ro: [
    { text: "CUNOAȘTEREA ESTE CEA MAI BUNĂ",       revealLetters: ["C", "U", "N", "O", "Ș", "R", "S", "M", "I"] },
    // leaves: A,T,E,B,Ă
    { text: "CURAJUL DESCHIDE ORICE USĂ",          revealLetters: ["C", "U", "R", "J", "L", "D", "S", "H", "O"] },
    // leaves: A,E,I,Ă
    { text: "VIITORUL DEPINDE DE ALEGERILE TALE",  revealLetters: ["V", "I", "T", "O", "R", "U", "D", "P", "N"] },
    // leaves: L,E,A,G
    { text: "RĂBDAREA ȘI MUNCA BIRUIESC TOTUL",    revealLetters: ["R", "Ă", "B", "D", "Ș", "I", "M", "N", "C"] },
    // leaves: A,E,U,S,T,O,L
    { text: "PRIETENII ADEVĂRAȚI SUNT COMORI",     revealLetters: ["P", "R", "I", "T", "N", "D", "V", "Ă", "S"] },
    // leaves: E,A,U,C,O,M
     {
    text: "CUNOAȘTEREA ESTE CEA MAI BUNĂ",
    revealLetters: ["C", "U", "N", "O", "Ș", "R", "S", "M", "I"]
  },
  // leaves: A,T,E,B,Ă  

  {
    text: "CURAJUL DESCHIDE ORICE UȘĂ",
    revealLetters: ["C", "U", "R", "J", "L", "D", "S", "H", "O"]
  },
  // leaves: A,E,I,E,U,Ă   

  {
    text: "VIITORUL DEPINDE DE ALEGERILE TALE",
    revealLetters: ["V", "I", "T", "O", "R", "U", "D", "P", "N"]
  },
  // leaves: L,E,A,G,E,R,I,L,E,T,A,L,E  

  {
    text: "RĂBDAREA ȘI MUNCA BIRUIESC TOTUL",
    revealLetters: ["R", "Ă", "B", "D", "Ș", "I", "M", "N", "C"]
  },
  // leaves: A,E,U,S,T,O,L 

  {
    text: "PRIETENII ADEVĂRAȚI SUNT COMORI",
    revealLetters: ["P", "R", "I", "T", "N", "D", "V", "Ă", "S"]
  },
  // leaves: E,A,U,C,O,M  
  ],
};

// ─── WORD DATA (levels 1-3) ────────────────────────────────────────────────────

const WORDS_HU: Record<string, string[]> = {
  animals: [
    "KUTYA", "MACSKA", "TIGRIS", "ELEFÁNT", "ZSIRÁF", "DELFIN", "PINGVIN",
    "NYÚL", "MEDVE", "FARKAS", "GEPÁRD", "GORILLA", "ZEBRA", "PAPAGÁJ",
    "KROKODIL", "TEKNŐS", "OROSZLÁN", "PELIKÁN", "BÖLÉNY", "HIÉNA",
    "HANGYA", "PILLANGÓ", "RÓKA", "SZARVAS", "KECSKE", "TEHÉN", "LÓ",
    "KENGURU", "PANDA", "CÁPA", "BAGOLY", "SAS", "GALAMB", "KACSA",
    "HATTYÚ", "FLAMINGÓ", "MÓKUS", "SÜNDISZNÓ", "BORZ", "DENEVÉR",
    "ŐZ","VADDISZNÓ","HÓD","VIDRA","RÉNSZARVAS","JÁVORSZARVAS",
    "HIÚZ","PUMA","LEOPÁRD","ANTILOP","ZEBU","JAK","LÁMA","ALPAKA",
    "KOALA","CSIMPÁNZ","ORANGUTÁN","MAJMOK","MORMOTA","CSACSI",
    "SZAMÁR","BIVALY","TEVE","DROMEDÁR","CSIKÓ","CSIKÓHAL",
    "SÜGÉR","HARCSA","PISZTRÁNG","TONHAL","LAZAC","HERING",
    "ANGOLNA","POLIP","MEDÚZA","RÁK","HOMÁR","KAGYLÓ",
    "KAJMÁN","ALLIGÁTOR","IGUÁNA","KOBRA","VIPERA","PITON",
    "SÁSka","SZÖCSKE","CSEREBOGÁR","BOGÁR","DARÁZS","MÉH",
    "SZÚNYOG","LEPKE","HERNYÓ","CSIGA","MEZTELENCSIGA",
    "PÁVA","FAKOPÁNCS","FECske","RIGÓ","HOLLÓ","SZARKA",
    "GÓLYA","DARU","FÜRJ","FÁCÁN","KORMORÁN",
    "TARISZNYARÁK","TENGERICSILLAG","CET","BÁLNA",
    "ORRSZARVÚ","VÍZILÓ","SÜN","SÜNDisznó","MONGÚZ",
    "PRÉRIFARKAS","SIVATAGIRÓKA","ARKTISZIRÓKA",
    "PULI","VIZSLA","AGÁR","DOBERMANN","BULDOG",
    "PERZSA","SZIÁMI","HÁZIMACSKA",
  ],
  food: [
    "KENYÉR", "SAJT", "ALMA", "KÖRTE", "BARACK", "PIZZA", "NARANCS",
    "SZŐLŐ", "MANGÓ", "TORTA", "LEKVÁR", "GOMBA", "KOLBÁSZ", "PAPRIKA",
    "PARADICSOM", "KAKAÓ", "CITROM", "ANANÁSZ", "FOKHAGYMA", "CUKOR",
    "FAGYLALT", "PALACSINTA", "SZENDVICS", "HAMBURGER", "RÁNTOTTA",
    "GOFRI", "SÜTEMÉNY", "DIÓBÉL", "EPER", "MÁLNA", "SZILVA",
    "MEGGY", "DINNYÉ", "UBORKA", "SÁRGARÉPA", "KRUMPLI", "HAGYMA",
    "BROKOLI", "KÓKUSZ", "LAZAC","KARFIOL","PADLIZSÁN","CÉKLA","RETTEK","SPENÓT","SALÁTA",
  "KÁPOSZTA","LENCSE","BAB","BORSÓ","CSICSERIBORSÓ","ZAB",
  "RIZS","KUKORICA","ÁRPA","ROZS","TÖK","PATISSZON",
  "ZELLER","PETREZSELYEM","KAPOR","BAZSALIKOM","MAJORÁNNA",
  "OREGÁNÓ","KÖMÉNY","FAHÉJ","VANÍLIA","SZEGFŰSZEG",
  "TÚRÓ","JOGHURT","TEJFÖL","VAJ","MARGARIN","TEJSZÍN",
  "CSIRKE","PULYKA","MARHAHÚS","SERTÉSHÚS","KACSAHÚS",
  "SONKA","SZALÁMI","VIRSLI","HURKA","SZALONNA",
  "HALÁSZLÉ","GULYÁS","PÖRKÖLT","TOKÁNY","RAKOTTAS",
  "LÁNGOS","RÉTES","KALÁCS","KIFLI","ZSEMLE",
  "PEREC","MUFFIN","BROWNIE","CSOKOLÁDÉ","KARAMELLA",
  "BONBON","MÉZESKALÁCS","NÁPOLYI","TÚRÓRUDI",
  "OMLETT","FŐZELÉK","LEVES","HÚSGOMBÓC","TÖLTÖTTKÁPOSZTA",
  "SÜLTKRUMPLI","PÁROLTRIZS","TARHONYA","GALUSKA",
  "MAJONÉZ","KETCHUP","MUSTÁR","ECET","OLÍVAOLAJ",
  "NAPRAFORGÓOLAJ","MAGVAK","MANDULA","MOGYORÓ",
  "KESUDIÓ","PISZTÁCIA","MAZSOLA","ASZALTSZILVA",
  ],
  sports: [
    "FOCI", "TENISZ", "ÚSZÁS", "FUTÁS", "KARATE", "RÖPLABDA", "KERÉKPÁR",
    "KÉZILABDA", "JUDO", "VÍVÁS", "GOLF", "EVEZÉS", "ÍJÁSZAT", "LOVAGLÁS",
    "KOSÁRLABDA", "BASEBALL", "RÖGBI", "JÉGKORONG", "SÍELÉS", "KORCSOLYA",
    "BIRKÓZÁS", "BOXOLÁS", "ATLÉTIKA", "KAJAK", "KRIKKETT", "SZÖRFÖZÉS",
    "TOLLASLABDA", "ASZTALITENISZ", "TRIATLON", "MARATON","HEGYMÁSZÁS","TORNÁZÁS","FITNESZ","SÚLYEMELÉS","ÖKÖLVÍVÁS",
"GYORSKORCSOLYA","MŰKORCSOLYA","AUTÓVERSENY","MOTORVERSENY",
"VITORLÁZÁS","BÚVÁRKODÁS","SÁRKÁNYHAJÓ","GÖRDESZKA","GÖRKORCSOLYA",
"FALMÁSZÁS","TAEKWONDO","KENDO","CAPOEIRA","ERŐEMELÉS",
"TÁJFUTÁS","TÁVOLUGRÁS","MAGASUGRÁS","DISZKOSZVETÉS",
"GERELYHAJÍTÁS","ÖTTUSA","MODERNÖTTUSA","AKADÁLYFUTÁS",
"GYALOGOSLÁS","HÓDESZKA","SNOWBOARD","SZÁNKÓZÁS",
"VÍZILABDA","MŰUGRÁS","SZINKRONÚSZÁS","KENU","RAFTING",
"PINGPONG","STRANDRÖPLABDA","GOKART","POLO","BILIÁRD",
"DARTS","BOCCSA","PETANQUE","KARATÉ","JUJITSU",
"TRAMBULIN","AKROBATIKA","TÁNCSPORT","BREAKTÁNC",
"KETTLEBELL","CROSSFIT","PILATES","JÓGA",
"HEGYIKERÉKPÁR","BMX","TRIAL","KARDVÍVÁS",
"SPORTLÖVÉSZET","BIATLON","ÖKÖLVÍVÁS",
"ORIENTÁCIÓS","EJŐERNYŐZÉS","SIKÁRNYEZÉS",
"GYORSASÁGI","DRIFTELÉS","SZLALOM",
  ],
};

const WORDS_DE: Record<string, string[]> = {
  animals: [
    "KATZE", "HUND", "TIGER", "ELEFANT", "GIRAFFE", "DELPHIN", "PINGUIN",
    "HASE", "WOLF", "GEPARD", "GORILLA", "ZEBRA", "PAPAGEI", "KROKODIL",
    "LÖWE", "BISON", "HYÄNE", "NASHORN", "PELIKAN", "SCHILDKRÖTE",
    "AMEISE", "SCHMETTERLING", "FUCHS", "HIRSCH", "SCHAF", "KUH", "PFERD",
    "KÄNGURU", "PANDA", "HAI", "EULE", "ADLER", "TAUBE", "ENTE",
    "SCHWAN", "FLAMINGO", "EICHHÖRNCHEN", "IGEL", "DACHS", "FLEDERMAUS","REH","WILDSCHWEIN","ELCH","RENNTIER","MARDER","OTTER",
"LAMA","ALPAKA","KOALA","SCHIMPANSE","ORANGUTAN",
"LEOPARD","PUMA","ANTILOPE","BÜFFEL","YAK",
"HAMSTER","MEERSCHWEINCHEN","MAUS","RATTE",
"HÜHNCHEN","HAHN","TRUTHAHN","STRAUSS",
"RABE","KRÄHE","ELSTER","STORCH","KRANICH",
"FASAN","WACHTEL","SPECH","SPERLING","ROTKÄPPCHEN",
"KARPFEN","LACHS","FORELLE","THUNFISCH",
"HERING","AAL","OKTOPUS","QUALLE","HUMMER","KRABBE",
"ALLIGATOR","KAIMAN","KOBRA","PYTHON","VIPER",
"HEUSCHRECKE","LIBELLE","KÄFER","WESPE","BIENE","MÜCKE",
"RAUPE","SCHNECKE","MARIEKÄFER",
"WAL","ORCA","SEEHU ND","SEELÖWE","PAVIAN",
"ERDMÄNNCHEN","MURMELTIER","DROMEDAR","KAMEL",
  ],
  food: [
    "BROT", "KÄSE", "APFEL", "BIRNE", "PFIRSICH", "PIZZA", "ORANGE",
    "TRAUBE", "MANGO", "TORTE", "MARMELADE", "PILZE", "WURST", "PAPRIKA",
    "TOMATE", "SCHOKOLADE", "ZITRONE", "ANANAS", "KNOBLAUCH", "ZUCKER",
    "EIS", "PFANNKUCHEN", "SANDWICH", "HAMBURGER", "RÜHREI",
    "WAFFEL", "KEKS", "NUSS", "ERDBEERE", "HIMBEERE", "PFLAUME",
    "KIRSCHE", "MELONE", "GURKE", "KAROTTE", "KARTOFFEL", "ZWIEBEL",
    "BROKKOLI", "KOKOSNUSS", "LACHS","KARFIOL","AUBERGINE","ROTEBETE","RETTICH","SPINAT","SALAT",
"KOHL","LINSEN","BOHNEN","ERBSEN","KICHERERBSEN","HAFER",
"REIS","MAIS","GERSTE","ROGGEN","KÜRBIS","ZUCCHINI",
"SELLERIE","PETERSILIE","DILL","BASILIKUM","MAJORAN",
"OREGANO","KÜMMEL","ZIMT","VANILLE","NELKE",
"QUARK","JOGHURT","SAHNE","BUTTER","MARGARINE","MILCH",
"HÄHNCHEN","PUTE","RINDFLEISCH","SCHWEINEFLEISCH","ENTE",
"SCHINKEN","SALAMI","WIENER","SPECK","FRIKADELLEN",
"GULASCH","SUPPE","EINTOPF","LASAGNE","SPAGHETTI",
"BRÖTCHEN","BREZEL","CROISSANT","MUFFIN","BROWNIE",
"KARAMELL","BONBON","HONIGKUCHEN","PUDDING","MÜSLI",
"OMELETT","FISCHSTÄBCHEN","POMMES","KETCHUP","SENF",
"ESSIG","OLIVENÖL","SONNENBLUMENÖL","MANDARINE",
"GRAPEFRUIT","AVOCADO","FEIGE","DATTEL","ROSMARIN",
  ],
  sports: [
    "TENNIS", "SCHWIMMEN", "LAUFEN", "KARATE", "VOLLEYBALL", "RADFAHREN",
    "HANDBALL", "JUDO", "SEGELN", "GOLF", "RUDERN", "FECHTEN", "BOGENSCHIESSEN",
    "BASKETBALL", "BASEBALL", "RUGBY", "EISHOCKEY", "SKIFAHREN", "SCHLITTSCHUH",
    "RINGEN", "BOXEN", "LEICHTATHLETIK", "KANU", "CRICKET", "SURFEN",
    "BADMINTON", "TISCHTENNIS", "TRIATHLON", "MARATHON", "SKATEBOARD","BERGSTEIGEN","KLETTERN","TURNEN","FITNESS","GEWICHTHEBEN",
"KICKBOXEN","TAEKWONDO","CAPOEIRA","JIUJITSU",
"FORMEL1","MOTORSPORT","AUTORENNEN","RALLYE",
"WASSERBALL","SYNCHRONSCHWIMMEN","SPRINGEN",
"SNOWBOARD","LANGLAUF","BIATHLON","RODELN",
"BOBBFAHREN","SKELETON","WINDSURFEN","KITESURFEN",
"KANUSLALOM","RAFTING","ORIENTIERUNGSLAUF",
"TRAMPOLIN","AKROBATIK","TANZSPORT","BREAKDANCE",
"CROSSFIT","PILATES","YOGA",
"BOCCIA","BILLARD","DART","MINIGOLF",
"INLINEHOCKEY","ROLLSCHUHLAUFEN","SPEEDWAY",
"PARAGLEITEN","FALLSCHIRMSPRINGEN",
"STRANDBALL","HANDBIKE","NORDICWALKING",
"TAUCHEN","ANGELN","JAGEN",
"SCHACH","EISHOCKEY","TISCHFUßBALL",
"GOKART","POLO","RUDERSPORT",
"DISKUSWERFEN","SPEERWERFEN","HOCHSPRUNG",
"WEITSPRUNG","STAFFELLAUF",
  ],
};

const WORDS_EN: Record<string, string[]> = {
  animals: [
    "CAT", "DOG", "TIGER", "ELEPHANT", "GIRAFFE", "DOLPHIN", "PENGUIN",
    "RABBIT", "BEAR", "WOLF", "CHEETAH", "GORILLA", "ZEBRA", "PARROT",
    "CROCODILE", "TURTLE", "LION", "PELICAN", "BISON", "HYENA",
    "ANT", "BUTTERFLY", "FOX", "DEER", "GOAT", "COW", "HORSE",
    "KANGAROO", "PANDA", "SHARK", "OWL", "EAGLE", "DOVE", "DUCK",
    "SWAN", "FLAMINGO", "SQUIRREL", "HEDGEHOG", "BADGER", "BAT","OTTER","BEAVER","RACCOON","SKUNK","MOOSE","REINDEER",
"ELK","BUFFALO","CAMEL","LLAMA","ALPACA","KOALA",
"CHIMPANZEE","ORANGUTAN","LEOPARD","PUMA","JAGUAR",
"ANTelope","RHINOCEROS","HIPPOPOTAMUS","WHALE",
"SEAL","SEA LION","WALRUS",
"LOBSTER","CRAB","OCTOPUS","SQUID","JELLYFISH",
"CARP","SALMON","TROUT","TUNA","HERRING","EEL",
"ALLIGATOR","CAIMAN","COBRA","PYTHON","VIPER",
"IGUANA","GECKO","CHAMELEON",
"SPARROW","RAVEN","CROW","MAGPIE","STORK",
"CRANE","PEACOCK","TURKEY","OSTRICH",
"HAMSTER","GUINEAPIG","FERRET","WEASEL",
"MOLE","MARMOT","MEERKAT","PORCUPINE",
"ARMADILLO","SLOTH","TAPIR","GAZELLE",
"WOODPECKER","FALCON","HAWK","SEAHORSE",
"STARFISH","DRAGONFLY","GRASSHOPPER","BEETLE",
"WASP","BEE","MOSQUITO","CATERPILLAR","SNAIL",
  ],
  food: [
    "BREAD", "CHEESE", "APPLE", "PEAR", "PEACH", "PIZZA", "ORANGE",
    "GRAPE", "MANGO", "CAKE", "JAM", "MUSHROOM", "SAUSAGE", "PEPPER",
    "TOMATO", "CHOCOLATE", "LEMON", "PINEAPPLE", "GARLIC", "SUGAR",
    "WAFFLE", "BISCUIT", "HAMBURGER", "OMELET", "NUT", "STRAWBERRY",
    "RASPBERRY", "PLUM", "CHERRY", "MELON", "CUCUMBER", "CARROT",
    "POTATO", "ONION", "BROCCOLI", "COCONUT", "SALMON", "TUNA", "SPINACH", "AVOCADO","APRICOT","BLUEBERRY","BLACKBERRY","KIWI","FIG","DATE",
"GRAPEFRUIT","MANDARIN","LIME","POMEGRANATE",
"CABBAGE","CAULIFLOWER","ZUCCHINI","EGGPLANT","RADISH",
"TURNIP","CELERY","PARSLEY","BASIL","OREGANO",
"RICE","PASTA","NOODLES","CEREAL","OATS",
"BARLEY","CORN","LENTILS","BEANS","PEAS",
"YOGURT","BUTTER","MILK","CREAM","ICECREAM",
"PANCAKE","MUFFIN","BROWNIE","CUPCAKE","DONUT",
"HONEY","CARAMEL","SYRUP","KETCHUP","MUSTARD",
"VINEGAR","OLIVEOIL","SUNFLOWEROIL",
"CHICKEN","TURKEY","BEEF","PORK","BACON",
"HAM","SALAMI","MEATBALL","STEAK","BURGER",
"SOUP","STEW","LASAGNA","SPAGHETTI","RAVIOLI",
"SANDWICH","TOAST","BAGEL","CROISSANT","PRETZEL",
"ALMOND","PEANUT","CASHEW","PISTACHIO","WALNUT",
"RAISIN","PRUNE","COOKIES","PUDDING","MAYONNAISE",
  ],
  sports: [
    "TENNIS", "SWIMMING", "RUNNING", "KARATE", "VOLLEYBALL", "CYCLING",
    "HANDBALL", "JUDO", "SAILING", "GOLF", "ROWING", "FENCING", "ARCHERY",
    "BASKETBALL", "BASEBALL", "RUGBY", "HOCKEY", "SKIING", "SKATING",
    "WRESTLING", "BOXING", "ATHLETICS", "KAYAKING", "CRICKET", "SURFING",
    "BADMINTON", "MARATHON", "SKATEBOARD", "SNOWBOARD", "TRIATHLON","CLIMBING","MOUNTAINEERING","GYMNASTICS","WEIGHTLIFTING",
"KICKBOXING","TAEKWONDO","JIUJITSU","CAPOEIRA",
"FORMULAONE","MOTORSPORT","RALLYING","AUTORACING",
"WATERPOLO","DIVING","SYNCHRONIZEDSWIMMING",
"CROSSCOUNTRY","BIATHLON","LUGE","BOBSLED","SKELETON",
"WINDSURFING","KITESURFING","RAFTING","ORIENTEERING",
"TRAMPOLINE","ACROBATICS","DANCING","BREAKDANCING",
"CROSSFIT","PILATES","YOGA","MINIGOLF","BILLIARDS",
"DARTS","BOWLING","INLINEHOCKEY","ROLLERBLADING",
"SPEEDSKATING","PARAGLIDING","SKYDIVING",
"NORDICWALKING","FISHING","HUNTING",
"CHESS","TABLEFOOTBALL","GOKARTING","POLO",
"DISCUS","JAVELIN","HIGHJUMP","LONGJUMP",
"HURDLING","SHOTPUT","STEePLECHASE",
  ],
};

const WORDS_RO: Record<string, string[]> = {
  animals: [
    "PISICĂ", "CÂINE", "TIGRU", "ELEFANT", "GIRAFĂ", "DELFIN", "PINGUIN",
    "IEPURE", "URS", "GHEPARD", "GORILĂ", "ZEBRĂ", "PAPAGAL", "CROCODIL",
    "ȚESTOASĂ", "PELICAN", "LEU", "BIZON", "HIENA", "RINOCER",
    "FURNICĂ", "FLUTURE", "VULPE", "CERB", "CAPRĂ", "VACĂ", "CAL",
    "CANGUR", "PANDA", "RECHIN", "BUFNIȚĂ", "VULTUR", "PORUMBEL", "RATĂ",
    "LEBĂDĂ", "FLAMINGO", "VEVERIȚĂ", "ARICI", "BURSUC", "LILIAC",
  ],
  food: [
    "PÂINE", "BRÂNZĂ", "MĂR", "PARĂ", "PIERSICĂ", "PIZZA", "PORTOCALĂ",
    "STRUGURI", "MANGO", "TORT", "GEM", "CIUPERCĂ", "CÂRNAȚI", "ARDEI",
    "ROȘIE", "CIOCOLATĂ", "LĂMÂIE", "ANANAS", "USTUROI", "ZAHĂR",
    "ÎNGHEȚATĂ", "CLĂTITE", "SANDVIȘ", "HAMBURGER", "OMLETĂ",
    "VAFLE", "BISCUIT", "NUC", "CĂPȘUNĂ", "ZMEURĂ", "PRUN",
    "CIREAȘĂ", "PEPENE", "CASTRAVETE", "MORCOV", "CARTOF", "CEAPĂ",
    "BROCCOLI", "COCOS", "SOMON",
  ],
  sports: [
    "TENIS", "ÎNOT", "ALERGARE", "KARATE", "VOLEI", "CICLISM",
    "HANDBAL", "JUDO", "NAVIGAȚIE", "GOLF", "CANOTAJ", "SCRIMĂ", "TIR",
    "BASCHET", "BASEBALL", "RUGBY", "HOCHEI", "SCHI", "PATINAJ",
    "LUPTE", "BOX", "ATLETISM", "CAIAC", "CRICKET", "SURF",
    "BADMINTON", "MARATON", "SKATEBOARD", "SNOWBOARD", "TRIATLON",
  ],
};

// ─── SENTENCE DATA (levels 4-9) ───────────────────────────────────────────────

const SENTENCES_HU: Record<string, string[]> = {
  nature: [
    "ZÖLD ERDŐ", "KÉK TENGER", "MAGAS HEGY", "MÉLY VÖLGY", "FEHÉR HÓ",
    "CSENDES TÓ", "FRISS LEVEGŐ", "MELEG NYÁR", "HIDEG TÉL", "ARANY MEZŐ",
    "HAVAS CSÚCS", "ŐSZI LEVÉL", "TAVASZI VIRÁG", "NAPFÉNYES PART", "HOMOKOS STRAND",
    "ZÚGÓ VÍZESÉS", "SZIKLÁS HEGYEK", "REJTETT BARLANG", "CSILLAGOS ÉG", "SZELES PUSZTA",
    "MÉLY ÓCEÁN", "TRÓPUSI ERDŐ", "SÖTÉT FELHŐ", "EZÜST FOLYÓ", "VÖRÖS NAPKELTE",
    "DERŰS HAJNAL", "BORONGÓS EST", "ILLATOS RÉT", "KÖDÖS REGGEL", "FAGYOS SZÉL",
    "PERZSELŐ NAP", "LÁGY SZELLŐ", "SŰRŰ BOZÓT", "TISZTA FORRÁS", "CSOBBANÓ PATAK",
    "HABZÓ TENGER", "HULLÁMZÓ FŰ", "SÁROS PART", "MEREDÉK SZIKLA", "ÁRNYAS LIGET",
    "VIRÁGOS KERT", "MOHÁS KŐ", "SZIVÁRVÁNYOS ÉG", "ZORD IDŐ", "BÉKÉS TÁJ",
    "DÚS LOMB", "HARMATOS FŰ", "DERMEDT TÁJ", "KANYARGÓ FOLYÓ", "KOPÁR DOMB",
    "NAPÉGETTE FÖLD", "SZIKRÁZÓ HÓ", "TÁGAS SÍKSÁG", "CSEPEGŐ ESŐ", "ZIVATAROS ÉG",
    "MADARAS ERDŐ", "HULLÓ LEVÉL", "ZÚZMARÁS ÁG", "HOMÁLYOS LÁTHATÁR", "VILLÁMLÓ ÉG",
    "SÜVÍTŐ SZÉL", "FODROZÓDÓ VÍZ", "KAVICSOS PART", "SŰRŰ KÖD", "ARANY NAPLEMENTE",
    "HŰVÖS ÁRNYÉK", "TISZTA LÁTHATÁR", "CSENDES HAJNAL", "ESŐS DÉLUTÁN", "DERŰS IDŐ",
    "SÁRGULÓ MEZŐ", "LILA ALKONY", "ZÖLDELLŐ RÉT", "ROPOGÓ AVAR", "JÉGHIDEG PATAK",
  ],
  tech: [
    "OKOS TELEFON", "GYORS INTERNET", "DIGITÁLIS VILÁG", "BINÁRIS KÓD",
    "MESTERSÉGES INTELLIGENCIA", "KVANTUM SZÁMÍTÁS", "VIRTUÁLIS VALÓSÁG",
    "SZÁMÍTÓGÉP HÁLÓZAT", "ELEKTROMOS AUTÓ", "ADATBÁZIS RENDSZER",
    "ROBOTIKA FORRADALOM", "DRONE REPÜLÉS", "NAPELEMEK ENERGIA", "OKOS OTTHON",
    "DIGITÁLIS JÖVŐ", "BLOCKCHAIN RENDSZER", "SZOFTVER FEJLESZTÉS", "GÉPI TANULÁS",
    "ONLINE VILÁG", "OKOS VÁROS", "AUTONÓM JÁRÁS", "FELHŐ TÁROLÓ",
    "BIOMETRIKUS AZONOSÍTÁS", "KITERJESZTETT VALÓSÁG", "ADATVÉDELEM FONTOS",
    "NAGY SEBESSÉG", "DIGITÁLIS PLATFORM", "PROGRAMOZÁSI NYELV",
    "MOBIL ALKALMAZÁS", "ÉRINTŐKÉPERNYŐS ESZKÖZ", "INTELLIGENS RENDSZER", "AUTOMATA VEZÉRLÉS",
    "ARCFELISMERŐ SZOFTVER", "HANGVEZÉRLÉS FUNKCIÓ", "ADATELEMZÉS FOLYAMAT", "INTERNET BIZTONSÁG",
    "FELHASZNÁLÓI FELÜLET", "DIGITÁLIS FIZETÉS", "SMART WATCH ESZKÖZ", "3D NYOMTATÁS",
    "ELEKTRONIKUS ALÁÍRÁS", "KIBER BIZTONSÁG", "MOBIL HÁLÓZAT", "INTELLIGENS CHIP",
    "AUTOMATIZÁLT GYÁRTÁS", "DIGITÁLIS KAMERA", "ELEKTRONIKUS LEVÉL", "ONLINE ÁRUHÁZ",
    "VIRTUÁLIS TALÁLKOZÓ", "ADAT SZINKRONIZÁLÁS", "FELHŐ SZOLGÁLTATÁS", "KÓDOLÁSI FOLYAMAT",
    "INFORMÁCIÓS RENDSZER", "MOBIL FIZETÉS", "INTELLIGENS SZOFTVER", "DIGITÁLIS BIZTONSÁG",
    "HÁLÓZATI PROTOKOLL", "SZERVER KAPCSOLAT", "DIGITÁLIS TÁRHELY", "SMART ESZKÖZ",
    "TECHNOLÓGIAI FEJLŐDÉS", "ELEKTRONIKUS ESZKÖZ", "ONLINE SZOLGÁLTATÁS", "DIGITÁLIS ADAT",
    "AUTOMATA RENDSZER", "PROGRAMOZOTT LOGIKA", "INTERNET KAPCSOLAT", "ADATÁTVITEL GYORS",
    "DIGITÁLIS HÁLÓZAT", "INTELLIGENS MEGOLDÁS", "ELEKTRONIKUS FIZETÉS", "SMART TECHNOLÓGIA",
  ],
  film: [
    "FILM ZENE TÁNC", "RITMUS BEAT DALLAM", "GITÁR DOB BASSZUS",
    "JAZZ BLUES SOUL", "OPERA DRÁMA SZÍN", "KAMERA FÉNY SZTÁR",
    "MUSICAL ÉNEK TÁNC", "ROCK POP METAL", "DRÁMA VÍGJÁTÉK FILM", "HANG KÉP ÉRZÉS",
    "SZIMFÓNIA ZENEKAR HALL", "MOZI FILM ÉLMÉNY", "GITÁRSZÓLÓ ROCK SZTÁR",
    "FESZTIVÁLON ZENÉL EGYÜTT", "LEMEZ DALOK ÉRZÉS", "OPERA HANGJA TÖLTI",
    "KONCERT JEGY VÁRÁS", "ZENEKAR ELŐAD ESTE", "DALLAM SZÍV ÉRINTÉS", "FILM NÉZŐ ÁLOM",
    "SZTÁR PÁLYÁJA FÉNY", "RITMUS MOZDULAT TÁNC", "HANG HATÁS ÉRZELEM", "DALSZÖVEG ÜZENET ÉLET",
        "RENDEZŐ FORGAT JELENET", "SZÍNÉSZ JÁTSZIK SZEREP", "FORGATÓKÖNYV ÍR TÖRTÉNET",
    "VÁSZON ELŐTT KÖZÖNSÉG", "PREMIER ESTE FÉNY", "STÚDIÓ FELVESZ DAL",
    "MIKROFON ÁLL SZÍNPAD", "REFLEKTOR VILÁGÍT ARC", "KÓRUS ÉNEK HANG",
    "HANGSZER SZÓL ÉLŐ", "ZENE SZÓL HANGOS", "FILM FOROG KAMERA",
    "TRAILER MUTAT RÉSZLET", "JELENET VÁLT KÉP", "DÍJ ÁTAD ÜNNEP",
    "KÖZÖNSÉG TAPSSAL KÖSZÖN", "TÁNC LÉPÉS RITMUS", "SZÍNPAD FÜGGÖNY NYÍL",
    "FŐHŐS MENTI VILÁG", "ROMANTIKUS JELENET CSÓK", "AKCIÓ JELENET ROBBAN",
    "NEVETÉS TÖLTI TEREM", "DRÁMA FESZÜLT PILLANAT", "ZENESZERZŐ ÍR DALLAM",
    "KARMESTER VEZET ZENEKAR", "FESZTIVÁL SZÍNPAD FÉNY", "MOZI TEREM SÖTÉT",
    "HANGMÉRNÖK KEVER HANG", "KLIPEK PÖRÖGNEK ONLINE", "RAJONGÓ VÁR ALÁÍRÁS",
    "SZTÁR LÉP VÖRÖS", "FILMZENE KÍSÉR JELENET", "POPCORN ILLAT MOZIBAN",
    "KONCERT KEZDŐDIK ESTE", "DÍSZLET ÉPÜL SZÍNPAD", "PRÓBA ZAJLIK DÉLUTÁN",
    "FŐSZEREP ERŐS KARAKTER", "SOROZAT ÚJ ÉVAD", "DAL SZÖVEG ÜZEN",
  ],
  science: [
    "ATOM ELEKTRON PROTON", "FÉNY HANG HULLÁM", "FÖLD HOLD NAP",
    "KÉMIA FIZIKA BIOLÓGIA", "GRAVITÁCIÓ TÖMEG ERŐ", "OXIGÉN SZÉN HIDROGÉN",
    "DNS RNS FEHÉRJE", "CSILLAG BOLYGÓ HOLD", "HŐMÉRSÉKLET NYOMÁS GÁZTÉR", "TÖMEG ERŐ TÉR",
    "KVANTUM FIZIKA ELMÉLET", "NAPRENDSZER BOLYGÓI KÖRÖK", "FEKETE LYUK VONZ",
    "EVOLÚCIÓ TERMÉSZETES KIVÁLASZTÁS", "ŐSROBBANÁS UNIVERZUM KELETKEZETT",
    "RELATIVITÁS EINSTEIN ELMÉLETE", "LABOR KÍSÉRLET EREDMÉNY", "MIKROBA VÍRUS BAKTÉRIUM",
    "NUKLEÁRIS ENERGIA HASADÁS", "FOTOSZINTÉZIS NAPFÉNY OXIGÉN",
    "SEJTMAG FEHÉRJE MEMBRAN", "VEGYI REAKCIÓ HŐTERMELÉS FÉNY", "BOLYGÓ GRAVITÁCIÓ KERINGÉS",
        "MOLEKULA KÖTÉS ENERGIA", "ION ELEKTRON TÖLTÉS", "SEJT OSZTÓDÁS MITÓZIS",
    "GALAXIS CSILLAGKÖD FÉNY", "SPEKTRUM SZÍN HULLÁMHOSSZ", "MÁGNESES MEZŐ ERŐVONAL",
    "VAKCINA ANTITEST VÉDELEM", "ÖKOSZISZTÉMA FAUNA FLÓRA", "TÁPLÁLÉKLÁNC TERMELŐ FOGYASZTÓ",
    "GÉN ÖRÖKLÉS MUTÁCIÓ", "KATALIZÁTOR GYORSÍT REAKCIÓ", "PLAZMA ÁLLAPOT IONIZÁLT",
    "ÁRAM FESZÜLTSÉG ELLENÁLLÁS", "OPTIKA TÜKÖR LENCSE", "NEURON SZINAPSZIS IMPULZUS",
    "KŐZET ÁSVÁNY KRISTÁLY", "LÉGKÖR OXIGÉN NITROGÉN", "TENGELY FORGÁS PRECESSZIÓ",
    "HŐVEZETÉS SUGÁRZÁS ÁRAMLÁS", "SEJT LÉGZÉS ENERGIA", "RÉSZECSE GYORSÍTÓ ÜTKÖZÉS",
    "METEORIT BECSAPÓDÁS KRÁTER", "BIODIVERZITÁS FAJ GAZDAGSÁG", "GENOM SZEKVENÁLÁS ELEMZÉS",
    "ENERGIAMEGMARADÁS TÖRVÉNY RENDSZER", "ŰRTELESZKÓP MÉLYŰR MEGFIGYELÉS",
    "ELEKTROLÍZIS VÍZ BONTÁS", "RADIOAKTÍV BOMLÁS SUGÁRZÁS", "SEJTFAL CITOPLAZMA MEMBRÁN",
    "KONTINENS LEMEZ MOZGÁS", "ÁRAPÁLY DAGÁLY HOLD", "HIGANY HŐMÉRŐ MÉRÉS",
    "KOZMIKUS SUGÁRZÁS RÉSZECSE", "FÚZIÓ NAP ENERGIA", "TUDOMÁNY KUTATÁS FELFEDEZÉS",
    "STATISZTIKA ADAT ELEMZÉS", "IDŐJÁRÁS ELŐREJELZÉS MODELL", "SZIMULÁCIÓ SZÁMÍTÓGÉPES MODELL",
    "MIKROSZKÓP NAGYÍTÁS SEJT", "BIOTECHNOLÓGIA GÉNMÓDOSÍTÁS KÍSÉRLET",
  ],
  history: [
    "RÓMA NAGY BIRODALOM VOLT", "GÖRÖG BÖLCS TANÍT MINDENT",
    "NAGY SÁNDOR VILÁG URA", "EGYIPTOM ŐSI TITKA ÉL",
    "KÍNA FALA RÉGEN ÉPÜL", "KÖZÉPKOR LOVAG ERŐS BÁTOR",
    "VIKINGEK TENGEREN MESSZE MENTEK", "HISTÓRIA MINDENT ELMOND EGYSZER",
    "HÁBORÚ BÉKE MINDIG VÁLTJA", "INDIA KULTÚRA CSODA REJT",
    "GÖRÖGÖK DEMOKRÁCIÁT ATHÉNBAN ALAPÍTOTTAK", "MONGOL BIRODALOM ÁZSIÁN URALT VÉGIG",
    "RENESZÁNSZ ITÁLIÁBÓL TERJEDT SZÉT EGYKOR", "FORRADALOM PÁRIZSBAN TÖRT KI EGYKOR",
    "IPARI FORRADALOM ANGLIÁBÓL INDULT EL", "FELVILÁGOSODÁS GONDOLKODÁST MEGVÁLTOZTATTA TELJESEN",
    "OLIMPIA GÖRÖGÖKTŐL EREDT ŐSIDŐKBEN", "EGYIPTOM PIRAMISAI CSODÁT ALKOTNAK",
    "CAESAR SENÁTUS ELLEN HARCOLT BÁTRAN", "SPANYOLOK AMERIKÁT FELFEDEZTÉK EGYKOR",
        "BIZÁNCI BIRODALOM KELETEN VIRÁGZOTT", "HONFOGLALÓ MAGYAROK KÁRPÁT MEDENCÉBE ÉRKEZTEK",
    "TATÁRJÁRÁS ORSZÁGOT PUSZTÍTOTTA VÉGIG", "KERESZTES HADJÁRAT SZENTFÖLDÉRT INDULT",
    "FRANCIA KIRÁLY HATALMAT ERŐSÍTETT", "ANGOL KARTA JOGOT BIZTOSÍTOTT",
    "REFORMÁCIÓ EURÓPÁT MEGOSZTOTTA MÉLYEN", "LUTHER TANAI GYORSAN TERJEDTEK",
    "TÖRÖK HÓDOLTSÁG HOSSZAN TARTOTT", "HABSBURG URALOM KÖZÉP EURÓPÁBAN ERŐSÖDÖTT",
    "AMERIKAI FÜGGETLENSÉGI HÁBORÚ KITÖRT", "POLGÁRHÁBORÚ ÉSZAK DÉL KÖZÖTT",
    "ELSŐ VILÁGHÁBORÚ EURÓPÁT LÁNGBA BORÍTOTTA", "MÁSODIK VILÁGHÁBORÚ VILÁGOT FELRÁZTA",
    "HIDEGHÁBORÚ KELET NYUGAT SZEMBENÁLLT", "BERLINI FAL LEOMLOTT VÉGÜL",
    "SZOVJETUNIÓ FELBOMLOTT KILENCVENBEN", "EURÓPAI UNIÓ LÉTREJÖTT EGYÜTTMŰKÖDÉSRE",
    "MAGYAR FORRADALOM ÖTVENHATBAN KITÖRT", "SZENT ISTVÁN ÁLLAMOT ALAPÍTOTT",
    "KÖNYVNYOMTATÁS GUTENBERG ÁLTAL TERJEDT", "FELFEDEZŐK ÚJ UTAKAT KERESTEK",
    "KOLUMBUSZ NYUGAT FELÉ HAJÓZOTT", "NAPÓLEON EURÓPÁT HÓDÍTOTTA SORRA",
    "SZAMURÁJ HARCOSOK JAPÁNBAN ÉLTEK", "MAJÁK CSILLAGÁSZATBAN JÁRTASAK VOLTAK",
    "INKA BIRODALOM ANDOKBAN VIRÁGZOTT", "ÓKORI MEZOPOTÁMIA VÁROSOKAT ALAPÍTOTT",
    "FÁRAÓK EGYIPTOMOT IRÁNYÍTOTTÁK ERŐSEN", "SPÁRTA HARCOSAI FEGYELMEZETTEK VOLTAK",
    "ATHÉN KULTÚRÁBAN ÉLEN JÁRT", "RÓMAI LÉGIÓK FEGYELMEZETTEN HARCOLTAK",
    "FEUDÁLIS RENDSZER FÖLDET OSZTOTT", "GYARMATOSÍTÁS KONTINENSEKET ÉRINTETT",
    "ARANYKOR KULTÚRÁT VIRÁGOZTATOTT FEL", "TÖRTÉNELEM TANULSÁGOT AD MINDIG",
  ],
  culture: [
    "KULTÚRA ÉRTÉKE MINDENKIÉ LEHET", "TÁNC ZENE ÉTEL ITAL",
    "ÜNNEP ÖRÖM NAGY FAMÍLIA", "MÚZEUM KÉPEK SZOBROK ÉLNEK",
    "IRODALOM VERSEK REGÉNY ÉLET", "VILÁG NÉPE MIND KÜLÖNBÖZIK",
    "GASZTRONÓMIA ÍZEK VILÁGA CSODA", "FILMEK KÖNYVEK KÉPZELET SZÁRNY",
    "SPORT KULTÚRA EGYÜTT JÁR", "HAGYOMÁNY MÚLT JELEN VAN",
    "KÖNYV OLVASÁS LÉLEK TÁPLÁL", "KÉPZŐMŰVÉSZET ECSET VÁSZON SZÍN",
    "ÉPÍTÉSZET CSODÁI VILÁG ÉKEI", "ZENE MINDENHOL SZÓL HALLGAT",
    "FOLKLÓR ŐSI HAGYOMÁNY MEGŐRZI", "TÁNCEGYÜTTES FOLKZENÉVEL KÖZÖSEN MUZSIKÁL",
    "TURIZMUS KULTÚRÁT MEGISMERVE KÖZELÍT", "SZOKÁSOK GENERÁCIÓK ÁTADJÁK VÉGIG",
    "NYELV KULTÚRA EGYMÁST FEJEZI KI", "KÉZMŰVESSÉG RÉGI TUDÁS MEGMARAD",
        "NÉPVISELET SZÍNES HAGYOMÁNYŐRZŐ RUHA", "NÉPZENE ÉLŐ ÖRÖKSÉG MARAD",
    "SZÍNHÁZ ELŐADÁS KÖZÖNSÉG ÉLMÉNY", "KIÁLLÍTÁS MŰVÉSZET TALÁLKOZÁS HELY",
    "KÖZÖSSÉG ÉRTÉKET TEREMT EGYÜTT", "HIT VALLÁS SZERTARTÁS HAGYOMÁNY",
    "FESZTIVÁL SOKSZÍNŰ PROGRAM KÍNÁLAT", "PIAC HELYI TERMÉK KÉZMŰVES",
    "NÉPMESE TANULSÁGOT HORDOZ MAGÁBAN", "KÖLTÉSZET ÉRZELMEKET FEJEZ KI",
    "SZOBRÁSZ KŐBŐL FORMÁT ALKOT", "FALUSI ÜNNEP KÖZÖSSÉGET ERŐSÍT",
    "CSALÁDI SZOKÁS GENERÁCIÓK ÖRÖKLIK", "VILÁGZENE KULTÚRÁKAT ÖSSZEKÖT",
    "TRADÍCIÓ ÉRTÉK MARADANDÓ KINCS", "MESTERSÉG TUDÁSA APÁRÓL FIÚRA",
    "NEMZETI IDENTITÁS KULTÚRÁBÓL TÁPLÁLKOZIK", "IRODALMI EST BESZÉLGETÉS ÉLMÉNY",
    "VÁROSI KULTÚRA SOKHATÁSÚ KEVERÉK", "TÖRTÉNETMESÉLÉS KÖZÖSSÉGET ÖSSZEFŰZ",
    "KREATÍV ALKOTÁS ÖNKIFEJEZÉS FORMÁJA", "HAGYOMÁNYŐRZŐ CSOPORT MŰSORT AD",
    "KÖNYVTÁR TUDÁS TÁRHÁZA NYITVA", "FILMKLUB KÖZÖS ÉLMÉNY EST",
    "KULINÁRIS ÉLMÉNY KULTÚRÁT TÜKRÖZ", "NÉPTÁNC LÉPÉSEK RITMUSRA MOZOGNAK",
    "MŰVÉSZET INSPIRÁL GONDOLATOT ÉBRESZT", "NYELVI SOKSZÍNŰSÉG ÉRTÉKET TEREMT",
    "KÖZÖS ÉNEKLÉS ÖSSZETARTOZÁST ERŐSÍT", "HAGYOMÁNYOS ÉTEL RECEPTEK ÖRÖK",
  ],
};

const SENTENCES_DE: Record<string, string[]> = {
  nature: [
    "GRÜNER WALD", "BLAUES MEER", "HOHER BERG", "TIEFES TAL", "WEISSER SCHNEE",
    "STILLER SEE", "FRISCHE LUFT", "WARMER SOMMER", "KALTER WINTER", "GOLDENE WIESE",
    "SCHNEEBEDECKTER GIPFEL", "HERBSTLICHES BLATT", "FRÜHLINGS BLÜTE", "SONNIGER STRAND",
    "RAUSCHENDER WASSERFALL", "FELSIGE BERGE", "VERSTECKTE HÖHLE", "NÄCHTLICHER STERNENHIMMEL",
    "WINDIGE STEPPE", "TIEFER OZEAN", "TROPISCHER REGENWALD", "DUNKLE WOLKEN",
    "SILBERNER FLUSS", "ROTER SONNENAUFGANG", "STILLE NACHT",
        "SANFTER WIND", "DUFTENDE WIESE", "NEBLIGER MORGEN", "FROSTIGE NACHT",
    "GLÜHENDE SONNE", "KLARES WASSER", "WEITE EBENE", "SCHATTIGER WALD",
    "PLÄTSCHERNDER BACH", "BLÜHENDER GARTEN", "MOOSIGER STEIN", "BUNTER REGENBOGEN",
    "STÜRMISCHE SEE", "LEUCHTENDER MOND", "KÜHLER SCHATTEN", "TAUFRISCHES GRAS",
    "SOMMERLICHER REGEN", "KNISTERNDES LAUB", "EISIGER WIND", "WOLKENLOSER HIMMEL",
    "SANDIGER STRAND", "KRISTALLKLARE QUELLE", "STEILER FELS", "GRÜNE LANDSCHAFT",
    "FUNKELNDE STERNE", "RAUER FELSEN", "WOGENDE FELDER", "HARMONISCHE NATUR",
    "FLIESSENDER STROM", "BLÜHENDE BLUMEN", "MORGENDLICHER TAU", "SOMMERABEND HIMMEL",
    "HERBSTWIND WEHT", "WINTERSONNE SCHEINT", "FRISCHE BRISE", "WILDE NATUR",
    "LEBENDIGER WALD", "RUHIGES GEWÄSSER", "BERGIGE LANDSCHAFT", "TIEFGRÜNER FORST",
    "SONNENUNTERGANG GLÜHT", "HIMMEL VOLLER STERNE", "KÜHLER MORGEN", "WÄRMENDE STRAHLEN",
    "RAUSCHENDER WIND", "NATÜRLICHE SCHÖNHEIT", "WEITES TAL", "GLITZERNDER SCHNEE",
  ],
  tech: [
    "SMARTES TELEFON", "SCHNELLES INTERNET", "DIGITALE WELT", "BINÄRER CODE",
    "KÜNSTLICHE INTELLIGENZ", "QUANTEN COMPUTER", "VIRTUELLE REALITÄT",
    "COMPUTER NETZWERK", "ELEKTRISCHES AUTO", "DATEN BANK",
    "ROBOTER REVOLUTION", "DROHNEN FLUG", "SOLAR ENERGIE", "SMART HOME",
    "DIGITALE ZUKUNFT", "BLOCKCHAIN SYSTEM", "SOFTWARE ENTWICKLUNG", "MASCHINELLES LERNEN",
    "ONLINE WELT", "SMART CITY", "AUTONOMES FAHREN", "CLOUD SPEICHER",
    "BIOMETRISCHE ERKENNUNG", "ERWEITERTE REALITÄT", "DATENSCHUTZ WICHTIG",
        "MOBILES GERÄT", "SCHNELLE VERBINDUNG", "DIGITALE PLATTFORM", "PROGRAMMIER SPRACHE",
    "APP ENTWICKLUNG", "TOUCHSCREEN DISPLAY", "INTELLIGENTES SYSTEM", "AUTOMATISCHE STEUERUNG",
    "GESICHTS ERKENNUNG", "SPRACH STEUERUNG", "DATEN ANALYSE", "IT SICHERHEIT",
    "BENUTZER OBERFLÄCHE", "DIGITALE ZAHLUNG", "SMART WATCH", "DREI D DRUCK",
    "ELEKTRONISCHE SIGNATUR", "CYBER SICHERHEIT", "MOBILES NETZ", "MIKRO CHIP",
    "AUTOMATISIERTE PRODUKTION", "DIGITALE KAMERA", "ELEKTRONISCHE POST", "ONLINE SHOP",
    "VIRTUELLES TREFFEN", "DATEN SYNCHRONISIERUNG", "CLOUD DIENST", "CODE ENTWICKLUNG",
    "INFORMATIONS SYSTEM", "MOBILES BEZAHLEN", "INTELLIGENTE SOFTWARE", "DIGITALE SICHERHEIT",
    "NETZWERK PROTOKOLL", "SERVER VERBINDUNG", "DIGITALER SPEICHER", "SMART TECHNOLOGIE",
    "TECHNISCHER FORTSCHRITT", "ELEKTRONISCHES GERÄT", "ONLINE SERVICE", "DIGITALE DATEN",
    "AUTOMATISCHES SYSTEM", "PROGRAMMIERTE LOGIK", "INTERNET ZUGANG", "DATEN ÜBERTRAGUNG",
    "DIGITALES NETZ", "INTELLIGENTE LÖSUNG", "ELEKTRONISCHES BEZAHLEN", "MODERNE TECHNOLOGIE",
  ],
  film: [
    "FILM MUSIK TANZ", "RHYTHMUS BEAT MELODIE", "GITARRE SCHLAGZEUG BASS",
    "JAZZ BLUES SOUL", "OPER DRAMA BÜHNE", "KAMERA LICHT STAR",
    "MUSICAL GESANG TANZ", "ROCK POP METAL", "DRAMA KOMÖDIE FILM", "KLANG BILD EMOTION",
    "SYMPHONIE ORCHESTER SAAL", "KINO FILM ERLEBNIS", "GITARRENSOLO ROCK STAR",
    "FESTIVAL MUSIK GEMEINSAM", "PLATTE LIEDER GEFÜHLE", "OPER STIMME ERFÜLLT",
    "KONZERT TICKET WARTEN", "BAND PROBE RAUM", "MELODIE HERZ BERÜHRT", "FILM TRAUM ZUSCHAUER",
    "STAR KARRIERE RUHM", "RHYTHMUS BEWEGUNG TANZ", "KLANG WIRKUNG EMOTION", "LIEDTEXT BOTSCHAFT LEBEN",
        "REGISSEUR DREHT SZENE", "SCHAUSPIELER SPIELT ROLLE", "DREHBUCH ERZÄHLT GESCHICHTE",
    "LEINWAND GROSSES BILD", "PREMIERE ABEND GLANZ", "STUDIO NIMMT SONG",
    "MIKROFON STEHT BÜHNE", "SCHEINWERFER LEUCHTET GESICHT", "CHOR SINGT LIED",
    "INSTRUMENT KLINGT LIVE", "FILM LÄUFT KINO", "TRAILER ZEIGT AUSSCHNITT",
    "SZENE WECHSELT BILD", "PREIS VERLEIHUNG FEIER", "PUBLIKUM KLATSCHT LAUT",
    "TANZ SCHRITT RHYTHMUS", "VORHANG ÖFFNET BÜHNE", "HELD RETTET WELT",
    "ROMANTISCHE SZENE KUSS", "ACTION SZENE EXPLOSION", "LACHEN FÜLLT SAAL",
    "DRAMATISCHE WENDE SPANNUNG", "KOMPONIST SCHREIBT MELODIE", "DIRIGENT LEITET ORCHESTER",
    "FESTIVAL BÜHNE LICHT", "KINO SAAL DUNKEL", "TONTECHNIK MISCHT KLANG",
    "MUSIKVIDEO GEHT VIRAL", "FANS WARTEN AUTOGRAMM", "ROTER TEPPICH GLANZ",
    "FILMMUSIK BEGLEITET SZENE", "POPCORN DUFT KINO", "KONZERT BEGINNT ABEND",
    "DEKOR BAUT KULISSE", "SERIE NEUE STAFFEL", "HIT PARADE PLATZ",
  ],
  science: [
    "ATOM ELEKTRON PROTON", "LICHT KLANG WELLE", "ERDE MOND SONNE",
    "CHEMIE PHYSIK BIOLOGIE", "GRAVITATION MASSE KRAFT", "SAUERSTOFF KOHLENSTOFF WASSERSTOFF",
    "DNA RNA PROTEIN", "STERN PLANET MOND", "TEMPERATUR DRUCK VOLUMEN", "MASSE KRAFT RAUM",
    "QUANTEN PHYSIK THEORIE", "SONNENSYSTEM PLANETEN UMLAUF", "SCHWARZES LOCH ANZIEHT",
    "EVOLUTION NATÜRLICHE AUSLESE", "URKNALL UNIVERSUM ENTSTANDEN",
    "RELATIVITÄT EINSTEIN THEORIE", "LABOR EXPERIMENT ERGEBNIS", "MIKROBE VIRUS BAKTERIUM",
    "NUKLEAR ENERGIE SPALTUNG", "FOTOSYNTHESE SONNENLICHT SAUERSTOFF",
    "ZELLKERN PROTEIN MEMBRAN", "CHEMISCHE REAKTION WÄRME LICHT", "PLANET GRAVITATION UMLAUF",
        "MOLEKÜL BINDUNG ENERGIE", "ION ELEKTRON LADUNG", "ZELLE TEILUNG MITOSE",
    "GALAXIE NEBEL STERN", "SPEKTRUM FARBE WELLENLÄNGE", "MAGNETFELD KRAFT LINIE",
    "IMPFSTOFF ANTIKÖRPER SCHUTZ", "ÖKOSYSTEM FLORA FAUNA", "NAHRUNGSKETTE PRODUZENT KONSUMENT",
    "GEN VERERBUNG MUTATION", "KATALYSATOR BESCHLEUNIGT REAKTION", "PLASMA IONISIERT GAS",
    "STROM SPANNUNG WIDERSTAND", "OPTIK LINSE SPIEGEL", "NEURON SYNAPSE IMPULS",
    "GESTEIN MINERAL KRISTALL", "ATMOSPHÄRE STICKSTOFF SAUERSTOFF", "ACHSE ROTATION PRÄZESSION",
    "WÄRMELEITUNG STRAHLUNG KONVEKTION", "ZELLATMUNG ENERGIE GEWINN", "TEILCHEN BESCHLEUNIGER KOLLISION",
    "METEORIT EINSCHLAG KRATER", "BIODIVERSITÄT ARTEN VIELFALT", "GENOM SEQUENZ ANALYSE",
    "ENERGIE ERHALTUNG GESETZ", "WELTRAUM TELESKOP BEOBACHTUNG",
    "ELEKTROLYSE WASSER SPALTUNG", "RADIOAKTIVER ZERFALL STRAHLUNG", "ZELLWAND CYTOPLASMA MEMBRAN",
    "KONTINENT PLATTEN BEWEGUNG", "GEZEITEN EBBE FLUT", "THERMOMETER MISST TEMPERATUR",
    "KOSMISCHE STRAHLUNG TEILCHEN", "FUSION SONNE ENERGIE", "FORSCHUNG WISSENSCHAFT ENTDECKUNG",
    "STATISTIK DATEN ANALYSE", "WETTER MODELL PROGNOSE", "SIMULATION COMPUTER MODELL",
    "MIKROSKOP VERGRÖSSERT ZELLE", "BIOTECHNOLOGIE GEN MANIPULATION",
  ],
  history: [
    "ROM GROSSES IMPERIUM WAR", "GRIECHISCHE WEISHEIT LEHRT ALLES",
    "ALEXANDER GROSSER WELTHERRSCHER WAR", "ÄGYPTEN ALTE GEHEIMNISSE LEBEN",
    "CHINAS MAUER EINST ERBAUT", "MITTELALTER RITTER STARK TAPFER",
    "WIKINGER BEREISTEN FERNE MEERE", "HISTORIA ERZÄHLT EINMAL ALLES",
    "KRIEG FRIEDEN WECHSELN SICH", "INDIEN KULTUR WUNDER BIRGT",
    "GRIECHEN DEMOKRATIE ATHEN GRÜNDETEN", "MONGOLISCHES REICH ASIEN BEHERRSCHTE GANZ",
    "RENAISSANCE ITALIEN VERBREITETE SICH", "REVOLUTION PARIS BRACH AUS EINST",
    "INDUSTRIELLE REVOLUTION ENGLAND BEGANN", "AUFKLÄRUNG DENKEN VERÄNDERTE VOLLSTÄNDIG",
    "OLYMPIA GRIECHEN URSPRUNG HATTE", "ÄGYPTEN PYRAMIDEN WUNDER SCHAFFEN",
    "CAESAR SENAT TAPFER KÄMPFTE", "SPANIER AMERIKA ENTDECKTEN EINST",
        "BYZANTINISCHES REICH OSTEN BLÜHTE", "UNGARISCHE STÄMME KARPATEN ERREICHTEN",
    "TATARISCHE INvasion LAND VERWÜSTETE", "KREUZZUG ZUM HEILIGEN LAND",
    "FRANZÖSISCHER KÖNIG MACHT STÄRKTE", "MAGNA CARTA RECHTE SICHERTE",
    "REFORMATION SPALTETE EUROPA TIEF", "LUTHER VERBREITETE NEUE LEHRE",
    "OSMANISCHES REICH EXPANDIERTE WEIT", "HABSBURGER HERRSCHAFT WUCHS STETIG",
    "AMERIKANISCHER UNABHÄNGIGKEITSKRIEG BEGANN", "BÜRGERKRIEG NORD GEGEN SÜD",
    "ERSTER WELTKRIEG ERSCHÜTTERTE EUROPA", "ZWEITER WELTKRIEG VERÄNDERTE WELT",
    "KALTER KRIEG OST WEST KONFLIKT", "BERLINER MAUER FIEL ENDLICH",
    "SOWJETUNION ZERFIEL NEUNZIGER JAHRE", "EUROPÄISCHE UNION WURDE GEGRÜNDET",
    "UNGARISCHER AUFSTAND FÜNFZIGSECHS", "STEPHAN KRÖNTE ERSTEN KÖNIG",
    "BUCHDRUCK VERBREITETE WISSEN SCHNELL", "ENTDECKER SUCHTEN NEUE WEGE",
    "KOLUMBUS SEGELTE NACH WESTEN", "NAPOLEON EROBERTE VIELE LÄNDER",
    "SAMURAI DIENTEN JAPAN KAISER", "MAYA KULTUR BLÜHTE EINST",
    "INKA REICH ANDEN REGION", "MESOPOTAMIEN GRÜNDETE ERSTE STÄDTE",
    "PHARAONEN REGIERTEN ÄGYPTEN LANGE", "SPARTA KRIEGER WAREN DISZIPLINIERT",
    "ATHEN WAR KULTURELLES ZENTRUM", "RÖMISCHE LEGIONEN MARSCHIERTEN WEIT",
    "FEUDALSYSTEM ORDNUNGTE LAND BESITZ", "KOLONIALISMUS VERÄNDERTE KONTINENTE",
    "GOLDENES ZEITALTER FÖRDERTE KUNST", "GESCHICHTE LEHRT WICHTIGE LEKTIONEN",
  ],
  culture: [
    "KULTUR WERT GEHÖRT ALLEN", "TANZ MUSIK ESSEN TRINKEN",
    "FEST FREUDE GROSSE FAMILIE", "MUSEUM BILDER SKULPTUREN LEBEN",
    "LITERATUR VERSE ROMAN LEBEN", "WELTVÖLKER ALLE VERSCHIEDEN SIND",
    "GASTRONOMIE GESCHMACK WELT WUNDER", "FILME BÜCHER FANTASIE FLÜGEL",
    "SPORT KULTUR GEHEN ZUSAMMEN", "TRADITION VERGANGENHEIT GEGENWART ZUKUNFT",
    "BUCH LESEN SEELE NÄHRT", "BILDENDE KUNST PINSEL LEINWAND",
    "ARCHITEKTUR WUNDER WELT SCHMÜCKT", "MUSIK ÜBERALL KLINGT HÖREN",
    "FOLKLORE ALTE TRADITION BEWAHREN", "TANZENSEMBLE VOLKSMUSIK GEMEINSAM SPIELT",
    "TOURISMUS KULTUR KENNENLERNEN NÄHERT", "BRÄUCHE GENERATIONEN WEITERGEGEBEN VOLLSTÄNDIG",
    "SPRACHE KULTUR AUSDRÜCKEN GEMEINSAM", "KUNSTHANDWERK ALTES WISSEN BEWAHRT",
        "NATIONALTRACHT FARBE REICHE TRADITION", "VOLKSMUSIK KLINGT DURCH DÖRFER",
    "THEATER AUFFÜHRUNG BEGEISTERT PUBLIKUM", "AUSSTELLUNG ZEIGT KUNSTWERKE ÖFFENTLICH",
    "GEMEINSCHAFT TEILT WERTE GEMEINSAM", "GLAUBE RELIGION RITUAL VERBINDET",
    "FESTIVAL BIETET BUNTES PROGRAMM", "MARKT BIETET REGIONALE PRODUKTE",
    "MÄRCHEN ERZÄHLT ALTE WEISHEIT", "LYRIK DRÜCKT GEFÜHLE AUS",
    "BILDHAUER FORMTE STEIN FIGUR", "DORFFEST STÄRKT ZUSAMMENHALT",
    "FAMILIENTRADITION WIRD WEITERGEGEBEN", "WELTMUSIK VERBINDET KULTUREN",
    "ERBE BLEIBT WERTVOLLER SCHATZ", "HANDWERK LERNT VON MEISTERN",
    "IDENTITÄT WÄCHST DURCH KULTUR", "LITERATURABEND FÖRDERT AUSTAUSCH",
    "STADTKULTUR MISCHT VIELE EINFLÜSSE", "GESCHICHTENERZÄHLEN VERBINDET MENSCHEN",
    "KREATIVE ARBEIT FÖRDERT AUSDRUCK", "TRACHTENGRUPPE TANZT TRADITIONELL",
    "BIBLIOTHEK BIETET WISSEN FREI", "FILMABEND SCHAFFT GEMEINSAME ERINNERUNG",
    "KULINARIK SPIEGELT REGIONALE KULTUR", "VOLKSTANZ FOLGT FESTEM RHYTHMUS",
    "KUNST INSPIRIERT NEUE GEDANKEN", "SPRACHVIELFALT BEREICHERT GESELLSCHAFT",
    "GEMEINSAMES SINGEN STÄRKT ZUSAMMENHALT", "REZEPT ÜBERLIEFERT FAMILIENGESCHICHTE",
  ],
};

const SENTENCES_EN: Record<string, string[]> = {
  nature: [
    "GREEN FOREST", "BLUE OCEAN", "HIGH MOUNTAIN", "DEEP VALLEY", "WHITE SNOW",
    "QUIET LAKE", "FRESH AIR", "WARM SUMMER", "COLD WINTER", "GOLDEN MEADOW",
    "SNOWY PEAK", "AUTUMN LEAF", "SPRING BLOSSOM", "SUNNY BEACH", "SANDY SHORE",
    "RUSHING WATERFALL", "ROCKY MOUNTAINS", "HIDDEN CAVE", "STARRY SKY", "WINDY PLAINS",
    "DEEP OCEAN", "TROPICAL FOREST", "DARK CLOUDS", "SILVER RIVER", "RED SUNRISE",
        "BRIGHT SUNLIGHT", "GENTLE BREEZE", "MISTY MORNING", "FROSTY NIGHT",
    "CLEAR STREAM", "WIDE HORIZON", "SHADY WOODS", "FLOWING RIVER",
    "BLOOMING GARDEN", "MOSSY ROCK", "COLORFUL RAINBOW", "STORMY SEA",
    "GLOWING MOON", "COOL SHADE", "DEWY GRASS", "SUMMER RAIN",
    "CRISP LEAVES", "ICY WIND", "CLOUDLESS SKY", "CRYSTAL SPRING",
    "STEEP CLIFF", "OPEN FIELD", "SPARKLING STARS", "WILD NATURE",
    "PEACEFUL LANDSCAPE", "ROLLING HILLS", "FOREST TRAIL", "OCEAN WAVES",
    "MORNING SUN", "EVENING GLOW", "FRESH BREEZE", "RIVER BANK",
    "DESERT DUNES", "POLAR ICE", "RAINBOW SKY", "THUNDER STORM",
    "GOLDEN SUNSET", "AUTUMN BREEZE", "SPRING RAIN", "WINTER FROST",
    "MOUNTAIN PATH", "LAKE SHORE", "FOREST CLEARING", "COASTAL WIND",
    "SUNLIT VALLEY", "GLACIER ICE", "TROPICAL BEACH", "FALLING SNOW",
  ],
  tech: [
    "SMART PHONE", "FAST INTERNET", "DIGITAL WORLD", "BINARY CODE",
    "ARTIFICIAL INTELLIGENCE", "QUANTUM COMPUTING", "VIRTUAL REALITY",
    "COMPUTER NETWORK", "ELECTRIC CAR", "DATABASE SYSTEM",
    "ROBOT REVOLUTION", "DRONE FLIGHT", "SOLAR ENERGY", "SMART HOME",
    "DIGITAL FUTURE", "BLOCKCHAIN SYSTEM", "SOFTWARE DEVELOPMENT", "MACHINE LEARNING",
    "ONLINE WORLD", "SMART CITY", "AUTONOMOUS DRIVING", "CLOUD STORAGE",
    "BIOMETRIC RECOGNITION", "AUGMENTED REALITY", "DATA PRIVACY",
        "MOBILE DEVICE", "HIGH SPEED CONNECTION", "DIGITAL PLATFORM", "PROGRAMMING LANGUAGE",
    "APP DEVELOPMENT", "TOUCH SCREEN DISPLAY", "INTELLIGENT SYSTEM", "AUTOMATED CONTROL",
    "FACE RECOGNITION", "VOICE COMMAND SYSTEM", "DATA ANALYTICS", "CYBER SECURITY",
    "USER INTERFACE DESIGN", "DIGITAL PAYMENT", "SMART WATCH DEVICE", "THREE D PRINTING",
    "ELECTRONIC SIGNATURE", "WIRELESS NETWORK", "MOBILE PAYMENT", "MICRO CHIP",
    "AUTOMATED PRODUCTION", "DIGITAL CAMERA", "EMAIL MESSAGE", "ONLINE SHOPPING",
    "VIRTUAL MEETING ROOM", "DATA SYNCHRONIZATION", "CLOUD SERVICE", "CODE EXECUTION",
    "INFORMATION SYSTEM", "INTERNET ACCESS", "SERVER CONNECTION", "DIGITAL STORAGE",
    "TECH INNOVATION", "ELECTRONIC DEVICE", "ONLINE SERVICE PLATFORM", "DATA TRANSFER",
    "SMART TECHNOLOGY", "NETWORK PROTOCOL", "SOFTWARE UPDATE", "HARDWARE COMPONENT",
    "SYSTEM INTEGRATION", "DIGITAL SECURITY", "AI ALGORITHM", "REMOTE CONTROL",
    "WEB APPLICATION", "STREAMING SERVICE", "DATA ENCRYPTION", "TECH STARTUP",
  ],
  film: [
    "FILM MUSIC DANCE", "RHYTHM BEAT MELODY", "GUITAR DRUMS BASS",
    "JAZZ BLUES SOUL", "OPERA DRAMA STAGE", "CAMERA LIGHT STAR",
    "MUSICAL SING DANCE", "ROCK POP METAL", "DRAMA COMEDY FILM", "SOUND IMAGE FEEL",
    "SYMPHONY ORCHESTRA HALL", "CINEMA FILM EXPERIENCE", "GUITAR SOLO ROCK",
    "FESTIVAL MUSIC TOGETHER", "ALBUM SONGS FEELINGS", "OPERA VOICE FILLS",
    "CONCERT TICKET WAIT", "BAND REHEARSAL ROOM", "MELODY HEART TOUCH", "FILM DREAM VIEWER",
    "STAR CAREER FAME", "RHYTHM MOVEMENT DANCE", "SOUND EFFECT EMOTION", "LYRICS MESSAGE LIFE",
        "DIRECTOR SHOOTS SCENE", "ACTOR PLAYS ROLE", "SCREENPLAY TELLS STORY",
    "BIG SCREEN MOMENT", "PREMIERE NIGHT GLAMOUR", "STUDIO RECORDS TRACK",
    "MICROPHONE ON STAGE", "SPOTLIGHT SHINES BRIGHT", "CHOIR SINGS HARMONY",
    "LIVE BAND PERFORMANCE", "MOVIE TRAILER CLIP", "SCENE CHANGE CUT",
    "AWARD SHOW CEREMONY", "AUDIENCE CLAPS LOUD", "DANCE STEP RHYTHM",
    "CURTAIN RISES SLOWLY", "HERO SAVES WORLD", "ROMANTIC SCENE KISS",
    "ACTION SCENE EXPLOSION", "LAUGHTER FILLS ROOM", "DRAMATIC PLOT TWIST",
    "COMPOSER WRITES SCORE", "CONDUCTOR LEADS ORCHESTRA", "FILM SCORE THEME",
    "FAN MEET GREET", "RED CARPET EVENT", "MOVIE NIGHT POPCORN",
    "SOUNDTRACK TOP CHARTS", "SERIES NEW SEASON", "FILM SET LOCATION",
    "CAST CREW TEAM", "MUSIC VIDEO PREMIERE", "BOX OFFICE HIT",
    "INDIE FILM FESTIVAL", "CINEMATIC MASTERPIECE MOMENT", "STAGE LIGHT EFFECT",
    "BACKSTAGE PASS ACCESS", "CROWD CHEERS STAR", "THEATER FULL HOUSE",
    "FILM EDITING STUDIO", "CAMERA CLOSE UP", "ORIGINAL MOTION PICTURE",
  ],
  science: [
    "ATOM ELECTRON PROTON", "LIGHT SOUND WAVE", "EARTH MOON SUN",
    "CHEMISTRY PHYSICS BIOLOGY", "GRAVITY MASS FORCE", "OXYGEN CARBON HYDROGEN",
    "DNA RNA PROTEIN", "STAR PLANET MOON", "TEMPERATURE PRESSURE VOLUME", "MASS FORCE SPACE",
    "QUANTUM PHYSICS THEORY", "SOLAR SYSTEM ORBITS", "BLACK HOLE PULLS",
    "EVOLUTION NATURAL SELECTION", "BIG BANG UNIVERSE BORN",
    "RELATIVITY EINSTEIN THEORY", "LABORATORY EXPERIMENT RESULT", "MICROBE VIRUS BACTERIA",
    "NUCLEAR ENERGY FISSION", "PHOTOSYNTHESIS SUNLIGHT OXYGEN",
    "NUCLEUS PROTEIN MEMBRANE", "CHEMICAL REACTION HEAT LIGHT", "PLANET GRAVITY ORBIT",
        "MOLECULE ATOM BOND", "ION ELECTRIC CHARGE", "CELL DIVISION MITOSIS",
    "GALAXY STAR NEBULA", "SPECTRUM COLOR WAVELENGTH", "MAGNETIC FIELD FORCE",
    "VACCINE ANTIBODY IMMUNITY", "ECOSYSTEM FLORA FAUNA", "FOOD CHAIN ENERGY",
    "GENE MUTATION HEREDITY", "CATALYST SPEED REACTION", "PLASMA IONIZED GAS",
    "CURRENT VOLTAGE RESISTANCE", "OPTICAL LENS MIRROR", "NEURON SYNAPSE SIGNAL",
    "MINERAL ROCK CRYSTAL", "ATMOSPHERE NITROGEN OXYGEN", "AXIS ROTATION TILT",
    "HEAT TRANSFER RADIATION", "CELLULAR RESPIRATION ENERGY", "PARTICLE COLLISION ACCELERATOR",
    "METEOR IMPACT CRATER", "BIODIVERSITY SPECIES VARIETY", "GENOME SEQUENCE ANALYSIS",
    "ENERGY CONSERVATION LAW", "SPACE TELESCOPE OBSERVATION",
    "ELECTROLYSIS WATER SPLIT", "RADIOACTIVE DECAY RADIATION", "CELL WALL CYTOPLASM",
    "TECTONIC PLATE MOVEMENT", "TIDES MOON GRAVITY", "THERMOMETER MEASURES HEAT",
    "COSMIC RADIATION PARTICLES", "NUCLEAR FUSION SUN", "SCIENTIFIC RESEARCH DISCOVERY",
    "STATISTICAL DATA ANALYSIS", "WEATHER FORECAST MODEL", "COMPUTER SIMULATION SYSTEM",
    "MICROSCOPE MAGNIFIES CELLS", "BIOTECHNOLOGY GENE EDITING",
  ],
  history: [
    "ROME WAS GREAT EMPIRE", "GREEK WISDOM TAUGHT EVERYTHING",
    "ALEXANDER GREAT WORLD RULER", "EGYPT OLD SECRETS LIVE",
    "CHINA WALL ONCE BUILT", "MEDIEVAL KNIGHT STRONG BRAVE",
    "VIKINGS SAILED FAR SEAS", "HISTORY TELLS ALL ONCE",
    "WAR PEACE REPLACE EACH", "INDIA CULTURE WONDER HOLDS",
    "GREEKS FOUNDED DEMOCRACY ATHENS", "MONGOL EMPIRE RULED ALL ASIA",
    "RENAISSANCE SPREAD FROM ITALY", "REVOLUTION BROKE OUT PARIS",
    "INDUSTRIAL REVOLUTION BEGAN ENGLAND", "ENLIGHTENMENT CHANGED THINKING COMPLETELY",
    "OLYMPICS ORIGINATED ANCIENT GREECE", "EGYPT PYRAMIDS MAKE WONDERS",
    "CAESAR BRAVELY FOUGHT SENATE", "SPANIARDS DISCOVERED AMERICAS ONCE",
        "BYZANTINE EMPIRE FLOURISHED EAST", "HUNGARIAN TRIBES ENTERED CARPATHIANS",
    "MONGOL INVASION DEVASTATED EUROPE", "CRUSADERS MARCHED HOLY LAND",
    "FRENCH KING STRENGTHENED POWER", "MAGNA CARTA GRANTED RIGHTS",
    "REFORMATION DIVIDED EUROPE DEEPLY", "LUTHER SPREAD NEW DOCTRINE",
    "OTTOMAN EMPIRE EXPANDED WEST", "HABSBURG DYNASTY RULED CENTRAL",
    "AMERICAN REVOLUTION DECLARED INDEPENDENCE", "CIVIL WAR NORTH SOUTH",
    "FIRST WORLD WAR ERUPTED", "SECOND WORLD WAR CHANGED",
    "COLD WAR EAST WEST", "BERLIN WALL FELL DOWN",
    "SOVIET UNION COLLAPSED NINETIES", "EUROPEAN UNION FORMED COOPERATION",
    "HUNGARIAN UPRISING NINETEEN FIFTYSIX", "SAINT STEPHEN FOUNDED STATE",
    "PRINTING PRESS SPREAD KNOWLEDGE", "EXPLORERS SEARCHED NEW ROUTES",
    "COLUMBUS SAILED WESTWARD OCEAN", "NAPOLEON CONQUERED MANY LANDS",
    "SAMURAI SERVED JAPAN EMPEROR", "MAYA CIVILIZATION FLOURISHED ONCE",
    "INCA EMPIRE RULED ANDES", "MESOPOTAMIA BUILT FIRST CITIES",
    "PHARAOHS RULED EGYPT LONG", "SPARTAN WARRIORS FOUGHT BRAVELY",
    "ATHENS BECAME CULTURAL CENTER", "ROMAN LEGIONS MARCHED FAR",
    "FEUDAL SYSTEM ORGANIZED LAND", "COLONIALISM TRANSFORMED CONTINENTS WORLDWIDE",
    "GOLDEN AGE PROMOTED ARTS", "HISTORY TEACHES IMPORTANT LESSONS",
  ],
  culture: [
    "CULTURE VALUE BELONGS EVERYONE", "DANCE MUSIC FOOD DRINK",
    "FESTIVAL JOY GREAT FAMILY", "MUSEUM PAINTINGS SCULPTURES LIVE",
    "LITERATURE VERSE NOVEL LIFE", "WORLD PEOPLES ALL DIFFERENT",
    "GASTRONOMY TASTE WORLD WONDER", "FILMS BOOKS IMAGINATION WINGS",
    "SPORT CULTURE GO TOGETHER", "TRADITION PAST PRESENT FUTURE",
    "READING BOOKS FEEDS SOUL", "FINE ART BRUSH CANVAS COLOR",
    "ARCHITECTURE WONDERS WORLD ADORNS", "MUSIC EVERYWHERE PLAYS LISTEN",
    "FOLKLORE OLD TRADITION PRESERVES", "DANCE ENSEMBLE FOLK MUSIC TOGETHER",
    "TOURISM CULTURE DISCOVERY CONNECTS", "CUSTOMS GENERATIONS PASS ALONG",
    "LANGUAGE CULTURE EXPRESS TOGETHER", "CRAFTS OLD KNOWLEDGE PRESERVED",
        "NATIONAL COSTUME COLORFUL TRADITION", "FOLK MUSIC ECHOES VILLAGES",
    "THEATER PERFORMANCE INSPIRES AUDIENCE", "ART EXHIBITION OPENS PUBLIC",
    "COMMUNITY SHARES COMMON VALUES", "FAITH RELIGION RITUAL CONNECTS",
    "CULTURAL FESTIVAL BRINGS PEOPLE", "LOCAL MARKET OFFERS HANDMADE",
    "FAIRYTALE TELLS MORAL LESSON", "POETRY EXPRESSES DEEP EMOTION",
    "SCULPTOR CARVES STONE FIGURE", "VILLAGE CELEBRATION UNITES NEIGHBORS",
    "FAMILY TRADITION CONTINUES GENERATIONS", "WORLD MUSIC BLENDS CULTURES",
    "HERITAGE REMAINS TREASURE FOREVER", "MASTER CRAFTS PASS SKILLS",
    "CULTURAL IDENTITY SHAPES NATIONS", "LITERARY EVENING ENCOURAGES DIALOGUE",
    "URBAN CULTURE MIXES INFLUENCES", "STORYTELLING BUILDS STRONG BONDS",
    "CREATIVE WORK SHOWS PERSONALITY", "TRADITIONAL GROUP PERFORMS DANCES",
    "PUBLIC LIBRARY SHARES KNOWLEDGE", "FILM NIGHT CREATES MEMORIES",
    "CULINARY ART REFLECTS REGION", "FOLK DANCE FOLLOWS RHYTHM",
    "ART INSPIRES NEW IDEAS", "LANGUAGE DIVERSITY ENRICHES SOCIETY",
    "COMMUNITY SINGING BUILDS UNITY", "RECIPE PRESERVES FAMILY HISTORY",
  ],
};

const SENTENCES_RO: Record<string, string[]> = {
  nature: [
    "PĂDURE VERDE", "OCEAN ALBASTRU", "MUNTE ÎNALT", "VALE ADÂNCĂ", "ZĂPADĂ ALBĂ",
    "LAC LINIȘTIT", "AER PROASPĂT", "VARĂ CALDĂ", "IARNĂ RECE", "CÂMPIE AURIE",
    "VÂRF ÎNZĂPEZIT", "FRUNZE TOAMNĂ", "FLORI PRIMĂVARĂ", "PLAJĂ ÎNSORITĂ", "NISIP AURIU",
    "CASCADĂ VUIND", "MUNȚI STÂNCOȘI", "PEȘTERĂ ASCUNSĂ", "CER STELAT", "CÂMPIE VÂNTOASĂ",
    "OCEAN ADÂNC", "PĂDURE TROPICALĂ", "NORI ÎNTUNECAȚI", "RÂU ARGINTIU", "RĂSĂRIT ROȘU",
        "APUS STRĂLUCITOR", "BRIZĂ UȘOARĂ", "DIMINEAȚĂ CEȚOASĂ", "NOAPTE ÎNGHEȚATĂ",
    "IZVOR LIMPEDE", "ORIZONT LARG", "PĂDURE UMBROASĂ", "RÂU CURGĂTOR",
    "GRĂDINĂ ÎNFLORITĂ", "PIATRĂ MUȘCHIOASĂ", "CURCUBEU COLORAT", "MARE FURTUNOASĂ",
    "LUNĂ STRĂLUCITOARE", "UMBRA RĂCOROASĂ", "IARBĂ CU ROUĂ", "PLOAIE DE VARĂ",
    "FRUNZE FOȘNITOARE", "VÂNT PUTERNIC", "CER SENIN", "IZVOR RECE",
    "STÂNCĂ ABRUPTĂ", "CÂMP DESCHIS", "STELE SCLIPITOARE", "NATURĂ SĂLBATICĂ",
    "PEISAJ LINIȘTITOR", "DEALURI ONDULATE", "POTECĂ MONTANĂ", "VALURI OCEANICE",
    "SOARE DIMINEAȚĂ", "CER AMURG", "BRIZĂ RĂCOROASĂ", "MAL DE RÂU",
    "DUNE DEȘERTICE", "GHEAȚĂ POLARĂ", "CER COLORAT", "FURTUNĂ PUTERNICĂ",
    "APUS AURIU", "VÂNT DE TOAMNĂ", "PLOAIE DE PRIMĂVARĂ", "GER PUTERNIC",
    "DRUM MONTAN", "ȚĂRM LINIȘTIT", "POIANĂ LUMINOASĂ", "VÂNT DE COASTĂ",
    "VALE ÎNSORITĂ", "AISBERG RECE", "PLAJĂ TROPICALĂ", "FULGI DE NEA",
  ],
  tech: [
    "TELEFON INTELIGENT", "INTERNET RAPID", "LUME DIGITALĂ", "COD BINAR",
    "INTELIGENȚĂ ARTIFICIALĂ", "CALCUL CUANTIC", "REALITATE VIRTUALĂ",
    "REȚEA CALCULATOR", "MAȘINĂ ELECTRICĂ", "SISTEM DATE",
    "REVOLUȚIE ROBOTICĂ", "ZBOR DRONE", "ENERGIE SOLARĂ", "CASĂ INTELIGENTĂ",
    "VIITOR DIGITAL", "SISTEM BLOCKCHAIN", "DEZVOLTARE SOFTWARE", "ÎNVĂȚARE MAȘINICĂ",
    "LUME ONLINE", "ORAȘ INTELIGENT", "CONDUCERE AUTONOMĂ", "STOCARE CLOUD",
    "RECUNOAȘTERE BIOMETRICĂ", "REALITATE AUGMENTATĂ", "PROTECȚIA DATELOR",
        "DISPOZITIV MOBIL", "CONEXIUNE RAPIDĂ", "PLATFORMĂ DIGITALĂ", "LIMBAJ PROGRAMARE",
    "DEZVOLTARE APLICAȚII", "ECRAN TACTIL", "SISTEM INTELIGENT", "CONTROL AUTOMAT",
    "RECUNOAȘTERE FACIALĂ", "COMANDĂ VOCALĂ", "ANALIZĂ DATE", "SECURITATE CIBERNETICĂ",
    "INTERFAȚĂ UTILIZATOR", "PLATĂ DIGITALĂ", "CEAS INTELIGENT", "IMPRIMARE 3D",
    "SEMNĂTURĂ ELECTRONICĂ", "REȚEA FĂRĂ FIR", "PLATĂ MOBILĂ", "MICRO CIP",
    "PRODUCȚIE AUTOMATIZATĂ", "CAMERĂ DIGITALĂ", "MESAJ ELECTRONIC", "MAGAZIN ONLINE",
    "ÎNTÂLNIRE VIRTUALĂ", "SINCRONIZARE DATE", "SERVICIU CLOUD", "EXECUȚIE COD",
    "SISTEM INFORMAȚIONAL", "ACCES INTERNET", "CONEXIUNE SERVER", "SPAȚIU DIGITAL",
    "INOVAȚIE TEHNOLOGICĂ", "ECHIPAMENT ELECTRONIC", "SERVICIU ONLINE", "TRANSFER DATE",
    "PROTOCOL REȚEA", "ACTUALIZARE SOFTWARE", "COMPONENTĂ HARDWARE", "INTEGRARE SISTEM",
    "ALGORITM INTELIGENT", "CONTROL LA DISTANȚĂ", "APLICAȚIE WEB", "SERVICIU STREAMING",
    "CRIPTARE DATE", "STARTUP TEHNOLOGIC", "PLATFORMĂ CLOUD", "AUTOMATIZARE PROCES",
  ],
  film: [
    "FILM MUZICĂ DANS", "RITM BEAT MELODIE", "CHITARĂ TOBE BASS",
    "JAZZ BLUES SOUL", "OPERĂ DRAMĂ SCENĂ", "CAMERĂ LUMINI STEA",
    "MUSICAL CÂNTEC DANS", "ROCK POP METAL", "DRAMĂ COMEDIE FILM", "SUNET IMAGINE EMOȚIE",
    "SIMFONIE ORCHESTRĂ SALĂ", "CINEMA FILM EXPERIENȚĂ", "SOLO CHITARĂ ROCK",
    "FESTIVAL MUZICĂ ÎMPREUNĂ", "ALBUM CÂNTECE SENTIMENTE", "OPERĂ VOCE UMPLE",
    "BILET CONCERT AȘTEPTARE", "REPETIȚIE TRUPĂ SALĂ", "MELODIE INIMĂ ATINGE", "FILM VIS SPECTATOR",
    "STEA CARIERĂ FAIMĂ", "RITM MIȘCARE DANS", "SUNET EFECT EMOȚIE", "VERSURI MESAJ VIAȚĂ",
        "REGIZOR FILMEAZĂ SCENĂ", "ACTOR JOACĂ ROL", "SCENARIU SPUNE POVESTE",
    "ECRAN MARE PROIECȚIE", "PREMIERĂ SEARĂ STRĂLUCIRE", "STUDIO ÎNREGISTREAZĂ PIESĂ",
    "MICROFON PE SCENĂ", "REFLECTOR LUMINEAZĂ CHIP", "COR CÂNTĂ ARMONIE",
    "FORMAȚIE LIVE CONCERT", "TRAILER FILM PREZINTĂ", "SCHIMBARE CADRU RAPID",
    "GALA PREMII CEREMONIE", "PUBLIC APLAUDĂ PUTERNIC", "PAS DANS RITM",
    "CORTINĂ SE RIDICĂ", "EROU SALVEAZĂ LUMEA", "SCENĂ ROMANTICĂ SĂRUT",
    "SCENĂ ACȚIUNE EXPLOZIE", "RÂSETE UMPLE SALA", "RĂSTURNARE SITUAȚIE DRAMATICĂ",
    "COMPOZITOR SCRIE PARTITURĂ", "DIRIJOR CONDUCE ORCHESTRĂ", "MUZICĂ FILM TEMĂ",
    "FANI AȘTEAPTĂ AUTOGRAF", "COVOR ROȘU EVENIMENT", "SEARĂ FILM POPCORN",
    "COLONĂ SONORĂ CELEBRĂ", "SERIAL SEZON NOU", "PLATOU FILMARE LOCAȚIE",
    "ECHIPĂ DISTRIBUȚIE COMPLETĂ", "VIDECLIP LANSARE OFICIALĂ", "SUCCES BOX OFFICE",
    "FILM INDEPENDENT FESTIVAL", "CAPODOPERĂ CINEMATOGRAFICĂ MOMENT", "EFECTE SPECIALE VIZUALE",
    "ACCES CULISE EXCLUSIV", "MULȚIME ACLAMĂ STEA", "TEATRU SALĂ PLINĂ",
    "MONTaj FILM STUDIO", "CADRU APROPIAT DETALIU", "PRODUCȚIE ORIGINALĂ ARTISTICĂ",
  ],
  science: [
    "ATOM ELECTRON PROTON", "LUMINĂ SUNET UNDĂ", "PĂMÂNT LUNĂ SOARE",
    "CHIMIE FIZICĂ BIOLOGIE", "GRAVITAȚIE MASĂ FORȚĂ", "OXIGEN CARBON HIDROGEN",
    "ADN ARN PROTEINĂ", "STEA PLANETĂ LUNĂ", "TEMPERATURĂ PRESIUNE VOLUM", "MASĂ FORȚĂ SPAȚIU",
    "TEORIE FIZICĂ CUANTICĂ", "ORBITE SISTEM SOLAR", "GAURĂ NEAGRĂ ATRAGE",
    "EVOLUȚIE SELECȚIE NATURALĂ", "BIG BANG UNIVERS APĂRUT",
    "RELATIVITATE TEORIE EINSTEIN", "EXPERIMENT LABORATOR REZULTAT", "MICROB VIRUS BACTERIE",
    "ENERGIE NUCLEARĂ FISIUNE", "FOTOSINTEZĂ LUZ OXIGEN",
    "NUCLEU PROTEINĂ MEMBRANĂ", "REACȚIE CHIMICĂ CĂLDURĂ LUMINA", "PLANETĂ GRAVITAȚIE ORBITĂ",
        "MOLECULĂ LEGĂTURĂ ENERGIE", "ION SARCINĂ ELECTRICĂ", "DIVIZIUNE CELULARĂ MITOZĂ",
    "GALAXIE NEBULOASĂ STEA", "SPECTRU CULOARE LUNGIME", "CÂMP MAGNETIC FORȚĂ",
    "VACCIN ANTICORP IMUNITATE", "ECOSISTEM FLORĂ FAUNĂ", "LANȚ TROFIC ENERGIE",
    "GENĂ MUTAȚIE EREDITATE", "CATALIZATOR ACCELEREAZĂ REACȚIE", "PLASMĂ GAZ IONIZAT",
    "CURENT TENSIUNE REZISTENȚĂ", "OPTICĂ LENTILĂ OGLINDĂ", "NEURON SINAPSĂ IMPULS",
    "MINERAL ROCĂ CRISTAL", "ATMOSFERĂ AZOT OXIGEN", "AXĂ ROTAȚIE ÎNCLINAȚIE",
    "TRANSFER TERMIC RADIAȚIE", "RESPIRAȚIE CELULARĂ ENERGIE", "COLIZIUNE PARTICULE ACCELERATOR",
    "METEORIT IMPACT CRATER", "BIODIVERSITATE SPECII VARIETATE", "GENOM SECVENTĂ ANALIZĂ",
    "LEGE CONSERVARE ENERGIE", "TELESCOP SPAȚIAL OBSERVAȚIE",
    "ELECTROLIZĂ APĂ DESCOMPUNERE", "DEZINTEGRARE RADIOACTIVĂ RADIAȚIE", "PERETE CELULAR CITOPLASMĂ",
    "PLĂCI TECTONICE MIȘCARE", "MAREE LUNĂ GRAVITAȚIE", "TERMOMETRU MĂSOARĂ CĂLDURĂ",
    "RADIAȚIE COSMICĂ PARTICULE", "FUZIUNE NUCLEARĂ SOARE", "CERCETARE ȘTIINȚIFICĂ DESCOPERIRE",
    "ANALIZĂ STATISTICĂ DATE", "MODEL METEO PROGNOZĂ", "SIMULARE COMPUTERIZATĂ SISTEM",
    "MICROSCOP MĂREȘTE CELULE", "BIOTEHNOLOGIE EDITARE GENETICĂ",
  ],
  history: [
    "ROMA MARE IMPERIU ERA", "ÎNȚELEPCIUNEA GREACĂ PREDĂ TOTUL",
    "ALEXANDRU CEL MARE CONDUCĂTOR", "EGIPT VECHI SECRETE TRĂIESC",
    "MARELE ZID CONSTRUIT DEMULT", "EVUL MEDIU CAVALER VITEAZ",
    "VIKINGII NAVIGAU MĂRI ÎNDEPĂRTATE", "ISTORIA SPUNE TOTUL ODATĂ",
    "RĂZBOI PACE SE ALTERNEAZĂ", "INDIA CULTURĂ MINUNE ASCUNDE",
    "GRECII FONDAU DEMOCRAȚIA ATENA", "IMPERIUL MONGOL DOMINA TOATĂ ASIA",
    "RENAȘTEREA RĂSPÂNDIT DIN ITALIA", "REVOLUȚIE PARIS IZBUCNIT ODATĂ",
    "REVOLUȚIE INDUSTRIALĂ ANGLIA ÎNCEPUT", "ILUMINISM GÂNDIRE SCHIMBAT COMPLET",
    "OLIMPIADE GRECIA VECHE ORIGINE", "EGIPT PIRAMIDE MINUNE CREAZĂ",
    "CEZAR SENAT LUPTA BRAV", "SPANIA AMERICI DESCOPERIT ODATĂ",
        "IMPERIUL BIZANTIN ÎNFLORIT RĂSĂRIT", "TRIBURI MAGHIARE AJUNS CARPAȚI",
    "INVazie TĂTARĂ DEVASTAT ȚARA", "CRUCIADĂ PENTRU ȚARA SFÂNTĂ",
    "REGE FRANCEZ CONSOLIDAT PUTEREA", "MAGNA CARTA GARANTAT DREPTURI",
    "REFORMA A DIVIZAT EUROPA", "LUTHER RĂSPÂNDIT DOCTRINĂ NOUĂ",
    "IMPERIUL OTOMAN EXTINS VEST", "DINASTIA HABSBURG CONDUS CENTRAL",
    "REVOLUȚIA AMERICANĂ DECLARAT INDEPENDENȚA", "RĂZBOI CIVIL NORD SUD",
    "PRIMUL RĂZBOI MONDIAL IZBUCNIT", "AL DOILEA RĂZBOI MONDIAL SCHIMBAT",
    "RĂZBOI RECE EST VEST", "ZIDUL BERLINULUI CĂZUT FINAL",
    "UNIUNEA SOVIETICĂ DESTRĂMAT ANII", "UNIUNEA EUROPEANĂ FORMAT COOPERARE",
    "RĂSCOALA MAGHIARĂ NOUĂSPREZECE CINZECIȘASE", "SFÂNTUL ȘTEFAN FONDAT STAT",
    "TIPARUL RĂSPÂNDIT CUNOAȘTERE RAPID", "EXPLORATORI CĂUTAT RUTE NOI",
    "COLUMB NAVIGAT SPRE VEST", "NAPOLEON CUCERIT MULTE ȚĂRI",
    "SAMURAI SERVIT ÎMPĂRAT JAPONEZ", "CIVILIZAȚIA MAYA ÎNFLORIT DEMULT",
    "IMPERIUL INCA DOMNIT ANZI", "MESOPOTAMIA FONDAT PRIME ORAȘE",
    "FARAONI CONDUS EGIPT MULT", "RĂZBOINICI SPARTANI LUPTAT VITEJ",
    "ATENA CENTRU CULTURAL IMPORTANT", "LEGIONARI ROMANI MĂRȘĂLUIT DEPARTE",
    "SISTEM FEUDAL ORGANIZAT PĂMÂNT", "COLONIALISM SCHIMBAT CONTINENTE LARG",
    "EPOCA DE AUR ÎNFLORIT", "ISTORIA OFERĂ LECȚII IMPORTANTE",
  ],
  culture: [
    "VALORILE CULTURII APARȚIN TUTUROR", "DANS MUZICĂ MÂNCARE BĂUTURĂ",
    "SĂRBĂTOARE BUCURIE MARE FAMILIE", "MUZEU PICTURI SCULPTURI VIE",
    "LITERATURĂ VERSURI ROMAN VIAȚĂ", "POPOARELE LUMII TOATE DIFERITE",
    "GASTRONOMIA LUMII GUSTURI MINUNE", "FILME CĂRȚI IMAGINAȚIE ARIPI",
    "SPORT CULTURĂ MERG ÎMPREUNĂ", "TRADIȚIE TRECUT PREZENT VIITOR",
    "CITIT CĂRȚI HRĂNEȘTE SUFLET", "ARTĂ PENSULĂ PÂNZĂ CULORI",
    "ARHITECTURĂ MINUNI LUMII PODOABE", "MUZICĂ PRETUTINDENI SUNĂ ASCULTĂ",
    "FOLCLOR VECHE TRADIȚIE PĂSTREAZĂ", "ANSAMBLU MUZICĂ POPULARĂ ÎMPREUNĂ",
    "TURISM CULTURĂ DESCOPERIRE CONECTEAZĂ", "OBICEIURI GENERAȚII TRANSMIT MEREU",
    "LIMBĂ CULTURĂ SE EXPRIMĂ ÎMPREUNĂ", "ARTIZANAT VECHI CUNOȘTINȚE PĂSTRATE",
        "COSTUM POPULAR TRADIȚIE COLORATĂ", "MUZICĂ POPULARĂ RĂSUNĂ SAT",
    "TEATRU SPECTACOL PUBLIC ENTUZIASMAT", "EXPOZIȚIE ARTĂ DESCHISĂ PUBLIC",
    "COMUNITATE ÎMPĂRTĂȘEȘTE VALORI COMUNE", "CREDINȚĂ RELIGIE RITUAL UNEȘTE",
    "FESTIVAL CULTURAL ADUNĂ OAMENI", "PIAȚĂ LOCALĂ PRODUSE ARTIZANALE",
    "BASM TRANSMITE ÎNVĂȚĂTURĂ MORALĂ", "POEZIE EXPRIMĂ EMOȚII PROFUNDE",
    "SCULPTOR CIoplește PIATRĂ FIGURĂ", "SĂRBĂTOARE SAT UNEȘTE VECINI",
    "TRADIȚIE FAMILIE CONTINUĂ GENERAȚII", "MUZICĂ LUMII UNEȘTE CULTURI",
    "MOȘTENIRE CULTURALĂ COMOARĂ DURABILĂ", "MEȘTEȘUGARI TRANSMIT ABILITĂȚI VECHI",
    "IDENTITATE CULTURALĂ FORMEAZĂ NAȚIUNI", "SEARĂ LITERARĂ ÎNCURAJEAZĂ DIALOG",
    "CULTURĂ URBANĂ AMESTECĂ INFLUENȚE", "POVESTIRE CREEAZĂ LEGĂTURI PUTERNICE",
    "CREAȚIE ARTISTICĂ EXPRIMĂ PERSONALITATE", "GRUP TRADIȚIONAL PREZINTĂ DANSURI",
    "BIBLIOTECĂ OFERĂ ACCES CUNOAȘTERE", "SEARĂ FILM CREEAZĂ AMINTIRI",
    "ARTĂ CULINARĂ REFLECTĂ REGIUNE", "DANS POPULAR URMEAZĂ RITM",
    "ARTA INSPIRĂ IDEI NOI", "DIVERSITATE LINGVISTICĂ ÎMBOGĂȚEȘTE SOCIETATE",
    "CÂNTAT ÎMPREUNĂ ÎNTĂREȘTE UNITATE", "REȚETĂ PĂSTREAZĂ ISTORIE FAMILIE",
  ],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export function getLevelConfig(levelNum: number): LevelConfig {
  return LEVEL_CONFIGS[levelNum - 1];
}

export function getPuzzleForLevel(lang: string, levelNum: number): string {
  const l = ["hu", "de", "en", "ro"].includes(lang) ? lang : "en";
  const cfg = getLevelConfig(levelNum);
  if (cfg.type === "word") {
    const map = { hu: WORDS_HU, de: WORDS_DE, en: WORDS_EN, ro: WORDS_RO }[l]!;
    const arr = map[cfg.theme.key] ?? [];
    return arr[Math.floor(Math.random() * arr.length)] ?? "CAT";
  }
  if (cfg.type === "sentence") {
    const map = { hu: SENTENCES_HU, de: SENTENCES_DE, en: SENTENCES_EN, ro: SENTENCES_RO }[l]!;
    const arr = map[cfg.theme.key] ?? [];
    return arr[Math.floor(Math.random() * arr.length)] ?? "HELLO WORLD";
  }
  return "";
}

export function getSecretCodeCount(lang: string): number {
  return (SECRET_CODES_LIST[lang in SECRET_CODES_LIST ? lang : "en"] ?? SECRET_CODES_LIST.en).length;
}

export function getSecretCode(lang: string, index: number = 0): SecretCodeData {
  const codes = SECRET_CODES_LIST[lang in SECRET_CODES_LIST ? lang : "en"] ?? SECRET_CODES_LIST.en;
  return codes[index % codes.length];
}

export function getVowels(lang: string): string[] {
  const base = ["A", "E", "I", "O", "U"];
  if (lang === "hu") return [...base, "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
  if (lang === "de") return [...base, "Ä", "Ö", "Ü"];
  if (lang === "ro") return [...base, "Ă", "Â", "Î"];
  return base;
}

export function getSpecialKeys(lang: string): string[] {
  switch (lang) {
    case "hu": return ["Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    case "de": return ["Ä", "Ö", "Ü"];
    case "ro": return ["Ă", "Â", "Î", "Ș", "Ț"];
    default:   return [];
  }
}

export function getRandomWord(lang: string): { word: string; category: KodexCategory } {
  return { word: getPuzzleForLevel(lang, 1), category: THEMES.animals };
}

export const CATEGORIES = Object.values(THEMES).filter(t => t.key !== "secret");
