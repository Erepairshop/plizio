import type { POI } from "./poi";

export const irelandCountry: POI = {
  id: "ireland",
  type: "country",
  parent: "EU",
  coords: [-7.5023, 53.4129],
  name: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" },
  description: {
    en: "Ireland, also known as the Emerald Isle, is an island in the North Atlantic known for its lush green landscapes, rich folklore, and friendly people. It has a long and complex history, from ancient Celtic roots to its modern status as a vibrant European nation. The country is famous for its stunning coastal scenery, historic castles, and vibrant cultural traditions, including music, dance, and literature. Ireland's capital, Dublin, is a bustling city with a rich literary heritage and a lively social scene.",
    de: "Irland, auch bekannt als die Grüne Insel, ist eine Insel im Nordatlantik, die für ihre üppigen grünen Landschaften, ihre reiche Folklore und ihre freundlichen Menschen bekannt ist. Es hat eine lange und komplexe Geschichte, von den antiken keltischen Wurzeln bis zu seinem heutigen Status als pulsierende europäische Nation. Das Land ist berühmt für seine atemberaubende Küstenlandschaft, seine historischen Schlösser und seine lebendigen kulturellen Traditionen, einschließlich Musik, Tanz und Literatur. Irlands Hauptstadt Dublin ist eine geschäftige Stadt mit einem reichen literarischen Erbe und einer lebendigen sozialen Szene.",
    hu: "Írország, más néven a Smaragd-sziget, egy sziget az Atlanti-óceán északi részén, amely buja zöld tájairól, gazdag folklórjáról és barátságos embereiről ismert. Hosszú és összetett történelemmel rendelkezik, az ősi kelta gyökerektől a modern, vibráló európai nemzetig. Az ország híres lenyűgöző tengerparti tájairól, történelmi kastélyairól és élénk kulturális hagyományairól, beleértve a zenét, a táncot és az irodalmat. Írország fővárosa, Dublin, egy nyüzsgő város gazdag irodalmi örökséggel és élénk társasági élettel.",
    ro: "Irlanda, cunoscută și sub numele de Insula de Smarald, este o insulă din Atlanticul de Nord, cunoscută pentru peisajele sale verzi luxuriante, folclorul bogat și oamenii prietenoși. Are o istorie lungă și complexă, de la rădăcinile celtice antice până la statutul său modern de națiune europeană vibrantă. Țara este faimoasă pentru peisajele sale de coastă uimitoare, castelele istorice și tradițiile culturale vibrante, inclusiv muzica, dansul și literatura. Capitala Irlandei, Dublin, este un oraș plin de viață, cu o bogată moștenire literară și o scenă socială vibrantă."
  },
  facts: {
    en: [
      "Ireland is known as the 'Emerald Isle' because of its lush green landscape.",
      "St. Patrick is the patron saint of Ireland, celebrated annually on March 17th.",
      "The harp is the national symbol of Ireland.",
      "Ireland has won the Eurovision Song Contest a record seven times.",
      "Halloween has its origins in the ancient Celtic festival of Samhain celebrated in Ireland.",
      "The longest place name in Ireland is Muckanaghederdauhaulia."
    ],
    de: [
      "Irland ist wegen seiner üppigen grünen Landschaft als 'Grüne Insel' bekannt.",
      "St. Patrick ist der Schutzpatron Irlands und wird jährlich am 17. März gefeiert.",
      "Die Harfe ist das Nationalsymbol Irlands.",
      "Irland hat den Eurovision Song Contest rekordverdächtige sieben Mal gewonnen.",
      "Halloween hat seinen Ursprung im antiken keltischen Samhain-Fest, das in Irland gefeiert wurde.",
      "Der längste Ortsname in Irland ist Muckanaghederdauhaulia."
    ],
    hu: [
      "Írországot buja zöld tájai miatt 'Smaragd-szigetnek' is nevezik.",
      "Szent Patrik Írország védőszentje, akit minden évben március 17-én ünnepelnek.",
      "A hárfa Írország nemzeti jelképe.",
      "Írország rekordnak számító hét alkalommal nyerte meg az Eurovíziós Dalfesztivált.",
      "A Halloween az ősi kelta Samhain fesztiválból ered, amelyet Írországban ünnepeltek.",
      "Írország leghosszabb helyneve Muckanaghederdauhaulia."
    ],
    ro: [
      "Irlanda este cunoscută sub numele de 'Insula de Smarald' datorită peisajului său verde luxuriant.",
      "Sfântul Patrick este patronul Irlandei, sărbătorit anual pe 17 martie.",
      "Harpa este simbolul național al Irlandei.",
      "Irlanda a câștigat Eurovision Song Contest de șapte ori, un record.",
      "Halloween-ul își are originile în vechiul festival celtic Samhain, sărbătorit în Irlanda.",
      "Cel mai lung nume de loc din Irlanda este Muckanaghederdauhaulia."
    ]
  },
  image: "/geo-images/ireland/ireland-main.webp",
};

