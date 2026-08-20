import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";
import { selectDiverseAIQuestions } from "./aiQuestionDiversity";
import AI_K5_CONTENT from "./aiCurriculum5_data.json";

type MultiLang = { de: string; hu: string; ro: string; en: string };
type MultiLangOptions = { de: string[]; hu: string[]; ro: string[]; en: string[] };

interface RawQuestion {
  type: "mcq" | "typing";
  question: MultiLang;
  options?: MultiLangOptions;
  answer?: MultiLang | string;
  correct?: number;
}

const AI_DATA_INLINE: Record<string, RawQuestion[]> = {
  "ai_k5_t1_1_inline": [ // Mi az AI? (inline fallback, megtartva)
    { type: "mcq", question: { de: "Was bedeutet KI?", hu: "Mit jelent a MI?", ro: "Ce înseamnă IA?", en: "What does AI stand for?" }, options: { de: ["Künstliche Intelligenz", "Kleine Information", "Kluge Instrumente", "Keine Idee"], hu: ["Mesterséges Intelligencia", "Majdnem Igaz", "Minden Ismert", "Műszaki Információ"], ro: ["Inteligență Artificială", "Informație Automatizată", "Idee Avansată", "Instrument Activ"], en: ["Artificial Intelligence", "All Information", "Advanced Idea", "Automated Instrument"] }, correct: 0 },
    { type: "mcq", question: { de: "Ist ein Taschenrechner KI?", hu: "Az MI a számológép?", ro: "Este calculatorul IA?", en: "Is a calculator AI?" }, options: { de: ["Nein", "Ja", "Vielleicht", "Nur die teuren"], hu: ["Nem", "Igen", "Talán", "Csak a drágák"], ro: ["Nu", "Da", "Poate", "Doar cele scumpe"], en: ["No", "Yes", "Maybe", "Only expensive ones"] }, correct: 0 },
    { type: "mcq", question: { de: "Was nutzt KI zum Lernen?", hu: "Mit használ az MI a tanuláshoz?", ro: "Ce folosește IA pentru a învăța?", en: "What does AI use to learn?" }, options: { de: ["Daten", "Essen", "Bücher", "Schlaf"], hu: ["Adatokat", "Ételt", "Könyveket", "Alvást"], ro: ["Date", "Mâncare", "Cărți", "Somn"], en: ["Data", "Food", "Books", "Sleep"] }, correct: 0 },
    { type: "mcq", question: { de: "Kann KI denken wie ein Mensch?", hu: "Gondolkodik az MI mint az ember?", ro: "Gândește IA ca un om?", en: "Does AI think like a human?" }, options: { de: ["Nein", "Ja", "Bald", "Nur im Film"], hu: ["Nem", "Igen", "Hamarosan", "Csak a filmekben"], ro: ["Nu", "Da", "În curând", "Doar în filme"], en: ["No", "Yes", "Soon", "Only in movies"] }, correct: 0 },
    { type: "mcq", question: { de: "Wer programmiert KI?", hu: "Ki programozza az MI-t?", ro: "Cine programează IA?", en: "Who programs AI?" }, options: { de: ["Menschen", "Roboter", "Tiere", "Geister"], hu: ["Emberek", "Robotok", "Állatok", "Szellemek"], ro: ["Oamenii", "Roboții", "Animalele", "Spiritele"], en: ["Humans", "Robots", "Animals", "Ghosts"] }, correct: 0 },
    { type: "typing", question: { de: "Kurzform für Künstliche Intelligenz?", hu: "Az MI rövidítése?", ro: "Prescurtarea IA?", en: "Short form for AI?" }, answer: { de: "KI", hu: "MI", ro: "IA", en: "AI" } },
    { type: "typing", question: { de: "Wie heißt die KI von Amazon?", hu: "Hogy hívják az Amazon MI-jét?", ro: "Cum se numește IA Amazon?", en: "Amazon's AI name?" }, answer: "Alexa" },
    { type: "typing", question: { de: "Was braucht KI?", hu: "Mire van szüksége az MI-nek?", ro: "De ce are nevoie IA?", en: "What does AI need?" }, answer: { de: "Daten", hu: "Adatok", ro: "Date", en: "Data" } }
  ],
  "ai_k5_t1_2_inline": [ // Robotok (inline fallback)
    { type: "mcq", question: { de: "Was ist ein Roboter?", hu: "Mi az a robot?", ro: "Ce este un robot?", en: "What is a robot?" }, options: { de: ["Maschine", "Tier", "Pflanze", "Geist"], hu: ["Gép", "Állat", "Növény", "Szellem"], ro: ["Mașină", "Animal", "Plantă", "Spirit"], en: ["Machine", "Animal", "Plant", "Ghost"] }, correct: 0 },
    { type: "mcq", question: { de: "Wo arbeiten Roboter?", hu: "Hol dolgoznak robotok?", ro: "Unde lucrează roboții?", en: "Where do robots work?" }, options: { de: ["Fabrik", "Wald", "Meer", "Bett"], hu: ["Gyárban", "Erdőben", "Tengeren", "Ágyban"], ro: ["Fabrică", "Pădure", "Mare", "Pat"], en: ["Factory", "Forest", "Sea", "Bed"] }, correct: 0 },
    { type: "mcq", question: { de: "Was sieht ein Roboter?", hu: "Mivel lát a robot?", ro: "Cu ce vede robotul?", en: "What does a robot use to see?" }, options: { de: ["Kamera", "Brille", "Auge", "Licht"], hu: ["Kamerával", "Szemüveggel", "Szemmel", "Fénnyel"], ro: ["Cameră", "Ochelari", "Ochi", "Lumină"], en: ["Camera", "Glasses", "Eye", "Light"] }, correct: 0 },
    { type: "typing", question: { de: "Wie heißt ein Mars-Fahrzeug?", hu: "Hogy hívják a Mars-járót?", ro: "Cum se numește vehiculul de pe Marte?", en: "What is a Mars vehicle called?" }, answer: "Rover" },
    { type: "typing", question: { de: "Woraus besteht ein Robot?", hu: "Miből készül a robot?", ro: "Din ce este făcut robotul?", en: "What is a robot made of?" }, answer: { de: "Metall", hu: "Fém", ro: "Metal", en: "Metal" } }
  ]
};

