import "../lib/geographieRegistration";
import { GEOGRAPHY_DIAGRAM_FAMILY, GEOGRAPHY_DIAGRAM_IDS, geographyDiagramSvgMarkup } from "../components/geographie-visual/GeographyTestDiagrams";
import { K5_CURRICULUM, getK5Questions } from "../lib/geographieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "../lib/geographieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "../lib/geographieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "../lib/geographieCurriculum8";
import { GEOGRAPHY_MISSIONS, localizedGeographyMissions } from "../lib/geographieVisualContent";
import { GEOGRAPHY_VISUAL_TRIGGERS, getLocalizedGeographyVisualTypes } from "../lib/geographieVisualGenerators";

const languages = ["de", "hu", "ro", "en"] as const;
const grades = [5, 6, 7, 8] as const;
const errors: string[] = [];
const fail = (condition: unknown, message: string) => { if (!condition) errors.push(message); };
const normalize = (value: unknown) => String(value ?? "").normalize("NFKC").toLocaleLowerCase().replace(/[\p{P}\p{S}]+/gu, " ").replace(/\s+/g, " ").trim();
const answerOf = (question: any) => question.type === "mcq"
  ? question.options?.[question.correct ?? question.correctIndex]
  : Array.isArray(question.answer) ? question.answer[0] : question.answer;

const curricula = { 5: K5_CURRICULUM, 6: K6_CURRICULUM, 7: K7_CURRICULUM, 8: K8_CURRICULUM };
const generators = { 5: getK5Questions, 6: getK6Questions, 7: getK7Questions, 8: getK8Questions };

fail(GEOGRAPHY_DIAGRAM_IDS.length === 24, `expected 24 diagrams, got ${GEOGRAPHY_DIAGRAM_IDS.length}`);
fail(new Set(GEOGRAPHY_DIAGRAM_IDS).size === 24, "diagram ids are not unique");
fail(GEOGRAPHY_MISSIONS.length === 24, `expected 24 missions, got ${GEOGRAPHY_MISSIONS.length}`);
fail(new Set(Object.values(GEOGRAPHY_DIAGRAM_FAMILY)).size === 4, "all four geography mechanics must be represented");

for (const grade of grades) {
  const ids = curricula[grade].flatMap(theme => theme.subtopics.map(subtopic => subtopic.id));
  fail(GEOGRAPHY_MISSIONS.filter(mission => mission.grade === grade).length === 6, `K${grade}: expected 6 missions`);
  fail(GEOGRAPHY_VISUAL_TRIGGERS[grade].every(id => ids.includes(id)), `K${grade}: invalid visual trigger`);

  for (const language of languages) {
    const missions = localizedGeographyMissions(grade, language);
    fail(missions.length === 6, `${language} K${grade}: expected 6 localized missions`);
    for (const mission of missions) {
      fail(Boolean(mission.title.trim() && mission.clue.trim()), `${language} ${mission.id}: blank text`);
      if (mission.mode === "choice") {
        fail(mission.options.length === 4 && new Set(mission.options).size === 4, `${language} ${mission.id}: invalid choices`);
        fail(mission.options.includes(mission.answer), `${language} ${mission.id}: answer missing`);
      } else {
        fail(mission.stages.length === 4 && new Set(mission.stages).size === 4, `${language} ${mission.id}: invalid order`);
      }
      const svg = geographyDiagramSvgMarkup(mission.id, mission.title);
      fail(svg.startsWith("<svg") && svg.includes("<title>") && svg.includes("</title>"), `${language} ${mission.id}: invalid print SVG`);
      fail(!/<rect[^>]*(?:width="200"|height="120")/i.test(svg), `${mission.id}: full-frame rectangle found`);
    }

    const type = getLocalizedGeographyVisualTypes(language).find(candidate => candidate.type === `geography-mission-k${grade}`);
    fail(Boolean(type), `${language} K${grade}: visual type missing`);
    if (type) {
      const generated = type.generate(6, language);
      fail(generated.length === 6 && new Set(generated.map((question: any) => question.id)).size === 6, `${language} K${grade}: invalid generated visuals`);
      for (const question of generated) {
        const expected = question.mode === "choice" ? question.correctAnswer : question.correctOrder.join("|");
        fail(type.gradeAnswer(question, expected).correct, `${language} ${question.id}: correct answer rejected`);
        fail(!type.gradeAnswer(question, "__wrong__").correct, `${language} ${question.id}: wrong answer accepted`);
        fail(type.mapProps(question, "", false, () => undefined).diagramId === question.id, `${language} ${question.id}: diagram mapping lost`);
        fail(question.printSvg.includes("aria-label="), `${language} ${question.id}: inaccessible print SVG`);
      }
    }

    for (let run = 0; run < 40; run += 1) {
      const questions = generators[grade](ids, language, 30);
      fail(questions.length === 30, `${language} K${grade}: generated ${questions.length}/30 questions`);
      const questionKeys = questions.map(question => normalize(question.question));
      const answerKeys = questions.map(answerOf).map(normalize);
      fail(new Set(questionKeys).size === questionKeys.length, `${language} K${grade}: repeated question in run ${run}`);
      fail(new Set(answerKeys).size === answerKeys.length, `${language} K${grade}: repeated answer in run ${run}`);
      for (const question of questions) {
        fail(Boolean(normalize(question.question) && normalize(answerOf(question))), `${language} K${grade}: blank question or answer`);
        if (question.type === "mcq") {
          fail(question.options.length >= 2 && new Set(question.options.map(normalize)).size === question.options.length, `${language} K${grade}: invalid options`);
          fail(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, `${language} K${grade}: invalid correct index`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`Geography test route audit failed with ${errors.length} error(s):`);
  errors.slice(0, 100).forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Geography test route audit passed: 24 borderless diagrams, 24 missions, 4 mechanics, 4 languages and 19,200 duplicate-free generated questions.");
