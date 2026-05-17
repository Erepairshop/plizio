import type { POI } from "./poi";

// ============================================================================
// HUNGARY — POI (Points of Interest)
// 1 ország, 20 régió (19 megye + Budapest), városok, látnivalók.
// Nyelvek: de, hu, ro, en (minden mezőben). Koordináták: [lon, lat].
// ============================================================================

export const hungaryCountry: POI[] = [
  {
    id: "HU",
    type: "country",
    parent: "EU",
    coords: [19.5033, 47.1625],
    name: {"de": "Ungarn", "hu": "Magyarország", "ro": "Ungaria", "en": "Hungary"},
    image: "/geo-images/hungary/HU.webp",
    description: {
      de: "Ungarn ist ein Binnenstaat in Mitteleuropa, bekannt für seine reiche Geschichte, beeindruckende Architektur und weltberühmte Thermalbäder.",
      hu: "Magyarország egy közép-európai ország, amely gazdag történelméről, lenyűgöző építészetéről és világhírű termálfürdőiről ismert.",
      ro: "Ungaria este o țară din Europa Centrală, cunoscută pentru istoria sa bogată, arhitectura impresionantă și băile termale de renume mondial.",
      en: "Hungary is a Central European country known for its rich history, stunning architecture, and world-famous thermal baths."
    },
    descriptionAdvanced: {
      "de": "Ungarn ist ein faszinierendes Binnenland in Mitteleuropa, das für seine reiche Geschichte, beeindruckende Architektur und weltberühmte Thermalbäder bekannt ist. Das Herz des Landes ist die Hauptstadt Budapest, eine pulsierende Metropole an der Donau, die oft als eine der schönsten Städte der Welt bezeichnet wird. Ungarn ist berühmt für seine herzliche Gastfreundschaft, seine würzige Küche mit Spezialitäten wie Gulasch und seine erstklassigen Weinregionen wie Tokaj oder Villány. Die Landschaft ist vielfältig und reicht von den weiten Ebenen der Puszta bis zu den sanften Hügeln Transdanubiens und den bewaldeten Bergen im Norden. Mit zehn Nationalparks und zahlreichen UNESCO-Welterbestätten bietet das Land unzählige Entdeckungsmöglichkeiten für Natur- und Kulturliebhaber.",
      "hu": "Magyarország egy gyönyörű közép-európai ország, amely gazdag történelméről, lenyűgöző építészetéről és világhírű termálfürdőiről ismert. Az ország szíve Budapest, a Duna mentén fekvő metropolisz, amely a világ egyik legszebb fővárosa. Magyarország híres vendégszeretetéről, ízletes gasztronómiájáról, mint például a gulyásleves, és kiváló borvidékeiről, mint Tokaj vagy Villány. A táj változatos, az Alföld rónaságaitól a Dunántúl dombvidékein át az Északi-középhegység vonulataiig terjed. Az ország tíz nemzeti parkja és számos UNESCO világörökségi helyszíne várja a természet és a kultúra kedvelőit.",
      "ro": "Ungaria este o țară fascinantă din Europa Centrală, cunoscută pentru istoria sa bogată, arhitectura impresionantă și băile termale de renume mondial. Inima țării este capitala Budapesta, o metropolă vibrantă de-a lungul Dunării, care este adesea numită unul dintre cele mai frumoase orașe din lume. Ungaria este faimoasă pentru ospitalitatea sa caldă, bucătăria sa condimentată cu specialități precum gulașul și regiunile sale viticole de primă clasă, cum ar fi Tokaj sau Villány. Peisajul este divers, variind de la câmpiile întinse ale Pustei până la dealurile blânde ale Transdanubiei și munții împăduriți din nord. Cu zece parcuri naționale și numeroase situri din patrimoniul mondial UNESCO, țara oferă nenumărate oportunități de descoperire pentru iubitorii de natură și cultură.",
      "en": "Hungary is a fascinating landlocked country in Central Europe, known for its rich history, stunning architecture, and world-famous thermal baths. The heart of the country is the capital, Budapest, a vibrant metropolis along the Danube that is often referred to as one of the most beautiful cities in the world. Hungary is famous for its warm hospitality, its flavorful cuisine featuring specialties like goulash, and its world-class wine regions such as Tokaj or Villány. The landscape is diverse, ranging from the vast plains of the Puszta to the rolling hills of Transdanubia and the forested mountains in the north. With ten national parks and numerous UNESCO World Heritage sites, the country offers countless opportunities for discovery for nature and culture lovers."
    },
    facts: {
      "de": [
        "Die Hauptstadt Budapest wird durch die Donau in die Stadtteile Buda und Pest geteilt.",
        "Ungarn hat über 1.300 Thermalquellen und eine jahrtausendealte Bäderkultur.",
        "Der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas.",
        "Die ungarische Sprache gehört zur finno-ugrischen Sprachfamilie und ist in Europa einzigartig.",
        "Das Land ist in 19 Komitate und die Hauptstadt Budapest unterteilt.",
        "Ungarn ist die Heimat berühmter Erfindungen wie des Kugelschreibers und des Zauberwürfels.",
        "Die ungarische Gastronomie basiert stark auf Paprika, Zwiebeln und Sauerrahm.",
        "Das Land hat eine beeindruckende Anzahl von 13 Nobelpreisträgern hervorgebracht.",
        "Die Weinregion Tokaj ist das älteste klassifizierte Weingebiet der Welt.",
        "Ungarn trat im Jahr 2004 der Europäischen Union bei."
      ],
      "hu": [
        "Fővárosa Budapest, amelyet a Duna oszt ketté Budára és Pestre.",
        "Magyarország több mint 1300 termálforrással és évezredes fürdőkultúrával rendelkezik.",
        "A Balaton Közép-Európa legnagyobb édesvízi tava.",
        "A magyar nyelv az uráli nyelvcsaládba tartozik, és egyedülálló Európában.",
        "Az ország 19 vármegyére és a fővárosra, Budapestre oszlik.",
        "Magyarország olyan híres találmányok hazája, mint a golyóstoll vagy a bűvös kocka.",
        "A magyar gasztronómia alapkövei a fűszerpaprika, a vöröshagyma és a tejföl.",
        "Az ország eddig 13 Nobel-díjas tudóssal és alkotóval büszkélkedhet.",
        "A Tokaji borvidék a világ első zárt borvidéke és UNESCO világörökségi helyszín.",
        "Magyarország 2004 óta az Európai Unió tagja."
      ],
      "ro": [
        "Capitala Budapesta este împărțită de Dunăre în districtele Buda și Pesta.",
        "Ungaria are peste 1.300 de izvoare termale și o cultură a băilor de mii de ani.",
        "Lacul Balaton este cel mai mare lac cu apă dulce din Europa Centrală.",
        "Limba maghiară aparține familiei de limbi fino-ugrice și este unică în Europa.",
        "Țara este împărțită în 19 județe și capitala Budapesta.",
        "Ungaria este patria unor invenții faimoase, precum pixul și cubul Rubik.",
        "Gastronomia maghiară se bazează în mare măsură pe boia, ceapă și smântână.",
        "Țara a produs un număr impresionant de 13 laureați ai Premiului Nobel.",
        "Regiunea viticolă Tokaj este prima regiune viticolă clasificată din lume.",
        "Ungaria a aderat la Uniunea Europeană în anul 2004."
      ],
      "en": [
        "The capital, Budapest, is divided by the Danube into the Buda and Pest districts.",
        "Hungary has over 1,300 thermal springs and a bathing culture spanning millennia.",
        "Lake Balaton is the largest freshwater lake in Central Europe.",
        "The Hungarian language belongs to the Finno-Ugric family and is unique in Europe.",
        "The country is divided into 19 counties and the capital city of Budapest.",
        "Hungary is the home of famous inventions such as the ballpoint pen and the Rubik's Cube.",
        "Hungarian gastronomy is heavily based on paprika, onions, and sour cream.",
        "The country has produced an impressive number of 13 Nobel Prize winners.",
        "The Tokaj wine region is the world's oldest classified wine district.",
        "Hungary joined the European Union in 2004."
      ]
    },
  },
];

export const hungaryRegions: POI[] = [
  {
    id: "budapest",
    type: "region",
    parent: "HU",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    description: {
      de: "Budapest, die Hauptstadt Ungarns, ist eine prachtvolle Metropole an der Donau, bekannt für ihre Thermalbäder, das Parlamentsgebäude und die historische Burg.",
      hu: "Budapest, Magyarország fővárosa, a Duna mentén fekvő pompás metropolisz, amely termálfürdőiről, az Országházról és a történelmi Várról ismert.",
      ro: "Budapesta, capitala Ungariei, este o metropolă magnifică de-a lungul Dunării, cunoscută pentru băile sale termale, clădirea Parlamentului și Castelul istoric.",
      en: "Budapest, the capital of Hungary, is a magnificent metropolis along the Danube, known for its thermal baths, the Parliament building, and the historic Castle."
    },
    descriptionAdvanced: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine eigenständige Region und das unbestrittene politische, wirtschaftliche und kulturelle Zentrum des Landes. Die Stadt entstand 1873 durch die Zusammenlegung der Städte Buda, Pest und Óbuda und wird durch die majestätische Donau in zwei charakteristische Hälften geteilt. Während das hügelige Buda für seine historischen Viertel und das Burgschloss bekannt ist, besticht das flache Pest durch seine lebendigen Boulevards, das Parlamentsgebäude und das pulsierende Stadtleben. Budapest ist weltberühmt für seine einzigartige Bäderkultur, seine beeindruckende Architektur des Historismus und Jugendstils sowie seine lebendige Gastronomie- und Kulturszene. Als eine der meistbesuchten Städte Mitteleuropas bietet sie eine perfekte Mischung aus Geschichte, Entspannung und moderner Urbanität.",
      "hu": "Budapest, Magyarország fővárosa, különálló közigazgatási egységként az ország politikai, gazdasági és kulturális központja. A város 1873-ban jött létre Buda, Pest és Óbuda egyesítésével, és a fenséges Duna osztja két jellegzetes részre. Míg a dombos Buda történelmi negyedeiről és a Budai Várról ismert, addig a sík Pest pezsgő sugárútjaival, az Országházzal és lüktető városi életével vonzza a látogatókat. Budapest világszerte híres egyedülálló fürdőkultúrájáról, lenyűgöző historizáló és szecessziós építészetéről, valamint élénk gasztronómiai és kulturális életéről. Közép-Európa egyik leglátogatottabb városaként a történelem, a kikapcsolódás és a modern városi lét tökéletes keverékét nyújtja.",
      "ro": "Budapesta, capitala Ungariei, este o regiune administrativă distinctă și centrul politic, economic și cultural incontestabil al țării. Orașul a fost format în 1873 prin unirea orașelor Buda, Pesta și Óbuda și este împărțit în două jumătăți caracteristice de maiestuoasa Dunăre. În timp ce Buda deluroasă este cunoscută pentru cartierele sale istorice și Castelul Buda, Pesta plană impresionează prin bulevardele sale vibrante, clădirea Parlamentului și viața urbană pulsantă. Budapesta este renumită în întreaga lume pentru cultura sa unică a băilor, arhitectura sa impresionantă în stil istoricist și Art Nouveau, precum și pentru scena sa gastronomică și culturală vibrantă. Fiind unul dintre cele mai vizitate orașe din Europa Centrală, oferă un amestec perfect de istorie, relaxare și urbanitate modernă.",
      "en": "Budapest, the capital of Hungary, is a distinct administrative region and the undisputed political, economic, and cultural center of the country. The city was formed in 1873 through the unification of Buda, Pest, and Óbuda, and is divided into two characteristic halves by the majestic Danube. While hilly Buda is known for its historic districts and the Buda Castle, flat Pest charms visitors with its vibrant boulevards, the Parliament building, and pulsating city life. Budapest is world-famous for its unique spa culture, its stunning Historicist and Art Nouveau architecture, and its lively gastronomic and cultural scene. As one of the most visited cities in Central Europe, it offers a perfect blend of history, relaxation, and modern urbanity."
    },
    facts: {
      "de": [
        "Budapest ist die bevölkerungsreichste Stadt Ungarns mit über 1,7 Millionen Einwohnern.",
        "Die Stadt wird oft als 'Perle der Donau' bezeichnet und gehört teilweise zum UNESCO-Welterbe.",
        "Beherbergt die älteste elektrische U-Bahn-Linie Kontinentaleuropas (M1).",
        "Ist bekannt als 'Stadt der Bäder' mit über 100 Thermalquellen und berühmten Heilbädern.",
        "Das ungarische Parlamentsgebäude ist das drittgrößte Regierungsgebäude der Welt.",
        "Die Kettenbrücke war die erste dauerhafte Verbindung zwischen Buda und Pest.",
        "Die Große Synagoge in der Dohány-Straße ist die größte Synagoge in Europa.",
        "Budapest hat eine der weltweit größten Thermalwasser-Höhlensysteme unter der Stadt.",
        "Die Stadt ist ein bedeutendes Zentrum für Bildung mit zahlreichen renommierten Universitäten.",
        "Der Heldenplatz ist einer der wichtigsten und meistbesuchten Plätze der Stadt."
      ],
      "hu": [
        "Budapest Magyarország legnépesebb városa, több mint 1,7 millió lakossal.",
        "A várost gyakran a 'Duna gyöngyeként' emlegetik, és több része az UNESCO világörökség része.",
        "Itt található a kontinens első elektromos földalatti vasútja (M1).",
        "A 'fürdők városa' néven ismert, több mint 100 termálforrással és híres gyógyfürdőkkel.",
        "A magyar Országház a világ harmadik legnagyobb parlamenti épülete.",
        "A Lánchíd volt az első állandó összeköttetés Buda és Pest között.",
        "A Dohány utcai zsinagóga Európa legnagyobb zsidó temploma.",
        "Budapest alatt található a világ egyik legnagyobb termálvizes barlangrendszere.",
        "A város jelentős oktatási központ, számos neves egyetemmel.",
        "A Hősök tere a város egyik legfontosabb és leglátogatottabb tere."
      ],
      "ro": [
        "Budapesta este cel mai populat oraș din Ungaria, cu peste 1,7 milioane de locuitori.",
        "Orașul este adesea numit 'Perla Dunării' și face parte parțial din patrimoniul mondial UNESCO.",
        "Găzduiește cea mai veche linie de metrou electric din Europa continentală (M1).",
        "Este cunoscut ca 'orașul băilor', cu peste 100 de izvoare termale și băi curative faimoase.",
        "Clădirea Parlamentului maghiar este a treia ca mărime din lume.",
        "Podul cu Lanțuri a fost prima legătură permanentă între Buda și Pesta.",
        "Sinagoga de pe strada Dohány este cea mai mare sinagogă din Europa.",
        "Budapesta are unul dintre cele mai mari sisteme de peșteri cu apă termală din lume sub oraș.",
        "Orașul este un centru important pentru educație, cu numeroase universități de renume.",
        "Piața Eroilor este una dintre cele mai importante și vizitate piețe din oraș."
      ],
      "en": [
        "Budapest is the most populous city in Hungary, with over 1.7 million inhabitants.",
        "The city is often called the 'Pearl of the Danube' and parts of it are UNESCO World Heritage sites.",
        "It is home to the oldest electric underground railway line in continental Europe (M1).",
        "Known as the 'City of Baths' with over 100 thermal springs and famous medicinal baths.",
        "The Hungarian Parliament Building is the third largest government building in the world.",
        "The Chain Bridge was the first permanent connection between Buda and Pest.",
        "The Great Synagogue in Dohány Street is the largest synagogue in Europe.",
        "Budapest has one of the world's largest thermal water cave systems beneath the city.",
        "The city is a major center for education, with numerous prestigious universities.",
        "Heroes' Square is one of the most important and most visited squares in the city."
      ]
    }, image: "/poi-images/budapest.webp"},
  {
    id: "baranya",
    type: "region",
    parent: "HU",
    coords: [18.2323, 46.0727],
    name: {"de": "Branau", "hu": "Baranya", "ro": "Baranya", "en": "Baranya"},
    image: "/geo-images/hungary/baranya.webp",
    description: {
      "de": "Das Komitat Baranya liegt im äußersten Süden Ungarns an der Grenze zu Kroatien und ist bekannt für sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im Süden durch die Flüsse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt Pécs, die mit ihrem reichen römischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berühmt für seine erstklassigen Weinregionen, insbesondere Villány, und seine vielfältigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen und Kroaten geprägt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natürlicher Schönheit und kulinarischen Genüssen.",
      "hu": "Baranya vármegye Magyarország legdélebbi részén, a horvát határ mentén fekszik, és enyhe, szinte mediterrán éghajlatáról ismert. A régiót északról a Mecsek-hegység, délről pedig a Dráva és a Duna folyók határolják, változatos és termékeny tájat hozva létre. Kulturális központja Pécs, amely gazdag római és oszmán örökségével, valamint élénk művészeti életével nyűgözi le a látogatókat. Baranya emellett híres kiváló borvidékeiről, különösen Villányról, és sokszínű etnikai hagyományairól, amelyeket a magyarok, németek és horvátok együttélése formált. A vármegye a történelmi mélység, a természeti szépség és a kulináris élvezetek egyedülálló keverékét kínálja.",
      "ro": "Județul Baranya este situat în extremitatea sudică a Ungariei, la granița cu Croația, și este cunoscut pentru clima sa blândă, aproape mediteraneană. Regiunea este mărginită la nord de munții Mecsek și la sud de râurile Drava și Dunăre, creând un peisaj variat și fertil. Centrul cultural este orașul Pécs, care impresionează prin moștenirea sa bogată romană și otomană, precum și prin scena sa artistică vibrantă. Baranya este, de asemenea, faimoasă pentru regiunile sale viticole de primă clasă, în special Villány, și pentru tradițiile sale etnice diverse, modelate de conviețuirea maghiarilor, germanilor și croaților. Județul oferă un amestec unic de profunzime istorică, frumusețe naturală și delicii culinare.",
      "en": "Baranya County is located in the far south of Hungary on the border with Croatia and is known for its mild, almost Mediterranean climate. The region is bordered to the north by the Mecsek Mountains and to the south by the rivers Drava and Danube, creating a diverse and fertile landscape. Its cultural center is the city of Pécs, which impresses visitors with its rich Roman and Ottoman heritage and its vibrant art scene. Baranya is also famous for its world-class wine regions, particularly Villány, and its diverse ethnic traditions shaped by the coexistence of Hungarians, Germans, and Croatians. The county offers a unique blend of historical depth, natural beauty, and culinary delights."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Pécs, eine Stadt mit über 2000-jähriger Geschichte.",
        "Das Mecsek-Gebirge schützt die Region vor kalten Nordwinden.",
        "Villány ist eine der renommiertesten Rotweinregionen Ungarns.",
        "Die frühchristlichen Grabkammern in Pécs gehören zum UNESCO-Welterbe.",
        "Baranya hat einen hohen Anteil an nationalen Minderheiten, insbesondere Donauschwaben.",
        "Die Burg von Siklós ist eine der am besten erhaltenen mittelalterlichen Burgen des Landes.",
        "Das Heilbad Harkány ist weltweit für sein schwefelhaltiges Wasser bekannt.",
        "Die Region war Schauplatz der historischen Schlacht von Mohács im Jahr 1526.",
        "Das Busójárás-Festival in Mohács ist Teil des immateriellen UNESCO-Kulturerbes.",
        "Baranya ist reich an Thermalquellen und bietet zahlreiche Wellness-Möglichkeiten."
      ],
      "hu": [
        "A vármegye székhelye Pécs, amely több mint 2000 éves múltra tekint vissza.",
        "A Mecsek-hegység óvja a régiót a hideg északi szelektől.",
        "Villány Magyarország egyik legelismertebb vörösbortermelő vidéke.",
        "A pécsi ókeresztény sírkamrák az UNESCO világörökség részét képezik.",
        "Baranyában jelentős a nemzetiségi kisebbségek, különösen a németek és horvátok aránya.",
        "A siklósi vár az ország egyik legépebben maradt középkori erődítménye.",
        "A harkányi gyógyfürdő kénes vizéről világszerte híres.",
        "A vármegye területén zajlott a történelmi jelentőségű mohácsi csata 1526-ban.",
        "A mohácsi busójárás az UNESCO szellemi kulturális örökségének része.",
        "Baranya gazdag termálforrásokban és számos wellness lehetőséget kínál."
      ],
      "ro": [
        "Reședința județului este Pécs, un oraș cu o istorie de peste 2000 de ani.",
        "Munții Mecsek protejează regiunea de vânturile reci din nord.",
        "Villány este una dintre cele mai renumite regiuni de vin roșu din Ungaria.",
        "Mormintele paleocreștine din Pécs fac parte din patrimoniul mondial UNESCO.",
        "Baranya are o proporție ridicată de minorități naționale, în special șvabi dunăreni.",
        "Castelul din Siklós este unul dintre cele mai bine conservate castele medievale din țară.",
        "Stațiunea balneară Harkány este cunoscută în întreaga lume pentru apa sa sulfuroasă.",
        "Regiunea a fost locul bătăliei istorice de la Mohács din anul 1526.",
        "Festivalul Busójárás din Mohács face parte din patrimoniul cultural imaterial UNESCO.",
        "Baranya este bogată în izvoare termale și oferă numeroase oportunități de wellness."
      ],
      "en": [
        "The county seat is Pécs, a city with over 2,000 years of history.",
        "The Mecsek Mountains protect the region from cold northern winds.",
        "Villány is one of Hungary's most prestigious red wine regions.",
        "The Early Christian Necropolis in Pécs is a UNESCO World Heritage site.",
        "Baranya has a high proportion of national minorities, especially Danube Swabians.",
        "Siklós Castle is one of the best-preserved medieval castles in the country.",
        "The Harkány spa is world-famous for its sulfurous water.",
        "The county was the site of the historic Battle of Mohács in 1526.",
        "The Busójárás festival in Mohács is part of the UNESCO Intangible Cultural Heritage.",
        "Baranya is rich in thermal springs and offers numerous wellness opportunities."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Das Komitat Baranya liegt im äußersten Süden Ungarns an der Grenze zu Kroatien und ist bekannt für sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im Süden durch die Flüsse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt Pécs, die mit ihrem reichen römischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berühmt für seine erstklassigen Weinregionen, insbesondere Villány, und seine vielfältigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen and Kroaten geprägt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natürlicher Schönheit und kulinarischen Genüssen.",
      "hu": "Baranya vármegye Magyarország legdélebbi tájegysége, amely mediterrán jellegű éghajlatával és gazdag történelmi örökségével tűnik ki a régiók közül. A vármegye központja, Pécs, már az ókorban is jelentős település volt, és ma híres az UNESCO világörökség részét képező ókeresztény sírkamráiról. A táj rendkívül változatos, a Mecsek hegyvonulataitól a Villányi-hegység világhírű borvidékeiről terjed, ahol az ország legkiválóbb vörösborai készülnek. Baranya etnikai sokszínűsége, a magyarok, németek és horvátok békés együttélése egyedülálló kulturális és gasztronómiai miliőt teremtett a térségben. A harkányi gyógyvíz és a siklósi vár történelmi falai tovább gazdagítják a vármegye turisztikai vonzerejét.",
      "ro": "Județul Baranya este situat în extremitatea sudică a Ungariei, la granița cu Croația, și este cunoscut pentru clima sa blândă, aproape mediteraneană. Regiunea este mărginită la nord de munții Mecsek și la sud de râurile Drava și Dunăre, creând un peisaj variat și fertil. Centrul cultural este orașul Pécs, care impresionează prin moștenirea sa bogată romană și otomană, precum și prin scena sa artistică vibrantă. Baranya este, de asemenea, faimoasă pentru regiunile sale viticole de primă clasă, în special Villány, și pentru tradițiile sale etnice diverse, modelate de conviețuirea maghiarilor, germanilor și croaților. Județul oferă un amestec unic de profunzime istorică, frumusețe naturală și delicii culinare.",
      "en": "Baranya County is located in the far south of Hungary on the border with Croatia and is known for its mild, almost Mediterranean climate. The region is bordered to the north by the Mecsek Mountains and to the south by the rivers Drava and Danube, creating a diverse and fertile landscape. Its cultural center is the city of Pécs, which impresses visitors with its rich Roman and Ottoman heritage and its vibrant art scene. Baranya is also famous for its world-class wine regions, particularly Villány, and its diverse ethnic traditions shaped by the coexistence of Hungarians, Germans, and Croatians. The county offers a unique blend of historical depth, natural beauty, and culinary delights."
    },
    factsAdvanced: {
      de: [
        "Die Komitatshauptstadt Pécs war im Jahr 2010 eine der offiziellen Kulturhauptstädte Europas.",
        "Die Region Villány gilt als die bekannteste und qualitativ hochwertigste Rotweinregion in ganz Ungarn.",
        "In Mohács findet jährlich der Busójárás statt, ein spektakuläres Maskenfest, das zum UNESCO-Weltkulturerbe gehört.",
        "Die Burg von Siklós ist eine der am besten erhaltenen mittelalterlichen Festungsanlagen im gesamten Land.",
        "Baranya beheimatet eine der größten Gruppen der deutschen Minderheit in Ungarn, die sogenannten Donauschwaben."
      ],
      "hu": [
        "Pécs városa 2010-ben Európa Kulturális Fővárosa volt, ami jelentős városfejlesztési hullámot indított el.",
        "A Villányi borvidék az ország legdélibb és egyik legelismertebb vörösbortermelő területe.",
        "A mohácsi busójárás az UNESCO szellemi kulturális örökségének listáján is előkelő helyet foglal el.",
        "Baranyában található az ország egyik legmélyebb barlangja, a mecseki Abaligeti-barlang, amely gyógybarlang is.",
        "A siklósi vár az ország egyik legépebben maradt középkori erődítménye, amely ma is látogatható."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "bacs-kiskun",
    type: "region",
    parent: "HU",
    coords: [19.6913, 46.9062],
    name: {"de": "Bács-Kiskun", "hu": "Bács-Kiskun", "ro": "Bács-Kiskun", "en": "Bács-Kiskun"},
    image: "/geo-images/hungary/bacs-kiskun.webp",
    description: {
      "de": "Bács-Kiskun ist das flächenmäßig größte Komitat Ungarns und liegt im zentralen Süden des Landes zwischen den Flüssen Donau und Theiß. Die Region ist geprägt durch die weite Landschaft der Großen Ungarischen Tiefebene (Alföld) und beherbergt den Nationalpark Kiskunság mit seinen einzigartigen Sanddünen und Salzseen. Das wirtschaftliche und kulturelle Zentrum ist Kecskemét, eine Stadt, die für ihre prächtige Jugendstil-Architektur und die Produktion von hochwertigem Aprikosenschnaps (Barackpálinka) bekannt ist. Bács-Kiskun spielt eine zentrale Rolle in der ungarischen Landwirtschaft und ist berühmt für seine Traditionen in der Pferdehaltung und Viehzucht. Die Region bietet Besuchern eine authentische Erfahrung der ungarischen Puszta-Kultur gepaart mit moderner Gastfreundschaft.",
      "hu": "Bács-Kiskun Magyarország legnagyobb területű vármegyéje, amely az ország déli-középső részén, a Duna és a Tisza között terül el. A régiót az Alföld végtelen rónaságai határozzák meg, itt található a Kiskunsági Nemzeti Park is, amely egyedülálló homokbuckáiról és szikes tavairól nevezetes. Gazdasági és kulturális központja Kecskemét, amely lenyűgöző szecessziós építészetéről és a világhírű kecskeméti barackpálinkáról ismert. Bács-Kiskun központi szerepet tölt be a magyar mezőgazdaságban, és híres lovas hagyományairól, valamint állattenyésztési kultúrájáról, különösen Bugac környékén. A vármegye az alföldi táj szépségét, a pusztai hagyományokat és a modern vendéglátást ötvözi.",
      "ro": "Bács-Kiskun este cel mai mare județ din Ungaria ca suprafață, situat în partea central-sudică a țării, între fluviile Dunărea și Tisa. Regiunea este caracterizată de peisajul vast al Marii Câmpii Maghiare (Alföld) și găzduiește Parcul Național Kiskunság, cu dunele sale de nisip unice și lacurile sărate. Centrul economic și cultural este Kecskemét, un oraș renumit pentru arhitectura sa splendidă în stil Art Nouveau și pentru producția de pălincă de caise de înaltă calitate (Barackpálinka). Bács-Kiskun joacă un rol central în agricultura maghiară și este faimos pentru tradițiile sale în creșterea cailor și a vitelor. Județul oferă vizitatorilor o experiență autentică a culturii maghiare de pustă, combinată cu o ospitalitate modernă.",
      "en": "Bács-Kiskun is the largest county in Hungary by area, located in the central-southern part of the country between the Danube and Tisza rivers. The region is characterized by the vast landscape of the Great Hungarian Plain (Alföld) and is home to the Kiskunság National Park with its unique sand dunes and salt lakes. Its economic and cultural center is Kecskemét, a city famous for its stunning Art Nouveau architecture and the production of high-quality apricot brandy (Barackpálinka). Bács-Kiskun plays a central role in Hungarian agriculture and is famous for its traditions in horse breeding and livestock farming. The county offers visitors an authentic experience of Hungarian Puszta culture paired with modern hospitality."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Kecskemét, bekannt als die 'Stadt des Jugendstils'.",
        "Es ist das einzige Komitat Ungarns, das an zwei große Flüsse (Donau und Theiß) grenzt.",
        "Der Nationalpark Kiskunság schützt die einzigartige Flora und Fauna der Sandsteppe.",
        "Bugac ist ein weltberühmtes Zentrum für ungarische Hirtentraditionen und Reitvorführungen.",
        "Die Region ist einer der wichtigsten Produzenten von Obst und Gemüse in Ungarn.",
        "Kajós ist bekannt für seine historischen Weinkeller, die in Lösswände gegraben wurden.",
        "In Kecskemét befindet sich das berühmte Kodály-Institut für Musikpädagogik.",
        "Das Komitat hat eine bedeutende deutsche Minderheit, insbesondere in der Gegend um Baja.",
        "Die Fischsuppe aus Baja (Bajai halászlé) ist eine geschützte kulinarische Spezialität.",
        "Bács-Kiskun ist ein wichtiger Standort für die Automobilindustrie (Mercedes-Benz Werk)."
      ],
      "hu": [
        "A vármegye székhelye Kecskemét, amelyet a 'szecesszió városaként' is emlegetnek.",
        "Ez az egyetlen vármegye, amely két nagy folyóval, a Dunával és a Tiszával is határos.",
        "A Kiskunsági Nemzeti Park óvja a homokpuszták egyedülálló növény- és állatvilágát.",
        "Bugac a magyar pásztorhagyományok és lovasbemutatók világhírű központja.",
        "A régió Magyarország egyik legfontosabb zöldség- és gyümölcstermesztő vidéke.",
        "Hajós híres a löszfalba vájt, több mint 1200 pincéből álló borfalujáról.",
        "Kecskeméten található a neves Kodály Zoltán Zenepedagógiai Intézet.",
        "A vármegyében jelentős német nemzetiség él, különösen Baja környékén.",
        "A bajai halászlé hungarikum és a régió egyik legfontosabb gasztronómiai értéke.",
        "Bács-Kiskun a hazai járműgyártás egyik fellegvára a kecskeméti Mercedes-gyár révén."
      ],
      "ro": [
        "Reședința județului este Kecskemét, cunoscut sub numele de 'orașul secesiunii'.",
        "Este singurul județ din Ungaria care se învecinează cu două fluvii mari (Dunărea și Tisa).",
        "Parcul Național Kiskunság protejează flora și fauna unică a stepei de nisip.",
        "Bugac este un centru renumit mondial pentru tradițiile păstorești maghiare și spectacolele ecvestre.",
        "Regiunea este unul dintre cei mai importanți producători de fructe și legume din Ungaria.",
        "Hajós este faimos pentru satul său de crame, cu peste 1.200 de pivnițe săpate în loess.",
        "În Kecskemét se află renumitul Institut Kodály pentru pedagogie muzicală.",
        "Județul are o minoritate germană semnificativă, în special în zona orașului Baja.",
        "Ciorba de pește din Baja (Bajai halászlé) este o specialitate culinară protejată.",
        "Bács-Kiskun este un centru important pentru industria auto (fabrica Mercedes-Benz)."
      ],
      "en": [
        "The county seat is Kecskemét, known as the 'City of Art Nouveau'.",
        "It is the only county in Hungary that borders two major rivers (Danube and Tisza).",
        "The Kiskunság National Park protects the unique flora and fauna of the sand steppe.",
        "Bugac is a world-famous center for Hungarian shepherd traditions and equestrian shows.",
        "The region is one of the most important producers of fruits and vegetables in Hungary.",
        "Hajós is famous for its wine cellar village, with over 1,200 cellars dug into loess walls.",
        "Kecskemét is home to the prestigious Kodály Institute for music education.",
        "The county has a significant German minority, especially in the area around Baja.",
        "The fish soup from Baja (Bajai halászlé) is a protected culinary specialty.",
        "Bács-Kiskun is a major hub for the automotive industry (Mercedes-Benz plant)."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Bács-Kiskun vármegye Magyarország legnagyobb területű vármegyéje, amely az ország déli részén, a Duna és a Tisza között terül el. A régió meghatározó tájegysége a Kiskunság, amely híres homokos talajáról, szikes tavairól és egyedülálló pusztai élővilágáról. Itt található a Kiskunsági Nemzeti Park, amely a magyar puszta egyik legfontosabb őrzője. A vármegye gazdasága jelentős részben a mezőgazdaságra és az élelmiszeriparra épül, kiemelkedő a zöldség- és gyümölcstermesztés, valamint a borászat, különösen a Kunsági borvidék révén. A terület kulturális és történelmi emlékekben is gazdag, olyan városokkal, mint Kecskemét, Kalocsa vagy Baja, amelyek népművészetükkel és gasztronómiájukkal vonzzák a látogatókat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Magyarország legnagyobb vármegyéje, területe több mint 8400 négyzetkilométer.",
        "Itt található a Kiskunsági Nemzeti Park, amely az UNESCO bioszféra-rezervátum része.",
        "A vármegye híres a kalocsai paprikáról és a világhírű kalocsai hímzésről.",
        "Kecskemét a vármegye székhelye, híres szecessziós építészetéről és a barackpálinkáról.",
        "Baja városa a Duna partján fekszik, és az évente megrendezett halászléfőző fesztiváljáról nevezetes."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bekes",
    type: "region",
    parent: "HU",
    coords: [21.0978, 46.6797],
    name: {"de": "Békés", "hu": "Békés", "ro": "Békés", "en": "Békés"},
    image: "/geo-images/hungary/bekes.webp",
    description: {
      "de": "Das Komitat Békés liegt im Südosten Ungarns an der Grenze zu Rumänien und ist als das 'Brotkörbchen' des Landes bekannt. Die Region ist geprägt von extrem fruchtbaren Schwarzerdeböden und einer weiten, flachen Landschaft, die ideal für den großflächigen Ackerbau ist. Das kulturelle und administrative Zentrum ist Békéscsaba, eine Stadt, die weltweit für ihre Gastronomie, insbesondere die berühmte Csabaer Wurst (Csabai kolbász), bekannt ist. Békés beherbergt zudem bedeutende historische Stätten wie die Burg von Gyula, die einzige erhaltene Backsteinburg in Mitteleuropa, und ist reich an Thermalquellen. Die Region bewahrt stolz ihre vielfältigen Traditionen, die durch das jahrhundertelange Zusammenleben von Ungarn, Slowaken, Rumänen und Deutschen geformt wurden.",
      "hu": "Békés vármegye Magyarország délkeleti részén, a román határ mentén fekszik, és az ország egyik legfontosabb mezőgazdasági területeként, az 'ország éléstáraként' ismert. A régiót rendívül termékeny mezőségi talajok és végtelen rónaságok jellemzik, amelyek ideálisak a szántóföldi növénytermesztéshez. Kulturális és közigazgatási központja Békéscsaba, amely világszerte híres gasztronómiájáról, különösen a hungarikumnak számító csabai kolbászról. Békés vármegye olyan jelentős történelmi emlékekkel is büszkélkedhet, mint a gyulai vár, amely Közép-Európa egyetlen épen maradt gótikus téglaerődítménye. A vármegye büszkén őrzi sokszínű hagyományait, amelyeket a magyarok, szlovákok, románok és németek évszázados együttélése formált.",
      "ro": "Județul Békés este situat în sud-estul Ungariei, la granița cu România, și este cunoscut drept 'coșul de pâine' al țării. Regiunea este caracterizată de soluri de cernoziom extrem de fertile și de un peisaj plat și vast, ideal pentru agricultura la scară largă. Centrul cultural și administrativ este Békéscsaba, un oraș renumit în întreaga lume pentru gastronomia sa, în special pentru celebrul cârnat de Csaba (Csabai kolbász). Békés găzduiește, de asemenea, situri istorice importante, cum ar fi Castelul din Gyula, singura cetate de cărămidă conservată din Europa Centrală, și este bogat în izvoare termale. Județul își păstrează cu mândrie tradițiile diverse, modelate de conviețuirea de secole a maghiarilor, slovacilor, românilor și germanilor.",
      "en": "Békés County is located in southeastern Hungary on the border with Romania and is known as the country's 'breadbasket'. The region is characterized by extremely fertile chernozem soils and a vast, flat landscape ideal for large-scale arable farming. Its cultural and administrative center is Békéscsaba, a city world-famous for its gastronomy, particularly the renowned Csaba sausage (Csabai kolbász). Békés also home to significant historical sites such as the Gyula Castle, the only preserved brick fortress in Central Europe, and is rich in thermal springs. The county proudly preserves its diverse traditions, shaped by centuries of coexistence between Hungarians, Slovaks, Romanians, and Germans."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Békéscsaba, Austragungsort des berühmten Wurstfestivals.",
        "Die Burg von Gyula ist die einzige intakte gotische Backsteinburg in Mitteleuropa.",
        "Die Region hat die besten Bodenqualitäten Ungarns für den Weizenanbau.",
        "Szarvas beherbergt das größte Arboretum Ungarns und das historische Mühlendenkmal.",
        "Die Csabaer Wurst (Csabai kolbász) ist ein geschütztes Hungarikum.",
        "Das Heilbad in Gyula befindet sich im ehemaligen Park des Almásy-Schlosses.",
        "Mezőhegyes ist berühmt für sein staatliches Gestüt und seine Pferdezucht-Tradition.",
        "Die Region ist ein wichtiges Zentrum der slowakischen Minderheit in Ungarn.",
        "Békés ist reich an Erdgasvorkommen und geothermischer Energie.",
        "Die Flüsse Körös bieten hervorragende Möglichkeiten für Angler und Wassertouristen."
      ],
      "hu": [
        "A vármegye székhelye Békéscsaba, a híres Csabai Kolbászfesztivál otthona.",
        "A gyulai vár Közép-Európa egyetlen épen maradt gótikus téglaerődítménye.",
        "A régió rendelkezik Magyarország legjobb minőségű termőföldjeivel.",
        "Szarvason található az ország legnagyobb arborétuma és a történelmi Magyarország közepe.",
        "A csabai kolbász és a gyulai kolbász is világszerte ismert hungarikum.",
        "A Gyulai Várfürdő az egykori Almásy-kastély természetvédelmi területté nyilvánított parkjában található.",
        "Mezőhegyes híres az Állami Ménesbirtokról és a nóniusz lófajta tenyésztéséről.",
        "A vármegye a magyarországi szlovák kisebbség egyik legfontosabb kulturális központja.",
        "Békés vármegye jelentős földgázkészletekkel és geotermikus energiával rendelkezik.",
        "A Körösök vidéke kiváló lehetőségeket nyújt a horgászat és a vízi turizmus kedvelőinek."
      ],
      "ro": [
        "Reședința județului este Békéscsaba, gazda celebrului Festival al Cârnatului.",
        "Castelul din Gyula este singura cetate gotică de cărămidă intactă din Europa Centrală.",
        "Regiunea are cele mai bune calități de sol din Ungaria pentru cultivarea grâului.",
        "Szarvas găzduiește cel mai mare arboretum din Ungaria și centrul istoric al Ungariei Mari.",
        "Cârnatul de Csaba (Csabai kolbász) este un produs Hungarikum protejat.",
        "Băile termale din Gyula se află în fostul parc al castelului Almásy.",
        "Mezőhegyes este faimos pentru herghelia sa de stat și tradiția creșterii cailor.",
        "Regiunea este un centru important al minorității slovace din Ungaria.",
        "Békés este bogat în zăcăminte de gaze naturale și energie geotermală.",
        "Râurile Criș (Körös) oferă oportunități excelente pentru pescari și turiștii nautici."
      ],
      "en": [
        "The county seat is Békéscsaba, home to the famous Sausage Festival.",
        "Gyula Castle is the only intact Gothic brick fortress in Central Europe.",
        "The region has the best soil quality in Hungary for wheat cultivation.",
        "Szarvas is home to Hungary's largest arboretum and the historic center of old Hungary.",
        "The Csaba sausage (Csabai kolbász) is a protected Hungarikum product.",
        "The Gyula thermal bath is located in the former park of the Almásy Castle.",
        "Mezőhegyes is famous for its State Stud Farm and horse breeding traditions.",
        "The region is an important center for the Slovak minority in Hungary.",
        "Békés is rich in natural gas deposits and geothermal energy.",
        "The Körös rivers offer excellent opportunities for anglers and water tourists."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Békés vármegye Magyarország délkeleti részén fekszik, és az ország egyik legfontosabb mezőgazdasági területe, amelyet gyakran az ország 'éléskamrájaként' is emlegetnek. A tájat az Alföld végtelen rónaságai, termékeny feketeföldek és lassú folyású folyók, mint a Körösök, határozzák meg. A régió híres vendégszeretetéről, gazdag népi hagyományairól és gasztronómiai különlegességeiről, mint például a csabai és gyulai kolbász. Békés vármegye számos kulturális kincset rejt, köztük a gyulai várat, amely Közép-Európa egyetlen épségben maradt gótikus síkvára. A természet kedvelőit a Körös-Maros Nemzeti Park háborítatlan tájai és a gazdag madárvilág várja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vármegye székhelye Békéscsaba, amely a világhírű Csabai Kolbászfesztivál otthona.",
        "Itt található a gyulai vár, az Alföld egyik legjelentősebb középkori műemléke.",
        "Békés vármegye az ország egyik legfontosabb gabonatermelő vidéke.",
        "Szarvas városa ad otthont a történelmi Magyarország földrajzi középpontjának.",
        "A vármegye folyói, a Körösök, népszerűek a vízi túrázók és a horgászok körében."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "borsod-abauj-zemplen",
    type: "region",
    parent: "HU",
    coords: [20.79, 48.1],
    name: {"de": "Borsod-Abaúj-Zemplén", "hu": "Borsod-Abaúj-Zemplén", "ro": "Borsod-Abaúj-Zemplén", "en": "Borsod-Abaúj-Zemplén"},
    description: {
      "de": "Das Komitat Borsod-Abaúj-Zemplén liegt im Nordosten Ungarns und ist eine der landschaftlich vielfältigsten Regionen des Landes. Es umfasst die majestätischen Gebirgszüge des Bükk und des Zemplén sowie die weltberühmte Weinregion Tokaj, die zum UNESCO-Welterbe gehört. Das administrative Zentrum ist Miskolc, eine Stadt mit einer starken industriellen Vergangenheit, die heute für ihre touristischen Attraktionen wie das einzigartige Höhlenbad von Miskolctapolca bekannt ist. Die Region ist reich an mittelalterlichen Burgen, historischen Städten und bietet mit dem Nationalpark Aggtelek eines der beeindruckendsten Höhlensysteme Europas. Borsod-Abaúj-Zemplén verbindet auf faszinierende Weise unberührte Natur, jahrhundertealte Weinkultur und ein reiches historisches Erbe.",
      "hu": "Borsod-Abaúj-Zemplén vármegye Magyarország északkeleti részén fekszik, és az ország egyik legváltozatosabb tájegysége. Területén osztozik a Bükk és a Zempléni-hegység vonulata, valamint itt található a világhírű Tokaji borvidék is, amely az UNESCO világörökség része. Székhelye Miskolc, amely jelentős ipari múltja mellett ma már turisztikai látványosságairól, például a miskolctapolcai Barlangfürdőről híres. A vármegye rendkívül gazdag középkori várakban, történelmi városokban, és itt található az Aggteleki Nemzeti Park is Európa egyik leglenyűgözőbb barlangrendszerével. Borsod-Abaúj-Zemplén a vadregényes természet, az évezredes borkultúra és a gazdag történelmi örökség különleges elegyét kínálja.",
      "ro": "Județul Borsod-Abaúj-Zemplén este situat în nord-estul Ungariei și este una dintre cele mai diverse regiuni din punct de vedere peisagistic ale țării. Acesta cuprinde lanțurile muntoase maiestuoase Bükk și Zemplén, precum și regiunea viticolă Tokaj, renumită în întreaga lume și inclusă în patrimoniul mondial UNESCO. Centrul administrativ este Miskolc, un oraș cu un trecut industrial puternic, cunoscut astăzi pentru atracțiile sale turistice, cum ar fi baia unică în peșteră de la Miskolctapolca. Regiunea este bogată în castele medievale, orașe istorice și oferă, prin Parcul Național Aggtelek, unul dintre cele mai impresionante sisteme de peșteri din Europa. Borsod-Abaúj-Zemplén îmbină într-un mod fascinant natura virgină, cultura viticolă seculară și o moștenire istorică bogată.",
      "en": "Borsod-Abaúj-Zemplén County is located in northeastern Hungary and is one of the country's most geographically diverse regions. It encompasses the majestic mountain ranges of Bükk and Zemplén, as well as the world-famous Tokaj wine region, which is a UNESCO World Heritage site. Its administrative center is Miskolc, a city with a strong industrial past that is now famous for its tourist attractions, such as the unique Cave Bath of Miskolctapolca. The county is rich in medieval castles, historic towns, and is home to the Aggtelek National Park, featuring one of Europe's most impressive cave systems. Borsod-Abaúj-Zemplén offers a fascinating blend of wild nature, centuries-old wine culture, and a rich historical heritage."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Miskolc, die viertgrößte Stadt Ungarns.",
        "Die Weinregion Tokaj-Hegyalja ist das erste geschlossene Weingebiet der Welt.",
        "Das Höhlenbad von Miskolctapolca ist in Europa einzigartig.",
        "Die Baradla-Höhle in Aggtelek gehört zum UNESCO-Weltnaturerbe.",
        "Die Burg von Diósgyőr war einst ein beliebter Aufenthaltsort ungarischer Königinnen.",
        "Sárospatak wird oft als das 'Athen am Bodrog' bezeichnet.",
        "Lillafüred beherbergt den höchsten Wasserfall Ungarns und ein prächtiges Schlosshotel.",
        "Die Region ist bekannt für ihre traditionelle Handwerkskunst, wie die Matyó-Stickerei.",
        "Borsod-Abaúj-Zemplén hat die zweithöchste Anzahl an Burgen im Land.",
        "Das Zemplén-Gebirge ist vulkanischen Ursprungs und reich an Mineralien."
      ],
      "hu": [
        "A vármegye székhelye Miskolc, Magyarország negyedik legnépesebb városa.",
        "A Tokaj-hegyaljai borvidék a világ első zárt borvidéke és UNESCO világörökségi helyszín.",
        "A miskolctapolcai Barlangfürdő Európában egyedülálló természetes képződmény.",
        "Az Aggteleki-karszt barlangrendszere az UNESCO világörökség része.",
        "A diósgyőri vár a középkorban a magyar királynék jegyajándéka és kedvelt lakhelye volt.",
        "Sárospatakot gyakran emlegetik a 'Bodrog-parti Athén' néven kulturális jelentősége miatt.",
        "Lillafüreden található az ország legmagasabb vízesése és a festői Palotaszálló.",
        "A vármegye híres népművészetéről, különösen a matyó hímzésről Mezőkövesden.",
        "Borsod-Abaúj-Zemplén rendelkezik az egyik legtöbb középkori várral az országban.",
        "A Zempléni-hegység vulkanikus eredetű, és rendkívül gazdag ásványkincsekben."
      ],
      "ro": [
        "Reședința județului este Miskolc, al patrulea oraș ca mărime din Ungaria.",
        "Regiunea viticolă Tokaj-Hegyalja este prima regiune viticolă închisă din lume.",
        "Baia în peșteră de la Miskolctapolca este unică în Europa.",
        "Peștera Baradla din Aggtelek face parte din patrimoniul mondial natural UNESCO.",
        "Castelul Diósgyőr a fost odinioară reședința preferată a reginelor Ungariei.",
        "Sárospatak este adesea numit 'Atena de pe malul Bodrogului'.",
        "Lillafüred găzduiește cea mai înaltă cascadă din Ungaria și un hotel-castel magnific.",
        "Regiunea este cunoscută pentru meșteșugurile tradiționale, cum ar fi broderia Matyó.",
        "Borsod-Abaúj-Zemplén are al doilea cel mai mare număr de castele din țară.",
        "Munții Zemplén sunt de origine vulcanică și sunt bogați în minerale."
      ],
      "en": [
        "The county seat is Miskolc, the fourth largest city in Hungary.",
        "The Tokaj-Hegyalja wine region is the world's first closed wine district.",
        "The Cave Bath of Miskolctapolca is unique in Europe.",
        "The Baradla Cave in Aggtelek is a UNESCO World Natural Heritage site.",
        "Diósgyőr Castle was once a favorite residence of Hungarian queens.",
        "Sárospatak is often referred to as the 'Athens on the Bodrog'.",
        "Lillafüred is home to Hungary's highest waterfall and a magnificent castle hotel.",
        "The region is known for its traditional crafts, such as Matyó embroidery.",
        "Borsod-Abaúj-Zemplén has the second highest number of castles in the country.",
        "The Zemplén Mountains are of volcanic origin and rich in minerals."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Borsod-Abaúj-Zemplén vármegye Magyarország északkeleti részén terül el, és az ország egyik legváltozatosabb tájegysége. A régió északi részét a Zempléni-hegység és az Aggteleki-karszt vonulatai uralják, ahol a világörökség részét képező Baradla-barlang található. Délebbre a Bükk-hegység és a Mátra nyúlványai, valamint a termékeny Alföld találkozása alkot festői környezetet. Ez a vármegye ad otthont a világhírű Tokaji borvidéknek is, amely a világ első zárt borvidéke. A terület történelmi várakban is rendkívül gazdag, mint például Diósgyőr, Boldogkő vagy Sárospatak, amelyek a magyar történelem fontos tanúi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Tokaj-hegyaljai borvidék, amely 2002 óta az UNESCO világörökség része.",
        "A vármegyében fekszik az Aggteleki Nemzeti Park a híres Baradla-cseppkőbarlanggal.",
        "Miskolc a vármegye székhelye, Magyarország egyik legnagyobb városa és fontos ipari központja.",
        "Miskolctapolca büszkélkedhet Európa egyetlen barlangfürdőjével.",
        "A zempléni várhegyek és romok a magyarországi kéktúra útvonalának népszerű megállóit alkotják."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csongrad-csanad",
    type: "region",
    parent: "HU",
    coords: [20.1414, 46.253],
    name: {"de": "Csongrád-Csanád", "hu": "Csongrád-Csanád", "ro": "Csongrád-Csanád", "en": "Csongrád-Csanád"},
    image: "/geo-images/hungary/csongrad-csanad.webp",
    description: {
      "de": "Das Komitat Csongrád-Csanád liegt im sonnigen Süden Ungarns an der Grenze zu Serbien und Rumänien und wird durch den majestätischen Fluss Theiß in zwei Hälften geteilt. Die Region ist bekannt für ihre extrem hohe Anzahl an Sonnenstunden, was sie zum idealen Standort für den Anbau der weltberühmten Szegediner Paprika macht. Das kulturelle und wirtschaftliche Zentrum ist Szeged, eine prächtige Universitätsstadt, die für ihre beeindruckende Votivkirche, ihre lebendige Kulturszene und ihre einzigartige Jugendstil-Architektur berühmt ist. Csongrád-Csanád beherbergt zudem bedeutende historische Gedenkstätten wie den Nationalen Historischen Gedenkpark in Ópusztaszer, wo die ungarische Landnahme gewürdigt wird. Die Region bietet eine perfekte Mischung aus kulinarischen Genüssen, thermaler Entspannung und tiefgreifender ungarischer Geschichte.",
      "hu": "Csongrád-Csanád vármegye Magyarország napsütötte déli részén, a szerb és a román határ mentén fekszik, és a fenséges Tisza folyó szeli ketté. A régió híres a rendkívül magas napsütéses órák számáról, ami ideálissá teszi a világhírű szegedi fűszerpaprika termesztéséhez. Kulturális és gazdasági központja Szeged, a patinás egyetemi város, amely lenyűgöző Fogadalmi templomáról, pezsgő kulturális életéről és egyedülálló szecessziós építészetéről ismert. Csongrád-Csanád ad otthont olyan jelentős történelmi emlékhelyeknek is, mint az Ópusztaszeri Nemzeti Történeti Emlékpark, ahol a magyar honfoglalás emléke előtt tiszteleghetünk. A vármegye a kulináris élvezetek, a termálvizes kikapcsolódás és a mélyre nyúló magyar történelem tökéletes ötvözetét kínálja.",
      "ro": "Județul Csongrád-Csanád este situat în sudul însorit al Ungariei, la granița cu Serbia și România, și este împărțit în două jumătăți de maiestuosul râu Tisa. Regiunea este cunoscută pentru numărul său extrem de mare de ore de soare, ceea ce o face locația ideală pentru cultivarea faimoasei boia de Szeged. Centrul cultural și economic este Szeged, un oraș universitar splendid, renumit pentru impresionanta sa Biserică Votivă, scena culturală vibrantă și arhitectura sa unică în stil Art Nouveau. Csongrád-Csanád găzduiește, de asemenea, situri istorice importante, cum ar fi Parcul Național Memorial Istoric din Ópusztaszer, unde este comemorată descălecarea maghiarilor. Județul oferă un amestec perfect de delicii culinare, relaxare termală și istorie maghiară profundă.",
      "en": "Csongrád-Csanád County is located in the sunny south of Hungary on the border with Serbia and Romania, and is divided into two halves by the majestic river Tisza. The region is famous for its extremely high number of sunshine hours, making it the ideal location for growing the world-renowned Szeged paprika. Its cultural and economic center is Szeged, a prestigious university city famous for its stunning Votive Church, vibrant cultural scene, and unique Art Nouveau architecture. Csongrád-Csanád is also home to significant historical sites such as the Ópusztaszer National Heritage Park, where the Hungarian conquest is commemorated. The county offers a perfect blend of culinary delights, thermal relaxation, and deep-rooted Hungarian history."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szeged, bekannt als die 'Stadt des Sonnenscheins'.",
        "Die Region beherbergt den tiefsten Punkt Ungarns in der Nähe von Szeged.",
        "Szegediner Salami (Pick) und Paprika sind weltweit bekannte Exportprodukte.",
        "In Ópusztaszer befindet sich das monumentale Feszty-Panorama-Gemälde.",
        "Die Stadt Makó ist berühmt für ihre Zwiebelproduktion und das Hagymatikum-Bad.",
        "Die Theiß-Blüte (Eintagsfliegen-Phänomen) ist ein einzigartiges Naturschauspiel der Region.",
        "Die Universität von Szeged gehört zu den renommiertesten Bildungseinrichtungen Mitteleuropas.",
        "Das Szegediner Freilichtfestival ist eines der größten Theaterereignisse Ungarns.",
        "Die Region hat eine bedeutende Erdöl- und Erdgasförderung.",
        "Die Fischsuppe aus Szeged (Szegedi halászlé) ist ein geschütztes kulinarisches Erbe."
      ],
      "hu": [
        "A vármegye székhelye Szeged, amelyet a 'napfény városaként' is emlegetnek.",
        "Itt található Magyarország legmélyebb pontja, Szeged közelében.",
        "A szegedi Pick szalámi és a fűszerpaprika világszerte ismert hungarikumok.",
        "Ópusztaszeren látható a monumentális Feszty-körkép, a magyarok bejöveteléről.",
        "Makó városa híres a vöröshagymájáról és a különleges Hagymatikum fürdőről.",
        "A tiszavirágzás egyedülálló természeti jelenség, amely minden évben vonzza a látogatókat.",
        "A Szegedi Tudományegyetem a közép-európai régió egyik legnevesebb felsőoktatási intézménye.",
        "A Szegedi Szabadtéri Játékok az ország legnagyobb színházi fesztiválja.",
        "A vármegye területén jelentős kőolaj- és földgázkitermelés folyik.",
        "A szegedi halászlé a magyar gasztronómia egyik legfontosabb alapköve."
      ],
      "ro": [
        "Reședința județului este Szeged, cunoscut sub numele de 'orașul soarelui'.",
        "Regiunea găzduiește cel mai jos punct din Ungaria, în apropiere de Szeged.",
        "Salamul de Szeged (Pick) și boiaua sunt produse de export cunoscute în întreaga lume.",
        "În Ópusztaszer se află monumentala pictură panoramică Feszty.",
        "Orașul Makó este faimos pentru producția de ceapă și băile Hagymatikum.",
        "Înflorirea Tisei (fenomenul rusalii) este un spectacol natural unic în regiune.",
        "Universitatea din Szeged este una dintre cele mai prestigioase instituții de învățământ din Europa Centrală.",
        "Festivalul în aer liber din Szeged este unul dintre cele mai mari evenimente teatrale din Ungaria.",
        "Regiunea are o producție semnificativă de petrol și gaze naturale.",
        "Ciorba de pește din Szeged (Szegedi halászlé) este o moștenire culinară protejată."
      ],
      "en": [
        "The county seat is Szeged, known as the 'City of Sunshine'.",
        "The region is home to the lowest point in Hungary, located near Szeged.",
        "Szeged salami (Pick) and paprika are world-famous export products.",
        "The monumental Feszty Panorama painting is located in Ópusztaszer.",
        "The city of Makó is famous for its onion production and the Hagymatikum bath.",
        "The 'blooming of the Tisza' (mayfly phenomenon) is a unique natural spectacle in the region.",
        "The University of Szeged is one of the most prestigious educational institutions in Central Europe.",
        "The Szeged Open Air Festival is one of Hungary's largest theatrical events.",
        "The region has significant oil and natural gas production.",
        "The fish soup from Szeged (Szegedi halászlé) is a protected culinary heritage."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Csongrád-Csanád vármegye az Alföld déli részén, a Tisza és a Maros találkozásánál fekszik, és Magyarország egyik legnapsütésesebb vidéke. A régió mezőgazdasági jelentősége kiemelkedő, különösen a világhírű szegedi fűszerpaprika és a makói hagyma termesztése révén. A vármegye központja Szeged, a 'napfény városa', amely lenyűgöző szecessziós épületeiről, Dómjáról és pezsgő egyetemi életéről ismert. A tájat a Tisza folyó határozza meg, amely nemcsak a gazdaság, hanem a turizmus és a kikapcsolódás fontos színtere is. A terület gazdag néprajzi hagyományokban, mint például a tápai gyékényszövés vagy a szegedi papucs készítése.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szeged a vármegye székhelye, ahol a híres Szegedi Szabadtéri Játékokat rendezik.",
        "A vármegye híres a szegedi fűszerpaprikáról, amely hungarikumnak számít.",
        "Makó városa a vöröshagyma termesztéséről és a Makovecz Imre tervezte Hagymatikum fürdőről ismert.",
        "Itt található az Ópusztaszeri Nemzeti Történeti Emlékpark a Feszty-körképpel.",
        "A Tisza és a Maros torkolata kedvelt kirándulóhely és vízi sportközpont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fejer",
    type: "region",
    parent: "HU",
    coords: [18.4103, 47.1899],
    name: {"de": "Weißenburg", "hu": "Fejér", "ro": "Fejér", "en": "Fejér"},
    image: "/geo-images/hungary/fejer.webp",
    description: {
      "de": "Das Komitat Fejér liegt im Herzen Ungarns, in der Region Mitteltransdanubien, und ist eine der historisch bedeutendsten Gegenden des Landes. Das administrative Zentrum ist Székesfehérvár, die 'Stadt der Könige', die im Mittelalter als Krönungs- und Grabstätte ungarischer Monarchen diente. Die Region besticht durch ihre geografische Vielfalt, die vom malerischen Velencer See, dem wärmsten Binnensee Europas, bis zu den sanften Hügeln des Vértes-Gebirges reicht. Fejér ist heute ein dynamisches wirtschaftliches Zentrum mit einer starken Industrie, bewahrt aber gleichzeitig seine reichen kulturellen Traditionen und architektonischen Schätze. Besucher finden hier eine faszinierende Verbindung aus königlicher Geschichte, moderner Entwicklung und erholsamen Naturerlebnissen.",
      "hu": "Fejér vármegye Magyarország szívében, a Közép-Dunántúli régióban fekszik, és az ország egyik legjelentősebb történelmi múltú területe. Székhelye Székesfehérvár, a 'királyok városa', amely a középkorban a magyar uralkodók koronázási és temetkezési helyeként szolgált. A vármegye földrajzi adottságai rendkívül változatosak: itt található a Velencei-tó, Európa egyik legmelegebb édesvízi tava, valamint a Vértes-hegység festői vonulatai. Fejér ma már dinamikusan fejlődő gazdasági központ, ahol a modern ipar és a gazdag kulturális örökség jól megfér egymás mellett. A látogatókat királyi történelem, lenyűgöző kastélyok és pihentető természeti környezet várja ebben a különleges régióban.",
      "ro": "Județul Fejér este situat în inima Ungariei, în regiunea Transdanubia Centrală, și este una dintre cele mai importante zone din punct de vedere istoric ale țării. Centrul administrativ este Székesfehérvár, 'orașul regilor', care în Evul Mediu a servit drept loc de încoronare și înmormântare a monarhilor maghiari. Regiunea impresionează prin diversitatea sa geografică, variind de la pitorescul Lac Velence, unul dintre cele mai calde lacuri cu apă dulce din Europa, până la dealurile blânde ale munților Vértes. Fejér este astăzi un centru economic dinamic, cu o industrie puternică, păstrându-și în același timp tradițiile culturale bogate și comorile arhitecturale. Vizitatorii găsesc aici o combinație fascinantă de istorie regală, dezvoltare modernă și experiențe relaxante în natură.",
      "en": "Fejér County is located in the heart of Hungary, in the Central Transdanubia region, and is one of the country's most historically significant areas. Its administrative center is Székesfehérvár, the 'City of Kings', which served as the coronation and burial site for Hungarian monarchs during the Middle Ages. The county boasts diverse geographical features, ranging from the picturesque Lake Velence, one of Europe's warmest freshwater lakes, to the rolling hills of the Vértes Mountains. Fejér is now a dynamic economic hub with a strong industrial base, while simultaneously preserving its rich cultural traditions and architectural treasures. Visitors will find a fascinating blend of royal history, modern development, and relaxing natural experiences in this unique region."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Székesfehérvár, eine der ältesten Städte Ungarns.",
        "Der Velencer See ist als 'See des Sonnenscheins' bekannt und ideal zum Segeln.",
        "In Székesfehérvár wurden 37 ungarische Könige gekrönt.",
        "Die Burg Bory in Székesfehérvár ist ein monumentales Kunstwerk aus Beton.",
        "Martonvásár beherbergt das Brunszvik-Schloss und das Beethoven-Museum.",
        "Die Region ist ein bedeutendes Zentrum der ungarischen Automobil- und Elektronikindustrie.",
        "Gárdony ist ein beliebter Ferienort am Ufer des Velencer Sees.",
        "Das Vértes-Gebirge bietet zahlreiche Wanderwege und historische Burgruinen.",
        "Mór ist das Zentrum einer berühmten Weißweinregion, bekannt für den 'Ezerjó'.",
        "Die antike römische Stadt Gorsium bei Tác ist eine bedeutende archäologische Stätte."
      ],
      "hu": [
        "A vármegye székhelye Székesfehérvár, az ország egyik legősibb városa.",
        "A Velencei-tó Magyarország harmadik legnagyobb természetes tava és kedvelt üdülőhely.",
        "Székesfehérváron összesen 37 magyar királyt koronáztak meg.",
        "A Bory-vár egy különleges, betonból épült 'szerelmi vallomás' és művészeti alkotás.",
        "Martonvásáron található a Brunszvik-kastély és a híres Beethoven Múzeum.",
        "A vármegye a hazai járműgyártás és elektronikai ipar egyik legfontosabb központja.",
        "Gárdony és Agárd a Velencei-tó partjának legnépszerűbb turisztikai célpontjai.",
        "A Vértes-hegység számos túraútvonalat és középkori várromot rejt.",
        "Mór városa a híres móri ezerjó fehérbor és a helyi borkultúra központja.",
        "Tác határában található Gorsium, az egyik legjelentősebb római kori szabadtéri múzeum."
      ],
      "ro": [
        "Reședința județului este Székesfehérvár, unul dintre cele mai vechi orașe din Ungaria.",
        "Lacul Velence este cunoscut drept 'lacul soarelui' și este ideal pentru navigație.",
        "În Székesfehérvár au fost încoronați 37 de regi ai Ungariei.",
        "Castelul Bory din Székesfehérvár este o operă de artă monumentală construită din beton.",
        "Martonvásár găzduiește Castelul Brunszvik și Muzeul Beethoven.",
        "Regiunea este un centru important al industriei auto și electronice din Ungaria.",
        "Gárdony este o stațiune populară pe malul Lacului Velence.",
        "Munții Vértes oferă numeroase trasee de drumeție și ruine de castele istorice.",
        "Mór este centrul unei renumite regiuni de vin alb, cunoscută pentru soiul 'Ezerjó'.",
        "Orașul antic roman Gorsium de lângă Tác este un sit arheologic important."
      ],
      "en": [
        "The county seat is Székesfehérvár, one of the oldest cities in Hungary.",
        "Lake Velence is known as the 'Lake of Sunshine' and is ideal for sailing.",
        "A total of 37 Hungarian kings were crowned in Székesfehérvár.",
        "Bory Castle in Székesfehérvár is a monumental work of art built from concrete.",
        "Martonvásár is home to the Brunszvik Castle and the Beethoven Museum.",
        "The county is a major hub for the Hungarian automotive and electronics industries.",
        "Gárdony is a popular holiday resort on the shores of Lake Velence.",
        "The Vértes Mountains offer numerous hiking trails and historic castle ruins.",
        "Mór is the center of a famous white wine region, known for the 'Ezerjó' grape.",
        "The ancient Roman city of Gorsium near Tác is a significant archaeological site."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Fejér vármegye Magyarország központi részén, a Dunántúl és az Alföld találkozásánál terül el, és történelmileg az ország egyik legfontosabb régiója. Székesfehérvár, a vármegye székhelye, a középkorban a magyar királyok koronázási és temetkezési helyszíne volt, így méltán nevezik a 'királyok városának'. A vármegye táji adottságai rendkívül változatosak: északon a Vértes és a Bakony nyúlványai, középen a Mezőföld rónasága, délen pedig a Velencei-tó partvidéke található. Gazdasága fejlett, az ipari parkok mellett a mezőgazdaság is jelentős, különösen a szőlőtermesztés a Móri borvidéken. A Velencei-tó népszerű üdülőhely, amelyet gyakran a 'napfény tavaként' is emlegetnek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Székesfehérvár a középkori Magyar Királyság egyik fővárosa és koronázóvárosa volt.",
        "A Velencei-tó Magyarország harmadik legnagyobb és egyik legmelegebb vizű tava.",
        "A vármegyében található a Vértes-hegység, amely kiváló túrázási lehetőségeket kínál.",
        "Martonvásár büszkélkedhet a gyönyörű Brunszvik-kastéllyal és a Beethoven-múzeummal.",
        "Dunaújváros az ország egyik legfontosabb ipari és kohászati központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor-moson-sopron",
    type: "region",
    parent: "HU",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab-Wieselburg-Ödenburg", "hu": "Győr-Moson-Sopron", "ro": "Győr-Moson-Sopron", "en": "Győr-Moson-Sopron"},
    image: "/geo-images/hungary/gyor-moson-sopron.webp",
    description: {
      "de": "Das Komitat Győr-Moson-Sopron liegt im Nordwesten Ungarns an der strategisch wichtigen Grenze zu Österreich und der Slowakei. Die Region gilt als das 'Tor zum Westen' und ist eine der wirtschaftlich am weitesten entwickelten Gegenden des Landes. Das administrative Zentrum ist Győr, die 'Stadt der Flüsse', die für ihre barocke Altstadt und ihre bedeutende Industrie bekannt ist. Ein weiteres Juwel der Region ist Sopron, eine Stadt mit einer reichen Geschichte und einer malerischen mittelalterlichen Architektur. Győr-Moson-Sopron beherbergt zudem UNESCO-Welterbestätten wie die Erzabtei Pannonhalma und den Neusiedler See, was die Region zu einem erstklassigen Ziel für Kultur- und Naturinteressierte macht.",
      "hu": "Győr-Moson-Sopron vármegye Magyarország északnyugati részén, az osztrák és a szlovák határ mentén fekszik, stratégiai kaput nyitva Nyugat-Európa felé. A régió az ország egyik legfejlettebb gazdasági területe, ahol a modern ipar és a történelmi hagyományok tökéletes összhangban élnek. Székhelye Győr, a 'folyók városa', amely lenyűgöző barokk belvárosáról és jelentős járműiparáról híres. A vármegye másik ékköve Sopron, a hűség városa, amely gazdag történelmi múltjával és festői középkori építészetével vonzza a látogatókat. Győr-Moson-Sopron olyan UNESCO világörökségi helyszíneknek is otthont ad, mint a Pannonhalmi Főapátság és a Fertő-táj, így a kultúra és a természet kedvelői számára is kiemelkedő úti cél.",
      "ro": "Județul Győr-Moson-Sopron este situat în nord-vestul Ungariei, la granița strategică cu Austria și Slovacia. Regiunea este considerată 'poarta către vest' și este una dintre cele mai dezvoltate zone economice ale țării. Centrul administrativ este Győr, 'orașul râurilor', cunoscut pentru centrul său vechi baroc și industria sa semnificativă. O altă bijuterie a regiunii este Sopron, un oraș cu o istorie bogată și o arhitectură medievală pitorească. Győr-Moson-Sopron găzduiește, de asemenea, situri din patrimoniul mondial UNESCO, cum ar fi Abația Teritorială din Pannonhalma și Lacul Fertő (Neusiedler See), ceea ce face din regiune o destinație de primă clasă pentru cei interesați de cultură și natură.",
      "en": "Győr-Moson-Sopron County is located in northwestern Hungary on the strategically important border with Austria and Slovakia. The region is considered the 'Gateway to the West' and is one of the most economically developed areas in the country. Its administrative center is Győr, the 'City of Rivers', famous for its stunning Baroque old town and significant industrial base. Another jewel of the region is Sopron, a city with a rich history and picturesque medieval architecture. Győr-Moson-Sopron is also home to UNESCO World Heritage sites such as the Pannonhalma Archabbey and Lake Fertő (Neusiedler See), making the county a premier destination for those interested in culture and nature."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Győr, ein bedeutendes Zentrum der Automobilindustrie (Audi).",
        "Die Erzabtei Pannonhalma ist eines der ältesten historischen Denkmäler Ungarns.",
        "Sopron ist als die 'treueste Stadt' (Civitas Fidelissima) bekannt.",
        "Der Neusiedler See (Fertő-tó) ist der westlichste Steppensee Europas.",
        "Das Schloss Esterházy in Fertőd wird oft als das 'ungarische Versailles' bezeichnet.",
        "Die Region ist berühmt für ihre Weinbaugebiete, insbesondere Sopron und Pannonhalma.",
        "Szigetköz ist eine einzigartige Flusslandschaft zwischen der Großen und Kleinen Donau.",
        "Mosonmagyaróvár ist bekannt für seine Thermalbäder und seine landwirtschaftliche Universität.",
        "Die Region hat eine der niedrigsten Arbeitslosenquoten in Ungarn.",
        "Das Paneuropäische Picknick bei Sopron war ein Meilenstein beim Fall des Eisernen Vorhangs."
      ],
      "hu": [
        "A vármegye székhelye Győr, a hazai járműgyártás egyik legfontosabb központja (Audi).",
        "A Pannonhalmi Főapátság az ország egyik legősibb történelmi emléke és UNESCO világörökség.",
        "Sopron a 'leghűségesebb város' (Civitas Fidelissima) címet viseli.",
        "A Fertő-tó Európa legnyugatibb sztyeppei tava és közös világörökség Ausztriával.",
        "A fertődi Esterházy-kastélyt gyakran nevezik a 'magyar Versailles'-nak.",
        "A vármegye híres borvidékeiről, különösen a soproni és a pannonhalmi borokról.",
        "A Szigetköz a Duna ágai által körülölelt egyedülálló vízi világ és természetvédelmi terület.",
        "Mosonmagyaróvár híres gyógyvizéről és nagy múltú agrárfelsőoktatásáról.",
        "A régió gazdasági fejlettsége és foglalkoztatottsága országos szinten is kiemelkedő.",
        "A Sopron melletti Páneurópai Piknik sorsfordító esemény volt a vasfüggöny lebontásában."
      ],
      "ro": [
        "Reședința județului este Győr, un centru important al industriei auto (Audi).",
        "Abația Teritorială din Pannonhalma este unul dintre cele mai vechi monumente istorice din Ungaria.",
        "Sopron este cunoscut drept 'cel mai fidel oraș' (Civitas Fidelissima).",
        "Lacul Fertő (Neusiedler See) este cel mai vestic lac de stepă din Europa.",
        "Castelul Esterházy din Fertőd este adesea numit 'Versailles-ul maghiar'.",
        "Regiunea este faimoasă pentru zonele sale viticole, în special Sopron și Pannonhalma.",
        "Szigetköz este un peisaj fluvial unic între Dunărea Mare și Dunărea Mică.",
        "Mosonmagyaróvár este cunoscut pentru băile sale termale și universitatea sa agricolă.",
        "Regiunea are una dintre cele mai scăzute rate ale șomajului din Ungaria.",
        "Picnicul Paneuropean de lângă Sopron a fost un moment decisiv în căderea Cortinei de Fier."
      ],
      "en": [
        "The county seat is Győr, a major hub for the automotive industry (Audi).",
        "The Pannonhalma Archabbey is one of Hungary's oldest historical monuments.",
        "Sopron is known as the 'Most Loyal City' (Civitas Fidelissima).",
        "Lake Fertő (Neusiedler See) is the westernmost steppe lake in Europe.",
        "The Esterházy Castle in Fertőd is often referred to as the 'Hungarian Versailles'.",
        "The region is famous for its wine districts, particularly Sopron and Pannonhalma.",
        "Szigetköz is a unique river landscape between the Great and Little Danube.",
        "Mosonmagyaróvár is famous for its thermal baths and its agricultural university.",
        "The region has one of the lowest unemployment rates in Hungary.",
        "The Pan-European Picnic near Sopron was a milestone in the fall of the Iron Curtain."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Győr-Moson-Sopron vármegye Magyarország északnyugati kapujában, az osztrák és a szlovák határ mentén fekszik, és az ország egyik legfejlettebb gazdasági régiója. A vármegye székhelye Győr, a 'folyók városa', amely barokk belvárosával és modern iparával emelkedik ki. Nyugaton Sopron, a 'leghűségesebb város' található, amely történelmi hangulatával és híres borvidékével vonzza a látogatókat. A tájat a Kisalföld rónasága, a Hanság lápvilága és a Fertő-tó nádasai határozzák meg, utóbbi az UNESCO világörökség része. Pannonhalma büszkélkedhet az ezeréves Bencés Főapátsággal, amely a magyar kereszténység és kultúra egyik legfontosabb bölcsője.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Pannonhalmi Főapátság, amely 1996 óta az UNESCO világörökség része.",
        "Sopron városa az 1921-es népszavazás emlékére viseli a 'Civitas Fidelissima' (Leghűségesebb Város) címet.",
        "A Fertő-tó Európa legnyugatibb sztyeppei tava, közös világörökségi terület Ausztriával.",
        "Győr városa az Audi gyár révén a magyar autóipar egyik legfontosabb központja.",
        "A Szigetköz a Duna ágai között elterülő, különleges vizes élőhely és természeti paradicsom."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajdu-bihar",
    type: "region",
    parent: "HU",
    coords: [21.6273, 47.5316],
    name: {"de": "Hajdú-Bihar", "hu": "Hajdú-Bihar", "ro": "Hajdú-Bihar", "en": "Hajdú-Bihar"},
    image: "/geo-images/hungary/hajdu-bihar.webp",
    description: {
      "de": "Das Komitat Hajdú-Bihar liegt im Osten Ungarns an der Grenze zu Rumänien und ist das Herz der Großen Ungarischen Tiefebene (Alföld). Die Region ist weltberühmt für den Nationalpark Hortobágy, die größte natürliche Grassteppe Europas, die zum UNESCO-Welterbe gehört und die traditionelle Hirtenkultur bewahrt. Das administrative und kulturelle Zentrum ist Debrecen, die zweitgrößte Stadt Ungarns, die oft als das 'kalvinistische Rom' bezeichnet wird und eine zentrale Rolle in der ungarischen Geschichte spielte. Hajdú-Bihar ist zudem ein bedeutendes Zentrum für Gesundheitstourismus, insbesondere durch das Heilbad Hajdúszoboszló, das über eines der größten Badekomplexe Europas verfügt. Die Region bietet Besuchern eine einzigartige Kombination aus unendlichen Weiten, tief verwurzelten Traditionen und moderner urbaner Dynamik.",
      "hu": "Hajdú-Bihar vármegye Magyarország keleti részén, a román határ mentén fekszik, és az Alföld szívének tekinthető. A régió világszerte híres a Hortobágyi Nemzeti Parkról, amely Európa legnagyobb összefüggő füves pusztája, UNESCO világörökségi helyszín, és a mai napig őrzi a hagyományos pásztoréletformát. Székhelye Debrecen, az ország második legnépesebb városa, amelyet gyakran a 'kálvinista Róma' néven emlegetnek, és amely többször is sorsfordító szerepet játszott a magyar történelemben. Hajdú-Bihar emellett az egészségturizmus fellegvára is, köszönhetően Hajdúszoboszlónak, ahol Európa egyik legnagyobb fürdőkomplexuma található. A vármegye a végtelen rónaságok szabadságát, a gazdag kulturális örökséget és a modern városi pezsgést ötvözi.",
      "ro": "Județul Hajdú-Bihar este situat în estul Ungariei, la granița cu România, și este inima Marii Câmpii Maghiare (Alföld). Regiunea este renumită în întreaga lume pentru Parcul Național Hortobágy, cea mai mare stepă naturală de iarbă din Europa, inclusă în patrimoniul mondial UNESCO, care păstrează cultura tradițională a păstorilor. Centrul administrativ și cultural este Debrecen, al doilea oraș ca mărime din Ungaria, numit adesea 'Roma calvinistă', care a jucat un rol central în istoria maghiară. Hajdú-Bihar este, de asemenea, un centru important pentru turismul de sănătate, în special prin stațiunea Hajdúszoboszló, care dispune de unul dintre cele mai mari complexe balneare din Europa. Județul oferă vizitatorilor o combinație unică de spații infinite, tradiții adânc înrădăcinate și dinamică urbană modernă.",
      "en": "Hajdú-Bihar County is located in eastern Hungary on the border with Romania and is the heart of the Great Hungarian Plain (Alföld). The region is world-famous for the Hortobágy National Park, Europe's largest continuous natural grassland, which is a UNESCO World Heritage site and preserves traditional pastoral culture. Its administrative and cultural center is Debrecen, Hungary's second-largest city, often referred to as the 'Calvinist Rome', which has played a pivotal role in Hungarian history. Hajdú-Bihar is also a major hub for health tourism, particularly due to the Hajdúszoboszló spa, which boasts one of Europe's largest bathing complexes. The county offers visitors a unique combination of vast open spaces, deep-rooted traditions, and modern urban vibrancy."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Debrecen, ein historisches Zentrum der Reformation in Ungarn.",
        "Der Nationalpark Hortobágy war der erste Nationalpark Ungarns (gegründet 1973).",
        "Hajdúszoboszló beherbergt das größte Heilbad Europas.",
        "Die Region ist bekannt für die Zucht des ungarischen Graurindes und des Zackelschafs.",
        "Die Große Reformierte Kirche in Debrecen ist ein Symbol der ungarischen Unabhängigkeit.",
        "Die Neunbögige Brücke in Hortobágy ist die längste Steinbrücke Ungarns.",
        "Debrecen ist ein bedeutendes Bildungszentrum mit einer der ältesten Universitäten des Landes.",
        "Die Region ist berühmt für ihre traditionelle Gastronomie, wie den Hortobágyer Fleischpfannkuchen.",
        "Hajdú-Bihar hat eine bedeutende Erdgasförderung und Landwirtschaft.",
        "Der Blumenkarneval in Debrecen ist eines der spektakulärsten Sommerfestivals Ungarns."
      ],
      "hu": [
        "A vármegye székhelye Debrecen, a magyarországi reformáció történelmi központja.",
        "A Hortobágyi Nemzeti Park Magyarország első és legnagyobb kiterjedésű nemzeti parkja.",
        "Hajdúszoboszlón található Európa legnagyobb fürdőkomplexuma.",
        "A régió híres az őshonos magyar állatfajtákról, mint a szürkemarha és a rackajuh.",
        "A debreceni Református Nagytemplom a magyar függetlenségi törekvések jelképe.",
        "A hortobágyi Kilenclyukú híd az ország leghosszabb kőhídja.",
        "Debrecen jelentős oktatási központ, egyeteme az ország egyik legrangosabb intézménye.",
        "A vármegye gasztronómiájának egyik legismertebb étele a hortobágyi húsos palacsinta.",
        "Hajdú-Bihar jelentős földgázkitermeléssel és fejlett mezőgazdasággal rendelkezik.",
        "A Debreceni Virágkarnevál az ország egyik leglátványosabb és legnépszerűbb nyári fesztiválja."
      ],
      "ro": [
        "Reședința județului este Debrecen, un centru istoric al Reformei în Ungaria.",
        "Parcul Național Hortobágy a fost primul parc național din Ungaria (fondat în 1973).",
        "Hajdúszoboszló găzduiește cel mai mare complex balnear din Europa.",
        "Regiunea este cunoscută pentru creșterea vitelor sure maghiare și a oilor Rațca.",
        "Marea Biserică Reformată din Debrecen este un simbol al independenței maghiare.",
        "Podul cu nouă arcuri din Hortobágy este cel mai lung pod de piatră din Ungaria.",
        "Debrecen este un centru educațional important, cu una dintre cele mai vechi universități din țară.",
        "Regiunea este faimoasă pentru gastronomia sa tradițională, cum ar fi clătitele de Hortobágy.",
        "Hajdú-Bihar are o producție semnificativă de gaze naturale și o agricultură dezvoltată.",
        "Carnavalul Florilor din Debrecen este unul dintre cele mai spectaculoase festivaluri de vară din Ungaria."
      ],
      "en": [
        "The county seat is Debrecen, a historic center of the Reformation in Hungary.",
        "Hortobágy National Park was Hungary's first national park (founded in 1973).",
        "Hajdúszoboszló is home to the largest spa complex in Europe.",
        "The region is known for breeding indigenous Hungarian Grey cattle and Racka sheep.",
        "The Great Reformed Church in Debrecen is a symbol of Hungarian independence.",
        "The Nine-arched Bridge in Hortobágy is the longest stone bridge in Hungary.",
        "Debrecen is a major educational center with one of the country's oldest universities.",
        "The county is famous for its traditional gastronomy, such as the Hortobágy meat pancakes.",
        "Hajdú-Bihar has significant natural gas production and a strong agricultural sector.",
        "The Debrecen Flower Carnival is one of Hungary's most spectacular summer festivals."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Hajdú-Bihar vármegye az Alföld keleti részén terül el, és nevében a történelmi hajdúvárosok emlékét őrzi. A vármegye székhelye Debrecen, az ország második legnagyobb városa, amelyet a 'kálvinista Rómaként' is emlegetnek gazdag egyházi és kulturális öröksége miatt. A régió legfontosabb tájegysége a Hortobágy, Magyarország első és legnagyobb nemzeti parkja, ahol a pusztai életmód, a gulyás- és csikóshagyományok a mai napig élnek. Hajdú-Bihar emellett híres gyógyvizeiről is, Hajdúszoboszló Európa egyik legnagyobb fürdőkomplexumával várja a gyógyulni vágyókat. A vármegye gazdaságában a mezőgazdaság mellett az élelmiszeripar és a gyógyszergyártás is meghatározó szerepet játszik.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Hortobágyi Nemzeti Park a világörökség része, és a pusztai pásztorkultúra legfontosabb őrzője.",
        "Debrecen a magyar reformáció központja, híres Református Nagytemplomáról.",
        "Hajdúszoboszló a 'reumások Mekkája', itt található Európa legnagyobb fürdője.",
        "A vármegye híres a hajdúk történelmi szerepéről, akik Bocskai István fejedelemtől kaptak kiváltságokat.",
        "A Hortobágyon található a híres Kilenclyukú híd, amely a puszta jelképe."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "heves",
    type: "region",
    parent: "HU",
    coords: [20.3739, 47.9025],
    name: {"de": "Heves", "hu": "Heves", "ro": "Heves", "en": "Heves"},
    image: "/geo-images/hungary/heves.webp",
    description: {
      "de": "Das Komitat Heves liegt im Norden Ungarns und beherbergt die höchsten Gipfel des Landes im Mátra- und Bükk-Gebirge. Die Region ist berühmt für ihre atemberaubende Natur, ihre erstklassigen Weine und ihre reiche historische Vergangenheit. Das administrative Zentrum ist Eger, eine der schönsten Barockstädte Ungarns, die für ihre heldenhafte Verteidigung gegen die Osmanen und ihr beeindruckendes Minarett bekannt ist. Heves bietet zudem einzigartige Wellness-Erlebnisse, wie den Salzberg von Egerszalók, und ist ein Paradies für Wanderer und Naturliebhaber. Die Kombination aus alpiner Landschaft, historischer Tiefe und exzellenter Gastronomie macht Heves zu einer der attraktivsten Regionen für Touristen.",
      "hu": "Heves vármegye Magyarország északi részén fekszik, és itt találhatók az ország legmagasabb csúcsai a Mátrában és a Bükkben. A régió híres lenyűgöző természeti adottságairól, kiváló borairól és gazdag történelmi múltjáról. Székhelye Eger, az ország egyik legszebb barokk városa, amely az oszmánok elleni hősies várvédelméről és az egri bikavérről világszerte ismert. Heves vármegye egyedülálló wellness élményeket is kínál, mint például az egerszalóki sódomb, és igazi paradicsom a túrázók és a természet kedvelői számára. A hegyvidéki táj, a történelmi mélység és a kiváló gasztronómia ötvözete Heves vármegyét az ország egyik legvonzóbb turisztikai célpontjává teszi.",
      "ro": "Județul Heves este situat în nordul Ungariei și găzduiește cele mai înalte vârfuri din țară în munții Mátra și Bükk. Regiunea este renumită pentru natura sa uluitoare, vinurile sale de primă clasă și trecutul său istoric bogat. Centrul administrativ este Eger, unul dintre cele mai frumoase orașe baroce din Ungaria, cunoscut pentru apărarea sa eroică împotriva otomanilor și impresionantul său minaret. Heves oferă, de asemenea, experiențe de wellness unice, cum ar fi muntele de sare de la Egerszalók, și este un paradis pentru excursioniști și iubitorii de natură. Combinația de peisaj montan, profunzime istorică și gastronomie excelentă face din Heves una dintre cele mai atractive regiuni pentru turiști.",
      "en": "Heves County is located in northern Hungary and is home to the country's highest peaks in the Mátra and Bükk Mountains. The region is famous for its breathtaking nature, world-class wines, and rich historical past. Its administrative center is Eger, one of Hungary's most beautiful Baroque cities, renowned for its heroic defense against the Ottomans and its impressive minaret. Heves also offers unique wellness experiences, such as the salt hill of Egerszalók, and is a paradise for hikers and nature lovers. The combination of alpine landscapes, historical depth, and excellent gastronomy makes Heves one of the most attractive regions for tourists."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Eger, bekannt für das 'Egerer Stierblut' (Egri Bikavér).",
        "Der Kékes im Mátra-Gebirge ist mit 1014 Metern der höchste Punkt Ungarns.",
        "Eger beherbergt das nördlichste Minarett aus der Zeit der osmanischen Besatzung.",
        "Der Salzberg von Egerszalók ist ein weltweit seltenes Naturphänomen.",
        "Die Region ist berühmt für ihre Thermalquellen und Heilbäder.",
        "Das Bükk-Gebirge beherbergt zahlreiche Höhlen und eine reiche Artenvielfalt.",
        "Die Burg von Eger ist ein Symbol des ungarischen Widerstands gegen die Türken.",
        "Parád ist bekannt für seine Heilwässer und das Kutschenmuseum.",
        "Heves ist ein bedeutendes Zentrum des ungarischen Weinbaus.",
        "Die Region bietet hervorragende Möglichkeiten für Wintersport am Kékes."
      ],
      "hu": [
        "A vármegye székhelye Eger, a világhírű Egri Bikavér hazája.",
        "Itt található Magyarország legmagasabb pontja, a Kékes-tető (1014 m).",
        "Egerben látható az egykori Oszmán Birodalom legészakibb minaretje.",
        "Az egerszalóki sódomb a világon ritka természeti képződmény.",
        "A vármegye rendkívül gazdag gyógyvizekben és termálfürdőkben.",
        "A Bükki Nemzeti Park területén számos barlang és különleges növényfaj található.",
        "Az egri vár a magyar történelem egyik legfontosabb jelképe.",
        "Parád híres kénes gyógyvizéről és a Cifra Istállóban található Kocsimúzeumról.",
        "Heves vármegye az ország egyik legjelentősebb történelmi borvidéke.",
        "A Mátra és a Bükk vonulatai kiváló túrázási és síelési lehetőségeket nyújtanak."
      ],
      "ro": [
        "Reședința județului este Eger, patria faimosului vin 'Sânge de Taur' (Egri Bikavér).",
        "Vârful Kékes din munții Mátra este cel mai înalt punct din Ungaria (1014 m).",
        "Eger găzduiește cel mai nordic minaret din perioada ocupației otomane.",
        "Muntele de sare de la Egerszalók este un fenomen natural rar în lume.",
        "Regiunea este renumită pentru izvoarele sale termale și băile curative.",
        "Munții Bükk adăpostesc numeroase peșteri și o biodiversitate bogată.",
        "Cetatea din Eger este un simbol al rezistenței maghiare împotriva turcilor.",
        "Parád este cunoscut pentru apele sale curative și muzeul trăsurilor.",
        "Heves este un centru important al viticulturii maghiare.",
        "Regiunea oferă oportunități excelente pentru sporturi de iarnă pe vârful Kékes."
      ],
      "en": [
        "The county seat is Eger, home to the world-famous 'Bull's Blood' wine (Egri Bikavér).",
        "Kékes in the Mátra Mountains is the highest point in Hungary at 1,014 meters.",
        "Eger is home to the northernmost minaret from the Ottoman era.",
        "The salt hill of Egerszalók is a rare natural phenomenon worldwide.",
        "The region is famous for its thermal springs and medicinal baths.",
        "The Bükk Mountains house numerous caves and a rich biodiversity.",
        "Eger Castle is a symbol of Hungarian resistance against the Turks.",
        "Parád is known for its medicinal waters and the carriage museum.",
        "Heves is a major center of Hungarian viticulture.",
        "The region offers excellent opportunities for winter sports at Kékes."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Heves vármegye Magyarország északi részén fekszik, és az ország egyik legszebb és legváltozatosabb vidéke, ahol a Mátra és a Bükk vonulatai találkoznak az Alfölddel. Itt található az ország legmagasabb pontja, a Kékes-tető, amely népszerű kiránduló- és síközpont. A vármegye székhelye Eger, a történelmi hősök városa, amely barokk építészetéről, váráról és kiváló borairól, különösen az Egri Bikavérről híres. A Tisza-tó északi része is a vármegyéhez tartozik, amely különleges vízi paradicsomot kínál a természet kedvelőinek. Heves vármegye gazdag népművészeti kincsekben is, mint például a palóc hagyományok, és számos gyógyfürdővel, mint Egerszalók vagy Parád, büszkélkedhet.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található Magyarország legmagasabb csúcsa, a Kékes-tető (1014 méter).",
        "Eger városa híres az 1552-es várvédésről és az Egri Bikavér vörösborról.",
        "Egerszalókon egyedülálló 'sódomb' található, amelyet a feltörő termálvíz alakított ki.",
        "A Mátra-hegység az ország egyik legnépszerűbb túra- és üdülőövezete.",
        "A vármegye északi részén élő palócok gazdag népszokásaikról és jellegzetes nyelvjárásukról ismertek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jasz-nagykun-szolnok",
    type: "region",
    parent: "HU",
    coords: [20.2, 47.1833],
    name: {"de": "Jász-Nagykun-Szolnok", "hu": "Jász-Nagykun-Szolnok", "ro": "Jász-Nagykun-Szolnok", "en": "Jász-Nagykun-Szolnok"},
    description: {
      "de": "Das Komitat Jász-Nagykun-Szolnok liegt im Herzen der Großen Ungarischen Tiefebene und wird vom majestätischen Fluss Theiß durchquert. Die Region ist geprägt von weiten Agrarlandschaften und einer reichen kulturellen Identität, die auf die Ansiedlung der Jazygen (Jász) und Kumanen (Kun) zurückgeht. Das administrative Zentrum ist Szolnok, eine strategisch wichtige Stadt an der Theiß, die für ihre Brücken, ihre Luftfahrtgeschichte und ihre lebendige Kunstszene bekannt ist. Jász-Nagykun-Szolnok ist zudem ein bedeutendes Zentrum für Thermal- und Wassertourismus, insbesondere durch den Theiß-See, der vielfältige Freizeitmöglichkeiten bietet. Die Region bewahrt stolz ihre einzigartigen Traditionen und bietet Besuchern eine authentische Erfahrung des ungarischen Tieflandes.",
      "hu": "Jász-Nagykun-Szolnok vármegye az Alföld szívében terül el, és a fenséges Tisza folyó szeli át. A régiót végtelen mezőgazdasági tájak és gazdag kulturális identitás jellemzi, amely a jászok és a kunok betelepülésére vezethető vissza. Székhelye Szolnok, a Tisza-parti stratégiai központ, amely hídjairól, repüléstörténeti múltjáról és pezsgő művészeti életéről ismert. Jász-Nagykun-Szolnok emellett a termál- és vízi turizmus egyik fontos fellegvára, különösen a Tisza-tó révén, amely számtalan kikapcsolódási lehetőséget kínál. A vármegye büszkén őrzi egyedülálló hagyományait, és az alföldi életérzés hiteles élményét nyújtja az idelátogatóknak.",
      "ro": "Județul Jász-Nagykun-Szolnok este situat în inima Marii Câmpii Maghiare și este traversat de maiestuosul râu Tisa. Regiunea este caracterizată de peisaje agricole vaste și de o identitate culturală bogată, care provine de la așezarea iazigilor (Jász) și cumanilor (Kun). Centrul administrativ este Szolnok, un oraș strategic pe malul Tisei, cunoscut pentru podurile sale, istoria aviației și scena artistică vibrantă. Jász-Nagykun-Szolnok este, de asemenea, un centru important pentru turismul termal și nautic, în special prin Lacul Tisa, care oferă numeroase posibilități de recreere. Județul își păstrează cu mândrie tradițiile unice și oferă vizitatorilor o experiență autentică a câmpiei maghiare.",
      "en": "Jász-Nagykun-Szolnok County is located in the heart of the Great Hungarian Plain and is traversed by the majestic river Tisza. The region is characterized by vast agricultural landscapes and a rich cultural identity stemming from the settlement of the Jász (Iazyges) and Kun (Cumans) peoples. Its administrative center is Szolnok, a strategic city on the banks of the Tisza, famous for its bridges, aviation history, and vibrant art scene. Jász-Nagykun-Szolnok is also a major hub for thermal and water tourism, particularly through Lake Tisza, which offers diverse recreational opportunities. The county proudly preserves its unique traditions and offers visitors an authentic experience of the Hungarian lowlands."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szolnok, ein wichtiger Verkehrsknotenpunkt an der Theiß.",
        "Die Region ist nach den Volksgruppen der Jazygen und Kumanen benannt.",
        "Der Theiß-See ist der zweitgrößte See Ungarns und ein Paradies für Ökotourismus.",
        "Szolnok beherbergt das größte Luftfahrtmuseum Ungarns (RepTár).",
        "Die Stadt Jászberény ist das kulturelle Zentrum der Jazygen-Region.",
        "Mezőtúr ist weltberühmt für seine jahrhundertealte Töpfertradition.",
        "Die Region verfügt über zahlreiche Heil- und Thermalbäder, wie in Berekfürdő.",
        "Das Komitat spielt eine führende Rolle in der ungarischen Getreide- und Ölsaatenproduktion.",
        "Die 'Lehel-Horn' in Jászberény ist eine bedeutende historische Reliquie.",
        "Die Flora und Fauna entlang der Theiß-Auen ist von herausragender ökologischer Bedeutung."
      ],
      "hu": [
        "A vármegye székhelye Szolnok, a Tisza menti közlekedés és kultúra fontos csomópontja.",
        "A régió nevét az itt letelepedett jász és kun népcsoportokról kapta.",
        "A Tisza-tó az ország második legnagyobb tava és az ökoturizmus paradicsoma.",
        "Szolnokon található a RepTár, Európa egyik legmodernebb repüléstörténeti múzeuma.",
        "Jászberény a jászok kulturális központja, ahol a híres Lehel-kürtöt is őrzik.",
        "Mezőtúr városa évszázados fazekas hagyományairól és kerámiáiról világszerte ismert.",
        "A vármegye kiváló gyógyvizekkel rendelkezik, például Berekfürdőn vagy Cserkeszőlőn.",
        "Jász-Nagykun-Szolnok az ország egyik legfontosabb gabonatermelő vidéke.",
        "A Tisza és holtágai mentén egyedülálló ártéri élővilág található.",
        "A vármegye gasztronómiájának egyik különlegessége a karcagi birkapörkölt."
      ],
      "ro": [
        "Reședința județului este Szolnok, un nod important de transport pe malul Tisei.",
        "Regiunea este numită după grupurile etnice ale iazigilor și cumanilor.",
        "Lacul Tisa este al doilea cel mai mare lac din Ungaria și un paradis pentru ecoturism.",
        "Szolnok găzduiește cel mai mare muzeu al aviației din Ungaria (RepTár).",
        "Orașul Jászberény este centrul cultural al regiunii iazigilor.",
        "Mezőtúr este renumit în întreaga lume pentru tradiția sa de olărit de secole.",
        "Regiunea dispune de numeroase băi curative și termale, cum ar fi cea din Berekfürdő.",
        "Județul joacă un rol de lider în producția maghiară de cereale și semințe oleaginoase.",
        "'Cornul lui Lehel' din Jászberény este o relicvă istorică importantă.",
        "Flora și fauna de-a lungul luncii Tisei au o importanță ecologică remarcabilă."
      ],
      "en": [
        "The county seat is Szolnok, an important transport hub on the river Tisza.",
        "The region is named after the Jász (Iazyges) and Kun (Cumans) ethnic groups.",
        "Lake Tisza is the second largest lake in Hungary and a paradise for ecotourism.",
        "Szolnok is home to Hungary's largest aviation museum (RepTár).",
        "The city of Jászberény is the cultural center of the Jász region.",
        "Mezőtúr is world-famous for its centuries-old pottery tradition.",
        "The region has numerous medicinal and thermal baths, such as in Berekfürdő.",
        "The county plays a leading role in Hungarian grain and oilseed production.",
        "The 'Lehel Horn' in Jászberény is a significant historical relic.",
        "The flora and fauna along the Tisza floodplains are of outstanding ecological importance."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Jász-Nagykun-Szolnok vármegye az Alföld szívében, a Tisza és a Körösök mentén terül el, és nevét az itt letelepedett jász és kun népcsoportokról kapta. A régió arculatát a végtelen rónaság és a kanyargós Tisza határozza meg, amely nemcsak a mezőgazdaságnak, hanem a kikapcsolódásnak is alapja. A vármegye székhelye Szolnok, a 'Tisza fővárosa', amely fontos közlekedési csomópont és kulturális centrum. A terület híres termálvizeiről és fürdőiről, valamint a Tisza-tó nyújtotta aktív turisztikai lehetőségekről. A népművészetben a jász hímzés és a kun hagyományok, a gasztronómiában pedig a tiszai halászlé és a birkapörkölt emelkedik ki.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vármegye nevét a 13. században letelepedett jászokról és kunokról kapta.",
        "Szolnok városa fontos vasúti és vízi közlekedési csomópont a Tisza partján.",
        "Itt található a Tisza-tó egy jelentős része, amely az ország egyik legfontosabb ökoturisztikai célpontja.",
        "A jászberényi Jász Múzeumban őrzik a híres Lehel-kürtöt, a jászok ereklyéjét.",
        "Mezőtúr városa évszázadok óta a magyar fazekasság és kerámiaművészet egyik központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "komarom-esztergom",
    type: "region",
    parent: "HU",
    coords: [18.4222, 47.58],
    name: {"de": "Komárom-Esztergom", "hu": "Komárom-Esztergom", "ro": "Komárom-Esztergom", "en": "Komárom-Esztergom"},
    image: "/geo-images/hungary/komarom-esztergom.webp",
    description: {
      "de": "Das Komitat Komárom-Esztergom ist das flächenmäßig kleinste, aber eines der historisch und wirtschaftlich bedeutendsten Komitate Ungarns. Es liegt im Norden des Landes an der Donau, die hier die natürliche Grenze zur Slowakei bildet. Das administrative Zentrum ist Tatabánya, während Esztergom als ehemalige Hauptstadt und Sitz des ungarischen Primas das geistige und historische Herz der Region darstellt. Die Landschaft wird durch das malerische Donauknie und die Gebirgszüge von Gerecse und Pilis geprägt, die zahlreiche Möglichkeiten für Wanderungen und Naturerlebnisse bieten. Komárom-Esztergom verbindet auf engstem Raum monumentale sakrale Architektur, bedeutende römische Ausgrabungen und eine hochmoderne Industrie.",
      "hu": "Komárom-Esztergom vármegye az ország legkisebb területű, de történelmi és gazdasági szempontból egyik legfontosabb vármegyéje. Az ország északi részén, a Duna mentén fekszik, amely itt természetes határt képez Szlovákia felé. Székhelye Tatabánya, de a régió szellemi és történelmi központja Esztergom, az ország egykori fővárosa és a magyar katolikus egyház székhelye. A tájat a festői Dunakanyar, valamint a Gerecse és a Pilis vonulatai határozzák meg, amelyek számtalan túrázási lehetőséget kínálnak. Komárom-Esztergom vármegyében a monumentális egyházi építészet, a jelentős római kori emlékek és a modern ipari parkok különleges egységet alkotnak.",
      "ro": "Județul Komárom-Esztergom este cel mai mic ca suprafață, dar unul dintre cele mai importante județe din Ungaria din punct de vedere istoric și economic. Este situat în nordul țării, de-a lungul Dunării, care formează aici granița naturală cu Slovacia. Centrul administrativ este Tatabánya, în timp ce Esztergom, fosta capitală și reședința primatului Ungariei, reprezintă inima spirituală și istorică a regiunii. Peisajul este marcat de pitoreasca Cotul Dunării și de lanțurile muntoase Gerecse și Pilis, care oferă numeroase oportunități pentru drumeții și experiențe în natură. Komárom-Esztergom îmbină pe un spațiu restrâns arhitectura sacrală monumentală, săpături romane importante și o industrie ultramodernă.",
      "en": "Komárom-Esztergom County is the smallest by area, yet one of the most historically and economically significant counties in Hungary. It is located in the north of the country along the Danube, which forms the natural border with Slovakia. Its administrative center is Tatabánya, while Esztergom, as the former capital and seat of the Hungarian Primate, represents the spiritual and historical heart of the region. The landscape is characterized by the picturesque Danube Bend and the mountain ranges of Gerecse and Pilis, offering numerous opportunities for hiking and nature experiences. Komárom-Esztergom combines monumental sacral architecture, significant Roman excavations, and state-of-the-art industry within a compact area."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Tatabánya, bekannt für das monumentale Turul-Denkmal.",
        "Esztergom war die erste Hauptstadt Ungarns und Geburtsort des Heiligen Stephan.",
        "Die Basilika von Esztergom ist das größte Kirchengebäude Ungarns.",
        "Die Festung von Komárom ist eines der größten Festungssysteme Mitteleuropas.",
        "Tata ist als die 'Stadt der Gewässer' bekannt und beherbergt eine prächtige Wasserburg.",
        "Die Region beherbergt bedeutende römische Ruinen in der antiken Stadt Brigetio.",
        "Das Gerecse-Gebirge ist berühmt für seinen roten Marmor.",
        "Komárom-Esztergom ist ein führender Standort für die Elektronik- und Automobilindustrie.",
        "Die Maria-Valeria-Brücke verbindet Esztergom mit der slowakischen Stadt Štúrovo.",
        "In Tatabánya befindet sich die Szelim-Höhle, eine bedeutende archäologische Fundstätte."
      ],
      "hu": [
        "A vármegye székhelye Tatabánya, ahol Európa egyik legnagyobb madárszobra, a Turul-emlékmű áll.",
        "Esztergom volt Magyarország első fővárosa és Szent István király születési helye.",
        "Az Esztergomi Bazilika az ország legnagyobb egyházi épülete és az érseki székhely.",
        "A komáromi erődrendszer Közép-Európa egyik legnagyobb katonai létesítménye.",
        "Tata a 'vizek városa', híres az Öreg-tóról és a festői Zsigmond-kori váráról.",
        "A vármegye területén találhatók Brigetio ókori római városának jelentős maradványai.",
        "A Gerecse-hegység híres a vörös mészkőről, amelyet gyakran 'gerecsei márványként' emlegetnek.",
        "Komárom-Esztergom az ország egyik legiparosodottabb vármegyéje.",
        "A Mária Valéria híd köti össze Esztergomot a szlovákiai Párkánnyal.",
        "Tatabányán található a Szelim-barlang, amely fontos őskori leletek lelőhelye."
      ],
      "ro": [
        "Reședința județului este Tatabánya, cunoscută pentru monumentul Turul.",
        "Esztergom a fost prima capitală a Ungariei și locul de naștere al Sfântului Ștefan.",
        "Bazilica din Esztergom este cea mai mare clădire bisericească din Ungaria.",
        "Sistemul de fortificații din Komárom este unul dintre cele mai mari din Europa Centrală.",
        "Tata este cunoscut drept 'orașul apelor' și găzduiește un castel de apă magnific.",
        "Regiunea găzduiește ruine romane importante în orașul antic Brigetio.",
        "Munții Gerecse sunt faimoși pentru marmura lor roșie.",
        "Komárom-Esztergom este un centru de top pentru industria electronică și auto.",
        "Podul Maria Valeria leagă Esztergom de orașul slovac Štúrovo.",
        "În Tatabánya se află peștera Szelim, un sit arheologic important."
      ],
      "en": [
        "The county seat is Tatabánya, home to the monumental Turul monument.",
        "Esztergom was the first capital of Hungary and the birthplace of Saint Stephen.",
        "The Esztergom Basilica is the largest church building in Hungary.",
        "The Komárom fortress system is one of the largest in Central Europe.",
        "Tata is known as the 'City of Waters' and features a stunning water castle.",
        "The region is home to significant Roman ruins in the ancient city of Brigetio.",
        "The Gerecse Mountains are famous for their red limestone (marble).",
        "Komárom-Esztergom is a leading location for the electronics and automotive industries.",
        "The Maria Valeria Bridge connects Esztergom with the Slovak town of Štúrovo.",
        "The Szelim Cave in Tatabánya is a significant prehistoric archaeological site."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Komárom-Esztergom vármegye Magyarország északnyugati részén, a Duna mentén fekszik, és történelmileg az ország egyik legjelentősebb vidéke. Itt található Esztergom, a magyar katolikus egyház központja és az ország egykori fővárosa, ahol az impozáns Bazilika magasodik a város fölé. A vármegye tája rendkívül változatos, hiszen itt találkozik a Gerecse és a Pilis hegység a Dunával, festői szurdokokat és panorámát nyújtva. Komárom városa híres erődrendszeréről, amely a Duna két partján húzódik, míg Tatabánya, a vármegye székhelye, egykori bányászvárosból vált modern ipari központtá. A régió kulturális és természeti kincsei, mint Tata tatai vára és tavai, vonzó célpontot jelentenek minden látogatónak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Esztergom a magyar kereszténység bölcsője, az esztergomi Bazilika az ország legnagyobb temploma.",
        "Komárom városa az UNESCO világörökségi várományos listáján szereplő monumentális erődrendszeréről ismert.",
        "Tata a 'vizek városa', híres az Öreg-tóról és a tó partján álló Zsigmond-kori várról.",
        "Tatabánya felett magasodik a Turul-emlékmű, amely Európa egyik legnagyobb madárszobra.",
        "A Gerecse-hegység kiváló túraútvonalakat és híres vörösmárvány-bányákat rejt."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nograd",
    type: "region",
    parent: "HU",
    coords: [19.8053, 48.0986],
    name: {"de": "Neograd", "hu": "Nógrád", "ro": "Nógrád", "en": "Nógrád"},
    image: "/geo-images/hungary/nograd.webp",
    description: {
      "de": "Das Komitat Nógrád liegt im Norden Ungarns an der Grenze zur Slowakei und ist bekannt als das 'Land der Burgen'. Die Region ist geprägt von einer wildromantischen Hügellandschaft, dichten Wäldern und einer außergewöhnlich reichen Volkskultur. Das administrative Zentrum ist Salgótarján, eine Stadt mit einer bedeutenden Bergbaugeschichte, die malerisch in einem Tal eingebettet ist. Nógrád beherbergt mit Hollókő ein lebendiges Museumsdorf, das als erstes ungarisches Dorf zum UNESCO-Welterbe erklärt wurde und die Traditionen der Paloczen bewahrt. Die Region bietet eine einzigartige Mischung aus unberührter Natur, mittelalterlichen Festungen und authentischem ländlichem Leben, das Besucher in vergangene Zeiten zurückversetzt.",
      "hu": "Nógrád vármegye Magyarország északi részén, a szlovák határ mentén fekszik, és méltán nevezik a 'várak földjének'. A régiót vadregényes dombvidékek, sűrű erdők és rendkívül gazdag népi kultúra jellemzi. Székhelye Salgótarján, a jelentős bányászati múlttal rendelkező város, amely festői völgyben terül el. Nógrád ad otthont Hollókőnek, az élő múzeumfalunak, amely az országban elsőként lett az UNESCO világörökség része, és hűen őrzi a palóc hagyományokat. A vármegye az érintetlen természet, a középkori erődítmények és az autentikus vidéki élet különleges elegyét kínálja, amely visszarepíti a látogatókat a múltba.",
      "ro": "Județul Nógrád este situat în nordul Ungariei, la granița cu Slovacia, și este cunoscut drept 'țara castelelor'. Regiunea este caracterizată de un peisaj deluros sălbatic și romantic, păduri dese și o cultură populară excepțional de bogată. Centrul administrativ este Salgótarján, un oraș cu o istorie minieră semnificativă, așezat pitoresc într-o vale. Nógrád găzduiește Hollókő, un sat-muzeu viu, care a fost primul sat maghiar declarat patrimoniu mondial UNESCO și care păstrează tradițiile palocilor. Județul oferă un amestec unic de natură virgină, fortificații medievale și viață rurală autentică, care îi transpune pe vizitatori în vremuri trecute.",
      "en": "Nógrád County is located in northern Hungary on the border with Slovakia and is known as the 'Land of Castles'. The region is characterized by wild and romantic hilly landscapes, dense forests, and an exceptionally rich folk culture. Its administrative center is Salgótarján, a city with a significant mining history, picturesquely nestled in a valley. Nógrád is home to Hollókő, a living museum village that was the first Hungarian village to be declared a UNESCO World Heritage site, preserving the traditions of the Palóc people. The county offers a unique blend of untouched nature, medieval fortresses, and authentic rural life that transports visitors back in time."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Salgótarján, die kleinste Komitatshauptstadt Ungarns.",
        "Hollókő ist ein UNESCO-Welterbe und bewahrt die traditionelle Paloczen-Architektur.",
        "Die Burg Salgó thront auf einem 625 Meter hohen Basaltkegel.",
        "Die Burg Somoskő liegt direkt an der Grenze und ist berühmt für ihre Basaltsäulen.",
        "Ipolytarnóc beherbergt ein 'Urwelt-Pompeji' mit Millionen Jahre alten Fossilien.",
        "Die Region ist das Zentrum der Paloczen-Volksgruppe mit einzigartigen Dialekten und Trachten.",
        "Balassagyarmat ist als die 'tapferste Stadt' (Civitas Fortissima) bekannt.",
        "Nógrád hat den höchsten Waldanteil aller ungarischen Komitate.",
        "Die Burg von Drégely ist ein bedeutendes Symbol des ungarischen Heldenmutes.",
        "Das Cserhát-Gebirge bietet hervorragende Möglichkeiten für sanften Tourismus und Wandern."
      ],
      "hu": [
        "A vármegye székhelye Salgótarján, az ország legkisebb vármegyeszékhelye.",
        "Hollókő ófaluja UNESCO világörökségi helyszín és az élő palóc kultúra központja.",
        "Salgó vára egy 625 méter magas bazaltkúpon magasodik a táj fölé.",
        "A somoskői vár mellett található a világhírű, hajlott bazaltoszlopokból álló vízesés.",
        "Ipolytarnócon látható az 'ősvilági Pompeji', ahol millió éves ősmaradványokat őriztek meg.",
        "A vármegye a palóc népcsoport központja, egyedülálló nyelvjárással és népviselettel.",
        "Balassagyarmat a 'legbátrabb város' (Civitas Fortissima) címet viseli.",
        "Nógrád vármegye rendelkezik az országban a legnagyobb erdőlefedettséggel.",
        "Drégely vára a magyar önfeláldozás és hősiesség egyik legfontosabb emlékhelye.",
        "A Cserhát lankái kiváló lehetőséget nyújtanak a csendes túrázásra és a kikapcsolódásra."
      ],
      "ro": [
        "Reședința județului este Salgótarján, cea mai mică reședință de județ din Ungaria.",
        "Satul vechi Hollókő este sit UNESCO și centrul culturii vii a palocilor.",
        "Cetatea Salgó tronează pe un con de bazalt înalt de 625 de metri.",
        "Lângă cetatea Somoskő se află faimoasa cascadă de coloane de bazalt curbate.",
        "La Ipolytarnóc se află 'Pompeii-ul lumii antice', cu fosile vechi de milioane de ani.",
        "Regiunea este centrul grupului etnic al palocilor, cu dialecte și costume unice.",
        "Balassagyarmat poartă titlul de 'cel mai curajos oraș' (Civitas Fortissima).",
        "Județul Nógrád are cea mai mare proporție de păduri din Ungaria.",
        "Cetatea Drégely este un simbol important al eroismului și sacrificiului maghiar.",
        "Munții Cserhát oferă oportunități excelente pentru turism lent și drumeții."
      ],
      "en": [
        "The county seat is Salgótarján, the smallest county seat in Hungary.",
        "The old village of Hollókő is a UNESCO World Heritage site and a center of Palóc culture.",
        "Salgó Castle towers over the landscape on a 625-meter-high basalt cone.",
        "Near Somoskő Castle lies the world-famous waterfall of curved basalt columns.",
        "Ipolytarnóc houses an 'ancient Pompeii' with fossils millions of years old.",
        "The county is the center of the Palóc ethnic group, with unique dialects and costumes.",
        "Balassagyarmat is known as the 'Bravest City' (Civitas Fortissima).",
        "Nógrád County has the highest percentage of forest cover in Hungary.",
        "Drégely Castle is a significant symbol of Hungarian heroism and sacrifice.",
        "The Cserhát hills offer excellent opportunities for slow tourism and hiking."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Nógrád vármegye Magyarország legkisebb lakosságszámú vármegyéje, amely az Északi-középhegység vadregényes tájain terül el. A vidéket sűrű erdők, mély völgyek és magasba törő várromok jellemzik, mint például Salgó vagy Somoskő vára. Nógrád a palóc kultúra legfontosabb őrzője, ahol a népszokások, a viselet és a nyelvjárás a mindennapok része. A vármegye ékköve Hollókő ófaluja, amely az UNESCO világörökség része és élő múzeumként mutatja be a hagyományos paraszti életformát. A természet kedvelőit az Ipoly folyó völgye és a Cserhát dombjai várják, míg Salgótarján, a vármegye székhelye, különleges bányászati múzeumával és modern központjával várja az utazókat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található Hollókő, az egyetlen magyar falu, amely szerepel az UNESCO világörökségi listáján.",
        "A vármegye székhelye Salgótarján, amely az ország első és egyetlen földalatti bányamúzeumának ad otthont.",
        "Nógrád vármegye területe az ország egyik legerdősebb vidéke, a terület több mint 40%-át erdő borítja.",
        "A somoskői vár szikláinál látható a világon ritkaságszámba menő bazaltorgona.",
        "Ipolytarnócon található az 'ősvilági Pompeji', amely híres őslénytani leleteiről és megkövesedett fáiról."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pest",
    type: "region",
    parent: "HU",
    coords: [19.0761, 47.6694],
    name: {"de": "Pest", "hu": "Pest", "ro": "Pest", "en": "Pest"},
    image: "/geo-images/hungary/pest.webp",
    description: {
      "de": "Das Komitat Pest umschließt die ungarische Hauptstadt Budapest und ist das bevölkerungsreichste und wirtschaftlich dynamischste Komitat des Landes. Die Region bietet eine außergewöhnliche Vielfalt, die von den malerischen Bergen des Pilis und Börzsöny bis zu den weiten Ebenen der Großen Tiefebene reicht. Das administrative Zentrum befindet sich in Budapest, obwohl die Stadt selbst eine eigenständige Region bildet. Pest ist reich an historischen Schätzen, wie dem königlichen Schloss in Gödöllő und der antiken Stadt Visegrád am Donauknie. Die Region dient als wichtigster Verkehrsknotenpunkt und wirtschaftlicher Motor Ungarns, während sie gleichzeitig zahlreiche Erholungsgebiete und kulturelle Highlights für Bewohner und Touristen bietet.",
      "hu": "Pest vármegye a fővárost, Budapestet öleli körül, és az ország legnépesebb, egyben gazdaságilag legdinamikusabb vármegyéje. A régió rendkívüli változatosságot mutat: a Pilis és a Börzsöny festői hegyvonulataitól kezdve az Alföld rónaságaiig minden megtalálható itt. Bár a vármegye székhelye Budapest, maga a főváros közigazgatásilag külön egységet alkot. Pest vármegye gazdag történelmi emlékekben, itt található például a gödöllői Grassalkovich-kastély és a Dunakanyar ékköve, Visegrád is. A régió az ország legfontosabb közlekedési csomópontja és gazdasági motorja, amely számtalan kirándulóhelyet és kulturális élményt kínál az idelátogatóknak.",
      "ro": "Județul Pest înconjoară capitala ungară Budapesta și este cel mai populat și mai dinamic județ din punct de vedere economic din țară. Regiunea oferă o diversitate excepțională, variind de la munții pitorești Pilis și Börzsöny până la câmpiile vaste ale Marii Câmpii Maghiare. Centrul administrativ se află în Budapesta, deși orașul în sine formează o regiune independentă. Pest este bogat în comori istorice, cum ar fi castelul regal din Gödöllő și orașul antic Visegrád de pe Cotul Dunării. Regiunea servește drept cel mai important nod de transport și motor economic al Ungariei, oferind în același timp numeroase zone de recreere și atracții culturale pentru locuitori și turiști.",
      "en": "Pest County surrounds the Hungarian capital, Budapest, and is the most populous and economically dynamic county in the country. The region offers exceptional diversity, ranging from the picturesque mountains of Pilis and Börzsöny to the vast plains of the Great Hungarian Plain. Its administrative center is located in Budapest, although the city itself forms a separate administrative region. Pest is rich in historical treasures, such as the Royal Palace in Gödöllő and the ancient town of Visegrád on the Danube Bend. The county serves as Hungary's most important transport hub and economic engine, while simultaneously providing numerous recreational areas and cultural highlights for residents and tourists alike."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Budapest, obwohl die Stadt rechtlich nicht zum Komitat gehört.",
        "Das Schloss Grassalkovich in Gödöllő war die bevorzugte Residenz von Kaiserin Sisi.",
        "Visegrád am Donauknie war im Mittelalter ein bedeutender ungarischer Königssitz.",
        "Szentendre ist eine malerische Künstlerstadt mit mediterranem Flair an der Donau.",
        "Vác beherbergt den einzigen Triumphbogen Ungarns und eine barocke Kathedrale.",
        "Die Region ist der wichtigste Standort für Logistik und Industrie in Ungarn.",
        "Das Pilis-Gebirge ist ein beliebtes Wandergebiet mit spiritueller Bedeutung.",
        "In Pest befindet sich der Hungaroring, die Rennstrecke für den Großen Preis von Ungarn.",
        "Das Freilichtmuseum (Skanzen) in Szentendre ist das größte seiner Art in Ungarn.",
        "Die Region hat die höchste Dichte an Pendlern, die täglich nach Budapest reisen."
      ],
      "hu": [
        "A vármegye székhelye Budapest, bár a főváros jogilag nem része a vármegyének.",
        "A gödöllői Grassalkovich-kastély Sisi királyné egyik kedvenc tartózkodási helye volt.",
        "Visegrád a középkorban a magyar királyok egyik legfontosabb székhelye volt.",
        "Szentendre festői művészváros a Duna partján, mediterrán hangulattal.",
        "Vác városában található az ország egyetlen diadalíve és egy lenyűgöző barokk székesegyház.",
        "A vármegye az ország legfontosabb logisztikai és ipari központja.",
        "A Pilis-hegység népszerű túrahelyszín, amelyhez számos legenda és spirituális hit fűződik.",
        "Mogyoródon található a Hungaroring, a Forma-1-es Magyar Nagydíj helyszíne.",
        "A szentendrei Skanzen az ország legnagyobb szabadtéri néprajzi múzeuma.",
        "Pest vármegye rendelkezik az ország legfejlettebb agglomerációs gyűrűjével."
      ],
      "ro": [
        "Reședința județului este Budapesta, deși orașul nu face parte legal din județ.",
        "Castelul Grassalkovich din Gödöllő a fost reședința preferată a împărătesei Sisi.",
        "Visegrád, situat pe Cotul Dunării, a fost un sediu regal maghiar important în Evul Mediu.",
        "Szentendre este un oraș pitoresc al artiștilor, cu un aer mediteranean, pe malul Dunării.",
        "Vác găzduiește singurul arc de triumf din Ungaria și o catedrală barocă.",
        "Regiunea este cea mai importantă locație pentru logistică și industrie din Ungaria.",
        "Munții Pilis sunt o zonă populară de drumeție, cu o semnificație spirituală.",
        "În județul Pest se află Hungaroring, circuitul pentru Marele Premiu al Ungariei.",
        "Muzeul în aer liber (Skanzen) din Szentendre este cel mai mare de acest tip din Ungaria.",
        "Regiunea are cea mai mare densitate de navetiști care călătoresc zilnic către Budapesta."
      ],
      "en": [
        "The county seat is Budapest, although the city is legally not part of the county.",
        "The Grassalkovich Castle in Gödöllő was a favorite residence of Empress Sisi.",
        "Visegrád on the Danube Bend was a major Hungarian royal seat in the Middle Ages.",
        "Szentendre is a picturesque artists' town with a Mediterranean feel on the Danube.",
        "Vác is home to Hungary's only triumphal arch and a stunning Baroque cathedral.",
        "The county is the most important location for logistics and industry in Hungary.",
        "The Pilis Mountains are a popular hiking area with spiritual significance.",
        "Pest County is home to the Hungaroring, the circuit for the Hungarian Grand Prix.",
        "The Open Air Museum (Skanzen) in Szentendre is the largest of its kind in Hungary.",
        "The region has the most developed suburban ring and the highest number of commuters."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Pest vármegye Magyarország központi részén terül el, teljesen körülölelve a fővárost, Budapestet, amellyel szoros gazdasági és kulturális egységet alkot. Ez az ország legnépesebb vármegyéje, amely rendkívül változatos táji és turisztikai adottságokkal rendelkezik. Északon a Dunakanyar festői szakasza Visegráddal és Szentendrével, délebbre a Gödöllői-dombság a királyi kastéllyal, míg délkeleten az Alföld rónasága határozza meg a vidéket. A vármegye számos kirándulóhelyet kínál a Pilisben és a Börzsönyben, valamint kulturális kincseket Vác barokk belvárosában. Pest vármegye az ország dinamikusan fejlődő szíve, ahol a modern ipar és a hagyományőrző települések harmonikusan élnek együtt.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Pest vármegye az ország legnépesebb vármegyéje, lakossága meghaladja az 1,3 millió főt.",
        "Gödöllőn található a Grassalkovich-kastély, amely Sisi (Erzsébet királyné) kedvenc pihenőhelye volt.",
        "Szentendre a művészetek városa, híres galériáiról, templomtornyairól és a Skanzenről.",
        "Visegrád a középkori magyar királyok székhelye volt, híres Fellegváráról és a Salamon-toronyról.",
        "A Dunakanyar az ország egyik legszebb tájegysége, ahol a folyó éles kanyart vesz a hegyek között."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "somogy",
    type: "region",
    parent: "HU",
    coords: [17.7897, 46.3592],
    name: {"de": "Schomodei", "hu": "Somogy", "ro": "Somogy", "en": "Somogy"},
    image: "/geo-images/hungary/somogy.webp",
    description: {
      "de": "Das Komitat Somogy liegt im Südwesten Ungarns und erstreckt sich vom Südufer des Plattensees bis zur kroatischen Grenze an der Drau. Die Region ist geprägt von dichten Wäldern, sanften Hügeln und den beliebtesten Ferienorten des Landes. Das administrative Zentrum ist Kaposvár, eine Stadt mit einer charmanten Atmosphäre und einer bedeutenden kulturellen Tradition. Somogy ist ein Paradies für Naturliebhaber und Wassersportler gleichermaßen, da es sowohl die lebendige 'Riviera' des Balaton als auch die unberührte Wildnis des Zselic-Hügellandes bietet. Die Region ist zudem bekannt für ihre reiche Jagdtradition, ihre erstklassigen Weine aus der Region Süd-Balaton und ihre herzliche ländliche Gastfreundschaft.",
      "hu": "Somogy vármegye Magyarország délnyugati részén fekszik, a Balaton déli partjától egészen a horvát határig, a Dráváig nyúlik. A régiót sűrű erdők, lankás dombvidékek és az ország legnépszerűbb üdülőhelyei jellemzik. Székhelye Kaposvár, a hangulatos, virágos város, amely jelentős kulturális hagyományokkal büszkélkedhet. Somogy igazi paradicsom a természetjárók és a vízi sportok kedvelői számára, hiszen egyszerre kínálja a Balaton pezsgő 'riviéráját' és a Zselic érintetlen vadonját. A vármegye emellett híres vadászati hagyományairól, a Dél-Balatoni borvidék kiváló borairól és a szívélyes somogyi vendéglátásról.",
      "ro": "Județul Somogy este situat în sud-vestul Ungariei și se întinde de la malul sudic al Lacului Balaton până la granița cu Croația, pe râul Drava. Regiunea este caracterizată de păduri dese, dealuri blânde și cele mai populare stațiuni de vacanță din țară. Centrul administrativ este Kaposvár, un oraș cu o atmosferă fermecătoare și o tradiție culturală semnificativă. Somogy este un paradis atât pentru iubitorii de natură, cât și pentru pasionații de sporturi nautice, oferind atât 'Riviera' vibrantă a Balatonului, cât și sălbăticia neatinsă a dealurilor Zselic. Regiunea este, de asemenea, cunoscută pentru tradiția sa bogată în vânătoare, vinurile sale de primă clasă din regiunea Balatonul de Sud și ospitalitatea sa rurală caldă.",
      "en": "Somogy County is located in southwestern Hungary, stretching from the southern shore of Lake Balaton to the Croatian border at the river Drava. The region is characterized by dense forests, rolling hills, and the country's most popular holiday resorts. Its administrative center is Kaposvár, a city with a charming atmosphere and a significant cultural tradition. Somogy is a paradise for nature lovers and water sports enthusiasts alike, offering both the vibrant 'Riviera' of Lake Balaton and the untouched wilderness of the Zselic hills. The county is also famous for its rich hunting traditions, world-class wines from the South Balaton wine region, and warm rural hospitality."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Kaposvár, bekannt als die 'Stadt der Blumen'.",
        "Somogy hat die längste Küstenlinie am Plattensee (Balaton).",
        "Siófok ist die 'Sommerhauptstadt' Ungarns und ein Zentrum des Tourismus.",
        "Der Sternenpark Zselic ist einer der besten Orte in Europa zur Sternenbeobachtung.",
        "Die Abtei von Tihany (gegenüberliegend) und die Fähre von Szántód sind wichtige Knotenpunkte.",
        "Die Region ist berühmt für ihre Wildbestände und erstklassigen Jagdgebiete.",
        "Balatonboglár ist das Zentrum einer bedeutenden Weinregion am Südufer.",
        "In Somogyvár befinden sich die Ruinen einer bedeutenden mittelalterlichen Benediktinerabtei.",
        "Die Drau bildet eine natürliche und unberührte Grenze im Süden der Region.",
        "Das Komitat beherbergt zahlreiche Thermalbäder, wie zum Beispiel in Igal."
      ],
      "hu": [
        "A vármegye székhelye Kaposvár, amelyet gyakran a 'virágok városaként' emlegetnek.",
        "Somogy rendelkezik a leghosszabb partszakasszal a Balaton mentén.",
        "Siófok az ország 'nyári fővárosa' és a balatoni turizmus központja.",
        "A Zselici Csillagpark Európa egyik legkevesebb fényszennyezéssel érintett területe.",
        "Szántód és Tihany között üzemel a Balaton egyetlen kompátkelője.",
        "A vármegye világhírű vadállományáról és kiváló vadászterületeiről ismert.",
        "Balatonboglár a Dél-Balatoni borvidék központja és a boglári szüret otthona.",
        "Somogyváron találhatók a Szent László király által alapított bencés apátság romjai.",
        "A Dráva folyó mentén érintetlen természeti környezet és vízi világ várja a látogatókat.",
        "A vármegye számos kiváló gyógyfürdővel rendelkezik, például Igallban vagy Csokonyavisontán."
      ],
      "ro": [
        "Reședința județului este Kaposvár, cunoscut sub numele de 'orașul florilor'.",
        "Somogy are cea mai lungă linie de coastă la Lacul Balaton.",
        "Siófok este 'capitala de vară' a Ungariei și un centru al turismului.",
        "Parcul de stele Zselic este unul dintre cele mai bune locuri din Europa pentru observarea stelelor.",
        "Între Szántód și Tihany funcționează singurul feribot de pe Lacul Balaton.",
        "Regiunea este faimoasă pentru populațiile sale de vânat și zonele de vânătoare de primă clasă.",
        "Balatonboglár este centrul unei regiuni viticole importante de pe malul sudic.",
        "La Somogyvár se află ruinele unei importante abații benedictine medievale.",
        "Râul Drava formează o graniță naturală și virgină în sudul regiunii.",
        "Județul găzduiește numeroase băi termale, cum ar fi cea din Igal."
      ],
      "en": [
        "The county seat is Kaposvár, known as the 'City of Flowers'.",
        "Somogy has the longest coastline along Lake Balaton.",
        "Siófok is the 'summer capital' of Hungary and a hub for tourism.",
        "The Zselic Starry Sky Park is one of the best places in Europe for stargazing.",
        "The only ferry crossing on Lake Balaton operates between Szántód and Tihany.",
        "The region is world-famous for its wildlife and premium hunting grounds.",
        "Balatonboglár is the center of a significant wine region on the southern shore.",
        "Somogyvár houses the ruins of a major medieval Benedictine abbey founded by King Saint Ladislaus.",
        "The river Drava forms a natural and untouched border in the south of the region.",
        "The county is home to numerous thermal baths, such as the one in Igal."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Somogy vármegye Magyarország délnyugati részén fekszik, és legfontosabb természeti vonzereje a Balaton déli partja, amely sekély vizével a családok kedvelt üdülőhelye. A vármegye tája azonban jóval többnél: északon a somogyi dombság lankái, délen pedig a Dráva folyó menti ártéri erdők alkotják a változatos környezetet. A vármegye székhelye Kaposvár, a virágok városa, amely szecessziós belvárosával és gazdag színházi életével tűnik ki. Somogy híres vadállományáról és sűrű erdőiről is, különösen a belső-somogyi területeken. A régió gasztronómiájában a balatoni halételek és a vadhúsból készült specialitások dominálnak, kulturális emlékei között pedig a somogyvári apátság romjai emelkednek ki.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Somogy vármegyéhez tartozik a Balaton déli partjának legnagyobb része, Siófokkal, a 'nyári fővárossal'.",
        "Itt található Kaposvár, amely híres Rippl-Rónai József festőművész hagyatékáról és múzeumáról.",
        "A vármegye déli határát a Dráva folyó alkotja, amely Európa egyik legtisztább vizű és legvadregényesebb folyója.",
        "Igal és Csokonyavisonta híres gyógyfürdőkkel rendelkezik, amelyek kénes vizükről ismertek.",
        "Kaszó sűrű erdei az ország egyik legfontosabb vadászterületét és egy különleges lombkoronasétányt rejtenek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabolcs-szatmar-bereg",
    type: "region",
    parent: "HU",
    coords: [21.7167, 47.95],
    name: {"de": "Szabolcs-Szatmár-Bereg", "hu": "Szabolcs-Szatmár-Bereg", "ro": "Szabolcs-Szatmár-Bereg", "en": "Szabolcs-Szatmár-Bereg"},
    image: "/geo-images/hungary/szabolcs-szatmar-bereg.webp",
    description: {
      "de": "Das Komitat Szabolcs-Szatmár-Bereg liegt im äußersten Nordosten Ungarns und ist die einzige Region des Landes, die an drei verschiedene Staaten grenzt: die Slowakei, die Ukraine und Rumänien. Die Region ist bekannt für ihre unberührte Natur entlang der Oberen Theiß, ihre ausgedehnten Obstgärten und ihre einzigartigen mittelalterlichen Kirchen mit Holzglockentürmen. Das administrative Zentrum ist Nyíregyháza, eine dynamische Stadt, die für ihren erstklassigen Zoo und das beliebte Heilbad Sóstófürdő berühmt ist. Szabolcs-Szatmár-Bereg bewahrt eine tiefe volkstümliche Tradition und bietet Besuchern eine authentische Atmosphäre, in der Geschichte, Natur und ländliche Gastfreundschaft auf besondere Weise verschmelzen.",
      "hu": "Szabolcs-Szatmár-Bereg vármegye Magyarország legészakkeletibb csücskében fekszik, és az ország egyetlen olyan régiója, amely három állammal – Szlovákiával, Ukrajnával és Romániával – is határos. A vármegye híres a Felső-Tisza vidékének érintetlen természetéről, hatalmas gyümölcsöskertjeiről és egyedülálló középkori templomairól, amelyek fa haranglábaikkal a világörökség részét képezik. Székhelye Nyíregyháza, a dinamikusan fejlődő város, amely világszínvonalú állatparkjáról és a népszerű Sóstógyógyfürdőről ismert. Szabolcs-Szatmár-Bereg mélyen őrzi népi hagyományait, és olyan hiteles légkört kínál, ahol a történelem, a természet és a vidéki vendégszeretet különleges módon fonódik össze.",
      "ro": "Județul Szabolcs-Szatmár-Bereg este situat în extremitatea nord-estică a Ungariei și este singura regiune a țării care se învecinează cu trei state diferite: Slovacia, Ucraina și România. Regiunea este cunoscută pentru natura sa virgină de-a lungul Tisei Superioare, livezile sale întinse de pomi fructiferi și bisericile sale medievale unice, cu clopotnițe din lemn. Centrul administrativ este Nyíregyháza, un oraș dinamic, renumit pentru grădina sa zoologică de clasă mondială și populara stațiune balneară Sóstófürdő. Szabolcs-Szatmár-Bereg păstrează o tradiție populară profundă și oferă vizitatorilor o atmosferă autentică, în care istoria, natura și ospitalitatea rurală se îmbină într-un mod special.",
      "en": "Szabolcs-Szatmár-Bereg County is located in the far northeast of Hungary and is the only region in the country that borders three different states: Slovakia, Ukraine, and Romania. The region is famous for its untouched nature along the Upper Tisza, its extensive fruit orchards, and its unique medieval churches with wooden bell towers. Its administrative center is Nyíregyháza, a dynamic city renowned for its world-class zoo and the popular Sóstófürdő spa. Szabolcs-Szatmár-Bereg preserves deep folk traditions and offers visitors an authentic atmosphere where history, nature, and rural hospitality merge in a unique way."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Nyíregyháza, Heimat eines der besten Zoos in Europa.",
        "Die Region ist der größte Apfelproduzent Ungarns (Szabolcsi alma).",
        "Die mittelalterlichen Kirchen der Region bilden die 'Straße der Kirchen'.",
        "Sóstófürdő ist ein bedeutendes Zentrum für Gesundheitstourismus und Wellness.",
        "Die Region ist berühmt für ihre Obstbrände, insbesondere den Pflaumenschnaps aus Szatmár.",
        "Máriapócs ist einer der wichtigsten Wallfahrtsorte Ungarns.",
        "Die Obere Theiß bietet hervorragende Möglichkeiten für Kanutouren und Ökotourismus.",
        "Vásárosnamény ist als die 'Stadt der Freiheit' an der Theiß bekannt.",
        "Die Region hat eine reiche jüdische Geschichte mit bedeutenden Gedenkstätten.",
        "Das Dorf Tákos beherbergt die berühmte 'barfüßige Kathedrale' mit bemalter Holzdecke."
      ],
      "hu": [
        "A vármegye székhelye Nyíregyháza, ahol Európa egyik legjobb állatparkja található.",
        "A régió Magyarország legnagyobb almatermelő vidéke (szabolcsi alma).",
        "A vármegye középkori templomai alkotják a híres 'Középkori Templomok Útját'.",
        "Sóstógyógyfürdő az egészségturizmus és a kikapcsolódás egyik legfontosabb központja.",
        "A vármegye híres eredetvédett pálinkáiról, mint a szatmári szilvapálinka.",
        "Máriapócs az ország egyik legjelentősebb nemzeti kegyhelye és zarándokhelye.",
        "A Felső-Tisza vidéke kiváló lehetőségeket nyújt a vízi túrázásra és az ökoturizmusra.",
        "Vásárosnamény a Felső-Tisza vidékének egyik legfontosabb turisztikai kapuja.",
        "A vármegye gazdag zsidó vallási örökséggel és emlékhelyekkel rendelkezik.",
        "Tákoson található a híres 'mezítlábas katedrális', amely festett kazettás mennyezetéről ismert."
      ],
      "ro": [
        "Reședința județului este Nyíregyháza, gazda uneia dintre cele mai bune grădini zoologice din Europa.",
        "Regiunea este cel mai mare producător de mere din Ungaria (merele de Szabolcs).",
        "Bisericile medievale din regiune formează 'Drumul Bisericilor Medievale'.",
        "Sóstófürdő este un centru important pentru turismul de sănătate și wellness.",
        "Regiunea este faimoasă pentru pălincile sale, în special pălinca de prune de Szatmár.",
        "Máriapócs este unul dintre cele mai importante locuri de pelerinaj din Ungaria.",
        "Tisa Superioară oferă oportunități excelente pentru excursii cu canoa și ecoturism.",
        "Vásárosnamény este cunoscut drept 'orașul libertății' de pe malul Tisei.",
        "Regiunea are o istorie evreiască bogată, cu situri memoriale importante.",
        "Satul Tákos găzduiește faimoasa 'catedrală desculță' cu tavan din lemn pictat."
      ],
      "en": [
        "The county seat is Nyíregyháza, home to one of the best zoos in Europe.",
        "The region is Hungary's largest apple producer (Szabolcs apples).",
        "The region's medieval churches form the 'Route of Medieval Churches'.",
        "Sóstófürdő is a major center for health tourism and wellness.",
        "The county is famous for its fruit brandies, especially the Szatmár plum pálinka.",
        "Máriapócs is one of Hungary's most important national shrines and pilgrimage sites.",
        "The Upper Tisza offers excellent opportunities for canoeing and ecotourism.",
        "Vásárosnamény is known as a major tourist gateway to the Upper Tisza region.",
        "The region has a rich Jewish heritage with significant memorial sites.",
        "The village of Tákos is home to the famous 'barefoot cathedral' with a painted wooden ceiling."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Szabolcs-Szatmár-Bereg vármegye Magyarország északkeleti csücskében, az ukrán, a román és a szlovák határ találkozásánál fekszik. A tájat a Tisza, a Szamos és a Túr folyók kanyarulatai, valamint a Nyírség homokbuckái határozzák meg. Ez a régió Magyarország egyik leghitelesebb és legtöbb népi emléket őrző vidéke, híres középkori 'mosolygó szentekkel' díszített templomairól és különleges haranglábairól. A vármegye székhelye Nyíregyháza, amely modern állatparkjával és Sóstógyógyfürdővel vonzza a látogatókat. Szabolcs-Szatmár-Bereg az ország 'almáskertje', de híres szatmári szilvapálinkájáról és a beregi hímzésről is, amelyek a térség büszkeségei.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Nyíregyháza állatparkja (Sóstó Zoo) többször is elnyerte Európa legjobb állatkertje címet.",
        "Itt található a Túristvándi vízimalom, amely az ország egyik legszebb ipartörténeti műemléke.",
        "A vármegye híres a szatmári szilváról és a belőle készült lekvárról, valamint a pálinkáról.",
        "Tákos és Csaroda református templomai a középkori magyar építészet és falfestészet remekművei.",
        "Máriapócs nemzeti kegyhely, a könnyező Szűzanya-ikonjáról híres zarándokhely."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tolna",
    type: "region",
    parent: "HU",
    coords: [18.7, 46.35],
    name: {"de": "Tolnau", "hu": "Tolna", "ro": "Tolna", "en": "Tolna"},
    description: {
      "de": "Das Komitat Tolna liegt im südlichen Zentrum Ungarns, am rechten Ufer der Donau, und ist eine Region von stiller Schönheit und reicher Tradition. Die Landschaft ist geprägt von den sanften Hügeln des Tolnaer Hügellandes und den fruchtbaren Ebenen entlang der Donau. Das administrative Zentrum ist Szekszárd, eine Stadt, die weltweit für ihre erstklassigen Rotweine und ihre tiefe literarische Tradition bekannt ist. Tolna beherbergt zudem den Nationalpark Gemenc, das größte zusammenhängende Auwaldgebiet Mitteleuropas, das ein Paradies für Naturfotografen und Jäger darstellt. Die Region bietet eine harmonische Mischung aus exzellenter Weinkultur, unberührter Flusslandschaft und einem reichen Erbe der Donauschwaben.",
      "hu": "Tolna vármegye Magyarország déli-középső részén, a Duna jobb partján fekszik, és a csendes szépség, valamint a gazdag hagyományok vidéke. A tájat a Tolnai-hegyhát lankás dombjai és a Duna menti termékeny síkságok határozzák meg. Székhelye Szekszárd, amely világszerte híres kiváló vörösborairól, különösen a szekszárdi bikavérről, és mély irodalmi gyökereiről. Tolna vármegye ad otthont a Gemenci-erdőnek, amely Közép-Európa legnagyobb összefüggő ártéri erdeje, és igazi paradicsom a természetjárók és a vadászok számára. A régió a kiváló borkultúra, az érintetlen folyóparti táj és a dunai svábok gazdag örökségének harmonikus ötvözetét kínálja.",
      "ro": "Județul Tolna este situat în centrul sudic al Ungariei, pe malul drept al Dunării, și este o regiune de o frumusețe liniștită și tradiții bogate. Peisajul este caracterizat de dealurile blânde ale regiunii deluroase Tolna și de câmpiile fertile de-a lungul Dunării. Centrul administrativ este Szekszárd, un oraș renumit în întreaga lume pentru vinurile sale roșii de primă clasă și tradiția sa literară profundă. Tolna găzduiește, de asemenea, Parcul Național Gemenc, cea mai mare zonă de pădure inundabilă continuă din Europa Centrală, care este un paradis pentru fotografii de natură și vânători. Regiunea oferă un amestec armonios de cultură viticolă excelentă, peisaj fluvial virgin și o moștenire bogată a șvabilor dunăreni.",
      "en": "Tolna County is located in the south-central part of Hungary, on the right bank of the Danube, and is a region of quiet beauty and rich traditions. The landscape is characterized by the rolling hills of the Tolna Uplands and the fertile plains along the Danube. Its administrative center is Szekszárd, a city world-famous for its premium red wines and deep literary roots. Tolna is also home to the Gemenc Forest, Central Europe's largest continuous floodplain forest, which is a paradise for nature photographers and hunters. The county offers a luxurious blend of excellent wine culture, untouched river landscapes, and the rich heritage of the Danube Swabians."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szekszárd, eine der kleinsten Komitatshauptstädte Ungarns.",
        "Die Weinregion Szekszárd ist berühmt für den 'Szekszárdi Bikavér' (Stierblut).",
        "Der Gemenc-Wald ist Teil des Nationalparks Donau-Drau und beherbergt eine einzigartige Fauna.",
        "Paks ist der Standort des einzigen Kernkraftwerks Ungarns.",
        "Die Region hat eine starke donauschwäbische Tradition, insbesondere in Dörfern wie Gyönk.",
        "Szekszárd ist der Geburtsort des berühmten Dichters Mihály Babits.",
        "Die Schmalspurbahn von Gemenc ist eine der beliebtesten Wald-Eisenbahnen des Landes.",
        "Tolna ist bekannt für seine traditionelle Blaudruck-Handwerkskunst.",
        "Die Burg von Simontornya ist ein bedeutendes Renaissance-Denkmal der Region.",
        "Die Donau bietet in dieser Region hervorragende Bedingungen für die Fischerei."
      ],
      "hu": [
        "A vármegye székhelye Szekszárd, az ország egyik legkisebb vármegyeszékhelye.",
        "A szekszárdi borvidék a világhírű szekszárdi bikavér és a kadarka hazája.",
        "A Gemenci-erdő a Duna-Dráva Nemzeti Park része, és egyedülálló gímszarvas-állománnyal rendelkezik.",
        "Pakson található Magyarország egyetlen atomerőműve, amely az ország áramtermelésének felét adja.",
        "A vármegyében jelentős a dunai svábok kulturális öröksége és hagyományőrzése.",
        "Szekszárd a híres költő, Babits Mihály szülővárosa.",
        "A Gemenci Állami Erdei Vasút az ország egyik legnépszerűbb erdei vasútvonala.",
        "Tolna városa híres a hagyományos kékfestő műhelyéről és népművészetéről.",
        "A simontornyai vár a régió egyik legfontosabb reneszánsz műemléke.",
        "A Duna menti holtágak és árterek kiváló horgászparadicsomok."
      ],
      "ro": [
        "Reședința județului este Szekszárd, una dintre cele mai mici reședințe de județ din Ungaria.",
        "Regiunea viticolă Szekszárd este faimoasă pentru vinul 'Szekszárdi Bikavér' (Sânge de Taur).",
        "Pădurea Gemenc face parte din Parcul Național Dunăre-Drava și adăpostește o faună unică.",
        "La Paks se află singura centrală nucleară din Ungaria.",
        "Regiunea are o puternică tradiție a șvabilor dunăreni, în special în sate precum Gyönk.",
        "Szekszárd este locul de naștere al faimosului poet Mihály Babits.",
        "Calea ferată cu ecartament îngust din Gemenc este una dintre cele mai populare din țară.",
        "Orașul Tolna este cunoscut pentru meșteșugul tradițional al vopsitului în albastru.",
        "Cetatea din Simontornya este un monument renascentist important al regiunii.",
        "Dunărea oferă în această regiune condiții excelente pentru pescuit."
      ],
      "en": [
        "The county seat is Szekszárd, one of the smallest county seats in Hungary.",
        "The Szekszárd wine region is famous for 'Szekszárdi Bikavér' (Bull's Blood) and Kadarka.",
        "The Gemenc Forest is part of the Danube-Drava National Park and has a unique red deer population.",
        "Paks is the site of Hungary's only nuclear power plant.",
        "The region has a strong Danube Swabian tradition, especially in villages like Gyönk.",
        "Szekszárd is the birthplace of the famous Hungarian poet Mihály Babits.",
        "The Gemenc Forest Railway is one of the most popular forest railways in the country.",
        "The town of Tolna is famous for its traditional blue-dyeing (kékfestő) workshop.",
        "Simontornya Castle is a significant Renaissance monument in the region.",
        "The Danube floodplains and backwaters offer excellent conditions for fishing."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Tolna vármegye a Dunántúl keleti részén, a Duna mentén fekszik, és szelíd dombságairól, valamint az ország egyik leghíresebb borvidékéről, a szekszárdiról ismert. A tájat északon a Mezőföld, nyugaton a Tolnai-hegyhát, délen pedig a Mecsek nyúlványai határozzák meg. A vármegye székhelye Szekszárd, amely Liszt Ferenc kedvenc városa volt, és ma a vörösbor, különösen a Szekszárdi Bikavér hazája. Tolna büszkélkedhet a Gemenci erdővel, amely Európa legnagyobb összefüggő ártéri erdeje, és gazdag vadállományáról, valamint kisvasútjáról híres. A régió kulturális kincsei között a paksi atomerőmű technikai érdekességei és a népművészeti hagyományok, mint a sárközi hímzés, egyaránt megtalálhatóak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szekszárd a legkisebb lakosságszámú vármegyeszékhely Magyarországon, híres bortermeléséről.",
        "A Gemenci erdő a Duna-Dráva Nemzeti Park része, a világ legnagyobb trófeát adó gímszarvasainak otthona.",
        "Itt található Paks városa, ahol az ország egyetlen atomerőműve működik.",
        "A Sárköz néprajzi tájegysége híres színes népviseletéről, hímzéséről és szövéséről.",
        "Decs községe a Sárköz központja, ahol a népi hagyományok a mai napig elevenen élnek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vas",
    type: "region",
    parent: "HU",
    coords: [16.6217, 47.2306],
    name: {"de": "Eisenburg", "hu": "Vas", "ro": "Vas", "en": "Vas"},
    image: "/geo-images/hungary/vas.webp",
    description: {
      "de": "Das Komitat Vas liegt im äußersten Westen Ungarns an der Grenze zu Österreich und Slowenien und ist eine Region von außergewöhnlicher natürlicher Schönheit und historischer Bedeutung. Die Landschaft ist geprägt von den Ausläufern der Alpen, dichten Wäldern und zahlreichen Thermalquellen. Das administrative Zentrum ist Szombathely, eine der ältesten Städte Ungarns, die auf eine bedeutende römische Vergangenheit als Savaria zurückblickt. Vas ist weltberühmt für seine erstklassigen Heilbäder wie Bükfürdő und Sárvár sowie für seine malerischen historischen Kleinstädte wie Kőszeg. Die Region bietet eine perfekte Kombination aus alpiner Frische, römischem Erbe und moderner Wellness-Kultur, was sie zu einem idealen Ziel für Erholungssuchende und Geschichtsinteressierte macht.",
      "hu": "Vas vármegye Magyarország legnyugatibb részén, az osztrák és a szlovén határ mentén fekszik, és az ország egyik legszebb természeti adottságokkal rendelkező régiója. A tájat az Alpok nyúlványai, sűrű erdők és bőséges termálvízkincs jellemzi. Székhelye Szombathely, az ország egyik legősibb városa, amely jelentős római kori múlttal büszkélkedhet Savaria néven. Vas vármegye világszerte híres kiváló gyógyfürdőiről, mint Bükfürdő és Sárvár, valamint festői történelmi kisvárosairól, mint például Kőszeg. A régió az alpesi frissesség, a római örökség és a modern wellness kultúra tökéletes ötvözetét kínálja, ideális helyszínt biztosítva a pihenésre és a felfedezésre.",
      "ro": "Județul Vas este situat în extremitatea vestică a Ungariei, la granița cu Austria și Slovenia, și este o regiune de o frumusețe naturală excepțională și importanță istorică. Peisajul este marcat de ramificațiile Alpilor, păduri dese și numeroase izvoare termale. Centrul administrativ este Szombathely, unul dintre cele mai vechi orașe din Ungaria, cu un trecut roman semnificativ sub numele de Savaria. Vas este renumit în întreaga lume pentru băile sale curative de primă clasă, cum ar fi Bükfürdő și Sárvár, precum și pentru orășelele sale istorice pitorești, cum ar fi Kőszeg. Județul oferă o combinație perfectă de prospețime alpină, moștenire romană și cultură modernă de wellness, fiind o destinație ideală pentru relaxare și pasionații de istorie.",
      "en": "Vas County is located in the far west of Hungary on the border with Austria and Slovenia, and is a region of exceptional natural beauty and historical significance. The landscape is characterized by the foothills of the Alps, dense forests, and abundant thermal springs. Its administrative center is Szombathely, one of Hungary's oldest cities, boasting a significant Roman past as Savaria. Vas is world-famous for its premium spas such as Bükfürdő and Sárvár, as well as its picturesque historic towns like Kőszeg. The county offers a perfect combination of alpine freshness, Roman heritage, and modern wellness culture, making it an ideal destination for relaxation and history enthusiasts."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szombathely, das antike Savaria der Römerzeit.",
        "Bükfürdő beherbergt eines der größten und bekanntesten Heilbäder Ungarns.",
        "Kőszeg ist bekannt für seine charmante mittelalterliche Altstadt und die Burg Jurisics.",
        "Der Nationalpark Őrség bewahrt die traditionelle bäuerliche Lebensweise und Architektur.",
        "Die Region beherbergt das Ják-Kloster, ein Meisterwerk der romanischen Architektur.",
        "Sárvár ist berühmt für sein Schloss Nádasdy und sein modernes Thermalbad.",
        "Vas hat eine der höchsten Lebensqualitäten und eine starke wirtschaftliche Anbindung an den Westen.",
        "Der Írott-kő (Geschriebenstein) ist der höchste Punkt Transdanubiens.",
        "Die Region ist bekannt für ihre exzellenten Weißweine, insbesondere aus der Gegend um Kőszeg.",
        "Szombathely ist der Geburtsort des Heiligen Martin von Tours."
      ],
      "hu": [
        "A vármegye székhelye Szombathely, az ókori Savaria, amely fontos római központ volt.",
        "Bükfürdő az ország egyik legnagyobb és legnépszerűbb gyógyfürdőhelye.",
        "Kőszeg városa híres épen maradt középkori belvárosáról és a Jurisics-várról.",
        "Az Őrségi Nemzeti Park egyedülálló módon őrzi a hagyományos népi építészetet és életmódot.",
        "Jákon található az ország egyik legjelentősebb román kori emléke, a jáki apátsági templom.",
        "Sárvár legfőbb látnivalója a Nádasdy-vár és a világszínvonalú gyógy- és wellnessfürdő.",
        "Vas vármegye gazdaságilag az egyik legfejlettebb régió, szoros kapcsolatokkal Ausztria felé.",
        "Itt található a Dunántúl legmagasabb pontja, az Írott-kő (882 m).",
        "A vármegye híres a kőszegi és vaskeresztesi bortermelésről.",
        "Szombathely Szent Márton püspök szülőhelye, aki Európa egyik legtiszteltebb szentje."
      ],
      "ro": [
        "Reședința județului este Szombathely, anticul Savaria din epoca romană.",
        "Bükfürdő găzduiește una dintre cele mai mari și mai cunoscute băi curative din Ungaria.",
        "Kőszeg este cunoscut pentru centrul său vechi medieval fermecător și cetatea Jurisics.",
        "Parcul Național Őrség păstrează modul de viață și arhitectura țărănească tradițională.",
        "Regiunea găzduiește Abația din Ják, o capodoperă a arhitecturii romanice.",
        "Sárvár este faimos pentru castelul Nádasdy și băile sale termale moderne.",
        "Județul Vas are una dintre cele mai ridicate calități ale vieții din Ungaria.",
        "Vârful Írott-kő (Geschriebenstein) este cel mai înalt punct din Transdanubia.",
        "Regiunea este cunoscută pentru vinurile sale albe excelente, în special din zona Kőszeg.",
        "Szombathely este locul de naștere al faimosului Sfânt Martin din Tours."
      ],
      "en": [
        "The county seat is Szombathely, the ancient Savaria of the Roman era.",
        "Bükfürdő is home to one of Hungary's largest and most famous medicinal baths.",
        "Kőszeg is known for its charming medieval old town and the Jurisics Castle.",
        "The Őrség National Park preserves traditional peasant lifestyle and architecture.",
        "The region is home to the Ják Abbey, a masterpiece of Romanesque architecture.",
        "Sárvár is famous for its Nádasdy Castle and its modern thermal bath.",
        "Vas County has one of the highest qualities of life and strong economic ties to the West.",
        "Írott-kő (Geschriebenstein) is the highest point in Transdanubia.",
        "The region is known for its excellent white wines, particularly from the Kőszeg area.",
        "Szombathely is the birthplace of Saint Martin of Tours."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Vas vármegye Magyarország legnyugatibb részén, az osztrák határ mentén terül el, és az Alpokalja festői dombvidékeiről, valamint történelmi városairól ismert. A vármegye székhelye Szombathely, amelyet a rómaiak alapítottak Savaria néven, és büszkélkedhet az ország egyik leggazdagabb antik emlékanyagával. Északon Kőszeg városa varázsolja el a látogatókat középkori hangulatával és várával, míg délebbre az Őrség néprajzi tájegysége őrzi az ősi magyar építészetet és életmódot. Vas vármegye rendkívül gazdag gyógyvizekben is, olyan világhírű fürdőkkel, mint Bükfürdő vagy Sárvár. A természet kedvelőit az Írott-kő környéki erdők és a kanyargós Rába folyó várja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szombathely (Savaria) az ország legrégebbi, rómaiak által alapított városa.",
        "Itt található Kőszeg, amely az 1532-es török ostrom elleni hősies helytállásáról híres.",
        "Az Őrségi Nemzeti Park az ősi határőrvidék hagyományait és különleges 'szeres' településszerkezetét őrzi.",
        "Bükfürdő Magyarország egyik legjelentősebb gyógyfürdője, vize különösen magas ásványi anyag tartalmú.",
        "A vármegye legmagasabb pontja az Írott-kő (882 m), amely egyben a Dunántúl legmagasabb csúcsa is."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem",
    type: "region",
    parent: "HU",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "Veszprém", "ro": "Veszprém", "en": "Veszprém"},
    image: "/geo-images/hungary/veszprem.webp",
    description: {
      "de": "Das Komitat Veszprém liegt im Herzen Transdanubiens und umfasst das Nordufer des Plattensees sowie das malerische Bakony-Gebirge. Die Region ist bekannt für ihre außergewöhnliche geografische Vielfalt, die von vulkanischen Hügeln bis zu tiefen Wäldern und dem glitzernden Wasser des Balaton reicht. Das administrative Zentrum ist Veszprém, die 'Stadt der Königinnen', die auf fünf Hügeln erbaut wurde und eine reiche mittelalterliche Geschichte besitzt. Veszprém ist weltberühmt für seine Weinregionen, insbesondere das Balaton-Oberland und Badacsony, sowie für seine kulturellen Schätze wie die Abtei von Tihany. Die Region bietet eine einzigartige Mischung aus historischer Eleganz, natürlicher Schönheit und erstklassigen Freizeitmöglichkeiten, was sie zu einem der beliebtesten Reiseziele Ungarns macht.",
      "hu": "Veszprém vármegye a Dunántúl szívében terül el, magában foglalva a Balaton északi partját és a festői Bakony-hegységet. A régió rendkívüli földrajzi változatosságáról ismert, a vulkanikus tanúhegyektől a sűrű erdőkön át a Balaton csillogó víztükréig minden megtalálható itt. Székhelye Veszprém, a 'királynék városa', amely öt dombra épült, és gazdag középkori múlttal rendelkezik. Veszprém vármegye világszerte híres borvidékeiről, különösen a Balaton-felvidékről és Badacsonyról, valamint olyan kulturális kincseiről, mint a Tihanyi Apátság. A vármegye a történelmi elegancia, a természeti szépség és a minőségi kikapcsolódás egyedülálló ötvözetét kínálja, így az ország egyik legnépszerűbb turisztikai célpontja.",
      "ro": "Județul Veszprém este situat în inima Transdanubiei și cuprinde malul nordic al Lacului Balaton și munții pitorești Bakony. Regiunea este cunoscută pentru diversitatea sa geografică excepțională, variind de la dealuri vulcanice la păduri dese și apele strălucitoare ale Balatonului. Centrul administrativ este Veszprém, 'orașul reginelor', construit pe cinci dealuri și având o istorie medievală bogată. Veszprém este renumit în întreaga lume pentru regiunile sale viticole, în special zona deluroasă a Balatonului și Badacsony, precum și pentru comorile sale culturale, cum ar fi Abația din Tihany. Județul oferă un amestec unic de eleganță istorică, frumusețe naturală și oportunități de recreere de primă clasă, fiind una dintre cele mai populare destinații turistice din Ungaria.",
      "en": "Veszprém County is located in the heart of Transdanubia, encompassing the northern shore of Lake Balaton and the picturesque Bakony Mountains. The region is known for its exceptional geographical diversity, ranging from volcanic hills to dense forests and the sparkling waters of Lake Balaton. Its administrative center is Veszprém, the 'City of Queens', built on five hills and possessing a rich medieval history. Veszprém is world-famous for its wine regions, particularly the Balaton Uplands and Badacsony, as well as for its cultural treasures like the Tihany Abbey. The county offers a unique blend of historical elegance, natural beauty, and high-quality recreational opportunities, making it one of Hungary's most popular tourist destinations."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Veszprém, eine der Kulturhauptstädte Europas 2023.",
        "Die Abtei von Tihany beherbergt die Gründungsurkunde mit den ältesten ungarischen Schriftfragmenten.",
        "Badacsony ist berühmt für seine Basaltberge und den Wein 'Grauer Mönch' (Szürkebarát).",
        "Der Nationalpark Balaton-Oberland schützt die einzigartige vulkanische Landschaft.",
        "Herend ist weltweit bekannt für seine handbemalte Luxusporzellan-Manufaktur.",
        "Das Bakony-Gebirge war einst ein berüchtigtes Versteck für ungarische Outlaws (Betyárok).",
        "Balatonfüred ist der älteste Kurort am Plattensee und bekannt für seine kohlensäurehaltigen Quellen.",
        "Die Burg von Sümeg ist eine der am besten erhaltenen mittelalterlichen Festungen des Landes.",
        "Veszprém war traditionell der ort, an dem die ungarischen Königinnen gekrönt wurden.",
        "Der Plattensee bietet in dieser Region hervorragende Bedingungen für den Segelsport."
      ],
      "hu": [
        "A vármegye székhelye Veszprém, amely 2023-ban Európa Kulturális Fővárosa volt.",
        "A Tihanyi Apátság altemplomában található az egyetlen épen maradt magyar királysír (I. András).",
        "Badacsony híres bazaltorgonáiról és az itt termelt szürkebarát borról.",
        "A Balaton-felvidéki Nemzeti Park óvja a régió egyedülálló vulkanikus tájegységeit.",
        "Herend világhírű a kézzel festett luxusporcelán-manufaktúrájáról.",
        "A Bakony hegység egykor a híres bakonyi betyárok rejtekhelye volt.",
        "Balatonfüred a Balaton legrégebbi gyógyüdülőhelye és a vitorlázás központja.",
        "A sümegi vár az ország egyik leglátványosabb és legépebben maradt középkori erődje.",
        "Veszprém hagyományosan a magyar királynék koronázóvárosa volt.",
        "A vármegye területén található a Balaton legmélyebb pontja, a Tihanyi-szorosnál."
      ],
      "ro": [
        "Reședința județului este Veszprém, una dintre Capitalele Europene ale Culturii în 2023.",
        "Abația din Tihany adăpostește actul de ctitorire cu cele mai vechi fragmente scrise în limba maghiară.",
        "Badacsony este faimos pentru munții săi de bazalt și vinul 'Szürkebarát' (Călugărul Gri).",
        "Parcul Național Balaton-felvidék protejează peisajul vulcanic unic al regiunii.",
        "Herend este cunoscut în întreaga lume pentru manufactura sa de porțelan de lux pictat manual.",
        "Munții Bakony au fost odinioară ascunzătoarea faimoșilor haiduci maghiari (Betyárok).",
        "Balatonfüred este cea mai veche stațiune balneară de la Lacul Balaton și centrul navigației.",
        "Cetatea din Sümeg este una dintre cele mai bine conservate fortificații medievale din țară.",
        "Veszprém a fost în mod tradițional orașul unde erau încoronate reginele Ungariei.",
        "Lacul Balaton oferă în această regiune condiții excelente pentru sporturile nautice."
      ],
      "en": [
        "The county seat is Veszprém, which served as a European Capital of Culture in 2023.",
        "The Tihany Abbey houses the founding charter containing the oldest written Hungarian fragments.",
        "Badacsony is famous for its basalt columns and the 'Szürkebarát' (Grey Monk) wine.",
        "The Balaton Uplands National Park protects the region's unique volcanic landscapes.",
        "Herend is world-renowned for its hand-painted luxury porcelain manufactory.",
        "The Bakony Mountains were once a notorious hideout for Hungarian outlaws (Betyárok).",
        "Balatonfüred is the oldest spa resort on Lake Balaton and a center for sailing.",
        "Sümeg Castle is one of the country's most spectacular and best-preserved medieval fortresses.",
        "Veszprém was traditionally the city where Hungarian queens were crowned.",
        "Lake Balaton offers excellent conditions for sailing and water sports in this region."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Veszprém vármegye a Dunántúl központi részén fekszik, és Magyarország egyik legváltozatosabb turisztikai régiója, magában foglalva a Bakony-hegységet és a Balaton északi partját. A vármegye székhelye Veszprém, a 'királynék városa', amely nevét arról kapta, hogy évszázadokon át a veszprémi püspök koronázta meg a magyar királynékat. A tájat a Bakony sűrű erdői, vadregényes szurdokai és a Balaton-felvidék vulkanikus tanúhegyei, mint a Badacsony, teszik egyedülállóvá. Itt található a Tihanyi-félsziget is, az ország első tájvédelmi körzete az ezeréves apátsággal. A vármegye híres bortermeléséről, herendi porcelánjáról és gazdag történelmi emlékeiről, amelyek várakban (Sümeg, Nagyvázsony) és kolostorromokban öltenek testet.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Veszprém városa 2023-ban Európa Kulturális Fővárosa volt, elismerve gazdag művészeti életét.",
        "Itt található a Balaton-felvidéki Nemzeti Park a világhírű tihanyi bencés apátsággal.",
        "Herend városa a világszerte ismert, kézzel festett porcelán gyártásának központja.",
        "A Badacsony-hegy és környéke az ország egyik legfontosabb fehérbortermelő vidéke.",
        "A Bakony-hegységben található Csesznek vára és a híres Cuha-völgyi vasútvonal."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zala",
    type: "region",
    parent: "HU",
    coords: [16.8439, 46.8417],
    name: {"de": "Zala", "hu": "Zala", "ro": "Zala", "en": "Zala"},
    image: "/geo-images/hungary/zala.webp",
    description: {
      "de": "Das Komitat Zala liegt im Südwesten Ungarns an der Grenze zu Österreich, Slowenien und Kroatien und ist eine Region von außergewöhnlicher natürlicher Vielfalt. Die Landschaft ist geprägt von den sanften Hügeln des Zalaer Hügellandes, dichten Wäldern und dem westlichen Ende des Plattensees. Das administrative Zentrum ist Zalaegerszeg, eine Stadt mit einer entspannten Atmosphäre und bedeutenden kulturellen Einrichtungen wie dem Göcsej-Dorfmuseum. Zala ist weltberühmt für den Thermalsee von Hévíz, den größten biologisch aktiven natürlichen Thermalsee der Welt, sowie für den beliebten Ferienort Keszthely mit dem prächtigen Schloss Festetics. Die Region bietet eine perfekte Mischung aus thermaler Heilkraft, historischer Pracht und unberührter Natur, was sie zu einem erstklassigen Ziel für Wellness und Kultur macht.",
      "hu": "Zala vármegye Magyarország délnyugati részén, az osztrák, szlovén és horvát határ mentén fekszik, és az ország egyik legváltozatosabb természeti adottságú régiója. A tájat a Zalai-dombság lankái, sűrű erdők és a Balaton nyugati medencéje határozzák meg. Székhelye Zalaegerszeg, a hangulatos város, amely olyan jelentős kulturális intézményeknek ad otthont, mint a Göcseji Falumúzeum. Zala vármegye világszerte híres a Hévízi-tóról, amely a világ legnagyobb biológiailag aktív természetes termáltava, valamint Keszthelyről és a lenyűgöző Festetics-kastélyról. A vármegye a termálvizes gyógyulás, a történelmi pompa és az érintetlen természet tökéletes ötvözetét kínálja a látogatóknak.",
      "ro": "Județul Zala este situat în sud-vestul Ungariei, la granița cu Austria, Slovenia și Croația, și este o regiune cu o diversitate naturală excepțională. Peisajul este marcat de dealurile blânde ale regiunii deluroase Zala, păduri dese și extremitatea vestică a Lacului Balaton. Centrul administrativ este Zalaegerszeg, un oraș cu o atmosferă relaxată și instituții culturale importante, cum ar fi Muzeul Satului Göcsej. Zala este renumit în întreaga lume pentru lacul termal din Hévíz, cel mai mare lac termal natural activ biologic din lume, precum și pentru stațiunea populară Keszthely, cu magnificul castel Festetics. Județul oferă un amestec unic de putere curativă termală, splendoare istorică și natură virgină, fiind o destinație de top pentru wellness și cultură.",
      "en": "Zala County is located in southwestern Hungary on the border with Austria, Slovenia, and Croatia, and is a region of exceptional natural diversity. The landscape is characterized by the rolling hills of the Zala Uplands, dense forests, and the western end of Lake Balaton. Its administrative center is Zalaegerszeg, a city with a relaxed atmosphere and significant cultural institutions such as the Göcsej Village Museum. Zala is world-famous for the Hévíz thermal lake, the world's largest biologically active natural thermal lake, as well as for the popular resort town of Keszthely with the magnificent Festetics Palace. The county offers a perfect blend of thermal healing power, historical splendor, and untouched nature, making it an ideal destination for wellness and culture."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Zalaegerszeg, bekannt für sein Freilichtmuseum für Volksarchitektur.",
        "Hévíz beherbergt den größten natürlichen Thermalsee der Welt.",
        "Das Schloss Festetics in Keszthely ist eines der bedeutendsten Barockschlösser Ungarns.",
        "Die Region ist bekannt für ihre Öl- und Erdgasvorkommen, die die ungarische Industrie prägten.",
        "Zalakaros ist einer der beliebtesten Kurorte Ungarns mit einem modernen Erlebnisbad.",
        "Der Nationalpark Balaton-Oberland umfasst auch den Kleinen Balaton (Kis-Balaton), ein Vogelparadies.",
        "Zala hat eine reiche Tradition in der Holzverarbeitung und Handwerkskunst.",
        "Die Region ist berühmt für ihre Gastronomie, insbesondere für Gerichte mit Kürbiskernöl.",
        "Keszthely ist die älteste Stadt am Ufer des Plattensees.",
        "Das Zalaer Hügelland bietet hervorragende Bedingungen für den Weinbau und Wanderungen."
      ],
      "hu": [
        "A vármegye székhelye Zalaegerszeg, ahol az ország első szabadtéri néprajzi múzeuma található.",
        "Hévízen található a világ legnagyobb biológiailag aktív természetes termáltava.",
        "A keszthelyi Festetics-kastély az ország egyik legjelentősebb és legszebb barokk kastélya.",
        "A vármegye területén indult el a magyarországi kőolaj- és földgázkitermelés.",
        "Zalakaros az ország egyik legnépszerűbb gyógy- és élményfürdő városa.",
        "A Kis-Balaton egyedülálló vizes élőhely és madárrezervátum, a nemzeti park része.",
        "Zala vármegye híres a göcseji és hetési népi hagyományairól és építészetéről.",
        "A régió gasztronómiájának különlegessége a tökmagolaj és a dödölle.",
        "Keszthely a Balaton-part legrégebbi városa és fontos kulturális központja.",
        "A Zalai-dombság kiváló túraútvonalakat és bortermelő vidékeket rejt."
      ],
      "ro": [
        "Reședința județului este Zalaegerszeg, cunoscut pentru muzeul său în aer liber de arhitectură populară.",
        "Hévíz găzduiește cel mai mare lac termal natural din lume.",
        "Castelul Festetics din Keszthely este unul dintre cele mai importante castele baroce din Ungaria.",
        "Regiunea este cunoscută pentru zăcămintele sale de petrol și gaze naturale, care au modelat industria maghiară.",
        "Zalakaros este una dintre cele mai populare stațiuni balneare din Ungaria, cu un parc acvatic modern.",
        "Parcul Național Balaton-felvidék include și Balatonul Mic (Kis-Balaton), un paradis al păsărilor.",
        "Zala are o tradiție bogată în prelucrarea lemnului și meșteșuguri.",
        "Regiunea este faimoasă pentru gastronomia sa, în special pentru preparatele cu ulei de semințe de dovleac.",
        "Keszthely este cel mai vechi oraș de pe malul Lacului Balaton.",
        "Dealurile Zala oferă condiții excelente pentru viticultură și drumeții."
      ],
      "en": [
        "The county seat is Zalaegerszeg, home to Hungary's first open-air ethnographical museum.",
        "Hévíz is home to the world's largest biologically active natural thermal lake.",
        "The Festetics Palace in Keszthely is one of Hungary's most significant and beautiful Baroque palaces.",
        "The region is the birthplace of the Hungarian oil and gas industry.",
        "Zalakaros is one of Hungary's most popular spa towns with a modern adventure bath.",
        "The Balaton Uplands National Park includes the Little Balaton (Kis-Balaton), a unique wetland and bird sanctuary.",
        "Zala County is famous for its Göcsej and Hetés folk traditions and architecture.",
        "The region's gastronomy is noted for its use of pumpkin seed oil and traditional dishes like 'dödölle'.",
        "Keszthely is the oldest city on the shores of Lake Balaton.",
        "The Zala hills offer excellent opportunities for hiking and wine production."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Zala vármegye Magyarország délnyugati sarkában fekszik, és lankás dombvidékéről, sűrű erdőiről és gazdag kőolaj- és földgázkincseiről ismert. A vármegye székhelye Zalaegerszeg, amely az ország első szabadtéri néprajzi múzeumával és modern városképével büszkélkedhet. Zala vármegyéhez tartozik a Balaton nyugati csücske Keszthellyel és a monumentális Festetics-kastéllyal, valamint a világhírű Hévízi-tó, amely Európa legnagyobb természetes termáltava. A régió híres népi hagyományairól, különösen a Göcsej és a Hetés tájegységek jellegzetes építészetéről és gasztronómiájáról, mint a dödölle vagy a tökmagolaj. A táj nyugalma és a gyógyfürdők sokasága (Zalakaros, Lenti) Somogy mellett a pihenni vágyók egyik legfőbb célpontja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Hévízi-tó, a világ legnagyobb biológiailag aktív természetes termáltava.",
        "A keszthelyi Festetics-kastély az ország egyik legjelentősebb barokk palotaegyüttese.",
        "Zala vármegye a magyar kőolaj- és földgázkitermelés történelmi bölcsője.",
        "A Göcseji Falumúzeum volt az ország első szabadtéri néprajzi gyűjteménye.",
        "Zalakaros az ország egyik legnépszerűbb gyógy- és élményfürdő városa."
      ],
      "ro": [],
      "en": []
    },
  },
];

export const hungaryCities: POI[] = [
  {
    id: "budapest-city",
    type: "city",
    parent: "budapest",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    image: "/geo-images/hungary/budapest-city.webp",
    description: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine der beeindruckendsten Metropolen Europas und wird oft als 'Perle der Donau' bezeichnet. Die Stadt entstand 1873 durch die Zusammenlegung von Buda, Pest und Óbuda und bietet eine einzigartige Mischung aus Geschichte, Kultur und moderner Lebensart. Besucher können das majestätische Parlamentsgebäude, die historische Fischerbastei und zahlreiche Thermalbäder genießen. Die Donauufer, das Burgviertel und die Andrássy-Straße gehören zum UNESCO-Welterbe.",
      "hu": "Budapest, Magyarország fővárosa, Európa egyik leglenyűgözőbb metropolisza, amelyet gyakran a 'Duna gyöngyeként' emlegetnek. A város 1873-ban jött létre Buda, Pest és Óbuda egyesítésével, és a történelem, a kultúra és a modern életstílus egyedülálló keverékét kínálja. A látogatók megcsodálhatják a fenséges Országházat, a történelmi Halászbástyát és számos világhírű termálfürdőt. A Duna-part, a Budai Várnegyed és az Andrássy út az UNESCO világörökség részét képezi.",
      "ro": "Budapesta, capitala Ungariei, este una dintre cele mai impresionante metropole din Europa, fiind adesea numită 'Perla Dunării'. Orașul a fost format în 1873 prin unirea localităților Buda, Pesta și Óbuda, oferind un amestec unic de istorie, cultură și stil de viață modern. Vizitatorii se pot bucura de clădirea maiestuoasă a Parlamentului, de istoricul Bastion al Pescarilor și de numeroase băi termale. Malurile Dunării, cartierul Castelului și Bulevardul Andrássy fac parte din patrimoniul mondial UNESCO.",
      "en": "Budapest, the capital of Hungary, is one of Europe's most stunning metropolises, often referred to as the 'Pearl of the Danube.' The city was formed in 1873 by the unification of Buda, Pest, and Óbuda, offering a unique blend of history, culture, and modern lifestyle. Visitors can enjoy the majestic Parliament Building, the historic Fisherman's Bastion, and numerous world-famous thermal baths. The banks of the Danube, the Buda Castle District, and Andrássy Avenue are all part of the UNESCO World Heritage list."
    },
    facts: {
      "de": [
        "Hauptstadt und größte Stadt Ungarns mit über 1,7 Millionen Einwohnern.",
        "Berühmt für das Parlamentsgebäude, das drittgrößte der Welt.",
        "Beherbergt die älteste U-Bahn-Linie Kontinentaleuropas (M1).",
        "Bekannt als 'Stadt der Bäder' mit über 100 Thermalquellen.",
        "Die Kettenbrücke war die erste dauerhafte Verbindung über die Donau.",
        "Das Burgviertel bietet einen Panoramablick auf die gesamte Stadt.",
        "Budapest ist ein wichtiges Zentrum für Bildung, Wirtschaft und Kunst.",
        "Die Große Synagoge in der Dohány-Straße ist die größte in Europa."
      ],
      "hu": [
        "Magyarország fővárosa és legnagyobb városa, több mint 1,7 millió lakossal.",
        "Híres az Országházról, amely a világ harmadik legnagyobb parlamenti épülete.",
        "Itt található a kontinens legidősebb földalatti vasútja (M1).",
        "A 'fürdők városa' néven ismert, több mint 100 termálforrással.",
        "A Lánchíd volt az első állandó híd a Duna felett.",
        "A Várnegyedből lenyűgöző panoráma nyílik az egész városra.",
        "Fontos oktatási, gazdasági és művészeti központ Közép-Európában.",
        "A Dohány utcai zsinagóga Európa legnagyobb zsidó temploma."
      ],
      "ro": [
        "Capitala și cel mai mare oraș al Ungariei, cu peste 1,7 milioane de locuitori.",
        "Faimoasă pentru clădirea Parlamentului, a treia ca mărime din lume.",
        "Găzduiește cea mai veche linie de metrou din Europa continentală (M1).",
        "Cunoscut ca 'orașul băilor', având peste 100 de izvoare termale.",
        "Podul cu Lanțuri a fost prima legătură permanentă peste Dunăre.",
        "Cartierul Castelului oferă o vedere panoramică asupra întregului oraș.",
        "Un centru important pentru educație, economie și artă în Europa Centrală.",
        "Sinagoga de pe strada Dohány este cea mai mare din Europa."
      ],
      "en": [
        "Capital and largest city of Hungary with over 1.7 million inhabitants.",
        "Famous for the Parliament Building, the third largest in the world.",
        "Home to the oldest subway line in continental Europe (M1).",
        "Known as the 'City of Baths' with over 100 thermal springs.",
        "The Chain Bridge was the first permanent bridge across the Danube.",
        "The Castle District offers a panoramic view of the entire city.",
        "An important center for education, economy, and art in Central Europe.",
        "The Dohány Street Synagogue is the largest synagogue in Europe."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Budapest, die prachtvolle Hauptstadt Ungarns, wird durch die majestätische Donau in das hügelige Buda und das lebendige Pest geteilt. Die Stadt entstand 1873 durch die Vereinigung von Buda, Pest und Óbuda und blickt auf eine jahrtausendealte Geschichte zurück, die von den Römern bis zur Zeit der österreichisch-ungarischen Monarchie reicht. Besucher sind fasziniert von der architektonischen Vielfalt, die von der gotischen Matthiaskirche über das neugotische Parlamentsgebäude bis hin zu prachtvollen Jugendstilbauten reicht. Budapest ist zudem die einzige Hauptstadt der Welt, die über eine Vielzahl von Thermalquellen verfügt, was sie zu einem Zentrum der europäischen Bäderkultur macht. Die Donauufer, das Burgviertel und die Andrássy-Straße gehören zum UNESCO-Welterbe und zeugen von der glanzvollen Vergangenheit der Metropole.",
      "hu": "Budapest, Magyarország fővárosa és legnépesebb városa, a Duna két partján fekvő metropolisz, amely történelmi, kulturális és gazdasági szempontból is az ország szíve. A város 1873-ban jött létre Buda, Pest és Óbuda egyesítésével, és azóta Közép-Európa egyik legjelentősebb központjává nőtte ki magát. Budapest világörökségi helyszíneivel, mint a Budai Várnegyed, a Duna-parti panoráma és az Andrássy út, a világ minden tájáról vonzza a turistákat. Az 'élő történelem' városa, ahol a római kori romok, a török fürdők, a gótikus és barokk templomok, valamint a szecessziós paloták és a modern építészet különleges elegye alkot egyedülálló városképet. Budapest emellett a világ egyetlen fürdőfővárosa, ahol több tucat termálforrás táplálja a történelmi gyógyfürdőket.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Budapest Magyarország politikai, gazdasági, közlekedési és kulturális központja.",
        "A Duna-part, a Budai Várnegyed és az Andrássy út az UNESCO Világörökség része.",
        "A világ egyetlen fővárosa, amely alatt barlangok és több mint 120 termálforrás található.",
        "Itt működik a kontinens első földalatti vasútja (M1), amelyet 1896-ban adtak át.",
        "A Dohány utcai zsinagóga Európa legnagyobb, a világ második legnagyobb zsinagógája."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budai-var",
    type: "landmark",
    parent: "budapest",
    coords: [19.0396, 47.4962],
    name: {"de": "Budaer Burg", "hu": "Budai Vár", "ro": "Castelul Buda", "en": "Buda Castle"},
    description: {
      "de": "Die Budaer Burg ist ein historisches Schloss und ein monumentaler Palastkomplex der ungarischen Könige in Budapest, der majestätisch über der Donau thront. Das gesamte Burgviertel gehört zum UNESCO-Welterbe und ist eines der bedeutendsten kulturellen und historischen Zentren Ungarns. Die Anlage umfasst prächtige Gebäude wie den Königspalast, die Matthiaskirche und die Fischerbastei, die alle Zeugen der wechselvollen Geschichte des Landes sind. Besucher können durch die mittelalterlichen Gassen schlendern, beeindruckende Museen besuchen und einen der schönsten Panoramablicke auf die Stadt Pest genießen. Die Budaer Burg verbindet gotische, Renaissance- und Barockarchitektur zu einem einzigartigen Ensemble, das jährlich Millionen von Touristen anzieht.",
      "hu": "A Budai Vár a magyar királyok történelmi kastély- és palotaegyüttese Budapesten, amely fenségesen magasodik a Duna fölé a Várhegyen. Az egész Várnegyed az UNESCO világörökség része, és Magyarország egyik legfontosabb kulturális és történelmi központja. Az együttes olyan lenyűgöző épületeket foglal magában, mint a Királyi Palota, a Mátyás-templom és a Halászbástya, amelyek mind az ország viharos történelmének tanúi. A látogatók középkori utcákon sétálhatnak, rangos múzeumokat fedezhetnek fel, és élvezhetik az egyik legszebb panorámát a város pesti oldalára. A Budai Vár a gótikus, reneszánsz és barokk építészet különleges elegye, amely évente több millió turistát vonz a világ minden tájáról.",
      "ro": "Castelul Buda este un castel istoric și un complex monumental de palate al regilor maghiari din Budapesta, care tronează maiestuos deasupra Dunării. Întregul cartier al Castelului face parte din patrimoniul mondial UNESCO și este unul dintre cele mai importante centre culturale și istorice ale Ungariei. Complexul cuprinde clădiri splendide precum Palatul Regal, Biserica Mátyás și Bastionul Pescarilor, toate fiind martore ale istoriei zbuciumate a țării. Vizitatorii se pot plimba pe străzile medievale, pot vizita muzee impresionante și se pot bucura de una dintre cele mai frumoase vederi panoramice asupra orașului Pesta. Castelul Buda îmbină arhitectura gotică, renascentistă și barocă într-un ansamblu unic, care atrage anual milioane de turiști.",
      "en": "Buda Castle is a historical castle and a monumental palace complex of the Hungarian kings in Budapest, majestically overlooking the Danube. The entire Castle District is a UNESCO World Heritage site and is one of Hungary's most significant cultural and historical centers. The complex includes magnificent buildings such as the Royal Palace, Matthias Church, and the Fisherman's Bastion, all of which bear witness to the country's turbulent history. Visitors can stroll through medieval alleys, explore impressive museums, and enjoy one of the most beautiful panoramic views of the city's Pest side. Buda Castle combines Gothic, Renaissance, and Baroque architecture into a unique ensemble that attracts millions of tourists annually."
    },
    facts: {
      "de": [
        "Die Burg wurde erstmals im 13. Jahrhundert nach dem Mongolensturm errichtet.",
        "Teil des UNESCO-Welterbes seit 1987.",
        "Beherbergt die Ungarische Nationalgalerie und das Historische Museum Budapest.",
        "Die Matthiaskirche war der Ort zahlreicher königlicher Krönungen.",
        "Die Fischerbastei bietet sieben Türme, die die sieben ungarischen Stämme symbolisieren.",
        "Unter der Burg befindet sich ein weitläufiges Labyrinth- und Höhlensystem.",
        "Der Palast wurde nach dem Zweiten Weltkrieg fast vollständig rekonstruiert.",
        "Die Nationalbibliothek Széchényi befindet sich ebenfalls im Burgkomplex.",
        "Die Burg ist durch die historische Standseilbahn (Sikló) mit dem Donauufer verbunden.",
        "Der Burggarten-Basar am Fuße des Hügels ist ein Meisterwerk der Neorenaissance."
      ],
      "hu": [
        "A várat először a 13. században építették a tatárjárás után, IV. Béla idején.",
        "1987 óta az UNESCO világörökség része.",
        "Itt található a Magyar Nemzeti Galéria és a Budapesti Történeti Múzeum.",
        "A Mátyás-templom számos magyar király koronázási helyszíne volt.",
        "A Halászbástya hét tornya a hét honfoglaló magyar törzset jelképezi.",
        "A Várhegy alatt kiterjedt barlang- és pincerendszer, a Budavári Labirintus húzódik.",
        "A palotát a második világháború után szinte teljesen újjá kellett építeni.",
        "Az Országos Széchényi Könyvtár is a várnegyed épületeiben kapott helyet.",
        "A Budavári Sikló köti össze a várat a Clark Ádám térrel és a Lánchíddal.",
        "A Várkert Bazár a várhegy lábánál a neoreneszánsz építészet remekműve."
      ],
      "ro": [
        "Castelul a fost construit pentru prima dată în secolul al XIII-lea, după invazia mongolă.",
        "Face parte din patrimoniul mondial UNESCO din anul 1987.",
        "Găzduiește Galeria Națională Maghiară și Muzeul de Istorie din Budapesta.",
        "Biserica Mátyás a fost locul a numeroase încoronări regale.",
        "Bastionul Pescarilor are șapte turnuri care simbolizează cele șapte triburi maghiare.",
        "Sub castel se află un sistem extins de labirinturi și peșteri.",
        "Palatul a fost aproape complet reconstruit după cel de-al Doilea Război Mondial.",
        "Biblioteca Națională Széchényi se află, de asemenea, în complexul castelului.",
        "Castelul este conectat de malul Dunării prin funicularul istoric (Sikló).",
        "Bazarul Grădinii Castelului de la poalele dealului este o capodoperă neorenascentistă."
      ],
      "en": [
        "The castle was first built in the 13th century after the Mongol invasion.",
        "Part of the UNESCO World Heritage list since 1987.",
        "Houses the Hungarian National Gallery and the Budapest History Museum.",
        "Matthias Church was the site of numerous royal coronations.",
        "The Fisherman's Bastion features seven towers symbolizing the seven Hungarian tribes.",
        "An extensive system of labyrinths and caves lies beneath the Castle Hill.",
        "The palace was almost completely reconstructed after World War II.",
        "The National Széchényi Library is also located within the castle complex.",
        "The castle is connected to the Danube bank by the historic funicular (Sikló).",
        "The Castle Garden Bazaar at the foot of the hill is a Neo-Renaissance masterpiece."
      ]
    },
    image: "/poi-images/budai-var.webp",
  
    descriptionAdvanced: {
      "de": "Die Budaer Burg ist das historische Herz von Budapest und ein monumentales Zeugnis ungarischer Macht und Kultur über acht Jahrhunderte. Thronend auf dem Burgberg über der Donau, vereint das Burgviertel gotische, Renaissance- und Barockarchitektur zu einem einzigartigen UNESCO-Welterbe. Die Anlage umfasst den prachtvollen Königspalast, die geschichtsträchtige Matthiaskirche und die märchenhafte Fischerbastei. Über Jahrhunderte war die Burg die Residenz ungarischer Könige und ein Bollwerk gegen Invasoren, was sich in den massiven Verteidigungsanlagen widerspiegelt. Heute beherbergt sie bedeutende Museen wie die Nationalgalerie und die Nationalbibliothek. Ein Spaziergang durch die kopfsteingepflasterten Gassen der Burg bietet nicht nur historische Einblicke, sondern auch den wohl spektakulärsten Ausblick auf die Pester Seite der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Burgviertel von Budapest wurde 1987 in die Liste des UNESCO-Weltkulturerbes aufgenommen.", "Unter der Burg erstreckt sich ein weitläufiges Labyrinth aus natürlichen und künstlichen Höhlen.", "Der Königspalast wurde nach der Zerstörung im Zweiten Weltkrieg in seinem heutigen prachtvollen Stil wiederaufgebaut.", "In dem Viertel befindet sich das älteste Wohnhaus von Budapest aus dem 14. Jahrhundert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "orszaghaz",
    type: "landmark",
    parent: "budapest",
    coords: [19.0456, 47.5071],
    name: {"de": "Parlamentsgebäude", "hu": "Országház", "ro": "Parlamentul", "en": "Parliament Building"},
    image: "/geo-images/hungary/orszaghaz.webp",
    description: {
      "de": "Das ungarische Parlamentsgebäude, auch Országház genannt, ist eines der bekanntesten Wahrzeichen von Budapest und ein Meisterwerk der Neogotik. Es liegt majestätisch am Pester Ufer der Donau und ist das drittgrößte Parlamentsgebäude der Welt. Entworfen von Imre Steindl und eingeweiht im Jahr 1902, beeindruckt es durch seine symmetrische Fassade, seine monumentale Kuppel und seine reiche Innenausstattung mit Gold und Fresken. Das Gebäude beherbergt die ungarischen Kronjuwelen, einschließlich der Heiligen Stephanskrone, und ist der Sitz der ungarischen Nationalversammlung. Als Teil des UNESCO-Welterbes zieht es jährlich unzählige Besucher an, die seine architektonische Pracht und historische Bedeutung bewundern.",
      "hu": "A magyar Országház Budapest egyik legismertebb jelképe és a neogótikus építészet remekműve, amely fenségesen terül el a Duna pesti partján. Ez a világ harmadik legnagyobb parlamenti épülete, amelyet Steindl Imre tervezett, és 1902-ben adtak át teljes egészében. Az épület lenyűgözi a látogatókat szimmetrikus homlokzatával, monumentális kupolájával, valamint arannyal és freskókkal gazdagon díszített belső tereivel. Itt őrzik a magyar koronázási jelvényeket, köztük a Szent Koronát is, és ez az épület ad otthont a magyar Országgyűlésnek. Az UNESCO világörökség részeként az Országház évente számtalan látogatót vonz, akik megcsodálhatják építészeti pompáját és történelmi jelentőségét.",
      "ro": "Clădirea Parlamentului maghiar, cunoscută și sub numele de Országház, este unul dintre cele mai faimoase simboluri ale Budapestei și o capodoperă a arhitecturii neogotice. Situată maiestuos pe malul Pestei al Dunării, este a treia cea mai mare clădire parlamentară din lume. Proiectată de Imre Steindl și inaugurată în 1902, impresionează prin fațada sa simetrică, cupola monumentală și interiorul bogat decorat cu aur și fresce. Clădirea adăpostește bijuteriile coroanei maghiare, inclusiv Sfânta Coroană a lui Ștefan, și este sediul Adunării Naționale a Ungariei. Ca parte a patrimoniului mondial UNESCO, atrage anual nenumărați vizitatori care îi admiră splendoarea arhitecturală și importanța istorică.",
      "en": "The Hungarian Parliament Building, also known as Országház, is one of Budapest's most iconic landmarks and a masterpiece of Neo-Gothic architecture. Majestically situated on the Pest bank of the Danube, it is the third-largest parliament building in the world. Designed by Imre Steindl and fully inaugurated in 1902, it impresses visitors with its symmetrical facade, monumental dome, and rich interior decorated with gold and frescoes. The building houses the Hungarian Crown Jewels, including the Holy Crown of Saint Stephen, and serves as the seat of the National Assembly of Hungary. As part of the UNESCO World Heritage site, it attracts countless visitors annually who admire its architectural splendor and historical significance."
    },
    facts: {
      "de": [
        "Das Gebäude hat 691 Zimmer und eine Gesamtlänge von 268 Metern.",
        "Für die Innendekoration wurden etwa 40 Kilogramm 24-karätiges Gold verwendet.",
        "Die Kuppel erreicht eine Höhe von genau 96 Metern, was an das Jahr der Landnahme (896) erinnert.",
        "Es ist das größte Gebäude Ungarns und das höchste in Budapest.",
        "Die Fassade ist mit 242 Statuen ungarischer und siebenbürgischer Herrscher geschmückt.",
        "Das Gebäude wurde fast ausschließlich aus ungarischen Baumaterialien errichtet.",
        "Die Heilige Stephanskrone wird seit dem Jahr 2000 in der Kuppelhalle bewacht.",
        "Es verfügt über ein einzigartiges Fernwärme- und Belüftungssystem aus der Bauzeit.",
        "Die Bauarbeiten dauerten 17 Jahre und beschäftigten zeitweise über 1000 Arbeiter.",
        "Das Parlament ist nachts spektakulär beleuchtet und spiegelt sich in der Donau."
      ],
      "hu": [
        "Az épületben 691 helyiség található, hossza pedig 268 méter.",
        "A belső díszítéshez összesen mintegy 40 kilogramm 24 karátos aranyat használtak fel.",
        "A kupola magassága pontosan 96 méter, ami a honfoglalás évére (896) utal.",
        "Ez Magyarország legnagyobb épülete és Budapest egyik legmagasabb pontja.",
        "A homlokzatot 242 szobor díszíti, amelyek magyar és erdélyi uralkodókat ábrázolnak.",
        "Az épület szinte kizárólag hazai alapanyagokból készült, kivéve a márványmonolitokat.",
        "A Szent Koronát és a koronázási jelvényeket 2000 óta a kupolacsarnokban őrzik.",
        "Az épület korát megelőző, egyedülálló távfűtési és szellőzőrendszerrel rendelkezik.",
        "Az építkezés 17 évig tartott, és alkalmanként több mint 1000 munkás dolgozott rajta.",
        "Az Országház éjszakai kivilágítása a világ egyik legszebb városi látképe."
      ],
      "ro": [
        "Clădirea are 691 de camere și o lungime totală de 268 de metri.",
        "Pentru decorarea interioară s-au folosit aproximativ 40 de kilograme de aur de 24 de carate.",
        "Cupola atinge o înălțime de exact 96 de metri, amintind de anul descălecării (896).",
        "Este cea mai mare clădire din Ungaria și cea mai înaltă din Budapesta.",
        "Fațada este decorată cu 242 de statui ale conducătorilor maghiari și transilvăneni.",
        "Clădirea a fost construită aproape exclusiv din materiale de construcție maghiare.",
        "Sfânta Coroană a lui Ștefan este păzită în sala cupolei începând cu anul 2000.",
        "Dispune de un sistem unic de încălzire centrală și ventilație din perioada construcției.",
        "Lucrările de construcție au durat 17 ani și au implicat peste 1000 de muncitori.",
        "Parlamentul este iluminat spectaculos noaptea, reflectându-se în apele Dunării."
      ],
      "en": [
        "The building contains 691 rooms and has a total length of 268 meters.",
        "Approximately 40 kilograms of 24-karat gold were used for the interior decoration.",
        "The dome reaches a height of exactly 96 meters, commemorating the year of the Hungarian conquest (896).",
        "It is the largest building in Hungary and the tallest in Budapest.",
        "The facade is adorned with 242 statues of Hungarian and Transylvanian rulers.",
        "The building was constructed almost entirely from Hungarian building materials.",
        "The Holy Crown of Saint Stephen has been guarded in the Dome Hall since 2000.",
        "It features a unique district heating and ventilation system from the time of construction.",
        "Construction took 17 years and employed over 1,000 workers at times.",
        "The Parliament is spectacularly illuminated at night, reflecting in the Danube."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Das ungarische Parlamentsgebäude (Országház) ist eines der prächtigsten Regierungsgebäude der Welt und ein Symbol der ungarischen Souveränität. Direkt am Pester Ufer der Donau gelegen, besticht das neugotische Meisterwerk durch seine enorme Größe und die filigranen Verzierungen der Fassade. Entworfen von Imre Steindl und inspiriert vom Londoner Palace of Westminster, wurde es pünktlich zum Millennium im Jahr 1896 fast fertiggestellt. Im Inneren faszinieren die monumentale Treppenhalle, der prachtvolle Kuppelsaal und der Sitzungssaal mit ihrer Golddekoration und den Wandgemälden. Das wertvollste Exponat ist die ungarische Heilige Krone mit den Krönungsinsignien, die im Kuppelsaal streng bewacht werden. Als Teil des UNESCO-Welterbes ist das Parlament ein Muss für jeden Besucher der ungarischen Hauptstadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das ungarische Parlament ist mit 268 Metern Länge das drittgrößte Parlamentsgebäude weltweit.", "Für die Vergoldung der Innenräume wurden insgesamt 40 Kilogramm 24-karätiges Gold verwendet.", "Das Gebäude besitzt 691 Zimmer und insgesamt fast 20 Kilometer an Treppenhäusern.", "Die Kuppel des Parlaments erreicht eine symbolträchtige Höhe von genau 96 Metern."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hosok-tere",
    type: "landmark",
    parent: "budapest",
    coords: [19.0782, 47.5149],
    name: {"de": "Heldenplatz", "hu": "Hősök tere", "ro": "Piața Eroilor", "en": "Heroes' Square"},
    description: {
      "de": "Der Heldenplatz ist einer der bedeutendsten und meistbesuchten Plätze in Budapest und bildet den monumentalen Abschluss der Andrássy-Straße. Das Herzstück des Platzes ist das Millenniumsdenkmal, das 1896 anlässlich der tausendjährigen Landnahme der Ungarn errichtet wurde. Es zeigt die Statuen der sieben Stammesfürsten sowie bedeutende Persönlichkeiten der ungarischen Geschichte in einer halbkreisförmigen Kolonnade. Flankiert wird der Platz von zwei prächtigen Gebäuden: dem Museum der Bildenden Künste und der Kunsthalle. Als Teil des UNESCO-Welterbes ist der Heldenplatz ein Symbol des nationalen Stolzes und ein zentraler Ort für staatliche Feierlichkeiten und kulturelle Veranstaltungen.",
      "hu": "A Hősök tere Budapest egyik legjelentősebb és leglátogatottabb tere, amely az Andrássy út monumentális lezárásaként szolgál. A tér központi eleme a Millenniumi emlékmű, amelyet 1896-ban, a magyar honfoglalás ezredik évfordulójára kezdtek építeni. Az emlékmű a hét honfoglaló vezér szobrát, valamint a magyar történelem legfontosabb alakjait mutatja be a félköríves kolonnádokban. A teret két impozáns épület szegélyezi: a Szépművészeti Múzeum és a Műcsarnok. Az UNESCO világörökség részeként a Hősök tere a nemzeti büszkeség jelképe, és számos állami ünnepség, valamint kulturális esemény központi helyszíne.",
      "ro": "Piața Eroilor este una dintre cele mai importante și vizitate piețe din Budapesta, formând finalul monumental al Bulevardului Andrássy. Piesa centrală a pieței este Monumentul Mileniului, ridicat în 1896 pentru a celebra o mie de ani de la descălecarea maghiarilor. Acesta prezintă statuile celor șapte căpetenii de triburi, precum și personalități marcante ale istoriei maghiare într-o colonadă semicirculară. Piața este flancată de două clădiri magnifice: Muzeul de Arte Frumoase și Galeria de Artă (Műcsarnok). Ca parte a patrimoniului mondial UNESCO, Piața Eroilor este un simbol al mândriei naționale și un loc central pentru festivitățile de stat și evenimentele culturale.",
      "en": "Heroes' Square is one of the most significant and most visited squares in Budapest, forming the monumental conclusion of Andrássy Avenue. The centerpiece of the square is the Millennium Monument, which was commissioned in 1896 to commemorate the thousandth anniversary of the Hungarian conquest. It features the statues of the seven chieftains of the Magyars and prominent figures of Hungarian history within a semicircular colonnade. The square is flanked by two magnificent buildings: the Museum of Fine Arts and the Palace of Art (Műcsarnok). As part of the UNESCO World Heritage site, Heroes' Square is a symbol of national pride and a central location for state celebrations and cultural events."
    },
    facts: {
      "de": [
        "Das Millenniumsdenkmal wurde vom Architekten Albert Schickedanz entworfen.",
        "Die zentrale Säule ist 36 Meter hoch und trägt die Statue des Erzengels Gabriel.",
        "Die sieben Reiterstatuen am Fuße der Säule stellen die ungarischen Stammesfürsten dar.",
        "In den Kolonnaden befinden sich Statuen von Königen und Freiheitskämpfern Ungarns.",
        "Der Platz beherbergt das Grabmal des unbekannten Soldaten.",
        "Der Heldenplatz ist ein beliebter Ausgangspunkt für Besuche im Stadtwäldchen.",
        "Unter dem Platz befindet sich die Endstation der historischen U-Bahn-Linie M1.",
        "Die Statuen in den Kolonnaden wurden im Laufe der Geschichte mehrfach ausgetauscht.",
        "Der Platz war Schauplatz bedeutender politischer Demonstrationen und Umbettungen.",
        "Die Architektur des Platzes ist ein herausragendes Beispiel für den ungarischen Historismus."
      ],
      "hu": [
        "A Millenniumi emlékművet Schickedanz Albert építész tervezte.",
        "A központi oszlop 36 méter magas, tetején Gábriel arkangyal szobra áll.",
        "Az oszlop talpazatánál a hét honfoglaló vezér lovas szobra látható.",
        "A két félköríves oszlopcsarnokban a magyar történelem 14 meghatározó alakjának szobra áll.",
        "A téren található a Hősök emlékköve, amely az ismeretlen katona előtt tiszteleg.",
        "A Hősök tere a Városliget kapuja, Budapest egyik legkedveltebb pihenőhelye.",
        "A tér alatt található a kisföldalatti (M1) egyik megállója.",
        "Az emlékmű szobrai közül többet is kicseréltek a politikai változások során.",
        "A tér számos történelmi jelentőségű esemény és tüntetés helyszíne volt.",
        "A tér építészeti együttese a magyar historizmus egyik legszebb példája."
      ],
      "ro": [
        "Monumentul Mileniului a fost proiectat de arhitectul Albert Schickedanz.",
        "Coloana centrală are o înălțime de 36 de metri și poartă statuia Arhanghelului Gabriel.",
        "Cele șapte statui ecvestre de la baza coloanei îi reprezintă pe căpeteniile triburilor maghiare.",
        "În colonade se află statuile a 14 figuri marcante din istoria Ungariei.",
        "Piața găzduiește Mormântul Soldatului Necunoscut.",
        "Piața Eroilor este poarta de intrare către Parcul Orașului (Városliget).",
        "Sub piață se află o stație a liniei istorice de metrou M1.",
        "Statuile din colonade au fost înlocuite de mai multe ori de-a lungul istoriei.",
        "Piața a fost locul unor demonstrații politice și evenimente istorice majore.",
        "Arhitectura pieței este un exemplu remarcabil al historismului maghiar."
      ],
      "en": [
        "The Millennium Monument was designed by architect Albert Schickedanz.",
        "The central column is 36 meters high and is topped by a statue of Archangel Gabriel.",
        "The seven equestrian statues at the base of the column represent the Magyar chieftains.",
        "The colonnades house statues of 14 prominent figures from Hungarian history.",
        "The square is home to the Memorial Stone of Heroes (Tomb of the Unknown Soldier).",
        "Heroes' Square serves as the gateway to the City Park (Városliget).",
        "A station of the historic M1 subway line is located beneath the square.",
        "Several statues in the colonnades were replaced during various political eras.",
        "The square has been the site of major political demonstrations and historic events.",
        "The architectural ensemble of the square is a prime example of Hungarian Historicism."
      ]
    },
    image: "/poi-images/hosok-tere.webp",
  
    descriptionAdvanced: {
      "de": "Der Heldenplatz (Hősök tere) ist der größte und symbolträchtigste Platz von Budapest, gelegen am Ende der prachtvollen Andrássy-Straße. Das Zentrum des Platzes bildet das Millenniumsdenkmal, das zum 1000-jährigen Jubiläum der ungarischen Landnahme errichtet wurde. Eine 36 Meter hohe Säule mit dem Erzengel Gabriel wird von Statuen der sieben ungarischen Stammesfürsten und zwei halbkreisförmigen Kolonnaden mit bedeutenden Königen und Staatsmännern umrahmt. Der Platz ist ein Ort des nationalen Gedenkens und Schauplatz wichtiger historischer Ereignisse sowie großer Kundgebungen. Flankiert wird der Heldenplatz von den monumentalen Gebäuden des Museums der Bildenden Künste und der Kunsthalle. Das gesamte Ensemble gehört zum UNESCO-Welterbe und vermittelt eindrucksvoll den historischen Stolz der ungarischen Nation.",
      "hu": "A Hősök tere Budapest legimpozánsabb köztere, az Andrássy út monumentális lezárása, amelyet a magyar államiság ezeréves évfordulójára, 1896-ban alakítottak ki. Középpontjában a 36 méter magas Millenniumi emlékmű áll, tetején Gábriel arkangyallal, aki a Szent Koronát és a kettős keresztet tartja. A monumentális oszlopcsarnokokban a magyar történelem 14 meghatározó alakjának szobra kapott helyet, az oszlop talpazatánál pedig a hét honfoglaló vezér lovas szobra tekinthető meg. A teret a Szépművészeti Múzeum és a Műcsarnok eklektikus épületei keretezik, alkotva egy egységes, világörökségi rangú építészeti együttest. Számtalan történelmi esemény és állami ünnepség helyszíneként a tér a nemzeti identitás egyik legerősebb szimbóluma.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Heldenplatz markiert das Ende der UNESCO-geschützten Andrássy-Straße.", "Das Millenniumsdenkmal wurde vom Bildhauer György Zala und dem Architekten Albert Schickedanz entworfen.", "Unter dem Pflaster des Platzes befindet sich die erste U-Bahn-Station des europäischen Kontinents.", "Die Statuen in den Kolonnaden wurden mehrfach ausgetauscht, um den politischen Wandel der Geschichte widerzuspiegeln."],
      "hu": [
        "Az emlékmű építése 1896-ban kezdődött és teljes egészében csak 1929-re fejeződött be.",
        "A tér közepén található a Magyar Hősök Emlékköve, amely minden ismeretlen magyar katona előtt tiszteleg.",
        "A kolonnádokban eredetileg öt Habsburg uralkodó szobra is állt, de ezeket a második világháború után lecserélték.",
        "Zala György szobrászművész több mint harminc évig dolgozott az emlékmű szobrain."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "dunapart",
    type: "landmark",
    parent: "budapest",
    coords: [19.045, 47.498],
    name: {"de": "Donauufer", "hu": "Dunapart", "ro": "Malul Dunării", "en": "Danube Promenade"},
    image: "/geo-images/hungary/dunapart.webp",
    description: {
      "de": "Das Donauufer in Budapest ist eine der spektakulärsten Stadtlandschaften der Welt und gehört zum UNESCO-Welterbe. Die Promenade erstreckt sich zwischen der Kettenbrücke und der Elisabethbrücke auf der Pester Seite und bietet einen unvergleichlichen Blick auf die Budaer Burg, den Gellértberg und das Parlamentsgebäude. Entlang des Ufers finden sich zahlreiche historische Denkmäler, elegante Hotels und gemütliche Cafés, die zum Verweilen einladen. Besonders berühmt ist das Mahnmal 'Schuhe am Donauufer', das an die Opfer des Holocaust erinnert. Das Donauufer ist nicht nur ein Ort der Geschichte, sondern auch ein lebendiger Treffpunkt für Einheimische und Touristen, die die magische Atmosphäre der Stadt am Fluss genießen möchten.",
      "hu": "A budapesti Dunapart a világ egyik leglátványosabb városi látképe, amely az UNESCO világörökség részét képezi. A pesti oldalon a Lánchíd és az Erzsébet híd között húzódó sétány páratlan kilátást nyújt a Budai Várra, a Gellért-hegyre és az Országházra. A part mentén számos történelmi emlékmű, elegáns szálloda és hangulatos kávézó található, amelyek hívogatják a látogatókat. Különösen megrázó a 'Cipők a Duna-parton' emlékmű, amely a holokauszt áldozatainak állít emléket. A Dunapart nemcsak a történelem helyszíne, hanem a helyiek és a turisták kedvelt találkozóhelye is, ahol mindenki átélheti a folyóparti metropolisz varázslatos hangulatát.",
      "ro": "Malul Dunării din Budapesta este unul dintre cele mai spectaculoase peisaje urbane din lume și face parte din patrimoniul mondial UNESCO. Promenada se întinde între Podul cu Lanțuri și Podul Elisabeta pe partea Pestei, oferind o vedere de neegalat asupra Castelului Buda, dealului Gellért și clădirii Parlamentului. De-a lungul malului se găsesc numeroase monumente istorice, hoteluri elegante și cafenele primitoare care invită la relaxare. Deosebit de faimos este memorialul 'Pantofi pe malul Dunării', care onorează victimele Holocaustului. Malul Dunării nu este doar un loc al istoriei, ci și un punct de întâlnire vibrant pentru localnici și turiști, care doresc să se bucure de atmosfera magică a orașului de pe râu.",
      "en": "The Danube bank in Budapest is one of the most spectacular urban landscapes in the world and is a UNESCO World Heritage site. The promenade stretches between the Chain Bridge and the Elizabeth Bridge on the Pest side, offering unparalleled views of Buda Castle, Gellért Hill, and the Parliament building. Along the shore, numerous historical monuments, elegant hotels, and cozy cafes invite visitors to linger. Particularly moving is the 'Shoes on the Danube Bank' memorial, which commemorates the victims of the Holocaust. The Danube bank is not only a place of history but also a vibrant meeting point for locals and tourists alike, who wish to experience the magical atmosphere of the city by the river."
    },
    facts: {
      "de": [
        "Das Budapester Donauufer gehört seit 1987 zum UNESCO-Welterbe.",
        "Das Denkmal 'Schuhe am Donauufer' besteht aus 60 Paar Schuhen aus Eisen.",
        "Die Promenade bietet den besten Blick auf die nächtliche Beleuchtung der Stadt.",
        "Zahlreiche Luxushotels wie das Gresham Palace befinden sich direkt am Ufer.",
        "Die Donau ist an dieser Stelle etwa 350 Meter breit.",
        "Die Ufermauern wurden im 19. Jahrhundert zum Schutz vor Hochwasser errichtet.",
        "Entlang des Ufers verkehrt die Straßenbahnlinie 2, eine der schönsten Linien der Welt.",
        "Die Promenade ist ein beliebter Ort für Straßenkünstler und Musiker.",
        "Mehrere Schiffsanlegestellen bieten Rundfahrten auf der Donau an.",
        "Das Ufer ist Schauplatz des großen Feuerwerks zum ungarischen Nationalfeiertag am 20. August."
      ],
      "hu": [
        "A budapesti Duna-part 1987 óta az UNESCO világörökség része.",
        "A 'Cipők a Duna-parton' emlékmű 60 pár vasból öntött cipőből áll.",
        "A sétányról nyílik a legjobb kilátás a város éjszakai díszkivilágítására.",
        "Számos luxusszálloda, köztük a Gresham-palota is közvetlenül a parton található.",
        "A Duna szélessége Budapest belvárosában körülbelül 350 méter.",
        "A rakpartokat a 19. században építették ki az árvízvédelem és a hajózás érdekében.",
        "A part mentén halad a 2-es villamos, amelyet a világ egyik legszebb villamosvonalának választottak.",
        "A sétány a helyiek és a turisták egyik legkedveltebb korzózó helye.",
        "Számos hajóállomás kínál városnéző túrákat a Dunán.",
        "A Duna-part az augusztus 20-i nemzeti ünnepi tűzijáték központi helyszíne."
      ],
      "ro": [
        "Malul Dunării din Budapesta face parte din patrimoniul mondial UNESCO din 1987.",
        "Memorialul 'Pantofi pe malul Dunării' constă în 60 de perechi de pantofi din fier.",
        "Promenada oferă cea mai bună vedere asupra iluminatului nocturn al orașului.",
        "Numeroase hoteluri de lux, precum Palatul Gresham, sunt situate direct pe mal.",
        "Dunărea are o lățime de aproximativ 350 de metri în această zonă.",
        "Zidurile de sprijin ale malului au fost construite în secolul al XIX-lea pentru protecția împotriva inundațiilor.",
        "De-a lungul malului circulă tramvaiul 2, considerat una dintre cele mai frumoase linii din lume.",
        "Promenada este un loc popular pentru artiștii stradali și muzicieni.",
        "Mai multe debarcadere oferă croaziere turistice pe Dunăre.",
        "Malul este locul central pentru focurile de artificii de Ziua Națională a Ungariei, pe 20 august."
      ],
      "en": [
        "The Budapest Danube bank has been a UNESCO World Heritage site since 1987.",
        "The 'Shoes on the Danube Bank' memorial consists of 60 pairs of iron shoes.",
        "The promenade offers the best views of the city's spectacular night lighting.",
        "Numerous luxury hotels, such as the Gresham Palace, are located directly on the bank.",
        "The Danube is approximately 350 meters wide at this point in the city center.",
        "The embankments were constructed in the 19th century for flood protection and shipping.",
        "Tram line 2 runs along the bank and is voted one of the most beautiful tram routes in the world.",
        "The promenade is a favorite spot for locals and tourists to take a stroll (korzózás).",
        "Several boat piers offer sightseeing cruises on the Danube.",
        "The Danube bank is the central location for the national holiday fireworks on August 20th."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Das Donauufer in Budapest gehört zu den schönsten Stadtlandschaften der Welt und wurde zurecht zum UNESCO-Weltkulturerbe erklärt. Entlang des Flusses reihen sich architektonische Meisterwerke wie das Parlament, die Ungarische Akademie der Wissenschaften und die prachtvollen Hotels am Pester Ufer aneinander. Auf der Budaer Seite ragen der Burgberg und der Gellértberg majestätisch empor und spiegeln sich im Wasser der Donau. Die Uferzonen sind durch die berühmten Brücken wie die Kettenbrücke oder die Freiheitsbrücke miteinander verbunden, die nachts prachtvoll illuminiert sind. Ein Spaziergang entlang des Donauufers vermittelt die ganze Eleganz und den Glanz der ungarischen Metropole. Es ist der lebendige Puls der Stadt und ein Ort, an dem Geschichte und Moderne auf spektakuläre Weise verschmelzen.",
      "hu": "A budapesti Dunapart a világ egyik legszebb folyóparti panorámája, amely 1987 óta az UNESCO Világörökség részét képezi. A védett szakasz a Margit hídtól a Szabadság hídig terjed, magában foglalva az Országház neogótikus tömbjét, a Tudományos Akadémiát és a pesti szállodasort. A part mentén sétálva szemünk elé tárul a Budai Vár és a Gellért-hegy fenséges látványa, miközben a folyón ringatózó hajók élettel töltik meg a vizet. A pesti alsó rakparton található a megrázó 'Cipők a Duna-parton' emlékmű, amely a holokauszt áldozatainak állít emléket. Esténként a kivilágított épületek és hidak tükröződése a vízen különleges, romantikus atmoszférát teremt a város szívében.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Budapester Donauufer ist seit 1987 offizielles UNESCO-Weltkulturerbe.", "Die Uferpromenade auf der Pester Seite ist als 'Donau-Korso' bekannt und ein beliebter Treffpunkt.", "Am Ufer befinden sich 60 metallene Schuhe, ein bewegendes Denkmal für die Opfer des Holocaust.", "Die Donauufer in Budapest bieten eine der weltweit schönsten Nachtansichten einer Stadt."],
      "hu": [
        "A Duna budapesti szakasza 1987-ben került fel az UNESCO világörökségi listájára.",
        "A 'Cipők a Duna-parton' holokauszt-emlékmű 60 pár vasból öntött, korhű cipőt ábrázol.",
        "A pesti Duna-korzón közlekedő 2-es villamos vonalát a National Geographic a világ egyik legszebbikének választotta.",
        "A rakpartok kiépítése a 19. század második felében kezdődött a rendszeres árvizek elleni védekezésül."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "margitsziget",
    type: "landmark",
    parent: "budapest",
    coords: [19.0475, 47.5266],
    name: {"de": "Margareteninsel", "hu": "Margitsziget", "ro": "Insula Margareta", "en": "Margaret Island"},
    description: {
      "de": "Die Margareteninsel ist eine grüne Oase mitten in der Donau in Budapest und dient als das wichtigste Naherholungsgebiet der Stadt. Die fast drei Kilometer lange Insel ist weitgehend autofrei und bietet eine entspannte Atmosphäre mit weitläufigen Parks, jahrhundertealten Bäumen und mittelalterlichen Ruinen. Besucher finden hier zahlreiche Attraktionen wie den singenden Springbrunnen, den japanischen Garten und das beliebte Palatinus-Strandbad. Die Insel ist nach der Heiligen Margarete benannt, einer ungarischen Königstochter, die im 13. Jahrhundert in einem Dominikanerkloster auf der Insel lebte. Ob zum Joggen, Spazierengehen oder für kulturelle Veranstaltungen im Freilichttheater – die Margareteninsel ist ein unverzichtbarer Teil des Budapester Lebensgefühls.",
      "hu": "A Margitsziget egy zöld oázis a Duna közepén Budapest szívében, amely a város legfontosabb pihenőövezeteként szolgál. A közel három kilométer hosszú sziget nagy része autómentes, tágas parkokkal, évszázados fákkal és középkori romokkal várja a kikapcsolódni vágyókat. A látogatók számos látnivalót találhatnak itt, mint például a zenélő szökőkutat, a japánkertet és a népszerű Palatinus strandfürdőt. A sziget Szent Margitról, IV. Béla király lányáról kapta a nevét, aki a 13. században az itt található dominikánus kolostorban élt. Legyen szó kocogásról, sétáról vagy kulturális eseményekről a Szabadtéri Színpadon, a Margitsziget a budapesti életérzés elengedhetetlen része.",
      "ro": "Insula Margareta este o oază verde în mijlocul Dunării, în inima Budapestei, servind drept cea mai importantă zonă de recreere a orașului. Insula, lungă de aproape trei kilometri, este în mare parte fără mașini și oferă o atmosferă relaxată, cu parcuri vaste, copaci seculari și ruine medievale. Vizitatorii găsesc aici numeroase atracții, cum ar fi fântâna muzicală, grădina japoneză și popularul ștrand Palatinus. Insula poartă numele Sfintei Margareta, fiica regelui Béla al IV-lea, care a trăit în mănăstirea dominicană de pe insulă în secolul al XIII-lea. Fie că este vorba de jogging, plimbări sau evenimente culturale la Teatrul în Aer Liber, Insula Margareta este o parte indispensabilă a stilului de viață din Budapesta.",
      "en": "Margaret Island is a green oasis in the middle of the Danube in the heart of Budapest, serving as the city's most important recreational area. The nearly three-kilometer-long island is largely car-free and offers a relaxed atmosphere with extensive parks, centuries-old trees, and medieval ruins. Visitors can find numerous attractions here, such as the musical fountain, the Japanese garden, and the popular Palatinus strand bath. The island is named after Saint Margaret, the daughter of King Béla IV, who lived in a Dominican convent on the island in the 13th century. Whether for jogging, strolling, or attending cultural events at the Open-Air Theater, Margaret Island is an essential part of the Budapest experience."
    },
    facts: {
      "de": [
        "Die Insel ist 2,8 Kilometer lang und an der breitesten Stelle 500 Meter breit.",
        "Der singende Springbrunnen ist einer der größten seiner Art in Europa.",
        "Die Ruinen des Dominikanerklosters stammen aus dem 13. Jahrhundert.",
        "Der Wasserturm der Insel gehört zum UNESCO-Welterbe.",
        "Die Insel ist durch die Margaretenbrücke und die Árpádbrücke mit der Stadt verbunden.",
        "Das Palatinus-Bad war das erste Freibad in Budapest.",
        "Es gibt eine 5,3 Kilometer lange gummierte Laufstrecke rund um die Insel.",
        "Der japanische Garten wurde in den 1970er Jahren angelegt und bietet seltene Pflanzen.",
        "Die Insel beherbergt einen kleinen Tierpark mit Hirschen und Wasservögeln.",
        "Im Sommer finden im Freilichttheater zahlreiche Opern- und Ballettaufführungen statt."
      ],
      "hu": [
        "A sziget 2,8 kilométer hosszú, legszélesebb pontján pedig 500 méter széles.",
        "A zenélő szökőkút Európa egyik legnagyobb ilyen jellegű építménye.",
        "A dominikánus kolostor romjai a 13. századból származnak.",
        "A szigeten álló Víztorony az UNESCO világörökség része.",
        "A szigetet a Margit híd és az Árpád híd köti össze a várossal.",
        "A Palatinus strandfürdő volt Budapest első szabadtéri fürdője.",
        "A sziget körül egy 5,3 kilométer hosszú, gumírozott futópálya található.",
        "A japánkertet az 1970-es években alakították ki, különleges növényfajokkal.",
        "A szigeten egy kis vadaspark is található, ahol őzeket és vízimadarakat láthatunk.",
        "A Margitszigeti Szabadtéri Színpad nyaranta rangos operaelőadásoknak ad otthont."
      ],
      "ro": [
        "Insula are o lungime de 2,8 kilometri și o lățime maximă de 500 de metri.",
        "Fântâna muzicală este una dintre cele mai mari de acest tip din Europa.",
        "Ruinele mănăstirii dominicane datează din secolul al XIII-lea.",
        "Turnul de apă de pe insulă face parte din patrimoniul mondial UNESCO.",
        "Insula este conectată de oraș prin Podul Margareta și Podul Árpád.",
        "Ștrandul Palatinus a fost prima baie în aer liber din Budapesta.",
        "Există o pistă de alergare cauciucată de 5,3 kilometri în jurul insulei.",
        "Grădina japoneză a fost amenajată în anii 1970 și oferă plante rare.",
        "Insula găzduiește un mic parc zoologic cu căprioare și păsări de apă.",
        "Teatrul în Aer Liber găzduiește numeroase spectacole de operă și balet în timpul verii."
      ],
      "en": [
        "The island is 2.8 kilometers long and 500 meters wide at its broadest point.",
        "The musical fountain is one of the largest of its kind in Europe.",
        "The ruins of the Dominican convent date back to the 13th century.",
        "The island's Water Tower is a UNESCO World Heritage site.",
        "The island is connected to the city by the Margaret Bridge and the Árpád Bridge.",
        "The Palatinus strand bath was the first open-air bath in Budapest.",
        "There is a 5.3-kilometer-long rubberized running track around the island.",
        "The Japanese garden was established in the 1970s and features rare plant species.",
        "The island houses a small wildlife park with deer and waterfowl.",
        "The Margaret Island Open-Air Theater hosts prestigious opera and ballet performances in summer."
      ]
    },
    image: "/poi-images/margitsziget.webp",
  
    descriptionAdvanced: {
      "de": "Die Margareteninsel (Margitsziget) ist die grüne Lunge von Budapest und ein wahres Erholungsparadies inmitten der Donau. Benannt nach der Heiligen Margarete, der Tochter von König Béla IV., beherbergt die Insel die Ruinen eines mittelalterlichen Dominikanerklosters. Die Insel ist heute fast vollständig autofrei und bietet weite Parkanlagen, botanische Gärten und jahrhundertealte Bäume. Zu den Hauptattraktionen gehören der singende Springbrunnen mit seinen Lichtspielen, der historische Wasserturm und das traditionsreiche Palatinus-Strandbad. Jogger nutzen den berühmten Laufpfad, der die gesamte Insel umrundet, während Familien die Ruhe und die vielen Spielplätze genießen. Die Margareteninsel ist ein Ort der Stille und der aktiven Erholung, der die Hektik der Großstadt vergessen lässt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Margareteninsel erstreckt sich über eine Länge von 2,5 Kilometern in der Donau.", "Der singende Springbrunnen auf der Insel ist einer der größten seiner Art in Europa.", "Im kleinen Tierpark der Insel können Besucher unter anderem Damwild und Störche beobachten.", "Die Insel wird durch die Margaretenbrücke im Süden und die Árpádbrücke im Norden erschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "varosliget",
    type: "landmark",
    parent: "budapest",
    coords: [19.0844, 47.5144],
    name: {"de": "Stadtwäldchen", "hu": "Városliget", "ro": "Parcul Orașului", "en": "City Park"},
    image: "/geo-images/hungary/varosliget.webp",
    description: {
      "de": "Das Stadtwäldchen (Városliget) ist einer der ältesten und vielseitigsten öffentlichen Parks der Welt und liegt im Herzen von Budapest. Auf einer Fläche von über 100 Hektar bietet der Park eine beeindruckende Mischung aus Natur, Kultur und Unterhaltung. Zu den bekanntesten Sehenswürdigkeiten gehören die Burg Vajdahunyad, das prachtvolle Széchenyi-Heilbad und der Budapester Zoo. Im Winter verwandelt sich der See des Parks in eine der größten und schönsten Kunsteisbahnen Europas. Das Stadtwäldchen ist ein zentraler Ort für die Freizeitgestaltung der Budapester und beherbergt zudem bedeutende Museen wie das Museum für Völkerkunde und das Haus der Ungarischen Musik im Rahmen des Liget-Budapest-Projekts.",
      "hu": "A Városliget a világ egyik első nyilvános parkja, amely Budapest szívében kínál sokszínű kikapcsolódási lehetőséget. A több mint 100 hektáros területen a természet, a kultúra és a szórakozás különleges elegye várja a látogatókat. Legismertebb látnivalói közé tartozik a Vajdahunyad vára, a monumentális Széchenyi gyógyfürdő és a Fővárosi Állat- és Növénykert. Télen a Városligeti-tó Európa egyik legnagyobb és legszebb műjégpályájává alakul át. A Liget Budapest projekt keretében a park megújul, és olyan világszínvonalú épületekkel gazdagodott, mint a Néprajzi Múzeum és a Magyar Zene Háza, tovább erősítve kulturális központi szerepét.",
      "ro": "Parcul Orașului (Városliget) este unul dintre primele parcuri publice din lume, oferind o gamă diversă de activități recreative în inima Budapestei. Pe o suprafață de peste 100 de hectare, parcul îmbină natura, cultura și divertismentul într-un mod unic. Printre cele mai cunoscute atracții se numără Castelul Vajdahunyad, monumentalele Băi Széchenyi și Grădina Zoologică din Budapesta. Iarna, lacul din parc se transformă în unul dintre cele mai mari și mai frumoase patinoare artificiale din Europa. În cadrul proiectului Liget Budapest, parcul este în curs de modernizare și a fost îmbogățit cu clădiri de clasă mondială, precum Muzeul de Etnografie și Casa Muzicii Maghiare.",
      "en": "The City Park (Városliget) is one of the world's first public parks, offering a diverse range of recreational activities in the heart of Budapest. Spanning over 100 hectares, the park features a unique blend of nature, culture, and entertainment. Its most famous attractions include Vajdahunyad Castle, the monumental Széchenyi Thermal Bath, and the Budapest Zoo and Botanical Garden. In winter, the park's lake transforms into one of Europe's largest and most beautiful artificial ice rinks. Under the Liget Budapest project, the park is being revitalized and has been enriched with world-class buildings such as the Museum of Ethnography and the House of Hungarian Music."
    },
    facts: {
      "de": [
        "Das Stadtwäldchen wurde bereits im frühen 19. Jahrhundert als öffentlicher Park angelegt.",
        "Die Burg Vajdahunyad wurde ursprünglich aus Holz und Pappe für die Millenniumsfeierlichkeiten 1896 erbaut.",
        "Das Széchenyi-Heilbad ist der größte Heilbadekomplex in Europa.",
        "Der Budapester Zoo wurde 1866 eröffnet und ist einer der ältesten der Welt.",
        "Die Kunsteisbahn im Stadtwäldchen wurde 1870 eröffnet.",
        "Das Haus der Ungarischen Musik wurde vom japanischen Architekten Sou Fujimoto entworfen.",
        "Der Park beherbergt das monumentale Denkmal der ungarischen Revolution von 1956.",
        "Das Museum der Bildenden Künste liegt direkt am Eingang des Parks am Heldenplatz.",
        "Im Park befindet sich auch das berühmte Restaurant Gundel, ein Flaggschiff der ungarischen Gastronomie.",
        "Das Liget-Budapest-Projekt ist das größte kulturelle Stadtentwicklungsprojekt in Europa."
      ],
      "hu": [
        "A Városliget a 19. század elején vált a világ egyik első nyilvános népkertjévé.",
        "Vajdahunyad vára eredetileg fából és kartonból épült az 1896-os millenniumi ünnepségekre.",
        "A Széchenyi gyógyfürdő Európa legnagyobb gyógyfürdő-komplexuma.",
        "A Fővárosi Állat- és Növénykert 1866-ban nyílt meg, a világ egyik legrégebbi állatkertje.",
        "A Városligeti Műjégpálya 1870 óta várja a korcsolyázókat.",
        "A Magyar Zene Háza a neves japán építész, Sou Fujimoto tervei alapján készült.",
        "A parkban található az 1956-os forradalom és szabadságharc monumentális emlékműve.",
        "A Szépművészeti Múzeum közvetlenül a Liget bejáratánál, a Hősök terén áll.",
        "Itt található a világhírű Gundel étterem, a magyar gasztronómia egyik fellegvára.",
        "A Liget Budapest projekt Európa legnagyobb léptékű kulturális városfejlesztési programja."
      ],
      "ro": [
        "Parcul Orașului a devenit unul dintre primele parcuri publice din lume la începutul secolului al XIX-lea.",
        "Castelul Vajdahunyad a fost construit inițial din lemn și carton pentru festivitățile mileniului din 1896.",
        "Băile Széchenyi reprezintă cel mai mare complex balnear curativ din Europa.",
        "Grădina Zoologică din Budapesta a fost deschisă în 1866, fiind una dintre cele mai vechi din lume.",
        "Patinoarul artificial din Parcul Orașului a fost inaugurat în 1870.",
        "Casa Muzicii Maghiare a fost proiectată de renumitul arhitect japonez Sou Fujimoto.",
        "Parcul găzduiește monumentul monumental al Revoluției Maghiare din 1956.",
        "Muzeul de Arte Frumoase este situat chiar la intrarea în parc, în Piața Eroilor.",
        "În parc se află și faimosul restaurant Gundel, un simbol al gastronomiei maghiare.",
        "Proiectul Liget Budapest este cel mai mare program de dezvoltare urbană culturală din Europa."
      ],
      "en": [
        "The City Park became one of the world's first public parks in the early 19th century.",
        "Vajdahunyad Castle was originally built from wood and cardboard for the 1896 Millennium celebrations.",
        "The Széchenyi Thermal Bath is the largest medicinal bath complex in Europe.",
        "The Budapest Zoo and Botanical Garden opened in 1866, making it one of the oldest in the world.",
        "The City Park Ice Rink has been welcoming skaters since 1870.",
        "The House of Hungarian Music was designed by the renowned Japanese architect Sou Fujimoto.",
        "The park is home to the monumental memorial of the 1956 Hungarian Revolution.",
        "The Museum of Fine Arts stands directly at the park's entrance on Heroes' Square.",
        "The world-famous Gundel Restaurant, a flagship of Hungarian gastronomy, is located here.",
        "The Liget Budapest project is Europe's largest-scale cultural urban development program."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Das Stadtwäldchen (Városliget) ist der bedeutendste Stadtpark von Budapest und ein Zentrum für Kultur, Wellness und Freizeit. Entstanden im 19. Jahrhundert, war es einer der ersten öffentlichen Parks der Welt und Schauplatz der großen Millenniumsausstellung von 1896. Im Park befinden sich weltberühmte Sehenswürdigkeiten wie die Burg Vajdahunyad, das Széchenyi-Heilbad und der Budapester Zoo. Der See im Stadtwäldchen wird im Winter zur größten Kunsteisbahn Europas und ist im Sommer ein beliebter Ort zum Bootfahren. In den letzten Jahren wurde der Park durch das Projekt 'Liget Budapest' mit modernen Museen wie dem Haus der Musik modernisiert. Das Stadtwäldchen ist der beliebteste Treffpunkt für Familien und Touristen, die Natur und Kultur im Herzen von Pest verbinden möchten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Stadtwäldchen ist der Standort des berühmten Széchenyi-Heilbades, des größten Thermalbads Europas.", "Im Park befindet sich das Denkmal für den unbekannten Chronisten Anonymus.", "Der Millennium-Denkmal-Komplex am Eingang des Parks ist ein UNESCO-Weltkulturerbe.", "Das Projekt 'Liget Budapest' ist das derzeit größte kulturelle Stadtentwicklungsprojekt in Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "andrassy-ut",
    type: "landmark",
    parent: "budapest",
    coords: [19.065, 47.5069],
    name: {"de": "Andrássy-Straße", "hu": "Andrássy út", "ro": "Bulevardul Andrássy", "en": "Andrássy Avenue"},
    image: "/geo-images/hungary/andrassy-ut.webp",
    description: {
      "de": "Die Andrássy-Straße ist der eleganteste Boulevard von Budapest und gehört seit 2002 zum UNESCO-Welterbe. Sie verbindet das Stadtzentrum mit dem Heldenplatz und ist gesäumt von prächtigen Villen, exklusiven Boutiquen und bedeutenden kulturellen Institutionen wie der Ungarischen Staatsoper. Die Straße wurde im späten 19. Jahrhundert nach dem Vorbild der Pariser Boulevards angelegt und spiegelt den Glanz der österreichisch-ungarischen Monarchie wider. Unter der Andrássy-Straße verläuft die historische Millenniums-U-Bahn (M1), die älteste elektrische U-Bahn Kontinentaleuropas. Ein Spaziergang entlang dieser Prachtstraße bietet einen faszinierenden Einblick in die Architektur des Historismus und das pulsierende Leben der ungarischen Hauptstadt.",
      "hu": "Az Andrássy út Budapest legelegánsabb sugárútja, amely 2002 óta az UNESCO világörökség részét képezi. A belvárost köti össze a Hősök terével, mentén pedig lenyűgöző paloták, exkluzív üzletek és olyan jelentős kulturális intézmények találhatók, mint a Magyar Állami Operaház. Az utat a 19. század végén alakították ki párizsi mintára, tükrözve az Osztrák-Magyar Monarchia fénykorát. Az Andrássy út alatt fut a Millenniumi Földalatti Vasút (M1), amely a kontinens első elektromos földalatti vasútja volt. Egy séta ezen a díszes sugárúton felejthetetlen élményt nyújt a historizáló építészet kedvelőinek és a magyar főváros lüktetését keresőknek.",
      "ro": "Bulevardul Andrássy este cea mai elegantă arteră din Budapesta, fiind inclusă în patrimoniul mondial UNESCO din anul 2002. Conectează centrul orașului cu Piața Eroilor și este mărginit de palate splendide, buticuri exclusive și instituții culturale importante, precum Opera de Stat Maghiară. Bulevardul a fost amenajat la sfârșitul secolului al XIX-lea după modelul bulevardelor pariziene, reflectând strălucirea Monarhiei Austro-Ungare. Pe sub Bulevardul Andrássy circulă metroul mileniului (M1), prima linie de metrou electric din Europa continentală. O plimbare de-a lungul acestui bulevard oferă o perspectivă fascinantă asupra arhitecturii historiste și a vieții vibrante a capitalei maghiare.",
      "en": "Andrássy Avenue is the most elegant boulevard in Budapest and has been a UNESCO World Heritage site since 2002. It connects the city center with Heroes' Square and is lined with magnificent villas, exclusive boutiques, and significant cultural institutions such as the Hungarian State Opera House. The avenue was developed in the late 19th century, modeled after Parisian boulevards, reflecting the golden age of the Austro-Hungarian Monarchy. Beneath Andrássy Avenue runs the historic Millennium Underground Railway (M1), the first electric underground line in continental Europe. A stroll along this grand avenue offers a fascinating insight into Historicist architecture and the pulsating life of the Hungarian capital."
    },
    facts: {
      "de": [
        "Die Straße wurde 1876 eingeweiht und nach Premierminister Gyula Andrássy benannt.",
        "Die Ungarische Staatsoper ist eines der prächtigsten Gebäude an der Straße.",
        "Die Millenniums-U-Bahn (M1) wurde 1896 zur Tausendjahrfeier Ungarns eröffnet.",
        "Die Straße ist in drei Abschnitte mit unterschiedlichem Charakter unterteilt.",
        "Zahlreiche Botschaften und diplomatische Vertretungen haben hier ihren Sitz.",
        "Das Haus des Terrors, ein Museum zur Geschichte der Diktaturen, liegt an der Andrássy-Straße.",
        "Die Straße ist 2,4 Kilometer lang und führt direkt zum Stadtwäldchen.",
        "Die Architektur ist geprägt von Neorenaissance- und eklektischen Stilen.",
        "Die Andrássy-Straße ist ein Zentrum für Luxus-Shopping in Budapest.",
        "Die gesamte Straße steht unter Denkmalschutz und bewahrt ihr historisches Erscheinungsbild."
      ],
      "hu": [
        "Az utat 1876-ban adták át, és Andrássy Gyula miniszterelnökről nevezték el.",
        "A Magyar Állami Operaház az út egyik legimpozánsabb épülete.",
        "A kisföldalatti (M1) 1896-ban, a honfoglalás ezredik évfordulójára készült el.",
        "Az út három, jellegében jól elkülöníthető szakaszra oszlik.",
        "Számos nagykövetség és diplomáciai képviselet található a sugárút mentén.",
        "Itt található a Terror Háza Múzeum, amely a diktatúrák áldozatainak állít emléket.",
        "A sugárút hossza 2,4 kilométer, és egyenesen a Városligetbe vezet.",
        "Építészetét a neoreneszánsz és az eklektika stílusjegyei határozzák meg.",
        "Az Andrássy út a luxusvásárlás és a divat központja Budapesten.",
        "A teljes sugárút műemléki védelem alatt áll, megőrizve történelmi arculatát."
      ],
      "ro": [
        "Bulevardul a fost inaugurat în 1876 și numit după prim-ministrul Gyula Andrássy.",
        "Opera de Stat Maghiară este una dintre cele mai impresionante clădiri de pe bulevard.",
        "Metroul mileniului (M1) a fost deschis în 1896 pentru a celebra o mie de ani de istorie maghiară.",
        "Bulevardul este împărțit în trei secțiuni cu caractere distincte.",
        "Numeroase ambasade și reprezentanțe diplomatice își au sediul aici.",
        "Casa Terorii, un muzeu dedicat victimelor dictaturilor, se află pe acest bulevard.",
        "Bulevardul are o lungime de 2,4 kilometri și duce direct către Parcul Orașului.",
        "Arhitectura este dominată de stilurile neorenascentist și eclectic.",
        "Bulevardul Andrássy este centrul cumpărăturilor de lux din Budapesta.",
        "Întregul bulevard este protejat ca monument istoric, păstrându-și aspectul original."
      ],
      "en": [
        "The avenue was inaugurated in 1876 and named after Prime Minister Gyula Andrássy.",
        "The Hungarian State Opera House is one of the most magnificent buildings on the avenue.",
        "The Millennium Underground (M1) was opened in 1896 for the thousandth anniversary of Hungary.",
        "The avenue is divided into three sections, each with a distinct character.",
        "Numerous embassies and diplomatic missions are located along the boulevard.",
        "The House of Terror Museum, commemorating the victims of dictatorships, is situated here.",
        "The avenue is 2.4 kilometers long and leads directly to the City Park.",
        "The architecture is characterized by Neo-Renaissance and Eclectic styles.",
        "Andrássy Avenue is the hub for luxury shopping and high fashion in Budapest.",
        "The entire avenue is under monument protection, preserving its historic appearance."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Die Andrássy-Straße ist die eleganteste Boulevardstraße von Budapest und ein herausragendes Beispiel städtebaulicher Eleganz des 19. Jahrhunderts. Sie verbindet den Elisabethenplatz im Stadtzentrum mit dem Heldenplatz am Stadtwäldchen und wird von prachtvollen Neorenaissance-Palästen gesäumt. Entlang der Allee befinden sich bedeutende kulturelle Einrichtungen wie die Ungarische Staatsoper und das Haus des Terrors. Die Straße ist in drei Abschnitte unterteilt, die von luxuriösen Geschäften bis hin zu aristokratischen Villen mit Gärten reichen. Unter der Andrássy-Straße verläuft die historische U-Bahn-Linie M1, die erste elektrische Metro auf dem europäischen Kontinent. Als UNESCO-Welterbe geschützt, spiegelt die Straße die goldene Ära Budapests am Ende der Monarchie wider.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Andrássy-Straße wurde 2002 als Teil des Budapester Ensembles zum UNESCO-Welterbe erklärt.", "Die Straße wurde nach dem ungarischen Ministerpräsidenten Graf Gyula Andrássy benannt.", "Viele der prachtvollen Gebäude wurden von den berühmtesten Architekten ihrer Zeit, wie Miklós Ybl, entworfen.", "Die Allee ist über 2,3 Kilometer lang und ein Inbegriff für den europäischen Boulevardstil."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyugati-palyaudvar",
    type: "landmark",
    parent: "budapest",
    coords: [19.0583, 47.5106],
    name: {"de": "Westbahnhof", "hu": "Nyugati pályaudvar", "ro": "Gara de Vest", "en": "Nyugati Railway Station"},
    description: {
      "de": "Der Westbahnhof (Nyugati pályaudvar) ist einer der architektonisch beeindruckendsten Bahnhöfe in Budapest und ein bedeutendes Denkmal der Eisenbahngeschichte. Das heutige Gebäude wurde von der Firma von Gustave Eiffel entworfen und im Jahr 1877 eingeweiht. Besonders markant ist die monumentale Eisen- und Glaskonstruktion der Bahnhofshalle, die zur Zeit ihrer Errichtung eine technische Meisterleistung darstellte. Der Bahnhof liegt am Nyugati-Platz und dient als wichtiger Knotenpunkt für den nationalen und internationalen Zugverkehr sowie für den öffentlichen Nahverkehr der Stadt. Neben seiner funktionalen Bedeutung beherbergt der Bahnhof auch eine der schönsten McDonald's-Filialen der Welt, die in einem ehemaligen Wartesaal untergebracht ist.",
      "hu": "A Nyugati pályaudvar Budapest egyik legimpozánsabb építészeti alkotása és a vasúttörténet kiemelkedő emléke. A mai épületet Gustave Eiffel cége tervezte, és 1877-ben adták át a forgalomnak. Különösen lenyűgöző a pályaudvar monumentális vas- és üvegszerkezetű csarnoka, amely építése idején technikai bravúrnak számított. A pályaudvar a Nyugati téren található, és fontos csomópontja a belföldi és nemzetközi vasúti közlekedésnek, valamint a városi tömegközlekedésnek is. Funkcionális jelentősége mellett a pályaudvar ad otthont a világ egyik legszebb McDonald's éttermének is, amely az egykori elegáns váróteremben kapott helyet.",
      "ro": "Gara de Vest (Nyugati pályaudvar) este una dintre cele mai impresionante realizări arhitecturale din Budapesta și un monument remarcabil al istoriei feroviare. Clădirea actuală a fost proiectată de compania lui Gustave Eiffel și inaugurată în anul 1877. Impresionează în mod deosebit hala monumentală din fier și sticlă a gării, care a reprezentat o performanță tehnică la momentul construcției sale. Gara este situată în Piața Nyugati și servește drept nod important pentru traficul feroviar național și internațional, precum și pentru transportul public urban. Pe lângă importanța sa funcțională, gara găzduiește și unul dintre cele mai frumoase restaurante McDonald's din lume, situat într-o fostă sală de așteptare elegantă.",
      "en": "The Nyugati Railway Station (West Station) is one of Budapest's most architecturally stunning buildings and a prominent monument of railway history. The current building was designed by Gustave Eiffel's company and inaugurated in 1877. Particularly impressive is the station's monumental iron and glass hall, which was a technical feat at the time of its construction. Located at Nyugati Square, the station serves as a major hub for national and international rail traffic, as well as for the city's public transport. Beyond its functional significance, the station also houses one of the world's most beautiful McDonald's restaurants, located in a former elegant waiting room."
    },
    facts: {
      "de": [
        "Der Bahnhof wurde an der Stelle des ersten ungarischen Bahnhofs von 1846 errichtet.",
        "Die Eisenkonstruktion wurde in Paris vorgefertigt und in Budapest montiert.",
        "August de Serres war der leitende Architekt des Projekts.",
        "Die Bahnhofshalle hat eine Spannweite von 25 Metern.",
        "Der Bahnhof war der Ausgangspunkt der ersten ungarischen Eisenbahnlinie nach Vác.",
        "Das Gebäude verbindet Glas- und Eisenarchitektur mit klassischen Backsteinfassaden.",
        "Die McDonald's-Filiale im Bahnhof gilt oft als die schönste weltweit.",
        "Der Bahnhof wurde in den letzten Jahren umfassend renoviert, um seinen alten Glanz wiederherzustellen.",
        "Er ist ein wichtiger Drehort für internationale Filmproduktionen.",
        "Direkt neben dem Bahnhof befindet sich das Einkaufszentrum Westend, eines der größten der Stadt."
      ],
      "hu": [
        "A pályaudvar az 1846-ban megnyitott első magyar vasútállomás helyén épült.",
        "A vasszerkezetet Párizsban gyártották le, és Budapesten szerelték össze.",
        "A projekt vezető építésze az osztrák August de Serres volt.",
        "A vágánycsarnok fesztávolsága 25 méter.",
        "Innen indult az első magyarországi vasútvonal Vác irányába.",
        "Az épület az üveg- és vasarchitektúrát ötvözi a klasszikus téglaarchitektúrával.",
        "A pályaudvaron található McDonald's éttermet a világ legszebbjei között tartják számon.",
        "Az épületet az elmúlt években jelentősen felújították, visszaadva eredeti pompáját.",
        "A pályaudvar népszerű forgatási helyszín nemzetközi filmprodukciók számára is.",
        "Közvetlenül mellette található a Westend bevásárlóközpont, a város egyik legnagyobb üzletközpontja."
      ],
      "ro": [
        "Gara a fost construită pe locul primei stații de cale ferată maghiare din 1846.",
        "Structura de fier a fost prefabricată la Paris și asamblată la Budapesta.",
        "Arhitectul principal al proiectului a fost August de Serres.",
        "Hala liniilor are o deschidere de 25 de metri.",
        "De aici a plecat prima linie de cale ferată din Ungaria către Vác.",
        "Clădirea îmbină arhitectura din sticlă și fier cu fațade clasice din cărămidă.",
        "Restaurantul McDonald's din gară este adesea considerat cel mai frumos din lume.",
        "Gara a fost renovată extensiv în ultimii ani pentru a-și recăpăta strălucirea de odinioară.",
        "Este o locație populară de filmare pentru producții cinematografice internaționale.",
        "Chiar lângă gară se află centrul comercial Westend, unul dintre cele mai mari din oraș."
      ],
      "en": [
        "The station was built on the site of Hungary's first railway station from 1846.",
        "The iron structure was prefabricated in Paris and assembled in Budapest.",
        "The lead architect of the project was August de Serres.",
        "The train hall has a span of 25 meters.",
        "The first Hungarian railway line to Vác departed from this location.",
        "The building combines glass and iron architecture with classic brick facades.",
        "The McDonald's restaurant in the station is often cited as the most beautiful in the world.",
        "The station has undergone extensive renovation in recent years to restore its original glory.",
        "It is a popular filming location for international movie productions.",
        "The Westend shopping center, one of the city's largest, is located directly next to the station."
      ]
    },
    image: "/poi-images/nyugati-palyaudvar.webp",
  
    descriptionAdvanced: {
      "de": "Der Westbahnhof (Nyugati pályaudvar) in Budapest ist ein architektonisches Meisterwerk des ausgehenden 19. Jahrhunderts und ein bedeutender Verkehrsknotenpunkt. Errichtet von der Firma Gustave Eiffels, besticht das Bahnhofsgebäude durch seine beeindruckende Stahl-Glas-Konstruktion der Empfangshalle. Die Kombination aus historischer Architektur und modernem Reisekomfort macht den Nyugati zu einem der schönsten Bahnhöfe Europas. In einem Flügel des Bahnhofs befindet sich eine der prachtvollsten McDonald's-Filialen weltweit, die in einem ehemaligen Speisesaal untergebracht ist. Der Bahnhof liegt am Nyugati-Platz, einem der belebtesten Plätze von Pest, und verbindet die Hauptstadt mit dem Norden und Osten Ungarns. Trotz zahlreicher Kriege und Umbauten hat das Gebäude seinen ursprünglichen Glanz und seine architektonische Integrität bewahrt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Eisenkonstruktion des Bahnhofs wurde im Pariser Büro von Gustave Eiffel entworfen.", "Der Bahnhof wurde im Jahr 1877 an der Stelle der ersten ungarischen Eisenbahnstation eröffnet.", "Die majestätische Glashalle überspannt die Bahnsteige ohne stützende Zwischenpfeiler.", "Das Gebäude wurde in den letzten Jahren umfassend restauriert, um seine historische Schönheit zu bewahren."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lanchid",
    type: "landmark",
    parent: "budapest",
    coords: [19.0436, 47.499],
    name: {"de": "Kettenbrücke", "hu": "Lánchíd", "ro": "Podul cu Lanțuri", "en": "Chain Bridge"},
    image: "/geo-images/hungary/lanchid.webp",
    description: {
      "de": "Die Széchenyi-Kettenbrücke ist die älteste und bekannteste Brücke über die Donau in Budapest und ein Symbol der ungarischen Hauptstadt. Sie wurde 1849 eingeweiht und war die erste dauerhafte Verbindung zwischen den Städten Buda und Pest, was maßgeblich zur Vereinigung der Stadt beitrug. Die Brücke wurde auf Initiative des Grafen István Széchenyi nach den Plänen des englischen Ingenieurs William Tierney Clark errichtet. Mit ihren charakteristischen Löwenstatuen an den Brückentoren und ihrer eleganten Kettenkonstruktion ist sie ein Meisterwerk der Ingenieurskunst des 19. Jahrhunderts. Als Teil des UNESCO-Welterbes bietet die Kettenbrücke einen der romantischsten Spazierwege der Stadt mit einem atemberaubenden Blick auf das Panorama von Budapest.",
      "hu": "A Széchenyi lánchíd a Duna legidősebb és legismertebb hídja Budapesten, a magyar főváros egyik legfontosabb jelképe. 1849-ben adták át, és ez volt az első állandó összeköttetés Buda és Pest között, ami döntő szerepet játszott a város későbbi egyesítésében. A híd gróf Széchenyi István kezdeményezésére, az angol William Tierney Clark tervei alapján épült meg. Jellegzetes kőoroszlánjai és elegáns láncszerkezete a 19. századi mérnöki tudomány remekművévé teszik. Az UNESCO világörökség részeként a Lánchíd a város egyik legromantikusabb sétaútvonala, ahonnan lenyűgöző kilátás nyílik Budapest panorámájára.",
      "ro": "Podul cu Lanțuri Széchenyi este cel mai vechi și cel mai cunoscut pod peste Dunăre din Budapesta, fiind un simbol al capitalei maghiare. Inaugurat în 1849, a fost prima legătură permanentă între orașele Buda și Pesta, jucând un rol decisiv în unificarea orașului. Podul a fost construit la inițiativa contelui István Széchenyi, după planurile inginerului englez William Tierney Clark. Cu statuile sale caracteristice de lei de la porțile podului și structura sa elegantă cu lanțuri, este o capodoperă a ingineriei din secolul al XIX-lea. Ca parte a patrimoniului mondial UNESCO, Podul cu Lanțuri oferă una dintre cele mai romantice rute de plimbare din oraș, cu o vedere uluitoare asupra panoramei Budapestei.",
      "en": "The Széchenyi Chain Bridge is the oldest and most famous bridge across the Danube in Budapest and a symbol of the Hungarian capital. Inaugurated in 1849, it was the first permanent connection between the cities of Buda and Pest, playing a crucial role in the unification of the city. The bridge was built on the initiative of Count István Széchenyi, based on the designs of English engineer William Tierney Clark. With its characteristic lion statues at the bridgeheads and its elegant chain construction, it is a masterpiece of 19th-century engineering. As part of the UNESCO World Heritage site, the Chain Bridge offers one of the city's most romantic walking routes with a breathtaking view of the Budapest panorama."
    },
    facts: {
      "de": [
        "Die Brücke wurde nach dem ungarischen Staatsmann István Széchenyi benannt.",
        "William Tierney Clark entworfen, Adam Clark leitete den Bau.",
        "Die Löwenstatuen an den Enden der Brücke wurden von János Marschalkó geschaffen.",
        "Während des Zweiten Weltkriegs wurde die Brücke von deutschen Truppen gesprengt.",
        "Die Brücke wurde 1949, genau 100 Jahre nach ihrer ersten Einweihung, wiedereröffnet.",
        "Die Spannweite zwischen den Pfeilern beträgt 202 Meter.",
        "Die Kettenbrücke war bei ihrer Eröffnung eine der größten Hängebrücken der Welt.",
        "Einer Legende nach haben die Löwen der Brücke keine Zungen.",
        "Die Brücke ist nachts wunderschön beleuchtet und ein beliebtes Fotomotiv.",
        "Sie verbindet den Roosevelt-Platz (heute Széchenyi-Platz) in Pest mit dem Adam-Clark-Platz in Buda."
      ],
      "hu": [
        "A hidat a 'legnagyobb magyarról', Széchenyi Istvánról nevezték el.",
        "William Tierney Clark tervezte, az építkezést pedig Clark Ádám irányította.",
        "A hídfőket díszítő kőoroszlánokat Marschalkó János szobrászművész készítette.",
        "A második világháború végén a visszavonuló német csapatok felrobbantották a hidat.",
        "A hidat 1949-ben, az eredeti átadás 100. évfordulóján nyitották meg újra.",
        "A pillérek közötti legnagyobb távolság 202 méter.",
        "Átadásakor a Lánchíd a világ egyik legnagyobb függőhídja volt.",
        "A legenda szerint a híd oroszlánjainak nincs nyelve, bár ez valójában nem igaz.",
        "A híd éjszakai kivilágítása Budapest egyik legszebb látványa.",
        "A pesti Széchenyi István teret köti össze a budai Clark Ádám térrel."
      ],
      "ro": [
        "Podul a fost numit după omul de stat maghiar István Széchenyi.",
        "Proiectat de William Tierney Clark, construcția a fost coordonată de Adam Clark.",
        "Statuile de lei de la capetele podului au fost create de sculptorul János Marschalkó.",
        "La sfârșitul celui de-al Doilea Război Mondial, podul a fost aruncat în aer de trupele germane.",
        "Podul a fost redeschis în 1949, exact la 100 de ani de la prima sa inaugurare.",
        "Deschiderea maximă între piloni este de 202 metri.",
        "La momentul inaugurării, Podul cu Lanțuri era unul dintre cele mai mari poduri suspendate din lume.",
        "Conform unei legende, leii de pe pod nu au limbi, deși acest lucru nu este adevărat.",
        "Podul este iluminat superb noaptea și este un subiect popular pentru fotografii.",
        "Conectează Piața Széchenyi István din Pesta cu Piața Adam Clark din Buda."
      ],
      "en": [
        "The bridge was named after the Hungarian statesman István Széchenyi.",
        "Designed by William Tierney Clark, construction was supervised by Adam Clark.",
        "The lion statues at the bridgeheads were created by sculptor János Marschalkó.",
        "At the end of World War II, the bridge was blown up by retreating German troops.",
        "The bridge was reopened in 1949, exactly 100 years after its original inauguration.",
        "The largest span between the pillars is 202 meters.",
        "At its opening, the Chain Bridge was one of the largest suspension bridges in the world.",
        "According to legend, the bridge's lions have no tongues, though this is not true.",
        "The bridge is beautifully illuminated at night and is a popular subject for photography.",
        "It connects Széchenyi István Square in Pest with Adam Clark Square in Buda."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Die Kettenbrücke (Széchenyi lánchíd) ist die älteste und berühmteste der Budapester Brücken über die Donau und ein Symbol der ungarischen Einheit. Sie wurde 1849 eingeweiht und war die erste permanente Verbindung zwischen den Städten Buda und Pest, was die Entwicklung zur modernen Metropole maßgeblich beschleunigte. Die Brücke wurde auf Initiative von Graf István Széchenyi errichtet und vom englischen Ingenieur William Tierney Clark entworfen. Besonders markant sind die massiven Triumphbögen und die stolzen Löwenstatuen, die die Brückenköpfe bewachen. Nachts ist die Kettenbrücke prachtvoll beleuchtet und bietet einen der romantischsten Anblicke von Budapest. Sie ist nicht nur ein technisches Denkmal, sondern auch ein Herzstück der nationalen Identität Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Kettenbrücke war bei ihrer Eröffnung eine der größten Hängebrücken der Welt.", "Die Löwen an den Brückenköpfen haben der Legende nach keine Zungen, was jedoch nur eine optische Täuschung ist.", "Während des Zweiten Weltkriegs wurde die Brücke gesprengt und zum 100. Jubiläum 1949 originalgetreu wiederaufgebaut.", "Die Brücke wurde nach einer umfassenden Sanierung im Jahr 2023 für den Fußgänger- und Busverkehr wieder freigegeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pecs",
    type: "city",
    parent: "baranya",
    coords: [18.2323, 46.0727],
    name: {"de": "Fünfkirchen", "hu": "Pécs", "ro": "Pécs", "en": "Pécs"},
    image: "/geo-images/hungary/pecs.webp",
    description: {
      "de": "Pécs, im Südwesten Ungarns am Fuße des Mecsek-Gebirges gelegen, ist eine Stadt mit einer über 2000-jährigen Geschichte. Die von den Römern als Sopianae gegründete Stadt ist bekannt für ihr mediterranes Flair und ihr reiches kulturelles Erbe. Besonders sehenswert sind die frühchristlichen Grabkammern, die zum UNESCO-Welterbe gehören, sowie die markante Moschee von Pascha Jakowali Hassan. Pécs war 2010 Kulturhauptstadt Europas und beherbergt die berühmte Zsolnay-Porzellanmanufaktur.",
      "hu": "Pécs, Magyarország délnyugati részén, a Mecsek lábánál fekvő város, amely több mint 2000 éves múltra tekint vissza. A rómaiak által Sopianae néven alapított település mediterrán hangulatáról és gazdag kulturális örökségéről ismert. Különösen figyelemre méltóak az UNESCO világörökség részét képező ókeresztény sírkamrák, valamint Gázi Kászim pasa dzsámija. Pécs 2010-ben Európa Kulturális Fővárosa volt, és itt található a híres Zsolnay Porcelánmanufaktúra is.",
      "ro": "Pécs, situat în sud-vestul Ungariei, la poalele munților Mecsek, este un oraș cu o istorie de peste 2000 de ani. Fondat de romani sub numele de Sopianae, orașul este cunoscut pentru atmosfera sa mediteraneană și moștenirea culturală bogată. Deosebit de remarcabile sunt mormintele paleocreștine, care fac parte din patrimoniul mondial UNESCO, precum și moscheea pașei Gazi Kasim. Pécs a fost Capitală Europeană a Culturii în 2010 și găzduiește faimoasa fabrică de porțelan Zsolnay.",
      "en": "Pécs, located in southwestern Hungary at the foot of the Mecsek Mountains, is a city with a history spanning over 2,000 years. Founded by the Romans as Sopianae, the city is known for its Mediterranean atmosphere and rich cultural heritage. Particularly noteworthy are the Early Christian Necropolis, a UNESCO World Heritage site, and the iconic Mosque of Pasha Qasim. Pécs was a European Capital of Culture in 2010 and is home to the world-famous Zsolnay Porcelain Manufactory."
    },
    facts: {
      "de": [
        "Fünftgrößte Stadt Ungarns und Sitz des Komitats Baranya.",
        "Die Universität Pécs wurde 1367 als erste Universität Ungarns gegründet.",
        "Die frühchristlichen Grabkammern sind ein einzigartiges UNESCO-Welterbe.",
        "Heimat der Zsolnay-Porzellanmanufaktur mit ihrem charakteristischen Eosin-Glanz.",
        "Die Kathedrale von Pécs ist ein beeindruckendes romanisches Bauwerk.",
        "Das Zsolnay-Kulturviertel ist ein modernes Zentrum für Kunst und Design.",
        "Bekannt für das mediterrane Klima und den Weinanbau am Mecsek.",
        "Die Moschee von Pascha Jakowali Hassan ist ein Relikt der osmanischen Zeit."
      ],
      "hu": [
        "Magyarország ötödik legnagyobb városa és Baranya vármegye székhelye.",
        "A Pécsi Tudományegyetemet 1367-ben alapították, az ország első egyetemeként.",
        "Az ókeresztény sírkamrák egyedülálló UNESCO világörökségi helyszínt jelentenek.",
        "A Zsolnay Porcelánmanufaktúra otthona, híres az eozin mázáról.",
        "A pécsi székesegyház lenyűgöző román stílusú építmény.",
        "A Zsolnay Kulturális Negyed a művészet és a design modern központja.",
        "Mediterrán éghajlatáról és a mecseki bortermelésről is ismert.",
        "Gázi Kászim pasa dzsámija a török hódoltság korának egyik legfontosabb emléke."
      ],
      "ro": [
        "Al cincilea oraș ca mărime din Ungaria și reședința județului Baranya.",
        "Universitatea din Pécs a fost fondată în 1367, fiind prima din Ungaria.",
        "Mormintele paleocreștine reprezintă un sit unic în patrimoniul UNESCO.",
        "Casa fabricii de porțelan Zsolnay, faimoasă pentru glazura sa de eozină.",
        "Catedrala din Pécs este o construcție romanică impresionantă.",
        "Cartierul Cultural Zsolnay este un centru modern pentru artă și design.",
        "Cunoscut pentru clima mediteraneană și viticultura de pe muntele Mecsek.",
        "Moscheea pașei Gazi Kasim este un vestigiu important al epocii otomane."
      ],
      "en": [
        "Fifth largest city in Hungary and the seat of Baranya County.",
        "The University of Pécs was founded in 1367 as the first university in Hungary.",
        "The Early Christian Necropolis is a unique UNESCO World Heritage site.",
        "Home to the Zsolnay Porcelain Manufactory, famous for its eosin glaze.",
        "Pécs Cathedral is an impressive Romanesque structure.",
        "The Zsolnay Cultural Quarter is a modern center for art and design.",
        "Known for its Mediterranean climate and viticulture on the Mecsek slopes.",
        "The Mosque of Pasha Qasim is a significant relic from the Ottoman era."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Pécs, die fünftgrößte Stadt Ungarns, liegt am Fuße des Mecsek-Gebirges und besticht durch ein mildes, fast mediterranes Flair. Als römische Siedlung Sopianae gegründet, blickt die Stadt auf eine über 2000-jährige Geschichte zurück, deren Zeugnisse in den zum UNESCO-Welterbe gehörenden frühchristlichen Grabkammern zu finden sind. Die Stadt ist ein Schmelztiegel der Kulturen, was sich in der ehemaligen Moschee von Pascha Jakowali Hassan und der prächtigen Kathedrale widerspiegelt. Bekannt als Stadt der Kunst und Bildung, beherbergt Pécs die älteste Universität des Landes sowie das weltberühmte Zsolnay-Kulturviertel. Im Jahr 2010 trug Pécs stolz den Titel der Kulturhauptstadt Europas und zieht seither Besucher mit seiner lebendigen Atmosphäre und den vielen Festivals an.",
      "hu": "Pécs, a Mecsek-hegység lábánál fekvő mediterrán hangulatú nagyváros, Magyarország egyik leggazdagabb történelmi és kulturális örökséggel rendelkező települése. A rómaiak által Sopianae néven alapított város már a korai kereszténység idején fontos központ volt, amit a világörökség részét képező ókeresztény sírkamrák is tanúsítanak. Pécs egyedülállóságát a különböző kultúrák rétegződése adja: a római falak felett gótikus székesegyház, a török hódoltság korából pedig mecsetek és minaretek maradtak fenn. A város a művészetek otthona is, itt található a világhírű Zsolnay Porcelánmanufaktúra és a róla elnevezett kulturális negyed. 2010-ben Európa Kulturális Fővárosaként Pécs megmutatta a világnak pezsgő szellemi életét és modern építészeti értékeit.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Pécs ad otthont az UNESCO Világörökség részét képező ókeresztény sírkamráknak.",
        "Itt alapították Magyarország első egyetemét 1367-ben, Nagy Lajos király idején.",
        "A Zsolnay Kulturális Negyed az ország egyik legnagyobb iparművészeti és kulturális központja.",
        "A Gázi Kászim pasa dzsámija a legnagyobb Magyarországon fennmaradt oszmán építmény.",
        "Pécs híres a tüke-misztikumról és a Mecsek-oldal különleges, mediterrán mikroklímájáról."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siklos",
    type: "city",
    parent: "baranya",
    coords: [18.2975, 45.855],
    name: {"de": "Siklós", "hu": "Siklós", "ro": "Siklós", "en": "Siklós"},
    image: "/geo-images/hungary/siklos.webp",
    description: {"de": "Stadt in Südungarn, berühmt für ihre gut erhaltene Burg.", "hu": "Dél-magyarországi város, jól karbantartott váráról híres.", "ro": "Oraș în sudul Ungariei, faimos pentru castelul său bine conservat.", "en": "City in southern Hungary, famous for its well-preserved castle."},
    facts: {"de": ["Die Burg Siklós wurde im 13. Jahrhundert erbaut.", "Liegt in der Nähe der Weinregion Villány."], "hu": ["A siklósi vár a 13. században épült.", "A villányi borvidék közelében fekszik."], "ro": ["Castelul Siklós a fost construit în secolul al XIII-lea.", "Situat în apropierea regiunii viticole Villány."], "en": ["Siklós Castle was built in the 13th century.", "Located near the Villány wine region."]},
  
    descriptionAdvanced: {
      "de": "Siklós, im sonnigen Süden des Komitats Baranya gelegen, beherbergt eine der am besten erhaltenen mittelalterlichen Burgen Ungarns. Die Burg Siklós thront auf einer Anhöhe und bietet faszinierende Einblicke in die Renaissance-Architektur sowie eine reiche Ausstellung zur Geschichte der ungarischen Adelsfamilien. Die Stadt liegt im Herzen einer bedeutenden Weinregion und ist bekannt für ihre Gastfreundschaft und die Nähe zum Heilbad Harkány. Ein Spaziergang durch die historischen Räume der Burg führt Besucher vorbei an prachtvollen Kapellen und massiven Wehrtürmen. Siklós ist ein Ort, an dem die Geschichte lebendig wird und man die Ruhe der südungarischen Landschaft in vollen Zügen genießen kann.",
      "hu": "Siklós a Villányi-hegység déli lábánál fekvő történelmi város, amely leginkább monumentális és épségben maradt váráról ismert. A siklósi vár Magyarország egyik legjelentősebb erődítménye, amely a gótikától a barokkig számos építészeti stílust ötvöz, s falaiban ma interaktív kiállítások mutatják be a várúr és a várnép életét. A város vallási emlékei, mint a Malkocs bej dzsámi vagy a kegytemplom, a különböző kultúrák évszázados jelenlétét hirdetik. Siklós közvetlen szomszédságában található a harkányi gyógyfürdő és a villányi borvidék, így a település a pihenés és a gasztronómia kedvelőinek is ideális célpontja. A táj nyugalma és a történelmi falak varázsa egyedülálló élményt nyújt minden látogatónak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Siklós wurde bereits im 13. Jahrhundert gegründet.", "Sie ist eine der wenigen Burgen Ungarns, die nie vollständig zerstört wurden.", "Die Burg beherbergt eine prachtvolle Kapelle mit gotischen Elementen.", "In der Nähe befindet sich die berühmte Wallfahrtskirche von Máriagyűd."],
      "hu": [
        "A siklósi vár az ország egyik legépebben fennmaradt középkori vára.",
        "Itt forgatták a híres 'A Tenkes kapitánya' című magyar sorozat jelentős részét.",
        "A várban látható egy 15. századi gótikus kápolna, amelynek falfestményei világhírűek.",
        "A városban található Malkocs bej dzsámi elnyerte az Europa Nostra-díjat a példás felújításért.",
        "Siklós híres bortermeléséről is, amely a Villányi borvidék szerves része."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mohacs",
    type: "city",
    parent: "baranya",
    coords: [18.6814, 45.9956],
    name: {"de": "Mohatsch", "hu": "Mohács", "ro": "Mohács", "en": "Mohács"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Stadt an der Donau, bekannt für die Schlacht von Mohács und das Busójárás-Festival.", "hu": "Duna-parti város, a mohácsi vészről és a busójárásról ismert.", "ro": "Oraș pe Dunăre, cunoscut pentru Bătălia de la Mohács și festivalul Busójárás.", "en": "City on the Danube, known for the Battle of Mohács and the Busójárás festival."},
    facts: {"de": ["Schauplatz der Schlacht von Mohács 1526.", "Das Busójárás ist UNESCO-Kulturerbe."], "hu": ["Az 1526-os mohácsi csata helyszíne.", "A busójárás UNESCO szellemi kulturális örökség."], "ro": ["Locul Bătăliei de la Mohács din 1526.", "Busójárás este patrimoniu cultural UNESCO."], "en": ["Site of the Battle of Mohács in 1526.", "The Busójárás is UNESCO cultural heritage."]},
  
    descriptionAdvanced: {
      "de": "Mohács, am Ufer der Donau gelegen, ist in der ungarischen Geschichte als Ort zweier schicksalhafter Schlachten gegen das Osmanische Reich bekannt. Heute ist die Stadt vor allem für das spektakuläre Busójárás-Festival berühmt, das zum immateriellen UNESCO-Kulturerbe gehört und jährlich das Ende des Winters feiert. Bei diesem Volksfest ziehen maskierte Gestalten mit furchterregenden Holzmasken und Schafsfellkostümen durch die Straßen, um böse Geister zu vertreiben. Mohács ist zudem ein bedeutender Donauhafen und ein kultureller Treffpunkt für Ungarn, Donauschwaben und Kroaten. Die Stadt bewahrt ein reiches Erbe an Volkskunst und traditioneller Architektur, das Besucher aus aller Welt anzieht.",
      "hu": "Mohács a Duna partján fekvő történelmi város, amelynek neve örökre összefonódott az 1526-os sorsdöntő csatával, amely a középkori magyar királyság bukását és a török hódoltság kezdetét jelentette. A város határában található Nemzeti Emlékhely lenyűgöző szobrai és tömegsírjai méltó emléket állítanak a hősöknek. Mohács azonban ma már nem csak a gyászról szól: a város világhírű népünnepélye, a Busójárás, az UNESCO szellemi örökség része, amely minden évben ezreket vonz a télbúcsúztató álarcos forgataggal. A Duna-parti város pezsgő kulturális életet, modern múzeumokat és a folyó menti ártéri erdők nyugalmát kínálja az idelátogatóknak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Busójárás-Festival in Mohács ist Teil des UNESCO-Weltkulturerbes.", "Die Schlacht von Mohács im Jahr 1526 markierte den Beginn der Türkenherrschaft in Ungarn.", "Die Gedenkstätte der Schlacht von Mohács erinnert an den heldenhaften Kampf der Soldaten.", "Die Stadt ist bekannt für ihre lebendige Keramik- und Töpfertradition."],
      "hu": [
        "Mohács híres a Busójárásról, amely 2009-ben került fel az UNESCO világörökségi listájára.",
        "Az 1526-os csata helyszínén 1976-ban nyílt meg a monumentális Nemzeti Emlékhely.",
        "A város központjában áll a Fogadalmi Templom, amely a csata 400. évfordulójára épült.",
        "Mohácson található a Busóudvar, ahol az év minden napján megismerhető a busóhagyomány.",
        "A város fontos Duna-menti határkikötő Magyarország és Horvátország között."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "villany",
    type: "city",
    parent: "baranya",
    coords: [18.4547, 45.8694],
    name: {"de": "Wieland", "hu": "Villány", "ro": "Villány", "en": "Villány"},    description: {"de": "Zentrum einer der berühmtesten Rotweinregionen Ungarns.", "hu": "Magyarország egyik leghíresebb vörösborvidékének központja.", "ro": "Centrul uneia dintre cele mai faimoase regiuni de vin roșu din Ungaria.", "en": "Center of one of Hungary's most famous red wine regions."},
    facts: {"de": ["Bekannt für vollmundige Rotweine.", "Beliebtes Ziel für Weintourismus."], "hu": ["Testes vörösborairól ismert.", "Népszerű borturisztikai célpont."], "ro": ["Cunoscut pentru vinurile roșii corpolente.", "Destinație populară pentru turismul viticol."], "en": ["Known for full-bodied red wines.", "Popular destination for wine tourism."]},
    image: "/poi-images/villany.webp",
  
    descriptionAdvanced: {
      "de": "Villány gilt als die ",
      "hu": "Villány Magyarország egyik legdélebbi és leghíresebb borvidékének központja, amelyet a 'vörösborok városa'-ként ismernek világszerte. A település arculatát a történelmi pincesor, a rendezett szőlőültetvények és a mediterrán jellegű éghajlat határozza meg, amely kiváló feltételeket biztosít a testes vörösborok, mint a Cabernet vagy a Franc számára. Villány nemcsak a borászatról szól, hanem a minőségi gasztronómiáról és a borkultúrához kapcsolódó fesztiválokról is, amelyek minden évben tömegeket vonzanak. A város környéki dombok kiváló túrázási lehetőségeket kínálnak, míg a helyi borászok vendégszeretete és a pincék hűvös nyugalma felejthetetlen élményt nyújt a kikapcsolódni vágyóknak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Villány ist die südlichste und wärmste Weinregion Ungarns.", "Die Region ist berühmt für ihre vollmundigen Rotweine aus der Cabernet Franc Traube.", "Die Weinstraße von Villány-Siklós war die erste ihrer Art in Ungarn.", "Jährlich im Herbst findet in Villány ein großes Rotweinfestival statt."],
      "hu": [
        "Villány volt az ország első borvidéke, amely bevezette a védett eredetű borok rendszerét.",
        "A történelmi pincesor házai műemléki védettség alatt állnak.",
        "Itt rendezik meg minden évben a Villányi Vörösbor Fesztivált, a régió legnagyobb ünnepét.",
        "A villányi borok rendszeresen nyernek aranyérmeket a legfontosabb nemzetközi borversenyeken.",
        "A város határában található a Szársomlyó-hegy, amely különleges és ritka növényvilágáról híres."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kecskemet",
    type: "city",
    parent: "bacs-kiskun",
    coords: [19.6913, 46.9062],
    name: {"de": "Kecskemét", "hu": "Kecskemét", "ro": "Kecskemét", "en": "Kecskemét"},
    image: "/geo-images/hungary/kecskemet.webp",
    description: {
      "de": "Kecskemét, im Herzen der ungarischen Tiefebene gelegen, ist berühmt für seine prächtige Jugendstilarchitektur und seine Obstgärten. Die Stadt ist der Geburtsort des Kompunisten Zoltán Kodály und beherbergt das renommierte Kodály-Institut. Das Stadtbild wird von farbenfrohen Gebäuden wie dem Cifra-Palast und dem Rathaus geprägt. Kecskemét ist zudem weltbekannt für seinen Aprikosenschnaps (Barackpálinka) und ist ein wichtiges Zentrum der ungarischen Lebensmittelindustrie und Automobilproduktion.",
      "hu": "Kecskemét, az Alföld szívében fekvő város, híres pompás szecessziós építészetéről és gyümölcsöskertjeiről. A város Kodály Zoltán zeneszerző szülőhelye, és itt található a neves Kodály Intézet is. A városképet olyan színes épületek határozzák meg, mint a Cifra Palota és a Városháza. Kecskemét világszerte ismert a barackpálinkájáról, emellett a magyar élelmiszeripar és autógyártás egyik meghatározó központja.",
      "ro": "Kecskemét, situat în inima Marii Câmpii Maghiare, este renumit pentru arhitectura sa Art Nouveau magnifică și livezile sale. Orașul este locul de naștere al compozitorului Zoltán Kodály și găzduiește renumitul Institut Kodály. Aspectul orașului este definit de clădiri colorate precum Palatul Cifra și Primăria. Kecskemét este, de asemenea, cunoscut în întreaga lume pentru rachiul său de caise (Barackpálinka) și este un centru important al industriei alimentare și al producției auto.",
      "en": "Kecskemét, located in the heart of the Great Hungarian Plain, is famous for its magnificent Art Nouveau architecture and its orchards. The city is the birthplace of composer Zoltán Kodály and home to the renowned Kodály Institute. The cityscape is defined by colorful buildings such as the Cifra Palace and the City Hall. Kecskemét is world-famous for its apricot brandy (Barackpálinka) and is a major center for the Hungarian food industry and automotive production."
    },
    facts: {
      "de": [
        "Achtgrößte Stadt Ungarns und Sitz des Komitats Bács-Kiskun.",
        "Der Cifra-Palast ist ein Meisterwerk des ungarischen Jugendstils.",
        "Heimat des Mercedes-Benz Werks in Ungarn.",
        "Das Kodály-Institut ist ein weltweit anerkanntes Zentrum für Musikpädagogik.",
        "Die Stadt veranstaltet regelmäßig das Animationsfilmfestival KAFF.",
        "Bekannt für den großen Marktplatz und die vielfältigen Kirchen.",
        "Wichtiges Zentrum für den Anbau von Obst und Gemüse in der Tiefebene.",
        "Berühmt für den Kecskeméter Aprikosenschnaps (Barackpálinka)."
      ],
      "hu": [
        "Magyarország nyolcadik legnagyobb városa és Bács-Kiskun vármegye székhelye.",
        "Híres a kecskeméti barackpálinkáról.",
        "A Cifra Palota a magyar szecessziós építészet remekműve.",
        "Itt található a Mercedes-Benz magyarországi gyára.",
        "A Kodály Intézet világszerte elismert zenepedagógiai központ.",
        "A város rendszeresen otthont ad a KAFF animációs filmfesztiválnak.",
        "Ismert a tágas főteréről és változatos templomairól.",
        "Az alföldi zöldség- és gyümölcstermesztés egyik legfontosabb központja."
      ],
      "ro": [
        "Al optulea oraș ca mărime din Ungaria și reședința județului Bács-Kiskun.",
        "Faimos pentru rachiul de caise de Kecskemét (Barackpálinka).",
        "Palatul Cifra este o capodoperă a stilului Art Nouveau maghiar.",
        "Găzduiește fabrica Mercedes-Benz din Ungaria.",
        "Institutul Kodály este un centru de pedagogie muzicală recunoscut mondial.",
        "Orașul găzduiește regulat festivalul de film de animație KAFF.",
        "Cunoscut pentru piața sa centrală mare și bisericile diverse.",
        "Centru important pentru cultivarea fructelor și legumelor în Câmpia Maghiară."
      ],
      "en": [
        "Eighth largest city in Hungary and the seat of Bács-Kiskun County.",
        "Famous for the Kecskemét apricot brandy (Barackpálinka).",
        "The Cifra Palace is a masterpiece of Hungarian Art Nouveau architecture.",
        "Home to the Mercedes-Benz plant in Hungary.",
        "The Kodály Institute is a world-renowned center for music education.",
        "The city regularly hosts the KAFF animation film festival.",
        "Known for its spacious main square and diverse churches.",
        "A major center for fruit and vegetable cultivation in the Great Plain."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Kecskemét, bekannt als die ",
      "hu": "Kecskemét, a 'hírös város' az Alföld szívében, Bács-Kiskun vármegye székhelye, amely lenyűgöző szecessziós építészetéről és gazdag kulturális életéről híres. A város főtere egyedülálló építészeti együttes, ahol a Cifrapalota színes kerámiái és a Városháza monumentális tömbje varázsolja el a látogatókat. Kecskemét a magyar zenei nevelés és képzőművészet egyik központja, Kodály Zoltán szülővárosaként világszerte ismerik a Kodály-módszert. A város környéke, a Kiskunság pusztai világa és a híres kecskeméti barackpálinka a magyar hagyományok legjavát kínálja. Kecskemét ma modern ipari központ is, ahol a hagyomány és a csúcstechnológia harmonikusan él egymás mellett.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Rathaus von Kecskemét besitzt ein Glockenspiel, das klassische Melodien spielt.", "Die Stadt beherbergt das Museum für Ungarische Naive Kunst.", "Kecskemét ist das Zentrum der ungarischen Obstverarbeitung und Pálinka-Herstellung.", "Der Cifrapalota ist ein Meisterwerk des ungarischen Jugendstils."],
      "hu": [
        "Kecskemét Városházája a magyar szecesszió egyik legszebb alkotása, Lechner Ödön tervezte.",
        "A Cifrapalota homlokzatát a pécsi Zsolnay-gyár színes majolikái díszítik.",
        "Itt született Kodály Zoltán, a világhírű zeneszerző és zenepedagógus.",
        "Kecskemét híres a baracktermesztéséről és a világszerte elismert kecskeméti barackpálinkáról.",
        "A várostól nem messze található a Kiskunsági Nemzeti Park, az ország egyik legfontosabb természetvédelmi területe."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kalocsa",
    type: "city",
    parent: "bacs-kiskun",
    coords: [18.9803, 46.5297],
    name: {"de": "Kollotschau", "hu": "Kalocsa", "ro": "Kalocsa", "en": "Kalocsa"},
    image: "/geo-images/hungary/kalocsa.webp",
    description: {"de": "Eine der ältesten Städte Ungarns, berühmt für Paprika und Volkskunst.", "hu": "Magyarország egyik legrégebbi városa, híres a paprikáról és a népművészetről.", "ro": "Unul dintre cele mai vechi orașe din Ungaria, faimos pentru boia și arta populară.", "en": "One of the oldest cities in Hungary, famous for paprika and folk art."},
    facts: {"de": ["Zentrum des ungarischen Paprikaanbaus.", "Sitz eines Erzbistums."], "hu": ["A magyar paprikatermesztés központja.", "Érseki székhely."], "ro": ["Centrul cultivării boielei maghiare.", "Sediul unei arhiepiscopii."], "en": ["Center of Hungarian paprika cultivation.", "Seat of an archbishopric."]},
  
    descriptionAdvanced: {
      "de": "Kalocsa, eine der ältesten Städte Ungarns am linken Ufer der Donau, ist weltberühmt für zwei Dinge: Paprika und Stickereien. Die Stadt ist ein bedeutender Erzbischofssitz mit einer prachtvollen barocken Kathedrale und einer wertvollen Diözesanbibliothek. Besucher können im Paprikamuseum alles über den Anbau und die Verarbeitung des ",
      "hu": "Kalocsa Magyarország egyik legrégebbi városa a Duna mentén, amely több mint ezer éve az ország egyik legfontosabb vallási és kulturális központja. Az érseki székhely monumentális Főszékesegyháza és az Érseki Palota könyvtára felbecsülhetetlen értékeket őriz. Kalocsa azonban nemcsak a hitről, hanem a színekről is szól: világhírű a kalocsai fűszerpaprika, amely az ország 'piros aranya', valamint a színpompás kalocsai hímzés és falpingálás, amely az UNESCO szellemi örökség része. A városban sétálva lépten-nyomon találkozhatunk a népművészet élő hagyományaival és a pusztai vendégszeretettel, ami Kalocsát a magyar identitás egyik legfontosabb őrzőhelyévé teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kalocsa ist seit der Zeit des Heiligen Stephan ein bedeutender Erzbischofssitz.", "Die Stadt gilt als die 'Hauptstadt des Paprikas' in Ungarn.", "Die Kalocsaer Volkskunst mit ihren bunten Blumenmustern ist weltweit bekannt.", "In der Stadt befindet sich ein einzigartiges Porzellanmuseum."],
      "hu": [
        "Kalocsa az ország egyik legrégebbi püspöksége, amelyet Szent István király alapított 1001-ben.",
        "A kalocsai népművészet (hímzés, pingálás) 2012-ben került fel az UNESCO szellemi örökség listájára.",
        "Itt található a Paprika Múzeum, amely bemutatja a kalocsai paprika termesztésének történetét.",
        "Az Érseki Könyvtárban látható egy 11. századi Biblia és számos középkori kódex.",
        "A város híres rendezvénye a Kalocsai Paprikafesztivál, amelyet minden ősszel megtartanak."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kiskunmajsa",
    type: "city",
    parent: "bacs-kiskun",
    coords: [19.7381, 46.4919],
    name: {"de": "Kiskunmajsa", "hu": "Kiskunmajsa", "ro": "Kiskunmajsa", "en": "Kiskunmajsa"},
    image: "/geo-images/hungary/kiskunmajsa.webp",
    description: {"de": "Kleinstadt in der Großen Tiefebene, bekannt für ihr Thermalbad.", "hu": "Alföldi kisváros, termálfürdőjéről ismert.", "ro": "Mic oraș în Marea Câmpie, cunoscut pentru baia sa termală.", "en": "Small town in the Great Plain, known for its thermal bath."},
    facts: {"de": ["Beliebtes Ziel für Kururlauber.", "Liegt in der Region Kiskunság."], "hu": ["Népszerű célpont a gyógyulni vágyók körében.", "A Kiskunság régióban fekszik."], "ro": ["Destinație populară pentru turiștii de spa.", "Situat în regiunea Kiskunság."], "en": ["Popular destination for spa tourists.", "Located in the Kiskunság region."]},
  
    descriptionAdvanced: {
      "de": "Kiskunmajsa ist ein aufstrebender Kurort in der ungarischen Tiefebene, bekannt für sein weitläufiges Jonathermál Heil- und Erlebnisbad. Das Thermalwasser der Region wurde in den 1980er Jahren entdeckt und zieht seither Erholungssuchende an, die Linderung bei Gelenk- und Wirbelsäulenbeschwerden suchen. Die Stadt bewahrt zudem das Erbe der ungarischen Revolution von 1956 in einem beeindruckenden Gedenkmuseum, das landesweit einzigartig ist. Die umliegende Puszta-Landschaft lädt zu ausgiebigen Ausritten und Kutschfahrten ein, die die ursprüngliche Lebensweise der Kiskunság-Region vermitteln. Kiskunmajsa bietet eine ideale Kombination aus gesundheitlicher Erholung, historischem Gedenken und Naturerlebnis.",
      "hu": "Kiskunmajsa a Kiskunság szívében fekvő dinamikus fürdőváros, amely leginkább a Jonathermál Gyógy- és Élményfürdőjéről ismert. A város turizmusa a feltörő gyógyvízre épül, amely kiválóan alkalmas mozgásszervi és reumás panaszok enyhítésére, s tágas medencéivel a családok kedvelt üdülőhelye. Kiskunmajsa azonban történelmi emlékezetében is jelentős: itt található az ország egyetlen 1956-os Múzeuma, amely a forradalom és szabadságharc vidéki eseményeinek állít emléket. A város határában a pusztai táj nyugalma, az ősborókás és a hagyományos tanyasi világ várja a természet és a nyugalom kedvelőit. Kiskunmajsa a gyógyulás, a pihenés és a történelmi emlékezet különleges találkozóhelye az Alföldön.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Jonathermál-Bad in Kiskunmajsa ist für seine familienfreundliche Atmosphäre bekannt.", "Die Stadt beherbergt das einzige 1956er Revolutionsmuseum auf dem Land in Ungarn.", "In der Umgebung befinden sich geschützte Salzseen mit einer seltenen Flora und Fauna.", "Kiskunmajsa ist ein wichtiges Zentrum für den ländlichen Tourismus in der Tiefebene."],
      "hu": [
        "A kiskunmajsai gyógyvíz 72 fokos hőmérsékleten tör fel a föld mélyéből.",
        "Az 1956-os Múzeumot Pongrátz Gergely, a forradalom egyik hőse alapította a városban.",
        "A római katolikus templom barokk épülete a város egyik legszebb műemléke.",
        "Kiskunmajsa híres a sörfesztiváljáról és a hagyományos pusztai lovasnapokról.",
        "A város határában található kiterjedt erdők és szikes tavak gazdag madárvilágnak adnak otthont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bekescsaba",
    type: "city",
    parent: "bekes",
    coords: [21.0978, 46.6797],
    name: {"de": "Tschaba", "hu": "Békéscsaba", "ro": "Bichișciaba", "en": "Békéscsaba"},
    image: "/geo-images/hungary/bekescsaba.webp",
    description: {
      "de": "Békéscsaba, im Südosten Ungarns gelegen, ist weltberühmt für seine kulinarischen Traditionen, insbesondere für die Csabai-Wurst. Die Stadt ist das kulturelle Zentrum der slowakischen Minderheit in Ungarn und besticht durch ihre ruhige Atmosphäre und die weiten Plätze. Besucher können das Munkácsy-Mihály-Museum besuchen, das dem berühmten ungarischen Maler gewidmet ist, oder das jährliche Wurstfestival erleben, das Tausende von Gästen anzieht. Die Umgebung bietet zudem ideale Bedingungen für Landwirtschaft und Naturtourismus.",
      "hu": "Békéscsaba, Magyarország délkeleti részén fekszik, és világszerte híres gasztronómiai hagyományairól, különösen a csabai kolbászról. A város a magyarországi szlovák kisebbség kulturális központja, amely nyugodt hangulatával és tágas tereivel vonzza a látogatókat. A látogatók megtekinthetik a Munkácsy Mihály Múzeumot, amely a híres festőművész emlékét őrzi, vagy ellátogathatnak az évente megrendezett Kolbászfesztiválra. A környék emellett kiváló feltételeket kínál a mezőgazdaság és a természetjárás számára.",
      "ro": "Békéscsaba, situat în sud-estul Ungariei, este renumit în întreaga lume pentru tradițiile sale culinare, în special pentru cârnatul Csabai. Orașul este centrul cultural al minorității slovace din Ungaria și impresionează prin atmosfera sa liniștită și piețele largi. Vizitatorii pot vizita Muzeul Munkácsy Mihály, dedicat faimosului pictor maghiar, sau pot experimenta festivalul anual al cârnaților, care atrage mii de oaspeți. Împrejurimile oferă, de asemenea, condiții ideale pentru agricultură și turism în natură.",
      "en": "Békéscsaba, located in southeastern Hungary, is world-famous for its culinary traditions, particularly the Csabai sausage. The city serves as the cultural center for the Slovak minority in Hungary and charms visitors with its peaceful atmosphere and wide squares. Visitors can explore the Munkácsy Mihály Museum, dedicated to the famous Hungarian painter, or experience the annual Sausage Festival, which attracts thousands of guests. The surrounding area also offers excellent conditions for agriculture and nature tourism."
    },
    facts: {
      "de": [
        "Sitz des Komitats Békés.",
        "Heimat der Csabai-Wurst, eines Hungarikums.",
        "Das Békéscsabaer Wurstfestival ist eines der größten kulinarischen Events Ungarns.",
        "Das Munkácsy-Mihály-Museum beherbergt die weltweit größte Sammlung seiner Werke.",
        "Wichtiges Zentrum der slowakischen Kultur in Ungarn.",
        "Die Stadt hat eine der größten evangelischen Kirchen Mitteleuropas.",
        "Bekannt für die Textilindustrie und Lebensmittelverarbeitung.",
        "Beliebtes Ziel für Radtouristen in der flachen Tiefebene."
      ],
      "hu": [
        "Békés vármegye székhelye.",
        "A csabai kolbász, mint Hungarikum hazája.",
        "A Csabai Kolbászfesztivál Magyarország egyik legnagyobb gasztronómiai eseménye.",
        "A Munkácsy Mihály Múzeum őrzi a festőművész legnagyobb gyűjteményét a világon.",
        "A magyarországi szlovák kultúra fontos központja.",
        "Itt található Közép-Európa egyik legnagyobb evangélikus temploma.",
        "Híres a textiliparáról és az élelmiszer-feldolgozásáról.",
        "Népszerű úti cél a kerékpáros turisták számára az Alföldön."
      ],
      "ro": [
        "Reședința județului Békés.",
        "Casa cârnatului Csabai, un produs de tip 'Hungarikum'.",
        "Festivalul Cârnaților din Békéscsaba este unul dintre cele mai mari evenimente culinare.",
        "Muzeul Munkácsy Mihály găzduiește cea mai mare colecție a operelor sale din lume.",
        "Centru important al culturii slovace din Ungaria.",
        "Orașul are una dintre cele mai mari biserici evanghelice din Europa Centrală.",
        "Cunoscut pentru industria textilă și prelucrarea alimentelor.",
        "Destinație populară pentru cicloturiști în zona de câmpie."
      ],
      "en": [
        "Seat of Békés County.",
        "Home of the Csabai sausage, a designated 'Hungarikum'.",
        "The Békéscsaba Sausage Festival is one of Hungary's largest culinary events.",
        "The Munkácsy Mihály Museum houses the world's largest collection of his works.",
        "A major center for Slovak culture in Hungary.",
        "The city features one of the largest Lutheran churches in Central Europe.",
        "Known for its textile industry and food processing.",
        "A popular destination for cycling tourists in the flat Great Plain."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Békéscsaba, das Zentrum des Komitats Békés, ist weit über Ungarn hinaus für seine kulinarischen Traditionen bekannt, insbesondere für die berühmte Békéscsabaer Wurst. Die Stadt blickt auf eine reiche Geschichte zurück, die eng mit der Ansiedlung slowakischer Kolonisten im 18. Jahrhundert verbunden ist, was sich noch heute in der Kultur und Architektur widerspiegelt. Das Munkácsy-Museum würdigt das Werk des weltberühmten Malers Mihály Munkácsy, der seine Jugend in der Stadt verbrachte. Jährlich im Herbst lockt das Wurstfestival Zehntausende Besucher an, die die gastronomische Vielfalt der Region feiern. Békéscsaba ist zudem eine Stadt der Brücken, da der idyllische Élővíz-Kanal das gesamte Stadtzentrum durchzieht und zu entspannten Spaziergängen einlädt.",
      "hu": "Békéscsaba az Alföld délkeleti részén fekvő város, Békés vármegye székhelye, amely leginkább világhírű kolbászáról és gazdag evangélikus hagyományairól ismert. A város arculatát a 18. században ide települt szlovákok kultúrája és a polgári fejlődés határozta meg, amit az impozáns evangélikus Nagytemplom – Közép-Európa legnagyobb evangélikus temploma – is hirdet. Békéscsaba a magyar gasztronómia egyik fellegvára, a minden évben megrendezett Csabai Kolbászfesztivál az ország egyik legnagyobb turisztikai eseménye. A város kulturális életét a Munkácsy Mihály Múzeum és a Jókai Színház teszi teljessé, míg a környező folyók és erdők kiváló lehetőséget adnak a természetközeli kikapcsolódásra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Békéscsabaer Wurstfestival ist eines der größten gastronomischen Ereignisse Mitteleuropas.", "Die evangelische Kirche von Békéscsaba ist die größte ihrer Art in ganz Ungarn.", "Der Maler Mihály Munkácsy verbrachte hier seine prägenden Jahre.", "Die Stadt ist bekannt für ihre erstklassige Geflügelzucht und landwirtschaftlichen Produkte."],
      "hu": [
        "A békéscsabai evangélikus Nagytemplom Magyarország és Közép-Európa legnagyobb ilyen felekezetű temploma.",
        "A Csabai kolbász 2013 óta Hungarikum minősítéssel rendelkezik.",
        "Munkácsy Mihály, a világhírű festőművész itt töltötte asztalosinas éveit, s a múzeum őrzi hagyatékát.",
        "A város híres szülötte Kodály Zoltán és Arany János barátja, a festő Pósteleki kastély is a közelben van.",
        "Békéscsaba az ország egyik legfontosabb röplabda- és sportközpontja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyula",
    type: "city",
    parent: "bekes",
    coords: [21.2811, 46.6447],
    name: {"de": "Jula", "hu": "Gyula", "ro": "Jula", "en": "Gyula"},
    image: "/geo-images/hungary/gyula.webp",
    description: {"de": "Historische Kurstadt nahe der rumänischen Grenze.", "hu": "Történelmi fürdőváros a román határ közelében.", "ro": "Oraș balnear istoric aproape de granița cu România.", "en": "Historic spa town near the Romanian border."},
    facts: {"de": ["Bekannt für das Burgbad.", "Die Burg Gyula ist die einzige intakte Ziegelburg Mitteleuropas."], "hu": ["A Várfürdőről ismert.", "A gyulai vár Közép-Európa egyetlen épen maradt téglavára."], "ro": ["Cunoscut pentru Baia Cetății.", "Cetatea Gyula este singura cetate de cărămidă intactă din Europa Centrală."], "en": ["Known for the Castle Bath.", "Gyula Castle is the only intact brick castle in Central Europe."]},
  
    descriptionAdvanced: {
      "de": "Gyula, an der Grenze zu Rumänien im Südosten Ungarns gelegen, ist eine Stadt von historischer Eleganz und heilender Kraft. Das Wahrzeichen der Stadt ist die einzige vollständig erhaltene mittelalterliche Backsteinburg in ganz Mitteleuropa, die am Ufer eines idyllischen Sees thront. Direkt neben der Burg befindet sich das Gyulaer Burgbad, eines der schönsten Heilbäder Ungarns, das in dem weitläufigen Park des einstigen Almásy-Schlosses angelegt wurde. Das Almásy-Schloss selbst ist heute ein interaktives Besucherzentrum, das faszinierende Einblicke in das Leben des ungarischen Adels und ihrer Bediensteten bietet. Gyula ist zudem die Geburtsstadt des Komponisten Ferenc Erkel, dem Schöpfer der ungarischen Nationalhymne, dessen Erbe in der ganzen Stadt gepflegt wird.",
      "hu": "Gyula a dél-alföldi régió egyik legszebb és leglátogatottabb történelmi városa, amely különleges középkori hangulatával és világhírű várfürdőjével bűvöli el a látogatókat. A város ékköve a gyulai vár, amely Közép-Európa egyetlen épségben maradt gótikus síkvára, s falaiban ma várjátékok és múzeum repít vissza a múltba. Közvetlenül a vár mellett terül el az egykori Almásy-kastély parkjában a Gyulai Várfürdő, amely gyógyvize és modern élménymedencéi révén az ország egyik legnépszerűbb pihenőhelye. Gyula rendezett parkjai, szökőkútjai és híres cukrászdái (mint a Százéves cukrászda) a békebeli kisvárosi eleganciát ötvözik a modern turisztikai kínálattal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Gyula ist die am besten erhaltene gotische Backsteinburg in Mitteleuropa.", "Das Burgbad verfügt über ein einzigartiges Heilwasser mit hohem Mineralstoffgehalt.", "In Gyula wurde Ferenc Erkel, der Komponist der ungarischen Nationalhymne, geboren.", "Das 'Hundertjährige Kaffeehaus' der Stadt ist eine der ältesten Konditoreien Ungarns."],
      "hu": [
        "A gyulai vár 24 szobából álló múzeuma a 15. századi végvári életet mutatja be.",
        "A Gyulai Várfürdő az Almásy-kastély 8,5 hektáros természetvédelmi parkjában található.",
        "Itt található Magyarország második legrégebbi cukrászdája, a híres Százéves cukrászda.",
        "Gyula híres szülötte Erkel Ferenc, a magyar nemzeti opera megteremtője és a Himnusz zeneszerzője.",
        "A várost átszeli az Élővíz-csatorna, amely hangulatos sétányokat és csónakázási lehetőséget biztosít."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szarvas",
    type: "city",
    parent: "bekes",
    coords: [20.55, 46.8667],
    name: {"de": "Szarvas", "hu": "Szarvas", "ro": "Szarvas", "en": "Szarvas"},
    image: "/geo-images/hungary/szarvas.webp",
    description: {"de": "Stadt am Fluss Körös, bekannt für ihr Arboretum.", "hu": "Körös-parti város, arborétumáról ismert.", "ro": "Oraș pe râul Körös, cunoscut pentru arboretul său.", "en": "City on the Körös river, known for its arboretum."},
    facts: {"de": ["Das Arboretum Szarvas ist das größte in Ungarn.", "Hier befindet sich das geografische Zentrum des historischen Ungarns."], "hu": ["A Szarvasi Arborétum a legnagyobb Magyarországon.", "Itt található a történelmi Magyarország földrajzi középpontja."], "ro": ["Arboretul Szarvas este cel mai mare din Ungaria.", "Aici se află centrul geografic al Ungariei istorice."], "en": ["The Szarvas Arboretum is the largest in Hungary.", "The geographical center of historical Hungary is located here."]},
  
    descriptionAdvanced: {
      "de": "Szarvas, im Herzen der ungarischen Tiefebene am Ufer der Körös gelegen, ist ein Juwel der Natur und Bildung. Die Stadt beherbergt das Pepi-Garten-Arboretum, einen der bedeutendsten botanischen Gärten des Landes mit einer beeindruckenden Vielfalt an seltenen Pflanzenarten aus aller Welt. Inmitten des Arboretums befindet sich das Mini-Ungarn-Modellpark, in dem man die wichtigsten Sehenswürdigkeiten des historischen Ungarns im Miniaturformat bewundern kann. Szarvas markiert zudem den geografischen Mittelpunkt des historischen Königreichs Ungarn, an den ein markantes Denkmal in Form einer Windmühle erinnert. Die unberührten Ufer der Körös bieten ideale Bedingungen für Angler, Kanufahrer und Naturliebhaber, die die Ruhe der ungarischen Landschaft suchen.",
      "hu": "Szarvas a Hármas-Körös partján fekvő hangulatos kisváros, amelyet gyakran az Alföld ékköveként emlegetnek természeti szépségei és kulturális kincsei miatt. Legfontosabb látnivalója a Szarvasi Arborétum (Pepi-kert), Magyarország egyik legnagyobb és legszebb növénygyűjteménye, ahol több mint 1600 növényfaj található. Közvetlenül mellette fekszik a Mini Magyarország makettpark, amely interaktív módon mutatja be az ország legszebb épületeit. Szarvas történelmi jelentőségét adja, hogy itt található a történelmi Magyarország földrajzi középpontja is. A folyóparti sétányok, a vízi színház és a környező vizek vadregényes tájai Szarvast a természetjárók és a családosok egyik kedvenc magyarországi célpontjává teszik.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Arboretum von Szarvas (Pepi-Garten) beherbergt über 1.600 verschiedene Baumarten.", "Das Mini-Ungarn-Modellland zeigt über 50 detailgetreue Nachbildungen historischer Gebäude.", "Szarvas liegt am geografischen Mittelpunkt des einstigen Großungarns.", "Die Stadt ist ein wichtiges Zentrum für die Erforschung der Süßwasserfischerei."],
      "hu": [
        "A Szarvasi Arborétumot gróf Bolza Pál alapította a 19. század végén.",
        "Szarvason található a történelmi Magyarország földrajzi középpontját jelző emlékmű.",
        "A Szarvasi Vízi Színház az ország egyik leglátványosabb szabadtéri színpada a Holt-Körös partján.",
        "Itt működik az ország egyik legjelentősebb öntözési és haltenyésztési kutatóintézete.",
        "A Holt-Körös partján található Bolza-kastély a város egyik legszebb klasszicista épülete."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "miskolc",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [20.79, 48.1],
    name: {"de": "Mischkolz", "hu": "Miskolc", "ro": "Miskolc", "en": "Miskolc"},
    image: "/geo-images/hungary/miskolc.webp",
    description: {
      "de": "Miskolc, die viertgrößte Stadt Ungarns, liegt im Nordosten des Landes am östlichen Rand des Bükk-Gebirges. Die Stadt ist ein bedeutendes Industriezentrum, hat sich aber auch zu einem beliebten Touristenziel entwickelt. Besonders bekannt ist der Stadtteil Miskolctapolca mit seinem einzigartigen Höhlenbad, dessen Thermalwasser in natürlichen Kalksteinhöhlen fließt. Die historische Burg Diósgyőr und die malerische Umgebung von Lillafüred mit dem Hámori-See machen Miskolc zu einem vielseitigen Reiseziel.",
      "hu": "Miskolc, Magyarország negyedik legnagyobb városa, az ország északkeleti részén, a Bükk-hegység keleti lábánál fekszik. A város jelentős ipari központ, de az utóbbi időben népszerű turisztikai célponttá is vált. Különösen híres Miskolctapolca városrésze az egyedülálló Barlangfürdővel, ahol a termálvíz természetes mészkőbarlangokban folyik. A történelmi Diósgyőri vár és Lillafüred festői környéke a Hámori-tóval Miskolcot sokoldalú úti céllá teszi.",
      "ro": "Miskolc, al patrulea oraș ca mărime din Ungaria, este situat în nord-estul țării, la marginea estică a munților Bükk. Orașul este un centru industrial important, dar s-a dezvolat și ca o destinație turistică populară. Este deosebit de faimos cartierul Miskolctapolca cu baia sa unică în peșteră, unde apa termală curge în peșteri naturale de calcar. Cetatea istorică Diósgyőr și împrejurimile pitorești din Lillafüred, cu lacul Hámori, fac din Miskolc o destinație versatilă.",
      "en": "Miskolc, the fourth largest city in Hungary, is located in the northeastern part of the country at the eastern edge of the Bükk Mountains. While a major industrial center, the city has also evolved into a popular tourist destination. It is particularly famous for the Miskolctapolca district and its unique Cave Bath, where thermal water flows through natural limestone caverns. The historic Diósgyőr Castle and the picturesque area of Lillafüred with Lake Hámori make Miskolc a diverse travel destination."
    },
    facts: {
      "de": [
        "Viertgrößte Stadt Ungarns und Sitz des Komitats Borsod-Abaúj-Zemplén.",
        "Das Höhlenbad in Miskolctapolca ist europaweit einzigartig.",
        "Die Burg Diósgyőr war einst eine bedeutende Residenz ungarischer Königinnen.",
        "Lillafüred bietet einen der schönsten Wasserfälle und ein Schlosshotel.",
        "Die Universität Miskolc ist ein wichtiges Zentrum für Technik und Bergbau.",
        "Das Miskolcer Opernfestival ist ein bedeutendes kulturelles Ereignis.",
        "Das Bükk-Gebirge bietet zahlreiche Wanderwege und Höhlen in der Nähe.",
        "Die Stadt hat eine lange Tradition in der Schwerindustrie und Metallurgie."
      ],
      "hu": [
        "Magyarország negyedik legnagyobb városa és Borsod-Abaúj-Zemplén vármegye székhelye.",
        "A miskolctapolcai Barlangfürdő Európa-szerte egyedülálló látványosság.",
        "A Diósgyőri vár egykor a magyar királynék kedvelt rezidenciája volt.",
        "Lillafüred az ország egyik legszebb vízesésével és egy kastélyszállóval várja a látogatókat.",
        "A Miskolci Egyetem a műszaki és bányászati képzés fontos központja.",
        "A Miskolci Operafesztivál jelentős kulturális esemény a régióban.",
        "A Bükk-hegység számos túraútvonalat és barlangot kínál a közelben.",
        "A város hosszú múltra tekint vissza a nehézipar és a kohászat területén."
      ],
      "ro": [
        "Al patrulea oraș ca mărime din Ungaria și reședința județului Borsod-Abaúj-Zemplén.",
        "Baia în peșteră din Miskolctapolca este unică în Europa.",
        "Cetatea Diósgyőr a fost odată o reședință importantă a reginelor maghiare.",
        "Lillafüred oferă una dintre cele mai frumoase cascade și un hotel castel.",
        "Universitatea din Miskolc este un centru important pentru tehnică și minerit.",
        "Festivalul de Operă din Miskolc este un eveniment cultural semnificativ.",
        "Munții Bükk oferă numeroase trasee de drumeție și peșteri în apropiere.",
        "Orașul are o lungă tradiție în industria grea și metalurgie."
      ],
      "en": [
        "Fourth largest city in Hungary and the seat of Borsod-Abaúj-Zemplén County.",
        "The Cave Bath in Miskolctapolca is unique in Europe.",
        "Diósgyőr Castle was once a significant residence for Hungarian queens.",
        "Lillafüred features one of the most beautiful waterfalls and a castle hotel.",
        "The University of Miskolc is a major center for engineering and mining.",
        "The Miskolc Opera Festival is a prominent cultural event.",
        "The Bükk Mountains offer numerous hiking trails and caves nearby.",
        "The city has a long-standing tradition in heavy industry and metallurgy."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Miskolc, am östlichen Rand des Bükk-Gebirges gelegen, ist die viertgrößte Stadt Ungarns und ein Tor zu spektakulären Naturwundern. Die Stadt hat eine lange industrielle Tradition, wandelt sich aber zunehmend zu einem Zentrum für Tourismus und Kultur. Das absolute Highlight ist das Höhlenbad von Miskolctapolca, ein in Europa einzigartiges Thermalbad in natürlichen Höhlengängen. Ebenfalls sehenswert ist die mittelalterliche Burg Diósgyőr, die einst eine Lieblingsresidenz ungarischer Königinnen war und heute durch moderne Rekonstruktionen beeindruckt. Der Stadtteil Lillafüred mit seinem malerischen Hámori-See und den Wasserfällen gilt als einer der romantischsten Orte des Landes.",
      "hu": "Miskolc Magyarország egyik legnagyobb városa és Észak-Magyarország gazdasági, kulturális központja, amely a Bükk-hegység lábánál fekszik. A város arculatát az egykori nehézipar és a természeti kincsek különleges találkozása határozza meg. Legfontosabb turisztikai vonzereje a miskolctapolcai Barlangfürdő, ahol Európában egyedülálló módon természetes karsztjáratokban fürödhetnek a látogatók. Miskolchoz tartozik a festői Lillafüred a Palotaszállóval és a Hámori-tóval, valamint a középkori diósgyőri vár, amely a magyar királynék jegyajándéka volt. A város pezsgő kulturális életét a Miskolci Nemzeti Színház és a nemzetközi operafesztivál teszi teljessé, miközben a Bükk erdői a természetjárók paradicsomát kínálják.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Miskolctapolca beherbergt ein Thermalbad, das in einem natürlichen Höhlensystem angelegt wurde.", "Die Burg Diósgyőr war im Mittelalter traditionell der Witwensitz der ungarischen Königinnen.", "Der Stadtteil Lillafüred ist bekannt für seinen terrassenförmig angelegten Hängegarten und Wasserfälle.", "Das Nationale Theater von Miskolc war das erste Theatergebäude aus Stein im heutigen Ungarn."],
      "hu": [
        "Miskolctapolcán található Európa egyetlen természetes barlangfürdője.",
        "A diósgyőri vár volt a középkori Magyarország egyik legjelentősebb lovagvára.",
        "A Miskolci Nemzeti Színház az ország legrégebbi kőszínháza, 1823-ban nyílt meg.",
        "Lillafüreden található Magyarország legmagasabb függőleges vízesése (20 méter).",
        "Az avasi kilátóból lenyűgöző panoráma nyílik az egész városra és a Bükk vonulataira."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szerencs",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [21.2053, 48.1631],
    name: {"de": "Szerencs", "hu": "Szerencs", "ro": "Szerencs", "en": "Szerencs"},    description: {"de": "Das 'Tor zu Tokaj', bekannt für seine Schokoladenfabrik.", "hu": "A 'Tokaji kapu', csokoládégyáráról ismert.", "ro": "'Poarta către Tokaj', cunoscut pentru fabrica sa de ciocolată.", "en": "The 'Gateway to Tokaj', known for its chocolate factory."},
    facts: {"de": ["Hat eine Burg aus der Renaissancezeit.", "Traditionelle Zucker- und Schokoladenproduktion."], "hu": ["Reneszánsz kori várral rendelkezik.", "Hagyományos cukor- és csokoládégyártás."], "ro": ["Are un castel din perioada Renașterii.", "Producție tradițională de zahăr și ciocolată."], "en": ["Has a Renaissance-era castle.", "Traditional sugar and chocolate production."]},
    image: "/poi-images/szerencs.webp",
  
    descriptionAdvanced: {
      "de": "Szerencs gilt als das ",
      "hu": "Szerencs a Zempléni-hegység déli kapujánál fekvő történelmi város, amelyet gyakran a 'csokoládé városaként' is emlegetnek a nagy múltú édességgyártása miatt. A település legfontosabb műemléke a reneszánsz stílusú Rákóczi-vár, amely egykor a híres erdélyi fejedelmi család birtoka volt, s ma kulturális központként működik. A vár falai között kapott helyet a Zempléni Múzeum, amely világhírű képeslapgyűjteményéről és cukoripari kiállításáról nevezetes. Szerencs a Tokaji borvidék kapuja is, így a környék kiváló borai is hozzátartoznak a város kínálatához. A rendezett parkok, a várkert tava és a csokoládé illata egyedülálló, barátságos hangulatot kölcsönöz a településnek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szerencs war im 17. Jahrhundert ein wichtiger Stützpunkt der Rákóczi-Fürsten.", "Die Stadt ist landesweit bekannt für ihre historische Schokoladenproduktion.", "Jährlich findet in Szerencs das größte Schokoladenfestival Ungarns statt.", "Die Stadt dient als wichtiger Knotenpunkt und Eingangstor zur Weinregion Tokaj."],
      "hu": [
        "1605-ben a szerencsi várban választották Magyarország fejedelmévé Bocskai Istvánt.",
        "A Zempléni Múzeum képeslapgyűjteménye az egyik legnagyobb ilyen jellegű gyűjtemény a világon.",
        "Szerencsen működött évtizedekig az ország egyik legjelentősebb cukorgyára.",
        "A városban minden évben megrendezik az Országos Csokoládé Fesztivált.",
        "A Rákóczi-vár udvara kiváló akusztikája miatt népszerű koncerthelyszín."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tokaj",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [21.4108, 48.1225],
    name: {"de": "Tokaj", "hu": "Tokaj", "ro": "Tokaj", "en": "Tokaj"},
    image: "/geo-images/hungary/tokaj.webp",
    description: {"de": "Zentrum der historischen Weinregion Tokaj, berühmt für Süßweine.", "hu": "A történelmi Tokaji borvidék központja, édes borairól híres.", "ro": "Centrul regiunii viticole istorice Tokaj, faimos pentru vinurile dulci.", "en": "Center of the historic Tokaj wine region, famous for sweet wines."},
    facts: {"de": ["Die Weinregion ist UNESCO-Welterbe.", "Heimat des Tokaji Aszú."], "hu": ["A borvidék UNESCO világörökség.", "A Tokaji Aszú hazája."], "ro": ["Regiunea viticolă este în Patrimoniul Mondial UNESCO.", "Casa vinului Tokaji Aszú."], "en": ["The wine region is a UNESCO World Heritage site.", "Home of the Tokaji Aszú."]},
  
    descriptionAdvanced: {
      "de": "Tokaj ist das Herz und der Namensgeber der berühmtesten Weinregion Ungarns, die zum UNESCO-Weltkulturerbe gehört. Am Zusammenfluss von Theiß und Bodrog gelegen, herrscht hier ein besonderes Mikroklima, das die Produktion des edelsüßen ",
      "hu": "Tokaj a világ első zárt borvidékének névadó városa a Tisza és a Bodrog találkozásánál, a magyar borászat és kultúra egyik legfontosabb szimbóluma. A vulkanikus kopasz-hegy lábánál fekvő település hangulatos utcáival, patinás borospincéivel és a folyóparti panorámával varázsolja el a látogatókat. Tokaj világhírnevét a 'királyok borának' nevezett aszúnak köszönheti, amely a különleges mikroklíma és a vulkanikus talaj eredménye. A város 2002 óta az UNESCO Világörökség része mint kultúrtáj. A látogatókat a Világörökségi Bormúzeum, a neves pincészetek és a Bodrogon tehető hajótúrák várják, amelyek a minőségi pihenés és a nemes hagyományok élményét nyújtják.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Weinregion Tokaj wurde 2002 zum UNESCO-Weltkulturerbe erklärt.", "Der Tokaji Aszú wird oft als 'Wein der Könige und König der Weine' bezeichnet.", "Die Stadt liegt malerisch am Zusammenfluss der Flüsse Theiß und Bodrog.", "Die labyrinthartigen Weinkeller der Stadt erstrecken sich über viele Kilometer unter der Erde."],
      "hu": [
        "A Tokaji borvidék 1737 óta a világ első zárt borvidéke, az UNESCO világörökség része.",
        "Itt készül a világhírű Tokaji Aszú, amelyet XIV. Lajos a 'borok királyának' nevezett.",
        "A város alatt kiterjedt, évszázados pincebirodalom húzódik, ahol a nemespenész borítja a falakat.",
        "Tokajnál találkozik a Bodrog és a Tisza folyó, ami népszerű horgász- és vízitúra-helyszín.",
        "A Bodrog-parti sétányról látható a Tokaji-hegy, amely a borvidék szimbolikus központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "aggtelek",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.4547, 48.4719],
    name: {"de": "Aggtelek", "hu": "Aggtelek", "ro": "Aggtelek", "en": "Aggtelek"},    description: {"de": "Nationalpark, berühmt für sein ausgedehntes Tropfsteinhöhlensystem.", "hu": "Nemzeti park, kiterjedt cseppkőbarlang-rendszeréről híres.", "ro": "Parc național, faimos pentru sistemul său extins de peșteri cu stalactite.", "en": "National park, famous for its extensive stalactite cave system."},
    facts: {"de": ["Die Baradla-Höhle ist Teil des UNESCO-Welterbes.", "Erstreckt sich über die Grenze zur Slowakei."], "hu": ["A Baradla-barlang az UNESCO világörökség része.", "Átnyúlik a szlovák határon."], "ro": ["Peștera Baradla este parte a Patrimoniului Mondial UNESCO.", "Se extinde peste granița cu Slovacia."], "en": ["The Baradla Cave is part of the UNESCO World Heritage site.", "Extends across the border into Slovakia."]},
    image: "/poi-images/aggtelek.webp",
  
    descriptionAdvanced: {
      "de": "Aggtelek ist weltberühmt für das Baradla-Höhlensystem, das zusammen mit dem angrenzenden slowakischen Karst zum UNESCO-Weltkulturerbe gehört. Die Baradla-Höhle ist die größte und beeindruckendste Tropfsteinhöhle Mitteleuropas mit faszinierenden Stalaktiten- und Stalagmitenformationen von gigantischen Ausmaßen. Die Höhle bietet zudem einen einzigartigen Konzertsaal mit einer Akustik, die Musiker und Zuhörer gleichermaßen in Staunen versetzt. Aggtelek liegt in einem unberührten Nationalpark, der eine einzigartige Flora und Fauna sowie bizarre Karstlandschaften beheimatet. Es ist ein Paradies für Naturfreunde, Wanderer und alle, die in die mysteriöse Unterwelt der Natur eintauchen möchten.",
      "hu": "Aggtelek az Északi-középhegység északi részén fekvő falu, amely világhírnevét a határában található Baradla-barlangnak köszönheti. Ez Közép-Európa leghosszabb és egyik leglátványosabb cseppkőbarlangja, amely az Aggteleki-karszt és a Szlovák-karszt barlangvilágának részeként az UNESCO Világörökség része. A látogatókat monumentális cseppkőképződmények, hatalmas termek és föld alatti patakok várják, amelyek a természet évezredes munkáját dicsérik. Aggtelek környéke, az Aggteleki Nemzeti Park vadregényes tájaival, tanösvényeivel és ritka élővilágával a természetjárók és a barlangászok paradicsoma. A barlangi koncertek különleges akusztikája pedig felejthetetlen kulturális élményt nyújt a föld mélyén.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Höhlensystem von Aggtelek und dem Slowakischen Karst ist Teil des UNESCO-Weltkulturerbes.", "Die Baradla-Höhle ist über 25 Kilometer lang und beherbergt den höchsten Tropfstein Ungarns.", "In der Höhle finden aufgrund der hervorragenden Akustik regelmäßig klassische Konzerte statt.", "Der Nationalpark Aggtelek schützt die einzigartige Karstlandschaft und seltene Tierarten."],
      "hu": [
        "A Baradla-barlang teljes hossza meghaladja a 25 kilométert, s átnyúlik Szlovákiába is.",
        "Az Aggteleki-karszt barlangjai 1995-ben kerültek fel az UNESCO Világörökségi listájára.",
        "A barlangban található az ország legmagasabb cseppköve, a 19 méter magas 'Csillagvizsgáló'.",
        "Az Aggteleki Nemzeti Park Magyarország első olyan parkja, amelyet elsősorban geológiai értékek védelmére hoztak létre.",
        "A Hangversenyteremben rendszeresen tartanak komoly- és könnyűzenei koncerteket a kiváló akusztika miatt."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szeged",
    type: "city",
    parent: "csongrad-csanad",
    coords: [20.1414, 46.253],
    name: {"de": "Szegedin", "hu": "Szeged", "ro": "Seghedin", "en": "Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {
      "de": "Szeged, bekannt als die 'Stadt des Sonnenscheins', liegt im Süden Ungarns an der Mündung der Maros in die Theiß. Die Stadt wurde nach der verheerenden Flut von 1879 fast vollständig im eklektischen Stil neu aufgebaut, was ihr ein großzügiges und harmonisches Stadtbild verleiht. Das Wahrzeichen ist die beeindruckende Votivkirche auf dem Domplatz, wo im Sommer die berühmten Freilichtspiele stattfinden. Szeged ist zudem weltberühmt für seine Salami, seinen Paprika und seine köstliche Fischsuppe.",
      "hu": "Szeged, a 'napfény városa', Magyarország déli részén, a Maros és a Tisza találkozásánál fekszik. Az 1879-es nagy árvíz után a várost szinte teljesen újjáépítették eklektikus stílusban, ami tágas és harmonikus városképet eredményezett. Legismertebb jelképe a Dóm téren álló Fogadalmi Templom, ahol nyaranta a híres Szegedi Szabadtéri Játékokat rendezik. Szeged világhírű a Pick szalámijáról, a paprikájáról és a fenséges halászlevéről is.",
      "ro": "Seghedin, cunoscut ca 'orașul soarelui', este situat în sudul Ungariei, la confluența râurilor Mureș și Tisa. Orașul a fost reconstruit aproape în întregime în stil eclectic după marea inundație din 1879, ceea ce îi conferă un aspect urban aerisit și armonios. Simbolul său este Biserica Votivă impresionantă din Piața Domului, unde vara au loc faimoasele Jocuri în Aer Liber. Seghedin este, de asemenea, renumit în întreaga lume pentru salamul Pick, boia și ciorba de pește.",
      "en": "Szeged, known as the 'City of Sunshine,' is located in southern Hungary at the confluence of the Maros and Tisza rivers. The city was almost entirely rebuilt in an eclectic style after the devastating flood of 1879, resulting in a spacious and harmonious cityscape. Its landmark is the impressive Votive Church on Cathedral Square, which hosts the famous Open-Air Festival every summer. Szeged is also world-famous for its Pick salami, paprika, and delicious fish soup."
    },
    facts: {
      "de": [
        "Drittgrößte Stadt Ungarns und Sitz des Komitats Csongrád-Csanád.",
        "Die Universität Szeged gehört zu den besten Forschungseinrichtungen des Landes.",
        "Die Votivkirche (Dom) wurde als Dank für den Wiederaufbau nach der Flut erbaut.",
        "Heimat der weltberühmten Pick-Salami und des Szegeder Paprikas.",
        "Die Szegeder Freilichtspiele sind das größte Theaterfestival Ungarns.",
        "Die Stadt hat die meisten Sonnenstunden pro Jahr in Ungarn.",
        "Bekannt für die Szegeder Fischsuppe (Halászlé), eine kulinarische Spezialität.",
        "Das Móra-Ferenc-Museum zeigt bedeutende archäologische und historische Sammlungen."
      ],
      "hu": [
        "Magyarország harmadik legnagyobb városa és Csongrád-Csanád vármegye székhelye.",
        "A Szegedi Tudományegyetem az ország egyik legjobb kutatóegyeteme.",
        "A Fogadalmi Templom (Dóm) az árvíz utáni újjáépítés hálájaként épült.",
        "A világhírű Pick szalámi és a szegedi paprika hazája.",
        "A Szegedi Szabadtéri Játékok Magyarország legnagyobb színházi fesztiválja.",
        "Itt a legmagasabb a napsütéses órák száma évente Magyarországon.",
        "Híres a szegedi halászlé, amely igazi gasztronómiai különlegesség.",
        "A Móra Ferenc Múzeum jelentős régészeti és történelmi gyűjteményekkel bír."
      ],
      "ro": [
        "Al treilea oraș ca mărime din Ungaria și reședința județului Csongrád-Csanád.",
        "Universitatea din Seghedin este una dintre cele mai bune instituții de cercetare.",
        "Biserica Votivă (Domul) a fost construită ca mulțumire pentru reconstrucție.",
        "Casa faimosului salam Pick și a boielei de Seghedin.",
        "Jocurile în Aer Liber din Seghedin sunt cel mai mare festival de teatru.",
        "Orașul are cel mai mare număr de ore însorite pe an din Ungaria.",
        "Faimos pentru ciorba de pește de Seghedin (Halászlé), o specialitate culinară.",
        "Muzeul Móra Ferenc prezintă colecții arheologice și istorice importante."
      ],
      "en": [
        "Third largest city in Hungary and the seat of Csongrád-Csanád County.",
        "The University of Szeged is one of the top research universities in the country.",
        "The Votive Church (Cathedral) was built in gratitude for the post-flood rebuilding.",
        "Home to the world-famous Pick salami and Szeged paprika.",
        "The Szeged Open-Air Festival is the largest theater festival in Hungary.",
        "The city enjoys the highest number of sunny hours per year in Hungary.",
        "Famous for the Szeged fish soup (Halászlé), a local culinary specialty.",
        "The Móra Ferenc Museum houses significant archaeological and collections."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Szeged, am Ufer der Theiß im sonnigen Süden Ungarns gelegen, wird aufgrund seiner vielen Sonnenstunden oft als ",
      "hu": "Szeged, a 'napfény városa', Dél-Magyarország legnagyobb városa és kulturális központja a Tisza és a Maros találkozásánál. A települést az 1879-es nagy árvíz után szinte teljesen újjáépítették, így ma egységes és gyönyörű szecessziós, valamint eklektikus belvárossal büszkélkedhet. Szeged jelképe a monumentális Fogadalmi Templom és az előtte elterülő Dóm tér, amely a világhírű Szegedi Szabadtéri Játékok otthona. A város híres egyetemi életéről, tudományos eredményeiről és gasztronómiai különlegességeiről, mint a Pick szalámi vagy a szegedi fűszerpaprika. A Tisza-parti sétányok, a pezsgő teraszok és a mediterrán hangulat Szegedet az ország egyik legkedveltebb turisztikai célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szeged wird wegen des sonnigen Klimas oft als die 'Stadt des Sonnenscheins' bezeichnet.", "Der Dom von Szeged ist eine der größten Kirchen Ungarns und wurde nach einer Flutkatastrophe erbaut.", "Die Stadt ist die Heimat der weltberühmten Pick-Salami und des Szegediner Paprikas.", "Auf dem Domplatz finden jährlich die renommierten Szegeder Freilichtspiele statt."],
      "hu": [
        "Szeged Magyarország legnaposabb városa, évente több mint 2100 órát süt a nap.",
        "A Szegedi Dóm orgonája az egyik legnagyobb Európában, több mint 9000 síppal.",
        "Itt alapították a világhírű Pick Szalámi és Szegedi Paprika gyárat.",
        "Szent-Györgyi Albert a Szegedi Tudományegyetemen végzett kutatásaiért kapott Nobel-díjat.",
        "A Szegedi Szabadtéri Játékok az ország legrégebbi és legnagyobb nyári színházi fesztiválja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hodmezovasarhely",
    type: "city",
    parent: "csongrad-csanad",
    coords: [20.3189, 46.4308],
    name: {"de": "Neumarkt an der Theiß", "hu": "Hódmezővásárhely", "ro": "Hódmezővásárhely", "en": "Hódmezővásárhely"},
    image: "/geo-images/hungary/hodmezovasarhely.webp",
    description: {"de": "Stadt in Südungarn mit einer reichen landwirtschaftlichen Tradition.", "hu": "Dél-magyarországi város gazdag mezőgazdasági hagyományokkal.", "ro": "Oraș în sudul Ungariei cu o bogată tradiție agricolă.", "en": "City in southern Hungary with a rich agricultural tradition."},
    facts: {"de": ["Zweitgrößte Stadt Ungarns nach Fläche.", "Bekannt für ihre Töpferkunst."], "hu": ["Magyarország második legnagyobb területű városa.", "Fazekasságáról ismert."], "ro": ["Al doilea oraș ca mărime din Ungaria după suprafață.", "Cunoscut pentru olăritul său."], "en": ["Second largest city in Hungary by area.", "Known for its pottery."]},
  
    descriptionAdvanced: {
      "de": "Hódmezővásárhely, eine Stadt mit Komitatsrecht im Südosten Ungarns, ist bekannt für ihre enge Verbindung zur Landwirtschaft und bildenden Kunst. Das Stadtbild ist geprägt von weiten Plätzen und einer Mischung aus ländlicher Tradition und bürgerlicher Eleganz. Die Stadt beherbergt bedeutende Museen wie das Tornyai-János-Museum, das die reiche archäologische und künstlerische Geschichte der Region dokumentiert. Ein besonderes architektonisches Juwel ist das Rathaus, das den Stolz der ehemaligen Agrarstadt widerspiegelt. Hódmezővásárhely ist zudem ein wichtiger Ort für das Kunsthandwerk, insbesondere für die traditionelle Töpferei, die in der Region eine lange Geschichte hat.",
      "hu": "Hódmezővásárhely az Alföld déli részén fekvő nagyváros, amely gazdag mezővárosi hagyományairól és élénk művészeti életéről ismert. A város arculatát a tágas terek, a felújított szecessziós paloták és a híres agyagipar hagyományai határozzák meg. Hódmezővásárhely évszázadok óta a festők és keramikusok városa, az itteni Alkotóház ma is a magyar művészeti élet fontos bázisa. A település büszkélkedhet az ország egyik legjobb állapotban fennmaradt árvízvédelmi falával, valamint a népszerű Török Sándor Strandfürdővel. A város környéki puszták és a Tisza folyó közelsége kiváló lehetőséget ad a természetjárásra és a vízi sportokra, miközben a város maga a nyugodt, polgári alföldi élet megtestesítője.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Stadt besitzt eines der flächenmäßig größten Verwaltungsgebiete in Ungarn.", "Das Tornyai-János-Museum zeigt bedeutende Werke ungarischer Maler des 20. Jahrhunderts.", "Die Region ist bekannt für ihre traditionelle Töpferkunst und Keramikherstellung.", "Hódmezővásárhely ist eine bedeutende Stadt für den Reitsport und die Landwirtschaft."],
      "hu": [
        "Hódmezővásárhely Magyarország második legnagyobb területű városa a kiterjedt pusztai részek miatt.",
        "A városban található Emlékpont Múzeum az ország egyik legmodernebb történeti kiállítóhelye.",
        "A hódmezővásárhelyi majolika és kerámia hagyományai világszerte elismertek.",
        "Itt található az ország egyetlen olyan árvízvédelmi fala, amely a város szívében fut végig.",
        "A város főterén álló Városháza tornya 57 méter magas, s az alföldi eklektika remeke."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mako",
    type: "city",
    parent: "csongrad-csanad",
    coords: [20.4806, 46.2167],
    name: {"de": "Makó", "hu": "Makó", "ro": "Macău", "en": "Makó"},
    image: "/geo-images/hungary/mako.webp",
    description: {"de": "Stadt nahe der rumänischen Grenze, berühmt für ihre Zwiebeln.", "hu": "Város a román határ közelében, hagymájáról híres.", "ro": "Oraș aproape de granița cu România, faimos pentru ceapa sa.", "en": "City near the Romanian border, famous for its onions."},
    facts: {"de": ["Die Makó-Zwiebel ist ein geschütztes Agrarprodukt.", "Das Thermalbad Hagymatikum wurde von Imre Makovecz entworfen."], "hu": ["A makói hagyma védett mezőgazdasági termék.", "A Hagymatikum termálfürdőt Makovecz Imre tervezte."], "ro": ["Ceapa de Makó este un produs agricol protejat.", "Baia termală Hagymatikum a fost proiectată de Imre Makovecz."], "en": ["The Makó onion is a protected agricultural product.", "The Hagymatikum thermal bath was designed by Imre Makovecz."]},
  
    descriptionAdvanced: {
      "de": "Makó, im Südosten Ungarns nahe der rumänischen Grenze gelegen, ist landesweit und international als die ",
      "hu": "Makó a Maros partján fekvő város, amely világhírnevét a makói vöröshagymának és az elmúlt években megvalósult lenyűgöző organikus építészetének köszönheti. A város szinte minden fontos középülete a híres építész, Makovecz Imre tervei alapján készült, egyedülálló, természetközeli városképet alkotva. Makó legfőbb büszkesége a Hagymatikum Gyógyfürdő, amely különleges formavilágával és gyógyiszapjával vonzza a látogatókat. A Maros-parti lombkoronasétány és a kalandpark a természet és az aktív kikapcsolódás kedvelőinek kínál élményeket. Makó a hagyományok és a modern építészeti bravúrok városa, ahol a hagymatermesztés évszázados múltja találkozik a jövőbe mutató designnal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Makó ist weltberühmt für seine Zwiebelproduktion, die als ungarisches Kulturerbe gilt.", "Das Heilbad 'Hagymatikum' wurde vom renommierten Architekten Imre Makovecz entworfen.", "Der Fluss Maros liefert den heilenden Heilschlamm für die medizinischen Behandlungen in der Stadt.", "Makó beherbergt einen einzigartigen Baumkronenpfad am Ufer des Maros."],
      "hu": [
        "Makó a magyar vöröshagyma-termesztés történelmi központja, a makói hagyma hungarikum.",
        "A Hagymatikum fürdő a világ egyik legszebbnek választott organikus építészeti alkotása.",
        "Itt található Magyarország leghosszabb (közel 200 méter) lombkoronasétánya a Maros ártéri erdőjében.",
        "A városban 12 Makovecz Imre által tervezett épület található, ami egyedülálló a világon.",
        "Makó híres a Maros gyógyiszapjáról, amelyet a mozgásszervi betegségek kezelésére használnak."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szekesfehervar",
    type: "city",
    parent: "fejer",
    coords: [18.4103, 47.1899],
    name: {"de": "Stuhlweißenburg", "hu": "Székesfehérvár", "ro": "Székesfehérvár", "en": "Székesfehérvár"},
    image: "/geo-images/hungary/szekesfehervar.webp",
    description: {
      "de": "Székesfehérvár, eine der ältesten Städte Ungarns, war im Mittelalter die Krönungs- und Grabstätte der ungarischen Könige. Die Stadt liegt in Zentralungarn und ist heute ein bedeutendes Industrie- und Kulturzentrum. Besucher können die Ruinen der Krönungsbasilika im Ruinengarten besichtigen oder das märchenhafte Bory-Schloss bewundern, das von einem Künstler im 20. Jahrhundert erbaut wurde. Die barocke Altstadt lädt mit ihren Denkmälern und Museen zu einer Zeitreise in die ungarische Geschichte ein.",
      "hu": "Székesfehérvár, Magyarország egyik legősibb városa, a középkorban a magyar királyok koronázó- és temetkezési helye volt. A város Közép-Magyarországon fekszik, és ma jelentős ipari és kulturális központ. A látogatók megtekinthetik a koronázó bazilika romjait a Romkertben, vagy megcsodálhatják a mesebeli Bory-várat, amelyet egy művész épített a 20. században. A barokk óváros műemlékeivel és múzeumaival időutazásra hív a magyar történelembe.",
      "ro": "Székesfehérvár, unul dintre cele mai vechi orașe din Ungaria, a fost locul de încoronare și de înmormântare al regilor maghiari în Evul Mediu. Orașul este situat în centrul Ungariei și este astăzi un important centru industrial și cultural. Vizitatorii pot vedea ruinele bazilicii de încoronare în Grădina Ruinelor sau pot admira castelul de basm Bory, construit de un artist în secolul XX. Centrul vechi baroc, cu monumentele și muzeele sale, invită la o călătorie în timpul istoriei maghiare.",
      "en": "Székesfehérvár, one of Hungary's oldest cities, served as the coronation and burial site for Hungarian kings during the Middle Ages. Located in central Hungary, it is now a major industrial and cultural hub. Visitors can explore the ruins of the coronation basilica in the Ruin Garden or admire the fairytale-like Bory Castle, built by an artist in the 20th century. The Baroque old town, with its monuments and museums, offers a journey through Hungarian history."
    },
    facts: {
      "de": [
        "Ehemalige Hauptstadt Ungarns im Mittelalter.",
        "Hier wurden 37 ungarische Könige gekrönt und 15 begraben.",
        "Der Ruinengarten bewahrt die Fundamente der einstigen Krönungsbasilika.",
        "Das Bory-Schloss ist ein einzigartiges Bauwerk aus Beton und Kunst.",
        "Sitz des Komitats Fejér und ein wichtiger Industriestandort.",
        "Die Stadt beherbergt das renommierte König-Stephan-Museum.",
        "Bekannt für das jährliche 'Königliche Tage' Festival im August.",
        "Liegt verkehrsgünstig zwischen Budapest und dem Plattensee."
      ],
      "hu": [
        "Magyarország egykori fővárosa a középkorban.",
        "Itt 37 magyar királyt koronáztak meg és 15-öt temettek el.",
        "A Romkert őrzi az egykori koronázó bazilika alapfalait.",
        "A Bory-vár egy egyedülálló, betonból készült művészeti alkotás.",
        "Fejér vármegye székhelye és fontos ipari központ.",
        "Itt található a neves Szent István Király Múzeum.",
        "Híres az évente augusztusban megrendezett Királyi Napok fesztiválról.",
        "Közlekedési szempontból kedvező helyen, Budapest és a Balaton között fekszik."
      ],
      "ro": [
        "Fostă capitală a Ungariei în Evul Mediu.",
        "Aici au fost încoronați 37 de regi maghiari și 15 au fost înmormântați.",
        "Grădina Ruinelor păstrează fundațiile fostei bazilici de încoronare.",
        "Castelul Bory este o construcție unică din beton și artă.",
        "Reședința județului Fejér și un sit industrial important.",
        "Orașul găzduiește renumitul Muzeu Regele Sfântul Ștefan.",
        "Cunoscut pentru festivalul anual 'Zilele Regale' din august.",
        "Situat convenabil între Budapesta și Lacul Balaton."
      ],
      "en": [
        "Former capital of Hungary in the Middle Ages.",
        "37 Hungarian kings were crowned and 15 were buried here.",
        "The Ruin Garden preserves the foundations of the former coronation basilica.",
        "Bory Castle is a unique structure made of concrete and art.",
        "Seat of Fejér County and a major industrial location.",
        "Home to the renowned King Saint Stephen Museum.",
        "Famous for the annual 'Royal Days' festival held in August.",
        "Conveniently located between Budapest and Lake Balaton."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Székesfehérvár, eine der ältesten Städte Ungarns, war im Mittelalter die Krönungsstadt der ungarischen Könige und ist tief mit der Geschichte des Landes verwurzelt. Hier wurden 37 Könige gekrönt und 15 von ihnen beigesetzt, was der Stadt den Beinamen ",
      "hu": "Székesfehérvár, a 'királyok városa', Magyarország egyik legfontosabb történelmi központja, ahol a középkorban a magyar uralkodókat koronázták és temették el. A város szíve a barokk belváros, ahol a történelmi falak és a modern szobrok harmonikus elegye várja a látogatókat. Legfontosabb emlékhelye a Nemzeti Emlékhely (Középkori Romkert), ahol egykor a monumentális Szent István-bazilika állt. Székesfehérvár ma dinamikusan fejlődő ipari és kulturális központ, büszkélkedhet a mesebeli Bory-várral, gazdag múzeumokkal és pezsgő tereivel. A város ideális fekvése Budapest és a Balaton között, valamint történelmi mélysége Székesfehérvárt az ország egyik legfontosabb turisztikai célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Székesfehérvár war im Mittelalter die offizielle Krönungsstadt ungarischer Könige.", "Im Ruinengarten sind die Fundamente der einstigen Krönungsbasilika zu besichtigen.", "Die Bory-Burg wurde von einem einzigen Mann über 36 Jahre hinweg als Denkmal der Liebe erbaut.", "Die Stadt beherbergt die 'Blasglocke', ein einzigartiges Figurenoktett in der Innenstadt."],
      "hu": [
        "Székesfehérváron összesen 37 királykoronázás és 15 királytemetés történt a középkorban.",
        "A Bory-vár egyedülálló építmény, amelyet Bory Jenő szobrász saját kezűleg épített több évtizeden át.",
        "Itt található az ország egyik legszebb barokk főtere és a püspöki székesegyház.",
        "Székesfehérvár híres órajátékáról, amely a magyar történelem nagyjait mutatja be naponta többször.",
        "A város ma Magyarország egyik legjelentősebb gazdasági motorja és informatikai központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "dunaujvaros",
    type: "city",
    parent: "fejer",
    coords: [18.9397, 46.9619],
    name: {"de": "Neustadt an der Donau", "hu": "Dunaújváros", "ro": "Dunaújváros", "en": "Dunaújváros"},    description: {"de": "Industriestadt an der Donau, erbaut in den 1950er Jahren.", "hu": "Ipari város a Duna partján, az 1950-es években épült.", "ro": "Oraș industrial pe Dunăre, construit în anii 1950.", "en": "Industrial city on the Danube, built in the 1950s."},
    facts: {"de": ["Hieß früher Sztálinváros (Stalinstadt).", "Zentrum der ungarischen Stahlindustrie."], "hu": ["Korábban Sztálinvárosnak hívták.", "A magyar acélipar központja."], "ro": ["Se numea anterior Sztálinváros (Orașul lui Stalin).", "Centrul industriei siderurgice maghiare."], "en": ["Formerly called Sztálinváros (Stalin City).", "Center of the Hungarian steel industry."]},
    image: "/poi-images/dunaujvaros.webp",
  
    descriptionAdvanced: {
      "de": "Dunaújváros, am rechten Ufer der Donau gelegen, ist eine Stadt, die vor allem durch ihre moderne Industriegeschichte im 20. Jahrhundert geprägt wurde. Ursprünglich als sozialistische Musterstadt geplant, zeigt sie heute ein interessantes Bild der Architektur des Realsozialismus gepaart mit modernen Grünflächen. Das Herz der Stadt ist das riesige Stahlwerk, das einst den wirtschaftlichen Aufschwung der Region sicherte. In den letzten Jahren hat sich Dunaújváros jedoch stark gewandelt und bietet heute einen Skulpturenpark an der Donau sowie vielfältige Sport- und Freizeitmöglichkeiten. Die Stadt ist ein interessantes Beispiel für den städtebaulichen Wandel in Ungarn und bietet einen tiefen Einblick in die jüngere Zeitgeschichte des Landes.",
      "hu": "Dunaújváros Magyarország egyik legfiatalabb városa a Duna mentén, amely az 1950-es években épült fel mint szocialista iparváros (eredetileg Sztálinváros néven). A település arculatát a monumentális szocreál építészet és a vasmű határozza meg, ami ma különleges építészeti örökségként vonzza a látogatókat. Dunaújváros azonban nemcsak az iparról szól: a Duna-parti szoborpark, a tágas parkok és a folyó menti sétányok modern és élhető városképet mutatnak. A város híres kiváló sportéletéről és uszodájáról, valamint a Duna által nyújtott vízi sportlehetőségekről. Dunaújváros egy érdekes fejezete a magyar történelemnek, ahol a tervezett városépítés minden sajátossága megfigyelhető.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Dunaújváros wurde in den 1950er Jahren als sozialistische Industriestadt unter dem Namen Sztálinváros gegründet.", "Am Donauufer befindet sich ein weitläufiger Skulpturenpark mit modernen Metallplastiken.", "Die Stadt ist ein wichtiges Zentrum für Wassersportarten und besitzt ein modernes Sportzentrum.", "Das Intercisa-Museum dokumentiert die römische Vergangenheit der Region."],
      "hu": [
        "Dunaújváros az ország első tervezett szocialista városa, 1951-ben kapott nevet.",
        "Itt található Közép-Európa egyik legnagyobb szabadtéri szoborparkja a Duna-parton.",
        "A városban működik az ország legnagyobb kohászati üzeme, a Dunai Vasmű (Dunaferr).",
        "Dunaújváros híres a sikeres jégkorong- és kézilabda-csapatairól.",
        "A várost átlósan szelik át a tágas sugárutak, amelyeket a korszak ideáljai szerint terveztek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gardony",
    type: "city",
    parent: "fejer",
    coords: [18.6167, 47.1978],
    name: {"de": "Gárdony", "hu": "Gárdony", "ro": "Gárdony", "en": "Gárdony"},
    image: "/geo-images/hungary/gardony.webp",
    description: {"de": "Stadt am Ufer des Velencer Sees, ein beliebtes Urlaubsziel.", "hu": "Város a Velencei-tó partján, népszerű nyaralóhely.", "ro": "Oraș pe malul Lacului Velence, o destinație populară de vacanță.", "en": "City on the shores of Lake Velence, a popular holiday destination."},
    facts: {"de": ["Geburtsort des Schriftstellers Géza Gárdonyi.", "Beliebt für Wassersport."], "hu": ["Gárdonyi Géza író szülővárosa.", "Népszerű a vízisportok kedvelői körében."], "ro": ["Locul de naștere al scriitorului Géza Gárdonyi.", "Popular pentru sporturi nautice."], "en": ["Birthplace of writer Géza Gárdonyi.", "Popular for water sports."]},
  
    descriptionAdvanced: {
      "de": "Gárdony ist ein beliebtes Ferienzentrum am Südufer des Velence-Sees, der für sein warmes Wasser und seine heilende Wirkung bekannt ist. Die Stadt besteht aus mehreren Ortsteilen wie Agárd und Dinnyés und bietet ideale Bedingungen für Badeurlauber, Wassersportler und Angler. Besonders bekannt ist Agárd für sein Heilbad und seinen Strand, der im Sommer zahlreiche Besucher aus dem nahegelegenen Budapest anzieht. Gárdony ist zudem der Geburtsort des berühmten ungarischen Schriftstellers Géza Gárdonyi, dessen Geburtshaus heute ein Museum ist. Die Region um den See ist ein geschütztes Naturparadies, das vor allem für seine reiche Vogelwelt in den Schilfgebieten bekannt ist.",
      "hu": "Gárdony a Velencei-tó déli partjának központja, a 'napfény tavának' legnépszerűbb üdülőhelye, amely magában foglalja Agárdot és Dinnyést is. A város élete a tó köré szerveződik: szabadstrandok, vitorláskikötők és pezsgő kerékpáros élet várja a látogatókat. Gárdony híres szülötte Gárdonyi Géza, az Egri csillagok írója, akinek emlékháza és a közeli rönkvár vonzó célpont a családoknak. A település büszkélkedhet modern gyógyfürdővel és a Velencei-tavi Madárrezervátum közelségével is. Gárdony a sport, a kultúra és a természetközeli kikapcsolódás ideális ötvözete, amely Budapesttől karnyújtásnyira kínál teljes feltöltődést.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gárdony liegt am Velence-See, einem der wärmsten Binnenseen Europas.", "Der berühmte Schriftsteller Géza Gárdonyi wurde im Ortsteil Agárd geboren.", "Die Stadt ist ein Zentrum für den Segelsport und das Windsurfen in Ungarn.", "Das Heilbad Agárd ist für sein schwefelhaltiges Thermalwasser bekannt."],
      "hu": [
        "Gárdonyhoz tartozik Agárd, ahol az író Gárdonyi Géza született 1863-ban.",
        "Az Agárdi Gyógy- és Termálfürdő vize 58 fokos hőmérsékleten tör fel a mélyből.",
        "A Velencei-tavi Galéria számos kortárs művészeti kiállításnak ad otthont a városban.",
        "Gárdony népszerű megállóhelye a tó körüli kerékpárútnak, amely közel 30 km hosszú.",
        "Dinnyésen található az egyedülálló Várpark, ahol magyar várak makettjeit láthatjuk eredeti anyagokból."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor",
    type: "city",
    parent: "gyor-moson-sopron",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab", "hu": "Győr", "ro": "Győr", "en": "Győr"},
    image: "/geo-images/hungary/gyor.webp",
    description: {
      "de": "Győr, die 'Stadt der Flüsse', liegt im Nordwesten Ungarns am Zusammenfluss von Raab, Rabnitz und Donau. Die Stadt ist ein bedeutendes wirtschaftliches Zentrum und beherbergt eines der weltweit größten Motorenwerke von Audi. Das historische Stadtzentrum besticht durch seine barocke Architektur, charmante Gassen und den imposanten Dom auf dem Káptalan-Hügel. Győr ist zudem ein wichtiger Verkehrsknotenpunkt zwischen Budapest, Wien und Bratislava.",
      "hu": "Győr, a 'folyók városa', Északnyugat-Magyarországon fekszik, a Rába, a Rábca és a Duna találkozásánál. A város jelentős gazdasági központ, itt található az Audi egyik legnagyobb motorgyára a világon. A történelmi belváros barokk építészetével, hangulatos utcáival és a Káptalandombon álló Bazilikával vonzza a látogatókat. Győr emellett fontos közlekedési csomópont Budapest, Bécs és Pozsony között.",
      "ro": "Győr, 'orașul râurilor', este situat în nord-vestul Ungariei, la confluența râurilor Rába, Rábca și Dunărea. Orașul este un centru economic important, găzduind una dintre cele mai mari fabrici de motoare Audi din lume. Centrul istoric al orașului impresionează prin arhitectura sa barocă, străzile fermecătoare și Bazilica impunătoare de pe dealul Káptalan. Győr este, de asemenea, un nod de transport vital între Budapesta, Viena și Bratislava.",
      "en": "Győr, the 'City of Rivers,' is located in northwestern Hungary at the confluence of the Rába, Rábca, and Danube rivers. The city is a major economic hub, home to one of the world's largest Audi engine plants. Its historic center charms visitors with Baroque architecture, cozy alleys, and the majestic Basilica on Káptalan Hill. Győr is also a key transportation hub situated between Budapest, Vienna, and Bratislava."
    },
    facts: {
      "de": [
        "Sechstgrößte Stadt Ungarns und Sitz des Komitats Győr-Moson-Sopron.",
        "Wichtiges Zentrum der Automobilindustrie durch das Audi-Werk.",
        "Das barocke Stadtzentrum gehört zu den am besten erhaltenen in Ungarn.",
        "Der Dom von Győr beherbergt die Reliquie des Heiligen Ladislaus.",
        "Die Stadt hat eine reiche Tradition im Handball und Sport.",
        "Liegt ideal auf der Achse Budapest-Wien-Bratislava.",
        "Das Xantus-János-Museum zeigt bedeutende lokale Sammlungen.",
        "Bekannt für seine zahlreichen Thermal- und Erlebnisbäder."
      ],
      "hu": [
        "Magyarország hatodik legnagyobb városa és Győr-Moson-Sopron vármegye székhelye.",
        "Az autóipar meghatározó központja az Audi gyárnak köszönhetően.",
        "A barokk belváros az egyik legépszerűbb Magyarországon.",
        "A győri Bazilikában őrzik Szent László király hermáját.",
        "A város gazdag kézilabda- és sportmúlttal rendelkezik.",
        "Ideális elhelyezkedés a Budapest-Bécs-Pozsony tengelyen.",
        "A Xantus János Múzeum jelentős helytörténeti gyűjteményt mutat be.",
        "Számos termál- és élményfürdője miatt is kedvelt úti cél."
      ],
      "ro": [
        "Al șaselea oraș ca mărime din Ungaria și reședința județului Győr-Moson-Sopron.",
        "Centru important al industriei auto datorită fabricii Audi.",
        "Centrul baroc al orașului este unul dintre cele mai bine conservate din Ungaria.",
        "Bazilica din Győr adăpostește relicva Sfântului Ladislau.",
        "Orașul are o tradiție bogată în handbal și sport.",
        "Situat ideal pe axa Budapesta-Viena-Bratislava.",
        "Muzeul Xantus János prezintă colecții locale semnificative.",
        "Cunoscut pentru numeroasele sale băi termale și parcuri acvatice."
      ],
      "en": [
        "Sixth largest city in Hungary and the seat of Győr-Moson-Sopron County.",
        "A major center of the automotive industry due to the Audi plant.",
        "The Baroque city center is one of the best-preserved in Hungary.",
        "Győr Basilica houses the reliquary of Saint Ladislaus.",
        "The city has a strong tradition in handball and other sports.",
        "Ideally located on the Budapest-Vienna-Bratislava axis.",
        "The Xantus János Museum displays significant local collections.",
        "Known for its numerous thermal and adventure baths."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Győr, im Nordwesten Ungarns an der Mündung von drei Flüssen gelegen, wird oft als die ",
      "hu": "Győr, a 'folyók városa', Magyarország északnyugati részén, a Duna, a Rába és a Rábca találkozásánál fekvő dinamikus nagyváros, amely barokk belvárosával és modern iparával emelkedik ki. A város központja, a Káptalandomb a Püspökvárral és a Bazilikával a magyar kereszténység egyik bölcsője. Győr híres rendezett tereiről, szökőkútjairól és gazdag művészeti életéről, amit a Győri Balett világhírneve is fémjelez. Ma a város az ország egyik legfontosabb gazdasági motorja (az Audi révén), de megőrizte hangulatos történelmi jellegét is. Győr a modern fejlődés és az ezeréves múlt harmonikus találkozási pontja, amely minden évszakban pezsgő programokkal várja a látogatókat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Győr liegt am Zusammenfluss der Flüsse Raab (Rába), Kleiner Donau und Donau.", "Die barocke Altstadt von Győr gehört zu den am besten erhaltenen historischen Ensembles Ungarns.", "Die Stadt ist der Sitz der Audi Hungaria Motor Kft, einem der weltweit größten Motorenwerke.", "Die Kathedrale von Győr beherbergt das heilige Antlitz der weinenden Madonna aus Irland."],
      "hu": [
        "Győr barokk belvárosa Magyarország egyik legszebb és legépebben maradt műemléki együttese.",
        "Itt alapították meg a Győri Balettet, amely az ország egyik legnevesebb táncegyüttese.",
        "A győri Bazilikában őrzik Szent László király hermáját, a magyar ötvösművészet remekét.",
        "Győr városa az Audi gyár révén a magyar autóipar európai hírű központja.",
        "A várost 2010-ben az egyik legélhetőbb magyar városnak választották."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sopron",
    type: "city",
    parent: "gyor-moson-sopron",
    coords: [16.5905, 47.6817],
    name: {"de": "Ödenburg", "hu": "Sopron", "ro": "Sopron", "en": "Sopron"},
    image: "/geo-images/hungary/sopron.webp",
    description: {
      "de": "Sopron, die 'treueste Stadt' Ungarns, liegt im äußersten Westen des Landes an der Grenze zu Österreich. Die Stadt ist bekannt für ihre außergewöhnlich gut erhaltene mittelalterliche Altstadt und ihren Status als bedeutendes Weinanbaugebiet, insbesondere für den Blaufränkischen. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen herrlichen Blick über die Dächer und die umliegenden Weinberge hat. Sopron ist zudem ein Symbol für die europäische Einheit, da hier 1989 das Paneuropäische Picknick stattfand.",
      "hu": "Sopron, a 'leghűségesebb város', Magyarország legnyugatibb részén, az osztrák határ mentén fekszik. A város híres kivételesen jól megőrzött középkori óvárosáról és jelentős borvidékéről, különösen a kékfrankosról. A város jelképe a Tűztorony, ahonnan csodálatos kilátás nyílik a háztetőkre és a környező szőlőültetvényekre. Sopron emellett az európai egység szimbóluma is, hiszen 1989-ben itt rendezték meg a Páneurópai Pikniket.",
      "ro": "Sopron, 'cel mai fidel oraș' al Ungariei, este situat în extremitatea vestică a țării, la granița cu Austria. Orașul este cunoscut pentru centrul său vechi medieval excepțional de bine conservat și pentru statutul său de regiune viticolă importantă, în special pentru soiul Kékfrankos. Simbolul orașului este Turnul Pompierilor, de unde se poate admira o vedere superbă asupra acoperișurilor și podgoriilor din jur. Sopron este, de asemenea, un simbol al unității europene, aici având loc în 1989 Picnicul Paneuropean.",
      "en": "Sopron, the 'Most Loyal City' of Hungary, is located in the far west of the country on the border with Austria. The city is famous for its exceptionally well-preserved medieval old town and its status as a major wine-growing region, particularly for the Kékfrankos (Blaufränkisch) variety. Its landmark is the Fire Tower, offering a magnificent view over the rooftops and surrounding vineyards. Sopron is also a symbol of European unity, as it hosted the Pan-European Picnic in 1989."
    },
    facts: {
      "de": [
        "Erhielt den Titel 'Civitas Fidelissima' nach einer Volksabstimmung 1921.",
        "Das historische Stadtzentrum ist eines der am besten erhaltenen in Mitteleuropa.",
        "Der Feuerturm (Tűztorony) ist das Wahrzeichen der Stadt.",
        "Wichtiges Zentrum für den Anbau von Blaufränkisch-Wein.",
        "Das Paneuropäische Picknick bei Sopron leitete den Fall des Eisernen Vorhangs ein.",
        "Die Stadt ist von den malerischen Lövérek-Hügeln umgeben.",
        "Beherbergt zahlreiche Museen und historische Kirchen.",
        "Beliebtes Ziel für Touristen aus Österreich und ganz Europa."
      ],
      "hu": [
        "A 'Civitas Fidelissima' címet az 1921-es népszavazás után kapta.",
        "A történelmi belváros Közép-Európa egyik legépszerűbb műemlékegyüttese.",
        "A Tűztorony a város legismertebb jelképe.",
        "A kékfrankos bortermelés egyik legfontosabb központja.",
        "A Sopron melletti Páneurópai Piknik segítette a vasfüggöny lebontását.",
        "A várost a festői Lövérek dombjai veszik körül.",
        "Számos múzeumnak és történelmi templomnak ad otthont.",
        "Népszerű úti cél az osztrák és az európai turisták körében."
      ],
      "ro": [
        "A primit titlul de 'Civitas Fidelissima' după referendumul din 1921.",
        "Centrul istoric este unul dintre cele mai bine conservate din Europa Centrală.",
        "Turnul Pompierilor (Tűztorony) este simbolul emblematic al orașului.",
        "Centru important pentru cultivarea vinului Kékfrankos.",
        "Picnicul Paneuropean de lângă Sopron a marcat începutul căderii Cortinei de Fier.",
        "Orașul este înconjurat de dealurile pitorești Lövérek.",
        "Găzduiește numeroase muzee și biserici istorice.",
        "Destinație populară pentru turiștii din Austria și din întreaga Europă."
      ],
      "en": [
        "Awarded the title 'Civitas Fidelissima' after a 1921 referendum.",
        "The historic city center is one of the best-preserved in Central Europe.",
        "The Fire Tower (Tűztorony) is the city's most famous landmark.",
        "A major center for the production of Kékfrankos wine.",
        "The Pan-European Picnic near Sopron helped trigger the fall of the Iron Curtain.",
        "The city is surrounded by the picturesque Lövérek Hills.",
        "Home to numerous museums and historic churches.",
        "A popular destination for tourists from Austria and across Europe."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Sopron, im äußersten Westen Ungarns direkt an der Grenze zu Österreich gelegen, ist eine Stadt von außergewöhnlicher Schönheit und historischer Bedeutung. Als eine der wenigen Städte Ungarns blieb ihr mittelalterlicher Kern fast unversehrt erhalten, was Sopron zu einem Freilichtmuseum der Architektur macht. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen Panoramablick über die barocke Innenstadt bis hin zum Neusiedler See hat. Sopron ist auch als ",
      "hu": "Sopron, a 'leghűségesebb város' az osztrák határ mentén, a Soproni-hegység lábánál fekszik, és Magyarország egyik leggazdagabb műemléki állományával rendelkezik. A város középkori hangulatú belvárosa, szűk utcái és az emblematikus Tűztorony az ország történelmének viharos és dicső korszakait idézi. Sopron híres bortermeléséről is, a Kékfrankos hazájaként a borkultúra minden szegletében jelen van. A várost körülölelő erdők, a Lőverek tiszta levegője és a közeli Fertő-tó kiváló lehetőséget adnak az aktív pihenésre. Sopron kulturális és szellemi élete is kiemelkedő, egyeteme és fesztiváljai révén a térség egyik legfontosabb központja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Sopron trägt den Ehrentitel 'Civitas Fidelissima' (die treueste Stadt).", "Der Feuerturm ist das Wahrzeichen der Stadt und steht auf römischen Fundamenten.", "Die Stadt ist das Zentrum der ungarischen Produktion des Blaufränkisch-Rotweins.", "In Sopron fand 1989 das Paneuropäische Picknick statt, das den Fall des Eisernen Vorhangs einleitete."],
      "hu": [
        "Sopron az 1921-es népszavazás emlékére viseli a 'Civitas Fidelissima' (Leghűségesebb Város) címet.",
        "A Tűztorony Sopron jelképe, alsó része római kori falakra épült.",
        "Sopron belvárosának alaprajza a római kori Scarbantia városának szerkezetét követi.",
        "A város környéki Lőverek híres gyógyító klímájáról és szubalpin levegőjéről.",
        "Sopron a Kékfrankos vörösbor fővárosa, s számos történelmi borospincével büszkélkedhet."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pannonhalma",
    type: "landmark",
    parent: "gyor-moson-sopron",
    coords: [17.7606, 47.5536],
    name: {"de": "Martinsberg", "hu": "Pannonhalma", "ro": "Pannonhalma", "en": "Pannonhalma"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Historische Benediktinerabtei auf einem Hügel, eines der ältesten Denkmäler Ungarns.", "hu": "Történelmi bencés apátság egy dombon, Magyarország egyik legrégebbi műemléke.", "ro": "Abație benedictină istorică pe un deal, unul dintre cele mai vechi monumente din Ungaria.", "en": "Historic Benedictine abbey on a hill, one of the oldest monuments in Hungary."},
    facts: {"de": ["Gegründet im Jahr 996.", "Teil des UNESCO-Welterbes."], "hu": ["996-ban alapították.", "Az UNESCO világörökség része."], "ro": ["Fondată în anul 996.", "Parte a Patrimoniului Mondial UNESCO."], "en": ["Founded in 996.", "Part of the UNESCO World Heritage site."]},
  
    descriptionAdvanced: {
      "de": "Pannonhalma ist berühmt für seine Benediktinerabtei, die majestätisch auf dem Berg des Heiligen Martin thront und zum UNESCO-Weltkulturerbe gehört. Gegründet im Jahr 996, ist sie das spirituelle und kulturelle Zentrum der ungarischen Benediktiner und blickt auf eine über tausendjährige Geschichte zurück. Die Basilika mit ihrer romanischen Krypta, der prachtvolle Kreuzgang und die monumentale Bibliothek mit ihren wertvollen Handschriften sind beeindruckende Zeugnisse sakraler Kunst. Pannonhalma ist zudem für seine lange Tradition im Weinbau und in der Kräuterkunde bekannt, was Besucher in der klösterlichen Weinkellerei und dem Arzneikräutergarten erleben können. Die Abtei ist ein Ort der Stille, des Gebets und der gelehrten Tradition inmitten der sanften Hügel Transdanubiens.",
      "hu": "Pannonhalma a magyar kereszténység és kultúra bölcsője, ahol az ezeréves Bencés Főapátság magasodik a dombtetőn. Az 996-ban alapított monostor Magyarország egyik legfontosabb szakrális központja, amely 1996 óta az UNESCO Világörökség része. Az apátság monumentális épületegyüttese magában foglalja a gótikus bazilikát, az ezeréves kriptát és a világhírű könyvtárat, amely felbecsülhetetlen értékű kódexeket őriz. Pannonhalma azonban modern is: neves borászata, levendulása és arborétuma a minőségi pihenés és a gasztronómia élményét nyújtja. A csend, az imádság és az alkotó munka harmóniája Pannonhalmát az ország egyik legfontosabb spirituális és kulturális célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Erzabtei Pannonhalma wurde 996 gegründet und ist Teil des UNESCO-Weltkulturerbes.", "Die Klosterbibliothek bewahrt mit der Gründungsurkunde der Abtei Tihany das älteste ungarische Sprachdenkmal auf.", "Die Mönche betreiben ein renommiertes Weingut und produzieren Kräuterliköre nach alten Rezepten.", "Die Abtei liegt auf dem Mons Sacer Pannoniae, dem Heiligen Berg von Pannonien."],
      "hu": [
        "A Pannonhalmi Főapátság Magyarország legrégebbi folyamatosan működő kulturális és vallási intézménye.",
        "Az apátsági könyvtárban őrizik a magyar nyelv legrégebbi írott emlékét, a Tihanyi Alapítólevelet (másolatát).",
        "Pannonhalma híres gyógynövénykertjéről és az abból készült teákról, likőrökről.",
        "A bazilika alatti kriptában nyugszik többek között Habsburg Ottó szívurnája is.",
        "Az apátsági borászat a bencés szerzetesek évezredes szőlőművelő hagyományait viszi tovább."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "debrecen",
    type: "city",
    parent: "hajdu-bihar",
    coords: [21.6273, 47.5316],
    name: {"de": "Debrezin", "hu": "Debrecen", "ro": "Debrețin", "en": "Debrecen"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {
      "de": "Debrecen ist die zweitgrößte Stadt Ungarns und das wirtschaftliche sowie kulturelle Zentrum der Ostungarischen Tiefebene. Die Stadt hat historisch eine wichtige Rolle in der protestantischen Reformation gespielt und wird oft als 'das kalvinistische Rom' bezeichnet. Im Zentrum steht die imposante Reformierte Großkirche, ein Symbol des ungarischen Protestantismus. Debrecen zieht Besucher mit seinen Thermalbädern, dem berühmten Blumenkarneval und dem nahegelegenen Nationalpark Hortobágy an.",
      "hu": "Debrecen Magyarország második legnagyobb városa, valamint az Alföld gazdasági és kulturális központja. A város történelmileg fontos szerepet játszott a protestáns reformációban, ezért gyakran emlegetik 'kálvinista Róma' néven. A városközpontban álló monumentális Református Nagytemplom a magyar protestantizmus jelképe. Debrecen vonzza a látogatókat termálfürdőivel, a híres Virágkarneváljával és a közeli Hortobágyi Nemzeti Parkkal.",
      "ro": "Debrețin este al doilea cel mai mare oraș din Ungaria și centrul economic și cultural al Marii Câmpii Maghiare. Orașul a jucat un rol istoric important în Reforma Protestantă, fiind adesea numit 'Roma calvinistă'. În centrul orașului se află impunătoarea Biserică Reformată Mare, un simbol al protestantismului maghiar. Debrețin atrage vizitatorii cu băile sale termale, faimosul Carnaval al Florilor și Parcul Național Hortobágy din apropiere.",
      "en": "Debrecen is the second largest city in Hungary and the economic and cultural center of the Great Hungarian Plain. Historically, the city played a vital role in the Protestant Reformation and is often referred to as 'the Calvinist Rome.' At the heart of the city stands the imposing Reformed Great Church, a symbol of Hungarian Protestantism. Debrecen attracts visitors with its thermal baths, the famous Flower Carnival, and the nearby Hortobágy National Park."
    },
    facts: {
      "de": [
        "Bevölkerung: ca. 200.000 Einwohner (2024).",
        "Die Universität Debrecen wurde 1538 gegründet und ist eine der ältesten des Landes.",
        "Die Reformierte Großkirche ist das Wahrzeichen der Stadt.",
        "Jährlich findet der Debrecener Blumenkarneval am 20. August statt.",
        "Die Stadt war 1849 und kurzzeitig 1944/45 die Hauptstadt Ungarns.",
        "Beliebtes Ziel: Thermalbad Aquaticum mit großem Erlebnisbad.",
        "In der Nähe liegt der Hortobágy-Nationalpark (UNESCO-Welterbe).",
        "Debrecen ist ein wichtiges Zentrum der ungarischen Jazz- und Kulturszene."
      ],
      "hu": [
        "Népesség: kb. 200 000 fő (2024).",
        "A Debreceni Egyetem elődje 1538-ban alakult, az ország egyik legrégebbi intézménye.",
        "A Református Nagytemplom a város legismertebb jelképe.",
        "Minden év augusztus 20-án megrendezik a Debreceni Virágkarnevált.",
        "A város 1849-ben és 1944/45-ben is Magyarország ideiglenes fővárosa volt.",
        "Népszerű úti cél az Aquaticum termál- és élményfürdő.",
        "A közelben található a Hortobágyi Nemzeti Park (UNESCO világörökség).",
        "Debrecen a magyar jazzélet és kultúra egyik meghatározó központja."
      ],
      "ro": [
        "Populație: aprox. 200.000 de locuitori (2024).",
        "Universitatea din Debrețin a fost fondată în 1538, fiind una dintre cele mai vechi.",
        "Biserica Reformată Mare este simbolul emblematic al orașului.",
        "Anual, pe 20 august, are loc Carnavalul Florilor din Debrețin.",
        "Orașul a fost capitala Ungariei în 1849 și temporar în 1944/45.",
        "Destinație populară: complexul termal Aquaticum cu parc acvatic.",
        "În apropiere se află Parcul Național Hortobágy (patrimoniu UNESCO).",
        "Debrețin este un centru important al scenei de jazz și cultură din Ungaria."
      ],
      "en": [
        "Population: approx. 200,000 inhabitants (2024).",
        "The University of Debrecen was founded in 1538, one of the oldest in the country.",
        "The Reformed Great Church is the most famous landmark of the city.",
        "The Debrecen Flower Carnival is held annually on August 20th.",
        "The city was the capital of Hungary in 1849 and briefly in 1944/45.",
        "Popular destination: Aquaticum thermal bath and water park.",
        "Nearby is the Hortobágy National Park (UNESCO World Heritage site).",
        "Debrecen is a significant center for the Hungarian jazz and cultural scene."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Debrecen, die zweitgrößte Stadt Ungarns, gilt als das ",
      "hu": "Debrecen, a 'kálvinista Róma', Magyarország második legnagyobb városa és a Tiszántúl legfontosabb központja, amely gazdag történelmi, egyházi és kulturális örökséggel rendelkezik. A város jelképe a monumentális Református Nagytemplom, ahol Kossuth Lajos 1849-ben kikiáltotta Magyarország függetlenségét. Debrecen híres egyetemi életéről, a Nagyerdő parkjáról, gyógyfürdőjéről és modern sportlétesítményeiről. A város kulturális életét a Csokonai Színház és a Déri Múzeum (a híres Munkácsy-trilógiával) teszi teljessé. Debrecen a modern fejlődés és a hagyománytisztelet városa, amely kapuként szolgál a Hortobágy pusztai világa felé, s vonzó célpont minden látogató számára.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Debrecen war im 19. Jahrhundert zweimal kurzzeitig die Hauptstadt von Ungarn.", "Die Große Reformierte Kirche ist das größte protestantische Gotteshaus in Ungarn.", "Jährlich im August findet in Debrecen der berühmte Blumenkarneval statt.", "Die Universität von Debrecen ist eine der renommiertesten Bildungseinrichtungen des Landes."],
      "hu": [
        "Debrecen Magyarország legnagyobb vidéki városa, lakossága meghaladja a 200 ezer főt.",
        "A Református Nagytemplom a magyar reformáció és a szabadságharc szimbóluma.",
        "A Déri Múzeumban látható Munkácsy Mihály világhírű Krisztus-trilógiája.",
        "A debreceni Nagyerdő volt az ország első természetvédelmi területe (1939).",
        "A város híres szülötte Szabó Magda írónő, akinek emlékét irodalmi ház őrzi."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hortobagy",
    type: "landmark",
    parent: "hajdu-bihar",
    coords: [21.15, 47.5833],
    name: {"de": "Hortobágy", "hu": "Hortobágy", "ro": "Hortobágy", "en": "Hortobágy"},
    image: "/geo-images/hungary/hortobagy.webp",
    description: {"de": "Der größte Nationalpark Ungarns, der die traditionelle Puszta-Landschaft schützt.", "hu": "Magyarország legnagyobb nemzeti parkja, amely a hagyományos pusztai tájat védi.", "ro": "Cel mai mare parc național din Ungaria, protejând peisajul tradițional Puszta.", "en": "Hungary's largest national park, protecting the traditional Puszta landscape."},
    facts: {"de": ["UNESCO-Welterbe.", "Bekannt für die Neunbögige Brücke und traditionelle Hirtenkultur."], "hu": ["UNESCO világörökség.", "A Kilenclyukú hídról és a hagyományos pásztorkultúráról ismert."], "ro": ["Patrimoniu Mondial UNESCO.", "Cunoscut pentru Podul cu Nouă Arcuri și cultura pastorală tradițională."], "en": ["UNESCO World Heritage site.", "Known for the Nine-holed Bridge and traditional pastoral culture."]},
  
    descriptionAdvanced: {
      "de": "Hortobágy ist das Herz der ungarischen Puszta und der größte Nationalpark des Landes, der für seine unendliche Weite und einzigartige Hirtenkultur bekannt ist. Die Region gehört zum UNESCO-Weltkulturerbe und bewahrt die traditionelle Lebensweise der Puszta-Hirten mit ihren charakteristischen Ziehbrunnen und Peitschenknallen. Besucher können hier seltene Haustierrassen wie das graue Steppenrind, das Zackelschaf und das Wollschwein (Mangalica) in ihrer natürlichen Umgebung beobachten. Das Wahrzeichen der Region ist die Neunbögige Brücke, die sich elegant über den Fluss Hortobágy spannt und Schauplatz traditionsreicher Märkte ist. Hortobágy ist ein Ort von archaischer Schönheit, der die Seele der ungarischen Tiefebene widerspiegelt.",
      "hu": "Hortobágy Magyarország legnagyobb és legismertebb pusztája, az UNESCO Világörökség része, amely a magyar pásztorkultúra és az érintetlen természet egyedülálló őrzőhelye. A hortobágyi rónaság végtelen horizontja, a délibáb és a gulyás-csikós hagyományok a magyar nemzeti identitás legfontosabb jelképei. Itt található a híres Kilenclyukú híd és a Hortobágyi csárda, ahol a látogatók megkóstolhatják a pusztai ételeket. A terület madárvilága nemzetközi jelentőségű, különösen a daruvonulás idején. Hortobágy nemcsak múzeum, hanem élő puszta, ahol a szürke marhák, rackajuhok és a ménesek ma is szabadon élnek, hirdetve a magyar puszta szabadságát és szépségét.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark Hortobágy ist das erste und größte Naturschutzgebiet Ungarns.", "Die Neunbögige Brücke ist die längste Steinbrücke für den Straßenverkehr in Ungarn.", "Hortobágy ist berühmt für seine 'Csikós', die berittenen Hirten mit ihren spektakulären Reitvorführungen.", "Die Region ist ein bedeutendes Vogelparadies und wichtiger Rastplatz für Tausende von Kranichen."],
      "hu": [
        "A Hortobágyi Nemzeti Park Magyarország első és legnagyobb nemzeti parkja (alapítva 1973).",
        "A Kilenclyukú híd 167 méterével az ország leghosszabb kőhídja.",
        "A Hortobágyon több mint 300 madárfaj fordul elő, ami Európában is kiemelkedő.",
        "Itt látható a világ egyik legritkább lófajtája, a vadlovakat bemutató Pentezugi Vadlórezervátum.",
        "A pusztai csillagoségbolt-park minősítés elismeri a terület rendkívül alacsony fényszennyezését."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajduszoboszlo",
    type: "city",
    parent: "hajdu-bihar",
    coords: [21.4, 47.45],
    name: {"de": "Hajdúszoboszló", "hu": "Hajdúszoboszló", "ro": "Hajdúszoboszló", "en": "Hajdúszoboszló"},    description: {"de": "Berühmter Kurort mit dem größten Bäderkomplex Europas.", "hu": "Híres fürdőváros Európa legnagyobb fürdőkomplexumával.", "ro": "Faimoasă stațiune balneară cu cel mai mare complex de băi din Europa.", "en": "Famous spa town with the largest bath complex in Europe."},
    facts: {"de": ["Das Thermalwasser wurde 1925 entdeckt.", "Beliebtes Ziel für Gesundheitstourismus."], "hu": ["A termálvizet 1925-ben fedezték fel.", "Népszerű egészségturisztikai célpont."], "ro": ["Apa termală a fost descoperită în 1925.", "Destinație populară pentru turismul de sănătate."], "en": ["The thermal water was discovered in 1925.", "Popular destination for health tourism."]},
    image: "/poi-images/hajduszoboszlo.webp",
  
    descriptionAdvanced: {
      "de": "Hajdúszoboszló ist der bekannteste Badekurort Ungarns und beherbergt den größten Badekomplex Europas, der jährlich Millionen von Erholungssuchenden anzieht. Das ",
      "hu": "Hajdúszoboszló Európa egyik legnagyobb fürdőkomplexumával rendelkező városa az Alföldön, amelyet méltán neveznek a 'reumások Mekkája'-ként. Világhírnevét az 1925-ben feltörő jódos, brómos és konyhasós gyógyvizének köszönheti, amely számtalan embernek hozott gyógyulást. A Hungarospa fürdőkomplexum nemcsak gyógyhely, hanem igazi vízi paradicsom is: strand, aquapark és egy különleges fedett élményfürdő várja a látogatókat minden évszakban. Hajdúszoboszló barátságos, virágos parkjai, rendezett terei és pezsgő turisztikai élete a pihenés és a szórakozás tökéletes helyszíne, ahol a vendégszeretet és a gyógyító erő kéz a kézben jár.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hajdúszoboszló besitzt den größten Bade- und Wellnesskomplex in ganz Europa.", "Das Heilwasser der Stadt wird aufgrund seiner Farbe und Heilkraft oft als 'flüssiges Gold' bezeichnet.", "Der Aquapark von Hajdúszoboszló war der erste Rutschenpark in Ungarn.", "Die Stadt feiert jährlich das Fest des 'Goldenen Wassers' zur Erinnerung an die Entdeckung der Quellen."],
      "hu": [
        "A hajdúszoboszlói gyógyvizet 1925-ben földgázkutatás közben fedezték fel véletlenül.",
        "A komplexum területe több mint 30 hektár, s egyszerre akár 30 ezer ember is fürödhet benne.",
        "Hajdúszoboszló az ország egyik leglátogatottabb városa Budapest és Hévíz után.",
        "A városban található a Harangház, egy egyedülálló hangművészeti és képzőművészeti alkotás.",
        "A gyógyvíz jellegzetes sötétbarna színét magas ásványianyag-tartalma adja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "eger",
    type: "city",
    parent: "heves",
    coords: [20.3739, 47.9025],
    name: {"de": "Erlau", "hu": "Eger", "ro": "Eger", "en": "Eger"},
    image: "/geo-images/hungary/eger.webp",
    description: {
      "de": "Eger, eine der schönsten Barockstädte Ungarns, liegt im Nordosten des Landes am Fuße des Bükk-Gebirges. Die Stadt ist berühmt für ihre heldenhafte Burg, die 1552 der osmanischen Belagerung standhielt, sowie für ihre erstklassigen Weine, insbesondere das 'Erlauer Stierblut' (Egri Bikavér). Besucher können das nördlichste Minarett aus der Türkenzeit besteigen oder in den historischen Thermalbädern entspannen. Die malerische Altstadt mit ihren Kirchen und Museen macht Eger zu einem der beliebtesten Reiseziele Ungarns.",
      "hu": "Eger, Magyarország egyik legszebb barokk városa, az ország északkeleti részén, a Bükk-hegység lábánál fekszik. A város híres hősies váráról, amely 1552-ben ellenállt az oszmán ostromnak, valamint kiváló borairól, különösen az Egri Bikavérről. A látogatók megmászhatják a török korból származó legészakibb minaretet, vagy kikapcsolódhatnak a történelmi termálfürdőkben. A festői óváros templomaival és múzeumaival Egert Magyarország egyik legnépszerűbb úti céljává teszi.",
      "ro": "Eger, unul dintre cele mai frumoase orașe baroce din Ungaria, este situat în nord-estul țării, la poalele munților Bükk. Orașul este faimos pentru castelul său eroic, care a rezistat asediului otoman în 1552, precum și pentru vinurile sale de primă clasă, în special 'Sânge de Taur de Eger' (Egri Bikavér). Vizitatorii pot urca în cel mai nordic minaret din epoca turcă sau se pot relaxa în băile termale istorice. Centrul vechi pitoresc, cu bisericile și muzeele sale, face din Eger una dintre cele mai populare destinații din Ungaria.",
      "en": "Eger, one of Hungary's most beautiful Baroque cities, is located in the northeastern part of the country at the foot of the Bükk Mountains. The city is famous for its heroic castle, which withstood an Ottoman siege in 1552, and its world-class wines, particularly the 'Bull's Blood of Eger' (Egri Bikavér). Visitors can climb the northernmost minaret from the Turkish era or relax in the historic thermal baths. The picturesque old town, with its churches and museums, makes Eger one of Hungary's most popular travel destinations."
    },
    facts: {
      "de": [
        "Sitz des Komitats Heves und ein bedeutendes religiöses Zentrum.",
        "Die Burg Eger ist ein Symbol des ungarischen Widerstands gegen die Türken.",
        "Heimat des Egri Bikavér, eines der bekanntesten ungarischen Rotweine.",
        "Das Eger-Minarett ist eines von nur drei erhaltenen in Ungarn.",
        "Die Basilika von Eger ist die zweitgrößte Kirche des Landes.",
        "Bekannt für das Tal der Schönen Frau (Szépasszony-völgy) mit seinen Weinkellern.",
        "Das Lyzeum beherbergt eine der schönsten Bibliotheken und eine Camera Obscura.",
        "Beliebtes Ziel für Weintourismus und Wellness."
      ],
      "hu": [
        "Heves vármegye székhelye és jelentős vallási központ.",
        "Az egri vár a török elleni magyar ellenállás jelképe.",
        "Az Egri Bikavér, az egyik legismertebb magyar vörösbor hazája.",
        "Az egri minaret egyike a Magyarországon épségben maradt három török toronynak.",
        "Az egri Bazilika az ország második legnagyobb temploma.",
        "Híres a Szépasszony-völgyről és annak hangulatos borpincéiről.",
        "A Líceum épületében található az ország egyik legszebb könyvtára és egy Camera Obscura.",
        "Népszerű borturisztikai és wellness úti cél."
      ],
      "ro": [
        "Reședința județului Heves și un centru religios important.",
        "Castelul Eger este un simbol al rezistenței maghiare împotriva turcilor.",
        "Casa Egri Bikavér, unul dintre cele mai cunoscute vinuri roșii maghiare.",
        "Minaretul din Eger este unul dintre cele trei rămase în Ungaria.",
        "Bazilica din Eger este a doua cea mai mare biserică din țară.",
        "Faimos pentru Valea Femeii Frumoase (Szépasszony-völgy) și cramele sale.",
        "Liceul găzduiește una dintre cele mai frumoase biblioteci și o Camera Obscura.",
        "Destinație populară pentru turism viticol și wellness."
      ],
      "en": [
        "Seat of Heves County and a significant religious center.",
        "Eger Castle is a symbol of Hungarian resistance against the Turks.",
        "Home of Egri Bikavér, one of the most famous Hungarian red wines.",
        "The Eger Minaret is one of only three surviving Turkish towers in Hungary.",
        "Eger Basilica is the second largest church in the country.",
        "Famous for the Valley of the Beautiful Woman (Szépasszony-völgy) and its wine cellars.",
        "The Lyceum houses one of the most beautiful libraries and a Camera Obscura.",
        "A popular destination for wine tourism and wellness."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Eger, im Norden Ungarns gelegen, ist eine Stadt von historischem Glanz, berühmter Weinkultur und beeindruckender Architektur. Bekannt wurde die Stadt vor allem durch die heldenhafte Verteidigung ihrer Burg gegen das osmanische Heer im Jahr 1552, ein Ereignis, das tief im ungarischen Nationalbewusstsein verankert ist. Das barocke Stadtbild wird von der monumentalen Basilika, dem Lyzeum mit seiner berühmten Bibliothek und dem nördlichsten Minarett aus der Zeit der Türkenherrschaft geprägt. Eger ist zudem das Zentrum einer erstklassigen Weinregion, deren bekanntester Tropfen das ",
      "hu": "Eger a történelmi hősök városa a Mátra és a Bükk lábánál, Magyarország egyik legszebb és leglátogatottabb barokk települése. A város neve elválaszthatatlan az 1552-es várvédéstől, amikor Dobó István maroknyi serege megállította a török áradatot, hősies példát mutatva az utókornak. Eger központja az impozáns vár, a barokk Bazilika és a török kori minaret, amely az ország egyik legészakibb iszlám emléke. A város világhírű borvidék központja is, az Egri Bikavér és a Szépasszony-völgy pincéi a borkultúra szerelmeseinek kötelező célpontjai. Eger pezsgő kulturális élete, termálfürdője és történelmi utcái minden látogatót elvarázsolnak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Eger ist berühmt für seine Burg, die 1552 erfolgreich gegen eine enorme osmanische Übermacht verteidigt wurde.", "Die Stadt beherbergt ein original erhaltenes osmanisches Minarett, das nördlichste seiner Art.", "Das 'Erlauer Stierblut' (Egri Bikavér) ist einer der bekanntesten Rotweine Ungarns.", "Die Basilika von Eger ist die zweitgrößte Kirche Ungarns."],
      "hu": [
        "Eger vára 1552-ben ellenállt a több mint tízszeres török túlerőnek.",
        "Itt található Magyarország egyetlen épségben maradt minaretje a török hódoltság korából.",
        "Az egri Bazilika az ország második legnagyobb temploma az esztergomi után.",
        "A Szépasszony-völgy több mint 200 vulkanikus tufa-falba vájt borospincével várja a vendégeket.",
        "Gárdonyi Géza, az Egri csillagok írója a várban van eltemetve, sírfelirata: 'Csak a teste'."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyongyos",
    type: "city",
    parent: "heves",
    coords: [19.9281, 47.7833],
    name: {"de": "Gyöngyös", "hu": "Gyöngyös", "ro": "Gyöngyös", "en": "Gyöngyös"},
    image: "/geo-images/hungary/gyongyos.webp",
    description: {"de": "Stadt am Fuße des Mátra-Gebirges, das 'Tor zur Mátra'.", "hu": "Város a Mátra lábánál, a 'Mátra kapuja'.", "ro": "Oraș la poalele munților Mátra, 'Poarta către Mátra'.", "en": "City at the foot of the Mátra mountains, the 'Gateway to the Mátra'."},
    facts: {"de": ["Zentrum der Weinregion Mátra.", "Ausgangspunkt für Ausflüge zum Kékes."], "hu": ["A Mátrai borvidék központja.", "Kiindulópont a Kékesre tett kirándulásokhoz."], "ro": ["Centrul regiunii viticole Mátra.", "Punct de plecare pentru excursii la Kékes."], "en": ["Center of the Mátra wine region.", "Starting point for excursions to Kékes."]},
  
    descriptionAdvanced: {
      "de": "Gyöngyös, am Fuße des Mátra-Gebirges gelegen, ist als das ",
      "hu": "Gyöngyös, a 'Mátra kapuja', Heves vármegye jelentős városa, amely történelmi hangulatával és a hegyvidék közelségével vonzza a látogatókat. A város központja a tágas Fő tér a barokk Szent Bertalan-templommal és a Ferences kolostorral, amely az ország egyik leggazdagabb egyházi kincstárát őrzi. Gyöngyös élete szorosan összefonódik a Mátra turizmusával: innen indul a népszerű mátravasút és a Kékes-tető felé vezető utak. A város híres borászatáról is, a Mátrai borvidék fehérborai (pl. Szürkebarát, Olaszrizling) messze földön ismertek. Gyöngyös a kultúra, a vallási emlékek és a természetjárás ideális találkozóhelye az Északi-középhegység lábánál.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gyöngyös ist der wichtigste Knotenpunkt für Ausflüge in das Mátra-Gebirge.", "Das Mátra-Museum im Grassalkovich-Schloss beherbergt ein fast vollständiges Mammutskelett.", "Die Stadt ist ein historisches Zentrum des Weinanbaus am Fuße des Gebirges.", "Von Gyöngyös aus startet die Mátra-Schmalspurbahn, eine beliebte Touristenattraktion."],
      "hu": [
        "Gyöngyös már a középkorban is fontos kereskedelmi és egyházi központ volt a Mátra lábánál.",
        "A Szent Bertalan-templom kincstára az ország második legjelentősebb egyházi gyűjteménye.",
        "Itt található a Mátra Múzeum, amely az ország egyetlen komplett mamutcsontvázát őrzi.",
        "A gyöngyösi Orczy-kastély az alföldi és a hegyvidéki építészet különleges elegye.",
        "A város határában található Európa egyik legnagyobb naperőmű-parkja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "matra",
    type: "landmark",
    parent: "heves",
    coords: [19.9833, 47.8833],
    name: {"de": "Mátra", "hu": "Mátra", "ro": "Mátra", "en": "Mátra"},
    image: "/geo-images/hungary/matra.webp",
    description: {"de": "Gebirgszug in Nordungarn, der den höchsten Gipfel des Landes beherbergt.", "hu": "Hegység Észak-Magyarországon, itt található az ország legmagasabb csúcsa.", "ro": "Lanț muntos în nordul Ungariei, care găzduiește cel mai înalt vârf din țară.", "en": "Mountain range in northern Hungary, home to the country's highest peak."},
    facts: {"de": ["Der Kékes ist mit 1014 Metern der höchste Berg Ungarns.", "Beliebtes Gebiet zum Wandern und Skifahren."], "hu": ["A Kékes 1014 méterével Magyarország legmagasabb hegye.", "Népszerű túrázó- és síterep."], "ro": ["Kékes este cel mai înalt munte din Ungaria, cu 1014 metri.", "Zonă populară pentru drumeții și schi."], "en": ["Kékes is the highest mountain in Hungary at 1014 meters.", "Popular area for hiking and skiing."]},
  
    descriptionAdvanced: {
      "de": "Das Mátra-Gebirge im Norden Ungarns ist die Heimat des Kékes-Tető, der mit 1014 Metern der höchste Gipfel des Landes ist. Die Region ist geprägt von dichten Buchen- und Eichenwäldern, klaren Bächen und einer Vielzahl an Wanderwegen, die Naturliebhaber und Sportler gleichermaßen anziehen. Bekannte Kurorte wie Galyatető oder Mátraháza bieten frische Bergluft und moderne Wellness-Anlagen für Erholungssuchende. Im Winter verwandelt sich das Mátra-Gebirge in eines der beliebtesten Skigebiete Ungarns mit gut präparierten Pisten und Loipen. Die vielfältige Flora und Fauna sowie die atemberaubenden Ausblicke von den Berggipfeln machen die Mátra zu einem der wertvollsten Naturgebiete des Landes.",
      "hu": "A Mátra Magyarország egyik legnépszerűbb hegyvidéki tájegysége, ahol az ország legmagasabb csúcsai (Kékes-tető, Galya-tető) és legsűrűbb erdői találhatók. A vulkanikus eredetű hegység vadregényes völgyei, kristálytiszta forrásai és kiépített túraútvonalai minden évszakban vonzzák a természetbarátokat. A Mátra nemcsak kirándulóhely, hanem fontos gyógyhely is: tiszta levegője és különleges klímája kiválóan alkalmas légzőszervi panaszok kezelésére. Télen a Mátra az ország síközpontjává válik, nyáron pedig a kalandparkok és a kisvasutak nyújtanak élményt. A hegység déli lejtői híres borvidéket alkotnak, ahol a vulkanikus talaj kiváló fehérborokat érlel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Mátra-Gebirge beherbergt den höchsten Berg Ungarns, den Kékes-Tető.", "Die Region ist eines der schneesichersten Gebiete des Landes und ein Zentrum des Wintersports.", "Das Mátra-Gebirge ist vulkanischen Ursprungs, was sich in der Bodenbeschaffenheit und Vegetation zeigt.", "Zahlreiche Wanderwege führen zu Aussichtspunkten mit Blick über die ungarische Tiefebene bis nach Bratislava."],
      "hu": [
        "A Mátrában található Magyarország legmagasabb pontja, a Kékes-tető (1014 m).",
        "A hegység vulkanikus eredetű, amit a sok tufa- és andezit-szikla hirdet.",
        "Galyatetőn működik az ország legmagasabban fekvő kilátója és turistacentruma.",
        "A Mátra erdőiben számos ritka és védett állatfaj él, köztük a hiúz is.",
        "A mátrai kisvasút (Mátravasút) az ország egyik legforgalmasabb és legszebb erdei vasútvonala."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szolnok",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.2, 47.1833],
    name: {"de": "Sollnock", "hu": "Szolnok", "ro": "Szolnok", "en": "Szolnok"},
    description: {
      "de": "Szolnok liegt im Herzen Ungarns an der Mündung der Zagyva in die Theiß und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt ist bekannt für ihre lebendige Flusslandschaft, die moderne Tiszavirág-Brücke und ihre reiche Tradition in der Luftfahrt. Besucher können das beeindruckende Luftfahrtmuseum 'RepTár' erkunden oder in den Thermalbädern der Stadt entspannen. Szolnok ist zudem ein wichtiges Zentrum für Kultur und Sport in der Region der Nördlichen Großen Tiefebene.",
      "hu": "Szolnok Magyarország szívében, a Zagyva tiszai torkolatánál fekszik, és fontos közlekedési csomópont. A város híres a nyüzsgő folyóparti életéről, a modern Tiszavirág hídról és gazdag repüléstörténeti múltjáról. A látogatók felfedezhetik a lenyűgöző RepTár repülőmúzeumot, vagy kikapcsolódhatnak a város termálfürdőiben. Szolnok emellett az Észak-Alföld régió meghatározó kulturális és sportközpontja.",
      "ro": "Szolnok este situat în inima Ungariei, la confluența râului Zagyva cu Tisa, fiind un important nod de transport. Orașul este cunoscut pentru peisajul său fluvial vibrant, podul modern Tiszavirág și tradiția sa bogată în aviație. Vizitatorii pot explora impresionantul muzeu al aviației 'RepTár' sau se pot relaxa în băile termale ale orașului. Szolnok este, de asemenea, un centru important pentru cultură și sport în regiunea Marii Câmpii de Nord.",
      "en": "Szolnok is located in the heart of Hungary at the confluence of the Zagyva and Tisza rivers, serving as a major transportation hub. The city is famous for its vibrant riverfront, the modern Tiszavirág Bridge, and its rich aviation heritage. Visitors can explore the impressive 'RepTár' aviation museum or relax in the city's thermal baths. Szolnok is also a significant cultural and sporting center in the Northern Great Plain region."
    },
    facts: {
      "de": [
        "Sitz des Komitats Jász-Nagykun-Szolnok.",
        "Die Tiszavirág-Brücke ist die längste Fußgängerbrücke Mitteleuropas.",
        "Das RepTár ist eines der modernsten Luftfahrtmuseen in Europa.",
        "Bekannt für das jährliche Gulasch-Festival im September.",
        "Wichtiger Eisenbahnknotenpunkt an der Strecke Budapest-Bukarest.",
        "Die Stadt hat eine renommierte Künstlerkolonie, die 1902 gegründet wurde.",
        "Beliebtes Ziel für Wassersportler auf der Theiß.",
        "Beherbergt das Damjanich-János-Museum mit bedeutenden archäologischen Funden."
      ],
      "hu": [
        "Jász-Nagykun-Szolnok vármegye székhelye.",
        "A Tiszavirág híd Közép-Európa leghosszabb gyalogoshídja.",
        "A RepTár Európa egyik legmodernebb repüléstörténeti múzeuma.",
        "Híres az évente szeptemberben megrendezett Gulyásfesztiválról.",
        "Fontos vasúti csomópont a Budapest-Bukarest vonalon.",
        "A város neves művészteleppel rendelkezik, amelyet 1902-ben alapítottak.",
        "Népszerű úti cél a Tisza menti vízi sportok kedvelői számára.",
        "Itt található a Damjanich János Múzeum jelentős régészeti gyűjteménye."
      ],
      "ro": [
        "Reședința județului Jász-Nagykun-Szolnok.",
        "Podul Tiszavirág este cel mai lung pod pietonal din Europa Centrală.",
        "RepTár este unul dintre cele mai moderne muzee de aviație din Europa.",
        "Cunoscut pentru festivalul anual al gulașului din septembrie.",
        "Nod feroviar important pe ruta Budapesta-București.",
        "Orașul are o colonie de artiști renumită, fondată în 1902.",
        "Destinație populară pentru sporturi nautice pe râul Tisa.",
        "Găzduiește Muzeul Damjanich János cu descoperiri arheologice importante."
      ],
      "en": [
        "Seat of Jász-Nagykun-Szolnok County.",
        "The Tiszavirág Bridge is the longest pedestrian bridge in Central Europe.",
        "RepTár is one of the most modern aviation museums in Europe.",
        "Famous for the annual Goulash Festival held in September.",
        "A major railway hub on the Budapest-Bucharest line.",
        "The city has a renowned artists' colony founded in 1902.",
        "A popular destination for water sports on the Tisza river.",
        "Home to the Damjanich János Museum with significant archaeological finds."
      ]
    },
    image: "/poi-images/szolnok.webp",
  
    descriptionAdvanced: {
      "de": "Szolnok liegt strategisch günstig am Zusammenfluss von Theiß und Zagyva im Herzen der ungarischen Tiefebene und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt hat eine lange Geschichte als Flussübergang und war einst ein wichtiges militärisches und wirtschaftliches Zentrum. Ein besonderes kulturelles Highlight ist die Künstlerkolonie von Szolnok, die seit über einem Jahrhundert Maler und Bildhauer anzieht und das kulturelle Leben der Stadt prägt. Die Stadt ist zudem für ihre Thermalbäder und das imposante Szigligeti-Theater bekannt, das ein wichtiger Ort für das ungarische Schauspielwesen ist. Entlang der Theiß lädt die breite Promenade zu entspannten Spaziergängen ein, während das jährliche Gulasch-Festival die kulinarische Tradition der Region feiert.",
      "hu": "Szolnok, a 'Tisza fővárosa', az Alföld szívében fekvő fontos közlekedési, gazdasági és kulturális központ, ahol a Tisza és a Zagyva folyó találkozik. A város élete elválaszthatatlan a Tiszától: a folyóparti sétányok, a szabadstrand és az emblematikus Tiszavirág-híd a város legszebb részei. Szolnok híres repüléstörténeti múltjáról, amit a modern Reptár múzeum mutat be, valamint pezsgő művészeti életéről, amit a Szolnoki Művésztelep képvisel. A város gyógyfürdője és az aktív vízi sportok lehetősége kiváló pihenést nyújt minden korosztálynak. Szolnok az alföldi vendégszeretet és a modern városi fejlődés harmonikus ötvözete a folyó partján.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szolnok liegt am geografischen Zusammenfluss der Flüsse Theiß und Zagyva.", "Die Stadt beherbergt eine der ältesten und bedeutendsten Künstlerkolonien Ungarns.", "Die Szolnoker Fußgängerbrücke (Tiszavirág-híd) ist die längste ihrer Art in Mitteleuropa.", "Jährlich findet in Szolnok das ungarische Gulasch-Festival statt."],
      "hu": [
        "Szolnok városa már a honfoglalás óta fontos átkelőhely a Tisza folyón.",
        "A Tiszavirág-híd Közép-Európa leghosszabb gyalogoshídja, formája a kérész szárnyát idézi.",
        "Itt található a Reptár, Európa egyik legmodernebb interaktív repülőmúzeuma.",
        "A Szolnoki Művésztelep az ország legrégebbi, folyamatosan működő művésztelepe (alapítva 1902).",
        "Szolnok híres a tiszai halászlevéről és a szolnoki habos isler süteményről."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jaszbereny",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [19.9167, 47.5],
    name: {"de": "Jászberény", "hu": "Jászberény", "ro": "Jászberény", "en": "Jászberény"},
    image: "/geo-images/hungary/jaszbereny.webp",
    description: {"de": "Das kulturelle und wirtschaftliche Zentrum der Region Jászság.", "hu": "A Jászság kulturális és gazdasági központja.", "ro": "Centrul cultural și economic al regiunii Jászság.", "en": "The cultural and economic center of the Jászság region."},
    facts: {"de": ["Bewahrt das Horn des Lehel, ein nationales Relikt.", "Veranstaltet jährlich das Jász-Festival."], "hu": ["Itt őrzik Lehel kürtjét, egy nemzeti ereklyét.", "Évente megrendezik a Jász Világtalálkozót."], "ro": ["Păstrează Cornul lui Lehel, o relicvă națională.", "Găzduiește anual Festivalul Jász."], "en": ["Preserves the Horn of Lehel, a national relic.", "Hosts the annual Jász Festival."]},
  
    descriptionAdvanced: {
      "de": "Jászberény ist das kulturelle und historische Zentrum des Jászság, einer Region, die im 13. Jahrhundert von den Jazygen besiedelt wurde. Die Stadt bewahrt stolz das Erbe dieser Volksgruppe, was im Jazygen-Museum eindrucksvoll dokumentiert wird. Das wertvollste Exponat ist das berühmte Lehel-Horn, ein elfenbeinernes Relikt, das eng mit der ungarischen Sagenwelt verknüpft ist. Jászberény ist zudem für seinen charmanten Tierpark bekannt, der einer der ältesten und beliebtesten des Landes ist und ein tolles Ausflugsziel für Familien darstellt. Die Stadt ist geprägt von barocker Architektur und einer lebendigen Traditionspflege, die bei zahlreichen Festen und kulturellen Veranstaltungen zum Ausdruck kommt.",
      "hu": "Jászberény a Jászság fővárosa és kulturális központja a Zagyva folyó partján, amely büszkén őrzi a jászok különleges történelmi és néprajzi örökségét. A város szimbóluma a Jász Múzeumban őrzött Lehel-kürtje, a jászok szent ereklyéje. Jászberény híres családbarát Állat- és Növénykertjéről, amely az ország egyik leghangulatosabb vidéki vadasparkja. A város főtere a monumentális épületekkel, a barokk templommal és a tágas parkokkal igazi mezővárosi hangulatot áraszt. Jászberény ma is a térség gazdasági motorja, ahol a hagyományőrzés (pl. Csángó Fesztivál) és az ipari fejlődés kéz a kézben jár, vonzó célpontot jelentve a kultúra és a természet kedvelőinek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Jászberény ist das historische Zentrum der Region Jászság (Jazygien).", "Das Lehel-Horn, ein legendäres Elfenbeinhorn aus dem 10. Jahrhundert, wird im örtlichen Museum aufbewahrt.", "Der Tier- und Pflanzenpark von Jászberény ist eine der traditionsreichsten Anlagen Ungarns.", "Die Stadt feiert jährlich das Jazygen-Festival zur Pflege ihrer kulturellen Identität."],
      "hu": [
        "A jászberényi Jász Múzeumban látható a Lehel-kürtje, a jász nép 10. századi ereklyéje.",
        "A Jászberényi Állatkert volt az ország első vidéki állatkertje után alapított egyik legrégebbi vadaspark.",
        "Minden évben itt rendezik meg a Csángó Fesztivált, a népművészet egyik legfontosabb hazai ünnepét.",
        "A város főterén álló Szentháromság-szobor a barokk vallásos művészet remeke.",
        "Jászberény a hűtőgépgyártásáról is világszerte ismertté vált az elmúlt évtizedekben."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kisujszallas",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.7667, 47.2167],
    name: {"de": "Kisújszállás", "hu": "Kisújszállás", "ro": "Kisújszállás", "en": "Kisújszállás"},
    image: "/geo-images/hungary/kisujszallas.webp",
    description: {"de": "Stadt in der Region Nagykunság mit landwirtschaftlicher Prägung.", "hu": "Nagykunsági város mezőgazdasági jelleggel.", "ro": "Oraș în regiunea Nagykunság cu caracter agricol.", "en": "City in the Nagykunság region with an agricultural character."},
    facts: {"de": ["Bekannt für sein Thermalbad.", "Geburtsort des Biologen István Györffy."], "hu": ["Termálfürdőjéről ismert.", "Györffy István biológus szülővárosa."], "ro": ["Cunoscut pentru baia sa termală.", "Locul de naștere al biologului István Györffy."], "en": ["Known for its thermal bath.", "Birthplace of biologist István Györffy."]},
  
    descriptionAdvanced: {
      "de": "Kisújszállás liegt in der Region Nagykunság (Großkumanien) und blickt auf eine Geschichte zurück, die eng mit der Ansiedlung der Kumanen im Mittelalter verbunden ist. Die Stadt ist geprägt von einer ruhigen, ländlichen Atmosphäre und einer Architektur, die typisch für die Siedlungen der ungarischen Tiefebene ist. Ein bedeutendes Wahrzeichen ist das klassizistische Rathaus sowie die reformierte Kirche, die den religiösen Charakter der Region widerspiegelt. Kisújszállás ist stolz auf seine berühmten Söhne, darunter der Erfinder der modernen Computertechnik, John von Neumann, dessen Familie Wurzeln in der Stadt hatte. Heute bietet die Stadt mit dem Kumánia Heil- und Strandbad moderne Erholungsmöglichkeiten in einer traditionsbewussten Umgebung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kisújszállás ist ein bedeutendes Zentrum der kumanischen Kultur in Ungarn.", "Das Kumánia Heil- und Strandbad nutzt wertvolles Thermalwasser für medizinische Anwendungen.", "Die Stadt bewahrt die Traditionen des Handwerks und der kumanischen Volkskunst.", "Die Vorfahren von John von Neumann, dem Pionier der Informatik, stammten aus dieser Stadt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tatabanya",
    type: "city",
    parent: "komarom-esztergom",
    coords: [18.4222, 47.58],
    name: {"de": "Totiserkolonie", "hu": "Tatabánya", "ro": "Tatabánya", "en": "Tatabánya"},
    image: "/geo-images/hungary/tatabanya.webp",
    description: {
      "de": "Tatabánya, am Fuße des Gerecse-Gebirges gelegen, ist eine Stadt mit einer starken industriellen Vergangenheit, die sich zu einem modernen Zentrum entwickelt hat. Das markanteste Wahrzeichen ist das Turul-Denkmal, die größte Vogelstatue Europas, die hoch über der Stadt auf einem Felsen thront. In der Nähe befindet sich die Szelim-Höhle, eine bedeutende archäologische Fundstätte. Tatabánya bietet zudem zahlreiche Möglichkeiten für Wanderungen und Naturerlebnisse in den umliegenden Bergen.",
      "hu": "Tatabánya, a Gerecse-hegység lábánál fekvő város, erős ipari múlttal rendelkezik, amely mára modern központtá fejlődött. Legismertebb jelképe a Turul-emlékmű, Európa legnagyobb madárszobra, amely a város feletti sziklán magasodik. A közelben található a Szelim-barlang, amely jelentős régészeti lelőhely. Tatabánya emellett számos lehetőséget kínál túrázásra és természetjárásra a környező hegyekben.",
      "ro": "Tatabánya, situat la poalele munților Gerecse, este un oraș cu un trecut industrial puternic, care s-a dezvoltat într-un centru modern. Cel mai proeminent simbol al său este Monumentul Turul, cea mai mare statuie a unei păsări din Europa, situată pe o stâncă deasupra orașului. În apropiere se află peștera Szelim, un sit arheologic important. Tatabánya oferă, de asemenea, numeroase oportunități pentru drumeții și experiențe în natură în munții din jur.",
      "en": "Tatabánya, located at the foot of the Gerecse Mountains, is a city with a strong industrial past that has evolved into a modern center. Its most iconic landmark is the Turul Monument, the largest bird statue in Europe, perched on a cliff high above the city. Nearby is the Szelim Cave, a significant archaeological site. Tatabánya also offers numerous opportunities for hiking and nature experiences in the surrounding mountains."
    },
    facts: {
      "de": [
        "Sitz des Komitats Komárom-Esztergom.",
        "Das Turul-Denkmal hat eine Flügelspannweite von 15 Metern.",
        "Entstand 1947 durch den Zusammenschluss von vier Bergbaudörfern.",
        "Die Szelim-Höhle war bereits in der Steinzeit bewohnt.",
        "Wichtiger Industriestandort an der Autobahn M1 (Budapest-Wien).",
        "Das Freilicht-Bergbaumuseum zeigt die Geschichte des Kohlebergbaus.",
        "Beliebtes Basislager für Wanderungen im Gerecse-Gebirge.",
        "Die Stadt hat ein modernes Sportzentrum und ein Thermalbad."
      ],
      "hu": [
        "Komárom-Esztergom vármegye székhelye.",
        "A Turul-emlékmű szárnyfesztávolsága 15 méter.",
        "1947-ben jött létre négy bányászfalu egyesítésével.",
        "A Szelim-barlang már a kőkorszakban is lakott volt.",
        "Fontos ipari központ az M1-es autópálya mentén (Budapest-Bécs).",
        "A Szabadtéri Bányászati Múzeum a szénbányászat történetét mutatja be.",
        "Népszerű kiindulópont a Gerecse-hegységbe induló túrákhoz.",
        "A város modern sportközponttal és termálfürdővel is rendelkezik."
      ],
      "ro": [
        "Reședința județului Komárom-Esztergom.",
        "Monumentul Turul are o anvergură a aripilor de 15 metri.",
        "Format în 1947 prin unirea a patru sate miniere.",
        "Peștera Szelim a fost locuită încă din epoca pietrei.",
        "Centru industrial important pe autostrada M1 (Budapesta-Viena).",
        "Muzeul Mineritului în Aer Liber prezintă istoria extracției cărbunelui.",
        "Bază populară pentru drumeții în munții Gerecse.",
        "Orașul are un centru sportiv modern și o baie termală."
      ],
      "en": [
        "Seat of Komárom-Esztergom County.",
        "The Turul Monument has a wingspan of 15 meters.",
        "Formed in 1947 by the merger of four mining villages.",
        "The Szelim Cave was inhabited as early as the Stone Age.",
        "A major industrial hub on the M1 motorway (Budapest-Vienna).",
        "The Open-Air Mining Museum showcases the history of coal mining.",
        "A popular base for hiking in the Gerecse Mountains.",
        "The city features a modern sports center and a thermal bath."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Tatabánya, am Fuße des Gerecse-Gebirges gelegen, hat sich von einer bedeutenden Bergbaustadt zu einem modernen Industrie- und Sportzentrum gewandelt. Das unübersehbare Wahrzeichen der Stadt ist der Turul-Vogel, die größte Vogelstatue aus Bronze in Europa, die auf einem Felsen hoch über der Stadt thront. Neben dem Turul-Denkmal befindet sich die Szelim-Höhle, eine beeindruckende natürliche Höhle mit prähistorischen Funden und einer fantastischen Aussicht. Tatabánya ist zudem für seine erfolgreiche Sporttradition bekannt und bietet zahlreiche Einrichtungen für Profi- und Freizeitsportler. Die waldreiche Umgebung des Gerecse-Gebirges lädt zu ausgiebigen Wanderungen und Naturbeobachtungen ein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Turul-Denkmal in Tatabánya ist die größte Bronzestatue eines Vogels in Europa.", "Die Szelim-Höhle ist ein bedeutendes paläontologisches Denkmal direkt neben dem Turul-Vogel.", "Die Stadt hat eine lange Bergbaugeschichte, die im Open-Air-Bergbaumuseum dokumentiert wird.", "Tatabánya ist ein wichtiger Knotenpunkt an der Bahnstrecke Wien-Budapest."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "esztergom",
    type: "city",
    parent: "komarom-esztergom",
    coords: [18.7394, 47.7914],
    name: {"de": "Gran", "hu": "Esztergom", "ro": "Esztergom", "en": "Esztergom"},
    image: "/geo-images/hungary/esztergom.webp",
    description: {
      "de": "Esztergom, am malerischen Donauknie gelegen, ist eine der geschichtsträchtigsten Städte Ungarns und das geistige Zentrum der katholischen Kirche des Landes. Die Stadt war die erste Hauptstadt Ungarns und der Geburtsort des Heiligen Stephan, des ersten Königs. Das Stadtbild wird von der monumentalen Basilika dominiert, der größten Kirche Ungarns, die majestätisch auf dem Burgberg thront. Besucher können zudem die Überreste des mittelalterlichen Königspalastes erkunden und den Blick über die Donau nach der Slowakei genießen.",
      "hu": "Esztergom, a festői Dunakanyarban fekszik, Magyarország egyik legfontosabb történelmi városa és a magyar katolikus egyház központja. A város az ország első fővárosa volt, és itt született Szent István, az első magyar király. A városképet a monumentális Bazilika uralja, amely Magyarország legnagyobb temploma, és fenségesen magasodik a Várhegyen. A látogatók megtekinthetik a középkori királyi palota maradványait is, és élvezhetik a Dunára és Szlovákiára nyíló kilátást.",
      "ro": "Esztergom, situat în pitorescul Cot al Dunării, este unul dintre cele mai importante orașe istorice din Ungaria și centrul spiritual al Bisericii Catolice din țară. Orașul a fost prima capitală a Ungariei și locul de naștere al Sfântului Ștefan, primul rege. Aspectul orașului este dominat de Bazilica monumentală, cea mai mare biserică din Ungaria, care tronează maiestuos pe dealul castelului. Vizitatorii pot vedea, de asemenea, rămășițele palatului regal medieval și se pot bucura de vederea peste Dunăre către Slovacia.",
      "en": "Esztergom, situated at the picturesque Danube Bend, is one of Hungary's most historically significant cities and the spiritual center of the country's Catholic Church. The city served as Hungary's first capital and was the birthplace of Saint Stephen, the first king. The cityscape is dominated by the monumental Basilica, the largest church in Hungary, which stands majestically on Castle Hill. Visitors can also explore the remains of the medieval Royal Palace and enjoy views across the Danube into Slovakia."
    },
    facts: {
      "de": [
        "Erste Hauptstadt Ungarns und Sitz des Erzbischofs von Esztergom-Budapest.",
        "Die Basilika von Esztergom ist die größte Kirche und das höchste Gebäude Ungarns.",
        "Geburtsort und Krönungsort des Heiligen Stephan I.",
        "Die Maria-Valeria-Brücke verbindet Esztergom mit Štúrovo in der Slowakei.",
        "Das Christliche Museum beherbergt die bedeutendste kirchliche Kunstsammlung des Landes.",
        "Die Burg von Esztergom war im Mittelalter eine wichtige königliche Residenz.",
        "Bekannt für das malerische Viertel Viziváros am Fuße des Burgbergs.",
        "Wichtiger Industriestandort, unter anderem Sitz eines großen Suzuki-Werks."
      ],
      "hu": [
        "Magyarország első fővárosa és az esztergom-budapesti érsek székhelye.",
        "Az esztergomi Bazilika az ország legnagyobb temploma és legmagasabb épülete.",
        "Szent István király szülő- és koronázási helye.",
        "A Mária Valéria híd köti össze Esztergomot a szlovákiai Párkánnyal.",
        "A Keresztény Múzeum az ország legjelentősebb egyházi művészeti gyűjteményét őrzi.",
        "Az esztergomi vár a középkorban fontos királyi székhely volt.",
        "Híres a Várhegy lábánál fekvő festői Vízivárosról.",
        "Fontos ipari központ, itt található a Suzuki magyarországi gyára."
      ],
      "ro": [
        "Prima capitală a Ungariei și reședința arhiepiscopului de Esztergom-Budapesta.",
        "Bazilica din Esztergom este cea mai mare biserică și cea mai înaltă clădire din Ungaria.",
        "Locul de naștere și de încoronare al regelui Sfântul Ștefan I.",
        "Podul Maria Valeria leagă Esztergom de orașul Štúrovo din Slovacia.",
        "Muzeul Creștin găzduiește cea mai importantă colecție de artă religioasă din țară.",
        "Castelul din Esztergom a fost o reședință regală importantă în Evul Mediu.",
        "Cunoscut pentru cartierul pitoresc Viziváros de la poalele dealului castelului.",
        "Centru industrial important, găzduind o mare fabrică Suzuki."
      ],
      "en": [
        "First capital of Hungary and seat of the Archbishop of Esztergom-Budapest.",
        "Esztergom Basilica is the largest church and tallest building in Hungary.",
        "Birthplace and coronation site of King Saint Stephen I.",
        "The Maria Valeria Bridge connects Esztergom with Štúrovo in Slovakia.",
        "The Christian Museum houses the country's most significant collection of religious art.",
        "Esztergom Castle was a major royal residence during the Middle Ages.",
        "Known for the picturesque Viziváros district at the foot of Castle Hill.",
        "A major industrial hub, home to a large Suzuki manufacturing plant."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Esztergom, die einstige Hauptstadt Ungarns und Wiege des ungarischen Christentums, liegt malerisch an der Donau direkt gegenüber der Slowakei. Hier wurde der erste ungarische König, der Heilige Stephan, gekrönt, und die Stadt ist bis heute der Sitz des ungarischen Primas. Das alles beherrschende Wahrzeichen ist die Esztergomer Basilika, die größte Kirche des Landes, deren gewaltige Kuppel schon von weitem sichtbar ist. In der Schatzkammer der Basilika werden wertvolle sakrale Kunstschätze aus über einem Jahrtausend aufbewahrt. Neben der Basilika laden die Reste des königlichen Schlosses und die charmante Altstadt (Víziváros) am Donauufer dazu ein, in die reiche Geschichte Ungarns einzutauchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Esztergom war die erste Hauptstadt des ungarischen Königreichs.", "Die Basilika von Esztergom ist das größte Kirchenbauwerk in Ungarn.", "In der Stadt wurde der erste ungarische König, der Heilige Stephan, geboren und gekrönt.", "Die Maria-Valeria-Brücke verbindet Esztergom mit der slowakischen Stadt Štúrovo."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tata",
    type: "city",
    parent: "komarom-esztergom",
    coords: [18.3167, 47.65],
    name: {"de": "Totis", "hu": "Tata", "ro": "Tata", "en": "Tata"},
    image: "/geo-images/hungary/tata.webp",
    description: {"de": "Die 'Stadt der Gewässer', bekannt für ihre Lakes und die Burg.", "hu": "A 'Vizek városa', tavairól és váráról ismert.", "ro": "'Orașul apelor', cunoscut pentru lacurile și castelul său.", "en": "The 'City of Waters', known for its lakes and castle."},
    facts: {"de": ["Die Burg Tata liegt malerisch am Ufer des Öreg-Sees.", "Beliebter Ort für Vogelbeobachtungen."], "hu": ["A tatai vár festői környezetben, az Öreg-tó partján fekszik.", "Népszerű madármegfigyelő hely."], "ro": ["Castelul Tata este situat pitoresc pe malul Lacului Öreg.", "Loc popular pentru observarea păsărilor."], "en": ["Tata Castle is picturesquely situated on the shores of Lake Öreg.", "Popular spot for bird watching."]},
  
    descriptionAdvanced: {
      "de": "Tata, auch als die 'Stadt der Gewässer' bekannt, ist eine der idyllischsten Kleinstädte Ungarns und liegt malerisch am Ufer des Öreg-Sees (Alten See). Das Wahrzeichen der Stadt ist die am Seeufer gelegene mittelalterliche Burg, die einst eine beliebte Sommerresidenz ungarischer Könige wie Sigismund von Luxemburg war. Tata besticht durch sein barockes Stadtbild, prachtvolle Schlösser wie das Esterházy-Schloss und zahlreiche Parks, die die Stadt in ein grünes Paradies verwandeln. Einzigartig ist auch der Englische Garten mit seinen künstlichen Ruinen und Thermalquellen, der zum Träumen und Verweilen einlädt. Jedes Jahr im November lockt der 'Wilde Gänse-Zug' Tausende Naturfreunde an den Öreg-See, um die Rast der Zugvögel zu beobachten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tata wird wegen seiner vielen Seen und Quellen oft als 'Stadt der Gewässer' bezeichnet.", "Die Burg von Tata am Öreg-See war eine wichtige Residenz der ungarischen Könige.", "Der Englische Garten von Tata war der erste seiner Art in Ungarn.", "Der Öreg-See ist ein international bedeutendes Schutzgebiet für wandernde Wildgänse."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "salgotarjan",
    type: "city",
    parent: "nograd",
    coords: [19.8053, 48.0986],
    name: {"de": "Salgótarján", "hu": "Salgótarján", "ro": "Salgótarján", "en": "Salgótarján"},
    image: "/geo-images/hungary/salgotarjan.webp",
    description: {"de": "Stadt in einem Tal umgeben von Bergen, ehemalige Bergbaustadt.", "hu": "Hegyekkel körülvett völgyben fekvő város, egykori bányászváros.", "ro": "Oraș într-o vale înconjurată de munți, fost oraș minier.", "en": "City in a valley surrounded by mountains, former mining town."},
    facts: {"de": ["In der Nähe befinden sich die Burgruinen Salgó und Somoskő.", "Hat ein unterirdisches Bergbaumuseum."], "hu": ["A közelben található Salgó és Somoskő vára.", "Földalatti bányamúzeummal rendelkezik."], "ro": ["În apropiere se află ruinele castelelor Salgó și Somoskő.", "Are un muzeu minier subteran."], "en": ["Nearby are the castle ruins of Salgó and Somoskő.", "Has an underground mining museum."]},
  
    descriptionAdvanced: {
      "de": "Salgótarján, eingebettet in die bewaldeten Täler des Karancs-Medves-Gebirges im Norden Ungarns, ist eine Stadt mit einer starken Bergbautradition und einer faszinierenden Umgebung. Nach dem Niedergang des Bergbaus hat sich die Stadt zu einem Tor für Naturtouristen entwickelt, die die bizarren Basaltformationen der Region entdecken möchten. Ein absolutes Highlight ist das unterirdische Bergbaumuseum, das einzige seiner Art in Ungarn, das einen authentischen Einblick in die Arbeit der Kumpel bietet. Hoch über der Stadt thronen die Ruinen der Burgen Salgó und Somoskő, die auf gewaltigen Basaltkegeln errichtet wurden und spektakuläre Ausblicke bieten. Die Region ist zudem bekannt für das europäische Diplom für Naturschutzgebiete, das die Einzigartigkeit der hiesigen vulkanischen Landschaft würdigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Salgótarján beherbergt das einzige unterirdische Bergbaumuseum Ungarns.", "Die Burgruine Salgó steht auf einem 625 Meter hohen Basaltkegel.", "In der Nähe befinden sich die berühmten Basaltorgeln von Somoskő.", "Die Stadt liegt in einem der waldreichsten und gebirgigsten Gebiete Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balassagyarmat",
    type: "city",
    parent: "nograd",
    coords: [19.2944, 48.0792],
    name: {"de": "Jahrmarkt", "hu": "Balassagyarmat", "ro": "Balassagyarmat", "en": "Balassagyarmat"},
    image: "/geo-images/hungary/balassagyarmat.webp",
    description: {"de": "Grenzstadt zur Slowakei, bekannt als die 'mutigste Stadt'.", "hu": "Határváros Szlovákiával, a 'Legbátrabb város' néven ismert.", "ro": "Oraș de graniță cu Slovacia, cunoscut ca 'cel mai curajos oraș'.", "en": "Border town with Slovakia, known as the 'Bravest City'."},
    facts: {"de": ["Wehrte 1919 tschechoslowakische Truppen ab.", "Ehemaliger Sitz des Komitats Nógrád."], "hu": ["1919-ben visszaverte a csehszlovák csapatokat.", "Nógrád vármegye egykori székhelye."], "ro": ["A respins trupele cehoslovace în 1919.", "Fostul sediu al comitatului Nógrád."], "en": ["Repelled Czechoslovak troops in 1919.", "Former seat of Nógrád county."]},
  
    descriptionAdvanced: {
      "de": "Balassagyarmat, im Norden an der Grenze zur Slowakei gelegen, trägt stolz den Ehrentitel 'Civitas Fortissima' (die tapferste Stadt). Diesen Namen erhielt sie für den heldenhaften Widerstand ihrer Bürger gegen die tschechoslowakische Besatzung im Jahr 1919. Die Stadt ist ein kulturelles Zentrum der Region Palócland und bewahrt die einzigartigen Traditionen und den Dialekt dieser Volksgruppe. Sehenswert ist das Palóc-Museum, das tiefe Einblicke in die traditionelle Lebensweise, die farbenfrohen Trachten und die Volkskunst der Region bietet. Balassagyarmat besticht zudem durch seine barocken und klassizistischen Gebäude, die vom einstigen Glanz als Komitatshauptstadt zeugen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balassagyarmat trägt den Ehrentitel 'Civitas Fortissima' für ihre Tapferkeit im Jahr 1919.", "Die Stadt beherbergt das erste Palóc-Museum des Landes, das 1891 gegründet wurde.", "Balassagyarmat war über zwei Jahrhunderte lang der Sitz des Komitats Nógrád.", "Die Stadt liegt direkt am Fluss Ipoly, der die Grenze zur Slowakei bildet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "holloko",
    type: "landmark",
    parent: "nograd",
    coords: [19.5833, 47.9964],
    name: {"de": "Hollókő", "hu": "Hollókő", "ro": "Hollókő", "en": "Hollókő"},
    image: "/geo-images/hungary/holloko.webp",
    description: {"de": "Ein traditionelles Paloczen-Dorf, das als lebendiges Museum erhalten ist.", "hu": "Hagyományos palóc falu, amelyet élő múzeumként őriztek meg.", "ro": "Un sat tradițional Palóc, conservat ca un muzeu viu.", "en": "A traditional Palóc village preserved as a living museum."},
    facts: {"de": ["Das erste Dorf weltweit, das UNESCO-Welterbe wurde.", "Überragt von einer Burgruine aus dem 13. Jahrhundert."], "hu": ["A világ első faluja, amely UNESCO világörökség lett.", "Egy 13. századi várrom magasodik fölé."], "ro": ["Primul sat din lume care a devenit Patrimoniu Mondial UNESCO.", "Dominat de ruinele unui castel din secolul al XIII-lea."], "en": ["The first village in the world to become a UNESCO World Heritage site.", "Overlooked by a 13th-century castle ruin."]},
  
    descriptionAdvanced: {
      "de": "Hollókő ist ein lebendiges Museumsdorf im Norden Ungarns und war das erste Dorf weltweit, das von der UNESCO zum Weltkulturerbe erklärt wurde. Das 'Alte Dorf' (Ófalu) besteht aus 67 traditionellen Lehmhäusern mit charakteristischen Holzbalkonen, die nach einem Brand im frühen 20. Jahrhundert in ihrem ursprünglichen Stil wiedererrichtet wurden. Hier wird die Kultur der Palócen noch aktiv gelebt, sei es durch das Tragen traditioneller Trachten an Feiertagen oder durch das Ausüben alter Handwerke. Über dem Dorf thront die Ruine der Burg Hollókő aus dem 13. Jahrhundert, von der aus man einen weiten Blick über die hügelige Landschaft der Cserhát hat. Ein Besuch in Hollókő ist wie eine Zeitreise in ein Ungarn vergangener Jahrhunderte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hollókő war 1987 das erste Dorf weltweit, das zum UNESCO-Weltkulturerbe erklärt wurde.", "Das 'Alte Dorf' bewahrt die traditionelle Architektur der Palócen in ihrer reinsten Form.", "Die Bewohner tragen zu festlichen Anlässen wie Ostern ihre prächtigen, handgestickten Trachten.", "Die Burg Hollókő wurde nach der tatarischen Invasion zum Schutz der Region erbaut."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentendre",
    type: "city",
    parent: "pest",
    coords: [19.0761, 47.6694],
    name: {"de": "Sankt Andrä", "hu": "Szentendre", "ro": "Szentendre", "en": "Szentendre"},
    image: "/geo-images/hungary/szentendre.webp",
    description: {
      "de": "Szentendre, eine malerische Stadt am Donauufer nördlich von Budapest, ist bekannt für ihre lebendige Künstlerkolonie und ihre mediterrane Atmosphäre. Die Stadt wurde im 17. Jahrhundert von serbischen Flüchtlingen geprägt, was sich in der barocken Architektur und den zahlreichen orthodoxen Kirchen widerspiegelt. Heute ist Szentendre ein beliebtes Ziel für Kunstliebhaber, mit unzähligen Galerien, Museen und charmanten Kunsthandwerksläden. Das nahegelegene Skanzen, das größte Freilichtmuseum Ungarns, bietet zudem tiefe Einblicke in die traditionelle ländliche Kultur des Landes.",
      "hu": "Szentendre, a Duna partján, Budapesttől északra fekvő festői város, amely élénk művésztelepéről és mediterrán hangulatáról ismert. A várost a 17. században szerb menekültek formálták, ami a barokk építészetben és a számos ortodox templomban is tükröződik. Ma Szentendre a művészetkedvelők kedvelt úti célja, számtalan galériával, múzeummal és hangulatos kézműves bolttal. A közeli Skanzen, Magyarország legnagyobb szabadtéri néprajzi múzeuma, mély betekintést nyújt az ország hagyományos népi kultúrájába.",
      "ro": "Szentendre, un oraș pitoresc pe malul Dunării, la nord de Budapesta, este cunoscut pentru colonia sa vibrantă de artiști și atmosfera sa mediteraneană. Orașul a fost modelat în secolul al XVII-lea de refugiații sârbi, fapt reflectat în arhitectura barocă și numeroasele biserici ortodoxe. Astăzi, Szentendre este o destinație populară pentru iubitorii de artă, cu nenumărate galerii, muzee și magazine fermecătoare de artizanat. Skanzen-ul din apropiere, cel mai mare muzeu în aer liber din Ungaria, oferă o perspectivă profundă asupra culturii rurale tradiționale a țării.",
      "en": "Szentendre, a picturesque town on the banks of the Danube north of Budapest, is famous for its vibrant artists' colony and Mediterranean atmosphere. The town was shaped in the 17th century by Serbian refugees, which is reflected in its Baroque architecture and numerous Orthodox churches. Today, Szentendre is a popular destination for art lovers, featuring countless galleries, museums, and charming craft shops. The nearby Skanzen, Hungary's largest open-air museum, provides deep insights into the country's traditional rural culture."
    },
    facts: {
      "de": [
        "Bekannt als 'Stadt der Künste' mit einer bedeutenden Künstlerkolonie.",
        "Geprägt durch serbische und dalmatinische Einflüsse im 17. Jahrhundert.",
        "Beherbergt das Ungarische Freilichtmuseum (Skanzen), das größte des Landes.",
        "Berühmt für das Marzipan-Museum und zahlreiche kleine Galerien.",
        "Die barocke Altstadt mit ihren engen Gassen ist fast vollständig erhalten.",
        "Hat sieben Kirchen, von denen viele ursprünglich orthodox waren.",
        "Beliebtes Ausflugsziel für Touristen aus Budapest.",
        "Liegt am Tor zum malerischen Donauknie."
      ],
      "hu": [
        "A 'művészetek városa' néven ismert, jelentős művészteleppel rendelkezik.",
        "A 17. századi szerb és dalmát hatások határozzák meg a városképét.",
        "Itt található a Szabadtéri Néprajzi Múzeum (Skanzen), az ország legnagyobbja.",
        "Híres a Szamos Marcipán Múzeumról és a számos kis galériáról.",
        "A barokk óváros szűk utcáival szinte teljesen épségben maradt.",
        "Hét temploma van, amelyek közül sok eredetileg ortodox volt.",
        "A budapesti turisták egyik legkedveltebb kirándulóhelye.",
        "A festői Dunakanyar kapujában fekszik."
      ],
      "ro": [
        "Cunoscut ca 'orașul artelor', având o colonie de artiști importantă.",
        "Modelat de influențe sârbe și dalmate în secolul al XVII-lea.",
        "Găzduiește Muzeul Satului (Skanzen), cel mai mare din țară.",
        "Faimos pentru Muzeul Marțipanului și numeroasele galerii mici.",
        "Centrul vechi baroc cu străzile sale înguste este aproape complet conservat.",
        "Are șapte biserici, dintre care multe au fost inițial ortodoxe.",
        "O destinație de excursie foarte populară pentru turiștii din Budapesta.",
        "Situat la poarta pitorescului Cot al Dunării."
      ],
      "en": [
        "Known as the 'City of Arts' with a significant artists' colony.",
        "Shaped by Serbian and Dalmatian influences in the 17th century.",
        "Home to the Hungarian Open-Air Museum (Skanzen), the largest in the country.",
        "Famous for the Marzipan Museum and numerous small galleries.",
        "The Baroque old town with its narrow streets is almost entirely preserved.",
        "Features seven churches, many of which were originally Orthodox.",
        "A highly popular excursion destination for tourists from Budapest.",
        "Located at the gateway to the scenic Danube Bend."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Szentendre, malerisch am Donauknie nördlich von Budapest gelegen, ist als 'Stadt der Künstler' bekannt und besticht durch ihr mediterranes Flair. Die Stadt wurde im 17. Jahrhundert von serbischen, griechischen und dalmatinischen Flüchtlingen geprägt, was man heute noch an den prächtigen orthodoxen Kirchen und der Architektur erkennen kann. Die verwinkelten Kopfsteinpflastergassen, bunten Fassaden und kleinen Galerien machen Szentendre zu einem der beliebtesten Ausflugsziele in Ungarn. Neben dem berühmten Marzipanmuseum und dem Freilichtmuseum (Skanzen) bietet die Stadt eine Vielzahl an kleinen Werkstätten für Kunsthandwerk. Ein Spaziergang entlang der Donaupromenade rundet das Erlebnis in dieser farbenfrohen und geschichtsträchtigen Stadt ab.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szentendre ist berühmt für seine lebendige Künstlerkolonie und zahlreiche Galerien.", "Die Stadt wurde architektonisch stark von serbischen Siedlern im 17. Jahrhundert geprägt.", "Das Szentendreer Skanzen ist das größte Freilichtmuseum für Volksarchitektur in Ungarn.", "Das Marzipanmuseum zeigt beeindruckende Skulpturen aus Zucker und Mandeln."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "godollo",
    type: "city",
    parent: "pest",
    coords: [19.3478, 47.5969],
    name: {"de": "Gödöllő", "hu": "Gödöllő", "ro": "Gödöllő", "en": "Gödöllő"},
    image: "/geo-images/hungary/godollo.webp",
    description: {"de": "Stadt nahe Budapest, berühmt für ihr königliches Schloss.", "hu": "Budapest közeli város, híres királyi kastélyáról.", "ro": "Oraș lângă Budapesta, faimos pentru palatul său regal.", "en": "City near Budapest, famous for its royal palace."},
    facts: {"de": ["Das Schloss Gödöllő war die Sommerresidenz von Kaiserin Sisi.", "Sitz der Szent-István-Universität."], "hu": ["A Gödöllői Királyi Kastély Sisi császárné nyári rezidenciája volt.", "A Szent István Egyetem székhelye."], "ro": ["Palatul Gödöllő a fost reședința de vară a Împărătesei Sisi.", "Sediul Universității Szent István."], "en": ["The Royal Palace of Gödöllő was the summer residence of Empress Sisi.", "Seat of Szent István University."]},
  
    descriptionAdvanced: {
      "de": "Gödöllő ist weltberühmt für das Grassalkovich-Schloss, eines der bedeutendsten Barockensembles Ungarns und die einstige Lieblingsresidenz von Kaiserin Elisabeth (Sissi). Das Schloss ist ein architektonisches Meisterwerk mit prachtvollen Prunksälen, einem königlichen Reitstall und einem weitläufigen Schlosspark, der zum Flanieren einlädt. Die enge Verbindung zu ",
      "hu": "Gödöllő Budapesttől keletre fekvő város, amely leginkább monumentális barokk kastélyáról, a Grassalkovich-kastélyról híres. Ez az épület Magyarország egyik legnagyobb és legszebb barokk palotája, amely a 19. század második felében I. Ferenc József és Erzsébet királyné (Sisi) kedvenc pihenőhelyévé vált. A kastély falai között ma múzeum működik, amely hűen mutatja be a királyi pár életét és a magyar arisztokrácia mindennapjait. A város azonban több egy kastélynál: büszkélkedhet a Szent István Egyetemmel, gyönyörű parkokkal és a Gödöllői-dombság természeti értékeivel. Gödöllő kulturális élete is gazdag, számos zenei és hagyományőrző rendezvénynek ad otthont, amelyek a királyi múltat idézik fel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Gödöllő war die bevorzugte Sommerresidenz der Kaiserin Sissi.", "Es ist eines der größten und bedeutendsten Barockschlösser Ungarns.", "Gödöllő beherbergt das einzige Barocktheater des Landes, das noch bespielt wird.", "Die Stadt ist ein Zentrum der Agrarwissenschaften mit einer traditionsreichen Universität."],
      "hu": [
        "A gödöllői Grassalkovich-kastély a magyarországi barokk építészet egyik csúcspontja.",
        "Erzsébet királyné (Sisi) több időt töltött itt, mint bármely más rezidenciáján Bécsen kívül.",
        "Itt található az ország egyik legrégebbi és legjelentősebb agrártudományi egyeteme.",
        "A Gödöllői Királyi Kastélypark természetvédelmi terület, számos ritka növényfajjal.",
        "A városban található a Máriabesnyői Nagyboldogasszony Bazilika, amely fontos zarándokhely."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vac",
    type: "city",
    parent: "pest",
    coords: [19.1306, 47.7756],
    name: {"de": "Waitzen", "hu": "Vác", "ro": "Vác", "en": "Vác"},
    image: "/geo-images/hungary/vac.webp",
    description: {"de": "Historische Stadt am Donauknie mit barocker Architektur.", "hu": "Történelmi város a Dunakanyarban, barokk építészettel.", "ro": "Oraș istoric la Cotul Dunării cu arhitectură barocă.", "en": "Historic city at the Danube Bend with Baroque architecture."},
    facts: {"de": ["Hat den einzigen Triumphbogen Ungarns.", "Sitz eines katholischen Bistums."], "hu": ["Itt található Magyarország egyetlen diadalíve.", "Katolikus püspöki székhely."], "ro": ["Are singurul arc de triumf din Ungaria.", "Sediul unei episcopii catolice."], "en": ["Has the only triumphal arch in Hungary.", "Seat of a Catholic bishopric."]},
  
    descriptionAdvanced: {
      "de": "Vác, am malerischen Donauknie gelegen, ist eine Stadt von barocker Schönheit und reicher religiöser Tradition. Das Zentrum der Stadt ist der prächtige Hauptplatz (Március 15. tér), der von aufwendig restaurierten Gebäuden und der markanten Unterkirche gesäumt wird. Einzigartig ist die Vác-Mumienausstellung ",
      "hu": "Vác a Duna bal partján fekvő festői barokk város, amely gazdag történelmi múltjával és vallási emlékeivel tűnik ki a Dunakanyar települései közül. A város központja a Március 15. tér, amely egyedülálló, szinte érintetlen barokk épületeivel és hangulatos kávézóival varázsolja el a látogatókat. Vác büszkélkedhet Magyarország egyetlen diadalívével, amelyet Mária Terézia tiszteletére emeltek, valamint az impozáns Székesegyházzal. A város nemzetközi hírnevét az 1994-ben felfedezett 'váci múmiáknak' is köszönheti, amelyek a Fehérek templomának kriptájából kerültek elő, és ma a Tragor Ignác Múzeumban láthatók. A Duna-parti sétány és a környező dombok kiváló lehetőséget nyújtanak a kikapcsolódásra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Dom von Vác ist das einzige klassizistische Kathedralgebäude in Ungarn.", "Die Mumien von Vác wurden zufällig bei Renovierungsarbeiten in einer Krypta entdeckt.", "Der Triumphbogen in Vác ist das einzige Bauwerk dieser Art im ganzen Land.", "Vác besitzt einen der schönsten barocken Hauptplätze in Mitteleuropa."],
      "hu": [
        "Vác az egyetlen magyarországi város, ahol klasszicista stílusú diadalív (Kőkapu) található.",
        "A váci Székesegyház az ország egyik legjelentősebb és legnagyobb klasszicista temploma.",
        "A 'Memento Mori' kiállítás a 18. századi természetes módon mumifikálódott polgárokat mutatja be.",
        "Vácon épült fel az első magyarországi vasútvonal végállomása 1846-ban.",
        "A város főtere, a Március 15. tér, Európa egyik legszebb barokk stílusú tere."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "visegrad",
    type: "landmark",
    parent: "pest",
    coords: [18.9667, 47.7833],
    name: {"de": "Plintenburg", "hu": "Visegrád", "ro": "Visegrád", "en": "Visegrád"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Kleine Stadt am Donauknie, berühmt für ihre mittelalterliche Zitadelle.", "hu": "Kisváros a Dunakanyarban, híres középkori fellegváráról.", "ro": "Mic oraș la Cotul Dunării, faimos pentru cetatea sa medievală.", "en": "Small town at the Danube Bend, famous for its medieval citadel."},
    facts: {"de": ["Ehemalige königliche Residenz.", "Namensgeber der Visegrád-Gruppe (V4)."], "hu": ["Egykori királyi székhely.", "A Visegrádi Együttműködés (V4) névadója."], "ro": ["Fostă reședință regală.", "A dat numele Grupului de la Visegrád (V4)."], "en": ["Former royal residence.", "Namesake of the Visegrád Group (V4)."]},
  
    descriptionAdvanced: {
      "de": "Visegrád, im Herzen des spektakulären Donauknies gelegen, war im Mittelalter eine der glanzvollsten Residenzen der ungarischen Könige. Hoch auf einem steilen Fels thront die Wolkenburg (Fellegvár), von der aus man einen der atemberaubendsten Panoramablicke über die Donauschleife genießen kann. Im Tal befinden sich die Überreste des Renaissance-Palastes von König Matthias Corvinus, der einst als ",
      "hu": "Visegrád a Dunakanyar legszebb pontján fekvő történelmi város, amely a középkorban a magyar királyok székhelye és a térség egyik legfontosabb politikai központja volt. A város fölé magasodik a Fellegvár, amelynek falai között egykor a magyar koronázási jelvényeket is őrizték, s ahonnan lenyűgöző panoráma nyílik a folyó éles kanyarulatára. A Duna partján található a Királyi Palota, amelyet Károly Róbert alapított, és Mátyás király idején érte el fénykorát mint pazar reneszánsz rezidencia. Visegrád ma is a magyar történelem élő emlékműve, ahol minden évben megrendezik a Nemzetközi Palotajátékokat, felidézve a lovagi tornák és királyi találkozók hangulatát. A környező erdők és kirándulóhelyek a természetjárók kedvelt célpontjai.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Visegrád war im 14. Jahrhundert kurzzeitig die offizielle Hauptstadt Ungarns.", "Der Renaissance-Palast von König Matthias war berühmt für seine prachtvollen Marmorbrunnen.", "Die Wolkenburg (Fellegvár) bewahrte jahrhundertelang die ungarischen Kroninsignien auf.", "Das Donauknie bei Visegrád gilt als eine der schönsten Flusslandschaften Europas."],
      "hu": [
        "1335-ben itt tartották a híres visegrádi királytalálkozót a magyar, a cseh és a lengyel uralkodó részvételével.",
        "A Salamon-torony a középkori magyar várépítészet egyik legépebben maradt lakótornya.",
        "A Visegrádi Fellegvár a 13. században épült IV. Béla király parancsára.",
        "Mátyás király palotáját kortársai a 'földi paradicsomként' emlegették reneszánsz szépsége miatt.",
        "A város felett található Nagyvillám-hegyen bobpálya és sípálya is várja az aktív turistákat."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kaposvar",
    type: "city",
    parent: "somogy",
    coords: [17.7897, 46.3592],
    name: {"de": "Kopisch", "hu": "Kaposvár", "ro": "Kaposvár", "en": "Kaposvár"},
    image: "/geo-images/hungary/kaposvar.webp",
    description: {
      "de": "Kaposvár, die 'Stadt der Blumen und Maler', liegt im Südwesten Ungarns in der hügeligen Region Somogy. Die Stadt ist bekannt für ihre gepflegten Parks, die charmante klassizistische Architektur und ihr reiches kulturelles Erbe. Kaposvár ist der Geburtsort des berühmten Malers József Rippl-Rónai, dessen Erbe im Rippl-Rónai-Museum und in seiner ehemaligen Villa gepflegt wird. Mit ihrer Universität und dem renommierten Csiky-Gergely-Theater ist die Stadt ein wichtiges geistiges Zentrum der Region.",
      "hu": "Kaposvár, a 'virágok és festők városa', Délnyugat-Magyarországon, a Somogyi-dombság szívében fekszik. A város híres gondozott parkjairól, hangulatos klasszicista építészetéről és gazdag kulturális örökségéről. Kaposvár Rippl-Rónai József festőművész szülővárosa, akinek emlékét a Rippl-Rónai Múzeum és egykori villája őrzi. Egyetemével és a neves Csiky Gergely Színházzal a város a régió fontos szellemi központja.",
      "ro": "Kaposvár, 'orașul florilor și al pictorilor', este situat în sud-vestul Ungariei, în regiunea deluroasă Somogy. Orașul este cunoscut pentru parcurile sale bine întreținute, arhitectura clasicistă fermecătoare și moștenirea culturală bogată. Kaposvár este locul de naștere al faimosului pictor József Rippl-Rónai, a cărui moștenire este păstrată în Muzeul Rippl-Rónai și în fosta sa vilă. Cu universitatea sa și renumitul Teatru Csiky Gergely, orașul este un centru intelectual important al regiunii.",
      "en": "Kaposvár, the 'City of Flowers and Painters,' is located in southwestern Hungary in the hilly Somogy region. The city is known for its well-kept parks, charming Neoclassical architecture, and rich cultural heritage. Kaposvár is the birthplace of the famous painter József Rippl-Rónai, whose legacy is preserved in the Rippl-Rónai Museum and his former villa. With its university and the renowned Csiky Gergely Theatre, the city serves as a major intellectual hub for the region."
    },
    facts: {
      "de": [
        "Sitz des Komitats Somogy.",
        "Bekannt für das Csiky-Gergely-Theater, eines der schönsten Ungarns.",
        "Heimat des Rippl-Rónai-Museums mit einer bedeutenden Kunstsammlung.",
        "Die Stadt hat über 40 Brunnen und zahlreiche blumengeschmückte Plätze.",
        "Wichtiger Bildungsstandort mit der Universität Kaposvár.",
        "Das Thermalbad Virágfürdő ist eines der größten in der Region.",
        "Veranstaltet jährlich das Rippl-Rónai-Festival der Malerei.",
        "Liegt in der Nähe des Zselic-Landschaftsschutzgebiets (Sternenpark)."
      ],
      "hu": [
        "Somogy vármegye székhelye.",
        "Híres a Csiky Gergely Színházról, amely az ország egyik legszebb színházépülete.",
        "Itt található a Rippl-Rónai Múzeum jelentős művészeti gyűjteménye.",
        "A városban több mint 40 szökőkút és számos virágos tér található.",
        "Fontos oktatási központ a Kaposvári Egyetemnek köszönhetően.",
        "A Virágfürdő a régió egyik legnagyobb termál- és élményfürdője.",
        "Minden évben megrendezik a Rippl-Rónai Fesztivált.",
        "A közelben található a Zselici Tájvédelmi Körzet (Csillagoségbolt-park)."
      ],
      "ro": [
        "Reședința județului Somogy.",
        "Faimos pentru Teatrul Csiky Gergely, unul dintre cele mai frumoase din Ungaria.",
        "Găzduiește Muzeul Rippl-Rónai cu o colecție de artă importantă.",
        "Orașul are peste 40 de fântâni arteziene și numeroase piețe cu flori.",
        "Centru educațional important cu Universitatea din Kaposvár.",
        "Baia termală Virágfürdő este una dintre cele mai mari din regiune.",
        "Găzduiește anual Festivalul Rippl-Rónai dedicat picturii.",
        "Situat în apropierea Rezervației Peisagistice Zselic (Parc de cer stelat)."
      ],
      "en": [
        "Seat of Somogy County.",
        "Famous for the Csiky Gergely Theatre, one of Hungary's most beautiful theaters.",
        "Home to the Rippl-Rónai Museum with a significant art collection.",
        "The city features over 40 fountains and numerous flower-filled squares.",
        "A major educational hub with the University of Kaposvár.",
        "The Virágfürdő thermal bath is one of the largest in the region.",
        "Hosts the annual Rippl-Rónai Festival of Painting.",
        "Located near the Zselic Landscape Protection Area (Starry Sky Park)."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Kaposvár, die ",
      "hu": "Kaposvár, Somogy vármegye székhelye, a 'virágok városa', amely nevét gondozott parkjairól, színes köztereiről és szecessziós építészetéről kapta. A város kulturális élete kiemelkedő, a Csiky Gergely Színház az ország egyik legnevesebb teátruma, míg a Rippl-Rónai Múzeum a híres posztimpresszionista festőművész hagyatékát őrzi. Kaposvár belvárosa sétálóutcáival és felújított palotáival mediterrán hangulatot áraszt, ahol a művészet és a mindennapi élet kéz a kézben jár. A várost körülöleli a Zselic dombvidéke, amely nemcsak természeti szépségeiről, hanem a 'Csillagparkjáról' is híres, hiszen itt az ország egyik legalacsonyabb fényszennyezésű egét figyelhetjük meg. Kaposvár a modern dunántúli város és a hagyományőrző vidéki központ ideális ötvözete.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kaposvár wird aufgrund ihrer vielen Parks und Gärten oft als 'Stadt der Blumen' bezeichnet.", "Der Maler József Rippl-Rónai, ein Meister des ungarischen Jugendstils, lebte und wirkte hier.", "Das Csiky-Gergely-Theater ist ein architektonisches Juwel der Stadt.", "Die Region Zselic bei Kaposvár ist einer der ersten Sternenparks in Europa."],
      "hu": [
        "Kaposvárt hét dombra építették, hasonlóan az örök városhoz, Rómához.",
        "Itt található a Rippl-Rónai Emlékház és Látogatóközpont, a művész egykori villájában.",
        "A Csiky Gergely Színház épülete a magyar szecessziós építészet egyik remekműve.",
        "A közeli Deseda-tó Magyarország leghosszabb mesterséges tava, kedvelt üdülőhely.",
        "A Zselici Csillagoségbolt-park az ország első ilyen jellegű nemzetközi minősítésű területe."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siofok",
    type: "city",
    parent: "somogy",
    coords: [18.05, 46.9],
    name: {"de": "Siófok", "hu": "Siófok", "ro": "Siófok", "en": "Siófok"},
    image: "/geo-images/hungary/siofok.webp",
    description: {"de": "Die 'Hauptstadt des Plattensees', bekannt für ihr reges Nachtleben und Strände.", "hu": "A 'Balaton fővárosa', pezsgő éjszakai életéről és strandjairól ismert.", "ro": "'Capitala Lacului Balaton', cunoscută pentru viața de noapte vibrantă și plaje.", "en": "The 'Capital of Lake Balaton', known for its vibrant nightlife and beaches."},
    facts: {"de": ["Geburtsort des Komponisten Emmerich Kálmán.", "Wahrzeichen ist der Wasserturm im Zentrum."], "hu": ["Kálmán Imre zeneszerző szülővárosa.", "Jelképe a központban álló Víztorony."], "ro": ["Locul de naștere al compozitorului Emmerich Kálmán.", "Simbolul său este Turnul de Apă din centru."], "en": ["Birthplace of composer Emmerich Kálmán.", "Its landmark is the Water Tower in the center."]},
  
    descriptionAdvanced: {
      "de": "Siófok, am Ostufer des Plattensees gelegen, ist als die ",
      "hu": "Siófok a Balaton déli partjának legnagyobb városa, amelyet méltán neveznek a 'magyar tenger nyári fővárosának'. A város a Balaton legfontosabb turisztikai központja, ahol a sekély, homokos part és a pezsgő éjszakai élet (különösen a Petőfi sétányon) vonzza a látogatók tömegeit. Siófok azonban nem csak a strandolásról szól: a város jelképe a felújított Víztorony, amelynek tetejéről lenyűgöző panoráma nyílik a tó. A kikötő a Balaton legforgalmasabb hajózási csomópontja, ahonnan számos menetrendszerinti és sétahajó indul. Kulturális értékei között Kálmán Imre, a világhírű operettszerző szülőháza és múzeuma emelkedik ki, emlékeztetve a város elegáns, múlt századi hangulatára.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Siófok ist die größte Stadt am Plattensee und ein Zentrum des Sommertourismus.", "Der Komponist Emmerich Kálmán, Schöpfer der 'Csárdásfürstin', wurde hier geboren.", "Der 45 Meter hohe Wasserturm im Stadtzentrum ist das Wahrzeichen von Siófok.", "Der Hafen von Siófok ist der Heimathafen der größten Flotte am Balaton."],
      "hu": [
        "Siófok a világhírű operettszerző, Kálmán Imre ('A Csárdáskirálynő' szerzője) szülővárosa.",
        "A siófoki kikötőből indul a legrégebbi balatoni hajójárat a túlpartra, Balatonfüredre.",
        "A város jelképe a 45 méter magas Víztorony, amely ma forgó kávézóként és kilátóként működik.",
        "Siófoknál található a Sió-csatorna zsiliprendszere, amely a Balaton vízszintjét szabályozza.",
        "A város strandjai összesen több mint 15 kilométer hosszan nyúlnak el a tó partján."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonfoldvar",
    type: "city",
    parent: "somogy",
    coords: [17.8833, 46.85],
    name: {"de": "Balatonföldvár", "hu": "Balatonföldvár", "ro": "Balatonföldvár", "en": "Balatonföldvár"},
    image: "/geo-images/hungary/balatonfoldvar.webp",
    description: {"de": "Beliebter Ferienort am Südufer des Plattensees.", "hu": "Népszerű üdülőhely a Balaton déli partján.", "ro": "Stațiune populară pe malul sudic al Lacului Balaton.", "en": "Popular resort town on the southern shore of Lake Balaton."},
    facts: {"de": ["Bekannt für seinen großen Yachthafen.", "Hat eine schöne platanengesäumte Promenade."], "hu": ["Nagy vitorláskikötőjéről ismert.", "Gyönyörű platánsoros sétánya van."], "ro": ["Cunoscut pentru portul său mare de iahturi.", "Are o frumoasă promenadă mărginită de platani."], "en": ["Known for its large marina.", "Has a beautiful plane tree-lined promenade."]},
  
    descriptionAdvanced: {
      "de": "Balatonföldvár gilt als einer der elegantesten und am besten geplanten Ferienorte am Südufer des Plattensees. Die Stadt zeichnet sich durch ihre großzügigen Parkanlagen, die breiten Promenaden und den prächtigen Yachthafen aus, der zu den schönsten am See gehört. Ein besonderes Merkmal sind die vielen historischen Villen aus der Zeit der Jahrhundertwende, die der Stadt einen nostalgischen Charme verleihen. Vom Hochufer aus bietet sich ein atemberaubender Panoramablick über den Balaton bis hin zur Halbinsel Tihany am gegenüberliegenden Ufer. Balatonföldvár ist ein Ort der Ruhe und Erholung, der besonders bei Seglern und Familien beliebt ist, die eine kultivierte Urlaubsatmosphäre schätzen.",
      "hu": "Balatonföldvár a déli part egyik legelegánsabb üdülőhelye, amely parkosított környezetével, hatalmas platánfáival és patinás villáival a békebeli Balaton hangulatát idézi. A települést a 19. század végén a Széchényi család alapította mint tervezett fürdővárost, s azóta is megőrizte rendezett, nyugodt arculatát. A város legszebb része a több mint egy kilométer hosszú, kettős platánsorral szegélyezett Kvassay sétány, amely közvetlenül a vízparton húzódik. Balatonföldvár büszkélkedhet a Balaton egyik legmodernebb vitorláskikötőjével, valamint a magasparton található Hajózástörténeti Látogatóközponttal, ahonnan az egyik legszebb kilátás nyílik a Tihanyi-félszigetre és a tó északi partjának hegyeire.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balatonföldvár besitzt einen der größten und modernsten Segelhäfen am Plattensee.", "Das Hochufer bietet einen der schönsten Aussichtspunkte auf den gesamten See.", "Die Stadt wurde Ende des 19. Jahrhunderts systematisch als Kurort geplant.", "Der weitläufige Park am Hafen beherbergt seltene und geschützte Baumarten."],
      "hu": [
        "A várost a 19. század végén gróf Széchényi Imre és Viktor alapította és tervezte meg.",
        "A Hajózástörténeti Látogatóközpont épülete egy hajót formáz, tetején 25 méter magas kilátóval.",
        "A település nevét a területén található vaskori kelta földvárról kapta.",
        "A Kvassay sétány platánfái több mint 100 évesek, és helyi védettség alatt állnak.",
        "Balatonföldvár az ország egyik legvirágosabb városa, többször nyert el rangos kertészeti díjakat."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyiregyhaza",
    type: "city",
    parent: "szabolcs-szatmar-bereg",
    coords: [21.7167, 47.95],
    name: {"de": "Nyíregyháza", "hu": "Nyíregyháza", "ro": "Nyíregyháza", "en": "Nyíregyháza"},
    image: "/geo-images/hungary/nyiregyhaza.webp",
    description: {
      "de": "Nyíregyháza, im Nordosten Ungarns gelegen, ist eine dynamisch wachsende Stadt und das Zentrum der Region Nyírség. Die Stadt ist vor allem für den Tierpark Sóstó bekannt, der als einer der schönsten und modernsten Zoos in Europa gilt. Der Stadtteil Sóstógyógyfürdő bietet zudem ein beliebtes Thermalbad und ein Freilichtmuseum, das die traditionelle ländliche Architektur der Region zeigt. Nyíregyháza ist ein wichtiger Bildungsstandort und ein Tor zu den kulturellen Schätzen des Nordostens.",
      "hu": "Nyíregyháza, Magyarország északkeleti részén fekvő dinamikusan fejlődő város, a Nyírség központja. A város leginkább a Sóstó Zoo-ról ismert, amelyet Európa egyik legszebb és legmodernebb állatkertjeként tartanak számon. Sóstógyógyfürdő városrésze népszerű termálfürdőt és egy skanzent is kínál, amely a régió hagyományos népi építészetét mutatja be. Nyíregyháza fontos oktatási központ és kapu az északkeleti országrész kulturális kincseihez.",
      "ro": "Nyíregyháza, situat în nord-estul Ungariei, este un oraș în dezvoltare dinamică și centrul regiunii Nyírség. Orașul este cunoscut în special pentru Grădina Zoologică Sóstó, considerată una dintre cele mai frumoase și moderne din Europa. Cartierul Sóstógyógyfürdő oferă, de asemenea, o baie termală populară și un muzeu în aer liber care prezintă arhitectura rurală tradițională a regiunii. Nyíregyháza este un centru educațional important și o poartă către comorile culturale din nord-est.",
      "en": "Nyíregyháza, located in northeastern Hungary, is a dynamically growing city and the center of the Nyírség region. The city is best known for the Sóstó Zoo, widely regarded as one of the most beautiful and modern zoos in Europe. The Sóstógyógyfürdő district also features a popular thermal bath and an open-air museum showcasing the region's traditional rural architecture. Nyíregyháza is a significant educational hub and a gateway to the cultural treasures of the northeast."
    },
    facts: {
      "de": [
        "Siebtgrößte Stadt Ungarns und Sitz des Komitats Szabolcs-Szatmár-Bereg.",
        "Der Tierpark Sóstó beherbergt über 500 Tierarten in naturnahen Gehegen.",
        "Sóstógyógyfürdő ist ein staatlich anerkannter Kurort.",
        "Das Freilichtmuseum (Skanzen) zeigt das dörfliche Leben des 19. Jahrhunderts.",
        "Die Stadt hat eine bedeutende Universität und mehrere Forschungsinstitute.",
        "Bekannt für den großen Marktplatz und die evangelische Kirche.",
        "Wichtiger Knotenpunkt für den Handel mit der Ukraine und Rumänien.",
        "Die Region ist berühmt für den Anbau von Čpfeln und Pflaumen."
      ],
      "hu": [
        "Magyarország hetedik legnagyobb városa és Szabolcs-Szatmár-Bereg vármegye székhelye.",
        "A Sóstó Zoo több mint 500 állatfajnak ad otthont természetközeli kifutókban.",
        "Sóstógyógyfürdő országosan elismert gyógyhely.",
        "A Múzeumfalu (Skanzen) a 19. századi falusi életet mutatja be.",
        "A város jelentős egyetemmel és több kutatóintézettel rendelkezik.",
        "Ismert a tágas tereiről és az evangélikus templomáról.",
        "Fontos kereskedelmi csomópont Ukrajna és Románia felé.",
        "A régió híres az alma- és szilvatermesztéséről."
      ],
      "ro": [
        "Al șaptelea oraș ca mărime din Ungaria și reședința județului Szabolcs-Szatmár-Bereg.",
        "Grădina Zoologică Sóstó găzduiește peste 500 de specii de animale.",
        "Sóstógyógyfürdő este o stațiune balneară recunoscută oficial.",
        "Muzeul Satului (Skanzen) prezintă viața rurală din secolul al XIX-lea.",
        "Orașul are o universitate importantă și mai multe institute de cercetare.",
        "Cunoscut pentru piața sa mare și biserica evanghelică.",
        "Nod comercial important către Ucraina și România.",
        "Regiunea este faimoasă pentru cultivarea merelor și prunelor."
      ],
      "en": [
        "Seventh largest city in Hungary and the seat of Szabolcs-Szatmár-Bereg County.",
        "Sóstó Zoo houses over 500 animal species in naturalistic enclosures.",
        "Sóstógyógyfürdő is an officially recognized health resort.",
        "The Open-Air Museum (Skanzen) showcases 19th-century village life.",
        "The city has a significant university and several research institutes.",
        "Known for its large main square and Lutheran church.",
        "An important trade hub towards Ukraine and Romania.",
        "The region is famous for its apple and plum production."
      ]
    },
  
    descriptionAdvanced: {
      "de": "Nyíregyháza, im Nordosten Ungarns gelegen, ist eine dynamische Stadt, die vor allem für ihren außergewöhnlichen Zoo und das Heilbad Sóstó bekannt ist. Der Zoo von Nyíregyháza, eingebettet in einen Eichenwald, gilt als einer der besten Europas und bietet Tieren in weitläufigen Gehegen einen natürlichen Lebensraum. Sóstógyógyfürdő, das ",
      "hu": "Nyíregyháza Szabolcs-Szatmár-Bereg vármegye székhelye, az ország hetedik legnagyobb városa, amely dinamikus fejlődésével és családbarát turisztikai kínálatával emelkedik ki. A város legfontosabb vonzereje a Sóstógyógyfürdő negyed, ahol sós vizű tó, modern élményfürdő és egy különleges falumúzeum várja a látogatókat. Itt található a Nyíregyházi Állatpark is, amely több alkalomal elnyerte Európa legjobb állatkertje címet, és különleges természetközeli kifutóival világszínvonalú élményt nyújt. Nyíregyháza belvárosa parkjaival, templomaival és pezsgő tereivel barátságos alföldi hangulatot áraszt. Gazdaságában az élelmiszeripar mellett a modern technológiai ipar is egyre nagyobb szerepet játszik, miközben a város megőrizte 'zöld' jellegét.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von Nyíregyháza (Sóstó Zoo) beherbergt über 5000 Tiere aus aller Welt.", "Sóstógyógyfürdő ist ein staatlich anerkannter Luft- und Badekurort am Stadtrand.", "Die Stadt ist ein Zentrum der ungarischen Obstproduktion, besonders für Äpfel und Pflaumen.", "Das Freilichtmuseum Sóstó zeigt die traditionelle Dorfarchitektur des Nordostens."],
      "hu": [
        "A Nyíregyházi Állatpark (Sóstó Zoo) 30 hektáron több mint 500 faj 5000 egyedét mutatja be.",
        "A Sóstói Múzeumfalu Magyarország egyik legnagyobb szabadtéri néprajzi múzeuma.",
        "A várost 1753-ban szlovák telepesek (tirpákok) népesítették be újra, akiknek emlékét néprajzi értékek őrzik.",
        "Nyíregyháza híres a Krúdy Gyula emlékezetéről, a város szülöttéről, aki a magyar irodalom egyik legnagyobb alakja.",
        "A Sóstói-tó vize és a környező erdő gyógyhely minősítéssel rendelkezik."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mateszalka",
    type: "city",
    parent: "szabolcs-szatmar-bereg",
    coords: [22.3167, 47.95],
    name: {"de": "Mátészalka", "hu": "Mátészalka", "ro": "Mátészalka", "en": "Mátészalka"},
    image: "/geo-images/hungary/mateszalka.webp",
    description: {"de": "Stadt im Osten Ungarns, bekannt als die 'Stadt des Lichts'.", "hu": "Kelet-magyarországi város, a 'Fény városa' néven ismert.", "ro": "Oraș în estul Ungariei, cunoscut ca 'Orașul Luminii'.", "en": "City in eastern Hungary, known as the 'City of Light'."},
    facts: {"de": ["Hier wurde 1888 die erste elektrische Straßenbeleuchtung Ungarns installiert.", "Wichtiges Zentrum der Region Szatmár."], "hu": ["Itt telepítették Magyarország első elektromos közvilágítását 1888-ban.", "A Szatmár régió fontos központja."], "ro": ["Aici a fost instalat primul iluminat stradal electric din Ungaria în 1888.", "Centru important al regiunii Szatmár."], "en": ["The first electric street lighting in Hungary was installed here in 1888.", "Important center of the Szatmár region."]},
  
    descriptionAdvanced: {
      "de": "Mátészalka, im Nordosten Ungarns an der Grenze zwischen den Regionen Nyírség und Szatmár gelegen, ist historisch als die ",
      "hu": "Mátészalka a Nyírség és a Szatmári-síkság határán fekvő város, amely leginkább a technológiai haladás úttörőjeként vonult be a magyar történelembe. Ez volt az első magyarországi település, ahol 1888-ban kigyúlt a villanyvilágítás, megelőzve ezzel még Budapestet is. A város kulturális élete gazdag, a Szatmári Múzeum egyedülálló kocsi- és szekérgyűjteménye nemzetközi hírű. Mátészalka büszke szülötteire is, köztük Tony Curtis filmszínész családjára, akinek emlékét a városban állandó kiállítás őrzi. A település fontos közlekedési és gazdasági központ a térségben, miközben őrzi a szatmári táj jellegzetem hangulatát és vendégszeretetét.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Mátészalka erstrahlte 1888 zum ersten Mal in ganz Ungarn elektrisches Licht in den Straßen.",
        "Das Szatmár-Museum der Stadt beherbergt eine europaweit einzigartige Sammlung von über 100 historischen Wagen und Schlitten.",
        "Die Stadt feiert jährlich die 'Licht-Tage' (Fényes Napok) zur Erinnerung an die Pionierrolle bei der Elektrifizierung.",
        "Der Vater des berühmten US-Schauspielers Tony Curtis stammte aus Mátészalka.",
        "Mátészalka ist ein wichtiger Eisenbahnknotenpunkt für den Verkehr in Richtung Rumänien und die Ukraine."],
      "hu": ["Mátészalka a 'fény városa', itt vezették be először az utcai villanyvilágítást Magyarországon.",
        "A Szatmári Múzeum kerék- és szekérgyűjteménye Európa-szerte híres és egyedülálló.",
        "A városban rendezik meg évente a Fényes Napok fesztivált a villanyvilágítás emlékére.",
        "Mátészalka központjában áll a Tony Curtis Emlékterem, a színész apjának tiszteletére.",
        "A település fontos vasúti és közúti csomópont a román és ukrán határ közelében."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vasarosnameny",
    type: "city",
    parent: "szabolcs-szatmar-bereg",
    coords: [22.3167, 48.1167],
    name: {"de": "Vásárosnamény", "hu": "Vásárosnamény", "ro": "Vásárosnamény", "en": "Vásárosnamény"},
    image: "/geo-images/hungary/vasarosnameny.webp",
    description: {"de": "Das 'Herz von Bereg', eine Stadt an der Theiß.", "hu": "A 'Bereg szíve', város a Tisza partján.", "ro": "'Inima Beregului', un oraș pe râul Tisa.", "en": "The 'Heart of Bereg', a city on the Tisza river."},
    facts: {"de": ["Beliebtes Ziel für Wassertourismus.", "Hat ein Thermalbad und einen Aquapark."], "hu": ["A víziturisztika népszerű célpontja.", "Termálfürdővel és aquaparkkal rendelkezik."], "ro": ["Destinație populară pentru turismul nautic.", "Are o baie termală și un aquaparc."], "en": ["Popular destination for water tourism.", "Has a thermal bath and an aquapark."]},
  
    descriptionAdvanced: {
      "de": "Vásárosnamény, oft als das ",
      "hu": "Vásárosnamény a ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Bereg-Museum im Tomcsányi-Schloss zeigt die weltweit bedeutendste Sammlung von Bereger Volkskunst.",
        "Der Strand von Gergelyiugornya gilt als einer der schönsten und beliebtesten Flussstrände an der Oberen Theiß.",
        "Die Stadt liegt an der Kreuzung dreier bedeutender Flüsse, was sie zu einem Zentrum für Kanu- und Bootstouren macht.",
        "Vásárosnamény beherbergt mit dem Atlantika-Wasserpark eines der größten Erlebnisbäder der Region.",
        "Die Region ist berühmt für ihre jahrhundertealte Tradition der handgefertigten Bereger Stickerei."],
      "hu": ["Vásárosnamény a Beregi-síkság gazdasági és kulturális központja.",
        "Gergelyiugornya a Felső-Tisza vidékének legnépszerűbb tiszai strandja.",
        "A Beregi Múzeum a 18. századi, barokk stílusú Tomcsányi-kastélyban kapott helyet.",
        "A város híres a beregi hímzésről, amely a tájegység egyik legfontosabb népművészeti kincse.",
        "Itt található az Atlantika Vízividámpark, az ország egyik legnagyobb vidéki aquaparkja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szekszard",
    type: "city",
    parent: "tolna",
    coords: [18.7, 46.35],
    name: {"de": "Sechshard", "hu": "Szekszárd", "ro": "Szekszárd", "en": "Szekszárd"},
    image: "/geo-images/hungary/szekszard.webp",
    description: {"de": "Die kleinste Komitatshauptstadt Ungarns, berühmt für ihre Rotweine.", "hu": "Magyarország legkisebb megyeszékhelye, vörösborairól híres.", "ro": "Cea mai mică reședință de județ din Ungaria, faimoasă pentru vinurile sale roșii.", "en": "The smallest county capital in Hungary, famous for its red wines."},
    facts: {"de": ["Zentrum der Weinregion Szekszárd.", "Geburtsort des Dichters Mihály Babits."], "hu": ["A Szekszárdi borvidék központja.", "Babits Mihály költő szülővárosa."], "ro": ["Centrul regiunii viticole Szekszárd.", "Locul de naștere al poetului Mihály Babits."], "en": ["Center of the Szekszárd wine region.", "Birthplace of poet Mihály Babits."]},
  
    descriptionAdvanced: {
      "de": "Szekszárd, die Hauptstadt des Komitats Tolna, ist die kleinste Komitatshauptstadt Ungarns und besticht durch ihre persönliche, fast familiäre Atmosphäre. Die Stadt ist weltberühmt für ihre exzellenten Rotweine, insbesondere das ",
      "hu": "Szekszárd Tolna vármegye székhelye, a Szekszárdi-dombság és az Alföld találkozásánál fekvő barátságos város, amely leginkább világhírű vörösborairól ismert. Ez Magyarország legkisebb népességgel bíró vármegyeszékhelye, ami egyedi, közvetlen és emberléptékű hangulatot kölcsönöz a településnek. Szekszárd központja a Garay tér és a Béla király tér, ahol az ország egyik legnagyobb egyhajós temploma és a neoklasszicista Megyeháza áll. A város kulturális életében fontos szerepet játszik Liszt Ferenc emlékezete, aki gyakran vendégeskedett a településen. Szekszárd a szőlő és a bor városa, ahol a pincesorok és a környékbeli dűlők nemcsak a gazdaság, hanem a turizmus alapkövei is, különösen a Szekszárdi Szüreti Napok idején.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szekszárd ist eine der traditionsreichsten Rotweinregionen Ungarns und Geburtsort des echten Bikavér.",
        "Franz Liszt besuchte die Stadt viermal und widmete ihr seine 'Szekszärder Messe'.",
        "König Béla I. gründete hier 1061 eine Abtei und wurde nach seinem Tod vermutlich auch hier bestattet.",
        "Die Stadt beherbergt die einzige staatlich anerkannte deutsche Bühne Ungarns, die Deutsche Bühne Ungarn.",
        "Das jährlich stattfindende Weinlesefest von Szekszárd ist eines der größten und traditionsreichsten Feste seiner Art im Land."],
      "hu": ["Szekszárd a Szekszárdi Bikavér, a híres magyar vörösházasítás egyik hazája.",
        "Liszt Ferenc négyszer is ellátogatott a városba, és itt komponálta Szekszárdi miséjét.",
        "A várost I. Béla király alapította, aki a hagyomány szerint itt is van eltemetve a bencés apátságban.",
        "A szekszárdi Megyeháza udvarán láthatóak a 11. századi apátsági templom romjai.",
        "A város határában kezdődik a Gemenci erdő, Európa legnagyobb összefüggő ártéri erdeje."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "paks",
    type: "city",
    parent: "tolna",
    coords: [18.8667, 46.6167],
    name: {"de": "Paks", "hu": "Paks", "ro": "Paks", "en": "Paks"},
    image: "/geo-images/hungary/paks.webp",
    description: {"de": "Stadt an der Donau, bekannt für das einzige Kernkraftwerk Ungarns.", "hu": "Duna-parti város, Magyarország egyetlen atomerőművéről ismert.", "ro": "Oraș pe Dunăre, cunoscut pentru singura centrală nucleară din Ungaria.", "en": "City on the Danube, known for Hungary's only nuclear power plant."},
    facts: {"de": ["Das Kernkraftwerk Paks liefert etwa die Hälfte des ungarischen Stroms.", "Hat eine lange Tradition in der Fischerei."], "hu": ["A Paksi Atomerőmű adja a magyar áramtermelés mintegy felét.", "Nagy hagyománya van a halászatnak."], "ro": ["Centrala nucleară Paks furnizează aproximativ jumătate din energia electrică a Ungariei.", "Are o lungă tradiție în pescuit."], "en": ["The Paks Nuclear Power Plant provides about half of Hungary's electricity.", "Has a long tradition of fishing."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Paks a Duna mentén, Tolna vármegyében fekvő város, amelynek nevét ma legtöbben Magyarország egyetlen atomerőművével azonosítják. Az energetikai központ meghatározó szerepet játszik a város életében, ám Paks ennél jóval gazdagabb múltra tekint vissza. Az egykori ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["A Paksi Atomerőmű Magyarország villamosenergia-szükségletének mintegy felét állítja elő.",
        "A Makovecz Imre által tervezett Szentlélek-templom 1991-ben készült el, formája két hegycsúcsot és a feltámadást jelképezi.",
        "A Sárgödör tér 66 apró, színes présházával a város egyik leglátványosabb műemléke.",
        "Paks híres a tiszai és dunai halászlé közötti 'versengésben' a sajátos dunai receptjéről.",
        "A város mellett elhaladó EuroVelo 6 kerékpárút fontos megállóhelye a Duna mentén."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bonyhad",
    type: "city",
    parent: "tolna",
    coords: [18.5333, 46.3],
    name: {"de": "Bonnhard", "hu": "Bonyhád", "ro": "Bonyhád", "en": "Bonyhád"},
    image: "/geo-images/hungary/bonyhad.webp",
    description: {"de": "Das Zentrum der Region Völgység, bekannt für seine Emaillefabrik.", "hu": "A Völgység központja, zománcgyáráról ismert.", "ro": "Centrul regiunii Völgység, cunoscut pentru fabrica sa de email.", "en": "The center of the Völgység region, known for its enamel factory."},
    facts: {"de": ["Historisch ein Zentrum der Ungarndeutschen.", "Bekannt für die Bonyháder Schuhe."], "hu": ["Történelmileg a magyarországi németek egyik központja.", "A bonyhádi cipőkről is ismert."], "ro": ["Istoric un centru al germanilor din Ungaria.", "Cunoscut pentru pantofii Bonyhád."], "en": ["Historically a center of the Hungarian Germans.", "Known for Bonyhád shoes."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Bonyhád a Völgység központja Tolna vármegyében, a Mecsek és a Tolnai-dombság találkozásánál fekvő város, amelyet gyakran a ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Bonyhád a bonyhádi zománcedény-gyártás bölcsője, amely termékek több mint 100 éve készülnek itt.",
        "A városban található a Völgységi Múzeum, amely a térség sokszínű etnikai múltját mutatja be.",
        "Itt született Perczel Mór, az 1848–49-es szabadságharc egyik legnevesebb tábornoka.",
        "A település híres a tarka magyar szarvasmarha tenyésztéséről, amelynek szobra is áll a városban.",
        "Bonyhád fontos iskolaváros, több nagy múltú középfokú oktatási intézménnyel rendelkezik."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szombathely",
    type: "city",
    parent: "vas",
    coords: [16.6217, 47.2306],
    name: {"de": "Steinamanger", "hu": "Szombathely", "ro": "Szombathely", "en": "Szombathely"},
    image: "/geo-images/hungary/szombathely.webp",
    description: {
      "de": "Szombathely, die älteste Stadt Ungarns, wurde im Jahr 43 n. Chr. von den Römern als Savaria gegründet. Die Stadt im Westen des Landes blickt auf eine fast 2000-jährige kontinuierliche Geschichte zurück und war einst die Hauptstadt der Provinz Pannonia Superior. Besucher können römische Ruinen im Iseum, dem Heiligtum der Göttin Isis, und im Ruinengarten besichtigen. Szombathely ist zudem als Geburtsort des Heiligen Martin von Tours bekannt und feiert sein Erbe jährlich mit dem Savaria Historischen Karneval.",
      "hu": "Szombathely, Magyarország legrégebbi városa, amelyet i.sz. 43-ban alapítottak a rómaiak Savaria néven. Az ország nyugati részén fekvő város közel 2000 éves folyamatos történelemre tekint vissza, és egykor Pannonia Superior tartomány székhelye volt. A látogatók megtekinthetik a római romokat az Iseumban, Ízisz istennő szentélyében, valamint a Járdányi Paulovics István Romkertben. Szombathely Tours-i Szent Márton szülőhelyeként is ismert, és örökségét évente a Savaria Történelmi Karnevállal ünnepli.",
      "ro": "Szombathely, cel mai vechi oraș din Ungaria, a fost fondat de romani în anul 43 d.Hr. sub numele de Savaria. Orașul din vestul țării are o istorie continuă de aproape 2000 de ani și a fost odată capitala provinciei Pannonia Superior. Vizitatorii pot vedea ruinele romane în Iseum, sanctuarul zeiței Isis, și în Grădina Ruinelor. Szombathely este, de asemenea, cunoscut ca locul de naștere al Sfântului Martin de Tours și își sărbătorește moștenirea anual prin Carnavalul Istoric Savaria.",
      "en": "Szombathely, the oldest city in Hungary, was founded by the Romans in 43 AD as Savaria. Located in the western part of the country, the city boasts a continuous history of nearly 2,000 years and was once the capital of the province of Pannonia Superior. Visitors can explore Roman ruins at the Iseum, a sanctuary dedicated to the goddess Isis, and in the Ruin Garden. Szombathely is also famous as the birthplace of Saint Martin of Tours and celebrates its heritage annually with the Savaria Historical Carnival."
    },
    facts: {
      "de": [
        "Člteste Stadt Ungarns mit römischen Wurzeln (Savaria).",
        "Geburtsort des Heiligen Martin von Tours (316 n. Chr.).",
        "Das Iseum ist eines der bedeutendsten Isis-Heiligtümer in Europa.",
        "Der Savaria Historische Karneval ist das größte Kostümfest der Region.",
        "Sitz des Komitats Vas und ein wichtiges kulturelles Zentrum im Westen.",
        "Die Kathedrale von Szombathely ist eine der größten Kirchen Ungarns.",
        "Beherbergt ein bedeutendes Freilichtmuseum (Vasi Múzeumfalu).",
        "Wichtiger Industriestandort mit Fokus auf Elektronik und Maschinenbau."
      ],
      "hu": [
        "Magyarország legrégebbi városa, római gyökerekkel (Savaria).",
        "Tours-i Szent Márton szülőhelye (i.sz. 316).",
        "Az Iseum Európa egyik legjelentősebb Ízisz-szentélye.",
        "A Savaria Történelmi Karnevál a régió legnagyobb jelmezes fesztiválja.",
        "Vas vármegye székhelye és Nyugat-Magyarország fontos kulturális központja.",
        "A szombathelyi székesegyház Magyarország egyik legnagyobb temploma.",
        "Itt található a Vasi Múzeumfalu, egy jelentős skanzen.",
        "Fontos ipari központ, különös tekintettel az elektronikára és a gépgyártásra."
      ],
      "ro": [
        "Cel mai vechi oraș din Ungaria, cu rădăcini romane (Savaria).",
        "Locul de naștere al Sfântului Martin de Tours (316 d.Hr.).",
        "Iseum este unul dintre cele mai importante sanctuare ale zeiței Isis din Europa.",
        "Carnavalul Istoric Savaria este cel mai mare festival de costume din regiune.",
        "Reședința județului Vas și un centru cultural important în vest.",
        "Catedrala din Szombathely este una dintre cele mai mari biserici din Ungaria.",
        "Găzduiește un muzeu în aer liber semnificativ (Vasi Múzeumfalu).",
        "Sit industrial important cu accent pe electronică și construcții de mașini."
      ],
      "en": [
        "Oldest city in Hungary with Roman roots (Savaria).",
        "Birthplace of Saint Martin of Tours (316 AD).",
        "The Iseum is one of the most significant Isis sanctuaries in Europe.",
        "The Savaria Historical Carnival is the region's largest costume festival.",
        "Seat of Vas County and an important cultural center in the west.",
        "Szombathely Cathedral is one of the largest churches in Hungary.",
        "Home to a significant open-air museum (Vasi Múzeumfalu).",
        "A major industrial location focusing on electronics and machinery."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Szombathely, Vas vármegye székhelye, Magyarország egyik legősibb városa, amelyet a rómaiak alapítottak Kr. u. 43-ban Savaria néven. A város gazdag antik örökséggel büszkélkedhet, s ezt minden évben a monumentális Savaria Történelmi Karnevál keretében keltik életre. Szombathely belvárosa barokk pompájával, tágas tereivel és az impozáns Székesegyházzal nyűgözi le a látogatókat. A kultúra és a tudomány városa, ahol a Savaria Múzeum és az Iseum (Ízisz istennő szentélye) világszínvonalú régészeti leleteket mutat be. A modern Szombathely egyben fontos ipari és oktatási központ is az Alpokalja lábánál, amely kiváló kiindulópont a közeli hegységek és gyógyfürdők felfedezéséhez.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Szombathely az ország legrégebbi városi rangú települése, amelyet Claudius császár alapított.",
        "Szent Márton, a tours-i püspök, a hagyomány szerint Savariában született a 4. században.",
        "Az Iseum Savariense Közép-Európa egyik legjelentősebb Ízisz-szentélyének rekonstrukciója.",
        "A szombathelyi Székesegyház Magyarország egyik legnagyobb és legszebb barokk temploma.",
        "A Kámoni Arborétum 27 hektáron több ezer ritka növényfajnak és fás szárú gyűjteménynek ad otthont."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "koszeg",
    type: "city",
    parent: "vas",
    coords: [16.5406, 47.3892],
    name: {"de": "Güns", "hu": "Kőszeg", "ro": "Kőszeg", "en": "Kőszeg"},
    image: "/geo-images/hungary/koszeg.webp",
    description: {"de": "Historische Stadt an der österreichischen Grenze, bekannt für ihre Burg.", "hu": "Történelmi város az osztrák határon, váráról ismert.", "ro": "Oraș istoric la granița cu Austria, cunoscut pentru castelul său.", "en": "Historic city on the Austrian border, known for its castle."},
    facts: {"de": ["Die Burg Jurisics hielt 1532 einer osmanischen Belagerung stand.", "Hat einen der schönsten mittelalterlichen Hauptplätze Ungarns."], "hu": ["A Jurisics-vár 1532-ben ellenállt az oszmán ostromnak.", "Magyarország egyik legszebb középkori főterével rendelkezik."], "ro": ["Castelul Jurisics a rezistat unui asediu otoman în 1532.", "Are una dintre cele mai frumoase piețe principale medievale din Ungaria."], "en": ["Jurisics Castle withstood an Ottoman siege in 1532.", "Has one of the most beautiful medieval main squares in Hungary."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Kőszeg Magyarország egyik legszebb és leghangulatosabb kisvárosa az Alpokalja lábánál, amely szinte érintetlen középkori belvárosával és történelmi várával varázsolja el a látogatókat. A város neve elválaszthatatlan az 1532-es török ostromtól, amikor Jurisics Miklós maroknyi csapata megállította Szulejmán szultán hatalmas seregét, megmentve ezzel Bécset a támadástól. Ennek emlékére Kőszegen minden nap 11 órakor is meghúzzák a harangokat. A város híres a bortermeléséről (főként a Kékfrankosról), a ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Kőszeg Magyarország egyetlen városa, ahol délelőtt 11-kor is harangoznak a török feletti győzelem emlékére.",
        "A Jurisics-vár ma kulturális központ és múzeum, ahol az 1532-es ostrom eseményeit ismerhetjük meg.",
        "Itt található az ország egyik legrégebbi patikamúzeuma, az Arany Egyszarvú Patika.",
        "Kőszeg híres a 'Szőlő Jövésének Könyvéről', amelybe 1740 óta minden évben lerajzolják a szőlőhajtásokat.",
        "A város feletti Hétforrás és az Óház-kilátó a Kőszegi-hegység legnépszerűbb kirándulóhelyei."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarvar",
    type: "city",
    parent: "vas",
    coords: [16.9333, 47.25],
    name: {"de": "Kotenburg", "hu": "Sárvár", "ro": "Sárvár", "en": "Sárvár"},
    image: "/geo-images/hungary/sarvar.webp",
    description: {"de": "Beliebter Kurort mit einem berühmten Thermalbad und einer Renaissanceburg.", "hu": "Népszerű fürdőváros híres termálfürdővel és reneszánsz várral.", "ro": "Stațiune balneară populară cu o faimoasă baie termală și un castel renascentist.", "en": "Popular spa town with a famous thermal bath and a Renaissance castle."},
    facts: {"de": ["Die Burg Nádasdy ist ein wichtiges historisches Denkmal.", "Das Heilwasser ist hervorragend für rheumatische Beschwerden."], "hu": ["A Nádasdy-vár fontos történelmi műemlék.", "Gyógyvize kiváló reumatikus panaszokra."], "ro": ["Castelul Nádasdy este un important monument istoric.", "Apa termală este excelentă pentru afecțiuni reumatice."], "en": ["Nádasdy Castle is an important historical monument.", "The healing water is excellent for rheumatic complaints."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Sárvár a Rába partján fekvő város Vas vármegyében, amely világszínvonalú gyógyfürdőjéről és tökéletesen épen maradt reneszánsz váráról ismert. A Nádasdy-vár a magyarországi reneszánsz építészet egyik gyöngyszeme, ötszögletű udvarával és freskókkal díszített dísztermével a Nádasdy család egykori hatalmát hirdeti. A vár falai között nyomtatták az első magyar nyelvű Újszövetséget is. Sárvár igazi vonzereje ma a Sárvári Gyógy- és Wellnessfürdő, amely különleges gyógyvizének köszönhetően az európai királyi fürdők szövetségének tagja. A város arborétuma, a csónakázótó és a Rába menti erdők ideális környezetet biztosítanak a pihenésre és a regenerálódásra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["A sárvári Nádasdy-vár az ország egyik legépebben fennmaradt várkastélya.",
        "Sárváron nyomtatták 1541-ben az első magyar nyelvű könyvet, a Sylvester János-féle Újszövetséget.",
        "A sárvári gyógyvíz kétféle forrásból ered, az egyik 43, a másik 83 fokos hévíz.",
        "A városi arborétum Magyarország egyik legrégebbi növénygyűjteménye, több száz éves mocsári tölgyekkel.",
        "Sárvár az 'Európai Királyi Fürdők' (Royal Spas of Europe) hálózatának tagja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem-city",
    type: "city",
    parent: "veszprem",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "Veszprém", "ro": "Veszprém", "en": "Veszprém"},
    image: "/geo-images/hungary/veszprem-city.webp",
    description: {
      "de": "Veszprém, die 'Stadt der Königinnen', liegt auf den malerischen Hügeln des Bakony-Waldes in der Nähe des Plattensees. Die Stadt blickt auf eine reiche Geschichte zurück und war traditionell der Ort, an dem die ungarischen Königinnen gekrönt wurden. Das gut erhaltene Burgviertel auf einem steilen Felsen bietet beeindruckende Ausblicke und beherbergt zahlreiche historische Gebäude und Museen. Veszprém war 2023 Kulturhauptstadt Europas und ist bekannt für sein lebendiges kulturelles Leben und seine Musikfestivals.",
      "hu": "Veszprém, a 'királynék városa', a Bakony lankáin, a Balaton közelében fekszik. A város gazdag történelemre tekint vissza, hagyományosan itt koronázták meg a magyar királynékat. A meredek sziklán elhelyezkedő, jól megőrzött várnegyed lenyűgöző kilátást nyújt, és számos történelmi épületnek, múzeumnak ad otthont. Veszprém 2023-ban Európa Kulturális Fővárosa volt, és híres pezsgő kulturális életéről, valamint zenei fesztiváljairól.",
      "ro": "Veszprém, 'orașul reginelor', este situat pe dealurile pitorești ale pădurii Bakony, în apropierea lacului Balaton. Orașul are o istorie bogată, fiind tradițional locul unde erau încoronate reginele maghiare. Cartierul castelului, bine conservat pe o stâncă abruptă, oferă priveliști impresionante și găzduiește numeroase clădiri istorice și muzee. Veszprém a fost Capitală Europeană a Culturii în 2023 și este cunoscut pentru viața sa culturală vibrantă și festivalurile de muzică.",
      "en": "Veszprém, the 'City of Queens,' is located on the picturesque hills of the Bakony Forest near Lake Balaton. The city boasts a rich history, traditionally serving as the site where Hungarian queens were crowned. The well-preserved Castle District, perched on a steep cliff, offers stunning views and houses numerous historic buildings and museums. Veszprém was a European Capital of Culture in 2023 and is renowned for its vibrant cultural scene and music festivals."
    },
    facts: {
      "de": [
        "Sitz des Komitats Veszprém und eine der ältesten Städte Ungarns.",
        "Traditioneller Krönungsort der ungarischen Königinnen.",
        "Kulturhauptstadt Europas im Jahr 2023.",
        "Das Burgviertel ist ein architektonisches Juwel auf einem Dolomitfelsen.",
        "Bekannt für den Veszprémer Zoo, einen der ältesten des Landes.",
        "Veranstaltet jährlich das VeszprémFest und das Straßenmusikfestival.",
        "Die St.-Michaels-Kathedrale ist ein bedeutendes religiöses Denkmal.",
        "Liegt ideal als Tor zum Bakony-Gebirge und zum Plattensee."
      ],
      "hu": [
        "Veszprém vármegye székhelye és Magyarország egyik legősibb városa.",
        "A magyar királynék hagyományos koronázóhelye.",
        "2023-ban Európa Kulturális Fővárosa volt.",
        "A várnegyed egy építészeti ékszerdoboz a dolomitsziklán.",
        "Híres a Veszprémi Állatkertről, amely az ország egyik legrégebbi állatkertje.",
        "Minden évben megrendezik a VeszprémFestet és az Utcazene Fesztivált.",
        "A Szent Mihály-székesegyház jelentős vallási műemlék.",
        "Ideális kiindulópont a Bakony és a Balaton felfedezéséhez."
      ],
      "ro": [
        "Reședința județului Veszprém și unul dintre cele mai vechi orașe din Ungaria.",
        "Locul tradițional de încoronare a reginelor maghiare.",
        "Capitală Europeană a Culturii în anul 2023.",
        "Cartierul castelului este o bijuterie arhitecturală pe o stâncă de dolomit.",
        "Cunoscut pentru Grădina Zoologică din Veszprém, una dintre cele mai vechi.",
        "Găzduiește anual VeszprémFest și Festivalul Muzicii de Stradă.",
        "Catedrala Sfântul Mihail este un monument religios important.",
        "Situat ideal ca poartă către munții Bakony și Lacul Balaton."
      ],
      "en": [
        "Seat of Veszprém County and one of the oldest cities in Hungary.",
        "Traditional coronation site of Hungarian queens.",
        "European Capital of Culture in 2023.",
        "The Castle District is an architectural gem on a dolomite cliff.",
        "Famous for the Veszprém Zoo, one of the oldest in the country.",
        "Hosts the annual VeszprémFest and the Street Music Festival.",
        "St. Michael's Cathedral is a significant religious monument.",
        "Ideally located as a gateway to the Bakony Mountains and Lake Balaton."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Veszprém, a ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Veszprém volt Magyarország egyik legkorábbi püspöki székhelye és vára.",
        "A Gizella-kápolna a város egyik legrégebbi építménye, 13. századi freskókkal.",
        "A veszprémi Völgyhíd (Szent István völgyhíd) a város egyik jelképe, monumentális látványt nyújt a Séd-völgye felett.",
        "A Veszprémi Állatkert híres a Böbe majomról és modern, tágas kifutóiról.",
        "A várost gyakran a szél városaként is emlegetik a Bakony felől érkező állandó légmozgás miatt."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonfured",
    type: "city",
    parent: "veszprem",
    coords: [17.8833, 46.95],
    name: {"de": "Balatonfüred", "hu": "Balatonfüred", "ro": "Balatonfüred", "en": "Balatonfüred"},
    image: "/geo-images/hungary/balatonfured.webp",
    description: {"de": "Der älteste Kurort am Plattensee, bekannt für seine Heilquellen.", "hu": "A Balaton legrégebbi üdülőhelye, gyógyforrásairól ismert.", "ro": "Cea mai veche stațiune de pe Lacul Balaton, cunoscută pentru izvoarele sale vindecătoare.", "en": "The oldest resort on Lake Balaton, known for its healing springs."},
    facts: {"de": ["Zentrum des Segelsports am Plattensee.", "Veranstaltet jährlich den Anna-Ball."], "hu": ["A balatoni vitorlázás központja.", "Évente megrendezik az Anna-bált."], "ro": ["Centrul navigației pe Lacul Balaton.", "Găzduiește anual Balul Anna."], "en": ["Center of sailing on Lake Balaton.", "Hosts the annual Anna Ball."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Balatonfüred az északi part ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["Balatonfüreden tartották az első Anna-bált 1825-ben, Horváth Anna Krisztina tiszteletére.",
        "A Tagore sétány az indiai költőóriásról, Rabindranath Tagore-ról kapta nevét, aki itt gyógyult meg.",
        "Itt épült fel a Balaton első gőzhajója, a Kisfaludy, Széchenyi István kezdeményezésére.",
        "A Kossuth Lajos-forrás savanyúvize közismert gyógyhatásáról, bárki szabadon kóstolhatja a téren.",
        "Balatonfüred a legrégebbi magyarországi vitorlásklub, a Kereked Yacht Club otthona."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihany",
    type: "landmark",
    parent: "veszprem",
    coords: [17.8833, 46.9167],
    name: {"de": "Tihany", "hu": "Tihany", "ro": "Tihany", "en": "Tihany"},
    image: "/geo-images/hungary/tihany.webp",
    description: {"de": "Halbinsel im Plattensee, berühmt für ihre Benediktinerabtei und Lavendelfelder.", "hu": "Félsziget a Balatonban, híres bencés apátságáról és levendulamezőiről.", "ro": "Peninsulă în Lacul Balaton, faimoasă pentru abația benedictină și câmpurile de lavandă.", "en": "Peninsula in Lake Balaton, famous for its Benedictine abbey and lavender fields."},
    facts: {"de": ["Die Gründungsurkunde der Abtei (1055) enthält die ältesten ungarischen Wörter.", "Bietet einen atemberaubenden Blick auf den See."], "hu": ["Az apátság alapítólevele (1055) tartalmazza a legrégebbi magyar szavakat.", "Lélegzetelállító kilátást nyújt a tóra."], "ro": ["Actul de fondare al abației (1055) conține cele mai vechi cuvinte maghiare.", "Oferă o vedere uluitoare asupra lacului."], "en": ["The abbey's founding charter (1055) contains the oldest Hungarian words.", "Offers a breathtaking view of the lake."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Tihany a Balaton északi partjának ékköve, egy vulkanikus eredetű félsziget, amely mélyen benyúlik a tóba, s ahonnan a legszebb kilátás nyílik a ",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": ["A Tihanyi Apátság alapítólevele latin nyelvű, de 58 magyar szót és szókapcsolatot tartalmaz.",
        "Az apátság altemplomában található az alapító, I. András király egyetlen épségben maradt sírja.",
        "Tihany híres a levendulatermesztésről, az első töveket az 1920-as években telepítették ide.",
        "A félszigeten találhatók a barátlakások, Európa egyetlen épségben maradt remetetelepe.",
        "A Tihanyi Visszhang a 19. század óta híres, bár a beépítések miatt ma már kevésbé hallható."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zalaegerszeg",
    type: "city",
    parent: "zala",
    coords: [16.8439, 46.8417],
    name: {"de": "Egersee", "hu": "Zalaegerszeg", "ro": "Zalaegerszeg", "en": "Zalaegerszeg"},
    image: "/geo-images/hungary/zalaegerszeg.webp",
    description: {
      "de": "Zalaegerszeg, im Westen Ungarns am Ufer der Zala gelegen, ist eine grüne Stadt, die von den sanften Hügeln der Region Zala umgeben ist. Die Stadt ist bekannt für ihr reiches kulturelles Erbe und ihre Verbindung zur ungarischen Ölindustrie. Ein Highlight ist das Göcsej-Freilichtmuseum, das erste seiner Art in Ungarn, das die traditionelle bäuerliche Architektur der Region zeigt. Mit dem nahegelegenen Gébárti-See und dem Aquacity-Wasserpark bietet Zalaegerszeg zudem vielfältige Freizeitmöglichkeiten für Natur- und Wasserliebhaber.",
      "hu": "Zalaegerszeg, Nyugat-Magyarországon, a Zala folyó partján fekvő zöld város, amelyet a Zalai-dombság lankái öveznek. A város híres gazdag kulturális örökségéről és a magyar olajiparhoz fűződő szoros kapcsolatáról. Egyik legfőbb látványossága a Göcseji Falumúzeum, az ország első szabadtéri néprajzi múzeuma, amely a régió hagyományos paraszti építészetét mutatja be. A közeli Gébárti-tóval és az Aquacity víziparkkal Zalaegerszeg változatos kikapcsolódási lehetőségeket kínál a természet és a víz kedvelőinek.",
      "ro": "Zalaegerszeg, situat în vestul Ungariei pe malul râului Zala, este un oraș verde înconjurat de dealurile domoale ale regiunii Zala. Orașul este cunoscut pentru moștenirea sa culturală bogată și legătura sa cu industria petrolieră maghiară. Un punct de atracție este Muzeul Satului Göcsej, primul de acest fel din Ungaria, care prezintă arhitectura rurală tradițională a regiunii. Cu lacul Gébárti din apropiere și parcul acvatic Aquacity, Zalaegerszeg oferă diverse oportunități de petrecere a timpului liber pentru iubitorii de natură și apă.",
      "en": "Zalaegerszeg, located in western Hungary on the banks of the Zala River, is a green city surrounded by the gentle hills of the Zala region. The city is known for its rich cultural heritage and its connection to the Hungarian oil industry. A highlight is the Göcsej Open-Air Museum, the first of its kind in Hungary, showcasing the region's traditional rural architecture. With the nearby Lake Gébárti and the Aquacity water park, Zalaegerszeg offers diverse leisure opportunities for nature and water lovers."
    },
    facts: {
      "de": [
        "Sitz des Komitats Zala.",
        "Das Göcsej-Freilichtmuseum zeigt über 40 historische Gebäude.",
        "Beherbergt das Ungarische Erdölmuseum, das die Geschichte der Förderung dokumentiert.",
        "Die Stadt ist bekannt für ihre moderne Architektur und gepflegten Parks.",
        "Wichtiger Industriestandort mit Fokus auf Elektronik und Logistik.",
        "Der Gébárti-See ist ein beliebtes Ziel zum Angeln und Baden.",
        "Veranstaltet jährlich das Göcsej-Prunkfest (Göcseji Prímásverseny).",
        "Liegt in einer der waldreichsten Regionen Ungarns."
      ],
      "hu": [
        "Zala vármegye székhelye.",
        "A Göcseji Falumúzeum több mint 40 történelmi épületet mutat be.",
        "Itt található a Magyar Olaj- és Gázipari Múzeum.",
        "A város modern építészetéről és gondozott parkjairól ismert.",
        "Fontos ipari központ, különös tekintettel az elektronikára és a logisztikára.",
        "A Gébárti-tó népszerű horgász- és fürdőhely.",
        "Minden évben megrendezik a Göcseji Prímásversenyt.",
        "Magyarország egyik legerdősebb régiójában fekszik."
      ],
      "ro": [
        "Reședința județului Zala.",
        "Muzeul Satului Göcsej prezintă peste 40 de clădiri istorice.",
        "Găzduiește Muzeul Maghiar al Petrolului și Gazelor.",
        "Orașul este cunoscut pentru arhitectura sa modernă și parcurile bine întreținute.",
        "Centru industrial important cu accent pe electronică și logistică.",
        "Lacul Gébárti este o destinație populară pentru pescuit și scăldat.",
        "Găzduiește anual concursul de lăutari din Göcsej.",
        "Situat în una dintre cele mai împădurite regiuni din Ungaria."
      ],
      "en": [
        "Seat of Zala County.",
        "The Göcsej Open-Air Museum features over 40 historic buildings.",
        "Home to the Hungarian Oil and Gas Museum, documenting the history of extraction.",
        "The city is known for its modern architecture and well-kept parks.",
        "A major industrial hub focusing on electronics and logistics.",
        "Lake Gébárti is a popular destination for fishing and swimming.",
        "Hosts the annual Göcsej Primate Competition (folk music).",
        "Located in one of the most forested regions of Hungary."
      ]
    },
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Zalaegerszeg, Zala vármegye székhelye, a Zala folyó völgyében, a zalai dombok között fekszik, és az ország egyik legzöldebb városaként ismert. A város arculatát a modern építészet és a népi hagyományok tisztelete határozza meg. Itt nyílt meg az ország legelső szabadtéri néprajzi múzeuma, a Göcseji Falumúzeum, amely bemutatja a régió különleges faépítészetét és paraszti kultúráját. Zalaegerszeg fontos ipari és kulturális központ, büszkélkedhet a Hevesi Sándor Színházzal és a TV-toronnyal, ahonnan tiszta időben az Alpok csúcsai is látszanak. A környező Gébárti-tó és az AquaCity vízipark kiváló kikapcsolódást nyújt a családoknak, míg a város körüli erdők a természetjárók paradicsomát alkotják.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Zalaegerszegen nyílt meg 1968-ban az ország első szabadtéri néprajzi múzeuma.",
        "A város felett magasodó TV-torony 95 méter magas, és körpanorámás kávézóval rendelkezik.",
        "Itt található a Magyar Olaj- és Gázipari Múzeum, emléket állítva a régió energetikai múltjának.",
        "Zalaegerszeg híres a 'virágváros' jellegéről és a rendezett, tiszta köztereiről.",
        "A város szélén található Gébárti-tó népszerű horgász- és szabadidőközpont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykanizsa",
    type: "city",
    parent: "zala",
    coords: [16.9911, 46.45],
    name: {"de": "Großkirchen", "hu": "Nagykanizsa", "ro": "Nagykanizsa", "en": "Nagykanizsa"},
    image: "/geo-images/hungary/nagykanizsa.webp",
    description: {"de": "Wichtiger Verkehrsknotenpunkt im Südwesten Ungarns.", "hu": "Fontos közlekedési csomópont Délnyugat-Magyarországon.", "ro": "Important nod de transport în sud-vestul Ungariei.", "en": "Important transport hub in southwestern Hungary."},
    facts: {"de": ["War historisch eine wichtige Festungsstadt.", "Bekannt für ihre Parks und Grünflächen."], "hu": ["Történelmileg fontos végvár volt.", "Parkjairól és zöldövezeteiről ismert."], "ro": ["A fost istoric un important oraș fortăreață.", "Cunoscut pentru parcurile și spațiile sale verzi."], "en": ["Was historically an important fortress town.", "Known for its parks and green spaces."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Nagykanizsa Zala vármegye második legnagyobb városa, egykor fontos katonai végvár és kereskedelmi központ a délnyugati határ mentén. A város történelmében meghatározó volt a török elleni küzdelem, s bár az egykori vár mára elpusztult, emléke a város nevében és kultúrájában tovább él. Nagykanizsa tágas tereivel, mint az Erzsébet tér, és elegáns palotáival a polgári jólét korszakát idézi, amikor a város a délnyugati térség legfontosabb gazdasági centruma volt. A város környéke, különösen a Csónakázó-tó és a környező erdők kiváló lehetőséget adnak a túrázásra és a sportolásra. Nagykanizsa híres a kerékpáros kultúrájáról és a határ menti baráti kapcsolatok ápolásáról.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Nagykanizsa vára a török hódoltság idején az ország egyik legfontosabb végvára volt.",
        "Az Erzsébet téren található Zenepavilon a város egyik legkedveltebb találkozóhelye.",
        "Nagykanizsa a 19. század végén az ország egyik legjelentősebb sörgyártó városa volt.",
        "A várostól nem messze található a Csónakázó-tó, amely körül nemzetközi szintű kerékpárpálya fut.",
        "A város központjában áll az Alsóvárosi templom, amely a török mecset köveiből épült fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely",
    type: "city",
    parent: "zala",
    coords: [17.2431, 46.7681],
    name: {"de": "Kesthell", "hu": "Keszthely", "ro": "Keszthely", "en": "Keszthely"},
    image: "/geo-images/hungary/keszthely.webp",
    description: {"de": "Die größte Stadt am Plattensee, bekannt für das Schloss Festetics.", "hu": "A Balaton legnagyobb városa, a Festetics-kastélyról ismert.", "ro": "Cel mai mare oraș de pe Lacul Balaton, cunoscut pentru Castelul Festetics.", "en": "The largest city on Lake Balaton, known for the Festetics Palace."},
    facts: {"de": ["Das Schloss Festetics ist eines der größten in Ungarn.", "Heimat des Georgikon, der ersten landwirtschaftlichen Hochschule Europas."], "hu": ["A Festetics-kastély az egyik legnagyobb Magyarországon.", "A Georgikon, Európa első mezőgazdasági főiskolájának otthona."], "ro": ["Castelul Festetics este unul dintre cele mai mari din Ungaria.", "Casa Georgikon, primul colegiu agricol din Europa."], "en": ["The Festetics Palace is one of the largest in Hungary.", "Home to the Georgikon, Europe's first agricultural college."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Keszthely a Balaton legrégebbi és legpatinásabb városa a tó nyugati végénél, amely méltán viseli a 'Balaton fővárosa' címet történelmi és kulturális jelentősége miatt. A város ékköve a Grassalkovich-kastélyhoz mérhető Festetics-kastély, Magyarország egyik legszebb barokk palotája, amelynek könyvtára és parkja egyedülálló értéket képvisel. Keszthely hangulatos belvárosa, múzeumai (mint a Georgikon vagy a Balatoni Múzeum) és a Monarchia korabeli Szigetfürdője visszarepítik a látogatót a múltba. A város nemcsak kulturális központ, hanem fontos egyetemi város is, ahol a mezőgazdasági oktatás több évszázados múltra tekint vissza. A Balaton-parti sétány és a kikötő egész évben vonzó célpont a kikapcsolódásra vágyóknak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A keszthelyi Festetics-kastély Magyarország negyedik legnagyobb kastélya, 101 helyiséggel.",
        "Itt alapították 1797-ben a Georgikont, Európa első agrártudományi főiskoláját.",
        "A Helikon Könyvtár a kastélyban az ország egyetlen érintetlenül maradt aristokrata magánkönyvtára.",
        "Keszthelyen található a Balaton egyetlen megmaradt, eredeti formájában újjáépített Szigetfürdője.",
        "A Balatoni Múzeum a tó természetvilágát és az emberi élet történetét mutatja be a környéken."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "harkany",
    type: "city",
    parent: "baranya",
    coords: [18.2386, 45.8494],
    name: {"de": "Harkány", "hu": "Harkány", "ro": "Harkány", "en": "Harkány"},
    description: {"de": "Berühmte Kurstadt im Süden Ungarns, bekannt für ihr schwefelhaltiges Thermalwasser.", "hu": "Híres fürdőváros Dél-Magyarországon, kénes termálvizéről ismert.", "ro": "Faimos oraș balnear în sudul Ungariei, cunoscut pentru apa sa termală sulfuroasă.", "en": "Famous spa town in southern Hungary, known for its sulfurous thermal water."},
    facts: {"de": ["Das Wasser ist besonders gut für Gelenkbeschwerden.", "Eines der bedeutendsten Heilbäder Ungarns."], "hu": ["A víz különösen jó ízületi panaszokra.", "Magyarország egyik legjelentősebb gyógyfürdője."], "ro": ["Apa este deosebit de bună pentru afecțiuni articulare.", "Una dintre cele mai importante băi curative din Ungaria."], "en": ["The water is particularly good for joint complaints.", "One of Hungary's most significant medicinal baths."]},
    image: "/poi-images/harkany.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Harkány az ország egyik legjelentősebb gyógyfürdővárosa Baranya vármegyében, a Villányi-hegység déli lábánál. Világhírnevét egyedülálló összetételű kénes gyógyvizének köszönheti, amelyet véletlenül fedeztek fel az 1820-as években, a mocsarak lecsapolása során. A harkányi víz különlegessége a benne oldott karbonil-szulfid, amely sokkal gyorsabban szívódik fel, mint a hagyományos szulfátok, így rendkívül hatékony a mozgásszervi és bőrbetegségek kezelésében. A város mediterrán klímája, gondozott parkjai és a fürdő modern szolgáltatásai egész évben vonzzák a gyógyulni és pihenni vágyókat. Harkány ideális kiindulópont a közeli Siklós és Villány felfedezéséhez is.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A harkányi gyógyvizet 1823-ban fedezte fel Pogány János csatornázó munkás.",
        "Ez az egyetlen hely a világon, ahol a kén karbonil-szulfid formájában van jelen a vízben.",
        "A város közvetlen szomszédságában található a Siklósi Vár és a Villányi borvidék.",
        "A Harkányi Gyógyfürdő több mint 13 hektáros parkban terül el.",
        "A fürdő kénes vize jellegzetes illatáról már messziről felismerhető."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szigetvar",
    type: "city",
    parent: "baranya",
    coords: [17.7981, 46.0494],
    name: {"de": "Inselburg", "hu": "Szigetvár", "ro": "Szigetvár", "en": "Szigetvár"},
    description: {"de": "Historische Stadt, bekannt für die heldenhafte Verteidigung ihrer Burg gegen die Osmanen.", "hu": "Történelmi város, a vár oszmánok elleni hősies védelméről ismert.", "ro": "Oraș istoric, cunoscut pentru apărarea eroică a cetății sale împotriva otomanilor.", "en": "Historic town known for the heroic defense of its castle against the Ottomans."},
    facts: {"de": ["Schauplatz der Belagerung von 1566.", "Hier starb Sultan Süleyman der Prächtige."], "hu": ["Az 1566-os ostrom helyszíne.", "Itt halt meg I. Szulejmán szultán."], "ro": ["Locul asediului din 1566.", "Aici a murit sultanul Soliman Magnificul."], "en": ["Site of the siege of 1566.", "Sultan Suleiman the Magnificent died here."]},
    image: "/poi-images/szigetvar.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Szigetvár városa a magyar történelem egyik leghősiesebb helyszíne, ahol 1532-ben Zrínyi Miklós és maroknyi serege megállította Szulejmán szultán hatalmas hadát. A szigetvári vár ostroma a világtörténelem egyik legfontosabb csatája volt, hiszen bár a vár elesett, a török sereg annyira meggyengült, hogy nem tudta folytatni útját Bécs felé. A vár falai között ma múzeum és emlékhely működik, ahol a látogatók megismerhetik a 'szigetvári hős' történetét. A város azonban nemcsak a múltjáról híres: modern gyógyfürdője és a török kori emlékek, mint a Szulejmán-dzsámi, egyedülálló hangulatot kölcsönöznek a településnek. Szigetvár ma a magyar-török megbékélés és a történelmi emlékezet egyik legfontosabb központja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szigetvár védője, Zrínyi Miklós, a várkapun kitörve halt hősi halált 1566-ban.",
        "I. Szulejmán szultán a vár ostroma alatt, sátrában hunyt el természetes halállal.",
        "A vár 2016 óta Nemzeti Emlékhely minősítéssel rendelkezik.",
        "A városban található Magyar-Török Barátság Park a két nemzet közös történelmének állít emléket.",
        "Szigetvár gyógyfürdője 62 fokos nátrium-kloridos, alkáli-hidrogénkarbonátos vízzel várja a vendégeket."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "baja",
    type: "city",
    parent: "bacs-kiskun",
    coords: [18.95, 46.1833],
    name: {"de": "Frankenstadt", "hu": "Baja", "ro": "Baja", "en": "Baja"},
    image: "/geo-images/hungary/baja.webp",
    description: {"de": "Stadt an der Donau, berühmt für ihre Fischsuppe und das jährliche Fischsuppen-Festival.", "hu": "Duna-parti város, híres a halászlevéről és az évente megrendezett halászlé-fesztiválról.", "ro": "Oraș pe Dunăre, faimos pentru ciorba de pește și festivalul anual al ciorbei de pește.", "en": "City on the Danube, famous for its fish soup and the annual fish soup festival."},
    facts: {"de": ["Liegt am Zusammenfluss von Donau und Sugovica.", "Wichtiges kulturelles Zentrum der Region."], "hu": ["A Duna és a Sugovica találkozásánál fekszik.", "A régió fontos kulturális központja."], "ro": ["Situat la confluența Dunării cu Sugovica.", "Centru cultural important al regiunii."], "en": ["Located at the confluence of the Danube and Sugovica.", "Important cultural center of the region."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Baja a Duna bal partján, a Sugovica folyóág és a Gemenci erdő szomszédságában fekvő hangulatos kisváros, amelyet gyakran a 'vizek városaként' emlegetnek. A település arculatát a folyó és a vízi élet határozza meg, legfontosabb eseménye pedig a minden évben megrendezett Bajai Halászléfőző Népünnepély, ahol több ezer bográcsban rotyog a híres bajai halászlé. A város központja a Szentháromság tér, amely Európa egyik legszebb, itáliai stílusú tere, közvetlen kapcsolattal a vízparttal. Baja kulturális sokszínűségét a magyarok, horvátok (bunyevácok) és németek évszázados együttélése adja. A város ideális célpont a vízi sportok kedvelőinek és a természetjáróknak, akik a Gemenci erdő vadregényes tájait fedeznék fel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Baja főtere, a Szentháromság tér, pontosan akkora, mint a velencei Szent Márk tér.",
        "A bajai halászlé különlegessége a gyufatészta, amelyet a halhús mellé tálalnak.",
        "A város határában kezdődik a Gemenci erdő, Európa legnagyobb összefüggő ártéri erdeje.",
        "Baja híres szülötte Türr István, a Korinthoszi-csatorna egyik tervezője.",
        "A Sugovica-parti sétány és a Petőfi-sziget a város legnépszerűbb kikapcsolódási helyszíne."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kiskunfelegyhaza",
    type: "city",
    parent: "bacs-kiskun",
    coords: [19.85, 46.7167],
    name: {"de": "Feledihas", "hu": "Kiskunfélegyháza", "ro": "Kiskunfélegyháza", "en": "Kiskunfélegyháza"},
    description: {"de": "Stadt in der Großen Tiefebene mit beeindruckender Jugendstilarchitektur.", "hu": "Alföldi város lenyűgöző szecessziós építészettel.", "ro": "Oraș în Marea Câmpie cu o arhitectură Art Nouveau impresionantă.", "en": "City in the Great Plain with impressive Art Nouveau architecture."},
    facts: {"de": ["Das Rathaus ist ein Meisterwerk des ungarischen Jugendstils.", "Heimatstadt des Schriftstellers Ferenc Móra."], "hu": ["A városháza a magyar szecesszió remekműve.", "Móra Ferenc író szülővárosa."], "ro": ["Primăria este o capodoperă a stilului Art Nouveau maghiar.", "Orașul natal al scriitorului Ferenc Móra."], "en": ["The town hall is a masterpiece of Hungarian Art Nouveau.", "Hometown of writer Ferenc Móra."]},
    image: "/poi-images/kiskunfelegyhaza.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Kiskunfélegyháza a Kiskunság szívében fekvő város, amely gazdag néprajzi hagyományairól és gyönyörű szecessziós építészetéről ismert. A város jelképe az impozáns Városháza, amely a magyar szecesszió egyik legszebb példája, gazdagon díszítve Zsolnay-kerámiákkal. A település története szorosan összefonódik a kunok kiváltságaival és a mezővárosi polgárosodással. Kiskunfélegyháza híres szülötte Petőfi Sándor (akit a város sajátjának tekint) és Móra Ferenc, az 'aranykoporsó' írója. A látogatókat a Kiskun Múzeum különleges börtönmúzeuma és a város környéki pusztai világ, Bugac közelsége vonzza. A város gazdaságában a mezőgazdaság és az élelmiszeripar mellett a gépgyártás is jelentős.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A kiskunfélegyházi Városháza tornya 45 méter magas és Zsolnay-cseréppel fedett.",
        "Petőfi Sándor gyermekkorának jelentős részét itt töltötte, és Félegyházát nevezte szülővárosának.",
        "A Kiskun Múzeumban látható az ország egyik utolsóként fennmaradt szélmalma.",
        "Móra Ferenc szülőháza ma emlékmúzeumként működik a városban.",
        "A várostól mindössze 20 kilométerre fekszik Bugac, a pusztai turizmus központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bugac",
    type: "landmark",
    parent: "bacs-kiskun",
    coords: [19.6833, 46.6833],
    name: {"de": "Bugac", "hu": "Bugac", "ro": "Bugac", "en": "Bugac"},
    description: {"de": "Teil des Kiskunság-Nationalparks, bekannt für seine traditionelle Puszta-Landschaft.", "hu": "A Kiskunsági Nemzeti Park része, hagyományos pusztai tájáról ismert.", "ro": "Parte a Parcului Național Kiskunság, cunoscut pentru peisajul său tradițional de puszta.", "en": "Part of the Kiskunság National Park, known for its traditional puszta landscape."},
    facts: {"de": ["Veranstaltet den Kurultáj, ein Treffen der Turkvölker.", "Heimat der ungarischen Graurinder."], "hu": ["Itt rendezik meg a Kurultájt.", "A magyar szürkemarhák hazája."], "ro": ["Găzduiește Kurultáj, o întâlnire a popoarelor turcice.", "Casa vitelor sure maghiare."], "en": ["Hosts the Kurultáj, a meeting of Turkic peoples.", "Home of the Hungarian Grey cattle."]},
    image: "/poi-images/bugac.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Bugac a Kiskunsági Nemzeti Park legnagyobb és legismertebb egysége, a magyar puszta és a pásztorkultúra egyik legfontosabb őrzőhelye. A terület híres a végtelen homokpusztáiról, az őshonos magyar állatfajokról (szürke marha, rackajuh, mangalica) és a lenyűgöző lovasbemutatókról. Bugacpuszta szívében található a Pásztormúzeum, amely bemutatja az egykori pusztai életmódot és a pásztorok eszközeit. Kétévente itt rendezik meg az Ősök Napját és a Kurultájt, a hun és türk tudatú népek legnagyobb hagyományőrző seregszemléjét. A táj nyugalma, az ősborókás és a pusztai rónaság különleges atmoszférája felejthetetlen élményt nyújt a természetbarátoknak és a magyar történelem iránt érdeklődőknek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Bugac az UNESCO által elismert bioszféra-rezervátum része.",
        "Itt található a Kiskunság egyik utolsó nagy kiterjedésű ősborókása.",
        "A bugaci ménes és a csikósok bemutatói világszerte ismertek.",
        "A Pásztormúzeum épülete egy hagyományos nádtetős kunyhót formáz.",
        "A területen rendszeresen végeznek régészeti ásatásokat, amelyek egy jelentős középkori kolostort tártak fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "oroshaza",
    type: "city",
    parent: "bekes",
    coords: [20.6667, 46.5667],
    name: {"de": "Orosháza", "hu": "Orosháza", "ro": "Orosháza", "en": "Orosháza"},
    description: {"de": "Stadt in Südostungarn, bekannt für das Heil- und Strandbad Gyopárosfürdő.", "hu": "Délkelet-magyarországi város, a Gyopárosfürdő gyógy- és strandfürdőről ismert.", "ro": "Oraș în sud-estul Ungariei, cunoscut pentru băile curative și de ștrand Gyopárosfürdő.", "en": "City in southeastern Hungary, known for the Gyopárosfürdő medicinal and thermal bath."},
    facts: {"de": ["Wird oft als 'Perle der Tiefebene' bezeichnet.", "Wichtiges Zentrum der Glasindustrie."], "hu": ["Gyakran az 'Alföld gyöngyszemeként' emlegetik.", "Az üvegipar fontos központja."], "ro": ["Adesea numit 'Perla Câmpii'.", "Centru important al industriei sticlei."], "en": ["Often referred to as the 'Pearl of the Lowlands'.", "Important center of the glass industry."]},
    image: "/poi-images/oroshaza.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Orosháza Békés vármegye jelentős gazdasági és kulturális központja, amely leginkább a tőle karnyújtásnyira fekvő Gyopárosfürdőről nevezetes. A 'földi paradicsomként' is emlegetett fürdőkomplexum egy természetes szikes tó partján épült fel, s gyógyvize mellett lenyűgöző parkjával és modern élményfürdőjével várja a látogatókat. Orosháza városa híres gazdag agrármúltjáról és ipari fejlődéséről, különösen az üveggyártásról. A kulturális élet központja a városi múzeum és a művészeti galériák, míg a gasztronómia kedvelőit a környékbeli kolbász- és húsipari specialitások vonzzák. A település rendezett tereivel, szobraival és barátságos alföldi hangulatával ideális helyszín a regenerálódásra és a dél-alföldi kultúra felfedezésére.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Gyopárosfürdő vize 1999-ben kapta meg hivatalosan a gyógyvíz minősítést.",
        "Orosháza az ország egyik legfontosabb üvegipari központja, ahol több mint 150 éve folyik gyártás.",
        "A város híres a Darvas-kúriáról, amely a környék egyik legszebb klasszicista épülete.",
        "A Szántó Kovács János Múzeumban látható az ország egyik leggazdagabb paraszti kocsi-gyűjteménye.",
        "Gyopárosfürdő tórendszere három tóból áll, amelyek összesen 6 hektár felületűek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mezohegyes",
    type: "city",
    parent: "bekes",
    coords: [20.8167, 46.3167],
    name: {"de": "Mezőhegyes", "hu": "Mezőhegyes", "ro": "Mezőhegyes", "en": "Mezőhegyes"},
    description: {"de": "Stadt bekannt für ihr staatliches Gestüt und ihre reiche Pferdezuchttradition.", "hu": "Állami ménesbirtokáról és gazdag lótartási hagyományairól ismert város.", "ro": "Oraș cunoscut pentru herghelia sa de stat și bogata tradiție în creșterea cailor.", "en": "Town known for its state stud farm and rich horse-breeding tradition."},
    facts: {"de": ["Gegründet 1784 von Kaiser Joseph II.", "Die Architektur der Stadt ist einzigartig in Ungarn."], "hu": ["1784-ben alapította II. József császár.", "A város építészete egyedülálló Magyarországon."], "ro": ["Fondat în 1784 de împăratul Iosif al II-lea.", "Arhitectura orașului este unică în Ungaria."], "en": ["Founded in 1784 by Emperor Joseph II.", "The town's architecture is unique in Hungary."]},
    image: "/poi-images/mezohegyes.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Mezőhegyes egyedülálló 'város az országban', amelynek története szorosan összefonódik a híres állami ménesbirtokkal. A települést II. József császár alapította 1784-ben mint katonai ménest, s azóta a magyar lótenyésztés egyik legfontosabb fellegvára. Mezőhegyes építészeti képe rendkívül különleges: a város egységes klasszicista és empire stílusú épületei, a monumentális istállók és a lovaspályák egy letűnt kor eleganciáját hirdetik. Itt tenyésztették ki a nóniusz, a gidrán és a furioso-north star lófajtákat, amelyek ma is a magyar büszkeségek közé tartoznak. A terület ma Nemzeti Ménesbirtok és Tangazdaságként működik, s kulturális-turisztikai eseményeivel, lovasversenyeivel vonzza a látogatókat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A mezőhegyesi ménesbirtok az UNESCO világörökségi várományos listáján szerepel.",
        "Itt található az ország egyik legnagyobb fedett lovardája.",
        "A településen 54 műemlék épület található, amelyek többsége a ménesbirtokhoz kapcsolódik.",
        "Mezőhegyes híres a nóniusz lófajtáról, amelyet 'magyar lónak' is neveznek ereje és nemessége miatt.",
        "A város parkjai és platánsorai az ország egyik legszebb tájépítészeti együttesét alkotják."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarospatak",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [21.5667, 48.3167],
    name: {"de": "Scharoschpatak", "hu": "Sárospatak", "ro": "Sárospatak", "en": "Sárospatak"},
    description: {"de": "Historische Stadt am Fluss Bodrog, bekannt für ihre Renaissanceburg und das Kollegium.", "hu": "Történelmi város a Bodrog partján, reneszánsz váráról és kollégiumáról ismert.", "ro": "Oraș istoric pe râul Bodrog, cunoscut pentru castelul său renascentist și colegiu.", "en": "Historic town on the Bodrog river, known for its Renaissance castle and college."},
    facts: {"de": ["Wird oft als 'Athen am Bodrog' bezeichnet.", "Die Burg Rákóczi ist ein bedeutendes Denkmal."], "hu": ["Gyakran 'Bodrog-parti Athénként' emlegetik.", "A Rákóczi-vár jelentős műemlék."], "ro": ["Adesea numit 'Atena de pe Bodrog'.", "Castelul Rákóczi este un monument important."], "en": ["Often called 'Athens on the Bodrog'.", "The Rákóczi Castle is a significant monument."]},
    image: "/poi-images/sarospatak.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Sárospatak, a 'Bodrog-parti Athén', a magyar művelődéstörténet és oktatás egyik legfontosabb központja Borsod-Abaúj-Zemplén vármegyében. A város szimbóluma a Rákóczi-vár, a magyarországi késő reneszánsz építészet legértékesebb alkotása, amely a híres erdélyi fejedelmi család székhelye volt. A vár falai között ma múzeum működik, bemutatva a Rákóczi-szabadságharc emlékeit. Sárospatak másik büszkesége a Református Kollégium, ahol több évszázadon át tanultak a magyar szellemi élet kiválóságai, s amelynek könyvtára felbecsülhetetlen értékeket őriz. A Bodrog folyó, a közeli Megyer-hegyi tengerszem és a Zempléni-hegység közelsége a természetjárók számára is vonzóvá teszi ezt a történelmi várost.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A sárospataki Rákóczi-vár szerepel az 500 forintos bankjegy hátoldalán.",
        "A Református Kollégiumot 1531-ben alapították, Magyarország egyik legrégebbi iskolája.",
        "Itt élt és tanított a híres pedagógus, Comenius, a 17. század közepén.",
        "A közeli Megyer-hegyi tengerszem az ország egyik legszebb természeti látványossága, egy régi kőbánya helyén alakult ki.",
        "Sárospatak a Tokaji borvidék északi kapuja, híres pincészeteiről és borairól."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lillafured",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.6167, 48.1],
    name: {"de": "Lillafüred", "hu": "Lillafüred", "ro": "Lillafüred", "en": "Lillafüred"},
    description: {"de": "Malerischer Ferienort im Bükk-Gebirge, bekannt für sein Schlosshotel und den Wasserfall.", "hu": "Festői üdülőhely a Bükkben, kastélyszállójáról és vízeséséről ismert.", "ro": "Stațiune pitorească în munții Bükk, cunoscută pentru hotelul său castel și cascadă.", "en": "Picturesque resort in the Bükk Mountains, known for its castle hotel and waterfall."},
    facts: {"de": ["Hier befindet sich der höchste Wasserfall Ungarns.", "Der Hámori-See bietet Möglichkeiten zum Bootfahren."], "hu": ["Itt található Magyarország legmagasabb vízesése.", "A Hámori-tó csónakázási lehetőséget kínál."], "ro": ["Aici se află cea mai înaltă cascadă din Ungaria.", "Lacul Hámori oferă posibilități de plimbare cu barca."], "en": ["Home to the highest waterfall in Hungary.", "Lake Hámori offers boating opportunities."]},
    image: "/poi-images/lillafured.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Lillafüred Magyarország egyik legfestőibb hegyvidéki üdülőhelye Miskolc mellett, a Bükk-hegység keleti kapujában. Központi látványossága a monumentális neoreneszánsz stílusú Palotaszálló, amely a Hámori-tó partján, meredek sziklákkal körülvett völgyben épült fel az 1920-as években. A szálló alatti függőkert, a vízesés (amely az ország legmagasabbja) és a közeli cseppkőbarlangok (Anna- és Szent István-barlang) egyedülálló romantikus atmoszférát teremtenek. Lillafüred kedvelt célpontja a kirándulóknak, a kisvasút szerelmeseinek és a csónakázni vágyóknak. A völgy különleges mikroklímája és a tiszta hegyi levegő gyógyító ereje miatt is keresett célpont minden évszakban.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A lillafüredi vízesés 20 méter magas, és mesterségesen alakították ki a Szinva-patak elterelésével.",
        "A Palotaszálló építéséhez szükséges köveket a környező hegyekből bányászták.",
        "Itt található az Anna-barlang, amely egy ritka édesvízi mésztufa-barlang.",
        "A Hámori-tó eredetileg a vasművek vízellátására létrehozott mesterséges tározó volt.",
        "Lillafüred a népszerű Lillafüredi Állami Erdei Vasút egyik legszebb megállóhelye."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "opusztaszer",
    type: "landmark",
    parent: "csongrad-csanad",
    coords: [20.0833, 46.4833],
    name: {"de": "Ópusztaszer", "hu": "Ópusztaszer", "ro": "Ópusztaszer", "en": "Ópusztaszer"},
    description: {"de": "Nationaler Historischer Gedenkpark, Ort der ersten ungarischen Nationalversammlung.", "hu": "Nemzeti Történeti Emlékpark, az első magyar országgyűlés helyszíne.", "ro": "Parcul Memorial Istoric Național, locul primei adunări naționale maghiare.", "en": "National Historical Memorial Park, site of the first Hungarian national assembly."},
    facts: {"de": ["Beherbergt das Feszty-Panorama-Gemälde.", "Ein wichtiges Symbol der ungarischen Identität."], "hu": ["Itt látható a Feszty-körkép.", "A magyar identitás fontos szimbóluma."], "ro": ["Găzduiește pictura panoramică Feszty.", "Un simbol important al identității maghiare."], "en": ["Houses the Feszty Panorama painting.", "An important symbol of Hungarian identity."]},
    image: "/poi-images/opusztaszer.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Ópusztaszer a magyar nemzet történelmi bölcsője, az a hely, ahol a hagyomány szerint Árpád vezér és a törzsfők megtartották az első országgyűlést a honfoglalás után. A Nemzeti Történeti Emlékpark legfontosabb látnivalója a Feszty-körkép, a monumentális panorámakép, amely a magyarok bejövetelét ábrázolja lenyűgöző részletességgel. Az emlékpark területén skanzen (szabadtéri néprajzi múzeum), honfoglalás kori bemutatók és a monostor romjai is megtalálhatók. Ópusztaszer nemcsak múzeum, hanem a nemzeti összetartozás szimbóluma is, ahol minden évben ezrek emlékeznek meg a magyar államiság gyökereiről. A park interaktív módon, minden korosztály számára élvezetesen mutatja be múltunkat és népi hagyományainkat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Feszty-körkép (A magyarok bejövetele) 120 méter hosszú és 15 méter magas falfestmény.",
        "A parkban található az Árpád-emlékmű, amelyet 1896-ban emeltek a millennium tiszteletére.",
        "A skanzen a dél-alföldi falvak népi építészetét mutatja be, működő szélmalommal.",
        "Az emlékpark területén látható a Szer monostorának romkertje, amely egykor fontos vallási központ volt.",
        "A Nomád Parkban lovasbemutatók és honfoglalás kori íjászat várja a látogatókat."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csongrad-city",
    type: "city",
    parent: "csongrad-csanad",
    coords: [20.15, 46.7167],
    name: {"de": "Csongrád", "hu": "Csongrád", "ro": "Csongrád", "en": "Csongrád"},
    description: {"de": "Stadt an der Mündung der Körös in die Theiß, bekannt für ihre Altstadt und den Sandstrand.", "hu": "Város a Körös tiszai torkolatánál, óvárosáról és homokos strandjáról ismert.", "ro": "Oraș la confluența râurilor Körös și Tisa, cunoscut pentru orașul vechi și plaja de nisip.", "en": "City at the confluence of the Körös and Tisza rivers, known for its old town and sandy beach."},
    facts: {"de": ["Der Stadtteil 'Belváros' bewahrt die traditionelle Architektur.", "Beliebter Ort für Wassersportler."], "hu": ["A 'Belváros' városrész őrzi a hagyományos építészetet.", "Népszerű hely a vízisportok kedvelői körében."], "ro": ["Cartierul 'Belváros' păstrează arhitectura tradițională.", "Loc popular pentru pasionații de sporturi nautice."], "en": ["The 'Belváros' district preserves traditional architecture.", "Popular spot for water sports enthusiasts."]},
    image: "/poi-images/csongrad-city.webp",
  
    descriptionAdvanced: {
      "de": "",
      "hu": "Csongrád a Tisza partján fekvő város, amely leginkább a folyóhoz kapcsolódó különleges életmódjáról és hangulatos történelmi városrészéről ismert. A város ékköve a 'Belváros' (vagy Óváros), amely nádtetős házaival és kanyargós utcáival egy 18. századi halászfalu hangulatát őrizte meg érintetlenül. Csongrád másik híres látnivalója a Körös-torok, a Tisza-part egyik legszebb homokos strandja, amely nyaranta igazi tengerparti életérzést nyújt a látogatóknak. A város híres borászatáról is, különösen a Csongrádi borvidék vörösborai (mint a Kadarka) emelkednek ki. A Tisza folyó közelsége, az ártéri erdők és a csendes kisvárosi atmoszféra teszi Csongrádot a lassú turizmus egyik kedvelt magyarországi helyszínévé.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A csongrádi Belváros házai műemléki védettség alatt állnak, ma is lakottak vagy vendégházként működnek.",
        "A Körös-toroki homokpad a Tisza alacsony vízállásakor válik láthatóvá és használhatóvá.",
        "A város nevét a közeli szláv 'Csernigrád' (fekete vár) elnevezésről kapta.",
        "Itt található a Szent Rókus templom, amely a város egyik legrégebbi barokk épülete.",
        "Csongrád híres a tiszai halászleveséről, amelyet hagyományosan bográcsban készítenek a parton."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mor",
    type: "city",
    parent: "fejer",
    coords: [18.2, 47.3667],
    name: {"de": "Moor", "hu": "Mór", "ro": "Mór", "en": "Mór"},
    description: {"de": "Stadt im Vértes-Gebirge, Zentrum einer berühmten Weißweinregion.", "hu": "Város a Vértes lábánál, egy híres fehérborvidék központja.", "ro": "Oraș în munții Vértes, centrul unei faimoase regiuni de vin alb.", "en": "City in the Vértes Mountains, center of a famous white wine region."},
    facts: {"de": ["Bekannt für die Rebsorte 'Ezerjó'.", "Veranstaltet jährlich die Mórer Weintage."], "hu": ["Az 'Ezerjó' szőlőfajtáról ismert.", "Évente megrendezik a Móri Bornapokat."], "ro": ["Cunoscut pentru soiul de struguri 'Ezerjó'.", "Găzduiește anual Zilele Vinului din Mór."], "en": ["Known for the 'Ezerjó' grape variety.", "Hosts the annual Mór Wine Days."]},
    image: "/poi-images/mor.webp",
  
    descriptionAdvanced: {
      "de": "Mór, eingebettet zwischen dem Vértes- und Bakony-Gebirge, ist das Zentrum einer der kleinsten, aber angesehensten Weinregionen Ungarns. Die Stadt blickt auf eine lange Tradition des Weinbaus zurück, die vor allem durch die Ansiedlung deutscher Siedler im 18. Jahrhundert geprägt wurde. Weltberühmt ist Mór für die Rebsorte 'Ezerjó', aus der charaktervolle, säurereiche Weißweine gekeltert werden. Das barocke Lamberg-Schloss im Stadtzentrum ist ein kulturelles Juwel und beherbergt Ausstellungen zur Lokalgeschichte und Weinbaukultur. Jedes Jahr im Oktober locken die Mórer Weintage Zehntausende Besucher an, die die edlen Tropfen in den vielen Weinkellern verkosten. Die umliegende Hügellandschaft bietet zudem hervorragende Bedingungen für Wanderer und Naturliebhaber.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Mór ist die Heimat der einzigartigen ungarischen Rebsorte 'Ezerjó'.", "Das Lamberg-Schloss wurde vom berühmten Architekten Franz Anton Hillebrandt entworfen.", "Die Mórer Weintage sind eines der ältesten und größten Weinfeste in Transdanubien.", "In der Stadt lebt eine bedeutende deutsche Minderheit, die den Weinbau maßgeblich prägte."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "martonvasar",
    type: "city",
    parent: "fejer",
    coords: [18.7833, 47.3167],
    name: {"de": "Martonwaschar", "hu": "Martonvásár", "ro": "Martonvásár", "en": "Martonvásár"},
    description: {"de": "Stadt bekannt für das neugotische Schloss Brunszvik und seine Verbindung zu Beethoven.", "hu": "A neogótikus Brunszvik-kastélyról és Beethovenhez fűződő kapcsolatáról ismert város.", "ro": "Oraș cunoscut pentru castelul neogotic Brunszvik și legătura sa cu Beethoven.", "en": "Town known for the neo-Gothic Brunszvik Castle and its connection to Beethoven."},
    facts: {"de": ["Beethoven war oft Gast im Schloss.", "Beherbergt ein Beethoven-Gedenkmuseum."], "hu": ["Beethoven gyakori vendég volt a kastélyban.", "Beethoven-emlékmúzeumnak ad otthont."], "ro": ["Beethoven a fost adesea oaspete la castel.", "Găzduiește un muzeu memorial Beethoven."], "en": ["Beethoven was a frequent guest at the castle.", "Houses a Beethoven Memorial Museum."]},
    image: "/poi-images/martonvasar.webp",
  
    descriptionAdvanced: {
      "de": "Martonvásár ist landesweit bekannt für das prächtige Schloss Brunszvik, das als das 'ungarische Zentrum der Beethoven-Pflege' gilt. Das Schloss wurde im neugotischen Stil umgebaut und ist von einem der schönsten englischen Gärten Ungarns umgeben, in dessen Mitte ein idyllischer See mit einer Insel liegt. Ludwig van Beethoven war ein enger Freund der Familie Brunszvik und verbrachte hier mehrere Sommer, wobei er angeblich einige seiner berühmten Werke in dieser inspirierenden Umgebung komponierte. Heute beherbergt das Schloss ein Beethoven-Museum und ist Sitz des Agrarwissenschaftlichen Forschungszentrums der Ungarischen Akademie der Wissenschaften. Im Sommer finden auf der Insel im Schlosspark regelmäßig klassische Konzerte statt, die die Verbindung zwischen dem Genie und diesem romantischen Ort feiern. Martonvásár ist ein Ort, an dem sich Musikgeschichte, Architektur und Natur auf harmonische Weise vereinen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Brunszvik in Martonvásár ist ein herausragendes Beispiel der ungarischen Neugotik.", "Ludwig van Beethoven widmete seine berühmte 'Appassionata'-Sonate dem Grafen Franz Brunszvik.", "Auf der Insel im Schlosspark finden seit 1958 jährlich Beethoven-Gedenkkonzerte statt.", "Die Stadt beherbergt zudem das erste Kindergartnmuseum Ungarns, gegründet zu Ehren von Therese Brunszvik."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mosonmagyarovar",
    type: "city",
    parent: "gyor-moson-sopron",
    coords: [17.2667, 47.8667],
    name: {"de": "Wieselburg-Ungarisch Altenburg", "hu": "Mosonmagyaróvár", "ro": "Mosonmagyaróvár", "en": "Mosonmagyaróvár"},
    description: {"de": "Stadt an der Grenze zu Österreich und der Slowakei, bekannt für ihr Thermalbad.", "hu": "Város az osztrák és szlovák határ közelében, termálfürdőjéről ismert.", "ro": "Oraș lângă granița cu Austria și Slovacia, cunoscut pentru baia sa termală.", "en": "City near the Austrian and Slovak borders, known for its thermal bath."},
    facts: {"de": ["Wichtiges Zentrum für Zahnmedizintourismus.", "Hat eine bedeutende landwirtschaftliche Universität."], "hu": ["A fogászati turizmus fontos központja.", "Jelentős agrár-egyetemmel rendelkezik."], "ro": ["Centru important pentru turismul stomatologic.", "Are o universitate agricolă importantă."], "en": ["Important center for dental tourism.", "Has a significant agricultural university."]},
    image: "/poi-images/mosonmagyarovar.webp",
  
    descriptionAdvanced: {
      "de": "Mosonmagyaróvár, im Nordwesten Ungarns nahe der österreichischen und slowakischen Grenze gelegen, ist eine Stadt von historischer Bedeutung und moderner Heilkraft. Die Stadt entstand durch die Vereinigung von Moson und Magyaróvár und wird von mehreren Armen der Leitha und der Moson-Donau durchzogen. Das absolute Wahrzeichen ist die mächtige Burg, die heute die renommierte Agrarfakultät der Universität beherbergt. Mosonmagyaróvár ist zudem weltweit bekannt für sein Heilwasser, das zu den fünf wirksamsten in Europa zählt und jährlich zahlreiche Kurgäste anzieht. Die historische Altstadt mit ihren barocken Häusern und gemütlichen Restaurants lädt zum Verweilen und Entdecken ein. Die strategische Lage im Dreiländereck macht die Stadt zu einem wichtigen wirtschaftlichen und touristischen Knotenpunkt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Heilwasser von Mosonmagyaróvár zählt laut Experten zu den wirksamsten in ganz Europa.", "Die Burg der Stadt beherbergt eine der ältesten landwirtschaftlichen Bildungseinrichtungen der Welt.", "Die Stadt liegt im Szigetköz, einer einzigartigen Flusslandschaft mit reicher Natur.", "Mosonmagyaróvár ist ein bedeutendes Zentrum für Medizintourismus, insbesondere für Zahnheilkunde."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fertod",
    type: "city",
    parent: "gyor-moson-sopron",
    coords: [16.8667, 47.6167],
    name: {"de": "Fertőd", "hu": "Fertőd", "ro": "Fertőd", "en": "Fertőd"},
    image: "/geo-images/hungary/fertod.webp",
    description: {"de": "Stadt bekannt für das Schloss Esterházy, das 'ungarische Versailles'.", "hu": "Az Esterházy-kastélyról, a 'magyar Versailles-ról' ismert város.", "ro": "Oraș cunoscut pentru Castelul Esterházy, 'Versailles-ul maghiar'.", "en": "Town known for the Esterházy Palace, the 'Hungarian Versailles'."},
    facts: {"de": ["Joseph Haydn lebte und arbeitete hier viele Jahre.", "Das Schloss ist ein Meisterwerk des Rokoko."], "hu": ["Joseph Haydn sok éven át élt és dolgozott itt.", "A kastély a rokokó remekműve."], "ro": ["Joseph Haydn a trăit și a lucrat aici mulți ani.", "Castelul este o capodoperă a stilului rococo."], "en": ["Joseph Haydn lived and worked here for many years.", "The palace is a masterpiece of Rococo architecture."]},
  
    descriptionAdvanced: {
      "de": "Fertőd ist weltberühmt für das Schloss Esterházy, das oft als das 'ungarische Versailles' bezeichnet wird und eines der bedeutendsten Barockensembles Mitteleuropas ist. Das Schloss besticht durch seine enorme Größe, den prachtvollen Festsaal und die reich verzierten Fassaden, die den einstigen Reichtum der Fürsten Esterházy widerspiegeln. Über fast drei Jahrzehnte wirkte hier der berühmte Komponist Joseph Haydn als Kapellmeister und schuf im Dienste des Fürsten 'Prachtliebender Nikolaus' einen Großteil seines Lebenswerks. Der weitläufige Schlosspark und das angrenzende Marionettentheater zeugen von der glanzvollen höfischen Kultur des 18. Jahrhunderts. Fertőd liegt zudem am Rande des Nationalparks Fertő-Hanság, der Teil des UNESCO-Weltkulturerbes ist. Ein Besuch in Fertőd bietet einen faszinierenden Einblick in die barocke Pracht und die Musikgeschichte von Weltrang.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Esterházy in Fertőd ist das größte und prächtigste Barockschloss in Ungarn.", "Joseph Haydn lebte und arbeitete fast 30 Jahre lang als Hofkomponist in diesem Schloss.", "Das Schloss besitzt 126 reich dekorierte Zimmer und einen prächtigen Festsaal.", "Jährlich findet in Fertőd das internationale Haydn-Festival mit hochrangigen Musikern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajduboszormeny",
    type: "city",
    parent: "hajdu-bihar",
    coords: [21.5167, 47.6667],
    name: {"de": "Hajdúböszörmény", "hu": "Hajdúböszörmény", "ro": "Hajdúböszörmény", "en": "Hajdúböszörmény"},
    description: {"de": "Die größte der Hajdú-Städte mit einer einzigartigen kreisförmigen Stadtstruktur.", "hu": "A legnagyobb hajdúváros, egyedülálló körgyűrűs városszerkezettel.", "ro": "Cel mai mare dintre orașele Hajdú, cu o structură urbană circulară unică.", "en": "The largest of the Hajdú towns with a unique circular city structure."},
    facts: {"de": ["Bewahrt die Traditionen der Hajdú-Reiter.", "Wichtiges landwirtschaftliches Zentrum."], "hu": ["Őrzi a hajdú hagyományokat.", "Fontos mezőgazdasági központ."], "ro": ["Păstrează tradițiile haiducilor (Hajdú).", "Centru agricol important."], "en": ["Preserves the Hajdú traditions.", "Important agricultural center."]},
    image: "/poi-images/hajduboszormeny.webp",
  
    descriptionAdvanced: {
      "de": "Hajdúböszörmény ist die größte und geschichtlich bedeutendste der sogenannten 'Haiduckenstädte' in Ostungarn. Das Stadtbild ist einzigartig, da es eine kreisförmige Struktur aufweist, die ursprünglich zu Verteidigungszwecken angelegt wurde und heute denkmalgeschützt ist. Die Haiducken, ursprünglich berittene Viehhirten und später Elitesoldaten, erhielten hier im 17. Jahrhundert von Fürst István Bocskai Land und Privilegien. Das Bocskai-István-Museum dokumentiert die faszinierende Geschichte dieser wehrhaften Gemeinschaft und zeigt wertvolle archäologische Funde aus der Bronzezeit. Die Stadt bewahrt stolz ihre Traditionen und ist für ihre Gastfreundschaft sowie die typische Gastronomie der Tiefebene bekannt. Hajdúböszörmény strahlt eine ruhige, bodenständige Kraft aus, die tief in der ungarischen Geschichte verwurzelt ist.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hajdúböszörmény besitzt eine einzigartige, kreisförmige Stadtstruktur aus der Haiduckenzeit.", "Die Stadt ist die 'Hauptstadt' der historischen Region der Haiducken (Hajdúság).", "In der Stadt befindet sich eines der wichtigsten Museen für die Geschichte der Haiducken.", "Die Region ist bekannt für ihre fruchtbaren Böden und die traditionsreiche Landwirtschaft."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "berettyoujfalu",
    type: "city",
    parent: "hajdu-bihar",
    coords: [21.5, 47.2167],
    name: {"de": "Berettyóújfalu", "hu": "Berettyóújfalu", "ro": "Berettyóújfalu", "en": "Berettyóújfalu"},
    description: {"de": "Stadt im Osten Ungarns, das Zentrum der Region Bihar.", "hu": "Kelet-magyarországi város, a Bihar régió központja.", "ro": "Oraș în estul Ungariei, centrul regiunii Bihar.", "en": "City in eastern Hungary, the center of the Bihar region."},
    facts: {"de": ["Bekannt für sein Thermalbad.", "Wichtiger Verkehrsknotenpunkt nahe der Grenze."], "hu": ["Termálfürdőjéről ismert.", "Fontos közlekedési csomópont a határ közelében."], "ro": ["Cunoscut pentru baia sa termală.", "Nod de transport important lângă graniță."], "en": ["Known for its thermal bath.", "Important transport hub near the border."]},
    image: "/poi-images/berettyoujfalu.webp",
  
    descriptionAdvanced: {
      "de": "Berettyóújfalu liegt im Osten Ungarns am Ufer des Berettyó-Flusses und ist ein wichtiges regionales Zentrum zwischen Debrecen und der rumänischen Grenze. Die Stadt blickt auf eine lange Geschichte zurück, die eng mit der Entwicklung des Handels und der Verwaltung im Komitat Bihar verbunden ist. Ein bedeutendes Wahrzeichen ist die Ruine von Herpály, ein imposanter Turm eines einstigen Klosters aus dem 12. Jahrhundert, der einsam in der Landschaft steht. Die Stadt bietet zudem moderne Erholung im Bihar-Heilbad, das für sein heilendes Thermalwasser und seine familienfreundliche Atmosphäre bekannt ist. Berettyóújfalu pflegt intensiv seine kulturellen Traditionen und ist stolz auf seine Rolle als kulturelles Tor der Region. Die weite Landschaft der Umgebung bietet Ruhe und Entspannung fernab des Massentourismus.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Klosterruine von Herpály ist ein bedeutendes Zeugnis der romanischen Architektur in der Region.", "Die Stadt ist ein historischer Sitz der Verwaltung des Komitats Bihar.", "Das Bihar-Heilbad nutzt Thermalwasser aus einer Tiefe von über 600 Metern.", "Berettyóújfalu liegt an einem strategisch wichtigen Verkehrsknotenpunkt nach Siebenbürgen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "parad",
    type: "city",
    parent: "heves",
    coords: [20.0333, 47.9167],
    name: {"de": "Parád", "hu": "Parád", "ro": "Parád", "en": "Parád"},
    image: "/geo-images/hungary/parad.webp",
    description: {"de": "Kurort im Mátra-Gebirge, bekannt für seine Heilquellen und das Kutschenmuseum.", "hu": "Üdülőhely a Mátrában, gyógyforrásairól és kocsimúzeumáról ismert.", "ro": "Stațiune în munții Mátra, cunoscută pentru izvoarele sale curative și muzeul trăsurilor.", "en": "Resort in the Mátra Mountains, known for its healing springs and carriage museum."},
    facts: {"de": ["Das Paráder Schwefelwasser ist landesweit bekannt.", "Beherbergt das Cifra-Stallgebäude."], "hu": ["A parádi kénes víz országszerte ismert.", "Itt található a Cifra-istálló."], "ro": ["Apa sulfuroasă de Parád este cunoscută în toată țara.", "Găzduiește clădirea Cifra-istálló."], "en": ["The sulfurous water of Parád is known nationwide.", "Home to the Cifra Stable building."]},
  
    descriptionAdvanced: {
      "de": "Parád, eingebettet in das malerische Parád-Tal im Mátra-Gebirge, ist einer der traditionsreichsten Kurorte Ungarns, bekannt für seine vielfältigen Heilwasserquellen. Besonders berühmt ist das 'Paráder Schwefelwasser', das seit Jahrhunderten zur Behandlung von Verdauungsbeschwerden genutzt wird. Der Ortsteil Parádfürdő besticht durch seine historischen Badegebäude und das imposante Károlyi-Schloss, in dem das Mitte eines weitläufigen Arboretums liegt. Einzigartig ist das Kutschenmuseum in den ehemaligen herrschaftlichen Stallungen (Cifra Istálló), das eine weltweit bedeutende Sammlung historischer Fahrzeuge zeigt. Die Umgebung von Parád bietet fantastische Wanderwege durch dichte Wälder und zu spektakulären Aussichtspunkten im höchsten Gebirge Ungarns. Die Stadt verbindet auf charmante Weise alpine Frische mit kaiserlicher Kurtradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Parád ist landesweit bekannt für seine verschiedenen Heil- und Mineralwasserquellen.", "Das Kutschenmuseum 'Cifra Istálló' gilt als eines der schönsten seiner Art weltweit.", "Das Károlyi-Schloss in Parádfürdő war einst eine prachtvolle Jagdresidenz.", "In Parád wird noch heute die traditionelle Glasmacherkunst in kleinen Werkstätten gepflegt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "belapatfalva",
    type: "city",
    parent: "heves",
    coords: [20.35, 48.05],
    name: {"de": "Bélapátfalva", "hu": "Bélapátfalva", "ro": "Bélapátfalva", "en": "Bélapátfalva"},
    description: {"de": "Stadt am Fuße des Bükk-Gebirges, berühmt für ihre mittelalterliche Zisterzienserabtei.", "hu": "Város a Bükk lábánál, középkori ciszterci apátságáról híres.", "ro": "Oraș la poalele munților Bükk, faimos pentru abația sa cisterciană medievală.", "en": "Town at the foot of the Bükk Mountains, famous for its medieval Cistercian abbey."},
    facts: {"de": ["Die Abteikirche ist eine der am besten erhaltenen romanischen Kirchen Ungarns.", "Beliebter Ausgangspunkt für Wanderungen."], "hu": ["Az apátsági templom Magyarország egyik legjobb állapotban maradt román stílusú temploma.", "Népszerű kiindulópont túrázáshoz."], "ro": ["Biserica abației este una dintre cele mai bine conservate biserici romanice din Ungaria.", "Punct de plecare popular pentru drumeții."], "en": ["The abbey church is one of the best-preserved Romanesque churches in Hungary.", "Popular starting point for hiking."]},
    image: "/poi-images/belapatfalva.webp",
  
    descriptionAdvanced: {
      "de": "Bélapátfalva liegt malerisch am Fuße des Bükk-Gebirges und ist vor allem für seine Zisterzienserabtei bekannt, die ein herausragendes Denkmal der romanischen Architektur in Ungarn ist. Die Abtei wurde 1232 gegründet und beeindruckt durch ihre schlichte Schönheit und die charakteristische Fassade aus abwechselnd roten und grauen Steinreihen. Es ist die einzige mittelalterliche Klosterkirche in Ungarn, die fast unversehrt in ihrer ursprünglichen Form erhalten geblieben ist. Direkt neben der Kirche entspringt die 'Drei-Quellen', die dem Ort eine spirituelle Ruhe verleihen. Die Umgebung von Bélapátfalva ist geprägt von den steilen Kalkfelsen des Bükk-Gebirges, die zu anspruchsvollen Wanderungen und Naturerkundungen einladen. Die Stadt ist ein Ort der Stille und Besinnung inmitten einer spektakulären Berglandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Zisterzienserabtei von Bélapátfalva ist die besterhaltene romanische Klosterkirche Ungarns.", "Die Kirche wurde im Jahr 1232 gegründet und ist dem Heiligen Jakob gewidmet.", "In der Nähe befinden sich die 'Drei-Quellen', die schon im Mittelalter die Mönche versorgten.", "Die umliegenden Felsformationen des Bükk-Gebirges bieten spektakuläre Aussichten auf das Umland."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mezotur",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.6167, 47.0],
    name: {"de": "Mezőtúr", "hu": "Mezőtúr", "ro": "Mezőtúr", "en": "Mezőtúr"},
    description: {"de": "Stadt in der Tiefebene, bekannt für ihre jahrhundertealte Töpfertradition.", "hu": "Alföldi város, évszázados fazekas hagyományairól ismert.", "ro": "Oraș în câmpie, cunoscut pentru tradiția sa seculară în olărit.", "en": "City in the plains, known for its centuries-old pottery tradition."},
    facts: {"de": ["Die Mezőtúrer Keramik ist ein Hungarikum.", "Veranstaltet jährlich Töpferfestivals."], "hu": ["A mezőtúri kerámia hungarikum.", "Évente rendeznek fazekas fesztiválokat."], "ro": ["Ceramica de Mezőtúr este un Hungarikum.", "Găzduiește anual festivaluri de olărit."], "en": ["Mezőtúr ceramics are a Hungarikum.", "Hosts annual pottery festivals."]},
    image: "/poi-images/mezotur.webp",
  
    descriptionAdvanced: {
      "de": "Mezőtúr, im Herzen der ungarischen Tiefebene am Ufer der Berettyó gelegen, blickt auf eine jahrhundertelange Tradition als Zentrum des Handwerks und der Bildung zurück. Die Stadt ist landesweit als die 'Stadt der Töpfer' bekannt, da die hiesige Tonverarbeitung seit dem Mittelalter Weltruf genießt. Die charakteristische Mezőtúrer Keramik mit ihren typischen Farben und Mustern ist ein geschütztes Kulturerbe der Region. Das Reformierte Kollegium der Stadt, gegründet im 16. Jahrhundert, war über lange Zeit ein geistiges Zentrum der Umgebung. Jährlich im Sommer lockt das 'Túr-Festival' Besucher an, die die Volkskunst, Musik und kulinarischen Spezialitäten der Tiefebene feiern möchten. Mezőtúr strahlt eine angenehme, ländliche Gelassenheit aus und pflegt stolz sein handwerkliches Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Mezőtúr ist das bedeutendste historische Zentrum der Töpferkunst in der ungarischen Tiefebene.", "Die Stadt beherbergt ein renommiertes Museum, das sich ausschließlich der Geschichte der Keramik widmet.", "Das Reformierte Kollegium von Mezőtúr wurde bereits im Jahr 1530 gegründet.", "Die Stadt liegt malerisch am Ufer der Berettyó, die ideale Bedingungen für Angler bietet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszafured",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.75, 47.6167],
    name: {"de": "Tiszafüred", "hu": "Tiszafüred", "ro": "Tiszafüred", "en": "Tiszafüred"},
    description: {"de": "Die 'Hauptstadt des Theiß-Sees', ein Zentrum für Ökotourismus und Wassersport.", "hu": "A 'Tisza-tó fővárosa', az ökoturizmus és a vízisportok központja.", "ro": "'Capitala Lacului Tisa', un centru pentru ecoturism și sporturi nautice.", "en": "The 'Capital of Lake Tisza', a center for ecotourism and water sports."},
    facts: {"de": ["Tor zum Nationalpark Hortobágy.", "Bekannt für seine Thermalbäder."], "hu": ["A Hortobágyi Nemzeti Park kapuja.", "Termálfürdőiről ismert."], "ro": ["Poarta către Parcul Național Hortobágy.", "Cunoscut pentru băile sale termale."], "en": ["Gateway to the Hortobágy National Park.", "Known for its thermal baths."]},
    image: "/poi-images/tiszafured.webp",
  
    descriptionAdvanced: {
      "de": "Tiszafüred ist das touristische Zentrum und die 'Hauptstadt' des Theiß-Sees, einer einzigartigen Wasserlandschaft im Osten Ungarns. Die Stadt bietet ideale Bedingungen für alle, die aktive Erholung am und im Wasser suchen, sei es beim Baden, Segeln, Angeln oder bei Kanutouren durch die labyrinthartigen Schilfgebiete. Besonders attraktiv ist der Theiß-See-Ökozentrum-Park, in dem man in riesigen Aquarien die einheimische Unterwasserwelt, darunter auch den mächtigen Hausen, bewundern kann. Tiszafüred hat zudem eine lange Tradition als Kurort und bietet entspannende Stunden in seinem Thermalbad. Die Stadt ist zudem für ihre traditionsreiche Töpferkunst bekannt, deren Erzeugnisse im örtlichen Museum besichtigt werden können. Als Tor zum Nationalpark Hortobágy ist Tiszafüred ein perfekter Ausgangspunkt für Naturerlebnisse zwischen Wasser und Puszta.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszafüred ist das wichtigste touristische Zentrum am Theiß-See.", "Das Ökozentrum in der Stadt beherbergt das größte Süßwasseraquarium-System in Europa.", "Die Stadt ist ein staatlich anerkannter Heilkurort mit wertvollem Thermalwasser.", "Die Tiszafüreder Töpferkunst ist ein wichtiger Teil der regionalen Volkskunsttradition."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "komarom",
    type: "city",
    parent: "komarom-esztergom",
    coords: [18.1167, 47.75],
    name: {"de": "Komorn", "hu": "Komárom", "ro": "Komárom", "en": "Komárom"},
    description: {"de": "Grenzstadt an der Donau, bekannt für ihr riesiges Festungssystem.", "hu": "Duna-parti határváros, hatalmas erődrendszeréről ismert.", "ro": "Oraș de graniță pe Dunăre, cunoscut pentru sistemul său imens de fortificații.", "en": "Border city on the Danube, known for its massive fortress system."},
    facts: {"de": ["Das Festungssystem ist das größte seiner Art in Mitteleuropa.", "Geteilt in einen ungarischen und einen slowakischen Teil."], "hu": ["Az erődrendszer Közép-Európa legnagyobb ilyen jellegű építménye.", "Magyar és szlovák részre oszlik."], "ro": ["Sistemul de fortificații este cel mai mare de acest tip din Europa Centrală.", "Împărțit într-o parte maghiară și una slovacă."], "en": ["The fortress system is the largest of its kind in Central Europe.", "Divided into a Hungarian and a Slovak part."]},
    image: "/poi-images/komarom.webp",
  
    descriptionAdvanced: {
      "de": "Komárom, an der Donau an der Grenze zur Slowakei gelegen, ist eine Stadt mit einer beeindruckenden militärischen Vergangenheit und einer lebendigen Gegenwart. Berühmt ist die Stadt für ihr gigantisches Festungssystem, bestehend aus den Festungen Monostor, Igmánd und Csillag, das im 19. Jahrhundert als das größte der Österreichisch-Ungarischen Monarchie galt. Die Festung Monostor ist heute ein faszinierendes Freilichtmuseum und Schauplatz zahlreicher historischer Festivals und Ausstellungen. Komárom ist zudem ein bedeutender Kurort, dessen Thermalwasser besonders reich an Mineralien ist und in einem modernen Bad genutzt wird. Die Stadt ist durch die Elisabethbrücke mit ihrer Zwillingsstadt Komárno in der Slowakei verbunden, was zu einen regen kulturellen Austausch führt. Komárom verbindet auf einzigartige Weise monumentale Festungsarchitektur mit entspannender Wellnesskultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Festungssystem von Komárom galt im 19. Jahrhundert als uneinnehmbar.", "Die Festung Monostor ist die größte Festungsanlage in ganz Mitteleuropa.", "Die Stadt ist ein wichtiger Hafen an der Donau und ein industrielles Zentrum.", "Komárom besitzt ein bekanntes Heilbad mit jodhaltigem Thermalwasser."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "babolna",
    type: "city",
    parent: "komarom-esztergom",
    coords: [17.9833, 47.65],
    name: {"de": "Bábolna", "hu": "Bábolna", "ro": "Bábolna", "en": "Bábolna"},
    description: {"de": "Stadt berühmt für ihr historisches Gestüt und die Pferdezucht.", "hu": "Történelmi ménesbirtokáról és lótartásáról híres város.", "ro": "Oraș faimos pentru herghelia sa istorică și creșterea cailor.", "en": "Town famous for its historic stud farm and horse breeding."},
    facts: {"de": ["Gegründet im Jahr 1789.", "Heimat der Shagya-Araber-Pferde."], "hu": ["1789-ben alapították.", "A Shagya-arab lovak hazája."], "ro": ["Fondat în anul 1789.", "Casa cailor Shagya Arab."], "en": ["Founded in 1789.", "Home of the Shagya Arabian horses."]},
    image: "/poi-images/babolna.webp",
  
    descriptionAdvanced: {
      "de": "Bábolna ist weltberühmt für sein Nationalgestüt, das 1789 gegründet wurde und die Wiege der weltbekannten Araberpferdezucht in Ungarn ist. Die Architektur des Ortes ist geprägt von den herrschaftlichen Gebäuden des Gestüts, dem prachtvollen Schloss und der Reithalle, die eine Atmosphäre von aristokratischem Glanz versprühen. Hier wurde die berühmte Linie 'Shagya-Araber' gezüchtet, die für ihre Ausdauer, Schnelligkeit und Eleganz geschätzt wird. Ein besonderes Highlight ist das Gestütsmuseum, das die Geschichte der Pferdezucht und die militärische Bedeutung der Anlage eindrucksvoll dokumentiert. Bábolna ist zudem eine moderne Agrarstadt und beherbergt bedeutende Unternehmen der Geflügelzucht. Für Pferdeliebhaber und Freunde historischer Ensembles ist Bábolna ein Ort von zeitloser Eleganz und großer Bedeutung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Nationalgestüt Bábolna ist die Heimat der berühmten Shagya-Araber-Pferde.", "Das Gestüt wurde 1789 per kaiserlichem Erlass als eigenständige Militäranlage gegründet.", "Das im Schloss untergebrachte Museum zeigt eine weltweit bedeutende Sammlung zur Hippologie.", "Das Gestütsensemble von Bábolna steht unter nationalem Denkmalschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szecseny",
    type: "city",
    parent: "nograd",
    coords: [19.5167, 48.0833],
    name: {"de": "Szecseny", "hu": "Szécsény", "ro": "Szécsény", "en": "Szécsény"},
    description: {"de": "Historische Stadt in Nordungarn, bekannt für das Barockschloss Forgách.", "hu": "Észak-magyarországi történelmi város, a barokk Forgách-kastélyról ismert.", "ro": "Oraș istoric în nordul Ungariei, cunoscut pentru castelul baroc Forgách.", "en": "Historic town in northern Hungary, known for the Baroque Forgách Castle."},
    facts: {"de": ["Ort der ungarischen Nationalversammlung von 1705.", "Hat einen schiefen Feuerturm."], "hu": ["Az 1705-ös országgyűlés helyszíne.", "Ferde tűztoronnyal rendelkezik."], "ro": ["Locul adunării naționale maghiare din 1705.", "Are un turn de foc înclinat."], "en": ["Site of the Hungarian national assembly of 1705.", "Has a leaning fire tower."]},
    image: "/poi-images/szecseny.webp",
  
    descriptionAdvanced: {
      "de": "Szécsény, im Norden Ungarns im Ipoly-Tal gelegen, ist eine Stadt von großer historischer Bedeutung und barockem Charme. Berühmt wurde sie durch den Reichstag von 1705, auf dem Fürst Ferenc Rákóczi II. zum Oberhaupt der ungarischen Konföderation gewählt wurde. Das barocke Forgách-Schloss, in dem heute das Ferenc-Kubinyi-Museum untergebracht ist, erinnert an diese glanzvolle Zeit und zeigt bedeutende Ausstellungen zur Regionalgeschichte. Ebenfalls sehenswert ist das Franziskanerkloster mit seiner gotischen Kirche, das über Jahrhunderte ein geistiges Zentrum der Region war. Eine Kuriosität der Stadt ist der 'Schiefe Turm' von Szécsény, ein alter Wehrturm, der sich im Laufe der Zeit geneigt hat. Die ruhige Atmosphäre der Stadt und die Nähe zur slowakischen Grenze machen sie zu einem interessanten Ziel für Geschichtsinteressierte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Szécsény fand 1705 der bedeutende Reichstag unter Fürst Ferenc Rákóczi II. statt.", "Das Forgách-Schloss ist ein herausragendes Beispiel barocker Schlossarchitektur in Nordungarn.", "Die Stadt besitzt einen 'Schiefen Turm', der als historischer Wehrturm diente.", "Szécsény ist ein wichtiger Ort an der Pilgerroute 'Via Margaritarum' (Perlenweg)."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tar",
    type: "city",
    parent: "nograd",
    coords: [19.75, 47.95],
    name: {"de": "Tar", "hu": "Tar", "ro": "Tar", "en": "Tar"},
    description: {"de": "Dorf am Fuße der Mátra, bekannt für seinen buddhistischen Stupa.", "hu": "Falu a Mátra lábánál, buddhista sztúpájáról ismert.", "ro": "Sat la poalele munților Mátra, cunoscut pentru stupa sa budistă.", "en": "Village at the foot of the Mátra, known for its Buddhist stupa."},
    facts: {"de": ["Der Stupa wurde zum Gedenken an Alexander Csoma de Kőrös errichtet.", "Ein Ort der Ruhe und Meditation."], "hu": ["A sztúpát Kőrösi Csoma Sándor emlékére emelték.", "A nyugalom és meditáció helye."], "ro": ["Stupa a fost ridicată în memoria lui Alexander Csoma de Kőrös.", "Un loc de liniște și meditație."], "en": ["The stupa was built in memory of Alexander Csoma de Kőrös.", "A place of peace and meditation."]},
    image: "/poi-images/tar.webp",
  
    descriptionAdvanced: {
      "de": "Der kleine Ort Tar im Cserhát-Gebirge ist bekannt für den buddhistischen Kőrösi-Csoma-Sándor-Gedenkpark. Dieser Park wurde zu Ehren des berühmten ungarischen Sprachforschers errichtet, der das erste tibetisch-englische Wörterbuch verfasste. Das Zentrum des Parks bildet eine weiße Friedensstupa, die vom 14. Dalai Lama eingeweiht wurde. Ein tibetisches Gedenkhaus und ein kleiner Tempel vermitteln Einblicke in die fernöstliche Kultur. Tar beherbergt zudem eine historisch interessante mittelalterliche Wehrkirche.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Tar befindet sich eine buddhistische Stupa, die dem Weltfrieden gewidmet ist.", "Der Gedenkpark ehrt den Tibetologen Alexander Csoma de Kőrös.", "Die Stupa wurde 1992 vom Dalai Lama persönlich eingeweiht.", "Der Ort besitzt eine gut erhaltene mittelalterliche Wehrkirche."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "erd",
    type: "city",
    parent: "pest",
    coords: [18.9167, 47.3833],
    name: {"de": "Hanselbeck", "hu": "Érd", "ro": "Érd", "en": "Érd"},
    description: {"de": "Große Stadt in der Agglomeration von Budapest, bekannt für ihr osmanisches Minarett.", "hu": "Nagyváros Budapest agglomerációjában, oszmán minaretjéről ismert.", "ro": "Oraș mare în aglomerația Budapestei, cunoscut pentru minaretul său otoman.", "en": "Large city in the Budapest agglomeration, known for its Ottoman minaret."},
    facts: {"de": ["Das Minarett ist eines von nur drei erhaltenen in Ungarn.", "Wichtiges Verkehrszentrum."], "hu": ["A minaret egyike a Magyarországon fennmaradt háromnak.", "Fontos közlekedési csomópont."], "ro": ["Minaretul este unul dintre cele doar trei rămase în Ungaria.", "Centru de transport important."], "en": ["The minaret is one of only three remaining in Hungary.", "Important transport hub."]},
    image: "/poi-images/erd.webp",
  
    descriptionAdvanced: {
      "de": "Érd, südwestlich von Budapest an der Donau gelegen, bewahrt trotz seiner modernen Rolle als Vorstadt interessante historische Schätze. Das original erhaltene osmanische Minarett aus dem 17. Jahrhundert ist eines von nur drei noch existierenden in ganz Ungarn. Das Ungarische Geographische Museum dokumentiert die Leistungen ungarischer Weltreisender und Entdecker. Von den Hochufern der Stadt bieten sich weite Ausblicke über die Donaulandschaft. Die geschützten Lösswände entlang des Flusses beherbergen eine besondere Flora und Fauna.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Érd besitzt eines der drei originalen türkischen Minarette in Ungarn.", "Das Ungarische Geographische Museum ist landesweit einzigartig.", "Die Stadt ist eine der flächenmäßig größten Siedlungen Ungarns.", "Die Donau-Lösswände bei Érd stehen unter Naturschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "cegled",
    type: "city",
    parent: "pest",
    coords: [19.8, 47.1833],
    name: {"de": "Ziegled", "hu": "Cegléd", "ro": "Cegléd", "en": "Cegléd"},
    description: {"de": "Stadt in der Tiefebene, bekannt für ihr Thermalbad und die Verbindung zu Lajos Kossuth.", "hu": "Alföldi város, termálfürdőjéről és Kossuth Lajoshoz fűződő kapcsolatáról ismert.", "ro": "Oraș în câmpie, cunoscut pentru baia sa termală și legătura cu Lajos Kossuth.", "en": "City in the plains, known for its thermal bath and connection to Lajos Kossuth."},
    facts: {"de": ["Beherbergt das größte Kossuth-Museum des Landes.", "Bekannt für seine reformierte Kirche."], "hu": ["Itt található az ország legnagyobb Kossuth-múzeuma.", "Református templomáról is ismert."], "ro": ["Găzduiește cel mai mare muzeu Kossuth din țară.", "Cunoscut pentru biserica sa reformată."], "en": ["Home to the largest Kossuth museum in the country.", "Known for its Reformed church."]},
    image: "/poi-images/cegled.webp",
  
    descriptionAdvanced: {
      "de": "Cegléd ist als 'Tor zur Tiefebene' und bedeutender Ort der ungarischen Geschichte bekannt. Die Stadt ist eng mit Lajos Kossuth verbunden, der hier 1848 seine berühmte Rekrutierungsrede hielt. Das Kossuth-Museum bewahrt das Erbe des Nationalhelden und dokumentiert die Revolutionsgeschichte. Die reformierte Kirche von Cegléd ist eine der größten protestantischen Gotteshäuser in Mitteleuropa. Das moderne Thermal- und Strandbad der Stadt nutzt wertvolles Heilwasser für therapeutische Zwecke.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Cegléd ist ein bedeutendes Zentrum des Kossuth-Kultes in Ungarn.", "Die reformierte Kirche der Stadt beeindruckt durch ihre monumentale Größe.", "Die Stadt beherbergt ein einzigartiges internationales Trommelmuseum.", "Die Region ist berühmt für den Anbau hochwertiger Aprikosen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonlelle",
    type: "city",
    parent: "somogy",
    coords: [17.7, 46.7833],
    name: {"de": "Lelle", "hu": "Balatonlelle", "ro": "Balatonlelle", "en": "Balatonlelle"},
    description: {"de": "Beliebter Ferienort am Südufer des Plattensees mit Sandstrand.", "hu": "Népszerű üdülőhely a Balaton déli partján, homokos stranddal.", "ro": "Stațiune populară pe malul sudic al Lacului Balaton, cu plajă de nisip.", "en": "Popular resort town on the southern shore of Lake Balaton with a sandy beach."},
    facts: {"de": ["Bekannt für seine Weinproduktion.", "Veranstaltet im Sommer viele Festivals."], "hu": ["Bortermeléséről ismert.", "Nyáron számos fesztiválnak ad otthont."], "ro": ["Cunoscut pentru producția de vin.", "Găzduiește multe festivaluri în timpul verii."], "en": ["Known for its wine production.", "Hosts many festivals during the summer."]},
    image: "/poi-images/balatonlelle.webp",
  
    descriptionAdvanced: {
      "de": "Balatonlelle ist ein beliebter Familienferienort am Südufer des Plattensees mit einer perfekten Mischung aus Strand und Kultur. Der weitläufige Sandstrand mit seinem flachen Wasser ist besonders bei Familien mit Kindern gefragt. Sommerliche Freilichttheater-Aufführungen und Weinfestivals prägen das lebendige kulturelle Leben des Ortes. Vom nahen Kishegy mit seinen historischen Kellern bietet sich ein fantastischer Panoramablick über den See. Die entspannte Urlaubsatmosphäre macht Balatonlelle zu einem der attraktivsten Ziele am Balaton.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balatonlelle besitzt einen der wenigen echten Sandstrände am Plattensee.", "Das jährliche Weinfest im August ist ein Highlight am Südufer.", "Vom Kishegy aus blickt man direkt auf das gegenüberliegende Badacsony-Massiv.", "Der Ort beherbergt einen bekannten Zirkus- und Erlebnispark."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fonyod",
    type: "city",
    parent: "somogy",
    coords: [17.55, 46.75],
    name: {"de": "Fonyód", "hu": "Fonyód", "ro": "Fonyód", "en": "Fonyód"},
    description: {"de": "Stadt am Südufer des Plattensees, bekannt für ihre Aussichtspunkte und den Hafen.", "hu": "Város a Balaton déli partján, kilátóiról és kikötőjéről ismert.", "ro": "Oraș pe malul sudic al Lacului Balaton, cunoscut pentru punctele sale de belvedere și port.", "en": "City on the southern shore of Lake Balaton, known for its viewpoints and harbor."},
    facts: {"de": ["Bietet den schönsten Blick auf das Badacsony-Gebirge.", "Hat den längsten Pier am Plattensee."], "hu": ["Innen nyílik a legszebb kilátás a Badacsonyra.", "Itt található a Balaton leghosszabb mólója."], "ro": ["Oferă cea mai frumoasă vedere asupra munților Badacsony.", "Are cel mai lung debarcader de pe Lacul Balaton."], "en": ["Offers the most beautiful view of the Badacsony mountains.", "Has the longest pier on Lake Balaton."]},
    image: "/poi-images/fonyod.webp",
  
    descriptionAdvanced: {
      "de": "Fonyód liegt auf einer markanten Hügelkette am Südufer des Plattensees und bietet spektakuläre Ausblicke. Von den zwei vulkanischen Hügeln aus kann man fast den gesamten See bis zur Halbinsel Tihany überblicken. Die Stadt blickt auf eine lange Tradition als Kurort zurück, was die vielen historischen Villen bezeugen. Der Hafen von Fonyód ist ein wichtiger Knotenpunkt für die Schifffahrt zum Nordufer. Ein Anziehungspunkt ist auch der große Wochenmarkt, der Besucher aus der weiten Umgebung anlockt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Fonyód besitzt die längste Hafenmole am gesamten Plattensee.", "Der Wochenmarkt von Fonyód ist der größte am Südufer des Sees.", "Die Stadt ist berühmt für ihre Aussichtstürme auf den vulkanischen Hügeln.", "Historische Villenviertel aus der Monarchiezeit prägen das Stadtbild."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kisvarda",
    type: "city",
    parent: "szabolcs-szatmar-bereg",
    coords: [22.0833, 48.2167],
    name: {"de": "Kleinwardein", "hu": "Kisvárda", "ro": "Kisvárda", "en": "Kisvárda"},
    description: {"de": "Stadt im Nordosten Ungarns, bekannt für ihre Burgruine und das Thermalbad.", "hu": "Északkelet-magyarországi város, várromjáról és termálfürdőjéről ismert.", "ro": "Oraș în nord-estul Ungariei, cunoscut pentru ruinele cetății și baia termală.", "en": "City in northeastern Hungary, known for its castle ruins and thermal bath."},
    facts: {"de": ["Veranstaltet jährlich das Festival der ungarischen Theater.", "Wichtiges wirtschaftliches Zentrum der Region."], "hu": ["Évente megrendezik a Magyar Színházak Fesztiválját.", "A régió fontos gazdasági központja."], "ro": ["Găzduiește anual Festivalul Teatrelor Maghiare.", "Centru economic important al regiunii."], "en": ["Hosts the annual Festival of Hungarian Theaters.", "Important economic center of the region."]},
    image: "/poi-images/kisvarda.webp",
  
    descriptionAdvanced: {
      "de": "Kisvárda im Nordosten Ungarns ist eine Stadt mit starker historischer Identität und lebendiger Kulturszene. Die spätgotische Burgruine dient heute als eindrucksvolle Kulisse für Freilichtspiele und Festivals. Besonders bekannt ist das jährliche Treffen der ungarischen Theater aus dem Ausland. Das Thermalbad 'Várfürdő' bietet moderne Erholung mit Heilwasser aus über 1000 Metern Tiefe. Die Stadt war historisch ein bedeutendes Handelszentrum an der Grenze zu den Karpaten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Kisvárda war im Mittelalter eine strategisch wichtige Festung.", "Die Stadt beherbergt das Festival der ungarischen Theater jenseits der Grenzen.", "Das Thermalbad nutzt sehr heißes Heilwasser für medizinische Zwecke.", "Kisvárda ist ein wichtiges Bildungs- und Kulturzentrum der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszadada",
    type: "city",
    parent: "szabolcs-szatmar-bereg",
    coords: [21.1167, 48.0333],
    name: {"de": "Tiszadada", "hu": "Tiszadada", "ro": "Tiszadada", "en": "Tiszadada"},
    description: {"de": "Dorf an der Theiß, bekannt für das Schloss Andrássy.", "hu": "Tisza-parti falu, az Andrássy-kastélyról ismert.", "ro": "Sat pe râul Tisa, cunoscut pentru Castelul Andrássy.", "en": "Village on the Tisza river, known for the Andrássy Castle."},
    facts: {"de": ["Malerische Lage am Fluss.", "Ort der Entspannung und Natur."], "hu": ["Festői fekvés a folyó partján.", "A kikapcsolódás és a természet helye."], "ro": ["Locație pitorească pe malul râului.", "Loc de relaxare și natură."], "en": ["Picturesque location on the riverbank.", "Place of relaxation and nature."]},
    image: "/poi-images/tiszadada.webp",
  
    descriptionAdvanced: {
      "de": "Tiszadada ist ein idyllisches Dorf am Ufer der Theiß, das durch seine unberührte Natur besticht. Der Ort liegt in einer weiten Flussschleife und bietet ideale Bedingungen für Ruhe und Entspannung. Das Schloss Patay mit seinem weitläufigen Park erinnert an die einstige Adelskultur der Region. Tiszadada war ein wichtiger Inspirationsort für den berühmten visionären Maler Tivadar Csontváry Kosztka. Die Auenwälder entlang der Theiß sind ein Paradies für Angler und Naturbeobachter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszadada liegt an einem der schönsten Abschnitte der mittleren Theiß.", "Der Maler Tivadar Csontváry Kosztka wirkte zeitweise in diesem Dorf.", "Das Schloss Patay ist ein bedeutendes Baudenkmal der Region.", "Die Gegend ist bekannt für ihre reiche Vogelwelt in den Flussauen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "dombovar",
    type: "city",
    parent: "tolna",
    coords: [18.1333, 46.3667],
    name: {"de": "Dombovar", "hu": "Dombóvár", "ro": "Dombóvár", "en": "Dombóvár"},
    description: {"de": "Stadt in Südtransdanubien, bekannt für das Gunaras-Heilbad.", "hu": "Dél-dunántúli város, a Gunaras gyógyfürdőről ismert.", "ro": "Oraș în Transdanubia de Sud, cunoscut pentru baia curativă Gunaras.", "en": "City in Southern Transdanubia, known for the Gunaras medicinal bath."},
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Das Heilwasser ist reich an Fluorid."], "hu": ["Fontos vasúti csomópont.", "A gyógyvíz fluoridban gazdag."], "ro": ["Nod feroviar important.", "Apa curativă este bogată în fluor."], "en": ["Important railway junction.", "The medicinal water is rich in fluoride."]},
    image: "/poi-images/dombovar.webp",
  
    descriptionAdvanced: {
      "de": "Dombóvár ist eine dynamische Stadt mit bedeutender Eisenbahngeschichte und modernen Heilkräften. Der Stadtteil Gunarasfürdő ist ein staatlich anerkannter Heilkurort, dessen Wasser einen hohen Fluoridgehalt aufweist. Die Entwicklung der Stadt zum wichtigen Bahnknotenpunkt im 19. Jahrhundert prägte Architektur und Wirtschaft. Dombóvár ist zudem von einer waldreichen Hügellandschaft umgeben, die zu Wanderungen einlädt. Das Szigeter-Viertel beherbergt interessante Museen zur Lokalgeschichte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gunarasfürdő in Dombóvár ist berühmt für sein fluoridhaltiges Heilwasser.", "Dombóvár ist ein zentraler Knotenpunkt der Bahnstrecke Budapest-Pécs.", "Die Stadt bewahrt wertvolle Sammlungen zur ungarischen Eisenbahngeschichte.", "In der Umgebung befinden sich die Ruinen der mittelalterlichen Burg Gólyavár."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "dunafoldvar",
    type: "city",
    parent: "tolna",
    coords: [18.9167, 46.8],
    name: {"de": "Donafeldwar", "hu": "Dunaföldvár", "ro": "Dunaföldvár", "en": "Dunaföldvár"},
    description: {"de": "Stadt an der Donau, bekannt für ihre Burg und die Brücke.", "hu": "Duna-parti város, váráról és hídjáról ismert.", "ro": "Oraș pe Dunăre, cunoscut pentru cetatea și podul său.", "en": "City on the Danube, known for its castle and bridge."},
    facts: {"de": ["Die Burg bietet einen weiten Blick über die Donau.", "Bekannt für seine Thermalbäder."], "hu": ["A várból messzire ellátni a Duna felett.", "Termálfürdőiről is ismert."], "ro": ["Cetatea oferă o vedere largă asupra Dunării.", "Cunoscut pentru băile sale termale."], "en": ["The castle offers a wide view over the Danube.", "Known for its thermal baths."]},
    image: "/poi-images/dunafoldvar.webp",
  
    descriptionAdvanced: {
      "de": "Dunaföldvár liegt malerisch an einem Steilufer der Donau und blickt auf eine strategische Vergangenheit zurück. Der mittelalterliche 'Csonka-Turm' ist das Wahrzeichen der Stadt und beherbergt heute ein Museum. Von seinem Plateau aus bietet sich ein beeindruckender Blick über die Donau und die Tiefebene. Das Heil- und Strandbad am Flussufer bietet Entspannung in geschichtsträchtiger Umgebung. Dunaföldvár war jahrhundertelang ein wichtiger Flussübergang und Handelsplatz.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Csonka-Turm ist einer der wenigen erhaltenen Wohntürme Ungarns.", "Die Stadt liegt an einem der markantesten Steilufer entlang der Donau.", "Dunaföldvár ist landesweit für seine hervorragende Konditortradition bekannt.", "Das Heilbad nutzt Thermalquellen direkt am Ufer der Donau."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "buk",
    type: "city",
    parent: "vas",
    coords: [16.75, 47.3833],
    name: {"de": "Bük", "hu": "Bük", "ro": "Bük", "en": "Bük"},
    description: {"de": "Einer der bekanntesten Kurorte Ungarns mit einem riesigen Thermalbad.", "hu": "Magyarország egyik legismertebb fürdővárosa hatalmas termálfürdővel.", "ro": "Una dintre cele mai cunoscute stațiuni balneare din Ungaria, cu o baie termală imensă.", "en": "One of Hungary's best-known spa towns with a massive thermal bath."},
    facts: {"de": ["Das Thermalwasser wurde bei Ölbohrungen entdeckt.", "Beliebt bei internationalen Gästen."], "hu": ["A termálvizet olajfúrás közben találták.", "Népszerű a nemzetközi vendégek körében."], "ro": ["Apa termală a fost descoperită în timpul forajelor petroliere.", "Popular printre oaspeții internaționali."], "en": ["The thermal water was discovered during oil drilling.", "Popular with international guests."]},
    image: "/poi-images/buk.webp",
  
    descriptionAdvanced: {
      "de": "Bük im Westen Ungarns beherbergt mit Bükfürdő eines der größten Heilbäder des Landes. Die Entdeckung der Quellen im Jahr 1957 verwandelte das Dorf in ein internationales Wellness-Zentrum. Das Heilwasser von Bük zeichnet sich durch einen extrem hohen Mineralstoffgehalt aus. Neben dem Badekomplex bietet der Ort einen Meisterschaftsgolfplatz und vielfältige Sportmöglichkeiten. Die ruhige, waldreiche Umgebung ist ideal für Radtouren und Spaziergänge.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Bükfürdő besitzt das zweitgrößte Heil- und Erlebnisbad in Ungarn.", "Das Heilwasser von Bük hat einen außergewöhnlich hohen Fluorid- und Jodgehalt.", "Die Stadt beherbergt einen der ersten und schönsten Golfplätze des Landes.", "Bük ist ein führendes Zentrum für Rehabilitation im Westen Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "oriszentpeter",
    type: "city",
    parent: "vas",
    coords: [16.4167, 46.8333],
    name: {"de": "Sankt Peter in der Wart", "hu": "Őriszentpéter", "ro": "Őriszentpéter", "en": "Őriszentpéter"},
    description: {"de": "Das Zentrum der Region Őrség, bekannt für seine traditionelle Architektur und Natur.", "hu": "Az Őrség központja, hagyományos építészetéről és természetéről ismert.", "ro": "Centrul regiunii Őrség, cunoscut pentru arhitectura tradițională și natură.", "en": "The center of the Őrség region, known for its traditional architecture and nature."},
    facts: {"de": ["Besteht aus mehreren verstreuten Ortsteilen (Szer).", "Bekannt für Kürbiskernöl."], "hu": ["Több, szétszórt településrészből (szer) áll.", "Híres a tökmagolajáról."], "ro": ["Format din mai multe cătune dispersate (szer).", "Faimos pentru uleiul de semințe de dovleac."], "en": ["Consists of several scattered settlements (szer).", "Famous for pumpkin seed oil."]},
    image: "/poi-images/oriszentpeter.webp",
  
    descriptionAdvanced: {
      "de": "Őriszentpéter ist das Zentrum der Region Őrség, einer einzigartigen Kulturlandschaft im Dreiländereck. Die Siedlungsform der 'Szer' (verstreute Wohnplätze) ist typisch für dieses historische Grenzwächterland. Die romanische Kirche aus dem 13. Jahrhundert diente einst als befestigte Wehrkirche gegen feindliche Angriffe. Die Region ist bekannt für ihr traditionelles Handwerk und Produkte wie hochwertiges Kürbiskernöl. Őriszentpéter ist das Tor zu einem unberührten Nationalpark mit Mooren und dichten Wäldern.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Őriszentpéter bewahrt die archaische Siedlungsform der 'Szer'-Gruppen.", "Die mittelalterliche St.-Peter-und-Paul-Kirche beherbergt wertvolle Fresken.", "Der Ort ist landesweit bekannt für die Herstellung von Őrséger Kürbiskernöl.", "Jährlich findet hier das traditionsreiche Kürbis-Festival statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "papa",
    type: "city",
    parent: "veszprem",
    coords: [17.4667, 47.3333],
    name: {"de": "Papa", "hu": "Pápa", "ro": "Pápa", "en": "Pápa"},
    description: {"de": "Historische Stadt mit barocker Architektur und einem berühmten Thermalbad.", "hu": "Történelmi város barokk építészettel és híres termálfürdővel.", "ro": "Oraș istoric cu arhitectură barocă și o faimoasă baie termală.", "en": "Historic city with Baroque architecture and a famous thermal bath."},
    facts: {"de": ["Sitz des Schlosses Esterházy.", "Wichtiges Zentrum der reformierten Kirche."], "hu": ["Az Esterházy-kastély székhelye.", "A református egyház fontos központja."], "ro": ["Sediul Castelului Esterházy.", "Centru important al bisericii reformate."], "en": ["Seat of the Esterházy Palace.", "Important center of the Reformed church."]},
    image: "/poi-images/papa.webp",
  
    descriptionAdvanced: {
      "de": "Pápa, die 'Stadt des Barock', ist ein bedeutendes religiöses und architektonisches Zentrum in Westungarn. Das prächtige Schloss Esterházy ist ein Meisterwerk des Barock und bietet Einblicke in das Leben des Hochadels. Die Stadt ist zudem als 'kalvinistisches Athen' bekannt und beherbergt ein seit 1531 bestehendes Kollegium. Das einzigartige Blaudruckmuseum dokumentiert die jahrhundertealte Tradition der Textilfärberei in der Region. Das moderne Várkertfürdő bietet Heilung und Entspannung in historischer Parkumgebung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Pápa beherbergt eines der bedeutendsten Barockschlösser der Familie Esterházy.", "Das Blaudruckmuseum ist Teil des immateriellen UNESCO-Weltkulturerbes.", "Die monumentale Hauptkirche am Hauptplatz wurde von Franz Anton Pilgram entworfen.", "Die Stadt blickt auf eine fast 500-jährige Tradition als Bildungszentrum zurück."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "badacsony",
    type: "landmark",
    parent: "veszprem",
    coords: [17.5, 46.8],
    name: {"de": "Badacsony", "hu": "Badacsony", "ro": "Badacsony", "en": "Badacsony"},
    description: {"de": "Vulkanberg am Plattensee, berühmt für seine Weine und Basaltformationen.", "hu": "Vulkanikus hegy a Balatonnál, borairól és bazaltorgonáiról híres.", "ro": "Munte vulcanic la Lacul Balaton, faimos pentru vinurile sale și formațiunile de bazalt.", "en": "Volcanic mountain at Lake Balaton, famous for its wines and basalt formations."},
    facts: {"de": ["Bekannt für die Rebsorte 'Kéknyelű'.", "Bietet Wanderwege mit Panoramablick."], "hu": ["A 'Kéknyelű' szőlőfajtáról ismert.", "Panorámás túraútvonalakat kínál."], "ro": ["Cunoscut pentru soiul de struguri 'Kéknyelű'.", "Oferă trasee de drumeție cu vedere panoramică."], "en": ["Known for the 'Kéknyelű' grape variety.", "Offers hiking trails with panoramic views."]},
    image: "/poi-images/badacsony.webp",
  
    descriptionAdvanced: {
      "de": "Der Badacsony ist der markanteste Zeugenberg am Nordufer des Plattensees, berühmt für seine Sargform und Weinkultur. Die riesigen Basaltorgeln an seinen Flanken sind beeindruckende Naturdenkmäler vulkanischen Ursprungs. Die sonnigen Hänge bieten ideale Bedingungen für den Weinbau, insbesondere für die seltene Rebsorte Kéknyelű. Wanderwege führen zum Gipfel, von dem aus man ein atemberaubendes Panorama über den Balaton genießt. Badacsony vereint auf einzigartige Weise Naturgewalt, erstklassige Weine und landschaftliche Ästhetik.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Badacsony ist mit 438 Metern der höchste Zeugenberg am Plattensee.", "Die Basaltorgeln am Berg erreichen eine Höhe von bis zu 60 Metern.", "Der Kéknyelű-Wein ist eine weltweite Rarität und gedeiht fast nur hier.", "Vom Gipfelturm bietet sich ein Rundblick über das gesamte Balaton-Oberland."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "heviz",
    type: "city",
    parent: "zala",
    coords: [17.1833, 46.7833],
    name: {"de": "Heiwis", "hu": "Hévíz", "ro": "Hévíz", "en": "Hévíz"},
    description: {"de": "Weltberühmter Kurort mit dem größten biologisch aktiven Thermalsee der Welt.", "hu": "Világhírű fürdőváros a világ legnagyobb biológiailag aktív termáltavával.", "ro": "Stațiune balneară renumită în întreaga lume, cu cel mai mare lac termal activ biologic din lume.", "en": "World-famous spa town with the largest biologically active thermal lake in the world."},
    facts: {"de": ["Die Wassertemperatur sinkt auch im Winter nicht unter 24°C.", "Bekannt für seine Schlammpackungen."], "hu": ["A víz hőmérséklete télen sem süllyed 24°C alá.", "Híres az iszappakolásairól."], "ro": ["Temperatura apei nu scade sub 24°C nici iarna.", "Cunoscut pentru împachetările cu nămol."], "en": ["The water temperature does not drop below 24°C even in winter.", "Known for its mud packs."]},
    image: "/poi-images/heviz.webp",
  
    descriptionAdvanced: {
      "de": "Hévíz beherbergt den größten natürlichen, biologisch aktiven Thermalsee der Welt und ist ein Weltruf genießender Kurort. Das heilende Wasser erneuert sich innerhalb weniger Tage komplett und bietet ganzjährig Badetemperaturen. Die Wasseroberfläche ist charakteristisch mit roten Seerosen bedeckt, die zum Symbol der Stadt wurden. Die Hévízer Heilkur wird erfolgreich bei Erkrankungen des Bewegungsapparates und rheumatischen Leiden eingesetzt. Die elegante Stadt besticht durch gepflegte Parks, Promenaden und erstklassige Wellness-Hotels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Hévízer See ist der größte natürliche Thermalsee weltweit.", "Das Wasser des Sees kühlt auch im tiefsten Winter nicht unter 24 Grad ab.", "Der heilende Schlamm vom Seeboden wird für medizinische Zwecke genutzt.", "Die indischen roten Seerosen wurden Ende des 19. Jahrhunderts hier angesiedelt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zalakaros",
    type: "city",
    parent: "zala",
    coords: [17.1167, 46.55],
    name: {"de": "Zalakaros", "hu": "Zalakaros", "ro": "Zalakaros", "en": "Zalakaros"},
    description: {"de": "Beliebte Kurstadt im Südwesten Ungarns mit einem modernen Erlebnisbad.", "hu": "Népszerű fürdőváros Délnyugat-Magyarországon, modern élményfürdővel.", "ro": "Oraș balnear popular în sud-vestul Ungariei, cu o baie de aventură modernă.", "en": "Popular spa town in southwestern Hungary with a modern adventure bath."},
    facts: {"de": ["Das Thermalwasser wurde 1962 entdeckt.", "Eines der meistbesuchten Bäder Ungarns."], "hu": ["A termálvizet 1962-ben fedezték fel.", "Magyarország egyik leglátogatottabb fürdője."], "ro": ["Apa termală a fost descoperită în 1962.", "Una dintre cele mai vizitate băi din Ungaria."], "en": ["The thermal water was discovered in 1962.", "One of the most visited baths in Hungary."]},
    image: "/poi-images/zalakaros.webp",
  
    descriptionAdvanced: {
      "de": "Zalakaros ist einer der jüngsten und dynamischsten Badekurorte Ungarns im Südwesten des Landes. Die Entdeckung des fast 100 Grad heißen Thermalwassers im Jahr 1962 führte zur Gründung eines modernen Badezentrums. Das Wasser ist reich an Jod, Brom und Schwefel und besonders wirksam bei chronischen Beschwerden. Die Stadt ist als 'Gartenstadt' bekannt, geprägt von weiten Grünflächen und farbenfrohen Blumenbeeten. Die Nähe zum Naturschutzgebiet Klein-Balaton macht den Ort auch für Naturfreunde attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Zalakaros besitzt eine der heißesten Thermalwasserquellen in ganz Ungarn.", "Die Stadt wurde mehrfach als 'blühendste Stadt Ungarns' ausgezeichnet.", "Das Thermalbad verfügt über ein modernes Erlebnisreich für Familien und Kinder.", "Der Ort ist ein idealer Ausgangspunkt für Ausflüge zum Naturschutzgebiet Klein-Balaton."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "balaton-to",
    type: "lake",
    parent: "HU",
    coords: [17.88, 46.88],
    name: {"de": "Plattensee", "hu": "Balaton", "ro": "Lacul Balaton", "en": "Lake Balaton"},
    image: "/geo-images/hungary/balaton-to.webp",
    description: {"de": "Der Balaton ist der größte See Mitteleuropas und das bedeutendste Urlaubsziel für Sommerurlauber in Ungarn.", "hu": "A Balaton Közép-Európa legnagyobb tava és a magyarországi nyári üdülések legnépszerűbb célpontja.", "ro": "Lacul Balaton este cel mai mare lac din Europa Centrală și cea mai importantă destinație de vacanță din Ungaria.", "en": "Lake Balaton is the largest lake in Central Europe and the most important holiday destination in Hungary."},
    facts: {"de": ["Wird aufgrund seiner Größe oft als das 'Ungarische Meer' bezeichnet.", "Bekannt für sein flaches, im Sommer angenehm warmes Wasser."], "hu": ["Hatalmas mérete miatt gyakran a 'magyar tengernek' nevezik.", "Sekély, nyáron kellemesen felmelegedő vizéről ismert szerte a világon."], "ro": ["Datorită dimensiunii sale mari, este adesea numit 'Marea Ungariei'.", "Cunoscut pentru apa sa puțin adâncă și plăcut de caldă în timpul verii."], "en": ["Often referred to as the 'Hungarian Sea' due to its large size.", "Known for its shallow water that warms up pleasantly in the summer."]},
    
    descriptionAdvanced: {
      de: "Der Balaton, oft als das 'Ungarische Meer' bezeichnet, ist der größte Binnensee Mitteleuropas und liegt im Westen Ungarns. Er erstreckt sich über eine Fläche von rund 592 Quadratkilometern und hat eine Länge von 77 Kilometern. Trotz seiner Größe ist der See außergewöhnlich flach, mit einer durchschnittlichen Tiefe von nur 3,3 Metern, was zu einer schnellen Erwärmung des Wassers im Sommer führt. Die Entstehung des Sees geht auf tektonische Absenkungen vor etwa 15.000 Jahren zurück. Die Nordküste ist geprägt von den vulkanischen Zeugenbergen des Bakony-Gebirges und der historischen Halbinsel Tihany, während die Südküste für ihre flachen Sandstrände bekannt ist. Ökonomisch ist der Balaton das wichtigste Tourismuszentrum des Landes und zudem ein bedeutendes Weinbaugebiet mit jahrhundertealter Tradition. Ökologisch ist der See Teil des Nationalparks Balaton-Oberland und dient als wichtiger Lebensraum für zahlreiche geschützte Vogelarten und endemische Fische wie den Zander.",
      hu: "A Balaton, amelyet gyakran a 'magyar tengernek' is neveznek, Közép-Európa legnagyobb édesvizű tava, amely Magyarország nyugati részén fekszik. Területe mintegy 592 négyzetkilométer, hossza pedig 77 kilométer. Mérete ellenére a tó rendkívül sekély, átlagos mélysége mindössze 3,3 méter, ami lehetővé teszi a víz gyors felmelegedését a nyári hónapokban. A tó kialakulása tektonikai süllyedésekre vezethető vissza, amelyek körülbelül 15 000 évvel ezelőtt történtek. Az északi partot a Bakony vulkanikus tanúhegyei és a történelmi Tihanyi-félsziget határozza meg, míg a déli part sekély homokos strandjairól ismert. Gazdaságilag a Balaton az ország legfontosabb turisztikai központja, emellett több évszázados hagyományokkal rendelkező borvidék is. Ökológiailag a tó a Balaton-felvidéki Nemzeti Park része, és fontos élőhelyet biztosít számos védett madárfajnak és endemikus halfajnak, például a fogasnak.",
      ro: "Lacul Balaton, supranumit adesea „Marea Ungariei”, este cel mai mare lac cu apă dulce din Europa Centrală, situat în vestul Ungariei. Se întinde pe o suprafață de aproximativ 592 de kilometri pătrați și are o lungime de 77 de kilometri. În ciuda dimensiunilor sale, lacul este extrem de puțin adânc, având o profunzime medie de doar 3,3 metri, ceea ce permite încălzirea rapidă a apei în timpul verii. Formarea lacului se datorează unor scufundări tectonice care au avut loc acum aproximativ 15.000 de ani. Malul nordic este caracterizat prin dealurile vulcanice ale Munților Bakony și peninsula istorică Tihany, în timp ce malul sudic este renumit pentru plajele sale nisipoase cu apă mică. Din punct de vedere economic, Balaton este cel mai important centru turistic al țării și o regiune viticolă cu o tradiție de secole. Ecologic, lacul face parte din Parcul Național Balaton-Felvidék, fiind un habitat esențial pentru numeroase specii de păsări protejate și pești endemici.",
      en: "Lake Balaton, often referred to as the 'Hungarian Sea,' is the largest freshwater lake in Central Europe, located in western Hungary. It covers a surface area of approximately 592 square kilometers and stretches 77 kilometers in length. Despite its vast surface, the lake is remarkably shallow, with an average depth of only 3.3 meters, which allows the water to warm up quickly during the summer months. The lake's formation dates back about 15,000 years to tectonic shifts and subsidences in the region. The northern shore is defined by the volcanic hills of the Bakony Mountains and the historic Tihany Peninsula, while the southern shore is famous for its long, shallow sandy beaches. Economically, Balaton is Hungary's primary tourism hub and a prestigious wine-producing region with centuries of viticultural history. Ecologically, it is part of the Balaton Uplands National Park, providing a vital habitat for numerous protected bird species and local fish like the pike-perch.",
    },
    factsAdvanced: {
      de: ["Größter Binnensee Mitteleuropas mit 592 km² Fläche", "Die durchschnittliche Wassertiefe beträgt nur 3,3 Meter", "Längste Ausdehnung des Sees beträgt 77 Kilometer", "Entstand durch tektonische Absenkungen vor 15.000 Jahren", "Halbinsel Tihany teilt den See an seiner schmalsten Stelle", "Wassertemperatur erreicht im Sommer bis zu 28 Grad Celsius"],
      hu: ["Közép-Európa legnagyobb tava 592 km²-es területtel", "Az átlagos vízmélység mindössze 3,3 méter", "A tó leghosszabb kiterjedése 77 kilométer", "Mintegy 15 000 évvel ezelőtt alakult ki süllyedéssel", "A Tihanyi-félsziget a legkeskenyebb részen osztja ketté", "A víz hőmérséklete nyáron elérheti a 28 Celsius-fokot"],
      ro: ["Cel mai mare lac din Europa Centrală, cu 592 km²", "Adâncimea medie a apei este de doar 3,3 metri", "Lungimea maximă a lacului este de 77 de kilometri", "Format prin scufundări tectonice acum 15.000 de ani", "Peninsula Tihany divide lacul în cel mai îngust punct", "Temperatura apei atinge vara până la 28 de grade Celsius"],
      en: ["Largest lake in Central Europe with a 592 km² area", "The average water depth is only 3.3 meters", "The maximum length of the lake is 77 kilometers", "Formed by tectonic subsidence around 15,000 years ago", "Tihany Peninsula marks the narrowest point of the lake", "Water temperatures can reach up to 28°C in summer"],
    },
  },
    {
    id: "tisza-folyo",
    type: "river",
    parent: "HU",
    coords: [20.15, 46.25],
    name: {"de": "Theiß", "hu": "Tisza", "ro": "Tisa", "en": "Tisza"},
    image: "/geo-images/hungary/tisza-folyo.webp",
    description: {"de": "Die Theiß ist der zweitlängste Fluss Ungarns und prägt maßgeblich die Landschaft der Großen Tiefebene.", "hu": "A Tisza Magyarország második leghosszabb folyója, amely meghatározza az Alföld tájegységének képét.", "ro": "Tisa este al doilea cel mai lung râu din Ungaria și modelează peisajul Marii Câmpii Maghiare.", "en": "The Tisza is the second longest river in Hungary and significantly shapes the landscape of the Great Plain."},
    facts: {"de": ["Berühmt für die 'Theißblüte', das spektakuläre Massenschlüpfen von Eintagsfliegen.", "Ein wichtiges Gebiet für den Wassertourismus und den Fischfang im Land."], "hu": ["Híres a tiszavirágzásról, a kérészek látványos tömeges rajzásáról.", "Az ország egyik legfontosabb területe a vízitúrázás és a horgászat számára."], "ro": ["Faimos pentru 'înflorirea Tisei', roirea spectaculoasă a efemeridelor.", "O zonă importantă pentru turismul nautic și pescuitul din țară."], "en": ["Famous for the 'Tisza blooming', a spectacular mass swarming of mayflies.", "An important area for water tourism and fishing in the country."]},
    
    descriptionAdvanced: {
      de: "Die Theiß (ungarisch Tisza) ist der zweitgrößte Fluss Ungarns und einer der bedeutendsten Nebenflüsse der Donau in Mitteleuropa. Sie entspringt in den Waldkarpaten der Ukraine und fließt über eine Länge von etwa 966 Kilometern durch Rumänien, die Slowakei, Ungarn und Serbien. Historisch war die Theiß für ihre extremen Hochwasser und den gewundenen Verlauf bekannt, bis im 19. Jahrhundert unter der Leitung von István Széchenyi und Pál Vásárhelyi umfangreiche Flussregulierungen durchgeführt wurden. Diese Maßnahmen verkürzten den Fluss erheblich und schufen fruchtbares Ackerland, veränderten jedoch auch das ökologische Gleichgewicht. Einzigartig ist das Naturphänomen der 'Theißblüte', bei dem Millionen von Eintagsfliegen (Palingenia longicauda) im Juni zur Paarung schlüpfen. Die Theiß spielt eine zentrale Rolle für die Landwirtschaft, den Fischfang und den aufstrebenden Ökotourismus, insbesondere rund um den Theiß-See (Tisza-tó), ein künstlich angelegtes Reservoir, das heute ein wichtiges Vogelschutzgebiet ist.",
      hu: "A Tisza Magyarország második legnagyobb folyója és a Duna egyik legfontosabb mellékfolyója Közép-Európában. Forrása az ukrajnai Máramarosi-havasokban található, és mintegy 966 kilométeren keresztül folyik át Ukrajna, Románia, Szlovákia, Magyarország és Szerbia területén. Történelmileg a Tisza rendkívüli áradásairól és kanyargós folyásáról volt ismert, mígnem a 19. században Széchenyi István és Vásárhelyi Pál vezetésével átfogó folyószabályozási munkálatokat végeztek. Ezek az intézkedések jelentősen lerövidítették a folyót és termékeny mezőgazdasági területeket hoztak létre, de megváltoztatták az ökológiai egyensúlyt is. Egyedülálló természeti jelenség a 'tiszavirágzás', amikor júniusban kérészek (Palingenia longicauda) milliói rajzanak ki a párosodáshoz. A Tisza központi szerepet játszik a mezőgazdaságban, a halászatban és az ökoturizmusban, különösen a Tisza-tó környékén, amely egy mesterséges víztározó és fontos madárvédelmi terület.",
      ro: "Tisa este al doilea râu ca mărime din Ungaria și unul dintre cei mai importanți afluenți ai Dunării în Europa Centrală. Izvorăște din Carpații Păduroși din Ucraina și curge pe o lungime de aproximativ 966 de kilometri prin Ucraina, România, Slovacia, Ungaria și Serbia. Din punct de vedere istoric, Tisa era cunoscută pentru inundațiile sale extreme și cursul sinuos, până când în secolul al XIX-lea s-au efectuat lucrări extinse de regularizare sub conducerea lui István Széchenyi și Pál Vásárhelyi. Aceste măsuri au scurtat semnificativ cursul râului și au creat terenuri agricole fertile, dar au modificat echilibrul ecologic. Un fenomen natural unic este „înflorirea Tisei”, când milioane de rusalii (Palingenia longicauda) ies la suprafață în iunie pentru împerechere. Tisa joacă un rol central în agricultură, pescuit și ecoturism, în special în jurul lacului Tisa (Tisza-tó), un rezervor artificial care este astăzi o importantă rezervație avifaunistică.",
      en: "The Tisza is the second-largest river in Hungary and one of the primary tributaries of the Danube in Central Europe. It originates in the Carpathian Mountains of Ukraine and flows approximately 966 kilometers through Ukraine, Romania, Slovakia, Hungary, and Serbia. Historically, the river was famous for its winding path and catastrophic floods until major regulation works were undertaken in the 19th century by István Széchenyi and Pál Vásárhelyi. These engineering efforts significantly shortened the river's length and reclaimed fertile land for agriculture, though they also altered the local ecosystem. A unique biological event known as the 'Tisza Blooming' occurs every June, when millions of mayflies (Palingenia longicauda) emerge to mate. Today, the river is vital for irrigation and fishing, and it supports a growing ecotourism industry, especially at Lake Tisza, a large man-made reservoir that has become an essential sanctuary for protected bird species.",
    },
    factsAdvanced: {
      de: ["Gesamtlänge des Flusses beträgt etwa 966 Kilometer", "Einzugsgebiet umfasst rund 157.000 Quadratkilometer", "Große Flussregulierung fand im 19. Jahrhundert statt", "Naturphänomen 'Theißblüte' ereignet sich jedes Jahr im Juni", "Fließt durch insgesamt fünf verschiedene europäische Länder", "Mündet in Serbien als linker Nebenfluss in die Donau"],
      hu: ["A folyó teljes hossza körülbelül 966 kilométer", "Vízgyűjtő területe mintegy 157 000 négyzetkilométer", "A nagy folyószabályozás a 19. században zajlott", "A tiszavirágzás egyedülálló jelensége minden júniusban látható", "Összesen öt különböző európai országon folyik keresztül", "Szerbiában a Duna bal oldali mellékfolyójaként torkollik be"],
      ro: ["Lungimea totală a râului este de aproximativ 966 km", "Bazinul hidrografic acoperă circa 157.000 km²", "Regularizarea majoră a cursului a avut loc în secolul XIX", "Fenomenul „înflorirea Tisei” are loc anual în luna iunie", "Râul traversează cinci țări europene diferite", "Se varsă în Dunăre pe teritoriul Serbiei"],
      en: ["Total length of the river is approximately 966 kilometers", "The drainage basin covers about 157,000 square kilometers", "Major river regulation took place in the 19th century", "The 'Tisza Blooming' phenomenon occurs every June", "The river flows through five different European countries", "It joins the Danube as a left-bank tributary in Serbia"],
    },
  },
    {
    id: "duna-folyo",
    type: "river",
    parent: "HU",
    coords: [19.04, 47.50],
    name: {"de": "Donau", "hu": "Duna", "ro": "Dunărea", "en": "Danube"},
    image: "/geo-images/hungary/duna-folyo.webp",
    description: {"de": "Die Donau ist die wichtigste Wasserstraße Ungarns und verbindet das Land mit dem Schwarzen Meer.", "hu": "A Duna Magyarország legfontosabb vízi útja, amely összeköti az országot a Fekete-tengerrel.", "ro": "Dunărea este cea mai importantă cale navigabilă a Ungariei, conectând țara cu Marea Neagră.", "en": "The Danube is the most important waterway in Hungary, connecting the country with the Black Sea."},
    facts: {"de": ["Fließt direkt durch das Herz der ungarischen Hauptstadt Budapest.", "Dient als natürliche Grenze zwischen mehreren europäischen Staaten."], "hu": ["Közvetlenül a magyar főváros, Budapest szívén folyik keresztül.", "Természetes határként szolgál több európai állam között."], "ro": ["Curge direct prin inima capitalei maghiare, Budapesta.", "Servește ca graniță naturală între mai multe state europene."], "en": ["Flows directly through the heart of the Hungarian capital, Budapest.", "Serves as a natural border between several European states."]},
    
    descriptionAdvanced: {
      de: "Die Donau ist mit einer Länge von etwa 2.850 Kilometern der zweitlängste Fluss Europas und der einzige bedeutende Fluss des Kontinents, der von Westen nach Osten fließt. Sie entspringt im Schwarzwald in Deutschland und mündet im weitreichenden Donaudelta in Rumänien und der Ukraine ins Schwarze Meer. Auf ihrem Weg durchquert oder berührt sie zehn Länder und verbindet vier europäische Hauptstädte: Wien, Bratislava, Budapest und Belgrad. Historisch diente die Donau als wichtige Handelsroute und Grenzlinie des Römischen Reiches (Limes). Ökonomisch ist sie für die Binnenschifffahrt, die Energiegewinnung durch Wasserkraft und die Trinkwasserversorgung von Millionen Menschen von zentraler Bedeutung. Das Donaudelta ist ein UNESCO-Weltnaturerbe und beherbergt eines der artenreichsten Ökosysteme der Welt. Trotz ökologischer Herausforderungen bleibt die Donau eine lebenswichtige Ader für den kulturellen und wirtschaftlichen Austausch in Europa.",
      hu: "A Duna mintegy 2850 kilométeres hosszával Európa második leghosszabb folyója, és a kontinens egyetlen jelentős folyója, amely nyugatról keletre folyik. A németországi Fekete-erdőben ered, és a hatalmas Duna-deltán keresztül Románia és Ukrajna határán torkollik a Fekete-tengerbe. Útja során tíz országot érint vagy szel át, és négy európai fővárost köt össze: Bécset, Pozsonyt, Budapestet és Belgrádot. Történelmileg a Duna fontos kereskedelmi útvonalként és a Római Birodalom határaként (Limes) szolgált. Gazdaságilag központi jelentőségű a belvízi hajózás, a vízenergia-termelés és milliók ivóvízellátása szempontjából. A Duna-delta az UNESCO Világörökség része, és a világ egyik fajgazdagabb ökoszisztémájának ad otthont. Az ökológiai kihívások ellenére a Duna továbbra is Európa kulturális és gazdasági cseréjének létfontosságú ütőere.",
      ro: "Dunărea este al doilea râu ca lungime din Europa, având aproximativ 2.850 de kilometri, și singurul fluviu major de pe continent care curge de la vest la est. Izvorăște din Munții Pădurea Neagră din Germania și se varsă în Marea Neagră prin vasta Deltă a Dunării, situată în România și Ucraina. În parcursul său, traversează sau mărginește zece țări și conectează patru capitale europene: Viena, Bratislava, Budapesta și Belgrad. Istoric, Dunărea a servit ca rută comercială esențială și ca frontieră a Imperiului Roman (Limes). Din punct de vedere economic, este de o importanță centrală pentru navigația interioară, producția de energie hidroelectrică și alimentarea cu apă potabilă pentru milioane de oameni. Delta Dunării este sit al Patrimoniului Mondial UNESCO și adăpostește unul dintre cele mai bogate ecosisteme din lume în ceea ce privește biodiversitatea. În ciuda provocărilor ecologice, Dunărea rămâne o arteră vitală pentru schimburile culturale și economice din Europa.",
      en: "The Danube is the second-longest river in Europe, stretching approximately 2,850 kilometers, and is unique for being the only major European river to flow from west to east. It originates in the Black Forest of Germany and empties into the Black Sea through the vast Danube Delta in Romania and Ukraine. Along its course, the river flows through or borders ten countries and connects four national capitals: Vienna, Bratislava, Budapest, and Belgrade. Historically, the Danube served as a vital trade route and a natural northern frontier of the Roman Empire, known as the Limes. Today, it remains economically crucial for inland shipping, hydroelectric power generation, and providing drinking water to millions of people. The Danube Delta is a UNESCO World Heritage site and represents one of the most biodiverse ecosystems in the world. Despite environmental challenges, the Danube continues to be a central artery for European cultural and economic integration.",
    },
    factsAdvanced: {
      de: ["Zweitlängster Fluss Europas mit etwa 2.850 Kilometern Länge", "Durchfließt oder berührt insgesamt zehn europäische Staaten", "Verbindet die vier Hauptstädte Wien, Bratislava, Budapest und Belgrad", "Mündet über das Donaudelta (UNESCO-Welterbe) ins Schwarze Meer", "Einzugsgebiet umfasst etwa 801.463 Quadratkilometer", "Dient seit der Römerzeit als strategische Handelsroute"],
      hu: ["Európa második leghosszabb folyója 2850 km-es hosszal", "Összesen tíz európai államot érint vagy szel át", "Négy fővárost köt össze: Bécset, Pozsonyt, Budapestet és Belgrádot", "A Duna-deltán keresztül torkollik a Fekete-tengerbe", "Vízgyűjtő területe körülbelül 801 463 négyzetkilométer", "A római kor óta stratégiai fontosságú kereskedelmi útvonal"],
      ro: ["Al doilea fluviu ca lungime din Europa, cu circa 2.850 km", "Traversează sau mărginește zece state europene diferite", "Conectează capitalele Viena, Bratislava, Budapesta și Belgrad", "Se varsă în Marea Neagră prin Delta Dunării (sit UNESCO)", "Bazinul hidrografic acoperă circa 801.463 km²", "A servit drept graniță a Imperiului Roman (Limes Danubian)"],
      en: ["Second-longest river in Europe at 2,850 kilometers", "The river passes through or borders ten European countries", "Connects four capital cities: Vienna, Bratislava, Budapest, and Belgrade", "Empties into the Black Sea via the UNESCO-listed Danube Delta", "The drainage basin spans approximately 801,463 km²", "Has functioned as a key trade route since Roman times"],
    },
  },
    {
    id: "kekes-teto",
    type: "mountain",
    parent: "heves",
    coords: [20.0108, 47.8728],
    name: {"de": "Kékes", "hu": "Kékes-tető", "ro": "Kékes", "en": "Kékes"},
    image: "/geo-images/hungary/kekes-teto.webp",
    description: {"de": "Mit 1014 Metern ist der Kékes der höchste Gipfel Ungarns und ein beliebtes Ziel für Wanderer.", "hu": "A 1014 méter magas Kékes-tető Magyarország legmagasabb pontja és közkedvelt túracélpont.", "ro": "Cu o înălțime de 1014 metri, Kékes este cel mai înalt vârf din Ungaria și o destinație populară.", "en": "At 1014 meters, Kékes is the highest peak in Hungary and a popular destination for hikers."},
    facts: {"de": ["Der markante Fernsehturm auf dem Gipfel dient auch als Aussichtsplattform.", "Ein beliebtes Skigebiet im Winter mit den längsten Pisten des Landes."], "hu": ["A csúcson álló tévétorony kilátóként is funkcionál a látogatók számára.", "Télen népszerű síterep, itt található az ország leghosszabb sípályája."], "ro": ["Turnul de televiziune de pe vârf servește și ca platformă de observație.", "O stațiune de schi populară iarna, cu cele mai lungi pârtii din țară."], "en": ["The prominent TV tower on the summit also serves as an observation deck.", "A popular ski resort in winter with the longest slopes in the country."]},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Kékes-tető Magyarország legmagasabb pontja, a Mátra-hegység és az ország szimbóluma, amely 1014 méterrel magasodik a tengerszint fölé. A csúcs tetején álló tévétorony kilátója és az ott található jellegzetes nemzeti színű kő az utazók kötelező megállója. A Kékes nemcsak földrajzi rekord, hanem népszerű gyógyhely is: tiszta, pormentes levegője és különleges klímája kiválóan alkalmas légzőszervi megbetegedések kezelésére. Télen a Kékes az ország legfontosabb síközpontjává válik, ahol Magyarország leghosszabb lesiklópályája várja a téli sportok kedvelőit. Az év többi szakaszában a sűrű bükkerdők és a kiépített túraútvonalak vonzzák a természetjárókat, akik a csúcsról lenyűgöző panorámát élvezhetnek az Alföldre és a Tátra vonulataira.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Kékes-tető magassága pontosan 1014 méter, amit a csúcson egy kő jelöl.",
        "A tévétorony 176 méter magas, kilátója pedig 45 méter magasságban található.",
        "Itt található Magyarország leghosszabb sípályája, amely 1,8 kilométer hosszú.",
        "A Kékesen mérték az országban eddigi legvastagabb hótakarót (151 cm) 1987-ben.",
        "A csúcs környékén számos szanatórium és gyógyszálló működik a klíma gyógyhatása miatt."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "baradla-barlang-poi",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.48, 48.47],
    name: {"de": "Baradla-Höhle", "hu": "Baradla-barlang", "ro": "Peștera Baradla", "en": "Baradla Cave"},
    image: "/geo-images/hungary/baradla-barlang.webp",
    description: {"de": "Die Baradla-Höhle ist das größte Tropfsteinhöhlensystem Ungarns und gehört zum UNESCO-Welterbe.", "hu": "A Baradla-barlang Magyarország legnagyobb cseppkőbarlang-rendszere és az UNESCO világörökség része.", "ro": "Peștera Baradla este cel mai mare sistem de peșteri cu stalactite din Ungaria și parte a patrimoniului UNESCO.", "en": "Baradla Cave is the largest stalactite cave system in Hungary and a UNESCO World Heritage site."},
    facts: {"de": ["Bekannt für ihre riesigen Säle und die außergewöhnliche Akustik bei Konzerten.", "Ein Teil des Höhlensystems erstreckt sich bis in die benachbarte Slowakei."], "hu": ["Hatalmas termeiről és a koncertek alkalmával tapasztalható akusztikájáról híres.", "A barlangrendszer egy része átnyúlik a szomszédos Szlovákia területére."], "ro": ["Cunoscută pentru sălile sale uriașe și acustica excepțională în timpul concertelor.", "O parte a sistemului de peșteri se extinde până în Slovacia vecină."], "en": ["Known for its massive halls and exceptional acoustics during concerts.", "A part of the cave system extends into neighboring Slovakia."]},
    descriptionAdvanced: {
      de: "Die Baradla-Höhle im Aggteleker Karst ist Teil eines 25 Kilometer langen Höhlensystems, das bis in die Slowakei reicht. Sie ist ein UNESCO-Weltkulturerbe, bekannt für ihre spektakulären Tropfsteine und großen unterirdischen Kammern. Die Höhle ist seit prähistorischen Zeiten bewohnt und ein wichtiger Ort für die Höhlenforschung.",
      hu: "Az aggteleki karsztvidéken található Baradla-barlang egy 25 kilométer hosszú barlangrendszer része, amely Szlovákia területére is átnyúlik. Az UNESCO Világörökség része, amely látványos cseppkőképződményeiről és hatalmas földalatti termeiről ismert. A barlang már a történelem előtti időkben is lakott volt, és fontos szpeleológiai helyszín.",
      ro: "Peștera Baradla, situată în regiunea carstică Aggtelek, face parte dintr-un sistem de peșteri lung de 25 de kilometri care se extinde în Slovacia. Este un sit al Patrimoniului Mondial UNESCO, cunoscut pentru stalactitele și stalagmitele sale spectaculoase. Peștera a fost locuită încă din timpurile preistorice și este un sit major.",
      en: "The Baradla Cave, located in the Aggtelek Karst region, is part of a 25-kilometer-long cave system extending into Slovakia. It is a UNESCO World Heritage site known for its spectacular stalactites, stalagmites, and large subterranean chambers. The cave has been inhabited since prehistoric times and is a major site for speleology.",
    },
    factsAdvanced: {
      de: ["Sie liegt im Aggteleker Karst.", "Die Länge beträgt 25 Kilometer.", "Es ist ein UNESCO-Weltkulturerbe.", "Sie verfügt über reiche Tropfsteinformationen.", "Das System reicht bis in die Slowakei.", "Die Höhle hat einen unterirdischen Konzertsaal."],
      hu: ["Az Aggteleki-karszton található.", "A barlangrendszer hossza 25 kilométer.", "Az UNESCO Világörökség része.", "Látványos cseppkőképződmények jellemzik.", "Átnyúlik a szlovák határ alatt.", "Egyik terme koncerthelyszínként is üzemel."],
      ro: ["Se află în regiunea carstică Aggtelek.", "Lungimea totală este de 25 de kilometri.", "Este un sit al Patrimoniului Mondial UNESCO.", "Prezintă formațiuni spectaculoase de stalactite.", "Sistemul se extinde și în Slovacia.", "Găzduiește o sală de concerte subterană."],
      en: ["It is located in the Aggtelek Karst.", "The total length is 25 kilometers.", "It is a UNESCO World Heritage site.", "It features rich stalactite formations.", "The system extends into Slovakia.", "The cave hosts an underground concert hall."],
    },
  },
    {
    id: "bukki-nemzeti-park-poi",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.5, 48.0],
    name: {"de": "Nationalpark Bükk", "hu": "Bükki Nemzeti Park", "ro": "Parcul Național Bükk", "en": "Bükk National Park"},
    image: "/geo-images/hungary/bukki-nemzeti-park.webp",
    description: {"de": "Der Nationalpark Bükk schützt die vielfältige Flora und Fauna des waldreichsten Gebirges Ungarns.", "hu": "A Bükki Nemzeti Park Magyarország legerdősebb hegységének változatos élővilágát óvja.", "ro": "Parcul Național Bükk protejează flora și fauna diversă a celor mai împădurite muntoase din Ungaria.", "en": "The Bükk National Park protects the diverse flora and fauna of Hungary's most forested mountains."},
    facts: {"de": ["Beherbergt zahlreiche Höhlen, in denen Spuren prähistorischer Menschen gefunden wurden.", "Ein Paradies für Wanderer mit einem dichten Netz an markierten Wanderwegen."], "hu": ["Számos barlang található itt, ahol ősemberi leletekre is bukkantak.", "A túrázók paradicsoma, sűrű és jól jelzett turistaút-hálózattal rendelkezik."], "ro": ["Găzduiește numeroase peșteri în care au fost găsite urme ale oamenilor preistorici.", "Un paradis pentru drumeți, cu o rețea densă de trasee marcate."], "en": ["Home to numerous caves where traces of prehistoric humans were found.", "A paradise for hikers with a dense network of marked trails."]},
    descriptionAdvanced: {
      de: "Der Nationalpark Bükk wurde 1977 als erster Nationalpark Ungarns in einem Gebirgszug gegründet. Er umfasst das Karstplateau des Bükk-Gebirges, das durch tiefe Täler, steile Klippen und über tausend Höhlen gekennzeichnet ist. Die vielfältige Flora und Fauna des Parks machen ihn zu einem bedeutenden Schutzgebiet.",
      hu: "A Bükki Nemzeti Parkot 1977-ben alapították Magyarország első hegyvidéki nemzeti parkjaként. Magában foglalja a Bükk-hegység karsztfennsíkját, amelyet mély völgyek, meredek sziklák és több mint ezer barlang jellemez. A park változatos növény- és állatvilága, valamint geológiai képződményei révén jelentős védett területnek számít.",
      ro: "Parcul Național Bükk a fost înființat în 1977, fiind primul parc național din Ungaria într-o zonă montană. Acesta acoperă platoul carstic al Munților Bükk, caracterizat prin văi adânci, stânci abrupte și peste o mie de peșteri. Diversitatea florei și faunei parcului îl fac o zonă protejată de o importanță majoră.",
      en: "The Bükk National Park was established in 1977 as Hungary's first national park in a mountain range. It covers the karst plateau of the Bükk Mountains, characterized by deep valleys, steep cliffs, and over a thousand caves. The park's diverse flora and fauna, along with its geological formations, make it a significant protected area.",
    },
    factsAdvanced: {
      de: ["Gegründet wurde er im Jahr 1977.", "Er liegt im Bükk-Gebirge.", "Er verfügt über ein Karstplateau.", "Es gibt über tausend Höhlen im Park.", "Es ist ein bewaldeter Gebirgszug.", "Es ist ein wichtiges Biodiversitäts-Schutzgebiet."],
      hu: ["Az alapítás éve 1977 volt.", "A Bükk-hegység területén található.", "Jellegzetes karsztfennsíkkal rendelkezik.", "Több mint ezer barlang található a területén.", "Sűrű erdőkkel borított hegyvidék.", "Fontos biodiverzitási védelmi terület."],
      ro: ["A fost înființat în anul 1977.", "Se află în Munții Bükk.", "Deține un platou carstic proeminent.", "Există peste o mie de peșteri în parc.", "Este un masiv muntos împădurit.", "Este o zonă de protecție a biodiversității."],
      en: ["It was established in 1977.", "It is located in the Bükk Mountains.", "It features a karst plateau.", "There are over a thousand caves in the park.", "It is a forested mountain range.", "It is a significant biodiversity protection area."],
    },
  },
    {
    id: "ferto-to-poi",
    type: "lake",
    parent: "gyor-moson-sopron",
    coords: [16.7, 47.7],
    name: {"de": "Neusiedler See", "hu": "Fertő-tó", "ro": "Lacul Fertő", "en": "Lake Neusiedl"},
    image: "/geo-images/hungary/ferto-to.webp",
    description: {"de": "Der Fertő-tó ist ein grenzüberschreitender Steppensee und ein einzigartiges Biosphärenreservat.", "hu": "A Fertő-tó egy határokon átnyúló sztyeppei tó és egyedülálló bioszféra-rezervátum.", "ro": "Lacul Fertő este un lac de stepă transfrontalier și o rezervație unică a biosferei.", "en": "Lake Fertő is a transboundary steppe lake and a unique biosphere reserve."},
    facts: {"de": ["Der See ist fast vollständig von einem dichten Schilfgürtel umgeben.", "Wichtiger Rastplatz für Zehntausende von Zugvögeln auf ihrer Reise."], "hu": ["A tavat szinte teljes egészében sűrű nádas övezet veszi körül.", "Fontos pihenőhely több tízezer költöző madár számára vándorlásuk során."], "ro": ["Lacul este aproape în întregime înconjurat de o zonă densă de stuf.", "Loc important de odihnă pentru zeci de mii de păsări migratoare."], "en": ["The lake is almost completely surrounded by a dense reed belt.", "Important resting place for tens of thousands of migratory birds."]},
    descriptionAdvanced: {
      de: "Der Neusiedler See ist der größte endorheische See in Mitteleuropa und liegt an der Grenze zwischen Österreich und Ungarn. Der ungarische Teil des Sees gehört zum Nationalpark Fertő-Hanság und ist seit 2001 Teil des UNESCO-Welterbes. Das Gewässer ist extrem flach und von einem ausgedehnten Schilfgürtel umgeben, der zahlreichen Vogelarten als Lebensraum dient.",
      hu: "A Fertő-tó Közép-Európa legnagyobb lefolyástalan tava, amely Ausztria és Magyarország határán fekszik. A tó magyarországi szakasza a Fertő–Hanság Nemzeti Park része, 2001 óta pedig az UNESCO Világörökségének helyszíne. Sekély vize és kiterjedt nádasa egyedülálló fészkelőhelyet biztosít a környék gazdag madárvilágának.",
      ro: "Lacul Fertő este cel mai mare lac endoreic din Europa Centrală, situat la granița dintre Austria și Ungaria. Porțiunea maghiară face parte din Parcul Național Fertő-Hanság și este inclusă în Patrimoniul Mondial UNESCO din anul 2001. Apele sale puțin adânci și stuful dens oferă un habitat esențial pentru numeroase specii de păsări.",
      en: "Lake Fertő is the largest endorheic lake in Central Europe, spanning the border between Austria and Hungary. The Hungarian section is part of the Fertő-Hanság National Park and was designated a UNESCO World Heritage site in 2001. The lake is exceptionally shallow and surrounded by a vast reed belt that serves as a vital habitat for diverse bird species.",
    },
    factsAdvanced: {
      de: ["Gesamtfläche von ca. 315 km²", "Durchschnittliche Tiefe nur 1,1 Meter", "UNESCO-Welterbe seit 2001", "Etwa 75 % der Seefläche liegen in Österreich", "Vorkommen von über 300 Vogelarten", "Alter des Sees ca. 20 Millionen Jahre"],
      hu: ["Teljes területe körülbelül 315 km²", "Átlagos mélysége csupán 1,1 méter", "UNESCO Világörökségi helyszín 2001 óta", "A tó felületének 75%-a Ausztriához tartozik", "Több mint 300 madárfaj fészkelőhelye", "A tó kora nagyjából 20 millió év"],
      ro: ["Suprafață totală de aproximativ 315 km²", "Adâncime medie de numai 1,1 metri", "Sit inclus în Patrimoniul UNESCO din 2001", "Circa 75% din suprafață aparține Austriei", "Găzduiește peste 300 de specii de păsări", "Vechimea lacului este de circa 20 milioane de ani"],
      en: ["Total surface area of approximately 315 km²", "Average depth of only 1.1 meters", "UNESCO World Heritage site since 2001", "About 75% of the lake surface lies in Austria", "Habitat for more than 300 bird species", "Age of the lake is about 20 million years"],
    },
  },
    {
    id: "velencei-to-poi",
    type: "lake",
    parent: "fejer",
    coords: [18.6, 47.2],
    name: {"de": "Velencer See", "hu": "Velencei-tó", "ro": "Lacul Velence", "en": "Lake Velence"},
    image: "/geo-images/hungary/velencei-to.webp",
    description: {"de": "Der Velencer See ist einer der wärmsten Seen Europas und ein beliebtes Ziel für Wassersportler.", "hu": "A Velencei-tó Európa egyik legmelegebb tava és a vízisportok kedvelőinek népszerű célpontja.", "ro": "Lacul Velence este unul dintre cele mai calde lacuri din Europa și o destinație populară.", "en": "Lake Velence is one of the warmest lakes in Europe and a popular destination for water sports."},
    facts: {"de": ["Bietet hervorragende Bedingungen zum Segeln, Rudern und Windsurfen.", "Bekannt für seine schwimmenden Inseln und die reiche Fischfauna."], "hu": ["Kiváló feltételeket biztosít a vitorlázáshoz, evezéshez és szörfözéshez.", "Híres az úszólápokról és a gazdag halállományáról."], "ro": ["Oferă condiții excelente pentru navigație, canotaj și windsurfing.", "Cunoscut pentru insulele sale plutitoare și fauna piscicolă bogată."], "en": ["Provides excellent conditions for sailing, rowing, and windsurfing.", "Known for its floating islands and rich fish fauna."]},
    descriptionAdvanced: {
      de: "Der Velence-See ist der drittgrößte natürliche See Ungarns und liegt im Komitat Fejér. Aufgrund seiner geringen Tiefe und der hohen Sonnenscheindauer gehört er im Sommer zu den wärmsten Seen Europas. Das Gebiet ist ein bedeutendes Naturschutzgebiet, wobei ein Drittel der Wasserfläche von Schilf bedeckt ist, was ideal für Wasservögel ist.",
      hu: "A Velencei-tó Magyarország harmadik legnagyobb természetes tava, Fejér vármegye területén található. Sekély vize és a magas napsütéses órák száma miatt Európa egyik leggyorsabban felmelegedő tava nyaranta. A terület jelentős természetvédelmi övezet, a vízfelület egyharmadát nádas borítja, ami ideális fészkelőhelyet biztosít.",
      ro: "Lacul Velence este al treilea cel mai mare lac natural din Ungaria, situat în județul Fejér. Datorită adâncimii reduse și numărului mare de ore însorite, este unul dintre cele mai calde lacuri din Europa în timpul verii. O treime din suprafața sa este acoperită de stuf, fiind o rezervație naturală importantă pentru păsările acvatice.",
      en: "Lake Velence is the third largest natural lake in Hungary, located in Fejér County. Due to its shallow waters and high amount of sunshine, it is one of the warmest lakes in Europe during the summer. The area is a significant nature reserve, with one-third of the water surface covered by reeds, providing an ideal nesting ground.",
    },
    factsAdvanced: {
      de: ["Fläche von ca. 26 km²", "Durchschnittliche Tiefe beträgt 1,5 Meter", "Wassertemperaturen erreichen bis zu 28°C", "Ein Drittel der Fläche ist Naturschutzgebiet", "Entstehung vor etwa 12.000 Jahren", "Etwa 2500 Sonnenstunden pro Jahr"],
      hu: ["Területe körülbelül 26 km²", "Átlagos mélysége 1,5 méter", "A víz hőmérséklete elérheti a 28°C-ot", "Felszínének egyharmada természetvédelmi terület", "Kialakulása kb. 12 000 évvel ezelőtt történt", "Évente kb. 2500 napsütéses óra"],
      ro: ["Suprafață de aproximativ 26 km²", "Adâncime medie de 1,5 metri", "Temperatura apei poate atinge 28°C", "O treime din suprafață este rezervație naturală", "Format acum aproximativ 12.000 de ani", "Circa 2500 de ore de soare pe an"],
      en: ["Surface area of approximately 26 km²", "Average depth is 1.5 meters", "Water temperatures can reach 28°C", "One-third of the area is a nature reserve", "Formed about 12,000 years ago", "Approximately 2500 sunny hours per year"],
    },
  },
    {
    id: "szalajka-volgy-poi",
    type: "landmark",
    parent: "heves",
    coords: [20.4, 48.1],
    name: {"de": "Szalajka-Tal", "hu": "Szalajka-völgy", "ro": "Valea Szalajka", "en": "Szalajka Valley"},
    image: "/geo-images/hungary/szalajka-volgy.webp",
    description: {"de": "Das Szalajka-Tal ist ein idyllisches Ausflugsziel im Bükk-Gebirge, berühmt für seine Wasserfälle.", "hu": "A Szalajka-völgy idilli kirándulóhely a Bükkben, amely vízeséseiről és forrásairól híres.", "ro": "Valea Szalajka este o destinație idilică în munții Bükk, faimoasă pentru cascadele sale.", "en": "Szalajka Valley is an idyllic excursion spot in the Bükk Mountains, famous for its waterfalls."},
    facts: {"de": ["Der stufenförmige Schleierwasserfall ist eines der bekanntesten Naturwunder Ungarns.", "Eine Schmalspurbahn bringt Besucher tief in das malerische Tal hinein."], "hu": ["A lépcsőzetes Fátyol-vízesés Magyarország egyik legismertebb természeti csodája.", "Erdei kisvasút szállítja a látogatókat mélyen a festői völgy belsejébe."], "ro": ["Cascada Fátyol în trepte este una dintre cele mai cunoscute minuni naturale.", "O cale ferată îngustă transportă vizitatorii adânc în valea pitorească."], "en": ["The terraced Veil Waterfall is one of Hungary's best-known natural wonders.", "A narrow-gauge forest railway takes visitors deep into the scenic valley."]},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Szalajka-völgy a Bükk-hegység egyik legszebb és leglátogatottabb természeti látványossága Szilvásvárad mellett. A völgy híres kristálytiszta patakjairól, pisztrángos tavairól és a különleges Fátyol-vízesésről, ahol a víz 17 méter magas mésztufa-lépcsőkön zúdul le. A látogatók gyalogosan vagy a népszerű erdei kisvasúttal fedezhetik fel a völgy kincseit, köztük a Szabadtéri Erdei Múzeumot és az Istállós-kői-barlangot, ahol ősemberi leleteket találtak. A völgy gasztronómiai különlegessége a frissen sült vagy füstölt pisztráng, amelyet helyben tenyésztenek. A Szalajka-völgy a természet, a történelem és a rekreáció tökéletes találkozóhelye, amely minden korosztály számára kínál felfedeznivalót.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Fátyol-vízesés mésztufa gátjait a patak vizéből kiváló mész alakította ki évezredek alatt.",
        "A völgy neve a 'szalajka' (szalmiákszesz) égetéséből ered, ami egykor fontos ipari tevékenység volt itt.",
        "Szilvásvárad a világhírű lipicai ménes otthona, lovasstadionja nemzetközi versenyek színhelye.",
        "Az Istállós-kői-barlang a Bükk egyik legmagasabb pontján fekvő ősemberbarlang.",
        "A völgyben közlekedő kisvasút Magyarország egyik legforgalmasabb erdei vasútvonala."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "borzsony-hegyseg",
    type: "mountain",
    parent: "pest",
    coords: [18.9, 47.9],
    name: {"de": "Börzsöny", "hu": "Börzsöny", "ro": "Börzsöny", "en": "Börzsöny"},
    image: "/geo-images/hungary/borzsony.webp",
    description: {"de": "Das Börzsöny-Gebirge ist ein erloschenes Vulkangebiet an der Donau mit fast unberührter Natur.", "hu": "A Börzsöny egy kialudt vulkáni hegység a Duna mentén, szinte érintetlen természeti környezettel.", "ro": "Munții Börzsöny reprezintă o zonă vulcanică stinsă pe Dunăre, cu o natură aproape neatinsă.", "en": "The Börzsöny Mountains are an extinct volcanic area on the Danube with almost untouched nature."},
    facts: {"de": ["Vom Gipfel des Csóványos genießt man eine herrliche Aussicht bis zur Hohen Tatra.", "Das Gebirge ist fast vollständig von dichten Laubwäldern bedeckt."], "hu": ["A Csóványos csúcsáról tiszta időben akár a Magas-Tátra is látható.", "A hegységet szinte teljes egészében sűrű lombhullató erdők borítják."], "ro": ["De pe vârful Csóványos se poate admira o vedere superbă până la Tatra Înaltă.", "Munții sunt aproape integral acoperiți de păduri dese de foioase."], "en": ["From the summit of Csóványos, one can enjoy a magnificent view as far as the High Tatras.", "The mountains are almost entirely covered by dense deciduous forests."]},
    descriptionAdvanced: {
      de: "Das Börzsöny-Gebirge ist ein vulkanisches Gebirge im Norden Ungarns und wird im Süden durch das Donauknie begrenzt. Es verfügt über eine fast unberührte Natur mit dichten Wäldern und zahlreichen Wasserquellen. Der höchste Gipfel ist der Csóványos, von dem aus man bei klarem Wetter sogar die Gipfel der Hohen Tatra sehen kann.",
      hu: "A Börzsöny vulkanikus eredetű hegység Magyarország északi részén, amelyet délről a Dunakanyar határol. Területe sűrű erdőkkel és számos forrással tarkított, szinte érintetlen természetvédelmi terület. Legmagasabb csúcsa a Csóványos, ahonnan tiszta időben akár a Magas-Tátra csúcsai is láthatóak.",
      ro: "Munții Börzsöny sunt de origine vulcanică, situați în nordul Ungariei și mărginți la sud de Cotul Dunării. Regiunea oferă o natură aproape neatinsă, cu păduri dese și numeroase izvoare de apă. Cel mai înalt vârf este Csóványos, de unde, pe timp senin, se pot vedea culmile Munților Tatra Înaltă.",
      en: "The Börzsöny Mountains are of volcanic origin, located in northern Hungary and bordered by the Danube Bend to the south. The area features nearly untouched nature with dense forests and numerous springs. Its highest peak is Csóványos, from which the peaks of the High Tatras can be seen on clear days.",
    },
    factsAdvanced: {
      de: ["Höchster Punkt Csóványos ist 938 Meter hoch", "Umfasst eine Fläche von ca. 600 km²", "Vulkanische Aktivität vor 15-18 Millionen Jahren", "Beherbergt über 400 Quellen", "Duna-Ipoly-Nationalpark verwaltet das Gebiet", "Waldbahn von Királyrét seit 1893"],
      hu: ["Legmagasabb pontja a Csóványos (938 m)", "Területe körülbelül 600 km²", "Vulkanikus tevékenység 15-18 millió éve", "Több mint 400 forrás található itt", "A Duna–Ipoly Nemzeti Parkhoz tartozik", "A királyréti erdei vasút 1893 óta üzemel"],
      ro: ["Vârful maxim, Csóványos, are 938 metri", "Acoperă o suprafață de circa 600 km²", "Activitate vulcanică acum 15-18 milioane de ani", "Găzduiește peste 400 de izvoare", "Administrat de Parcul Național Dunăre-Ipoly", "Calea ferată Királyrét funcționează din 1893"],
      en: ["Highest point, Csóványos, is 938 meters", "Covers an area of about 600 km²", "Volcanic activity 15-18 million years ago", "Home to more than 400 springs", "Part of the Danube-Ipoly National Park", "Királyrét forest railway built in 1893"],
    },
  },
    {
    id: "villanyi-borvidek-poi",
    type: "landmark",
    parent: "baranya",
    coords: [18.45, 45.87],
    name: {"de": "Weinregion Villány", "hu": "Villányi borvidék", "ro": "Regiunea viticolă Villány", "en": "Villány Wine Region"},
    image: "/geo-images/hungary/villanyi-borvidek.webp",
    description: {"de": "Villány ist Ungarns prestigeträchtigste Rotweinregion und bekannt für erstklassige Bordeaux-Blends.", "hu": "A Villányi borvidék Magyarország legnevesebb vörösbortermő vidéke, híres a bordói típusú borairól.", "ro": "Villány este cea mai prestigioasă regiune de vin roșu din Ungaria, faimoasă pentru cupajele Bordeaux.", "en": "Villány is Hungary's most prestigious red wine region, famous for its premium Bordeaux blends."},
    facts: {"de": ["Das submediterrane Klima ermöglicht den Anbau anspruchsvoller Rebsorten.", "Zahlreiche Weinkeller und Vinotheken laden zu Verkostungen in der Region ein."], "hu": ["A szubmediterrán éghajlat lehetővé teszi az igényes szőlőfajták termesztését.", "Számos borospince és vinotéka várja a kóstolásra vágyó vendégeket a vidéken."], "ro": ["Clima submediteraneană permite cultivarea unor soiuri de struguri pretențioase.", "Numeroase crame și vinoteci invită la degustări în întreaga regiune."], "en": ["The sub-Mediterranean climate allows for the cultivation of demanding grape varieties.", "Numerous wine cellars and wine shops invite visitors for tastings in the region."]},
    descriptionAdvanced: {
      de: "Das Weinbaugebiet Villány ist die südlichste Weinregion Ungarns und bekannt für ihr submediterranes Klima. Es ist besonders für seine körperreichen Rotweine wie Cabernet Sauvignon und Merlot berühmt. Die Kellergassen von Villánykövesd und Palkonya sind geschützte Denkmäler und zeugen von der langen Tradition des Weinbaus seit der Römerzeit.",
      hu: "A Villányi borvidék Magyarország legdélebbi és egyik legfejlettebb borvidéke, amely szubmediterrán éghajlatáról ismert. Elsősorban testes vörösborairól, mint a Cabernet Sauvignon és a Merlot, híres. Villánykövesd és Palkonya védett pincesorai a római korig visszanyúló szőlőtermesztési hagyományokról tanúskodnak.",
      ro: "Regiunea viticolă Villány este cea mai sudică zonă viticolă din Ungaria, fiind cunoscută pentru climatul său submediteranean. Este celebră în special pentru vinurile roșii corpolente, precum Cabernet Sauvignon și Merlot. Șirurile de pivnițe din Villánykövesd și Palkonya sunt monumente protejate, atestând tradiția milenară a vinului.",
      en: "The Villány wine region is Hungary's southernmost wine district, renowned for its sub-Mediterranean climate. It is particularly famous for full-bodied red wines such as Cabernet Sauvignon and Merlot. The cellar rows of Villánykövesd and Palkonya are protected monuments, reflecting a winemaking tradition dating back to Roman times.",
    },
    factsAdvanced: {
      de: ["Gesamtfläche von ca. 2100 Hektar", "Erste Weinbaubelege aus der Römerzeit", "Höchster Berg ist der Szársomlyó (442 m)", "Jährlich ca. 2100 Sonnenstunden", "Hauptrebsorten sind Kékfrankos und Portugieser", "Erste geschützte Herkunftsbezeichnung in Ungarn"],
      hu: ["Teljes területe kb. 2100 hektár", "Római kori szőlőtermesztési emlékek", "Legmagasabb hegye a Szársomlyó (442 m)", "Évente kb. 2100 napsütéses óra", "Főbb fajták a Kékfrankos és a Portugieser", "Az első védett eredetű borvidék hazánkban"],
      ro: ["Suprafață totală de circa 2100 hectare", "Dovezi de viticultură din epoca romană", "Cel mai înalt punct este Szársomlyó (442 m)", "Circa 2100 de ore de soare pe an", "Soiuri principale: Kékfrankos și Portugieser", "Prima regiune cu denumire de origine protejată"],
      en: ["Total area of about 2100 hectares", "Winemaking evidence dates back to Roman times", "Highest peak is Szársomlyó (442 m)", "Approximately 2100 sunny hours per year", "Main grape varieties: Kékfrankos and Portugieser", "First protected designation of origin in Hungary"],
    },
  },
    {
    id: "gemenci-erdo-poi",
    type: "forest",
    parent: "tolna",
    coords: [18.8, 46.2],
    name: {"de": "Gemencer Wald", "hu": "Gemenci erdő", "ro": "Pădurea Gemenc", "en": "Gemenc Forest"},
    image: "/geo-images/hungary/gemenci-erdo.webp",
    description: {"de": "Der Gemencer Wald ist das größte zusammenhängende Auwaldgebiet Mitteleuropas entlang der Donau.", "hu": "A Gemenci erdő Közép-Európa legnagyobb összefüggő ártéri erdőterülete a Duna mentén.", "ro": "Pădurea Gemenc este cea mai mare zonă de luncă continuă din Europa Centrală, de-a lungul Dunării.", "en": "The Gemenc Forest is the largest continuous floodplain forest in Central Europe along the Danube."},
    facts: {"de": ["Berühmt für seinen Bestand an prachtvollen Gímszarvas-Hirschen und Wildschweinen.", "Die Region ist ein wichtiges Brutgebiet für geschützte Schwarzstörche."], "hu": ["Híres kapitális gímszarvas-állományáról és a területén élő vaddisznókról.", "A vidék a védett fekete gólyák egyik legfontosabb fészkelőhelye az országban."], "ro": ["Faimoasă pentru efectivul său de cerbi comuni și porci mistreți.", "Regiunea este un loc important de cuibărit pentru barza neagră protejată."], "en": ["Famous for its population of magnificent red deer and wild boars.", "The region is an important nesting ground for protected black storks."]},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Gemenci erdő Európa legnagyobb összefüggő ártéri erdeje, a Duna-Dráva Nemzeti Park ékköve Szekszárd és Baja között. Ez a vadregényes táj a folyó állandó áradásai és apadásai révén jött létre, különleges vizes élőhelyet biztosítva számtalan állat- és növényfajnak. Gemenc világszerte híres gímszarvas-állományáról, amelynek trófeái a világ legjobbjai közé tartoznak, valamint itt található a világ legsűrűbb fekete gólya populációja is. Az erdőt legegyszerűbben a Gemenci Állami Erdei Vasúttal vagy vízi úton, kenuval lehet felfedezni. A sűrű nádasok, a holtágak nyugalma és az óriási fűzfák árnyéka a természet érintetlenségének érzését nyújtja minden látogatónak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Gemenci erdő területe közel 20 ezer hektár, és az ország legfontosabb vadrezervátuma.",
        "Itt él a legtöbb fekete gólya Magyarországon, évente mintegy 40-50 pár fészkel az ártéren.",
        "A Gemenci kisvasút 30 kilométer hosszan kanyarog az ártéri erdő sűrűjében.",
        "Az erdőben található a 'Gemenc királya' nevű fa, amely egy hatalmas, több száz éves fekete nyár.",
        "Gemenc volt a helyszíne az 1971-es Vadászati Világkiállítás számos bemutatójának."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "egri-var-poi",
    type: "historical",
    parent: "eger",
    coords: [20.37, 47.90],
    name: {"de": "Burg von Eger", "hu": "Egri vár", "ro": "Cetatea din Eger", "en": "Castle of Eger"},
    image: "/geo-images/hungary/egri-var.webp",
    description: {"de": "Die Burg von Eger ist ein nationales Symbol für den ungarischen Widerstand gegen die Osmanen.", "hu": "Az egri vár az oszmán hódítók elleni magyar ellenállás és hősiesség nemzeti szimbóluma.", "ro": "Cetatea din Eger este un simbol național al rezistenței maghiare împotriva otomanilor.", "en": "The Castle of Eger is a national symbol of Hungarian resistance against the Ottomans."},
    facts: {"de": ["Im Jahr 1552 verteidigte eine kleine Truppe die Burg gegen ein riesiges Heer.", "Die Kasematten und das unterirdische System sind für Besucher zugänglich."], "hu": ["1552-ben egy maroknyi sereg védte meg a várat a hatalmas túlerővel szemben.", "A kazamaták és a földalatti folyosórendszer látogatható a turisták számára."], "ro": ["În 1552, o trupă mică a apărat cetatea împotriva unei armate uriașe.", "Cazamatele și sistemul subteran sunt deschise pentru vizitatori."], "en": ["In 1552, a small force defended the castle against a massive army.", "The casemates and the underground system are open to visitors."]},
    descriptionAdvanced: {
      de: "Die Burg von Eger ist ein nationales Symbol Ungarns und Schauplatz der berühmten Belagerung von 1552, bei der ein kleines ungarisches Heer das osmanische Riesenheer abwehrte. Innerhalb der Mauern befinden sich der gotische Bischofspalast und das Grab des Schriftstellers Géza Gárdonyi. Die unterirdischen Kasematten zeugen von der strategischen Bedeutung der Festung.",
      hu: "Az egri vár Magyarország egyik legfontosabb történelmi emléke, az 1552-es hősies várvédelem helyszíne, ahol Dobó István vezetésével megállították a török sereget. A falakon belül található a gótikus Püspöki palota és Gárdonyi Géza sírja. A látogatók bejárhatják a hatalmas földalatti kazamata-rendszert is.",
      ro: "Cetatea Eger este un simbol național al Ungariei, fiind locul celebrului asediu din 1552, când o mică armată maghiară a respins uriașa armată otomană. În interiorul zidurilor se află palatul episcopal gotic și mormântul scriitorului Géza Gárdonyi. Cazematele subterane atestă importanța strategică a fortăreței.",
      en: "The Castle of Eger is a national symbol of Hungary, famous for the siege of 1552 when a small Hungarian force successfully repelled a massive Ottoman army. Within its walls lie the Gothic Episcopal Palace and the tomb of author Géza Gárdonyi. Visitors can explore the vast underground casemate system used during the fortress's defense.",
    },
    factsAdvanced: {
      de: ["Belagerung von 1552 durch die Osmanen", "Dobó István war der Burgkommandant", "Bau der ersten Steinburg im 13. Jahrhundert", "Unterirdische Kasematten sind kilometerlang", "Bischofspalast stammt aus dem 15. Jahrhundert", "Nationales Gedenkstätte seit 2011"],
      hu: ["Az 1552-es oszmán ostrom helyszíne", "Dobó István volt a várkapitány", "Az első kővár a 13. században épült", "Kilométer hosszú földalatti kazamaták", "A Püspöki palota a 15. századból való", "Nemzeti emlékhely 2011 óta"],
      ro: ["Locul asediului otoman din 1552", "István Dobó a fost căpitanul cetății", "Prima cetate de piatră construită în sec. XIII", "Cazematele subterane au kilometri lungime", "Palatul episcopal datează din sec. XV", "Loc memorial național din 2011"],
      en: ["Site of the famous 1552 Ottoman siege", "István Dobó served as the castle captain", "First stone castle built in the 13th century", "Underground casemates span several kilometers", "Episcopal Palace dates back to the 15th century", "National Heritage Site since 2011"],
    },
  },
    {
    id: "visegradi-fellegvar-poi",
    type: "historical",
    parent: "visegrad",
    coords: [18.98, 47.79],
    name: {"de": "Zitadelle von Visegrád", "hu": "Visegrádi Fellegvár", "ro": "Cetatea din Visegrád", "en": "Visegrád Citadel"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Die Fellegvár in Visegrád thront majestätisch über dem Donauknie und bietet atemberaubende Blicke.", "hu": "A visegrádi Fellegvár fenségesen magasodik a Dunakanyar fölé, lenyűgöző panorámát nyújtva.", "ro": "Cetatea din Visegrád domină maiestuos Cotul Dunării, oferind vederi panoramice uluitoare.", "en": "The Visegrád Citadel towers majestically over the Danube Bend, offering breathtaking views."},
    facts: {"de": ["Diente im Mittelalter als Aufbewahrungsort der heiligen ungarischen Krönungsinsignien.", "Die Burg ist ein wichtiges Zeugnis der glanzvollen Čra der Anjou-Könige."], "hu": ["A középkorban itt őrizték a magyar koronázási jelvényeket és a Szent Koronát.", "A vár az Anjou-királyok fénykorának egyik legfontosabb történelmi emléke."], "ro": ["A servit în Evul Mediu ca loc de păstrare a însemnelor coroanei maghiare.", "Cetatea este o dovadă importantă a epocii strălucite a regilor Anjou."], "en": ["Served as the storage place for the holy Hungarian coronation regalia in the Middle Ages.", "The castle is an important testament to the brilliant era of the Anjou kings."]},
    descriptionAdvanced: {
      de: "Die Visegráder Zitadelle thront auf einem steilen Felsen über dem Donauknie und bietet einen der spektakulärsten Ausblicke Ungarns. Sie wurde nach dem Mongolensturm im 13. Jahrhundert erbaut und diente lange als Aufbewahrungsort für die ungarischen Krönungsinsignien. Die Festung war Schauplatz des berühmten Königstreffens von 1335.",
      hu: "A Visegrádi fellegvár a Dunakanyar feletti meredek sziklán trónol, Magyarország egyik legszebb kilátását nyújtva. A 13. században, a tatárjárás után épült, és hosszú ideig itt őrizték a magyar Szent Koronát. A vár az 1335-ös híres visegrádi királytalálkozó helyszíneként is ismert a történelemben.",
      ro: "Cetatea din Visegrád tronează pe o stâncă abruptă deasupra Cotului Dunării, oferind una dintre cele mai spectaculoase panorame din Ungaria. Construită în sec. XIII după invazia mongolă, a servit mult timp ca loc de păstrare a Coroanei Sfânte. Fortăreața a fost locul celebrei întâlniri a regilor din 1335.",
      en: "The Visegrád Citadel sits atop a steep cliff overlooking the Danube Bend, offering one of Hungary's most spectacular views. Built in the 13th century after the Mongol invasion, it served for centuries as a secure storage for the Holy Crown of Hungary. The fortress was the site of the historic Royal Summit of 1335.",
    },
    factsAdvanced: {
      de: ["Bau im 13. Jahrhundert durch Béla IV.", "Königstreffen von 1335 fand hier statt", "Sitz der ungarischen Könige bis 1405", "Aufbewahrungsort der Krone bis 1526", "Zerstörung durch die Osmanen im 16. Jh.", "Höhe von ca. 333 Metern über dem Meer"],
      hu: ["IV. Béla király építtette a 13. században", "Az 1335-ös királytalálkozó helyszíne", "1405-ig a magyar királyok székhelye", "1526-ig itt őrizték a Szent Koronát", "A 16. században a törökök lerombolták", "Tengerszint feletti magassága kb. 333 méter"],
      ro: ["Construită în sec. XIII de regele Béla IV", "Locul întâlnirii regilor din 1335", "Reședință regală până în anul 1405", "Coroana Sfântă păstrată aici până în 1526", "Distrusă de otomani în secolul al XVI-lea", "Altitudine de aproximativ 333 metri"],
      en: ["Built in the 13th century by King Béla IV", "Site of the 1335 Royal Summit", "Royal residence until 1405", "Home of the Holy Crown until 1526", "Partially destroyed by Ottomans in the 16th century", "Elevation of approximately 333 meters"],
    },
  },
    {
    id: "szigetvari-var-poi",
    type: "historical",
    parent: "szigetvar",
    coords: [17.80, 46.05],
    name: {"de": "Burg von Szigetvár", "hu": "Szigetvári vár", "ro": "Cetatea din Szigetvár", "en": "Szigetvár Castle"},
    image: "/geo-images/hungary/szigetvari-var.webp",
    description: {"de": "Die Burg von Szigetvár ist berühmt für die heldenhafte Belagerung und den Tod Sultan Süleymans.", "hu": "A szigetvári vár a hősies önfeláldozásról és I. Szulejmán szultán haláláról híres.", "ro": "Cetatea din Szigetvár este faimoasă pentru asediul eroic și moartea sultanului Soliman.", "en": "Szigetvár Castle is famous for its heroic siege and the death of Sultan Suleiman."},
    facts: {"de": ["Miklós Zrínyi opferte sein Leben bei der Verteidigung der Festung im Jahr 1566.", "Der Park der ungarisch-türkischen Freundschaft erinnert an die historischen Ereignisse."], "hu": ["Zrínyi Miklós életét áldozta az erődítmény védelmében az 1566-os ostrom során.", "A Magyar-Török Barátság Park állít emléket a történelmi eseményeknek."], "ro": ["Miklós Zrínyi și-a sacrificat viața apărând cetatea în anul 1566.", "Parcul Prieteniei Maghiaro-Turce comemorează evenimentele istorice."], "en": ["Miklós Zrínyi sacrificed his life defending the fortress during the 1566 siege.", "The Hungarian-Turkish Friendship Park commemorates the historical events."]},
    descriptionAdvanced: {
      de: "Die Burg von Szigetvár ist unzertrennlich mit dem Namen Miklós Zrínyi verbunden, der 1566 mit seinen Soldaten die Festung bis zum letzten Atemzug gegen das Heer von Süleyman dem Prächtigen verteidigte. Der Sultan verstarb während der Belagerung in seinem Zelt. Heute beherbergt die Anlage ein Museum und eine Moschee aus der Zeit der Besatzung.",
      hu: "A szigetvári vár neve elválaszthatatlan Zrínyi Miklóstól, aki 1566-ban katonáival az utolsó leheletéig védte az erődöt I. Szulejmán szultán hatalmas serege ellen. A szultán az ostrom idején, sátrában hunyt el. Ma a vár területén múzeum és egy oszmán kori dzsámi is várja a látogatókat.",
      ro: "Cetatea Szigetvár este legată indisolubil de numele lui Miklós Zrínyi, care în 1566 a apărat fortăreața până la moarte împotriva armatei lui Suleiman Magnificul. Sultanul a murit în cortul său în timpul asediului. Astăzi, incinta găzduiește un muzeu și o moschee datând din perioada ocupației.",
      en: "The Castle of Szigetvár is inextricably linked to Miklós Zrínyi, who in 1566 defended the fortress with his soldiers to the last breath against the army of Suleiman the Magnificent. The Sultan died in his tent during the siege. Today, the castle grounds house a museum and an Ottoman-era mosque.",
    },
    factsAdvanced: {
      de: ["Belagerung von 1566 durch Süleyman I.", "Miklós Zrínyi fiel beim Ausbruch aus der Burg", "Sultan Süleyman starb während der Belagerung", "Moschee von Ali Pascha wurde um 1589 erbaut", "Szigetvár bedeutet 'Inselburg'", "Nationales Gedenkstätte seit 2011"],
      hu: ["Az 1566-os ostrom I. Szulejmán vezetésével", "Zrínyi Miklós a kitöréskor esett el", "Szulejmán szultán az ostrom alatt halt meg", "Ali pasa dzsámija 1589 körül épült", "A vár neve szigetre épült várat jelent", "Nemzeti emlékhely 2011 óta"],
      ro: ["Asediul din 1566 condus de Suleiman I", "Miklós Zrínyi a murit în timpul ieșirii finale", "Sultanul Suleiman a murit în timpul asediului", "Geamia lui Ali Pașa construită în jurul anului 1589", "Numele înseamnă 'Cetatea din insulă'", "Loc memorial național din 2011"],
      en: ["Site of the 1566 siege by Suleiman I", "Miklós Zrínyi died during the final charge", "Sultan Suleiman died during the siege", "Ali Pasha's mosque built around 1589", "The name translates to 'Island Castle'", "National Heritage Site since 2011"],
    },
  },
    {
    id: "sarvari-var-poi",
    type: "historical",
    parent: "sarvar",
    coords: [16.93, 47.25],
    name: {"de": "Burg Nádasdy", "hu": "Sárvári vár", "ro": "Cetatea Nádasdy", "en": "Nádasdy Castle"},
    image: "/geo-images/hungary/sarvari-var.webp",
    description: {"de": "Die Burg Nádasdy ist eine der am besten erhaltenen Renaissance-Anlagen im Westen Ungarns.", "hu": "A Nádasdy-vár Nyugat-Magyarországon egyik legjobb állapotban fennmaradt reneszánsz vára.", "ro": "Cetatea Nádasdy este unul dintre cele mai bine conservate ansambluri renascentiste din vestul Ungariei.", "en": "The Nádasdy Castle is one of the best-preserved Renaissance complexes in western Hungary."},
    facts: {"de": ["Berühmt für die prunkvollen Deckenfresken im barocken Festsaal der Burganlage.", "Wichtiger Ort, an dem das erste gedruckte ungarische Buch veröffentlicht wurde."], "hu": ["Híres a barokk díszterem mennyezetét díszítő pompás freskókról.", "Itt jelent meg az első magyar nyelven nyomtatott könyv a történelemben."], "ro": ["Faimoasă pentru frescele magnifice de pe tavanul sălii de festivități baroce.", "Locul important unde a fost publicată prima carte tipărită în limba maghiară."], "en": ["Famous for the magnificent ceiling frescoes in the Baroque grand hall.", "Important site where the first printed Hungarian book was published."]},
    descriptionAdvanced: {
      de: "Das Nádasdy-Schloss in Sárvár ist eine der bedeutendsten Renaissanceschlossanlagen Ungarns mit einem charakteristischen fünfeckigen Grundriss. Besonders beeindruckend ist der Prunksaal mit Deckengemälden, die Schlachtszenen aus dem Langen Türkenkrieg zeigen. Im 16. Jahrhundert war es ein Zentrum der ungarischen Reformation und Buchdruckerkunst.",
      hu: "A sárvári Nádasdy-vár Magyarország egyik legjelentősebb reneszánsz várkastélya, jellegzetes ötszögletű alaprajzzal. Leglátványosabb része a díszterem, melynek mennyezetfreskói a tizenöt éves háború csatajeleneteit ábrázolják. A 16. században a magyar reformáció és a könyvnyomtatás egyik fontos központja volt.",
      ro: "Castelul Nádasdy din Sárvár este unul dintre cele mai importante complexe renascentiste din Ungaria, cu un plan pentagonal caracteristic. Sala de recepție este impresionantă, având fresce pe tavan care înfățișează scene de luptă din Războiul cel Lung. În sec. XVI, a fost un centru al Reformei și al tipăritului.",
      en: "The Nádasdy Castle in Sárvár is one of Hungary's most significant Renaissance castle complexes, featuring a distinctive pentagonal layout. Its most impressive feature is the Great Hall, with ceiling frescoes depicting battle scenes from the Long Turkish War. In the 16th century, it was a major center for the Reformation and printing.",
    },
    factsAdvanced: {
      de: ["Erste Erwähnung im Jahr 1327", "Bau der Renaissance-Anlage ab 1549", "Prunksaal-Fresken von Hans Rudolf Miller (1769)", "Erstes ungarisches Buch hier 1541 gedruckt", "Besitz der Familie Nádasdy bis 1671", "Umgeben von einem 10 Hektar großen Park"],
      hu: ["Első említése 1327-ből származik", "A reneszánsz vár építése 1549-ben kezdődött", "A díszterem freskói 1769-ben készültek", "Itt nyomtatták az első magyar nyelvű könyvet (1541)", "A Nádasdy család birtoka volt 1671-ig", "A várat 10 hektáros park veszi körül"],
      ro: ["Prima atestare documentară în 1327", "Construcția renascentistă începută în 1549", "Frescele din Sala Mare pictate în 1769", "Prima carte în maghiară tipărită aici (1541)", "Proprietatea familiei Nádasdy până în 1671", "Înconjurat de un parc de 10 hectare"],
      en: ["First mentioned in historical records in 1327", "Renaissance reconstruction began in 1549", "Great Hall frescoes by Hans Rudolf Miller (1769)", "First Hungarian book printed here in 1541", "Owned by the Nádasdy family until 1671", "Surrounded by a 10-hectare parkland"],
    },
  },
    {
    id: "diosgyori-var-poi",
    type: "historical",
    parent: "miskolc",
    coords: [20.68, 48.09],
    name: {"de": "Burg Diósgyőr", "hu": "Diósgyőri vár", "ro": "Cetatea Diósgyőr", "en": "Diósgyőr Castle"},
    image: "/geo-images/hungary/diosgyori-var.webp",
    description: {"de": "Die Burg Diósgyőr bei Miskolc war im Mittelalter eine bevorzugte Residenz ungarischer Königinnen.", "hu": "A Miskolc melletti diósgyőri vár a középkorban a magyar királynék kedvelt rezidenciája volt.", "ro": "Cetatea Diósgyőr de lângă Miskolc a fost o reședință preferată a reginelor maghiare în Evul Mediu.", "en": "Diósgyőr Castle near Miskolc was a preferred residence of Hungarian queens in the Middle Ages."},
    facts: {"de": ["Die charakteristische vierürmige gotische Burg wurde umfassend rekonstruiert.", "Regelmäßig finden hier Ritterspiele und mittelalterliche Festivals statt."], "hu": ["A jellegzetes négyszögletes gótikus várat jelentős mértékben rekonstruálták.", "Rendszeresen ad otthont lovagi játékoknak és középkori fesztiváloknak."], "ro": ["Cetatea gotică caracteristică cu patru turnuri a fost reconstruită substanțial.", "Găzduiește regulat jocuri cavalerești și festivaluri medievale."], "en": ["The characteristic four-towered Gothic castle has been extensively reconstructed.", "Knightly tournaments and medieval festivals are regularly held here."]},
    descriptionAdvanced: {
      de: "Die Burg von Diósgyőr, am Fuße des Bükk-Gebirges gelegen, ist als die 'Burg der Königinnen' bekannt, da sie über Jahrhunderte das Hochzeitsgeschenk für ungarische Königinnen war. Die gotische Ritterburg wurde unter Ludwig dem Großen im 14. Jahrhundert zu einer prachtvollen Residenz ausgebaut. In den letzten Jahren wurde sie umfassend rekonstruiert.",
      hu: "A Bükk-hegység lábánál fekvő Diósgyőri vár a 'királynék váraként' ismert, mivel évszázadokon át a magyar királynék jegyajándéka volt. A gótikus lovagvárat Nagy Lajos király építtette ki pompás rezidenciává a 14. században. Az utóbbi években a várat jelentős mértékben újjáépítették, visszaadva régi fényét.",
      ro: "Cetatea Diósgyőr, situată la poalele Munților Bükk, este cunoscută drept 'cetatea reginelor', fiind timp de secole darul de nuntă pentru reginele Ungariei. Castelul cavalerilor gotici a fost transformat într-o reședință somptuoasă de Ludovic cel Mare în sec. XIV. În ultimii ani, cetatea a fost reconstruită substanțial.",
      en: "The Castle of Diósgyőr, located at the foot of the Bükk Mountains, is known as the 'Castle of Queens' because it served as a traditional wedding gift for Hungarian queens for centuries. The Gothic knight's castle was expanded into a magnificent residence by Louis the Great in the 14th century and has recently undergone major reconstruction.",
    },
    factsAdvanced: {
      de: ["Ausbau zur Prachtburg durch Ludwig I. (1360-1370)", "Besitz von insgesamt 6 ungarischen Königinnen", "Vier mächtige Ecktürme charakterisieren den Bau", "Größter Rittersaal Mitteleuropas im Mittelalter", "Zerstörung durch Blitzschlag und Pulverexplosion 1703", "Wiedereröffnung nach Rekonstruktion 2014"],
      hu: ["Nagy Lajos építtette ki 1360 és 1370 között", "Összesen 6 magyar királyné birtokolta", "Négy hatalmas saroktorony jellemzi az épületet", "Közép-Európa legnagyobb lovagterme volt egykor", "1703-ban villámcsapás és robbanás rongálta meg", "A nagyrekonstrukció után 2014-ben nyílt meg"],
      ro: ["Extinsă de Ludovic I între 1360 și 1370", "A aparținut unui număr de 6 regine maghiare", "Caracterizată prin patru turnuri masive de colț", "Cea mai mare sală a cavalerilor din Europa Centrală", "Afectată de o explozie și fulger în 1703", "Redeschisă după reconstrucție în 2014"],
      en: ["Expanded by King Louis I between 1360 and 1370", "Owned by a total of 6 Hungarian queens", "Features four massive corner towers", "Contained Central Europe's largest medieval knight's hall", "Damaged by a lightning strike and explosion in 1703", "Reopened after major reconstruction in 2014"],
    },
  },
    {
    id: "esztergomi-bazilika-poi",
    type: "historical",
    parent: "esztergom",
    coords: [18.73, 47.79],
    name: {"de": "Kathedrale von Esztergom", "hu": "Esztergomi Bazilika", "ro": "Bazilica din Esztergom", "en": "Esztergom Basilica"},
    image: "/geo-images/hungary/esztergomi-bazilika.webp",
    description: {"de": "Die Basilika von Esztergom ist die größte Kirche Ungarns und das geistliche Zentrum des Landes.", "hu": "Az esztergomi bazilika Magyarország legnagyobb temploma és az ország vallási központja.", "ro": "Bazilica din Esztergom este cea mai mare biserică din Ungaria și centrul spiritual al țării.", "en": "The Esztergom Basilica is the largest church in Hungary and the spiritual center of the country."},
    facts: {"de": ["Das Altarbild ist das weltweit größte auf Leinwand gemalte Bild eines einzigen Künstlers.", "Die Bakócz-Kapelle im Inneren ist ein Meisterwerk der ungarischen Renaissance."], "hu": ["Oltárképe a világ legnagyobb, egyetlen vászonra festett képe egyetlen művésztől.", "A belső Bakócz-kápolna a magyar reneszánsz építészet egyik remekműve."], "ro": ["Pictura altarului este cea mai mare pictură pe pânză din lume realizată de un singur artist.", "Capela Bakócz din interior este o capodoperă a Renașterii maghiare."], "en": ["The altarpiece is the world's largest painting on a single piece of canvas.", "The Bakócz Chapel inside is a masterpiece of Hungarian Renaissance architecture."]},
    descriptionAdvanced: {
      de: "Die Basilika von Esztergom ist die größte Kirche Ungarns und das geistliche Zentrum des Landes. Sie wurde im klassizistischen Stil auf dem Burgberg errichtet und beherbergt die Bakócz-Kapelle, das wertvollste Denkmal der ungarischen Renaissance. Die gewaltige Kuppel ist weithin sichtbar und prägt das Panorama des Donauknies.",
      hu: "Az Esztergomi bazilika Magyarország legnagyobb temploma és az ország egyházi központja. A Várhegyen emelt klasszicista építmény ad otthont a Bakócz-kápolnának, amely a magyar reneszánsz legértékesebb emléke. Hatalmas kupolája messziről látható, meghatározva a Dunakanyar és a város látképét.",
      ro: "Bazilica din Esztergom este cea mai mare biserică din Ungaria și centrul spiritual al țării. Construită în stil clasicist pe Dealul Cetății, aceasta adăpostește Capela Bakócz, cel mai valoros monument al Renașterii maghiare. Cupola sa uriașă este vizibilă de la mare distanță, dominând panorama Cotului Dunării.",
      en: "The Esztergom Basilica is the largest church in Hungary and the spiritual center of the country. Built in Classicist style on Castle Hill, it houses the Bakócz Chapel, the most precious monument of the Hungarian Renaissance. Its massive dome is visible from afar, dominating the skyline of the Danube Bend.",
    },
    factsAdvanced: {
      de: ["Gesamthöhe der Kuppel beträgt 100 Meter", "Bauzeit von 1822 bis 1869", "Größtes Gemälde der Welt auf einer Leinwand (Altar)", "Bakócz-Kapelle aus rotem Marmor (1506-1507)", "Orgel verfügt über mehr als 3500 Pfeifen", "Sitz des Erzbischofs von Esztergom-Budapest"],
      hu: ["A kupola teljes magassága 100 méter", "Az építkezés 1822-től 1869-ig tartott", "A világ legnagyobb egyetlen vászonra festett oltárképe", "Bakócz-kápolna vörös márványból (1506-1507)", "Az orgonának több mint 3500 sípja van", "Az esztergom-budapesti érsek székhelye"],
      ro: ["Înălțimea totală a cupolei este de 100 metri", "Construcția a durat din 1822 până în 1869", "Cea mai mare pictură pe o singură pânză din lume", "Capela Bakócz din marmură roșie (1506-1507)", "Orga are peste 3500 de tuburi", "Reședința Arhiepiscopului de Esztergom-Budapesta"],
      en: ["Total height of the dome is 100 meters", "Built between 1822 and 1869", "Features the world's largest painting on a single canvas", "Bakócz Chapel built of red marble (1506-1507)", "The organ contains over 3,500 pipes", "Seat of the Archbishop of Esztergom-Budapest"],
    },
  },
    {
    id: "szentendrei-skanzen-poi",
    type: "historical",
    parent: "szentendre",
    coords: [19.05, 47.69],
    name: {"de": "Skanzen Szentendre", "hu": "Szentendrei Skanzen", "ro": "Skanzen Szentendre", "en": "Skanzen Szentendre"},
    image: "/geo-images/hungary/szentendrei-skanzen.webp",
    description: {"de": "Das Skanzen in Szentendre präsentiert die ländliche Architektur und Lebensweise aus ganz Ungarn.", "hu": "A szentendrei Skanzen Magyarország tájegységeinek népi építészetét és életmódját mutatja be.", "ro": "Skanzen din Szentendre prezintă arhitectura rurală și modul de viață din întreaga Ungarie.", "en": "The Skanzen in Szentendre presents the rural architecture and way of life from all over Hungary."},
    facts: {"de": ["Über 300 Gebäude aus verschiedenen Regionen wurden hier originalgetreu wieder aufgebaut.", "Interaktive Werkstätten lassen alte Handwerkskünste für Besucher wieder lebendig werden."], "hu": ["Több mint 300 épületet telepítettek át és építettek fel újra az eredeti tájegységekről.", "Interaktív műhelyekben a látogatók maguk is kipróbálhatják a régi mesterségeket."], "ro": ["Peste 300 de clădiri din diverse regiuni au fost reconstruite fidel aici.", "Atelierele interactive readuc la viață meșteșugurile vechi pentru vizitatori."], "en": ["Over 300 buildings from different regions have been faithfully reconstructed here.", "Interactive workshops bring old crafts back to life for visitors."]},
    descriptionAdvanced: {
      de: "Das Freilichtmuseum Szentendre ist das größte seiner Art in Ungarn und präsentiert die traditionelle ländliche Architektur und Lebensweise aus verschiedenen Regionen des Landes. Auf einer Fläche von 60 Hektar wurden über 300 Gebäude, darunter Wohnhäuser, Kirchen und Mühlen, originalgetreu wiederaufgebaut. Eine eigene Waldbahn verbindet die verschiedenen Themengebiete.",
      hu: "A Szentendrei Skanzen Magyarország legnagyobb szabadtéri néprajzi múzeuma, amely az ország különböző tájegységeinek népi építészetét és életmódját mutatja be. A 60 hektáros területen több mint 300 építményt, köztük lakóházakat, templomokat és malmokat építettek fel eredeti formájukban. A tájegységek között belső vasút közlekedik.",
      ro: "Muzeul Satului din Szentendre este cel mai mare muzeu etnografic în aer liber din Ungaria, prezentând arhitectura populară și stilul de viață din diferite regiuni ale țării. Pe o suprafață de 60 de hectare, au fost reconstruite peste 300 de clădiri, inclusiv case, biserici și mori. O cale ferată internă face legătura între sectoare.",
      en: "The Szentendre Open Air Museum (Skanzen) is the largest of its kind in Hungary, showcasing traditional rural architecture and lifestyles from various regions of the country. Spread over 60 hectares, it features more than 300 reconstructed buildings, including houses, churches, and mills. An internal railway connects the different regional exhibits.",
    },
    factsAdvanced: {
      de: ["Gründungsjahr des Museums war 1967", "Fläche umfasst ca. 60 Hektar", "Mehr als 300 Gebäude in 8 Regionen unterteilt", "Skanzen-Bahn hat eine Strecke von 2,2 km", "Originale Holzkirche aus dem 18. Jahrhundert", "Vorführung alter Handwerkstechniken vor Ort"],
      hu: ["A múzeumot 1967-ben alapították", "Területe körülbelül 60 hektár", "Több mint 300 épület 8 tájegységbe sorolva", "A belső vasút vonala 2,2 km hosszú", "Eredeti 18. századi fatemplom is látható", "Helyszíni mesterségbemutatók és foglalkozások"],
      ro: ["Muzeul a fost fondat în anul 1967", "Suprafața totală este de circa 60 hectare", "Peste 300 de clădiri împărțite în 8 regiuni", "Calea ferată internă are o lungime de 2,2 km", "Biserică de lemn originală din sec. XVIII", "Demonstrații live de meșteșuguri tradiționale"],
      en: ["Founded in 1967 to preserve rural heritage", "Covers an area of approximately 60 hectares", "Features over 300 buildings across 8 regions", "The Skanzen railway is 2.2 km long", "Includes an original 18th-century wooden church", "Live demonstrations of traditional crafts"],
    },
  },
    {
    id: "sumegi-var-poi",
    type: "historical",
    parent: "veszprem",
    coords: [17.435, 46.982],
    name: {"de": "Burg Sümeg", "hu": "Sümegi vár", "ro": "Cetatea Sümeg", "en": "Sümeg Castle"},
    image: "/geo-images/hungary/sumegi-var.webp",
    description: {"de": "Die Burg Sümeg zählt zu den imposantesten und am besten erhaltenen Festungsanlagen des Landes.", "hu": "A sümegi vár az ország egyik legimpozánsabb és legjobb állapotban fennmaradt erődítménye.", "ro": "Cetatea Sümeg este una dintre cele mai impunătoare și mai bine conservate fortificații din țară.", "en": "Sümeg Castle is one of the country's most impressive and best-preserved fortifications."},
    facts: {"de": ["Die im 13. Jahrhundert errichtete Burg bietet einen weiten Blick über die Balaton-Region.", "Bekannt für seine spektakulären Ritterspiele und historischen Abendveranstaltungen."], "hu": ["A 13. században épült várból messzire ellátni a Balaton-felvidék irányába.", "Híres a látványos lovagi tornáiról és a történelmi hangulatú vacsorákról."], "ro": ["Construită în secolul al XIII-lea, cetatea oferă o vedere largă asupra regiunii Balaton.", "Cunoscută pentru jocurile cavalerești spectaculoase și cinele istorice."], "en": ["Built in the 13th century, the castle offers a wide view over the Balaton region.", "Known for its spectacular knightly tournaments and historical evening events."]},
    descriptionAdvanced: {
      de: "Die Burg von Sümeg ist eine der am besten erhaltenen mittelalterlichen Festungen Ungarns und thront markant auf einem Kalksteinhügel über der Stadt. Sie wurde im 13. Jahrhundert nach dem Mongolensturm errichtet und diente lange als Zufluchtsort für die Bischöfe von Veszprém. Heute ist sie für ihre historischen Ritterspiele und mittelalterlichen Vorführungen bekannt.",
      hu: "A Sümegi vár Magyarország egyik legjobb állapotban fennmaradt középkori erődítménye, amely egy mészkőhegy tetején magasodik a város fölé. A 13. században épült a tatárjárás után, és hosszú ideig a veszprémi püspökök menedékhelyeként szolgált. Napjainkban híres történelmi lovasjátékairól és várjátékaival vonzza a látogatókat.",
      ro: "Cetatea Sümeg este una dintre cele mai bine conservate fortificații medievale din Ungaria, dominând orașul de pe vârful unui deal calcaros. Construită în sec. XIII după invazia mongolă, a servit mult timp ca refugiu pentru episcopii de Veszprém. Astăzi, este celebră pentru turnirurile cavalerești și spectacolele medievale.",
      en: "The Castle of Sümeg is one of Hungary's best-preserved medieval fortresses, standing prominently atop a limestone hill overlooking the town. Built in the 13th century following the Mongol invasion, it served for centuries as a refuge for the bishops of Veszprém. Today, it is famous for its historical knight tournaments and medieval reenactments.",
    },
    factsAdvanced: {
      de: ["Bau im späten 13. Jahrhundert durch Béla IV.", "Sitz der Bischöfe von Veszprém ab 1552", "Höhe des Burghügels beträgt 270 Meter", "Zerstörung durch Brand im Jahr 1713", "Beginn der Restaurierung im Jahr 1989", "Tägliche Ritterspiele in der Sommersaison"],
      hu: ["A 13. század végén épült IV. Béla idején", "1552-től a veszprémi püspökök székhelye", "A várhegy magassága 270 méter", "1713-ban tűzvész pusztította el a várat", "A restaurálási munkák 1989-ben kezdődtek", "Napi lovasjátékok a nyári szezonban"],
      ro: ["Construită la sfârșitul sec. XIII sub Béla IV", "Reședința episcopilor de Veszprém din 1552", "Înălțimea dealului cetății este de 270 metri", "Distrusă de un incendiu în anul 1713", "Lucrările de restaurare începute în 1989", "Turniruri cavalerești zilnice în timpul verii"],
      en: ["Built in the late 13th century by King Béla IV", "Seat of the Bishops of Veszprém since 1552", "Castle hill elevation is 270 meters", "Partially destroyed by a fire in 1713", "Restoration projects began in 1989", "Daily knight tournaments held during summer"],
    },
  },
    {
    id: "fuzeri-var-poi",
    type: "historical",
    parent: "borsod-abauj-zemplen",
    coords: [21.46, 48.54],
    name: {"de": "Burg Füzér", "hu": "Füzéri vár", "ro": "Cetatea Füzér", "en": "Füzér Castle"},
    image: "/geo-images/hungary/fuzeri-var.webp",
    description: {"de": "Die Burg Füzér ist eine spektakulär restaurierte Festung auf einem steilen vulkanischen Felsen.", "hu": "A füzéri vár egy meredek vulkáni sziklán álló, látványosan felújított középkori erődítmény.", "ro": "Cetatea Füzér este o fortificație restaurată spectaculos, situată pe o stâncă vulcanică abruptă.", "en": "Füzér Castle is a spectacularly restored fortress standing on a steep volcanic rock."},
    facts: {"de": ["Sie war eine der ersten Burgen in Ungarn, die nach dem Tatarensturm erbaut wurde.", "Nach der Schlacht bei Mohács wurde hier ein Jahr lang die ungarische Krone versteckt."], "hu": ["Egyike volt az első magyar váraknak, amelyek a tatárjárás után épültek fel.", "A mohácsi csata után egy éven keresztül itt rejtegették a magyar Szent Koronát."], "ro": ["A fost una dintre primele cetăți din Ungaria construite după invazia tătară.", "După bătălia de la Mohács, coroana maghiară a fost ascunsă aici timp de un an."], "en": ["It was one of the first castles in Hungary built after the Mongol invasion.", "The Hungarian crown was hidden here for a year after the Battle of Mohács."]},
    descriptionAdvanced: {
      de: "Die Burg von Füzér ist eine der frühesten Steinburgen Ungarns und liegt auf einem steilen Vulkankegel im Zemplén-Gebirge. Sie wurde bereits vor dem Mongolensturm im 13. Jahrhundert erbaut und ist historisch bedeutsam, da hier nach der Schlacht von Mohács die ungarische Krone versteckt wurde. Die Burg wurde in den letzten Jahren originalgetreu rekonstruiert.",
      hu: "A Füzéri vár Magyarország egyik legkorábbi kővára, amely a Zempléni-hegység egyik meredek vulkáni kúpján épült. Már a tatárjárás előtt, a 13. század elején állt, és történelmi jelentőségét növeli, hogy a mohácsi csata után itt rejtegették a magyar Szent Koronát. A várat az elmúlt években korhű módon teljesen újjáépítették.",
      ro: "Cetatea Füzér este una dintre cele mai timpurii cetăți de piatră din Ungaria, situată pe un con vulcanic abrupt în Munții Zemplén. Construită înainte de invazia mongolă în sec. XIII, este importantă istoric deoarece aici a fost ascunsă Coroana Sfântă după bătălia de la Mohács. Cetatea a fost complet reconstruită recent.",
      en: "The Castle of Füzér is one of Hungary's earliest stone castles, perched on a steep volcanic cone in the Zemplén Mountains. Built before the Mongol invasion in the early 13th century, it is historically significant as the place where the Holy Crown of Hungary was hidden after the Battle of Mohács. It has recently been fully reconstructed.",
    },
    factsAdvanced: {
      de: ["Erste Erwähnung im Jahr 1235", "Lage auf einem 552 Meter hohen Vulkanfelsen", "Aufbewahrungsort der Krone 1526-1527", "Besitz der Familie Perényi im 16. Jh.", "Zerstörung durch kaiserliche Truppen 1676", "Vollständige Rekonstruktion der Oberburg 2016"],
      hu: ["Első írásos említése 1235-ből való", "Egy 552 méter magas vulkáni kúpon fekszik", "A Szent Koronát 1526-1527-ben itt őrizték", "A 16. században a Perényi család birtoka volt", "1676-ban a császári katonaság lerombolta", "A felsővár teljes rekonstrukciója 2016-ban zárult"],
      ro: ["Prima mențiune documentară în anul 1235", "Situată pe o stâncă vulcanică de 552 metri", "Locul de păstrare al coroanei în 1526-1527", "Proprietatea familiei Perényi în sec. XVI", "Distrusă de trupele imperiale în 1676", "Reconstrucția cetății superioare finalizată în 2016"],
      en: ["First mentioned in historical records in 1235", "Located on a 552-meter high volcanic cone", "Home to the Holy Crown in 1526-1527", "Owned by the Perényi family in the 16th century", "Demolished by Imperial troops in 1676", "Upper castle reconstruction completed in 2016"],
    },
  },
    {
    id: "boldogkoi-var-poi",
    type: "historical",
    parent: "borsod-abauj-zemplen",
    coords: [21.23, 48.34],
    name: {"de": "Burg Boldogkő", "hu": "Boldogkői vár", "ro": "Cetatea Boldogkő", "en": "Boldogkő Castle"},
    image: "/geo-images/hungary/boldogkoi-var.webp",
    description: {"de": "Die Burg Boldogkő thront auf einem schmalen Felsgrat und ist ein Juwel des Zemplén-Gebirges.", "hu": "A boldogkői vár egy keskeny sziklaélen trónol, a Zempléni-hegység egyik ékköve.", "ro": "Cetatea Boldogkő domină o creastă stâncoasă îngustă, fiind o bijuterie a munților Zemplén.", "en": "Boldogkő Castle perches on a narrow rocky ridge, a jewel of the Zemplén Mountains."},
    facts: {"de": ["Der hölzerne Wehrgang auf dem Löwenfelsen bietet ein einzigartiges Fotomotiv.", "In der Burg kann man eine der größten Zinnfiguren-Ausstellungen des Landes besichtigen."], "hu": ["Az Oroszlán-sziklán végigfutó fapadlózatú gyilokjáró egyedülálló fotóhelyszín.", "A várban megtekinthető az ország egyik legnagyobb ólomkatona-kiállítása is."], "ro": ["Galeria de lemn de pe Stânca Leului oferă un motiv fotografic unic.", "În cetate poate fi vizitată una dintre cele mai mari expoziții de soldăței de plumb."], "en": ["The wooden walkway on the Lion's Rock provides a unique photo opportunity.", "One of the country's largest exhibitions of tin soldiers can be visited in the castle."]},
    descriptionAdvanced: {
      de: "Die Burg Boldogkő ist eine mittelalterliche Festung auf einem markanten Felskamm im Zemplén-Gebirge. Sie wurde im 13. Jahrhundert nach dem Mongolensturm erbaut, um die Handelswege nach Polen zu schützen. Die Anlage ist besonders für ihren schmalen Wehrgang bekannt, der auf einem steilen Felsvorsprung thront. Heute beherbergt sie eine bedeutende Zinnsoldatenausstellung und bietet einen Panoramablick über das Hernád-Tal.",
      hu: "Boldogkő vára a Zempléni-hegység egyik leglátványosabb erődítménye, amely egy éles sziklaszirten magasodik. A 13. században, a tatárjárás után épült az északi kereskedelmi utak védelmére. Különlegessége a sziklaélen futó gyilokjáró, amely a vár legnépszerűbb pontja. A várban hadtörténeti kiállítás és Közép-Európa egyik legnagyobb ólomkatona-bemutatója is helyet kapott.",
      ro: "Cetatea Boldogkő este o fortificație medievală situată pe o creastă de stâncă spectaculoasă în munții Zemplén. A fost construită în secolul al XIII-lea, după invazia tătară, pentru a proteja rutele comerciale spre nord. Este renumită pentru drumul de strajă îngust situat pe o proeminență stâncoasă abruptă. Astăzi găzduiește o expoziție impresionantă de soldați de plumb și oferă o vedere panoramică asupra văii Hernád.",
      en: "Boldogkő Castle is a medieval fortress perched on a sharp rocky ridge in the Zemplén Mountains. Built in the 13th century following the Mongol invasion, it served to protect trade routes leading to Poland. The castle is famous for its unique walkway along a narrow rock spur known as the Sphinx. Visitors can explore military history exhibits and one of Central Europe's largest lead soldier collections.",
    },
    factsAdvanced: {
      de: ["Erstmals im Jahr 1282 in einer Urkunde erwähnt.", "Der markante Wehrgang auf dem Felsen ist etwa 20 Meter lang.", "Im Jahr 1701 wurde die Burg auf kaiserlichen Befehl teilweise gesprengt.", "Die Familie Drugeth besaß die Burg im 14. Jahrhundert.", "Die Anlage beherbergt eine Münzstätte aus der Zeit von Sigismund von Luxemburg.", "Die Burg wurde in den 2000er Jahren umfassend renoviert."],
      hu: ["Az első írásos említés a várról 1282-ből származik.", "A sziklaélen futó gyilokjáró hossza körülbelül 20 méter.", "1701-ben császári parancsra a vár egy részét felrobbantották.", "A 14. században a Drugeth család volt a vár birtokosa.", "A várban Luxemburgi Zsigmond korabeli pénzverde-rekonstrukció látható.", "A 2000-es években jelentős turisztikai fejlesztéseken esett át."],
      ro: ["Prima mențiune documentară a cetății datează din anul 1282.", "Drumul de strajă de pe stâncă are o lungime de aproximativ 20 de metri.", "În anul 1701, cetatea a fost parțial dinamitată din ordin imperial.", "În secolul al XIV-lea, familia Drugeth a deținut cetatea.", "Găzduiește o replică a unei monetării din epoca lui Sigismund de Luxemburg.", "Cetatea a beneficiat de restaurări majore în anii 2000."],
      en: ["First mentioned in a royal charter in 1282.", "The iconic rock walkway is approximately 20 meters long.", "The castle was partially destroyed in 1701 by imperial decree.", "In the 14th century, it was owned by the Drugeth family.", "It features a reconstructed mint from the era of Sigismund of Luxembourg.", "Extensive restoration work was carried out in the early 2000s."],
    },
  },
    {
    id: "szepmuveszeti-muzeum-poi",
    type: "landmark",
    parent: "budapest",
    coords: [19.07, 47.51],
    name: {"de": "Museum der Bildenden Künste", "hu": "Szépművészeti Múzeum", "ro": "Muzeul de Arte Frumoase", "en": "Museum of Fine Arts"},
    image: "/geo-images/hungary/szepmuveszeti-muzeum.webp",
    description: {"de": "Das Museum der Bildenden Künste am Heldenplatz beherbergt eine weltberühmte Kunstsammlung.", "hu": "A Hősök terén álló Szépművészeti Múzeum világhírű képzőművészeti gyűjteménynek ad otthont.", "ro": "Muzeul de Arte Frumoase din Piața Eroilor găzduiește o colecție de artă de renume mondial.", "en": "The Museum of Fine Arts on Heroes' Square houses a world-famous art collection."},
    facts: {"de": ["Besitzt eine der bedeutendsten Sammlungen spanischer Kunst außerhalb Spaniens.", "Das prachtvolle Gebäude im neoklassizistischen Stil wurde im Jahr 1906 eröffnet."], "hu": ["Spanyolországon kívül itt található az egyik legjelentősebb spanyol művészeti gyűjtemény.", "A neoklasszicista stílusú, impozáns épületet 1906-ban nyitották meg a nagyközönség előtt."], "ro": ["Deține una dintre cele mai importante colecții de artă spaniolă din afara Spaniei.", "Clădirea magnifică în stil neoclasic a fost inaugurată în anul 1906."], "en": ["Possesses one of the most significant collections of Spanish art outside of Spain.", "The magnificent neoclassical building was opened in 1906."]},
    descriptionAdvanced: {
      de: "Das Museum der Bildenden Künste am Heldenplatz in Budapest ist eines der bedeutendsten Kunstmuseen Europas. Es wurde zwischen 1900 und 1906 im neoklassizistischen Stil nach Plänen von Albert Schickedanz erbaut. Die Sammlung umfasst Werke von der Antike bis zum Ende des 18. Jahrhunderts, darunter Meisterwerke von El Greco und Velázquez. Nach einer umfassenden Renovierung wurde es 2018 wiedereröffnet.",
      hu: "A budapesti Szépművészeti Múzeum a Hősök terén található, Európa egyik legfontosabb művészeti intézménye. Az épület 1900 és 1906 között épült neoklasszicista stílusban, Schickedanz Albert tervei alapján. Gyűjteménye az ókortól a 18. század végéig öleli fel az európai művészetet, kiemelkedő spanyol és olasz anyaggal. A Román Csarnok 2018-as felújítása után vált ismét látogathatóvá.",
      ro: "Muzeul de Arte Frumoase din Budapesta, situat în Piața Eroilor, este una dintre cele mai importante instituții de artă din Europa. Clădirea a fost construită între 1900 și 1906 în stil neoclasic, după planurile arhitectului Albert Schickedanz. Colecția sa cuprinde opere din antichitate până la sfârșitul secolului al XVIII-lea, incluzând maeștri precum El Greco și Velázquez. A fost redeschis în 2018 după o renovare majoră.",
      en: "The Museum of Fine Arts at Heroes' Square is one of Europe's most significant art institutions. Built between 1900 and 1906 in Neoclassical style, it was designed by Albert Schickedanz and Fülöp Herzog. The collection spans from ancient times to the late 18th century, featuring world-class Spanish, Italian, and Dutch artworks. The Romanesque Hall reopened in 2018 after a comprehensive three-year restoration.",
    },
    factsAdvanced: {
      de: ["Offizielle Eröffnung am 1. Dezember 1906 durch Kaiser Franz Joseph I.", "Die Sammlung umfasst mehr als 100.000 Kunstwerke.", "Die spanische Sammlung gilt als die größte außerhalb Spaniens.", "Beherbergt Werke von Meistern wie Leonardo da Vinci und Raffael.", "Der Romanische Saal war fast 70 Jahre lang für die Öffentlichkeit geschlossen.", "Das Giebelfeld ist eine Kopie des Zeustempels von Olympia."],
      hu: ["Hivatalosan 1906. december 1-jén nyitotta meg Ferenc József.", "A múzeum gyűjteménye több mint 100 000 műtárgyat számlál.", "A spanyol gyűjtemény a legnagyobb Spanyolországon kívül.", "Olyan mesterek műveit őrzi, mint Leonardo da Vinci és Raffaello.", "A Román Csarnok közel 70 éven át zárva volt a látogatók előtt.", "Az épület timpanonja az olümpiai Zeusz-templom másolata."],
      ro: ["Inaugurat oficial la 1 decembrie 1906 de către împăratul Franz Joseph I.", "Colecția muzeului numără peste 100.000 de obiecte de artă.", "Colecția spaniolă este cea mai mare din afara Spaniei.", "Găzduiește lucrări ale unor maeștri precum Leonardo da Vinci și Rafael.", "Sala Romanică a fost închisă publicului timp de aproape 70 de ani.", "Frontonul clădirii este o replică a templului lui Zeus din Olimpia."],
      en: ["Opened on December 1, 1906, by Emperor Franz Joseph I.", "The collection includes over 100,000 items.", "The Spanish collection is the largest outside Spain.", "Features works by masters such as Leonardo da Vinci and Raphael.", "The Romanesque Hall was closed to the public for nearly 70 years.", "The building's pediment is a replica of the Temple of Zeus at Olympia."],
    },
  },
    {
    id: "nemzeti-muzeum-poi",
    type: "landmark",
    parent: "budapest",
    coords: [19.06, 47.49],
    name: {"de": "Ungarisches Nationalmuseum", "hu": "Magyar Nemzeti Múzeum", "ro": "Muzeul Național Maghiar", "en": "Hungarian National Museum"},
    image: "/geo-images/hungary/nemzeti-muzeum.webp",
    description: {"de": "Das Nationalmuseum bewahrt die wichtigsten Schätze der ungarischen Geschichte und Kultur auf.", "hu": "A Magyar Nemzeti Múzeum a magyar történelem és kultúra legfontosabb emlékeit őrzi.", "ro": "Muzeul Național Maghiar păstrează cele mai importante comori ale istoriei și culturii maghiare.", "en": "The National Museum preserves the most important treasures of Hungarian history and culture."},
    facts: {"de": ["Das Gebäude spielte eine zentrale Rolle beim Ausbruch der Revolution am 15. März 1848.", "Beherbergt den wertvollen ungarischen Krönungsmantel aus dem 11. Jahrhundert."], "hu": ["Az épület központi szerepet játszott az 1848. március 15-i forradalom kirobbanásakor.", "Itt őrzik az értékes, 11. századból származó magyar koronázási palástot."], "ro": ["Clădirea a jucat un rol central în izbucnirea revoluției din 15 martie 1848.", "Găzduiește prețioasa mantie de încoronare maghiară din secolul al XI-lea."], "en": ["The building played a central role in the outbreak of the revolution on March 15, 1848.", "Houses the precious 11th-century Hungarian coronation mantle."]},
    
    descriptionAdvanced: {
      "de": "Das Ungarische Nationalmuseum in Budapest ist das bedeutendste Museum zur Geschichte des Landes und ein Symbol der ungarischen nationalen Identität. Das monumentale klassizistische Gebäude wurde zwischen 1837 und 1847 errichtet und spielte eine zentrale Rolle in der ungarischen Revolution von 1848, als hier die ersten Forderungen der Nation verlesen wurden. Die Ausstellungen des Museums führen Besucher durch die gesamte Geschichte Ungarns, von der Urzeit über die Landnahme und das goldene Mittelalter bis hin zur Neuzeit. Besonders beeindruckend sind der Krönungsmantel der ungarischen Könige und die reiche Sammlung archäologischer Schätze aus dem Karpatenbecken. Das Museum ist nicht nur ein Ort der Bewahrung, sondern auch ein Ort des Gedenkens und der nationalen Besinnung. Der umliegende Museumsgarten ist ein beliebter Treffpunkt im Herzen der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Nationalmuseum ist das älteste öffentliche Museum Ungarns, gegründet 1802.", "Das Gebäude gilt als eines der schönsten Beispiele der klassizistischen Architektur in Mitteleuropa.", "Auf den Treppen des Museums begann am 15. März 1848 die ungarische Revolution.", "Das Museum beherbergt den Krönungsmantel des Heiligen Stephan aus dem Jahr 1031."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "aquaworld-budapest",
    type: "landmark",
    parent: "budapest",
    coords: [19.11, 47.60],
    name: {"de": "Aquaworld Budapest", "hu": "Aquaworld Budapest", "ro": "Aquaworld Budapesta", "en": "Aquaworld Budapest"},
    image: "/geo-images/hungary/aquaworld-budapest.webp",
    description: {"de": "Aquaworld Budapest ist einer der größten überdachten Wasser-Themenparks in ganz Europa.", "hu": "Az Aquaworld Budapest Európa egyik legnagyobb fedett vízi élményparkja és szabadidőközpontja.", "ro": "Aquaworld Budapesta este unul dintre cele mai mari parcuri tematice acvatice acoperite din Europa.", "en": "Aquaworld Budapest is one of the largest indoor water theme parks in all of Europe."},
    facts: {"de": ["Der beeindruckende Kuppelbau erinnert architektonisch an den Tempel von Angkor Wat.", "Bietet 17 verschiedene Rutschen und zahlreiche In- und Outdoorbecken für Familien."], "hu": ["A monumentális kupolás épület építészetileg az angkori templomvilágot idézi meg.", "17 különböző csúszda és számos kinti-benti medence várja a családokat."], "ro": ["Clădirea impresionantă cu cupolă amintește de templul Angkor Wat.", "Oferă 17 tobogane diferite și numeroase bazine interioare și exterioare pentru familii."], "en": ["The impressive dome structure architecturally evokes the Angkor Wat temple complex.", "Offers 17 different slides and numerous indoor and outdoor pools for families."]},
    
    descriptionAdvanced: {
      "de": "Aquaworld Budapest ist einer der größten überdachten Wasserthemenparks Europas und bietet ein ganzjähriges Tropenerlebnis im Norden der ungarischen Hauptstadt. Der Park ist architektonisch beeindruckend durch seine riesige Kuppel mit einem Durchmesser von 72 Metern, die den zentralen Bereich überspannt. Das Herzstück des Komplexes ist eine detailgetreue Nachbildung des kambodschanischen Angkor Wat Tempels, der von Hängebrücken, Palmen und zahlreichen Pools umgeben ist. Mit 17 Innen- und Außenbecken sowie 11 spektakulären Rutschen bietet Aquaworld Unterhaltung für alle Altersklassen und Adrenalinjunkies. Neben dem Wasserspaß verfügt der Komplex über eine großzügige Saunawelt und ein Wellness-Zentrum für Entspannungssuchende. Es ist das ideale Ausflugsziel für Familien, die unabhängig vom Wetter einen Tag voller Abenteuer und Erholung erleben möchten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Aquaworld Budapest besitzt eine der größten freitragenden Kuppeln in Europa.", "Das Design des Innenraums wurde durch die Tempelanlage von Angkor Wat inspiriert.", "Der Park bietet insgesamt über 4000 Quadratmeter Wasserfläche für Sport und Spiel.", "Es gibt spezielle Surfbecken, in denen Besucher das Wellenreiten üben können."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "fovarosi-allatkert",
    type: "landmark",
    parent: "budapest",
    coords: [19.07, 47.51],
    name: {"de": "Budapester Zoo", "hu": "Fővárosi Állat- és Növénykert", "ro": "Grădina Zoologică din Budapesta", "en": "Budapest Zoo"},
    image: "/geo-images/hungary/fovarosi-allatkert.webp",
    description: {"de": "Der Zoo im Herzen von Budapest ist einer der ältesten und artenreichsten Tiergärten der Welt.", "hu": "A Budapest szívében fekvő állatkert a világ egyik legrégebbi és legszebb állatkertje.", "ro": "Grădina zoologică din inima Budapestei este una dintre cele mai vechi din lume.", "en": "The zoo in the heart of Budapest is one of the oldest and most diverse zoos in the world."},
    facts: {"de": ["Bekannt für seine architektonisch wertvollen Tierhäuser im Jugendstil und orientalischen Design.", "Zählt mit über einer Million Besuchern jährlich zu den beliebtesten Zielen des Landes."], "hu": ["Híres szecessziós és orientális stílusú, műemléki védettségű állatházairól.", "Évente több mint egymillió látogatóval az ország egyik legnépszerűbb célpontja."], "ro": ["Cunoscută pentru casele de animale valoroase în stil Art Nouveau și design oriental.", "Cu peste un milion de vizitatori anual, este printre cele mai populare destinații din țară."], "en": ["Known for its architecturally significant animal houses in Art Nouveau and Oriental designs.", "With over a million visitors annually, it is one of the most popular destinations in the country."]},
    
    descriptionAdvanced: {
      "de": "Der Hauptstädtische Tier- und Pflanzenpark von Budapest ist einer der ältesten und architektonisch schönsten Zoos der Welt. Er wurde bereits 1866 eröffnet und besticht durch seine einzigartigen historischen Gebäude im Jugendstil und orientalischer Architektur, wie das berühmte Elefantenhaus. Der Zoo beherbergt eine beeindruckende Vielfalt an Tieren aus allen Kontinenten sowie einen botanischen Garten mit seltenen Pflanzenarten. Besonders sehenswert ist das 'Holnemvolt Schloss', ein spezieller Bereich für Familien, der die Traditionen der ungarischen Jahrmärkte mit Tierbegegnungen verbindet. Das Ziel des Zoos ist nicht nur die Unterhaltung, sondern auch der Artenschutz und die Umweltbildung in einem historischen Ambiente. Ein Spaziergang durch den Tierpark im Stadtpark ist ein Muss für jeden Budapest-Besucher und bietet Erlebnisse für Groß und Klein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Budapester Zoo ist einer der ältesten wissenschaftlichen Tiergärten der Welt.", "Das Elefantenhaus ist ein Meisterwerk des ungarischen Jugendstils mit Zsolnay-Keramiken.", "Der Zoo beherbergt das größte Palmenhaus Mitteleuropas.", "Viele der historischen Tierhäuser stehen unter nationalem Denkmalschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "gellert-hegy-poi",
    type: "landmark",
    parent: "budapest",
    coords: [19.05, 47.48],
    name: {"de": "Gellértberg", "hu": "Gellért-hegy", "ro": "Dealul Gellért", "en": "Gellért Hill"},
    image: "/geo-images/hungary/gellert-hegy.webp",
    description: {"de": "Der Gellértberg bietet das berühmteste Panorama auf Budapest und gehört zum UNESCO-Welterbe.", "hu": "A Gellért-hegy kínálja a leghíresebb panorámát Budapestre és az UNESCO világörökség része.", "ro": "Dealul Gellért oferă cea mai faimoasă panoramă asupra Budapestei și face parte din patrimoniul UNESCO.", "en": "Gellért Hill offers the most famous panorama of Budapest and is a UNESCO World Heritage site."},
    facts: {"de": ["Auf dem Gipfel befindet sich die Zitadelle und die weithin sichtbare Freiheitsstatue.", "Der Hügel ist nach dem Heiligen Gellért benannt, der hier den Märtyrertod starb."], "hu": ["A csúcson található a Citadella erődje és a messziről is jól látható Szabadság-szobor.", "A hegy Szent Gellért püspökről kapta a nevét, aki itt halt mártírhalált."], "ro": ["Pe vârf se află Citadela și Statuia Libertății, vizibilă de la mare distanță.", "Dealul este numit după Sfântul Gellért, care a suferit aici moarte martirică."], "en": ["The Citadel fortress and the widely visible Liberty Statue are located on the summit.", "The hill is named after Saint Gellért, who died a martyr's death here."]},
    descriptionAdvanced: {
      de: "Der Gellértberg ist eine markante Erhebung am Donauufer in Budapest und gehört zum UNESCO-Welterbe. Auf dem Gipfel thront die Zitadelle, eine im 19. Jahrhundert errichtete Festung, sowie die imposante Freiheitsstatue. Der Berg bietet die spektakulärste Aussicht auf die gesamte Stadt und die Donaubrücken. An seinen Hängen befinden sich zudem die berühmte Felsenkirche und das traditionsreiche Gellért-Bad.",
      hu: "A Gellért-hegy Budapest Duna-parti látképének meghatározó eleme, az UNESCO Világörökség része. Tetején magasodik a 19. századi Citadella erődje és a szabadságot jelképező Szabadság-szobor. A hegyről nyílik a legszebb kilátás a fővárosra és a Duna hídjaira. Oldalában található a különleges Sziklatemplom és a történelmi Gellért Gyógyfürdő is.",
      ro: "Dealul Gellért este o înălțime proeminentă pe malul Dunării în Budapesta, făcând parte din Patrimoniul Mondial UNESCO. În vârful său se află Citadela, o fortăreață construită în secolul al XIX-lea, și impunătoarea Statuie a Libertății. Dealul oferă cea mai spectaculoasă vedere panoramică asupra orașului și a podurilor de peste Dunăre. Pe pantele sale se găsesc Biserica din Stâncă și Băile Gellért.",
      en: "Gellért Hill is a prominent landmark on the banks of the Danube in Budapest and a UNESCO World Heritage site. Its summit is crowned by the Citadella, a 19th-century fortress, and the towering Liberty Statue. The hill offers the most spectacular panoramic views of the city and the Danube bridges. Its slopes also house the unique Cave Church and the historic Gellért Thermal Baths.",
    },
    factsAdvanced: {
      de: ["Der Gipfel des Berges liegt auf 235 Metern über dem Meeresspiegel.", "Die Zitadelle wurde 1851 von den Habsburgern erbaut.", "Die Freiheitsstatue wurde 1947 zum Gedenken an die Befreiung errichtet.", "Benannt nach dem Heiligen Gellért, der im Jahr 1046 hier starb.", "Die Felsenkirche im Inneren wurde im Jahr 1926 eingeweiht.", "Der Berg besteht hauptsächlich aus Dolomitgestein."],
      hu: ["A hegy csúcsa 235 méterrel magasodik a tengerszint fölé.", "A Citadellát az osztrákok építették 1851-ben.", "A Szabadság-szobrot 1947-ben állították fel.", "A hegy Szent Gellért püspökről kapta nevét, aki 1046-ban halt itt vértanúhalált.", "A Sziklatemplomot 1926-ban szentelték fel a pálos rend számára.", "A hegy anyaga főként triász kori dolomit."],
      ro: ["Vârful dealului se află la 235 de metri deasupra nivelului mării.", "Citadela a fost construită de habsburgi în anul 1851.", "Statuia Libertății a fost ridicată în anul 1947.", "Numele provine de la Sfântul Gellért, care a murit martirizat aici în 1046.", "Biserica din Stâncă a fost sfințită în anul 1926.", "Dealul este compus în principal din roci de dolomită."],
      en: ["The peak reaches 235 meters above sea level.", "The Citadella was built by the Habsburgs in 1851.", "The Liberty Statue was erected in 1947.", "Named after Saint Gellért, who died as a martyr here in 1046.", "The Cave Church was established in 1926 for the Pauline Order.", "The hill is primarily composed of dolomite rock."],
    },
  },
    {
    id: "normafa-poi",
    type: "landmark",
    parent: "budapest",
    coords: [18.96, 47.50],
    name: {"de": "Normafa", "hu": "Normafa", "ro": "Normafa", "en": "Normafa"},
    image: "/geo-images/hungary/normafa.webp",
    description: {"de": "Normafa ist das beliebteste Naherholungsgebiet der Budapester in den malerischen Budaer Bergen.", "hu": "A Normafa a budapestiek legkedveltebb kirándulóhelye a festői szépségű Budai-hegységben.", "ro": "Normafa este cea mai populară zonă de recreere pentru budapestani în pitoreștii munți Buda.", "en": "Normafa is the most popular recreational area for Budapest residents in the picturesque Buda Hills."},
    facts: {"de": ["Bekannt für die herrliche Aussicht und die Haltestelle der historischen Kindereisenbahn.", "Ein idealer Ort für Spaziergänge, zum Picknicken und im Winter zum Schlittenfahren."], "hu": ["Híres a gyönyörű kilátásról és a történelmi Gyermekvasút egyik megállójáról.", "Ideális helyszín sétákhoz, piknikezéshez, télen pedig a szánkózáshoz."], "ro": ["Cunoscută pentru vederile superbe și stația căii ferate istorice a copiilor.", "Un loc ideal pentru plimbări, picnic și, în timpul iernii, pentru săniuș."], "en": ["Known for the magnificent views and the stop of the historic Children's Railway.", "An ideal spot for walks, picnics, and sledding in the winter."]},
    descriptionAdvanced: {
      de: "Normafa ist das beliebteste Ausflugsziel in den Budaer Bergen und bietet Erholung pur direkt über Budapest. Der Ort ist bekannt für seine weitläufigen Wanderwege und den Panoramablick auf die ungarische Hauptstadt. Im Winter ist es ein Zentrum für Skifahrer und Rodler, während im Sommer die Sesselbahn (Libegő) viele Besucher anzieht. Der Name geht auf eine historische Buche zurück, unter der Opernsänger einst auftraten.",
      hu: "Normafa a budai hegyek legnépszerűbb kirándulóhelye, amely kikapcsolódást nyújt közvetlenül a főváros felett. Híres kiterjedt sétaútjairól és a Budapestre nyíló lenyűgöző panorámájáról. Télen a síelők és szánkózók központja, nyáron pedig a közelben működő Libegő vonz sok látogatót. Nevét egy egykori bükkfáról kapta, amely alatt operaénekesek adták elő a Norma című opera áriáit.",
      ro: "Normafa este cea mai populară destinație de excursie din munții Buda, oferind relaxare direct deasupra Budapestei. Locul este cunoscut pentru traseele sale extinse de drumeție și vederea panoramică asupra capitalei. Iarna este un centru pentru schiori și amatorii de săniuș, iar vara telescaunul (Libegő) atrage numeroși vizitatori. Numele provine de la un fag istoric sub care artiștii de operă obișnuiau să cânte.",
      en: "Normafa is the most popular recreational spot in the Buda Hills, offering a quick escape directly above the capital. It is renowned for its extensive walking trails and breathtaking panoramic views of Budapest. In winter, it serves as a hub for skiing and sledding, while in summer, the nearby Chairlift (Libegő) is a major attraction. The area was named after an ancient beech tree where opera singers once performed.",
    },
    factsAdvanced: {
      de: ["Der Name entstand nach einer Opernaufführung im Jahr 1840.", "Die berühmte 'Norma-Buche' fiel im Jahr 1927 nach einem Sturm.", "Der höchste Punkt liegt in der Nähe auf dem János-hegy (527 m).", "Die erste Sesselbahn Ungarns (Libegő) wurde 1970 eröffnet.", "Die Kindereisenbahn hält ebenfalls in der Nähe der Normafa.", "Das Gebiet ist seit dem 19. Jahrhundert ein beliebtes Erholungsgebiet."],
      hu: ["A név egy 1840-es opera-előadás után honosodott meg.", "A híres 'Norma-fa' bükkfa 1927-ben dőlt ki egy vihar után.", "A közelben található a János-hegy, a főváros legmagasabb pontja (527 m).", "Az ország első libegőjét 1970-ben adták át a közelben.", "A Gyermekvasút egyik megállója is a Normafa közelében található.", "A terület már a 19. század közepe óta népszerű üdülőhely."],
      ro: ["Numele s-a încetățenit după o reprezentație de operă în 1840.", "Faimosul fag 'Norma' s-a prăbușit în 1927 în urma unei furtuni.", "Cel mai înalt punct din apropiere este dealul János (527 m).", "Primul telescaun din Ungaria (Libegő) a fost deschis aici în 1970.", "Calea ferată a copiilor are o stație în apropiere de Normafa.", "Zona este un loc de recreere popular încă din secolul al XIX-lea."],
      en: ["The name was established after an opera performance in 1840.", "The famous 'Norma tree' fell in 1927 following a storm.", "The nearby János Hill is the highest point in Budapest (527 m).", "The first chairlift in Hungary (Libegő) opened nearby in 1970.", "The Children's Railway has a popular station near Normafa.", "The area has been a beloved resort spot since the mid-19th century."],
    },
  },
    {
    id: "vajdahunyad-vara-poi",
    type: "historical",
    parent: "budapest",
    coords: [19.08, 47.51],
    name: {"de": "Burg Vajdahunyad", "hu": "Vajdahunyad vára", "ro": "Castelul Vajdahunyad", "en": "Vajdahunyad Castle"},
    image: "/geo-images/hungary/vajdahunyad-vara.webp",
    description: {"de": "Die Burg Vajdahunyad im Stadtwäldchen vereint die bedeutendsten Baustile der ungarischen Geschichte.", "hu": "A városligeti Vajdahunyad vára a magyar történelem legfontosabb építészeti stílusait ötvözi.", "ro": "Castelul Vajdahunyad din Parcul Orașului îmbină cele mai importante stiluri arhitecturale maghiare.", "en": "The Vajdahunyad Castle in the City Park combines the most significant architectural styles of Hungary."},
    facts: {"de": ["Wurde ursprünglich aus Holz für die Millenniumsfeier 1896 erbaut und später versteinert.", "Beherbergt heute das größte landwirtschaftliche Museum in ganz Mitteleuropa."], "hu": ["Eredetileg fából épült az 1896-os millenniumi ünnepségre, később építették fel tartós anyagból.", "Ma itt található Közép-Európa legnagyobb mezőgazdasági múzeuma."], "ro": ["Construit inițial din lemn pentru festivitățile mileniului din 1896 și ulterior din piatră.", "Găzduiește astăzi cel mai mare muzeu al agriculturii din Europa Centrală."], "en": ["Originally built from wood for the 1896 Millennial Exhibition and later rebuilt in stone.", "Today it houses the largest agricultural museum in Central Europe."]},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Vajdahunyad vára a budapesti Városliget mesebeli építménye, amely az 1896-os millenniumi ünnepségekre épült azzal a céllal, hogy bemutassa a magyar építészet ezeréves fejlődését. Az Alpár Ignác által tervezett épületegyüttes különböző történelmi stílusokat ötvöz: látható rajta a román kori jáki templom kapuja, gótikus és reneszánsz palotaszárnyak, valamint barokk kupolák. Nevét a legismertebb részéről, az erdélyi Vajdahunyad várát mintázó homlokzatról kapta. A vár udvarán áll az Anonymous szobra, Budapest egyik legtitokzatosabb emlékműve. Az épületben ma a Magyar Mezőgazdasági Múzeum működik, a vár körüli tó pedig nyáron csónakázásra, télen pedig korcsolyázásra csábítja a Városliget látogatóit.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vár eredetileg fából és kartonból készült az ünnepségekre, de annyira népszerű lett, hogy kőből újjáépítették.",
        "Az épületegyüttesen 21 különböző magyarországi történelmi épület részlete ismerhető fel.",
        "A várudvaron található Anonymous-szoborhoz az a legenda fűződik, hogy aki megérinti az író tollát, tehetséges lesz.",
        "Vajdahunyad vára a világ egyik legnagyobb mezőgazdasági szakmúzeumának ad otthont.",
        "A vár körüli Városligeti-tó télen Európa egyik legszebb szabadtéri műjégpályájává alakul."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "matyas-templom-poi",
    type: "historical",
    parent: "budapest",
    coords: [19.03, 47.50],
    name: {"de": "Matthiaskirche", "hu": "Mátyás-templom", "ro": "Biserica Mátyás", "en": "Matthias Church"},
    image: "/geo-images/hungary/matyas-templom.webp",
    description: {"de": "Die Matthiaskirche im Burgviertel ist eine der prachtvollsten und geschichtsträchtigsten Kirchen des Landes.", "hu": "A budai várnegyedben álló Mátyás-templom az ország egyik legszebb és leggazdagabb múltú temploma.", "ro": "Biserica Mátyás din cartierul cetății este una dintre cele mai splendide și istorice biserici din țară.", "en": "The Matthias Church in the Castle District is one of the most magnificent and historic churches in the country."},
    facts: {"de": ["Diente über Jahrhunderte als Krönungskirche der ungarischen Könige.", "Das farbenfrohe Dach aus Zsolnay-Ziegeln ist ein weithin bekanntes Markenzeichen."], "hu": ["Évszázadokon keresztül a magyar királyok koronázási helyszíneként szolgált.", "A színes Zsolnay-cserepekből álló tetőzete a templom egyik legismertebb védjegye."], "ro": ["A servit timp de secole ca biserică de încoronare a regilor maghiari.", "Acoperișul colorat din țiglă Zsolnay este o emblemă cunoscută peste tot."], "en": ["Served as the coronation church for Hungarian kings for centuries.", "The colorful roof made of Zsolnay tiles is a widely recognized landmark."]},
  
    descriptionAdvanced: {
      "de": "",
      "hu": "A Mátyás-templom, hivatalos nevén a Budavári Nagyboldogasszony-templom, a Budai Várnegyed és Budapest egyik legfontosabb történelmi és vallási szimbóluma. A 13. században alapított templom az évszázadok során a magyar királyok koronázási helyszínévé és esküvőik színterévé vált, nevét pedig a népszerű Mátyás királyról kapta, aki jelentősen bővíttette az épületet. A török hódoltság alatt mecsetként használták, majd a 19. század végén Schulek Frigyes vezetésével nyerte el mai, lenyűgöző neogótikus formáját. A templom tetőzetét díszítő színes Zsolnay-cserepek és a belső terek gazdag festése egyedülálló látványt nyújt. Itt található a magyar királyi pár, III. Béla és Antiochiai Anna sírhelye is, s a templom ma is fontos egyházi és zenei események otthona.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt koronázták meg az utolsó két magyar királyt, Ferenc Józsefet és IV. Károlyt.",
        "A templom déli tornya, a Mátyás-torony 78 méter magas, és tetején a hollós címer látható.",
        "A tetőzetet borító színes mázas cserepek a pécsi Zsolnay-gyárból származnak.",
        "A templom belső falfestéseit olyan híres művészek készítették, mint Lotz Károly és Székely Bertalan.",
        "A templomban ma is működik egy egyháztörténeti gyűjtemény, ahol a koronázási jelvények másolatai is láthatók."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balaton-to-second",
    type: "lake",
    parent: "veszprem",
    coords: [17.72, 46.84],
    name: {"de": "Plattensee", "hu": "Balaton", "ro": "Lacul Balaton", "en": "Lake Balaton"},
    image: "/geo-images/hungary/balaton-to.webp",
    description: {"de": "Der größte See Mitteleuropas und ein beliebtes Urlaubsziel.", "hu": "Közép-Európa legnagyobb tava és népszerű nyaralóhely.", "ro": "Cel mai mare lac din Europa Centrală și o destinație populară de vacanță.", "en": "The largest lake in Central Europe and a popular holiday destination."},
    facts: {"de": ["Oft als das 'Ungarische Meer' bezeichnet.", "Berühmt für seine flachen, warmen Gewässer."], "hu": ["Gyakran a 'Magyar tengerként' emlegetik.", "Híres sekély, meleg vizéről."], "ro": ["Adesea numit 'Marea Maghiară'.", "Faimos pentru apele sale puțin adânci și calde."], "en": ["Often referred to as the 'Hungarian Sea'.", "Famous for its shallow, warm waters."]},
    descriptionAdvanced: {
      de: "Der Plattensee, oder Balaton, ist der größte Binnensee Mitteleuropas und das wichtigste Tourismuszentrum Ungarns. Mit einer Fläche von fast 600 Quadratkilometern bietet er vielfältige Möglichkeiten für Segler, Badegäste und Weinliebhaber. Das Nordufer ist durch vulkanische Hügel und Weinberge geprägt, während das Südkurfer für seine flachen Sandstrände bekannt ist. Die Region ist zudem für ihre einzigartige Flora und Fauna geschützt.",
      hu: "A Balaton Közép-Európa legnagyobb édesvizű tava és Magyarország legfontosabb turisztikai célpontja. Közel 600 négyzetkilométeres vízfelülete ideális helyszínt biztosít a vitorlázáshoz, fürdőzéshez és horgászathoz. Az északi part vulkanikus tanúhegyeiről és borvidékeiről híres, míg a déli part sekély vizeiről és homokos strandjairól ismert. A tó környéke számos természetvédelmi területnek ad otthont.",
      ro: "Lacul Balaton este cel mai mare lac cu apă dulce din Europa Centrală și principalul centru turistic al Ungariei. Cu o suprafață de aproape 600 de kilometri pătrați, oferă oportunități diverse pentru navigație, scăldat și pescuit. Malul nordic este caracterizat de dealuri vulcanice și podgorii, în timp ce malul sudic este cunoscut pentru plajele sale cu nisip și apă puțin adâncă. Regiunea găzduiește numeroase rezervații naturale.",
      en: "Lake Balaton is the largest freshwater lake in Central Europe and Hungary's premier tourist destination. Covering nearly 600 square kilometers, it provides ideal conditions for sailing, swimming, and fishing. The northern shore is famous for its volcanic hills and vineyards, while the southern shore is known for its shallow waters and sandy beaches. The region is also home to several protected nature reserves and national parks.",
    },
    factsAdvanced: {
      de: ["Die Gesamtlänge des Sees beträgt etwa 77 Kilometer.", "An der tiefsten Stelle bei Tihany ist der See ca. 12 Meter tief.", "Die durchschnittliche Wassertiefe liegt bei nur 3,3 Metern.", "Der See ist schätzungsweise 15.000 Jahre alt.", "Jedes Jahr findet hier das berühmte 'Blaues Band' Segelrennen statt.", "Das Südufer ist etwa 70 Kilometer lang."],
      hu: ["A tó teljes hossza megközelítőleg 77 kilométer.", "A legmélyebb pontja a Tihanyi-kútnál található, kb. 12 méter.", "A víz átlagos mélysége csupán 3,3 méter.", "A tó kialakulása körülbelül 15 000 évvel ezelőtt kezdődött.", "Minden évben itt rendezik meg a Kékszalag vitorlásversenyt.", "A déli part mentén a víz mélysége lassan növekszik."],
      ro: ["Lungimea totală a lacului este de aproximativ 77 de kilometri.", "Punctul cel mai adânc se află la Tihany și are cca. 12 metri.", "Adâncimea medie a apei este de doar 3,3 metri.", "Lacul s-a format în urmă cu aproximativ 15.000 de ani.", "Anual are loc aici competiția de navigație 'Panglica Albastră'.", "Malul sudic are o lungime de aproximativ 70 de kilometri."],
      en: ["The total length of the lake is approximately 77 kilometers.", "The deepest point, near Tihany, is about 12 meters deep.", "The average depth of the water is only 3.3 meters.", "The lake was formed approximately 15,000 years ago.", "It hosts the annual 'Blue Ribbon' (Kékszalag) sailing regatta.", "The southern shore is famous for its long, shallow beaches."],
    },
  },
  {
    id: "baradla-barlang",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.49, 48.47],
    name: {"de": "Baradla-Höhle", "hu": "Baradla-barlang", "ro": "Peștera Baradla", "en": "Baradla Cave"},
    image: "/geo-images/hungary/baradla-barlang.webp",
    description: {"de": "Ein riesiges Tropfsteinhöhlensystem im Nationalpark Aggtelek.", "hu": "Hatalmas cseppkőbarlang-rendszer az Aggteleki Nemzeti Parkban.", "ro": "Un sistem uriaș de peșteri cu stalactite în Parcul Național Aggtelek.", "en": "A huge stalactite cave system in the Aggtelek National Park."},
    facts: {"de": ["Teil des UNESCO-Welterbes.", "Berühmt für beeindruckende Gesteinsformationen."], "hu": ["Az UNESCO világörökség része.", "Lenyűgöző kőzetformációiról híres."], "ro": ["Parte a Patrimoniului Mondial UNESCO.", "Faimoasă pentru formațiunile sale stâncoase impresionante."], "en": ["Part of the UNESCO World Heritage.", "Famous for its impressive rock formations."]},
  
    descriptionAdvanced: {
      "de": "Die Baradla-Höhle bei Aggtelek ist das größte Tropfsteinhöhlensystem Ungarns und gehört zum UNESCO-Weltkulturerbe. Sie erstreckt sich über 25 Kilometer bis unter das Staatsgebiet der Slowakei und beeindruckt durch gigantische Hallen. In der 'Riesenhalle' können Besucher den höchsten Tropfstein des Landes bewundern, der über Jahrtausende gewachsen ist. Die außergewöhnliche Akustik des 'Konzertsaals' macht klassische Konzerte in der Höhle zu einem mystischen Erlebnis. Die Höhle belegt, dass Menschen bereits in der Jungsteinzeit dieses unterirdische Labyrinth nutzten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Baradla-Höhle ist Teil eines grenzüberschreitenden UNESCO-Weltnaturerbes.", "Einige der Tropfsteinformationen sind schätzungsweise über 200.000 Jahre alt.", "Die Temperatur in der Höhle beträgt das ganze Jahr über konstant etwa 10 Grad.", "Der größte Tropfstein der Höhle, die 'Sternwarte', ist über 19 Meter hoch."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hortobagyi-nemzeti-park",
    type: "landmark",
    parent: "hajdu-bihar",
    coords: [21.09, 47.58],
    name: {"de": "Nationalpark Hortobágy", "hu": "Hortobágyi Nemzeti Park", "ro": "Parcul Național Hortobágy", "en": "Hortobágy National Park"},
    image: "/geo-images/hungary/hortobagyi-nemzeti-park.webp",
    description: {"de": "Das größte Naturschutzgebiet Ungarns und ein Symbol der Puszta.", "hu": "Magyarország legnagyobb természetvédelmi területe és a puszta szimbóluma.", "ro": "Cea mai mare rezervație naturală din Ungaria și un simbol al pustei.", "en": "Hungary's largest nature reserve and a symbol of the puszta."},
    facts: {"de": ["Bekannt für die Neunbogige Brücke.", "Heimat vieler geschützter Vogelarten."], "hu": ["A Kilenclyukú hídról ismert.", "Számos védett madárfaj otthona."], "ro": ["Cunoscut pentru Podul cu nouă arcuri.", "Casa multor specii de păsări protejate."], "en": ["Known for the Nine-holed Bridge.", "Home to many protected bird species."]},
  
    descriptionAdvanced: {
      "de": "Der Nationalpark Hortobágy repräsentiert die ursprüngliche Puszta-Landschaft und ist ein geschütztes UNESCO-Welterbe. Die unendliche Weite der Grassteppe wird durch charakteristische Ziehbrunnen und traditionelle Hirtenkultur geprägt. Der Park ist Lebensraum für seltene Tierrassen wie das graue Steppenrind, Zackelschafe und Nonius-Pferde. Spektakulär ist der herbstliche Kranichzug, wenn Zehntausende Vögel in den Feuchtgebieten rasten. Hortobágy zeigt eindrucksvoll die tiefen kulturellen Wurzeln Ungarns in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hortobágy ist die größte zusammenhängende Naturgrassteppe in Europa.", "Der Nationalpark ist als Kulturlandschaft Teil des UNESCO-Weltkulturerbes.", "Das Gebiet beherbergt die längste Steinbrücke Ungarns, die Neunbögige Brücke.", "Im Herbst ist der Park einer der bedeutendsten Kranichrastplätze weltweit."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bukki-nemzeti-park",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.52, 48.05],
    name: {"de": "Nationalpark Bükk", "hu": "Bükki Nemzeti Park", "ro": "Parcul Național Bükk", "en": "Bükk National Park"},
    image: "/geo-images/hungary/bukki-nemzeti-park.webp",
    description: {"de": "Ein waldreiches Berggebiet mit Höhlen und malerischen Tälern.", "hu": "Erdőkben gazdag hegyvidék barlangokkal és festői völgyekkel.", "ro": "O zonă montană împădurită cu peșteri și văi pitorești.", "en": "A heavily forested mountainous area with caves and picturesque valleys."},
    facts: {"de": ["Beherbergt den wunderschönen Szalajka-Tal.", "Einer der ersten Nationalparks Ungarns."], "hu": ["Itt található a gyönyörű Szalajka-völgy.", "Magyarország egyik első nemzeti parkja."], "ro": ["Găzduiește frumoasa Vale Szalajka.", "Unul dintre primele parcuri naționale din Ungaria."], "en": ["Home to the beautiful Szalajka Valley.", "One of Hungary's first national parks."]},
  
    descriptionAdvanced: {
      "de": "Der Nationalpark Bükk schützt eine spektakuläre Mittelgebirgslandschaft mit dichten Wäldern und bizarren Kalksteinfelsen. Das Bükk-Plateau ist eine einzigartige Karsthochfläche mit tiefen Dolinen und seltenen alpinen Pflanzenarten. Über 1000 Höhlen sind im Kalkstein des Gebirges bekannt, darunter wichtige prähistorische Fundstätten. Der Park beherbergt eine reiche Fauna, wie den Kaiseradler und die seltene ungarische Wildkatze. Mit seinen weiten Ausblicken von den weißen Felsen bietet der Nationalpark dramatische Naturerlebnisse.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark Bükk ist das waldreichste Naturschutzgebiet in Ungarn.", "Das Gebirge beherbergt das am höchsten gelegene Höhlensystem des Landes.", "Im Nationalpark befindet sich die höchste öffentliche Straße Ungarns.", "Die Region ist bekannt für ihre Bestände an frei lebenden Mufflons."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "ferto-to",
    type: "lake",
    parent: "gyor-moson-sopron",
    coords: [16.73, 47.74],
    name: {"de": "Neusiedler See", "hu": "Fertő-tó", "ro": "Lacul Neusiedl", "en": "Lake Neusiedl"},
    image: "/geo-images/hungary/ferto-to.webp",
    description: {"de": "Der westlichste Steppensee Europas, an der Grenze zu Österreich.", "hu": "Európa legnyugatibb sztyepptava az osztrák határon.", "ro": "Cel mai vestic lac de stepă din Europa, la granița cu Austria.", "en": "The westernmost steppe lake in Europe, on the border with Austria."},
    facts: {"de": ["Einzigartige Flora und Fauna.", "UNESCO-Welterbestätte."], "hu": ["Egyedülálló növény- és állatvilág.", "UNESCO világörökségi helyszín."], "ro": ["Floră și faună unice.", "Sit al Patrimoniului Mondial UNESCO."], "en": ["Unique flora and fauna.", "UNESCO World Heritage site."]},
  
    descriptionAdvanced: {
      "de": "Der Neusiedler See (Fertő-tó) ist der westlichste Steppensee Europas und ein grenzüberschreitendes UNESCO-Welterbe. Der riesige Schilfgürtel und das extrem flache Wasser bieten Lebensraum für Tausende von Wasservögeln. Die Kulturlandschaft um den See zeigt ein harmonisches Miteinander von Weinbau, Geschichte und unberührter Natur. Auf ungarischer Seite ist das prachtvolle Schloss Esterházy in Fertőd das kulturelle Highlight. Der See ist ein Paradies für Radfahrer, Segler und Vogelbeobachter in einer einzigartigen Grenzlandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Neusiedler See ist der zweitgrößte Steppensee in Mitteleuropa.", "Der Schilfgürtel des Sees ist ein international bedeutendes Vogelschutzgebiet.", "An vielen Stellen ist der See kaum tiefer als einen halben Meter.", "Die gesamte Fertő-Region gehört seit 2001 zum UNESCO-Weltkulturerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "velencei-to",
    type: "lake",
    parent: "fejer",
    coords: [18.59, 47.20],
    name: {"de": "Velencer See", "hu": "Velencei-tó", "ro": "Lacul Velence", "en": "Lake Velence"},
    image: "/geo-images/hungary/velencei-to.webp",
    description: {"de": "Einer der wärmsten Seen in Europa, ideal für Erholung.", "hu": "Európa egyik legmelegebb tava, ideális a pihenésre.", "ro": "Unul dintre cele mai calde lacuri din Europa, ideal pentru relaxare.", "en": "One of the warmest lakes in Europe, ideal for recreation."},
    facts: {"de": ["Wird aufgrund der vielen Sonnenstunden 'See der Sonne' genannt.", "Beliebt bei Seglern und Surfern."], "hu": ["A magas napsütéses órák száma miatt a 'Napfény tavának' is hívják.", "Népszerű a vitorlázók és szörfözők körében."], "ro": ["Numit 'Lacul Soarelui' datorită numărului mare de ore de soare.", "Popular printre navigatori și surferi."], "en": ["Called the 'Lake of Sunshine' due to the high number of sunny hours.", "Popular among sailors and surfers."]},
  
    descriptionAdvanced: {
      "de": "Der Velence-See, bekannt als 'See des Sonnenscheins', ist einer der wärmsten Binnenseen in Mitteleuropa. Aufgrund seiner geringen Tiefe erreicht das Wasser im Sommer Temperaturen von über 26 Grad und lädt zum Baden ein. Die dichten Schilfgebiete bieten Refugien für seltene Vogelarten und schwimmende Inseln aus Vegetation. Am Nordufer erheben sich die Velence-Berge mit ihren bizarren Granitfelsformationen, die ein tolles Wandergebiet sind. Der See ist ein ideales Ziel für Erholungssuchende, Wassersportler und Naturbeobachter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Velence-See ist mit durchschnittlich 1,5 Metern Tiefe extrem flach.", "Die Wassertemperaturen gehören im Sommer zu den höchsten in Europa.", "Etwa ein Drittel der Wasserfläche ist als Vogelschutzgebiet streng geschützt.", "Die Granitsteine am Nordufer werden aufgrund ihrer Form 'Wackelsteine' genannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szalajka-volgy",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.39, 48.10],
    name: {"de": "Szalajka-Tal", "hu": "Szalajka-völgy", "ro": "Valea Szalajka", "en": "Szalajka Valley"},
    image: "/geo-images/hungary/szalajka-volgy.webp",
    description: {"de": "Ein malerisches Tal im Bükk-Gebirge, berühmt für seinen Wasserfall.", "hu": "Festői völgy a Bükkben, híres a Fátyol-vízesésről.", "ro": "O vale pitorească în Munții Bükk, faimoasă pentru cascada sa.", "en": "A picturesque valley in the Bükk Mountains, famous for its waterfall."},
    facts: {"de": ["Besitzt eine historische Waldbahn.", "Bekannt für den Fátyol-Wasserfall."], "hu": ["Történelmi erdei kisvasúttal rendelkezik.", "Híres a Fátyol-vízesésről."], "ro": ["Are o cale ferată forestieră istorică.", "Cunoscut pentru cascada Fátyol."], "en": ["Has a historic forest railway.", "Known for the Fátyol Waterfall."]},
    descriptionAdvanced: {
      de: "Das Szalajka-Tal ist eines der am besten erschlossenen Wandergebiete im Bükk-Gebirge bei Szilvásvárad. Es beherbergt den 17 Meter hohen Fátyol-Wasserfall, der über terrassenartige Kalktuffstufen herabstürzt. Das Tal ist zudem für seine Forellenteiche und das Freilicht-Waldmuseum bekannt, das die Geschichte der Forstwirtschaft dokumentiert.",
      hu: "A Szalajka-völgy a Bükk-hegység egyik legnépszerűbb kirándulóhelye Szilvásvárad közvetlen közelében. Legismertebb látványossága a 17 méter magas Fátyol-vízesés, amely mésztufa lépcsőkön zúdul alá a völgy mélyébe. A terület híres pisztrángtenyésztéséről, erdei kisvasútjáról és a szabadtéri erdei múzeumról is.",
      ro: "Valea Szalajka este una dintre cele mai vizitate zone montane din Munții Bükk, situată lângă localitatea Szilvásvárad. Găzduiește Cascada Fátyol, care coboară peste 17 metri pe terase de travertin formate natural. Valea este renumită pentru crescătoriile de păstrăv, calea ferată cu ecartament îngust și muzeul forestier în aer liber.",
      en: "Szalajka Valley is one of the most developed hiking destinations in the Bükk Mountains, located near Szilvásvárad. It features the 17-meter-high Fátyol Waterfall, which flows down over unique limestone tuff terraces. The valley is also famous for its trout breeding ponds, a forest railway, and an open-air museum of forestry history.",
    },
    factsAdvanced: {
      de: ["Die Fátyol-Wasserfall-Kaskade ist 17 Meter hoch.", "Die Szalajka-Schmalspurbahn befördert jährlich über 200.000 Passagiere.", "In der Sipovics-Quelle entspringen 2.000 Liter Wasser pro Minute.", "Das Tal beherbergt eine bedeutende Zuchtstation für Bachforellen.", "Das Waldmuseum wurde 1974 als Freilichtanlage eröffnet.", "Der höchste Punkt der Umgebung ist der Istállós-kő mit 959 Metern."],
      hu: ["A Fátyol-vízesés hossza összesen 17 méter.", "Az erdei kisvasút évente több mint 200 ezer utast szállít.", "A Szalajka-forrás percenként 2000 liter vizet ad.", "A völgyben 1906 óta folyik intenzív pisztrángtenyésztés.", "Az Erdei Múzeumot 1974-ben alapították a völgyben.", "Az Istállós-kői-barlangban 30 ezer éves leleteket találtak."],
      ro: ["Cascada Fátyol are o înălțime totală de 17 metri.", "Calea ferată forestieră transportă peste 200.000 de turiști anual.", "Izvorul Szalajka debitează aproximativ 2.000 de litri pe minut.", "Păstrăvăriile din vale funcționează neîntrerupt din anul 1906.", "Muzeul Forestier în aer liber a fost deschis publicului în 1974.", "Peștera Istállós-kő conține urme de locuire vechi de 30.000 de ani."],
      en: ["The Fátyol Waterfall cascades over a distance of 17 meters.", "The forest railway carries more than 200,000 passengers annually.", "The Szalajka spring produces 2,000 liters of water per minute.", "Trout breeding in the valley has been continuous since 1906.", "The Open-Air Forestry Museum was established in 1974.", "Prehistoric remains from 30,000 years ago were found in a local cave."],
    },
  },
  {
    id: "borzsony",
    type: "mountain",
    parent: "pest",
    coords: [18.91, 47.92],
    name: {"de": "Börzsöny", "hu": "Börzsöny", "ro": "Börzsöny", "en": "Börzsöny"},
    image: "/geo-images/hungary/borzsony.webp",
    description: {"de": "Ein vulkanisches Gebirge nördlich von Budapest mit dichten Wäldern.", "hu": "Vulkáni hegység Budapesttől északra sűrű erdőkkel.", "ro": "Un munte vulcanic la nord de Budapesta cu păduri dense.", "en": "A volcanic mountain range north of Budapest with dense forests."},
    facts: {"de": ["Der höchste Gipfel ist der Csóványos.", "Bietet tolle Aussichten auf das Donauknie."], "hu": ["Legmagasabb csúcsa a Csóványos.", "Nagyszerű kilátást nyújt a Dunakanyarra."], "ro": ["Cel mai înalt vârf este Csóványos.", "Oferă vederi minunate asupra Cotului Dunării."], "en": ["The highest peak is Csóványos.", "Offers great views of the Danube Bend."]},
  
    descriptionAdvanced: {
      "de": "Das Börzsöny-Gebirge im Norden Ungarns ist ein fast kreisrundes Vulkangebirge von wilder Schönheit. Es umschließt eine der größten Calderas Europas und bietet dichte Wälder sowie tiefe Täler. Das Gebirge ist ein Paradies für Wanderer, die Einsamkeit und unberührte Natur suchen. Markante Gipfel wie der Csóványos bieten weite Ausblicke bis zur Hohen Tatra. Zahlreiche saubere Bergbäche und eine reiche Fauna prägen dieses wertvolle Naturschutzgebiet am Donauknie.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Börzsöny-Gebirge ist vulkanischen Ursprungs mit einer Ringstruktur.", "In den abgelegenen Wäldern leben heute wieder Luchse.", "Die Region beherbergt einige der saubersten Quellen Ungarns.", "Királyrét ist ein beliebter Ausgangspunkt für historische Waldbahnfahrten."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "villanyi-borvidek",
    type: "landmark",
    parent: "baranya",
    coords: [18.45, 45.86],
    name: {"de": "Weinregion Villány", "hu": "Villányi borvidék", "ro": "Regiunea viticolă Villány", "en": "Villány Wine Region"},
    image: "/geo-images/hungary/villanyi-borvidek.webp",
    description: {"de": "Eine der berühmtesten Rotweinregionen Ungarns im Süden.", "hu": "Magyarország egyik leghíresebb déli vörösborvidéke.", "ro": "Una dintre cele mai faimoase regiuni de vin roșu din Ungaria în sud.", "en": "One of the most famous red wine regions in Hungary in the south."},
    facts: {"de": ["Produziert erstklassige Cabernet Franc Weine.", "Verfügt über malerische Weinkellerreihen."], "hu": ["Kiváló minőségű Cabernet Franc borokat termel.", "Festői pincesorokkal rendelkezik."], "ro": ["Produce vinuri Cabernet Franc de calitate superioară.", "Are șiruri pitorești de crame."], "en": ["Produces premium Cabernet Franc wines.", "Features picturesque rows of wine cellars."]},
  
    descriptionAdvanced: {
      "de": "Die Weinregion Villány im äußersten Süden Ungarns gilt als die beste Rotweinregion des Landes. Das submediterrane Klima und die kalkhaltigen Böden bringen vollmundige Weine von Weltklasse hervor. Besonders der Villányi Franc hat die Region international bekannt gemacht. Die malerischen Kellergassen in Villány und Palkonya laden zu Verkostungen in historischem Ambiente ein. Villány war die erste Region Ungarns, die konsequenten Weintourismus und Herkunftsschutz etablierte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Villány ist die südlichste und sonnigste Weinregion Ungarns.", "Die Region ist berühmt für erstklassige Cabernet Franc und Merlot Weine.", "Die historische Kellergasse von Palkonya steht unter nationalem Denkmalschutz.", "In Villány wurde 1988 der erste Weinstraßenverein Ungarns gegründet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "egri-var",
    type: "historical",
    parent: "eger",
    coords: [20.38, 47.90],
    name: {"de": "Burg Eger", "hu": "Egri vár", "ro": "Castelul Eger", "en": "Castle of Eger"},
    image: "/geo-images/hungary/egri-var.webp",
    description: {"de": "Eine historische Burg, die 1552 der türkischen Belagerung standhielt.", "hu": "Történelmi vár, amely 1552-ben ellenállt a török ostromnak.", "ro": "Un castel istoric care a rezistat asediului turcesc din 1552.", "en": "A historical castle that withstood the Turkish siege in 1552."},
    facts: {"de": ["Schauplatz von Gárdonyis Roman 'Sterne von Eger'.", "Ein wichtiges nationales Symbol."], "hu": ["Gárdonyi Géza 'Egri csillagok' című regényének helyszíne.", "Fontos nemzeti szimbólum."], "ro": ["Cadrul romanului lui Gárdonyi 'Stelele din Eger'.", "Un simbol național important."], "en": ["Setting of Gárdonyi's novel 'Eclipse of the Crescent Moon'.", "An important national symbol."]},
  
    descriptionAdvanced: {
      "de": "Die Burg von Eger ist ein Symbol für heldenhaften Widerstand und nationalen Stolz in Ungarn. Im Jahr 1552 verteidigte eine kleine Garnison unter István Dobó die Festung erfolgreich gegen eine gewaltige osmanische Übermacht. Die Burgmauern beherbergen heute umfangreiche Ausstellungen zum mittelalterlichen Leben und zur Belagerungsgeschichte. Besucher können die unterirdischen Kasematten und die Ruinen der einstigen Kathedrale erkunden. Von der Burg aus bietet sich ein herrlicher Blick über das barocke Stadtbild von Eger.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die erfolgreiche Verteidigung von 1552 stoppte vorerst den türkischen Vormarsch.", "In der Burg ruht der Schriftsteller Géza Gárdonyi, Autor von 'Die Sterne von Eger'.", "Das Museum zeigt originale Waffen und Ausrüstungen aus der Türkenzeit.", "Die Burg ist Schauplatz zahlreicher historischer Ritterspiele."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "visegradi-fellegvar",
    type: "historical",
    parent: "visegrad",
    coords: [18.98, 47.79],
    name: {"de": "Zitadelle Visegrád", "hu": "Visegrádi Fellegvár", "ro": "Cetatea Visegrád", "en": "Visegrád Citadel"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Eine mittelalterliche Festung mit atemberaubendem Blick auf das Donauknie.", "hu": "Középkori erődítmény, lenyűgöző kilátással a Dunakanyarra.", "ro": "O cetate medievală cu o vedere uluitoare asupra Cotului Dunării.", "en": "A medieval fortress with a breathtaking view of the Danube Bend."},
    facts: {"de": ["Wurde im 13. Jahrhundert erbaut.", "Bewahrte einst die Heilige Krone Ungarns auf."], "hu": ["A 13. században épült.", "Egykor itt őrizték a Szent Koronát."], "ro": ["A fost construită în secolul al XIII-lea.", "A păstrat odată Sfânta Coroană a Ungariei."], "en": ["Built in the 13th century.", "Once kept the Holy Crown of Hungary."]},
  
    descriptionAdvanced: {
      "de": "Die Wolkenburg (Fellegvár) von Visegrád thront auf einem steilen Fels hoch über dem malerischen Donauknie. Die im 13. Jahrhundert errichtete Festung war über lange Zeit eine bevorzugte Residenz der ungarischen Könige. Sie diente zudem als sicherer Verwahrort für die ungarischen Krönungsinsignien. Das spektakuläre Panorama über die Donauschleife macht die Burg zu einem der meistfotografierten Orte Ungarns. In den Ausstellungsräumen wird die Geschichte der Jagd und des höfischen Lebens im Mittelalter lebendig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg beherbergte jahrhundertelang die heilige ungarische Stephanskrone.", "Visegrád war im 14. Jahrhundert der Ort des ersten 'Visegrád-Königstreffens'.", "Der Blick von der Oberburg gilt als das schönste Panorama an der Donau.", "Regelmäßige Mittelalter-Festivals locken Tausende Besucher auf den Burgberg."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szigetvari-var",
    type: "historical",
    parent: "szigetvar",
    coords: [17.79, 46.05],
    name: {"de": "Burg Szigetvár", "hu": "Szigetvári vár", "ro": "Castelul Szigetvár", "en": "Castle of Szigetvár"},
    image: "/geo-images/hungary/szigetvari-var.webp",
    description: {"de": "Bekannt für die heroische Verteidigung durch Miklós Zrínyi im Jahr 1566.", "hu": "Zrínyi Miklós hősies, 1566-os várvédelméről ismert.", "ro": "Cunoscut pentru apărarea eroică condusă de Miklós Zrínyi în 1566.", "en": "Known for the heroic defense by Miklós Zrínyi in 1566."},
    facts: {"de": ["Sultan Süleyman der Prächtige starb während der Belagerung.", "Ein Symbol des ungarischen Widerstands."], "hu": ["Nagy Szulejmán szultán az ostrom alatt hunyt el.", "A magyar ellenállás szimbóluma."], "ro": ["Sultanul Suleiman Magnificul a murit în timpul asediului.", "Un simbol al rezistenței maghiare."], "en": ["Sultan Suleiman the Magnificent died during the siege.", "A symbol of Hungarian resistance."]},
  
    descriptionAdvanced: {
      "de": "Die Burg von Szigetvár ist untrennbar mit der heldenhaften Belagerung von 1566 verbunden. Unter der Führung von Nikolaus Zrinyi leisteten die Verteidiger erbitterten Widerstand gegen das Heer von Sultan Süleyman dem Prächtigen. Während der Belagerung verstarb der gealterte Sultan in seinem Zelt vor der Festung. Heute ist die Burg ein Ort des Gedenkens und beherbergt Ausstellungen über die ungarisch-türkischen Kriege. Eine ehemalige Moschee im Inneren erinnert an die Zeit der osmanischen Herrschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szigetvár wird aufgrund des Opfergangs oft als das 'ungarische Thermopylae' bezeichnet.", "Nikolaus Zrinyi wird als einer der größten Nationalhelden Ungarns verehrt.", "Sultan Süleyman starb hier am Vorabend des Falls der Festung.", "In der Nähe befindet sich der ungarisch-türkische Freundschaftspark."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarvari-var",
    type: "historical",
    parent: "sarvar",
    coords: [16.93, 47.25],
    name: {"de": "Burg Sárvár", "hu": "Sárvári vár", "ro": "Castelul Sárvár", "en": "Castle of Sárvár"},
    image: "/geo-images/hungary/sarvari-var.webp",
    description: {"de": "Die Burg Nádasdy ist ein Meisterwerk der Renaissance-Architektur.", "hu": "A Nádasdy-vár a reneszánsz építészet remekműve.", "ro": "Castelul Nádasdy este o capodoperă a arhitecturii renascentiste.", "en": "Nádasdy Castle is a masterpiece of Renaissance architecture."},
    facts: {"de": ["Hier wurde das erste in Ungarn gedruckte Buch auf Ungarisch verlegt.", "Befindet sich im Stadtzentrum."], "hu": ["Itt nyomtatták az első magyar nyelvű könyvet Magyarországon.", "A városközpontban található."], "ro": ["Aici a fost tipărită prima carte în limba maghiară din Ungaria.", "Situat în centrul orașului."], "en": ["The first Hungarian book printed in Hungary was published here.", "Located in the city center."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Nádasdy in Sárvár ist eines der prachtvollsten Renaissanceschlösser in Westungarn. Die charakteristische fünfseitige Anlage ist von einem idyllischen Wassergraben und einem weitläufigen Park umgeben. Der monumentale Rittersaal beeindruckt durch seine riesigen Deckenfresken, die kriegerische Szenen darstellen. Die Burg beherbergt das Nádasdy-Museum mit einer einzigartigen Sammlung zur Geschichte der ungarischen Husaren. Sárvár war zudem ein bedeutendes geistiges Zentrum, in dem das erste Buch in ungarischer Sprache gedruckt wurde.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Nádasdy besitzt einen der schönsten barocken Festsäle des Landes.", "Im Jahr 1541 wurde hier das ungarische Neue Testament gedruckt.", "Das Burgmuseum beherbergt die weltweit einzige Husaren-Dauerausstellung.", "Das angrenzende Arboretum ist über 200 Jahre alt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "diosgyori-var",
    type: "historical",
    parent: "miskolc",
    coords: [20.69, 48.09],
    name: {"de": "Burg Diósgyőr", "hu": "Diósgyőri vár", "ro": "Castelul Diósgyőr", "en": "Castle of Diósgyőr"},
    image: "/geo-images/hungary/diosgyori-var.webp",
    description: {"de": "Eine mittelalterliche Burg, die oft als die Burg der Königinnen bezeichnet wird.", "hu": "Középkori vár, amelyet gyakran a királynék váraként emlegetnek.", "ro": "Un castel medieval, adesea numit Castelul Reginelor.", "en": "A medieval castle, often referred to as the Queens' Castle."},
    facts: {"de": ["War ein beliebtes Ziel von König Ludwig dem Großen.", "Wurde kürzlich umfassend restauriert."], "hu": ["Nagy Lajos király kedvelt tartózkodási helye volt.", "Nemrégiben nagyszabású felújításon esett át."], "ro": ["A fost o destinație populară pentru Regele Ludovic cel Mare.", "A fost restaurat recent pe scară largă."], "en": ["Was a popular destination for King Louis the Great.", "Has been extensively restored recently."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Diósgyőr in Miskolc war im Mittelalter traditionell der Witwensitz und die Lieblingsresidenz der ungarischen Königinnen. König Ludwig der Große baute die Festung im 14. Jahrhundert zu einem prachtvollen gotischen Palast aus. In den letzten Jahren wurde die Burg originalgetreu rekonstruiert und erstrahlt heute wieder in ihrem alten Glanz. Besonders beeindruckend ist die Ritterhalle, die einst eine der größten ihrer Art in Europa war. Historische Vorführungen und Ritterspiele lassen den Alltag an einem Königshof lebendig werden.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Diósgyőr war über Jahrhunderte das traditionelle Morgengabe-Geschenk für Königinnen.", "In der Burg befindet sich eine der größten Wachsfigurenausstellungen des Landes.", "Die Ritterhalle war im Mittelalter ein Zentrum der europäischen Diplomatie.", "Das jährliche Burgfestival gehört zu den wichtigsten Kulturevents der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "esztergomi-bazilika",
    type: "historical",
    parent: "esztergom",
    coords: [18.73, 47.79],
    name: {"de": "Basilika von Esztergom", "hu": "Esztergomi Bazilika", "ro": "Bazilica din Esztergom", "en": "Esztergom Basilica"},
    image: "/geo-images/hungary/esztergomi-bazilika.webp",
    description: {"de": "Die größte und höchste Kirche Ungarns mit monumentaler Architektur.", "hu": "Magyarország legnagyobb és legmagasabb temploma monumentális építészettel.", "ro": "Cea mai mare și cea mai înaltă biserică din Ungaria, cu o arhitectură monumentală.", "en": "Hungary's largest and tallest church with monumental architecture."},
    facts: {"de": ["Der Hauptsitz der katholischen Kirche in Ungarn.", "Das Altarbild ist das größte Gemälde auf einer einzigen Leinwand."], "hu": ["A magyar katolikus egyház központja.", "Oltárképe a világ legnagyobb egyetlen vászonra festett képe."], "ro": ["Sediul Bisericii Catolice din Ungaria.", "Imaginea altarului este cea mai mare pictură pe o singură pânză."], "en": ["The headquarters of the Catholic Church in Hungary.", "The altarpiece is the largest painting on a single canvas."]},
  
    descriptionAdvanced: {
      "de": "Die Basilika von Esztergom ist das größte Kirchenbauwerk Ungarns und das geistige Zentrum des Landes. Sie thront majestätisch auf dem Burgberg über der Donau und ist von weitem sichtbar. Das monumentale klassizistische Bauwerk beeindruckt durch seine gewaltige Kuppel und die prachtvolle Innenausstattung. In der Krypta ruhen bedeutende Kirchenfürsten, und die Schatzkammer bewahrt unschätzbare sakrale Kunstwerke auf. Von der Kuppelgalerie bietet sich ein atemberaubender Blick bis weit in die Slowakei hinein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Basilika ist die Kathedrale des ungarischen Primas und Erzbischofs.", "Das Altarbild ist das weltweit größte Gemälde auf einer einzigen Leinwand.", "Die Bakócz-Kapelle im Inneren ist ein Juwel der ungarischen Renaissance.", "Die Orgel der Basilika gehört zu den klanggewaltigsten Instrumenten Europas."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentendrei-skanzen",
    type: "historical",
    parent: "szentendre",
    coords: [19.04, 47.69],
    name: {"de": "Skanzen Szentendre", "hu": "Szentendrei Skanzen", "ro": "Skanzen Szentendre", "en": "Szentendre Skanzen"},
    image: "/geo-images/hungary/szentendrei-skanzen.webp",
    description: {"de": "Das größte ungarische Freilichtmuseum, das ländliche Architektur zeigt.", "hu": "A legnagyobb magyar szabadtéri néprajzi múzeum, amely a vidéki építészetet mutatja be.", "ro": "Cel mai mare muzeu în aer liber maghiar, prezentând arhitectura rurală.", "en": "The largest Hungarian open-air museum, showcasing rural architecture."},
    facts: {"de": ["Umfasst authentisch nachgebaute Dorfregionen.", "Organisiert traditionelle Feste und Programme."], "hu": ["Hitelesen újjáépített falusi tájegységeket mutat be.", "Hagyományos fesztiválokat és programokat szervez."], "ro": ["Prezintă regiuni de sate reconstruite autentic.", "Organizează festivaluri și programe tradiționale."], "en": ["Features authentically reconstructed village regions.", "Organizes traditional festivals and programs."]},
  
    descriptionAdvanced: {
      "de": "Das Ungarische Freilichtmuseum (Skanzen) in Szentendre ist das bedeutendste Museum für Volksarchitektur im Land. Auf einem riesigen Areal werden originale Bauernhäuser und Kirchen aus allen Regionen Ungarns präsentiert. Besucher können hier den Alltag der Landbevölkerung aus drei Jahrhunderten hautnah miterleben. In den Werkstätten werden traditionelle Handwerke wie Brotbacken und Töpfern live vorgeführt. Eine historische Museumsbahn verbindet die verschiedenen Regionen des Parks und macht den Besuch für Familien attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Skanzen umfasst über 300 historische Gebäude in zehn regionalen Einheiten.", "In dem Museum werden zahlreiche bedrohte Handwerkstechniken bewahrt.", "Jährlich finden hier große Volksfeste zu Ostern und Pfingsten statt.", "Das Museum wurde für seine pädagogische Arbeit international ausgezeichnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihanyi-apatsag",
    type: "historical",
    parent: "tihany",
    coords: [17.88, 46.91],
    name: {"de": "Abtei Tihany", "hu": "Tihanyi Apátság", "ro": "Abația Tihany", "en": "Tihany Abbey"},
    image: "/geo-images/hungary/tihanyi-apatsag.webp",
    description: {"de": "Eine Benediktinerabtei auf der Tihany-Halbinsel mit einer tausendjährigen Geschichte.", "hu": "Bencés apátság a Tihanyi-félszigeten, ezeréves történelemmel.", "ro": "O abație benedictină pe Peninsula Tihany cu o istorie de o mie de ani.", "en": "A Benedictine abbey on the Tihany Peninsula with a thousand-year history."},
    facts: {"de": ["Die Gründungsurkunde enthält die ältesten ungarischen Wörter.", "Bietet einen herrlichen Blick über den Plattensee."], "hu": ["Alapítólevele tartalmazza a legrégebbi magyar szavakat.", "Csodálatos kilátást nyújt a Balatonra."], "ro": ["Carta de fondare conține cele mai vechi cuvinte maghiare.", "Oferă o priveliște magnifică asupra Lacului Balaton."], "en": ["Its founding charter contains the oldest Hungarian words.", "Offers a magnificent view over Lake Balaton."]},
  
    descriptionAdvanced: {
      "de": "Die Benediktinerabtei von Tihany auf der gleichnamigen Halbinsel ist eines der bekanntesten Wahrzeichen am Plattensee. Gegründet im Jahr 1055, beherbergt sie eine romanische Krypta mit dem Grab von König Andreas I. Die barocke Doppelturmkirche bietet einen der schönsten Ausblicke über das tiefblaue Wasser des Sees. Die Abtei ist zudem ein bedeutender Ort für die ungarische Sprache, da ihre Gründungsurkunde die ältesten schriftlichen Wörter des Landes enthält. Die spirituelle Ruhe der Anlage und die umgebenden Lavendelfelder machen Tihany zu einem einzigartigen Ort.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Abtei beherbergt die einzige erhaltene Grabstätte eines Königs aus der Arpaden-Dynastie.", "Die Gründungsurkunde von 1055 ist das älteste Schriftdenkmal in ungarischer Sprache.", "Die prachtvollen barocken Schnitzereien im Inneren stammen von Sebastian Stuhlhof.", "Tihany ist berühmt für sein Echo, das an der Nordmauer der Abtei entsteht."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pannonhalmi-foapatsag",
    type: "historical",
    parent: "pannonhalma",
    coords: [17.76, 47.55],
    name: {"de": "Erzabtei Pannonhalma", "hu": "Pannonhalmi Főapátság", "ro": "Arhiabația Pannonhalma", "en": "Pannonhalma Archabbey"},
    image: "/geo-images/hungary/pannonhalmi-foapatsag.webp",
    description: {"de": "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum auf dem Martinsberg.", "hu": "UNESCO világörökség és spirituális központ a Márton-hegyen.", "ro": "Un sit al Patrimoniului Mondial UNESCO și centru spiritual pe Dealul Sf. Martin.", "en": "A UNESCO World Heritage site and spiritual center on St. Martin's Hill."},
    facts: {"de": ["Wurde im Jahr 996 gegründet.", "Verfügt über eine beeindruckende Bibliothek mit alten Handschriften."], "hu": ["996-ban alapították.", "Lenyűgöző könyvtára van régi kéziratokkal."], "ro": ["A fost fondată în anul 996.", "Are o bibliotecă impresionantă cu manuscrise vechi."], "en": ["Founded in 996.", "Features an impressive library with ancient manuscripts."]},
  
    descriptionAdvanced: {
      "de": "Die Erzabtei Pannonhalma, gegründet im Jahr 996, ist das älteste Kloster Ungarns und gehört zum UNESCO-Weltkulturerbe. Sie thront erhaben auf dem Heiligen Berg von Pannonien und ist das geistige Herz der ungarischen Benediktiner. Die Anlage vereint Baustile aus über einem Jahrtausend, von der romanischen Krypta bis zur klassizistischen Bibliothek. In der Bibliothek werden über 400.000 wertvolle Bände und unschätzbare historische Dokumente aufbewahrt. Die Mönche von Pannonhalma führen zudem eine lange Tradition im Weinbau und in der Kräuterkunde fort.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Pannonhalma ist das einzige Kloster Ungarns, das seit dem Mittelalter fast stetig besteht.", "Die Abtei betreibt ein international anerkanntes Elitegymnasium.", "Das Klosterweingut produziert preisgekrönte Weine nach alten Traditionen.", "Der Arzneikräutergarten der Abtei ist ein Zentrum der Naturheilkunde."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "holloko-ofalu",
    type: "historical",
    parent: "holloko",
    coords: [19.58, 47.99],
    name: {"de": "Altes Dorf Hollókő", "hu": "Hollókő Ófalu", "ro": "Satul vechi Hollókő", "en": "Hollókő Old Village"},
    image: "/geo-images/hungary/holloko-ofalu.webp",
    description: {"de": "Ein intaktes Palóczen-Dorf und UNESCO-Weltkulturerbe.", "hu": "Érintetlen palóc falu és UNESCO világörökségi helyszín.", "ro": "Un sat Palóc intact și un sit al Patrimoniului Mondial UNESCO.", "en": "An intact Palóc village and UNESCO World Heritage site."},
    facts: {"de": ["Bewahrt die Traditionen des 17. und 18. Jahrhunderts.", "Die Bewohner tragen an Festtagen Tracht."], "hu": ["A 17-18. századi hagyományokat őrzi.", "A lakosok ünnepekkor népviseletet hordanak."], "ro": ["Păstrează tradițiile din secolele XVII și XVIII.", "Locuitorii poartă costume tradiționale la festivaluri."], "en": ["Preserves the traditions of the 17th and 18th centuries.", "Residents wear traditional costumes on holidays."]},
  
    descriptionAdvanced: {
      "de": "Das alte Dorf von Hollókő ist ein lebendiges Freilichtmuseum im Norden Ungarns und gehört zum UNESCO-Weltkulturerbe. Es besteht aus 67 traditionellen Wohnhäusern, die nach einem Brand im ursprünglichen Stil der Palócen-Volksgruppe wiedererrichtet wurden. Die Bewohner pflegen noch heute aktiv ihre farbenfrohen Trachten und alten Handwerke, besonders an Festtagen. Über dem Dorf thront die Ruine der Burg Hollókő, die einen weiten Blick über die sanften Hügel des Cserhát bietet. Ein Besuch in Hollókő fühlt sich an wie eine Zeitreise in das ländliche Ungarn des 18. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hollókő war 1987 das erste Dorf weltweit, das zum UNESCO-Welterbe erklärt wurde.", "Die charakteristische Palóc-Architektur ist hier in ihrer reinsten Form erhalten.", "Die aufwendigen, handgestickten Trachten werden zu festlichen Anlässen stolz getragen.", "Die Burg wurde im 13. Jahrhundert zum Schutz gegen tatarische Überfälle errichtet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szepmuveszeti-muzeum",
    type: "landmark",
    parent: "budapest",
    coords: [19.07, 47.51],
    name: {"de": "Museum der Bildenden Künste", "hu": "Szépművészeti Múzeum", "ro": "Muzeul de Arte Frumoase", "en": "Museum of Fine Arts"},
    image: "/geo-images/hungary/szepmuveszeti-muzeum.webp",
    description: {"de": "Eines der bedeutendsten Museen in Budapest mit internationaler Kunst.", "hu": "Budapest egyik legjelentősebb múzeuma nemzetközi művészeti alkotásokkal.", "ro": "Unul dintre cele mai importante muzee din Budapesta cu artă internațională.", "en": "One of the most important museums in Budapest with international art."},
    facts: {"de": ["Liegt am Heldenplatz.", "Besitzt eine große Sammlung spanischer Malerei."], "hu": ["A Hősök terén található.", "Nagy spanyol festészeti gyűjteménnyel rendelkezik."], "ro": ["Situat în Piața Eroilor.", "Are o mare colecție de pictură spaniolă."], "en": ["Located at Heroes' Square.", "Has a large collection of Spanish painting."]},
  
    descriptionAdvanced: {
      "de": "Das Museum der Bildenden Künste am Budapester Heldenplatz beherbergt die bedeutendste Kunstsammlung Ungarns. Das monumentale neoklassizistische Gebäude zeigt Meisterwerke von der Antike bis zum Ende des 18. Jahrhunderts. Besonders berühmt ist die Sammlung spanischer Meister, darunter Werke von El Greco, Velázquez und Goya, die als eine der besten außerhalb Spaniens gilt. Die ägyptische Abteilung und die Galerie alter Meister ziehen Kunstliebhaber aus aller Welt an. In den prachtvoll renovierten Sälen, wie dem romanischen Saal, begegnen sich europäische Kunstgeschichte und ungarische Museumstradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Museum besitzt eine der bedeutendsten Sammlungen spanischer Malerei in Europa.", "Der Romanische Saal gehört zu den prachtvollsten Ausstellungsräumen der Welt.", "Die Sammlung umfasst über 100.000 Kunstwerke aus verschiedenen Epochen.", "Das Gebäude wurde 1906 zum 1000-jährigen Jubiläum der Landnahme eröffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "magyar-nemzeti-muzeum",
    type: "landmark",
    parent: "budapest",
    coords: [19.06, 47.49],
    name: {"de": "Ungarisches Nationalmuseum", "hu": "Magyar Nemzeti Múzeum", "ro": "Muzeul Național Maghiar", "en": "Hungarian National Museum"},
    image: "/geo-images/hungary/magyar-nemzeti-muzeum.webp",
    description: {"de": "Das Museum, das die Geschichte Ungarns von der Urzeit bis heute zeigt.", "hu": "A magyar történelmet az őskortól napjainkig bemutató múzeum.", "ro": "Muzeul care prezintă istoria Ungariei din preistorie până în prezent.", "en": "The museum showcasing the history of Hungary from prehistoric times to the present."},
    facts: {"de": ["Ein Schauplatz der Revolution von 1848.", "In einem klassizistischen Gebäude untergebracht."], "hu": ["Az 1848-as forradalom egyik helyszíne.", "Egy klasszicista épületben kapott helyet."], "ro": ["Un loc al Revoluției din 1848.", "Găzduit într-o clădire clasicistă."], "en": ["A site of the 1848 Revolution.", "Housed in a Classicist building."]},
    descriptionAdvanced: {
      de: "Das Ungarische Nationalmuseum in Budapest ist das älteste öffentliche Museum des Landes und wurde 1802 durch Graf Ferenc Széchényi gegründet. Das klassizistische Gebäude ist eng mit der Revolution von 1848 verbunden, als auf seinen Stufen Sándor Petőfi das Nationallied vorgetragen haben soll. Es bewahrt die wichtigsten Schätze der ungarischen Geschichte, darunter den Krönungsmantel.",
      hu: "A Magyar Nemzeti Múzeum az ország legrégebbi közgyűjteménye, amelyet 1802-ben alapított gróf Széchényi Ferenc. A klasszicista épület szorosan kötődik az 1848-as forradalomhoz, mivel a legenda szerint lépcsőiről szavalta el Petőfi Sándor a Nemzeti dalt. A múzeum a magyar történelem legfontosabb kincseit, köztük a koronázási palástot őrzi.",
      ro: "Muzeul Național Maghiar din Budapesta este cea mai veche instituție muzeală din țară, fondată în 1802 de contele Ferenc Széchényi. Clădirea neoclasică este strâns legată de Revoluția din 1848, când Sándor Petőfi ar fi recitat poezia Cântecul Național pe treptele sale. Muzeul păstrează tezaurele istoriei maghiare, inclusiv mantia de încoronare.",
      en: "The Hungarian National Museum in Budapest is the country's oldest public museum, founded in 1802 by Count Ferenc Széchényi. The Neoclassical building is deeply connected to the 1848 Revolution, as Sándor Petőfi is said to have recited his National Song from its steps. It houses the most vital treasures of Hungarian history, including the coronation mantle.",
    },
    factsAdvanced: {
      de: ["Graf Ferenc Széchényi spendete 1802 seine Privatsammlung.", "Das heutige Gebäude wurde 1847 fertiggestellt.", "Die ungarische Nationalversammlung tagte hier zeitweise.", "Der Krönungsmantel der Könige wird hier dauerhaft ausgestellt.", "Im Museumsgarten stehen Denkmäler bedeutender Ungarn.", "Das Gebäude wurde vom Architekten Mihály Pollack entworfen."],
      hu: ["Gróf Széchényi Ferenc 1802-ben ajánlotta fel gyűjteményét.", "A múzeum jelenlegi épülete 1847-re készült el.", "Az épületben korábban a magyar országgyűlés is ülésezett.", "Itt őrzik a magyar királyok 1031-es koronázási palástját.", "A Múzeumkertben számos neves magyar személyiség szobra áll.", "Az épületet Pollack Mihály építész tervezte."],
      ro: ["Contele Ferenc Széchényi și-a donat colecția în anul 1802.", "Actuala clădire a muzeului a fost finalizată în 1847.", "Parlamentul Ungariei a ținut ședințe în acest edificiu.", "Mantia de încoronare din 1031 este expusă permanent aici.", "Grădina Muzeului găzduiește numeroase statui ale unor personalități.", "Clădirea a fost proiectată de arhitectul Mihály Pollack."],
      en: ["Count Ferenc Széchényi donated his collection in 1802.", "The current museum building was completed in 1847.", "The Hungarian Parliament held sessions in the building.", "The coronation mantle from 1031 is permanently displayed here.", "The Museum Garden contains statues of famous Hungarian figures.", "The building was designed by architect Mihály Pollack."],
    },
  },
  {
    id: "gellert-hegy",
    type: "mountain",
    parent: "budapest",
    coords: [19.04, 47.48],
    name: {"de": "Gellértberg", "hu": "Gellért-hegy", "ro": "Dealul Gellért", "en": "Gellért Hill"},
    image: "/geo-images/hungary/gellert-hegy.webp",
    description: {"de": "Ein prominenter Hügel in Budapest, der einen Panoramablick auf die Stadt bietet.", "hu": "Budapest kiemelkedő hegye, amely panorámás kilátást nyújt a városra.", "ro": "Un deal proeminent în Budapesta, oferind vedere panoramică asupra orașului.", "en": "A prominent hill in Budapest offering panoramic views of the city."},
    facts: {"de": ["Hier steht die Freiheitsstatue.", "Die Zitadelle krönt den Gipfel."], "hu": ["Itt áll a Szabadság-szobor.", "A hegy tetejét a Citadella koronázza meg."], "ro": ["Aici se află Statuia Libertății.", "Cetatea încoronează vârful."], "en": ["The Liberty Statue stands here.", "The Citadel crowns the summit."]},
  
    descriptionAdvanced: {
      "de": "Der Gellértberg erhebt sich steil über der Donau im Herzen von Budapest und bietet den wohl berühmtesten Panoramablick über die Stadt. Auf seinem Gipfel thront die Zitadelle, eine ehemalige Festungsanlage, sowie die imposante Freiheitsstatue, ein Symbol der ungarischen Hauptstadt. Der Berg ist nach dem Heiligen Gellért benannt, der der Legende nach hier den Märtyrertod starb. Neben den Denkmälern beherbergt der Berg die einzigartige Felsenkirche und ist für seine Thermalquellen am Fuße des Hanges bekannt. Ein Spaziergang über die bewaldeten Wege des Gellértberges gehört zum Pflichtprogramm jedes Budapest-Besuchers.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Vom Gipfel des Berges aus hat man einen uneingeschränkten Blick auf alle Donaubrücken.", "Die Freiheitsstatue auf dem Berg ist 14 Meter hoch und weithin sichtbar.", "Im Inneren des Berges befindet sich ein Reservoir für das Budapester Trinkwasser.", "Der Gellértberg gehört seit 1987 zum UNESCO-Weltkulturerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "normafa",
    type: "landmark",
    parent: "budapest",
    coords: [18.96, 47.50],
    name: {"de": "Normafa", "hu": "Normafa", "ro": "Normafa", "en": "Normafa"},
    image: "/geo-images/hungary/normafa.webp",
    description: {"de": "Ein beliebtes Ausflugsziel in den Budaer Bergen, ideal zum Wandern.", "hu": "Népszerű kirándulóhely a Budai-hegységben, ideális túrázásra.", "ro": "O destinație populară de excursie în Munții Buda, ideală pentru drumeții.", "en": "A popular excursion destination in the Buda Hills, ideal for hiking."},
    facts: {"de": ["Bietet im Winter Möglichkeiten zum Skifahren.", "Berühmt für seine Strudelspezialitäten."], "hu": ["Télen síelési lehetőséget kínál.", "Híres a réteséről."], "ro": ["Oferă oportunități de schi iarna.", "Cunoscut pentru specialitățile sale de ștrudel."], "en": ["Offers skiing opportunities in winter.", "Famous for its strudel specialties."]},
  
    descriptionAdvanced: {
      "de": "Die Normafa ist das beliebteste Naherholungsgebiet der Budapester in den Budaer Bergen und bietet zu jeder Jahreszeit Naturerlebnisse. Der Name geht auf einen alten Baum zurück, unter dem Opernsänger im 19. Jahrhundert traditionell Arien sangen. Die Hochebene bietet fantastische Ausblicke über die ungarische Hauptstadt und ist ein Zentrum für Wanderer, Jogger und Familien. Im Winter verwandelt sich die Normafa bei entsprechendem Wetter in ein kleines Ski- und Rodelparadies direkt am Stadtrand. Zahlreiche Wanderwege führen von hier aus zu weiteren Sehenswürdigkeiten wie dem Aussichtsturm auf dem János-Berg.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Normafa bietet einen der besten Aussichtspunkte in den Budaer Bergen.", "Das Gebiet ist ein historischer Treffpunkt der Budapester Künstler- und Kulturszene.", "Die Zahnradbahn und die Kindereisenbahn sind von hier aus bequem zu erreichen.", "Der Ort ist berühmt für seine traditionellen Strudel-Verkaufsstände."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "magyar-allami-operahaz",
    type: "landmark",
    parent: "budapest",
    coords: [19.05, 47.50],
    name: {"de": "Staatsoper", "hu": "Magyar Állami Operaház", "ro": "Opera de Stat", "en": "State Opera"},
    image: "/geo-images/hungary/magyar-allami-operahaz.webp",
    description: {"de": "Ein prachtvolles Neorenaissance-Gebäude auf der Andrássy-Straße.", "hu": "Lenyűgöző neoreneszánsz épület az Andrássy úton.", "ro": "O clădire magnifică neo-renascentistă pe Bulevardul Andrássy.", "en": "A magnificent Neo-Renaissance building on Andrássy Avenue."},
    facts: {"de": ["Eröffnet im Jahr 1884.", "Berühmt für seine hervorragende Akustik."], "hu": ["1884-ben nyitotta meg kapuit.", "Kiváló akusztikájáról ismert."], "ro": ["Deschisă în 1884.", "Faimoasă pentru acustica sa excelentă."], "en": ["Opened in 1884.", "Famous for its excellent acoustics."]},
  
    descriptionAdvanced: {
      "de": "Die Ungarische Staatsoper an der Andrássy-Straße ist ein architektonisches Juwel der Neorenaissance und eines der schönsten Opernhäuser weltweit. Entworfen von Miklós Ybl, wurde das Gebäude 1884 im Beisein von Kaiser Franz Joseph I. feierlich eröffnet. Das prachtvolle Innere besticht durch reich vergoldete Logen, Deckenfresken bedeutender ungarischer Maler und einen riesigen Kronleuchter. Die Akustik des Hauses gilt als eine der besten in Europa und zieht internationale Spitzenkünstler und ein begeistertes Publikum an. Ein Besuch einer Vorstellung oder eine Führung durch die glanzvollen Säle vermittelt den aristokratischen Glanz der Budapester Blütezeit.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Wiener Expertenkommission stufte die Akustik der Oper als drittbeste in Europa ein.", "Gustav Mahler wirkte hier mehrere Jahre als künstlerischer Direktor.", "Das Gebäude wurde im Jahr 2022 nach einer umfassenden Restaurierung wiedereröffnet.", "Die Oper besitzt den zweitgrößten Vorhang in ganz Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csodak-palotaja",
    type: "landmark",
    parent: "budapest",
    coords: [19.03, 47.53],
    name: {"de": "Palast der Wunder", "hu": "Csodák Palotája", "ro": "Palatul Minunilor", "en": "Center of Scientific Wonders"},
    image: "/geo-images/hungary/csodak-palotaja.webp",
    description: {"de": "Ein interaktives Wissenschaftszentrum, das spielerisch Wissen vermittelt.", "hu": "Interaktív tudományos központ, amely játékosan adja át az ismereteket.", "ro": "Un centru științific interactiv care transmite cunoștințe în mod ludic.", "en": "An interactive science center that imparts knowledge playfully."},
    facts: {"de": ["Das erste seiner Art in Mitteleuropa.", "Bietet über 250 interaktive Spiele."], "hu": ["Az első ilyen jellegű intézmény Közép-Európában.", "Több mint 250 interaktív játékot kínál."], "ro": ["Primul de acest fel din Europa Centrală.", "Oferă peste 250 de jocuri interactive."], "en": ["The first of its kind in Central Europe.", "Offers over 250 interactive games."]},
  
    descriptionAdvanced: {
      "de": "Der Palast der Wunder (Csodák Palotája) in Budapest ist das erste interaktive wissenschaftliche Erlebniszentrum in Mittel- und Osteuropa. Auf einer riesigen Fläche bietet das Zentrum über 250 Spiele und Experimente, die physikalische und naturwissenschaftliche Gesetzmäßigkeiten spielerisch vermitteln. Besucher aller Altersgruppen können hier Naturphänomene hautnah erleben, von der Optik über die Mechanik bis hin zur Weltraumforschung. Regelmäßige spektakuläre Wissenschaftsshows in den Laboren begeistern das Publikum mit Experimenten zum Mitmachen. Der Palast der Wunder ist der ideale Ort für Familien, um die Welt der Wissenschaft mit Spaß und Staunen zu entdecken.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Csodák Palotája wurde 1995 als Pionierprojekt in Ungarn gegründet.", "Das Zentrum bietet Themenbereiche von der Nanotechnologie bis zum Magnetismus.", "Es ist eines der beliebtesten außerschulischen Bildungszentren in der ungarischen Hauptstadt.", "In den 5D- und 9D-Kinos können Besucher virtuelle Reisen durch die Wissenschaft erleben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "boldogko-var-b2",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.23, 48.34],
    name: {"de": "Burg Boldogkő", "hu": "Boldogkői vár", "ro": "Cetatea Boldogkő", "en": "Boldogkő Castle"},
    image: "/geo-images/hungary/boldogko-var.webp",
    description: {"de": "Mittelalterliche Burg auf einem markanten Felsen im Zemplén-Gebirge.", "hu": "Középkori vár a Zempléni-hegység egyik meredek szikláján.", "ro": "Cetate medievală situată pe o stâncă abruptă în munții Zemplén.", "en": "Medieval castle perched on a steep rock in the Zemplén Mountains."},
    facts: {"de": ["Bekannt für den hölzernen Wehrgang.", "Beherbergt eine große Zinnfigurenausstellung."], "hu": ["Híres a sziklán futó fapadlós gyilokjáróról.", "Itt található az ország egyik legnagyobb ólomkatona-kiállítása."], "ro": ["Cunoscută pentru galeria sa de lemn pe stâncă.", "Găzduiește o mare expoziție de soldăței de plumb."], "en": ["Famous for its wooden walkway on the rock.", "Home to a large exhibition of tin soldiers."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Boldogkő im Zemplén-Gebirge thront spektakulär auf einem schmalen, schiffartigen Felsrücken und ist eine der romantischsten Burgen Ungarns. Der markanteste Teil der Anlage ist die sogenannte 'Löwenkammer' auf dem Felssporn, von der aus man einen weiten Blick über das Hernád-Tal hat. Die im 13. Jahrhundert errichtete Festung beherbergt heute interessante Ausstellungen zur Militärgeschichte und eine einzigartige Zinnfigurensammlung. In den Sommermonaten finden in der Burg regelmäßig historische Ritterspiele und mittelalterliche Festmahle statt. Die ungewöhnliche Form der Burg und die unberührte Landschaft der Umgebung machen Boldogkő zu einem Geheimtipp für Entdecker.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Boldogkő steht auf einem vulkanischen Felsrücken im Zemplén-Gebirge.", "Der Name 'Boldogkő' bedeutet übersetzt etwa 'Glücklicher Stein'.", "Die Burg beherbergt die größte Zinnfigurensammlung Mitteleuropas.", "Ein markanter Holzsteg führt entlang des schmalen Felsgrates zur Aussichtsplattform."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fuzer-var-b2",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.46, 48.54],
    name: {"de": "Burg Füzér", "hu": "Füzéri vár", "ro": "Cetatea Füzér", "en": "Füzér Castle"},
    image: "/geo-images/hungary/fuzer-var.webp",
    description: {"de": "Spektakulär restaurierte Höhenburg auf einem vulkanischen Gipfel.", "hu": "Látványosan felújított hegyi vár egy vulkáni kúpon.", "ro": "Cetate montană restaurată spectaculos pe un con vulcanic.", "en": "Spectacularly restored hilltop castle on a volcanic cone."},
    facts: {"de": ["Eine der ersten Steinburgen des Landes.", "Bewahrte einst die ungarische Heilige Krone."], "hu": ["Az ország egyik legkorábbi kővára.", "Egykor itt őrizték a Szent Koronát."], "ro": ["Una dintre primele cetăți de piatră din țară.", "Aici a fost păstrată odată Sfânta Coroană."], "en": ["One of the country's earliest stone castles.", "The Holy Crown was once kept here."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Füzér im äußersten Norden Ungarns thront majestätisch auf einem steilen Vulkankegel und gilt als eine der spektakulärsten rekonstruierten Festungen des Landes. Die im 13. Jahrhundert gegründete Burg spielte eine wichtige Rolle in der ungarischen Geschichte und bewahrte nach der Schlacht von Mohács ein Jahr lang die ungarische Stephanskrone auf. In den letzten Jahren wurde die Oberburg mit ihrer prachtvollen gotischen Kapelle und dem Palastflügel aufwendig und detailgetreu wiederaufgebaut. Besucher können heute in originalgetreu eingerichteten Räumen in das Leben des 16. und 17. Jahrhunderts eintauchen. Die Lage im Zemplén-Gebirge bietet zudem fantastische Wandermöglichkeiten und unberührte Naturerlebnisse.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Füzér war eine der ersten steinernen Festungen in Ungarn.", "In der Burgkapelle wurde 1526-27 die ungarische Heilige Krone vor den Türken versteckt.", "Die Burg wurde aufgrund ihrer strategischen Lage und Schönheit zum Naturwunder gewählt.", "Der Aufstieg zur Burg bietet ein Panorama über das gesamte Hegyköz-Gebiet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sirok-var",
    type: "landmark",
    parent: "heves",
    coords: [20.19, 47.93],
    name: {"de": "Burg Sirok", "hu": "Siroki vár", "ro": "Cetatea Sirok", "en": "Sirok Castle"},
    image: "/geo-images/hungary/sirok-var.webp",
    description: {"de": "Ungarns am besten erhaltene in den Fels gehauene Höhlenburg.", "hu": "Magyarország legjelentősebb barlang- és sziklavára a Mátra keleti részén.", "ro": "Cea mai bine conservată cetate săpată în stâncă din Ungaria.", "en": "Hungary's best-preserved cave and rock castle in the Mátra."},
    facts: {"de": ["Verfügt über ein weitläufiges Tunnelsystem.", "Bietet Panoramablick auf die Mátra."], "hu": ["Kiterjedt földalatti kazamata-rendszerrel bír.", "Pazar kilátást nyújt a Mátrára."], "ro": ["Are un sistem extins de tuneluri subterane.", "Oferă vedere panoramică asupra munților Mátra."], "en": ["Features an extensive underground tunnel system.", "Offers panoramic views of the Mátra."]},
  
    descriptionAdvanced: {
      "de": "Die Burg von Sirok ist die am spektakulärsten gelegene Felsenburg im Mátra-Gebirge, teilweise direkt in den weichen Tuffstein gehauen. Die Ruinen thronen auf einem hohen Felsrücken und bieten ein Labyrinth aus unterirdischen Gängen, Hallen und Verteidigungsanlagen, die in den Stein gemeißelt wurden. Besonders markant sind die bizarren Felsformationen in der Umgebung der Burg, die sogenannten 'Barát' und 'Apáca' (Mönch und Nonne), um die sich zahlreiche Legenden ranken. Ein gut ausgebauter Lehrpfad führt Besucher durch die Geschichte der Festung und zu den schönsten Aussichtspunkten über die bewaldeten Hänge der Mátra. Sirok ist ein Ort von wildromantischer Schönheit, der die Verbindung von Natur und mittelalterlicher Wehrarchitektur zeigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Große Teile der Burg Sirok wurden direkt aus dem vulkanischen Felsgestein gehauen.", "Die Burg war im 16. Jahrhundert ein wichtiger Vorposten gegen die osmanische Expansion.", "Unter der Burg erstreckt sich ein weitläufiges System aus künstlichen Felsenhöhlen.", "Von den Burgmauern aus kann man bis zum fernen Bükk-Gebirge blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sumeg-var-b2",
    type: "landmark",
    parent: "veszprem",
    coords: [17.43, 46.98],
    name: {"de": "Burg Sümeg", "hu": "Sümegi vár", "ro": "Cetatea Sümeg", "en": "Sümeg Castle"},
    image: "/geo-images/hungary/sumeg-var.webp",
    description: {"de": "Imposante Festung, die über der Stadt Sümeg auf einem Hügel thront.", "hu": "Impozáns erődítmény, amely a Balaton-felvidék kapujában magasodik.", "ro": "Fortăreață impunătoare care domină orașul Sümeg de pe un deal.", "en": "Imposing fortress towering over the town of Sümeg on a hill."},
    facts: {"de": ["Berühmt für historische Ritterspiele.", "Widerstand erfolgreich osmanischen Belagerungen."], "hu": ["Híres a látványos lovagi tornáiról.", "Sikeresen ellenállt a török ostromoknak."], "ro": ["Faimoasă pentru jocurile cavalerești istorice.", "A rezistat cu succes asediilor otomane."], "en": ["Famous for historical knight tournaments.", "Successfully resisted Ottoman sieges."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Sümeg thront majestätisch auf einem steilen Kalksteinfelsen über der gleichnamigen Stadt und gilt als eine der besterhaltenen Festungen Ungarns. Im 13. Jahrhundert nach dem Tatarensturm errichtet, diente sie über Jahrhunderte als wichtiger Verteidigungsposten. Besonders markant ist der mächtige Alte Turm und die weitläufigen Burgmauern, die die gesamte Bergkuppe umschließen. Heute ist die Burg ein lebendiges Zentrum für mittelalterliche Kultur, bekannt für ihre spektakulären Ritterspiele und historischen Vorführungen. Von der Burg aus bietet sich ein herrlicher Blick über das Tapolcaer Becken bis hin zum Plattensee.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Sümeg ist eine der am besten erhaltenen mittelalterlichen Festungen des Landes.", "In der Burg werden regelmäßig historische Burgspiele und Ritterturniere veranstaltet.", "Die Anlage besitzt ein eigenes Waffenmuseum und eine Folterkammer.", "Vom Burgberg aus kann man bei gutem Wetter bis zum Plattensee blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "somlo-var",
    type: "landmark",
    parent: "veszprem",
    coords: [17.37, 47.15],
    name: {"de": "Burg Somló", "hu": "Somlói vár", "ro": "Cetatea Somló", "en": "Somló Castle"},
    image: "/geo-images/hungary/somlo-var.webp",
    description: {"de": "Malerische Burgruine auf dem vulkanischen Berg Somló.", "hu": "Regényes várrom a Somló vulkanikus tanúhegyének tetején.", "ro": "Ruine pitorești ale cetății pe muntele vulcanic Somló.", "en": "Picturesque castle ruins on the volcanic Somló mountain."},
    facts: {"de": ["Umgeben von berühmten Weinbergen.", "Ein beliebtes Ziel für Wanderer."], "hu": ["Híres borvidék veszi körül.", "Kedvelt kirándulóhely a túrázók körében."], "ro": ["Înconjurată de podgorii faimoase.", "O destinație populară pentru drumeți."], "en": ["Surrounded by famous vineyards.", "A popular destination for hikers."]},
  
    descriptionAdvanced: {
      "de": "Die Burgruine Somló liegt auf dem gleichnamigen Zeugenberg, der vor allem für seinen exzellenten Weißwein bekannt ist. Die im 14. Jahrhundert errichtete Festung schmiegt sich an die steilen Basaltwände des Berges und bietet ein faszinierendes Labyrinth aus Mauern und Türmen. Trotz ihres Ruinenzustands vermittelt die Anlage noch heute die strategische Bedeutung, die sie einst für den Schutz der Region hatte. Der Aufstieg zur Burg führt durch die berühmten Weinhänge von Somló, wo der 'Wein der Hochzeitsnächte' wächst. Von den Ruinen aus genießt man einen weiten Panoramablick über die ungarische Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Somló-Berg ist der kleinste Weinbauort Ungarns, aber weltberühmt für seine Qualität.", "Die Burg war einst im Besitz bedeutender ungarischer Adelsfamilien wie der Erdődys.", "Der Weg zur Burg führt an bizarren Basaltformationen vulkanischen Ursprungs vorbei.", "Die Ruine ist ein beliebtes Ziel für Wanderer und Weinliebhaber gleichermaßen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagyvazsony-kinizsi-var",
    type: "landmark",
    parent: "veszprem",
    coords: [17.69, 46.98],
    name: {"de": "Kinizsi-Burg", "hu": "Nagyvázsonyi Kinizsi-vár", "ro": "Cetatea Kinizsi", "en": "Kinizsi Castle"},
    image: "/geo-images/hungary/nagyvazsony-var.webp",
    description: {"de": "Historische Burg, die einst dem legendären Paul Kinizsi gehörte.", "hu": "A legendás verhetetlen hadvezér, Kinizsi Pál egykori vára.", "ro": "Cetate istorică care a aparținut legendarului Paul Kinizsi.", "en": "Historic castle once owned by the legendary Paul Kinizsi."},
    facts: {"de": ["Besitzt einen markanten Wohnturm.", "Veranstaltet im Sommer Ritterspiele."], "hu": ["Jellegzetes, magas lakótoronnyal rendelkezik.", "Nyáron lovagi játékokat rendeznek a várudvaron."], "ro": ["Are un turn de locuință proeminent.", "Găzduiește jocuri cavalerești în timpul verii."], "en": ["Has a distinctive residential tower.", "Hosts knightly tournaments in the summer."]},
  
    descriptionAdvanced: {
      "de": "Die Burg von Nagyvázsony, auch als Kinizsi-Burg bekannt, ist eng mit dem legendären Heerführer Paul Kinizsi verbunden. Paul Kinizsi, berühmt für seine unglaubliche Kraft und Tapferkeit in den Schlachten gegen die Osmanen, erhielt die Burg von König Matthias Corvinus als Geschenk. Der markante quadratische Wohnturm ist bis heute erhalten und beherbergt ein interessantes Burgmuseum. In den Sommermonaten werden im Burghof regelmäßig mittelalterliche Spiele veranstaltet, die an die Heldentaten Kinizsis erinnern. Nagyvázsony liegt am Fuße des Bakony-Gebirges und bewahrt eine ruhige, historische Atmosphäre.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Paul Kinizsi war ein unbesiegbarer Feldherr des schwarzen Heeres von König Matthias.", "Der fünfstöckige Wohnturm ist eines der besterhaltenen Beispiele spätgotischer Profanarchitektur.", "Im Burgmuseum werden persönliche Gegenstände und Rüstungen aus der Kinizsi-Zeit gezeigt.", "Jährlich finden hier die Kinizsi-Tage mit spektakulären Reiter- und Kampfvorführungen statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szerencs-var",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.20, 48.16],
    name: {"de": "Burg Szerencs", "hu": "Szerencsi vár", "ro": "Cetatea Szerencs", "en": "Szerencs Castle"},
    image: "/geo-images/hungary/szerencs-var.webp",
    description: {"de": "Renaissanceschloss im Herzen der Schokoladenstadt Szerencs.", "hu": "Reneszánsz várkastély a csokoládé városának szívében.", "ro": "Castel renascentist în inima orașului ciocolatei, Szerencs.", "en": "Renaissance castle in the heart of the chocolate town, Szerencs."},
    facts: {"de": ["Sitz des Zemplén-Museums.", "Verbunden mit dem Fürsten Bocskai."], "hu": ["A Zempléni Múzeumnak ad otthont.", "Bocskai István fejedelemmel fonódott össze a múltja."], "ro": ["Sediul Muzeului Zemplén.", "Legată de principele Bocskai."], "en": ["Home to the Zemplén Museum.", "Connected with Prince Bocskai."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Szerencs im Nordosten Ungarns ist ein bedeutendes Baudenkmal der Spätrenaissance und eng mit der Geschichte der Familie Rákóczi verknüpft. Die Stadt Szerencs gilt als das Tor zum Weinbaugebiet Hegyalja und war im 17. Jahrhundert ein wichtiger Schauplatz politischer Versammlungen. Die Burg wurde auf den Fundamenten eines Klosters errichtet und besticht heute durch ihre harmonische Architektur und den umliegenden See. Im Inneren befindet sich das Zemplén-Museum, das eine der größten Postkartensammlungen der Welt sowie Ausstellungen zur Schokoladenherstellung beherbergt. Die Burg strahlt eine vornehme Ruhe aus und ist ein kulturelles Zentrum der Region.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szerencs war im Jahr 1605 der Ort der Wahl von István Bocskai zum Fürsten.", "Das städtische Museum beherbergt eine Postkartensammlung mit über einer Million Exemplaren.", "Szerencs ist historisch für seine traditionsreiche Zucker- und Schokoladenindustrie bekannt.", "Die Burganlage ist von einem malerischen Wassergraben und einem Park umgeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "koszeg-jurisics-var",
    type: "landmark",
    parent: "vas",
    coords: [16.54, 47.39],
    name: {"de": "Jurisics-Burg", "hu": "Kőszegi Jurisics-vár", "ro": "Cetatea Jurisics", "en": "Jurisics Castle"},
    image: "/geo-images/hungary/koszeg-var.webp",
    description: {"de": "Geschichtsträchtige Burg, die 1532 den Vormarsch der Osmanen stoppte.", "hu": "Történelmi vár, mely 1532-ben megállította a török sereget.", "ro": "Cetate istorică ce a oprit avansul otomanilor în 1532.", "en": "Historic castle that stopped the Ottoman advance in 1532."},
    facts: {"de": ["In Kőszeg läuten die Glocken um 11 Uhr.", "Wahrzeichen der Grenzstadt Kőszeg."], "hu": ["Kőszegen 11 órakor is szólnak a harangok.", "A határmenti kisváros jelképe."], "ro": ["În Kőszeg clopotele bat și la ora 11.", "Simbolul orașului de graniță Kőszeg."], "en": ["Bells ring at 11 AM in Kőszeg.", "Symbol of the border town Kőszeg."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Jurisics in Kőszeg ist ein nationales Symbol für Tapferkeit und Ausdauer in Ungarn. Im Jahr 1532 hielt hier eine kleine Gruppe von Verteidigern unter dem Kommando von Nikolaus Jurisics einer gewaltigen osmanischen Übermacht stand. Zu Ehren dieses Sieges läuten in Kőszeg bis heute täglich um 11 Uhr die Kirchenglocken. Die Burganlage selbst vereint Elemente der Gotik und der Renaissance und beherbergt heute das Jurisics-Burgmuseum. Besucher können die Wehrgänge, den Rittersaal und die historischen Ausstellungen erkunden, die die Geschichte der 'treuesten Stadt' lebendig werden lassen. Kőszeg bewahrt durch seine Burg und die Altstadt ein fast unversehrtes mittelalterliches Flair.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Belagerung von Kőszeg 1532 dauerte 25 Tage und verhinderte einen Angriff auf Wien.", "Das tägliche 11-Uhr-Läuten in Kőszeg erinnert an den Abzug der türkischen Truppen.", "In der Burg ist ein bedeutendes Archiv mit Dokumenten zur Regionalgeschichte untergebracht.", "Der Burghof dient im Sommer als stimmungsvolle Kulisse für Theateraufführungen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "simontornya-var",
    type: "landmark",
    parent: "tolna",
    coords: [18.55, 46.75],
    name: {"de": "Burg Simontornya", "hu": "Simontornyai vár", "ro": "Cetatea Simontornya", "en": "Simontornya Castle"},
    image: "/geo-images/hungary/simontornya-var.webp",
    description: {"de": "Prächtiges Renaissanceschloss mit einer wechselvollen Geschichte.", "hu": "Pazar reneszánsz palotaszárnyakkal díszített alföldi vár.", "ro": "Castel renascentist splendid cu o istorie bogată.", "en": "Splendid Renaissance castle with a rich history."},
    facts: {"de": ["Einst eine wichtige Festung an der Sió.", "Besitzt schöne Terrakotta-Verzierungen."], "hu": ["Valaha a Sió menti védelmi vonal része volt.", "Gyönyörű reneszánsz faragványok díszítik."], "ro": ["Odată o fortăreață importantă pe râul Sió.", "Are frumoase decorațiuni din teracotă."], "en": ["Once an important fortress along the Sió.", "Features beautiful terracotta decorations."]},
  
    descriptionAdvanced: {
      "de": "Die Burg von Simontornya im Komitat Tolna ist ein faszinierendes Beispiel für den Wandel einer mittelalterlichen Festung in einen Renaissance-Palast. Der Name 'Simon-Turm' geht auf den ersten Erbauer im 13. Jahrhundert zurück, doch ihre architektonische Blütezeit erlebte die Burg unter der Familie Buzlay in der Renaissance. Besonders sehenswert sind die prächtigen Terrakotta-Verzierungen und die harmonisch gestalteten Arkaden des Innenhofs. Trotz späterer Umbauten und Beschädigungen während der Türkenkriege strahlt die Burg noch heute eine vornehme Eleganz aus. Heute beherbergt sie ein interessantes Museum, das die Architekturgeschichte des Gebäudes und archäologische Funde aus der Umgebung präsentiert.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Simontornya besitzt eines der schönsten Renaissance-Tore in ganz Ungarn.", "Die Burg wurde während der Türkenherrschaft als Sitz eines Sandschaks genutzt.", "In der Burgkapelle sind wertvolle Freskenreste aus dem Mittelalter zu sehen.", "Der Wohnturm der Burg bietet einen weiten Blick über die Landschaft des Sárvíz-Tals."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "varpalota-thury-var",
    type: "landmark",
    parent: "veszprem",
    coords: [18.14, 47.20],
    name: {"de": "Thury-Burg", "hu": "Várpalotai Thury-vár", "ro": "Cetatea Thury", "en": "Thury Castle"},
    image: "/geo-images/hungary/varpalota-var.webp",
    description: {"de": "Mittelalterliche Festung im Zentrum von Várpalota.", "hu": "Középkori erődítmény Várpalota városának szívében.", "ro": "Fortăreață medievală în centrul orașului Várpalota.", "en": "Medieval fortress in the center of Várpalota."},
    facts: {"de": ["Benannt nach Kapitän György Thury.", "Beherbergt ein Chemie-Museum."], "hu": ["Thury György várkapitány nevét viseli.", "Itt található a Vegyészeti Múzeum."], "ro": ["Numită după căpitanul György Thury.", "Găzduiește un muzeu al chimiei."], "en": ["Named after Captain György Thury.", "Houses a chemistry museum."]},
  
    descriptionAdvanced: {
      "de": "Die Burg Thury in Várpalota ist benannt nach ihrem berühmtesten Verteidiger, dem legendären Burgkapitän Georg Thury. Thury war bekannt für seine unzähligen siegreichen Zweikämpfe gegen türkische Krieger und seine Standhaftigkeit in den Grenzkriegen des 16. Jahrhunderts. Die Burg selbst ist eine mächtige quadratische Festung mit Ecktürmen, die im Laufe der Jahrhunderte mehrfach umgebaut wurde. Heute beherbergt die Burg das Ungarische Chemische Museum und eine Ausstellung zur Geschichte des ungarischen Handwerks. Die Burganlage bildet das Herz der Stadt Várpalota und erinnert an die Zeit, als sie ein wichtiger Vorposten im Kampf gegen die osmanische Expansion war. Regelmäßige Veranstaltungen halten das Andenken an Georg Thury und seine Epoche wach.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Georg Thury, der 'ungarische Cid', besiegte laut Legende über 600 Gegner im Zweikampf.", "Die Burg Várpalota war eine der wichtigsten Grenzfestungen im Bakony-Gebiet.", "Im Inneren befindet sich eine weltweit bedeutende Sammlung historischer Bergbaukarten.", "Der Renaissance-Hof der Burg ist ein architektonisches Highlight der Anlage."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szelce-volgy",
    type: "landmark",
    parent: "nograd",
    coords: [19.06, 48.15],
    name: {"de": "Szelce-Tal", "hu": "Szelce-völgy", "ro": "Valea Szelce", "en": "Szelce Valley"},
    image: "/geo-images/hungary/szelce-volgy.webp",
    description: {"de": "Unberührtes Tal in Nordungarn mit dichter Waldlandschaft.", "hu": "Érintetlen északi völgy dús erdőkkel és friss levegővel.", "ro": "Vale neatinsă în nordul Ungariei cu păduri dese.", "en": "Pristine valley in North Hungary with dense forest landscape."},
    facts: {"de": ["Einzigartige Gebirgsflora.", "Ideal für ruhige Naturwanderungen."], "hu": ["Különleges hegyi flórával rendelkezik.", "Tökéletes hely a csendes erdei túrákhoz."], "ro": ["Floră montană unică.", "Ideală pentru drumeții liniștite în natură."], "en": ["Unique mountain flora.", "Ideal for quiet nature hikes."]},
  
    descriptionAdvanced: {
      "de": "Das Szelce-Tal ist eines der versteckten Naturjuwele im Nationalpark Aggtelek, bekannt für seine unberührte Stille und tiefe Täler. Fernab der Haupttouristenströme bietet das Tal ideale Bedingungen für Wanderer, die die authentische Wildnis der nordungarischen Karstlandschaft erleben möchten. Die Region ist geprägt von dichten Wäldern, seltenen Bergpflanzen und einer artenreichen Fauna, zu der auch Rehe und Wildschweine gehören. Das Tal ist zudem reich an geologischen Formationen, die typisch für die Karstregion sind, wie kleine Quellen und Dolinen. Im Herbst verwandelt sich der Wald in ein farbenprächtiges Meer aus Rot- und Goldtönen. Szelce-völgy ist der perfekte Ort für Naturliebhaber, die Ruhe und Entspannung in einer fast archaischen Umgebung suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Szelce-Tal gehört zum grenzüberschreitenden UNESCO-Weltnaturerbe Aggtelek.", "In dem Gebiet wurden bereits Spuren von Wölfen und Luchsen gesichtet.", "Es ist eines der dunkelsten Gebiete Ungarns, ideal zur Sternenbeobachtung.", "Zahlreiche markierte Wanderwege verbinden das Tal mit den berühmten Höhlen von Aggtelek."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "palvolgyi-barlang",
    type: "landmark",
    parent: "budapest",
    coords: [19.016, 47.532],
    name: {"de": "Pálvölgyi-Höhle", "hu": "Pálvölgyi-barlang", "ro": "Peștera Pálvölgyi", "en": "Pálvölgyi Cave"},
    image: "/geo-images/hungary/palvolgyi-barlang.webp",
    description: {"de": "Die längste Höhle in den Budaer Bergen mit tollen Formationen.", "hu": "A Budai-hegység leghosszabb, látványos cseppköves barlangja.", "ro": "Cea mai lungă peșteră din munții Budapesta cu formațiuni superbe.", "en": "The longest cave in the Buda Hills with amazing formations."},
    facts: {"de": ["Bekannt für bizarre Tropfsteine.", "Konstante Temperatur von 11 Grad."], "hu": ["Különleges cseppkőformációiról ismert.", "Hőmérséklete állandóan 11 fok."], "ro": ["Cunoscută pentru stalactite bizare.", "Temperatură constantă de 11 grade."], "en": ["Known for bizarre dripstones.", "Constant temperature of 11 degrees."]},
  
    descriptionAdvanced: {
      "de": "Die Pálvölgyi-Höhle ist das längste Höhlensystem von Budapest und eines der faszinierendsten unterirdischen Ziele in der Hauptstadt. Sie wurde 1904 entdeckt und ist bekannt für ihre ungewöhnlich engen Gänge, riesigen Höhenunterschiede und wunderschönen Tropfsteinformationen. In der Höhle können Besucher faszinierende Kalksintergebilde bewundern, die oft an Figuren oder Tiere erinnern, sowie funkelnde Calcit-Kristalle. Die geführten Touren führen durch spektakuläre Hallen wie den 'Theater-Saal' und bieten Einblicke in die geologischen Besonderheiten der Budaer Berge. Die Temperatur in der Höhle liegt ganzjährig bei konstanten 11 Grad, was sie auch im Sommer zu einem erfrischenden Erlebnis macht. Die Pálvölgyi-Höhle ist ein geschütztes Naturdenkmal von europäischer Bedeutung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Pálvölgyi-Höhle ist mit über 31 Kilometern das längste Höhlensystem Ungarns.", "Sie ist weltberühmt für ihre einzigartigen muschelförmigen Tropfsteingebilde.", "In der Höhle befindet sich die steilste begehbare Treppe ungarischer Schauhöhlen.", "Das Höhlensystem ist direkt mit der benachbarten Mátyáshegyi-Höhle verbunden."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mecsek-hegyseg",
    type: "landmark",
    parent: "baranya",
    coords: [18.23, 46.10],
    name: {"de": "Mecsek-Gebirge", "hu": "Mecsek hegység", "ro": "Munții Mecsek", "en": "Mecsek Mountains"},
    image: "/geo-images/hungary/mecsek.webp",
    description: {"de": "Mittelgebirge im Süden mit mediterranem Flair und Höhlen.", "hu": "Déli középhegység mediterrán hangulattal és barlangokkal.", "ro": "Munți de înălțime medie în sud cu aer mediteranean și peșteri.", "en": "Middle mountains in the south with Mediterranean flair and caves."},
    facts: {"de": ["Höchster Gipfel ist der Zengő.", "Reich an seltenen Pflanzenarten."], "hu": ["Legmagasabb csúcsa a Zengő.", "Ritka növényfajokban rendkívül gazdag."], "ro": ["Cel mai înalt vârf este Zengő.", "Bogați în specii de plante rare."], "en": ["Highest peak is Zengő.", "Rich in rare plant species."]},
  
    descriptionAdvanced: {
      "de": "Das Mecsek-Gebirge im Südwesten Ungarns ist eine facettenreiche Mittelgebirgslandschaft mit einem fast mediterranen Flair. Seine bewaldeten Hänge schützen die Stadt Pécs vor kalten Nordwinden und ermöglichen den Anbau von Feigen und edlen Reben. Das Gebirge beherbergt zahlreiche Naturschätze, darunter tiefe Täler wie das Meleg-mányi-völgy mit seinen Kalktuff-Wasserfällen und markante Gipfel wie den Zengő. Die Region ist zudem bekannt für ihre reichen Vorkommen an Heilkräutern und eine vielfältige Tierwelt, darunter seltene Orchideenarten. Zahlreiche Wanderwege, Aussichtstürme und idyllische Bergdörfer machen das Mecsek-Gebirge zu einem der beliebtesten Erholungsgebiete des Landes. Hier trifft mittelmitteleuropäische Waldnatur auf den Hauch des Südens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der höchste Gipfel des Mecsek ist der Zengő mit 682 Metern Höhe.", "Das Gebirge beherbergt die weltweit einzige Population der seltenen Banater Pfingstrose.", "Im Mecsek-Gebirge wurde jahrzehntelang ungarisches Uran und Steinkohle abgebaut.", "Die Region ist berühmt für das Thermalwasser von Harkány und den Wein von Villány."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonfelvideki-np",
    type: "landmark",
    parent: "veszprem",
    coords: [17.80, 46.90],
    name: {"de": "NP Balaton-Oberland", "hu": "Balaton-felvidéki Nemzeti Park", "ro": "PN Balatonul de Sus", "en": "Balaton Uplands NP"},
    image: "/geo-images/hungary/balaton-felvidek.webp",
    description: {"de": "Abwechslungsreiche Landschaft mit Vulkanbergen und Lavendel.", "hu": "Változatos táj tanúhegyekkel, barlangokkal és levendulával.", "ro": "Peisaj divers cu munți vulcanici și lavandă.", "en": "Diverse landscape with volcanic hills and lavender fields."},
    facts: {"de": ["Beinhaltet das Káli-Becken.", "Berühmt für Basaltorgeln."], "hu": ["Magában foglalja a Káli-medencét.", "Híres a bazaltorgonáiról."], "ro": ["Include bazinul Káli.", "Faimos pentru coloanele de bazalt."], "en": ["Includes the Káli Basin.", "Famous for basalt organs."]},
  
    descriptionAdvanced: {
      "de": "Der Nationalpark Balaton-Oberland schützt eine der abwechslungsreichsten und geschichtsträchtigsten Landschaften Ungarns am Nordufer des Plattensees. Er umfasst spektakuläre Zeugenberge wie den Badacsony, die Halbinsel Tihany und das malerische Káli-Becken. Die Region ist geprägt von erloschenen Vulkanen, riesigen Basaltorgeln und einer einzigartigen Flora und Fauna, die im Schilfgürtel des Klein-Balaton ein Refugium findet. Neben der Natur bewahrt der Nationalpark auch bedeutende Kulturschätze, von mittelalterlichen Burgruinen bis zu traditionellen Reetdachhäusern. Jedes Dorf im Oberland hat seinen eigenen Charme, oft verbunden mit einer jahrhundertealten Weinbaukultur. Der Nationalpark ist ein Symbol für die harmonische Verbindung von ökologischer Vielfalt und menschlicher Kulturlandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark wurde 1997 gegründet und umfasst sechs verschiedene Landschaftsschutzgebiete.", "Die Halbinsel Tihany war das erste geschützte Landschaftsgebiet in ganz Ungarn.", "Der Klein-Balaton ist ein international bedeutendes Feuchtgebiet für Wasservögel.", "Im Káli-Becken befinden sich bizarre Steinmeere, die durch Erosion entstanden sind."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "koros-maros-np",
    type: "landmark",
    parent: "bekes",
    coords: [21.00, 46.50],
    name: {"de": "NP Körös-Maros", "hu": "Körös-Maros Nemzeti Park", "ro": "PN Criș-Mureș", "en": "Körös-Maros NP"},
    image: "/geo-images/hungary/koros-maros-np.webp",
    description: {"de": "Schutzgebiet in der südlichen Tiefebene mit reicher Vogelwelt.", "hu": "Dél-alföldi védett terület gazdag madárvilággal és rétekkel.", "ro": "Zonă protejată în câmpia de sud cu o avifaună bogată.", "en": "Protected area in the southern plains with rich birdlife."},
    facts: {"de": ["Wichtig für den Trappenschutz.", "Beheimatet alte Haustierrassen."], "hu": ["Fontos túzokvédelmi terület.", "Ősi magyar állatfajták otthona."], "ro": ["Important pentru protecția dropiilor.", "Găzduiește rase vechi de animale."], "en": ["Important for great bustard protection.", "Home to ancient domestic animal breeds."]},
  
    descriptionAdvanced: {
      "de": "Der Nationalpark Körös-Maros im Südosten Ungarns schützt die ursprünglichen Steppen- und Flusslandschaften zwischen den Flüssen Körös und Maros. Die Region ist geprägt von weiten Graslandschaften (Puszta), geheimnisvollen Lösswänden und idyllischen Altarmen, die eine reiche Vogelwelt beherbergen. Besonders bekannt ist der Park für seinen Schutz der Großtrappe, eines der schwersten flugfähigen Vögel der Welt, der hier eines seiner wichtigsten Rückzugsgebiete in Europa hat. Die unberührten Flussauen bieten zudem Lebensraum für seltene Pflanzen wie die ungarische Distel und zahlreiche Fischarten. In Zentren wie Szarvas können Besucher die Natur des Parks hautnah erleben und in die Hirtenkultur der Tiefebene eintauchen. Körös-Maros ist ein Ort von stiller Schönheit, der die Weite des ungarischen Horizonts widerspiegelt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark bewahrt bedeutende Reste der ursprünglichen Lösssteppe der Tiefebene.", "In der Region Dévaványa befindet sich die größte Großtrappen-Population Mitteleuropas.", "Der Maros-Fluss ist bekannt für seinen Reichtum an seltenen Flussmuscheln.", "Der Park umfasst 13 verschiedene Teilgebiete mit einer Gesamtfläche von über 50.000 Hektar."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "oreg-bakony",
    type: "landmark",
    parent: "veszprem",
    coords: [17.75, 47.25],
    name: {"de": "Alter Bakony", "hu": "Öreg-Bakony", "ro": "Bakonyul Vechi", "en": "Old Bakony"},
    image: "/geo-images/hungary/bakony.webp",
    description: {"de": "Der Kern des Bakony-Waldes mit dichten Buchenwäldern.", "hu": "A Bakony-erdő szíve dús bükkösökkel és szurdokokkal.", "ro": "Nucleul pădurii Bakony cu făgete dese.", "en": "The core of the Bakony forest with dense beech woods."},
    facts: {"de": ["Höchster Punkt ist der Kőris-hegy.", "Bekannt für seine Karstphänomene."], "hu": ["Legmagasabb pontja a Kőris-hegy.", "Karsztjelenségeiről nevezetes."], "ro": ["Cel mai înalt punct este Kőris-hegy.", "Cunoscut pentru fenomenele carstice."], "en": ["Highest point is Kőris-hegy.", "Known for its karst phenomena."]},
  
    descriptionAdvanced: {
      "de": "Der Alte Bakony (Öreg-Bakony) ist der zentrale und wildeste Teil des Bakony-Gebirges, geprägt von dichten Buchenwäldern und tiefen Kalksteinschluchten. Hier befindet sich mit dem Kőris-hegy der höchste Gipfel des Gebirges, von dem aus man an klaren Tagen bis zum Plattensee blicken kann. Die Region ist berühmt für ihre geheimnisvolle Atmosphäre, die einst den berühmten Bakonyer 'Betyáren' (Outlaws) als Versteck diente. Zahlreiche Karstquellen und Höhlen machen den Bakony zu einem spannenden Ziel für Entdecker und Naturfreunde. Historische Orte wie die Abtei Zirc oder die Burg Csesznek liegen eingebettet in diese waldreiche Mittelgebirgslandschaft. Der Öreg-Bakony ist das grüne Herz Transdanubiens und bietet unberührte Naturerlebnisse fernab der Zivilisation.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Kőris-hegy ist mit 706 Metern die höchste Erhebung im Bakony-Gebirge.", "Der Name des Gebirges leitet sich wahrscheinlich vom slawischen Wort für 'Buchenwald' ab.", "In den Höhlen des Bakony versteckten sich im 19. Jahrhundert legendäre Gesetzlose.", "Die Cuha-Schlucht ist eines der malerischsten Durchbruchstäler im Alten Bakony."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zempleni-hegyseg-b2",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.40, 48.40],
    name: {"de": "Zemplén-Gebirge", "hu": "Zempléni-hegység", "ro": "Munții Zemplén", "en": "Zemplén Mountains"},
    image: "/geo-images/hungary/zemplen.webp",
    description: {"de": "Abgelegenes, vulkanisches Gebirge mit vielen Burgen im Nordosten.", "hu": "Északkeleti vulkanikus hegység vadregényes várakkal.", "ro": "Munți vulcanici izolați cu multe cetăți în nord-est.", "en": "Remote volcanic mountains with many castles in the northeast."},
    facts: {"de": ["Heimat der Tokajer Weine.", "Reich an vulkanischen Formen."], "hu": ["A tokaji borok hazája.", "Vulkanikus formákban gazdag."], "ro": ["Casa vinurilor de Tokaj.", "Bogați în forme vulcanice."], "en": ["Home of the Tokaj wines.", "Rich in volcanic formations."]},
  
    descriptionAdvanced: {
      "de": "Das Zemplén-Gebirge, im äußersten Nordosten Ungarns an der slowakischen Grenze gelegen, ist ein waldreiches Vulkangebirge von herber Schönheit. Es beherbergt einige der einsamsten und unberührtesten Waldgebiete des Landes, in denen heute wieder Wölfe und Luchse heimisch sind. Die Region ist geprägt von markanten Bergkuppen, tiefen Tälern und zahlreichen Burgruinen wie Füzér oder Regéc, die stolz über den Wäldern thronen. Das Zemplén-Gebirge ist zudem untrennbar mit dem Tokajer Weinbau verbunden, da die vulkanischen Böden an seinen Südhängen die Basis für den berühmten Aszú-Wein bilden. Die ruhigen Bergdörfer bewahren oft noch ihre alten Traditionen und bieten eine authentische Gastfreundschaft. Für Wanderer und Naturliebhaber ist das Zemplén-Gebirge ein wahres Paradies am Rande der Karpaten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Zemplén-Gebirge ist das nördlichste und geologisch jüngste Gebirge Ungarns.", "In den abgelegenen Wäldern wurden in den letzten Jahren wiederholt Braunbären gesichtet.", "Die Region ist bekannt für ihre hochwertigen Eichenhölzer, die für Weinfässer genutzt werden.", "Zahlreiche Wanderwege wie der 'Nationalblaue Weg' (Kéktúra) führen durch das Gebirge."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pilis-hegyseg",
    type: "landmark",
    parent: "pest",
    coords: [18.90, 47.70],
    name: {"de": "Pilis-Gebirge", "hu": "Pilis hegység", "ro": "Munții Pilis", "en": "Pilis Mountains"},
    image: "/geo-images/hungary/pilis.webp",
    description: {"de": "Wanderparadies nahe Budapest mit Aussichtstürmen und Höhlen.", "hu": "Budapest közeli hegység kilátókkal és barlangokkal.", "ro": "Paradis al drumețiilor lângă Budapesta cu turnuri și peșteri.", "en": "Hiking paradise near Budapest with lookout towers and caves."},
    facts: {"de": ["Höchster Gipfel ist der Pilis-tető.", "Gilt als spirituelles Zentrum."], "hu": ["Legmagasabb pontja a Pilis-tető.", "Sokan spirituális központnak tartják."], "ro": ["Cel mai înalt vârf este Pilis-tető.", "Considerat un centru spiritual."], "en": ["Highest peak is Pilis-tető.", "Considered a spiritual center."]},
  
    descriptionAdvanced: {
      "de": "Das Pilis-Gebirge, nordwestlich von Budapest am Donauknie gelegen, ist eine sagenumwobene Berglandschaft von großer historischer und spiritueller Bedeutung. Für die frühen Ungarn galt der Pilis als heiliges Zentrum, und heute ziehen Orte wie der Rám-Abgrund (Rám-szakadék) Tausende von Wanderern an. Das Gebirge ist geprägt von steilen Kalksteinwänden, bizarren Felsformationen und zahlreichen Höhlen, die fantastische Ausblicke über die Donauschleife bieten. Der höchste Punkt, der Pilis-Gipfel, bietet ein Panorama von außergewöhnlicher Weite bis hin zu den Gipfeln der Matra. Historisch bedeutsam ist das Zisterzienserkloster in Pilisszentkereszt, das einst ein geistiges Zentrum des ungarischen Mittelalters war. Die Nähe zur Hauptstadt macht den Pilis zum beliebtesten Naherholungsgebiet der Budapester.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Pilis-Gebirge ist Teil des Biosphärenreservats der UNESCO.", "Der Rám-Abgrund ist eine der spektakulärsten und abenteuerlichsten Wanderrouten Ungarns.", "Im Mittelalter war das Gebirge das Jagdrevier der ungarischen Könige.", "Die Dobogókő-Hochebene gilt als einer der wichtigsten energetischen Orte des Landes."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vertes-hegyseg",
    type: "landmark",
    parent: "fejer",
    coords: [18.40, 47.40],
    name: {"de": "Vértes-Gebirge", "hu": "Vértes hegység", "ro": "Munții Vértes", "en": "Vértes Mountains"},
    image: "/geo-images/hungary/vertes.webp",
    description: {"de": "Karstgebirge in Transdanubien mit Ruinen und Wäldern.", "hu": "Dunántúli karszthegység várromokkal és sűrű erdőkkel.", "ro": "Munți carstici în Transdanubia cu ruine și păduri.", "en": "Karst mountains in Transdanubia with ruins and forests."},
    facts: {"de": ["Wichtige historische Schlachtfelder.", "Reich an Bauxitvorkommen."], "hu": ["Fontos történelmi csaták helyszíne.", "Bauxitlelőhelyekben gazdag."], "ro": ["Locul unor importante bătălii istorice.", "Bogați în zăcăminte de bauxită."], "en": ["Site of important historical battles.", "Rich in bauxite deposits."]},
  
    descriptionAdvanced: {
      "de": "Das Vértes-Gebirge ist eine idyllische Mittelgebirgsregion zwischen dem Bakony und dem Gerecse, bekannt für seine unberührten Wälder und geschichtsträchtigen Ruinen. Der Name 'Vértes' (Panzer) erinnert an eine Legende aus dem 11. Jahrhundert, wonach die fliehenden deutschen Ritter ihre Panzerharnische im Gebirge wegwarfen. Die Landschaft ist geprägt von sanften Hügeln, tiefen Karstschluchten und bizarren Dolomitfelsen, die eine reiche Flora und Fauna beherbergen. Ein besonderes Highlight ist die Burgruine Vitányvár, die versteckt im dichten Wald liegt und einen Hauch von Romantik versprüht. Das Gebirge bietet zudem hervorragende Möglichkeiten für Radtouren und ruhige Waldspaziergänge in einer fast unberührten Natur. Die Dörfer am Rande des Vértes, wie Csákvár, bewahren stolz ihr handwerkliches und adeliges Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Vértes-Gebirge ist eines der am dünnsten besiedelten Gebiete Ungarns.", "Die Region beherbergt seltene submediterrane Pflanzenarten auf den Dolomitfelsen.", "In der Nähe von Gánt befindet sich eine ehemalige Bauxit-Mine mit einer marsähnlichen Landschaft.", "Die Burg Csókakő am Südrand bietet einen weiten Blick über das Móri-Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gemenc-arter-b2",
    type: "landmark",
    parent: "tolna",
    coords: [18.85, 46.25],
    name: {"de": "Gemenc-Aue", "hu": "Gemenc ártér", "ro": "Lunca Gemenc", "en": "Gemenc Floodplain"},
    image: "/geo-images/hungary/gemenc.webp",
    description: {"de": "Einzigartiger Auenwald an der Donau mit reicher Fauna.", "hu": "Egyedülálló ártéri erdő a Duna mentén, vadon élő állatokkal.", "ro": "Pădure de luncă unică pe Dunăre cu o faună bogată.", "en": "Unique floodplain forest along the Danube with rich fauna."},
    facts: {"de": ["Berühmt für Rotwildbestände.", "Besitzt eine Schmalspurbahn."], "hu": ["Híres a gímszarvas állományáról.", "Erdei kisvasút fut át rajta."], "ro": ["Faimoasă pentru cerbi.", "Are o cale ferată cu ecartament îngust."], "en": ["Famous for its red deer population.", "Has a narrow-gauge forest railway."]},
  
    descriptionAdvanced: {
      "de": "Die Gemencer Aue im Süden Ungarns ist das größte zusammenhängende Überschwemmungsgebiet Mitteleuropas und eine Wildnis von Weltrang. Regelmäßig von den Fluten der Donau überspült, hat sich hier eine archaische Landschaft aus dichten Auwäldern, Totarmen und Schilfgebieten erhalten. Gemenc ist berühmt für seine riesigen Bestände an Rothirschen und Schwarzwild, die hier optimale Lebensbedingungen finden. Auch seltene Vögel wie der Schwarzstorch und der Seeadler brüten in den ungestörten Wipfeln der jahrhundertealten Bäume. Eine Fahrt mit der Gemencer Waldbahn bietet Besuchern die einzigartige Möglichkeit, tief in dieses Labyrinth aus Wasser und Wald einzudringen. Gemenc ist ein lebendiges Beispiel für die Kraft der Natur und ein unersetzlicher Teil des ungarischen Ökosystems.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Gemencer Aue ist Teil des Nationalparks Donau-Drau.", "Das Gebiet beherbergt die weltweit höchste Dichte an Schwarzstorch-Nestern.", "Die Donau-Altarme in Gemenc sind ein Paradies für Sportfischer und Naturfotografen.", "Im Winter bietet die Aue eine mystische Kulisse aus Eis und Reif in den Wäldern."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "debreceni-allatkert",
    type: "landmark",
    parent: "hajdu-bihar",
    coords: [21.638, 47.552],
    name: {"de": "Zoo Debrecen", "hu": "Debreceni Állatkert", "ro": "Grădina Zoologică Debrețin", "en": "Debrecen Zoo"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {"de": "Ungarns erster Zoo außerhalb von Budapest, im Großen Wald gelegen.", "hu": "Az ország első vidéki állatkertje a Nagyerdő szívében.", "ro": "Prima grădină zoologică provincială din Ungaria, în Pădurea Mare.", "en": "Hungary's first provincial zoo, located in the Great Forest."},
    facts: {"de": ["Verbunden mit einem Vergnügungspark.", "Spezialisiert auf exotische Vögel."], "hu": ["Vidámparkkal van összekapcsolva.", "Különleges madárfajokat is bemutat."], "ro": ["Conectată cu un parc de distracții.", "Specializată în păsări exotice."], "en": ["Connected with an amusement park.", "Specializes in exotic bird species."]},
  
    descriptionAdvanced: {
      "de": "Der Zoo und Vergnügungspark von Debrecen, im idyllischen Stadtwald (Nagyerdei Kultúrpark) gelegen, war der erste Tierpark Ungarns außerhalb der Hauptstadt. Seit seiner Eröffnung im Jahr 1958 bietet er Besuchern eine charmante Mischung aus Tierbegegnungen und nostalgischer Jahrmarktsatmosphäre. Der Zoo beherbergt eine Vielzahl von Tierarten aus aller Welt, darunter Giraffen, Flusspferde und seltene Affenarten, in einer parkähnlichen Umgebung. Besonders beliebt ist das angrenzende 'Ludas Matyi' Vergnügungsviertel mit seinen historischen Karussells und modernen Fahrgeschäften. Der Tierpark legt großen Wert auf die Umweltbildung und bietet interaktive Programme für Schulklassen und Familien an. Ein Spaziergang durch den Debrecener Zoo ist ein fester Bestandteil jedes Besuchs in der 'kalvinistischen Hauptstadt' Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Debrecener Zoo war der erste Regionaltiergarten in Ungarn.", "Er liegt inmitten des Großen Stadtwaldes (Nagyerdő), dem ersten Naturschutzgebiet des Landes.", "Der Vergnügungspark beherbergt das einzige noch funktionierende historische Riesenrad Ungarns.", "Der Zoo ist für seine erfolgreiche Zucht seltener exotischer Vogelarten bekannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyiregyhazi-allatkert",
    type: "landmark",
    parent: "szabolcs-szatmar-bereg",
    coords: [21.724, 48.006],
    name: {"de": "Sóstó Zoo", "hu": "Nyíregyházi Állatkert", "ro": "Grădina Zoologică Nyíregyháza", "en": "Nyíregyháza Zoo"},
    image: "/geo-images/hungary/nyiregyhaza-zoo.webp",
    description: {"de": "Preisgekrönter Tierpark mit naturnahen Gehegen und Ozeanarium.", "hu": "Világszínvonalú állatpark óceanáriummal a Sóstó partján.", "ro": "Parc zoologic premiat cu habitate naturale și oceanariu.", "en": "Award-winning zoo with natural habitats and an oceanarium."},
    facts: {"de": ["Gilt als einer der besten Europas.", "Beherbergt seltene weiße Tiger."], "hu": ["Európa egyik legjobb állatkertje.", "Ritka fehér tigrisek is élnek itt."], "ro": ["Considerată una dintre cele mai bune din Europa.", "Găzduiește rari tigri albi."], "en": ["Considered one of the best in Europe.", "Home to rare white tigers."]},
  
    descriptionAdvanced: {
      "de": "Der Sóstó-Zoo in Nyíregyháza gilt als einer der besten und modernsten Tiergärten Europas und ist ein absolutes Highlight im Nordosten Ungarns. In einem 30 Hektar großen Eichenwald untergebracht, bietet der Zoo den Tieren naturnahe und weitläufige Gehege, die nach Kontinenten gegliedert sind. Besonders beeindruckend ist die 'Grüne Pyramide', ein riesiges Tropenhaus mit einem Ozeanarium, in dem Besucher die faszinierende Unterwasserwelt und die Flora und Fauna des Regenwaldes erleben können. Nyíregyháza beherbergt zudem seltene Arten wie Weiße Tiger und Afrikanische Elefanten und ist international für seine Zuchterfolge bekannt. Mit seinen interaktiven Ausstellungen und modernen Informationszentren setzt der Zoo Maßstäbe in Sachen Bildung und Artenschutz. Ein Besuch in Sóstó ist ein unvergessliches Erlebnis für die ganze Familie.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von Nyíregyháza wurde mehrfach zum besten Tiergarten Europas in seiner Kategorie gewählt.", "Die 'Grüne Pyramide' beherbergt das größte Haifischbecken in ganz Mitteleuropa.", "Besucher können im 'Tarzan-Pfad' den Tieren der Savanne über Hängebrücken ganz nah kommen.", "Der Zoo besitzt ein eigenes Hotel direkt auf dem Gelände für ein besonderes Übernachtungserlebnis."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tropicarium-budapest",
    type: "landmark",
    parent: "budapest",
    coords: [19.017, 47.410],
    name: {"de": "Tropicarium", "hu": "Tropicarium Budapest", "ro": "Tropicarium Budapesta", "en": "Tropicarium Budapest"},
    image: "/geo-images/hungary/tropicarium.webp",
    description: {"de": "Das 'Haifisch-Zoo' in Budapest mit einem riesigen Glastunnel.", "hu": "A 'cápás állatkert' hatalmas víz alatti alagúttal.", "ro": "'Grădina zoologică cu rechini' din Budapesta cu un tunel de sticlă.", "en": "The 'shark zoo' in Budapest with a massive glass tunnel."},
    facts: {"de": ["Hat ein echtes Regenwald-Erlebnis.", "Man kann Haifütterungen sehen."], "hu": ["Valódi esőerdő élményt nyújt.", "Látványos cápaetetések helyszíne."], "ro": ["Oferă o experiență de junglă tropicală.", "Se pot vedea hrăniri de rechini."], "en": ["Provides a real rainforest experience.", "Spectacular shark feedings can be viewed."]},
  
    descriptionAdvanced: {
      "de": "Das Tropicarium Budapest im Einkaufszentrum Campona ist das größte Meerwasseraquarium Mitteleuropas und bietet ein faszinierendes Abenteuer in der Welt der Ozeane und Tropen. Die Hauptattraktion ist der riesige Haifischtunnel, in dem man unter zwei Millionen Litern Salzwasser spazieren kann, während majestätische Haie und Rochen über die Köpfe der Besucher hinweggleiten. Im tropischen Regenwald-Bereich können Besucher alle 15 Minuten ein echtes Tropengewitter mit Regen und Blitzen miterleben, umgeben von Alligatoren und exotischen Vögeln. Das Tropicarium zeigt zudem eine Vielzahl von Süßwasserfischen aus der ungarischen Heimat und ferner Länder. Es ist ein Ort der Unterhaltung und Information, der das Bewusstsein für die Zerbrechlichkeit der marinen Ökosysteme stärkt. Ein Besuch im 'Hai-Zoo' ist ein spannendes Erlebnis für Groß und Klein, unabhängig vom Wetter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Tropicarium beherbergt acht verschiedene Haiarten in seinem Hauptbecken.", "Die Besucher können in den Aquarien auch die Fauna des heimischen Plattensees bewundern.", "Es gibt spezielle 'Streichelbecken', in denen man Rochen unter Aufsicht berühren kann.", "Das Tropicarium beteiligt sich aktiv an internationalen Forschungs- und Zuchtprogrammen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "miskolctapolca-barlangfurdo",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.744, 48.061],
    name: {"de": "Höhlenbad Miskolctapolca", "hu": "Miskolctapolca Barlangfürdő", "ro": "Baia în Peșteră Miskolctapolca", "en": "Miskolctapolca Cave Bath"},
    image: "/geo-images/hungary/barlangfurdo.webp",
    description: {"de": "Einzigartiges Thermalbad in einer natürlichen Höhle.", "hu": "Egyedülálló gyógyfürdő természetes barlangjáratokban.", "ro": "Baie termală unică într-o peșteră naturală.", "en": "Unique thermal bath located in a natural cave system."},
    facts: {"de": ["Angenehme 30 Grad Wassertemperatur.", "Heilklimatische Wirkung der Luft."], "hu": ["Kellemes, 30 fokos termálvíz.", "A barlang levegője gyógyhatású."], "ro": ["Temperatură plăcută de 30 de grade.", "Efect curativ al aerului din peșteră."], "en": ["Pleasant 30-degree water temperature.", "Therapeutic effect of the cave air."]},
  
    descriptionAdvanced: {
      "de": "Das Höhlenbad von Miskolctapolca ist ein in Europa einzigartiges Thermalbad, das in einem natürlichen Höhlensystem über Jahrtausende durch Wassererosion entstanden ist. Besucher können in angenehm warmem Wasser durch die verwinkelten Gänge und Hallen der Höhle schwimmen und die heilende Wirkung der Quellen genießen. Die Luft in der Höhle ist besonders rein und frei von Allergenen, was das Baden zu einem ganzheitlichen Erlebnis für Körper und Geist macht. Neben den natürlichen Höhlengängen bietet der Komplex auch moderne Außenbecken und Saunalandschaften. Das sanfte Licht in der Grotte und das Echo der Stimmen verleihen dem Bad eine fast mystische Atmosphäre. Miskolctapolca ist ein unverzichtbares Ziel für alle, die Entspannung in einer spektakulären natürlichen Umgebung suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Höhlenbad ist das einzige Thermalbad dieser Art in ganz Europa.", "Das Wasser hat eine konstante Temperatur von etwa 30 Grad Celsius.", "In der Höhle gibt es keine Dampfbildung, was das Atmen besonders angenehm macht.", "Das Bad ist von einem idyllischen Park mit einem See und Bootshafen umgeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mohacsi-busojaras-poi",
    type: "landmark",
    parent: "baranya",
    coords: [18.683, 45.991],
    name: {"de": "Busójárás-Ort", "hu": "Mohácsi Busójárás helye", "ro": "Locul Busójárás", "en": "Mohács Busójárás Site"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Ort der berühmten Winteraustreibung mit gruseligen Masken.", "hu": "A télűző Busójárás helyszíne, UNESCO világörökség.", "ro": "Locul faimosului ritual de alungare a iernii cu măști.", "en": "Site of the famous winter expulsion ritual with scary masks."},
    facts: {"de": ["UNESCO-Weltkulturerbe.", "Findet jährlich im Februar statt."], "hu": ["Az UNESCO szellemi örökség része.", "Évente februárban rendezik meg."], "ro": ["Patrimoniu cultural UNESCO.", "Are loc anual în februarie."], "en": ["UNESCO Cultural Heritage.", "Takes place annually in February."]},
  
    descriptionAdvanced: {
      "de": "Das Busójárás in Mohács ist der bedeutendste Volksbrauch Ungarns zum Ende des Winters und gehört zum immateriellen UNESCO-Weltkulturerbe. Die Tradition geht auf die Legende zurück, wonach die Šokci-Kroaten mit schrecklichen Masken und Lärm die türkischen Besatzer aus der Stadt vertrieben haben. Heute ziehen Hunderte von 'Busós' in furchterregenden Holzmasken und Schafsfellkostümen durch die Straßen, wirbeln Staub auf und lärmen mit hölzernen Ratschen. Das Festival gipfelt im Verbrennen eines riesigen Sargs auf einem Scheiterhaufen, was symbolisch den Winter beerdigt. Zehntausende Besucher aus aller Welt kommen jährlich nach Mohács, um dieses farbenfrohe und archaische Spektakel mitzuerleben. Es ist ein Fest der Gemeinschaft, der Freude und des Sieges über das Dunkle.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Busójárás-Festival findet jedes Jahr im Februar während der Faschingszeit statt.", "Die handgeschnitzten Holzmasken sind Unikate und werden oft über Generationen vererbt.", "Die Teilnehmer tragen traditionelle Rindslederschuhe und weiße Leinenhosen.", "Das Fest wurde 2009 als erster ungarischer Brauch in die UNESCO-Liste aufgenommen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zsolnay-negyed",
    type: "landmark",
    parent: "baranya",
    coords: [18.243, 46.084],
    name: {"de": "Zsolnay-Viertel", "hu": "Zsolnay Kulturális Negyed", "ro": "Cartierul Zsolnay", "en": "Zsolnay Cultural Quarter"},
    image: "/geo-images/hungary/zsolnay-negyed.webp",
    description: {"de": "Wunderschön restauriertes Fabrikareal mit Porzellankunst.", "hu": "Pécs ékköve, a világhírű porcelángyár felújított területe.", "ro": "Zonă industrială restaurată superb cu artă din porțelan.", "en": "Beautifully restored factory area with world-famous ceramics."},
    facts: {"de": ["Heimat der Eosin-Keramik.", "Beherbergt Museen und Ateliers."], "hu": ["Az eozin mázas kerámia hazája.", "Múzeumoknak és műhelyeknek ad otthont."], "ro": ["Casa ceramicii de tip eozină.", "Găzduiește muzee și ateliere."], "en": ["Home of the eosin-glazed ceramics.", "Houses museums and art studios."]},
  
    descriptionAdvanced: {
      "de": "Das Zsolnay-Kulturviertel in Pécs ist ein spektakuläres Zeugnis ungarischer Industriegeschichte und ästhetischer Exzellenz. Auf dem Gelände der ehemaligen Porzellanmanufaktur entstand ein modernes Kunstzentrum, das die Geschichte der Familie Zsolnay und ihrer weltberühmten Keramiken würdigt. Besonders beeindruckend ist die Verwendung der charakteristischen Eosin-Glasur und der farbenfrohen Pyrogranit-Elemente an den Gebäuden. Besucher können Museen, Galerien, Werkstätten und das markante Zsolnay-Mausoleum erkunden. Das Viertel war das Herzstück des Projekts Pécs - Kulturhauptstadt Europas 2010 und ist heute ein lebendiger Treffpunkt für Künstler und Touristen. Die Symbiose aus historischer Industriearchitektur und moderner Nutzung ist in Ungarn einzigartig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Zsolnay-Viertel umfasst 15 denkmalgeschützte Gebäude auf einer Fläche von 5 Hektar.", "Die Familie Zsolnay erfand die einzigartige Eosin-Glasur, die metallisch schimmert.", "Im Viertel befindet sich das 'Gyugyi-Sammlung', eine der bedeutendsten Zsolnay-Kollektionen weltweit.", "Die Gebäude sind mit Frost- und wetterbeständigen Pyrogranit-Keramiken verziert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szegedi-dom",
    type: "landmark",
    parent: "csongrad-csanad",
    coords: [20.148, 46.248],
    name: {"de": "Votivkirche Szeged", "hu": "Szegedi Dóm", "ro": "Catedrala din Seghedin", "en": "Votive Church of Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {"de": "Monumentale neoromanische Kathedrale am Domplatz von Szeged.", "hu": "Monumentális neoromán dóm a Napfény városának szívében.", "ro": "Catedrală neoromanică monumentală în Piața Domului.", "en": "Monumental Neo-Romanesque cathedral on Szeged's Dome Square."},
    facts: {"de": ["Nach dem großen Hochwasser erbaut.", "Besitzt eine der größten Orgeln."], "hu": ["A nagy árvíz utáni fogadalomból épült.", "Az ország egyik legnagyobb orgonája van itt."], "ro": ["Construită după marea inundație.", "Are una dintre cele mai mari orgi."], "en": ["Built after the great flood.", "Houses one of the largest organs."]},
  
    descriptionAdvanced: {
      "de": "Der Dom von Szeged, auch Votivkirche genannt, ist das markanteste Wahrzeichen der Stadt und eine der größten Kirchen Ungarns. Das neoromanische Bauwerk wurde nach der verheerenden Flut von 1879 als Gelübde der Bürger errichtet, um den Wiederaufbau der Stadt zu danken. Der riesige Domplatz vor der Kirche, umgeben von Arkaden, bietet die perfekte Kulisse für die berühmten Szegeder Freilichtspiele. Im Inneren beeindruckt der Dom durch seine monumentale Orgel und die prachtvollen Mosaike sowie die Statue der 'Madonna im Pelz'. Die zwei markanten Türme des Doms sind schon von weitem sichtbar und prägen die Silhouette der Stadt an der Theiß. Der Dom ist nicht nur ein religiöses Zentrum, sondern auch ein Ort des Gedenkens an die Standhaftigkeit der Szegeder Bürger.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Dom wurde zwischen 1913 und 1930 nach Plänen von Frigyes Schulek und Ernő Foerk erbaut.", "Die Orgel des Doms besitzt über 9000 Pfeifen und ist eine der größten in Europa.", "Die Mosaike im Innenraum stellen Szenen aus der ungarischen Geschichte und Bibel dar.", "Vom Aussichtsturm des Doms hat man einen Panoramablick über die gesamte Stadt und die Theiß."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pannonhalmi-leveltar",
    type: "landmark",
    parent: "gyor-moson-sopron",
    coords: [17.761, 47.554],
    name: {"de": "Archiv Pannonhalma", "hu": "Pannonhalmi Apátsági Levéltár", "ro": "Arhiva Pannonhalma", "en": "Pannonhalma Abbey Archives"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Bedeutendes Archiv mit dem ältesten ungarischen Schriftstück.", "hu": "Történelmi levéltár a legősibb magyar nyelvemlékkel.", "ro": "Arhivă importantă cu cel mai vechi document scris maghiar.", "en": "Significant archive with the oldest Hungarian written record."},
    facts: {"de": ["Teil der Benediktinerabtei.", "Bewahrt die Tihanyer Stiftungsurkunde."], "hu": ["A bencés főapátság része.", "Itt őrzik a tihanyi alapítólevelet."], "ro": ["Parte a abației benedictine.", "Păstrează documentul de fondare din Tihany."], "en": ["Part of the Benedictine Abbey.", "Preserves the Tihany founding charter."]},
  
    descriptionAdvanced: {
      "de": "Das Archiv der Erzabtei Pannonhalma ist eines der bedeutendsten historischen Archive Ungarns und bewahrt die schriftliche Überlieferung aus über tausend Jahren auf. Sein kostbarster Schatz ist die Gründungsurkunde der Abtei Tihany aus dem Jahr 1055, die die ältesten geschriebenen Wörter der ungarischen Sprache enthält. Das Archiv dokumentiert nicht nur die Geschichte des Benediktinerordens, sondern liefert auch unschätzbare Informationen zur Rechts-, Wirtschafts- und Sozialgeschichte des mittelalterlichen Ungarns. Die sorgfältig bewahrten Pergamente, Siegel und Handschriften sind für Forscher aus aller Welt von größtem Interesse. Untergebracht in den ehrwürdigen Mauern der Abtei, strahlt das Archiv eine Atmosphäre von gelehrter Ruhe und Kontinuität aus. Es ist ein wahres Gedächtnis der ungarischen Nation und des europäischen Mönchtums.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Archiv bewahrt über 300.000 Dokumente und 1.500 Urkunden aus dem Mittelalter auf.", "Die Gründungsurkunde von Tihany ist das wichtigste Sprachdenkmal des Archivs.", "Viele Dokumente tragen wertvolle historische Siegel ungarischer Könige und Fürsten.", "Das Archiv ist Teil des UNESCO-Welterbes der Erzabtei Pannonhalma."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "magyar-nemzeti-galeria-poi",
    type: "landmark",
    parent: "budapest",
    coords: [19.039, 47.496],
    name: {"de": "Nationalgalerie", "hu": "Magyar Nemzeti Galéria", "ro": "Galeria Națională", "en": "Hungarian National Gallery"},
    image: "/geo-images/hungary/nemzeti-galeria.webp",
    description: {"de": "Die größte Sammlung ungarischer bildender Kunst im Budaer Schloss.", "hu": "A legjelentősebb hazai képzőművészeti gyűjtemény a Várban.", "ro": "Cea mai mare colecție de artă maghiară în Castelul Buda.", "en": "The largest collection of Hungarian fine arts in Buda Castle."},
    facts: {"de": ["Präsentiert Kunst vom Mittelalter.", "Befindet sich im ehemaligen Palast."], "hu": ["Középkortól napjainkig mutatja be a művészetet.", "A volt Királyi Palota épületében található."], "ro": ["Prezintă artă din Evul Mediu.", "Se află în fostul Palat Regal."], "en": ["Presents art from the Middle Ages.", "Located in the former Royal Palace."]},
  
    descriptionAdvanced: {
      "de": "Die Ungarische Nationalgalerie im prachtvollen Budapester Burgpalast beherbergt die umfassendste Sammlung ungarischer bildender Kunst von den Anfängen bis zur Gegenwart. Die Ausstellungen führen den Besucher durch die Epochen des Mittelalters, der Renaissance, des Barock bis hin zum 19. und 20. Jahrhundert. Besonders beeindruckend sind die riesigen Altäre aus der Spätgotik und die monumentalen Historienbilder ungarischer Meister wie Mihály Munkácsy. In den prachtvollen Sälen des Palastes kommen die Kunstwerke besonders zur Geltung und erzählen die bewegte Geschichte des Landes. Die Galerie bietet zudem einen fantastischen Blick über die Donau und das Parlament von den Fenstern des Burgbergs aus. Für jeden Kunstliebhaber ist ein Besuch der Nationalgalerie eine Reise durch die Seele Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Galerie ist in den Flügeln A, B, C und D des Budapester Burgpalastes untergebracht.", "Die Sammlung umfasst über 100.000 Kunstwerke ungarischer Künstler.", "Das Altarbild-Archiv ist eines der bedeutendsten seiner Art in Mitteleuropa.", "Die Galerie beherbergt die weltweit größte Sammlung von Werken von Mihály Munkácsy."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "corvin-negyed-poi",
    type: "landmark",
    parent: "budapest",
    coords: [19.073, 47.486],
    name: {"de": "Corvin-Viertel", "hu": "Corvin Negyed", "ro": "Cartierul Corvin", "en": "Corvin Quarter"},
    image: "/geo-images/hungary/corvin-negyed.webp",
    description: {"de": "Modernes Stadtviertel mit historischem Erbe in Budapest.", "hu": "Budapest modern, megújult városrésze történelmi emlékekkel.", "ro": "Cartier urban modern cu moștenire istorică în Budapesta.", "en": "Modern urban district with historical heritage in Budapest."},
    facts: {"de": ["Bekannt für die Corvin-Promenade.", "Stätte wichtiger 1956er Kämpfe."], "hu": ["Híres a Corvin-sétányról.", "Az 1956-os harcok egyik fontos helyszíne."], "ro": ["Cunoscut pentru promenada Corvin.", "Locul unor lupte importante din 1956."], "en": ["Known for the Corvin Promenade.", "Site of important 1956 battles."]},
  
    descriptionAdvanced: {
      "de": "Das Corvin-Viertel in Budapest ist eines der ehrgeizigsten Stadterneuerungsprojekte Zentraleuropas und verbindet moderne Architektur mit urbanem Lebensstil. Wo früher graue Mietshäuser standen, erstreckt sich heute eine moderne Promenade mit Geschäften, Restaurants, Büros und Wohnanlagen von internationalem Standard. Das Herzstück ist das Corvin-Plaza-Einkaufszentrum und die markante Corvin-Promenade, die als neue pulsierende Ader des 8. Bezirks dient. Trotz der Modernisierung bewahrt das Viertel historische Ankerpunkte wie das Corvin-Kino, das im 1956er Freiheitskampf eine zentrale Rolle spielte. Die Architektur besticht durch klare Linien, viel Glas und grüne Innenhöfe, die eine hohe Lebensqualität bieten. Das Viertel ist ein Symbol für das dynamische und zukunftsorientierte Budapest.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Corvin-Viertel Projekt wurde mit zahlreichen internationalen Immobilienpreisen ausgezeichnet.", "Die Corvin-Promenade ist die längste neu geschaffene Fußgängerzone in Budapest.", "In der Nähe befindet sich die Statue des Jungen von Pál-Straße, einem Wahrzeichen des Viertels.", "Das Viertel ist ein bedeutender Standort für internationale Technologie- und IT-Unternehmen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hatvan",
    type: "city",
    parent: "heves",
    coords: [19.6833, 47.6667],
    name: {"de": "Hatvan", "hu": "Hatvan", "ro": "Hatvan", "en": "Hatvan"},
    image: "/geo-images/hungary/hatvan.webp",
    description: {"de": "Stadt an der Zagyva, bekannt für das Grassalkovich-Schloss.", "hu": "Zagyva-parti város, a Grassalkovich-kastélyról ismert.", "ro": "Oraș pe râul Zagyva, cunoscut pentru Castelul Grassalkovich.", "en": "City on the Zagyva river, known for the Grassalkovich Castle."},
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Beherbergt das Ungarische Jagdmuseum."], "hu": ["Fontos vasúti csomópont.", "Itt található a Magyar Vadászati Múzeum."], "ro": ["Nod feroviar important.", "Găzduiește Muzeul Maghiar al Vânătorii."], "en": ["Important railway junction.", "Home to the Hungarian Hunting Museum."]},
  
    descriptionAdvanced: {
      "de": "Hatvan liegt an der Schnittstelle zwischen der Großen Tiefebene und dem Hügelland der Mátra und blickt auf eine traditionsreiche Geschichte als Verkehrsknotenpunkt zurück. Das Wahrzeichen der Stadt ist das prachtvolle barocke Grassalkovich-Schloss, in dem heute das Ungarische Jagdmuseum untergebracht ist. Die Ausstellungen zeigen die reiche Jagdkultur des Landes und die Naturwerte der Region in einem herrschaftlichen Ambiente. Die Stadt ist zudem für ihren bedeutenden Bahnhof und die Industriegeschichte bekannt, die die moderne Entwicklung maßgeblich prägten. Ein Spaziergang durch den Schlosspark bietet Erholung und einen Blick auf die architektonische Eleganz vergangener Jahrhunderte. Hatvan verbindet auf angenehme Weise ländliche Tradition mit urbaner Dynamik.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Grassalkovich-Schloss in Hatvan ist eines der bedeutendsten Barockgebäude der Region.", "Das Ungarische Jagdmuseum beherbergt eine weltweit anerkannte Trophäensammlung.", "Der Name 'Hatvan' bedeutet im Ungarischen 'Sechzig', was auf die Entfernung zu Budapest hindeutet.", "Die Stadt ist ein historisch wichtiger Eisenbahnknotenpunkt im Norden Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tapolca",
    type: "city",
    parent: "veszprem",
    coords: [17.4333, 46.8833],
    name: {"de": "Tapolca", "hu": "Tapolca", "ro": "Tapolca", "en": "Tapolca"},
    image: "/geo-images/hungary/tapolca.webp",
    description: {"de": "Stadt am Rande des Balaton-Oberlandes, berühmt für ihre Seehöhle.", "hu": "Város a Balaton-felvidék szélén, híres a tavasbarlangjáról.", "ro": "Oraș la marginea regiunii Balaton-Oberland, faimos pentru peștera sa cu lac.", "en": "City on the edge of the Balaton Uplands, famous for its lake cave."},
    facts: {"de": ["Die Seehöhle kann mit Booten befahren werden.", "Der Malom-See im Zentrum ist sehr malerisch."], "hu": ["A tavasbarlang csónakkal bejárható.", "A központban található Malom-tó rendkívül festői."], "ro": ["Peștera cu lac poate fi explorată cu barca.", "Lacul Malom din centru este foarte pitoresc."], "en": ["The lake cave can be explored by boat.", "The Malom Lake in the center is very picturesque."]},
  
    descriptionAdvanced: {
      "de": "Tapolca, im malerischen Balaton-Oberland gelegen, ist berühmt für sein unterirdisches See-Höhlensystem, das man mit Booten erkunden kann. Der glasklare, türkisfarbene See in der Höhle bietet ein unvergessliches Erlebnis in einer mystischen Unterwelt. In der Altstadt von Tapolca befindet sich der idyllische Mühlenteich (Malom-tó), umgeben von historischen Gebäuden und gemütlichen Cafés, der zum Verweilen einlädt. Die Stadt liegt im Herzen einer erloschenen Vulkanlandschaft und ist ein idealer Ausgangspunkt für Wanderungen zu den umliegenden Zeugenbergen. Bekannt ist Tapolca auch für sein spezielles Heilklima in den Höhlen, das besonders bei Atemwegserkrankungen Linderung verschafft. Die entspannte Atmosphäre und die einzigartige Verbindung von Wasser und Höhle machen die Stadt zu einem besonderen Ziel.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Seehöhle von Tapolca wurde 1903 durch Zufall bei einer Brunnenbohrung entdeckt.", "Tapolca ist eine der wenigen Städte der Welt, in denen man direkt unter der Innenstadt Boot fahren kann.", "Der Mühlenteich wird durch warmes Quellwasser gespeist und friert im Winter nie zu.", "Das Heilklima der Tapolcaer Höhlen ist staatlich für medizinische Anwendungen anerkannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kazincbarcika",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [20.6333, 48.25],
    name: {"de": "Kazincbarcika", "hu": "Kazincbarcika", "ro": "Kazincbarcika", "en": "Kazincbarcika"},
    description: {"de": "Industriestadt im Sajó-Tal, bekannt als die 'Stadt der Farben'.", "hu": "Ipari város a Sajó-völgyben, a 'Színes város' néven ismert.", "ro": "Oraș industrial în valea Sajó, cunoscut ca 'orașul culorilor'.", "en": "Industrial city in the Sajó Valley, known as the 'City of Colors'."},
    facts: {"de": ["Berühmt für seine großflächigen Wandmalereien an Wohngebäuden.", "Wichtiges Zentrum der chemischen Industrie."], "hu": ["Híres a lakóépületeken található nagyméretű falfestményeiről.", "A vegyipar fontos központja."], "ro": ["Faimos pentru picturile sale murale mari de pe clădirile rezidențiale.", "Centru important al industriei chimice."], "en": ["Famous for its large-scale murals on residential buildings.", "Important center of the chemical industry."]},
    image: "/poi-images/kazincbarcika.webp",
  
    descriptionAdvanced: {
      "de": "Kazincbarcika im Norden Ungarns ist als die 'Stadt der Farben' bekannt und hat sich von einer sozialistischen Industriestadt zu einem modernen urbanen Kunstzentrum gewandelt. Im Rahmen des Projekts 'Kolorcity' wurden zahlreiche Fassaden der Plattenbauten durch großflächige, bunte Wandgemälde ungarischer und internationaler Künstler verziert. Das Stadtbild ist heute geprägt von dieser lebendigen Straßenkunst, die Kazincbarcika landesweit einzigartig macht. Trotz der chemischen Industrie, die weiterhin ein wichtiger wirtschaftlicher Faktor ist, legt die Stadt großen Wert auf Grünflächen und Parks. Regelmäßige Kulturfestivals und Sportveranstaltungen prägen das gesellschaftliche Leben der Bewohner. Die Stadt ist ein interessantes Beispiel für den erfolgreichen Wandel einer Industriestadt durch Kreativität und Farbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kazincbarcika beherbergt über 40 großformatige Wandgemälde an öffentlichen Gebäuden.", "Die Stadt wurde in den 1950er Jahren durch die Zusammenlegung dreier Dörfer gegründet.", "Der Name 'Kolorcity' steht für das Konzept der farbenfrohen und lebenswerten Stadt.", "Kazincbarcika ist ein bedeutendes Zentrum der chemischen Industrie in Ungarn."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "ozd",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [20.2833, 48.2167],
    name: {"de": "Ózd", "hu": "Ózd", "ro": "Ózd", "en": "Ózd"},
    description: {"de": "Ehemaliges Zentrum der ungarischen Schwerindustrie in Nordungarn.", "hu": "A magyar nehézipar egykori központja Észak-Magyarországon.", "ro": "Fost centru al industriei grele maghiare în nordul Ungariei.", "en": "Former center of Hungarian heavy industry in northern Hungary."},
    facts: {"de": ["Bekannt für sein industrielles Erbe und Museen.", "Umgeben von den Hügeln des Heves-Borsodi-Hügellandes."], "hu": ["Ipari örökségéről és múzeumairól ismert.", "A Heves–Borsodi-dombság dombjai veszik körül."], "ro": ["Cunoscut pentru moștenirea sa industrială și muzee.", "Înconjurat de dealurile regiunii Heves-Borsod."], "en": ["Known for its industrial heritage and museums.", "Surrounded by the hills of the Heves-Borsod region."]},
    image: "/poi-images/ozd.webp",
  
    descriptionAdvanced: {
      "de": "Ózd ist eine Stadt mit einer tief verwurzelten industriellen Identität im Norden Ungarns, geprägt durch die einstige Stahl- und Eisenverarbeitung. Nach dem Niedergang der Schwerindustrie hat die Stadt begonnen, ihr industrielles Erbe in kulturelle Projekte umzuwandeln. Ein Highlight ist das 'Digitale Kraftwerk' und das Nationale Filminstitut, die in den historischen Werkshallen untergebracht sind und modernste Technik in alten Mauern präsentieren. Die Umgebung von Ózd ist überraschend grün und gebirgig, eingebettet in die Hügellandschaft des Gömör-Heveser Berglandes. Historische Arbeitersiedlungen mit ihrer charakteristischen Architektur vermitteln noch heute ein authentisches Bild der hiesigen Industriegeschichte. Ózd ist ein Ort des Umbruchs, der mutig neue Wege zwischen Tradition und Moderne sucht.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Ózd befindet sich das Nationale Filminstitut – Filmarcivums, ein modernes digitales Kulturzentrum.", "Die Stadt war über ein Jahrhundert lang eines der Zentren der ungarischen Metallurgie.", "Der industrielle Denkmalkomplex der Stadt ist landesweit einzigartig.", "In der Umgebung von Ózd befinden sich zahlreiche malerische Wanderwege und Naturschätze."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szigliget",
    type: "city",
    parent: "veszprem",
    coords: [17.4333, 46.8],
    name: {"de": "Szigliget", "hu": "Szigliget", "ro": "Szigliget", "en": "Szigliget"},
    description: {"de": "Malerisches Dorf am Nordufer des Plattensees, bekannt für seine Burg.", "hu": "Festői falu a Balaton északi partján, váráról ismert.", "ro": "Sat pitoresc pe malul nordic al Lacului Balaton, cunoscut pentru cetatea sa.", "en": "Picturesque village on the northern shore of Lake Balaton, known for its castle."},
    facts: {"de": ["Die Burg Szigliget bietet einen der schönsten Ausblicke auf den See.", "Bekannt für seine reetgedeckten Häuser und Weinkeller."], "hu": ["A szigligeti várból nyílik az egyik legszebb kilátás a Balatonra.", "Nádfedeles házairól és borpincéiről is ismert."], "ro": ["Cetatea Szigliget oferă una dintre cele mai frumoase vederi asupra lacului.", "Cunoscut pentru casele sale cu acoperiș de stuf și crame."], "en": ["Szigliget Castle offers one of the most beautiful views of the lake.", "Known for its thatched-roof houses and wine cellars."]},
    image: "/poi-images/szigliget.webp",
  
    descriptionAdvanced: {
      "de": "Szigliget, oft als 'Perle des Plattensees' bezeichnet, liegt malerisch auf einer Halbinsel am Nordufer und ist bekannt für seine imposante Burgruine. Die Burg Szigetvár thront hoch auf einem Vulkankegel und bietet einen der atemberaubendsten Ausblicke über den See und die umliegenden Zeugenberge. Das Dorf selbst besticht durch seinen authentischen Charakter mit reetgedeckten Häusern und schmalen Gassen, die sich den Hang hinaufziehen. Szigliget ist zudem ein bedeutendes Zentrum für Literatur und Kunst, da sich hier das Esterházy-Schloss befindet, das heute als Erholungsheim für ungarische Schriftsteller dient. Die umliegenden Weinhänge produzieren hervorragende Weine, die in den gemütlichen Kellern des Dorfes verkostet werden können. Szigliget ist ein Ort der Ruhe, der Inspiration und der zeitlosen Schönheit am Balaton.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szigetvár ist die einzige Burg am Plattensee, die von den Türken nie eingenommen wurde.", "Das Esterházy-Schloss in Szigetvár beherbergt seit 1952 eine traditionsreiche Künstlerkolonie.", "Die vulkanischen Basaltböden verleihen den hiesigen Weinen eine besondere Mineralität.", "Szigetvár ist bekannt für seine sommerlichen Burgspiele und Konzerte im Schlosspark."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "herend",
    type: "city",
    parent: "veszprem",
    coords: [17.8167, 47.1333],
    name: {"de": "Herend", "hu": "Herend", "ro": "Herend", "en": "Herend"},
    image: "/geo-images/hungary/herend.webp",
    description: {"de": "Weltberühmt für seine Porzellanmanufaktur, die seit 1826 besteht.", "hu": "Világhírű porcelánmanufaktúrájáról ismert, amely 1826 óta működik.", "ro": "Renumit în întreaga lume pentru manufactura sa de porțelan, fondată în 1826.", "en": "World-famous for its porcelain manufactory, operating since 1826."},
    facts: {"de": ["Das Herend-Porzellan ist ein ungarisches Kulturerbe (Hungarikum).", "Beherbergt das Porzellanmuseum und die Minimanufaktur."], "hu": ["A herendi porcelán magyar örökség (Hungarikum).", "Itt található a Porcelánmúzeum és a Minimanufaktúra."], "ro": ["Porțelanul de Herend este un patrimoniu cultural maghiar (Hungarikum).", "Găzduiește Muzeul Porțelanului și Minimanufactura."], "en": ["Herend porcelain is a Hungarian cultural heritage (Hungarikum).", "Home to the Porcelain Museum and the Minimanufactory."]},
  
    descriptionAdvanced: {
      "de": "Herend ist weltweit ein Synonym für exquisites Porzellan und handwerkliche Perfektion aus Ungarn. Die 1826 gegründete Porzellanmanufaktur Herend ist eine der größten und traditionsreichsten Europas und belieferte bereits königliche Höfe wie den von Königin Victoria. Im Besucherzentrum 'Porcelanium' können Gäste die einzelnen Schritte der Porzellanherstellung, vom Formen bis zur feinen Bemalung, live miterleben. Das Herender Porzellanmuseum zeigt eine beeindruckende Sammlung historischer Stücke und moderner Meisterwerke, die den Weltruf der Marke begründen. Die charakteristischen Muster wie 'Victoria' oder 'Rothschild' sind Sammlern auf allen Kontinenten bekannt. Ein Besuch in Herend ist ein Eintauchen in eine Welt voller Eleganz, Tradition und ungarischer Handwerkskunst auf höchstem Niveau.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Herender Porzellan gewann 1851 auf der Londoner Weltausstellung die Goldmedaille.", "Die Manufaktur stellt noch heute jedes einzelne Stück in reiner Handarbeit her.", "Berühmte Kunden waren unter anderem Kaiser Franz Joseph I. und die britische Königsfamilie.", "Das Museum beherbergt eine Sammlung von über 8000 verschiedenen Porzellanobjekten."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mezokovesd",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [20.5833, 47.8167],
    name: {"de": "Mezőkövesd", "hu": "Mezőkövesd", "ro": "Mezőkövesd", "en": "Mezőkövesd"},
    description: {"de": "Zentrum der Matyó-Kultur, bekannt für ihre farbenfrohen Stickereien.", "hu": "A matyó kultúra központja, színes hímzéseiről ismert.", "ro": "Centrul culturii Matyó, cunoscut pentru broderiile sale colorate.", "en": "Center of the Matyó culture, known for its colorful embroideries."},
    facts: {"de": ["Die Matyó-Stickerei gehört zum UNESCO-Weltkulturerbe.", "Bekannt für das Zsóry-Heilbad."], "hu": ["A matyó hímzés az UNESCO szellemi világörökség része.", "A Zsóry-gyógyfürdőről is ismert."], "ro": ["Broderia Matyó face parte din patrimoniul UNESCO.", "Cunoscut și pentru baia curativă Zsóry."], "en": ["Matyó embroidery is part of the UNESCO Intangible Cultural Heritage.", "Known for the Zsóry medicinal bath."]},
    image: "/poi-images/mezokovesd.webp",
  
    descriptionAdvanced: {
      "de": "Mezőkövesd ist die 'Hauptstadt' des Matyó-Landes und weltberühmt für seine farbenfrohe Volkskunst und Stickereien. Die Matyó-Stickerei mit ihren charakteristischen bunten Rosenmotiven gehört zum immateriellen UNESCO-Weltkulturerbe und prägt die Identität der Stadt. Im Stadtteil 'Hadas' können Besucher das ursprüngliche Dorfbild mit traditionellen Häusern und Werkstätten der Volkskünstler erleben. Mezőkövesd ist zudem für das Zsóry-Heil- und Strandbad bekannt, das über eines der wirksamsten schwefelhaltigen Thermalwasser in Ungarn verfügt. Die Stadt verbindet auf einzigartige Weise die Bewahrung lebendiger Traditionen mit modernen Erholungsmöglichkeiten. Ein Besuch bei den stickenden Frauen oder in den Museen der Stadt bietet tiefe Einblicke in die ungarische Volksseele.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Matyó-Volkskunst in Mezőkövesd ist seit 2012 Teil des UNESCO-Weltkulturerbes.", "Das Zsóry-Bad besitzt eines der schwefelreichsten Thermalwasser in ganz Mitteleuropa.", "Das Matyó-Museum zeigt prächtige Trachten, die durch ihre enorme Farbenpracht bestechen.", "Jährlich findet in Mezőkövesd das Matyó-Festival zur Feier der regionalen Identität statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajos",
    type: "city",
    parent: "bacs-kiskun",
    coords: [19.1167, 46.4],
    name: {"de": "Hajós", "hu": "Hajós", "ro": "Hajós", "en": "Hajós"},
    image: "/geo-images/hungary/hajos.webp",
    description: {"de": "Stadt in der Tiefebene, berühmt für ihr einzigartiges Weinkellerdorf.", "hu": "Alföldi város, egyedülálló pincefalujáról híres.", "ro": "Oraș în câmpie, faimos pentru satul său unic de crame.", "en": "City in the plains, famous for its unique wine cellar village."},
    facts: {"de": ["Das Kellerdorf besteht aus over 1200 kleinen Weinkellern.", "Bekannt für das Barockschloss des Erzbischofs."], "hu": ["A pincefalu több mint 1200 apró borpincéből áll.", "Az érseki barokk kastélyáról is ismert."], "ro": ["Satul de crame este format din peste 1200 de mici pivnițe de vin.", "Cunoscut și pentru castelul baroc al arhiepiscopului."], "en": ["The cellar village consists of over 1200 small wine cellars.", "Known for the Archbishop's Baroque Castle."]},
  
    descriptionAdvanced: {
      "de": "Hajós ist weit über die Grenzen des Komitats Bács-Kiskun hinaus für sein einzigartiges Kellerdorf bekannt, das aus über 1.200 historischen Weinkellern besteht. Diese Keller wurden von den im 18. Jahrhundert eingewanderten Donauschwaben in die Lösswand gegraben und bilden heute ein geschlossenes architektonisches Ensemble. Die weiß getünchten Presshäuser in den schmalen Gassen des Kellerdorfes vermitteln eine ganz besondere, nostalgische Atmosphäre. Hajós ist zudem als bedeutender Wallfahrtsort bekannt, dessen barocke Kirche eine wertvolle Marienstatue beherbergt. Das barocke Erzbischofsschloss ist ein weiteres architektonisches Highlight und dokumentiert den einstigen Glanz der Region. Ein Besuch in Hajós verbindet den Genuss exzellenter Weine mit dem Erlebnis einer lebendigen schwäbischen Tradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Kellerdorf von Hajós ist das größte zusammenhängende seiner Art in ganz Europa.", "Die Weinregion ist vor allem für ihre charaktervollen Rotweine wie Cabernet Sauvignon bekannt.", "Jährlich am Urbantag findet in Hajós ein großes Weinfestival im Kellerdorf statt.", "Das Erzbischofsschloss von Hajós ist das älteste seiner Art im Komitat Bács-Kiskun."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentgotthard",
    type: "city",
    parent: "vas",
    coords: [16.2833, 46.95],
    name: {"de": "Szentgotthárd", "hu": "Szentgotthárd", "ro": "Szentgotthárd", "en": "Szentgotthárd"},
    description: {"de": "Westlichste Stadt Ungarns an der Grenze zu Österreich.", "hu": "Magyarország legnyugatibb városa az osztrák határnál.", "ro": "Cel mai vestic oraș din Ungaria, la granița cu Austria.", "en": "Hungary's westernmost city at the Austrian border."},
    facts: {"de": ["Ort der berühmten Schlacht von Szentgotthárd im Jahr 1664.", "Besitzt eine prächtige Zisterzienserabtei."], "hu": ["Az 1664-es híres szentgotthárdi csata helyszíne.", "Pompás ciszterci apátsággal rendelkezik."], "ro": ["Locul faimoasei bătălii de la Szentgotthárd din 1664.", "Are o abație cisterciană magnifică."], "en": ["Site of the famous Battle of Szentgotthárd in 1664.", "Features a magnificent Cistercian abbey."]},
    image: "/poi-images/szentgotthard.webp",
  
    descriptionAdvanced: {
      "de": "Szentgotthárd, die westlichste Stadt Ungarns direkt an der österreichischen Grenze, blickt auf eine geschichtsträchtige Vergangenheit und eine lebendige Gegenwart zurück. Berühmt wurde sie durch die Schlacht von Szentgotthárd im Jahr 1664, in der ein vereintes christliches Heer den Vormarsch der Osmanen stoppte. Das Wahrzeichen der Stadt ist die prachtvolle Barockkirche des Zisterzienserklosters, die zu den schönsten des Landes gehört. Heute ist Szentgotthárd ein bedeutendes industrielles Zentrum und ein Vorreiter in Sachen grenzüberschreitender Zusammenarbeit. Das moderne Spa- und Wellnesszentrum 'St. Gotthard' bietet erstklassige Erholung in einer fast mediterranen Atmosphäre. Die Stadt ist zudem ein Tor zum Nationalpark Őrség und bietet ideale Bedingungen für Natur- und Aktivtouristen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szentgotthárd liegt am Zusammenfluss der Raab (Rába) und der Lafnitz (Lapincs).", "Die Barockkirche der Stadt besitzt Deckenfresken, die die berühmte Schlacht gegen die Türken darstellen.", "In der Stadt befindet sich eines der modernsten Motorenwerke des Opel-Konzerns.", "Szentgotthárd ist ein wichtiges Zentrum der slowenischen Minderheit in Ungarn."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lenti",
    type: "city",
    parent: "zala",
    coords: [16.5333, 46.6167],
    name: {"de": "Lenti", "hu": "Lenti", "ro": "Lenti", "en": "Lenti"},
    description: {"de": "Stadt im Südwesten, bekannt für ihr Thermalbad und den Energiepark.", "hu": "Délnyugati város, termálfürdőjéről és energiaparkjáról ismert.", "ro": "Oraș în sud-vest, cunoscut pentru baia sa termală și parcul energetic.", "en": "Southwestern city, known for its thermal bath and energy park."},
    facts: {"de": ["Der St. Georg Energiepark soll heilende Erdstrahlen haben.", "Ausgangspunkt der längsten Waldbahn Ungarns."], "hu": ["A Szent György Energiapark gyógyító földsugárzásáról ismert.", "Itt található Magyarország leghosszabb erdei vasútjának kiindulópontja."], "ro": ["Parcul energetic Sf. Gheorghe ar avea radiații terestre curative.", "Punctul de plecare al celei mai lungi căi ferate forestiere din Ungaria."], "en": ["The St. George Energy Park is said to have healing earth radiations.", "Starting point of the longest forest railway in Hungary."]},
    image: "/poi-images/lenti.webp",
  
    descriptionAdvanced: {
      "de": "Lenti, im Südwesten Ungarns am Treffpunkt dreier Grenzen gelegen, ist ein bekannter Kurort mit einer ganz besonderen energetischen Kraft. Das dortige Heil- und Erlebnisbad ist nicht nur für sein wertvolles Thermalwasser bekannt, sondern beherbergt auch den St.-Georg-Energiepark. Man glaubt, dass hier heilende Energieströme fließen, die den Genesungsprozess zusätzlich unterstützen sollen. Die Stadt ist zudem ein idealer Ausgangspunkt für Erkundungen in der hügeligen Landschaft des Komitats Zala und zum nahegelegenen Kerka-Tal. Eine Schmalspurbahn führt von Lenti aus durch die dichten Wälder der Umgebung und bietet Naturerlebnisse für die ganze Familie. Lenti strahlt eine angenehme, ruhige Atmosphäre aus und ist ein Ort der Harmonie zwischen Mensch und Natur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Lenti besitzt ein einzigartiges Heilwasser, das besonders wirksam bei Gelenkerkrankungen ist.", "Der St.-Georg-Energiepark im Bad ist landesweit für seine energetische Wirkung bekannt.", "Von Lenti aus startet die längste Schmalspurbahn Ungarns durch Waldgebiete.", "Die Stadt liegt in unmittelbarer Nähe zur Grenze von Slowenien und Kroatien."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "karcag",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.9167, 47.3167],
    name: {"de": "Karcag", "hu": "Karcag", "ro": "Karcag", "en": "Karcag"},
    description: {"de": "Hauptstadt der Region Groß-Kumanien, bewahrt kumanische Traditionen.", "hu": "A Nagykunság fővárosa, a kun hagyományok őrzője.", "ro": "Capitala regiunii Cumania Mare, păstrează tradițiile cumane.", "en": "Capital of the Greater Cumania region, preserving Cuman traditions."},
    facts: {"de": ["Bekannt für das Hammelgulasch nach Karcager Art (Hungarikum).", "Beherbergt das Györffy-István-Nagykun-Museum."], "hu": ["Híres a karcagi birkapörköltről (Hungarikum).", "Itt található a Györffy István Nagykun Múzeum."], "ro": ["Faimos pentru tocană de berbec în stil Karcag (Hungarikum).", "Găzduiește Muzeul Györffy István Nagykun."], "en": ["Famous for the Karcag-style mutton stew (Hungarikum).", "Home to the Györffy István Nagykun Museum."]},
    image: "/poi-images/karcag.webp",
  
    descriptionAdvanced: {
      "de": "Karcag ist das historische und kulturelle Zentrum von Großkumanien (Nagykunság) und bewahrt stolz das Erbe der einstigen Nomadenstämme. Die Stadt ist geprägt von einer weiten, offenen Landschaft und einer Architektur, die vom Stolz der kumanischen Bewohner zeugt. Das Györffy-István-Nagykun-Museum dokumentiert die faszinierende Geschichte der Kumanen und zeigt bedeutende archäologische Funde aus der Bronzezeit. Karcag ist zudem für seine kulinarische Tradition berühmt, insbesondere für das Karcager Hammelgulasch, das zum ungarischen Kulturerbe gehört. Das moderne Akácliget-Heilbad bietet Entspannung in einer waldreichen Umgebung am Rande der Stadt. Karcag ist ein Ort, an dem die Tradition der Tiefebene noch immer lebendig gelebt und gefeiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Karcag ist die 'Hauptstadt' der historischen Region Großkumanien.", "Das Karcager Hammelgulasch wird traditionell in großen Kesseln über offenem Feuer zubereitet.", "In der Stadt befindet sich das markante Nagykun-Denkmal, das an die Ansiedlung der Kumanen erinnert.", "Karcag beherbergt eine bedeutende Windmühle, die ein Symbol für die Agrartradition der Region ist."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jaszapati",
    type: "city",
    parent: "jasz-nagykun-szolnok",
    coords: [20.15, 47.52],
    name: {"de": "Jászapáti", "hu": "Jászapáti", "ro": "Jászapáti", "en": "Jászapáti"},
    description: {"de": "Kleinstadt im Jászság, bekannt für ihr Thermalbad und die barocke Kirche.", "hu": "Jászsági kisváros, termálfürdőjéről és barokk templomáról ismert.", "ro": "Oraș mic în Jászság, cunoscut pentru baia sa termală și biserica barocă.", "en": "Small town in Jászság, known for its thermal bath and Baroque church."},
    facts: {"de": ["Besitzt eine der größten Kirchen der Region.", "Das Heilwasser ist seit den 1960ern beliebt."], "hu": ["A régió egyik legnagyobb templomával rendelkezik.", "Gyógyvize az 1960-as évek óta népszerű."], "ro": ["Are una dintre cele mai mari biserici din regiune.", "Apa curativă este populară din anii 1960."], "en": ["Has one of the largest churches in the region.", "Its healing water has been popular since the 1960s."]},
    image: "/poi-images/jaszapati.webp",
  
    descriptionAdvanced: {
      "de": "Jászapáti ist eine traditionsreiche Stadt in der Region Jászság, bekannt für ihr reiches religiöses Erbe und ihre heilenden Quellen. Die monumentale katholische Kirche der Stadt mit ihren prachtvollen Deckengemälden ist ein bedeutendes barockes Denkmal der ungarischen Tiefebene. Jászapáti beherbergt zudem das Tölgyes Heil- und Strandbad, das in einem schattigen Eichenpark angelegt wurde und für sein heilendes Thermalwasser geschätzt wird. Die Stadt pflegt intensiv die Traditionen der Jazygen-Volksgruppe, was sich in zahlreichen Festen und kulturellen Veranstaltungen widerspiegelt. Die umliegende Landschaft ist geprägt von fruchtbaren Feldern und einer ruhigen, ländlichen Atmosphäre. Jászapáti bietet eine ideale Kombination aus sakraler Kunst, gesundheitlicher Erholung und regionaler Identität.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Stadt wurde im 13. Jahrhundert von den einwandernden Jazygen besiedelt.", "Die Deckenfresken der katholischen Kirche stammen von bedeutenden Meistern des 18. Jahrhunderts.", "Das Tölgyes-Bad ist nach dem angrenzenden Eichenwald benannt.", "Jászapáti ist ein wichtiges Zentrum für den Anbau von Getreide und Sonnenblumen in der Tiefebene."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszaujvaros",
    type: "city",
    parent: "borsod-abauj-zemplen",
    coords: [21.05, 47.93],
    name: {"de": "Tiszaújváros", "hu": "Tiszaújváros", "ro": "Tiszaújváros", "en": "Tiszaújváros"},
    description: {"de": "Moderne Industriestadt an der Theiß, bekannt für Chemie und Sport.", "hu": "Modern iparváros a Tisza partján, vegyiparáról és sportéletéről ismert.", "ro": "Oraș industrial modern pe Tisa, cunoscut pentru industria chimică și sport.", "en": "Modern industrial city on the Tisza, known for chemistry and sports."},
    facts: {"de": ["Hieß früher Leninváros.", "Verfügt über ein großes Heil- und Erlebnisbad."], "hu": ["Korábban Leninvárosnak hívták.", "Hatalmas gyógy- és élményfürdővel rendelkezik."], "ro": ["Se numea anterior Leninváros.", "Are o baie curativă și de aventură imensă."], "en": ["Formerly called Leninváros.", "Features a large medicinal and adventure bath."]},
    image: "/poi-images/tiszaujvaros.webp",
  
    descriptionAdvanced: {
      "de": "Tiszaújváros ist eine moderne, dynamische Stadt am Ufer der Theiß, die vor allem durch ihre bedeutende chemische Industrie und ihr erstklassiges Heilbad bekannt ist. In den 1960er Jahren als sozialistische Musterstadt gegründet, hat sich Tiszaújváros heute zu einem attraktiven Wohn- und Tourismusstandort entwickelt. Das Thermal- und Erlebnisbad der Stadt gehört zu den modernsten Ungarns und bietet mit seinem jod- und bromhaltigen Wasser hervorragende Bedingungen für Erholung und Heilung. Die Stadt legt großen Wert auf Sport und Freizeitgestaltung, was sich in zahlreichen modernen Sportanlagen und gepflegten Parks widerspiegelt. Die Nähe zum Fluss Theiß ermöglicht zudem vielfältige Aktivitäten wie Angeln, Bootfahren und Radtouren entlang des Ufers. Tiszaújváros ist ein Beispiel für erfolgreiche Stadtentwicklung in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszaújváros wurde ursprünglich unter dem Namen Leninváros (Leninstadt) gegründet.", "Die Stadt beherbergt eines der größten Chemieunternehmen Mitteleuropas.", "Das Heilbad von Tiszaújváros ist für seine moderne Architektur und hohe Wasserqualität bekannt.", "Die Stadt ist ein regelmäßiger Austragungsort internationaler Triathlon-Wettbewerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "komlo",
    type: "city",
    parent: "baranya",
    coords: [18.27, 46.19],
    name: {"de": "Komló", "hu": "Komló", "ro": "Komló", "en": "Komló"},
    description: {"de": "Ehemalige Bergbaustadt im Mecsek-Gebirge mit schöner natürlicher Umgebung.", "hu": "Egykori bányászváros a Mecsekben, szép természeti környezettel.", "ro": "Fost oraș minier în munții Mecsek cu împrejurimi naturale frumoase.", "en": "Former mining town in the Mecsek Mountains with beautiful natural surroundings."},
    facts: {"de": ["War ein wichtiges Zentrum des Steinkohlebergbaus.", "Ein beliebtes Wandergebiet am Fuße des Mecsek."], "hu": ["A feketekőszén-bányászat fontos központja volt.", "Népszerű túrahelyszín a Mecsek lábánál."], "ro": ["A fost un centru important al minieritului de cărbune.", "O zonă populară de drumeții la poalele munților Mecsek."], "en": ["Was an important center of coal mining.", "A popular hiking area at the foot of the Mecsek."]},
    image: "/poi-images/komlo.webp",
  
    descriptionAdvanced: {
      "de": "Komló, eingebettet in die bewaldeten Täler des Mecsek-Gebirges, blickt auf eine bedeutende Geschichte als Bergbaustadt zurück. Im 20. Jahrhundert entwickelte sich die Stadt zu einem der wichtigsten Steinkohlezentren Ungarns, was das Stadtbild und die Gemeinschaft maßgeblich prägte. Nach der Einstellung des Bergbaus hat sich Komló zu einem Tor für Naturtouristen entwickelt, die die unberührten Wälder des Mecsek erkunden möchten. Einzigartig ist das Mini-Zoo-Zentrum, das eine Vielzahl einheimischer und exotischer Kleintiere in einer familienfreundlichen Atmosphäre präsentiert. Die Stadt ist zudem ein idealer Ausgangspunkt für Wanderungen zu den Ruinen der Burg Máré und durch das idyllische Sikonda-Tal. Komló verbindet industrielles Erbe mit der natürlichen Frische des Mittelgebirges.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Komló war jahrzehntelang eine der bedeutendsten Bergbaustädte in Südungarn.", "In der Nähe befindet sich das malerische Sikonda-Bad mit seinem heilenden Wasser.", "Die Stadt beherbergt ein interessantes Bergbaumuseum zur Geschichte der Kohlegewinnung.", "Die umliegenden Wälder des Mecsek bieten ein dichtes Netz an markierten Wanderwegen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szazhalombatta",
    type: "city",
    parent: "pest",
    coords: [18.91, 47.32],
    name: {"de": "Százhalombatta", "hu": "Százhalombatta", "ro": "Százhalombatta", "en": "Százhalombatta"},
    description: {"de": "Industriestadt an der Donau, bekannt für ihre Raffinerie und Archäologie.", "hu": "Duna-parti iparváros, finomítójáról és régészeti parkjáról ismert.", "ro": "Oraș industrial pe Dunăre, cunoscut pentru rafinăria sa și parkul arheologic.", "en": "Industrial city on the Danube, known for its refinery and archaeological park."},
    facts: {"de": ["Der Name bedeutet 'Hundert Hügel'.", "Beherbergt ein bedeutendes Eisenzeit-Museum."], "hu": ["Neve száz halmot jelent.", "Jelentős vaskori régészeti parkkal rendelkezik."], "ro": ["Numele înseamnă 'O sută de movile'.", "Găzduiește un muzeu important al epocii fierului."], "en": ["The name means 'Hundred Mounds'.", "Home to a significant Iron Age archaeological park."]},
    image: "/poi-images/szazhalombatta.webp",
  
    descriptionAdvanced: {
      "de": "Százhalombatta liegt am rechten Ufer der Donau südlich von Budapest und ist bekannt für seine beeindruckende prähistorische Vergangenheit und moderne Industrie. Der Name der Stadt bedeutet wörtlich 'Hundert Hügel' und bezieht sich auf die über 100 eisenzeitlichen Grabhügel im hiesigen Archäologischen Park. Dieser Park ist das erste interaktive Freilichtmuseum seiner Art in Ungarn und präsentiert rekonstruierte Häuser und Grabstätten aus der Hallstattzeit. Heute ist die Stadt zudem ein bedeutendes Energiezentrum mit einer der größten Erdölraffinerien des Landes. Die Donaupromenade von Százhalombatta bietet moderne Freizeitmöglichkeiten und einen weiten Blick über den Fluss. Die Stadt verbindet auf faszinierende Weise die ältesten Siedlungsspuren der Region mit technischem Fortschritt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Százhalombatta beherbergt den größten prähistorischen Grabhügel-Park Mitteleuropas.", "Der Name der Stadt stammt von den zahlreichen künstlichen Hügeln der Eisenzeit.", "In der Stadt befindet sich die bedeutende 'Matrica'-Museumssammlung zur römischen Geschichte.", "Százhalombatta ist ein wichtiges Zentrum der ungarischen Energiewirtschaft."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "monor",
    type: "city",
    parent: "pest",
    coords: [19.45, 47.35],
    name: {"de": "Monor", "hu": "Monor", "ro": "Monor", "en": "Monor"},
    description: {"de": "Stadt am Rande des Gödöllő-Hügellandes, bekannt für ihr Kellerdorf.", "hu": "Város a Gödöllői-dombság szélén, pincefalujáról ismert.", "ro": "Oraș la poalele dealurilor Gödöllő, cunoscut pentru satul său de crame.", "en": "City at the edge of the Gödöllő Hills, known for its cellar village."},
    facts: {"de": ["Das Kellerdorf Strázsa-hegy hat fast 1000 Weinkeller.", "Wichtiges Weinbauzentrum in der Nähe von Budapest."], "hu": ["A Strázsa-hegyi pincefalu közel 1000 borpincét számlál.", "Fontos borászati központ Budapest közelében."], "ro": ["Satul de crame Strázsa-hegy are aproape 1000 de pivnițe.", "Centru viticol important lângă Budapesta."], "en": ["The Strázsa-hegy cellar village has nearly 1000 wine cellars.", "Important viticultural center near Budapest."]},
    image: "/poi-images/monor.webp",
  
    descriptionAdvanced: {
      "de": "Monor liegt am Rande der Hügellandschaft von Gödöllő und ist landesweit für sein einzigartiges Kellerdorf am Strázsa-Hügel bekannt. Das Kellerdorf umfasst fast 1000 historische Weinkeller, die in geschlossenen Reihen angeordnet sind und ein bedeutendes architektonisches Denkmal bilden. Die Region hat eine lange Tradition im Weinbau, die bis in die Zeit des Mittelalters zurückreicht. Jährlich finden hier Weinfeste und kulinarische Veranstaltungen statt, die die exzellenten Weine der Region und die Gastfreundschaft der Bewohner feiern. Neben dem Wein bietet Monor eine ruhige, kleinstädtische Atmosphäre und ist ein wichtiger Verkehrsknotenpunkt südöstlich von Budapest. Ein Spaziergang durch die Kellergassen bietet authentische Einblicke in die ungarische Weinkultur der Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Kellerdorf von Monor am Strázsa-Hügel ist eines der größten zusammenhängenden Ensembles dieser Art.", "Die Region gehört zum Weinbaugebiet Etyek-Buda.", "In Monor befindet sich ein bedeutendes klassizistisches Rathaus aus dem 19. Jahrhundert.", "Die Stadt feiert jährlich das 'Monorer Kellerfest' mit traditioneller Musik und Weinproben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykoros",
    type: "city",
    parent: "pest",
    coords: [19.78, 47.03],
    name: {"de": "Nagykőrös", "hu": "Nagykőrös", "ro": "Nagykőrös", "en": "Nagykőrös"},
    description: {"de": "Historische Stadt in der Tiefebene, berühmt für Landwirtschaft und Arany János.", "hu": "Történelmi alföldi város, mezőgazdaságáról és Arany Jánosról híres.", "ro": "Oraș istoric în câmpie, faimos pentru agricultură și Arany János.", "en": "Historic city in the plains, famous for agriculture and Arany János."},
    facts: {"de": ["Arany János lehrte hier am Lyzeum.", "Bekannt für den Kőröser Markt."], "hu": ["Arany János itt tanított a gimnáziumban.", "Híres a kőrösi vásárokról."], "ro": ["Arany János a predat aici la liceu.", "Faimos pentru târgurile din Nagykőrös."], "en": ["Arany János taught here at the lyceum.", "Famous for the Nagykőrös market."]},
    image: "/poi-images/nagykoros.webp",
  
    descriptionAdvanced: {
      "de": "Nagyőrös, im Herzen Ungarns gelegen, ist als die 'Hauptstadt des ungarischen Marktes' und bedeutender Ort der literaturgeschichte bekannt. Die Stadt war über Jahrhunderte ein blühendes Handelszentrum, was sich in den großzügigen Plätzen und prächtigen Bürgerhäusern widerspiegelt. Ein kulturelles Highlight ist das Arany-János-Museum, das dem großen ungarischen Dichter gewidmet ist, der hier als Lehrer wirkte und einige seiner bedeutendsten Werke schuf. Nagyőrös ist zudem berühmt für seine erstklassige Obstproduktion, insbesondere für Äpfel und Kirschen, die auf den fruchtbaren Böden der Umgebung gedeihen. Die Stadt bewahrt eine ruhige, bürgerliche Eleganz und pflegt stolz ihr reiches kulturelles und landwirtschaftliches Erbe. Die weiten Parks und Alleen verleihen Nagyőrös eine angenehme, grüne Atmosphäre.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Nagyőrös beherbergt den einzigen Safaripark Ungarns am Stadtrand.", "Der Dichter Arany János lebte und lehrte fast ein Jahrzehnt lang in dieser Stadt.", "Die Stadt ist ein historisches Zentrum der ungarischen Obstverarbeitung.", "Das reformierte Gymnasium von Nagyőrös blickt auf eine über 450-jährige Geschichte zurück."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "marcali",
    type: "city",
    parent: "somogy",
    coords: [17.41, 46.58],
    name: {"de": "Marcali", "hu": "Marcali", "ro": "Marcali", "en": "Marcali"},
    description: {"de": "Kleinstadt südlich des Plattensees mit einem modernen Thermalbad.", "hu": "Kisváros a Balatontól délre, modern termálfürdővel.", "ro": "Oraș mic la sud de Lacul Balaton, cu o baie termală modernă.", "en": "Small town south of Lake Balaton with a modern thermal bath."},
    facts: {"de": ["Wirtschaftliches Zentrum des Marcali-Beckens.", "Beliebtes Ziel für Jagd- und Naturtourismus."], "hu": ["A Marcali-hát gazdasági központja.", "Népszerű vadász- és természetjáró célpont."], "ro": ["Centrul economic al bazinului Marcali.", "Destinație populară pentru vânătoare și ecoturism."], "en": ["Economic center of the Marcali Basin.", "Popular destination for hunting and nature tourism."]},
    image: "/poi-images/marcali.webp",
  
    descriptionAdvanced: {
      "de": "Marcali, südlich des Plattensees gelegen, ist das wirtschaftliche und kulturelle Zentrum der Region Somogy-Hinterland. Die Stadt besticht durch ihr gepflegtes Stadtbild und das moderne Heil- und Strandbad, das Entspannung für Bewohner und Besucher bietet. Ein bedeutendes Wahrzeichen ist das Schloss Széchényi, das von einem weitläufigen Park umgeben ist und heute ein Museum beherbergt. Marcali blickt auf eine lange handwerkliche Tradition zurück, die in den lokalen Sammlungen zur Volkskunde gewürdigt wird. Die Umgebung der Stadt ist geprägt von sanften Hügeln, dichten Wäldern und Weinbergen, die zu Naturerlebnissen einladen. Marcali strahlt eine angenehme Ruhe aus und ist ein idealer Ort für alle, die das authentische ländliche Ungarn unweit des Balaton suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Heilbad von Marcali ist für sein fluoridhaltiges Thermalwasser bekannt.", "Das Schloss Széchényi war einst im Besitz einer der bedeutendsten Adelsfamilien Ungarns.", "Die Stadt ist ein wichtiges Zentrum für den ländlichen Tourismus im Komitat Somogy.", "Marcali feiert jährlich ein großes Erntedankfest zur Pflege bäuerlicher Traditionen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "barcs",
    type: "city",
    parent: "somogy",
    coords: [17.46, 45.96],
    name: {"de": "Barcs", "hu": "Barcs", "ro": "Barcs", "en": "Barcs"},
    description: {"de": "Grenzstadt an der Drau, Tor zum Nationalpark Donau-Drau.", "hu": "Határváros a Dráva partján, a Duna–Dráva Nemzeti Park kapuja.", "ro": "Oraș de graniță pe râul Drava, poarta către Parcul Național Dunăre-Drava.", "en": "Border city on the Drava river, gateway to the Danube-Drava National Park."},
    facts: {"de": ["Bekannt für den Dráva-Freistrand.", "Wichtiger Flusshafen und Grenzübergang."], "hu": ["Híres a drávai szabadstrandjáról.", "Fontos folyami kikötő és határátkelő."], "ro": ["Cunoscut pentru plaja liberă de pe Drava.", "Port fluvial și punct de trecere a frontierei important."], "en": ["Known for the Drava free beach.", "Important river port and border crossing."]},
    image: "/poi-images/barcs.webp",
  
    descriptionAdvanced: {
      "de": "Barcs liegt direkt am Ufer der Drau im Süden Ungarns und ist ein bedeutendes Tor zum Nationalpark Donau-Drau. Die Stadt ist geprägt von der Nähe zum Fluss, der hier die Grenze zu Kroatien bildet und für seine unberührte Natur bekannt ist. Das Dráva-Heilbad von Barcs bietet mit seinem wertvollen Thermalwasser Erholung in einer ruhigen Grenzlandschaft. Ein kulturelles Highlight ist das Dráva-Museum, das die Natur- und Kulturgeschichte des Flusstals eindrucksvoll dokumentiert. Barcs ist ein Paradies für Angler, Kanufahrer und Radfahrer, die die Stille der Auenwälder und die reiche Vogelwelt schätzen. Die Stadt verbindet auf charmante Weise ungarische und kroatische Kultureinflüsse am Ufer eines der saubersten Flüsse Europas.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Barcs ist die 'Hauptstadt der Drau' und ein wichtiges Zentrum für Flusstourismus.", "Der Fluss Drau ist bei Barcs Teil eines grenzüberschreitenden Biosphärenreservats.", "Die Stadt beherbergt ein bedeutendes Bildungszentrum für Forst- und Wasserwirtschaft.", "Das Heilwasser von Barcs ist besonders reich an Natriumhydrogencarbonat."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "celldomolk",
    type: "city",
    parent: "vas",
    coords: [17.15, 47.25],
    name: {"de": "Celldömölk", "hu": "Celldömölk", "ro": "Celldömölk", "en": "Celldömölk"},
    description: {"de": "Stadt am Fuße des Berges Ság, bekannt für den Wallfahrtsort Kemenesalja.", "hu": "Város a Ság-hegy lábánál, a kemenesaljai búcsújáróhelyről ismert.", "ro": "Oraș la poalele muntelui Ság, cunoscut pentru locul de pelerinaj Kemenesalja.", "en": "City at the foot of Ság Mountain, known for the Kemenesalja pilgrimage site."},
    facts: {"de": ["Der Berg Ság ist ein erloschener Vulkan.", "Beherbergt das Kemenes Vulkanpark-Museum."], "hu": ["A Ság-hegy egy kialudt vulkáni tanúhegy.", "Itt található a Kemenes Vulkánpark múzeuma."], "ro": ["Muntele Ság este un vulcan stins.", "Găzduiește muzeul Parcului Vulcanic Kemenes."], "en": ["Ság Mountain is an extinct volcanic hill.", "Home to the Kemenes Volcano Park museum."]},
    image: "/poi-images/celldomolk.webp",
  
    descriptionAdvanced: {
      "de": "Celldömölk, am Fuße des vulkanischen Ság-Berges gelegen, ist einer der bedeutendsten Wallfahrtsorte Westungarns. Die prachtvolle barocke Maria-Himmelfahrt-Kirche und das angrenzende Benediktinerkloster ziehen seit Jahrhunderten Pilger an. Ein einzigartiges Naturwunder ist der Ság-Berg selbst, ein erloschener Vulkan, dessen erstarrte Kraterwände einen faszinierenden Einblick in die Erdgeschichte bieten. Im Kemenes-Vulkanpark können Besucher alles über die vulkanischen Aktivitäten der Region und der Welt erfahren. Die Stadt bietet zudem Entspannung im modernen Vulkán-Heilbad, das direkt am Fuße des Berges liegt. Celldömölk verbindet auf beeindruckende Weise tiefe Religiosität mit spektakulären Naturphänomenen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Wallfahrtskirche von Celldömölk beherbergt eine Gnadenstatue aus dem 18. Jahrhundert.", "Der Ság-Berg ist ein bedeutendes geologisches Denkmal und Weinbaugebiet.", "Der Kemenes-Vulkanpark ist das einzige vulkanologische Besucherzentrum in Ungarn.", "In der Stadt wurde im 18. Jahrhundert eine der ersten Druckereien der Region gegründet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kormend",
    type: "city",
    parent: "vas",
    coords: [16.61, 47.01],
    name: {"de": "Körmend", "hu": "Körmend", "ro": "Körmend", "en": "Körmend"},
    description: {"de": "Stadt an der Raab, berühmt für das Schloss Batthyány-Strattmann.", "hu": "Rába-parti város, a Batthyány–Strattmann-kastélyról híres.", "ro": "Oraș pe râul Rába, faimos pentru Castelul Batthyány-Strattmann.", "en": "City on the Rába river, famous for the Batthyány-Strattmann Castle."},
    facts: {"de": ["Das Schloss beherbergt ein Schuhmuseum.", "Umgeben von einem prächtigen Schlosspark."], "hu": ["A kastélyban cipőtörténeti múzeum működik.", "Pompás kastélypark veszi körül."], "ro": ["Castelul găzduiește un muzeu al pantofilor.", "Înconjurat de un parc magnific al castelului."], "en": ["The castle houses a shoe museum.", "Surrounded by a magnificent castle park."]},
    image: "/poi-images/kormend.webp",
  
    descriptionAdvanced: {
      "de": "Körmend, an der Raab (Rába) gelegen, ist vor allem für das prachtvolle Schloss Batthyány bekannt, eines der bedeutendsten Barock-Ensembles Ungarns. Das Schloss war über Jahrhunderte der Hauptsitz der mächtigen Familie Batthyány und beherbergt heute ein Museum sowie eine wertvolle Bibliothek. Der weitläufigen Schlosspark mit seinen jahrhundertealten Bäumen ist eines der wertvollsten Arboretums des Landes. Körmend blickt auf eine reiche Geschichte als Grenzstadt und Handelszentrum zurück, was sich in der Architektur des Zentrums widerspiegelt. Die Stadt ist zudem für ihre erfolgreiche Basketballtradition und ihre lebendige Sportkultur bekannt. Körmend bietet eine elegante Atmosphäre, die von adeliger Geschichte und der natürlichen Schönheit des Raab-Tals geprägt ist.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Batthyány in Körmend besitzt eine der wertvollsten historischen Waffensammlungen des Landes.", "Der Schlosspark beherbergt Exemplare von Platanen, die bereits über 200 Jahre alt sind.", "Körmend wird oft als 'Hauptstadt der ungarischen Basketballkultur' bezeichnet.", "Die Stadt liegt an der historischen Poststraße zwischen Wien und Triest."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jaki-templom",
    type: "landmark",
    parent: "vas",
    coords: [16.58, 47.14],
    name: {"de": "Kirche von Ják", "hu": "Jáki templom", "ro": "Biserica din Ják", "en": "Church of Ják"},
    description: {"de": "Meisterwerk der romanischen Architektur in Ungarn mit berühmtem Portal.", "hu": "A magyarországi román stílusú építészet remekműve, híres bélletes kapujával.", "ro": "Capodoperă a arhitecturii romanice din Ungaria cu celebrul său portal.", "en": "A masterpiece of Romanesque architecture in Hungary with its famous portal."},
    facts: {"de": ["Im 13. Jahrhundert als Benediktinerklosterkirche erbaut.", "Das Portal ist reich mit Skulpturen verziert."], "hu": ["A 13. században épült bencés apátsági templomként.", "Kapuzata gazdagon díszített szobrokkal."], "ro": ["Construită în secolul al XIII-lea ca biserică a abației benedictine.", "Portalul este bogat decorat cu sculpturi."], "en": ["Built in the 13th century as a Benedictine abbey church.", "The portal is richly decorated with sculptures."]},
    image: "/poi-images/jaki-templom.webp",
  
    descriptionAdvanced: {
      "de": "Die Kirche von Ják ist das herausragendste Denkmal der romanischen Architektur in Ungarn und ein Symbol christlicher Kunst im Karpatenbecken. Gegründet im 13. Jahrhundert als Abteikirche des Benediktinerordens, beeindruckt sie vor allem durch ihr prachtvolles Stufenportal mit seinen reichen Steinmetzarbeiten. Die monumentale Doppelturmfassade und die schlichte Erhabenheit des Innenraums zeugen von der Meisterschaft mittelalterlicher Baumeister. Die Kirche steht erhaben auf einem Hügel und ist schon von weitem sichtbar, was ihre Bedeutung als spirituelles Zentrum unterstreicht. Direkt neben der Kirche befindet sich die St.-Jakobus-Kapelle, die ebenfalls ein Juwel romanischer Baukunst ist. Ják ist ein Ort von zeitloser Schönheit, der Besucher tief in die religiöse Geschichte Ungarns eintauchen lässt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Abteikirche von Ják wurde im Jahr 1256 zu Ehren des Heiligen Georg geweiht.", "Das Hauptportal der Kirche gilt als eines der schönsten romanischen Portale in ganz Europa.", "Die Kirche ist die Grabstätte der bedeutenden Adelsfamilie Ják.", "Nach einer umfangreichen Restaurierung erstrahlen die Skulpturen und Steinmetzarbeiten wieder im alten Glanz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyirbatori-templom",
    type: "landmark",
    parent: "szabolcs-szatmar-bereg",
    coords: [22.13, 47.84],
    name: {"de": "Reformierte Kirche Nyírbátor", "hu": "Nyírbátori református templom", "ro": "Biserica reformată din Nyírbátor", "en": "Nyírbátor Reformed Church"},
    description: {"de": "Spätgotische Hallenkirche mit beeindruckendem Netzgewölbe.", "hu": "Késő gótikus csarnoktemplom lenyűgöző hálóboltozattal.", "ro": "Biserică hală în stil gotic târziu cu o boltă în rețea impresionantă.", "en": "Late Gothic hall church with an impressive net vault."},
    facts: {"de": ["Besitzt einen hölzernen Glockenturm aus dem 17. Jahrhundert.", "Einstige Grabstätte der Familie Báthori."], "hu": ["17. századi fa harangtoronnyal rendelkezik.", "A Báthori család egykori temetkezési helye."], "ro": ["Are o clopotniță din lemn din secolul al XVII-lea.", "Fostul loc de înmormântare al familiei Báthori."], "en": ["Has a wooden bell tower from the 17th century.", "Former burial place of the Báthori family."]},
    image: "/poi-images/nyirbatori-templom.webp",
  
    descriptionAdvanced: {
      "de": "Die reformierte Kirche von Nyírbátor ist eines der bedeutendsten spätgotischen Bauwerke in Ostungarn und eng mit der mächtigen Familie Báthory verbunden. Das Gebäude beeindruckt durch sein enormes einschiffiges Halleninnere und das kunstvolle Netzgewölbe, das als Meisterwerk der ungarischen Gotik gilt. Direkt neben der Kirche befindet sich der markante hölzerne Glockenturm, der größte und älteste seiner Art im Land. Nyírbátor war im Mittelalter ein spirituelles Zentrum der Region und beherbergt zudem eine prachtvolle katholische Minoritenkirche mit barocker Ausstattung. Die Geschichte der Báthorys, die sowohl Helden als auch sagenumwobene Gestalten hervorbrachten, ist in der ganzen Stadt spürbar. Ein Besuch in Nyírbátor bietet tiefe Einblicke in die Architektur und die Mythenwelt des ungarischen Nordostens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Kirche wurde Ende des 15. Jahrhunderts von István Báthory nach der Schlacht von Brotfield errichtet.", "Der hölzerne Glockenturm stammt aus dem Jahr 1640 und ist ein Wahrzeichen der Region.", "In der Kirche befinden sich wertvolle Renaissance-Grabdenkmäler der Familie Báthory.", "Nyírbátor feiert jährlich ein großes Renaissance-Festival mit historischen Kostümen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "edelenyi-kastely",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [20.74, 48.30],
    name: {"de": "Schloss Edelény", "hu": "Edelényi kastély", "ro": "Castelul din Edelény", "en": "Edelény Palace"},
    description: {"de": "Eines der größten und prächtigsten Barockschlösser Ungarns.", "hu": "Magyarország egyik legnagyobb és legpompásabb barokk kastélya.", "ro": "Unul dintre cele mai mari și mai splendide castele baroce din Ungaria.", "en": "One of the largest and most magnificent Baroque palaces in Hungary."},
    facts: {"de": ["Bekannt für seine einzigartigen Rokoko-Wandmalereien.", "Auf einer Insel im Fluss Bódva erbaut."], "hu": ["Egyedülálló rokokó falfestményeiről ismert.", "A Bódva folyó szigetén épült fel."], "ro": ["Cunoscut pentru picturile sale murale unice în stil rococo.", "Construit pe o insulă a râului Bódva."], "en": ["Known for its unique Rococo wall paintings.", "Built on an island in the Bódva River."]},
    image: "/poi-images/edelenyi-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Schloss L'Huillier-Coburg in Edelény ist eines der größten und prachtvollsten Barockschlösser im Nordosten Ungarns. Das Bauwerk besticht durch seine enorme Größe und die sieben markanten Zwiebeltürme, die ihm ein fast märchenhaftes Aussehen verleihen. Das absolute Highlight im Inneren sind die einzigartigen Wandmalereien von Ferenc Lieb aus dem 18. Jahrhundert, die das Leben des Adels in lebhaften Farben darstellen. Das Schloss wurde in den letzten Jahren aufwendig restauriert und dient heute als modernes Kulturzentrum mit interaktiven Ausstellungen. Es liegt inmitten eines weiten Parks am Ufer des Flusses Bódva und strahlt eine vornehme Ruhe aus. Edelény ist ein Muss für jeden Liebhaber barocker Architektur und aristokratischer Wohnkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss in Edelény ist das siebtgrößte Schlossgebäude in Ungarn.", "Es beherbergt den größten zusammenhängenden Zyklus profaner Barockfresken des Landes.", "Das Schloss wurde im 18. Jahrhundert für den lothringischen General Jean-François L'Huillier erbaut.", "Eine Besonderheit ist der interaktive 3D-Film, der die Geschichte des Schlosses für Besucher lebendig macht."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csakvari-kastely",
    type: "landmark",
    parent: "fejer",
    coords: [18.46, 47.39],
    name: {"de": "Schloss Csákvár", "hu": "Csákvári Esterházy-kastély", "ro": "Castelul Esterházy din Csákvár", "en": "Csákvár Esterházy Palace"},
    description: {"de": "Klassizistisches Schloss der Familie Esterházy im Vértes-Gebirge.", "hu": "Az Esterházy család klasszicista kastélya a Vértes lábánál.", "ro": "Castelul clasicist al familiei Esterházy la poalele munților Vértes.", "en": "Neoclassical palace of the Esterházy family at the foot of the Vértes."},
    facts: {"de": ["Früher ein bedeutendes kulturelles Zentrum.", "Umgeben von einem großen englischen Landschaftsgarten."], "hu": ["Egykor jelentős kulturális központ volt.", "Hatalmas angolpark veszi körül."], "ro": ["Odată un centru cultural important.", "Înconjurat de un imens parc englezesc."], "en": ["Once a significant cultural center.", "Surrounded by a vast English landscape garden."]},
    image: "/poi-images/csakvari-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Esterházy-Schloss in Csákvár ist ein herausragendes Beispiel klassizistischer Architektur im Vértes-Gebirge. Das ehemalige herrschaftliche Anwesen war über Jahrhunderte ein Zentrum für Kultur und Pferdezucht der Familie Esterházy. Das Schloss beeindruckt durch seine harmonischen Proportionen und die monumentale Säulenhalle im Zentrum. Umgeben ist das Gebäude von einem der schönsten englischen Gärten Ungarns, der seltene Baumarten und romantische Pavillons beherbergt. Heute ist in einem Teil des Schlosses ein Krankenhaus untergebracht, während die Repräsentationsräume und der Park für Besucher zugänglich sind. Csákvár ist zudem für seine traditionsreiche Töpferkunst bekannt, die im örtlichen Museum dokumentiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Csákvár war einst die bevorzugte Sommerresidenz der gräflichen Linie der Familie Esterházy.", "Der Schlosspark erstreckt sich über 40 Hektar und ist ein geschütztes Naturdenkmal.", "In Csákvár wurde im 19. Jahrhundert die berühmte ungarische Pferderasse 'Nonius' gezüchtet.", "Die Stadt liegt im Herzen des Vértes-Gebirges und ist ein Tor zum Nationalpark."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nadasdy-kastely",
    type: "landmark",
    parent: "fejer",
    coords: [18.22, 47.21],
    name: {"de": "Schloss Nádasdy", "hu": "Nádasdy-kastély", "ro": "Castelul Nádasdy", "en": "Nádasdy Mansion"},
    description: {"de": "Einzigartiges neugotisches Schloss im Tudor-Stil in Nádasdladány.", "hu": "Egyedülálló neogótikus, Tudor-stílusú kastély Nádasdladányban.", "ro": "Castel neogotic unic în stil Tudor în Nádasdladány.", "en": "Unique Neo-Gothic Tudor-style mansion in Nádasdladány."},
    facts: {"de": ["Bekannt für den prachtvollen Ahnen-Saal.", "Eines der romantischsten Schlösser Ungarns."], "hu": ["Híres a pompás Ősök csarnokáról.", "Magyarország egyik legromantikusabb kastélya."], "ro": ["Cunoscut pentru splendida sală a strămoșilor.", "Unul dintre cele mai romantice castele din Ungaria."], "en": ["Known for the magnificent Ancestors' Hall.", "One of the most romantic mansions in Hungary."]},
    image: "/poi-images/nadasdy-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Schloss Nádasdy in Nádasdladány ist ein einzigartiges architektonisches Juwel, das im Tudor-Stil erbaut wurde und an englische Herrensitze erinnert. Das neugotische Schloss wurde im 19. Jahrhundert für Graf Ferenc Nádasdy als Liebesbeweis für seine Frau Ilona Zichy errichtet. Besonders beeindruckend ist der prachtvolle Ahnensaal mit seinen geschnitzten Holzdecken und den Porträts der Familie Batthyány und Nádasdy. Das Schloss verfügte bereits bei seinem Bau über modernste Technik wie Zentralheizung und elektrisches Licht, was damals eine Sensation war. Umgeben von einem idyllischen englischen Garten, strahlt die Anlage eine romantische und zugleich mystische Atmosphäre aus. Nádasdladány bietet einen faszinierenden Einblick in die eklektische Architektur und den aristokratischen Lebensstil des ungarischen Historismus.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Nádasdy ist das einzige bedeutende Bauwerk im Tudor-Stil in ganz Ungarn.", "Im Ahnensaal hängen lebensgroße Porträts der Vorfahren, die in die Wandtäfelung eingelassen sind.", "Das Gebäude diente aufgrund seiner besonderen Atmosphäre bereits als Filmkulisse für internationale Produktionen.", "Das Schloss wurde in den letzten Jahren originalgetreu saniert und ist für Besucher zugänglich."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "deg-kastely",
    type: "landmark",
    parent: "fejer",
    coords: [18.44, 46.88],
    name: {"de": "Schloss Dég", "hu": "Dégi Festetics-kastély", "ro": "Castelul Festetics din Dég", "en": "Dég Festetics Palace"},
    description: {"de": "Eines der bedeutendsten klassizistischen Schlösser mit dem größten englischen Garten.", "hu": "Az ország egyik legjelentősebb klasszicista kastélya a legnagyobb angolparkkal.", "ro": "Unul dintre cele mai importante castele clasiciste cu cel mai mare parc englezesc.", "en": "One of the most significant Neoclassical palaces with the largest English garden."},
    facts: {"de": ["Bekannt für das 'Holländerhaus' im Park.", "Ein wichtiges Zentrum der ungarischen Freimaurerei."], "hu": ["Híres a parkban található Hollandi-házról.", "A magyar szabadkőművesség egyik központja volt."], "ro": ["Cunoscut pentru 'Casa Olandeză' din parc.", "Un centru important al masoneriei maghiare."], "en": ["Known for the 'Dutch House' in the park.", "An important center of Hungarian Freemasonry."]},
    image: "/poi-images/deg-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Festetics-Schloss in Dég ist eines der frühesten und bedeutendsten Denkmäler der klassizistischen Architektur in Ungarn. Entworfen vom berühmten Architekten Mihály Pollack, besticht das Bauwerk durch seine edle Schlichtheit und die monumentale dorische Säulenhalle. Einzigartig ist das sogenannte 'Holländerhaus', ein rotes Backsteingebäude auf einer Insel im Schlosspark, das einst als Quarantänestation diente. Das Schloss war über lange Zeit ein geheimes Zentrum der ungarischen Freimaurerei, woran heute noch architektonische Details erinnern. Der weitläufige englische Garten mit seinem verzweigten Kanalsystem ist einer der größten und romantischsten des Landes. Dég bietet eine Atmosphäre von erhabener Ruhe und geheimnisvoller Geschichte inmitten der Hügellandschaft von Fejér.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Dég beherbergte einst das bedeutendste Freimaurer-Archiv Mitteleuropas.", "Das 'Holländerhaus' auf der Parkinsel ist ein landesweit einzigartiges Baudenkmal.", "Der Schlosspark besitzt das größte künstliche Seensystem ungarischer Gartenanlagen.", "Das Schloss wurde nach umfangreichen Restaurierungsarbeiten im Jahr 2022 wiedereröffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszadob-kastely",
    type: "landmark",
    parent: "szabolcs-szatmar-bereg",
    coords: [21.17, 47.92],
    name: {"de": "Schloss Andrássy", "hu": "Tiszadobi Andrássy-kastély", "ro": "Castelul Andrássy din Tiszadob", "en": "Tiszadob Andrássy Castle"},
    description: {"de": "Märchenhaftes historistisches Schloss an der Theiß mit Labyrinth.", "hu": "Mesebeli historizáló kastély a Tisza partján, labirintussal.", "ro": "Castel istoric de basm pe malul Tisei, cu un labirint.", "en": "Fairytale-like Historicist castle on the Tisza with a labyrinth."},
    facts: {"de": ["Die Architektur ist von französischen Schlössern inspiriert.", "Hat einen berühmten Buchsbaum-Irrgarten."], "hu": ["Építészetét francia kastélyok ihlették.", "Híres a bukszus-labirintusáról."], "ro": ["Arhitectura sa este inspirată de castelele franceze.", "Are un faimos labirint de cimișir."], "en": ["Its architecture was inspired by French castles.", "Has a famous boxwood labyrinth."]},
    image: "/poi-images/tiszadob-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Schloss Andrássy in Tiszadob ist ein märchenhaftes Bauwerk am Ufer der Theiß, das durch seine eklektische Architektur mit Elementen der Gotik und Renaissance besticht. Das Schloss wurde Ende des 19. Jahrhunderts für Graf Gyula Andrássy erbaut und sollte der Überlieferung nach die vier Jahreszeiten, die 12 Monate, die 52 Wochen und die 365 Tage im Jahr widerspiegeln. Ein absolutes Highlight ist der kunstvoll angelegte Buchsbaum-Irrgarten im Schlosspark, der einer der größten und schönsten Ungarns ist. Das Schloss thront auf einem Hochufer und bietet fantastische Ausblicke über die weiten Flusslandschaften der Theiß. Die romantischen Türmchen und verwinkelten Fassaden verleihen dem Gebäude den Charakter eines echten Zauberschlosses. Tiszadob ist ein Ort, an dem sich aristokratische Träume und die wilde Natur des Flusstals begegnen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss besitzt exakt 4 Türme, 12 Eingänge, 52 Zimmer und 365 Fenster.", "Der Irrgarten im Park ist ein einzigartiges Beispiel historischer Gartenkunst in Ungarn.", "Graf Gyula Andrássy war ein bedeutender Staatsmann und Ministerpräsident der k.u.k. Monarchie.", "In dem Schloss finden regelmäßig internationale Kultur- und Kunstfestivals statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fuzerradvany-kastely",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.53, 48.48],
    name: {"de": "Schloss Füzérradvány", "hu": "Füzérradványi Károlyi-kastély", "ro": "Castelul Károlyi din Füzérradvány", "en": "Füzérradvány Károlyi Palace"},
    description: {"de": "Prächtiges Schloss im eklektischen Stil mit riesigem Landschaftspark.", "hu": "Pompás eklektikus kastély hatalmas tájképi kerttel a Zemplénben.", "ro": "Castel splendid în stil eclectic cu un imens parc peisagistic.", "en": "Magnificent eclectic-style palace with a huge landscape park in Zemplén."},
    facts: {"de": ["Bekannt für sein italienisches Renaissance-Interieur.", "Der Park beherbergt jahrhundertealte Platanen."], "hu": ["Híres itáliai reneszánsz belső tereiről.", "A parkban évszázados platánfák találhatók."], "ro": ["Cunoscut pentru interiorul său în stil renascentist italian.", "Parcul găzduiește platani seculari."], "en": ["Known for its Italian Renaissance interiors.", "The park is home to centuries-old plane trees."]},
    image: "/poi-images/fuzerradvany-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Schloss Károlyi in Füzérradvány ist ein prachtvolles Beispiel des Historismus im Zemplén-Gebirge, das vor allem durch sein italienisches Flair besticht. Ursprünglich ein Barockbau, wurde das Schloss im 19. Jahrhundert im Stil der Neorenaissance umgestaltet, wobei originale Bauelemente aus italienischen Palazzi integriert wurden. Besucher sind fasziniert von den Marmorkaminen, den geschnitzten Holztüren und den prachtvollen Sälen, die ein Stück Italien in den Norden Ungarns bringen. Das Schloss ist von einem der bedeutendsten Landschaftsparks des Landes umgeben, der für seine riesigen Platanen und seltenen Nadelhölzer berühmt ist. In den 1930er Jahren fungierte das Schloss als elegantes Luxushotel und zog die High Society der Monarchie an. Heute bietet das renovierte Schloss faszinierende Einblicke in die Welt des ungarischen Hochadels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss beherbergt zahlreiche originale Renaissance-Details, die direkt aus Italien importiert wurden.", "Der Park von Füzérradvány beherbergt die ältesten und größten Platanen Ungarns.", "Die Burganlage diente in der Zwischenkriegszeit als Drehort für zahlreiche Filme.", "Vom Schlossturm aus hat man einen weiten Blick bis hin zur Burg Füzér."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabadkigyos-kastely",
    type: "landmark",
    parent: "bekes",
    coords: [21.08, 46.61],
    name: {"de": "Schloss Wenckheim", "hu": "Szabadkígyósi Wenckheim-kastély", "ro": "Castelul Wenckheim din Szabadkígyós", "en": "Szabadkígyós Wenckheim Palace"},
    description: {"de": "Meisterwerk von Miklós Ybl im eklektischen und Neorenaissance-Stil.", "hu": "Ybl Miklós remekműve eklektikus és neoreneszánsz stílusban.", "ro": "Capodoperă a lui Miklós Ybl în stil eclectic și neorenascentist.", "en": "A masterpiece by Miklós Ybl in eclectic and Neo-Renaissance style."},
    facts: {"de": ["Hat 365 Fenster, 52 Zimmer und 4 Eingänge (wie das Jahr).", "Umgeben von einem herrlichen Schlosspark."], "hu": ["365 ablaka, 52 szobája és 4 bejárata van.", "Gyönyörű kastélypark veszi körül."], "ro": ["Are 365 de ferestre, 52 de camere și 4 intrări.", "Înconjurat de un parc superb al castelului."], "en": ["Has 365 windows, 52 rooms, and 4 entrances.", "Surrounded by a beautiful castle park."]},
    image: "/poi-images/szabadkigyos-kastely.webp",
  
    descriptionAdvanced: {
      "de": "Das Schloss Wenckheim in Szabadkígyós ist eines der prächtigsten eklektischen Schlösser im Südosten Ungarns, entworfen vom berühmten Architekten Miklós Ybl. Das zwischen 1875 und 1879 errichtete Bauwerk besticht durch seine harmonische Architektur, die deutsche und französische Einflüsse vereint. Einzigartig ist die symbolische Gestaltung des Gebäudes mit seinen 365 Fenstern, 52 Zimmern und 12 Eingängen, die den Kalender widerspiegeln. Das Schloss besitzt einen markanten Aussichtsturm und eine prachtvolle Kapelle, die die religiöse Bedeutung für die Familie Wenckheim unterstreicht. Der umliegende Park mit seinem künstlichen See und den seltenen Baumarten lädt zu ausgiebigen Spaziergängen ein. Szabadkígyós ist ein leuchtendes Beispiel für die glanzvolle Ära der ungarischen Schlossbaukunst am Ende des 19. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss wurde mit modernster Technik seiner Zeit, darunter eine Gasbeleuchtung, ausgestattet.", "Die Fassade des Gebäudes ist mit aufwendigen Zierelementen und Wappen der Familie Wenckheim geschmückt.", "In dem Schloss befand sich eine der bedeutendsten privaten Bibliotheken des Komitats Békés.", "Das Schloss wurde im Jahr 2022 nach einer vollständigen Rekonstruktion als Besucherzentrum neu eröffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zsambek-romtemplom",
    type: "landmark",
    parent: "pest",
    coords: [18.72, 47.55],
    name: {"de": "Kirchenruine von Zsámbék", "hu": "Zsámbéki romtemplom", "ro": "Biserica ruină din Zsámbék", "en": "Zsámbék Church Ruins"},
    description: {"de": "Beeindruckende Ruine einer spätromanisch-gotischen Basilika.", "hu": "Késő román-kori és gótikus bazilika lenyűgöző romjai.", "ro": "Ruinele impresionante ale unei bazilici în stil romanic târziu și gotic.", "en": "Impressive ruins of a late Romanesque and Gothic basilica."},
    facts: {"de": ["Wurde durch ein Erdbeben im Jahr 1763 zerstört.", "Ein Symbol der mittelalterlichen ungarischen Architektur."], "hu": ["Az 1763-as földrengés során pusztult el.", "A középkori magyar építészet egyik jelképe."], "ro": ["A fost distrusă de un cutremur în anul 1763.", "Un simbol al arhitecturii maghiare medievale."], "en": ["Destroyed by an earthquake in 1763.", "A symbol of medieval Hungarian architecture."]},
    image: "/poi-images/zsambek-romtemplom.webp",
  
    descriptionAdvanced: {
      "de": "Die Kirchenruine von Zsámbék ist eines der eindrucksvollsten und dramatischsten Baudenkmäler des ungarischen Mittelalters. Die im 13. Jahrhundert errichtete spätromanisch-frühgotische Basilika wurde durch ein verheerendes Erdbeben im Jahr 1763 weitgehend zerstört. Die stehengebliebenen Mauern und die markanten Doppeltürme ragen heute als steinerne Zeugen in den Himmel und bieten ein faszinierendes Bild verfallener Pracht. Die Ruine bewahrt meisterhafte Steinmetzarbeiten und Kapitelle, die den Übergang der Stilepochen dokumentieren. Am Fuße der Ruine befindet sich ein Lapidarium, in dem wertvolle architektonische Fragmente der einstigen Abtei ausgestellt sind. Zsámbék ist ein Ort von großer spiritueller Kraft und ein beliebtes Ziel für Fotografen und Geschichtsinteressierte. Die Ruine dient zudem als stimmungsvolle Kulisse für sommerliche Freilichtkonzerte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Kirche wurde ursprünglich für den Prämonstratenserorden erbaut.", "Das Erdbeben von 1763 war so stark, dass es die gesamte Region um Zsámbék erschütterte.", "Die Ruine gilt als das bedeutendste Denkmal des Übergangsstils zwischen Romanik und Gotik in Ungarn.", "Von der Anhöhe der Ruine hat man einen weiten Blick über das Zsámbéker Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentendre-varazshegy",
    type: "landmark",
    parent: "pest",
    coords: [19.04, 47.67],
    name: {"de": "Varázsciki Völgy", "hu": "Varázsciki Völgy", "ro": "Varázsciki Völgy", "en": "Varázsciki Valley"},
    description: {"de": "Ein versteckter Märchenpark und Erlebnispfad in Szentendre.", "hu": "Rejtett mesepark és élményösvény Szentendrén.", "ro": "Un parc de basm ascuns și o potecă de aventură în Szentendre.", "en": "A hidden fairytale park and adventure trail in Szentendre."},
    facts: {"de": ["Einzigartige Installationen aus Naturmaterialien.", "Ideal für Familien mit kleinen Kindern."], "hu": ["Egyedülálló installációk természetes anyagokból.", "Ideális kisgyermekes családok számára."], "ro": ["Instalații unice din materiale naturale.", "Ideal pentru familii cu copii mici."], "en": ["Unique installations from natural materials.", "Ideal for families with young children."]},
    image: "/poi-images/szentendre-varazshegy.webp",
  
    descriptionAdvanced: {
      "de": "Der Zauberberg (Varázshegy) in Szentendre ist ein kreativer Erlebnisraum für Familien, der die Welt der Märchen und Mythen mit der Kunst verbindet. Inmitten der malerischen Stadt Szentendre bietet dieser Ort interaktive Ausstellungen, bei denen Kinder und Erwachsene in phantastische Welten eintauchen können. Die Installationen nutzen Lichteffekte, Klangwelten und künstlerische Objekte, um die Phantasie der Besucher anzuregen. Es ist ein Ort des Staunens, der zeigt, wie vielfältig die kulturelle Szene der 'Stadt der Künstler' ist. Regelmäßige Workshops laden dazu ein, selbst kreativ zu werden und kleine Kunstwerke zu erschaffen. Der Zauberberg ist eine wunderbare Ergänzung zu den klassischen Museen der Stadt und bietet ein modernes, spielerisches Kulturerlebnis.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zauberberg ist ein modernes interaktives Zentrum für zeitgenössische Kunstvermittlung.", "Der Ort ist besonders auf die Bedürfnisse und Interessen von Kindern ausgerichtet.", "Regelmäßig finden hier Märchenlesungen und theatralische Vorführungen statt.", "Das Zentrum befindet sich in einem historischen Gebäude, das modern umgestaltet wurde."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonalmadi-strand",
    type: "landmark",
    parent: "veszprem",
    coords: [18.02, 47.03],
    name: {"de": "Strand Balatonalmádi", "hu": "Balatonalmádi strand", "ro": "Plaja Balatonalmádi", "en": "Balatonalmádi Beach"},
    description: {"de": "Gepflegter Strand am Nordostufer des Plattensees.", "hu": "Gondozott strand a Balaton északkeleti partján.", "ro": "Plajă bine întreținută pe malul de nord-est al Lacului Balaton.", "en": "Well-kept beach on the northeastern shore of Lake Balaton."},
    facts: {"de": ["Große Liegewiesen und Schatten spendende Bäume.", "Bietet einen weiten Blick über den See."], "hu": ["Nagy füves terület és árnyas fák várják a strandolókat.", "Szép kilátást nyújt a tóra."], "ro": ["Zone largi cu iarbă și copaci umbroși.", "Oferă o vedere frumoasă asupra lacului."], "en": ["Large grassy areas and shady trees.", "Offers a beautiful view over the lake."]},
    image: "/poi-images/balatonalmadi-strand.webp",
  
    descriptionAdvanced: {
      "de": "Der Strand von Balatonalmádi ist einer der beliebtesten und am besten ausgestatteten Badeplätze am Nordostufer des Plattensees. Mit seinen weitläufigen Rasenflächen, den schattenspendenden alten Bäumen und dem klaren Wasser bietet er ideale Bedingungen für einen entspannten Sommertag. Besonders attraktiv für Familien ist der flach abfallende Uferbereich und die Vielzahl an Spielplätzen und Sportmöglichkeiten. Balatonalmádi ist zudem für seine markanten roten Sandsteinfelsen bekannt, die dem Ort ein besonderes geologisches Gepräge geben. Am Strand finden im Sommer regelmäßig Sportwettbewerbe und Unterhaltungsprogramme statt, die für eine lebendige Urlaubsatmosphäre sorgen. Die Nähe zum Bahnhof und zur Promenade macht den Strand besonders leicht erreichbar und komfortabel.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balatonalmádi besitzt einen der größten und gepflegtesten Strände am Nordufer des Sees.", "Die Region ist berühmt für ihren roten Perm-Sandstein, der auch für die Gestaltung des Strandes genutzt wurde.", "Vom Ufer aus hat man einen fantastischen Blick auf das Südufer und den Yachthafen.", "Der Strand trägt seit Jahren die 'Blaue Welle'-Flagge für exzellente Wasserqualität und Service."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely-strand",
    type: "landmark",
    parent: "zala",
    coords: [17.25, 46.76],
    name: {"de": "Städtischer Strand Keszthely", "hu": "Keszthelyi városi strand", "ro": "Plaja municipală Keszthely", "en": "Keszthely City Beach"},
    description: {"de": "Historischer Strand mit dem ikonischen Inselbadgebäude.", "hu": "Történelmi strand az ikonikus Szigetfürdő épületével.", "ro": "Plajă istorică cu clădirea iconică Szigetfürdő.", "en": "Historic beach with the iconic Szigetfürdő island bath building."},
    facts: {"de": ["Das Inselbad wurde im 19. Jahrhundert erbaut.", "Bietet vielfältige Sport- und Freizeitmöglichkeiten."], "hu": ["A Szigetfürdő a 19. században épült.", "Változatos sport- és szabadidős lehetőségeket kínál."], "ro": ["Baia insulară a fost construită în secolul al XIX-lea.", "Oferă diverse oportunități de sport și agrement."], "en": ["The island bath was built in the 19th century.", "Offers diverse sports and leisure opportunities."]},
    image: "/poi-images/keszthely-strand.webp",
  
    descriptionAdvanced: {
      "de": "Der Stadtstrand von Keszthely ist der traditionsreichste und am schönsten gestaltete Badeplatz am Westbecken des Plattensees. Besonders markant ist das historische Inselbad (Szigetfürdő), ein prachtvoller Holzbau aus dem 19. Jahrhundert, der dem Strand eine nostalgische Eleganz verleiht. Der Strand bietet weitläufige Liegewiesen, gepflegte Promenaden und eine Vielzahl an Sport- und Freizeitmöglichkeiten für alle Altersklassen. Das flache, saubere Wasser und der Blick auf die Berge des Balaton-Oberlandes machen das Baden hier zu einem besonderen Genuss. Keszthely verbindet an seinem Strand auf einzigartige Weise kaiserliche Badetradition mit modernem Urlaubsstandard.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Strand beherbergt das einzige erhaltene historische Inselbad am Plattensee.", "Die Anlage wurde originalgetreu nach Plänen aus dem Jahr 1864 restauriert.", "In den Sommermonaten finden hier regelmäßig stimmungsvolle Abendkonzerte statt.", "Der Strand ist direkt an die belebte Seeuferpromenade von Keszthely angeschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siofok-strand",
    type: "landmark",
    parent: "somogy",
    coords: [18.05, 46.91],
    name: {"de": "Nagystrand Siófok", "hu": "Siófoki Nagystrand", "ro": "Plaja Mare Siófok", "en": "Siófok Great Beach"},
    description: {"de": "Größter und belebtester Strand am Südufer mit Clubatmosphäre.", "hu": "A déli part legnagyobb és legpezsgőbb strandja klubhangulattal.", "ro": "Cea mai mare și mai animată plajă de pe malul sudic.", "en": "The largest and busiest beach on the southern shore with a club atmosphere."},
    facts: {"de": ["Heimat des Plázs Siófok, einem Zentrum für Konzerte.", "Bekannt für sein Riesenrad."], "hu": ["Itt található a Plázs Siófok, a koncertek központja.", "Híres az óriáskerekéről."], "ro": ["Găzduiește Plázs Siófok, un centru pentru concerte.", "Faimoasă pentru roata sa panoramică."], "en": ["Home to Plázs Siófok, a center for concerts.", "Famous for its Ferris wheel."]},
    image: "/poi-images/siofok-strand.webp",
  
    descriptionAdvanced: {
      "de": "Der Große Strand von Siófok ist der bekannteste und belebteste Badeplatz an der ungarischen Riviera. Mit seiner kilometerlangen Uferlinie und dem flach abfallenden Wasser ist er der Inbegriff des Balaton-Sommers für Generationen von Urlaubern. Das Zentrum des Geschehens ist der 'Plage-Siófok', ein moderner Erlebniskomplex mit Sandstrand, Pools und zahlreichen Bars. Hier treffen sich tagsüber Sonnenanbeter und Wassersportler, während sich der Strand am Abend in eine pulsierende Partymeile verwandelt. Siófok bietet an seinem Strand die perfekte Infrastruktur für einen abwechslungsreichen Urlaub zwischen Sport, Spiel und Unterhaltung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Siófok besitzt den längsten zusammenhängenden Sandstrand am gesamten Plattensee.", "Der Strand ist der Hauptveranstaltungsort für das jährliche 'Balaton Sound' Rahmenprogramm.", "Von der Mole aus hat man den besten Blick auf die Sonnenuntergänge über dem See.", "Die Wasserqualität wird regelmäßig mit der höchsten Auszeichnung prämiert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor-gyerekvonat",
    type: "landmark",
    parent: "gyor-moson-sopron",
    coords: [17.63, 47.68],
    name: {"de": "Kindereisenbahn Győr", "hu": "Győri gyerekvonat", "ro": "Trenulețul copiilor din Győr", "en": "Győr Children's Train"},
    description: {"de": "Kleine Parkeisenbahn, ein Favorit für Familien in Győr.", "hu": "Győri kerti vasút, a családok kedvence a püspökvári kertben.", "ro": "Trenuleț de parc, un favorit al familiilor din Győr.", "en": "Small park railway, a favorite for families in Győr."},
    facts: {"de": ["Fährt durch eine malerische Grünanlage.", "Ein beliebtes Wochenendprogramm."], "hu": ["Festői zöldövezeten halad keresztül.", "Népszerű hétvégi program."], "ro": ["Circulă printr-o zonă verde pitorească.", "Un program popular de weekend."], "en": ["Runs through a scenic green area.", "A popular weekend activity."]},
    image: "/poi-images/gyor-gyerekvonat.webp",
  
    descriptionAdvanced: {
      "de": "Die Kindereisenbahn in Győr ist ein charmantes technisches Denkmal und ein beliebtes Ausflugsziel für Familien im Norden Ungarns. In einer idyllischen Waldumgebung gelegen, bietet sie eine nostalgische Fahrt durch das Grüne und vermittelt Kindern spielerisch die Welt der Eisenbahn. Die Wagen und Lokomotiven sind liebevoll gepflegt und erinnern an die Blütezeit der ungarischen Schmalspurbahnen. Entlang der Strecke befinden sich Spielplätze und Picknickareale, die zum Verweilen in der Natur einladen. Für viele Kinder in Győr ist eine Fahrt mit der kleinen Bahn ein unvergessliches Erlebnis und ein fester Bestandteil der regionalen Freizeitkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die kleine Eisenbahn in Győr wird oft liebevoll als 'Gőzös' (Dampferchen) bezeichnet.", "Die Strecke führt durch eines der schönsten Waldgebiete am Rande der Stadt.", "Die Bahn ist Teil eines größeren Familienfreizeitparks in Győr.", "Regelmäßig finden thematische Sonderfahrten zu Nikolaus oder Ostern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budakeszi-vadaspark",
    type: "landmark",
    parent: "pest",
    coords: [18.91, 47.51],
    name: {"de": "Wildpark Budakeszi", "hu": "Budakeszi Vadaspark", "ro": "Parcul de animale sălbatice Budakeszi", "en": "Budakeszi Wildlife Park"},
    description: {"de": "Wildpark in der Nähe von Budapest mit einheimischen Tierarten.", "hu": "Budapest közeli vadaspark őshonos állatfajokkal.", "ro": "Parc de animale sălbatice lângă Budapesta cu specii native.", "en": "Wildlife park near Budapest featuring native species."},
    facts: {"de": ["Bietet Abenteuerparks und Streichelzoo.", "Liegt im wunderschönen Budaer Bergland."], "hu": ["Kalandparkkal és állatsimogatóval is várja a látogatókat.", "A Budai-hegység gyönyörű környezetében fekszik."], "ro": ["Oferă parcuri de aventură și grădină zoologică.", "Situat în frumoșii munți Buda."], "en": ["Offers adventure parks and a petting zoo.", "Located in the beautiful Buda Hills."]},
    image: "/poi-images/budakeszi-vadaspark.webp",
  
    descriptionAdvanced: {
      "de": "Der Wildpark Budakeszi am westlichen Stadtrand von Budapest bietet ein authentisches Naturerlebnis im Waldgebirge der Budaer Berge. Hier können Besucher die einheimische Tierwelt des Karpatenbeckens in ihrer natürlichen Umgebung beobachten, von Rothirschen und Wildschweinen bis hin zu Braunbären und Wölfen. Der Park legt großen Wert auf Umweltbildung und bietet interaktive Lehrpfade, die Kindern und Erwachsenen das Ökosystem Wald näherbringen. Ein besonderes Highlight ist der integrierte Abenteuerpark mit Kletterparcours und der Bauernhofbereich mit alten ungarischen Haustierrassen. Der Wildpark ist der ideale Ort für Städter, um Ruhe zu finden und mehr über den Schutz der heimischen Fauna zu erfahren.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Wildpark Budakeszi beherbergt über 50 verschiedene Tierarten aus Ungarn und Europa.", "Ein Highlight ist die regelmäßige Fütterungsshow, bei der Besucher viel über das Verhalten der Tiere lernen.", "Der Park ist Teil eines riesigen Waldgebietes, das als 'Lunge von Budapest' gilt.", "In dem Park befindet sich zudem ein Dino-Park mit lebensgroßen Modellen prähistorischer Tiere."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszpremi-allatkert",
    type: "landmark",
    parent: "veszprem",
    coords: [17.89, 47.10],
    name: {"de": "Zoo Veszprém", "hu": "Veszprémi Állatkert", "ro": "Grădina Zoologică Veszprém", "en": "Veszprém Zoo"},
    description: {"de": "Einer der schönsten Zoos Ungarns mit weiten Gehegen und Dinopark.", "hu": "Az ország egyik legszebb állatkertje tágas kifutókkal és dinóparkkal.", "ro": "Una dintre cele mai frumoase grădini zoologice din Ungaria cu parc de dinozauri.", "en": "One of the most beautiful zoos in Hungary with spacious enclosures and a dino park."},
    facts: {"de": ["Der Dinopark zeigt lebensgroße Modelle.", "Bekannt für seine Elefanten und Nashörner."], "hu": ["A dinópark élethű modelleket mutat be.", "Híres az elefántjairól és orrszarvúiról."], "ro": ["Parcul de dinozauri prezintă modele în mărime naturală.", "Cunoscut pentru elefanți și rinoceri."], "en": ["The dino park features life-sized models.", "Famous for its elephants and rhinos."]},
    image: "/poi-images/veszpremi-allatkert.webp",
  
    descriptionAdvanced: {
      "de": "Der Zoo von Veszprém ist einer der traditionsreichsten und landschaftlich schönsten Tiergärten Ungarns, gelegen im malerischen Fejes-Tal. Er ist bekannt für seine weitläufigen Gehege, die die Tiere in einer naturnahen Umgebung präsentieren, darunter seltene Arten wie den Roten Panda und Afrikanische Nashörner. Besonders spektakulär ist das Giraffenhaus und die weitläufige Savannen-Anlage, die das Gefühl einer Safari vermitteln. Einzigartig ist der integrierte Dinopark mit lebensgroßen Modellen, der die Erdgeschichte für Kinder lebendig werden lässt. Der Zoo legt großen Wert auf Artenschutzprogramme und ist ein bedeutendes Bildungszentrum in Westungarn. Ein Besuch in Veszprém bietet Erlebnisse für alle Generationen inmitten einer beeindruckenden Mittelgebirgslandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Veszprémer Zoo wurde bereits im Jahr 1958 als dritter Zoo des Landes eröffnet.", "Der Park beherbergt den größten Elefanten-Park in ganz Ungarn.", "Vom Zoo aus hat man einen fantastischen Blick auf die Viadukt-Brücke von Veszprém.", "Der Zoo ist ganzjährig geöffnet und bietet auch im Winter spannende Einblicke."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szegedi-vadaspark",
    type: "landmark",
    parent: "csongrad-csanad",
    coords: [20.12, 46.25],
    name: {"de": "Wildpark Szeged", "hu": "Szegedi Vadaspark", "ro": "Grădina Zoologică Seghedin", "en": "Szeged Wildlife Park"},
    description: {"de": "Großflächiger Tierpark, der sich auf den Schutz seltener Arten konzentriert.", "hu": "Nagy területű állatpark, amely ritka fajok védelmére összpontosít.", "ro": "Parc zoologic întins, concentrat pe protecția speciilor rare.", "en": "Large-scale wildlife park focused on the protection of rare species."},
    facts: {"de": ["Größter Tierpark Ungarns nach Fläche.", "Spezialisiert auf südamerikanische Fauna."], "hu": ["Területileg Magyarország legnagyobb állatkertje.", "Dél-amerikai állatfajokra specializálódott."], "ro": ["Cea mai mare grădină zoologică din Ungaria ca suprafață.", "Specializată pe fauna sud-americană."], "en": ["The largest zoo in Hungary by area.", "Specializes in South American fauna."]},
    image: "/poi-images/szegedi-vadaspark.webp",
  
    descriptionAdvanced: {
      "de": "Der Wildpark Szeged ist der flächenmäßig größte Zoo Ungarns und bekannt für seine naturnahe Haltung seltener und gefährdeter Tierarten. In einem weitläufigen Waldgebiet gelegen, bietet er Tieren von fast allen Kontinenten einen Lebensraum, der ihren natürlichen Bedürfnissen entspricht. Ein Schwerpunkt des Parks liegt auf der Haltung südamerikanischer Arten und Raubtiere wie dem Schneeleoparden. Besucher können auf schattigen Wegen durch den Wald wandern und dabei Tiere entdecken, die in anderen Zoos oft nur in engen Gehegen zu sehen sind. Der Wildpark engagiert sich intensiv für internationale Zuchtprogramme und die Wiederauswilderung bedrohter Arten. Die entspannte Atmosphäre und die pädagogisch wertvollen Informationen machen ihn zu einem Top-Ziel im sonnigen Süden Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Wildpark Szeged erstreckt sich über eine Fläche von fast 45 Hektar.", "Der Park beherbergt eine weltweit anerkannte Zuchtgruppe von Krallenaffen.", "Es gibt spezielle Beobachtungsstationen, um die Tiere ohne Störung studieren zu können.", "Der Wildpark ist ein wichtiger Partner der europäischen Zoo-Assoziation (EAZA)."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihany-levendulamezo",
    type: "landmark",
    parent: "veszprem",
    coords: [17.88, 46.91],
    name: {"de": "Lavendelfelder Tihany", "hu": "Tihanyi levendulamező", "ro": "Câmpurile de lavandă din Tihany", "en": "Tihany Lavender Fields"},
    description: {"de": "Wunderschöne Lavendelfelder, die die Halbinsel Tihany im Juni lila färben.", "hu": "Gyönyörű levendulamezők, melyek júniusban lilára festik a félszigetet.", "ro": "Câmpuri superbe de lavandă care colorează peninsula în violet în iunie.", "en": "Beautiful lavender fields that turn the peninsula purple in June."},
    facts: {"de": ["Heimat des Lavendelhauses, eines Besucherzentrums.", "Ein Symbol für die Halbinsel Tihany."], "hu": ["Itt található a Levendula Ház látogatóközpont.", "A Tihanyi-félsziget egyik jelképe."], "ro": ["Casa Casei Lavandei, un centru pentru vizitatori.", "Un simbol al peninsulei Tihany."], "en": ["Home to the Lavender House visitor center.", "A symbol of the Tihany Peninsula."]},
    image: "/poi-images/tihany-levendulamezo.webp",
  
    descriptionAdvanced: {
      "de": "Die Lavendelfelder von Tihany sind ein leuchtendes Symbol der Halbinsel und verwandeln die Landschaft im Frühsommer in ein duftendes violettes Meer. Der Anbau von Lavendel hat in Tihany eine lange Tradition, die auf den Benediktinermönch Gyula Bittera zurückgeht, der den ersten Lavendel im Jahr 1924 aus Frankreich einführte. Durch das vulkanische Gestein und das milde Klima besitzt das Tihanyer Lavendelöl einen außergewöhnlich hohen Gehalt an wertvollen Inhaltsstoffen. Besucher können während der Lavendelwochen im Juni den Lavendel selbst pflücken und im Lavendelhaus-Besucherzentrum alles über die Verarbeitung erfahren. Die blühenden Felder vor der Kulisse des azurblauen Plattensees sind eines der meistfotografierten Motive Ungarns. Tihany ist das 'ungarische Provence' und ein Fest für die Sinne.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Lavendel von Tihany hat aufgrund des Mikroklimas eine höhere Qualität als der ursprüngliche französische Lavendel.", "Die Ernte findet jährlich Ende Juni im Rahmen des großen Lavendel-Festivals statt.", "Aus dem Lavendel werden hochwertige Öle, Seifen, Tees und sogar Liköre hergestellt.", "Die Lavendelfelder stehen aufgrund ihrer Bedeutung für das Landschaftsbild unter Schutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "megyer-hegyi-tengerszem",
    type: "landmark",
    parent: "borsod-abauj-zemplen",
    coords: [21.57, 48.34],
    name: {"de": "Megyer-hegy Meerauge", "hu": "Megyer-hegyi tengerszem", "ro": "Ochiul de mare de pe muntele Megyer", "en": "Megyer-hegy Tarn"},
    description: {"de": "Eindrucksvoller Bergsee in einem ehemaligen Mühlsteinbruch.", "hu": "Lenyűgöző tó egy egykori malomkőbánya helyén.", "ro": "Lac montan impresionant în locul unei foste cariere de pietre de moară.", "en": "Impressive mountain lake in a former millstone quarry."},
    facts: {"de": ["Wurde 2011 zum schönsten Naturwunder Ungarns gewählt.", "Besitzt spektakuläre, 70 Meter hohe Felswände."], "hu": ["2011-ben Magyarország legszebb természeti csodájának választották.", "Látványos, 70 méter magas sziklafalak veszik körül."], "ro": ["Votat cea mai frumoasă minune naturală a Ungariei în 2011.", "Are pereți de stâncă spectaculoși, înalți de 70 de metri."], "en": ["Voted the most beautiful natural wonder of Hungary in 2011.", "Features spectacular 70-meter-high rock walls."]},
    image: "/poi-images/megyer-hegyi-tengerszem.webp",
  
    descriptionAdvanced: {
      "de": "Der Megyer-Hegyi Tengerszem (Meerauge vom Megyer-Berg) bei Sárospatak ist eines der faszinierendsten Naturwunder Ungarns. Entstanden in einem ehemaligen Mühlsteinbruch aus dem 15. Jahrhundert, hat sich in dem tiefen Felsenkessel über die Zeit ein kristallklarer Bergsee gebildet. Die senkrecht aufragenden, bis zu 70 Meter hohen Felswände um den See erzeugen eine atemberaubende und fast mystische Kulisse. Ein schmaler Pfad führt Besucher durch die in den Stein gehauenen Gänge bis zum Rand des Sees, von wo aus man die Tiefe und Stille des Ortes erleben kann. Das Gebiet ist heute ein Naturschutzgebiet und wurde 2011 zum schönsten Naturphänomen Ungarns gewählt. Für Wanderer und Naturfotografen ist dieser Ort im Zemplén-Gebirge ein absolutes Muss.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der See ist an seiner tiefsten Stelle über 6 Meter tief und wird nur von Regenwasser gespeist.", "Der einstige Steinbruch lieferte über Jahrhunderte die besten Mühlsteine der Region.", "Um den See herum führt ein gut ausgebauter geologischer Lehrpfad.", "Der Ort ist auch bei Kletterern aufgrund der steilen Rhyolith-Felswände beliebt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
];

export const hungaryAllPoi: POI[] = [
  ...hungaryCountry,
  ...hungaryRegions,
  ...hungaryCities,
];
