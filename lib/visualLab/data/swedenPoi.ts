import type { POI } from "./poi";

export const swedenCountry: POI = {
  id: "sweden",
  type: "country",
  parent: "EU",
  coords: [18.0686, 59.3293],
  name: { de: "Schweden", hu: "Svédország", ro: "Suedia", en: "Sweden" },
  description: {
    en: "Sweden is a Scandinavian nation in Northern Europe, known for its vast forests, thousands of coastal islands, and inland lakes. It is a country of striking natural beauty, from the frozen landscapes of the Arctic North to the fertile plains of the South. Sweden is famous for its commitment to social welfare, innovation, and sustainability. Its rich history spans from the Viking Age to its role as a modern, peaceful, and technologically advanced society.",
    de: "Schweden ist eine skandinavische Nation in Nordeuropa, bekannt für seine weiten Wälder, Tausende von Küsteninseln und Binnenseen. Es ist ein Land von beeindruckender natürlicher Schönheit, von den gefrorenen Landschaften des arktischen Nordens bis zu den fruchtbaren Ebenen des Südens. Schweden ist berühmt für sein Engagement für soziale Wohlfahrt, Innovation und Nachhaltigkeit. Seine reiche Geschichte reicht von der Wikingerzeit bis zu seiner Rolle als moderne, friedliche und technologisch fortgeschrittene Gesellschaft.",
    hu: "Svédország egy skandináv nemzet Észak-Európában, amely hatalmas erdőiről, több ezer tengerparti szigetéről és belső tavairól ismert. Lenyűgöző természeti szépségű ország, az északi sarkvidék fagyos tájaitól a déli termékeny síkságokig. Svédország híres a jóléti állam, az innováció és a fenntarthatóság iránti elkötelezettségéről. Gazdag történelme a viking kortól a modern, békés és technológiailag fejlett társadalomig terjed.",
    ro: "Suedia este o națiune scandinavă din Europa de Nord, cunoscută pentru pădurile sale vaste, mii de insule de coastă și lacuri interioare. Este o țară de o frumusețe naturală izbitoare, de la peisajele înghețate ale Nordului Arctic până la câmpiile fertile din Sud. Suedia este faimoasă pentru angajamentul său față de bunăstarea socială, inovație și sustenabilitate. Istoria sa bogată se întinde de la Epoca Vikingă până la rolul său de societate modernă, pașnică și avansată tehnologic."
  },
  facts: {
    en: [
      "Sweden is the largest country in Northern Europe by area.",
      "The country has over 260,000 islands, the most of any country in the world.",
      "Sweden was the first country in the world to ban corporal punishment of children in 1979.",
      "The Nobel Prize ceremonies are held annually in Stockholm (except for the Peace Prize).",
      "Sweden imports waste from other countries to fuel its waste-to-energy plants.",
      "Abba, IKEA, and Spotify are some of Sweden's most famous global exports."
    ],
    de: [
      "Schweden ist flächenmäßig das größte Land Nordeuropas.",
      "Das Land hat über 260.000 Inseln, mehr als jedes andere Land der Welt.",
      "Schweden war 1979 das erste Land der Welt, das die körperliche Züchtigung von Kindern verbot.",
      "Die Nobelpreisverleihungen finden jährlich in Stockholm statt (außer dem Friedensnobelpreis).",
      "Schweden importiert Abfälle aus anderen Ländern, um seine Müllverbrennungsanlagen zu befeuern.",
      "Abba, IKEA und Spotify sind einige der bekanntesten globalen Exporte Schwedens."
    ],
    hu: [
      "Svédország területileg Észak-Európa legnagyobb országa.",
      "Az országban több mint 260 000 sziget található, ami a legtöbb a világon.",
      "Svédország volt az első ország a világon, amely 1979-ben betiltotta a gyermekek testi fenyítését.",
      "A Nobel-díj átadási ünnepségeket évente Stockholmban tartják (a békedíj kivételével).",
      "Svédország hulladékot importál más országokból, hogy energiát termelő üzemeit fűtse.",
      "Az Abba, az IKEA és a Spotify Svédország legismertebb globális exportcikkei közé tartoznak."
    ],
    ro: [
      "Suedia este cea mai mare țară din Europa de Nord ca suprafață.",
      "Țara are peste 260.000 de insule, cele mai multe din orice țară din lume.",
      "Suedia a fost prima țară din lume care a interzis pedeapsa corporală a copiilor în 1979.",
      "Ceremoniile Premiului Nobel au loc anual la Stockholm (cu excepția Premiului pentru Pace).",
      "Suedia importă deșeuri din alte țări pentru a-și alimenta centralele de transformare a deșeurilor în energie.",
      "Abba, IKEA și Spotify sunt câteva dintre cele mai faimoase exporturi globale ale Suediei."
    ]
  },
  image: "/geo-images/sweden/sweden-main.webp",
};

