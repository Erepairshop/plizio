import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle<T>(arr: T[], rng: () => number): T[] { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number) { const seen = new Set<string>(); const unique: string[] = []; for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } } const opts = shuffle([correct, ...unique.slice(0, 3)], rng); return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) }; }
function createTyping(topic: string, subtopic: string, question: string, answer: string) { return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() }; }

const FIGURI_STIL = [
  { figura: "metaforă", desc: "comparație ascunsă, fără cuvintele 'ca' sau 'precum'", exemplu: "Codrul e o catedrală." },
  { figura: "comparație", desc: "asemănare între două lucruri cu ajutorul cuvintelor 'ca' sau 'precum'", exemplu: "Ochii ei sunt albaștri ca cerul." },
  { figura: "personificare", desc: "atribuirea de trăsături umane unor obiecte sau fenomene", exemplu: "Vântul șoptește printre frunze." },
  { figura: "hiperbolă", desc: "exagerare voită a unei trăsături", exemplu: "Am așteptat o veșnicie." },
  { figura: "ironie", desc: "a spune ceva în sens opus celui înțeles literal", exemplu: "Frumoasă treabă ai mai făcut!" },
  { figura: "epitet", desc: "cuvânt care evidențiază o însușire deosebită a unui obiect", exemplu: "lacul codrilor albastru" },
  { figura: "repetiție", desc: "reluarea aceluiași cuvânt pentru a accentua o idee", exemplu: "Plouă, plouă, plouă neîncetat." },
  { figura: "enumerație", desc: "înșiruirea mai multor termeni de același fel", exemplu: "Câmpuri, dealuri, păduri și ape." },
  { figura: "antiteză", desc: "opoziția puternică între două idei sau imagini", exemplu: "Ea era frumoasă, el era urât." },
  { figura: "metonimie", desc: "înlocuirea unui termen cu altul aflat în relație cu el", exemplu: "Citește pe Eminescu (operele lui)." },
  { figura: "aliterație", desc: "repetarea aceleiași consoane pentru efect muzical", exemplu: "Prin vulturi vântul viu vuia." },
  { figura: "oximoron", desc: "alăturarea a doi termeni cu sens opus", exemplu: "o tăcere asurzitoare" },
];

const TEXT_LITERAR_GENURI = [
  { gen: "roman", trait: "narațiune amplă cu mai mulți eroi și conflicte" },
  { gen: "poezie", trait: "text versificat cu ritm și rimă" },
  { gen: "dramă", trait: "text pentru scenă cu dialoguri și indicații scenice" },
  { gen: "nuvelă", trait: "narațiune scurtă cu un singur conflict" },
  { gen: "schiță", trait: "narațiune foarte scurtă, dintr-un singur episod" },
  { gen: "baladă", trait: "poezie narativă cu temă legendară sau eroică" },
  { gen: "fabulă", trait: "scurtă povestire alegorică cu morală, adesea cu animale" },
  { gen: "basm", trait: "narațiune fantastică în care binele învinge răul" },
  { gen: "pastel", trait: "poezie descriptivă care zugrăvește un tablou din natură" },
  { gen: "sonet", trait: "poezie cu formă fixă, de paisprezece versuri" },
];

const COMENTARIU_LITERAR_ELEM = [
  { element: "tema", desc: "ideea centrală a textului" },
  { element: "motivul", desc: "element recurent în text" },
  { element: "simbolul", desc: "cuvânt sau imagine care reprezintă o idee abstractă" },
  { element: "personajul", desc: "ființă cu rol în narațiune" },
  { element: "naratorul", desc: "vocea care povestește întâmplările" },
  { element: "rima", desc: "potrivirea sunetelor de la sfârșitul versurilor" },
  { element: "ritmul", desc: "succesiunea regulată a silabelor accentuate și neaccentuate" },
  { element: "strofa", desc: "grup de versuri despărțit prin pauză de alte grupuri" },
  { element: "conflictul", desc: "ciocnirea de interese dintre personaje sau forțe" },
  { element: "mesajul", desc: "ideea pe care autorul vrea să o transmită cititorului" },
];

// Sample-text driven, so the question is answerable on its own.
const TEXT_NONLITERAR = [
  { text: "Mâine, la ora 18:00, în sala Mare a Primăriei, va avea loc dezbaterea publică privind noul parc.", tip: "anunț" },
  { text: "Cumpărați acum! Reducere de 50% la toate produsele, doar până duminică!", tip: "reclamă" },
  { text: "Pasul 1: Conectați cablul. Pasul 2: Apăsați butonul Pornire. Pasul 3: Selectați limba.", tip: "instrucțiuni de utilizare" },
  { text: "Filmul m-a impresionat prin imagine și coloană sonoră; recomand vizionarea tuturor.", tip: "recenzie" },
  { text: "Stimate domnule director, vă rog să îmi aprobați cererea de transfer. Cu respect, Ion Popescu.", tip: "cerere" },
  { text: "Ieri, în centrul orașului, autoritățile au inaugurat o nouă linie de tramvai modernă.", tip: "știre" },
  { text: "Dragă Maria, îți scriu să îți povestesc despre vacanța mea la munte. Mi-a fost dor de tine.", tip: "scrisoare" },
  { text: "Balena albastră este cel mai mare animal de pe Pământ și se hrănește în special cu krill.", tip: "articol enciclopedic" },
];

