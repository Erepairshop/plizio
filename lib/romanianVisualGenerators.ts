"use client";

// ─── ROMANIAN VISUAL GENERATORS ─────────────────────────────────────────────
// Generates visual/interactive question data for Romanian Clasa I test.
// Reuses deutsch-visual components: FehlerFinden, SatzOrdnen, LueckenText
//
// These generators produce TestQuestion-like objects that the LanguageTestEngine
// renders using the pluggable visualTypes config.

import FehlerFinden from "@/components/deutsch-visual/FehlerFinden";
import SatzOrdnen from "@/components/deutsch-visual/SatzOrdnen";
import LueckenText from "@/components/deutsch-visual/LueckenText";
import GeschichteSortieren from "@/components/deutsch-visual/GeschichteSortieren";
import WortfamilienBaum from "@/components/deutsch-visual/WortfamilienBaum";
import WortartenSortieren from "@/components/deutsch-visual/WortartenSortieren";
import ZeitformenZuordnen from "@/components/deutsch-visual/ZeitformenZuordnen";
import GenusSortierung from "@/components/deutsch-visual/GenusSortierung";
import type { VisualQuestionType } from "@/lib/languageTestTypes";

// ─── HELPER ──────────────────────────────────────────────────────────────────

function shuffleArr<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickN<T>(arr: T[], n: number): T[] {
  return shuffleArr(arr).slice(0, n);
}

// ─── FEHLER-FINDEN DATA (find the error in a Romanian sentence) ─────────────

interface FehlerItem {
  words: string[];
  errorIndex: number;
  hint: string;
  question: string;
}

const FEHLER_ORTOGRAFIE: FehlerItem[] = [
  // m înainte de b/p errors
  { words: ["Ana", "cunpără", "mere", "roșii."], errorIndex: 1, hint: "Corect: cumpără (m înainte de p).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Copilul", "se", "înbracă", "frumos."], errorIndex: 2, hint: "Corect: îmbracă (m înainte de b).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Tronpeta", "cântă", "la", "concert."], errorIndex: 0, hint: "Corect: trompeta (m înainte de p).", question: "Găsește cuvântul scris greșit:" },
  { words: ["El", "a", "sințit", "frig", "afară."], errorIndex: 2, hint: "Corect: simțit (m înainte de ț).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Bonboanele", "sunt", "dulci."], errorIndex: 0, hint: "Corect: bomboanele (m înainte de b).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Am", "cunpărat", "o", "carte", "nouă."], errorIndex: 1, hint: "Corect: cumpărat (m înainte de p).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Zinbrul", "trăiește", "în", "pădure."], errorIndex: 0, hint: "Corect: zimbrul (m înainte de b).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Mama", "face", "conpot", "de", "prune."], errorIndex: 2, hint: "Corect: compot (m înainte de p).", question: "Găsește cuvântul scris greșit:" },
  // â/î errors
  { words: ["Aîne", "mergem", "la", "bunici."], errorIndex: 0, hint: "Corect: mâine (cu â în interior).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Copilul", "cîntă", "o", "melodie."], errorIndex: 1, hint: "Corect: cântă (cu â în interior).", question: "Găsește cuvântul scris greșit:" },
  // cratima errors
  { words: ["Ion", "sa", "dus", "la", "școală."], errorIndex: 1, hint: "Corect: s-a (cu cratimă).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Mam", "trezit", "devreme", "azi."], errorIndex: 0, hint: "Corect: m-am (cu cratimă).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Ei", "sau", "jucat", "în", "parc."], errorIndex: 1, hint: "Corect: s-au (cu cratimă).", question: "Găsește cuvântul scris greșit:" },
  { words: ["Ana", "intro", "zi", "a", "plecat."], errorIndex: 1, hint: "Corect: într-o (cu cratimă).", question: "Găsește cuvântul scris greșit:" },
  // litera mare errors
  { words: ["maria", "merge", "la", "școală."], errorIndex: 0, hint: "Maria se scrie cu literă mare.", question: "Găsește cuvântul scris greșit:" },
  { words: ["Am", "fost", "la", "bucurești", "ieri."], errorIndex: 3, hint: "București se scrie cu literă mare.", question: "Găsește cuvântul scris greșit:" },
  { words: ["ion", "și", "Ana", "sunt", "prieteni."], errorIndex: 0, hint: "Ion se scrie cu literă mare.", question: "Găsește cuvântul scris greșit:" },
];

