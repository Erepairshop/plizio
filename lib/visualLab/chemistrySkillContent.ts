import { KEMIA_POOLS } from "./pools/kemiaPool";
import type { ChemistryLevel, ChemistrySkillGameId } from "./chemistryCurriculum";

export type ChemistrySkillLang = "de" | "en" | "hu" | "ro";

export interface ChemistrySkillRound {
  id: string;
  gameId: ChemistrySkillGameId;
  grade: 5 | 6 | 7 | 8;
  level: ChemistryLevel;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  sourceKind: "identify" | "classify" | "process" | "decision" | "memory";
}

type Grade = ChemistrySkillRound["grade"];
type Candidate = Omit<ChemistrySkillRound, "id" | "gameId" | "grade" | "level" | "title" | "instruction">;

const COPY: Record<ChemistrySkillLang, Record<ChemistrySkillGameId, { title: string; instruction: string }>> = {
  de: {
    "stoff-scanner": { title: "Stoff-Scanner", instruction: "Untersuche Eigenschaften und identifiziere den passenden Stoff oder Begriff." },
    "element-sortierer": { title: "Element-Sortierer", instruction: "Ordne Elemente, Stoffe und Teilchen der richtigen chemischen Kategorie zu." },
    "reaktions-puzzle": { title: "Reaktions-Puzzle", instruction: "Verfolge Edukte, Bedingungen und Produkte und ergänze den Reaktionsweg." },
    "bindungs-labor": { title: "Bindungs-Labor", instruction: "Verbinde Teilchen, Bindungsarten und Stoffeigenschaften richtig." },
    "ph-analyse": { title: "pH-Analyse", instruction: "Ordne Säuren, Basen, Indikatoren und Messwerte auf der pH-Skala ein." },
    "sicherheits-check": { title: "Sicherheits-Check", instruction: "Prüfe Laborregel, Versuch, Beobachtung und sichere Schlussfolgerung." },
    "chemie-detektiv": { title: "Chemie-Detektiv", instruction: "Entschlüssele Formel, Teilchenmodell oder Stoff anhand der Hinweise." },
  },
  en: {
    "stoff-scanner": { title: "Matter Scanner", instruction: "Inspect properties and identify the matching substance or chemical term." },
    "element-sortierer": { title: "Element Sorter", instruction: "Sort elements, substances and particles into the correct chemical category." },
    "reaktions-puzzle": { title: "Reaction Puzzle", instruction: "Trace reactants, conditions and products and complete the reaction path." },
    "bindungs-labor": { title: "Bond Lab", instruction: "Connect particles, bond types and material properties correctly." },
    "ph-analyse": { title: "pH Analysis", instruction: "Place acids, bases, indicators and values correctly on the pH scale." },
    "sicherheits-check": { title: "Safety Check", instruction: "Check the lab rule, experiment, observation and safe conclusion." },
    "chemie-detektiv": { title: "Chemistry Detective", instruction: "Decode a formula, particle model or substance from the clues." },
  },
  hu: {
    "stoff-scanner": { title: "Anyagszkenner", instruction: "Vizsgáld meg a tulajdonságokat, és azonosítsd a megfelelő anyagot vagy kémiai fogalmat." },
    "element-sortierer": { title: "Elemválogató", instruction: "Sorold az elemeket, anyagokat és részecskéket a megfelelő kémiai kategóriába." },
    "reaktions-puzzle": { title: "Reakciókirakó", instruction: "Kövesd a kiindulási anyagokat, feltételeket és termékeket, majd egészítsd ki a reakcióutat." },
    "bindungs-labor": { title: "Kötéslabor", instruction: "Kapcsold össze helyesen a részecskéket, kötéstípusokat és anyagtulajdonságokat." },
    "ph-analyse": { title: "pH-elemző", instruction: "Helyezd el helyesen a savakat, bázisokat, indikátorokat és értékeket a pH-skálán." },
    "sicherheits-check": { title: "Biztonsági ellenőrzés", instruction: "Ellenőrizd a laborbiztonságot, a kísérletet, a megfigyelést és a helyes következtetést." },
    "chemie-detektiv": { title: "Kémiadetektív", instruction: "A nyomokból fejtsd meg a képletet, részecskemodellt vagy anyagot." },
  },
  ro: {
    "stoff-scanner": { title: "Scaner de substanțe", instruction: "Analizează proprietățile și identifică substanța sau noțiunea chimică potrivită." },
    "element-sortierer": { title: "Sortator de elemente", instruction: "Clasifică elementele, substanțele și particulele în categoria chimică potrivită." },
    "reaktions-puzzle": { title: "Puzzle de reacții", instruction: "Urmărește reactanții, condițiile și produsele și completează traseul reacției." },
    "bindungs-labor": { title: "Laborator de legături", instruction: "Leagă corect particulele, tipurile de legături și proprietățile substanțelor." },
    "ph-analyse": { title: "Analiza pH", instruction: "Plasează corect acizii, bazele, indicatorii și valorile pe scara pH." },
    "sicherheits-check": { title: "Control de siguranță", instruction: "Verifică regula de laborator, experimentul, observația și concluzia sigură." },
    "chemie-detektiv": { title: "Detectivul chimiei", instruction: "Descifrează formula, modelul particulelor sau substanța din indicii." },
  },
};