const AI_DATA: Record<string, RawQuestion[]> = AI_K5_CONTENT as Record<string, RawQuestion[]>;

// Generic fallback data generator to ensure 25 MCQ + 10 Typing per subtopic
function getRawQuestions(subId: string): RawQuestion[] {
  const data = AI_DATA[subId] || AI_DATA["ai_k5_t1_1"] || AI_DATA_INLINE["ai_k5_t1_1_inline"];
  const mcqs = data.filter(q => q.type === "mcq");
  const typings = data.filter(q => q.type === "typing");
  
  const result: RawQuestion[] = [];
  for (let i = 0; i < 25; i++) result.push(mcqs[i % mcqs.length]);
  for (let i = 0; i < 10; i++) result.push(typings[i % typings.length]);
  return result;
}

export const AI_K5_CURRICULUM: KemiaTheme[] = [
  {
    id: "ai_k5_th1",
    name: "AI Alapok",
    icon: "🤖",
    color: "#3B82F6",
    subtopics: [
      { id: "ai_k5_t1_1", name: { de: "Was ist KI?", hu: "Mi az AI?", ro: "Ce este IA?", en: "What is AI?" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t1_2", name: { de: "Roboter", hu: "Robotok", ro: "Roboți", en: "Robots" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t1_3", name: { de: "Chatbots", hu: "Chatbotok", ro: "Chatboți", en: "Chatbots" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t1_4", name: { de: "Bild-KI", hu: "Kép-MI", ro: "IA de imagini", en: "Image AI" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t1_5", name: { de: "Sprach-KI", hu: "Hang-MI", ro: "IA vocală", en: "Voice AI" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t1_6", name: { de: "Algorithmen", hu: "Algoritmusok", ro: "Algoritmi", en: "Algorithms" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k5_th2",
    name: "AI a világban",
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "ai_k5_t2_1", name: { de: "Autos", hu: "Önvezető autók", ro: "Mașini autonome", en: "Self-driving cars" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t2_2", name: { de: "Smart Home", hu: "Okosotthon", ro: "Casă inteligentă", en: "Smart Home" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t2_3", name: { de: "Vorschläge", hu: "Ajánlórendszerek", ro: "Sisteme de recomandare", en: "Recommender systems" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t2_4", name: { de: "Übersetzer", hu: "Fordítóprogramok", ro: "Traducătoare", en: "Translation tools" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t2_5", name: { de: "Suche", hu: "Keresőmotorok", ro: "Motoare de căutare", en: "Search engines" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t2_6", name: { de: "Gesichter", hu: "Arcfelismerés", ro: "Recunoaștere facială", en: "Facial recognition" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k5_th3",
    name: "Biztonság",
    icon: "🛡️",
    color: "#F59E0B",
    subtopics: [
      { id: "ai_k5_t3_1", name: { de: "AI Ethik", hu: "MI etika", ro: "Etica IA", en: "AI Ethics" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t3_2", name: { de: "Datenschutz", hu: "Adatvédelem", ro: "Protecția datelor", en: "Data Privacy" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t3_3", name: { de: "Sicherheit", hu: "Biztonság", ro: "Siguranță", en: "AI Security" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t3_4", name: { de: "Fehler", hu: "MI hibák", ro: "Erori IA", en: "AI Mistakes" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t3_5", name: { de: "Deepfakes", hu: "Deepfake", ro: "Deepfake", en: "Deepfakes" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t3_6", name: { de: "Umwelt", hu: "MI és környezet", ro: "IA și mediul", en: "AI and Environment" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k5_th4",
    name: "AI és Jövő",
    icon: "🚀",
    color: "#8B5CF6",
    subtopics: [
      { id: "ai_k5_t4_1", name: { de: "Schule", hu: "MI az iskolában", ro: "IA la școală", en: "AI in school" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t4_2", name: { de: "Spiele", hu: "MI a játékokban", ro: "IA în jocuri", en: "AI in games" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t4_3", name: { de: "Kunst", hu: "MI művészet", ro: "Artă IA", en: "AI Art" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t4_4", name: { de: "Berufe", hu: "MI szakmák", ro: "Meserii IA", en: "AI Jobs" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t4_5", name: { de: "Zukunft", hu: "Jövő az MI-vel", ro: "Viitorul cu IA", en: "Future with AI" }, questions: [], hasGenerator: false },
      { id: "ai_k5_t4_6", name: { de: "Szuper", hu: "Szuperintelligencia", ro: "Superinteligență", en: "Superintelligence" }, questions: [], hasGenerator: false }
    ]
  }
];

// Initialize questions for all subtopics
AI_K5_CURRICULUM.forEach(theme => {
  theme.subtopics.forEach(sub => {
    const raw = getRawQuestions(sub.id);
    sub.questions = raw.map((q) => {
      if (q.type === "mcq") {
        return {
          type: "mcq",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          options: q.options?.hu || [],
          correct: q.correct || 0,
          _lang: {
            de: { q: q.question.de, opts: q.options?.de },
            hu: { q: q.question.hu, opts: q.options?.hu },
            ro: { q: q.question.ro, opts: q.options?.ro },
            en: { q: q.question.en, opts: q.options?.en }
          }
        } as any;
      } else {
        return {
          type: "typing",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          answer: q.answer && typeof q.answer === 'object' ? q.answer.hu : (q.answer || ""),
          _lang: {
            de: { q: q.question.de, ans: q.answer && typeof q.answer === 'object' ? q.answer.de : q.answer },
            hu: { q: q.question.hu, ans: q.answer && typeof q.answer === 'object' ? q.answer.hu : q.answer },
            ro: { q: q.question.ro, ans: q.answer && typeof q.answer === 'object' ? q.answer.ro : q.answer },
            en: { q: q.question.en, ans: q.answer && typeof q.answer === 'object' ? q.answer.en : q.answer }
          }
        } as any;
      }
    });
  });
});

export function getAIK5Questions(subtopicIds: string[], count = 10, lang = "hu"): KemiaQuestion[] {
  let pool: any[] = [];
  AI_K5_CURRICULUM.forEach(theme => {
    theme.subtopics.forEach(sub => {
      if (subtopicIds.includes(sub.id)) {
        sub.questions.forEach((q: any) => {
          const localized = { ...q };
          const lData = q._lang?.[lang] || q._lang?.["en"] || q._lang?.["hu"];
          if (lData) {
            localized.question = lData.q;
            if (q.type === "mcq") localized.options = lData.opts;
            else localized.answer = lData.ans;
          }
          pool.push(localized);
        });
      }
    });
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return selectDiverseAIQuestions(pool, count);
}
