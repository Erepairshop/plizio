import type { POI } from "./poi";

export const finlandCountry: POI = {
  id: "finland",
  type: "country",
  parent: "EU",
  coords: [24.9414, 60.1699],
  name: { de: "Finnland", hu: "Finnország", ro: "Finlanda", en: "Finland" },
  description: {
    en: "Finland is a Northern European nation bordering Scandinavia, Russia, and the Baltic Sea. Known as the 'Land of a Thousand Lakes', it is famous for its vast forests, pristine nature, and high quality of life. Finland is a leader in education, technology, and sustainability. The country has a unique culture, blending Nordic traditions with its own distinct language and customs, including the world-famous sauna culture and a deep connection to the Arctic wilderness.",
    de: "Finnland ist eine nordeuropäische Nation, die an Skandinavien, Russland und die Ostsee grenzt. Bekannt als das 'Land der tausend Seen', ist es berühmt für seine weiten Wälder, unberührte Natur und hohe Lebensqualität. Finnland ist führend in den Bereichen Bildung, Technologie und Nachhaltigkeit. Das Land hat eine einzigartige Kultur, die nordische Traditionen mit seiner eigenen ausgeprägten Sprache und Bräuchen verbindet, darunter die weltberühmte Saunakultur und eine tiefe Verbindung zur arktischen Wildnis.",
    hu: "Finnország egy észak-európai nemzet, amely Skandináviával, Oroszországgal és a Balti-tengerrel határos. Az 'ezer tó országaként' ismert, híres hatalmas erdőiről, érintetlen természetéről és magas életszínvonaláról. Finnország vezető szerepet tölt be az oktatás, a technológia és a fenntarthatóság terén. Az ország egyedülálló kultúrával rendelkezik, amelyben a skandináv hagyományok ötvöződnek sajátos nyelvével és szokásaival, beleértve a világhírű szaunakultúrát és a sarkvidéki vadonhoz való mély kötődést.",
    ro: "Finlanda este o națiune din Europa de Nord care se învecinează cu Scandinavia, Rusia și Marea Baltică. Cunoscută sub numele de 'Țara celor o mie de lacuri', este faimoasă pentru pădurile sale vaste, natura curată și calitatea ridicată a vieții. Finlanda este un lider în educație, tehnologie și sustenabilitate. Țara are o cultură unică, îmbinând tradițiile nordice cu propria limbă și obiceiuri distincte, inclusiv celebra cultură a saunei și o conexiune profundă cu sălbăticia arctică."
  },
  facts: {
    en: [
      "Finland has been ranked as the happiest country in the world for several consecutive years.",
      "There are more saunas than cars in Finland.",
      "Finland has about 188,000 lakes and 179,000 islands.",
      "The country was the first in Europe to grant women full political rights in 1906.",
      "Finland is the birthplace of the Moomins and Angry Birds.",
      "The Finnish language is not related to Scandinavian languages but belongs to the Uralic family."
    ],
    de: [
      "Finnland wurde mehrere Jahre in Folge als das glücklichste Land der Welt eingestuft.",
      "In Finnland gibt es mehr Saunen als Autos.",
      "Finnland hat etwa 188.000 Seen und 179.000 Inseln.",
      "Das Land war 1906 das erste in Europa, das Frauen volle politische Rechte einräumte.",
      "Finnland ist die Geburtsstätte der Mumins und von Angry Birds.",
      "Die finnische Sprache ist nicht mit den skandinavischen Sprachen verwandt, sondern gehört zur uralischen Sprachfamilie."
    ],
    hu: [
      "Finnországot több egymást követő évben is a világ legboldogabb országának választották.",
      "Finnországban több szauna van, mint autó.",
      "Finnországnak körülbelül 188 000 tava és 179 000 szigete van.",
      "Az ország 1906-ban elsőként adott teljes politikai jogokat a nőknek Európában.",
      "Finnország a muminok és az Angry Birds szülőhelye.",
      "A finn nyelv nem rokona a skandináv nyelveknek, hanem az uráli nyelvcsaládba tartozik."
    ],
    ro: [
      "Finlanda a fost clasată drept cea mai fericită țară din lume timp de câțiva ani consecutivi.",
      "În Finlanda există mai multe saune decât mașini.",
      "Finlanda are aproximativ 188.000 de lacuri și 179.000 de insule.",
      "Țara a fost prima din Europa care a acordat femeilor drepturi politice depline în 1906.",
      "Finlanda este locul de naștere al Muminilor și al Angry Birds.",
      "Limba finlandeză nu este înrudită cu limbile scandinave, ci aparține familiei uralice."
    ]
  },
  image: "/geo-images/finland/finland-main.webp",
};

