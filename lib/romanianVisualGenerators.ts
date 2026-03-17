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
];
