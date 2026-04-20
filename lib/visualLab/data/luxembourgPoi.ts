import { projectCoordsLU } from "../maps/luxembourg.svg";

export const luxembourgAllPoi = [
  {
    id: "lu-country",
    type: "country",
    coords: projectCoordsLU(6.1296, 49.8153),
    name: {
      de: "Luxemburg",
      hu: "Luxemburg",
      ro: "Luxemburg",
      en: "Luxembourg"
    },
    description: {
      de: "Ein kleines Binnenland in Westeuropa, bekannt für seine starke Wirtschaft und historische Bedeutung.",
      hu: "Kis szárazföldi ország Nyugat-Európában, amely erős gazdaságáról és történelmi jelentőségéről ismert.",
      ro: "O țară mică fără ieșire la mare din Europa de Vest, cunoscută pentru economia sa puternică și importanța istorică.",
      en: "A small landlocked country in Western Europe, known for its strong economy and historical significance."
    },
    facts: {
      de: ["Hauptstadt: Luxemburg-Stadt", "Währung: Euro", "Bevölkerung: ~660.000"],
      hu: ["Főváros: Luxemburg", "Pénznem: Euró", "Népesség: ~660.000"],
      ro: ["Capitala: Luxemburg", "Moneda: Euro", "Populație: ~660.000"],
      en: ["Capital: Luxembourg City", "Currency: Euro", "Population: ~660,000"]
    },
    image: "/images/visualLab/luxembourg/country.jpg"
  },
  {
    id: "lu-luxembourg-city",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.1319, 49.6116),
    name: {
      de: "Luxemburg-Stadt",
      hu: "Luxemburg",
      ro: "Luxemburg",
      en: "Luxembourg City"
    },
    description: {
      de: "Die Hauptstadt des Großherzogtums, berühmt für ihre befestigte mittelalterliche Altstadt auf steilen Klippen.",
      hu: "A Nagyhercegség fővárosa, amely meredek sziklákon fekvő, megerősített középkori óvárosáról híres.",
      ro: "Capitala Marelui Ducat, faimoasă pentru orașul său vechi medieval fortificat situat pe stânci abrupte.",
      en: "The capital of the Grand Duchy, famous for its fortified medieval old town perched on steep cliffs."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Sitz europäischer Institutionen"],
      hu: ["UNESCO világörökség", "Európai intézmények székhelye"],
      ro: ["Patrimoniul Mondial UNESCO", "Sediul instituțiilor europene"],
      en: ["UNESCO World Heritage site", "Seat of European institutions"]
    },
    image: "/images/visualLab/luxembourg/luxembourg-city.jpg"
  },
  {
    id: "lu-vianden",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.2089, 49.9350),
    name: {
      de: "Vianden",
      hu: "Vianden",
      ro: "Vianden",
      en: "Vianden"
    },
    description: {
      de: "Eine malerische Stadt im Norden, bekannt für ihre beeindruckende mittelalterliche Burg.",
      hu: "Festői város északon, amely lenyűgöző középkori váráról ismert.",
      ro: "Un oraș pitoresc din nord, cunoscut pentru castelul său medieval impresionant.",
      en: "A picturesque town in the north, known for its impressive medieval castle."
    },
    facts: {
      de: ["Schloss Vianden", "Victor-Hugo-Museum"],
      hu: ["Viandeni vár", "Victor Hugo Múzeum"],
      ro: ["Castelul Vianden", "Muzeul Victor Hugo"],
      en: ["Vianden Castle", "Victor Hugo Museum"]
    },
    image: "/images/visualLab/luxembourg/vianden.jpg"
  },
  {
    id: "lu-echternach",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.4222, 49.8133),
    name: {
      de: "Echternach",
      hu: "Echternach",
      ro: "Echternach",
      en: "Echternach"
    },
    description: {
      de: "Die älteste Stadt Luxemburgs, berühmt für ihre Abtei und die Springprozession.",
      hu: "Luxemburg legrégebbi városa, amely apátságáról és a szökőkörmenetről híres.",
      ro: "Cel mai vechi oraș din Luxemburg, faimos pentru abația sa și procesiunea dansantă.",
      en: "The oldest town in Luxembourg, famous for its abbey and the dancing procession."
    },
    facts: {
      de: ["Älteste Stadt des Landes", "UNESCO Immaterielles Kulturerbe"],
      hu: ["Az ország legrégebbi városa", "UNESCO szellemi kulturális örökség"],
      ro: ["Cel mai vechi oraș din țară", "Patrimoniul cultural imaterial UNESCO"],
      en: ["Oldest town in the country", "UNESCO Intangible Cultural Heritage"]
    },
    image: "/images/visualLab/luxembourg/echternach.jpg"
  },
  {
    id: "lu-mullerthal",
    type: "nature",
    parent: "lu-country",
    coords: projectCoordsLU(6.3000, 49.7833),
    name: {
      de: "Müllerthal",
      hu: "Mullerthal",
      ro: "Mullerthal",
      en: "Mullerthal"
    },
    description: {
      de: "Bekannt als 'Kleine Luxemburger Schweiz', eine Region mit felsigem Gelände und dichten Wäldern.",
      hu: "A 'Kis Luxemburgi Svájc' néven ismert régió sziklás tereppel és sűrű erdőkkel.",
      ro: "Cunoscută sub numele de 'Mica Elveție Luxemburgheză', o regiune cu teren stâncos și păduri dese.",
      en: "Known as 'Little Switzerland', a region with rocky terrain and thick forests."
    },
    facts: {
      de: ["Wanderwege", "Spektakuläre Felsformationen"],
      hu: ["Túraútvonalak", "Látványos sziklaalakzatok"],
      ro: ["Trasee de drumeție", "Formațiuni stâncoase spectaculoase"],
      en: ["Hiking trails", "Spectacular rock formations"]
    },
    image: "/images/visualLab/luxembourg/mullerthal.jpg"
  },
  {
    id: "lu-schengen",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.3667, 49.4708),
    name: {
      de: "Schengen",
      hu: "Schengen",
      ro: "Schengen",
      en: "Schengen"
    },
    description: {
      de: "Ein kleines Winzerdorf, in dem das Schengener Abkommen unterzeichnet wurde.",
      hu: "Kis bortermelő falu, ahol a schengeni egyezményt aláírták.",
      ro: "Un mic sat viticol unde a fost semnat Acordul de la Schengen.",
      en: "A small wine-making village where the Schengen Agreement was signed."
    },
    facts: {
      de: ["Europäisches Museum", "Grenzdreieck (DE, FR, LU)"],
      hu: ["Európai Múzeum", "Hármashatár (DE, FR, LU)"],
      ro: ["Muzeul European", "Triplex confinium (DE, FR, LU)"],
      en: ["European Museum", "Border tripoint (DE, FR, LU)"]
    },
    image: "/images/visualLab/luxembourg/schengen.jpg"
  }
];
