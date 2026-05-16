// @ts-nocheck
import type { POI } from "../data/poi";
import { poiExtraSanmarinoCities } from "./poiExtraSanmarinoCities";
import { sanmarinoExtraHistory } from "./poiExtraSanmarinoHistory";
import { sanmarinoLandscapes } from "./poiExtraSanmarinoOther";

export const sanmarinoCountry: POI = {
  id: "country-sanmarino",
  type: "country",
  parent: "europe",
  coords: [12.4578, 43.9424],
  name: {
    de: "San Marino",
    hu: "San Marino",
    ro: "San Marino",
    en: "San Marino"
  },
  description: {
    de: "San Marino ist die älteste bestehende Republik der Welt und ein Zwergstaat, der vollständig von Italien umgeben ist.",
    hu: "San Marino a világ legrégebbi máig fennálló köztársasága, és egy törpeállam, amelyet teljesen körülvesz Olaszország.",
    ro: "San Marino este cea mai veche republică din lume și un microstat complet înconjurat de Italia.",
    en: "San Marino is the world's oldest surviving republic and a microstate entirely surrounded by Italy."
  },
  descriptionAdvanced: {
    de: "San Marino ist ein faszinierender Zwergstaat, der auf dem Berg Titano thront. Die historischen Türme und die mittelalterliche Architektur bieten atemberaubende Ausblicke.",
    hu: "",
    ro: "",
    en: ""
  },
  facts: {
    de: [
      "San Marino ist die drittkleinste Nation Europas.",
      "Die Republik wurde der Legende nach im Jahr 301 gegründet.",
      "Das Land hat mehr Autos als Einwohner.",
      "Die Amtssprache ist Italienisch.",
      "Der Monte Titano und das historische Zentrum gehören zum UNESCO-Welterbe."
    ],
    hu: [
      "San Marino Európa harmadik legkisebb országa.",
      "A köztársaságot a legenda szerint 301-ben alapították.",
      "Az országnak több autója van, mint lakosa.",
      "A hivatalos nyelv az olasz.",
      "A Titano-hegy és a történelmi központ az UNESCO világörökség része."
    ],
    ro: [
      "San Marino este a treia cea mai mică națiune din Europa.",
      "Conform legendei, republica a fost fondată în anul 301.",
      "Țara are mai multe mașini decât locuitori.",
      "Limba oficială este italiana.",
      "Muntele Titano și centrul istoric fac parte din Patrimoniul Mondial UNESCO."
    ],
    en: [
      "San Marino is the third smallest nation in Europe.",
      "According to legend, the republic was founded in 301 AD.",
      "The country has more cars than residents.",
      "The official language is Italian.",
      "Mount Titano and the historic center are a UNESCO World Heritage site."
    ]
  },
  factsAdvanced: {
    de: ["Die Republik San Marino ist heute eine parlamentarische Demokratie.", "Sie besitzt keine eigene Armee im traditionellen Sinne.", "Das Land verwendet den Euro, ist aber kein Mitglied der EU.", "Die Fläche beträgt nur etwa 61 Quadratkilometer.", "San Marino hat eine der niedrigsten Arbeitslosenquoten weltweit.", "Der Regierungssitz wird von zwei Staatsoberhäuptern (Capitani Reggenti) geleitet."],
    hu: [],
    ro: [],
    en: []
  },
  image: "/geo-images/sanmarino/country-sanmarino.webp"
};

