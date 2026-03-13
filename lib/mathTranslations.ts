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
    addNoCarry: "összeadás átlépés nélkül",
    addCarry: "összeadás tízes átlépéssel",
    add3nums: "három szám összeadása",
    subNoCarry: "kivonás kölcsönzés nélkül",
    subCarry: "kivonás kölcsönzéssel",
    mulRepeated: "szorzás mint összeadás",
    mulGroup: "csoportok számlálása",
    divShare: "egyenlő elosztás",
    divMulRel: "szorzás és osztás kapcsolata",
    weightGKg: "gramm és kilogramm",
    moneyEuroCent: "euró és cent",
    shapeBasic: "síkidomok",
    perimeterBasic: "egyszerű kerület",
    stellenwert2: "tízes és egyes",
    zahlzerlegung2: "számfelbontás 100-ig",
    compare100: "összehasonlítás 100-ig",
    countObjects: "tárgyak számlálása",
    mulVisual: "szemléletes szorzás",
    patternContinue: "minta folytatás",
    chartReading: "ábra olvasás",
    numberLine2: "számegyenes 100-ig",
    composeNumber: "szám összerakása",
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
    addNoCarry: "Addition ohne Zehnerübergang",
    addCarry: "Addition mit Zehnerübergang",
    add3nums: "Drei Zahlen addieren",
    subNoCarry: "Subtraktion ohne Zehnerübergang",
    subCarry: "Subtraktion mit Zehnerübergang",
    mulRepeated: "Multiplikation als Wiederholung",
    mulGroup: "Gruppenweise zählen",
    divShare: "Gleiches Aufteilen",
    divMulRel: "Zusammenhang × und ÷",
    weightGKg: "Gramm und Kilogramm",
    moneyEuroCent: "Euro und Cent",
    shapeBasic: "Ebene Figuren",
    perimeterBasic: "Einfacher Umfang",
    stellenwert2: "Zehner und Einer",
    zahlzerlegung2: "Zahlenzerlegung bis 100",
    compare100: "Vergleichen bis 100",
    countObjects: "Gegenstände zählen",
    mulVisual: "Anschauliches Multiplizieren",
    patternContinue: "Muster fortsetzen",
    chartReading: "Diagramm lesen",
    numberLine2: "Zahlenstrahl bis 100",
    composeNumber: "Zahl zusammensetzen",
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
    addNoCarry: "addition without carrying",
    addCarry: "addition with carrying",
    add3nums: "adding three numbers",
    subNoCarry: "subtraction without borrowing",
    subCarry: "subtraction with borrowing",
    mulRepeated: "multiplication as repeated addition",
    mulGroup: "counting groups",
    divShare: "equal sharing",
    divMulRel: "multiplication–division relationship",
    weightGKg: "grams and kilograms",
    moneyEuroCent: "euro and cents",
    shapeBasic: "flat shapes",
    perimeterBasic: "simple perimeter",
    stellenwert2: "tens and ones",
    zahlzerlegung2: "number decomposition to 100",
    compare100: "comparison to 100",
    countObjects: "counting objects",
    mulVisual: "visual multiplication",
    patternContinue: "pattern continuation",
    chartReading: "reading charts",
    numberLine2: "number line to 100",
    composeNumber: "compose a number",
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
    addNoCarry: "adunare fără transport",
    addCarry: "adunare cu transport",
    add3nums: "adunarea a trei numere",
    subNoCarry: "scădere fără împrumut",
    subCarry: "scădere cu împrumut",
    mulRepeated: "înmulțire repetată",
    mulGroup: "numărare în grupuri",
    divShare: "împărțire egală",
    divMulRel: "legătura înmulțire–împărțire",
    weightGKg: "grame și kilograme",
    moneyEuroCent: "euro și cenți",
    shapeBasic: "forme plane",
    perimeterBasic: "perimetru simplu",
    stellenwert2: "zeci și unități",
    zahlzerlegung2: "descompunere până la 100",
    compare100: "comparare până la 100",
    countObjects: "numărarea obiectelor",
    mulVisual: "înmulțire vizuală",
    patternContinue: "continuarea tiparului",
    chartReading: "citirea graficelor",
    numberLine2: "dreapta numerelor până la 100",
    composeNumber: "compunerea unui număr",
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
  const nextDay = dayList[(i + 1) % 7];
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

/// Weight comparison — variant C: named objects, how many kg is the heavier one
export function qG1WeightC(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Der Rucksack wiegt ${b} kg, die Tasche ${a} kg. Wie viele kg wiegt das schwerere Objekt?`;
    case "EN": return `The backpack weighs ${b} kg, the bag weighs ${a} kg. How many kg does the heavier object weigh?`;
    case "RO": return `Rucsacul cântărește ${b} kg, geanta ${a} kg. Câte kg cântărește obiectul mai greu?`;
    default:   return `A hátizsák ${b} kg, a táska ${a} kg. Hány kg a nehezebb tárgy?`;
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

/// Volume comparison — variant C: named containers, how many litres in the fuller one
export function qG1VolumeC(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Eimer A hat ${b} l Wasser, Eimer B hat ${a} l. Wie viele Liter hat der vollere Eimer?`;
    case "EN": return `Bucket A has ${b} l of water, Bucket B has ${a} l. How many litres does the fuller bucket have?`;
    case "RO": return `Găleata A are ${b} l de apă, găleata B are ${a} l. Câți litri are găleata mai plină?`;
    default:   return `Az A vödörben ${b} l víz van, a B vödörben ${a} l. Hány liter van a teltebbikben?`;
  }
}

// Volume comparison — variant D: named containers (glass vs bottle)
export function qG1VolumeD(glassL: number, bottleL: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Glas fasst ${glassL} dl, eine Flasche fasst ${bottleL} dl. Was fasst mehr?`;
    case "EN": return `A glass holds ${glassL} dl, a bottle holds ${bottleL} dl. Which holds more?`;
    case "RO": return `Un pahar încape ${glassL} dl, o sticlă încape ${bottleL} dl. Care încape mai mult?`;
    default:   return `Egy pohárba ${glassL} dl fér, egy üvegbe ${bottleL} dl. Melyik a nagyobb?`;
  }
}

// Volume comparison — variant E: watering can vs bucket
export function qG1VolumeE(canL: number, bucketL: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Gießkanne fasst ${canL} l, der Eimer fasst ${bucketL} l. Was fasst weniger?`;
    case "EN": return `The watering can holds ${canL} l, the bucket holds ${bucketL} l. Which holds less?`;
    case "RO": return `Stropitoarea are ${canL} l, găleata are ${bucketL} l. Care are mai puțin?`;
    default:   return `A locsolókannába ${canL} l fér, a vödörbe ${bucketL} l. Melyikbe fér kevesebb?`;
  }
}

// Volume comparison — variant F: fits or not
export function qG1VolumeFits(available: number, needed: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const fits = available >= needed;
  // answer will be displayed as yes/no — caller stores 1 (yes) or 0 (no)
  switch (lang) {
    case "DE": return `Kannst du ${needed} l Wasser in einen ${available}-Liter-Behälter füllen?`;
    case "EN": return `Can you fill ${needed} l of water into a ${available}-litre container?`;
    case "RO": return `Poți umple ${needed} l de apă într-un recipient de ${available} litri?`;
    default:   return `Belefér-e ${needed} l víz egy ${available} literes tartályba?`;
  }
}