export const finlandRegions: POI[] = [
  {
    id: "city-helsinki",
    type: "city",
    parent: "finland",
    coords: [24.9414, 60.1699],
    name: { de: "Helsinki", hu: "Helsinki", ro: "Helsinki", en: "Helsinki" },
    description: {
      en: "Helsinki, the capital of Finland, is a vibrant seaside city known for its functionalist architecture, innovative design, and high quality of life. Situated on the Gulf of Finland, it features a beautiful harbour, historic landmarks like the Helsinki Cathedral and the Suomenlinna sea fortress, and numerous green spaces. Helsinki is a hub for technology, culture, and education, offering a unique blend of urban sophistication and easy access to nature.",
      de: "Helsinki, die Hauptstadt Finnlands, ist eine lebendige Küstenstadt, die für ihre funktionalistische Architektur, ihr innovatives Design und ihre hohe Lebensqualität bekannt ist. Am Finnischen Meerbusen gelegen, besticht sie durch einen schönen Hafen, historische Wahrzeichen wie den Dom von Helsinki und die Seefestung Suomenlinna sowie zahlreiche Grünflächen. Helsinki ist ein Zentrum für Technologie, Kultur und Bildung und bietet eine einzigartige Mischung aus städtischer Raffinesse und einfachem Zugang zur Natur.",
      hu: "Helsinki, Finnország fővárosa, egy vibráló tengerparti város, amely funkcionalista építészetéről, innovatív dizájnjáról és magas életszínvonaláról ismert. A Finn-öböl partján fekszik, gyönyörű kikötővel, olyan történelmi látnivalókkal, mint a helsinki székesegyház és Suomenlinna tengeri erődje, valamint számos zöldfelülettel rendelkezik. Helsinki a technológia, a kultúra és az oktatás központja, a városi kifinomultság és a természet közelségének egyedülálló keverékét kínálja.",
      ro: "Helsinki, capitala Finlandei, este un oraș vibrant de la malul mării, cunoscut pentru arhitectura sa funcționalistă, designul inovator și calitatea ridicată a vieții. Situat în Golful Finlandei, are un port frumos, repere istorice precum Catedrala din Helsinki și cetatea maritimă Suomenlinna și numeroase spații verzi. Helsinki este un centru pentru tehnologie, cultură și educație, oferind un amestec unic de rafinament urban și acces ușor la natură."
    },
    facts: {
      en: ["Helsinki was founded in 1550 by King Gustav I of Sweden.","The city hosted the Summer Olympic Games in 1952.","Suomenlinna is a UNESCO World Heritage site and one of the largest sea fortresses in the world.","Helsinki is often called the 'Daughter of the Baltic'."],
      de: ["Helsinki wurde 1550 von König Gustav I. von Schweden gegründet.","Die Stadt war Gastgeber der Olympischen Sommerspiele 1952.","Suomenlinna ist UNESCO-Weltkulturerbe und eine der größten Seefestungen der Welt.","Helsinki wird oft als 'Tochter der Ostsee' bezeichnet."],
      hu: ["Helsinkit 1550-ben alapította I. Gusztáv svéd király.","A város adott otthont az 1952-es nyári olimpiai játékoknak.","Suomenlinna az UNESCO Világörökség része és a világ egyik legnagyobb tengeri erődje.","Helsinkit gyakran a 'Balti-tenger lányának' nevezik."],
      ro: ["Helsinki a fost fondat în 1550 de regele Gustav I al Suediei.","Orașul a găzduit Jocurile Olimpice de vară din 1952.","Suomenlinna este un sit al Patrimoniului Mondial UNESCO și una dintre cele mai mari cetăți maritime din lume.","Helsinki este adesea numit 'Fiica Balticii'."]
    },
    image: "/geo-images/finland/helsinki.webp",
  },
  {
    id: "city-tampere",
    type: "city",
    parent: "finland",
    coords: [23.7609, 61.4978],
    name: { de: "Tampere", hu: "Tampere", ro: "Tampere", en: "Tampere" },
    description: {
      en: "Tampere is Finland's second-largest urban area, located between two large lakes, Näsijärvi and Pyhäjärvi. Known as the 'Manchester of the North' due to its industrial history, the city has transformed its old red-brick factories into vibrant cultural centers, museums, and offices. Tampere is famous for its beautiful ridge scenery, its lively student population, and its status as the 'Sauna Capital of the World'.",
      de: "Tampere ist das zweitgrößte Stadtgebiet Finnlands und liegt zwischen zwei großen Seen, Näsijärvi und Pyhäjärvi. Aufgrund seiner Industriegeschichte als 'Manchester des Nordens' bekannt, hat die Stadt ihre alten Backsteinfabriken in lebendige Kulturzentren, Museen und Büros verwandelt. Tampere ist berühmt für seine schöne Hügellandschaft, seine lebendige Studentenschaft und seinen Status als 'Saunahauptstadt der Welt'.",
      hu: "Tampere Finnország második legnagyobb városi területe, két nagy tó, a Näsijärvi és a Pyhäjärvi között fekszik. Ipari múltja miatt az 'Észak Manchesterének' is nevezik; a város régi vöröstéglás gyárait vibráló kulturális központokká, múzeumokká és irodákká alakították át. Tampere híres gyönyörű domborzatáról, élénk diákéletéről és a 'világ szaunafővárosaként' betöltött státuszáról.",
      ro: "Tampere este a doua zonă urbană ca mărime din Finlanda, situată între două lacuri mari, Näsijärvi și Pyhäjärvi. Cunoscut sub numele de 'Manchesterul Nordului' datorită istoriei sale industriale, orașul și-a transformat vechile fabrici de cărămidă roșie în centre culturale vibrante, muzee și birouri. Tampere este faimos pentru peisajele sale frumoase de creastă, populația sa studențească plină de viață și statutul său de 'Capitală Mondială a Saunei'."
    },
    facts: {
      en: ["Tampere was the first city in the Nordic countries to have electric lights.","The city is home to the world's only Moomin Museum.","Pyynikki observation tower offers famous doughnuts and great views.","Tampere has over 50 public saunas in the region."],
      de: ["Tampere war die erste Stadt in den nordischen Ländern mit elektrischem Licht.","Die Stadt beherbergt das weltweit einzige Mumin-Museum.","Der Aussichtsturm Pyynikki bietet berühmte Donuts und eine tolle Aussicht.","Tampere hat über 50 öffentliche Saunen in der Region."],
      hu: ["Tampere volt az első város az északi országokban, ahol bevezették az elektromos világítást.","A városban található a világ egyetlen Mumin Múzeuma.","A Pyynikki kilátó híres fánkjairól és nagyszerű kilátásáról.","Tampere régiójában több mint 50 nyilvános szauna található."],
      ro: ["Tampere a fost primul oraș din țările nordice care a avut lumină electrică.","Orașul găzduiește singurul Muzeu al Muminilor din lume.","Turnul de observare Pyynikki oferă gogoși faimoase și vederi minunate.","Tampere are peste 50 de saune publice în regiune."]
    },
    image: "/geo-images/finland/tampere.webp",
  },
  {
    id: "city-turku",
    type: "city",
    parent: "finland",
    coords: [22.2666, 60.4518],
    name: { de: "Turku", hu: "Turku", ro: "Turku", en: "Turku" },
    description: {
      en: "Turku is Finland's oldest city and its former capital, located on the southwest coast at the mouth of the Aura River. It is a city rich in history, featuring the medieval Turku Castle and the Turku Cathedral. Turku is known for its vibrant riverfront, its cultural events, and its role as the gateway to the stunning Turku Archipelago. The city has a lively atmosphere with many restaurants, museums, and a strong academic presence.",
      de: "Turku ist die älteste Stadt Finnlands und seine ehemalige Hauptstadt, gelegen an der Südwestküste an der Mündung des Flusses Aura. Es ist eine geschichtsträchtige Stadt mit der mittelalterlichen Burg Turku und dem Dom von Turku. Turku ist bekannt für sein lebendiges Flussufer, seine kulturellen Veranstaltungen und seine Rolle als Tor zum beeindruckenden Schärengarten von Turku. Die Stadt hat eine lebendige Atmosphäre mit vielen Restaurants, Museen und einer starken akademischen Präsenz.",
      hu: "Turku Finnország legrégebbi városa és korábbi fővárosa, a délnyugati parton, az Aura-folyó torkolatánál fekszik. Történelemben gazdag város, itt található a középkori turkui vár és a turkui székesegyház. Turku híres élénk folyópartjáról, kulturális eseményeiről és a lenyűgöző turkui szigetvilág kapujaként betöltött szerepéről. A város hangulatos éttermekkel, múzeumokkal és jelentős akadémiai jelenléttel büszkélkedhet.",
      ro: "Turku este cel mai vechi oraș din Finlanda și fosta sa capitală, situat pe coasta de sud-vest, la gura râului Aura. Este un oraș bogat în istorie, având Castelul medieval Turku și Catedrala Turku. Turku este cunoscut pentru faleza sa vibrantă, evenimentele culturale și rolul său de poartă către uimitorul Arhipelag Turku. Orașul are o atmosferă plină de viață, cu multe restaurante, muzee și o prezență academică puternică."
    },
    facts: {
      en: ["Turku was founded in the late 13th century.","The city is the official Christmas City of Finland.","Turku Castle is one of the oldest buildings still in use in Finland.","The Aura River is the heart of the city, with many historic boats turned into restaurants."],
      de: ["Turku wurde im späten 13. Jahrhundert gegründet.","Die Stadt ist die offizielle Weihnachtsstadt Finnlands.","Die Burg Turku ist eines der ältesten noch genutzten Gebäude Finnlands.","Der Fluss Aura ist das Herz der Stadt, mit vielen historischen Booten, die zu Restaurants umgebaut wurden."],
      hu: ["Turkut a 13. század végén alapították.","A város Finnország hivatalos karácsonyi városa.","A turkui vár az egyik legrégebbi, ma is használatban lévő épület Finnországban.","Az Aura-folyó a város szíve, ahol számos történelmi hajót étteremmé alakítottak át."],
      ro: ["Turku a fost fondat la sfârșitul secolului al XIII-lea.","Orașul este Orașul oficial al Crăciunului din Finlanda.","Castelul Turku este una dintre cele mai vechi clădiri încă în uz din Finlanda.","Râul Aura este inima orașului, cu multe bărci istorice transformate în restaurante."]
    },
    image: "/geo-images/finland/turku.webp",
  },
  {
    id: "reg-lapland-fi",
    type: "region",
    parent: "finland",
    coords: [25.7289, 66.5039],
    name: { de: "Finnisch-Lappland", hu: "Finn Lappföld", ro: "Laponia Finlandeză", en: "Finnish Lapland" },
    description: {
      en: "Finnish Lapland is a vast and magical region in the far north of Finland, known for its Arctic landscapes, the Northern Lights, and the Midnight Sun. It is the home of the indigenous Sámi people and the official home of Santa Claus in Rovaniemi. Lapland offers unique experiences such as reindeer and husky safaris, skiing, and staying in glass igloos. It is a land of pristine wilderness and enchanting natural beauty.",
      de: "Finnisch-Lappland ist eine weite und magische Region im hohen Norden Finnlands, bekannt für ihre arktischen Landschaften, die Polarlichter und die Mitternachtssonne. Es ist die Heimat des indigenen Volkes der Samen und die offizielle Heimat des Weihnachtsmanns in Rovaniemi. Lappland bietet einzigartige Erlebnisse wie Rentier- und Husky-Safaris, Skifahren und Übernachtungen in Glasiglus. Es ist ein Land unberührter Wildnis und bezaubernder natürlicher Schönheit.",
      hu: "A finn Lappföld egy hatalmas és varázslatos régió Finnország távoli északi részén, amely sarkvidéki tájairól, az északi fényről és az éjféli napról ismert. Ez az őshonos számi nép otthona és a Mikulás hivatalos lakhelye Rovaniemiben. Lappföld olyan egyedülálló élményeket kínál, mint a rénszarvas- és husky-szafarik, a síelés és az üvegiglukban való tartózkodás. Ez az érintetlen vadon és a varázslatos természeti szépség földje.",
      ro: "Laponia finlandeză este o regiune vastă și magică din nordul îndepărtat al Finlandei, cunoscută pentru peisajele sale arctice, Aurora Boreală și Soarele de la Miezul Nopții. Este casa poporului indigen Sámi și casa oficială a lui Moș Crăciun în Rovaniemi. Laponia oferă experiențe unice, cum ar fi safariuri cu reni și husky, schi și cazare în igluuri de sticlă. Este o țară a sălbăticiei curate și a frumuseții naturale fermecătoare."
    },
    facts: {
      en: ["Rovaniemi is located right on the Arctic Circle.","There are more reindeer than people in Lapland.","The region experiences the Polar Night (Kaamos) in winter, when the sun doesn't rise.","Lapland is one of the best places in the world to see the Aurora Borealis."],
      de: ["Rovaniemi liegt direkt am Polarkreis.","In Lappland gibt es mehr Rentiere als Menschen.","In der Region herrscht im Winter die Polarnacht (Kaamos), in der die Sonne nicht aufgeht.","Lappland ist einer der besten Orte der Welt, um die Aurora Borealis zu sehen."],
      hu: ["Rovaniemi pontosan az északi sarkkörön fekszik.","Lappföldön több rénszarvas él, mint ember.","A régióban télen tapasztalható a poláris éjszaka (Kaamos), amikor a nap nem kel fel.","Lappföld a világ egyik legjobb helye az északi fény megfigyelésére."],
      ro: ["Rovaniemi este situat chiar pe Cercul Polar.","În Laponia sunt mai mulți reni decât oameni.","Regiunea experimentează Noaptea Polară (Kaamos) iarna, când soarele nu răsare.","Laponia este unul dintre cele mai bune locuri din lume pentru a vedea Aurora Boreală."]
    },
    image: "/geo-images/finland/lapland-fi.webp",
  }
];