export const swedenRegions: POI[] = [
  {
    id: "city-stockholm",
    type: "city",
    parent: "sweden",
    coords: [18.0686, 59.3293],
    name: { de: "Stockholm", hu: "Stockholm", ro: "Stockholm", en: "Stockholm" },
    description: {
      en: "Stockholm, the capital of Sweden, is built on 14 islands connected by over 50 bridges. Known as the 'Venice of the North', it is a city of stunning architecture, clean water, and abundant green spaces. The historic old town, Gamla Stan, features cobblestone streets and colorful buildings, while the city also boasts world-class museums like the Vasa Museum and the ABBA Museum. Stockholm is a global hub for technology, design, and fashion.",
      de: "Stockholm, die Hauptstadt Schwedens, ist auf 14 Inseln erbaut, die durch über 50 Brücken verbunden sind. Bekannt als 'Venedig des Nordens', ist es eine Stadt mit beeindruckender Architektur, sauberem Wasser und zahlreichen Grünflächen. Die historische Altstadt Gamla Stan besticht durch Kopfsteinpflasterstraßen und bunte Gebäude, während die Stadt auch erstklassige Museen wie das Vasa-Museum und das ABBA-Museum beherbergt. Stockholm ist ein globales Zentrum für Technologie, Design und Mode.",
      hu: "Stockholm, Svédország fővárosa, 14 szigetre épült, amelyeket több mint 50 híd köt össze. Az 'Észak Velencéjeként' ismert város lenyűgöző építészetéről, tiszta vizéről és bőséges zöldfelületeiről híres. A történelmi óváros, a Gamla Stan macskaköves utcákkal és színes épületekkel várja a látogatókat, miközben a város olyan világszínvonalú múzeumokkal is büszkélkedhet, mint a Vasa Múzeum és az ABBA Múzeum. Stockholm a technológia, a dizájn és a divat globális központja.",
      ro: "Stockholm, capitala Suediei, este construit pe 14 insule conectate prin peste 50 de poduri. Cunoscut sub numele de 'Veneția Nordului', este un oraș cu o arhitectură uimitoare, apă curată și spații verzi abundente. Orașul vechi istoric, Gamla Stan, are străzi pietruite și clădiri colorate, în timp ce orașul se mândrește și cu muzee de talie mondială, cum ar fi Muzeul Vasa și Muzeul ABBA. Stockholm este un centru global pentru tehnologie, design și modă."
    },
    facts: {
      en: ["Stockholm was founded in 1252.","The city's subway system is known as the world's longest art gallery.","The Royal Palace in Stockholm is one of the largest in Europe.","Stockholm is the site of the annual Nobel Prize banquet."],
      de: ["Stockholm wurde 1252 gegründet.","Das U-Bahn-System der Stadt ist als längste Kunstgalerie der Welt bekannt.","Der Königspalast in Stockholm ist einer der größten in Europa.","In Stockholm findet das jährliche Nobelpreis-Bankett statt."],
      hu: ["Stockholmot 1252-ben alapították.","A város metróhálózata a világ leghosszabb művészeti galériájaként ismert.","A stockholmi királyi palota Európa egyik legnagyobb palotája.","Stockholmban tartják az éves Nobel-díj bankettet."],
      ro: ["Stockholm a fost fondat în 1252.","Sistemul de metrou al orașului este cunoscut ca cea mai lungă galerie de artă din lume.","Palatul Regal din Stockholm este unul dintre cele mai mari din Europa.","Stockholm este locul banchetului anual al Premiului Nobel."]
    },
    image: "/geo-images/sweden/stockholm.webp",
  },
  {
    id: "city-gothenburg",
    type: "city",
    parent: "sweden",
    coords: [11.9746, 57.7089],
    name: { de: "Göteborg", hu: "Göteborg", ro: "Göteborg", en: "Gothenburg" },
    description: {
      en: "Gothenburg, located on Sweden's west coast, is the country's second-largest city and its most important port. It is known for its friendly atmosphere, beautiful canals, and vibrant culinary scene, particularly its fresh seafood. The city is home to Liseberg, Scandinavia's largest amusement park, and the Universeum science center. Gothenburg offers a mix of urban culture and easy access to the stunning southern archipelago.",
      de: "Göteborg an der Westküste Schwedens ist die zweitgrößte Stadt des Landes und sein wichtigster Hafen. Sie ist bekannt für ihre freundliche Atmosphäre, ihre schönen Kanäle und ihre lebendige kulinarische Szene, insbesondere für frische Meeresfrüchte. Die Stadt beherbergt Liseberg, den größten Vergnügungspark Skandinaviens, und das Wissenschaftszentrum Universeum. Göteborg bietet eine Mischung aus städtischer Kultur und einfachem Zugang zum beeindruckenden südlichen Schärengarten.",
      hu: "Göteborg, Svédország nyugati partján fekszik, az ország második legnagyobb városa és legfontosabb kikötője. Barátságos légköréről, gyönyörű csatornáiról és élénk gasztronómiájáról ismert, különösen a friss tengeri ételekről. Itt található a Liseberg, Skandinávia legnagyobb vidámparkja, és az Universeum tudományos központ. Göteborg a városi kultúra és a lenyűgöző déli szigetvilág könnyű elérhetőségének keverékét kínálja.",
      ro: "Göteborg, situat pe coasta de vest a Suediei, este al doilea oraș ca mărime al țării și cel mai important port al său. Este cunoscut pentru atmosfera sa prietenoasă, canalele frumoase și scena culinară vibrantă, în special pentru fructele de mare proaspete. Orașul găzduiește Liseberg, cel mai mare parc de distracții din Scandinavia, și centrul științific Universeum. Göteborg oferă un amestec de cultură urbană și acces ușor la uimitorul arhipelag sudic."
    },
    facts: {
      en: ["Gothenburg was founded by King Gustavus Adolphus in 1621.","The city is home to Volvo, the famous Swedish car manufacturer.","The Gothenburg Archipelago consists of over 20 islands.","The city hosts the Gothia Cup, the world's largest youth football tournament."],
      de: ["Göteborg wurde 1621 von König Gustav II. Adolf gegründet.","Die Stadt ist die Heimat von Volvo, dem berühmten schwedischen Automobilhersteller.","Der Schärengarten von Göteborg besteht aus über 20 Inseln.","Die Stadt ist Gastgeber des Gothia Cup, des weltweit größten Jugendfußballturniers."],
      hu: ["Göteborgot II. Gusztáv Adolf király alapította 1621-ben.","A város a Volvo, a híres svéd autógyártó otthona.","A göteborgi szigetvilág több mint 20 szigetből áll.","A város ad otthont a Gothia Cupnak, a világ legnagyobb ifjúsági labdarúgó tornájának."],
      ro: ["Göteborg a fost fondat de regele Gustavus Adolphus în 1621.","Orașul este sediul Volvo, celebrul producător suedez de mașini.","Arhipelagul Göteborg este format din peste 20 de insule.","Orașul găzduiește Gothia Cup, cel mai mare turneu de fotbal pentru tineret din lume."]
    },
    image: "/geo-images/sweden/gothenburg.webp",
  },
  {
    id: "city-malmo",
    type: "city",
    parent: "sweden",
    coords: [13.0038, 55.6050],
    name: { de: "Malmö", hu: "Malmö", ro: "Malmö", en: "Malmö" },
    description: {
      en: "Malmö is Sweden's third-largest city, located in the southernmost province of Skåne. It is a diverse and multicultural city, connected to Copenhagen by the iconic Øresund Bridge. Malmö is known for its innovative architecture, such as the Turning Torso skyscraper, and its commitment to sustainability. The city offers beautiful parks, a lively waterfront area called Västra Hamnen, and a rich cultural life with many festivals and events.",
      de: "Malmö ist die drittgrößte Stadt Schwedens und liegt in der südlichsten Provinz Schonen. Es ist eine vielfältige und multikulturelle Stadt, die durch die ikonische Öresundbrücke mit Kopenhagen verbunden ist. Malmö ist bekannt für seine innovative Architektur, wie den Wolkenkratzer Turning Torso, und sein Engagement für Nachhaltigkeit. Die Stadt bietet schöne Parks, ein lebendiges Uferviertel namens Västra Hamnen und ein reiches Kulturleben mit vielen Festivals und Veranstaltungen.",
      hu: "Malmö Svédország harmadik legnagyobb városa, a legdélebbi tartományban, Skåne-ban található. Sokszínű és multikulturális város, amelyet az ikonikus Øresund híd köt össze Koppenhágával. Malmö innovatív építészetéről, például a Turning Torso felhőkarcolóról, és a fenntarthatóság iránti elkötelezettségéről ismert. A város gyönyörű parkokat, a Västra Hamnen nevű élénk vízparti negyedet és gazdag kulturális életet kínál számos fesztivállal és eseménnyel.",
      ro: "Malmö este al treilea oraș ca mărime din Suedia, situat în cea mai sudică provincie, Skåne. Este un oraș divers și multicultural, conectat de Copenhaga prin emblematicul Pod Øresund. Malmö este cunoscut pentru arhitectura sa inovatoare, cum ar fi zgârie-norul Turning Torso, și angajamentul său față de sustenabilitate. Orașul oferă parcuri frumoase, o zonă de faleză vibrantă numită Västra Hamnen și o viață culturală bogată, cu multe festivaluri și evenimente."
    },
    facts: {
      en: ["The Øresund Bridge is the longest combined road and rail bridge in Europe.","The Turning Torso was the first twisted skyscraper in the world.","Malmö was once a major industrial city and is now a hub for tech and startups.","The city has over 170 different nationalities represented among its residents."],
      de: ["Die Öresundbrücke ist die längste kombinierte Straßen- und Eisenbahnbrücke Europas.","Der Turning Torso war der erste verdrehte Wolkenkratzer der Welt.","Malmö war einst eine bedeutende Industriestadt und ist heute ein Zentrum für Technologie und Startups.","In der Stadt sind über 170 verschiedene Nationalitäten unter den Einwohnern vertreten."],
      hu: ["Az Øresund híd Európa leghosszabb kombinált közúti és vasúti hídja.","A Turning Torso volt a világ első csavart felhőkarcolója.","Malmö egykor jelentős iparváros volt, ma pedig a technológia és a startupok központja.","A város lakói között több mint 170 különböző nemzetiség képviselteti magát."],
      ro: ["Podul Øresund este cel mai lung pod combinat rutier și feroviar din Europa.","Turning Torso a fost primul zgârie-nori răsucit din lume.","Malmö a fost odată un oraș industrial major, iar acum este un centru pentru tehnologie și startup-uri.","Orașul are peste 170 de naționalități diferite reprezentate printre locuitorii săi."]
    },
    image: "/geo-images/sweden/malmo.webp",
  },
  {
    id: "city-uppsala",
    type: "city",
    parent: "sweden",
    coords: [17.6389, 59.8588],
    name: { de: "Uppsala", hu: "Uppsala", ro: "Uppsala", en: "Uppsala" },
    description: {
      en: "Uppsala is a historic city located north of Stockholm, famous for its prestigious university, which is the oldest in Scandinavia. The city is dominated by the magnificent Uppsala Cathedral, the largest church in the Nordic countries, and the historic Uppsala Castle. Uppsala has a rich academic and religious history, and it remains a vibrant center for education, research, and culture, with many museums and botanical gardens.",
      de: "Uppsala ist eine historische Stadt nördlich von Stockholm, berühmt für ihre renommierte Universität, die älteste in Skandinavien. Die Stadt wird vom prächtigen Dom zu Uppsala, der größten Kirche der nordischen Länder, und dem historischen Schloss Uppsala dominiert. Uppsala hat eine reiche akademische und religiöse Geschichte und ist nach wie vor ein lebendiges Zentrum für Bildung, Forschung und Kultur mit vielen Museen und botanischen Gärten.",
      hu: "Uppsala egy történelmi város Stockholmtól északra, amely rangos egyeteméről híres, amely Skandinávia legrégebbi egyeteme. A várost a lenyűgöző uppsalai székesegyház, az északi országok legnagyobb temploma és a történelmi uppsalai vár uralja. Uppsala gazdag akadémiai és vallási múlttal rendelkezik, és továbbra is az oktatás, a kutatás és a kultúra vibráló központja, számos múzeummal és botanikus kerttel.",
      ro: "Uppsala este un oraș istoric situat la nord de Stockholm, faimos pentru prestigioasa sa universitate, care este cea mai veche din Scandinavia. Orașul este dominat de magnifica Catedrală din Uppsala, cea mai mare biserică din țările nordice, și de istoricul Castel Uppsala. Uppsala are o bogată istorie academică și religioasă și rămâne un centru vibrant pentru educație, cercetare și cultură, cu multe muzee și grădini botanice."
    },
    facts: {
      en: ["Uppsala University was founded in 1477.","The city was the religious center of Sweden during the Viking Age.","Carl Linnaeus, the famous botanist, lived and worked in Uppsala.","The Silver Bible, a 6th-century manuscript, is kept in the university library."],
      de: ["Die Universität Uppsala wurde 1477 gegründet.","Die Stadt war während der Wikingerzeit das religiöse Zentrum Schwedens.","Carl von Linné, der berühmte Botaniker, lebte und arbeitete in Uppsala.","Die Silberbibel, eine Handschrift aus dem 6. Jahrhundert, wird in der Universitätsbibliothek aufbewahrt."],
      hu: ["Az Uppsalai Egyetemet 1477-ben alapították.","A város Svédország vallási központja volt a viking korban.","Carl von Linné, a híres botanikus Uppsalában élt és dolgozott.","Az Ezüst Bibliát, egy 6. századi kéziratot, az egyetemi könyvtárban őriznek."],
      ro: ["Universitatea din Uppsala a fost fondată în 1477.","Orașul a fost centrul religios al Suediei în timpul Epocii Vikinge.","Carl Linnaeus, celebrul botanist, a trăit și a lucrat în Uppsala.","Biblia de Argint, un manuscris din secolul al VI-lea, este păstrată în biblioteca universității."]
    },
    image: "/geo-images/sweden/uppsala.webp",
  },
  {
    id: "reg-lapland",
    type: "region",
    parent: "sweden",
    coords: [19.0000, 67.0000],
    name: { de: "Lappland", hu: "Lappföld", ro: "Laponia", en: "Lapland" },
    description: {
      en: "Swedish Lapland is a vast wilderness area in the far north of the country, characterized by Arctic landscapes, mountains, and rivers. It is the land of the Midnight Sun in summer and the Northern Lights in winter. The region is home to the indigenous Sámi people and offers unique experiences such as dog sledding, reindeer herding, and staying in the world-famous Ice Hotel in Jukkasjärvi. Lapland is a paradise for nature lovers and adventurers.",
      de: "Schwedisch-Lappland ist ein riesiges Wildnisgebiet im hohen Norden des Landes, geprägt von arktischen Landschaften, Bergen und Flüssen. Es ist das Land der Mitternachtssonne im Sommer und der Polarlichter im Winter. Die Region ist die Heimat des indigenen Volkes der Samen und bietet einzigartige Erlebnisse wie Hundeschlittenfahrten, Rentierzucht und Übernachtungen im weltberühmten Eishotel in Jukkasjärvi. Lappland ist ein Paradies für Naturliebhaber und Abenteurer.",
      hu: "A svéd Lappföld egy hatalmas vadon az ország távoli északi részén, amelyet sarkvidéki tájak, hegyek és folyók jellemeznek. Ez az éjféli nap földje nyáron és az északi fényé télen. A régió az őshonos számi nép otthona, és olyan egyedülálló élményeket kínál, mint a kutyaszánozás, a rénszarvaspásztorkodás és a jukkasjärvi világhírű jéghotelben való tartózkodás. Lappföld a természetbarátok és a kalandvágyók paradicsoma.",
      ro: "Laponia suedeză este o zonă vastă de sălbăticie în nordul îndepărtat al țării, caracterizată prin peisaje arctice, munți și râuri. Este țara Soarelui de la Miezul Nopții vara și a Aurorei Boreale iarna. Regiunea găzduiește poporul indigen Sámi și oferă experiențe unice, cum ar fi saniile trase de câini, păstoritul renilor și cazarea în faimosul Hotel de Gheață din Jukkasjärvi. Laponia este un paradis pentru iubitorii de natură și aventurieri."
    },
    facts: {
      en: ["Lapland covers about a quarter of Sweden's total area.","The Ice Hotel is rebuilt every year using ice from the Torne River.","The region contains several national parks, including Sarek and Abisko.","Kiruna is the northernmost city in Sweden and is currently being moved to avoid mine collapse."],
      de: ["Lappland bedeckt etwa ein Viertel der Gesamtfläche Schwedens.","Das Eishotel wird jedes Jahr mit Eis aus dem Fluss Torne neu aufgebaut.","Die Region umfasst mehrere Nationalparks, darunter Sarek und Abisko.","Kiruna ist die nördlichste Stadt Schwedens und wird derzeit verlegt, um einen Einsturz der Mine zu verhindern."],
      hu: ["Lappföld Svédország teljes területének körülbelül egynegyedét fedi le.","A Jéghotelt minden évben újraépítik a Torne-folyó jegéből.","A régióban számos nemzeti park található, köztük a Sarek és az Abisko.","Kiruna Svédország legészakibb városa, amelyet jelenleg költöztetnek, hogy elkerüljék a bánya beomlását."],
      ro: ["Laponia acoperă aproximativ un sfert din suprafața totală a Suediei.","Hotelul de Gheață este reconstruit în fiecare an folosind gheață din râul Torne.","Regiunea conține mai multe parcuri naționale, inclusiv Sarek și Abisko.","Kiruna este cel mai nordic oraș din Suedia și este în curs de mutare pentru a evita prăbușirea minei."]
    },
    image: "/geo-images/sweden/lapland.webp",
  }
];

