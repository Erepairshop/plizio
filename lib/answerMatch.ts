// Közös válasz-egyezés a teszt-feladatokhoz (free-text input).
// Numerikus válaszoknál tolerálja a tizedes-elválasztót (vessző VAGY pont), az ezres-elválasztó
// szóközöket, a záró nullákat (9,50 == 9.5) és az egyszerű törteket (1/2 == 0,5 == 2/4).
// Nem-numerikusnál trim + kisbetűs összevetés.
export function normalizeNumeric(s: string): number | null {
  if (s == null) return null;
  let t = String(s).trim();
  if (t === "") return null;
  // mindenféle szóköz (ezres-elválasztó) ki, tizedes vessző -> pont
  t = t.replace(/[\s ]/g, "").replace(",", ".");
  // egyszerű tört "a/b" -> hányados (1/2 == 0.5 == 2/4)
  const frac = t.match(/^([-+]?\d*\.?\d+)\/(\d*\.?\d+)$/);
  if (frac) {
    const den = parseFloat(frac[2]);
    if (den === 0) return null;
    const v = parseFloat(frac[1]) / den;
    return Number.isFinite(v) ? v : null;
  }
  if (!/^[-+]?\d*\.?\d+$/.test(t)) return null;
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : null;
}

export function answersMatch(user: unknown, correct: unknown): boolean {
  const u = String(user ?? "").trim();
  const c = String(correct ?? "").trim();
  if (u === "") return false;
  if (u === c) return true;
  const un = normalizeNumeric(u);
  const cn = normalizeNumeric(c);
  if (un != null && cn != null) return Math.abs(un - cn) < 1e-9;
  return u.toLowerCase().replace(/\s+/g, " ") === c.toLowerCase().replace(/\s+/g, " ");
}
