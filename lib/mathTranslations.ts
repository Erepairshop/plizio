// ─── MATH TRANSLATIONS ─────────────────────────────
// All translatable text for math test, keyed by country code
// Supports: HU, DE, EN (US/GB), RO

export type Lang = "HU" | "DE" | "EN" | "RO";

export function getLang(countryCode: string): Lang {
  if (countryCode === "DE" || countryCode === "AT" || countryCode === "CH") return "DE";
  if (countryCode === "RO") return "RO";
  if (countryCode === "US" || countryCode === "GB") return "EN";
  return "HU";
}

// ─── PERIOD LABELS ─────────────────────────────

const periodLabels: Record<Lang, Record<number, string>> = {
  HU: { 1: "Szeptember–Október", 2: "November–December", 3: "Január–Február", 4: "Március–Április", 5: "Május–Június" },
  DE: { 1: "September–Oktober", 2: "November–Dezember", 3: "Januar–Februar", 4: "März–April", 5: "Mai–Juni" },
  EN: { 1: "September–October", 2: "November–December", 3: "January–February", 4: "March–April", 5: "May–June" },
  RO: { 1: "Septembrie–Octombrie", 2: "Noiembrie–Decembrie", 3: "Ianuarie–Februarie", 4: "Martie–Aprilie", 5: "Mai–Iunie" },
};

const summerReview: Record<Lang, string> = {
  HU: "Nyári ismétlés", DE: "Sommerwiederholung", EN: "Summer review", RO: "Recapitulare de vară",
};

export function getTranslatedPeriodLabel(period: number, countryCode: string): string {
  const lang = getLang(countryCode);
  return periodLabels[lang][period] || summerReview[lang];
}

// ─── TOPIC NAMES ─────────────────────────────

const topicNames: Record<Lang, Record<string, string>> = {
  HU: {
    addition: "összeadás",
    subtraction: "kivonás",
    addition20: "összeadás 20-ig",
    subtraction20: "kivonás 20-ig",
    comparison: "összehasonlítás",
    wordProblem: "szöveges",
    additionTens: "összeadás (tízesek)",
    subtractionTens: "kivonás (tízesek)",
    addition100: "összeadás 100-ig",
    subtraction100: "kivonás 100-ig",
    multiplication: "szorzás",
    division: "osztás",
    addition1000: "összeadás 1000-ig",
    subtraction1000: "kivonás 1000-ig",
    multTable: "szorzótábla",
    writtenAdd: "írásbeli összeadás",
    writtenSub: "írásbeli kivonás",
    units: "mértékegységek",
    placeValue: "helyi érték",
    writtenMul: "írásbeli szorzás",
    writtenDiv: "írásbeli osztás",
    fractions: "törtek",
    decimals: "tizedes törtek",
    unitConversion: "mértékváltás",
    rounding: "kerekítés",
    orderOfOps: "műveleti sorrend",
    fractionAdd: "tört összeadás",
    fractionSub: "tört kivonás",
    percent: "százalék",
    geometry: "geometria",
    negativeNumbers: "negatív számok",
    fractionMul: "tört szorzás",
    fractionDiv: "tört osztás",
    ratio: "arányosság",
    percentCalc: "százalékszámítás",
    area: "terület",
    powers: "hatványozás",
    algebra: "algebra",
    equations: "egyenletek",
    triangles: "háromszögek",
    pythagoras: "Pitagorasz",
    squareRoot: "gyökvonás",
    functions: "függvények",
    probability: "valószínűség",
    complex: "komplex",
    numberSequence: "számsorozat",
    missingNumber: "hiányzó szám",
    volumeUnits: "űrmérték",
    timeCalc: "időszámítás",
    symmetry: "szimmetria",
    perimeter: "kerület",
    divisibility: "oszthatóság",
    numberWall: "számpiramis",
    chainCalc: "műveleti lánc",
    placeValueNotation: "helyi érték jelölés",
    timeDuration: "időtartam",
    expandedForm: "szám felbontás",
    moneyChange: "pénzvisszaadás",
    doubling: "duplázás",
    missingDigit: "hiányzó számjegy",
    multComparison: "szorzatos összehasonlítás",
    neighborNumber: "szomszédos szám",
    imperialUnits: "mértékegységek",
    ampmTime: "időolvasás",
    circle: "kör",
    mean: "átlag",
    primes: "prímszámok",
    lcmGcd: "LKKT / LNKO",
    inequality: "egyenlőtlenség",
    clockReading: "óraolvasás",
    g1NumberLine: "számegyenes",
    g1PlaceValue: "helyiérték",
    g1GridCount: "négyzetek számolása",
    g1Sequence: "számsor",
    g1Coins: "érmék számolása",
    g1Timeline: "időtartam (órák)",
    g1Fraction: "részek számolása",
    evenOdd: "páros / páratlan",
    g1Zaehlen: "számolás 0–10",
    g1Vorgaenger: "előző / következő szám",
    g1Tausch: "felcserélés / visszafordítás",
    g1Zahlzerlegung: "számfelbontás",
    g1Verdoppeln: "kétszereselés",
    g1Halbieren: "felezés",
    g1Shapes: "alakzatok",
    g1Laenger: "hosszabb / rövidebb",
    g1Wochentage: "napok",
    g1PlaceValue20: "tízes és egyes (11–20)",
    g1Spatial: "térbeli irányok",
    g1Weight: "súly összehasonlítás",
    g1Volume: "térfogat összehasonlítás",
    g1Pattern: "minta folytatás",
    g1NumberOrder: "számok sorrendje",
    g1DataTable: "adatok olvasása",
    g1VisualCount: "vizuális számolás",
    statistics: "statisztika",
    volume: "térfogat",
    rounding10: "kerekítés 10-esre",
    rounding100: "kerekítés 100-asra",
    fractionDiffDenom: "tört különböző nevezővel",
    systemEq: "egyenletrendszer",
  },
  DE: {
    addition: "Addition",
    subtraction: "Subtraktion",
    addition20: "Addition bis 20",
    subtraction20: "Subtraktion bis 20",
    comparison: "Vergleichen",
    wordProblem: "Sachaufgabe",
    additionTens: "Addition (Zehner)",
    subtractionTens: "Subtraktion (Zehner)",
    addition100: "Addition bis 100",
    subtraction100: "Subtraktion bis 100",
    multiplication: "Multiplikation",
    division: "Division",
    addition1000: "Addition bis 1000",
    subtraction1000: "Subtraktion bis 1000",
    multTable: "Einmaleins",
    writtenAdd: "Schriftliche Addition",
    writtenSub: "Schriftliche Subtraktion",
    units: "Maßeinheiten",
    placeValue: "Stellenwert",
    writtenMul: "Schriftliche Multiplikation",
    writtenDiv: "Schriftliche Division",
    fractions: "Brüche",
    decimals: "Dezimalzahlen",
    unitConversion: "Größenumrechnung",
    rounding: "Runden",
    orderOfOps: "Rechenregeln",
    fractionAdd: "Brüche addieren",
    fractionSub: "Brüche subtrahieren",
    percent: "Prozentrechnung",
    geometry: "Geometrie",
    negativeNumbers: "Negative Zahlen",
    fractionMul: "Brüche multiplizieren",
    fractionDiv: "Brüche dividieren",
    ratio: "Proportionalität",
    percentCalc: "Prozentrechnung",
    area: "Flächeninhalt",
    powers: "Potenzrechnung",
    algebra: "Algebra",
    equations: "Gleichungen",
    triangles: "Dreiecke",
    pythagoras: "Pythagoras",
    squareRoot: "Wurzelrechnung",
    functions: "Funktionen",
    probability: "Wahrscheinlichkeit",
    complex: "Gemischte Aufgaben",
    numberSequence: "Zahlenreihe",
    missingNumber: "Fehlende Zahl",
    volumeUnits: "Hohlmaße",
    timeCalc: "Zeitrechnung",
    symmetry: "Symmetrie",
    perimeter: "Umfang",
    divisibility: "Teilbarkeit",
    numberWall: "Zahlenmauer",
    chainCalc: "Kettenaufgabe",
    placeValueNotation: "Stellenwertschreibweise",
    timeDuration: "Zeitspanne",
    expandedForm: "Zahlenzerlegung",
    moneyChange: "Wechselgeld",
    doubling: "Verdoppeln",
    missingDigit: "Fehlende Ziffer",
    multComparison: "Multiplikativer Vergleich",
    neighborNumber: "Nachbarzahlen",
    imperialUnits: "Maßeinheiten",
    ampmTime: "Uhrzeitlsen",
    circle: "Kreis",
    mean: "Mittelwert",
    primes: "Primzahlen",
    lcmGcd: "kgV / ggT",
    inequality: "Ungleichungen",
    clockReading: "Uhrzeit",
    g1NumberLine: "Zahlenstrahl",
    g1PlaceValue: "Stellenwert",
    g1GridCount: "Kästchen zählen",
    g1Sequence: "Zahlenreihe",
    g1Coins: "Münzen zählen",
    g1Timeline: "Zeitdauer (Stunden)",
    g1Fraction: "Teile zählen",
    evenOdd: "gerade / ungerade",
    g1Zaehlen: "Zählen bis 10",
    g1Vorgaenger: "Vorgänger / Nachfolger",
    g1Tausch: "Tausch- und Umkehraufgaben",
    g1Zahlzerlegung: "Zahlzerlegung",
    g1Verdoppeln: "Verdoppeln",
    g1Halbieren: "Halbieren",
    g1Shapes: "Formen",
    g1Laenger: "länger / kürzer",
    g1Wochentage: "Wochentage",
    g1PlaceValue20: "Zehner und Einer (11–20)",
    g1Spatial: "Richtungen",
    g1Weight: "Gewicht vergleichen",
    g1Volume: "Mengen vergleichen",
    g1Pattern: "Muster fortsetzen",
    g1NumberOrder: "Zahlen ordnen",
    g1DataTable: "Daten lesen",
    g1VisualCount: "Mengen erkennen",
    statistics: "Statistik",
    volume: "Volumen",
    rounding10: "Runden auf Zehner",
    rounding100: "Runden auf Hunderter",
    fractionDiffDenom: "Brüche mit versch. Nenner",
    systemEq: "Gleichungssystem",
  },
  EN: {
    addition: "addition",
    subtraction: "subtraction",
    addition20: "addition to 20",
    subtraction20: "subtraction to 20",
    comparison: "comparison",
    wordProblem: "word problem",
    additionTens: "addition (tens)",
    subtractionTens: "subtraction (tens)",
    addition100: "addition to 100",
    subtraction100: "subtraction to 100",
    multiplication: "multiplication",
    division: "division",
    addition1000: "addition to 1000",
    subtraction1000: "subtraction to 1000",
    multTable: "times tables",
    writtenAdd: "written addition",
    writtenSub: "written subtraction",
    units: "units",
    placeValue: "place value",
    writtenMul: "written multiplication",
    writtenDiv: "written division",
    fractions: "fractions",
    decimals: "decimals",
    unitConversion: "unit conversion",
    rounding: "rounding",
    orderOfOps: "order of operations",
    fractionAdd: "adding fractions",
    fractionSub: "subtracting fractions",
    percent: "percentages",
    geometry: "geometry",
    negativeNumbers: "negative numbers",
    fractionMul: "multiplying fractions",
    fractionDiv: "dividing fractions",
    ratio: "ratio & proportion",
    percentCalc: "percentage calculations",
    area: "area",
    powers: "powers",
    algebra: "algebra",
    equations: "equations",
    triangles: "triangles",
    pythagoras: "Pythagoras",
    squareRoot: "square roots",
    functions: "functions",
    probability: "probability",
    complex: "mixed problems",
    numberSequence: "number sequence",
    missingNumber: "missing number",
    volumeUnits: "volume units",
    timeCalc: "time calculations",
    symmetry: "symmetry",
    perimeter: "perimeter",
    divisibility: "divisibility",
    numberWall: "number wall",
    chainCalc: "chain calculation",
    placeValueNotation: "place value notation",
    timeDuration: "time duration",
    expandedForm: "expanded form",
    moneyChange: "making change",
    doubling: "doubling",
    missingDigit: "missing digit",
    multComparison: "multiplicative comparison",
    neighborNumber: "neighbor number",
    imperialUnits: "imperial units",
    ampmTime: "AM/PM time",
    circle: "circle",
    mean: "mean",
    primes: "prime numbers",
    lcmGcd: "LCM / GCD",
    inequality: "inequalities",
    clockReading: "clock reading",
    g1NumberLine: "number line",
    g1PlaceValue: "place value",
    g1GridCount: "counting squares",
    g1Sequence: "number sequence",
    g1Coins: "counting coins",
    g1Timeline: "time duration (hours)",
    g1Fraction: "counting parts",
    evenOdd: "even / odd",
    g1Zaehlen: "counting to 10",
    g1Vorgaenger: "before / after",
    g1Tausch: "swap / inverse tasks",
    g1Zahlzerlegung: "number bonds",
    g1Verdoppeln: "doubling",
    g1Halbieren: "halving",
    g1Shapes: "shapes",
    g1Laenger: "longer / shorter",
    g1Wochentage: "days of the week",
    g1PlaceValue20: "tens and ones (11–20)",
    g1Spatial: "directions",
    g1Weight: "weight comparison",
    g1Volume: "volume comparison",
    g1Pattern: "pattern continuation",
    g1NumberOrder: "number ordering",
    g1DataTable: "reading data",
    g1VisualCount: "visual counting",
    statistics: "statistics",
    volume: "volume",
    rounding10: "rounding to 10",
    rounding100: "rounding to 100",
    fractionDiffDenom: "fractions (unlike denominators)",
    systemEq: "systems of equations",
  },
  RO: {
    addition: "adunare",
    subtraction: "scădere",
    addition20: "adunare până la 20",
    subtraction20: "scădere până la 20",
    comparison: "comparare",
    wordProblem: "problemă",
    additionTens: "adunare (zeci)",
    subtractionTens: "scădere (zeci)",
    addition100: "adunare până la 100",
    subtraction100: "scădere până la 100",
    multiplication: "înmulțire",
    division: "împărțire",
    addition1000: "adunare până la 1000",
    subtraction1000: "scădere până la 1000",
    multTable: "tabla înmulțirii",
    writtenAdd: "adunare în scris",
    writtenSub: "scădere în scris",
    units: "unități de măsură",
    placeValue: "valoare pozițională",
    writtenMul: "înmulțire în scris",
    writtenDiv: "împărțire în scris",
    fractions: "fracții",
    decimals: "numere zecimale",
    unitConversion: "transformări",
    rounding: "rotunjire",
    orderOfOps: "ordinea operațiilor",
    fractionAdd: "adunarea fracțiilor",
    fractionSub: "scăderea fracțiilor",
    percent: "procente",
    geometry: "geometrie",
    negativeNumbers: "numere negative",
    fractionMul: "înmulțirea fracțiilor",
    fractionDiv: "împărțirea fracțiilor",
    ratio: "proporționalitate",
    percentCalc: "calcul procentual",
    area: "arie",
    powers: "puteri",
    algebra: "algebră",
    equations: "ecuații",
    triangles: "triunghiuri",
    pythagoras: "Pitagora",
    squareRoot: "radical",
    functions: "funcții",
    probability: "probabilitate",
    complex: "probleme complexe",
    numberSequence: "șir de numere",
    missingNumber: "număr lipsă",
    volumeUnits: "unități de volum",
    timeCalc: "calcul cu timp",
    symmetry: "simetrie",
    perimeter: "perimetru",
    divisibility: "divizibilitate",
    numberWall: "piramida numerelor",
    chainCalc: "lanț de calcul",
    placeValueNotation: "scrierea valorii poziționale",
    timeDuration: "durată",
    expandedForm: "descompunere",
    moneyChange: "rest la plată",
    doubling: "dublare",
    missingDigit: "cifră lipsă",
    multComparison: "comparație multiplicativă",
    neighborNumber: "numere vecine",
    imperialUnits: "unități de măsură",
    ampmTime: "citirea orei",
    circle: "cerc",
    mean: "medie aritmetică",
    primes: "numere prime",
    lcmGcd: "c.m.m.m.c / c.m.m.d.c",
    inequality: "inecuații",
    clockReading: "citirea orei",
    g1NumberLine: "dreapta numerelor",
    g1PlaceValue: "valoare pozițională",
    g1GridCount: "numărarea pătratelor",
    g1Sequence: "șir de numere",
    g1Coins: "numărarea monedelor",
    g1Timeline: "durată (ore)",
    g1Fraction: "numărarea părților",
    evenOdd: "par / impar",
    g1Zaehlen: "numărare până la 10",
    g1Vorgaenger: "înainte / după",
    g1Tausch: "comutativitate / inversare",
    g1Zahlzerlegung: "descompunerea numerelor",
    g1Verdoppeln: "dublare",
    g1Halbieren: "înjumătățire",
    g1Shapes: "forme geometrice",
    g1Laenger: "mai lung / mai scurt",
    g1Wochentage: "zilele săptămânii",
    g1PlaceValue20: "zeci și unități (11–20)",
    g1Spatial: "direcții spațiale",
    g1Weight: "comparare greutăți",
    g1Volume: "comparare volume",
    g1Pattern: "continuarea tiparului",
    g1NumberOrder: "ordonarea numerelor",
    g1DataTable: "citirea datelor",
    g1VisualCount: "numărare vizuală",
    statistics: "statistică",
    volume: "volum",
    rounding10: "rotunjire la 10",
    rounding100: "rotunjire la 100",
    fractionDiffDenom: "fracții cu numitori diferiți",
    systemEq: "sistem de ecuații",
  },
};