export const finlandNature: POI[] = [
  {
    id: "nat-lakeland",
    type: "nature",
    parent: "finland",
    coords: [28.0000, 61.5000],
    name: { de: "Finnische Seenplatte", hu: "Finn tóvidék", ro: "Regiunea Lacurilor Finlandeze", en: "Finnish Lakeland" },
    description: {
      en: "The Finnish Lakeland is a vast area of central and eastern Finland characterized by thousands of lakes, islands, and forests. It is the largest lake district in Europe and offers a quintessential Finnish experience of summer cottages, saunas, and water activities. Lake Saimaa, the largest lake in Finland, is home to the rare Saimaa ringed seal. The region is a paradise for nature lovers, offering peace, tranquility, and stunning scenery.",
      de: "Die Finnische Seenplatte ist ein weites Gebiet in Mittel- und Ostfinnland, das durch Tausende von Seen, Inseln und Wäldern geprägt ist. Sie ist das größte Seengebiet Europas und bietet das typisch finnische Erlebnis von Sommerhäusern, Saunen und Wasseraktivitäten. Der Saimaa-See, der größte See Finnlands, ist die Heimat der seltenen Saimaa-Ringelrobbe. Die Region ist ein Paradies für Naturliebhaber und bietet Ruhe, Gelassenheit und eine beeindruckende Landschaft.",
      hu: "A finn tóvidék Közép- és Kelet-Finnország hatalmas területe, amelyet több ezer tó, sziget és erdő jellemez. Ez Európa legnagyobb tóvidéke, amely a nyári lakok, szaunák és vízi tevékenységek hamisítatlan finn élményét kínálja. A Saimaa-tó, Finnország legnagyobb tava, a ritka saimaa-i gyűrűsfóka otthona. A régió a természetbarátok paradicsoma, békét, nyugalmat és lenyűgöző tájakat kínál.",
      ro: "Regiunea Lacurilor Finlandeze este o zonă vastă din centrul și estul Finlandei, caracterizată prin mii de lacuri, insule și păduri. Este cel mai mare district lacustru din Europa și oferă o experiență finlandeză chintesențială de cabane de vară, saune și activități acvatice. Lacul Saimaa, cel mai mare lac din Finlanda, găzduiește rara focă inelată de Saimaa. Regiunea este un paradis pentru iubitorii de natură, oferind pace, liniște și peisaje uimitoare."
    },
    facts: {
      en: ["Lake Saimaa has the longest lake coastline in the world.","The region is famous for its 'Everyman's Right', allowing anyone to roam freely in nature.","Savonlinna, located in the heart of Lakeland, hosts a famous annual Opera Festival.","The Lakeland was formed by the melting of glaciers after the last ice age."],
      de: ["Der Saimaa-See hat die längste See-Küstenlinie der Welt.","Die Region ist berühmt für ihr 'Jedermannsrecht', das es jedem erlaubt, sich frei in der Natur zu bewegen.","Savonlinna im Herzen der Seenplatte ist Gastgeber eines berühmten jährlichen Opernfestivals.","Die Seenplatte entstand durch das Schmelzen der Gletscher nach der letzten Eiszeit."],
      hu: ["A Saimaa-tónak van a világon a leghosszabb tóparti vonala.","A régió híres a 'mindenki jogáról' (Everyman's Right), amely lehetővé teszi bárki számára a természetben való szabad mozgást.","A tóvidék szívében fekvő Savonlinna ad otthont a híres éves Operafesztiválnak.","A tóvidék az utolsó jégkorszak utáni gleccserolvadás során alakult ki."],
      ro: ["Lacul Saimaa are cea mai lungă linie de coastă lacustră din lume.","Regiunea este faimoasă pentru 'Dreptul fiecărui om', care permite oricui să se plimbe liber în natură.","Savonlinna, situată în inima regiunii lacurilor, găzduiește un faimos festival anual de operă.","Regiunea lacurilor a fost formată prin topirea ghețarilor după ultima eră glaciară."]
    },
    image: "/geo-images/finland/lakeland.webp",
  },
  {
    id: "nat-archipelago",
    type: "nature",
    parent: "finland",
    coords: [20.0000, 60.0000],
    name: { de: "Schärengarten", hu: "Szigetvilág", ro: "Arhipelagul", en: "Archipelago" },
    description: {
      en: "The Finnish Archipelago, including the autonomous Åland Islands, is one of the largest and most beautiful archipelagos in the world. It consists of tens of thousands of islands and rocky islets scattered in the Baltic Sea. The region is known for its unique maritime culture, traditional wooden villages, and stunning coastal scenery. It is a popular destination for sailing, cycling, and island hopping, offering a peaceful escape into nature.",
      de: "Der finnische Schärengarten, einschließlich der autonomen Åland-Inseln, ist einer der größten und schönsten Archipel der Welt. Er besteht aus Zehntausenden von Inseln und felsigen Inselchen, die in der Ostsee verstreut sind. Die Region ist bekannt für ihre einzigartige maritime Kultur, traditionelle Holzdörfer und beeindruckende Küstenlandschaften. Sie ist ein beliebtes Ziel zum Segeln, Radfahren und Inselhüpfen und bietet eine friedliche Flucht in die Natur.",
      hu: "A finn szigetvilág, beleértve az autonóm Åland-szigeteket is, a világ egyik legnagyobb és legszebb archipelágusa. Több tízezer szigetből és sziklazátonyból áll, amelyek a Balti-tengerben szóródnak szét. A régió egyedülálló tengeri kultúrájáról, hagyományos faházas falvairól és lenyűgöző tengerparti tájairól ismert. Népszerű úti cél vitorlázáshoz, kerékpározáshoz és szigetről szigetre járáshoz, békés menekülést kínálva a természetbe.",
      ro: "Arhipelagul finlandez, inclusiv Insulele Åland autonome, este unul dintre cele mai mari și mai frumoase arhipelaguri din lume. Constă în zeci de mii de insule și insulițe stâncoase împrăștiate în Marea Baltică. Regiunea este cunoscută pentru cultura sa maritimă unică, satele tradiționale din lemn și peisajele de coastă uimitoare. Este o destinație populară pentru navigație, ciclism și plimbări între insule, oferind o evadare liniștită în natură."
    },
    facts: {
      en: ["The Archipelago Sea has more islands than any other archipelago in the world.","The Åland Islands are Swedish-speaking and have their own flag and stamps.","The Archipelago Trail is a popular 250 km cycling and driving route.","Many islands are connected by a network of free ferries."],
      de: ["Das Schärenmeer hat mehr Inseln als jeder andere Archipel der Welt.","Die Åland-Inseln sind schwedischsprachig und haben ihre eigene Flagge und Briefmarken.","Der Schärengarten-Weg ist eine beliebte 250 km lange Rad- und Autostrecke.","Viele Inseln sind durch ein Netzwerk von kostenlosen Fähren verbunden."],
      hu: ["A Sziget-tengerben több sziget található, mint a világ bármely más szigetvilágában.","Az Åland-szigetek svéd nyelvűek, saját zászlóval és bélyegekkel rendelkeznek.","A Szigetvilág útvonal egy népszerű 250 km-es kerékpáros és autós útvonal.","Sok szigetet ingyenes komphálózat köt össze."],
      ro: ["Marea Arhipelagului are mai multe insule decât orice alt arhipelag din lume.","Insulele Åland sunt vorbitoare de suedeză și au propriul steag și timbre.","Traseul Arhipelagului este o rută populară de ciclism și condus de 250 km.","Multe insule sunt conectate printr-o rețea de feriboturi gratuite."]
    },
    image: "/geo-images/finland/archipelago.webp",
  }
];