export const irelandRegions: POI[] = [
  {
    id: "city-dublin",
    type: "city",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "Dublin", hu: "Dublin", ro: "Dublin", en: "Dublin" },
    description: {
      en: "Dublin is the capital and largest city of Ireland, situated at the mouth of the River Liffey. It is a city steeped in history, from its Viking origins to its Georgian architecture. Dublin is world-renowned for its literary heritage, being the home of famous writers like James Joyce and Oscar Wilde. The city offers a mix of historic landmarks, vibrant pubs, and beautiful parks like St. Stephen's Green.",
      de: "Dublin ist die Hauptstadt und größte Stadt Irlands und liegt an der Mündung des Flusses Liffey. Es ist eine geschichtsträchtige Stadt, von ihren Wikinger-Ursprüngen bis zu ihrer georgianischen Architektur. Dublin ist weltberühmt für sein literarisches Erbe und die Heimat berühmter Schriftsteller wie James Joyce und Oscar Wilde. Die Stadt bietet eine Mischung aus historischen Wahrzeichen, lebhaften Pubs und wunderschönen Parks wie St. Stephen's Green.",
      hu: "Dublin Írország fővárosa és legnagyobb városa, a Liffey-folyó torkolatánál fekszik. Történelemben gazdag város, a viking eredettől a georgiánus építészetig. Dublin világhírű irodalmi örökségéről, olyan híres írók otthona, mint James Joyce és Oscar Wilde. A város történelmi nevezetességek, vibráló pubok és gyönyörű parkok, például a St. Stephen's Green keverékét kínálja.",
      ro: "Dublin este capitala și cel mai mare oraș al Irlandei, situat la gura de vărsare a râului Liffey. Este un oraș plin de istorie, de la originile sale vikinge până la arhitectura sa georgiană. Dublin este renumit în întreaga lume pentru moștenirea sa literară, fiind casa unor scriitori celebri precum James Joyce și Oscar Wilde. Orașul oferă un amestec de monumente istorice, pub-uri vibrante și parcuri frumoase, cum ar fi St. Stephen's Green."
    },
    facts: {
      en: ["Dublin was founded by Vikings in the 9th century.","Trinity College Dublin is home to the famous Book of Kells.","The city has more than 600 pubs.","Dublin is a UNESCO City of Literature."],
      de: ["Dublin wurde im 9. Jahrhundert von Wikingern gegründet.","Das Trinity College Dublin beherbergt das berühmte Book of Kells.","Die Stadt hat mehr als 600 Pubs.","Dublin ist eine UNESCO-Literaturstadt."],
      hu: ["Dublint a vikingek alapították a 9. században.","A dublini Trinity College ad otthont a híres Book of Kells-nek.","A városban több mint 600 pub található.","Dublin az UNESCO irodalmi városa."],
      ro: ["Dublin a fost fondat de vikingi în secolul al IX-lea.","Trinity College Dublin găzduiește faimoasa Book of Kells.","Orașul are peste 600 de pub-uri.","Dublin este un oraș al literaturii UNESCO."]
    },
    image: "/geo-images/ireland/dublin.webp",
  },
  {
    id: "city-cork",
    type: "city",
    parent: "ireland",
    coords: [-8.4756, 51.8985],
    name: { de: "Cork", hu: "Cork", ro: "Cork", en: "Cork" },
    description: {
      en: "Cork is Ireland's second-largest city, located in the southwest of the country. Known for its maritime history and vibrant food scene, it is often called the 'real capital' by its residents. The city is built on islands in the River Lee and features charming streets, historic churches, and the famous English Market. Cork is a gateway to the beautiful scenery of West Cork and the Wild Atlantic Way.",
      de: "Cork ist Irlands zweitgrößte Stadt und liegt im Südwesten des Landes. Bekannt für seine maritime Geschichte und seine lebendige Food-Szene, wird es von seinen Bewohnern oft als 'wahre Hauptstadt' bezeichnet. Die Stadt ist auf Inseln im Fluss Lee erbaut und bietet charmante Straßen, historische Kirchen und den berühmten English Market. Cork ist ein Tor zur wunderschönen Landschaft von West Cork und dem Wild Atlantic Way.",
      hu: "Cork Írország második legnagyobb városa, az ország délnyugati részén található. Tengerészeti múltjáról és élénk gasztronómiájáról ismert, lakói gyakran az 'igazi fővárosnak' nevezik. A város a Lee-folyó szigeteire épült, bájos utcákkal, történelmi templomokkal és a híres English Markettel rendelkezik. Cork kapu Nyugat-Cork gyönyörű tájaihoz és a Wild Atlantic Way-hez.",
      ro: "Cork este al doilea oraș ca mărime din Irlanda, situat în sud-vestul țării. Cunoscut pentru istoria sa maritimă și scena culinară vibrantă, este adesea numit 'adevărata capitală' de către rezidenții săi. Orașul este construit pe insule în râul Lee și are străzi fermecătoare, biserici istorice și faimoasa English Market. Cork este o poartă către peisajele frumoase din West Cork și Wild Atlantic Way."
    },
    facts: {
      en: ["Cork Harbour is one of the largest natural harbours in the world.","The city is famous for the Shandon Bells.","Blarney Castle, home to the Blarney Stone, is located nearby.","Cork was a major port for Irish emigration to America."],
      de: ["Der Hafen von Cork ist einer der größten Naturhäfen der Welt.","Die Stadt ist berühmt für die Shandon Bells.","Blarney Castle mit dem Blarney Stone befindet sich in der Nähe.","Cork war ein wichtiger Hafen für die irische Auswanderung nach Amerika."],
      hu: ["Cork kikötője a világ egyik legnagyobb természetes kikötője.","A város híres a Shandon-harangokról.","A közelben található a Blarney-kastély, a Blarney-kő otthona.","Cork az Amerikába irányuló ír kivándorlás egyik fő kikötője volt."],
      ro: ["Portul Cork este unul dintre cele mai mari porturi naturale din lume.","Orașul este faimos pentru clopotele Shandon.","Castelul Blarney, unde se află Piatra Blarney, este situat în apropiere.","Cork a fost un port major pentru emigrarea irlandeză în America."]
    },
    image: "/geo-images/ireland/cork.webp",
  }
];