export function t(topicKey: string, countryCode: string): string {
  const lang = getLang(countryCode);
  return topicNames[lang][topicKey] || topicNames.HU[topicKey] || topicKey;
}

// ─── QUESTION TEXT TEMPLATES ─────────────────────────────
// Functions that generate question text in the correct language

// Names for word problems
const names: Record<Lang, { girls: string[]; boys: string[] }> = {
  HU: { girls: ["Anna", "Kata", "Lili", "Zsófi", "Emma"], boys: ["Peti", "Dani", "Bence", "Máté", "Gábor"] },
  DE: { girls: ["Anna", "Lena", "Marie", "Sophie", "Emma"], boys: ["Ben", "Leon", "Max", "Paul", "Tim"] },
  EN: { girls: ["Emma", "Lily", "Sophie", "Anna", "Mia"], boys: ["Jack", "Tom", "Ben", "Max", "Sam"] },
  RO: { girls: ["Ana", "Maria", "Elena", "Ioana", "Sofia"], boys: ["Andrei", "Mihai", "Alex", "Dan", "Radu"] },
};

export function getNames(countryCode: string) {
  const lang = getLang(countryCode);
  return names[lang];
}

// Currency
const currency: Record<Lang, string> = {
  HU: "Ft", DE: "€", EN: "$", RO: "lei",
};

export function getCurrency(countryCode: string): string {
  const lang = getLang(countryCode);
  return currency[lang];
}

// ─── COMPARISON ─────────────────────────────

export function qCompare(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welche Zahl ist größer: ${a} oder ${b}?`;
    case "EN": return `Which number is bigger: ${a} or ${b}?`;
    case "RO": return `Care număr este mai mare: ${a} sau ${b}?`;
    default: return `Melyik a nagyobb szám: ${a} vagy ${b}?`;
  }
}

// ─── WORD PROBLEM TEMPLATES ─────────────────────────────

// Grade 1-2 simple word problems
export function wpHasFruit(name: string, fruit: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hat ${a} ${fruit}. ${name} bekommt noch ${b}. Wie viele hat ${name} jetzt?`;
    case "EN": return `${name} has ${a} ${fruit}. ${name} gets ${b} more. How many does ${name} have now?`;
    case "RO": return `${name} are ${a} ${fruit}. Primește încă ${b}. Câte are acum?`;
    default: return `${name} ${a} ${fruit} van. Kap még ${b} darabot. Hány van most összesen?`;
  }
}

export function wpLostItems(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hatte ${a} ${item}. ${name} hat ${b} verloren. Wie viele sind übrig?`;
    case "EN": return `${name} had ${a} ${item}. ${name} lost ${b}. How many are left?`;
    case "RO": return `${name} avea ${a} ${item}. A pierdut ${b}. Câte au rămas?`;
    default: return `${name} ${a} ${item} volt. Elvesztett ${b} darabot. Hány maradt?`;
  }
}

export function wpColoredItems(colorA: string, countA: number, colorB: string, countB: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Tisch liegen ${countA} ${colorA} und ${countB} ${colorB} ${item}. Wie viele ${item} sind es insgesamt?`;
    case "EN": return `On the table there are ${countA} ${colorA} and ${countB} ${colorB} ${item}. How many ${item} in total?`;
    case "RO": return `Pe masă sunt ${countA} ${item} ${colorA} și ${countB} ${colorB}. Câte ${item} sunt în total?`;
    default: return `Az asztalon ${countA} ${colorA} és ${countB} ${colorB} ${item} van. Hány ${item} van összesen?`;
  }
}

export function wpAte(a: number, b: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es gab ${a} ${item}. Wir haben ${b} gegessen. Wie viele sind übrig?`;
    case "EN": return `There were ${a} ${item}. We ate ${b}. How many are left?`;
    case "RO": return `Erau ${a} ${item}. Am mâncat ${b}. Câte au rămas?`;
    default: return `Volt ${a} ${item}. Megettünk ${b} darabot. Hány maradt?`;
  }
}

export function wpBus(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Bus waren ${a} Personen. An der Haltestelle steigen ${b} ein. Wie viele sind jetzt im Bus?`;
    case "EN": return `There were ${a} people on the bus. ${b} more got on. How many are on the bus now?`;
    case "RO": return `În autobuz erau ${a} persoane. Au urcat încă ${b}. Câte persoane sunt acum?`;
    default: return `A buszon ${a} ember volt. A megállóban felszállt még ${b} ember. Hányan vannak a buszon?`;
  }
}

// Grade 2-3 word problems
export function wpSchool(boys: number, girls: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In der Schule lernen ${boys} Jungen und ${girls} Mädchen. Wie viele Kinder sind es insgesamt?`;
    case "EN": return `In the school there are ${boys} boys and ${girls} girls. How many children in total?`;
    case "RO": return `La școală învață ${boys} băieți și ${girls} fete. Câți copii sunt în total?`;
    default: return `Az iskolában ${boys} fiú és ${girls} lány tanul. Hány gyerek jár az iskolába összesen?`;
  }
}

export function wpBought(name: string, item: string, total: number, price: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hatte ${total} ${cur}. ${name} kauft einen ${item} für ${price} ${cur}. Wie viel Geld bleibt übrig?`;
    case "EN": return `${name} had ${total} ${cur}. ${name} bought a ${item} for ${price} ${cur}. How much money is left?`;
    case "RO": return `${name} avea ${total} ${cur}. A cumpărat un ${item} cu ${price} ${cur}. Câți bani au rămas?`;
    default: return `${name} ${total} ${cur} volt. Vett egy ${item} ${price} ${cur}-ért. Mennyi pénze maradt?`;
  }
}

export function wpShare(count: number, kids: number, each: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${count} ${item} werden gleichmäßig auf ${kids} Kinder verteilt. Wie viele bekommt jedes Kind?`;
    case "EN": return `${count} ${item} are shared equally among ${kids} children. How many does each child get?`;
    case "RO": return `${count} ${item} se împart în mod egal la ${kids} copii. Câte primește fiecare?`;
    default: return `${count} ${item} ${kids} gyerek között egyenlően osztunk szét. Hányat kap egy gyerek?`;
  }
}

export function wpEachGets(kids: number, each: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${kids} Kinder bekommen jeweils ${each} ${item}. Wie viele ${item} braucht man insgesamt?`;
    case "EN": return `${kids} children each get ${each} ${item}. How many ${item} are needed in total?`;
    case "RO": return `${kids} copii primesc câte ${each} ${item}. Câte ${item} trebuie în total?`;
    default: return `${kids} gyerek kap ${each}-${each} ${item}. Hány ${item} kell összesen?`;
  }
}

// ─── UNITS / MEASUREMENT ─────────────────────────────

export function qHowManyCmInM(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Zentimeter hat ein Meter?";
    case "EN": return "How many centimeters are in 1 meter?";
    case "RO": return "Câți centimetri are un metru?";
    default: return "1 méter hány centiméter?";
  }
}

export function qHowManyGInKg(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Gramm hat ein Kilogramm?";
    case "EN": return "How many grams are in 1 kilogram?";
    case "RO": return "Câte grame are un kilogram?";
    default: return "1 kilogramm hány gramm?";
  }
}

export function qHowManyMinInH(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Minuten hat eine Stunde?";
    case "EN": return "How many minutes are in 1 hour?";
    case "RO": return "Câte minute are o oră?";
    default: return "1 óra hány perc?";
  }
}