export const swedenCulture: POI[] = [
  {
    id: "cult-visby",
    type: "culture",
    parent: "sweden",
    coords: [18.2948, 57.6348],
    name: { de: "Visby", hu: "Visby", ro: "Visby", en: "Visby" },
    description: {
      en: "Visby, located on the island of Gotland, is a remarkably well-preserved medieval Hanseatic town and a UNESCO World Heritage site. It is famous for its impressive 13th-century town wall, cobblestone streets, and charming rose-covered cottages. Visby has a rich history as a major trading hub in the Baltic Sea and hosts an annual Medieval Week, where the town comes alive with markets, tournaments, and period costumes.",
      de: "Visby auf der Insel Gotland ist eine bemerkenswert gut erhaltene mittelalterliche Hansestadt und UNESCO-Weltkulturerbe. Sie ist berühmt für ihre beeindruckende Stadtmauer aus dem 13. Jahrhundert, ihre Kopfsteinpflasterstraßen und ihre charmanten, rosenumrankten Häuser. Visby hat eine reiche Geschichte als bedeutendes Handelszentrum in der Ostsee und ist Gastgeber der jährlichen Mittelalterwoche, in der die Stadt mit Märkten, Turnieren und historischen Kostümen zum Leben erwacht.",
      hu: "Visby, Gotland szigetén található, egy figyelemre méltóan jó állapotban fennmaradt középkori hanza-város és az UNESCO Világörökség része. Híres lenyűgöző, 13. századi városfaláról, macskaköves utcáiról és bájos, rózsákkal borított házikóiról. Visby gazdag múlttal rendelkezik, mint a Balti-tenger egyik jelentős kereskedelmi központja, és évente megrendezi a Középkori Hetet, ahol a város piacokkal, lovagi tornákkal és korhű jelmezekkel telik meg.",
      ro: "Visby, situat pe insula Gotland, este un oraș hanseatic medieval remarcabil de bine conservat și un sit al Patrimoniului Mondial UNESCO. Este faimos pentru zidul său impresionant din secolul al XIII-lea, străzile pietruite și căsuțele fermecătoare acoperite cu trandafiri. Visby are o istorie bogată ca centru comercial major în Marea Baltică și găzduiește anual Săptămâna Medievală, unde orașul prinde viață cu piețe, turniruri și costume de epocă."
    },
    facts: {
      en: ["Visby is often called the 'City of Roses and Ruins'.","The town wall is 3.4 kilometers long and has many of its original towers.","Gotland is Sweden's largest island.","Visby was one of the most important cities of the Hanseatic League."],
      de: ["Visby wird oft als 'Stadt der Rosen und Ruinen' bezeichnet.","Die Stadtmauer ist 3,4 Kilometer lang und besitzt viele ihrer ursprünglichen Türme.","Gotland ist Schwedens größte Insel.","Visby war eine der wichtigsten Städte der Hanse."],
      hu: ["Visbyt gyakran a 'rózsák és romok városának' nevezik.","A városfal 3,4 kilométer hosszú, és számos eredeti tornya megmaradt.","Gotland Svédország legnagyobb szigete.","Visby a Hanza-szövetség egyik legfontosabb városa volt."],
      ro: ["Visby este adesea numit 'Orașul Trandafirilor și al Ruinelor'.","Zidul orașului are o lungime de 3,4 kilometri și păstrează multe dintre turnurile sale originale.","Gotland este cea mai mare insulă a Suediei.","Visby a fost unul dintre cele mai importante orașe ale Ligii Hanseatice."]
    },
    image: "/geo-images/sweden/visby.webp",
  }
];

