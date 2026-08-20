import assert from "node:assert/strict";
import { getLocalizedBiologieDiagramTypes, getLocalizedBiologieVisualTypes } from "../lib/biologieVisualGenerators";
import {
  getCellItems,
  getGeneticsItems,
  getOrganItems,
  getPlantItems,
  type BiologieVisualLang,
} from "../lib/biologieVisualContent";
import { biologyDiagramSvgMarkup, type BiologyDiagramFamily } from "../components/biologie-visual/BiologyTestDiagrams";
import "../lib/biologieGenerators5";
import "../lib/biologieGenerators6";
import "../lib/biologieGenerators7";
import "../lib/biologieGenerators8";
import { K5_CURRICULUM, getK5Questions } from "../lib/biologieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "../lib/biologieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "../lib/biologieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "../lib/biologieCurriculum8";

const languages: BiologieVisualLang[] = ["de", "hu", "ro", "en"];
const getters = {
  organ: getOrganItems,
  plant: getPlantItems,
  cell: getCellItems,
  genetics: getGeneticsItems,
} satisfies Record<BiologyDiagramFamily, (lang?: string) => Array<{
  id: string;
  prompt: string;
  hint: string;
  options: string[];
  answer: string;
}>>;

let localizedItems = 0;
let localizedLegacyQuestions = 0;
for (const lang of languages) {
  const types = getLocalizedBiologieDiagramTypes(lang);
  assert.equal(types.length, 4, `${lang}: four diagram families expected`);
  for (const [familyIndex, family] of (Object.keys(getters) as BiologyDiagramFamily[]).entries()) {
    const items = getters[family](lang);
    assert.equal(items.length, 6, `${lang}/${family}: six items expected`);
    assert.equal(new Set(items.map(item => item.id)).size, 6, `${lang}/${family}: duplicate diagram id`);
    for (const item of items) {
      assert.ok(item.prompt.length >= 12, `${lang}/${family}/${item.id}: short prompt`);
      assert.ok(item.hint.length >= 18, `${lang}/${family}/${item.id}: short hint`);
      assert.ok(item.options.includes(item.answer), `${lang}/${family}/${item.id}: answer missing from options`);
      const svg = biologyDiagramSvgMarkup(family, item.id, item.answer);
      assert.match(svg, /^<svg /, `${lang}/${family}/${item.id}: missing SVG`);
      assert.match(svg, /role="img"/, `${lang}/${family}/${item.id}: inaccessible SVG`);
      assert.doesNotMatch(svg, /<rect[^>]+(?:width="180"|width="100%")/i, `${lang}/${family}/${item.id}: outer frame detected`);
      localizedItems += 1;
    }

    const generated = types[familyIndex].generate(6);
    assert.equal(generated.length, 6, `${lang}/${family}: six generated questions expected`);
    assert.equal(new Set(generated.map(question => question.diagramId)).size, 6, `${lang}/${family}: repeated diagram in batch`);
    for (const question of generated) {
      assert.ok(question.printSvg?.startsWith("<svg "), `${lang}/${family}: print SVG missing`);
      assert.equal(question.options[question.correctIndex], getters[family](lang).find(item => item.id === question.diagramId)?.answer);
    }
  }

  const legacyTypeIds = [
    "tier-klassifizierung-bio",
    "organ-zuordnung",
    "ernaehrungs-sort",
    "nahrungskette-sort",
    "lebenszyklus-timeline",
  ];
  const allTypes = getLocalizedBiologieVisualTypes(lang);
  const legacyTypes = legacyTypeIds.map(typeId => {
    const visualType = allTypes.find(type => type.type === typeId);
    assert.ok(visualType, `${lang}: missing legacy visual type ${typeId}`);
    return visualType;
  });
  const germanLeak = /\b(?:Welches|Welche|Welcher|Ordne|Richtig|Lösung|Zurücksetzen|Merkmal|Aufgabe|Körperbau|Lebenszyklus|Nahrungskette)\b/;
  for (const visualType of legacyTypes) {
    const generated = visualType.generate(100, lang);
    assert.ok(generated.length >= 6, `${lang}/${visualType.type}: too few missions`);
    assert.equal(
      new Set(generated.map(question => question.missionId)).size,
      generated.length,
      `${lang}/${visualType.type}: repeated mission`,
    );
    for (const question of generated) {
      assert.ok(String(question.question).length >= 12, `${lang}/${visualType.type}: short question`);
      assert.ok(String(question.prompt).length >= 12, `${lang}/${visualType.type}: short prompt`);
      if (lang !== "de") {
        assert.doesNotMatch(String(question.question), germanLeak, `${lang}/${visualType.type}: German question leak`);
        assert.doesNotMatch(String(question.correctLabel), germanLeak, `${lang}/${visualType.type}: German UI leak`);
      }
      const expectedInput = question.mode === "choice"
        ? question.correctAnswer
        : question.correctOrder.join("|");
      assert.equal(visualType.gradeAnswer(question, expectedInput).correct, true, `${lang}/${visualType.type}: correct answer rejected`);
      assert.equal(visualType.gradeAnswer(question, "__wrong__").correct, false, `${lang}/${visualType.type}: wrong answer accepted`);
      const mapped = visualType.mapProps(question, "", false, () => undefined);
      assert.equal(mapped.prompt, question.prompt, `${lang}/${visualType.type}: prompt lost in props`);
      localizedLegacyQuestions += 1;
    }
  }
}

