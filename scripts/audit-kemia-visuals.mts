import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
const importedContent = await import("../lib/kemiaVisualContent");
const content = ((importedContent as { default?: unknown }).default ?? importedContent) as typeof import("../lib/kemiaVisualContent");
const { getChangeItems, getHazardItems, getParticleItems, getSeparationItems } = content;
const importedDiagrams = await import("../components/chemie-visual/ChemistryTestDiagrams");
const diagrams = ((importedDiagrams as { default?: unknown }).default ?? importedDiagrams) as typeof import("../components/chemie-visual/ChemistryTestDiagrams");
const { ChangeDiagramSvg, HazardDiagramSvg, ParticleDiagramSvg, SeparationDiagramSvg } = diagrams;

const languages = ["de", "hu", "ro", "en"] as const;

for (const lang of languages) {
  const groups = [getParticleItems(lang), getSeparationItems(lang), getHazardItems(lang), getChangeItems(lang)];
  const uniqueKeys = groups.flatMap((items, group) => items.map((item) => `${group}:${item.id}`));
  if (groups.some((items) => items.length !== 6) || new Set(uniqueKeys).size !== 24) {
    throw new Error(`${lang}: expected 24 unique visual items`);
  }
  if (groups.flat().some((item) => !item.prompt || !item.answer || !item.options.includes(item.answer))) {
    throw new Error(`${lang}: missing prompt or correct option`);
  }
  console.log(`${lang}: 24 localized visual items PASS`);
}

const renderGroups = [
  [getParticleItems("de"), ParticleDiagramSvg],
  [getSeparationItems("de"), SeparationDiagramSvg],
  [getHazardItems("de"), HazardDiagramSvg],
  [getChangeItems("de"), ChangeDiagramSvg],
] as const;

const html = renderGroups.flatMap(([items, Component]) =>
  items.map((item) => renderToStaticMarkup(React.createElement(Component, { kind: item.id as never, label: item.prompt }))),
).join("");

if ((html.match(/role="img"/g) ?? []).length !== 24) throw new Error("Expected 24 accessible SVGs");
if (/<rect[^>]*x="0"/.test(html)) throw new Error("An SVG has an outer background rectangle");

console.log("24 SVG renders, accessibility and transparent background PASS");
const importedGenerators = await import("../lib/kemiaVisualGenerators");
const generators = ((importedGenerators as { default?: unknown }).default ?? importedGenerators) as typeof import("../lib/kemiaVisualGenerators");
for (const lang of languages) {
  for (const visualType of generators.getLocalizedKemiaVisualTypes(lang)) {
    const questions = visualType.generate(40, lang);
    const ids = questions.map((question) => String(question.id));
    if (questions.length !== 6 || new Set(ids).size !== 6) {
      throw new Error(`${lang}/${visualType.type}: visual batch repeated or did not cap at six`);
    }
    if (questions.some((question) => question.options[question.correctIndex] !== question.answer)) {
      throw new Error(`${lang}/${visualType.type}: correct answer mapping is invalid`);
    }
  }
}

console.log("4 visual generators x 4 languages: unique batches and answer mapping PASS");
