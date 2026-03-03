// ─── DEUTSCH TEST — ANTWORT-VALIDIERUNG ──────────────────────────────────────
// Toleranz-basierte Überprüfung von Freitext-Antworten
// Klasse 1-2: Levenshtein ≤ 2 | Klasse 3-4: ≤ 1 | Klasse 5-8: nur Groß/Klein

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, " ");
}

/**
 * Überprüft eine Freitext-Antwort mit klassenabhängiger Toleranz.
 * @param input   - Die Eingabe des Schülers
 * @param expected - Richtige Antwort(en) — String oder String-Array
 * @param grade   - Klassenstufe (1-8)
 */
export function checkAnswer(
  input: string,
  expected: string | string[],
  grade: number
): boolean {
  const tolerance = grade <= 2 ? 2 : grade <= 4 ? 1 : 0;
  const normInput = normalize(input);
  const answers = Array.isArray(expected) ? expected : [expected];

  return answers.some((ans) => {
    const normAns = normalize(ans);
    if (tolerance === 0) return normInput === normAns;
    return levenshtein(normInput, normAns) <= tolerance;
  });
}