// Volume — variant G: how much more to fill up
export function qG1VolumeFillUp(capacity: number, current: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Eimer fasst ${capacity} l. Er enthält schon ${current} l Wasser. Wie viele Liter fehlen noch, um ihn zu füllen?`;
    case "EN": return `A bucket holds ${capacity} l. It already has ${current} l of water. How many more litres are needed to fill it?`;
    case "RO": return `O găleată are ${capacity} l. Are deja ${current} l de apă. Câți litri mai lipsesc pentru a o umple?`;
    default:   return `Egy vödör ${capacity} l vizet bír. Már van benne ${current} l. Hány liter kell még, hogy tele legyen?`;
  }
}

// Volume — variant H: pool/bathtub comparison
export function qG1VolumePool(poolL: number, tubL: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Kinderbecken fasst ${poolL} l, eine Badewanne fasst ${tubL} l. Was fasst mehr?`;
    case "EN": return `A paddling pool holds ${poolL} l, a bathtub holds ${tubL} l. Which holds more?`;
    case "RO": return `O piscină pentru copii are ${poolL} l, cada de baie are ${tubL} l. Care are mai mult?`;
    default:   return `Egy gyerekmedencébe ${poolL} l fér, a fürdőkádba ${tubL} l. Melyikbe fér több?`;
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

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 1 ADDITION ─────────────────────────
// Ezek a template-ek természetesebb, változatosabb szövegeket adnak.

export function wpFoundInNature(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} geht mit der Familie spazieren. Auf dem Weg findet ${name} zuerst ${a} ${item}, dann noch ${b}. Wie viele hat ${name} insgesamt gefunden?`;
    case "EN": return `${name} is out for a walk. Along the way, ${name} first finds ${a} ${item}, then ${b} more. How many has ${name} found altogether?`;
    case "RO": return `${name} merge la plimbare cu familia. Pe drum, găsește mai întâi ${a} ${item}, apoi încă ${b}. Câte a găsit în total?`;
    default:   return `${name} sétálni megy a családdal. Útközben talál ${a} ${item}t, majd talál még ${b} darabot. Hányat talált összesen?`;
  }
}

export function wpBirthdayPresents(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Heute ist ${name}s Geburtstag! Von Mama bekommt ${name} ${a} ${item} und von Papa noch ${b}. Wie viele hat ${name} jetzt insgesamt?`;
    case "EN": return `Today is ${name}'s birthday! ${name} gets ${a} ${item} from mum and ${b} more from dad. How many does ${name} have altogether?`;
    case "RO": return `Astăzi e ziua lui/ei ${name}! De la mama primește ${a} ${item}, iar de la tata încă ${b}. Câte are ${name} acum?`;
    default:   return `Ma ${name} születésnapja! Anyától kap ${a} ${item}t, apától még ${b} darabot. Hány ${item}ja van összesen?`;
  }
}

export function wpFilledBag(item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In der Tasche waren schon ${a} ${item}. Dann habe ich noch ${b} mehr hineingelegt. Wie viele ${item} sind jetzt in der Tasche?`;
    case "EN": return `There were already ${a} ${item} in the bag. Then I put in ${b} more. How many ${item} are in the bag now?`;
    case "RO": return `În geantă erau deja ${a} ${item}. Am mai pus încă ${b}. Câte ${item} sunt acum în geantă?`;
    default:   return `A táskában már volt ${a} ${item}. Még beletettem ${b} darabot. Hány ${item} van most a táskában?`;
  }
}

export function wpKidsJoined(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Spielplatz spielten ${a} Kinder Fangen. Dann kamen noch ${b} Kinder dazu. Wie viele Kinder spielen jetzt zusammen?`;
    case "EN": return `${a} children were playing tag at the playground. Then ${b} more children joined. How many children are playing now?`;
    case "RO": return `Pe terenul de joacă se jucau ${a} copii de-a v-ați ascunselea. Au mai venit ${b} copii. Câți copii se joacă acum?`;
    default:   return `A játszótéren ${a} gyerek játszott fogócskát. Jött még ${b} gyerek. Hányan játszanak most?`;
  }
}

export function wpCoinsInBank(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hat ${a} Münzen ins Sparschwein gesteckt. Heute steckt ${name} noch ${b} weitere hinein. Wie viele Münzen sind jetzt im Sparschwein?`;
    case "EN": return `${name} put ${a} coins into the piggy bank. Today ${name} puts in ${b} more. How many coins are in the piggy bank now?`;
    case "RO": return `${name} a pus ${a} monede în pușculiță. Azi mai pune încă ${b}. Câte monede sunt acum în pușculiță?`;
    default:   return `${name} ${a} érmét tett a malacperselybe. Ma még betett ${b}-t. Hány érme van most a perselyben?`;
  }
}

export function wpMarketBasket(item1: string, a: number, item2: string, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Markt kauft Mama ${a} ${item1} und ${b} ${item2}. Wie viele Sachen hat sie insgesamt eingekauft?`;
    case "EN": return `At the market, mum buys ${a} ${item1} and ${b} ${item2}. How many things did she buy altogether?`;
    case "RO": return `La piață, mama cumpără ${a} ${item1} și ${b} ${item2}. Câte lucruri a cumpărat în total?`;
    default:   return `A piacon anyuka vásárolt ${a} ${item1}t és ${b} ${item2}t. Összesen hány dolgot vett?`;
  }
}

export function wpBuiltTower(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} baut einen Turm aus Bauklötzen. Zuerst legt ${name} ${a} Klötze hin, dann noch ${b} weitere. Wie viele Klötze hat der Turm jetzt?`;
    case "EN": return `${name} is building a tower with blocks. First ${name} places ${a} blocks, then adds ${b} more. How many blocks does the tower have now?`;
    case "RO": return `${name} construiește un turn din cuburi. Mai întâi pune ${a} cuburi, apoi mai adaugă ${b}. Câte cuburi are turnul acum?`;
    default:   return `${name} kockatornyot épít. Először letesz ${a} kockát, majd rárak még ${b}-t. Hány kocka van most a toronyban?`;
  }
}

export function wpCollectedStickers(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} sammelt Sticker. In dieser Woche hat ${name} ${a} Sticker bekommen, letzte Woche waren es ${b}. Wie viele Sticker hat ${name} zusammen?`;
    case "EN": return `${name} collects stickers. This week ${name} got ${a} stickers, and last week ${b}. How many stickers does ${name} have in total?`;
    case "RO": return `${name} colecționează abțibilduri. Săptămâna aceasta a primit ${a}, săptămâna trecută ${b}. Câte abțibilduri are în total?`;
    default:   return `${name} matricákat gyűjt. Ezen a héten kapott ${a} matricát, a múlt héten ${b}-t. Hány matricája van összesen?`;
  }
}

export function wpSchoolSupplies(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} legt ${a} ${item} in das Mäppchen. Mama legt noch ${b} dazu. Wie viele ${item} sind jetzt im Mäppchen?`;
    case "EN": return `${name} puts ${a} ${item}s in the pencil case. Mum adds ${b} more. How many ${item}s are in the pencil case now?`;
    case "RO": return `${name} pune ${a} ${item} în penar. Mama mai pune încă ${b}. Câte ${item} sunt acum în penar?`;
    default:   return `${name} ${a} ${item}t tesz a tolltartóba. Anyu még beletesz ${b} darabot. Hány ${item} van most a tolltartóban?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 1 SUBTRACTION ──────────────────────

