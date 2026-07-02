// Közös válasz-diverzitás a teszt-generátorokhoz (geographie/kemia/physik/biologie/ai/informatika).
// Round-robin elven: a kérdéseket válasz-kulcs szerint vödrökbe rakja, majd körönként EGYET húz
// minden vödörből → minden válasz egyszer szerepel, mielőtt bármelyik másodszor jönne.
// Így a pool melletti elméleti minimum-ismétlés egy teszten belül. (Kis válasz-terű témánál az
// ismétlés elkerülhetetlen, de egyenletesen oszlik el, nem halmozódik egy válaszra.)

type AnyQ = {
  type?: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
  question?: string;
};

function answerKey(q: AnyQ): string {
  let a = "";
  if (q.type === "mcq" && Array.isArray(q.options) && typeof q.correct === "number") {
    a = q.options[q.correct] ?? "";
  } else if (q.answer != null) {
    a = Array.isArray(q.answer) ? (q.answer[0] ?? "") : String(q.answer);
  }
  return a.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

// MCQ opció-tisztító: kiszűri a duplikált opciókat (a helyes választ megtartva),
// és újraszámolja a correct indexet. Bárhogy is épült az opció-tömb, nem marad duplikátum.
export function sanitizeMcq<T extends AnyQ>(q: T): T {
  if (!Array.isArray(q.options)) return q;
  // A helyes opció szövege: vagy a correct index, vagy (annak hiányában) az answer mezőből.
  let correctStr: string | undefined;
  if (typeof q.correct === "number" && q.correct >= 0 && q.correct < q.options.length) {
    correctStr = q.options[q.correct];
  } else if (q.answer != null) {
    correctStr = Array.isArray(q.answer) ? q.answer[0] : String(q.answer);
  } else {
    return q; // nincs mihez igazodni
  }
  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const o of q.options) {
    const key = String(o);
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(o);
  }
  const hadDup = deduped.length !== q.options.length;
  const correctNow = typeof q.correct === "number" && q.correct >= 0 && q.correct < q.options.length;
  if (!hadDup && correctNow) return q; // semmi tennivaló
  const correct = deduped.indexOf(correctStr as string);
  return { ...q, options: deduped, correct: correct >= 0 ? correct : 0 };
}

// Csak opció-tisztítás (dedup), a sorrend/darabszám érintetlen — a slicelő tárgyaknak.
export function sanitizeQuestions<T extends AnyQ>(pool: T[]): T[] {
  return pool.map(sanitizeMcq);
}

export function pickDiverse<T extends AnyQ>(pool: T[], count: number): T[] {
  if (pool.length <= count) return pool.map(sanitizeMcq).slice(0, count);
  const buckets = new Map<string, T[]>();
  const result: T[] = [];
  let noKeyIdx = 0;
  for (const q of pool) {
    const k = answerKey(q);
    if (!k) {
      // Válasz-kulcs nélküli kérdés: saját egyelemű vödörbe, hogy a round-robinban
      // egyenletesen szóródjon (NEM mind a result elejére, count-limit nélkül).
      buckets.set("nokey" + noKeyIdx++, [q]);
      continue;
    }
    const b = buckets.get(k);
    if (b) b.push(q); else buckets.set(k, [q]);
  }
  const order = [...buckets.values()];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  let round = 0, added = true;
  while (result.length < count && added) {
    added = false;
    for (const b of order) {
      if (b[round] !== undefined) { result.push(b[round]); added = true; if (result.length >= count) break; }
    }
    round++;
  }
  return result.slice(0, count).map(sanitizeMcq);
}
