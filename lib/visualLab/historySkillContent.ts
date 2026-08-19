import { GESCHICHTE_POOLS } from "./pools/geschichtePool";
import type { HistoryLevel, HistorySkillGameId } from "./historyCurriculum";

export type HistorySkillLang = "de" | "en" | "hu" | "ro";

export interface HistorySkillRound {
  id: string;
  gameId: HistorySkillGameId;
  grade: 5 | 6 | 7 | 8;
  level: HistoryLevel;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  sourceKind: "identify" | "classify" | "process" | "decision" | "memory";
}

type Grade = HistorySkillRound["grade"];
type Candidate = Omit<HistorySkillRound, "id" | "gameId" | "grade" | "level" | "title" | "instruction">;

const COPY: Record<HistorySkillLang, Record<HistorySkillGameId, { title: string; instruction: string }>> = {
  de: {
    "chronik-scanner": { title: "Chronik-Scanner", instruction: "Untersuche Hinweise und ordne Personen, Ereignisse oder Begriffe richtig ein." },
    "epochen-sortierer": { title: "Epochen-Sortierer", instruction: "Ordne Ereignisse, Kulturen und Merkmale der passenden Epoche zu." },
    "ursache-wirkung": { title: "Ursache und Wirkung", instruction: "Verbinde historische Auslöser, Entscheidungen und Folgen logisch." },
    "quellen-labor": { title: "Quellen-Labor", instruction: "Prüfe Quelle, Aussage, Perspektive und historischen Zusammenhang." },
    "zeitstrahl-analyse": { title: "Zeitstrahl-Analyse", instruction: "Bringe Ereignisse in eine sinnvolle zeitliche Reihenfolge." },
    "entscheidungs-rat": { title: "Historischer Rat", instruction: "Bewerte eine Lage aus damaliger Sicht und wähle die begründete Entscheidung." },
    "geschichts-detektiv": { title: "Geschichtsdetektiv", instruction: "Bestimme Person, Ort oder Ereignis anhand mehrerer Spuren." },
  },
  en: {
    "chronik-scanner": { title: "Chronicle Scanner", instruction: "Inspect clues and identify the matching person, event or concept." },
    "epochen-sortierer": { title: "Era Sorter", instruction: "Sort events, cultures and features into the correct era." },
    "ursache-wirkung": { title: "Cause and Effect", instruction: "Connect historical triggers, decisions and consequences logically." },
    "quellen-labor": { title: "Source Lab", instruction: "Examine the source, claim, perspective and historical context." },
    "zeitstrahl-analyse": { title: "Timeline Analysis", instruction: "Place events in a meaningful chronological order." },
    "entscheidungs-rat": { title: "History Council", instruction: "Judge a situation from its own time and choose the best-supported decision." },
    "geschichts-detektiv": { title: "History Detective", instruction: "Identify a person, place or event from several clues." },
  },
  hu: {
    "chronik-scanner": { title: "Krónikaszkenner", instruction: "Vizsgáld meg a nyomokat, és azonosítsd a személyt, eseményt vagy fogalmat." },
    "epochen-sortierer": { title: "Korszakrendező", instruction: "Sorold az eseményeket, kultúrákat és jellemzőket a megfelelő korszakba." },
    "ursache-wirkung": { title: "Ok és következmény", instruction: "Kapcsold össze logikusan a történelmi kiváltó okokat, döntéseket és következményeket." },
    "quellen-labor": { title: "Forráslabor", instruction: "Vizsgáld meg a forrást, az állítást, a nézőpontot és a történelmi összefüggést." },
    "zeitstrahl-analyse": { title: "Idővonal-elemzés", instruction: "Helyezd az eseményeket értelmes időrendi sorrendbe." },
    "entscheidungs-rat": { title: "Történelmi tanács", instruction: "Értékeld a helyzetet az adott kor szemszögéből, és válaszd a legjobban indokolható döntést." },
    "geschichts-detektiv": { title: "Történelmi nyomozó", instruction: "Több nyom alapján azonosítsd a személyt, helyet vagy eseményt." },
  },
  ro: {
    "chronik-scanner": { title: "Scaner de cronici", instruction: "Analizează indiciile și identifică persoana, evenimentul sau conceptul potrivit." },
    "epochen-sortierer": { title: "Sortator de epoci", instruction: "Clasifică evenimentele, culturile și trăsăturile în epoca potrivită." },
    "ursache-wirkung": { title: "Cauză și efect", instruction: "Leagă logic factorii declanșatori, deciziile și consecințele istorice." },
    "quellen-labor": { title: "Laborator de surse", instruction: "Analizează sursa, afirmația, perspectiva și contextul istoric." },
    "zeitstrahl-analyse": { title: "Analiza cronologiei", instruction: "Așază evenimentele într-o ordine cronologică logică." },
    "entscheidungs-rat": { title: "Consiliu istoric", instruction: "Evaluează situația din perspectiva epocii și alege decizia cel mai bine argumentată." },
    "geschichts-detektiv": { title: "Detectiv istoric", instruction: "Identifică o persoană, un loc sau un eveniment din mai multe indicii." },
  },
};

