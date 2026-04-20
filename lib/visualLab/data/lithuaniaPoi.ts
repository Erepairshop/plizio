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
  }
];
