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
      de: "Die Stadt San Marino ist die Hauptstadt der gleichnamigen Republik, der ältesten bestehenden Republik der Welt, und liegt spektakulär an den Hängen des Monte Titano. Gegründet wurde die Siedlung laut Überlieferung im Jahr 301 n. Chr. durch den heiligen Marinus, der vor der Christenverfolgung unter Kaiser Diokletian floh. Die historische Altstadt ist von massiven mittelalterlichen Mauern umgeben und bewahrt ihren ursprünglichen Charakter durch enge Gassen und historische Gebäude aus Stein. Im Jahr 2008 wurde die Stadt zusammen mit dem Monte Titano in die Liste des UNESCO-Welterbes aufgenommen, da sie ein außergewöhnliches Zeugnis einer freien mittelalterlichen Kommune darstellt. Zu den wichtigsten Sehenswürdigkeiten gehören die drei Befestigungstürme, der Palazzo Pubblico und die Basilika von San Marino. Trotz ihrer geringen Größe von etwa 7 Quadratkilometern zieht die Stadt jährlich Millionen von Touristen an. Das Stadtbild bietet atemberaubende Panoramablicke über die Region Emilia-Romagna bis hin zur Adriaküste.",
      hu: "San Marino városa az azonos nevű köztársaság fővárosa, amely a világ legrégebbi, ma is fennálló köztársasága, és a Monte Titano északnyugati oldalán fekszik. A települést a legenda szerint 301-ben alapította Szent Marinus kőfaragó, aki a Diocletianus császár alatti keresztényüldözés elől menekült ide. A történelmi városmagot masszív középkori várfalak veszik körül, és szűk, meredek utcái mentén számos faragott kőépület maradt fenn épségben. 2008-ban a várost és a Monte Titanót az UNESCO a Világörökség részévé nyilvánította, mint a független városállami fejlődés kivételes példáját. A város politikai központja a Piazza della Libertà, ahol a Palazzo Pubblico épülete áll. San Marino nemcsak történelmi jelentősége, hanem lenyűgöző panorámája miatt is népszerű, ahonnan tiszta időben az Adria partja is látható. Az autóforgalom elől nagyrészt elzárt óváros hűen őrzi a középkori szabadság szellemét és építészeti örökségét.",
      ro: "Oraşul San Marino este capitala Republicii San Marino, cea mai veche republică din lume încă existentă, fiind situat pe versanţii vestici ai Muntelui Titano. Conform tradiţiei, aşezarea a fost fondată în anul 301 d.Hr. de către Sfântul Marinus, un tăietor în piatră care căuta refugiu în faţa persecuţiilor creştine ale împăratului Diocleţian. Centrul istoric este fortificat cu ziduri medievale impunătoare şi păstrează o structură urbană autentică, caracterizată prin străduţe înguste şi clădiri monumentale din piatră. În anul 2008, oraşul şi Muntele Titano au fost incluse în patrimoniul mondial UNESCO ca mărturie a continuităţii unei comunităţi libere încă din Evul Mediu. Principalele repere includ cele trei turnuri de apărare, Palazzo Pubblico şi Basilica San Marino, care adăposteşte moaştele sfântului fondator. Deşi are o populaţie de aproximativ 4.000 de locuitori, oraşul este un centru turistic şi comercial vibrant, oferind panorame spectaculoase asupra regiunii înconjurătoare şi a coastei adriatice.",
      en: "The City of San Marino is the capital of the Republic of San Marino, the world's oldest surviving republic, dramatically perched on the slopes of Monte Titano. According to tradition, the settlement was founded in 301 AD by Saint Marinus, a stonemason seeking refuge from the Christian persecutions of Emperor Diocletian. The historic center is enclosed by massive medieval walls and retains its authentic character with narrow winding streets and ancient stone buildings. In 2008, the city and Monte Titano were inscribed as a UNESCO World Heritage site, recognized as an exceptional example of a free medieval commune. Key landmarks include the three defensive towers, the Palazzo Pubblico, and the Basilica di San Marino, which holds the relics of the patron saint. Despite its small population of around 4,000, the city attracts millions of visitors annually for its rich history and stunning views. Its elevated position offers panoramic vistas stretching across the Emilia-Romagna region to the Adriatic coast.",
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
      de: ["Gegründet im Jahr 301 n. Chr.", "Hauptstadt der ältesten Republik", "UNESCO-Welterbe seit 2008", "Liegt auf einer Höhe von 749 m", "Umgeben von drei Verteidigungsmauern", "Bevölkerung ca. 4.000 Einwohner"],
      hu: ["Alapítási éve 301. szeptember 3.", "A világ legrégebbi köztársaságának fővárosa", "2008 óta UNESCO Világörökségi helyszín", "Tengerszint feletti magassága 749 méter", "Várfalai a 11-14. század között épültek", "Lakossága körülbelül 4000 fő"],
      ro: ["Fondat la 3 septembrie 301 d.Hr.", "Capitala celei mai vechi republici", "Inclus în patrimoniul UNESCO din 2008", "Altitudinea maximă de 749 metri", "Sediul Guvernului în Palazzo Pubblico", "Populaţie de aproximativ 4.000 locuitori"],
      en: ["Founded on September 3, 301 AD", "Capital of the world's oldest republic", "UNESCO World Heritage site since 2008", "Located at an altitude of 749 meters", "Enclosed by three layers of defensive walls", "Home to approximately 4,000 residents"],
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
      de: "Der Guaita-Turm, auch bekannt als Prima Torre, ist der älteste und größte der drei Verteidigungstürme auf dem Monte Titano in San Marino. Er wurde im 11. Jahrhundert erbaut und diente jahrhundertelang als strategischer Wachposten und Zufluchtsort für die Bewohner der Stadt. Die Festung zeichnet sich durch einen fünfeckigen Grundriss aus und wurde ohne Fundamente direkt auf dem Felsen errichtet. Im Inneren befinden sich eine kleine Kapelle, die der heiligen Barbara gewidmet ist, sowie Glockentürme, die früher zur Warnung vor feindlichen Angriffen genutzt wurden. Bis zum Jahr 1970 diente der Turm auch als Gefängnis, was ihm eine zusätzliche historische Bedeutung verleiht. Der Guaita ist über einen Panoramaweg mit den anderen beiden Türmen verbunden und bietet einen weiten Blick über das Land. Er ist ein markantes Symbol für die Unabhängigkeit San Marinos und ein wesentlicher Bestandteil des UNESCO-Welterbes. Die massive Steinarchitektur spiegelt die militärische Baukunst des Mittelalters wider.",
      hu: "A Guaita-torony, más néven az Első Torony (Prima Torre), a Monte Titano három híres erődítménye közül a legrégebbi és a legnagyobb. A 11. században épült, és évszázadokon át stratégiai védelmi pontként, valamint a lakosság menedékhelyeként szolgált támadások idején. Az erőd ötszögletű alaprajzzal rendelkezik, és különlegessége, hogy közvetlenül a sziklára építették, alapozás nélkül. A belső udvarban található egy kis kápolna, amelyet Szent Borbálának szenteltek, valamint egy harangtorony, amely egykor veszély esetén riasztotta a várost. Érdekesség, hogy a torony 1970-ig börtönként is funkcionált, ma pedig múzeumként látogatható. A Guaita egy látványos gyalogúton, a Passo delle Streghe-n keresztül kapcsolódik a többi toronyhoz. San Marino címerében is szerepel, mint a nemzeti szabadság és függetlenség jelképe. A robusztus kőfalakról lenyűgöző kilátás nyílik az Appenninek vonulataira és az Adriai-tengerre.",
      ro: "Turnul Guaita, cunoscut şi sub numele de Prima Torre, este cel mai vechi şi cel mai impunător dintre cele trei fortificaţii de pe Muntele Titano din San Marino. Construit în secolul al XI-lea, turnul a servit timp de secole ca punct strategic de apărare şi refugiu pentru locuitorii oraşului în perioade de asediu. Fortăreaţa are un plan pentagonal şi este ridicată direct pe stâncă, fără fundaţii clasice, demonstrând măiestria constructorilor medievali. În interior se află o capelă dedicată Sfintei Barbara şi un turn cu clopot care era utilizat pentru a anunţa urgenţele sau atacurile iminente. Până în anul 1970, anumite zone ale turnului au fost utilizate ca închisoare de stat. Guaita este legat de celelalte turnuri prin drumul de strajă, oferind vizitatorilor o perspectivă unică asupra arhitecturii militare a epocii. Turnul este un simbol central al suveranităţii statului, fiind reprezentat pe drapelul şi stema naţională a Republicii San Marino.",
      en: "Guaita Tower, also known as the First Tower (Prima Torre), is the oldest and largest of the three defensive towers on Monte Titano in San Marino. Built in the 11th century, it served for centuries as a strategic watchtower and a refuge for the citizens during times of conflict. The fortress features a pentagonal plan and was constructed directly onto the rock surface without foundations. Inside, visitors can find a small chapel dedicated to Saint Barbara and a bell tower that was once used to signal emergencies to the community. Historically, the tower functioned as a state prison until as recently as 1970. Guaita is connected to the other towers by a scenic ridge path, providing breathtaking views of the surrounding countryside. It remains a powerful symbol of San Marino's enduring independence and is prominently featured on the nation's coat of arms and flag. The massive stone walls stand as a testament to medieval military architecture.",
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
      de: ["Bau im 11. Jahrhundert begonnen", "Ältester der drei Türme", "Gefängnisnutzung bis 1970", "Fünfeckiger Grundriss", "Kapelle der heiligen Barbara im Inneren", "Bestandteil des UNESCO-Welterbes"],
      hu: ["A 11. században épült", "San Marino legrégebbi erődítménye", "1970-ig börtönként működött", "Ötszögletű alaprajz jellemzi", "Szent Borbála-kápolna található benne", "Szerepel a köztársaság címerében"],
      ro: ["Construit în secolul al XI-lea", "Cea mai veche dintre cele trei turnuri", "Utilizat ca închisoare până în 1970", "Plan arhitectural pentagonal", "Găzduieşte Capela Sfintei Barbara", "Inclus în patrimoniul mondial UNESCO"],
      en: ["Built in the 11th century", "Oldest of the three towers", "Used as a prison until 1970", "Features a pentagonal layout", "Contains the Chapel of Saint Barbara", "Featured on the national coat of arms"],
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
      de: "Der Cesta-Turm, auch bekannt als Seconda Torre, thront auf dem höchsten Gipfel des Monte Titano, der Fratta, in einer Höhe von 756 Metern. Er wurde im 13. Jahrhundert auf den Überresten eines antiken römischen Kastells errichtet und war ein wesentlicher Bestandteil der zweiten Verteidigungslinie San Marinos. Der Turm hat einen fünfeckigen Grundriss und wurde im Laufe der Jahrhunderte mehrfach restauriert, zuletzt in den 1920er Jahren, um seinen mittelalterlichen Glanz zu bewahren. Seit 1956 beherbergt die Festung das Museum für Alte Waffen, das eine beeindruckende Sammlung von über 1.500 Exponaten umfasst, darunter Rüstungen, Schwerter und frühe Feuerwaffen. Die Lage auf dem höchsten Punkt bietet den spektakulärsten Rundumblick über die gesamte Republik und das Umland. Der Cesta-Turm ist über den berühmten \"Hexenpass\" (Passo delle Streghe) mit dem Guaita-Turm verbunden. Er ist nicht nur ein militärhistorisches Denkmal, sondern auch ein architektonisches Juwel, das die strategische Bedeutung des Monte Titano unterstreicht.",
      hu: "A Cesta-torony, más néven a Második Torony (Seconda Torre), a Monte Titano legmagasabb pontján, a 756 méter magas Fratta-csúcson található. A 13. században épült egy korábbi római erőd maradványaira, és San Marino második védelmi vonalának kulcsfontosságú eleme volt. Az ötszögletű alaprajzú épületet az évszázadok során többször megerősítették, mai formáját jórészt az 1920-as évek nagy restaurálása során nyerte el. 1956 óta itt működik a Régi Fegyverek Múzeuma, amely több mint 1500 kiállítási tárgyat, köztük páncélokat, kardokat és korai tűzfegyvereket mutat be a középkortól a 19. századig. Elhelyezkedése miatt innen nyílik a legteljesebb panoráma a köztársaság területére és az Adriai-tengerre. A toronyhoz vezető látványos Passo delle Streghe (Boszorkányok hágója) az egyik legnépszerűbb sétaútvonal a látogatók körében. A Cesta-torony méltóságteljes sziluettje elengedhetetlen része San Marino látképének és történelmi identitásának.",
      ro: "Turnul Cesta, denumit şi Seconda Torre, este situat pe cel mai înalt vârf al Muntelui Titano, numit Fratta, la o altitudine de 756 metri. Edificiul a fost ridicat în secolul al XIII-lea pe fundaţiile unei foste fortăreţe romane, devenind un punct esenţial al celei de-a doua centuri de fortificaţii a oraşului. Turnul are o formă pentagonală şi a suferit diverse transformări arhitecturale, fiind restaurat extensiv în anul 1924 pentru a-şi recupera aspectul medieval original. Din anul 1956, fortăreaţa găzduieşte Muzeul de Arme Vechi, care expune o colecţie impresionantă de peste 1.500 de piese, de la armuri şi spade până la arme de foc timpurii. Fiind situat la cota maximă a muntelui, turnul oferă cea mai vastă panoramă asupra întregii republici şi a coastei italiene din depărtare. Accesul se face prin drumul pitoresc Passo delle Streghe, care leagă primele două turnuri. Turnul Cesta rămâne o dovadă vie a capacităţii defensive şi a bogăţiei istorice a micii enclave italiene.",
      en: "Cesta Tower, also known as the Second Tower (Seconda Torre), is located on the highest peak of Monte Titano, known as Fratta, at an altitude of 756 meters. Constructed in the 13th century atop the ruins of an ancient Roman fortress, it formed a vital part of San Marino's second defensive wall system. The tower features a pentagonal layout and underwent significant restoration in the 1920s to preserve its medieval aesthetic. Since 1956, the fortress has housed the Museum of Ancient Arms, showcasing an extensive collection of over 1,500 artifacts, including armor, swords, and early firearms dating from the Middle Ages to the 19th century. Its position at the mountain's highest point offers the most spectacular 360-degree views of the republic and the distant Adriatic coast. Cesta is connected to the Guaita Tower via the scenic \"Passo delle Streghe\" (Path of the Witches). It stands as a remarkable historical monument, highlighting the strategic military importance of Monte Titano throughout the centuries.",
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
      de: ["Bau im 13. Jahrhundert auf römischen Ruinen", "Höchster Punkt San Marinos (756 m)", "Museum für Alte Waffen seit 1956 eröffnet", "Über 1.500 historische Waffen ausgestellt", "Fünfeckiger Grundriss der Anlage", "Liegt auf dem Gipfel der Fratta"],
      hu: ["A 13. században épült római alapokra", "756 méteres magasságban található", "Régi Fegyverek Múzeuma található benne", "A múzeum 1956-ban nyílt meg", "Több mint 1500 fegyvert mutat be", "A Monte Titano legmagasabb pontja"],
      ro: ["Ridicată în secolul al XIII-lea", "Situată la cota maximă de 756 metri", "Găzduieşte Muzeul de Arme Vechi din 1956", "Colecţie de peste 1.500 de exponate", "Construită pe ruinele unui castru roman", "Punctul culminant al Muntelui Titano"],
      en: ["Built in the 13th century on Roman ruins", "Highest point in San Marino (756m)", "Houses the Museum of Ancient Arms", "Museum opened to the public in 1956", "Exhibits over 1,500 historic weapons", "Located on the Fratta summit"],
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
      de: "Der Montale-Turm, die Terza Torre, ist der kleinste und abgelegenste der drei Verteidigungstürme von San Marino. Er wurde im 14. Jahrhundert erbaut, um die Verteidigungslinie auf dem Monte Titano zu vervollständigen und vor Angriffen der Malatesta aus der benachbarten Region Rimini zu warnen. Im Gegensatz zu den anderen beiden Türmen ist der Montale nicht für die Öffentlichkeit zugänglich und besitzt keinen begehbaren Innenbereich, außer einem tiefen Verlies. Dieses acht Meter tiefe Verlies, bekannt als \"Il Fondo della Torre\", wurde in der Vergangenheit als Gefängnis genutzt. Der Turm hat einen schlanken, quadratischen Grundriss und steht isoliert am östlichen Ende des Bergrückens. Trotz seiner bescheidenen Größe spielte er eine entscheidende Rolle als Ausguck, da er einen weiten Blick über das Tal ermöglichte. Umgeben von dichtem Wald, bietet die Umgebung des Turms eine ruhige Atmosphäre für Wanderer. Der Montale ist ein integraler Bestandteil des UNESCO-Welterbes und vervollständigt das ikonische Bild der drei Gipfel von San Marino.",
      hu: "A Montale-torony, San Marino harmadik tornya (Terza Torre), a Monte Titano három erődítménye közül a legkisebb és legelszigeteltebb. A 14. században épült azzal a céllal, hogy teljessé tegye a védelmi hálózatot, és figyelmeztesse a várost a szomszédos Rimini urai, a Malatesták felől érkező fenyegetésekre. A másik két toronytól eltérően a Montale belseje nem látogatható a nagyközönség számára, csak a külső falai és a környező park tekinthető meg. Az épület egyetlen bejárata több méter magasan található, belsejében pedig egy nyolc méter mély, börtönként használt verem található, amelyet \"Il Fondo della Torre\" néven ismernek. Négyszögletű, karcsú sziluettje távolabb esik a város központjától, sűrű növényzettel körülvett területen. Stratégiai jelentősége őrtoronyként kiemelkedő volt, hiszen innen nyílt a legjobb rálátás az ellenséges mozgásokra. A Montale a köztársaság címerében a harmadik tollat szimbolizálja az ikonikus tornyok felett, és fontos részét képezi az UNESCO Világörökségi védelemnek.",
      ro: "Turnul Montale, cunoscut ca Terza Torre, este cea mai mică şi izolată dintre cele trei fortificaţii emblematice ale Republicii San Marino de pe Muntele Titano. Construit în secolul al XIV-lea, acesta a avut un rol strategic esenţial în sistemul defensiv, fiind destinat monitorizării mişcărilor trupelor familiei rivale Malatesta din Rimini. Spre deosebire de Guaita şi Cesta, Montale nu dispune de un interior amenajat pentru vizitare, fiind o structură masivă cu o singură intrare situată la înălţime. În interior se află o groapă adâncă de opt metri, denumită \"Il Fondo della Torre\", care servea în trecut drept închisoare. Turnul are o formă patrulateră zveltă şi este situat la extremitatea estică a crestei muntoase, fiind înconjurat de o vegetaţie bogată. Deşi accesul în interior este restricţionat, zona din jur este populară printre turişti pentru linişte şi priveliştile panoramice asupra văii. Montale completează triada defensivă reprezentată pe stema naţională, simbolizând rezistenţa istorică a micii enclave.",
      en: "Montale Tower, the Third Tower (Terza Torre), is the smallest and most secluded of the three defensive structures on Monte Titano in San Marino. Built in the 14th century, its primary purpose was to complete the defensive line and watch for potential threats from the rival Malatesta family in nearby Rimini. Unlike the other two towers, the interior of Montale is not open to the public and it features a single high-level entrance for security. Inside, there is an eight-meter-deep pit known as \"Il Fondo della Torre,\" which was historically used as a prison. The tower has a slender, quadrilateral plan and stands isolated on the easternmost ridge of the mountain. Despite its modest size, it played a crucial role as a lookout post, offering extensive visibility over the surrounding valleys. Surrounded by lush forest, the area around the tower provides a peaceful retreat for hikers. Montale is an essential component of the UNESCO World Heritage site and completes the iconic image of San Marino's three peaks.",
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
      de: ["Bauzeit im 14. Jahrhundert", "Kleinster der drei Türme", "Besitzt ein 8 m tiefes Verlies", "Nicht für die Öffentlichkeit zugänglich", "Diente als Ausguck gegen die Malatesta", "Quadratischer Grundriss der Festung"],
      hu: ["A 14. században épült", "San Marino legkisebb tornya", "8 méter mély börtönverem van benne", "Belső tere nem látogatható", "Négyszögletű alaprajzú épület", "Az UNESCO Világörökség része"],
      ro: ["Construit în secolul al XIV-lea", "Cea mai mică dintre cele trei turnuri", "Include o închisoare adâncă de 8 metri", "Interiorul nu este deschis publicului", "Rol de observaţie împotriva Malatesta", "Plan arhitectural patrulater"],
      en: ["Built during the 14th century", "Smallest of the three towers", "Contains an 8-meter deep prison pit", "Internal access is restricted to the public", "Watchtower against the Malatesta family", "Slender quadrilateral architectural plan"],
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
      de: "Der Palazzo Pubblico ist das Regierungsgebäude der Republik San Marino und befindet sich am Piața della Libertà im historischen Zentrum der Stadt. Das heutige Gebäude wurde zwischen 1884 und 1894 nach den Plänen des römischen Architekten Francesco Azzurri im neugotischen Stil errichtet. Er steht an der Stelle des antiken \"Domus Magna Communis\", dem ursprünglichen Sitz der Gemeinde aus dem 14. Jahrhundert. Die Fassade ist mit den Wappen der neun Gemeinden (Castelli) der Republik geschmückt und wird von einem markanten Glockenturm gekrönt. Im Inneren befindet sich der prunkvolle Ratssaal (Sala del Consiglio), in dem die 60 Mitglieder des Großen und Allgemeinen Rats tagen. Ein bemerkenswertes Kunstwerk im Saal ist das große Wandgemälde von Emilio Retrosi, das die Inthronisierung des heiligen Marinus darstellt. Der Palazzo ist das politische Herz des Landes und dient als Kulisse für offizielle Staatsbesuche und Zeremonien, wie die Amtseinführung der Capitani Reggenti. Vor dem Gebäude steht die berühmte Freiheitsstatue, ein Geschenk der Gräfin Otilia Heyroth Wagener aus dem Jahr 1876.",
      hu: "A Palazzo Pubblico San Marino köztársasági palotája és városháza, amely a történelmi városközpontban, a Piazza della Libertà téren emelkedik. A jelenlegi épületet 1884 és 1894 között emelték Francesco Azzurri római építész tervei alapján, neogótikus stílusban. Az épület a középkori Domus Magna Communis helyén áll, amely a 14. századtól kezdve szolgált a közösség központjaként. Homlokzatát a köztársaság kilenc körzetének (Castelli) címerei díszítik, óratornya pedig a város egyik legfőbb jellegzetessége. Az épület belsejében található a Nagytanács terme (Sala del Consiglio), ahol a 60 tagú törvényhozó testület ülésezik; itt látható Emilio Retrosi nagyszabású freskója, amely Szent Marinust ábrázolja hívei körében. A Palazzo Pubblico a politikai élet központja, itt zajlik a félévente esedékes régenskapitányok (Capitani Reggenti) beiktatási ceremóniája is. A palota előtt áll a Szabadság-szobor (Statua della Libertà), amelyet 1876-ban adományozott a városnak Otilia Heyroth Wagener grófnő.",
      ro: "Palazzo Pubblico este sediul central al guvernului Republicii San Marino, fiind situat în Piaţa Libertăţii din inima centrului istoric. Edificiul actual a fost construit între anii 1884 şi 1894 după proiectul arhitectului roman Francesco Azzurri, adoptând un stil neogotic rafinat. Clădirea a fost ridicată pe locul vechii \"Domus Magna Communis\", sediul original al comunităţii datând din secolul al XIV-lea. Faţada este decorată cu stemele celor nouă castele (districte) ale republicii şi este dominată de un turn cu ceas spectaculos. În interior se află Sala Consiliului Mare şi General, unde cei 60 de parlamentari se reunesc pentru a decide legile statului, decorată cu o frescă monumentală de Emilio Retrosi care îl înfăţişează pe Sfântul Marinus. Palatul este centrul simbolic al suveranităţii sammarineze, fiind locul unde au loc ceremoniile de învestire a Căpitanilor Regenţi de două ori pe an. În faţa palatului străjuieşte Statuia Libertăţii, un simbol al valorilor democratice ale celei mai vechi republici din lume.",
      en: "The Palazzo Pubblico is the official seat of the government of the Republic of San Marino, located on Piazza della Libertà in the historic city center. The current building was constructed between 1884 and 1894 following the designs of Roman architect Francesco Azzurri in a refined Neo-Gothic style. It stands on the site of the ancient \"Domus Magna Communis,\" the original community hall dating back to the 14th century. The facade is adorned with the coats of arms of the republic's nine municipalities (Castelli) and is crowned by a distinctive clock tower. Inside, the Great and General Council Chamber (Sala del Consiglio) serves as the meeting place for the 60 members of parliament, featuring a monumental fresco by Emilio Retrosi depicting Saint Marinus. The Palazzo is the political heart of the nation, hosting official state visits and the biannual inauguration ceremonies of the Captains Regent. In front of the palace stands the Statue of Liberty, donated by Countess Otilia Heyroth Wagener in 1876 as a tribute to the republic's democratic traditions.",
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
      de: ["Inauguration am 30. September 1894", "Entworfen vom Architekten Francesco Azzurri", "Sitz des Großen und Allgemeinen Rats", "Erbaut auf der Domus Magna Communis", "Fassade mit Wappen der neun Gemeinden", "Amtseinführung der Capitani Reggenti hier"],
      hu: ["1894. szeptember 30-án avatták fel", "Francesco Azzurri római építész tervezte", "A 60 tagú Nagytanács székhelye", "Neogótikus stílusban épült", "Kilenc körzet címere díszíti a falát", "Itt iktatják be a régenskapitányokat"],
      ro: ["Inaugurat la 30 septembrie 1894", "Proiectat de arhitectul Francesco Azzurri", "Sediul Consiliului Mare şi General", "Construit în stil neogotic", "Adăposteşte o frescă de Emilio Retrosi", "Locul ceremoniilor pentru Căpitanii Regenţi"],
      en: ["Inaugurated on September 30, 1894", "Designed by architect Francesco Azzurri", "Seat of the Great and General Council", "Built in the Neo-Gothic style", "Features coats of arms of the 9 municipalities", "Host of the Captains Regent inauguration"],
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
      de: "Die Basilika von San Marino ist das wichtigste religiöse Gebäude der Republik und dient als Konkathedrale der Diözese San Marino-Montefeltro. Das heutige klassizistische Bauwerk wurde zwischen 1826 und 1838 an der Stelle einer antiken romanischen Pieve aus dem 4. Jahrhundert errichtet, die abgerissen wurde. Entworfen wurde die Kirche von dem Architekten Antonio Serra aus Bologna. Die beeindruckende Fassade verfügt über einen Portikus mit acht korinthischen Säulen und trägt die lateinische Inschrift \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI\". Im Inneren beherbergt die Basilika in einer prächtigen Urne unter dem Hauptaltar die Reliquien des heiligen Marinus, des Gründers der Republik. Das Innere besteht aus drei Schiffen und ist mit bedeutenden Statuen und Gemälden geschmückt, darunter eine Statue des heiligen Marinus von Adamo Tadolini. Die Basilika spielt eine zentrale Rolle im spirituellen und staatlichen Leben des Landes, insbesondere während der Feierlichkeiten am 3. September. Die schlichte Eleganz des Neoklassizismus verleiht dem sakralen Raum eine feierliche und erhabene Atmosphäre.",
      hu: "A San Marino-bazilika a köztársaság legfontosabb katolikus temploma, amely egyben a San Marino-Montefeltro egyházmegye társszékesegyháza. A jelenlegi klasszicista épületet 1826 és 1838 között emelték egy korábbi, 4. századi román stílusú plébániatemplom helyén, amelyet állapota miatt le kellett bontani. A templom tervezője a bolognai Antonio Serra volt. A homlokzatot nyolc korinthoszi oszlopból álló monumentális portikusz díszíti, felette pedig a \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI\" (Szent Marinusnak, a szabadság pártfogójának és alapítójának) felirat olvasható. A bazilika legfőbb kincse a főoltár alatt elhelyezett ereklyetartó, amely a köztársaság alapítója, Szent Marinus hamvait őrzi. A belső tér háromhajós elrendezésű, fehér márványoszlopokkal és neves szobrokkal, köztük Adamo Tadolini Szent Marinus-alkotásával. A bazilika központi helyszíne a nemzeti ünnepeknek, különösen a szeptember 3-i alapítási évfordulónak. Az épület a hit és a politikai szabadság összefonódásának szimbóluma San Marinóban.",
      ro: "Basilica San Marino este principalul lăcaş de cult catolic din republică şi co-catedrală a Diecezei de San Marino-Montefeltro. Edificiul actual, construit în stil neoclasic între anii 1826 şi 1838, a fost ridicat pe locul unei vechi biserici romanice din secolul al IV-lea, care a fost demolată pentru a face loc noii structuri. Proiectul a fost realizat de arhitectul Antonio Serra din Bologna. Faţada impresionantă este precedată de un portic susţinut de opt coloane corintice şi poartă inscripţia latină dedicată Sfântului Marinus, ctitorul libertăţii. În interiorul basilicii, sub altarul principal, se află o urnă preţioasă care conţine moaştele Sfântului Marinus, descoperite în timpul săpăturilor. Interiorul este structurat pe trei nave şi este decorat cu statui de mare valoare, printre care se numără cea a sfântului patron realizată de Adamo Tadolini. Basilica este centrul ceremoniilor religioase de stat, fiind locul unde se oficiază liturghii solemne în prezenţa Căpitanilor Regenţi la sărbătorile naţionale.",
      en: "The Basilica di San Marino is the primary Catholic place of worship in the republic and serves as the co-cathedral of the Diocese of San Marino-Montefeltro. This Neoclassical structure was built between 1826 and 1838 on the site of an ancient 4th-century Romanesque parish church that was demolished to accommodate the new building. The design was the work of Bolognese architect Antonio Serra. The grand facade features a portico supported by eight Corinthian columns and bears the Latin inscription \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI,\" honoring Saint Marinus as the patron and founder of liberty. Inside the basilica, underneath the high altar, lies a sacred urn containing the relics of Saint Marinus, discovered during the excavation of the old church. The interior is divided into three naves and is decorated with significant artworks, including a prominent statue of Saint Marinus by Adamo Tadolini. The basilica remains the heart of spiritual and civic life in San Marino, especially during the annual national festival on September 3rd.",
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
      de: ["Bauzeit von 1826 bis 1838", "Entwurf vom Architekten Antonio Serra", "Klassizistischer Architekturstil", "Beherbergt Reliquien des hl. Marinus", "Acht korinthische Säulen an der Front", "Steht auf einer antiken Kirche aus dem 4. Jh."],
      hu: ["1826 és 1838 között épült", "Antonio Serra bolognai építész tervezte", "Stílusa tiszta klasszicizmus", "Szent Marinus ereklyéit őrzi", "Nyolc korinthoszi oszlop díszíti a portikuszt", "Háromhajós belső térrel rendelkezik"],
      ro: ["Construită între anii 1826 şi 1838", "Arhitectul proiectant: Antonio Serra", "Stil arhitectural neoclasic", "Adăposteşte moaştele Sfântului Marinus", "Faţadă cu opt coloane corintice", "Situată în Piaţa Domus Plebis"],
      en: ["Built between 1826 and 1838", "Designed by architect Antonio Serra", "Neoclassical architectural style", "Holds the relics of Saint Marinus", "Fronted by 8 Corinthian columns", "Built on the site of a 4th-century church"],
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
      de: "Die Kirche San Giovanni Battista in Fiorentino ist das wichtigste religiöse Gebäude der Gemeinde (Castello) Fiorentino in San Marino. Die heutige Kirche wurde zwischen 1937 und 1940 auf den Überresten einer wesentlich älteren sakralen Stätte errichtet, die vermutlich auf das 5. Jahrhundert zurückgeht. Der Entwurf stammt von dem bekannten sammarinesischen Architekten Gino Zani, der das Gebäude in einem historisierenden Stil mit romanischen und gotischen Elementen gestaltete. Die Fassade besteht aus hellem lokalem Stein und zeichnet sich durch ein elegantes Portal und eine Fensterrose aus. Fiorentino war historisch eine wichtige Festung der Malatesta-Familie, bevor sie 1463 endgültig Teil der Republik San Marino wurde. Im Inneren der Kirche befinden sich wertvolle sakrale Kunstwerke und eine ruhige, andächtige Atmosphäre. Die Kirche ist Johannes dem Täufer gewidmet, der als Schutzpatron der Gemeinde verehrt wird. Die Architektur fügt sich harmonisch in die hügelige Landschaft der Region ein und zeugt vom kulturellen Erbe der lokalen Gemeinschaft im 20. Jahrhundert.",
      hu: "A fiorentinói Keresztelő Szent János-templom (Chiesa di San Giovanni Battista) a San Marinó-i Fiorentino körzet legjelentősebb hitéleti központja. A jelenlegi templomot 1937 és 1940 között építették Gino Zani neves helyi építész tervei alapján, egy jóval korábbi, valószínűleg 5. századi szakrális épület alapjaira. Az épület stílusa a román és a gótika jegyeit ötvözi, ami méltóságteljes megjelenést kölcsönöz az egyházközség központjának. Homlokzata világos színű, helyi mészkőből készült, amelyet egy díszes rózsaablak tesz hangsúlyossá. Fiorentino történelmileg fontos stratégiai pont volt, korábban a rimini Malatesta család fennhatósága alá tartozott, mielőtt 1463-ban végleg San Marino része lett volna. A templom belső tere letisztult, és több értékes vallási műalkotásnak ad otthont. A névadó Keresztelő Szent János tisztelete mélyen gyökerezik a helyi közösségben, ünnepeit ma is hagyományos keretek között tartják. Az épület harmonikusan illeszkedik a település dombvidéki környezetébe, tükrözve a sammarineszi építészeti hagyományok továbbélését.",
      ro: "Biserica Sfântul Ioan Botezătorul din Fiorentino este principalul edificiu religios al castelului (districtului) Fiorentino din Republica San Marino. Actuala construcţie a fost ridicată între anii 1937 şi 1940 pe locul unei structuri mult mai vechi, ale cărei origini par să urce până în secolul al V-lea d.Hr. Proiectul a fost semnat de arhitectul Gino Zani, care a ales o abordare eclectică ce îmbină armonios elemente ale stilului romanic cu influenţe gotice. Faţada este realizată din piatră locală de culoare deschisă, fiind decorată cu o rozetă elegantă deasupra portalului principal. Fiorentino a fost istoric o fortăreaţă a familiei Malatesta din Rimini, fiind anexată definitiv republicii în anul 1463 după un asediu prelungit. Interiorul bisericii păstrează o atmosferă de reculegere, adăpostind obiecte de cult valoroase şi picturi religioase. Dedicată Sfântului Ioan Botezătorul, biserica reprezintă un reper identitar important pentru locuitorii zonei, integrându-se perfect în peisajul colinar specific sudului micii republici.",
      en: "The Church of Saint John the Baptist in Fiorentino is the most important religious building in the municipality (Castello) of Fiorentino in San Marino. The current church was built between 1937 and 1940 on the ruins of a much older sacred site, believed to date back to the 5th century. It was designed by the renowned Sammarinese architect Gino Zani, who employed a historicist style blending Romanesque and Gothic architectural elements. The facade is constructed from light-colored local stone and features an elegant portal and a rose window. Fiorentino was historically a significant stronghold belonging to the Malatesta family of Rimini before it was definitively annexed by the Republic of San Marino in 1463. Inside the church, visitors can find precious religious artifacts and a serene atmosphere for prayer. Dedicated to Saint John the Baptist, the patron saint of the municipality, the church serves as a vital community hub. Its design harmoniously fits into the rolling landscape of the region, testifying to the architectural continuity of the 20th century.",
    },
    facts: {
      de: ["Im 20. Jahrhundert wiederaufgebaut.", "Zentrum des religiösen Lebens in Fiorentino.", "Schlichte, elegante Fassade."],
      hu: ["A 20. században építették újjá.", "Fiorentino vallási életének központja.", "Egyszerű, elegáns homlokzat."],
      ro: ["Reconstruită în secolul XX.", "Centrul vieţii religioase din Fiorentino.", "Faţadă simplă şi elegantă."],
      en: ["Rebuilt in the 20th century.", "Center of religious life in Fiorentino.", "Simple, elegant facade."]
    },
    factsAdvanced: {
      de: ["Bauzeit von 1937 bis 1940", "Entwurf vom Architekten Gino Zani", "Gegenüber älteren Ruinen aus dem 5. Jh.", "Stilmischung aus Romanik und Gotik", "Fiorentino kam 1463 zu San Marino", "Gewidmet Johannes dem Täufer"],
      hu: ["1937 és 1940 között építették", "Gino Zani építész tervezte", "5. századi keresztény alapokra épült", "Román és gótikus stílusjegyek ötvözete", "Fiorentino 1463-ban lett a köztársaság része", "Keresztelő Szent Jánosnak szentelték"],
      ro: ["Construită între 1937 şi 1940", "Proiectată de arhitectul Gino Zani", "Ridicată pe fundaţii din secolul al V-lea", "Stil arhitectural romanic-gotic", "Fiorentino a fost anexat în 1463", "Dedicată Sfântului Ioan Botezătorul"],
      en: ["Built between 1937 and 1940", "Designed by architect Gino Zani", "Built over 5th-century ruins", "Combines Romanesque and Gothic styles", "Fiorentino joined San Marino in 1463", "Dedicated to St. John the Baptist"],
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
      de: "Der Monte Titano ist mit 739 Metern der höchste Gipfel der Republik San Marino und bildet das geologische Herzstück des Kleinstaates. Das Kalksteinmassiv gehört zum Apennin-Gebirge und wurde im Jahr 2008 zusammen mit dem historischen Stadtzentrum von San Marino in die Liste des UNESCO-Weltkulturerbes aufgenommen. Markant sind die drei Festungstürme Guaita, Cesta und Montale, die auf den drei Gipfeln des Berges thronen und seit dem 11. Jahrhundert die Verteidigungsfähigkeit der ältesten Republik der Welt symbolisieren. Die geologische Formation besteht hauptsächlich aus Kalkarenit, einem Sedimentgestein, das reich an marinen Fossilien aus dem Miozän ist. Von den Kammwegen aus bietet sich ein weiter Panoramablick über die italienische Region Emilia-Romagna bis hin zur Adriaküste. Der Berg ist nicht nur ein Symbol der Freiheit, sondern auch ein wichtiges ökologisches Refugium für seltene Pflanzenarten und Greifvögel.",
      hu: "A Monte Titano San Marino legmagasabb pontja, egy 739 méter magas mészkőtömb, amely az ország jelképévé vált. Az Appenninek részét képező hegygerincen helyezkedik el a főváros történelmi központja, amelyet 2008-ban az UNESCO a Világörökség részévé nyilvánított. A hegy három jellegzetes csúcsán magasodnak a köztársaság védelmi bástyái: a Guaita, a Cesta és a Montale tornyok, melyek közül a legkorábbi a 11. századból származik. Geológiailag a hegy főleg miocén kori meszes homokkőből épül fel, amelyben számos tengeri fosszília maradványa fedezhető fel. A sziklafalak meredeken szakadnak le a környező völgyek felé, lenyűgöző kilátást nyújtva az Adriai-tengerre és az olaszországi Romagna vidékére. A hegy nemcsak stratégiai és történelmi jelentőséggel bír, hanem változatos flórája és faunája miatt természetvédelmi szempontból is kiemelkedő jelentőségű terület.",
      ro: "Muntele Titano este cel mai înalt punct din Republica San Marino, având o altitudine de 739 de metri deasupra nivelului mării. Acest masiv calcaros face parte din Munții Apenini și reprezintă nucleul istoric al statului, fiind inclus în Patrimoniul Mondial UNESCO în anul 2008. Pe cele trei creste ale sale sunt amplasate cele trei turnuri celebre – Guaita, Cesta și Montale – care au servit drept puncte de observație și apărare începând cu secolul al XI-lea. Geologia muntelui este fascinantă, fiind compus în principal din calcarenit de San Marino, o rocă sedimentară formată în perioada miocenului care conține numeroase fosile marine. Versanții abrupți oferă o panoramă spectaculoasă asupra regiunii italiene Emilia-Romagna și a coastei Mării Adriatice. Dincolo de importanța sa politică și istorică, muntele este un habitat natural protejat, adăpostind specii endemice de plante și diverse păsări de pradă care cuibăresc pe stâncile sale.",
      en: "Mount Titano is the highest peak in San Marino, reaching an elevation of 739 meters and serving as the republic's primary geographical landmark. This limestone massif is part of the Apennine Mountains and was inscribed on the UNESCO World Heritage list in 2008, together with San Marino's historic center. The mountain is famously crowned by three towers—Guaita, Cesta, and Montale—which represent the strategic fortifications built between the 11th and 14th centuries to protect the world's oldest republic. Geologically, the formation consists of San Marino calcarenite, a sedimentary rock rich in Miocene marine fossils. Its vertical cliffs offer commanding views of the Italian Romagna region and the Adriatic coast. Mount Titano is not only a symbol of national identity and sovereignty but also a crucial ecological site, hosting various bird species and Mediterranean flora within its rugged terrain.",
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
      de: ["Höchster Punkt San Marinos mit 739 m Höhe", "UNESCO-Weltkulturerbe seit dem Jahr 2008", "Drei Festungstürme aus dem 11. bis 14. Jahrhundert", "Geologische Formation aus miozänem Kalkarenit", "Heimat des Wanderfalken (Falco peregrinus)", "Panoramablick bis zur kroatischen Küste möglich"],
      hu: ["San Marino legmagasabb pontja, 739 méter", "2008 óta az UNESCO Világörökség része", "Három torony: Guaita, Cesta és Montale", "Miocén kori tengeri fosszíliákban gazdag kőzet", "A vándorsólyom fészkelőhelye a sziklákon", "Tiszta időben az Adriai-tenger túlsó partja is látható"],
      ro: ["Punctul culminant al statului San Marino la 739 m", "Inclus în lista UNESCO în anul 2008", "Găzduiește trei turnuri fortificate medievale", "Format din rocă sedimentară numită calcarenit", "Habitat important pentru șoimul călător", "Oferă vizibilitate până la coasta dalmată în zile senine"],
      en: ["Highest peak in San Marino at 739 meters", "Inscribed as a UNESCO World Heritage site in 2008", "Features three iconic medieval defense towers", "Composed of limestone dating back to the Miocene", "Nesting site for the Peregrine Falcon", "Views extend to the Adriatic Sea and Mount Carpegna"],
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
      de: "Der Parco Ausa ist die größte Grünanlage in der Republik San Marino und befindet sich im Castello von Serravalle, nahe dem Ortsteil Dogana. Der Park erstreckt sich entlang des gleichnamigen Wasserlaufs Ausa, der eine wichtige Rolle im lokalen Entwässerungssystem spielt. Die Gestaltung des Parks kombiniert naturbelassene Zonen mit gepflegten Freizeitflächen, die für die Anwohner und Besucher von hoher Erholungsqualität sind. Historisch gesehen war das Gebiet einst Sumpfland, das im 20. Jahrhundert systematisch trockengelegt und in einen Volkspark umgewandelt wurde. Heute beherbergt das Areal zahlreiche Baumarten, darunter Platanen und Weiden, sowie Sportanlagen und Spielplätze. Die Nähe zur italienischen Grenze macht den Park zu einem wichtigen ökologischen Korridor zwischen dem Binnenstaat und der Adriaküste. Er dient als Austragungsort für lokale Feste und sportliche Wettkämpfe, was seine soziale Bedeutung unterstreicht.",
      hu: "A Parco Ausa San Marino legnagyobb kiterjedésű közparkja, amely Serravalle önkormányzatában, Dogana közelében található. A park az azonos nevű Ausa-patak mentén húzódik, amely a köztársaság egyik legfontosabb vízfolyása. A terület rehabilitációja során a korábbi mocsaras részeket lecsapolták, és egy modern, rekreációs célokat szolgáló zöldövezetet hoztak létre a 20. század második felében. A park gazdag növényvilággal rendelkezik, ahol platánfák, füzek és fenyőfélék alkotnak árnyas ligeteket a sétányok mentén. Számos sportpálya, játszótér és kerékpárút várja a látogatókat, így a helyi közösség egyik legnépszerűbb találkozóhelye. Az olasz határ közelsége miatt a park fontos szerepet tölt be a két ország közötti ökológiai kapcsolat fenntartásában is. A Parco Ausa gyakran ad otthont kulturális eseményeknek, koncerteknek és sportrendezvényeknek, különösen a nyári időszakban.",
      ro: "Parcul Ausa este cel mai mare spațiu verde public din Republica San Marino, situat în castello Serravalle, în apropierea localității Dogana. Parcul se întinde de-a lungul cursului pârâului Ausa, fiind rezultatul unui amplu proiect de regenerare urbană desfășurat în a doua jumătate a secolului al XX-lea. Anterior, zona era un teren mlăștinos, însă astăzi a fost transformată într-o oază de relaxare cu alei pietonale, piste pentru biciclete și zone de agrement. Vegetația parcului este diversă, incluzând numeroase specii de arbori ornamentali precum platani, sălcii și pini care oferă umbră și răcoare. Parcul dispune de numeroase facilități sportive și locuri de joacă pentru copii, fiind principalul loc de întâlnire pentru locuitorii din cea mai populată zonă a țării. Datorită poziției sale strategice lângă granița cu Italia, parcul facilitează tranzitul ecologic și reprezintă un plămân verde esențial pentru conurbația transfrontalieră.",
      en: "Ausa Park is the largest urban park in the Republic of San Marino, located in the municipality of Serravalle near the border town of Dogana. The park stretches along the banks of the Ausa stream, which serves as a vital natural watercourse in the northern part of the country. Historically, this area was characterized by marshy terrain before being reclaimed and developed into a public recreational space during the mid-20th century. Today, the park features a variety of tree species, including sycamores, willows, and pines, interspersed with jogging tracks and sports facilities. It serves as a crucial green lung for the densely populated Serravalle region, providing space for outdoor activities and community events. Its proximity to the Italian border makes it a significant ecological corridor. Ausa Park is frequently used for local festivals and sporting competitions, making it a hub of social and recreational life in San Marino.",
    },
    facts: {
      de: ["Der Park bietet viele Sport- und Freizeiteinrichtungen."],
      hu: ["A park számos sport- és szabadidős létesítményt kínál."],
      ro: ["Parcul oferă multe facilităţi sportive şi de agrement."],
      en: ["The park offers many sports and recreational facilities."]
    },
    factsAdvanced: {
      de: ["Größter öffentlicher Park der Republik San Marino", "Liegt im Castello von Serravalle nahe Dogana", "Benannt nach dem Bach Ausa, der dort fließt", "Ehemaliges Sumpfgebiet, im 20. Jh. rekultiviert", "Besitzt ein ausgedehntes Netz an Radwegen", "Veranstaltungsort für das jährliche 'Festa dell'Amicizia'"],
      hu: ["San Marino legnagyobb kiterjedésű közparkja", "Serravalle önkormányzatában található", "Az Ausa-patak mentén helyezkedik el", "A 20. században csapolták le a mocsarakat", "Számos ingyenes sportpálya és játszótér üzemel itt", "Fontos ökológiai folyosó az olasz határnál"],
      ro: ["Cea mai mare zonă verde din San Marino", "Amplasat în districtul Serravalle, lângă Dogana", "Urmează cursul pârâului cu același nume", "Zonă recuperată dintr-o veche mlaștină", "Include facilități pentru fitness în aer liber", "Gazda principală a evenimentelor sociale locale"],
      en: ["Largest public park in the Republic of San Marino", "Located in the Serravalle castle district", "Centered around the historic Ausa stream", "Reclaimed from marshland in the mid-1900s", "Features extensive pedestrian and bicycle paths", "Hosts various national celebrations and concerts"],
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
      de: "Der Sentiero della Rupe ist einer der spektakulärsten Wanderwege in San Marino und führt entlang der steilen Klippen des Monte Titano. Der Pfad verbindet den Ort Borgo Maggiore mit dem historischen Zentrum von San Marino Stadt und bietet dabei einzigartige Einblicke in die geologischen Schichten des Berges. Der Weg verläuft teilweise durch dichte Steineichenwälder und führt an historischen Verteidigungsanlagen und alten Höhlen vorbei, die einst als Schutzräume dienten. Auf einer Länge von etwa 4 Kilometern erleben Wanderer den Kontrast zwischen der unberührten Natur der Felswände und der mittelalterlichen Architektur der darüber liegenden Türme. Geologisch gesehen bietet der Pfad die beste Möglichkeit, den Kalkarenit von San Marino aus nächster Nähe zu betrachten, der reich an Fossilien ist. Der Weg wurde in den letzten Jahren umfassend gesichert und markiert, um Touristen den Zugang zur natürlichen Schönheit des UNESCO-Welterbes zu ermöglichen.",
      hu: "A Sentiero della Rupe San Marino egyik leglátványosabb túraútvonala, amely a Monte Titano meredek sziklafalai mentén húzódik. Az ösvény összeköti Borgo Maggiore települését San Marino történelmi belvárosával, miközben lenyűgöző rálátást biztosít a hegy geológiai szerkezetére. Az út sűrű magyaltölgy erdőkön keresztül vezet, elhaladva régi védelmi falak és természetes barlangok mellett, amelyek a történelem során többször szolgáltak óvóhelyként. A nagyjából 4 kilométer hosszú szakasz bemutatja a hegy északi oldalának vadságát, éles kontrasztban állva a hegytetőn lévő elegáns tornyokkal. A túrázók itt testközelből figyelhetik meg a vidékre jellemző meszes homokkő rétegeket, amelyek gazdagok miocén kori tengeri maradványokban. Az ösvényt az elmúlt években modernizálták és biztonságossá tették, így ma már az UNESCO Világörökség részét képező terület egyik legfontosabb ökoturisztikai attrakciója.",
      ro: "Sentiero della Rupe este unul dintre cele mai spectaculoase trasee de drumeție din San Marino, șerpuind de-a lungul stâncilor abrupte ale Muntelui Titano. Poteca face legătura între localitatea Borgo Maggiore și centrul istoric al orașului San Marino, oferind perspective unice asupra straturilor geologice ale masivului. Traseul traversează păduri dese de stejar și trece pe lângă vechi ziduri de apărare și peșteri naturale care au servit drept adăpost de-a lungul secolelor. Cu o lungime de aproximativ 4 kilometri, acest drum evidențiază contrastul dintre natura sălbatică a pereților stâncoși și arhitectura medievală a turnurilor situate pe culme. Din punct de vedere geologic, traseul permite observarea directă a calcarenitului de San Marino, o rocă bogată în fosile marine. Recent, poteca a fost reamenajată cu parapete de siguranță și panouri informative, devenind o destinație esențială pentru turiștii interesați de ecoturism și istoria naturală a micului stat.",
      en: "The Sentiero della Rupe is one of the most scenic hiking trails in San Marino, tracing the rugged cliffs of Mount Titano. This path connects the lower town of Borgo Maggiore with the historic capital city, offering unparalleled views of the mountain's geological formations. The trail meanders through dense holm oak forests and passes by ancient defensive walls and natural caves that have historically provided shelter. Spanning approximately 4 kilometers, it showcases the wild northern face of the mountain, contrasting with the manicured medieval towers above. Geologically, the trail provides an up-close look at the fossil-rich calcarenite of San Marino, dating back to the Miocene epoch. In recent years, the path has been significantly upgraded with safety barriers and informational signs, establishing it as a premier destination for hikers exploring the natural beauty of this UNESCO World Heritage site.",
    },
    facts: {
      de: ["Der Weg führt durch dichte Wälder und bietet steile Felswände."],
      hu: ["Az út sűrű erdőkön halad keresztül és meredek sziklafalakat kínál."],
      ro: ["Traseul trece prin păduri dese și oferă pereți abrupți de stâncă."],
      en: ["The trail passes through dense forests and features steep cliff faces."]
    },
    factsAdvanced: {
      de: ["Länge von ca. 4 Kilometern als Rundweg", "Verbindet Borgo Maggiore mit der Stadt San Marino", "Führt durch seltene Steineichenwälder (Quercus ilex)", "Passiert historische Höhlen und Felsspalten", "Bietet Blick auf den Bergkamm des Apennin", "Teil des UNESCO-Welterbegebiets Monte Titano"],
      hu: ["Körülbelül 4 kilométer hosszú körút", "Borgo Maggiore és a főváros között halad", "Ritka magyaltölgy erdőkön vezet keresztül", "Történelmi barlangok és sziklák mentén halad", "Kiváló kilátás nyílik az Appenninek vonulataira", "Az UNESCO Világörökség védett övezetéhez tartozik"],
      ro: ["Lungime de aproximativ 4 kilometri", "Leagă Borgo Maggiore de orașul San Marino", "Traversează păduri de stejar mediteranean", "Include pasaje pe lângă peșteri istorice", "Oferă vederi panoramice spre Munții Apenini", "Integrat în zona de protecție UNESCO"],
      en: ["Approximately 4 kilometers long loop trail", "Connects Borgo Maggiore with San Marino City", "Passes through rare holm oak forests", "Features ancient rock shelters and crevices", "Offers views of the Apennine mountain range", "Located within the UNESCO World Heritage buffer zone"],
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
      de: "Der Lago di Faetano ist ein künstlich angelegter See in der Gemeinde Faetano im Osten der Republik San Marino. Er wurde im Jahr 1968 geschaffen, um den Bürgern Raum für Freizeitaktivitäten und Sportfischerei zu bieten. Der See wird durch das Wasser des Marano-Baches gespeist, der die Grenze zwischen San Marino und Italien markiert. Mit einer Fläche von etwa 0,6 Hektar ist er das größte stehende Gewässer des Kleinstaates und ein wichtiges lokales Ökosystem für Amphibien und Wasservögel. Die Umgebung des Sees ist mit Weiden und Pappeln bepflanzt, die in den Sommermonaten Schatten spenden. In den Gewässern leben verschiedene Fischarten wie Forellen, Karpfen und Barsche, was den See zu einem beliebten Ziel für Angler aus der gesamten Region macht. Der Ort dient auch als Erholungsgebiet mit Picknickplätzen und Wanderwegen, die in die sanfte Hügellandschaft des Castello von Faetano führen.",
      hu: "A Lago di Faetano egy mesterségesen létrehozott tó San Marino keleti részén, Faetano önkormányzatában. A tavat 1968-ban alakították ki azzal a céllal, hogy a lakosság számára rekreációs területet és sporthorgászati lehetőséget biztosítsanak. Vízutánpótlását a Marano-patak szolgáltatja, amely egyben San Marino és Olaszország természetes határvonalát is jelenti. Közel 0,6 hektáros vízfelületével ez az apró állam legnagyobb állóvize, amely fontos élőhelyet biztosít kétéltűeknek és vízimadaraknak. A tó partját fűzfák és nyárfák szegélyezik, kellemes környezetet biztosítva a pihenésre vágyóknak. A vízben rendszeresen telepítenek pisztrángot, pontyot és sügért, így a helyi horgászegyesületek központjaként is funkcionál. A környék népszerű kirándulóhely, ahol piknikezőhelyek és jól jelzett gyalogutak várják a látogatókat Faetano dombos vidékén.",
      ro: "Lacul Faetano este un lac artificial situat în estul Republicii San Marino, în districtul (castello) cu același nume. A fost creat în anul 1968 pentru a oferi locuitorilor o zonă de agrement și un spațiu dedicat pescuitului sportiv. Lacul este alimentat de apele pârâului Marano, care marchează granița naturală dintre San Marino și Italia. Cu o suprafață de aproximativ 0,6 hectare, acesta reprezintă cea mai mare întindere de apă stătătoare din țară și un micro-ecosistem vital pentru amfibieni și păsări de apă. Malurile sunt umbrite de sălcii și plopi, creând un cadru natural relaxant. În apele lacului pot fi găsite specii de pești precum păstrăvul, crapul și bibanul, fiind o destinație preferată pentru pescarii locali. Zona este dotată cu spații pentru picnic și trasee care fac legătura cu dealurile din jur, facilitând explorarea peisajului rural sanmarinez.",
      en: "Lake Faetano is an artificial lake located in the eastern municipality of Faetano in the Republic of San Marino. Established in 1968, the lake was designed to provide a recreational area and a dedicated site for sport fishing. It is fed by the Marano stream, which forms part of the natural border between San Marino and Italy. Covering an area of about 0.6 hectares, it is the largest body of standing water in the microstate and serves as a vital local ecosystem for amphibians and aquatic birds. The lakeside is lined with willows and poplars, offering shade for visitors during the summer months. The waters are stocked with fish species such as trout, carp, and perch, making it a popular spot for local angling clubs. The surrounding area features picnic facilities and hiking trails that lead into the scenic rolling hills of the Faetano district.",
    },
    facts: {
      de: ["Ruhiger Ort für Picknicks.", "Regelmäßige Angelwettbewerbe.", "Kleine Oase der Ruhe."],
      hu: ["Nyugodt hely piknikezéshez.", "Rendszeres horgászversenyek.", "A nyugalom kis oázisa."],
      ro: ["Loc liniştit pentru picnicuri.", "Competiţii regulate de pescuit.", "Mică oază de linişte."],
      en: ["Quiet spot for picnics.", "Regular fishing competitions.", "Small oasis of peace."]
    },
    factsAdvanced: {
      de: ["Künstlich angelegter See, Baujahr 1968", "Größtes stehendes Gewässer in San Marino", "Gespeist durch den Bach Marano", "Zentrum für lokale Sportfischerei (Forellen, Karpfen)", "Fläche von etwa 6.000 Quadratmetern", "Befindet sich im östlichen Castello von Faetano"],
      hu: ["1968-ban létrehozott mesterséges tó", "San Marino legnagyobb állóvize", "A Marano-patak táplálja vízzel", "A helyi sporthorgászat központja", "Felszíne körülbelül 0,6 hektár (6000 m2)", "Faetano önkormányzatának területén fekszik"],
      ro: ["Lac artificial creat în anul 1968", "Cea mai mare acumulare de apă din San Marino", "Alimentat de pârâul de frontieră Marano", "Locație principală pentru pescuitul sportiv", "Suprafață totală de aproximativ 0,6 hectare", "Situat în districtul estic Faetano"],
      en: ["Artificial lake established in 1968", "Largest standing water body in San Marino", "Fed by the Marano stream border watercourse", "Hub for local sport fishing (trout and carp)", "Surface area of approximately 0.6 hectares", "Located within the Faetano castle district"],
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
      de: "Die Pineta di Chiesanuova ist ein ausgedehntes Waldgebiet im Südwesten der Republik San Marino, das vor allem für seine dichten Bestände an Schwarzkiefern bekannt ist. Der Wald erstreckt sich auf den Hügeln rund um das Castello von Chiesanuova und liegt in einer Höhe von über 500 Metern über dem Meeresspiegel. Die Aufforstung wurde Mitte des 20. Jahrhunderts durchgeführt, um die Bodenerosion zu verhindern und ein lokales Mikroklima zu schaffen. Heute dient die Pineta als wichtiges Erholungsgebiet mit zahlreichen Wanderwegen, die durch die kühle und schattige Umgebung führen. Der Wald beherbergt eine Vielzahl von Singvögeln und Kleinsäugern wie Eichhörnchen und Igel. Die Nähe zum Monte Cucco macht das Gebiet zu einem idealen Ausgangspunkt für anspruchsvollere Touren in das Hinterland von San Marino. Aufgrund der Höhenlage bietet der Wald auch an heißen Sommertagen eine angenehme Frische und ist ein beliebtes Ziel für Naturfreunde.",
      hu: "A Pineta di Chiesanuova San Marino délnyugati részén elhelyezkedő kiterjedt fenyőerdő, amely főként sűrű feketefenyő állományairól ismert. Az erdő Chiesanuova önkormányzatának dombjain terül el, több mint 500 méteres tengerszint feletti magasságban. A területet a 20. század közepén fásították be szisztematikusan a talajerózió megakadályozása és a helyi mikroklíma javítása érdekében. Napjainkban a fenyves fontos rekreációs övezet, ahol számos gondozott gyalogút vezet keresztül a hűvös, árnyas környezeten. Az erdő gazdag énekesmadarakban és kisebb emlősökben, például mókusokban és sünökben. A Monte Cucco közelsége miatt a terület ideális kiindulópont a San Marino belső vidékeit felfedező túrákhoz. Magas fekvésének köszönhetően a fenyves a legforróbb nyári napokon is felfrissülést nyújt, ezért a természetjárók és a sportolni vágyók körében igen népszerű úti cél.",
      ro: "Pineta di Chiesanuova este o zonă forestieră extinsă situată în sud-vestul Republicii San Marino, renumită pentru densitatea pinilor negri care o compun. Pădurea se întinde pe dealurile din jurul districtului Chiesanuova, la o altitudine de peste 500 de metri peste nivelul mării. Proiectul de reîmpădurire a fost demarat la mijlocul secolului al XX-lea pentru a combate eroziunea solului și pentru a îmbunătăți microclimatul local. Astăzi, Pineta servește drept o zonă importantă de agrement, având numeroase poteci marcate care traversează mediul răcoros și umbrit. Pădurea adăpostește o varietate de păsări cântătoare și mamifere mici, precum veverițele și aricii. Proximitatea față de muntele Cucco face din această zonă un punct de plecare ideal pentru drumeții mai lungi în regiunile rurale ale țării. Datorită altitudinii sale, pădurea oferă o temperatură plăcută chiar și în zilele caniculare de vară, fiind o destinație preferată de iubitorii de natură.",
      en: "The Chiesanuova Pine Forest (Pineta di Chiesanuova) is a vast woodland area in the southwestern part of San Marino, primarily known for its dense stands of Austrian pines. The forest blankets the hills surrounding the Chiesanuova district, situated at an altitude exceeding 500 meters above sea level. This forested area was established through systematic reforestation efforts in the mid-20th century to prevent soil erosion and improve the local microclimate. Today, it serves as a premier recreational site, featuring numerous well-maintained trails that lead through the cool, shaded environment. The forest is home to various songbirds and small mammals, such as squirrels and hedgehogs. Its location near Mount Cucco makes it an ideal starting point for more extensive treks into San Marino's rural interior. Due to its elevation, the forest remains pleasantly cool during the hot summer months, making it a popular destination for nature enthusiasts and hikers.",
    },
    facts: {
      de: ["Heimat vieler lokaler Vogelarten.", "Bietet kühle Schatten im Sommer.", "Gut markierte Wanderwege."],
      hu: ["Számos helyi madárfaj otthona.", "Hűvös árnyékot nyújt nyáron.", "Jól jelzett túraútvonalak."],
      ro: ["Adăposteşte multe specii locale de păsări.", "Oferă umbră răcoroasă vara.", "Trasee de drumeţie bine marcate."],
      en: ["Home to many local bird species.", "Offers cool shade in summer.", "Well-marked hiking trails."]
    },
    factsAdvanced: {
      de: ["Dichter Schwarzkiefernbestand (Pinus nigra)", "Liegt in einer Höhe von über 500 Metern", "Gepflanzt in den 1950er Jahren zur Erosionskontrolle", "Beherbergt Fitnesspfade und Erholungszonen", "Angrenzend an das italienische Grenzgebiet", "Wichtiges Habitat für Spechte und Singvögel"],
      hu: ["Sűrű feketefenyő állomány jellemzi", "Több mint 500 méterrel a tengerszint felett fekszik", "Az 1950-es években ültették erózióvédelem céljából", "Karbantartott erdei tornapályák találhatók itt", "Közvetlenül határos az olasz területekkel", "Harkályok és énekesmadarak fontos élőhelye"],
      ro: ["Pădure densă compusă din pini negri", "Situată la o altitudine de peste 500 m", "Plantată în anii '50 pentru prevenirea eroziunii", "Dispune de trasee pentru fitness în aer liber", "Se învecinează direct cu teritoriul italian", "Habitat esențial pentru ciocănitori și păsări mici"],
      en: ["Densely populated by Austrian pines (Pinus nigra)", "Located at an altitude above 500 meters", "Reforested in the 1950s for erosion control", "Features outdoor fitness trails and rest areas", "Borders the Italian territory of the Marche region", "Significant habitat for woodpeckers and songbirds"],
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
      de: "Die Rupe di Baldasserona ist eine markante Felswand unterhalb des Ortes Borgo Maggiore in San Marino. Dieser etwa 200 Meter hohe Abgrund ist eng mit der Gründungslegende der Republik verbunden, da sich hier eine Höhle befinden soll, in der der heilige Marinus im Jahr 301 n. Chr. Zuflucht suchte. Geologisch gesehen besteht die Klippe aus dem charakteristischen Kalkarenit des Monte Titano, der durch Verwitterung bizarre Formationen und zahlreiche kleine Kavernen gebildet hat. Der Bereich ist heute als archäologische und religiöse Stätte von großer Bedeutung, da in den Felsspalten Spuren antiker Siedlungen gefunden wurden. Wanderwege führen unterhalb der Wand entlang und bieten eine beeindruckende Perspektive auf die vertikalen Felsmassen, die die Oberstadt von der Unterstadt trennen. Die Rupe ist auch ein wichtiger ökologischer Standort für seltene Felsenpflanzen und dient als Nistplatz für Greifvögel. Die Kombination aus mythologischer Bedeutung und geologischer Dramatik macht sie zu einem einzigartigen Punkt in der san-marinesischen Landschaft.",
      hu: "A Rupe di Baldasserona egy monumentális sziklafal, amely Borgo Maggiore települése alatt található San Marinóban. Ez a mintegy 200 méter magas szakadék szorosan összefonódik a köztársaság alapításának legendájával, ugyanis a hagyomány szerint itt található az a barlang, ahol Szent Marinus 301-ben menedéket lelt. Geológiai szempontból a szikla a Monte Titano jellegzetes meszes homokkőzetéből épül fel, amely az erózió hatására bizarr formákat és számos kisebb üreget öltött. A terület ma kiemelkedő régészeti és vallási helyszín, mivel a sziklahasadékokban ókori települések nyomait is felfedezték. A sziklafal tövében vezető ösvények lenyűgöző kilátást nyújtanak a függőleges kőtömegekre, amelyek természetes választóvonalat képeznek az alsó és felső városrészek között. A Rupe különleges sziklalakó növények élőhelye és ragadozó madarak kedvelt fészkelőhelye. A mitológiai háttér és a drámai geológiai látvány San Marino egyik legkülönlegesebb pontjává teszi.",
      ro: "Rupe di Baldasserona este o faleză stâncoasă impunătoare situată sub localitatea Borgo Maggiore în San Marino. Acest perete abrupt, cu o înălțime de aproximativ 200 de metri, este strâns legat de legenda fondării republicii, deoarece tradiția indică aici existența peșterii unde Sfântul Marinus s-a refugiat în anul 301 d.Hr. Din punct de vedere geologic, stânca este formată din calcarenitul caracteristic Muntelui Titano, prezentând formațiuni bizare și numeroase mici cavități rezultate în urma eroziunii. Zona are o mare importanță arheologică și religioasă, în crăpăturile stâncii fiind descoperite urme ale unor așezări antice. Traseele de drumeție care trec pe la baza falezei oferă o perspectivă impresionantă asupra maselor verticale de piatră care separă orașul de jos de cel de sus. Rupe este, de asemenea, un sit ecologic important pentru plante rupicole rare și servește drept loc de cuibărit pentru păsările de pradă. Mixul de semnificație mitologică și dramatism geologic o transformă într-un reper unic în peisajul sanmarinez.",
      en: "The Baldasserona Cliff (Rupe di Baldasserona) is a striking vertical rock face located beneath the town of Borgo Maggiore in San Marino. This precipice, standing approximately 200 meters high, is deeply entwined with the republic's founding legend, as it is said to contain the cave where Saint Marinus sought refuge in 301 AD. Geologically, the cliff is composed of the characteristic San Marino calcarenite, which has been sculpted by weathering into bizarre shapes and numerous small caverns. The area holds significant archaeological and religious value, with traces of ancient settlements found within its rocky crevices. Hiking paths running along the base of the cliff offer an imposing perspective on the massive stone walls that divide the lower and upper sectors of the state. The cliff is also a vital ecological site for rare rock-dwelling plants and serves as a nesting ground for birds of prey. Its combination of mythological heritage and geological drama makes it a unique feature of the San Marinese landscape.",
    },
    facts: {
      de: ["Religiöser Wallfahrtsort.", "Beeindruckende geologische Formation.", "Bietet Blick auf das Marecchia-Tal."],
      hu: ["Vallási zarándokhely.", "Lenyűgöző geológiai képződmény.", "Kilátást nyújt a Marecchia-völgyre."],
      ro: ["Loc de pelerinaj religios.", "Formaţiune geologică impresionantă.", "Oferă vedere spre Valea Marecchia."],
      en: ["Religious pilgrimage site.", "Impressive geological formation.", "Offers views of the Marecchia Valley."]
    },
    factsAdvanced: {
      de: ["Felswand mit ca. 200 Metern Höhe", "Legendärer Zufluchtsort des Heiligen Marinus (301 n. Chr.)", "Geologische Formation aus San-Marino-Kalkarenit", "Archäologische Fundstätte antiker Siedlungsspuren", "Befindet sich direkt unterhalb von Borgo Maggiore", "Nistplatz für Turmfalken und andere Raubvögel"],
      hu: ["Körülbelül 200 méter magas sziklafal", "Szent Marinus legendás menedékhelye (i.sz. 301)", "San Marino-i meszes homokkőből épül fel", "Ókori települések nyomait őrző régészeti helyszín", "Közvetlenül Borgo Maggiore alatt fekszik", "Vörös vércsék és más ragadozók fészkelőhelye"],
      ro: ["Perete stâncos de aproximativ 200 de metri", "Refugiul legendar al Sfântului Marinus (anul 301)", "Compusă din calcarenit specific Muntelui Titano", "Sit arheologic cu vestigii ale unor locuințe antice", "Situată imediat sub Borgo Maggiore", "Loc de cuibărit pentru vânturei și șoimi"],
      en: ["Rock cliff approximately 200 meters high", "Legendary refuge of Saint Marinus in 301 AD", "Formed from the unique San Marino calcarenite", "Archaeological site with traces of ancient dwellings", "Positioned directly below Borgo Maggiore", "Nesting site for kestrels and other birds of prey"],
    },
    image: "/poi-images/nat-rupe-baldasserona.webp",
  }
];

export const sanmarinoAllPoi: POI[] = [sanmarinoCountry,
  ...sanmarinoRegions,
  ...sanmarinoCities,
  ...sanmarinoCulture,
  ...sanmarinoNature, ...poiExtraSanmarinoCities, ...sanmarinoExtraHistory, ...sanmarinoLandscapes];

