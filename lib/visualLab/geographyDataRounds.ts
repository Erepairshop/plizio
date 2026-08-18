import type { GeographyLevel } from './geographyCurriculum';
import type { GeographySkillLang, GeographySkillRound } from './geographySkillContent';

type Grade = 5 | 6 | 7 | 8;

const TITLE: Record<GeographySkillLang, string> = {
  de: 'Geo-Daten-Check',
  en: 'Geo Data Check',
  hu: 'Földrajzi adatvizsgáló',
  ro: 'Verificarea datelor geo',
};

const INSTRUCTION: Record<GeographySkillLang, string> = {
  de: 'Lies die Angaben, rechne sorgfältig und ziehe die passende Schlussfolgerung.',
  en: 'Read the data, calculate carefully and draw the matching conclusion.',
  hu: 'Olvasd le az adatokat, számolj pontosan, majd vond le a helyes következtetést.',
  ro: 'Citește datele, calculează atent și trage concluzia potrivită.',
};

const CONTEXT: Record<Grade, Record<GeographySkillLang, string>> = {
  5: { de: 'Karten und Entfernungen', en: 'Maps and distances', hu: 'Térképek és távolságok', ro: 'Hărți și distanțe' },
  6: { de: 'Höhe, Zeit und Klima', en: 'Elevation, time and climate', hu: 'Magasság, idő és éghajlat', ro: 'Altitudine, timp și climă' },
  7: { de: 'Bevölkerung und Klimadaten', en: 'Population and climate data', hu: 'Népességi és éghajlati adatok', ro: 'Date despre populație și climă' },
  8: { de: 'Wirtschaft und Nachhaltigkeit', en: 'Economy and sustainability', hu: 'Gazdaság és fenntarthatóság', ro: 'Economie și sustenabilitate' },
};

function localized(lang: GeographySkillLang, de: string, en: string, hu: string, ro: string): string {
  return { de, en, hu, ro }[lang];
}

function rotatedOptions(correct: string, wrong: string[], seed: number): string[] {
  const options = [correct, ...wrong.filter((value) => value !== correct)].slice(0, 4);
  const shift = seed % options.length;
  return [...options.slice(shift), ...options.slice(0, shift)];
}

function numberOptions(correct: number, unit: string, seed: number, deltas: number[]): { options: string[]; answer: string } {
  const render = (value: number) => `${value.toLocaleString('de-DE')} ${unit}`.trim();
  const answer = render(correct);
  return {
    answer,
    options: rotatedOptions(answer, deltas.map((delta) => render(Math.max(0, correct + delta))), seed),
  };
}

function explanation(lang: GeographySkillLang, calculation: string, answer: string): string {
  return localized(
    lang,
    `Rechenweg: ${calculation}. Das Ergebnis ist ${answer}.`,
    `Calculation: ${calculation}. The result is ${answer}.`,
    `Számítás: ${calculation}. Az eredmény ${answer}.`,
    `Calcul: ${calculation}. Rezultatul este ${answer}.`,
  );
}

