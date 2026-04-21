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

export const switzerlandCities: POI[] = [
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
      de: "Zürich ist die größte Stadt der Schweiz und ein wichtiges Finanzzentrum. Die Bahnhofstrasse ist weltweit bekannt. Die Stadt liegt am Zürichsee und verbindet Wirtschaft mit hoher Lebensqualität.",
      hu: "Zürich Svájc legnagyobb városa és fontos pénzügyi központja. A Bahnhofstrasse világszerte ismert. A város a Zürichi-tó partján fekszik, és az üzleti életet magas életminőséggel ötvözi.",
      ro: "Zürich este cel mai mare oraș din Elveția și un centru financiar important. Bahnhofstrasse este cunoscută în toată lumea. Orașul se află pe malul lacului Zürich și îmbină economia cu o calitate foarte bună a vieții.",
      en: "Zurich is the largest city in Switzerland and an important financial center. Bahnhofstrasse is known worldwide. The city lies on Lake Zurich and combines business with a high quality of life."
    },
    facts: {
      de: [
        "Zürich ist die größte Stadt der Schweiz.",
        "Die Bahnhofstrasse zählt zu den bekanntesten Einkaufsstraßen Europas.",
        "Die Stadt liegt am Zürichsee.",
        "Sie ist ein Zentrum für Banken, Versicherungen und Start-ups."
      ],
      hu: [
        "Zürich Svájc legnagyobb városa.",
        "A Bahnhofstrasse Európa egyik legismertebb bevásárlóutcája.",
        "A város a Zürichi-tó partján fekszik.",
        "Bankok, biztosítók és startupok központja."
      ],
      ro: [
        "Zürich este cel mai mare oraș din Elveția.",
        "Bahnhofstrasse este una dintre cele mai cunoscute artere comerciale din Europa.",
        "Orașul se află pe lacul Zürich.",
        "Este un centru pentru bănci, asigurări și startup-uri."
      ],
      en: [
        "Zurich is the largest city in Switzerland.",
        "Bahnhofstrasse is one of Europe's best-known shopping streets.",
        "The city lies on Lake Zurich.",
        "It is a center for banks, insurers, and startups."
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
      de: "Genf ist eine internationale Stadt am Genfersee und ein wichtiges diplomatisches Zentrum. Hier befinden sich viele Organisationen der Vereinten Nationen. Die Stadt ist stark vom Französischen geprägt.",
      hu: "Genf nemzetközi város a Genfi-tó partján, és fontos diplomáciai központ. Számos ENSZ-szervezet működik itt. A város erősen francia nyelvi és kulturális hatás alatt áll.",
      ro: "Geneva este un oraș internațional pe malul Lacului Geneva și un centru diplomatic important. Aici se află numeroase organizații ale Națiunilor Unite. Orașul este puternic influențat de limba și cultura franceză.",
      en: "Geneva is an international city on Lake Geneva and an important diplomatic center. Many United Nations organizations are based here. The city is strongly shaped by the French language and culture."
    },
    facts: {
      de: [
        "Genf ist ein globales diplomatisches Zentrum.",
        "Viele UNO-Institutionen haben dort ihren Sitz.",
        "Die Stadt liegt am Genfersee.",
        "Französisch ist die Hauptsprache der Region."
      ],
      hu: [
        "Genf globális diplomáciai központ.",
        "Számos ENSZ-intézmény székhelye itt található.",
        "A város a Genfi-tó partján fekszik.",
        "A régió fő nyelve a francia."
      ],
      ro: [
        "Geneva este un centru diplomatic global.",
        "Numeroase instituții ale ONU au sediul acolo.",
        "Orașul se află pe malul Lacului Geneva.",
        "Franceza este limba principală a regiunii."
      ],
      en: [
        "Geneva is a global diplomatic center.",
        "Many UN institutions are headquartered there.",
        "The city lies on Lake Geneva.",
        "French is the main language of the region."
      ]
    },
    image: "/geo-images/switzerland/city-geneva.webp"
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
      de: "Basel ist eine Kulturstadt am Rhein im Dreiländereck der Schweiz, Deutschlands und Frankreichs. Sie ist für Museen, Kunst und Architektur bekannt. Die Stadt hat eine lebendige Altstadt und eine starke Messekultur.",
      hu: "Bázel kulturális város a Rajna partján, Svájc, Németország és Franciaország találkozásánál. Múzeumairól, művészetéről és építészetéről ismert. Élő történelmi belvárosa és erős vásári hagyománya van.",
      ro: "Basel este un oraș cultural pe Rin, la granița dintre Elveția, Germania și Franța. Este cunoscut pentru muzee, artă și arhitectură. Orașul are un centru vechi vibrant și o puternică tradiție a târgurilor.",
      en: "Basel is a cultural city on the Rhine at the meeting point of Switzerland, Germany, and France. It is known for museums, art, and architecture. The city has a lively old town and a strong fair tradition."
    },
    facts: {
      de: [
        "Basel liegt am Rhein.",
        "Das Kunstmuseum Basel gehört zu den wichtigsten Museen der Schweiz.",
        "Die Stadt liegt im Dreiländereck.",
        "Sie ist ein Zentrum für Kunstmessen und Pharmaunternehmen."
      ],
      hu: [
        "Bázel a Rajna partján fekszik.",
        "A Kunstmuseum Basel Svájc egyik legfontosabb múzeuma.",
        "A város három ország határán helyezkedik el.",
        "A művészeti vásárok és a gyógyszeripar központja."
      ],
      ro: [
        "Basel se află pe Rin.",
        "Kunstmuseum Basel este unul dintre cele mai importante muzee din Elveția.",
        "Orașul se află la întâlnirea a trei țări.",
        "Este un centru pentru târguri de artă și companii farmaceutice."
      ],
      en: [
        "Basel lies on the Rhine.",
        "Kunstmuseum Basel is one of Switzerland's most important museums.",
        "The city sits at the tri-border area.",
        "It is a center for art fairs and pharmaceutical companies."
      ]
    },
    image: "/geo-images/switzerland/city-basel.webp"
  },
  {
    id: "city-bern",
    type: "city",
    parent: "country-switzerland",
    coords: [7.4474, 46.9481],
    name: {
      de: "Bern",
      hu: "Bern",
      ro: "Berna",
      en: "Bern"
    },
    description: {
      de: "Bern ist die Hauptstadt der Schweiz und bekannt für ihre gut erhaltene Altstadt. Das historische Zentrum gehört zum UNESCO-Welterbe. Die Stadt ist eng mit Albert Einstein verbunden.",
      hu: "Bern Svájc fővárosa, és jól megőrzött óvárosáról ismert. A történelmi belváros az UNESCO Világörökség része. A város szorosan kapcsolódik Albert Einsteinhez.",
      ro: "Berna este capitala Elveției și este cunoscută pentru centrul său vechi bine conservat. Centrul istoric face parte din patrimoniul mondial UNESCO. Orașul este strâns legat de Albert Einstein.",
      en: "Bern is the capital of Switzerland and is known for its well-preserved old town. The historic center is part of the UNESCO World Heritage list. The city is closely associated with Albert Einstein."
    },
    facts: {
      de: [
        "Bern ist die Bundesstadt der Schweiz.",
        "Die Altstadt gehört zum UNESCO-Welterbe.",
        "Albert Einstein lebte und arbeitete hier.",
        "Die Zytglogge ist eines der bekanntesten Wahrzeichen."
      ],
      hu: [
        "Bern Svájc szövetségi fővárosa.",
        "Az óváros az UNESCO Világörökség része.",
        "Albert Einstein itt élt és dolgozott.",
        "A Zytglogge a legismertebb látnivalók egyike."
      ],
      ro: [
        "Berna este orașul federal al Elveției.",
        "Centrul vechi face parte din patrimoniul mondial UNESCO.",
        "Albert Einstein a trăit și a lucrat aici.",
        "Zytglogge este unul dintre cele mai cunoscute repere."
      ],
      en: [
        "Bern is the federal city of Switzerland.",
        "The old town is a UNESCO World Heritage site.",
        "Albert Einstein lived and worked here.",
        "The Zytglogge is one of the best-known landmarks."
      ]
    },
    image: "/geo-images/switzerland/city-bern.webp"
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
      de: "Lausanne liegt am Nordufer des Genfersees und ist als olympische Stadt bekannt. Hier befindet sich das Internationale Olympische Komitee. Die Stadt verbindet Seeblick, Kultur und Hochschulleben.",
      hu: "Lausanne a Genfi-tó északi partján fekszik, és olimpiai városként ismert. Itt található a Nemzetközi Olimpiai Bizottság. A város a tóparti panorámát, a kultúrát és az egyetemi életet ötvözi.",
      ro: "Lausanne se află pe malul nordic al Lacului Geneva și este cunoscută drept oraș olimpic. Aici se află Comitetul Internațional Olimpic. Orașul combină priveliștea spre lac, cultura și viața universitară.",
      en: "Lausanne lies on the northern shore of Lake Geneva and is known as an Olympic city. The International Olympic Committee is based here. The city combines lake views, culture, and university life."
    },
    facts: {
      de: [
        "Lausanne ist Sitz des Internationalen Olympischen Komitees.",
        "Die Stadt liegt am Genfersee.",
        "Sie hat einen starken Hochschul- und Kultursektor.",
        "Lausanne ist bekannt für steile Hänge und U-Bahn-Linien."
      ],
      hu: [
        "Lausanne a Nemzetközi Olimpiai Bizottság székhelye.",
        "A város a Genfi-tó partján fekszik.",
        "Erős az egyetemi és kulturális élete.",
        "Meredek dombjai és metróvonala ismert."
      ],
      ro: [
        "Lausanne găzduiește Comitetul Internațional Olimpic.",
        "Orașul se află pe Lacul Geneva.",
        "Are un sector universitar și cultural puternic.",
        "Este cunoscut pentru pantele abrupte și liniile de metrou."
      ],
      en: [
        "Lausanne is home to the International Olympic Committee.",
        "The city lies on Lake Geneva.",
        "It has a strong university and cultural scene.",
        "It is known for steep hills and metro lines."
      ]
    },
    image: "/geo-images/switzerland/city-lausanne.webp"
  }
];