const QUESTION: Record<ChemistrySkillLang, {
  belongs: (item: string, context: string) => string;
  category: (item: string) => string;
  slot: (slot: string, context: string) => string;
  remembered: (context: string) => string;
  explanation: (answer: string, context: string) => string;
}> = {
  de: {
    belongs: (item, context) => `Welcher Eintrag passt zu „${context}“? Hinweis: ${item}`,
    category: (item) => `Zu welcher chemischen Kategorie gehört „${item}“?`,
    slot: (slot, context) => `Welcher Baustein gehört bei „${context}“ an die Stelle „${slot}“?`,
    remembered: (context) => `Welcher Eintrag gehört zum untersuchten Muster „${context}“?`,
    explanation: (answer, context) => `„${answer}“ ist hier richtig. Entscheidend ist der Zusammenhang mit ${context}.`,
  },
  en: {
    belongs: (item, context) => `Which entry fits “${context}”? Clue: ${item}`,
    category: (item) => `Which chemical category does “${item}” belong to?`,
    slot: (slot, context) => `Which component belongs in the “${slot}” position of “${context}”?`,
    remembered: (context) => `Which entry belongs to the examined pattern “${context}”?`,
    explanation: (answer, context) => `“${answer}” is correct here. The key is its connection with ${context}.`,
  },
  hu: {
    belongs: (item, context) => `Melyik elem illik ehhez: „${context}”? Nyom: ${item}`,
    category: (item) => `Melyik kémiai kategóriába tartozik: „${item}”?`,
    slot: (slot, context) => `Melyik elem kerül a(z) „${slot}” helyre ebben: „${context}”?`,
    remembered: (context) => `Melyik elem tartozik a vizsgált „${context}” mintához?`,
    explanation: (answer, context) => `Itt a helyes válasz: „${answer}”. A döntő kapcsolat: ${context}.`,
  },
  ro: {
    belongs: (item, context) => `Ce element se potrivește cu „${context}”? Indiciu: ${item}`,
    category: (item) => `Din ce categorie chimică face parte „${item}”?`,
    slot: (slot, context) => `Ce componentă aparține poziției „${slot}” din „${context}”?`,
    remembered: (context) => `Ce element aparține modelului analizat „${context}”?`,
    explanation: (answer, context) => `„${answer}” este răspunsul corect. Legătura decisivă este cu ${context}.`,
  },
};