export function qMetersInCm(m: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${m} Meter = wie viele Zentimeter?`;
    case "EN": return `${m} meters = how many centimeters?`;
    case "RO": return `${m} metri = câți centimetri?`;
    default: return `${m} méter hány centiméter?`;
  }
}

export function qHoursInMin(h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${h} Stunden = wie viele Minuten?`;
    case "EN": return `${h} hours = how many minutes?`;
    case "RO": return `${h} ore = câte minute?`;
    default: return `${h} óra hány perc?`;
  }
}

export function qMlInL(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Milliliter hat ein Liter?";
    case "EN": return "How many milliliters are in 1 liter?";
    case "RO": return "Câți mililitri are un litru?";
    default: return "1 liter hány milliliter?";
  }
}

export function qLiterToMl(l: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${l} Liter = wie viele Milliliter?`;
    case "EN": return `${l} liters = how many milliliters?`;
    case "RO": return `${l} litri = câți mililitri?`;
    default: return `${l} liter hány milliliter?`;
  }
}

export function qKmToM(km: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${km} km = wie viele Meter?`;
    case "EN": return `${km} km = how many meters?`;
    case "RO": return `${km} km = câți metri?`;
    default: return `${km} km hány méter?`;
  }
}

export function qTonToKg(t: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${t} Tonnen = wie viele Kilogramm?`;
    case "EN": return `${t} tonnes = how many kilograms?`;
    case "RO": return `${t} tone = câte kilograme?`;
    default: return `${t} tonna hány kg?`;
  }
}

export function qLiterToDl(l: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${l} Liter = wie viele Deziliter?`;
    case "EN": return `${l} liters = how many deciliters?`;
    case "RO": return `${l} litri = câți decilitri?`;
    default: return `${l} liter hány deciliter?`;
  }
}

// ─── IMPERIAL UNITS (US only) ─────────────────────────────

export function qHowManyInchesInFoot(countryCode: string): string {
  return "How many inches are in 1 foot?";
}

export function qHowManyFeetInYard(countryCode: string): string {
  return "How many feet are in 1 yard?";
}

export function qHowManyOzInLb(countryCode: string): string {
  return "How many ounces are in 1 pound?";
}

export function qFeetToInches(ft: number, countryCode: string): string {
  return `${ft} feet = how many inches?`;
}

export function qYardsToFeet(yd: number, countryCode: string): string {
  return `${yd} yards = how many feet?`;
}

export function qLbToOz(lb: number, countryCode: string): string {
  return `${lb} pounds = how many ounces?`;
}

// ─── AM/PM TIME (US only) ─────────────────────────────

export function qAmPmElapsed(startH: number, endH: number, countryCode: string): string {
  return `School starts at ${startH}:00 AM and ends at ${endH}:00 PM. How many hours is the school day?`;
}

export function qAmPmAddHours(startH: number, addH: number, isAm: boolean, countryCode: string): string {
  const period = isAm ? "AM" : "PM";
  return `It is ${startH}:00 ${period}. What hour will it be ${addH} hours later?`;
}

export function qAmPmActivityEnd(startH: number, durH: number, countryCode: string): string {
  return `An activity starts at ${startH}:00 PM and lasts ${durH} hours. What hour does it end? (PM)`;
}

// ─── PLACE VALUE ─────────────────────────────

const placeValueNames: Record<Lang, Record<string, string>> = {
  HU: { ones: "egyes", tens: "tízes", hundreds: "százas", thousands: "ezres" },
  DE: { ones: "Einer", tens: "Zehner", hundreds: "Hunderter", thousands: "Tausender" },
  EN: { ones: "ones", tens: "tens", hundreds: "hundreds", thousands: "thousands" },
  RO: { ones: "unități", tens: "zeci", hundreds: "sute", thousands: "mii" },
};

export function qPlaceValue(n: number, place: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const placeName = placeValueNames[lang][place] || place;
  switch (lang) {
    case "DE": return `Welche Ziffer steht bei ${n} an der ${placeName}-Stelle?`;
    case "EN": return `What digit is in the ${placeName} place of ${n}?`;
    case "RO": return `Ce cifră este la ${placeName} în numărul ${n}?`;
    default: return `A ${n} szám ${placeName} helyiértékén milyen számjegy áll?`;
  }
}

// ─── FRACTIONS ─────────────────────────────

export function qHowManyQuartersInWhole(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Viertel ergeben ein Ganzes?";
    case "EN": return "How many quarters make a whole?";
    case "RO": return "Câte sferturi are un întreg?";
    default: return "Hány negyed van egy egészben?";
  }
}

export function qHowManyHalvesInWhole(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Hälften ergeben ein Ganzes?";
    case "EN": return "How many halves make a whole?";
    case "RO": return "Câte jumătăți are un întreg?";
    default: return "Hány fél van egy egészben?";
  }
}

export function qWholeToHalves(w: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${w} Ganze = wie viele Hälften?`;
    case "EN": return `${w} wholes = how many halves?`;
    case "RO": return `${w} întregi = câte jumătăți?`;
    default: return `${w} egész hány fél?`;
  }
}

export function qPizzaSlices(eaten: number, total: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Eine Pizza ist in ${total} Stücke geschnitten. Wir haben ${eaten} gegessen. Wie viele Stücke sind übrig?`;
    case "EN": return `A pizza is cut into ${total} slices. We ate ${eaten}. How many slices are left?`;
    case "RO": return `O pizza este tăiată în ${total} felii. Am mâncat ${eaten}. Câte felii au rămas?`;
    default: return `Egy pizza ${total} szeletre van vágva. Megettünk ${eaten} szeletet. Hány szelet maradt?`;
  }
}

export function qHalfOf(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Was ist die Hälfte von ${n}?`;
    case "EN": return `What is half of ${n}?`;
    case "RO": return `Cât este jumătate din ${n}?`;
    default: return `Mennyi ${n} fele?`;
  }
}

export function qFractionNumerator(a: number, b: number, d: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}/${d} + ${b}/${d} = ?/${d}   Der Zähler ist:`;
    case "EN": return `${a}/${d} + ${b}/${d} = ?/${d}   The numerator is:`;
    case "RO": return `${a}/${d} + ${b}/${d} = ?/${d}   Numărătorul este:`;
    default: return `${a}/${d} + ${b}/${d} = ?/${d}   A számláló:`;
  }
}

export function qFractionSubNumerator(a: number, b: number, d: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}/${d} - ${b}/${d} = ?/${d}   Der Zähler ist:`;
    case "EN": return `${a}/${d} - ${b}/${d} = ?/${d}   The numerator is:`;
    case "RO": return `${a}/${d} - ${b}/${d} = ?/${d}   Numărătorul este:`;
    default: return `${a}/${d} - ${b}/${d} = ?/${d}   A számláló:`;
  }
}

// ─── DECIMALS ─────────────────────────────

export function qTenthsToHundredths(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} Zehntel = wie viele Hundertstel?`;
    case "EN": return `${n} tenths = how many hundredths?`;
    case "RO": return `${n} zecimi = câte sutimi?`;
    default: return `${n} tized hány századrész?`;
  }
}

// ─── ROUNDING ─────────────────────────────

export function qRoundTo(n: string, place: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Runde auf ${place}: ${n}`;
    case "EN": return `Round to the nearest ${place}: ${n}`;
    case "RO": return `Rotunjește la ${place}: ${n}`;
    default: return `Kerekítsd ${place}: ${n}`;
  }
}

// ─── PERCENT ─────────────────────────────

export function qPercentOf(n: number, p: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viel sind ${p}% von ${n}?`;
    case "EN": return `What is ${p}% of ${n}?`;
    case "RO": return `Cât este ${p}% din ${n}?`;
    default: return `Mennyi ${n} ${p} százaléka?`;
  }
}

// ─── GEOMETRY ─────────────────────────────

export function qRectPerimeter(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Rechteck hat die Seiten ${a} cm und ${b} cm. Wie groß ist der Umfang?`;
    case "EN": return `A rectangle has sides ${a} cm and ${b} cm. What is its perimeter?`;
    case "RO": return `Un dreptunghi are laturile de ${a} cm și ${b} cm. Care este perimetrul?`;
    default: return `Egy téglalap oldalhosszai ${a} cm és ${b} cm. Mekkora a kerülete?`;
  }
}

export function qRectArea(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Rechteck hat die Seiten ${a} cm und ${b} cm. Wie groß ist der Flächeninhalt?`;
    case "EN": return `A rectangle has sides ${a} cm and ${b} cm. What is its area?`;
    case "RO": return `Un dreptunghi are laturile de ${a} cm și ${b} cm. Care este aria?`;
    default: return `Egy téglalap oldalhosszai ${a} cm és ${b} cm. Mekkora a területe?`;
  }
}

export function qSquarePerimeter(a: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Quadrat hat die Seitenlänge ${a} cm. Wie groß ist der Umfang?`;
    case "EN": return `A square has sides of ${a} cm. What is its perimeter?`;
    case "RO": return `Un pătrat are latura de ${a} cm. Care este perimetrul?`;
    default: return `Egy négyzet oldala ${a} cm. Mekkora a kerülete?`;
  }
}

export function qSquareArea(a: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Quadrat hat die Seitenlänge ${a} cm. Wie groß ist der Flächeninhalt?`;
    case "EN": return `A square has sides of ${a} cm. What is its area?`;
    case "RO": return `Un pătrat are latura de ${a} cm. Care este aria?`;
    default: return `Egy négyzet oldala ${a} cm. Mekkora a területe?`;
  }
}

export function qTriangleArea(base: number, height: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Dreieck hat die Grundseite ${base} cm und die Höhe ${height} cm. Wie groß ist der Flächeninhalt?`;
    case "EN": return `A triangle has base ${base} cm and height ${height} cm. What is its area?`;
    case "RO": return `Un triunghi are baza de ${base} cm și înălțimea de ${height} cm. Care este aria?`;
    default: return `Egy háromszög alapja ${base} cm, magassága ${height} cm. Mekkora a területe?`;
  }
}

// ─── TRIANGLES ─────────────────────────────

export function qTriangleThirdAngle(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Zwei Winkel eines Dreiecks sind ${a}° und ${b}°. Wie groß ist der dritte Winkel?`;
    case "EN": return `Two angles of a triangle are ${a}° and ${b}°. What is the third angle?`;
    case "RO": return `Două unghiuri ale unui triunghi sunt ${a}° și ${b}°. Cât este al treilea unghi?`;
    default: return `Egy háromszög két szöge ${a}° és ${b}°. Mekkora a harmadik szög?`;
  }
}

export function qEquilateralAngle(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie groß ist jeder Winkel eines gleichseitigen Dreiecks?";
    case "EN": return "What is each angle of an equilateral triangle?";
    case "RO": return "Cât are fiecare unghi al unui triunghi echilateral?";
    default: return "Egy egyenlő oldalú háromszög minden szöge hány fokos?";
  }
}

export function qIsoscelesApex(baseAngle: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In einem gleichschenkligen Dreieck ist der Basiswinkel ${baseAngle}°. Wie groß ist der Winkel an der Spitze?`;
    case "EN": return `In an isosceles triangle, the base angle is ${baseAngle}°. What is the apex angle?`;
    case "RO": return `Într-un triunghi isoscel, unghiul la bază este ${baseAngle}°. Cât este unghiul de la vârf?`;
    default: return `Egy egyenlő szárú háromszögben az alapon fekvő szög ${baseAngle}°. Mekkora a csúcsszög?`;
  }
}

// ─── ALGEBRA / EQUATIONS ─────────────────────────────

export function qSolveX(expr: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${expr} Wie groß ist x?`;
    case "EN": return `${expr} What is x?`;
    case "RO": return `${expr} Cât este x?`;
    default: return `${expr} Mennyi x?`;
  }
}

export function qIfAEquals(varName: string, val: number, expr: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wenn ${varName} = ${val}, wie viel ist ${expr}?`;
    case "EN": return `If ${varName} = ${val}, what is ${expr}?`;
    case "RO": return `Dacă ${varName} = ${val}, cât este ${expr}?`;
    default: return `Ha ${varName} = ${val}, mennyi ${expr}?`;
  }
}

export function qSimplifyCoeff(expr: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Vereinfache: ${expr}   Wie lautet der Koeffizient?`;
    case "EN": return `Simplify: ${expr}   What is the coefficient?`;
    case "RO": return `Simplifică: ${expr}   Care este coeficientul?`;
    default: return `Egyszerűsítsd: ${expr}   Mennyi a szorzó?`;
  }
}

// ─── NEGATIVE NUMBERS ─────────────────────────────

// (These use standard math notation, so question text is just the equation)

// ─── RATIO / PROPORTION ─────────────────────────────

