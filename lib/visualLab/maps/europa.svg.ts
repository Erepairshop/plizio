export const europaViewBox = "0 0 1000 800";

export interface EuropeCountry {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  capitalCoords: [number, number];
  path: string;
}

export const europaMap: EuropeCountry[] = [
  {
    "id": "DE",
    "name": {
      "de": "Deutschland",
      "hu": "Németország",
      "ro": "Germania",
      "en": "Germany"
    },
    "capital": "Berlin",
    "capitalCoords": [
      548.6,
      450.0
    ],
    "path": "M 442.9,400.0 L 500.0,400.0 L 557.1,420.0 L 571.4,480.0 L 542.9,540.0 L 485.7,540.0 L 442.9,520.0 L 442.9,460.0 Z"
  },
  {
    "id": "FR",
    "name": {
      "de": "Frankreich",
      "hu": "Franciaország",
      "ro": "Franța",
      "en": "France"
    },
    "capital": "Paris",
    "capitalCoords": [
      390.0,
      524.0
    ],
    "path": "M 285.7,540.0 L 357.1,480.0 L 471.4,520.0 L 457.1,640.0 L 400.0,640.0 L 328.6,640.0 Z"
  },
  {
    "id": "IT",
    "name": {
      "de": "Italien",
      "hu": "Olaszország",
      "ro": "Italia",
      "en": "Italy"
    },
    "capital": "Roma",
    "capitalCoords": [
      535.7,
      662.0
    ],
    "path": "M 457.1,600.0 L 528.6,560.0 L 557.1,600.0 L 614.3,700.0 L 571.4,740.0 L 528.6,680.0 L 500.0,620.0 Z"
  },
  {
    "id": "ES",
    "name": {
      "de": "Spanien",
      "hu": "Spanyolország",
      "ro": "Spania",
      "en": "Spain"
    },
    "capital": "Madrid",
    "capitalCoords": [
      304.3,
      692.0
    ],
    "path": "M 228.6,640.0 L 328.6,640.0 L 400.0,660.0 L 357.1,780.0 L 271.4,780.0 L 228.6,760.0 Z"
  },
  {
    "id": "RO",
    "name": {
      "de": "Rumänien",
      "hu": "Románia",
      "ro": "România",
      "en": "Romania"
    },
    "capital": "București",
    "capitalCoords": [
      730.0,
      612.0
    ],
    "path": "M 642.9,540.0 L 742.9,540.0 L 785.7,600.0 L 771.4,620.0 L 685.7,620.0 L 642.9,600.0 Z"
  },
  {
    "id": "HU",
    "name": {
      "de": "Ungarn",
      "hu": "Magyarország",
      "ro": "Ungaria",
      "en": "Hungary"
    },
    "capital": "Budapest",
    "capitalCoords": [
      628.6,
      550.0
    ],
    "path": "M 585.7,540.0 L 685.7,540.0 L 685.7,580.0 L 585.7,580.0 Z"
  },
  {
    "id": "GB",
    "name": {
      "de": "Vereinigtes Königreich",
      "hu": "Egyesült Királyság",
      "ro": "Regatul Unit",
      "en": "United Kingdom"
    },
    "capital": "London",
    "capitalCoords": [
      355.7,
      470.0
    ],
    "path": "M 271.4,500.0 L 342.9,480.0 L 342.9,400.0 L 285.7,320.0 L 257.1,400.0 Z"
  },
  {
    "id": "PL",
    "name": {
      "de": "Polen",
      "hu": "Lengyelország",
      "ro": "Polonia",
      "en": "Poland"
    },
    "capital": "Warszawa",
    "capitalCoords": [
      657.1,
      456.0
    ],
    "path": "M 557.1,420.0 L 628.6,400.0 L 700.0,420.0 L 700.0,500.0 L 628.6,520.0 L 571.4,500.0 Z"
  },
  {
    "id": "UA",
    "name": {
      "de": "Ukraine",
      "hu": "Ukrajna",
      "ro": "Ucraina",
      "en": "Ukraine"
    },
    "capital": "Kyiv",
    "capitalCoords": [
      792.9,
      492.0
    ],
    "path": "M 700.0,460.0 L 857.1,460.0 L 928.6,520.0 L 857.1,580.0 L 714.3,580.0 Z"
  },
  {
    "id": "GR",
    "name": {
      "de": "Griechenland",
      "hu": "Görögország",
      "ro": "Grecia",
      "en": "Greece"
    },
    "capital": "Athina",
    "capitalCoords": [
      695.7,
      740.0
    ],
    "path": "M 642.9,700.0 L 728.6,680.0 L 714.3,780.0 L 671.4,780.0 Z"
  },
  {
    "id": "SE",
    "name": {
      "de": "Schweden",
      "hu": "Svédország",
      "ro": "Suedia",
      "en": "Sweden"
    },
    "capital": "Stockholm",
    "capitalCoords": [
      615.7,
      314.0
    ],
    "path": "M 514.3,320.0 L 571.4,400.0 L 642.9,380.0 L 700.0,180.0 L 642.9,120.0 L 528.6,240.0 Z"
  },
  {
    "id": "NO",
    "name": {
      "de": "Norwegen",
      "hu": "Norvégia",
      "ro": "Norvegia",
      "en": "Norway"
    },
    "capital": "Oslo",
    "capitalCoords": [
      510.0,
      302.0
    ],
    "path": "M 428.6,340.0 L 500.0,340.0 L 542.9,240.0 L 642.9,100.0 L 785.7,80.0 L 642.9,140.0 L 500.0,240.0 Z"
  },
  {
    "id": "FI",
    "name": {
      "de": "Finnland",
      "hu": "Finnország",
      "ro": "Finlanda",
      "en": "Finland"
    },
    "capital": "Helsinki",
    "capitalCoords": [
      712.9,
      296.0
    ],
    "path": "M 657.1,300.0 L 785.7,300.0 L 814.3,100.0 L 714.3,100.0 L 657.1,140.0 Z"
  },
  {
    "id": "AT",
    "name": {
      "de": "Österreich",
      "hu": "Ausztria",
      "ro": "Austria",
      "en": "Austria"
    },
    "capital": "Wien",
    "capitalCoords": [
      591.4,
      536.0
    ],
    "path": "M 500.0,560.0 L 600.0,540.0 L 600.0,560.0 L 500.0,580.0 Z"
  },
  {
    "id": "CH",
    "name": {
      "de": "Schweiz",
      "hu": "Svájc",
      "ro": "Elveția",
      "en": "Switzerland"
    },
    "capital": "Bern",
    "capitalCoords": [
      462.9,
      562.0
    ],
    "path": "M 442.9,560.0 L 500.0,560.0 L 500.0,580.0 L 442.9,580.0 Z"
  },
  {
    "id": "PT",
    "name": {
      "de": "Portugal",
      "hu": "Portugália",
      "ro": "Portugalia",
      "en": "Portugal"
    },
    "capital": "Lisboa",
    "capitalCoords": [
      227.1,
      726.0
    ],
    "path": "M 228.6,660.0 L 257.1,660.0 L 257.1,760.0 L 228.6,760.0 Z"
  },
  {
    "id": "IE",
    "name": {
      "de": "Irland",
      "hu": "Írország",
      "ro": "Irlanda",
      "en": "Ireland"
    },
    "capital": "Dublin",
    "capitalCoords": [
      267.1,
      434.0
    ],
    "path": "M 214.3,460.0 L 271.4,460.0 L 271.4,400.0 L 214.3,400.0 Z"
  }
];

export function projectCoordsEuropa(lon: number, lat: number): [number, number] {
  const x = ((lon + 25) / 70) * 1000;
  const y = (1 - (lat - 35) / 40) * 800;
  return [x, y];
}
