import fs from "node:fs";
import path from "node:path";
import {
  SACHKUNDE_ACTIVE_GRADES,
  SACHKUNDE_CURRICULUM,
  getSachkundeQuestions,
} from "../lib/sachkundeCurriculum";
import {
  SACHKUNDE_DIAGRAM_TYPES,
  SACHKUNDE_VISUAL_TYPES,
} from "../lib/sachkundeVisualGenerators";
import { SACHKUNDE_SCENES } from "../lib/sachkundePaperVisuals";

const errors: string[] = [];
const activeGrades = [...SACHKUNDE_ACTIVE_GRADES];
const expectedGrades = [1, 2, 3, 4];

if (JSON.stringify(activeGrades) !== JSON.stringify(expectedGrades)) {
  errors.push(`active grades are ${activeGrades.join(",")}, expected 1,2,3,4`);
}

for (const grade of [5, 6, 7, 8]) {
  if (SACHKUNDE_CURRICULUM[grade]?.length) errors.push(`grade ${grade} is present in public curriculum`);
  if (getSachkundeQuestions(grade, ["anything"], 10).length) errors.push(`grade ${grade} returns public questions`);
}

let topicCount = 0;
let questionCount = 0;
const activeSubtopics = new Set<string>();
const visualCoverage = new Map<number, number>();

for (const grade of activeGrades) {
  const themes = SACHKUNDE_CURRICULUM[grade] ?? [];
  if (!themes.length) errors.push(`grade ${grade} has no themes`);
  const subtopics = themes.flatMap((theme) => theme.subtopics);
  topicCount += subtopics.length;
  for (const subtopic of subtopics) {
    activeSubtopics.add(subtopic.id);
    if (!subtopic.questions.length) errors.push(`grade ${grade}/${subtopic.id} has no questions`);
    for (const question of subtopic.questions) {
      questionCount++;
      if (!question.question?.trim()) errors.push(`blank question in grade ${grade}/${subtopic.id}`);
      if (question.type === "mcq") {
        if (!question.options?.length || question.correct == null || question.correct < 0 || question.correct >= question.options.length) {
          errors.push(`invalid MCQ in grade ${grade}/${subtopic.id}: ${question.question}`);
        } else if (new Set(question.options).size !== question.options.length) {
          errors.push(`duplicate MCQ option in grade ${grade}/${subtopic.id}: ${question.question}`);
        }
      }
    }
  }
  const mapped = SACHKUNDE_VISUAL_TYPES.filter((visual) => visual.subtopicIds.some((id) => subtopics.some((sub) => sub.id === id)));
  visualCoverage.set(grade, mapped.length);
  if (mapped.length < 6) errors.push(`grade ${grade} has only ${mapped.length} visual mechanics`);
}

if (SACHKUNDE_VISUAL_TYPES.length !== 24) errors.push(`visual catalog has ${SACHKUNDE_VISUAL_TYPES.length}, expected 24`);
if (SACHKUNDE_DIAGRAM_TYPES.length !== 15) errors.push(`new diagram catalog has ${SACHKUNDE_DIAGRAM_TYPES.length}, expected 15`);
if (SACHKUNDE_SCENES.length !== 15) errors.push(`paper scene catalog has ${SACHKUNDE_SCENES.length}, expected 15`);

const visualTypeIds = new Set<string>();
for (const visual of SACHKUNDE_VISUAL_TYPES) {
  if (visualTypeIds.has(visual.type)) errors.push(`duplicate visual type ${visual.type}`);
  visualTypeIds.add(visual.type);
  for (const id of visual.subtopicIds) {
    if (!activeSubtopics.has(id)) errors.push(`${visual.type} references inactive/stale subtopic ${id}`);
  }
  const generated = visual.generate(12);
  if (generated.length !== 12) errors.push(`${visual.type} generated ${generated.length}/12 questions`);
  if (new Set(generated.map((item) => JSON.stringify(item))).size < 4) errors.push(`${visual.type} has fewer than 4 variants`);
  for (const question of generated) {
    const expected = visual.gradeAnswer(question, "").expected;
    if (!visual.gradeAnswer(question, expected).correct) errors.push(`${visual.type} rejects its expected answer`);
    if (!visual.mapProps(question, "", false, () => undefined)) errors.push(`${visual.type} does not map screen props`);
    if (!visual.renderPrint?.(question)?.trim()) errors.push(`${visual.type} has no print rendering`);
  }
}

for (const visual of SACHKUNDE_DIAGRAM_TYPES) {
  const question = visual.generate(1)[0];
  const props = visual.mapProps(question, "", false, () => undefined);
  const screenSvg = String(props.svgHtml ?? "");
  const printHtml = visual.renderPrint?.(question) ?? "";
  if (!screenSvg.includes("<svg") || !screenSvg.includes('role="img"')) errors.push(`${visual.type} has no accessible screen SVG`);
  if (!printHtml.includes(screenSvg)) errors.push(`${visual.type} screen/print SVG source differs`);
  if (/background(?:-color)?\s*:|<rect[^>]+(?:width="240"|width="100%")/i.test(screenSvg)) errors.push(`${visual.type} has a card-like SVG background`);
}

const root = process.cwd();
const activePageSource = fs.readFileSync(path.join(root, "app/sachkundetest/page.tsx"), "utf8");
const curriculumSource = fs.readFileSync(path.join(root, "lib/sachkundeCurriculum.ts"), "utf8");
const schemaSource = fs.readFileSync(path.join(root, "app/sachkunde-test/layout.tsx"), "utf8");
const engineSource = fs.readFileSync(path.join(root, "app/deutschtest/page.tsx"), "utf8");

if (!activePageSource.includes("SACHKUNDE_ACTIVE_GRADES")) errors.push("active page does not use the shared grade gate");
if (/sachkundeK[5-8]|Generators[5-8]/.test(activePageSource + curriculumSource)) errors.push("public test imports grade 5-8 archive content");
if (schemaSource.includes('educationalLevel: "Grades 1-8"')) errors.push("SEO schema still advertises grades 1-8");
if (!schemaSource.includes('educationalLevel: "Grades 1-4"')) errors.push("SEO schema does not advertise grades 1-4");
if (!engineSource.includes("configuredVisual?.renderPrint")) errors.push("shared print engine lacks generic visual print fallback");
if (!engineSource.includes("☐ Haustier") || !engineSource.includes("☐ Wildtier")) errors.push("pet/wild-animal print choices are incorrect");

if (errors.length) {
  console.error(`Sachkunde test route audit failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Sachkunde test route audit passed: ${activeGrades.length} active grades, ${topicCount} topics, ${questionCount} bank entries, ` +
  `${SACHKUNDE_VISUAL_TYPES.length} visual mechanics, ${SACHKUNDE_DIAGRAM_TYPES.length} new shared screen/print SVGs; ` +
  `coverage ${[...visualCoverage].map(([grade, count]) => `K${grade}:${count}`).join(", ")}.`,
);
