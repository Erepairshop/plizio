// ─── ROMANIAN GENERATORS (CLASA a V-a) — TEXT ───────────────────────────────
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy;
}
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}
function createTyping(topic: string, subtopic: string, question: string, correct: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, correct };
}

// ─── 1. GENURI LITERARE ───────────────────────────────────────────────────────

export function gen_genuri_literare_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "text_c5";
  const S = "genuri_literare_c5";

  const questions: CurriculumQuestion[] = [
    createMCQ(T, S,
      "Câte genuri literare există în literatura română?",
      "Trei: epic, liric și dramatic",
      ["Două: epic și liric", "Patru: epic, liric, dramatic și didactic", "Cinci: epic, liric, dramatic, didactic și satiric"],
      rng),

    createMCQ(T, S,
      "Genul liric se caracterizează prin:",
      "exprimarea directă a sentimentelor autorului, prin intermediul eului liric",
      ["prezentarea unei acțiuni cu personaje", "dialogul dintre personaje", "nararea unor întâmplări"],
      rng),

    createMCQ(T, S,
      "Genul epic se caracterizează prin:",
      "prezentarea unor întâmplări cu ajutorul naratorului și al personajelor",
      ["exprimarea directă a sentimentelor autorului", "prezența exclusivă a dialogurilor", "absența totală a personajelor"],
      rng),

    createMCQ(T, S,
      "Genul dramatic se caracterizează prin:",
      "scrieri destinate reprezentației scenice, în care acțiunea se desfășoară prin dialog",
      ["povestiri scurte despre animale", "texte lirice cu rimă", "nararea la persoana întâi a unor întâmplări"],
      rng),

    createMCQ(T, S,
      "Care dintre următoarele afirmații este adevărată despre eul liric?",
      "Eul liric este vocea care exprimă sentimentele în opera lirică",
      ["Eul liric este personajul principal al unui roman", "Eul liric este naratorul dintr-o poveste", "Eul liric este autorul piesei de teatru"],
      rng),

    createMCQ(T, S,
      "Un text aparține genului dramatic dacă:",
      "este scris sub formă de dialog și conține indicații scenice",
      ["conține descrieri ale naturii", "este scris la persoana I și exprimă sentimente", "povestește faptele unui erou"],
      rng),

    createMCQ(T, S,
      "Care este diferența dintre autor și narator?",
      "Autorul este persoana reală care scrie opera, iar naratorul este vocea care povestește în text",
      ["Autorul și naratorul sunt întotdeauna același personaj", "Naratorul este personajul principal, autorul este secundar", "Autorul apare doar în texte dramatice, naratorul doar în texte lirice"],
      rng),

    createTyping(T, S,
      "Câte genuri literare principale există?",
      "trei"),

    createTyping(T, S,
      "Care sunt cele trei genuri literare?",
      "epic"),

    createTyping(T, S,
      "Ce genul exprimă sentimente directe?",
      "liric"),

    createTyping(T, S,
      "Ce genul prezintă acțiuni cu personaje?",
      "epic"),

    createTyping(T, S,
      "Ce genul se joacă pe scenă?",
      "dramatic"),

    createTyping(T, S,
      "Cum se numește vocea care povestește într-o operă literară?",
      "narator"),

    createTyping(T, S,
      "Cum se numește vocea care exprimă sentimente în poezie?",
      "liric"),

    createTyping(T, S,
      "Care este autorul unei opere?",
      "scriitor"),

    createTyping(T, S,
      "Ce rol are naratorul în epică?",
      "povestire"),
  ];

  return shuffle(questions, rng);
}

// ─── 2. SPECII LITERARE ───────────────────────────────────────────────────────