export const switzerlandCulture: POI[] = [
  {
    id: "cult-bern-altstadt",
    type: "culture",
    parent: "country-switzerland",
    coords: [7.4474, 46.9481],
    name: {
      de: "Berner Altstadt",
      hu: "Bern óvárosa",
      ro: "Centrul vechi din Berna",
      en: "Bern Old Town"
    },
    description: {
      de: "Die Berner Altstadt ist ein außergewöhnlich gut erhaltenes mittelalterliches Stadtzentrum. Der Zytglogge-Turm ist eines ihrer bekanntesten Symbole. Das Gebiet gehört zum UNESCO-Welterbe.",
      hu: "Bern óvárosa kivételesen jól megőrzött középkori városközpont. A Zytglogge torony az egyik legismertebb jelképe. A terület az UNESCO Világörökség része.",
      ro: "Centrul vechi din Berna este un centru medieval extraordinar de bine conservat. Turnul Zytglogge este unul dintre cele mai cunoscute simboluri ale sale. Zona face parte din patrimoniul mondial UNESCO.",
      en: "Bern Old Town is an exceptionally well-preserved medieval city center. The Zytglogge tower is one of its best-known symbols. The area is a UNESCO World Heritage site."
    },
    facts: {
      de: [
        "Die Altstadt ist UNESCO-Welterbe.",
        "Die Laubengänge prägen das Stadtbild.",
        "Der Zytglogge-Turm ist ein Wahrzeichen.",
        "Viele Straßen stammen aus dem Mittelalter."
      ],
      hu: [
        "Az óváros UNESCO Világörökség.",
        "Az árkádos sétálófolyosók meghatározzák a városképet.",
        "A Zytglogge torony a város jelképe.",
        "Sok utca a középkorból származik."
      ],
      ro: [
        "Centrul vechi este patrimoniu mondial UNESCO.",
        "Pasajele cu arcade definesc aspectul orașului.",
        "Turnul Zytglogge este un simbol al orașului.",
        "Multe străzi datează din Evul Mediu."
      ],
      en: [
        "The old town is a UNESCO World Heritage site.",
        "The arcaded walkways define the cityscape.",
        "The Zytglogge tower is a landmark.",
        "Many streets date back to the Middle Ages."
      ]
    },
    image: "/geo-images/switzerland/cult-bern-altstadt.webp"
  },
  {
    id: "cult-rhaetian-railway",
    type: "culture",
    parent: "country-switzerland",
    coords: [10.0, 46.4],
    name: {
      de: "Rhätische Bahn Bernina",
      hu: "Rhaetian Railway Bernina",
      ro: "Calea ferată retică Bernina",
      en: "Rhaetian Railway Bernina"
    },
    description: {
      de: "Die Rhätische Bahn auf der Berninastrecke ist eine spektakuläre Gebirgsbahn in den Alpen. Sie verbindet beeindruckende Ingenieurskunst mit Landschaften von großer Schönheit. Der Abschnitt gehört zum UNESCO-Welterbe.",
      hu: "A Bernina-szakaszon futó Rhätische Bahn látványos hegyi vasút az Alpokban. Az inženieria és a táj szépsége itt különösen erősen találkozik. Ez a szakasz az UNESCO Világörökség része.",
      ro: "Calea ferată retică de pe traseul Bernina este o linie montană spectaculoasă din Alpi. Ea combină ingineria impresionantă cu peisaje de mare frumusețe. Secțiunea face parte din patrimoniul mondial UNESCO.",
      en: "The Rhaetian Railway on the Bernina route is a spectacular mountain railway in the Alps. It combines impressive engineering with landscapes of great beauty. The section is part of the UNESCO World Heritage list."
    },
    facts: {
      de: [
        "Die Berninastrecke gehört zum UNESCO-Welterbe.",
        "Sie verbindet die Schweiz mit spektakulären Alpenpässen.",
        "Die Bahn gilt als Meisterwerk der Ingenieurkunst.",
        "Die Strecke ist bei Touristen sehr beliebt."
      ],
      hu: [
        "A Bernina-szakasz az UNESCO Világörökség része.",
        "Látványos alpesi hágókon halad át.",
        "A vasút a mérnöki munka mesterművének számít.",
        "A vonal nagyon népszerű a turisták körében."
      ],
      ro: [
        "Traseul Bernina face parte din patrimoniul mondial UNESCO.",
        "Traversează trecători alpine spectaculoase.",
        "Linia este considerată o capodoperă inginerească.",
        "Este foarte populară printre turiști."
      ],
      en: [
        "The Bernina route is a UNESCO World Heritage site.",
        "It crosses spectacular Alpine passes.",
        "The railway is considered an engineering masterpiece.",
        "The line is very popular with tourists."
      ]
    },
    image: "/geo-images/switzerland/cult-rhaetian-railway.webp"
  },
  {
    id: "cult-chillon",
    type: "culture",
    parent: "country-switzerland",
    coords: [6.9275, 46.4143],
    name: {
      de: "Schloss Chillon",
      hu: "Chillon-kastély",
      ro: "Castelul Chillon",
      en: "Chillon Castle"
    },
    description: {
      de: "Schloss Chillon liegt malerisch am Ufer des Genfersees bei Montreux. Die Wasserburg ist eines der bekanntesten historischen Bauwerke der Schweiz. Lord Byron machte sie durch ein Gedicht berühmt.",
      hu: "A Chillon-kastély festői helyen, Montreux közelében, a Genfi-tó partján áll. A vízi vár Svájc egyik legismertebb történelmi épülete. Lord Byron egy verssel tette híressé.",
      ro: "Castelul Chillon se află pitoresc pe malul Lacului Geneva, lângă Montreux. Castelul de apă este una dintre cele mai cunoscute clădiri istorice din Elveția. Lord Byron l-a făcut celebru printr-o poezie.",
      en: "Chillon Castle sits picturesquely on the shore of Lake Geneva near Montreux. The water castle is one of Switzerland's best-known historic buildings. Lord Byron made it famous with a poem."
    },
    facts: {
      de: [
        "Chillon liegt direkt am Genfersee.",
        "Es ist eine der meistbesuchten Sehenswürdigkeiten der Schweiz.",
        "Lord Byron schrieb ein bekanntes Gedicht über das Schloss.",
        "Die Burg war über Jahrhunderte eine strategische Festung."
      ],
      hu: [
        "Chillon közvetlenül a Genfi-tó partján áll.",
        "Svájc egyik leglátogatottabb látnivalója.",
        "Lord Byron híres verset írt a kastélyról.",
        "A vár évszázadokon át stratégiai erőd volt."
      ],
      ro: [
        "Chillon se află direct pe malul Lacului Geneva.",
        "Este una dintre cele mai vizitate atracții din Elveția.",
        "Lord Byron a scris o poezie celebră despre castel.",
        "Cetatea a fost timp de secole o fortăreață strategică."
      ],
      en: [
        "Chillon sits directly on Lake Geneva.",
        "It is one of Switzerland's most visited attractions.",
        "Lord Byron wrote a famous poem about the castle.",
        "The fortress was a strategic stronghold for centuries."
      ]
    },
    image: "/geo-images/switzerland/cult-chillon.webp"
  },
  {
    id: "cult-pilatus",
    type: "culture",
    parent: "country-switzerland",
    coords: [8.2529, 46.979],
    name: {
      de: "Pilatus",
      hu: "Pilatus",
      ro: "Pilatus",
      en: "Mount Pilatus"
    },
    description: {
      de: "Der Pilatus über Luzern ist ein bekannter Ausflugsberg mit spektakulären Ausblicken. Die Zahnradbahn gilt als eine der steilsten der Welt. Der Berg ist eng mit regionalen Sagen verbunden.",
      hu: "A Luzern fölé magasodó Pilatus híres kirándulóhegy látványos kilátással. A fogaskerekű vasút a világ egyik legmeredekebbje. A hegyet számos helyi legenda övezi.",
      ro: "Pilatusul deasupra orașului Lucerna este un munte de excursie bine cunoscut, cu priveliști spectaculoase. Funicularul cu roți dințate este considerat unul dintre cele mai abrupte din lume. Muntele este legat de numeroase legende locale.",
      en: "Mount Pilatus above Lucerne is a well-known excursion mountain with spectacular views. The cogwheel railway is considered one of the steepest in the world. The mountain is tied to many local legends."
    },
    facts: {
      de: [
        "Die Zahnradbahn zählt zu den steilsten der Welt.",
        "Pilatus liegt oberhalb von Luzern.",
        "Der Berg ist von Sagen umgeben.",
        "Er ist ein beliebtes Ausflugsziel."
      ],
      hu: [
        "A fogaskerekű a világ egyik legmeredekebbje.",
        "A Pilatus Luzern fölött található.",
        "A hegyet legendák övezik.",
        "Népszerű kirándulóhely."
      ],
      ro: [
        "Linia cu roți dințate este una dintre cele mai abrupte din lume.",
        "Pilatusul se află deasupra orașului Lucerna.",
        "Muntele este înconjurat de legende.",
        "Este o destinație populară pentru excursii."
      ],
      en: [
        "The cogwheel railway is among the steepest in the world.",
        "Pilatus is located above Lucerne.",
        "The mountain is surrounded by legends.",
        "It is a popular excursion destination."
      ]
    },
    image: "/geo-images/switzerland/cult-pilatus.webp"
  },
  {
    id: "cult-cern",
    type: "culture",
    parent: "country-switzerland",
    coords: [6.0554, 46.2333],
    name: {
      de: "CERN",
      hu: "CERN",
      ro: "CERN",
      en: "CERN"
    },
    description: {
      de: "CERN bei Genf ist eines der bedeutendsten Forschungszentren der Welt. Hier befindet sich der Large Hadron Collider, der größte Teilchenbeschleuniger der Erde. Das Zentrum ist eng mit der modernen Physik verbunden.",
      hu: "A Genf melletti CERN a világ egyik legfontosabb kutatóközpontja. Itt található a Large Hadron Collider, a Föld legnagyobb részecskegyorsítója. A központ szorosan kapcsolódik a modern fizikához.",
      ro: "CERN-ul de lângă Geneva este unul dintre cele mai importante centre de cercetare din lume. Aici se află Large Hadron Collider, cel mai mare accelerator de particule de pe Pământ. Centrul este strâns legat de fizica modernă.",
      en: "CERN near Geneva is one of the world's most important research centers. It is home to the Large Hadron Collider, the largest particle accelerator on Earth. The center is closely linked to modern physics."
    },
    facts: {
      de: [
        "Am CERN wurde das World Wide Web mitentwickelt.",
        "Der Large Hadron Collider ist der größte Teilchenbeschleuniger der Welt.",
        "Das Forschungszentrum liegt bei Genf.",
        "Es ist ein Symbol für internationale Wissenschaft."
      ],
      hu: [
        "A CERN-ben a World Wide Web is fejlődött.",
        "A Large Hadron Collider a világ legnagyobb részecskegyorsítója.",
        "A kutatóközpont Genf mellett található.",
        "A nemzetközi tudomány jelképe."
      ],
      ro: [
        "La CERN s-a dezvoltat și World Wide Web-ul.",
        "Large Hadron Collider este cel mai mare accelerator de particule din lume.",
        "Centrul de cercetare se află lângă Geneva.",
        "Este un simbol al științei internaționale."
      ],
      en: [
        "The World Wide Web was developed at CERN.",
        "The Large Hadron Collider is the world's largest particle accelerator.",
        "The research center is located near Geneva.",
        "It is a symbol of international science."
      ]
    },
    image: "/geo-images/switzerland/cult-cern.webp"
  }
];