function genFehlerFinden(count: number): FehlerItem[] {
  // Filter out the trick question with errorIndex -1
  const valid = FEHLER_ORTOGRAFIE.filter(f => f.errorIndex >= 0);
  return pickN(valid, count);
}

// ─── SATZ-ORDNEN DATA (order words into a Romanian sentence) ─────────────────

interface OrdineItem {
  answer: string;
  shuffled: string[];
  question: string;
}

const ORDINE_PROPOZITII = [
  "Ana merge la școală.",
  "Câinele aleargă prin grădină.",
  "Mama face prăjituri bune.",
  "Copilul citește o carte.",
  "Ion are un ghiozdan nou.",
  "Pisica doarme pe canapea.",
  "Bunica povestește o poveste.",
  "Floarea crește în grădină.",
  "Copiii se joacă afară.",
  "Maria desenează un fluture.",
  "Tata repară bicicleta veche.",
  "Ploaia cade pe acoperiș.",
  "Soarele strălucește pe cer.",
  "Pasărea zboară deasupra copacilor.",
  "Băiatul aleargă prin parc.",
  "Fetița mănâncă o înghețată.",
  "Câinele latră la pisică.",
  "Bunicul pescuiește la lac.",
  "Elevii învață la școală.",
  "Iepurașul sare prin iarbă.",
];

function genOrdineCuvinte(count: number): OrdineItem[] {
  const picked = pickN(ORDINE_PROPOZITII, count);
  return picked.map(sentence => {
    const words = sentence.split(" ");
    return {
      answer: sentence,
      shuffled: shuffleArr(words),
      question: "Pune cuvintele în ordinea corectă:",
    };
  });
}

// ─── LUECKEN-TEXT DATA (fill in the blank — Romanian) ────────────────────────

interface LueckenItem {
  lueckenSentence: string;
  lueckenOptions: string[];
  lueckenCorrect: number;
  question: string;
}

