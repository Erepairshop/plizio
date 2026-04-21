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
  },
  {
    id: "city-zagreb",
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
      de: "Kroatiens Hauptstadt mit Gornji Grad und Donji Grad.",
      hu: "Horvátország fővárosa, Gornji Grad és Dolnji Grad városrészekkel.",
      ro: "Capitala Croației, cu Gornji Grad și Donji Grad.",
      en: "Croatia's capital, with Gornji Grad and Donji Grad."
    },
    facts: {
      de: ["Hauptstadt Kroatiens", "Historische Ober- und Unterstadt"],
      hu: ["Horvátország fővárosa", "Felsőváros és Alsóváros"],
      ro: ["Capitala Croației", "Orașul de Sus și Orașul de Jos"],
      en: ["Capital of Croatia", "Upper Town and Lower Town"]
    },
    image: "/geo-images/croatia/city-zagreb.webp"
  },
  {
    id: "city-split",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(16.4402, 43.5081),
    name: {
      de: "Split",
      hu: "Split",
      ro: "Split",
      en: "Split"
    },
    description: {
      de: "Stadt mit dem UNESCO-geschützten Diokletianpalast.",
      hu: "Az UNESCO-védett Diocletianus-palotáról híres város.",
      ro: "Oraș cunoscut pentru Palatul lui Dioclețian, inclus în UNESCO.",
      en: "A city famous for the UNESCO-listed Diocletian's Palace."
    },
    facts: {
      de: ["Diokletianpalast", "UNESCO-Welterbe"],
      hu: ["Diocletianus-palota", "UNESCO világörökség"],
      ro: ["Palatul lui Dioclețian", "Patrimoniu mondial UNESCO"],
      en: ["Diocletian's Palace", "UNESCO World Heritage"]
    },
    image: "/geo-images/croatia/city-split.webp"
  },
  {
    id: "city-dubrovnik",
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
      de: "UNESCO-Altstadt mit vollständig erhaltenen Stadtmauern.",
      hu: "UNESCO-s óváros, teljesen megmaradt városfallal.",
      ro: "Centru istoric UNESCO cu ziduri de oraș complet păstrate.",
      en: "UNESCO old town with fully preserved city walls."
    },
    facts: {
      de: ["UNESCO-Altstadt", "Stadtmauern umgeben die Altstadt"],
      hu: ["UNESCO óváros", "Fal öleli körbe az óvárost"],
      ro: ["Oraș vechi UNESCO", "Ziduri care înconjoară centrul vechi"],
      en: ["UNESCO old town", "Walls around the historic core"]
    },
    image: "/geo-images/croatia/city-dubrovnik.webp"
  },
  {
    id: "city-pula",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(13.8496, 44.8666),
    name: {
      de: "Pula",
      hu: "Póla",
      ro: "Pula",
      en: "Pula"
    },
    description: {
      de: "Küstenstadt mit einem römischen Amphitheater aus dem 1. Jahrhundert.",
      hu: "Tengerparti város az I. századi római amfiteátrummal.",
      ro: "Oraș de coastă cu un amfiteatru roman din secolul I.",
      en: "A coastal city with a 1st-century Roman amphitheater."
    },
    facts: {
      de: ["Römische Arena", "Istriens große Hafenstadt"],
      hu: ["Római Aréna", "Isztria fontos kikötővárosa"],
      ro: ["Arena romană", "Port important în Istria"],
      en: ["Roman arena", "Major Istrian port"]
    },
    image: "/geo-images/croatia/city-pula.webp"
  },
  {
    id: "city-rijeka",
    type: "city",
    parent: "hr-country",
    coords: projectCoordsHR(14.4423, 45.3271),
    name: {
      de: "Rijeka",
      hu: "Rijeka",
      ro: "Rijeka",
      en: "Rijeka"
    },
    description: {
      de: "Hafenstadt und Europäische Kulturhauptstadt 2020.",
      hu: "Kikötőváros, 2020 Európa Kulturális Fővárosa.",
      ro: "Oraș portuar, Capitală Europeană a Culturii 2020.",
      en: "A port city and 2020 European Capital of Culture."
    },
    facts: {
      de: ["Großer Adriaport", "Kulturhauptstadt 2020"],
      hu: ["Nagy adriai kikötő", "2020 kulturális főváros"],
      ro: ["Port major la Adriatică", "Capitală culturală 2020"],
      en: ["Major Adriatic port", "2020 cultural capital"]
    },
    image: "/geo-images/croatia/city-rijeka.webp"
  },
  {
    id: "cult-diocletian",
    type: "culture",
    parent: "hr-country",
    coords: projectCoordsHR(16.4402, 43.5081),
    name: {
      de: "Diokletianpalast",
      hu: "Diocletianus-palota",
      ro: "Palatul lui Dioclețian",
      en: "Diocletian's Palace"
    },
    description: {
      de: "UNESCO-Komplex aus der Zeit um 305 n. Chr. in Split.",
      hu: "UNESCO-komplexum Splitben, amely kb. 305-ben épült.",
      ro: "Complex UNESCO din Split, datat în jurul anului 305 d.Hr.",
      en: "UNESCO complex in Split dating to around AD 305."
    },
    facts: {
      de: ["Kaiserlicher Palast", "UNESCO seit 1979"],
      hu: ["Császári palota", "1979 óta UNESCO"],
      ro: ["Palat imperial", "UNESCO din 1979"],
      en: ["Imperial palace", "UNESCO since 1979"]
    },
    image: "/geo-images/croatia/cult-diocletian.webp"
  },
  {
    id: "cult-dubrovnik-walls",
    type: "culture",
    parent: "hr-country",
    coords: projectCoordsHR(18.0944, 42.6507),
    name: {
      de: "Stadtmauern von Dubrovnik",
      hu: "Dubrovniki várfal",
      ro: "Zidurile Dubrovnikului",
      en: "Dubrovnik Walls"
    },
    description: {
      de: "Rund zwei Kilometer mittelalterliche Mauern um die Altstadt.",
      hu: "Körülbelül 2 km hosszú középkori fal az óváros körül.",
      ro: "Aproximativ 2 km de ziduri medievale în jurul orașului vechi.",
      en: "About 2 km of medieval walls around the old town."
    },
    facts: {
      de: ["Rund 2 km Länge", "Schutz der Altstadt"],
      hu: ["Kb. 2 km hosszú", "Az óváros védelme"],
      ro: ["Aproape 2 km", "Protejează centrul vechi"],
      en: ["About 2 km long", "Protects the old town"]
    },
    image: "/geo-images/croatia/cult-dubrovnik-walls.webp"
  },
  {
    id: "cult-rovinj",
    type: "culture",
    parent: "hr-country",
    coords: projectCoordsHR(13.6380, 45.0822),
    name: {
      de: "Rovinj",
      hu: "Rovinj",
      ro: "Rovinj",
      en: "Rovinj"
    },
    description: {
      de: "Istrisches Fischerdorf mit der Kirche der heiligen Euphemia.",
      hu: "Isztriai halászfalu a Szent Eufémia-templommal.",
      ro: "Sat pescăresc istrian cu biserica Sfânta Eufemia.",
      en: "An Istrian fishing town with St. Euphemia's Church."
    },
    facts: {
      de: ["Istrische Küstenstadt", "Kirche der hl. Euphemia"],
      hu: ["Isztriai tengerparti város", "Szent Eufémia-templom"],
      ro: ["Oraș de coastă istrian", "Biserica Sfânta Eufemia"],
      en: ["Istrian coastal town", "St. Euphemia's Church"]
    },
    image: "/geo-images/croatia/cult-rovinj.webp"
  },
  {
    id: "cult-trogir",
    type: "culture",
    parent: "hr-country",
    coords: projectCoordsHR(16.2520, 43.5149),
    name: {
      de: "Trogir Altstadt",
      hu: "Trogir óváros",
      ro: "Orașul vechi Trogir",
      en: "Trogir Old Town"
    },
    description: {
      de: "UNESCO-Kleinstadt auf einer Insel, seit 1997 geschützt.",
      hu: "UNESCO kis sziget-város, 1997 óta védett.",
      ro: "Mic oraș insular UNESCO, protejat din 1997.",
      en: "A small UNESCO island town protected since 1997."
    },
    facts: {
      de: ["Altstadt auf Insel", "UNESCO seit 1997"],
      hu: ["Szigeten fekvő óváros", "1997 óta UNESCO"],
      ro: ["Oraș vechi pe insulă", "UNESCO din 1997"],
      en: ["Old town on an island", "UNESCO since 1997"]
    },
    image: "/geo-images/croatia/cult-trogir.webp"
  },
  {
    id: "cult-hvar",
    type: "culture",
    parent: "hr-country",
    coords: projectCoordsHR(16.4394, 43.1729),
    name: {
      de: "Hvar",
      hu: "Hvar",
      ro: "Hvar",
      en: "Hvar"
    },
    description: {
      de: "Sonnenreiche Insel mit Lavendelfeldern und venezianischer Festung.",
      hu: "Napsütéses sziget levendulamezőkkel és velencei erőddel.",
      ro: "Insulă însorită cu câmpuri de lavandă și fort venețian.",
      en: "A sunny island with lavender fields and a Venetian fortress."
    },
    facts: {
      de: ["Lavendelfelder", "Venezianische Festung"],
      hu: ["Levendulamezők", "Velencei erőd"],
      ro: ["Câmpuri de lavandă", "Fort venețian"],
      en: ["Lavender fields", "Venetian fortress"]
    },
    image: "/geo-images/croatia/cult-hvar.webp"
  },
  {
    id: "nat-plitvice",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(15.5966, 44.8654),
    name: {
      de: "Plitvicer Seen",
      hu: "Plitvicei-tavak",
      ro: "Lacurile Plitvice",
      en: "Plitvice Lakes"
    },
    description: {
      de: "UNESCO-Nationalpark mit 16 Seen und Travertinwasserfällen.",
      hu: "UNESCO nemzeti park 16 tóval és travertin lépcsővízesésekkel.",
      ro: "Parc național UNESCO cu 16 lacuri și cascade de travertin.",
      en: "UNESCO national park with 16 lakes and travertine waterfalls."
    },
    facts: {
      de: ["16 Seen", "Travertin-Kaskaden"],
      hu: ["16 tó", "Travertin lépcsőzetes vízesések"],
      ro: ["16 lacuri", "Cascade de travertin"],
      en: ["16 lakes", "Travertine cascades"]
    },
    image: "/geo-images/croatia/nat-plitvice.webp"
  },
  {
    id: "nat-krka",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(15.9685, 43.8013),
    name: {
      de: "Krka-Nationalpark",
      hu: "Krka Nemzeti Park",
      ro: "Parcul Național Krka",
      en: "Krka National Park"
    },
    description: {
      de: "Naturpark mit dem berühmten Skradinski-Buk-Wasserfall.",
      hu: "Természeti park a híres Skradinski Buk vízeséssel.",
      ro: "Parc natural cu celebra cascadă Skradinski Buk.",
      en: "A nature park with the famous Skradinski Buk waterfall."
    },
    facts: {
      de: ["Skradinski Buk", "Flusslandschaft Krka"],
      hu: ["Skradinski Buk", "Krka folyó völgye"],
      ro: ["Skradinski Buk", "Valea râului Krka"],
      en: ["Skradinski Buk", "Krka River landscape"]
    },
    image: "/geo-images/croatia/nat-krka.webp"
  },
  {
    id: "nat-kornati",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(15.35, 43.80),
    name: {
      de: "Kornati-Nationalpark",
      hu: "Kornati Nemzeti Park",
      ro: "Parcul Național Kornati",
      en: "Kornati National Park"
    },
    description: {
      de: "Adria-Archipel mit 89 Inseln und Inselchen.",
      hu: "Adriai szigetcsoport 89 szigettel és sziklával.",
      ro: "Arhipelag adriatic cu 89 de insule și insulițe.",
      en: "Adriatic archipelago with 89 islands and islets."
    },
    facts: {
      de: ["89 Inseln", "Adriatisches Meer"],
      hu: ["89 sziget", "Adriai-tenger"],
      ro: ["89 de insule", "Marea Adriatică"],
      en: ["89 islands", "Adriatic Sea"]
    },
    image: "/geo-images/croatia/nat-kornati.webp"
  },
  {
    id: "nat-brijuni",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(13.76, 44.91),
    name: {
      de: "Brijuni-Nationalpark",
      hu: "Brijuni Nemzeti Park",
      ro: "Parcul Național Brijuni",
      en: "Brijuni National Park"
    },
    description: {
      de: "Inselgruppe mit Dinosaurierspuren und Titos Geschichte.",
      hu: "Szigetcsoport dinoszaurusz-nyomokkal és Tito örökségével.",
      ro: "Arhipelag cu urme de dinozauri și istorie legată de Tito.",
      en: "An island group with dinosaur tracks and Tito history."
    },
    facts: {
      de: ["14 Inseln", "Dinosaurierspuren"],
      hu: ["14 sziget", "Dinoszaurusz-nyomok"],
      ro: ["14 insule", "Urme de dinozauri"],
      en: ["14 islands", "Dinosaur tracks"]
    },
    image: "/geo-images/croatia/nat-brijuni.webp"
  },
  {
    id: "nat-risnjak",
    type: "nature",
    parent: "hr-country",
    coords: projectCoordsHR(14.65, 45.42),
    name: {
      de: "Risnjak-Nationalpark",
      hu: "Risnjak Nemzeti Park",
      ro: "Parcul Național Risnjak",
      en: "Risnjak National Park"
    },
    description: {
      de: "Bergnationalpark der Dinarischen Alpen mit reicher Wildnis.",
      hu: "Dinári-Alpok hegyvidéki nemzeti park gazdag vadvilággal.",
      ro: "Parc montan din Alpii Dinarici, cu faună sălbatică bogată.",
      en: "A mountain park in the Dinaric Alps with rich wildlife."
    },
    facts: {
      de: ["Dinarische Alpen", "Reiche Wildnis"],
      hu: ["Dinári-Alpok", "Gazdag vadvilág"],
      ro: ["Alpii Dinarici", "Faună sălbatică bogată"],
      en: ["Dinaric Alps", "Rich wildlife"]
    },
    image: "/geo-images/croatia/nat-risnjak.webp"
  }
];