export function qRatioSmallLarge(ratio: number, smaller: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Das Verhältnis ist 1:${ratio}. Der kleinere Teil ist ${smaller}. Wie groß ist der größere Teil?`;
    case "EN": return `The ratio is 1:${ratio}. The smaller part is ${smaller}. What is the larger part?`;
    case "RO": return `Raportul este 1:${ratio}. Partea mai mică este ${smaller}. Cât este partea mai mare?`;
    default: return `Az arány 1:${ratio}. A kisebb rész ${smaller}. Mennyi a nagyobb rész?`;
  }
}

export function qSpeedDistance(speed: number, time: number, unit: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Auto fährt mit ${speed} km/h. Welche Strecke legt es in ${time} Stunden zurück?`;
    case "EN": return `A car travels at ${speed} km/h. How far does it go in ${time} hours?`;
    case "RO": return `O mașină merge cu ${speed} km/h. Ce distanță parcurge în ${time} ore?`;
    default: return `Egy autó ${speed} km/h-val halad. Mekkora utat tesz meg ${time} óra alatt?`;
  }
}

// ─── PERCENT WORD PROBLEMS ─────────────────────────────

export function wpDiscount(item: string, price: number, discPct: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${item} kostet ${price} ${cur}. Es gibt ${discPct}% Rabatt. Wie viel zahlst du?`;
    case "EN": return `${item} costs ${price} ${cur}. There is a ${discPct}% discount. How much do you pay?`;
    case "RO": return `${item} costă ${price} ${cur}. Este o reducere de ${discPct}%. Cât plătești?`;
    default: return `${item} ára ${price} ${cur}. ${discPct}%-os akció van. Mennyit fizetsz?`;
  }
}

export function wpSavings(price: number, discPct: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Spielzeug kostet ${price} ${cur}. Du bekommst ${discPct}% Rabatt. Wie viel sparst du?`;
    case "EN": return `A toy costs ${price} ${cur}. You get ${discPct}% off. How much do you save?`;
    case "RO": return `O jucărie costă ${price} ${cur}. Ai ${discPct}% reducere. Cât economisești?`;
    default: return `Egy játék ${price} ${cur}. ${discPct}% kedvezményt kapsz. Mennyit spórolsz?`;
  }
}

export function wpPriceIncrease(item: string, price: number, pct: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${item} kostete ${price} ${cur}. Der Preis stieg um ${pct}%. Wie viel kostet es jetzt?`;
    case "EN": return `${item} was ${price} ${cur}. The price increased by ${pct}%. How much is it now?`;
    case "RO": return `${item} costa ${price} ${cur}. Prețul a crescut cu ${pct}%. Cât costă acum?`;
    default: return `${item} ${price} ${cur} volt. Az ára ${pct}%-kal nőtt. Mennyibe kerül most?`;
  }
}

// ─── TRAVEL / SPEED ─────────────────────────────

export function wpTravel(distance: number, speed: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Zwei Städte sind ${distance} km voneinander entfernt. Ein Auto fährt ${speed} km/h. Wie viele Stunden dauert die Fahrt?`;
    case "EN": return `Two cities are ${distance} km apart. A car drives at ${speed} km/h. How many hours is the trip?`;
    case "RO": return `Două orașe sunt la ${distance} km distanță. O mașină merge cu ${speed} km/h. Câte ore durează?`;
    default: return `Két város ${distance} km-re van egymástól. Egy autó ${speed} km/h-val halad. Hány óra alatt ér oda?`;
  }
}

export function wpAvgSpeed(distance: number, hours: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Zug legt in ${hours} Stunden ${distance} km zurück. Wie hoch ist die Durchschnittsgeschwindigkeit in km/h?`;
    case "EN": return `A train covers ${distance} km in ${hours} hours. What is the average speed in km/h?`;
    case "RO": return `Un tren parcurge ${distance} km în ${hours} ore. Care este viteza medie în km/h?`;
    default: return `Egy vonat ${hours} óra alatt ${distance} km-t tesz meg. Mekkora az átlagsebessége km/h-ban?`;
  }
}

// ─── PYTHAGORAS ─────────────────────────────

export function qPythHypotenuse(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein rechtwinkliges Dreieck hat die Katheten ${a} cm und ${b} cm. Wie lang ist die Hypotenuse?`;
    case "EN": return `A right triangle has legs of ${a} cm and ${b} cm. What is the hypotenuse?`;
    case "RO": return `Un triunghi dreptunghic are catetele de ${a} cm și ${b} cm. Cât este ipotenuza?`;
    default: return `Egy derékszögű háromszög befogói ${a} cm és ${b} cm. Mekkora az átfogó?`;
  }
}

export function qPythLeg(hyp: number, leg: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Hypotenuse ist ${hyp} cm, eine Kathete ist ${leg} cm. Wie lang ist die andere Kathete?`;
    case "EN": return `The hypotenuse is ${hyp} cm and one leg is ${leg} cm. What is the other leg?`;
    case "RO": return `Ipotenuza este ${hyp} cm și o catetă este ${leg} cm. Cât este cealaltă catetă?`;
    default: return `Ha az átfogó ${hyp} cm és az egyik befogó ${leg} cm, mekkora a másik befogó?`;
  }
}

// ─── THINK-OF-A-NUMBER WORD PROBLEMS ─────────────────────────────

export function wpThinkNumber(a: number, b: number, result: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ich denke an eine Zahl. Ich multipliziere sie mit ${a} und addiere ${b}. Das Ergebnis ist ${result}. Welche Zahl ist es?`;
    case "EN": return `I'm thinking of a number. I multiply it by ${a} and add ${b}. The result is ${result}. What is the number?`;
    case "RO": return `M-am gândit la un număr. L-am înmulțit cu ${a} și am adunat ${b}. Rezultatul este ${result}. Care este numărul?`;
    default: return `Gondoltam egy számra. Megszoroztam ${a}-val, majd hozzáadtam ${b}-t. Az eredmény ${result}. Melyik számra gondoltam?`;
  }
}

export function wpNumberSquare(a: number, multiple: number, total: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Das ${multiple}-fache einer Zahl ist ${total}. Wie groß ist das Quadrat dieser Zahl?`;
    case "EN": return `${multiple} times a number is ${total}. What is the square of that number?`;
    case "RO": return `De ${multiple} ori un număr este ${total}. Cât este pătratul acelui număr?`;
    default: return `Egy szám ${multiple}-szerese ${total}. Mekkora a szám négyzete?`;
  }
}

// ─── PROBABILITY ─────────────────────────────

export function qBallProb(total: number, good: number, color: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In einer Box sind ${total} Kugeln, davon ${good} ${color}. Wie groß ist die Wahrscheinlichkeit in %, eine ${color} zu ziehen?`;
    case "EN": return `A box has ${total} balls, ${good} are ${color}. What is the probability (%) of picking a ${color} one?`;
    case "RO": return `Într-o cutie sunt ${total} bile, ${good} sunt ${color}. Care este probabilitatea (%) de a extrage una ${color}?`;
    default: return `Egy dobozban ${total} golyó van, ebből ${good} ${color}. Hány százalék eséllyel húzol ${color}t?`;
  }
}

export function qDiceProb(target: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Du wirfst einen Würfel. Wie hoch ist die Wahrscheinlichkeit (%) eine ${target} zu würfeln?`;
    case "EN": return `You roll a dice. What is the probability (%) of rolling a ${target}?`;
    case "RO": return `Arunci un zar. Care este probabilitatea (%) să obții ${target}?`;
    default: return `Egy szabályos kockával dobsz. Hány százalék eséllyel dobsz ${target}-ost?`;
  }
}

export function qCoinProb(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Du wirfst eine Münze. Wie hoch ist die Wahrscheinlichkeit (%) für Kopf?";
    case "EN": return "You flip a coin. What is the probability (%) of heads?";
    case "RO": return "Arunci o monedă. Care este probabilitatea (%) să fie cap?";
    default: return "Egy érmét feldobsz. Hány százalék eséllyel lesz fej?";
  }
}

export function qCoinProbTails(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Du wirfst eine Münze. Wie hoch ist die Wahrscheinlichkeit (%) für Zahl?";
    case "EN": return "You flip a coin. What is the probability (%) of tails?";
    case "RO": return "Arunci o monedă. Care este probabilitatea (%) să fie pajură?";
    default: return "Egy érmét feldobsz. Hány százalék eséllyel lesz írás?";
  }
}

export function qDiceProbEven(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Du wirfst einen Würfel. Wie hoch ist die Wahrscheinlichkeit (%), eine gerade Zahl zu würfeln?";
    case "EN": return "You roll a dice. What is the probability (%) of rolling an even number?";
    case "RO": return "Arunci un zar. Care este probabilitatea (%) să obții un număr par?";
    default: return "Egy kockával dobsz. Hány százalék eséllyel dobsz páros számot?";
  }
}

export function qDiceProbMore(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Du wirfst einen Würfel. Wie hoch ist die Wahrscheinlichkeit (%), eine Zahl größer als ${n} zu würfeln?`;
    case "EN": return `You roll a dice. What is the probability (%) of rolling a number greater than ${n}?`;
    case "RO": return `Arunci un zar. Care este probabilitatea (%) să obții un număr mai mare decât ${n}?`;
    default: return `Egy kockával dobsz. Hány százalék eséllyel dobsz ${n}-nél nagyobb számot?`;
  }
}

// ─── FUNCTIONS ─────────────────────────────

export function qFunctionValue(m: number, b: number, x: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  switch (lang) {
    case "DE": return `f(x) = ${m}x ${bStr}. Wie viel ist f(${x})?`;
    case "EN": return `f(x) = ${m}x ${bStr}. What is f(${x})?`;
    case "RO": return `f(x) = ${m}x ${bStr}. Cât este f(${x})?`;
    default: return `f(x) = ${m}x ${bStr}. Mennyi f(${x})?`;
  }
}

export function qYIntercept(m: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  switch (lang) {
    case "DE": return `f(x) = ${m}x ${bStr}. Wo schneidet der Graph die y-Achse? (f(0) = ?)`;
    case "EN": return `f(x) = ${m}x ${bStr}. Where does the graph cross the y-axis? (f(0) = ?)`;
    case "RO": return `f(x) = ${m}x ${bStr}. Unde intersectează graficul axa y? (f(0) = ?)`;
    default: return `f(x) = ${m}x ${bStr}. Hol metszi az y tengelyt? (f(0) = ?)`;
  }
}

// ─── NUMBER SEQUENCE ─────────────────────────────

export function qNextInSequence(seq: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Setze die Zahlenreihe fort: ${seq} → ?`;
    case "EN": return `What comes next in the sequence: ${seq} → ?`;
    case "RO": return `Care este următorul număr: ${seq} → ?`;
    default: return `Folytasd a sorozatot: ${seq} → ?`;
  }
}

// ─── MISSING NUMBER ─────────────────────────────

export function qMissingInEquation(expr: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welche Zahl fehlt? ${expr}`;
    case "EN": return `What is the missing number? ${expr}`;
    case "RO": return `Ce număr lipsește? ${expr}`;
    default: return `Melyik szám hiányzik? ${expr}`;
  }
}

// ─── ITEMS / OBJECTS FOR WORD PROBLEMS ─────────────────────────────

export interface WordItems {
  fruits: string[];
  toys: string[];
  sweets: string[];
  colors: [string, string];  // [color1, color2]
  pencil: string;
  notebook: string;
  eraser: string;
  book: string;
  sticker: string;
  candy: string;
  marble: string;
  shoe: string;
  laptop: string;
  red: string;
  blue: string;
}

const items: Record<Lang, WordItems> = {
  HU: {
    fruits: ["alma", "körte", "banán", "narancs"],
    toys: ["golyó", "labda", "kártya", "autó"],
    sweets: ["sütemény", "cukorka", "csoki", "fánk"],
    colors: ["piros", "kék"],
    pencil: "ceruza", notebook: "füzet", eraser: "radír", book: "könyv",
    sticker: "matrica", candy: "cukorka", marble: "golyó",
    shoe: "cipő", laptop: "laptop", red: "piros", blue: "kék",
  },
  DE: {
    fruits: ["Apfel", "Birne", "Banane", "Orange"],
    toys: ["Murmel", "Ball", "Karte", "Auto"],
    sweets: ["Kuchen", "Bonbon", "Schokolade", "Keks"],
    colors: ["rot", "blau"],
    pencil: "Bleistift", notebook: "Heft", eraser: "Radiergummi", book: "Buch",
    sticker: "Sticker", candy: "Bonbon", marble: "Murmel",
    shoe: "Schuh", laptop: "Laptop", red: "rote", blue: "blaue",
  },
  EN: {
    fruits: ["apples", "pears", "bananas", "oranges"],
    toys: ["marbles", "balls", "cards", "toy cars"],
    sweets: ["cakes", "candies", "chocolates", "cookies"],
    colors: ["red", "blue"],
    pencil: "pencil", notebook: "notebook", eraser: "eraser", book: "book",
    sticker: "sticker", candy: "candy", marble: "marble",
    shoe: "shoe", laptop: "laptop", red: "red", blue: "blue",
  },
  RO: {
    fruits: ["măr", "pară", "banană", "portocală"],
    toys: ["bilă", "minge", "carte", "mașinuță"],
    sweets: ["prăjitură", "bomboană", "ciocolată", "biscuit"],
    colors: ["roșu", "albastru"],
    pencil: "creion", notebook: "caiet", eraser: "radieră", book: "carte",
    sticker: "abțibild", candy: "bomboană", marble: "bilă",
    shoe: "pantof", laptop: "laptop", red: "roșu", blue: "albastru",
  },
};

