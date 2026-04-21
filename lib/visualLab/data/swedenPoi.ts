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
    coords: [17.6389, 59.8586],
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
      hu: "A svéd Lappföld egy hatalmas vadon az ország távoli északi részén, amelyet sarkvidéki tájak, hegyek és folyók jellemeznek. Ez az éjféli nap földje nyáron és az északi fényé télen. A régió az őshonos számi nép otthona, és olyan egyedülálló élményeket kínál, mint a kutyaszánozás, a rénszarvaspásztorkodás és a jukkasjärvi világhírű jéghotelben való tartózkodás. Lappföld a természetbarátok és a kalandvágyók paradiseoma.",
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

export const swedenCities: POI[] = [
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
    coords: [17.6389, 59.8586],
    name: { de: "Uppsala", hu: "Uppsala", ro: "Uppsala", en: "Uppsala" },
    description: {
      en: "Uppsala is a historic city located north of Stockholm, famous for its prestigious university, which is the oldest in Scandinavia. The city is dominated by the magnificent Uppsala Cathedral, the largest church in the Nordic countries, and the historic Uppsala Castle. Uppsala has a rich academic and religious history, and it remains a vibrant center for education, research, and culture, with many museums and botanical gardens.",
      de: "Uppsala ist eine historische Stadt nördlich von Stockholm, berühmt für ihre renommierte Universität, die älteste in Skandinavien. Die Stadt wird vom prächtigen Dom zu Uppsala, der größten Kirche der nordischen Länder, und dem historischen Schloss Uppsala dominiert. Uppsala hat eine reiche akademische und religiöse Geschichte und ist nach wie vor ein lebendiges Zentrum für Bildung, Forschung und Kultur mit vielen Museen und botanischen Gärten.",
      hu: "Uppsala egy történelmi város Stockholmtól északra, amely rangos egyeteméről híres, amely Skandinávia legrégebbi egyeteme. A várost a lenyűgöző uppsalai székesegyház, az északi országok legnagyobb temploma és a történelmi uppsalai vár uralja. Uppsala gazdag akadémiai és vallási múlttal rendelkezik, és továbbra is az oktatás, a kutatás és a kultúra vibráló központja, számos múzeummal és botanikus kerttel.",
      ro: "Uppsala este un oraș istoric situat la nord de Stockholm, faimos pentru prestigioasa sa universitate, care este cea mai veche din Scandinavia. Orașul este dominat de magnifica Catedrală din Uppsala, cea mai mare biserică din țările nordice, și de istoricul Castel Uppsala. Uppsala hat o bogată istorie academică și religioasă și rămâne un centru vibrant pentru educație, cercetare și cultură, cu multe muzee și grădini botanice."
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
    id: "city-kiruna",
    type: "city",
    parent: "sweden",
    coords: [20.2234, 67.8558],
    name: { de: "Kiruna", hu: "Kiruna", ro: "Kiruna", en: "Kiruna" },
    description: {
      en: "Kiruna is the northernmost city in Sweden, located in the province of Lapland. It is famous for being home to the world's largest underground iron ore mine and for its proximity to the Abisko National Park and the Icehotel. The city is currently undergoing a massive relocation project to prevent it from being swallowed by the expanding mine.",
      de: "Kiruna ist die nördlichste Stadt Schwedens und liegt in der Provinz Lappland. Sie ist bekannt für das weltweit größte unterirdische Eisenerzbergwerk sowie für ihre Nähe zum Abisko-Nationalpark und zum Eishotel. Die Stadt wird derzeit im Rahmen eines massiven Umsiedlungsprojekts verlegt, um zu verhindern, dass sie vom expandierenden Bergwerk verschluckt wird.",
      hu: "Kiruna Svédország legészakibb városa, Lappföld tartományban található. Híres a világ legnagyobb földalatti vasércbányájáról, valamint az Abisko Nemzeti Park és a Jéghotel közelségéről. A várost jelenleg egy hatalmas költöztetési projekt keretében helyezik át, hogy megmentsék a táguló bánya okozta beomlástól.",
      ro: "Kiruna este cel mai nordic oraș din Suedia, situat în provincia Laponia. Este faimos pentru că găzduiește cea mai mare mină subterană de minereu de fier din lume și pentru proximitatea sa de Parcul Național Abisko și de Hotelul de Gheață. Orașul trece în prezent printr-un proiect masiv de relocare pentru a preveni prăbușirea sa în mina care se extinde."
    },
    facts: {
      en: ["Kiruna is Sweden's northernmost city.","The city is being moved 3 kilometers to the east due to mining.","It is home to the world's largest underground iron ore mine.","Kiruna is a popular spot for viewing the Northern Lights.","The Kiruna Church was voted Sweden's most beautiful building."],
      de: ["Kiruna ist die nördlichste Stadt Schwedens.","Die Stadt wird wegen des Bergbaus um 3 Kilometer nach Osten verlegt.","Hier befindet sich das weltweit größte unterirdische Eisenerzbergwerk.","Kiruna ist ein beliebter Ort zur Beobachtung von Polarlichtern.","Die Kirche von Kiruna wurde zum schönsten Gebäude Schwedens gewählt."],
      hu: ["Kiruna Svédország legészakibb városa.","A várost a bányászat miatt 3 kilométerrel keletre költöztetik.","Itt található a világ legnagyobb földalatti vasércbányája.","Kiruna népszerű hely az északi fény megfigyelésére.","A kirunai templomot Svédország legszebb épületének választották."],
      ro: ["Kiruna este cel mai nordic oraș din Suedia.","Orașul este mutat cu 3 kilometri spre est din cauza mineritului.","Găzduiește cea mai mare mină subterană de minereu de fier din lume.","Kiruna este un loc popular pentru vizionarea Aurorei Boreale.","Biserica din Kiruna a fost votată cea mai frumoasă clădire din Suedia."]
    },
    image: "/geo-images/sweden/kiruna.webp",
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
      hu: "Visby, Gotland szigetén található, egy figyelemre méltóan jó állapotban fennmaradt középkori hanza-város és az UNESCO Világöröűgség része. Híres lenyűgöző, 13. századi városfaláról, macskaköves utcáiról és bájos, rózsákkal borított házikóiról. Visby gazdag múlttal rendelkezik, mint a Balti-tenger egyik jelentős kereskedelmi központja, és évente megrendezi a Középkori Hetet, ahol a város piacokkal, lovagi tornákkal és korhű jelmezekkel telik meg.",
      ro: "Visby, situat pe insula Gotland, este un oraș hanseatic medieval remarcabil de bine conservat și un sit al Patrimoniului Mondial UNESCO. Este faimos pentru zidul său impresionant din secolul al XIII-lea, străzile pietruite și căsuțele fermecătoare acoperite cu trandafiri. Visby are o istorie bogată ca centru comercial major în Marea Baltică și găzduiește anual Săptămâna Medievală, unde orașul prinde viață cu piețe, turniruri și costume de epocă."
    },
    facts: {
      en: ["Visby is often called the 'City of Roses and Ruins'.","The town wall is 3.4 kilometers long and has many of its original towers.","Gotland is Sweden's largest island.","Visby was one of the most important cities of the Hanseatic League."],
      de: ["Visby wird oft als 'Stadt der Rosen und Ruinen' bezeichnet.","Die Stadtmauer ist 3,4 Kilometer lang und besitzt viele ihrer ursprünglichen Türme.","Gotland ist Schwedens größte Insel.","Visby war eine der wichtigsten Städte der Hanse."],
      hu: ["Visbyt gyakran a 'rózsák és romok városának' nevezik.","A városfal 3,4 kilométer hosszú, és számos eredeti tornya megmaradt.","Gotland Svédország legnagyobb szigete.","Visby a Hanza-szövetség egyik legfontosabb városa volt."],
      ro: ["Visby este adesea numit 'Orașul Trandafirilor și al Ruinelor'.","Zidul orașului are o lungime de 3,4 kilometri și păstrează multe dintre turnurile sale originale.","Gotland este cea mai mare insulă a Suediei.","Visby a fost unul dintre cele mai importante orașe ale Ligii Hanseatice."]
    },
    image: "/geo-images/sweden/visby.webp",
  },
  {
    id: "cult-vasa-museum",
    type: "culture",
    parent: "sweden",
    coords: [18.0914, 59.3281],
    name: { de: "Vasa-Museum", hu: "Vasa Múzeum", ro: "Muzeul Vasa", en: "Vasa Museum" },
    description: {
      en: "The Vasa Museum is a maritime museum in Stockholm, located on the island of Djurgården. It displays the almost fully intact 17th-century ship Vasa, which sank on its maiden voyage in 1628 and was salvaged in 1961. It is the most visited museum in Scandinavia, offering a unique glimpse into Swedish naval history and 17th-century craftsmanship.",
      de: "Das Vasa-Museum ist ein Schifffahrtsmuseum in Stockholm auf der Insel Djurgården. Es zeigt das fast vollständig intakte Schiff Vasa aus dem 17. Jahrhundert, das 1628 auf seiner Jungfernfahrt sank und 1961 geborgen wurde. Es ist das meistbesuchte Museum Skandinaviens und bietet einen einzigartigen Einblick in die schwedische Marinegeschichte und die Handwerkskunst des 17. Jahrhunderts.",
      hu: "A Vasa Múzeum egy tengerészeti múzeum Stockholmban, a Djurgården-szigeten. Itt látható a szinte teljesen ép 17. századi Vasa hadihajó, amely 1628-as első útján süllyedt el, és 1961-ben emelték ki. Ez Skandinávia leglátogatottabb múzeuma, amely egyedülálló betekintést nyújt a svéd tengerészeti történelembe és a 17. századi kézművességbe.",
      ro: "Muzeul Vasa este un muzeu maritim din Stockholm, situat pe insula Djurgården. Acesta expune nava Vasa din secolul al XVII-lea, aproape complet intactă, care s-a scufundat în călătoria sa inaugurală în 1628 și a fost recuperată în 1961. Este cel mai vizitat muzeu din Scandinavia, oferind o perspectivă unică asupra istoriei navale suedeze și a măiestriei din secolul al XVII-lea."
    },
    facts: {
      en: ["The Vasa ship sank only 1,300 meters into its maiden voyage.","It remained underwater for 333 years before being salvaged.","The museum opened in 1990.","Over 98% of the ship's original wood is preserved.","The Vasa was intended to be the pride of the Swedish Navy."],
      de: ["Das Schiff Vasa sank nach nur 1.300 Metern auf seiner Jungfernfahrt.","Es lag 333 Jahre unter Wasser, bevor es geborgen wurde.","Das Museum wurde 1990 eröffnet.","Über 98 % des Originalholzes des Schiffes sind erhalten.","Die Vasa sollte der Stolz der schwedischen Marine werden."],
      hu: ["A Vasa hajó mindössze 1300 métert tett meg első útján, mielőtt elsüllyedt.","333 évig volt a víz alatt, mielőtt kiemelték.","A múzeum 1990-ben nyílt meg.","A hajó eredeti fájának több mint 98%-a megmaradt.","A Vasát a svéd haditengerészet büszkeségének szánták."],
      ro: ["Nava Vasa s-a scufundat la doar 1.300 de metri de la începutul călătoriei sale.","A rămas sub apă timp de 333 de ani înainte de a fi recuperată.","Muzeul s-a deschis în 1990.","Peste 98% din lemnul original al navei este conservat.","Vasa era destinată să fie mândria marinei suedeze."]
    },
    image: "/geo-images/sweden/vasa-museum.webp",
  },
  {
    id: "cult-gamla-stan",
    type: "culture",
    parent: "sweden",
    coords: [18.0715, 59.3259],
    name: { de: "Gamla Stan", hu: "Gamla Stan", ro: "Gamla Stan", en: "Gamla Stan" },
    description: {
      en: "Gamla Stan, the Old Town of Stockholm, is one of the largest and best-preserved medieval city centers in Europe. Founded in 1252, it features narrow winding cobblestone streets, colorful buildings, and historic sites like the Royal Palace and Stockholm Cathedral. It is a vibrant area filled with shops, restaurants, and museums, retaining its medieval character.",
      de: "Gamla Stan, die Altstadt von Stockholm, ist eines der größten und am besten erhaltenen mittelalterlichen Stadtzentren Europas. Sie wurde 1252 gegründet und zeichnet sich durch enge, gewundene Kopfsteinpflasterstraßen, bunte Gebäude und historische Stätten wie den Königspalast und den Stockholmer Dom aus. Es ist ein lebendiges Viertel voller Geschäfte, Restaurants und Museen, das seinen mittelalterlichen Charakter bewahrt hat.",
      hu: "Gamla Stan, Stockholm óvárosa, Európa egyik legnagyobb és legjobb állapotban fennmaradt középkori városközpontja. Az 1252-ben alapított negyed szűk, kanyargós macskaköves utcákkal, színes épületekkel és olyan történelmi helyszínekkel büszkélkedhet, mint a királyi palota és a stockholmi székesegyház. Ez egy élettel teli környék üzletekkel, éttermekkel és múzeumokkal, amely megőrizte középkori jellegét.",
      ro: "Gamla Stan, Orașul Vechi din Stockholm, este unul dintre cele mai mari și mai bine conservate centre medievale din Europa. Fondat în 1252, acesta are străzi pietruite înguste și șerpuite, clădiri colorate și situri istorice precum Palatul Regal și Catedrala din Stockholm. Este o zonă vibrantă plină de magazine, restaurante și muzee, păstrându-și caracterul medieval."
    },
    facts: {
      en: ["Gamla Stan was originally called 'Själva staden' (The City Itself).","It is home to the Royal Palace, one of the largest in the world.","The narrowest street, Mårten Trotzigs Gränd, is only 90 cm wide.","The Stockholm Bloodbath of 1520 took place in Stortorget square.","Storkyrkan is the oldest church in the Old Town."],
      de: ["Gamla Stan hieß ursprünglich 'Själva staden' (Die Stadt selbst).","Hier befindet sich der Königspalast, einer der größten der Welt.","Die schmalste Gasse, Mårten Trotzigs Gränd, ist nur 90 cm breit.","Das Stockholmer Blutbad von 1520 fand auf dem Stortorget statt.","Die Storkyrkan ist die älteste Kirche der Altstadt."],
      hu: ["Gamla Stant eredetileg 'Själva staden'-nek (maga a város) hívták.","Itt található a Királyi Palota, a világ egyik legnagyobbja.","A legszűkebb utca, a Mårten Trotzigs Gränd mindössze 90 cm széles.","Az 1520-as stockholmi vérfürdő a Stortorget téren történt.","A Storkyrkan az óváros legrégebbi temploma."],
      ro: ["Gamla Stan a fost numit inițial 'Själva staden' (Orașul în sine).","Găzduiește Palatul Regal, unul dintre cele mai mari din lume.","Cea mai îngustă stradă, Mårten Trotzigs Gränd, are doar 90 cm lățime.","Baia de sânge din Stockholm din 1520 a avut loc în piața Stortorget.","Storkyrkan este cea mai veche biserică din Orașul Vechi."]
    },
    image: "/geo-images/sweden/gamla-stan.webp",
  },
  {
    id: "cult-drottningholm",
    type: "culture",
    parent: "sweden",
    coords: [17.8857, 59.3219],
    name: { de: "Schloss Drottningholm", hu: "Drottningholm palota", ro: "Palatul Drottningholm", en: "Drottningholm Palace" },
    description: {
      en: "Drottningholm Palace is the private residence of the Swedish royal family and a UNESCO World Heritage site. Built in the 17th century, it is inspired by French models like Versailles and features a magnificent palace theater and beautiful gardens. It represents the finest example of Northern European architecture from the Baroque period.",
      de: "Schloss Drottningholm ist die Privatresidenz der schwedischen Königsfamilie und gehört zum UNESCO-Weltkulturerbe. Das im 17. Jahrhundert erbaute Schloss wurde nach französischem Vorbild wie Versailles gestaltet und verfügt über ein prächtiges Schlosstheater und wunderschöne Gärten. Es ist das beste Beispiel nordeuropäischer Barockarchitektur.",
      hu: "A Drottningholm palota a svéd királyi család magánrezidenciája és az UNESCO Világörökség része. A 17. században épült, francia mintákra, például Versailles-ra alapozva, és lenyűgöző palotaszínházzal, valamint gyönyörű kertekkel rendelkezik. Ez az észak-európai barokk építészet egyik legszebb példája.",
      ro: "Palatul Drottningholm este reședința privată a familiei regale suedeze și un sit al Patrimoniului Mondial UNESCO. Construit în secolul al XVII-lea, este inspirat de modele franceze precum Versailles și are un teatru de palat magnific și grădini superbe. Reprezintă cel mai bun exemplu de arhitectură nord-europeană din perioada barocă."
    },
    facts: {
      en: ["It is the permanent residence of the Swedish Royal Family.","The palace theater still uses its original 18th-century machinery.","It was the first Swedish site to be added to the UNESCO World Heritage list.","The gardens include a Chinese Pavilion and a Baroque garden.","The palace was built in the late 17th century."],
      de: ["Es ist der ständige Wohnsitz der schwedischen Königsfamilie.","Das Schlosstheater nutzt noch heute seine originale Maschinerie aus dem 18. Jahrhundert.","Es war die erste schwedische Stätte auf der UNESCO-Weltkulturerbeliste.","Die Gärten umfassen einen Chinesischen Pavillon und einen Barockgarten.","Das Schloss wurde im späten 17. Jahrhundert erbaut."],
      hu: ["Ez a svéd királyi család állandó rezidenciája.","A palotaszínház még mindig eredeti, 18. századi gépezetét használja.","Ez volt az első svéd helyszín, amely felkerült az UNESCO Világörökség listájára.","A kertekben található egy kínai pavilon és egy barokk kert is.","A palota a 17. század végén épült."],
      ro: ["Este reședința permanentă a Familiei Regale suedeze.","Teatrul palatului folosește și acum mecanismele sale originale din secolul al XVIII-lea.","A fost primul sit suedez adăugat pe lista Patrimoniului Mondial UNESCO.","Grădinile includ un Pavilion Chinezesc și o grădină barocă.","Palatul a fost construit la sfârșitul secolului al XVII-lea."]
    },
    image: "/geo-images/sweden/drottningholm.webp",
  },
  {
    id: "cult-icehotel",
    type: "culture",
    parent: "sweden",
    coords: [20.5956, 67.8508],
    name: { de: "Eishotel Jukkasjärvi", hu: "Icehotel Jukkasjärvi", ro: "Icehotel Jukkasjärvi", en: "Icehotel Jukkasjärvi" },
    description: {
      en: "Located in Jukkasjärvi, the Icehotel was the world's first hotel made entirely of ice and snow. Each year, artists from around the world gather to sculpt the hotel's rooms and common areas using ice from the nearby Torne River. It offers a unique Arctic experience, with temperatures inside kept at a constant sub-zero level, complemented by the Icebar.",
      de: "Das in Jukkasjärvi gelegene Eishotel war das weltweit erste Hotel, das vollständig aus Eis und Schnee gebaut wurde. Jedes Jahr kommen Künstler aus aller Welt zusammen, um die Zimmer und Gemeinschaftsbereiche des Hotels mit Eis aus dem nahen Fluss Torne zu gestalten. Es bietet ein einzigartiges arktisches Erlebnis mit konstanten Minustemperaturen im Inneren, ergänzt durch die Icebar.",
      hu: "A Jukkasjärviben található Jéghotel volt a világ első, teljes egészében jégből és hóból készült szállodája. Minden évben a világ minden tájáról érkező művészek gyűlnek össze, hogy a közeli Torne-folyó jegéből kifaragják a szálloda szobáit és közösségi tereit. Egyedülálló sarkvidéki élményt kínál, ahol a belső hőmérsékletet folyamatosan fagypont alatt tartják, amit a Jégbár egészít ki.",
      ro: "Situat în Jukkasjärvi, Icehotel a fost primul hotel din lume realizat integral din gheață și zăpadă. În fiecare an, artiști din întreaga lume se adună pentru a sculpta camerele și zonele comune ale hotelului folosind gheață din râul Torne din apropiere. Oferă o experiență arctică unică, cu temperaturi interioare menținute la un nivel constant sub zero grade, completată de Icebar."
    },
    facts: {
      en: ["The hotel is located 200 kilometers north of the Arctic Circle.","It was founded in 1989.","Ice from the Torne River is used because of its crystal clarity.","The rooms are maintained at -5 to -8 degrees Celsius.","Every spring, the hotel melts back into the river."],
      de: ["Das Hotel liegt 200 Kilometer nördlich des Polarkreises.","Es wurde 1989 gegründet.","Eis aus dem Torne-Fluss wird wegen seiner Kristallklarheit verwendet.","In den Zimmern herrscht eine Temperatur von -5 bis -8 Grad Celsius.","Jeden Frühling schmilzt das Hotel zurück in den Fluss."],
      hu: ["A szálloda 200 kilométerre északra található a sarkkörtől.","1989-ben alapították.","A Torne-folyó jegét használják a kristálytiszta minősége miatt.","A szobákban -5 és -8 Celsius-fok közötti hőmérsékletet tartanak.","Minden tavasszal a szálloda visszaolvad a folyóba."],
      ro: ["Hotelul este situat la 200 de kilometri nord de Cercul Polar.","A fost fondat în 1989.","Gheața din râul Torne este folosită datorită clarității sale de cristal.","Camerele sunt menținute la o temperatură de -5 până la -8 grade Celsius.","În fiecare primăvară, hotelul se topește înapoi în râu."]
    },
    image: "/geo-images/sweden/icehotel.webp",
  },
  {
    id: "cult-dalarna",
    type: "culture",
    parent: "sweden",
    coords: [14.5390, 60.9923],
    name: { de: "Dalarna (Dala-Pferd)", hu: "Dalarna (Dala-ló)", ro: "Dalarna (Calul Dala)", en: "Dalarna (Dala Horse)" },
    description: {
      en: "Dalarna is a province in central Sweden known for its deep-rooted folklore, traditional red-painted cottages, and the iconic Dala horse. Mora is the center of Dala horse production, a hand-carved and painted wooden horse that has become a symbol of Sweden. The region is also famous for the Vasaloppet, the world's oldest and longest cross-country ski race.",
      de: "Dalarna ist eine Provinz in Mittelschweden, bekannt für ihre tief verwurzelte Folklore, traditionelle rot gestrichene Häuser und das ikonische Dala-Pferd. Mora ist das Zentrum der Dala-Pferd-Produktion, eines handgeschnitzten und bemalten Holzpferdes, das zum Symbol Schwedens geworden ist. Die Region ist auch berühmt für den Vasaloppet, das älteste und längste Skilanglaufrennen der Welt.",
      hu: "Dalarna egy közép-svédországi tartomány, amely mélyen gyökerező folklórjáról, hagyományos vörösre festett házikóiról és az ikonikus dalahästről (dala-lóról) ismert. Mora a dala-ló gyártás központja, amely egy kézzel faragott és festett faparipa, és Svédország szimbólumává vált. A régió híres a Vasaloppetről is, amely a világ legrégebbi és leghosszabb sífutó versenye.",
      ro: "Dalarna este o provincie din centrul Suediei, cunoscută pentru folclorul său profund înrădăcinat, căsuțele tradiționale vopsite în roșu și emblematicul cal Dala. Mora este centrul producției de cai Dala, un cal de lemn sculptat și pictat manual care a devenit un simbol al Suediei. Regiunea este, de asemenea, faimoasă pentru Vasaloppet, cea mai veche și mai lungă cursă de schi fond din lume."
    },
    facts: {
      en: ["The Dala horse originated as a toy for children.","Traditionally, the horses are painted red with white and blue patterns.","Nusnäs is the main village where the horses are handcrafted.","The world's largest Dala horse is located in Avesta.","The patterns are called 'kurbits' painting."],
      de: ["Das Dala-Pferd entstand ursprünglich als Spielzeug für Kinder.","Traditionell sind die Pferde rot mit weißen und blauen Mustern bemalt.","Nusnäs ist das Hauptdorf, in dem die Pferde handgefertigt werden.","Das weltgrößte Dala-Pferd steht in Avesta.","Die Muster werden 'Kurbits'-Malerei genannt."],
      hu: ["A dala-ló eredetileg gyermekjátékként indult.","Hagyományosan a lovakat pirosra festik, fehér és kék mintákkal.","Nusnäs a fő falu, ahol a lovak kézzel készülnek.","A világ legnagyobb dala-lova Avestában található.","A mintákat 'kurbits' festésnek nevezik."],
      ro: ["Calul Dala a apărut inițial ca o jucărie pentru copii.","În mod tradițional, caii sunt vopsiți în roșu cu modele albe și albastre.","Nusnäs este satul principal unde caii sunt confecționați manual.","Cel mai mare cal Dala din lume se află în Avesta.","Modelele se numesc pictură 'kurbits'."]
    },
    image: "/geo-images/sweden/dalarna.webp",
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
  },
  {
    id: "nat-gotland",
    type: "nature",
    parent: "sweden",
    coords: [18.2948, 57.6348],
    name: { de: "Gotland + Visby", hu: "Gotland + Visby", ro: "Gotland + Visby", en: "Gotland + Visby" },
    description: {
      en: "Gotland is Sweden's largest island, located in the Baltic Sea, with the medieval town of Visby as its main center. Visby is a UNESCO World Heritage site, famous for its 13th-century town wall and well-preserved medieval architecture. The island's landscape features unique limestone formations called 'raukar' and beautiful sandy beaches.",
      de: "Gotland ist die größte Insel Schwedens in der Ostsee, mit der mittelalterlichen Stadt Visby als Hauptzentrum. Visby gehört zum UNESCO-Weltkulturerbe und ist berühmt für seine Stadtmauer aus dem 13. Jahrhundert und die gut erhaltene mittelalterliche Architektur. Die Landschaft der Insel ist geprägt von einzigartigen Kalksteinformationen, den 'Raukar', und wunderschönen Sandstränden.",
      hu: "Gotland Svédország legnagyobb szigete a Balti-tengeren, fő központja a középkori Visby városa. Visby az UNESCO Világörökség része, híres 13. századi városfaláról és jó állapotban fennmaradt középkori építészetéről. A sziget tájképét egyedülálló mészkőképződmények, úgynevezett 'raukar'-ok és gyönyörű homokos strandok jellemzik.",
      ro: "Gotland este cea mai mare insulă a Suediei, situată în Marea Baltică, având orașul medieval Visby ca centru principal. Visby este un sit al Patrimoniului Mondial UNESCO, faimos pentru zidul său din secolul al XIII-lea și arhitectura medievală bine conservată. Peisajul insulei prezintă formațiuni de calcar unice numite 'raukar' și plaje frumoase cu nisip."
    },
    facts: {
      en: ["Visby's town wall is one of the best-preserved in Europe.","The island is a popular summer destination for Swedes.","Gotland has many unique limestone stacks called 'raukar'.","Visby was a major hub for the Hanseatic League.","There are 92 medieval churches on the island of Gotland."],
      de: ["Die Stadtmauer von Visby ist eine der am besten erhaltenen in Europa.","Die Insel ist ein beliebtes Sommerziel für Schweden.","Gotland hat viele einzigartige Kalksteinfelsen, die 'Raukar' genannt werden.","Visby war eine bedeutende Stadt der Hanse.","Auf der Insel Gotland gibt es 92 mittelalterliche Kirchen."],
      hu: ["Visby városfala az egyik legjobb állapotban fennmaradt Európában.","A sziget a svédek körében népszerű nyári úti cél.","Gotlandon számos egyedülálló mészkőoszlop, úgynevezett 'raukar' található.","Visby a Hanza-szövetség egyik legfontosabb városa volt.","Gotland szigetén 92 középkori templom található."],
      ro: ["Zidul orașului Visby este unul dintre cele mai bine conservate din Europa.","Insula este o destinație populară de vară pentru suedezi.","Gotland are multe stânci de calcar unice numite 'raukar'.","Visby a fost unul dintre cele mai importante orașe ale Ligii Hanseatice.","Pe insula Gotland există 92 de biserici medievale."]
    },
    image: "/geo-images/sweden/gotland.webp",
  },
  {
    id: "nat-lapland",
    type: "nature",
    parent: "sweden",
    coords: [18.7, 67.3],
    name: { de: "Laponia-Region", hu: "Laponia régió", ro: "Regiunea Laponia", en: "Laponia Region" },
    description: {
      en: "The Laponia area in Swedish Lapland is a massive wilderness and a UNESCO World Heritage site, recognized for both its natural beauty and cultural significance. It is home to the Sámi people, who have practiced traditional reindeer herding here for centuries. The region includes four national parks and two nature reserves, featuring spectacular mountains, glaciers, and ancient forests.",
      de: "Das Gebiet Laponia in Schwedisch-Lappland ist eine gewaltige Wildnis und UNESCO-Weltkulturerbe, das sowohl für seine natürliche Schönheit als auch für seine kulturelle Bedeutung anerkannt ist. Es ist die Heimat der Samen, die hier seit Jahrhunderten traditionelle Rentierzucht betreiben. Die Region umfasst vier Nationalparks und zwei Naturschutzgebiete mit spektakulären Bergen, Gletschern und alten Wäldern.",
      hu: "A svéd Lappföldön található Laponia vidéke egy hatalmas vadon és az UNESCO Világörökség része, amelyet természeti szépsége és kulturális jelentősége miatt is elismertek. Itt élnek a számi emberek, akik évszázadok óta folytatják a hagyományos rénszarvaspásztorkodást. A régió négy nemzeti parkot és két természetvédelmi területet foglal magában, látványos hegyekkel, gleccserekkel és ősi erdőkkel.",
      ro: "Zona Laponia din Laponia suedeză este o sălbăticie masivă și un sit al Patrimoniului Mondial UNESCO, recunoscut atât pentru frumusețea sa naturală, cât și pentru semnificația culturală. Este casa poporului Sámi, care practică aici păstoritul tradițional al renilor de secole. Regiunea include patru parcuri naționale și două rezervații naturale, oferind munți spectaculoși, ghețari și păduri antice."
    },
    facts: {
      en: ["Laponia was designated a UNESCO World Heritage site in 1996.","It is one of the few places where traditional nomadic life still exists.","The area includes Sarek, Padjelanta, Stora Sjöfallet, and Muddus National Parks.","It is the world's largest area with an ancestral way of living.","The Sámi people call the area Sápmi."],
      de: ["Laponia wurde 1996 zum UNESCO-Weltkulturerbe erklärt.","Es ist einer der wenigen Orte, an denen noch traditionelles Nomadenleben existiert.","Das Gebiet umfasst die Nationalparks Sarek, Padjelanta, Stora Sjöfallet und Muddus.","Es ist das weltweit größte Gebiet mit einer überlieferten Lebensweise.","Die Samen nennen das Gebiet Sápmi."],
      hu: ["Laponiát 1996-ben nyilvánították az UNESCO Világörökség részévé.","Ez az egyik kevés hely, ahol a hagyományos nomád életmód még létezik.","A terület magában foglalja a Sarek, Padjelanta, Stora Sjöfallet és Muddus nemzeti parkokat.","Ez a világ legnagyobb olyan területe, ahol ősi életmódot folytatnak.","A számi nép Sápminak hívja a területet."],
      ro: ["Laponia a fost desemnată sit al Patrimoniului Mondial UNESCO în 1996.","Este unul dintre puținele locuri unde viața nomadă tradițională mai există.","Zona include parcurile naționale Sarek, Padjelanta, Stora Sjöfallet și Muddus.","Este cea mai mare zonă din lume cu un mod de viață ancestral.","Poporul Sámi numește zona Sápmi."]
    },
    image: "/geo-images/sweden/lapland-unesco.webp",
  },
  {
    id: "nat-stockholm-archipelago",
    type: "nature",
    parent: "sweden",
    coords: [18.5, 59.4],
    name: { de: "Stockholmer Schärengarten", hu: "Stockholm-archipelagó", ro: "Arhipelagul Stockholm", en: "Stockholm Archipelago" },
    description: {
      en: "The Stockholm Archipelago is the largest archipelago in Sweden and the second largest in the Baltic Sea, consisting of approximately 30,000 islands and islets. Stretching from the city center far into the Baltic, it offers a stunning landscape of rocky shores, sandy beaches, and traditional wooden summer houses. It is a popular destination for boating, fishing, and exploring the diverse nature of the islands.",
      de: "Der Stockholmer Schärengarten ist der größte Archipel Schwedens und der zweitgrößte in der Ostsee, bestehend aus etwa 30.000 Inseln und Schären. Er erstreckt sich vom Stadtzentrum weit in die Ostsee hinein und bietet eine beeindruckende Landschaft mit felsigen Ufern, Sandstränden und traditionellen Sommerhäusern aus Holz. Er ist ein beliebtes Ziel zum Bootfahren, Angeln und Erkunden der vielfältigen Natur der Inseln.",
      hu: "A stockholmi szigetvilág Svédország legnagyobb és a Balti-tenger második legnagyobb szigetcsoportja, amely körülbelül 30 000 szigetből és sziklazátonyból áll. A városközponttól távol a Balti-tengerbe nyúlva lenyűgöző tájat kínál sziklás partokkal, homokos strandokkal és hagyományos fából készült nyaralókkal. Népszerű úti cél hajózáshoz, horgászathoz és a szigetek változatos természetének felfedezéséhez.",
      ro: "Arhipelagul Stockholm este cel mai mare arhipelag din Suedia și al doilea ca mărime din Marea Baltică, format din aproximativ 30.000 de insule și ostroave. Întinzându-se de la centrul orașului până departe în Baltica, acesta oferă un peisaj uimitor de țărmuri stâncoase, plaje cu nisip și case de vară tradiționale din lemn. Este o destinație populară pentru plimbări cu barca, pescuit și explorarea naturii diverse a insulelor."
    },
    facts: {
      en: ["The archipelago consists of about 30,000 islands and islets.","Many islands can be reached by the Waxholmsbolaget ferry fleet.","Vaxholm is often considered the 'capital' of the archipelago.","The outer islands are rugged and rocky, while the inner ones are lush.","It is a paradise for sailing and kayaking."],
      de: ["Der Schärengarten besteht aus etwa 30.000 Inseln und Schären.","Viele Inseln sind mit der Fährflotte von Waxholmsbolaget erreichbar.","Vaxholm wird oft als 'Hauptstadt' des Schärengartens bezeichnet.","Die äußeren Inseln sind schroff und felsig, die inneren üppig grün.","Es ist ein Paradies zum Segeln und Kajakfahren."],
      hu: ["A szigetvilág körülbelül 30 000 szigetből és sziklazátonyból áll.","Sok sziget elérhető a Waxholmsbolaget kompflottájával.","Vaxholmot gyakran a szigetvilág 'fővárosának' tekintik.","A külső szigetek zordak és sziklásak, míg a belsők dús növényzetűek.","A vitorlázás és a kajakozás paradiseoma."],
      ro: ["Arhipelagul este format din aproximativ 30.000 de insule și ostroave.","Multe insule pot fi accesate cu flota de feriboturi Waxholmsbolaget.","Vaxholm este adesea considerat 'capitala' arhipelagului.","Insulele exterioare sunt accidentate și stâncoase, în timp ce cele interioare sunt verzi.","Este un paradis pentru navigație și caiac."]
    },
    image: "/geo-images/sweden/stockholm-archipelago.webp",
  },
  {
    id: "nat-sarek",
    type: "nature",
    parent: "sweden",
    coords: [17.7, 67.3],
    name: { de: "Sarek Nationalpark", hu: "Sarek Nemzeti Park", ro: "Parcul Național Sarek", en: "Sarek National Park" },
    description: {
      en: "Sarek National Park is often called 'Europe's last wilderness', a remote and rugged high mountain area in Lapland without marked trails or cabins. It contains six of Sweden's thirteen highest peaks and nearly 100 glaciers, making it a challenging destination for experienced hikers. The park is known for its diverse wildlife, including large populations of bears, wolves, and wolverines.",
      de: "Der Sarek-Nationalpark wird oft als 'Europas letzte Wildnis' bezeichnet, ein abgelegenes und schroffes Hochgebirgsgebiet in Lappland ohne markierte Wege oder Hütten. Er beherbergt sechs der dreizehn höchsten Gipfel Schwedens und fast 100 Gletscher, was ihn zu einem anspruchsvollen Ziel für erfahrene Wanderer macht. Der Park ist bekannt für seine vielfältige Tierwelt, darunter große Populationen von Bären, Wölfen und Vielfraßen.",
      hu: "A Sarek Nemzeti Parkot gyakran 'Európa utolsó vadonjának' nevezik; egy távoli és zord magashegyi terület Lappföldön, jelzett ösvények és turistaházak nélkül. Itt található Svédország tizenhárom legmagasabb csúcsa közül hat, valamint közel 100 gleccser, ami kihívást jelentő úti céllá teszi a tapasztalt túrázók számára. A park változatos élővilágáról ismert, beleértve a medvék, farkasok és rozsomákok népes állományát.",
      ro: "Parcul Național Sarek este adesea numit 'ultima sălbăticie a Europei', o zonă montană înaltă, izolată și accidentată din Laponia, fără trasee marcate sau cabane. Conține șase dintre cele mai înalte treisprezece vârfuri ale Suediei și aproape 100 de ghețari, fiind o destinație provocatoare pentru drumeții experimentați. Parcul este cunoscut pentru fauna sa diversă, inclusiv populații mari de urși, lupi și glutoni."
    },
    facts: {
      en: ["Sarek is known as 'Europe's last wilderness'.","There are no marked trails or accommodation in the park.","It contains six of Sweden's thirteen highest peaks.","The park is home to a large population of massive elk (moose).","Hiking in Sarek requires extensive experience and equipment."],
      de: ["Sarek ist als 'Europas letzte Wildnis' bekannt.","Es gibt keine markierten Wege oder Unterkünfte im Park.","Er beherbergt sechs der dreizehn höchsten Gipfel Schwedens.","Der Park ist die Heimat einer großen Population riesiger Elche.","Wandern im Sarek erfordert viel Erfahrung und Ausrüstung."],
      hu: ["Sareket 'Európa utolsó vadonjaként' ismerik.","A parkban nincsenek jelzett ösvények vagy szálláshelyek.","Itt található Svédország tizenhárom legmagasabb csúcsa közül hat.","A park hatalmas jávorszarvas-állománynak ad otthont.","A sareki túrázás komoly tapasztalatot és felszerelést igényel."],
      ro: ["Sarek este cunoscut sub numele de 'ultima sălbăticie a Europei'.","Nu există trasee marcate sau unități de cazare în parc.","Conține șase dintre cele mai înalte treisprezece vârfuri ale Suediei.","Parcul găzduiește o populație mare de elani masivi.","Drumețiile în Sarek necesită experiență și echipament vast."]
    },
    image: "/geo-images/sweden/sarek.webp",
  }
];

export const swedenAllPoi: POI[] = [swedenCountry, ...swedenRegions, ...swedenCities, ...swedenCulture, ...swedenNature];
