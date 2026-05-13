import type { POI } from "./poi";

export const finlandCountry: POI = {
  id: "finland",
  type: "country",
  parent: "EU",
  coords: [24.9414, 60.1699],
  name: { de: "Finnland", hu: "Finnország", ro: "Finlanda", en: "Finland" },
  description: {
    de: "Finnland ist das 'Land der tausend Seen', bekannt für seine unberührte Natur, die weltweit führende Bildung und die tief verwurzelte Saunakultur.",
    hu: "Finnország az „ezer tó országa”, amely érintetlen természetéről, világszínvonalú oktatásáról és mélyen gyökerező szaunakultúrájáról ismert.",
    ro: "Finlanda este „Țara celor o mie de lacuri”, cunoscută pentru natura sa virgină, educația de talie mondială și cultura sa profundă a saunei.",
    en: "Finland is the 'Land of a Thousand Lakes', known for its pristine nature, world-leading education, and deep-rooted sauna culture."
  },
  descriptionAdvanced: {
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
      de: "Helsinki ist die Hauptstadt Finnlands, bekannt für ihre moderne Architektur, das innovative Design und die wunderschöne Lage am Finnischen Meerbusen.",
      hu: "Helsinki Finnország fővárosa, amely modern építészetéről, innovatív dizájnjáról és a Finn-öböl partján fekvő gyönyörű fekvéséről ismert.",
      ro: "Helsinki este capitala Finlandei, cunoscută pentru arhitectura sa modernă, designul inovator și locația sa frumoasă în Golful Finlandei.",
      en: "Helsinki is the capital of Finland, known for its modern architecture, innovative design, and beautiful location on the Gulf of Finland."
    },
    descriptionAdvanced: {
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
    type: "landmark",
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
    type: "landmark",
    parent: "finland",
    coords: [20.0000, 60.0000],
    name: { de: "Schärengarten", hu: "Szigetvilág", ro: "Arhipelagul", en: "Archipelago" },
    description: {
      en: "The Finnish Archipelago, including the autonomous Łland Islands, is one of the largest and most beautiful archipelagos in the world. It consists of tens of thousands of islands and rocky islets scattered in the Baltic Sea. The region is known for its unique maritime culture, traditional wooden villages, and stunning coastal scenery. It is a popular destination for sailing, cycling, and island hopping, offering a peaceful escape into nature.",
      de: "Der finnische Schärengarten, einschließlich der autonomen Łland-Inseln, ist einer der größten und schönsten Archipel der Welt. Er besteht aus Zehntausenden von Inseln und felsigen Inselchen, die in der Ostsee verstreut sind. Die Region ist bekannt für ihre einzigartige maritime Kultur, traditionelle Holzdörfer und beeindruckende Küstenlandschaften. Sie ist ein beliebtes Ziel zum Segeln, Radfahren und Inselhüpfen und bietet eine friedliche Flucht in die Natur.",
      hu: "A finn szigetvilág, beleértve az autonóm Łland-szigeteket is, a világ egyik legnagyobb és legszebb archipelágusa. Több tízezer szigetből és sziklazátonyból áll, amelyek a Balti-tengerben szóródnak szét. A régió egyedülálló tengeri kultúrájáról, hagyományos faházas falvairól és lenyűgöző tengerparti tájairól ismert. Népszerű úti cél vitorlázáshoz, kerékpározáshoz és szigetről szigetre járáshoz, békés menekülést kínálva a természetbe.",
      ro: "Arhipelagul finlandez, inclusiv Insulele Łland autonome, este unul dintre cele mai mari și mai frumoase arhipelaguri din lume. Constă în zeci de mii de insule și insulițe stâncoase împrăștiate în Marea Baltică. Regiunea este cunoscută pentru cultura sa maritimă unică, satele tradiționale din lemn și peisajele de coastă uimitoare. Este o destinație populară pentru navigație, ciclism și plimbări între insule, oferind o evadare liniștită în natură."
    },
    facts: {
      en: ["The Archipelago Sea has more islands than any other archipelago in the world.","The Łland Islands are Swedish-speaking and have their own flag and stamps.","The Archipelago Trail is a popular 250 km cycling and driving route.","Many islands are connected by a network of free ferries."],
      de: ["Das Schärenmeer hat mehr Inseln als jeder andere Archipel der Welt.","Die Łland-Inseln sind schwedischsprachig und haben ihre eigene Flagge und Briefmarken.","Der Schärengarten-Weg ist eine beliebte 250 km lange Rad- und Autostrecke.","Viele Inseln sind durch ein Netzwerk von kostenlosen Fähren verbunden."],
      hu: ["A Sziget-tengerben több sziget található, mint a világ bármely más szigetvilágában.","Az Łland-szigetek svéd nyelvűek, saját zászlóval és bélyegekkel rendelkeznek.","A Szigetvilág útvonal egy népszerű 250 km-es kerékpáros és autós útvonal.","Sok szigetet ingyenes komphálózat köt össze."],
      ro: ["Marea Arhipelagului are mai multe insule decât orice alt arhipelag din lume.","Insulele Łland sunt vorbitoare de suedeză și au propriul steag și timbre.","Traseul Arhipelagului este o rută populară de ciclism și condus de 250 km.","Multe insule sunt conectate printr-o rețea de feriboturi gratuite."]
    },
    image: "/geo-images/finland/archipelago.webp",
  }
];