export const sanmarinoRegions: POI[] = [
  {
    id: "SM-001",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4828, 43.9686],
    name: { de: "Serravalle", hu: "Serravalle", ro: "Serravalle", en: "Serravalle" },
    description: {
      de: "Die nördlichste und bevölkerungsreichste Gemeinde von San Marino.",
      hu: "San Marino legészakibb és legnépesebb községe.",
      ro: "Cea mai nordică și mai populată comună din San Marino.",
      en: "The northernmost and most populous municipality of San Marino."
    },
    descriptionAdvanced: {
      de: "Serravalle ist das industrielle Herz des Landes. Es beherbergt große Sportstätten und ist ein wichtiges Handelszentrum für die gesamte Region.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Größte Gemeinde des Landes.", "Wichtiges Industriezentrum.", "Beherbergt das Dorf Dogana."],
      hu: ["Az ország legnagyobb községe.", "Fontos ipari központ.", "Itt található Dogana faluja."],
      ro: ["Cea mai mare comună a țării.", "Important centru industrial.", "Găzduiește satul Dogana."],
      en: ["Largest municipality in the country.", "Important industrial center.", "Includes the village of Dogana."]
    },
    factsAdvanced: {
      de: ["Die Gemeinde hat über 10.000 Einwohner.", "Das Olympiastadion befindet sich hier.", "Serravalle ist direkt an die italienische Adriaküste angebunden.", "Es ist der wirtschaftlich dynamischste Teil von San Marino.", "Die Stadt beherbergt bedeutende Sportvereine.", "Hier befindet sich der Sitz der staatlichen Rundfunkanstalt."],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "SM-002",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4683, 43.9486],
    name: { de: "Domagnano", hu: "Domagnano", ro: "Domagnano", en: "Domagnano" },
    description: {
      de: "Eine Gemeinde im Osten San Marinos, bekannt für ihre landwirtschaftliche Bedeutung.",
      hu: "Község San Marino keleti részén, mezőgazdasági jelentőségéről ismert.",
      ro: "O comună în estul San Marino, cunoscută pentru importanța sa agricolă.",
      en: "A municipality in eastern San Marino, known for its agricultural importance."
    },
    descriptionAdvanced: {
      de: "Domagnano ist eine landschaftlich reizvolle Gegend, die historische archäologische Funde wie den 'Schatz von Domagnano' beherbergt.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Berühmt für den Schatzfund von Domagnano.", "Bietet weite Ausblicke auf die Adria.", "Sitz der Burg Montelupo."],
      hu: ["Híres a domagnanói kincsleletről.", "Tágas kilátást nyújt az Adriai-tengerre.", "Itt volt Montelupo vára."],
      ro: ["Slăvită pentru descoperirea comorii din Domagnano.", "Oferă vederi largi spre Marea Adriatică.", "Sediul castelului Montelupo."],
      en: ["Famous for the Domagnano Treasure find.", "Offers wide views of the Adriatic Sea.", "Seat of the Montelupo castle."]
    },
    factsAdvanced: {
      de: ["Der Schatz von Domagnano besteht aus gotischem Schmuck aus dem 5. Jahrhundert.", "Die Gemeinde ist von sanften Hügeln umgeben.", "Domagnano ist ein Knotenpunkt für den lokalen Verkehr.", "Die landwirtschaftliche Produktion umfasst Olivenöl und Wein.", "Die Gemeinde hat eine reiche Geschichte aus der Zeit der Langobarden.", "Viele Bewohner pendeln von hier in die Hauptstadt."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-002.webp"},
  {
    id: "SM-003",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.498, 43.928],
    name: { de: "Faetano", hu: "Faetano", ro: "Faetano", en: "Faetano" },
    description: {
      de: "Eine ruhige Gemeinde an der östlichen Grenze, geprägt von Natur und Landwirtschaft.",
      hu: "Csendes község a keleti határon, természet és mezőgazdaság jellemzi.",
      ro: "O comună liniștită la granița de est, caracterizată de natură și agricultură.",
      en: "A quiet municipality on the eastern border, characterized by nature and agriculture."
    },
    descriptionAdvanced: {
      de: "Faetano bietet weitläufige Naturflächen und ist bekannt für seinen künstlichen See, der sich harmonisch in die hügelige Landschaft einfügt.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Wurde 1463 Teil der Republik.", "Beherbergt einen künstlichen See zum Angeln.", "Geprägt durch hügelige Landschaften."],
      hu: ["1463-ban vált a köztársaság részévé.", "Itt található egy mesterséges horgásztó.", "Dombos tájak jellemzik."],
      ro: ["A devenit parte a republicii în 1463.", "Găzduiește un lac artificial pentru pescuit.", "Caracterizată de peisaje deluroase."],
      en: ["Became part of the republic in 1463.", "Home to an artificial lake for fishing.", "Characterized by hilly landscapes."]
    },
    factsAdvanced: {
      de: ["Faetano ist besonders beliebt bei Erholungssuchenden.", "Die Region ist landwirtschaftlich geprägt.", "Faetano wurde erst spät in das Territorium eingegliedert.", "Das Gebiet bietet zahlreiche Wanderwege.", "Die Gemeinde ist sehr dünn besiedelt.", "Es gibt hier ein gut erhaltenes lokales kulturelles Erbe."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-003.webp"},
  {
    id: "SM-004",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.481, 43.908],
    name: { de: "Montegiardino", hu: "Montegiardino", ro: "Montegiardino", en: "Montegiardino" },
    description: {
      de: "Die kleinste Gemeinde San Marinos, bekannt für ihr gut erhaltenes mittelalterliches Zentrum.",
      hu: "San Marino legkisebb községe, jól megőrzött középkori központjáról ismert.",
      ro: "Cea mai mică comună din San Marino, cunoscută pentru centrul său medieval bine conservat.",
      en: "The smallest municipality in San Marino, known for its well-preserved medieval center."
    },
    descriptionAdvanced: {
      de: "Montegiardino besticht durch seine malerische, historische Architektur und dient als Standort der Universität von San Marino.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Sitz der Universität von San Marino.", "Hatte früher eine strategische Festung.", "Sehr malerische, enge Gassen."],
      hu: ["A San Marinó-i Egyetem székhelye.", "Korábban stratégiai erődítménye volt.", "Nagyon festői, szűk utcák."],
      ro: ["Sediul Universității din San Marino.", "Avea în trecut o fortăreață strategică.", "Străduțe înguste foarte pitorești."],
      en: ["Seat of the University of San Marino.", "Formerly had a strategic fortress.", "Very picturesque, narrow streets."]
    },
    factsAdvanced: {
      de: ["Die Gemeinde liegt auf einer Anhöhe im Südosten.", "Sie bewahrt das mittelalterliche Stadtbild sehr konsequent.", "Montegiardino ist bei Studenten besonders beliebt.", "Das kulturelle Leben wird stark durch die Universität geprägt.", "Der Ort hat eine besonders ruhige und intime Atmosphäre.", "Die Architektur ist hauptsächlich aus lokalem Naturstein gefertigt."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-004.webp"},
  {
    id: "SM-005",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4578, 43.9103],
    name: { de: "Fiorentino", hu: "Fiorentino", ro: "Fiorentino", en: "Fiorentino" },
    description: {
      de: "Eine historische Gemeinde, die im 15. Jahrhundert eingegliedert wurde.",
      hu: "Történelmi község, amelyet a 15. században csatoltak a köztársasághoz.",
      ro: "O comună istorică anexată în secolul al XV-lea.",
      en: "A historic municipality annexed in the 15th century."
    },
    descriptionAdvanced: {
      de: "Fiorentino ist ein historischer Ort, der einst eine wichtige strategische Funktion mit einer eigenen Festung der Malatesta-Familie innehatte.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Bekannt für die Ruinen der Malatesta-Burg.", "Wichtig für den lokalen Weinbau.", "Bietet schöne Wanderwege."],
      hu: ["A Malatesta-vár romjairól ismert.", "Fontos a helyi bortermelés számára.", "Szép túraútvonalakat kínál."],
      ro: ["Cunoscută pentru ruinele castelului Malatesta.", "Importantă pentru viticultura locală.", "Oferă trasee frumoase de drumeție."],
      en: ["Known for the ruins of the Malatesta castle.", "Important for local viticulture.", "Offers beautiful hiking trails."]
    },
    factsAdvanced: {
      de: ["Die Landschaft um Fiorentino ist besonders fruchtbar.", "Weinbau ist ein wichtiger wirtschaftlicher Faktor.", "Die Gemeinde hat eine lange Geschichte der militärischen Bedeutung.", "Wanderwege bieten Ausblicke auf das Umland.", "Die historische Burgruine ist ein beliebtes Ausflugsziel.", "Fiorentino verbindet Tradition mit ländlicher Lebensweise."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-005.webp"},
  {
    id: "SM-006",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.421, 43.904],
    name: { de: "Chiesanuova", hu: "Chiesanuova", ro: "Chiesanuova", en: "Chiesanuova" },
    description: {
      de: "Eine ruhige ländliche Gemeinde im Südwesten San Marinos.",
      hu: "Csendes vidéki község San Marino délnyugati részén.",
      ro: "O comună rurală liniştită în sud-vestul San Marino.",
      en: "A quiet rural municipality in the southwest of San Marino."
    },
    descriptionAdvanced: {
      de: "Chiesanuova ist geprägt von dichten Wäldern und Hügellandschaften, die sie zu einem idealen Ziel für Natur- und Wanderfreunde machen.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Bekannt für seine Kiefernwälder.", "Liegt an der Grenze zur italienischen Region Marken.", "Beliebt für Naturtourismus."],
      hu: ["Fenyőerdőiről ismert.", "Az olaszországi Marche régió határán fekszik.", "Népszerű a természetjárók körében."],
      ro: ["Cunoscută pentru pădurile sale de pini.", "Situată la graniţa cu regiunea italiană Marche.", "Populară pentru turismul de natură."],
      en: ["Known for its pine forests.", "Located on the border with the Italian Marche region.", "Popular for nature tourism."]
    },
    factsAdvanced: {
      de: ["Der Ort bietet einen Rückzugsort in der Natur.", "Viele Wanderwege führen durch die unberührte Landschaft.", "Der Tourismus ist stark auf Naturerlebnisse ausgerichtet.", "Die Region hat einen starken ländlichen Charakter.", "Die Nähe zu Italien beeinflusst das kulturelle Angebot.", "Der Wald von Chiesanuova bietet Erholung in den Sommermonaten."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-006.webp"},
  {
    id: "SM-008",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4181, 43.9458],
    name: { de: "Acquaviva", hu: "Acquaviva", ro: "Acquaviva", en: "Acquaviva" },
    description: {
      de: "Eine westliche Gemeinde, die für ihre natürlichen Quellen bekannt ist.",
      hu: "Nyugati község, amely természetes forrásairól ismert.",
      ro: "O comună vestică cunoscută pentru izvoarele sale naturale.",
      en: "A western municipality known for its natural springs."
    },
    descriptionAdvanced: {
      de: "Acquaviva ist reich an natürlichen Wasserquellen und hat eine tiefe mythologische Verbindung zum Heiligen Marinus.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Hier suchte der Heilige Marinus Zuflucht.", "Verfügt über einen modernen Motocross-Parcours.", "Reich an lokaler Flora."],
      hu: ["Szent Marinus itt keresett menedéket.", "Modern motocross pályával rendelkezik.", "Gazdag helyi flórával bír."],
      ro: ["Sfântul Marinus a căutat refugiu aici.", "Dispune de un circuit modern de motocross.", "Bogată în floră locală."],
      en: ["Saint Marinus sought refuge here.", "Features a modern motocross track.", "Rich in local flora."]
    },
    factsAdvanced: {
      de: ["Acquaviva bietet eine Mischung aus Tradition und moderner Freizeit.", "Der Motocross-Parcours ist weit über die Grenzen bekannt.", "Die Landschaft wird durch Quellen und grüne Hügel geprägt.", "Der Ort hat einen hohen Stellenwert in der religiösen Geschichte.", "Die lokale Fauna und Flora sind besonders schützenswert.", "Acquaviva ist eine der ältesten Siedlungen in San Marino."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/SM-008.webp"},
  {
    id: "SM-009",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4419, 43.9406],
    name: { de: "Borgo Maggiore", hu: "Borgo Maggiore", ro: "Borgo Maggiore", en: "Borgo Maggiore" },
    description: {
      de: "Das wirtschaftliche Zentrum am Fuße des Monte Titano.",
      hu: "Gazdasági központ a Titano-hegy lábánál.",
      ro: "Centrul economic de la poalele Muntelui Titano.",
      en: "The economic center at the foot of Mount Titano."
    },
    descriptionAdvanced: {
      de: "Borgo Maggiore ist ein historisch gewachsener Marktplatz, der heute als wichtiger Knotenpunkt zwischen den unteren Ebenen und der Hauptstadt fungiert.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Wichtigster Marktplatz seit Jahrhunderten.", "Talstation der Seilbahn.", "Historisches Zentrum unter Denkmalschutz."],
      hu: ["Évszázadok óta a legfontosabb piactér.", "A drótkötélpálya völgyállomása.", "Műemlékvédelmi történelmi központ."],
      ro: ["Cea mai importantă piaţă de secole.", "Staţia de bază a telecabinei.", "Centru istoric protejat."],
      en: ["Most important marketplace for centuries.", "Lower station of the cable car.", "Protected historic center."]
    },
    factsAdvanced: {
      de: ["Borgo Maggiore beherbergt eine Seilbahn zur Altstadt.", "Der traditionelle Markttag ist eine wichtige soziale Institution.", "Die historische Architektur ist sehr gut erhalten.", "Viele Unternehmen haben hier ihren Sitz.", "Die Stadt dient als Bindeglied für den Tourismus.", "Die Stadtstruktur ist auf Handel ausgerichtet."],
      hu: [],
      ro: [],
      en: []
    }
  }
];

export const sanmarinoCities: POI[] = [
  {
    id: "city-san-marino",
    type: "city",
    parent: "SM-007",
    coords: [12.4464, 43.9317],
    name: {
      de: "Stadt San Marino",
      hu: "San Marino város",
      ro: "Orașul San Marino",
      en: "City of San Marino"
    },
    description: {
      de: "Die Hauptstadt liegt auf dem Monte Titano und ist bekannt für ihre mittelalterlichen Festungsmauern und engen Kopfsteinpflasterstraßen.",
      hu: "A főváros a Titano-hegyen fekszik, és híres középkori várfalairól, valamint szűk macskaköves utcáiról.",
      ro: "Capitala este situată pe Muntele Titano și este cunoscută pentru zidurile sale medievale și străduțele înguste pietruite.",
      en: "The capital is located on Mount Titano and is known for its medieval fortresses and narrow cobblestone streets."
    },
    descriptionAdvanced: {
      de: "Die Stadt San Marino ist ein architektonisches Juwel, das hoch über der Landschaft thront und Reisende mit seinem mittelalterlichen Charme verzaubert.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Die Altstadt ist UNESCO-Welterbe.",
        "Der Palazzo Pubblico ist der Sitz der Regierung.",
        "Es gibt zahlreiche zollfreie Geschäfte.",
        "Die Stadt bietet spektakuläre Ausblicke bis zur Adria."
      ],
      hu: [
        "Az óváros UNESCO világörökség.",
        "A Palazzo Pubblico a kormány székhelye.",
        "Számos vámmentes üzlet található itt.",
        "Látványos kilátás nyílik egészen az Adriai-tengerig."
      ],
      ro: [
        "Centrul vechi este în Patrimoniul Mondial UNESCO.",
        "Palazzo Pubblico este sediul guvernului.",
        "Există numeroase magazine duty-free.",
        "Orașul oferă vederi spectaculoase până la Marea Adriatică."
      ],
      en: [
        "The old town is a UNESCO World Heritage site.",
        "The Palazzo Pubblico is the seat of government.",
        "There are numerous duty-free shops.",
        "The city offers spectacular views all the way to the Adriatic Sea."
      ]
    },
    factsAdvanced: {
      de: ["Das gesamte Stadtgebiet steht unter strengem Denkmalschutz.", "In der Stadt werden regelmäßig staatliche Feierlichkeiten abgehalten.", "Die engen Gassen sind meist nur für Fußgänger zugänglich.", "Es gibt eine Vielzahl an kleinen Kunsthandwerksläden.", "Die Stadt bietet einen hervorragenden Einblick in die Geschichte des Mittelalters.", "Ein Besuch bei Sonnenuntergang ist besonders empfehlenswert."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/city-san-marino.webp"
  },
];

export const sanmarinoCulture: POI[] = [
  {
    id: "cult-guaita",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4485, 43.9360],
    name: {
      de: "Guaita (Erster Turm)",
      hu: "Guaita (Első Torony)",
      ro: "Guaita (Primul Turn)",
      en: "Guaita (First Tower)"
    },
    description: {
      de: "Der Guaita ist der älteste und größte der drei Türme auf dem Monte Titano, der im 11. Jahrhundert erbaut wurde.",
      hu: "A Guaita a Titano-hegy három tornya közül a legrégebbi és a legnagyobb, a 11. században épült.",
      ro: "Guaita este cel mai vechi și cel mai mare dintre cele drei turnuri de pe Muntele Titano, construit în secolul al XI-lea.",
      en: "The Guaita is the oldest and largest of the three towers on Mount Titano, built in the 11th century."
    },
    descriptionAdvanced: {
      de: "Als ältestes Verteidigungsbauwerk San Marinos thront der Guaita stolz auf dem Berg Titano und ist heute ein absolutes Muss für jeden Besucher.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Der Turm diente lange Zeit als Gefängnis.",
        "Er wurde auf einer festen Felsbasis ohne Fundament errichtet.",
        "Das Gebäude wurde mehrfach restauriert, zuletzt im 20. Jahrhundert.",
        "Er ist auf der san-marinesischen 5-Cent-Münze abgebildet."
      ],
      hu: [
        "A torony sokáig börtönként szolgált.",
        "Szilárd sziklaalapra épült alapozás nélkül.",
        "Az épületet többször felújították, legutóbb a 20. században.",
        "A san marinói 5 centes érmén is szerepel."
      ],
      ro: [
        "Turnul a servit mult timp ca închisoare.",
        "A fost construit pe o bază de stâncă solidă fără fundație.",
        "Clădirea a fost restaurată de mai multe ori, cel mai recent în secolul XX.",
        "Este reprezentat pe moneda de 5 cenți din San Marino."
      ],
      en: [
        "The tower served as a prison for a long time.",
        "It was built on a solid rock base with no foundation.",
        "The building has been restored several times, most recently in the 20th century.",
        "It is depicted on the Sammarinese 5-cent coin."
      ]
    },
    factsAdvanced: {
      de: ["Die Bausubstanz ist über 900 Jahre alt.", "Von oben bietet sich einer der besten Blicke über das ganze Land.", "Die architektonische Lösung ohne Fundament ist eine Meisterleistung der Zeit.", "Der Guaita ist das stärkste Symbol nationaler Unabhängigkeit.", "Die Verteidigungsgeschichte ist durch archäologische Funde belegt.", "Das Bauwerk hat zahlreiche Angriffe überstanden."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/cult-guaita.webp"
  },
  {
    id: "cult-cesta",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4490, 43.9320],
    name: {
      de: "Cesta (Zweiter Turm)",
      hu: "Cesta (Második Torony)",
      ro: "Cesta (Al doilea Turn)",
      en: "Cesta (Second Tower)"
    },
    description: {
      de: "Der Cesta-Turm steht auf dem höchsten Punkt des Monte Titano und beherbergt das Museum für alte Waffen.",
      hu: "A Cesta-torony a Titano-hegy legmagasabb pontján áll, és a régi fegyverek múzeumának ad otthont.",
      ro: "Turnul Cesta stă pe cel mai înalt punct al Muntelui Titano și găzduiește Muzeul Armelor Antice.",
      en: "The Cesta tower stands on the highest peak of Mount Titano and houses the Museum of Ancient Arms."
    },
    descriptionAdvanced: {
      de: "Dieser Turm ist nicht nur ein architektonisches Highlight, sondern bietet mit dem Waffenmuseum eine spannende Zeitreise in das militärische Mittelalter.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Er wurde im 13. Jahrhundert auf den Überresten einer älteren römischen Festung erbaut.",
        "Das Museum enthält über 500 Waffen aus dem Mittelalter.",
        "Der Turm bietet einen der besten Panoramablicke.",
        "Er wird auf der san-marinesischen 1-Cent-Münze dargestellt."
      ],
      hu: [
        "A 13. században épült egy régebbi római erőd romjain.",
        "A múzeumban több mint 500 középkori fegyver található.",
        "A toronyból nyílik az egyik legjobb panoráma.",
        "A san marinói 1 centes érmén ábrázolják."
      ],
      ro: [
        "A fost construit în secolul al XIII-lea pe rămășițele unui vechi fort roman.",
        "Muzeul conține peste 500 de arme din Evul Mediu.",
        "Turnul oferă una dintre cele mai bune vederi panoramice.",
        "Este reprezentat pe moneda de 1 cent din San Marino."
      ],
      en: [
        "It was built in the 13th century on the remains of an older Roman fort.",
        "The museum contains over 500 weapons dating back to the Middle Ages.",
        "The tower offers one of the best panoramic views.",
        "It is depicted on the Sammarinese 1-cent coin."
      ]
    },
    factsAdvanced: {
      de: ["Das Museum wurde systematisch erweitert und modernisiert.", "Die Waffensammlung ist eine der bedeutendsten ihrer Art in der Region.", "Der Blick vom höchsten Punkt ist weit über den Monte Titano hinaus bekannt.", "Die römischen Ursprünge unterstreichen die historische Tiefe des Standorts.", "Das Bauwerk ist ein Paradebeispiel mittelalterlicher Wehrtechnik.", "Cesta ist ein wichtiger kultureller Identifikationspunkt."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/cult-cesta.webp"
  },
  {
    id: "cult-montale",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4498, 43.9295],
    name: {
      de: "Montale (Dritter Turm)",
      hu: "Montale (Harmadik Torony)",
      ro: "Montale (Al treilea Turn)",
      en: "Montale (Third Tower)"
    },
    description: {
      de: "Der Montale ist der kleinste der drei Türme. Im Gegensatz zu den anderen ist er nicht für die Öffentlichkeit zugänglich.",
      hu: "A Montale a legkisebb a három torony közül. A többivel ellentétben ez nem látogatható a nagyközönség számára.",
      ro: "Montale este cel mai mic dintre cele trei turnuri. Spre deosebire de celelalte, nu este deschis publicului.",
      en: "The Montale is the smallest of the three towers. Unlike the others, it is not open to the public."
    },
    descriptionAdvanced: {
      de: "Der Montale ist eine mysteriöse, kleine Festung, die vor allem durch ihre strategische Lage und ihre abgeschlossene Natur fasziniert.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Er wurde im 14. Jahrhundert erbaut.",
        "Der Turm hat nur einen einzigen Eingang, der 7 Meter über dem Boden liegt.",
        "Er wurde gebaut, um sich gegen die Malatesta-Familie zu verteidigen.",
        "Er ist auf der san-marinesischen 2-Cent-Münze zu sehen."
      ],
      hu: [
        "A 14. században épült.",
        "A toronynak csak egyetlen bejárata van, amely 7 méterre van a földtől.",
        "A Malatesta család elleni védekezés céljából épült.",
        "A san marinói 2 centes érmén látható."
      ],
      ro: [
        "A fost construit în secolul al XIV-lea.",
        "Turnul are o singură intrare, care se află la 7 metri deasupra solului.",
        "A fost construit pentru a se apăra împotriva familiei Malatesta.",
        "Se poate vedea pe moneda de 2 cenți din San Marino."
      ],
      en: [
        "It was built in the 14th century.",
        "The tower has only one entrance, which is 7 meters above the ground.",
        "It was built to defend against the Malatesta family.",
        "It is seen on the Sammarinese 2-cent coin."
      ]
    },
    factsAdvanced: {
      de: ["Der Turm diente als wichtiger Ausguck.", "Die Abgeschlossenheit diente der Sicherheit.", "Montale war als Rückzugsort konzipiert.", "Die architektonische Konstruktion ist einzigartig.", "Die Geschichte ist eng mit der Unabhängigkeit verknüpft.", "Der Ort wird heute oft als stille Wächter-Statue interpretiert."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/cult-montale.webp"
  },
  {
    id: "cult-palazzo-pubblico",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4466, 43.9366],
    name: {
      de: "Palazzo Pubblico",
      hu: "Palazzo Pubblico",
      ro: "Palazzo Pubblico",
      en: "Palazzo Pubblico"
    },
    description: {
      de: "Das Rathaus von San Marino und das offizielle Regierungsgebäude, in dem Zeremonien und Staatstreffen stattfinden.",
      hu: "San Marino városházája és a hivatalos kormányépület, ahol ceremóniákat és állami találkozókat tartanak.",
      ro: "Primăria oraşului San Marino şi clădirea oficială a guvernului, unde au loc ceremoniile şi întâlnirile de stat.",
      en: "The town hall of San Marino and official Government Building, where ceremonies and state meetings are held."
    },
    descriptionAdvanced: {
      de: "Der Palazzo Pubblico ist das politische Herzstück von San Marino und besticht durch seinen neugotischen Stil, der Macht und Tradition vereint.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Entworfen vom römischen Architekten Francesco Azzurri im späten 19. Jahrhundert.",
        "Der gotische Baustil ähnelt dem Palazzo Vecchio in Florenz.",
        "Vor dem Gebäude befindet sich die Piazza della Libertà.",
        "Hier findet die Wachablösung statt."
      ],
      hu: [
        "Francesco Azzurri római építész tervezte a 19. század végén.",
        "A gótikus építészeti stílus a firenzei Palazzo Vecchio-ra hasonlít.",
        "Az épület előtt található a Piazza della Libertà.",
        "Itt tartják az őrségváltást."
      ],
      ro: [
        "Proiectat de arhitectul roman Francesco Azzurri la sfârşitul secolului al XIX-lea.",
        "Stilul arhitectural gotic seamănă cu Palazzo Vecchio din Florenţa.",
        "În faţa clădirii se află Piazza della Libertà.",
        "Aici are loc schimbarea gărzii."
      ],
      en: [
        "Designed by Roman architect Francesco Azzurri in the late 19th century.",
        "The gothic architectural style resembles the Palazzo Vecchio in Florence.",
        "In front of the building is the Piazza della Libertà.",
        "The changing of the guard takes place here."
      ]
    },
    factsAdvanced: {
      de: ["Das Gebäude dient sowohl als Rathaus als auch als Parlamentssitz.", "Der neugotische Stil war eine Hommage an die florentinische Tradition.", "Die Piazza della Libertà ist der zentrale Treffpunkt für Staatsakte.", "Die Wachablösung ist ein bei Touristen sehr beliebtes Spektakel.", "Der Palazzo ist ein Symbol für die Stabilität des Landes.", "Im Inneren befinden sich prunkvolle Räumlichkeiten für Staatsgäste."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/cult-palazzo-pubblico.webp"
  },
  {
    id: "cult-basilica-di-san-marino",
    type: "historical",
    parent: "SM-007",
    coords: [12.4463, 43.9372],
    name: {
      de: "Basilica di San Marino",
      hu: "San Marino-bazilika",
      ro: "Bazilica San Marino",
      en: "Basilica di San Marino"
    },
    description: {
      de: "Die Hauptkirche der Republik San Marino, die dem Heiligen Marinus, dem Gründer und Schutzpatron, gewidmet ist.",
      hu: "A San Marino Köztársaság fő temploma, amelyet a szerzetes és alapító Szent Marinusznak szenteltek.",
      ro: "Principala biserică din Republica San Marino, dedicată Sfântului Marinus, fondatorul şi patronul spiritual.",
      en: "The main church of the Republic of San Marino, dedicated to Saint Marinus, the founder and patron saint."
    },
    descriptionAdvanced: {
      de: "Als spirituelles Zentrum von San Marino ist die Basilika nicht nur architektonisch beeindruckend, sondern auch ein Ort tiefer nationaler Verehrung für den Schutzpatron.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Erbaut im 19. Jahrhundert im neoklassizistischen Stil.",
        "Unter dem Altar ruhen die Reliquien des Heiligen Marinus.",
        "Sie ersetzt eine ältere Kirche aus dem 4. Jahrhundert.",
        "Die Kirche ziert die san-marinesische 10-Cent-Münze."
      ],
      hu: [
        "A 19. században épült neoklasszicista stílusban.",
        "Az oltár alatt nyugszanak Szent Marinus ereklyéi.",
        "Egy régebbi, 4. századi templom helyére épült.",
        "A templom díszíti a san marinói 10 centes érmét."
      ],
      ro: [
        "Construită în secolul al XIX-lea în stil neoclasic.",
        "Moaştele Sfântului Marinus se odihnesc sub altar.",
        "Înlocuieşte o biserică mai veche din secolul al IV-lea.",
        "Biserica decorează moneda de 10 cenţi din San Marino."
      ],
      en: [
        "Built in the 19th century in the neoclassical style.",
        "The relics of Saint Marinus rest under the altar.",
        "It replaces an older church from the 4th century.",
        "The church adorns the Sammarinese 10-cent coin."
      ]
    },
    factsAdvanced: {
      de: ["Das Bauwerk spiegelt den Stolz der jungen Republik wider.", "Die neoklassizistische Architektur betont die Harmonie und Ordnung.", "Die Reliquien werden von der ganzen Bevölkerung verehrt.", "Die Kirche dient auch als Ort für offizielle Zeremonien.", "Die Geschichte der Basilika ist eng mit der des Landes verwoben.", "Sie ist ein herausragendes Beispiel sakraler Baukunst."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/cult-basilica-di-san-marino.webp"
  },
  {
    id: "cult-chiesa-fiorentino",
    type: "landmark",
    parent: "SM-005",
    coords: [12.455, 43.912],
    name: {
      de: "Kirche San Giovanni Battista",
      hu: "Keresztelő Szent János-templom",
      ro: "Biserica Sfântul Ioan Botezătorul",
      en: "Church of Saint John the Baptist"
    },
    description: {
      de: "Die wichtigste Kirche in Fiorentino, bekannt für ihre Architektur.",
      hu: "Fiorentino legfontosabb temploma, építészetéről ismert.",
      ro: "Principala biserică din Fiorentino, cunoscută pentru arhitectura sa.",
      en: "The main church in Fiorentino, known for its architecture."
    },
    descriptionAdvanced: {
      de: "Diese Kirche ist das spirituelle Zentrum von Fiorentino und ein wunderbares Beispiel für eine moderne sakrale Architektur, die Tradition und Zeitgeist verbindet.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Im 20. Jahrhundert wiederaufgebaut.", "Zentrum des religiösen Lebens in Fiorentino.", "Schlichte, elegante Fassade."],
      hu: ["A 20. században építették újjá.", "Fiorentino vallási életének központja.", "Egyszerű, elegáns homlokzat."],
      ro: ["Reconstruită în secolul XX.", "Centrul vieţii religioase din Fiorentino.", "Faţadă simplă şi elegantă."],
      en: ["Rebuilt in the 20th century.", "Center of religious life in Fiorentino.", "Simple, elegant facade."]
    },
    factsAdvanced: {
      de: ["Die Kirche ist der Ankerpunkt für die lokalen religiösen Feste.", "Das moderne Design spiegelt die Entwicklung von Fiorentino wider.", "Sie beherbergt zahlreiche Kunstschätze.", "Die Fassade strahlt Ruhe und Beständigkeit aus.", "Der Bau ist ein Beispiel für den kulturellen Wandel des 20. Jahrhunderts.", "Die Gemeinde identifiziert sich stark mit diesem Bauwerk."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/poi-images/cult-chiesa-fiorentino.webp",
  }
];

export const sanmarinoNature: POI[] = [
  {
    id: "nat-monte-titano",
    type: "mountain",
    parent: "SM-007",
    coords: [12.45, 43.9314],
    name: {
      de: "Monte Titano",
      hu: "Titano-hegy",
      ro: "Muntele Titano",
      en: "Mount Titano"
    },
    description: {
      de: "Der Monte Titano ist der höchste Berg in San Marino und das markanteste geographische Merkmal des Landes.",
      hu: "A Titano-hegy San Marino legmagasabb hegye, és az ország legjellegzetesebb földrajzi formája.",
      ro: "Muntele Titano este cel mai înalt munte din San Marino și cea mai distinctă caracteristică geografică a țării.",
      en: "Mount Titano is the highest mountain in San Marino and the most distinctive geographical feature of the country."
    },
    descriptionAdvanced: {
      de: "Der Monte Titano ist mehr als nur ein Berg; er ist das Fundament der san-marinesischen Unabhängigkeit und bietet eine atemberaubende Kulisse für jeden Gast.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: [
        "Der Berg hat drei markante Gipfel, auf denen jeweils ein Turm steht.",
        "Die höchste Erhebung erreicht 739 Meter über dem Meeresspiegel.",
        "Zusammen mit dem historischen Stadtzentrum bildet er ein UNESCO-Welterbe.",
        "Der Berg ist umgeben von einer reichen Flora und Fauna."
      ],
      hu: [
        "A hegynek három jellegzetes csúcsa van, mindegyiken egy toronnyal.",
        "A legmagasabb pontja 739 méterrel a tengerszint felett található.",
        "A történelmi városközponttal együtt UNESCO világörökségi helyszín.",
        "A hegyet gazdag növény- és állatvilág veszi körül."
      ],
      ro: [
        "Muntele are trei vârfuri distincte, fiecare cu un turn deasupra.",
        "Cea mai înaltă altitudine ajunge la 739 de metri deasupra nivelului mării.",
        "Împreună cu centrul istoric, formează un sit al Patrimoniului Mondial UNESCO.",
        "Muntele este înconjurat de o floră și o faună bogată."
      ],
      en: [
        "The mountain has three distinct peaks, each topped with a tower.",
        "The highest elevation reaches 739 meters above sea level.",
        "Together with the historic city center, it forms a UNESCO World Heritage site.",
        "The mountain is surrounded by a rich flora and fauna."
      ]
    },
    factsAdvanced: {
      de: ["Die Geologie des Berges ist ein wesentlicher Teil des kulturellen Erbes.", "Die drei Türme dienen als Navigationspunkte.", "Die Flora des Berges ist in ihrer Vielfalt erstaunlich.", "Der Monte Titano ist das Herz des san-marinesischen Tourismus.", "Das Ökosystem wird streng geschützt.", "Die Ausblicke ändern sich mit jeder Jahreszeit dramatisch."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/nat-monte-titano.webp"
  },
  {
    id: "nat-parco-ausa",
    type: "landmark",
    parent: "SM-001",
    coords: [12.4781, 43.9664],
    name: {
      de: "Ausa-Park",
      hu: "Ausa Park",
      ro: "Parcul Ausa",
      en: "Ausa Park"
    },
    description: {
      de: "Ein beliebter städtischer Park in Dogana (Serravalle), ideal für Erholung und Spaziergänge.",
      hu: "Népszerű városi park Doganában (Serravalle), ideális pihenésre és sétákra.",
      ro: "Un parc urban popular în Dogana (Serravalle), ideal pentru recreere și plimbări.",
      en: "A popular urban park in Dogana (Serravalle), ideal for recreation and walks."
    },
    descriptionAdvanced: {
      de: "Der Ausa-Park bietet einen grünen Rückzugsort im industriell geprägten Serravalle und fördert aktiv den Sport und die Erholung für alle Generationen.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Der Park bietet viele Sport- und Freizeiteinrichtungen."],
      hu: ["A park számos sport- és szabadidős létesítményt kínál."],
      ro: ["Parcul oferă multe facilităţi sportive şi de agrement."],
      en: ["The park offers many sports and recreational facilities."]
    },
    factsAdvanced: {
      de: ["Die Infrastruktur wird kontinuierlich ausgebaut.", "Der Park ist ein wichtiger Treffpunkt für lokale Familien.", "Grüne Flächen sind in Serravalle sehr wertvoll.", "Der Park ist ideal für Jogging und Freizeitaktivitäten.", "Er trägt zur Lebensqualität im Industriegebiet bei.", "Die Anlage ist sehr gepflegt."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/nat-parco-ausa.webp"
  },
  {
    id: "nat-sentiero-rupe",
    type: "landmark",
    parent: "SM-009",
    coords: [12.4430, 43.9350],
    name: {
      de: "Rupe-Wanderweg",
      hu: "Rupe túraútvonal",
      ro: "Traseul Rupe",
      en: "Rupe Trail"
    },
    description: {
      de: "Ein malerischer Wanderweg entlang der Felsklippen des Monte Titano, der Borgo Maggiore mit der Hauptstadt verbindet.",
      hu: "Festői túraútvonal a Titano-hegy sziklái mentén, amely Borgo Maggiorét köti össze a fővárossal.",
      ro: "Un traseu pitoresc de-a lungul stâncilor Muntelui Titano, care leagă Borgo Maggiore de capitală.",
      en: "A scenic hiking trail along the cliffs of Mount Titano, connecting Borgo Maggiore with the capital."
    },
    descriptionAdvanced: {
      de: "Der Rupe-Wanderweg ist ein Paradies für Abenteurer und bietet dramatische Felsformationen gepaart mit spektakulären Ausblicken über die Region.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Der Weg führt durch dichte Wälder und bietet steile Felswände."],
      hu: ["Az út sűrű erdőkön halad keresztül és meredek sziklafalakat kínál."],
      ro: ["Traseul trece prin păduri dese și oferă pereți abrupți de stâncă."],
      en: ["The trail passes through dense forests and features steep cliff faces."]
    },
    factsAdvanced: {
      de: ["Der Weg ist ein Highlight für Wanderfreunde.", "Man erlebt die Natur und die Geschichte hautnah.", "Der Weg ist hervorragend markiert.", "In manchen Abschnitten ist der Weg anspruchsvoll.", "Die Kombination aus Wald und Fels ist einzigartig.", "Die Verbindung der Orte durch diesen Pfad ist jahrhundertealte Tradition."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/geo-images/sanmarino/nat-sentiero-rupe.webp"
  },
  {
    id: "nat-lago-faetano",
    type: "landmark",
    parent: "SM-003",
    coords: [12.508, 43.931],
    name: {
      de: "See von Faetano",
      hu: "Faetanói-tó",
      ro: "Lacul Faetano",
      en: "Faetano Lake"
    },
    description: {
      de: "Ein künstlicher See in der Gemeinde Faetano, beliebt zum Sportfischen.",
      hu: "Mesterséges tó Faetano községben, népszerű a sporthorgászok körében.",
      ro: "Un lac artificial în comuna Faetano, popular pentru pescuitul sportiv.",
      en: "An artificial lake in the municipality of Faetano, popular for sport fishing."
    },
    descriptionAdvanced: {
      de: "Dieser See ist eine Oase der Ruhe in Faetano, die nicht nur Angler anzieht, sondern auch allen Besuchern eine friedliche Landschaft bietet.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Ruhiger Ort für Picknicks.", "Regelmäßige Angelwettbewerbe.", "Kleine Oase der Ruhe."],
      hu: ["Nyugodt hely piknikezéshez.", "Rendszeres horgászversenyek.", "A nyugalom kis oázisa."],
      ro: ["Loc liniştit pentru picnicuri.", "Competiţii regulate de pescuit.", "Mică oază de linişte."],
      en: ["Quiet spot for picnics.", "Regular fishing competitions.", "Small oasis of peace."]
    },
    factsAdvanced: {
      de: ["Das Wasser wird ökologisch gepflegt.", "Die Anlage ist für Familien sehr gut geeignet.", "Die Ruhe trägt zur Entspannung bei.", "Die Anglerkultur ist ein wesentlicher Teil des sozialen Lebens vor Ort.", "Die Landschaft ist sehr harmonisch gestaltet.", "Ein schöner Ort für Naturbeobachtungen."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/nat-lago-faetano.webp"},
  {
    id: "nat-pineta-chiesanuova",
    type: "landmark",
    parent: "SM-006",
    coords: [12.415, 43.902],
    name: {
      de: "Kiefernwald von Chiesanuova",
      hu: "Chiesanuovai fenyőerdő",
      ro: "Pădurea de pini Chiesanuova",
      en: "Chiesanuova Pine Forest"
    },
    description: {
      de: "Ein geschütztes Waldgebiet, das ideal zum Wandern und Entspannen ist.",
      hu: "Védett erdős terület, amely ideális túrázáshoz és kikapcsolódáshoz.",
      ro: "O zonă forestieră protejată, ideală pentru drumeţii şi relaxare.",
      en: "A protected forested area ideal for hiking and relaxation."
    },
    descriptionAdvanced: {
      de: "Dieser Kiefernwald ist ein natürliches Juwel in Chiesanuova, das besonders im Sommer kühlen Schatten spendet und zur Erholung einlädt.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Heimat vieler lokaler Vogelarten.", "Bietet kühle Schatten im Sommer.", "Gut markierte Wanderwege."],
      hu: ["Számos helyi madárfaj otthona.", "Hűvös árnyékot nyújt nyáron.", "Jól jelzett túraútvonalak."],
      ro: ["Adăposteşte multe specii locale de păsări.", "Oferă umbră răcoroasă vara.", "Trasee de drumeţie bine marcate."],
      en: ["Home to many local bird species.", "Offers cool shade in summer.", "Well-marked hiking trails."]
    },
    factsAdvanced: {
      de: ["Der Wald ist ein wichtiger Lebensraum für die lokale Fauna.", "Die gut markierten Wege sind ideal für jeden Wanderer.", "Der Wald ist ein wesentlicher Faktor für die Luftqualität.", "Die Ruhe ist ein großes Gut in der modernen Welt.", "Die Kiefern verleihen dem Wald einen speziellen Duft.", "Es ist ein hervorragendes Beispiel für Waldschutzmaßnahmen."],
      hu: [],
      ro: [],
      en: []
    }, image: "/poi-images/nat-pineta-chiesanuova.webp"},
  {
    id: "nat-rupe-baldasserona",
    type: "landmark",
    parent: "SM-008",
    coords: [12.425, 43.948],
    name: {
      de: "Rupe della Baldasserona",
      hu: "Baldasserona-szikla",
      ro: "Stânca Baldasserona",
      en: "Baldasserona Cliff"
    },
    description: {
      de: "Ein historisch bedeutender Felsen, an dem der Heilige Marinus laut Überlieferung lebte.",
      hu: "Történelmileg jelentős szikla, ahol a hagyomány szerint Szent Marinus élt.",
      ro: "O stâncă de importanţă istorică unde, conform tradiţiei, a trăit Sfântul Marinus.",
      en: "A historically significant cliff where Saint Marinus is said to have lived."
    },
    descriptionAdvanced: {
      de: "Die Rupe della Baldasserona ist ein spiritueller und geologischer Ankerpunkt, der die tiefe Verbindung von San Marino zu seinem Gründer Marinus verdeutlicht.",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["Religiöser Wallfahrtsort.", "Beeindruckende geologische Formation.", "Bietet Blick auf das Marecchia-Tal."],
      hu: ["Vallási zarándokhely.", "Lenyűgöző geológiai képződmény.", "Kilátást nyújt a Marecchia-völgyre."],
      ro: ["Loc de pelerinaj religios.", "Formaţiune geologică impresionantă.", "Oferă vedere spre Valea Marecchia."],
      en: ["Religious pilgrimage site.", "Impressive geological formation.", "Offers views of the Marecchia Valley."]
    },
    factsAdvanced: {
      de: ["Der Ort atmet Geschichte und Spiritualität.", "Geologische Formationen ziehen Wissenschaftler an.", "Der Ausblick ins Tal ist ein unvergessliches Erlebnis.", "Für Einheimische ist es ein Ort der Meditation.", "Die Bedeutung für die Gründungsgeschichte ist immens.", "Der Felsen ist ein geschütztes Naturdenkmal."],
      hu: [],
      ro: [],
      en: []
    },
    image: "/poi-images/nat-rupe-baldasserona.webp",
  }
];

export const sanmarinoAllPoi: POI[] = [sanmarinoCountry,
  ...sanmarinoRegions,
  ...sanmarinoCities,
  ...sanmarinoCulture,
  ...sanmarinoNature, ...poiExtraSanmarinoCities, ...sanmarinoExtraHistory, ...sanmarinoLandscapes];