export function wpKidsWentHome(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Spielplatz spielten ${a} Kinder. Als es dunkel wurde, gingen ${b} nach Hause. Wie viele Kinder sind noch auf dem Spielplatz?`;
    case "EN": return `${a} children were playing at the playground. When it got dark, ${b} went home. How many children are still at the playground?`;
    case "RO": return `Pe terenul de joacă se jucau ${a} copii. Când s-a întunecat, ${b} au plecat acasă. Câți copii au mai rămas?`;
    default:   return `A játszótéren ${a} gyerek játszott. Amikor besötétedett, ${b} hazament. Hány gyerek maradt még a játszótéren?`;
  }
}

export function wpAteFromPlate(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Teller lagen ${a} ${item}. ${name} hat ${b} davon gegessen. Wie viele ${item} sind noch auf dem Teller?`;
    case "EN": return `There were ${a} ${item} on the plate. ${name} ate ${b} of them. How many ${item} are left on the plate?`;
    case "RO": return `Pe farfurie erau ${a} ${item}. ${name} a mâncat ${b}. Câte ${item} au rămas pe farfurie?`;
    default:   return `A tányéron volt ${a} ${item}. ${name} megett ${b} darabot. Hány ${item} maradt a tányéron?`;
  }
}

export function wpGavePencils(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hatte ${a} Buntstifte. ${name} hat ${b} davon an einen Freund verschenkt. Wie viele Buntstifte hat ${name} noch?`;
    case "EN": return `${name} had ${a} coloured pencils. ${name} gave ${b} to a friend. How many coloured pencils does ${name} have left?`;
    case "RO": return `${name} avea ${a} creioane colorate. I-a dat ${b} unui prieten. Câte creioane colorate îi mai rămân?`;
    default:   return `${name} ${a} színes ceruzával rendelkezett. ${b} darabot odaajándékozott a barátjának. Hány színes ceruzája maradt?`;
  }
}

export function wpBirdsOnFence(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Auf dem Zaun saßen ${a} Vögel. Ein lautes Geräusch erschreckte sie, und ${b} flogen davon. Wie viele Vögel sitzen noch auf dem Zaun?`;
    case "EN": return `${a} birds were sitting on the fence. A loud noise scared them, and ${b} flew away. How many birds are still on the fence?`;
    case "RO": return `Pe gard stăteau ${a} păsări. Un zgomot puternic le-a speriat și ${b} au zburat. Câte păsări au mai rămas pe gard?`;
    default:   return `A kerítésen ${a} madár ült. Egy hangos zajra megijedt ${b}, és elrepült. Hány madár maradt még a kerítésen?`;
  }
}

export function wpUsedPaper(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hatte ${a} Blatt Papier. Für die Mal-Aufgabe hat ${name} ${b} Blatt benutzt. Wie viele Blatt Papier hat ${name} noch?`;
    case "EN": return `${name} had ${a} sheets of paper. ${name} used ${b} sheets for drawing. How many sheets of paper does ${name} have left?`;
    case "RO": return `${name} avea ${a} foi de hârtie. A folosit ${b} foi pentru desen. Câte foi de hârtie îi mai rămân?`;
    default:   return `${name} ${a} lap rajzpapírral rendelkezett. Rajzoláshoz felhasználta ${b} lapot. Hány lapja maradt?`;
  }
}

export function wpGotOffBus(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Bus saßen ${a} Fahrgäste. An der nächsten Haltestelle stiegen ${b} aus. Wie viele Fahrgäste sind noch im Bus?`;
    case "EN": return `There were ${a} passengers on the bus. At the next stop, ${b} got off. How many passengers are still on the bus?`;
    case "RO": return `În autobuz erau ${a} pasageri. La stația următoare au coborât ${b}. Câți pasageri mai sunt în autobuz?`;
    default:   return `A buszon ${a} utas ült. A következő megállóban leszállt ${b} utas. Hány utas maradt még a buszon?`;
  }
}

export function wpPickedRipeFruit(name: string, item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Am Baum hingen ${a} ${item}. ${name} hat die ${b} reifsten gepflückt. Wie viele ${item} hängen noch am Baum?`;
    case "EN": return `There were ${a} ${item} on the tree. ${name} picked the ${b} ripest ones. How many ${item} are still on the tree?`;
    case "RO": return `În pom erau ${a} ${item}. ${name} a cules cele mai coapte ${b}. Câte ${item} mai sunt în pom?`;
    default:   return `A fán ${a} ${item} lógott. ${name} leszedett belőle ${b} legérettebbet. Hány ${item} maradt még a fán?`;
  }
}

export function wpSoldAtMarket(item: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Am Marktstand waren morgens ${a} ${item}. Bis Mittag wurden ${b} verkauft. Wie viele ${item} sind noch übrig?`;
    case "EN": return `There were ${a} ${item} at the market stall in the morning. By noon, ${b} were sold. How many ${item} are left?`;
    case "RO": return `Dimineața la tarabă erau ${a} ${item}. Până la prânz s-au vândut ${b}. Câte ${item} au mai rămas?`;
    default:   return `Az árusnál reggel ${a} ${item} volt. Délig eladott ${b} darabot. Hány ${item} maradt még?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 1 COMPARISON / MIXED ───────────────

export function wpCompareToys(nameA: string, a: number, nameB: string, b: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${nameA} hat ${a} ${item} und ${nameB} hat ${b} ${item}. Wer hat mehr, und wie viele mehr?`;
    case "EN": return `${nameA} has ${a} ${item} and ${nameB} has ${b} ${item}. Who has more, and by how many?`;
    case "RO": return `${nameA} are ${a} ${item}, iar ${nameB} are ${b}. Cine are mai mult și cu câte?`;
    default:   return `${nameA} ${a} ${item}ja van, ${nameB}-nek ${b}. Kinek van több, és mennyivel több?`;
  }
}

export function wpMissingBalls(item: string, total: number, left: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const gone = total - left;
  switch (lang) {
    case "DE": return `Im Korb waren ${total} ${item}. Jetzt sind noch ${left} da. Wie viele ${item} fehlen?`;
    case "EN": return `There were ${total} ${item} in the basket. Now only ${left} are left. How many ${item} are missing?`;
    case "RO": return `În coș erau ${total} ${item}. Acum mai sunt ${left}. Câte ${item} lipsesc?`;
    default:   return `A kosárban ${total} ${item} volt. Most már csak ${left} darab van. Hány ${item} hiányzik?`;
  }
}

