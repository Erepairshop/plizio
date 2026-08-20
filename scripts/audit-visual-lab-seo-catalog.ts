import {
  VISUAL_LAB_LANGS,
  VISUAL_LAB_SEO_SUBJECTS,
  VISUAL_LAB_SUBJECT_IDS,
  getGame,
  getLocalizedGameContent,
  getSubject,
  getSubjectBySlug,
  getVisualLabStaticParams,
  visualLabSubjectUrl,
  type VisualLabSeoLang,
} from "../lib/visualLab/seoCatalog";

const errors: string[] = [];
const relations = VISUAL_LAB_SEO_SUBJECTS.flatMap((subject) => subject.games);
const params = getVisualLabStaticParams();

if (VISUAL_LAB_SEO_SUBJECTS.length !== 12) errors.push(`Expected 12 subjects, got ${VISUAL_LAB_SEO_SUBJECTS.length}`);
if (relations.length !== 140) errors.push(`Expected 140 subject:game relations, got ${relations.length}`);
if (params.length !== 389) errors.push(`Expected 389 locale game pages, got ${params.length}`);

const subjectIds = new Set(VISUAL_LAB_SEO_SUBJECTS.map((subject) => subject.id));
for (const expected of VISUAL_LAB_SUBJECT_IDS) {
  if (!subjectIds.has(expected)) errors.push(`Missing subject: ${expected}`);
  if (!getSubject(expected)) errors.push(`getSubject failed: ${expected}`);
}

const relationKeys = new Set<string>();
const subjectHubUrls = new Set<string>();
for (const subject of VISUAL_LAB_SEO_SUBJECTS) {
  if (!subject.id || !subject.slug || !subject.name || !subject.focus || !subject.grades.length || !subject.locales.length) errors.push(`Incomplete subject: ${subject.id}`);
  for (const lang of VISUAL_LAB_LANGS) {
    if (!subject.slug[lang]?.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) errors.push(`Invalid ${lang} subject slug: ${subject.id}`);
    if (!subject.name[lang]?.trim() || !subject.focus[lang]?.trim()) errors.push(`Missing ${lang} subject text: ${subject.id}`);
  }
  for (const lang of subject.locales) {
    const hubUrl = visualLabSubjectUrl(lang, subject.id);
    if (subjectHubUrls.has(hubUrl)) errors.push(`Duplicate subject hub URL: ${hubUrl}`);
    subjectHubUrls.add(hubUrl);
    if (getSubjectBySlug(lang, subject.slug[lang])?.id !== subject.id) errors.push(`Slug lookup failed: ${lang}/${subject.slug[lang]}`);
  }
  for (const game of subject.games) {
    if (game.key !== `${subject.id}:${game.id}`) errors.push(`Invalid key: ${game.key}`);
    if (relationKeys.has(game.key)) errors.push(`Duplicate relation key: ${game.key}`);
    relationKeys.add(game.key);
    if (!getGame(subject.id, game.id)) errors.push(`getGame failed: ${game.key}`);
    if (!game.grades.length || !game.mechanic || game.skillIds.length < 2) errors.push(`Incomplete game definition: ${game.key}`);
    if (game.grades.some((grade) => !subject.grades.includes(grade))) errors.push(`Grade outside subject gate: ${game.key}`);
    for (const lang of VISUAL_LAB_LANGS) {
      if (!game.name[lang]?.trim() || !game.focus[lang]?.trim()) errors.push(`Missing ${lang} game text: ${game.key}`);
    }
  }
}

const urls = new Set<string>();
for (const param of params) {
  const content = getLocalizedGameContent(param.subjectId, param.gameId, param.lang as VisualLabSeoLang);
  if (!content) {
    errors.push(`Missing localized content: ${param.lang}/${param.subjectId}/${param.gameId}`);
    continue;
  }
  if (param.subjectSlug !== getSubject(param.subjectId)?.slug[param.lang]) errors.push(`Static param slug mismatch: ${param.lang}/${param.subjectId}`);
  if (urls.has(content.url)) errors.push(`Duplicate URL: ${content.url}`);
  urls.add(content.url);
  if (!content.title || content.title.length < 30 || content.title.length > 75) errors.push(`Title length ${content.title.length}: ${content.url}`);
  if (param.lang !== "de" && content.title.includes("Lernspiel")) errors.push(`German title leak: ${content.url}`);
  if (!content.description || content.description.length < 90 || content.description.length > 190) errors.push(`Description length ${content.description.length}: ${content.url}`);
  if (!content.intro || content.intro.length < 120) errors.push(`Intro too short: ${content.url}`);
  if (!content.mechanicName || !content.mechanicDescription) errors.push(`Missing mechanic copy: ${content.url}`);
  if (content.learningOutcomes.length !== 3 || content.learningOutcomes.some((item) => !item.trim())) errors.push(`Invalid outcomes: ${content.url}`);
  if (!content.canonical.endsWith(content.url)) errors.push(`Invalid canonical: ${content.url}`);
  if (content.levelCount !== 5 || content.isAccessibleForFree !== true) errors.push(`Invalid learning metadata: ${content.url}`);
}

for (const subject of VISUAL_LAB_SEO_SUBJECTS) {
  for (const lang of VISUAL_LAB_LANGS) {
    const expected = subject.locales.includes(lang) ? subject.games.length : 0;
    const actual = params.filter((item) => item.subjectId === subject.id && item.lang === lang).length;
    if (actual !== expected) errors.push(`Locale gate mismatch ${subject.id}/${lang}: ${actual} vs ${expected}`);
  }
}

if (urls.size !== 389) errors.push(`Expected 389 unique URLs, got ${urls.size}`);

if (errors.length) {
  console.error(`Visual Lab SEO catalog audit failed with ${errors.length} error(s):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Visual Lab SEO catalog audit passed: 12 subjects, 140 subject:game relations and 389 unique localized game pages.");
