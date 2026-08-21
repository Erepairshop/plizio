import { AI_TEST_DIAGRAM_FAMILY, AI_TEST_DIAGRAM_IDS, aiTestDiagramSvgMarkup } from "../components/ai-test-visual/AiTestDiagrams";
import { AI_MISSIONS, localizedAiMissions } from "../lib/aiVisualContent";
import { AI_VISUAL_TRIGGERS, getLocalizedAiVisualTypes } from "../lib/aiVisualGenerators";
import { AI_K5_CURRICULUM, getAIK5Questions } from "../lib/aiCurriculum5";
import { AI_K6_CURRICULUM, getAIK6Questions } from "../lib/aiCurriculum6";
import { AI_K7_CURRICULUM, getAIK7Questions } from "../lib/aiCurriculum7";
import { AI_K8_CURRICULUM, getAIK8Questions } from "../lib/aiCurriculum8";

const grades = [5, 6, 7, 8] as const;
const langs = ["de", "hu", "ro", "en"] as const;
const curricula = { 5: AI_K5_CURRICULUM, 6: AI_K6_CURRICULUM, 7: AI_K7_CURRICULUM, 8: AI_K8_CURRICULUM };
const getters = { 5: getAIK5Questions, 6: getAIK6Questions, 7: getAIK7Questions, 8: getAIK8Questions };
const fail = (message: string): never => { throw new Error(message); };
const key = (value: string) => value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

if (AI_TEST_DIAGRAM_IDS.length !== 24 || new Set(AI_TEST_DIAGRAM_IDS).size !== 24) fail("Expected 24 unique diagram IDs");
if (AI_MISSIONS.length !== 24 || new Set(AI_MISSIONS.map(mission => mission.id)).size !== 24) fail("Expected 24 unique missions");

for (const grade of grades) {
  const missions = AI_MISSIONS.filter(mission => mission.grade === grade);
  if (missions.length !== 6) fail(`K${grade}: expected six missions`);
  const subtopics = new Set(curricula[grade].flatMap(theme => theme.subtopics.map(topic => topic.id)));
  for (const trigger of AI_VISUAL_TRIGGERS[grade]) if (!subtopics.has(trigger)) fail(`K${grade}: invalid visual trigger ${trigger}`);

  for (const lang of langs) {
    const localized = localizedAiMissions(grade, lang);
    if (localized.length !== 6 || localized.some(mission => !mission.title.trim() || !mission.clue.trim())) fail(`K${grade}/${lang}: incomplete localized missions`);
    const visualType = getLocalizedAiVisualTypes(lang).find(type => type.type === `ai-mission-k${grade}`)!;
    if (!visualType) fail(`K${grade}/${lang}: visual type missing`);
    const generated = visualType.generate(6);
    if (generated.length !== 6 || new Set(generated.map(question => question.id)).size !== 6) fail(`K${grade}/${lang}: visual diversity failed`);
    for (const question of generated) {
      const svg = aiTestDiagramSvgMarkup(question.id, question.title);
      if (!svg.startsWith("<svg") || !svg.includes("<title>") || svg.includes('<rect x="0"') || svg.includes('<rect x="1"')) fail(`${question.id}: framed or inaccessible SVG`);
      const expected = question.mode === "choice" ? question.correctAnswer : question.correctOrder.join("|");
      if (!visualType.gradeAnswer(question, expected).correct) fail(`${question.id}: grading failed`);
    }

    const questions = getters[grade]([...subtopics], 500, lang) as Array<{ question?: string; options?: string[]; correct?: number; answer?: string }>;
    if (questions.length < 200) fail(`K${grade}/${lang}: unexpectedly small pool (${questions.length})`);
    const keys = questions.map(question => key(question.question ?? ""));
    if (keys.some(value => !value)) fail(`K${grade}/${lang}: empty question`);
    if (new Set(keys).size !== keys.length) fail(`K${grade}/${lang}: exact repeated question in runtime pool`);
    for (const question of questions) {
      if (question.options) {
        if (question.options.length !== 4 || new Set(question.options.map(key)).size !== question.options.length) fail(`K${grade}/${lang}: malformed MCQ options`);
        if (typeof question.correct !== "number" || question.correct < 0 || question.correct >= question.options.length) fail(`K${grade}/${lang}: invalid correct index`);
      } else if (!(question.answer ?? "").toString().trim()) fail(`K${grade}/${lang}: empty typing answer`);
    }
  }
}

for (const id of AI_TEST_DIAGRAM_IDS) if (!AI_TEST_DIAGRAM_FAMILY[id]) fail(`${id}: missing family`);
console.log("AI test route audit passed: 24 diagrams, 24 missions, 4 grades, 4 languages, complete runtime pools.");
