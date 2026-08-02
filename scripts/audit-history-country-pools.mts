import fs from 'node:fs';
import path from 'node:path';

type Mcq = {
  question?: unknown;
  correct?: unknown;
  wrong?: unknown;
};

type Typing = {
  question?: unknown;
  answer?: unknown;
};

type Topic = {
  mcq?: unknown;
  typing?: unknown;
};

const root = process.cwd();
const dataDir = path.join(root, 'lib', 'geschichteCountryData');
const files = ['us.json', 'gb.json', 'hu.json', 'ro.json'] as const;
const expectedGrades = ['k5', 'k6', 'k7', 'k8'];

const suspiciousDistractors = [
  /\bLast Tuesday\b/i,
  /\bwon a lottery\b/i,
  /\bThe Internet\b/i,
  /\bInternet\b/i,
  /\bskyscrapers?\b/i,
  /\bhelicopters?\b/i,
  /\bpyramids?\b/i,
  /\bplastic\b/i,
];

const knownBad = [
  { file: 'hu.json', text: 'Honfoglukók', fix: 'obvious typo/non-word' },
  { file: 'ro.json', text: 'Insupele Mediteranei', fix: 'obvious Romanian typo' },
  { file: 'ro.json', text: 'În urma unei complot', fix: 'Romanian gender/case error' },
  { file: 'ro.json', text: '"wrong": ["Cucerit"', fix: 'Romanian agreement error' },
  { file: 'gb.json', text: 'The Radio (Wireless)', fix: 'odd capitalization' },
];

const languageLeakPatterns: Record<string, RegExp[]> = {
  us: [/^(Melyik|Hogy|Cine|Care|Cum|Was ist|Wer war)\b/],
  gb: [/^(Melyik|Hogy|Cine|Care|Cum|Was ist|Wer war)\b/],
  hu: [/^(Who|What|Which|Where|When|Why|How|Cine|Care|Cum)\b/],
  ro: [/^(Who|What|Which|Where|When|Why|How|Melyik|Hogy|Was ist|Wer war)\b/],
};

let errors = 0;
let warnings = 0;
const totals: Record<string, { topics: number; mcq: number; typing: number }> = {};

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function issue(kind: 'ERROR' | 'WARN', location: string, message: string): void {
  if (kind === 'ERROR') errors += 1;
  else warnings += 1;
  console.log(`${kind} ${location}: ${message}`);
}

function allText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(allText).join('\n');
  if (value && typeof value === 'object') return Object.values(value).map(allText).join('\n');
  return '';
}

for (const file of files) {
  const code = file.replace('.json', '');
  const filePath = path.join(dataDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    issue('ERROR', file, `invalid JSON: ${(err as Error).message}`);
    continue;
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    issue('ERROR', file, 'top-level JSON must be an object');
    continue;
  }

  const country = parsed as Record<string, Record<string, Topic>>;
  const grades = Object.keys(country);
  for (const grade of expectedGrades) {
    if (!country[grade] || typeof country[grade] !== 'object' || Array.isArray(country[grade])) {
      issue('ERROR', `${file}.${grade}`, 'missing grade object');
    }
  }
  for (const grade of grades) {
    if (!expectedGrades.includes(grade)) {
      issue('WARN', `${file}.${grade}`, 'unexpected grade key');
    }
  }

  totals[code] = { topics: 0, mcq: 0, typing: 0 };
  const questionSet = new Map<string, string>();

  for (const grade of expectedGrades) {
    const gradeData = country[grade] || {};
    for (const [topicId, topic] of Object.entries(gradeData)) {
      const loc = `${file}.${grade}.${topicId}`;
      totals[code].topics += 1;

      if (!topic || typeof topic !== 'object' || Array.isArray(topic)) {
        issue('ERROR', loc, 'topic must be an object');
        continue;
      }

      const mcq = Array.isArray(topic.mcq) ? topic.mcq as Mcq[] : [];
      const typing = Array.isArray(topic.typing) ? topic.typing as Typing[] : [];
      totals[code].mcq += mcq.length;
      totals[code].typing += typing.length;

      if (!Array.isArray(topic.mcq)) issue('ERROR', `${loc}.mcq`, 'mcq must be an array');
      if (!Array.isArray(topic.typing)) issue('ERROR', `${loc}.typing`, 'typing must be an array');
      if (mcq.length < 10) issue('WARN', `${loc}.mcq`, `low MCQ count: ${mcq.length}`);
      if (typing.length < 5) issue('WARN', `${loc}.typing`, `low typing count: ${typing.length}`);

      mcq.forEach((entry, index) => {
        const itemLoc = `${loc}.mcq[${index}]`;
        const question = asString(entry.question);
        const correct = asString(entry.correct);
        const wrong = Array.isArray(entry.wrong) ? entry.wrong.map(asString) : [];

        if (!question) issue('ERROR', itemLoc, 'missing question');
        if (!correct) issue('ERROR', itemLoc, 'missing correct answer');
        if (!Array.isArray(entry.wrong)) issue('ERROR', itemLoc, 'wrong must be an array');
        if (wrong.length !== 3) issue('ERROR', itemLoc, `wrong must contain exactly 3 answers, got ${wrong.length}`);
        if (wrong.some((answer) => !answer)) issue('ERROR', itemLoc, 'wrong contains an empty answer');

        const normalizedAnswers = [correct, ...wrong].map((answer) => answer.toLocaleLowerCase('und'));
        if (new Set(normalizedAnswers).size !== normalizedAnswers.length) {
          issue('ERROR', itemLoc, 'duplicate or identical answer choices');
        }

        const normalizedQuestion = question.toLocaleLowerCase('und');
        const previous = questionSet.get(normalizedQuestion);
        if (previous) issue('WARN', itemLoc, `duplicate question already used at ${previous}`);
        else questionSet.set(normalizedQuestion, itemLoc);

        for (const pattern of languageLeakPatterns[code] || []) {
          if (pattern.test(question)) issue('ERROR', itemLoc, `question appears to be in the wrong language: ${question}`);
        }
        for (const pattern of suspiciousDistractors) {
          if (wrong.some((answer) => pattern.test(answer)) || pattern.test(correct)) {
            issue('WARN', itemLoc, `childish/anachronistic answer choice: ${[correct, ...wrong].join(' | ')}`);
            break;
          }
        }
      });

      typing.forEach((entry, index) => {
        const itemLoc = `${loc}.typing[${index}]`;
        const question = asString(entry.question);
        const answer = asString(entry.answer);
        if (!question) issue('ERROR', itemLoc, 'missing typing question');
        if (!answer) issue('ERROR', itemLoc, 'missing typing answer');
        for (const pattern of languageLeakPatterns[code] || []) {
          if (pattern.test(question)) issue('ERROR', itemLoc, `typing question appears to be in the wrong language: ${question}`);
        }
      });
    }
  }

  const text = allText(country);
  for (const bad of knownBad.filter((item) => item.file === file)) {
    if (text.includes(bad.text)) issue('ERROR', file, `${bad.fix}: ${bad.text}`);
  }
}

console.log('\nCoverage');
for (const [country, total] of Object.entries(totals)) {
  console.log(`${country}: ${total.topics} topics, ${total.mcq} MCQs, ${total.typing} typing prompts`);
}
console.log(`\nResult: ${errors} errors, ${warnings} warnings`);

if (errors > 0) process.exit(1);
