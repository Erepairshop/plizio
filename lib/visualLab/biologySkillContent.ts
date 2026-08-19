import { BIOLOGIE_POOLS } from "./pools/biologiePool";
import type { BiologyLevel, BiologySkillGameId } from "./biologyCurriculum";

export type BiologySkillLang = "de" | "en" | "hu" | "ro";

export interface BiologySkillRound {
  id: string;
  gameId: BiologySkillGameId;
  grade: 5 | 6 | 7 | 8;
  level: BiologyLevel;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  sourceKind: "identify" | "classify" | "process" | "decision" | "memory";
}

type Grade = BiologySkillRound["grade"];
type Candidate = Omit<BiologySkillRound, "id" | "gameId" | "grade" | "level" | "title" | "instruction">;

const COPY: Record<BiologySkillLang, Record<BiologySkillGameId, { title: string; instruction: string }>> = {
  de: {
    "mikro-scanner": { title: "Mikro-Scanner", instruction: "Untersuche biologische Merkmale und erkenne entscheidende Strukturen." },
    "bio-sortierstation": { title: "Bio-Sortierstation", instruction: "Ordne Organismen, Strukturen und Funktionen fachlich richtig ein." },
    "prozess-puzzle": { title: "Prozess-Puzzle", instruction: "Rekonstruiere Lebensvorgänge und biologische Abläufe Schritt für Schritt." },
    "system-netz": { title: "System-Netz", instruction: "Verbinde Bauteile, Funktionen und Wechselwirkungen lebender Systeme." },
    "lebensraum-detektiv": { title: "Lebensraum-Detektiv", instruction: "Lies biologische Spuren und bestimme Anpassung, Lebensraum und Beziehung." },
    "forschungs-check": { title: "Forschungs-Check", instruction: "Prüfe Beobachtungen und wähle die wissenschaftlich passende Folgerung." },
    "gesundheits-mission": { title: "Gesundheits-Mission", instruction: "Triff begründete Entscheidungen über Körper, Ernährung und Gesundheit." },
  },
  en: {
    "mikro-scanner": { title: "Micro Scanner", instruction: "Inspect biological features and identify decisive structures." },
    "bio-sortierstation": { title: "Bio Sorting Station", instruction: "Classify organisms, structures and functions correctly." },
    "prozess-puzzle": { title: "Process Puzzle", instruction: "Reconstruct life processes and biological sequences step by step." },
    "system-netz": { title: "Systems Network", instruction: "Connect components, functions and interactions in living systems." },
    "lebensraum-detektiv": { title: "Habitat Detective", instruction: "Read biological clues and identify habitats, adaptations and relationships." },
    "forschungs-check": { title: "Research Check", instruction: "Examine observations and choose the scientifically sound conclusion." },
    "gesundheits-mission": { title: "Health Mission", instruction: "Make reasoned decisions about the body, nutrition and health." },
  },
  hu: {
    "mikro-scanner": { title: "Mikroszkenner", instruction: "Vizsgáld meg a biológiai jegyeket, és ismerd fel a döntő szerkezeteket." },
    "bio-sortierstation": { title: "Biorendszerező", instruction: "Sorold be helyesen az élőlényeket, szerkezeteket és funkciókat." },
    "prozess-puzzle": { title: "Folyamatkirakó", instruction: "Építsd fel lépésről lépésre az életfolyamatokat és biológiai sorrendeket." },
    "system-netz": { title: "Rendszerháló", instruction: "Kapcsold össze az élő rendszerek részeit, funkcióit és kölcsönhatásait." },
    "lebensraum-detektiv": { title: "Élőhelydetektív", instruction: "Olvasd a biológiai nyomokat, és ismerd fel az élőhelyet, alkalmazkodást, kapcsolatot." },
    "forschungs-check": { title: "Kutatásellenőrző", instruction: "Vizsgáld meg a megfigyelést, majd válaszd a tudományosan helyes következtetést." },
    "gesundheits-mission": { title: "Egészségküldetés", instruction: "Hozz indokolt döntéseket a testről, táplálkozásról és egészségről." },
  },
  ro: {
    "mikro-scanner": { title: "Micro-scaner", instruction: "Analizează trăsăturile biologice și identifică structurile decisive." },
    "bio-sortierstation": { title: "Stația de clasificare", instruction: "Clasifică corect organismele, structurile și funcțiile." },
    "prozess-puzzle": { title: "Puzzle de procese", instruction: "Reconstruiește pas cu pas procesele vieții și succesiunile biologice." },
    "system-netz": { title: "Rețeaua sistemelor", instruction: "Leagă componentele, funcțiile și interacțiunile sistemelor vii." },
    "lebensraum-detektiv": { title: "Detectivul habitatelor", instruction: "Citește indiciile și identifică habitatul, adaptarea și relația biologică." },
    "forschungs-check": { title: "Verificarea cercetării", instruction: "Analizează observațiile și alege concluzia corectă științific." },
    "gesundheits-mission": { title: "Misiunea sănătății", instruction: "Ia decizii argumentate despre corp, alimentație și sănătate." },
  },
};