export const finlandCulture: POI[] = [
  {
    id: "cult-savonlinna",
    type: "landmark",
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
  },
  {
    id: "city-vantaa",
    type: "city",
    parent: "FI",
    coords: [25.0443, 60.2934],
    name: { de: "Vantaa", hu: "Vantaa", ro: "Vantaa", en: "Vantaa" },
    description: {
      de: "Vantaa ist Finnlands wichtigste Flughafenstadt und ein zentraler Teil der Metropolregion Helsinki. Der Helsinki Airport macht den Ort zu einem der wichtigsten Verkehrsknoten des Landes. Gleichzeitig bietet Vantaa Flusslandschaften, Wohnviertel und große Gewerbegebiete. Die Stadt ist ein starker Suchbegriff für Reisen, Logistik und moderne Urbanität in Finnland.",
      hu: "Vantaa Finnország legfontosabb repülőtér-városa és a helsinki nagyvárosi régió egyik kulcspontja. A Helsinki repülőtér az ország egyik legfontosabb közlekedési csomópontjává teszi a települést. Vantaa emellett folyóparti tájakat, lakónegyedeket és nagy üzleti zónákat kínál. A város erős kulcsszó az utazás, a logisztika és a modern finn városélet témájában.",
      ro: "Vantaa este orașul aeroportului principal al Finlandei și o parte esențială a zonei metropolitane Helsinki. Aeroportul Helsinki îl transformă într-un nod de transport major al țării. În același timp, Vantaa oferă peisaje de râu, cartiere rezidențiale și zone comerciale mari. Orașul este un termen SEO puternic pentru călătorii, logistică și urbanismul modern finlandez.",
      en: "Vantaa is Finland's main airport city and a key part of the Helsinki metropolitan area. Helsinki Airport makes it one of the country's most important transport hubs. Vantaa also offers river landscapes, residential districts, and large business zones. The city is a strong SEO topic for travel, logistics, and modern Finnish urban life."
    },
    facts: {
      de: ["Helsinki Airport liegt in Vantaa.", "Die Stadt gehört zur Metropolregion Helsinki.", "Tikkurila ist ein wichtiger Verwaltungs- und Bahnknoten.", "Vantaa verbindet Wohngebiete, Büros und Logistikflächen.", "Der Vantaa-Fluss prägt Teile der Stadtlandschaft."],
      hu: ["A Helsinki repülőtér Vantaában található.", "A város a helsinki nagyvárosi régió része.", "Tikkurila fontos közigazgatási és vasúti csomópont.", "Vantaa lakóövezeteket, irodákat és logisztikai területeket kapcsol össze.", "A Vantaanjoki a városkép egyik meghatározó eleme."],
      ro: ["Aeroportul Helsinki se află în Vantaa.", "Orașul face parte din zona metropolitană Helsinki.", "Tikkurila este un nod administrativ și feroviar important.", "Vantaa combină zone rezidențiale, birouri și spații logistice.", "Râul Vantaa influențează peisajul urban."],
      en: ["Helsinki Airport is located in Vantaa.", "The city is part of the Helsinki metropolitan area.", "Tikkurila is an important administrative and rail hub.", "Vantaa combines housing areas, offices, and logistics zones.", "The Vantaa River shapes part of the cityscape."]
    },
    image: "/geo-images/finland/city-vantaa.webp",
  },
  {
    id: "city-lahti",
    type: "city",
    parent: "FI",
    coords: [25.6615, 60.9827],
    name: { de: "Lahti", hu: "Lahti", ro: "Lahti", en: "Lahti" },
    description: {
      de: "Lahti ist eine bekannte finnische Stadt am Vesijärvi und am Eingang zur Seenlandschaft von Päijät-Häme. Der Ort ist international für Skispringen, Wintersport und grüne Stadtentwicklung bekannt. Lahti hat sich von einer industriell geprägten Stadt zu einem modernen Zentrum für Design und Nachhaltigkeit entwickelt. Für Suchanfragen zu finnischen Städten, Sport und Seen ist Lahti ein starker und relevanter Name.",
      hu: "Lahti egy ismert finn város a Vesijärvi mellett, Päijät-Häme tóvidékének kapujában. A település nemzetközileg ismert a síugrásról, a téli sportokról és a zöld városfejlesztésről. Lahti az ipari múltból modern dizájn- és fenntarthatósági központtá alakult. A finn városok, a sport és a tóvidék témájában Lahti különösen erős keresőkifejezés.",
      ro: "Lahti este un oraș finlandez cunoscut, aflat lângă lacul Vesijärvi și la intrarea în zona lacurilor din Päijät-Häme. Orașul este renumit internațional pentru săriturile cu schiurile, sporturile de iarnă și dezvoltarea urbană verde. Lahti a evoluat dintr-un centru industrial într-un pol modern pentru design și sustenabilitate. Pentru căutări despre orașele finlandeze, sport și lacuri, Lahti este un nume foarte relevant.",
      en: "Lahti is a well-known Finnish city on the shore of Lake Vesijärvi and the gateway to the Päijät-Häme lake district. It is internationally known for ski jumping, winter sports, and green urban development. Lahti has transformed from an industrial city into a modern center for design and sustainability. For Finnish city, sports, and lake-travel searches, Lahti is a strong and relevant name."
    },
    facts: {
      de: ["Lahti liegt am Vesijärvi.", "Die Stadt ist stark mit Skispringen verbunden.", "Das Sibelius-Festival gehört zu den bekannten Kulturmarken.", "Lahti entwickelt sich als Nachhaltigkeitsstadt.", "Die Lage zwischen Seen macht den Ort für Sommer und Winter attraktiv."],
      hu: ["Lahti a Vesijärvi partján fekszik.", "A város erősen kötődik a síugráshoz.", "A Sibelius-fesztivál ismert kulturális márka.", "Lahti a fenntarthatóság városaként is fejlődik.", "A tavak közötti fekvés egész évben vonzóvá teszi."],
      ro: ["Lahti se află pe malul lacului Vesijärvi.", "Orașul este puternic asociat cu săriturile cu schiurile.", "Festivalul Sibelius este un brand cultural cunoscut.", "Lahti se dezvoltă ca oraș al sustenabilității.", "Poziția dintre lacuri îl face atractiv în orice sezon."],
      en: ["Lahti sits on the shore of Lake Vesijärvi.", "The city is strongly associated with ski jumping.", "The Sibelius Festival is one of its best-known cultural brands.", "Lahti is developing as a sustainability city.", "Its setting between lakes makes it attractive year-round."]
    },
    image: "/geo-images/finland/city-lahti.webp",
  },
  {
    id: "city-jyvaskyla",
    type: "city",
    parent: "FI",
    coords: [25.7473, 62.2426],
    name: { de: "Jyväskylä", hu: "Jyväskylä", ro: "Jyväskylä", en: "Jyväskylä" },
    description: {
      de: "Jyväskylä liegt im Herzen Finnlands und ist ein wichtiges Bildungs- und Verwaltungszentrum. Die Stadt ist eng mit Alvar Aalto und mit moderner finnischer Architektur verbunden. Durch die Lage zwischen Hügeln und Seen ist Jyväskylä auch für Outdoor-Erlebnisse und Stadtnatur bekannt. Als Universitätsstadt hat sie eine junge Atmosphäre und starke SEO-Relevanz für Mittelfinnland.",
      hu: "Jyväskylä Finnország szívében fekszik, és fontos oktatási és közigazgatási központ. A város erősen kötődik Alvar Aaltóhoz és a modern finn építészethez. Dombok és tavak közé ékelődő fekvése miatt a város a szabadtéri élményekről és a városi természetről is híres. Egyetemi városként fiatalos hangulatot és erős keresőértéket képvisel Közép-Finnországban.",
      ro: "Jyväskylä se află în inima Finlandei și este un important centru educațional și administrativ. Orașul este strâns legat de Alvar Aalto și de arhitectura modernă finlandeză. Amplasarea între dealuri și lacuri îl face cunoscut pentru experiențe în aer liber și natură urbană. Ca oraș universitar, are o atmosferă tânără și o relevanță SEO puternică pentru centrul Finlandei.",
      en: "Jyväskylä lies in the heart of Finland and is an important educational and administrative center. The city is closely tied to Alvar Aalto and modern Finnish architecture. Its location among hills and lakes also makes it known for outdoor experiences and urban nature. As a university city, it has a youthful feel and strong SEO value for central Finland."
    },
    facts: {
      de: ["Jyväskylä ist ein wichtiges Hochschulzentrum.", "Alvar Aalto hat das Stadtbild stark geprägt.", "Die Stadt liegt in der finnischen Seenregion.", "Wassersport und Wandern sind hier beliebt.", "Das Zentrum verbindet moderne Planung mit Naturnähe."],
      hu: ["Jyväskylä fontos felsőoktatási központ.", "Alvar Aalto erősen formálta a városképet.", "A város a finn tóvidék része.", "A vízi sportok és a túrázás népszerűek.", "A központ a modern tervezést a természetközelséggel ötvözi."],
      ro: ["Jyväskylä este un centru universitar important.", "Alvar Aalto a influențat puternic imaginea orașului.", "Orașul se află în regiunea lacurilor finlandeze.", "Sporturile nautice și drumețiile sunt populare.", "Centrul combină planificarea modernă cu apropierea de natură."],
      en: ["Jyväskylä is an important higher-education center.", "Alvar Aalto strongly shaped the cityscape.", "The city lies in Finland's lake district.", "Water sports and hiking are popular here.", "The center blends modern planning with close access to nature."]
    },
    image: "/geo-images/finland/city-jyvaskyla.webp",
  },
  {
    id: "city-kuopio",
    type: "city",
    parent: "FI",
    coords: [27.677, 62.8924],
    name: { de: "Kuopio", hu: "Kuopio", ro: "Kuopio", en: "Kuopio" },
    description: {
      de: "Kuopio ist eine große Stadt in Ostfinnland am Kallavesi und ein zentraler Treffpunkt der Savolax-Region. Der Puijo-Turm und die Seenlage machen die Stadt sofort erkennbar. Kuopio ist bekannt für Märkte, Schärenblicke im Binnenland und ein lebendiges Alltagsleben am Wasser. Die Stadt ist ideal für SEO rund um finnische Seen, Ostfinnland und urbane Natur.",
      hu: "Kuopio Kelet-Finnország egyik nagyvárosa a Kallavesi partján, és a Savó-vidék fontos találkozópontja. A Puijo-torony és a tóparti fekvés azonnal felismerhetővé teszi a várost. Kuopio híres a piacairól, a belső tavak szigetszerű látványáról és a vízparti mindennapokról. A város különösen erős finn tóvidéki és kelet-finnországi keresésekhez.",
      ro: "Kuopio este un oraș mare din estul Finlandei, pe malul lacului Kallavesi, și un punct central al regiunii Savo. Turnul Puijo și poziția de pe malul lacului îl fac ușor de recunoscut. Kuopio este cunoscut pentru piețe, priveliști de tip arhipelag în interiorul țării și viața de zi cu zi lângă apă. Orașul este excelent pentru SEO despre lacurile finlandeze, estul Finlandei și natura urbană.",
      en: "Kuopio is a major city in eastern Finland on Lake Kallavesi and a central meeting point in the Savo region. The Puijo Tower and waterfront setting make it instantly recognizable. Kuopio is known for its markets, inland archipelago views, and lively daily life by the water. The city is strong for SEO around Finnish lakes, eastern Finland, and urban nature."
    },
    facts: {
      de: ["Kuopio liegt am Kallavesi.", "Der Puijo-Turm ist ein bekanntes Wahrzeichen.", "Die Stadt hat eine starke Marktkultur.", "Kuopio ist ein Zentrum für Ostfinnland.", "Die Seenlage prägt Freizeit und Stadtbild."],
      hu: ["Kuopio a Kallavesi partján fekszik.", "A Puijo-torony ismert városjelkép.", "Erős piaci kultúrája van.", "Kuopio Kelet-Finnország egyik központja.", "A tóparti fekvés meghatározza a szabadidőt és a városképet."],
      ro: ["Kuopio se află pe lacul Kallavesi.", "Turnul Puijo este un reper cunoscut.", "Orașul are o cultură puternică a piețelor.", "Kuopio este un centru pentru estul Finlandei.", "Poziția pe malul lacului definește timpul liber și peisajul urban."],
      en: ["Kuopio sits on Lake Kallavesi.", "The Puijo Tower is a well-known landmark.", "The city has a strong market culture.", "Kuopio is a center for eastern Finland.", "Its lakeside setting shapes recreation and the cityscape."]
    },
    image: "/geo-images/finland/city-kuopio.webp",
  },
  {
    id: "city-joensuu",
    type: "city",
    parent: "FI",
    coords: [29.7636, 62.6015],
    name: { de: "Joensuu", hu: "Joensuu", ro: "Joensuu", en: "Joensuu" },
    description: {
      de: "Joensuu liegt an der Mündung des Pielisjoki in den Saimaa-Seeweg und ist das Tor zu Nordkarelien. Die Stadt ist für ihre Universität, Kultur und Nähe zu Wäldern und Seen bekannt. Joensuu verbindet moderne Regionalfunktion mit entspannter ostfinnischer Lebensweise. Für Reisen, Bildung und Naturtourismus in Ostfinnland ist Joensuu ein starker Suchbegriff.",
      hu: "Joensuu a Pielisjoki torkolatánál, a Saimaa-vízrendszer közelében fekszik, és Észak-Karélia kapujaként ismert. A város egyeteméről, kultúrájáról és az erdők, tavak közelségéről híres. Joensuu a modern regionális szerepet nyugodt kelet-finn életmóddal ötvözi. Utazás, oktatás és kelet-finn természetturizmus témájában erős keresőkifejezés.",
      ro: "Joensuu se află la vărsarea râului Pielisjoki în sistemul de lacuri Saimaa și este poarta către Karelia de Nord. Orașul este cunoscut pentru universitatea sa, cultură și apropierea de păduri și lacuri. Joensuu combină rolul regional modern cu un stil de viață relaxat, specific estului Finlandei. Este un termen foarte bun pentru călătorii, educație și turism de natură în estul Finlandei.",
      en: "Joensuu lies at the mouth of the Pielisjoki River into the Saimaa water system and serves as the gateway to North Karelia. The city is known for its university, culture, and proximity to forests and lakes. Joensuu combines modern regional importance with a relaxed eastern Finnish lifestyle. It is a strong search term for travel, education, and nature tourism in eastern Finland."
    },
    facts: {
      de: ["Joensuu ist die Hauptstadt von Nordkarelien.", "Die Stadt liegt am Pielisjoki.", "Sie ist ein universitärer und administrativer Knotenpunkt.", "Wälder und Seen liegen direkt vor der Tür.", "Die Lage macht sie stark für Natur- und Kulturtourismus."],
      hu: ["Joensuu Észak-Karélia központja.", "A város a Pielisjoki partján fekszik.", "Egyetemi és közigazgatási csomópont.", "Az erdők és tavak közvetlenül elérhetők.", "A fekvés miatt erős a természet- és kulturális turizmus."],
      ro: ["Joensuu este capitala Kareliei de Nord.", "Orașul se află pe râul Pielisjoki.", "Este un nod universitar și administrativ.", "Pădurile și lacurile sunt foarte aproape.", "Poziția sa îl face puternic pentru turismul de natură și cultură."],
      en: ["Joensuu is the capital of North Karelia.", "The city sits on the Pielisjoki River.", "It is a university and administrative hub.", "Forests and lakes are right at hand.", "Its setting makes it strong for nature and cultural tourism."]
    },
    image: "/geo-images/finland/city-joensuu.webp",
  },
  {
    id: "city-vaasa",
    type: "city",
    parent: "FI",
    coords: [21.6165, 63.0951],
    name: { de: "Vaasa", hu: "Vaasa", ro: "Vaasa", en: "Vaasa" },
    description: {
      de: "Vaasa ist eine Küstenstadt am Bottnischen Meerbusen und ein wichtiger Treffpunkt für Energie und Handel. Die Stadt hat starke schwedisch-finnische Wurzeln und eine lebendige Universitätsatmosphäre. Vaasa ist auch ein Ausgangspunkt für Ausflüge zum UNESCO-geschützten Kvarken-Archipel. Für Küstenreisen, Ostseethemen und finnische Wirtschaft ist Vaasa sehr relevant.",
      hu: "Vaasa egy tengerparti város a Botteni-öböl mellett, és fontos találkozópont az energia és a kereskedelem számára. A városnak erős svéd-finn gyökerei és élénk egyetemi hangulata van. Vaasa a UNESCO-védett Kvarken-szigetvilág kirándulásainak is fontos kiindulópontja. Tengerparti utazás, Balti-tenger és finn gazdaság témájában rendkívül releváns.",
      ro: "Vaasa este un oraș de coastă la Golful Botnic și un punct important pentru energie și comerț. Orașul are rădăcini puternice finlandezo-suedeze și o atmosferă universitară activă. Vaasa este și punctul de plecare pentru excursii către arhipelagul Kvarken, protejat de UNESCO. Pentru căutări despre litoral, Marea Baltică și economia finlandeză, Vaasa este foarte relevantă.",
      en: "Vaasa is a coastal city on the Gulf of Bothnia and an important meeting point for energy and trade. The city has strong Finnish-Swedish roots and a lively university atmosphere. Vaasa is also a starting point for trips to the UNESCO-protected Kvarken Archipelago. It is highly relevant for searches about the coast, the Baltic Sea, and Finland's economy."
    },
    facts: {
      de: ["Vaasa liegt am Bottnischen Meerbusen.", "Die Stadt ist zweisprachig geprägt.", "Das Kvarken-Archipel liegt in der Nähe.", "Energie- und Technologiethemen sind hier stark präsent.", "Die Küstenlage prägt Wirtschaft und Freizeit."],
      hu: ["Vaasa a Botteni-öböl partján fekszik.", "A város kétnyelvű karakterű.", "A Kvarken-szigetvilág közel van.", "Az energia és a technológia fontos szerepet játszik.", "A tengerparti fekvés a gazdaságot és a szabadidőt is alakítja."],
      ro: ["Vaasa se află pe Golful Botnic.", "Orașul are un caracter bilingv puternic.", "Arhipelagul Kvarken este în apropiere.", "Energia și tehnologia sunt foarte prezente.", "Poziția de coastă influențează economia și timpul liber."],
      en: ["Vaasa sits on the Gulf of Bothnia.", "The city has a strong bilingual identity.", "The Kvarken Archipelago is nearby.", "Energy and technology play a major role here.", "Its coastal setting shapes both business and leisure."]
    },
    image: "/geo-images/finland/city-vaasa.webp",
  },
  {
    id: "city-porvoo",
    type: "city",
    parent: "FI",
    coords: [25.664, 60.392],
    name: { de: "Porvoo", hu: "Porvoo", ro: "Porvoo", en: "Porvoo" },
    description: {
      de: "Porvoo ist eine der ältesten Städte Finnlands und berühmt für ihre rote Flussufer-Silhouette. Die Altstadt mit ihren Holzhäusern zieht Besucher wegen Geschichte, Atmosphäre und Fotomotiven an. Porvoo liegt nur eine kurze Fahrt von Helsinki entfernt und ist daher ein beliebtes Ziel für Tagesausflüge. Als historischer Ort am Meer ist Porvoo ideal für SEO zu finnischer Kultur, Architektur und Kurzreisen.",
      hu: "Porvoo Finnország egyik legrégebbi városa, és híres vörös folyóparti látképéről. Óvárosa fából épült házaival történelem, hangulat és fotótémák miatt vonzza a látogatókat. Porvoo rövid autóútra van Helsinkitől, ezért népszerű egynapos kirándulási célpont. Történelmi tengerparti helyszínként kiváló a finn kultúra, építészet és rövid utazások kereséséhez.",
      ro: "Porvoo este unul dintre cele mai vechi orașe din Finlanda și este faimos pentru silueta sa roșie de pe malul râului. Orașul vechi, cu casele sale din lemn, atrage vizitatori pentru istorie, atmosferă și fotografii. Porvoo se află la o distanță scurtă de Helsinki, ceea ce îl face o destinație populară pentru excursii de o zi. Ca loc istoric de coastă, este ideal pentru SEO despre cultura finlandeză, arhitectură și city-break-uri.",
      en: "Porvoo is one of Finland's oldest cities and is famous for its red riverside skyline. The old town, with its wooden houses, attracts visitors for history, atmosphere, and photo opportunities. Porvoo is only a short drive from Helsinki, making it a popular day-trip destination. As a historic coastal town, it is ideal for SEO about Finnish culture, architecture, and short trips."
    },
    facts: {
      de: ["Porvoo gehört zu den ältesten Städten Finnlands.", "Die roten Lagerhäuser am Fluss sind ein Wahrzeichen.", "Die Altstadt ist für ihre Holzbauten bekannt.", "Helsinki liegt nur eine kurze Fahrt entfernt.", "Die Stadt ist stark mit Geschichte und Fototourismus verbunden."],
      hu: ["Porvoo Finnország egyik legrégebbi városa.", "A folyóparti vörös raktárépületek jelképes látványt adnak.", "Az óváros fából készült épületeiről ismert.", "Helsinki csak rövid autóútra van.", "A város erősen kötődik a történelemhez és a fotózós turizmushoz."],
      ro: ["Porvoo este unul dintre cele mai vechi orașe din Finlanda.", "Depozitele roșii de pe malul râului sunt un simbol al orașului.", "Centrul vechi este cunoscut pentru clădirile sale din lemn.", "Helsinki este la o distanță foarte scurtă cu mașina.", "Orașul este puternic asociat cu istoria și turismul foto."],
      en: ["Porvoo is one of Finland's oldest cities.", "The red riverside warehouses are a local symbol.", "The old town is known for its wooden buildings.", "Helsinki is only a short drive away.", "The city is strongly linked to history and photo tourism."]
    },
    image: "/geo-images/finland/city-porvoo.webp",
  },
  {
    id: "city-lappeenranta",
    type: "city",
    parent: "FI",
    coords: [28.1887, 61.0583],
    name: { de: "Lappeenranta", hu: "Lappeenranta", ro: "Lappeenranta", en: "Lappeenranta" },
    description: {
      de: "Lappeenranta liegt am Saimaa-See und ist eine bedeutende Stadt in Südostfinnland. Die Uferpromenade, die Festung und die Nähe zur russischen Grenze machen die Stadt regional wichtig. Lappeenranta ist ein beliebter Sommerort mit Hafen, Sauna und Wasserblick. Für Themen rund um Saimaa, Grenzstadt und finnische Seen ist der Name besonders stark.",
      hu: "Lappeenranta a Saimaa-tó partján fekszik, és Délkelet-Finnország fontos városa. A vízparti sétány, az erőd és az orosz határ közelsége regionális jelentőséget ad neki. Lappeenranta népszerű nyári úti cél kikötővel, szaunával és vízparti panorámával. A Saimaa, a határváros és a finn tóvidék témájában különösen erős név.",
      ro: "Lappeenranta se află pe malul lacului Saimaa și este un oraș important din sud-estul Finlandei. Promenada de pe mal, cetatea și apropierea de granița cu Rusia îi oferă o importanță regională. Lappeenranta este o destinație de vară populară, cu port, saună și priveliști spre apă. Pentru teme despre Saimaa, orașe de frontieră și lacurile finlandeze, numele este foarte puternic.",
      en: "Lappeenranta lies on Lake Saimaa and is an important city in southeast Finland. Its waterfront promenade, fortress, and proximity to the Russian border make it regionally significant. Lappeenranta is a popular summer destination with a harbor, sauna culture, and water views. The name is especially strong for searches about Saimaa, border towns, and Finnish lakes."
    },
    facts: {
      de: ["Lappeenranta liegt am Saimaa.", "Die Festung gehört zu den wichtigsten Sehenswürdigkeiten.", "Die Stadt hat eine starke Hafen- und Sommerkultur.", "Sie liegt nahe an der russischen Grenze.", "Wasser und Sauna prägen das lokale Profil."],
      hu: ["Lappeenranta a Saimaa partján található.", "Az erőd a legfontosabb látnivalók közé tartozik.", "Erős a kikötői és nyári kultúrája.", "Közel van az orosz határhoz.", "A víz és a szauna meghatározza a helyi arculatot."],
      ro: ["Lappeenranta se află pe lacul Saimaa.", "Cetatea este una dintre cele mai importante atracții.", "Orașul are o cultură puternică de port și vară.", "Este aproape de granița cu Rusia.", "Apa și sauna definesc profilul local."],
      en: ["Lappeenranta sits on Lake Saimaa.", "The fortress is one of its key sights.", "The city has a strong harbor and summer culture.", "It is close to the Russian border.", "Water and sauna shape the local identity."]
    },
    image: "/geo-images/finland/city-lappeenranta.webp",
  },
  {
    id: "city-kotka",
    type: "city",
    parent: "FI",
    coords: [26.9459, 60.466],
    name: { de: "Kotka", hu: "Kotka", ro: "Kotka", en: "Kotka" },
    description: {
      de: "Kotka ist eine wichtige Hafenstadt an der finnischen Südküste und ein Zentrum für Handel und Seeverkehr. Die Stadt ist bekannt für ihre Parks, Inseln und maritime Geschichte. Kotka verbindet Industrie, Natur und Küstenleben in einer kompakten Stadtstruktur. Als Hafen- und Küstenziel ist Kotka sehr wertvoll für SEO rund um Finnland und die Ostsee.",
      hu: "Kotka fontos kikötőváros Finnország déli partján, és a kereskedelem, valamint a tengeri közlekedés egyik központja. A város parkjairól, szigeteiről és tengeri történelméről ismert. Kotka sűrű városszerkezetben ötvözi az ipart, a természetet és a tengerparti életet. Kikötői és parti célpontként erős a finn és balti keresésekben.",
      ro: "Kotka este un important oraș-port pe coasta de sud a Finlandei și un centru pentru comerț și transport maritim. Orașul este cunoscut pentru parcuri, insule și istoria sa maritimă. Kotka combină industria, natura și viața de coastă într-o structură urbană compactă. Ca destinație portuară și de litoral, este foarte valoros pentru SEO despre Finlanda și Marea Baltică.",
      en: "Kotka is a major port city on Finland's southern coast and a center for trade and maritime transport. The city is known for its parks, islands, and maritime history. Kotka combines industry, nature, and coastal life in a compact urban form. As a port and seaside destination, it is strong for SEO around Finland and the Baltic Sea."
    },
    facts: {
      de: ["Kotka ist eine große Hafenstadt.", "Die Küstenlage prägt Handel und Alltag.", "Die Stadt ist für Parks und Inseln bekannt.", "Maritime Geschichte ist ein wichtiger Teil des Images.", "Kotka liegt nahe der Mündung der Kymijoki."],
      hu: ["Kotka nagy kikötőváros.", "A part menti fekvés meghatározza a kereskedelmet és a mindennapokat.", "A város parkjairól és szigeteiről híres.", "A tengeri történelem fontos része az arculatnak.", "Kotka közel van a Kymijoki torkolatához."],
      ro: ["Kotka este un mare oraș-port.", "Poziția de coastă influențează comerțul și viața de zi cu zi.", "Orașul este cunoscut pentru parcuri și insule.", "Istoria maritimă este o parte importantă a imaginii sale.", "Kotka se află aproape de gura râului Kymijoki."],
      en: ["Kotka is a major port city.", "Its coastal setting shapes trade and everyday life.", "The city is known for parks and islands.", "Maritime history is a major part of its image.", "Kotka lies near the mouth of the Kymijoki River."]
    },
    image: "/geo-images/finland/city-kotka.webp",
  },
  {
    id: "city-rovaniemi",
    type: "city",
    parent: "FI",
    coords: [25.7294, 66.5039],
    name: { de: "Rovaniemi", hu: "Rovaniemi", ro: "Rovaniemi", en: "Rovaniemi" },
    description: {
      de: "Rovaniemi ist die Hauptstadt von Lappland und eine der bekanntesten Städte Nordfinnlands. Die Stadt liegt am Zusammenfluss von Kemijoki und Ounasjoki und ist ein Symbol für arktische Reisen. Durch das Weihnachtsmanndorf, die Winterlandschaften und das Kulturzentrum Arktikum ist Rovaniemi weltweit bekannt. Für Lappland, Polarlicht und Nordfinnland ist Rovaniemi einer der stärksten SEO-Namen überhaupt.",
      hu: "Rovaniemi Lappföld fővárosa és Észak-Finnország egyik legismertebb városa. A város a Kemijoki és az Ounasjoki összefolyásánál fekszik, és az arktikus utazások jelképének számít. A Mikulás-falu, a téli tájak és az Arktikum kulturális központ miatt Rovaniemi világszerte ismert. A Lappföld, a sarki fény és Észak-Finnország témájában az egyik legerősebb keresőnév.",
      ro: "Rovaniemi este capitala Laponiei și unul dintre cele mai cunoscute orașe din nordul Finlandei. Orașul se află la confluența râurilor Kemijoki și Ounasjoki și este un simbol al călătoriilor arctice. Datorită Satului lui Moș Crăciun, peisajelor de iarnă și centrului cultural Arktikum, Rovaniemi este cunoscut la nivel mondial. Pentru Laponia, aurora boreală și nordul Finlandei, este unul dintre cele mai puternice nume SEO.",
      en: "Rovaniemi is the capital of Lapland and one of the best-known cities in northern Finland. The city sits at the confluence of the Kemijoki and Ounasjoki rivers and is a symbol of Arctic travel. With Santa Claus Village, winter landscapes, and the Arktikum cultural center, Rovaniemi is known worldwide. For Lapland, the Northern Lights, and northern Finland, it is one of the strongest SEO names."
    },
    facts: {
      de: ["Rovaniemi ist die Hauptstadt Lapplands.", "Die Stadt liegt am Zusammenfluss von Kemijoki und Ounasjoki.", "Das Weihnachtsmanndorf liegt in der Nähe.", "Das Arktikum ist ein wichtiges Kultur- und Wissenschaftszentrum.", "Die Stadt ist stark mit Wintertourismus verbunden."],
      hu: ["Rovaniemi Lappföld fővárosa.", "A város a Kemijoki és az Ounasjoki összefolyásánál található.", "A Mikulás-falu a közelben van.", "Az Arktikum fontos kulturális és tudományos központ.", "A város erősen kötődik a téli turizmushoz."],
      ro: ["Rovaniemi este capitala Laponiei.", "Orașul se află la confluența râurilor Kemijoki și Ounasjoki.", "Satul lui Moș Crăciun este în apropiere.", "Arktikum este un important centru cultural și științific.", "Orașul este puternic legat de turismul de iarnă."],
      en: ["Rovaniemi is the capital of Lapland.", "The city sits where the Kemijoki and Ounasjoki rivers meet.", "Santa Claus Village is nearby.", "The Arktikum is an important cultural and research center.", "The city is strongly tied to winter tourism."]
    },
    image: "/geo-images/finland/city-rovaniemi.webp",
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
  },
  {
    id: "hist-hame-castle",
    type: "historical",
    parent: "FI",
    coords: [24.4637, 61.001],
    name: { de: "Häme Castle", hu: "Häme vára", ro: "Castelul Häme", en: "Häme Castle" },
    description: {
      de: "Häme Castle ist eine der bekanntesten mittelalterlichen Burgen Finnlands und ein zentrales Symbol von Tavastia. Die rote Backsteinfestung liegt am Wasser und erzählt von Verteidigung, Macht und Handel im finnischen Mittelalter. Heute zieht die Burg Besucher mit Ausstellungen, Führungen und einer starken historischen Atmosphäre an. Für Burgen, Finnland-Geschichte und Kulturtourismus ist Häme Castle ein besonders starker SEO-Treffer.",
      hu: "A Häme vára Finnország egyik legismertebb középkori erődje és Tavastia fontos jelképe. A vöröstéglás erőd vízparti fekvése a finn középkor védelmi, hatalmi és kereskedelmi történetét meséli el. Ma kiállításokkal, vezetett túrákkal és erős történelmi hangulattal vonzza a látogatókat. Várakhoz, finn történelemhez és kulturális turizmushoz a Häme vára különösen erős SEO-elem.",
      ro: "Castelul Häme este una dintre cele mai cunoscute cetăți medievale din Finlanda și un simbol important al Tavastiei. Fortăreața din cărămidă roșie, aflată lângă apă, vorbește despre apărare, putere și comerț în Evul Mediu finlandez. Astăzi atrage vizitatori prin expoziții, tururi ghidate și o atmosferă istorică puternică. Pentru castele, istoria Finlandei și turism cultural, Häme Castle este un termen SEO foarte puternic.",
      en: "Häme Castle is one of Finland's best-known medieval castles and a key symbol of Tavastia. The red-brick fortress by the water tells the story of defense, power, and trade in medieval Finland. Today it attracts visitors with exhibitions, guided tours, and a strong historic atmosphere. For castles, Finnish history, and cultural tourism, Häme Castle is a very strong SEO topic."
    },
    facts: {
      de: ["Die Burg stammt aus dem Mittelalter.", "Sie gehört zu den wichtigsten Burgen Finnlands.", "Die rote Ziegelarchitektur ist sehr markant.", "Das Gelände liegt am Wasser in Hämeenlinna.", "Die Burg ist ein Magnet für Geschichtsreisen."],
      hu: ["A vár a középkorból származik.", "Finnország egyik legfontosabb vára.", "A vörös téglaépítészet nagyon karakteres.", "A helyszín vízparton, Hämeenlinnában található.", "A vár a történelmi utazások egyik fő célpontja."],
      ro: ["Castelul datează din Evul Mediu.", "Este una dintre cele mai importante cetăți din Finlanda.", "Arhitectura din cărămidă roșie este foarte distinctivă.", "Situația de pe malul apei este în Hämeenlinna.", "Castelul atrage multe excursii istorice."],
      en: ["The castle dates to the Middle Ages.", "It is one of Finland's most important castles.", "Its red-brick architecture is highly distinctive.", "The site sits by the water in Hämeenlinna.", "The castle is a major draw for history-focused trips."]
    },
    image: "/geo-images/finland/hist-hame-castle.webp",
  },
  {
    id: "hist-old-rauma",
    type: "historical",
    parent: "FI",
    coords: [21.5148, 61.127],
    name: { de: "Alt-Rauma", hu: "Ó-Rauma", ro: "Rauma veche", en: "Old Rauma" },
    description: {
      de: "Alt-Rauma ist ein UNESCO-Weltkulturerbe und einer der schönsten Altstadtkerne Finnlands. Das Viertel ist berühmt für seine Holzhäuser, engen Gassen und die lebendige Küstenatmosphäre. Besucher kommen hier für Architektur, Handwerk und eine Stadtgeschichte, die bis ins Mittelalter reicht. Als Suchthema für UNESCO, Holzarchitektur und finnische Küstenstädte ist Alt-Rauma sehr stark.",
      hu: "Ó-Rauma UNESCO világörökség, és Finnország egyik legszebb óvárosi magja. A negyedet fából épült házai, szűk utcái és élő tengerparti hangulata teszi híressé. A látogatók az építészet, a kézművesség és a középkorig visszanyúló várostörténet miatt érkeznek ide. UNESCO, faépítészet és finn tengerparti városok témájában Ó-Rauma rendkívül erős keresőkifejezés.",
      ro: "Rauma veche este un sit al Patrimoniului Mondial UNESCO și unul dintre cele mai frumoase centre istorice din Finlanda. Cartierul este renumit pentru casele din lemn, aleile înguste și atmosfera vie de coastă. Vizitatorii vin pentru arhitectură, meșteșuguri și o istorie urbană care coboară până în Evul Mediu. Ca subiect SEO pentru UNESCO, arhitectură din lemn și orașe de coastă finlandeze, Old Rauma este foarte puternic.",
      en: "Old Rauma is a UNESCO World Heritage site and one of Finland's most beautiful historic town centers. The district is famous for its wooden houses, narrow lanes, and lively coastal atmosphere. Visitors come for architecture, craftsmanship, and a city history that reaches back to the Middle Ages. As a search topic for UNESCO, wooden architecture, and Finnish coastal towns, Old Rauma is very strong."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 1991.", "Die Altstadt besteht aus Holzhäusern.", "Rauma ist eine wichtige Küstenstadt.", "Das Viertel bewahrt mittelalterliche Stadtstruktur.", "Es gehört zu den meistfotografierten Orten Westfinnlands."],
      hu: ["1991 óta UNESCO világörökség.", "Az óváros faházakból áll.", "Rauma fontos tengerparti város.", "A negyed megőrizte a középkori városszerkezetet.", "Nyugat-Finnország egyik legtöbbet fotózott helyszíne."],
      ro: ["Sit UNESCO din 1991.", "Centrul vechi este alcătuit din case din lemn.", "Rauma este un oraș de coastă important.", "Cartierul păstrează structura urbană medievală.", "Este unul dintre cele mai fotografiate locuri din vestul Finlandei."],
      en: ["UNESCO-listed since 1991.", "The old town is made of wooden houses.", "Rauma is an important coastal city.", "The district preserves a medieval urban layout.", "It is one of the most photographed places in western Finland."]
    },
    image: "/geo-images/finland/hist-old-rauma.webp",
  },
  {
    id: "hist-petajavesi-old-church",
    type: "historical",
    parent: "FI",
    coords: [25.1935, 62.2495],
    name: { de: "Alte Kirche von Petäjävesi", hu: "Petäjävesi régi temploma", ro: "Biserica veche din Petäjävesi", en: "Petäjävesi Old Church" },
    description: {
      de: "Die Alte Kirche von Petäjävesi ist ein herausragendes Beispiel für finnische Holzarchitektur aus dem 18. Jahrhundert. Das Gebäude gehört zum UNESCO-Weltkulturerbe und zeigt, wie ländliche Gemeinden in Mittelfinnland ihre Sakralbauten gestalteten. Besucher erleben hier eine ruhige, authentische Atmosphäre mit starkem historischen Wert. Für Kirche, UNESCO und Holzbau in Finnland ist dieser Ort ein äußerst relevantes Suchziel.",
      hu: "Petäjävesi régi temploma a 18. századi finn faépítészet kiemelkedő példája. Az épület az UNESCO világörökség része, és bemutatja, hogyan alakították ki a közép-finn falusi közösségek szakrális tereiket. A látogatók nyugodt, hiteles hangulatot és erős történelmi értéket tapasztalnak itt. Templom, UNESCO és finn faépítészet témájában ez rendkívül releváns célpont.",
      ro: "Biserica veche din Petäjävesi este un exemplu remarcabil de arhitectură finlandeză din lemn din secolul al XVIII-lea. Clădirea face parte din patrimoniul mondial UNESCO și arată cum comunitățile rurale din centrul Finlandei își construiau spațiile sacre. Vizitatorii găsesc aici o atmosferă liniștită, autentică și o valoare istorică puternică. Pentru biserici, UNESCO și construcții din lemn în Finlanda, acest loc este foarte relevant.",
      en: "Petäjävesi Old Church is a remarkable example of 18th-century Finnish wooden architecture. The building is a UNESCO World Heritage site and shows how rural communities in central Finland shaped their sacred spaces. Visitors experience a quiet, authentic atmosphere with strong historic value. For churches, UNESCO, and wooden construction in Finland, this site is highly relevant."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 1994.", "Erbaut im 18. Jahrhundert.", "Ein Schlüsselbeispiel ländlicher Holzarchitektur.", "Die Kirche liegt in Mittelfinnland.", "Sie ist ein wichtiges Ziel für Architekturinteressierte."],
      hu: ["1994 óta UNESCO világörökség.", "A 18. században épült.", "A falusi faépítészet fontos példája.", "A templom Közép-Finnországban található.", "Fontos célpont az építészet iránt érdeklődőknek."],
      ro: ["Patrimoniu UNESCO din 1994.", "A fost construită în secolul al XVIII-lea.", "Este un exemplu-cheie de arhitectură rurală din lemn.", "Biserica se află în centrul Finlandei.", "Este o destinație importantă pentru pasionații de arhitectură."],
      en: ["UNESCO-listed since 1994.", "Built in the 18th century.", "A key example of rural wooden architecture.", "The church is located in central Finland.", "It is an important stop for architecture enthusiasts."]
    },
    image: "/geo-images/finland/hist-petajavesi-old-church.webp",
  },
  {
    id: "hist-sammallahdenmaki",
    type: "historical",
    parent: "FI",
    coords: [21.8456, 61.1188],
    name: { de: "Sammallahdenmäki", hu: "Sammallahdenmäki", ro: "Sammallahdenmäki", en: "Sammallahdenmäki" },
    description: {
      de: "Sammallahdenmäki ist eine bedeutende bronzezeitliche Begräbnisstätte und UNESCO-Weltkulturerbe in der Nähe von Rauma. Die Felsgräber zeigen frühe Bestattungstraditionen und das tiefe historische Gedächtnis der finnischen Küstenlandschaft. Der Ort verbindet Archäologie, Natur und Geschichte zu einem eindrucksvollen Besuchserlebnis. Für bronzezeitliche Stätten in Finnland ist Sammallahdenmäki ein erstklassiges SEO-Ziel.",
      hu: "Sammallahdenmäki fontos bronzkori temetkezési hely és UNESCO világörökség Rauma közelében. A kőhalmok az ősi temetkezési hagyományokat és a finn tengerparti táj mély történelmi emlékezetét mutatják be. A hely régészetet, természetet és történelmet kapcsol össze különleges látogatási élménnyé. Finnországi bronzkori helyszínekként Sammallahdenmäki kiemelkedő SEO-célpont.",
      ro: "Sammallahdenmäki este un important sit funerar din Epoca Bronzului și patrimoniu mondial UNESCO, aproape de Rauma. Mormintele din piatră arată tradiții funerare timpurii și memoria istorică profundă a peisajului de coastă finlandez. Locul combină arheologia, natura și istoria într-o experiență de vizitare impresionantă. Pentru situri din Epoca Bronzului în Finlanda, Sammallahdenmäki este o țintă SEO de top.",
      en: "Sammallahdenmäki is a major Bronze Age burial site and a UNESCO World Heritage location near Rauma. The stone cairns show early burial traditions and the deep historic memory of Finland's coastal landscape. The site combines archaeology, nature, and history into a striking visitor experience. For Bronze Age sites in Finland, Sammallahdenmäki is a top SEO target."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 1999.", "Es handelt sich um eine bronzezeitliche Begräbnisstätte.", "Der Ort liegt bei Rauma.", "Die Steinhügel sind archäologisch sehr wichtig.", "Die Landschaft verbindet Geschichte und Küste."],
      hu: ["1999 óta UNESCO világörökség.", "Bronzkori temetkezési helyről van szó.", "A hely Rauma közelében található.", "A kőhalmok régészetileg nagyon fontosak.", "A táj a történelmet és a partvidéket köti össze."],
      ro: ["Patrimoniu UNESCO din 1999.", "Este un sit funerar din Epoca Bronzului.", "Locul se află lângă Rauma.", "Movilele de piatră sunt foarte importante arheologic.", "Peisajul combină istoria cu zona de coastă."],
      en: ["UNESCO-listed since 1999.", "It is a Bronze Age burial site.", "The site is near Rauma.", "The stone cairns are archaeologically important.", "The landscape links history with the coast."]
    },
    image: "/geo-images/finland/hist-sammallahdenmaki.webp",
  },
  {
    id: "hist-tali-ihantala",
    type: "historical",
    parent: "FI",
    coords: [28.5, 61.08],
    name: { de: "Tali-Ihantala", hu: "Tali-Ihantala", ro: "Tali-Ihantala", en: "Tali-Ihantala" },
    description: {
      de: "Tali-Ihantala ist der bekannteste Schauplatz der größten Schlacht in der nordischen Militärgeschichte. Das Gebiet erinnert an die entscheidenden Kämpfe des Sommers 1944 im Fortsetzungskrieg zwischen Finnland und der Sowjetunion. Heute ist der Ort ein stiller historischer Bezugspunkt für Erinnerung, Militärgeschichte und Gedenkkultur. Für Battlefield-Tourismus und finnische Kriegsgeschichte ist Tali-Ihantala ein sehr starker Name.",
      hu: "Tali-Ihantala az északi hadtörténet legnagyobb csatájának legismertebb helyszíne. A terület az 1944 nyarán zajló döntő harcokra emlékeztet a finn–szovjet folytatólagos háborúból. Ma csendes történelmi viszonyítási pont az emlékezet, a hadtörténet és a kegyeleti kultúra számára. A csatatér-turizmus és a finn háborús történelem témájában Tali-Ihantala nagyon erős név.",
      ro: "Tali-Ihantala este cel mai cunoscut loc al celei mai mari bătălii din istoria militară nordică. Zona amintește de luptele decisive din vara anului 1944, din Războiul de Continuare dintre Finlanda și Uniunea Sovietică. Astăzi, locul este un reper istoric liniștit pentru memorie, istorie militară și cultură a comemorării. Pentru turismul de câmp de bătălie și istoria războiului finlandez, Tali-Ihantala este un nume foarte puternic.",
      en: "Tali-Ihantala is the best-known site of the largest battle in Nordic military history. The area recalls the decisive fighting of summer 1944 in the Continuation War between Finland and the Soviet Union. Today it serves as a quiet historic reference point for memory, military history, and commemoration. For battlefield tourism and Finnish war history, Tali-Ihantala is a very strong name."
    },
    facts: {
      de: ["Ort der Schlacht von Tali-Ihantala 1944.", "Gilt als größte Schlacht der nordischen Geschichte.", "Liegt in Südostfinnland.", "Wichtig für Erinnerungs- und Militärgeschichte.", "Ein zentraler Ort für Kriegsgedenkungen."],
      hu: ["Az 1944-es Tali-Ihantala-i csata helyszíne.", "Az északi történelem legnagyobb csatájának számít.", "Délkelet-Finnországban található.", "Fontos az emlékezet- és hadtörténet számára.", "Központi helyszín a háborús megemlékezésekben."],
      ro: ["Locul bătăliei de la Tali-Ihantala din 1944.", "Este considerată cea mai mare bătălie din istoria nordică.", "Se află în sud-estul Finlandei.", "Este importantă pentru memoria istorică și istoria militară.", "Un loc central pentru comemorările de război."],
      en: ["Site of the 1944 Battle of Tali-Ihantala.", "It is considered the largest battle in Nordic history.", "Located in southeast Finland.", "Important for memory and military history.", "A central place for war commemorations."]
    },
    image: "/geo-images/finland/hist-tali-ihantala.webp",
  },
  {
    id: "hist-salpa-line-museum",
    type: "historical",
    parent: "FI",
    coords: [27.704, 60.704],
    name: { de: "Salpa-Linie-Museum", hu: "Salpa-vonal Múzeum", ro: "Muzeul Liniei Salpa", en: "Salpa Line Museum" },
    description: {
      de: "Das Salpa-Line-Museum präsentiert Finnlands gewaltige Verteidigungslinie aus dem Zweiten Weltkrieg. Die Anlage zeigt Bunker, Schützengräben und militärische Infrastruktur, die das Land im Osten sichern sollten. Besucher erhalten hier ein klares Bild von Strategie, Alltag und Bauleistung in Kriegszeiten. Für Militärgeschichte, Bunker und Finnland im Zweiten Weltkrieg ist dieser Ort ein starker SEO-Kandidat.",
      hu: "A Salpa-vonal Múzeum Finnország második világháborús védelmi vonalát mutatja be. A helyszín bunkereket, lövészárkokat és katonai infrastruktúrát őriz, amelyek az ország keleti védelmét szolgálták. A látogatók világos képet kapnak a háborús stratégia, a mindennapok és az építési teljesítmény kapcsolatáról. Katonai történelemhez, bunkerekhez és a második világháborús Finnországhoz ez erős SEO-célpont.",
      ro: "Muzeul Liniei Salpa prezintă uriașa linie de apărare a Finlandei din al Doilea Război Mondial. Complexul arată buncăre, tranșee și infrastructură militară menite să protejeze țara din est. Vizitatorii primesc aici o imagine clară despre strategie, viața de zi cu zi și efortul de construcție din timpul războiului. Pentru istorie militară, buncăre și Finlanda în al Doilea Război Mondial, acesta este un obiectiv SEO puternic.",
      en: "The Salpa Line Museum presents Finland's massive World War II defense line. The site shows bunkers, trenches, and military infrastructure built to protect the country from the east. Visitors get a clear picture of wartime strategy, daily life, and the scale of construction effort. For military history, bunkers, and Finland in World War II, this is a strong SEO target."
    },
    facts: {
      de: ["Die Salpa-Linie wurde im Zweiten Weltkrieg gebaut.", "Das Museum zeigt Bunker und Verteidigungsanlagen.", "Die Anlage liegt in Südostfinnland.", "Sie erklärt Finnlands Kriegsverteidigung sehr anschaulich.", "Ein wichtiges Ziel für Geschichts- und Militärinteressierte."],
      hu: ["A Salpa-vonalat a második világháborúban építették.", "A múzeum bunkereket és védelmi létesítményeket mutat be.", "A helyszín Délkelet-Finnországban található.", "Nagyon szemléletesen magyarázza Finnország háborús védelmét.", "Fontos célpont a történelem és a hadtörténet iránt érdeklődőknek."],
      ro: ["Linia Salpa a fost construită în al Doilea Război Mondial.", "Muzeul prezintă buncăre și structuri defensive.", "Locul se află în sud-estul Finlandei.", "Explică foarte clar apărarea de război a Finlandei.", "Este o destinație importantă pentru pasionații de istorie și istorie militară."],
      en: ["The Salpa Line was built during World War II.", "The museum shows bunkers and defensive structures.", "The site is in southeast Finland.", "It explains Finland's wartime defense very clearly.", "It is a key stop for history and military-history fans."]
    },
    image: "/geo-images/finland/hist-salpa-line-museum.webp",
  },
  {
    id: "hist-langinkoski-imperial-lodge",
    type: "historical",
    parent: "FI",
    coords: [26.958, 60.473],
    name: { de: "Kaiserliche Fischhütte Langinkoski", hu: "Langinkoski császári vadászház", ro: "Pavilionul imperial de pescuit Langinkoski", en: "Langinkoski Imperial Fishing Lodge" },
    description: {
      de: "Langinkoski war die kaiserliche Fischhütte von Zar Alexander III. und ist heute ein bedeutendes historisches Ausflugsziel bei Kotka. Das Holzgebäude erzählt von russisch-imperialer Sommerfrische, Fischerei und dem Leben an einem finnischen Stromschnellenplatz. Die Kombination aus Natur, Geschichte und Monarchie macht den Ort besonders erzählbar. Für kaiserliche Geschichte, Kotka und historische Ausflüge ist Langinkoski sehr SEO-stark.",
      hu: "Langinkoski II. Sándor cár császári vadászháza volt, és ma Kotka fontos történelmi kirándulóhelye. A faház az orosz császári nyaralás, a horgászat és egy finn zuhatagos hely mindennapjainak történetét meséli el. A természet, a történelem és a monarchia kombinációja különösen jól eladhatóvá teszi a helyet. Császári történelemhez, Kotkához és történelmi kirándulásokhoz Langinkoski nagyon erős SEO-elem.",
      ro: "Langinkoski a fost pavilionul imperial de pescuit al țarului Alexandru al III-lea și este astăzi o importantă destinație istorică de excursie lângă Kotka. Clădirea din lemn spune povestea verilor imperiale ruse, a pescuitului și a vieții într-un loc cu repezișuri finlandeze. Combinația de natură, istorie și monarhie face locul foarte atractiv narativ. Pentru istoria imperială, Kotka și excursii istorice, Langinkoski este foarte puternic SEO.",
      en: "Langinkoski was the imperial fishing lodge of Tsar Alexander III and is now a major historic excursion site near Kotka. The wooden building tells the story of Russian imperial summers, fishing, and life at a Finnish rapids site. The mix of nature, history, and monarchy makes the place especially compelling. For imperial history, Kotka, and historic day trips, Langinkoski is very SEO-strong."
    },
    facts: {
      de: ["Mit Zar Alexander III. verbunden.", "Liegt bei Kotka am Fluss Langinkoski.", "Das Holzgebäude ist historisch bedeutsam.", "Verbindet russische Kaiserzeit und finnische Natur.", "Beliebtes Ziel für Kultur- und Ausflugstourismus."],
      hu: ["II. Sándor cárhoz kötődik.", "Kotka mellett, a Langinkoski folyószakaszon található.", "A faház történelmileg jelentős.", "Az orosz cári kort és a finn természetet köti össze.", "Népszerű kulturális és kirándulóhely."],
      ro: ["Este legat de țarul Alexandru al III-lea.", "Se află lângă Kotka, pe râul Langinkoski.", "Clădirea din lemn are o mare importanță istorică.", "Leagă epoca imperială rusă de natura finlandeză.", "Este o destinație populară pentru cultură și excursii."],
      en: ["Linked to Tsar Alexander III.", "Located near Kotka on the Langinkoski river site.", "The wooden building is historically important.", "It connects Russian imperial history with Finnish nature.", "A popular destination for culture and day trips."]
    },
    image: "/geo-images/finland/hist-langinkoski-imperial-lodge.webp",
  },
  {
    id: "hist-bomarsund-fortress",
    type: "historical",
    parent: "FI",
    coords: [20.224, 60.217],
    name: { de: "Festung Bomarsund", hu: "Bomarsund erőd", ro: "Fortăreața Bomarsund", en: "Bomarsund Fortress" },
    description: {
      de: "Bomarsund ist die berühmte Festungsruine auf Łland und ein Schlüsselort der Krimkriegsgeschichte im Norden. Die Anlage wurde im 19. Jahrhundert als russische Militärfestung geplant und später im Krimkrieg zerstört. Heute ist sie ein markanter historischer Ort mit Wasserblick und Inselkulisse. Für Łland, Festungen und europäische Militärgeschichte ist Bomarsund sehr attraktiv.",
      hu: "Bomarsund Łland híres erődromja és az északi krími háborús történelem egyik kulcshelyszíne. A 19. században orosz katonai erődnek tervezték, majd a krími háborúban megsemmisült. Ma látványos történelmi hely vízparti panorámával és szigetvilági környezettel. Łland, erődök és európai hadtörténelem témájában Bomarsund nagyon vonzó.",
      ro: "Bomarsund este celebra ruină de fortăreață din Łland și un loc-cheie în istoria nordică a Războiului Crimeii. Complexul a fost proiectat în secolul al XIX-lea ca fortăreață militară rusă și a fost distrus ulterior în război. Astăzi este un loc istoric impresionant, cu priveliști spre apă și peisaj insular. Pentru Łland, fortărețe și istorie militară europeană, Bomarsund este foarte atractiv.",
      en: "Bomarsund is the famous fortress ruin on Łland and a key northern site in Crimean War history. The complex was planned in the 19th century as a Russian military fortress and later destroyed in the war. Today it is a striking historic place with water views and island scenery. For Łland, fortresses, and European military history, Bomarsund is very attractive."
    },
    facts: {
      de: ["Die Festung liegt auf Łland.", "Sie ist mit dem Krimkrieg verbunden.", "Der Bau begann im 19. Jahrhundert.", "Heute ist sie eine eindrucksvolle Ruine.", "Ein wichtiger Punkt für Insel- und Militärgeschichte."],
      hu: ["Az erőd Łlandon található.", "A krími háborúhoz kapcsolódik.", "Az építése a 19. században kezdődött.", "Ma látványos romként áll.", "Fontos pont a sziget- és hadtörténetben."],
      ro: ["Fortăreața se află în Łland.", "Este legată de Războiul Crimeii.", "Construcția a început în secolul al XIX-lea.", "Astăzi este o ruină impresionantă.", "Un punct important pentru istoria insulelor și istoria militară."],
      en: ["The fortress is located in Łland.", "It is linked to the Crimean War.", "Construction began in the 19th century.", "Today it stands as an impressive ruin.", "An important point for island and military history."]
    },
    image: "/geo-images/finland/hist-bomarsund-fortress.webp",
  },
  {
    id: "landmark-temppeliaukio-church",
    type: "landmark",
    parent: "FI",
    coords: [24.9311, 60.173],
    name: { de: "Temppeliaukio-Kirche", hu: "Temppeliaukio-templom", ro: "Biserica Temppeliaukio", en: "Temppeliaukio Church" },
    description: {
      de: "Die Temppeliaukio-Kirche, auch als Felsenkirche bekannt, ist eines der ikonischsten modernen Bauwerke Helsinkis. Direkt in den Fels geschnitten, verbindet sie Naturstein, Licht und akustische Qualität zu einem einzigartigen Raum. Das Bauwerk ist ein Magnet für Architekturfreunde, Konzertbesucher und Stadtentdecker. Für Helsinki, moderne Kirchenarchitektur und finnisches Design ist sie ein Top-SEO-Thema.",
      hu: "A Temppeliaukio-templom, vagyis a Sziklatemplom Helsinki egyik legikonikusabb modern épülete. Közvetlenül a sziklába vájt tere a kő, a fény és az akusztika egyedülálló kombinációját adja. Az épület az építészet iránt érdeklődők, koncertlátogatók és városfelfedezők kedvence. Helsinkihez, modern templomépítészethez és finn dizájnhoz kiváló SEO-téma.",
      ro: "Biserica Temppeliaukio, cunoscută și ca Biserica din Stâncă, este una dintre cele mai iconice clădiri moderne din Helsinki. Săpată direct în stâncă, combină piatra naturală, lumina și acustica într-un spațiu unic. Clădirea atrage pasionați de arhitectură, vizitatori de concerte și exploratori urbani. Pentru Helsinki, arhitectură modernă de biserică și design finlandez, este un subiect SEO de top.",
      en: "Temppeliaukio Church, also known as the Rock Church, is one of Helsinki's most iconic modern buildings. Carved directly into bedrock, it combines natural stone, light, and acoustics into a unique space. The building attracts architecture fans, concertgoers, and city explorers. For Helsinki, modern church architecture, and Finnish design, it is a top SEO topic."
    },
    facts: {
      de: ["Die Kirche wurde in Fels gehauen.", "Sie liegt im Zentrum von Helsinki.", "Die Akustik ist international bekannt.", "Ein Top-Ziel für Architekturreisen.", "Sie gehört zu den meistbesuchten Sehenswürdigkeiten der Stadt."],
      hu: ["A templomot sziklába vájták.", "Helsinki központjában található.", "Az akusztikája nemzetközileg ismert.", "Kiemelt célpont az építészeti utazásoknál.", "A város egyik leglátogatottabb látványossága."],
      ro: ["Biserica este săpată în stâncă.", "Se află în centrul Helsinkiului.", "Acustica este cunoscută internațional.", "O destinație de top pentru tururile de arhitectură.", "Este una dintre cele mai vizitate atracții ale orașului."],
      en: ["The church is carved into bedrock.", "It is located in central Helsinki.", "Its acoustics are internationally known.", "A top destination for architecture trips.", "It is one of the city's most visited attractions."]
    },
    image: "/geo-images/finland/landmark-temppeliaukio-church.webp",
  },
  {
    id: "landmark-oodi-library",
    type: "landmark",
    parent: "FI",
    coords: [24.9384, 60.1747],
    name: { de: "Bibliothek Oodi", hu: "Oodi könyvtár", ro: "Biblioteca Oodi", en: "Oodi Library" },
    description: {
      de: "Oodi ist Helsinkis berühmte Zentralbibliothek und ein modernes Symbol für offene Stadtkultur. Das Gebäude verbindet Holz, Glas und öffentliche Räume zu einem einladenden Treffpunkt für Lesen, Arbeit und Veranstaltungen. Oodi wird oft als Beispiel für zukunftsorientierte finnische Architektur und demokratische Infrastruktur genannt. Für Helsinki, Bibliotheken und modernes Design ist Oodi ein sehr starkes Suchthema.",
      hu: "Az Oodi Helsinki híres központi könyvtára és a nyitott városi kultúra modern szimbóluma. Az épület a fa, az üveg és a közösségi terek ötvözésével olvasásra, munkára és eseményekre hívó helyet teremt. Oodit gyakran említik a jövőbe mutató finn építészet és a demokratikus közösségi infrastruktúra példájaként. Helsinkihez, könyvtárakhoz és modern dizájnhoz nagyon erős keresési téma.",
      ro: "Oodi este celebra bibliotecă centrală din Helsinki și un simbol modern al culturii urbane deschise. Clădirea combină lemn, sticlă și spații publice într-un loc primitor pentru lectură, muncă și evenimente. Oodi este adesea citată ca exemplu de arhitectură finlandeză orientată spre viitor și infrastructură democratică. Pentru Helsinki, biblioteci și design modern, Oodi este un subiect SEO foarte puternic.",
      en: "Oodi is Helsinki's famous central library and a modern symbol of open urban culture. The building combines wood, glass, and public space into an inviting place for reading, work, and events. Oodi is often cited as an example of future-oriented Finnish architecture and democratic civic infrastructure. For Helsinki, libraries, and modern design, Oodi is a very strong search topic."
    },
    facts: {
      de: ["Die Zentralbibliothek liegt im Zentrum Helsinkis.", "Sie steht für offene öffentliche Räume.", "Holz spielt im Design eine große Rolle.", "Oodi ist ein modernes Wahrzeichen.", "Beliebt bei Einheimischen und Touristen."],
      hu: ["A központi könyvtár Helsinki belvárosában található.", "A nyitott közösségi terek szimbóluma.", "A fa fontos szerepet játszik a dizájnban.", "Oodi modern városjelkép.", "A helyiek és a turisták is kedvelik."],
      ro: ["Biblioteca centrală se află în centrul Helsinkiului.", "Simbolizează spațiile publice deschise.", "Lemnul joacă un rol major în design.", "Oodi este un reper modern.", "Este apreciată de localnici și turiști."],
      en: ["The central library is in downtown Helsinki.", "It stands for open public space.", "Wood plays a major role in the design.", "Oodi is a modern landmark.", "It is popular with locals and tourists alike."]
    },
    image: "/geo-images/finland/landmark-oodi-library.webp",
  },
  {
    id: "landmark-helsinki-central-station",
    type: "landmark",
    parent: "FI",
    coords: [24.9413, 60.1719],
    name: { de: "Hauptbahnhof Helsinki", hu: "Helsinki főpályaudvar", ro: "Gara Centrală Helsinki", en: "Helsinki Central Station" },
    description: {
      de: "Der Hauptbahnhof Helsinki ist eines der bekanntesten Wahrzeichen der Stadt und ein Meisterwerk des finnischen Jugendstils. Seine granitenen Figuren und die monumentale Fassade machen ihn sofort erkennbar. Als Verkehrsknoten, Architekturdenkmal und Stadteingang ist der Bahnhof sowohl praktisch als auch ikonisch. Für Helsinki, Bahnreisen und finnische Architektur ist er ein sehr starker SEO-Anker.",
      hu: "A Helsinki főpályaudvar a város egyik legismertebb jelképe és a finn szecesszió mesterműve. Gránit alakjai és monumentális homlokzata azonnal felismerhetővé teszik. Közlekedési csomópontként, építészeti emlékként és városi kapuként egyszerre praktikus és ikonikus. Helsinki, vasúti utazás és finn építészet témájában nagyon erős SEO-horgony.",
      ro: "Gara Centrală Helsinki este unul dintre cele mai cunoscute repere ale orașului și o capodoperă a stilului Art Nouveau finlandez. Figurinele din granit și fațada monumentală o fac imediat recognoscibilă. Ca nod de transport, monument arhitectural și poartă urbană, gara este atât practică, cât și iconică. Pentru Helsinki, călătorii cu trenul și arhitectură finlandeză, este un ancoraj SEO foarte puternic.",
      en: "Helsinki Central Station is one of the city's most famous landmarks and a masterpiece of Finnish Art Nouveau. Its granite figures and monumental facade make it instantly recognizable. As a transport hub, architectural monument, and city gateway, the station is both practical and iconic. For Helsinki, rail travel, and Finnish architecture, it is a very strong SEO anchor."
    },
    facts: {
      de: ["Ein Wahrzeichen des finnischen Jugendstils.", "Der Bahnhof ist ein wichtiger Verkehrsknoten.", "Die Steinskulpturen sind sehr bekannt.", "Er liegt im Herzen Helsinkis.", "Einer der meistfotografierten Bahnhöfe des Landes."],
      hu: ["A finn szecesszió jelképes épülete.", "A pályaudvar fontos közlekedési csomópont.", "A kőszobrok nagyon híresek.", "Helsinki szívében található.", "Az ország egyik legtöbbet fotózott pályaudvara."],
      ro: ["Un reper al Art Nouveau finlandez.", "Gara este un nod de transport important.", "Sculpturile din piatră sunt foarte cunoscute.", "Se află în inima Helsinkiului.", "Una dintre cele mai fotografiate gări din țară."],
      en: ["A landmark of Finnish Art Nouveau.", "The station is an important transport hub.", "The stone sculptures are well known.", "It sits in the heart of Helsinki.", "One of the country's most photographed stations."]
    },
    image: "/geo-images/finland/landmark-helsinki-central-station.webp",
  },
  {
    id: "landmark-ateneum",
    type: "landmark",
    parent: "FI",
    coords: [24.9448, 60.1702],
    name: { de: "Ateneum", hu: "Ateneum", ro: "Ateneum", en: "Ateneum" },
    description: {
      de: "Das Ateneum ist Finnlands bekanntestes Kunstmuseum und ein zentraler Ort der nationalen Bildkultur. Das neoklassizistische Gebäude steht mitten in Helsinki und beherbergt wichtige Werke der finnischen Kunstgeschichte. Besucher kommen hier für Sammlungen, Sonderausstellungen und einen tiefen Einblick in die Kultur des Landes. Für Kunst, Museen und Helsinki ist das Ateneum ein sehr starkes SEO-Thema.",
      hu: "Az Ateneum Finnország legismertebb művészeti múzeuma és a nemzeti képkultúra egyik központi helye. A neoklasszikus épület Helsinki közepén áll, és a finn művészettörténet fontos alkotásait őrzi. A látogatók gyűjtemények, időszaki kiállítások és az ország kultúrájába nyújtott mély betekintés miatt érkeznek. Művészet, múzeumok és Helsinki témájában az Ateneum rendkívül erős SEO-elem.",
      ro: "Ateneum este cel mai cunoscut muzeu de artă din Finlanda și un loc central al culturii vizuale naționale. Clădirea neoclasică se află în centrul Helsinkiului și găzduiește opere importante din istoria artei finlandeze. Vizitatorii vin pentru colecții, expoziții temporare și o privire profundă asupra culturii țării. Pentru artă, muzee și Helsinki, Ateneum este un subiect SEO foarte puternic.",
      en: "Ateneum is Finland's best-known art museum and a central place in the country's visual culture. The neoclassical building stands in downtown Helsinki and houses important works from Finnish art history. Visitors come for collections, temporary exhibitions, and a deep look into the nation's culture. For art, museums, and Helsinki, Ateneum is a very strong SEO topic."
    },
    facts: {
      de: ["Das Museum liegt im Zentrum Helsinkis.", "Es zeigt finnische Kunstgeschichte.", "Das Gebäude ist neoklassizistisch.", "Ein Kernort der nationalen Kultur.", "Beliebt bei Kunst- und Städtereisenden."],
      hu: ["A múzeum Helsinki központjában található.", "Finn művészettörténetet mutat be.", "Az épület neoklasszicista.", "A nemzeti kultúra egyik központi helye.", "Népszerű a művészet- és városlátogató utazók körében."],
      ro: ["Muzeul se află în centrul Helsinkiului.", "Prezintă istoria artei finlandeze.", "Clădirea este neoclasică.", "Un loc central al culturii naționale.", "Popular printre iubitorii de artă și city-break-uri."],
      en: ["The museum is in central Helsinki.", "It showcases Finnish art history.", "The building is neoclassical.", "A core site of national culture.", "Popular with art and city-break travelers."]
    },
    image: "/geo-images/finland/landmark-ateneum.webp",
  },
  {
    id: "landmark-national-museum",
    type: "landmark",
    parent: "FI",
    coords: [24.9317, 60.1763],
    name: { de: "Nationalmuseum Finnlands", hu: "Finn Nemzeti Múzeum", ro: "Muzeul Național al Finlandei", en: "National Museum of Finland" },
    description: {
      de: "Das Nationalmuseum Finnlands ist die wichtigste Adresse für Landesgeschichte in Helsinki. Das burgähnliche Gebäude zeigt Ausstellungen von der Vorgeschichte bis zur modernen Nation. Mit seiner markanten Architektur und seinem kulturellen Gewicht ist es ein zentraler Ort für Besucher, die Finnland verstehen wollen. Für Geschichte, Museen und Hauptstadt-SEO ist das Nationalmuseum sehr wertvoll.",
      hu: "A Finn Nemzeti Múzeum Helsinki legfontosabb történelmi intézménye. A várszerű épület a történelem előtti időktől a modern nemzetig mutat be kiállításokat. Jellegzetes építészetével és kulturális súlyával kulcsfontosságú helyszín mindazoknak, akik meg akarják érteni Finnországot. Történelemhez, múzeumokhoz és fővárosi SEO-hoz ez nagyon értékes név.",
      ro: "Muzeul Național al Finlandei este cea mai importantă adresă pentru istoria țării din Helsinki. Clădirea, care seamănă cu un castel, prezintă expoziții de la preistorie până la națiunea modernă. Prin arhitectura sa distinctivă și greutatea culturală, este un loc cheie pentru vizitatorii care vor să înțeleagă Finlanda. Pentru istorie, muzee și SEO de capitală, muzeul este foarte valoros.",
      en: "The National Museum of Finland is Helsinki's key address for national history. The castle-like building presents exhibitions from prehistory to the modern nation. With its distinctive architecture and cultural weight, it is a key place for visitors who want to understand Finland. For history, museums, and capital-city SEO, the museum is very valuable."
    },
    facts: {
      de: ["Das Museum liegt in Helsinki.", "Es deckt die finnische Geschichte umfassend ab.", "Die Architektur ist burgenähnlich.", "Ein wichtiger Bildungsort für Besucher.", "Starker Bezug zu nationaler Identität."],
      hu: ["A múzeum Helsinkiben található.", "Átfogóan mutatja be a finn történelmet.", "Az építészet várszerű.", "Fontos oktatási helyszín a látogatók számára.", "Erős kapcsolatban áll a nemzeti identitással."],
      ro: ["Muzeul se află în Helsinki.", "Acoperă pe larg istoria Finlandei.", "Arhitectura seamănă cu un castel.", "Un loc educativ important pentru vizitatori.", "Are o legătură puternică cu identitatea națională."],
      en: ["The museum is in Helsinki.", "It broadly covers Finnish history.", "The architecture is castle-like.", "An important educational stop for visitors.", "Strongly tied to national identity."]
    },
    image: "/geo-images/finland/landmark-national-museum.webp",
  },
  {
    id: "landmark-finlandia-hall",
    type: "landmark",
    parent: "FI",
    coords: [24.9308, 60.1747],
    name: { de: "Finlandia-Halle", hu: "Finlandia Hall", ro: "Finlandia Hall", en: "Finlandia Hall" },
    description: {
      de: "Die Finlandia-Halle ist ein berühmtes Konferenz- und Konzertgebäude von Alvar Aalto in Helsinki. Ihre weißen Marmorfassaden und klaren Linien machten sie zu einem Symbol moderner finnischer Architektur. Das Gebäude steht für Kultur, Staatsempfang und hochwertige Veranstaltungen in der Hauptstadt. Für Architektur, Aalto und Helsinki-Events ist die Finlandia-Halle ein starker SEO-Punkt.",
      hu: "A Finlandia Hall Alvar Aalto híres konferencia- és koncertépülete Helsinkiben. Fehér márványhomlokzata és tiszta vonalai a modern finn építészet jelképévé tették. Az épület a kultúrát, az állami rendezvényeket és a magas színvonalú programokat képviseli a fővárosban. Az építészet, Aalto és helsinki események témájában a Finlandia Hall erős SEO-elem.",
      ro: "Finlandia Hall este o celebră clădire de conferințe și concerte proiectată de Alvar Aalto în Helsinki. Fațadele sale din marmură albă și liniile clare au transformat-o într-un simbol al arhitecturii finlandeze moderne. Clădirea reprezintă cultura, recepțiile de stat și evenimentele de înaltă calitate din capitală. Pentru arhitectură, Aalto și evenimentele din Helsinki, Finlandia Hall este un punct SEO puternic.",
      en: "Finlandia Hall is a famous conference and concert building by Alvar Aalto in Helsinki. Its white marble facades and clean lines made it a symbol of modern Finnish architecture. The building stands for culture, state events, and high-profile gatherings in the capital. For architecture, Aalto, and Helsinki events, Finlandia Hall is a strong SEO point."
    },
    facts: {
      de: ["Entworfen von Alvar Aalto.", "Wichtiges Konferenz- und Konzertgebäude.", "Liegt am Töölönlahti-Ufer.", "Ein Symbol der modernen Architektur.", "Eng mit Helsinkis Kulturleben verbunden."],
      hu: ["Alvar Aalto tervezte.", "Fontos konferencia- és koncertépület.", "A Töölönlahti partján áll.", "A modern építészet jelképe.", "Erősen kötődik Helsinki kulturális életéhez."],
      ro: ["Proiectată de Alvar Aalto.", "Clădire importantă de conferințe și concerte.", "Se află pe malul golfului Töölönlahti.", "Un simbol al arhitecturii moderne.", "Strâns legată de viața culturală a Helsinkiului."],
      en: ["Designed by Alvar Aalto.", "An important conference and concert building.", "Located on the Töölönlahti shore.", "A symbol of modern architecture.", "Closely tied to Helsinki's cultural life."]
    },
    image: "/geo-images/finland/landmark-finlandia-hall.webp",
  },
  {
    id: "landmark-uspenski-cathedral",
    type: "landmark",
    parent: "FI",
    coords: [24.9601, 60.1717],
    name: { de: "Uspenski-Kathedrale", hu: "Uszpenszkij-székesegyház", ro: "Catedrala Uspenski", en: "Uspenski Cathedral" },
    description: {
      de: "Die Uspenski-Kathedrale ist die große orthodoxe Kathedrale Helsinkis und ein markantes Wahrzeichen über dem Hafen. Ihre roten Backsteine und goldenen Kuppeln bringen ein starkes osteuropäisches Element in die Stadtlandschaft. Besucher schätzen den Blick über das Zentrum, den Hafen und die Mischung aus Architekturstilen. Für Helsinki, Kirchen und ikonische Gebäude ist die Kathedrale ein starkes SEO-Thema.",
      hu: "Az Uszpenszkij-székesegyház Helsinki nagy ortodox temploma és a kikötő fölé magasodó jelképes épület. Vörös téglái és arany kupolái erős kelet-európai elemet hoznak a városképbe. A látogatók a központra, a kikötőre és az építészeti stílusok keverékére nyíló kilátást értékelik. Helsinkihez, templomokhoz és ikonikus épületekhez nagyon erős SEO-téma.",
      ro: "Catedrala Uspenski este marea catedrală ortodoxă a Helsinkiului și un reper vizibil deasupra portului. Cărămizile roșii și domurile aurii aduc un puternic element est-european în peisajul orașului. Vizitatorii apreciază vederea asupra centrului, portului și amestecul de stiluri arhitecturale. Pentru Helsinki, biserici și clădiri iconice, catedrala este un subiect SEO puternic.",
      en: "Uspenski Cathedral is Helsinki's large Orthodox cathedral and a striking landmark above the harbor. Its red bricks and golden domes bring a strong Eastern European element into the cityscape. Visitors value the views over the center, the harbor, and the mix of architectural styles. For Helsinki, churches, and iconic buildings, the cathedral is a strong SEO topic."
    },
    facts: {
      de: ["Die größte orthodoxe Kirche Westeuropas.", "Liegt auf einer Anhöhe über dem Hafen.", "Die roten Backsteine sind sehr markant.", "Ein starkes Wahrzeichen Helsinkis.", "Beliebt für Panorama- und Architekturfotos."],
      hu: ["Nyugat-Európa legnagyobb ortodox temploma.", "A kikötő fölötti magaslaton áll.", "A vörös tégla nagyon jellegzetes.", "Helsinki erős városjelképe.", "Népszerű panoráma- és építészeti fotókhoz."],
      ro: ["Cea mai mare biserică ortodoxă din Europa de Vest.", "Se află pe o înălțime deasupra portului.", "Cărămizile roșii sunt foarte distinctive.", "Un reper puternic al Helsinkiului.", "Populară pentru fotografii panoramice și de arhitectură."],
      en: ["The largest Orthodox church in Western Europe.", "It sits on a hill above the harbor.", "The red brick is highly distinctive.", "A strong landmark of Helsinki.", "Popular for panorama and architecture photos."]
    },
    image: "/geo-images/finland/landmark-uspenski-cathedral.webp",
  },
  {
    id: "landmark-amos-rex",
    type: "landmark",
    parent: "FI",
    coords: [24.9319, 60.1689],
    name: { de: "Amos Rex", hu: "Amos Rex", ro: "Amos Rex", en: "Amos Rex" },
    description: {
      de: "Amos Rex ist eines der modernsten Kunst- und Ausstellungszentren Helsinkis und ein beliebter Magnet für zeitgenössische Kultur. Die unterirdischen Räume und die markanten Kuppeln auf dem Lasipalatsi-Platz machen das Gebäude sofort erkennbar. Hier treffen Kunst, Stadtentwicklung und digitale Vermittlung aufeinander. Für Helsinki, moderne Museen und Kulturreisen ist Amos Rex ein sehr starker SEO-Begriff.",
      hu: "Az Amos Rex Helsinki egyik legmodernebb művészeti és kiállítási központja, és a kortárs kultúra népszerű vonzereje. A föld alatti terek és a Lasipalatsi téren álló jellegzetes kupolák azonnal felismerhetővé teszik az épületet. Itt a művészet, a városfejlesztés és a digitális közvetítés találkozik. Helsinkihez, modern múzeumokhoz és kulturális utazásokhoz az Amos Rex nagyon erős SEO-kifejezés.",
      ro: "Amos Rex este unul dintre cele mai moderne centre de artă și expoziții din Helsinki și un magnet pentru cultura contemporană. Spațiile subterane și domurile distincte din piața Lasipalatsi fac clădirea imediat recognoscibilă. Aici se întâlnesc arta, dezvoltarea urbană și medierea digitală. Pentru Helsinki, muzee moderne și călătorii culturale, Amos Rex este un termen SEO foarte puternic.",
      en: "Amos Rex is one of Helsinki's most modern art and exhibition centers and a popular magnet for contemporary culture. The underground spaces and distinctive domes in Lasipalatsi Square make the building instantly recognizable. It brings together art, urban development, and digital mediation. For Helsinki, modern museums, and cultural travel, Amos Rex is a very strong SEO term."
    },
    facts: {
      de: ["Ein modernes Kunstzentrum in Helsinki.", "Die Ausstellungssäle liegen unterirdisch.", "Die Kuppeln sind ein markantes Stadtbilddetail.", "Wichtig für zeitgenössische Kultur.", "Beliebt bei jungen Stadtbesuchern."],
      hu: ["Modern művészeti központ Helsinkiben.", "A kiállítóterek a föld alatt vannak.", "A kupolák jellegzetes városképi elemek.", "Fontos a kortárs kultúra számára.", "Népszerű a fiatal városlátogatók körében."],
      ro: ["Un centru modern de artă în Helsinki.", "Sălile de expoziție sunt subterane.", "Domurile sunt un element urban distinctiv.", "Important pentru cultura contemporană.", "Popular printre tinerii vizitatori ai orașului."],
      en: ["A modern art center in Helsinki.", "The exhibition spaces are underground.", "The domes are a distinctive city detail.", "Important for contemporary culture.", "Popular with younger city visitors."]
    },
    image: "/geo-images/finland/landmark-amos-rex.webp",
  },
  {
    id: "port-helsinki",
    type: "port",
    parent: "FI",
    coords: [24.955, 60.153],
    name: { de: "Hafen Helsinki", hu: "Helsinki kikötője", ro: "Portul Helsinki", en: "Port of Helsinki" },
    description: {
      de: "Der Hafen Helsinki ist Finnlands wichtigster Passagier- und Güterhafen und ein zentraler Knoten im Ostseeraum. Von hier aus fahren Fähren nach Tallinn und anderen Destinationen, was den Hafen zu einem starken Reise- und Logistikthema macht. Die Lage nahe dem Stadtzentrum verbindet Hafenbetrieb mit urbaner Sichtbarkeit. Für Helsinki, Fähren und Ostseelogistik ist dieser Hafen ein Top-SEO-Begriff.",
      hu: "A Helsinki kikötő Finnország legfontosabb személy- és áruszállító kikötője, valamint a Balti-térség egyik központi csomópontja. Innen indulnak kompok Tallinn és más célpontok felé, ezért a kikötő erős utazási és logisztikai téma. A belvároshoz közeli fekvés a kikötői működést városi láthatósággal kapcsolja össze. Helsinkihez, kompokhoz és balti logisztikához ez kiváló SEO-kifejezés.",
      ro: "Portul Helsinki este cel mai important port de pasageri și marfă al Finlandei și un nod central în regiunea Mării Baltice. De aici pleacă feriboturi spre Tallinn și alte destinații, ceea ce îl face un subiect puternic de călătorie și logistică. Amplasarea aproape de centrul orașului combină activitatea portuară cu vizibilitatea urbană. Pentru Helsinki, feriboturi și logistică baltică, acesta este un termen SEO de top.",
      en: "Port of Helsinki is Finland's most important passenger and cargo port and a central hub in the Baltic Sea region. Ferries leave from here for Tallinn and other destinations, making it a strong travel and logistics topic. Its location close to the city center connects port activity with urban visibility. For Helsinki, ferries, and Baltic logistics, this is a top SEO term."
    },
    facts: {
      de: ["Der Hafen ist der größte Passagierhafen Finnlands.", "Fährverbindungen nach Tallinn sind ein Schlüsselteil des Betriebs.", "Er liegt nahe am Zentrum von Helsinki.", "Auch Güterverkehr spielt eine wichtige Rolle.", "Ein zentrales Tor zum Ostseeraum."],
      hu: ["A kikötő Finnország legnagyobb személyforgalmi kikötője.", "A tallinni kompjáratok a működés fontos részét adják.", "Közel van Helsinki központjához.", "Az áruszállítás is fontos szerepet kap.", "A Balti-térség egyik központi kapuja."],
      ro: ["Portul este cel mai mare port de pasageri din Finlanda.", "Feriboturile spre Tallinn sunt o parte-cheie a activității.", "Se află aproape de centrul Helsinkiului.", "Transportul de marfă joacă de asemenea un rol important.", "O poartă centrală către regiunea Mării Baltice."],
      en: ["The port is Finland's largest passenger port.", "Ferry links to Tallinn are a key part of operations.", "It is located close to central Helsinki.", "Cargo traffic also plays an important role.", "A central gateway to the Baltic Sea region."]
    },
    image: "/geo-images/finland/port-helsinki.webp",
  },
  {
    id: "port-turku",
    type: "port",
    parent: "FI",
    coords: [22.225, 60.437],
    name: { de: "Hafen Turku", hu: "Turku kikötője", ro: "Portul Turku", en: "Port of Turku" },
    description: {
      de: "Der Hafen Turku ist das maritime Tor zur Stadt und ein wichtiger Ausgangspunkt für Verbindungen nach Schweden und in den Schärengarten. Die Hafenfunktion unterstützt Tourismus, Fracht und die wirtschaftliche Rolle Turkus als Küstenzentrum. Seine Nähe zur Altstadt macht ihn besonders relevant für städtische und maritime Routen. Für Turku, Fähren und finnische Küstenlogistik ist der Hafen ein starker SEO-Schlüssel.",
      hu: "A Turku kikötő a város tengeri kapuja és fontos kiindulópont Svédország, valamint a szigetvilág felé. A kikötő szerepe támogatja az idegenforgalmat, az áruszállítást és Turku gazdasági jelentőségét mint tengerparti központ. Az óvároshoz való közelsége miatt különösen releváns városi és tengeri útvonalakhoz. Turku, kompok és finn parti logisztika témájában erős SEO-kulcs.",
      ro: "Portul Turku este poarta maritimă a orașului și un punct important pentru legături către Suedia și către arhipelag. Funcția portuară susține turismul, transportul de marfă și rolul economic al Turku ca centru de coastă. Apropierea de centrul vechi îl face relevant pentru rutele urbane și maritime. Pentru Turku, feriboturi și logistică de coastă finlandeză, portul este un element SEO puternic.",
      en: "Port of Turku is the city's maritime gateway and an important departure point for Sweden and the archipelago. Its port function supports tourism, freight, and Turku's economic role as a coastal center. Its closeness to the old town makes it especially relevant for urban and maritime routes. For Turku, ferries, and Finnish coastal logistics, the port is a strong SEO key."
    },
    facts: {
      de: ["Wichtiger Hafen an Finnlands Südwestküste.", "Fähren nach Schweden sind ein Kernangebot.", "Der Hafen unterstützt Tourismus und Fracht.", "Turku profitiert stark von seiner Küstenlage.", "Der Schärengarten ist Teil der maritimen Identität."],
      hu: ["Finnország délnyugati partjának fontos kikötője.", "A svédországi kompjáratok kulcsfontosságúak.", "A kikötő az idegenforgalmat és az áruszállítást is támogatja.", "Turku sokat profitál tengerparti fekvéséből.", "A szigetvilág a tengeri identitás része."],
      ro: ["Port important pe coasta de sud-vest a Finlandei.", "Feriboturile spre Suedia sunt un serviciu central.", "Portul sprijină turismul și transportul de marfă.", "Turku beneficiază puternic de poziția de coastă.", "Arhipelagul face parte din identitatea maritimă."],
      en: ["An important port on Finland's southwest coast.", "Ferries to Sweden are a core service.", "The port supports tourism and freight.", "Turku benefits greatly from its coastal setting.", "The archipelago is part of its maritime identity."]
    },
    image: "/geo-images/finland/port-turku.webp",
  },
  {
    id: "port-kotka",
    type: "port",
    parent: "FI",
    coords: [26.949, 60.46],
    name: { de: "Hafen Kotka", hu: "Kotka kikötője", ro: "Portul Kotka", en: "Port of Kotka" },
    description: {
      de: "Der Hafen Kotka ist einer der bedeutendsten Container- und Frachtstandorte Finnlands. Die Stadt verbindet tiefe Hafenbecken, Industrieflächen und einen starken maritimen Handel an der Südküste. Kotka ist dadurch ein wichtiger Name für Logistik, Export und Ostseeverbindungen. Für Hafenwirtschaft und finnischen Außenhandel ist der Hafen besonders stark.",
      hu: "A Kotka kikötő Finnország egyik legfontosabb konténer- és áruszállítási helyszíne. A város mély vízű kikötőmedencéket, ipari területeket és erős tengeri kereskedelmet kapcsol össze a déli parton. Kotka ezért fontos név a logisztika, az export és a balti kapcsolatok témájában. A kikötőgazdaság és a finn külkereskedelem szempontjából különösen erős.",
      ro: "Portul Kotka este unul dintre cele mai importante locuri de containere și marfă din Finlanda. Orașul combină bazine portuare adânci, zone industriale și un comerț maritim puternic pe coasta de sud. Kotka este astfel un nume important pentru logistică, export și legături baltice. Pentru economia portuară și comerțul exterior finlandez, portul este deosebit de puternic.",
      en: "Port of Kotka is one of Finland's most important container and freight locations. The city combines deep harbor basins, industrial zones, and strong maritime trade on the southern coast. Kotka is therefore an important name for logistics, exports, and Baltic connections. For port economics and Finnish foreign trade, the port is especially strong."
    },
    facts: {
      de: ["Ein Schlüsselhafen für Container und Fracht.", "Liegt an Finnlands Südküste.", "Stark mit Export und Logistik verbunden.", "Kotka ist eine echte Hafenstadt.", "Wichtig für Ostseeverbindungen."],
      hu: ["Kulcsfontosságú kikötő a konténer- és áruszállításban.", "Finnország déli partján található.", "Erősen kötődik az exporthoz és a logisztikához.", "Kotka valódi kikötőváros.", "Fontos a balti kapcsolatok szempontjából."],
      ro: ["Un port-cheie pentru containere și marfă.", "Se află pe coasta sudică a Finlandei.", "Puternic legat de export și logistică.", "Kotka este un adevărat oraș-port.", "Important pentru conexiunile baltice."],
      en: ["A key port for containers and freight.", "Located on Finland's southern coast.", "Strongly linked to exports and logistics.", "Kotka is a true port city.", "Important for Baltic connections."]
    },
    image: "/geo-images/finland/port-kotka.webp",
  },
  {
    id: "port-hanko",
    type: "port",
    parent: "FI",
    coords: [22.966, 59.829],
    name: { de: "Hafen Hanko", hu: "Hanko kikötője", ro: "Portul Hanko", en: "Port of Hanko" },
    description: {
      de: "Der Hafen Hanko liegt am südlichsten Festlandpunkt Finnlands und ist ein markanter Standort für Seeverkehr. Die Lage macht den Hafen ideal für Routen über die Ostsee und für logistische Verbindungen nach Mitteleuropa und Schweden. Hanko ist zugleich ein bekannter Sommerort, was dem Hafen eine doppelte Sichtbarkeit gibt. Für Hafen, Küste und finnische Südspitze ist Hanko ein attraktiver SEO-Begriff.",
      hu: "A Hanko kikötő Finnország legdélibb szárazföldi pontján található, és látványos tengeri közlekedési helyszín. Fekvése ideális balti útvonalakhoz, valamint közép-európai és svéd logisztikai kapcsolatokhoz. Hanko egyben ismert nyári üdülőhely, ami a kikötőnek kettős láthatóságot ad. Kikötő, partvidék és a finn déli csúcs témájában vonzó SEO-kifejezés.",
      ro: "Portul Hanko se află la cel mai sudic punct continental al Finlandei și este un loc maritim foarte distinct. Poziția îl face ideal pentru rute prin Marea Baltică și pentru conexiuni logistice către Europa Centrală și Suedia. Hanko este și o stațiune de vară cunoscută, ceea ce oferă portului o vizibilitate dublă. Pentru port, coastă și extremitatea sudică a Finlandei, Hanko este un termen SEO atractiv.",
      en: "Port of Hanko sits at the southernmost mainland point of Finland and is a striking maritime location. Its position makes it ideal for Baltic routes and logistics connections to Central Europe and Sweden. Hanko is also a well-known summer resort, giving the port dual visibility. For ports, the coast, and Finland's southern tip, Hanko is an attractive SEO term."
    },
    facts: {
      de: ["Südlichster Hafen auf dem finnischen Festland.", "Wichtige Lage für Ostseerouten.", "Hanko ist auch ein beliebter Ferienort.", "Der Hafen hat strategische maritime Bedeutung.", "Verbindet Finnland mit weiter südlichen Routen."],
      hu: ["A finn szárazföld legdélibb kikötője.", "Fontos hely a balti útvonalak számára.", "Hanko népszerű üdülőhely is.", "A kikötő stratégiai tengeri jelentőséggel bír.", "Finnországot délibb útvonalakhoz kapcsolja."],
      ro: ["Cel mai sudic port de pe continentul finlandez.", "Poziție importantă pentru rutele baltice.", "Hanko este și o stațiune populară.", "Portul are importanță maritimă strategică.", "Leagă Finlanda de rute mai sudice."],
      en: ["The southernmost port on the Finnish mainland.", "An important location for Baltic routes.", "Hanko is also a popular resort town.", "The port has strategic maritime importance.", "It connects Finland to more southern routes."]
    },
    image: "/geo-images/finland/port-hanko.webp",
  },
  {
    id: "industry-neste-porvoo-refinery",
    type: "industry",
    parent: "FI",
    coords: [25.675, 60.389],
    name: { de: "Neste-Raffinerie Porvoo", hu: "Neste porvoói finomító", ro: "Rafinăria Neste Porvoo", en: "Neste Porvoo Refinery" },
    description: {
      de: "Die Neste-Raffinerie in Porvoo ist eine der wichtigsten Energie- und Industrieanlagen Finnlands. Der Standort steht für Kraftstoffproduktion, technische Kompetenz und die Rolle der finnischen Industrie in der Nordregion. Durch ihre Größe und wirtschaftliche Bedeutung ist die Raffinerie ein zentraler Name für Energie, Raffinerie und industrielle Infrastruktur. Für Industrie, Porvoo und finnische Energieversorgung ist sie ein sehr starker SEO-Begriff.",
      hu: "A porvoói Neste-finomító Finnország egyik legfontosabb energiaipari és ipari létesítménye. A helyszín az üzemanyag-termelést, a műszaki szakértelmet és a finn ipar északi szerepét képviseli. Mérete és gazdasági jelentősége miatt a finomító központi név az energia, a finomítás és az ipari infrastruktúra témájában. Ipar, Porvoo és finn energiaellátás szempontjából nagyon erős SEO-elem.",
      ro: "Rafinăria Neste din Porvoo este una dintre cele mai importante instalații energetice și industriale din Finlanda. Situl reprezintă producția de combustibili, competența tehnică și rolul industriei finlandeze în nordul Europei. Prin dimensiunea și importanța sa economică, rafinăria este un nume central pentru energie, rafinare și infrastructură industrială. Pentru industrie, Porvoo și alimentarea cu energie a Finlandei, este un termen SEO foarte puternic.",
      en: "The Neste refinery in Porvoo is one of Finland's most important energy and industrial facilities. The site represents fuel production, technical expertise, and the role of Finnish industry in the Nordic region. Because of its scale and economic importance, the refinery is a central name for energy, refining, and industrial infrastructure. For industry, Porvoo, and Finnish energy supply, it is a very strong SEO term."
    },
    facts: {
      de: ["Ein zentrales Energieobjekt Finnlands.", "Liegt in Porvoo an der Südküste.", "Produziert Kraftstoffe und andere Raffinerieprodukte.", "Wichtig für die finnische Industriegeschichte.", "Großes Symbol für industrielle Infrastruktur."],
      hu: ["Finnország egyik központi energiaipari létesítménye.", "Porvoóban, a déli parton található.", "Üzemanyagot és más finomított termékeket állít elő.", "Fontos a finn ipartörténetben.", "Az ipari infrastruktúra nagy jelképe."],
      ro: ["Un obiectiv energetic central al Finlandei.", "Se află în Porvoo, pe coasta de sud.", "Produce combustibili și alte produse de rafinare.", "Important pentru istoria industriei finlandeze.", "Un simbol major al infrastructurii industriale."],
      en: ["A central energy facility in Finland.", "Located in Porvoo on the southern coast.", "Produces fuels and other refinery products.", "Important in Finnish industrial history.", "A major symbol of industrial infrastructure."]
    },
    image: "/geo-images/finland/industry-neste-porvoo-refinery.webp",
  },
  {
    id: "industry-aanekoski-bioproduct-mill",
    type: "industry",
    parent: "FI",
    coords: [25.816, 62.596],
    name: { de: "Bioproduktwerk Čänekoski", hu: "Čänekoski biotermékgyár", ro: "Combinatul de bioproduse Čänekoski", en: "Čänekoski Bioproduct Mill" },
    description: {
      de: "Das Bioproduktwerk in Čänekoski ist ein modernes Beispiel für die finnische Waldindustrie und Großproduktion. Der Standort zeigt, wie Holz, Energie und neue Industriekonzepte in Finnland zusammenwirken. Er ist ein Symbol für Biowerkstoffe, Kreislaufwirtschaft und den technologischen Wandel der Forstwirtschaft. Für Industrie, Nachhaltigkeit und finnische Holzwirtschaft ist das Werk ein relevanter SEO-Punkt.",
      hu: "Az Čänekoski biotermékgyár a finn erdőipar és a nagyüzemi termelés modern példája. A helyszín azt mutatja be, hogyan működik együtt Finnországban a fa, az energia és az új ipari koncepciók. A biológiai alapú anyagok, a körforgásos gazdaság és az erdőgazdaság technológiai átalakulásának szimbóluma. Ipar, fenntarthatóság és finn faipar szempontjából releváns SEO-elem.",
      ro: "Combinatul de bioproduse din Čänekoski este un exemplu modern al industriei forestiere finlandeze și al producției la scară mare. Situl arată cum funcționează împreună lemnul, energia și noile concepte industriale în Finlanda. Este un simbol al biomaterialelor, economiei circulare și transformării tehnologice a silviculturii. Pentru industrie, sustenabilitate și industria lemnului din Finlanda, este un punct SEO relevant.",
      en: "The Čänekoski bioproduct mill is a modern example of Finnish forest industry and large-scale production. The site shows how wood, energy, and new industrial concepts work together in Finland. It is a symbol of biomaterials, circular economy, and the technological transformation of forestry. For industry, sustainability, and Finnish wood-processing, it is a relevant SEO point."
    },
    facts: {
      de: ["Modernes Werk in Mittelfinnland.", "Stark mit Forstwirtschaft verbunden.", "Nutzen Holz und Nebenströme als Rohstoffe.", "Symbol für Kreislaufwirtschaft.", "Wichtiger Standort für finnische Industrieinnovation."],
      hu: ["Modern üzem Közép-Finnországban.", "Erősen kötődik az erdőgazdasághoz.", "Fát és mellékáramokat használ alapanyagként.", "A körforgásos gazdaság jelképe.", "Fontos helyszín a finn ipari innovációban."],
      ro: ["Fabrică modernă în centrul Finlandei.", "Strâns legată de silvicultură.", "Folosește lemnul și fluxurile secundare ca materii prime.", "Simbol al economiei circulare.", "Un loc important pentru inovația industrială finlandeză."],
      en: ["A modern plant in central Finland.", "Closely linked to forestry.", "Uses wood and side streams as raw materials.", "A symbol of circular economy.", "An important site for Finnish industrial innovation."]
    },
    image: "/geo-images/finland/industry-aanekoski-bioproduct-mill.webp",
  },
  {
    id: "nat-halti",
    type: "mountain",
    parent: "FI",
    coords: [21.37, 69.04],
    name: { de: "Halti", hu: "Halti", ro: "Halti", en: "Halti" },
    description: {
      de: "Halti ist der höchste Punkt Finnlands und ein legendäres Ziel in der arktischen Grenzlandschaft. Der Gipfel liegt nahe der norwegischen Grenze und steht für weite Hochebenen, Wind und nordische Wildnis. Wanderer und Bergliebhaber verbinden den Namen mit Lappland, Aussicht und Fernwanderungen. Für Finnlands höchste Berge ist Halti ein sehr starker SEO-Begriff.",
      hu: "A Halti Finnország legmagasabb pontja és az arktikus határtáj legendás célpontja. A csúcs közel van a norvég határhoz, és a magas fennsíkok, a szél és az északi vadon jelképévé vált. A túrázók és hegymászók Lappfölddel, kilátással és hosszú túraútvonalakkal társítják a nevét. Finnország legmagasabb hegyei között a Halti nagyon erős SEO-kifejezés.",
      ro: "Halti este cel mai înalt punct din Finlanda și o destinație legendară în peisajul de frontieră arctică. Vârful se află aproape de granița cu Norvegia și simbolizează platouri înalte, vânt și sălbăticie nordică. Drumeții și iubitorii de munte asociază numele cu Laponia, panorame și trasee lungi. Pentru cei mai înalți munți ai Finlandei, Halti este un termen SEO foarte puternic.",
      en: "Halti is the highest point in Finland and a legendary destination in the Arctic border landscape. The summit lies near the Norwegian border and stands for high plateaus, wind, and Nordic wilderness. Hikers and mountain lovers associate the name with Lapland, views, and long-distance trekking. For Finland's highest peaks, Halti is a very strong SEO term."
    },
    facts: {
      de: ["Der höchste Punkt Finnlands.", "Liegt nahe der norwegischen Grenze.", "Teil der Fjälllandschaft Lapplands.", "Beliebt bei Wanderern und Bergfreunden.", "Ein Symbol für arktische Natur."],
      hu: ["Finnország legmagasabb pontja.", "Közel van a norvég határhoz.", "Lappföld fjell tájképének része.", "Népszerű túrázók és hegykedvelők körében.", "Az arktikus természet jelképe."],
      ro: ["Cel mai înalt punct al Finlandei.", "Se află aproape de granița cu Norvegia.", "Parte din peisajul de fjell din Laponia.", "Popular printre drumeți și iubitori de munte.", "Un simbol al naturii arctice."],
      en: ["The highest point in Finland.", "Located near the Norwegian border.", "Part of Lapland's fell landscape.", "Popular with hikers and mountain lovers.", "A symbol of Arctic nature."]
    },
    image: "/geo-images/finland/nat-halti.webp",
  },
  {
    id: "nat-saana",
    type: "mountain",
    parent: "FI",
    coords: [20.97, 69.04],
    name: { de: "Saana", hu: "Saana", ro: "Saana", en: "Saana" },
    description: {
      de: "Saana ist der ikonische Berg bei Kilpisjärvi und eines der bekanntesten Fotomotive Nordfinnlands. Der Berg erhebt sich dramatisch über die Landschaft und prägt das Bild der Grenzregion zu Norwegen und Schweden. Saana ist ein beliebtes Ziel für Wanderungen, Winterlandschaften und Polarlichtreisen. Für Lappland, Bergpanorama und Finnland-Reisen ist Saana ein äußerst starkes Suchwort.",
      hu: "A Saana a kilpisjärvi ikonikus hegye és Észak-Finnország egyik legismertebb fotótémája. A hegy drámaian emelkedik ki a tájból, és meghatározza a norvég és svéd határvidék látképét. A Saana népszerű túracélpont, téli táj és sarki fényes utazások helyszíne. Lappföld, hegyipanoráma és finn utazás témában rendkívül erős keresőkifejezés.",
      ro: "Saana este muntele iconic de lângă Kilpisjärvi și una dintre cele mai cunoscute imagini ale nordului Finlandei. Muntele se ridică dramatic peste peisaj și definește zona de frontieră cu Norvegia și Suedia. Saana este o destinație populară pentru drumeții, peisaje de iarnă și călătorii pentru aurora boreală. Pentru Laponia, panorame montane și călătorii în Finlanda, Saana este un termen de căutare extrem de puternic.",
      en: "Saana is the iconic fell near Kilpisjärvi and one of the best-known photo subjects in northern Finland. The mountain rises dramatically above the landscape and defines the border region with Norway and Sweden. Saana is a popular destination for hikes, winter scenery, and Northern Lights travel. For Lapland, mountain panoramas, and Finnish travel, Saana is an extremely strong search term."
    },
    facts: {
      de: ["Bekannter Berg bei Kilpisjärvi.", "Ein Symbol des nordwestlichen Lapplands.", "Beliebt für Wanderungen und Fotografie.", "Prägt die Grenzlandschaft zu Norwegen.", "Stark mit Winter und Polarlichtern verbunden."],
      hu: ["Ismert hegy Kilpisjärvi mellett.", "Az északnyugati lappföld egyik jelképe.", "Népszerű túrázásra és fotózásra.", "Meghatározza a norvég határvidék látképét.", "Erősen kötődik a télhez és a sarki fényhez."],
      ro: ["Munte cunoscut lângă Kilpisjärvi.", "Un simbol al nord-vestului Laponiei.", "Popular pentru drumeții și fotografie.", "Definește peisajul de frontieră cu Norvegia.", "Strâns legat de iarnă și aurora boreală."],
      en: ["A famous mountain near Kilpisjärvi.", "A symbol of northwestern Lapland.", "Popular for hiking and photography.", "Defines the border landscape with Norway.", "Strongly linked to winter and the Northern Lights."]
    },
    image: "/geo-images/finland/nat-saana.webp",
  },
  {
    id: "nat-saimaa",
    type: "lake",
    parent: "FI",
    coords: [28.2, 61.5],
    name: { de: "Saimaa", hu: "Saimaa", ro: "Saimaa", en: "Saimaa" },
    description: {
      de: "Saimaa ist der größte See Finnlands und das Herz der finnischen Seenplatte. Das Gewässer ist berühmt für Inseln, Kanäle, Sommerhäuser und ruhige Bootsrouten. Gleichzeitig ist Saimaa ein wichtiges Bild für finnische Natur, Erholung und nachhaltigen Tourismus. Für Seen, Ferien in Finnland und Wasserlandschaften ist Saimaa ein Spitzen-SEO-Thema.",
      hu: "A Saimaa Finnország legnagyobb tava és a finn tóvidék szíve. A vízrendszer szigeteiről, csatornáiról, nyaralóiról és csendes hajóútjairól híres. Egyben a finn természet, pihenés és fenntartható turizmus egyik legfontosabb képe. Tavak, finn üdülés és vízi tájak témájában a Saimaa csúcs SEO-kifejezés.",
      ro: "Saimaa este cel mai mare lac din Finlanda și inima ținutului lacurilor finlandeze. Apele sale sunt faimoase pentru insule, canale, cabane de vară și rute liniștite de navigație. În același timp, Saimaa este o imagine importantă a naturii finlandeze, a relaxării și a turismului sustenabil. Pentru lacuri, vacanțe în Finlanda și peisaje acvatice, Saimaa este un subiect SEO de top.",
      en: "Saimaa is Finland's largest lake and the heart of the Finnish lake district. The water system is famous for islands, canals, summer cottages, and quiet boat routes. At the same time, Saimaa is an important image of Finnish nature, recreation, and sustainable tourism. For lakes, holidays in Finland, and water landscapes, Saimaa is a top SEO topic."
    },
    facts: {
      de: ["Der größte See Finnlands.", "Teil der berühmten Seenplatte.", "Bekannt für Inseln und Kanäle.", "Wichtiger Ort für Sommerhäuser.", "Starkes Symbol finnischer Wasserlandschaften."],
      hu: ["Finnország legnagyobb tava.", "A híres tóvidék része.", "Szigeteiről és csatornáiról ismert.", "Fontos a nyaralókultúrában.", "A finn vízi tájak erős jelképe."],
      ro: ["Cel mai mare lac din Finlanda.", "Parte din celebra regiune a lacurilor.", "Cunoscut pentru insule și canale.", "Important pentru cultura cabanelor de vară.", "Un simbol puternic al peisajelor acvatice finlandeze."],
      en: ["Finland's largest lake.", "Part of the famous lake district.", "Known for islands and canals.", "Important for summer-cottage culture.", "A strong symbol of Finnish water landscapes."]
    },
    image: "/geo-images/finland/nat-saimaa.webp",
  },
  {
    id: "nat-inari",
    type: "lake",
    parent: "FI",
    coords: [27.286, 68.905],
    name: { de: "Inari-See", hu: "Inari-tó", ro: "Lacul Inari", en: "Lake Inari" },
    description: {
      de: "Der Inari-See liegt tief im Norden und ist ein Schlüsselort der samischen Landschaft und Kultur. Seine Inseln und offenen Wasserflächen machen ihn zu einem der eindrucksvollsten Seen Lapplands. Im Sommer verbindet der See Mitternachtssonne, Naturstille und arktische Weite. Für Lappland, Sami-Reisen und Nordfinnland ist der Inari-See ein starkes SEO-Thema.",
      hu: "Az Inari-tó messze északon fekszik, és a számi táj és kultúra egyik kulcshelyszíne. Szigetei és nyílt vízfelületei Lappföld egyik leglenyűgözőbb tavává teszik. Nyáron a tó az éjféli napot, a természet csendjét és az arktikus tágasságot kapcsolja össze. Lappföld, számi utazás és Észak-Finnország témájában az Inari-tó erős SEO-elem.",
      ro: "Lacul Inari se află foarte în nord și este un loc-cheie al peisajului și culturii sami. Insulele și suprafețele sale vaste de apă îl fac unul dintre cele mai impresionante lacuri din Laponia. Vara, lacul combină soarele de la miezul nopții, liniștea naturii și întinderea arctică. Pentru Laponia, călătorii sami și nordul Finlandei, lacul Inari este un subiect SEO puternic.",
      en: "Lake Inari lies far north and is a key place in the Sámi landscape and culture. Its islands and open waters make it one of the most impressive lakes in Lapland. In summer the lake combines the midnight sun, natural silence, and Arctic scale. For Lapland, Sámi travel, and northern Finland, Lake Inari is a strong SEO topic."
    },
    facts: {
      de: ["Liegt weit nördlich des Polarkreises.", "Wichtig für samische Kultur und Landschaft.", "Hat viele Inseln.", "Im Sommer sehr hell und weitläufig.", "Ein prägendes Bild für Nordlappland."],
      hu: ["Messze az északi sarkkörtől északra fekszik.", "Fontos a számi kultúrában és tájban.", "Sok szigete van.", "Nyáron nagyon világos és tágas.", "Észak-Lappföld meghatározó képe."],
      ro: ["Se află mult la nord de Cercul Polar.", "Important pentru cultura și peisajul sami.", "Are multe insule.", "Vara este foarte luminos și vast.", "O imagine definitorie pentru nordul Laponiei."],
      en: ["Located far north of the Arctic Circle.", "Important for Sámi culture and landscape.", "Has many islands.", "Very bright and expansive in summer.", "A defining image for northern Lapland."]
    },
    image: "/geo-images/finland/nat-inari.webp",
  },
  {
    id: "nat-kemijoki",
    type: "river",
    parent: "FI",
    coords: [25.72, 66.5],
    name: { de: "Kemijoki", hu: "Kemijoki", ro: "Kemijoki", en: "Kemijoki River" },
    description: {
      de: "Der Kemijoki ist der längste Fluss Finnlands und prägt große Teile Lapplands. Sein Lauf ist eng mit Wasserkraft, Städten und der arktischen Landschaft verbunden. Gleichzeitig ist der Fluss ein wichtiges Element für Naturtourismus und nordfinnische Identität. Für Flüsse, Lappland und finnische Wasserläufe ist Kemijoki ein starkes SEO-Thema.",
      hu: "A Kemijoki Finnország leghosszabb folyója, és Lappföld nagy részét meghatározza. Folyása szorosan kapcsolódik a vízenergiához, a városokhoz és az arktikus tájhoz. Egyben fontos elem a természetjárás és az észak-finn identitás szempontjából. Folyók, Lappföld és finn vízfolyások témájában a Kemijoki erős SEO-elem.",
      ro: "Kemijoki este cel mai lung râu din Finlanda și definește mari părți din Laponia. Cursul său este strâns legat de energia hidroelectrică, orașe și peisajul arctic. În același timp, râul este un element important pentru turismul de natură și identitatea nordului finlandez. Pentru râuri, Laponia și cursurile de apă finlandeze, Kemijoki este un subiect SEO puternic.",
      en: "Kemijoki is Finland's longest river and shapes large parts of Lapland. Its course is closely tied to hydropower, towns, and the Arctic landscape. The river is also an important element for nature tourism and northern Finnish identity. For rivers, Lapland, and Finnish waterways, Kemijoki is a strong SEO topic."
    },
    facts: {
      de: ["Der längste Fluss Finnlands.", "Verläuft durch Lappland.", "Wichtig für Wasserkraft.", "Prägt Städte und Landschaften.", "Ein Schlüsselname für nordfinnische Geografie."],
      hu: ["Finnország leghosszabb folyója.", "Lappföldön folyik keresztül.", "Fontos a vízenergia szempontjából.", "Városokat és tájakat is meghatároz.", "Kulcsnév az északi finn földrajzban."],
      ro: ["Cel mai lung râu din Finlanda.", "Curge prin Laponia.", "Important pentru hidroenergie.", "Definește orașe și peisaje.", "Un nume-cheie în geografia nordului finlandez."],
      en: ["The longest river in Finland.", "Flows through Lapland.", "Important for hydropower.", "Shapes towns and landscapes.", "A key name in northern Finnish geography."]
    },
    image: "/geo-images/finland/nat-kemijoki.webp",
  },
  {
    id: "nat-oulujoki",
    type: "river",
    parent: "FI",
    coords: [25.45, 65.05],
    name: { de: "Oulujoki", hu: "Oulujoki", ro: "Oulujoki", en: "Oulujoki River" },
    description: {
      de: "Der Oulujoki verbindet das Landesinnere mit dem Bottnischen Meerbusen und ist eng mit der Stadt Oulu verknüpft. Der Fluss spielte historisch eine wichtige Rolle für Handel, Energie und städtische Entwicklung. Heute ist er auch ein attraktiver Flussraum für Freizeit und Landschaftserlebnis. Für Oulu, Flüsse und Nordfinnland ist Oulujoki ein starkes SEO-Thema.",
      hu: "Az Oulujoki az ország belső részeit köti össze a Botteni-öböllel, és szorosan kapcsolódik Oulu városához. A folyó történelmileg fontos szerepet játszott a kereskedelemben, az energiában és a városfejlődésben. Ma szabadidős és tájélményt nyújtó folyami tér is. Oulu, folyók és Észak-Finnország témájában az Oulujoki erős SEO-elem.",
      ro: "Oulujoki leagă interiorul țării de Golful Botnic și este strâns asociat cu orașul Oulu. Râul a avut un rol istoric important în comerț, energie și dezvoltare urbană. Astăzi este și un spațiu riveran atractiv pentru recreere și peisaj. Pentru Oulu, râuri și nordul Finlandei, Oulujoki este un subiect SEO puternic.",
      en: "Oulujoki connects the inland areas with the Gulf of Bothnia and is closely tied to the city of Oulu. The river has historically played an important role in trade, energy, and urban development. Today it is also an attractive river landscape for recreation and scenery. For Oulu, rivers, and northern Finland, Oulujoki is a strong SEO topic."
    },
    facts: {
      de: ["Verbindet das Binnenland mit der Küste.", "Wichtig für Oulus Entwicklung.", "Historisch relevant für Handel und Energie.", "Prägt die Stadtlandschaft von Oulu.", "Beliebt für Flussufer und Freizeit."],
      hu: ["Összeköti a belső területeket a partvidékkel.", "Fontos Oulu fejlődése szempontjából.", "Történelmileg jelentős a kereskedelem és energia miatt.", "Meghatározza Oulu városképét.", "Népszerű a folyópart és a szabadidő miatt."],
      ro: ["Leagă interiorul țării de coastă.", "Important pentru dezvoltarea orașului Oulu.", "Relevant istoric pentru comerț și energie.", "Definește peisajul urban al Oului.", "Popular pentru malurile râului și recreere."],
      en: ["Connects inland Finland with the coast.", "Important for Oulu's development.", "Historically relevant for trade and energy.", "Shapes Oulu's cityscape.", "Popular for riverfront leisure."]
    },
    image: "/geo-images/finland/nat-oulujoki.webp",
  },
  {
    id: "nat-kvarken-archipelago",
    type: "island",
    parent: "FI",
    coords: [21.45, 63.17],
    name: { de: "Kvarken-Archipel", hu: "Kvarken-szigetvilág", ro: "Arhipelagul Kvarken", en: "Kvarken Archipelago" },
    description: {
      de: "Der Kvarken-Archipel liegt zwischen Finnland und Schweden und ist ein spektakuläres UNESCO-Naturgebiet. Die Inseln und Schären entstehen in einer Landschaft, die sich durch die postglaziale Landhebung ständig verändert. Das Gebiet ist ein Schlüsselbild für Küstenökologie, Bootstouren und nordische Inselnatur. Für Inseln, Archipel und Finnlands Westküste ist Kvarken ein äußerst starker SEO-Begriff.",
      hu: "A Kvarken-szigetvilág Finnország és Svédország között fekszik, és látványos UNESCO-természeti terület. A szigetek és sziklazátonyok olyan tájban alakulnak, amelyet a jégkorszak utáni szárazföldemelkedés folyamatosan formál. A terület kulcsfontosságú kép a parti ökológiáról, a hajókirándulásokról és az északi szigetvilágról. Szigetek, szigetvilág és Finnország nyugati partja témájában a Kvarken rendkívül erős SEO-kifejezés.",
      ro: "Arhipelagul Kvarken se află între Finlanda și Suedia și este o zonă naturală UNESCO spectaculoasă. Insulele și stâncile apar într-un peisaj care se schimbă constant prin ridicarea uscatului postglaciar. Zona este o imagine-cheie pentru ecologia de coastă, excursiile cu barca și natura insulară nordică. Pentru insule, arhipelag și coasta vestică a Finlandei, Kvarken este un termen SEO extrem de puternic.",
      en: "The Kvarken Archipelago lies between Finland and Sweden and is a spectacular UNESCO natural area. The islands and skerries form in a landscape that keeps changing because of post-glacial land uplift. The area is a key image for coastal ecology, boat trips, and Nordic island nature. For islands, archipelagos, and Finland's west coast, Kvarken is an extremely strong SEO term."
    },
    facts: {
      de: ["UNESCO-Naturgebiet.", "Liegt an der Westküste Finnlands.", "Bekannt für Landhebung.", "Besteht aus vielen Inseln und Schären.", "Wichtig für Natur- und Bootstourismus."],
      hu: ["UNESCO természeti terület.", "Finnország nyugati partján található.", "A szárazföldemelkedésről híres.", "Sok szigetből és zátonyból áll.", "Fontos a természet- és hajókirándulások számára."],
      ro: ["Arie naturală UNESCO.", "Se află pe coasta vestică a Finlandei.", "Cunoscut pentru ridicarea uscatului.", "Format din multe insule și stânci de coastă.", "Important pentru turismul de natură și cu barca."],
      en: ["A UNESCO natural area.", "Located on Finland's west coast.", "Known for land uplift.", "Made up of many islands and skerries.", "Important for nature and boat tourism."]
    },
    image: "/geo-images/finland/nat-kvarken-archipelago.webp",
  },
  {
    id: "nat-nuuksio-forest",
    type: "forest",
    parent: "FI",
    coords: [24.55, 60.3],
    name: { de: "Nuuksio-Wald", hu: "Nuuksio erdő", ro: "Pădurea Nuuksio", en: "Nuuksio Forest" },
    description: {
      de: "Der Nuuksio-Wald liegt nahe Helsinki und ist einer der bekanntesten Naherholungsräume Südfinnlands. Tiefe Wälder, Seen und Felsen machen das Gebiet ideal für Wandern, Naturbeobachtung und kurze Fluchten aus der Hauptstadt. Nuuksio steht für das typische finnische Verhältnis von Stadt und Wildnis auf engem Raum. Für Wald, Naturerlebnis und Helsinki-Ausflüge ist Nuuksio ein starkes SEO-Thema.",
      hu: "A Nuuksio erdő Helsinki közelében található, és Dél-Finnország egyik legismertebb rekreációs területe. Mély erdők, tavak és sziklák teszik ideálissá túrázásra, természetmegfigyelésre és gyors fővárosi menekülésekre. Nuuksio jól mutatja a finn város és vadon közeli kapcsolatát. Erdő, természetélmény és helsinki kirándulás témájában erős SEO-elem.",
      ro: "Pădurea Nuuksio se află lângă Helsinki și este una dintre cele mai cunoscute zone de recreere din sudul Finlandei. Pădurile dense, lacurile și stâncile o fac ideală pentru drumeții, observarea naturii și evadări scurte din capitală. Nuuksio exprimă foarte bine relația finlandeză dintre oraș și sălbăticie la distanță mică. Pentru pădure, experiență în natură și excursii din Helsinki, este un subiect SEO puternic.",
      en: "Nuuksio Forest lies near Helsinki and is one of the best-known recreation areas in southern Finland. Deep forests, lakes, and rock formations make it ideal for hiking, wildlife watching, and quick escapes from the capital. Nuuksio captures Finland's classic balance between city life and wilderness at short distance. For forest, nature experiences, and Helsinki day trips, it is a strong SEO topic."
    },
    facts: {
      de: ["Liegt nahe Helsinki.", "Beliebtes Ziel für Tagesausflüge.", "Hat Wälder, Seen und Felsen.", "Stark für Wandern und Naturbeobachtung.", "Verkörpert finnische Naherholung."],
      hu: ["Helsinki közelében található.", "Népszerű egynapos kirándulóhely.", "Erdők, tavak és sziklák jellemzik.", "Erős a túrázásban és természetmegfigyelésben.", "A finn közeli természetélményt testesíti meg."],
      ro: ["Se află lângă Helsinki.", "Destinație populară pentru excursii de o zi.", "Are păduri, lacuri și stânci.", "Puternic pentru drumeții și observarea naturii.", "Întruchipează recreerea finlandeză aproape de oraș."],
      en: ["Located near Helsinki.", "A popular day-trip destination.", "Features forests, lakes, and rocks.", "Strong for hiking and wildlife watching.", "Embodies Finnish close-to-city recreation."]
    },
    image: "/geo-images/finland/nat-nuuksio-forest.webp",
  }
];