export function wpBookshelf(nameA: string, a: number, nameB: string, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${nameA} hat ${a} Bücher gelesen, ${nameB} hat ${b} gelesen. Wie viele Bücher haben sie zusammen gelesen?`;
    case "EN": return `${nameA} has read ${a} books and ${nameB} has read ${b}. How many books have they read together?`;
    case "RO": return `${nameA} a citit ${a} cărți, ${nameB} a citit ${b}. Câte cărți au citit împreună?`;
    default:   return `${nameA} ${a} könyvet olvasott el, ${nameB} ${b}-t. Összesen hány könyvet olvastak el?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 2 ──────────────────────────────────

export function wpClassroomTable(boys: number, girls: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Am Tisch in der Klasse sitzen ${boys} Jungen und ${girls} Mädchen. Wie viele Kinder sitzen insgesamt am Tisch?`;
    case "EN": return `At the classroom table there are ${boys} boys and ${girls} girls. How many children are sitting at the table in total?`;
    case "RO": return `La masa din clasă stau ${boys} băieți și ${girls} fete. Câți copii stau la masă în total?`;
    default:   return `Az osztály asztalánál ${boys} fiú és ${girls} lány ül. Összesen hány gyerek ül az asztalnál?`;
  }
}

export function wpSavingsGoal(name: string, has: number, needs: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const missing = needs - has;
  switch (lang) {
    case "DE": return `${name} möchte ein Spielzeug kaufen, das ${needs} € kostet. ${name} hat schon ${has} € gespart. Wie viel Geld fehlt noch?`;
    case "EN": return `${name} wants to buy a toy that costs ${needs}€. ${name} has already saved ${has}€. How much more money is needed?`;
    case "RO": return `${name} vrea să cumpere o jucărie care costă ${needs} €. ${name} a economisit deja ${has} €. Câți bani îi mai lipsesc?`;
    default:   return `${name} szeretne venni egy ${needs} €-s játékot. Már ${has} €-t gyűjtött össze. Mennyit kell még spórolnia?`;
  }
}

export function wpBakery(item: string, baked: number, sold: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Bäckerei hat heute ${baked} ${item} gebacken. Bis Mittag wurden ${sold} verkauft. Wie viele ${item} sind noch in der Auslage?`;
    case "EN": return `The bakery baked ${baked} ${item} today. By noon, ${sold} were sold. How many ${item} are still on display?`;
    case "RO": return `Brutăria a copt ${baked} ${item} azi. Până la prânz s-au vândut ${sold}. Câte ${item} mai sunt la raft?`;
    default:   return `A pékség ma ${baked} ${item}t sütött. Délig eladott ${sold} darabot. Hány ${item} maradt még a polcon?`;
  }
}

export function wpLibraryReturn(name: string, borrowed: number, returned: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${name} hat aus der Bücherei ${borrowed} Bücher ausgeliehen. ${name} hat schon ${returned} zurückgebracht. Wie viele Bücher muss ${name} noch zurückbringen?`;
    case "EN": return `${name} borrowed ${borrowed} books from the library. ${name} has already returned ${returned}. How many books does ${name} still need to return?`;
    case "RO": return `${name} a împrumutat ${borrowed} cărți de la bibliotecă. A returnat deja ${returned}. Câte cărți mai trebuie să returneze?`;
    default:   return `${name} ${borrowed} könyvet kölcsönzött a könyvtárból. Már visszavitt ${returned} darabot. Hány könyvet kell még visszavinnie?`;
  }
}

export function wpSchoolTrip(total: number, gone: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Klasse macht einen Ausflug. ${total} Kinder sind angemeldet, aber ${gone} sind krank geblieben. Wie viele Kinder fahren mit?`;
    case "EN": return `The class is going on a school trip. ${total} children signed up, but ${gone} are ill. How many children are going on the trip?`;
    case "RO": return `Clasa face o excursie. ${total} copii s-au înscris, dar ${gone} sunt bolnavi. Câți copii merg la excursie?`;
    default:   return `Az osztály kirándulást tervez. ${total} gyerek iratkozott fel, de ${gone} beteg lett. Hány gyerek megy el a kirándulásra?`;
  }
}

export function wpSwimmingPool(morning: number, afternoon: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Am Vormittag kamen ${morning} Kinder ins Schwimmbad. Am Nachmittag kamen noch ${afternoon} dazu. Wie viele Kinder waren insgesamt dort?`;
    case "EN": return `In the morning, ${morning} children came to the swimming pool. In the afternoon, ${afternoon} more arrived. How many children were there in total?`;
    case "RO": return `Dimineața au venit la piscină ${morning} copii. După-amiază au mai venit ${afternoon}. Câți copii au fost în total?`;
    default:   return `Délelőtt ${morning} gyerek ment az uszodába. Délután érkezett még ${afternoon}. Összesen hány gyerek fordult meg ott?`;
  }
}

export function wpGardenFlowers(rows: number, perRow: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Garten gibt es ${rows} Beete. In jedem Beet stehen ${perRow} Blumen. Wie viele Blumen sind es insgesamt?`;
    case "EN": return `The garden has ${rows} flowerbeds. Each flowerbed has ${perRow} flowers. How many flowers are there in total?`;
    case "RO": return `Grădina are ${rows} straturi de flori. Fiecare strat are ${perRow} flori. Câte flori sunt în total?`;
    default:   return `A kertben ${rows} virágágy van. Minden virágágyban ${perRow} virág nő. Összesen hány virág van a kertben?`;
  }
}

export function wpSportsDay(teamA: string, scoreA: number, teamB: string, scoreB: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Beim Sportfest erzielte ${teamA} ${scoreA} Punkte und ${teamB} erzielte ${scoreB} Punkte. Wie viele Punkte haben beide Teams zusammen?`;
    case "EN": return `At the sports day, ${teamA} scored ${scoreA} points and ${teamB} scored ${scoreB}. How many points did both teams score together?`;
    case "RO": return `La ziua sportului, ${teamA} a obținut ${scoreA} puncte iar ${teamB} ${scoreB}. Câte puncte au obținut ambele echipe împreună?`;
    default:   return `A sportnapon ${teamA} csapata ${scoreA} pontot szerzett, ${teamB} csapata ${scoreB}-t. Összesen hány pontot szereztek a csapatok?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 3 ──────────────────────────────────

export function wpBikeTrip(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Familie Schmidt fährt mit dem Fahrrad. Am Vormittag legen sie ${a} km zurück, am Nachmittag ${b} km. Wie viele Kilometer sind sie insgesamt gefahren?`;
    case "EN": return `The Smith family goes cycling. They cycle ${a} km in the morning and ${b} km in the afternoon. How many kilometres did they cycle in total?`;
    case "RO": return `Familia Ionescu merge cu bicicleta. Dimineața parcurg ${a} km, după-amiază ${b} km. Câți kilometri au parcurs în total?`;
    default:   return `A Kovács család kerékpároznni megy. Délelőtt ${a} km-t tesznek meg, délután ${b} km-t. Összesen hány kilométert tekertek?`;
  }
}

export function wpBoxesInWarehouse(boxes: number, perBox: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Lager stehen ${boxes} Kisten. In jeder Kiste befinden sich ${perBox} ${item}. Wie viele ${item} gibt es im Lager insgesamt?`;
    case "EN": return `There are ${boxes} boxes in the warehouse. Each box holds ${perBox} ${item}. How many ${item} are in the warehouse altogether?`;
    case "RO": return `În depozit sunt ${boxes} cutii. Fiecare cutie conține ${perBox} ${item}. Câte ${item} sunt în depozit în total?`;
    default:   return `A raktárban ${boxes} láda áll. Minden ládában ${perBox} ${item} van. Összesen hány ${item} van a raktárban?`;
  }
}

