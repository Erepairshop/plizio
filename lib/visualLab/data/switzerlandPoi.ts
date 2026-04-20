import type { POI } from "./poi";

export const switzerlandCountry: POI = {
  id: "country-switzerland",
  type: "country",
  parent: "europe",
  coords: [8.2275, 46.8182],
  name: {
    de: "Schweiz",
    hu: "Svájc",
    ro: "Elveția",
    en: "Switzerland"
  },
  description: {
    de: "Die Schweiz ist ein Binnenstaat in Mitteleuropa, bekannt für ihre Berge, Uhren und Schokolade. Sie hat vier offizielle Sprachen und eine lange Tradition der Neutralität. Die Hauptstadt ist Bern.",
    hu: "Svájc egy közép-európai ország, amely hegyeiről, óráiról és csokoládéjáról ismert. Négy hivatalos nyelve van, és hosszú semlegességi hagyománnyal rendelkezik. Fővárosa Bern.",
    ro: "Elveția este o țară fără ieșire la mare din Europa Centrală, cunoscută pentru munții, ceasurile și ciocolata sa. Are patru limbi oficiale și o lungă tradiție de neutralitate. Capitala este Berna.",
    en: "Switzerland is a landlocked country in Central Europe, known for its mountains, watches, and chocolate. It has four official languages and a long tradition of neutrality. The capital is Bern."
  },
  facts: {
    de: [
      "Die Schweiz hat vier Landessprachen: Deutsch, Französisch, Italienisch und Rätoromanisch.",
      "Sie ist berühmt für die Alpen und das Matterhorn.",
      "Die Schweiz ist kein Mitglied der Europäischen Union.",
      "Sie ist bekannt für ihre direkte Demokratie."
    ],
    hu: [
      "Svájcnak négy hivatalos nyelve van: német, francia, olasz és romans.",
      "Híres az Alpokról és a Matterhornról.",
      "Svájc nem tagja az Európai Uniónak.",
      "Közvetlen demokráciájáról ismert."
    ],
    ro: [
      "Elveția are patru limbi oficiale: germană, franceză, italiană și retoromană.",
      "Este renumită pentru Alpi și Matterhorn.",
      "Elveția nu este membră a Uniunii Europene.",
      "Este cunoscută pentru democrația sa directă."
    ],
    en: [
      "Switzerland has four official languages: German, French, Italian, and Romansh.",
      "It is famous for the Alps and the Matterhorn.",
      "Switzerland is not a member of the European Union.",
      "It is known for its direct democracy."
    ]
  },
  image: "/geo-images/switzerland/country-switzerland.webp"
};

