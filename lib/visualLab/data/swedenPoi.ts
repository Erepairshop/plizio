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
  ,
  {
    id: "city-umea",
    type: "city",
    parent: "SE",
    coords: [20.2630, 63.8258],
    name: { de: "Umea", hu: "Umea", ro: "Umea", en: "Umea" },
    description: {
      en: "Umea is a fast-growing university city on the Ume River in northern Sweden. It is known for its creative energy, strong public services, and easy access to the forests and coastline of Vasterbotten. The city gained international attention as European Capital of Culture in 2014. Umea combines modern city life with a clear Arctic North Swedish identity.",
      de: "Umea ist eine schnell wachsende Universitatsstadt am Umealv in Nordschweden. Sie ist bekannt fur ihre kreative Energie, ihre starken offentliichen Dienste und den leichten Zugang zu Waldern und Kuste in Vasterbotten. Die Stadt erhielt 2014 als Europaische Kulturhauptstadt internationale Aufmerksamkeit. Umea verbindet modernes Stadtleben mit einer klaren nordschwedischen Identitat.",
      hu: "Umea egy gyorsan fejlodo egyetemi varos az Ume-folyonak partjan Eszak-Svedorszagban. Kreativ energiája, eros kozerdeku szolgaltatasai es Vasterbotten erdeinek, valamint partvonalanak közelsége miatt ismert. A varos 2014-ben nemzetkozi figyelmet kapott, amikor Europai Kulturfovaros lett. Umea a modern varosi eletet es az eszaki sarki hangulatot jol osszekapcsolja.",
      ro: "Umea este un oras universitar in plina crestere, asezat pe raul Ume in nordul Suediei. Este cunoscut pentru energia sa creativa, serviciile publice solide si accesul rapid la padurile si coasta din Vasterbotten. Orasul a intrat in atentia internationala in 2014, cand a fost Capitala Europeana a Culturii. Umea combina viata urbana moderna cu o identitate clara a nordului arctic suedez."
    },
    facts: {
      en: ["Umea is the largest city in northern Sweden.", "Umea University was founded in 1965.", "The city was a European Capital of Culture in 2014.", "Umea lies on the Ume River near the Gulf of Bothnia.", "The city is famous for its rows of birch trees."],
      de: ["Umea ist die groesste Stadt in Nordschweden.", "Die Universitat Umea wurde 1965 gegrundet.", "Die Stadt war 2014 Europaische Kulturhauptstadt.", "Umea liegt am Umealv nahe dem Bottnischen Meerbusen.", "Die Stadt ist fur ihre Reihen von Birken bekannt."],
      hu: ["Umea Eszak-Svedorszag legnagyobb varosa.", "Az Umea Egyetemet 1965-ben alapitottak.", "A varos 2014-ben Europai Kulturfovaros volt.", "Umea az Ume-folyon fekszik, kozel a Botteni-obolhoz.", "A varos hires a nyirfasorairol."],
      ro: ["Umea este cel mai mare oras din nordul Suediei.", "Universitatea din Umea a fost fondata in 1965.", "Orasul a fost Capitala Europeana a Culturii in 2014.", "Umea se afla pe raul Ume, aproape de Golful Botniei.", "Orasul este faimos pentru sirurile sale de mesteceni."]
    },
    image: "/geo-images/sweden/umea.webp",
  },
  {
    id: "city-lund",
    type: "city",
    parent: "SE",
    coords: [13.1910, 55.7047],
    name: { de: "Lund", hu: "Lund", ro: "Lund", en: "Lund" },
    description: {
      en: "Lund is one of Sweden's oldest and most intellectual cities, shaped by its cathedral and university. It sits in southern Scania and attracts students, researchers, and visitors all year round. The compact center is easy to explore on foot and is full of historic streets, cafes, and bike-friendly paths. Lund is also a strong base for business and innovation in the greater Oresund region.",
      de: "Lund ist eine der altesten und intellektuellsten Stadte Schwedens, gepragt von Kathedrale und Universitat. Sie liegt im sudlichen Skane und zieht das ganze Jahr uber Studierende, Forscher und Besucher an. Das kompakte Zentrum lasst sich leicht zu Fuss erkunden und ist voller historischer Strassen, Cafes und fahrradfreundlicher Wege. Lund ist auch ein wichtiger Standort fur Wirtschaft und Innovation in der grosseren Oresund-Region.",
      hu: "Lund Svedorszag egyik legoregebbi es legszellemi varosa, amelyet a katedralis es az egyetem formalt. Skane deli reszen fekszik, es egesz evben vonzza a diakokat, kutatokat es latogatokat. A kompakt varoskozpont gyalog is konnyen bejarhato, tele tortenelmi utcakkal, kavezokkal es biciklibarat utakkal. Lund a nagyobb Oresund-regio egyik fontos uzleti es innovacios bazisa is.",
      ro: "Lund este unul dintre cele mai vechi si mai intelectuale orase din Suedia, modelat de catedrala si universitatea sa. Se afla in Scania de sud si atrage tot timpul anului studenti, cercetatori si vizitatori. Centrul compact se poate explora usor pe jos si este plin de strazi istorice, cafenele si trasee prietenoase cu bicicletele. Lund este si o baza puternica pentru afaceri si inovatie in mai larga regiune Oresund."
    },
    facts: {
      en: ["Lund University was founded in 1666.", "Lund Cathedral is one of the most famous Romanesque churches in Sweden.", "The city has one of the youngest average populations in the country because of the university.", "Lund is part of the Oresund commuting region.", "The city is a major center for research and high tech."],
      de: ["Die Universitat Lund wurde 1666 gegrundet.", "Der Dom von Lund ist eine der bekanntesten romanischen Kirchen Schwedens.", "Die Stadt hat wegen der Universitat eines der jungsten Durchschnittsalter des Landes.", "Lund gehort zur Pendlerregion Oresund.", "Die Stadt ist ein wichtiges Zentrum fur Forschung und Hightech."],
      hu: ["A Lundi Egyetemet 1666-ban alapitottak.", "A lund-i katedralis Svedorszag egyik leghiresebb roman stilu temploma.", "A varosnak az egyetem miatt az orszag egyik legfiatalabb atlagpopulacioja van.", "Lund az Oresund ingazasi regio resze.", "A varos fontos kutatasi es high-tech kozpont."],
      ro: ["Universitatea din Lund a fost fondata in 1666.", "Catedrala din Lund este una dintre cele mai cunoscute biserici romanice din Suedia.", "Orasul are una dintre cele mai tinere populatii medii din tara din cauza universitatii.", "Lund face parte din regiunea de naveta Oresund.", "Orasul este un centru important de cercetare si tehnologie avansata."]
    },
    image: "/geo-images/sweden/lund.webp",
  },
  {
    id: "city-linkoping",
    type: "city",
    parent: "SE",
    coords: [15.6214, 58.4108],
    name: { de: "Linkoping", hu: "Linkoping", ro: "Linkoping", en: "Linkoping" },
    description: {
      en: "Linkoping is a major city in east-central Sweden known for aviation, logistics, and technology. It combines a strong business profile with a historic center and a vibrant student atmosphere. The city is home to Sweden's famous Air Force Museum and the large Linkoping University campus. Visitors use Linkoping as a gateway to Ostergotland and the classic Swedish countryside.",
      de: "Linkoping ist eine wichtige Stadt in Ost-Zentralschwedens und bekannt fur Luftfahrt, Logistik und Technologie. Sie verbindet ein starkes Wirtschaftsprofil mit einer historischen Innenstadt und einer lebendigen Studentenatmosphare. In der Stadt befinden sich das bekannte Schwedische Luftwaffenmuseum und der grosse Campus der Universitat Linkoping. Besucher nutzen Linkoping als Tor nach Ostergotland und in die klassische schwedische Landschaft.",
      hu: "Linkoping az eszakkelet-svedorszagi elet egyik fontos varosa, amelyet a repules, a logisztika es a technologia hataroz meg. Az eros gazdasagi profil mellett tortenelmi belvarossal es elelkeno diakhangulattal rendelkezik. Itt talalhato a hires Sved Legiero Muzeum es a nagy Linkopingi Egyetem campusa is. A latogatok gyakran kapukent hasznaljak Ostergotland es a klasszikus sved videk fele.",
      ro: "Linkoping este un oras important din centrul-est al Suediei, cunoscut pentru aviatie, logistica si tehnologie. Imbina un profil de afaceri puternic cu un centru istoric si o atmosfera studenteasca vie. Orasul gazduieste celebrul Muzeu al Fortelor Aeriene din Suedia si marele campus al Universitatii Linkoping. Vizitatorii folosesc Linkoping ca poarta de acces spre Ostergotland si peisajul rural clasic suedez."
    },
    facts: {
      en: ["Linkoping University is one of Sweden's leading research universities.", "The Air Force Museum is one of the country's top aviation museums.", "Linkoping has a strong aviation and defense industry cluster.", "The city is located in Ostergotland.", "Linkoping Cathedral is one of the best-known landmarks in the city."],
      de: ["Die Universitat Linkoping ist eine der fuhrenden Forschungsuniversitaten Schwedens.", "Das Luftwaffenmuseum zahlt zu den besten Luftfahrtmuseen des Landes.", "Linkoping hat einen starken Luftfahrt- und Verteidigungsindustriesektor.", "Die Stadt liegt in Ostergotland.", "Der Dom von Linkoping ist eines der bekanntesten Wahrzeichen der Stadt."],
      hu: ["A Linkopingi Egyetem Svedorszag egyik vezeto kutatoi egyeteme.", "A Legiero Muzeum az orszag egyik legjobb repulestorteneti muzeuma.", "Linkopingnek eros repulesi es vedelmi ipari bazisa van.", "A varos Ostergotlandban talalhato.", "A linkopingi katedralis a varos egyik legismertebb latnivaloja."],
      ro: ["Universitatea Linkoping este una dintre cele mai importante universitati de cercetare din Suedia.", "Muzeul Fortelor Aeriene este unul dintre cele mai bune muzee de aviatie din tara.", "Linkoping are un cluster puternic de aviatie si industria de aparare.", "Orasul se afla in Ostergotland.", "Catedrala din Linkoping este unul dintre cele mai cunoscute repere ale orasului."]
    },
    image: "/geo-images/sweden/linkoping.webp",
  },
  {
    id: "city-vasteras",
    type: "city",
    parent: "SE",
    coords: [16.5448, 59.6114],
    name: { de: "Vasteras", hu: "Vasteras", ro: "Vasteras", en: "Vasteras" },
    description: {
      en: "Vasteras is a historic Malaren city with a strong industrial base and a modern waterfront identity. It grew around trade, shipping, and later advanced engineering, which still shape the local economy. The city is easy to reach from Stockholm and works well as a regional hub for business and family travel. Vasteras also offers lakeside recreation, old churches, and a compact downtown.",
      de: "Vasteras ist eine historische Stadt am Malaren mit einer starken industriellen Basis und moderner Uferidentitat. Sie wuchs durch Handel, Schifffahrt und spater durch fortschrittlichen Maschinenbau, was die lokale Wirtschaft bis heute pragt. Die Stadt ist von Stockholm aus leicht erreichbar und eignet sich gut als regionales Zentrum fur Geschafts- und Familienreisen. Vasteras bietet ausserdem Erholung am See, alte Kirchen und eine kompakte Innenstadt.",
      hu: "Vasteras egy tortenelmi Malaren-parti varos, eros ipari hattal es modern partmenti hangulattal. A kereskedelem, a hajozas es kesobb a fejlett gepgyartas formalta, ami ma is meghatarozza a helyi gazdasagot. Stockholmbol konnyen elerheto, ezert jo regio-kozi kozpont uzleti es csaladi utazasokhoz is. Vasteras emellett toparti kikapcsolodast, regi templomokat es kompakt belvarost kinal.",
      ro: "Vasteras este un oras istoric de pe Malaren, cu o baza industriala puternica si o identitate moderna pe malul apei. A crescut in jurul comertului, navigatiei si mai tarziu a ingineriei avansate, care inca modeleaza economia locala. Orasul este usor de ajuns din Stockholm si functioneaza bine ca nod regional pentru afaceri si calatorii de familie. Vasteras ofera si recreere pe malul lacului, biserici vechi si un centru compact."
    },
    facts: {
      en: ["Vasteras is one of Sweden's oldest cities.", "The city lies on Lake Malaren.", "Vasteras was an early industrial center in Swedish history.", "The city has an airport and strong logistics links.", "Its cathedral district preserves an important medieval core."],
      de: ["Vasteras ist eine der altesten Stadte Schwedens.", "Die Stadt liegt am Malaren.", "Vasteras war fruh ein industrielles Zentrum der schwedischen Geschichte.", "Die Stadt verfugt uber einen Flughafen und starke Logistikverbindungen.", "Das Domviertel bewahrt einen wichtigen mittelalterlichen Kern."],
      hu: ["Vasteras Svedorszag egyik legoregebbi varosa.", "A varos a Malaren to partjan fekszik.", "Vasteras a sved tortenelem egyik korai ipari kozpontja volt.", "A varosnak reptere es eros logisztikai kapcsolatai vannak.", "A szekesegyhaz-negyed fontos kozepkori magot oriz."],
      ro: ["Vasteras este unul dintre cele mai vechi orase din Suedia.", "Orasul se afla pe lacul Malaren.", "Vasteras a fost un centru industrial timpuriu in istoria Suediei.", "Orasul are aeroport si legaturi logistice puternice.", "Zona catedralei pastreaza un nucleu medieval important."]
    },
    image: "/geo-images/sweden/vasteras.webp",
  },
  {
    id: "city-orebro",
    type: "city",
    parent: "SE",
    coords: [15.2066, 59.2753],
    name: { de: "Orebro", hu: "Orebro", ro: "Orebro", en: "Orebro" },
    description: {
      en: "Orebro is a central Swedish city shaped by a castle, a major university, and a lively service economy. Its location makes it an important junction for rail and road travel across the country. The city center is walkable and combines shopping, restaurants, and riverside scenery. Orebro is also known for its mix of history, education, and practical regional functions.",
      de: "Orebro ist eine zentral schwedische Stadt, die von einer Burg, einer grossen Universitat und einer lebendigen Dienstleistungswirtschaft gepragt ist. Ihre Lage macht sie zu einem wichtigen Knotenpunkt fur Bahn- und Strassenreisen im ganzen Land. Das Stadtzentrum ist fusslaufig und verbindet Einkauf, Restaurants und Flusslandschaft. Orebro ist ausserdem fur die Mischung aus Geschichte, Bildung und praktischen Regionalfunktionen bekannt.",
      hu: "Orebro egy kozep-sved varos, amelyet vara, nagy egyeteme es elelkeny szolgaltatasi gazdasaga hataroz meg. Fekvese miatt fontos vasuti es kozuti csomopont az orszagon belul. A belvaros setalhato, es az uzleteket, ettermeket es a folyparti latvanyt jol otvozi. Orebro a tortenelem, az oktatas es a regiokozponti szerep jo kevereke miatt ismert.",
      ro: "Orebro este un oras din centrul Suediei, modelat de castelul sau, de o universitate mare si de o economie de servicii vibranta. Pozitia sa il face un nod important pentru transportul feroviar si rutier in toata tara. Centrul orasului se poate explora usor pe jos si imbina magazine, restaurante si peisaj de rau. Orebro este cunoscut si pentru amestecul sau de istorie, educatie si roluri regionale practice."
    },
    facts: {
      en: ["Orebro Castle is one of the city's main symbols.", "Orebro University is a major modern campus.", "The city sits on the Svartan River.", "Orebro is a transport hub in central Sweden.", "The city has grown as a service and education center."],
      de: ["Das Schloss Orebro ist eines der Hauptsymbole der Stadt.", "Die Universitat Orebro ist ein grosser moderner Campus.", "Die Stadt liegt am Svartan-Fluss.", "Orebro ist ein Verkehrsknotenpunkt in Zentralschweden.", "Die Stadt wuchs als Dienstleistungs- und Bildungszentrum."],
      hu: ["Az orebroi var a varos egyik fo szimbóluma.", "Az Orebroi Egyetem nagy modern campus.", "A varos a Svartan folyonal fekszik.", "Orebro kozlekedesi csomopont Kozep-Svedorszagban.", "A varos szolgaltatasi es oktatasi kozpontkent fejlodott."],
      ro: ["Castelul Orebro este unul dintre simbolurile principale ale orasului.", "Universitatea din Orebro este un campus modern important.", "Orasul se afla pe raul Svartan.", "Orebro este un nod de transport in centrul Suediei.", "Orasul s-a dezvoltat ca centru de servicii si educatie."]
    },
    image: "/geo-images/sweden/orebro.webp",
  },
  {
    id: "city-halmstad",
    type: "city",
    parent: "SE",
    coords: [12.8578, 56.6745],
    name: { de: "Halmstad", hu: "Halmstad", ro: "Halmstad", en: "Halmstad" },
    description: {
      en: "Halmstad is a coastal city on Sweden's west coast with a long history of trade and seaside tourism. It is especially popular in summer thanks to beaches, golf, and a relaxed harbor atmosphere. The city also serves as a regional center for administration, retail, and transport in Halland. Halmstad blends old-town character with a strong modern holiday feel.",
      de: "Halmstad ist eine Kustenstadt an der schwedischen Westkuste mit langer Geschichte im Handel und im Seetourismus. Sie ist besonders im Sommer beliebt dank Stranden, Golf und entspannter Hafenatmosphare. Die Stadt dient ausserdem als regionales Zentrum fur Verwaltung, Einzelhandel und Verkehr in Halland. Halmstad verbindet Altstadtcharakter mit einem starken modernen Urlaubsgefuhl.",
      hu: "Halmstad egy tengerparti varos Svedorszag nyugati partjan, amelynek hosszu kereskedelmi es balatoni turisztikai multja van. Kulonosen nyaron nepszeru a strandok, a golfozas es a laza kikotoi hangulat miatt. A varos Halland regioban kozigazgatasi, kiskereskedelmi es kozlekedesi kozpontkent is mukodik. Halmstad regi varosi karaktert es eros modern nyaralos hangulatot kapcsol ossze.",
      ro: "Halmstad este un oras de coasta pe vestul Suediei, cu o lunga istorie de comert si turism de litoral. Este deosebit de popular vara datorita plajelor, golfului si atmosferei relaxate din port. Orasul serveste si ca centru regional pentru administratie, retail si transport in Halland. Halmstad combina farmecul centrului vechi cu o puternica stare moderna de vacanta."
    },
    facts: {
      en: ["Halmstad is the capital of Halland County.", "The city is located at the mouth of the Nissan River.", "Halmstad has a strong beach tourism season.", "The city is a regional center for services and trade.", "Halmstad has a long tradition of shipping and coastal commerce."],
      de: ["Halmstad ist die Hauptstadt des Landkreises Halland.", "Die Stadt liegt an der Mundung des Nissan-Flusses.", "Halmstad hat eine starke Badesaison.", "Die Stadt ist ein regionales Zentrum fur Dienstleistungen und Handel.", "Halmstad hat eine lange Tradition in Schifffahrt und Kustenhandel."],
      hu: ["Halmstad Halland megye szekhelye.", "A varos a Nissan folyó torkolatanal fekszik.", "Halmstadnak eros strandturisztikai idoszaka van.", "A varos regiokozpont a szolgaltatasok es a kereskedelem teren.", "Halmstadnak hosszu hajozasi es partmenti kereskedelmi hagyomanya van."],
      ro: ["Halmstad este capitala comitatului Halland.", "Orasul se afla la gura raului Nissan.", "Halmstad are un sezon puternic de turism pe plaja.", "Orasul este un centru regional pentru servicii si comert.", "Halmstad are o lunga traditie in navigatie si comert costier."]
    },
    image: "/geo-images/sweden/halmstad.webp",
  },
  {
    id: "city-sundsvall",
    type: "city",
    parent: "SE",
    coords: [17.3069, 62.3908],
    name: { de: "Sundsvall", hu: "Sundsvall", ro: "Sundsvall", en: "Sundsvall" },
    description: {
      en: "Sundsvall is a northern coastal city known for its stone architecture and industrial heritage. After the great fire of 1888, it was rebuilt in a monumental style that still defines the city center. Today it is a mix of regional administration, education, digital services, and old industrial character. Sundsvall is also a practical stop for travelers moving between central and northern Sweden.",
      de: "Sundsvall ist eine nordliche Kustenstadt, die fur ihre Steinarchitektur und ihr industrielles Erbe bekannt ist. Nach dem Grossbrand von 1888 wurde sie in einem monumentalen Stil neu aufgebaut, der das Stadtzentrum bis heute pragt. Heute ist sie eine Mischung aus Regionalverwaltung, Bildung, digitalen Diensten und altem Industriecharakter. Sundsvall ist auch ein praktischer Halt fur Reisende zwischen Mittel- und Nordschweden.",
      hu: "Sundsvall egy eszaki tengerparti varos, amely koepiteszeterol es ipari oroksegerol ismert. Az 1888-as nagy tuz utan monumentalis stilusban epult ujja, es ez ma is meghatarozza a belvarost. Ma a varos regioi kozigazgatas, oktatas, digitalis szolgaltatasok es regi ipari karakter kevereke. Sundsvall gyakorlati megallo az orszag kozepe es eszaki resze kozott utazoknak.",
      ro: "Sundsvall este un oras de coasta din nord, cunoscut pentru arhitectura sa de piatra si mostenirea industriala. Dupa marele incendiu din 1888, a fost reconstruit in stil monumental, care defineste inca centrul orasului. Astazi este un amestec de administratie regionala, educatie, servicii digitale si caracter industrial vechi. Sundsvall este si un popas practic pentru calatorii intre centrul si nordul Suediei."
    },
    facts: {
      en: ["Sundsvall was rebuilt after the 1888 fire.", "The city is known as Stenstaden, the Stone City.", "It lies on the Gulf of Bothnia coast.", "Sundsvall has a strong telecom and service economy.", "The city is a gateway to the High Coast region."],
      de: ["Sundsvall wurde nach dem Brand von 1888 neu aufgebaut.", "Die Stadt ist als Stenstaden, die Steinstadt, bekannt.", "Sie liegt an der Kuste des Bottnischen Meerbusens.", "Sundsvall hat eine starke Telekommunikations- und Dienstleistungswirtschaft.", "Die Stadt ist ein Tor zur Hohe-Kuste-Region."],
      hu: ["Sundsvallot az 1888-as tuz után epitettek ujja.", "A varos Stenstadenkent, azaz Kozvaroskent is ismert.", "A Botteni-obol partjan fekszik.", "Sundsvallnak eros telekommunikacios es szolgaltatasi gazdasaga van.", "A varos kapu az A Keszai-part regioba."],
      ro: ["Sundsvall a fost reconstruit dupa incendiul din 1888.", "Orasul este cunoscut ca Stenstaden, Orasul de Piatra.", "Se afla pe coasta Golfului Botniei.", "Sundsvall are o economie puternica de telecom si servicii.", "Orasul este o poarta spre regiunea Coastei Inalte."]
    },
    image: "/geo-images/sweden/sundsvall.webp",
  },
  {
    id: "city-lulea",
    type: "city",
    parent: "SE",
    coords: [22.1547, 65.5848],
    name: { de: "Lulea", hu: "Lulea", ro: "Lulea", en: "Lulea" },
    description: {
      en: "Lulea is the main city of Swedish Lapland on the Gulf of Bothnia. It combines northern port activity, Arctic climate, and growing tech infrastructure in a compact urban form. The city is famous for its UNESCO-listed church town, its university presence, and its role in the regional economy. Lulea is a strong base for winter tourism, coastal travel, and northern industry.",
      de: "Lulea ist die Hauptstadt von Schwedisch-Lappland am Bottnischen Meerbusen. Sie verbindet Hafenaktivitat im Norden, arktisches Klima und wachsende technische Infrastruktur in kompakter urbaner Form. Die Stadt ist beruhmt fur ihre UNESCO-geschutzte Kirchenstadt, ihre Universitatsprasenz und ihre Rolle in der regionalen Wirtschaft. Lulea ist ein starker Ausgangspunkt fur Wintertourismus, Kustenreisen und Nordindustrie.",
      hu: "Lulea a Sved Lappfold fo varosa a Botteni-obol partjan. Avarosi formajaban eszaki kikotoi elet, sarki klima es erosodo technologiai infrastruktura talalkozik. A varos hires UNESCO-védett templomvarosarol, egyetemi jelenleterol es regioi gazdasagi szereperol. Lulea eros bazis a teliturizmushoz, a partmenti utazasokhoz es az eszaki iparhoz.",
      ro: "Lulea este principalul oras al Laponiei suedeze, pe coasta Golfului Botniei. Imbina activitatea de port nordic, clima arctica si infrastructura tehnologica in crestere intr-o forma urbana compacta. Orasul este faimos pentru orasul sau bisericesc inclus in UNESCO, pentru prezenta universitara si pentru rolul sau in economia regionala. Lulea este o baza puternica pentru turismul de iarna, calatoriile de coasta si industria nordica."
    },
    facts: {
      en: ["Lulea is the capital of Norrbotten County.", "It is a major port city on the Gulf of Bothnia.", "The city is home to Lulea University of Technology.", "Nearby Gammelstad Church Town is a UNESCO site.", "Lulea is a key hub for northern industry and logistics."],
      de: ["Lulea ist die Hauptstadt des Landkreises Norrbotten.", "Sie ist eine wichtige Hafenstadt am Bottnischen Meerbusen.", "Die Stadt beherbergt die Technische Universitat Lulea.", "Das nahe Gammelstad Kirchenstadtchen ist UNESCO-Welterbe.", "Lulea ist ein wichtiger Knotenpunkt fur Nordindustrie und Logistik."],
      hu: ["Lulea Norrbotten megye szekhelye.", "Fontos kikoto varos a Botteni-obol partjan.", "Itt talalhato a Luleai Mszaki Egyetem.", "A kozelben fekvo Gammelstad templomvaros UNESCO helyszin.", "Lulea fontos csomopont az eszaki ipar es logisztika szamara."],
      ro: ["Lulea este capitala comitatului Norrbotten.", "Este un oras-port important pe Golful Botniei.", "Orasul gazduieste Universitatea de Tehnologie Lulea.", "Satul bisericesc Gammelstad din apropiere este sit UNESCO.", "Lulea este un nod cheie pentru industria si logistica nordica."]
    },
    image: "/geo-images/sweden/lulea.webp",
  },
  {
    id: "city-karlstad",
    type: "city",
    parent: "SE",
    coords: [13.5036, 59.3793],
    name: { de: "Karlstad", hu: "Karlstad", ro: "Karlstad", en: "Karlstad" },
    description: {
      en: "Karlstad sits where the Klaralven river meets Lake Vattern and is one of western Sweden's most pleasant regional cities. It is known for its bright waterways, calm pace, and strong role in administration and commerce. The city has a reputation for sunshine, open squares, and easy access to inland nature. Karlstad works well as a travel base for Varmland and the lake country.",
      de: "Karlstad liegt dort, wo der Klaralven in den Vanernsee munden, und ist eine der angenehmsten Regionalstadte Westschwedens. Sie ist bekannt fur ihre hellen Wasserwege, ihr ruhiges Tempo und ihre starke Rolle in Verwaltung und Handel. Die Stadt hat den Ruf von viel Sonne, offenen Platzen und einfachem Zugang zur Binnenlandschaft. Karlstad eignet sich gut als Reisebasis fur Varmland und das Seenland.",
      hu: "Karlstad ott fekszik, ahol a Klaralven folyó a Venner toba torkollik, es Nyugat-Svedorszag egyik legkellemesebb regiokozpontja. Vilagos vizivilagara, nyugodt utemere es a kozigazgatasban, valamint kereskedelemben betoltott eros szerepere ismert. A varosnak sok napfenyrol, tágas tereiről es a belso videk konnyu elerhetosegerol van hire. Karlstad jo utazasbazis Varmland es a tovidek felfedezesere.",
      ro: "Karlstad se afla acolo unde raul Klaralven se varsa in lacul Vanern si este unul dintre cele mai placute orase regionale din vestul Suediei. Este cunoscut pentru apele sale luminoase, ritmul calm si rolul puternic in administratie si comert. Orasul are reputatia de loc insorit, cu piete deschise si acces usor la natura interioara. Karlstad functioneaza bine ca baza de calatorie pentru Varmland si tara lacurilor."
    },
    facts: {
      en: ["Karlstad is the county seat of Varmland.", "The city lies by Lake Vanern, Sweden's largest lake.", "Karlstad is often promoted as the city of sunshine.", "It is an important regional education and service center.", "The Klaralven delta shapes the city landscape."],
      de: ["Karlstad ist der Verwaltungssitz von Varmland.", "Die Stadt liegt am Vanern, Schwedens grosstem See.", "Karlstad wird oft als Sonnenstadt vermarktet.", "Sie ist ein wichtiges regionales Bildungs- und Dienstleistungszentrum.", "Das Delta des Klaralven pragt die Stadtlandschaft."],
      hu: ["Karlstad Varmland megye szekhelye.", "A varos a Vanern to partjan fekszik, ami Svedorszag legnagyobb tava.", "Karlstadot gyakran a napfeny varosakent reklamozzak.", "Fontos regioi oktatasi es szolgaltatasi kozpont.", "A Klaralven deltaja meghatarozza a varos tajat."],
      ro: ["Karlstad este resedinta comitatului Varmland.", "Orasul se afla langa lacul Vanern, cel mai mare lac din Suedia.", "Karlstad este adesea promovat ca orasul soarelui.", "Este un important centru regional de educatie si servicii.", "Delta raului Klaralven modeleaza peisajul orasului."]
    },
    image: "/geo-images/sweden/karlstad.webp",
  },
  {
    id: "city-jonkoping",
    type: "city",
    parent: "SE",
    coords: [14.1618, 57.7826],
    name: { de: "Jonkoping", hu: "Jonkoping", ro: "Jonkoping", en: "Jonkoping" },
    description: {
      en: "Jonkoping is a strategic inland city on the southern shore of Lake Vattern. It developed as a trade, manufacturing, and transport center and still plays a strong regional role. The city is known for fairs, logistics, and easy links to the rest of southern Sweden. Jonkoping also gives visitors a good mix of lake views, city services, and nearby countryside.",
      de: "Jonkoping ist eine strategisch gelegene Binnenstadt am sudlichen Ufer des Vatternsees. Sie entwickelte sich zu einem Handels-, Produktions- und Verkehrszentrum und spielt bis heute eine starke regionale Rolle. Die Stadt ist bekannt fur Messen, Logistik und gute Verbindungen zum Rest Sudschwedens. Jonkoping bietet Besuchern ausserdem eine gute Mischung aus Seeblick, Stadtdiensten und naher Landschaft.",
      hu: "Jonkoping egy strategiai fekvesu belso varos a Vattern-to deli partjan. Kereskedelmi, gyartoi es kozlekedesi kozpontkent fejlodott, es ma is eros regioi szerepe van. A varos hires vasarairol, logisztikai szereperol es a deli Svedorszag fele vezeto jo kapcsolatairol. Jonkoping a tolatvany, a varosi szolgaltatasok es a közeli videk jo kevereket adja.",
      ro: "Jonkoping este un oras strategic din interior, pe malul sudic al lacului Vattern. S-a dezvoltat ca centru de comert, productie si transport si inca are un rol regional puternic. Orasul este cunoscut pentru targuri, logistica si legaturi bune cu restul sudului Suediei. Jonkoping ofera vizitatorilor un amestec bun de peisaje de lac, servicii urbane si zona rurala apropiata."
    },
    facts: {
      en: ["Jonkoping is a major city in southern Sweden.", "The city sits at the southern end of Lake Vattern.", "Jonkoping is a logistics hub with strong road connections.", "The city has a major fair and exhibition tradition.", "Jonkoping is also linked to match production history."],
      de: ["Jonkoping ist eine wichtige Stadt in Sudschweden.", "Die Stadt liegt am sudlichen Ende des Vatternsees.", "Jonkoping ist ein Logistikknotenpunkt mit starken Strassenverbindungen.", "Die Stadt hat eine lange Messe- und Ausstellungstradition.", "Jonkoping ist auch mit der Geschichte der Zundholzproduktion verbunden."],
      hu: ["Jonkoping Svedorszag deli reszenek fontos varosa.", "A varos a Vattern-to deli vegeben fekszik.", "Jonkoping eros kozuti kapcsolatokkal rendelkezo logisztikai kozpont.", "A varosnak komoly vasar- es kiallitas hagyomanya van.", "Jonkoping a gyufagyartas tortenetehez is kotodik."],
      ro: ["Jonkoping este un oras important din sudul Suediei.", "Orasul se afla la capatul sudic al lacului Vattern.", "Jonkoping este un nod logistic cu legaturi rutiere puternice.", "Orasul are o lunga traditie de targuri si expozitii.", "Jonkoping este legat si de istoria productiei de chibrituri."]
    },
    image: "/geo-images/sweden/jonkoping.webp",
  }
];