export function wpSchoolCafe(students: number, price: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In der Schulkantine kaufen ${students} Schüler je ein Mittagessen für ${price} €. Wie viel Geld zahlen sie insgesamt?`;
    case "EN": return `${students} students each buy lunch for ${price}€ in the school cafeteria. How much do they pay altogether?`;
    case "RO": return `${students} elevi cumpără fiecare un prânz de ${price} € la cantina școlii. Cât plătesc în total?`;
    default:   return `Az iskolai büfében ${students} tanuló vásárol, mindenki ${price} €-ért ebédet. Összesen mennyit fizetnek?`;
  }
}

export function wpFruitShop(item: string, price: number, amount: number, paid: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const cost = price * amount;
  switch (lang) {
    case "DE": return `${amount} kg ${item} kosten je ${price} €. Wie viel kostet alles zusammen?`;
    case "EN": return `${item} cost ${price}€ per kg. How much do ${amount} kg cost altogether?`;
    case "RO": return `${item} costă ${price} €/kg. Cât costă ${amount} kg în total?`;
    default:   return `${item} kilója ${price} €. Mennyibe kerül ${amount} kg összesen?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 3 (100-999 számokon) ───────────────

export function wpOrchardRows(rows: number, perRow: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Obstgarten stehen ${rows} Reihen ${item}-Bäume. In jeder Reihe wachsen ${perRow} Bäume. Wie viele ${item}-Bäume gibt es insgesamt?`;
    case "EN": return `The orchard has ${rows} rows of ${item} trees. Each row has ${perRow} trees. How many ${item} trees are there in total?`;
    case "RO": return `Livada are ${rows} rânduri de pomi cu ${item}. Fiecare rând are ${perRow} pomi. Câți pomi sunt în total?`;
    default:   return `A gyümölcsösben ${rows} sor ${item}fa áll. Minden sorban ${perRow} fa van. Összesen hány ${item}fa van?`;
  }
}

export function wpBooksOrdered(name: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Bücherei von ${name} hat in diesem Monat ${a} neue Bücher bekommen und letzten Monat ${b}. Wie viele Bücher kamen insgesamt an?`;
    case "EN": return `${name}'s library received ${a} new books this month and ${b} last month. How many books arrived in total?`;
    case "RO": return `Biblioteca din ${name} a primit ${a} cărți noi luna aceasta și ${b} luna trecută. Câte cărți au sosit în total?`;
    default:   return `A ${name}i könyvtár ebben a hónapban ${a} új könyvet kapott, a múlt hónapban ${b}-t. Összesen hány könyv érkezett?`;
  }
}

export function wpCityTrip(cityA: string, cityB: string, a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Von ${cityA} nach ${cityB} sind es ${a} km. Dann fährt man noch ${b} km weiter bis zum Ziel. Wie viele Kilometer sind es insgesamt?`;
    case "EN": return `From ${cityA} to ${cityB} is ${a} km. Then it's another ${b} km to the destination. How many kilometres is that altogether?`;
    case "RO": return `De la ${cityA} la ${cityB} sunt ${a} km. Apoi mai sunt ${b} km până la destinație. Câți km sunt în total?`;
    default:   return `${cityA}-tól ${cityB}-ig ${a} km az út. Onnan a célállomásig még ${b} km van. Összesen hány km az egész út?`;
  }
}

export function wpTruckDelivery(loads: number, perLoad: number, item: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Lastwagen transportiert pro Fahrt ${perLoad} ${item}. Er macht ${loads} Fahrten. Wie viele ${item} werden insgesamt geliefert?`;
    case "EN": return `A truck carries ${perLoad} ${item} per trip. It makes ${loads} trips. How many ${item} are delivered in total?`;
    case "RO": return `Un camion transportă ${perLoad} ${item} pe cursă. Face ${loads} curse. Câte ${item} sunt livrate în total?`;
    default:   return `Egy teherautó fuvaronként ${perLoad} ${item}t szállít. ${loads} fuvarral végez. Összesen hány ${item}t szállít?`;
  }
}

export function wpEventOrganizer(name: string, adults: number, children: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Beim Fest in ${name} waren ${adults} Erwachsene und ${children} Kinder. Wie viele Besucher kamen insgesamt?`;
    case "EN": return `At the ${name} festival there were ${adults} adults and ${children} children. How many visitors were there in total?`;
    case "RO": return `La serbarea din ${name} au fost ${adults} adulți și ${children} copii. Câți vizitatori au fost în total?`;
    default:   return `A ${name}i ünnepségen ${adults} felnőtt és ${children} gyerek vett részt. Összesen hányan látogattak el?`;
  }
}

export function wpFactoryProduction(days: number, perDay: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Eine Fabrik produziert täglich ${perDay} Stück. Wie viele Stück werden in ${days} Tagen produziert?`;
    case "EN": return `A factory produces ${perDay} items per day. How many items are produced in ${days} days?`;
    case "RO": return `O fabrică produce ${perDay} bucăți pe zi. Câte bucăți se produc în ${days} zile?`;
    default:   return `Egy gyár naponta ${perDay} darabot gyárt. Hány darabot gyárt ${days} nap alatt?`;
  }
}

export function wpStampCollection(nameA: string, a: number, nameB: string, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${nameA} hat ${a} Briefmarken gesammelt und ${nameB} hat ${b} gesammelt. Um wie viele Briefmarken hat ${nameA} mehr?`;
    case "EN": return `${nameA} has collected ${a} stamps and ${nameB} has collected ${b}. How many more stamps does ${nameA} have?`;
    case "RO": return `${nameA} a colecționat ${a} timbre, iar ${nameB} ${b}. Cu câte timbre are mai mult ${nameA}?`;
    default:   return `${nameA} ${a} bélyeget gyűjtött, ${nameB} pedig ${b}-t. ${nameA}-nak mennyivel több bélyege van?`;
  }
}

export function wpSchoolMeal(students: number, days: number, price: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const cur = getLang(countryCode) === "DE" ? "€" : getLang(countryCode) === "EN" ? "€" : "€";
  switch (lang) {
    case "DE": return `In der Schulwoche (${days} Tage) essen täglich ${students} Schüler in der Kantine. Ein Essen kostet ${price} ${cur}. Wie viel zahlen die Schüler insgesamt in einer Woche?`;
    case "EN": return `During the school week (${days} days), ${students} pupils eat in the cafeteria each day. A meal costs ${price}€. How much do the pupils pay altogether in a week?`;
    case "RO": return `În săptămâna școlară (${days} zile), ${students} elevi mănâncă zilnic la cantină. Un prânz costă ${price} €. Cât plătesc elevii în total într-o săptămână?`;
    default:   return `Az iskolai héten (${days} nap) naponta ${students} tanuló étkezik a menzán. Egy ebéd ${price} €. Összesen mennyit fizetnek a tanulók egy héten?`;
  }
}

export function wpWarehouseStock(initial: number, received: number, sold: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Im Lager waren ${initial} Pakete. Es kamen noch ${received} dazu. Dann wurden ${sold} verschickt. Wie viele Pakete sind noch im Lager?`;
    case "EN": return `There were ${initial} packages in the warehouse. ${received} more arrived. Then ${sold} were dispatched. How many packages are left in the warehouse?`;
    case "RO": return `În depozit erau ${initial} pachete. Au mai venit ${received}. Apoi s-au expediat ${sold}. Câte pachete au mai rămas?`;
    default:   return `A raktárban ${initial} csomag volt. Érkezett még ${received}. Majd elküldtek ${sold} darabot. Hány csomag maradt a raktárban?`;
  }
}

// ─── EXTRA WORD PROBLEM TEMPLATES — GRADE 4 (1000-9999 számokon) ─────────────

export function wpConstructionBricks(bricks: number, price: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Für eine Mauer werden ${bricks} Ziegel benötigt. Ein Ziegel kostet ${price} Cent. Wie viel kosten alle Ziegel zusammen?`;
    case "EN": return `A wall needs ${bricks} bricks. Each brick costs ${price} pence. How much do all the bricks cost altogether?`;
    case "RO": return `Pentru un zid sunt necesare ${bricks} cărămizi. O cărămidă costă ${price} bani. Cât costă toate cărămizile împreună?`;
    default:   return `Egy falhoz ${bricks} tégla kell. Egy tégla ${price} fillér. Mennyibe kerül az összes tégla?`;
  }
}