export const finlandNatureExtended: POI[] = [
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
  },
  {
    id: "city-mariehamn",
    type: "city",
    parent: "reg-aland-fi",
    coords: [19.9475, 60.0973],
    name: { de: "Mariehamn", hu: "Mariehamn", ro: "Mariehamn", en: "Mariehamn" },
    description: {
      de: "Mariehamn ist eine Stadt in Aland. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Aland ist Mariehamn ein praktischer und wiedererkennbarer Ort.",
      hu: "Mariehamn egy varos Aland teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Aland kereseseiben Mariehamn egyertelmu es felismerheto hely.",
      ro: "Mariehamn este un oras din Aland. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Aland, Mariehamn este o locatie practica si usor de recunoscut.",
      en: "Mariehamn is a town in Aland. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Aland searches, Mariehamn is a practical and recognizable location."
    },
    facts: {
      de: ["In Aland.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Aland teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Aland.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Aland.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-mariehamn.webp",
  },
  {
    id: "city-lohja",
    type: "city",
    parent: "reg-uusimaa-fi",
    coords: [24.0650, 60.2486],
    name: { de: "Lohja", hu: "Lohja", ro: "Lohja", en: "Lohja" },
    description: {
      de: "Lohja ist eine Stadt in Uusimaa. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Uusimaa ist Lohja ein praktischer und wiedererkennbarer Ort.",
      hu: "Lohja egy varos Uusimaa teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Uusimaa kereseseiben Lohja egyertelmu es felismerheto hely.",
      ro: "Lohja este un oras din Uusimaa. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Uusimaa, Lohja este o locatie practica si usor de recunoscut.",
      en: "Lohja is a town in Uusimaa. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Uusimaa searches, Lohja is a practical and recognizable location."
    },
    facts: {
      de: ["In Uusimaa.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Uusimaa teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Uusimaa.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Uusimaa.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-lohja.webp",
  },
  {
    id: "city-naantali",
    type: "city",
    parent: "reg-southwest-finland-fi",
    coords: [22.0260, 60.4676],
    name: { de: "Naantali", hu: "Naantali", ro: "Naantali", en: "Naantali" },
    description: {
      de: "Naantali ist eine Stadt in Southwest Finland. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Southwest Finland ist Naantali ein praktischer und wiedererkennbarer Ort.",
      hu: "Naantali egy varos Southwest Finland teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Southwest Finland kereseseiben Naantali egyertelmu es felismerheto hely.",
      ro: "Naantali este un oras din Southwest Finland. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Southwest Finland, Naantali este o locatie practica si usor de recunoscut.",
      en: "Naantali is a town in Southwest Finland. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Southwest Finland searches, Naantali is a practical and recognizable location."
    },
    facts: {
      de: ["In Southwest Finland.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Southwest Finland teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Southwest Finland.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Southwest Finland.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-naantali.webp",
  },
  {
    id: "city-rauma",
    type: "city",
    parent: "reg-satakunta-fi",
    coords: [21.5130, 61.1270],
    name: { de: "Rauma", hu: "Rauma", ro: "Rauma", en: "Rauma" },
    description: {
      de: "Rauma ist eine Stadt in Satakunta. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Satakunta ist Rauma ein praktischer und wiedererkennbarer Ort.",
      hu: "Rauma egy varos Satakunta teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Satakunta kereseseiben Rauma egyertelmu es felismerheto hely.",
      ro: "Rauma este un oras din Satakunta. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Satakunta, Rauma este o locatie practica si usor de recunoscut.",
      en: "Rauma is a town in Satakunta. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Satakunta searches, Rauma is a practical and recognizable location."
    },
    facts: {
      de: ["In Satakunta.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Satakunta teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Satakunta.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Satakunta.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-rauma.webp",
  },
  {
    id: "city-pori",
    type: "city",
    parent: "reg-satakunta-fi",
    coords: [21.7970, 61.4850],
    name: { de: "Pori", hu: "Pori", ro: "Pori", en: "Pori" },
    description: {
      de: "Pori ist eine Stadt in Satakunta. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Satakunta ist Pori ein praktischer und wiedererkennbarer Ort.",
      hu: "Pori egy varos Satakunta teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Satakunta kereseseiben Pori egyertelmu es felismerheto hely.",
      ro: "Pori este un oras din Satakunta. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Satakunta, Pori este o locatie practica si usor de recunoscut.",
      en: "Pori is a town in Satakunta. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Satakunta searches, Pori is a practical and recognizable location."
    },
    facts: {
      de: ["In Satakunta.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Satakunta teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Satakunta.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Satakunta.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-pori.webp",
  },
  {
    id: "city-forssa",
    type: "city",
    parent: "reg-kanta-hame-fi",
    coords: [23.6330, 60.8140],
    name: { de: "Forssa", hu: "Forssa", ro: "Forssa", en: "Forssa" },
    description: {
      de: "Forssa ist eine Stadt in Kanta-Hame. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Kanta-Hame ist Forssa ein praktischer und wiedererkennbarer Ort.",
      hu: "Forssa egy varos Kanta-Hame teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Kanta-Hame kereseseiben Forssa egyertelmu es felismerheto hely.",
      ro: "Forssa este un oras din Kanta-Hame. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Kanta-Hame, Forssa este o locatie practica si usor de recunoscut.",
      en: "Forssa is a town in Kanta-Hame. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Kanta-Hame searches, Forssa is a practical and recognizable location."
    },
    facts: {
      de: ["In Kanta-Hame.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Kanta-Hame teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Kanta-Hame.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Kanta-Hame.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-forssa.webp",
  },
  {
    id: "city-riihimaki",
    type: "city",
    parent: "reg-kanta-hame-fi",
    coords: [24.7680, 60.7390],
    name: { de: "Riihimaki", hu: "Riihimaki", ro: "Riihimaki", en: "Riihimaki" },
    description: {
      de: "Riihimaki ist eine Stadt in Kanta-Hame. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Kanta-Hame ist Riihimaki ein praktischer und wiedererkennbarer Ort.",
      hu: "Riihimaki egy varos Kanta-Hame teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Kanta-Hame kereseseiben Riihimaki egyertelmu es felismerheto hely.",
      ro: "Riihimaki este un oras din Kanta-Hame. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Kanta-Hame, Riihimaki este o locatie practica si usor de recunoscut.",
      en: "Riihimaki is a town in Kanta-Hame. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Kanta-Hame searches, Riihimaki is a practical and recognizable location."
    },
    facts: {
      de: ["In Kanta-Hame.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Kanta-Hame teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Kanta-Hame.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Kanta-Hame.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-riihimaki.webp",
  },
  {
    id: "city-valkeakoski",
    type: "city",
    parent: "reg-pirkanmaa-fi",
    coords: [24.0330, 61.2640],
    name: { de: "Valkeakoski", hu: "Valkeakoski", ro: "Valkeakoski", en: "Valkeakoski" },
    description: {
      de: "Valkeakoski ist eine Stadt in Pirkanmaa. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Pirkanmaa ist Valkeakoski ein praktischer und wiedererkennbarer Ort.",
      hu: "Valkeakoski egy varos Pirkanmaa teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Pirkanmaa kereseseiben Valkeakoski egyertelmu es felismerheto hely.",
      ro: "Valkeakoski este un oras din Pirkanmaa. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Pirkanmaa, Valkeakoski este o locatie practica si usor de recunoscut.",
      en: "Valkeakoski is a town in Pirkanmaa. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Pirkanmaa searches, Valkeakoski is a practical and recognizable location."
    },
    facts: {
      de: ["In Pirkanmaa.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Pirkanmaa teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Pirkanmaa.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Pirkanmaa.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-valkeakoski.webp",
  },
  {
    id: "city-heinola",
    type: "city",
    parent: "reg-paijanne-tavastia-fi",
    coords: [26.0450, 61.2020],
    name: { de: "Heinola", hu: "Heinola", ro: "Heinola", en: "Heinola" },
    description: {
      de: "Heinola ist eine Stadt in Paijanne Tavastia. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu Paijanne Tavastia ist Heinola ein praktischer und wiedererkennbarer Ort.",
      hu: "Heinola egy varos Paijanne Tavastia teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. Paijanne Tavastia kereseseiben Heinola egyertelmu es felismerheto hely.",
      ro: "Heinola este un oras din Paijanne Tavastia. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre Paijanne Tavastia, Heinola este o locatie practica si usor de recunoscut.",
      en: "Heinola is a town in Paijanne Tavastia. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For Paijanne Tavastia searches, Heinola is a practical and recognizable location."
    },
    facts: {
      de: ["In Paijanne Tavastia.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["Paijanne Tavastia teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In Paijanne Tavastia.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In Paijanne Tavastia.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-heinola.webp",
  },
  {
    id: "city-mikkeli",
    type: "city",
    parent: "reg-south-savo-fi",
    coords: [27.2730, 61.6870],
    name: { de: "Mikkeli", hu: "Mikkeli", ro: "Mikkeli", en: "Mikkeli" },
    description: {
      de: "Mikkeli ist eine Stadt in South Savo. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu South Savo ist Mikkeli ein praktischer und wiedererkennbarer Ort.",
      hu: "Mikkeli egy varos South Savo teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. South Savo kereseseiben Mikkeli egyertelmu es felismerheto hely.",
      ro: "Mikkeli este un oras din South Savo. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre South Savo, Mikkeli este o locatie practica si usor de recunoscut.",
      en: "Mikkeli is a town in South Savo. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For South Savo searches, Mikkeli is a practical and recognizable location."
    },
    facts: {
      de: ["In South Savo.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["South Savo teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In South Savo.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In South Savo.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-mikkeli.webp",
  },
  {
    id: "city-iisalmi",
    type: "city",
    parent: "reg-north-savo-fi",
    coords: [27.1870, 63.5590],
    name: { de: "Iisalmi", hu: "Iisalmi", ro: "Iisalmi", en: "Iisalmi" },
    description: {
      de: "Iisalmi ist eine Stadt in North Savo. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu North Savo ist Iisalmi ein praktischer und wiedererkennbarer Ort.",
      hu: "Iisalmi egy varos North Savo teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. North Savo kereseseiben Iisalmi egyertelmu es felismerheto hely.",
      ro: "Iisalmi este un oras din North Savo. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre North Savo, Iisalmi este o locatie practica si usor de recunoscut.",
      en: "Iisalmi is a town in North Savo. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For North Savo searches, Iisalmi is a practical and recognizable location."
    },
    facts: {
      de: ["In North Savo.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["North Savo teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In North Savo.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In North Savo.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-iisalmi.webp",
  },
  {
    id: "city-varkaus",
    type: "city",
    parent: "reg-north-savo-fi",
    coords: [28.1880, 62.3170],
    name: { de: "Varkaus", hu: "Varkaus", ro: "Varkaus", en: "Varkaus" },
    description: {
      de: "Varkaus ist eine Stadt in North Savo. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu North Savo ist Varkaus ein praktischer und wiedererkennbarer Ort.",
      hu: "Varkaus egy varos North Savo teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. North Savo kereseseiben Varkaus egyertelmu es felismerheto hely.",
      ro: "Varkaus este un oras din North Savo. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre North Savo, Varkaus este o locatie practica si usor de recunoscut.",
      en: "Varkaus is a town in North Savo. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For North Savo searches, Varkaus is a practical and recognizable location."
    },
    facts: {
      de: ["In North Savo.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["North Savo teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In North Savo.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In North Savo.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-varkaus.webp",
  },
  {
    id: "city-imatra",
    type: "city",
    parent: "reg-south-karelia-fi",
    coords: [28.7680, 61.1710],
    name: { de: "Imatra", hu: "Imatra", ro: "Imatra", en: "Imatra" },
    description: {
      de: "Imatra ist eine Stadt in South Karelia. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu South Karelia ist Imatra ein praktischer und wiedererkennbarer Ort.",
      hu: "Imatra egy varos South Karelia teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. South Karelia kereseseiben Imatra egyertelmu es felismerheto hely.",
      ro: "Imatra este un oras din South Karelia. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre South Karelia, Imatra este o locatie practica si usor de recunoscut.",
      en: "Imatra is a town in South Karelia. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For South Karelia searches, Imatra is a practical and recognizable location."
    },
    facts: {
      de: ["In South Karelia.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["South Karelia teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In South Karelia.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In South Karelia.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-imatra.webp",
  },
  {
    id: "city-nurmes",
    type: "city",
    parent: "reg-north-karelia-fi",
    coords: [29.1410, 63.5420],
    name: { de: "Nurmes", hu: "Nurmes", ro: "Nurmes", en: "Nurmes" },
    description: {
      de: "Nurmes ist eine Stadt in North Karelia. Sie bringt einen lokalen Stadtnamen, eine klare regionale Lage und einen nutzlichen Stopp fur Roadtrips. Der Ort passt gut zu Alltagsreisen, Kurztrips und Regionalfuhrern. Fur Suchen zu North Karelia ist Nurmes ein praktischer und wiedererkennbarer Ort.",
      hu: "Nurmes egy varos North Karelia teruleten. Helyi varosnevet, tiszta regiojelolest es hasznos megallot ad az utvonalakhoz. Jol mukodik mindennapi utazasokhoz, rovid kiruccanasokhoz es tersegi utakhoz. North Karelia kereseseiben Nurmes egyertelmu es felismerheto hely.",
      ro: "Nurmes este un oras din North Karelia. Adauga un nume local de oras, un cadru regional clar si o oprire utila pentru drumuri. Locul merge bine pentru calatorii de zi cu zi, escapade scurte si ghiduri de zona. Pentru cautari despre North Karelia, Nurmes este o locatie practica si usor de recunoscut.",
      en: "Nurmes is a town in North Karelia. It adds a local city name, a clear regional setting, and a useful stop for road trips. The place works well for everyday travel, short breaks, and area guides. For North Karelia searches, Nurmes is a practical and recognizable location."
    },
    facts: {
      de: ["In North Karelia.", "Gut fur Tagesausfluge.", "Kompaktes lokales Zentrum.", "Starke regionale Sichtbarkeit.", "Leicht mit nahen Sehenswurdigkeiten zu verbinden."],
      hu: ["North Karelia teruleten.", "Jol mukodik egynapos kirandulasokhoz.", "Kompakt helyi kozpont.", "Erős regionalis lathatosag.", "Könnyen osszekapcsolhato kozelebbi latnivalokkal."],
      ro: ["In North Karelia.", "Util pentru excursii de o zi.", "Centru local compact.", "Vizibilitate regionala buna.", "Usor de combinat cu obiective apropiate."],
      en: ["In North Karelia.", "Useful for day trips.", "Compact local center.", "Good regional visibility.", "Easy to pair with nearby sights."]
    },
    image: "/geo-images/finland/city-nurmes.webp",
  },
  {
    id: "kid-linnanmaki",
    type: "kid-landmark",
    parent: "reg-uusimaa-fi",
    coords: [24.9410, 60.1850],
    name: { de: "Linnanmaki", hu: "Linnanmaki", ro: "Linnanmaki", en: "Linnanmaki" },
    description: {
      de: "Linnanmaki ist eine familienfreundliche Attraktion in Uusimaa. Sie verbindet Spiel, Lernen und einfache Besuchsplanung. Kinder und Eltern suchen sie fur Sommer- oder Regentage. Fur Familienreisen ist Linnanmaki ein starkes Stichwort.",
      hu: "Linnanmaki egy csaladbarat latvanyossag Uusimaa teruleten. A jatekot, a tanulast es az egyszeru latogatasi tervezest kapcsolja ossze. Gyerekes csaladok nyaron vagy eso napokon is keresik. A csaladi utazasokban Linnanmaki eros kulcsszo.",
      ro: "Linnanmaki este o atractie prietenoasa cu familiile in Uusimaa. Imbina joaca, invatare si planificare usoara a vizitei. Copiii si parintii o cauta pentru excursii de vara sau zile ploioase. Pentru calatorii de familie, Linnanmaki este un cuvant cheie puternic.",
      en: "Linnanmaki is a family-friendly attraction in Uusimaa. It combines play, learning, and easy visitor planning. Children and parents search for it on summer or rainy-day trips. For family travel, Linnanmaki is a strong keyword."
    },
    facts: {
      de: ["Familienfreundlich.", "Beliebt bei Kindern.", "Leicht als Tagesausflug.", "Gut im Sommer und in den Ferien.", "Verbindet Spiel und Lernen."],
      hu: ["Csaladbarat.", "Népszeru gyerekekkel.", "Könnyu egynapos program.", "Jol mukodik nyaron es unnepeken.", "A jatekot es a tanulast vegyiti."],
      ro: ["Prietenos cu familiile.", "Popular printre copii.", "Usor ca excursie de o zi.", "Bun vara si in vacante.", "Combina joaca si invatarea."],
      en: ["Family-friendly.", "Popular with children.", "Easy day trip.", "Good in summer and holidays.", "Combines play and learning."]
    },
    image: "/geo-images/finland/kid-linnanmaki.webp",
  },
  {
    id: "historical-turun-cathedral",
    type: "historical",
    parent: "reg-southwest-finland-fi",
    coords: [22.2670, 60.4518],
    name: { de: "Turku Cathedral", hu: "Turku Cathedral", ro: "Turku Cathedral", en: "Turku Cathedral" },
    description: {
      de: "Turku Cathedral ist ein historischer Ort in Southwest Finland. Besucher kommen wegen Architektur, Erinnerung und lokaler Identitat. Der Ort passt gut zu Citybreaks, Geschichtsrouten und Kulturseiten. Damit ist Turku Cathedral ein starkes Suchwort fur Reisen in Southwest Finland.",
      hu: "Turku Cathedral egy tortenelmi hely Southwest Finland teruleten. A latogatokat az epiteszet, az emlekezet es a helyi identitas vonzza. Jól mukodik varoslatogatasokhoz, oroksegi utvonalakhoz es kultura oldalakhoz. Ezert Turku Cathedral eros keresesi kifejezes Southwest Finland utazasaihoz.",
      ro: "Turku Cathedral este un sit istoric in Southwest Finland. Vizitatorii vin pentru arhitectura, memorie si identitate locala. Functioneaza bine pentru city break-uri, trasee de patrimoniu si pagini de cultura. De aceea, Turku Cathedral este un termen puternic pentru calatoriile in Southwest Finland.",
      en: "Turku Cathedral is a historic site in Southwest Finland. Visitors come for architecture, memory, and local identity. It works well for city breaks, heritage routes, and culture pages. That makes Turku Cathedral a strong search term for Southwest Finland travel."
    },
    facts: {
      de: ["Historischer Ort.", "Starker Kulturwert.", "Gut fur Touren.", "Fotogen und einpragsam.", "Mit lokaler Identitat verbunden."],
      hu: ["Tortenelmi hely.", "Erős kulturalis ertek.", "Jol mukodik turakhoz.", "Fotogén es emlekezetes.", "A helyi identitashoz kotodik."],
      ro: ["Sit istoric.", "Valoare culturala puternica.", "Bun pentru tururi.", "Fotogenic si memorabil.", "Legat de identitatea locala."],
      en: ["Historic site.", "Strong cultural value.", "Good for tours.", "Photogenic and memorable.", "Linked to local identity."]
    },
    image: "/geo-images/finland/historical-turun-cathedral.webp",
  },
  {
    id: "kid-sarkanniemi",
    type: "kid-landmark",
    parent: "reg-pirkanmaa-fi",
    coords: [23.7470, 61.4970],
    name: { de: "Sarkanniemi", hu: "Sarkanniemi", ro: "Sarkanniemi", en: "Sarkanniemi" },
    description: {
      de: "Sarkanniemi ist eine familienfreundliche Attraktion in Pirkanmaa. Sie verbindet Spiel, Lernen und einfache Besuchsplanung. Kinder und Eltern suchen sie fur Sommer- oder Regentage. Fur Familienreisen ist Sarkanniemi ein starkes Stichwort.",
      hu: "Sarkanniemi egy csaladbarat latvanyossag Pirkanmaa teruleten. A jatekot, a tanulast es az egyszeru latogatasi tervezest kapcsolja ossze. Gyerekes csaladok nyaron vagy eso napokon is keresik. A csaladi utazasokban Sarkanniemi eros kulcsszo.",
      ro: "Sarkanniemi este o atractie prietenoasa cu familiile in Pirkanmaa. Imbina joaca, invatare si planificare usoara a vizitei. Copiii si parintii o cauta pentru excursii de vara sau zile ploioase. Pentru calatorii de familie, Sarkanniemi este un cuvant cheie puternic.",
      en: "Sarkanniemi is a family-friendly attraction in Pirkanmaa. It combines play, learning, and easy visitor planning. Children and parents search for it on summer or rainy-day trips. For family travel, Sarkanniemi is a strong keyword."
    },
    facts: {
      de: ["Familienfreundlich.", "Beliebt bei Kindern.", "Leicht als Tagesausflug.", "Gut im Sommer und in den Ferien.", "Verbindet Spiel und Lernen."],
      hu: ["Csaladbarat.", "Népszeru gyerekekkel.", "Könnyu egynapos program.", "Jol mukodik nyaron es unnepeken.", "A jatekot es a tanulast vegyiti."],
      ro: ["Prietenos cu familiile.", "Popular printre copii.", "Usor ca excursie de o zi.", "Bun vara si in vacante.", "Combina joaca si invatarea."],
      en: ["Family-friendly.", "Popular with children.", "Easy day trip.", "Good in summer and holidays.", "Combines play and learning."]
    },
    image: "/geo-images/finland/kid-sarkanniemi.webp",
  },
  {
    id: "historical-lappeenranta-fortress",
    type: "historical",
    parent: "reg-south-karelia-fi",
    coords: [28.1850, 61.0600],
    name: { de: "Lappeenranta Fortress", hu: "Lappeenranta Fortress", ro: "Lappeenranta Fortress", en: "Lappeenranta Fortress" },
    description: {
      de: "Lappeenranta Fortress ist ein historischer Ort in South Karelia. Besucher kommen wegen Architektur, Erinnerung und lokaler Identitat. Der Ort passt gut zu Citybreaks, Geschichtsrouten und Kulturseiten. Damit ist Lappeenranta Fortress ein starkes Suchwort fur Reisen in South Karelia.",
      hu: "Lappeenranta Fortress egy tortenelmi hely South Karelia teruleten. A latogatokat az epiteszet, az emlekezet es a helyi identitas vonzza. Jól mukodik varoslatogatasokhoz, oroksegi utvonalakhoz es kultura oldalakhoz. Ezert Lappeenranta Fortress eros keresesi kifejezes South Karelia utazasaihoz.",
      ro: "Lappeenranta Fortress este un sit istoric in South Karelia. Vizitatorii vin pentru arhitectura, memorie si identitate locala. Functioneaza bine pentru city break-uri, trasee de patrimoniu si pagini de cultura. De aceea, Lappeenranta Fortress este un termen puternic pentru calatoriile in South Karelia.",
      en: "Lappeenranta Fortress is a historic site in South Karelia. Visitors come for architecture, memory, and local identity. It works well for city breaks, heritage routes, and culture pages. That makes Lappeenranta Fortress a strong search term for South Karelia travel."
    },
    facts: {
      de: ["Historischer Ort.", "Starker Kulturwert.", "Gut fur Touren.", "Fotogen und einpragsam.", "Mit lokaler Identitat verbunden."],
      hu: ["Tortenelmi hely.", "Erős kulturalis ertek.", "Jol mukodik turakhoz.", "Fotogén es emlekezetes.", "A helyi identitashoz kotodik."],
      ro: ["Sit istoric.", "Valoare culturala puternica.", "Bun pentru tururi.", "Fotogenic si memorabil.", "Legat de identitatea locala."],
      en: ["Historic site.", "Strong cultural value.", "Good for tours.", "Photogenic and memorable.", "Linked to local identity."]
    },
    image: "/geo-images/finland/historical-lappeenranta-fortress.webp",
  },
  {
    id: "historical-hamina-fortress",
    type: "historical",
    parent: "reg-kymenlaakso-fi",
    coords: [27.2020, 60.5690],
    name: { de: "Hamina Fortress", hu: "Hamina Fortress", ro: "Hamina Fortress", en: "Hamina Fortress" },
    description: {
      de: "Hamina Fortress ist ein historischer Ort in Kymenlaakso. Besucher kommen wegen Architektur, Erinnerung und lokaler Identitat. Der Ort passt gut zu Citybreaks, Geschichtsrouten und Kulturseiten. Damit ist Hamina Fortress ein starkes Suchwort fur Reisen in Kymenlaakso.",
      hu: "Hamina Fortress egy tortenelmi hely Kymenlaakso teruleten. A latogatokat az epiteszet, az emlekezet es a helyi identitas vonzza. Jól mukodik varoslatogatasokhoz, oroksegi utvonalakhoz es kultura oldalakhoz. Ezert Hamina Fortress eros keresesi kifejezes Kymenlaakso utazasaihoz.",
      ro: "Hamina Fortress este un sit istoric in Kymenlaakso. Vizitatorii vin pentru arhitectura, memorie si identitate locala. Functioneaza bine pentru city break-uri, trasee de patrimoniu si pagini de cultura. De aceea, Hamina Fortress este un termen puternic pentru calatoriile in Kymenlaakso.",
      en: "Hamina Fortress is a historic site in Kymenlaakso. Visitors come for architecture, memory, and local identity. It works well for city breaks, heritage routes, and culture pages. That makes Hamina Fortress a strong search term for Kymenlaakso travel."
    },
    facts: {
      de: ["Historischer Ort.", "Starker Kulturwert.", "Gut fur Touren.", "Fotogen und einpragsam.", "Mit lokaler Identitat verbunden."],
      hu: ["Tortenelmi hely.", "Erős kulturalis ertek.", "Jol mukodik turakhoz.", "Fotogén es emlekezetes.", "A helyi identitashoz kotodik."],
      ro: ["Sit istoric.", "Valoare culturala puternica.", "Bun pentru tururi.", "Fotogenic si memorabil.", "Legat de identitatea locala."],
      en: ["Historic site.", "Strong cultural value.", "Good for tours.", "Photogenic and memorable.", "Linked to local identity."]
    },
    image: "/geo-images/finland/historical-hamina-fortress.webp",
  },
  {
    id: "kid-maretarium-kotka",
    type: "kid-landmark",
    parent: "reg-kymenlaakso-fi",
    coords: [26.9520, 60.4660],
    name: { de: "Maretarium Kotka", hu: "Maretarium Kotka", ro: "Maretarium Kotka", en: "Maretarium Kotka" },
    description: {
      de: "Maretarium Kotka ist eine familienfreundliche Attraktion in Kymenlaakso. Sie verbindet Spiel, Lernen und einfache Besuchsplanung. Kinder und Eltern suchen sie fur Sommer- oder Regentage. Fur Familienreisen ist Maretarium Kotka ein starkes Stichwort.",
      hu: "Maretarium Kotka egy csaladbarat latvanyossag Kymenlaakso teruleten. A jatekot, a tanulast es az egyszeru latogatasi tervezest kapcsolja ossze. Gyerekes csaladok nyaron vagy eso napokon is keresik. A csaladi utazasokban Maretarium Kotka eros kulcsszo.",
      ro: "Maretarium Kotka este o atractie prietenoasa cu familiile in Kymenlaakso. Imbina joaca, invatare si planificare usoara a vizitei. Copiii si parintii o cauta pentru excursii de vara sau zile ploioase. Pentru calatorii de familie, Maretarium Kotka este un cuvant cheie puternic.",
      en: "Maretarium Kotka is a family-friendly attraction in Kymenlaakso. It combines play, learning, and easy visitor planning. Children and parents search for it on summer or rainy-day trips. For family travel, Maretarium Kotka is a strong keyword."
    },
    facts: {
      de: ["Familienfreundlich.", "Beliebt bei Kindern.", "Leicht als Tagesausflug.", "Gut im Sommer und in den Ferien.", "Verbindet Spiel und Lernen."],
      hu: ["Csaladbarat.", "Népszeru gyerekekkel.", "Könnyu egynapos program.", "Jol mukodik nyaron es unnepeken.", "A jatekot es a tanulast vegyiti."],
      ro: ["Prietenos cu familiile.", "Popular printre copii.", "Usor ca excursie de o zi.", "Bun vara si in vacante.", "Combina joaca si invatarea."],
      en: ["Family-friendly.", "Popular with children.", "Easy day trip.", "Good in summer and holidays.", "Combines play and learning."]
    },
    image: "/geo-images/finland/kid-maretarium-kotka.webp",
  },
  {
    id: "natural-lake-kallavesi",
    type: "lake",
    parent: "reg-north-savo-fi",
    coords: [27.6930, 62.8920],
    name: { de: "Kallavesi", hu: "Kallavesi", ro: "Kallavesi", en: "Kallavesi" },
    description: {
      de: "Kallavesi ist ein Naturort in North Savo. Er stellt Seelandschaft und ruhige Regionalbilder in den Vordergrund. Der Ort ist nutzlich fur Outdoor-Trips, Fotos und Slow Travel. Fur Natur-Suchen zu North Savo ist Kallavesi ein klarer Anker.",
      hu: "Kallavesi egy termeszetes hely North Savo teruleten. A tavi tajat es a nyugodt regionalis latvanyt emeli ki. Hasznos szabadt eri kirandulasokhoz, fotokhoz es lassu utazasokhoz. North Savo termeszetes kereseseiben Kallavesi egyertelmu kotopont.",
      ro: "Kallavesi este un loc natural in North Savo. Pune in prim plan peisajul lacustru si peisajele regionale linistite. Situl este util pentru excursii in aer liber, fotografii si slow travel. Pentru cautari despre natura in North Savo, Kallavesi este un reper clar.",
      en: "Kallavesi is a natural place in North Savo. It highlights lake scenery and calm regional landscapes. The site is useful for outdoor trips, photos, and slow travel. For North Savo nature searches, Kallavesi is a clear anchor."
    },
    facts: {
      de: ["Naturlandschaft.", "Gut fur Outdoor-Trips.", "Das ganze Jahr uber malerisch.", "Nutzlich fur Fotos.", "Stark im regionalen Reisen."],
      hu: ["Termeszetes taj.", "Jol mukodik szabadt eri programokhoz.", "Egész evben szép.", "Hasznos fotokhoz.", "Erős a regionalis utazasokban."],
      ro: ["Peisaj natural.", "Bun pentru excursii in aer liber.", "Scenic tot anul.", "Util pentru fotografii.", "Puternic in turismul regional."],
      en: ["Natural landscape.", "Good for outdoor trips.", "Scenic all year.", "Useful for photos.", "Strong in regional travel."]
    },
    image: "/geo-images/finland/natural-lake-kallavesi.webp",
  },
  {
    id: "natural-lake-pielinen",
    type: "lake",
    parent: "reg-north-karelia-fi",
    coords: [29.1480, 63.2200],
    name: { de: "Pielinen", hu: "Pielinen", ro: "Pielinen", en: "Pielinen" },
    description: {
      de: "Pielinen ist ein Naturort in North Karelia. Er stellt Seelandschaft und ruhige Regionalbilder in den Vordergrund. Der Ort ist nutzlich fur Outdoor-Trips, Fotos und Slow Travel. Fur Natur-Suchen zu North Karelia ist Pielinen ein klarer Anker.",
      hu: "Pielinen egy termeszetes hely North Karelia teruleten. A tavi tajat es a nyugodt regionalis latvanyt emeli ki. Hasznos szabadt eri kirandulasokhoz, fotokhoz es lassu utazasokhoz. North Karelia termeszetes kereseseiben Pielinen egyertelmu kotopont.",
      ro: "Pielinen este un loc natural in North Karelia. Pune in prim plan peisajul lacustru si peisajele regionale linistite. Situl este util pentru excursii in aer liber, fotografii si slow travel. Pentru cautari despre natura in North Karelia, Pielinen este un reper clar.",
      en: "Pielinen is a natural place in North Karelia. It highlights lake scenery and calm regional landscapes. The site is useful for outdoor trips, photos, and slow travel. For North Karelia nature searches, Pielinen is a clear anchor."
    },
    facts: {
      de: ["Naturlandschaft.", "Gut fur Outdoor-Trips.", "Das ganze Jahr uber malerisch.", "Nutzlich fur Fotos.", "Stark im regionalen Reisen."],
      hu: ["Termeszetes taj.", "Jol mukodik szabadt eri programokhoz.", "Egész evben szép.", "Hasznos fotokhoz.", "Erős a regionalis utazasokban."],
      ro: ["Peisaj natural.", "Bun pentru excursii in aer liber.", "Scenic tot anul.", "Util pentru fotografii.", "Puternic in turismul regional."],
      en: ["Natural landscape.", "Good for outdoor trips.", "Scenic all year.", "Useful for photos.", "Strong in regional travel."]
    },
    image: "/geo-images/finland/natural-lake-pielinen.webp",
  },
  {
    id: "historical-alvar-aalto-museum",
    type: "landmark",
    parent: "reg-central-finland-fi",
    coords: [25.7420, 62.2400],
    name: { de: "Alvar Aalto Museum", hu: "Alvar Aalto Museum", ro: "Alvar Aalto Museum", en: "Alvar Aalto Museum" },
    description: {
      de: "",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["", "", "", "", ""],
      hu: ["", "", "", "", ""],
      ro: ["", "", "", "", ""],
      en: ["", "", "", "", ""]
    },
    image: "/geo-images/finland/historical-alvar-aalto-museum.webp",
  },
  {
    id: "natural-lake-paijanne",
    type: "lake",
    parent: "reg-central-finland-fi",
    coords: [25.6000, 61.6000],
    name: { de: "Lake Paijanne", hu: "Lake Paijanne", ro: "Lake Paijanne", en: "Lake Paijanne" },
    description: {
      de: "Lake Paijanne ist ein Naturort in Central Finland. Er stellt Seelandschaft und ruhige Regionalbilder in den Vordergrund. Der Ort ist nutzlich fur Outdoor-Trips, Fotos und Slow Travel. Fur Natur-Suchen zu Central Finland ist Lake Paijanne ein klarer Anker.",
      hu: "Lake Paijanne egy termeszetes hely Central Finland teruleten. A tavi tajat es a nyugodt regionalis latvanyt emeli ki. Hasznos szabadt eri kirandulasokhoz, fotokhoz es lassu utazasokhoz. Central Finland termeszetes kereseseiben Lake Paijanne egyertelmu kotopont.",
      ro: "Lake Paijanne este un loc natural in Central Finland. Pune in prim plan peisajul lacustru si peisajele regionale linistite. Situl este util pentru excursii in aer liber, fotografii si slow travel. Pentru cautari despre natura in Central Finland, Lake Paijanne este un reper clar.",
      en: "Lake Paijanne is a natural place in Central Finland. It highlights lake scenery and calm regional landscapes. The site is useful for outdoor trips, photos, and slow travel. For Central Finland nature searches, Lake Paijanne is a clear anchor."
    },
    facts: {
      de: ["Naturlandschaft.", "Gut fur Outdoor-Trips.", "Das ganze Jahr uber malerisch.", "Nutzlich fur Fotos.", "Stark im regionalen Reisen."],
      hu: ["Termeszetes taj.", "Jol mukodik szabadt eri programokhoz.", "Egész evben szép.", "Hasznos fotokhoz.", "Erős a regionalis utazasokban."],
      ro: ["Peisaj natural.", "Bun pentru excursii in aer liber.", "Scenic tot anul.", "Util pentru fotografii.", "Puternic in turismul regional."],
      en: ["Natural landscape.", "Good for outdoor trips.", "Scenic all year.", "Useful for photos.", "Strong in regional travel."]
    },
    image: "/geo-images/finland/natural-lake-paijanne.webp",
  },
  {
    id: "industry-atria-seinajoki",
    type: "industry",
    parent: "reg-south-ostrobothnia-fi",
    coords: [22.8400, 62.7900],
    name: { de: "Atria Seinajoki", hu: "Atria Seinajoki", ro: "Atria Seinajoki", en: "Atria Seinajoki" },
    description: {
      de: "Atria Seinajoki steht fur die Produktionsseite von South Ostrobothnia. Er verbindet sich mit Nahrung, Energie, Landwirtschaft oder Fertigung. Der Ort ist nutzlich fur Business-Stories und Roadtrip-Inhalte. Fur Suchanfragen zur Regionalwirtschaft ist Atria Seinajoki ein starkes Stichwort.",
      hu: "Atria Seinajoki South Ostrobothnia termelesi oldalat mutatja. Elelmiszerhez, energiaval, mezogazdasaggal vagy gyartassal kotodik. A hely hasznos uzleti tortenetekhez es autos utazasi tartalmakhoz. A regionalis gazdasag kereseseiben Atria Seinajoki eros kulcsszo.",
      ro: "Atria Seinajoki reflecta latura de productie a lui South Ostrobothnia. Se leaga de alimente, energie, agricultura sau fabricatie. Locul este util pentru povesti de business si continut de road trip. Pentru cautari despre economia regionala, Atria Seinajoki este un cuvant cheie puternic.",
      en: "Atria Seinajoki reflects the production side of South Ostrobothnia. It connects with food, energy, farming, or manufacturing. The place is useful for business stories and road-trip content. For regional economy searches, Atria Seinajoki is a strong keyword."
    },
    facts: {
      de: ["Produktion und Wirtschaft.", "Regionaler Business-Wert.", "Mit lokalen Arbeitsplatzen verbunden.", "Nutzlich fur Reiseinhalte.", "Starkes ortsbezogenes Stichwort."],
      hu: ["Termeles es gazdasag.", "Regionalis uzleti ertek.", "Helyi munkahelyekhez kotodik.", "Hasznos utazasi tartalmakhoz.", "Erős helyhez kotott kulcsszo."],
      ro: ["Productie si economie.", "Valoare de business regionala.", "Legat de locuri de munca locale.", "Util pentru continut de calatorie.", "Cuvant cheie puternic bazat pe loc."],
      en: ["Production and economy.", "Regional business value.", "Linked to local jobs.", "Useful for travel content.", "Strong place-based keyword."]
    },
    image: "/geo-images/finland/industry-atria-seinajoki.webp",
  },
  {
    id: "agriculture-kauhava-potato-plains",
    type: "agriculture",
    parent: "reg-south-ostrobothnia-fi",
    coords: [23.0840, 63.1000],
    name: { de: "Kauhava Agricultural Plains", hu: "Kauhava Agricultural Plains", ro: "Kauhava Agricultural Plains", en: "Kauhava Agricultural Plains" },
    description: {
      de: "Kauhava Agricultural Plains steht fur die landwirtschaftliche Seite von South Ostrobothnia. Er verbindet sich mit Feldern, Landwirtschaft und lokaler Esskultur. Der Ort ist nutzlich fur landliche Reiseinhalte und Seiten zur Regionalwirtschaft. Fur Agrar-Suchen ist Kauhava Agricultural Plains ein starkes Stichwort.",
      hu: "Kauhava Agricultural Plains South Ostrobothnia mezogazdasagi oldalat mutatja. Kapcsolodik a novenytermeszteshez, a gazdalkodashoz es a helyi etelkulturahoz. A hely hasznos videki utazasi tartalmakhoz es regionalis gazdasagi oldalakhoz. A mezogazdasagi keresese kben Kauhava Agricultural Plains eros kulcsszo.",
      ro: "Kauhava Agricultural Plains reflecta latura agricola a lui South Ostrobothnia. Se leaga de culturi, agricultura si cultura alimentara locala. Locul este util pentru continut de calatorie rurala si pagini despre economia regionala. Pentru cautari despre agricultura, Kauhava Agricultural Plains este un cuvant cheie puternic.",
      en: "Kauhava Agricultural Plains reflects the agricultural side of South Ostrobothnia. It connects with crops, farming, and local food culture. The place is useful for rural travel content and regional economy pages. For agriculture searches, Kauhava Agricultural Plains is a strong keyword."
    },
    facts: {
      de: ["Landwirtschaft und Nahrung.", "Regionaler Wirtschafts-Wert.", "Mit Feldern und Ernten verbunden.", "Nutzlich fur Reiseinhalte.", "Starkes ortsbezogenes Stichwort."],
      hu: ["Mezogazdasag es elelmiszer.", "Regionalis gazdasagi ertek.", "Novenytermeszteshez es foldekhez kotodik.", "Hasznos utazasi tartalmakhoz.", "Erős helyhez kotott kulcsszo."],
      ro: ["Agricultura si alimente.", "Valoare economica regionala.", "Legat de culturi si campuri.", "Util pentru continut de calatorie.", "Cuvant cheie puternic bazat pe loc."],
      en: ["Farming and food.", "Regional economy value.", "Linked to crops and fields.", "Useful for travel content.", "Strong place-based keyword."]
    },
    image: "/geo-images/finland/agriculture-kauhava-potato-plains.webp",
  },
  {
    id: "industry-vaasa-energy-hub",
    type: "industry",
    parent: "reg-ostrobothnia-fi",
    coords: [21.6140, 63.0950],
    name: { de: "Vaasa Energy Hub", hu: "Vaasa Energy Hub", ro: "Vaasa Energy Hub", en: "Vaasa Energy Hub" },
    description: {
      de: "Vaasa Energy Hub steht fur die Produktionsseite von Ostrobothnia. Er verbindet sich mit Nahrung, Energie, Landwirtschaft oder Fertigung. Der Ort ist nutzlich fur Business-Stories und Roadtrip-Inhalte. Fur Suchanfragen zur Regionalwirtschaft ist Vaasa Energy Hub ein starkes Stichwort.",
      hu: "Vaasa Energy Hub Ostrobothnia termelesi oldalat mutatja. Elelmiszerhez, energiaval, mezogazdasaggal vagy gyartassal kotodik. A hely hasznos uzleti tortenetekhez es autos utazasi tartalmakhoz. A regionalis gazdasag kereseseiben Vaasa Energy Hub eros kulcsszo.",
      ro: "Vaasa Energy Hub reflecta latura de productie a lui Ostrobothnia. Se leaga de alimente, energie, agricultura sau fabricatie. Locul este util pentru povesti de business si continut de road trip. Pentru cautari despre economia regionala, Vaasa Energy Hub este un cuvant cheie puternic.",
      en: "Vaasa Energy Hub reflects the production side of Ostrobothnia. It connects with food, energy, farming, or manufacturing. The place is useful for business stories and road-trip content. For regional economy searches, Vaasa Energy Hub is a strong keyword."
    },
    facts: {
      de: ["Produktion und Wirtschaft.", "Regionaler Business-Wert.", "Mit lokalen Arbeitsplatzen verbunden.", "Nutzlich fur Reiseinhalte.", "Starkes ortsbezogenes Stichwort."],
      hu: ["Termeles es gazdasag.", "Regionalis uzleti ertek.", "Helyi munkahelyekhez kotodik.", "Hasznos utazasi tartalmakhoz.", "Erős helyhez kotott kulcsszo."],
      ro: ["Productie si economie.", "Valoare de business regionala.", "Legat de locuri de munca locale.", "Util pentru continut de calatorie.", "Cuvant cheie puternic bazat pe loc."],
      en: ["Production and economy.", "Regional business value.", "Linked to local jobs.", "Useful for travel content.", "Strong place-based keyword."]
    },
    image: "/geo-images/finland/industry-vaasa-energy-hub.webp",
  },
  {
    id: "landmark-kokkola-old-town",
    type: "landmark",
    parent: "reg-central-ostrobothnia-fi",
    coords: [23.1310, 63.8370],
    name: { de: "Neristan", hu: "Neristan", ro: "Neristan", en: "Neristan" },
    description: {
      de: "",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["", "", "", "", ""],
      hu: ["", "", "", "", ""],
      ro: ["", "", "", "", ""],
      en: ["", "", "", "", ""]
    },
    image: "/geo-images/finland/landmark-kokkola-old-town.webp",
  },
  {
    id: "historical-kaustinen-folk-music-centre",
    type: "landmark",
    parent: "reg-central-ostrobothnia-fi",
    coords: [23.6870, 63.5480],
    name: { de: "Kaustinen Folk Music Centre", hu: "Kaustinen Folk Music Centre", ro: "Kaustinen Folk Music Centre", en: "Kaustinen Folk Music Centre" },
    description: {
      de: "",
      hu: "",
      ro: "",
      en: ""
    },
    facts: {
      de: ["", "", "", "", ""],
      hu: ["", "", "", "", ""],
      ro: ["", "", "", "", ""],
      en: ["", "", "", "", ""]
    },
    image: "/geo-images/finland/historical-kaustinen-folk-music-centre.webp",
  },
  {
    id: "industry-lahti-brewery",
    type: "industry",
    parent: "reg-paijanne-tavastia-fi",
    coords: [25.6610, 60.9830],
    name: { de: "Lahti Brewery", hu: "Lahti Brewery", ro: "Lahti Brewery", en: "Lahti Brewery" },
    description: {
      de: "Lahti Brewery steht fur die Produktionsseite von Paijanne Tavastia. Er verbindet sich mit Nahrung, Energie, Landwirtschaft oder Fertigung. Der Ort ist nutzlich fur Business-Stories und Roadtrip-Inhalte. Fur Suchanfragen zur Regionalwirtschaft ist Lahti Brewery ein starkes Stichwort.",
      hu: "Lahti Brewery Paijanne Tavastia termelesi oldalat mutatja. Elelmiszerhez, energiaval, mezogazdasaggal vagy gyartassal kotodik. A hely hasznos uzleti tortenetekhez es autos utazasi tartalmakhoz. A regionalis gazdasag kereseseiben Lahti Brewery eros kulcsszo.",
      ro: "Lahti Brewery reflecta latura de productie a lui Paijanne Tavastia. Se leaga de alimente, energie, agricultura sau fabricatie. Locul este util pentru povesti de business si continut de road trip. Pentru cautari despre economia regionala, Lahti Brewery este un cuvant cheie puternic.",
      en: "Lahti Brewery reflects the production side of Paijanne Tavastia. It connects with food, energy, farming, or manufacturing. The place is useful for business stories and road-trip content. For regional economy searches, Lahti Brewery is a strong keyword."
    },
    facts: {
      de: ["Produktion und Wirtschaft.", "Regionaler Business-Wert.", "Mit lokalen Arbeitsplatzen verbunden.", "Nutzlich fur Reiseinhalte.", "Starkes ortsbezogenes Stichwort."],
      hu: ["Termeles es gazdasag.", "Regionalis uzleti ertek.", "Helyi munkahelyekhez kotodik.", "Hasznos utazasi tartalmakhoz.", "Erős helyhez kotott kulcsszo."],
      ro: ["Productie si economie.", "Valoare de business regionala.", "Legat de locuri de munca locale.", "Util pentru continut de calatorie.", "Cuvant cheie puternic bazat pe loc."],
      en: ["Production and economy.", "Regional business value.", "Linked to local jobs.", "Useful for travel content.", "Strong place-based keyword."]
    },
    image: "/geo-images/finland/industry-lahti-brewery.webp",
  },
  {
    id: "natural-river-oulujoki",
    type: "river",
    parent: "reg-north-ostrobothnia-fi",
    coords: [25.4700, 65.0300],
    name: { de: "Oulujoki", hu: "Oulujoki", ro: "Oulujoki", en: "Oulujoki" },
    description: {
      de: "Oulujoki ist ein Fluss in North Ostrobothnia. Er pragt die Landschaft und verbindet Orte, Wasser und Bewegung. Der Ort ist nutzlich fur Outdoor-Trips, Fotos und Reiseplanung. Fur Natur-Suchen zu North Ostrobothnia ist Oulujoki ein klarer Anker.",
      hu: "Oulujoki egy folyo North Ostrobothnia teruleten. Meghatarozza a tajat, es osszekapcsolja a telepuleseket, a vizet es a mozgas t. Hasznos szabadt eri programokhoz, fotokhoz es utazas tervezeshez. North Ostrobothnia termeszetes kereseseiben Oulujoki egyertelmu kotopont.",
      ro: "Oulujoki este un rau in North Ostrobothnia. Modeleaza peisajul si leaga localitati, apa si miscare. Locul este util pentru excursii in aer liber, fotografii si planificarea calatoriilor. Pentru cautari despre natura in North Ostrobothnia, Oulujoki este un reper clar.",
      en: "Oulujoki is a river in North Ostrobothnia. It shapes the local landscape and connects towns, water, and movement. The site is useful for outdoor trips, photos, and travel planning. For North Ostrobothnia nature searches, Oulujoki is a clear anchor."
    },
    facts: {
      de: ["Naturlandschaft.", "Gut fur Outdoor-Trips.", "Das ganze Jahr uber malerisch.", "Nutzlich fur Fotos.", "Stark im regionalen Reisen."],
      hu: ["Termeszetes taj.", "Jol mukodik szabadt eri programokhoz.", "Egész evben szép.", "Hasznos fotokhoz.", "Erős a regionalis utazasokban."],
      ro: ["Peisaj natural.", "Bun pentru excursii in aer liber.", "Scenic tot anul.", "Util pentru fotografii.", "Puternic in turismul regional."],
      en: ["Natural landscape.", "Good for outdoor trips.", "Scenic all year.", "Useful for photos.", "Strong in regional travel."]
    },
    image: "/geo-images/finland/natural-river-oulujoki.webp",
  },
  {
    id: "industry-raahe-steel-works",
    type: "industry",
    parent: "reg-north-ostrobothnia-fi",
    coords: [24.4810, 64.6890],
    name: { de: "Raahe Steel Works", hu: "Raahe Steel Works", ro: "Raahe Steel Works", en: "Raahe Steel Works" },
    description: {
      de: "Raahe Steel Works steht fur die Produktionsseite von North Ostrobothnia. Er verbindet sich mit Nahrung, Energie, Landwirtschaft oder Fertigung. Der Ort ist nutzlich fur Business-Stories und Roadtrip-Inhalte. Fur Suchanfragen zur Regionalwirtschaft ist Raahe Steel Works ein starkes Stichwort.",
      hu: "Raahe Steel Works North Ostrobothnia termelesi oldalat mutatja. Elelmiszerhez, energiaval, mezogazdasaggal vagy gyartassal kotodik. A hely hasznos uzleti tortenetekhez es autos utazasi tartalmakhoz. A regionalis gazdasag kereseseiben Raahe Steel Works eros kulcsszo.",
      ro: "Raahe Steel Works reflecta latura de productie a lui North Ostrobothnia. Se leaga de alimente, energie, agricultura sau fabricatie. Locul este util pentru povesti de business si continut de road trip. Pentru cautari despre economia regionala, Raahe Steel Works este un cuvant cheie puternic.",
      en: "Raahe Steel Works reflects the production side of North Ostrobothnia. It connects with food, energy, farming, or manufacturing. The place is useful for business stories and road-trip content. For regional economy searches, Raahe Steel Works is a strong keyword."
    },
    facts: {
      de: ["Produktion und Wirtschaft.", "Regionaler Business-Wert.", "Mit lokalen Arbeitsplatzen verbunden.", "Nutzlich fur Reiseinhalte.", "Starkes ortsbezogenes Stichwort."],
      hu: ["Termeles es gazdasag.", "Regionalis uzleti ertek.", "Helyi munkahelyekhez kotodik.", "Hasznos utazasi tartalmakhoz.", "Erős helyhez kotott kulcsszo."],
      ro: ["Productie si economie.", "Valoare de business regionala.", "Legat de locuri de munca locale.", "Util pentru continut de calatorie.", "Cuvant cheie puternic bazat pe loc."],
      en: ["Production and economy.", "Regional business value.", "Linked to local jobs.", "Useful for travel content.", "Strong place-based keyword."]
    },
    image: "/geo-images/finland/industry-raahe-steel-works.webp",
  },
  {
    id: "historical-kajaani-castle-ruins",
    type: "historical",
    parent: "reg-kainuu-fi",
    coords: [27.7290, 64.2270],
    name: { de: "Kajaani Castle Ruins", hu: "Kajaani Castle Ruins", ro: "Kajaani Castle Ruins", en: "Kajaani Castle Ruins" },
    description: {
      de: "Kajaani Castle Ruins ist ein historischer Ort in Kainuu. Besucher kommen wegen Architektur, Erinnerung und lokaler Identitat. Der Ort passt gut zu Citybreaks, Geschichtsrouten und Kulturseiten. Damit ist Kajaani Castle Ruins ein starkes Suchwort fur Reisen in Kainuu.",
      hu: "Kajaani Castle Ruins egy tortenelmi hely Kainuu teruleten. A latogatokat az epiteszet, az emlekezet es a helyi identitas vonzza. Jól mukodik varoslatogatasokhoz, oroksegi utvonalakhoz es kultura oldalakhoz. Ezert Kajaani Castle Ruins eros keresesi kifejezes Kainuu utazasaihoz.",
      ro: "Kajaani Castle Ruins este un sit istoric in Kainuu. Vizitatorii vin pentru arhitectura, memorie si identitate locala. Functioneaza bine pentru city break-uri, trasee de patrimoniu si pagini de cultura. De aceea, Kajaani Castle Ruins este un termen puternic pentru calatoriile in Kainuu.",
      en: "Kajaani Castle Ruins is a historic site in Kainuu. Visitors come for architecture, memory, and local identity. It works well for city breaks, heritage routes, and culture pages. That makes Kajaani Castle Ruins a strong search term for Kainuu travel."
    },
    facts: {
      de: ["Historischer Ort.", "Starker Kulturwert.", "Gut fur Touren.", "Fotogen und einpragsam.", "Mit lokaler Identitat verbunden."],
      hu: ["Tortenelmi hely.", "Erős kulturalis ertek.", "Jol mukodik turakhoz.", "Fotogén es emlekezetes.", "A helyi identitashoz kotodik."],
      ro: ["Sit istoric.", "Valoare culturala puternica.", "Bun pentru tururi.", "Fotogenic si memorabil.", "Legat de identitatea locala."],
      en: ["Historic site.", "Strong cultural value.", "Good for tours.", "Photogenic and memorable.", "Linked to local identity."]
    },
    image: "/geo-images/finland/historical-kajaani-castle-ruins.webp",
  },
  {
    id: "forest-hossa",
    type: "forest",
    parent: "reg-kainuu-fi",
    coords: [29.5200, 65.5000],
    name: { de: "Hossa", hu: "Hossa", ro: "Hossa", en: "Hossa" },
    description: {
      de: "Hossa ist ein Waldgebiet in Kainuu. Es stellt Walder, Wege und ruhige Regionalbilder in den Vordergrund. Der Ort ist nutzlich fur Outdoor-Trips, Fotos und Slow Travel. Fur Natur-Suchen zu Kainuu ist Hossa ein klarer Anker.",
      hu: "Hossa egy erdos terulet Kainuu teruleten. Az erdokat, utvonalakat es a nyugodt regionalis tajat emeli ki. Hasznos szabadt eri kirandulasokhoz, fotokhoz es lassu utazasokhoz. Kainuu termeszetes kereseseiben Hossa egyertelmu kotopont.",
      ro: "Hossa este o zona de padure in Kainuu. Pune in prim plan padurile, traseele si peisajele regionale linistite. Situl este util pentru excursii in aer liber, fotografii si slow travel. Pentru cautari despre natura in Kainuu, Hossa este un reper clar.",
      en: "Hossa is a forest area in Kainuu. It highlights woods, trails, and calm regional scenery. The site is useful for outdoor trips, photos, and slow travel. For Kainuu nature searches, Hossa is a clear anchor."
    },
    facts: {
      de: ["Naturlandschaft.", "Gut fur Outdoor-Trips.", "Das ganze Jahr uber malerisch.", "Nutzlich fur Fotos.", "Stark im regionalen Reisen."],
      hu: ["Termeszetes taj.", "Jol mukodik szabadt eri programokhoz.", "Egész evben szép.", "Hasznos fotokhoz.", "Erős a regionalis utazasokban."],
      ro: ["Peisaj natural.", "Bun pentru excursii in aer liber.", "Scenic tot anul.", "Util pentru fotografii.", "Puternic in turismul regional."],
      en: ["Natural landscape.", "Good for outdoor trips.", "Scenic all year.", "Useful for photos.", "Strong in regional travel."]
    },
    image: "/geo-images/finland/forest-hossa.webp",
  },
  {
    id: "kid-ranua-wildlife-park",
    type: "kid-landmark",
    parent: "reg-lapland-fi",
    coords: [26.5310, 65.9300],
    name: { de: "Ranua Wildlife Park", hu: "Ranua Wildlife Park", ro: "Ranua Wildlife Park", en: "Ranua Wildlife Park" },
    description: {
      de: "Ranua Wildlife Park ist eine familienfreundliche Attraktion in Lapland. Sie verbindet Spiel, Lernen und einfache Besuchsplanung. Kinder und Eltern suchen sie fur Sommer- oder Regentage. Fur Familienreisen ist Ranua Wildlife Park ein starkes Stichwort.",
      hu: "Ranua Wildlife Park egy csaladbarat latvanyossag Lapland teruleten. A jatekot, a tanulast es az egyszeru latogatasi tervezest kapcsolja ossze. Gyerekes csaladok nyaron vagy eso napokon is keresik. A csaladi utazasokban Ranua Wildlife Park eros kulcsszo.",
      ro: "Ranua Wildlife Park este o atractie prietenoasa cu familiile in Lapland. Imbina joaca, invatare si planificare usoara a vizitei. Copiii si parintii o cauta pentru excursii de vara sau zile ploioase. Pentru calatorii de familie, Ranua Wildlife Park este un cuvant cheie puternic.",
      en: "Ranua Wildlife Park is a family-friendly attraction in Lapland. It combines play, learning, and easy visitor planning. Children and parents search for it on summer or rainy-day trips. For family travel, Ranua Wildlife Park is a strong keyword."
    },
    facts: {
      de: ["Familienfreundlich.", "Beliebt bei Kindern.", "Leicht als Tagesausflug.", "Gut im Sommer und in den Ferien.", "Verbindet Spiel und Lernen."],
      hu: ["Csaladbarat.", "Népszeru gyerekekkel.", "Könnyu egynapos program.", "Jol mukodik nyaron es unnepeken.", "A jatekot es a tanulast vegyiti."],
      ro: ["Prietenos cu familiile.", "Popular printre copii.", "Usor ca excursie de o zi.", "Bun vara si in vacante.", "Combina joaca si invatarea."],
      en: ["Family-friendly.", "Popular with children.", "Easy day trip.", "Good in summer and holidays.", "Combines play and learning."]
    },
    image: "/geo-images/finland/kid-ranua-wildlife-park.webp",
  },
  {
    id: "historical-kastelholm-castle",
    type: "historical",
    parent: "reg-aland-fi",
    coords: [19.9500, 60.2150],
    name: { de: "Kastelholm Castle", hu: "Kastelholm Castle", ro: "Kastelholm Castle", en: "Kastelholm Castle" },
    description: {
      de: "Kastelholm Castle ist ein historischer Ort in Aland. Besucher kommen wegen Architektur, Erinnerung und lokaler Identitat. Der Ort passt gut zu Citybreaks, Geschichtsrouten und Kulturseiten. Damit ist Kastelholm Castle ein starkes Suchwort fur Reisen in Aland.",
      hu: "Kastelholm Castle egy tortenelmi hely Aland teruleten. A latogatokat az epiteszet, az emlekezet es a helyi identitas vonzza. Jól mukodik varoslatogatasokhoz, oroksegi utvonalakhoz es kultura oldalakhoz. Ezert Kastelholm Castle eros keresesi kifejezes Aland utazasaihoz.",
      ro: "Kastelholm Castle este un sit istoric in Aland. Vizitatorii vin pentru arhitectura, memorie si identitate locala. Functioneaza bine pentru city break-uri, trasee de patrimoniu si pagini de cultura. De aceea, Kastelholm Castle este un termen puternic pentru calatoriile in Aland.",
      en: "Kastelholm Castle is a historic site in Aland. Visitors come for architecture, memory, and local identity. It works well for city breaks, heritage routes, and culture pages. That makes Kastelholm Castle a strong search term for Aland travel."
    },
    facts: {
      de: ["Historischer Ort.", "Starker Kulturwert.", "Gut fur Touren.", "Fotogen und einpragsam.", "Mit lokaler Identitat verbunden."],
      hu: ["Tortenelmi hely.", "Erős kulturalis ertek.", "Jol mukodik turakhoz.", "Fotogén es emlekezetes.", "A helyi identitashoz kotodik."],
      ro: ["Sit istoric.", "Valoare culturala puternica.", "Bun pentru tururi.", "Fotogenic si memorabil.", "Legat de identitatea locala."],
      en: ["Historic site.", "Strong cultural value.", "Good for tours.", "Photogenic and memorable.", "Linked to local identity."]
    },
    image: "/geo-images/finland/historical-kastelholm-castle.webp",
  },    
];

export const finlandAllPoi: POI[] = [finlandCountry, ...finlandRegions, ...finlandCities, ...finlandCultureExtended, ...finlandNatureExtended];
