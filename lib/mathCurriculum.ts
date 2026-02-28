// ─── MATH CURRICULUM SYSTEM ─────────────────────────────
// Hungarian elementary school math curriculum (1-8 grade)
// Generates questions based on grade + current month in the school year

export interface MathQuestion {
  question: string;
  correctAnswer: number;
  options: number[];
  topic: string;
  isWordProblem: boolean;
}

// ─── HELPERS ─────────────────────────────

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateOptions(correct: number, minVal: number = 0): number[] {
  const opts = new Set<number>([correct]);
  const spread = Math.max(3, Math.ceil(Math.abs(correct) * 0.25) + 1);
  let attempts = 0;
  while (opts.size < 4 && attempts < 100) {
    const offset = randInt(1, spread) * (Math.random() > 0.5 ? 1 : -1);
    const wrong = correct + offset;
    if (wrong >= minVal && wrong !== correct) opts.add(wrong);
    attempts++;
  }
  let fill = 1;
  while (opts.size < 4) {
    if (correct + fill >= minVal && !opts.has(correct + fill)) opts.add(correct + fill);
    else if (correct - fill >= minVal && !opts.has(correct - fill)) opts.add(correct - fill);
    fill++;
  }
  return shuffleArray([...opts]);
}

function q(question: string, correctAnswer: number, topic: string, minOpt = 0, isWordProblem = false): MathQuestion {
  return { question, correctAnswer, options: generateOptions(correctAnswer, minOpt), topic, isWordProblem };
}

function pick<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

// ─── PERIOD SYSTEM ─────────────────────────────

export function getPeriod(): number {
  const month = new Date().getMonth(); // 0=Jan
  if (month >= 8 && month <= 9) return 1;   // Sept-Oct
  if (month >= 10 && month <= 11) return 2;  // Nov-Dec
  if (month >= 0 && month <= 1) return 3;    // Jan-Feb
  if (month >= 2 && month <= 3) return 4;    // Mar-Apr
  if (month >= 4 && month <= 5) return 5;    // May-Jun
  return 5; // Summer → full year review
}

export function getPeriodLabel(period: number): string {
  const labels: Record<number, string> = {
    1: "Szeptember-Október",
    2: "November-December",
    3: "Január-Február",
    4: "Március-Április",
    5: "Május-Június",
  };
  return labels[period] || "Nyári ismétlés";
}

// ─── GRADE 1 GENERATORS ─────────────────────────────