export function wpConferenceSeats(rows: number, perRow: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `In der Konzerthalle gibt es ${rows} Sitzreihen. Jede Reihe hat ${perRow} Sitze. Wie viele Sitzplätze gibt es insgesamt?`;
    case "EN": return `The concert hall has ${rows} rows of seats. Each row has ${perRow} seats. How many seats are there in total?`;
    case "RO": return `Sala de concerte are ${rows} rânduri de scaune. Fiecare rând are ${perRow} scaune. Câte locuri sunt în total?`;
    default:   return `A koncertteremben ${rows} üléssor van. Minden sorban ${perRow} szék áll. Összesen hány ülőhely van?`;
  }
}

export function wpBookPublisher(books: number, price: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Verlag druckt ${books} Exemplare eines neuen Buches. Jedes Buch kostet ${price} €. Wie viel Einnahmen bekommt der Verlag, wenn alle verkauft werden?`;
    case "EN": return `A publisher prints ${books} copies of a new book. Each copy costs ${price}€. How much does the publisher earn if all copies are sold?`;
    case "RO": return `O editură tipărește ${books} exemplare ale unei cărți noi. Fiecare exemplar costă ${price} €. Cât câștigă editura dacă se vând toate?`;
    default:   return `Egy kiadó ${books} példányt nyomtat egy új könyvből. Minden könyv ${price} €-ba kerül. Mennyi bevétele lesz a kiadónak, ha mindent elad?`;
  }
}

export function wpSchoolRenovation(rooms: number, costPerRoom: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Eine Schule renoviert ${rooms} Klassenzimmer. Jedes Zimmer kostet ${costPerRoom} €. Wie viel kostet die gesamte Renovierung?`;
    case "EN": return `A school renovates ${rooms} classrooms. Each room costs ${costPerRoom}€. How much does the full renovation cost?`;
    case "RO": return `O școală renovează ${rooms} săli de clasă. Fiecare sală costă ${costPerRoom} €. Cât costă renovarea totală?`;
    default:   return `Egy iskola ${rooms} termet felújít. Egy terem felújítása ${costPerRoom} €-ba kerül. Mennyibe kerül az egész felújítás?`;
  }
}

export function wpFarmHarvest(fields: number, perField: number, sold: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Bauer hat ${fields} Felder. Auf jedem Feld erntet er ${perField} kg Weizen. ${sold} kg werden sofort verkauft. Wie viel kg Weizen behält er?`;
    case "EN": return `A farmer has ${fields} fields. He harvests ${perField} kg of wheat from each field. ${sold} kg are sold straight away. How many kg of wheat does he keep?`;
    case "RO": return `Un fermier are ${fields} câmpuri. De pe fiecare câmp recoltează ${perField} kg de grâu. ${sold} kg se vând imediat. Câți kg de grâu păstrează?`;
    default:   return `Egy gazdának ${fields} mezője van. Mindegyikről ${perField} kg búzát arat. ${sold} kg-ot azonnal elad. Hány kg búzát tart meg?`;
  }
}

export function wpSportArena(stands: number, perStand: number, empty: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Das Stadion hat ${stands} Tribünen mit je ${perStand} Sitzen. Beim Spiel blieben ${empty} Plätze frei. Wie viele Zuschauer waren im Stadion?`;
    case "EN": return `The stadium has ${stands} stands with ${perStand} seats each. During the game, ${empty} seats were empty. How many spectators were in the stadium?`;
    case "RO": return `Stadionul are ${stands} tribune cu câte ${perStand} locuri. La meci, ${empty} locuri au rămas libere. Câți spectatori au fost la stadion?`;
    default:   return `A stadionnak ${stands} lelátója van, mindegyiken ${perStand} szék. A mérkőzésen ${empty} szék maradt üres. Hány néző volt a stadionban?`;
  }
}

export function wpCarRentalFleet(cars: number, days: number, pricePerDay: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Eine Autovermietung vermietet ${cars} Autos für je ${days} Tage. Ein Auto kostet ${pricePerDay} € pro Tag. Wie viel verdient die Vermietung insgesamt?`;
    case "EN": return `A car rental company rents out ${cars} cars for ${days} days each. A car costs ${pricePerDay}€ per day. How much does the company earn in total?`;
    case "RO": return `O firmă de închirieri auto închiriază ${cars} mașini pentru câte ${days} zile. O mașină costă ${pricePerDay} €/zi. Cât câștigă firma în total?`;
    default:   return `Egy autókölcsönző ${cars} autót ad ki ${days} napra. Egy autó napidíja ${pricePerDay} €. Összesen mennyit keres a kölcsönző?`;
  }
}

export function wpSchoolSupplyOrder(items: number, packs: number, pricePerPack: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Die Schule bestellt ${packs} Pakete Kopierpapier. Jedes Paket kostet ${pricePerPack} €. Wie viel kostet die Bestellung insgesamt?`;
    case "EN": return `The school orders ${packs} reams of paper. Each ream costs ${pricePerPack}€. How much does the order cost in total?`;
    case "RO": return `Școala comandă ${packs} topuri de hârtie. Fiecare top costă ${pricePerPack} €. Cât costă comanda în total?`;
    default:   return `Az iskola ${packs} csomag fénymásolópapírt rendel. Egy csomag ${pricePerPack} €. Mennyibe kerül a rendelés összesen?`;
  }
}

export function wpTrainJourney(distance: number, ticketPrice: number, passengers: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Zug fährt ${distance} km. Das Ticket kostet ${ticketPrice} € pro Person. ${passengers} Fahrgäste steigen ein. Wie viel Einnahmen hat die Bahn für diese Fahrt?`;
    case "EN": return `A train travels ${distance} km. A ticket costs ${ticketPrice}€ per person. ${passengers} passengers board. How much does the train earn for this journey?`;
    case "RO": return `Un tren parcurge ${distance} km. Biletul costă ${ticketPrice} € de persoană. Urcă ${passengers} pasageri. Câți bani încasează trenul pentru această cursă?`;
    default:   return `Egy vonat ${distance} km-t tesz meg. Egy jegy ${ticketPrice} €. ${passengers} utas száll fel. Mennyi bevétele lesz a vasútnak ezen a járaton?`;
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

// ─── GRADE 2 NEW GENERATORS — TEMPLATE FUNCTIONS ────────────────────────────

// Place value: how many Zehner
export function qHowManyZehner(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Zehner hat die Zahl ${n}?`;
    case "EN": return `How many tens does the number ${n} have?`;
    case "RO": return `Câte zeci are numărul ${n}?`;
    default:   return `Hány tízes van a ${n} számban?`;
  }
}

// Place value: how many Einer
export function qHowManyEiner(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Einer hat die Zahl ${n}?`;
    case "EN": return `How many ones does the number ${n} have?`;
    case "RO": return `Câte unități are numărul ${n}?`;
    default:   return `Hány egyes van a ${n} számban?`;
  }
}

// Number decomposition variant A: n = tens + ?
export function qZahlzerlegungA(n: number, tens: number, ones: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} = ${tens} + ?`;
    case "EN": return `${n} = ${tens} + ?`;
    case "RO": return `${n} = ${tens} + ?`;
    default:   return `${n} = ${tens} + ?`;
  }
}