const SIGNALS: Record<ChemistrySkillGameId, RegExp> = {
  "stoff-scanner": /stoff|substan|matter|anyag|eigenschaft|property|tulajdons|propriet|zustand|state|halmaz|stare|gemisch|mixture|keverék|amestec/i,
  "element-sortierer": /element|atom|ion|metal|metall|fém|nemfém|nonmetal|period|gruppe|group|csoport|grup|teilchen|particle|részecsk|particul/i,
  "reaktions-puzzle": /reaktion|reaction|reacț|reakció|edukt|reactant|kiindul|product|produkt|termék|produs|gleichung|equation|egyenlet|ecua/i,
  "bindungs-labor": /bindung|bond|kötés|legătur|molekül|molecule|molecul|elektron|electron|valenz|valence|vegyérték|valenț|ion/i,
  "ph-analyse": /ph|säure|acid|sav|bază|base|lúg|indikator|indicator|neutral|semleges|alcalin|alkal/i,
  "sicherheits-check": /experiment|versuch|kísérlet|observ|beobacht|megfigyel|evidence|beleg|bizonyít|dovad|hypoth|hypothese|hipotéz|ipotez/i,
  "chemie-detektiv": /formula|formel|képlet|formul|symbol|zeichen|jel|simbol|mol|masse|mass|tömeg|masă|gleichung|equation|egyenlet|ecua/i,
};

function gradeOf(value: number): Grade {
  return Math.max(5, Math.min(8, Math.floor(value) || 5)) as Grade;
}

function langOf(value: string): ChemistrySkillLang {
  return value === "de" || value === "en" || value === "hu" || value === "ro" ? value : "de";
}

function text(value: unknown, lang: ChemistrySkillLang): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    const localized = value as Record<string, unknown>;
    const candidate = localized[lang] ?? localized.de ?? localized.en;
    return typeof candidate === "string" ? candidate : "";
  }
  return "";
}

function uniqueOptions(values: string[], correct: string): string[] {
  const unique = [...new Set(values.map((value) => value.trim()).filter(Boolean))];
  if (!unique.includes(correct)) unique.unshift(correct);
  return unique.slice(0, 4);
}

function candidate(context: string, prompt: string, options: string[], correctAnswer: string, sourceKind: Candidate["sourceKind"], lang: ChemistrySkillLang): Candidate | null {
  const normalized = uniqueOptions(options, correctAnswer);
  if (!context || !prompt || !correctAnswer || normalized.length < 2 || !normalized.includes(correctAnswer)) return null;
  return { context, prompt, options: normalized, correctAnswer, explanation: QUESTION[lang].explanation(correctAnswer, context), sourceKind };
}

function extractCandidates(grade: Grade, lang: ChemistrySkillLang): Candidate[] {
  const pool = KEMIA_POOLS[grade] as any;
  const result: Candidate[] = [];
  const add = (value: Candidate | null) => { if (value) result.push(value); };

  for (const round of pool.meteorCatch ?? []) {
    const context = text(round.title, lang);
    const wrong = (round.wrongItems ?? []).map((item: any) => text(item.label, lang));
    for (const item of round.correctItems ?? []) {
      const answer = text(item.label, lang);
      add(candidate(context, QUESTION[lang].belongs(answer, context), [answer, ...wrong], answer, "identify", lang));
    }
  }

  for (const round of pool.orbitSort ?? []) {
    const context = text(round.title, lang);
    const bucketById = new Map<string, string>((round.buckets ?? []).map((bucket: any) => [String(bucket.id), text(bucket.label, lang)]));
    const options = [...bucketById.values()];
    for (const item of round.items ?? []) {
      const label = text(item.label, lang);
      const answer = bucketById.get(item.bucketId) ?? "";
      add(candidate(context, QUESTION[lang].category(label), options, answer, "classify", lang));
    }
  }

  for (const round of pool.signalRunner ?? []) {
    for (const scene of round.scenes ?? []) {
      const context = text(scene.title, lang) || text(round.title, lang);
      const choices = scene.choices ?? [];
      const correct = choices.find((choice: any) => choice.id === scene.correctChoiceId);
      const answer = text(correct?.label, lang);
      const value = candidate(context, text(scene.prompt, lang), choices.map((choice: any) => text(choice.label, lang)), answer, "decision", lang);
      if (value) {
        value.explanation = text(scene.successFeedback, lang) || value.explanation;
        add(value);
      }
    }
  }

  for (const round of pool.constellationBuilder ?? []) {
    const context = text(round.title, lang);
    const parts = round.parts ?? [];
    const partById = new Map<string, string>(parts.map((part: any) => [String(part.id), text(part.label, lang)]));
    const options = [...partById.values()];
    (round.slots ?? []).forEach((slot: any, index: number) => {
      const answer = partById.get(round.solution?.[index]) ?? "";
      add(candidate(context, QUESTION[lang].slot(text(slot.label, lang), context), options, answer, "process", lang));
    });
  }

  for (const round of pool.memoryRadar ?? []) {
    const context = text(round.title, lang);
    const decoys = (round.decoyItems ?? []).map((item: any) => text(item.label, lang));
    for (const item of round.targetItems ?? []) {
      const answer = text(item.label, lang);
      add(candidate(context, QUESTION[lang].remembered(context), [answer, ...decoys], answer, "memory", lang));
    }
  }

  const unique = new Map<string, Candidate>();
  for (const item of result) {
    const key = `${item.prompt.toLocaleLowerCase(lang)}|${item.correctAnswer.toLocaleLowerCase(lang)}`;
    if (!unique.has(key)) unique.set(key, item);
  }
  return [...unique.values()];
}

