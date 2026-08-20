import { HISTORY_DIAGRAM_FAMILY, HISTORY_DIAGRAM_IDS, historyDiagramSvgMarkup } from "../components/geschichte-visual/HistoryTestDiagrams";
import { getCurriculumForCountry, getGeschichteQuestions } from "../lib/geschichteCurriculum";
import { GESCHICHTE_MISSIONS, localizedGeschichteMissions } from "../lib/geschichteVisualContent";
import { GESCHICHTE_VISUAL_TRIGGERS, getLocalizedGeschichteVisualTypes } from "../lib/geschichteVisualGenerators";

const languages = ["de", "hu", "ro", "en"] as const;
const countries = ["de", "hu", "ro", "us", "gb"] as const;
const grades = [5, 6, 7, 8] as const;
const errors: string[] = [];

const fail = (condition: unknown, message: string) => {
  if (!condition) errors.push(message);
};
const normalize = (value: unknown) => String(value ?? "").normalize("NFKC").toLocaleLowerCase().replace(/[\p{P}\p{S}]+/gu, " ").replace(/\s+/g, " ").trim();
const answerOf = (question: any) => question.type === "mcq"
  ? question.options?.[question.correct]
  : Array.isArray(question.answer) ? question.answer[0] : question.answer;

fail(HISTORY_DIAGRAM_IDS.length === 24, `expected 24 diagrams, got ${HISTORY_DIAGRAM_IDS.length}`);
fail(new Set(HISTORY_DIAGRAM_IDS).size === 24, "diagram ids are not unique");
fail(GESCHICHTE_MISSIONS.length === 24, `expected 24 missions, got ${GESCHICHTE_MISSIONS.length}`);
fail(new Set(Object.values(HISTORY_DIAGRAM_FAMILY)).size === 4, "all four diagram families must be represented");

for (const grade of grades) {
  fail(GESCHICHTE_MISSIONS.filter(mission => mission.grade === grade).length === 6, `K${grade}: expected 6 missions`);
  for (const language of languages) {
    const missions = localizedGeschichteMissions(grade, language);
    fail(missions.length === 6, `${language} K${grade}: expected 6 localized missions`);
    for (const mission of missions) {
      fail(Boolean(mission.title.trim() && mission.clue.trim()), `${language} K${grade} ${mission.id}: blank text`);
      if (mission.mode === "choice") {
        fail(mission.options.length === 4 && new Set(mission.options).size === 4, `${language} ${mission.id}: invalid choices`);
        fail(mission.options.includes(mission.answer), `${language} ${mission.id}: answer missing`);
      } else {
        fail(mission.stages.length === 4 && new Set(mission.stages).size === 4, `${language} ${mission.id}: invalid order`);
      }
      const svg = historyDiagramSvgMarkup(mission.id, mission.title);
      fail(svg.startsWith("<svg") && svg.includes("<title>") && svg.includes("</title>"), `${language} ${mission.id}: invalid print SVG`);
      fail(!/<rect[^>]*(?:width="200"|height="120")/i.test(svg), `${mission.id}: full-frame rectangle found`);
    }
  }
}

for (const language of languages) {
  const types = getLocalizedGeschichteVisualTypes(language);
  fail(types.length === 4, `${language}: expected 4 grade visual types`);
  for (const grade of grades) {
    const type = types.find(candidate => candidate.type === `geschichte-mission-k${grade}`);
    fail(Boolean(type), `${language} K${grade}: visual type missing`);
    if (!type) continue;
    const generated = (type.generate as any)(6, language, { grade, subtopicId: type.subtopicIds[0], countryCode: language });
    fail(generated.length === 6, `${language} K${grade}: expected 6 generated visuals`);
    fail(new Set(generated.map((question: any) => question.id)).size === 6, `${language} K${grade}: repeated visual`);
    for (const question of generated) {
      fail(question.printSvg.includes(`aria-label="`), `${language} ${question.id}: print SVG inaccessible`);
      const expected = question.mode === "choice" ? question.correctAnswer : question.correctOrder.join("|");
      fail(type.gradeAnswer(question, expected).correct, `${language} ${question.id}: correct answer rejected`);
      fail(!type.gradeAnswer(question, "__wrong__").correct, `${language} ${question.id}: wrong answer accepted`);
      fail(type.mapProps(question, "", false, () => undefined).diagramId === question.id, `${language} ${question.id}: diagram mapping lost`);
    }
  }
}

for (const country of countries) {
  for (const grade of grades) {
    const ids = getCurriculumForCountry(grade, country).flatMap(theme => theme.subtopics.map(subtopic => subtopic.id));
    fail(ids.length > 0, `${country} K${grade}: empty curriculum`);
    const triggers = GESCHICHTE_VISUAL_TRIGGERS[grade].filter(id => ids.includes(id));
    fail(triggers.length >= 3, `${country} K${grade}: fewer than 3 visual triggers`);
    for (let run = 0; run < 40; run += 1) {
      const questions = getGeschichteQuestions(grade, ids, 30, country);
      fail(questions.length === 30, `${country} K${grade}: generated ${questions.length}/30 questions`);
      const questionKeys = questions.map(question => normalize(question.question));
      const answerKeys = questions.map(answerOf).map(normalize);
      fail(new Set(questionKeys).size === questionKeys.length, `${country} K${grade}: repeated question in run ${run}`);
      fail(new Set(answerKeys).size === answerKeys.length, `${country} K${grade}: repeated answer in run ${run}`);
      for (const question of questions) {
        fail(Boolean(normalize(question.question) && normalize(answerOf(question))), `${country} K${grade}: blank question or answer`);
        if (question.type === "mcq") {
          fail(question.options.length >= 2 && new Set(question.options.map(normalize)).size === question.options.length, `${country} K${grade}: invalid MCQ options`);
          fail(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, `${country} K${grade}: invalid correct index`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`History test route audit failed with ${errors.length} error(s):`);
  errors.slice(0, 80).forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log("History test route audit passed: 24 borderless diagrams, 24 localized missions, 4 mechanics, 4 languages, 5 country curricula and 3,200 duplicate-free generated tests.");