export const finlandCulture: POI[] = [
  {
    id: "cult-savonlinna",
    type: "culture",
    parent: "finland",
    coords: [28.8800, 61.8600],
    name: { de: "Savonlinna", hu: "Savonlinna", ro: "Savonlinna", en: "Savonlinna" },
    description: {
      en: "Savonlinna is a beautiful town in the heart of the Finnish Lakeland, famous for its medieval Olavinlinna Castle. The castle, built on a rocky island in the middle of a lake, is one of the best-preserved medieval fortresses in the Nordic countries. Savonlinna is world-renowned for its annual Opera Festival, which takes place in the castle's courtyard and attracts opera lovers from all over the world. The town is surrounded by water and offers a charming atmosphere.",
      de: "Savonlinna ist eine wunderschöne Stadt im Herzen der Finnischen Seenplatte, berühmt für ihre mittelalterliche Burg Olavinlinna. Die Burg, die auf einer felsigen Insel inmitten eines Sees erbaut wurde, ist eine der am besten erhaltenen mittelalterlichen Festungen in den nordischen Ländern. Savonlinna ist weltweit bekannt für sein jährliches Opernfestival, das im Innenhof der Burg stattfindet und Opernliebhaber aus aller Welt anzieht. Die Stadt ist von Wasser umgeben und bietet eine charmante Atmosphäre.",
      hu: "Savonlinna egy gyönyörű város a finn tóvidék szívében, amely a középkori Olavinlinna váráról híres. A tó közepén, egy sziklás szigetre épült vár az északi országok egyik legjobb állapotban fennmaradt középkori erődje. Savonlinna világhírű az évente megrendezett Operafesztiváljáról, amely a vár udvarán zajlik, és a világ minden tájáról vonzza az opera kedvelőit. A várost víz veszi körül, és bájos hangulatot áraszt.",
      ro: "Savonlinna este un oraș frumos din inima regiunii lacurilor finlandeze, faimos pentru Castelul medieval Olavinlinna. Castelul, construit pe o insulă stâncoasă în mijlocul unui lac, este una dintre cele mai bine conservate cetăți medievale din țările nordice. Savonlinna este renumit la nivel mondial pentru Festivalul său anual de Operă, care are loc în curtea castelului și atrage iubitori de operă din întreaga lume. Orașul este înconjurat de apă și oferă o atmosferă fermecătoare."
    },
    facts: {
      en: ["Olavinlinna Castle was founded in 1475.","The Savonlinna Opera Festival was first held in 1912.","The town is built on several islands connected by bridges.","Savonlinna is a popular summer destination for domestic and international tourists."],
      de: ["Die Burg Olavinlinna wurde 1475 gegründet.","Das Opernfestival von Savonlinna wurde erstmals 1912 abgehalten.","Die Stadt ist auf mehreren Inseln erbaut, die durch Brücken verbunden sind.","Savonlinna ist ein beliebtes Sommerziel für in- und ausländische Touristen."],
      hu: ["Olavinlinna várát 1475-ben alapították.","A Savonlinnai Operafesztivált először 1912-ben rendezték meg.","A város több szigetre épült, amelyeket hidak kötnek össze.","Savonlinna népszerű nyári úti cél a hazai és nemzetközi turisták körében."],
      ro: ["Castelul Olavinlinna a fost fondat în 1475.","Festivalul de Operă din Savonlinna a fost organizat pentru prima dată în 1912.","Orașul este construit pe mai multe insule conectate prin poduri.","Savonlinna este o destinație de vară populară pentru turiștii interni și internaționali."]
    },
    image: "/geo-images/finland/savonlinna.webp",
  }
];