export const switzerlandRegions: POI[] = [
  {
    id: "city-zurich",
    type: "city",
    parent: "country-switzerland",
    coords: [8.5417, 47.3769],
    name: {
      de: "Zürich",
      hu: "Zürich",
      ro: "Zürich",
      en: "Zurich"
    },
    description: {
      de: "Zürich ist die größte Stadt der Schweiz und ein globales Zentrum für Banken und Finanzen. Sie liegt am Nordende des Zürichsees. Die Stadt bietet eine hohe Lebensqualität.",
      hu: "Zürich Svájc legnagyobb városa, valamint a bank- és pénzügyi szektor globális központja. A Zürichi-tó északi végén fekszik. A város magas életminőséget kínál.",
      ro: "Zürich este cel mai mare oraș din Elveția și un centru global pentru bănci și finanțe. Este situat la capătul nordic al lacului Zürich. Orașul oferă o înaltă calitate a vieții.",
      en: "Zurich is the largest city in Switzerland and a global center for banking and finance. It lies at the north end of Lake Zurich. The city offers a high quality of life."
    },
    facts: {
      de: [
        "Zürich ist das wirtschaftliche Zentrum der Schweiz.",
        "Die Bahnhofstrasse ist eine der teuersten Einkaufsstraßen der Welt.",
        "Die Stadt hat über 1.200 Brunnen mit Trinkwasser.",
        "Das Grossmünster ist ein Wahrzeichen der Stadt."
      ],
      hu: [
        "Zürich Svájc gazdasági központja.",
        "A Bahnhofstrasse a világ egyik legdrágább bevásárlóutcája.",
        "A városban több mint 1200 ivóvizes kút található.",
        "A Grossmünster a város egyik jelképe."
      ],
      ro: [
        "Zürich este centrul economic al Elveției.",
        "Bahnhofstrasse este una dintre cele mai scumpe străzi comerciale din lume.",
        "Orașul are peste 1.200 de fântâni cu apă potabilă.",
        "Grossmünster este un punct de reper al orașului."
      ],
      en: [
        "Zurich is the economic center of Switzerland.",
        "Bahnhofstrasse is one of the world's most expensive shopping streets.",
        "The city has over 1,200 fountains with drinking water.",
        "The Grossmünster is a landmark of the city."
      ]
    },
    image: "/geo-images/switzerland/city-zurich.webp"
  },
  {
    id: "city-geneva",
    type: "city",
    parent: "country-switzerland",
    coords: [6.1432, 46.2044],
    name: {
      de: "Genf",
      hu: "Genf",
      ro: "Geneva",
      en: "Geneva"
    },
    description: {
      de: "Genf ist eine globale Stadt, ein Finanzzentrum und ein weltweites Zentrum für Diplomatie. Hier befinden sich der europäische Hauptsitz der UNO und das Rote Kreuz. Die Stadt liegt am Genfersee.",
      hu: "Genf globális város, pénzügyi központ és a diplomácia világközpontja. Itt található az ENSZ európai központja és a Vöröskereszt. A város a Genfi-tó partján fekszik.",
      ro: "Geneva este un oraș global, un centru financiar și un centru mondial pentru diplomație. Găzduiește sediul european al ONU și Crucea Roșie. Orașul este situat pe malul Lacului Geneva.",
      en: "Geneva is a global city, a financial center, and a worldwide center for diplomacy. It hosts the European headquarters of the UN and the Red Cross. The city is located on Lake Geneva."
    },
    facts: {
      de: [
        "Genf ist bekannt für den Jet d'Eau, eine große Wasserfontäne.",
        "Es ist der Hauptsitz vieler internationaler Organisationen.",
        "Die Stadt ist das Zentrum der Schweizer Uhrenindustrie.",
        "Französisch ist die Hauptsprache in Genf."
      ],
      hu: [
        "Genf híres a Jet d'Eau-ról, egy hatalmas szökőkútról.",
        "Számos nemzetközi szervezet székhelye.",
        "A város a svájci óraipar központja.",
        "A francia a fő nyelv Genfben."
      ],
      ro: [
        "Geneva este cunoscută pentru Jet d'Eau, o fântână mare de apă.",
        "Este sediul multor organizații internaționale.",
        "Orașul este centrul industriei elvețiene de ceasuri.",
        "Franceza este limba principală în Geneva."
      ],
      en: [
        "Geneva is known for the Jet d'Eau, a large water fountain.",
        "It is the headquarters of many international organizations.",
        "The city is the center of the Swiss watchmaking industry.",
        "French is the main language in Geneva."
      ]
    },
    image: "/geo-images/switzerland/city-geneva.webp"
  },
  {
    id: "city-bern",
    type: "city",
    parent: "country-switzerland",
    coords: [7.4474, 46.9480],
    name: {
      de: "Bern",
      hu: "Bern",
      ro: "Berna",
      en: "Bern"
    },
    description: {
      de: "Bern ist die Bundesstadt (Hauptstadt) der Schweiz. Die Altstadt von Bern gehört zum UNESCO-Welterbe. Die Stadt ist bekannt für ihre mittelalterliche Architektur und die Zytglogge.",
      hu: "Bern Svájc szövetségi városa (fővárosa). Bern óvárosa az UNESCO Világörökség része. A város középkori építészetéről és a Zytglogge óratoronyról ismert.",
      ro: "Berna este orașul federal (capitala) al Elveției. Orașul vechi din Berna este un sit al Patrimoniului Mondial UNESCO. Orașul este cunoscut pentru arhitectura sa medievală și Zytglogge.",
      en: "Bern is the federal city (capital) of Switzerland. The Old City of Bern is a UNESCO World Heritage site. The city is known for its medieval architecture and the Zytglogge."
    },
    facts: {
      de: [
        "Bern wurde 1191 gegründet.",
        "Albert Einstein entwickelte hier seine Relativitätstheorie.",
        "Der Bärenpark ist eine bekannte Attraktion.",
        "Die Aare fließt durch die Stadt."
      ],
      hu: [
        "Bernt 1191-ben alapították.",
        "Albert Einstein itt dolgozta ki relativitáselméletét.",
        "A Medvepark egy jól ismert látványosság.",
        "Az Aare folyó folyik át a városon."
      ],
      ro: [
        "Berna a fost fondată în 1191.",
        "Albert Einstein și-a dezvoltat teoria relativității aici.",
        "Parcul Urșilor este o atracție bine cunoscută.",
        "Râul Aare curge prin oraș."
      ],
      en: [
        "Bern was founded in 1191.",
        "Albert Einstein developed his theory of relativity here.",
        "The Bear Park is a well-known attraction.",
        "The Aare river flows through the city."
      ]
    },
    image: "/geo-images/switzerland/city-bern.webp"
  },
  {
    id: "city-basel",
    type: "city",
    parent: "country-switzerland",
    coords: [7.5886, 47.5596],
    name: {
      de: "Basel",
      hu: "Bázel",
      ro: "Basel",
      en: "Basel"
    },
    description: {
      de: "Basel liegt im Dreiländereck Schweiz-Deutschland-Frankreich. Die Stadt wird vom Rhein geteilt und ist ein wichtiges Zentrum für die Chemie- und Pharmaindustrie. Sie ist auch für ihre Kunstmuseen bekannt.",
      hu: "Bázel a svájci-német-francia hármashatárnál fekszik. A várost a Rajna osztja ketté, és a vegy- és gyógyszeripar fontos központja. Művészeti múzeumairól is ismert.",
      ro: "Basel este situat la granița dintre Elveția, Germania și Franța. Orașul este împărțit de râul Rin și este un centru important pentru industria chimică și farmaceutică. Este, de asemenea, cunoscut pentru muzeele sale de artă.",
      en: "Basel is located at the borders of Switzerland, Germany, and France. The city is divided by the Rhine river and is a major center for the chemical and pharmaceutical industries. It is also known for its art museums."
    },
    facts: {
      de: [
        "Basel hat die älteste Universität der Schweiz (gegründet 1460).",
        "Die Art Basel ist eine der wichtigsten Kunstmessen der Welt.",
        "Die Basler Fasnacht ist die größte der Schweiz.",
        "Der Rhein ist eine wichtige Wasserstraße für die Stadt."
      ],
      hu: [
        "Bázelben található Svájc legrégebbi egyeteme (1460-ban alapították).",
        "Az Art Basel a világ egyik legfontosabb művészeti vására.",
        "A bázeli karnevál a legnagyobb Svájcban.",
        "A Rajna fontos vízi út a város számára."
      ],
      ro: [
        "Basel are cea mai veche universitate din Elveția (fondată în 1460).",
        "Art Basel este unul dintre cele mai importante târguri de artă din lume.",
        "Carnavalul din Basel este cel mai mare din Elveția.",
        "Rinul este o cale navigabilă importantă pentru oraș."
      ],
      en: [
        "Basel has the oldest university in Switzerland (founded in 1460).",
        "Art Basel is one of the most important art fairs in the world.",
        "The Basel Carnival is the largest in Switzerland.",
        "The Rhine is an important waterway for the city."
      ]
    },
    image: "/geo-images/switzerland/city-basel.webp"
  },
  {
    id: "city-lausanne",
    type: "city",
    parent: "country-switzerland",
    coords: [6.6323, 46.5197],
    name: {
      de: "Lausanne",
      hu: "Lausanne",
      ro: "Lausanne",
      en: "Lausanne"
    },
    description: {
      de: "Lausanne liegt am Genfersee und ist die Hauptstadt des Kantons Waadt. Sie ist als 'Olympische Hauptstadt' bekannt, da hier das Internationale Olympische Komitee (IOC) seinen Sitz hat. Die Stadt ist auf drei Hügeln erbaut.",
      hu: "Lausanne a Genfi-tó partján fekszik, és Vaud kanton fővárosa. 'Olimpiai fővárosként' ismert, mivel itt található a Nemzetközi Olimpiai Bizottság (NOB) székhelye. A város három dombra épült.",
      ro: "Lausanne este situat pe Lacul Geneva și este capitala cantonului Vaud. Este cunoscută drept 'Capitala Olimpică', deoarece găzduiește Comitetul Olimpic Internațional (CIO). Orașul este construit pe trei dealuri.",
      en: "Lausanne is located on Lake Geneva and is the capital of the canton of Vaud. It is known as the 'Olympic Capital' because it hosts the International Olympic Committee (IOC). The city is built on three hills."
    },
    facts: {
      de: [
        "Lausanne beherbergt das Olympische Museum.",
        "Die Stadt hat eine Metro, die einzige in der Schweiz.",
        "Die Kathedrale von Lausanne gilt als das schönste gotische Bauwerk der Schweiz.",
        "Sie ist ein wichtiges Bildungszentrum mit der EPFL."
      ],
      hu: [
        "Lausanne-ban található az Olimpiai Múzeum.",
        "A városnak van metrója, az egyetlen Svájcban.",
        "A lausanne-i katedrálist Svájc legszebb gótikus épületének tartják.",
        "Fontos oktatási központ az EPFL-lel."
      ],
      ro: [
        "Lausanne găzduiește Muzeul Olimpic.",
        "Orașul are un metrou, singurul din Elveția.",
        "Catedrala din Lausanne este considerată cea mai frumoasă clădire gotică din Elveția.",
        "Este un important centru educațional cu EPFL."
      ],
      en: [
        "Lausanne is home to the Olympic Museum.",
        "The city has a metro, the only one in Switzerland.",
        "Lausanne Cathedral is considered the most beautiful Gothic building in Switzerland.",
        "It is an important educational center with the EPFL."
      ]
    },
    image: "/geo-images/switzerland/city-lausanne.webp"
  },
  {
    id: "nature-matterhorn",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.6586, 45.9763],
    name: {
      de: "Matterhorn",
      hu: "Matterhorn",
      ro: "Matterhorn",
      en: "Matterhorn"
    },
    description: {
      de: "Das Matterhorn ist einer der höchsten Berge der Alpen und ein Wahrzeichen der Schweiz. Seine markante Pyramidenform macht ihn zu einem der meistfotografierten Berge der Welt. Er liegt an der Grenze zu Italien.",
      hu: "A Matterhorn az Alpok egyik legmagasabb hegye és Svájc jelképe. Jellegzetes piramis alakja a világ egyik legtöbbet fényképezett hegyévé teszi. Az olasz határon fekszik.",
      ro: "Matterhorn este unul dintre cei mai înalți munți din Alpi și un punct de reper al Elveției. Forma sa piramidală distinctivă îl face unul dintre cei mai fotografiați munți din lume. Este situat la granița cu Italia.",
      en: "The Matterhorn is one of the highest mountains in the Alps and a landmark of Switzerland. Its distinctive pyramidal shape makes it one of the most photographed mountains in the world. It lies on the border with Italy."
    },
    facts: {
      de: [
        "Das Matterhorn ist 4.478 Meter hoch.",
        "Die Erstbesteigung fand 1865 statt.",
        "Zermatt ist das bekannteste Dorf am Fuße des Berges.",
        "Die Form des Berges inspirierte die Toblerone-Schokolade."
      ],
      hu: [
        "A Matterhorn 4478 méter magas.",
        "Az első megmászásra 1865-ben került sor.",
        "Zermatt a legismertebb falu a hegy lábánál.",
        "A hegy alakja ihlette a Toblerone csokoládét."
      ],
      ro: [
        "Matterhorn are o înălțime de 4.478 de metri.",
        "Prima ascensiune a avut loc în 1865.",
        "Zermatt este cel mai faimos sat de la poalele muntelui.",
        "Forma muntelui a inspirat ciocolata Toblerone."
      ],
      en: [
        "The Matterhorn is 4,478 meters high.",
        "The first ascent took place in 1865.",
        "Zermatt is the most famous village at the foot of the mountain.",
        "The shape of the mountain inspired Toblerone chocolate."
      ]
    },
    image: "/geo-images/switzerland/nature-matterhorn.webp"
  },
  {
    id: "city-lucerne",
    type: "city",
    parent: "country-switzerland",
    coords: [8.3093, 47.0502],
    name: {
      de: "Luzern",
      hu: "Luzern",
      ro: "Lucerna",
      en: "Lucerne"
    },
    description: {
      de: "Luzern ist eine Stadt in der Zentralschweiz, gelegen am Vierwaldstättersee. Sie ist bekannt für ihre gut erhaltene mittelalterliche Architektur und die Kapellbrücke. Die Stadt ist von Bergen umgeben.",
      hu: "Luzern egy város Közép-Svájcban, a Vierwaldstätti-tó partján. Jól megőrzött középkori építészetéről és a Kápolna-hídról ismert. A várost hegyek veszik körül.",
      ro: "Lucerna este un oraș din centrul Elveției, situat pe Lacul Lucerna. Este cunoscut pentru arhitectura sa medievală bine conservată și Podul Capelei. Orașul este înconjurat de munți.",
      en: "Lucerne is a city in central Switzerland, located on Lake Lucerne. It is known for its well-preserved medieval architecture and the Chapel Bridge. The city is surrounded by mountains."
    },
    facts: {
      de: [
        "Die Kapellbrücke ist die älteste überdachte Holzbrücke Europas.",
        "Das Löwendenkmal erinnert an die Schweizergarde.",
        "Der Pilatus und die Rigi sind beliebte Ausflugsberge in der Nähe.",
        "Das Verkehrshaus der Schweiz ist das meistbesuchte Museum des Landes."
      ],
      hu: [
        "A Kápolna-híd Európa legrégebbi fedett fahídja.",
        "Az Oroszlán-emlékmű a Svájci Gárdának állít emléket.",
        "A Pilatus és a Rigi népszerű kirándulóhegyek a közelben.",
        "A Svájci Közlekedési Múzeum az ország leglátogatottabb múzeuma."
      ],
      ro: [
        "Podul Capelei este cel mai vechi pod de lemn acoperit din Europa.",
        "Monumentul Leului comemorează Garda Elvețiană.",
        "Pilatus și Rigi sunt munți populari pentru excursii în apropiere.",
        "Muzeul Elvețian al Transporturilor este cel mai vizitat muzeu din țară."
      ],
      en: [
        "The Chapel Bridge is the oldest covered wooden bridge in Europe.",
        "The Lion Monument commemorates the Swiss Guards.",
        "Pilatus and Rigi are popular excursion mountains nearby.",
        "The Swiss Museum of Transport is the most visited museum in the country."
      ]
    },
    image: "/geo-images/switzerland/city-lucerne.webp"
  },
  {
    id: "nature-jungfraujoch",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.9828, 46.5475],
    name: {
      de: "Jungfraujoch",
      hu: "Jungfraujoch",
      ro: "Jungfraujoch",
      en: "Jungfraujoch"
    },
    description: {
      de: "Das Jungfraujoch ist ein Pass zwischen den Bergen Mönch und Jungfrau. Es wird oft als 'Top of Europe' bezeichnet, da sich hier der höchste Bahnhof Europas befindet. Es bietet spektakuläre Ausblicke auf den Aletschgletscher.",
      hu: "A Jungfraujoch egy hágó a Mönch és a Jungfrau hegyek között. Gyakran 'Európa tetejének' nevezik, mivel itt található Európa legmagasabban fekvő vasútállomása. Látványos kilátást nyújt az Aletsch-gleccserre.",
      ro: "Jungfraujoch este o trecătoare între munții Mönch și Jungfrau. Este adesea numit 'Top of Europe', deoarece aici se află cea mai înaltă gară din Europa. Oferă vederi spectaculoase ale ghețarului Aletsch.",
      en: "The Jungfraujoch is a pass between the Mönch and Jungfrau mountains. It is often called the 'Top of Europe' because it is home to the highest railway station in Europe. It offers spectacular views of the Aletsch Glacier."
    },
    facts: {
      de: [
        "Der Bahnhof liegt auf 3.454 Metern Höhe.",
        "Die Jungfraubahn wurde 1912 eröffnet.",
        "Hier befindet sich das Sphinx-Observatorium.",
        "Der Aletschgletscher ist der größte Gletscher der Alpen."
      ],
      hu: [
        "A vasútállomás 3454 méter magasan található.",
        "A Jungfrau-vasutat 1912-ben nyitották meg.",
        "Itt található a Szfinx Obszervatórium.",
        "Az Aletsch-gleccser az Alpok legnagyobb gleccsere."
      ],
      ro: [
        "Gara este situată la o altitudine de 3.454 de metri.",
        "Calea ferată Jungfrau a fost deschisă în 1912.",
        "Aici se află Observatorul Sfinx.",
        "Ghețarul Aletsch este cel mai mare ghețar din Alpi."
      ],
      en: [
        "The railway station is located at an altitude of 3,454 meters.",
        "The Jungfrau Railway was opened in 1912.",
        "The Sphinx Observatory is located here.",
        "The Aletsch Glacier is the largest glacier in the Alps."
      ]
    },
    image: "/geo-images/switzerland/nature-jungfraujoch.webp"
  }
];

export const switzerlandAllPoi: POI[] = [
  switzerlandCountry,
  ...switzerlandRegions
];