function kindPriority(gameId: ChemistrySkillGameId, kind: Candidate["sourceKind"]): number {
  const order: Record<ChemistrySkillGameId, Candidate["sourceKind"][]> = {
    "stoff-scanner": ["memory", "identify", "classify", "decision", "process"],
    "element-sortierer": ["classify", "identify", "memory", "decision", "process"],
    "reaktions-puzzle": ["process", "decision", "classify", "memory", "identify"],
    "bindungs-labor": ["process", "classify", "decision", "memory", "identify"],
    "ph-analyse": ["identify", "classify", "memory", "decision", "process"],
    "sicherheits-check": ["decision", "memory", "process", "classify", "identify"],
    "chemie-detektiv": ["decision", "classify", "identify", "process", "memory"],
  };
  return order[gameId].indexOf(kind);
}

function hash(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function bankFor(gameId: ChemistrySkillGameId, grade: Grade, lang: ChemistrySkillLang): Candidate[] {
  const all = extractCandidates(grade, lang);
  const signal = SIGNALS[gameId];
  return all.sort((left, right) => {
    const leftMatch = signal.test(`${left.context} ${left.prompt}`) ? 0 : 1;
    const rightMatch = signal.test(`${right.context} ${right.prompt}`) ? 0 : 1;
    return leftMatch - rightMatch
      || kindPriority(gameId, left.sourceKind) - kindPriority(gameId, right.sourceKind)
      || (left.prompt.length + left.options.join("").length) - (right.prompt.length + right.options.join("").length)
      || left.prompt.localeCompare(right.prompt, lang);
  });
}

export function buildChemistrySkillRounds(gameId: ChemistrySkillGameId, gradeInput: number, langInput: string, level: ChemistryLevel, count: number): ChemistrySkillRound[] {
  const grade = gradeOf(gradeInput);
  const lang = langOf(langInput);
  const bank = bankFor(gameId, grade, lang);
  if (bank.length === 0) return [];
  const levelStart: Record<ChemistryLevel, number> = { 1: 0, 2: 4, 3: 9, 4: 15, 5: 22 };
  const levelSize: Record<ChemistryLevel, number> = { 1: 4, 2: 5, 3: 6, 4: 7, 5: 8 };
  const start = levelStart[level];
  const reserved = bank.slice(start, start + levelSize[level]);
  const levelPool = reserved.length >= count ? reserved : bank;
  const offset = hash(`${gameId}:${grade}:${lang}:${level}`) % levelPool.length;
  const ordered = [...levelPool.slice(offset), ...levelPool.slice(0, offset)];
  const copy = COPY[lang][gameId];
  return Array.from({ length: Math.max(1, count) }, (_, index) => {
    const source = ordered[index % ordered.length];
    return {
      ...source,
      id: `${gameId}-g${grade}-l${level}-${hash(`${source.prompt}:${source.correctAnswer}`).toString(36)}`,
      gameId,
      grade,
      level,
      title: copy.title,
      instruction: copy.instruction,
    };
  });
}

export function chemistrySkillBankSize(gameId: ChemistrySkillGameId, grade: number, lang: ChemistrySkillLang): number {
  return bankFor(gameId, gradeOf(grade), lang).length;
}