function scenario(grade: Grade, lang: GeographySkillLang, level: GeographyLevel, index: number) {
  const variant = index % 4;
  const n = index + level;

  if (grade === 5 && variant === 0) {
    const kmPerCm = 2 + level;
    const cm = 2 + (index % 5);
    const correct = kmPerCm * cm;
    const values = numberOptions(correct, 'km', n, [-kmPerCm, kmPerCm, kmPerCm * 2]);
    return {
      prompt: localized(lang, `Auf einer Karte entsprechen 1 cm genau ${kmPerCm} km. Eine Strecke misst ${cm} cm. Wie lang ist sie in Wirklichkeit?`, `On a map, 1 cm represents ${kmPerCm} km. A route measures ${cm} cm. How long is it in reality?`, `A térképen 1 cm ${kmPerCm} km-nek felel meg. Egy út ${cm} cm hosszú. Mekkora a valós távolság?`, `Pe hartă, 1 cm reprezintă ${kmPerCm} km. Un traseu măsoară ${cm} cm. Care este distanța reală?`),
      ...values,
      explanation: explanation(lang, `${cm} × ${kmPerCm}`, values.answer),
    };
  }
  if (grade === 5 && variant === 1) {
    const distances = [4 + n, 7 + n, 3 + n];
    const correct = Math.min(...distances);
    const names = ['A', 'B', 'C'];
    const answer = names[distances.indexOf(correct)];
    return {
      prompt: localized(lang, `Vom Bahnhof sind es zum Ort A ${distances[0]} km, zu B ${distances[1]} km und zu C ${distances[2]} km. Welcher Ort liegt am nächsten?`, `From the station it is ${distances[0]} km to A, ${distances[1]} km to B and ${distances[2]} km to C. Which place is closest?`, `Az állomástól A ${distances[0]} km, B ${distances[1]} km, C pedig ${distances[2]} km. Melyik van a legközelebb?`, `De la gară sunt ${distances[0]} km până la A, ${distances[1]} km până la B și ${distances[2]} km până la C. Care este cel mai aproape?`),
      answer,
      options: rotatedOptions(answer, names.filter((name) => name !== answer).concat(localized(lang, 'gleich weit', 'same distance', 'egyenlő távolság', 'aceeași distanță')), n),
      explanation: localized(lang, `${correct} km ist der kleinste Wert.`, `${correct} km is the smallest value.`, `${correct} km a legkisebb érték.`, `${correct} km este cea mai mică valoare.`),
    };
  }
  if (grade === 5 && variant === 2) {
    const start = 12 + n;
    const end = start + 6 + level;
    const values = numberOptions(end - start, '°C', n, [-2, 2, 4]);
    return {
      prompt: localized(lang, `Am Morgen zeigt das Thermometer ${start} °C, am Nachmittag ${end} °C. Um wie viele Grad ist die Temperatur gestiegen?`, `The thermometer shows ${start} °C in the morning and ${end} °C in the afternoon. By how many degrees did it rise?`, `Reggel ${start} °C, délután ${end} °C van. Hány fokkal emelkedett a hőmérséklet?`, `Dimineața sunt ${start} °C, iar după-amiaza ${end} °C. Cu câte grade a crescut temperatura?`),
      ...values,
      explanation: explanation(lang, `${end} − ${start}`, values.answer),
    };
  }
  if (grade === 5) {
    const north = 8 + n;
    const south = north + 3 + level;
    const values = numberOptions(south - north, 'mm', n, [-2, 2, 5]);
    return {
      prompt: localized(lang, `Eine Wettertabelle zeigt im Norden ${north} mm und im Süden ${south} mm Regen. Wie groß ist der Unterschied?`, `A weather table shows ${north} mm of rain in the north and ${south} mm in the south. What is the difference?`, `Az időjárási táblázat északon ${north} mm, délen ${south} mm esőt mutat. Mennyi a különbség?`, `Tabelul meteo arată ${north} mm de ploaie în nord și ${south} mm în sud. Care este diferența?`),
      ...values,
      explanation: explanation(lang, `${south} − ${north}`, values.answer),
    };
  }

  if (grade === 6 && variant === 0) {
    const offset = 1 + (level % 4);
    const home = 8 + (index % 5);
    const values = numberOptions(home + offset, localized(lang, 'Uhr', 'o’clock', 'óra', 'ora'), n, [-2, -1, 1]);
    return {
      prompt: localized(lang, `Zu Hause ist es ${home}:00 Uhr. Ein Ziel liegt ${offset} Zeitzonen weiter östlich. Wie spät ist es dort?`, `At home it is ${home}:00. A destination is ${offset} time zones farther east. What time is it there?`, `Otthon ${home}:00 van. A cél ${offset} időzónával keletebbre fekszik. Mennyi az idő ott?`, `Acasă este ora ${home}:00. Destinația se află cu ${offset} fusuri orare mai la est. Cât este ceasul acolo?`),
      ...values,
      explanation: explanation(lang, `${home} + ${offset}`, values.answer),
    };
  }
  if (grade === 6 && variant === 1) {
    const valley = 180 + index * 15;
    const peak = valley + 600 + level * 120;
    const values = numberOptions(peak - valley, 'm', n, [-120, 120, 240]);
    return {
      prompt: localized(lang, `Ein Tal liegt auf ${valley} m, ein Gipfel auf ${peak} m. Wie groß ist der Höhenunterschied?`, `A valley lies at ${valley} m and a peak at ${peak} m. What is the elevation difference?`, `A völgy ${valley} m, a csúcs ${peak} m magasan fekszik. Mennyi a szintkülönbség?`, `O vale se află la ${valley} m, iar un vârf la ${peak} m. Care este diferența de altitudine?`),
      ...values,
      explanation: explanation(lang, `${peak} − ${valley}`, values.answer),
    };
  }
  if (grade === 6 && variant === 2) {
    const cold = -4 + level;
    const warm = 18 + level + (index % 3);
    const values = numberOptions(warm - cold, '°C', n, [-3, 3, 6]);
    return {
      prompt: localized(lang, `Der kälteste Monatswert beträgt ${cold} °C, der wärmste ${warm} °C. Wie groß ist die Jahresschwankung?`, `The coldest monthly value is ${cold} °C and the warmest ${warm} °C. What is the annual range?`, `A leghidegebb havi érték ${cold} °C, a legmelegebb ${warm} °C. Mekkora az éves hőingás?`, `Cea mai rece medie lunară este ${cold} °C, iar cea mai caldă ${warm} °C. Care este amplitudinea anuală?`),
      ...values,
      explanation: explanation(lang, `${warm} − (${cold})`, values.answer),
    };
  }
  if (grade === 6) {
    const monthly = 35 + level * 5 + index;
    const values = numberOptions(monthly * 12, 'mm', n, [-monthly, monthly, monthly * 2]);
    return {
      prompt: localized(lang, `In einem vereinfachten Klimamodell fallen jeden Monat ${monthly} mm Niederschlag. Wie viel ist das im Jahr?`, `In a simplified climate model, ${monthly} mm of precipitation falls every month. How much is that per year?`, `Egy egyszerűsített klímamodellben havonta ${monthly} mm csapadék hullik. Mennyi ez egy év alatt?`, `Într-un model climatic simplificat cad ${monthly} mm de precipitații în fiecare lună. Cât înseamnă într-un an?`),
      ...values,
      explanation: explanation(lang, `12 × ${monthly}`, values.answer),
    };
  }

  if (grade === 7 && variant === 0) {
    const population = 2 + level + (index % 3);
    const area = 20 + level * 5;
    const correct = Math.round((population * 1_000_000) / (area * 1_000));
    const values = numberOptions(correct, localized(lang, 'Einw./km²', 'people/km²', 'fő/km²', 'loc./km²'), n, [-20, 20, 50]);
    return {
      prompt: localized(lang, `Eine Region hat ${population} Mio. Einwohner und ${area}.000 km² Fläche. Wie hoch ist die Bevölkerungsdichte ungefähr?`, `A region has ${population} million inhabitants and an area of ${area},000 km². What is its approximate population density?`, `Egy régióban ${population} millió ember él ${area} 000 km²-en. Körülbelül mekkora a népsűrűség?`, `O regiune are ${population} milioane de locuitori și ${area}.000 km². Care este densitatea aproximativă?`),
      ...values,
      explanation: explanation(lang, `${population}.000.000 ÷ ${area}.000`, values.answer),
    };
  }
  if (grade === 7 && variant === 1) {
    const births = 18 + level * 2;
    const deaths = 10 + (index % 4);
    const values = numberOptions(births - deaths, '‰', n, [-3, 3, 6]);
    return {
      prompt: localized(lang, `Die Geburtenrate liegt bei ${births} ‰, die Sterberate bei ${deaths} ‰. Wie hoch ist der natürliche Zuwachs?`, `The birth rate is ${births}‰ and the death rate is ${deaths}‰. What is the natural increase?`, `A születési arány ${births}‰, a halálozási arány ${deaths}‰. Mekkora a természetes szaporodás?`, `Rata natalității este ${births}‰, iar mortalitatea ${deaths}‰. Care este sporul natural?`),
      ...values,
      explanation: explanation(lang, `${births} − ${deaths}`, values.answer),
    };
  }
  if (grade === 7 && variant === 2) {
    const start = 48 + level * 3;
    const end = start + 5 + (index % 4);
    const values = numberOptions(end - start, localized(lang, 'Prozentpunkte', 'percentage points', 'százalékpont', 'puncte procentuale'), n, [-2, 2, 4]);
    return {
      prompt: localized(lang, `Der Stadtbevölkerungsanteil steigt von ${start} % auf ${end} %. Um wie viele Prozentpunkte steigt er?`, `The urban population share rises from ${start}% to ${end}%. By how many percentage points?`, `A városi népesség aránya ${start}%-ról ${end}%-ra nő. Hány százalékpont a növekedés?`, `Ponderea populației urbane crește de la ${start}% la ${end}%. Cu câte puncte procentuale?`),
      ...values,
      explanation: explanation(lang, `${end} − ${start}`, values.answer),
    };
  }
  if (grade === 7) {
    const immigrants = 80 + level * 15;
    const emigrants = 35 + index * 4;
    const values = numberOptions(immigrants - emigrants, localized(lang, 'Tsd.', 'thousand', 'ezer', 'mii'), n, [-15, 15, 30]);
    return {
      prompt: localized(lang, `In ein Land ziehen ${immigrants}.000 Menschen, ${emigrants}.000 verlassen es. Wie hoch ist der Wanderungssaldo?`, `${immigrants},000 people move into a country and ${emigrants},000 leave. What is the net migration?`, `${immigrants} 000 ember költözik be, ${emigrants} 000 pedig elhagyja az országot. Mennyi a vándorlási egyenleg?`, `${immigrants}.000 de persoane intră într-o țară, iar ${emigrants}.000 pleacă. Care este soldul migrației?`),
      ...values,
      explanation: explanation(lang, `${immigrants} − ${emigrants}`, values.answer),
    };
  }

  if (grade === 8 && variant === 0) {
    const primary = 8 + level;
    const secondary = 24 + index;
    const correct = 100 - primary - secondary;
    const values = numberOptions(correct, '%', n, [-5, 5, 10]);
    return {
      prompt: localized(lang, `Primärer Sektor: ${primary} %, sekundärer Sektor: ${secondary} %. Welchen Anteil hat der tertiäre Sektor, wenn zusammen 100 % erreicht werden?`, `Primary sector: ${primary}%, secondary sector: ${secondary}%. What share does the tertiary sector have if the total is 100%?`, `Elsődleges szektor: ${primary}%, másodlagos: ${secondary}%. Mennyi a harmadlagos szektor aránya, ha az összeg 100%?`, `Sector primar: ${primary}%, secundar: ${secondary}%. Ce pondere are sectorul terțiar dacă totalul este 100%?`),
      ...values,
      explanation: explanation(lang, `100 − ${primary} − ${secondary}`, values.answer),
    };
  }
  if (grade === 8 && variant === 1) {
    const exports = 120 + level * 12;
    const imports = 95 + index * 3;
    const values = numberOptions(exports - imports, 'Mrd. €', n, [-10, 10, 20]);
    return {
      prompt: localized(lang, `Ein Land exportiert Waren für ${exports} Mrd. € und importiert für ${imports} Mrd. €. Wie hoch ist der Handelsbilanzsaldo?`, `A country exports goods worth €${exports}bn and imports €${imports}bn. What is its trade balance?`, `Egy ország ${exports} milliárd euró értékben exportál és ${imports} milliárdért importál. Mennyi a külkereskedelmi egyenleg?`, `O țară exportă bunuri de ${exports} mld. € și importă de ${imports} mld. €. Care este soldul comercial?`),
      ...values,
      explanation: explanation(lang, `${exports} − ${imports}`, values.answer),
    };
  }
  if (grade === 8 && variant === 2) {
    const oldValue = 100 + level * 20;
    const reduction = 10 + index * 2;
    const newValue = oldValue - reduction;
    const correct = Math.round((reduction / oldValue) * 100);
    const values = numberOptions(correct, '%', n, [-3, 3, 6]);
    return {
      prompt: localized(lang, `Der CO₂-Ausstoß sinkt von ${oldValue} auf ${newValue} Einheiten. Um wie viel Prozent ist er ungefähr gesunken?`, `CO₂ emissions fall from ${oldValue} to ${newValue} units. By approximately what percentage?`, `A CO₂-kibocsátás ${oldValue} egységről ${newValue}-re csökken. Körülbelül hány százalékos a csökkenés?`, `Emisiile de CO₂ scad de la ${oldValue} la ${newValue} unități. Cu aproximativ câte procente?`),
      ...values,
      explanation: explanation(lang, `${reduction} ÷ ${oldValue} × 100`, values.answer),
    };
  }
  const current = 32 + level * 4;
  const target = 55 + index;
  const values = numberOptions(target - current, localized(lang, 'Prozentpunkte', 'percentage points', 'százalékpont', 'puncte procentuale'), n, [-4, 4, 8]);
  return {
    prompt: localized(lang, `Der Anteil erneuerbarer Energien liegt bei ${current} %, das Ziel bei ${target} %. Wie viele Prozentpunkte fehlen?`, `Renewable energy stands at ${current}% and the target is ${target}%. How many percentage points are missing?`, `A megújuló energia aránya ${current}%, a cél ${target}%. Hány százalékpont hiányzik?`, `Energia regenerabilă are ${current}%, iar ținta este ${target}%. Câte puncte procentuale lipsesc?`),
    ...values,
    explanation: explanation(lang, `${target} − ${current}`, values.answer),
  };
}

export function buildGeographyDataRounds(
  grade: Grade,
  lang: GeographySkillLang,
  level: GeographyLevel,
  count: number,
): GeographySkillRound[] {
  return Array.from({ length: Math.max(1, count) }, (_, index) => {
    const item = scenario(grade, lang, level, index);
    return {
      id: `geo-daten-check-g${grade}-l${level}-${index + 1}`,
      gameId: 'geo-daten-check',
      grade,
      level,
      title: TITLE[lang],
      instruction: INSTRUCTION[lang],
      context: CONTEXT[grade][lang],
      prompt: item.prompt,
      options: item.options,
      correctAnswer: item.answer,
      explanation: item.explanation,
    };
  });
}