// Number decomposition variant B: n = ? + ones
export function qZahlzerlegungB(n: number, tens: number, ones: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${n} = ? + ${ones}`;
    case "EN": return `${n} = ? + ${ones}`;
    case "RO": return `${n} = ? + ${ones}`;
    default:   return `${n} = ? + ${ones}`;
  }
}

// Multiplication as repeated addition: groups + each → "3+3+3 = 3 × ?"
export function qMulAsAddition(groups: number, each: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const repeated = Array(groups).fill(each).join(" + ");
  switch (lang) {
    case "DE": return `${repeated} = ${groups} × ?`;
    case "EN": return `${repeated} = ${groups} × ?`;
    case "RO": return `${repeated} = ${groups} × ?`;
    default:   return `${repeated} = ${groups} × ?`;
  }
}

// Visual multiplication: groups of each
export function wpGroupsOf(groups: number, each: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Es gibt ${groups} Gruppen mit je ${each} Kindern. Wie viele Kinder sind es insgesamt?`;
    case "EN": return `There are ${groups} groups of ${each} children each. How many children in total?`;
    case "RO": return `Sunt ${groups} grupe cu câte ${each} copii. Câți copii sunt în total?`;
    default:   return `${groups} csoport van, mindegyikben ${each} gyerek. Összesen hány gyerek?`;
  }
}

// Division–multiplication relationship
export function qDivMulRelation(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const product = a * b;
  switch (lang) {
    case "DE": return `${a} × ${b} = ${product}. Also: ${product} ÷ ${a} = ?`;
    case "EN": return `${a} × ${b} = ${product}. So: ${product} ÷ ${a} = ?`;
    case "RO": return `${a} × ${b} = ${product}. Deci: ${product} ÷ ${a} = ?`;
    default:   return `${a} × ${b} = ${product}. Tehát: ${product} ÷ ${a} = ?`;
  }
}

// Money: how many cents in 1 euro
export function qHowManyCentInEuro(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Cent hat 1 Euro?`;
    case "EN": return `How many cents are in 1 euro?`;
    case "RO": return `Câți cenți are 1 euro?`;
    default:   return `Hány cent van 1 euróban?`;
  }
}

// Money: euros to cents
export function qEuroToCent(euros: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${euros} Euro = ? Cent`;
    case "EN": return `${euros} euros = ? cents`;
    case "RO": return `${euros} euro = ? cenți`;
    default:   return `${euros} euró = ? cent`;
  }
}

// Weight: kg to grams
export function qKgToG(kg: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${kg} kg = ? g`;
    case "EN": return `${kg} kg = ? g`;
    case "RO": return `${kg} kg = ? g`;
    default:   return `${kg} kg = ? g`;
  }
}

// Time word problem: school day
export function wpSchoolDay(startH: number, durationH: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const end = startH + durationH;
  switch (lang) {
    case "DE": return `Der Unterricht beginnt um ${startH}:00 Uhr und dauert ${durationH} Stunden. Um wie viel Uhr endet er?`;
    case "EN": return `School starts at ${startH}:00 and lasts ${durationH} hours. What time does it end?`;
    case "RO": return `Școala începe la ora ${startH}:00 și durează ${durationH} ore. La ce oră se termină?`;
    default:   return `Az iskola ${startH}:00-kor kezdődik és ${durationH} óráig tart. Mikor ér véget?`;
  }
}

// Shape names for G2
export function getShapeNamesG2(countryCode: string): { square: string; rectangle: string; triangle: string; circle: string } {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return { square: "Quadrat", rectangle: "Rechteck", triangle: "Dreieck", circle: "Kreis" };
    case "EN": return { square: "square", rectangle: "rectangle", triangle: "triangle", circle: "circle" };
    case "RO": return { square: "pătrat", rectangle: "dreptunghi", triangle: "triunghi", circle: "cerc" };
    default:   return { square: "négyzet", rectangle: "téglalap", triangle: "háromszög", circle: "kör" };
  }
}

// ─── G2 NEW QUESTION HELPERS ─────────────────────────────

// Comparison with sign: "46 ☐ 64" → fill in <, >, or =
export function qFillInSign(a: number, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${a} ☐ ${b}  (< , > oder =)`;
    case "EN": return `${a} ☐ ${b}  (< , > or =)`;
    case "RO": return `${a} ☐ ${b}  (< , > sau =)`;
    default:   return `${a} ☐ ${b}  (< , > vagy =)`;
  }
}

// Compose number from tens + ones: "3 tízes + 4 egyes = ?"
export function qComposeFromParts(tens: number, ones: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${tens} Zehner + ${ones} Einer = ?`;
    case "EN": return `${tens} tens + ${ones} ones = ?`;
    case "RO": return `${tens} zeci + ${ones} unități = ?`;
    default:   return `${tens} tízes + ${ones} egyes = ?`;
  }
}

// Visual emoji counting addition: "🍎🍎🍎 + 🍎🍎 = ?"
export function qCountAdd(a: number, emoji: string, b: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const groupA = emoji.repeat(a);
  const groupB = emoji.repeat(b);
  switch (lang) {
    case "DE": return `${groupA} + ${groupB} = ?`;
    case "EN": return `${groupA} + ${groupB} = ?`;
    case "RO": return `${groupA} + ${groupB} = ?`;
    default:   return `${groupA} + ${groupB} = ?`;
  }
}

// Visual emoji counting subtraction: "🍪🍪🍪🍪🍪, 2 eltűnik → mennyi marad?"
export function qCountSub(total: number, emoji: string, removed: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const allItems = emoji.repeat(total);
  switch (lang) {
    case "DE": return `${allItems}  ${removed} verschwinden → wie viele bleiben?`;
    case "EN": return `${allItems}  ${removed} disappear → how many are left?`;
    case "RO": return `${allItems}  ${removed} dispar → câte rămân?`;
    default:   return `${allItems}  ${removed} eltűnik → mennyi marad?`;
  }
}

// Visual multiplication: rows of emoji "🍎🍎 / 🍎🍎 / 🍎🍎 = ? × ?"
export function qMulRows(rows: number, each: number, emoji: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const rowStr = emoji.repeat(each);
  const grid = Array(rows).fill(rowStr).join("  ");
  switch (lang) {
    case "DE": return `${grid}   ${rows} × ${each} = ?`;
    case "EN": return `${grid}   ${rows} × ${each} = ?`;
    case "RO": return `${grid}   ${rows} × ${each} = ?`;
    default:   return `${grid}   ${rows} × ${each} = ?`;
  }
}

// Shape/color pattern next element: "🟦🟩🟦🟩🟦 ?"
export function qPatternNext(sequence: string, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${sequence} ?  Was kommt als nächstes?`;
    case "EN": return `${sequence} ?  What comes next?`;
    case "RO": return `${sequence} ?  Ce urmează?`;
    default:   return `${sequence} ?  Mi jön ezután?`;
  }
}

// Shape pattern question (SVG visual — no sequence text needed)
export function qShapePatternQuestion(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Was kommt als nächstes? (Muster fortsetzen)";
    case "EN": return "What comes next? (Continue the pattern)";
    case "RO": return "Ce urmează? (Continuă modelul)";
    default:   return "Mi jön ezután? (Folytasd a mintát)";
  }
}