function genLueckenText(count: number): LueckenItem[] {
  const pool: LueckenItem[] = [
    // ce/ci group
    { lueckenSentence: "___rul este albastru.", lueckenOptions: ["Ce", "Ci", "Che"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am mâncat ___reșe din grădină.", lueckenOptions: ["ci", "ce", "chi"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am ___nci mere în coș.", lueckenOptions: ["ci", "ce", "che"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am văzut un ___rb în pădure.", lueckenOptions: ["ce", "ci", "che"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    // ge/gi group
    { lueckenSentence: "Afară este ___r cumplit.", lueckenOptions: ["ge", "gi", "ghe"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "___rafa este foarte înaltă.", lueckenOptions: ["Gi", "Ge", "Ghi"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am pus ___m pe pâine.", lueckenOptions: ["ge", "gi", "ghe"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    // che/chi/ghe/ghi group
    { lueckenSentence: "Am pierdut ___ia de la casă.", lueckenOptions: ["che", "chi", "ce"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Cântă la ___tară foarte frumos.", lueckenOptions: ["chi", "che", "ci"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am cumpărat ___te noi.", lueckenOptions: ["ghe", "ghi", "ge"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "___ocelul a înflorit în grădină.", lueckenOptions: ["Ghi", "Ghe", "Gi"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    { lueckenSentence: "Am găsit o ___ndă în pădure.", lueckenOptions: ["ghi", "ghe", "gi"], lueckenCorrect: 0, question: "Completează cu grupul corect:" },
    // m before b/p
    { lueckenSentence: "Câ___ul este verde vara.", lueckenOptions: ["mp", "np", "mb"], lueckenCorrect: 0, question: "Completează cu literele potrivite:" },
    { lueckenSentence: "Bo___oanele sunt dulci.", lueckenOptions: ["mb", "nb", "mp"], lueckenCorrect: 0, question: "Completează cu literele potrivite:" },
    { lueckenSentence: "Tro___eta cântă frumos.", lueckenOptions: ["mp", "np", "mb"], lueckenCorrect: 0, question: "Completează cu literele potrivite:" },
    { lueckenSentence: "U___brela mă apără de ploaie.", lueckenOptions: ["m", "n", "p"], lueckenCorrect: 0, question: "Completează cu litera potrivită:" },
    // â/î
    { lueckenSentence: "P___inea este proaspătă.", lueckenOptions: ["â", "î", "a"], lueckenCorrect: 0, question: "Completează cu â sau î:" },
    { lueckenSentence: "___ncepe să plouă afară.", lueckenOptions: ["Î", "Â", "I"], lueckenCorrect: 0, question: "Completează cu â sau î:" },
    { lueckenSentence: "C___inele aleargă prin parc.", lueckenOptions: ["â", "î", "a"], lueckenCorrect: 0, question: "Completează cu â sau î:" },
    { lueckenSentence: "___ntâi mâncăm, apoi ne jucăm.", lueckenOptions: ["Î", "Â", "I"], lueckenCorrect: 0, question: "Completează cu â sau î:" },
  ];
  return pickN(pool, count);
}

// ─── ISTORIE SORTIERE DATA (order 4 sentences into a story) ─────────────────

interface IstorieItem {
  sentences: string[];
}

const ISTORIE_POOL: IstorieItem[] = [
  { sentences: [
    "Ana merge la magazin.",
    "Ea cumpără mere și pâine.",
    "Acasă face o prăjitură.",
    "Prăjitura este foarte gustoasă!",
  ]},
  { sentences: [
    "Mihai se trezește devreme.",
    "Se îmbracă și ia micul dejun.",
    "Apoi pleacă la școală.",
    "La școală învață multe lucruri.",
  ]},
  { sentences: [
    "Soarele răsare dimineața.",
    "Păsările încep să cânte.",
    "Copiii ies afară la joacă.",
    "Ziua este frumoasă și însorită.",
  ]},
  { sentences: [
    "Maria găsește o pisicuță în curte.",
    "Pisicuța este mică și albă.",
    "Maria îi dă lapte cald.",
    "Pisicuța toarce fericită.",
  ]},
  { sentences: [
    "Ion ia umbrela și iese din casă.",
    "Afară plouă cu picături mari.",
    "El aleargă până la autobuz.",
    "Ajunge la școală complet udat.",
  ]},
  { sentences: [
    "Bunica face gem de căpșuni.",
    "Ea spală fructele cu grijă.",
    "Pune zahăr și le fierbe.",
    "Gemul este pus în borcane.",
  ]},
  { sentences: [
    "Familia merge la pădure.",
    "Copiii culeg ciuperci și fructe de pădure.",
    "Tata aprinde focul pentru grătar.",
    "Masa în aer liber este minunată.",
  ]},
  { sentences: [
    "Elena deschide o carte nouă.",
    "Citește povestea cu atenție.",
    "Personajele o fac să râdă.",
    "Adoarme cu cartea în mână.",
  ]},
  { sentences: [
    "Primăvara vine după iarnă.",
    "Florile încep să înflorească.",
    "Rândunelele se întorc din călătorie.",
    "Natura se trezește la viață.",
  ]},
  { sentences: [
    "Dan pregătește rucsacul pentru excursie.",
    "Pune apă, sandvișuri și o hartă.",
    "Pleacă dis-de-dimineață cu colegii.",
    "Ajung la munte după trei ore.",
  ]},
  { sentences: [
    "Iarna ninge afară.",
    "Copiii ies să facă om de zăpadă.",
    "Îi pun morcov pentru nas și nasturi.",
    "Omul de zăpadă este gata și frumos.",
  ]},
  { sentences: [
    "Raluca primește un cățel cadou.",
    "Cățelul este mic și jucăuș.",
    "El sare și linge mâna fetei.",
    "Raluca îl numește Pistruiat.",
  ]},
];

function genIstorieSortiere(count: number) {
  const picked = pickN(ISTORIE_POOL, count);
  return picked.map(item => {
    const indices = item.sentences.map((_: string, i: number) => i);
    const shuffledOrder = shuffleArr(indices);
    return { sentences: item.sentences, shuffledOrder };
  });
}

// ─── FAMILIE CUVINTE DATA (word family tree — Romanian) ───────────────────────

interface FamilieCuvintItem {
  stamm: string;
  options: string[];
  correctIndices: number[];
}

const FAMILIE_CUVINTE_POOL: FamilieCuvintItem[] = [
  { stamm: "floare", options: ["florar", "înflorit", "muncitor", "florărie", "floral", "casnic"], correctIndices: [0, 1, 3, 4] },
  { stamm: "casă", options: ["căsuță", "casnic", "florar", "acasă", "căsoi", "scaun"], correctIndices: [0, 1, 3, 4] },
  { stamm: "carte", options: ["cărticică", "cartelar", "masă", "cărturar", "librărie", "cărțulie"], correctIndices: [0, 1, 3, 5] },
  { stamm: "apă", options: ["apăros", "înota", "apărat", "ploaie", "apătos", "apos"], correctIndices: [0, 2, 4, 5] },
  { stamm: "pâine", options: ["pâiniță", "brutărie", "pâinicar", "lapte", "pâiniș", "covrig"], correctIndices: [0, 2, 4] },
  { stamm: "copil", options: ["copilărie", "copilăros", "adult", "copilăresc", "copilăși", "bătrân"], correctIndices: [0, 1, 3, 4] },
  { stamm: "soare", options: ["însorit", "noros", "solar", "soricel", "soarele", "vânt"], correctIndices: [0, 2, 3, 4] },
  { stamm: "pădure", options: ["pădurar", "câmp", "pădurean", "pădureț", "munte", "pădurice"], correctIndices: [0, 2, 3, 5] },
  { stamm: "muncă", options: ["muncitor", "leneș", "muncăreț", "muncitoresc", "vacanță", "muncălău"], correctIndices: [0, 2, 3, 5] },
  { stamm: "școală", options: ["școlar", "grădiniță", "școlăreț", "școliță", "elev", "școlăresc"], correctIndices: [0, 2, 3, 5] },
  { stamm: "drum", options: ["drumeț", "drumar", "casă", "drumeție", "cale", "drumuliță"], correctIndices: [0, 1, 3, 5] },
];

function genFamilieCuvinte(count: number): FamilieCuvintItem[] {
  return pickN(FAMILIE_CUVINTE_POOL, count);
}

// ─── SORTARE CUVINTE DATA (parts of speech sorting — Romanian) ─────────────────

interface SortareCuvinteItem {
  words: string[];
  categories: ('N' | 'V' | 'A')[];
}

const SORTARE_CUVINTE_POOL: SortareCuvinteItem[] = [
  { words: ["câine",    "alerga",  "frumos",  "carte",   "citi",    "mare"],    categories: ['N','V','A','N','V','A'] },
  { words: ["copil",    "cânta",   "vesel",   "floare",  "dormi",   "roșu"],    categories: ['N','V','A','N','V','A'] },
  { words: ["casă",     "zbura",   "înalt",   "pom",     "sări",    "verde"],   categories: ['N','V','A','N','V','A'] },
  { words: ["pisică",   "alerga",  "moale",   "minge",   "cădea",   "mic"],     categories: ['N','V','A','N','V','A'] },
  { words: ["școală",   "învăța",  "bun",     "elev",    "scrie",   "cuminte"], categories: ['N','V','A','N','V','A'] },
  { words: ["mamă",     "găti",    "dulce",   "prăjitură","mânca",  "cald"],    categories: ['N','V','A','N','V','A'] },
  { words: ["pădure",   "crește",  "înalt",   "copac",   "tăia",    "bătrân"],  categories: ['N','V','A','N','V','A'] },
  { words: ["soare",    "lumina",  "galben",  "nor",     "ploua",   "gri"],     categories: ['N','V','A','N','V','A'] },
  { words: ["doctor",   "vindeca", "sănătos", "bolnav",  "ajuta",   "bun"],     categories: ['N','V','A','N','V','A'] },
  { words: ["bunic",    "povesti", "înțelept","poveste",  "asculta", "vechi"],   categories: ['N','V','A','N','V','A'] },
  { words: ["iarnă",    "ninge",   "alb",     "zăpadă",  "îngheța", "rece"],    categories: ['N','V','A','N','V','A'] },
  { words: ["prieten",  "juca",    "credincios","parc",  "alerga",  "bun"],     categories: ['N','V','A','N','V','A'] },
];

// ─── TIMPURI VERBALE DATA (verb tense sorting — Romanian) ────────────────────

const TIMPURI_POOL: { sentence: string; zeitform: 'pres' | 'praet' | 'perf' }[] = [
  // Prezent
  { sentence: "Copilul citește o carte.", zeitform: 'pres' },
  { sentence: "Maria aleargă prin parc.", zeitform: 'pres' },
  { sentence: "Pisica doarme pe canapea.", zeitform: 'pres' },
  { sentence: "Elevii scriu la tablă.", zeitform: 'pres' },
  { sentence: "Mama gătește supă de legume.", zeitform: 'pres' },
  { sentence: "Ion cântă la chitară.", zeitform: 'pres' },
  // Trecut (perfect compus)
  { sentence: "Ana a mers la școală.", zeitform: 'praet' },
  { sentence: "Copiii au învățat lecția.", zeitform: 'praet' },
  { sentence: "Bunica a copt prăjituri.", zeitform: 'praet' },
  { sentence: "Câinele a alergat prin curte.", zeitform: 'praet' },
  { sentence: "Tata a reparat bicicleta.", zeitform: 'praet' },
  { sentence: "Am citit o poveste frumoasă.", zeitform: 'praet' },
  // Viitor
  { sentence: "Mâine voi merge la bunici.", zeitform: 'perf' },
  { sentence: "Copiii vor juca fotbal.", zeitform: 'perf' },
  { sentence: "Vom călători la mare vara.", zeitform: 'perf' },
  { sentence: "Maria va cânta la concert.", zeitform: 'perf' },
  { sentence: "Voi citi o carte nouă.", zeitform: 'perf' },
  { sentence: "Ei vor pleca în excursie.", zeitform: 'perf' },
];

// ─── GEN SUBSTANTIV DATA (noun gender sorting — Romanian) ────────────────────
// Mapping: der = masculin, die = feminin, das = neutru

const GEN_SORT_POOL: { word: string; genus: 'der' | 'die' | 'das' }[] = [
  // masculin → der
  { word: "copil", genus: "der" }, { word: "câine", genus: "der" }, { word: "munte", genus: "der" },
  { word: "copac", genus: "der" }, { word: "lup", genus: "der" }, { word: "prieten", genus: "der" },
  { word: "elev", genus: "der" }, { word: "soare", genus: "der" }, { word: "perete", genus: "der" },
  // feminin → die
  { word: "casă", genus: "die" }, { word: "carte", genus: "die" }, { word: "floare", genus: "die" },
  { word: "masă", genus: "die" }, { word: "pisică", genus: "die" }, { word: "grădină", genus: "die" },
  { word: "pasăre", genus: "die" }, { word: "școală", genus: "die" }, { word: "familie", genus: "die" },
  // neutru → das
  { word: "scaun", genus: "das" }, { word: "caiet", genus: "das" }, { word: "stilou", genus: "das" },
  { word: "tablou", genus: "das" }, { word: "nor", genus: "das" }, { word: "drum", genus: "das" },
  { word: "sat", genus: "das" }, { word: "orizont", genus: "das" }, { word: "pat", genus: "das" },
];

// ─── ORDINE AVANSATA DATA (advanced sentence ordering — Romanian) ─────────────

const ORDINE_AVANSATA = [
  "Copilul cel mic citește o carte interesantă.",
  "Mama și tata au pregătit o cină delicioasă.",
  "Pisica neagră doarme liniștită pe scaunul vechi.",
  "Elevii harnici au terminat toate temele la timp.",
  "Bunica povestește o poveste frumoasă în fiecare seară.",
  "Câinele mare aleargă vesel prin parcul verde.",
  "Fetița cuminte își face temele pentru mâine.",
  "Ploaia rece cade peste acoperișurile caselor vechi.",
  "Fluturașii colorați zboară deasupra grădinii înflorite.",
  "Băiețelul curajos a traversat strada cu atenție.",
  "Soarele cald strălucește pe cerul senin de vară.",
  "Prietenii mei cei buni vin mâine la mine.",
  "Trenul lung pleacă din gara centrală la ora trei.",
  "Păsările cântătoare se adună în copacul cel mare.",
  "Profesoara noastră ne-a învățat multe lucruri interesante.",
];

// ─── CRATIMA FEHLER DATA (hyphen correction — Romanian) ──────────────────────

const CRATIMA_FEHLER: FehlerItem[] = [
  { words: ["Eu", "mam", "dus", "la", "școală."], errorIndex: 1, hint: "Corect: m-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Ion", "sa", "trezit", "devreme."], errorIndex: 1, hint: "Corect: s-a (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Ei", "sau", "jucat", "în", "parc."], errorIndex: 1, hint: "Corect: s-au (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Noi", "neam", "întors", "acasă."], errorIndex: 1, hint: "Corect: ne-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Ana", "ia", "dat", "un", "cadou."], errorIndex: 1, hint: "Corect: i-a (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Ea", "intro", "zi", "a", "plecat."], errorIndex: 1, hint: "Corect: într-o (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Eu", "nam", "văzut", "filmul."], errorIndex: 1, hint: "Corect: n-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Tu", "vam", "așteptat", "mult."], errorIndex: 1, hint: "Corect: v-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Ea", "lam", "chemat", "pe", "Ion."], errorIndex: 1, hint: "Corect: l-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Maria", "mia", "spus", "adevărul."], errorIndex: 1, hint: "Corect: mi-a (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["El", "nui", "acasă", "acum."], errorIndex: 1, hint: "Corect: nu-i (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Am", "jucat", "dea", "baba-oarba."], errorIndex: 2, hint: "Corect: de-a (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Copilul", "cel", "bun", "sa", "întors."], errorIndex: 3, hint: "Corect: s-a (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Mama", "iam", "trimis", "o", "scrisoare."], errorIndex: 1, hint: "Corect: i-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
  { words: ["Noi", "vam", "scris", "o", "scrisoare."], errorIndex: 1, hint: "Corect: v-am (cu cratimă)", question: "Găsește cuvântul fără cratimă:" },
];

// ─── VISUAL TYPE REGISTRATIONS ──────────────────────────────────────────────

export const ROMANIAN_VISUAL_TYPES: VisualQuestionType[] = [
  // ── Fehler-Finden (find the spelling error) ──
  {
    type: "ro-fehler-finden",
    label: "Găsește greșeala 🔍",
    printLabel: "Găsește greșeala",
    component: FehlerFinden,
    subtopicIds: ["m_bp_c1", "a_i_c1", "cratima_c1", "scrierea_corecta_c1", "litera_mare_c1"],
    generate: (count) => {
      return genFehlerFinden(count).map(item => ({
        type: "ro-fehler-finden",
        question: item.question,
        words: item.words,
        errorIndex: item.errorIndex,
        hint: item.hint,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const isCorrect = parseInt(given) === (q.errorIndex as number);
      return { correct: isCorrect, expected: String(q.errorIndex) };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      words: q.words as string[],
      errorIndex: q.errorIndex as number,
      hint: (q.hint as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
    }),
  },

  // ── Satz-Ordnen (put words in order) ──
  {
    type: "ro-satz-ordnen",
    label: "Ordonează cuvintele ✏️",
    printLabel: "Ordonează cuvintele",
    component: SatzOrdnen,
    subtopicIds: ["ordine_cuvinte_c1", "propozitie_tip_c1"],
    generate: (count) => {
      return genOrdineCuvinte(count).map(item => ({
        type: "ro-satz-ordnen",
        question: item.question,
        shuffled: item.shuffled,
        answer: item.answer,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correct = Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "";
      return { correct: given === correct, expected: correct };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      shuffled: q.shuffled as string[],
      answer: Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
      placeholder: "Atinge cuvintele…",
      allUsedLabel: "Toate cuvintele puse",
      correctLabel: "Corect:",
    }),
  },

  // ── Lücken-Text (fill in the blank) ──
  {
    type: "ro-luecken-text",
    label: "Completează ✏️",
    printLabel: "Completează",
    component: LueckenText,
    subtopicIds: ["vocale_c1", "grupuri_ce_ci_c1", "grupuri_ge_gi_c1", "grupuri_che_chi_c1", "despartire_c1"],
    generate: (count) => {
      return genLueckenText(count).map(item => ({
        type: "ro-luecken-text",
        question: item.question,
        lueckenSentence: item.lueckenSentence,
        lueckenOptions: item.lueckenOptions,
        lueckenCorrect: item.lueckenCorrect,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const isCorrect = parseInt(given) === (q.lueckenCorrect as number);
      return { correct: isCorrect, expected: String(q.lueckenCorrect) };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      sentence: q.lueckenSentence as string,
      options: q.lueckenOptions as string[],
      correct: q.lueckenCorrect as number,
      userAnswer,
      submitted,
      onAnswer,
    }),
  },

  // ── Geschichte Sortieren (order sentences into a story) ──
  {
    type: "ro-geschichte-sortieren",
    label: "Ordonează povestea 📋",
    printLabel: "Ordonează povestea",
    component: GeschichteSortieren,
    subtopicIds: ["propozitie_tip_c1", "ordine_cuvinte_c1", "sinonime_c1", "antonime_c1", "intelegere_c3", "idee_principala_c3"],
    generate: (count) => {
      return genIstorieSortiere(count).map(item => ({
        type: "ro-geschichte-sortieren",
        question: "Ordonează propozițiile:",
        sentences: item.sentences,
        shuffledOrder: item.shuffledOrder,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correctOrder = ((q.sentences as string[]) ?? []).map((_, i) => i).join(",");
      return { correct: given === correctOrder, expected: correctOrder };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      sentences: q.sentences as string[],
      shuffledOrder: q.shuffledOrder as number[],
      userAnswer,
      submitted,
      onAnswer,
      instructionLabel: "Pune propozițiile în ordinea corectă:",
    }),
  },

  // ── Wortfamilien-Baum (word family tree) ──
  {
    type: "ro-wortfamilien-baum",
    label: "Familia cuvintelor 🌳",
    printLabel: "Familia cuvintelor",
    component: WortfamilienBaum,
    subtopicIds: ["familii_c1", "familia_cuvintelor_c3", "sinonime_c3", "antonime_c3"],
    generate: (count) => {
      return genFamilieCuvinte(count).map(item => ({
        type: "ro-wortfamilien-baum",
        question: "Familia cuvintelor:",
        stamm: item.stamm,
        options: item.options,
        correctSet: item.correctIndices,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const givenSet = new Set(given.split(",").map(Number).filter(n => !isNaN(n)));
      const correctSetArr = (q.correctSet as number[]) ?? [];
      const isCorrect = correctSetArr.length === givenSet.size && correctSetArr.every(i => givenSet.has(i));
      return { correct: isCorrect, expected: correctSetArr.join(",") };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      stamm: q.stamm as string,
      options: q.options as string[],
      correctIndices: q.correctSet as number[],
      userAnswer,
      submitted,
      onAnswer,
      rootLabel: "Rădăcină:",
      instructionLabel: "Atinge cuvintele din aceeași familie",
    }),
  },

  // ── Wortarten Sortieren (POS sorting) ──
  {
    type: "ro-wortarten-sortieren",
    label: "Sortează cuvintele 🏷️",
    printLabel: "Sortează cuvintele",
    component: WortartenSortieren,
    subtopicIds: ["singular_plural_c1", "gen_subst_c3", "numar_subst_c3", "conjugare_c3", "acord_adj_c3", "adj_propozitie_c3"],
    generate: (count) => {
      return pickN(SORTARE_CUVINTE_POOL, count).map(item => ({
        type: "ro-wortarten-sortieren",
        question: "Sortează cuvintele:",
        words: item.words,
        wordCategories: item.categories,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correctCats = ((q.wordCategories as string[]) ?? []).join(",");
      return { correct: given === correctCats, expected: correctCats };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      words: q.words as string[],
      categories: q.wordCategories as ('N' | 'V' | 'A')[],
      userAnswer,
      submitted,
      onAnswer,
      labels: { N: "Substantiv", V: "Verb", A: "Adjectiv" },
    }),
  },

  // ── Timpurile verbului (verb tense sorting) ──
  {
    type: "ro-zeitformen-zuordnen",
    label: "Timpuri verbale ⏰",
    printLabel: "Timpuri verbale",
    component: ZeitformenZuordnen,
    subtopicIds: ["timp_verb_c3", "conjugare_c3", "persoana_nr_c3"],
    generate: (count) => {
      return pickN(TIMPURI_POOL, count).map(item => ({
        type: "ro-zeitformen-zuordnen",
        question: "Stabilește timpul verbal:",
        sentence: item.sentence,
        correctZeitform: item.zeitform,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      return { correct: given === (q.correctZeitform as string), expected: q.correctZeitform as string };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      sentence: q.sentence as string,
      correctZeitform: q.correctZeitform as 'pres' | 'praet' | 'perf',
      userAnswer,
      submitted,
      onAnswer,
      labels: { pres: "Prezent", praet: "Trecut", perf: "Viitor" },
    }),
  },

  // ── Genul substantivului (gender sorting) ──
  {
    type: "ro-genus-sortierung",
    label: "Genul substantivului 🔤",
    printLabel: "Genul substantivului",
    component: GenusSortierung,
    subtopicIds: ["gen_subst_c3", "numar_subst_c3", "singular_plural_c1"],
    generate: (count) => {
      return pickN(GEN_SORT_POOL, count).map(item => ({
        type: "ro-genus-sortierung",
        question: "Determină genul substantivului:",
        word: item.word,
        correctGenus: item.genus,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      return { correct: given === (q.correctGenus as string), expected: q.correctGenus as string };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      word: q.word as string,
      correct: q.correctGenus as "der" | "die" | "das",
      userAnswer,
      submitted,
      onAnswer,
      labels: { der: "Masculin", die: "Feminin", das: "Neutru" },
    }),
  },

  // ── Propoziție amestecată avansată (advanced sentence ordering) ──
  {
    type: "ro-satz-ordnen-avansat",
    label: "Propoziție amestecată ✏️",
    printLabel: "Propoziție amestecată",
    component: SatzOrdnen,
    subtopicIds: ["ordine_cuvinte_c1", "propozitie_tip_c1", "intelegere_c3", "idee_principala_c3", "sinonime_c3"],
    generate: (count) => {
      return pickN(ORDINE_AVANSATA, count).map(sentence => {
        const words = sentence.split(" ");
        return {
          type: "ro-satz-ordnen-avansat",
          question: "Pune cuvintele în ordinea corectă:",
          shuffled: shuffleArr(words),
          answer: sentence,
        };
      });
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correct = Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "";
      return { correct: given === correct, expected: correct };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      shuffled: q.shuffled as string[],
      answer: Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
      placeholder: "Atinge cuvintele…",
      allUsedLabel: "Toate cuvintele puse",
      correctLabel: "Corect:",
    }),
  },

  // ── Cratimă corectă (hyphen correction) ──
  {
    type: "ro-cratima-finden",
    label: "Cratimă corectă ✍️",
    printLabel: "Cratimă corectă",
    component: FehlerFinden,
    subtopicIds: ["cratima_c1", "scrierea_corecta_c1", "cratima_c3"],
    generate: (count) => {
      return pickN(CRATIMA_FEHLER, count).map(item => ({
        type: "ro-cratima-finden",
        question: item.question,
        words: item.words,
        errorIndex: item.errorIndex,
        hint: item.hint,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const isCorrect = parseInt(given) === (q.errorIndex as number);
      return { correct: isCorrect, expected: String(q.errorIndex) };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      words: q.words as string[],
      errorIndex: q.errorIndex as number,
      hint: (q.hint as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
    }),
  },
];