export function getItems(countryCode: string): WordItems {
  return items[getLang(countryCode)];
}

// ─── ORDER OF OPERATIONS REMINDER ─────────────────────────────

export function qOrderOfOpsReminder(expr: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${expr} = ? (Beachte die Rechenregeln!)`;
    case "EN": return `${expr} = ? (Remember order of operations!)`;
    case "RO": return `${expr} = ? (Respectă ordinea operațiilor!)`;
    default: return `${expr} = ? (Figyelj a műveleti sorrendre!)`;
  }
}

// ─── SHELF / ROWS WORD PROBLEMS ─────────────────────────────

export function wpShelfRows(rows: number, perRow: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf einem Regal stehen ${rows} Reihen mit jeweils ${perRow} ${item}. Wie viele ${item} sind es insgesamt?`;
    case "EN": return `A shelf has ${rows} rows with ${perRow} ${item} each. How many ${item} are there in total?`;
    case "RO": return `Pe un raft sunt ${rows} rânduri cu câte ${perRow} ${item}. Câte ${item} sunt în total?`;
    default: return `Egy polcon ${rows} sor ${item} van, soronként ${perRow} darab. Hány ${item} van a polcon?`;
  }
}

export function wpClassGroups(total: number, groups: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In einer Klasse sind ${total} Schüler. Sie werden in ${groups} gleiche Gruppen aufgeteilt. Wie viele sind in jeder Gruppe?`;
    case "EN": return `A class has ${total} students. They split into ${groups} equal groups. How many in each group?`;
    case "RO": return `Într-o clasă sunt ${total} elevi. Se împart în ${groups} grupe egale. Câți sunt în fiecare grupă?`;
    default: return `Egy osztályban ${total} tanuló van. ${groups} egyenlő csoportba osztjuk őket. Hány fő van egy csoportban?`;
  }
}

export function wpBuyMultiple(item: string, price: number, count: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein ${item} kostet ${price} ${cur}. Du kaufst ${count} Stück. Wie viel zahlst du insgesamt?`;
    case "EN": return `A ${item} costs ${price} ${cur}. You buy ${count}. How much do you pay in total?`;
    case "RO": return `Un ${item} costă ${price} ${cur}. Cumperi ${count}. Cât plătești în total?`;
    default: return `Egy ${item} ${price} ${cur}. Veszel belőle ${count} darabot. Mennyit fizetsz összesen?`;
  }
}

// ─── FRUIT COLLECTION WORD PROBLEMS ─────────────────────────────

export function wpFruitTotal(a: number, fruitA: string, b: number, fruitB: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In einem Laden gibt es ${a} ${fruitA} und ${b} ${fruitB}. Wie viel Obst gibt es insgesamt?`;
    case "EN": return `A shop has ${a} ${fruitA} and ${b} ${fruitB}. How many fruits are there in total?`;
    case "RO": return `Într-un magazin sunt ${a} ${fruitA} și ${b} ${fruitB}. Câte fructe sunt în total?`;
    default: return `Egy boltban ${a} ${fruitA} és ${b} ${fruitB} van. Hány gyümölcs van összesen?`;
  }
}

// ─── COLLECTION / STICKER COMPARISON ─────────────────────────────

export function wpCollectionDiff(nameA: string, countA: number, nameB: string, countB: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const diff = Math.abs(countA - countB);
  const more = countA > countB ? nameA : nameB;
  switch (lang) {
    case "DE": return `${nameA} hat ${countA} ${item}, ${nameB} hat ${countB} ${item}. Um wie viele hat ${more} mehr?`;
    case "EN": return `${nameA} has ${countA} ${item}, ${nameB} has ${countB} ${item}. How many more does ${more} have?`;
    case "RO": return `${nameA} are ${countA} ${item}, ${nameB} are ${countB} ${item}. Cu câte are ${more} mai multe?`;
    default: return `${nameA} gyűjtött ${countA} ${item}, ${nameB} gyűjtött ${countB} ${item}. Mennyivel van több ${more}-nak?`;
  }
}

// ─── MEASUREMENT WORD PROBLEM (HOHLMASSE / VOLUME) ─────────────────

export function wpDrinksPerWeek(cups: number, mlPerCup: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${getNames(countryCode).boys[0]} trinkt ${cups} Tassen Milch am Tag (1 Tasse = ${mlPerCup} ml). Wie viel trinkt er in einer Woche in Litern?`;
    case "EN": return `${getNames(countryCode).boys[0]} drinks ${cups} cups of milk a day (1 cup = ${mlPerCup} ml). How many liters in a week?`;
    case "RO": return `${getNames(countryCode).boys[0]} bea ${cups} căni de lapte pe zi (1 cană = ${mlPerCup} ml). Câți litri bea într-o săptămână?`;
    default: return `${getNames(countryCode).boys[0]} naponta ${cups} csésze tejet iszik (1 csésze = ${mlPerCup} ml). Hány litert iszik egy héten?`;
  }
}

// Volume word — variant B: container fill remaining
export function wpContainerFill(total: number, filled: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Eimer fasst ${total} l. Es sind bereits ${filled} l drin. Wie viele Liter fehlen noch bis er voll ist?`;
    case "EN": return `A bucket holds ${total} l. It already has ${filled} l in it. How many more litres are needed to fill it?`;
    case "RO": return `O găleată ține ${total} l. Deja are ${filled} l înăuntru. Câți litri mai lipsesc?`;
    default:   return `Egy vödör ${total} l-t bír. Már ${filled} l van benne. Mennyi kell még, hogy tele legyen?`;
  }
}

// Volume word — variant C: bottles total in litres
export function wpBottleTotal(bottles: number, mlEach: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${bottles} Flaschen, jede ${mlEach} ml. Wie viele Liter sind das insgesamt?`;
    case "EN": return `${bottles} bottles, each ${mlEach} ml. How many litres in total?`;
    case "RO": return `${bottles} sticle, fiecare ${mlEach} ml. Câți litri sunt în total?`;
    default:   return `${bottles} üveg, mindegyik ${mlEach} ml. Összesen hány liter?`;
  }
}

// Money word — variant B: budget remaining after purchase
export function wpBudgetLeft(budget: number, price: number, currency: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Du hast ${budget} ${currency}. Du kaufst ein Heft für ${price} ${currency}. Wie viel Geld hast du noch?`;
    case "EN": return `You have ${budget} ${currency}. You buy a notebook for ${price} ${currency}. How much money do you have left?`;
    case "RO": return `Ai ${budget} ${currency}. Cumperi un caiet pentru ${price} ${currency}. Cât îți mai rămâne?`;
    default:   return `${budget} ${currency}-d van. Veszel egy füzetet ${price} ${currency}-ért. Mennyi marad?`;
  }
}

// Money word — variant C: two items total cost
export function wpTwoItemsCost(price1: number, price2: number, currency: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Buch kostet ${price1} ${currency}, ein Lineal ${price2} ${currency}. Was kosten beide zusammen?`;
    case "EN": return `A book costs ${price1} ${currency}, a ruler costs ${price2} ${currency}. How much do both cost together?`;
    case "RO": return `O carte costă ${price1} ${currency}, o riglă ${price2} ${currency}. Cât costă ambele împreună?`;
    default:   return `Egy könyv ${price1} ${currency}, egy vonalzó ${price2} ${currency}. Mennyibe kerül a kettő együtt?`;
  }
}

// Lengths word — variant B: fence perimeter
export function wpFenceLength(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Garten ist ${a} m lang und ${b} m breit. Wie viele Meter Zaun braucht man, um ihn einzuzäunen?`;
    case "EN": return `A garden is ${a} m long and ${b} m wide. How many metres of fencing are needed to go around it?`;
    case "RO": return `O grădină are ${a} m lungime și ${b} m lățime. Câți metri de gard sunt necesari?`;
    default:   return `Egy kert ${a} m hosszú és ${b} m széles. Hány méter kerítés kell köré?`;
  }
}

// ─── NUMBER WALL / ZAHLENMAUER / SZÁMPIRAMIS ─────────────────────────────
// Pyramid: each brick = sum of two below. Bottom row given, ask for top.

export function qNumberWall3(a: number, b: number, c: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Zahlenmauer: Unterste Reihe [${a}, ${b}, ${c}]. Jeder Stein = Summe der zwei darunter. Was steht oben?`;
    case "EN": return `Number Wall: Bottom row [${a}, ${b}, ${c}]. Each brick = sum of two below. What is the top number?`;
    case "RO": return `Piramida: rândul de jos [${a}, ${b}, ${c}]. Fiecare cărămidă = suma celor două de dedesubt. Ce număr e în vârf?`;
    default: return `Számpiramis: alul [${a}, ${b}, ${c}]. Minden kő = alatta lévő kettő összege. Mi a csúcsszám?`;
  }
}

export function qNumberWall4(a: number, b: number, c: number, d: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Zahlenmauer: Unterste Reihe [${a}, ${b}, ${c}, ${d}]. Jeder Stein = Summe der zwei darunter. Was steht oben?`;
    case "EN": return `Number Wall: Bottom row [${a}, ${b}, ${c}, ${d}]. Each brick = sum of two below. What is the top number?`;
    case "RO": return `Piramida: rândul de jos [${a}, ${b}, ${c}, ${d}]. Fiecare cărămidă = suma celor două de dedesubt. Ce număr e în vârf?`;
    default: return `Számpiramis: alul [${a}, ${b}, ${c}, ${d}]. Minden kő = alatta lévő kettő összege. Mi a csúcsszám?`;
  }
}

// ─── CHAIN CALCULATION / KETTENAUFGABE ─────────────────────────────

export function qChainCalc(expression: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Rechne aus: ${expression} = ?`;
    case "EN": return `Calculate: ${expression} = ?`;
    case "RO": return `Calculează: ${expression} = ?`;
    default: return `Számold ki: ${expression} = ?`;
  }
}

// ─── PLACE VALUE NOTATION / STELLENWERT ─────────────────────────────
// DE: T=Tausender, H=Hunderter, Z=Zehner, E=Einer
// HU: E=Ezres, Sz=Százas, T=Tízes, e=egyes
// EN: Th=Thousands, H=Hundreds, T=Tens, O=Ones
// RO: M=Mii, S=Sute, Z=Zeci, U=Unități

const pvAbbrev: Record<Lang, { th: string; h: string; t: string; o: string }> = {
  DE: { th: "T", h: "H", t: "Z", o: "E" },
  HU: { th: "E", h: "Sz", t: "T", o: "e" },
  EN: { th: "Th", h: "H", t: "T", o: "O" },
  RO: { th: "M", h: "S", t: "Z", o: "U" },
};

export function qPlaceValueNotation(thousands: number, hundreds: number, tens: number, ones: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const a = pvAbbrev[lang];
  const parts: string[] = [];
  if (thousands) parts.push(`${thousands}${a.th}`);
  if (hundreds) parts.push(`${hundreds}${a.h}`);
  if (tens) parts.push(`${tens}${a.t}`);
  if (ones) parts.push(`${ones}${a.o}`);
  const notation = parts.join(" ");
  switch (lang) {
    case "DE": return `Schreibe als Zahl: ${notation} = ?`;
    case "EN": return `Write as a number: ${notation} = ?`;
    case "RO": return `Scrie ca număr: ${notation} = ?`;
    default: return `Írd le számmal: ${notation} = ?`;
  }
}

// ─── TIME DURATION / ZEITSPANNE ─────────────────────────────

export function qTimeDuration(startH: number, startM: number, endH: number, endM: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const pad = (n: number) => String(n).padStart(2, "0");
  const start = `${startH}:${pad(startM)}`;
  const end = `${endH}:${pad(endM)}`;
  switch (lang) {
    case "DE": return `Der Unterricht beginnt um ${start} Uhr und endet um ${end} Uhr. Wie viele Minuten dauert er?`;
    case "EN": return `A lesson starts at ${start} and ends at ${end}. How many minutes does it last?`;
    case "RO": return `O lecție începe la ${start} și se termină la ${end}. Câte minute durează?`;
    default: return `A foglalkozás ${start}-kor kezdődik és ${end}-kor ér véget. Hány percig tart?`;
  }
}

