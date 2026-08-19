import { PHYSIK_POOLS } from "./pools/physikPool";
import type { PhysicsLevel, PhysicsSkillGameId } from "./physicsCurriculum";

export type PhysicsSkillLang = "de" | "en" | "hu" | "ro";

export interface PhysicsSkillRound {
  id: string;
  gameId: PhysicsSkillGameId;
  grade: 5 | 6 | 7 | 8;
  level: PhysicsLevel;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  sourceKind: "identify" | "classify" | "process" | "decision" | "memory";
}

type Grade = PhysicsSkillRound["grade"];
type Candidate = Omit<PhysicsSkillRound, "id" | "gameId" | "grade" | "level" | "title" | "instruction">;

const COPY: Record<PhysicsSkillLang, Record<PhysicsSkillGameId, { title: string; instruction: string }>> = {
  de: {
    "kraft-labor": { title: "Physik-Scanner", instruction: "Untersuche den Hinweis und identifiziere den passenden physikalischen Begriff." },
    "schaltkreis-werkstatt": { title: "System-Werkstatt", instruction: "Ordne Größen, Bauteile und Erscheinungen der richtigen Kategorie zu." },
    "optik-laser": { title: "Ablauf-Laser", instruction: "Verfolge den dargestellten Zusammenhang und finde den passenden Baustein." },
    "energie-manager": { title: "Zusammenhang-Netz", instruction: "Verbinde physikalische Begriffe, Ursachen und Wirkungen richtig." },
    "messdaten-analyse": { title: "Muster-Analyse", instruction: "Lies die Hinweise und erkenne das physikalische Muster." },
    "experiment-check": { title: "Experiment-Check", instruction: "Prüfe Versuch, Beobachtung und wissenschaftlich passende Folgerung." },
    "formel-detektiv": { title: "Physik-Detektiv", instruction: "Finde anhand der Hinweise die passende physikalische Lösung." },
  },
  en: {
    "kraft-labor": { title: "Physics Scanner", instruction: "Inspect the clue and identify the matching physics term." },
    "schaltkreis-werkstatt": { title: "Systems Workshop", instruction: "Sort quantities, components and phenomena into the correct category." },
    "optik-laser": { title: "Sequence Laser", instruction: "Trace the relationship and find the matching component." },
    "energie-manager": { title: "Connection Network", instruction: "Connect physics terms, causes and effects correctly." },
    "messdaten-analyse": { title: "Pattern Analysis", instruction: "Read the clues and identify the physical pattern." },
    "experiment-check": { title: "Experiment Check", instruction: "Examine an experiment, its observation and the sound conclusion." },
    "formel-detektiv": { title: "Physics Detective", instruction: "Use the clues to find the matching physical solution." },
  },
  hu: {
    "kraft-labor": { title: "Fizikaszkenner", instruction: "Vizsgáld meg a nyomot, és azonosítsd a hozzá illő fizikai fogalmat." },
    "schaltkreis-werkstatt": { title: "Rendszerműhely", instruction: "Sorold a mennyiségeket, eszközöket és jelenségeket a megfelelő kategóriába." },
    "optik-laser": { title: "Folyamatlézer", instruction: "Kövesd az összefüggést, és találd meg a hozzá illő elemet." },
    "energie-manager": { title: "Összefüggésháló", instruction: "Kapcsold össze helyesen a fizikai fogalmakat, okokat és hatásokat." },
    "messdaten-analyse": { title: "Mintaelemző", instruction: "Olvasd el a nyomokat, és ismerd fel a fizikai mintát." },
    "experiment-check": { title: "Kísérletellenőrző", instruction: "Vizsgáld meg a kísérletet, a megfigyelést és a helyes következtetést." },
    "formel-detektiv": { title: "Fizikadetektív", instruction: "A nyomok alapján találd meg a megfelelő fizikai megoldást." },
  },
  ro: {
    "kraft-labor": { title: "Scaner de fizică", instruction: "Analizează indiciul și identifică termenul fizic potrivit." },
    "schaltkreis-werkstatt": { title: "Atelier de sisteme", instruction: "Clasifică mărimile, componentele și fenomenele în categoria corectă." },
    "optik-laser": { title: "Laser de procese", instruction: "Urmărește relația și găsește componenta potrivită." },
    "energie-manager": { title: "Rețeaua relațiilor", instruction: "Leagă corect termenii, cauzele și efectele fizice." },
    "messdaten-analyse": { title: "Analiza modelelor", instruction: "Citește indiciile și identifică modelul fizic." },
    "experiment-check": { title: "Verificarea experimentului", instruction: "Analizează experimentul, observația și concluzia corectă." },
    "formel-detektiv": { title: "Detectivul fizicii", instruction: "Folosește indiciile pentru a găsi soluția fizică potrivită." },
  },
};

