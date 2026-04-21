import { projectCoordsLT } from "../maps/lithuania.svg";

export const lithuaniaAllPoi = [
  {
    id: "lt-country",
    type: "country",
    coords: projectCoordsLT(23.8813, 55.1694),
    name: {
      de: "Litauen",
      hu: "Litvánia",
      ro: "Lituania",
      en: "Lithuania"
    },
    description: {
      de: "Das südlichste der drei baltischen Länder, bekannt für seine reiche Geschichte und wunderschöne Natur.",
      hu: "A három balti ország közül a legdélebbi, amely gazdag történelméről és gyönyörű természetéről ismert.",
      ro: "Cea mai sudică dintre cele trei țări baltice, cunoscută pentru istoria sa bogată și natura frumoasă.",
      en: "The southernmost of the three Baltic countries, known for its rich history and beautiful nature."
    },
    facts: {
      de: ["Hauptstadt: Vilnius", "Währung: Euro", "Bevölkerung: ~2,8 Millionen"],
      hu: ["Főváros: Vilnius", "Pénznem: Euró", "Népesség: ~2,8 millió"],
      ro: ["Capitala: Vilnius", "Moneda: Euro", "Populație: ~2,8 milioane"],
      en: ["Capital: Vilnius", "Currency: Euro", "Population: ~2.8 million"]
    },
    image: "/images/visualLab/lithuania/country.jpg"
  },
  {
    id: "lt-vilnius",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(25.2797, 54.6872),
    name: {
      de: "Vilnius",
      hu: "Vilnius",
      ro: "Vilnius",
      en: "Vilnius"
    },
    description: {
      de: "Die Hauptstadt Litauens, bekannt für ihre barocke Architektur und die charmante Altstadt.",
      hu: "Litvánia fővárosa, amely barokk építészetéről és bájos óvárosáról ismert.",
      ro: "Capitala Lituaniei, cunoscută pentru arhitectura sa barocă și orașul vechi fermecător.",
      en: "The capital of Lithuania, known for its Baroque architecture and charming old town."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Gediminas-Turm"],
      hu: ["UNESCO világörökség", "Gediminas-torony"],
      ro: ["Patrimoniul Mondial UNESCO", "Turnul lui Gediminas"],
      en: ["UNESCO World Heritage site", "Gediminas Tower"]
    },
    image: "/images/visualLab/lithuania/vilnius.jpg"
  },
  {
    id: "lt-kaunas",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(23.9036, 54.8985),
    name: {
      de: "Kaunas",
      hu: "Kaunas",
      ro: "Kaunas",
      en: "Kaunas"
    },
    description: {
      de: "Die zweitgrößte Stadt Litauens, gelegen am Zusammenfluss von Memel und Neris.",
      hu: "Litvánia második legnagyobb városa, a Nyeman és a Neris folyók összefolyásánál.",
      ro: "Al doilea oraș ca mărime din Lituania, situat la confluența râurilor Nemunas și Neris.",
      en: "The second-largest city in Lithuania, located at the confluence of the Nemunas and Neris rivers."
    },
    facts: {
      de: ["Interbellum-Architektur", "Burg Kaunas"],
      hu: ["Interbellum építészet", "Kaunasi vár"],
      ro: ["Arhitectură interbelică", "Castelul Kaunas"],
      en: ["Interbellum architecture", "Kaunas Castle"]
    },
    image: "/images/visualLab/lithuania/kaunas.jpg"
  },
  {
    id: "lt-klaipeda",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(21.1443, 55.7033),
    name: {
      de: "Klaipėda",
      hu: "Klaipėda",
      ro: "Klaipėda",
      en: "Klaipėda"
    },
    description: {
      de: "Eine Hafenstadt an der Ostsee, bekannt für ihre Fachwerkhäuser und das jährliche Meeresfestival.",
      hu: "Kikötőváros a Balti-tenger partján, amely favázas házairól és az éves tengeri fesztiválról ismert.",
      ro: "Un oraș port la Marea Baltică, cunoscut pentru casele sale cu structură din lemn și festivalul anual al mării.",
      en: "A port city on the Baltic Sea, known for its half-timbered houses and annual sea festival."
    },
    facts: {
      de: ["Wichtigster Hafen Litauens", "Tor zur Kurischen Nehrung"],
      hu: ["Litvánia legfontosabb kikötője", "Kapu a Kur-földnyelvhez"],
      ro: ["Cel mai important port al Lituaniei", "Poarta către Grindul Curonian"],
      en: ["Lithuania's most important port", "Gateway to the Curonian Spit"]
    },
    image: "/images/visualLab/lithuania/klaipeda.jpg"
  },
  {
    id: "lt-trakai",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(24.9333, 54.6333),
    name: {
      de: "Trakai",
      hu: "Trakai",
      ro: "Trakai",
      en: "Trakai"
    },
    description: {
      de: "Eine historische Stadt, berühmt für ihre Inselburg im Galvė-See.",
      hu: "Történelmi város, amely a Galvė-tóban található szigeti váráról híres.",
      ro: "Un oraș istoric, faimos pentru castelul său de pe insulă din lacul Galvė.",
      en: "A historic city, famous for its island castle in Lake Galvė."
    },
    facts: {
      de: ["Inselburg Trakai", "Heimat der Karaimen-Gemeinschaft"],
      hu: ["Trakai szigeti vár", "A karaita közösség otthona"],
      ro: ["Castelul de pe insulă Trakai", "Casa comunității karaite"],
      en: ["Trakai Island Castle", "Home of the Karaite community"]
    },
    image: "/images/visualLab/lithuania/trakai.jpg"
  },
  {
    id: "lt-hill-of-crosses",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(23.4167, 56.0153),
    name: {
      de: "Berg der Kreuze",
      hu: "Keresztek hegye",
      ro: "Dealul Crucilor",
      en: "Hill of Crosses"
    },
    description: {
      de: "Ein Wallfahrtsort mit Tausenden von Kreuzen, ein Symbol des litauischen Widerstands.",
      hu: "Zarándokhely több ezer kereszttel, a litván ellenállás szimbóluma.",
      ro: "Un loc de pelerinaj cu mii de cruci, un simbol al rezistenței lituaniene.",
      en: "A pilgrimage site with thousands of crosses, a symbol of Lithuanian resistance."
    },
    facts: {
      de: ["Über 100.000 Kreuze", "Einzigartiges spirituelles Denkmal"],
      hu: ["Több mint 100 000 kereszt", "Egyedülálló spirituális emlékmű"],
      ro: ["Peste 100.000 de cruci", "Monument spiritual unic"],
      en: ["Over 100,000 crosses", "Unique spiritual monument"]
    },
    image: "/images/visualLab/lithuania/hill-of-crosses.jpg"
  },
  {
    id: "lt-curonian-spit",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(21.0167, 55.4500),
    name: {
      de: "Kurische Nehrung",
      hu: "Kur-földnyelv",
      ro: "Grindul Curonian",
      en: "Curonian Spit"
    },
    description: {
      de: "Eine schmale Sandzunge, die das Kurische Haff von der Ostsee trennt.",
      hu: "Keskeny homokos földnyelv, amely elválasztja a Kur-öblöt a Balti-tengertől.",
      ro: "O limbă îngustă de nisip care separă Laguna Curoniană de Marea Baltică.",
      en: "A narrow sand spit separating the Curonian Lagoon from the Baltic Sea."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe", "Wanderdünen"],
      hu: ["UNESCO természeti világörökség", "Vándorló dűnék"],
      ro: ["Patrimoniul Mondial Natural UNESCO", "Dune mișcătoare"],
      en: ["UNESCO World Natural Heritage", "Shifting dunes"]
    },
    image: "/images/visualLab/lithuania/curonian-spit.jpg"
  },
  {
    id: "lt-kernave",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(24.8500, 54.8833),
    name: {
      de: "Kernavė",
      hu: "Kernavė",
      ro: "Kernavė",
      en: "Kernavė"
    },
    description: {
      de: "Eine archäologische Stätte, die die ehemalige Hauptstadt des Großfürstentums Litauen war.",
      hu: "Régészeti lelőhely, amely a Litván Nagyfejedelemség egykori fővárosa volt.",
      ro: "Un sit arheologic care a fost fosta capitală a Marelui Ducat al Lituaniei.",
      en: "An archaeological site that was the former capital of the Grand Duchy of Lithuania."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Fünf Burghügel"],
      hu: ["UNESCO világörökség", "Öt várhalom"],
      ro: ["Patrimoniul Mondial UNESCO", "Cinci movile de cetate"],
      en: ["UNESCO World Heritage site", "Five hillforts"]
    },
    image: "/images/visualLab/lithuania/kernave.jpg"
  },
  {
    id: "city-vilnius",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(25.2797, 54.6872),
    name: {
      de: "Vilnius",
      hu: "Vilnius",
      ro: "Vilnius",
      en: "Vilnius"
    },
    description: {
      de: "Hauptstadt, UNESCO-Altstadt, Gediminas-Turm",
      hu: "Főváros, UNESCO óváros, Gedimino torony",
      ro: "Capitală, centrul vechi UNESCO, Turnul Gediminas",
      en: "Capital, UNESCO old town, Gediminas Tower"
    },
    facts: {
      de: ["Hauptstadt Litauens", "UNESCO-Altstadt"],
      hu: ["Főváros", "UNESCO óváros"],
      ro: ["Capitala Lituaniei", "Centrul vechi UNESCO"],
      en: ["Capital of Lithuania", "UNESCO old town"]
    },
    image: "/geo-images/lithuania/city-vilnius.webp"
  },
  {
    id: "city-kaunas",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(23.9036, 54.8985),
    name: {
      de: "Kaunas",
      hu: "Kaunas",
      ro: "Kaunas",
      en: "Kaunas"
    },
    description: {
      de: "Zweitgrößte Stadt, zwischen den Weltkriegen Hauptstadt",
      hu: "2. legnagyobb, két világháború közti főváros",
      ro: "Al doilea oraș ca mărime, capitală între cele două războaie mondiale",
      en: "Second-largest city, interwar capital"
    },
    facts: {
      de: ["Zweitgrößte Stadt Litauens", "Zwischenkriegsarchitektur"],
      hu: ["2. legnagyobb város", "Két világháború közti főváros"],
      ro: ["Al doilea oraș ca mărime", "Capitală interbelică"],
      en: ["Second-largest city", "Interwar capital"]
    },
    image: "/geo-images/lithuania/city-kaunas.webp"
  },
  {
    id: "city-klaipeda",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(21.1443, 55.7033),
    name: {
      de: "Klaipėda",
      hu: "Klaipėda",
      ro: "Klaipėda",
      en: "Klaipėda"
    },
    description: {
      de: "Hafenstadt, Memel in deutscher Zeit",
      hu: "Kikötő, Memel a német időben",
      ro: "Oraș-port, Memel în perioada germană",
      en: "Port city, Memel in the German period"
    },
    facts: {
      de: ["Baltischer Hafen", "Historisch: Memel"],
      hu: ["Balti kikötő", "Történelmi név: Memel"],
      ro: ["Port la Marea Baltică", "Nume istoric: Memel"],
      en: ["Baltic port", "Historical name: Memel"]
    },
    image: "/geo-images/lithuania/city-klaipeda.webp"
  },
  {
    id: "city-siauliai",
    type: "city",
    parent: "lt-country",
    coords: projectCoordsLT(23.3156, 55.9333),
    name: {
      de: "Šiauliai",
      hu: "Šiauliai",
      ro: "Šiauliai",
      en: "Šiauliai"
    },
    description: {
      de: "Nordlitauen, nahe dem Berg der Kreuze",
      hu: "Észak-Litvánia, Kereszt-domb közelében",
      ro: "Lituania de nord, aproape de Dealul Crucilor",
      en: "Northern Lithuania, near the Hill of Crosses"
    },
    facts: {
      de: ["Nordlitauen", "Nahe dem Berg der Kreuze"],
      hu: ["Észak-Litvánia", "Kereszt-domb közelében"],
      ro: ["Lituania de nord", "Aproape de Dealul Crucilor"],
      en: ["Northern Lithuania", "Near the Hill of Crosses"]
    },
    image: "/geo-images/lithuania/city-siauliai.webp"
  },
  {
    id: "cult-vilnius-oldtown",
    type: "culture",
    parent: "lt-country",
    coords: projectCoordsLT(25.287, 54.6776),
    name: {
      de: "Altstadt Vilnius",
      hu: "Vilnius óváros",
      ro: "Centrul vechi al Vilniusului",
      en: "Vilnius Old Town"
    },
    description: {
      de: "UNESCO-Barock + Gotik",
      hu: "UNESCO barokk + gótikus",
      ro: "UNESCO baroc + gotic",
      en: "UNESCO Baroque and Gothic"
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Barock und Gotik"],
      hu: ["UNESCO világörökség", "Barokk és gótikus"],
      ro: ["Patrimoniu UNESCO", "Baroc și gotic"],
      en: ["UNESCO World Heritage", "Baroque and Gothic"]
    },
    image: "/geo-images/lithuania/cult-vilnius-oldtown.webp"
  },
  {
    id: "cult-trakai",
    type: "culture",
    parent: "lt-country",
    coords: projectCoordsLT(24.9336, 54.6528),
    name: {
      de: "Inselburg Trakai",
      hu: "Trakai sziget-kastély",
      ro: "Castelul de pe insulă Trakai",
      en: "Trakai Island Castle"
    },
    description: {
      de: "Gediminas-Wasserburg auf dem See",
      hu: "Gediminas várkastély tavon",
      ro: "Castelul lui Gediminas pe lac",
      en: "Gediminas castle on a lake"
    },
    facts: {
      de: ["Berühmte Inselburg", "Historisches Zentrum"],
      hu: ["Híres szigetvár", "Történelmi központ"],
      ro: ["Castel insular celebru", "Centru istoric"],
      en: ["Famous island castle", "Historic center"]
    },
    image: "/geo-images/lithuania/cult-trakai.webp"
  },
  {
    id: "cult-hill-crosses",
    type: "culture",
    parent: "lt-country",
    coords: projectCoordsLT(23.4153, 56.0153),
    name: {
      de: "Berg der Kreuze",
      hu: "Kryžių kalnas",
      ro: "Dealul Crucilor",
      en: "Hill of Crosses"
    },
    description: {
      de: "100.000+ Kreuze, Pilgerort",
      hu: "100000+ kereszt zarándokhely",
      ro: "Peste 100.000 de cruci, loc de pelerinaj",
      en: "100,000+ crosses, pilgrimage site"
    },
    facts: {
      de: ["Pilgerort", "100.000+ Kreuze"],
      hu: ["Zarándokhely", "100000+ kereszt"],
      ro: ["Loc de pelerinaj", "Peste 100.000 de cruci"],
      en: ["Pilgrimage site", "100,000+ crosses"]
    },
    image: "/geo-images/lithuania/cult-hill-crosses.webp"
  },
  {
    id: "cult-kernave",
    type: "culture",
    parent: "lt-country",
    coords: projectCoordsLT(24.8561, 54.8875),
    name: {
      de: "Kernavė",
      hu: "Kernavė",
      ro: "Kernavė",
      en: "Kernavė"
    },
    description: {
      de: "UNESCO-archäologische mittelalterliche Hauptstadt",
      hu: "UNESCO régészeti középkori főváros",
      ro: "Capitala medievală arheologică UNESCO",
      en: "UNESCO archaeological medieval capital"
    },
    facts: {
      de: ["UNESCO-Archäologie", "Ehemalige Hauptstadt"],
      hu: ["UNESCO régészet", "Egykori főváros"],
      ro: ["Arheologie UNESCO", "Fostă capitală"],
      en: ["UNESCO archaeology", "Former capital"]
    },
    image: "/geo-images/lithuania/cult-kernave.webp"
  },
  {
    id: "nat-curonian-spit",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(21.1, 55.4),
    name: {
      de: "Kurische Nehrung / Neringa",
      hu: "Kuron-nyelv / Neringa",
      ro: "Grindul Curonian / Neringa",
      en: "Curonian Spit / Neringa"
    },
    description: {
      de: "UNESCO 98 km Sandspit",
      hu: "UNESCO 98km homokpad",
      ro: "Fâșie de nisip UNESCO de 98 km",
      en: "UNESCO 98 km sand spit"
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe", "98 km lang"],
      hu: ["UNESCO természeti örökség", "98 km hosszú"],
      ro: ["Patrimoniu natural UNESCO", "98 km lung"],
      en: ["UNESCO natural heritage", "98 km long"]
    },
    image: "/geo-images/lithuania/nat-curonian-spit.webp"
  },
  {
    id: "nat-aukstaitija",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(25.8, 55.4),
    name: {
      de: "Aukštaitija-NP",
      hu: "Aukštaitija NP",
      ro: "Parcul Național Aukštaitija",
      en: "Aukštaitija NP"
    },
    description: {
      de: "Ältester Nationalpark, 126 Seen",
      hu: "Legrégebbi NP, 126 tó",
      ro: "Cel mai vechi parc național, 126 de lacuri",
      en: "Oldest national park, 126 lakes"
    },
    facts: {
      de: ["Ältester Nationalpark", "126 Seen"],
      hu: ["Legrégebbi nemzeti park", "126 tó"],
      ro: ["Cel mai vechi parc național", "126 de lacuri"],
      en: ["Oldest national park", "126 lakes"]
    },
    image: "/geo-images/lithuania/nat-aukstaitija.webp"
  },
  {
    id: "nat-dzukija",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(24.2, 54.0),
    name: {
      de: "Dzūkija-NP",
      hu: "Dzūkija NP",
      ro: "Parcul Național Dzūkija",
      en: "Dzūkija NP"
    },
    description: {
      de: "Kiefernwälder, Nemunas",
      hu: "Fenyves erdők, Nemunas",
      ro: "Păduri de pini, Nemunas",
      en: "Pine forests, Nemunas"
    },
    facts: {
      de: ["Kiefernwälder", "Nemunas-Fluss"],
      hu: ["Fenyves erdők", "Nemunas"],
      ro: ["Păduri de pini", "Râul Nemunas"],
      en: ["Pine forests", "Nemunas River"]
    },
    image: "/geo-images/lithuania/nat-dzukija.webp"
  },
  {
    id: "nat-kursiu-neringa",
    type: "nature",
    parent: "lt-country",
    coords: projectCoordsLT(20.9956, 55.3058),
    name: {
      de: "Nida-Dorf + Cape Horn",
      hu: "Nida falu + Cape Horn",
      ro: "Satul Nida + Cape Horn",
      en: "Nida Village + Cape Horn"
    },
    description: {
      de: "Thomas-Mann-Ferienhaus",
      hu: "Thomas Mann nyaraló",
      ro: "Casa de vacanță a lui Thomas Mann",
      en: "Thomas Mann summer house"
    },
    facts: {
      de: ["Thomas-Mann-Haus", "Kurische Nehrung"],
      hu: ["Thomas Mann ház", "Kuron-nyelv"],
      ro: ["Casa Thomas Mann", "Grindul Curonian"],
      en: ["Thomas Mann house", "Curonian Spit"]
    },
    image: "/geo-images/lithuania/nat-kursiu-neringa.webp"
  }
];