// ─── EXPANDED FORM / NUMBER DECOMPOSITION ─────────────────────────────

export function qExpandedForm(num: number, expression: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${num} = ${expression}. Welche Zahl fehlt?`;
    case "EN": return `${num} = ${expression}. What is the missing number?`;
    case "RO": return `${num} = ${expression}. Care este numărul lipsă?`;
    default: return `${num} = ${expression}. Mi a hiányzó szám?`;
  }
}

// ─── MONEY CHANGE / WECHSELGELD ─────────────────────────────

export function wpMoneyChange(name: string, price: number, paid: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} kauft etwas für ${price} ${cur} und bezahlt mit ${paid} ${cur}. Wie viel Wechselgeld bekommt ${name}?`;
    case "EN": return `${name} buys something for ${price} ${cur} and pays with ${paid} ${cur}. How much change does ${name} get?`;
    case "RO": return `${name} cumpără ceva cu ${price} ${cur} și plătește cu ${paid} ${cur}. Cât primește rest?`;
    default: return `${name} vásárol ${price} ${cur}-ért és ${paid} ${cur}-tal fizet. Mennyi visszajárót kap?`;
  }
}

export function wpMoneyMultiBuy(name: string, items: string[], prices: number[], paid: number, cur: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const list = items.map((it, i) => `${it} (${prices[i]} ${cur})`).join(", ");
  switch (lang) {
    case "DE": return `${name} kauft: ${list}. ${name} bezahlt mit ${paid} ${cur}. Wie viel Wechselgeld?`;
    case "EN": return `${name} buys: ${list}. ${name} pays with ${paid} ${cur}. How much change?`;
    case "RO": return `${name} cumpără: ${list}. Plătește cu ${paid} ${cur}. Cât primește rest?`;
    default: return `${name} vesz: ${list}. ${paid} ${cur}-tal fizet. Mennyi a visszajáró?`;
  }
}

// ─── ROUNDING / NACHBARZAHLEN ─────────────────────────────

export function qNearestRound(n: number, roundTo: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const roundLabels: Record<Lang, Record<number, string>> = {
    HU: { 10: "tízesre", 100: "százasra", 1000: "ezresre", 10000: "tízezresre" },
    DE: { 10: "auf Zehner", 100: "auf Hunderter", 1000: "auf Tausender", 10000: "auf Zehntausender" },
    EN: { 10: "to the nearest ten", 100: "to the nearest hundred", 1000: "to the nearest thousand", 10000: "to the nearest ten thousand" },
    RO: { 10: "la zeci", 100: "la sute", 1000: "la mii", 10000: "la zeci de mii" },
  };
  const label = roundLabels[lang][roundTo] || `${roundTo}`;
  switch (lang) {
    case "DE": return `Runde ${n} ${label}.`;
    case "EN": return `Round ${n} ${label}.`;
    case "RO": return `Rotunjește ${n} ${label}.`;
    default: return `Kerekítsd ${n}-t ${label}!`;
  }
}

export function qNeighborNumber(n: number, direction: "before" | "after", step: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const stepLabels: Record<Lang, Record<number, string>> = {
    HU: { 10: "tízes", 100: "százas", 1000: "ezres" },
    DE: { 10: "Zehner", 100: "Hunderter", 1000: "Tausender" },
    EN: { 10: "ten", 100: "hundred", 1000: "thousand" },
    RO: { 10: "zece", 100: "sută", 1000: "mie" },
  };
  const s = stepLabels[lang][step] || `${step}`;
  if (direction === "before") {
    switch (lang) {
      case "DE": return `Welcher ${s} kommt vor ${n}?`;
      case "EN": return `What ${s} comes before ${n}?`;
      case "RO": return `Ce ${s} vine înainte de ${n}?`;
      default: return `Melyik ${s} van ${n} előtt?`;
    }
  }
  switch (lang) {
    case "DE": return `Welcher ${s} kommt nach ${n}?`;
    case "EN": return `What ${s} comes after ${n}?`;
    case "RO": return `Ce ${s} vine după ${n}?`;
    default: return `Melyik ${s} van ${n} után?`;
  }
}

// ─── DOUBLING ─────────────────────────────

export function qDouble(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Was ist das Doppelte von ${n}?`;
    case "EN": return `What is double ${n}?`;
    case "RO": return `Care este dublul lui ${n}?`;
    default: return `Mennyi ${n} duplája?`;
  }
}

// ─── MISSING DIGIT / KLECKSAUFGABE ─────────────────────────────

export function qMissingDigit(expression: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welche Ziffer fehlt? ${expression}`;
    case "EN": return `What is the missing digit? ${expression}`;
    case "RO": return `Care este cifra lipsă? ${expression}`;
    default: return `Mi a hiányzó számjegy? ${expression}`;
  }
}

// ─── MULTIPLICATIVE COMPARISON ─────────────────────────────

export function qTimesAsMany(smallLabel: string, small: number, bigLabel: string, big: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${smallLabel}: ${small}. ${bigLabel}: ${big}. Wie viel mal so viel ist das?`;
    case "EN": return `${smallLabel}: ${small}. ${bigLabel}: ${big}. How many times as many is that?`;
    case "RO": return `${smallLabel}: ${small}. ${bigLabel}: ${big}. De câte ori mai mult este?`;
    default: return `${smallLabel}: ${small}. ${bigLabel}: ${big}. Hányszor annyi?`;
  }
}

// ─── MULTIPLICATIVE COMPARISON CONTEXT ─────────────────────────────

const multCompContexts: Record<Lang, Array<{ small: string; big: string; sf: number; bf: number }>> = {
  HU: [
    { small: "Egy hétben", big: "Egy hónapban (28 nap)", sf: 7, bf: 28 },
    { small: "Egy óra", big: "Egy nap", sf: 1, bf: 24 },
    { small: "Egy tucatban", big: "Egy dobozban", sf: 12, bf: 60 },
  ],
  DE: [
    { small: "Eine Woche hat", big: "Der Februar hat", sf: 7, bf: 28 },
    { small: "Eine Stunde hat", big: "Ein Tag hat", sf: 1, bf: 24 },
    { small: "Ein Dutzend hat", big: "Eine Kiste hat", sf: 12, bf: 60 },
  ],
  EN: [
    { small: "A week has", big: "February has", sf: 7, bf: 28 },
    { small: "An hour has", big: "A day has", sf: 1, bf: 24 },
    { small: "A dozen is", big: "A box has", sf: 12, bf: 60 },
  ],
  RO: [
    { small: "O săptămână are", big: "Februarie are", sf: 7, bf: 28 },
    { small: "O oră are", big: "O zi are", sf: 1, bf: 24 },
    { small: "Un duzină are", big: "O cutie are", sf: 12, bf: 60 },
  ],
};

export function getMultCompContexts(countryCode: string) {
  return multCompContexts[getLang(countryCode)];
}

// ─── NEW TOPIC TEMPLATE FUNCTIONS ──────────────────────────────────────────

// Even / Odd
export function qNextEven(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die nächste gerade Zahl nach ${n} ist?`;
    case "EN": return `What is the next even number after ${n}?`;
    case "RO": return `Care este următorul număr par după ${n}?`;
    default:   return `Mi a következő páros szám ${n} után?`;
  }
}
export function qNextOdd(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die nächste ungerade Zahl nach ${n} ist?`;
    case "EN": return `What is the next odd number after ${n}?`;
    case "RO": return `Care este următorul număr impar după ${n}?`;
    default:   return `Mi a következő páratlan szám ${n} után?`;
  }
}
export function qIsEvenOrOdd(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} geteilt durch 2 ergibt Rest?`;
    case "EN": return `${n} ÷ 2 has remainder?`;
    case "RO": return `${n} împărțit la 2 are restul?`;
    default:   return `${n} osztva 2-vel a maradék?`;
  }
}

// Clock reading (EU analog, non-US)
export function qClockFullHour(h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die große Zeigerin zeigt auf 12, die kleine auf ${h}. Wie viel Uhr ist es?`;
    case "EN": return `The minute hand points to 12, the hour hand to ${h}. What time is it?`;
    case "RO": return `Minutarul arată spre 12, orarul spre ${h}. Ce oră este?`;
    default:   return `A perc mutató a 12-re, az óra mutató a ${h}-ra mutat. Hány óra van?`;
  }
}
export function qClockMinutes(h: number, m: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es ist ${h} Uhr ${m} Minuten. Wie viele Minuten nach ${h}?`;
    case "EN": return `The time is ${h}:${m.toString().padStart(2,"0")}. How many minutes past ${h}?`;
    case "RO": return `Este ora ${h} și ${m} minute. Câte minute au trecut de la ora ${h}?`;
    default:   return `Az idő ${h} óra ${m} perc. Hány perccel múlt el ${h} óra?`;
  }
}
export function qClockHalfPast(h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es ist halb ${h + 1}. Wie viele Minuten nach ${h} Uhr ist das?`;
    case "EN": return `It is half past ${h}. How many minutes past ${h}?`;
    case "RO": return `Este jumătate după ora ${h}. Câte minute au trecut?`;
    default:   return `Fél ${h + 1} van. Hány perccel múlt el ${h} óra?`;
  }
}
export function qClockQuarterPast(h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es ist Viertel nach ${h}. Wie viele Minuten nach ${h} Uhr?`;
    case "EN": return `It is quarter past ${h}. How many minutes past ${h}?`;
    case "RO": return `Este un sfert după ora ${h}. Câte minute?`;
    default:   return `Negyed ${h + 1} van. Hány perccel múlt el ${h} óra?`;
  }
}

// ─── GRADE 1 VISUAL TOPIC TEXT GENERATORS ─────────────────────────────

export function qG1ClockQuarter(h: number, m: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const mt = m === 0 ? "" : m === 15 ? "15" : m === 30 ? "30" : "45";
  const timeStr = `${h}:${String(m).padStart(2, "0")}`;
  switch (lang) {
    case "DE": return `Die Uhr zeigt ${timeStr}. Wie viel Uhr ist es? (Schreibe H:MM)`;
    case "EN": return `The clock shows ${timeStr}. What time is it? (Write H:MM)`;
    case "RO": return `Ceasul arată ${timeStr}. Ce oră este? (Scrie H:MM)`;
    default:   return `Az óra ${timeStr}-t mutat. Hány óra van? (Írd H:MM formában)`;
  }
}

export function qG1NumberLine(min: number, max: number, marked: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Zahlenstrahl von ${min} bis ${max} zeigt der Pfeil auf welche Zahl?`;
    case "EN": return `On the number line from ${min} to ${max}, what number does the arrow point to?`;
    case "RO": return `Pe dreapta numerelor de la ${min} la ${max}, la ce număr arată săgeata?`;
    default:   return `A számegyenesen ${min}-tól ${max}-ig a nyíl melyik számra mutat?`;
  }
}

export function qG1PlaceValueTens(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} hat wie viele Zehner?`;
    case "EN": return `How many tens does ${n} have?`;
    case "RO": return `Câte zeci are ${n}?`;
    default:   return `${n}-nek hány tízese van?`;
  }
}

export function qG1PlaceValueOnes(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} hat wie viele Einer?`;
    case "EN": return `How many ones does ${n} have?`;
    case "RO": return `Câte unități are ${n}?`;
    default:   return `${n}-nek hány egyesre van?`;
  }
}

export function qG1PlaceValueTotal(tens: number, ones: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${tens} Zehner und ${ones} Einer = ?`;
    case "EN": return `${tens} tens and ${ones} ones = ?`;
    case "RO": return `${tens} zeci și ${ones} unități = ?`;
    default:   return `${tens} tízes és ${ones} egyes = ?`;
  }
}

export function qG1GridCount(rows: number, cols: number, colored: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im ${rows}×${cols} Raster sind farbige Kästchen. Wie viele sind eingefärbt?`;
    case "EN": return `In the ${rows}×${cols} grid, how many squares are colored?`;
    case "RO": return `În grila ${rows}×${cols}, câte pătrate sunt colorate?`;
    default:   return `A ${rows}×${cols} rácsban hány négyzet van kiszínezve?`;
  }
}

export function qG1GridEmpty(rows: number, cols: number, empty: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im ${rows}×${cols} Raster, wie viele Kästchen sind NICHT eingefärbt?`;
    case "EN": return `In the ${rows}×${cols} grid, how many squares are NOT colored?`;
    case "RO": return `În grila ${rows}×${cols}, câte pătrate NU sunt colorate?`;
    default:   return `A ${rows}×${cols} rácsban hány négyzet NINCS kiszínezve?`;
  }
}