export const irelandCities: POI[] = [
  {
    id: "city-dublin",
    type: "city",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "Dublin", hu: "Dublin", ro: "Dublin", en: "Dublin" },
    description: {
      en: "Dublin is Ireland's capital and a compact city known for Trinity College, Temple Bar, and its literary heritage.",
      de: "Dublin ist die Hauptstadt Irlands und eine kompakte Stadt, bekannt für Trinity College, Temple Bar und ihr literarisches Erbe.",
      hu: "Dublin Írország fővárosa, egy kompakt város, amely a Trinity College-ról, a Temple Barról és irodalmi örökségéről ismert.",
      ro: "Dublin este capitala Irlandei și un oraș compact, cunoscut pentru Trinity College, Temple Bar și moștenirea sa literară."
    },
    facts: {
      en: ["It is the capital of Ireland.", "Trinity College is one of its main landmarks.", "Temple Bar is a famous cultural and nightlife district.", "The River Liffey runs through the city."],
      de: ["Es ist die Hauptstadt Irlands.", "Das Trinity College ist eines der wichtigsten Wahrzeichen.", "Temple Bar ist ein berühmtes Kultur- und Ausgehviertel.", "Der Fluss Liffey fließt durch die Stadt."],
      hu: ["Ez Írország fővárosa.", "A Trinity College az egyik fő nevezetessége.", "A Temple Bar híres kulturális és éjszakai negyed.", "A Liffey folyó átszeli a várost."],
      ro: ["Este capitala Irlandei.", "Trinity College este unul dintre reperele sale principale.", "Temple Bar este un cartier celebru pentru cultură și viață de noapte.", "Râul Liffey traversează orașul."]
    },
    image: "/geo-images/ireland/city-dublin.webp",
  },
  {
    id: "city-cork",
    type: "city",
    parent: "ireland",
    coords: [-8.4756, 51.8985],
    name: { de: "Cork", hu: "Cork", ro: "Cork", en: "Cork" },
    description: {
      en: "Cork is Ireland's second-largest city and a major center in the southwest, close to Blarney Castle.",
      de: "Cork ist Irlands zweitgrößte Stadt und ein wichtiges Zentrum im Südwesten, nahe Blarney Castle.",
      hu: "Cork Írország második legnagyobb városa és a délnyugat fontos központja, közel a Blarney Castle-höz.",
      ro: "Cork este al doilea oraș ca mărime din Irlanda și un centru important în sud-vest, aproape de Blarney Castle."
    },
    facts: {
      en: ["It is Ireland's second-largest city.", "The English Market is one of its best-known spots.", "The River Lee shapes the city.", "Blarney Castle is nearby."],
      de: ["Es ist Irlands zweitgrößte Stadt.", "Der English Market ist einer der bekanntesten Orte.", "Der Fluss Lee prägt die Stadt.", "Blarney Castle liegt in der Nähe."],
      hu: ["Írország második legnagyobb városa.", "Az English Market az egyik legismertebb helye.", "A Lee folyó formálja a várost.", "A Blarney Castle a közelben található."],
      ro: ["Este al doilea oraș ca mărime din Irlanda.", "English Market este unul dintre cele mai cunoscute locuri.", "Râul Lee modelează orașul.", "Blarney Castle se află în apropiere."]
    },
    image: "/geo-images/ireland/city-cork.webp",
  },
  {
    id: "city-galway",
    type: "city",
    parent: "ireland",
    coords: [-9.0568, 53.2707],
    name: { de: "Galway", hu: "Galway", ro: "Galway", en: "Galway" },
    description: {
      en: "Galway is a western Irish city with a lively arts scene and a strong link to Gaelic culture.",
      de: "Galway ist eine westirische Stadt mit lebendiger Kunstszene und enger Verbindung zur gälischen Kultur.",
      hu: "Galway nyugat-írországi város, élénk művészeti élettel és erős gael kulturális kapcsolattal.",
      ro: "Galway este un oraș din vestul Irlandei, cu o scenă artistică vie și o legătură puternică cu cultura gaelică."
    },
    facts: {
      en: ["It is a gateway to Connemara.", "It has a strong festival culture.", "Irish language is highly visible here.", "The city sits on the Atlantic coast."],
      de: ["Es ist ein Tor nach Connemara.", "Es hat eine starke Festivalkultur.", "Die irische Sprache ist hier sehr präsent.", "Die Stadt liegt an der Atlantikküste."],
      hu: ["Connemara kapuja.", "Erős fesztiválkultúrája van.", "Az ír nyelv nagyon jelen van itt.", "A város az Atlanti-óceán partján fekszik."],
      ro: ["Este o poartă către Connemara.", "Are o cultură puternică a festivalurilor.", "Limba irlandeză este foarte vizibilă aici.", "Orașul se află pe coasta Atlanticului."]
    },
    image: "/geo-images/ireland/city-galway.webp",
  },
  {
    id: "city-limerick",
    type: "city",
    parent: "ireland",
    coords: [-8.6305, 52.6638],
    name: { de: "Limerick", hu: "Limerick", ro: "Limerick", en: "Limerick" },
    description: {
      en: "Limerick sits on the River Shannon and is known for King John's Castle and a strong sporting identity.",
      de: "Limerick liegt am Fluss Shannon und ist für King John's Castle und eine starke Sportkultur bekannt.",
      hu: "Limerick a Shannon folyó partján fekszik, és a King John's Castle-ről, valamint erős sportéletéről ismert.",
      ro: "Limerick se află pe râul Shannon și este cunoscut pentru King John's Castle și o identitate sportivă puternică."
    },
    facts: {
      en: ["King John's Castle is a major landmark.", "The River Shannon runs through the city.", "It has a strong rugby tradition.", "It is one of Ireland's oldest cities."],
      de: ["King John's Castle ist ein wichtiges Wahrzeichen.", "Der Fluss Shannon fließt durch die Stadt.", "Die Stadt hat eine starke Rugby-Tradition.", "Sie ist eine der ältesten Städte Irlands."],
      hu: ["A King John's Castle fontos nevezetesség.", "A Shannon folyó áthalad a városon.", "Erős rögbihagyományai vannak.", "Írország egyik legrégebbi városa."],
      ro: ["King John's Castle este un reper major.", "Râul Shannon trece prin oraș.", "Are o puternică tradiție în rugby.", "Este unul dintre cele mai vechi orașe din Irlanda."]
    },
    image: "/geo-images/ireland/city-limerick.webp",
  },
  {
    id: "city-belfast",
    type: "city",
    parent: "ireland",
    coords: [-5.9301, 54.5973],
    name: { de: "Belfast", hu: "Belfast", ro: "Belfast", en: "Belfast" },
    description: {
      en: "Belfast is the capital of Northern Ireland and is closely linked to shipbuilding and the Titanic Quarter.",
      de: "Belfast ist die Hauptstadt Nordirlands und eng mit dem Schiffbau sowie dem Titanic Quarter verbunden.",
      hu: "Belfast Észak-Írország fővárosa, és szorosan kötődik a hajóépítéshez és a Titanic Quarterhöz.",
      ro: "Belfast este capitala Irlandei de Nord și este strâns legat de construcțiile navale și Titanic Quarter."
    },
    facts: {
      en: ["It is the capital of Northern Ireland.", "The Titanic was built here.", "The Titanic Quarter is a major redevelopment area.", "It has a strong industrial heritage."],
      de: ["Es ist die Hauptstadt Nordirlands.", "Die Titanic wurde hier gebaut.", "Das Titanic Quarter ist ein großes Entwicklungsgebiet.", "Es hat ein starkes industrielles Erbe."],
      hu: ["Észak-Írország fővárosa.", "A Titanic itt épült.", "A Titanic Quarter jelentős fejlesztési terület.", "Erős ipari örökséggel rendelkezik."],
      ro: ["Este capitala Irlandei de Nord.", "Titanic a fost construit aici.", "Titanic Quarter este o zonă majoră de regenerare.", "Are o moștenire industrială puternică."]
    },
    image: "/geo-images/ireland/city-belfast.webp",
  }
];