export const swedenCulture: POI[] = [
  {
    id: "cult-visby",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
  ,
  {
    id: "hist-birka-hovgarden",
    type: "historical",
    parent: "SE",
    coords: [17.5375, 59.3360],
    name: { de: "Birka und Hovgarden", hu: "Birka es Hovgarden", ro: "Birka si Hovgarden", en: "Birka and Hovgarden" },
    description: {
      en: "Birka and Hovgarden form one of Sweden's most important Viking Age heritage landscapes. Birka was a key trading town on Bjorko in Lake Malaren and helped connect Scandinavia with the wider world. Hovgarden on the nearby mainland was the royal estate that supported the settlement. Together they show the power, trade, and early urban life of medieval Sweden.",
      de: "Birka und Hovgarden bilden eine der wichtigsten Kulturlandschaften der Wikingerzeit in Schweden. Birka war eine wichtige Handelsstadt auf Bjorko im Malaren und verband Skandinavien mit der weiteren Welt. Hovgarden auf dem nahegelegenen Festland war der Koenigssitz, der die Siedlung unterstuetzte. Zusammen zeigen sie Macht, Handel und das fruhe Stadtleben des mittelalterlichen Schwedens.",
      hu: "Birka es Hovgarden Svedorszag egyik legfontosabb viking kori oroksegtaja. Birka a Malaren to Bjorko szigeten fekvo fontos kereskedovaros volt, amely Skandinaviat a szelesebb vilaggal kototte ossze. A kozeli Hovgarden a kiralyi birtok volt, amely tamogatta a telepulest. Egyutt mutatjak be a hatalmat, a kereskedelmet es a korai varosi eletet.",
      ro: "Birka si Hovgarden formeaza unul dintre cele mai importante peisaje de patrimoniu din epoca vikinga din Suedia. Birka a fost un oras comercial cheie pe insula Bjorko din lacul Malaren si a legat Scandinavia de lumea mai larga. Hovgarden, pe continentul apropiat, era domeniul regal care sustinea asezarea. Impreuna arata puterea, comertul si viata urbana timpurie a Suediei medievale."
    },
    facts: {
      en: ["Birka is one of the earliest urban trading sites in Sweden.", "The area is a UNESCO World Heritage site.", "Birka lies on the island of Bjorko in Lake Malaren.", "Hovgarden was a royal estate connected to the settlement.", "The site is central to Viking Age archaeology."],
      de: ["Birka ist einer der fruhesten stadtischen Handelsorte Schwedens.", "Das Gebiet ist UNESCO-Weltkulturerbe.", "Birka liegt auf der Insel Bjorko im Malaren.", "Hovgarden war ein mit der Siedlung verbundenes Koenigsgut.", "Der Ort ist zentral fur die Archaologie der Wikingerzeit."],
      hu: ["Birka Svedorszag egyik legkorabbi varosi kereskedelmi helye.", "A terulet az UNESCO Vilagorokseg resze.", "Birka a Malaren to Bjorko szigeten talalhato.", "Hovgarden a telepuleshez kotodo kiralyi birtok volt.", "A hely kulcsfontossagu a viking kori regeszet szempontjabol."],
      ro: ["Birka este unul dintre cele mai timpurii situri urbane comerciale din Suedia.", "Zona este sit UNESCO.", "Birka se afla pe insula Bjorko din lacul Malaren.", "Hovgarden a fost un domeniu regal legat de asezare.", "Situl este central pentru arheologia epocii vikinge."]
    },
    image: "/geo-images/sweden/birka-hovgarden.webp",
  },
  {
    id: "hist-kalmar-castle",
    type: "historical",
    parent: "SE",
    coords: [16.3633, 56.6616],
    name: { de: "Kalmar Schloss", hu: "Kalmar var", ro: "Castelul Kalmar", en: "Kalmar Castle" },
    description: {
      en: "Kalmar Castle is one of Sweden's most famous Renaissance fortresses on the Baltic coast. It helped defend the kingdom and became closely linked to the Kalmar Union, one of the great political unions of Nordic history. The castle sits by the water and gives visitors a clear view of Sweden's eastern defensive past. Today it works as a major heritage attraction and museum site.",
      de: "Das Schloss Kalmar ist eine der bekanntesten Renaissancefestungen Schwedens an der Ostseekuste. Es half bei der Verteidigung des Reiches und wurde eng mit der Kalmarer Union verbunden, einer der grossen politischen Unionen der nordischen Geschichte. Das Schloss liegt direkt am Wasser und vermittelt Besuchern einen klaren Eindruck der ostschwedischen Verteidigungsgeschichte. Heute ist es eine bedeutende Sehenswurdigkeit und Museumsanlage.",
      hu: "A Kalmar var Svedorszag egyik legismertebb reneszansz eroditese a Balti-tenger partjan. Az orszag vedelmben fontos szerepet jatszott, es szorosan kotodik a Kalmari Uniotahoz, az eszaki tortenelem egyik legfontosabb politikai szovetsegehez. A var a viz mellett all, es jol megmutatja Svedorszag keleti vedelemtörténetet. Ma nagy oroksegi latvanyossag es muzeumi helyszin.",
      ro: "Castelul Kalmar este una dintre cele mai faimoase fortarete renascentiste din Suedia, pe coasta baltica. A ajutat la apararea regatului si a fost strans legat de Uniunea de la Kalmar, una dintre marile uniuni politice din istoria nordica. Castelul se afla langa apa si ofera vizitatorilor o imagine clara asupra trecutului defensiv al Suediei de est. Astazi functioneaza ca atractie majora de patrimoniu si sit muzeal."
    },
    facts: {
      en: ["The castle is one of the best-preserved Renaissance castles in Sweden.", "Kalmar was a key strategic city on the east coast.", "The Kalmar Union was signed here in 1397.", "The fortress controlled sea routes in the Baltic.", "The site is now open as a museum and event venue."],
      de: ["Das Schloss ist eines der am besten erhaltenen Renaissance-Schlosser Schwedens.", "Kalmar war eine strategisch wichtige Stadt an der Ostkuste.", "Die Kalmarer Union wurde hier 1397 unterzeichnet.", "Die Festung kontrollierte Seewege in der Ostsee.", "Der Ort ist heute als Museum und Veranstaltungsort offen."],
      hu: ["A var Svedorszag egyik legjobban megorzott reneszansz vara.", "Kalmar fontos strategiai varos volt a keleti parton.", "A Kalmeri Unio 1397-ben itt kerult alairasra.", "Az eroditmeny a balti tengeri utvonalakat ellenorizte.", "A hely ma muzeumkent es rendezvenyhelyszinkent is mukodik."],
      ro: ["Castelul este unul dintre cele mai bine pastrate castele renascentiste din Suedia.", "Kalmar a fost un oras strategic cheie pe coasta de est.", "Uniunea de la Kalmar a fost semnata aici in 1397.", "Fortareata controla rutele maritime din Baltica.", "Situl este acum deschis ca muzeu si locatie pentru evenimente."]
    },
    image: "/geo-images/sweden/kalmar-castle.webp",
  },
  {
    id: "hist-gripsholm-castle",
    type: "historical",
    parent: "SE",
    coords: [17.2057, 59.2487],
    name: { de: "Gripsholm Schloss", hu: "Gripsholm var", ro: "Castelul Gripsholm", en: "Gripsholm Castle" },
    description: {
      en: "Gripsholm Castle rises above Lake Malaren and is one of the great royal castles of Sweden. It grew from a medieval fortress into a Renaissance residence for the Vasa kings. The castle is famous for its portrait collection, thick towers, and scenic lakeside setting. It remains a strong symbol of royal power, art, and state history.",
      de: "Das Schloss Gripsholm erhebt sich uber dem Malaren und ist eines der grossen Koenigsschlosser Schwedens. Es entwickelte sich von einer mittelalterlichen Festung zu einer Renaissance-Residenz der Vasa-Koenige. Das Schloss ist beruhmt fur seine Portratssammlung, seine dicken Turme und seine malerische Lage am See. Es bleibt ein starkes Symbol fur Koenigsmacht, Kunst und Staatsgeschichte.",
      hu: "A Gripsholmi var a Malaren to partjan emelkedik, es Svedorszag egyik nagy kiralyi vara. Kozepkori eroditmenybol a Vasa kiralyok reneszansz rezidenciajava fejlodott. A var hires portregyujtemenyerol, vaskos tornyairol es festoi toparti fekveserol. Ma is eros szimboluma a kiralyi hatalomnak, a muveszetnek es az allamtortenetnek.",
      ro: "Castelul Gripsholm se ridica deasupra lacului Malaren si este unul dintre marile castele regale ale Suediei. A evoluat dintr-o fortareata medievala intr-o resedinta renascentista a regilor Vasa. Castelul este faimos pentru colectia sa de portrete, turnurile groase si cadrul pitoresc de pe malul lacului. Ramane un simbol puternic al puterii regale, al artei si al istoriei statului."
    },
    facts: {
      en: ["Gripsholm is a royal castle with a long state history.", "It sits in Mariefred on Lake Malaren.", "The portrait gallery is one of Sweden's best known.", "The castle originated in the 16th century.", "It is a major stop on the royal heritage route."],
      de: ["Gripsholm ist ein Koenigsschloss mit langer Staatsgeschichte.", "Es liegt in Mariefred am Malaren.", "Die Portratsammlung ist eine der bekanntesten Schwedens.", "Das Schloss entstand im 16. Jahrhundert.", "Es ist ein wichtiger Halt auf der royalen Kulturerbe-Route."],
      hu: ["Gripsholm kiralyi var hosszu allamtortenettel.", "Mariefredben, a Malaren to partjan fekszik.", "A portregaleria Svedorszag egyik legismertebbje.", "A var a 16. szazadban alakult ki.", "Fontos allomas a kiralyi orokseg utvonalon."],
      ro: ["Gripsholm este un castel regal cu o lunga istorie de stat.", "Se afla la Mariefred, pe lacul Malaren.", "Galeria de portrete este una dintre cele mai cunoscute din Suedia.", "Castelul isi are originea in secolul al XVI-lea.", "Este o oprire majora pe ruta patrimoniului regal."]
    },
    image: "/geo-images/sweden/gripsholm-castle.webp",
  },
  {
    id: "hist-gamla-uppsala",
    type: "historical",
    parent: "SE",
    coords: [17.6328, 59.8731],
    name: { de: "Gamla Uppsala", hu: "Regi Uppsala", ro: "Gamla Uppsala", en: "Gamla Uppsala" },
    description: {
      en: "Gamla Uppsala is one of the most important historical sites in Sweden's early state formation. Its burial mounds, older church site, and landscape traditions point back to pre-Christian and Viking-era power centers. The area is strongly tied to kings, rituals, and the idea of a sacred royal landscape. It is a key place for understanding the deep roots of Swedish history.",
      de: "Gamla Uppsala ist eine der wichtigsten historischen Statten der fruhen schwedischen Staatsbildung. Seine Grabhugel, der alte Kirchenstandort und die Landschaftstraditionen weisen auf vorchristliche und wikingerzeitliche Machtzentren hin. Das Gebiet ist eng mit Konigen, Ritualen und der Idee einer heiligen koniglichen Landschaft verbunden. Es ist ein Schlupelort zum Verstandnis der tiefen Wurzeln der schwedischen Geschichte.",
      hu: "Gamla Uppsala Svedorszag korai allamalapitasanak egyik legfontosabb tortenelmi helyszine. Sirhalmai, a regi templomhely es a tajhagyomanyok a keresztseg elotti es viking kori hatalmi kozpontokra utalnak. A terulet szorosan kapcsolodik a kiralyokhoz, a szertartasokhoz es a szent kiralyi taj gondolatahoz. Kulcsfontossagu hely a sved tortenelem mely gyokerenek megerteseben.",
      ro: "Gamla Uppsala este unul dintre cele mai importante situri istorice din formarea timpurie a statului suedez. Movilele funerare, situl vechii biserici si traditiile peisajului trimit spre centre de putere precrestine si din epoca vikinga. Zona este puternic legata de regi, ritualuri si ideea unui peisaj regal sacru. Este un loc cheie pentru intelegerea radacinilor adanci ale istoriei suedeze."
    },
    facts: {
      en: ["Gamla Uppsala is famous for its three royal burial mounds.", "The area was a religious and political center in early Sweden.", "The old church site sits near the mounds.", "It is one of the most studied Viking Age landscapes in the country.", "Modern Uppsala grew partly from this older center."],
      de: ["Gamla Uppsala ist fur seine drei koniglichen Grabhugel beruhmt.", "Das Gebiet war ein religioeses und politisches Zentrum im fruhen Schweden.", "Der alte Kirchenstandort liegt nahe den Hugeln.", "Es ist eine der am besten erforschten Landschaften der Wikingerzeit im Land.", "Das moderne Uppsala wuchs teilweise aus diesem alteren Zentrum."],
      hu: ["Gamla Uppsala harom kiralyi sirhalmarol hires.", "A terulet korai Svedorszag vallasi es politikai kozpontja volt.", "A regi templomhely a halmok kozeleben talalhato.", "Ez az orszag egyik legjobban kutatott viking kori tajegysege.", "A mai Uppsala reszben ebbol a regebbi kozpontbol nott ki."],
      ro: ["Gamla Uppsala este faimos pentru cele trei movile funerare regale.", "Zona a fost un centru religios si politic in Suedia timpurie.", "Vechiul sit al bisericii se afla langa movile.", "Este unul dintre cele mai studiate peisaje ale epocii vikinge din tara.", "Uppsala moderna a crescut partial din acest centru mai vechi."]
    },
    image: "/geo-images/sweden/gamla-uppsala.webp",
  },
  {
    id: "hist-glimmingehus",
    type: "historical",
    parent: "SE",
    coords: [14.2065, 55.5046],
    name: { de: "Glimmingehus", hu: "Glimmingehus", ro: "Glimmingehus", en: "Glimmingehus" },
    description: {
      en: "Glimmingehus is the best-preserved medieval manor house in Scandinavia. Built in 1499, it shows how wealthy nobles fortified their homes in southern Sweden. Thick walls, defensive details, and a dramatic stone silhouette make it a standout historical attraction. The site is a strong draw for castle travelers and heritage tourism in Skane.",
      de: "Glimmingehus ist das am besten erhaltene mittelalterliche Herrenhaus Skandinaviens. Das 1499 erbaute Haus zeigt, wie wohlhabende Adlige ihre Wohnsitze in Sudschweden befestigten. Dicke Mauern, defensive Details und eine dramatische Silhouette aus Stein machen es zu einer herausragenden historischen Attraktion. Der Ort ist ein starker Anziehungspunkt fur Schlossreisende und Kulturtourismus in Skane.",
      hu: "Glimmingehus Skandinavia legjobban megorzott kozepkori udvarhaz-a. Az 1499-ben epitett epulet jol mutatja, hogyan erositettek meg a gazdag nemesek a deli svedorszagi otthonaikat. Vastag falai, vedelmi reszletei es dramai kovi sziluettje kulonleges tortenelmi latvannyá teszik. A hely eros vonzerot jelent a varakat kedvelo utazok es a skanei oroksegturizmus szamara.",
      ro: "Glimmingehus este cea mai bine pastrata casa manor medievala din Scandinavia. Construita in 1499, arata cum si-au fortificat nobilii bogati locuintele din sudul Suediei. Zidurile groase, detaliile defensive si silueta dramatica de piatra o fac o atractie istorica remarcabila. Situl este o atractie puternica pentru turismul de patrimoniu din Skane."
    },
    facts: {
      en: ["Glimmingehus was built in 1499.", "It is considered Scandinavia's best-preserved medieval manor.", "The house was designed with defense in mind.", "It stands in Skane near the Baltic coast.", "The site is open as a museum attraction."],
      de: ["Glimmingehus wurde 1499 erbaut.", "Es gilt als das am besten erhaltene mittelalterliche Herrenhaus Skandinaviens.", "Das Haus wurde mit Blick auf Verteidigung entworfen.", "Es steht in Skane nahe der Ostseekuste.", "Der Ort ist als Museumsattraktion geoffnet."],
      hu: ["Glimmingehus 1499-ben epult.", "Skandinavia legjobban megorzott kozepkori udvarhazanak tartjak.", "Az epuletet vedelmi szempontok szerint tervezték.", "Skane-ban, a balti part kozeleben all.", "A hely muzeumi latvanyossagkent latogathato."],
      ro: ["Glimmingehus a fost construit in 1499.", "Este considerata cea mai bine pastrata casa manor medievala din Scandinavia.", "Casa a fost proiectata tinand cont de aparare.", "Se afla in Skane, aproape de coasta baltica.", "Situl este deschis ca atractie muzeala."]
    },
    image: "/geo-images/sweden/glimmingehus.webp",
  },
  {
    id: "hist-alvsborg-fortress",
    type: "historical",
    parent: "SE",
    coords: [11.9090, 57.6967],
    name: { de: "Alvsborg Festung", hu: "Alvsborg erod", ro: "Fortareata Alvsborg", en: "Alvsborg Fortress" },
    description: {
      en: "Alvsborg Fortress guarded the entrance to Gothenburg and the Swedish west coast. Its role in defense made it one of the most important military positions in the region. The old fortress was tied to wars with Denmark and to the protection of trade routes into the North Sea. Today the location is remembered as a key chapter in Gothenburg's early security history.",
      de: "Die Festung Alvsborg bewachte die Einfahrt nach Gothenburg und die schwedische Westkuste. Ihre Verteidigungsrolle machte sie zu einer der wichtigsten Militarstellungen der Region. Die alte Festung war mit den Kriegen gegen Danemark und mit dem Schutz der Handelswege zur Nordsee verbunden. Heute erinnert der Ort an ein wichtiges Kapitel der fruhen Sicherheitsgeschichte Gothenburgs.",
      hu: "Az Alvsborgi erod Gothenburg bejaratat es Svedorszag nyugati partjat védte. Vedelmi szerepe miatt a regio egyik legfontosabb katonai pontja volt. A regi erod a Dania elleni haborukhoz es az Eszaki-tengerre nyilo kereskedelmi utak vedelmehez kotodott. Ma a hely Gothenburg korai biztonsagtortenetenek fontos fejezete.",
      ro: "Fortareata Alvsborg a aparat intrarea in Gothenburg si coasta de vest a Suediei. Rolul sau defensiv a facut-o una dintre cele mai importante pozitii militare din regiune. Vechea fortareata a fost legata de razboaiele cu Danemarca si de protectia rutelor comerciale catre Marea Nordului. Astazi locul este retinut ca un capitol cheie din istoria timpurie a securitatii Gothenburgului."
    },
    facts: {
      en: ["Alvsborg controlled the approach to Gothenburg.", "The fortress was important in wars with Denmark.", "It protected west coast trade routes.", "The site is part of Sweden's coastal military history.", "The name lives on in local geography and history."],
      de: ["Alvsborg kontrollierte die Zufahrt nach Gothenburg.", "Die Festung war in den Kriegen mit Danemark wichtig.", "Sie schutzte die Handelsrouten an der Westkuste.", "Der Ort gehort zur schwedischen Kustenmilitargeschichte.", "Der Name lebt in lokaler Geografie und Geschichte weiter."],
      hu: ["Alvsborg ellenorizte a bejaratot Gothenburghoz.", "Az erod fontos volt a Dania elleni haborukban.", "Vedelmezte a nyugati parti kereskedelmi utvonalakat.", "A hely a sved partmenti katonai tortenelem resze.", "A nev ma is el a helyi foldrajzban es tortenelemben."],
      ro: ["Alvsborg controla accesul spre Gothenburg.", "Fortareata a fost importanta in razboaiele cu Danemarca.", "A protejat rutele comerciale de pe coasta de vest.", "Situl face parte din istoria militara costiera a Suediei.", "Numele traieste mai departe in geografia si istoria locala."]
    },
    image: "/geo-images/sweden/alvsborg-fortress.webp",
  },
  {
    id: "hist-battle-lund",
    type: "historical",
    parent: "SE",
    coords: [13.1905, 55.7038],
    name: { de: "Schlacht bei Lund", hu: "Lundi csata", ro: "Batalia de la Lund", en: "Battle of Lund" },
    description: {
      en: "The Battle of Lund in 1676 was one of the bloodiest battles fought in the Nordic countries. It took place near Lund during the Scanian War between Sweden and Denmark. The outcome helped secure Swedish control over Scania and became a defining moment in regional history. Today the battlefield is remembered as a major historical landmark of southern Sweden.",
      de: "Die Schlacht bei Lund von 1676 war eine der blutigsten Schlachten, die in den nordischen Landern geschlagen wurden. Sie fand nahe Lund wahrend des Schonischen Krieges zwischen Schweden und Danemark statt. Das Ergebnis half, die schwedische Kontrolle uber Skane zu sichern, und wurde zu einem prageenden Moment der Regionalgeschichte. Heute gilt das Schlachtfeld als wichtiges historisches Wahrzeichen Sudschwedens.",
      hu: "Az 1676-os lundi csata az egyik legveresebb csata volt, amelyet az eszaki orszagokban vivtak. Lund kozeleben zajlott a Svedorszag es Dania kozotti Skanei haboruban. Az eredmeny segitett megszilarditani Svedorszag skanei uralmat, es meghatarozo pillanatta valt a regio torteneteben. Ma a csatatert deli Svedorszag fontos tortenelmi helyszineként tartjak szamon.",
      ro: "Batalia de la Lund din 1676 a fost una dintre cele mai sangeroase batalii purtate in tarile nordice. A avut loc langa Lund in timpul Razboiului Scanian dintre Suedia si Danemarca. Rezultatul a ajutat la consolidarea controlului suedez asupra Scaniei si a devenit un moment definitoriu in istoria regionala. Astazi campul de lupta este amintit ca un reper istoric major al sudului Suediei."
    },
    facts: {
      en: ["The battle took place in 1676.", "It was part of the Scanian War.", "The fighting was near the city of Lund.", "It is remembered as one of the bloodiest Nordic battles.", "The outcome strengthened Swedish control in Scania."],
      de: ["Die Schlacht fand 1676 statt.", "Sie war Teil des Schonischen Krieges.", "Die Kampfe fanden nahe der Stadt Lund statt.", "Sie gilt als eine der blutigsten Schlachten des Nordens.", "Das Ergebnis starkerte die schwedische Kontrolle in Skane."],
      hu: ["A csata 1676-ban zajlott.", "A Skanei haboru resze volt.", "A harcok Lund kozeleben tortentek.", "Az egyik legveresebb eszaki csatakent emlegetik.", "Az eredmeny erositette a sved uralmat Skane felett."],
      ro: ["Batalia a avut loc in 1676.", "A facut parte din Razboiul Scanian.", "Lupta s-a dat langa orasul Lund.", "Este amintita ca una dintre cele mai sangeroase batalii nordice.", "Rezultatul a intarit controlul suedez in Scania."]
    },
    image: "/geo-images/sweden/battle-lund.webp",
  },
  {
    id: "hist-stangebro-battle",
    type: "historical",
    parent: "SE",
    coords: [15.6340, 58.4010],
    name: { de: "Schlacht bei Stangebro", hu: "Stangebro csata", ro: "Batalia de la Stangebro", en: "Battle of Stangebro" },
    description: {
      en: "The Battle of Stangebro in 1598 was a decisive conflict in Swedish succession politics. It took place near Linkoping and marked the struggle between King Sigismund and Duke Charles. The battle helped shape the future Swedish monarchy and the balance of power in the kingdom. It remains an important historical reference for the city's early modern era.",
      de: "Die Schlacht bei Stangebro von 1598 war ein entscheidender Konflikt in der schwedischen Nachfolgepolitik. Sie fand nahe Linkoping statt und markierte den Kampf zwischen Konig Sigismund und Herzog Karl. Die Schlacht half, die zukunftige schwedische Monarchie und das Machtgleichgewicht im Reich zu formen. Sie bleibt ein wichtiger historischer Bezugspunkt fur die fruhneuzeitliche Geschichte der Stadt.",
      hu: "Az 1598-as Stangebro csata meghatarozo konfliktus volt a sved oroklesi politikaban. Linkoping kozeleben zajlott, es Sigismund kiraly es Karoly herceg küzdelmet jelölte. A csata hozzajarult a kesobbi sved monarchia es az orszagon beluli hatalmi egyensuly alakulásahoz. A varos korai ujkori tortenetenek fontos tortenelmi referenciaja maradt.",
      ro: "Batalia de la Stangebro din 1598 a fost un conflict decisiv in politica succesiunii suedeze. S-a purtat langa Linkoping si a marcat lupta dintre regele Sigismund si ducele Charles. Batalia a ajutat la conturarea viitoarei monarhii suedeze si a echilibrului de putere in regat. Ramane o referinta istorica importanta pentru epoca moderna timpurie a orasului."
    },
    facts: {
      en: ["The battle took place near Linkoping in 1598.", "It was fought between Sigismund and Duke Charles.", "The conflict shaped Swedish royal succession.", "Stangebro is a key site in early modern Swedish history.", "The event is closely tied to Linkoping's historical identity."],
      de: ["Die Schlacht fand 1598 nahe Linkoping statt.", "Sie wurde zwischen Sigismund und Herzog Karl ausgetragen.", "Der Konflikt pragte die schwedische Thronfolge.", "Stangebro ist ein wichtiger Ort der fruhneuzeitlichen schwedischen Geschichte.", "Das Ereignis ist eng mit der historischen Identitat Linkopings verbunden."],
      hu: ["A csata 1598-ban, Linkoping kozeleben zajlott.", "Sigismund es Karoly herceg kozott folyt.", "A konfliktus formalta a sved kiralyi oroklest.", "Stangebro az ujkori sved tortenelem fontos helyszine.", "Az esény szorosan kotodik Linkoping tortenelmi identitasahoz."],
      ro: ["Batalia a avut loc in 1598, langa Linkoping.", "A fost purtata intre Sigismund si ducele Charles.", "Conflictul a modelat succesiunea regala suedeza.", "Stangebro este un sit cheie in istoria suedeza moderna timpurie.", "Evenimentul este strans legat de identitatea istorica a Linkopingului."]
    },
    image: "/geo-images/sweden/stangebro-battle.webp",
  }
  ,
  {
    id: "land-stockholm-city-hall",
    type: "landmark",
    parent: "SE",
    coords: [18.0544, 59.3268],
    name: { de: "Stockholmer Rathaus", hu: "Stockholm Varoshaza", ro: "Primaria Stockholm", en: "Stockholm City Hall" },
    description: {
      en: "Stockholm City Hall is one of the city's most iconic buildings and a major symbol of Swedish civic life. Built on the water's edge, it is known for its brick tower, ceremonial halls, and the Nobel Prize banquet. The architecture gives Stockholm a strong skyline landmark and a classic northern European feel. It remains a must-see stop for visitors interested in architecture and ceremony.",
      de: "Das Stockholmer Rathaus ist eines der ikonischsten Gebaude der Stadt und ein wichtiges Symbol des schwedischen Burgerlebens. Es wurde direkt am Wasser erbaut und ist fur seinen Backsteinturm, seine Festsaale und das Nobelpreisbankett bekannt. Die Architektur verleiht Stockholm ein starkes Skyline-Wahrzeichen und ein klassisches nord-europaisches Gefuhl. Es bleibt ein Pflichtstopp fur Besucher mit Interesse an Architektur und Zeremoniell.",
      hu: "A Stockholmi Varoshaza a varos egyik legikonikusabb epulete es a sved kozzelet fontos szimboluma. A vizparton all, es hires teglatornyarol, ceremoniatermeirol es a Nobel-dij bankettrol. Az epulet erosen meghatarozza Stockholm latkepét, es klasszikus eszak-europai hangulatot ad. Az epitett orokseg es az unnepsegek irant erdeklodoknek kotelezo lathatnivalo.",
      ro: "Primaria Stockholm este una dintre cele mai iconice cladiri ale orasului si un simbol major al vietii civice suedeze. Construita pe malul apei, este cunoscuta pentru turnul sau de caramida, salile ceremoniale si banchetul Premiului Nobel. Arhitectura ii da Stockholmului un reper puternic in skyline si o senzatie clasica nord-europeana. Ramane o oprire obligatorie pentru vizitatorii interesati de arhitectura si ceremonie."
    },
    facts: {
      en: ["The building was completed in 1923.", "It hosts the annual Nobel Prize banquet.", "The tower is one of Stockholm's most recognizable silhouettes.", "The hall sits on the waterfront in central Stockholm.", "The interior includes the Blue Hall and Golden Hall."],
      de: ["Das Gebaude wurde 1923 fertiggestellt.", "Hier findet das jahrliche Nobelpreisbankett statt.", "Der Turm ist eine der bekanntesten Silhouetten Stockholms.", "Das Rathaus liegt am Ufer im Zentrum Stockholms.", "Im Inneren befinden sich der Blaue Saal und der Goldene Saal."],
      hu: ["Az epulet 1923-ra keszult el.", "Itt rendezik az eves Nobel-dij bankettet.", "A torony Stockholm egyik legismertebb sziluettje.", "A varoshaza a belso varos vizpartjan all.", "Belsejeben megtalalhato a Kék terem es az Arany terem."],
      ro: ["Cladirea a fost finalizata in 1923.", "Aici are loc banchetul anual al Premiului Nobel.", "Turnul este una dintre cele mai recognoscibile siluete din Stockholm.", "Primaria se afla pe malul apei in centrul orasului.", "Interiorul include Sala Albastra si Sala Aurie."]
    },
    image: "/geo-images/sweden/stockholm-city-hall.webp",
  },
  {
    id: "land-stockholm-royal-palace",
    type: "landmark",
    parent: "SE",
    coords: [18.0707, 59.3275],
    name: { de: "Stockholmer Schloss", hu: "Stockholmi kiralyi palota", ro: "Palatul Regal Stockholm", en: "Stockholm Royal Palace" },
    description: {
      en: "The Stockholm Royal Palace is the official residence of the Swedish monarch and one of the largest palaces in Europe. Located in Gamla Stan, it combines ceremonial state rooms, museums, and royal tradition in one landmark complex. The changing of the guard and the palace chapels keep the site alive as a working royal center. Its scale and central location make it a defining Stockholm attraction.",
      de: "Das Stockholmer Schloss ist die offizielle Residenz des schwedischen Monarchen und eines der grossten Schlosser Europas. In Gamla Stan gelegen, vereint es Zeremoniensale, Museen und royale Tradition in einem Wahrzeichen-Komplex. Die Wachablösung und die Schlosskapellen halten den Ort als funktionierendes konigliches Zentrum lebendig. Seine Grosse und Lage machen es zu einer prägenden Attraktion Stockholms.",
      hu: "A Stockholmi kiralyi palota a sved uralkodo hivatalos rezidenciaja es Europa egyik legnagyobb palotaja. Gamla Stanban helyezkedik el, es ceremoniatermeket, muzeumokat es kiralyi hagyomanyt egyesit egyetlen lenyugozo egyuttesben. Az orevaltás es a palotakapolnak teszik a helyszint elo kiralyi kozponttá. Merete es kozponti fekvese miatt Stockholm egyik meghatarozo latvanyossaga.",
      ro: "Palatul Regal Stockholm este resedinta oficiala a monarhului suedez si unul dintre cele mai mari palate din Europa. Situat in Gamla Stan, imbina sali ceremoniale, muzee si traditie regala intr-un singur complex emblematic. Schimbarea garzii si capelele palatului mentin locul viu ca centru regal functional. Dimensiunea si pozitia sa centrala il fac o atractie definitorie a Stockholmului."
    },
    facts: {
      en: ["It is the official residence of the Swedish monarch.", "The palace has more than 600 rooms.", "It stands in Stockholm's Old Town.", "The site includes several museums and ceremonial spaces.", "The building follows a baroque palace tradition."],
      de: ["Es ist die offizielle Residenz des schwedischen Monarchen.", "Das Schloss hat mehr als 600 Zimmer.", "Es steht in der Stockholmer Altstadt.", "Der Ort umfasst mehrere Museen und Zeremoniensale.", "Das Gebaude folgt einer barocken Schlosstradition."],
      hu: ["Ez a sved uralkodo hivatalos rezidenciaja.", "A palotaban tobb mint 600 szoba van.", "Stockholm ovarosaban all.", "A helyszin tobb muzeumot es ceremoniatermet is magaba foglal.", "Az epulet barokk palotahagyomanyt kovet."],
      ro: ["Este resedinta oficiala a monarhului suedez.", "Palatul are peste 600 de camere.", "Se afla in Orasul Vechi al Stockholmului.", "Situl include mai multe muzee si spatii ceremoniale.", "Cladirea urmeaza traditia palatelor baroce."]
    },
    image: "/geo-images/sweden/stockholm-royal-palace.webp",
  },
  {
    id: "land-uppsala-cathedral",
    type: "landmark",
    parent: "SE",
    coords: [17.6354, 59.8584],
    name: { de: "Dom zu Uppsala", hu: "Uppsala katedralis", ro: "Catedrala din Uppsala", en: "Uppsala Cathedral" },
    description: {
      en: "Uppsala Cathedral dominates the skyline of the historic university city. It is the largest church in the Nordic countries and a major symbol of Swedish Christianity. The building is closely linked to royal burials, academic life, and the city's medieval origins. Its twin towers and Gothic design make it one of Sweden's strongest landmark images.",
      de: "Der Dom zu Uppsala pragt die Skyline der historischen Universitatsstadt. Er ist die grosste Kirche der nordischen Lander und ein wichtiges Symbol des schwedischen Christentums. Das Gebaude ist eng mit koniglichen Bestattungen, dem akademischen Leben und den mittelalterlichen Ursprungen der Stadt verbunden. Seine Doppelturme und die gotische Gestaltung machen ihn zu einem der starksten Wahrzeichen Schwedens.",
      hu: "Az Uppsalai katedralis uralja a tortenelmi egyetemi varos latkepet. Ez az eszaki orszagok legnagyobb temploma es a sved kereszténység egyik fontos szimboluma. Az epulet szorosan kapcsolodik a kiralyi temetkezesehez, az akademiai elethez es a varos kozepkori gyokereihez. Ket tornya es gotikus formaja Svedorszag egyik legerosebb latnivalojava teszi.",
      ro: "Catedrala din Uppsala domina skyline-ul orasului universitar istoric. Este cea mai mare biserica din tarile nordice si un simbol major al crestinismului suedez. Cladirea este strans legata de inmormantari regale, viata academica si originile medievale ale orasului. Turnurile sale gemene si designul gotic o fac una dintre cele mai puternice imagini reper din Suedia."
    },
    facts: {
      en: ["It is the largest cathedral in the Nordic countries.", "The church was consecrated in the 15th century.", "Several Swedish kings are buried here.", "The cathedral is a landmark of Uppsala University city.", "Its towers are visible from much of the city."],
      de: ["Es ist die grosste Kathedrale der nordischen Lander.", "Die Kirche wurde im 15. Jahrhundert geweiht.", "Mehrere schwedische Konige sind hier begraben.", "Die Kathedrale ist ein Wahrzeichen der Universitatsstadt Uppsala.", "Ihre Turme sind aus weiten Teilen der Stadt sichtbar."],
      hu: ["Ez az eszaki orszagok legnagyobb katedralisa.", "A templomot a 15. szazadban szenteltek fel.", "Tobb sved kiraly is itt nyugszik.", "A katedralis Uppsala egyetemi varosanak jelkepe.", "A tornyai a varos nagy reszerol lathatók."],
      ro: ["Este cea mai mare catedrala din tarile nordice.", "Biserica a fost consacrata in secolul al XV-lea.", "Mai multi regi suedezi sunt inmormantati aici.", "Catedrala este un reper al orasului universitar Uppsala.", "Turnurile sale sunt vizibile din mare parte a orasului."]
    },
    image: "/geo-images/sweden/uppsala-cathedral.webp",
  },
  {
    id: "land-turning-torso",
    type: "landmark",
    parent: "SE",
    coords: [12.9737, 55.6049],
    name: { de: "Turning Torso", hu: "Turning Torso", ro: "Turning Torso", en: "Turning Torso" },
    description: {
      en: "Turning Torso is Malmö's most famous modern landmark and one of Scandinavia's boldest skyscrapers. Designed by Santiago Calatrava, it twists upward in a dramatic spiral that changed the city's skyline. The tower reflects Malmö's shift from heavy industry to design, housing, and urban renewal. It remains a top SEO-friendly symbol of modern Sweden and contemporary architecture.",
      de: "Der Turning Torso ist Malmos bekanntestes modernes Wahrzeichen und einer der kuhnsten Wolkenkratzer Skandinaviens. Entworfen von Santiago Calatrava, dreht er sich in einer dramatischen Spirale nach oben und veranderte die Skyline der Stadt. Der Turm spiegelt Malmos Wandel von Schwerindustrie zu Design, Wohnen und Stadterneuerung wider. Er bleibt ein starkes Symbol fur modernes Schweden und zeitgenossische Architektur.",
      hu: "A Turning Torso Malmo legismertebb modern latvanyossaga es Skandinavia egyik legbatrabb felhokarcoloja. Santiago Calatrava tervezte, es drmai csavarodassal emelkedik felfele, ami atalakitotta a varos latkepét. A torony Malmo iparvarosi multjarol a dizajn, a lakohazak es a varosmegujitas fele valo fordulatot jelzi. Tovabbra is az egyik legerosebb modern sved szimbolum.",
      ro: "Turning Torso este cel mai faimos reper modern din Malmö si unul dintre cei mai indrazneti zgarie-nori din Scandinavia. Proiectat de Santiago Calatrava, se rasuceste intr-o spirala dramatica ce a schimbat skyline-ul orasului. Turnul reflecta trecerea Malmö-ului de la industrie grea la design, locuinte si regenerare urbana. Ramane un simbol puternic al Suediei moderne si al arhitecturii contemporane."
    },
    facts: {
      en: ["Turning Torso opened in 2005.", "It was designed by Santiago Calatrava.", "The tower has a distinctive twisting form.", "It stands in the Western Harbour area of Malmö.", "It is one of the city's best known landmarks."],
      de: ["Turning Torso wurde 2005 eroffnet.", "Er wurde von Santiago Calatrava entworfen.", "Der Turm hat eine markante verdrehte Form.", "Er steht im Westhafen von Malmo.", "Er ist eines der bekanntesten Wahrzeichen der Stadt."],
      hu: ["A Turning Torso 2005-ben nyilt meg.", "Santiago Calatrava tervezte.", "A toronynak jellegzetes csavart formaja van.", "Malmo Nyugati Kikotojeben all.", "A varos egyik legismertebb latnivaloja."],
      ro: ["Turning Torso a fost deschis in 2005.", "A fost proiectat de Santiago Calatrava.", "Turnul are o forma rasucita distinctiva.", "Se afla in zona Western Harbour din Malmö.", "Este unul dintre cele mai cunoscute repere ale orasului."]
    },
    image: "/geo-images/sweden/turning-torso.webp",
  }
  ,
  {
    id: "land-gothenburg-opera-house",
    type: "landmark",
    parent: "SE",
    coords: [11.9668, 57.7064],
    name: { de: "Opernhaus Gothenburg", hu: "Gothenburgi Operahaz", ro: "Opera din Gothenburg", en: "Gothenburg Opera House" },
    description: {
      en: "The Gothenburg Opera House is a modern cultural landmark on the waterfront of Sweden's west coast city. Its clean lines and harbor views make it a favorite symbol of the city's urban renewal. The building hosts opera, ballet, and major stage productions that draw both locals and visitors. It adds a strong architectural and cultural identity to Gothenburg's central harbor district.",
      de: "Das Opernhaus Gothenburg ist ein modernes kulturelles Wahrzeichen an der Uferfront der Westkustestadt. Seine klaren Linien und der Blick auf den Hafen machen es zu einem beliebten Symbol der Stadterneuerung. Das Gebaude beherbergt Oper, Ballett und grosse Buhnenproduktionen, die Einheimische und Besucher anziehen. Es verleiht dem zentralen Hafengebiet von Gothenburg eine starke architektonische und kulturelle Identitat.",
      hu: "A Gothenburgi Operahaz modern kulturális latnivalo a nyugati parti varos vizpartjan. Tiszta vonalai es a kikitore nyilo kilatas miatt a varosmegujitas kedvelt szimboluma. Az epulet operat, balettet es nagy szinhazi produkciokat fogad, amelyek helyieket es turistakat is vonzanak. Erteljes epiteszeti es kulturális identitast ad Gothenburg kozponti kikotoi negyedenek.",
      ro: "Opera din Gothenburg este un reper cultural modern pe faleza orasului de pe coasta de vest a Suediei. Liniile sale curate si privelistea spre port o transforma intr-un simbol preferat al regenerarii urbane. Cladirea gazduieste opera, balet si productii scenice majore care atrag atat localnici, cat si vizitatori. Adauga o identitate arhitecturala si culturala puternica districtului central al portului Gothenburg."
    },
    facts: {
      en: ["The opera house opened in 1994.", "It stands beside the harbor in central Gothenburg.", "The building is famous for its maritime setting.", "It hosts opera, ballet, and concerts.", "It is one of Gothenburg's key cultural landmarks."],
      de: ["Das Opernhaus wurde 1994 eroffnet.", "Es steht am Hafen im Zentrum von Gothenburg.", "Das Gebaude ist fur seine maritime Lage bekannt.", "Es beherbergt Oper, Ballett und Konzerte.", "Es ist eines der wichtigsten kulturellen Wahrzeichen Gothenburgs."],
      hu: ["Az operahaz 1994-ben nyilt meg.", "Gothenburg belso kikotoje mellett all.", "Az epuletet tengerparti fekvese miatt ismerik.", "Operat, balettet es koncerteket rendeznek benne.", "A varos egyik kulcsfontossagu kulturális latvanyossaga."],
      ro: ["Opera a fost deschisa in 1994.", "Se afla langa port, in centrul Gothenburgului.", "Cladirea este faimoasa pentru amplasarea sa maritima.", "Gazduieste opera, balet si concerte.", "Este unul dintre reperele culturale cheie ale Gothenburgului."]
    },
    image: "/geo-images/sweden/gothenburg-opera-house.webp",
  },
  {
    id: "land-nobel-prize-museum",
    type: "landmark",
    parent: "SE",
    coords: [18.0678, 59.3240],
    name: { de: "Nobelpreis-Museum", hu: "Nobel-dij Muzeum", ro: "Muzeul Premiului Nobel", en: "Nobel Prize Museum" },
    description: {
      en: "The Nobel Prize Museum in Gamla Stan tells the story of ideas, science, literature, and peace. It is closely linked to Sweden's global reputation for innovation and knowledge. The museum is compact, central, and easy to combine with other Stockholm Old Town landmarks. For visitors, it gives a strong entry point into the Nobel world and Swedish intellectual history.",
      de: "Das Nobelpreis-Museum in Gamla Stan erzahlt die Geschichte von Ideen, Wissenschaft, Literatur und Frieden. Es ist eng mit Schwedens weltweitem Ruf fur Innovation und Wissen verbunden. Das Museum ist kompakt, zentral gelegen und leicht mit anderen Wahrzeichen der Stockholmer Altstadt zu verbinden. Fur Besucher bietet es einen starken Einstieg in die Nobelwelt und die schwedische Geistesgeschichte.",
      hu: "A Gamla Stanban talalhato Nobel-dij Muzeum az otletek, a tudomany, az irodalom es a bekesultek tortenetet meseli el. Szorosan kapcsolodik Svedorszag vilagszintu hirnevehez az innovacio es a tudas teren. A muzeum kompakt, kozponti fekvesu, es konnyen osszekotheto mas ovarosi latvanyossagokkal. A latogatok szamara eros belepesi pont a Nobel-vilagba es a sved szellemi tortenelembe.",
      ro: "Muzeul Premiului Nobel din Gamla Stan spune povestea ideilor, stiintei, literaturii si pacii. Este strans legat de reputatia globala a Suediei pentru inovatie si cunoastere. Muzeul este compact, central si usor de combinat cu alte repere din Orasul Vechi al Stockholmului. Pentru vizitatori, ofera un punct de intrare puternic in lumea Nobel si in istoria intelectuala suedeza."
    },
    facts: {
      en: ["The museum is located in Stockholm's Old Town.", "It focuses on Nobel Prize winners and ideas.", "The museum is a popular stop for visitors from around the world.", "It connects science, literature, and peace themes.", "The museum is linked to Sweden's innovation story."],
      de: ["Das Museum liegt in der Stockholmer Altstadt.", "Es konzentriert sich auf Nobelpreistrager und Ideen.", "Es ist ein beliebter Halt fur Besucher aus aller Welt.", "Es verbindet Wissenschaft, Literatur und Friedensthemen.", "Das Museum ist mit Schwedens Innovationsgeschichte verbunden."],
      hu: ["A muzeum Stockholm ovarosaban talalhato.", "A Nobel-dij nyerteseire es az otletekre fokuszal.", "A hely vilagszerte nepszeru megallo a latogatóknak.", "A tudomany, az irodalom es a beke temakat kapcsolja ossze.", "A muzeum Svedorszag innovacios tortenetéhez kotodik."],
      ro: ["Muzeul se afla in Orasul Vechi al Stockholmului.", "Se concentreaza pe laureatii Nobel si pe idei.", "Este un popas popular pentru vizitatori din toata lumea.", "Leaga temele stiintei, literaturii si pacii.", "Muzeul este conectat la povestea inovatiei suedeze."]
    },
    image: "/geo-images/sweden/nobel-prize-museum.webp",
  },
  {
    id: "land-skansen-open-air-museum",
    type: "landmark",
    parent: "SE",
    coords: [18.1027, 59.3256],
    name: { de: "Skansen", hu: "Skansen", ro: "Skansen", en: "Skansen Open-Air Museum" },
    description: {
      en: "Skansen is Stockholm's famous open-air museum and one of the best-known cultural attractions in Sweden. It brings together historic buildings, folk traditions, and Nordic animals in one large visitor experience. The site is especially useful for families and travelers who want a fast overview of Swedish regional life. Skansen also plays a strong role in seasonal events and traditional celebrations.",
      de: "Skansen ist Stockholms beruhmtes Freilichtmuseum und eine der bekanntesten Kulturattraktionen Schwedens. Es vereint historische Gebaude, volkstumliche Traditionen und nordische Tiere zu einem grossen Besuchererlebnis. Der Ort ist besonders nutzlich fur Familien und Reisende, die einen schnellen Uberblick uber das schwedische Regionalleben suchen. Skansen spielt auch eine starke Rolle bei saisonalen Veranstaltungen und traditionellen Festen.",
      hu: "A Skansen Stockholm hires szabadtéri muzeuma es Svedorszag egyik legismertebb kulturális latvanyossaga. Tortenelmi epuleteket, nephagyomanyokat es eszaki allatokat egyesit egy nagy latogatoi elmenyben. Kifejezetten hasznos csaladoknak es olyan utazoknak, akik gyors attekintest szeretnenek a sved regioeletről. A Skansen eros szerepet jatszik az evszakos es hagyomanyos unnepeken is.",
      ro: "Skansen este faimosul muzeu in aer liber al Stockholmului si una dintre cele mai cunoscute atractii culturale din Suedia. Reuneste cladiri istorice, traditii populare si animale nordice intr-o singura experienta mare pentru vizitatori. Este deosebit de util pentru familii si calatori care vor o privire rapida asupra vietii regionale suedeze. Skansen joaca si un rol puternic in evenimente sezoniere si sarbatori traditionale."
    },
    facts: {
      en: ["Skansen opened in 1891.", "It is the world's first open-air museum.", "The site is on Djurgarden in Stockholm.", "It includes historic houses from across Sweden.", "Nordic wildlife is displayed alongside folk culture."],
      de: ["Skansen wurde 1891 eroffnet.", "Es ist das erste Freilichtmuseum der Welt.", "Der Ort liegt auf Djurgarden in Stockholm.", "Es umfasst historische Hauser aus ganz Schweden.", "Nordische Tierwelt wird neben Volkskultur gezeigt."],
      hu: ["A Skansen 1891-ben nyilt meg.", "Ez a vilag elso szabadtéri muzeuma.", "A hely Stockholm Djurgarden szigeten talalhato.", "Svedorszag kulonbozo reszeibol szarmazo tortenelmi hazakat tartalmaz.", "Az eszaki allatvilagot a neprajzi kultúra mellett mutatja be."],
      ro: ["Skansen a fost deschis in 1891.", "Este primul muzeu in aer liber din lume.", "Situl se afla pe Djurgarden in Stockholm.", "Include case istorice din intreaga Suedie.", "Fauna nordica este prezentata alaturi de cultura populara."]
    },
    image: "/geo-images/sweden/skansen-open-air-museum.webp",
  },
  {
    id: "land-ericsson-globe",
    type: "landmark",
    parent: "SE",
    coords: [18.0770, 59.2948],
    name: { de: "Ericsson Globe", hu: "Ericsson Globe", ro: "Ericsson Globe", en: "Ericsson Globe" },
    description: {
      en: "Ericsson Globe, also known today as Avicii Arena, is one of Stockholm's most recognizable modern landmarks. Its spherical form makes it stand out on the skyline and gives the city a clear sporting and event identity. The arena has hosted concerts, hockey, and international competitions that drew huge audiences. It remains a strong visual shortcut for modern Stockholm and Swedish event culture.",
      de: "Der Ericsson Globe, heute auch als Avicii Arena bekannt, ist eines der bekanntesten modernen Wahrzeichen Stockholms. Seine kugelformige Gestalt hebt ihn in der Skyline hervor und gibt der Stadt eine klare Sport- und Eventidentitat. Die Arena hat Konzerte, Hockey und internationale Wettbewerbe beherbergt, die ein grosses Publikum anzogen. Er bleibt ein starkes visuelles Synonym fur das moderne Stockholm und die schwedische Eventkultur.",
      hu: "Az Ericsson Globe, amelyet ma Avicii Arenakent is ismernek, Stockholm egyik legismertebb modern latvanyossaga. Golyszeru formaja kiemelkedik a latkeprol, es egyertelmu sport- es rendezvenyidentitast ad a varosnak. Az arena koncerteket, jégkorongot es nemzetkozi versenyeket fogadott be. Tovabbra is eros vizualis rovidites a modern Stockholm es a sved rendezvenykultura szamara.",
      ro: "Ericsson Globe, cunoscut astazi si ca Avicii Arena, este unul dintre cele mai recunoscute repere moderne ale Stockholmului. Forma sa sferica il face sa iasa in evidenta in skyline si ofera orasului o identitate clara pentru sport si evenimente. Arena a gazduit concerte, hochei si competitii internationale care au atras public numeros. Ramane o scurtatura vizuala puternica pentru Stockholmul modern si cultura suedeza a evenimentelor."
    },
    facts: {
      en: ["The arena opened in 1989.", "It is a spherical building on Stockholm's south side.", "The venue has hosted major sports and concerts.", "It is widely known as one of Sweden's modern icons.", "The building is now also called Avicii Arena."],
      de: ["Die Arena wurde 1989 eroffnet.", "Sie ist ein kugelformiges Gebaude auf der Sudseite Stockholms.", "Der Veranstaltungsort hat grosse Sport- und Konzertereignisse beherbergt.", "Er gilt weithin als eine der modernen Ikonen Schwedens.", "Das Gebaude heisst heute auch Avicii Arena."],
      hu: ["Az arena 1989-ben nyilt meg.", "Ez egy gocsi alaku epulet Stockholm deli oldalan.", "A helyszin nagy sportesemenyeknek es koncerteknek adott otthont.", "Szeles körben Svedorszag egyik modern ikonjanak tekintik.", "Az epulet ma Avicii Arena neven is ismert."],
      ro: ["Arena a fost deschisa in 1989.", "Este o cladire sferica in partea de sud a Stockholmului.", "Locatia a gazduit evenimente sportive si concerte majore.", "Este vazuta pe larg ca una dintre icoanele moderne ale Suediei.", "Cladirea este acum cunoscuta si ca Avicii Arena."]
    },
    image: "/geo-images/sweden/ericsson-globe.webp",
  }
  ,
  {
    id: "port-goteborg",
    type: "port",
    parent: "SE",
    coords: [11.8740, 57.7090],
    name: { de: "Hafen von Gothenburg", hu: "Gothenburgi kikoto", ro: "Portul Gothenburg", en: "Port of Gothenburg" },
    description: {
      en: "The Port of Gothenburg is the largest port in the Nordic countries and a critical logistics gateway for Sweden. It handles container traffic, vehicle exports, and large volumes of energy and bulk cargo. The port's west coast position connects Swedish industry to global shipping routes. It is one of the clearest examples of Sweden's modern trade infrastructure.",
      de: "Der Hafen von Gothenburg ist der grosste Hafen der nordischen Lander und ein entscheidendes Logistiktor fur Schweden. Er wickelt Containerverkehr, Autoexporte und grosse Mengen an Energie- und Schuttgut ab. Die Lage an der Westkuste verbindet die schwedische Industrie mit globalen Schifffahrtsrouten. Er ist eines der klarsten Beispiele fur Schwedens moderne Handelsinfrastruktur.",
      hu: "A Gothenburgi kikoto az eszaki orszagok legnagyobb kikotoje es Svedorszag egyik legfontosabb logisztikai kapuja. Kontenerforgalmat, autoexportot es nagy mennyisegu energia- es tomegarut kezel. Nyugati parti fekvese a sved ipart a nemzetkozi hajozasi utvonalakhoz kapcsolja. Ez az egyik legjobb pelda Svedorszag modern kereskedelmi infrastruktúrajara.",
      ro: "Portul Gothenburg este cel mai mare port din tarile nordice si o poarta logistica esentiala pentru Suedia. Gestioneaza trafic de containere, exporturi auto si volume mari de marfuri energetice si vrac. Pozitia de pe coasta de vest conecteaza industria suedeza la rutele maritime globale. Este unul dintre cele mai clare exemple ale infrastructurii comerciale moderne a Suediei."
    },
    facts: {
      en: ["It is the largest port in the Nordic region.", "The port handles a large share of Sweden's trade.", "It supports vehicle exports and container shipping.", "Its location links the North Sea to Swedish industry.", "The port is a major logistics and transport hub."],
      de: ["Es ist der grosste Hafen in der nordischen Region.", "Der Hafen wickelt einen grossen Teil des schwedischen Handels ab.", "Er unterstutzt Autoexporte und Containerverkehr.", "Seine Lage verbindet die Nordsee mit der schwedischen Industrie.", "Der Hafen ist ein wichtiger Logistik- und Verkehrsknotenpunkt."],
      hu: ["Ez az eszaki regio legnagyobb kikotoje.", "A kikoto Svedorszag kereskedelmenek nagy reszet kezeli.", "Autoexportot es kontenerszallitast tamogat.", "Fekvese osszekoti az Eszaki-tengert a sved iparral.", "A kikoto fontos logisztikai es kozlekedesi csomopont."],
      ro: ["Este cel mai mare port din regiunea nordica.", "Portul gestioneaza o mare parte din comertul Suediei.", "Sprijina exporturile de vehicule si transportul de containere.", "Pozitia sa leaga Marea Nordului de industria suedeza.", "Portul este un nod major de logistica si transport."]
    },
    image: "/geo-images/sweden/port-goteborg.webp",
  },
  {
    id: "port-stockholm",
    type: "port",
    parent: "SE",
    coords: [18.1170, 59.3130],
    name: { de: "Hafen von Stockholm", hu: "Stockholmi kikoto", ro: "Portul Stockholm", en: "Port of Stockholm" },
    description: {
      en: "The Port of Stockholm serves cruise traffic, ferry links, and Baltic logistics in Sweden's capital region. It is a practical gateway for passengers and goods moving across the Baltic Sea. The port also supports tourism by connecting Stockholm with nearby islands and neighboring countries. Its role is both urban and international, making it a key infrastructure point for the capital.",
      de: "Der Hafen von Stockholm dient Kreuzfahrten, Fährverbindungen und der Ostsee-Logistik in der Hauptstadtregion Schwedens. Er ist ein praktisches Tor fur Passagiere und Waren, die uber die Ostsee reisen. Der Hafen unterstutzt ausserdem den Tourismus, indem er Stockholm mit nahen Inseln und Nachbarlandern verbindet. Seine Rolle ist sowohl stadtisch als auch international und macht ihn zu einem wichtigen Infrastrukturelement der Hauptstadt.",
      hu: "A Stockholmi kikoto kruzforgalmat, kompkapcsolatokat es balti logisztikat szolgal a sved fovaros regioban. Praktikus kapu az utasok es az aru szamara, akik a Balti-tengeren kozlekednek. A kikoto a turizmust is tamogatja, mert osszekoti Stockholmot a kozeli szigetekkel es a szomszedos orszagokkal. Szerepe egyszerre varosi es nemzetkozi, ezert kulcsfontossagu infrastrukturális pont.",
      ro: "Portul Stockholm deserveste traficul de croaziere, legaturile cu feribotul si logistica baltica in regiunea capitalei Suediei. Este o poarta practica pentru pasagerii si marfurile care traverseaza Marea Baltica. Portul sprijina si turismul prin conectarea Stockholmului cu insulele din apropiere si tarile vecine. Rolul sau este atat urban, cat si international, ceea ce il face un punct de infrastructura cheie pentru capitala."
    },
    facts: {
      en: ["The port supports ferries and cruise ships.", "It is a major gateway for Baltic travel.", "The port connects Stockholm with nearby islands.", "It plays an important role in tourism.", "The port is part of the capital's maritime network."],
      de: ["Der Hafen unterstutzt Fahren und Kreuzfahrtschiffe.", "Er ist ein wichtiges Tor fur Reisen auf der Ostsee.", "Der Hafen verbindet Stockholm mit nahen Inseln.", "Er spielt eine wichtige Rolle im Tourismus.", "Der Hafen ist Teil des maritimen Netzes der Hauptstadt."],
      hu: ["A kikoto kompokat es kruzshajokat is szolgal ki.", "Fontos kapu a balti utazasokhoz.", "A kikoto Stockholmot kozeli szigetekkel kapcsolja ossze.", "Fontos szerepe van a turizmusban.", "A kikoto a fovaros tengeri halozatanak resze."],
      ro: ["Portul sprijina feriboturi si vase de croaziera.", "Este o poarta majora pentru calatoriile baltice.", "Portul conecteaza Stockholm cu insulele apropiate.", "Joaca un rol important in turism.", "Portul face parte din reteaua maritima a capitalei."]
    },
    image: "/geo-images/sweden/port-stockholm.webp",
  },
  {
    id: "port-lulea",
    type: "port",
    parent: "SE",
    coords: [22.1540, 65.5760],
    name: { de: "Hafen von Lulea", hu: "Luleai kikoto", ro: "Portul Lulea", en: "Port of Lulea" },
    description: {
      en: "The Port of Lulea is an Arctic gateway for northern Sweden and a crucial point for bulk exports. It helps move iron ore, steel products, and other industrial cargo through the Gulf of Bothnia. The port's location supports winter logistics and year-round supply chains in the far north. It is one of the strongest examples of Sweden's northern export economy.",
      de: "Der Hafen von Lulea ist ein arktisches Tor fur Nordschweden und ein entscheidender Punkt fur Massengutexporte. Er hilft beim Transport von Eisenerz, Stahlprodukten und anderen Industriegutern uber den Bottnischen Meerbusen. Die Lage des Hafens unterstutzt Winterlogistik und ganzjahrige Lieferketten im hohen Norden. Er ist eines der starksten Beispiele fur Schwedens nordliche Exportwirtschaft.",
      hu: "A Luleai kikoto sarki kapu Eszak-Svedorszag szamara es kulcsfontossagu pont a tomegaru-exportban. A Botteni-obolon keresztul segit mozgatni a vasercet, aceltermekeket es mas ipari arukat. Fekvese tamogatja a telilogisztikat es az egesz eves ellatasi lancokat a tavoli eszakon. Ez Svedorszag eszaki exportgazdasaganak egyik legerosebb peldaja.",
      ro: "Portul Lulea este o poarta arctica pentru nordul Suediei si un punct crucial pentru exporturile vrac. Ajuta la transportul minereului de fier, al produselor siderurgice si al altor marfuri industriale prin Golful Botniei. Pozitia portului sprijina logistica de iarna si lanturile de aprovizionare pe tot parcursul anului in nordul indepartat. Este unul dintre cele mai puternice exemple ale economiei de export nordice a Suediei."
    },
    facts: {
      en: ["The port is important for iron ore shipments.", "It supports logistics in Arctic conditions.", "The port lies on the Gulf of Bothnia.", "It is part of the northern industrial network.", "Lulea is a key export city for the north."],
      de: ["Der Hafen ist wichtig fur Eisenerzlieferungen.", "Er unterstutzt Logistik unter arktischen Bedingungen.", "Der Hafen liegt am Bottnischen Meerbusen.", "Er ist Teil des nordlichen Industrienetzes.", "Lulea ist eine wichtige Exportstadt des Nordens."],
      hu: ["A kikoto fontos a vaserc szallitasa szempontjabol.", "Segiti a logisztikat sarki korulmenyek kozott.", "A kikoto a Botteni-obol partjan fekszik.", "Az eszaki ipari halo resze.", "Lulea az eszak egyik fontos exportvarosa."],
      ro: ["Portul este important pentru expedierea minereului de fier.", "Sprijina logistica in conditii arctice.", "Portul se afla pe Golful Botniei.", "Face parte din reteaua industriala nordica.", "Lulea este un oras cheie de export pentru nord."]
    },
    image: "/geo-images/sweden/port-lulea.webp",
  }
  ,
  {
    id: "industry-volvo-torslanda",
    type: "industry",
    parent: "SE",
    coords: [11.8810, 57.7080],
    name: { de: "Volvo Werk Torslanda", hu: "Volvo Torslanda gyar", ro: "Uzina Volvo Torslanda", en: "Volvo Torslanda Plant" },
    description: {
      en: "The Volvo Torslanda Plant is one of Sweden's best known industrial sites and a major car manufacturing location. It represents the country's strong automotive tradition and export-oriented engineering. The plant has been central to the Volvo brand for decades and remains tied to Gothenburg's industrial identity. For SEO purposes, it is one of the clearest examples of modern Swedish industry.",
      de: "Das Volvo-Werk Torslanda ist eine der bekanntesten Industriestatten Schwedens und ein wichtiger Standort fur die Automobilproduktion. Es steht fur die starke Automobiltradition des Landes und exportorientierte Ingenieurskunst. Das Werk ist seit Jahrzehnten zentral fur die Marke Volvo und bleibt mit Gothenburgs industrieller Identitat verbunden. Fur SEO-Zwecke ist es eines der klarsten Beispiele fur moderne schwedische Industrie.",
      hu: "A Volvo Torslanda gyar Svedorszag egyik legismertebb ipari helyszine es fontos autogyartasi kozpont. Az orszag eros autopródusi hagyomanyat es exportorientalt mérnoki kultúrájat kepviseli. A gyar evtizedek ota a Volvo marka kozponti resze, es tovabbra is kapcsolodik Gothenburg ipari identitasahoz. SEO-szempontbol ez az egyik legtisztabb pelda a modern sved iparra.",
      ro: "Uzina Volvo Torslanda este unul dintre cele mai cunoscute situri industriale din Suedia si o locatie majora de productie auto. Reprezinta traditia puternica a tarii in industria auto si ingineria orientata spre export. Uzina a fost centrala pentru marca Volvo timp de decenii si ramane legata de identitatea industriala a Gothenburgului. Pentru SEO, este unul dintre cele mai clare exemple de industrie suedeza moderna."
    },
    facts: {
      en: ["The plant is located in Gothenburg.", "It is a major Volvo car production site.", "The facility is tied to Sweden's auto industry story.", "It supports export-oriented manufacturing.", "The Torslanda name is widely recognized in industry searches."],
      de: ["Das Werk liegt in Gothenburg.", "Es ist ein wichtiger Produktionsstandort von Volvo.", "Die Anlage gehort zur Geschichte der schwedischen Autoindustrie.", "Sie unterstutzt exportorientierte Fertigung.", "Der Name Torslanda ist in Industriesuchen weithin bekannt."],
      hu: ["A gyar Gothenburgban talalhato.", "A Volvo egyik fontos gyartasi helyszine.", "A letesitmeny kapcsolodik a sved autoiar tortenetéhez.", "Exportorientalt gyartast tamogat.", "A Torslanda nev az ipari keresésekben jol ismert."],
      ro: ["Uzina se afla in Gothenburg.", "Este un site major de productie auto Volvo.", "Facilitatea este legata de povestea industriei auto suedeze.", "Sprijina productia orientata spre export.", "Numele Torslanda este foarte recunoscut in cautarile industriale."]
    },
    image: "/geo-images/sweden/volvo-torslanda.webp",
  },
  {
    id: "industry-lkab-kiruna-mine",
    type: "industry",
    parent: "SE",
    coords: [20.2250, 67.8530],
    name: { de: "LKAB Mine Kiruna", hu: "LKAB kirunai banyaja", ro: "Mina LKAB Kiruna", en: "LKAB Kiruna Mine" },
    description: {
      en: "The LKAB Kiruna Mine is one of the world's most important iron ore mines and a cornerstone of Sweden's mining industry. It helped make Kiruna famous and continues to shape the city's relocation and economy. The mine sits in the far north and supports global steel supply chains with high-quality ore. It is a powerful example of how Swedish industry connects remote geography to international markets.",
      de: "Die LKAB-Mine in Kiruna ist eine der wichtigsten Eisenerzminen der Welt und ein Eckpfeiler der schwedischen Bergbauindustrie. Sie machte Kiruna beruehmt und pragt bis heute die Umsiedlung und Wirtschaft der Stadt. Die Mine liegt im hohen Norden und unterstutzt globale Stahl-Lieferketten mit hochwertigem Erz. Sie ist ein starkes Beispiel dafur, wie die schwedische Industrie entlegene Geografie mit internationalen Markten verbindet.",
      hu: "A kirunai LKAB banya a vilag egyik legfontosabb vasercbanyaja es a sved banyaszati ipar egyik alappillere. Hozzajarult Kiruna hiressegehez, es ma is formálja a varos attelepiteset es gazdasagat. A banyа az eszaki sarkhoz kozel helyezkedik el, es jo minosegu erccel tamogatja a globalis acellancokat. Ertelmes pelda arra, hogyan kapcsolja ossze a sved ipar a tavoli foldrajzot a nemzetkozi piacokkal.",
      ro: "Mina LKAB din Kiruna este una dintre cele mai importante mine de minereu de fier din lume si o piatra de temelie a industriei miniere suedeze. A facut Kiruna celebra si continua sa modeleze relocarea si economia orasului. Mina se afla in nordul indepartat si sprijina lanturile globale de otel cu minereu de inalta calitate. Este un exemplu puternic despre cum industria suedeza conecteaza geografia indepartata cu pietele internationale."
    },
    facts: {
      en: ["The mine is one of the world's largest underground iron ore mines.", "It is operated by LKAB.", "The mine is closely linked to Kiruna's relocation.", "Its ore supports global steel production.", "It is a key symbol of northern Swedish industry."],
      de: ["Die Mine ist eine der grossten unterirdischen Eisenerzminen der Welt.", "Sie wird von LKAB betrieben.", "Die Mine ist eng mit der Umsiedlung Kirunas verbunden.", "Ihr Erz unterstutzt die globale Stahlproduktion.", "Sie ist ein wichtiges Symbol der nordschwedischen Industrie."],
      hu: ["A banyа a vilag egyik legnagyobb fold alatti vasercbanyaja.", "Az LKAB uzemelteti.", "A banyа szorosan kapcsolodik Kiruna attelepiteséhez.", "Az érce a globalis acelgyartast tamogatja.", "Az eszaki sved ipar fontos szimboluma."],
      ro: ["Mina este una dintre cele mai mari mine subterane de minereu de fier din lume.", "Este operata de LKAB.", "Mina este strans legata de relocarea orasului Kiruna.", "Minereul sau sprijina productia globala de otel.", "Este un simbol cheie al industriei din nordul Suediei."]
    },
    image: "/geo-images/sweden/lkab-kiruna-mine.webp",
  },
  {
    id: "agri-oland-alvar",
    type: "agriculture",
    parent: "SE",
    coords: [16.6200, 56.7100],
    name: { de: "Oland Alvar", hu: "Oland Alvar", ro: "Oland Alvar", en: "Oland Alvar" },
    description: {
      en: "Oland Alvar is one of Sweden's most distinctive agricultural landscapes and a UNESCO-listed cultural landscape on the island of Oland. The open limestone plain has supported grazing, farming, and low-intensity land use for centuries. Windmills, stone walls, and wide horizons make the area highly recognizable and easy to market in travel search. It is a strong example of how agriculture can shape both scenery and identity.",
      de: "Oland Alvar ist eine der markantesten Agrarlandschaften Schwedens und eine UNESCO-geschutzte Kulturlandschaft auf der Insel Oland. Die offene Kalkebene wird seit Jahrhunderten fur Weidewirtschaft, Landwirtschaft und extensive Bodennutzung genutzt. Windmuhlen, Steinmauern und weite Horizonte machen die Gegend sehr wiedererkennbar und leicht in der Reisesuche zu vermarkten. Sie ist ein starkes Beispiel dafur, wie Landwirtschaft sowohl Landschaft als auch Identitat pragt.",
      hu: "Az Oland Alvar Svedorszag egyik legkulonlegesebb mezogazdasagi tajegysege es az Oland szigeten fekvo UNESCO-védett kulturális taj. A nyitott meszkosik évszazadok ota legeltetest, foldmuvelest es alacsony intenzitasu foldhasznalatot tamogat. A szelmalmok, kofalak es a tag horizontok miatt a terulet rendkivul felismerheto es utazas-keresesben is jol hasznalhato. Jól mutatja, hogyan formálja a mezogazdasag egyszerre a tajat es az identitast.",
      ro: "Oland Alvar este unul dintre cele mai distinctive peisaje agricole din Suedia si un peisaj cultural inscris UNESCO pe insula Oland. Campia deschisa de calcar a sustinut secole la rand pasunatul, agricultura si folosirea extensiva a terenului. Morile de vant, zidurile de piatra si orizonturile largi fac zona usor de recunoscut si usor de promovat in cautarile de calatorie. Este un exemplu puternic despre cum agricultura modeleaza atat peisajul, cat si identitatea."
    },
    facts: {
      en: ["Oland Alvar is a UNESCO cultural landscape.", "The area is known for grazing and open limestone ground.", "The landscape is on the island of Oland.", "Traditional windmills are part of the scenery.", "The site is one of Sweden's best known agricultural icons."],
      de: ["Oland Alvar ist eine UNESCO-Kulturlandschaft.", "Das Gebiet ist fur Weidewirtschaft und offenen Kalkboden bekannt.", "Die Landschaft liegt auf der Insel Oland.", "Traditionelle Windmuhlen gehoren zum Bild.", "Der Ort ist eine der bekanntesten landwirtschaftlichen Ikonen Schwedens."],
      hu: ["Az Oland Alvar UNESCO kulturális taj.", "A terulet legeltetesrol es nyitott meszkoves talajrol ismert.", "A taj Oland szigeten talalhato.", "A hagyomanyos szelmalmok a kep reszei.", "Ez Svedorszag egyik legismertebb mezogazdasagi ikonja."],
      ro: ["Oland Alvar este un peisaj cultural UNESCO.", "Zona este cunoscuta pentru pasunat si solul deschis de calcar.", "Peisajul se afla pe insula Oland.", "Morile de vant traditionale fac parte din cadru.", "Situl este una dintre cele mai cunoscute icoane agricole ale Suediei."]
    },
    image: "/geo-images/sweden/oland-alvar.webp",
  }
];

export const swedenNature: POI[] = [
  {
    id: "nat-abisko",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
  ,
  {
    id: "mountain-kebnekaise",
    type: "mountain",
    parent: "SE",
    coords: [18.5167, 67.9167],
    name: { de: "Kebnekaise", hu: "Kebnekaise", ro: "Kebnekaise", en: "Kebnekaise" },
    description: {
      en: "Kebnekaise is Sweden's highest mountain and a headline attraction for Arctic hiking. It rises above the Lapland landscape near Kiruna and draws mountaineers, photographers, and winter travelers. The peak is famous for its glacier-capped summit and changing altitude measurements. It is one of the strongest SEO targets for Swedish mountain travel and northern adventure tourism.",
      de: "Kebnekaise ist der hochste Berg Schwedens und eine wichtige Attraktion fur arktisches Wandern. Er erhebt sich uber die lapplandische Landschaft nahe Kiruna und zieht Bergsteiger, Fotografen und Winterreisende an. Der Gipfel ist fur seinen von Gletschern bedeckten Scheitel und veranderliche Hoehenmessungen bekannt. Er ist eines der starksten SEO-Ziele fur schwedischen Bergtourismus und nordische Abenteuerreisen.",
      hu: "A Kebnekaise Svedorszag legmagasabb hegye es az eszaki sarki turazas egyik fo vonzereje. Kiruna kozeleben emelkedik a lappfoldi taj fole, es hegymaszokat, fotozsokat es telijaro utazokat vonz. A csucsot jeggel boritott teteje es a valtozo magassagi meresek teszik hiresse. Ez az egyik legerosebb sved hegyturisztikai eszaki kalandcelt szolgalo SEO pont.",
      ro: "Kebnekaise este cel mai inalt munte din Suedia si o atractie de prim rang pentru drumetiile arctice. Se ridica deasupra peisajului din Laponia, langa Kiruna, si atrage alpinisti, fotografi si calatori de iarna. Varful este cunoscut pentru creasta acoperita de ghetar si pentru masuratorile de altitudine care se schimba. Este una dintre cele mai puternice tinte SEO pentru turism montan suedez si aventura nordica."
    },
    facts: {
      en: ["Kebnekaise is Sweden's highest mountain.", "The mountain is in Swedish Lapland.", "Its summit altitude can change because of glacier melt.", "It is a classic destination for mountain trekking.", "The area is strongly linked to Kiruna."],
      de: ["Kebnekaise ist der hochste Berg Schwedens.", "Der Berg liegt in Schwedisch-Lappland.", "Seine Gipfelhohe kann sich durch Gletscherschmelze andern.", "Er ist ein klassisches Ziel fur Bergtouren.", "Das Gebiet ist eng mit Kiruna verbunden."],
      hu: ["A Kebnekaise Svedorszag legmagasabb hegye.", "A hegy Sved Lappfoldon talalhato.", "A csucs magassaga a gleccserek olvadasa miatt valtozhat.", "Klasszikus celpont a hegyi turazok szamara.", "A terulet szorosan kapcsolodik Kirunahoz."],
      ro: ["Kebnekaise este cel mai inalt munte din Suedia.", "Muntele se afla in Laponia suedeza.", "Altitudinea varfului se poate schimba din cauza topirii ghetarilor.", "Este o destinatie clasica pentru drumetii montane.", "Zona este strans legata de Kiruna."]
    },
    image: "/geo-images/sweden/kebnekaise.webp",
  },
  {
    id: "mountain-helags",
    type: "mountain",
    parent: "SE",
    coords: [12.5310, 62.9140],
    name: { de: "Helags", hu: "Helags", ro: "Helags", en: "Helags" },
    description: {
      en: "Helags is one of Sweden's most beautiful mountain areas and a favorite target for hikers looking beyond the best-known peaks. It sits in the Jamtland mountains and offers wide views, alpine terrain, and a sense of remote wilderness. The area is known for its glacier, clear air, and strong nature tourism appeal. Helags is a great fit for travelers searching for Swedish mountain scenery and quiet outdoor adventure.",
      de: "Helags ist eines der schonsten Berggebiete Schwedens und ein beliebtes Ziel fur Wanderer, die uber die bekanntesten Gipfel hinaus wollen. Es liegt in den Jamtland-Bergen und bietet weite Ausblicke, alpines Gelande und ein Gefuhl entlegener Wildnis. Das Gebiet ist fur seinen Gletscher, die klare Luft und seine starke Anziehungskraft im Naturtourismus bekannt. Helags passt hervorragend zu Reisenden, die schwedische Berglandschaften und ruhige Outdoor-Abenteuer suchen.",
      hu: "Helags Svedorszag egyik legszebb hegyvideke, es kedvenc celpont azoknak a turazoknak, akik a legismertebb csucsoknal tobbre vagynak. A Jamtland-hegysegben fekszik, es tag kilatasokat, alpesi terepet es tavoli vadon hangulatot ad. A teruletet gleccsere, tiszta levegöje es eros termeszet turisztikai vonzereje miatt ismerik. Helags remek valasztas azoknak az utazoknak, akik hegyi tajakat es csendes szabadtéri kalandot keresnek.",
      ro: "Helags este una dintre cele mai frumoase zone montane din Suedia si o tinta preferata pentru drumetii care cauta ceva dincolo de varfurile celebre. Se afla in muntii Jamtland si ofera panorame largi, teren alpin si senzatia unei salbaticii indepartate. Zona este cunoscuta pentru ghetarul sau, aerul curat si atractia puternica pentru turismul de natura. Helags este o alegere excelenta pentru calatorii care cauta peisaj montan suedez si aventura linistita in aer liber."
    },
    facts: {
      en: ["Helags is one of the highest mountains in southern Lapland.", "The area has a well-known glacier.", "It is popular with experienced hikers.", "Helags lies in the Jamtland mountains.", "The mountain is a strong nature tourism search term."],
      de: ["Helags ist einer der hochsten Berge in Sudlappland.", "Das Gebiet hat einen bekannten Gletscher.", "Es ist bei erfahrenen Wanderern beliebt.", "Helags liegt in den Jamtland-Bergen.", "Der Berg ist ein starkes Suchwort fur Naturtourismus."],
      hu: ["Helags Dél-Lappfold egyik legmagasabb hegye.", "A teruletnek ismert gleccsere van.", "Tapasztalt turazok korében nepszeru.", "Helags a Jamtland-hegysegben talalhato.", "A hegy eros keresesi kifejezes a termeszetturizmusban."],
      ro: ["Helags este unul dintre cei mai inalti munti din sudul Laponiei.", "Zona are un ghetar bine cunoscut.", "Este popular in randul drumetilor experimentati.", "Helags se afla in muntii Jamtland.", "Muntele este un termen puternic de cautare pentru turismul de natura."]
    },
    image: "/geo-images/sweden/helags.webp",
  },
  {
    id: "lake-vattern",
    type: "lake",
    parent: "SE",
    coords: [14.6, 58.4],
    name: { de: "Vattern", hu: "Vattern", ro: "Vattern", en: "Lake Vattern" },
    description: {
      en: "Lake Vattern is Sweden's second-largest lake and one of the country's most important inland waters. It stretches through southern Sweden and shapes cities, transport, tourism, and drinking water supply. The lake is known for its deep clear water, scenic shoreline, and strong regional identity. It is a top keyword for Swedish lake travel, road trips, and outdoor holidays.",
      de: "Der Vattern ist Schwedens zweitgrosster See und eines der wichtigsten Binnengewasser des Landes. Er zieht sich durch Sudschweden und pragt Stadte, Verkehr, Tourismus und Trinkwasserversorgung. Der See ist bekannt fur sein tiefes klares Wasser, seine malerischen Ufer und seine starke regionale Identitat. Er ist ein Top-Schlagwort fur schwedische Seereisen, Roadtrips und Outdoor-Urlaube.",
      hu: "A Vattern Svedorszag masodik legnagyobb tava es az orszag egyik legfontosabb belvize. Deli Svedorszagon huzodik vegig, es varosokat, kozlekedest, turizmust es az ivovizellatast is formálja. A to melyen tiszta vize, festoi partvonala es eros regioi identitasa miatt ismert. Elso szamu kulcsszo a sved toturizmus, az autós utazasok es a szabadteri nyaralasok teren.",
      ro: "Lacul Vattern este al doilea ca marime din Suedia si una dintre cele mai importante ape interioare ale tarii. Se intinde prin sudul Suediei si modeleaza orase, transport, turism si aprovizionarea cu apa potabila. Lacul este cunoscut pentru apa sa adanca si clara, malurile pitoresti si identitatea regionala puternica. Este un termen de top pentru calatorii la lacurile suedeze, road trip-uri si vacante in aer liber."
    },
    facts: {
      en: ["Vattern is Sweden's second-largest lake.", "The lake supplies water to many communities.", "It lies in southern Sweden.", "Its clear water is one of its defining features.", "The lake is popular for sailing and fishing."],
      de: ["Der Vattern ist Schwedens zweitgrosster See.", "Der See versorgt viele Gemeinden mit Wasser.", "Er liegt in Sudschweden.", "Sein klares Wasser ist ein Markenzeichen.", "Der See ist beliebt zum Segeln und Angeln."],
      hu: ["A Vattern Svedorszag masodik legnagyobb tava.", "A to sok telepulest lat el vizzel.", "Deli Svedorszagban talalhato.", "Tiszta vize az egyik legfontosabb jellemzoje.", "Népszeru vitorlazasra es horgaszatra."],
      ro: ["Vattern este al doilea cel mai mare lac din Suedia.", "Lacul furnizeaza apa pentru multe comunitati.", "Se afla in sudul Suediei.", "Apa sa clara este una dintre trasaturile definitorii.", "Lacul este popular pentru navigatie si pescuit."]
    },
    image: "/geo-images/sweden/lake-vattern.webp",
  },
  {
    id: "lake-siljan",
    type: "lake",
    parent: "SE",
    coords: [14.7860, 60.8640],
    name: { de: "Siljan", hu: "Siljan", ro: "Siljan", en: "Lake Siljan" },
    description: {
      en: "Lake Siljan is a classic central Swedish lake formed by a giant ancient meteor impact. The lake sits in Dalarna and is surrounded by small towns, red cottages, and a strong folk culture. It is one of the most scenic inland lake areas in Sweden and a strong travel search term. Visitors come for summer boating, winter landscapes, and the broader Dalarna experience.",
      de: "Der Siljan ist ein klassischer mittelschwedischer See, der durch einen gewaltigen uralten Meteoriteneinschlag entstanden ist. Der See liegt in Dalarna und ist von kleinen Stadten, roten Holzhäusern und einer starken Volkstradition umgeben. Er ist eines der malerischsten Binnengewasser Schwedens und ein starkes Reisesuchwort. Besucher kommen fur Sommerboote, Winterlandschaften und das breitere Dalarna-Erlebnis.",
      hu: "A Siljan egy klasszikus kozepsved to, amely egy hatalmas osi meteorbecsapodas nyoman alakult ki. Dalarna videken fekszik, es kisvarosok, voros fahazak es eros neprajzi kultura veszi korul. Ez Svedorszag egyik legfestoi belso tovideke, es eros utazasi keresesi kifejezes is. A latogatok nyaron hajozas, telente tajkep, valamint a teljes Dalarna-elmeny miatt jonnek ide.",
      ro: "Lacul Siljan este un lac clasic din Suedia centrala, format de un impact urias al unui meteorit antic. Se afla in Dalarna si este inconjurat de orase mici, casute rosii si o cultura populara puternica. Este una dintre cele mai pitoresti zone de lacuri interioare din Suedia si un termen puternic de cautare pentru calatorii. Vizitatorii vin pentru plimbari cu barca vara, peisaje de iarna si experienta mai larga a Dalarna."
    },
    facts: {
      en: ["Siljan is a lake created by an ancient meteor impact.", "It is located in Dalarna.", "The lake is surrounded by small heritage towns.", "It is a classic Swedish summer destination.", "The area has a strong folk and craft identity."],
      de: ["Siljan ist ein See aus einem uralten Meteoriteneinschlag.", "Er liegt in Dalarna.", "Der See ist von kleinen Erbstadten umgeben.", "Er ist ein klassisches schwedisches Sommerziel.", "Die Gegend hat eine starke Volks- und Handwerkstradition."],
      hu: ["A Siljan egy osi meteoritbecsapodasbol szuletett to.", "Dalarna videken talalhato.", "A tavat kis oroksegvarosok veszik korul.", "Klasszikus sved nyari uticel.", "A teruletnek eros neprajzi es kezmuves identitasa van."],
      ro: ["Siljan este un lac creat de un impact meteoritic antic.", "Se afla in Dalarna.", "Lacul este inconjurat de orase mici de patrimoniu.", "Este o destinatie clasica de vara in Suedia.", "Zona are o identitate puternica de traditii populare si mestesuguri."]
    },
    image: "/geo-images/sweden/lake-siljan.webp",
  },
  {
    id: "river-torne",
    type: "river",
    parent: "SE",
    coords: [20.0, 67.8],
    name: { de: "Torne Fluss", hu: "Torne folyó", ro: "Raul Torne", en: "Torne River" },
    description: {
      en: "The Torne River is one of the great rivers of northern Sweden and a major Arctic border river. It flows through Lapland and is closely linked to fishing, winter travel, and riverside communities. The river is famous for its clear waters and for shaping life in the far north. It is a strong keyword for Swedish river travel, Lapland tourism, and nature discovery.",
      de: "Der Torne-Fluss ist einer der grossen Flusse Nordschwedens und ein wichtiger arktischer Grenzfluss. Er fliesst durch Lappland und ist eng mit Fischerei, Winterreisen und Flussgemeinden verbunden. Der Fluss ist fur sein klares Wasser und fur seine Prägung des Lebens im hohen Norden bekannt. Er ist ein starkes Schlagwort fur schwedische Flussreisen, Lappland-Tourismus und Naturentdeckung.",
      hu: "A Torne folyó Svedorszag egyik nagy eszaki folyója es fontos sarki hatarfolyó. Lappfoldon halad keresztul, es szorosan kotodik a horgaszathoz, a teli utazasokhoz es a folyómenti telepulesekhez. A folyó tiszta vizerol es az eszaki eletforma formálásarol ismert. Erős kulcsszo a sved folyómenti utazas, Lappfold turizmus es a termeszetfelfedezes teren.",
      ro: "Raul Torne este unul dintre marile rauri ale nordului Suediei si un important rau de granita arctica. Curge prin Laponia si este strans legat de pescuit, calatorii de iarna si comunitatile de pe malul raului. Raul este faimos pentru apele sale limpezi si pentru felul in care modeleaza viata din nordul indepartat. Este un termen puternic pentru calatorii pe rauri suedeze, turismul in Laponia si descoperirea naturii."
    },
    facts: {
      en: ["The river flows through Swedish Lapland.", "It is an important border river in the north.", "The Torne is known for clear water and fishing.", "It shapes life in remote northern communities.", "The river is linked to Arctic travel and nature tourism."],
      de: ["Der Fluss fliesst durch Schwedisch-Lappland.", "Er ist ein wichtiger Grenzfluss im Norden.", "Der Torne ist fur klares Wasser und Fischerei bekannt.", "Er pragt das Leben in abgelegenen nordlichen Gemeinden.", "Der Fluss ist mit Arktisreisen und Naturtourismus verbunden."],
      hu: ["A folyó Sved Lappfoldon halad at.", "Az eszaki reszen fontos hatarfolyó.", "A Torne tiszta vizerol es horgaszatarol ismert.", "A tavoli eszaki kozossegek eletet is formálja.", "A folyó az eszaki utazasokhoz es a termeszetturizmushoz kapcsolodik."],
      ro: ["Raul curge prin Laponia suedeza.", "Este un important rau de granita in nord.", "Torne este cunoscut pentru apa limpede si pescuit.", "Modeleaza viata comunitatilor nordice indepartate.", "Raul este legat de calatoriile arctice si turismul de natura."]
    },
    image: "/geo-images/sweden/river-torne.webp",
  }
  ,
  {
    id: "island-koster-archipelago",
    type: "island",
    parent: "SE",
    coords: [11.04, 58.90],
    name: { de: "Kosterinseln", hu: "Koster-szigetek", ro: "Insulele Koster", en: "Koster Islands" },
    description: {
      en: "The Koster Islands are one of Sweden's best known island landscapes on the west coast. They are part of a marine national park and are famous for their rocky shores, boating, and rich sea life. The islands attract visitors who want calm coastal nature and easy access to the Bohuslan archipelago. They are a strong match for Swedish island travel, marine scenery, and summer tourism.",
      de: "Die Kosterinseln sind eine der bekanntesten Insellandschaften Schwedens an der Westkuste. Sie sind Teil eines Meeresnationalparks und beruhmt fur ihre felsigen Ufer, das Bootfahren und ihr reiches Meeresleben. Die Inseln ziehen Besucher an, die ruhige Kustennatur und einfachen Zugang zum Bohuslan-Archipel suchen. Sie passen stark zu schwedischen Inselreisen, Meereslandschaften und Sommertourismus.",
      hu: "A Koster-szigetek Svedorszag egyik legismertebb szigetvilaga a nyugati parton. Egy tengerparti nemzeti park reszei, es sziklás partjaikrol, hajozasrol es gazdag tengeri eletukrol hireszek. A szigetek olyan latogatokat vonzanak, akik nyugodt parti termeszetet es egyszeru elerest keresnek a Bohuslan-szigetvilaghoz. Erősen illenek a sved szigetutazas, tengerparti tajak es nyari turizmus temaihoz.",
      ro: "Insulele Koster sunt unul dintre cele mai cunoscute peisaje insulare ale Suediei de pe coasta de vest. Fac parte dintr-un parc national marin si sunt faimoase pentru malurile stancoase, plimbari cu barca si viata marina bogata. Insulele atrag vizitatori care cauta natura calma de coasta si acces usor la arhipelagul Bohuslan. Se potrivesc perfect cu calatoriile pe insule suedeze, peisajele marine si turismul de vara."
    },
    facts: {
      en: ["The islands are part of Sweden's west coast archipelago.", "They belong to a marine national park.", "The Koster area is known for rich sea life.", "It is a popular summer boating destination.", "The islands are near the Norwegian border."],
      de: ["Die Inseln gehoren zum Westkusten-Archipel Schwedens.", "Sie sind Teil eines Meeresnationalparks.", "Die Koster-Region ist fur ihr reiches Meeresleben bekannt.", "Sie ist ein beliebtes Sommerziel zum Bootfahren.", "Die Inseln liegen nahe der norwegischen Grenze."],
      hu: ["A szigetek a sved nyugati parti szigetvilag reszei.", "Egy tengeri nemzeti parkhoz tartoznak.", "A Koster-terulet gazdag tengeri eletrol ismert.", "Nepszeru nyari hajozasi celpont.", "A szigetek kozel vannak a norveg hatarhoz."],
      ro: ["Insulele fac parte din arhipelagul de pe coasta de vest a Suediei.", "Sunt incluse intr-un parc national marin.", "Zona Koster este cunoscuta pentru viata marina bogata.", "Este o destinatie populara de vara pentru plimbari cu barca.", "Insulele se afla aproape de granita cu Norvegia."]
    },
    image: "/geo-images/sweden/koster-islands.webp",
  },
  {
    id: "forest-tiveden",
    type: "forest",
    parent: "SE",
    coords: [14.6000, 58.8000],
    name: { de: "Tiveden Wald", hu: "Tiveden erdő", ro: "Padurea Tiveden", en: "Tiveden Forest" },
    description: {
      en: "Tiveden Forest is one of Sweden's most famous wild forest areas and a classic destination for hikers. It is known for its rocky terrain, ancient trees, and mysterious landscape between Lake Vattern and Lake Vanern. The forest has long been tied to myths, borderlands, and outdoor adventure. It is a strong fit for Swedish forest tourism and rustic nature search terms.",
      de: "Der Tiveden-Wald ist eines der beruhmtesten wilden Waldgebiete Schwedens und ein klassisches Ziel fur Wanderer. Er ist bekannt fur sein felsiges Gelande, seine alten Baume und seine geheimnisvolle Landschaft zwischen dem Vattern und dem Vanern. Der Wald ist seit langem mit Mythen, Grenzland und Outdoor-Abenteuern verbunden. Er passt stark zu schwedischem Waldtourismus und rustikalen Natursuchbegriffen.",
      hu: "A Tiveden erdő Svedorszag egyik leghiresebb vad erdo terulete es klasszikus celpont a turazok szamara. Sziklas tereperol, osi fajairol es a Vattern es a Vanern to kozotti titokzatos tajarol ismert. Az erdőt regota kapcsoljak a mondakhoz, hatarszélhez es a szabadteri kalandokhoz. Erős illeszkedes a sved erdoturizmushoz es a rusztikus termeszetes keresesi kifejezesekhez.",
      ro: "Padurea Tiveden este una dintre cele mai faimoase zone de padure salbatica din Suedia si o destinatie clasica pentru drumeti. Este cunoscuta pentru terenul stancos, arborii batrani si peisajul misterios dintre lacurile Vattern si Vanern. Padurea a fost mult timp legata de mituri, zone de granita si aventuri in aer liber. Se potriveste foarte bine cu turismul forestier suedez si cu termenii de cautare pentru natura rustica."
    },
    facts: {
      en: ["Tiveden is a classic Swedish wilderness forest.", "It lies between Lakes Vattern and Vanern.", "The forest is popular with hikers and campers.", "It is known for rocky ground and old trees.", "The area is linked to folklore and myths."],
      de: ["Tiveden ist ein klassischer schwedischer Wildwald.", "Er liegt zwischen den Seen Vattern und Vanern.", "Der Wald ist bei Wanderern und Campern beliebt.", "Er ist fur felsigen Boden und alte Baume bekannt.", "Das Gebiet ist mit Folklore und Mythen verbunden."],
      hu: ["Tiveden klasszikus sved vadon erdő.", "A Vattern es a Vanern to kozott fekszik.", "Az erdo nepszeru a turazok es a kempingezok korében.", "Sziklas talajarol es regi fajairol ismert.", "A terulet a folklorhoz es a mondakhoz kapcsolodik."],
      ro: ["Tiveden este o padure salbatica clasica a Suediei.", "Se afla intre lacurile Vattern si Vanern.", "Padurea este populara printre drumeti si campingari.", "Este cunoscuta pentru solul stancos si arborii batrani.", "Zona este legata de folclor si legende."]
    },
    image: "/geo-images/sweden/tiveden-forest.webp",
  },
  {
    id: "mountain-fulufjallet",
    type: "mountain",
    parent: "SE",
    coords: [12.7070, 61.5960],
    name: { de: "Fulufjallet", hu: "Fulufjallet", ro: "Fulufjallet", en: "Fulufjallet" },
    description: {
      en: "Fulufjallet is a dramatic mountain area in western Dalarna and one of Sweden's best known highland parks. It is famous for steep terrain, old-growth forest, and the Njupeskar waterfall nearby. The area is well suited to SEO around Swedish mountain hikes, waterfalls, and remote nature escapes. It offers a clear mix of geology, wilderness, and scenic outdoor travel.",
      de: "Fulufjallet ist ein dramatisches Berggebiet in West-Dalarna und einer der bekanntesten Hochlandparks Schwedens. Es ist beruhmt fur steiles Gelande, alten Wald und den nahegelegenen Njupeskar-Wasserfall. Das Gebiet eignet sich sehr gut fur SEO rund um schwedische Bergwanderungen, Wasserfalle und abgelegene Naturausfluge. Es bietet eine klare Mischung aus Geologie, Wildnis und landschaftlich reizvollen Outdoor-Reisen.",
      hu: "Fulufjallet egy dramatikus hegyvidek Nyugat-Dalarna teruleten, es Svedorszag egyik legismertebb magaslati parkja. Meredek tereperol, osi erdoiról es a kozelben talalhato Njupeskar-vizeseserol hires. A terulet jol hasznalhato sved hegyi turazas, vizesesek es tavoli termeszetes elvonulasok SEO-temakent. Vilagosan keveri a foldtani, vadont és festoi szabadtéri utazas elemeit.",
      ro: "Fulufjallet este o zona montana dramatica din vestul Dalarnei si unul dintre cele mai cunoscute parcuri de inaltime din Suedia. Este faimoasa pentru terenul abrupt, padurea primara si cascada Njupeskar din apropiere. Zona este foarte potrivita pentru SEO despre drumetii montane suedeze, cascade si refugii naturale indepartate. Ofera un amestec clar de geologie, salbaticie si calatorie pitoreasca in aer liber."
    },
    facts: {
      en: ["Fulufjallet is a mountain area in Dalarna.", "It is known for the Njupeskar waterfall nearby.", "The park has old-growth forest and highland terrain.", "It is a popular hiking and nature tourism destination.", "The area is one of Sweden's classic wilderness searches."],
      de: ["Fulufjallet ist ein Berggebiet in Dalarna.", "Es ist fur den nahegelegenen Njupeskar-Wasserfall bekannt.", "Der Park hat alten Wald und Hochlandgelande.", "Er ist ein beliebtes Ziel fur Wandern und Naturtourismus.", "Das Gebiet ist eine der klassischen Wildnis-Suchanfragen Schwedens."],
      hu: ["Fulufjallet egy hegyvidek Dalarna teruleten.", "A kozelben levo Njupeskar-vizeseserol ismert.", "A parkban osi erdo es magaslati terep talalhato.", "Nepszeru turazasi es termeszetturisztikai celpont.", "A terulet Svedorszag egyik klasszikus vadon-keresesi helye."],
      ro: ["Fulufjallet este o zona montana din Dalarna.", "Este cunoscuta pentru cascada Njupeskar din apropiere.", "Parcul are padure veche si teren de inaltime.", "Este o destinatie populara pentru drumetii si turism de natura.", "Zona este una dintre cautarile clasice de salbaticie din Suedia."]
    },
    image: "/geo-images/sweden/fulufjallet.webp",
  },
  {
    id: "island-orust",
    type: "island",
    parent: "SE",
    coords: [11.7810, 58.1910],
    name: { de: "Orust", hu: "Orust", ro: "Orust", en: "Orust" },
    description: {
      en: "Orust is one of Sweden's largest islands and a classic Bohuslan destination on the west coast. It offers boat harbors, skerries, summer cottages, and a strong coastal lifestyle. The island is popular with travelers looking for easy island access and authentic Swedish seascapes. Orust works well for island tourism, archipelago travel, and coastal summer search terms.",
      de: "Orust ist eine der grossten Inseln Schwedens und ein klassisches Bohuslan-Ziel an der Westkuste. Sie bietet Bootshafen, Scheren, Sommerhauser und einen starken Kustlebensstil. Die Insel ist bei Reisenden beliebt, die leichten Inselzugang und authentische schwedische Meereslandschaften suchen. Orust passt gut zu Inseltourismus, Scharchenreisen und sommerlichen Kusten-Suchbegriffen.",
      hu: "Orust Svedorszag egyik legnagyobb szigete es klasszikus Bohuslan-celpont a nyugati parton. Kikotoi, sziklas szigetei, nyaraloi es eros parti eletformaja miatt ismert. A sziget nepszeru azok koreben, akik konnyen megkozelitheto szigeti elmenyt es hiteles sved tengerparti tajat keresnek. Orust jol mukodik a szigetturizmus, a szigetvilagi utazas es a nyari parti keresesi kifejezesek teren.",
      ro: "Orust este una dintre cele mai mari insule ale Suediei si o destinatie clasica Bohuslan de pe coasta de vest. Ofera porturi pentru barci, ostroave, case de vacanta si un stil de viata costier puternic. Insula este populara printre calatorii care cauta acces usor la insula si peisaje maritime autentice suedeze. Orust se potriveste bine cu turismul pe insule, calatoriile prin arhipelag si cautarile de vara pe coasta."
    },
    facts: {
      en: ["Orust is one of Sweden's largest islands.", "It is part of the Bohuslan coast.", "The island is known for harbors and summer cottages.", "It is popular for boating and coastal holidays.", "Orust is a strong keyword for island travel."],
      de: ["Orust ist eine der grossten Inseln Schwedens.", "Sie gehort zur Bohuslan-Kuste.", "Die Insel ist fur Hafen und Sommerhauser bekannt.", "Sie ist beliebt zum Bootfahren und fur Kustenurlaube.", "Orust ist ein starkes Schlagwort fur Inselreisen."],
      hu: ["Orust Svedorszag egyik legnagyobb szigete.", "A Bohuslan-part resze.", "A sziget kikotoirol es nyaraloiról ismert.", "Nepszeru hajozasra es parti nyaralasra.", "Orust eros kulcsszo a szigetutazas temajaban."],
      ro: ["Orust este una dintre cele mai mari insule ale Suediei.", "Face parte din coasta Bohuslan.", "Insula este cunoscuta pentru porturi si case de vacanta.", "Este populara pentru navigatie si vacante la mare.", "Orust este un termen puternic pentru calatoriile pe insule."]
    },
    image: "/geo-images/sweden/orust.webp",
  }
];

export const swedenAllPoi: POI[] = [swedenCountry, ...swedenRegions, ...swedenCities, ...swedenCulture, ...swedenNature];