export function gen_specii_literare_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "text_c5";
  const S = "specii_literare_c5";

  const questions: CurriculumQuestion[] = [
    createMCQ(T, S,
      "Fabula este o specie literară care:",
      "prezintă animale personificate și transmite o morală",
      ["este o poveste lungă cu eroi pozitivi", "descrie frumusețile naturii", "prezintă dialoguri între personaje reale"],
      rng),

    createMCQ(T, S,
      "Basmul este o specie literară care:",
      "prezintă întâmplări fantastice cu personaje pozitive și negative, cu un final fericit",
      ["descrie viața de zi cu zi a unor oameni obișnuiți", "exprimă sentimentele autorului față de natură", "prezintă dialoguri comice între personaje"],
      rng),

    createMCQ(T, S,
      "Pastelul este o specie a genului:",
      "liric, în care se descrie natura",
      ["epic, în care se narează o întâmplare", "dramatic, în care personajele dialoghează", "epic, care prezintă animale personificate"],
      rng),

    createMCQ(T, S,
      "Comedia este o specie a genului dramatic care:",
      "prezintă situații și personaje comice, cu scopul de a stârni râsul",
      ["prezintă conflicte grave cu final tragic", "narează faptele unui erou legendar", "descrie frumusețile unui peisaj"],
      rng),

    createMCQ(T, S,
      "Schița este o specie a genului epic care se caracterizează prin:",
      "acțiune scurtă, puține personaje și un singur episod semnificativ",
      ["acțiune lungă și complexă cu multe personaje", "exprimarea sentimentelor eului liric", "dialog exclusiv între două personaje"],
      rng),

    createMCQ(T, S,
      "Legenda este o specie literară care:",
      "explică în mod fantastic originea unor lucruri, locuri sau ființe",
      ["prezintă exclusiv evenimente istorice reale", "exprimă melancolie și tristețe", "satirizează defectele oamenilor prin animale"],
      rng),

    createMCQ(T, S,
      "Doina este o specie a genului:",
      "liric, specifică folclorului românesc, care exprimă dorul, jalea sau dragostea",
      ["epic, care povestește faptele unui erou", "dramatic, jucată pe scenă", "epic, cu personaje fantastice"],
      rng),

    createTyping(T, S,
      "Ce specie prezintă animale cu o morală?",
      "fabula"),

    createTyping(T, S,
      "Ce specie prezintă întâmplări fantastice?",
      "basm"),

    createTyping(T, S,
      "Ce specie descrie natura?",
      "pastel"),

    createTyping(T, S,
      "Ce specie dramă stîrnește râsul?",
      "comedie"),

    createTyping(T, S,
      "Ce specie epic are puține personaje?",
      "schiță"),

    createTyping(T, S,
      "Ce specie explică origini fantastice?",
      "legendă"),

    createTyping(T, S,
      "Ce specie lirică exprimă dorul?",
      "doina"),

    createTyping(T, S,
      "Care sunt speciile principale ale epicii?",
      "epic"),

    createTyping(T, S,
      "Cum se numesc speciile literare mici?",
      "specie"),
  ];

  return shuffle(questions, rng);
}

// ─── 3. MODURI DE EXPUNERE ────────────────────────────────────────────────────