export const irelandNature: POI[] = [
  {
    id: "nat-cliffs-of-moher",
    type: "nature",
    parent: "ireland",
    coords: [-9.4725, 52.9719],
    name: { de: "Cliffs of Moher", hu: "Moher-sziklák", ro: "Stâncile Moher", en: "Cliffs of Moher" },
    description: {
      en: "The Cliffs of Moher are one of Ireland's most iconic natural landmarks, stretching for 14 kilometers along the Atlantic coast of County Clare. Rising up to 214 meters above the ocean, they offer breathtaking views of the Aran Islands and the vast Atlantic. The cliffs are home to thousands of seabirds, including puffins, and are a UNESCO Global Geopark. They represent the raw beauty and power of the Irish coastline.",
      de: "Die Cliffs of Moher sind eines der bekanntesten Naturdenkmäler Irlands und erstrecken sich über 14 Kilometer entlang der Atlantikküste der Grafschaft Clare. Sie ragen bis zu 214 Meter über den Ozean empor und bieten atemberaubende Ausblicke auf die Aran-Inseln und den weiten Atlantik. Die Klippen sind die Heimat von Tausenden von Seevögeln, darunter Papageitaucher, und sind ein UNESCO Global Geopark. Sie repräsentieren die rohe Schönheit und Kraft der irischen Küste.",
      hu: "A Moher-sziklák Írország egyik legikonikusabb természeti látványossága, amely 14 kilométer hosszan húzódik az Atlanti-óceán partján, Clare megyében. Akár 214 méterrel az óceán fölé magasodva lélegzetelállító kilátást nyújtanak az Aran-szigetekre és a hatalmas Atlanti-óceánra. A sziklák több ezer tengeri madárnak, köztük lunda-féléknek adnak otthont, és az UNESCO Globális Geopark részét képezik. Az ír tengerpart nyers szépségét és erejét jelképezik.",
      ro: "Stâncile Moher sunt unul dintre cele mai emblematice repere naturale ale Irlandei, întinzându-se pe 14 kilometri de-a lungul coastei atlantice a comitatului Clare. Ridicându-se până la 214 metri deasupra oceanului, acestea oferă vederi uluitoare ale insulelor Aran și ale vastului Atlantic. Stâncile găzduiesc mii de păsări marine, inclusiv pufini, și sunt un Geoparc Global UNESCO. Ele reprezintă frumusețea brută și puterea coastei irlandeze."
    },
    facts: {
      en: ["The cliffs are featured in movies like 'Harry Potter and the Half-Blood Prince'.","O'Brien's Tower marks the highest point of the cliffs.","They are made of Namurian shale and sandstone.","Over 1.5 million people visit the cliffs every year."],
      de: ["Die Klippen sind in Filmen wie 'Harry Potter und der Halbblutprinz' zu sehen.","O'Brien's Tower markiert den höchsten Punkt der Klippen.","Sie bestehen aus namurischem Schiefer und Sandstein.","Über 1,5 Millionen Menschen besuchen die Klippen jedes Jahr."],
      hu: ["A sziklák olyan filmekben szerepelnek, mint a 'Harry Potter és a Félvér Herceg'.","Az O'Brien-torony jelzi a sziklák legmagasabb pontját.","Namuri palából és homokkőből állnak.","Évente több mint 1,5 millió ember látogatja meg a sziklákat."],
      ro: ["Stâncile apar în filme precum 'Harry Potter și Prințul Semipur'.","Turnul lui O'Brien marchează cel mai înalt punct al stâncilor.","Sunt formate din ardezie și gresie namuriană.","Peste 1,5 milioane de oameni vizitează stâncile în fiecare an."]
    },
    image: "/geo-images/ireland/cliffs-of-moher.webp",
  },
  {
    id: "nat-giants-causeway",
    type: "nature",
    parent: "ireland",
    coords: [-6.5116, 55.2408],
    name: { de: "Giant's Causeway", hu: "Óriások útja", ro: "Giant's Causeway", en: "Giant's Causeway" },
    description: {
      en: "The Giant's Causeway is an area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. Located on the north coast of Ireland, it is a UNESCO World Heritage site and a place of great geological interest and mythical legend. According to folklore, the columns were built by the giant Finn MacCool as a causeway to Scotland. It is one of the most popular tourist attractions on the island.",
      de: "Der Giant's Causeway ist ein Gebiet mit etwa 40.000 ineinandergreifenden Basaltsäulen, das Ergebnis eines antiken vulkanischen Spaltenausbruchs. Er liegt an der Nordküste Irlands, ist ein UNESCO-Weltkulturerbe und ein Ort von großem geologischem Interesse und mythischer Legende. Der Folklore nach wurden die Säulen vom Riesen Finn MacCool als Damm nach Schottland gebaut. Er ist eine der beliebtesten Touristenattraktionen auf der Insel.",
      hu: "Az Óriások útja körülbelül 40 000 egymásba kapcsolódó bazaltoszlopból álló terület, amely egy ősi vulkáni repedéskitörés eredménye. Írország északi partján található, az UNESCO Világörökség része, és nagy geológiai érdeklődésre számot tartó, mitikus legendákkal övezett hely. A folklór szerint az oszlopokat az óriás Finn MacCool építette útként Skóciába. A sziget egyik legnépszerűbb turisztikai látványossága.",
      ro: "Giant's Causeway este o zonă cu aproximativ 40.000 de coloane de bazalt interconectate, rezultatul unei vechi erupții vulcanice. Situat pe coasta de nord a Irlandei, este un sit al Patrimoniului Mondial UNESCO și un loc de mare interes geologic și legendă mitică. Conform folclorului, coloanele au fost construite de gigantul Finn MacCool ca un drum către Scoția. Este una dintre cele mai populare atracții turistice de pe insulă."
    },
    facts: {
      en: ["Most of the columns are hexagonal in shape.","The tallest columns are about 12 meters high.","It was formed approximately 50 to 60 million years ago.","The site is managed by the National Trust."],
      de: ["Die meisten Säulen haben eine sechseckige Form.","Die höchsten Säulen sind etwa 12 Meter hoch.","Es entstand vor etwa 50 bis 60 Millionen Jahren.","Die Stätte wird vom National Trust verwaltet."],
      hu: ["Az oszlopok többsége hatszögletű.","A legmagasabb oszlopok körülbelül 12 méter magasak.","Körülbelül 50-60 millió évvel ezelőtt keletkezett.","A helyszínt a National Trust kezeli."],
      ro: ["Majoritatea coloanelor au formă hexagonală.","Cele mai înalte coloane au aproximativ 12 metri înălțime.","S-a format acum aproximativ 50 până la 60 de milioane de ani.","Situl este administrat de National Trust."]
    },
    image: "/geo-images/ireland/giants-causeway.webp",
  },
  {
    id: "nat-cliffs-moher",
    type: "nature",
    parent: "ireland",
    coords: [-9.4309, 52.9711],
    name: { de: "Cliffs of Moher", hu: "Cliffs of Moher", ro: "Cliffs of Moher", en: "Cliffs of Moher" },
    description: {
      en: "The Cliffs of Moher are a spectacular Atlantic coastline in County Clare, rising steeply above the sea.",
      de: "Die Cliffs of Moher sind eine spektakuläre Atlantikküste in County Clare, die steil über dem Meer aufragt.",
      hu: "A Cliffs of Moher Clare megyében található látványos atlanti partszakasz, amely meredeken emelkedik a tenger fölé.",
      ro: "Cliffs of Moher sunt o coastă atlantică spectaculoasă din comitatul Clare, ridicându-se abrupt deasupra mării."
    },
    facts: {
      en: ["They rise to 214 meters above sea level.", "They stretch for about 8 kilometers.", "They are a UNESCO Global Geopark site.", "They are home to many seabirds."],
      de: ["Sie ragen bis zu 214 Meter über den Meeresspiegel auf.", "Sie erstrecken sich über etwa 8 Kilometer.", "Sie sind ein UNESCO-Global-Geopark.", "Sie sind die Heimat vieler Seevögel."],
      hu: ["Akár 214 méterre magasodnak a tengerszint fölé.", "Körülbelül 8 kilométer hosszan húzódnak.", "UNESCO Global Geopark helyszín.", "Sok tengeri madár él itt."],
      ro: ["Se ridică până la 214 metri deasupra nivelului mării.", "Se întind pe aproximativ 8 kilometri.", "Sunt un sit UNESCO Global Geopark.", "Adăpostesc multe păsări marine."]
    },
    image: "/geo-images/ireland/cliffs-moher.webp",
  },
  {
    id: "nat-giants-causeway",
    type: "nature",
    parent: "ireland",
    coords: [-6.5112, 55.2408],
    name: { de: "Giant's Causeway (UK!)", hu: "Giant's Causeway (UK!)", ro: "Giant's Causeway (UK!)", en: "Giant's Causeway (UK!)" },
    description: {
      en: "Giant's Causeway is a basalt column landscape in Northern Ireland shaped by ancient volcanic activity.",
      de: "Der Giant's Causeway ist eine Basaltsäulenlandschaft in Nordirland, die durch uralte vulkanische Aktivität geformt wurde.",
      hu: "A Giant's Causeway egy bazaltoszlopos táj Észak-Írországban, amelyet ősi vulkanikus tevékenység formált.",
      ro: "Giant's Causeway este un peisaj de coloane bazaltice din Irlanda de Nord, modelat de activitate vulcanică antică."
    },
    facts: {
      en: ["It has around 40,000 basalt columns.", "It is a UNESCO World Heritage Site.", "The columns are mostly hexagonal.", "Legend links it to Finn MacCool."],
      de: ["Es hat rund 40.000 Basaltsäulen.", "Es ist ein UNESCO-Weltkulturerbe.", "Die Säulen sind meist sechseckig.", "Eine Legende verbindet es mit Finn MacCool."],
      hu: ["Körülbelül 40 000 bazaltoszlopa van.", "UNESCO Világörökségi helyszín.", "Az oszlopok többnyire hatszögletűek.", "A legenda Finn MacCoolhoz köti."],
      ro: ["Are aproximativ 40.000 de coloane bazaltice.", "Este sit al Patrimoniului Mondial UNESCO.", "Coloanele sunt în mare parte hexagonale.", "Legenda îl leagă de Finn MacCool."]
    },
    image: "/geo-images/ireland/giants-causeway.webp",
  },
  {
    id: "nat-ring-kerry",
    type: "nature",
    parent: "ireland",
    coords: [-9.8, 51.9],
    name: { de: "Ring of Kerry", hu: "Ring of Kerry", ro: "Ring of Kerry", en: "Ring of Kerry" },
    description: {
      en: "The Ring of Kerry is a scenic coastal circuit around the Iveragh Peninsula in southwest Ireland.",
      de: "Der Ring of Kerry ist eine landschaftlich reizvolle Küstenroute rund um die Iveragh-Halbinsel im Südwesten Irlands.",
      hu: "A Ring of Kerry egy festői part menti körút az Iveragh-félsziget körül Írország délnyugati részén.",
      ro: "Ring of Kerry este un traseu scenic de coastă în jurul Peninsulei Iveragh, în sud-vestul Irlandei."
    },
    facts: {
      en: ["It is about 179 kilometers long.", "It passes Killarney National Park.", "It is one of Ireland's classic drives.", "It combines sea, mountains, and lakes."],
      de: ["Er ist etwa 179 Kilometer lang.", "Er führt am Killarney National Park vorbei.", "Er ist eine klassische Irland-Rundfahrt.", "Er verbindet Meer, Berge und Seen."],
      hu: ["Körülbelül 179 kilométer hosszú.", "Érinti a Killarney Nemzeti Parkot.", "Írország klasszikus körútjai közé tartozik.", "A tenger, a hegyek és a tavak keveréke."],
      ro: ["Are aproximativ 179 de kilometri.", "Trece pe lângă Parcul Național Killarney.", "Este unul dintre drumurile clasice ale Irlandei.", "Combină marea, munții și lacurile."]
    },
    image: "/geo-images/ireland/ring-of-kerry.webp",
  },
  {
    id: "nat-connemara",
    type: "nature",
    parent: "ireland",
    coords: [-9.7, 53.5],
    name: { de: "Connemara", hu: "Connemara", ro: "Connemara", en: "Connemara" },
    description: {
      en: "Connemara is a wild western region known for moorland, mountains, and a strong Gaelic identity.",
      de: "Connemara ist eine wilde westliche Region, bekannt für Moorlandschaften, Berge und eine starke gälische Identität.",
      hu: "Connemara egy vad nyugati régió, amely mocsárvidékeiről, hegyeiről és erős gael identitásáról ismert.",
      ro: "Connemara este o regiune sălbatică din vest, cunoscută pentru mlaștini, munți și o identitate gaelică puternică."
    },
    facts: {
      en: ["It is strongly associated with the Irish language.", "The landscape is rugged and remote.", "The Twelve Bens are a key mountain group.", "It is a major hiking area."],
      de: ["Sie ist stark mit der irischen Sprache verbunden.", "Die Landschaft ist rau und abgelegen.", "Die Twelve Bens sind eine wichtige Berggruppe.", "Sie ist ein wichtiges Wandergebiet."],
      hu: ["Erősen kötődik az ír nyelvhez.", "A táj vad és félreeső.", "A Twelve Bens fontos hegység.", "Népszerű túrahely."],
      ro: ["Este puternic asociată cu limba irlandeză.", "Peisajul este aspru și izolat.", "Twelve Bens este un grup muntos important.", "Este o zonă majoră pentru drumeții."]
    },
    image: "/geo-images/ireland/connemara.webp",
  },
  {
    id: "nat-burren",
    type: "nature",
    parent: "ireland",
    coords: [-9.2, 53.0],
    name: { de: "The Burren", hu: "The Burren", ro: "The Burren", en: "The Burren" },
    description: {
      en: "The Burren is a limestone karst landscape in County Clare known for its rocks, flowers, and archaeological remains.",
      de: "The Burren ist eine Kalkstein-Karstlandschaft in County Clare, bekannt für ihre Felsen, Blumen und archäologischen Überreste.",
      hu: "The Burren egy mészkőből álló karsztvidék Clare megyében, amely szikláiról, virágairól és régészeti maradványairól ismert.",
      ro: "The Burren este un peisaj carstic calcaros din comitatul Clare, cunoscut pentru stânci, flori și vestigii arheologice."
    },
    facts: {
      en: ["It has rare Arctic-Alpine plants.", "It is a karst landscape.", "Ancient tombs are found there.", "It lies near the Cliffs of Moher."],
      de: ["Dort wachsen seltene arktisch-alpine Pflanzen.", "Es ist eine Karstlandschaft.", "Dort gibt es alte Gräber.", "Es liegt in der Nähe der Cliffs of Moher."],
      hu: ["Ritka sarkvidéki-alpesi növények élnek itt.", "Karsztvidék.", "Ősi sírok találhatók ott.", "A Cliffs of Moher közelében fekszik."],
      ro: ["Acolo cresc plante rare arctic-alpine.", "Este un peisaj carstic.", "Acolo se găsesc morminte antice.", "Se află lângă Cliffs of Moher."]
    },
    image: "/geo-images/ireland/burren.webp",
  }
];

