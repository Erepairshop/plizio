type Generator = (seed?: number) => unknown[];

const rawGenerators = await import("../lib/englishGenerators");
const englishModule = (rawGenerators.default ?? rawGenerators["module.exports"] ?? rawGenerators) as Record<string, any>;
const ALL_GENERATORS = englishModule.ALL_GENERATORS as Record<string, Record<string, Record<string, Generator>>>;

function flattenGrade(grade: number): Map<string, Generator> {
  const topics = ALL_GENERATORS[`G${grade}` as keyof typeof ALL_GENERATORS] as Record<string, Record<string, Generator>>;
  const generators = new Map<string, Generator>();
  for (const [topic, subtopics] of Object.entries(topics ?? {})) {
    for (const [subtopic, generator] of Object.entries(subtopics)) {
      generators.set(subtopic, generator);
      generators.set(`${topic}_${subtopic}`, generator);
      generators.set(subtopic.replace(`_g${grade}`, `_k${grade}`), generator);
    }
  }
  if (grade === 1) {
    generators.set("uppercase_k1", generators.get("uppercase_lowercase_g1")!);
    generators.set("declarative_k1", generators.get("declarative_interrogative_g1")!);
    generators.set("story_k1", generators.get("story_comprehension_g1")!);
  }
  return generators;
}

for (let grade = 1; grade <= 8; grade++) {
  const module = await import(`../lib/explorerPools/englishK${grade}.ts`);
  const requested = new Set<string>();

  for (const value of Object.values(module)) {
    if (!Array.isArray(value)) continue;
    for (const item of value) {
      const key = item?.quiz?.generate;
      if (typeof key === "string") requested.add(key);
    }
  }

  const generators = flattenGrade(grade);
  const missing = [...requested].filter((key) => !generators.has(key));
  if (missing.length > 0) {
    throw new Error(`English K${grade}: unresolved generators: ${missing.join(", ")}`);
  }

  for (const key of requested) {
    const questions = generators.get(key)?.(12345) ?? [];
    const validMcq = questions.some((question: any) =>
      question?.type === "mcq"
      && typeof question.question === "string"
      && Array.isArray(question.options)
      && Number.isInteger(question.correct)
      && question.correct >= 0
      && question.correct < question.options.length
    );
    if (!validMcq) throw new Error(`English K${grade}: generator ${key} returned no valid MCQ`);
  }

  console.log(`English K${grade}: ${requested.size} generator keys resolved`);
}

console.log("AstroEnglish generator audit passed.");