export const finlandCities: POI[] = [
  {
    id: "city-helsinki",
    type: "city",
    parent: "finland",
    coords: [24.9354, 60.1695],
    name: { de: "Helsinki", hu: "Helsinki", ro: "Helsinki", en: "Helsinki" },
    description: {
      de: "Finnlands Hauptstadt an der Ostsee verbindet moderne Architektur, maritime Weite und skandinavisches Design.",
      hu: "Finnország fővárosa a Balti-tenger partján, ahol a modern építészet, a tengeri hangulat és a skandináv dizájn találkozik.",
      ro: "Capitala Finlandei de pe Marea Baltică îmbină arhitectura modernă, atmosfera marină și designul scandinav.",
      en: "Finland's capital on the Baltic Sea blends modern architecture, maritime openness, and Scandinavian design."
    },
    facts: {
      de: ["Helsinki ist die Hauptstadt Finnlands.", "Suomenlinna liegt direkt vor der Küste.", "Die Stadt ist ein Zentrum für Design und Technologie."],
      hu: ["Helsinki Finnország fővárosa.", "Suomenlinna közvetlenül a partja előtt fekszik.", "A város a dizájn és a technológia egyik központja."],
      ro: ["Helsinki este capitala Finlandei.", "Suomenlinna se află chiar în largul coastei.", "Orașul este un centru pentru design și tehnologie."],
      en: ["Helsinki is the capital of Finland.", "Suomenlinna sits just off the coast.", "The city is a hub for design and technology."]
    },
    image: "/geo-images/finland/city-helsinki.webp",
  },
  {
    id: "city-tampere",
    type: "city",
    parent: "finland",
    coords: [23.761, 61.4978],
    name: { de: "Tampere", hu: "Tampere", ro: "Tampere", en: "Tampere" },
    description: {
      de: "Tampere ist Finnlands zweitgrößte Stadt, geprägt von Industriegeschichte, Seen und einer starken Saunakultur.",
      hu: "Tampere Finnország második legnagyobb városa, ipari múlt, tavak és erős szaunakultúra jellemzik.",
      ro: "Tampere este al doilea oraș ca mărime din Finlanda, definit de istoria industrială, lacuri și o puternică cultură a saunei.",
      en: "Tampere is Finland's second-largest city, shaped by industrial heritage, lakes, and a strong sauna culture."
    },
    facts: {
      de: ["Tampere ist Finnlands zweitgrößte Stadt.", "Die Stadt gilt als Saunahauptstadt der Welt.", "Alte Fabriken wurden zu Kulturorten umgebaut."],
      hu: ["Tampere Finnország második legnagyobb városa.", "A várost a világ szaunafővárosaként is emlegetik.", "A régi gyárépületekből kulturális terek lettek."],
      ro: ["Tampere este al doilea oraș ca mărime din Finlanda.", "Orașul este adesea numit capitala mondială a saunei.", "Vechea moștenire industrială a fost transformată în spații culturale."],
      en: ["Tampere is Finland's second-largest city.", "The city is often called the sauna capital of the world.", "Old factories have been transformed into cultural spaces."]
    },
    image: "/geo-images/finland/city-tampere.webp",
  },
  {
    id: "city-turku",
    type: "city",
    parent: "finland",
    coords: [22.2666, 60.4518],
    name: { de: "Turku", hu: "Turku", ro: "Turku", en: "Turku" },
    description: {
      de: "Turku ist Finnlands alte Hauptstadt an der Aura, mit starkem historischen Kern und berühmter Burg.",
      hu: "Turku Finnország régi fővárosa az Aura folyó partján, erős történelmi központtal és híres várral.",
      ro: "Turku este vechea capitală a Finlandei, pe râul Aura, cu un nucleu istoric puternic și un castel celebru.",
      en: "Turku is Finland's former capital on the Aura River, with a strong historic core and a famous castle."
    },
    facts: {
      de: ["Turku war Finnlands frühere Hauptstadt.", "Die Turku-Burg ist ein zentraler Anziehungspunkt.", "Der Aura-Fluss prägt das Stadtbild."],
      hu: ["Turku Finnország korábbi fővárosa volt.", "A turkui vár a város egyik fő látnivalója.", "Az Aura folyó meghatározza a város arculatát."],
      ro: ["Turku a fost fosta capitală a Finlandei.", "Castelul Turku este una dintre atracțiile principale.", "Râul Aura definește peisajul urban."],
      en: ["Turku was Finland's former capital.", "Turku Castle is one of the city's main sights.", "The Aura River defines the cityscape."]
    },
    image: "/geo-images/finland/city-turku.webp",
  },
  {
    id: "city-espoo",
    type: "city",
    parent: "finland",
    coords: [24.6559, 60.2055],
    name: { de: "Espoo", hu: "Espoo", ro: "Espoo", en: "Espoo" },
    description: {
      de: "Espoo liegt direkt neben Helsinki und verbindet Vorstadtleben, Küste, Natur und Hightech.",
      hu: "Espoo közvetlenül Helsinki mellett fekszik, és a kertvárosi életet, a partot, a természetet és a high-tech világát köti össze.",
      ro: "Espoo se află chiar lângă Helsinki și combină viața suburbană, coasta, natura și tehnologia avansată.",
      en: "Espoo sits next to Helsinki and combines suburban life, coastline, nature, and high tech."
    },
    facts: {
      de: ["Espoo gehört zur Metropolregion Helsinki.", "Der Standort ist eng mit Nokia verbunden.", "Die Stadt hat viele Küsten- und Waldgebiete."],
      hu: ["Espoo a helsinki nagyvárosi régió része.", "A város neve erősen kötődik a Nokiához.", "Sok part menti és erdős területtel rendelkezik."],
      ro: ["Espoo face parte din zona metropolitană Helsinki.", "Orașul este strâns legat de Nokia.", "Are multe zone de coastă și pădure."],
      en: ["Espoo is part of the Helsinki metropolitan area.", "The city is closely associated with Nokia.", "It has many coastal and forest areas."]
    },
    image: "/geo-images/finland/city-espoo.webp",
  },
  {
    id: "city-oulu",
    type: "city",
    parent: "finland",
    coords: [25.4716, 65.0121],
    name: { de: "Oulu", hu: "Oulu", ro: "Oulu", en: "Oulu" },
    description: {
      de: "Oulu ist Nordfinnlands wichtigstes Zentrum mit Küstenlage, Innovation und starkem Bildungsleben.",
      hu: "Oulu Észak-Finnország egyik legfontosabb központja, part menti fekvéssel, innovációval és élénk egyetemi élettel.",
      ro: "Oulu este unul dintre cele mai importante centre din nordul Finlandei, cu poziție de coastă, inovație și viață universitară activă.",
      en: "Oulu is a major center in northern Finland, with a coastal setting, innovation, and a lively student scene."
    },
    facts: {
      de: ["Oulu ist ein wichtiges Zentrum in Nordfinnland.", "Die Stadt liegt an der Küste des Bottnischen Meerbusens.", "Bekannt für Technologie und Studierendenleben."],
      hu: ["Oulu Észak-Finnország fontos központja.", "A Botteni-öböl partján fekszik.", "A technológia és a diákélet miatt ismert."],
      ro: ["Oulu este un centru important în nordul Finlandei.", "Orașul se află pe coasta Golfului Botnic.", "Este cunoscut pentru tehnologie și viața studențească."],
      en: ["Oulu is an important center in northern Finland.", "The city lies on the coast of the Gulf of Bothnia.", "It is known for technology and student life."]
    },
    image: "/geo-images/finland/city-oulu.webp",
  }
];

