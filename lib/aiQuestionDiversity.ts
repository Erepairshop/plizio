function normalizedQuestion(value: unknown): string {
  return String(value ?? "").normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function dedupeAiQuestions<T extends { question?: unknown }>(questions: T[]): T[] {
  const seen = new Set<string>();
  return questions.filter(question => {
    const key = normalizedQuestion(question.question);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