export function qG1Sequence(shown: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Setze die Zahlenreihe fort: ${shown}`;
    case "EN": return `Continue the number sequence: ${shown}`;
    case "RO": return `Continuă șirul de numere: ${shown}`;
    default:   return `Folytasd a számsort: ${shown}`;
  }
}

export function qG1Coins(coinDesc: string, currency: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Du hast ${coinDesc}. Wie viel Geld ist das insgesamt? (in ${currency})`;
    case "EN": return `You have ${coinDesc}. How much money is that in total? (in ${currency})`;
    case "RO": return `Ai ${coinDesc}. Câți bani ai în total? (în ${currency})`;
    default:   return `Van ${coinDesc}. Összesen mennyi pénzed van? (${currency}-ban)`;
  }
}

export function qG1Timeline(startH: number, endH: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Von ${startH}:00 bis ${endH}:00 — wie viele Stunden sind vergangen?`;
    case "EN": return `From ${startH}:00 to ${endH}:00 — how many hours have passed?`;
    case "RO": return `De la ${startH}:00 la ${endH}:00 — câte ore au trecut?`;
    default:   return `${startH}:00-tól ${endH}:00-ig — hány óra telt el?`;
  }
}

export function qG1Fraction(totalParts: number, coloredParts: number, shape: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const shapeNames: Record<string, Record<string, string>> = {
    pizza: { DE: "Pizza", EN: "pizza", RO: "pizza", HU: "pizza" },
    circle: { DE: "Kreis", EN: "circle", RO: "cerc", HU: "kör" },
    rectangle: { DE: "Rechteck", EN: "rectangle", RO: "dreptunghi", HU: "téglalap" },
  };
  const sn = shapeNames[shape]?.[lang] || shape;
  switch (lang) {
    case "DE": return `Ein ${sn} ist in ${totalParts} gleiche Teile geteilt. ${coloredParts} Teile sind eingefärbt. Wie viele Teile sind eingefärbt?`;
    case "EN": return `A ${sn} is divided into ${totalParts} equal parts. ${coloredParts} parts are colored. How many parts are colored?`;
    case "RO": return `Un ${sn} este împărțit în ${totalParts} părți egale. ${coloredParts} părți sunt colorate. Câte părți sunt colorate?`;
    default:   return `Egy ${sn} ${totalParts} egyenlő részre van osztva. ${coloredParts} rész ki van színezve. Hány részt színeztünk ki?`;
  }
}

// ─── GRADE 1 NEW GENERATORS — TEMPLATE FUNCTIONS ────────────────────────────

// Vorgänger (predecessor)
export function qVorgaenger(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welche Zahl kommt vor ${n}?`;
    case "EN": return `Which number comes before ${n}?`;
    case "RO": return `Ce număr vine înaintea lui ${n}?`;
    default:   return `Melyik szám van ${n} előtt?`;
  }
}

// Nachfolger (successor)
export function qNachfolger(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welche Zahl kommt nach ${n}?`;
    case "EN": return `Which number comes after ${n}?`;
    case "RO": return `Ce număr vine după ${n}?`;
    default:   return `Melyik szám van ${n} után?`;
  }
}

// Zählen (counting objects with emoji)
export function qZaehlen(items: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Zähle: ${items}. Wie viele sind es?`;
    case "EN": return `Count: ${items}. How many are there?`;
    case "RO": return `Numără: ${items}. Câte sunt?`;
    default:   return `Számold meg: ${items}. Hány van?`;
  }
}

// Tauschaufgabe (commutative property)
export function qTauschaufgabe(a: number, b: number, sum: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a} + ${b} = ${sum}. Was ergibt ${b} + ${a}?`;
    case "EN": return `${a} + ${b} = ${sum}. What is ${b} + ${a}?`;
    case "RO": return `${a} + ${b} = ${sum}. Cât este ${b} + ${a}?`;
    default:   return `${a} + ${b} = ${sum}. Mennyi ${b} + ${a}?`;
  }
}

// Zahlzerlegung (number decomposition)
export function qZahlzerlegung(total: number, part1: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ergänze: ${total} = ${part1} + ?`;
    case "EN": return `Complete: ${total} = ${part1} + ?`;
    case "RO": return `Completează: ${total} = ${part1} + ?`;
    default:   return `Egészítsd ki: ${total} = ${part1} + ?`;
  }
}

// Verdoppeln (doubling)
export function qVerdoppeln(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Verdopple: ${n} + ${n} = ?`;
    case "EN": return `Double it: ${n} + ${n} = ?`;
    case "RO": return `Dublează: ${n} + ${n} = ?`;
    default:   return `Kétszeresit: ${n} + ${n} = ?`;
  }
}

// Halbieren (halving)
export function qHalbieren(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Halbiere: Die Hälfte von ${n} ist?`;
    case "EN": return `Halve it: Half of ${n} is?`;
    case "RO": return `Înjumătățește: Jumătatea lui ${n} este?`;
    default:   return `Felezd: ${n} fele mennyi?`;
  }
}

// Shape corners
export function qShapeCorners(shapeName: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Ecken hat ein ${shapeName}?`;
    case "EN": return `How many corners does a ${shapeName} have?`;
    case "RO": return `Câte colțuri are un ${shapeName}?`;
    default:   return `Hány sarka van egy ${shapeName}-nek?`;
  }
}

// Length comparison
export function qLaenger(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welcher Stab ist länger: ${a} cm oder ${b} cm?`;
    case "EN": return `Which stick is longer: ${a} cm or ${b} cm?`;
    case "RO": return `Care bețișor este mai lung: ${a} cm sau ${b} cm?`;
    default:   return `Melyik pálca hosszabb: ${a} cm vagy ${b} cm?`;
  }
}

// Days of the week
export function qG1Wochentage(i: number, countryCode: string): { question: string; answer: string } {
  const lang = getLang(countryCode);
  const days: Record<Lang, string[]> = {
    DE: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    EN: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    HU: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"],
    RO: ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"],
  };
  const dayList = days[lang];
  const day = dayList[i];
  const nextDay = dayList[i + 1];
  let question: string;
  switch (lang) {
    case "DE": question = `Welcher Tag kommt nach ${day}?`; break;
    case "EN": question = `Which day comes after ${day}?`; break;
    case "RO": question = `Care zi urmează după ${day}?`; break;
    default:   question = `Melyik nap jön ${day} után?`;
  }
  return { question, answer: nextDay };
}

// Spatial directions (opposite direction questions)
export function qG1Spatial(dir: string, opposite: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const dirNames: Record<Lang, Record<string, string>> = {
    HU: { oben: "fent", unten: "lent", links: "balra", rechts: "jobbra", vorne: "előtt", hinten: "mögött" },
    DE: { oben: "oben", unten: "unten", links: "links", rechts: "rechts", vorne: "vorne", hinten: "hinten" },
    EN: { oben: "above", unten: "below", links: "left", rechts: "right", vorne: "in front", hinten: "behind" },
    RO: { oben: "deasupra", unten: "dedesubt", links: "stânga", rechts: "dreapta", vorne: "în față", hinten: "în spate" },
  };
  const d = dirNames[lang][dir] || dir;
  switch (lang) {
    case "DE": return `Was ist das Gegenteil von „${d}"?`;
    case "EN": return `What is the opposite of "${d}"?`;
    case "RO": return `Care este opusul lui „${d}"?`;
    default:   return `Mi az ellentéte: „${d}"?`;
  }
}

// Weight comparison
export function qG1Weight(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Was ist schwerer: ${a} kg oder ${b} kg?`;
    case "EN": return `Which is heavier: ${a} kg or ${b} kg?`;
    case "RO": return `Care este mai greu: ${a} kg sau ${b} kg?`;
    default:   return `Melyik nehezebb: ${a} kg vagy ${b} kg?`;
  }
}

// Volume comparison
export function qG1Volume(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welcher Behälter fasst mehr: einer mit ${a} l oder einer mit ${b} l?`;
    case "EN": return `Which container holds more: one with ${a} l or one with ${b} l?`;
    case "RO": return `Care recipient ține mai mult: unul cu ${a} l sau unul cu ${b} l?`;
    default:   return `Melyik tartályba fér több: ${a} l-es vagy ${b} l-es?`;
  }
}

// Weight comparison — variant B: which is lighter
export function qG1WeightB(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Was ist leichter: ${a} kg oder ${b} kg?`;
    case "EN": return `Which is lighter: ${a} kg or ${b} kg?`;
    case "RO": return `Care este mai ușor: ${a} kg sau ${b} kg?`;
    default:   return `Melyik könnyebb: ${a} kg vagy ${b} kg?`;
  }
}

// Weight comparison — variant C: how much heavier
export function qG1WeightC(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Der Rucksack wiegt ${b} kg, die Tasche ${a} kg. Wie viel schwerer ist der Rucksack?`;
    case "EN": return `The backpack weighs ${b} kg, the bag weighs ${a} kg. How much heavier is the backpack?`;
    case "RO": return `Rucsacul cântărește ${b} kg, geanta ${a} kg. Cu cât este mai greu rucsacul?`;
    default:   return `A hátizsák ${b} kg, a táska ${a} kg. Mennyivel nehezebb a hátizsák?`;
  }
}

// Volume comparison — variant B: which holds less
export function qG1VolumeB(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Welcher Behälter fasst weniger: einer mit ${a} l oder einer mit ${b} l?`;
    case "EN": return `Which container holds less: one with ${a} l or one with ${b} l?`;
    case "RO": return `Care recipient ține mai puțin: unul cu ${a} l sau unul cu ${b} l?`;
    default:   return `Melyik tartályba fér kevesebb: ${a} l-es vagy ${b} l-es?`;
  }
}

// Volume comparison — variant C: how much more
export function qG1VolumeC(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Krug A hat ${b} l, Krug B hat ${a} l. Wie viele Liter mehr hat Krug A?`;
    case "EN": return `Jug A has ${b} l, Jug B has ${a} l. How many more litres does Jug A have?`;
    case "RO": return `Ulciorul A are ${b} l, ulciorul B are ${a} l. Cu câți litri mai mult are A?`;
    default:   return `A korsóban ${b} l, B korsóban ${a} l van. Mennyivel több van A-ban?`;
  }
}

// G1 word problems — extra scenarios (word6-word10)
export function wpBirds(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf einem Ast sitzen ${a} Vögel. ${b} fliegen weg. Wie viele bleiben?`;
    case "EN": return `${a} birds are sitting on a branch. ${b} fly away. How many are left?`;
    case "RO": return `Pe o creangă stau ${a} păsări. ${b} zboară. Câte rămân?`;
    default:   return `Egy ágon ${a} madár ül. ${b} elrepül. Hány marad?`;
  }
}

export function wpGifts(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hat ${a} Geschenke bekommen. ${name} verschenkt ${b} davon. Wie viele hat ${name} noch?`;
    case "EN": return `${name} received ${a} gifts. ${name} gives away ${b} of them. How many does ${name} have left?`;
    case "RO": return `${name} a primit ${a} cadouri. Dă ${b} mai departe. Câte îi mai rămân?`;
    default:   return `${name} ${a} ajándékot kapott. Ebből ${b}-t továbbad. Hány marad ${name}-nál?`;
  }
}

export function wpFlowers(a: number, colorA: string, b: number, colorB: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Garten blühen ${a} ${colorA} und ${b} ${colorB} Blumen. Wie viele Blumen sind es insgesamt?`;
    case "EN": return `In the garden there are ${a} ${colorA} and ${b} ${colorB} flowers. How many flowers in total?`;
    case "RO": return `În grădină sunt ${a} flori ${colorA} și ${b} flori ${colorB}. Câte flori sunt în total?`;
    default:   return `A kertben ${a} ${colorA} és ${b} ${colorB} virág nyílik. Összesen hány virág?`;
  }
}

export function wpShared(total: number, name: string, share: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} und ein Freund haben zusammen ${total} Bücher. ${name} hat ${share}. Wie viele hat der Freund?`;
    case "EN": return `${name} and a friend have ${total} books altogether. ${name} has ${share}. How many does the friend have?`;
    case "RO": return `${name} și un prieten au ${total} cărți împreună. ${name} are ${share}. Câte are prietenul?`;
    default:   return `${name}-nek és egy barátjának összesen ${total} könyve van. ${name}-nek ${share} van. Hány van a barátjának?`;
  }
}