export const switzerlandNature: POI[] = [
  {
    id: "nat-matterhorn",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.6585, 45.9763],
    name: {
      de: "Matterhorn",
      hu: "Matterhorn",
      ro: "Matterhorn",
      en: "Matterhorn"
    },
    description: {
      de: "Das Matterhorn bei Zermatt ist einer der ikonischsten Berge der Alpen. Seine pyramidenförmige Silhouette ist weltweit bekannt. Der Berg ist ein Symbol für die Schweiz.",
      hu: "A zermatti Matterhorn az Alpok egyik legikonikusabb hegye. Piramis alakú sziluettje világszerte ismert. A hegy Svájc egyik jelképe.",
      ro: "Matterhornul de lângă Zermatt este unul dintre cei mai iconici munți ai Alpilor. Silueta sa piramidală este cunoscută în întreaga lume. Muntele este un simbol al Elveției.",
      en: "The Matterhorn near Zermatt is one of the Alps' most iconic mountains. Its pyramid-shaped silhouette is known worldwide. The mountain is a symbol of Switzerland."
    },
    facts: {
      de: [
        "Das Matterhorn ist 4.478 Meter hoch.",
        "Die Form inspirierte die Toblerone-Verpackung.",
        "Zermatt liegt am Fuß des Berges.",
        "Er ist ein Klassiker des Alpinismus."
      ],
      hu: [
        "A Matterhorn 4478 méter magas.",
        "Az alakja ihlette a Toblerone csomagolását.",
        "Zermatt a hegy lábánál fekszik.",
        "Az alpinizmus klasszikus célpontja."
      ],
      ro: [
        "Matterhornul are 4.478 de metri înălțime.",
        "Forma sa a inspirat ambalajul Toblerone.",
        "Zermatt se află la poalele muntelui.",
        "Este o destinație clasică pentru alpinism."
      ],
      en: [
        "The Matterhorn is 4,478 meters high.",
        "Its shape inspired Toblerone packaging.",
        "Zermatt lies at the mountain's foot.",
        "It is a classic mountaineering destination."
      ]
    },
    image: "/geo-images/switzerland/nat-matterhorn.webp"
  },
  {
    id: "nat-jungfraujoch",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.9801, 46.5474],
    name: {
      de: "Jungfraujoch",
      hu: "Jungfraujoch",
      ro: "Jungfraujoch",
      en: "Jungfraujoch"
    },
    description: {
      de: "Das Jungfraujoch wird oft als Top of Europe bezeichnet. Hier liegt der höchstgelegene Bahnhof Europas. Die Lage bietet eindrucksvolle Ausblicke auf Eis und Fels.",
      hu: "A Jungfraujochot gyakran Európa tetejének nevezik. Itt található Európa legmagasabban fekvő vasútállomása. A hely lenyűgöző kilátást nyújt jégre és sziklára.",
      ro: "Jungfraujoch este adesea numit Top of Europe. Aici se află cea mai înaltă gară din Europa. Locul oferă priveliști impresionante spre gheață și stâncă.",
      en: "Jungfraujoch is often called the Top of Europe. It is home to the highest railway station in Europe. The location offers striking views of ice and rock."
    },
    facts: {
      de: [
        "Hier liegt der höchstgelegene Bahnhof Europas.",
        "Der Ort wird oft als Top of Europe bezeichnet.",
        "Er bietet Blick auf den Aletschgletscher.",
        "Die Jungfraubahn erreicht den Pass."
      ],
      hu: [
        "Itt található Európa legmagasabban fekvő vasútállomása.",
        "A helyet gyakran Európa tetejének nevezik.",
        "Kilátás nyílik az Aletsch-gleccserre.",
        "A Jungfrau-vasút éri el a hágót."
      ],
      ro: [
        "Aici se află cea mai înaltă gară din Europa.",
        "Locul este adesea numit Top of Europe.",
        "Oferă vedere spre ghețarul Aletsch.",
        "Calea ferată Jungfrau ajunge până aici."
      ],
      en: [
        "This is the highest railway station in Europe.",
        "The place is often called Top of Europe.",
        "It overlooks the Aletsch Glacier.",
        "The Jungfrau Railway reaches the pass."
      ]
    },
    image: "/geo-images/switzerland/nat-jungfraujoch.webp"
  },
  {
    id: "nat-lucerne",
    type: "nature",
    parent: "country-switzerland",
    coords: [8.3057, 47.0502],
    name: {
      de: "Vierwaldstättersee",
      hu: "Vierwaldstättersee",
      ro: "Lacul Lucerna",
      en: "Lake Lucerne"
    },
    description: {
      de: "Der Vierwaldstättersee bei Luzern ist einer der schönsten Seen der Schweiz. Er ist von Bergen umgeben und eng mit der Geschichte der Eidgenossenschaft verbunden. Die Kapellbrücke ergänzt das Stadtbild von Luzern.",
      hu: "A luzerni Vierwaldstättersee Svájc egyik legszebb tava. Hegyek veszik körül, és szorosan kapcsolódik a svájci államalapítás történetéhez. A Kapellbrücke jól kiegészíti Luzern városképét.",
      ro: "Lacul Lucerna de lângă Luzern este unul dintre cele mai frumoase lacuri din Elveția. Este înconjurat de munți și este strâns legat de istoria Confederației Elvețiene. Kapellbrücke completează peisajul urban al orașului Lucerna.",
      en: "Lake Lucerne near Lucerne is one of the most beautiful lakes in Switzerland. It is surrounded by mountains and is closely tied to the history of the Swiss Confederation. The Chapel Bridge complements Lucerne's cityscape."
    },
    facts: {
      de: [
        "Der See liegt bei Luzern.",
        "Er ist von Bergen umgeben.",
        "Die Kapellbrücke prägt das Uferbild.",
        "Der See ist ein beliebtes Ziel für Schifffahrten."
      ],
      hu: [
        "A tó Luzern mellett található.",
        "Hegyek veszik körül.",
        "A Kapellbrücke meghatározza a városképet.",
        "Népszerű hajókirándulási célpont."
      ],
      ro: [
        "Lacul se află lângă Lucerna.",
        "Este înconjurat de munți.",
        "Kapellbrücke definește imaginea malului.",
        "Este o destinație populară pentru croaziere."
      ],
      en: [
        "The lake lies by Lucerne.",
        "It is surrounded by mountains.",
        "The Chapel Bridge shapes the waterfront view.",
        "It is a popular destination for boat trips."
      ]
    },
    image: "/geo-images/switzerland/nat-lucerne.webp"
  },
  {
    id: "nat-lauterbrunnen",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.9083, 46.5936],
    name: {
      de: "Lauterbrunnental",
      hu: "Lauterbrunnen-völgy",
      ro: "Valea Lauterbrunnen",
      en: "Lauterbrunnen Valley"
    },
    description: {
      de: "Das Lauterbrunnental ist ein dramatisches Alpental mit steilen Felswänden und vielen Wasserfällen. Der Staubbachfall ist besonders bekannt. Das Tal ist ein Symbol für die Berner Alpen.",
      hu: "A Lauterbrunnen-völgy drámai alpesi völgy meredek sziklafalakkal és sok vízeséssel. A Staubbach-vízesés különösen híres. A völgy a Berni-Alpok jelképe.",
      ro: "Valea Lauterbrunnen este o vale alpină spectaculoasă, cu pereți stâncoși abrupți și multe cascade. Cascada Staubbach este deosebit de cunoscută. Valea este un simbol al Alpilor Bernezi.",
      en: "The Lauterbrunnen Valley is a dramatic Alpine valley with steep cliffs and many waterfalls. Staubbach Falls is especially famous. The valley is a symbol of the Bernese Alps."
    },
    facts: {
      de: [
        "Das Tal ist für seine vielen Wasserfälle bekannt.",
        "Der Staubbachfall ist etwa 300 Meter hoch.",
        "Lauterbrunnen liegt in den Berner Alpen.",
        "Die Landschaft inspirierte viele Künstler."
      ],
      hu: [
        "A völgy sok vízeséséről híres.",
        "A Staubbach-vízesés körülbelül 300 méter magas.",
        "Lauterbrunnen a Berni-Alpokban található.",
        "A táj sok művészt inspirált."
      ],
      ro: [
        "Valea este cunoscută pentru numeroasele sale cascade.",
        "Cascada Staubbach are aproximativ 300 de metri.",
        "Lauterbrunnen se află în Alpii Bernezi.",
        "Peisajul a inspirat mulți artiști."
      ],
      en: [
        "The valley is known for its many waterfalls.",
        "Staubbach Falls is about 300 meters high.",
        "Lauterbrunnen lies in the Bernese Alps.",
        "The landscape has inspired many artists."
      ]
    },
    image: "/geo-images/switzerland/nat-lauterbrunnen.webp"
  },
  {
    id: "nat-interlaken",
    type: "nature",
    parent: "country-switzerland",
    coords: [7.8637, 46.6863],
    name: {
      de: "Interlaken",
      hu: "Interlaken",
      ro: "Interlaken",
      en: "Interlaken"
    },
    description: {
      de: "Interlaken liegt zwischen dem Thunersee und dem Brienzersee. Der Ort ist ein Zentrum für Outdoor-Aktivitäten und Paragliding. Die Lage macht ihn zu einem beliebten Ausgangspunkt für Ausflüge in die Alpen.",
      hu: "Interlaken a Thuni-tó és a Brienzi-tó között fekszik. A település az outdoor-programok és a siklóernyőzés központja. Elhelyezkedése miatt népszerű alpesi kirándulóhely.",
      ro: "Interlaken se află între Lacul Thun și Lacul Brienz. Localitatea este un centru pentru activități în aer liber și parapantă. Poziția sa o face un punct de plecare popular pentru excursii în Alpi.",
      en: "Interlaken lies between Lake Thun and Lake Brienz. The town is a center for outdoor activities and paragliding. Its location makes it a popular base for Alpine excursions."
    },
    facts: {
      de: [
        "Interlaken liegt zwischen zwei Seen.",
        "Der Ort ist ein Zentrum für Paragliding.",
        "Er ist ein beliebter Ausgangspunkt für Alpentouren.",
        "Die Lage macht ihn touristisch sehr attraktiv."
      ],
      hu: [
        "Interlaken két tó között fekszik.",
        "A siklóernyőzés központja.",
        "Népszerű alpesi túrák kiindulópontja.",
        "Az elhelyezkedése miatt nagyon vonzó turisztikai célpont."
      ],
      ro: [
        "Interlaken se află între două lacuri.",
        "Este un centru pentru parapantă.",
        "Este un punct de plecare popular pentru tururi alpine.",
        "Poziția sa îl face foarte atractiv turistic."
      ],
      en: [
        "Interlaken lies between two lakes.",
        "It is a center for paragliding.",
        "It is a popular base for Alpine tours.",
        "Its location makes it highly attractive to tourists."
      ]
    },
    image: "/geo-images/switzerland/nat-interlaken.webp"
  }
];

export const switzerlandAllPoi: POI[] = [
  switzerlandCountry,
  ...switzerlandRegions,
  ...switzerlandCities,
  ...switzerlandCulture,
  ...switzerlandNature
];