const G1 = {
  add10: () => { const a = randInt(1, 8), b = randInt(1, 9 - a); return q(`${a} + ${b} = ?`, a + b, "összeadás"); },
  sub10: () => { const a = randInt(3, 10), b = randInt(1, a - 1); return q(`${a} - ${b} = ?`, a - b, "kivonás"); },
  add20: () => { const a = randInt(10, 15), b = randInt(1, 19 - a); return q(`${a} + ${b} = ?`, a + b, "összeadás 20-ig"); },
  sub20: () => { const a = randInt(11, 20), b = randInt(1, a - 10); return q(`${a} - ${b} = ?`, a - b, "kivonás 20-ig"); },
  compare: () => {
    const a = randInt(1, 20), b = a + randInt(1, 5);
    return Math.random() > 0.5
      ? q(`Melyik a nagyobb szám: ${a} vagy ${b}?`, b, "összehasonlítás")
      : q(`Melyik a nagyobb szám: ${b} vagy ${a}?`, b, "összehasonlítás");
  },
  word: () => pick([
    () => { const a = randInt(2, 7), b = randInt(1, 8 - a); return q(`Annának van ${a} almája. Kap még ${b} darabot. Hány almája van most?`, a + b, "szöveges", 0, true); },
    () => { const a = randInt(4, 10), b = randInt(1, a - 1); return q(`Petinek volt ${a} golyója. Elvesztett ${b} darabot. Hány maradt?`, a - b, "szöveges", 0, true); },
    () => { const a = randInt(3, 9), b = randInt(2, 8); return q(`Az asztalon ${a} piros és ${b} kék ceruza van. Hány ceruza van összesen?`, a + b, "szöveges", 0, true); },
    () => { const a = randInt(5, 14), b = randInt(1, a - 2); return q(`Volt ${a} sütemény. Megettünk ${b} darabot. Hány maradt?`, a - b, "szöveges", 0, true); },
    () => { const a = randInt(3, 8), b = randInt(2, 6); return q(`A buszon ${a} ember volt. A megállóban felszállt még ${b} ember. Hányan vannak a buszon?`, a + b, "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 2 GENERATORS ─────────────────────────────

const G2 = {
  add100tens: () => { const a = randInt(1, 7) * 10, b = randInt(1, 9 - a / 10) * 10; return q(`${a} + ${b} = ?`, a + b, "összeadás (tízesek)"); },
  sub100tens: () => { const a = randInt(3, 9) * 10, b = randInt(1, a / 10 - 1) * 10; return q(`${a} - ${b} = ?`, a - b, "kivonás (tízesek)"); },
  add100: () => { const a = randInt(12, 55), b = randInt(10, 98 - a); return q(`${a} + ${b} = ?`, a + b, "összeadás 100-ig"); },
  sub100: () => { const a = randInt(30, 99), b = randInt(10, a - 5); return q(`${a} - ${b} = ?`, a - b, "kivonás 100-ig"); },
  mul2510: () => {
    const m = pick([2, 5, 10]), b = randInt(1, 10);
    return q(`${m} × ${b} = ?`, m * b, "szorzás");
  },
  div2510: () => {
    const m = pick([2, 5, 10]), r = randInt(1, 10);
    return q(`${m * r} ÷ ${m} = ?`, r, "osztás");
  },
  word: () => pick([
    () => { const a = randInt(20, 50), b = randInt(10, 40); return q(`Az iskolában ${a} fiú és ${b} lány tanul. Hány gyerek jár az iskolába összesen?`, a + b, "szöveges", 0, true); },
    () => { const a = randInt(30, 80), b = randInt(10, a - 5); return q(`Katának volt ${a} forintja. Vett egy radírt ${b} forintért. Mennyi pénze maradt?`, a - b, "szöveges", 0, true); },
    () => { const a = randInt(2, 5), b = 5; return q(`${a} gyerek kap ${b}-${b} cukorkát. Hány cukorka kell összesen?`, a * b, "szöveges", 0, true); },
    () => { const a = randInt(2, 5) * 10, b = randInt(2, 4) * 10; return q(`Dani gyűjtött ${a} matricát, Lili gyűjtött ${b} matricát. Mennyivel van több Daninak, ha ${a > b ? "Daninak" : "Lilinek"} van több?`, Math.abs(a - b), "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 3 GENERATORS ─────────────────────────────

const G3 = {
  add1000: () => { const a = randInt(100, 500), b = randInt(100, 999 - a); return q(`${a} + ${b} = ?`, a + b, "összeadás 1000-ig"); },
  sub1000: () => { const a = randInt(200, 999), b = randInt(100, a - 50); return q(`${a} - ${b} = ?`, a - b, "kivonás 1000-ig"); },
  mul: () => { const a = randInt(2, 10), b = randInt(2, 10); return q(`${a} × ${b} = ?`, a * b, "szorzótábla"); },
  div: () => { const a = randInt(2, 10), r = randInt(2, 10); return q(`${a * r} ÷ ${a} = ?`, r, "osztás"); },
  writtenAdd: () => { const a = randInt(123, 567), b = randInt(111, 432); return q(`${a} + ${b} = ?`, a + b, "írásbeli összeadás"); },
  writtenSub: () => { const a = randInt(400, 999), b = randInt(100, a - 50); return q(`${a} - ${b} = ?`, a - b, "írásbeli kivonás"); },
  units: () => pick([
    () => q("1 méter hány centiméter?", 100, "mértékegységek"),
    () => q("1 kilogramm hány gramm?", 1000, "mértékegységek"),
    () => q("1 óra hány perc?", 60, "mértékegységek"),
    () => { const m = randInt(2, 5); return q(`${m} méter hány centiméter?`, m * 100, "mértékegységek"); },
    () => { const h = randInt(2, 3); return q(`${h} óra hány perc?`, h * 60, "mértékegységek"); },
  ])(),
  word: () => pick([
    () => { const a = randInt(120, 400), b = randInt(100, 300); return q(`Egy boltban ${a} alma és ${b} körte van. Hány gyümölcs van összesen?`, a + b, "szöveges", 0, true); },
    () => { const a = randInt(3, 7), b = randInt(3, 8); return q(`Egy polcon ${a} sor könyv van, soronként ${b} darab. Hány könyv van a polcon?`, a * b, "szöveges", 0, true); },
    () => { const b = pick([2, 3, 4, 6]); const r = randInt(3, 8); return q(`${b * r} cukorkát ${b} gyerek között egyenlően osztunk szét. Hányat kap egy gyerek?`, r, "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 4 GENERATORS ─────────────────────────────

const G4 = {
  placeValue: () => {
    const n = randInt(1000, 9999);
    const positions = [
      { name: "ezres", val: Math.floor(n / 1000) },
      { name: "százas", val: Math.floor((n % 1000) / 100) },
      { name: "tízes", val: Math.floor((n % 100) / 10) },
      { name: "egyes", val: n % 10 },
    ];
    const p = pick(positions);
    return q(`A ${n} szám ${p.name} helyiértékén milyen számjegy áll?`, p.val, "helyi érték");
  },
  writtenMul: () => { const a = randInt(12, 50), b = randInt(2, 9); return q(`${a} × ${b} = ?`, a * b, "írásbeli szorzás"); },
  writtenDiv: () => { const b = randInt(2, 9), r = randInt(11, 50); return q(`${b * r} ÷ ${b} = ?`, r, "írásbeli osztás"); },
  fractions: () => pick([
    () => q("Hány negyed van egy egészben?", 4, "törtek"),
    () => q("Hány fél van egy egészben?", 2, "törtek"),
    () => { const w = randInt(2, 5); return q(`${w} egész hány fél?`, w * 2, "törtek"); },
    () => { const n = randInt(1, 3); return q(`Egy pizza 4 szeletre van vágva. Megettünk ${n} szeletet. Hány szelet maradt?`, 4 - n, "törtek"); },
    () => { const n = randInt(6, 20) * 2; return q(`Mennyi ${n} fele?`, n / 2, "törtek"); },
  ])(),
  decimals: () => pick([
    () => { const a = randInt(1, 9), b = randInt(1, 9); return q(`${a},${b} + 0,${10 - b} = ?`, a + 1, "tizedes törtek"); },
    () => { const n = randInt(2, 8); return q(`${n} tized hány századrész?`, n * 10, "tizedes törtek"); },
  ])(),
  units: () => pick([
    () => { const km = randInt(2, 9); return q(`${km} km hány méter?`, km * 1000, "mértékváltás"); },
    () => { const t = randInt(2, 5); return q(`${t} tonna hány kg?`, t * 1000, "mértékváltás"); },
    () => { const l = randInt(2, 8); return q(`${l} liter hány deciliter?`, l * 10, "mértékváltás"); },
  ])(),
  word: () => pick([
    () => { const a = randInt(15, 40), b = randInt(3, 6); return q(`Egy osztályban ${a} tanuló van. ${b} egyenlő csoportba osztjuk őket. Hány fő van egy csoportban?`, Math.floor(a / b) /* ez csak pontos osztást generál: */ , "szöveges", 0, true); },
    () => { const a = randInt(12, 30), b = randInt(2, 5); return q(`Egy könyv ${a} Ft, és veszel belőle ${b} darabot. Mennyit fizetsz összesen?`, a * b, "szöveges", 0, true); },
  ])(),
};
const G4_word_fixed = () => {
  const b = pick([3, 4, 5, 6]);
  const r = randInt(4, 8);
  const a = b * r;
  return pick([
    () => q(`Egy osztályban ${a} tanuló van. ${b} egyenlő csoportba osztjuk őket. Hányan vannak egy csoportban?`, r, "szöveges", 0, true),
    () => { const price = randInt(12, 30); const cnt = randInt(2, 5); return q(`Egy füzet ${price} Ft. Veszel belőle ${cnt} darabot. Mennyit fizetsz?`, price * cnt, "szöveges", 0, true); },
  ])();
};

// ─── GRADE 5 GENERATORS ─────────────────────────────

const G5 = {
  largeNumbers: () => {
    const n = randInt(10000, 99999);
    const rounded = Math.round(n / 1000) * 1000;
    return q(`Kerekítsd ezresekre: ${n.toLocaleString("hu-HU")}`, rounded, "kerekítés");
  },
  orderOfOps: () => pick([
    () => { const a = randInt(2, 8), b = randInt(2, 5), c = randInt(1, 10); return q(`${a} × ${b} + ${c} = ?`, a * b + c, "műveleti sorrend"); },
    () => { const a = randInt(10, 30), b = randInt(2, 5), c = randInt(1, 5); return q(`${a} - ${b} × ${c} = ?`, a - b * c, "műveleti sorrend", -50); },
    () => { const a = randInt(2, 5), b = randInt(3, 8), c = randInt(2, 5); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, "műveleti sorrend"); },
  ])(),
  fractionAdd: () => {
    // Same denominator fraction addition → answer is numerator
    const d = pick([4, 6, 8, 10]);
    const a = randInt(1, d / 2), b = randInt(1, d / 2);
    return q(`${a}/${d} + ${b}/${d} = ?/${d}   A számláló:`, a + b, "tört összeadás");
  },
  fractionSub: () => {
    const d = pick([4, 6, 8]);
    const a = randInt(3, d - 1), b = randInt(1, a - 1);
    return q(`${a}/${d} - ${b}/${d} = ?/${d}   A számláló:`, a - b, "tört kivonás");
  },
  percent: () => pick([
    () => { const n = randInt(2, 10) * 100; return q(`Mennyi ${n} tíz százaléka?`, n / 10, "százalék"); },
    () => { const n = randInt(2, 10) * 100; return q(`Mennyi ${n} fele (50%-a)?`, n / 2, "százalék"); },
    () => { const n = randInt(2, 20) * 10; return q(`Mennyi ${n} negyede (25%-a)?`, n / 4, "százalék"); },
  ])(),
  geometry: () => pick([
    () => { const a = randInt(3, 12), b = randInt(3, 12); return q(`Egy téglalap oldalhosszai ${a} cm és ${b} cm. Mekkora a kerülete?`, 2 * (a + b), "geometria"); },
    () => { const a = randInt(3, 10), b = randInt(3, 10); return q(`Egy téglalap oldalhosszai ${a} cm és ${b} cm. Mekkora a területe?`, a * b, "geometria"); },
    () => { const a = randInt(3, 15); return q(`Egy négyzet oldala ${a} cm. Mekkora a kerülete?`, 4 * a, "geometria"); },
  ])(),
  word: () => pick([
    () => { const n = randInt(200, 500); const p = pick([10, 25, 50]); return q(`Egy játék ${n} Ft. ${p}% kedvezményt kapsz. Mennyit spórolsz?`, n * p / 100, "szöveges", 0, true); },
    () => { const a = randInt(5, 15), b = randInt(3, 8), c = randInt(2, 6); return q(`${a} + ${b} × ${c} = ? (Figyelj a műveleti sorrendre!)`, a + b * c, "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 6 GENERATORS ─────────────────────────────

const G6 = {
  negative: () => pick([
    () => { const a = randInt(1, 10), b = randInt(a + 1, 20); return q(`${a} - ${b} = ?`, a - b, "negatív számok", -50); },
    () => { const a = randInt(-10, -1), b = randInt(1, 10); return q(`(${a}) + ${b} = ?`, a + b, "negatív számok", -50); },
    () => { const a = randInt(-10, -1), b = randInt(-10, -1); return q(`(${a}) + (${b}) = ?`, a + b, "negatív számok", -50); },
  ])(),
  fractionMul: () => {
    // Fraction × whole → answer
    const d = pick([2, 3, 4, 5]);
    const n = randInt(1, d);
    const w = randInt(2, 6) * d; // ensure whole result
    return q(`${n}/${d} × ${w} = ?`, (n * w) / d, "tört szorzás");
  },
  fractionDiv: () => {
    const n = randInt(2, 8);
    const d = pick([2, 3, 4]);
    return q(`${n} ÷ ${d} egész maradékkal: hányszor van meg?`, Math.floor(n / d), "tört osztás");
  },
  ratio: () => pick([
    () => { const ratio = randInt(2, 5); const smaller = randInt(2, 6); const larger = smaller * ratio; return q(`Az arány 1:${ratio}. A kisebb rész ${smaller}. Mennyi a nagyobb rész?`, larger, "arányosság"); },
    () => { const speed = randInt(3, 8) * 10; const time = randInt(2, 5); return q(`Egy autó ${speed} km/h-val halad. Mekkora utat tesz meg ${time} óra alatt?`, speed * time, "arányosság"); },
  ])(),
  percent: () => pick([
    () => { const base = pick([200, 300, 400, 500, 600, 800, 1000]); const p = pick([5, 10, 15, 20, 25]); return q(`Mennyi ${base} ${p} százaléka?`, base * p / 100, "százalékszámítás"); },
    () => { const orig = randInt(100, 500); const disc = pick([10, 20, 25, 50]); return q(`Egy termék ára ${orig} Ft. ${disc}% kedvezmény után mennyit fizetsz?`, orig - orig * disc / 100, "százalékszámítás"); },
  ])(),
  area: () => pick([
    () => { const a = randInt(3, 10), h = randInt(3, 10); return q(`Egy háromszög alapja ${a} cm, magassága ${h} cm. Mekkora a területe?`, (a * h) / 2, "terület"); },
    () => { const a = randInt(3, 12); return q(`Egy négyzet oldala ${a} cm. Mekkora a területe?`, a * a, "terület"); },
  ])(),
  word: () => pick([
    () => { const price = randInt(5, 20) * 100; const disc = pick([10, 20, 25]); return q(`Egy cipő ${price} Ft. Az üzletben ${disc}%-os akció van. Mennyit fizetsz?`, price - price * disc / 100, "szöveges", 0, true); },
    () => { const km = randInt(60, 120); const h = pick([2, 3, 4]); return q(`Egy vonat ${h} óra alatt ${km * h} km-t tesz meg. Mekkora az átlagsebessége km/h-ban?`, km, "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 7 GENERATORS ─────────────────────────────

const G7 = {
  power: () => pick([
    () => { const b = randInt(2, 5), e = randInt(2, 3); return q(`${b}${e === 2 ? "²" : "³"} = ?`, Math.pow(b, e), "hatványozás"); },
    () => { const b = randInt(2, 10); return q(`${b}² = ?`, b * b, "hatványozás"); },
    () => q("10³ = ?", 1000, "hatványozás"),
  ])(),
  algebra: () => pick([
    () => { const a = randInt(2, 5), b = randInt(1, 10); return q(`Ha a = ${a}, mennyi 3a + ${b}?`, 3 * a + b, "algebra"); },
    () => { const x = randInt(2, 6); return q(`Egyszerűsítsd: 2x + 3x = ?x   Mennyi a szorzó?`, 5, "algebra"); },
    () => { const a = randInt(2, 5), b = randInt(2, 5); return q(`(${a}x)(${b}x) = ?x²   Mennyi a szorzó?`, a * b, "algebra"); },
  ])(),
  equations: () => {
    // Generate solvable equation: ax + b = c → x = (c-b)/a
    const x = randInt(1, 10);
    const a = randInt(2, 5);
    const b = randInt(1, 15);
    const c = a * x + b;
    return q(`${a}x + ${b} = ${c}. Mennyi x?`, x, "egyenletek");
  },
  triangles: () => pick([
    () => { const a = randInt(30, 80), b = randInt(30, 150 - a); return q(`Egy háromszög két szöge ${a}° és ${b}°. Mekkora a harmadik szög?`, 180 - a - b, "háromszögek"); },
    () => q("Egy egyenlő oldalú háromszög minden szöge hány fokos?", 60, "háromszögek"),
    () => { const a = randInt(20, 80); return q(`Egy egyenlő szárú háromszögben az alapon fekvő szög ${a}°. Mekkora a csúcsszög?`, 180 - 2 * a, "háromszögek"); },
  ])(),
  pythagoras: () => pick([
    () => q("Egy derékszögű háromszög befogói 3 cm és 4 cm. Mekkora az átfogó?", 5, "Pitagorasz"),
    () => q("Egy derékszögű háromszög befogói 6 cm és 8 cm. Mekkora az átfogó?", 10, "Pitagorasz"),
    () => q("Ha az átfogó 13 cm és az egyik befogó 5 cm, mekkora a másik befogó?", 12, "Pitagorasz"),
    () => q("Ha az átfogó 10 cm és az egyik befogó 6 cm, mekkora a másik befogó?", 8, "Pitagorasz"),
  ])(),
  word: () => pick([
    () => { const x = randInt(3, 12); const a = randInt(2, 4); const b = randInt(5, 20); return q(`Gondoltam egy számra. Megszoroztam ${a}-${a === 2 ? "vel" : a === 3 ? "mal" : "gyel"}, majd hozzáadtam ${b}-t. Az eredmény ${a * x + b}. Melyik számra gondoltam?`, x, "szöveges", 0, true); },
    () => { const x = randInt(2, 8); const a = randInt(2, 5); const c = a * x; return q(`Egy szám ${a}-szerese ${c}. Mekkora a szám négyzete?`, x * x, "szöveges", 0, true); },
  ])(),
};

// ─── GRADE 8 GENERATORS ─────────────────────────────

const G8 = {
  sqrt: () => pick([
    () => { const n = pick([4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]); return q(`√${n} = ?`, Math.sqrt(n), "gyökvonás"); },
    () => { const a = randInt(2, 8); const b = randInt(1, 5); return q(`√${a * a} + ${b} × 2 = ?`, a + b * 2, "gyökvonás"); },
  ])(),
  equations: () => pick([
    () => {
      const x = randInt(2, 8);
      const a = randInt(3, 6); const c = randInt(1, a - 1);
      const b = randInt(1, 10);
      const d = (a - c) * x + b;
      return q(`${a}x + ${b} = ${c}x + ${d}. Mennyi x?`, x, "egyenletek");
    },
    () => {
      const x = randInt(1, 10);
      const a = randInt(2, 5);
      const b = randInt(1, 15);
      return q(`${a}x - ${b} = ${a * x - b}. Mennyi x?`, x, "egyenletek");
    },
  ])(),
  functions: () => pick([
    () => { const m = randInt(1, 5), b = randInt(-5, 10), x = randInt(1, 6); return q(`f(x) = ${m}x + ${b}. Mennyi f(${x})?`, m * x + b, "függvények", -100); },
    () => { const m = randInt(2, 4), b = randInt(1, 10); return q(`f(x) = ${m}x + ${b}. Hol metszi az y tengelyt? (f(0) = ?)`, b, "függvények"); },
  ])(),
  probability: () => pick([
    () => { const total = pick([6, 8, 10, 12]); const good = randInt(1, total / 2); return q(`Egy dobozban ${total} golyó van, ebből ${good} piros. Hány százalék eséllyel húzol pirosat?`, Math.round(good / total * 100), "valószínűség"); },
    () => q("Egy szabályos kockával dobsz. Hány százalék eséllyel dobsz 6-ost?", 17, "valószínűség"),
    () => q("Egy érmét feldobsz. Hány százalék eséllyel lesz fej?", 50, "valószínűség"),
  ])(),
  complex: () => pick([
    () => { const a = randInt(2, 6); const sq = pick([16, 25, 36, 49]); return q(`${a}² + √${sq} = ?`, a * a + Math.sqrt(sq), "komplex"); },
    () => { const a = randInt(3, 8); const b = randInt(2, 5); return q(`Ha x = ${a}, mennyi x² - ${b}x?`, a * a - b * a, "komplex", -100); },
  ])(),
  word: () => pick([
    () => { const v = randInt(40, 80); const t = randInt(2, 5); return q(`Két város ${v * t} km-re van egymástól. Egy autó ${v} km/h-val halad. Hány óra alatt ér oda?`, t, "szöveges", 0, true); },
    () => { const p = pick([10, 15, 20, 25]); const orig = randInt(4, 12) * 100; return q(`Egy laptop ${orig} Ft volt. Az ára ${p}%-kal nőtt. Mennyibe kerül most?`, orig + orig * p / 100, "szöveges", 0, true); },
  ])(),
};

// ─── CURRICULUM MAP ─────────────────────────────
// Maps grade + period to available question generators
// period: 1=Sept-Oct, 2=Nov-Dec, 3=Jan-Feb, 4=Mar-Apr, 5=May-Jun

type Generator = () => MathQuestion;

interface PeriodTopics {
  current: Generator[];  // 70% from current topics
  review: Generator[];   // 30% from review topics
}

const CURRICULUM: Record<number, Record<number, PeriodTopics>> = {
  1: {
    1: { current: [G1.add10, G1.compare], review: [] },
    2: { current: [G1.add10, G1.sub10], review: [G1.compare] },
    3: { current: [G1.add20, G1.sub20], review: [G1.add10, G1.sub10] },
    4: { current: [G1.add20, G1.sub20, G1.word], review: [G1.add10, G1.sub10] },
    5: { current: [G1.add20, G1.sub20, G1.word, G1.compare], review: [G1.add10, G1.sub10] },
  },
  2: {
    1: { current: [G2.add100tens, G2.sub100tens], review: [G1.add20, G1.sub20] },
    2: { current: [G2.add100tens, G2.sub100tens, G2.add100], review: [G1.add20, G1.sub20] },
    3: { current: [G2.add100, G2.sub100], review: [G2.add100tens, G2.sub100tens] },
    4: { current: [G2.mul2510, G2.add100, G2.sub100], review: [G2.add100tens] },
    5: { current: [G2.mul2510, G2.div2510, G2.word], review: [G2.add100, G2.sub100] },
  },
  3: {
    1: { current: [G3.add1000, G3.sub1000], review: [G2.add100, G2.sub100, G2.mul2510] },
    2: { current: [G3.add1000, G3.sub1000, G3.writtenAdd], review: [G2.mul2510, G2.div2510] },
    3: { current: [G3.mul, G3.div], review: [G3.add1000, G3.sub1000] },
    4: { current: [G3.writtenAdd, G3.writtenSub, G3.mul], review: [G3.div] },
    5: { current: [G3.word, G3.units, G3.mul, G3.div], review: [G3.writtenAdd, G3.writtenSub] },
  },
  4: {
    1: { current: [G4.placeValue, G4.writtenMul], review: [G3.mul, G3.div, G3.writtenAdd] },
    2: { current: [G4.writtenMul, G4.writtenDiv], review: [G4.placeValue] },
    3: { current: [G4.fractions, G4.writtenMul, G4.writtenDiv], review: [G4.placeValue] },
    4: { current: [G4.decimals, G4.fractions], review: [G4.writtenMul, G4.writtenDiv] },
    5: { current: [G4.units, G4_word_fixed, G4.fractions, G4.decimals], review: [G4.writtenMul, G4.writtenDiv] },
  },
  5: {
    1: { current: [G5.largeNumbers, G5.orderOfOps], review: [G4.writtenMul, G4.writtenDiv, G4.fractions] },
    2: { current: [G5.orderOfOps, G5.fractionAdd], review: [G5.largeNumbers] },
    3: { current: [G5.fractionAdd, G5.fractionSub], review: [G5.orderOfOps, G5.largeNumbers] },
    4: { current: [G5.percent, G5.fractionAdd], review: [G5.orderOfOps] },
    5: { current: [G5.geometry, G5.percent, G5.word], review: [G5.fractionAdd, G5.fractionSub] },
  },
  6: {
    1: { current: [G6.negative, G6.fractionMul], review: [G5.percent, G5.orderOfOps] },
    2: { current: [G6.fractionMul, G6.fractionDiv], review: [G6.negative] },
    3: { current: [G6.ratio, G6.percent], review: [G6.negative, G6.fractionMul] },
    4: { current: [G6.percent, G6.area], review: [G6.ratio] },
    5: { current: [G6.area, G6.percent, G6.word], review: [G6.negative, G6.fractionMul, G6.ratio] },
  },
  7: {
    1: { current: [G7.power, G7.algebra], review: [G6.percent, G6.negative] },
    2: { current: [G7.algebra, G7.equations], review: [G7.power] },
    3: { current: [G7.equations, G7.triangles], review: [G7.power, G7.algebra] },
    4: { current: [G7.triangles, G7.pythagoras], review: [G7.equations] },
    5: { current: [G7.pythagoras, G7.word, G7.equations], review: [G7.power, G7.algebra, G7.triangles] },
  },
  8: {
    1: { current: [G8.sqrt, G8.equations], review: [G7.power, G7.equations] },
    2: { current: [G8.equations, G8.functions], review: [G8.sqrt] },
    3: { current: [G8.functions, G8.probability], review: [G8.sqrt, G8.equations] },
    4: { current: [G8.probability, G8.complex], review: [G8.functions] },
    5: { current: [G8.complex, G8.word, G8.probability], review: [G8.sqrt, G8.equations, G8.functions] },
  },
};

// ─── TEST GENERATION ─────────────────────────────

const TOTAL_QUESTIONS = 10;

export function generateTest(grade: number, period?: number): MathQuestion[] {
  const p = period ?? getPeriod();
  const topics = CURRICULUM[grade]?.[p];
  if (!topics) return [];

  const questions: MathQuestion[] = [];
  const currentCount = Math.ceil(TOTAL_QUESTIONS * 0.7); // 7 current topic questions
  const reviewCount = TOTAL_QUESTIONS - currentCount;     // 3 review questions

  // Generate current topic questions
  for (let i = 0; i < currentCount; i++) {
    const gen = topics.current[i % topics.current.length];
    questions.push(gen());
  }

  // Generate review questions
  const reviewGens = topics.review.length > 0 ? topics.review : topics.current;
  for (let i = 0; i < reviewCount; i++) {
    const gen = reviewGens[i % reviewGens.length];
    questions.push(gen());
  }

  return shuffleArray(questions);
}

// ─── GRADING (uses locale system) ─────────────────────────────

import { getCountryByCode, getSavedCountry, type MarkResult } from "./mathLocale";

export interface GradeResult {
  score: number;
  total: number;
  percentage: number;
  mark: MarkResult;  // country-specific mark (display, label, color, emoji)
}

export function calculateGradeResult(score: number, total: number): GradeResult {
  const percentage = Math.round((score / total) * 100);
  const countryCode = getSavedCountry() || "HU";
  const country = getCountryByCode(countryCode);
  const mark = country.calculateMark(percentage);
  return { score, total, percentage, mark };
}

// ─── STATS ─────────────────────────────

const MATH_STATS_KEY = "plizio_math_stats";
const MATH_GRADE_KEY = "plizio_math_grade";

export interface MathStats {
  grade: number;
  testsCompleted: number;
  bestPercentage: number;
  topicAccuracy: Record<string, { correct: number; total: number }>;
}

export function getMathGrade(): number | null {
  if (typeof window === "undefined") return null;
  const g = localStorage.getItem(MATH_GRADE_KEY);
  return g ? parseInt(g, 10) : null;
}

export function saveMathGrade(grade: number): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(MATH_GRADE_KEY, grade.toString());
  }
}

export function getMathStats(): MathStats | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(MATH_STATS_KEY);
  return data ? JSON.parse(data) : null;
}

export function updateMathStats(
  grade: number,
  percentage: number,
  topicResults: { topic: string; correct: boolean }[]
): void {
  const existing = getMathStats() || {
    grade,
    testsCompleted: 0,
    bestPercentage: 0,
    topicAccuracy: {},
  };

  existing.grade = grade;
  existing.testsCompleted += 1;
  existing.bestPercentage = Math.max(existing.bestPercentage, percentage);

  for (const r of topicResults) {
    if (!existing.topicAccuracy[r.topic]) {
      existing.topicAccuracy[r.topic] = { correct: 0, total: 0 };
    }
    existing.topicAccuracy[r.topic].total += 1;
    if (r.correct) existing.topicAccuracy[r.topic].correct += 1;
  }

  localStorage.setItem(MATH_STATS_KEY, JSON.stringify(existing));
}

export function getWeakTopics(): string[] {
  const stats = getMathStats();
  if (!stats) return [];
  const weak: string[] = [];
  for (const [topic, data] of Object.entries(stats.topicAccuracy)) {
    if (data.total >= 3 && data.correct / data.total < 0.5) {
      weak.push(topic);
    }
  }
  return weak;
}
