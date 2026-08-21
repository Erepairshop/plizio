import type { CurriculumQuestion } from "./curriculumTypes";
import { KEMIA_QUESTION_TRANSLATIONS } from "./kemiaQuestionTranslations.generated";

export type KemiaQuestionLang = "de" | "hu" | "ro" | "en";

const REACTION_RATE_PREFIX = "Reaktionsgeschwindigkeit: ";
const EXTRA_TRANSLATIONS: Record<Exclude<KemiaQuestionLang, "de">, Record<string, string>> = {
  hu: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "A nagyobb koncentráció felgyorsíthatja a reakciót.",
  },
  ro: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "O concentrație mai mare poate accelera o reacție.",
  },
  en: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "A higher concentration can speed up a reaction.",
  },
};

const REACTION_RATE_TAILS: Record<Exclude<KemiaQuestionLang, "de">, Record<string, string>> = {
  hu: {
    "Schreibe den Fachbegriff zu dieser Beschreibung: ": "Írd le a szakkifejezést ehhez a leíráshoz: ",
    "Schreibe den passenden Begriff zu diesem Beispiel: ": "Írd le az ehhez a példához illő fogalmat: ",
    "Welche Bezeichnung passt zu dieser Beschreibung? ": "Melyik fogalom illik ehhez a leíráshoz? ",
    "Welcher Begriff passt zu diesem Beispiel? ": "Melyik fogalom illik ehhez a példához? ",
    "Welcher Begriff passt? ": "Melyik fogalom illik ide? ",
    "Wie nennt man das hier? ": "Hogyan nevezzük ezt? ",
    "Womit hat dieser Stoffbegriff zu tun? ": "Mihez kapcsolódik ez a kémiai fogalom? ",
  },
  ro: {
    "Schreibe den Fachbegriff zu dieser Beschreibung: ": "Scrie termenul de specialitate pentru această descriere: ",
    "Schreibe den passenden Begriff zu diesem Beispiel: ": "Scrie termenul potrivit pentru acest exemplu: ",
    "Welche Bezeichnung passt zu dieser Beschreibung? ": "Ce termen se potrivește acestei descrieri? ",
    "Welcher Begriff passt zu diesem Beispiel? ": "Ce termen se potrivește acestui exemplu? ",
    "Welcher Begriff passt? ": "Ce termen se potrivește? ",
    "Wie nennt man das hier? ": "Cum se numește acest lucru? ",
    "Womit hat dieser Stoffbegriff zu tun? ": "La ce se referă acest termen chimic? ",
  },
  en: {
    "Schreibe den Fachbegriff zu dieser Beschreibung: ": "Write the technical term for this description: ",
    "Schreibe den passenden Begriff zu diesem Beispiel: ": "Write the matching term for this example: ",
    "Welche Bezeichnung passt zu dieser Beschreibung? ": "Which term fits this description? ",
    "Welcher Begriff passt zu diesem Beispiel? ": "Which term fits this example? ",
    "Welcher Begriff passt? ": "Which term fits? ",
    "Wie nennt man das hier? ": "What is this called? ",
    "Womit hat dieser Stoffbegriff zu tun? ": "What does this chemistry term relate to? ",
  },
};