export function gen_moduri_expunere_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "text_c5";
  const S = "moduri_expunere_c5";

  const questions: CurriculumQuestion[] = [
    createMCQ(T, S,
      "Narațiunea ca mod de expunere:",
      "prezintă o înlănțuire de acțiuni și evenimente în timp",
      ["descrie aspectele unui personaj sau loc", "reproduce vorbele personajelor", "exprimă gândurile interioare ale unui personaj"],
      rng),

    createMCQ(T, S,
      "Descrierea ca mod de expunere:",
      "prezintă aspecte ale unui personaj, loc sau obiect",
      ["redă o înlănțuire de acțiuni", "reproduce vorbele personajelor", "exprimă gândurile interioare ale naratorului"],
      rng),

    createMCQ(T, S,
      "Dialogul ca mod de expunere:",
      "reproduce vorbele schimbate între două sau mai multe personaje",
      ["prezintă gândurile unui singur personaj", "descrie natura în mod detaliat", "narează evenimentele dintr-o perspectivă exterioară"],
      rng),

    createMCQ(T, S,
      "Monologul ca mod de expunere:",
      "reprezintă vorbirea unui singur personaj, fără a i se răspunde",
      ["dialogul dintre personajul principal și cel secundar", "descrierea unui peisaj de către narator", "nararea faptelor la persoana a III-a"],
      rng),

    createMCQ(T, S,
      "Portretul fizic al unui personaj este realizat prin modul de expunere numit:",
      "descriere",
      ["narațiune", "dialog", "monolog interior"],
      rng),

    createMCQ(T, S,
      "Cum se numesc semnele grafice care marchează în scris replicile personajelor dintr-un dialog?",
      "Linia de dialog (liniuța de dialog)",
      ["Ghilimelele", "Parantezele", "Punctele de suspensie"],
      rng),

    createTyping(T, S,
      "Ce mod prezintă acțiuni în lănț?",
      "narațiune"),

    createTyping(T, S,
      "Ce mod prezintă aspectele unui loc?",
      "descriere"),

    createTyping(T, S,
      "Ce mod reproduce vorbele personajelor?",
      "dialog"),

    createTyping(T, S,
      "Ce mod prezintă vorbirea unui singur personaj?",
      "monolog"),

    createTyping(T, S,
      "Cu ce se realizeaza portretul fizic?",
      "descriere"),

    createTyping(T, S,
      "Ce marchez replicile în dialog?",
      "liniuță"),

    createTyping(T, S,
      "Câte moduri principale de expunere sunt?",
      "cinci"),

    createTyping(T, S,
      "Ce descriu modul narațiune?",
      "acțiuni"),

    createTyping(T, S,
      "Ce descriu descrierea în text?",
      "aspecte"),

    createTyping(T, S,
      "Cum se numesc vorbele în dialog?",
      "replici"),
  ];

  return shuffle(questions, rng);
}

// ─── 4. PERSONAJE — CARACTERIZARE ────────────────────────────────────────────

export function gen_personaje_caracterizare_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "text_c5";
  const S = "personaje_caracterizare_c5";

  const questions: CurriculumQuestion[] = [
    createMCQ(T, S,
      "Caracterizarea indirectă a unui personaj se realizează prin:",
      "faptele, vorbele și gândurile personajului",
      ["descrierea directă făcută de autor", "portretul fizic detaliat", "comentariile cititorului"],
      rng),

    createMCQ(T, S,
      "Caracterizarea directă a unui personaj se realizează prin:",
      "descrierea făcută de autor sau de alt personaj din operă",
      ["faptele și comportamentul personajului", "relațiile personajului cu ceilalți", "obiectele pe care le folosește personajul"],
      rng),

    createMCQ(T, S,
      "Trăsăturile fizice ale unui personaj se referă la:",
      "înfățișarea exterioară: chip, statură, vestimentație",
      ["calitățile și defectele morale ale personajului", "sentimentele și gândurile personajului", "rolul personajului în acțiune"],
      rng),

    createMCQ(T, S,
      "Trăsăturile morale ale unui personaj se referă la:",
      "calitățile și defectele de caracter: bunătate, curaj, lăcomie, lașitate etc.",
      ["culoarea ochilor și a părului", "vârsta și înălțimea personajului", "locul unde trăiește personajul"],
      rng),

    createMCQ(T, S,
      "Personajul principal dintr-o operă literară este:",
      "personajul în jurul căruia se desfășoară acțiunea și care apare cel mai des",
      ["personajul care vorbește cel mai mult în dialog", "personajul care face descrieri ale naturii", "personajul care apare doar la sfârșitul operei"],
      rng),

    createMCQ(T, S,
      "Propoziția „Era un om înalt, cu privire blândă și zâmbet cald." reprezintă o caracterizare:",
      "directă, fizică și morală, realizată de narator",
      ["indirectă, prin faptele personajului", "directă, realizată de alt personaj", "indirectă, prin vorbele personajului"],
      rng),

    createMCQ(T, S,
      "Cum se numește personajul care reprezintă forța binelui și cu care cititorul se identifică?",
      "Personaj pozitiv (protagonist)",
      ["Personaj secundar", "Personaj negativ (antagonist)", "Personaj episodic"],
      rng),

    createTyping(T, S,
      "Cum se realizează caracterizarea indirectă?",
      "fapte"),

    createTyping(T, S,
      "Cum se realizează caracterizarea directă?",
      "descriere"),

    createTyping(T, S,
      "Ce înseamnă trăsăturile fizice?",
      "înfățișare"),

    createTyping(T, S,
      "Ce sunt trăsăturile morale?",
      "caracter"),

    createTyping(T, S,
      "Cum se numește personajul principal?",
      "protagonist"),

    createTyping(T, S,
      "Cum se numește personajul negativ?",
      "antagonist"),

    createTyping(T, S,
      "Ce sunt personajele secundare?",
      "ajutoare"),

    createTyping(T, S,
      "Ce sunt portretele fizice?",
      "descriere"),

    createTyping(T, S,
      "Cum se definesc personajele?",
      "caracterizare"),
  ];

  return shuffle(questions, rng);
}

