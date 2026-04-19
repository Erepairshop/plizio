export const europaViewBox = "0 0 1000 800";

export interface EuropeCountry {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  capitalCoords: [number, number];
  labelX: number;
  labelY: number;
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
    "labelX": 498.2,
    "labelY": 470.0,
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
    "labelX": 383.3,
    "labelY": 576.7,
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
    "labelX": 536.7,
    "labelY": 642.9,
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
    "labelX": 302.4,
    "labelY": 710.0,
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
    "labelX": 711.9,
    "labelY": 586.7,
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
    "labelX": 635.7,
    "labelY": 560.0,
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
    "labelX": 300.0,
    "labelY": 420.0,
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
    "labelX": 630.9,
    "labelY": 460.0,
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
    "labelX": 811.4,
    "labelY": 520.0,
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
    "labelX": 689.3,
    "labelY": 735.0,
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
    "labelX": 600.0,
    "labelY": 273.3,
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
    "labelX": 577.6,
    "labelY": 211.4,
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
    "labelX": 725.7,
    "labelY": 188.0,
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
    "labelX": 550.0,
    "labelY": 560.0,
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
    "labelX": 471.5,
    "labelY": 570.0,
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
    "labelX": 242.9,
    "labelY": 710.0,
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
    "labelX": 242.8,
    "labelY": 430.0,
    "path": "M 214.3,460.0 L 271.4,460.0 L 271.4,400.0 L 214.3,400.0 Z"
  },
  {
    "id": "BE",
    "name": {
      "de": "Belgien",
      "hu": "Belgium",
      "ro": "Belgia",
      "en": "Belgium"
    },
    "capital": "Bruxelles",
    "capitalCoords": [
      418.6,
      484.0
    ],
    "labelX": 414.3,
    "labelY": 500.0,
    "path": "M 385.7,480.0 L 442.9,480.0 L 442.9,520.0 L 385.7,520.0 Z"
  },
  {
    "id": "NL",
    "name": {
      "de": "Niederlande",
      "hu": "Hollandia",
      "ro": "Olanda",
      "en": "Netherlands"
    },
    "capital": "Amsterdam",
    "capitalCoords": [
      427.1,
      452.0
    ],
    "labelX": 428.6,
    "labelY": 460.0,
    "path": "M 400.0,440.0 L 457.1,440.0 L 457.1,480.0 L 400.0,480.0 Z"
  },
  {
    "id": "DK",
    "name": {
      "de": "Dänemark",
      "hu": "Dánia",
      "ro": "Danemarca",
      "en": "Denmark"
    },
    "capital": "København",
    "capitalCoords": [
      537.1,
      386.0
    ],
    "labelX": 507.1,
    "labelY": 390.0,
    "path": "M 471.4,360.0 L 542.9,360.0 L 542.9,420.0 L 471.4,420.0 Z"
  },
  {
    "id": "CZ",
    "name": {
      "de": "Tschechien",
      "hu": "Csehország",
      "ro": "Cehia",
      "en": "Czech Republic"
    },
    "capital": "Praha",
    "capitalCoords": [
      562.9,
      498.0
    ],
    "labelX": 578.6,
    "labelY": 510.0,
    "path": "M 528.6,480.0 L 628.6,480.0 L 628.6,540.0 L 528.6,540.0 Z"
  },
  {
    "id": "SK",
    "name": {
      "de": "Slowakei",
      "hu": "Szlovákia",
      "ro": "Slovacia",
      "en": "Slovakia"
    },
    "capital": "Bratislava",
    "capitalCoords": [
      601.4,
      538.0
    ],
    "labelX": 642.9,
    "labelY": 540.0,
    "path": "M 600.0,520.0 L 685.7,520.0 L 685.7,560.0 L 600.0,560.0 Z"
  },
  {
    "id": "HR",
    "name": {
      "de": "Kroatien",
      "hu": "Horvátország",
      "ro": "Croația",
      "en": "Croatia"
    },
    "capital": "Zagreb",
    "capitalCoords": [
      585.7,
      584.0
    ],
    "labelX": 585.8,
    "labelY": 610.0,
    "path": "M 542.9,580.0 L 628.6,580.0 L 628.6,640.0 L 542.9,640.0 Z"
  },
  {
    "id": "SI",
    "name": {
      "de": "Slowenien",
      "hu": "Szlovénia",
      "ro": "Slovenia",
      "en": "Slovenia"
    },
    "capital": "Ljubljana",
    "capitalCoords": [
      564.3,
      578.0
    ],
    "labelX": 564.3,
    "labelY": 580.0,
    "path": "M 542.9,560.0 L 585.7,560.0 L 585.7,600.0 L 542.9,600.0 Z"
  },
  {
    "id": "RS",
    "name": {
      "de": "Serbien",
      "hu": "Szerbia",
      "ro": "Serbia",
      "en": "Serbia"
    },
    "capital": "Beograd",
    "capitalCoords": [
      650.0,
      604.0
    ],
    "labelX": 650.0,
    "labelY": 620.0,
    "path": "M 614.3,580.0 L 685.7,580.0 L 685.7,660.0 L 614.3,660.0 Z"
  },
  {
    "id": "BG",
    "name": {
      "de": "Bulgarien",
      "hu": "Bulgária",
      "ro": "Bulgaria",
      "en": "Bulgaria"
    },
    "capital": "Sofia",
    "capitalCoords": [
      690.0,
      646.0
    ],
    "labelX": 721.4,
    "labelY": 650.0,
    "path": "M 671.4,620.0 L 771.4,620.0 L 771.4,680.0 L 671.4,680.0 Z"
  },
  {
    "id": "EE",
    "name": {
      "de": "Estland",
      "hu": "Észtország",
      "ro": "Estonia",
      "en": "Estonia"
    },
    "capital": "Tallinn",
    "capitalCoords": [
      711.4,
      312.0
    ],
    "labelX": 707.1,
    "labelY": 330.0,
    "path": "M 657.1,300.0 L 757.1,300.0 L 757.1,360.0 L 657.1,360.0 Z"
  },
  {
    "id": "LV",
    "name": {
      "de": "Lettland",
      "hu": "Lettország",
      "ro": "Letonia",
      "en": "Latvia"
    },
    "capital": "Rīga",
    "capitalCoords": [
      701.4,
      362.0
    ],
    "labelX": 707.1,
    "labelY": 370.0,
    "path": "M 657.1,340.0 L 757.1,340.0 L 757.1,400.0 L 657.1,400.0 Z"
  },
  {
    "id": "LT",
    "name": {
      "de": "Litauen",
      "hu": "Litvánia",
      "ro": "Lituania",
      "en": "Lithuania"
    },
    "capital": "Vilnius",
    "capitalCoords": [
      718.6,
      406.0
    ],
    "labelX": 700.0,
    "labelY": 410.0,
    "path": "M 657.1,380.0 L 742.9,380.0 L 742.9,440.0 L 657.1,440.0 Z"
  },
  {
    "id": "MD",
    "name": {
      "de": "Moldawien",
      "hu": "Moldova",
      "ro": "Moldova",
      "en": "Moldova"
    },
    "capital": "Chișinău",
    "capitalCoords": [
      770.0,
      560.0
    ],
    "labelX": 757.1,
    "labelY": 570.0,
    "path": "M 728.6,540.0 L 785.7,540.0 L 785.7,600.0 L 728.6,600.0 Z"
  },
  {
    "id": "BY",
    "name": {
      "de": "Belarus",
      "hu": "Fehéroroszország",
      "ro": "Belarus",
      "en": "Belarus"
    },
    "capital": "Minsk",
    "capitalCoords": [
      751.4,
      422.0
    ],
    "labelX": 750.0,
    "labelY": 430.0,
    "path": "M 685.7,380.0 L 814.3,380.0 L 814.3,480.0 L 685.7,480.0 Z"
  },
  {
    "id": "IS",
    "name": {
      "de": "Island",
      "hu": "Izland",
      "ro": "Islanda",
      "en": "Iceland"
    },
    "capital": "Reykjavík",
    "capitalCoords": [
      44.3,
      218.0
    ],
    "labelX": 85.7,
    "labelY": 210.0,
    "path": "M 0.0,180.0 L 171.4,180.0 L 171.4,240.0 L 0.0,240.0 Z"
  },
  {
    "id": "AL",
    "name": {
      "de": "Albanien",
      "hu": "Albánia",
      "ro": "Albania",
      "en": "Albania"
    },
    "capital": "Tirana",
    "capitalCoords": [
      640.0,
      674.0
    ],
    "labelX": 642.9,
    "labelY": 690.0,
    "path": "M 628.6,660.0 L 657.1,660.0 L 657.1,720.0 L 628.6,720.0 Z"
  },
  {
    "id": "MK",
    "name": {
      "de": "Nordmazedonien",
      "hu": "Észak-Macedónia",
      "ro": "Macedonia de Nord",
      "en": "North Macedonia"
    },
    "capital": "Skopje",
    "capitalCoords": [
      662.9,
      660.0
    ],
    "labelX": 664.3,
    "labelY": 680.0,
    "path": "M 642.9,660.0 L 685.7,660.0 L 685.7,700.0 L 642.9,700.0 Z"
  },
  {
    "id": "BA",
    "name": {
      "de": "Bosnien und Herzegowina",
      "hu": "Bosznia-Hercegovina",
      "ro": "Bosnia și Herțegovina",
      "en": "Bosnia and Herzegovina"
    },
    "capital": "Sarajevo",
    "capitalCoords": [
      620.0,
      622.0
    ],
    "labelX": 607.1,
    "labelY": 630.0,
    "path": "M 571.4,600.0 L 642.9,600.0 L 642.9,660.0 L 571.4,660.0 Z"
  },
  {
    "id": "ME",
    "name": {
      "de": "Montenegro",
      "hu": "Montenegró",
      "ro": "Muntenegru",
      "en": "Montenegro"
    },
    "capital": "Podgorica",
    "capitalCoords": [
      632.9,
      652.0
    ],
    "labelX": 628.6,
    "labelY": 660.0,
    "path": "M 614.3,640.0 L 642.9,640.0 L 642.9,680.0 L 614.3,680.0 Z"
  }
];

export function projectCoordsEuropa(lon: number, lat: number): [number, number] {
  const x = ((lon + 25) / 70) * 1000;
  const y = (1 - (lat - 35) / 40) * 800;
  return [x, y];
}
