import { projectCoordsHR } from "../maps/croatia.svg";

export const croatiaAllPoi = [
  {
    id: "hr-country",
    type: "country",
    coords: projectCoordsHR(15.2, 45.1),
    name: {
      de: "Kroatien",
      hu: "Horvátország",
      ro: "Croația",
      en: "Croatia"
    },
    description: {
      de: "Ein Land an der Adria, bekannt für seine lange Küste und über tausend Inseln.",
      hu: "Az Adriai-tenger partján fekvő ország, amely hosszú tengerpartjáról és több mint ezer szigetéről ismert.",
      ro: "O țară la Marea Adriatică, cunoscută pentru coasta sa lungă și peste o mie de insule.",
      en: "A country on the Adriatic Sea, known for its long coastline and over a thousand islands."
    },
    facts: {
      de: ["Hauptstadt: Zagreb", "Währung: Euro", "Bevölkerung: ~3,8 Millionen"],
      hu: ["Főváros: Zágráb", "Pénznem: Euró", "Népesség: ~3,8 millió"],
      ro: ["Capitala: Zagreb", "Moneda: Euro", "Populație: ~3,8 milioane"],
      en: ["Capital: Zagreb", "Currency: Euro", "Population: ~3.8 million"]
    },
    image: "/images/visualLab/croatia/country.jpg"
  },
  {
    id: "hr-zagreb",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(15.9819, 45.8150),
    name: {
      de: "Zagreb",
      hu: "Zágráb",
      ro: "Zagreb",
      en: "Zagreb"
    },
    description: {
      de: "Die Hauptstadt Kroatiens, bekannt für ihre historische Oberstadt (Gornji Grad) und die Unterstadt.",
      hu: "Horvátország fővárosa, amely történelmi Felsővárosáról (Gornji Grad) és Alsóvárosáról ismert.",
      ro: "Capitala Croației, cunoscută pentru Orașul de Sus istoric (Gornji Grad) și Orașul de Jos.",
      en: "The capital of Croatia, known for its historic Upper Town (Gornji Grad) and Lower Town."
    },
    facts: {
      de: ["Größte Stadt Kroatiens", "Kulturelles und wirtschaftliches Zentrum"],
      hu: ["Horvátország legnagyobb városa", "Kulturális és gazdasági központ"],
      ro: ["Cel mai mare oraș din Croația", "Centru cultural și economic"],
      en: ["Largest city in Croatia", "Cultural and economic center"]
    },
    image: "/images/visualLab/croatia/zagreb.jpg"
  },
  {
    id: "hr-split",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(16.4401, 43.5081),
    name: {
      de: "Split",
      hu: "Split",
      ro: "Split",
      en: "Split"
    },
    description: {
      de: "Die zweitgrößte Stadt Kroatiens, berühmt für den Diokletianpalast, ein UNESCO-Weltkulturerbe.",
      hu: "Horvátország második legnagyobb városa, amely a Diocletianus-palotáról, az UNESCO világörökség részéről híres.",
      ro: "Al doilea oraș ca mărime din Croația, faimos pentru Palatul lui Dioclețian, un sit al Patrimoniului Mondial UNESCO.",
      en: "The second-largest city in Croatia, famous for Diocletian's Palace, a UNESCO World Heritage site."
    },
    facts: {
      de: ["Wichtiger Hafen", "Historisches Zentrum"],
      hu: ["Fontos kikötő", "Történelmi központ"],
      ro: ["Port important", "Centru istoric"],
      en: ["Important port", "Historic center"]
    },
    image: "/images/visualLab/croatia/split.jpg"
  },
  {
    id: "hr-dubrovnik",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(18.0944, 42.6507),
    name: {
      de: "Dubrovnik",
      hu: "Dubrovnik",
      ro: "Dubrovnik",
      en: "Dubrovnik"
    },
    description: {
      de: "Eine historische Stadt an der Adria, bekannt für ihre gut erhaltene Altstadt und die massiven Stadtmauern.",
      hu: "Történelmi város az Adriai-tenger partján, amely jól karbantartott óvárosáról és masszív városfalairól ismert.",
      ro: "Un oraș istoric la Marea Adriatică, cunoscut pentru orașul vechi bine conservat și zidurile masive ale orașului.",
      en: "A historic city on the Adriatic Sea, known for its well-preserved Old Town and massive city walls."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Beliebtes Touristenziel"],
      hu: ["UNESCO világörökség", "Népszerű turisztikai célpont"],
      ro: ["Patrimoniul Mondial UNESCO", "Destinație turistică populară"],
      en: ["UNESCO World Heritage site", "Popular tourist destination"]
    },
    image: "/images/visualLab/croatia/dubrovnik.jpg"
  },
  {
    id: "hr-plitvice",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(15.6200, 44.8654),
    name: {
      de: "Nationalpark Plitvicer Seen",
      hu: "Plitvicei-tavak Nemzeti Park",
      ro: "Parcul Național Lacurile Plitvice",
      en: "Plitvice Lakes National Park"
    },
    description: {
      de: "Ein Nationalpark, der für seine kaskadenförmigen Seen und Wasserfälle bekannt ist.",
      hu: "Lépcsőzetes tavairól és vízeséseiről ismert nemzeti park.",
      ro: "Un parc național cunoscut pentru lacurile sale în cascadă și cascade.",
      en: "A national park known for its cascading lakes and waterfalls."
    },
    facts: {
      de: ["16 miteinander verbundene Seen", "UNESCO-Weltkulturerbe"],
      hu: ["16 egymással összekapcsolt tó", "UNESCO világörökség"],
      ro: ["16 lacuri interconectate", "Patrimoniul Mondial UNESCO"],
      en: ["16 interconnected lakes", "UNESCO World Heritage site"]
    },
    image: "/images/visualLab/croatia/plitvice.jpg"
  },
  {
    id: "hr-hvar",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(16.4400, 43.1700),
    name: {
      de: "Hvar",
      hu: "Hvar",
      ro: "Hvar",
      en: "Hvar"
    },
    description: {
      de: "Eine kroatische Insel in der Adria, bekannt als Sommerresort.",
      hu: "Horvát sziget az Adriai-tengerben, amely nyári üdülőhelyként ismert.",
      ro: "O insulă croată în Marea Adriatică, cunoscută ca stațiune de vară.",
      en: "A Croatian island in the Adriatic Sea, known as a summer resort."
    },
    facts: {
      de: ["Bekannt für Lavendelfelder", "Historische Festung"],
      hu: ["Levendulamezőiről ismert", "Történelmi erőd"],
      ro: ["Cunoscută pentru câmpurile de lavandă", "Fortăreață istorică"],
      en: ["Known for lavender fields", "Historic fortress"]
    },
    image: "/images/visualLab/croatia/hvar.jpg"
  },
  {
    id: "hr-pula",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(13.8496, 44.8683),
    name: {
      de: "Pula",
      hu: "Pula",
      ro: "Pula",
      en: "Pula"
    },
    description: {
      de: "Eine Küstenstadt auf der Halbinsel Istrien, bekannt für ihr gut erhaltenes römisches Amphitheater.",
      hu: "Tengerparti város az Isztriai-félszigeten, amely jól megőrzött római amfiteátrumáról ismert.",
      ro: "Un oraș de coastă pe peninsula Istria, cunoscut pentru amfiteatrul său roman bine conservat.",
      en: "A coastal city on the Istrian Peninsula, known for its well-preserved Roman amphitheater."
    },
    facts: {
      de: ["Römisches Amphitheater (Arena)", "Wichtiger Hafen in Istrien"],
      hu: ["Római amfiteátrum (Aréna)", "Fontos kikötő Isztriában"],
      ro: ["Amfiteatru roman (Arena)", "Port important în Istria"],
      en: ["Roman amphitheater (Arena)", "Important port in Istria"]
    },
    image: "/images/visualLab/croatia/pula.jpg"
  },
  {
    id: "hr-rovinj",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(13.6389, 45.0812),
    name: {
      de: "Rovinj",
      hu: "Rovinj",
      ro: "Rovinj",
      en: "Rovinj"
    },
    description: {
      de: "Eine malerische Stadt in Istrien mit einer charmanten Altstadt und einem aktiven Fischereihafen.",
      hu: "Festői város Isztriában, bájos óvárossal és aktív halászkikötővel.",
      ro: "Un oraș pitoresc în Istria, cu un oraș vechi fermecător și un port de pescuit activ.",
      en: "A picturesque city in Istria with a charming old town and an active fishing port."
    },
    facts: {
      de: ["Kirche der Heiligen Euphemia", "Beliebtes Touristenziel"],
      hu: ["Szent Eufémia-templom", "Népszerű turisztikai célpont"],
      ro: ["Biserica Sfânta Eufemia", "Destinație turistică populară"],
      en: ["Church of St. Euphemia", "Popular tourist destination"]
    },
    image: "/images/visualLab/croatia/rovinj.jpg"
  },
  {
    id: "hr-krka",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(15.9736, 43.8666),
    name: {
      de: "Nationalpark Krka",
      hu: "Krka Nemzeti Park",
      ro: "Parcul Național Krka",
      en: "Krka National Park"
    },
    description: {
      de: "Ein Nationalpark entlang des Flusses Krka, bekannt für seine Wasserfälle und Naturlandschaften.",
      hu: "A Krka folyó mentén fekvő nemzeti park, amely vízeséseiről és természeti tájairól ismert.",
      ro: "Un parc național de-a lungul râului Krka, cunoscut pentru cascadele și peisajele sale naturale.",
      en: "A national park along the Krka River, known for its waterfalls and natural landscapes."
    },
    facts: {
      de: ["Skradinski Buk Wasserfall", "Reiche Flora und Fauna"],
      hu: ["Skradinski Buk vízesés", "Gazdag növény- és állatvilág"],
      ro: ["Cascada Skradinski Buk", "Floră și faună bogată"],
      en: ["Skradinski Buk waterfall", "Rich flora and fauna"]
    },
    image: "/images/visualLab/croatia/krka.jpg"
  }
];