// Chart reading: which fruit appears more?
export function qChartMore(nameA: string, countA: number, nameB: string, countB: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const barA = "█".repeat(countA);
  const barB = "█".repeat(countB);
  switch (lang) {
    case "DE": return `${nameA}: ${barA} (${countA})  ${nameB}: ${barB} (${countB})  Wie viele ${nameA} gibt es?`;
    case "EN": return `${nameA}: ${barA} (${countA})  ${nameB}: ${barB} (${countB})  How many ${nameA} are there?`;
    case "RO": return `${nameA}: ${barA} (${countA})  ${nameB}: ${barB} (${countB})  Câte ${nameA} sunt?`;
    default:   return `${nameA}: ${barA} (${countA})  ${nameB}: ${barB} (${countB})  Hány ${nameA} van?`;
  }
}

// ─── ARITHMETIC RANGE HELPERS (Grade 4) ───────────────

export function qErgaenzeAuf10000(part: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `${part} + ? = 10 000`;
    case "EN": return `${part} + ? = 10,000`;
    case "RO": return `${part} + ? = 10 000`;
    default:   return `${part} + ? = 10 000`;
  }
}

export function qRoundTo10000(n: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Runde ${n} auf den nächsten Zehntausender.`;
    case "EN": return `Round ${n} to the nearest 10,000.`;
    case "RO": return `Rotunjește ${n} la zece mii.`;
    default:   return `Kerekítsd ${n}-t a legközelebbi 10 000-esre!`;
  }
}

export function qWeightConvert(val: number, from: string, to: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const units: Record<string, Record<string, string>> = {
    g:  { DE: "g",    EN: "g",    RO: "g",    HU: "g" },
    kg: { DE: "kg",   EN: "kg",   RO: "kg",   HU: "kg" },
    t:  { DE: "t",    EN: "t",    RO: "t",    HU: "t" },
  };
  const f = units[from]?.[lang] ?? from;
  const t2 = units[to]?.[lang] ?? to;
  switch (lang) {
    case "DE": return `${val} ${f} = ? ${t2}`;
    case "EN": return `${val} ${f} = ? ${t2}`;
    case "RO": return `${val} ${f} = ? ${t2}`;
    default:   return `${val} ${f} = ? ${t2}`;
  }
}

// ─── ANGLE / GEOMETRY (Grade 4) ───────────────────────

export function qRightAngleDeg(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Grad hat ein rechter Winkel?";
    case "EN": return "How many degrees is a right angle?";
    case "RO": return "Câte grade are un unghi drept?";
    default:   return "Hány fokos a derékszög?";
  }
}

export function qStraightAngleDeg(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Grad hat ein gestreckter Winkel?";
    case "EN": return "How many degrees is a straight angle?";
    case "RO": return "Câte grade are un unghi plat?";
    default:   return "Hány fokos a nyújtott szög?";
  }
}

export function qFullAngleDeg(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie viele Grad hat ein Vollwinkel?";
    case "EN": return "How many degrees is a full rotation?";
    case "RO": return "Câte grade are un unghi complet?";
    default:   return "Hány fokos a teljes szög (körülfordulás)?";
  }
}

export function qComplementToRight(a: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Wie viele Grad fehlen bei ${a}° bis zum rechten Winkel (90°)?`;
    case "EN": return `How many degrees are missing from ${a}° to make a right angle (90°)?`;
    case "RO": return `Câte grade lipsesc de la ${a}° pentru a completa un unghi drept (90°)?`;
    default:   return `Hány fok hiányzik ${a}°-hoz, hogy derékszög (90°) legyen?`;
  }
}

export function qAngleSumTriangle(countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return "Wie groß ist die Winkelsumme in einem Dreieck?";
    case "EN": return "What is the sum of all angles in a triangle?";
    case "RO": return "Cât este suma unghiurilor unui triunghi?";
    default:   return "Mekkora egy háromszög szögeinek összege?";
  }
}

export function qRightAnglesInShape(shape: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const shapes: Record<string, Record<string, string>> = {
    rectangle: { DE: "ein Rechteck", EN: "a rectangle", RO: "un dreptunghi", HU: "a téglalapnak" },
    square:    { DE: "ein Quadrat",   EN: "a square",    RO: "un pătrat",    HU: "a négyzetnek" },
  };
  const s = shapes[shape]?.[lang] ?? shapes[shape]?.["EN"] ?? shape;
  switch (lang) {
    case "DE": return `Wie viele rechte Winkel hat ${s}?`;
    case "EN": return `How many right angles does ${s} have?`;
    case "RO": return `Câte unghiuri drepte are ${s}?`;
    default:   return `Hány derékszöge van ${s}?`;
  }
}

export function qSymmetryAxes(shape: string, countryCode: string): string {
  const lang = getLang(countryCode);
  const shapes: Record<string, Record<string, string>> = {
    square:             { DE: "ein Quadrat",               EN: "a square",               RO: "un pătrat",               HU: "a négyzet" },
    rectangle:          { DE: "ein Rechteck",              EN: "a rectangle",             RO: "un dreptunghi",           HU: "a téglalap" },
    equilateralTriangle:{ DE: "ein gleichseitiges Dreieck",EN: "an equilateral triangle", RO: "un triunghi echilateral", HU: "a szabályos háromszög" },
    isoscelesTriangle:  { DE: "ein gleichschenkliges Dreieck", EN: "an isosceles triangle", RO: "un triunghi isoscel", HU: "az egyenlő szárú háromszög" },
  };
  const s = shapes[shape]?.[lang] ?? shapes[shape]?.["EN"] ?? shape;
  switch (lang) {
    case "DE": return `Wie viele Symmetrieachsen hat ${s}?`;
    case "EN": return `How many lines of symmetry does ${s} have?`;
    case "RO": return `Câte axe de simetrie are ${s}?`;
    default:   return `Hány szimmetriatengelye van ${s}nak?`;
  }
}

export function qAngleType(a: number, countryCode: string): string {
  const lang = getLang(countryCode);
  switch (lang) {
    case "DE": return `Ein Winkel beträgt ${a}°. Ist er spitz (1), recht (2) oder stumpf (3)?`;
    case "EN": return `An angle is ${a}°. Is it acute (1), right (2), or obtuse (3)?`;
    case "RO": return `Un unghi este ${a}°. Este ascuțit (1), drept (2) sau obtuz (3)?`;
    default:   return `Egy szög ${a}°. Hegyesszög (1), derékszög (2) vagy tompaszög (3)?`;
  }
}

// Word problem: visual sharing of items
export function wpVisualShare(total: number, emoji: string, kids: number, countryCode: string): string {
  const lang = getLang(countryCode);
  const items = emoji.repeat(Math.min(total, 12));
  switch (lang) {
    case "DE": return `${items}  ${total} Stück werden gleichmäßig auf ${kids} Kinder verteilt. Wie viele bekommt jedes Kind?`;
    case "EN": return `${items}  ${total} items shared equally among ${kids} children. How many does each child get?`;
    case "RO": return `${items}  ${total} obiecte împărțite egal între ${kids} copii. Câte primește fiecare?`;
    default:   return `${items}  ${total} darabot ${kids} gyerek közt osztanak el egyenlően. Mindenki hányat kap?`;
  }
}