const REACTION_RATE_CONTENT: Record<Exclude<KemiaQuestionLang, "de">, Record<string, string>> = {
  hu: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "A nagyobb koncentráció felgyorsíthatja a reakciót.",
    "Beschleunigt Reaktionen ohne verbraucht zu werden.": "Felgyorsítja a reakciókat anélkül, hogy elfogyna.",
    "Brausetabletten reagieren schneller in warmem Wasser.": "A pezsgőtabletták meleg vízben gyorsabban reagálnak.",
    "Das System bleibt dann stabil.": "A rendszer ilyenkor stabil marad.",
    "Enzyme sind Katalysatoren.": "Az enzimek katalizátorok.",
    "Hin- und Rückreaktion laufen gleich schnell.": "Az oda- és visszaalakulás azonos sebességgel zajlik.",
    "Hohe Temperatur macht Teilchen beweglicher.": "A magas hőmérséklet mozgékonyabbá teszi a részecskéket.",
    "Mehr Oberfläche kann Reaktionen beschleunigen.": "A nagyobb felület felgyorsíthatja a reakciókat.",
    "Mehr Teilchen in gleicher Menge.": "Több részecske ugyanakkora térfogatban.",
    "Pulver reagiert oft schneller als ein Brocken.": "A por gyakran gyorsabban reagál, mint egy tömb.",
    "Starke Säure reagiert oft schneller.": "Az erős sav gyakran gyorsabban reagál.",
    "Wärme beschleunigt viele Reaktionen.": "A hő sok reakciót felgyorsít.",
    "Wie schnell eine Reaktion abläuft.": "Azt mutatja meg, milyen gyorsan zajlik le egy reakció.",
  },
  ro: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "O concentrație mai mare poate accelera o reacție.",
    "Beschleunigt Reaktionen ohne verbraucht zu werden.": "Accelerează reacțiile fără să fie consumat.",
    "Brausetabletten reagieren schneller in warmem Wasser.": "Tabletele efervescente reacționează mai repede în apă caldă.",
    "Das System bleibt dann stabil.": "Sistemul rămâne atunci stabil.",
    "Enzyme sind Katalysatoren.": "Enzimele sunt catalizatori.",
    "Hin- und Rückreaktion laufen gleich schnell.": "Reacțiile directă și inversă au aceeași viteză.",
    "Hohe Temperatur macht Teilchen beweglicher.": "Temperatura ridicată face particulele mai mobile.",
    "Mehr Oberfläche kann Reaktionen beschleunigen.": "O suprafață mai mare poate accelera reacțiile.",
    "Mehr Teilchen in gleicher Menge.": "Mai multe particule în aceeași cantitate.",
    "Pulver reagiert oft schneller als ein Brocken.": "Pulberea reacționează adesea mai repede decât o bucată compactă.",
    "Starke Säure reagiert oft schneller.": "Un acid puternic reacționează adesea mai repede.",
    "Wärme beschleunigt viele Reaktionen.": "Căldura accelerează multe reacții.",
    "Wie schnell eine Reaktion abläuft.": "Cât de repede are loc o reacție.",
  },
  en: {
    "Eine höhere Konzentration kann eine Reaktion beschleunigen.": "A higher concentration can speed up a reaction.",
    "Beschleunigt Reaktionen ohne verbraucht zu werden.": "Speeds up reactions without being consumed.",
    "Brausetabletten reagieren schneller in warmem Wasser.": "Effervescent tablets react faster in warm water.",
    "Das System bleibt dann stabil.": "The system then remains stable.",
    "Enzyme sind Katalysatoren.": "Enzymes are catalysts.",
    "Hin- und Rückreaktion laufen gleich schnell.": "The forward and reverse reactions proceed at the same rate.",
    "Hohe Temperatur macht Teilchen beweglicher.": "A high temperature makes particles move more freely.",
    "Mehr Oberfläche kann Reaktionen beschleunigen.": "A larger surface area can speed up reactions.",
    "Mehr Teilchen in gleicher Menge.": "More particles in the same amount of space.",
    "Pulver reagiert oft schneller als ein Brocken.": "Powder often reacts faster than a solid chunk.",
    "Starke Säure reagiert oft schneller.": "A strong acid often reacts faster.",
    "Wärme beschleunigt viele Reaktionen.": "Heat speeds up many reactions.",
    "Wie schnell eine Reaktion abläuft.": "How quickly a reaction proceeds.",
  },
};

function repairedReactionRateTranslation(source: string, lang: KemiaQuestionLang): string | undefined {
  if (lang === "de" || !source.startsWith(REACTION_RATE_PREFIX)) return undefined;
  const tail = source.slice(REACTION_RATE_PREFIX.length);
  for (const [instruction, translatedInstruction] of Object.entries(REACTION_RATE_TAILS[lang])) {
    if (!tail.startsWith(instruction)) continue;
    const content = REACTION_RATE_CONTENT[lang][tail.slice(instruction.length)];
    if (content) {
      const topic = lang === "hu" ? "Reakciósebesség" : lang === "ro" ? "Viteza de reacție" : "Reaction rate";
      return `${topic}: ${translatedInstruction}${content}`;
    }
  }
  return undefined;
}

export function kemiaQuestionLang(lang?: string): KemiaQuestionLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

function cleanHungarianKemiaText(value: string): string {
  return value
    .replaceAll("képletmassesége", "képlettömege")
    .replaceAll("Elektóda", "Elektróda")
    .replaceAll("ez a anyagfogalom", "ez az anyagfogalom");
}

export function translateKemiaText(source: string, lang?: string): string {
  const normalized = kemiaQuestionLang(lang);
  if (normalized === "de") return source;
  const extra = EXTRA_TRANSLATIONS[normalized][source];
  if (extra) return extra;
  const repaired = repairedReactionRateTranslation(source, normalized);
  if (repaired) return repaired;
  const translated = KEMIA_QUESTION_TRANSLATIONS[normalized][
    source as keyof (typeof KEMIA_QUESTION_TRANSLATIONS)[typeof normalized]
  ] ?? source;
  return normalized === "hu" ? cleanHungarianKemiaText(translated) : translated;
}

export function hasKemiaTranslation(source: string, lang?: string): boolean {
  const normalized = kemiaQuestionLang(lang);
  return normalized === "de"
    || repairedReactionRateTranslation(source, normalized) !== undefined
    || Object.prototype.hasOwnProperty.call(EXTRA_TRANSLATIONS[normalized], source)
    || Object.prototype.hasOwnProperty.call(KEMIA_QUESTION_TRANSLATIONS[normalized], source);
}

export function localizeKemiaQuestion(
  question: CurriculumQuestion,
  lang?: string,
): CurriculumQuestion {
  const localizedQuestion = translateKemiaText(question.question, lang);
  if (question.type === "mcq") {
    return {
      ...question,
      question: localizedQuestion,
      options: question.options.map((option) => translateKemiaText(option, lang)),
    };
  }
  return {
    ...question,
    question: localizedQuestion,
    answer: Array.isArray(question.answer)
      ? question.answer.map((answer) => translateKemiaText(answer, lang))
      : translateKemiaText(question.answer, lang),
  };
}

export function localizeKemiaQuestions(
  questions: CurriculumQuestion[],
  lang?: string,
): CurriculumQuestion[] {
  if (kemiaQuestionLang(lang) === "de") return questions;
  return questions.map((question) => localizeKemiaQuestion(question, lang));
}