export function wpSteps(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Max geht ${a} Stufen hoch, dann noch ${b} Stufen. Wie viele Stufen ist er insgesamt gestiegen?`;
    case "EN": return `Max climbs ${a} steps, then ${b} more. How many steps did Max climb in total?`;
    case "RO": return `Max urcă ${a} trepte, apoi încă ${b}. Câte trepte a urcat în total?`;
    default:   return `Max ${a} lépcsőt megy fel, majd még ${b}-t. Összesen hány lépcsőt mászott meg?`;
  }
}

// Pattern continuation
export function qG1Pattern(seq: string[], countryCode: string): string {
  const lang = getLang(countryCode);
  const shown = seq.join(" ");
  switch (lang) {
    case "DE": return `Setze das Muster fort: ${shown} — Was kommt als nächstes?`;
    case "EN": return `Continue the pattern: ${shown} — What comes next?`;
    case "RO": return `Continuă tiparul: ${shown} — Ce urmează?`;
    default:   return `Folytasd a mintát: ${shown} — Mi jön ezután?`;
  }
}

// Number ordering
export function qG1NumberOrder(nums: number[], countryCode: string): string {
  const lang = getLang(countryCode);
  const shown = nums.join(", ");
  switch (lang) {
    case "DE": return `Ordne die Zahlen von klein nach groß: ${shown} → ? (Antwort z.B. 2,5,8)`;
    case "EN": return `Order from smallest to largest: ${shown} → ? (e.g. 2,5,8)`;
    case "RO": return `Ordonează crescător: ${shown} → ? (ex. 2,5,8)`;
    default:   return `Rendezd növekvő sorrendbe: ${shown} → ? (pl. 2,5,8)`;
  }
}

// Simple data reading (instead of table)
export function qG1DataTable(a: number, b: number, itemA: string, itemB: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In einer Tüte sind ${a} ${itemA} und ${b} ${itemB}. Wie viele sind es insgesamt?`;
    case "EN": return `In a bag: ${a} ${itemA} and ${b} ${itemB}. How many in total?`;
    case "RO": return `Într-o pungă: ${a} ${itemA} și ${b} ${itemB}. Câte sunt în total?`;
    default:   return `Egy zacskóban: ${a} ${itemA} és ${b} ${itemB}. Összesen hány?`;
  }
}

// Rounding
export function qRoundTo10(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Runde ${n} auf den nächsten Zehner.`;
    case "EN": return `Round ${n} to the nearest 10.`;
    case "RO": return `Rotunjește ${n} la zeci.`;
    default:   return `Kerekítsd ${n}-t a legközelebbi 10-esre!`;
  }
}
export function qRoundTo100(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Runde ${n} auf den nächsten Hunderter.`;
    case "EN": return `Round ${n} to the nearest 100.`;
    case "RO": return `Rotunjește ${n} la sute.`;
    default:   return `Kerekítsd ${n}-t a legközelebbi 100-asra!`;
  }
}

// Circle
export function qCircleCircumference(r: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Umfang eines Kreises mit Radius ${r} cm (π ≈ 3)?`;
    case "EN": return `Circumference of a circle with radius ${r} cm (π ≈ 3)?`;
    case "RO": return `Circumferința unui cerc cu raza ${r} cm (π ≈ 3)?`;
    default:   return `Mekkora egy ${r} cm sugarú kör kerülete? (π ≈ 3)`;
  }
}
export function qCircleArea(r: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Flächeninhalt eines Kreises mit Radius ${r} cm (π ≈ 3)?`;
    case "EN": return `Area of a circle with radius ${r} cm (π ≈ 3)?`;
    case "RO": return `Aria unui cerc cu raza ${r} cm (π ≈ 3)?`;
    default:   return `Mekkora egy ${r} cm sugarú kör területe? (π ≈ 3)`;
  }
}

// Mean
export function qMeanOf(nums: number[], countryCode: string): string {
  const lang = getLang(countryCode);
  const list = nums.join(", ");
  switch (lang) {
    case "DE": return `Mittelwert von: ${list}`;
    case "EN": return `Mean of: ${list}`;
    case "RO": return `Media aritmetică a: ${list}`;
    default:   return `Átlaga: ${list}`;
  }
}

// Statistics: median
export function qMedianOf(sorted: number[], countryCode: string): string {
  const lang = getLang(countryCode);
  const list = [...sorted].sort((a, b) => a - b).join(", ");
  switch (lang) {
    case "DE": return `Median der Zahlen: ${list}`;
    case "EN": return `Median of: ${list}`;
    case "RO": return `Mediana: ${list}`;
    default:   return `Medián: ${list}`;
  }
}

// Prime numbers
export function qSmallestPrimeFactor(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Der kleinste Primfaktor von ${n} ist?`;
    case "EN": return `The smallest prime factor of ${n} is?`;
    case "RO": return `Cel mai mic factor prim al lui ${n} este?`;
    default:   return `${n} legkisebb prímtényezője?`;
  }
}
export function qCountPrimesBetween(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Primzahlen gibt es zwischen ${a} und ${b}?`;
    case "EN": return `How many prime numbers are between ${a} and ${b}?`;
    case "RO": return `Câte numere prime sunt între ${a} și ${b}?`;
    default:   return `Hány prímszám van ${a} és ${b} között?`;
  }
}

// LCM / GCD
export function qLcmOf(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `kgV(${a}, ${b}) = ?`;
    case "EN": return `LCM(${a}, ${b}) = ?`;
    case "RO": return `c.m.m.m.c(${a}, ${b}) = ?`;
    default:   return `LKKT(${a}, ${b}) = ?`;
  }
}
export function qGcdOf(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `ggT(${a}, ${b}) = ?`;
    case "EN": return `GCD(${a}, ${b}) = ?`;
    case "RO": return `c.m.m.d.c(${a}, ${b}) = ?`;
    default:   return `LNKO(${a}, ${b}) = ?`;
  }
}

// Fractions with different denominators (answer = numerator, shown as ?/lcm)
export function qFractionAddDiff(a: number, da: number, b: number, db: number, lcm: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}/${da} + ${b}/${db} = ?/${lcm}`;
    case "EN": return `${a}/${da} + ${b}/${db} = ?/${lcm}`;
    case "RO": return `${a}/${da} + ${b}/${db} = ?/${lcm}`;
    default:   return `${a}/${da} + ${b}/${db} = ?/${lcm}`;
  }
}
export function qFractionSubDiff(a: number, da: number, b: number, db: number, lcm: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}/${da} - ${b}/${db} = ?/${lcm}`;
    case "EN": return `${a}/${da} - ${b}/${db} = ?/${lcm}`;
    case "RO": return `${a}/${da} - ${b}/${db} = ?/${lcm}`;
    default:   return `${a}/${da} - ${b}/${db} = ?/${lcm}`;
  }
}

// Inequalities
export function qInequalityGt(a: number, b: number, c: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}x + ${b} > ${c}. Kleinste ganze Zahl für x?`;
    case "EN": return `${a}x + ${b} > ${c}. Smallest integer for x?`;
    case "RO": return `${a}x + ${b} > ${c}. Cel mai mic număr întreg pentru x?`;
    default:   return `${a}x + ${b} > ${c}. Legkisebb egész x értéke?`;
  }
}
export function qInequalityLt(a: number, b: number, c: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a}x - ${b} < ${c}. Größte ganze Zahl für x?`;
    case "EN": return `${a}x - ${b} < ${c}. Largest integer for x?`;
    case "RO": return `${a}x - ${b} < ${c}. Cel mai mare număr întreg pentru x?`;
    default:   return `${a}x - ${b} < ${c}. Legnagyobb egész x értéke?`;
  }
}

// Volume
export function qVolumeBox(a: number, b: number, c: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Volumen eines Quaders: ${a} × ${b} × ${c} = ?`;
    case "EN": return `Volume of a box: ${a} × ${b} × ${c} = ?`;
    case "RO": return `Volumul unui paralelipiped: ${a} × ${b} × ${c} = ?`;
    default:   return `Hasáb térfogata: ${a} × ${b} × ${c} = ?`;
  }
}
export function qVolumeCube(a: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Volumen eines Würfels mit Kantenlänge ${a} cm?`;
    case "EN": return `Volume of a cube with side ${a} cm?`;
    case "RO": return `Volumul unui cub cu latura ${a} cm?`;
    default:   return `Mekkora egy ${a} cm oldalú kocka térfogata?`;
  }
}
export function qVolumeCylinder(r: number, h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Volumen eines Zylinders: r=${r}, h=${h} (π ≈ 3)?`;
    case "EN": return `Volume of a cylinder: r=${r}, h=${h} (π ≈ 3)?`;
    case "RO": return `Volumul unui cilindru: r=${r}, h=${h} (π ≈ 3)?`;
    default:   return `Henger térfogata: r=${r}, h=${h} (π ≈ 3)?`;
  }
}

// Systems of equations
export function qSystemEq(a1: number, b1: number, s1: number, a2: number, b2: number, s2: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `x+y=${s1} und x-y=${s2}. x=?`;
    case "EN": return `x+y=${s1} and x-y=${s2}. x=?`;
    case "RO": return `x+y=${s1} și x-y=${s2}. x=?`;
    default:   return `x+y=${s1} és x-y=${s2}. x=?`;
  }
}

// ─── Grade 4 specific question templates ────────────────────────────────────

export function qRoundTo1000(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Runde ${n} auf den nächsten Tausender.`;
    case "EN": return `Round ${n} to the nearest 1000.`;
    case "RO": return `Rotunjește ${n} la mii.`;
    default:   return `Kerekítsd ${n}-t a legközelebbi 1000-esre!`;
  }
}

export function qCircleRadiusFromDiameter(d: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Kreis hat einen Durchmesser von ${d} cm. Wie lang ist der Radius?`;
    case "EN": return `A circle has a diameter of ${d} cm. What is its radius?`;
    case "RO": return `Un cerc are diametrul de ${d} cm. Cât este raza?`;
    default:   return `Egy kör átmérője ${d} cm. Mekkora a sugara?`;
  }
}

export function qCircleDiameterFromRadius(r: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Kreis hat einen Radius von ${r} cm. Wie lang ist der Durchmesser?`;
    case "EN": return `A circle has a radius of ${r} cm. What is its diameter?`;
    case "RO": return `Un cerc are raza de ${r} cm. Cât este diametrul?`;
    default:   return `Egy kör sugara ${r} cm. Mekkora az átmérője?`;
  }
}

export function qTimeElapsed(startHour: number, durationHours: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es ist ${startHour}:00 Uhr. In ${durationHours} Stunden ist es ? Uhr.`;
    case "EN": return `It is ${startHour}:00. In ${durationHours} hours it will be ? o'clock.`;
    case "RO": return `Este ora ${startHour}:00. Peste ${durationHours} ore va fi ora ?`;
    default:   return `${startHour}:00 van. ${durationHours} óra múlva hány óra lesz?`;
  }
}

export function qHoursToMinutes(h: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${h} Stunde${h > 1 ? 'n' : ''} = ? Minuten`;
    case "EN": return `${h} hour${h > 1 ? 's' : ''} = ? minutes`;
    case "RO": return `${h} or${h > 1 ? 'e' : 'ă'} = ? minute`;
    default:   return `${h} óra = ? perc`;
  }
}

export function qMinutesToHours(min: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${min} Minuten = ? Stunde${min >= 120 ? 'n' : ''}`;
    case "EN": return `${min} minutes = ? hour${min >= 120 ? 's' : ''}`;
    case "RO": return `${min} minute = ? or${min >= 120 ? 'e' : 'ă'}`;
    default:   return `${min} perc = ? óra`;
  }
}

export function qRunnerLaps(distPerLap: number, totalDist: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Läufer läuft pro Runde ${distPerLap} m. Wie viele Runden braucht er für ${totalDist} m?`;
    case "EN": return `A runner covers ${distPerLap} m per lap. How many laps for ${totalDist} m?`;
    case "RO": return `Un alergător parcurge ${distPerLap} m pe tur. Câte tururi pentru ${totalDist} m?`;
    default:   return `Egy futó köröként ${distPerLap} m-t tesz meg. Hány kör kell ${totalDist} m-hez?`;
  }
}

export function qChangeBack(item: string, price: number, paid: number, currency: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein ${item} kostet ${price} ${currency}. Du bezahlst mit ${paid} ${currency}. Wie viel Wechselgeld bekommst du?`;
    case "EN": return `A ${item} costs ${price} ${currency}. You pay with ${paid} ${currency}. How much change do you get?`;
    case "RO": return `Un ${item} costă ${price} ${currency}. Plătești cu ${paid} ${currency}. Cât rest primești?`;
    default:   return `Egy ${item} ára ${price} ${currency}. ${paid} ${currency}-val fizetsz. Mennyi visszajáró jár?`;
  }
}