const QUESTION: Record<HistorySkillLang, {
  belongs: (item: string, context: string) => string;
  category: (item: string) => string;
  slot: (slot: string, context: string) => string;
  remembered: (context: string) => string;
  explanation: (answer: string, context: string) => string;
}> = {
  de: {
    belongs: (item, context) => `Welcher Eintrag passt zu „${context}“? Hinweis: ${item}`,
    category: (item) => `Zu welcher historischen Gruppe oder Epoche gehört „${item}“?`,
    slot: (slot, context) => `Was gehört bei „${context}“ an die Stelle „${slot}“?`,
    remembered: (context) => `Welcher Eintrag gehört zum historischen Muster „${context}“?`,
    explanation: (answer, context) => `„${answer}“ ist richtig. Entscheidend ist der historische Zusammenhang mit ${context}.`,
  },
  en: {
    belongs: (item, context) => `Which entry fits “${context}”? Clue: ${item}`,
    category: (item) => `Which historical group or era does “${item}” belong to?`,
    slot: (slot, context) => `What belongs in the “${slot}” position of “${context}”?`,
    remembered: (context) => `Which entry belongs to the historical pattern “${context}”?`,
    explanation: (answer, context) => `“${answer}” is correct. The key is its historical connection with ${context}.`,
  },
  hu: {
    belongs: (item, context) => `Melyik elem illik ehhez: „${context}”? Nyom: ${item}`,
    category: (item) => `Melyik történelmi csoportba vagy korszakba tartozik: „${item}”?`,
    slot: (slot, context) => `Mi kerül a(z) „${slot}” helyre ebben: „${context}”?`,
    remembered: (context) => `Melyik elem tartozik ehhez a történelmi mintához: „${context}”?`,
    explanation: (answer, context) => `A helyes válasz: „${answer}”. A döntő történelmi kapcsolat: ${context}.`,
  },
  ro: {
    belongs: (item, context) => `Ce element se potrivește cu „${context}”? Indiciu: ${item}`,
    category: (item) => `Din ce grup sau epocă istorică face parte „${item}”?`,
    slot: (slot, context) => `Ce se potrivește la poziția „${slot}” din „${context}”?`,
    remembered: (context) => `Ce element aparține modelului istoric „${context}”?`,
    explanation: (answer, context) => `„${answer}” este corect. Legătura istorică decisivă este cu ${context}.`,
  },
};

const SIGNALS: Record<HistorySkillGameId, RegExp> = {
  "chronik-scanner": /person|herrsch|king|könig|rege|uralk|vezet|leader|event|ereign|esemény|eveniment|reich|empire|birodal|imperiu/i,
  "epochen-sortierer": /epoche|era|korszak|epoc|antike|ancient|ókor|antic|mittelalter|medieval|középkor|modern|neuzeit|újkor/i,
  "ursache-wirkung": /ursache|cause|ok|cauz|folge|effect|következ|consecin|krieg|war|hábor|război|revolution|forrad|revolu/i,
  "quellen-labor": /quelle|source|forrás|surs|dokument|document|oklevél|mărtur|bericht|report|beszámol|relatare|zeug|witness|tanú/i,
  "zeitstrahl-analyse": /jahr|year|év|anul|jahrhundert|century|század|secol|vor|nach|before|after|előtt|után|chronolog|zeit/i,
  "entscheidungs-rat": /entscheidung|decision|döntés|decizie|herrsch|polit|állam|stat|reform|vertrag|treaty|szerződés|tratat/i,
  "geschichts-detektiv": /wer|who|ki |cine|wo |where|hol |unde|was |what|mi |ce |symbol|zeichen|jel|simbol|kultur|civil/i,
};

function gradeOf(value: number): Grade {
  return Math.max(5, Math.min(8, Math.floor(value) || 5)) as Grade;
}

function langOf(value: string): HistorySkillLang {
  return value === "de" || value === "en" || value === "hu" || value === "ro" ? value : "de";
}

function text(value: unknown, lang: HistorySkillLang): string {
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

function candidate(context: string, prompt: string, options: string[], correctAnswer: string, sourceKind: Candidate["sourceKind"], lang: HistorySkillLang): Candidate | null {
  const normalized = uniqueOptions(options, correctAnswer);
  if (!context || !prompt || !correctAnswer || normalized.length < 2 || !normalized.includes(correctAnswer)) return null;
  return { context, prompt, options: normalized, correctAnswer, explanation: QUESTION[lang].explanation(correctAnswer, context), sourceKind };
}

function extractCandidates(grade: Grade, lang: HistorySkillLang): Candidate[] {
  const pool = GESCHICHTE_POOLS[grade] as any;
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

function kindPriority(gameId: HistorySkillGameId, kind: Candidate["sourceKind"]): number {
  const order: Record<HistorySkillGameId, Candidate["sourceKind"][]> = {
    "chronik-scanner": ["memory", "identify", "classify", "decision", "process"],
    "epochen-sortierer": ["classify", "identify", "memory", "decision", "process"],
    "ursache-wirkung": ["process", "decision", "classify", "memory", "identify"],
    "quellen-labor": ["process", "classify", "decision", "memory", "identify"],
    "zeitstrahl-analyse": ["identify", "classify", "memory", "decision", "process"],
    "entscheidungs-rat": ["decision", "memory", "process", "classify", "identify"],
    "geschichts-detektiv": ["decision", "classify", "identify", "process", "memory"],
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

function bankFor(gameId: HistorySkillGameId, grade: Grade, lang: HistorySkillLang): Candidate[] {
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

export function buildHistorySkillRounds(gameId: HistorySkillGameId, gradeInput: number, langInput: string, level: HistoryLevel, count: number): HistorySkillRound[] {
  const grade = gradeOf(gradeInput);
  const lang = langOf(langInput);
  const bank = bankFor(gameId, grade, lang);
  if (bank.length === 0) return [];
  const levelStart: Record<HistoryLevel, number> = { 1: 0, 2: 4, 3: 9, 4: 15, 5: 22 };
  const levelSize: Record<HistoryLevel, number> = { 1: 4, 2: 5, 3: 6, 4: 7, 5: 8 };
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

export function historySkillBankSize(gameId: HistorySkillGameId, grade: number, lang: HistorySkillLang): number {
  return bankFor(gameId, gradeOf(grade), lang).length;
}