console.log(JSON.stringify({
  subjects: 1,
  families: 4,
  diagrams: 24,
  languages: languages.length,
  localizedItems,
  legacyTypes: 5,
  localizedLegacyQuestions,
  screenAndPrintShareDiagramId: true,
  status: "passed",
}));

const grades = [
  { grade: 5, curriculum: K5_CURRICULUM, getQuestions: getK5Questions },
  { grade: 6, curriculum: K6_CURRICULUM, getQuestions: getK6Questions },
  { grade: 7, curriculum: K7_CURRICULUM, getQuestions: getK7Questions },
  { grade: 8, curriculum: K8_CURRICULUM, getQuestions: getK8Questions },
];

const invalidExamples = new Set<string>();
function hasInvalidValue(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "number") return Number.isNaN(value);
  if (typeof value === "string") return /\bundefined\b/i.test(value);
  if (Array.isArray(value)) return value.some(hasInvalidValue);
  if (typeof value === "object") return Object.values(value as Record<string, unknown>).some(hasInvalidValue);
  return false;
}
let generatedQuestions = 0;
let exactDuplicatesInsideTests = 0;
for (const { grade, curriculum, getQuestions } of grades) {
  const ids = curriculum.flatMap(theme => theme.subtopics.map(subtopic => subtopic.id));
  for (let run = 0; run < 300; run += 1) {
    const questions = getQuestions(ids, 30);
    assert.equal(questions.length, 30, `K${grade}: expected 30 questions, got ${questions.length}`);
    generatedQuestions += questions.length;
    const seen = new Set<string>();
    for (const question of questions) {
      const text = String(question.question ?? "");
      const options = Array.isArray(question.options) ? question.options.map(String) : [];
      const answer = Array.isArray(question.answer) ? question.answer.join("|") : String(question.answer ?? "");
      const serialized = JSON.stringify(question);
      if (!text.trim() || hasInvalidValue(question)) invalidExamples.add(`K${grade}: ${serialized}`);
      if (question.type === "mcq") {
        if (options.length < 2 || new Set(options).size !== options.length || !Number.isInteger(question.correct) || question.correct < 0 || question.correct >= options.length) {
          invalidExamples.add(`K${grade}: ${serialized}`);
        }
      } else if (!answer.trim()) {
        invalidExamples.add(`K${grade}: ${serialized}`);
      }
      const key = `${question.type}|${text}|${String((question as { diagramId?: string }).diagramId ?? "")}`;
      if (seen.has(key)) exactDuplicatesInsideTests += 1;
      seen.add(key);
    }
  }
}

console.log(JSON.stringify({
  generatedQuestions,
  exactDuplicatesInsideTests,
  invalidQuestionCount: invalidExamples.size,
  invalidExamples: [...invalidExamples].slice(0, 12),
}));
assert.equal(invalidExamples.size, 0, "Invalid generated biology questions detected");