export const finlandCultureExtended: POI[] = [
  {
    id: "cult-suomenlinna",
    type: "historical",
    parent: "finland",
    coords: [24.9866, 60.145],
    name: { de: "Festung Suomenlinna", hu: "Suomenlinna erőd", ro: "Cetatea Suomenlinna", en: "Suomenlinna Fortress" },
    description: {
      de: "Eine UNESCO-geschützte Seefestung aus dem 18. Jahrhundert vor Helsinki.",
      hu: "UNESCO-védett, 18. századi tengeri erőd Helsinki előtt.",
      ro: "O cetate maritimă din secolul al XVIII-lea, protejată de UNESCO, în largul Helsinkiului.",
      en: "A UNESCO-listed 18th-century sea fortress off Helsinki."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 1991.", "Erbaut wurde die Festung im 18. Jahrhundert.", "Sie liegt auf mehreren Inseln vor Helsinki."],
      hu: ["1991 óta UNESCO-világörökség.", "A 18. században épült.", "Több szigeten fekszik Helsinki előtt."],
      ro: ["Patrimoniu Mondial UNESCO din 1991.", "Cetatea a fost construită în secolul al XVIII-lea.", "Se întinde pe mai multe insule în largul Helsinkiului."],
      en: ["A UNESCO World Heritage site since 1991.", "Built in the 18th century.", "It spans several islands off Helsinki."]
    },
    image: "/geo-images/finland/cult-suomenlinna.webp",
  },
  {
    id: "cult-rovaniemi-santa",
    type: "kid-landmark",
    parent: "finland",
    coords: [25.8478, 66.5439],
    name: { de: "Weihnachtsmanndorf Rovaniemi", hu: "Mikulásfalu Rovaniemi", ro: "Satul lui Moș Crăciun Rovaniemi", en: "Santa Claus Village Rovaniemi" },
    description: {
      de: "Das Weihnachtsmanndorf am Polarkreis macht Rovaniemi zum Symbol des nördlichen Weihnachtszaubers.",
      hu: "A sarkkörön álló Mikulásfalu Rovaniemit az északi karácsony varázsának jelképévé teszi.",
      ro: "Satul lui Moș Crăciun, aflat pe Cercul Polar, face din Rovaniemi simbolul magiei nordice a sărbătorilor.",
      en: "The Santa Claus Village on the Arctic Circle makes Rovaniemi a symbol of northern Christmas magic."
    },
    facts: {
      de: ["Direkt am Polarkreis gelegen.", "Beliebter Anlaufpunkt für Familien und Reisende.", "Ganzjährig mit Weihnachtsmotiven verbunden."],
      hu: ["Közvetlenül az északi sarkkörön található.", "Népszerű hely családok és utazók körében.", "Egész évben a karácsonyi hangulathoz kötődik."],
      ro: ["Situat chiar pe Cercul Polar.", "Loc foarte popular pentru familii și călători.", "Este legat de atmosfera de Crăciun tot timpul anului."],
      en: ["Located directly on the Arctic Circle.", "A popular stop for families and travelers.", "Connected to Christmas themes all year round."]
    },
    image: "/geo-images/finland/cult-rovaniemi-santa.webp",
  },
  {
    id: "cult-olavinlinna",
    type: "historical",
    parent: "finland",
    coords: [28.8783, 61.8628],
    name: { de: "Burg Olavinlinna", hu: "Olavinlinna vár", ro: "Castelul Olavinlinna", en: "Olavinlinna Castle" },
    description: {
      de: "Die Burg Olavinlinna in Savonlinna ist eine mächtige Wasserfestung aus dem 15. Jahrhundert.",
      hu: "Az olavinlinnai vár Savonlinnában egy erős, 15. századi vízi erőd.",
      ro: "Castelul Olavinlinna din Savonlinna este o puternică fortăreață de apă din secolul al XV-lea.",
      en: "Olavinlinna Castle in Savonlinna is a powerful 15th-century water fortress."
    },
    facts: {
      de: ["Errichtet im Jahr 1475.", "Wichtiger Schauplatz des Savonlinna-Opernfestivals.", "Lage auf einer Insel im See macht es besonders wehrhaft."],
      hu: ["1475-ben emelték.", "A Savonlinna Operafesztivál egyik fő helyszíne.", "Szigeten áll a tó közepén, ezért különösen védett."],
      ro: ["Construit în 1475.", "Este un loc important al Festivalului de Operă din Savonlinna.", "Poziția pe o insulă din lac îl face foarte bine apărat."],
      en: ["Built in 1475.", "A major venue for the Savonlinna Opera Festival.", "Its island location makes it highly defensible."]
    },
    image: "/geo-images/finland/cult-olavinlinna.webp",
  },
  {
    id: "cult-sibelius",
    type: "landmark",
    parent: "finland",
    coords: [24.9089, 60.181],
    name: { de: "Sibelius-Park und Monument", hu: "Sibelius Park és emlékmű", ro: "Parcul și Monumentul Sibelius", en: "Sibelius Park and Monument" },
    description: {
      de: "Der Sibelius-Park mit dem berühmten Monument ehrt Jean Sibelius im Herzen Helsinkis.",
      hu: "A híres emlékművel rendelkező Sibelius Park Jean Sibelius előtt tiszteleg Helsinki szívében.",
      ro: "Parcul Sibelius, cu monumentul său celebru, îl onorează pe Jean Sibelius în inima Helsinkiului.",
      en: "Sibelius Park, with its famous monument, honors Jean Sibelius in the heart of Helsinki."
    },
    facts: {
      de: ["Gewidmet dem Komponisten Jean Sibelius.", "Das Monument ist eines der bekanntesten Kunstwerke Helsinkis.", "Der Park liegt nahe am Meer."],
      hu: ["Jean Sibelius zeneszerzőnek állít emléket.", "Az emlékmű Helsinki egyik legismertebb alkotása.", "A park közel van a tengerhez."],
      ro: ["Dedicat compozitorului Jean Sibelius.", "Monumentul este una dintre cele mai cunoscute opere de artă din Helsinki.", "Parcul este aproape de mare."],
      en: ["Dedicated to composer Jean Sibelius.", "The monument is one of Helsinki's best-known artworks.", "The park is located close to the sea."]
    },
    image: "/geo-images/finland/cult-sibelius.webp",
  },
  {
    id: "cult-design-district",
    type: "landmark",
    parent: "finland",
    coords: [24.94, 60.165],
    name: { de: "Helsinki Design District", hu: "Helsinki Design District", ro: "Districtul de Design Helsinki", en: "Helsinki Design District" },
    description: {
      de: "Das Helsinki Design District bündelt Galerien, Boutiquen, Werkstätten und nordische Kreativität.",
      hu: "A Helsinki Design District galériákat, butikokat, műhelyeket és északi kreativitást sűrít egy városrészbe.",
      ro: "Districtul de Design din Helsinki adună galerii, buticuri, ateliere și creativitate nordică.",
      en: "The Helsinki Design District brings together galleries, boutiques, workshops, and Nordic creativity."
    },
    facts: {
      de: ["Ein Kerngebiet für finnisches Design.", "Bekannt für unabhängige Geschäfte und Galerien.", "Liegt im Zentrum der Hauptstadt."],
      hu: ["A finn dizájn egyik központi zónája.", "Független üzleteiről és galériáiról ismert.", "A főváros központjában található."],
      ro: ["O zonă centrală pentru designul finlandez.", "Cunoscut pentru magazinele și galeriile independente.", "Se află în centrul capitalei."],
      en: ["A core area for Finnish design.", "Known for independent shops and galleries.", "Located in the center of the capital."]
    },
    image: "/geo-images/finland/cult-design-district.webp",
  }
];

