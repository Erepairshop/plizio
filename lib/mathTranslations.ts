// ─── MATH TRANSLATIONS ─────────────────────────────
// All translatable text for math test, keyed by country code
// Supports: HU, DE, EN (US/GB), RO

export type Lang = "HU" | "DE" | "EN" | "RO";

export function getLang(countryCode: string): Lang {
  if (countryCode === "DE") return "DE";
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
