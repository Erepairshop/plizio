import fs from 'node:fs';
import path from 'node:path';
import {
  generateSchoolTest,
  isVisualTopicKey,
  MATH_VISUAL_TOPIC_KEYS,
  MATH_VISUAL_TOPIC_TO_TYPE,
} from '../lib/schoolTaskGenerator';
import { getDEThemes, getENThemes, getHUThemes, getROThemes } from '../lib/mathCurriculum';
import { renderVisualPrintHtml } from '../lib/printVisualHelpers';

type LocaleCase = {
  cc: 'DE' | 'HU' | 'RO' | 'US';
  themes: typeof getDEThemes;
};

const locales: LocaleCase[] = [
  { cc: 'DE', themes: getDEThemes },
  { cc: 'HU', themes: getHUThemes },
  { cc: 'RO', themes: getROThemes },
  { cc: 'US', themes: getENThemes },
];

const failures: string[] = [];
const generatedVisualTypes = new Set<string>();
let generatedPapers = 0;
let generatedVisualTasks = 0;

function fail(message: string) {
  failures.push(message);
}

function closeTo(actual: number, expected: number) {
  return Math.abs(actual - expected) < 0.000001;
}

function caseLabels(source: string): Set<string> {
  return new Set([...source.matchAll(/case\s+['"]([^'"]+)['"]\s*:/g)].map((match) => match[1]));
}

for (const topicKey of MATH_VISUAL_TOPIC_KEYS) {
  if (!MATH_VISUAL_TOPIC_TO_TYPE[topicKey]) fail(`Missing task type mapping: ${topicKey}`);
  if (!isVisualTopicKey(topicKey)) fail(`Visual key is not recognized: ${topicKey}`);

  const paper = generateSchoolTest(5, 'DE', [{ key: topicKey, name: topicKey }]);
  generatedPapers++;
  if (paper.length !== 10) fail(`${topicKey}: expected 10 blocks, got ${paper.length}`);
  const blockPoints = paper.reduce((sum, block) => sum + block.totalPoints, 0);
  const questionPoints = paper.flatMap((block) => block.subQuestions).reduce((sum, sq) => sum + sq.points, 0);
  if (!closeTo(blockPoints, 10)) fail(`${topicKey}: block points ${blockPoints}, expected 10`);
  if (!closeTo(questionPoints, 10)) fail(`${topicKey}: question points ${questionPoints}, expected 10`);

  for (const block of paper) {
    if (block.subQuestions.length !== 1) fail(`${topicKey}: visual block ${block.id} contains ${block.subQuestions.length} interactions`);
    for (const sq of block.subQuestions) {
      if (!sq.visualType || !sq.visualData) {
        fail(`${topicKey}: ${sq.id} has no visual payload`);
        continue;
      }
      generatedVisualTypes.add(sq.visualType);
      generatedVisualTasks++;
      const printHtml = renderVisualPrintHtml(sq.visualType, sq.visualData.params, sq.question, 'DE');
      if (!printHtml.trim()) fail(`${topicKey}: ${sq.visualType} has empty print output`);
      if (printHtml.includes('<div style="font-size:11pt;"></div>')) {
        fail(`${topicKey}: ${sq.visualType} falls back to a blank print task`);
      }
    }
  }
}

for (const { cc, themes } of locales) {
  for (let grade = 1; grade <= 8; grade++) {
    const topics = themes(grade).flatMap((theme) => theme.topics.map((topic) => ({ key: topic.key, name: topic.name })));
    const paper = generateSchoolTest(grade, cc, topics);
    generatedPapers++;
    if (paper.length !== 10) fail(`${cc} grade ${grade}: expected 10 blocks, got ${paper.length}`);
    if (new Set(paper.map((block) => block.id)).size !== paper.length) fail(`${cc} grade ${grade}: duplicate block ids`);
    const emptyBlocks = paper.filter((block) => block.subQuestions.length === 0);
    if (emptyBlocks.length) fail(`${cc} grade ${grade}: empty block(s): ${emptyBlocks.map((block) => `${block.id} [${block.title}]`).join(', ')}`);
    const total = paper.flatMap((block) => block.subQuestions).reduce((sum, sq) => sum + sq.points, 0);
    if (!closeTo(total, 10)) fail(`${cc} grade ${grade}: gradable total is ${total}, expected 10`);
  }
}

const root = process.cwd();
const screenCases = caseLabels(fs.readFileSync(path.join(root, 'components', 'SchoolTaskBlock.tsx'), 'utf8'));
const printCases = caseLabels(fs.readFileSync(path.join(root, 'lib', 'printVisualHelpers.ts'), 'utf8'));
for (const visualType of generatedVisualTypes) {
  if (!screenCases.has(visualType)) fail(`Screen renderer is missing: ${visualType}`);
  if (!printCases.has(visualType)) fail(`Print renderer is missing: ${visualType}`);
}

if (failures.length) {
  console.error(`Math test route audit failed with ${failures.length} error(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Math test route audit passed: ${MATH_VISUAL_TOPIC_KEYS.length} visual topics, ` +
  `${generatedVisualTypes.size} rendered visual types, ${generatedVisualTasks} visual tasks, ` +
  `${generatedPapers} papers, 8 grades and 4 languages.`,
);
