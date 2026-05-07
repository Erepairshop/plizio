import { POI } from "./poi";

export const poiExtraBulgariaCities: POI[] = [
  {
    id: "city-sofia",
    type: "city",
    parent: "bg-country",
    coords: [23.3219, 42.6977],
    name: { de: "Sofia", hu: "Szófia", ro: "Sofia", en: "Sofia" },
    description: {
      de: "Bulgariens Hauptstadt mit der Alexander-Newski-Kathedrale und dem Witoscha-Gebirge.",
      hu: "Bulgária fovárosa, az Alekszander Nyevszki-székesegyházzal és a Vitosa-heggyel.",
      ro: "Capitala Bulgariei, cu Catedrala Alexandr Nevski ?i muntele Vitosha.",
      en: "Bulgaria's capital, home to Alexander Nevsky Cathedral and Vitosha Mountain."
    },
    facts: {
      de: ["Hauptstadt Bulgariens", "Alexander-Newski-Kathedrale", "Am Fuß des Witoscha-Gebirges"],
      hu: ["Bulgária fovárosa", "Alekszander Nyevszki-székesegyház", "A Vitosa-hegység lábánál"],
      ro: ["Capitala Bulgariei", "Catedrala Alexandr Nevski", "La poalele muntelui Vitosha"],
      en: ["Capital of Bulgaria", "Alexander Nevsky Cathedral", "At the foot of Vitosha Mountain"]
    },
    descriptionAdvanced: {
      de: "Sofia, die Hauptstadt und größte Stadt Bulgariens, ist eine pulsierende Metropole am Fuße des Witoscha-Gebirges, in der jahrtausendealte Geschichte und moderner Lebensstil aufeinandertreffen. Die Ursprünge der Stadt reichen bis zum thrakischen Stamm der Serden zurück, was Sofia zu einer der ältesten Städte Europas macht. Im Zentrum liegt der berühmte \\\\\\\"Platz der religiösen Toleranz\\\\\\\", an dem eine orthodoxe Kirche, eine Moschee, eine Synagoge und eine katholische Kathedrale in unmittelbarer Nachbarschaft stehen. Die Stadt ist bekannt für ihre zahlreichen Mineralquellen, die teilweise frei zugänglich sind und schon von den Römern genutzt wurden. Sofia ist das politische, kulturelle und wirtschaftliche Herz des Landes mit einer reichen Museums- und Galerienlandschaft. Ihre Lage macht sie zum idealen Ausgangspunkt sowohl für Städtereisen als auch für Outdoor-Aktivitäten im Witoscha-Naturpark.",
      hu: "Szófia, Bulgária fovárosa és legnagyobb városa, lendületes metropolisz a fenséges Vitosa-hegység lábánál, ahol a többezer éves történelem és a modern életstílus találkozik. A város gyökerei a thrákok szerd törzséig nyúlnak vissza, ezzel Szófia Európa egyik legrégebbi települése. A belvárosban található a híres \\\\\\\"vallási tolerancia tere\\\\\\\", ahol egy ortodox templom, egy mecset, egy zsinagóga és egy katolikus székesegyház áll egymás közvetlen szomszédságában. A város ásványvízforrásairól is ismert, amelyeket részben szabadon lehet használni, és amelyeket már a rómaiak is értékeltek. Szófia az ország politikai, kulturális és gazdasági szíve, gazdag múzeumi és galériakínálattal. Földrajzi adottságai miatt egyszerre tökéletes kiindulópont a városnézéshez és a környezo hegyek felfedezéséhez.",
      ro: "Sofia, capitala ?i cel mai mare ora? al Bulgariei, este o metropola dinamica situata la poalele maiestuosului munte Vitosha, unde mii de ani de istorie se împletesc cu un stil de via?a modern. Originile ora?ului dateaza din vremea tracilor serdi, ceea ce face din Sofia unul dintre cele mai vechi ora?e ale Europei. Vizitatorii pot descoperi celebra \\\\\\\"Pia?a a Toleran?ei Religioase\\\\\\\", unde o biserica ortodoxa, o moschee, o sinagoga ?i o catedrala catolica se afla la doar câ?iva pa?i una de cealalta. Ora?ul este cunoscut pentru izvoarele sale minerale, multe dintre ele accesibile publicului în mod gratuit ?i folosite înca din epoca romana. Sofia este inima administrativa, culturala ?i economica a ?arii, oferind o re?ea bogata de muzee, galerii ?i parcuri. Pozi?ia sa o transforma în baza ideala atât pentru explorari urbane, cât ?i pentru aventuri în mun?ii din apropiere.",
      en: "Sofia, the capital and largest city of Bulgaria, is a dynamic metropolis that seamlessly blends thousands of years of history with a vibrant modern lifestyle. Nestled at the foot of the majestic Vitosha Mountain, the city is one of the oldest in Europe, with its foundations dating back to the Thracian tribe of Serdi. Visitors can explore a unique 'Square of Religious Tolerance,' where a church, a mosque, a synagogue, and a cathedral stand within walking distance of each other. The city is famous for its abundance of natural mineral springs, many of which are accessible to the public for free. Sofia serves as the administrative, cultural, and economic heart of the country, offering a rich tapestry of museums, galleries, and green parks. Its location makes it a perfect base for both urban exploration and outdoor adventures in the surrounding mountains."
    },
    factsAdvanced: {
      de: [
        "Sofia ist eine der wenigen europäischen Hauptstädte mit einem Hochgebirge (Witoscha, 2.290 m) innerhalb der Stadtgrenzen.",
        "Das Motto der Stadt lautet \\\\\\\"Sie wächst, aber sie altert nicht\\\\\\\" und wurde 1911 offiziell angenommen.",
        "Sofia ist seit über 7.000 Jahren ununterbrochen bewohnt und damit eine der ältesten Städte Europas.",
        "Im Stadtgebiet sprudeln über 30 Mineralquellen, einige davon bereits seit der Römerzeit.",
        "Die Alexander-Newski-Kathedrale ist eine der größten orthodoxen Kirchen der Welt und bietet bis zu 5.000 Gläubigen Platz.",
        "Mit 550 Metern Höhe ist Sofia nach Madrid die zweithöchstgelegene Hauptstadt der Europäischen Union.",
        "Unter den heutigen Straßen liegt die antike römische Stadt Serdica, deren Reste teilweise im U-Bahn-Bereich sichtbar sind.",
        "Der Name Sofia geht auf die Heilige-Sophia-Kirche aus dem 4. Jahrhundert zurück, eine der ältesten Kirchen der Stadt."
      ],
      hu: [
        "Szófia egyike azon kevés európai fovárosoknak, amelyek határain belül magashegység található (Vitosa, 2290 m).",
        "A város mottója \\\\\\\"Növekszik, de nem öregszik\\\\\\\", melyet 1911-ben fogadtak el hivatalosan.",
        "Szófia több mint 7000 éve folyamatosan lakott település, Európa egyik legosibb városa.",
        "A városban és környékén több mint 30 ásványvízforrás tör fel, köztük olyanok is, melyeket már a rómaiak használtak.",
        "Az Alekszandr Nyevszkij-székesegyház a világ egyik legnagyobb ortodox temploma, 5000 hívot képes befogadni.",
        "550 méteres tengerszint feletti magasságával Szófia Madrid után az Európai Unió második legmagasabban fekvo fovárosa.",
        "A mai utcák alatt található Serdica római város maradványai, amelyek részben a metróállomásoknál is megtekinthetok.",
        "A város nevét a 4. században épült Szent Szófia-templom adja, amely Szófia egyik legrégebbi temploma."
      ],
      ro: [
        "Sofia este una dintre pu?inele capitale europene cu un munte înalt (Vitosha, 2.290 m) în interiorul limitelor sale administrative.",
        "Motto-ul ora?ului este \\\\\\\"Cre?te, dar nu îmbatrâne?te\\\\\\\", adoptat oficial în anul 1911.",
        "Sofia este locuita neîntrerupt de peste 7.000 de ani, fiind unul dintre cele mai vechi ora?e din Europa.",
        "În ora? ?i în împrejurimi exista peste 30 de izvoare minerale, unele utilizate înca din vremea romanilor.",
        "Catedrala Alexandru Nevski este una dintre cele mai mari catedrale ortodoxe din lume, putând gazdui 5.000 de credincio?i.",
        "Situata la 550 de metri altitudine, Sofia este a doua cea mai înalta capitala din Uniunea Europeana, dupa Madrid.",
        "Sub strazile moderne se afla rama?i?ele ora?ului roman Serdica, vizibile par?ial în zona sta?iilor de metrou.",
        "Numele Sofia provine de la biserica Sfânta Sofia, ridicata în secolul al IV-lea, una dintre cele mai vechi biserici din ora?."
      ],
      en: [
        "Sofia is one of the few European capitals with a high mountain (Vitosha, 2,290m) within its city limits.",
        "The city's motto is 'Ever Growing, Never Aging,' adopted in 1911.",
        "Sofia has been inhabited for over 7,000 years, making it one of the oldest cities in Europe.",
        "There are over 30 mineral springs in and around the city center, some dating back to Roman times.",
        "The Alexander Nevsky Cathedral is one of the largest Orthodox cathedrals in the world, holding 5,000 people.",
        "The city sits at an elevation of 550 meters, the second highest capital in the European Union.",
        "Underneath the modern streets lies the ancient Roman city of Serdica, much of which is visible today.",
        "Sofia was named after the Saint Sophia Church, one of the oldest churches in the city, built in the 4th century."
      ]
    },
    image: "/geo-images/bulgaria/city-sofia.webp"
  },
  {
    id: "city-plovdiv",
    type: "city",
    parent: "bg-country",
    coords: [24.7453, 42.1354],
    name: { de: "Plowdiw", hu: "Plovdiv", ro: "Plovdiv", en: "Plovdiv" },
    description: {
      de: "Eine der ältesten dauerhaft bewohnten Städte Europas mit römischem Altstadtkern und UNESCO-Erbe.",
      hu: "Európa egyik legrégebben folyamatosan lakott városa, római óvárossal és UNESCO-örökséggel.",
      ro: "Unul dintre cele mai vechi ora?e locuite continuu din Europa, cu centru vechi roman ?i patrimoniu UNESCO.",
      en: "One of Europe's oldest continuously inhabited cities, with a Roman old town and UNESCO heritage."
    },
    facts: {
      de: ["Sehr alte Siedlungsgeschichte", "Römisches Theater", "UNESCO-naher Altstadtkern"],
      hu: ["Nagyon régi településtörténet", "Római színház", "UNESCO-közeli óváros"],
      ro: ["Istorie de a?ezare foarte veche", "Teatru roman", "Centru vechi cu statut UNESCO"],
      en: ["Very old settlement history", "Roman theater", "UNESCO-listed old town area"]
    },
    descriptionAdvanced: {
      de: "Plowdiw ist eine Stadt von außergewöhnlicher Langlebigkeit und gilt häufig als die älteste durchgehend bewohnte Stadt Europas, mit einer Geschichte, die über 8.000 Jahre zurückreicht. Auf sieben Hügeln entlang der Mariza erbaut, war sie ein bedeutender Kreuzungspunkt für Thraker, Römer, Byzantiner und Osmanen. Die Altstadt ist ein architektonisches Juwel mit farbenfrohen Häusern aus der bulgarischen Wiedergeburt, kopfsteingepflasterten Gassen und dem prächtigen römischen Theater. 2019 war Plowdiw Kulturhauptstadt Europas und stellte dabei das kreative Viertel Kapana sowie seine vielfältige Kunstszene in den Vordergrund. Antike Ruinen wie Stadion und Forum mischen sich heute mit einer jungen, trendigen Atmosphäre. Plowdiw ist außerdem das Tor zu den Rhodopen und ein beliebtes Ziel für Geschichtsfans und moderne Stadtreisende gleichermaßen.",
      hu: "Plovdiv hihetetlenül régi város, amelyet gyakran Európa legrégebb óta folyamatosan lakott településének tartanak, több mint 8000 éves múlttal. A Marica folyó mellett, hét dombra épült város jelentos kereskedelmi keresztezodés volt a thrákok, rómaiak, bizánciak és oszmánok számára. Az óváros építészeti gyöngyszem: 19. századi újjászületés-kori házak, macskaköves utcák és a lenyugözo római színház teszi különlegessé. 2019-ben Plovdiv volt Európa Kulturális Fovárosa, ami felkerült a Kapana kreatív negyed és a sokszínu muvészeti élet a térképre. Az osi romok – köztük a stadion és a fórum – mára élénk, fiatalos hangulattal keverednek. Plovdiv egyúttal a Rodope-hegység kapuja, így a történelemkedvelok és a városi utazók egyaránt megtalálják benne a számításukat.",
      ro: "Plovdiv este un ora? cu o longevitate impresionanta, considerat adesea cel mai vechi ora? locuit neîntrerupt din Europa, cu o istorie ce se întinde pe peste 8.000 de ani. Construit pe ?apte coline de-a lungul râului Mari?a, a fost o rascruce importanta pentru traci, romani, bizantini ?i otomani. Centrul vechi este o bijuterie arhitecturala, cu case colorate din perioada Rena?terii bulgare, strazi pavate cu piatra cubica ?i magnificul Teatru Roman Antic. În 2019, Plovdiv a fost Capitala Europeana a Culturii, ocazie cu care cartierul creativ Kapana ?i scena artistica diversa au atras aten?ia interna?ionala. Ruinele antice — inclusiv stadionul ?i forul — se îmbina acum cu o atmosfera tânara ?i plina de via?a. Plovdiv este, în plus, poarta catre Mun?ii Rodopi, fiind o destina?ie îndragita atât de pasiona?ii de istorie, cât ?i de calatorii moderni.",
      en: "Plovdiv is a city of incredible longevity, often cited as the oldest continuously inhabited city in Europe, with history stretching back over 8,000 years. Built on seven hills along the Maritsa River, it served as a major crossroads for ancient Thracians, Romans, Byzantines, and Ottomans. The city's Old Town is an architectural gem, featuring colorful 19th-century National Revival houses and cobblestone streets that lead to the magnificent Ancient Roman Theatre. In 2019, Plovdiv served as the European Capital of Culture, highlighting its thriving creative district, Kapana, and its diverse cultural scene. The city successfully marries its ancient ruins—including a stadium and forum—with a trendy, youthful atmosphere. Plovdiv is also known for its beautiful surrounding nature and as a gateway to the Rhodope Mountains, making it a favorite for both history enthusiasts and modern travelers."
    },
    factsAdvanced: {
      de: [
        "Plowdiw ist älter als Rom und Athen, die ersten Siedlungsspuren reichen bis etwa 6.000 v. Chr. zurück.",
        "Die Stadt wurde ursprünglich auf sieben Syenithügeln erbaut, von denen heute noch sechs deutlich sichtbar sind.",
        "Das römische Theater von Philippopolis aus dem 2. Jahrhundert n. Chr. zählt zu den besterhaltenen der Welt.",
        "Das römische Stadion im Zentrum bot einst 30.000 Zuschauern Platz bei Wettkämpfen.",
        "Kapana ist Bulgariens erstes ausgewiesenes Kreativviertel mit zahlreichen Galerien und Handwerksläden.",
        "Plowdiw hieß Philippopolis, nachdem König Philipp II. von Makedonien die Stadt 342 v. Chr. eroberte.",
        "Auf dem Hügel Nebet Tepe finden sich Reste der ältesten thrakischen Siedlung des Ortes.",
        "Die Hauptfußgängerzone der Stadt ist mit fast 1,8 km eine der längsten Europas."
      ],
      hu: [
        "Plovdiv idosebb Rómánál és Athénnél, az elso települések nyomai mintegy 6000 évre nyúlnak vissza Krisztus elott.",
        "A várost eredetileg hét szienithegyre építették, ezek közül ma is hat dominánsan kiemelkedik.",
        "A 2. században épült Philippopoliszi római színház a világ egyik legjobb állapotban fennmaradt antik színháza.",
        "A belvárosi római stadion egykor 30 000 nézonek adott helyet az atlétikai versenyeken.",
        "A Kapana negyed Bulgária elso hivatalos kreatív negyede, számos galériával és kézmuves bolttal.",
        "Plovdivet 342-ben Kr. e. II. Fülöp makedón király meghódította, ezért is nevezték el Philippopolisznak.",
        "A Nebet Tepe-domb a város legrégebbi trák településének romjait rejti.",
        "A város fosétálóutcája csaknem 1,8 km hosszú, ezzel Európa egyik leghosszabb sétálóutcája."
      ],
      ro: [
        "Plovdiv este mai vechi decât Roma ?i Atena, primele a?ezari datând din jurul anului 6.000 î.Hr.",
        "Ora?ul a fost construit ini?ial pe ?apte coline de sienit, dintre care astazi se mai disting clar ?ase.",
        "Teatrul Roman din Philippopolis, construit în secolul al II-lea d.Hr., este unul dintre cele mai bine conservate din lume.",
        "Stadionul Roman din centru gazduia odinioara 30.000 de spectatori la jocurile sportive.",
        "Kapana este primul cartier creativ oficial din Bulgaria, plin de galerii de arta ?i ateliere de me?te?uguri.",
        "Ora?ul a fost cunoscut ca Philippopolis dupa ce regele Filip al II-lea al Macedoniei l-a cucerit în 342 î.Hr.",
        "Colina Nebet Tepe pastreaza ruinele celei mai vechi a?ezari trace de pe acest sit.",
        "Strada principala pietonala a ora?ului are aproape 1,8 km, fiind una dintre cele mai lungi din Europa."
      ],
      en: [
        "Plovdiv is older than Rome and Athens, with its first settlements dating to around 6,000 BCE.",
        "The city was originally built on seven syenite hills, though only six remain prominent today.",
        "The Roman Theatre of Philippopolis, built in the 2nd century AD, is one of the best-preserved in the world.",
        "The Roman Stadium in the city center once seated 30,000 spectators for athletic games.",
        "Kapana is Bulgaria's first designated creative district, home to numerous art galleries and craft shops.",
        "Plovdiv was known as Philippopolis after King Philip II of Macedon conquered it in 342 BCE.",
        "The Nebet Tepe hill contains ruins from the earliest Thracian settlement on the site.",
        "The city's Main Pedestrian Street is one of the longest in Europe, stretching for nearly 1.8 kilometers."
      ]
    },
    image: "/geo-images/bulgaria/city-plovdiv.webp"
  },
  {
    id: "city-varna",
    type: "city",
    parent: "bg-country",
    coords: [27.9147, 43.2141],
    name: { de: "Warna", hu: "Várna", ro: "Varna", en: "Varna" },
    description: {
      de: "Schwarzmeer-Resort mit wichtigen Museen und maritimem Stadtcharakter.",
      hu: "Fekete-tengeri üdülohely fontos múzeumokkal és tengerparti hangulattal.",
      ro: "Sta?iune la Marea Neagra, cu muzee importante ?i caracter maritim.",
      en: "A Black Sea resort city with important museums and a strong maritime character."
    },
    facts: {
      de: ["Schwarzmeerküste", "Archäologisches Museum", "Sommer- und Badeziel"],
      hu: ["Fekete-tengeri part", "Régészeti Múzeum", "Nyári üdülováros"],
      ro: ["Litoralul Marii Negre", "Muzeul Arheologic", "Destina?ie de vara ?i plaja"],
      en: ["Black Sea coast", "Archaeological Museum", "Summer resort destination"]
    },
    descriptionAdvanced: {
      de: "Warna, oft als \\\\\\\"Meereshauptstadt Bulgariens\\\\\\\" bezeichnet, ist die größte Stadt an der bulgarischen Schwarzmeerküste und ein zentrales Wirtschafts- und Kulturzentrum. Weltberühmt wurde die Stadt durch die Nekropole von Warna, wo das älteste verarbeitete Gold der Geschichte entdeckt wurde – mit einem Alter von über 6.000 Jahren. Neben ihren antiken Schätzen vereint Warna die Energie einer geschäftigen Hafenstadt mit dem Charme eines beliebten Badeortes. Der weitläufige Meeresgarten zählt zu den größten Parkanlagen des Balkans, mit Aquarium, Planetarium und Aussichten aufs Meer. Auch die imposante Mariä-Himmelfahrt-Kathedrale und die antiken römischen Thermen, die zu den größten in Europa zählen, sind Highlights. Mit lebendigen Festivals, langen Sandstränden und einer reichen maritimen Geschichte zieht Warna sowohl Erholungssuchende als auch Geschichtsinteressierte an.",
      hu: "Várnát gyakran \\\\\\\"Bulgária tengeri fovárosaként\\\\\\\" emlegetik; a bolgár Fekete-tenger partjának legnagyobb városa, valamint fontos gazdasági és kulturális központ. A Várnai nekropolisz révén világhíru lett: itt találták meg a történelem legrégebbi feldolgozott aranykincsét, amely több mint 6000 éves. Az ókori kincsek mellett Várna egyszerre nyüzsgo kikötováros és népszeru tengerparti üdülohely. A kiterjedt Tengeri-kert a Balkán egyik legnagyobb városi parkja, akváriummal, planetáriummal és tengerre nyíló panorámával. Az impozáns Istenanya elszenderedése-székesegyház, valamint Európa egyik legnagyobb fennmaradt római fürdoje, az ókori thermae szintén kiemelt látnivalók. Élénk fesztiváljaival, homokos strandjaival és gazdag tengeri történelmével Várna a kikapcsolódást és a történelmi felfedezést kedveloket egyaránt vonzza.",
      ro: "Varna, numita adesea \\\\\\\"capitala maritima a Bulgariei\\\\\\\", este cel mai mare ora? de pe litoralul bulgar al Marii Negre ?i un important centru economic ?i cultural. Ora?ul este celebru în întreaga lume datorita Necropolei de la Varna, unde a fost descoperit cel mai vechi aur prelucrat din istorie, cu o vechime de peste 6.000 de ani. Pe lânga comorile sale antice, Varna combina energia unui ora?-port aglomerat cu farmecul unei sta?iuni de litoral foarte populare. Întinsa Gradina a Marii este unul dintre cele mai mari parcuri amenajate din Balcani, cu acvariu, planetariu ?i priveli?ti spectaculoase la mare. Impresionanta Catedrala a Adormirii Maicii Domnului ?i Termele Romane antice, printre cele mai mari din Europa, completeaza patrimoniul vizibil al ora?ului. Cu festivaluri animate, plaje întinse de nisip ?i o istorie maritima bogata, Varna atrage atât turi?ti în cautare de relaxare, cât ?i pasiona?i de istorie.",
      en: "Varna, often referred to as the 'Sea Capital of Bulgaria,' is the largest city on the country's Black Sea coast and a major cultural and economic hub. The city is world-renowned for the Varna Necropolis, where the oldest processed gold in history was discovered, dating back over 6,000 years. Beyond its ancient treasures, Varna offers a unique blend of a bustling port city and a popular seaside resort. The expansive Sea Garden, one of the largest landscaped parks in the Balkans, runs along the coastline, offering beautiful views, an aquarium, and a planetarium. Varna is also home to the impressive Dormition of the Mother of God Cathedral and the ancient Roman Baths, which are among the largest in Europe. With its vibrant festivals, sandy beaches, and rich maritime history, Varna attracts visitors seeking both relaxation and historical discovery."
    },
    factsAdvanced: {
      de: [
        "Der 1972 entdeckte Goldschatz von Warna umfasst 3.000 Goldobjekte und gilt als ältester verarbeiteter Goldfund der Welt (4.600–4.200 v. Chr.).",
        "Die römischen Thermen in Warna sind die viertgrößten erhaltenen römischen Thermen in Europa.",
        "Der Meeresgarten wurde Ende des 19. Jahrhunderts vom tschechischen Gartenarchitekten Anton Novák gestaltet.",
        "Warna ist Hauptsitz der bulgarischen Marine und der Handelsflotte.",
        "Die Stadt wurde um 570 v. Chr. als griechische Kolonie unter dem Namen Odessos gegründet.",
        "Der See von Warna ist der tiefste und größte Liman an der bulgarischen Schwarzmeerküste.",
        "Das internationale Festival \\\\\\\"Warna-Sommer\\\\\\\" ist das älteste Musikfestival Bulgariens und wurde 1926 ins Leben gerufen.",
        "Die 1886 erbaute Mariä-Himmelfahrt-Kathedrale ist die zweitgrößte Kathedrale Bulgariens."
      ],
      hu: [
        "Az 1972-ben felfedezett Várnai aranykincs 3000 aranytárgyat tartalmaz, és a világ legrégebbi feldolgozott aranya (Kr. e. 4600–4200).",
        "A várnai római fürdo Európa negyedik legnagyobb fennmaradt római termája.",
        "A Tengeri-kert parkot a 19. század végén Anton Novák cseh kertépítész tervezte.",
        "Várnában található a Bolgár Haditengerészet és a kereskedelmi flotta központja.",
        "A várost Kr. e. 570 körül alapították görög kolóniaként Odesszosz néven.",
        "A Várnai-tó a bolgár Fekete-tenger partjának legmélyebb és legnagyobb limánja.",
        "A Várnai Nyári Nemzetközi Fesztivál Bulgária legrégebbi zenei fesztiválja, 1926 óta rendezik meg.",
        "Az 1886-ban épült Istenanya elszenderedése-székesegyház Bulgária második legnagyobb székesegyháza."
      ],
      ro: [
        "Tezaurul de aur de la Varna, descoperit în 1972, cuprinde 3.000 de obiecte ?i este cel mai vechi aur prelucrat din lume (4.600–4.200 î.Hr.).",
        "Termele Romane din Varna sunt al patrulea cel mai mare complex termal roman conservat din Europa.",
        "Parcul Gradina Marii a fost proiectat la sfâr?itul secolului al XIX-lea de gradinarul ceh Anton Novák.",
        "Varna gazduie?te comandamentul Marinei Bulgare ?i al flotei comerciale.",
        "Ora?ul a fost fondat ca o colonie greceasca numita Odessos în jurul anului 570 î.Hr.",
        "Lacul Varna este cel mai adânc ?i mai mare liman de pe coasta bulgara a Marii Negre.",
        "Festivalul Interna?ional \\\\\\\"Vara la Varna\\\\\\\" este cel mai vechi festival muzical din Bulgaria, înfiin?at în 1926.",
        "Catedrala Adormirii Maicii Domnului, ridicata în 1886, este a doua ca marime din Bulgaria."
      ],
      en: [
        "The Varna Gold Treasure, found in 1972, consists of 3,000 gold items and is the oldest gold in the world (4,600-4,200 BCE).",
        "The Roman Baths in Varna are the 4th largest preserved Roman thermal baths in Europe.",
        "The Sea Garden park was designed by the Czech gardener Anton Novák in the late 19th century.",
        "Varna is the headquarters of the Bulgarian Navy and the merchant marine.",
        "The city was originally founded as an ancient Greek colony named Odessos around 570 BCE.",
        "Varna's lake is the deepest and largest liman on the Bulgarian Black Sea coast.",
        "The Varna Summer International Festival is the oldest music festival in Bulgaria, started in 1926.",
        "The Cathedral of the Assumption, built in 1886, is the second largest cathedral in Bulgaria."
      ]
    },
    image: "/geo-images/bulgaria/city-varna.webp"
  },
  {
    id: "city-burgas",
    type: "city",
    parent: "bg-country",
    coords: [27.4626, 42.5048],
    name: { de: "Burgas", hu: "Burgasz", ro: "Burgas", en: "Burgas" },
    description: {
      de: "Burgas ist die viertgrößte Stadt Bulgariens und das wirtschaftliche sowie kulturelle Zentrum der südlichen Schwarzmeerküste. Die Stadt ist bekannt für ihren bedeutenden Seehafen, die Ölraffinerie und ihre Rolle als wichtiger Verkehrsknotenpunkt. Ein besonderes Highlight von Burgas ist der Meeresgarten, ein weitläufiger Park, der sich entlang der Küste erstreckt und mit seinen gepflegten Alleen, Skulpturen und dem Blick auf das Meer zum Verweilen einlädt. Burgas ist zudem von drei Seen umgeben – dem Atanasowo-See, dem Burgas-See und dem Mandra-See –, die wichtige Naturschutzgebiete und Rückzugsorte für zahlreiche Vogelarten sind. Die Stadt bietet eine lebendige Fußgängerzone mit zahlreichen Geschäften, Cafés und Restaurants, die frischen Fisch und lokale Spezialitäten servieren. Kulturell ist Burgas durch verschiedene Festivals geprägt, darunter das berühmte Sandskulpturen-Festival. Die Nähe zu beliebten Ferienorten wie Sosopol und Nessebar macht Burgas zu einem idealen Ausgangspunkt für Erkundungen in der Region. Die Stadt verbindet industriellen Fortschritt mit einer entspannten maritimen Atmosphäre und bietet Besuchern eine hohe Lebensqualität und vielfältige Freizeitmöglichkeiten.",
      hu: "Burgasz Bulgária negyedik legnagyobb városa, a déli Fekete-tenger partvidékének gazdasági és kulturális központja. A város jelentos tengeri kikötojérol, olajfinomítójáról és fontos közlekedési csomópontként betöltött szerepérol ismert. Burgasz egyik legfobb látnivalója a Tengeri kert, egy kiterjedt park, amely a part mentén húzódik, gondozott sétányaival, szobraival és a tengerre nyíló kilátással hívogatja a látogatókat. Burgaszt három tó veszi körül – az Atanaszovo-tó, a Burgaszi-tó és a Mandra-tó –, amelyek fontos természetvédelmi területek és számos madárfaj menedékhelyei. A város élénk sétálóutcával rendelkezik, ahol számos üzlet, kávézó és friss halat, valamint helyi specialitásokat kínáló étterem található. Kulturális szempontból Burgaszt különféle fesztiválok jellemzik, köztük a híres homokszobor-fesztivál. A népszeru üdülohelyek, mint Szozopol és Neszebar közelsége Burgaszt ideális kiindulóponttá teszi a régió felfedezéséhez. A város ötvözi az ipari fejlodést a nyugodt tengerparti légkörrel, magas életminoséget és változatos szabadidos lehetoségeket kínálva a látogatóknak.",
      ro: "Burgas este al patrulea ora? ca marime din Bulgaria ?i centrul economic ?i cultural al coastei de sud a Marii Negre. Ora?ul este cunoscut pentru portul sau maritim important, rafinaria de petrol ?i rolul sau de nod de transport major. Un punct culminant special al ora?ului Burgas este Gradina Marii, un parc vast care se întinde de-a lungul coastei ?i invita la relaxare cu aleile sale bine între?inute, sculpturile ?i vederea la mare. Burgas este, de asemenea, înconjurat de trei lacuri – Lacul Atanasovsko, Lacul Burgas ?i Lacul Mandra – care sunt rezerva?ii naturale importante ?i refugii pentru numeroase specii de pasari. Ora?ul ofera o zona pietonala vibranta, cu numeroase magazine, cafenele ?i restaurante care servesc pe?te proaspat ?i specialita?i locale. Din punct de vedere cultural, Burgas este marcat de diverse festivaluri, inclusiv celebrul festival de sculpturi în nisip. Proximitatea fa?a de sta?iuni populare precum Sozopol ?i Nesebar face din Burgas un punct de plecare ideal pentru explorari în regiune. Ora?ul îmbina progresul industrial cu o atmosfera maritima relaxata, oferind vizitatorilor o calitate ridicata a vie?ii ?i posibilita?i diverse de petrecere a timpului liber.",
      en: "Burgas is the fourth-largest city in Bulgaria and the economic and cultural center of the southern Black Sea coast. The city is known for its significant seaport, oil refinery, and role as a major transport hub. A special highlight of Burgas is the Sea Garden, an expansive park stretching along the coast, inviting visitors to linger with its well-kept avenues, sculptures, and sea views. Burgas is also surrounded by three lakes—Lake Atanasovsko, Lake Burgas, and Lake Mandra—which are important nature reserves and sanctuaries for numerous bird species. The city offers a vibrant pedestrian zone with many shops, cafes, and restaurants serving fresh fish and local specialties. Culturally, Burgas is characterized by various festivals, including the famous Sand Sculpture Festival. Its proximity to popular resorts like Sozopol and Nessebar makes Burgas an ideal starting point for exploring the region. The city combines industrial progress with a relaxed maritime atmosphere, offering visitors a high quality of life and diverse leisure opportunities."
    },
    facts: {
      de: ["Status: Wirtschaftszentrum Südbulgariens", "Lage: Am Golf von Burgas", "Natur: Umgeben von drei Seen", "Wahrzeichen: Meeresgarten (Morska Gradina)", "Wirtschaft: Größte Ölraffinerie des Balkans", "Kultur: Sandskulpturen-Festival", "Verkehr: Internationaler Flughafen Burgas", "Geschichte: Antike Siedlung Pyrgos"],
      hu: ["Státusz: Dél-Bulgária gazdasági központja", "Fekvés: A Burgaszi-öböl partján", "Természet: Három tó veszi körül", "Jelkép: Tengeri kert (Morszka Gradina)", "Gazdaság: A Balkán legnagyobb olajfinomítója", "Kultúra: Homokszobor-fesztivál", "Közlekedés: Burgaszi nemzetközi repülotér", "Történelem: Az ókori Pürgosz település"],
      ro: ["Simbol: Cetatea Baba Vida", "Loca?ie: Pe malul Dunarii", "Istorie: Vechiul Bononia", "Religie: Catedrala Sf. Dumitru", "Transport: Podul Dunarea 2 spre România", "Cultura: Sinagoga istorica"],
      en: ["Status: Economic center of Southern Bulgaria", "Location: On the Gulf of Burgas", "Nature: Surrounded by three lakes", "Landmark: Sea Garden (Morska Gradina)", "Economy: Largest oil refinery in the Balkans", "Culture: Sand Sculpture Festival", "Transport: Burgas International Airport", "History: Ancient settlement of Pyrgos"]
    },
    descriptionAdvanced: {
      de: "Burgas ist das pulsierende Tor zur südlichen bulgarischen Schwarzmeerküste und verbindet seine Rolle als bedeutendes Industriezentrum mit einem reichen kulturellen und natürlichen Profil. Die Stadt wird von drei Seen umschlossen – Atanasowo, Burgas und Mandra –, die wichtige ökologische Korridore für Zugvögel auf der Via Pontica bilden. Herzstück des städtischen Lebens ist der Meeresgarten, ein liebevoll gestalteter Küstenpark mit Panoramablick auf die Bucht von Burgas. Das ganze Jahr über finden internationale Veranstaltungen statt, darunter das spektakuläre Sandskulpturen-Festival und das Musikfestival Spirit of Burgas. Mit der größten Erdölraffinerie Südosteuropas und einem strategischen Tiefseehafen ist die Stadt eine Säule der nationalen Wirtschaft. Moderne Fußgängerzonen und die Nähe zum UNESCO-Welterbe Nessebar machen Burgas zu einem vielseitigen Ziel für Geschäfts- und Urlaubsreisende.",
      hu: "Burgasz a déli bolgár Fekete-tenger partvidékének lükteto kapuja, amely jelentos ipari központi szerepét gazdag kulturális és természeti kínálattal egyensúlyozza ki. A várost három tó – Atanaszovo, Burgaszi-tó és Mandra – öleli körül, amelyek a Via Pontica vonulásrendszer fontos ökológiai folyosói. A városi élet központja a Tengeri-kert, gondosan ápolt parti park, ahonnan páratlan kilátás nyílik a Burgaszi-öbölre. Az év során számos nemzetközi eseménynek ad otthont, köztük a látványos homokszobor-fesztiválnak és a Spirit of Burgas zenei fesztiválnak. Délkelet-Európa legnagyobb olajfinomítójával és stratégiai mélyvízi kikötojével a város a nemzetgazdaság egyik tartópillére. Modern sétálóutcái és Neszebár UNESCO-örökség közelsége sokoldalú úti céllá teszik üzleti és turisztikai célokra egyaránt.",
      ro: "Burgas este poarta vibranta catre coasta sudica a Marii Negre din Bulgaria, îmbinând rolul de important centru industrial cu un bogat profil cultural ?i natural. Ora?ul este înconjurat în mod unic de trei lacuri — Atanasovsko, Burgas ?i Mandra — coridoare ecologice esen?iale pentru pasarile migratoare aflate pe ruta Via Pontica. Inima vie?ii urbane este Gradina Marii, un parc costier amenajat cu grija, oferind priviri panoramice asupra Golfului Burgas. De-a lungul anului, ora?ul gazduie?te numeroase evenimente interna?ionale, inclusiv spectaculosul Festival al Sculpturilor în Nisip ?i festivalul Spirit of Burgas. Cu cea mai mare rafinarie de petrol din sud-estul Europei ?i un port strategic de adâncime, ora?ul este un pilon al economiei na?ionale. Zonele pietonale moderne ?i apropierea de Nesebarul aflat în patrimoniul UNESCO fac din Burgas o destina?ie versatila pentru afaceri ?i turism deopotriva.",
      en: "Burgas functions as the vibrant gateway to the southern Bulgarian Black Sea coast, balancing its role as a major industrial powerhouse with a rich cultural and natural profile. The city is uniquely encircled by three distinct lakes—Atanasovsko, Burgas, and Mandra—which serve as vital ecological corridors for migratory birds on the Via Pontica route. The heart of the city's leisure life is the Sea Garden, a meticulously landscaped coastal park that offers panoramic views of the Burgas Bay. Throughout the year, Burgas hosts numerous international events, including the spectacular Sand Sculpture Festival and the Spirit of Burgas music festival. As home to the largest oil refinery in Southeastern Europe and a strategic deep-water port, the city is a pillar of the national economy. Its modern pedestrian streets and proximity to the UNESCO-listed town of Nessebar make Burgas a versatile destination for both business and tourism."
    },
    factsAdvanced: {
      de: [
        "Die Seen von Burgas bilden den größten Feuchtgebietskomplex Bulgariens mit rund 95 Quadratkilometern.",
        "Am Atanasowo-See lassen sich über 317 Vogelarten beobachten – mehr als 70 % aller in Bulgarien vorkommenden Arten.",
        "Der Hafen von Burgas ist nach dem Frachtumschlag der größte Seehafen Bulgariens.",
        "Beim Sandskulpturen-Festival in Burgas werden jeden Sommer über 2.500 Tonnen spezieller Sand verarbeitet.",
        "Burgas war die erste bulgarische Stadt mit einem integrierten öffentlichen Fahrrad-Sharing-System.",
        "Der Meeresgarten erstreckt sich über etwa 72 Hektar entlang der Küste.",
        "Der Flughafen Burgas wickelt in der Hauptsaison über 3 Millionen Passagiere ab und ist ein wichtiger Charterstandort.",
        "Die Insel St. Anastasia, 6 km vor der Küste von Burgas, ist die einzige bewohnte Insel im bulgarischen Schwarzen Meer."
      ],
      hu: [
        "A Burgaszi-tórendszer Bulgária legnagyobb vizes élohelye, mintegy 95 négyzetkilométeren terül el.",
        "Az Atanaszovo-tónál több mint 317 madárfaj figyelheto meg, ami a Bulgáriában eloforduló fajok több mint 70%-a.",
        "A Burgaszi kiköto a teljes árumozgás alapján Bulgária legnagyobb tengeri kikötoje.",
        "A burgaszi homokszobor-fesztiválon évente több mint 2500 tonna speciális homokot használnak fel.",
        "Burgasz volt az elso bolgár város, amely integrált közbringa-rendszert vezetett be.",
        "A Tengeri-kert mintegy 72 hektáron húzódik a tengerpart mentén.",
        "A Burgaszi repülotér foszezonban több mint 3 millió utast szolgál ki, fontos charterközpont.",
        "Szent Anasztázia szigete, a parttól 6 km-re, az egyetlen lakott sziget a bolgár Fekete-tenger felségvizein."
      ],
      ro: [
        "Lacurile din Burgas formeaza cel mai mare complex de zone umede din Bulgaria, acoperind aproximativ 95 de kilometri patra?i.",
        "La Lacul Atanasovsko pot fi observate peste 317 specii de pasari, adica mai mult de 70 % din toate speciile din Bulgaria.",
        "Portul Burgas este cel mai mare port maritim din Bulgaria dupa volumul total de marfa.",
        "Festivalul Sculpturilor în Nisip de la Burgas folose?te în fiecare vara peste 2.500 de tone de nisip special.",
        "Burgas a fost primul ora? bulgar care a introdus un sistem integrat public de bike-sharing.",
        "Gradina Marii se întinde pe aproximativ 72 de hectare de-a lungul coastei.",
        "Aeroportul Burgas gestioneaza peste 3 milioane de pasageri în vârf de sezon ?i este un important hub charter.",
        "Insula Sfânta Anastasia, situata la 6 km de coasta ora?ului Burgas, este singura insula locuita din Marea Neagra bulgara."
      ],
      en: [
        "The Burgas lakes form the largest wetland complex in Bulgaria, covering approximately 95 square kilometers.",
        "Over 317 bird species can be observed at Lake Atanasovsko, which is more than 70% of all bird species in Bulgaria.",
        "The Port of Burgas is the largest seaport in Bulgaria by total cargo volume.",
        "The Sand Sculpture Festival in Burgas uses over 2,500 tons of specialized sand every summer.",
        "Burgas was the first Bulgarian city to introduce an integrated public bike-sharing system.",
        "The city's Sea Garden covers an area of approximately 72 hectares along the coast.",
        "Burgas Airport serves as a major charter flight hub, handling over 3 million passengers during the peak summer season.",
        "St. Anastasia Island, located 6 km off the coast of Burgas, is the only inhabited island in the Bulgarian Black Sea."
      ]
    },
    image: "/geo-images/bulgaria/city-burgas.webp"
  },
  {
    id: "city-veliko-tarnovo",
    type: "city",
    parent: "bg-country",
    coords: [25.6172, 43.0757],
    name: { de: "Weliko Tarnowo", hu: "Veliko Tarnovo", ro: "Veliko Târnovo", en: "Veliko Tarnovo" },
    description: {
      de: "Mittelalterliche Hauptstadt mit der Festung Tsarevets über dem Jantra-Tal.",
      hu: "Középkori fováros, a Carevec eroddel a Jantra-völgy fölött.",
      ro: "Capitala medievala, cu fortarea?a ?areve? deasupra vaii Yantra.",
      en: "A medieval capital with Tsarevets Fortress above the Yantra valley."
    },
    facts: {
      de: ["Historische Zarenstadt", "Tsarevets-Festung", "Malerische Hügelstadt"],
      hu: ["Történelmi cárváros", "Carevec erod", "Festoi hegyoldali város"],
      ro: ["Ora? istoric al ?arilor", "Cetatea ?areve?", "Ora? pitoresc pe dealuri"],
      en: ["Historic city of the tsars", "Tsarevets Fortress", "Scenic hill city"]
    },
    descriptionAdvanced: {
      de: "Weliko Tarnowo, die \\\\\\\"Stadt der Zaren\\\\\\\", gehört zu den optisch beeindruckendsten Städten Bulgariens und liegt auf drei Hügeln hoch über der gewundenen Jantra. Als ehemalige Hauptstadt des Zweiten Bulgarischen Reiches (1185–1396) war sie ein bedeutendes politisches und kulturelles Zentrum des Balkans. Das Stadtbild wird von der gewaltigen Festung Zarewez geprägt, die einst Königspalast und Patriarchat beherbergte. Das historische Viertel bietet enge, kopfsteingepflasterte Gassen mit traditionellen Häusern aus der bulgarischen Wiedergeburt sowie Handwerksläden in der berühmten Samowodska Tscharschija. Jeden Abend erwacht der Burgberg durch eine spektakuläre Ton- und Lichtschau zum Leben, die die bewegte Geschichte des bulgarischen Staates erzählt. Weliko Tarnowo bleibt ein Symbol bulgarischer Identität und zieht Besucher mit mittelalterlicher Pracht und einzigartiger Terrassenarchitektur an.",
      hu: "Veliko Tarnovo, a \\\\\\\"cárok városa\\\\\\\", Bulgária egyik leglátványosabb települése: három dombra épült, magasan a kanyargó Jantra folyó fölött. A Második Bolgár Birodalom (1185–1396) egykori fovárosaként a Balkán fontos politikai és kulturális központja volt. A városképet a hatalmas Carevec erod uralja, amely valaha a királyi palotának és a patriarkátusnak adott otthont. A történelmi negyed szuk, macskaköves utcáit hagyományos újjászületés-kori házak és kézmuves muhelyek szegélyezik a híres Szamovodszka Csarsijában. Minden este a Carevec-domb látványos hang- és fényjáték keretében elevenedik meg, mely a bolgár állam viharos történelmét meséli el. Veliko Tarnovo a bolgár nemzeti büszkeség jelképe maradt, középkori pompájával és egyedülálló teraszos építészetével vonzza a látogatókat.",
      ro: "Veliko Târnovo, \\\\\\\"Ora?ul ?arilor\\\\\\\", este unul dintre cele mai spectaculoase ora?e ale Bulgariei, situat dramatic pe trei coline deasupra meandrelor râului Yantra. Fosta capitala a celui de-al Doilea ?arat Bulgar (1185–1396), a fost un important centru politic ?i cultural al Balcanilor. Ora?ul este dominat de impunatoarea Cetate Tsarevets, care odinioara gazduia palatul regal ?i patriarhia. Districtul istoric este strabatut de stradu?e înguste pavate cu piatra, marginite de case tradi?ionale din perioada Rena?terii bulgare ?i ateliere me?te?ugare?ti pe celebra Samovodska Charshiya. În fiecare seara, dealul Tsarevets prinde via?a printr-un spectaculos show de sunet ?i lumini care nareaza istoria zbuciumata a statului bulgar. Veliko Târnovo ramâne un simbol al identita?ii ?i mândriei na?ionale bulgare, atragând vizitatorii prin grandoarea sa medievala ?i arhitectura sa unica în terase.",
      en: "Veliko Tarnovo, the 'City of the Tsars,' is one of Bulgaria's most visually stunning cities, known for its dramatic setting on three hills above the winding Yantra River. As the former capital of the Second Bulgarian Empire (1185–1396), it was a major political and cultural center of the Balkans. The city is dominated by the Tsarevets Fortress, a massive medieval stronghold that once housed the royal palace and the patriarchate. The historic district features narrow cobblestone streets lined with traditional National Revival houses and artisan workshops on the famous Samovodska Charshiya. Every evening, the Tsarevets Hill comes alive with a spectacular 'Sound and Light' show that narrates the turbulent history of the Bulgarian state. Veliko Tarnovo remains a symbol of Bulgarian national identity and pride, attracting visitors with its medieval grandeur and unique terraced architecture."
    },
    factsAdvanced: {
      de: [
        "In Weliko Tarnowo wurde 1879 die erste bulgarische Verfassung (die Tarnowo-Verfassung) ausgearbeitet.",
        "Die Mauer der Festung Zarewez war ursprünglich über 1.100 Meter lang und bis zu 3 Meter dick.",
        "Die Jantra bildet rund um die Hügel Zarewez, Trapeziza und Sweta Gora drei deutlich getrennte Halbinseln.",
        "Im 14. Jahrhundert galt die Stadt in Bezug auf Pracht und Macht als \\\\\\\"zweite Stadt nach Konstantinopel\\\\\\\".",
        "Die Patriarchenkathedrale auf dem Zarewez-Hügel hat besondere moderne Fresken aus dem Jahr 1985.",
        "In der Stadt stehen über 40 Kirchen aus dem Mittelalter und der bulgarischen Wiedergeburt.",
        "Die Samowodska Tscharschija ist seit dem 19. Jahrhundert Zentrum für traditionelles Handwerk wie Töpferei und Kupferschmiedekunst.",
        "Die Universität \\\\\\\"Hl. Kyrill und Method\\\\\\\" ist die zweitgrößte Universität Bulgariens."
      ],
      hu: [
        "Veliko Tarnovóban dolgozták ki 1879-ben az elso bolgár alkotmányt (Tarnovói alkotmány).",
        "A Carevec-erod fala eredetileg több mint 1100 méter hosszú és helyenként 3 méter vastag volt.",
        "A Jantra folyó három különálló félszigetet képez Carevec, Trapezica és Szveta Gora dombja körül.",
        "A 14. században a várost pompája és hatalma alapján \\\\\\\"Konstantinápoly után a második városként\\\\\\\" emlegették.",
        "A Carevec-dombon álló Patriarchális székesegyház különleges modern freskókkal büszkélkedhet, amelyeket 1985-ben festettek.",
        "A városban ma is több mint 40 középkori és újjászületés-kori templom áll.",
        "A Szamovodszka Csarsija piac a 19. század óta a hagyományos kézmuvesség, a fazekasság és a rézmuvesség központja.",
        "A városban muködo Szent Cirill és Metód Egyetem Bulgária második legnagyobb egyeteme."
      ],
      ro: [
        "La Veliko Târnovo a fost redactata în 1879 prima Constitu?ie a Bulgariei (Constitu?ia de la Târnovo).",
        "Zidul Ceta?ii Tsarevets avea ini?ial peste 1.100 de metri lungime ?i pâna la 3 metri grosime.",
        "Râul Yantra formeaza trei peninsule distincte în jurul colinelor Tsarevets, Trapezitsa ?i Sveta Gora.",
        "În secolul al XIV-lea, ora?ul era descris drept \\\\\\\"al doilea ora? dupa Constantinopol\\\\\\\" ca frumuse?e ?i putere.",
        "Catedrala Patriarhala de pe colina Tsarevets are fresce moderne unicate, pictate în 1985.",
        "În ora? se pastreaza peste 40 de biserici din perioada medievala ?i a Rena?terii bulgare.",
        "Pia?a Samovodska Charshiya este, înca din secolul al XIX-lea, un centru pentru me?te?uguri tradi?ionale precum olaritul ?i aramaria.",
        "Universitatea \\\\\\\"Sfin?ii Chiril ?i Metodiu\\\\\\\" din ora? este a doua ca marime din Bulgaria."
      ],
      en: [
        "Veliko Tarnovo was the site of the drafting of the first Bulgarian Constitution (the Tarnovo Constitution) in 1879.",
        "The Tsarevets Fortress wall was originally over 1,100 meters long and up to 3 meters thick.",
        "The Yantra River creates three distinct peninsulas around the hills of Tsarevets, Trapezitsa, and Sveta Gora.",
        "In the 14th century, the city was described as 'the second city after Constantinople' in terms of beauty and power.",
        "The Patriarchal Cathedral on top of Tsarevets Hill features unique modern frescoes painted in 1985.",
        "There are over 40 churches from the medieval and National Revival periods still standing in the city.",
        "The Samovodska Charshiya market has been a center for traditional crafts like pottery and copper-smithing since the 19th century.",
        "The city's university, St. Cyril and St. Methodius University, is the second largest in Bulgaria."
      ]
    },
    image: "/geo-images/bulgaria/city-veliko-tarnovo.webp"
  },
  {
    id: "city-vidin",
    type: "city",
    parent: "bg-country",
    coords: [22.8828, 43.9930],
    name: { de: "Vidin", hu: "Vidin", ro: "Vidin", en: "Vidin" },
    description: {
      de: "Vidin, am Ufer der Donau im Nordwesten Bulgariens gelegen, ist eine Stadt mit einer reichen mittelalterlichen Geschichte und einer strategischen Bedeutung als Grenzstadt. Das unbestrittene Wahrzeichen ist die Festung Baba Vida, die einzige vollständig erhaltene mittelalterliche Burg des Landes, die majestätisch über dem Fluss thront. Vidin verbindet seinen historischen Charme mit einer entspannten Atmosphäre an der Uferpromenade, die zu Spaziergängen mit Blick auf Rumänien einlädt. Die Stadt beherbergt zudem bedeutende religiöse Bauwerke wie die Kathedrale des Heiligen Demetrius und die Synagoge von Vidin, die derzeit restauriert wird. Als Tor zum Nordwesten bietet Vidin Einblicke in eine Region, die durch ihre kulturelle Vielfalt und ihre Lage an der Donau geprägt ist. Die Stadt ist ein wichtiger Halt für Flusskreuzfahrten und ein Ort, an dem Geschichte und Moderne aufeinandertreffen.",
      hu: "Vidin Bulgária északnyugati részén, a Duna partján fekvo város, amely gazdag középkori múlttal és határvárosi stratégiai jelentoséggel bír. Legfobb látnivalója a Baba Vida erod, az ország egyetlen teljesen épen maradt középkori vára, amely fenségesen magasodik a folyó fölé. Vidin ötvözi történelmi báját a Duna-parti sétány nyugodt légkörével, ahonnan kilátás nyílik Romániára. A város jelentos vallási épületeknek is otthont ad, mint például a Szent Demeter-székesegyház és a vidini zsinagóga, amely jelenleg felújítás alatt áll. Északnyugat kapujaként Vidin betekintést nyújt egy olyan régióba, amelyet a kulturális sokszínuség és a dunai elhelyezkedés határoz meg. A város a folyami hajóutak fontos állomása, ahol a történelem és a jelen találkozik.",
      ro: "Vidin, situat pe malul Dunarii în nord-vestul Bulgariei, este un ora? cu o istorie medievala bogata ?i o importan?a strategica ca ora? de frontiera. Simbolul incontestabil este Cetatea Baba Vida, singura castel medieval complet conservat din ?ara, care domina maiestuos fluviul. Vidin combina farmecul sau istoric cu o atmosfera relaxata pe faleza Dunarii, care invita la plimbari cu vedere spre România. Ora?ul gazduie?te, de asemenea, edificii religioase importante, cum ar fi Catedrala Sfântul Dumitru ?i Sinagoga din Vidin, aflata în prezent în restaurare. Ca poarta catre nord-vest, Vidin ofera perspective asupra unei regiuni marcate de diversitate culturala ?i de pozi?ia sa pe Dunare. Ora?ul este o oprire importanta pentru croazierele fluviale ?i un loc unde istoria se întâlne?te cu modernitatea.",
      en: "Vidin, located on the banks of the Danube in northwestern Bulgaria, is a city with a rich medieval history and strategic importance as a border town. The undisputed landmark is the Baba Vida Fortress, the only entirely preserved medieval castle in the country, majestically overlooking the river. Vidin combines its historical charm with a relaxed atmosphere on the Danube waterfront, inviting strolls with views of Romania. The city also houses significant religious buildings, such as the Cathedral of Saint Demetrius and the Vidin Synagogue, which is currently under restoration. As a gateway to the northwest, Vidin offers insights into a region shaped by cultural diversity and its location on the Danube. The city is an important stop for river cruises and a place where history and modernity meet."
    },
    facts: {
      de: ["Wahrzeichen: Festung Baba Vida", "Lage: Am Ufer der Donau", "Geschichte: Antikes Bononia", "Religion: Kathedrale St. Demetrius", "Verkehr: Donaubrücke 2 nach Rumänien", "Kultur: Historische Synagoge"],
      hu: ["Jelkép: Baba Vida erod", "Fekvés: A Duna partján", "Történelem: Az ókori Bononia", "Vallás: Szent Demeter-székesegyház", "Közlekedés: Duna-híd 2 Románia felé", "Kultúra: Történelmi zsinagóga"],
      ro: ["Simbol: Cetatea Baba Vida", "Loca?ie: Pe malul Dunarii", "Istorie: Vechiul Bononia", "Religie: Catedrala Sf. Dumitru", "Transport: Podul Dunarea 2 spre România", "Cultura: Sinagoga istorica"],
      en: ["Landmark: Baba Vida Fortress", "Location: On the banks of the Danube", "History: Ancient Bononia", "Religion: St. Demetrius Cathedral", "Transport: Danube Bridge 2 to Romania", "Culture: Historic Synagogue"]
    },
    descriptionAdvanced: {
      de: "Vidin ist ein historisches Tor zum äußersten Nordwesten Bulgariens und liegt am Südufer der Donau. Das Wahrzeichen der Stadt ist die Festung Baba Vida – die einzige vollständig erhaltene mittelalterliche Burg des Landes, mit massiven Wassergräben und doppelten Mauerringen, die die Region jahrhundertelang schützten. Historisch war Vidin ein bedeutendes römisches Zentrum namens Bononia und später Hauptstadt des Vidiner Zarentums. Heute bietet die Stadt ein ruhiges Flusspromenadenerlebnis mit weitläufigem Donau-Park und der eindrucksvollen Donaubrücke 2, die Bulgarien mit dem rumänischen Calafat verbindet. Das architektonische Erbe spiegelt die multikulturelle Vergangenheit wider, darunter die majestätische Kathedrale St. Demetrius – die zweitgrößte Bulgariens – und die Ruinen einer prachtvollen Synagoge aus dem 19. Jahrhundert. Für Reisende auf der Donauroute ist Vidin ein unverzichtbarer Halt mit einer einzigartigen Mischung aus Militärgeschichte und Flussidylle.",
      hu: "Vidin Bulgária északnyugati határvidékének történelmi kapuja, a Duna déli partján fekvo város. Ékszere a Baba Vida erod – az ország egyetlen teljesen épen maradt középkori vára –, melyet vizesárok és kettos falgyuru védelmezett évszázadokon át. Történelmileg Vidin a Bononia néven ismert jelentos római központ, késobb a Vidini Cárság fovárosa volt. Ma nyugodt folyóparti hangulatot kínál tágas dunai parkjával és a lenyugözo Duna-híd 2-vel, amely Bulgáriát a romániai Calafattal köti össze. A város építészeti öröksége tükrözi multikulturális múltját: a méltóságteljes Szent Demeter-székesegyház – Bulgária második legnagyobb temploma – és egy 19. századi pompás zsinagóga romjai egyaránt láthatók. A Duna mentén utazók számára Vidin nélkülözhetetlen állomás, ahol a katonai történelem és a folyóparti szépség egyedi módon találkozik.",
      ro: "Vidin este o poarta istorica situata în extremitatea de nord-vest a Bulgariei, pe malul sudic al Dunarii. Bijuteria ora?ului este Cetatea Baba Vida — singurul castel medieval pastrat integral din ?ara, cu ?an?uri impunatoare ?i ziduri duble care au aparat regiunea timp de secole. Din punct de vedere istoric, Vidin a fost un important centru roman numit Bononia, iar mai târziu capitala ?aratului de Vidin. Astazi, ora?ul ofera o experien?a lini?tita pe faleza Dunarii, cu un parc întins ?i impresionantul Pod 2 al Dunarii, care conecteaza Bulgaria cu Calafat, în România. Patrimoniul arhitectural reflecta trecutul multicultural: maiestuoasa Catedrala Sfântul Dumitru — a doua ca marime din Bulgaria — ?i ruinele unei sinagogi grandioase din secolul al XIX-lea. Pentru turi?tii care exploreaza ruta Dunarii, Vidin este o oprire esen?iala, prin combina?ia unica de istorie militara ?i frumuse?e fluviala.",
      en: "Vidin is a historic gateway located in the far northwest of Bulgaria, situated on the southern bank of the Danube River. The city's crown jewel is the Baba Vida Fortress, which stands as the only entirely preserved medieval castle in the country, featuring sturdy moats and twin walls that defended the region for centuries. Historically, Vidin was a major Roman center known as Bononia and later served as the capital of the Vidin Tsardom. Today, the city offers a peaceful waterfront experience with its sprawling riverside park and the impressive Danube Bridge 2, which connects Bulgaria to Calafat, Romania. Vidin's architectural heritage is a testament to its multicultural past, including the majestic Cathedral of St. Demetrius—the second largest in Bulgaria—and the ruins of a grand 19th-century synagogue. For travelers exploring the Danube route, Vidin is an essential stop for its unique blend of military history and riverine beauty."
    },
    factsAdvanced: {
      de: [
        "Die Festung Baba Vida wurde auf den Ruinen der antiken römischen Festung Bononia errichtet.",
        "Die 2013 eröffnete Donaubrücke 2 ist 1.971 Meter lang und nimmt sowohl Straßen- als auch Bahnverkehr auf.",
        "Die St.-Demetrius-Kathedrale in Vidin ist nach der Alexander-Newski-Kathedrale in Sofia das zweitgrößte christliche Gotteshaus Bulgariens.",
        "Vidin war im späten 14. Jahrhundert unter Iwan Stratsimir die Hauptstadt des unabhängigen Zarentums von Vidin.",
        "Die 1894 im neogotischen Stil erbaute Synagoge von Vidin galt einst als zweitgrößte des Landes.",
        "Im historischen Stadtkern befinden sich eine gut erhaltene Kreuzmoschee und eine Bibliothek aus der Zeit von Osman Pazvantoglu.",
        "Der Donau-Park (Dunavski Park) zählt zu den ältesten Parks Bulgariens und wurde Ende des 19. Jahrhunderts angelegt.",
        "Die römischen Ruinen von Castra Martis liegen nur 30 km von Vidin entfernt im Ort Kula."
      ],
      hu: [
        "A Baba Vida erod a Bononia nevu ókori római erod romjaira épült.",
        "A 2013-ban átadott Duna-híd 2 1971 méter hosszú, és közúti, valamint vasúti forgalmat is bonyolít.",
        "A vidini Szent Demeter-székesegyház Bulgária második legnagyobb keresztény temploma a szófiai Alekszandr Nyevszkij után.",
        "Vidin a 14. század végén Ivan Sztracimir alatt a független Vidini Cárság fovárosa volt.",
        "Az 1894-ben neogótikus stílusban épült vidini zsinagóga egykor Bulgária második legnagyobb zsinagógája volt.",
        "A történelmi belvárosban máig fennmaradt egy keresztalakú mecset és Oszmán Pazvantoglu idején épült könyvtár.",
        "A Dunavszki Park az ország egyik legrégebbi parkja, a 19. század végén alakították ki.",
        "A Castra Martis római romok mindössze 30 km-re találhatók Vidintol, Kula településen."
      ],
      ro: [
        "Cetatea Baba Vida a fost ridicata pe ruinele vechii fortare?e romane Bononia.",
        "Podul 2 al Dunarii, deschis în 2013, are o lungime de 1.971 de metri ?i suporta atât trafic rutier, cât ?i feroviar.",
        "Catedrala Sfântul Dumitru din Vidin este al doilea cel mai mare laca? de cult cre?tin din Bulgaria, dupa Sfântul Alexandru Nevski din Sofia.",
        "Vidin a fost capitala ?aratului independent de Vidin sub Ivan Stratsimir, la sfâr?itul secolului al XIV-lea.",
        "Sinagoga din Vidin, construita în 1894 în stil neogotic, era cândva a doua ca marime din Bulgaria.",
        "Centrul istoric pastreaza o mo?chee în forma de cruce ?i o biblioteca ridicate de Osman Pazvantoglu.",
        "Parcul Dunavski este unul dintre cele mai vechi parcuri din ?ara, amenajat la sfâr?itul secolului al XIX-lea.",
        "Ruinele romane Castra Martis se afla la doar 30 km de Vidin, în ora?ul Kula."
      ],
      en: [
        "The Baba Vida Fortress was built upon the ruins of the ancient Roman fortress of Bononia.",
        "The Danube Bridge 2, opened in 2013, is 1,971 meters long and carries both road and rail traffic.",
        "The St. Demetrius Cathedral in Vidin is the second largest Christian temple in Bulgaria after Sofia's St. Alexander Nevsky.",
        "Vidin served as the capital of the independent Tsardom of Vidin under Ivan Stratsimir in the late 14th century.",
        "The Vidin Synagogue was once the second largest in Bulgaria, built in 1894 in a Neo-Gothic style.",
        "The city's historic core contains a well-preserved cross-shaped mosque and library built by Osman Pazvantoglu.",
        "Vidin's Riverside Park (Dunavski Park) is one of the oldest parks in the country, designed in the late 19th century.",
        "The Roman ruins of Castra Martis are located just 30 km from Vidin in the town of Kula."
      ]
    },
    image: "/geo-images/bulgaria/city-vidin.webp"
  },
  {
    id: "city-vratsa",
    type: "city",
    parent: "bg-country",
    coords: [23.5588, 43.2105],
    name: { de: "Vratsa", hu: "Vraca", ro: "Vratsa", en: "Vratsa" },
    description: {
      de: "Vraca, am Fuße des Balkangebirges gelegen, ist ein Paradies für Naturliebhaber und Abenteurer. Die Stadt ist bekannt für ihre dramatische Lage unter den steilen Felswänden des Vratsata-Passes, der als einer der höchsten vertikalen Felsen auf dem Balkan gilt. Vraca dient als idealer Ausgangspunkt für Wanderungen, Klettern und Höhlenforschung im Naturpark Vrachanski Balkan. Ein besonderes Highlight ist die Ledenika-Höhle, eine der meistbesuchten Höhlen Bulgariens, die für ihre beeindruckenden Tropfsteinformationen bekannt ist. Die Stadt selbst bietet ein ruhiges Ambiente mit einem historischen Museum, das wertvolle thrakische Schätze beherbergt. Vraca verbindet alpine Naturerlebnisse mit regionaler Geschichte und ist ein Muss für Reisende, die die wilde Schönheit Nordwestbulgariens entdecken möchten.",
      hu: "Vraca a Balkán-hegység lábánál fekvo város, a természetkedvelok és kalandvágyók paradicsoma. A város drámai fekvésérol ismert a Vracata-szurdok meredek sziklafalai alatt, amely a Balkán egyik legmagasabb függoleges sziklájának számít. Vraca ideális kiindulópont túrázáshoz, sziklamászáshoz és barlangászathoz a Vracsanszki Balkán Natúrparkban. Különleges látnivaló a Ledenika-barlang, Bulgária egyik leglátogatottabb barlangja, amely lenyugözo cseppkoképzodményeirol híres. Maga a város nyugodt légkört kínál történelmi múzeumával, amely értékes trák kincseket oriz. Vraca ötvözi az alpesi természet élményét a regionális történelemmel, és kötelezo célpont azoknak, akik Északnyugat-Bulgária vad szépségét szeretnék felfedezni.",
      ro: "Vratsa, situat la poalele Mun?ilor Balcani, este un paradis pentru iubitorii de natura ?i aventurieri. Ora?ul este cunoscut pentru loca?ia sa dramatica sub pere?ii de stânca abrup?i ai pasului Vratsata, considerat unul dintre cele mai înalte stânci verticale din Balcani. Vratsa serve?te ca punct de plecare ideal pentru drume?ii, alpinism ?i speologie în Parcul Natural Vrachanski Balkan. Un punct culminant special este Pe?tera Ledenika, una dintre cele mai vizitate pe?teri din Bulgaria, cunoscuta pentru forma?iunile sale impresionante de stalactite ?i stalagmite. Ora?ul în sine ofera o ambian?a lini?tita, cu un muzeu istoric care gazduie?te comori trace valoroase. Vratsa îmbina experien?ele naturale alpine cu istoria regionala ?i este o vizita obligatorie pentru calatorii care doresc sa descopere frumuse?ea salbatica a Bulgariei de nord-vest.",
      en: "Vratsa, nestled at the foot of the Balkan Mountains, is a paradise for nature lovers and adventurers. The city is famous for its dramatic setting beneath the steep cliffs of the Vratsata Pass, considered one of the highest vertical rocks in the Balkans. Vratsa serves as an ideal base for hiking, climbing, and caving in the Vrachanski Balkan Nature Park. A special highlight is the Ledenika Cave, one of Bulgaria's most visited caves, known for its impressive limestone formations. The city itself offers a quiet ambiance with a historical museum housing valuable Thracian treasures. Vratsa combines alpine nature experiences with regional history and is a must-see for travelers wishing to discover the wild beauty of northwestern Bulgaria."
    },
    facts: {
      de: ["Lage: Am Fuß des Balkangebirges", "Natur: Vratsata-Schlucht", "Highlight: Ledenika-Höhle", "Sport: Zentrum für Klettern und Wandern", "Geschichte: Thrakischer Goldschatz von Rogozen", "Park: Naturpark Vrachanski Balkan"],
      hu: ["Fekvés: A Balkán-hegység lábánál", "Természet: Vraca-szurdok", "Látnivaló: Ledenika-barlang", "Sport: Sziklamászó és túraközpont", "Történelem: Rogozini trák aranykincs", "Park: Vracsanszki Balkán Natúrpark"],
      ro: ["Loca?ie: La poalele Mun?ilor Balcani", "Natura: Defileul Vratsata", "Atrac?ie: Pe?tera Ledenika", "Sport: Centru pentru alpinism ?i drume?ii", "Istorie: Tezaurul tracic de la Rogozen", "Parc: Parcul Natural Vrachanski Balkan"],
      en: ["Location: At the foot of the Balkan Mountains", "Nature: Vratsata Gorge", "Highlight: Ledenika Cave", "Sport: Center for climbing and hiking", "History: Rogozen Thracian gold treasure", "Park: Vrachanski Balkan Nature Park"]
    },
    descriptionAdvanced: {
      de: "Vraza ist als Tor zum Naturpark Wraschanski Balkan ein erstklassiges Ziel für Kletterer und Naturfreunde im Nordwesten Bulgariens. Die Stadt liegt eindrucksvoll unterhalb der senkrechten Felswände der Wrazata-Schlucht, deren Kalksteinwände bis zu 400 Meter hoch aufragen. Historisch war die Region ein Stützpunkt thrakischer Stämme, und das Regionalmuseum präsentiert den Rogosen-Schatz, den größten jemals entdeckten thrakischen Goldfund. Besucher zieht es zudem in die nahegelegene Ledenika-Höhle, bekannt für ihre Eisformationen und beeindruckende Karst-Akustik. Die Stadt dient als Drehscheibe für den Bergsport mit zahlreichen Wegen in die hohen Balkankämme. Vraza verbindet eine raue Alpenkulisse mit einem reichen historischen Erbe und bietet ein besonderes Erlebnis abseits der Küstenorte.",
      hu: "Vraca a Vracsanszki Balkán Natúrpark kapuja, és Bulgária északnyugati részének kiemelkedo úti célja sziklamászók és természetkedvelok számára. A várost a Vracata-szurdok függoleges sziklafalai uralják, melyek mészkofalai akár 400 méter magasra emelkednek. A térség történelmileg trák törzsek erossége volt, a helyi Régiótörténeti Múzeum büszkesége pedig a Rogozeni kincs, a valaha feltárt legnagyobb trák aranylelet. A látogatókat vonzza a közeli Ledenika-barlang is, amely jégformációiról és lenyugözo karszti akusztikájáról ismert. A város a hegymászás központja, számos ösvénnyel a Balkán magas csúcsai felé. Vraca egyedülálló módon ötvözi a zord alpesi környezetet a gazdag történelmi örökséggel, sajátos élményt kínálva a tengerparti üdülohelyektol távol.",
      ro: "Vratsa este recunoscut ca poarta catre Parcul Natural Vrachanski Balkan, fiind o destina?ie de top pentru alpini?ti ?i iubitori de natura din nord-vestul Bulgariei. Ora?ul este dominat dramatic de pere?ii verticali ai Defileului Vratsata, ai carui pere?i de calcar urca pâna la 400 de metri înal?ime. Din punct de vedere istoric, zona a fost o baza a triburilor trace, iar Muzeul Regional de Istorie expune cu mândrie Tezaurul de la Rogozen, cea mai mare descoperire de aur trac de pâna acum. Vizitatorii sunt atra?i ?i de Pe?tera Ledenika din apropiere, vestita pentru forma?iunile sale de ghea?a ?i pentru acustica karstica impresionanta. Ora?ul este un punct central pentru alpinism, cu numeroase trasee ce urca spre crestele înalte ale Balcanilor. Vratsa îmbina în mod unic peisajul alpin abrupt cu o mo?tenire istorica bogata, oferind o experien?a distinctiva, departe de sta?iunile de pe litoral.",
      en: "Vratsa is widely celebrated as the gateway to the Vrachanski Balkan Nature Park, making it a premier destination for rock climbers and nature enthusiasts in northwestern Bulgaria. The city is dramatically overlooked by the vertical cliffs of the Vratsata Gorge, which boasts limestone walls rising up to 400 meters high. Historically, the area was a stronghold of the Thracian tribes, and the local Regional History Museum proudly displays the Rogozen Treasure, the largest Thracian gold find ever discovered. Visitors are often drawn to the nearby Ledenika Cave, famous for its icy formations and impressive karst acoustics. The city serves as a hub for mountaineering, with numerous trails leading into the high Balkan peaks. Vratsa uniquely combines its rugged alpine surroundings with a rich historical legacy, offering a distinctive experience far from the coastal resorts."
    },
    factsAdvanced: {
      de: [
        "Die Wrazata-Schlucht weist die höchsten senkrechten Kalksteinwände der Balkanhalbinsel auf.",
        "Der 1986 gefundene Rogosen-Schatz umfasst 165 silberne und vergoldete Gefäße mit einem Gesamtgewicht von 20 kg.",
        "Die Ledenika-Höhle ist 320 Meter lang und hält ganzjährig Temperaturen zwischen -7 und 15 °C.",
        "Der Stadtname stammt vom Wort \\\\\\\"vrata\\\\\\\" (Tür/Tor) und verweist auf den engen Gebirgspass.",
        "Vraza war im 19. Jahrhundert ein bedeutendes Zentrum der bulgarischen Wiedergeburt.",
        "Der nahegelegene Skaklja-Wasserfall ist mit 141 Metern der höchste periodische Wasserfall Bulgariens.",
        "Der Naturpark Wraschanski Balkan umfasst rund 30.000 Hektar.",
        "Jährlich finden in der Stadt die Botew-Tage statt, die an den Nationalhelden Christo Botew erinnern, der in den umliegenden Bergen fiel."
      ],
      hu: [
        "A Vracata-szurdokban a Balkán-félsziget legmagasabb függoleges mészkofalai találhatók.",
        "Az 1986-ban elokerült Rogozeni kincs 165 ezüst és aranyozott edénybol áll, össztömege 20 kg.",
        "A Ledenika-barlang 320 méter hosszú, és egész évben -7 és 15 °C közötti homérsékletet tart.",
        "A város neve a \\\\\\\"vrata\\\\\\\" (ajtó, kapu) szóból ered, mely a szuk hegyi szorosra utal.",
        "Vraca a 19. században a bolgár nemzeti újjászületés egyik jelentos központja volt.",
        "A közeli Szkaklja-vízesés 141 méteres esésével Bulgária legmagasabb idoszakos vízesése.",
        "A Vracsanszki Balkán Natúrpark körülbelül 30 000 hektáron terül el.",
        "A városban évente megrendezik a Botev-napokat Hriszto Botev nemzeti hos emlékére, aki a környezo hegyekben esett el."
      ],
      ro: [
        "Defileul Vratsata gazduie?te cei mai înal?i pere?i verticali de calcar din Peninsula Balcanica.",
        "Tezaurul de la Rogozen, descoperit în 1986, con?ine 165 de vase din argint ?i placate cu aur, cântarind 20 kg.",
        "Pe?tera Ledenika are 320 de metri lungime ?i pastreaza tot anul temperaturi între -7 ?i 15 °C.",
        "Numele ora?ului provine din cuvântul \\\\\\\"vrata\\\\\\\", care înseamna \\\\\\\"u?a\\\\\\\" sau \\\\\\\"poarta\\\\\\\", în referire la pasul îngust dintre mun?i.",
        "Vratsa a fost un important centru al Rena?terii na?ionale bulgare în secolul al XIX-lea.",
        "Cascada Skaklya, situata în apropiere, este cea mai înalta cascada intermitenta din Bulgaria, cu o cadere de 141 de metri.",
        "Parcul Natural Vrachanski Balkan se întinde pe aproximativ 30.000 de hectare.",
        "În ora? se desfa?oara anual Zilele Botev, festival dedicat eroului na?ional Hristo Botev, cazut în mun?ii din apropiere."
      ],
      en: [
        "The Vratsata Gorge features the highest vertical limestone cliffs in the Balkan Peninsula.",
        "The Rogozen Treasure, found in 1986, consists of 165 silver and gold-plated vessels weighing 20 kg.",
        "Ledenika Cave is 320 meters long and maintains a constant temperature between -7 and 15 degrees Celsius.",
        "The city's name comes from the word 'vrata,' meaning 'door' or 'gate,' referring to the narrow mountain pass.",
        "Vratsa was a major center for the Bulgarian National Revival in the 19th century.",
        "The nearby Skaklya Waterfall is the highest intermittent waterfall in Bulgaria, with a drop of 141 meters.",
        "The Vrachanski Balkan Nature Park covers an area of approximately 30,000 hectares.",
        "The city hosts the annual Botev Days, a festival honoring national hero Hristo Botev, who fell in the nearby mountains."
      ]
    },
    image: "/geo-images/bulgaria/city-vratsa.webp"
  },
  {
    id: "city-shumen",
    type: "city",
    parent: "bg-country",
    coords: [26.9294, 43.2706],
    name: { de: "Schumen", hu: "Sumen", ro: "Shumen", en: "Shumen" },
    description: {
      de: "Schumen, im Nordosten Bulgariens gelegen, ist eine Stadt mit einer tiefen historischen Bedeutung und einem starken kulturellen Erbe. Die Stadt ist bekannt für das monumentale Denkmal \\\\\\\"Gründer des bulgarischen Staates\\\\\\\", das hoch über der Stadt auf dem Schumen-Plateau thront und weithin sichtbar ist. In unmittelbarer Nähe befinden sich die Ruinen der Festung Schumen sowie die erste und zweite Hauptstadt des Ersten Bulgarischen Reiches, Pliska und Preslaw. Ein weiteres bedeutendes Wahrzeichen ist der Madara-Reiter, ein UNESCO-Weltkulturerbe, das nur wenige Kilometer entfernt in die Felsen gehauen wurde. Schumen bietet zudem eine charmante Innenstadt mit Parks, Museen und der Tombul-Moschee, der größten Moschee Bulgariens. Die Stadt verbindet die glorreiche Vergangenheit des frühen bulgarischen Staates mit einem modernen regionalen Zentrum und ist ein wichtiger Ort für Geschichtsinteressierte und Kulturliebhaber.",
      hu: "Sumen Bulgária északkeleti részén fekvo város, amely mély történelmi jelentoséggel és eros kulturális örökséggel bír. A város a \\\\\\\"Bolgár Állam Alapítói\\\\\\\" monumentális emlékmurol ismert, amely magasan a város felett, a Sumen-fennsíkon magasodik, és messzirol is jól látható. A közvetlen közelben találhatók a sumeni erod romjai, valamint az Elso Bolgár Birodalom elso és második fovárosa, Pliszka és Preszlav. Egy másik jelentós látnivaló a Madarai lovas, az UNESCO Világörökség része, amelyet a közeli sziklákba faragtak. Sumen emellett hangulatos belvárost kínál parkokkal, múzeumokkal és a Tombul-mecsettel, amely Bulgária legnagyobb mecsetje. A város ötvözi a korai bolgár állam dicso múltját a modern regionális központtal, és fontos helyszín a történelem és a kultúra kedveloi számára.",
      ro: "Shumen, situat în nord-estul Bulgariei, este un ora? cu o semnifica?ie istorica profunda ?i o mo?tenire culturala puternica. Ora?ul este cunoscut pentru monumentul monumental \\\\\\\"Fondatorii Statului Bulgar\\\\\\\", care domina ora?ul de pe platoul Shumen ?i este vizibil de la mare distan?a. În imediata apropiere se afla ruinele ceta?ii Shumen, precum ?i prima ?i a doua capitala a Primului Imperiu Bulgar, Pliska ?i Preslav. Un alt reper important este Calare?ul de la Madara, un sit al Patrimoniului Mondial UNESCO, sculptat în stânca la doar câ?iva kilometri distan?a. Shumen ofera, de asemenea, un centru fermecator cu parcuri, muzee ?i Moscheea Tombul, cea mai mare mo?chee din Bulgaria. Ora?ul îmbina trecutul glorios al statului bulgar timpuriu cu un centru regional modern ?i este un loc important pentru pasiona?ii de istorie ?i iubitorii de cultura.",
      en: "Shumen, located in northeastern Bulgaria, is a city with deep historical significance and a strong cultural heritage. The city is famous for the monumental \\\\\\\\\\\\\\\"Founders of the Bulgarian State\\\\\\\\\\\\\\\" memorial, which towers over the city on the Shumen Plateau and is visible from afar. In the immediate vicinity are the ruins of the Shumen Fortress, as well as the first and second capitals of the First Bulgarian Empire, Pliska and Preslav. Another significant landmark is the Madara Rider, a UNESCO World Heritage site carved into the rocks just a few kilometers away. Shumen also offers a charming city center with parks, museums, and the Tombul Mosque, the largest mosque in Bulgaria. The city combines the glorious past of the early Bulgarian state with a modern regional center and is an important site for history buffs and culture lovers."
    },
    facts: {
      de: ["Wahrzeichen: Denkmal 'Gründer des bulgarischen Staates'", "Geschichte: Nähe zu Pliska und Preslaw", "UNESCO: Madara-Reiter in der Region", "Religion: Tombul-Moschee (größte des Landes)", "Natur: Schumen-Plateau", "Archäologie: Festung Schumen"],
      hu: ["Jelkép: 'A bolgár állam alapítói' emlékmu", "Történelem: Pliszka és Preszlav közelsége", "UNESCO: Madarai lovas a térségben", "Vallás: Tombul-mecset (az ország legnagyobbja)", "Természet: Sumen-fennsík", "Régészet: Sumeni erod"],
      ro: ["Simbol: Monumentul 'Fondatorii Statului Bulgar'", "Istorie: Proximitatea fa?a de Pliska ?i Preslav", "UNESCO: Calare?ul de la Madara în regiune", "Religie: Moscheea Tombul (cea mai mare din ?ara)", "Natura: Platoul Shumen", "Arheologie: Cetatea Shumen"],
      en: ["Landmark: 'Founders of the Bulgarian State' monument", "History: Proximity to Pliska and Preslav", "UNESCO: Madara Rider in the region", "Religion: Tombul Mosque (largest in the country)", "Nature: Shumen Plateau", "Archaeology: Shumen Fortress"]
    },
    descriptionAdvanced: {
      de: "Schumen ist eine Stadt von großem historischem Stolz und liegt strategisch im Nordosten Bulgariens, nahe den Ursprungsorten des bulgarischen Staates. Berühmt ist sie vor allem für das Denkmal \\\\\\\"Gründer des bulgarischen Staates\\\\\\\", eine massive brutalistische Anlage auf dem Schumener Plateau, die aus weiter Entfernung sichtbar ist. Historisch bildete Schumen gemeinsam mit den ersten beiden bulgarischen Hauptstädten Pliska und Preslaw ein starkes Verteidigungsdreieck, deren Ruinen von der Stadt aus leicht zugänglich sind. Die Festung Schumen auf einer nahen Felskante bietet archäologische Einblicke von der Eisenzeit bis ins Mittelalter. Außerdem steht hier die Tombul-Moschee, die größte Moschee Bulgariens und ein herausragendes Beispiel osmanischer Barockarchitektur. Mit dieser Mischung aus antiken Ruinen, mittelalterlichen Festungen und monumentaler Moderne ist Schumen ein zentraler Ort, um die Entstehung und Entwicklung der bulgarischen Nation zu verstehen.",
      hu: "Sumen mély történelmi büszkeséggel teli város Bulgária északkeleti részén, stratégiai helyen, a bolgár állam születésének közelében. Leghíresebb látnivalója a \\\\\\\"Bolgár Állam Alapítói\\\\\\\" emlékmu, egy hatalmas brutalista alkotás a Sumeni-fennsíkon, amely szinte a régió bármely pontjáról látszik. Sumen Pliszka és Preszlav, az elso és második bolgár fováros mellett egy eros védelmi háromszög része volt; mindketto romjai könnyen elérhetok a városból. A közeli sziklán álló Sumeni erod a vaskortól a középkorig kínál régészeti betekintést. A városban található a Tombul-mecset is, Bulgária legnagyobb mecsete és az oszmán barokk építészet kiemelkedo példája. Ókori romok, középkori erodítmények és monumentális modern építészet ötvözeteként Sumen kulcspont a bolgár nemzet születésének és fejlodésének megértéséhez.",
      ro: "Shumen este un ora? cu o profunda mândrie istorica, situat strategic în nord-estul Bulgariei, aproape de locurile de origine ale statului bulgar. Este cunoscut mai ales pentru monumentul \\\\\\\"Fondatorii Statului Bulgar\\\\\\\", o structura masiva în stil brutalist de pe Platoul Shumen, vizibila aproape din orice punct al regiunii. Din punct de vedere istoric, Shumen forma împreuna cu Pliska ?i Preslav, primele doua capitale bulgare, un puternic triunghi defensiv, ale carui ruine sunt u?or accesibile din ora?. Cetatea Shumen, situata pe o stânca din apropiere, ofera o panorama arheologica ce se întinde din epoca fierului pâna în Evul Mediu. Ora?ul gazduie?te ?i Moscheea Tombul, cea mai mare moschee din Bulgaria ?i un exemplu remarcabil de arhitectura baroca otomana. Cu acest amestec de ruine antice, fortare?e medievale ?i arhitectura monumentala moderna, Shumen este un punct central pentru în?elegerea na?terii ?i evolu?iei na?iunii bulgare.",
      en: "Shumen is a city of immense historical pride, strategically positioned in northeastern Bulgaria near the origins of the Bulgarian state. The city is most famous for its 'Founders of the Bulgarian State' monument, a massive brutalist structure on the Shumen Plateau that can be seen from almost any point in the region. Historically, Shumen was part of a powerful defensive triangle along with the first and second Bulgarian capitals, Pliska and Preslav, whose ruins are easily accessible from the city. The Shumen Fortress, located on a nearby cliff, offers extensive archaeological insights spanning from the Iron Age to the Middle Ages. The city also hosts the Tombul Mosque, the largest mosque in Bulgaria and an exceptional example of Ottoman Baroque architecture. With its blend of ancient ruins, medieval strongholds, and monumental modern architecture, Shumen is a focal point for understanding the birth and development of the Bulgarian nation."
    },
    factsAdvanced: {
      de: [
        "Das Denkmal \\\\\\\"Gründer des bulgarischen Staates\\\\\\\" wurde 1981 zum 1.300-jährigen Bestehen des Landes errichtet.",
        "Die Tombul-Moschee (Scherif-Halil-Pascha-Moschee) ist die größte Moschee Bulgariens und die zweitgrößte des Balkans.",
        "Die Festung Schumen ist seit über 3.000 Jahren bewohnt, beginnend mit den frühen Thrakern.",
        "Der zum UNESCO-Welterbe zählende Madara-Reiter befindet sich nur 15 km von Schumen entfernt.",
        "In Schumen fand Mitte des 19. Jahrhunderts die erste bulgarische Theateraufführung statt, und das erste bulgarische Orchester wurde hier gegründet.",
        "Die Brauerei Schumen aus dem Jahr 1882 zählt zu den ältesten Bulgariens.",
        "Das Schumener Plateau ist ein Naturschutzgebiet mit über 60 Kalksteinhöhlen.",
        "Pliska, die erste Hauptstadt des Ersten Bulgarischen Reiches, liegt nur 25 km nordöstlich der Stadt."
      ],
      hu: [
        "A \\\\\\\"Bolgár Állam Alapítói\\\\\\\" emlékmuvet 1981-ben állították, az ország 1300. évfordulójára.",
        "A Tombul-mecset (Serif Halil pasa mecsete) Bulgária legnagyobb mecsete, és a Balkánon a második legnagyobb.",
        "A Sumeni erod több mint 3000 éve lakott, kezdve a korai trákoktól.",
        "A Madarai lovas, az UNESCO-világörökség része, mindössze 15 km-re fekszik Sumentol.",
        "A 19. század közepén Sumenben tartották az elso bolgár színieloadást, és itt alakult meg az elso bolgár zenekar is.",
        "Az 1882-ben alapított Sumeni sörfozde Bulgária egyik legrégebbi sörfozdéje.",
        "A Sumeni-fennsík védett természetvédelmi park, több mint 60 mészkobarlanggal.",
        "Pliszka, az Elso Bolgár Birodalom elso fovárosa, mindössze 25 km-re fekszik északkeletre a várostól."
      ],
      ro: [
        "Monumentul \\\\\\\"Fondatorii Statului Bulgar\\\\\\\" a fost construit în 1981, pentru a marca 1.300 de ani de la întemeierea ?arii.",
        "Moscheea Tombul (Moscheea Sherif Halil Pa?a) este cea mai mare din Bulgaria ?i a doua ca marime din Balcani.",
        "Cetatea Shumen este locuita de peste 3.000 de ani, începând cu tracii timpurii.",
        "Calare?ul de la Madara, sit al Patrimoniului Mondial UNESCO, se afla la doar 15 km de Shumen.",
        "La Shumen a avut loc, la mijlocul secolului al XIX-lea, prima reprezenta?ie teatrala bulgara ?i a luat fiin?a prima orchestra bulgara.",
        "Beraria Shumen, înfiin?ata în 1882, este una dintre cele mai vechi din Bulgaria.",
        "Platoul Shumen este o rezerva?ie naturala cu peste 60 de pe?teri în calcar.",
        "Pliska, prima capitala a Primului ?arat Bulgar, se afla la numai 25 km nord-est de ora?."
      ],
      en: [
        "The 'Founders of the Bulgarian State' monument was built in 1981 to commemorate the 1,300th anniversary of the country.",
        "The Tombul Mosque (Sherif Halil Pasha Mosque) is the largest in Bulgaria and the second largest in the Balkans.",
        "The Shumen Fortress has been inhabited for over 3,000 years, starting with the early Thracians.",
        "The Madara Rider, a UNESCO World Heritage site, is located just 15 kilometers from Shumen.",
        "Shumen was the site of the first Bulgarian theater performance and the first Bulgarian orchestra in the mid-19th century.",
        "The city's brewery, Shumen, established in 1882, is one of the oldest in Bulgaria.",
        "The Shumen Plateau is a protected nature park featuring over 60 limestone caves.",
        "Pliska, the first capital of the First Bulgarian Empire, is situated only 25 kilometers northeast of the city."
      ]
    },
    image: "/geo-images/bulgaria/city-shumen.webp"
  },
  {
    id: "city-dobrich",
    type: "city",
    parent: "bg-country",
    coords: [27.8300, 43.5667],
    name: { de: "Dobritsch", hu: "Dobrics", ro: "Dobrich", en: "Dobrich" },
    description: {
      de: "Dobritsch, im Herzen der Dobrudscha im Nordosten Bulgariens gelegen, ist ein bedeutendes landwirtschaftliches Zentrum und bekannt als die \\\\\\\"Kornkammer Bulgariens\\\\\\\". Die Stadt ist geprägt von weiten Ebenen und einer starken Agrartradition, die sich in der lokalen Wirtschaft und Kultur widerspiegelt. Ein besonderes Highlight ist das Ethnografische Museum \\\\\\\"Alter Dobritsch\\\\\\\", ein Freilichtkomplex, der das traditionelle Handwerk und die Architektur der Region im 19. und frühen 20. Jahrhundert lebendig hält. Dobritsch bietet zudem weitläufige Parks wie den Stadtpark \\\\\\\"Heiliger Georg\\\\\\\", der zu den ältesten und größten des Landes gehört. Die Stadt dient als wichtiger Logistikknotenpunkt und ist ein idealer Ausgangspunkt für Reisen zur nahegelegenen Schwarzmeerküste. Dobritsch verbindet ländliche Ruhe mit urbaner Funktionalität und bietet Besuchern einen authentischen Einblick in das Leben in der bulgarischen Tiefebene.",
      hu: "Dobrics Bulgária északkeleti részén, a Dobrudzsa szívében fekvo város, jelentos mezogazdasági központ, amelyet \\\\\\\"Bulgária magtáraként\\\\\\\" is emlegetnek. A várost tágas síkságok és eros agrárhagyományok jellemzik, ami a helyi gazdaságban és kultúrában is tükrözodik. Különleges látnivaló a \\\\\\\"Régi Dobrics\\\\\\\" néprajzi múzeum, egy szabadtéri komplexum, amely a régió 19. és kora 20. századi hagyományos kézmuvességét és építészetét mutatja be. Dobrics emellett hatalmas parkokkal büszkélkedhet, mint például a Szent György városi park, amely az ország egyik legrégebbi és legnagyobb parkja. A város fontos logisztikai csomópont, és ideális kiindulópont a közeli Fekete-tenger partjára irányuló utazásokhoz. Dobrics ötvözi a vidéki nyugalmat a városi funkcionalitással, hiteles betekintést nyújtva a bolgár alföldi életbe.",
      ro: "Dobrich, situat în inima Dobrogei în nord-estul Bulgariei, este un centru agricol important ?i cunoscut sub numele de \\\\\\\"grânarul Bulgariei\\\\\\\". Ora?ul este caracterizat de câmpii întinse ?i o tradi?ie agricola puternica, care se reflecta în economia ?i cultura locala. Un punct culminant special este Muzeul Etnografic \\\\\\\"Vechiul Dobrich\\\\\\\", un complex în aer liber care pastreaza vii me?te?ugurile tradi?ionale ?i arhitectura regiunii din secolul al XIX-lea ?i începutul secolului al XX-lea. Dobrich ofera, de asemenea, parcuri vaste, cum ar fi Parcul Ora?ului \\\\\\\"Sfântul Gheorghe\\\\\\\", care este unul dintre cele mai vechi ?i mai mari din ?ara. Ora?ul serve?te ca un nod logistic important ?i este un punct de plecare ideal pentru calatorii catre coasta Marii Negre din apropiere. Dobrich îmbina lini?tea rurala cu func?ionalitatea urbana ?i ofera vizitatorilor o perspectiva autentica asupra vie?ii din câmpia bulgara.",
      en: "Dobrich, located in the heart of Dobrudzha in northeastern Bulgaria, is a significant agricultural center known as the \\\\\\\\\\\\\\\"Granary of Bulgaria.\\\\\\\\\\\\\\\" The city is characterized by vast plains and a strong agricultural tradition reflected in the local economy and culture. A special highlight is the \\\\\\\\\\\\\\\"Old Dobrich\\\\\\\\\\\\\\\" Ethnographic Museum, an open-air complex that keeps alive the traditional crafts and architecture of the region from the 19th and early 20th centuries. Dobrich also offers expansive parks, such as the St. George City Park, which is one of the oldest and largest in the country. The city serves as an important logistics hub and is an ideal starting point for trips to the nearby Black Sea coast. Dobrich combines rural tranquility with urban functionality, offering visitors an authentic insight into life in the Bulgarian lowlands."
    },
    facts: {
      de: ["Status: Zentrum der Dobrudscha", "Wirtschaft: Kornkammer Bulgariens", "Kultur: Ethnografischer Komplex 'Alter Dobritsch'", "Natur: Stadtpark 'Heiliger Georg'", "Geschichte: Antike Siedlung an Handelswegen", "Lage: Nordostbulgarien"],
      hu: ["Státusz: Dobrudzsa központja", "Gazdaság: Bulgária magtára", "Kultúra: 'Régi Dobrics' néprajzi komplexum", "Természet: Szent György városi park", "Történelem: Ókori település kereskedelmi utak mentén", "Fekvés: Északkelet-Bulgária"],
      ro: ["Statut: Centrul Dobrogei", "Economie: Grânarul Bulgariei", "Cultura: Complexul etnografic 'Vechiul Dobrich'", "Natura: Parcul ora?ului 'Sfântul Gheorghe'", "Istorie: A?ezare antica pe rute comerciale", "Loca?ie: Nord-estul Bulgariei"],
      en: ["Status: Center of Dobrudzha", "Economy: Granary of Bulgaria", "Culture: 'Old Dobrich' Ethnographic Complex", "Nature: St. George City Park", "History: Ancient settlement on trade routes", "Location: Northeastern Bulgaria"]
    },
    descriptionAdvanced: {
      de: "Dobritsch ist die unbestrittene Verwaltungs- und Wirtschaftshauptstadt der Region Dobrudscha und gilt aufgrund seiner weiten, fruchtbaren Ebenen als Kornkammer Bulgariens. Historisch war die Stadt eine wichtige Kreuzung für den Handel zwischen Donau und Schwarzem Meer. Zu den eindrucksvollsten Attraktionen zählt das ethnografische Freilichtmuseum \\\\\\\"Alt-Dobritsch\\\\\\\", wo Besucher traditionelles Handwerk – vom Weben bis zur Kupferschmiede – in einem restaurierten urbanen Umfeld des 19. Jahrhunderts erleben können. Die Stadt beherbergt zudem den St.-Georgs-Stadtpark, einen der ältesten und größten Parks Bulgariens, gegründet 1867. Dobritschs Identität ist eng mit der Landwirtschaft verbunden, was sich auch in seinen Museen und der regionalen Küche widerspiegelt. Für Reisende, die das authentische Leben der bulgarischen Tiefebene kennenlernen möchten, ist Dobritsch eine ruhige, aber kulturell reiche Alternative zu den Küstenorten.",
      hu: "Dobrics a Dobrudzsa régió vitathatatlan közigazgatási és gazdasági fovárosa, kiterjedt, termékeny síkságai miatt gyakran Bulgária magtárának nevezik. Történelmileg a város fontos keresztezodés volt a Duna és a Fekete-tenger közötti kereskedelmi utak mentén. Egyik legmegragadóbb látnivalója a \\\\\\\"Régi Dobrics\\\\\\\" néprajzi szabadtéri múzeum, ahol a látogatók a 19. századi városi környezetbe helyezve élvonalbeli kézmuves szakmákat – szövést, rézmuvességet és más hagyományos mesterségeket – figyelhetnek meg éloben. A városban található a Szent György városi park is, Bulgária egyik legrégebbi és legnagyobb zöldterülete, melyet 1867-ben alapítottak. Dobrics identitása erosen kötodik az agrárhagyományokhoz, amit múzeumai és sajátos regionális konyhája is tükröz. Akik a bolgár alföld autentikus életét keresik, Dobricsban csendes, mégis kulturálisan gazdag alternatívát találnak a tengerparti üdülohelyek helyett.",
      ro: "Dobrich este capitala administrativa ?i economica incontestabila a regiunii Dobrogea, denumita adesea grânarul Bulgariei datorita câmpiilor sale fertile. Din punct de vedere istoric, ora?ul a fost o rascruce esen?iala pentru comer?ul dintre Dunare ?i Marea Neagra. Una dintre cele mai captivante atrac?ii este Muzeul Etnografic în aer liber \\\\\\\"Vechiul Dobrich\\\\\\\", unde vizitatorii pot urmari me?te?uguri tradi?ionale, de la ?esut la prelucrarea aramei, într-un cadru urban restaurat din secolul al XIX-lea. Ora?ul gazduie?te ?i Parcul Sfântul Gheorghe, unul dintre cele mai vechi ?i mai mari spa?ii verzi din Bulgaria, înfiin?at în 1867. Identitatea ora?ului Dobrich este profund legata de tradi?iile agricole, lucru reflectat în muzeele sale ?i în bucataria regionala distincta. Pentru calatorii care cauta o experien?a autentica a câmpiei bulgare, Dobrich ofera o alternativa lini?tita, dar bogata cultural, la sta?iunile de pe litoral.",
      en: "Dobrich sits as the undisputed administrative and economic capital of the Dobrudzha region, often referred to as Bulgaria's breadbasket due to its vast, fertile plains. Historically, the city has been a vital crossroads for trade between the Danube and the Black Sea. One of its most engaging attractions is the 'Old Dobrich' Ethnographic Museum, where visitors can experience a living history of local crafts, from weaving to copper-smithing, set within a restored 19th-century urban environment. The city is also home to the Saint George City Park, one of the oldest and largest green spaces in Bulgaria, established in 1867. Dobrich's identity is deeply tied to its agricultural roots, which are celebrated in its museums and the unique regional cuisine. For travelers seeking an authentic experience of the Bulgarian lowlands, Dobrich offers a quiet but culturally rich alternative to the coastal resorts."
    },
    factsAdvanced: {
      de: [
        "Die Stadt ist nach Dobrotitza benannt, dem Herrscher des Despotats von Dobrudscha im 14. Jahrhundert.",
        "Während der kommunistischen Zeit (1949–1990) hieß die Stadt Tolbuchin.",
        "Der St.-Georgs-Stadtpark erstreckt sich über 25 Hektar und gehört zu den ersten geplanten Parks Bulgariens.",
        "In Dobritsch befindet sich das Gedenkhaus von Jordan Jowkow, einem der bedeutendsten bulgarischen Schriftsteller.",
        "Im ethnografischen Museum \\\\\\\"Alt-Dobritsch\\\\\\\" arbeiten 18 verschiedene Werkstätten, die traditionelle Handwerke pflegen.",
        "Die städtische Kunstgalerie ist in einem repräsentativen Gebäude untergebracht, das einst eine Militärschule war.",
        "Dobritsch liegt nur 35 km von der beliebten Küstenstadt Baltschik entfernt.",
        "Die Region rund um Dobritsch ist das produktivste Weizenanbaugebiet auf der Balkanhalbinsel."
      ],
      hu: [
        "A város Dobroticáról, a Dobrudzsai Despotátus 14. századi uralkodójáról kapta a nevét.",
        "A kommunista korszakban (1949–1990) Tolbuhin néven volt ismert.",
        "A Szent György városi park 25 hektáron terül el, és Bulgária egyik elso tervezett parkja volt.",
        "Dobricsban található Jordan Jovkov emlékháza, aki Bulgária egyik legjelentosebb írója volt.",
        "A \\\\\\\"Régi Dobrics\\\\\\\" néprajzi múzeumban 18 különféle kézmuves muhely orzi a hagyományos szakmákat.",
        "A városi képtár egy reprezentatív épületben kapott helyet, amely egykor katonai iskola volt.",
        "Dobrics mindössze 35 km-re fekszik a népszeru tengerparti várostól, Balcsiktól.",
        "A Dobricset körülvevo régió a Balkán-félsziget legtermékenyebb búzatermeszto területe."
      ],
      ro: [
        "Ora?ul poarta numele lui Dobrotici, conducatorul Despotatului de Dobrogea din secolul al XIV-lea.",
        "În perioada comunista (1949–1990), ora?ul a purtat numele Tolbuhin.",
        "Parcul Ora?enesc Sfântul Gheorghe se întinde pe 25 de hectare ?i a fost unul dintre primele parcuri amenajate din Bulgaria.",
        "La Dobrich se afla Casa Memoriala Yordan Yovkov, dedicata unuia dintre cei mai mari scriitori bulgari.",
        "Muzeul Etnografic \\\\\\\"Vechiul Dobrich\\\\\\\" gazduie?te 18 ateliere diferite de me?te?uguri tradi?ionale.",
        "Galeria de Arta a ora?ului func?ioneaza într-o cladire impunatoare care a fost odinioara ?coala militara.",
        "Dobrich se afla la numai 35 km de sta?iunea de pe litoral Balcic.",
        "Regiunea din jurul ora?ului Dobrich este cea mai productiva zona de cultivare a grâului din Peninsula Balcanica."
      ],
      en: [
        "Dobrich is named after Dobrotitsa, the 14th-century ruler of the Despotate of Dobruja.",
        "The city was formerly known as Tolbukhin during the communist period (1949–1990).",
        "The Saint George City Park covers an area of 25 hectares and was one of the first organized parks in Bulgaria.",
        "Dobrich is home to the Yordan Yovkov Memorial House, dedicated to one of Bulgaria's greatest writers.",
        "The 'Old Dobrich' Ethnographic Museum features 18 different workshops practicing traditional crafts.",
        "The city's Art Gallery is housed in a grand building that was once a military school.",
        "Dobrich is located just 35 kilometers from the popular coastal town of Balchik.",
        "The region surrounding Dobrich is the most productive wheat-growing area in the Balkan Peninsula."
      ]
    },
    image: "/geo-images/bulgaria/city-dobrich.webp"
  },
  {
    id: "city-sliven",
    type: "city",
    parent: "bg-country",
    coords: [26.3333, 42.6817],
    name: { de: "Sliwen", hu: "Szliven", ro: "Sliven", en: "Sliven" },
    description: {
      de: "Sliwen, am Fuße der markanten \\\\\\\"Blauen Felsen\\\\\\\" im Südosten Bulgariens gelegen, ist eine Stadt mit einer starken industriellen Tradition und einer heldenhaften Geschichte. Bekannt als die \\\\\\\"Stadt der hundert Wojwoden\\\\\\\", war Sliwen ein Zentrum des bulgarischen Widerstands gegen die osmanische Herrschaft. Die Stadt ist zudem die Wiege der bulgarischen Industrie, da hier 1834 die erste Textilfabrik des Balkans gegründet wurde. Ein besonderes Highlight ist der Naturpark \\\\\\\"Sinite Kamani\\\\\\\" (Blaue Felsen), der Sliwen mit seinen bizarren Felsformationen und dichten Wäldern überragt und ein beliebtes Ziel für Wanderer und Kletterer ist. Sliwen bietet eine Mischung aus historischem Erbe, kulturellen Museen und einer beeindruckenden Naturkulisse. Die Stadt ist ein wichtiger regionaler Knotenpunkt und ein Ort, der stolz auf seine Kämpfertradition und seinen Pioniergeist zurückblickt.",
      hu: "Szliven a jellegzetes \\\\\\\"Kék-sziklák\\\\\\\" lábánál fekvo város Bulgária délkeleti részén, eros ipari hagyományokkal és hosies múlttal. A \\\\\\\"száz vajda városaként\\\\\\\" ismert Szliven az oszmán uralom elleni bolgár ellenállás egyik központja volt. A város emellett a bolgár ipar bölcsoje is, mivel 1834-ben itt alapították a Balkán elso textilgyárát. Különleges látnivaló a \\\\\\\"Szinite Kamani\\\\\\\" (Kék-sziklák) Natúrpark, amely bizarr sziklaalakzataival és suru erdoivel magasodik a város fölé, és a túrázók, valamint a sziklamászók kedvelt célpontja. Szliven a történelmi örökség, a kulturális múzeumok és a lenyugözo természeti háttér keverékét kínálja. A város fontos regionális csomópont, amely büszkén tekint vissza harcos hagyományaira és úttöro szellemére.",
      ro: "Sliven, situat la poalele distinctivelor \\\\\\\"Stânci Albastre\\\\\\\" în sud-estul Bulgariei, este un ora? cu o puternica tradi?ie industriala ?i o istorie eroica. Cunoscut sub numele de \\\\\\\"ora?ul celor o suta de voievozi\\\\\\\", Sliven a fost un centru al rezisten?ei bulgare împotriva stapânirii otomane. Ora?ul este, de asemenea, leaganul industriei bulgare, aici fiind fondata în 1834 prima fabrica de textile din Balcani. Un punct culminant special este Parcul Natural \\\\\\\"Sinite Kamani\\\\\\\" (Stâncile Albastre), care domina Sliven cu forma?iunile sale stâncoase bizare ?i padurile dese, fiind o destina?ie populara pentru drume?i ?i alpini?ti. Sliven ofera un amestec de mo?tenire istorica, muzee culturale ?i un cadru natural impresionant. Ora?ul este un nod regional important ?i un loc care prive?te cu mândrie spre tradi?ia sa de luptatori ?i spiritul sau de pionierat.",
      en: "Sliven, located at the foot of the striking \\\\\\\\\\\\\\\"Blue Rocks\\\\\\\\\\\\\\\" in southeastern Bulgaria, is a city with a strong industrial tradition and a heroic history. Known as the \\\\\\\\\\\\\\\"City of the Hundred Voivodes,\\\\\\\\\\\\\\\" Sliven was a center of Bulgarian resistance against Ottoman rule. The city is also the cradle of Bulgarian industry, as the first textile factory in the Balkans was founded here in 1834. A special highlight is the \\\\\\\\\\\\\\\"Sinite Kamani\\\\\\\\\\\\\\\" (Blue Rocks) Nature Park, which towers over Sliven with its bizarre rock formations and dense forests, making it a popular destination for hikers and climbers. Sliven offers a blend of historical heritage, cultural museums, and an impressive natural backdrop. The city is an important regional hub and a place that looks back with pride on its fighter tradition and pioneering spirit."
    },
    facts: {
      de: ["Status: Stadt der hundert Wojwoden", "Industrie: Wiege der bulgarischen Textilindustrie", "Natur: Naturpark 'Sinite Kamani' (Blaue Felsen)", "Geschichte: Zentrum des Widerstands", "Kultur: Haus-Museum von Hadzhi Dimitar", "Lage: Südostbulgarien"],
      hu: ["Státusz: A száz vajda városa", "Ipar: A bolgár textilipar bölcsoje", "Természet: 'Szinite Kamani' (Kék-sziklák) Natúrpark", "Történelem: Az ellenállás központja", "Kultúra: Hadzsi Dimitar emlékház", "Fekvés: Délkelet-Bulgária"],
      ro: ["Statut: Ora?ul celor o suta de voievozi", "Industrie: Leaganul industriei textile bulgare", "Natura: Parcul Natural 'Sinite Kamani' (Stâncile Albastre)", "Istorie: Centru al rezisten?ei", "Cultura: Casa-muzeu Hadzhi Dimitar", "Loca?ie: Sud-estul Bulgariei"],
      en: ["Status: City of the Hundred Voivodes", "Industry: Cradle of Bulgarian textile industry", "Nature: 'Sinite Kamani' (Blue Rocks) Nature Park", "History: Center of resistance", "Culture: Hadzhi Dimitar House-Museum", "Location: Southeastern Bulgaria"]
    },
    descriptionAdvanced: {
      de: "Sliwen ist als \\\\\\\"Stadt der hundert Wojwoden\\\\\\\" bekannt – ein Titel, der ihre Rolle als bedeutendes Zentrum des bulgarischen Widerstands gegen die osmanische Herrschaft würdigt. Am Fuße des Naturparks Sinite Kamani (Blaue Felsen) gelegen, wird die Identität der Stadt sowohl von ihrer heldenhaften militärischen Vergangenheit als auch von ihrem industriellen Erbe geprägt. 1834 gründete hier Dobri Scheljaskow die erste moderne Textilfabrik des gesamten Balkans, weshalb Sliwen als Wiege der bulgarischen Industrie gilt. Besucher können das Hausmuseum von Hadschi Dimitar erkunden, einem der verehrtesten Revolutionshelden des Landes. Die umliegenden Blauen Felsen bilden eine schroffe, dramatische Kulisse und sind ein beliebtes Ziel für Wanderungen und Bergsport. Sliwen bleibt ein wichtiger kultureller und wirtschaftlicher Knotenpunkt in Südostbulgarien, das stolz auf seine Handwerks- und Widerstandstradition zurückblickt.",
      hu: "Szliven a \\\\\\\"száz vajda városaként\\\\\\\" ismert – ez a cím a város szerepét emeli ki a bolgár ellenállás központjaként az oszmán uralom idején. A Szinite Kamani (Kék-sziklák) Natúrpark lábánál fekvo város identitását egyaránt formálja hosies katonai múltja és ipari öröksége. 1834-ben itt alapította Dobri Zseljazkov a Balkán elso modern textilgyárát, ezzel Szliven a bolgár ipar bölcsoje lett. A látogatók megtekinthetik Hadzsi Dimitar emlékházát, aki az ország egyik legtiszteltebb forradalmi hose. A környezo Kék-sziklák zord, drámai tájképet alkotnak, és népszeru túra- és hegyisport-célpontok. Szliven továbbra is fontos kulturális és gazdasági csomópont Bulgária délkeleti részén, mely büszkén ápolja kézmuves és lázadó hagyományait.",
      ro: "Sliven este cunoscut drept \\\\\\\"Ora?ul celor o suta de voievozi\\\\\\\", un titlu care îi onoreaza rolul de important centru al rezisten?ei bulgare în perioada otomana. A?ezat la poalele Parcului Natural Sinite Kamani (Stâncile Albastre), identitatea ora?ului este forjata atât de trecutul sau militar eroic, cât ?i de mo?tenirea industriala. Aici, în 1834, Dobri Jelyazkov a înfiin?at prima fabrica moderna de textile din Balcani, iar Sliven a câ?tigat reputa?ia de leagan al industriei bulgare. Vizitatorii pot explora Casa-Muzeu Hadzhi Dimitar, dedicata unuia dintre cei mai venera?i eroi revolu?ionari ai ?arii. Stâncile Albastre din împrejurimi formeaza un peisaj sumbru ?i dramatic, fiind un punct popular pentru drume?ii ?i sporturi montane. Sliven ramâne o rascruce culturala ?i economica vitala în sud-estul Bulgariei, pastrându-?i cu mândrie tradi?iile de me?te?ug ?i razvratire.",
      en: "Sliven is famously known as the 'City of the Hundred Voivodes' (rebel leaders), a title that honors its role as a major center of Bulgarian resistance during the Ottoman period. Nestled at the base of the Sinite Kamani (Blue Rocks) Nature Park, the city's identity is forged by both its heroic military past and its industrial legacy. It was here in 1834 that Dobri Zhelyazkov established the first modern textile factory in the entire Balkan region, earning Sliven the reputation as the cradle of Bulgarian industry. Visitors can explore the House-Museum of Hadzhi Dimitar, one of the nation's most revered revolutionary heroes. The surrounding Blue Rocks offer a stark, dramatic landscape that provides a stunning backdrop to the city and serves as a popular hub for hiking and mountain sports. Sliven remains a vital cultural and economic junction in southeastern Bulgaria, proudly preserving its traditions of craftsmanship and rebellion."
    },
    factsAdvanced: {
      de: [
        "Der Naturpark Sinite Kamani verdankt seinen Namen dem blaugrauen Schimmer, den die Kalksteinfelsen bei bestimmten Lichtverhältnissen annehmen.",
        "Die 1834 eröffnete erste Textilfabrik Bulgariens beherbergt heute das Museum der Textilindustrie.",
        "Sliwen ist Geburtsort vieler legendärer bulgarischer Revolutionäre, vor allem Hadschi Dimitars.",
        "Die \\\\\\\"Alte Ulme\\\\\\\" (Stariyat Brast) galt über 1.100 Jahre als lebendes Wahrzeichen Sliwens, bevor sie abstarb.",
        "Die Festung Tuida auf einem Hügel der Stadt stammt aus römischer Zeit (4. Jahrhundert n. Chr.).",
        "Sliwen gehört zu den wenigen bulgarischen Städten mit einer fast 200 Jahre durchgehenden Industrietradition.",
        "Die nahegelegenen Sliwener Mineralbäder werden seit der Römerzeit für ihre Heilwirkung genutzt.",
        "Jeden Mai findet in der Stadt das Internationale Kinder-Folklorefestival statt."
      ],
      hu: [
        "A Szinite Kamani Natúrpark a mészkoszikláknak a fény bizonyos szögében mutatott jellegzetes kékesszürke csillogásáról kapta a nevét.",
        "Az 1834-ben megnyitott elso bolgár textilgyár ma a Textilipari Múzeumnak ad otthont.",
        "Szliven számos legendás bolgár forradalmár szülovárosa, közülük is kiemelkedik Hadzsi Dimitar.",
        "A \\\\\\\"Vén szilfa\\\\\\\" (Stariyat Brast) több mint 1100 éven át Szliven élo jelképe volt, mielott elpusztult.",
        "A városban álló Tuida-erod a római korból, a 4. századból származik.",
        "Szliven azon kevés bolgár városok egyike, amely közel 200 éve folyamatos ipari tevékenységet folytat.",
        "A közeli Szlivenszki Mineralni Bani fürdoit gyógyhatásukért már a rómaiak is használták.",
        "A város minden májusban otthont ad a Nemzetközi Gyermek Folklórfesztiválnak."
      ],
      ro: [
        "Parcul Natural Sinite Kamani î?i datoreaza numele nuan?ei albastre-cenu?ii pe care stâncile de calcar o capata în anumite condi?ii de lumina.",
        "Prima fabrica de textile din Bulgaria, deschisa în 1834, gazduie?te astazi Muzeul Industriei Textile.",
        "Sliven este locul de na?tere al multor revolu?ionari bulgari legendari, în special al lui Hadzhi Dimitar.",
        "\\\\\\\"Ulmul Batrân\\\\\\\" (Stariyat Brast) a fost un simbol viu al ora?ului Sliven timp de peste 1.100 de ani, înainte de a se usca.",
        "Cetatea Tuida, situata pe o colina a ora?ului, dateaza din perioada romana (secolul al IV-lea d.Hr.).",
        "Sliven este unul dintre pu?inele ora?e bulgare care au pastrat o orientare industriala constanta timp de aproape 200 de ani.",
        "Baile Sliven (Slivenski Mineralni Bani) din apropiere au fost folosite pentru proprieta?ile lor curative înca din vremea romanilor.",
        "În fiecare luna mai, ora?ul gazduie?te Festivalul Interna?ional de Folclor pentru Copii."
      ],
      en: [
        "The Sinite Kamani Nature Park is named after the unique blue-grey tint the limestone rocks take on under certain light conditions.",
        "The first textile factory in Bulgaria, opened in 1834, is now home to the Museum of Textile Industry.",
        "Sliven is the birthplace of many legendary Bulgarian revolutionaries, most notably Hadzhi Dimitar.",
        "The city's 'Old Elm' (Stariyat Brast) was a living symbol of Sliven for over 1,100 years before its death.",
        "The Tuida Fortress, located on a hill in the city, dates back to the Roman period (4th century AD).",
        "Sliven is one of the few Bulgarian cities that has maintained a consistent industrial focus for nearly 200 years.",
        "The nearby Sliven Baths (Slivenski Mineralni Bani) have been used for their healing properties since Roman times.",
        "The city hosts the International Children's Folklore Festival every May."
      ]
    },
    image: "/geo-images/bulgaria/city-sliven.webp"
  },
  {
    id: "city-stara-zagora",
    type: "city",
    parent: "bg-country",
    coords: [25.6257, 42.4258],
    name: { de: "Stara Sagora", hu: "Sztara Zagora", ro: "Stara Zagora", en: "Stara Zagora" },
    description: {
      de: "Stara Sagora, im Herzen Thrakiens gelegen, ist eine der modernsten und am besten geplanten Städte Bulgariens, bekannt für ihre breiten, geraden Boulevards und ihre grünen Parks. Die Stadt blickt auf eine über 8.000-jährige Geschichte zurück, die im Regionalen Historischen Museum und in den Ruinen des antiken Forums von Augusta Traiana eindrucksvoll dokumentiert wird. Stara Sagora ist ein bedeutendes kulturelles Zentrum mit einer renommierten Oper und zahlreichen Museen. Ein besonderes Highlight ist das Museum der Neolithischen Wohnstätten, das die am besten erhaltenen prähistorischen Häuser Europas beherbergt. Die Stadt verbindet ihre antike Vergangenheit mit einer dynamischen Gegenwart und ist ein wichtiger Wirtschaftsstandort in Zentralbulgarien. Stara Sagora bietet Besuchern eine hohe Lebensqualität, eine reiche Kulturszene und eine einladende Atmosphäre.",
      hu: "Sztara Zagora Trákia szívében fekvo város, Bulgária egyik legmodernebb és legjobban tervezett települése, amely széles, egyenes sugárútjairól és zöld parkjairól ismert. A város több mint 8000 éves múltra tekint vissza, amelyet a Regionális Történeti Múzeum és az ókori Augusta Traiana fórumának romjai mutatnak be. Sztara Zagora jelentos kulturális központ neves operaházzal és számos múzeummal. Különleges látnivaló az Újkokori Lakóhelyek Múzeuma, amely Európa legjobb állapotban fennmaradt oskori házait orzi. A város ötvözi az ókori múltat a dinamikus jelennel, és Közép-Bulgária fontos gazdasági központja. Sztara Zagora magas életminoséget, gazdag kulturális életet és vendégszereto légkört kínál a látogatóknak.",
      ro: "Stara Zagora, situat în inima Traciei, este unul dintre cele mai moderne ?i mai bine planificate ora?e din Bulgaria, cunoscut pentru bulevardele sale largi ?i drepte ?i parcurile sale verzi. Ora?ul are o istorie de peste 8.000 de ani, documentata impresionant în Muzeul Regional de Istorie ?i în ruinele forumului antic Augusta Traiana. Stara Zagora este un centru cultural important, cu o opera renumita ?i numeroase muzee. Un punct culminant special este Muzeul Locuin?elor Neolitice, care gazduie?te cele mai bine conservate case preistorice din Europa. Ora?ul îmbina trecutul sau antic cu un prezent dinamic ?i este un centru economic important în Bulgaria centrala. Stara Zagora ofera vizitatorilor o calitate ridicata a vie?ii, o scena culturala bogata ?i o atmosfera primitoare.",
      en: "Stara Zagora, located in the heart of Thrace, is one of Bulgaria's most modern and well-planned cities, known for its wide, straight boulevards and green parks. The city boasts a history of over 8,000 years, impressively documented in the Regional Historical Museum and the ruins of the ancient forum of Augusta Traiana. Stara Zagora is a significant cultural center with a renowned opera house and numerous museums. A special highlight is the Museum of Neolithic Dwellings, which houses the best-preserved prehistoric houses in Europe. The city combines its ancient past with a dynamic present and is an important economic hub in central Bulgaria. Stara Zagora offers visitors a high quality of life, a rich cultural scene, and a welcoming atmosphere."
    },
    facts: {
      de: ["Status: Stadt der Linden", "Geschichte: Antike Augusta Traiana", "Kultur: Renommierte Staatsoper", "Highlight: Neolithische Wohnstätten", "Geografie: Zentrum Thrakiens", "Wirtschaft: Wichtiger Industriestandort"],
      hu: ["Státusz: A hársfák városa", "Történelem: Az ókori Augusta Traiana", "Kultúra: Neves Állami Operaház", "Látnivaló: Újkokori lakóhelyek", "Földrajz: Trákia központja", "Gazdaság: Fontos ipari központ"],
      ro: ["Statut: Ora?ul teilor", "Istorie: Vechea Augusta Traiana", "Cultura: Opera de Stat renumita", "Atrac?ie: Locuin?ele neolitice", "Geografie: Centrul Traciei", "Economie: Centru industrial important"],
      en: ["Status: City of Linden Trees", "History: Ancient Augusta Traiana", "Culture: Renowned State Opera", "Highlight: Neolithic Dwellings", "Geography: Center of Thrace", "Economy: Important industrial hub"]
    },
    descriptionAdvanced: {
      de: "Stara Sagora, bekannt als \\\\\\\"Stadt der Linden\\\\\\\", ist ein bemerkenswert modernes und gut geplantes urbanes Zentrum im Herzen des thrakischen Tals. Nachdem die Stadt im Russisch-Türkischen Krieg 1877 vollständig zerstört worden war, wurde sie mit einem einzigartigen Rastergrundriss aus breiten, geraden Boulevards wiederaufgebaut, was ihr eine deutlich europäische Atmosphäre verleiht. Hinter der modernen Fassade verbirgt sich jedoch eine außergewöhnlich tiefe Geschichte: Das Museum der Neolithischen Wohnstätten bewahrt zwei 8.000 Jahre alte Häuser, die als die ältesten Europas gelten. Auch in römischer Zeit war die Stadt unter dem Namen Augusta Traiana ein bedeutendes Zentrum, dessen antikes Forum heute noch im Stadtbild präsent ist. Stara Sagora ist eine wichtige Kulturhauptstadt mit dem ersten in Bulgarien errichteten Opernhaus und einer lebendigen literarischen Szene. Mit weitläufigen Parks, einer starken Wirtschaft und reicher Archäologie verkörpert sie ein Symbol für Widerstandsfähigkeit und urbane Weiterentwicklung.",
      hu: "Sztara Zagora, a \\\\\\\"hársfák városa\\\\\\\", a Trák-síkság szívében elhelyezkedo, figyelemreméltóan modern és jól tervezett város. Miután az 1877-es orosz–török háborúban teljesen lerombolták, a várost széles, egyenes sugárutakból álló rácsos rendszerrel építették újjá, ami sajátos európai hangulatot adott neki. A modern homlokzatok mögött azonban hihetetlenül mély múlt rejlik: az Újkokori Lakóhelyek Múzeuma két, mintegy 8000 éves házat oriz, amelyek Európa legrégebbi ilyen lakóhelyei. A város a római korban Augusta Traiana néven volt jelentos központ, és az ókori fórum ma is meghatározó látnivaló. Sztara Zagora kiemelt kulturális fováros: itt található Bulgária elso operaháza, és élénk irodalmi élet jellemzi. Tágas parkjaival, eros gazdaságával és gazdag régészeti örökségével a város a kitartás és a folyamatos városi fejlodés szimbóluma.",
      ro: "Stara Zagora, cunoscut drept \\\\\\\"Ora?ul Teilor\\\\\\\", este un centru urban remarcabil de modern ?i bine planificat, situat în inima Vaii Tracice. Dupa ce a fost rasa complet în timpul Razboiului Ruso-Turc din 1877, ora?ul a fost reconstruit pe un plan unic de tip grila, cu bulevarde largi ?i drepte, ceea ce îi confera o atmosfera vadit europeana. În spatele fa?adei moderne se ascunde însa o istorie incredibil de profunda: Muzeul Locuin?elor Neolitice pastreaza doua case vechi de 8.000 de ani, considerate cele mai vechi din Europa. Ora?ul a fost ?i un important centru roman, cunoscut sub numele de Augusta Traiana, iar forul antic ramâne un reper vizibil ?i astazi. Stara Zagora este o capitala culturala vitala, gazduind prima opera construita din Bulgaria ?i o scena literara vibranta. Cu parcurile sale generoase, economia puternica ?i mo?tenirea arheologica bogata, ora?ul sta ca o marturie a rezilien?ei ?i a evolu?iei urbane continue.",
      en: "Stara Zagora, known as the 'City of the Linden Trees,' is a remarkably modern and well-planned urban center in the heart of the Thracian Valley. After being completely leveled during the Russo-Turkish War in 1877, the city was rebuilt with a unique grid pattern of wide, straight boulevards, giving it a distinctively European atmosphere. However, its modern facade hides an incredibly deep history; the Museum of Neolithic Dwellings preserves two 8,000-year-old houses, considered the oldest in Europe. The city was also a major Roman hub named Augusta Traiana, and its ancient forum remains a prominent landmark today. Stara Zagora is a vital cultural capital, boasting the first opera house built in Bulgaria and a vibrant literary scene. With its lush parks, thriving economy, and rich archaeological heritage, it stands as a testament to resilience and continuous urban evolution."
    },
    factsAdvanced: {
      de: [
        "Das Museum der Neolithischen Wohnstätten bewahrt zwei Häuser aus dem 6. Jahrtausend v. Chr. an ihrem ursprünglichen Fundort.",
        "Stara Sagora wurde nach der Zerstörung 1877 vollständig nach einem Rastergrundriss neu aufgebaut.",
        "Im im Zentrum entdeckten römischen Forum von Augusta Traiana fanden einst auch Gladiatorenkämpfe statt.",
        "Die Staatsoper Stara Sagora ist die älteste und eine der renommiertesten Opernhäuser Bulgariens.",
        "Das nahegelegene Verteidiger-Denkmal von Stara Sagora ist ein 50 Meter hoher Betonbau in Form der russisch-bulgarischen Militärflagge.",
        "Der 1895 angelegte Ajazmo-Park umfasst 350 Hektar und beherbergt über 150 exotische Baumarten.",
        "Die Stadt liegt im geografischen Zentrum der Balkanhalbinsel.",
        "Die Brauerei Zagorka, seit 1902 in der Stadt ansässig, gehört zu den beliebtesten Biermarken des Landes."
      ],
      hu: [
        "Az Újkokori Lakóhelyek Múzeuma két, a Krisztus elotti 6. évezredbol származó házat oriz az eredeti helyén.",
        "Sztara Zagorát az 1877-es lerombolás után teljesen új, rácsos elrendezésben építették újjá.",
        "A belvárosban feltárt Augusta Traiana-i római fórum egykor gladiátorjátékoknak adott otthont.",
        "A városi Állami Operaház Bulgária legrégebbi és egyik legrangosabb operatársulata.",
        "A városhoz közeli Sztara Zagora védoinek emlékmuve egy 50 méter magas betonszerkezet, amely az orosz–bolgár hadi zászlót formázza.",
        "Az 1895-ben létesített Ajazmo park 350 hektáron terül el, és több mint 150 egzotikus fafajt mutat be.",
        "A város a Balkán-félsziget földrajzi középpontjában fekszik.",
        "Az 1902 óta a városban muködo Zagorka sörfozde Bulgária egyik legnépszerubb sörmárkája."
      ],
      ro: [
        "Muzeul Locuin?elor Neolitice conserva in situ doua case ce dateaza din mileniul al VI-lea î.Hr.",
        "Dupa distrugerea din 1877, Stara Zagora a fost reconstruit complet dupa un plan în forma de grila.",
        "Forumul Roman Augusta Traiana, descoperit în centrul ora?ului, a gazduit cândva un teatru pentru jocurile de gladiatori.",
        "Opera de Stat din ora? este cea mai veche ?i una dintre cele mai prestigioase companii de opera din Bulgaria.",
        "Memorialul Aparatorilor de la Stara Zagora din apropiere include o construc?ie masiva din beton, înalta de 50 de metri, ce reprezinta steagul militar ruso-bulgar.",
        "Parcul Ayazmo, înfiin?at în 1895, se întinde pe 350 de hectare ?i con?ine peste 150 de specii exotice de arbori.",
        "Ora?ul se afla în centrul geografic al Peninsulei Balcanice.",
        "Beraria Zagorka, prezenta în ora? din 1902, este una dintre cele mai populare marci de bere din ?ara."
      ],
      en: [
        "The Neolithic Dwellings Museum contains two houses dating back to the 6th millennium BCE, preserved in situ.",
        "Stara Zagora was completely rebuilt in a grid system following its destruction in 1877.",
        "The Roman Forum of Augusta Traiana, discovered in the city center, once featured a theater for gladiatorial games.",
        "The city's State Opera is the oldest and one of the most prestigious opera companies in Bulgaria.",
        "The nearby Memorial to the Defenders of Stara Zagora features a massive 50-meter-tall concrete structure representing the Russian-Bulgarian military flag.",
        "Ayazmo Park, founded in 1895, covers 350 hectares and contains over 150 exotic tree species.",
        "The city sits at the geographic center of the Balkan Peninsula.",
        "The Zagorka brewery, located in the city since 1902, is one of the most popular beer brands in the country."
      ]
    },
    image: "/geo-images/bulgaria/city-stara-zagora.webp"
  },
  {
    id: "city-blagoevgrad",
    type: "city",
    parent: "bg-country",
    coords: [23.0920, 42.0209],
    name: { de: "Blagoewgrad", hu: "Blagoevgrad", ro: "Blagoevgrad", en: "Blagoevgrad" },
    description: {
      de: "Blagoewgrad, im Südwesten Bulgariens im Tal des Flusses Struma gelegen, ist eine lebendige Universitätsstadt und ein bedeutendes kulturelles Zentrum der region. Die Stadt beherbergt zwei große Universitäten, darunter die American University in Bulgaria, was ihr ein junges und internationales Flair verleiht. Ein besonderes highlight ist das historische Viertel \\\\\\\"Varosha\\\\\\\" mit seinen gut erhaltenen Häusern aus der Zeit der bulgarischen Wiedergeburt und der Kirche Mariä Himmelfahrt. Blagoewgrad dient als idealer Ausgangspunkt für Ausflüge in das nahegelegene Rila-Gebirge und zum berühmten Rila-Kloster. Die Stadt bietet zudem zahlreiche Parks, Cafés und eine dynamische Kulturszene. Blagoewgrad verbindet historische Tradition mit moderner Bildung und ist ein wichtiger Knotenpunkt auf dem Weg nach Griechenland.",
      hu: "Blagoevgrad Bulgária délnyugati részén, a Sztruma-folyó völgyében fekvo város, élénk egyetemi központ és a régió jelentos kulturális helyszíne. A város két nagy egyetemnek ad otthont, köztük a bulgáriai Amerikai Egyetemnek, ami fiatalos és nemzetközi hangulatot kölcsönöz neki. Különleges látnivaló a \\\\\\\"Varosa\\\\\\\" történelmi negyed, jól megorzött újjászületés kori házaival és az Istenanya elszenderedése templommal. Blagoevgrad ideális kiindulópont a közeli Rila-hegységinto és a híres Rilai kolostorhoz tett kirándulásokhoz. A város emellett számos parkot, kávézót és dinamikus kulturális életet kínál. Blagoevgrad ötvözi a történelmi hagyományokat a modern oktatással, és fontos csomópont a Görögország felé vezeto úton.",
      ro: "Blagoevgrad, situat în sud-vestul Bulgariei, în valea râului Struma, este un ora? universitar vibrant ?i un centru cultural important al regiunii. Ora?ul gazduie?te doua universita?i mari, inclusiv Universitatea Americana din Bulgaria, ceea ce îi confera un fler tânar ?i interna?ional. Un punct culminant special este cartierul istoric \\\\\\\"Varosha\\\\\\\", cu casele de bine conservate din perioada Rena?terii bulgare ?i Biserica Adormirea Maicii Domnului. Blagoevgrad serve?te ca punct de plecare ideal pentru excursii în Mun?ii Rila din apropiere ?i la celebra Manastire Rila. Ora?ul ofera, de asemenea, numeroase parcuri, cafenele ?i o scena culturala dinamica. Blagoevgrad îmbina tradi?ia istorica cu educa?ia moderna ?i este un nod important pe drumul catre Grecia.",
      en: "Blagoevgrad, located in southwestern Bulgaria in the Struma River valley, is a vibrant university city and a significant cultural center of the region. The city is home to two major universities, including the American University in Bulgaria, giving it a youthful and international flair. A special highlight is the \\\\\\\\\\\\\\\"Varosha\\\\\\\\\\\\\\\" historic district, with its well-preserved houses from the Bulgarian National Revival period and the Church of the Dormition of the Mother of God. Blagoevgrad serves as an ideal starting point for excursions to the nearby Rila Mountains and the famous Rila Monastery. The city also offers numerous parks, cafes, and a dynamic cultural scene. Blagoevgrad combines historical tradition with modern education and is an important hub on the way to Greece."
    },
    facts: {
      de: ["Status: Universitätsstadt des Südwestens", "Bildung: Sitz der American University in Bulgaria", "Kultur: Historisches Viertel 'Varosha'", "Lage: Im Tal der Struma", "Natur: Tor zum Rila-Gebirge", "Wirtschaft: Regionales Handelszentrum"],
      hu: ["Státusz: A délnyugat egyetemi városa", "Oktatás: A bulgáriai Amerikai Egyetem székhelye", "Kultúra: 'Varosa' történelmi negyed", "Fekvés: A Sztruma völgyében", "Természet: Kapu a Rila-hegységhez", "Gazdaság: Regionális kereskedelmi központ"],
      ro: ["Statut: Ora? universitar al sud-vestului", "Educa?ie: Sediul Universita?ii Americane din Bulgaria", "Cultura: Cartierul istoric 'Varosha'", "Loca?ie: În valea râului Struma", "Natura: Poarta catre Mun?ii Rila", "Economie: Centru comercial regional"],
      en: ["Status: University city of the southwest", "Education: Home to the American University in Bulgaria", "Culture: 'Varosha' historic district", "Location: In the Struma River valley", "Nature: Gateway to the Rila Mountains", "Economy: Regional trade center"]
    },
    descriptionAdvanced: {
      de: "Blagoewgrad ist eine dynamische Universitätsstadt im malerischen Tal des Struma-Flusses und der wichtigste Verwaltungs- und Kulturknotenpunkt im Südwesten Bulgariens. Bekannt ist sie vor allem für ihr jugendliches Flair, das durch zwei große Hochschulen geprägt wird: die Südwestuniversität \\\\\\\"Neofit Rilski\\\\\\\" und die American University in Bulgaria, die erste Liberal-Arts-Hochschule im amerikanischen Stil in Osteuropa. Den historischen Charme prägt das Stadtviertel Warosha, ein liebevoll restauriertes Quartier im Stil der bulgarischen Wiedergeburt mit kopfsteingepflasterten Gassen und der markanten Kirche Mariä Tempelgang. Durch ihre Lage am Fuße der Rila- und Pirin-Gebirge ist Blagoewgrad ein strategisches Tor für Outdoor-Fans, die zu erstklassigen Skigebieten oder zum historischen Rila-Kloster aufbrechen. Das Zentrum ist eine fußgängerfreundliche Zone mit Cafés, Brunnen und lebendigen Plätzen – eine gelungene Mischung aus akademischem Geist und traditionellem bulgarischem Flair.",
      hu: "Blagoevgrad lendületes egyetemi város a festoi Sztruma folyó völgyében, Bulgária délnyugati részének legfontosabb közigazgatási és kulturális központja. Fiatalos hangulatáért elsosorban két nagy intézmény felelos: a Neofit Rilski Délnyugati Egyetem és a Bulgáriai Amerikai Egyetem, amely Kelet-Európa elso, amerikai mintára létrehozott liberal-arts foiskolája. A történelmi varázs szívét a Varosa-negyed adja, gondosan helyreállított, újjászületés-kori épületekkel, macskaköves utcákkal és a Boldogságos Szuz Bemutatása-templommal. A Rila- és a Pirin-hegység lábánál fekvo város stratégiai kapu a kiváló sípályák és a történelmi Rilai kolostor felé. A belvárosi sétálóövezet kávézókkal, szökokutakkal és élénk közterekkel az akadémiai szellem és a hagyományos bolgár hangulat tökéletes elegyét kínálja.",
      ro: "Blagoevgrad este un ora? universitar dinamic, situat în pitoreasca vale a râului Struma, fiind principalul centru administrativ ?i cultural din sud-vestul Bulgariei. Este renumit pentru energia sa tinereasca, în mare parte gra?ie celor doua institu?ii majore: Universitatea de Sud-Vest \\\\\\\"Neofit Rilski\\\\\\\" ?i Universitatea Americana din Bulgaria — prima institu?ie de tip liberal arts în stil american din Europa de Est. Inima farmecului istoric o constituie cartierul Varosha, o zona frumos restaurata, cu arhitectura din perioada Rena?terii bulgare, stradu?e pavate ?i impunatoarea Biserica Intrarea în Biserica a Maicii Domnului. Pozi?ionat la poalele mun?ilor Rila ?i Pirin, Blagoevgrad este o poarta strategica pentru iubitorii de aer liber care pornesc catre sta?iunile de schi de top sau catre istorica Manastire Rila. Centrul ora?ului este o zona pietonala plina de cafenele, fântâni ?i spa?ii publice vibrante, oglindind un echilibru perfect între spiritul academic ?i atmosfera tradi?ionala bulgareasca.",
      en: "Blagoevgrad is a dynamic university town located in the picturesque Struma River valley, acting as the primary administrative and cultural hub of southwestern Bulgaria. The city is renowned for its youthful energy, largely thanks to hosting two major institutions: Neofit Rilski South-West University and the American University in Bulgaria, the latter being the first American-style liberal arts college in Eastern Europe. The heart of the city's historical charm lies in the Varosha district, a beautifully restored neighborhood of National Revival architecture with cobblestone lanes and the prominent Church of the Presentation of the Blessed Virgin. Blagoevgrad's location at the foot of the Rila and Pirin mountains makes it a strategic gateway for outdoor enthusiasts heading to world-class ski resorts or the historic Rila Monastery. The city's center is a pedestrian-friendly zone filled with cafes, fountains, and vibrant public spaces, reflecting a perfect blend of academic spirit and traditional Bulgarian atmosphere."
    },
    factsAdvanced: {
      de: [
        "Die 1991 gegründete American University in Bulgaria zieht Studierende aus über 40 Ländern an.",
        "Warosha ist ein geschütztes architektonisches Reservat, viele Häuser stammen aus dem frühen 19. Jahrhundert.",
        "Die Stadt hieß früher Gorna Dschumaja, bevor sie 1950 nach dem sozialistischen Politiker Dimitar Blagoew umbenannt wurde.",
        "Blagoewgrad ist berühmt für seine natürlichen Thermalquellen, die schon in der Antike zur Heilung genutzt wurden.",
        "Das Regionalmuseum besitzt eine der umfangreichsten archäologischen Sammlungen Südwestbulgariens.",
        "Die nahegelegenen Erdpyramiden von Stob, nur 20 km entfernt, sind eindrucksvolle natürliche Felsformationen.",
        "Blagoewgrad ist ein bedeutender Knotenpunkt an der Autobahn von Sofia zur griechischen Grenze bei Kulata.",
        "Der Stadtpark \\\\\\\"Mazedonien\\\\\\\" gehört zu den größten und schönsten städtischen Parks der Region."
      ],
      hu: [
        "Az 1991-ben alapított Bulgáriai Amerikai Egyetem több mint 40 országból vonz hallgatókat.",
        "A Varosa védett építészeti rezervátum, sok háza a 19. század elejérol származik.",
        "A város korábban Gorna Dzsumaja néven volt ismert, 1950-ben nevezték át Dimitar Blagoev szocialista politikusról.",
        "Blagoevgrad híres természetes termálforrásairól, melyeket már az ókorban gyógyításra használtak.",
        "A regionális történeti múzeum Délnyugat-Bulgária egyik legátfogóbb régészeti gyujteményével rendelkezik.",
        "A közeli Sztob-i földpiramisok látványos sziklaképzodmények, mindössze 20 km-re a várostól.",
        "Blagoevgrad fontos csomópont a Szófiát a görög határ Kulata-i átkelojével összeköto autópályán.",
        "A \\\\\\\"Makedónia\\\\\\\" városi park a régió egyik legnagyobb és legszebben kialakított zöldterülete."
      ],
      ro: [
        "Universitatea Americana din Bulgaria, fondata în 1991, atrage studen?i din peste 40 de ?ari.",
        "Varosha este o rezerva?ie arhitecturala protejata, multe case datând de la începutul secolului al XIX-lea.",
        "Ora?ul s-a numit ini?ial Gorna Dzhumaya, fiind redenumit în 1950 dupa liderul socialist Dimitar Blagoev.",
        "Blagoevgrad este renumit pentru izvoarele sale termale naturale, folosite în scopuri terapeutice înca din Antichitate.",
        "Muzeul de istorie regionala al ora?ului adaposte?te una dintre cele mai cuprinzatoare colec?ii arheologice din sud-vest.",
        "Piramidele de pamânt de la Stob, forma?iuni stâncoase naturale, se afla la doar 20 km de ora?.",
        "Blagoevgrad este un nod important pe autostrada interna?ionala ce leaga Sofia de grani?a cu Grecia la Kulata.",
        "Parcul \\\\\\\"Macedonia\\\\\\\" din ora? este unul dintre cele mai mari ?i mai frumos amenajate parcuri urbane din regiune."
      ],
      en: [
        "The American University in Bulgaria, founded in 1991, attracts students from over 40 different countries.",
        "Varosha is a protected architectural reserve, with many houses dating back to the early 19th century.",
        "The city was originally known as Gorna Dzhumaya until it was renamed in 1950 after socialist leader Dimitar Blagoev.",
        "Blagoevgrad is famous for its natural thermal springs, which have been used for healing since ancient times.",
        "The city's regional historical museum features one of the most comprehensive archaeological collections in the southwest.",
        "The nearby Stob Earth Pyramids are natural rock formations located just 20 km from the city.",
        "Blagoevgrad is a major hub on the international highway connecting Sofia to the Greek border at Kulata.",
        "The city's 'Macedonia' Park is one of the largest and most beautifully landscaped urban parks in the region."
      ]
    },
    image: "/geo-images/bulgaria/city-blagoevgrad.webp"
  },
  {
    id: "city-haskovo",
    type: "city",
    parent: "bg-country",
    coords: [25.5560, 41.9341],
    name: { de: "Haskowo", hu: "Haskovo", ro: "Haskovo", en: "Haskovo" },
    description: {
      de: "Haskowo, im Südosten Bulgariens gelegen, ist eine Stadt mit einer langen Geschichte und einer strategischen Lage nahe der Grenzen zur Türkei und zu Griechenland. Die Stadt ist weltweit bekannt für das monumentale Denkmal der Heiligen Jungfrau Maria, das als die höchste Statue der Muttergottes mit dem Jesuskind im Guinness-Buch der Rekorde steht. Haskowo bietet eine charmante Innenstadt mit renovierten Plätzen, Brunnen und Parks. In der Umgebung befinden sich bedeutende archäologische Stätten wie das thrakische Grabmal von Aleksandrowo. Die Stadt ist ein wichtiges Zentrum für Handel und Landwirtschaft und verbindet traditionelle bulgarische Gastfreundschaft mit einer modernen regionalen Entwicklung.",
      hu: "Haszkovo Bulgária délkeleti részén fekvo város, hosszú múltra tekint vissza, és stratégiai elhelyezkedéssel bír a török és a görög határ közelében. A város világszerte ismert a Szuz Mária monumentális emlékmuvérol, amely a Guinness Rekordok Könyvében a világ legmagasabb Szuz Mária-szobraként szerepel. Haszkovo hangulatos belvárost kínál felújított terekkel, szökokutakkal és parkokkal. A környéken jelentos régészeti lelohelyek találhatók, mint például az alekszandrovói trák sírkamra. A város a kereskedelem és a mezogazdaság fontos központja, amely ötvözi a hagyományos bolgár vendégszeretetet a modern regionális fejlodéssel.",
      ro: "Haskovo, situat în sud-estul Bulgariei, este un ora? cu o istorie lunga ?i o loca?ie strategica aproape de grani?ele cu Turcia ?i Grecia. Ora?ul este cunoscut în întreaga lume pentru monumentul monumental al Sfintei Fecioare Maria, care figureaza în Cartea Recordurilor Guinness ca fiind cea mai înalta statuie a Maicii Domnului cu Pruncul. Haskovo ofera un centru fermecator cu pie?e renovate, fântâni ?i parcuri. În împrejurimi se afla situri arheologice importante, cum ar fi mormântul tracic de la Alexandrovo. Ora?ul este un centru important pentru comer? ?i agricultura ?i îmbina ospitalitatea tradi?ionala bulgara cu o dezvoltare regionala moderna.",
      en: "Haskovo, located in southeastern Bulgaria, is a city with a long history and a strategic location near the borders with Turkey and Greece. The city is world-famous for the monumental Monument of the Holy Virgin Mary, which stands in the Guinness World Records as the tallest statue of the Mother of God with the Infant Jesus. Haskovo offers a charming city center with renovated squares, fountains, and parks. In the vicinity are significant archaeological sites, such as the Thracian Tomb of Alexandrovo. The city is an important center for trade and agriculture, combining traditional Bulgarian hospitality with modern regional development."
    },
    facts: {
      de: ["Wahrzeichen: Mariendenkmal (Guinness-Rekord)", "Lage: Nahe der türkischen Grenze", "Geschichte: Thrakisches Grabmal von Aleksandrowo", "Kultur: Glockenturm neben dem Mariendenkmal", "Wirtschaft: Zentrum für Handel und Textilien", "Natur: Park 'Kenana'"],
      hu: ["Jelkép: Mária-emlékmu (Guinness-rekord)", "Fekvés: A török határ közelében", "Történelem: Alekszandrovói trák sír", "Kultúra: Harangtorony a Mária-szobor mellett", "Gazdaság: Kereskedelmi és textilipari központ", "Természet: 'Kenana' park"],
      ro: ["Simbol: Monumentul Fecioarei Maria (Record Guinness)", "Loca?ie: Aproape de grani?a cu Turcia", "Istorie: Mormântul tracic de la Alexandrovo", "Cultura: Turnul cu clopot de lânga monument", "Economie: Centru pentru comer? ?i textile", "Natura: Parcul 'Kenana'"],
      en: ["Landmark: Virgin Mary Monument (Guinness Record)", "Location: Near the Turkish border", "History: Thracian Tomb of Alexandrovo", "Culture: Bell tower next to the monument", "Economy: Center for trade and textiles", "Nature: 'Kenana' Park"]
    },
    descriptionAdvanced: {
      de: "Haskowo ist eine Stadt der Rekorde und antiken Geheimnisse, gelegen in der hügeligen Landschaft Südostbulgariens nahe der türkischen und griechischen Grenze. Internationale Aufmerksamkeit erlangte sie durch das Marien-Monument, das von Guinness World Records als höchste Statue der Muttergottes mit dem Christuskind anerkannt wurde. Auf dem Jamatscha-Hügel gelegen, gehört zum Ensemble auch ein 30 Meter hoher Glockenturm mit weitem Blick über die Stadt. Historisch ist die Region eine Schatzkammer thrakischer Kultur, allen voran das nahegelegene Grabmal von Aleksandrowo mit einigen der besterhaltenen Fresken aus dem 4. Jahrhundert v. Chr. auf dem Balkan. Das Stadtzentrum lädt mit Fußgängerzonen, kunstvollen Brunnen und dem ausgedehnten Park Kenana zum Verweilen ein. Haskowo ist ein wichtiger Knotenpunkt für den internationalen Handel und tief mit Tabak- und Textilproduktion verbunden – eine spannende Mischung aus religiöser Hingabe, antiker Geschichte und moderner Wirtschaft.",
      hu: "Haszkovo a rekordok és ókori titkok városa: Bulgária délkeleti részén, a hullámzó dombok között, a török és görög határ közelében fekszik. Nemzetközi hírnévre a Szuz Mária-emlékmu révén tett szert, amelyet a Guinness Rekordok Könyve hivatalosan a világ legmagasabb, a Gyermek Jézust tartó Szuz Mária-szobraként ismer el. A Jamacsa-dombon álló emlékmu részét képezi egy 30 méter magas harangtorony is, ahonnan szemkápráztató kilátás nyílik a városra. A régió valóságos trák kultúrkincs: különösen az alekszandrovói trák sírkamra emelkedik ki, amelyben a Balkán egyik legjobban megorzött Krisztus elotti 4. századi freskója látható. Haszkovo belvárosa hívogató sétálóutcákkal, díszes szökokutakkal és a hangulatos Kenana parkkal várja a látogatókat. A város fontos nemzetközi kereskedelmi csomópont, és mélyen kötodik a dohány- és textiliparhoz, így egyedülállóan ötvözi a vallási áhítatot, az osi történelmet és a modern gazdaságot.",
      ro: "Haskovo este un ora? al recordurilor ?i al misterelor antice, situat printre dealurile blânde din sud-estul Bulgariei, aproape de grani?ele cu Turcia ?i Grecia. A devenit cunoscut la nivel interna?ional pentru Monumentul Sfintei Fecioare Maria, certificat oficial de Guinness World Records drept cea mai înalta statuie a Maicii Domnului cu Pruncul Iisus. Amplasat pe Dealul Yamacha, monumentul include un clopotni?a de 30 de metri, de unde se deschide o panorama larga asupra ora?ului. Din punct de vedere istoric, regiunea este o adevarata comoara de cultura tracica, în special prin Mormântul de la Alexandrovo, care pastreaza unele dintre cele mai bine conservate fresce din secolul al IV-lea î.Hr. din Balcani. Centrul ora?ului este o zona primitoare, cu artere pietonale, fântâni elegante ?i pitorescul Parc Kenana. Haskovo este un nod important pentru comer?ul interna?ional ?i este strâns legat de tradi?iile produc?iei de tutun ?i textile, oferind un amestec captivant de devotament religios, istorie antica ?i economie moderna.",
      en: "Haskovo is a city of records and ancient mysteries, situated in the rolling hills of southeastern Bulgaria near the borders of Turkey and Greece. It gained international fame for its Monument of the Holy Virgin Mary, which was officially certified by Guinness World Records as the tallest statue of the Mother of God with the infant Christ. Standing on Yamacha Hill, the monument includes a 30-meter-tall bell tower that offers sweeping views of the city. Historically, the region is a treasure trove of Thracian culture, most notably the nearby Alexandrovo Tomb, which contains some of the best-preserved 4th-century BCE frescoes in the Balkans. Haskovo's center is an inviting space of pedestrian zones, ornate fountains, and the scenic Kenana Park. The city serves as a vital junction for international trade and is deeply rooted in the traditions of tobacco and textile production, making it a compelling mix of religious devotion, ancient history, and modern commerce."
    },
    factsAdvanced: {
      de: [
        "Das Marien-Monument ist inklusive Sockel 32,8 Meter hoch.",
        "Im benachbarten Glockenturm hängen 8 unterschiedlich große Glocken; die größte wiegt 500 kg.",
        "Das im Jahr 2000 entdeckte thrakische Grab von Aleksandrowo zeigt einzigartige Jagd- und Bankettszenen.",
        "Haskowo ist eine der ältesten Siedlungen Bulgariens; die Spuren menschlicher Besiedlung reichen 7.000 Jahre zurück.",
        "Der \\\\\\\"Alte Uhrturm\\\\\\\" der Stadt wurde im 19. Jahrhundert errichtet und 2013 vollständig restauriert.",
        "Der Kenana-Park ist mit über 40 Hektar Waldfläche der größte Park der Stadt.",
        "Haskowo ist ein bedeutender Produzent hochwertiger Baumwoll- und Seidentextilien.",
        "Die nahe gelegene Kirche von Usundschowo ist ein einzigartiges Bauwerk, das in osmanischer Zeit zeitweise als Moschee diente."
      ],
      hu: [
        "A Szuz Mária-emlékmu talapzatával együtt 32,8 méter magas.",
        "A mellette álló harangtorony 8 különbözo méretu harangot rejt; a legnagyobb 500 kilogrammos.",
        "A 2000-ben felfedezett alekszandrovói trák sírkamra egyedülálló vadász- és lakomajeleneteket ábrázol.",
        "Haszkovo Bulgária egyik legrégebbi települése: a területen 7000 éves emberi jelenlét nyomai találhatók.",
        "A város \\\\\\\"Régi Óratornya\\\\\\\" a 19. században épült, és 2013-ban teljes pompájában restaurálták.",
        "A Kenana park több mint 40 hektáros erdos területével a város legnagyobb parkja.",
        "Haszkovo jelentos kiváló minoségu pamut- és selyemtextil-eloállító központ.",
        "A közeli Uzundzsovói templom egyedülálló építészeti emlék, amely az oszmán korszakban idoszakosan mecsetként is muködött."
      ],
      ro: [
        "Monumentul Sfintei Fecioare Maria are 32,8 metri înal?ime, incluzând ?i piedestalul.",
        "Clopotni?a aflata lânga monument adaposte?te 8 clopote de diferite dimensiuni; cel mai mare cântare?te 500 kg.",
        "Mormântul tracic de la Alexandrovo, descoperit în 2000, con?ine scene unice de vânatoare ?i de ospa? ritualic.",
        "Haskovo este una dintre cele mai vechi a?ezari din Bulgaria, cu urme de via?a umana de peste 7.000 de ani.",
        "\\\\\\\"Vechiul Turn cu Ceas\\\\\\\" al ora?ului a fost ridicat în secolul al XIX-lea ?i restaurat complet în 2013.",
        "Parcul Kenana este cel mai mare parc al ora?ului, întinzându-se pe peste 40 de hectare de padure.",
        "Haskovo este un producator important de textile de calitate superioara din bumbac ?i matase.",
        "Biserica Uzundzhovo, aflata în apropiere, este un monument arhitectural unic, folosit pentru o vreme drept moschee în perioada otomana."
      ],
      en: [
        "The Monument of the Holy Virgin Mary stands 32.8 meters tall, including its pedestal.",
        "The bell tower next to the monument houses 8 bells of varying sizes, the largest weighing 500 kg.",
        "The Thracian Tomb of Alexandrovo, discovered in 2000, features unique scenes of hunting and banquet rituals.",
        "Haskovo is one of the oldest settlements in Bulgaria, with evidence of life dating back 7,000 years.",
        "The city's 'Old Clock Tower' was originally built in the 19th century and restored to its full glory in 2013.",
        "Kenana Park is the largest park in the city, spanning over 40 hectares of forested area.",
        "Haskovo is a major producer of high-quality cotton and silk textiles.",
        "The nearby Uzundzhovo Church is a unique architectural monument that was once a mosque during the Ottoman period."
      ]
    },
    image: "/geo-images/bulgaria/city-haskovo.webp"
  },
  {
    id: "city-pazardzhik",
    type: "city",
    parent: "bg-country",
    coords: [24.3336, 42.1928],
    name: { de: "Pasardschik", hu: "Pazardzsik", ro: "Pazardzhik", en: "Pazardzhik" },
    description: {
      de: "Pasardschik, in der fruchtbaren oberthrakischen Tiefebene am Ufer der Mariza gelegen, ist eine Stadt mit einer reichen Handels- und Handwerkstradition. Die Stadt ist bekannt für ihre weitläufigen Parks, darunter der Park \\\\\\\"Insel der Freiheit\\\\\\\", der sich auf einer Insel im Fluss Mariza befindet und zahlreiche Skulpturen und Freizeitmöglichkeiten bietet. Ein bedeutendes Wahrzeichen ist die Kirche der Heiligen Jungfrau Maria, die für ihre beeindruckende Ikonostase aus geschnitztem Holz berühmt ist. Pasardschik dient als wichtiger regionaler Knotenpunkt zwischen Sofia und Plowdiw und ist ein Zentrum für Landwirtschaft und Leichtindustrie. Die Stadt verbindet eine ruhige Atmosphäre mit kulturellen Schätzen und ist ein idealer Ausgangspunkt für Ausflüge in die nahegelegenen Rhodopen.",
      hu: "Pazardzsik a termékeny Felso-trák síkságon, a Marica-folyó partján fekvo város, gazdag kereskedelmi és kézmuves hagyományokkal. A város tágas parkjairól ismert, köztük a \\\\\\\"Szabadság-sziget\\\\\\\" parkról, amely a Marica-folyó egyik szigetén található, és számos szobrot, valamint szabadidos lehetoséget kínál. Jelentos látnivaló a Szuz Mária-templom, amely lenyugözo, faragott fából készült ikonfaláról (ikonosztáz) híres. Pazardzsik fontos regionális csomópont Szófia és Plovdiv között, a mezogazdaság és a könnyuipar központja. A város ötvözi a nyugodt légkört a kulturális kincsekkel, és ideális kiindulópont a közeli Rodope-hegységbe tett kirándulásokhoz.",
      ro: "Pazardzhik, situat în fertila Câmpie a Traciei Superioare, pe malul râului Maritsa, este un ora? cu o bogata tradi?ie comerciala ?i me?te?ugareasca. Ora?ul este cunoscut pentru parcurile sale vaste, inclusiv parcul \\\\\\\"Insula Liberta?ii\\\\\\\", situat pe o insula în râul Maritsa, care ofera numeroase sculpturi ?i facilita?i de recreere. Un reper important este Biserica Sfintei Fecioare Maria, renumita pentru iconostasul sau impresionant din lemn sculptat. Pazardzhik serve?te ca un nod regional important între Sofia ?i Plovdiv ?i este un centru pentru agricultura ?i industria u?oara. Ora?ul îmbina o atmosfera lini?tita cu comori culturale ?i este un punct de plecare ideal pentru excursii în Mun?ii Rodopi din apropiere.",
      en: "Pazardzhik, located in the fertile Upper Thracian Plain on the banks of the Maritsa River, is a city with a rich trade and craft tradition. The city is known for its expansive parks, including the \\\\\\\\\\\\\\\"Island of Freedom\\\\\\\\\\\\\\\" park, situated on an island in the Maritsa River, offering numerous sculptures and leisure facilities. A significant landmark is the Church of the Holy Virgin Mary, famous for its impressive carved wood iconostasis. Pazardzhik serves as an important regional hub between Sofia and Plovdiv and is a center for agriculture and light industry. The city combines a quiet atmosphere with cultural treasures and is an ideal starting point for excursions to the nearby Rhodope Mountains."
    },
    facts: {
      de: ["Lage: In der oberthrakischen Tiefebene", "Natur: Park 'Insel der Freiheit' an der Mariza", "Kultur: Kirche der Hl. Jungfrau Maria", "Geschichte: Gegründet als Handelszentrum", "Wirtschaft: Zentrum für Landwirtschaft", "Verkehr: Wichtiger Knotenpunkt Sofia-Plowdiw"],
      hu: ["Fekvés: A Felso-trák síkságon", "Természet: 'Szabadság-sziget' park a Maricán", "Kultúra: Szuz Mária-templom", "Történelem: Kereskedelmi központként alapítva", "Gazdaság: Mezogazdasági központ", "Közlekedés: Fontos csomópont Szófia és Plovdiv között"],
      ro: ["Loca?ie: În Câmpia Traciei Superioare", "Natura: Parcul 'Insula Liberta?ii' pe Maritsa", "Cultura: Biserica Sf. Fecioare Maria", "Istorie: Fondat ca centru comercial", "Economie: Centru agricol", "Transport: Nod important Sofia-Plovdiv"],
      en: ["Location: In the Upper Thracian Plain", "Nature: 'Island of Freedom' park on the Maritsa", "Culture: Church of the Holy Virgin Mary", "History: Founded as a trade center", "Economy: Agricultural center", "Transport: Important hub between Sofia and Plovdiv"]
    },
    descriptionAdvanced: {
      de: "Pasardschik wird durch seine strategische Lage am Ufer der Mariza und seine tief verwurzelte Handels- und Handwerkstradition geprägt. Im späten 15. Jahrhundert als Marktort gegründet, hat sich die Stadt zu einem wichtigen landwirtschaftlichen und industriellen Zentrum in der fruchtbaren Oberthrakischen Tiefebene entwickelt. Besonders berühmt ist sie für den Park \\\\\\\"Insel der Freiheit\\\\\\\" (Ostrowat), einen einzigartigen Stadtpark auf einer natürlichen Insel in der Mariza, mit Zoo, zahlreichen Skulpturen und Freizeitanlagen. Ein weiteres kulturelles Juwel ist die Marienkirche mit einer prächtigen Ikonostase aus der Debar-Schule – eines der schönsten Holzschnitzwerke des Balkans. Durch die Nähe zu Plowdiw und den ruhigen Rhodopen ist Pasardschik ein guter Zwischenstopp für Reisende, die Zentralbulgarien erkunden. Die Mischung aus Flussidylle und religiöser Kunst bietet einen stillen, aber tiefgehenden Einblick in das bulgarische Kulturerbe.",
      hu: "Pazardzsik fo jellegzetessége a Marica folyó partján elfoglalt stratégiai fekvése és a kereskedelem, valamint a hagyományos kézmuvesség mély gyökerei. A 15. század végén piacvárosként alapított település mára a termékeny Felso-trák síkság fontos mezogazdasági és ipari központja. A város különösen híres a \\\\\\\"Szabadság-szigete\\\\\\\" (Osztrovat) nevu parkról, amely a Marica egyik természetes szigetén kapott helyet, és állatkertet, számos szobrot és szabadidos létesítményt foglal magában. Másik kulturális gyöngyszem a Szuz Mária-templom, amely a Debar-iskola mesterei által faragott, világszínvonalú ikonosztáznak ad otthont – ez a Balkán legszebb fafaragásai közé tartozik. A történelmi Plovdiv és a nyugodt Rodope-hegység közelsége miatt Pazardzsik kényelmes és érdekes megálló Közép-Bulgária felfedezoinek. A folyóparti szépség és a vallási muvészet ötvözete csendes, mégis mély betekintést kínál a bolgár kulturális örökségbe.",
      ro: "Pazardzhik este definit de pozi?ia sa strategica pe malurile râului Mari?a ?i de tradi?iile sale profunde în comer? ?i me?te?uguri. Fondat la sfâr?itul secolului al XV-lea ca pia?a, ora?ul s-a dezvoltat într-un centru agricol ?i industrial important al fertilei Câmpii a Traciei Superioare. Este renumit în special pentru parcul \\\\\\\"Insula Liberta?ii\\\\\\\" (Ostrovat), un parc urban deosebit, situat pe o insula naturala a râului Mari?a, care gazduie?te o gradina zoologica, numeroase statui ?i spa?ii de recreere. O alta bijuterie culturala este Biserica Maicii Domnului, care adaposte?te un iconostas sculptat în lemn de mae?trii ?colii din Debar — considerat unul dintre cele mai frumoase exemple de sculptura în lemn din Balcani. Apropierea de istoricul ora? Plovdiv ?i de lini?ti?ii Mun?i Rodopi face din Pazardzhik o oprire convenabila ?i interesanta pentru cei care exploreaza centrul Bulgariei. Combina?ia dintre frumuse?ea fluviala ?i arta religioasa ofera o privire discreta, dar profunda asupra patrimoniului cultural bulgar.",
      en: "Pazardzhik is a city defined by its strategic location on the banks of the Maritsa River and its deep roots in trade and traditional crafts. Founded in the late 15th century as a marketplace, it has grown into a vital agricultural and industrial center in the fertile Upper Thracian Plain. The city is particularly famous for the 'Island of Freedom' (Ostrovat), a unique urban park located on a natural island in the Maritsa River, which features a zoo, numerous statues, and recreational spaces. Another cultural gem is the Church of the Mother of God, which houses a world-class iconostasis carved by the masters of the Debar school, considered one of the finest examples of woodcarving in the Balkans. Pazardzhik's proximity to both the historic city of Plovdiv and the serene Rhodope Mountains makes it a convenient and interesting stop for travelers exploring central Bulgaria. The city's blend of riverside beauty and religious artistry offers a quiet but profound look into Bulgarian cultural heritage."
    },
    factsAdvanced: {
      de: [
        "Pasardschik trug ursprünglich den Namen Tatar-Pasardschik, weil die Stadt von Krimtataren als Marktort gegründet wurde.",
        "Die hölzerne Ikonostase der Marienkirche wurde von Meistern in über zehn Jahren gefertigt.",
        "Im Park \\\\\\\"Insel der Freiheit\\\\\\\" befindet sich eine der größten Freilicht-Skulpturengalerien Bulgariens.",
        "Das Regionalmuseum der Stadt zählt zu den ältesten des Landes und wurde 1911 gegründet.",
        "Pasardschik liegt genau auf halber Strecke der Hauptstraße und Bahnlinie zwischen Sofia und Plowdiw.",
        "Während der Osmanenzeit war die Stadt ein bedeutendes Zentrum für Reis- und Seidenproduktion.",
        "Der 1741 erbaute Uhrturm von Pasardschik ist einer der wenigen erhaltenen osmanischen Türme in Bulgarien.",
        "Die nahegelegenen Bessaparski-Hügel sind eine bedeutende archäologische Stätte mit zahlreichen thrakischen Grabhügeln."
      ],
      hu: [
        "Pazardzsik eredetileg a Tatar Pazardzsik nevet viselte, mert a várost krími tatárok alapították piacvárosként.",
        "A Szuz Mária-templom faragott ikonosztázát mesterek több mint tíz év alatt készítették el.",
        "A \\\\\\\"Szabadság-szigete\\\\\\\" parkban Bulgária egyik legnagyobb szabadtéri szobortárlata található.",
        "A város regionális történeti múzeumát 1911-ben alapították, és az ország egyik legrégebbi múzeuma.",
        "Pazardzsik pontosan félúton fekszik a Szófia–Plovdiv közötti foúton és vasútvonalon.",
        "Az Oszmán Birodalom idején a város fontos rizs- és selyemtermelo központ volt.",
        "Pazardzsik 1741-ben épült órás tornya egyike a kevés fennmaradt oszmán kori toronynak Bulgáriában.",
        "A közeli Bessaparszki-dombok jelentos régészeti lelohelyek, számos trák halomsírral."
      ],
      ro: [
        "Pazardzhik s-a numit ini?ial Tatar Pazardzhik, deoarece a fost fondat de tatarii din Crimeea ca ora? de târg.",
        "Iconostasul sculptat din lemn al Bisericii Maicii Domnului a fost realizat de me?teri pe parcursul a peste 10 ani.",
        "Parcul \\\\\\\"Insula Liberta?ii\\\\\\\" gazduie?te una dintre cele mai mari galerii de sculptura în aer liber din Bulgaria.",
        "Muzeul de istorie regionala al ora?ului este unul dintre cele mai vechi din ?ara, fondat în 1911.",
        "Pazardzhik este situat exact la jumatatea drumului ?i a caii ferate principale dintre Sofia ?i Plovdiv.",
        "În perioada otomana, ora?ul a fost un important centru de produc?ie a orezului ?i a matasii.",
        "Turnul cu Ceas din Pazardzhik, construit în 1741, este unul dintre pu?inele turnuri otomane pastrate în Bulgaria.",
        "Dealurile Besaparski din apropiere sunt un sit arheologic important, cu numeroase tumuli funerari traci."
      ],
      en: [
        "Pazardzhik was originally named Tatar Pazardzhik because it was founded by Crimean Tatars as a market town.",
        "The wood-carved iconostasis in the Church of the Mother of God took masters over 10 years to complete.",
        "The 'Island of Freedom' park is home to one of the largest open-air sculpture galleries in Bulgaria.",
        "The city's regional historical museum is one of the oldest in the country, founded in 1911.",
        "Pazardzhik is located exactly halfway on the main road and railway line between Sofia and Plovdiv.",
        "The city was once a major center for the production of rice and silk in the Ottoman Empire.",
        "Pazardzhik's Clock Tower, built in 1741, is one of the few surviving Ottoman-era towers in Bulgaria.",
        "The nearby Besaparski Hills are a significant archaeological site with numerous Thracian burial mounds."
      ]
    },
    image: "/geo-images/bulgaria/city-pazardzhik.webp"
  },
  {
    id: "city-pernik",
    type: "city",
    parent: "bg-country",
    coords: [23.0200, 42.6050],
    name: { de: "Pernik", hu: "Pernik", ro: "Pernik", en: "Pernik" },
    description: {
      de: "Pernik, westlich von Sofia gelegen, ist eine Stadt mit einer starken industriellen Identität und einer tief verwurzelten Bergbautradition. Bekannt als das \\\\\\\"Schwarze Gold Bulgariens\\\\\\\", war Pernik über Jahrzehnte das Zentrum der Kohleförderung und Schwerindustrie des Landes. Ein besonderes Highlight ist das Bergbaumuseum, das einzige seiner Art auf dem Balkan, das sich in einem authentischen unterirdischen Stollen befindet. Pernik ist zudem weltberühmt für das internationale Festival der Maskenspiele \\\\\\\"Surva\\\\\\\", das zum UNESCO-Immateriellen Kulturerbe gehört und jedes Jahr Tausende von Besuchern anzieht. Die Stadt bietet eine Mischung aus industriellem Erbe, kulturellen Traditionen und der Nähe zur Natur des Witoscha-Gebirges. Pernik verbindet seine harte Arbeitsvergangenheit mit einem lebendigen Brauchtum und ist ein faszinierendes Ziel für Entdecker abseits der ausgetretenen Pfade.",
      hu: "Pernik Szófiától nyugatra fekvo város, eros ipari identitással és mélyen gyökerezo bányászati hagyományokkal. \\\\\\\"Bulgária fekete aranyaként\\\\\\\" ismert Pernik évtizedeken át az ország szénbányászatának és nehéziparának központja volt. Különleges látnivaló a Bányászati Múzeum, amely az egyetlen ilyen jellegu intézmény a Balkánon, és egy eredeti földalatti tárnában található. Pernik emellett világhíru a \\\\\\\"Szurva\\\\\\\" nemzetközi maszkos fesztiválról, amely az UNESCO szellemi kulturális örökségének része, és minden évben látogatók ezreit vonzza. A város ötvözi az ipari örökséget, a kulturális hagyományokat és a Vitosa-hegység közelségét. Pernik a kemény munka múltját kapcsolja össze az élo népszokásokkal, izgalmas úti célt kínálva a felfedezoknek.",
      ro: "Pernik, situat la vest de Sofia, este un ora? cu o puternica identitate industriala ?i o tradi?ie miniera adânc înradacinata. Cunoscut sub numele de \\\\\\\"aurul negru al Bulgariei\\\\\\\", Pernik a fost timp de decenii centrul extrac?iei de carbune ?i al industriei grele a ?arii. Un punct culminant special este Muzeul Mineritului, singurul de acest gen din Balcani, situat într-o galerie subterana autentica. Pernik este, de asemenea, faimos în întreaga lume pentru festivalul interna?ional al jocurilor cu ma?ti \\\\\\\"Surva\\\\\\\", care face parte din Patrimoniul Cultural Imaterial UNESCO ?i atrage mii de vizitatori în fiecare an. Ora?ul ofera un amestec de mo?tenire industriala, tradi?ii culturale ?i proximitatea fa?a de natura muntelui Vitosha. Pernik îmbina trecutul sau de munca grea cu un folclor vibrant ?i este o destina?ie fascinanta pentru exploratori.",
      en: "Pernik, located west of Sofia, is a city with a strong industrial identity and deep-rooted mining traditions. Known as the \\\\\\\\\\\\\\\"Black Gold of Bulgaria,\\\\\\\\\\\\\\\" Pernik was for decades the center of the country's coal mining and heavy industry. A special highlight is the Mining Museum, the only one of its kind in the Balkans, located in an authentic underground gallery. Pernik is also world-famous for the \\\\\\\\\\\\\\\"Surva\\\\\\\\\\\\\\\" International Festival of Masquerade Games, which is part of the UNESCO Intangible Cultural Heritage and attracts thousands of visitors every year. The city offers a blend of industrial heritage, cultural traditions, and proximity to the nature of the Vitosha Mountain. Pernik combines its hard-working past with vibrant folklore, making it a fascinating destination for explorers off the beaten path."
    },
    facts: {
      de: ["Status: Zentrum des bulgarischen Bergbaus", "Kultur: UNESCO-Festival 'Surva'", "Highlight: Unterirdisches Bergbaumuseum", "Lage: Westlich von Sofia", "Geschichte: Antike Festung Krakra", "Wirtschaft: Schwerindustrie und Energie"],
      hu: ["Státusz: A bolgár bányászat központja", "Kultúra: UNESCO 'Szurva' fesztivál", "Látnivaló: Földalatti Bányászati Múzeum", "Fekvés: Szófiától nyugatra", "Történelem: Krakra ókori erodje", "Gazdaság: Nehézipar és energia"],
      ro: ["Statut: Centrul mineritului bulgar", "Cultura: Festivalul UNESCO 'Surva'", "Atrac?ie: Muzeul Mineritului în subteran", "Loca?ie: La vest de Sofia", "Istorie: Vechea cetate Krakra", "Economie: Industrie grea ?i energie"],
      en: ["Status: Center of Bulgarian mining", "Culture: UNESCO 'Surva' Festival", "Highlight: Underground Mining Museum", "Location: West of Sofia", "History: Ancient Krakra Fortress", "Economy: Heavy industry and energy"]
    },
    descriptionAdvanced: {
      de: "Pernik trägt sein industrielles Erbe mit Stolz und vereint eine raue Bergbauvergangenheit mit einer der lebendigsten Folkloretraditionen Europas. Westlich von Sofia gelegen, war Pernik dank der gewaltigen Kohlevorkommen, des \\\\\\\"schwarzen Goldes\\\\\\\", das Kraftzentrum der bulgarischen Industrialisierung. Das Bergbaumuseum, untergebracht in einem ehemaligen Kohlestollen 50 Meter unter der Erde, ist eine besondere Attraktion und gibt einen eindrücklichen Einblick in das Leben der Bergleute. Jedes Jahr im Januar verwandelt sich die Stadt zum internationalen Maskenfestival \\\\\\\"Surwa\\\\\\\", bei dem Tausende Kukeri-Tänzer mit aufwendigen, furchterregenden Masken und Schellen die bösen Geister vertreiben – eine Tradition, die heute UNESCO-Weltkulturerbe ist. Oberhalb der Stadt thronen die Ruinen der mittelalterlichen Festung Krakra, die mehrere byzantinische Belagerungen abwehrte. Pernik bietet eine faszinierende Reise von antiken Festungen über die industrielle Revolution bis hin zu den lebendigen Volkstraditionen Bulgariens.",
      hu: "Pernik büszkén viseli ipari örökségét, és egyedülálló módon ötvözi a kemény bányászati múltat Európa egyik leglendületesebb folklórhagyományával. Szófiától nyugatra fekvo város volt a bolgár iparosodás motorja, melyet a hatalmas szén-, vagyis a \\\\\\\"fekete arany\\\\\\\" lelohelyek tápláltak. Kiemelkedo látnivalója a Bányászati Múzeum, amely egy valódi, 50 méter mélyen futó volt szénbányavágatban kapott helyet, és magával ragadó betekintést kínál a bányászok életébe. Minden januárban a város a \\\\\\\"Szurva\\\\\\\" nemzetközi maszkos fesztivál színhelye lesz: ezrek öltik magukra a kukerik bonyolult, ijeszto maszkjait és csengoit, hogy eluzzék a gonosz szellemeket – ez a hagyomány ma már UNESCO szellemi örökség. A város fölött a középkori Krakra erod romjai magasodnak, mely több bizánci ostromnak is ellenállt. Pernik lebilincselo utazást kínál az ókori erodöktol az ipari forradalomig, majd a bolgárok élo, lélegzo népi hagyományaiig.",
      ro: "Pernik î?i poarta cu mândrie mo?tenirea industriala, îmbinând în mod unic un trecut minier dur cu una dintre cele mai vibrante tradi?ii folclorice din Europa. Situat la vest de Sofia, Pernik a fost motorul industrializarii Bulgariei, alimentat de vastele zacaminte de carbune cunoscute sub numele de \\\\\\\"aurul negru\\\\\\\". Muzeul Mineritului este o atrac?ie remarcabila, amenajata într-o galerie de carbune autentica, situata la 50 de metri sub pamânt, oferind o privire imersiva asupra vie?ii minerilor. În fiecare ianuarie, ora?ul se transforma pentru Festivalul Interna?ional al Jocurilor cu Ma?ti \\\\\\\"Surva\\\\\\\", în care mii de kukeri îmbraca ma?ti elaborate ?i terifiante ?i clopote pentru a alunga spiritele rele — o tradi?ie recunoscuta astazi de UNESCO. Deasupra ora?ului se înal?a ruinele Ceta?ii medievale Krakra, care a rezistat mai multor asedii bizantine. Pernik ofera o calatorie captivanta, de la fortare?e antice la revolu?ia industriala ?i pâna la tradi?iile populare vii ale bulgarilor.",
      en: "Pernik is a city that wears its industrial heritage with pride, uniquely combining a gritty mining past with one of the most vibrant folklore traditions in Europe. Located just a short distance west of Sofia, Pernik was the powerhouse of Bulgaria's industrialization, fueled by the vast coal deposits known as 'black gold.' The city's Mining Museum is a standout attraction, housed in an actual former coal gallery 50 meters underground, offering an immersive look at the life of the miners. Every January, the city transforms for the 'Surva' International Festival of Masquerade Games, where thousands of performers (Kukeri) don elaborately frightening masks and bells to chase away evil spirits—a tradition now recognized by UNESCO. Perched above the city are the ruins of the medieval Krakra Fortress, which resisted several Byzantine sieges. Pernik offers a compelling journey from ancient military strongholds to the industrial revolution and onto the living, breathing folk traditions of the Bulgarian people."
    },
    factsAdvanced: {
      de: [
        "Das Bergbaumuseum in Pernik ist das einzige seiner Art in der gesamten Balkanregion.",
        "Das Surwa-Festival ist das älteste Maskenfest Bulgariens und wird seit 1966 veranstaltet.",
        "Die Festung Krakra war der Stützpunkt von Krakra von Pernik, einem legendären bulgarischen Krieger des 11. Jahrhunderts, der den byzantinischen Kaiser Basileios II. zurückschlug.",
        "Der Kohlebergbau in Pernik begann 1891 und veränderte die kleine Agrarstadt grundlegend.",
        "Der Kulturpalast der Stadt ist ein eindrucksvolles Beispiel sozialistisch-neoklassizistischer Architektur und wurde 1957 erbaut.",
        "Pernik wird auch als \\\\\\\"Stadt der Bergleute\\\\\\\" bezeichnet, da der Kohlebergbau über ein Jahrhundert lang die wichtigste Wirtschaftsgrundlage war.",
        "Das nahegelegene Ljulin-Gebirge bietet direkt am Stadtrand zahlreiche Wander- und Mountainbike-Routen.",
        "Das Regionalmuseum von Pernik beherbergt eine einzigartige Sammlung mittelalterlicher Keramiken, die in der Festung Krakra entdeckt wurden."
      ],
      hu: [
        "A perniki Bányászati Múzeum egyedülálló a teljes balkáni régióban.",
        "A Szurva fesztivál Bulgária legrégebbi maszkos ünnepe, 1966 óta rendezik.",
        "A Krakra-erod Perniki Krakra, a 11. századi legendás bolgár hadvezér székhelye volt, aki visszaverte II. Baszileiosz bizánci császárt.",
        "A perniki szénbányászat 1891-ben indult meg, alapjaiban változtatva meg a kis agrárváros életét.",
        "A város Muvelodési Háza a szocialista neoklasszicizmus egyik kiemelkedo példája, 1957-ben épült.",
        "Perniket \\\\\\\"a bányászok városaként\\\\\\\" is emlegetik, mivel a szénbányászat több mint egy évszázadon át a legfontosabb gazdasági ágazata volt.",
        "A közeli Ljulin-hegység közvetlenül a város peremén kínál túra- és hegyikerékpáros útvonalakat.",
        "A perniki Regionális Múzeum egyedülálló középkori kerámiagyujteményt oriz, amely a Krakra-erodben került elo."
      ],
      ro: [
        "Muzeul Mineritului din Pernik este singurul de acest fel din întreaga regiune balcanica.",
        "Festivalul Surva este cel mai vechi festival al ma?tilor din Bulgaria, organizat înca din 1966.",
        "Cetatea Krakra a fost sediul lui Krakra din Pernik, legendarul razboinic bulgar din secolul al XI-lea care l-a respins pe împaratul bizantin Vasile al II-lea.",
        "Industria miniera a carbunelui din Pernik a început în 1891, schimbând fundamental identitatea micului ora? agrar.",
        "Palatul Culturii al ora?ului este un exemplu impresionant de arhitectura socialista neoclasica, ridicat în 1957.",
        "Pernik este cunoscut drept \\\\\\\"ora?ul minerilor\\\\\\\", mineritul carbunelui fiind motorul principal al economiei timp de peste un secol.",
        "Muntele Lyulin din apropiere ofera numeroase trasee de drume?ie ?i ciclism montan, chiar la marginea ora?ului.",
        "Muzeul Regional din Pernik gazduie?te o colec?ie unica de ceramica medievala descoperita în Cetatea Krakra."
      ],
      en: [
        "The Mining Museum in Pernik is the only one of its kind in the entire Balkan region.",
        "The Surva Festival is the oldest masquerade festival in Bulgaria, dating back to 1966.",
        "Krakra Fortress was the domain of Krakra of Pernik, a legendary 11th-century Bulgarian warrior who defeated Byzantine Emperor Basil II.",
        "Pernik's coal mining industry began in 1891, fundamentally changing the town's small agrarian identity.",
        "The city's Palace of Culture is an impressive example of neoclassical socialist architecture built in 1957.",
        "Pernik is known as the 'City of Miners,' with coal mining being the primary economic driver for over a century.",
        "The nearby Lyulin Mountain offers extensive hiking and biking trails just on the outskirts of the city.",
        "The Pernik regional museum houses a unique collection of medieval ceramics discovered at Krakra Fortress."
      ]
    },
    image: "/geo-images/bulgaria/city-pernik.webp"
  }
];