const QUESTION: Record<PhysicsSkillLang, {
  belongs: (item: string, context: string) => string;
  category: (item: string) => string;
  slot: (slot: string, context: string) => string;
  remembered: (context: string) => string;
  explanation: (answer: string, context: string) => string;
}> = {
  de: {
    belongs: (item, context) => `Welcher Eintrag passt zu „${context}“? Hinweis: ${item}`,
    category: (item) => `Zu welcher physikalischen Kategorie gehört „${item}“?`,
    slot: (slot, context) => `Welcher Baustein gehört bei „${context}“ an die Stelle „${slot}“?`,
    remembered: (context) => `Welcher Eintrag gehört zum untersuchten Muster „${context}“?`,
    explanation: (answer, context) => `„${answer}“ ist hier richtig. Entscheidend ist der Zusammenhang mit ${context}.`,
  },
  en: {
    belongs: (item, context) => `Which entry fits “${context}”? Clue: ${item}`,
    category: (item) => `Which physical category does “${item}” belong to?`,
    slot: (slot, context) => `Which component belongs in the “${slot}” position of “${context}”?`,
    remembered: (context) => `Which entry belongs to the examined pattern “${context}”?`,
    explanation: (answer, context) => `“${answer}” is correct here. The key is its connection with ${context}.`,
  },
  hu: {
    belongs: (item, context) => `Melyik elem illik ehhez: „${context}”? Nyom: ${item}`,
    category: (item) => `Melyik fizikai kategóriába tartozik: „${item}”?`,
    slot: (slot, context) => `Melyik elem kerül a(z) „${slot}” helyre ebben: „${context}”?`,
    remembered: (context) => `Melyik elem tartozik a vizsgált „${context}” mintához?`,
    explanation: (answer, context) => `Itt a helyes válasz: „${answer}”. A döntő kapcsolat: ${context}.`,
  },
  ro: {
    belongs: (item, context) => `Ce element se potrivește cu „${context}”? Indiciu: ${item}`,
    category: (item) => `Din ce categorie fizică face parte „${item}”?`,
    slot: (slot, context) => `Ce componentă aparține poziției „${slot}” din „${context}”?`,
    remembered: (context) => `Ce element aparține modelului analizat „${context}”?`,
    explanation: (answer, context) => `„${answer}” este răspunsul corect. Legătura decisivă este cu ${context}.`,
  },
};

const SIGNALS: Record<PhysicsSkillGameId, RegExp> = {
  "kraft-labor": /force|kraft|erő|forț|motion|beweg|mozg|mișc|mass|masse|tömeg|masă|speed|geschwind|sebess|vitez|accel|beschleun|gyorsul|accelera/i,
  "schaltkreis-werkstatt": /electric|elektr|áram|curent|voltage|spannung|feszül|tensiun|resist|widerstand|ellenáll|rezisten|circuit|schalt|áramkör|circuit/i,
  "optik-laser": /light|licht|fény|lumin|optic|optik|reflec|spiegel|tükör|oglind|lens|linse|lencse|lentil|brech|refrac|törés/i,
  "energie-manager": /energy|energie|energia|work|arbeit|munka|lucru|power|leistung|teljesít|putere|heat|wärme|hő|căld|efficien|wirkungsgrad|hatásfok|randament/i,
  "messdaten-analyse": /measure|mess|mér|măsur|diagram|graph|graf|data|daten|adat|date|unit|einheit|egység|unitate|density|dichte|sűrűség|densitate/i,
  "experiment-check": /experiment|versuch|kísérlet|observ|beobacht|megfigyel|evidence|beleg|bizonyít|dovad|hypoth|hypothese|hipotéz|ipotez/i,
  "formel-detektiv": /formula|formel|képlet|formul|unit|einheit|mértékegység|unitate|newton|joule|watt|volt|ampere|pascal|symbol|zeichen|jel|simbol/i,
};

function gradeOf(value: number): Grade {
  return Math.max(5, Math.min(8, Math.floor(value) || 5)) as Grade;
}

function langOf(value: string): PhysicsSkillLang {
  return value === "de" || value === "en" || value === "hu" || value === "ro" ? value : "de";
}

function text(value: unknown, lang: PhysicsSkillLang): string {
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

function candidate(context: string, prompt: string, options: string[], correctAnswer: string, sourceKind: Candidate["sourceKind"], lang: PhysicsSkillLang): Candidate | null {
  const normalized = uniqueOptions(options, correctAnswer);
  if (!context || !prompt || !correctAnswer || normalized.length < 2 || !normalized.includes(correctAnswer)) return null;
  return { context, prompt, options: normalized, correctAnswer, explanation: QUESTION[lang].explanation(correctAnswer, context), sourceKind };
}

function extractCandidates(grade: Grade, lang: PhysicsSkillLang): Candidate[] {
  const pool = PHYSIK_POOLS[grade] as any;
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

function kindPriority(gameId: PhysicsSkillGameId, kind: Candidate["sourceKind"]): number {
  const order: Record<PhysicsSkillGameId, Candidate["sourceKind"][]> = {
    "kraft-labor": ["memory", "identify", "classify", "decision", "process"],
    "schaltkreis-werkstatt": ["classify", "identify", "memory", "decision", "process"],
    "optik-laser": ["process", "decision", "classify", "memory", "identify"],
    "energie-manager": ["process", "classify", "decision", "memory", "identify"],
    "messdaten-analyse": ["identify", "classify", "memory", "decision", "process"],
    "experiment-check": ["decision", "memory", "process", "classify", "identify"],
    "formel-detektiv": ["decision", "classify", "identify", "process", "memory"],
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

function bankFor(gameId: PhysicsSkillGameId, grade: Grade, lang: PhysicsSkillLang): Candidate[] {
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

export function buildPhysicsSkillRounds(gameId: PhysicsSkillGameId, gradeInput: number, langInput: string, level: PhysicsLevel, count: number): PhysicsSkillRound[] {
  const grade = gradeOf(gradeInput);
  const lang = langOf(langInput);
  const bank = bankFor(gameId, grade, lang);
  if (bank.length === 0) return [];
  const start = (level - 1) * 8;
  const reserved = bank.slice(start, start + 8);
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

export function physicsSkillBankSize(gameId: PhysicsSkillGameId, grade: number, lang: PhysicsSkillLang): number {
  return bankFor(gameId, gradeOf(grade), lang).length;
}