export const swedenNature: POI[] = [
  {
    id: "nat-abisko",
    type: "nature",
    parent: "sweden",
    coords: [18.8312, 68.3495],
    name: { de: "Abisko Nationalpark", hu: "Abisko Nemzeti Park", ro: "Parcul Național Abisko", en: "Abisko National Park" },
    description: {
      en: "Abisko National Park is located in the heart of Swedish Lapland, known for its stunning Arctic scenery and diverse wildlife. It is one of the best places in the world to see the Northern Lights due to its clear skies and minimal light pollution. The park offers excellent hiking trails, including the start of the famous Kungsleden (King's Trail), and features the beautiful Abisko Canyon and Lake Torneträsk.",
      de: "Der Abisko-Nationalpark liegt im Herzen von Schwedisch-Lappland und ist bekannt für seine beeindruckende arktische Landschaft und seine vielfältige Tierwelt. Aufgrund des klaren Himmels und der minimalen Lichtverschmutzung ist er einer der besten Orte der Welt, um Polarlichter zu sehen. Der Park bietet hervorragende Wanderwege, darunter den Beginn des berühmten Kungsleden (Königsweg), und beherbergt den wunderschönen Abisko-Canyon und den See Torneträsk.",
      hu: "Az Abisko Nemzeti Park a svéd Lappföld szívében található, lenyűgöző sarkvidéki tájairól és változatos élővilágáról ismert. A tiszta égbolt és a minimális fényszennyezés miatt a világ egyik legjobb helye az északi fény megfigyelésére. A park kiváló túraútvonalakat kínál, itt kezdődik a híres Kungsleden (Királyok útja), valamint itt található a gyönyörű Abisko-kanyon és a Torneträsk-tó.",
      ro: "Parcul Național Abisko este situat în inima Laponiei suedeze, fiind cunoscut pentru peisajele sale arctice uimitoare și fauna diversă. Este unul dintre cele mai bune locuri din lume pentru a vedea Aurora Boreală datorită cerului senin și poluării luminoase minime. Parcul oferă trasee de drumeție excelente, inclusiv începutul celebrului Kungsleden (Traseul Regelui), și cuprinde frumosul Canion Abisko și Lacul Torneträsk."
    },
    facts: {
      en: ["The Aurora Sky Station in Abisko is a world-renowned spot for viewing the Northern Lights.","The park was established in 1909, making it one of the oldest in Sweden.","Abisko is known for its 'blue hole', a patch of sky that often remains clear even when surrounding areas are cloudy.","The Kungsleden trail is about 440 kilometers long."],
      de: ["Die Aurora Sky Station in Abisko ist ein weltberühmter Ort zur Beobachtung von Polarlichtern.","Der Park wurde 1909 gegründet und ist damit einer der ältesten Schwedens.","Abisko ist bekannt für sein 'blaues Loch', ein Stück Himmel, das oft klar bleibt, auch wenn die Umgebung bewölkt ist.","Der Kungsleden-Wanderweg ist etwa 440 Kilometer lang."],
      hu: ["Az abiskói Aurora Sky Station világhírű hely az északi fény megfigyelésére.","A parkot 1909-ben alapították, így Svédország egyik legrégebbi nemzeti parkja.","Abisko a 'kék lyukról' ismert, egy égboltdarabról, amely gyakran tiszta marad akkor is, ha a környező területek felhősek.","A Kungsleden túraútvonal körülbelül 440 kilométer hosszú."],
      ro: ["Aurora Sky Station din Abisko este un loc renumit la nivel mondial pentru vizionarea Aurorei Boreale.","Parcul a fost înființat în 1909, fiind unul dintre cele mai vechi din Suedia.","Abisko este cunoscut pentru 'gaura albastră', o porțiune de cer care rămâne adesea senină chiar și atunci când zonele înconjurătoare sunt înnorate.","Traseul Kungsleden are o lungime de aproximativ 440 de kilometri."]
    },
    image: "/geo-images/sweden/abisko.webp",
  }
];

export const swedenAllPoi: POI[] = [swedenCountry, ...swedenRegions, ...swedenCulture, ...swedenNature];