const TEXT_STIL = [
  { text: "Vă rugăm să prezentați documentele solicitate până la termenul stabilit.", stil: "formal" },
  { text: "Hei, ce faci? Ne vedem diseară la o cafea?", stil: "informal" },
  { text: "Apa fierbe la 100 de grade Celsius la presiune atmosferică normală.", stil: "științific" },
  { text: "Pe bolta nopții, stelele plângeau lacrimi de argint peste tăcerea lumii.", stil: "poetic" },
  { text: "Subsemnatul declar pe propria răspundere că datele furnizate sunt corecte.", stil: "oficial-administrativ" },
  { text: "Frate, a fost super tare meciul de aseară, n-ai idee!", stil: "colocvial" },
];

export const C8P3_Generators = {
  figuri_stil: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const f = pick(FIGURI_STIL, rng);
      const wrongs = shuffle(FIGURI_STIL.filter(x => x.figura !== f.figura), rng);
      const useExample = i % 2 === 0;
      const q = useExample
        ? `În exemplul "${f.exemplu}", figura de stil folosită este:`
        : `"${f.desc}" - această figură de stil se numește:`;
      questions.push(createMCQ("Romanian-C8-P3", "figuri_stil", q, f.figura, [wrongs[0].figura, wrongs[1].figura, wrongs[2].figura], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  text_literar_genuri: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const g = pick(TEXT_LITERAR_GENURI, rng);
      const wrongs = shuffle(TEXT_LITERAR_GENURI.filter(x => x.gen !== g.gen), rng);
      questions.push(createMCQ("Romanian-C8-P3", "text_literar_genuri", `"${g.trait}" - care este genul/specia literară?`, g.gen, [wrongs[0].gen, wrongs[1].gen, wrongs[2].gen], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  comentariu_literar: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    for (let i = 0; i < 30; i++) {
      const e = pick(COMENTARIU_LITERAR_ELEM, rng);
      const wrongs = shuffle(COMENTARIU_LITERAR_ELEM.filter(x => x.element !== e.element), rng);
      questions.push(createMCQ("Romanian-C8-P3", "comentariu_literar", `"${e.desc}" - acest element literar se numește:`, e.element, [wrongs[0].element, wrongs[1].element, wrongs[2].element], rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  texturi_nonliterare: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    const allTypes = [...new Set(TEXT_NONLITERAR.map(t => t.tip))];
    for (let i = 0; i < 30; i++) {
      const t = pick(TEXT_NONLITERAR, rng);
      const wrongs = shuffle(allTypes.filter(x => x !== t.tip), rng);
      questions.push(createMCQ("Romanian-C8-P3", "texturi_nonliterare", `Ce tip de text nonliterar este: "${t.text}"`, t.tip, wrongs.slice(0, 3), rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  stil_vocabular: (seed = 42) => {
    const rng = mulberry32(seed);
    const questions = [];
    const allStyles = [...new Set(TEXT_STIL.map(s => s.stil))];
    for (let i = 0; i < 30; i++) {
      const s = pick(TEXT_STIL, rng);
      const wrongs = shuffle(allStyles.filter(x => x !== s.stil), rng);
      questions.push(createMCQ("Romanian-C8-P3", "stil_vocabular", `Ce stil/registru are textul: "${s.text}"`, s.stil, wrongs.slice(0, 3), rng));
    }
    return shuffle(questions, rng).slice(0, 30);
  },

  figuri_stil_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const f = pick(FIGURI_STIL, rng);
      q.push(createTyping("Romanian-C8-P3", "figuri_stil", `Ce figură de stil este în "${f.exemplu}"?`, f.figura));
    }
    return q;
  },

  text_literar_genuri_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const g = pick(TEXT_LITERAR_GENURI, rng);
      q.push(createTyping("Romanian-C8-P3", "text_literar_genuri", `Genul/specia literară: "${g.trait}"`, g.gen));
    }
    return q;
  },

  comentariu_literar_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const e = pick(COMENTARIU_LITERAR_ELEM, rng);
      q.push(createTyping("Romanian-C8-P3", "comentariu_literar", `Elementul literar: "${e.desc}"`, e.element));
    }
    return q;
  },

  texturi_nonliterare_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const t = pick(TEXT_NONLITERAR, rng);
      q.push(createTyping("Romanian-C8-P3", "texturi_nonliterare", `Ce tip de text nonliterar este: "${t.text}"`, t.tip));
    }
    return q;
  },

  stil_vocabular_typing: (seed = 42) => {
    const rng = mulberry32(seed);
    const q = [];
    for (let i = 0; i < 15; i++) {
      const s = pick(TEXT_STIL, rng);
      q.push(createTyping("Romanian-C8-P3", "stil_vocabular", `Ce stil/registru are textul: "${s.text}"`, s.stil));
    }
    return q;
  },
};