export const irelandCulture: POI[] = [
  {
    id: "cult-blarney-castle",
    type: "culture",
    parent: "city-cork",
    coords: [-8.5704, 51.9291],
    name: { de: "Blarney Castle", hu: "Blarney vár", ro: "Castelul Blarney", en: "Blarney Castle" },
    description: {
      en: "Blarney Castle is a medieval stronghold in Blarney, near Cork, famous for the Blarney Stone. Built by the MacCarthy of Muskerry dynasty, the castle dates back to 1446. Visitors from all over the world come to kiss the Blarney Stone, which is said to bestow the 'gift of the gab' or great eloquence. The castle is surrounded by beautiful gardens, including a poisonous plant garden and the Rock Close.",
      de: "Blarney Castle ist eine mittelalterliche Festung in Blarney, in der Nähe von Cork, die für den Blarney Stone bekannt ist. Die Burg wurde von der Dynastie der MacCarthy of Muskerry erbaut und stammt aus dem Jahr 1446. Besucher aus aller Welt kommen, um den Blarney Stone zu küssen, von dem es heißt, er verleihe die 'Gabe des Redens' oder große Beredsamkeit. Die Burg ist von wunderschönen Gärten umgeben, darunter ein Giftpflanzengarten und der Rock Close.",
      hu: "A Blarney vár egy középkori erődítmény Blarney-ben, Cork közelében, amely a Blarney-kőről híres. A MacCarthy of Muskerry dinasztia építette, a vár 1446-ból származik. A világ minden tájáról érkeznek látogatók, hogy megcsókolják a Blarney-követ, amelyről azt mondják, hogy megadja a 'beszéd ajándékát' vagy a nagy ékesszólást. A várat gyönyörű kertek veszik körül, köztük egy mérgező növénykert és a Rock Close.",
      ro: "Castelul Blarney este o fortăreață medievală din Blarney, lângă Cork, faimoasă pentru Piatra Blarney. Construit de dinastia MacCarthy din Muskerry, castelul datează din 1446. Vizitatori din întreaga lume vin să sărute Piatra Blarney, despre care se spune că oferă 'darul vorbirii' sau o mare elocvență. Castelul este înconjurat de grădini frumoase, inclusiv o grădină de plante otrăvitoare și Rock Close."
    },
    facts: {
      en: ["To kiss the stone, you must lean backwards over a drop from the battlements.","The current castle is the third to be built on the site.","The gardens feature many mystical rock formations.","The Blarney Stone is a block of Carboniferous limestone."],
      de: ["Um den Stein zu küssen, muss man sich rückwärts über einen Abgrund von den Zinnen lehnen.","Die heutige Burg ist die dritte, die an dieser Stelle errichtet wurde.","Die Gärten weisen viele mystische Felsformationen auf.","Der Blarney Stone ist ein Block aus karbonischem Kalkstein."],
      hu: ["A kő megcsókolásához hátra kell dőlni a várfalról egy mélyedés fölé.","A jelenlegi vár a harmadik, amely ezen a helyen épült.","A kertekben számos misztikus sziklaformáció található.","A Blarney-kő egy karbon időszaki mészkőtömb."],
      ro: ["Pentru a săruta piatra, trebuie să te apleci pe spate peste o prăpastie de pe creneluri.","Castelul actual este al treilea construit pe acest sit.","Grădinile prezintă multe formațiuni stâncoase mistice.","Piatra Blarney este un bloc de calcar carbonifer."]
    },
    image: "/geo-images/ireland/blarney-castle.webp",
  },
  {
    id: "cult-trinity",
    type: "culture",
    parent: "city-dublin",
    coords: [-6.2575, 53.3438],
    name: { de: "Trinity College", hu: "Trinity College", ro: "Trinity College", en: "Trinity College" },
    description: {
      en: "Trinity College Dublin is Ireland's best-known university and home of the Book of Kells.",
      de: "Das Trinity College Dublin ist Irlands bekannteste Universität und Heimat des Book of Kells.",
      hu: "A dublini Trinity College Írország legismertebb egyeteme és a Book of Kells otthona.",
      ro: "Trinity College Dublin este cea mai cunoscută universitate din Irlanda și găzduiește Book of Kells."
    },
    facts: {
      en: ["Founded in 1592.", "The Old Library contains the Book of Kells.", "The Long Room is world-famous.", "It is a major Dublin landmark."],
      de: ["1592 gegründet.", "Die Old Library beherbergt das Book of Kells.", "Der Long Room ist weltberühmt.", "Es ist ein wichtiges Wahrzeichen Dublins."],
      hu: ["1592-ben alapították.", "Az Old Library őrzi a Book of Kells-t.", "A Long Room világhírű.", "Dublin egyik fő nevezetessége."],
      ro: ["Fondat în 1592.", "Old Library găzduiește Book of Kells.", "Long Room este faimoasă în lume.", "Este un reper major din Dublin."]
    },
    image: "/geo-images/ireland/trinity-college.webp",
  },
  {
    id: "cult-rock-cashel",
    type: "culture",
    parent: "city-cork",
    coords: [-7.8906, 52.5199],
    name: { de: "Rock of Cashel", hu: "Rock of Cashel", ro: "Rock of Cashel", en: "Rock of Cashel" },
    description: {
      en: "The Rock of Cashel is a dramatic medieval site on a limestone hill in Tipperary.",
      de: "Der Rock of Cashel ist eine dramatische mittelalterliche Stätte auf einem Kalksteinhügel in Tipperary.",
      hu: "A Rock of Cashel egy drámai középkori helyszín Tipperary mészkődombján.",
      ro: "Rock of Cashel este un sit medieval dramatic pe un deal de calcar din Tipperary."
    },
    facts: {
      en: ["It was the seat of the kings of Munster.", "It includes a round tower and cathedral.", "It is one of Ireland's iconic ruins.", "It overlooks the surrounding plains."],
      de: ["Es war der Sitz der Könige von Munster.", "Es umfasst einen Rundturm und eine Kathedrale.", "Es ist eine der ikonischen Ruinen Irlands.", "Es überblickt die umliegenden Ebenen."],
      hu: ["Munster királyainak székhelye volt.", "Kerek tornyot és katedrálist is magában foglal.", "Írország egyik ikonikus romja.", "A környező síkságra néz."],
      ro: ["A fost sediul regilor din Munster.", "Include un turn rotund și o catedrală.", "Este una dintre ruinele emblematice ale Irlandei.", "Oferă vedere asupra câmpiilor din jur."]
    },
    image: "/geo-images/ireland/rock-of-cashel.webp",
  },
  {
    id: "cult-newgrange",
    type: "culture",
    parent: "ireland",
    coords: [-6.4756, 53.6947],
    name: { de: "Newgrange", hu: "Newgrange", ro: "Newgrange", en: "Newgrange" },
    description: {
      en: "Newgrange is a prehistoric passage tomb older than Stonehenge and the Egyptian pyramids.",
      de: "Newgrange ist ein prähistorisches Ganggrab, älter als Stonehenge und die ägyptischen Pyramiden.",
      hu: "A Newgrange egy őskori átjárósír, amely idősebb Stonehenge-nél és az egyiptomi piramisoknál.",
      ro: "Newgrange este un mormânt preistoric de tip pasaj, mai vechi decât Stonehenge și piramidele egiptene."
    },
    facts: {
      en: ["Built around 3200 BC.", "It aligns with the winter solstice sunrise.", "It is a UNESCO World Heritage Site.", "It is one of Europe's oldest monuments."],
      de: ["Um 3200 v. Chr. erbaut.", "Es ist auf den Sonnenaufgang der Wintersonnenwende ausgerichtet.", "Es ist UNESCO-Weltkulturerbe.", "Es ist eines der ältesten Monumente Europas."],
      hu: ["Kr. e. 3200 körül épült.", "A téli napforduló napkeltéjére igazodik.", "UNESCO Világörökségi helyszín.", "Európa egyik legrégebbi emlékműve."],
      ro: ["Construit în jurul anului 3200 î.Hr.", "Este aliniat cu răsăritul de la solstițiul de iarnă.", "Este sit UNESCO.", "Este unul dintre cele mai vechi monumente din Europa."]
    },
    image: "/geo-images/ireland/newgrange.webp",
  },
  {
    id: "cult-blarney",
    type: "culture",
    parent: "city-cork",
    coords: [-8.5706, 51.9297],
    name: { de: "Blarney Castle", hu: "Blarney Castle", ro: "Blarney Castle", en: "Blarney Castle" },
    description: {
      en: "Blarney Castle is a medieval fortress near Cork, famous for the Blarney Stone and its gardens.",
      de: "Blarney Castle ist eine mittelalterliche Festung nahe Cork, berühmt für den Blarney Stone und seine Gärten.",
      hu: "A Blarney Castle egy középkori erőd Cork közelében, híres a Blarney-kőről és kertjeiről.",
      ro: "Blarney Castle este o fortăreață medievală lângă Cork, faimoasă pentru Piatra Blarney și grădinile sale."
    },
    facts: {
      en: ["The Blarney Stone is said to grant eloquence.", "The current castle dates from the 15th century.", "Visitors kiss the stone by leaning backward.", "The gardens are a major attraction."],
      de: ["Dem Blarney Stone wird Beredsamkeit nachgesagt.", "Die heutige Burg stammt aus dem 15. Jahrhundert.", "Besucher küssen den Stein, indem sie sich zurücklehnen.", "Die Gärten sind eine Hauptattraktion."],
      hu: ["A Blarney-kőnek ékesszólást tulajdonítanak.", "A jelenlegi vár a 15. századból származik.", "A követ hátradőlve csókolják meg.", "A kertek fő látványosságok."],
      ro: ["Piatra Blarney este considerată aducătoare de elocvență.", "Castelul actual datează din secolul al XV-lea.", "Vizitatorii sărută piatra aplecându-se pe spate.", "Grădinile sunt o atracție majoră."]
    },
    image: "/geo-images/ireland/blarney.webp",
  },
  {
    id: "cult-kilkenny",
    type: "culture",
    parent: "ireland",
    coords: [-7.2449, 52.6485],
    name: { de: "Kilkenny Castle", hu: "Kilkenny Castle", ro: "Castelul Kilkenny", en: "Kilkenny Castle" },
    description: {
      en: "Kilkenny Castle is a Norman castle and one of Ireland's most recognizable historic buildings.",
      de: "Kilkenny Castle ist eine normannische Burg und eines der bekanntesten historischen Gebäude Irlands.",
      hu: "A Kilkenny Castle egy normann vár és Írország egyik legismertebb történelmi épülete.",
      ro: "Castelul Kilkenny este un castel normand și una dintre cele mai recognoscibile clădiri istorice ale Irlandei."
    },
    facts: {
      en: ["It was founded in the 12th century.", "It once belonged to the Butler family.", "It overlooks the River Nore.", "It is a key symbol of Kilkenny."],
      de: ["Es wurde im 12. Jahrhundert gegründet.", "Es gehörte einst der Familie Butler.", "Es überblickt den Fluss Nore.", "Es ist ein zentrales Symbol von Kilkenny."],
      hu: ["A 12. században alapították.", "Valaha a Butler család birtoka volt.", "A Nore folyóra néz.", "Kilkenny egyik fő szimbóluma."],
      ro: ["A fost fondat în secolul al XII-lea.", "A aparținut cândva familiei Butler.", "Oferă vedere spre râul Nore.", "Este un simbol important al orașului Kilkenny."]
    },
    image: "/geo-images/ireland/kilkenny-castle.webp",
  }
];

export const irelandAllPoi: POI[] = [irelandCountry, ...irelandRegions, ...irelandCities, ...irelandCulture, ...irelandNature];