export const finlandNatureExtended: POI[] = [
  {
    id: "nat-lakeland",
    type: "lake",
    parent: "finland",
    coords: [28.8, 61.7],
    name: { de: "Finnische Seenplatte", hu: "Finn tóvidék", ro: "Ținutul lacurilor finlandeze", en: "Finnish Lakeland" },
    description: {
      de: "Das finnische Seengebiet um Saimaa ist ein Labyrinth aus Wasser, Inseln und Wäldern.",
      hu: "A Saimaa körüli finn tóvidék víz, szigetek és erdők labirintusa.",
      ro: "Ținutul lacurilor din jurul Saimaa este un labirint de apă, insule și păduri.",
      en: "The Finnish Lakeland around Saimaa is a labyrinth of water, islands, and forests."
    },
    facts: {
      de: ["Finnland hat rund 188.000 Seen.", "Saimaa ist der größte See des Landes.", "Die Region steht für Sommerhütten und Ruhe."],
      hu: ["Finnországban körülbelül 188 000 tó található.", "A Saimaa az ország legnagyobb tava.", "A régiót nyaralók és csendes pihenés jellemzi."],
      ro: ["Finlanda are aproximativ 188.000 de lacuri.", "Saimaa este cel mai mare lac din țară.", "Regiunea este definită de cabane de vară și liniște."],
      en: ["Finland has around 188,000 lakes.", "Saimaa is the country's largest lake.", "The region is known for summer cottages and tranquility."]
    },
    image: "/geo-images/finland/nat-lakeland.webp",
  },
  {
    id: "nat-lapland",
    type: "region",
    parent: "finland",
    coords: [26.0, 67.9],
    name: { de: "Finnisch-Lappland", hu: "Finn Lappföld", ro: "Laponia finlandeză", en: "Finnish Lapland" },
    description: {
      de: "Finnisch-Lappland steht für Polarlichter, weite Tundra und Wintererlebnisse mit Huskys und Rentieren.",
      hu: "A finn Lappföld a sarki fényről, a hatalmas tundráról és a husky- és rénszarvasos téli élményekről ismert.",
      ro: "Laponia finlandeză înseamnă aurore boreale, tundră vastă și experiențe de iarnă cu husky și reni.",
      en: "Finnish Lapland is known for the Northern Lights, vast tundra, and winter experiences with huskies and reindeer."
    },
    facts: {
      de: ["Einer der besten Orte für Polarlichter.", "Im Winter gibt es die Polarnacht.", "Rovaniemi liegt in der Region."],
      hu: ["Az egyik legjobb hely a sarki fény megfigyelésére.", "Télen poláris éjszaka uralkodik.", "Rovaniemi is a régió része."],
      ro: ["Unul dintre cele mai bune locuri pentru aurora boreală.", "Iarna există noaptea polară.", "Rovaniemi se află în această regiune."],
      en: ["One of the best places to see the Northern Lights.", "The region experiences polar night in winter.", "Rovaniemi is part of the area."]
    },
    image: "/geo-images/finland/nat-lapland.webp",
  },
  {
    id: "nat-national-parks",
    type: "forest",
    parent: "finland",
    coords: [29.7, 63.1],
    name: { de: "Koli-Nationalpark", hu: "Koli Nemzeti Park", ro: "Parcul Național Koli", en: "Koli National Park" },
    description: {
      de: "Der Koli-Nationalpark gilt als eine der malerischsten Landschaften Finnlands mit Blick auf den Pielinen-See.",
      hu: "A Koli Nemzeti Park Finnország egyik legfestőibb tája, a Pielinen-tóra nyíló kilátással.",
      ro: "Parcul Național Koli este considerat unul dintre cele mai pitorești peisaje din Finlanda, cu vedere spre lacul Pielinen.",
      en: "Koli National Park is considered one of Finland's most scenic landscapes, overlooking Lake Pielinen."
    },
    facts: {
      de: ["Berühmt für seine weiten Hügelblicke.", "Liegt in Nordkarelien.", "Ein klassisches Motiv finnischer Landschaftskunst."],
      hu: ["Híres a nyitott dombtetős panorámáiról.", "Észak-Karéliában található.", "A finn tájképművészet klasszikus motívuma."],
      ro: ["Faimos pentru panoramele sale de pe dealuri.", "Se află în Karelia de Nord.", "Un motiv clasic al artei peisagistice finlandeze."],
      en: ["Famous for its sweeping hilltop views.", "Located in North Karelia.", "A classic motif in Finnish landscape art."]
    },
    image: "/geo-images/finland/nat-national-parks.webp",
  },
  {
    id: "nat-archipelago",
    type: "island",
    parent: "finland",
    coords: [22.1, 60.0],
    name: { de: "Finnischer Archipel", hu: "Finn szigetvilág", ro: "Arhipelagul finlandez", en: "Finnish Archipelago" },
    description: {
      de: "Der finnische Archipel mit Åland umfasst zehntausende Inseln und einzigartige Küstenlandschaften.",
      hu: "A finn szigetvilág Ålanddal együtt több tízezer szigetet és különleges tengerparti tájat foglal magába.",
      ro: "Arhipelagul finlandez, inclusiv Åland, cuprinde zeci de mii de insule și peisaje costiere unice.",
      en: "The Finnish archipelago, including Åland, contains tens of thousands of islands and unique coastal scenery."
    },
    facts: {
      de: ["Eines der größten Archipele der Welt.", "Åland ist schwedischsprachig.", "Viele Inseln sind per Fähre erreichbar."],
      hu: ["A világ egyik legnagyobb szigetvilága.", "Åland svéd nyelvű autonóm terület.", "Sok sziget kompokkal érhető el."],
      ro: ["Unul dintre cele mai mari arhipelaguri din lume.", "Åland este o regiune autonomă vorbitoare de suedeză.", "Multe insule sunt accesibile cu feribotul."],
      en: ["One of the world's largest archipelagos.", "Åland is a Swedish-speaking autonomous region.", "Many islands are reached by ferry."]
    },
    image: "/geo-images/finland/nat-archipelago.webp",
  },
  {
    id: "nat-midnight-sun",
    type: "lake",
    parent: "finland",
    coords: [27.7, 69.0],
    name: { de: "Mitternachtssonne am Inari-See", hu: "Éjféli nap az Inari-tónál", ro: "Soarele de la miezul nopții la lacul Inari", en: "Midnight Sun at Lake Inari" },
    description: {
      de: "Am Inari-See zeigt sich im Sommer die Mitternachtssonne, wenn die Sonne lange nicht untergeht.",
      hu: "Az Inari-tónál nyáron az éjféli nap jelensége figyelhető meg, amikor a Nap hosszú ideig nem nyugszik le.",
      ro: "La lacul Inari, vara apare soarele de la miezul nopții, când soarele nu apune pentru mult timp.",
      en: "At Lake Inari, the midnight sun appears in summer, when the sun does not set for a long time."
    },
    facts: {
      de: ["Inari liegt weit nördlich des Polarkreises.", "Im Sommer bleibt es sehr lange hell.", "Die Gegend ist eng mit der samischen Kultur verbunden."],
      hu: ["Inari jóval az északi sarkkör fölött fekszik.", "Nyáron nagyon sokáig világos van.", "A terület erősen kötődik a számi kultúrához."],
      ro: ["Inari se află mult la nord de Cercul Polar.", "Vara rămâne lumină pentru foarte mult timp.", "Zona este strâns legată de cultura sami."],
      en: ["Inari lies far north of the Arctic Circle.", "Summer daylight lasts for a very long time.", "The area is closely tied to Sámi culture."]
    },
    image: "/geo-images/finland/nat-midnight-sun.webp",
  }
];

export const finlandAllPoi: POI[] = [finlandCountry, ...finlandRegions, ...finlandCities, ...finlandCultureExtended, ...finlandNatureExtended];