const QUESTION: Record<BiologySkillLang, {
  belongs: (item: string, context: string) => string;
  category: (item: string) => string;
  slot: (slot: string, context: string) => string;
  remembered: (context: string) => string;
  explanation: (answer: string, context: string) => string;
}> = {
  de: {
    belongs: (item, context) => `Welcher Eintrag passt zu „${context}“? Hinweis: ${item}`,
    category: (item) => `Zu welcher biologischen Gruppe gehört „${item}“?`,
    slot: (slot, context) => `Welcher Baustein gehört bei „${context}“ an die Stelle „${slot}“?`,
    remembered: (context) => `Welcher Eintrag gehört zum untersuchten Muster „${context}“?`,
    explanation: (answer, context) => `„${answer}“ ist hier richtig. Entscheidend ist der Zusammenhang mit ${context}.`,
  },
  en: {
    belongs: (item, context) => `Which entry fits “${context}”? Clue: ${item}`,
    category: (item) => `Which biological group does “${item}” belong to?`,
    slot: (slot, context) => `Which component belongs in the “${slot}” position of “${context}”?`,
    remembered: (context) => `Which entry belongs to the examined pattern “${context}”?`,
    explanation: (answer, context) => `“${answer}” is correct here. The key is its connection with ${context}.`,
  },
  hu: {
    belongs: (item, context) => `Melyik elem illik ehhez: „${context}”? Nyom: ${item}`,
    category: (item) => `Melyik biológiai csoportba tartozik: „${item}”?`,
    slot: (slot, context) => `Melyik elem kerül a(z) „${slot}” helyre ebben: „${context}”?`,
    remembered: (context) => `Melyik elem tartozik a vizsgált „${context}” mintához?`,
    explanation: (answer, context) => `Itt a helyes válasz: „${answer}”. A döntő kapcsolat: ${context}.`,
  },
  ro: {
    belongs: (item, context) => `Ce element se potrivește cu „${context}”? Indiciu: ${item}`,
    category: (item) => `Din ce grup biologic face parte „${item}”?`,
    slot: (slot, context) => `Ce componentă aparține poziției „${slot}” din „${context}”?`,
    remembered: (context) => `Ce element aparține modelului analizat „${context}”?`,
    explanation: (answer, context) => `„${answer}” este răspunsul corect. Legătura decisivă este cu ${context}.`,
  },
};

const SIGNALS: Record<BiologySkillGameId, RegExp> = {
  "mikro-scanner": /cell|zell|mikro|organell|dna|adn|dns|structure|struktur|szerkezet|structur|tissue|gewebe|szövet|țesut/i,
  "bio-sortierstation": /animal|tier|állat|plant|pflanz|növény|organism|gruppe|group|csoport|grup|class|klass|osztály|clas/i,
  "prozess-puzzle": /process|prozess|folyamat|proces|cycle|zyklus|ciklus|ciclu|chain|kette|lánc|lanț|division|teilung|osztód|divizi/i,
  "system-netz": /system|rendszer|sistem|organ|funktion|function|funkció|funcție|interaction|wechselwirkung|kölcsönhat|interacți/i,
  "lebensraum-detektiv": /habitat|lebensraum|élőhely|forest|wald|erdő|pădur|water|wasser|víz|apă|ecolog|ökol|adapt|anpass|alkalmazkod/i,
  "forschungs-check": /experiment|versuch|kísérlet|observ|beobacht|megfigyel|microscop|mikroskop|evidence|beleg|bizonyít/i,
  "gesundheits-mission": /health|gesund|egészség|sănăt|body|körper|test|corp|nutrition|ernähr|táplál|alimenta|immune|immun|hormon|blood|blut|vér|sânge/i,
};

function gradeOf(value: number): Grade {
  return Math.max(5, Math.min(8, Math.floor(value) || 5)) as Grade;
}

function langOf(value: string): BiologySkillLang {
  return value === "de" || value === "en" || value === "hu" || value === "ro" ? value : "de";
}

function text(value: unknown, lang: BiologySkillLang): string {
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

function candidate(context: string, prompt: string, options: string[], correctAnswer: string, sourceKind: Candidate["sourceKind"], lang: BiologySkillLang): Candidate | null {
  const normalized = uniqueOptions(options, correctAnswer);
  if (!context || !prompt || !correctAnswer || normalized.length < 2 || !normalized.includes(correctAnswer)) return null;
  return { context, prompt, options: normalized, correctAnswer, explanation: QUESTION[lang].explanation(correctAnswer, context), sourceKind };
}

function extractCandidates(grade: Grade, lang: BiologySkillLang): Candidate[] {
  const pool = BIOLOGIE_POOLS[grade] as any;
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

function kindPriority(gameId: BiologySkillGameId, kind: Candidate["sourceKind"]): number {
  const order: Record<BiologySkillGameId, Candidate["sourceKind"][]> = {
    "mikro-scanner": ["memory", "identify", "classify", "decision", "process"],
    "bio-sortierstation": ["classify", "identify", "memory", "decision", "process"],
    "prozess-puzzle": ["process", "decision", "classify", "memory", "identify"],
    "system-netz": ["process", "classify", "decision", "memory", "identify"],
    "lebensraum-detektiv": ["identify", "classify", "memory", "decision", "process"],
    "forschungs-check": ["decision", "memory", "process", "classify", "identify"],
    "gesundheits-mission": ["decision", "classify", "identify", "process", "memory"],
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

function bankFor(gameId: BiologySkillGameId, grade: Grade, lang: BiologySkillLang): Candidate[] {
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

export function buildBiologySkillRounds(gameId: BiologySkillGameId, gradeInput: number, langInput: string, level: BiologyLevel, count: number): BiologySkillRound[] {
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

export function biologySkillBankSize(gameId: BiologySkillGameId, grade: number, lang: BiologySkillLang): number {
  return bankFor(gameId, gradeOf(grade), lang).length;
}
