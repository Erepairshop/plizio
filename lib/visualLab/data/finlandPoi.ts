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
    factsAdvanced: {
      de: ["Gegründet im Jahr 1550 von König Gustav I. von Schweden.", "Wurde 1812 zur Hauptstadt des Großfürstentums Finnland.", "Die Kathedrale von Helsinki wurde 1852 fertiggestellt.", "Gastgeber der Olympischen Sommerspiele im Jahr 1952.", "Die Festung Suomenlinna gehört zum UNESCO-Welterbe.", "Einwohnerzahl von etwa 660.000 Menschen im Stadtgebiet."],
      hu: ["1550-ben alapította I. Gusztáv svéd király.", "1812-ben lett a Finn Nagyhercegség fővárosa.", "A Helsinki székesegyház 1852-ben készült el.", "Az 1952-es nyári olimpiai játékok házigazdája volt.", "Suomenlinna erődítménye az UNESCO Világörökség része.", "Lakossága a város területén körülbelül 660 000 fő."],
      ro: ["Fondat în 1550 de regele Gustav I al Suediei.", "A devenit capitala Marelui Ducat al Finlandei în 1812.", "Catedrala din Helsinki a fost finalizată în 1852.", "Gazda Jocurilor Olimpice de vară din anul 1952.", "Fortăreața Suomenlinna este sit al Patrimoniului UNESCO.", "Populație de aproximativ 660.000 de locuitori în oraș."],
      en: ["Founded in 1550 by King Gustav I of Sweden.", "Became the capital of the Grand Duchy of Finland in 1812.", "Helsinki Cathedral was completed in 1852.", "Hosted the Summer Olympic Games in 1952.", "Suomenlinna Sea Fortress is a UNESCO World Heritage site.", "Population of approximately 660,000 in the city area."],
    },
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
    descriptionAdvanced: {
      de: "Tampere ist eine bedeutende Industriestadt im Südwesten Finnlands, eingebettet zwischen den Seen Näsijärvi und Pyhäjärvi. Die Stadt entwickelte sich im 19. Jahrhundert zu einem Zentrum der Textilindustrie, was ihr den Spitznamen Manchester des Nordens einbrachte. Heute ist sie ein wichtiger Standort für Bildung und Forschung mit einer lebendigen Kulturszene und markanten Backsteinbauten.",
      hu: "Tampere jelentős iparváros Finnország délnyugati részén, a Näsijärvi és a Pyhäjärvi tavak között. A város a 19. században a textilipar központjává fejlődött, amiért Észak Manchesterének is nevezték. Napjainkban fontos oktatási és kutatási csomópont, amelyet élénk kulturális élet és jellegzetes vöröstéglás épületek jellemeznek.",
      ro: "Tampere este un oraș industrial important din sud-vestul Finlandei, situat între lacurile Näsijärvi și Pyhäjärvi. Orașul s-a dezvoltat în secolul al XIX-lea ca un centru al industriei textile, primind porecla de Manchester al Nordului. Astăzi este un centru major pentru educație și cercetare, cu o scenă culturală vibrantă și clădiri din cărămidă roșie.",
      en: "Tampere is a major industrial city in southwestern Finland, nestled between Lakes Näsijärvi and Pyhäjärvi. The city evolved in the 19th century as a hub for the textile industry, earning the nickname Manchester of the North. Today, it serves as an important center for education and research, featuring a lively cultural scene and distinctive red-brick architecture.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1779 durch König Gustav III.", "Die Stromschnelle Tammerkoski fließt durch das Stadtzentrum.", "Zweitgrößtes Stadtgebiet Finnlands nach der Hauptstadtregion.", "Heimat der ersten Glühbirne in den nordischen Ländern (1882).", "Der Aussichtsturm Näsinneula ist 168 Meter hoch.", "Beherbergt das einzige Mumin-Museum der Welt."],
      hu: ["1779-ben alapította III. Gusztáv király.", "A Tammerkoski-zúgó keresztülfolyik a városközponton.", "Finnország második legnagyobb városi területe a főváros után.", "Itt égett az első villanykörte az északi országokban (1882).", "A Näsinneula kilátótorony magassága 168 méter.", "Itt található a világ egyetlen Mumin Múzeuma."],
      ro: ["Fondat în anul 1779 de către regele Gustav al III-lea.", "Rapidele Tammerkoski traversează centrul orașului.", "A doua cea mai mare zonă urbană din Finlanda după capitală.", "Locul unde a ars primul bec electric din țările nordice (1882).", "Turnul de observație Näsinneula are o înălțime de 168 metri.", "Găzduiește singurul Muzeu Moomin din lume."],
      en: ["Founded in 1779 by King Gustav III.", "The Tammerkoski rapids flow through the city center.", "Second largest urban area in Finland after the capital region.", "Site of the first electric light bulb in the Nordic countries (1882).", "The Näsinneula observation tower is 168 meters tall.", "Home to the world's only Moomin Museum."],
    },
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
    descriptionAdvanced: {
      de: "Turku ist die älteste Stadt Finnlands und liegt an der Mündung des Flusses Aura im Südwesten des Landes. Sie wurde im 13. Jahrhundert gegründet und war bis 1812 die Hauptstadt Finnlands. Die Stadt ist bekannt für ihr reiches historisches Erbe, darunter eine mittelalterliche Burg und eine Kathedrale, und fungiert heute als wichtiges Tor zur Schärenflotte.",
      hu: "Turku Finnország legrégebbi városa, amely az Aura-folyó torkolatánál fekszik az ország délnyugati részén. A 13. században alapították, és 1812-ig Finnország fővárosa volt. A város gazdag történelmi örökségéről nevezetes, beleértve a középkori várat és a székesegyházat, napjainkban pedig fontos kapuként szolgál a szigetvilág felé.",
      ro: "Turku este cel mai vechi oraș din Finlanda, situat la gura de vărsare a râului Aura în sud-vestul țării. A fost fondat în secolul al XIII-lea și a servit drept capitală a Finlandei până în 1812. Orașul este cunoscut pentru moștenirea sa istorică bogată, inclusiv un castel medieval și o catedrală, fiind astăzi o poartă importantă către arhipelag.",
      en: "Turku is the oldest city in Finland, located at the mouth of the Aura River in the southwest. Founded in the 13th century, it served as the capital of Finland until 1812. The city is renowned for its rich historical heritage, including a medieval castle and cathedral, and currently acts as a major gateway to the surrounding archipelago.",
    },
    factsAdvanced: {
      de: ["Gegründet am Ende des 13. Jahrhunderts.", "Die Burg von Turku stammt aus dem Jahr 1280.", "Der Dom von Turku wurde 1300 geweiht.", "Sitz der ersten Universität Finnlands, gegründet 1640.", "Ein großer Brand zerstörte 1827 weite Teile der Stadt.", "Offizielle Weihnachtsstadt Finnlands seit dem Mittelalter."],
      hu: ["A 13. század végén alapították.", "A turkui vár építése 1280-ban kezdődött.", "A turkui székesegyházat 1300-ban szentelték fel.", "Finnország első egyetemének székhelye, alapítva 1640-ben.", "1827-ben egy hatalmas tűzvész elpusztította a város nagy részét.", "A középkor óta Finnország hivatalos karácsonyi városa."],
      ro: ["Fondat la sfârșitul secolului al XIII-lea.", "Castelul din Turku datează din anul 1280.", "Catedrala din Turku a fost sfințită în anul 1300.", "Sediul primei universități din Finlanda, fondată în 1640.", "Un mare incendiu a distrus majoritatea orașului în 1827.", "Orașul oficial al Crăciunului în Finlanda din Evul Mediu."],
      en: ["Founded at the end of the 13th century.", "Turku Castle dates back to the year 1280.", "Turku Cathedral was consecrated in 1300.", "Seat of Finland's first university, founded in 1640.", "A massive fire destroyed most of the city in 1827.", "Official Christmas City of Finland since the Middle Ages."],
    },
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
    descriptionAdvanced: {
      de: "Das Finnische Seengebiet ist die größte Seenplatte Europas und erstreckt sich über den zentralen und östlichen Teil Finnlands. Die Landschaft ist geprägt von Tausenden von Seen, Inseln und Kanälen, die durch dichte Nadelwälder voneinander getrennt sind. Dieses Gebiet spielt eine zentrale Rolle in der finnischen Kultur und ist ein wichtiges Zentrum für Freizeitaktivitäten und Naturtourismus.",
      hu: "A Finn-tóvidék Európa legnagyobb összefüggő tórendszere, amely Finnország középső és keleti részén terül el. A tájat tavak, szigetek és csatornák ezrei alkotják, amelyeket sűrű fenyőerdők választanak el egymástól. Ez a terület központi szerepet játszik a finn kultúrában, és a szabadidős tevékenységek, valamint a természetjárás fontos központja.",
      ro: "Regiunea lacurilor din Finlanda este cea mai mare zonă lacustră din Europa, întinzându-se în partea centrală și de est a țării. Peisajul este definit de mii de lacuri, insule și canale, separate de păduri dense de conifere. Această zonă joacă un rol central în cultura finlandeză și este un centru important pentru activități recreative și turism natural.",
      en: "The Finnish Lakeland is the largest lake district in Europe, spanning the central and eastern parts of Finland. The landscape is defined by thousands of lakes, islands, and canals, separated by dense coniferous forests. This area plays a central role in Finnish culture and serves as a major hub for recreational activities and nature-based tourism.",
    },
    factsAdvanced: {
      de: ["Beinhaltet den Saimaa-See, den größten See Finnlands.", "Es gibt über 187.000 Seen in ganz Finnland.", "Etwa 25 Prozent der Fläche des Seengebiets besteht aus Wasser.", "Heimat der vom Aussterben bedrohten Saimaa-Ringelrobbe.", "Wichtige Wasserstraße für die Holzindustrie seit Jahrhunderten.", "Höchster Punkt ist die Hügelkette Puijo in Kuopio."],
      hu: ["Itt található a Saimaa-tó, Finnország legnagyobb tava.", "Finnország egész területén több mint 187 000 tó található.", "A tóvidék területének körülbelül 25 százalékát víz borítja.", "A veszélyeztetett saimaa-i gyűrűsfóka természetes élőhelye.", "Évszázadok óta fontos vízi útvonal a fafeldolgozó ipar számára.", "Legmagasabb pontja a Puijo-hegy Kuopióban."],
      ro: ["Include lacul Saimaa, cel mai mare lac din Finlanda.", "Există peste 187.000 de lacuri în întreaga Finlandă.", "Aproximativ 25% din suprafața regiunii este acoperită de apă.", "Habitatul focăi inelate de Saimaa, specie pe cale de dispariție.", "Cale navigabilă vitală pentru industria lemnului de secole.", "Cel mai înalt punct este dealul Puijo din Kuopio."],
      en: ["Includes Lake Saimaa, the largest lake in Finland.", "There are over 187,000 lakes throughout Finland.", "Approximately 25 percent of the Lakeland area is water.", "Home to the endangered Saimaa ringed seal.", "Major waterway for the timber industry for centuries.", "Highest point is the Puijo hill in Kuopio."],
    },
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
    descriptionAdvanced: {
      de: "Das Schärenmeer vor der Südwestküste Finnlands gilt als eines der inselreichsten Gebiete der Welt. Es besteht aus zehntausenden kleinen Inseln und Felsen, die nach der letzten Eiszeit durch die postglaziale Landhebung entstanden sind. Die Region zeichnet sich durch eine einzigartige maritime Flora und Fauna sowie traditionelle Küstendörfer aus, die oft nur per Schiff erreichbar sind.",
      hu: "A Finnország délnyugati partjainál található Sziget-tenger a világ egyik szigetekben leggazdagabb területe. Több tízezer kis szigetből és sziklából áll, amelyek az utolsó jégkorszak utáni földfelszín-emelkedés következtében jöttek létre. A régiót egyedülálló tengeri növény- és állatvilág, valamint hagyományos parti falvak jellemzik, amelyek gyakran csak hajóval érhetők el.",
      ro: "Marea Arhipelagului de pe coasta de sud-vest a Finlandei este considerată una dintre zonele cu cele mai multe insule din lume. Cuprinde zeci de mii de insule mici și stânci, formate prin ridicarea post-glaciară a pământului după ultima eră glaciară. Regiunea se remarcă prin flora și fauna marină unică, precum și prin satele de coastă tradiționale, accesibile adesea doar cu barca.",
      en: "The Archipelago Sea off the southwestern coast of Finland is considered one of the most island-rich areas in the world. It consists of tens of thousands of small islands and skerries formed by post-glacial rebound after the last ice age. The region is characterized by unique maritime flora and fauna and traditional coastal villages, often accessible only by boat.",
    },
    factsAdvanced: {
      de: ["Besteht aus schätzungsweise über 40.000 Inseln.", "Gehört zum größten Schärengarten der Ostsee.", "Das Land hebt sich jährlich um etwa 4 bis 5 Millimeter.", "Beherbergt den Nationalpark Schärenmeer, gegründet 1983.", "Wichtiger Lebensraum für Seeadler und Eiderenten.", "Die Åland-Inseln bilden den westlichen Teil des Arhipels."],
      hu: ["Becslések szerint több mint 40 000 szigetből áll.", "A Balti-tenger legnagyobb szigetvilágának része.", "A szárazföld évente körülbelül 4-5 millimétert emelkedik.", "Itt található a Sziget-tenger Nemzeti Park, alapítva 1983-ban.", "Fontos élőhelye a rétisasoknak és a pehelyrécéknek.", "Az Åland-szigetek alkotják a szigetvilág nyugati részét."],
      ro: ["Format din peste 40.000 de insule conform estimărilor.", "Parte a celui mai mare arhipelag din Marea Baltică.", "Pământul se ridică cu aproximativ 4-5 milimetri pe an.", "Găzduiește Parcul Național al Arhipelagului, fondat în 1983.", "Habitat important pentru vulturi codalb și rațe eider.", "Insulele Åland formează partea vestică a arhipelagului."],
      en: ["Consists of an estimated total of over 40,000 islands.", "Part of the largest archipelago in the Baltic Sea.", "The land rises by approximately 4 to 5 millimeters annually.", "Home to the Archipelago National Park, established in 1983.", "Crucial habitat for white-tailed eagles and eider ducks.", "The Åland Islands form the western portion of the archipelago."],
    },
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
    descriptionAdvanced: {
      de: "Savonlinna ist eine historische Stadt im Herzen des finnischen Seengebiets, bekannt für ihre Lage auf mehreren Inseln zwischen den Seen Haukivesi und Pihlajavesi. Das Wahrzeichen der Stadt ist die mittelalterliche Burg Olavinlinna, die als eine der besterhaltenen Festungen Nordeuropas gilt. Savonlinna ist zudem ein international bedeutendes Kulturzentrum, vor allem durch die jährlich stattfindenden Opernfestspiele.",
      hu: "Savonlinna történelmi város a Finn-tóvidék szívében, amely a Haukivesi és a Pihlajavesi tavak közötti szigeteken fekszik. A város jelképe a középkori Olavinlinna vára, amely Észak-Európa egyik legjobb állapotban fennmaradt erődítménye. Savonlinna emellett nemzetközileg jelentős kulturális központ, elsősorban az évente megrendezett operafesztiválja révén.",
      ro: "Savonlinna este un oraș istoric în inima regiunii lacurilor din Finlanda, cunoscut pentru amplasarea sa pe mai multe insule între lacurile Haukivesi și Pihlajavesi. Simbolul orașului este castelul medieval Olavinlinna, considerat una dintre cele mai bine conservate fortărețe din Europa de Nord. Savonlinna este, de asemenea, un centru cultural internațional, renumit pentru festivalul de operă anual.",
      en: "Savonlinna is a historic city in the heart of the Finnish Lakeland, known for its location across several islands between Lakes Haukivesi and Pihlajavesi. The city's landmark is the medieval Olavinlinna Castle, regarded as one of Northern Europe's best-preserved fortifications. Savonlinna is also an internationally significant cultural center, primarily due to its opera festival.",
    },
    factsAdvanced: {
      de: ["Die Burg Olavinlinna wurde im Jahr 1475 gegründet.", "Stadtrechte wurden Savonlinna im Jahr 1639 verliehen.", "Die Opernfestspiele finden seit 1912 im Burghof statt.", "Liegt im Saimaa-Seengebiet im Osten Finnlands.", "Beherbergt die größte Holzkirche der Welt in Kerimäki (nahebei).", "Ein wichtiger Hafen für Dampfschiffe auf dem Saimaa-See."],
      hu: ["Olavinlinna várát 1475-ben alapították.", "Savonlinna 1639-ben kapott városi rangot.", "Az operafesztivált 1912 óta rendezik meg a várudvaron.", "Kelet-Finnországban, a Saimaa-tóvidéken található.", "A közelben, Kerimäkiben található a világ legnagyobb fatemploma.", "A Saimaa-tavon közlekedő gőzhajók egyik fontos kikötője."],
      ro: ["Castelul Olavinlinna a fost fondat în anul 1475.", "Savonlinna a primit drepturi de oraș în anul 1639.", "Festivalul de Operă are loc în curtea castelului din 1912.", "Situat în regiunea lacului Saimaa din estul Finlandei.", "Găzduiește cea mai mare biserică de lemn din lume la Kerimäki.", "Un port important pentru navele cu aburi de pe lacul Saimaa."],
      en: ["Olavinlinna Castle was founded in the year 1475.", "Savonlinna was granted city rights in 1639.", "The Opera Festival has been held in the castle courtyard since 1912.", "Located in the Saimaa lake district of eastern Finland.", "Home to the world's largest wooden church in nearby Kerimäki.", "A major port for steamships operating on Lake Saimaa."],
    },
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
    descriptionAdvanced: {
      de: "Espoo ist die zweitgrößte Stadt Finnlands und ein herber Bestandteil der Metropolregion Helsinki. Die Stadt ist bekannt für ihre dezentrale Struktur, die aus fünf verschiedenen Stadtzentren besteht, die durch ausgedehnte Naturgebiete und Parks miteinander verbunden sind. Espoo gilt als bedeutendes Zentrum für Hochtechnologie und Bildung und beherbergt den Hauptsitz zahlreicher internationaler Unternehmen.",
      hu: "Espoo Finnország második legnagyobb városa, és a helsinki metropolisz övezet szerves része. A város híres decentralizált szerkezetéről, amely öt különböző városközpontból áll, amelyeket kiterjedt természetvédelmi területek és parkok kötnek össze. Espoo a csúcstechnológia és az oktatás jelentős központja, számos nemzetközi vállalat székhelyének ad otthont.",
      ro: "Espoo este al patrulea oraș ca mărime din Finlanda și o parte integrantă a zonei metropolitane Helsinki. Orașul este cunoscut pentru structura sa descentralizată, formată din cinci centre urbane distincte, conectate prin zone naturale și parcuri vaste. Espoo este un centru major pentru înaltă tehnologie și educație, găzduind sediile a numeroase companii internaționale.",
      en: "Espoo is the second-largest city in Finland and an integral part of the Helsinki metropolitan area. The city is known for its decentralized structure, consisting of five distinct urban centers connected by extensive natural areas and parks. Espoo serves as a major hub for high technology and education, hosting the headquarters of numerous international corporations.",
    },
    factsAdvanced: {
      de: ["Die Steinkirche von Espoo stammt aus den 1480er Jahren.", "Die Aalto-Universität hat ihren Hauptcampus in Otaniemi.", "Der Nationalpark Nuuksio liegt teilweise im Stadtgebiet.", "Beherbergt das EMMA – Espoo Museum of Modern Art.", "Wurde im Jahr 1972 offiziell zur Stadt ernannt.", "Hauptsitz des Technologieunternehmens Nokia befindet sich hier."],
      hu: ["Espoo kőtemploma az 1480-as évekből származik.", "Az Aalto Egyetem fő campusa Otaniemiben található.", "A Nuuksio Nemzeti Park részben a város területén fekszik.", "Itt található az EMMA – Espooi Modern Művészeti Múzeum.", "Hivatalosan 1972-ben kapott városi rangot.", "Itt található a Nokia technológiai vállalat székhelye."],
      ro: ["Biserica de piatră din Espoo datează din anii 1480.", "Campusul principal al Universității Aalto se află la Otaniemi.", "Parcul Național Nuuksio este situat parțial în oraș.", "Găzduiește EMMA – Muzeul de Artă Modernă din Espoo.", "A primit oficial statutul de oraș în anul 1972.", "Sediul central al companiei de tehnologie Nokia este aici."],
      en: ["The Espoo Cathedral dates back to the 1480s.", "Aalto University has its main campus in Otaniemi.", "Nuuksio National Park is partially located within the city.", "Home to EMMA – Espoo Museum of Modern Art.", "Officially attained city status in the year 1972.", "Headquarters of the technology company Nokia is located here."],
    },
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
    descriptionAdvanced: {
      de: "Oulu liegt an der Mündung des Flusses Oulujoki in den Bottnischen Meerbusen und ist die größte Stadt in Nordfinnland. Sie wurde 1605 gegründet und hat sich von einem Zentrum für Teerhandel zu einem führenden Technologiestandort entwickelt. Oulu ist bekannt für seine Universität, eine innovative Forschungsszene und eine hohe Dichte an Fahrradwegen, die die Stadt das ganze Jahr über prägen.",
      hu: "Oulu az Oulujoki-folyó torkolatánál, a Botteni-öböl partján fekszik, és Észak-Finnország legnagyobb városa. 1605-ben alapították, és a kátránykereskedelem központjából vezető technológiai csomóponttá fejlődött. Oulu híres egyeteméről, innovatív kutatói közösségéről és kiterjedt kerékpárút-hálózatáról, amelyet egész évben intenzíven használnak.",
      ro: "Oulu este situat la gura de vărsare a râului Oulujoki în Golful Botnic și este cel mai mare oraș din nordul Finlandei. Fondat în 1605, a evoluat de la un centru de comerț cu gudron la un hub tehnologic de vârf. Oulu este cunoscut pentru universitatea sa, scena de cercetare inovatoare și rețeaua densă de piste de biciclete utilizate tot anul.",
      en: "Oulu is located at the mouth of the Oulujoki River on the Gulf of Bothnia and is the largest city in northern Finland. Founded in 1605, it has evolved from a center of tar trade into a leading technology hub. Oulu is known for its university, innovative research scene, and an extensive network of bicycle paths utilized throughout the entire year.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1605 durch König Karl IX. von Schweden.", "War im 19. Jahrhundert weltweit führend im Teerexport.", "Die Universität Oulu wurde im Jahr 1958 gegründet.", "Gastgeber der jährlichen Luftgitarren-Weltmeisterschaft.", "Besitzt eines der umfangreichsten Radwegenetze Europas.", "Der Marktplatz beherbergt die berühmte Polizistenstatue (Toripolliisi)."],
      hu: ["1605-ben alapította IX. Károly svéd király.", "A 19. században világelső volt a kátrányexportban.", "Az Oului Egyetemet 1958-ben alapították.", "Évente itt rendezik meg a Léggitár-világbajnokságot.", "Európa egyik legkiterjedtebb kerékpárút-hálózatával rendelkezik.", "A piactéren áll a híres rendőrszobor (Toripolliisi)."],
      ro: ["Fondat în 1605 de către regele Carol al IX-lea al Suediei.", "A fost lider mondial în exportul de gudron în secolul XIX.", "Universitatea din Oulu a fost înființată în anul 1958.", "Gazda campionatului mondial anual de chitară imaginară.", "Deține una dintre cele mai extinse rețele de ciclism din Europa.", "Piața centrală găzduiește faimoasa statuie Toripolliisi."],
      en: ["Founded in 1605 by King Charles IX of Sweden.", "Was a world leader in tar exports during the 19th century.", "The University of Oulu was established in 1958.", "Hosts the annual Air Guitar World Championships.", "Features one of the most extensive bicycle networks in Europe.", "The market square houses the famous Toripolliisi statue."],
    },
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
    descriptionAdvanced: {
      de: "Vantaa ist die viertgrößte Stadt Finnlands und ein integraler Bestandteil der Metropolregion Helsinki. Sie wurde im Jahr 1974 offiziell zur Stadt erklärt, obwohl ihre Geschichte als Kirchspiel Helsinki (Helsingin pitäjä) mehrere Jahrhunderte zurückreicht. Die Stadt ist weltweit vor allem durch den Flughafen Helsinki-Vantaa bekannt, der das wichtigste internationale Drehkreuz des Landes ist. Geographisch liegt Vantaa am gleichnamigen Fluss Vantaanjoki, dessen Ufer heute beliebte Erholungsgebiete sind. Zu den bedeutendsten kulturellen Einrichtungen gehört das Wissenschaftszentrum Heureka, das mit seinen interaktiven Ausstellungen jährlich Hunderttausende Besucher anzieht. Vantaa zeichnet sich durch eine moderne Infrastruktur, bedeutende Logistikzentren und eine wachsende Zahl an Hightech-Unternehmen aus. Gleichzeitig bewahrt die Stadt historische Stätten wie die St.-Laurentius-Kirche aus dem 15. Jahrhundert, die das älteste Gebäude in der Region ist. Die Vielfalt der Stadtteile, von urbanen Zentren wie Tikkurila bis hin zu ruhigen Wohngebieten, spiegelt die dynamische Entwicklung Finnlands wider.",
      hu: "Vantaa Finnország negyedik legnépesebb városa, és a helsinki agglomeráció szerves része. Hivatalosan 1974-ben kapott városi rangot, bár története Helsinki egyházközségként (Helsingin pitäjä) több évszázadra nyúlik vissza. A város világszerte leginkább a Helsinki-Vantaa repülőtérről ismert, amely az ország legfontosabb nemzetközi csomópontja. Földrajzilag Vantaa a hasonló nevű Vantaanjoki folyó mentén fekszik, amelynek partjai ma népszerű üdülőövezetek. A legjelentősebb kulturális intézmények közé tartozik a Heureka Tudományos Központ, amely interaktív kiállításaival évente több százezer látogatót vonz. Vantaát modern infrastruktúra, jelentős logisztikai központok és növekvő számú csúcstechnológiai vállalat jellemzi. Ugyanakkor a város megőrzi történelmi helyszíneit is, mint például a 15. századi Szent Lőrinc-templomot, amely a régió legrégebbi épülete. A városrészek sokszínűsége, a Tikkurila-szerű városközpontoktól a csendes lakóövezetekig, hűen tükrözi Finnország dinamikus fejlődését.",
      ro: "Vantaa este al patrulea oraș ca mărime din Finlanda și o parte integrantă a zonei metropolitane Helsinki. A fost declarat oficial oraș în anul 1974, deși istoria sa ca parohie Helsinki (Helsingin pitäjä) datează de câteva secole. Orașul este cunoscut la nivel mondial în special pentru Aeroportul Helsinki-Vantaa, care este principalul hub internațional al țării. Din punct de vedere geografic, Vantaa este situat pe râul cu același nume, Vantaanjoki, ale cărui maluri sunt astăzi zone de recreere populare. Printre cele mai importante instituții culturale se numără Centrul de Știință Heureka, care atrage anual sute de mii de vizitatori cu expozițiile sale interactive. Vantaa se caracterizează printr-o infrastructură modernă, centre logistice importante și un număr tot mai mare de companii high-tech. În același timp, orașul păstrează situri istorice precum Biserica Sfântul Laurențiu din secolul al XV-lea, care este cea mai veche clădire din regiune. Diversitatea cartierelor reflectă dezvoltarea dinamică a Finlandei.",
      en: "Vantaa is the fourth largest city in Finland and an integral part of the Helsinki Metropolitan Area. It was officially granted city status in 1974, although its history as the Parish of Helsinki (Helsingin pitäjä) dates back several centuries. The city is globally recognized for housing the Helsinki-Vantaa Airport, the country's primary international gateway. Geographically, Vantaa is situated along the Vantaa River, whose banks are now popular recreational areas. One of the most significant cultural institutions is the Heureka Science Centre, which attracts hundreds of thousands of visitors annually with its interactive exhibits. Vantaa is characterized by its modern infrastructure, major logistics hubs, and a growing number of high-tech companies. Simultaneously, the city preserves historical sites such as the 15th-century St. Lawrence Church, which is the oldest building in the region. The diversity of its districts, from urban centers like Tikkurila to quiet residential areas, reflects the dynamic development of Finland.",
    },
    factsAdvanced: {
      de: ["Vantaa wurde 1974 offiziell zur Stadt ernannt.", "Der Flughafen Helsinki-Vantaa (HEL) wurde 1952 für die Olympischen Spiele eröffnet.", "Die St.-Laurentius-Kirche stammt aus der Mitte des 15. Jahrhunderts.", "Das Wissenschaftszentrum Heureka wurde 1989 eröffnet.", "Die Stadt hat über 240.000 Einwohner (Stand 2023).", "Tikkurila ist das administrative und kommerzielle Zentrum von Vantaa."],
      hu: ["Vantaát 1974-ben nyilvánították hivatalosan várossá.", "A Helsinki-Vantaa repülőteret (HEL) 1952-ben nyitották meg az olimpiára.", "A Szent Lőrinc-templom a 15. század közepéről származik.", "A Heureka Tudományos Központ 1989-ben nyílt meg.", "A város lakossága meghaladja a 240 000 főt (2023-as adat).", "Tikkurila Vantaa adminisztratív és kereskedelmi központja."],
      ro: ["Vantaa a fost declarat oficial oraș în 1974.", "Aeroportul Helsinki-Vantaa (HEL) a fost deschis în 1952 pentru Jocurile Olimpice.", "Biserica Sfântul Laurențiu datează de la mijlocul secolului al XV-lea.", "Centrul de Știință Heureka a fost inaugurat în 1989.", "Orașul are peste 240.000 de locuitori (date din 2023).", "Tikkurila este centrul administrativ și comercial al orașului Vantaa."],
      en: ["Vantaa was officially designated as a city in 1974.", "Helsinki-Vantaa Airport (HEL) was opened in 1952 for the Olympics.", "St. Lawrence Church dates back to the mid-15th century.", "The Heureka Science Centre was opened in 1989.", "The city has a population of over 240,000 (as of 2023).", "Tikkurila is the administrative and commercial center of Vantaa."],
    },
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
    descriptionAdvanced: {
      de: "Lahti liegt am südlichen Ufer des Vesijärvi-Sees und gilt als eines der bedeutendsten Zentren Finnlands für Wintersport und modernes Design. Die Stadt erhielt 1905 das Stadtrecht und entwickelte sich schnell zu einem industriellen Knotenpunkt, besonders durch den Bau der Eisenbahnverbindung nach St. Petersburg im späten 19. Jahrhundert. International bekannt ist Lahti vor allem für die Skisprung-Anlage am Salpausselkä, wo regelmäßig Weltcup-Wettbewerbe ausgetragen werden. Ein architektonisches Highlight ist die 2000 eröffnete Sibelius-Halle, ein aus Holz errichtetes Konzerthaus mit herausragender Akustik. Die Stadt verfolgt eine ambitionierte Umweltpolitik und wurde 2021 zur Umwelthauptstadt Europas ernannt, was ihren Fokus auf Nachhaltigkeit unterstreicht. Geografisch bildet Lahti das Tor zum finnischen Seenland und verbindet urbane Infrastruktur mit der unmittelbaren Nähe zur unberührten Natur der Salpausselkä-Endmoräne.",
      hu: "Lahti a Vesijärvi-tó déli partján fekszik, és Finnország egyik legfontosabb téli sport- és ipari központjaként ismert. A település 1905-ben kapott városi rangot, fejlődését pedig jelentősen felgyorsította a Szentpétervár felé vezető vasútvonal kiépítése a 19. század végén. Világszerte a Salpausselkä sáncairól híres, ahol rendszeresen rendeznek síugró világkupa-versenyeket és északi összetett eseményeket. A város kulturális életének központja a 2000-ben átadott Sibelius-terem, amely fából készült modern építészetével és kiváló akusztikájával vívott ki nemzetközi elismerést. Lahti elkötelezett a környezetvédelem mellett, amit jól példáz, hogy 2021-ben elnyerte az Európa Zöld Fővárosa címet. Földrajzi elhelyezkedése révén a város a finn tóvidék déli kapuja, ahol a modern városi környezet szorosan összefonódik a Salpausselkä jégkorszaki morénáinak természeti kincseivel.",
      ro: "Lahti este situat pe malul sudic al lacului Vesijärvi și reprezintă unul dintre cele mai importante centre ale Finlandei pentru sporturi de iarnă și design modern. Orașul a primit drepturi municipale în anul 1905, dezvoltându-se rapid ca un nod industrial major după construcția căii ferate către Sankt Petersburg la sfârșitul secolului al XIX-lea. Pe plan internațional, Lahti este renumit pentru complexul de sărituri cu schiurile de la Salpausselkä, care găzduiește frecvent competiții de Cupă Mondială. Un punct de referință arhitectural este Sala Sibelius, inaugurată în anul 2000, o clădire de concerte construită din lemn, celebră pentru acustica sa excepțională. Orașul este lider în politici de mediu, fiind desemnat Capitala Verde Europeană în 2021 datorită eforturilor sale de sustenabilitate. Din punct de vedere geografic, Lahti este poarta de intrare către regiunea lacurilor finlandeze, îmbinând infrastructura urbană cu peisajele naturale ale morenei glaciare Salpausselkä.",
      en: "Lahti is situated on the southern shores of Lake Vesijärvi and serves as one of Finland's premier centers for winter sports and industrial design. The city was granted municipal rights in 1905, having grown rapidly following the completion of the railway connection to St. Petersburg in the late 19th century. Internationally, Lahti is most famous for the Salpausselkä ski jump complex, a recurring venue for the FIS Nordic World Ski Championships. A significant architectural landmark is the Sibelius Hall, completed in 2000, which is an innovative wooden concert hall renowned for its world-class acoustics. The city has become a pioneer in environmental sustainability, earning the title of European Green Capital in 2021 for its carbon-neutral goals. Geographically, Lahti acts as a gateway to the Finnish Lake District, characterized by the unique topography of the Salpausselkä ridges formed during the last Ice Age.",
    },
    factsAdvanced: {
      de: ["Lahti wurde am 1. November 1905 offiziell zur Stadt erklärt.", "Die Stadt war bereits siebenmal Gastgeber der Nordischen Skiweltmeisterschaften.", "Die Sibelius-Halle besteht aus über 1000 Kubikmetern finnischem Fichtenholz.", "Im Jahr 2021 hielt Lahti den Titel der Umwelthauptstadt Europas.", "Die Entfernung zur Hauptstadt Helsinki beträgt etwa 100 Kilometer nördlich.", "Der Fernsehturm von Lahti erreicht eine beachtliche Höhe von 150 Metern."],
      hu: ["Lahti 1905. november 1-jén kapott hivatalosan városi rangot.", "A város eddig hét alkalommal adott otthont az északisí-világbajnokságnak.", "A Sibelius-terem építéséhez több mint 1000 köbméter fenyőfát használtak fel.", "2021-ben Lahti viselte az Európa Zöld Fővárosa kitüntető címet.", "A város Helsinki központjától körülbelül 100 kilométerre északra fekszik.", "A helyi televíziótorony magassága eléri a 150 métert."],
      ro: ["Lahti a fost declarat oficial oraș la data de 1 noiembrie 1905.", "Orașul a găzduit Campionatele Mondiale de Schi Nordic de șapte ori.", "Sala Sibelius a fost construită folosind peste 1000 de metri cubi de lemn.", "În anul 2021, Lahti a deținut titlul de Capitală Verde Europeană.", "Distanța față de capitala Helsinki este de aproximativ 100 de kilometri.", "Turnul de televiziune din Lahti are o înălțime de 150 de metri."],
      en: ["Lahti was officially incorporated as a city on November 1, 1905.", "The city has hosted the FIS Nordic World Ski Championships seven times.", "The Sibelius Hall features over 1,000 cubic meters of Finnish spruce wood.", "In 2021, Lahti served as the European Green Capital.", "The city is located approximately 100 kilometers north of Helsinki.", "The Lahti radio masts, built in 1927, stand at a height of 150 meters."],
    },
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
    descriptionAdvanced: {
      de: "Jyväskylä liegt im Herzen der finnischen Seenplatte am nördlichen Ufer des Päijänne-Sees und ist als 'Athen Finnlands' bekannt. Diese Bezeichnung verdankt die Stadt ihrer langen Tradition als Bildungszentrum; hier wurde 1863 das erste finnischsprachige Lehrerseminar gegründet. Die Stadt ist untrennbar mit dem Werk des Architekten Alvar Aalto verbunden, der hier aufwuchs und 28 Gebäude hinterließ, darunter die Universität und das Rathaus. Seit 1837 besteht die Stadt unter ihrem heutigen Namen, nachdem sie auf Befehl von Zar Nikolaus I. gegründet wurde. Jyväskylä ist zudem ein Zentrum des Motorsports und beherbergt jährlich die finnische Rallye, einen Lauf der Weltmeisterschaft. Die urbane Struktur zeichnet sich durch eine moderne Fußgängerzone und die Integration zahlreicher Parks aus. Als wachsende Universitätsstadt spielt Jyväskylä eine Schlüsselrolle in der finnischen Forschungs- und Technologielandschaft.",
      hu: "Jyväskylä a finn tóvidék szívében, a Päijänne-tó északi partján található, és gyakran nevezik 'Finnország Athénjának'. Ez a megtisztelő név a város oktatási hagyományaira utal, hiszen 1863-ban itt alapították az első finn nyelvű tanárképző szemináriumot. A város építészeti arculatát meghatározza Alvar Aalto öröksége, aki itt töltötte fiatal éveit, és 28 épületet tervezett a városban, köztük az egyetemi kampuszt is. A várost 1837-ben alapította I. Miklós orosz cár, és azóta Közép-Finnország adminisztratív központjává vált. Jyväskylä a technikai sportok kedvelői körében is népszerű, mivel minden évben itt rendezik meg a Finn Rallyt, a világbajnokság egyik leggyorsabb futamát. A modern városközpont tágas sétálóutcákkal és kiterjedt parkrendszerrel rendelkezik, harmonikus egyensúlyt teremtve az épített környezet és a természet között.",
      ro: "Jyväskylä este situat în inima regiunii lacurilor finlandeze, pe malul nordic al lacului Päijänne, fiind cunoscut drept 'Atena Finlandei'. Această denumire reflectă statutul său istoric de centru educațional, aici fiind înființat în 1863 primul seminar pentru profesori în limba finlandeză. Orașul este strâns legat de moștenirea arhitectului Alvar Aalto, care a proiectat 28 de clădiri în zonă, inclusiv complexul universitar și muzeul care îi poartă numele. Fondat în 1837 prin decretul țarului Nicolae I, orașul a evoluat dintr-o mică așezare într-un hub tehnologic și cultural modern. Jyväskylä găzduiește anual Raliul Finlandei, o etapă celebră a Campionatului Mondial de Raliuri, atrăgând mii de fani ai sporturilor cu motor. Infrastructura urbană este marcată de zone pietonale extinse și o integrare armonioasă a spațiilor verzi, făcându-l unul dintre cele mai populare orașe pentru locuit din Finlanda.",
      en: "Jyväskylä is located in the heart of the Finnish Lake District at the northern end of Lake Päijänne and is often referred to as the 'Athens of Finland'. This nickname stems from its role as a pioneer in education, being the site of the first Finnish-language teacher seminary founded in 1863. The city's landscape is profoundly influenced by the work of legendary architect Alvar Alto, who designed 28 buildings in the area, including the University of Jyväskylä campus. Established in 1837 by order of Tsar Nicholas I, the city has grown into a significant administrative and commercial hub for Central Finland. Jyväskylä is also globally recognized as the home of Rally Finland, a fast-paced event in the World Rally Championship. Today, it is a vibrant university city known for its commitment to technology, innovation, and a high quality of life integrated with surrounding forest and water landscapes.",
    },
    factsAdvanced: {
      de: ["Jyväskylä wurde im Jahr 1837 offiziell als Stadt gegründet.", "Das Alvar-Aalto-Museum beherbergt Dokumente zu 28 lokalen Projekten des Architekten.", "In der Stadt wurde 1863 das erste finnischsprachige Gymnasium eröffnet.", "Die jährliche Finnland-Rallye zieht rund 200.000 Zuschauer in die Region.", "Die Universität von Jyväskylä wurde in ihrer heutigen Form 1966 gegründet.", "Der Wasserturm Vesilinna bietet einen Panoramablick aus 30 Metern Höhe."],
      hu: ["Jyväskylä városát hivatalosan 1837-ben alapították.", "A városban 28 Alvar Aalto által tervezett épület található.", "Itt nyílt meg 1863-ban az első finn tannyelvű középiskola.", "A Finn Rally évente közel 200 000 látogatót vonz a környékre.", "Az egyetemi kampusz jelenlegi formájában 1966 óta működik.", "A Vesilinna víztorony kilátója 30 méter magasból kínál panorámát."],
      ro: ["Orașul Jyväskylä a fost fondat oficial în anul 1837.", "Există 28 de proiecte semnate de Alvar Aalto în zona metropolitană.", "Primul liceu cu predare în limba finlandeză a fost deschis aici în 1863.", "Raliul Finlandei atrage anual circa 200.000 de spectatori în regiune.", "Universitatea din Jyväskylä a primit statutul actual în anul 1966.", "Turnul de apă Vesilinna are o platformă de observație la 30 de metri."],
      en: ["Jyväskylä was officially established as a town in 1837.", "The city features a record 28 buildings designed by Alvar Aalto.", "The first Finnish-language secondary school was founded here in 1863.", "Rally Finland attracts approximately 200,000 spectators each year.", "The University of Jyväskylä achieved university status in 1966.", "The Vesilinna water tower provides a viewpoint at 30 meters high."],
    },
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
    descriptionAdvanced: {
      de: "Kuopio liegt im Osten Finnlands auf einer Halbinsel im See Kallavesi und ist das kulturelle Zentrum der Region Nordsavo. Die Stadt wurde 1775 von Gustav III. von Schweden gegründet, erhielt aber erst 1782 die vollen Stadtrechte. Ein markantes Wahrzeichen ist der Puijo-Turm, der auf dem gleichnamigen Hügel steht und einen weiten Blick über die finnische Seenlandschaft bietet. Kuopio ist bekannt für seine kulinarischen Traditionen, insbesondere den Kalakukko, eine in Brot eingebackene Fischspezialität, die auf dem belebten Marktplatz verkauft wird. Die Stadt hat sich zu einem wichtigen Bildungs- und Forschungsstandort entwickelt, insbesondere in den Bereichen Gesundheit und Umweltwissenschaften durch die Universität Ostfinnland. Geografisch ist Kuopio von tiefen Wäldern und Wasserwegen umgeben, was den Tourismus und die Holzindustrie begünstigt. Die Architektur im Stadtzentrum mischt historische Holzhäuser mit modernen Verwaltungsgebäuden aus dem 20. Jahrhundert.",
      hu: "Kuopio Kelet-Finnországban, a Kallavesi-tó partján fekvő félszigeten terül el, és Észak-Savo régió kulturális és gazdasági központja. A várost 1775-ben III. Gusztáv svéd király alapította, bár a teljes városi kiváltságokat csak 1782-ben nyerte el. Legismertebb jelképe a Puijo-torony, amely a város melletti dombon magasodik, és páratlan kilátást nyújt a tavakkal tarkított tájra. Kuopio gasztronómiai hagyományairól is nevezetes, különösen a kalakukko nevű halas-húsos süteményéről, amely a helyi piac védjegye. A város jelentős oktatási központ, a Kelet-finnországi Egyetem révén az orvostudomány és a környezetvédelem területén végeznek nemzetközi hírű kutatásokat. Földrajzi fekvését a sűrű erdők és a kiterjedt vízrendszerek határozzák meg, ami kedvez a vízi turizmusnak és a fafeldolgozásnak. A belváros arculatát a történelmi faházak és a modern, 20. századi épületek érdekes keveréke adja.",
      ro: "Kuopio este situat în estul Finlandei, pe o peninsulă a lacului Kallavesi, fiind inima culturală și administrativă a regiunii Savonia de Nord. Orașul a fost fondat în 1775 de regele Gustav al III-lea al Suediei, primind drepturi depline de oraș în anul 1782. Cel mai recognoscibil punct de reper este Turnul Puijo, situat pe dealul cu același nume, oferind o panoramă vastă asupra labirintului de ape și păduri. Kuopio este faimos pentru tradițiile sale culinare, în special pentru 'kalakukko', o plăcintă tradițională cu pește, care este simbolul pieței centrale locale. Orașul a devenit un centru major de educație și cercetare, găzduind Universitatea Finlandei de Est, specializată în medicină și științe de mediu. Din punct de vedere geografic, regiunea este dominată de căi navigabile complexe și păduri boreale, susținând industria lemnului și turismul. Arhitectura centrului combină armonios casele vechi din lemn cu structurile urbane moderne ale secolului XX.",
      en: "Kuopio is located in Eastern Finland on a peninsula surrounded by Lake Kallavesi and serves as the cultural heart of the Northern Savonia region. The city was founded in 1775 by King Gustav III of Sweden, though it officially received its charter in 1782. Its most famous landmark is the Puijo Tower, perched on Puijo Hill, providing an iconic view of the fragmented Finnish lake scenery. Kuopio is celebrated for its local gastronomy, particularly the 'kalakukko' fish pastry, which remains a staple of the city’s vibrant marketplace. The city is a significant educational hub, home to the University of Eastern Finland, which excels in health and environmental sciences. Geographically, Kuopio is defined by its extensive waterways and surrounding boreal forests, making it a center for both the timber industry and inland navigation. The urban layout features a mix of historical 19th-century wooden buildings and functionalist architecture from the 1900s.",
    },
    factsAdvanced: {
      de: ["Kuopio wurde im Jahr 1775 offiziell gegründet.", "Der Puijo-Turm wurde 1963 fertiggestellt und ist 75 Meter hoch.", "Die Stadtfläche besteht zu etwa 20 Prozent aus Wasser.", "In Kuopio findet jährlich seit 1970 das internationale Tanzfestival statt.", "Die Markthalle am Marktplatz wurde bereits im Jahr 1902 eröffnet.", "Die Universität Ostfinnland hat hier einen Campus mit über 7000 Studenten."],
      hu: ["Kuopio városát hivatalosan 1775-ben alapították.", "A jelenlegi Puijo-torony 1963-ban készült el és 75 méter magas.", "A város területének körülbelül 20 százalékát víz borítja.", "1970 óta minden évben Kuopio rendezi a nemzetközi táncfesztivált.", "A városi vásárcsarnok 1902 óta fogadja a vásárlókat.", "A Kelet-finnországi Egyetem kuopioi kampuszán több mint 7000 diák tanul."],
      ro: ["Orașul Kuopio a fost fondat oficial în anul 1775.", "Turnul Puijo actual a fost finalizat în 1963 și are 75 de metri.", "Circa 20% din suprafața orașului este acoperită de apă.", "Festivalul Internațional de Dans din Kuopio are loc anual din 1970.", "Hala pieței centrale din oraș a fost deschisă în anul 1902.", "Campusul universitar local deservește peste 7.000 de studenți."],
      en: ["Kuopio was officially founded as a town in 1775.", "The current Puijo Tower was completed in 1963 and stands 75 meters tall.", "Water covers approximately 20 percent of the city's total area.", "The Kuopio Dance Festival has been held annually since 1970.", "The historic market hall in the city center was opened in 1902.", "The University of Eastern Finland campus in Kuopio has over 7,000 students."],
    },
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
    descriptionAdvanced: {
      de: "Joensuu ist die Hauptstadt der Region Nordkarelien und liegt an der Mündung des Flusses Pielisjoki in den See Pyhäselkä. Die Stadt wurde 1848 von Zar Nikolaus I. von Russland gegründet und entwickelte sich dank ihrer strategischen Lage schnell zu einem bedeutenden Zentrum für den Holzhandel. Im späten 19. Jahrhundert war Joensuu einer der wichtigsten Exporthäfen für finnisches Holz, begünstigt durch den Bau des Saimaa-Kanals. Heute ist die Stadt vor allem als lebendiges Bildungszentrum bekannt, in dem ein großer Teil der Bevölkerung aus Studenten der Universität Ostfinnland besteht. Kulturell ist Joensuu eng mit der karelischen Identität verbunden, was sich in der lokalen Küche und dem Kunsthandwerk widerspiegelt. Ein jährliches Highlight ist das Ilosaarirock-Festival, eines der ältesten Rockfestivals Finnlands. Die Umgebung bietet weite Wildnisgebiete, die für die Forstwirtschaft und den Outdoor-Tourismus von zentraler Bedeutung sind.",
      hu: "Joensuu Észak-Karélia tartomány székhelye, amely a Pielisjoki folyó torkolatánál, a Pyhäselkä-tó partján fekszik. A várost 1848-ban I. Miklós orosz cár alapította, és stratégiai elhelyezkedésének köszönhetően gyorsan a faipar és a kereskedelem központjává vált. A 19. század végén Joensuu Finnország egyik legfontosabb exportkikötője volt, amit a Saimaa-csatorna megnyitása tovább ösztönzött. Napjainkban a város vibráló egyetemi központként ismert, ahol a lakosság jelentős részét a Kelet-finnországi Egyetem hallgatói teszik ki. Kulturális szempontból Joensuu szorosan kötődik a karéliai hagyományokhoz, ami az építészetben és a helyi gasztronómiában is megmutatkozik. Itt rendezik meg minden évben az Ilosaarirock fesztivált, amely az ország egyik legrégebbi és legnépszerűbb könnyűzenei eseménye. A várost övező hatalmas erdőségek a finn erdőgazdálkodás és a természetközeli turizmus alapját képezik.",
      ro: "Joensuu este capitala regiunii Carelia de Nord, situat la gura de vărsare a râului Pielisjoki în lacul Pyhäselkä. Orașul a fost fondat în 1848 de țarul Nicolae I al Rusiei, dezvoltându-se rapid ca un centru vital pentru industria lemnului datorită accesului la căile navigabile. La sfârșitul secolului al XIX-lea, Joensuu a devenit unul dintre cele mai importante porturi de export din Finlanda, beneficiind de conexiunea prin Canalul Saimaa. În prezent, orașul este cunoscut ca un hub educațional dinamic, având o populație tânără datorită prezenței Universității Finlandei de Est. Identitatea culturală locală este profund marcată de tradițiile careliene, vizibile în gastronomie și festivalurile folclorice. Anual, orașul găzduiește Ilosaarirock, unul dintre cele mai vechi festivaluri de muzică rock din țară. Geografia zonei este definită de păduri vaste și râuri repezi, fiind un punct strategic pentru cercetarea forestieră la nivel european.",
      en: "Joensuu is the capital of the North Karelia region, located at the mouth of the Pielisjoki River on the shores of Lake Pyhäselkä. The city was established in 1848 by Tsar Nicholas I of Russia and quickly emerged as a major hub for the timber trade and river transport. During the late 19th century, Joensuu became one of Finland's busiest ports, significantly boosted by its connection to the Saimaa Canal system. Today, it is recognized as a vibrant university city, with students from the University of Eastern Finland making up a large portion of its population. The city's culture is deeply rooted in Karelian heritage, often reflected in its distinctive local cuisine and artisanal crafts. Joensuu is also famous for hosting Ilosaarirock, one of Finland's oldest continuously running rock festivals. Surrounded by vast wilderness, the city plays a key role in European forestry research and outdoor tourism.",
    },
    factsAdvanced: {
      de: ["Joensuu wurde im Jahr 1848 offiziell gegründet.", "In der Stadt leben über 20.000 Studenten der Universität Ostfinnland.", "Das Ilosaarirock-Festival findet bereits seit 1971 jährlich statt.", "Der Pielisjoki-Fluss teilt das Stadtzentrum in zwei Hälften.", "Das Rathaus von Joensuu wurde 1914 von Eliel Saarinen entworfen.", "Joensuu ist der Sitz des Europäischen Forstinstituts."],
      hu: ["Joensuu városát hivatalosan 1848-ban alapították.", "A városban több mint 20 000 egyetemi hallgató él.", "Az Ilosaarirock fesztivált 1971 óta minden évben megrendezik.", "A Pielisjoki folyó két részre osztja a városközpontot.", "A városháza épületét 1914-ben Eliel Saarinen tervezte.", "Joensuu az Európai Erdészeti Intézet székhelye."],
      ro: ["Orașul Joensuu a fost fondat oficial în anul 1848.", "Peste 20.000 de studenți învață la universitatea locală.", "Festivalul Ilosaarirock este organizat anual începând cu 1971.", "Râul Pielisjoki traversează centrul orașului, împărțindu-l în două.", "Primăria din Joensuu a fost proiectată de Eliel Saarinen în 1914.", "Orașul găzduiește sediul Institutului European al Pădurilor."],
      en: ["Joensuu was officially founded as a city in 1848.", "More than 20,000 students attend the local university campus.", "The Ilosaarirock Festival has been held annually since 1971.", "The Pielisjoki River divides the city center into two main parts.", "The Joensuu City Hall was designed by Eliel Saarinen in 1914.", "Joensuu is home to the headquarters of the European Forest Institute."],
    },
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
    descriptionAdvanced: {
      de: "Vaasa liegt an der Westküste Finnlands am Bottnischen Meerbusen und ist das Verwaltungszentrum der Region Österbotten. Die Stadt wurde 1606 von König Karl IX. von Schweden gegründet und nach dem schwedischen Königshaus Wasa benannt. Ein prägendes Ereignis war der verheerende Stadtbrand von 1852, nach dem die Stadt sieben Kilometer weiter westlich an der Küste komplett neu aufgebaut wurde. Heute ist Vaasa für seine zweisprachige Bevölkerung und seine führende Rolle in der Energietechnologie bekannt, insbesondere im Bereich erneuerbare Energien. Die Umgebung gehört zum Kvarken-Archipel, der aufgrund der postglazialen Landhebung seit 2006 zum UNESCO-Weltnaturerbe zählt. Die Stadt beherbergt mehrere Universitäten und ist ein bedeutender Bildungsstandort für den schwedischsprachigen Teil Finnlands. Die Architektur im Stadtzentrum ist durch breite Alleen geprägt, die nach dem Brand als Feuerschutzschneisen angelegt wurden.",
      hu: "Vaasa Finnország nyugati partján, a Botteni-öböl mentén található, és Pohjanmaa régió közigazgatási központja. A várost 1606-ban alapította IX. Károly svéd király, nevét pedig a Wasa-házról, a svéd királyi családról kapta. Történelmének meghatározó eseménye volt az 1852-es tűzvész, amely után a várost hét kilométerrel nyugatabbra, közvetlenül a tengerparton építették újjá. Napjainkban Vaasa a finnországi energetikai technológia fellegvára, különösen a megújuló energiaforrások fejlesztése terén játszik úttörő szerepet. A várost övező Kvarken-szigetvilág 2006 óta az UNESCO Világörökség része a jégkorszak utáni folyamatos földfelszín-emelkedés miatt. Vaasa fontos oktatási központ, számos egyetemmel rendelkezik, és a svéd nyelvű kisebbség egyik kulturális bástyája. A belváros képét a tűzvész után kialakított széles sugárutak és parkok határozzák meg.",
      ro: "Vaasa este situat pe coasta de vest a Finlandei, la Golful Botnic, fiind centrul administrativ al regiunii Ostrobotnia. Orașul a fost fondat în 1606 de regele Carol al IX-lea al Suediei și numit după dinastia regală Wasa. Un moment de cotitură în istoria sa a fost marele incendiu din 1852, care a distrus aproape tot orașul, acesta fiind ulterior reconstruit la șapte kilometri distanță, mai aproape de mare. Astăzi, Vaasa este un pol tehnologic major, fiind sediul multor companii din sectorul energetic și al energiei regenerabile. Arhipelagul Kvarken din apropiere este singurul site natural din Finlanda inclus în patrimoniul mondial UNESCO, datorită fenomenului unic de ridicare post-glaciară a uscatului. Orașul este bilingv, fiind un centru cultural și educațional important pentru minoritatea suedeză din Finlanda. Structura urbană actuală se remarcă prin bulevarde largi și spații deschise, concepute pentru a preveni răspândirea focului în viitor.",
      en: "Vaasa is located on the west coast of Finland along the Gulf of Bothnia and serves as the administrative capital of the Ostrobothnia region. The city was founded in 1606 by King Charles IX of Sweden and named after the Royal House of Vasa. A defining event in its history was the Great Fire of 1852, which led to the entire city being rebuilt seven kilometers to the west, closer to the sea. Today, Vaasa is known as the energy capital of Finland, hosting a significant cluster of companies specializing in renewable energy and power systems. The nearby Kvarken Archipelago is a UNESCO World Heritage site, recognized for the unique post-glacial land uplift phenomenon. As a bilingual city, Vaasa is a vital educational hub for both Finnish and Swedish speakers, housing several universities. The urban layout is characterized by wide boulevards and fire-resistant greenery, a direct result of the meticulous planning after the mid-19th-century disaster.",
    },
    factsAdvanced: {
      de: ["Vaasa wurde am 2. Oktober 1606 offiziell gegründet.", "Nach dem Brand von 1852 blieben nur wenige Gebäude des alten Vaasa stehen.", "Das Kvarken-Archipel hebt sich jährlich um etwa 8 bis 8,5 Millimeter.", "Über 20 Prozent der Einwohner von Vaasa sprechen Schwedisch als Muttersprache.", "Vaasa war während des finnischen Bürgerkriegs 1918 kurzzeitig die Hauptstadt.", "Die Universität von Vaasa wurde im Jahr 1968 gegründet."],
      hu: ["Vaasa városát 1606. október 2-án alapították.", "Az 1852-es tűzvész után a régi városból csak néhány épület maradt épségben.", "A Kvarken-szigetvilág évente 8-8,5 millimétert emelkedik.", "Vaasa lakosságának több mint 20 százaléka svéd anyanyelvű.", "1918-ban, a finn polgárháború alatt Vaasa rövid ideig az ország fővárosa volt.", "A Vaasai Egyetemet 1968-ban alapították."],
      ro: ["Vaasa a fost fondat oficial la 2 octombrie 1606.", "După incendiul din 1852, doar câteva clădiri din vechiul oraș au supraviețuit.", "Arhipelagul Kvarken se ridică cu aproximativ 8-8,5 mm în fiecare an.", "Peste 20% din populația orașului Vaasa este vorbitoare de limbă suedeză.", "Vaasa a fost capitala temporară a Finlandei în timpul războiului civil din 1918.", "Universitatea din Vaasa a fost înființată în anul 1968."],
      en: ["Vaasa was officially incorporated on October 2, 1606.", "Only a few buildings from Old Vaasa survived the catastrophic fire of 1852.", "The Kvarken Archipelago rises about 8 to 8.5 millimeters every year.", "More than 20 percent of Vaasa's residents speak Swedish as their first language.", "Vaasa served as the temporary capital of Finland during the 1918 Civil War.", "The University of Vaasa was established in 1968."],
    },
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
    descriptionAdvanced: {
      de: "Porvoo ist die zweitälteste Stadt Finnlands und liegt etwa 50 Kilometer östlich von Helsinki an der Mündung des Flusses Porvoonjoki. Die Stadt erhielt ihre Stadtrechte im Jahr 1346 von König Magnus Eriksson von Schweden. Berühmt ist Porvoo vor allem für seine mittelalterliche Altstadt mit ihren charakteristischen roten Holzhäusern am Flussufer, die ursprünglich als Lagerhäuser für den Handel dienten. Historisch bedeutsam ist der Reichstag von Porvoo im Jahr 1809, bei dem Zar Alexander I. Finnland den Status eines autonomen Großfürstentums innerhalb Russlands zusicherte. Der gotische Dom von Porvoo, der im 15. Jahrhundert erbaut wurde, überragt das historische Viertel und ist ein Symbol der Stadtgeschichte. Heute ist Porvoo ein beliebtes Touristenziel und ein kulturelles Zentrum, das viele Künstler und Schriftsteller angezogen hat, darunter den Nationaldichter Johan Ludvig Runeberg. Die Stadt bewahrt eine charmante Atmosphäre mit Kopfsteinpflastergassen und kleinen Galerien.",
      hu: "Porvoo Finnország második legöregebb városa, amely Helsinkitől mintegy 50 kilométerre keletre, a Porvoonjoki folyó torkolatánál fekszik. A település 1346-ban kapott városi rangot VI. Magnus svéd királytól. Legismertebb jelképe a középkori óváros a folyóparton sorakozó jellegzetes vörös faházaival, amelyek egykor kereskedelmi raktárként szolgáltak. A város történelmi jelentőségét növeli az 1809-es Porvooi Országgyűlés, ahol I. Sándor orosz cár megerősítette Finnország autonómiáját az Orosz Birodalmon belül. A dombtetőn álló gótikus székesegyház a 15. századból származik, és számos tűzvész után is a város spirituális központja maradt. Napjainkban Porvoo kedvelt turisztikai célpont és kulturális központ, amely olyan hírességek otthona volt, mint Johan Ludvig Runeberg nemzeti költő. A macskaköves utcák, kis galériák és hangulatos kávézók egyedülálló történelmi hangulatot árasztanak.",
      ro: "Porvoo este al doilea cel mai vechi oraș din Finlanda, situat la aproximativ 50 de kilometri est de Helsinki, pe râul Porvoonjoki. Orașul a primit statutul oficial în anul 1346 de la regele Magnus Eriksson al Suediei. Este renumit în întreaga lume pentru Centrul Vechi medieval, caracterizat prin casele din lemn vopsite în roșu ocru de-a lungul malului râului, care serveau inițial drept depozite comerciale. Un moment istoric crucial a fost Dieta de la Porvoo din 1809, când țarul Alexandru I a recunoscut autonomia Finlandei ca Mare Ducat în cadrul Imperiului Rus. Catedrala din Porvoo, construită în secolul al XV-lea în stil gotic, domină colina orașului și a supraviețuit mai multor incendii de-a lungul secolelor. Astăzi, Porvoo este o destinație turistică de top și un refugiu pentru artiști, fiind orașul în care a locuit poetul național Johan Ludvig Runeberg. Străzile pavate cu piatră cubică și atmosfera boemă fac din acest oraș un simbol al patrimoniului finlandez.",
      en: "Porvoo is the second oldest city in Finland, located roughly 50 kilometers east of Helsinki at the mouth of the Porvoonjoki River. It was granted city rights in 1346 by King Magnus Eriksson of Sweden. The city is best known for its medieval Old Town, featuring iconic ochre-red wooden storehouses along the riverbank that once held trade goods. Historically, it is significant as the site of the Diet of Porvoo in 1809, where Tsar Alexander I established Finland as an autonomous Grand Duchy within the Russian Empire. The 15th-century Gothic Porvoo Cathedral sits atop a hill overlooking the historic district and remains a central spiritual and cultural landmark. Today, Porvoo is a major tourist destination and a haven for artists, notably having been the home of national poet Johan Ludvig Runeberg. Its narrow cobblestone streets, artisan boutiques, and well-preserved architecture offer a unique glimpse into Finland’s long maritime and colonial history.",
    },
    factsAdvanced: {
      de: ["Porvoo erhielt im Jahr 1346 seine Stadtrechte.", "Die roten Lagerhäuser wurden für den Besuch von Gustav III. im Jahr 1788 rot gestrichen.", "Der Reichstag von Porvoo fand im Jahr 1809 in der Stadt statt.", "Der Dom von Porvoo wurde im Jahr 2006 durch Brandstiftung schwer beschädigt.", "Das Wohnhaus von J. L. Runeberg ist seit 1882 ein Museum.", "Porvoo hat etwa 51.000 Einwohner und ist offiziell zweisprachig."],
      hu: ["Porvoo 1346-ban kapott városi kiváltságokat.", "A folyóparti raktárakat III. Gusztáv 1788-as látogatására festették vörösre.", "Az 1809-es országgyűlés helyszíne a porvooi székesegyház és a líceum volt.", "A porvooi székesegyház tetőszerkezete 2006-ban egy gyújtogatás miatt leégett.", "J. L. Runeberg otthona 1882 óta működik múzeumként.", "Porvoo lakossága körülbelül 51 000 fő, és a város hivatalosan kétnyelvű."],
      ro: ["Porvoo a primit drepturi municipale în anul 1346.", "Depozitele de pe râu au fost vopsite în roșu în 1788 pentru vizita regelui.", "Dieta istorică de la Porvoo a avut loc în anul 1809.", "Catedrala din Porvoo a fost grav avariată de un incendiu în anul 2006.", "Casa memorială a lui J. L. Runeberg este muzeu din anul 1882.", "Porvoo are o populație de circa 51.000 de locuitori și este bilingv."],
      en: ["Porvoo was officially chartered as a city in 1346.", "The riverfront warehouses were painted red in 1788 for a royal visit.", "The historic Diet of Porvoo took place here in 1809.", "The Porvoo Cathedral suffered a major arson attack in 2006.", "The home of national poet J. L. Runeberg became a museum in 1882.", "Porvoo has a population of about 51,000 and is officially bilingual."],
    },
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
    descriptionAdvanced: {
      de: "Lappeenranta liegt im Südosten Finnlands am Südufer des Saimaa-Sees und ist die Hauptstadt der Region Südkarelien. Die Stadt wurde 1649 von Königin Christina von Schweden gegründet und diente über Jahrhunderte als Grenzfestung zwischen Schweden und Russland. Die historische Festung von Lappeenranta, die auf einer Halbinsel liegt, beherbergt heute Museen, Handwerksbetriebe und die älteste orthodoxe Kirche Finnlands aus dem Jahr 1785. Ein wichtiger wirtschaftlicher Meilenstein war die Eröffnung des Saimaa-Kanals im Jahr 1856, der die Seenplatte mit der Ostsee verbindet. Heute ist die Stadt ein bedeutendes Touristenziel, bekannt für ihren Hafen und die jährlich im Sommer errichtete riesige Sandburg. Lappeenranta ist zudem ein Zentrum für technologische Forschung, insbesondere durch die LUT University, die sich auf saubere Energie und Wasser spezialisiert hat. Die Nähe zur russischen Grenze hat die Stadt historisch und kulturell stark geprägt.",
      hu: "Lappeenranta Délkelet-Finnországban, a Saimaa-tó déli partján fekszik, és Dél-Karélia tartomány székhelye. A várost 1649-ben alapította Krisztina svéd királynő, és évszázadokon át fontos határmenti erődítményként szolgált Svédország és Oroszország között. A város történelmi magját az erőd (Linnoitus) alkotja, ahol kézműves műhelyek, múzeumok és Finnország legrégebbi, 1785-ben épült ortodox temploma található. Gazdasági fejlődésében meghatározó szerepet játszott a Saimaa-csatorna 1856-os megnyitása, amely összeköttetést biztosított a tóvidék és a Balti-tenger között. Napjainkban Lappeenranta népszerű turisztikai központ, amely kikötőjéről és a nyaranta felépített óriási homokváráról híres. A város a fenntartható technológiák kutatásának egyik központja is, az itt működő LUT Egyetem nemzetközi szinten elismert a tiszta energiaforrások fejlesztése terén. A várost földrajzi fekvése és az orosz határ közelsége egyaránt meghatározza.",
      ro: "Lappeenranta este situat în sud-estul Finlandei, pe malul sudic al lacului Saimaa, fiind capitala regiunii Carelia de Sud. Orașul a fost fondat în 1649 de regina Cristina a Suediei și a servit timp de secole ca o fortăreață strategică la granița cu Imperiul Rus. Cetatea istorică din Lappeenranta, situată pe o peninsulă, găzduiește astăzi muzee, ateliere de artizanat și cea mai veche biserică ortodoxă din Finlanda, construită în 1785. Un punct de cotitură economic a fost deschiderea Canalului Saimaa în 1856, care a conectat sistemul de lacuri interioare cu Marea Baltică. În prezent, orașul este o destinație turistică populară, renumită pentru portul său vibrant și castelul de nisip uriaș construit anual în timpul verii. Lappeenranta este, de asemenea, un hub de inovație prin Universitatea Tehnologică LUT, specializată în energie curată și economie circulară. Proximitatea față de granița rusă a influențat profund dezvoltarea comercială și identitatea culturală a orașului.",
      en: "Lappeenranta is located in Southeastern Finland on the southern shores of Lake Saimaa and serves as the capital of the South Karelia region. The city was founded in 1649 by Queen Christina of Sweden and spent centuries as a vital frontier fortress between Swedish and Russian territories. The historic Lappeenranta Fortress, perched on a peninsula, now houses museums, artisan boutiques, and Finland's oldest Orthodox church, dating back to 1785. A major economic milestone was the opening of the Saimaa Canal in 1856, providing a navigable link between the interior lake system and the Baltic Sea. Today, the city is a premier summer destination, famous for its harbor activities and the massive sandcastle erected annually by local artists. Lappeenranta is also a leader in green technology research, largely driven by the LUT University's focus on sustainable energy and water systems. Its geographic position near the Russian border has historically shaped its role as a key commercial and cultural gateway.",
    },
    factsAdvanced: {
      de: ["Lappeenranta wurde im Jahr 1649 offiziell gegründet.", "Die orthodoxe Kirche der Gottesmutter von Pokrow wurde 1785 erbaut.", "Der Saimaa-Kanal erstreckt sich über eine Länge von 43 Kilometern.", "Die Sandburg von Lappeenranta wird seit 2004 jährlich neu errichtet.", "Die LUT University wurde im Jahr 1969 gegründet.", "Die Stadt war bis 1743 Teil des schwedischen Reiches."],
      hu: ["Lappeenranta városát 1649-ben alapították.", "A város ortodox temploma 1785-ben épült.", "A Saimaa-csatorna hossza összesen 43 kilométer.", "Lappeenrantában 2004 óta minden nyáron felépítenek egy hatalmas homokvárat.", "A helyi műszaki egyetemet (LUT) 1969-ben alapították.", "A város 1743-ig tartozott a Svéd Királysághoz."],
      ro: ["Orașul Lappeenranta a fost fondat în anul 1649.", "Biserica ortodoxă locală a fost construită în anul 1785.", "Canalul Saimaa are o lungime totală de 43 de kilometri.", "Castelul de nisip din oraș este construit anual începând din 2004.", "Universitatea Tehnologică LUT a fost înființată în anul 1969.", "Orașul a făcut parte din Suedia până la Tratatul de la Turku din 1743."],
      en: ["Lappeenranta was officially founded as a city in 1649.", "The local Orthodox church was completed in 1785.", "The Saimaa Canal spans a total length of 43 kilometers.", "The Lappeenranta Sandcastle has been built annually since 2004.", "The LUT University was established in 1969.", "Lappeenranta was part of Sweden until the Treaty of Åbo in 1743."],
    },
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
    descriptionAdvanced: {
      de: "Kotka ist eine bedeutende Hafen- und Industriestadt an der Mündung des Flusses Kymijoki am Finnischen Meerbusen. Die Stadt wurde 1879 auf der Insel Kotkansaari gegründet und entwickelte sich schnell zu einem Zentrum der finnischen Holz- und Papierindustrie. Historisch ist das Gebiet bekannt für die Seeschlachten von Svensksund im späten 18. Jahrhundert, in denen schwedische und russische Flotten aufeinandertrafen. Kotka ist heute berühmt für seine preisgekrönten Parkanlagen, insbesondere den Sapokka-Wasserpark, der als schönste Grünanlage Finnlands gilt. Ein kulturelles Highlight ist das Maritime Zentrum Vellamo, das in einem futuristischen Gebäude am Hafen untergebracht ist und nationale maritime Museen beherbergt. Die Stadt spielt eine zentrale Rolle im finnischen Außenhandel, da ihr Hafen einer der größten Export- und Transithäfen des Landes ist. Geografisch ist Kotka durch die Delta-Landschaft des Kymijoki geprägt, die reich an Lachs und anderen Fischarten ist.",
      hu: "Kotka fontos kikötő- és iparváros a Kymijoki folyó torkolatánál, a Finn-öböl partján. A várost 1879-ben alapították Kotkansaari szigetén, és gyorsan a finn fa- és papíripar egyik legfontosabb központjává fejlődött. A környék történelmileg nevezetes a 18. század végi svensksundi tengeri csatákról, amelyekben a svéd és az orosz flotta csapott össze. Napjainkban Kotka nemzetközileg elismert a díjnyertes parkjairól, különösen a Sapokka víziparkról, amelyet Finnország legszebb zöldfelületeként tartanak számon. A város kulturális jelképe a Vellamo Tengerészeti Központ, amely egy futurisztikus épületben ad otthont az ország tengerészeti és regionális múzeumainak. Kotka kulcsszerepet tölt be a finn külkereskedelemben, kikötője az ország egyik legnagyobb forgalmú export- és tranzitcsomópontja. A várost a Kymijoki folyó deltája határozza meg, amely gazdag élővilágáról és kiváló lazachalászati lehetőségeiről híres.",
      ro: "Kotka este un oraș portuar și industrial major, situat la gura de vărsare a râului Kymijoki în Golful Finlandei. Fondat în 1879 pe insula Kotkansaari, orașul a devenit rapid un centru esențial pentru industria prelucrării lemnului și a hârtiei. Din punct de vedere istoric, zona este cunoscută pentru bătăliile navale de la Svensksund de la sfârșitul secolului al XVIII-lea, cele mai mari din Marea Baltică. Astăzi, Kotka este renumit pentru parcurile sale premiate, în special Grădina de Apă Sapokka, considerată cea mai frumoasă zonă verde din Finlanda. Centrul Maritim Vellamo, găzduit într-o clădire cu o arhitectură spectaculoasă în formă de val, este principala atracție culturală, adăpostind Muzeul Maritim al Finlandei. Portul Hamina-Kotka este cel mai mare port de export din țară, jucând un rol crucial în logistica internațională. Geografia orașului este dominată de brațele râului Kymijoki și de numeroasele insule din arhipelagul înconjurător.",
      en: "Kotka is a prominent maritime and industrial city located at the mouth of the Kymijoki River on the Gulf of Finland. Established in 1879 on the island of Kotkansaari, the city rapidly evolved into a cornerstone of the Finnish timber and paper industries. Historically, the surrounding waters were the site of the pivotal Battles of Svensksund in the late 1700s, fought between the Swedish and Russian imperial navies. Today, Kotka is widely acclaimed for its award-winning public parks, most notably the Sapokka Water Garden, often cited as the most beautiful green space in Finland. A major cultural landmark is the Maritime Centre Vellamo, located in a wave-shaped futuristic building that houses several national museums. The Port of Hamina-Kotka is the largest export and transit port in Finland, serving as a vital link in Northern European trade. The city's geography is defined by the Kymijoki delta, famous for its biodiversity and historical salmon fishing grounds.",
    },
    factsAdvanced: {
      de: ["Kotka wurde am 16. Mai 1879 offiziell gegründet.", "Das Maritime Zentrum Vellamo wurde im Jahr 2008 eröffnet.", "Die Schlacht von Svensksund 1790 war die größte Seeschlacht der Ostsee.", "Der Sapokka-Wasserpark umfasst über 20 verschiedene Pflanzenarten.", "Kaiser Alexander III. hatte in Langinkoski eine kaiserliche Fischerhütte.", "Der Hafen Hamina-Kotka bewegt jährlich über 14 Millionen Tonnen Fracht."],
      hu: ["Kotka városát 1879. május 16-án alapították.", "A Vellamo Tengerészeti Központot 2008-ban adták át.", "Az 1790-es svensksundi csata a Balti-tenger legnagyobb tengeri ütközete volt.", "A Sapokka víziparkban több mint 20 különböző növényfaj található.", "III. Sándor orosz cár Langinkoskiban tartott fenn egy halászházat.", "A Hamina-Kotka kikötő évente több mint 14 millió tonna árut mozgat meg."],
      ro: ["Orașul Kotka a fost fondat oficial la 16 mai 1879.", "Centrul Maritim Vellamo a fost inaugurat în anul 2008.", "Bătălia de la Svensksund din 1790 a fost cea mai mare din Marea Baltică.", "Grădina Sapokka găzduiește numeroase specii rare de plante.", "Țarul Alexandru al III-lea deținea o cabană de pescuit la Langinkoski.", "Portul Hamina-Kotka gestionează peste 14 milioane de tone de marfă anual."],
      en: ["Kotka was officially established on May 16, 1879.", "The Maritime Centre Vellamo opened its doors in 2008.", "The 1790 Battle of Svensksund was the largest naval battle in the Baltic Sea.", "The Sapokka Water Garden features an artificial 20-meter waterfall.", "Tsar Alexander III built an Imperial Fishing Lodge at Langinkoski in 1889.", "The Port of Hamina-Kotka handles over 14 million tons of cargo annually."],
    },
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
    descriptionAdvanced: {
      de: "Rovaniemi ist die Hauptstadt von Lappland und liegt am Zusammenfluss von Kemijoki und Ounasjoki direkt am Polarkreis. Die Stadt wurde im Zweiten Weltkrieg fast vollständig zerstört und nach Plänen des berühmten Architekten Alvar Aalto im Grundriss eines Rentiergeweihs wiederaufgebaut. Heute ist Rovaniemi weltweit als die offizielle Heimatstadt des Weihnachtsmanns bekannt, wobei das Weihnachtsmanndorf jährlich hunderttausende Besucher anzieht. Neben dem Tourismus ist die Stadt ein bedeutendes Verwaltungs- und Bildungszentrum sowie Sitz der Universität Lappland. Kulturell herausragend ist das Arktikum, ein Museum und Wissenschaftszentrum, das sich der Natur und Kultur der Arktis widmet. Im Winter ist Rovaniemi einer der besten Orte weltweit, um Polarlichter zu beobachten und Hundeschlitten- oder Rentiersafaris zu unternehmen. Die Stadt dient als Tor zur arktischen Wildnis und ist ein Knotenpunkt für den Handel in Nordfinnland.",
      hu: "Rovaniemi Lappföld fővárosa, amely a Kemijoki és az Ounasjoki folyók összefolyásánál, közvetlenül az északi sarkkörön fekszik. A várost a második világháború végén szinte teljesen elpusztították, majd Alvar Aalto tervei alapján építették újjá, akinek koncepciója szerint a város alaprajza egy rénszarvas agancsát formázza. Napjainkban Rovaniemi világszerte a Mikulás hivatalos otthonaként ismert, a Mikulás-falu pedig évente több százezer turistát vonz a világ minden tájáról. A turizmus mellett a város fontos közigazgatási és oktatási központ, itt található a Lappföldi Egyetem is. Kulturális és tudományos szempontból kiemelkedő az Arktikum központ, amely az északi-sarki régió természetvilágát és az őslakos számi kultúrát mutatja be. Télen Rovaniemi az egyik legjobb hely az északi fény megfigyelésére, valamint a rénszarvas- és kutyaszán-túrák kiindulópontja. A város stratégiai kapu az arktikus vadon felé és Észak-Finnország kereskedelmi csomópontja.",
      ro: "Rovaniemi este capitala Laponiei, situat la confluența râurilor Kemijoki și Ounasjoki, exact pe linia Cercului Polar. Orașul a fost distrus aproape în totalitate în timpul celui de-al Doilea Război Mondial, fiind reconstruit ulterior după planurile arhitectului Alvar Aalto, care a creat o rețea stradală în formă de coarne de ren. Astăzi, Rovaniemi este cunoscut la nivel mondial drept reședința oficială a lui Moș Crăciun, Satul lui Moș Crăciun atrăgând anual sute de mii de turiști. Pe lângă turism, orașul este un centru administrativ și universitar vital, găzduind Universitatea Laponiei. Un punct de interes major este Arktikum, un muzeu și centru de știință dedicat cercetării regiunilor polare și culturii populației Sami. Iarna, Rovaniemi devine o destinație de top pentru observarea Aurorei Boreale și pentru safariuri cu sănii trase de câini sau reni. Orașul reprezintă poarta principală către sălbăticia arctică și un nod logistic pentru nordul Scandinaviei.",
      en: "Rovaniemi is the capital of Finnish Lapland, situated at the confluence of the Kemijoki and Ounasjoki rivers right on the Arctic Circle. The city was almost entirely destroyed during World War II but was meticulously rebuilt according to a master plan by Alvar Aalto, who arranged the streets in the shape of reindeer antlers. Today, Rovaniemi is internationally famous as the official hometown of Santa Claus, with Santa Claus Village attracting hundreds of thousands of visitors annually. Beyond tourism, it is a significant administrative hub and home to the University of Lapland, the northernmost university in the EU. A cultural centerpiece is Arktikum, a museum and science center that explores the Arctic environment and the history of the indigenous Sami people. During winter, the city is a premier destination for viewing the Northern Lights and embarking on husky and reindeer safaris. Rovaniemi serves as a strategic gateway to the vast Arctic wilderness and a commercial link for Northern Finland.",
    },
    factsAdvanced: {
      de: ["Rovaniemi wurde nach der fast vollständigen Zerstörung 1944 wiederaufgebaut.", "Die Linie des Polarkreises verläuft direkt durch das Weihnachtsmanndorf.", "Die Universität Lappland wurde im Jahr 1979 gegründet.", "Das Arktikum wurde 1992 zum 75. Jahrestag der Unabhängigkeit eröffnet.", "Rovaniemi hat eine Gesamtfläche von über 8.000 Quadratkilometern.", "Die Jätkänkynttilä-Brücke wurde 1989 fertiggestellt."],
      hu: ["Rovaniemit az 1944-es pusztítás után szinte teljesen újjá kellett építeni.", "Az északi sarkkör vonala keresztülhalad a Mikulás-falun.", "A Lappföldi Egyetemet 1979-ben alapították.", "Az Arktikum központot 1992-ben nyitották meg a nagyközönség előtt.", "Rovaniemi teljes területe meghaladja a 8000 négyzetkilométert.", "A város jelképévé vált Jätkänkynttilä hidat 1989-ben adták át."],
      ro: ["Rovaniemi a fost reconstruit după distrugerea aproape totală din 1944.", "Linia Cercului Polar traversează direct Satul lui Moș Crăciun.", "Universitatea Laponiei a fost înființată în anul 1979.", "Centrul Arktikum a fost inaugurat în anul 1992.", "Rovaniemi are o suprafață administrativă de peste 8.000 km pătrați.", "Podul Jätkänkynttilä a fost finalizat în anul 1989."],
      en: ["Rovaniemi was extensively rebuilt after being leveled in 1944.", "The Arctic Circle line runs directly through the Santa Claus Village.", "The University of Lapland was established in 1979.", "The Arktikum museum and science center opened in 1992.", "Rovaniemi covers an administrative area of over 8,000 square kilometers.", "The Jätkänkynttilä Bridge was completed in 1989 and is a local landmark."],
    },
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
    descriptionAdvanced: {
      de: "Suomenlinna ist eine bewohnte Seefestung, die auf sechs Inseln vor der Küste von Helsinki errichtet wurde. Der Bau begann 1748 unter schwedischer Herrschaft zum Schutz gegen russische Expansion. Heute gehört die Anlage zum UNESCO-Welterbe und ist ein bedeutendes Denkmal der Militärarchitektur.",
      hu: "Suomenlinna egy lakott tengeri erődrendszer, amely hat szigeten épült Helsinki partjainál. Az építkezés 1748-ban kezdődött svéd fennhatóság alatt az orosz terjeszkedés elleni védekezésül. Napjainkban az UNESCO Világörökség része és a katonai építészet kiemelkedő emléke.",
      ro: "Suomenlinna este o fortăreață maritimă locuită, construită pe șase insule în largul coastelor orașului Helsinki. Construcția a început în 1748 sub dominație suedeză, pentru protecție împotriva expansiunii rusești. Astăzi, situl aparține Patrimoniului Mondial UNESCO și este un monument major de arhitectură militară.",
      en: "Suomenlinna is an inhabited sea fortress built on six islands off the coast of Helsinki. Construction began in 1748 under Swedish rule to counter Russian maritime expansion. It is now a UNESCO World Heritage site and represents a unique example of 18th-century military engineering.",
    },
    factsAdvanced: {
      de: ["Bau begann 1748 unter Augustin Ehrensvärd", "Seit 1991 Teil des UNESCO-Welterbes", "Besteht aus 6 miteinander verbundenen Inseln", "Etwa 800 ständige Einwohner leben auf der Festung", "Diente Schweden, Russland und Finnland als Basis", "U-Boot Vesikko aus dem 2. Weltkrieg ist hier ausgestellt"],
      hu: ["Az építkezés 1748-ban indult Augustin Ehrensvärd vezetésével", "1991 óta az UNESCO Világörökség része", "6 egymással összekapcsolt szigetből áll", "Körülbelül 800 állandó lakosa van az erődnek", "Svédország, Oroszország és Finnország is használta bázisként", "Itt látható a Vesikko második világháborús tengeralattjáró"],
      ro: ["Construcția a început în 1748 sub Augustin Ehrensvärd", "Inclus în Patrimoniul UNESCO din 1991", "Formată din 6 insule interconectate", "Aproximativ 800 de locuitori permanenți trăiesc în fortăreață", "A servit ca bază pentru Suedia, Rusia și Finlanda", "Submarinul Vesikko din al Doilea Război Mondial este expus aici"],
      en: ["Construction started in 1748 by Augustin Ehrensvärd", "Designated a UNESCO World Heritage site in 1991", "Comprises 6 interconnected islands", "Home to a permanent population of around 800", "Controlled by Sweden, Russia, and Finland historically", "Features the Vesikko submarine from World War II"],
    },
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
    descriptionAdvanced: {
      de: "Das Weihnachtsmanndorf in Rovaniemi ist ein Erlebnispark direkt am Polarkreis in Lappland. Er wurde nach dem Besuch von Eleanor Roosevelt im Jahr 1950 gegründet und hat sich seitdem zum wichtigsten touristischen Ziel der Region entwickelt. Besucher können hier den Polarkreis überschreiten und das ganze Jahr über den Weihnachtsmann treffen.",
      hu: "A rovaniemi Mikulás-falu egy élménypark közvetlenül az északi sarkkörön, Lappföldön. Eleanor Roosevelt 1950-es látogatása után alapították, és azóta a régió legfontosabb turisztikai célpontjává vált. A látogatók itt átléphetik a sarkkört, és egész évben találkozhatnak a Mikulással.",
      ro: "Satul lui Moș Crăciun din Rovaniemi este un parc tematic situat exact pe Cercul Polar, în Laponia. A fost înființat după vizita lui Eleanor Roosevelt din 1950 și a devenit principala destinație turistică a regiunii. Vizitatorii pot traversa linia Cercului Polar și îl pot întâlni pe Moș Crăciun pe tot parcursul anului.",
      en: "Santa Claus Village in Rovaniemi is a themed attraction located exactly on the Arctic Circle in Lapland. It originated from Eleanor Roosevelt's visit in 1950 and has since evolved into the region's premier tourist destination. Visitors can cross the Arctic Circle line and visit Santa's official office year-round.",
    },
    factsAdvanced: {
      de: ["Erste Hütte wurde 1950 für Eleanor Roosevelt gebaut", "Offizielle Eröffnung des Dorfes war 1985", "Die Linie des Polarkreises verläuft mitten durch das Dorf", "Beherbergt das Hauptpostamt des Weihnachtsmanns", "Über 500.000 Besucher jährlich aus aller Welt", "Der Weihnachtsmann ist hier an 365 Tagen im Jahr anzutreffen"],
      hu: ["Az első kunyhó 1950-ben épült Eleanor Rooseveltnek", "A falu hivatalos megnyitója 1985-ben volt", "Az északi sarkkör vonala keresztülhalad a falun", "Itt található a Mikulás hivatalos főpostája", "Évente több mint 500 000 látogató érkezik ide", "A Mikulás az év minden napján fogadja a vendégeket"],
      ro: ["Prima cabană a fost construită în 1950 pentru Eleanor Roosevelt", "Inaugurarea oficială a satului a avut loc în 1985", "Linia Cercului Polar trece prin mijlocul parcului", "Găzduiește Oficiul Poștal Principal al lui Moș Crăciun", "Peste 500.000 de vizitatori anuali din întreaga lume", "Moș Crăciun este prezent aici 365 de zile pe an"],
      en: ["First cabin built in 1950 for Eleanor Roosevelt", "Officially opened as a destination in 1985", "The Arctic Circle line is marked across the village", "Features Santa Claus' Main Post Office", "Receives over 500,000 visitors annually", "Santa is available to meet guests every day of the year"],
    },
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
    descriptionAdvanced: {
      de: "Olavinlinna ist eine spätmittelalterliche Burg in Savonlinna, die auf einer Felseninsel im Saimaa-Seensystem errichtet wurde. Der Bau begann 1475 durch Erik Axelsson Tott zum Schutz der Ostgrenze gegen das Großfürstentum Moskau. Heute ist die dreitürmige Anlage weltbekannt als Austragungsort der jährlichen Opernfestspiele von Savonlinna.",
      hu: "Olavinlinna egy késő középkori vár Savonlinnában, amely a Saimaa-tórendszer egyik sziklaszigetén épült. Az építkezést 1475-ben kezdte Erik Axelsson Tott a keleti határok védelmére a Moszkvai Nagyfejedelemség ellen. A háromtornyú erőd ma a Savonlinnai Operafesztivál világhírű helyszíne.",
      ro: "Olavinlinna este un castel medieval târziu din Savonlinna, construit pe o insulă stâncoasă din sistemul lacustru Saimaa. Construcția a început în 1475 sub Erik Axelsson Tott, pentru a proteja granița estică împotriva Marelui Cnezat al Moscovei. Fortăreața cu trei turnuri este celebră astăzi pentru Festivalul de Operă de la Savonlinna.",
      en: "Olavinlinna is a late medieval castle in Savonlinna, built on a rocky island within the Saimaa lake system. Construction started in 1475 by Erik Axelsson Tott to defend the eastern border against the Grand Duchy of Moscow. The three-towered fortress is internationally renowned as the venue for the annual Savonlinna Opera Festival.",
    },
    factsAdvanced: {
      de: ["Bau der Burg begann im Jahr 1475", "Benannt nach dem Heiligen Olav", "Nördlichste mittelalterliche Steinfestung der Welt", "Verfügt über drei gut erhaltene Türme", "Savonlinna Opernfestspiele finden hier seit 1912 statt", "Strategische Lage zwischen Schweden und Russland"],
      hu: ["A vár építése 1475-ben kezdődött", "Szent Olavról nevezték el", "A világ legészakibb épségben maradt középkori kővára", "Három jól megőrzött toronnyal rendelkezik", "A Savonlinnai Operafesztivál 1912 óta otthona", "Stratégiai helyszín volt Svédország és Oroszország között"],
      ro: ["Construcția castelului a început în 1475", "Numit după Sfântul Olav", "Cea mai nordică fortăreață medievală de piatră din lume", "Dispune de trei turnuri bine conservate", "Festivalul de Operă din Savonlinna are loc aici din 1912", "Locație strategică între Suedia și Rusia"],
      en: ["Construction began in 1475", "Named after Saint Olaf", "The northernmost medieval stone fortress still standing", "Features three massive cylindrical towers", "Home to the Savonlinna Opera Festival since 1912", "Built to protect the Swedish-Russian border area"],
    },
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
    descriptionAdvanced: {
      de: "Der Sibelius-Park im Helsinkier Stadtteil Töölö beherbergt das monumentale Denkmal zu Ehren des Komponisten Jean Sibelius. Das von Eila Hiltunen entworfene Kunstwerk besteht aus über 600 hohlen Stahlrohren, die wie Orgelpfeifen angeordnet sind. Es wurde 1967 enthüllt und zählt zu den meistfotografierten Sehenswürdigkeiten der finnischen Hauptstadt.",
      hu: "A helsinki Töölö negyedben található Sibelius-park ad otthont Jean Sibelius zeneszerző monumentális emlékművének. Az Eila Hiltunen által tervezett alkotás több mint 600 üreges acélcsőből áll, amelyek orgonasípokra emlékeztetnek. Az 1967-ben felavatott mű a finn főváros egyik legtöbbet fényképezett látványossága.",
      ro: "Parcul Sibelius din cartierul Töölö, Helsinki, găzduiește monumentul monumental dedicat compozitorului Jean Sibelius. Opera de artă, creată de Eila Hiltunen, constă în peste 600 de tuburi de oțel goale, aranjate ca țevile unei orgi. Inaugurat în 1967, acesta este unul dintre cele mai fotografiate obiective din capitala Finlandei.",
      en: "Sibelius Park in Helsinki's Töölö district is home to the monumental memorial dedicated to composer Jean Sibelius. Designed by Eila Hiltunen, the abstract sculpture consists of over 600 hollow steel pipes welded together to resemble organ pipes. Unveiled in 1967, it remains one of the most visited and photographed sites in the Finnish capital.",
    },
    factsAdvanced: {
      de: ["Denkmal wurde am 7. September 1967 eingeweiht", "Besteht aus etwa 600 geschweißten Stahlrohren", "Gesamtgewicht der Skulptur beträgt 24 Tonnen", "Entworfen von der Bildhauerin Eila Hiltunen", "Ein kleineres Modell befindet sich im UNESCO-Hauptquartier", "Das Gesicht des Komponisten ist daneben dargestellt"],
      hu: ["Az emlékművet 1967. szeptember 7-én avatták fel", "Körülbelül 600 hegesztett acélcsőből áll", "A szobor össztömege 24 tonna", "Eila Hiltunen szobrászművész tervezte", "Egy kisebb másolata az UNESCO székházában található", "A zeneszerző arcmása a szobor mellett látható"],
      ro: ["Monumentul a fost inaugurat pe 7 septembrie 1967", "Format din aproximativ 600 de tuburi de oțel sudate", "Greutatea totală a sculpturii este de 24 de tone", "Proiectat de sculptorița Eila Hiltunen", "O replică mai mică se află la sediul UNESCO", "Chipul compozitorului este reprezentat lângă structură"],
      en: ["Memorial unveiled on September 7, 1967", "Constructed from approximately 600 steel pipes", "Total weight of the sculpture is 24 tons", "Created by Finnish sculptor Eila Hiltunen", "A smaller scale model is located at UNESCO HQ in Paris", "Includes a bust of Jean Sibelius beside the pipe structure"],
    },
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
    descriptionAdvanced: {
      de: "Das Design-Viertel in Helsinki erstreckt sich über mehrere Stadtteile wie Punavuori und Ullanlinna und vereint Kreativität mit urbanem Lebensstil. Es wurde 2005 gegründet, um finnisches Design in den Bereichen Mode, Architektur und Kunsthandwerk sichtbar zu machen. Das Viertel umfasst über 200 Design-Boutiquen, Galerien und Ateliers lokaler Künstler.",
      hu: "Helsinki Design negyede több városrészt, például Punavuorit és Ullanlinnát foglalja magában, ötvözve a kreativitást a városi életmóddal. 2005-ben hozták létre a finn dizájn láthatóságának növelésére a divat, az építészet és a kézművesség terén. A negyed több mint 200 butikot, galériát és műhelyt tömörít.",
      ro: "Districtul de Design din Helsinki se întinde pe mai multe cartiere, precum Punavuori și Ullanlinna, îmbinând creativitatea cu stilul de viață urban. A fost fondat în 2005 pentru a promova designul finlandez în modă, arhitectură și artizanat. Districtul include peste 200 de buticuri, galerii și ateliere ale artiștilor locali.",
      en: "The Helsinki Design District spans several neighborhoods, including Punavuori and Ullanlinna, blending creativity with urban living. Established in 2005, it serves as a network to highlight Finnish design in fashion, architecture, and crafts. The district comprises over 200 design shops, art galleries, and studios of local creators.",
    },
    factsAdvanced: {
      de: ["Offizielle Gründung des Netzwerks im Jahr 2005", "Umfasst mehr als 200 verschiedene Standorte", "Das Design-Museum ist der zentrale Anlaufpunkt", "Zentrum der Helsinki Design Week im September", "Bekannte Marken wie Marimekko haben hier Läden", "Erstreckt sich über 25 Straßenzüge im Stadtzentrum"],
      hu: ["A hálózatot hivatalosan 2005-ben alapították", "Több mint 200 különböző helyszínt foglal magában", "A Dizájn Múzeum a negyed központi eleme", "A szeptemberi Helsinki Design Hét főszínhelye", "Olyan márkák üzletei találhatók itt, mint a Marimekko", "A belváros 25 utcájára terjed ki"],
      ro: ["Rețeaua a fost fondată oficial în anul 2005", "Include peste 200 de locații diferite", "Muzeul de Design este punctul central al districtului", "Centrul principal pentru Helsinki Design Week în septembrie", "Găzduiește magazine ale unor branduri celebre ca Marimekko", "Se întinde pe 25 de străzi din centrul orașului"],
      en: ["Network officially launched in 2005", "Features over 200 design-related spots", "The Design Museum Helsinki is the hub of the area", "Primary location for Helsinki Design Week in September", "Home to flagship stores of brands like Marimekko", "Covers 25 streets in the heart of Helsinki"],
    },
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
    descriptionAdvanced: {
      de: "Die Burg Häme ist eine mittelalterliche Backsteinburg in der Stadt Hämeenlinna am Ufer des Vanajavesi-Sees. Sie wurde vermutlich im späten 13. Jahrhundert nach dem Kreuzzug von Birger Jarl nach Finnland als schwedischer Stützpunkt gegründet. Ursprünglich als einfache Befestigung erbaut, wurde sie im 14. und 15. Jahrhundert zu einer prächtigen Residenz und einem Verwaltungszentrum ausgebaut. Eine Besonderheit ist die Verwendung von Backsteinen, was für finnische Burgen dieser Zeit eher untypisch war und auf norddeutsche Einflüsse hindeutet. Im Laufe der Jahrhunderte diente die Burg als Militärstützpunkt, Getreidespeicher und von 1837 bis 1972 als Gefängnis. Heute ist die Burg Häme ein bedeutendes Museum und Teil des finnischen Nationalmuseums, das einen tiefen Einblick in die mittelalterliche Verteidigungskunst bietet. Die gut erhaltenen Wälle und das Hauptgebäude sind ein beeindruckendes Beispiel für die strategische Architektur der schwedischen Herrschaft in Finnland.",
      hu: "Häme vára egy középkori téglaépítésű erődítmény Hämeenlinna városában, a Vanajavesi-tó partján. Az erődöt vélhetően a 13. század végén alapították a Birger Jarl által vezetett svéd keresztes hadjárat után, hogy megerősítsék a svéd fennhatóságot a régióban. Eredetileg egyszerű katonai tábornak indult, de a 14. és 15. század során pompás rezidenciává és közigazgatási központtá alakították át. Különlegessége a vörös tégla használata, ami szokatlan volt a korabeli finn várépítészetben, és északnémet hatást tükröz. Az évszázadok során a vár szolgált katonai bázisként, magtárként, valamint 1837 és 1972 között börtönként is működött. Napjainkban a vár a Finn Nemzeti Múzeum része, és kiemelkedő turisztikai látványosság, amely bemutatja a középkori életmódot és védelmi rendszereket. A várfalak és a belső udvarok kiváló állapotban maradtak fenn, hiteles képet adva Finnország történelmi múltjáról.",
      ro: "Castelul Häme este o fortăreață medievală din cărămidă situată în orașul Hämeenlinna, pe malul lacului Vanajavesi. Se crede că fundația sa a fost pusă la sfârșitul secolului al XIII-lea, în urma cruciadei conduse de Birger Jarl în Finlanda, servind drept avanpost suedez. Inițial o fortificație simplă, castelul a fost extins în secolele al XIV-lea și al XV-lea, devenind o reședință nobiliară și un centru administrativ important. Utilizarea cărămizii roșii este o trăsătură distinctivă rară pentru castelele finlandeze din acea perioadă, sugerând influențe arhitecturale din nordul Germaniei. De-a lungul istoriei, structura a funcționat ca bază militară, depozit de cereale și, între 1837 și 1972, drept închisoare. Astăzi, Castelul Häme este un muzeu major gestionat de Consiliul Național al Antichităților, oferind expoziții despre viața medievală și arhitectura militară. Turnurile sale masive și curțile interioare bine conservate reprezintă unul dintre cele mai importante monumente istorice din țările nordice.",
      en: "Häme Castle is a medieval brick-built fortress situated in the city of Hämeenlinna on the shores of Lake Vanajavesi. It was likely founded in the late 13th century following Birger Jarl’s crusade into Finland, serving as a strategic Swedish military outpost. Originally a simple defensive structure, it was expanded during the 14th and 15th centuries into a grand residential palace and administrative center for the region. A notable feature is the extensive use of red brick, which was uncommon in contemporary Finnish fortifications and points to North German architectural influences. Over the centuries, the castle transitioned from a military stronghold to a granary and eventually served as a prison from 1837 until 1972. Today, Häme Castle is a premier museum under the National Museum of Finland, offering visitors a detailed look at medieval defense and lifestyle. Its well-preserved ramparts and central keep stand as one of the best examples of defensive architecture from the Swedish era in Finland.",
    },
    factsAdvanced: {
      de: ["Die Burg wurde vermutlich um das Jahr 1290 gegründet.", "Der Umbau zur Backsteinburg begann in den 1360er Jahren.", "Die Burg diente bis 1972 als Gefängnis für Frauen.", "Große Restaurierungsarbeiten wurden zwischen 1956 und 1988 durchgeführt.", "Häme Castle ist eine der wenigen mittelalterlichen Burgen Finnlands.", "Die Burg liegt direkt am Vanajavesi-See, einem historischen Handelsweg."],
      hu: ["A vár alapítása vélhetően 1290 körül történt.", "A téglaépítésű szerkezet kialakítása az 1360-as években kezdődett.", "Az erődítmény 1972-ig női börtönként is funkcionált.", "A vár teljes körű restaurálása 1956 és 1988 között zajlott.", "Häme vára egyike Finnország három legfontosabb középkori várának.", "A vár a Vanajavesi-tó partján, stratégiai helyen fekszik."],
      ro: ["Castelul a fost fondat probabil în jurul anului 1290.", "Construcția structurii actuale din cărămidă a început în anii 1360.", "Castelul a fost folosit ca închisoare până în anul 1972.", "Lucrări majore de restaurare au avut loc între 1956 și 1988.", "Este unul dintre puținele castele medievale din cărămidă din Finlanda.", "Fortăreața se află pe malul lacului Vanajavesi, un vechi drum comercial."],
      en: ["The castle was likely established around 1290.", "The transition to a brick fortress began in the 1360s.", "The castle operated as a female prison until 1972.", "Extensive restoration projects were carried out between 1956 and 1988.", "Häme Castle is one of only three major medieval castles in Finland.", "The site is located on Lake Vanajavesi, a historic water route."],
    },
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
    descriptionAdvanced: {
      de: "Alt-Rauma ist das größte zusammenhängende Holzstadtviertel in den nordischen Ländern und wurde 1991 in die Liste des UNESCO-Weltkulturerbes aufgenommen. Das etwa 28 Hektar große Gebiet umfasst rund 600 Gebäude, von denen die meisten als Wohnhäuser oder Werkstätten genutzt werden. Die Stadt erhielt ihre Stadtrechte bereits im Jahr 1442, was sie zu einer der ältesten Städte Finnlands macht. Ein zentrales Bauwerk ist die Heilig-Kreuz-Kirche aus dem späten 15. Jahrhundert, die ursprünglich Teil eines Franziskanerklosters war. Die heutige Architektur spiegelt überwiegend den neorenaissancistischen Stil des späten 19. Jahrhunderts wider, der nach mehreren Stadtbränden entstand. Die verwinkelten Gassen und die gut erhaltenen Holzfassaden machen das Viertel zu einem bedeutenden Denkmal mittelalterlicher Stadtplanung und nordischer Handwerkstradition.",
      hu: "Ó-Rauma az északi országok legnagyobb, egységes faépítésű városmagja, amelyet 1991-ben vettek fel az UNESCO Világörökség listájára. A körülbelül 28 hektáros terület mintegy 600 épületet foglal magában, amelyek többsége ma is lakóházként vagy kézműves műhelyként funkcionál. Rauma 1442-ben kapott városi jogokat, így Finnország egyik legrégebbi települése. A negyed központjában található a 15. század végén épült Szent Kereszt-templom, amely eredetileg egy ferences kolostor része volt. Az épületek mai megjelenését nagyban meghatározza a 19. század végi neoreneszánsz stílus, amely a korábbi tűzvészek utáni újjáépítések során alakult ki. A kanyargós utcák és a gondosan karbantartott homlokzatok hűen őrzik a középkori városszerkezetet és a hagyományos északi ácsmesterség remekműveit.",
      ro: "Centrul vechi din Rauma reprezintă cel mai mare ansamblu de clădiri din lemn din țările nordice și a fost inclus în patrimoniul mondial UNESCO în anul 1991. Zona se întinde pe aproximativ 28 de hectare și cuprinde în jur de 600 de clădiri, majoritatea fiind utilizate și astăzi ca locuințe sau ateliere meșteșugărești. Orașul a primit drepturi municipale în 1442, fiind una dintre cele mai vechi așezări din Finlanda. Un punct de reper central este Biserica Sfânta Cruce, construită la sfârșitul secolului al XV-lea, care a aparținut inițial unei mănăstiri franciscane. Arhitectura actuală reflectă în mare parte stilul neorenascentist de la sfârșitul secolului al XIX-lea, rezultat în urma reconstrucțiilor de după marile incendii. Străzile înguste și fațadele conservate oferă o perspectivă unică asupra planificării urbane medievale și a tradițiilor de construcție nordice.",
      en: "Old Rauma is the largest unified wooden town in the Nordic countries and was inscribed on the UNESCO World Heritage List in 1991. The area covers approximately 28 hectares and consists of around 600 buildings, most of which are still used as private residences or craft workshops. Rauma received its city rights in 1442, making it one of the oldest cities in Finland. A prominent landmark is the Church of the Holy Cross, dating back to the late 15th century, which originally served as part of a Franciscan monastery. The current architectural appearance is largely defined by the Neo-Renaissance style of the late 19th century, adopted during renovations following several major urban fires. The winding alleys and well-preserved wooden facades represent a significant monument to medieval town planning and traditional Nordic woodworking expertise.",
    },
    factsAdvanced: {
      de: ["Die Stadt erhielt im Jahr 1442 ihre offiziellen Stadtrechte.", "UNESCO ernannte Alt-Rauma 1991 zum Weltkulturerbe.", "Das historische Viertel erstreckt sich über eine Fläche von 28 Hektar.", "Insgesamt befinden sich etwa 600 Gebäude in diesem geschützten Bereich.", "Die Heilig-Kreuz-Kirche stammt aus der Zeit um 1480-1520.", "Die meisten heutigen Holzfassaden entstanden nach Bränden im 19. Jahrhundert."],
      hu: ["A város 1442-ben kapta meg a hivatalos városi jogokat.", "Az UNESCO 1991-ben nyilvánította Ó-Raumát a Világörökség részévé.", "A történelmi negyed területe megközelítőleg 28 hektárt tesz ki.", "A védett területen összesen mintegy 600 épület található.", "A Szent Kereszt-templom 1480 és 1520 között épült fel.", "A mai faházak többsége a 19. századi tűzvészek utáni stílust tükrözi."],
      ro: ["Orașul a primit drepturile municipale oficiale în anul 1442.", "UNESCO a inclus Centrul Vechi din Rauma în patrimoniul mondial în 1991.", "Cartierul istoric se întinde pe o suprafață de 28 de hectare.", "În această zonă protejată se află în total aproximativ 600 de clădiri.", "Biserica Sfânta Cruce a fost construită între anii 1480 și 1520.", "Majoritatea fațadelor din lemn actuale datează de la sfârșitul secolului XIX."],
      en: ["The town received its official city rights in the year 1442.", "UNESCO designated Old Rauma as a World Heritage site in 1991.", "The historical district covers an area of approximately 28 hectares.", "A total of around 600 buildings are located within the protected area.", "The Church of the Holy Cross was built between 1480 and 1520.", "Most of the current wooden facades date back to the late 19th century."],
    },
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
    descriptionAdvanced: {
      de: "Die Alte Kirche von Petäjävesi ist ein herausragendes Beispiel für die traditionelle nordische Holzarchitektur und wurde 1994 in die UNESCO-Welterbeliste aufgenommen. Sie wurde zwischen 1763 und 1765 unter der Leitung des Baumeisters Jaakko Klemetinpoika Leppänen errichtet. Das Gebäude kombiniert Elemente der Renaissance, des Barock und der mittelalterlichen gotischen Tradition, die in der Konstruktion aus massiven Kiefernholzbalken zum Ausdruck kommen. Besonders markant sind das hohe Steildach und die kunstvoll gearbeiteten Innenwände, die die Fertigkeiten der lokalen Zimmerleute ohne den Einsatz moderner Hilfsmittel verdeutlichen. Im Jahr 1821 fügte der Enkel des Baumeisters, Erkki Leppänen, den Glockenturm hinzu. Die Kirche blieb über Jahrhunderte nahezu unverändert erhalten, da die Gemeinde Ende des 19. Jahrhunderts ein neues Gebäude errichtete und die alte Kirche nur noch selten nutzte.",
      hu: "A petäjävesi öregtemplom a hagyományos északi faépítészet egyik legkiemelkedőbb példája, amelyet 1994-ben vettek fel az UNESCO Világörökség listájára. A templom 1763 és 1765 között épült Jaakko Klemetinpoika Leppänen mesterépítő vezetésével, aki helyi fenyőgerendákat használt az építkezéshez. Az épület stílusa különleges módon ötvözi a reneszánsz, a barokk és a középkori gótikus hagyományokat, ami jól megfigyelhető a szerkezeti megoldásokon. Különösen jellegzetes a meredek tetőszerkezet és a gazdagon kidolgozott belső tér, amely a korabeli ácsok technológiai tudását dicséri. 1821-ben az építő unokája, Erkki Leppänen egy harangtoronnyal egészítette ki az együttest. Mivel a 19. század végén új templom épült a közelben, a régi épület érintetlenül maradt az utókor számára.",
      ro: "Biserica veche din Petäjävesi este un exemplu remarcabil de arhitectură nordică tradițională în lemn, fiind inclusă în patrimoniul mondial UNESCO în anul 1994. Construcția a fost realizată între 1763 și 1765 sub îndrumarea meșterului Jaakko Klemetinpoika Leppänen, folosind bârne masive de pin. Edificiul îmbină elemente de Renaștere și Baroc cu tradiții gotice medievale, reflectând măiestria dulgherilor locali care nu au utilizat tehnologii moderne. Un element distinctiv este acoperișul înalt și abrupt, precum și pereții interiori sculptați cu mare atenție la detalii. În 1821, nepotul constructorului inițial, Erkki Leppänen, a adăugat turnul clopotniță. Biserica s-a păstrat aproape neschimbată de-a lungul secolelor, deoarece comunitatea a ridicat o biserică nouă la sfârșitul secolului XIX, lăsând vechiul lăcaș nealterat.",
      en: "Petäjävesi Old Church is an outstanding example of traditional Nordic wooden architecture and was inscribed on the UNESCO World Heritage List in 1994. It was constructed between 1763 and 1765 under the leadership of master builder Jaakko Klemetinpoika Leppänen using massive pine logs. The building uniquely combines Renaissance and Baroque elements with medieval Gothic traditions, showcasing the exceptional skills of local carpenters who worked without modern machinery. Particularly striking are the high, steep roof and the intricately crafted interior walls that reflect the spiritual and technical heritage of the region. In 1821, the builder's grandson, Erkki Leppänen, added the separate bell tower. The church remained virtually unchanged over the centuries because the local parish built a newer facility in the late 19th century, leaving the original structure largely untouched.",
    },
    factsAdvanced: {
      de: ["Die Kirche wurde zwischen 1763 und 1765 erbaut.", "UNESCO nahm das Bauwerk 1994 in die Welterbeliste auf.", "Das gesamte Gebäude besteht aus massiven Kiefernholzbalken.", "Der separate Glockenturm wurde erst im Jahr 1821 ergänzt.", "Der Baumeister Jaakko Leppänen leitete die ursprüngliche Konstruktion.", "Die Kirche repräsentiert eine Mischung aus Gotik, Renaissance und Barock."],
      hu: ["A templom építési munkálatai 1763 és 1765 között zajlottak.", "Az UNESCO 1994-ben választotta be a Világörökségi helyszínek közé.", "Az épület vázát hatalmas, kézzel megmunkált fenyőgerendák alkotják.", "A különálló harangtornyot 1821-ben csatolták az épülethez.", "A tervezést és a kivitelezést Jaakko Leppänen mesterépítő irányította.", "A szerkezet a gótika, a reneszánsz és a barokk elemeit ötvözi."],
      ro: ["Biserica a fost construită în perioada anilor 1763-1765.", "UNESCO a inclus monumentul în lista patrimoniului mondial în 1994.", "Întreaga structură este realizată din bârne masive de pin local.", "Turnul clopotniță separat a fost adăugat ulterior, în anul 1821.", "Meșterul Jaakko Leppänen a fost cel care a coordonat construcția.", "Stilul arhitectural îmbină elemente gotice, renascentiste și baroce."],
      en: ["The church was constructed between 1763 and 1765.", "UNESCO added the site to the World Heritage List in 1994.", "The entire building is made from massive, hand-hewn pine logs.", "The separate bell tower was added later, in the year 1821.", "Master builder Jaakko Leppänen led the original construction team.", "The architecture represents a blend of Gothic, Renaissance, and Baroque."],
    },
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
    descriptionAdvanced: {
      de: "Sammallahdenmäki ist eine bedeutende archäologische Stätte aus der Bronzezeit in der Region Satakunta und wurde 1999 als erste archäologische Stätte Finnlands in das UNESCO-Weltkulturerbe aufgenommen. Die Anlage umfasst 36 Grabhügel aus Stein, sogenannte Cairne, die auf einem felsigen Hügelrücken thronen und einen weiten Blick über die Landschaft bieten. Diese Gräber stammen aus der Zeit zwischen 1500 und 500 v. Chr. und spiegeln die Bestattungsrituale und sozialen Strukturen der damaligen Küstenbewohner wider. Besonders bemerkenswert ist das als „Kirchenboden“ (Kirkonlaattia) bekannte quadratische Monument, eine flache Steinstruktur, die für diese Region untypisch ist. Ein weiteres markantes Merkmal ist die „Lange Steinmauer“, ein Cairn von etwa 19 Metern Länge. Die Stätte liefert wertvolle Erkenntnisse über die Ausbreitung der skandinavischen Bronzezeit-Kultur in den Osten und die religiösen Vorstellungen der prähistorischen Gesellschaft.",
      hu: "Sammallahdenmäki egy rendkívüli jelentőségű bronzkori régészeti lelőhely Satakunta régióban, amely 1999-ben Finnország első régészeti Világörökségi helyszíne lett. A területen 36 kőhalom-sír található, amelyeket egy sziklás dombháton alakítottak ki az időszámításunk előtti 1500 és 500 közötti időszakban. Ezek a síremlékek hűen tükrözik a korabeli partvidéki közösségek temetkezési szokásait és társadalmi tagozódását. A legkülönlegesebb építmény a „Templompadló” (Kirkonlaattia) néven ismert négyzet alakú kőhalom, amelynek lapos teteje és szabályos formája egyedülálló a térségben. Szintén figyelemre méltó a „Hosszú kőfal”, amely egy mintegy 19 méter hosszú síremlék. A lelőhely kulcsfontosságú bizonyítéka a skandináv bronzkori kultúra keleti irányú terjedésének és az akkori emberek hitvilágának.",
      ro: "Sammallahdenmäki este un sit arheologic de o importanță excepțională din epoca bronzului, situat în regiunea Satakunta, și a fost prima locație arheologică din Finlanda inclusă în patrimoniul mondial UNESCO, în 1999. Situl cuprinde 36 de tumuli din piatră, numiți cairnuri, amplasați pe o creastă stâncoasă ce oferă o panoramă vastă. Aceste morminte datează din perioada 1500-500 î.Hr. și oferă detalii prețioase despre ritualurile funerare și structurile sociale ale populațiilor de coastă de acum trei milenii. Un element unic este „Podeaua Bisericii” (Kirkonlaattia), un monument patrulater neobișnuuit, cu o suprafață plană, care contrastează cu formele rotunde ale celorlalte cairnuri. O altă structură notabilă este „Zidul lung de piatră”, un mormânt cu o lungime de aproximativ 19 metri. Situl atestă influența culturii scandinave a epocii bronzului în zona estică a Mării Baltice.",
      en: "Sammallahdenmäki is a highly significant Bronze Age archaeological site in the Satakunta region and was the first Finnish archaeological site to be inscribed on the UNESCO World Heritage List in 1999. The area contains 36 stone burial cairns situated along a rocky ridge, dating from approximately 1500 to 500 BC. These monuments reflect the complex funeral rites and social hierarchies of the coastal communities that inhabited the area over three thousand years ago. The most famous structure is the 'Church Floor' (Kirkonlaattia), a unique quadrangular cairn with a flat top that is exceptionally rare in the Nordic region. Another prominent feature is the 'Long Stone Wall', a cairn measuring nearly 19 meters in length. The site provides essential evidence regarding the eastward spread of Scandinavian Bronze Age culture and the religious beliefs of prehistoric societies.",
    },
    factsAdvanced: {
      de: ["Die Stätte umfasst insgesamt 36 Grabhügel aus der Bronzezeit.", "UNESCO ernannte den Ort im Jahr 1999 zum Weltkulturerbe.", "Die Gräber stammen aus dem Zeitraum von 1500 bis 500 v. Chr.", "Der quadratische 'Kirchenboden' ist ein einzigartiges Monument der Anlage.", "Ein Grabhügel, die 'Lange Steinmauer', ist etwa 19 Meter lang.", "Die Steine wurden ohne Bindemittel zu Hügeln aufgeschichtet."],
      hu: ["A lelőhelyen összesen 36 bronzkori kőhalom-sír található.", "A helyszín 1999-ben került fel az UNESCO Világörökség listájára.", "A síremlékek az i.e. 1500 és 500 közötti időszakból származnak.", "A 'Templompadló' nevű négyzet alakú sír az egyik legritkább lelet.", "A sírok között található egy 19 méter hosszú 'Hosszú kőfal' is.", "A köveket kötőanyag nélkül, szárazon rakva halmozták egymásra."],
      ro: ["Situl cuprinde în total 36 de tumuli funerari din epoca bronzului.", "UNESCO a inclus locația în patrimoniul mondial în anul 1999.", "Monumentele funerare datează din perioada 1500-500 î.Hr.", "Structura numită 'Podeaua Bisericii' este un monument patrulater rar.", "Unul dintre cairnuri, 'Zidul Lung', are o lungime de circa 19 metri.", "Pietrele au fost stivuite manual, fără a folosi niciun fel de mortar."],
      en: ["The site consists of a total of 36 burial cairns from the Bronze Age.", "UNESCO designated the area as a World Heritage site in 1999.", "The cairns date back to the period between 1500 and 500 BC.", "The 'Church Floor' is a unique quadrangular burial monument.", "One specific cairn, the 'Long Stone Wall', is about 19 meters long.", "The stones were piled manually without the use of any binding mortar."],
    },
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
    descriptionAdvanced: {
      de: "Die Schlacht von Tali-Ihantala im Sommer 1944 war die größte militärische Auseinandersetzung in der Geschichte der nordischen Länder. Sie fand während des Fortsetzungskrieges auf der Karelischen Landenge statt, als die finnische Armee versuchte, den massiven Vorstoß der sowjetischen Truppen zu stoppen. Zwischen dem 25. Juni und dem 9. Juli 1944 konzentrierten sich die Kämpfe auf ein relativ kleines Gebiet, in dem beide Seiten enorme Mengen an Artillerie und Panzern einsetzten. Dank der erfolgreichen Defensive und der Unterstützung durch deutsche Fliegerkräfte konnte Finnland seine Unabhängigkeit bewahren und den sowjetischen Durchbruch in das Landesinnere verhindern. Das Schlachtfeld ist heute ein bedeutendes Gedenkareal mit zahlreichen Denkmälern und Überresten von Befestigungen. Die Schlacht gilt als entscheidender Wendepunkt, der letztlich zum Waffenstillstand im September 1944 führte.",
      hu: "A Tali-Ihantala-i csata 1944 nyarán az északi országok történetének legnagyobb katonai összecsapása volt. A folytatólagos háború idején zajlott a Karjalai-földszoroson, ahol a finn hadsereg megkísérelte megállítani a szovjet csapatok elsöprő erejű offenzíváját. 1944. június 25. és július 9. között a harcok egy viszonylag szűk területre koncentrálódtak, ahol mindkét fél hatalmas mennyiségű tüzérséget és páncélost vetett be. A sikeres védekezésnek és a német légierő támogatásának köszönhetően Finnországnak sikerült megőriznie függetlenségét és megakadályoznia a szovjet betörést az ország belsejébe. A csatatér ma fontos emlékhely, számos emlékművel és erődítésmaradvánnyal. Ez az ütközet sorsdöntő fordulatnak bizonyult, amely végül az 1944. szeptemberi fegyverszünethez vezetett.",
      ro: "Bătălia de la Tali-Ihantala, purtată în vara anului 1944, a fost cel mai mare conflict militar din istoria țărilor nordice. Aceasta s-a desfășurat în timpul Războiului de Continuare pe Istmul Karelia, unde armata finlandeză a încercat să oprească ofensiva masivă a trupelor sovietice. Între 25 iunie și 9 iulie 1944, luptele s-au concentrat într-o zonă relativ restrânsă, ambele părți utilizând cantități enorme de artilerie și tancuri. Datorită unei defensive de succes și sprijinului forțelor aeriene germane, Finlanda a reușit să-și mențină independența și să împiedice pătrunderea sovietică în interiorul țării. Câmpul de luptă este astăzi un sit memorial important, cu numeroase monumente și vestigii ale fortificațiilor. Bătălia este considerată un punct de cotitură decisiv care a facilitat semnarea armistițiului în septembrie 1944.",
      en: "The Battle of Tali-Ihantala, fought in the summer of 1944, was the largest military engagement in the history of the Nordic countries. It took place during the Continuation War on the Karelian Isthmus, as the Finnish Army sought to halt a massive offensive by Soviet forces. Between June 25 and July 9, 1944, the fighting intensified within a relatively small area, with both sides employing vast amounts of artillery and armored units. Thanks to a successful defensive strategy and support from German air units, Finland managed to preserve its independence and prevent a Soviet breakthrough into the heart of the country. Today, the battlefield serves as a major memorial site featuring numerous monuments and remnants of defensive fortifications. The battle is recognized as a decisive turning point that eventually led to the ceasefire in September 1944.",
    },
    factsAdvanced: {
      de: ["Die Schlacht dauerte vom 25. Juni bis zum 9. Juli 1944.", "Es war die größte Schlacht in der Geschichte Nordeuropas.", "Finnland setzte rund 50.000 Soldaten zur Verteidigung ein.", "Die sowjetischen Truppen verfügten über etwa 150.000 Soldaten.", "Deutsche Stuka-Verbände unterstützten die finnischen Truppen.", "Die finnische Artillerie feuerte Zehntausende Granaten ab."],
      hu: ["A csata 1944. június 25-től július 9-ig tartott.", "Ez volt Észak-Európa történelmének legnagyobb ütközete.", "Finnország mintegy 50 000 katonát mozgósított a védelemre.", "A szovjet csapatok létszáma megközelítőleg 150 000 fő volt.", "A német Stuka-rajok légi támogatást nyújtottak a finneknek.", "A finn tüzérség több tízezer gránátot lőtt ki a harcok alatt."],
      ro: ["Bătălia s-a desfășurat între 25 iunie și 9 iulie 1944.", "A fost cea mai mare bătălie din istoria Europei de Nord.", "Finlanda a mobilizat circa 50.000 de soldați pentru apărare.", "Trupele sovietice numărau aproximativ 150.000 de militari.", "Unitățile germane de Stuka au oferit sprijin aerian vital.", "Artileria finlandeză a tras zeci de mii de proiectile în timpul luptei."],
      en: ["The battle took place from June 25 to July 9, 1944.", "It was the largest battle in the history of Northern Europe.", "Finland deployed around 50,000 soldiers for the defense.", "Soviet forces numbered approximately 150,000 troops.", "German Stuka units provided critical air support to the Finns.", "Finnish artillery fired tens of thousands of shells during the conflict."],
    },
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
    descriptionAdvanced: {
      de: "Das Salpa-Linien-Museum in Miehikkälä dokumentiert die Geschichte der Salpa-Linie, einer der gewaltigsten Verteidigungsanlagen des Zweiten Weltkriegs. Die Salpalinja erstreckt sich über eine Länge von rund 1.200 Kilometern von der Ostsee bis zum Eismeer und wurde zwischen 1940 und 1944 errichtet, um Finnland vor einer sowjetischen Invasion zu schützen. Das Museumsgelände umfasst originalgetreue Bunker, Schützengräben und Panzersperren aus massiven Steinblöcken, die die enorme technische Leistung der damaligen Zeit verdeutlichen. Die Anlage kam während des Krieges nie direkt in Kampfhandlungen zum Einsatz, diente jedoch als wirksames Abschreckungsmittel bei den Friedensverhandlungen. Besucher können die unterirdischen Mannschaftsquartiere und Gefechtsstände besichtigen, die tief in den Fels gehauen wurden. Das Museum vermittelt eindrucksvoll die Entschlossenheit der finnischen Nation, ihre Grenzen mit allen Mitteln zu sichern.",
      hu: "A miehikkäläi Salpa-vonal Múzeum a második világháború egyik leghatalmasabb védelmi rendszerének, a Salpa-vonalnak állít emléket. A Salpalinja mintegy 1200 kilométer hosszan húzódik a Balti-tengertől egészen a Jeges-tengerig, és 1940 és 1944 között épült ki Finnország szovjet invázió elleni védelmére. A múzeum területén eredeti állapotban megőrzött bunkerek, lövészárkok és hatalmas kőtömbökből álló harckocsiakadályok láthatók, amelyek jól szemléltetik a korabeli mérnöki teljesítményt. Bár a védelmi vonalon soha nem zajlottak tényleges harcok, elrettentő ereje kulcsfontosságú volt a béketárgyalások során. A látogatók bejárhatják a sziklába vájt föld alatti legénységi szállásokat és harcálláspontokat is. A múzeum hűen tükrözi a finn nemzet elszántságát határai mindenáron való megvédésére.",
      ro: "Muzeul Liniei Salpa din Miehikkälä documentează istoria Liniei Salpa, una dintre cele mai vaste structuri defensive din cel de-al Doilea Război Mondial. Salpalinja se întinde pe o lungime de aproximativ 1.200 de kilometri, de la Marea Baltică până la Oceanul Arctic, fiind construită între 1940 și 1944 pentru a proteja Finlanda de o invazie sovietică. Complexul muzeal cuprinde buncăre originale, tranșee și bariere antitanc din blocuri masive de piatră, care demonstrează efortul tehnic colosal depus în acea perioadă. Deși linia defensivă nu a fost utilizată direct în lupte, ea a servit ca element de descurajare strategic în timpul negocierilor de pace. Vizitatorii pot explora adăposturile subterane și posturile de comandă săpate adânc în stâncă. Muzeul oferă o perspectivă impresionantă asupra determinării națiunii finlandeze de a-și securiza granițele.",
      en: "The Salpa Line Museum in Miehikkälä documents the history of the Salpa Line, one of the most formidable defensive structures of World War II. The Salpalinja stretches approximately 1,200 kilometers from the Baltic Sea to the Arctic Ocean and was constructed between 1940 and 1944 to protect Finland from a Soviet invasion. The museum site features original bunkers, trenches, and anti-tank barriers made of massive stone blocks, showcasing the immense engineering efforts of the era. Although the defensive line never saw actual combat, its presence acted as a vital strategic deterrent during peace negotiations. Visitors can explore underground barracks and command posts carved deep into the solid bedrock. The museum vividly conveys the Finnish nation's determination to secure its borders and preserve its sovereignty at any cost.",
    },
    factsAdvanced: {
      de: ["Die Salpa-Linie erstreckt sich über eine Länge von 1.200 Kilometern.", "Der Bau der Verteidigungsanlage begann im Jahr 1940.", "Insgesamt wurden etwa 728 Betonbunker entlang der Linie errichtet.", "Rund 350.000 Meter Schützengräben wurden ausgehoben.", "Die Panzersperren bestehen aus über 200.000 Granitblöcken.", "Das Museum in Miehikkälä wurde im Jahr 1987 eröffnet."],
      hu: ["A Salpa-vonal teljes hossza megközelítőleg 1200 kilométer.", "A védelmi rendszer építése 1940-ben vette kezdetét.", "A vonal mentén összesen 728 betonbunkert alakítottak ki.", "Körülbelül 350 000 méternyi lövészárkot ástak ki a katonák.", "A harckocsiakadályokhoz több mint 200 000 gránittömböt használtak.", "A miehikkäläi múzeum 1987-ben nyitotta meg kapuit a látogatók előtt."],
      ro: ["Linia Salpa are o lungime totală de circa 1.200 de kilometri.", "Construcția sistemului defensiv a început în anul 1940.", "De-a lungul liniei au fost ridicate 728 de buncăre din beton.", "Au fost săpați aproximativ 350.000 de metri de tranșee.", "Barierele antitanc includ peste 200.000 de blocuri de granit.", "Muzeul din Miehikkälä a fost inaugurat oficial în anul 1987."],
      en: ["The Salpa Line spans a total length of 1,200 kilometers.", "Construction of the defensive system began in the year 1940.", "A total of 728 concrete bunkers were built along the line.", "Approximately 350,000 meters of trenches were excavated.", "Anti-tank barriers consist of more than 200,000 granite blocks.", "The museum in Miehikkälä was officially opened in 1987."],
    },
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
    descriptionAdvanced: {
      de: "Die kaiserliche Fischerhütte von Langinkoski in der Nähe von Kotka war der bevorzugte Rückzugsort des russischen Kaisers Alexander III. während seiner Besuche in Finnland. Das 1889 fertiggestellte Holzgebäude liegt malerisch an den Stromschnellen des Flusses Kymijoki, der für seinen Reichtum an Lachsen bekannt ist. Im Gegensatz zur Pracht der St. Petersburger Paläste zeichnet sich die Lodge durch eine bewusste Schlichtheit aus, die dem Wunsch des Kaisers nach einem naturnahen und unbeschwerten Leben entsprach. Das Erdgeschoss beherbergt eine geräumige Küche und Wohnräume, während sich im Obergeschoss die bescheidenen Schlafgemächer der kaiserlichen Familie befinden. Nach der Unabhängigkeit Finnlands im Jahr 1917 wurde das Gebäude verstaatlicht und dient heute als Museum, das originalgetreue Möbel und Alltagsgegenstände der Romanows zeigt. Die umliegende Naturanlage ist heute ein Naturschutzgebiet, das die historische Atmosphäre bewahrt.",
      hu: "A langinkoski császári horgászház Kotka közelében az orosz cár, III. Sándor kedvenc pihenőhelye volt finnországi látogatásai során. Az 1889-ben elkészült faépület festői környezetben, a lazacokban gazdag Kymijoki-folyó zúgóinál fekszik. Ellentétben a szentpétervári paloták pompájával, a házat tudatos egyszerűség jellemzi, amely a cár természetközeli és gondtalan életmód iránti vágyát tükrözte. A földszinten tágas konyha és nappali található, míg az emeleten a császári család szerény hálószobái kaptak helyet. Finnország 1917-es függetlenné válása után az épület állami tulajdonba került, ma pedig múzeumként működik, amely a Romanovok eredeti bútorait és mindennapi tárgyait mutatja be. A házat övező park ma természetvédelmi terület, amely hűen őrzi a történelmi hangulatot.",
      ro: "Cabana imperială de pescuit de la Langinkoski, situată lângă Kotka, a fost locul preferat de retragere al țarului rus Alexandru al III-lea în timpul vizitelor sale în Finlanda. Clădirea din lemn, finalizată în 1889, este amplasată pitoresc lângă pragurile râului Kymijoki, renumit pentru abundența de somon. Spre deosebire de fastul palatelor din Sankt Petersburg, cabana se distinge printr-o simplitate asumată, reflectând dorința țarului pentru un stil de viață apropiat de natură. Parterul găzduiește o bucătărie spațioasă și camere de zi, în timp ce la etaj se află dormitoarele modeste ale familiei imperiale. După independența Finlandei în 1917, edificiul a fost naționalizat, funcționând astăzi ca muzeu ce expune mobilierul original și obiectele cotidiene ale Romanovilor. Parcul înconjurător este în prezent o rezervație naturală care păstrează atmosfera istorică intactă.",
      en: "The Langinkoski Imperial Fishing Lodge near Kotka was the favorite summer retreat of Russian Tsar Alexander III during his visits to Finland. Completed in 1889, the wooden structure is picturesquely situated by the rapids of the Kymijoki River, famous for its abundance of salmon. In stark contrast to the opulence of the St. Petersburg palaces, the lodge is characterized by a deliberate simplicity that reflected the Tsar's desire for a natural and carefree lifestyle. The ground floor houses a spacious kitchen and living areas, while the upper floor contains the modest bedrooms of the imperial family. Following Finland's independence in 1917, the building was nationalized and now serves as a museum displaying original furniture and everyday items belonging to the Romanovs. The surrounding grounds are now a nature reserve, preserving the historical atmosphere for future generations.",
    },
    factsAdvanced: {
      de: ["Die Fischerhütte wurde im Jahr 1889 fertiggestellt.", "Kaiser Alexander III. besuchte den Ort regelmäßig zum Lachsfischen.", "Das Gebäude wurde von finnischen Architekten entworfen.", "Nach 1917 ging die Lodge in den Besitz des finnischen Staates über.", "Das Museum zeigt die originalen Einrichtungsgegenstände der Zarenfamilie.", "Der Kymijoki-Fluss war berühmt für seine Lachsbestände."],
      hu: ["A horgászház építése 1889-ben fejeződött be.", "III. Sándor cár rendszeresen látogatta a helyet lazachorgászat céljából.", "Az épületet neves finn építészek tervezték a cár kérésére.", "1917 után a ház a finn állam tulajdonába került.", "A múzeumban a cári család eredeti berendezési tárgyai láthatók.", "A Kymijoki-folyó híres volt bőséges lazacállományáról."],
      ro: ["Cabana de pescuit a fost finalizată în anul 1889.", "Țarul Alexandru al III-lea vizita regulat locul pentru a pescui somon.", "Clădirea a fost proiectată de arhitecți finlandezi renumiți.", "După anul 1917, cabana a trecut în proprietatea statului finlandez.", "Muzeul expune obiectele de mobilier originale ale familiei țarului.", "Râul Kymijoki era celebru pentru resursele sale de somon."],
      en: ["The fishing lodge was completed in the year 1889.", "Tsar Alexander III regularly visited the site for salmon fishing.", "The building was designed by prominent Finnish architects.", "After 1917, the lodge became the property of the Finnish state.", "The museum displays original furnishings used by the imperial family.", "The Kymijoki River was renowned for its prolific salmon stocks."],
    },
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
    descriptionAdvanced: {
      de: "Die Festung Bomarsund auf den Åland-Inseln war einst das ehrgeizigste militärische Projekt des Russischen Reiches an seiner Westgrenze. Der Bau der gewaltigen Anlage begann im Jahr 1832 und sollte eine strategische Bastion in der Ostsee bilden. Während des Krimkrieges im Jahr 1854 wurde die noch unvollendete Festung jedoch von einer kombinierten britisch-französischen Flotte angegriffen und nach heftigem Beschuss zerstört. Heute zeugen die weitläufigen Ruinen von der einstigen Größe der Anlage, die für bis zu 2.500 Soldaten ausgelegt war. Die Steine der zerstörten Festung wurden später für den Bau zahlreicher Gebäude in Mariehamn und sogar in St. Petersburg verwendet. Das Areal ist heute ein Freilichtmuseum, das Besuchern Einblicke in die militärische Architektur des 19. Jahrhunderts und die bewegte Geschichte der Åland-Inseln bietet. Die Zerstörung von Bomarsund führte letztlich zur Entmilitarisierung der Inselgruppe.",
      hu: "A Bomarsund erőd az Åland-szigeteken az Orosz Birodalom egyik legambiciózusabb katonai projektje volt a nyugati határon. A hatalmas erődítmény építése 1832-ben kezdődött, és célja egy stratégiai bástya létrehozása volt a Balti-tengeren. A krími háború idején, 1854-ben azonban a még befejezetlen erődöt egy egyesített brit-francia flotta támadta meg, és heves ágyúzás után lerombolta. Ma a kiterjedt rommező tanúskodik az egykori épületegyüttes nagyságáról, amelyet eredetileg 2500 katona befogadására terveztek. A lerombolt erőd köveit később számos mariehamni és szentpétervári épület felhúzásához használták fel. A terület ma szabadtéri múzeum, amely bemutatja a 19. századi haditechnikát és a szigetek hányatott történelmét. Bomarsund eleste végül a szigetcsoport demilitarizálásához vezetett.",
      ro: "Cetatea Bomarsund din Insulele Åland a fost cel mai ambițios proiect militar al Imperiului Rus la granița sa vestică. Construcția vastei fortificații a început în 1832, având scopul de a crea un bastion strategic în Marea Baltică. În timpul Războiului Crimeii, în 1854, cetatea încă nefinalizată a fost atacată de o flotă combinată britanico-franceză și distrusă după un bombardament intens. Astăzi, ruinele întinse stau mărturie pentru dimensiunea impresionantă a complexului, care fusese proiectat să găzduiască până la 2.500 de soldați. Pietrele din fortăreața distrusă au fost ulterior utilizate pentru construcția a numeroase clădiri din Mariehamn și chiar din Sankt Petersburg. Situl este în prezent un muzeu în aer liber care oferă detalii despre arhitectura militară a secolului XIX și istoria zbuciumată a regiunii. Distrugerea cetății a dus în final la demilitarizarea Insulelor Åland.",
      en: "Bomarsund Fortress on the Åland Islands was once the most ambitious military project of the Russian Empire on its western frontier. Construction of this massive fortification began in 1832, intended to serve as a strategic bastion in the Baltic Sea. However, during the Crimean War in 1854, the still-unfinished fortress was attacked by a combined British and French naval fleet and destroyed after intense shelling. Today, the extensive ruins bear witness to the former scale of the facility, which was designed to house up to 2,500 soldiers. The stones from the demolished fortress were later used to construct numerous buildings in Mariehamn and even as far as St. Petersburg. The site now functions as an open-air museum, offering visitors insight into 19th-century military architecture and the turbulent history of the islands. The fall of Bomarsund ultimately led to the demilitarization of the Åland archipelago.",
    },
    factsAdvanced: {
      de: ["Der Bau der Festung begann im Jahr 1832.", "Im Jahr 1854 wurde die Anlage von britischen und französischen Truppen zerstört.", "Die Festung war für eine Besatzung von 2.500 Soldaten konzipiert.", "Bomarsund war das wichtigste russische Bollwerk auf den Åland-Inseln.", "Die Steine der Ruine wurden zum Bau der Uspenski-Kathedrale in Helsinki verwendet.", "Die Zerstörung führte zur Entmilitarisierung der Åland-Inseln im Jahr 1856."],
      hu: ["Az erődítmény építése 1832-ben vette kezdetét.", "1854-ben a brit és francia flotta teljesen lerombolta az építményt.", "Az erődöt eredetileg 2500 katona befogadására tervezték.", "Bomarsund volt az Orosz Birodalom legnyugatibb bástyája.", "A romok köveit felhasználták a helsinki Uszpenszkij-székesegyház építéséhez.", "A vár eleste után, 1856-ban nyilvánították Ålandot demilitarizált övezetté."],
      ro: ["Construcția cetății a început în anul 1832.", "În 1854, fortificația a fost distrusă de forțele britanice și franceze.", "Cetatea a fost proiectată pentru o garnizoană de 2.500 de militari.", "Bomarsund reprezenta cel mai important avanpost rus în Åland.", "Pietrele din ruine au fost folosite la Catedrala Uspenski din Helsinki.", "Distrugerea cetății a impus demilitarizarea insulelor în anul 1856."],
      en: ["The construction of the fortress began in the year 1832.", "In 1854, the facility was destroyed by British and French forces.", "The fortress was designed to accommodate a garrison of 2,500 soldiers.", "Bomarsund was the most significant Russian stronghold on the Åland Islands.", "Stones from the ruins were used to build the Uspenski Cathedral in Helsinki.", "The destruction led to the demilitarization of the Åland Islands in 1856."],
    },
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
    descriptionAdvanced: {
      de: "Die Temppeliaukio-Kirche im Helsinki Stadtteil Töölö ist ein weltweit bekanntes Meisterwerk der modernen Architektur, das direkt in den anstehenden Fels gesprengt wurde. Das 1969 fertiggestellte Bauwerk wurde von den Architektenbrüdern Timo und Tuomo Suomalainen entworfen. Das Innere der Kirche wird von einer gewaltigen Kupferkuppel gekrönt, die von 180 schmalen Fensterstreifen getragen wird und so für eine beeindruckende natürliche Belichtung sorgt. Die rauen Felswände wurden im Originalzustand belassen, was der Kirche eine einzigartige Atmosphäre und eine exzellente Akustik verleiht. Aufgrund ihrer außergewöhnlichen Bauweise wird sie oft als „Felsenkirche“ bezeichnet und ist eine der meistbesuchten Sehenswürdigkeiten Finnlands. Neben religiösen Gottesdiensten dient die Kirche häufig als Veranstaltungsort für Konzerte. Die harmonische Verbindung von Naturstein und modernem Design macht sie zu einem Symbol finnischer Baukunst.",
      hu: "A helsinki Töölö negyedben található Temppeliaukio-templom a modern építészet világszerte ismert remekműve, amelyet közvetlenül egy természetes gránitsziklába vájtak. Az 1969-ben befejezett épületet egy építész testvérpár, Timo és Tuomo Suomalainen tervezte. A templom belsejét egy hatalmas rézkupola koronázza meg, amelyet 180 keskeny üvegablak támaszt alá, biztosítva a lenyűgöző természetes fényt. A nyers sziklafalakat eredeti állapotukukban hagyták meg, ami nemcsak különleges hangulatot, hanem kiváló akusztikát is kölcsönöz a térnek. Rendkívüli kialakítása miatt gyakran „Sziklatemplomként” emlegetik, és Finnország egyik leglátogatottabb nevezetessége. A hitéleti szertartások mellett a templom népszerű koncerthelyszín is. A természetes kő és a modern formák harmóniája a finn építőművészet egyik legfontosabb jelképévé tette.",
      ro: "Biserica Temppeliaukio din cartierul Töölö din Helsinki este o capodoperă a arhitecturii moderne, fiind excavată direct într-o stâncă naturală de granit. Finalizată în 1969, construcția a fost proiectată de frații arhitecți Timo și Tuomo Suomalainen. Interiorul bisericii este dominat de o cupolă imensă din cupru, susținută de 180 de ferestre înguste care permit pătrunderea luminii naturale într-un mod spectaculos. Pereții din stâncă brută au fost păstrați în starea lor originală, oferind bisericii o atmosferă unică și o acustică deosebită. Datorită structurii sale neobișnuite, este supranumită adesea „Biserica în Stâncă” și reprezintă unul dintre cele mai vizitate obiective turistice din Finlanda. Pe lângă serviciile religioase, lăcașul găzduiește frecvent concerte de înaltă ținută. Îmbinarea armonioasă dintre elementele naturale și designul avangardist o transformă într-un simbol al creativității finlandeze.",
      en: "Temppeliaukio Church in the Töölö district of Helsinki is a world-renowned masterpiece of modern architecture, excavated directly into solid granite rock. Completed in 1969, the building was designed by brothers Timo and Tuomo Suomalainen. The church interior is crowned by a massive copper dome supported by 180 narrow window panes, which allow natural light to flood the space brilliantly. The raw rock walls were left in their original state, providing the church with a unique atmosphere and exceptional acoustics. Due to its extraordinary construction, it is widely known as the 'Rock Church' and remains one of Finland's most popular tourist destinations. In addition to religious services, the church frequently serves as a venue for high-quality concerts. The seamless integration of natural stone and modern design makes it an enduring symbol of Finnish architectural innovation.",
    },
    factsAdvanced: {
      de: ["Die Kirche wurde im Jahr 1969 fertiggestellt.", "Sie wurde direkt in den natürlichen Granitfels gesprengt.", "Die Kuppel besteht aus Kupfer und hat einen Durchmesser von 24 Metern.", "Insgesamt 180 Fenster verbinden die Kuppel mit den Felswänden.", "Die Architekten Timo und Tuomo Suomalainen gewannen den Entwurfswettbewerb.", "Die Felswände sorgen für eine herausragende Akustik bei Konzerten."],
      hu: ["A templom építése 1969-ben fejeződött be.", "Az épületet közvetlenül a természetes gránitsziklába vájták bele.", "A rézből készült kupola átmérője eléri a 24 métert.", "A kupolát 180 ablak sávja választja el a sziklafalaktól.", "A terveket Timo és Tuomo Suomalainen építészek készítették.", "A nyers sziklafalak kiváló akusztikát biztosítanak a koncertekhez."],
      ro: ["Biserica a fost finalizată și sfințită în anul 1969.", "Structura a fost excavată direct în stânca de granit locală.", "Cupola de cupru are un diametru impresionant de 24 de metri.", "Un număr de 180 de ferestre asigură iluminarea naturală a interiorului.", "Proiectul a fost realizat de frații Timo și Tuomo Suomalainen.", "Pereții naturali de stâncă oferă o acustică superioară pentru evenimente."],
      en: ["The church was completed and consecrated in the year 1969.", "The structure was excavated directly into the natural granite rock.", "The copper dome has a diameter of 24 meters.", "A total of 180 windows surround the dome to provide natural light.", "The building was designed by architects Timo and Tuomo Suomalainen.", "The raw rock walls provide outstanding acoustics for concerts."],
    },
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
    descriptionAdvanced: {
      de: "Die Zentralbibliothek Oodi in Helsinki ist ein hochmodernes Kulturzentrum, das 2018 anlässlich des 100. Jahrestages der finnischen Unabhängigkeit eröffnet wurde. Entworfen vom Architekturbüro ALA Architects, besticht das Gebäude durch seine geschwungene Fassade aus finnischem Fichtenholz und Glas. Die Bibliothek ist weit mehr als nur ein Ort für Bücher; sie bietet auf drei Etagen vielfältige Räumlichkeiten wie Werkstätten mit 3D-Druckern, Aufnahmestudios, Kinos und öffentliche Treffpunkte. Die oberste Etage, das „Bücherparadies“, bietet unter einem wellenförmigen weißen Dach einen Panoramablick über das Stadtzentrum. Oodi gilt als Paradebeispiel für eine moderne Bibliothek, die als offenes „Wohnzimmer der Stadt“ fungiert und lebenslanges Lernen sowie aktive Bürgerschaft fördert. Die Lage direkt gegenüber dem Parlamentsgebäude symbolisiert die Bedeutung von Wissen und Demokratie in der finnischen Gesellschaft.",
      hu: "A helsinki Oodi központi könyvtár egy ultramodern kulturális központ, amelyet 2018-ban, Finnország függetlenségének 100. évfordulója alkalmából adtak át. Az ALA Architects iroda által tervezett épület látványos, finn lucfenyővel burkolt hullámzó homlokzatával és hatalmas üvegfelületeivel tűnik ki. A könyvtár jóval több, mint egy egyszerű könyvtár; három szintjén változatos közösségi terek, 3D nyomtatókkal felszerelt műhelyek, stúdiók, mozi és éttermek kaptak helyet. A legfelső szint, a „könyvmennyország” hullámzó fehér mennyezete alatt lenyűgöző panorámát nyújt a városközpontra. Az Oodi a modern könyvtár mintapéldája, amely a város nyitott „nappalijaként” funkcionál, támogatva az élethosszig tartó tanulást és a közösségi életet. Elhelyezkedése a parlamenttel szemben a tudás és a demokrácia szoros kapcsolatát jelképezi.",
      ro: "Biblioteca Centrală Oodi din Helsinki este un centru cultural ultramodern, inaugurat în 2018 pentru a marca centenarul independenței Finlandei. Proiectată de biroul de arhitectură ALA Architects, clădirea impresionează prin fațada sa curbată, realizată din lemn de molid finlandez și sticlă. Oodi este mult mai mult decât un simplu depozit de cărți; cele trei niveluri ale sale oferă spații diverse, de la ateliere dotate cu imprimante 3D și studiouri de înregistrare, până la săli de cinema și zone de relaxare. Ultimul etaj, supranumit „paradisul cărților”, oferă o panoramă spectaculoasă asupra centrului orașului sub un tavan alb vălurit. Biblioteca este un model pentru instituțiile moderne, funcționând ca o „sufragerie urbană” deschisă tuturor, care promovează educația continuă și democrația. Poziționarea sa vis-à-vis de clădirea Parlamentului subliniază importanța cunoașterii în societatea finlandeză.",
      en: "Helsinki Central Library Oodi is an ultra-modern cultural hub opened in 2018 to celebrate the 100th anniversary of Finnish independence. Designed by ALA Architects, the building features a striking undulating facade made of Finnish spruce and glass. Oodi is far more than a traditional library; its three floors offer diverse spaces, including maker spaces with 3D printers, recording studios, a cinema, and public meeting areas. The top floor, known as 'book heaven', features a wavy white ceiling and provides panoramic views of the city center through its massive windows. Oodi is considered a prime example of a modern library functioning as a 'living room for the city', promoting lifelong learning and active citizenship. Its location directly opposite the Parliament House symbolizes the central role of knowledge and democracy in Finnish society.",
    },
    factsAdvanced: {
      de: ["Die Bibliothek wurde im Dezember 2018 eröffnet.", "Das Gebäude wurde als Geschenk zum 100. Jubiläum der Unabhängigkeit errichtet.", "Die Fassade besteht aus 160 Kilometern finnischem Fichtenholz.", "Oodi umfasst eine Gesamtfläche von etwa 17.000 Quadratmetern.", "Die Bibliothek beherbergt rund 100.000 Bücher auf der obersten Etage.", "Das Projekt kostete insgesamt rund 98 Millionen Euro."],
      hu: ["A könyvtár 2018 decemberében nyitotta meg kapuit.", "Az épület Finnország függetlenségének 100. évfordulójára készült ajándékként.", "A homlokzathoz 160 kilométernyi finn lucfenyőt használtak fel.", "Az Oodi teljes alapterülete körülbelül 17 000 négyzetméter.", "A legfelső szinten mintegy 100 000 könyv áll a látogatók rendelkezésére.", "A projekt teljes költsége megközelítőleg 98 millió euró volt."],
      ro: ["Biblioteca a fost deschisă oficial în decembrie 2018.", "Clădirea a fost un cadou pentru aniversarea a 100 de ani de independență.", "Fațada a necesitat utilizarea a 160 de kilometri de lemn de molid.", "Oodi ocupă o suprafață totală de aproximativ 17.000 de metri pătrați.", "La ultimul etaj se află o colecție de circa 100.000 de cărți.", "Costul total al construcției a fost de aproximativ 98 de milioane de euro."],
      en: ["The library was officially opened in December 2018.", "The building was constructed as a gift for the 100th anniversary of independence.", "The facade used a total of 160 kilometers of Finnish spruce wood.", "Oodi covers a total floor area of approximately 17,000 square meters.", "The library houses about 100,000 books on its top floor.", "The total cost of the project was approximately 98 million euros."],
    },
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
    descriptionAdvanced: {
      de: "Der Hauptbahnhof von Helsinki ist ein ikonisches Wahrzeichen der finnischen Hauptstadt und eines der bedeutendsten Werke des Architekten Eliel Saarinen. Das 1919 eröffnete Gebäude gilt als Meisterwerk des finnischen Nationalromantismus und des Jugendstils. Charakteristisch ist die Fassade aus rotem finnischem Granit sowie der markante Uhrturm mit einer Höhe von 48,5 Metern. Weltberühmt sind die vier monumentalen Statuen an der Vorderseite, die „Laternenträger“ (Lyhdynkantajat), die von Emil Wikström geschaffen wurden und bei Dunkelheit leuchtende Glaskugeln halten. Der Bahnhof ist nicht nur ein zentraler Verkehrsknotenpunkt für täglich rund 200.000 Reisende, sondern auch ein kulturelles Symbol für den Aufbruch Finnlands in die Moderne. Die großzügigen Wartesäle und die detailreiche Innengestaltung spiegeln den hohen ästhetischen Anspruch der Zeit wider. Im Jahr 2013 wurde er von der BBC als einer der schönsten Bahnhöfe der Welt ausgezeichnet.",
      hu: "Helsinki központi pályaudvara a finn főváros egyik legikonikusabb jelképe, és Eliel Saarinen építész egyik legfontosabb alkotása. Az 1919-ben megnyitott épület a finn nemzeti romantika és a szecesszió mesterműve. Jellegzetessége a vörös finn gránitból készült homlokzat, valamint a 48,5 méter magas óratorony. Világszerte ismertek a főbejáratnál álló monumentális szobrok, a „Lámpavivők” (Lyhdynkantajat), amelyeket Emil Wikström alkotott, és amelyek sötétedés után világító üveggömböket tartanak. A pályaudvar nemcsak fontos közlekedési csomópont, amely naponta mintegy 200 000 utast szolgál ki, hanem a finn modernizáció kulturális szimbóluma is. A tágas várótermek és a részletgazdag belső kialakítás hűen tükrözi a korszak esztétikai igényeit. 2013-ban a BBC a világ egyik legszebb vasútállomásának választotta.",
      ro: "Gara Centrală din Helsinki este un simbol iconic al capitalei finlandeze și una dintre cele mai importante lucrări ale arhitectului Eliel Saarinen. Inaugurată în 1919, clădirea este considerată o capodoperă a romantismului național finlandez și a stilului Art Nouveau. Se remarcă prin fațada din granit roșu finlandez și turnul cu ceas distinctiv, înalt de 48,5 metri. Celebre în întreaga lume sunt cele patru statui monumentale de la intrare, „Purtătorii de lanterne” (Lyhdynkantajat), create de Emil Wikström, care țin globuri de sticlă iluminate pe timp de noapte. Gara nu este doar un nod vital de transport, deservind zilnic circa 200.000 de pasageri, ci și un simbol cultural al progresului Finlandei. Sălile de așteptare spațioase și detaliile interioare rafinate reflectă standardele estetice ridicate ale epocii. În 2013, BBC a inclus-o în topul celor mai frumoase gări din lume.",
      en: "Helsinki Central Station is an iconic landmark of the Finnish capital and one of the most significant works by architect Eliel Saarinen. Opened in 1919, the building is regarded as a masterpiece of Finnish National Romanticism and Art Nouveau. It is characterized by its red Finnish granite facade and a prominent clock tower standing 48.5 meters tall. World-famous are the four monumental statues at the front entrance, known as 'The Lantern Carriers' (Lyhdynkantajat), sculpted by Emil Wikström, which hold glowing glass spheres after dark. The station is not only a vital transport hub serving approximately 200,000 passengers daily but also a cultural symbol of Finland's transition into modernity. Its grand waiting halls and intricate interior details reflect the high aesthetic standards of the period. In 2013, the BBC recognized it as one of the most beautiful railway stations in the world.",
    },
    factsAdvanced: {
      de: ["Der Bahnhof wurde im Jahr 1919 offiziell eröffnet.", "Der markante Uhrturm hat eine Höhe von 48,5 Metern.", "Die Fassade besteht vollständig aus finnischem Granit.", "Täglich nutzen etwa 200.000 Passagiere den Bahnhof.", "Die Lantern-Carrier-Statuen wurden vom Bildhauer Emil Wikström geschaffen.", "Der Architekt Eliel Saarinen gewann 1904 den Entwurfswettbewerb."],
      hu: ["A pályaudvart hivatalosan 1919-ben nyitották meg.", "A jellegzetes óratorony magassága 48,5 méter.", "A homlokzat teljes egészében vörös finn gránitból készült.", "Naponta körülbelül 200 000 utas fordul meg az állomáson.", "A Lámpavivő szobrokat Emil Wikström szobrászművész készítette.", "Eliel Saarinen építész 1904-ben nyerte meg a tervpályázatot."],
      ro: ["Gara a fost inaugurată oficial în anul 1919.", "Turnul cu ceas are o înălțime de 48,5 metri.", "Întreaga fațadă este construită din granit roșu finlandez.", "Zilnic, gara este tranzitată de aproximativ 200.000 de pasageri.", "Statuile 'Purtătorii de lanterne' sunt opera lui Emil Wikström.", "Arhitectul Eliel Saarinen a câștigat concursul de design în 1904."],
      en: ["The station was officially opened in the year 1919.", "The prominent clock tower stands at a height of 48.5 meters.", "The facade is constructed entirely from Finnish red granite.", "Approximately 200,000 passengers use the station every day.", "The Lantern Carrier statues were created by sculptor Emil Wikström.", "Architect Eliel Saarinen won the design competition in 1904."],
    },
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
    descriptionAdvanced: {
      de: "Das Ateneum ist das bedeutendste Kunstmuseum Finnlands und Teil der Finnischen Nationalgalerie im Zentrum von Helsinki. Das im Stil der Neorenaissance errichtete Gebäude wurde vom Architekten Theodor Höijer entworfen und im Jahr 1887 feierlich eingeweiht. Die Fassade des monumentalen Bauwerks ist mit Skulpturen und Reliefs geschmückt, die bedeutende Künstler der Weltgeschichte sowie Symbole der Künste darstellen. Im Inneren beherbergt das Museum die umfangreichste Sammlung klassischer finnischer Kunst, die den Zeitraum vom 18. Jahrhundert bis zur Moderne des 20. Jahrhunderts abdeckt. Besonders hervorzuheben sind die Werke aus dem Goldenen Zeitalter der finnischen Malerei, darunter ikonische Gemälde von Akseli Gallen-Kallela und Helene Schjerfbeck. Neben der nationalen Sammlung verfügt das Ateneum auch über bemerkenswerte internationale Exponate, darunter ein Werk von Vincent van Gogh, das als erstes weltweit in eine öffentliche Sammlung aufgenommen wurde. Das Museum fungiert heute als zentraler Ort für die Vermittlung der finnischen kulturellen Identität und zieht jährlich hunderttausende Besucher an.",
      hu: "Az Ateneum Finnország legfontosabb művészeti múzeuma és a Finn Nemzeti Galéria központi egysége, amely Helsinki szívében, a vasútállomással szemben található. A Theodor Höijer építész által tervezett neoreneszánsz épületet 1887-ben adták át, és azóta a finn kulturális élet egyik legfőbb bástyájaként szolgál. A homlokzatot díszítő szobrok és domborművek híres művészeket és a művészetek allegóriáit ábrázolják, hangsúlyozva az intézmény tudományos és esztétikai küldetését. A gyűjtemény a finn művészet történetét öleli fel a 18. század közepétől egészen az 1950-es évekig, bemutatva a nemzeti romantika és a modernizmus legfontosabb alkotásait. Kiemelt helyet foglalnak el Akseli Gallen-Kallela, Hugo Simberg és Helene Schjerfbeck mesterművei, amelyek a finn identitás alapköveinek számítanak. Az Ateneum volt az első múzeum a világon, amely Vincent van Gogh-festményt vásárolt meg közgyűjtemény számára 1903-ban, jelezve a kurátorok akkori nemzetközi nyitottságát. Az épület és a benne őrzött kincsek a finn aranykor legfontosabb emlékeit őrzik az utókor számára.",
      ro: "Ateneum este cel mai important muzeu de artă din Finlanda și face parte din Galeria Națională Finlandeză, fiind situat în centrul orașului Helsinki. Clădirea a fost proiectată de arhitectul Theodor Höijer în stil neorenascentist și a fost finalizată în anul 1887. Fațada impresionantă a edificiului este decorată cu sculpturi și reliefuri care onorează mari artiști ai lumii și simbolizează diversele ramuri ale artelor frumoase. Muzeul găzduiește cea mai vastă colecție de artă clasică din Finlanda, acoperind perioada de la mijlocul secolului al XVIII-lea până în anii 1950. Aici pot fi admirate lucrări emblematice din Epoca de Aur a picturii finlandeze, semnate de maeștri precum Akseli Gallen-Kallela sau Helene Schjerfbeck. Un fapt remarcabil este că Ateneum a fost primul muzeu din lume care a achiziționat o lucrare de Vincent van Gogh pentru o colecție publică, în anul 1903. Instituția joacă un rol vital în conservarea moștenirii culturale naționale și organizează frecvent expoziții temporare de talie internațională.",
      en: "The Ateneum is Finland's premier art museum and a central part of the Finnish National Gallery, located in the heart of Helsinki across from the Central Railway Station. Designed by architect Theodor Höijer, the Neo-Renaissance building was completed in 1887 and serves as a monument to Finnish culture. The facade is intricately decorated with sculptures and reliefs representing legendary artists and the muses of various art forms. Inside, the museum houses the country's most extensive collection of classical art, spanning from the mid-18th century to the mid-20th century. It is particularly renowned for its masterpieces from the Golden Age of Finnish art, including works by Akseli Gallen-Kallela, Hugo Simberg, and Helene Schjerfbeck. Notably, in 1903, the Ateneum became the first museum in the world to include a painting by Vincent van Gogh in its public collection. Today, the museum remains a vital cultural hub, preserving the nation's artistic identity while hosting world-class international exhibitions.",
    },
    factsAdvanced: {
      de: ["Eröffnung des Gebäudes am 13. Oktober 1887.", "Entworfen vom Architekten Theodor Höijer im Neorenaissance-Stil.", "Beherbergt über 20.000 Kunstwerke in der Sammlung.", "Erstes Museum weltweit, das 1903 einen Van Gogh erwarb.", "Sitz der Finnischen Nationalgalerie zusammen mit Kiasma und Sinebrychoff.", "Umfassende Renovierung des Gebäudes zwischen 1985 und 1991."],
      hu: ["Az épületet 1887. október 13-án avatták fel.", "Theodor Höijer építész tervezte neoreneszánsz stílusban.", "A gyűjtemény több mint 20 000 műtárgyat számlál.", "1903-ban itt vásárolták meg a világ első közgyűjteményi Van Gogh-képét.", "A homlokzaton Bramante, Phidias és Raffaello szobrai láthatók.", "A múzeum 1991-ben nyitott meg újra egy hétéves felújítás után."],
      ro: ["Clădirea a fost inaugurată oficial la 13 octombrie 1887.", "Proiectată de Theodor Höijer în stilul arhitectural neorenascentist.", "Colecția muzeului cuprinde peste 20.000 de obiecte de artă.", "În 1903, a devenit primul muzeu din lume care a expus un Van Gogh.", "Fațada include busturile artiștilor Bramante, Phidias și Rafael.", "Face parte din structura Galeriei Naționale Finlandeze."],
      en: ["The building was officially opened on October 13, 1887.", "Designed by Theodor Höijer in the Neo-Renaissance architectural style.", "The collection includes more than 20,000 individual artworks.", "In 1903, it became the first museum to purchase a Van Gogh painting.", "The facade features busts of Bramante, Phidias, and Raphael.", "It underwent a major structural renovation from 1985 to 1991."],
    },
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
    descriptionAdvanced: {
      de: "Das Nationalmuseum von Finnland (Kansallismuseo) präsentiert die Geschichte des Landes von der Steinzeit bis zur Gegenwart in einem architektonisch einzigartigen Rahmen. Das Gebäude in Helsinki wurde von den Architekten Herman Gesellius, Armas Lindgren und Eliel Saarinen entworfen und gilt als eines der bedeutendsten Beispiele der finnischen Nationalromantik. Es wurde zwischen 1905 und 1910 erbaut und im Jahr 1916 für das Publikum geöffnet. Mit seinem hohen Turm und der an mittelalterliche Burgen und Kirchen erinnernden Gestaltung symbolisiert es den Stolz der finnischen Nation während der Zeit des russischen Großfürstentums. Im Inneren beeindrucken die monumentalen Deckenfresken in der Eingangshalle, die von Akseli Gallen-Kallela geschaffen wurden und Szenen aus dem Nationalepos Kalevala darstellen. Die Ausstellungen umfassen archäologische Funde, ethnographische Objekte sowie Dokumente zur politischen Entwicklung Finnlands. Als zentrales Gedächtnis des Landes vermittelt das Museum tiefgreifende Einblicke in die Entwicklung der finnischen Gesellschaft, Kultur und Identität über Jahrtausende hinweg.",
      hu: "A Finn Nemzeti Múzeum (Kansallismuseo) Helsinki központjában található, és az ország történelmét mutatja be az őskortól napjainkig. Az épület a finn nemzeti romantikus építészet egyik legkiemelkedőbb alkotása, amelyet a híres Gesellius, Lindgren és Saarinen trió tervezett. Az 1905 és 1910 között épült épületet 1916-ban nyitották meg a nagyközönség előtt, nem sokkal Finnország függetlenné válása előtt. Külseje középkori finn várakat és templomokat idéz, magas tornyával pedig a városkép egyik meghatározó eleme. A bejárati csarnok mennyezetét Akseli Gallen-Kallela lenyűgöző freskói díszítik, amelyek a Kalevala nemzeti eposz jeleneteit örökítik meg. A múzeum tárlatai felölelik a régészeti leleteket, a finn néprajzi kincseket, valamint a svéd és orosz fennhatóság idejéből származó történelmi dokumentumokat. Az intézmény célja a finn nemzeti öntudat erősítése és a kulturális örökség tudományos igényű megőrzése a jövő nemzedékei számára.",
      ro: "Muzeul Național al Finlandei (Kansallismuseo) oferă o perspectivă exhaustivă asupra istoriei finlandeze, de la epoca pietrei până în prezent. Situat în Helsinki, edificiul este o capodoperă a stilului romantic național, fiind proiectat de arhitecții Herman Gesellius, Armas Lindgren și Eliel Saarinen. Construcția a avut loc între anii 1905 și 1910, iar muzeul și-a deschis porțile pentru public în 1916. Aspectul exterior amintește de castelele și bisericile medievale finlandeze, având un turn înalt care domină împrejurimile. Interiorul este celebru pentru frescele de pe tavanul holului de la intrare, pictate de Akseli Gallen-Kallela, care ilustrează scene din epopeea națională Kalevala. Colecțiile muzeului includ artefacte arheologice rare, obiecte etnografice și documente istorice ce atestă evoluția politică a națiunii. Ca instituție centrală de conservare, muzeul joacă un rol esențial în educarea publicului despre identitatea și rădăcinile profunde ale poporului finlandez.",
      en: "The National Museum of Finland (Kansallismuseo) chronicles the history of the Finnish people from prehistoric times to the modern day. Located in central Helsinki, the building is a prime example of Finnish National Romantic architecture, designed by the renowned firm of Gesellius, Lindgren, and Saarinen. Construction took place between 1905 and 1910, and the museum officially opened to the public in 1916. The architecture draws inspiration from medieval Finnish castles and stone churches, featuring a prominent spire and granite masonry. One of the interior's most striking features is the series of ceiling frescoes in the entrance hall, painted by Akseli Gallen-Kallela, depicting scenes from the Kalevala epic. The museum's extensive galleries house archaeological finds, ethnographic treasures, and exhibits detailing Finland's path to independence. It serves as a vital repository of national heritage, offering visitors a deep understanding of the country's social and cultural evolution over millennia.",
    },
    factsAdvanced: {
      de: ["Bauzeit des Gebäudes von 1905 bis 1910.", "Eröffnung für die Öffentlichkeit im Jahr 1916.", "Architekten-Trio: Herman Gesellius, Armas Lindgren, Eliel Saarinen.", "Deckenfresken von Akseli Gallen-Kallela (1928 gemalt).", "Der markante Turm ist 55 Meter hoch.", "Die Sammlung umfasst über eine halbe Million Objekte."],
      hu: ["Az épület 1905 és 1910 között épült fel.", "A nagyközönség számára 1916-ban nyílt meg.", "Tervezői a Gesellius, Lindgren és Eliel Saarinen iroda tagjai.", "A bejárati freskókat 1928-ban festette Akseli Gallen-Kallela.", "Az épület tornya 55 méter magasra emelkedik.", "A gyűjtemény több mint 500 000 tárgyat őriz."],
      ro: ["Construit între 1905 și 1910 în stil romantic național.", "Inaugurat oficial în anul 1916.", "Arhitecți: Herman Gesellius, Armas Lindgren și Eliel Saarinen.", "Frescele din hol au fost pictate de Gallen-Kallela în 1928.", "Turnul muzeului are o înălțime de 55 de metri.", "Deține o colecție de peste 500.000 de piese istorice."],
      en: ["Constructed between 1905 and 1910 in National Romantic style.", "Opened its doors to the general public in 1916.", "Designed by Herman Gesellius, Armas Lindgren, and Eliel Saarinen.", "Ceiling frescoes were added by Akseli Gallen-Kallela in 1928.", "The museum's characteristic tower is 55 meters high.", "The collection contains over 500,000 historical objects."],
    },
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
    descriptionAdvanced: {
      de: "Die Finlandia-Halle in Helsinki ist ein weltberühmtes Meisterwerk der modernen Architektur und wurde vom finnischen Architekten Alvar Aalto entworfen. Das Gebäude wurde 1971 fertiggestellt und im Jahr 1975 um einen Kongressflügel erweitert. Es dient als führendes Konzert- und Kongresszentrum Finnlands und ist ein Symbol für die kulturelle Moderne des Landes. Die Fassade besteht aus weißem Carrara-Marmor, der einen starken Kontrast zum umgebenden Park am Töölönlahti-Ufer bildet. Aaltos Designphilosophie des Gesamtkunstwerks zeigt sich in jedem Detail, von den speziell angefertigten Möbeln bis hin zu den asymmetrischen Formen der Konzertsäle. Die Finlandia-Halle erlangte weltweite politische Bedeutung als Austragungsort der Konferenz über Sicherheit und Zusammenarbeit in Europa (KSZE) im Jahr 1975. In jüngerer Zeit wurden umfangreiche Renovierungsarbeiten durchgeführt, um den empfindlichen Marmor an der Außenfassade zu ersetzen und die technische Infrastruktur zu modernisieren. Das Gebäude bleibt ein zentraler Ort für internationale Begegnungen und hochkarätige musikalische Aufführungen.",
      hu: "A Finlandia-csarnok (Finlandia-talo) Helsinki egyik legfontosabb építészeti jelképe, amelyet a világhírű építész, Alvar Aalto tervezett. Az 1971-ben átadott épület a modern skandináv építészet kiemelkedő példája, amely harmonikusan illeszkedik a Töölönlahti-öböl partján fekvő parkos környezetbe. A homlokzatot fehér Carrara márvány borítja, amely tisztaságot és eleganciát sugároz, bár az éghajlati viszonyok miatt többször is felújításra szorult. Aalto nemcsak az épület formáját, hanem a belső berendezést, a bútorokat és a világítást is maga tervezte, megvalósítva a 'Gesamtkunstwerk' elvét. Az épület 1975-ben történelmi jelentőségre tett szert, amikor itt rendezték meg az Európai Biztonsági és Együttműködési Értekezletet (EBEÉ), ahol aláírták a híres Helsinki Záróokmányt. A csarnok koncertterme és konferenciaközpontja ma is az ország egyik legfontosabb diplomáciai és kulturális helyszíne. Jelenleg is zajlik a korszerűsítése, hogy megfeleljen a 21. századi technikai és fenntarthatósági követelményeknek.",
      ro: "Sala Finlandia (Finlandia-talo) din Helsinki este un punct de referință al arhitecturii moderne, fiind proiectată de celebrul arhitect finlandez Alvar Aalto. Finalizată în 1971, clădirea a fost extinsă cu o aripă dedicată congreselor în 1975. Structura este renumită pentru utilizarea marmurei albe de Carrara pe fațadă, care creează un contrast vizual puternic cu peisajul parcului Töölönlahti. Interiorul reflectă conceptul de operă de artă totală, unde Aalto a proiectat totul, de la acustica sălilor de concerte până la mobilier și corpurile de iluminat. Edificiul a dobândit o importanță istorică globală în 1975, când a găzduit Conferința pentru Securitate și Cooperare în Europa (CSCE), unde s-a semnat Actul Final de la Helsinki. De-a lungul anilor, Sala Finlandia a fost supusă mai multor procese de renovare pentru a înlocui plăcile de marmură deteriorate și pentru a îmbunătăți eficiența energetică. Rămâne unul dintre cele mai importante centre de congrese și concerte din Europa de Nord, atrăgând anual mii de delegați și turiști.",
      en: "Finlandia Hall is a world-renowned masterpiece of modern architecture located in Helsinki, designed by the legendary Finnish architect Alvar Aalto. Completed in 1971, with a congress wing added in 1975, the building serves as the premier concert and convention center in Finland. Its exterior is famously clad in white Carrara marble, which was chosen to contrast with the lush greenery of the surrounding Töölönlahti park. Aalto's design emphasizes the concept of a 'total work of art,' where he designed every detail, including the furniture, lighting, and specialized acoustic elements of the concert halls. The hall gained significant geopolitical importance in 1975 when it hosted the Conference on Security and Co-operation in Europe (CSCE), leading to the signing of the Helsinki Accords. Despite ongoing challenges with the durability of the marble facade, the building continues to be a symbol of Finnish modernism. It is currently undergoing extensive modernization to preserve its cultural legacy for future generations.",
    },
    factsAdvanced: {
      de: ["Eröffnung des Hauptgebäudes im Jahr 1971.", "Entworfen vom Architekten Alvar Aalto.", "Hauptfassade aus weißem Carrara-Marmor.", "Austragungsort der KSZE-Konferenz im Jahr 1975.", "Der Hauptkonzertsaal bietet Platz für 1.700 Personen.", "Erweiterung um den Kongressflügel im Jahr 1975."],
      hu: ["A főépületet 1971-ben adták át.", "Alvar Aalto építész utolsó nagy munkái közé tartozik.", "A homlokzat 7000 négyzetméternyi márvánnyal borított.", "Itt írták alá 1975-ben a Helsinki Záróokmányt.", "A hangversenyterem befogadóképessége 1700 fő.", "Az épületet 2022 és 2024 között teljesen felújítják."],
      ro: ["Clădirea principală a fost inaugurată în 1971.", "Proiectată de Alvar Aalto ca o operă de artă totală.", "Fațada este placată cu marmură albă de Carrara.", "Locul semnării Actului Final de la Helsinki în 1975.", "Sala principală are o capacitate de 1.700 de locuri.", "Aripa congreselor a fost adăugată în anul 1975."],
      en: ["The main building was completed and opened in 1971.", "Designed by the famous Finnish architect Alvar Aalto.", "The facade consists of white Carrara marble tiles.", "Hosted the historic CSCE conference in 1975.", "The main concert hall can accommodate 1,700 guests.", "A separate congress wing was added in 1975."],
    },
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
    descriptionAdvanced: {
      de: "Die Uspenski-Kathedrale in Helsinki ist die größte orthodoxe Kirche in West- und Nordeuropa und ein markantes Zeugnis des russischen Erbes in Finnland. Auf einem Felsen auf der Halbinsel Katajanokka thronend, prägt sie mit ihren roten Backsteinmauern und den dreizehn vergoldeten Kuppeln das Stadtbild. Die Kathedrale wurde zwischen 1862 und 1868 nach Plänen des russischen Architekten Aleksei Gornostajew erbaut und ist der Entschlafung der Gottesmutter gewidmet. Der Baustil ist eine Mischung aus byzantinischen Elementen und traditionellen russischen Kirchenbauformen. Im Inneren beeindruckt die Kathedrale durch eine prachtvolle Ikonostase und reich verzierte Deckenfresken, die eine feierliche Atmosphäre schaffen. Die dreizehn Kuppeln symbolisieren Christus und die zwölf Apostel. Die Kathedrale dient der finnischen orthodoxen Kirche als Hauptkirche der Diözese Helsinki und ist ein bedeutendes religiöses Zentrum für die lokale Gemeinde. Jährlich besuchen über eine halbe Million Touristen dieses architektonische Denkmal, das die wechselvolle Geschichte zwischen Finnland und Russland widerspiegelt.",
      hu: "Az Uszpenszkij-székesegyház Helsinki egyik leglátványosabb vallási építménye, amely a Katajanokka-félsziget egy magas szikláján áll. Ez a legnagyobb ortodox templom Észak- és Nyugat-Európában, vörös téglafalai és tizenhárom aranyozott kupolája messziről felismerhetővé teszik. Az 1862 és 1868 között épült katedrálist Alekszej Gornosztajev orosz építész tervezte, az építkezés költségeit nagyrészt közadakozásból és az orosz cári udvar támogatásából fedezték. Az épület stílusa a bizánci és az óorosz építészeti elemeket ötvözi, tükrözve Finnország akkori státuszát az Orosz Birodalmon belül. A tizenhárom kupola Jézust és a tizenkét apostolt jelképezi, a belső teret pedig lenyűgöző ikonosztáz és gazdag falfestmények díszítik. A templom nemcsak vallási központ, hanem a finnországi ortodox kisebbség identitásának is fontos szimbóluma. Évente több mint 500 000 látogató keresi fel, így Helsinki egyik legnépszerűbb turisztikai látványossága, amely különleges kontrasztot alkot a közeli evangélikus székesegyház fehér falával.",
      ro: "Catedrala Uspenski din Helsinki este cea mai mare biserică ortodoxă din Europa de Nord și de Vest, fiind un simbol arhitectural al influenței rusești în Finlanda. Situată pe o stâncă de pe peninsula Katajanokka, catedrala se remarcă prin zidurile sale din cărămidă roșie și cele treisprezece cupole aurite care domină orizontul orașului. Edificiul a fost construit între anii 1862 și 1868, după planurile arhitectului rus Aleksei Gornostaev. Stilul său îmbină elemente bizantine cu forme tradiționale rusești din secolul al XVI-lea. Cele treisprezece domuri îi reprezintă pe Iisus Hristos și pe cei doisprezece apostoli, vârful fiecăruia fiind încununat cu o cruce aurită orientată spre răsărit. Interiorul este bogat decorat cu o iconostasă impresionantă și fresce religioase, oferind un spațiu de rugăciune solemn pentru comunitatea ortodoxă locală. Catedrala Uspenski atrage anual peste jumătate de milion de vizitatori, fiind unul dintre cele mai vizitate puncte de interes din capitala finlandeză.",
      en: "Uspenski Cathedral is the largest Orthodox church in Western and Northern Europe and stands as a prominent landmark on the Katajanokka peninsula in Helsinki. Built between 1862 and 1868, the cathedral was designed by the Russian architect Aleksei Gornostayev in a style that blends Byzantine and traditional Russian influences. Its striking appearance is characterized by dark red brick walls and thirteen golden domes, which symbolize Jesus Christ and the twelve apostles. The cathedral was constructed during the period of the Grand Duchy of Finland and was largely financed by public donations and imperial support. Inside, visitors are greeted by a magnificent iconostasis and ornate ceiling decorations that reflect the spiritual richness of the Orthodox tradition. As the main seat of the Orthodox Diocese of Helsinki, it serves as an important religious center for the Finnish Orthodox community. Today, it is one of Helsinki's most popular tourist attractions, drawing over 500,000 visitors annually who come to admire its unique architecture and historical significance.",
    },
    factsAdvanced: {
      de: ["Bauzeit von 1862 bis 1868.", "Entworfen vom russischen Architekten Aleksei Gornostajew.", "Verfügt über 13 vergoldete Zwiebelkuppeln.", "Größte orthodoxe Kirche in Nord- und Westeuropa.", "Die Backsteine stammen von der zerstörten Festung Bomarsund.", "Die Kathedrale ist der Entschlafung der Gottesmutter gewidmet."],
      hu: ["Az építkezés 1862-ben kezdődött és 1868-ig tartott.", "Alekszej Gornosztajev orosz építész tervei alapján készült.", "A 13 aranyozott kupola Jézust és az apostolokat jelképezi.", "A téglaanyag egy része a Krími háborúban lerombolt Bomarsundból származik.", "A katedrális belső tere 1200 fő befogadására alkalmas.", "Helsinki egyik legfontosabb ortodox vallási központja."],
      ro: ["Construită între 1862 și 1868 din cărămidă roșie.", "Proiectată de arhitectul rus Aleksei Gornostaev.", "Are 13 cupole aurite ce simbolizează pe Hristos și apostolii.", "Materialele provin în parte din ruinele fortăreței Bomarsund.", "Este catedrala principală a Diocezei Ortodoxe de Helsinki.", "Atrage peste 500.000 de turiști în fiecare an."],
      en: ["Constructed between 1862 and 1868 using red bricks.", "Designed by Russian architect Aleksei Gornostayev.", "Features 13 golden domes representing Christ and the apostles.", "The bricks were sourced from the demolished Bomarsund fortress.", "The largest Orthodox church in Western and Northern Europe.", "Consecrated to the Dormition of the Mother of God."],
    },
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
    descriptionAdvanced: {
      de: "Amos Rex ist eines der innovativsten Kunstmuseen Helsinkis und verbindet historische Architektur mit modernster unterirdischer Baukunst. Das Museum wurde 2018 eröffnet und befindet sich unter dem Lasipalatsi (Glaspalast), einem funktionalistischen Gebäude aus dem Jahr 1936 im Zentrum der Stadt. Die Ausstellungsflächen befinden sich komplett unter der Erde, während die markanten, kegelförmigen Dachfenster den darüber liegenden Lasipalatsi-Platz in eine hügelige Spiellandschaft verwandeln. Diese futuristischen Kuppeln dienen gleichzeitig als Oberlichter für die darunter liegenden Galerien und schaffen eine einzigartige Verbindung zwischen dem urbanen Raum und der Kunstwelt. Das Museum wurde vom Architekturbüro JKMM entworfen und ist der Nachfolger des Amos-Anderson-Kunstmuseums. Amos Rex konzentriert sich auf zeitgenössische Kunst, technologisch orientierte Installationen und Klassiker der Moderne. Besonders bekannt wurde das Museum durch seine Eröffnungsausstellung des japanischen Kollektivs teamLab, die Rekordbesucherzahlen anzog. Es gilt heute als ein globales Beispiel für die Umnutzung städtischer Räume für kulturelle Zwecke im 21. Jahrhundert.",
      hu: "Az Amos Rex Helsinki egyik legmodernebb és legizgalmasabb művészeti múzeuma, amely 2018-ban nyitotta meg kapuit a belváros szívében. A múzeum alapját az 1936-ban épült, funkcionalista stílusú Lasipalatsi (Üvegpalota) adja, de a tényleges kiállítóterek a föld alatt kaptak helyet. Az építészek (JKMM Architects) egyedi megoldása révén a múzeum feletti tér hullámzó dombokká alakult, amelyek tetején hatalmas ablakok engedik be a fényt a galériákba. Ezek a futurisztikus dombok ma a városi ifjúság és a turisták kedvenc találkozóhelyei, miközben alattuk 2200 négyzetméternyi kiállítótér található. A múzeum Amos Anderson üzletember és mecénás nevét viseli, és elsősorban a kortárs művészetre, a technológiai alapú installációkra és a 20. századi modernizmusra fókuszál. Megnyitásakor a japán teamLab kollektíva digitális tárlatával vált világhírűvé, amely hetekig tartó sorban állást generált a látogatók körében. Az Amos Rex a kortárs építészet és a közösségi téralkotás egyik legtökéletesebb és leglátványosabb finnországi példája.",
      ro: "Amos Rex este un muzeu de artă inovator situat în inima orașului Helsinki, renumit pentru designul său arhitectural care îmbină vechiul cu noul. Inaugurat în 2018, muzeul este parțial situat sub Lasipalatsi (Palatul de Sticlă), o clădire modernistă iconică construită în 1936. Caracteristica sa distinctivă este reprezentată de cupolele uriașe din beton care ies la suprafață în piața publică, servind drept ferestre pentru galeriile subterane. Aceste structuri ondulate au transformat piața într-un spațiu de joacă urban și o atracție vizuală majoră. Proiectat de studioul de arhitectură JKMM, Amos Rex dispune de săli de expoziție moderne care se întind pe o suprafață de peste 2.200 de metri pătrați. Programul muzeului se concentrează pe artă contemporană, experimente digitale și capodopere ale modernismului din secolul XX. De la deschiderea sa, muzeul a devenit o destinație culturală de top, atrăgând un număr impresionant de vizitatori internaționali datorită expozițiilor sale imersive și tehnologice.",
      en: "Amos Rex is one of Helsinki's most innovative art museums, seamlessly blending historical functionalism with avant-garde underground design. Opened in 2018, the museum is located beneath the Lasipalatsi (Glass Palace), a 1936 functionalist landmark in the city center. The most striking feature of the museum is its undulating roofscape on the Lasipalatsi Square, where cone-shaped domes with large circular windows protrude from the ground. These domes act as skylights for the vast subterranean exhibition galleries while creating a popular public space for social interaction above ground. Designed by JKMM Architects, the museum provides approximately 2,200 square meters of state-of-the-art gallery space. Amos Rex focuses on contemporary art, interactive digital installations, and 20th-century Modernist classics. Its inaugural exhibition by the Japanese collective teamLab was a global sensation, setting record attendance figures for Finnish museums. Today, it remains a testament to how urban architecture can evolve to create subterranean cultural hubs in densely populated city centers.",
    },
    factsAdvanced: {
      de: ["Eröffnung des Museums im August 2018.", "Unterirdische Ausstellungsfläche von 2.200 Quadratmetern.", "Entworfen vom Architekturbüro JKMM.", "Die Baukosten beliefen sich auf etwa 50 Millionen Euro.", "Das Museum integriert den historischen Lasipalatsi aus dem Jahr 1936.", "Die markanten Kuppeln bestehen aus gegossenem Stahlbeton."],
      hu: ["A múzeum 2018 augusztusában nyílt meg.", "A föld alatti kiállítótér területe 2200 négyzetméter.", "A JKMM Architects építésziroda tervezte.", "Az építkezés költsége körülbelül 50 millió euró volt.", "Nevét Amos Anderson laptulajdonosról és mecénásról kapta.", "Az első évben több mint 500 000 látogatót fogadott."],
      ro: ["Muzeul a fost deschis publicului în august 2018.", "Suprafața expozițională subterană este de 2.200 mp.", "Proiect realizat de biroul JKMM Architects.", "Costul construcției s-a ridicat la circa 50 de milioane de euro.", "Integrează clădirea istorică Lasipalatsi, finalizată în 1936.", "Cupolele exterioare sunt realizate din beton armat turnat."],
      en: ["Opened to the public in August 2018.", "The underground gallery covers an area of 2,200 square meters.", "Designed by the architectural firm JKMM Architects.", "Construction costs were approximately 50 million euros.", "It incorporates the historic 1936 Lasipalatsi building.", "The unique exterior domes are made of reinforced concrete."],
    },
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
    descriptionAdvanced: {
      de: "Der Hafen von Helsinki ist der wichtigste Knotenpunkt für den Außenhandel und den Personenverkehr in Finnland und einer der verkehrsreichsten Passagierhäfen der Welt. Er besteht aus mehreren spezialisierten Hafenteilen, darunter der Westhafen, der Südhafen, Katajanokka und der große Güterhafen Vuosaari. Jährlich werden hier über 10 Millionen Passagiere abgefertigt, die hauptsächlich auf den stark frequentierten Routen nach Tallinn und Stockholm reisen. Der Güterumschlag ist für die finnische Wirtschaft von entscheidender Bedeutung, da ein Großteil der Konsumgüter und Industriegüter über diese Anlagen das Land erreicht oder verlässt. Der Hafen setzt massiv auf Nachhaltigkeit und modernisiert seine Infrastruktur kontinuierlich, um Landstromanschlüsse für Schiffe bereitzustellen und die Emissionen im Stadtgebiet zu reduzieren. Durch seine zentrale Lage ist der Hafen eng mit dem städtischen Verkehrsnetz und dem Tourismus von Helsinki verknüpft. Als Tor zum Baltikum und nach Skandinavien spielt der Hafen eine zentrale Rolle in der Logistik Nordeuropas und ist ein wesentlicher Faktor für das wirtschaftliche Wachstum der finnischen Hauptstadtregion.",
      hu: "Helsinki kikötője (Helsingin Satama) Finnország legjelentősebb külkereskedelmi kapuja és a világ egyik legforgalmasabb személykikötője. A kikötő több egységből áll: a nyugati kikötő (Länsisatama) és a Katajanokka terminálok szolgálják ki a tallinni és stockholmi kompjáratokat, míg a Vuosaari kikötő a nehéz teherforgalomért felel. Évente több mint 12 millió utas fordul meg itt, ami rekordnak számít az északi régióban, különösen a Tallinnal fennálló intenzív kapcsolat miatt. A kikötő stratégiai fontosságát jelzi, hogy Finnország teljes tengeri külkereskedelmének jelentős része ezen a ponton halad keresztül. A fenntarthatóság jegyében a kikötő folyamatosan fejleszti az elektromos parti áramvételezési lehetőségeket és az automatizált rakodási rendszereket a környezetterhelés csökkentése érdekében. A város központjában elhelyezkedő terminálok közvetlen kapcsolatot biztosítanak a tömegközlekedéssel, így a turisták azonnal elérhetik a látnivalókat. Helsinki kikötője nemcsak egy logisztikai csomópont, hanem a finn gazdaság motorja és a balti-tengeri hajózás központja.",
      ro: "Portul Helsinki este principalul hub de transport maritim al Finlandei și unul dintre cele mai aglomerate porturi de pasageri de pe glob. Acesta cuprinde mai multe zone specializate: Portul de Vest (Länsisatama), Portul de Sud (Eteläsatama) și portul de marfă Vuosaari, finalizat în 2008. Facilitățile sale gestionează anual peste 12 milioane de pasageri, majoritatea circulând pe rutele strategice către Tallinn și Stockholm. Pe lângă traficul de pasageri, portul este vital pentru comerțul exterior finlandez, procesând o gamă largă de mărfuri, de la produse alimentare la echipamente industriale complexe. Autoritățile portuare investesc masiv în soluții ecologice, precum electrificarea cheiurilor pentru a permite navelor să își oprească motoarele în timpul staționării. Portul este integrat în structura urbană a capitalei, facilitând accesul rapid la rețelele de transport feroviar și rutier. Rolul său de punte între Peninsula Scandinavă și Statele Baltice îl transformă într-un element indispensabil pentru economia regiunii Mării Baltice.",
      en: "The Port of Helsinki is Finland's leading foreign trade gateway and one of the world's busiest passenger ports. It operates through several key areas, including the West Harbour, the South Harbour, Katajanokka, and the modern Vuosaari cargo port. Each year, it handles over 12 million passengers, predominantly traveling on the high-frequency routes connecting Helsinki to Tallinn and Stockholm. Beyond passenger traffic, the port is essential for Finland's economic stability, as a significant percentage of the country's imports and exports pass through its docks. The port is a pioneer in environmental sustainability, implementing shore-to-ship power systems and automated mooring technologies to reduce carbon emissions. Its strategic location in the capital city allows for seamless integration with national rail and road networks. As a vital link in the logistics chain of Northern Europe, the Port of Helsinki continues to drive the economic development of the Baltic Sea region while modernizing its infrastructure to meet future demand.",
    },
    factsAdvanced: {
      de: ["Über 12 Millionen Passagiere pro Jahr.", "Wichtigster Hafen für den finnischen Außenhandel.", "Eröffnung des Hafens Vuosaari im Jahr 2008.", "Regelmäßige Verbindungen nach Tallinn, Stockholm und Travemünde.", "Marktführer im Passagierverkehr in der Ostsee.", "Investitionen in Landstrom für umweltfreundlichen Betrieb."],
      hu: ["Évente több mint 12 millió utas használja.", "Finnország legnagyobb külkereskedelmi kikötője.", "A Vuosaari teherkikötőt 2008-ban adták át.", "Közvetlen kompjáratok indulnak Tallinnba és Stockholmba.", "Világelső a nemzetközi utasforgalom sűrűségében.", "Folyamatosan fejlesztik a hajók parti áramellátását."],
      ro: ["Gestionează peste 12 milioane de pasageri anual.", "Cel mai mare port pentru comerțul exterior finlandez.", "Portul de mărfuri Vuosaari a fost inaugurat în 2008.", "Conexiuni zilnice către Tallinn, Stockholm și Travemünde.", "Lider global în densitatea traficului internațional de pasageri.", "Implementează sisteme de alimentare electrică de la țărm."],
      en: ["Handles more than 12 million passengers annually.", "Finland's most important port for foreign trade.", "The Vuosaari cargo harbour opened in 2008.", "Regular ferry services to Tallinn, Stockholm, and Travemünde.", "Among the world's busiest ports by passenger volume.", "Features advanced shore power installations for ships."],
    },
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
    descriptionAdvanced: {
      de: "Der Hafen von Turku ist einer der historischsten und strategisch wichtigsten Häfen Finnlands und liegt an der Mündung des Flusses Aura. Er ist bekannt für seine effizienten Fährverbindungen nach Stockholm und auf die Åland-Inseln, die einen wesentlichen Teil des Personen- und LKW-Verkehrs zwischen Finnland und Schweden ausmachen. Mit einer jährlichen Passagierzahl von über drei Millionen ist er ein zentraler touristischer und logistischer Knotenpunkt. Der Hafen profitiert von seiner geschützten Lage im Schärengarten, was den Schiffsverkehr auch bei schwierigen Wetterbedingungen sicherer macht. Neben dem Fährbetrieb spielt der Güterumschlag eine wichtige Rolle, insbesondere für die regionale Industrie im Südwesten Finnlands. Die Hafeninfrastruktur wird ständig modernisiert, um den Einsatz von LNG-betriebenen Schiffen zu fördern und die ökologische Belastung der Ostsee zu minimieren. Durch die direkte Bahnanbindung und die Nähe zum Stadtzentrum von Turku ist der Hafen optimal in das nationale Verkehrsnetz integriert. Er bleibt ein unverzichtbarer Bestandteil der finnischen Infrastruktur und ein Symbol für die maritime Tradition der ehemaligen Hauptstadt.",
      hu: "Turku kikötője (Turun Satama) Finnország egyik legősibb és legfontosabb tengeri kapuja, amely az Aura-folyó torkolatánál fekszik. A kikötő évszázadok óta meghatározó szerepet tölt be az ország kereskedelmében, különösen a Svédországgal való kapcsolat fenntartásában. Naponta indulnak innen nagy kapacitású kompjáratok Stockholmba és Mariehamnba, amelyek évente több mint 3 millió utast és jelentős mennyiségű teherautót szállítanak. Turku kikötője különösen kedvelt a turisták körében, mivel az út a világ egyik legszebb szigetvilágán keresztül vezet. A kikötő modern terminálokkal rendelkezik, és az elsők között vezette be a folyékony földgázzal (LNG) hajtott hajók kiszolgálását. Stratégiai elhelyezkedése lehetővé teszi, hogy Délnyugat-Finnország ipari termékei gyorsan eljussanak a skandináv piacokra. A vasúti összeköttetés közvetlenül a terminálokig ér, biztosítva a zökkenőmentes logisztikát az ország többi részével. Turku kikötője a hagyomány és az innováció ötvözete, amely továbbra is a balti-tengeri kereskedelem egyik pillére.",
      ro: "Portul Turku este unul dintre cele mai vechi și mai strategice porturi din Finlanda, situat la gura de vărsare a râului Aura. Acesta servește drept punct principal de legătură feribot între Finlanda și Suedia, cu rute zilnice către Stockholm și insulele Åland. Anual, portul este tranzitat de peste 3 milioane de pasageri, fiind esențial atât pentru turism, cât și pentru logistica mărfurilor pe roți (Ro-Ro). Poziția sa protejată în arhipelag oferă un avantaj operațional major, asigurând condiții sigure de navigație pe tot parcursul anului. Autoritățile portuare sunt angajate în protejarea ecosistemului fragil al Mării Baltice, investind în infrastructură pentru combustibili alternativi și gestionarea deșeurilor portuare. Portul Turku este conectat direct la rețeaua feroviară națională, facilitând transportul rapid al mărfurilor către interiorul țării. Ca nod multimodal, acesta sprijină dezvoltarea economică a regiunii de sud-vest a Finlandei și menține tradiția maritimă seculară a orașului.",
      en: "The Port of Turku is one of Finland's oldest and most strategically significant maritime gateways, situated at the mouth of the Aura River. It serves as a vital link for passenger and cargo traffic between Finland and Sweden, with daily ferry departures to Stockholm and Mariehamn in the Åland Islands. Handling over 3 million passengers annually, it is a key hub for tourism and logistics in Northern Europe. The port's unique location within the vast archipelago provides sheltered navigation routes, enhancing safety and reliability. In addition to its passenger terminals, the Port of Turku is a major center for roll-on/roll-off cargo, supporting the regional industry of Southwest Finland. It has been a pioneer in environmental initiatives, being one of the first ports to support LNG-powered vessels and invest in shore power technology. With direct rail links to the Finnish interior and close proximity to the city center, the port remains an integral part of the nation's transportation infrastructure and a cornerstone of Baltic Sea trade.",
    },
    factsAdvanced: {
      de: ["Über 3 Millionen Passagiere pro Jahr.", "Häufige Fährverbindungen nach Stockholm und Mariehamn.", "Strategische Lage an der Aura-Flussmündung.", "Direkte Anbindung an das finnische Eisenbahnnetz.", "Pionier bei der Nutzung von LNG für Fährschiffe.", "Wichtiger Knotenpunkt für Ro-Ro-Frachtverkehr."],
      hu: ["Évente több mint 3 millió utas használja.", "Naponta több kompjárat indul Stockholmba.", "Az Aura-folyó torkolatánál helyezkedik el.", "Közvetlen vasúti összeköttetéssel rendelkezik.", "Az egyik első kikötő, amely LNG-üzemű hajókat fogadott.", "Kiemelt szerepe van a Skandináviába irányuló teherforgalomban."],
      ro: ["Peste 3 milioane de pasageri tranzitează portul anual.", "Conexiuni zilnice prin feribot către Stockholm.", "Situat strategic la vărsarea râului Aura.", "Dispune de conexiune feroviară directă în port.", "Lider în adoptarea combustibilului LNG pentru nave.", "Hub major pentru transportul de mărfuri de tip Ro-Ro."],
      en: ["Handles over 3 million passengers every year.", "Offers daily ferry services to Stockholm and Åland.", "Located at the mouth of the Aura River.", "Features direct rail connections to the main terminals.", "A pioneer in supporting LNG-fueled passenger ships.", "Crucial hub for roll-on/roll-off (Ro-Ro) cargo traffic."],
    },
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
    descriptionAdvanced: {
      de: "Der Hafen von Kotka ist Teil des Hafens Hamina-Kotka, des größten Universalhafens in Finnland, und liegt strategisch günstig am Golf von Finnland. Er fungiert als zentraler Knotenpunkt für den finnischen Export, insbesondere für die Zellstoff-, Papier- und Holzindustrie, die im Südosten des Landes stark konzentriert ist. Der Hafen umfasst spezialisierte Terminals für Container, Flüssiggüter und Massengut, was ihn zu einem vielseitigen Logistikzentrum macht. Durch seine Nähe zur russischen Grenze war er historisch gesehen auch ein wichtiges Tor für den Transitverkehr nach Osten. Der Hafen von Kotka zeichnet sich durch seine tiefen Fahrrinnen aus, die es auch großen Ozeanschiffen ermöglichen, die Anlagen anzulaufen. In den letzten Jahren wurden erhebliche Investitionen in die Digitalisierung der Hafenkette und in umweltfreundliche Technologien getätigt, um die Effizienz zu steigern. Neben der industriellen Bedeutung beherbergt das Hafengebiet auch kulturelle Einrichtungen wie das Maritime Zentrum Vellamo, das die maritime Geschichte der Region präsentiert. Der Hafen ist ein wesentlicher Pfeiler der finnischen Wirtschaftskraft und sichert tausende Arbeitsplätze in der Region.",
      hu: "Kotka kikötője a Hamina-Kotka kikötőrendszer része, amely Finnország legnagyobb és legjelentősebb általános kereskedelmi kikötője. A Finn-öböl keleti részén elhelyezkedő komplexum az ország exportjának motorja, különösen az erdőipar, a papír- és cellulózgyártás területén. A kikötő számos specializált terminállal rendelkezik, amelyek képesek konténerek, ömlesztett áruk és folyékony rakományok fogadására egyaránt. Stratégiai fekvése révén évtizedekig a keleti tranzitkereskedelem központja volt, összekötve Európát Oroszországgal és Ázsiával. A kotkai részleg mélyvízi kikötője lehetővé teszi a legnagyobb óceánjáró teherhajók fogadását is. Az üzemeltetők nagy hangsúlyt fektetnek a fenntarthatóságra, modern hulladékkezelési és energiatakarékos rendszereket alkalmaznak. A kikötő területén található a Vellamo Tengerészeti Központ is, amely a térség gazdag hajózási múltját mutatja be. Gazdasági szempontból Kotka kikötője elengedhetetlen Finnország globális versenyképességéhez, biztosítva a nemzetközi kereskedelmi útvonalak zavartalanságát.",
      ro: "Portul Kotka face parte din complexul Hamina-Kotka, cel mai mare port universal din Finlanda, situat strategic pe malul Golfului Finlandei. Acesta este un pilon central al exporturilor finlandeze, în special pentru industria lemnului, a celulozei și a hârtiei. Portul oferă terminale specializate pentru containere, mărfuri lichide și vrac, fiind capabil să gestioneze fluxuri logistice complexe. Datorită proximității sale față de granița estică, a servit istoric ca o poartă majoră pentru traficul de tranzit internațional. Facilitățile portuare din Kotka beneficiază de ape adânci, ceea ce permite accesul navelor cargo de mare tonaj. În ultimii ani, portul a investit masiv în automatizare și tehnologii digitale pentru a optimiza timpii de încărcare și a reduce amprenta de carbon. Pe lângă rolul său industrial, zona portuară găzduiește Centrul Maritim Vellamo, o instituție culturală de prestigiu. Kotka rămâne un nod vital în lanțul de aprovizionare nord-european, susținând activitatea economică a întregii regiuni de sud-est a țării.",
      en: "The Port of Kotka is a core component of Hamina-Kotka, Finland's largest universal port, strategically located on the eastern coast of the Gulf of Finland. It serves as the primary export hub for the Finnish forestry, pulp, and paper industries, which are vital to the national economy. The port features highly specialized terminals for containers, liquid bulk, and dry cargo, making it a versatile center for international logistics. Its geographic location has historically positioned it as a major gateway for transit traffic between Europe and the East. The deep-water fairways at Kotka allow the port to accommodate some of the largest ocean-going vessels operating in the Baltic Sea. Recent developments have focused on digitalization and environmental sustainability, aiming to create a carbon-neutral port environment. Beyond its industrial functions, the port area is home to the Maritime Centre Vellamo, which celebrates the region's seafaring heritage. The port is an essential driver of regional employment and a critical link in the global supply chain.",
    },
    factsAdvanced: {
      de: ["Teil des größten Universalhafens Finnlands (Hamina-Kotka).", "Wichtigster Exporthafen für die finnische Papierindustrie.", "Verfügt über spezialisierte Containerterminals.", "Strategische Lage am Golf von Finnland nahe der Grenze.", "Beherbergt das Maritime Zentrum Vellamo.", "Umschlag von Millionen Tonnen Fracht pro Jahr."],
      hu: ["A Hamina-Kotka kikötő Finnország legnagyobb kikötője.", "A finn papír- és faipar elsődleges exportkapuja.", "Speciális mélyvízi terminálokkal rendelkezik.", "A Finn-öböl keleti partján fekszik, közel az orosz határhoz.", "Itt található a Vellamo Tengerészeti Központ.", "Évente több tízmillió tonna árut mozgatnak meg."],
      ro: ["Parte a celui mai mare port universal din țară, Hamina-Kotka.", "Principalul hub de export pentru industria forestieră.", "Include terminale moderne pentru containere și mărfuri lichide.", "Poziționat strategic în estul Golfului Finlandei.", "Găzduiește prestigiosul Centru Maritim Vellamo.", "Procesează zeci de milioane de tone de marfă anual."],
      en: ["Part of Hamina-Kotka, Finland's largest universal port.", "The primary export gateway for the Finnish paper industry.", "Equipped with state-of-the-art container terminals.", "Located strategically on the Gulf of Finland near the border.", "Home to the award-winning Maritime Centre Vellamo.", "Handles tens of millions of tonnes of cargo each year."],
    },
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
    descriptionAdvanced: {
      de: "Der Hafen von Hanko ist der südlichste Hafen Finnlands und nimmt aufgrund seiner eisfreien Lage eine Sonderstellung in der nationalen Logistik ein. Er befindet sich an der Spitze der Hanko-Halbinsel und bietet die kürzesten Seewege nach Mitteleuropa. Der Hafen ist besonders spezialisiert auf den Import von Kraftfahrzeugen sowie auf den Ro-Ro-Verkehr (Roll-on/Roll-off) für Trailer und Container. Durch seine ganzjährige Schiffbarkeit ist Hanko ein zuverlässiger Partner für die finnische Industrie, auch in strengen Wintern. Die Hafeninfrastruktur umfasst moderne Terminals und große Lagerflächen für Fahrzeuge und Industriegüter. Hanko ist zudem ein wichtiger Knotenpunkt für den Schienenverkehr, da die Gleise direkt bis zu den Kaianlagen führen. In den letzten Jahren wurde der Hafen erweitert, um der steigenden Nachfrage im Ostseehandel gerecht zu werden. Neben der wirtschaftlichen Bedeutung ist Hanko für sein maritimes Flair bekannt und dient im Sommer als wichtiger Anlaufpunkt für die Freizeitschifffahrt. Die strategische Lage macht den Hafen zu einem unverzichtbaren Bindeglied zwischen Finnland und den europäischen Märkten.",
      hu: "Hanko kikötője (Hangon Satama) Finnország legdélebbre fekvő kikötője, amely egyedülálló módon az év minden napján jégmentes marad. A Hanko-félsziget csúcsán található kikötő kínálja a legrövidebb utat Közép-Európa és a balti államok felé, ami óriási logisztikai előnyt jelent. A kikötő fő profilja a gépjárműimport, valamint a traileres és konténeres (Ro-Ro) forgalom kiszolgálása. Stratégiai jelentősége a téli hónapokban nő meg, amikor a többi finn kikötőt jég borítja, Hanko azonban továbbra is fogadni tudja a hajókat. A kikötő területe hatalmas raktározási kapacitással rendelkezik, különösen az új autók tárolására specializálódtak. A vasúti összeköttetés kiváló, lehetővé téve az áruk gyors továbbítását az ország belsejébe. Az utóbbi években végrehajtott fejlesztések révén a kikötő kapacitása jelentősen megnőtt, válaszul a növekvő tengeri kereskedelemre. Hanko nemcsak ipari létesítmény, hanem a finn vitorlázó élet központja is, ahol a modern logisztika találkozik a klasszikus tengerparti hangulattal.",
      ro: "Portul Hanko este cel mai sudic port al Finlandei și ocupă o poziție privilegiată datorită faptului că rămâne liber de gheață pe tot parcursul anului. Situat în vârful peninsulei Hanko, acesta oferă cele mai scurte rute maritime către Europa Centrală și Țările Baltice. Portul este extrem de specializat în importul de vehicule și în traficul de mărfuri de tip Ro-Ro (Roll-on/Roll-off), gestionând mii de trailere și containere săptămânal. Fiind navigabil în orice sezon, Hanko asigură stabilitatea lanțului de aprovizionare al Finlandei chiar și în cele mai aspre condiții de iarnă. Infrastructura sa modernă include terminale eficiente și zone vaste de depozitare pentru automobile noi și produse industriale. Portul beneficiază de o conexiune feroviară directă, ceea ce optimizează transportul multimodal către restul țării. Extinderile recente ale danei au fost concepute pentru a acomoda nave tot mai mari, reflectând creșterea volumului schimburilor comerciale în regiunea Mării Baltice. Hanko rămâne un punct vital pentru economia națională și un reper al eficienței maritime.",
      en: "The Port of Hanko is Finland's southernmost port and holds a unique status as a year-round ice-free maritime gateway. Located at the tip of the Hanko Peninsula, it offers the shortest sea routes from Finland to Central Europe and the Baltic states. The port is highly specialized in the importation of motor vehicles and roll-on/roll-off (Ro-Ro) traffic for trailers and containers. Its natural advantage of remaining open during the harshest winters makes it a critical asset for Finnish industrial stability and international trade. The port infrastructure includes extensive storage areas for vehicles and state-of-the-art handling facilities for industrial goods. Hanko is also a major rail hub, with tracks extending directly to the quaysides to facilitate seamless multimodal transport. In recent years, the port has undergone significant expansions to handle increasing traffic volumes and larger vessels. Beyond its industrial importance, Hanko is a celebrated maritime destination, blending high-tech logistics with its historical role as a prominent Finnish seaside town.",
    },
    factsAdvanced: {
      de: ["Südlichster Hafen Finnlands.", "Ganzjährig eisfrei und schiffbar.", "Spezialisiert auf den Import von Kraftfahrzeugen.", "Kurze Seewege nach Deutschland und Polen.", "Wichtiger Knotenpunkt für Ro-Ro-Verkehr.", "Direkte Bahnanbindung an die Kaianlagen."],
      hu: ["Finnország legdélibb kikötője.", "Az év minden napján jégmentes marad.", "A finn autóimport központja.", "Innen a legrövidebb a hajóút Közép-Európa felé.", "Kiemelt szerepe van a traileres (Ro-Ro) forgalomban.", "Közvetlen vasúti csatlakozással bír."],
      ro: ["Cel mai sudic port din Finlanda.", "Rămâne liber de gheață pe tot parcursul anului.", "Specializat în importul și depozitarea autovehiculelor.", "Oferă cele mai scurte rute către Europa Centrală.", "Hub major pentru transportul de tip Ro-Ro.", "Conexiune feroviară directă până la cheiuri."],
      en: ["The southernmost port in Finland.", "Remains ice-free and navigable throughout the year.", "The leading hub for vehicle imports in Finland.", "Offers the shortest sea routes to Central Europe.", "Major center for roll-on/roll-off cargo operations.", "Features direct rail links to the port berths."],
    },
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
    descriptionAdvanced: {
      de: "Die Neste-Raffinerie in Porvoo ist eine der modernsten und komplexesten Erdölraffinerien in Europa und liegt im Industriegebiet Kilpilahti. Die Anlage wurde in den 1960er Jahren in Betrieb genommen und hat sich seitdem zu einem Vorreiter in der Produktion sauberer Kraftstoffe entwickelt. Ein besonderer Schwerpunkt liegt heute auf der Herstellung von erneuerbarem Diesel (Neste MY) und nachhaltigem Flugkraftstoff aus Abfällen und Reststoffen. Die Raffinerie verfügt über eine Kapazität von rund 10 Millionen Tonnen pro Jahr und ist für die Energieversorgung Finnlands von zentraler Bedeutung. Durch kontinuierliche Investitionen in Forschung und Entwicklung ist die Anlage in der Lage, Kraftstoffe mit extrem niedrigem Schwefelgehalt und reduzierten Emissionen herzustellen. Das Gelände umfasst einen eigenen Tiefwasserhafen, über den der Rohstoffimport und der Export der fertigen Produkte abgewickelt werden. Neste verfolgt das Ziel, die Raffinerie bis 2030 zur weltweit nachhaltigsten ihrer Art zu machen. Als einer der größten Industriearbeitgeber in der Region Porvoo spielt das Werk eine entscheidende Rolle für die lokale und nationale Wirtschaft.",
      hu: "A porvooi Neste finomító a Kilpilahti ipari negyedben található, és Európa egyik legmodernebb és legösszetettebb kőolajfinomítója. Az üzemet az 1960-as évek közepén helyezték üzembe, és azóta a fenntartható üzemanyag-technológiák globális úttörőjévé vált. A finomító éves kapacitása körülbelül 10 millió tonna, és döntő szerepet játszik Finnország energiabiztonságában. A Neste itt állítja elő világhírű megújuló dízelét (Neste MY) és fenntartható repülőgép-üzemanyagait, amelyeket hulladékokból és maradékanyagokból nyernek. Az üzem területén található saját mélyvízi kikötő lehetővé teszi a nyersanyagok hatékony fogadását és a késztermékek globális exportját. A finomító folyamatos korszerűsítése révén a legszigorúbb környezetvédelmi előírásoknak is megfelel, minimalizálva a károsanyag-kibocsátást. A Neste célkitűzése, hogy 2030-ra a porvooi egység legyen a világ legfenntarthatóbb finomítója, amely teljes mértékben átáll a megújuló alapanyagokra. Az üzem több ezer embernek ad munkát közvetlenül és közvetve, meghatározva a régió gazdasági profilját.",
      ro: "Rafinăria Neste din Porvoo, situată în zona industrială Kilpilahti, este una dintre cele mai avansate și complexe facilități de rafinare din Europa. Inaugurată în anii 1960, unitatea a evoluat de la o rafinărie tradițională de petrol la un lider mondial în producția de combustibili regenerabili. Cu o capacitate anuală de procesare de aproximativ 10 milioane de tone, aceasta furnizează cea mai mare parte a produselor petroliere necesare pieței finlandeze. Rafinăria este celebră pentru dezvoltarea motorinei regenerabile Neste MY și a combustibilului sustenabil pentru aviație, obținute din deșeuri și reziduuri organice. Infrastructura include un port propriu cu ape adânci, facilitând exportul produselor de înaltă calitate către piețele internaționale. Investițiile masive în tehnologii de hidrocrcare și desulfurare permit producerea de carburanți cu un impact redus asupra mediului. Obiectivul strategic al companiei este transformarea completă a rafinăriei într-o unitate neutră din punct de vedere al emisiilor de carbon până în 2030. Ca motor industrial al regiunii Porvoo, rafinăria contribuie semnificativ la PIB-ul Finlandei.",
      en: "The Neste Porvoo Refinery, located in the Kilpilahti industrial area, is one of Europe's most sophisticated and complex oil refineries. Since its commissioning in the mid-1960s, it has transformed into a global pioneer for clean fuel production and renewable energy solutions. The refinery has an annual processing capacity of approximately 10 million tons and is central to Finland's energy independence. It is particularly renowned for producing Neste MY Renewable Diesel and sustainable aviation fuels (SAF) derived from waste and residue raw materials. The site includes a dedicated deep-water port, which is one of the busiest in Finland by cargo volume, facilitating both raw material imports and global product exports. Neste's long-term strategy aims to make the Porvoo refinery the most sustainable in the world by 2030, with a focus on circular economy and carbon neutrality. As a major regional employer, the refinery plays a vital role in the economic fabric of Southern Finland while leading the transition away from traditional fossil fuels.",
    },
    factsAdvanced: {
      de: ["Verarbeitungskapazität von ca. 10 Millionen Tonnen pro Jahr.", "Eines der komplexesten Raffineriezentren in Europa.", "Produktionsstandort für erneuerbaren Diesel (Neste MY).", "Verfügt über Finnlands zweitgrößten Hafen nach Umschlag.", "Inbetriebnahme des ersten Teils im Jahr 1965.", "Ziel der CO2-neutralen Produktion bis zum Jahr 2030."],
      hu: ["Éves feldolgozó kapacitása 10 millió tonna kőolaj.", "Európa egyik legmodernebb finomító komplexuma.", "Itt gyártják a megújuló Neste MY üzemanyagot.", "Saját mélyvízi kikötője az ország egyik legforgalmasabbja.", "Az üzem első egysége 1965-ben kezdte meg a működését.", "A cég célja a teljes karbonsemlegesség 2030-ig."],
      ro: ["Capacitate anuală de procesare de circa 10 milioane tone.", "Una dintre cele mai complexe rafinării de pe continent.", "Producător major de motorină regenerabilă din deșeuri.", "Portul propriu este al doilea cel mai mare din Finlanda.", "Prima unitate de producție a fost deschisă în 1965.", "Plan de neutralitate a emisiilor de carbon până în 2030."],
      en: ["Processing capacity of approximately 10 million tons per year.", "One of the most complex refinery sites in Europe.", "A leading producer of renewable diesel and aviation fuel.", "Its private port is one of the busiest in Finland.", "Operations began at the site in 1965.", "Committed to reaching carbon-neutral production by 2030."],
    },
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
    descriptionAdvanced: {
      de: "Das Bioprodukt-Werk in Äänekoski, das im Jahr 2017 in Betrieb genommen wurde, stellt einen Meilenstein der modernen Forstindustrie dar. Mit einer Investitionssumme von rund 1,2 Milliarden Euro ist es das größte Holzverarbeitungswerk auf der Nordhalbkugel und ein Vorreiter in Sachen Ressourceneffizienz. Das Werk arbeitet vollständig ohne fossile Brennstoffe und nutzt die Nebenströme der Zellstoffproduktion, um jährlich rund 2,4 Terawattstunden Bioelektrizität zu erzeugen. Neben den 1,3 Millionen Tonnen Nadelholz- und Birkenzellstoff produziert die Anlage wertvolle Biochemikalien wie Tallöl, Terpentin und Schwefelsäure. Durch die Integration modernster digitaler Überwachungssysteme erreicht die Fabrik eine weltweit führende Energieeffizienz und minimiert gleichzeitig die Umweltbelastung. Als industrielles Herzstück Zentrinfinnlands sichert der Komplex Tausende von Arbeitsplätzen in der gesamten Wertschöpfungskette. Das Projekt gilt international als Modell für die Transformation der traditionellen Papierindustrie hin zu einer nachhaltigen, kreislauforientierten Bioökonomie.",
      hu: "Az Äänekoskiban található biológiai termékgyár, amely 2017-ben kezdte meg működését, a modern erdőipar egyik legjelentősebb technológiai vívmánya. A mintegy 1,2 milliárd eurós beruházással épült létesítmény az északi félteke legnagyobb fafeldolgozó üzeme, amely úttörő szerepet tölt be a fenntarthatóság terén. A gyár teljes mértékben fosszilis tüzelőanyagok nélkül üzemel, és a cellulózgyártás melléktermékeiből évente mintegy 2,4 terawattóra villamos energiát állít elő. Az évi 1,3 millió tonna fenyő- és nyírfacellulóz mellett olyan értékes biotermékeket is gyártanak itt, mint a tallolaj, a terpentin és a kénsav. A digitális folyamatirányítás legújabb vívmányait alkalmazva a gyár világszinten is kiemelkedő energiahatékonyságot ér el, miközben minimálisra csökkenti a környezeti terhelést. Közép-Finnország ipari központjaként a komplexum több ezer munkahelyet biztosít a teljes értékláncban. Ez a projekt nemzetközi szinten is példaként szolgál a hagyományos papíripar fenntartható és körforgásos biogazdasággá történő átalakításához.",
      ro: "Fabrica de bioproduse din Äänekoski, care a început să funcționeze în anul 2017, reprezintă un punct de cotitură pentru industria forestieră modernă. Cu o investiție de aproximativ 1,2 miliarde de euro, aceasta este cea mai mare fabrică de procesare a lemnului din emisfera nordică și un lider în eficiența resurselor. Fabrica funcționează în totalitate fără combustibili fosili, utilizând fluxurile secundare ale producției de celuloză pentru a genera anual aproximativ 2,4 terawați-oră de bioelectricitate. Pe lângă cele 1,3 milioane de tone de celuloză de rășinoase și mesteacăn, unitatea produce substanțe biochimice valoroase, cum ar fi uleiul de tal, terebentina și acidul sulfuric. Prin integrarea celor mai moderne sisteme de monitorizare digitală, fabrica atinge o eficiență energetică de vârf la nivel mondial, minimizând în același timp impactul asupra mediului. Ca nucleu industrial al Finlandei Centrale, complexul asigură mii de locuri de muncă în întregul lanț valoric. Proiectul este considerat la nivel internațional un model pentru transformarea industriei tradiționale a hârtiei într-o bioeconomie sustenabilă și circulară.",
      en: "The Äänekoski Bioproduct Mill, which commenced operations in 2017, marks a significant milestone in modern industrial engineering and wood processing. Constructed with an investment of approximately 1.2 billion euros, it stands as the largest wood-processing facility in the Northern Hemisphere and a pioneer in resource efficiency. The mill operates entirely without fossil fuels, utilizing the side streams of pulp production to generate approximately 2.4 terawatt-hours of bioelectricity annually. In addition to 1.3 million tonnes of softwood and birch pulp, the facility produces valuable biochemicals such as tall oil, turpentine, and sulfuric acid. By integrating state-of-the-art digital monitoring systems, the plant achieves world-leading energy efficiency while minimizing its environmental footprint. As the industrial heart of Central Finland, the complex supports thousands of jobs across the entire value chain. The project is recognized internationally as a prime example of transforming the traditional paper industry into a sustainable, circular bioeconomy.",
    },
    factsAdvanced: {
      de: ["Inbetriebnahme erfolgte im Jahr 2017 nach zweijähriger Bauzeit.", "Gesamtinvestitionssumme betrug ca. 1,2 Milliarden Euro.", "Jährliche Produktionskapazität von 1,3 Millionen Tonnen Zellstoff.", "Das Werk arbeitet zu 100 % ohne fossile Brennstoffe.", "Erzeugt etwa 2,4 TWh erneuerbare Energie pro Jahr.", "Produziert wertvolle Nebenprodukte wie Tallöl und Terpentin."],
      hu: ["A gyár 2017-ben kezdte meg működését kétéves építés után.", "A teljes beruházási költség mintegy 1,2 milliárd euró volt.", "Éves termelési kapacitása 1,3 millió tonna cellulóz.", "Az üzem 100%-ban fosszilis tüzelőanyagok nélkül működik.", "Évente mintegy 2,4 TWh megújuló energiát termel.", "Értékes melléktermékeket, például tallolajat és terpentint állít elő."],
      ro: ["Fabrica a fost pusă în funcțiune în 2017, după doi ani de construcție.", "Investiția totală s-a ridicat la aproximativ 1,2 miliarde de euro.", "Capacitate anuală de producție de 1,3 milioane de tone de celuloză.", "Unitatea funcționează 100% fără combustibili fosili.", "Generează aproximativ 2,4 TWh de energie regenerabilă pe an.", "Produce subproduse valoroase, cum ar fi uleiul de tal și terebentina."],
      en: ["Operations began in 2017 following a two-year construction period.", "Total investment amounted to approximately 1.2 billion euros.", "Annual production capacity of 1.3 million tonnes of pulp.", "The facility operates 100% free of fossil fuels.", "Generates approximately 2.4 TWh of renewable energy per year.", "Produces valuable by-products such as tall oil and turpentine."],
    },
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
    descriptionAdvanced: {
      de: "Der Halti, auch bekannt als Haltitunturi, stellt mit einer Höhe von 1324 Metern über dem Meeresspiegel die höchste Erhebung Finnlands dar. Er befindet sich im äußersten Nordwesten des Landes in der Gemeinde Enontekiö, direkt an der Grenze zu Norwegen in den Skandinavischen Alpen. Geografisch gesehen liegt der eigentliche Gipfel des Berges, der Ráisduattarháldi, mit 1361 Metern auf norwegischem Staatsgebiet, während der höchste Punkt Finnlands lediglich eine Flanke an der Grenzmarkierung 303B ist. Die Region ist geprägt von arktischer Tundra und extremen Wetterbedingungen, die den Zugang insbesondere im Winter erschweren. Für Wanderer ist der Halti ein beliebtes Ziel, das meist über den Nordkalottleden-Weg von Kilpisjärvi aus erreicht wird. Die Besteigung erfordert eine gute Vorbereitung und Orientierung in der einsamen Wildnis Lapplands. Seit 1917 markiert dieser Ort einen symbolischen Punkt der finnischen Souveränität inmitten einer rauen, unberührten Naturlandschaft.",
      hu: "A Halti, más néven Haltitunturi, 1324 méteres tengerszint feletti magasságával Finnország legmagasabb pontja. Az ország legészaknyugatibb részén, Enontekiö községben található, közvetlenül a norvég határ mentén, a Skandináv-hegységben. Földrajzi szempontból a hegy tulajdonképpeni csúcsa, a 1361 méter magas Ráisduattarháldi Norvégiában fekszik, míg Finnország legmagasabb pontja csupán egy hegyoldal a 303B számú határjelzésnél. A régiót sarkvidéki tundra és szélsőséges időjárási körülmények jellemzik, amelyek különösen télen nehezítik meg a hozzáférést. A túrázók számára a Halti népszerű úti cél, amelyet leggyakrabban Kilpisjärviből indulva, a Nordkalottleden ösvényen érnek el. A megmászás alapos felkészülést és tájékozódási képességet igényel Lappföld kietlen vadonjában. 1917 óta ez a hely a finn szuverenitás szimbolikus pontja a zord és érintetlen természeti táj közepén.",
      ro: "Halti, cunoscut și sub numele de Haltitunturi, reprezintă cel mai înalt punct din Finlanda, cu o altitudine de 1324 de metri deasupra nivelului mării. Acesta este situat în extremul nord-vest al țării, în comuna Enontekiö, chiar la granița cu Norvegia, în Munții Scandinavi. Din punct de vedere geografic, vârful propriu-zis al muntelui, Ráisduattarháldi, are 1361 de metri și se află pe teritoriul Norvegiei, în timp ce cel mai înalt punct al Finlandei este doar un versant situat la borna de frontieră 303B. Regiunea este caracterizată de tundră arctică și condiții meteorologice extreme, care fac accesul dificil, în special iarna. Pentru excursioniști, Halti este o destinație populară, fiind accesibil de obicei prin traseul Nordkalottleden din Kilpisjärvi. Ascensiunea necesită o pregătire bună și abilități de orientare în sălbăticia izolată a Laponiei. Din 1917, acest loc marchează un punct simbolic al suveranității finlandeze în mijlocul unui peisaj natural aspru și neatins.",
      en: "Halti, also known as Haltitunturi, is the highest point in Finland, reaching an elevation of 1324 meters above sea level. It is located in the extreme northwest of the country within the municipality of Enontekiö, directly on the border with Norway in the Scandinavian Mountains. Geographically, the mountain's actual summit, Ráisduattarháldi, stands at 1361 meters and lies within Norwegian territory, while Finland's highest point is merely a slope near boundary marker 303B. The region is defined by arctic tundra and extreme weather conditions, which make access particularly challenging during the winter months. For hikers, Halti is a prestigious destination, typically reached via the Nordkalottleden trail starting from Kilpisjärvi. Climbing the peak requires thorough preparation and navigation skills in the remote wilderness of Lapland. Since 1917, this location has served as a symbolic marker of Finnish sovereignty amidst a rugged and pristine natural landscape.",
    },
    factsAdvanced: {
      de: ["Höchster Punkt Finnlands liegt auf 1324 Metern Höhe.", "Der eigentliche Gipfel (1361 m) befindet sich in Norwegen.", "Die Grenzmarkierung 303B markiert den höchsten Punkt Finnlands.", "Gelegen in der Gemeinde Enontekiö im Nordwesten Lapplands.", "Teil des Nordkalottleden-Wanderwegs (ca. 55 km von Kilpisjärvi).", "Die Region gehört zu den Skandinavischen Alpen."],
      hu: ["Finnország legmagasabb pontja 1324 méteres magasságban van.", "A hegy tényleges csúcsa (1361 m) Norvégiában található.", "A 303B számú határkő jelzi a finn oldal legmagasabb pontját.", "Lappföld északnyugati részén, Enontekiö községben fekszik.", "A Nordkalottleden túraútvonal része (kb. 55 km Kilpisjärviből).", "A terület a Skandináv-hegység vonulatához tartozik."],
      ro: ["Cel mai înalt punct din Finlanda se află la o altitudine de 1324 m.", "Vârful propriu-zis (1361 m) este situat în Norvegia.", "Borna de frontieră 303B marchează cel mai înalt punct finlandez.", "Situat în comuna Enontekiö din nord-vestul Laponiei.", "Face parte din traseul de drumeție Nordkalottleden (aprox. 55 km).", "Regiunea aparține lanțului muntos al Alpilor Scandinavi."],
      en: ["Finland's highest point is situated at an elevation of 1324 meters.", "The mountain's actual peak (1361 m) is located in Norway.", "Boundary marker 303B designates the highest point on the Finnish side.", "Located in the Enontekiö municipality in northwestern Lapland.", "Part of the Nordkalottleden hiking trail (approx. 55 km from Kilpisjärvi).", "The area is part of the Scandinavian Mountain range."],
    },
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
    descriptionAdvanced: {
      de: "Der Saana ist ein markanter Fjell im Nordwesten Finnlands, der majestätisch über dem Dorf Kilpisjärvi thront. Mit einer Höhe von 1029 Metern über dem Meeresspiegel ist er zwar nicht der höchste Berg des Landes, aber aufgrund seines asymmetrischen Profils und seiner steilen Westwand einer der bekanntesten. Der Saana besteht aus Orthoquarzit, einem Gestein, das widerstandsfähiger gegen Erosion ist als die umliegenden Formationen. Für das Volk der Samen hat der Berg eine tiefe spirituelle Bedeutung und gilt seit Jahrhunderten als heiliger Ort. Die Flora am Saana ist außergewöhnlich vielfältig und beherbergt zahlreiche seltene arktische Pflanzenarten, die durch das kalkhaltige Gestein begünstigt werden. Ein gut ausgebauter Wanderweg führt zum Gipfel, von dem aus man einen spektakulären Panoramablick über den Kilpisjärvi-See und die Dreiländerecke Finnland-Schweden-Norwegen hat. Der Berg ist zudem ein wichtiges Ziel für geologische und botanische Forschungen in der Arktis. Jedes Jahr zieht er Tausende von Naturliebhabern an, die die raue Schönheit der skandinavischen Tundra erleben möchten.",
      hu: "A Saana egy jellegzetes hegy Finnország északnyugati részén, amely fenségesen magasodik Kilpisjärvi falu fölé. 1029 méteres tengerszint feletti magasságával ugyan nem az ország legmagasabb pontja, de aszimmetrikus profilja és meredek nyugati fala miatt az egyik legismertebb. A Saana ortokvarcitból épül fel, amely az eróziónak ellenállóbb kőzet, mint a környező formációk. A számi nép számára a hegy mély spirituális jelentőséggel bír, és évszázadok óta szent helyként tisztelik. A Saana növényvilága rendkívül változatos, számos ritka sarkvidéki növényfajnak ad otthont, amelyek fejlődését a mésztartalmú kőzet segíti elő. Egy jól kiépített túraútvonal vezet a csúcsra, ahonnan lenyűgöző panoráma nyílik a Kilpisjärvi-tóra, valamint a finn-svéd-norvég hármashatárra. A hegy emellett fontos helyszíne a sarkvidéki geológiai és botanikai kutatásoknak. Évente természetkedvelők ezreit vonzza, akik a skandináv tundra zord szépségét szeretnék megtapasztalni.",
      ro: "Saana este un munte distinctiv în nord-vestul Finlandei, care domină maiestuos satul Kilpisjärvi. Cu o altitudine de 1029 de metri deasupra nivelului mării, nu este cel mai înalt munte din țară, dar profilul său asimetric și peretele vestic abrupt îl fac unul dintre cei mai cunoscuți. Saana este format din ortocvarțit, o rocă mai rezistentă la eroziune decât formațiunile înconjurătoare. Pentru poporul Sami, muntele are o semnificație spirituală profundă și este considerat un loc sfânt de secole. Flora de pe Saana este excepțional de diversă, găzduind numeroase specii de plante arctice rare, favorizate de roca calcaroasă. Un traseu de drumeție bine amenajat duce spre vârf, oferind o vedere panoramică spectaculoasă asupra lacului Kilpisjärvi și a punctului unde se întâlnesc granițele Finlandei, Suediei și Norvegiei. Muntele este, de asemenea, o destinație importantă pentru cercetările geologice și botanice din zona arctică. În fiecare an, atrage mii de iubitori de natură care doresc să experimenteze frumusețea aspră a tundrei scandinave.",
      en: "Saana is a prominent fell in northwestern Finland, majestically overlooking the village of Kilpisjärvi. Reaching an elevation of 1029 meters above sea level, it is not the highest peak in the country, but its distinctive asymmetric profile and steep western face make it one of the most recognizable. Saana is composed of orthoquartzite, a type of rock that is more resistant to erosion than the surrounding geological formations. For the Sami people, the mountain holds deep spiritual significance and has been revered as a sacred site for centuries. The flora on Saana is exceptionally diverse, home to numerous rare arctic plant species supported by the lime-rich bedrock. A well-maintained hiking trail leads to the summit, providing a spectacular panoramic view of Lake Kilpisjärvi and the tri-border area of Finland, Sweden, and Norway. The mountain is also an important site for geological and botanical research in the Arctic. Each year, it attracts thousands of nature enthusiasts seeking to experience the rugged beauty of the Scandinavian tundra.",
    },
    factsAdvanced: {
      de: ["Die Gipfelhöhe beträgt 1029 Meter über dem Meeresspiegel.", "Besteht hauptsächlich aus widerstandsfähigem Orthoquarzit.", "Gilt als heiliger Berg der indigenen Samen-Bevölkerung.", "Beheimatet seltene arktische Pflanzenarten auf kalkhaltigem Boden.", "Der Wanderweg zum Gipfel ist etwa 4 Kilometer lang.", "Bietet Blick auf das Dreiländereck (Finnland, Schweden, Norwegen)."],
      hu: ["A hegycsúcs magassága 1029 méter a tengerszint felett.", "Főként ellenálló ortokvarcit kőzetből épül fel.", "Az őslakos számi népesség szent hegyeként tartják számon.", "Ritka sarkvidéki növényfajoknak ad otthont a meszes talajon.", "A csúcsra vezető túraútvonal körülbelül 4 kilométer hosszú.", "Kilátást nyújt a finn-svéd-norvég hármashatárra."],
      ro: ["Altitudinea vârfului este de 1029 metri deasupra nivelului mării.", "Este compus în principal din ortocvarțit rezistent.", "Este considerat un munte sfânt de către populația indigenă Sami.", "Găzduiește specii de plante arctice rare pe sol calcaros.", "Traseul de drumeție către vârf are o lungime de aproximativ 4 km.", "Oferă o vedere asupra punctului de întâlnire a celor trei granițe."],
      en: ["The summit elevation is 1029 meters above sea level.", "It is primarily composed of erosion-resistant orthoquartzite.", "Regarded as a sacred mountain by the indigenous Sami people.", "Home to rare arctic plant species thriving on lime-rich soil.", "The hiking trail to the summit is approximately 4 kilometers long.", "Offers views of the tri-point border of Finland, Sweden, and Norway."],
    },
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
    descriptionAdvanced: {
      de: "Der Saimaa ist mit einer Fläche von etwa 4400 Quadratkilometern der größte See Finnlands und das viertgrößte Süßwasserbecken Europas. Er ist kein einzelner See, sondern ein komplexes Labyrinth aus Tausenden von Inseln, Buchten und Kanälen, das nach der letzten Eiszeit durch die Landhebung geformt wurde. Die Uferlinie des Saimaa-Systems erstreckt sich über fast 15.000 Kilometer, was es zu einem der am stärksten zergliederten Seen weltweit macht. Eine der bekanntesten Besonderheiten des Sees ist die Saimaa-Ringelrobbe, eine vom Aussterben bedrohte Art, die nur in diesem Gewässer vorkommt. Wirtschaftlich ist der Saimaa durch den Saimaa-Kanal von großer Bedeutung, der den See mit dem Finnischen Meerbusen verbindet und die Holz- und Papierindustrie der Region unterstützt. Die Region ist zudem ein Zentrum für den Tourismus, bekannt für ihre unberührte Natur, kristallklares Wasser und historische Städte wie Savonlinna mit der Burg Olavinlinna. Ökologisch gesehen spielt der See eine entscheidende Rolle als Wasserspeicher und Lebensraum für eine reiche Flora und Fauna. Die komplexe Topografie des Saimaa macht ihn zu einem einzigartigen Naturphänomen, das die finnische Identität maßgeblich prägt.",
      hu: "A Saimaa mintegy 4400 négyzetkilométeres területével Finnország legnagyobb tava és Európa negyedik legnagyobb édesvízi medencéje. Ez nem egyetlen tó, hanem szigetek, öblök és csatornák ezreinek bonyolult labirintusa, amely az utolsó jégkorszak utáni földemelkedés során alakult ki. A Saimaa-rendszer partvonala közel 15 000 kilométer hosszan nyúlik el, így a világ egyik legtagoltabb tavának számít. A tó egyik legismertebb különlegessége a saimaai gyűrűsfóka, egy veszélyeztetett faj, amely csak ebben a vízben fordul elő. Gazdaságilag a Saimaa-csatorna révén bír nagy jelentőséggel, amely összeköti a tavat a Finn-öböllel, támogatva a régió fa- és papíriparát. A terület a turizmus központja is, híres érintetlen természetéről, kristálytiszta vizéről és az olyan történelmi városairól, mint Savonlinna az Olavinlinna-várral. Ökológiai szempontból a tó döntő szerepet játszik víztározóként és gazdag növény- és állatvilág élőhelyeként. A Saimaa összetett topográfiája egyedülálló természeti jelenséggé teszi, amely meghatározza a finn identitást.",
      ro: "Saimaa, cu o suprafață de aproximativ 4400 de kilometri pătrați, este cel mai mare lac din Finlanda și al patrulea ca mărime din Europa. Nu este un singur lac, ci un labirint complex format din mii de insule, golfuri și canale, modelat de ridicarea terenului după ultima epocă glaciară. Linia țărmului sistemului Saimaa se întinde pe aproape 15.000 de kilometri, ceea ce îl face unul dintre cele mai fragmentate lacuri din lume. Una dintre cele mai cunoscute caracteristici ale lacului este foca inelată de Saimaa, o specie pe cale de dispariție care trăiește exclusiv în aceste ape. Din punct de vedere economic, Saimaa are o mare importanță prin Canalul Saimaa, care leagă lacul de Golful Finlandei și susține industria lemnului și a hârtiei din regiune. Regiunea este, de asemenea, un centru turistic, renumit pentru natura sa neatinsă, apele cristaline și orașele istorice precum Savonlinna, cu castelul Olavinlinna. Din punct de vedere ecologic, lacul joacă un rol crucial ca rezervor de apă și habitat pentru o floră și faună bogată. Topografia complexă a lacului Saimaa îl face un fenomen natural unic, care modelează identitatea finlandeză.",
      en: "Saimaa, covering an area of approximately 4400 square kilometers, is the largest lake in Finland and the fourth-largest freshwater basin in Europe. It is not a single body of water but a complex labyrinth of thousands of islands, bays, and channels, formed by post-glacial crustal rebound after the last Ice Age. The shoreline of the Saimaa system extends nearly 15,000 kilometers, making it one of the most fragmented lakes in the world. One of the lake's most famous features is the Saimaa ringed seal, a critically endangered species found only in these waters. Economically, Saimaa is of great importance due to the Saimaa Canal, which connects the lake to the Gulf of Finland, supporting the region's timber and paper industries. The area is also a major tourism hub, renowned for its pristine nature, crystal-clear water, and historic towns such as Savonlinna, home to Olavinlinna Castle. Ecologically, the lake serves as a vital water reservoir and habitat for a rich diversity of flora and fauna. The intricate topography of Saimaa makes it a unique natural phenomenon that deeply influences Finnish national identity.",
    },
    factsAdvanced: {
      de: ["Größter See Finnlands mit einer Fläche von 4400 km².", "Besitzt eine Uferlinie von insgesamt ca. 14.500 Kilometern.", "Beheimatet die seltene Saimaa-Ringelrobbe (ca. 400 Exemplare).", "Enthält etwa 14.000 Inseln innerhalb des Seensystems.", "Der Saimaa-Kanal verbindet den See mit dem Finnischen Meerbusen.", "Die durchschnittliche Tiefe des Sees beträgt nur etwa 17 Meter."],
      hu: ["Finnország legnagyobb tava, területe 4400 km².", "Teljes partvonala körülbelül 14 500 kilométer hosszú.", "A ritka saimaai gyűrűsfóka otthona (kb. 400 példány).", "A tórendszerben körülbelül 14 000 sziget található.", "A Saimaa-csatorna köti össze a tavat a Finn-öböllel.", "A tó átlagos mélysége mindössze 17 méter körül van."],
      ro: ["Cel mai mare lac din Finlanda, cu o suprafață de 4400 km².", "Are o linie a țărmului de aproximativ 14.500 de kilometri.", "Găzduiește foca inelată de Saimaa, o specie rară (aprox. 400 exemplare).", "Sistemul lacustru conține aproximativ 14.000 de insule.", "Canalul Saimaa leagă lacul de Golful Finlandei.", "Adâncimea medie a lacului este de numai aproximativ 17 metri."],
      en: ["Largest lake in Finland with a surface area of 4400 km².", "Boasts a total shoreline of approximately 14,500 kilometers.", "Habitat of the rare Saimaa ringed seal (approx. 400 individuals).", "Contains around 14,000 islands within the lake system.", "The Saimaa Canal connects the lake to the Gulf of Finland.", "The average depth of the lake is only about 17 meters."],
    },
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
    descriptionAdvanced: {
      de: "Der Inari-See, im Norden Lapplands gelegen, ist der drittgrößte See Finnlands und das spirituelle Herz der samischen Kultur. Er erstreckt sich über eine Fläche von etwa 1040 Quadratkilometern und liegt etwa 119 Meter über dem Meeresspiegel. Der See ist bekannt für sein extrem klares Wasser und seine über 3000 Inseln, von denen Ukonkivi die bedeutendste ist, da sie den Samen seit Jahrhunderten als Opferstätte diente. Aufgrund seiner nördlichen Lage ist der See von November bis Juni mit einer dicken Eisschicht bedeckt, was das Leben in der Region maßgeblich prägt. Der Inari-See entwässert über den Paatsjoki-Fluss in die Barentssee und ist ein wichtiges Reservoir für die Wasserkraftnutzung. Die Umgebung des Sees besteht aus karger Tundra und borealen Wäldern, die Lebensraum für Rentiere und Elche bieten. Das Siida-Museum in Inari dokumentiert die enge Verbindung zwischen dem See und der indigenen Bevölkerung. Für Besucher bietet der See vielfältige Möglichkeiten für Aktivitäten wie Eisfischen, Kanufahren und die Beobachtung von Nordlichtern in einer unberührten Wildnis.",
      hu: "Az Inari-tó Észak-Lappföldön található, Finnország harmadik legnagyobb tava és a számi kultúra spirituális központja. Mintegy 1040 négyzetkilométeres területen fekszik, és körülbelül 119 méterrel a tengerszint felett helyezkedik el. A tó rendkívül tiszta vizéről és több mint 3000 szigetéről híres, amelyek közül Ukonkivi a legjelentősebb, mivel a számik számára évszázadokon át áldozati helyként szolgált. Északi fekvése miatt a tavat novembertől júniusig vastag jégréteg borítja, ami meghatározza a régió életét. Az Inari-tó a Paatsjoki-folyón keresztül a Barents-tengerbe ömlik, és fontos víztározó a hidroelektromos energiatermelés számára. A tó környezete kopár tundrából és boreális erdőkből áll, amelyek rénszarvasok és jávorszarvasok élőhelyei. Az inari Siida Múzeum dokumentálja a tó és az őslakos lakosság közötti szoros kapcsolatot. A látogatók számára a tó számos lehetőséget kínál, például lékhorgászatot, kenuzást és az északi fény megfigyelését az érintetlen vadonban.",
      ro: "Lacul Inari, situat în nordul Laponiei, este al treilea lac ca mărime din Finlanda și centrul spiritual al culturii Sami. Acesta se întinde pe o suprafață de aproximativ 1040 de kilometri pătrați și se află la circa 119 metri deasupra nivelului mării. Lacul este renumit pentru apele sale extrem de limpezi și pentru cele peste 3000 de insule, dintre care Ukonkivi este cea mai importantă, servind drept loc de sacrificiu pentru poporul Sami timp de secole. Din cauza locației sale nordice, lacul este acoperit de un strat gros de gheață din noiembrie până în iunie, fapt ce influențează viața în regiune. Lacul Inari se varsă în Marea Barents prin râul Paatsjoki și este un rezervor important pentru producerea energiei hidroelectrice. Împrejurimile lacului constă în tundră aridă și păduri boreale, care oferă habitat pentru reni și elani. Muzeul Siida din Inari documentează legătura strânsă dintre lac și populația indigenă. Pentru vizitatori, lacul oferă diverse activități, cum ar fi pescuitul la copcă, canotajul și observarea aurorei boreale într-o sălbăticie neatinsă.",
      en: "Lake Inari, located in northern Lapland, is the third-largest lake in Finland and the spiritual heart of Sami culture. It covers an area of approximately 1040 square kilometers and sits about 119 meters above sea level. The lake is renowned for its exceptionally clear water and over 3000 islands, with Ukonkivi being the most significant as it has served as a sacred sacrificial site for the Sami people for centuries. Due to its northern latitude, the lake is covered with a thick layer of ice from November to June, significantly shaping life in the region. Lake Inari drains into the Barents Sea via the Paatsjoki River and serves as a vital reservoir for hydroelectric power generation. The lake's surroundings consist of barren tundra and boreal forests, providing habitats for reindeer and moose. The Siida Museum in Inari documents the close connection between the lake and the indigenous population. For visitors, the lake offers a wide range of activities such as ice fishing, canoeing, and northern lights viewing in an untouched wilderness.",
    },
    factsAdvanced: {
      de: ["Fläche des Sees beträgt etwa 1040 Quadratkilometer.", "Beinhaltet über 3000 Inseln (genau 3318 Inseln).", "Die maximale Tiefe des Inari-Sees liegt bei 92 Metern.", "Ukonkivi ist eine historisch bedeutsame heilige Insel der Samen.", "Der See ist im Durchschnitt etwa 7 Monate im Jahr zugefroren.", "Entwässert über den Paatsjoki-Fluss in das Eismeer (Barentssee)."],
      hu: ["A tó területe körülbelül 1040 négyzetkilométer.", "Több mint 3000 sziget található benne (pontosan 3318).", "Az Inari-tó maximális mélysége 92 méter.", "Ukonkivi a számik történelmileg jelentős szent szigete.", "A tó évente átlagosan 7 hónapig van befagyva.", "A Paatsjoki-folyón keresztül a Barents-tengerbe ürül."],
      ro: ["Suprafața lacului este de aproximativ 1040 de kilometri pătrați.", "Conține peste 3000 de insule (mai exact 3318 insule).", "Adâncimea maximă a lacului Inari este de 92 de metri.", "Ukonkivi este o insulă sfântă a poporului Sami, de importanță istorică.", "Lacul este înghețat, în medie, aproximativ 7 luni pe an.", "Se varsă în Marea Barents prin intermediul râului Paatsjoki."],
      en: ["The lake's surface area is approximately 1040 square kilometers.", "Contains over 3000 islands (precisely 3318 islands).", "The maximum depth of Lake Inari is 92 meters.", "Ukonkivi is a historically significant sacred island for the Sami.", "The lake is frozen for an average of 7 months each year.", "Drains into the Barents Sea via the Paatsjoki River."],
    },
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
    descriptionAdvanced: {
      de: "Der Kemijoki ist mit einer Länge von etwa 550 Kilometern der längste Fluss Finnlands und eine lebenswichtige Ader für die Energiegewinnung des Landes. Er entspringt in der Nähe der russischen Grenze in Savukoski und fließt durch die weiten Landschaften Lapplands, bevor er bei Kemi in den Bottnischen Meerbusen mündet. Der Fluss ist durch 21 Wasserkraftwerke stark reguliert, die insgesamt etwa ein Drittel der finnischen Wasserkraft erzeugen. Vor dem Bau der Kraftwerke in der Mitte des 20. Jahrhunderts war der Kemijoki einer der bedeutendsten Lachsflüsse Europas, doch die Wanderwege der Fische wurden durch die Staumauern unterbrochen. Heute werden große Anstrengungen unternommen, um die Fischbestände durch Zuchtprogramme und Fischtreppen zu erhalten. Der Kemijoki durchfließt wichtige Städte wie Rovaniemi, wo er sich mit dem Ounasjoki vereinigt. Historisch diente der Fluss als bedeutender Transportweg für Holzflößer. Die weiten Überschwemmungsgebiete und die umliegende arktische Natur machen ihn zu einem wichtigen Ökosystem für zahlreiche Vogelarten und Wasserbewohner. Trotz der industriellen Nutzung bleibt der Kemijoki ein Symbol für die ungezähmte Kraft der nordischen Gewässer.",
      hu: "A Kemijoki mintegy 550 kilométeres hosszával Finnország leghosszabb folyója, és az ország energiatermelésének létfontosságú ere. A folyó az orosz határ közelében, Savukoskiban ered, és Lappföld tágas tájain keresztül folyik, mielőtt Keminél a Botteni-öbölbe torkollik. A folyót 21 vízerőmű szabályozza, amelyek összesen a finn hidroelektromos energia mintegy harmadát termelik. A 20. század közepén történt erőműépítések előtt a Kemijoki Európa egyik legjelentősebb lazacos folyója volt, de a halak vándorlási útvonalát megszakították a gátak. Ma nagy erőfeszítéseket tesznek a halállomány fenntartására tenyésztési programok és hallépcsők segítségével. A Kemijoki olyan fontos városokon folyik keresztül, mint Rovaniemi, ahol egyesül az Ounasjoki-folyóval. Történelmileg a folyó fontos szállítási útvonalként szolgált a faúsztatás számára. A tágas árterek és a környező sarkvidéki természet fontos ökoszisztémává teszik számos madárfaj és vízi élőlény számára. Az ipari hasznosítás ellenére a Kemijoki továbbra is az északi vizek zabolátlan erejének szimbóluma.",
      ro: "Kemijoki este cel mai lung râu din Finlanda, având o lungime de aproximativ 550 de kilometri, și o arteră vitală pentru producția de energie a țării. Izvorăște în apropierea graniței cu Rusia, în Savukoski, și curge prin peisajele vaste ale Laponiei înainte de a se vărsa în Golful Botnic la Kemi. Râul este puternic reglementat de 21 de hidrocentrale, care generează în total aproximativ o treime din energia hidroelectrică a Finlandei. Înainte de construcția centralelor la mijlocul secolului al XX-lea, Kemijoki era unul dintre cele mai importante râuri pentru somon din Europa, însă rutele de migrație ale peștilor au fost întrerupte de baraje. Astăzi se depun eforturi mari pentru menținerea populațiilor de pești prin programe de reproducere și scări de pești. Kemijoki trece prin orașe importante precum Rovaniemi, unde se unește cu râul Ounasjoki. Din punct de vedere istoric, râul a servit ca o rută majoră de transport pentru plutașii de lemne. Zonele vaste de inundabilitate și natura arctică înconjurătoare îl fac un ecosistem important pentru numeroase specii de păsări și creaturi acvatice. În ciuda utilizării industriale, Kemijoki rămâne un simbol al forței neîmblânzite a apelor nordice.",
      en: "The Kemijoki is Finland's longest river, stretching approximately 550 kilometers, and is a vital artery for the country's energy production. Originating near the Russian border in Savukoski, it flows through the vast landscapes of Lapland before emptying into the Gulf of Bothnia at Kemi. The river is highly regulated by 21 hydroelectric power plants, which together produce about one-third of Finland's hydroelectricity. Before the construction of these power plants in the mid-20th century, the Kemijoki was one of Europe's most significant salmon rivers, but fish migration routes were disrupted by the dams. Today, major efforts are underway to maintain fish populations through breeding programs and fish ladders. The Kemijoki passes through major towns like Rovaniemi, where it joins the Ounasjoki River. Historically, the river served as a crucial transport route for timber rafting. The extensive floodplains and surrounding arctic nature make it a vital ecosystem for numerous bird species and aquatic life. Despite industrial utilization, the Kemijoki remains a symbol of the untamed power of northern waters.",
    },
    factsAdvanced: {
      de: ["Mit 550 Kilometern der längste Fluss in ganz Finnland.", "Das Einzugsgebiet umfasst eine Fläche von etwa 51.127 km².", "Insgesamt 21 Wasserkraftwerke sind entlang des Flusses installiert.", "Produziert ca. 34 % der gesamten Wasserkraft Finnlands.", "Mündet bei der Stadt Kemi in den Bottnischen Meerbusen.", "Der Ounasjoki ist der größte Nebenfluss des Kemijoki."],
      hu: ["550 kilométeres hosszával Finnország leghosszabb folyója.", "Vízgyűjtő területe körülbelül 51 127 km²-t tesz ki.", "Összesen 21 vízerőmű üzemel a folyó mentén.", "A finn hidroelektromos energia mintegy 34%-át adja.", "Kemi városánál torkollik a Botteni-öbölbe.", "Az Ounasjoki a Kemijoki legnagyobb mellékfolyója."],
      ro: ["Cel mai lung râu din Finlanda, cu o lungime de 550 km.", "Bazinul hidrografic acoperă o suprafață de aprox. 51.127 km².", "De-a lungul râului sunt instalate în total 21 de hidrocentrale.", "Produce aproximativ 34% din totalul energiei hidro din Finlanda.", "Se varsă în Golful Botnic în apropierea orașului Kemi.", "Ounasjoki este cel mai mare afluent al râului Kemijoki."],
      en: ["The longest river in Finland, measuring 550 kilometers.", "The drainage basin covers an area of about 51,127 km².", "A total of 21 hydroelectric power plants are installed along the river.", "Produces approximately 34% of Finland's total hydroelectric power.", "Flows into the Gulf of Bothnia at the city of Kemi.", "The Ounasjoki is the largest tributary of the Kemijoki."],
    },
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
    descriptionAdvanced: {
      de: "Der Oulujoki ist ein bedeutender Fluss in Nordfinnland, der den See Oulujärvi mit dem Bottnischen Meerbusen verbindet. Auf einer Länge von 107 Kilometern überwindet der Fluss einen Höhenunterschied von etwa 122 Metern, was ihn zu einer idealen Quelle für Wasserkraft macht. Entlang seines Verlaufs befinden sich 12 Kraftwerke, darunter das bekannte Pyhäkoski-Kraftwerk, das einst das leistungsstärkste Finnlands war. Historisch war der Oulujoki weltberühmt für den Transport von Holzteer, der in den weiten Wäldern Kainuus produziert und über die Stromschnellen des Flusses zur Stadt Oulu verschifft wurde. Oulu entwickelte sich dadurch zu einem der wichtigsten Teer-Exporthäfen der Welt. Heute sind die einst wilden Stromschnellen weitgehend durch Stauseen ersetzt, was das Landschaftsbild maßgeblich verändert hat. Dennoch bietet der Fluss weiterhin Lebensraum für Lachse und Forellen, die durch moderne Fischwanderhilfen unterstützt werden. Die Ufer des Oulujoki sind geprägt von dichten Wäldern und fruchtbarem Ackerland, und der Fluss dient als wichtiges Naherholungsgebiet für die Bewohner von Oulu und der umliegenden Gemeinden.",
      hu: "Az Oulujoki Észak-Finnország egyik jelentős folyója, amely az Oulujärvi-tavat köti össze a Botteni-öböllel. 107 kilométeres hosszán a folyó mintegy 122 méteres szintkülönbséget küzd le, ami ideális forrássá teszi a vízi energia számára. Futása mentén 12 erőmű található, köztük a híres Pyhäkoski-erőmű, amely egykor Finnország legnagyobb teljesítményű üzeme volt. Történelmileg az Oulujoki világhírű volt a fakátrány szállításáról, amelyet Kainuu hatalmas erdőiben állítottak elő, és a folyó zúgóin keresztül juttattak el Oulu városába. Ennek köszönhetően Oulu a világ egyik legfontosabb kátrányexportáló kikötőjévé vált. Napjainkban az egykori vad zúgókat nagyrészt víztározók váltották fel, ami jelentősen megváltoztatta a táj képét. Ennek ellenére a folyó továbbra is élőhelyet biztosít a lazacok és pisztrángok számára, amelyeket modern hallépcsők segítenek. Az Oulujoki partjait sűrű erdők és termékeny szántóföldek jellemzik, a folyó pedig fontos pihenőövezetként szolgál Oulu és a környező települések lakói számára.",
      ro: "Oulujoki este un râu important din nordul Finlandei, care leagă lacul Oulujärvi de Golful Botnic. Pe lungimea sa de 107 kilometri, râul depășește o diferență de nivel de aproximativ 122 de metri, ceea ce îl face o sursă ideală pentru energie hidroelectrică. De-a lungul cursului său se află 12 centrale electrice, inclusiv cunoscuta centrală Pyhäkoski, care a fost odinioară cea mai puternică din Finlanda. Din punct de vedere istoric, Oulujoki a fost renumit în întreaga lume pentru transportul de gudron de lemn, produs în pădurile vaste din Kainuu și expediat prin repezișurile râului către orașul Oulu. Oulu a devenit astfel unul dintre cele mai importante porturi de export de gudron din lume. Astăzi, repezișurile odinioară sălbatice au fost în mare parte înlocuite de lacuri de acumulare, ceea ce a schimbat semnificativ peisajul. Cu toate acestea, râul continuă să ofere habitat pentru somoni și păstrăvi, susținuți de sisteme moderne de migrație. Malurile râului Oulujoki sunt caracterizate de păduri dese și terenuri agricole fertile, iar râul servește ca o zonă importantă de agrement pentru locuitorii din Oulu și comunitățile învecinate.",
      en: "The Oulujoki is a significant river in northern Finland, connecting Lake Oulujärvi with the Gulf of Bothnia. Over its length of 107 kilometers, the river drops approximately 122 meters in elevation, making it an ideal source for hydroelectric power. There are 12 power plants along its course, including the well-known Pyhäkoski power plant, which was once the most powerful in Finland. Historically, the Oulujoki was world-famous for the transport of wood tar, which was produced in the vast forests of Kainuu and shipped through the river's rapids to the city of Oulu. This trade made Oulu one of the most important tar-exporting ports in the world. Today, the once-wild rapids have largely been replaced by reservoirs, significantly altering the landscape. Nevertheless, the river continues to provide a habitat for salmon and trout, supported by modern fish migration aids. The banks of the Oulujoki are characterized by dense forests and fertile farmland, and the river serves as a major recreational area for the residents of Oulu and the surrounding municipalities.",
    },
    factsAdvanced: {
      de: ["Länge des Flusses beträgt etwa 107 Kilometer.", "Verbindet den See Oulujärvi mit dem Bottnischen Meerbusen.", "Überwindet einen Höhenunterschied von insgesamt 122 Metern.", "Insgesamt 12 Wasserkraftwerke befinden sich entlang des Flusses.", "Historisch bedeutend für den Transport von Kiefernteer.", "Das Pyhäkoski-Kraftwerk hat eine Leistung von 147 Megawatt."],
      hu: ["A folyó hossza körülbelül 107 kilométer.", "Az Oulujärvi-tavat köti össze a Botteni-öböllel.", "Összesen 122 méteres szintkülönbséget küzd le.", "A folyó mentén összesen 12 vízerőmű található.", "Történelmileg jelentős a fenyőkátrány szállítása szempontjából.", "A Pyhäkoski-erőmű teljesítménye 147 megawatt."],
      ro: ["Lungimea râului este de aproximativ 107 kilometri.", "Conectează lacul Oulujärvi cu Golful Botnic.", "Depășește o diferență totală de altitudine de 122 de metri.", "De-a lungul râului se află în total 12 hidrocentrale.", "Istoric important pentru transportul de gudron de pin.", "Centrala Pyhäkoski are o capacitate de 147 de megawați."],
      en: ["The length of the river is approximately 107 kilometers.", "Connects Lake Oulujärvi with the Gulf of Bothnia.", "Covers a total drop in elevation of 122 meters.", "A total of 12 hydroelectric power plants are located along the river.", "Historically significant for the transportation of pine tar.", "The Pyhäkoski power plant has a capacity of 147 megawatts."],
    },
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
    descriptionAdvanced: {
      de: "Das Kvarken-Archipel an der Westküste Finnlands ist ein einzigartiges Naturphänomen und gehört seit 2006 zum UNESCO-Weltnaturerbe. Gemeinsam mit der schwedischen Hohen Küste bildet es ein Gebiet, in dem die postglaziale Landhebung besonders deutlich sichtbar ist. Durch das Abschmelzen der Eismassen der letzten Eiszeit hebt sich das Land hier um etwa 8 bis 8,5 Millimeter pro Jahr, was zur ständigen Entstehung neuer Inseln und zur Verlandung flacher Buchten führt. Das Archipel besteht aus über 5600 Inseln, die von flachen Gewässern und charakteristischen De-Geer-Moränen geprägt sind. Diese wellenförmigen geologischen Formationen entstanden unter dem Inlandeis und sind nirgendwo sonst so gut ausgeprägt wie hier. Die Region bietet einen wertvollen Lebensraum für zahlreiche Zugvögel und seltene Pflanzenarten. Für Besucher ist das Gebiet über die Replot-Brücke erreichbar, die längste Brücke Finnlands, die das Festland mit den äußeren Inseln verbindet. Das Kvarken-Archipel ist ein lebendiges Labor der Geologie, in dem man den ständigen Wandel der Erdoberfläche in menschlichen Zeitmaßstäben beobachten kann.",
      hu: "A Finnország nyugati partjainál fekvő Kvarken-szigetvilág egyedülálló természeti jelenség, amely 2006 óta az UNESCO Világörökség része. A svéd Magasparttal együtt alkot egy olyan területet, ahol a jégkorszak utáni földemelkedés különösen jól megfigyelhető. Az utolsó jégkorszak jégtömegének elolvadása következtében a föld itt évente körülbelül 8–8,5 millimétert emelkedik, ami új szigetek folyamatos kialakulásához és a sekély öblök feltöltődéséhez vezet. A szigetvilág több mint 5600 szigetből áll, amelyeket sekély vizek és jellegzetes De Geer-morénák jellemeznek. Ezek a hullám alakú geológiai formációk a belföldi jég alatt keletkeztek, és sehol máshol nem láthatók olyan jól, mint itt. A régió értékes élőhelyet biztosít számos költözőmadár és ritka növényfaj számára. A látogatók számára a terület a Replot-hídon keresztül érhető el, amely Finnország leghosszabb hídja, összekötve a szárazföldet a külső szigetekkel. A Kvarken-szigetvilág a geológia élő laboratóriuma, ahol a földfelszín állandó változása emberi léptékkel is nyomon követhető.",
      ro: "Arhipelagul Kvarken, situat pe coasta de vest a Finlandei, este un fenomen natural unic și face parte din Patrimoniul Mondial UNESCO din 2006. Împreună cu Coasta Înaltă din Suedia, acesta formează o zonă în care ridicarea post-glaciară a terenului este deosebit de vizibilă. Datorită topirii maselor de gheață din ultima epocă glaciară, terenul se ridică aici cu aproximativ 8 până la 8,5 milimetri pe an, ceea ce duce la formarea continuă de noi insule și la colmatarea golfurilor puțin adânci. Arhipelagul este format din peste 5600 de insule, caracterizate prin ape puțin adânci și morene De Geer distinctive. Aceste formațiuni geologice ondulate s-au format sub calota glaciară și nu sunt nicăieri atât de bine dezvoltate ca aici. Regiunea oferă un habitat valoros pentru numeroase păsări migratoare și specii de plante rare. Pentru vizitatori, zona este accesibilă prin podul Replot, cel mai lung pod din Finlanda, care leagă continentul de insulele exterioare. Arhipelagul Kvarken este un laborator viu al geologiei, unde se poate observa schimbarea constantă a suprafeței pământului la scară temporală umană.",
      en: "The Kvarken Archipelago on Finland's west coast is a unique natural phenomenon and has been a UNESCO World Natural Heritage site since 2006. Together with Sweden's High Coast, it forms an area where post-glacial land uplift is exceptionally visible. Due to the melting of the ice masses from the last Ice Age, the land here rises by about 8 to 8.5 millimeters annually, leading to the continuous emergence of new islands and the shallowing of bays. The archipelago consists of over 5600 islands, characterized by shallow waters and distinctive De Geer moraines. These wave-like geological formations were created beneath the continental ice sheet and are more prominent here than anywhere else in the world. The region provides a valuable habitat for numerous migratory birds and rare plant species. For visitors, the area is accessible via the Replot Bridge, the longest bridge in Finland, connecting the mainland with the outer islands. The Kvarken Archipelago serves as a living laboratory of geology, where the constant transformation of the Earth's surface can be observed within a human timescale.",
    },
    factsAdvanced: {
      de: ["Seit 2006 Teil des UNESCO-Weltnaturerbes (gemeinsam mit Schweden).", "Das Land hebt sich jährlich um etwa 8 bis 8,5 Millimeter.", "Das Archipel umfasst mehr als 5600 einzelne Inseln.", "Beheimatet einzigartige De-Geer-Moränen aus der Eiszeit.", "Die Replot-Brücke (1045 m) ist die längste Brücke Finnlands.", "Gesamtfläche des Schutzgebiets beträgt ca. 194.400 Hektar."],
      hu: ["2006 óta az UNESCO Világörökség része (Svédországgal közösen).", "A föld évente körülbelül 8–8,5 millimétert emelkedik.", "A szigetvilág több mint 5600 különálló szigetet foglal magában.", "Egyedülálló, jégkorszaki De Geer-morénáknak ad otthont.", "A Replot-híd (1045 m) Finnország leghosszabb hídja.", "A védett terület teljes felszíne körülbelül 194 400 hektár."],
      ro: ["Din 2006, face parte din Patrimoniul Mondial UNESCO (împreună cu Suedia).", "Terenul se ridică anual cu aproximativ 8 până la 8,5 milimetri.", "Arhipelagul cuprinde mai mult de 5600 de insule individuale.", "Găzduiește morene De Geer unice, datând din epoca glaciară.", "Podul Replot (1045 m) este cel mai lung pod din Finlanda.", "Suprafața totală a zonei protejate este de aprox. 194.400 hectare."],
      en: ["Part of the UNESCO World Heritage list since 2006 (jointly with Sweden).", "The land rises annually by approximately 8 to 8.5 millimeters.", "The archipelago comprises more than 5600 individual islands.", "Home to unique De Geer moraines from the last Ice Age.", "The Replot Bridge (1045 m) is the longest bridge in Finland.", "The total protected area covers approximately 194,400 hectares."],
    },
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
    descriptionAdvanced: {
      de: "Der Nuuksio-Nationalpark, nur eine kurze Fahrt von Helsinki entfernt, ist eine grüne Oase der Wildnis inmitten der am dichtesten besiedelten Region Finnlands. Er wurde 1994 gegründet und erstreckt sich über eine Fläche von 53 Quadratkilometern in den Gemeinden Espoo, Kirkkonummi und Vihti. Die Landschaft ist geprägt von rauen Felsformationen, tiefen Tälern und über 40 glasklaren Seen und Teichen. Nuuksio ist besonders bekannt als Lebensraum des seltenen Europäischen Gleithörnchens, das auch das Symbol des Parks ist. Die Vegetation besteht überwiegend aus alten Nadelwäldern und Mooren, die zahlreichen bedrohten Arten Schutz bieten. Ein umfangreiches Netz von über 30 Kilometern markierten Wanderwegen sowie spezielle Routen für Radfahrer und Reiter machen den Park zu einem beliebten Ziel für Outdoor-Aktivitäten. Das Naturzentrum Haltia bietet Besuchern interaktive Ausstellungen über die finnische Natur und Architektur. Trotz seiner Nähe zur Hauptstadt bewahrt Nuuksio eine Atmosphäre vollkommener Stille und Unberührtheit. Der Park dient als wichtiges Ökosystem für den regionalen Naturschutz und bietet den Stadtbewohnern einen wertvollen Raum für Erholung und Naturerlebnisse.",
      hu: "A Helsinki közelében fekvő Nuuksio Nemzeti Park egy vadregényes zöld oázis Finnország legsűrűbben lakott régiójának közepén. 1994-ben alapították, és 53 négyzetkilométeres területen fekszik Espoo, Kirkkonummi és Vihti községekben. A tájat zord sziklaalakzatok, mély völgyek és több mint 40 kristálytiszta tó és tavacska jellemzi. Nuuksio különösen a ritka európai repülőmókus élőhelyeként ismert, amely a park jelképe is egyben. A növényzetet főként öreg fenyőerdők és lápok alkotják, amelyek számos veszélyeztetett fajnak nyújtanak menedéket. A több mint 30 kilométernyi jelzett túraútvonal, valamint a kerékpárosok és lovasok számára kialakított speciális útvonalak a parkot a szabadtéri tevékenységek népszerű helyszínévé teszik. A Haltia Természeti Központ interaktív kiállításokkal várja a látogatókat a finn természetről és építészetről. Annak ellenére, hogy közel van a fővároshoz, Nuuksio megőrzi a tökéletes csend és érintetlenség atmoszféráját. A park fontos ökoszisztémaként szolgál a regionális természetvédelem számára, és értékes helyet biztosít a városlakók pihenéséhez és a természet élvezetéhez.",
      ro: "Parcul Național Nuuksio, situat la mică distanță de Helsinki, este o oază verde de sălbăticie în mijlocul celei mai dens populate regiuni din Finlanda. A fost înființat în 1994 și se întinde pe o suprafață de 53 de kilometri pătrați în comunele Espoo, Kirkkonummi și Vihti. Peisajul este caracterizat de formațiuni stâncoase aspre, văi adânci și peste 40 de lacuri și iazuri cristaline. Nuuksio este cunoscut în special ca habitat al rarei veverițe zburătoare siberiene, care este și simbolul parcului. Vegetația constă în principal din păduri vechi de conifere și mlaștini, care oferă protecție numeroaselor specii amenințate. O rețea extinsă de peste 30 de kilometri de trasee de drumeție marcate, precum și rute speciale pentru bicicliști și călăreți, fac din parc o destinație populară pentru activități în aer liber. Centrul de natură Haltia oferă vizitatorilor expoziții interactive despre natura și arhitectura finlandeză. În ciuda proximității sale față de capitală, Nuuksio păstrează o atmosferă de liniște deplină și puritate. Parcul servește ca un ecosistem important pentru conservarea naturii regionale și oferă locuitorilor orașului un spațiu valoros pentru relaxare și experiențe în natură.",
      en: "Nuuksio National Park, located just a short drive from Helsinki, is a green wilderness oasis in the middle of Finland's most densely populated region. Established in 1994, it spans an area of 53 square kilometers across the municipalities of Espoo, Kirkkonummi, and Vihti. The landscape is defined by rugged rock formations, deep valleys, and over 40 crystal-clear lakes and ponds. Nuuksio is particularly famous as a habitat for the rare Siberian flying squirrel, which serves as the park's official symbol. The vegetation consists predominantly of old-growth coniferous forests and mires, providing shelter for numerous endangered species. An extensive network of over 30 kilometers of marked hiking trails, along with special routes for cyclists and horseback riders, makes the park a popular destination for outdoor activities. The Haltia Finnish Nature Centre offers visitors interactive exhibitions on Finnish nature and sustainable architecture. Despite its proximity to the capital, Nuuksio preserves an atmosphere of complete silence and pristine beauty. The park serves as a vital ecosystem for regional conservation and offers city dwellers a precious space for recreation and connection with nature.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1994 zum Schutz der südfinnischen Waldlandschaft.", "Gesamtfläche beträgt ca. 53 Quadratkilometer.", "Beheimatet das seltene Sibirische Gleithörnchen (Pteromys volans).", "Enthält mehr als 40 Seen und Teiche innerhalb des Parks.", "Verfügt über ein Netz von ca. 30 km markierten Wanderwegen.", "Das Naturzentrum Haltia befindet sich am Rande des Parks."],
      hu: ["1994-ben alapították a dél-finnországi erdős táj védelmére.", "A park teljes területe körülbelül 53 négyzetkilométer.", "A ritka szibériai repülőmókus (Pteromys volans) élőhelye.", "Több mint 40 tó és tavacska található a park területén.", "Körülbelül 30 km hosszú jelzett túraútvonal-hálózattal rendelkezik.", "A Haltia Természeti Központ a park szélén található."],
      ro: ["Înființat în 1994 pentru a proteja peisajul forestier din sudul Finlandei.", "Suprafața totală este de aproximativ 53 de kilometri pătrați.", "Găzduiește rara veveriță zburătoare siberiană (Pteromys volans).", "Conține peste 40 de lacuri și iazuri în interiorul parcului.", "Dispune de o rețea de aprox. 30 km de trasee de drumeție marcate.", "Centrul de natură Haltia este situat la marginea parcului."],
      en: ["Established in 1994 to protect the southern Finnish forest landscape.", "The total area covers approximately 53 square kilometers.", "Habitat of the rare Siberian flying squirrel (Pteromys volans).", "Contains more than 40 lakes and ponds within the park boundaries.", "Features a network of approximately 30 km of marked hiking trails.", "The Haltia Finnish Nature Centre is located on the edge of the park."],
    },
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
    descriptionAdvanced: {
      de: "Der Koli-Nationalpark in Nordkarelien beherbergt eine der bekanntesten Nationallandschaften Finnlands. Vom Gipfel des Ukko-Koli bietet sich ein majestätischer Ausblick über den Pielinen-See, der seit Generationen Künstler und Dichter inspiriert hat. Der Park bewahrt sowohl wertvolle Urwälder als auch traditionelle Agrarlandschaften.",
      hu: "Az észak-karéliai Koli Nemzeti Park Finnország egyik legismertebb nemzeti tájképének ad otthont. Az Ukko-Koli csúcsáról fenséges kilátás nyílik a Pielinen-tóra, amely generációk óta inspirálja a művészeket és költőket. A park értékes őserdőket és hagyományos mezőgazdasági tájakat egyaránt őriz.",
      ro: "Parcul Național Koli din Carelia de Nord găzduiește unul dintre cele mai faimoase peisaje naționale ale Finlandei. De pe vârful Ukko-Koli se deschide o vedere maiestuoasă asupra lacului Pielinen, care a inspirat generații de artiști. Parcul protejează atât păduri virgine, cât și peisaje agricole tradiționale.",
      en: "Koli National Park in North Karelia encompasses one of Finland's most iconic national landscapes. The view from the summit of Ukko-Koli over Lake Pielinen has inspired generations of Finnish artists and poets. The park preserves both valuable old-growth forests and traditional slash-and-burn agricultural heritage.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1991", "Höchster Punkt Ukko-Koli (347 Meter)", "Blick auf den 90 km langen Pielinen-See", "Besteht aus weißem Quarzitgestein", "Inspirierte den Komponisten Jean Sibelius", "Traditionelle Brandrodungskultur wird bewahrt"],
      hu: ["1991-ben alapították", "Legmagasabb pontja az Ukko-Koli (347 m)", "Kilátás a 90 km hosszú Pielinen-tóra", "Fehér kvarcit kőzetből épül fel", "Jean Sibelius zeneszerzőt is megihlette", "Hagyományos irtásos-égetéses gazdálkodást őriz"],
      ro: ["Înființat în anul 1991", "Punctul culminant este Ukko-Koli (347 m)", "Vedere spre lacul Pielinen, lung de 90 km", "Format din rocă de cuarțit alb", "L-a inspirat pe compozitorul Jean Sibelius", "Păstrează cultura tradițională de agricultură"],
      en: ["Established in 1991", "Highest peak is Ukko-Koli at 347 meters", "Overlooks the 90-km long Lake Pielinen", "Formed from ancient white quartzite rock", "Inspired composer Jean Sibelius", "Preserves traditional slash-and-burn farming"],
    },
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
    descriptionAdvanced: {
      de: "Die Mitternachtssonne am Inari-See ist ein faszinierendes Naturphänomen nördlich des Polarkreises. Über zwei Monate lang geht die Sonne im Sommer niemals vollständig unter und taucht die arktische Landschaft in ein goldenes Dauerlicht. Diese Zeit der endlosen Tage wird von den Einheimischen für Feste und Outdoor-Aktivitäten genutzt.",
      hu: "Az Inari-tónál tapasztalható éjféli nap egy lenyűgöző természeti jelenség a sarkkörtől északra. Nyáron több mint két hónapon át a nap soha nem nyugszik le teljesen, aranyló fénybe vonva a sarki tájat. Az örök nappalok időszakát a helyiek fesztiválokkal és szabadtéri tevékenységekkel ünneplik.",
      ro: "Soarele de la miezul nopții la lacul Inari este un fenomen natural fascinant la nord de Cercul Polar. Timp de peste două luni, în timpul verii, soarele nu apune niciodată complet, scăldând peisajul arctic într-o lumină aurie constantă. Această perioadă este celebrată prin festivaluri și activități în aer liber.",
      en: "The Midnight Sun at Lake Inari is a captivating natural phenomenon occurring north of the Arctic Circle. For over two months in summer, the sun remains above the horizon 24 hours a day, bathing the Arctic landscape in perpetual golden light. This season of endless days is deeply woven into the local culture and outdoor lifestyle.",
    },
    factsAdvanced: {
      de: ["Sonne bleibt 24 Stunden am Himmel", "Dauert in Inari von Mai bis Juli", "Inari liegt ca. 300 km nördlich des Polarkreises", "Phänomen hält etwa 60-70 Tage an", "Lichtverhältnisse ideal für die Naturfotografie", "Beliebte Zeit für das Nachtfischen am See"],
      hu: ["A nap 24 órán át látható az égen", "Inariban májustól júliusig tart", "Inari kb. 300 km-re van a sarkkörtől északra", "A jelenség körülbelül 60-70 napig tart", "Ideális fényviszonyok a természetfotózáshoz", "Népszerű időszak az éjszakai horgászathoz"],
      ro: ["Soarele rămâne pe cer timp de 24 de ore", "Durează în Inari din mai până în iulie", "Inari e la cca. 300 km nord de Cercul Polar", "Fenomenul durează aproximativ 60-70 de zile", "Lumină ideală pentru fotografia de natură", "Perioadă populară pentru pescuitul de noapte"],
      en: ["Sun stays visible for 24 hours a day", "Occurs in Inari from late May to late July", "Inari is 300 km north of the Arctic Circle", "The phenomenon lasts about 60-70 days", "Unique light conditions for photographers", "Traditional time for midnight lake fishing"],
    },
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
    descriptionAdvanced: {
      de: "Mariehamn ist die charmante Hauptstadt der autonomen Åland-Inseln und liegt auf einer schmalen Halbinsel. Die Stadt wurde 1861 gegründet und ist nach der russischen Kaiserin Maria Alexandrowna benannt. Als bedeutender Hafenort ist sie das kulturelle und wirtschaftliche Zentrum des schwedischsprachigen Archipels.",
      hu: "Mariehamn az autonóm Åland-szigetek bájos fővárosa, amely egy keskeny félszigeten fekszik. A várost 1861-ben alapították, és Marija Alekszandrovna orosz cárnéról nevezték el. Fontos kikötővárosként ez a svéd nyelvű szigetvilág kulturális és gazdasági központja.",
      ro: "Mariehamn este capitala fermecătoare a Insulelor Åland autonome, situată pe o peninsulă îngustă. Orașul a fost fondat în 1861 și numit după împărăteasa rusă Maria Alexandrovna. Ca important oraș portuar, este centrul cultural și economic al arhipelagului vorbitor de suedeză.",
      en: "Mariehamn is the charming capital of the autonomous Åland Islands, situated on a narrow peninsula. Founded in 1861, it was named after Maria Alexandrovna, the consort of Tsar Alexander II. As a major maritime hub, it serves as the cultural and economic heart of the Swedish-speaking archipelago.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1861", "Benannt nach Kaiserin Maria Alexandrowna", "Heimat des Museumsschiffs Pommern", "Einzige Stadt auf den Åland-Inseln", "Bekannt als 'Stadt der tausend Linden'", "Wichtigster Knotenpunkt für Ostsee-Fähren"],
      hu: ["1861-ben alapították", "Marija Alekszandrovna cárnéról kapta nevét", "Itt található a Pommern múzeumhajó", "Az Åland-szigetek egyetlen városa", "Az 'ezer hársfa városaként' is ismert", "A balti-tengeri kompok fő csomópontja"],
      ro: ["Fondat în anul 1861", "Numit după împărăteasa Maria Alexandrovna", "Găzduiește nava-muzeu Pommern", "Singurul oraș din Insulele Åland", "Cunoscut ca 'orașul celor o mie de tei'", "Nod principal pentru feriboturile din Baltica"],
      en: ["Founded in 1861", "Named after Empress Maria Alexandrovna", "Home to the four-masted museum ship Pommern", "The only city in the Åland Islands", "Known as the 'City of a Thousand Lindens'", "A key hub for Baltic Sea ferry traffic"],
    },
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
    descriptionAdvanced: {
      de: "Lohja liegt malerisch am Ufer des Lohjanjärvi-Sees und ist bekannt für seine reiche Bergbaugeschichte und Apfelplantagen. Das Wahrzeichen der Stadt ist die mittelalterliche St.-Laurentius-Kirche mit ihren prächtigen Wandmalereien. Ein besonderes Erlebnis ist das Erlebnisbergwerk Tytyri, das tief in das Kalkgestein führt.",
      hu: "Lohja a Lohjanjärvi-tó partján fekszik, és gazdag bányászati múltjáról, valamint almáskertjeiről ismert. A város jelképe a középkori Szent Lőrinc-templom, amely pompás falfestményeiről híres. Különleges élményt nyújt a Tytyri élménybánya, amely mélyen a mészkő kőzetbe vezet.",
      ro: "Lohja este situat pe malul lacului Lohjanjärvi și este cunoscut pentru istoria sa minieră bogată și livezile de meri. Simbolul orașului este Biserica Sf. Laurențiu, cu frescele sale medievale magnifice. O experiență specială este mina Tytyri, care coboară adânc în roca de calcar.",
      en: "Lohja is located on the shores of Lake Lohjanjärvi and is famous for its long mining history and apple orchards. The town's landmark is the medieval St. Lawrence Church, noted for its spectacular murals. A major attraction is the Tytyri Mine Experience, where visitors can descend deep into the limestone rock.",
    },
    factsAdvanced: {
      de: ["St.-Laurentius-Kirche stammt aus dem 15. Jhd.", "Tytyri-Bergwerk ist 110 Meter tief für Besucher", "Größtes Kalksteinabbaugebiet Finnlands", "Bekannt als 'Apfelstadt' Finnlands", "Liegt am größten See Südfinnlands", "Wichtiger Standort der Papierindustrie"],
      hu: ["A Szent Lőrinc-templom a 15. századból való", "A Tytyri-bánya 110 méter mély a látogatóknak", "Finnország legnagyobb mészkőbányája", "Finnország 'almacsodájaként' is emlegetik", "Dél-Finnország legnagyobb tava mellett fekszik", "A papíripar egyik fontos központja"],
      ro: ["Biserica Sf. Laurențiu datează din sec. XV", "Mina Tytyri are 110 m adâncime vizitabilă", "Cea mai mare zonă de extracție a calcarului", "Cunoscut drept 'orașul merelor' din Finlanda", "Situat lângă cel mai mare lac din sudul țării", "Centru important al industriei de hârtie"],
      en: ["St. Lawrence Church dates back to the 15th century", "Tytyri Mine museum is 110 meters underground", "Largest limestone mining area in Finland", "Known as Finland's 'Apple City'", "Located by the largest lake in Southern Finland", "Key center for the Finnish paper industry"],
    },
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
    descriptionAdvanced: {
      de: "Naantali ist eine der ältesten Städte Finnlands und ein bedeutender Kurort an der Südwestküste. Die Stadt entstand im 15. Jahrhundert um ein Birgittenkloster und besticht heute durch ihre gut erhaltene Holzhaus-Altstadt. Auf der Insel Kailo befindet sich die Muminwelt, die Fans der berühmten Trolle aus aller Welt anzieht.",
      hu: "Naantali Finnország egyik legrégebbi városa és fontos üdülőhely a délnyugati parton. A város a 15. században alakult egy birgitta kolostor körül, és ma jól megőrzött faházas óvárosával hódít. A Kailo-szigeten található a Múminvilág, amely a híres trollok rajongóit vonzza.",
      ro: "Naantali este unul dintre cele mai vechi orașe din Finlanda și o stațiune balneară importantă pe coasta de sud-vest. Orașul a apărut în secolul XV în jurul unei mănăstiri birgitine și impresionează prin centrul vechi cu case din lemn. Pe insula Kailo se află Lumea Mumunilor.",
      en: "Naantali is one of Finland's oldest towns and a premier seaside resort on the southwest coast. It grew around a 15th-century Brigittine convent and is famous for its beautifully preserved wooden old town. The island of Kailo is home to Moomin World, a theme park dedicated to Tove Jansson's beloved characters.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1443", "Sommerresidenz des Präsidenten (Kultaranta)", "Muminwelt öffnete im Jahr 1993", "Entstand rund um das Birgittenkloster", "Wichtigster Öl- und Frachthafen der Region", "Einst berühmt für die Sockenstrickerei"],
      hu: ["1443-ban alapították", "Az elnök nyári rezidenciája (Kultaranta)", "A Múminvilág 1993-ban nyílt meg", "Egy birgitta kolostor köré épült", "A régió legfontosabb olaj- és teherkikötője", "Egykor híres volt a harisnyakötésről"],
      ro: ["Fondat în anul 1443", "Reședința de vară a președintelui (Kultaranta)", "Lumea Mumunilor s-a deschis în 1993", "Dezvoltat în jurul unei mănăstiri birgitine", "Cel mai important port petrolier din regiune", "Cunoscut odinioară pentru tricotatul șosetelor"],
      en: ["Founded in 1443", "Home to Kultaranta, the President's summer home", "Moomin World theme park opened in 1993", "Originates from a Brigittine monastery", "Major oil and cargo port in the region", "Historically famous for knitting socks"],
    },
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
    descriptionAdvanced: {
      de: "Rauma ist berühmt für 'Alt-Rauma', den größten zusammenhängenden mittelalterlichen Holzkern in den nordischen Ländern, der zum UNESCO-Welterbe gehört. Die Stadt ist zudem für ihre jahrhundertealte Tradition der Spitzenklöppelei und ihren einzigartigen Dialekt bekannt. Die engen Gassen und farbenfrohen Holzhäuser schaffen eine lebendige Atmosphäre.",
      hu: "Rauma híres 'Ó-Raumáról', az északi országok legnagyobb egybefüggő középkori fás városmagjáról, amely az UNESCO világörökség része. A város ismert évszázados csipkeverő hagyományáról és egyedülálló nyelvjárásáról is. A szűk utcák és színes faházak élő történelmi hangulatot árasztanak.",
      ro: "Rauma este faimos pentru 'Vechiul Rauma', cel mai mare nucleu medieval de case din lemn din țările nordice, inclus în patrimoniul UNESCO. Orașul este cunoscut și pentru tradiția seculară a dantelei și pentru dialectul său unic. Străzile înguste și casele colorate creează o atmosferă vibrantă.",
      en: "Rauma is renowned for 'Old Rauma', the largest unified medieval wooden town center in the Nordic countries and a UNESCO World Heritage site. The city is also famous for its centuries-old tradition of lace-making and its unique local dialect. Its narrow cobblestone streets and colorful wooden houses offer a living history experience.",
    },
    factsAdvanced: {
      de: ["UNESCO-Weltkulturerbe seit 1991", "Über 600 historische Holzgebäude", "Berühmt für die handgearbeitete Klöppelspitze", "Eigener Dialekt namens Rauman giäl", "Gegründet im Jahr 1442", "Heimat der Heilig-Kreuz-Kirche (15. Jhd.)"],
      hu: ["1991 óta UNESCO világörökségi helyszín", "Több mint 600 történelmi faépület", "Híres a kézzel vert csipkéiről", "Saját nyelvjárása a Rauman giäl", "1442-ben alapították", "Itt található a 15. századi Szent Kereszt-templom"],
      ro: ["Patrimoniu Mondial UNESCO din 1991", "Peste 600 de clădiri istorice din lemn", "Faimos pentru dantela lucrată manual", "Dialect propriu numit 'Rauman giäl'", "Oraș fondat în anul 1442", "Găzduiește Biserica Sfânta Cruce (sec. XV)"],
      en: ["UNESCO World Heritage site since 1991", "Contains over 600 historic wooden buildings", "Famous for traditional bobbin lace-making", "Has its own dialect called 'Rauman giäl'", "City founded in 1442", "Home to the 15th-century Church of the Holy Cross"],
    },
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
    descriptionAdvanced: {
      de: "Pori ist eine bedeutende Hafen- und Industriestadt an der Westküste Finnlands an der Mündung des Flusses Kokemäenjoki. Die 1558 gegründete Stadt ist international vor allem für das Pori Jazz Festival bekannt. Das Stadtbild wird durch breite Boulevards und den nahegelegenen Yyteri-Sandstrand geprägt.",
      hu: "Pori fontos kikötő- és iparváros Finnország nyugati partján, a Kokemäenjoki folyó torkolatánál. Az 1558-ban alapított város nemzetközileg leginkább a Pori Jazz fesztiválról ismert. Városképét széles sugárutak és a közeli Yyteri homokos tengerpartja határozzák meg.",
      ro: "Pori este un important oraș portuar și industrial de pe coasta de vest a Finlandei, situat la gura de vărsare a râului Kokemäenjoki. Fondat în 1558, orașul este cunoscut la nivel internațional în special pentru festivalul Pori Jazz. Aspectul urban este definit de bulevarde largi și de plaja de nisip Yyteri din apropiere.",
      en: "Pori is a major port and industrial city on the west coast of Finland at the mouth of the Kokemäenjoki River. Founded in 1558, the city is best known internationally for the Pori Jazz festival. The cityscape is characterized by wide boulevards and the nearby Yyteri sandy beach.",
    },
    factsAdvanced: {
      de: ["Gegründet 1558 durch Herzog Johann von Schweden", "Zehntgrößte Stadt Finnlands nach Einwohnerzahl", "Das Pori Jazz Festival findet seit 1966 statt", "Der Yyteri-Strand erstreckt sich über 6 Kilometer", "Beherbergt das Juselius-Mausoleum aus dem Jahr 1903", "Wichtiger Standort für Kupfer- und Nickelindustrie"],
      hu: ["1558-ban alapította János svéd herceg", "Lakosainak száma alapján Finnország tizedik legnagyobb városa", "A Pori Jazz fesztivált 1966 óta rendezik meg", "Az Yyteri strand hossza eléri a 6 kilométert", "Itt található az 1903-ban épült Juselius-mauzóleum", "Fontos központja a réz- és nikkeliparnak"],
      ro: ["Fondat în 1558 de către ducele Ioan al Suediei", "Al zecelea oraș ca mărime din Finlanda după populație", "Festivalul Pori Jazz se desfășoară din anul 1966", "Plaja Yyteri se întinde pe o lungime de 6 kilometri", "Găzduiește Mausoleul Juselius, construit în 1903", "Centru important pentru industria cuprului și a nichelului"],
      en: ["Founded in 1558 by Duke John of Sweden", "Tenth largest city in Finland by population", "The Pori Jazz Festival has been held since 1966", "The Yyteri beach extends for 6 kilometers", "Home to the Juselius Mausoleum built in 1903", "Important hub for the copper and nickel industry"],
    },
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
    descriptionAdvanced: {
      de: "Forssa ist eine Industriestadt im Südwesten Finnlands, deren Entwicklung eng mit der Textilindustrie verknüpft ist. Die Stadt entstand um eine 1847 gegründete Baumwollspinnerei und bewahrt heute ein wertvolles industrielles Kulturerbe. Forssa dient als regionales Zentrum in der fruchtbaren Region Kanta-Häme.",
      hu: "Forssa iparváros Finnország délnyugati részén, melynek fejlődése szorosan összefügg a textiliparral. A város egy 1847-ben alapított pamutfonoda köré épült, és ma is értékes ipari örökséget őriz. Forssa regionális központként szolgál a termékeny Kanta-Häme régióban.",
      ro: "Forssa este un oraș industrial în sud-vestul Finlandei, a cărui dezvoltare este strâns legată de industria textilă. Orașul s-a format în jurul unei filaturi de bumbac fondate în 1847 și păstrează astăzi un patrimoniu industrial valoros. Forssa servește ca centru regional în regiunea fertilă Kanta-Häme.",
      en: "Forssa is an industrial city in southwestern Finland, whose development is closely linked to the textile industry. The city grew around a cotton mill founded in 1847 and today preserves a valuable industrial heritage. Forssa serves as a regional center in the fertile Kanta-Häme region.",
    },
    factsAdvanced: {
      de: ["Gegründet 1847 durch Axel Wilhelm Wahren", "Das Forssa-Museum befindet sich in der alten Spinnerei", "Bekannt für die Oldtimer-Veranstaltung Forssa Pick-Nick", "Liegt am Ufer des Flusses Loimijoki", "Zentrum der finnischen Lebensmittelindustrie", "Erfolgreicher Basketballverein Forssan Alku"],
      hu: ["1847-ben alapította Axel Wilhelm Wahren", "A Forssa Múzeum a régi fonoda épületében működik", "Híres a Forssa Pick-Nick veteránautós találkozóról", "A Loimijoki folyó partján fekszik", "A finn élelmiszeripar egyik központja", "Sikeres kosárlabdacsapata a Forssan Alku"],
      ro: ["Fondat în 1847 de Axel Wilhelm Wahren", "Muzeul Forssa se află în clădirea vechii filaturi", "Cunoscut pentru evenimentul auto retro Forssa Pick-Nick", "Situat pe malul râului Loimijoki", "Centru al industriei alimentare finlandeze", "Echipa de baschet de succes Forssan Alku"],
      en: ["Founded in 1847 by Axel Wilhelm Wahren", "The Forssa Museum is located in the old spinning mill", "Famous for the Forssa Pick-Nick classic car event", "Located on the banks of the Loimijoki River", "A center for the Finnish food industry", "Home to the successful basketball club Forssan Alku"],
    },
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
    descriptionAdvanced: {
      de: "Riihimäki ist ein bedeutender Eisenbahnknotenpunkt im Süden Finnlands, etwa 70 Kilometer nördlich von Helsinki. Die Stadt entwickelte sich rasant nach der Eröffnung der Bahnstrecke im Jahr 1862 und beherbergt heute spezialisierte Museen. Riihimäki ist zudem als Standort der finnischen Glasindustrie und des Militärs bekannt.",
      hu: "Riihimäki fontos vasúti csomópont Finnország déli részén, körülbelül 70 kilométerre északra Helsinkitől. A város gyors fejlődésnek indult a vasútvonal 1862-es megnyitása után, és ma specializált múzeumoknak ad otthont. Riihimäki emellett a finn üvegipar és a honvédség egyik bázisaként ismert.",
      ro: "Riihimäki este un nod feroviar important în sudul Finlandei, la aproximativ 70 de kilometri nord de Helsinki. Orașul s-a dezvoltat rapid după deschiderea căii ferate în 1862 și găzduiește astăzi muzee specializate. Riihimäki este, de asemenea, cunoscut ca locație pentru industria sticlei și pentru armata finlandeză.",
      en: "Riihimäki is a major railway junction in southern Finland, about 70 kilometers north of Helsinki. The city developed rapidly after the opening of the railway line in 1862 and today houses specialized museums. Riihimäki is also known as a site for the Finnish glass industry and the military.",
    },
    factsAdvanced: {
      de: ["Wichtiger Bahnknotenpunkt seit 1862", "Beherbergt das Finnische Glasmuseum", "Sitz des Finnischen Jagdmuseums", "Das Gefängnis von Riihimäki wurde 1929 erbaut", "Einwohnerzahl liegt bei ca. 28.000 Personen", "Standort der finnischen Fernmeldetruppen"],
      hu: ["1862 óta kiemelt vasúti csomópont", "Itt található a Finn Üvegmúzeum", "A Finn Vadászati Múzeum székhelye", "A riihimäki börtön 1929-ben épült", "Lakossága körülbelül 28 000 fő", "A finn híradástechnikai csapatok állomáshelye"],
      ro: ["Nod feroviar vital din anul 1862", "Găzduiește Muzeul Finlandez al Sticlei", "Sediul Muzeului Finlandez al Vânătorii", "Închisoarea din Riihimäki a fost construită în 1929", "Populația este de aproximativ 28.000 de locuitori", "Locație pentru trupele de transmisiuni ale Finlandei"],
      en: ["Major railway hub since 1862", "Home to the Finnish Glass Museum", "Seat of the Finnish Hunting Museum", "Riihimäki Prison was built in 1929", "Population is approximately 28,000 people", "Station for the Finnish signal corps"],
    },
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
    descriptionAdvanced: {
      de: "Valkeakoski liegt in der Region Pirkanmaa und ist historisch eng mit der Papier- und Zellstoffindustrie verbunden. Die Stadt befindet sich an einer strategischen Wasserstraße zwischen den Seen Mallasvesi und Vanajavesi. Neben der Industrie ist Valkeakoski als bedeutende Sportstadt, insbesondere für den Fußball, bekannt.",
      hu: "Valkeakoski a Pirkanmaa régióban fekszik, és történelmileg szorosan kapcsolódik a papír- és cellulóziparhoz. A város stratégiai vízi útvonal mentén, a Mallasvesi és Vanajavesi tavak között helyezkedik el. Az ipar mellett Valkeakoski jelentős sportvárosként, különösen labdarúgásáról ismert.",
      ro: "Valkeakoski se află în regiunea Pirkanmaa și este istoric strâns legat de industria hârtiei și a celulozei. Orașul este situat pe o cale navigabilă strategică între lacurile Mallasvesi și Vanajavesi. Pe lângă industrie, Valkeakoski este cunoscut ca un oraș sportiv important, în special pentru fotbal.",
      en: "Valkeakoski is located in the Pirkanmaa region and is historically closely linked to the paper and pulp industry. The city is situated on a strategic waterway between lakes Mallasvesi and Vanajavesi. Besides industry, Valkeakoski is known as a significant sports city, especially for football.",
    },
    factsAdvanced: {
      de: ["Zentrum der Papierindustrie seit den 1870er Jahren", "Heimat des Fußballvereins FC Haka", "Das Myllysaari-Museum zeigt die Industriegeschichte", "Sitz des Künstlers Emil Wikström (Visavuori)", "Wurde 1923 als eigenständige Gemeinde gegründet", "Liegt am künstlich angelegten Kanal von Valkeakoski"],
      hu: ["Az 1870-es évek óta a papíripar központja", "Az FC Haka labdarúgócsapat otthona", "A Myllysaari Múzeum mutatja be az ipartörténetet", "Itt található Emil Wikström műterme (Visavuori)", "1923-ban vált önálló községgé", "A mesterséges Valkeakoski-csatorna mellett fekszik"],
      ro: ["Centru al industriei hârtiei din anii 1870", "Casa clubului de fotbal FC Haka", "Muzeul Myllysaari prezintă istoria industrială", "Locația atelierului artistului Emil Wikström (Visavuori)", "Fondat ca municipalitate independentă în 1923", "Situat pe canalul artificial Valkeakoski"],
      en: ["Center of the paper industry since the 1870s", "Home of the FC Haka football club", "The Myllysaari Museum displays industrial history", "Site of artist Emil Wikström's home (Visavuori)", "Established as an independent municipality in 1923", "Located on the man-made Valkeakoski canal"],
    },
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
    descriptionAdvanced: {
      de: "Heinola ist eine charmante Kleinstadt in der Region Päijät-Häme, die für ihre Parks und historischen Holzgebäude bekannt ist. Die Stadt wurde 1776 als Verwaltungszentrum gegründet und entwickelte sich später zu einem beliebten Kurort. Heute ist Heinola ein Tor zum Seengebiet und berühmt für seinen einzigartigen Vogelgarten.",
      hu: "Heinola egy bájos kisváros a Päijät-Häme régióban, amely parkjairól és történelmi faépületeiről ismert. A várost 1776-ban alapították közigazgatási központként, majd később népszerű üdülőhellyé fejlődött. Ma Heinola a tóvidék kapuja, és egyedülálló madárkertjéről híres.",
      ro: "Heinola este un oraș mic și fermecător din regiunea Päijät-Häme, cunoscut pentru parcurile sale și clădirile istorice din lemn. Orașul a fost fondat în 1776 ca centru administrativ și s-a dezvoltat ulterior ca o stațiune populară. Astăzi, Heinola este o poartă către zona lacurilor și este renumit pentru grădina sa de păsări.",
      en: "Heinola is a charming small town in the Päijät-Häme region, known for its parks and historical wooden buildings. Founded in 1776 as an administrative center, the town later developed into a popular spa resort. Today, Heinola is a gateway to the Lake District and famous for its unique bird garden.",
    },
    factsAdvanced: {
      de: ["Gegründet 1776 durch König Gustav III. von Schweden", "Beherbergt den Heinola-Vogelgarten (Lintutarha)", "Ehemaliges Zentrum für Lehrerbildung im 19. Jahrhundert", "Liegt am Ufer des Sees Ruotsalainen", "Bekannt für den hölzernen Heinola-Turm", "Einwohnerzahl beträgt etwa 18.000 Personen"],
      hu: ["III. Gusztáv svéd király alapította 1776-ban", "Itt található a Heinolai Madárkert (Lintutarha)", "A 19. században fontos tanárképző központ volt", "A Ruotsalainen-tó partján fekszik", "Híres a fából készült kilátótornyáról", "Lakossága körülbelül 18 000 fő"],
      ro: ["Fondat în 1776 de regele Gustav al III-lea al Suediei", "Găzduiește Grădina de Păsări Heinola (Lintutarha)", "Fost centru de formare a profesorilor în secolul al XIX-lea", "Situat pe malul lacului Ruotsalainen", "Cunoscut pentru turnul de observație din lemn", "Populația este de aproximativ 18.000 de locuitori"],
      en: ["Founded in 1776 by King Gustav III of Sweden", "Home to the Heinola Bird Garden (Lintutarha)", "Former center for teacher education in the 19th century", "Located on the shores of Lake Ruotsalainen", "Known for the wooden Heinola observation tower", "Population is approximately 18,000 people"],
    },
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
    descriptionAdvanced: {
      de: "Mikkeli ist das administrative Zentrum der Region Südsavo und liegt am Ufer des Saimaa-Seensystems. Die Stadt hat eine herausragende militärhistorische Bedeutung, da sie während der Kriege im 20. Jahrhundert als Hauptquartier der finnischen Armee diente. Mikkeli ist zudem für seine Kathedrale und den regionalen Handel bekannt.",
      hu: "Mikkeli Dél-Savo régió közigazgatási központja, a Saimaa-tórendszer partján fekszik. A város kiemelkedő hadtörténeti jelentőséggel bír, mivel a 20. századi háborúk idején a finn hadsereg főhadiszállásaként szolgált. Mikkeli emellett székesegyházáról és regionális kereskedelméről ismert.",
      ro: "Mikkeli este centrul administrativ al regiunii Savo de Sud, situat pe malul sistemului de lacuri Saimaa. Orașul are o importanță istorică militară remarcabilă, servind drept cartier general al armatei finlandeze în timpul războaielor din secolul XX. Mikkeli este, de asemenea, cunoscut pentru catedrala sa și comerțul regional.",
      en: "Mikkeli is the administrative center of the Southern Savonia region, located on the shores of the Saimaa lake system. The city has outstanding military-historical significance, as it served as the headquarters of the Finnish Army during the wars of the 20th century. Mikkeli is also known for its cathedral and regional trade.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1838 durch Nikolaus I.", "Benannt nach dem Erzengel Michael", "Hauptquartier der finnischen Armee im Zweiten Weltkrieg", "Beherbergt das Finnische Infanteriemuseum", "Die Kathedrale von Mikkeli wurde 1897 fertiggestellt", "Kenkävero ist das größte historische Pfarrhaus Finnlands"],
      hu: ["1838-ban alapította I. Miklós cár", "Szent Mihály arkangyalról kapta a nevét", "A finn hadsereg főhadiszállása a második világháborúban", "Itt található a Finn Gyalogsági Múzeum", "A mikkeli székesegyház 1897-ben készült el", "A Kenkävero Finnország legnagyobb történelmi parókiája"],
      ro: ["Fondat în 1838 de țarul Nicolae I", "Numit după Arhanghelul Mihail", "Cartierul general al armatei finlandeze în Al Doilea Război Mondial", "Găzduiește Muzeul Infanteriei Finlandeze", "Catedrala din Mikkeli a fost finalizată în 1897", "Kenkävero este cea mai mare parohie istorică din Finlanda"],
      en: ["Founded in 1838 by Tsar Nicholas I", "Named after the Archangel Michael", "Headquarters of the Finnish Army in World War II", "Home to the Finnish Infantry Museum", "Mikkeli Cathedral was completed in 1897", "Kenkävero is the largest historical vicarage in Finland"],
    },
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
    descriptionAdvanced: {
      de: "Iisalmi liegt in der Region Nordsavo und ist ein wichtiges kulturelles und wirtschaftliches Zentrum. Die Stadt ist für ihre starke Brauereitradition und die umgebende Natur mit dem See Porovesi bekannt. Iisalmi beherbergt zudem kuriose Sehenswürdigkeiten wie die kleinste Kirche der Welt und pflegt ein reiches literarisches Erbe.",
      hu: "Iisalmi Észak-Savo régióban található, fontos kulturális és gazdasági központ. A város erős sörfőzési hagyományairól és a környező természetről, többek között a Porovesi-tóról ismert. Iisalmi olyan különleges látnivalóknak is otthont ad, mint a világ legkisebb temploma, és gazdag irodalmi örökséget ápol.",
      ro: "Iisalmi este situat în regiunea Savo de Nord și este un centru cultural și economic important. Orașul este cunoscut pentru tradiția sa puternică în fabricarea berii și natura înconjurătoare, inclusiv lacul Porovesi. Iisalmi găzduiește, de asemenea, atracții curioase, cum ar fi cea mai mică biserică din lume, și păstrează un bogat patrimoniu literar.",
      en: "Iisalmi is located in the Northern Savonia region and is an important cultural and economic center. The city is known for its strong brewing tradition and the surrounding nature, including Lake Porovesi. Iisalmi also houses curious sights such as the smallest church in the world and maintains a rich literary heritage.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1891", "Die Olvi-Brauerei wurde hier 1878 gegründet", "Beherbergt die St.-Demetrius-Kirche (kleinste der Welt)", "Sitz des Juhani-Aho-Museums (bekannter Autor)", "Einwohnerzahl beträgt etwa 20.000 Personen", "Liegt am Knotenpunkt wichtiger Wasserstraßen"],
      hu: ["1891-ben alapították", "Az Olvi sörfőzdét 1878-ban itt alapították", "Itt található a Szent Demeter-templom (a világ legkisebbje)", "A Juhani Aho Múzeum székhelye", "Lakossága körülbelül 20 000 fő", "Fontos vízi utak találkozásánál fekszik"],
      ro: ["Fondat în anul 1891", "Fabrica de bere Olvi a fost fondată aici în 1878", "Găzduiește biserica Sf. Dimitrie (cea mai mică din lume)", "Sediul Muzeului Juhani Aho (scriitor celebru)", "Populația este de aproximativ 20.000 de locuitori", "Situat la intersecția unor căi navigabile importante"],
      en: ["Founded in 1891", "The Olvi Brewery was founded here in 1878", "Home to St. Demetrius Church (smallest in the world)", "Site of the Juhani Aho Museum (famous author)", "Population is approximately 20,000 people", "Located at the junction of important waterways"],
    },
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
    descriptionAdvanced: {
      de: "Varkaus ist eine Industriestadt in Nordsavo, die auf einer Landenge zwischen zwei Teilen des Saimaa-Seensystems liegt. Die Stadt wurde maßgeblich durch die Metall- und Holzindustrie geprägt, was sich in der Architektur und den zahlreichen Kanälen widerspiegelt. Varkaus bietet zudem einzigartige kulturelle Attraktionen wie das Museum für mechanische Musik.",
      hu: "Varkaus iparváros Észak-Savo régióban, amely a Saimaa-tórendszer két része közötti földszoroson fekszik. A várost jelentősen meghatározta a fém- és faipar, ami az építészetben és a számos csatornában is tükröződik. Varkaus egyedülálló kulturális látnivalókat is kínál, mint például a Mechanikus Zenei Múzeum.",
      ro: "Varkaus este un oraș industrial în Savo de Nord, situat pe un ism între două părți ale sistemului de lacuri Saimaa. Orașul a fost modelat semnificativ de industria metalurgică și a lemnului, ceea ce se reflectă în arhitectură și în numeroasele canale. Varkaus oferă, de asemenea, atracții culturale unice, cum ar fi Muzeul Muzicii Mecanice.",
      en: "Varkaus is an industrial city in Northern Savonia, located on an isthmus between two parts of the Saimaa lake system. The city was significantly shaped by the metal and wood industries, reflected in its architecture and numerous canals. Varkaus also offers unique cultural attractions such as the Museum of Mechanical Music.",
    },
    factsAdvanced: {
      de: ["Gegründet 1929 als eigenständige Gemeinde", "Beherbergt das Museum für Mechanische Musik", "Wichtiger Standort der Ahlström-Industrie", "Liegt am historischen Taipale-Kanal", "Die Taulumäki-Kirche ist ein Wahrzeichen der Stadt", "Zentrum für Schiffbau und Zellstoffproduktion"],
      hu: ["1929-ben vált önálló községgé", "Itt található a Mechanikus Zenei Múzeum", "Az Ahlström iparvállalat fontos központja", "A történelmi Taipale-csatorna mellett fekszik", "A Taulumäki-templom a város egyik jelképe", "Hajógyártási és cellulóztermelési központ"],
      ro: ["Fondat în 1929 ca municipalitate independentă", "Găzduiește Muzeul Muzicii Mecanice", "Centru important al industriei Ahlström", "Situat pe canalul istoric Taipale", "Biserica Taulumäki este un simbol al orașului", "Centru pentru construcții navale și producția de celuloză"],
      en: ["Established in 1929 as an independent municipality", "Home to the Museum of Mechanical Music", "Important site for the Ahlström industries", "Located by the historical Taipale Canal", "Taulumäki Church is a landmark of the city", "Center for shipbuilding and pulp production"],
    },
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
    descriptionAdvanced: {
      de: "Imatra ist eine Industriestadt im Südosten Finnlands, nahe der russischen Grenze. Berühmt ist die Stadt vor allem für die Imatrankoski-Stromschnellen, die seit Jahrhunderten Touristen anziehen und heute zur Stromerzeugung genutzt werden. Die Architektur von Imatra verbindet kühne Industriebauten mit historischem Charme, wie dem staatlichen Hotel im Jugendstil.",
      hu: "Imatra iparváros Finnország délkeleti részén, az orosz határ közelében. A város leginkább az Imatrankoski-zúgókról híres, amelyek évszázadok óta vonzzák a turistákat, ma pedig áramtermelésre használják őket. Imatra építészete a bátor ipari épületeket ötvözi a történelmi bájjal, mint például a szecessziós Állami Szálló.",
      ro: "Imatra este un oraș industrial în sud-estul Finlandei, aproape de granița cu Rusia. Orașul este renumit în special pentru cataractele Imatrankoski, care atrag turiști de secole și sunt folosite astăzi pentru producerea de energie electrică. Arhitectura din Imatra combină clădiri industriale îndrăznețe cu farmecul istoric, cum ar fi Hotelul de Stat în stil Art Nouveau.",
      en: "Imatra is an industrial city in southeastern Finland, near the Russian border. The city is most famous for the Imatrankoski rapids, which have attracted tourists for centuries and are now used for power generation. Imatra's architecture combines bold industrial buildings with historical charm, such as the Art Nouveau State Hotel.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1948", "Bekannt für die Imatrankoski-Stromschnellen", "Das Imatran Valtionhotelli wurde 1903 erbaut", "Sitz der ersten finnischen Industriegemeinde", "Liegt am Fluss Vuoksi nahe der Grenze zu Russland", "Wichtiger Standort der Papier- und Zellstoffindustrie"],
      hu: ["1948-ban alapították", "Híres az Imatrankoski-zúgókról", "Az Imatran Valtionhotelli 1903-ban épült", "Finnország első ipari településének székhelye", "A Vuoksi folyó partján, az orosz határ közelében fekszik", "A papír- és cellulózipar kiemelt központja"],
      ro: ["Fondat în anul 1948", "Cunoscut pentru cataractele Imatrankoski", "Imatran Valtionhotelli a fost construit în 1903", "Sediul primei municipalități industriale din Finlanda", "Situat pe râul Vuoksi, lângă granița cu Rusia", "Centru important al industriei hârtiei și celulozei"],
      en: ["Founded in 1948", "Famous for the Imatrankoski rapids", "The Imatran Valtionhotelli was built in 1903", "Site of the first industrial town in Finland", "Located on the Vuoksi River near the Russian border", "Major hub for the paper and pulp industry"],
    },
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
    descriptionAdvanced: {
      de: "Nurmes liegt am nördlichen Ende des Pielinen-Sees in Nordkarelien und ist für seine reiche karelische Kultur bekannt. Die Stadt wird oft als „Stadt der Birken“ bezeichnet und ist ein bedeutendes Zentrum für Holzverarbeitung und Handwerk. Nurmes beherbergt das Bomba-Haus, ein beeindruckendes Beispiel traditioneller karelischer Architektur.",
      hu: "Nurmes a Pielinen-tó északi végén, Észak-Karéliában található, és gazdag karéliai kultúrájáról ismert. A várost gyakran a „nyírfák városának” nevezik, és a fafeldolgozás és a kézművesség jelentős központja. Nurmes ad otthont a Bomba-háznak, amely a hagyományos karéliai építészet lenyűgöző példája.",
      ro: "Nurmes este situat la capătul nordic al lacului Pielinen în Karelia de Nord și este cunoscut pentru cultura sa kareliană bogată. Orașul este adesea numit „orașul mesteacănului” și este un centru important pentru prelucrarea lemnului și meșteșuguri. Nurmes găzduiește Casa Bomba, un exemplu impresionant de arhitectură kareliană tradițională.",
      en: "Nurmes is located at the northern end of Lake Pielinen in North Karelia and is known for its rich Karelian culture. Often called the 'town of birches,' it is a major center for woodworking and crafts. Nurmes is home to the Bomba House, an impressive example of traditional Karelian architecture.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1810", "Bekannt als offizielle Weihnachtsstadt Finnlands", "Beherbergt das karelische Dorf Bomba", "Liegt am Ufer des großen Sees Pielinen", "Hunderte von Birken prägen das Stadtbild", "Einwohnerzahl liegt bei ca. 7.000 Personen"],
      hu: ["1810-ben alapították", "Finnország hivatalos karácsonyi városaként ismert", "Itt található a Bomba karéliai falu", "A hatalmas Pielinen-tó partján fekszik", "Több száz nyírfa határozza meg a városképet", "Lakossága körülbelül 7000 fő"],
      ro: ["Fondat în anul 1810", "Cunoscut ca orașul oficial al Crăciunului din Finlanda", "Găzduiește satul karelian Bomba", "Situat pe malul marelui lac Pielinen", "Sute de mesteceni definesc peisajul urban", "Populația este de aproximativ 7.000 de locuitori"],
      en: ["Founded in 1810", "Known as the official Christmas City of Finland", "Home to the Bomba Karelian village", "Located on the shores of the large Lake Pielinen", "Hundreds of birch trees characterize the cityscape", "Population is approximately 7,000 people"],
    },
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
    descriptionAdvanced: {
      de: "Linnanmäki ist der älteste und beliebteste Vergnügungspark Finnlands und befindet sich im Herzen von Helsinki. Der 1950 eröffnete Park wird von einer gemeinnützigen Stiftung betrieben, deren Erlöse der Kinderwohlfahrt zugutekommen. Wahrzeichen des Parks ist die historische Holzachterbahn, die seit 1951 in Betrieb ist.",
      hu: "Linnanmäki Finnország legrégebbi és legnépszerűbb vidámparkja, Helsinki szívében található. Az 1950-ben megnyitott parkot egy nonprofit alapítvány üzemelteti, amelynek bevételeit gyermekjóléti célokra fordítják. A park jelképe a történelmi fa hullámvasút, amely 1951 óta üzemel.",
      ro: "Linnanmäki este cel mai vechi și cel mai popular parc de distracții din Finlanda, situat în inima Helsinki-ului. Deschis în 1950, parcul este administrat de o fundație nonprofit, ale cărei încasări sunt folosite pentru bunăstarea copiilor. Simbolul parcului este roller coaster-ul istoric din lemn, care este în funcțiune din 1951.",
      en: "Linnanmäki is Finland's oldest and most popular amusement park, located in the heart of Helsinki. Opened in 1950, the park is operated by a non-profit foundation, with proceeds used for child welfare. The park's landmark is the historic wooden rollercoaster, which has been in operation since 1951.",
    },
    factsAdvanced: {
      de: ["Eröffnet am 27. Mai 1950", "Eigentum der Stiftung Tag des Kindes", "Die Holzachterbahn Vuoristorata stammt von 1951", "Beherbergt mehr als 40 verschiedene Fahrgeschäfte", "Das Sea Life Helsinki befindet sich auf dem Gelände", "Zählt jährlich über eine Million Besucher"],
      hu: ["1950. május 27-én nyílt meg", "A Gyermeknap Alapítvány tulajdonában van", "A Vuoristorata fa hullámvasút 1951-ben épült", "Több mint 40 különböző játéknak ad otthont", "A Sea Life Helsinki a park területén található", "Évente több mint egymillió látogatót fogad"],
      ro: ["Deschis la 27 mai 1950", "Proprietatea Fundației Ziua Copilului", "Roller coaster-ul din lemn Vuoristorata datează din 1951", "Găzduiește peste 40 de atracții diferite", "Sea Life Helsinki se află în incinta parcului", "Înregistrează anual peste un milion de vizitatori"],
      en: ["Opened on May 27, 1950", "Owned by the Children's Day Foundation", "The Vuoristorata wooden rollercoaster dates from 1951", "Home to more than 40 different rides", "Sea Life Helsinki is located on the grounds", "Attracts over one million visitors annually"],
    },
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
    descriptionAdvanced: {
      de: "Der Dom von Turku ist das bedeutendste religiöse Bauwerk Finnlands und gilt als Nationalheiligtum. Die im Jahr 1300 geweihte Kathedrale wurde über Jahrhunderte erweitert und repräsentiert verschiedene Baustile, insbesondere die Backsteingotik. Er ist die Mutterkirche der evangelisch-lutherischen Kirche Finnlands und Begräbnisstätte historischer Persönlichkeiten.",
      hu: "A turkui székesegyház Finnország legjelentősebb vallási épülete, és nemzeti szentélynek számít. Az 1300-ban felszentelt katedrálist évszázadokon át bővítették, és különböző építészeti stílusokat, különösen a tégla gótikát képviseli. Ez a finn evangélikus lutheránus egyház anyatemploma és történelmi személyiségek nyughelye.",
      ro: "Catedrala din Turku este cel mai important edificiu religios din Finlanda și este considerată un sanctuar național. Sfințită în anul 1300, catedrala a fost extinsă de-a lungul secolelor și reprezintă diverse stiluri arhitecturale, în special goticul de cărămidă. Este biserica-mamă a Bisericii Evanghelice Luterane din Finlanda și loc de înmormântare pentru personalități istorice.",
      en: "Turku Cathedral is the most significant religious building in Finland and is considered a national sanctuary. Consecrated in 1300, the cathedral was expanded over centuries and represents various architectural styles, especially Brick Gothic. It is the mother church of the Evangelical Lutheran Church of Finland and a burial place for historical figures.",
    },
    factsAdvanced: {
      de: ["Geweiht im Jahr 1300", "Einzige mittelalterliche Kathedrale in Finnland", "Der Turm hat eine Höhe von 101,9 Metern", "Begräbnisstätte von Königin Karin Månsdotter", "Wurde beim Großen Brand von Turku 1827 beschädigt", "Beherbergt ein Museum zur Kirchengeschichte"],
      hu: ["1300-ban szentelték fel", "Finnország egyetlen középkori székesegyháza", "A torony magassága 101,9 méter", "Karin Månsdotter királyné nyughelye", "Az 1827-es nagy turkui tűzvészben megsérült", "Egyházművészeti múzeumnak ad otthont"],
      ro: ["Sfințită în anul 1300", "Singura catedrală medievală din Finlanda", "Turnul are o înălțime de 101,9 metri", "Locul de înmormântare al reginei Karin Månsdotter", "A fost avariată în Marele Incendiu din Turku în 1827", "Găzduiește un muzeu de istorie bisericească"],
      en: ["Consecrated in the year 1300", "The only medieval cathedral in Finland", "The tower has a height of 101.9 meters", "Burial place of Queen Karin Månsdotter", "Damaged during the Great Fire of Turku in 1827", "Houses a museum of church history"],
    },
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
    descriptionAdvanced: {
      de: "Särkänniemi ist ein vielseitiger Freizeitpark in Tampere, der malerisch auf einer Halbinsel am See Näsijärvi liegt. Der Park bietet eine Kombination aus aufregenden Fahrgeschäften, einem Aquarium, einem Planetarium und dem berühmten Aussichtsturm Näsinneula. Er ist eines der wichtigsten Touristenziele in der Region Pirkanmaa.",
      hu: "Särkänniemi egy sokoldalú szabadidőpark Tamperében, amely festői környezetben, a Näsijärvi-tó egyik félszigetén található. A park izgalmas játékok, egy akvárium, egy planetárium és a híres Näsinneula kilátótorony kombinációját kínálja. A Pirkanmaa régió egyik legfontosabb turisztikai célpontja.",
      ro: "Särkänniemi este un parc de agrement versatil în Tampere, situat pitoresc pe o peninsulă de pe lacul Näsijärvi. Parcul oferă o combinație de atracții captivante, un acvariu, un planetariu și faimosul turn de observație Näsinneula. Este una dintre cele mai importante destinații turistice din regiunea Pirkanmaa.",
      en: "Särkänniemi is a versatile leisure park in Tampere, picturesquely located on a peninsula on Lake Näsijärvi. The park offers a combination of exciting rides, an aquarium, a planetarium, and the famous Näsinneula observation tower. It is one of the most important tourist destinations in the Pirkanmaa region.",
    },
    factsAdvanced: {
      de: ["Eröffnet im Jahr 1966", "Beherbergt den 168 Meter hohen Näsinneula-Turm", "Verfügt über ein eigenes Planetarium und Aquarium", "Heimat des Kinderbauernhofs Koiramäki", "Eigentum der Stadt Tampere", "Bietet moderne Achterbahnen wie 'Hype'"],
      hu: ["1966-ban nyitották meg", "Itt található a 168 méter magas Näsinneula-torony", "Saját planetáriummal és akváriummal rendelkezik", "A Koiramäki gyermekfarm otthona", "Tampere városának tulajdonában van", "Olyan modern hullámvasutakat kínál, mint a 'Hype'"],
      ro: ["Deschis în anul 1966", "Găzduiește turnul Näsinneula, înalt de 168 de metri", "Dispune de propriul planetariu și acvariu", "Casa fermei pentru copii Koiramäki", "Proprietatea orașului Tampere", "Oferă roller coastere moderne precum 'Hype'"],
      en: ["Opened in 1966", "Home to the 168-meter high Näsinneula tower", "Features its own planetarium and aquarium", "Home to the Doghill Fairytale Farm", "Owned by the City of Tampere", "Offers modern rollercoasters like 'Hype'"],
    },
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
    descriptionAdvanced: {
      de: "Die Festung Lappeenranta, auch als Linnoitus bekannt, ist das historische Herz der Stadt am Ufer des Saimaa-Sees. Ursprünglich im 18. Jahrhundert von Schweden erbaut und später von Russland erweitert, diente sie als strategischer Grenzposten. Heute beherbergt das Festungsgebiet Museen, Kunstgalerien und die älteste orthodoxe Kirche Finnlands.",
      hu: "A lappeenrantai erőd, más néven Linnoitus, a város történelmi szíve a Saimaa-tó partján. Eredetileg a 18. században építették a svédek, majd később az oroszok bővítették ki, stratégiai határállomásként szolgált. Ma az erőd területe múzeumoknak, művészeti galériáknak és Finnország legrégebbi ortodox templomának ad otthont.",
      ro: "Cetatea Lappeenranta, cunoscută și sub numele de Linnoitus, este inima istorică a orașului de pe malul lacului Saimaa. Construită inițial de suedezi în secolul al XVIII-lea și extinsă ulterior de ruși, a servit ca punct de frontieră strategic. Astăzi, zona cetății găzduiește muzee, galerii de artă și cea mai veche biserică ortodoxă din Finlanda.",
      en: "Lappeenranta Fortress, also known as Linnoitus, is the historical heart of the city on the shores of Lake Saimaa. Originally built by Sweden in the 18th century and later expanded by Russia, it served as a strategic border post. Today, the fortress area houses museums, art galleries, and the oldest Orthodox church in Finland.",
    },
    factsAdvanced: {
      de: ["Bau durch Schweden begann 1721", "Beherbergt die St.-Nikolaus-Kirche von 1785", "Sitz des Südkarelischen Museums", "Beherbergt das Finnische Kavalleriemuseum", "Ort der jährlichen Sandburg-Ausstellung", "Wichtiger Teil des Saimaa-Kanal-Systems"],
      hu: ["A svédek kezdték építeni 1721-ben", "Itt található az 1785-ben épült Szent Miklós-templom", "A Dél-Karéliai Múzeum székhelye", "Itt működik a Finn Lovassági Múzeum", "Az éves homokvár-kiállítás helyszíne", "A Saimaa-csatorna rendszerének fontos része"],
      ro: ["Construcția de către suedezi a început în 1721", "Găzduiește biserica Sf. Nicolae din 1785", "Sediul Muzeului Kareliei de Sud", "Găzduiește Muzeul Cavaleriei Finlandeze", "Locul expoziției anuale de castele de nisip", "Parte importantă a sistemului Canalului Saimaa"],
      en: ["Construction by Sweden began in 1721", "Home to St. Nicholas Church built in 1785", "Seat of the South Karelia Museum", "Houses the Finnish Cavalry Museum", "Site of the annual Sandcastle exhibition", "Important part of the Saimaa Canal system"],
    },
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
    descriptionAdvanced: {
      de: "Die Festung Hamina ist eine weltweit seltene sternförmige Festungsstadt an der Südostküste Finnlands. Die im 18. Jahrhundert errichtete Anlage prägt das einzigartige kreisförmige Stadtzentrum, in dem acht Straßen sternförmig vom zentralen Rathausplatz ausgehen. Die Festung war Schauplatz bedeutender historischer Verträge zwischen Schweden und Russland.",
      hu: "Hamina erődje egy világszerte ritka csillag alakú erődváros Finnország délkeleti partján. A 18. században épült erődítmény határozza meg az egyedülálló kör alakú városközpontot, ahol nyolc utca indul csillag alakban a központi városháza térről. Az erőd fontos történelmi szerződések helyszíne volt Svédország és Oroszország között.",
      ro: "Cetatea Hamina este un oraș-cetate în formă de stea, rar în lume, situat pe coasta de sud-est a Finlandei. Fortificația ridicată în secolul al XVIII-lea definește centrul circular unic al orașului, unde opt străzi pornesc în formă de stea din piața centrală a primăriei. Cetatea a fost locul unor tratate istorice importante între Suedia și Rusia.",
      en: "Hamina Fortress is a rare star-shaped fortress town on the southeastern coast of Finland. Built in the 18th century, the fortification defines the unique circular town center, where eight streets radiate in a star pattern from the central Town Hall Square. The fortress was the site of significant historical treaties between Sweden and Russia.",
    },
    factsAdvanced: {
      de: ["Sternförmige Festung aus den 1720er Jahren", "Einzigartiger kreisförmiger Stadtgrundriss", "Ort des Friedensvertrags von Fredrikshamn 1809", "Das Rathaus wurde 1798 im Zentrum erbaut", "Sitz der finnischen Reserveoffiziersschule", "Beherbergt den historischen Flaggenturm (Lipputorni)"],
      hu: ["Csillag alakú erőd az 1720-as évekből", "Egyedülálló kör alakú városszerkezet", "Az 1809-es haminai békeszerződés helyszíne", "A Városháza 1798-ban épült a központban", "A finn tartalékos tisztképző iskola székhelye", "Itt található a történelmi Zászlótorony (Lipputorni)"],
      ro: ["Cetate în formă de stea din anii 1720", "Plan circular unic al orașului", "Locul Tratatului de pace de la Fredrikshamn din 1809", "Primăria a fost construită în centru în 1798", "Sediul Școlii de Ofițeri în Rezervă din Finlanda", "Găzduiește turnul istoric al steagului (Lipputorni)"],
      en: ["Star-shaped fortress from the 1720s", "Unique circular town layout", "Site of the Treaty of Fredrikshamn in 1809", "The Town Hall was built in the center in 1798", "Home to the Finnish Reserve Officer School", "Houses the historic Flag Tower (Lipputorni)"],
    },
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
    descriptionAdvanced: {
      de: "Das Maretarium in Kotka ist ein spezialisiertes Aquarium, das sich auf die einheimischen Fischarten Finnlands konzentriert. In über 60 Becken werden die verschiedenen aquatischen Lebensräume des Landes, von kleinen Bächen bis zur Ostsee, realitätsnah dargestellt. Die Anlage dient sowohl der Umweltbildung als auch der wissenschaftlichen Forschung über die nordische Unterwasserwelt.",
      hu: "A kotkai Maretarium egy különleges akvárium, amely kizárólag Finnország őshonos halfajait mutatja be. Több mint 60 medencében láthatók az ország vízi élőhelyei, a kis erdei patakoktól kezdve egészen a Balti-tengerig. A központ fontos szerepet játszik a környezeti nevelésben és az északi vízi világ kutatásában.",
      ro: "Maretarium din Kotka este un acvariu specializat care se concentrează exclusiv pe speciile de pești nativi din Finlanda. În peste 60 de bazine sunt recreate habitatele acvatice ale țării, de la pârâuri mici până la Marea Baltică. Facilitatea servește atât educației ecologice, cât și cercetării științifice a lumii subacvatice nordice.",
      en: "The Maretarium in Kotka is a specialized aquarium focusing exclusively on Finland's native fish species. Over 60 basins recreate the country's diverse aquatic habitats, ranging from small forest streams to the Baltic Sea. The facility serves as both an environmental education center and a research hub for Nordic underwater life.",
    },
    factsAdvanced: {
      de: ["Eröffnung im Jahr 2002", "Beherbergt etwa 60 verschiedene Fischarten", "Das größte Becken fasst 500.000 Liter Wasser", "Zeigt den Lebenszyklus finnischer Gewässer", "Verfügt über ein Naturkundemuseum und Forschungslabor", "Direkt am Sapokka-Wasserpark gelegen"],
      hu: ["2002-ben nyitotta meg kapuit", "Körülbelül 60 különböző halfaj látható itt", "A legnagyobb medence 500 000 literes", "Finnország vízi ökoszisztémáit mutatja be", "Természettudományi múzeummal is rendelkezik", "A Sapokka vízipark közvetlen közelében található"],
      ro: ["Deschis oficial în anul 2002", "Găzduiește aproximativ 60 de specii de pești", "Cel mai mare bazin are 500.000 de litri", "Prezintă ecosistemele acvatice finlandeze", "Include un muzeu de științe naturale", "Situat lângă parcul acvatic Sapokka"],
      en: ["Opened to the public in 2002", "Houses approximately 60 different fish species", "The largest tank holds 500,000 liters of water", "Showcases Finnish aquatic ecosystems", "Features a natural history museum and lab", "Located adjacent to the Sapokka Water Park"],
    },
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
    descriptionAdvanced: {
      de: "Der Kallavesi ist ein bedeutender See in der Region Nordsavo im Osten Finnlands und umgibt die Stadt Kuopio. Er ist Teil des Saimaa-Seensystems und zeichnet sich durch seine zahlreichen Inseln und tiefen Buchten aus. Der See ist ein wichtiger Verkehrsweg für die Binnenschifffahrt und ein beliebtes Ziel für Freizeitaktivitäten wie Segeln und Angeln.",
      hu: "A Kallavesi egy jelentős tó Kelet-Finnországban, Észak-Szavónia régióban, amely körülöleli Kuopio városát. A tó a Saimaa-tórendszer része, és számos szigetéről, valamint mély öbleiről ismert. Fontos vízi közlekedési útvonal a belvízi hajózás számára, és népszerű célpont a vitorlázók és horgászok körében.",
      ro: "Kallavesi este un lac important din regiunea Savonia de Nord, în estul Finlandei, înconjurând orașul Kuopio. Face parte din sistemul de lacuri Saimaa și se caracterizează prin numeroasele sale insule și golfuri adânci. Lacul este o cale navigabilă vitală pentru transportul intern și o destinație populară pentru navigație și pescuit.",
      en: "Kallavesi is a major lake in the Northern Savonia region of eastern Finland, surrounding the city of Kuopio. It is part of the extensive Saimaa lake system and is characterized by its numerous islands and deep bays. The lake serves as a vital waterway for inland navigation and is a popular destination for sailing and fishing.",
    },
    factsAdvanced: {
      de: ["Fläche von etwa 472 Quadratkilometern", "Teil des zehntgrößten Seesystems Finnlands", "Maximaltiefe beträgt 75 Meter", "Beherbergt über 1.900 Inseln", "Wichtigster See der Region Nordsavo", "Anbindung an den Saimaa-Kanal"],
      hu: ["Területe körülbelül 472 négyzetkilométer", "Finnország 10. legnagyobb tórendszerének része", "Legnagyobb mélysége 75 méter", "Több mint 1900 sziget található rajta", "Észak-Szavónia régió központi tava", "Összeköttetésben áll a Saimaa-csatornával"],
      ro: ["Suprafață de aproximativ 472 km pătrați", "Parte din al 10-lea cel mai mare sistem lacustru", "Adâncimea maximă este de 75 de metri", "Găzduiește peste 1.900 de insule", "Principalul lac din regiunea Savonia de Nord", "Conectat la canalul Saimaa"],
      en: ["Surface area of approximately 472 square km", "Part of the 10th largest lake system in Finland", "Maximum depth reaches 75 meters", "Contains over 1,900 islands", "Core lake of the Northern Savonia region", "Connected to the Saimaa Canal network"],
    },
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
    descriptionAdvanced: {
      de: "Der Pielinen ist der viertgrößte See Finnlands und liegt im Nordosten der Region Nordkarelien. Er ist bekannt für seine beeindruckenden Landschaften, insbesondere den Blick vom Berg Koli auf den See, der als finnische Nationallandschaft gilt. Der See entwässert über den Pielisjoki in den Pyhäselkä und ist ein Zentrum für Holzwirtschaft und Tourismus.",
      hu: "A Pielinen Finnország negyedik legnagyobb tava, amely Észak-Karélia északkeleti részén található. Híres lenyűgöző tájairól, különösen a Koli-hegyről nyíló kilátásról, amelyet a finn nemzeti tájképnek tekintenek. A tó vize a Pielisjoki folyón keresztül a Pyhäselkä-tóba ömlik, és fontos központja a faiparnak és a turizmusnak.",
      ro: "Pielinen este al patrulea lac ca mărime din Finlanda, situat în nord-estul regiunii Carelia de Nord. Este faimos pentru peisajele sale impresionante, în special vederea de pe muntele Koli, considerat un simbol național. Lacul se varsă prin râul Pielisjoki în Pyhäselkä și este un centru pentru industria lemnului și turism.",
      en: "Pielinen is the fourth largest lake in Finland, located in the northeastern part of the North Karelia region. It is renowned for its stunning landscapes, particularly the view from Koli Hill, which is considered a Finnish national landscape. The lake drains through the Pielisjoki river into Pyhäselkä and is a hub for the timber industry and tourism.",
    },
    factsAdvanced: {
      de: ["Fläche von 894 Quadratkilometern", "Viertgrößter See des Landes", "Mittlere Tiefe von etwa 10 Metern", "Beherbergt rund 1.250 Inseln", "Die Insel Paalasmaa ist die höchste bewohnte Insel", "Wichtig für den Flößereibetrieb in der Vergangenheit"],
      hu: ["Területe 894 négyzetkilométer", "Az ország negyedik legnagyobb tava", "Átlagos mélysége körülbelül 10 méter", "Körülbelül 1250 sziget található rajta", "Paalasmaa a legmagasabb lakott szigete", "A múltban fontos volt a faúsztatás szempontjából"],
      ro: ["Suprafață de 894 km pătrați", "Al patrulea lac ca mărime din țară", "Adâncime medie de aproximativ 10 metri", "Conține circa 1.250 de insule", "Insula Paalasmaa este cea mai înaltă insulă locuită", "Istoric important pentru transportul buștenilor"],
      en: ["Surface area of 894 square km", "Finland's fourth largest lake", "Average depth of approximately 10 meters", "Contains around 1,250 islands", "Paalasmaa is the highest inhabited island", "Historically significant for timber rafting"],
    },
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
    descriptionAdvanced: {
      de: "Das Alvar Aalto Museum in Jyväskylä ist dem Leben und Werk des weltberühmten finnischen Architekten gewidmet. Das Museumsgebäude selbst wurde 1973 von Aalto entworfen und ist ein hervorragendes Beispiel für seinen funktionalistischen Stil. Die Ausstellungen präsentieren Originalzeichnungen, Möbelentwürfe und Glasobjekte, die Aaltos Einfluss auf das moderne Design weltweit dokumentieren.",
      hu: "A jyväskyläi Alvar Aalto Múzeum a világhírű finn építész életének és munkásságának állít emléket. Magát a múzeumépületet Aalto tervezte 1973-ban, és a funkcionalista stílusának kiváló példája. A kiállítások eredeti rajzokat, bútorterveket és üvegtárgyakat mutatnak be, dokumentálva Aalto hatását a modern világdesignra.",
      ro: "Muzeul Alvar Aalto din Jyväskylä este dedicat vieții și operei celebrului arhitect finlandez. Clădirea muzeului a fost proiectată chiar de Aalto în 1973 și reprezintă un exemplu remarcabil al stilului său funcționalist. Expozițiile prezintă desene originale, design de mobilier și obiecte din sticlă, documentând influența lui Aalto asupra designului modern.",
      en: "The Alvar Aalto Museum in Jyväskylä is dedicated to the life and work of the world-renowned Finnish architect. The museum building itself was designed by Aalto in 1973 and serves as an excellent example of his functionalist style. Exhibits feature original drawings, furniture designs, and glassware, documenting Aalto's profound influence on modern global design.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1966", "Aktuelles Gebäude wurde 1973 fertiggestellt", "Beherbergt über 1.500 Architekturzeichnungen", "Spezialisiert auf modernes finnisches Design", "Gehört zur Alvar Aalto Stiftung", "Zusammengelegt mit dem Museum für Mittelfinnland"],
      hu: ["1966-ban alapították", "A jelenlegi épület 1973-ban készült el", "Több mint 1500 építészeti rajzot őriz", "A modern finn designra specializálódott", "Az Alvar Aalto Alapítvány kezeli", "Összeköttetésben áll Közép-Finnország Múzeumával"],
      ro: ["Fondat în anul 1966", "Clădirea actuală a fost finalizată în 1973", "Găzduiește peste 1.500 de desene de arhitectură", "Specializat în design modern finlandez", "Administrat de Fundația Alvar Aalto", "Unit cu Muzeul Finlandei Centrale"],
      en: ["Founded in 1966", "The current building was completed in 1973", "Houses over 1,500 architectural drawings", "Specializes in modern Finnish design", "Managed by the Alvar Aalto Foundation", "Linked with the Museum of Central Finland"],
    },
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
    descriptionAdvanced: {
      de: "Der Päijänne ist der zweitgrößte See Finnlands und der tiefste des Landes. Er erstreckt sich über 120 Kilometer von Lahti im Süden bis Jyväskylä im Norden. Der See spielt eine kritische Rolle für die nationale Infrastruktur, da er über den Päijänne-Tunnel die gesamte Metropolregion Helsinki mit Trinkwasser versorgt.",
      hu: "A Päijänne Finnország második legnagyobb és legmélyebb tava. 120 kilométer hosszan nyúlik el a déli Lahtitól az északi Jyväskyläig. A tó kritikus szerepet játszik az ország infrastruktúrájában, mivel a Päijänne-alagúton keresztül ez látja el ivóvízzel a teljes helsinki metropolisz területét.",
      ro: "Päijänne este al doilea lac ca mărime din Finlanda și cel mai adânc din țară. Se întinde pe 120 de kilometri de la Lahti în sud până la Jyväskylä în nord. Lacul joacă un rol critic în infrastructura națională, furnizând apă potabilă întregii zone metropolitane Helsinki prin tunelul Päijänne.",
      en: "Lake Päijänne is the second largest and the deepest lake in Finland. It stretches 120 kilometers from Lahti in the south to Jyväskylä in the north. The lake plays a critical role in the nation's infrastructure, as it supplies drinking water to the entire Helsinki metropolitan area via the massive Päijänne Water Tunnel.",
    },
    factsAdvanced: {
      de: ["Maximaltiefe von 95 Metern", "Fläche von 1.080 Quadratkilometern", "Päijänne-Tunnel ist 120 km lang", "Beinhaltet den Päijänne-Nationalpark", "Wasserspiegel liegt 78 Meter über dem Meer", "Umfasst über 1.800 Inseln"],
      hu: ["Maximális mélysége 95 méter", "Területe 1080 négyzetkilométer", "A Päijänne-alagút hossza 120 km", "Magában foglalja a Päijänne Nemzeti Parkot", "Vízszintje 78 méterrel van a tengerszint felett", "Több mint 1800 szigetet tartalmaz"],
      ro: ["Adâncime maximă de 95 de metri", "Suprafață de 1.080 km pătrați", "Tunelul Päijänne are 120 km lungime", "Include Parcul Național Päijänne", "Nivelul apei este la 78 m deasupra mării", "Conține peste 1.800 de insule"],
      en: ["Maximum depth of 95 meters", "Surface area of 1,080 square km", "Päijänne Tunnel is 120 km long", "Home to the Päijänne National Park", "Water level is 78 meters above sea level", "Contains more than 1,800 islands"],
    },
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
    descriptionAdvanced: {
      de: "Atria in Seinäjoki ist einer der größten und modernsten Fleischverarbeitungsbetriebe in Nordeuropa. Als Hauptsitz des börsennotierten Unternehmens Atria Oyj ist der Standort ein zentraler Pfeiler der finnischen Lebensmittelindustrie. Die Fabrik ist bekannt für ihre hohen Standards in der Lebensmittelsicherheit und ihre enge Zusammenarbeit mit lokalen landwirtschaftlichen Erzeugern.",
      hu: "A seinäjoki Atria Észak-Európa egyik legnagyobb és legmodernebb húsfeldolgozó üzeme. Az Atria Oyj tőzsdén jegyzett vállalat székhelyeként a telephely a finn élelmiszeripar központi pillére. A gyár híres a magas élelmiszerbiztonsági szabványairól és a helyi mezőgazdasági termelőkkel való szoros együttműködéséről.",
      ro: "Atria din Seinäjoki este una dintre cele mai mari și moderne unități de procesare a cărnii din Europa de Nord. Fiind sediul central al companiei listate Atria Oyj, locația este un pilon central al industriei alimentare finlandeze. Fabrica este cunoscută pentru standardele înalte de siguranță alimentară și cooperarea strânsă cu producătorii locali.",
      en: "Atria in Seinäjoki is one of the largest and most modern meat processing plants in Northern Europe. Serving as the headquarters for the publicly listed company Atria Oyj, the site is a central pillar of the Finnish food industry. The facility is renowned for its high food safety standards and close cooperation with local agricultural producers.",
    },
    factsAdvanced: {
      de: ["Unternehmen wurde 1903 gegründet", "Einer der größten Arbeitgeber in Seinäjoki", "Verarbeitet Fleisch von über 4.000 Farmen", "Exportiert Produkte in über 30 Länder", "Investition in eine neue Fabrik 2024 abgeschlossen", "Führend in der Rückverfolgbarkeit von Fleisch"],
      hu: ["A vállalatot 1903-ban alapították", "Seinäjoki egyik legnagyobb munkaadója", "Több mint 4000 gazdaságból dolgoz fel húst", "Több mint 30 országba exportál", "2024-ben fejezték be az új gyárberuházást", "Vezető szerepet tölt be a hús nyomonkövethetőségében"],
      ro: ["Compania a fost fondată în 1903", "Unul dintre cei mai mari angajatori din Seinäjoki", "Procesează carne de la peste 4.000 de ferme", "Exportă produse în peste 30 de țări", "Investiție în fabrică nouă finalizată în 2024", "Lider în trasabilitatea produselor din carne"],
      en: ["Company founded in 1903", "One of the largest employers in Seinäjoki", "Processes meat from over 4,000 farms", "Exports products to more than 30 countries", "New factory investment completed in 2024", "Leader in meat product traceability"],
    },
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
    descriptionAdvanced: {
      de: "Die landwirtschaftlichen Ebenen von Kauhava in Südösterbotten sind das Herz der finnischen Kartoffelproduktion. Die flache Topographie und der fruchtbare Boden bieten ideale Bedingungen für den großflächigen Anbau verschiedener Kartoffelsorten. Die Region ist geprägt von traditionellen Bauernhöfen, die moderne Agrartechnik nutzen, um das ganze Land zu versorgen.",
      hu: "A dél-pohjanmaai Kauhava mezőgazdasági síkságai a finn burgonyatermesztés szívét jelentik. A sík domborzat és a termékeny talaj ideális feltételeket biztosít a különböző burgonyafajták nagyüzemi termesztéséhez. A régiót hagyományos farmok jellemzik, amelyek modern agrártechnológiát alkalmaznak az ország ellátására.",
      ro: "Câmpiile agricole din Kauhava, în Ostrobotnia de Sud, reprezintă inima producției de cartofi din Finlanda. Topografia plană și solul fertil oferă condiții ideale pentru cultivarea pe scară largă a diverselor soiuri de cartofi. Regiunea este marcată de ferme tradiționale care utilizează tehnologie agricolă modernă pentru a aproviziona țara.",
      en: "The agricultural plains of Kauhava in Southern Ostrobothnia are the heartland of Finnish potato production. The flat topography and fertile soil provide ideal conditions for the large-scale cultivation of various potato varieties. The region is characterized by traditional farms utilizing modern agricultural technology to supply the entire nation.",
    },
    factsAdvanced: {
      de: ["Produziert einen Großteil der finnischen Speisekartoffeln", "Südösterbotten ist Finnlands wichtigste Agrarregion", "Bekannt für die Sorte 'Lapuan Peruna'", "Erntezeit beginnt meist im August", "Spezialisierung auf Saatgutkartoffeln", "Hoher Grad an Mechanisierung in der Region"],
      hu: ["A finn étkezési burgonya nagy részét itt termelik", "Dél-Pohjanmaa Finnország legfontosabb agrárrégiója", "Híres a 'Lapuan Peruna' fajtáról", "A betakarítás általában augusztusban kezdődik", "Vetőburgonya-termesztésre is szakosodtak", "Magas fokú gépesítettség jellemzi a régiót"],
      ro: ["Produce majoritatea cartofilor de consum din Finlanda", "Ostrobotnia de Sud este cea mai importantă regiune agrară", "Cunoscută pentru varietatea 'Lapuan Peruna'", "Recoltarea începe de obicei în august", "Specializare în cartofi pentru sămânță", "Grad ridicat de mecanizare în regiune"],
      en: ["Produces a majority of Finland's table potatoes", "Southern Ostrobothnia is Finland's top ag region", "Known for the 'Lapuan Peruna' variety", "Harvest season typically begins in August", "Specializes in seed potato production", "High level of mechanization in the area"],
    },
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
    descriptionAdvanced: {
      de: "Der EnergyVaasa Hub ist das führende Energie-Cluster in den nordischen Ländern und hat seinen Sitz in Vaasa. Über 160 Unternehmen arbeiten hier an Innovationen in der Energietechnik, insbesondere in den Bereichen Smart Grids und Schiffsmotoren. Große globale Akteure wie Wärtsilä und ABB prägen den Standort, der maßgeblich zur Entwicklung nachhaltiger Energielösungen beiträgt.",
      hu: "Az EnergyVaasa Hub az északi országok vezető energiatechnológiai klasztere, amelynek központja Vaasában található. Több mint 160 vállalat dolgozik itt innovatív megoldásokon, különösen az okos hálózatok és a hajómotorok területén. Olyan globális szereplők, mint a Wärtsilä és az ABB határozzák meg a telephelyet, amely nagyban hozzájárul a fenntartható energiamegoldások fejlesztéséhez.",
      ro: "EnergyVaasa Hub este principalul cluster de tehnologie energetică din țările nordice, având sediul în Vaasa. Peste 160 de companii lucrează aici la inovații, în special în domeniul rețelelor inteligente și al motoarelor navale. Jucători globali majori precum Wärtsilä și ABB marchează locația, care contribuie semnificativ la dezvoltarea soluțiilor energetice durabile.",
      en: "The EnergyVaasa Hub is the leading energy technology cluster in the Nordic countries, centered in the city of Vaasa. Over 160 companies operate here, focusing on innovations in smart grids, energy storage, and marine engines. Major global players like Wärtsilä and ABB anchor the hub, which significantly contributes to the development of sustainable energy solutions.",
    },
    factsAdvanced: {
      de: ["Beherbergt über 160 Unternehmen", "Jährlicher Gesamtumsatz von rund 6 Milliarden Euro", "Über 13.000 Menschen sind im Cluster beschäftigt", "80 % der Produktion wird exportiert", "Wärtsilä eröffnete 2022 das Sustainable Technology Hub", "Führend in der Forschung zu grünem Wasserstoff"],
      hu: ["Több mint 160 vállalatnak ad otthont", "Éves összforgalma körülbelül 6 milliárd euró", "Több mint 13 000 embert foglalkoztat a klaszter", "A termelés 80%-át exportálják", "A Wärtsilä 2022-ben nyitotta meg a Fenntartható Technológiai Központot", "Vezető szerep a zöld hidrogén kutatásban"],
      ro: ["Găzduiește peste 160 de companii", "Cifră de afaceri anuală de circa 6 miliarde euro", "Peste 13.000 de angajați în cluster", "80% din producție este destinată exportului", "Wärtsilä a deschis Sustainable Technology Hub în 2022", "Lider în cercetarea hidrogenului verde"],
      en: ["Home to over 160 companies", "Annual total turnover of around 6 billion euros", "Over 13,000 people employed in the cluster", "80% of production is exported worldwide", "Wärtsilä opened the Sustainable Technology Hub in 2022", "Leader in green hydrogen research and development"],
    },
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
    descriptionAdvanced: {
      de: "Neristan ist das historische Viertel von Kokkola und zählt zu den am besten erhaltenen Holzhausvierteln Finnlands. Es umfasst mehrere Dutzend Wohnblöcke mit Gebäuden aus dem 18. und 19. Jahrhundert, die ursprünglich von Handwerkern und Seeleuten bewohnt wurden. Heute ist Neristan ein lebendiger Stadtteil mit Cafés, Kunstgalerien und gut gepflegten privaten Gärten.",
      hu: "Neristan Kokkola történelmi negyede, és Finnország egyik legjobban megőrzött faházas övezete. Több tucat háztömböt foglal magában 18. és 19. századi épületekkel, amelyeket eredetileg kézművesek és tengerészek laktak. Ma Neristan egy élettel teli városrész kávézókkal, művészeti galériákkal és gondosan ápolt magánkertekkel.",
      ro: "Neristan este cartierul istoric din Kokkola și unul dintre cele mai bine conservate ansambluri de case din lemn din Finlanda. Cuprinde zeci de blocuri de locuințe cu clădiri din secolele XVIII și XIX, locuite inițial de meșteșugari și marinari. Astăzi, Neristan este un cartier vibrant, cu cafenele, galerii de artă și grădini private bine întreținute.",
      en: "Neristan is the historic district of Kokkola and one of the best-preserved wooden town centers in Finland. It spans several dozen city blocks with buildings dating back to the 18th and 19th centuries, originally inhabited by craftsmen and sailors. Today, Neristan is a vibrant residential area featuring charming cafes, art galleries, and manicured private gardens.",
    },
    factsAdvanced: {
      de: ["Umfasst 12 historische Stadtblöcke", "Älteste Gebäude stammen aus dem 17. Jahrhundert", "Beherbergt das K.H.Renlund Museum", "Einstiges Zentrum für Schiffbau und Handel", "Strenge Denkmalschutzauflagen für Besitzer", "Regelmäßige geführte historische Stadtrundgänge"],
      hu: ["12 történelmi háztömböt foglal magában", "A legrégebbi épületek a 17. századból származnak", "Itt található a K.H. Renlund Múzeum", "Egykor a hajóépítés és a kereskedelem központja volt", "Szigorú műemlékvédelmi szabályok vonatkoznak rá", "Rendszeres vezetett történelmi városnézések"],
      ro: ["Cuprinde 12 cvartale istorice", "Cele mai vechi clădiri datează din secolul XVII", "Găzduiește Muzeul K.H. Renlund", "Fost centru de construcții navale și comerț", "Reguli stricte de conservare pentru proprietari", "Tururi ghidate istorice regulate"],
      en: ["Consists of 12 historic city blocks", "Oldest buildings date back to the 17th century", "Home to the K.H. Renlund Museum", "Former hub for shipbuilding and tar trade", "Strict heritage protection laws for owners", "Regular guided historical walking tours"],
    },
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
    descriptionAdvanced: {
      de: "Das Volksmusikzentrum in Kaustinen ist das kulturelle Herz der finnischen Folkloretakt. Es bewahrt und fördert die Kaustinen-Geigentradition, die von der UNESCO als immaterielles Kulturerbe anerkannt wurde. Das Zentrum organisiert das jährliche Kaustinen Folk Music Festival, eines der größten seiner Art in Europa, und beherbergt ein Museum sowie Forschungsarchive.",
      hu: "A kaustineni Népzenei Központ a finn folklór kulturális szíve. Gondozza és népszerűsíti a kaustineni hegedűhagyományt, amelyet az UNESCO a szellemi kulturális örökség részévé nyilvánított. A központ szervezi az évente megrendezett Kaustinen Népzenei Fesztivált, amely Európa egyik legnagyobb ilyen jellegű eseménye, emellett múzeumnak és kutatási archívumnak is otthont ad.",
      ro: "Centrul de Muzică Populară din Kaustinen este inima culturală a folclorului finlandez. Acesta conservă și promovează tradiția viorii din Kaustinen, recunoscută de UNESCO ca patrimoniu cultural imaterial. Centrul organizează anual Festivalul de Muzică Populară din Kaustinen, unul dintre cele mai mari din Europa, și găzduiește un muzeu și arhive de cercetare.",
      en: "The Folk Music Centre in Kaustinen is the cultural heart of Finnish folk music. It preserves and promotes the Kaustinen fiddle tradition, which has been recognized by UNESCO as Intangible Cultural Heritage. The centre organizes the annual Kaustinen Folk Music Festival, one of the largest in Europe, and houses a museum and extensive research archives.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1997", "UNESCO-Welterbe seit 2021 (Geigenmusik)", "Festival findet seit 1968 jährlich statt", "Beherbergt das nationale Volksmusikarchiv", "Verfügt über ein modernes Auditorium", "Zentrum für die Ausbildung in traditioneller Musik"],
      hu: ["1997-ben alapították", "2021 óta UNESCO világörökség (hegedűzene)", "A fesztivált 1968 óta évente megrendezik", "Itt található a nemzeti népzenei archívum", "Modern auditóriummal rendelkezik", "A hagyományos zenei képzés központja"],
      ro: ["Fondat în anul 1997", "Patrimoniu UNESCO din 2021 (muzică de vioară)", "Festivalul are loc anual din 1968", "Găzduiește arhiva națională de muzică populară", "Dispune de un auditoriu modern", "Centru pentru educația muzicală tradițională"],
      en: ["Established in 1997", "UNESCO World Heritage listed since 2021", "Festival held annually since 1968", "Houses the National Folk Music Archive", "Features a modern performance auditorium", "Central hub for traditional music education"],
    },
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
    descriptionAdvanced: {
      de: "Die Brauerei in Lahti, heute Teil der Hartwall-Gruppe, ist einer der bedeutendsten Produktionsstandorte für Getränke in Finnland. Lahti ist historisch eng mit der Braukunst verbunden, was auf die hervorragende Wasserqualität der lokalen Grundwasserleiter zurückzuführen ist. Die Anlage produziert eine breite Palette an Bieren, Erfrischungsgetränken und Mineralwasser für den nationalen und internationalen Markt.",
      hu: "A lahti sörfőzde, amely ma a Hartwall-csoport része, Finnország egyik legjelentősebb italgyártó helyszíne. Lahti történelmileg szorosan kötődik a sörfőzéshez, ami a helyi talajvíz kiváló minőségének köszönhető. Az üzem sörök, üdítőitalok és ásványvizek széles választékát gyártja a hazai és a nemzetközi piacra egyaránt.",
      ro: "Fabrica de bere din Lahti, astăzi parte a grupului Hartwall, este una dintre cele mai importante unități de producție de băuturi din Finlanda. Orașul Lahti este legat istoric de arta berăritului datorită calității excelente a apei din acviferele locale. Unitatea produce o gamă largă de beri, băuturi răcoritoare și apă minerală pentru piețele interne și externe.",
      en: "The brewery in Lahti, now part of the Hartwall group, is one of Finland's most significant beverage production sites. Lahti has a long historical association with brewing, largely due to the exceptional water quality from local aquifers. The facility produces a wide range of beers, soft drinks, and mineral waters for both domestic consumption and international export.",
    },
    factsAdvanced: {
      de: ["Hartwall wurde 1836 gegründet", "Braustätte in Lahti nutzt Grundwasser vom Salpausselkä", "Produziert das bekannte Lapin Kulta Bier", "Modernstes Getränkewerk in Nordeuropa", "Erreichte 2023 CO2-neutrale Produktion", "Größter privater Arbeitgeber in Lahti"],
      hu: ["A Hartwallt 1836-ban alapították", "A lahti üzem a Salpausselkä talajvizét használja", "Itt készül a híres Lapin Kulta sör", "Észak-Európa legmodernebb italgyára", "2023-ra érte el a szén-dioxid-semleges termelést", "Lahti legnagyobb magánmunkaadója"],
      ro: ["Hartwall a fost fondată în 1836", "Fabrica din Lahti folosește apa de la Salpausselkä", "Produce celebra bere Lapin Kulta", "Cea mai modernă fabrică de băuturi din Europa de Nord", "A atins producția neutră de CO2 în 2023", "Cel mai mare angajator privat din Lahti"],
      en: ["Hartwall was founded in 1836", "The Lahti site uses Salpausselkä groundwater", "Produces the famous Lapin Kulta beer", "Most modern beverage plant in Northern Europe", "Achieved carbon-neutral production in 2023", "Largest private-sector employer in Lahti"],
    },
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
    descriptionAdvanced: {
      de: "Der Oulujoki ist ein bedeutender Fluss in Nordfinnland, der den See Oulujärvi mit dem Bottnischen Meerbusen verbindet. Er war historisch eine wichtige Route für den Transport von Teer, einem der Hauptexportgüter Finnlands im 19. Jahrhundert. Heute ist der Fluss durch eine Kette von Wasserkraftwerken gezähmt, die einen wesentlichen Beitrag zur Energieversorgung des Landes leisten.",
      hu: "Az Oulujoki egy jelentős folyó Észak-Finnországban, amely az Oulujärvi-tavat köti össze a Botteni-öböllel. Történelmileg fontos útvonal volt a kátrány szállítására, amely a 19. századi Finnország egyik legfontosabb exportterméke volt. Napjainkban a folyót vízerőművek láncolata szabályozza, amelyek jelentősen hozzájárulnak az ország energiaellátásához.",
      ro: "Oulujoki este un râu important din nordul Finlandei, care conectează lacul Oulujärvi cu Golful Botnic. Istoric, a fost o rută vitală pentru transportul păcurei, unul dintre principalele produse de export ale Finlandei în secolul XIX. Astăzi, râul este amenajat cu o serie de hidrocentrale care contribuie esențial la aprovizionarea cu energie a țării.",
      en: "The Oulujoki is a major river in Northern Finland, connecting Lake Oulujärvi with the Gulf of Bothnia. Historically, it served as a vital transport route for tar, one of Finland's primary exports during the 19th century. Today, the river is tamed by a series of hydroelectric power stations that contribute significantly to the nation's renewable energy supply.",
    },
    factsAdvanced: {
      de: ["Länge von etwa 107 Kilometern", "Durchfließt die Stadt Oulu an der Mündung", "Verfügt über 12 Wasserkraftwerke", "Einst weltberühmte Lachsfanggründe", "Wichtigster Teer-Transportweg der Geschichte", "Einzugsgebiet umfasst 22.841 Quadratkilometer"],
      hu: ["Hossza körülbelül 107 kilométer", "A torkolatnál Oulu városán folyik keresztül", "12 vízerőmű található rajta", "Egykor világhírű lazachalászati terület volt", "A történelem legfontosabb kátrányszállítási útvonala", "Vízgyűjtő területe 22 841 négyzetkilométer"],
      ro: ["Lungime de aproximativ 107 kilometri", "Traversează orașul Oulu la vărsare", "Dispune de 12 hidrocentrale", "Fost domeniu de pescuit la somon faimos în lume", "Cea mai importantă rută istorică pentru transportul păcurei", "Bazin hidrografic de 22.841 km pătrați"],
      en: ["Total length of approximately 107 kilometers", "Flows through the city of Oulu at its mouth", "Harnesses energy with 12 hydroelectric dams", "Once world-famous for salmon fishing", "Key historical route for the Finnish tar trade", "Drainage basin covers 22,841 square kilometers"],
    },
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
    descriptionAdvanced: {
      de: "Das Stahlwerk in Raahe, betrieben von SSAB, ist die größte integrierte Stahlproduktion in den nordischen Ländern. Der Standort ist von strategischer Bedeutung für die finnische Schwerindustrie und ein Pionier in der Entwicklung von fossilfreiem Stahl. Mit einem eigenen Hafen ermöglicht das Werk den effizienten Export von hochwertigen Stahlprodukten in die ganze Welt.",
      hu: "Az SSAB által üzemeltetett raahei acélmű az északi országok legnagyobb integrált acélgyártó üzeme. A telephely stratégiai jelentőségű a finn nehézipar számára, és úttörő a fosszilis energiahordozóktól mentes acél fejlesztésében. Saját kikötőjével az üzem lehetővé teszi a kiváló minőségű acéltermékek hatékony exportját a világ minden tájára.",
      ro: "Combinatul siderurgic din Raahe, operat de SSAB, este cea mai mare unitate integrată de producție a oțelului din țările nordice. Locația are o importanță strategică pentru industria grea finlandeză și este un pionier în dezvoltarea oțelului fără combustibili fosili. Cu propriul port, combinatul permite exportul eficient de produse siderurgice de înaltă calitate în întreaga lume.",
      en: "The steel works in Raahe, operated by SSAB, is the largest integrated steel production facility in the Nordic countries. The site is of strategic importance to Finnish heavy industry and is a global pioneer in the development of fossil-free steel. With its own deep-water port, the facility enables the efficient export of high-quality steel products worldwide.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1960", "Beschäftigt rund 2.500 Mitarbeiter direkt", "Produziert jährlich ca. 2,6 Millionen Tonnen Stahl", "Eigener Hafen ist ganzjährig eisfrei", "Zentrum für die Entwicklung von HYBRIT-Stahl", "Größter industrieller CO2-Emittent Finnlands (vor Umbau)"],
      hu: ["1960-ban alapították", "Körülbelül 2500 közvetlen alkalmazottja van", "Évente kb. 2,6 millió tonna acélt termel", "Saját kikötője egész évben jégmentes", "A HYBRIT acél fejlesztésének központja", "Finnország legnagyobb ipari CO2-kibocsátója (az átállás előtt)"],
      ro: ["Fondat în anul 1960", "Are circa 2.500 de angajați direcți", "Produce aproximativ 2,6 milioane tone oțel pe an", "Port propriu fără gheață tot timpul anului", "Centru pentru dezvoltarea oțelului HYBRIT", "Cel mai mare emitent industrial de CO2 (înainte de modernizare)"],
      en: ["Established in 1960", "Employs approximately 2,500 people directly", "Produces about 2.6 million tonnes of steel annually", "Features a private year-round ice-free port", "Center for HYBRIT fossil-free steel technology", "Finland's largest industrial CO2 emitter (pre-transition)"],
    },
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
    descriptionAdvanced: {
      de: "Die Burgruine von Kajaani befindet sich auf einer Insel im Fluss Kajaaninjoki und war einst die nördlichste Steinburg der Welt. Erbaut im 17. Jahrhundert zur Verteidigung der schwedischen Ostgrenze, wurde sie im Großen Nordischen Krieg zerstört. Heute sind die konservierten Ruinen ein bedeutendes historisches Denkmal und eine beliebte Sehenswürdigkeit inmitten der Stadt.",
      hu: "A kajaanii várromok a Kajaaninjoki folyó egyik szigetén találhatók, és egykor a világ legészakibb kővára volt. A 17. században épült a svéd keleti határ védelmére, majd a nagy északi háború során rombolták le. Ma a konzervált romok jelentős történelmi emlékműnek számítanak, és népszerű látnivalók a város közepén.",
      ro: "Ruinele castelului Kajaani se află pe o insulă în râul Kajaaninjoki și au reprezentat cândva cel mai nordic castel de piatră din lume. Construit în secolul XVII pentru apărarea graniței de est a Suediei, a fost distrus în Marele Război al Nordului. Astăzi, ruinele conservate sunt un monument istoric important și o atracție populară în centrul orașului.",
      en: "The Kajaani Castle ruins are located on an island in the Kajaaninjoki river and once held the title of the northernmost stone castle in the world. Built in the 17th century to defend the eastern border of the Swedish Empire, it was destroyed during the Great Northern War. Today, the preserved ruins serve as a significant historical monument and a popular attraction in the city center.",
    },
    factsAdvanced: {
      de: ["Bau begann im Jahr 1604", "Fertigstellung im Jahr 1666", "1716 von russischen Truppen gesprengt", "Diente als Staatsgefängnis für Gelehrte", "Erste archäologische Ausgrabungen im Jahr 1930", "Ruinen sind über eine Brücke zugänglich"],
      hu: ["Az építkezés 1604-ben kezdődött", "1666-ban fejezték be", "1716-ban az orosz csapatok felrobbantották", "Állami börtönként is szolgált tudósok számára", "Az első régészeti feltárások 1930-ban indultak", "A romok hídon keresztül közelíthetők meg"],
      ro: ["Construcția a început în 1604", "Finalizat în anul 1666", "Aruncat în aer de trupele ruse în 1716", "A servit drept închisoare de stat pentru erudiți", "Primele săpături arheologice au avut loc în 1930", "Ruinele sunt accesibile printr-un pod"],
      en: ["Construction began in 1604", "Completed in 1666", "Blown up by Russian forces in 1716", "Used as a state prison for scholars and dissenters", "First archaeological excavations started in 1930", "Ruins are accessible via a modern bridge"],
    },
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
    descriptionAdvanced: {
      de: "Hossa ist ein Nationalpark im Nordosten Finnlands, der für seine kristallklaren Seen und unberührten Kiefernwälder bekannt ist. Er wurde 2017 anlässlich des 100. Jahrestages der Unabhängigkeit Finnlands gegründet und ist ein Paradies für Wanderer und Kanufahrer. Ein besonderes Highlight sind die prähistorischen Felsmalereien von Värikallio, die zu den ältesten des Landes zählen.",
      hu: "Hossa egy nemzeti park Északkelet-Finnországban, amely kristálytiszta tavairól és érintetlen fenyőerdőiről ismert. 2017-ben alapították Finnország függetlenségének 100. évfordulója alkalmából, és a túrázók, valamint a kenu kedvelők paradicsoma. Különleges látnivalói a Värikallio őskori sziklarajzai, amelyek az ország legősibb emlékei közé tartoznak.",
      ro: "Hossa este un parc național din nord-estul Finlandei, cunoscut pentru lacurile sale cristaline și pădurile de pini virgine. A fost înființat în 2017 pentru a marca centenarul independenței Finlandei și este un paradis pentru drumeții și canotaj. Un punct de atracție deosebit sunt picturile rupestre preistorice de la Värikallio, printre cele mai vechi din țară.",
      en: "Hossa is a national park in northeastern Finland, renowned for its crystal-clear lakes and pristine pine forests. Established in 2017 to commemorate Finland's centenary of independence, it is a haven for hikers and canoeists. A major highlight is the prehistoric rock paintings of Värikallio, which are among the oldest in the country.",
    },
    factsAdvanced: {
      de: ["Zum Nationalpark im Jahr 2017 ernannt", "Beherbergt die Värikallio-Felsmalereien (ca. 4.000 Jahre alt)", "Umfasst rund 11.000 Hektar Fläche", "Verfügt über 90 Kilometer markierte Wanderwege", "Bekannt für den tiefen Schluchsee Julma-Ölkky", "Ideales Revier für Rentierbeobachtungen"],
      hu: ["2017-ben kapott nemzeti parki státuszt", "Itt találhatók a kb. 4000 éves Värikallio sziklarajzok", "Területe körülbelül 11 000 hektár", "90 kilométernyi jelzett túraútvonal várja a látogatókat", "Híres a mély Julma-Ölkky szurdoktóról", "Ideális terület rénszarvas-megfigyelésre"],
      ro: ["Desemnat parc național în anul 2017", "Găzduiește picturile rupestre Värikallio (vechi de 4.000 ani)", "Suprafață de circa 11.000 de hectare", "Dispune de 90 km de trasee de drumeție marcate", "Cunoscut pentru lacul adânc Julma-Ölkky", "Zonă ideală pentru observarea renilor"],
      en: ["Designated a national park in 2017", "Home to the 4,000-year-old Värikallio rock art", "Covers approximately 11,000 hectares", "Features 90 kilometers of marked hiking trails", "Famous for the Julma-Ölkky canyon lake", "Excellent area for observing wild reindeer"],
    },
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
    descriptionAdvanced: {
      de: "Der Wildpark Ranua wurde 1983 eröffnet und ist der nördlichste Zoo Finnlands. Er beherbergt etwa 50 Tierarten der Arktis, darunter die einzigen Eisbären des Landes. Die Anlage erstreckt sich über eine Fläche von 82 Hektar in einem natürlichen Nadelwaldgebiet.",
      hu: "A Ranua Vadaspark 1983-ban nyílt meg, és Finnország legészakibb állatkertje. Körülbelül 50 sarki állatfajnak ad otthont, köztük az ország egyetlen jegesmedvéinek. A park 82 hektáros területen, természetes tűlevelű erdőben helyezkedik el.",
      ro: "Parcul de animale sălbatice Ranua a fost deschis în 1983 și este cea mai nordică grădină zoologică din Finlanda. Găzduiește aproximativ 50 de specii de animale arctice, inclusiv singurii urși polari din țară. Facilitatea se întinde pe o suprafață de 82 de hectare.",
      en: "Ranua Wildlife Park opened in 1983 and is Finland's northernmost zoo. It houses approximately 50 species of Arctic animals, including the country's only polar bears. The facility covers an area of 82 hectares within a natural coniferous forest environment.",
    },
    factsAdvanced: {
      de: ["Eröffnung des Parks im Jahr 1983", "Nördlichster Zoo Finnlands", "Beherbergt etwa 50 verschiedene Tierarten", "Einzige Eisbären in ganz Finnland", "Gesamtfläche von 82 Hektar", "Liegt 80 km südlich von Rovaniemi"],
      hu: ["A parkot 1983-ban nyitották meg", "Finnország legészakibb állatkertje", "Körülbelül 50 különböző állatfaj él itt", "Itt találhatók Finnország egyetlen jegesmedvéi", "A park teljes területe 82 hektár", "Rovaniemis-től 80 km-re délre fekszik"],
      ro: ["Deschiderea parcului în anul 1983", "Cea mai nordică grădină zoologică din Finlanda", "Găzduiește aproximativ 50 de specii de animale", "Singurii urși polari din întreaga Finlandă", "Suprafață totală de 82 de hectare", "Situat la 80 km sud de Rovaniemi"],
      en: ["Opening of the park in 1983", "Northernmost zoo in Finland", "Houses approximately 50 animal species", "Only polar bears in all of Finland", "Total area of 82 hectares", "Located 80 km south of Rovaniemi"],
    },
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
    descriptionAdvanced: {
      de: "Die Burg Kastelholm ist eine mittelalterliche Festung in Sund auf den Åland-Inseln. Sie wurde erstmals 1384 urkundlich erwähnt und diente als strategischer Stützpunkt der schwedischen Krone. Die Anlage wurde nach mehreren Bränden und Belagerungen im 20. Jahrhundert umfassend restauriert.",
      hu: "Kastelholm vára egy középkori erődítmény a finnországi Åland-szigeteken, Sund községben. Először 1384-ben említik az okiratok, és a svéd korona stratégiai bázisaként szolgált. A várat több tűzvész és ostrom után a 20. században restaurálták.",
      ro: "Castelul Kastelholm este o fortificație medievală situată în Sund, pe insulele Åland. A fost menționat pentru prima dată în 1384 și a servit ca bază strategică pentru coroana suedeză. Complexul a fost restaurat extensiv în secolul al XX-lea.",
      en: "Kastelholm Castle is a medieval fortress located in Sund on the Åland Islands. It was first mentioned in historical documents in 1384 and served as a strategic base for the Swedish crown. The complex was extensively restored in the 20th century.",
    },
    factsAdvanced: {
      de: ["Erste urkundliche Erwähnung im Jahr 1384", "König Erik XIV. war hier 1571 inhaftiert", "Schwere Belagerung durch schwedische Truppen 1599", "Großer Brand zerstörte Teile der Burg 1745", "Restaurierung begann im Jahr 1982", "Liegt in der Gemeinde Sund auf Åland"],
      hu: ["Első írásos említése 1384-ben történt", "XIV. Erik királyt itt tartották fogva 1571-ben", "1599-ben súlyos ostromot szenvedett el", "1745-ben tűzvész pusztította a vár nagy részét", "A restaurálási munkálatok 1982-ben kezdődtek", "Åland szigetén, Sund községben található"],
      ro: ["Prima mențiune documentară în anul 1384", "Regele Erik al XIV-lea a fost închis aici în 1571", "Asediu greu de către trupele suedeze în 1599", "Un incendiu major a distrus părți din castel în 1745", "Restaurarea a început în anul 1982", "Situat în comuna Sund din Åland"],
      en: ["First documented mention in 1384", "King Erik XIV was imprisoned here in 1571", "Heavy siege by Swedish troops in 1599", "Major fire destroyed parts of the castle in 1745", "Restoration work began in 1982", "Located in the municipality of Sund, Åland"],
    },
  },    
];

export const finlandAllPoi: POI[] = [finlandCountry, ...finlandRegions, ...finlandCities, ...finlandCultureExtended, ...finlandNatureExtended];