// ─── 5. TEXTE NONLITERARE ────────────────────────────────────────────────────

export function gen_texte_nonliterare_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "text_c5";
  const S = "texte_nonliterare_c5";

  const questions: CurriculumQuestion[] = [
    createMCQ(T, S,
      "Textul nonliterar se deosebește de cel literar prin:",
      "limbaj obiectiv și informații verificabile",
      ["prezența figurilor de stil", "exprimarea sentimentelor autorului", "prezența personajelor fictive"],
      rng),

    createMCQ(T, S,
      "Știrea este un text nonliterar care:",
      "informează cititorul despre un eveniment recent, real și important",
      ["convinge cititorul să cumpere un produs", "prezintă opinia subiectivă a autorului despre un subiect", "povestește o întâmplare fictivă cu personaje"],
      rng),

    createMCQ(T, S,
      "Reclama este un text nonliterar al cărui scop principal este:",
      "să convingă publicul să cumpere un produs sau să folosească un serviciu",
      ["să informeze despre un eveniment politic", "să descrie frumusețile naturii", "să prezinte viața unui personaj important"],
      rng),

    createMCQ(T, S,
      "Anunțul este un text nonliterar care:",
      "transmite o informație scurtă și clară unui public larg",
      ["prezintă în detaliu viața unui om celebru", "exprimă sentimentele autorului față de un eveniment", "narează o poveste cu morală"],
      rng),

    createMCQ(T, S,
      "Interviul este un text nonliterar care:",
      "prezintă un schimb de întrebări și răspunsuri între un jurnalist și o persoană",
      ["descrie detaliat aspectul fizic al unei persoane", "narează faptele unui personaj fictiv", "convinge cititorul să adopte o opinie"],
      rng),

    createMCQ(T, S,
      "Instrucțiunile de utilizare sunt texte nonliterare care:",
      "explică pașii necesari pentru folosirea corectă a unui obiect sau produs",
      ["prezintă opinia autorului despre un produs", "narează modul în care a fost fabricat un produs", "descriu frumusețea estetică a unui obiect"],
      rng),

    createTyping(T, S,
      "Ce text informează despre o noutate?",
      "știre"),

    createTyping(T, S,
      "Ce text convinge să cumperi ceva?",
      "reclamă"),

    createTyping(T, S,
      "Ce text transmite scurt informații?",
      "anunț"),

    createTyping(T, S,
      "Ce text face interviuri?",
      "interviu"),

    createTyping(T, S,
      "Ce text explică cum să folosești?",
      "instrucțiuni"),

    createTyping(T, S,
      "Ce limbaj au textele nonliterare?",
      "obiectiv"),

    createTyping(T, S,
      "Care sunt scopurile textelor nonliterare?",
      "informare"),

    createTyping(T, S,
      "Ce specie de text este o reclama?",
      "nonliterar"),

    createTyping(T, S,
      "Ce are textul nonliterar?",
      "informații"),

    createTyping(T, S,
      "Cum sunt textele nonliterare?",
      "obiective"),
  ];

  return shuffle(questions, rng);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C5_Text_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  text_c5: {
    genuri_literare_c5: (seed = 42) => gen_genuri_literare_c5(seed),
    specii_literare_c5: (seed = 42) => gen_specii_literare_c5(seed),
    moduri_expunere_c5: (seed = 42) => gen_moduri_expunere_c5(seed),
    personaje_caracterizare_c5: (seed = 42) => gen_personaje_caracterizare_c5(seed),
    texte_nonliterare_c5: (seed = 42) => gen_texte_nonliterare_c5(seed),
  }
};
