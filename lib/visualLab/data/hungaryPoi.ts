import type { POI } from "./poi";

// ============================================================================
// HUNGARY �?? POI (Points of Interest)
// 1 ország, 20 régió (19 megye + Budapest), városok, látnivalók.
// Nyelvek: de, hu, ro, en (minden mez�?ben). Koordináták: [lon, lat].
// ============================================================================

export const hungaryCountry: POI[] = [
  {
    id: "HU",
    type: "country",
    parent: "HU-PE",
    coords: [19.5033, 47.1625],
    name: {"de": "Ungarn", "hu": "Magyarország", "ro": "Ungaria", "en": "Hungary"},
    image: "/geo-images/hungary/HU.webp",
    description: {
      de: "Ungarn ist ein Binnenstaat in Mitteleuropa, bekannt für seine reiche Geschichte, beeindruckende Architektur und weltberühmte Thermalbäder.",
      hu: "Magyarország egy közép-európai ország, amely gazdag történelmér�?l, lenyűgöz�? építészetér�?l és világhírű termálfürd�?ir�?l ismert.",
      ro: "Ungaria este o �?ar�? din Europa Central�?, cunoscut�? pentru istoria sa bogat�?, arhitectura impresionant�? �?i b�?ile termale de renume mondial.",
      en: "Hungary is a Central European country known for its rich history, stunning architecture, and world-famous thermal baths."
    },
    descriptionAdvanced: {
      "de": "Ungarn ist ein faszinierendes Binnenland in Mitteleuropa, das für seine reiche Geschichte, beeindruckende Architektur und weltberühmte Thermalbäder bekannt ist. Das Herz des Landes ist die Hauptstadt Budapest, eine pulsierende Metropole an der Donau, die oft als eine der schönsten Städte der Welt bezeichnet wird. Ungarn ist berühmt für seine herzliche Gastfreundschaft, seine würzige Küche mit Spezialitäten wie Gulasch und seine erstklassigen Weinregionen wie Tokaj oder Villány. Die Landschaft ist vielfältig und reicht von den weiten Ebenen der Puszta bis zu den sanften Hügeln Transdanubiens und den bewaldeten Bergen im Norden. Mit zehn Nationalparks und zahlreichen UNESCO-Welterbestätten bietet das Land unzählige Entdeckungsmöglichkeiten für Natur- und Kulturliebhaber.",
      "hu": "Magyarország egy gyönyörű közép-európai ország, amely gazdag történelmér�?l, lenyűgöz�? építészetér�?l és világhírű termálfürd�?ir�?l ismert. Az ország szíve Budapest, a Duna mentén fekv�? metropolisz, amely a világ egyik legszebb f�?városa. Magyarország híres vendégszeretetér�?l, ízletes gasztronómiájáról, mint például a gulyásleves, és kiváló borvidékeir�?l, mint Tokaj vagy Villány. A táj változatos, az Alföld rónaságaitól a Dunántúl dombvidékein át az �?szaki-középhegység vonulataiig terjed. Az ország tíz nemzeti parkja és számos UNESCO világörökségi helyszíne várja a természet és a kultúra kedvel�?it.",
      "ro": "Ungaria este o �?ar�? fascinant�? din Europa Central�?, cunoscut�? pentru istoria sa bogat�?, arhitectura impresionant�? �?i b�?ile termale de renume mondial. Inima �?�?rii este capitala Budapesta, o metropol�? vibrant�? de-a lungul Dun�?rii, care este adesea numit�? unul dintre cele mai frumoase ora�?e din lume. Ungaria este faimoas�? pentru ospitalitatea sa cald�?, buc�?t�?ria sa condimentat�? cu specialit�?�?i precum gula�?ul �?i regiunile sale viticole de prim�? clas�?, cum ar fi Tokaj sau Villány. Peisajul este divers, variind de la câmpiile întinse ale Pustei pân�? la dealurile blânde ale Transdanubiei �?i mun�?ii împ�?duri�?i din nord. Cu zece parcuri na�?ionale �?i numeroase situri din patrimoniul mondial UNESCO, �?ara ofer�? nenum�?rate oportunit�?�?i de descoperire pentru iubitorii de natur�? �?i cultur�?.",
      "en": "Hungary is a fascinating landlocked country in Central Europe, known for its rich history, stunning architecture, and world-famous thermal baths. The heart of the country is the capital, Budapest, a vibrant metropolis along the Danube that is often referred to as one of the most beautiful cities in the world. Hungary is famous for its warm hospitality, its flavorful cuisine featuring specialties like goulash, and its world-class wine regions such as Tokaj or Villány. The landscape is diverse, ranging from the vast plains of the Puszta to the rolling hills of Transdanubia and the forested mountains in the north. With ten national parks and numerous UNESCO World Heritage sites, the country offers countless opportunities for discovery for nature and culture lovers."
    },
    facts: {
      "de": [
        "Die Hauptstadt Budapest wird durch die Donau in die Stadtteile Buda und Pest geteilt.",
        "Ungarn hat über 1.300 Thermalquellen und eine jahrtausendealte Bäderkultur.",
        "Der Plattensee (Balaton) ist der grö�?te Binnensee Mitteleuropas.",
        "Die ungarische Sprache gehört zur finno-ugrischen Sprachfamilie und ist in Europa einzigartig.",
        "Das Land ist in 19 Komitate und die Hauptstadt Budapest unterteilt.",
        "Ungarn ist die Heimat berühmter Erfindungen wie des Kugelschreibers und des Zauberwürfels.",
        "Die ungarische Gastronomie basiert stark auf Paprika, Zwiebeln und Sauerrahm.",
        "Das Land hat eine beeindruckende Anzahl von 13 Nobelpreisträgern hervorgebracht.",
        "Die Weinregion Tokaj ist das älteste klassifizierte Weingebiet der Welt.",
        "Ungarn trat im Jahr 2004 der Europäischen Union bei."
      ],
      "hu": [
        "F�?városa Budapest, amelyet a Duna oszt ketté Budára és Pestre.",
        "Magyarország több mint 1300 termálforrással és évezredes fürd�?kultúrával rendelkezik.",
        "A Balaton Közép-Európa legnagyobb édesvízi tava.",
        "A magyar nyelv az uráli nyelvcsaládba tartozik, és egyedülálló Európában.",
        "Az ország 19 vármegyére és a f�?városra, Budapestre oszlik.",
        "Magyarország olyan híres találmányok hazája, mint a golyóstoll vagy a bűvös kocka.",
        "A magyar gasztronómia alapkövei a fűszerpaprika, a vöröshagyma és a tejföl.",
        "Az ország eddig 13 Nobel-díjas tudóssal és alkotóval büszkélkedhet.",
        "A Tokaji borvidék a világ els�? zárt borvidéke és UNESCO világörökségi helyszín.",
        "Magyarország 2004 óta az Európai Unió tagja."
      ],
      "ro": [
        "Capitala Budapesta este împ�?r�?it�? de Dun�?re în districtele Buda �?i Pesta.",
        "Ungaria are peste 1.300 de izvoare termale �?i o cultur�? a b�?ilor de mii de ani.",
        "Lacul Balaton este cel mai mare lac cu ap�? dulce din Europa Central�?.",
        "Limba maghiar�? apar�?ine familiei de limbi fino-ugrice �?i este unic�? în Europa.",
        "�?ara este împ�?r�?it�? în 19 jude�?e �?i capitala Budapesta.",
        "Ungaria este patria unor inven�?ii faimoase, precum pixul �?i cubul Rubik.",
        "Gastronomia maghiar�? se bazeaz�? în mare m�?sur�? pe boia, ceap�? �?i smântân�?.",
        "�?ara a produs un num�?r impresionant de 13 laurea�?i ai Premiului Nobel.",
        "Regiunea viticol�? Tokaj este prima regiune viticol�? clasificat�? din lume.",
        "Ungaria a aderat la Uniunea European�? în anul 2004."
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
    factsAdvanced: {
      de: [
        "Ungarn wurde im Jahr 896 gegründet und zählt somit zu den ältesten Nationen Europas.",
        "Das Land verfügt mit dem Hévízer See über den weltweit grö�?ten biologisch aktiven Thermalsee.",
        "Ungarn ist die Heimat zahlreicher bedeutender Erfindungen wie des Kugelschreibers und des Zauberwürfels.",
        "Die ungarische Weinregion Tokaj wurde bereits 1737 zum weltweit ersten geschlossenen Weingebiet erklärt.",
        "Mehr als 80 % des ungarischen Staatsgebiets verfügen über Thermalwasserquellen unter der Erdoberfläche."
      ],
      hu: [
        "Magyarország a világ egyik legrégebbi országa, 896-ban alapították a honfoglaló magyar törzsek.",
        "Az országban található a világ második legnagyobb termáltava, a Hévízi-tó, amely biológiailag is aktív.",
        "A magyar találmányok közé tartozik a golyóstoll, a gyufa, a hologram és a C-vitamin izolálása is.",
        "Magyarország rendelkezik a világ egyik legrégebbi borvidékével, a Tokaji borvidékkel, amely 1737 óta zárt terület.",
        "Az ország területének több mint 80%-a alatt található különböz�? h�?mérsékletű és összetételű termálvíz."
      ],
      ro: [],
      en: []
    },
  },
];

export const hungaryRegions: POI[] = [
  {
    id: "budapest",
    type: "region",
    parent: "HU-BU",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    description: {
      de: "Budapest, die Hauptstadt Ungarns, ist eine prachtvolle Metropole an der Donau, bekannt für ihre Thermalbäder, das Parlamentsgebäude und die historische Burg.",
      hu: "Budapest, Magyarország f�?városa, a Duna mentén fekv�? pompás metropolisz, amely termálfürd�?ir�?l, az Országházról és a történelmi Várról ismert.",
      ro: "Budapesta, capitala Ungariei, este o metropol�? magnific�? de-a lungul Dun�?rii, cunoscut�? pentru b�?ile sale termale, cl�?direa Parlamentului �?i Castelul istoric.",
      en: "Budapest, the capital of Hungary, is a magnificent metropolis along the Danube, known for its thermal baths, the Parliament building, and the historic Castle."
    },
    descriptionAdvanced: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine eigenständige Region und das unbestrittene politische, wirtschaftliche und kulturelle Zentrum des Landes. Die Stadt entstand 1873 durch die Zusammenlegung der Städte Buda, Pest und �?buda und wird durch die majestätische Donau in zwei charakteristische Hälften geteilt. Während das hügelige Buda für seine historischen Viertel und das Burgschloss bekannt ist, besticht das flache Pest durch seine lebendigen Boulevards, das Parlamentsgebäude und das pulsierende Stadtleben. Budapest ist weltberühmt für seine einzigartige Bäderkultur, seine beeindruckende Architektur des Historismus und Jugendstils sowie seine lebendige Gastronomie- und Kulturszene. Als eine der meistbesuchten Städte Mitteleuropas bietet sie eine perfekte Mischung aus Geschichte, Entspannung und moderner Urbanität.",
      "hu": "Budapest, Magyarország f�?városa, különálló közigazgatási egységként az ország politikai, gazdasági és kulturális központja. A város 1873-ban jött létre Buda, Pest és �?buda egyesítésével, és a fenséges Duna osztja két jellegzetes részre. Míg a dombos Buda történelmi negyedeir�?l és a Budai Várról ismert, addig a sík Pest pezsg�? sugárútjaival, az Országházzal és lüktet�? városi életével vonzza a látogatókat. Budapest világszerte híres egyedülálló fürd�?kultúrájáról, lenyűgöz�? historizáló és szecessziós építészetér�?l, valamint élénk gasztronómiai és kulturális életér�?l. Közép-Európa egyik leglátogatottabb városaként a történelem, a kikapcsolódás és a modern városi lét tökéletes keverékét nyújtja.",
      "ro": "Budapesta, capitala Ungariei, este o regiune administrativ�? distinct�? �?i centrul politic, economic �?i cultural incontestabil al �?�?rii. Ora�?ul a fost format în 1873 prin unirea ora�?elor Buda, Pesta �?i �?buda �?i este împ�?r�?it în dou�? jum�?t�?�?i caracteristice de maiestuoasa Dun�?re. �?n timp ce Buda deluroas�? este cunoscut�? pentru cartierele sale istorice �?i Castelul Buda, Pesta plan�? impresioneaz�? prin bulevardele sale vibrante, cl�?direa Parlamentului �?i via�?a urban�? pulsant�?. Budapesta este renumit�? în întreaga lume pentru cultura sa unic�? a b�?ilor, arhitectura sa impresionant�? în stil istoricist �?i Art Nouveau, precum �?i pentru scena sa gastronomic�? �?i cultural�? vibrant�?. Fiind unul dintre cele mai vizitate ora�?e din Europa Central�?, ofer�? un amestec perfect de istorie, relaxare �?i urbanitate modern�?.",
      "en": "Budapest, the capital of Hungary, is a distinct administrative region and the undisputed political, economic, and cultural center of the country. The city was formed in 1873 through the unification of Buda, Pest, and �?buda, and is divided into two characteristic halves by the majestic Danube. While hilly Buda is known for its historic districts and the Buda Castle, flat Pest charms visitors with its vibrant boulevards, the Parliament building, and pulsating city life. Budapest is world-famous for its unique spa culture, its stunning Historicist and Art Nouveau architecture, and its lively gastronomic and cultural scene. As one of the most visited cities in Central Europe, it offers a perfect blend of history, relaxation, and modern urbanity."
    },
    facts: {
      "de": [
        "Budapest ist die bevölkerungsreichste Stadt Ungarns mit über 1,7 Millionen Einwohnern.",
        "Die Stadt wird oft als 'Perle der Donau' bezeichnet und gehört teilweise zum UNESCO-Welterbe.",
        "Beherbergt die älteste elektrische U-Bahn-Linie Kontinentaleuropas (M1).",
        "Ist bekannt als 'Stadt der Bäder' mit über 100 Thermalquellen und berühmten Heilbädern.",
        "Das ungarische Parlamentsgebäude ist das drittgrö�?te Regierungsgebäude der Welt.",
        "Die Kettenbrücke war die erste dauerhafte Verbindung zwischen Buda und Pest.",
        "Die Gro�?e Synagoge in der Dohány-Stra�?e ist die grö�?te Synagoge in Europa.",
        "Budapest hat eine der weltweit grö�?ten Thermalwasser-Höhlensysteme unter der Stadt.",
        "Die Stadt ist ein bedeutendes Zentrum für Bildung mit zahlreichen renommierten Universitäten.",
        "Der Heldenplatz ist einer der wichtigsten und meistbesuchten Plätze der Stadt."
      ],
      "hu": [
        "Budapest Magyarország legnépesebb városa, több mint 1,7 millió lakossal.",
        "A várost gyakran a 'Duna gyöngyeként' emlegetik, és több része az UNESCO világörökség része.",
        "Itt található a kontinens els�? elektromos földalatti vasútja (M1).",
        "A 'fürd�?k városa' néven ismert, több mint 100 termálforrással és híres gyógyfürd�?kkel.",
        "A magyar Országház a világ harmadik legnagyobb parlamenti épülete.",
        "A Lánchíd volt az els�? állandó összeköttetés Buda és Pest között.",
        "A Dohány utcai zsinagóga Európa legnagyobb zsidó temploma.",
        "Budapest alatt található a világ egyik legnagyobb termálvizes barlangrendszere.",
        "A város jelent�?s oktatási központ, számos neves egyetemmel.",
        "A H�?sök tere a város egyik legfontosabb és leglátogatottabb tere."
      ],
      "ro": [
        "Budapesta este cel mai populat ora�? din Ungaria, cu peste 1,7 milioane de locuitori.",
        "Ora�?ul este adesea numit 'Perla Dun�?rii' �?i face parte par�?ial din patrimoniul mondial UNESCO.",
        "G�?zduie�?te cea mai veche linie de metrou electric din Europa continental�? (M1).",
        "Este cunoscut ca 'ora�?ul b�?ilor', cu peste 100 de izvoare termale �?i b�?i curative faimoase.",
        "Cl�?direa Parlamentului maghiar este a treia ca m�?rime din lume.",
        "Podul cu Lan�?uri a fost prima leg�?tur�? permanent�? între Buda �?i Pesta.",
        "Sinagoga de pe strada Dohány este cea mai mare sinagog�? din Europa.",
        "Budapesta are unul dintre cele mai mari sisteme de pe�?teri cu ap�? termal�? din lume sub ora�?.",
        "Ora�?ul este un centru important pentru educa�?ie, cu numeroase universit�?�?i de renume.",
        "Pia�?a Eroilor este una dintre cele mai importante �?i vizitate pie�?e din ora�?."
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
    },
    factsAdvanced: {
      de: [
        "Budapest entstand im Jahr 1873 durch die feierliche Zusammenlegung der Städte Buda, Pest und �?buda.",
        "Die Stadt beherbergt mit der Linie M1 die älteste elektrische U-Bahn-Linie auf dem europäischen Festland.",
        "Das ungarische Parlamentsgebäude ist das flächenmä�?ig grö�?te Bauwerk des Landes und ein Wahrzeichen der Stadt.",
        "Budapest ist die einzige Hauptstadt weltweit, die über mehr als 120 warme Thermalquellen verfügt.",
        "Die Gro�?e Synagoge in der Dohány-Stra�?e ist das grö�?te jüdische Gotteshaus in ganz Europa."
      ],
      "hu": [
        "Budapest alatt több mint 120 termálforrás található, amelyek naponta mintegy 70 millió liter vizet adnak a fürd�?knek.",
        "A budapesti M1-es földalatti vasút a világ második legrégebbi metróvonala a londoni után, 1896-ban adták át.",
        "A Dohány utcai zsinagóga a legnagyobb zsidó templom Európában és a második legnagyobb a világon.",
        "Az Országház építésekor 40 kilogramm 24 karátos aranyat használtak fel a bels�? terek díszítéséhez.",
        "A városban közleked�? 2-es villamos vonalát a National Geographic a világ egyik legszebb villamosvonalának választotta."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "baranya",
    type: "region",
    parent: "HU-BA",
    coords: [18.2323, 46.0727],
    name: {"de": "Branau", "hu": "Baranya", "ro": "Baranya", "en": "Baranya"},
    image: "/geo-images/hungary/baranya.webp",
    description: {
      "de": "Das Komitat Baranya liegt im äu�?ersten Süden Ungarns an der Grenze zu Kroatien und ist bekannt für sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im Süden durch die Flüsse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt Pécs, die mit ihrem reichen römischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berühmt für seine erstklassigen Weinregionen, insbesondere Villány, und seine vielfältigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen und Kroaten geprägt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natürlicher Schönheit und kulinarischen Genüssen.",
      "hu": "Baranya vármegye Magyarország legdélebbi részén, a horvát határ mentén fekszik, és enyhe, szinte mediterrán éghajlatáról ismert. A régiót északról a Mecsek-hegység, délr�?l pedig a Dráva és a Duna folyók határolják, változatos és termékeny tájat hozva létre. Kulturális központja Pécs, amely gazdag római és oszmán örökségével, valamint élénk művészeti életével nyűgözi le a látogatókat. Baranya emellett híres kiváló borvidékeir�?l, különösen Villányról, és sokszínű etnikai hagyományairól, amelyeket a magyarok, németek és horvátok együttélése formált. A vármegye a történelmi mélység, a természeti szépség és a kulináris élvezetek egyedülálló keverékét kínálja.",
      "ro": "Jude�?ul Baranya este situat în extremitatea sudic�? a Ungariei, la grani�?a cu Croa�?ia, �?i este cunoscut pentru clima sa blând�?, aproape mediteranean�?. Regiunea este m�?rginit�? la nord de mun�?ii Mecsek �?i la sud de râurile Drava �?i Dun�?re, creând un peisaj variat �?i fertil. Centrul cultural este ora�?ul Pécs, care impresioneaz�? prin mo�?tenirea sa bogat�? roman�? �?i otoman�?, precum �?i prin scena sa artistic�? vibrant�?. Baranya este, de asemenea, faimoas�? pentru regiunile sale viticole de prim�? clas�?, în special Villány, �?i pentru tradi�?iile sale etnice diverse, modelate de convie�?uirea maghiarilor, germanilor �?i croa�?ilor. Jude�?ul ofer�? un amestec unic de profunzime istoric�?, frumuse�?e natural�? �?i delicii culinare.",
      "en": "Baranya County is located in the far south of Hungary on the border with Croatia and is known for its mild, almost Mediterranean climate. The region is bordered to the north by the Mecsek Mountains and to the south by the rivers Drava and Danube, creating a diverse and fertile landscape. Its cultural center is the city of Pécs, which impresses visitors with its rich Roman and Ottoman heritage and its vibrant art scene. Baranya is also famous for its world-class wine regions, particularly Villány, and its diverse ethnic traditions shaped by the coexistence of Hungarians, Germans, and Croatians. The county offers a unique blend of historical depth, natural beauty, and culinary delights."
    },
    descriptionAdvanced: {
      "de": "Das Komitat Baranya liegt im äu�?ersten Süden Ungarns an der Grenze zu Kroatien und ist bekannt für sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im Süden durch die Flüsse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt Pécs, die mit ihrem reichen römischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berühmt für seine erstklassigen Weinregionen, insbesondere Villány, und seine vielfältigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen and Kroaten geprägt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natürlicher Schönheit und kulinarischen Genüssen.",
      "hu": "Baranya vármegye Magyarország legdélebbi tájegysége, amely mediterrán jellegű éghajlatával és gazdag történelmi örökségével tűnik ki a régiók közül. A vármegye központja, Pécs, már az ókorban is jelent�?s település volt, és ma híres az UNESCO világörökség részét képez�? ókeresztény sírkamráiról. A táj rendkívül változatos, a Mecsek hegyvonulataitól a Villányi-hegység világhírű borvidékeir�?l terjed, ahol az ország legkiválóbb vörösborai készülnek. Baranya etnikai sokszínűsége, a magyarok, németek és horvátok békés együttélése egyedülálló kulturális és gasztronómiai mili�?t teremtett a térségben. A harkányi gyógyvíz és a siklósi vár történelmi falai tovább gazdagítják a vármegye turisztikai vonzerejét.",
      "ro": "Jude�?ul Baranya este situat în extremitatea sudic�? a Ungariei, la grani�?a cu Croa�?ia, �?i este cunoscut pentru clima sa blând�?, aproape mediteranean�?. Regiunea este m�?rginit�? la nord de mun�?ii Mecsek �?i la sud de râurile Drava �?i Dun�?re, creând un peisaj variat �?i fertil. Centrul cultural este ora�?ul Pécs, care impresioneaz�? prin mo�?tenirea sa bogat�? roman�? �?i otoman�?, precum �?i prin scena sa artistic�? vibrant�?. Baranya este, de asemenea, faimoas�? pentru regiunile sale viticole de prim�? clas�?, în special Villány, �?i pentru tradi�?iile sale etnice diverse, modelate de convie�?uirea maghiarilor, germanilor �?i croa�?ilor. Jude�?ul ofer�? un amestec unic de profunzime istoric�?, frumuse�?e natural�? �?i delicii culinare.",
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
        "A Mecsek-hegység óvja a régiót a hideg északi szelekt�?l.",
        "Villány Magyarország egyik legelismertebb vörösbortermel�? vidéke.",
        "A pécsi ókeresztény sírkamrák az UNESCO világörökség részét képezik.",
        "Baranyában jelent�?s a nemzetiségi kisebbségek, különösen a németek és horvátok aránya.",
        "A siklósi vár az ország egyik legépebben maradt középkori er�?dítménye.",
        "A harkányi gyógyfürd�? kénes vizér�?l világszerte híres.",
        "A vármegye területén zajlott a történelmi jelent�?ségű mohácsi csata 1526-ban.",
        "A mohácsi busójárás az UNESCO szellemi kulturális örökségének része.",
        "Baranya gazdag termálforrásokban és számos wellness lehet�?séget kínál."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Pécs, un ora�? cu o istorie de peste 2000 de ani.",
        "Mun�?ii Mecsek protejeaz�? regiunea de vânturile reci din nord.",
        "Villány este una dintre cele mai renumite regiuni de vin ro�?u din Ungaria.",
        "Mormintele paleocre�?tine din Pécs fac parte din patrimoniul mondial UNESCO.",
        "Baranya are o propor�?ie ridicat�? de minorit�?�?i na�?ionale, în special �?vabi dun�?reni.",
        "Castelul din Siklós este unul dintre cele mai bine conservate castele medievale din �?ar�?.",
        "Sta�?iunea balnear�? Harkány este cunoscut�? în întreaga lume pentru apa sa sulfuroas�?.",
        "Regiunea a fost locul b�?t�?liei istorice de la Mohács din anul 1526.",
        "Festivalul Busójárás din Mohács face parte din patrimoniul cultural imaterial UNESCO.",
        "Baranya este bogat�? în izvoare termale �?i ofer�? numeroase oportunit�?�?i de wellness."
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
    factsAdvanced: {
      de: [
        "Die Komitatshauptstadt Pécs war im Jahr 2010 eine der offiziellen Kulturhauptstädte Europas.",
        "Die Region Villány gilt als die bekannteste und qualitativ hochwertigste Rotweinregion in ganz Ungarn.",
        "In Mohács findet jährlich der Busójárás statt, ein spektakuläres Maskenfest, das zum UNESCO-Weltkulturerbe gehört.",
        "Die Burg von Siklós ist eine der am besten erhaltenen mittelalterlichen Festungsanlagen im gesamten Land.",
        "Baranya beheimatet eine der grö�?ten Gruppen der deutschen Minderheit in Ungarn, die sogenannten Donauschwaben."
      ],
      "hu": [
        "Pécs városa 2010-ben Európa Kulturális F�?városa volt, ami jelent�?s városfejlesztési hullámot indított el.",
        "A Villányi borvidék az ország legdélibb és egyik legelismertebb vörösbortermel�? területe.",
        "A mohácsi busójárás az UNESCO szellemi kulturális örökségének listáján is el�?kel�? helyet foglal el.",
        "Baranyában található az ország egyik legmélyebb barlangja, a mecseki Abaligeti-barlang, amely gyógybarlang is.",
        "A siklósi vár az ország egyik legépebben maradt középkori er�?dítménye, amely ma is látogatható."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "bacs-kiskun",
    type: "region",
    parent: "HU-BK",
    coords: [19.6913, 46.9062],
    name: {"de": "Bács-Kiskun", "hu": "Bács-Kiskun", "ro": "Bács-Kiskun", "en": "Bács-Kiskun"},
    image: "/geo-images/hungary/bacs-kiskun.webp",
    description: {
      "de": "Bács-Kiskun ist das flächenmä�?ig grö�?te Komitat Ungarns und liegt im zentralen Süden des Landes zwischen den Flüssen Donau und Thei�?. Die Region ist geprägt durch die weite Landschaft der Gro�?en Ungarischen Tiefebene (Alföld) und beherbergt den Nationalpark Kiskunság mit seinen einzigartigen Sanddünen und Salzseen. Das wirtschaftliche und kulturelle Zentrum ist Kecskemét, eine Stadt, die für ihre prächtige Jugendstil-Architektur und die Produktion von hochwertigem Aprikosenschnaps (Barackpálinka) bekannt ist. Bács-Kiskun spielt eine zentrale Rolle in der ungarischen Landwirtschaft und ist berühmt für seine Traditionen in der Pferdehaltung und Viehzucht. Die Region bietet Besuchern eine authentische Erfahrung der ungarischen Puszta-Kultur gepaart mit moderner Gastfreundschaft.",
      "hu": "Bács-Kiskun Magyarország legnagyobb területű vármegyéje, amely az ország déli-középs�? részén, a Duna és a Tisza között terül el. A régiót az Alföld végtelen rónaságai határozzák meg, itt található a Kiskunsági Nemzeti Park is, amely egyedülálló homokbuckáiról és szikes tavairól nevezetes. Gazdasági és kulturális központja Kecskemét, amely lenyűgöz�? szecessziós építészetér�?l és a világhírű kecskeméti barackpálinkáról ismert. Bács-Kiskun központi szerepet tölt be a magyar mez�?gazdaságban, és híres lovas hagyományairól, valamint állattenyésztési kultúrájáról, különösen Bugac környékén. A vármegye az alföldi táj szépségét, a pusztai hagyományokat és a modern vendéglátást ötvözi.",
      "ro": "Bács-Kiskun este cel mai mare jude�? din Ungaria ca suprafa�?�?, situat în partea central-sudic�? a �?�?rii, între fluviile Dun�?rea �?i Tisa. Regiunea este caracterizat�? de peisajul vast al Marii Câmpii Maghiare (Alföld) �?i g�?zduie�?te Parcul Na�?ional Kiskunság, cu dunele sale de nisip unice �?i lacurile s�?rate. Centrul economic �?i cultural este Kecskemét, un ora�? renumit pentru arhitectura sa splendid�? în stil Art Nouveau �?i pentru produc�?ia de p�?linc�? de caise de înalt�? calitate (Barackpálinka). Bács-Kiskun joac�? un rol central în agricultura maghiar�? �?i este faimos pentru tradi�?iile sale în cre�?terea cailor �?i a vitelor. Jude�?ul ofer�? vizitatorilor o experien�?�? autentic�? a culturii maghiare de pust�?, combinat�? cu o ospitalitate modern�?.",
      "en": "Bács-Kiskun is the largest county in Hungary by area, located in the central-southern part of the country between the Danube and Tisza rivers. The region is characterized by the vast landscape of the Great Hungarian Plain (Alföld) and is home to the Kiskunság National Park with its unique sand dunes and salt lakes. Its economic and cultural center is Kecskemét, a city famous for its stunning Art Nouveau architecture and the production of high-quality apricot brandy (Barackpálinka). Bács-Kiskun plays a central role in Hungarian agriculture and is famous for its traditions in horse breeding and livestock farming. The county offers visitors an authentic experience of Hungarian Puszta culture paired with modern hospitality."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Bács-Kiskun vármegye Magyarország legnagyobb területű vármegyéje, amely az ország déli részén, a Duna és a Tisza között terül el. A régió meghatározó tájegysége a Kiskunság, amely híres homokos talajáról, szikes tavairól és egyedülálló pusztai él�?világáról. Itt található a Kiskunsági Nemzeti Park, amely a magyar puszta egyik legfontosabb �?rz�?je. A vármegye gazdasága jelent�?s részben a mez�?gazdaságra és az élelmiszeriparra épül, kiemelked�? a zöldség- és gyümölcstermesztés, valamint a borászat, különösen a Kunsági borvidék révén. A terület kulturális és történelmi emlékekben is gazdag, olyan városokkal, mint Kecskemét, Kalocsa vagy Baja, amelyek népművészetükkel és gasztronómiájukkal vonzzák a látogatókat.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Kecskemét, bekannt als die 'Stadt des Jugendstils'.",
        "Es ist das einzige Komitat Ungarns, das an zwei gro�?e Flüsse (Donau und Thei�?) grenzt.",
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
        "A régió Magyarország egyik legfontosabb zöldség- és gyümölcstermeszt�? vidéke.",
        "Hajós híres a löszfalba vájt, több mint 1200 pincéb�?l álló borfalujáról.",
        "Kecskeméten található a neves Kodály Zoltán Zenepedagógiai Intézet.",
        "A vármegyében jelent�?s német nemzetiség él, különösen Baja környékén.",
        "A bajai halászlé hungarikum és a régió egyik legfontosabb gasztronómiai értéke.",
        "Bács-Kiskun a hazai járműgyártás egyik fellegvára a kecskeméti Mercedes-gyár révén."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Kecskemét, cunoscut sub numele de 'ora�?ul secesiunii'.",
        "Este singurul jude�? din Ungaria care se învecineaz�? cu dou�? fluvii mari (Dun�?rea �?i Tisa).",
        "Parcul Na�?ional Kiskunság protejeaz�? flora �?i fauna unic�? a stepei de nisip.",
        "Bugac este un centru renumit mondial pentru tradi�?iile p�?store�?ti maghiare �?i spectacolele ecvestre.",
        "Regiunea este unul dintre cei mai importan�?i produc�?tori de fructe �?i legume din Ungaria.",
        "Hajós este faimos pentru satul s�?u de crame, cu peste 1.200 de pivni�?e s�?pate în loess.",
        "�?n Kecskemét se afl�? renumitul Institut Kodály pentru pedagogie muzical�?.",
        "Jude�?ul are o minoritate german�? semnificativ�?, în special în zona ora�?ului Baja.",
        "Ciorba de pe�?te din Baja (Bajai halászlé) este o specialitate culinar�? protejat�?.",
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Magyarország legnagyobb vármegyéje, területe több mint 8400 négyzetkilométer.",
        "Itt található a Kiskunsági Nemzeti Park, amely az UNESCO bioszféra-rezervátum része.",
        "A vármegye híres a kalocsai paprikáról és a világhírű kalocsai hímzésr�?l.",
        "Kecskemét a vármegye székhelye, híres szecessziós építészetér�?l és a barackpálinkáról.",
        "Baja városa a Duna partján fekszik, és az évente megrendezett halászléf�?z�? fesztiváljáról nevezetes."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bekes",
    type: "region",
    parent: "HU-BE",
    coords: [21.0978, 46.6797],
    name: {"de": "Békés", "hu": "Békés", "ro": "Békés", "en": "Békés"},
    image: "/geo-images/hungary/bekes.webp",
    description: {
      "de": "Das Komitat Békés liegt im Südosten Ungarns an der Grenze zu Rumänien und ist als das 'Brotkörbchen' des Landes bekannt. Die Region ist geprägt von extrem fruchtbaren Schwarzerdeböden und einer weiten, flachen Landschaft, die ideal für den gro�?flächigen Ackerbau ist. Das kulturelle und administrative Zentrum ist Békéscsaba, eine Stadt, die weltweit für ihre Gastronomie, insbesondere die berühmte Csabaer Wurst (Csabai kolbász), bekannt ist. Békés beherbergt zudem bedeutende historische Stätten wie die Burg von Gyula, die einzige erhaltene Backsteinburg in Mitteleuropa, und ist reich an Thermalquellen. Die Region bewahrt stolz ihre vielfältigen Traditionen, die durch das jahrhundertelange Zusammenleben von Ungarn, Slowaken, Rumänen und Deutschen geformt wurden.",
      "hu": "Békés vármegye Magyarország délkeleti részén, a román határ mentén fekszik, és az ország egyik legfontosabb mez�?gazdasági területeként, az 'ország éléstáraként' ismert. A régiót rendívül termékeny mez�?ségi talajok és végtelen rónaságok jellemzik, amelyek ideálisak a szántóföldi növénytermesztéshez. Kulturális és közigazgatási központja Békéscsaba, amely világszerte híres gasztronómiájáról, különösen a hungarikumnak számító csabai kolbászról. Békés vármegye olyan jelent�?s történelmi emlékekkel is büszkélkedhet, mint a gyulai vár, amely Közép-Európa egyetlen épen maradt gótikus téglaer�?dítménye. A vármegye büszkén �?rzi sokszínű hagyományait, amelyeket a magyarok, szlovákok, románok és németek évszázados együttélése formált.",
      "ro": "Jude�?ul Békés este situat în sud-estul Ungariei, la grani�?a cu România, �?i este cunoscut drept 'co�?ul de pâine' al �?�?rii. Regiunea este caracterizat�? de soluri de cernoziom extrem de fertile �?i de un peisaj plat �?i vast, ideal pentru agricultura la scar�? larg�?. Centrul cultural �?i administrativ este Békéscsaba, un ora�? renumit în întreaga lume pentru gastronomia sa, în special pentru celebrul cârnat de Csaba (Csabai kolbász). Békés g�?zduie�?te, de asemenea, situri istorice importante, cum ar fi Castelul din Gyula, singura cetate de c�?r�?mid�? conservat�? din Europa Central�?, �?i este bogat în izvoare termale. Jude�?ul î�?i p�?streaz�? cu mândrie tradi�?iile diverse, modelate de convie�?uirea de secole a maghiarilor, slovacilor, românilor �?i germanilor.",
      "en": "Békés County is located in southeastern Hungary on the border with Romania and is known as the country's 'breadbasket'. The region is characterized by extremely fertile chernozem soils and a vast, flat landscape ideal for large-scale arable farming. Its cultural and administrative center is Békéscsaba, a city world-famous for its gastronomy, particularly the renowned Csaba sausage (Csabai kolbász). Békés also home to significant historical sites such as the Gyula Castle, the only preserved brick fortress in Central Europe, and is rich in thermal springs. The county proudly preserves its diverse traditions, shaped by centuries of coexistence between Hungarians, Slovaks, Romanians, and Germans."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Békés vármegye Magyarország délkeleti részén fekszik, és az ország egyik legfontosabb mez�?gazdasági területe, amelyet gyakran az ország 'éléskamrájaként' is emlegetnek. A tájat az Alföld végtelen rónaságai, termékeny feketeföldek és lassú folyású folyók, mint a Körösök, határozzák meg. A régió híres vendégszeretetér�?l, gazdag népi hagyományairól és gasztronómiai különlegességeir�?l, mint például a csabai és gyulai kolbász. Békés vármegye számos kulturális kincset rejt, köztük a gyulai várat, amely Közép-Európa egyetlen épségben maradt gótikus síkvára. A természet kedvel�?it a Körös-Maros Nemzeti Park háborítatlan tájai és a gazdag madárvilág várja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Békéscsaba, Austragungsort des berühmten Wurstfestivals.",
        "Die Burg von Gyula ist die einzige intakte gotische Backsteinburg in Mitteleuropa.",
        "Die Region hat die besten Bodenqualitäten Ungarns für den Weizenanbau.",
        "Szarvas beherbergt das grö�?te Arboretum Ungarns und das historische Mühlendenkmal.",
        "Die Csabaer Wurst (Csabai kolbász) ist ein geschütztes Hungarikum.",
        "Das Heilbad in Gyula befindet sich im ehemaligen Park des Almásy-Schlosses.",
        "Mez�?hegyes ist berühmt für sein staatliches Gestüt und seine Pferdezucht-Tradition.",
        "Die Region ist ein wichtiges Zentrum der slowakischen Minderheit in Ungarn.",
        "Békés ist reich an Erdgasvorkommen und geothermischer Energie.",
        "Die Flüsse Körös bieten hervorragende Möglichkeiten für Angler und Wassertouristen."
      ],
      "hu": [
        "A vármegye székhelye Békéscsaba, a híres Csabai Kolbászfesztivál otthona.",
        "A gyulai vár Közép-Európa egyetlen épen maradt gótikus téglaer�?dítménye.",
        "A régió rendelkezik Magyarország legjobb min�?ségű term�?földjeivel.",
        "Szarvason található az ország legnagyobb arborétuma és a történelmi Magyarország közepe.",
        "A csabai kolbász és a gyulai kolbász is világszerte ismert hungarikum.",
        "A Gyulai Várfürd�? az egykori Almásy-kastély természetvédelmi területté nyilvánított parkjában található.",
        "Mez�?hegyes híres az Állami Ménesbirtokról és a nóniusz lófajta tenyésztésér�?l.",
        "A vármegye a magyarországi szlovák kisebbség egyik legfontosabb kulturális központja.",
        "Békés vármegye jelent�?s földgázkészletekkel és geotermikus energiával rendelkezik.",
        "A Körösök vidéke kiváló lehet�?ségeket nyújt a horgászat és a vízi turizmus kedvel�?inek."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Békéscsaba, gazda celebrului Festival al Cârnatului.",
        "Castelul din Gyula este singura cetate gotic�? de c�?r�?mid�? intact�? din Europa Central�?.",
        "Regiunea are cele mai bune calit�?�?i de sol din Ungaria pentru cultivarea grâului.",
        "Szarvas g�?zduie�?te cel mai mare arboretum din Ungaria �?i centrul istoric al Ungariei Mari.",
        "Cârnatul de Csaba (Csabai kolbász) este un produs Hungarikum protejat.",
        "B�?ile termale din Gyula se afl�? în fostul parc al castelului Almásy.",
        "Mez�?hegyes este faimos pentru herghelia sa de stat �?i tradi�?ia cre�?terii cailor.",
        "Regiunea este un centru important al minorit�?�?ii slovace din Ungaria.",
        "Békés este bogat în z�?c�?minte de gaze naturale �?i energie geotermal�?.",
        "Râurile Cri�? (Körös) ofer�? oportunit�?�?i excelente pentru pescari �?i turi�?tii nautici."
      ],
      "en": [
        "The county seat is Békéscsaba, home to the famous Sausage Festival.",
        "Gyula Castle is the only intact Gothic brick fortress in Central Europe.",
        "The region has the best soil quality in Hungary for wheat cultivation.",
        "Szarvas is home to Hungary's largest arboretum and the historic center of old Hungary.",
        "The Csaba sausage (Csabai kolbász) is a protected Hungarikum product.",
        "The Gyula thermal bath is located in the former park of the Almásy Castle.",
        "Mez�?hegyes is famous for its State Stud Farm and horse breeding traditions.",
        "The region is an important center for the Slovak minority in Hungary.",
        "Békés is rich in natural gas deposits and geothermal energy.",
        "The Körös rivers offer excellent opportunities for anglers and water tourists."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vármegye székhelye Békéscsaba, amely a világhírű Csabai Kolbászfesztivál otthona.",
        "Itt található a gyulai vár, az Alföld egyik legjelent�?sebb középkori műemléke.",
        "Békés vármegye az ország egyik legfontosabb gabonatermel�? vidéke.",
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
    parent: "HU-BZ",
    coords: [20.79, 48.1],
    name: {"de": "Borsod-Abaúj-Zemplén", "hu": "Borsod-Abaúj-Zemplén", "ro": "Borsod-Abaúj-Zemplén", "en": "Borsod-Abaúj-Zemplén"},
    description: {
      "de": "Das Komitat Borsod-Abaúj-Zemplén liegt im Nordosten Ungarns und ist eine der landschaftlich vielfältigsten Regionen des Landes. Es umfasst die majestätischen Gebirgszüge des Bükk und des Zemplén sowie die weltberühmte Weinregion Tokaj, die zum UNESCO-Welterbe gehört. Das administrative Zentrum ist Miskolc, eine Stadt mit einer starken industriellen Vergangenheit, die heute für ihre touristischen Attraktionen wie das einzigartige Höhlenbad von Miskolctapolca bekannt ist. Die Region ist reich an mittelalterlichen Burgen, historischen Städten und bietet mit dem Nationalpark Aggtelek eines der beeindruckendsten Höhlensysteme Europas. Borsod-Abaúj-Zemplén verbindet auf faszinierende Weise unberührte Natur, jahrhundertealte Weinkultur und ein reiches historisches Erbe.",
      "hu": "Borsod-Abaúj-Zemplén vármegye Magyarország északkeleti részén fekszik, és az ország egyik legváltozatosabb tájegysége. Területén osztozik a Bükk és a Zempléni-hegység vonulata, valamint itt található a világhírű Tokaji borvidék is, amely az UNESCO világörökség része. Székhelye Miskolc, amely jelent�?s ipari múltja mellett ma már turisztikai látványosságairól, például a miskolctapolcai Barlangfürd�?r�?l híres. A vármegye rendkívül gazdag középkori várakban, történelmi városokban, és itt található az Aggteleki Nemzeti Park is Európa egyik leglenyűgöz�?bb barlangrendszerével. Borsod-Abaúj-Zemplén a vadregényes természet, az évezredes borkultúra és a gazdag történelmi örökség különleges elegyét kínálja.",
      "ro": "Jude�?ul Borsod-Abaúj-Zemplén este situat în nord-estul Ungariei �?i este una dintre cele mai diverse regiuni din punct de vedere peisagistic ale �?�?rii. Acesta cuprinde lan�?urile muntoase maiestuoase Bükk �?i Zemplén, precum �?i regiunea viticol�? Tokaj, renumit�? în întreaga lume �?i inclus�? în patrimoniul mondial UNESCO. Centrul administrativ este Miskolc, un ora�? cu un trecut industrial puternic, cunoscut ast�?zi pentru atrac�?iile sale turistice, cum ar fi baia unic�? în pe�?ter�? de la Miskolctapolca. Regiunea este bogat�? în castele medievale, ora�?e istorice �?i ofer�?, prin Parcul Na�?ional Aggtelek, unul dintre cele mai impresionante sisteme de pe�?teri din Europa. Borsod-Abaúj-Zemplén îmbin�? într-un mod fascinant natura virgin�?, cultura viticol�? secular�? �?i o mo�?tenire istoric�? bogat�?.",
      "en": "Borsod-Abaúj-Zemplén County is located in northeastern Hungary and is one of the country's most geographically diverse regions. It encompasses the majestic mountain ranges of Bükk and Zemplén, as well as the world-famous Tokaj wine region, which is a UNESCO World Heritage site. Its administrative center is Miskolc, a city with a strong industrial past that is now famous for its tourist attractions, such as the unique Cave Bath of Miskolctapolca. The county is rich in medieval castles, historic towns, and is home to the Aggtelek National Park, featuring one of Europe's most impressive cave systems. Borsod-Abaúj-Zemplén offers a fascinating blend of wild nature, centuries-old wine culture, and a rich historical heritage."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Borsod-Abaúj-Zemplén vármegye Magyarország északkeleti részén terül el, és az ország egyik legváltozatosabb tájegysége. A régió északi részét a Zempléni-hegység és az Aggteleki-karszt vonulatai uralják, ahol a világörökség részét képez�? Baradla-barlang található. Délebbre a Bükk-hegység és a Mátra nyúlványai, valamint a termékeny Alföld találkozása alkot fest�?i környezetet. Ez a vármegye ad otthont a világhírű Tokaji borvidéknek is, amely a világ els�? zárt borvidéke. A terület történelmi várakban is rendkívül gazdag, mint például Diósgy�?r, Boldogk�? vagy Sárospatak, amelyek a magyar történelem fontos tanúi.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Miskolc, die viertgrö�?te Stadt Ungarns.",
        "Die Weinregion Tokaj-Hegyalja ist das erste geschlossene Weingebiet der Welt.",
        "Das Höhlenbad von Miskolctapolca ist in Europa einzigartig.",
        "Die Baradla-Höhle in Aggtelek gehört zum UNESCO-Weltnaturerbe.",
        "Die Burg von Diósgy�?r war einst ein beliebter Aufenthaltsort ungarischer Königinnen.",
        "Sárospatak wird oft als das 'Athen am Bodrog' bezeichnet.",
        "Lillafüred beherbergt den höchsten Wasserfall Ungarns und ein prächtiges Schlosshotel.",
        "Die Region ist bekannt für ihre traditionelle Handwerkskunst, wie die Matyó-Stickerei.",
        "Borsod-Abaúj-Zemplén hat die zweithöchste Anzahl an Burgen im Land.",
        "Das Zemplén-Gebirge ist vulkanischen Ursprungs und reich an Mineralien."
      ],
      "hu": [
        "A vármegye székhelye Miskolc, Magyarország negyedik legnépesebb városa.",
        "A Tokaj-hegyaljai borvidék a világ els�? zárt borvidéke és UNESCO világörökségi helyszín.",
        "A miskolctapolcai Barlangfürd�? Európában egyedülálló természetes képz�?dmény.",
        "Az Aggteleki-karszt barlangrendszere az UNESCO világörökség része.",
        "A diósgy�?ri vár a középkorban a magyar királynék jegyajándéka és kedvelt lakhelye volt.",
        "Sárospatakot gyakran emlegetik a 'Bodrog-parti Athén' néven kulturális jelent�?sége miatt.",
        "Lillafüreden található az ország legmagasabb vízesése és a fest�?i Palotaszálló.",
        "A vármegye híres népművészetér�?l, különösen a matyó hímzésr�?l Mez�?kövesden.",
        "Borsod-Abaúj-Zemplén rendelkezik az egyik legtöbb középkori várral az országban.",
        "A Zempléni-hegység vulkanikus eredetű, és rendkívül gazdag ásványkincsekben."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Miskolc, al patrulea ora�? ca m�?rime din Ungaria.",
        "Regiunea viticol�? Tokaj-Hegyalja este prima regiune viticol�? închis�? din lume.",
        "Baia în pe�?ter�? de la Miskolctapolca este unic�? în Europa.",
        "Pe�?tera Baradla din Aggtelek face parte din patrimoniul mondial natural UNESCO.",
        "Castelul Diósgy�?r a fost odinioar�? re�?edin�?a preferat�? a reginelor Ungariei.",
        "Sárospatak este adesea numit 'Atena de pe malul Bodrogului'.",
        "Lillafüred g�?zduie�?te cea mai înalt�? cascad�? din Ungaria �?i un hotel-castel magnific.",
        "Regiunea este cunoscut�? pentru me�?te�?ugurile tradi�?ionale, cum ar fi broderia Matyó.",
        "Borsod-Abaúj-Zemplén are al doilea cel mai mare num�?r de castele din �?ar�?.",
        "Mun�?ii Zemplén sunt de origine vulcanic�? �?i sunt boga�?i în minerale."
      ],
      "en": [
        "The county seat is Miskolc, the fourth largest city in Hungary.",
        "The Tokaj-Hegyalja wine region is the world's first closed wine district.",
        "The Cave Bath of Miskolctapolca is unique in Europe.",
        "The Baradla Cave in Aggtelek is a UNESCO World Natural Heritage site.",
        "Diósgy�?r Castle was once a favorite residence of Hungarian queens.",
        "Sárospatak is often referred to as the 'Athens on the Bodrog'.",
        "Lillafüred is home to Hungary's highest waterfall and a magnificent castle hotel.",
        "The region is known for its traditional crafts, such as Matyó embroidery.",
        "Borsod-Abaúj-Zemplén has the second highest number of castles in the country.",
        "The Zemplén Mountains are of volcanic origin and rich in minerals."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Tokaj-hegyaljai borvidék, amely 2002 óta az UNESCO világörökség része.",
        "A vármegyében fekszik az Aggteleki Nemzeti Park a híres Baradla-cseppk�?barlanggal.",
        "Miskolc a vármegye székhelye, Magyarország egyik legnagyobb városa és fontos ipari központja.",
        "Miskolctapolca büszkélkedhet Európa egyetlen barlangfürd�?jével.",
        "A zempléni várhegyek és romok a magyarországi kéktúra útvonalának népszerű megállóit alkotják."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csongrad-csanad",
    type: "region",
    parent: "HU-CS",
    coords: [20.1414, 46.253],
    name: {"de": "Csongrád-Csanád", "hu": "Csongrád-Csanád", "ro": "Csongrád-Csanád", "en": "Csongrád-Csanád"},
    image: "/geo-images/hungary/csongrad-csanad.webp",
    description: {
      "de": "Das Komitat Csongrád-Csanád liegt im sonnigen Süden Ungarns an der Grenze zu Serbien und Rumänien und wird durch den majestätischen Fluss Thei�? in zwei Hälften geteilt. Die Region ist bekannt für ihre extrem hohe Anzahl an Sonnenstunden, was sie zum idealen Standort für den Anbau der weltberühmten Szegediner Paprika macht. Das kulturelle und wirtschaftliche Zentrum ist Szeged, eine prächtige Universitätsstadt, die für ihre beeindruckende Votivkirche, ihre lebendige Kulturszene und ihre einzigartige Jugendstil-Architektur berühmt ist. Csongrád-Csanád beherbergt zudem bedeutende historische Gedenkstätten wie den Nationalen Historischen Gedenkpark in �?pusztaszer, wo die ungarische Landnahme gewürdigt wird. Die Region bietet eine perfekte Mischung aus kulinarischen Genüssen, thermaler Entspannung und tiefgreifender ungarischer Geschichte.",
      "hu": "Csongrád-Csanád vármegye Magyarország napsütötte déli részén, a szerb és a román határ mentén fekszik, és a fenséges Tisza folyó szeli ketté. A régió híres a rendkívül magas napsütéses órák számáról, ami ideálissá teszi a világhírű szegedi fűszerpaprika termesztéséhez. Kulturális és gazdasági központja Szeged, a patinás egyetemi város, amely lenyűgöz�? Fogadalmi templomáról, pezsg�? kulturális életér�?l és egyedülálló szecessziós építészetér�?l ismert. Csongrád-Csanád ad otthont olyan jelent�?s történelmi emlékhelyeknek is, mint az �?pusztaszeri Nemzeti Történeti Emlékpark, ahol a magyar honfoglalás emléke el�?tt tiszteleghetünk. A vármegye a kulináris élvezetek, a termálvizes kikapcsolódás és a mélyre nyúló magyar történelem tökéletes ötvözetét kínálja.",
      "ro": "Jude�?ul Csongrád-Csanád este situat în sudul însorit al Ungariei, la grani�?a cu Serbia �?i România, �?i este împ�?r�?it în dou�? jum�?t�?�?i de maiestuosul râu Tisa. Regiunea este cunoscut�? pentru num�?rul s�?u extrem de mare de ore de soare, ceea ce o face loca�?ia ideal�? pentru cultivarea faimoasei boia de Szeged. Centrul cultural �?i economic este Szeged, un ora�? universitar splendid, renumit pentru impresionanta sa Biseric�? Votiv�?, scena cultural�? vibrant�? �?i arhitectura sa unic�? în stil Art Nouveau. Csongrád-Csanád g�?zduie�?te, de asemenea, situri istorice importante, cum ar fi Parcul Na�?ional Memorial Istoric din �?pusztaszer, unde este comemorat�? desc�?lecarea maghiarilor. Jude�?ul ofer�? un amestec perfect de delicii culinare, relaxare termal�? �?i istorie maghiar�? profund�?.",
      "en": "Csongrád-Csanád County is located in the sunny south of Hungary on the border with Serbia and Romania, and is divided into two halves by the majestic river Tisza. The region is famous for its extremely high number of sunshine hours, making it the ideal location for growing the world-renowned Szeged paprika. Its cultural and economic center is Szeged, a prestigious university city famous for its stunning Votive Church, vibrant cultural scene, and unique Art Nouveau architecture. Csongrád-Csanád is also home to significant historical sites such as the �?pusztaszer National Heritage Park, where the Hungarian conquest is commemorated. The county offers a perfect blend of culinary delights, thermal relaxation, and deep-rooted Hungarian history."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Csongrád-Csanád vármegye az Alföld déli részén, a Tisza és a Maros találkozásánál fekszik, és Magyarország egyik legnapsütésesebb vidéke. A régió mez�?gazdasági jelent�?sége kiemelked�?, különösen a világhírű szegedi fűszerpaprika és a makói hagyma termesztése révén. A vármegye központja Szeged, a 'napfény városa', amely lenyűgöz�? szecessziós épületeir�?l, Dómjáról és pezsg�? egyetemi életér�?l ismert. A tájat a Tisza folyó határozza meg, amely nemcsak a gazdaság, hanem a turizmus és a kikapcsolódás fontos színtere is. A terület gazdag néprajzi hagyományokban, mint például a tápai gyékényszövés vagy a szegedi papucs készítése.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szeged, bekannt als die 'Stadt des Sonnenscheins'.",
        "Die Region beherbergt den tiefsten Punkt Ungarns in der Nähe von Szeged.",
        "Szegediner Salami (Pick) und Paprika sind weltweit bekannte Exportprodukte.",
        "In �?pusztaszer befindet sich das monumentale Feszty-Panorama-Gemälde.",
        "Die Stadt Makó ist berühmt für ihre Zwiebelproduktion und das Hagymatikum-Bad.",
        "Die Thei�?-Blüte (Eintagsfliegen-Phänomen) ist ein einzigartiges Naturschauspiel der Region.",
        "Die Universität von Szeged gehört zu den renommiertesten Bildungseinrichtungen Mitteleuropas.",
        "Das Szegediner Freilichtfestival ist eines der grö�?ten Theaterereignisse Ungarns.",
        "Die Region hat eine bedeutende Erdöl- und Erdgasförderung.",
        "Die Fischsuppe aus Szeged (Szegedi halászlé) ist ein geschütztes kulinarisches Erbe."
      ],
      "hu": [
        "A vármegye székhelye Szeged, amelyet a 'napfény városaként' is emlegetnek.",
        "Itt található Magyarország legmélyebb pontja, Szeged közelében.",
        "A szegedi Pick szalámi és a fűszerpaprika világszerte ismert hungarikumok.",
        "�?pusztaszeren látható a monumentális Feszty-körkép, a magyarok bejövetelér�?l.",
        "Makó városa híres a vöröshagymájáról és a különleges Hagymatikum fürd�?r�?l.",
        "A tiszavirágzás egyedülálló természeti jelenség, amely minden évben vonzza a látogatókat.",
        "A Szegedi Tudományegyetem a közép-európai régió egyik legnevesebb fels�?oktatási intézménye.",
        "A Szegedi Szabadtéri Játékok az ország legnagyobb színházi fesztiválja.",
        "A vármegye területén jelent�?s k�?olaj- és földgázkitermelés folyik.",
        "A szegedi halászlé a magyar gasztronómia egyik legfontosabb alapköve."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Szeged, cunoscut sub numele de 'ora�?ul soarelui'.",
        "Regiunea g�?zduie�?te cel mai jos punct din Ungaria, în apropiere de Szeged.",
        "Salamul de Szeged (Pick) �?i boiaua sunt produse de export cunoscute în întreaga lume.",
        "�?n �?pusztaszer se afl�? monumentala pictur�? panoramic�? Feszty.",
        "Ora�?ul Makó este faimos pentru produc�?ia de ceap�? �?i b�?ile Hagymatikum.",
        "�?nflorirea Tisei (fenomenul rusalii) este un spectacol natural unic în regiune.",
        "Universitatea din Szeged este una dintre cele mai prestigioase institu�?ii de înv�?�?�?mânt din Europa Central�?.",
        "Festivalul în aer liber din Szeged este unul dintre cele mai mari evenimente teatrale din Ungaria.",
        "Regiunea are o produc�?ie semnificativ�? de petrol �?i gaze naturale.",
        "Ciorba de pe�?te din Szeged (Szegedi halászlé) este o mo�?tenire culinar�? protejat�?."
      ],
      "en": [
        "The county seat is Szeged, known as the 'City of Sunshine'.",
        "The region is home to the lowest point in Hungary, located near Szeged.",
        "Szeged salami (Pick) and paprika are world-famous export products.",
        "The monumental Feszty Panorama painting is located in �?pusztaszer.",
        "The city of Makó is famous for its onion production and the Hagymatikum bath.",
        "The 'blooming of the Tisza' (mayfly phenomenon) is a unique natural spectacle in the region.",
        "The University of Szeged is one of the most prestigious educational institutions in Central Europe.",
        "The Szeged Open Air Festival is one of Hungary's largest theatrical events.",
        "The region has significant oil and natural gas production.",
        "The fish soup from Szeged (Szegedi halászlé) is a protected culinary heritage."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szeged a vármegye székhelye, ahol a híres Szegedi Szabadtéri Játékokat rendezik.",
        "A vármegye híres a szegedi fűszerpaprikáról, amely hungarikumnak számít.",
        "Makó városa a vöröshagyma termesztésér�?l és a Makovecz Imre tervezte Hagymatikum fürd�?r�?l ismert.",
        "Itt található az �?pusztaszeri Nemzeti Történeti Emlékpark a Feszty-körképpel.",
        "A Tisza és a Maros torkolata kedvelt kirándulóhely és vízi sportközpont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fejer",
    type: "region",
    parent: "HU-FE",
    coords: [18.4103, 47.1899],
    name: {"de": "Wei�?enburg", "hu": "Fejér", "ro": "Fejér", "en": "Fejér"},
    image: "/geo-images/hungary/fejer.webp",
    description: {
      "de": "Das Komitat Fejér liegt im Herzen Ungarns, in der Region Mitteltransdanubien, und ist eine der historisch bedeutendsten Gegenden des Landes. Das administrative Zentrum ist Székesfehérvár, die 'Stadt der Könige', die im Mittelalter als Krönungs- und Grabstätte ungarischer Monarchen diente. Die Region besticht durch ihre geografische Vielfalt, die vom malerischen Velencer See, dem wärmsten Binnensee Europas, bis zu den sanften Hügeln des Vértes-Gebirges reicht. Fejér ist heute ein dynamisches wirtschaftliches Zentrum mit einer starken Industrie, bewahrt aber gleichzeitig seine reichen kulturellen Traditionen und architektonischen Schätze. Besucher finden hier eine faszinierende Verbindung aus königlicher Geschichte, moderner Entwicklung und erholsamen Naturerlebnissen.",
      "hu": "Fejér vármegye Magyarország szívében, a Közép-Dunántúli régióban fekszik, és az ország egyik legjelent�?sebb történelmi múltú területe. Székhelye Székesfehérvár, a 'királyok városa', amely a középkorban a magyar uralkodók koronázási és temetkezési helyeként szolgált. A vármegye földrajzi adottságai rendkívül változatosak: itt található a Velencei-tó, Európa egyik legmelegebb édesvízi tava, valamint a Vértes-hegység fest�?i vonulatai. Fejér ma már dinamikusan fejl�?d�? gazdasági központ, ahol a modern ipar és a gazdag kulturális örökség jól megfér egymás mellett. A látogatókat királyi történelem, lenyűgöz�? kastélyok és pihentet�? természeti környezet várja ebben a különleges régióban.",
      "ro": "Jude�?ul Fejér este situat în inima Ungariei, în regiunea Transdanubia Central�?, �?i este una dintre cele mai importante zone din punct de vedere istoric ale �?�?rii. Centrul administrativ este Székesfehérvár, 'ora�?ul regilor', care în Evul Mediu a servit drept loc de încoronare �?i înmormântare a monarhilor maghiari. Regiunea impresioneaz�? prin diversitatea sa geografic�?, variind de la pitorescul Lac Velence, unul dintre cele mai calde lacuri cu ap�? dulce din Europa, pân�? la dealurile blânde ale mun�?ilor Vértes. Fejér este ast�?zi un centru economic dinamic, cu o industrie puternic�?, p�?strându-�?i în acela�?i timp tradi�?iile culturale bogate �?i comorile arhitecturale. Vizitatorii g�?sesc aici o combina�?ie fascinant�? de istorie regal�?, dezvoltare modern�? �?i experien�?e relaxante în natur�?.",
      "en": "Fejér County is located in the heart of Hungary, in the Central Transdanubia region, and is one of the country's most historically significant areas. Its administrative center is Székesfehérvár, the 'City of Kings', which served as the coronation and burial site for Hungarian monarchs during the Middle Ages. The county boasts diverse geographical features, ranging from the picturesque Lake Velence, one of Europe's warmest freshwater lakes, to the rolling hills of the Vértes Mountains. Fejér is now a dynamic economic hub with a strong industrial base, while simultaneously preserving its rich cultural traditions and architectural treasures. Visitors will find a fascinating blend of royal history, modern development, and relaxing natural experiences in this unique region."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Fejér vármegye Magyarország központi részén, a Dunántúl és az Alföld találkozásánál terül el, és történelmileg az ország egyik legfontosabb régiója. Székesfehérvár, a vármegye székhelye, a középkorban a magyar királyok koronázási és temetkezési helyszíne volt, így méltán nevezik a 'királyok városának'. A vármegye táji adottságai rendkívül változatosak: északon a Vértes és a Bakony nyúlványai, középen a Mez�?föld rónasága, délen pedig a Velencei-tó partvidéke található. Gazdasága fejlett, az ipari parkok mellett a mez�?gazdaság is jelent�?s, különösen a sz�?l�?termesztés a Móri borvidéken. A Velencei-tó népszerű üdül�?hely, amelyet gyakran a 'napfény tavaként' is emlegetnek.",
      "ro": "",
      "en": ""
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
        "Mór ist das Zentrum einer berühmten Wei�?weinregion, bekannt für den 'Ezerjó'.",
        "Die antike römische Stadt Gorsium bei Tác ist eine bedeutende archäologische Stätte."
      ],
      "hu": [
        "A vármegye székhelye Székesfehérvár, az ország egyik leg�?sibb városa.",
        "A Velencei-tó Magyarország harmadik legnagyobb természetes tava és kedvelt üdül�?hely.",
        "Székesfehérváron összesen 37 magyar királyt koronáztak meg.",
        "A Bory-vár egy különleges, betonból épült 'szerelmi vallomás' és művészeti alkotás.",
        "Martonvásáron található a Brunszvik-kastély és a híres Beethoven Múzeum.",
        "A vármegye a hazai járműgyártás és elektronikai ipar egyik legfontosabb központja.",
        "Gárdony és Agárd a Velencei-tó partjának legnépszerűbb turisztikai célpontjai.",
        "A Vértes-hegység számos túraútvonalat és középkori várromot rejt.",
        "Mór városa a híres móri ezerjó fehérbor és a helyi borkultúra központja.",
        "Tác határában található Gorsium, az egyik legjelent�?sebb római kori szabadtéri múzeum."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Székesfehérvár, unul dintre cele mai vechi ora�?e din Ungaria.",
        "Lacul Velence este cunoscut drept 'lacul soarelui' �?i este ideal pentru naviga�?ie.",
        "�?n Székesfehérvár au fost încorona�?i 37 de regi ai Ungariei.",
        "Castelul Bory din Székesfehérvár este o oper�? de art�? monumental�? construit�? din beton.",
        "Martonvásár g�?zduie�?te Castelul Brunszvik �?i Muzeul Beethoven.",
        "Regiunea este un centru important al industriei auto �?i electronice din Ungaria.",
        "Gárdony este o sta�?iune popular�? pe malul Lacului Velence.",
        "Mun�?ii Vértes ofer�? numeroase trasee de drume�?ie �?i ruine de castele istorice.",
        "Mór este centrul unei renumite regiuni de vin alb, cunoscut�? pentru soiul 'Ezerjó'.",
        "Ora�?ul antic roman Gorsium de lâng�? Tác este un sit arheologic important."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Székesfehérvár a középkori Magyar Királyság egyik f�?városa és koronázóvárosa volt.",
        "A Velencei-tó Magyarország harmadik legnagyobb és egyik legmelegebb vizű tava.",
        "A vármegyében található a Vértes-hegység, amely kiváló túrázási lehet�?ségeket kínál.",
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
    parent: "HU-GS",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab-Wieselburg-�?denburg", "hu": "Gy�?r-Moson-Sopron", "ro": "Gy�?r-Moson-Sopron", "en": "Gy�?r-Moson-Sopron"},
    image: "/geo-images/hungary/gyor-moson-sopron.webp",
    description: {
      "de": "Das Komitat Gy�?r-Moson-Sopron liegt im Nordwesten Ungarns an der strategisch wichtigen Grenze zu �?sterreich und der Slowakei. Die Region gilt als das 'Tor zum Westen' und ist eine der wirtschaftlich am weitesten entwickelten Gegenden des Landes. Das administrative Zentrum ist Gy�?r, die 'Stadt der Flüsse', die für ihre barocke Altstadt und ihre bedeutende Industrie bekannt ist. Ein weiteres Juwel der Region ist Sopron, eine Stadt mit einer reichen Geschichte und einer malerischen mittelalterlichen Architektur. Gy�?r-Moson-Sopron beherbergt zudem UNESCO-Welterbestätten wie die Erzabtei Pannonhalma und den Neusiedler See, was die Region zu einem erstklassigen Ziel für Kultur- und Naturinteressierte macht.",
      "hu": "Gy�?r-Moson-Sopron vármegye Magyarország északnyugati részén, az osztrák és a szlovák határ mentén fekszik, stratégiai kaput nyitva Nyugat-Európa felé. A régió az ország egyik legfejlettebb gazdasági területe, ahol a modern ipar és a történelmi hagyományok tökéletes összhangban élnek. Székhelye Gy�?r, a 'folyók városa', amely lenyűgöz�? barokk belvárosáról és jelent�?s járműiparáról híres. A vármegye másik ékköve Sopron, a hűség városa, amely gazdag történelmi múltjával és fest�?i középkori építészetével vonzza a látogatókat. Gy�?r-Moson-Sopron olyan UNESCO világörökségi helyszíneknek is otthont ad, mint a Pannonhalmi F�?apátság és a Fert�?-táj, így a kultúra és a természet kedvel�?i számára is kiemelked�? úti cél.",
      "ro": "Jude�?ul Gy�?r-Moson-Sopron este situat în nord-vestul Ungariei, la grani�?a strategic�? cu Austria �?i Slovacia. Regiunea este considerat�? 'poarta c�?tre vest' �?i este una dintre cele mai dezvoltate zone economice ale �?�?rii. Centrul administrativ este Gy�?r, 'ora�?ul râurilor', cunoscut pentru centrul s�?u vechi baroc �?i industria sa semnificativ�?. O alt�? bijuterie a regiunii este Sopron, un ora�? cu o istorie bogat�? �?i o arhitectur�? medieval�? pitoreasc�?. Gy�?r-Moson-Sopron g�?zduie�?te, de asemenea, situri din patrimoniul mondial UNESCO, cum ar fi Aba�?ia Teritorial�? din Pannonhalma �?i Lacul Fert�? (Neusiedler See), ceea ce face din regiune o destina�?ie de prim�? clas�? pentru cei interesa�?i de cultur�? �?i natur�?.",
      "en": "Gy�?r-Moson-Sopron County is located in northwestern Hungary on the strategically important border with Austria and Slovakia. The region is considered the 'Gateway to the West' and is one of the most economically developed areas in the country. Its administrative center is Gy�?r, the 'City of Rivers', famous for its stunning Baroque old town and significant industrial base. Another jewel of the region is Sopron, a city with a rich history and picturesque medieval architecture. Gy�?r-Moson-Sopron is also home to UNESCO World Heritage sites such as the Pannonhalma Archabbey and Lake Fert�? (Neusiedler See), making the county a premier destination for those interested in culture and nature."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Gy�?r-Moson-Sopron vármegye Magyarország északnyugati kapujában, az osztrák és a szlovák határ mentén fekszik, és az ország egyik legfejlettebb gazdasági régiója. A vármegye székhelye Gy�?r, a 'folyók városa', amely barokk belvárosával és modern iparával emelkedik ki. Nyugaton Sopron, a 'leghűségesebb város' található, amely történelmi hangulatával és híres borvidékével vonzza a látogatókat. A tájat a Kisalföld rónasága, a Hanság lápvilága és a Fert�?-tó nádasai határozzák meg, utóbbi az UNESCO világörökség része. Pannonhalma büszkélkedhet az ezeréves Bencés F�?apátsággal, amely a magyar kereszténység és kultúra egyik legfontosabb bölcs�?je.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Gy�?r, ein bedeutendes Zentrum der Automobilindustrie (Audi).",
        "Die Erzabtei Pannonhalma ist eines der ältesten historischen Denkmäler Ungarns.",
        "Sopron ist als die 'treueste Stadt' (Civitas Fidelissima) bekannt.",
        "Der Neusiedler See (Fert�?-tó) ist der westlichste Steppensee Europas.",
        "Das Schloss Esterházy in Fert�?d wird oft als das 'ungarische Versailles' bezeichnet.",
        "Die Region ist berühmt für ihre Weinbaugebiete, insbesondere Sopron und Pannonhalma.",
        "Szigetköz ist eine einzigartige Flusslandschaft zwischen der Gro�?en und Kleinen Donau.",
        "Mosonmagyaróvár ist bekannt für seine Thermalbäder und seine landwirtschaftliche Universität.",
        "Die Region hat eine der niedrigsten Arbeitslosenquoten in Ungarn.",
        "Das Paneuropäische Picknick bei Sopron war ein Meilenstein beim Fall des Eisernen Vorhangs."
      ],
      "hu": [
        "A vármegye székhelye Gy�?r, a hazai járműgyártás egyik legfontosabb központja (Audi).",
        "A Pannonhalmi F�?apátság az ország egyik leg�?sibb történelmi emléke és UNESCO világörökség.",
        "Sopron a 'leghűségesebb város' (Civitas Fidelissima) címet viseli.",
        "A Fert�?-tó Európa legnyugatibb sztyeppei tava és közös világörökség Ausztriával.",
        "A fert�?di Esterházy-kastélyt gyakran nevezik a 'magyar Versailles'-nak.",
        "A vármegye híres borvidékeir�?l, különösen a soproni és a pannonhalmi borokról.",
        "A Szigetköz a Duna ágai által körülölelt egyedülálló vízi világ és természetvédelmi terület.",
        "Mosonmagyaróvár híres gyógyvizér�?l és nagy múltú agrárfels�?oktatásáról.",
        "A régió gazdasági fejlettsége és foglalkoztatottsága országos szinten is kiemelked�?.",
        "A Sopron melletti Páneurópai Piknik sorsfordító esemény volt a vasfüggöny lebontásában."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Gy�?r, un centru important al industriei auto (Audi).",
        "Aba�?ia Teritorial�? din Pannonhalma este unul dintre cele mai vechi monumente istorice din Ungaria.",
        "Sopron este cunoscut drept 'cel mai fidel ora�?' (Civitas Fidelissima).",
        "Lacul Fert�? (Neusiedler See) este cel mai vestic lac de step�? din Europa.",
        "Castelul Esterházy din Fert�?d este adesea numit 'Versailles-ul maghiar'.",
        "Regiunea este faimoas�? pentru zonele sale viticole, în special Sopron �?i Pannonhalma.",
        "Szigetköz este un peisaj fluvial unic între Dun�?rea Mare �?i Dun�?rea Mic�?.",
        "Mosonmagyaróvár este cunoscut pentru b�?ile sale termale �?i universitatea sa agricol�?.",
        "Regiunea are una dintre cele mai sc�?zute rate ale �?omajului din Ungaria.",
        "Picnicul Paneuropean de lâng�? Sopron a fost un moment decisiv în c�?derea Cortinei de Fier."
      ],
      "en": [
        "The county seat is Gy�?r, a major hub for the automotive industry (Audi).",
        "The Pannonhalma Archabbey is one of Hungary's oldest historical monuments.",
        "Sopron is known as the 'Most Loyal City' (Civitas Fidelissima).",
        "Lake Fert�? (Neusiedler See) is the westernmost steppe lake in Europe.",
        "The Esterházy Castle in Fert�?d is often referred to as the 'Hungarian Versailles'.",
        "The region is famous for its wine districts, particularly Sopron and Pannonhalma.",
        "Szigetköz is a unique river landscape between the Great and Little Danube.",
        "Mosonmagyaróvár is famous for its thermal baths and its agricultural university.",
        "The region has one of the lowest unemployment rates in Hungary.",
        "The Pan-European Picnic near Sopron was a milestone in the fall of the Iron Curtain."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Pannonhalmi F�?apátság, amely 1996 óta az UNESCO világörökség része.",
        "Sopron városa az 1921-es népszavazás emlékére viseli a 'Civitas Fidelissima' (Leghűségesebb Város) címet.",
        "A Fert�?-tó Európa legnyugatibb sztyeppei tava, közös világörökségi terület Ausztriával.",
        "Gy�?r városa az Audi gyár révén a magyar autóipar egyik legfontosabb központja.",
        "A Szigetköz a Duna ágai között elterül�?, különleges vizes él�?hely és természeti paradicsom."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajdu-bihar",
    type: "region",
    parent: "HU-HB",
    coords: [21.6273, 47.5316],
    name: {"de": "Hajdú-Bihar", "hu": "Hajdú-Bihar", "ro": "Hajdú-Bihar", "en": "Hajdú-Bihar"},
    image: "/geo-images/hungary/hajdu-bihar.webp",
    description: {
      "de": "Das Komitat Hajdú-Bihar liegt im Osten Ungarns an der Grenze zu Rumänien und ist das Herz der Gro�?en Ungarischen Tiefebene (Alföld). Die Region ist weltberühmt für den Nationalpark Hortobágy, die grö�?te natürliche Grassteppe Europas, die zum UNESCO-Welterbe gehört und die traditionelle Hirtenkultur bewahrt. Das administrative und kulturelle Zentrum ist Debrecen, die zweitgrö�?te Stadt Ungarns, die oft als das 'kalvinistische Rom' bezeichnet wird und eine zentrale Rolle in der ungarischen Geschichte spielte. Hajdú-Bihar ist zudem ein bedeutendes Zentrum für Gesundheitstourismus, insbesondere durch das Heilbad Hajdúszoboszló, das über eines der grö�?ten Badekomplexe Europas verfügt. Die Region bietet Besuchern eine einzigartige Kombination aus unendlichen Weiten, tief verwurzelten Traditionen und moderner urbaner Dynamik.",
      "hu": "Hajdú-Bihar vármegye Magyarország keleti részén, a román határ mentén fekszik, és az Alföld szívének tekinthet�?. A régió világszerte híres a Hortobágyi Nemzeti Parkról, amely Európa legnagyobb összefügg�? füves pusztája, UNESCO világörökségi helyszín, és a mai napig �?rzi a hagyományos pásztoréletformát. Székhelye Debrecen, az ország második legnépesebb városa, amelyet gyakran a 'kálvinista Róma' néven emlegetnek, és amely többször is sorsfordító szerepet játszott a magyar történelemben. Hajdú-Bihar emellett az egészségturizmus fellegvára is, köszönhet�?en Hajdúszoboszlónak, ahol Európa egyik legnagyobb fürd�?komplexuma található. A vármegye a végtelen rónaságok szabadságát, a gazdag kulturális örökséget és a modern városi pezsgést ötvözi.",
      "ro": "Jude�?ul Hajdú-Bihar este situat în estul Ungariei, la grani�?a cu România, �?i este inima Marii Câmpii Maghiare (Alföld). Regiunea este renumit�? în întreaga lume pentru Parcul Na�?ional Hortobágy, cea mai mare step�? natural�? de iarb�? din Europa, inclus�? în patrimoniul mondial UNESCO, care p�?streaz�? cultura tradi�?ional�? a p�?storilor. Centrul administrativ �?i cultural este Debrecen, al doilea ora�? ca m�?rime din Ungaria, numit adesea 'Roma calvinist�?', care a jucat un rol central în istoria maghiar�?. Hajdú-Bihar este, de asemenea, un centru important pentru turismul de s�?n�?tate, în special prin sta�?iunea Hajdúszoboszló, care dispune de unul dintre cele mai mari complexe balneare din Europa. Jude�?ul ofer�? vizitatorilor o combina�?ie unic�? de spa�?ii infinite, tradi�?ii adânc înr�?d�?cinate �?i dinamic�? urban�? modern�?.",
      "en": "Hajdú-Bihar County is located in eastern Hungary on the border with Romania and is the heart of the Great Hungarian Plain (Alföld). The region is world-famous for the Hortobágy National Park, Europe's largest continuous natural grassland, which is a UNESCO World Heritage site and preserves traditional pastoral culture. Its administrative and cultural center is Debrecen, Hungary's second-largest city, often referred to as the 'Calvinist Rome', which has played a pivotal role in Hungarian history. Hajdú-Bihar is also a major hub for health tourism, particularly due to the Hajdúszoboszló spa, which boasts one of Europe's largest bathing complexes. The county offers visitors a unique combination of vast open spaces, deep-rooted traditions, and modern urban vibrancy."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Hajdú-Bihar vármegye az Alföld keleti részén terül el, és nevében a történelmi hajdúvárosok emlékét �?rzi. A vármegye székhelye Debrecen, az ország második legnagyobb városa, amelyet a 'kálvinista Rómaként' is emlegetnek gazdag egyházi és kulturális öröksége miatt. A régió legfontosabb tájegysége a Hortobágy, Magyarország els�? és legnagyobb nemzeti parkja, ahol a pusztai életmód, a gulyás- és csikóshagyományok a mai napig élnek. Hajdú-Bihar emellett híres gyógyvizeir�?l is, Hajdúszoboszló Európa egyik legnagyobb fürd�?komplexumával várja a gyógyulni vágyókat. A vármegye gazdaságában a mez�?gazdaság mellett az élelmiszeripar és a gyógyszergyártás is meghatározó szerepet játszik.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Debrecen, ein historisches Zentrum der Reformation in Ungarn.",
        "Der Nationalpark Hortobágy war der erste Nationalpark Ungarns (gegründet 1973).",
        "Hajdúszoboszló beherbergt das grö�?te Heilbad Europas.",
        "Die Region ist bekannt für die Zucht des ungarischen Graurindes und des Zackelschafs.",
        "Die Gro�?e Reformierte Kirche in Debrecen ist ein Symbol der ungarischen Unabhängigkeit.",
        "Die Neunbögige Brücke in Hortobágy ist die längste Steinbrücke Ungarns.",
        "Debrecen ist ein bedeutendes Bildungszentrum mit einer der ältesten Universitäten des Landes.",
        "Die Region ist berühmt für ihre traditionelle Gastronomie, wie den Hortobágyer Fleischpfannkuchen.",
        "Hajdú-Bihar hat eine bedeutende Erdgasförderung und Landwirtschaft.",
        "Der Blumenkarneval in Debrecen ist eines der spektakulärsten Sommerfestivals Ungarns."
      ],
      "hu": [
        "A vármegye székhelye Debrecen, a magyarországi reformáció történelmi központja.",
        "A Hortobágyi Nemzeti Park Magyarország els�? és legnagyobb kiterjedésű nemzeti parkja.",
        "Hajdúszoboszlón található Európa legnagyobb fürd�?komplexuma.",
        "A régió híres az �?shonos magyar állatfajtákról, mint a szürkemarha és a rackajuh.",
        "A debreceni Református Nagytemplom a magyar függetlenségi törekvések jelképe.",
        "A hortobágyi Kilenclyukú híd az ország leghosszabb k�?hídja.",
        "Debrecen jelent�?s oktatási központ, egyeteme az ország egyik legrangosabb intézménye.",
        "A vármegye gasztronómiájának egyik legismertebb étele a hortobágyi húsos palacsinta.",
        "Hajdú-Bihar jelent�?s földgázkitermeléssel és fejlett mez�?gazdasággal rendelkezik.",
        "A Debreceni Virágkarnevál az ország egyik leglátványosabb és legnépszerűbb nyári fesztiválja."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Debrecen, un centru istoric al Reformei în Ungaria.",
        "Parcul Na�?ional Hortobágy a fost primul parc na�?ional din Ungaria (fondat în 1973).",
        "Hajdúszoboszló g�?zduie�?te cel mai mare complex balnear din Europa.",
        "Regiunea este cunoscut�? pentru cre�?terea vitelor sure maghiare �?i a oilor Ra�?ca.",
        "Marea Biseric�? Reformat�? din Debrecen este un simbol al independen�?ei maghiare.",
        "Podul cu nou�? arcuri din Hortobágy este cel mai lung pod de piatr�? din Ungaria.",
        "Debrecen este un centru educa�?ional important, cu una dintre cele mai vechi universit�?�?i din �?ar�?.",
        "Regiunea este faimoas�? pentru gastronomia sa tradi�?ional�?, cum ar fi cl�?titele de Hortobágy.",
        "Hajdú-Bihar are o produc�?ie semnificativ�? de gaze naturale �?i o agricultur�? dezvoltat�?.",
        "Carnavalul Florilor din Debrecen este unul dintre cele mai spectaculoase festivaluri de var�? din Ungaria."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Hortobágyi Nemzeti Park a világörökség része, és a pusztai pásztorkultúra legfontosabb �?rz�?je.",
        "Debrecen a magyar reformáció központja, híres Református Nagytemplomáról.",
        "Hajdúszoboszló a 'reumások Mekkája', itt található Európa legnagyobb fürd�?je.",
        "A vármegye híres a hajdúk történelmi szerepér�?l, akik Bocskai István fejedelemt�?l kaptak kiváltságokat.",
        "A Hortobágyon található a híres Kilenclyukú híd, amely a puszta jelképe."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "heves",
    type: "region",
    parent: "HU-HE",
    coords: [20.3739, 47.9025],
    name: {"de": "Heves", "hu": "Heves", "ro": "Heves", "en": "Heves"},
    image: "/geo-images/hungary/heves.webp",
    description: {
      "de": "Das Komitat Heves liegt im Norden Ungarns und beherbergt die höchsten Gipfel des Landes im Mátra- und Bükk-Gebirge. Die Region ist berühmt für ihre atemberaubende Natur, ihre erstklassigen Weine und ihre reiche historische Vergangenheit. Das administrative Zentrum ist Eger, eine der schönsten Barockstädte Ungarns, die für ihre heldenhafte Verteidigung gegen die Osmanen und ihr beeindruckendes Minarett bekannt ist. Heves bietet zudem einzigartige Wellness-Erlebnisse, wie den Salzberg von Egerszalók, und ist ein Paradies für Wanderer und Naturliebhaber. Die Kombination aus alpiner Landschaft, historischer Tiefe und exzellenter Gastronomie macht Heves zu einer der attraktivsten Regionen für Touristen.",
      "hu": "Heves vármegye Magyarország északi részén fekszik, és itt találhatók az ország legmagasabb csúcsai a Mátrában és a Bükkben. A régió híres lenyűgöz�? természeti adottságairól, kiváló borairól és gazdag történelmi múltjáról. Székhelye Eger, az ország egyik legszebb barokk városa, amely az oszmánok elleni h�?sies várvédelmér�?l és az egri bikavérr�?l világszerte ismert. Heves vármegye egyedülálló wellness élményeket is kínál, mint például az egerszalóki sódomb, és igazi paradicsom a túrázók és a természet kedvel�?i számára. A hegyvidéki táj, a történelmi mélység és a kiváló gasztronómia ötvözete Heves vármegyét az ország egyik legvonzóbb turisztikai célpontjává teszi.",
      "ro": "Jude�?ul Heves este situat în nordul Ungariei �?i g�?zduie�?te cele mai înalte vârfuri din �?ar�? în mun�?ii Mátra �?i Bükk. Regiunea este renumit�? pentru natura sa uluitoare, vinurile sale de prim�? clas�? �?i trecutul s�?u istoric bogat. Centrul administrativ este Eger, unul dintre cele mai frumoase ora�?e baroce din Ungaria, cunoscut pentru ap�?rarea sa eroic�? împotriva otomanilor �?i impresionantul s�?u minaret. Heves ofer�?, de asemenea, experien�?e de wellness unice, cum ar fi muntele de sare de la Egerszalók, �?i este un paradis pentru excursioni�?ti �?i iubitorii de natur�?. Combina�?ia de peisaj montan, profunzime istoric�? �?i gastronomie excelent�? face din Heves una dintre cele mai atractive regiuni pentru turi�?ti.",
      "en": "Heves County is located in northern Hungary and is home to the country's highest peaks in the Mátra and Bükk Mountains. The region is famous for its breathtaking nature, world-class wines, and rich historical past. Its administrative center is Eger, one of Hungary's most beautiful Baroque cities, renowned for its heroic defense against the Ottomans and its impressive minaret. Heves also offers unique wellness experiences, such as the salt hill of Egerszalók, and is a paradise for hikers and nature lovers. The combination of alpine landscapes, historical depth, and excellent gastronomy makes Heves one of the most attractive regions for tourists."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Heves vármegye Magyarország északi részén fekszik, és az ország egyik legszebb és legváltozatosabb vidéke, ahol a Mátra és a Bükk vonulatai találkoznak az Alfölddel. Itt található az ország legmagasabb pontja, a Kékes-tet�?, amely népszerű kiránduló- és síközpont. A vármegye székhelye Eger, a történelmi h�?sök városa, amely barokk építészetér�?l, váráról és kiváló borairól, különösen az Egri Bikavérr�?l híres. A Tisza-tó északi része is a vármegyéhez tartozik, amely különleges vízi paradicsomot kínál a természet kedvel�?inek. Heves vármegye gazdag népművészeti kincsekben is, mint például a palóc hagyományok, és számos gyógyfürd�?vel, mint Egerszalók vagy Parád, büszkélkedhet.",
      "ro": "",
      "en": ""
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
        "Itt található Magyarország legmagasabb pontja, a Kékes-tet�? (1014 m).",
        "Egerben látható az egykori Oszmán Birodalom legészakibb minaretje.",
        "Az egerszalóki sódomb a világon ritka természeti képz�?dmény.",
        "A vármegye rendkívül gazdag gyógyvizekben és termálfürd�?kben.",
        "A Bükki Nemzeti Park területén számos barlang és különleges növényfaj található.",
        "Az egri vár a magyar történelem egyik legfontosabb jelképe.",
        "Parád híres kénes gyógyvizér�?l és a Cifra Istállóban található Kocsimúzeumról.",
        "Heves vármegye az ország egyik legjelent�?sebb történelmi borvidéke.",
        "A Mátra és a Bükk vonulatai kiváló túrázási és síelési lehet�?ségeket nyújtanak."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Eger, patria faimosului vin 'Sânge de Taur' (Egri Bikavér).",
        "Vârful Kékes din mun�?ii Mátra este cel mai înalt punct din Ungaria (1014 m).",
        "Eger g�?zduie�?te cel mai nordic minaret din perioada ocupa�?iei otomane.",
        "Muntele de sare de la Egerszalók este un fenomen natural rar în lume.",
        "Regiunea este renumit�? pentru izvoarele sale termale �?i b�?ile curative.",
        "Mun�?ii Bükk ad�?postesc numeroase pe�?teri �?i o biodiversitate bogat�?.",
        "Cetatea din Eger este un simbol al rezisten�?ei maghiare împotriva turcilor.",
        "Parád este cunoscut pentru apele sale curative �?i muzeul tr�?surilor.",
        "Heves este un centru important al viticulturii maghiare.",
        "Regiunea ofer�? oportunit�?�?i excelente pentru sporturi de iarn�? pe vârful Kékes."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található Magyarország legmagasabb csúcsa, a Kékes-tet�? (1014 méter).",
        "Eger városa híres az 1552-es várvédésr�?l és az Egri Bikavér vörösborról.",
        "Egerszalókon egyedülálló 'sódomb' található, amelyet a feltör�? termálvíz alakított ki.",
        "A Mátra-hegység az ország egyik legnépszerűbb túra- és üdül�?övezete.",
        "A vármegye északi részén él�? palócok gazdag népszokásaikról és jellegzetes nyelvjárásukról ismertek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jasz-nagykun-szolnok",
    type: "region",
    parent: "HU-JN",
    coords: [20.2, 47.1833],
    name: {"de": "Jász-Nagykun-Szolnok", "hu": "Jász-Nagykun-Szolnok", "ro": "Jász-Nagykun-Szolnok", "en": "Jász-Nagykun-Szolnok"},
    description: {
      "de": "Das Komitat Jász-Nagykun-Szolnok liegt im Herzen der Gro�?en Ungarischen Tiefebene und wird vom majestätischen Fluss Thei�? durchquert. Die Region ist geprägt von weiten Agrarlandschaften und einer reichen kulturellen Identität, die auf die Ansiedlung der Jazygen (Jász) und Kumanen (Kun) zurückgeht. Das administrative Zentrum ist Szolnok, eine strategisch wichtige Stadt an der Thei�?, die für ihre Brücken, ihre Luftfahrtgeschichte und ihre lebendige Kunstszene bekannt ist. Jász-Nagykun-Szolnok ist zudem ein bedeutendes Zentrum für Thermal- und Wassertourismus, insbesondere durch den Thei�?-See, der vielfältige Freizeitmöglichkeiten bietet. Die Region bewahrt stolz ihre einzigartigen Traditionen und bietet Besuchern eine authentische Erfahrung des ungarischen Tieflandes.",
      "hu": "Jász-Nagykun-Szolnok vármegye az Alföld szívében terül el, és a fenséges Tisza folyó szeli át. A régiót végtelen mez�?gazdasági tájak és gazdag kulturális identitás jellemzi, amely a jászok és a kunok betelepülésére vezethet�? vissza. Székhelye Szolnok, a Tisza-parti stratégiai központ, amely hídjairól, repüléstörténeti múltjáról és pezsg�? művészeti életér�?l ismert. Jász-Nagykun-Szolnok emellett a termál- és vízi turizmus egyik fontos fellegvára, különösen a Tisza-tó révén, amely számtalan kikapcsolódási lehet�?séget kínál. A vármegye büszkén �?rzi egyedülálló hagyományait, és az alföldi életérzés hiteles élményét nyújtja az idelátogatóknak.",
      "ro": "Jude�?ul Jász-Nagykun-Szolnok este situat în inima Marii Câmpii Maghiare �?i este traversat de maiestuosul râu Tisa. Regiunea este caracterizat�? de peisaje agricole vaste �?i de o identitate cultural�? bogat�?, care provine de la a�?ezarea iazigilor (Jász) �?i cumanilor (Kun). Centrul administrativ este Szolnok, un ora�? strategic pe malul Tisei, cunoscut pentru podurile sale, istoria avia�?iei �?i scena artistic�? vibrant�?. Jász-Nagykun-Szolnok este, de asemenea, un centru important pentru turismul termal �?i nautic, în special prin Lacul Tisa, care ofer�? numeroase posibilit�?�?i de recreere. Jude�?ul î�?i p�?streaz�? cu mândrie tradi�?iile unice �?i ofer�? vizitatorilor o experien�?�? autentic�? a câmpiei maghiare.",
      "en": "Jász-Nagykun-Szolnok County is located in the heart of the Great Hungarian Plain and is traversed by the majestic river Tisza. The region is characterized by vast agricultural landscapes and a rich cultural identity stemming from the settlement of the Jász (Iazyges) and Kun (Cumans) peoples. Its administrative center is Szolnok, a strategic city on the banks of the Tisza, famous for its bridges, aviation history, and vibrant art scene. Jász-Nagykun-Szolnok is also a major hub for thermal and water tourism, particularly through Lake Tisza, which offers diverse recreational opportunities. The county proudly preserves its unique traditions and offers visitors an authentic experience of the Hungarian lowlands."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Jász-Nagykun-Szolnok vármegye az Alföld szívében, a Tisza és a Körösök mentén terül el, és nevét az itt letelepedett jász és kun népcsoportokról kapta. A régió arculatát a végtelen rónaság és a kanyargós Tisza határozza meg, amely nemcsak a mez�?gazdaságnak, hanem a kikapcsolódásnak is alapja. A vármegye székhelye Szolnok, a 'Tisza f�?városa', amely fontos közlekedési csomópont és kulturális centrum. A terület híres termálvizeir�?l és fürd�?ir�?l, valamint a Tisza-tó nyújtotta aktív turisztikai lehet�?ségekr�?l. A népművészetben a jász hímzés és a kun hagyományok, a gasztronómiában pedig a tiszai halászlé és a birkapörkölt emelkedik ki.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szolnok, ein wichtiger Verkehrsknotenpunkt an der Thei�?.",
        "Die Region ist nach den Volksgruppen der Jazygen und Kumanen benannt.",
        "Der Thei�?-See ist der zweitgrö�?te See Ungarns und ein Paradies für �?kotourismus.",
        "Szolnok beherbergt das grö�?te Luftfahrtmuseum Ungarns (RepTár).",
        "Die Stadt Jászberény ist das kulturelle Zentrum der Jazygen-Region.",
        "Mez�?túr ist weltberühmt für seine jahrhundertealte Töpfertradition.",
        "Die Region verfügt über zahlreiche Heil- und Thermalbäder, wie in Berekfürd�?.",
        "Das Komitat spielt eine führende Rolle in der ungarischen Getreide- und �?lsaatenproduktion.",
        "Die 'Lehel-Horn' in Jászberény ist eine bedeutende historische Reliquie.",
        "Die Flora und Fauna entlang der Thei�?-Auen ist von herausragender ökologischer Bedeutung."
      ],
      "hu": [
        "A vármegye székhelye Szolnok, a Tisza menti közlekedés és kultúra fontos csomópontja.",
        "A régió nevét az itt letelepedett jász és kun népcsoportokról kapta.",
        "A Tisza-tó az ország második legnagyobb tava és az ökoturizmus paradicsoma.",
        "Szolnokon található a RepTár, Európa egyik legmodernebb repüléstörténeti múzeuma.",
        "Jászberény a jászok kulturális központja, ahol a híres Lehel-kürtöt is �?rzik.",
        "Mez�?túr városa évszázados fazekas hagyományairól és kerámiáiról világszerte ismert.",
        "A vármegye kiváló gyógyvizekkel rendelkezik, például Berekfürd�?n vagy Cserkesz�?l�?n.",
        "Jász-Nagykun-Szolnok az ország egyik legfontosabb gabonatermel�? vidéke.",
        "A Tisza és holtágai mentén egyedülálló ártéri él�?világ található.",
        "A vármegye gasztronómiájának egyik különlegessége a karcagi birkapörkölt."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Szolnok, un nod important de transport pe malul Tisei.",
        "Regiunea este numit�? dup�? grupurile etnice ale iazigilor �?i cumanilor.",
        "Lacul Tisa este al doilea cel mai mare lac din Ungaria �?i un paradis pentru ecoturism.",
        "Szolnok g�?zduie�?te cel mai mare muzeu al avia�?iei din Ungaria (RepTár).",
        "Ora�?ul Jászberény este centrul cultural al regiunii iazigilor.",
        "Mez�?túr este renumit în întreaga lume pentru tradi�?ia sa de ol�?rit de secole.",
        "Regiunea dispune de numeroase b�?i curative �?i termale, cum ar fi cea din Berekfürd�?.",
        "Jude�?ul joac�? un rol de lider în produc�?ia maghiar�? de cereale �?i semin�?e oleaginoase.",
        "'Cornul lui Lehel' din Jászberény este o relicv�? istoric�? important�?.",
        "Flora �?i fauna de-a lungul luncii Tisei au o importan�?�? ecologic�? remarcabil�?."
      ],
      "en": [
        "The county seat is Szolnok, an important transport hub on the river Tisza.",
        "The region is named after the Jász (Iazyges) and Kun (Cumans) ethnic groups.",
        "Lake Tisza is the second largest lake in Hungary and a paradise for ecotourism.",
        "Szolnok is home to Hungary's largest aviation museum (RepTár).",
        "The city of Jászberény is the cultural center of the Jász region.",
        "Mez�?túr is world-famous for its centuries-old pottery tradition.",
        "The region has numerous medicinal and thermal baths, such as in Berekfürd�?.",
        "The county plays a leading role in Hungarian grain and oilseed production.",
        "The 'Lehel Horn' in Jászberény is a significant historical relic.",
        "The flora and fauna along the Tisza floodplains are of outstanding ecological importance."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vármegye nevét a 13. században letelepedett jászokról és kunokról kapta.",
        "Szolnok városa fontos vasúti és vízi közlekedési csomópont a Tisza partján.",
        "Itt található a Tisza-tó egy jelent�?s része, amely az ország egyik legfontosabb ökoturisztikai célpontja.",
        "A jászberényi Jász Múzeumban �?rzik a híres Lehel-kürtöt, a jászok ereklyéjét.",
        "Mez�?túr városa évszázadok óta a magyar fazekasság és kerámiaművészet egyik központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "komarom-esztergom",
    type: "region",
    parent: "HU-KE",
    coords: [18.4222, 47.58],
    name: {"de": "Komárom-Esztergom", "hu": "Komárom-Esztergom", "ro": "Komárom-Esztergom", "en": "Komárom-Esztergom"},
    image: "/geo-images/hungary/komarom-esztergom.webp",
    description: {
      "de": "Das Komitat Komárom-Esztergom ist das flächenmä�?ig kleinste, aber eines der historisch und wirtschaftlich bedeutendsten Komitate Ungarns. Es liegt im Norden des Landes an der Donau, die hier die natürliche Grenze zur Slowakei bildet. Das administrative Zentrum ist Tatabánya, während Esztergom als ehemalige Hauptstadt und Sitz des ungarischen Primas das geistige und historische Herz der Region darstellt. Die Landschaft wird durch das malerische Donauknie und die Gebirgszüge von Gerecse und Pilis geprägt, die zahlreiche Möglichkeiten für Wanderungen und Naturerlebnisse bieten. Komárom-Esztergom verbindet auf engstem Raum monumentale sakrale Architektur, bedeutende römische Ausgrabungen und eine hochmoderne Industrie.",
      "hu": "Komárom-Esztergom vármegye az ország legkisebb területű, de történelmi és gazdasági szempontból egyik legfontosabb vármegyéje. Az ország északi részén, a Duna mentén fekszik, amely itt természetes határt képez Szlovákia felé. Székhelye Tatabánya, de a régió szellemi és történelmi központja Esztergom, az ország egykori f�?városa és a magyar katolikus egyház székhelye. A tájat a fest�?i Dunakanyar, valamint a Gerecse és a Pilis vonulatai határozzák meg, amelyek számtalan túrázási lehet�?séget kínálnak. Komárom-Esztergom vármegyében a monumentális egyházi építészet, a jelent�?s római kori emlékek és a modern ipari parkok különleges egységet alkotnak.",
      "ro": "Jude�?ul Komárom-Esztergom este cel mai mic ca suprafa�?�?, dar unul dintre cele mai importante jude�?e din Ungaria din punct de vedere istoric �?i economic. Este situat în nordul �?�?rii, de-a lungul Dun�?rii, care formeaz�? aici grani�?a natural�? cu Slovacia. Centrul administrativ este Tatabánya, în timp ce Esztergom, fosta capital�? �?i re�?edin�?a primatului Ungariei, reprezint�? inima spiritual�? �?i istoric�? a regiunii. Peisajul este marcat de pitoreasca Cotul Dun�?rii �?i de lan�?urile muntoase Gerecse �?i Pilis, care ofer�? numeroase oportunit�?�?i pentru drume�?ii �?i experien�?e în natur�?. Komárom-Esztergom îmbin�? pe un spa�?iu restrâns arhitectura sacral�? monumental�?, s�?p�?turi romane importante �?i o industrie ultramodern�?.",
      "en": "Komárom-Esztergom County is the smallest by area, yet one of the most historically and economically significant counties in Hungary. It is located in the north of the country along the Danube, which forms the natural border with Slovakia. Its administrative center is Tatabánya, while Esztergom, as the former capital and seat of the Hungarian Primate, represents the spiritual and historical heart of the region. The landscape is characterized by the picturesque Danube Bend and the mountain ranges of Gerecse and Pilis, offering numerous opportunities for hiking and nature experiences. Komárom-Esztergom combines monumental sacral architecture, significant Roman excavations, and state-of-the-art industry within a compact area."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Komárom-Esztergom vármegye Magyarország északnyugati részén, a Duna mentén fekszik, és történelmileg az ország egyik legjelent�?sebb vidéke. Itt található Esztergom, a magyar katolikus egyház központja és az ország egykori f�?városa, ahol az impozáns Bazilika magasodik a város fölé. A vármegye tája rendkívül változatos, hiszen itt találkozik a Gerecse és a Pilis hegység a Dunával, fest�?i szurdokokat és panorámát nyújtva. Komárom városa híres er�?drendszerér�?l, amely a Duna két partján húzódik, míg Tatabánya, a vármegye székhelye, egykori bányászvárosból vált modern ipari központtá. A régió kulturális és természeti kincsei, mint Tata tatai vára és tavai, vonzó célpontot jelentenek minden látogatónak.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Tatabánya, bekannt für das monumentale Turul-Denkmal.",
        "Esztergom war die erste Hauptstadt Ungarns und Geburtsort des Heiligen Stephan.",
        "Die Basilika von Esztergom ist das grö�?te Kirchengebäude Ungarns.",
        "Die Festung von Komárom ist eines der grö�?ten Festungssysteme Mitteleuropas.",
        "Tata ist als die 'Stadt der Gewässer' bekannt und beherbergt eine prächtige Wasserburg.",
        "Die Region beherbergt bedeutende römische Ruinen in der antiken Stadt Brigetio.",
        "Das Gerecse-Gebirge ist berühmt für seinen roten Marmor.",
        "Komárom-Esztergom ist ein führender Standort für die Elektronik- und Automobilindustrie.",
        "Die Maria-Valeria-Brücke verbindet Esztergom mit der slowakischen Stadt Štúrovo.",
        "In Tatabánya befindet sich die Szelim-Höhle, eine bedeutende archäologische Fundstätte."
      ],
      "hu": [
        "A vármegye székhelye Tatabánya, ahol Európa egyik legnagyobb madárszobra, a Turul-emlékmű áll.",
        "Esztergom volt Magyarország els�? f�?városa és Szent István király születési helye.",
        "Az Esztergomi Bazilika az ország legnagyobb egyházi épülete és az érseki székhely.",
        "A komáromi er�?drendszer Közép-Európa egyik legnagyobb katonai létesítménye.",
        "Tata a 'vizek városa', híres az �?reg-tóról és a fest�?i Zsigmond-kori váráról.",
        "A vármegye területén találhatók Brigetio ókori római városának jelent�?s maradványai.",
        "A Gerecse-hegység híres a vörös mészk�?r�?l, amelyet gyakran 'gerecsei márványként' emlegetnek.",
        "Komárom-Esztergom az ország egyik legiparosodottabb vármegyéje.",
        "A Mária Valéria híd köti össze Esztergomot a szlovákiai Párkánnyal.",
        "Tatabányán található a Szelim-barlang, amely fontos �?skori leletek lel�?helye."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Tatabánya, cunoscut�? pentru monumentul Turul.",
        "Esztergom a fost prima capital�? a Ungariei �?i locul de na�?tere al Sfântului �?tefan.",
        "Bazilica din Esztergom este cea mai mare cl�?dire bisericeasc�? din Ungaria.",
        "Sistemul de fortifica�?ii din Komárom este unul dintre cele mai mari din Europa Central�?.",
        "Tata este cunoscut drept 'ora�?ul apelor' �?i g�?zduie�?te un castel de ap�? magnific.",
        "Regiunea g�?zduie�?te ruine romane importante în ora�?ul antic Brigetio.",
        "Mun�?ii Gerecse sunt faimo�?i pentru marmura lor ro�?ie.",
        "Komárom-Esztergom este un centru de top pentru industria electronic�? �?i auto.",
        "Podul Maria Valeria leag�? Esztergom de ora�?ul slovac Štúrovo.",
        "�?n Tatabánya se afl�? pe�?tera Szelim, un sit arheologic important."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Esztergom a magyar kereszténység bölcs�?je, az esztergomi Bazilika az ország legnagyobb temploma.",
        "Komárom városa az UNESCO világörökségi várományos listáján szerepl�? monumentális er�?drendszerér�?l ismert.",
        "Tata a 'vizek városa', híres az �?reg-tóról és a tó partján álló Zsigmond-kori várról.",
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
    parent: "HU-NO",
    coords: [19.8053, 48.0986],
    name: {"de": "Neograd", "hu": "Nógrád", "ro": "Nógrád", "en": "Nógrád"},
    image: "/geo-images/hungary/nograd.webp",
    description: {
      "de": "Das Komitat Nógrád liegt im Norden Ungarns an der Grenze zur Slowakei und ist bekannt als das 'Land der Burgen'. Die Region ist geprägt von einer wildromantischen Hügellandschaft, dichten Wäldern und einer au�?ergewöhnlich reichen Volkskultur. Das administrative Zentrum ist Salgótarján, eine Stadt mit einer bedeutenden Bergbaugeschichte, die malerisch in einem Tal eingebettet ist. Nógrád beherbergt mit Hollók�? ein lebendiges Museumsdorf, das als erstes ungarisches Dorf zum UNESCO-Welterbe erklärt wurde und die Traditionen der Paloczen bewahrt. Die Region bietet eine einzigartige Mischung aus unberührter Natur, mittelalterlichen Festungen und authentischem ländlichem Leben, das Besucher in vergangene Zeiten zurückversetzt.",
      "hu": "Nógrád vármegye Magyarország északi részén, a szlovák határ mentén fekszik, és méltán nevezik a 'várak földjének'. A régiót vadregényes dombvidékek, sűrű erd�?k és rendkívül gazdag népi kultúra jellemzi. Székhelye Salgótarján, a jelent�?s bányászati múlttal rendelkez�? város, amely fest�?i völgyben terül el. Nógrád ad otthont Hollók�?nek, az él�? múzeumfalunak, amely az országban els�?ként lett az UNESCO világörökség része, és hűen �?rzi a palóc hagyományokat. A vármegye az érintetlen természet, a középkori er�?dítmények és az autentikus vidéki élet különleges elegyét kínálja, amely visszarepíti a látogatókat a múltba.",
      "ro": "Jude�?ul Nógrád este situat în nordul Ungariei, la grani�?a cu Slovacia, �?i este cunoscut drept '�?ara castelelor'. Regiunea este caracterizat�? de un peisaj deluros s�?lbatic �?i romantic, p�?duri dese �?i o cultur�? popular�? excep�?ional de bogat�?. Centrul administrativ este Salgótarján, un ora�? cu o istorie minier�? semnificativ�?, a�?ezat pitoresc într-o vale. Nógrád g�?zduie�?te Hollók�?, un sat-muzeu viu, care a fost primul sat maghiar declarat patrimoniu mondial UNESCO �?i care p�?streaz�? tradi�?iile palocilor. Jude�?ul ofer�? un amestec unic de natur�? virgin�?, fortifica�?ii medievale �?i via�?�? rural�? autentic�?, care îi transpune pe vizitatori în vremuri trecute.",
      "en": "Nógrád County is located in northern Hungary on the border with Slovakia and is known as the 'Land of Castles'. The region is characterized by wild and romantic hilly landscapes, dense forests, and an exceptionally rich folk culture. Its administrative center is Salgótarján, a city with a significant mining history, picturesquely nestled in a valley. Nógrád is home to Hollók�?, a living museum village that was the first Hungarian village to be declared a UNESCO World Heritage site, preserving the traditions of the Palóc people. The county offers a unique blend of untouched nature, medieval fortresses, and authentic rural life that transports visitors back in time."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Nógrád vármegye Magyarország legkisebb lakosságszámú vármegyéje, amely az �?szaki-középhegység vadregényes tájain terül el. A vidéket sűrű erd�?k, mély völgyek és magasba tör�? várromok jellemzik, mint például Salgó vagy Somosk�? vára. Nógrád a palóc kultúra legfontosabb �?rz�?je, ahol a népszokások, a viselet és a nyelvjárás a mindennapok része. A vármegye ékköve Hollók�? ófaluja, amely az UNESCO világörökség része és él�? múzeumként mutatja be a hagyományos paraszti életformát. A természet kedvel�?it az Ipoly folyó völgye és a Cserhát dombjai várják, míg Salgótarján, a vármegye székhelye, különleges bányászati múzeumával és modern központjával várja az utazókat.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Salgótarján, die kleinste Komitatshauptstadt Ungarns.",
        "Hollók�? ist ein UNESCO-Welterbe und bewahrt die traditionelle Paloczen-Architektur.",
        "Die Burg Salgó thront auf einem 625 Meter hohen Basaltkegel.",
        "Die Burg Somosk�? liegt direkt an der Grenze und ist berühmt für ihre Basaltsäulen.",
        "Ipolytarnóc beherbergt ein 'Urwelt-Pompeji' mit Millionen Jahre alten Fossilien.",
        "Die Region ist das Zentrum der Paloczen-Volksgruppe mit einzigartigen Dialekten und Trachten.",
        "Balassagyarmat ist als die 'tapferste Stadt' (Civitas Fortissima) bekannt.",
        "Nógrád hat den höchsten Waldanteil aller ungarischen Komitate.",
        "Die Burg von Drégely ist ein bedeutendes Symbol des ungarischen Heldenmutes.",
        "Das Cserhát-Gebirge bietet hervorragende Möglichkeiten für sanften Tourismus und Wandern."
      ],
      "hu": [
        "A vármegye székhelye Salgótarján, az ország legkisebb vármegyeszékhelye.",
        "Hollók�? ófaluja UNESCO világörökségi helyszín és az él�? palóc kultúra központja.",
        "Salgó vára egy 625 méter magas bazaltkúpon magasodik a táj fölé.",
        "A somosk�?i vár mellett található a világhírű, hajlott bazaltoszlopokból álló vízesés.",
        "Ipolytarnócon látható az '�?svilági Pompeji', ahol millió éves �?smaradványokat �?riztek meg.",
        "A vármegye a palóc népcsoport központja, egyedülálló nyelvjárással és népviselettel.",
        "Balassagyarmat a 'legbátrabb város' (Civitas Fortissima) címet viseli.",
        "Nógrád vármegye rendelkezik az országban a legnagyobb erd�?lefedettséggel.",
        "Drégely vára a magyar önfeláldozás és h�?siesség egyik legfontosabb emlékhelye.",
        "A Cserhát lankái kiváló lehet�?séget nyújtanak a csendes túrázásra és a kikapcsolódásra."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Salgótarján, cea mai mic�? re�?edin�?�? de jude�? din Ungaria.",
        "Satul vechi Hollók�? este sit UNESCO �?i centrul culturii vii a palocilor.",
        "Cetatea Salgó troneaz�? pe un con de bazalt înalt de 625 de metri.",
        "Lâng�? cetatea Somosk�? se afl�? faimoasa cascad�? de coloane de bazalt curbate.",
        "La Ipolytarnóc se afl�? 'Pompeii-ul lumii antice', cu fosile vechi de milioane de ani.",
        "Regiunea este centrul grupului etnic al palocilor, cu dialecte �?i costume unice.",
        "Balassagyarmat poart�? titlul de 'cel mai curajos ora�?' (Civitas Fortissima).",
        "Jude�?ul Nógrád are cea mai mare propor�?ie de p�?duri din Ungaria.",
        "Cetatea Drégely este un simbol important al eroismului �?i sacrificiului maghiar.",
        "Mun�?ii Cserhát ofer�? oportunit�?�?i excelente pentru turism lent �?i drume�?ii."
      ],
      "en": [
        "The county seat is Salgótarján, the smallest county seat in Hungary.",
        "The old village of Hollók�? is a UNESCO World Heritage site and a center of Palóc culture.",
        "Salgó Castle towers over the landscape on a 625-meter-high basalt cone.",
        "Near Somosk�? Castle lies the world-famous waterfall of curved basalt columns.",
        "Ipolytarnóc houses an 'ancient Pompeii' with fossils millions of years old.",
        "The county is the center of the Palóc ethnic group, with unique dialects and costumes.",
        "Balassagyarmat is known as the 'Bravest City' (Civitas Fortissima).",
        "Nógrád County has the highest percentage of forest cover in Hungary.",
        "Drégely Castle is a significant symbol of Hungarian heroism and sacrifice.",
        "The Cserhát hills offer excellent opportunities for slow tourism and hiking."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található Hollók�?, az egyetlen magyar falu, amely szerepel az UNESCO világörökségi listáján.",
        "A vármegye székhelye Salgótarján, amely az ország els�? és egyetlen földalatti bányamúzeumának ad otthont.",
        "Nógrád vármegye területe az ország egyik legerd�?sebb vidéke, a terület több mint 40%-át erd�? borítja.",
        "A somosk�?i vár szikláinál látható a világon ritkaságszámba men�? bazaltorgona.",
        "Ipolytarnócon található az '�?svilági Pompeji', amely híres �?slénytani leleteir�?l és megkövesedett fáiról."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pest",
    type: "region",
    parent: "HU-PE",
    coords: [19.0761, 47.6694],
    name: {"de": "Pest", "hu": "Pest", "ro": "Pest", "en": "Pest"},
    image: "/geo-images/hungary/pest.webp",
    description: {
      "de": "Das Komitat Pest umschlie�?t die ungarische Hauptstadt Budapest und ist das bevölkerungsreichste und wirtschaftlich dynamischste Komitat des Landes. Die Region bietet eine au�?ergewöhnliche Vielfalt, die von den malerischen Bergen des Pilis und Börzsöny bis zu den weiten Ebenen der Gro�?en Tiefebene reicht. Das administrative Zentrum befindet sich in Budapest, obwohl die Stadt selbst eine eigenständige Region bildet. Pest ist reich an historischen Schätzen, wie dem königlichen Schloss in Gödöll�? und der antiken Stadt Visegrád am Donauknie. Die Region dient als wichtigster Verkehrsknotenpunkt und wirtschaftlicher Motor Ungarns, während sie gleichzeitig zahlreiche Erholungsgebiete und kulturelle Highlights für Bewohner und Touristen bietet.",
      "hu": "Pest vármegye a f�?várost, Budapestet öleli körül, és az ország legnépesebb, egyben gazdaságilag legdinamikusabb vármegyéje. A régió rendkívüli változatosságot mutat: a Pilis és a Börzsöny fest�?i hegyvonulataitól kezdve az Alföld rónaságaiig minden megtalálható itt. Bár a vármegye székhelye Budapest, maga a f�?város közigazgatásilag külön egységet alkot. Pest vármegye gazdag történelmi emlékekben, itt található például a gödöll�?i Grassalkovich-kastély és a Dunakanyar ékköve, Visegrád is. A régió az ország legfontosabb közlekedési csomópontja és gazdasági motorja, amely számtalan kirándulóhelyet és kulturális élményt kínál az idelátogatóknak.",
      "ro": "Jude�?ul Pest înconjoar�? capitala ungar�? Budapesta �?i este cel mai populat �?i mai dinamic jude�? din punct de vedere economic din �?ar�?. Regiunea ofer�? o diversitate excep�?ional�?, variind de la mun�?ii pitore�?ti Pilis �?i Börzsöny pân�? la câmpiile vaste ale Marii Câmpii Maghiare. Centrul administrativ se afl�? în Budapesta, de�?i ora�?ul în sine formeaz�? o regiune independent�?. Pest este bogat în comori istorice, cum ar fi castelul regal din Gödöll�? �?i ora�?ul antic Visegrád de pe Cotul Dun�?rii. Regiunea serve�?te drept cel mai important nod de transport �?i motor economic al Ungariei, oferind în acela�?i timp numeroase zone de recreere �?i atrac�?ii culturale pentru locuitori �?i turi�?ti.",
      "en": "Pest County surrounds the Hungarian capital, Budapest, and is the most populous and economically dynamic county in the country. The region offers exceptional diversity, ranging from the picturesque mountains of Pilis and Börzsöny to the vast plains of the Great Hungarian Plain. Its administrative center is located in Budapest, although the city itself forms a separate administrative region. Pest is rich in historical treasures, such as the Royal Palace in Gödöll�? and the ancient town of Visegrád on the Danube Bend. The county serves as Hungary's most important transport hub and economic engine, while simultaneously providing numerous recreational areas and cultural highlights for residents and tourists alike."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Pest vármegye Magyarország központi részén terül el, teljesen körülölelve a f�?várost, Budapestet, amellyel szoros gazdasági és kulturális egységet alkot. Ez az ország legnépesebb vármegyéje, amely rendkívül változatos táji és turisztikai adottságokkal rendelkezik. �?szakon a Dunakanyar fest�?i szakasza Visegráddal és Szentendrével, délebbre a Gödöll�?i-dombság a királyi kastéllyal, míg délkeleten az Alföld rónasága határozza meg a vidéket. A vármegye számos kirándulóhelyet kínál a Pilisben és a Börzsönyben, valamint kulturális kincseket Vác barokk belvárosában. Pest vármegye az ország dinamikusan fejl�?d�? szíve, ahol a modern ipar és a hagyomány�?rz�? települések harmonikusan élnek együtt.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Budapest, obwohl die Stadt rechtlich nicht zum Komitat gehört.",
        "Das Schloss Grassalkovich in Gödöll�? war die bevorzugte Residenz von Kaiserin Sisi.",
        "Visegrád am Donauknie war im Mittelalter ein bedeutender ungarischer Königssitz.",
        "Szentendre ist eine malerische Künstlerstadt mit mediterranem Flair an der Donau.",
        "Vác beherbergt den einzigen Triumphbogen Ungarns und eine barocke Kathedrale.",
        "Die Region ist der wichtigste Standort für Logistik und Industrie in Ungarn.",
        "Das Pilis-Gebirge ist ein beliebtes Wandergebiet mit spiritueller Bedeutung.",
        "In Pest befindet sich der Hungaroring, die Rennstrecke für den Gro�?en Preis von Ungarn.",
        "Das Freilichtmuseum (Skanzen) in Szentendre ist das grö�?te seiner Art in Ungarn.",
        "Die Region hat die höchste Dichte an Pendlern, die täglich nach Budapest reisen."
      ],
      "hu": [
        "A vármegye székhelye Budapest, bár a f�?város jogilag nem része a vármegyének.",
        "A gödöll�?i Grassalkovich-kastély Sisi királyné egyik kedvenc tartózkodási helye volt.",
        "Visegrád a középkorban a magyar királyok egyik legfontosabb székhelye volt.",
        "Szentendre fest�?i művészváros a Duna partján, mediterrán hangulattal.",
        "Vác városában található az ország egyetlen diadalíve és egy lenyűgöz�? barokk székesegyház.",
        "A vármegye az ország legfontosabb logisztikai és ipari központja.",
        "A Pilis-hegység népszerű túrahelyszín, amelyhez számos legenda és spirituális hit fűz�?dik.",
        "Mogyoródon található a Hungaroring, a Forma-1-es Magyar Nagydíj helyszíne.",
        "A szentendrei Skanzen az ország legnagyobb szabadtéri néprajzi múzeuma.",
        "Pest vármegye rendelkezik az ország legfejlettebb agglomerációs gyűrűjével."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Budapesta, de�?i ora�?ul nu face parte legal din jude�?.",
        "Castelul Grassalkovich din Gödöll�? a fost re�?edin�?a preferat�? a împ�?r�?tesei Sisi.",
        "Visegrád, situat pe Cotul Dun�?rii, a fost un sediu regal maghiar important în Evul Mediu.",
        "Szentendre este un ora�? pitoresc al arti�?tilor, cu un aer mediteranean, pe malul Dun�?rii.",
        "Vác g�?zduie�?te singurul arc de triumf din Ungaria �?i o catedral�? baroc�?.",
        "Regiunea este cea mai important�? loca�?ie pentru logistic�? �?i industrie din Ungaria.",
        "Mun�?ii Pilis sunt o zon�? popular�? de drume�?ie, cu o semnifica�?ie spiritual�?.",
        "�?n jude�?ul Pest se afl�? Hungaroring, circuitul pentru Marele Premiu al Ungariei.",
        "Muzeul în aer liber (Skanzen) din Szentendre este cel mai mare de acest tip din Ungaria.",
        "Regiunea are cea mai mare densitate de naveti�?ti care c�?l�?toresc zilnic c�?tre Budapesta."
      ],
      "en": [
        "The county seat is Budapest, although the city is legally not part of the county.",
        "The Grassalkovich Castle in Gödöll�? was a favorite residence of Empress Sisi.",
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Pest vármegye az ország legnépesebb vármegyéje, lakossága meghaladja az 1,3 millió f�?t.",
        "Gödöll�?n található a Grassalkovich-kastély, amely Sisi (Erzsébet királyné) kedvenc pihen�?helye volt.",
        "Szentendre a művészetek városa, híres galériáiról, templomtornyairól és a Skanzenr�?l.",
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
    parent: "HU-SO",
    coords: [17.7897, 46.3592],
    name: {"de": "Schomodei", "hu": "Somogy", "ro": "Somogy", "en": "Somogy"},
    image: "/geo-images/hungary/somogy.webp",
    description: {
      "de": "Das Komitat Somogy liegt im Südwesten Ungarns und erstreckt sich vom Südufer des Plattensees bis zur kroatischen Grenze an der Drau. Die Region ist geprägt von dichten Wäldern, sanften Hügeln und den beliebtesten Ferienorten des Landes. Das administrative Zentrum ist Kaposvár, eine Stadt mit einer charmanten Atmosphäre und einer bedeutenden kulturellen Tradition. Somogy ist ein Paradies für Naturliebhaber und Wassersportler gleicherma�?en, da es sowohl die lebendige 'Riviera' des Balaton als auch die unberührte Wildnis des Zselic-Hügellandes bietet. Die Region ist zudem bekannt für ihre reiche Jagdtradition, ihre erstklassigen Weine aus der Region Süd-Balaton und ihre herzliche ländliche Gastfreundschaft.",
      "hu": "Somogy vármegye Magyarország délnyugati részén fekszik, a Balaton déli partjától egészen a horvát határig, a Dráváig nyúlik. A régiót sűrű erd�?k, lankás dombvidékek és az ország legnépszerűbb üdül�?helyei jellemzik. Székhelye Kaposvár, a hangulatos, virágos város, amely jelent�?s kulturális hagyományokkal büszkélkedhet. Somogy igazi paradicsom a természetjárók és a vízi sportok kedvel�?i számára, hiszen egyszerre kínálja a Balaton pezsg�? 'riviéráját' és a Zselic érintetlen vadonját. A vármegye emellett híres vadászati hagyományairól, a Dél-Balatoni borvidék kiváló borairól és a szívélyes somogyi vendéglátásról.",
      "ro": "Jude�?ul Somogy este situat în sud-vestul Ungariei �?i se întinde de la malul sudic al Lacului Balaton pân�? la grani�?a cu Croa�?ia, pe râul Drava. Regiunea este caracterizat�? de p�?duri dese, dealuri blânde �?i cele mai populare sta�?iuni de vacan�?�? din �?ar�?. Centrul administrativ este Kaposvár, un ora�? cu o atmosfer�? fermec�?toare �?i o tradi�?ie cultural�? semnificativ�?. Somogy este un paradis atât pentru iubitorii de natur�?, cât �?i pentru pasiona�?ii de sporturi nautice, oferind atât 'Riviera' vibrant�? a Balatonului, cât �?i s�?lb�?ticia neatins�? a dealurilor Zselic. Regiunea este, de asemenea, cunoscut�? pentru tradi�?ia sa bogat�? în vân�?toare, vinurile sale de prim�? clas�? din regiunea Balatonul de Sud �?i ospitalitatea sa rural�? cald�?.",
      "en": "Somogy County is located in southwestern Hungary, stretching from the southern shore of Lake Balaton to the Croatian border at the river Drava. The region is characterized by dense forests, rolling hills, and the country's most popular holiday resorts. Its administrative center is Kaposvár, a city with a charming atmosphere and a significant cultural tradition. Somogy is a paradise for nature lovers and water sports enthusiasts alike, offering both the vibrant 'Riviera' of Lake Balaton and the untouched wilderness of the Zselic hills. The county is also famous for its rich hunting traditions, world-class wines from the South Balaton wine region, and warm rural hospitality."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Somogy vármegye Magyarország délnyugati részén fekszik, és legfontosabb természeti vonzereje a Balaton déli partja, amely sekély vizével a családok kedvelt üdül�?helye. A vármegye tája azonban jóval többnél: északon a somogyi dombság lankái, délen pedig a Dráva folyó menti ártéri erd�?k alkotják a változatos környezetet. A vármegye székhelye Kaposvár, a virágok városa, amely szecessziós belvárosával és gazdag színházi életével tűnik ki. Somogy híres vadállományáról és sűrű erd�?ir�?l is, különösen a bels�?-somogyi területeken. A régió gasztronómiájában a balatoni halételek és a vadhúsból készült specialitások dominálnak, kulturális emlékei között pedig a somogyvári apátság romjai emelkednek ki.",
      "ro": "",
      "en": ""
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
        "Siófok az ország 'nyári f�?városa' és a balatoni turizmus központja.",
        "A Zselici Csillagpark Európa egyik legkevesebb fényszennyezéssel érintett területe.",
        "Szántód és Tihany között üzemel a Balaton egyetlen kompátkel�?je.",
        "A vármegye világhírű vadállományáról és kiváló vadászterületeir�?l ismert.",
        "Balatonboglár a Dél-Balatoni borvidék központja és a boglári szüret otthona.",
        "Somogyváron találhatók a Szent László király által alapított bencés apátság romjai.",
        "A Dráva folyó mentén érintetlen természeti környezet és vízi világ várja a látogatókat.",
        "A vármegye számos kiváló gyógyfürd�?vel rendelkezik, például Igallban vagy Csokonyavisontán."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Kaposvár, cunoscut sub numele de 'ora�?ul florilor'.",
        "Somogy are cea mai lung�? linie de coast�? la Lacul Balaton.",
        "Siófok este 'capitala de var�?' a Ungariei �?i un centru al turismului.",
        "Parcul de stele Zselic este unul dintre cele mai bune locuri din Europa pentru observarea stelelor.",
        "�?ntre Szántód �?i Tihany func�?ioneaz�? singurul feribot de pe Lacul Balaton.",
        "Regiunea este faimoas�? pentru popula�?iile sale de vânat �?i zonele de vân�?toare de prim�? clas�?.",
        "Balatonboglár este centrul unei regiuni viticole importante de pe malul sudic.",
        "La Somogyvár se afl�? ruinele unei importante aba�?ii benedictine medievale.",
        "Râul Drava formeaz�? o grani�?�? natural�? �?i virgin�? în sudul regiunii.",
        "Jude�?ul g�?zduie�?te numeroase b�?i termale, cum ar fi cea din Igal."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Somogy vármegyéhez tartozik a Balaton déli partjának legnagyobb része, Siófokkal, a 'nyári f�?várossal'.",
        "Itt található Kaposvár, amely híres Rippl-Rónai József fest�?művész hagyatékáról és múzeumáról.",
        "A vármegye déli határát a Dráva folyó alkotja, amely Európa egyik legtisztább vizű és legvadregényesebb folyója.",
        "Igal és Csokonyavisonta híres gyógyfürd�?kkel rendelkezik, amelyek kénes vizükr�?l ismertek.",
        "Kaszó sűrű erdei az ország egyik legfontosabb vadászterületét és egy különleges lombkoronasétányt rejtenek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabolcs-szatmar-bereg",
    type: "region",
    parent: "HU-SZ",
    coords: [21.7167, 47.95],
    name: {"de": "Szabolcs-Szatmár-Bereg", "hu": "Szabolcs-Szatmár-Bereg", "ro": "Szabolcs-Szatmár-Bereg", "en": "Szabolcs-Szatmár-Bereg"},
    image: "/geo-images/hungary/szabolcs-szatmar-bereg.webp",
    description: {
      "de": "Das Komitat Szabolcs-Szatmár-Bereg liegt im äu�?ersten Nordosten Ungarns und ist die einzige Region des Landes, die an drei verschiedene Staaten grenzt: die Slowakei, die Ukraine und Rumänien. Die Region ist bekannt für ihre unberührte Natur entlang der Oberen Thei�?, ihre ausgedehnten Obstgärten und ihre einzigartigen mittelalterlichen Kirchen mit Holzglockentürmen. Das administrative Zentrum ist Nyíregyháza, eine dynamische Stadt, die für ihren erstklassigen Zoo und das beliebte Heilbad Sóstófürd�? berühmt ist. Szabolcs-Szatmár-Bereg bewahrt eine tiefe volkstümliche Tradition und bietet Besuchern eine authentische Atmosphäre, in der Geschichte, Natur und ländliche Gastfreundschaft auf besondere Weise verschmelzen.",
      "hu": "Szabolcs-Szatmár-Bereg vármegye Magyarország legészakkeletibb csücskében fekszik, és az ország egyetlen olyan régiója, amely három állammal �?? Szlovákiával, Ukrajnával és Romániával �?? is határos. A vármegye híres a Fels�?-Tisza vidékének érintetlen természetér�?l, hatalmas gyümölcsöskertjeir�?l és egyedülálló középkori templomairól, amelyek fa haranglábaikkal a világörökség részét képezik. Székhelye Nyíregyháza, a dinamikusan fejl�?d�? város, amely világszínvonalú állatparkjáról és a népszerű Sóstógyógyfürd�?r�?l ismert. Szabolcs-Szatmár-Bereg mélyen �?rzi népi hagyományait, és olyan hiteles légkört kínál, ahol a történelem, a természet és a vidéki vendégszeretet különleges módon fonódik össze.",
      "ro": "Jude�?ul Szabolcs-Szatmár-Bereg este situat în extremitatea nord-estic�? a Ungariei �?i este singura regiune a �?�?rii care se învecineaz�? cu trei state diferite: Slovacia, Ucraina �?i România. Regiunea este cunoscut�? pentru natura sa virgin�? de-a lungul Tisei Superioare, livezile sale întinse de pomi fructiferi �?i bisericile sale medievale unice, cu clopotni�?e din lemn. Centrul administrativ este Nyíregyháza, un ora�? dinamic, renumit pentru gr�?dina sa zoologic�? de clas�? mondial�? �?i populara sta�?iune balnear�? Sóstófürd�?. Szabolcs-Szatmár-Bereg p�?streaz�? o tradi�?ie popular�? profund�? �?i ofer�? vizitatorilor o atmosfer�? autentic�?, în care istoria, natura �?i ospitalitatea rural�? se îmbin�? într-un mod special.",
      "en": "Szabolcs-Szatmár-Bereg County is located in the far northeast of Hungary and is the only region in the country that borders three different states: Slovakia, Ukraine, and Romania. The region is famous for its untouched nature along the Upper Tisza, its extensive fruit orchards, and its unique medieval churches with wooden bell towers. Its administrative center is Nyíregyháza, a dynamic city renowned for its world-class zoo and the popular Sóstófürd�? spa. Szabolcs-Szatmár-Bereg preserves deep folk traditions and offers visitors an authentic atmosphere where history, nature, and rural hospitality merge in a unique way."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Szabolcs-Szatmár-Bereg vármegye Magyarország északkeleti csücskében, az ukrán, a román és a szlovák határ találkozásánál fekszik. A tájat a Tisza, a Szamos és a Túr folyók kanyarulatai, valamint a Nyírség homokbuckái határozzák meg. Ez a régió Magyarország egyik leghitelesebb és legtöbb népi emléket �?rz�? vidéke, híres középkori 'mosolygó szentekkel' díszített templomairól és különleges haranglábairól. A vármegye székhelye Nyíregyháza, amely modern állatparkjával és Sóstógyógyfürd�?vel vonzza a látogatókat. Szabolcs-Szatmár-Bereg az ország 'almáskertje', de híres szatmári szilvapálinkájáról és a beregi hímzésr�?l is, amelyek a térség büszkeségei.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Nyíregyháza, Heimat eines der besten Zoos in Europa.",
        "Die Region ist der grö�?te Apfelproduzent Ungarns (Szabolcsi alma).",
        "Die mittelalterlichen Kirchen der Region bilden die 'Stra�?e der Kirchen'.",
        "Sóstófürd�? ist ein bedeutendes Zentrum für Gesundheitstourismus und Wellness.",
        "Die Region ist berühmt für ihre Obstbrände, insbesondere den Pflaumenschnaps aus Szatmár.",
        "Máriapócs ist einer der wichtigsten Wallfahrtsorte Ungarns.",
        "Die Obere Thei�? bietet hervorragende Möglichkeiten für Kanutouren und �?kotourismus.",
        "Vásárosnamény ist als die 'Stadt der Freiheit' an der Thei�? bekannt.",
        "Die Region hat eine reiche jüdische Geschichte mit bedeutenden Gedenkstätten.",
        "Das Dorf Tákos beherbergt die berühmte 'barfü�?ige Kathedrale' mit bemalter Holzdecke."
      ],
      "hu": [
        "A vármegye székhelye Nyíregyháza, ahol Európa egyik legjobb állatparkja található.",
        "A régió Magyarország legnagyobb almatermel�? vidéke (szabolcsi alma).",
        "A vármegye középkori templomai alkotják a híres 'Középkori Templomok �?tját'.",
        "Sóstógyógyfürd�? az egészségturizmus és a kikapcsolódás egyik legfontosabb központja.",
        "A vármegye híres eredetvédett pálinkáiról, mint a szatmári szilvapálinka.",
        "Máriapócs az ország egyik legjelent�?sebb nemzeti kegyhelye és zarándokhelye.",
        "A Fels�?-Tisza vidéke kiváló lehet�?ségeket nyújt a vízi túrázásra és az ökoturizmusra.",
        "Vásárosnamény a Fels�?-Tisza vidékének egyik legfontosabb turisztikai kapuja.",
        "A vármegye gazdag zsidó vallási örökséggel és emlékhelyekkel rendelkezik.",
        "Tákoson található a híres 'mezítlábas katedrális', amely festett kazettás mennyezetér�?l ismert."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Nyíregyháza, gazda uneia dintre cele mai bune gr�?dini zoologice din Europa.",
        "Regiunea este cel mai mare produc�?tor de mere din Ungaria (merele de Szabolcs).",
        "Bisericile medievale din regiune formeaz�? 'Drumul Bisericilor Medievale'.",
        "Sóstófürd�? este un centru important pentru turismul de s�?n�?tate �?i wellness.",
        "Regiunea este faimoas�? pentru p�?lincile sale, în special p�?linca de prune de Szatmár.",
        "Máriapócs este unul dintre cele mai importante locuri de pelerinaj din Ungaria.",
        "Tisa Superioar�? ofer�? oportunit�?�?i excelente pentru excursii cu canoa �?i ecoturism.",
        "Vásárosnamény este cunoscut drept 'ora�?ul libert�?�?ii' de pe malul Tisei.",
        "Regiunea are o istorie evreiasc�? bogat�?, cu situri memoriale importante.",
        "Satul Tákos g�?zduie�?te faimoasa 'catedral�? descul�?�?' cu tavan din lemn pictat."
      ],
      "en": [
        "The county seat is Nyíregyháza, home to one of the best zoos in Europe.",
        "The region is Hungary's largest apple producer (Szabolcs apples).",
        "The region's medieval churches form the 'Route of Medieval Churches'.",
        "Sóstófürd�? is a major center for health tourism and wellness.",
        "The county is famous for its fruit brandies, especially the Szatmár plum pálinka.",
        "Máriapócs is one of Hungary's most important national shrines and pilgrimage sites.",
        "The Upper Tisza offers excellent opportunities for canoeing and ecotourism.",
        "Vásárosnamény is known as a major tourist gateway to the Upper Tisza region.",
        "The region has a rich Jewish heritage with significant memorial sites.",
        "The village of Tákos is home to the famous 'barefoot cathedral' with a painted wooden ceiling."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Nyíregyháza állatparkja (Sóstó Zoo) többször is elnyerte Európa legjobb állatkertje címet.",
        "Itt található a Túristvándi vízimalom, amely az ország egyik legszebb ipartörténeti műemléke.",
        "A vármegye híres a szatmári szilváról és a bel�?le készült lekvárról, valamint a pálinkáról.",
        "Tákos és Csaroda református templomai a középkori magyar építészet és falfestészet remekművei.",
        "Máriapócs nemzeti kegyhely, a könnyez�? Szűzanya-ikonjáról híres zarándokhely."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tolna",
    type: "region",
    parent: "HU-TO",
    coords: [18.7, 46.35],
    name: {"de": "Tolnau", "hu": "Tolna", "ro": "Tolna", "en": "Tolna"},
    description: {
      "de": "Das Komitat Tolna liegt im südlichen Zentrum Ungarns, am rechten Ufer der Donau, und ist eine Region von stiller Schönheit und reicher Tradition. Die Landschaft ist geprägt von den sanften Hügeln des Tolnaer Hügellandes und den fruchtbaren Ebenen entlang der Donau. Das administrative Zentrum ist Szekszárd, eine Stadt, die weltweit für ihre erstklassigen Rotweine und ihre tiefe literarische Tradition bekannt ist. Tolna beherbergt zudem den Nationalpark Gemenc, das grö�?te zusammenhängende Auwaldgebiet Mitteleuropas, das ein Paradies für Naturfotografen und Jäger darstellt. Die Region bietet eine harmonische Mischung aus exzellenter Weinkultur, unberührter Flusslandschaft und einem reichen Erbe der Donauschwaben.",
      "hu": "Tolna vármegye Magyarország déli-középs�? részén, a Duna jobb partján fekszik, és a csendes szépség, valamint a gazdag hagyományok vidéke. A tájat a Tolnai-hegyhát lankás dombjai és a Duna menti termékeny síkságok határozzák meg. Székhelye Szekszárd, amely világszerte híres kiváló vörösborairól, különösen a szekszárdi bikavérr�?l, és mély irodalmi gyökereir�?l. Tolna vármegye ad otthont a Gemenci-erd�?nek, amely Közép-Európa legnagyobb összefügg�? ártéri erdeje, és igazi paradicsom a természetjárók és a vadászok számára. A régió a kiváló borkultúra, az érintetlen folyóparti táj és a dunai svábok gazdag örökségének harmonikus ötvözetét kínálja.",
      "ro": "Jude�?ul Tolna este situat în centrul sudic al Ungariei, pe malul drept al Dun�?rii, �?i este o regiune de o frumuse�?e lini�?tit�? �?i tradi�?ii bogate. Peisajul este caracterizat de dealurile blânde ale regiunii deluroase Tolna �?i de câmpiile fertile de-a lungul Dun�?rii. Centrul administrativ este Szekszárd, un ora�? renumit în întreaga lume pentru vinurile sale ro�?ii de prim�? clas�? �?i tradi�?ia sa literar�? profund�?. Tolna g�?zduie�?te, de asemenea, Parcul Na�?ional Gemenc, cea mai mare zon�? de p�?dure inundabil�? continu�? din Europa Central�?, care este un paradis pentru fotografii de natur�? �?i vân�?tori. Regiunea ofer�? un amestec armonios de cultur�? viticol�? excelent�?, peisaj fluvial virgin �?i o mo�?tenire bogat�? a �?vabilor dun�?reni.",
      "en": "Tolna County is located in the south-central part of Hungary, on the right bank of the Danube, and is a region of quiet beauty and rich traditions. The landscape is characterized by the rolling hills of the Tolna Uplands and the fertile plains along the Danube. Its administrative center is Szekszárd, a city world-famous for its premium red wines and deep literary roots. Tolna is also home to the Gemenc Forest, Central Europe's largest continuous floodplain forest, which is a paradise for nature photographers and hunters. The county offers a luxurious blend of excellent wine culture, untouched river landscapes, and the rich heritage of the Danube Swabians."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Tolna vármegye a Dunántúl keleti részén, a Duna mentén fekszik, és szelíd dombságairól, valamint az ország egyik leghíresebb borvidékér�?l, a szekszárdiról ismert. A tájat északon a Mez�?föld, nyugaton a Tolnai-hegyhát, délen pedig a Mecsek nyúlványai határozzák meg. A vármegye székhelye Szekszárd, amely Liszt Ferenc kedvenc városa volt, és ma a vörösbor, különösen a Szekszárdi Bikavér hazája. Tolna büszkélkedhet a Gemenci erd�?vel, amely Európa legnagyobb összefügg�? ártéri erdeje, és gazdag vadállományáról, valamint kisvasútjáról híres. A régió kulturális kincsei között a paksi atomer�?mű technikai érdekességei és a népművészeti hagyományok, mint a sárközi hímzés, egyaránt megtalálhatóak.",
      "ro": "",
      "en": ""
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
        "A Gemenci-erd�? a Duna-Dráva Nemzeti Park része, és egyedülálló gímszarvas-állománnyal rendelkezik.",
        "Pakson található Magyarország egyetlen atomer�?műve, amely az ország áramtermelésének felét adja.",
        "A vármegyében jelent�?s a dunai svábok kulturális öröksége és hagyomány�?rzése.",
        "Szekszárd a híres költ�?, Babits Mihály szül�?városa.",
        "A Gemenci Állami Erdei Vasút az ország egyik legnépszerűbb erdei vasútvonala.",
        "Tolna városa híres a hagyományos kékfest�? műhelyér�?l és népművészetér�?l.",
        "A simontornyai vár a régió egyik legfontosabb reneszánsz műemléke.",
        "A Duna menti holtágak és árterek kiváló horgászparadicsomok."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Szekszárd, una dintre cele mai mici re�?edin�?e de jude�? din Ungaria.",
        "Regiunea viticol�? Szekszárd este faimoas�? pentru vinul 'Szekszárdi Bikavér' (Sânge de Taur).",
        "P�?durea Gemenc face parte din Parcul Na�?ional Dun�?re-Drava �?i ad�?poste�?te o faun�? unic�?.",
        "La Paks se afl�? singura central�? nuclear�? din Ungaria.",
        "Regiunea are o puternic�? tradi�?ie a �?vabilor dun�?reni, în special în sate precum Gyönk.",
        "Szekszárd este locul de na�?tere al faimosului poet Mihály Babits.",
        "Calea ferat�? cu ecartament îngust din Gemenc este una dintre cele mai populare din �?ar�?.",
        "Ora�?ul Tolna este cunoscut pentru me�?te�?ugul tradi�?ional al vopsitului în albastru.",
        "Cetatea din Simontornya este un monument renascentist important al regiunii.",
        "Dun�?rea ofer�? în aceast�? regiune condi�?ii excelente pentru pescuit."
      ],
      "en": [
        "The county seat is Szekszárd, one of the smallest county seats in Hungary.",
        "The Szekszárd wine region is famous for 'Szekszárdi Bikavér' (Bull's Blood) and Kadarka.",
        "The Gemenc Forest is part of the Danube-Drava National Park and has a unique red deer population.",
        "Paks is the site of Hungary's only nuclear power plant.",
        "The region has a strong Danube Swabian tradition, especially in villages like Gyönk.",
        "Szekszárd is the birthplace of the famous Hungarian poet Mihály Babits.",
        "The Gemenc Forest Railway is one of the most popular forest railways in the country.",
        "The town of Tolna is famous for its traditional blue-dyeing (kékfest�?) workshop.",
        "Simontornya Castle is a significant Renaissance monument in the region.",
        "The Danube floodplains and backwaters offer excellent conditions for fishing."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szekszárd a legkisebb lakosságszámú vármegyeszékhely Magyarországon, híres bortermelésér�?l.",
        "A Gemenci erd�? a Duna-Dráva Nemzeti Park része, a világ legnagyobb trófeát adó gímszarvasainak otthona.",
        "Itt található Paks városa, ahol az ország egyetlen atomer�?műve működik.",
        "A Sárköz néprajzi tájegysége híres színes népviseletér�?l, hímzésér�?l és szövésér�?l.",
        "Decs községe a Sárköz központja, ahol a népi hagyományok a mai napig elevenen élnek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vas",
    type: "region",
    parent: "HU-VA",
    coords: [16.6217, 47.2306],
    name: {"de": "Eisenburg", "hu": "Vas", "ro": "Vas", "en": "Vas"},
    image: "/geo-images/hungary/vas.webp",
    description: {
      "de": "Das Komitat Vas liegt im äu�?ersten Westen Ungarns an der Grenze zu �?sterreich und Slowenien und ist eine Region von au�?ergewöhnlicher natürlicher Schönheit und historischer Bedeutung. Die Landschaft ist geprägt von den Ausläufern der Alpen, dichten Wäldern und zahlreichen Thermalquellen. Das administrative Zentrum ist Szombathely, eine der ältesten Städte Ungarns, die auf eine bedeutende römische Vergangenheit als Savaria zurückblickt. Vas ist weltberühmt für seine erstklassigen Heilbäder wie Bükfürd�? und Sárvár sowie für seine malerischen historischen Kleinstädte wie K�?szeg. Die Region bietet eine perfekte Kombination aus alpiner Frische, römischem Erbe und moderner Wellness-Kultur, was sie zu einem idealen Ziel für Erholungssuchende und Geschichtsinteressierte macht.",
      "hu": "Vas vármegye Magyarország legnyugatibb részén, az osztrák és a szlovén határ mentén fekszik, és az ország egyik legszebb természeti adottságokkal rendelkez�? régiója. A tájat az Alpok nyúlványai, sűrű erd�?k és b�?séges termálvízkincs jellemzi. Székhelye Szombathely, az ország egyik leg�?sibb városa, amely jelent�?s római kori múlttal büszkélkedhet Savaria néven. Vas vármegye világszerte híres kiváló gyógyfürd�?ir�?l, mint Bükfürd�? és Sárvár, valamint fest�?i történelmi kisvárosairól, mint például K�?szeg. A régió az alpesi frissesség, a római örökség és a modern wellness kultúra tökéletes ötvözetét kínálja, ideális helyszínt biztosítva a pihenésre és a felfedezésre.",
      "ro": "Jude�?ul Vas este situat în extremitatea vestic�? a Ungariei, la grani�?a cu Austria �?i Slovenia, �?i este o regiune de o frumuse�?e natural�? excep�?ional�? �?i importan�?�? istoric�?. Peisajul este marcat de ramifica�?iile Alpilor, p�?duri dese �?i numeroase izvoare termale. Centrul administrativ este Szombathely, unul dintre cele mai vechi ora�?e din Ungaria, cu un trecut roman semnificativ sub numele de Savaria. Vas este renumit în întreaga lume pentru b�?ile sale curative de prim�? clas�?, cum ar fi Bükfürd�? �?i Sárvár, precum �?i pentru or�?�?elele sale istorice pitore�?ti, cum ar fi K�?szeg. Jude�?ul ofer�? o combina�?ie perfect�? de prospe�?ime alpin�?, mo�?tenire roman�? �?i cultur�? modern�? de wellness, fiind o destina�?ie ideal�? pentru relaxare �?i pasiona�?ii de istorie.",
      "en": "Vas County is located in the far west of Hungary on the border with Austria and Slovenia, and is a region of exceptional natural beauty and historical significance. The landscape is characterized by the foothills of the Alps, dense forests, and abundant thermal springs. Its administrative center is Szombathely, one of Hungary's oldest cities, boasting a significant Roman past as Savaria. Vas is world-famous for its premium spas such as Bükfürd�? and Sárvár, as well as its picturesque historic towns like K�?szeg. The county offers a perfect combination of alpine freshness, Roman heritage, and modern wellness culture, making it an ideal destination for relaxation and history enthusiasts."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Vas vármegye Magyarország legnyugatibb részén, az osztrák határ mentén terül el, és az Alpokalja fest�?i dombvidékeir�?l, valamint történelmi városairól ismert. A vármegye székhelye Szombathely, amelyet a rómaiak alapítottak Savaria néven, és büszkélkedhet az ország egyik leggazdagabb antik emlékanyagával. �?szakon K�?szeg városa varázsolja el a látogatókat középkori hangulatával és várával, míg délebbre az Őrség néprajzi tájegysége �?rzi az �?si magyar építészetet és életmódot. Vas vármegye rendkívül gazdag gyógyvizekben is, olyan világhírű fürd�?kkel, mint Bükfürd�? vagy Sárvár. A természet kedvel�?it az Írott-k�? környéki erd�?k és a kanyargós Rába folyó várja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szombathely, das antike Savaria der Römerzeit.",
        "Bükfürd�? beherbergt eines der grö�?ten und bekanntesten Heilbäder Ungarns.",
        "K�?szeg ist bekannt für seine charmante mittelalterliche Altstadt und die Burg Jurisics.",
        "Der Nationalpark Őrség bewahrt die traditionelle bäuerliche Lebensweise und Architektur.",
        "Die Region beherbergt das Ják-Kloster, ein Meisterwerk der romanischen Architektur.",
        "Sárvár ist berühmt für sein Schloss Nádasdy und sein modernes Thermalbad.",
        "Vas hat eine der höchsten Lebensqualitäten und eine starke wirtschaftliche Anbindung an den Westen.",
        "Der Írott-k�? (Geschriebenstein) ist der höchste Punkt Transdanubiens.",
        "Die Region ist bekannt für ihre exzellenten Wei�?weine, insbesondere aus der Gegend um K�?szeg.",
        "Szombathely ist der Geburtsort des Heiligen Martin von Tours."
      ],
      "hu": [
        "A vármegye székhelye Szombathely, az ókori Savaria, amely fontos római központ volt.",
        "Bükfürd�? az ország egyik legnagyobb és legnépszerűbb gyógyfürd�?helye.",
        "K�?szeg városa híres épen maradt középkori belvárosáról és a Jurisics-várról.",
        "Az Őrségi Nemzeti Park egyedülálló módon �?rzi a hagyományos népi építészetet és életmódot.",
        "Jákon található az ország egyik legjelent�?sebb román kori emléke, a jáki apátsági templom.",
        "Sárvár legf�?bb látnivalója a Nádasdy-vár és a világszínvonalú gyógy- és wellnessfürd�?.",
        "Vas vármegye gazdaságilag az egyik legfejlettebb régió, szoros kapcsolatokkal Ausztria felé.",
        "Itt található a Dunántúl legmagasabb pontja, az Írott-k�? (882 m).",
        "A vármegye híres a k�?szegi és vaskeresztesi bortermelésr�?l.",
        "Szombathely Szent Márton püspök szül�?helye, aki Európa egyik legtiszteltebb szentje."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Szombathely, anticul Savaria din epoca roman�?.",
        "Bükfürd�? g�?zduie�?te una dintre cele mai mari �?i mai cunoscute b�?i curative din Ungaria.",
        "K�?szeg este cunoscut pentru centrul s�?u vechi medieval fermec�?tor �?i cetatea Jurisics.",
        "Parcul Na�?ional Őrség p�?streaz�? modul de via�?�? �?i arhitectura �?�?r�?neasc�? tradi�?ional�?.",
        "Regiunea g�?zduie�?te Aba�?ia din Ják, o capodoper�? a arhitecturii romanice.",
        "Sárvár este faimos pentru castelul Nádasdy �?i b�?ile sale termale moderne.",
        "Jude�?ul Vas are una dintre cele mai ridicate calit�?�?i ale vie�?ii din Ungaria.",
        "Vârful Írott-k�? (Geschriebenstein) este cel mai înalt punct din Transdanubia.",
        "Regiunea este cunoscut�? pentru vinurile sale albe excelente, în special din zona K�?szeg.",
        "Szombathely este locul de na�?tere al faimosului Sfânt Martin din Tours."
      ],
      "en": [
        "The county seat is Szombathely, the ancient Savaria of the Roman era.",
        "Bükfürd�? is home to one of Hungary's largest and most famous medicinal baths.",
        "K�?szeg is known for its charming medieval old town and the Jurisics Castle.",
        "The Őrség National Park preserves traditional peasant lifestyle and architecture.",
        "The region is home to the Ják Abbey, a masterpiece of Romanesque architecture.",
        "Sárvár is famous for its Nádasdy Castle and its modern thermal bath.",
        "Vas County has one of the highest qualities of life and strong economic ties to the West.",
        "Írott-k�? (Geschriebenstein) is the highest point in Transdanubia.",
        "The region is known for its excellent white wines, particularly from the K�?szeg area.",
        "Szombathely is the birthplace of Saint Martin of Tours."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szombathely (Savaria) az ország legrégebbi, rómaiak által alapított városa.",
        "Itt található K�?szeg, amely az 1532-es török ostrom elleni h�?sies helytállásáról híres.",
        "Az Őrségi Nemzeti Park az �?si határ�?rvidék hagyományait és különleges 'szeres' településszerkezetét �?rzi.",
        "Bükfürd�? Magyarország egyik legjelent�?sebb gyógyfürd�?je, vize különösen magas ásványi anyag tartalmú.",
        "A vármegye legmagasabb pontja az Írott-k�? (882 m), amely egyben a Dunántúl legmagasabb csúcsa is."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem",
    type: "region",
    parent: "HU-VE",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "Veszprém", "ro": "Veszprém", "en": "Veszprém"},
    image: "/geo-images/hungary/veszprem.webp",
    description: {
      "de": "Das Komitat Veszprém liegt im Herzen Transdanubiens und umfasst das Nordufer des Plattensees sowie das malerische Bakony-Gebirge. Die Region ist bekannt für ihre au�?ergewöhnliche geografische Vielfalt, die von vulkanischen Hügeln bis zu tiefen Wäldern und dem glitzernden Wasser des Balaton reicht. Das administrative Zentrum ist Veszprém, die 'Stadt der Königinnen', die auf fünf Hügeln erbaut wurde und eine reiche mittelalterliche Geschichte besitzt. Veszprém ist weltberühmt für seine Weinregionen, insbesondere das Balaton-Oberland und Badacsony, sowie für seine kulturellen Schätze wie die Abtei von Tihany. Die Region bietet eine einzigartige Mischung aus historischer Eleganz, natürlicher Schönheit und erstklassigen Freizeitmöglichkeiten, was sie zu einem der beliebtesten Reiseziele Ungarns macht.",
      "hu": "Veszprém vármegye a Dunántúl szívében terül el, magában foglalva a Balaton északi partját és a fest�?i Bakony-hegységet. A régió rendkívüli földrajzi változatosságáról ismert, a vulkanikus tanúhegyekt�?l a sűrű erd�?kön át a Balaton csillogó víztükréig minden megtalálható itt. Székhelye Veszprém, a 'királynék városa', amely öt dombra épült, és gazdag középkori múlttal rendelkezik. Veszprém vármegye világszerte híres borvidékeir�?l, különösen a Balaton-felvidékr�?l és Badacsonyról, valamint olyan kulturális kincseir�?l, mint a Tihanyi Apátság. A vármegye a történelmi elegancia, a természeti szépség és a min�?ségi kikapcsolódás egyedülálló ötvözetét kínálja, így az ország egyik legnépszerűbb turisztikai célpontja.",
      "ro": "Jude�?ul Veszprém este situat în inima Transdanubiei �?i cuprinde malul nordic al Lacului Balaton �?i mun�?ii pitore�?ti Bakony. Regiunea este cunoscut�? pentru diversitatea sa geografic�? excep�?ional�?, variind de la dealuri vulcanice la p�?duri dese �?i apele str�?lucitoare ale Balatonului. Centrul administrativ este Veszprém, 'ora�?ul reginelor', construit pe cinci dealuri �?i având o istorie medieval�? bogat�?. Veszprém este renumit în întreaga lume pentru regiunile sale viticole, în special zona deluroas�? a Balatonului �?i Badacsony, precum �?i pentru comorile sale culturale, cum ar fi Aba�?ia din Tihany. Jude�?ul ofer�? un amestec unic de elegan�?�? istoric�?, frumuse�?e natural�? �?i oportunit�?�?i de recreere de prim�? clas�?, fiind una dintre cele mai populare destina�?ii turistice din Ungaria.",
      "en": "Veszprém County is located in the heart of Transdanubia, encompassing the northern shore of Lake Balaton and the picturesque Bakony Mountains. The region is known for its exceptional geographical diversity, ranging from volcanic hills to dense forests and the sparkling waters of Lake Balaton. Its administrative center is Veszprém, the 'City of Queens', built on five hills and possessing a rich medieval history. Veszprém is world-famous for its wine regions, particularly the Balaton Uplands and Badacsony, as well as for its cultural treasures like the Tihany Abbey. The county offers a unique blend of historical elegance, natural beauty, and high-quality recreational opportunities, making it one of Hungary's most popular tourist destinations."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Veszprém vármegye a Dunántúl központi részén fekszik, és Magyarország egyik legváltozatosabb turisztikai régiója, magában foglalva a Bakony-hegységet és a Balaton északi partját. A vármegye székhelye Veszprém, a 'királynék városa', amely nevét arról kapta, hogy évszázadokon át a veszprémi püspök koronázta meg a magyar királynékat. A tájat a Bakony sűrű erd�?i, vadregényes szurdokai és a Balaton-felvidék vulkanikus tanúhegyei, mint a Badacsony, teszik egyedülállóvá. Itt található a Tihanyi-félsziget is, az ország els�? tájvédelmi körzete az ezeréves apátsággal. A vármegye híres bortermelésér�?l, herendi porcelánjáról és gazdag történelmi emlékeir�?l, amelyek várakban (Sümeg, Nagyvázsony) és kolostorromokban öltenek testet.",
      "ro": "",
      "en": ""
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
        "A vármegye székhelye Veszprém, amely 2023-ban Európa Kulturális F�?városa volt.",
        "A Tihanyi Apátság altemplomában található az egyetlen épen maradt magyar királysír (I. András).",
        "Badacsony híres bazaltorgonáiról és az itt termelt szürkebarát borról.",
        "A Balaton-felvidéki Nemzeti Park óvja a régió egyedülálló vulkanikus tájegységeit.",
        "Herend világhírű a kézzel festett luxusporcelán-manufaktúrájáról.",
        "A Bakony hegység egykor a híres bakonyi betyárok rejtekhelye volt.",
        "Balatonfüred a Balaton legrégebbi gyógyüdül�?helye és a vitorlázás központja.",
        "A sümegi vár az ország egyik leglátványosabb és legépebben maradt középkori er�?dje.",
        "Veszprém hagyományosan a magyar királynék koronázóvárosa volt.",
        "A vármegye területén található a Balaton legmélyebb pontja, a Tihanyi-szorosnál."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Veszprém, una dintre Capitalele Europene ale Culturii în 2023.",
        "Aba�?ia din Tihany ad�?poste�?te actul de ctitorire cu cele mai vechi fragmente scrise în limba maghiar�?.",
        "Badacsony este faimos pentru mun�?ii s�?i de bazalt �?i vinul 'Szürkebarát' (C�?lug�?rul Gri).",
        "Parcul Na�?ional Balaton-felvidék protejeaz�? peisajul vulcanic unic al regiunii.",
        "Herend este cunoscut în întreaga lume pentru manufactura sa de por�?elan de lux pictat manual.",
        "Mun�?ii Bakony au fost odinioar�? ascunz�?toarea faimo�?ilor haiduci maghiari (Betyárok).",
        "Balatonfüred este cea mai veche sta�?iune balnear�? de la Lacul Balaton �?i centrul naviga�?iei.",
        "Cetatea din Sümeg este una dintre cele mai bine conservate fortifica�?ii medievale din �?ar�?.",
        "Veszprém a fost în mod tradi�?ional ora�?ul unde erau încoronate reginele Ungariei.",
        "Lacul Balaton ofer�? în aceast�? regiune condi�?ii excelente pentru sporturile nautice."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Veszprém városa 2023-ban Európa Kulturális F�?városa volt, elismerve gazdag művészeti életét.",
        "Itt található a Balaton-felvidéki Nemzeti Park a világhírű tihanyi bencés apátsággal.",
        "Herend városa a világszerte ismert, kézzel festett porcelán gyártásának központja.",
        "A Badacsony-hegy és környéke az ország egyik legfontosabb fehérbortermel�? vidéke.",
        "A Bakony-hegységben található Csesznek vára és a híres Cuha-völgyi vasútvonal."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zala",
    type: "region",
    parent: "HU-ZA",
    coords: [16.8439, 46.8417],
    name: {"de": "Zala", "hu": "Zala", "ro": "Zala", "en": "Zala"},
    image: "/geo-images/hungary/zala.webp",
    description: {
      "de": "Das Komitat Zala liegt im Südwesten Ungarns an der Grenze zu �?sterreich, Slowenien und Kroatien und ist eine Region von au�?ergewöhnlicher natürlicher Vielfalt. Die Landschaft ist geprägt von den sanften Hügeln des Zalaer Hügellandes, dichten Wäldern und dem westlichen Ende des Plattensees. Das administrative Zentrum ist Zalaegerszeg, eine Stadt mit einer entspannten Atmosphäre und bedeutenden kulturellen Einrichtungen wie dem Göcsej-Dorfmuseum. Zala ist weltberühmt für den Thermalsee von Hévíz, den grö�?ten biologisch aktiven natürlichen Thermalsee der Welt, sowie für den beliebten Ferienort Keszthely mit dem prächtigen Schloss Festetics. Die Region bietet eine perfekte Mischung aus thermaler Heilkraft, historischer Pracht und unberührter Natur, was sie zu einem erstklassigen Ziel für Wellness und Kultur macht.",
      "hu": "Zala vármegye Magyarország délnyugati részén, az osztrák, szlovén és horvát határ mentén fekszik, és az ország egyik legváltozatosabb természeti adottságú régiója. A tájat a Zalai-dombság lankái, sűrű erd�?k és a Balaton nyugati medencéje határozzák meg. Székhelye Zalaegerszeg, a hangulatos város, amely olyan jelent�?s kulturális intézményeknek ad otthont, mint a Göcseji Falumúzeum. Zala vármegye világszerte híres a Hévízi-tóról, amely a világ legnagyobb biológiailag aktív természetes termáltava, valamint Keszthelyr�?l és a lenyűgöz�? Festetics-kastélyról. A vármegye a termálvizes gyógyulás, a történelmi pompa és az érintetlen természet tökéletes ötvözetét kínálja a látogatóknak.",
      "ro": "Jude�?ul Zala este situat în sud-vestul Ungariei, la grani�?a cu Austria, Slovenia �?i Croa�?ia, �?i este o regiune cu o diversitate natural�? excep�?ional�?. Peisajul este marcat de dealurile blânde ale regiunii deluroase Zala, p�?duri dese �?i extremitatea vestic�? a Lacului Balaton. Centrul administrativ este Zalaegerszeg, un ora�? cu o atmosfer�? relaxat�? �?i institu�?ii culturale importante, cum ar fi Muzeul Satului Göcsej. Zala este renumit în întreaga lume pentru lacul termal din Hévíz, cel mai mare lac termal natural activ biologic din lume, precum �?i pentru sta�?iunea popular�? Keszthely, cu magnificul castel Festetics. Jude�?ul ofer�? un amestec unic de putere curativ�? termal�?, splendoare istoric�? �?i natur�? virgin�?, fiind o destina�?ie de top pentru wellness �?i cultur�?.",
      "en": "Zala County is located in southwestern Hungary on the border with Austria, Slovenia, and Croatia, and is a region of exceptional natural diversity. The landscape is characterized by the rolling hills of the Zala Uplands, dense forests, and the western end of Lake Balaton. Its administrative center is Zalaegerszeg, a city with a relaxed atmosphere and significant cultural institutions such as the Göcsej Village Museum. Zala is world-famous for the Hévíz thermal lake, the world's largest biologically active natural thermal lake, as well as for the popular resort town of Keszthely with the magnificent Festetics Palace. The county offers a perfect blend of thermal healing power, historical splendor, and untouched nature, making it an ideal destination for wellness and culture."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Zala vármegye Magyarország délnyugati sarkában fekszik, és lankás dombvidékér�?l, sűrű erd�?ir�?l és gazdag k�?olaj- és földgázkincseir�?l ismert. A vármegye székhelye Zalaegerszeg, amely az ország els�? szabadtéri néprajzi múzeumával és modern városképével büszkélkedhet. Zala vármegyéhez tartozik a Balaton nyugati csücske Keszthellyel és a monumentális Festetics-kastéllyal, valamint a világhírű Hévízi-tó, amely Európa legnagyobb természetes termáltava. A régió híres népi hagyományairól, különösen a Göcsej és a Hetés tájegységek jellegzetes építészetér�?l és gasztronómiájáról, mint a dödölle vagy a tökmagolaj. A táj nyugalma és a gyógyfürd�?k sokasága (Zalakaros, Lenti) Somogy mellett a pihenni vágyók egyik legf�?bb célpontja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Zalaegerszeg, bekannt für sein Freilichtmuseum für Volksarchitektur.",
        "Hévíz beherbergt den grö�?ten natürlichen Thermalsee der Welt.",
        "Das Schloss Festetics in Keszthely ist eines der bedeutendsten Barockschlösser Ungarns.",
        "Die Region ist bekannt für ihre �?l- und Erdgasvorkommen, die die ungarische Industrie prägten.",
        "Zalakaros ist einer der beliebtesten Kurorte Ungarns mit einem modernen Erlebnisbad.",
        "Der Nationalpark Balaton-Oberland umfasst auch den Kleinen Balaton (Kis-Balaton), ein Vogelparadies.",
        "Zala hat eine reiche Tradition in der Holzverarbeitung und Handwerkskunst.",
        "Die Region ist berühmt für ihre Gastronomie, insbesondere für Gerichte mit Kürbiskernöl.",
        "Keszthely ist die älteste Stadt am Ufer des Plattensees.",
        "Das Zalaer Hügelland bietet hervorragende Bedingungen für den Weinbau und Wanderungen."
      ],
      "hu": [
        "A vármegye székhelye Zalaegerszeg, ahol az ország els�? szabadtéri néprajzi múzeuma található.",
        "Hévízen található a világ legnagyobb biológiailag aktív természetes termáltava.",
        "A keszthelyi Festetics-kastély az ország egyik legjelent�?sebb és legszebb barokk kastélya.",
        "A vármegye területén indult el a magyarországi k�?olaj- és földgázkitermelés.",
        "Zalakaros az ország egyik legnépszerűbb gyógy- és élményfürd�? városa.",
        "A Kis-Balaton egyedülálló vizes él�?hely és madárrezervátum, a nemzeti park része.",
        "Zala vármegye híres a göcseji és hetési népi hagyományairól és építészetér�?l.",
        "A régió gasztronómiájának különlegessége a tökmagolaj és a dödölle.",
        "Keszthely a Balaton-part legrégebbi városa és fontos kulturális központja.",
        "A Zalai-dombság kiváló túraútvonalakat és bortermel�? vidékeket rejt."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului este Zalaegerszeg, cunoscut pentru muzeul s�?u în aer liber de arhitectur�? popular�?.",
        "Hévíz g�?zduie�?te cel mai mare lac termal natural din lume.",
        "Castelul Festetics din Keszthely este unul dintre cele mai importante castele baroce din Ungaria.",
        "Regiunea este cunoscut�? pentru z�?c�?mintele sale de petrol �?i gaze naturale, care au modelat industria maghiar�?.",
        "Zalakaros este una dintre cele mai populare sta�?iuni balneare din Ungaria, cu un parc acvatic modern.",
        "Parcul Na�?ional Balaton-felvidék include �?i Balatonul Mic (Kis-Balaton), un paradis al p�?s�?rilor.",
        "Zala are o tradi�?ie bogat�? în prelucrarea lemnului �?i me�?te�?uguri.",
        "Regiunea este faimoas�? pentru gastronomia sa, în special pentru preparatele cu ulei de semin�?e de dovleac.",
        "Keszthely este cel mai vechi ora�? de pe malul Lacului Balaton.",
        "Dealurile Zala ofer�? condi�?ii excelente pentru viticultur�? �?i drume�?ii."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt található a Hévízi-tó, a világ legnagyobb biológiailag aktív természetes termáltava.",
        "A keszthelyi Festetics-kastély az ország egyik legjelent�?sebb barokk palotaegyüttese.",
        "Zala vármegye a magyar k�?olaj- és földgázkitermelés történelmi bölcs�?je.",
        "A Göcseji Falumúzeum volt az ország els�? szabadtéri néprajzi gyűjteménye.",
        "Zalakaros az ország egyik legnépszerűbb gyógy- és élményfürd�? városa."
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
    parent: "HU-BU",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    image: "/geo-images/hungary/budapest-city.webp",
    description: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine der beeindruckendsten Metropolen Europas und wird oft als 'Perle der Donau' bezeichnet. Die Stadt entstand 1873 durch die Zusammenlegung von Buda, Pest und �?buda und bietet eine einzigartige Mischung aus Geschichte, Kultur und moderner Lebensart. Besucher können das majestätische Parlamentsgebäude, die historische Fischerbastei und zahlreiche Thermalbäder genie�?en. Die Donauufer, das Burgviertel und die Andrássy-Stra�?e gehören zum UNESCO-Welterbe.",
      "hu": "Budapest, Magyarország f�?városa, Európa egyik leglenyűgöz�?bb metropolisza, amelyet gyakran a 'Duna gyöngyeként' emlegetnek. A város 1873-ban jött létre Buda, Pest és �?buda egyesítésével, és a történelem, a kultúra és a modern életstílus egyedülálló keverékét kínálja. A látogatók megcsodálhatják a fenséges Országházat, a történelmi Halászbástyát és számos világhírű termálfürd�?t. A Duna-part, a Budai Várnegyed és az Andrássy út az UNESCO világörökség részét képezi.",
      "ro": "Budapesta, capitala Ungariei, este una dintre cele mai impresionante metropole din Europa, fiind adesea numit�? 'Perla Dun�?rii'. Ora�?ul a fost format în 1873 prin unirea localit�?�?ilor Buda, Pesta �?i �?buda, oferind un amestec unic de istorie, cultur�? �?i stil de via�?�? modern. Vizitatorii se pot bucura de cl�?direa maiestuoas�? a Parlamentului, de istoricul Bastion al Pescarilor �?i de numeroase b�?i termale. Malurile Dun�?rii, cartierul Castelului �?i Bulevardul Andrássy fac parte din patrimoniul mondial UNESCO.",
      "en": "Budapest, the capital of Hungary, is one of Europe's most stunning metropolises, often referred to as the 'Pearl of the Danube.' The city was formed in 1873 by the unification of Buda, Pest, and �?buda, offering a unique blend of history, culture, and modern lifestyle. Visitors can enjoy the majestic Parliament Building, the historic Fisherman's Bastion, and numerous world-famous thermal baths. The banks of the Danube, the Buda Castle District, and Andrássy Avenue are all part of the UNESCO World Heritage list."
    },
    descriptionAdvanced: {
      "de": "Budapest, die prachtvolle Hauptstadt Ungarns, wird durch die majestätische Donau in das hügelige Buda und das lebendige Pest geteilt. Die Stadt entstand 1873 durch die Vereinigung von Buda, Pest und �?buda und blickt auf eine jahrtausendealte Geschichte zurück, die von den Römern bis zur Zeit der österreichisch-ungarischen Monarchie reicht. Besucher sind fasziniert von der architektonischen Vielfalt, die von der gotischen Matthiaskirche über das neugotische Parlamentsgebäude bis hin zu prachtvollen Jugendstilbauten reicht. Budapest ist zudem die einzige Hauptstadt der Welt, die über eine Vielzahl von Thermalquellen verfügt, was sie zu einem Zentrum der europäischen Bäderkultur macht. Die Donauufer, das Burgviertel und die Andrássy-Stra�?e gehören zum UNESCO-Welterbe und zeugen von der glanzvollen Vergangenheit der Metropole.",
      "hu": "Budapest, Magyarország f�?városa és legnépesebb városa, a Duna két partján fekv�? metropolisz, amely történelmi, kulturális és gazdasági szempontból is az ország szíve. A város 1873-ban jött létre Buda, Pest és �?buda egyesítésével, és azóta Közép-Európa egyik legjelent�?sebb központjává n�?tte ki magát. Budapest világörökségi helyszíneivel, mint a Budai Várnegyed, a Duna-parti panoráma és az Andrássy út, a világ minden tájáról vonzza a turistákat. Az 'él�? történelem' városa, ahol a római kori romok, a török fürd�?k, a gótikus és barokk templomok, valamint a szecessziós paloták és a modern építészet különleges elegye alkot egyedülálló városképet. Budapest emellett a világ egyetlen fürd�?f�?városa, ahol több tucat termálforrás táplálja a történelmi gyógyfürd�?ket.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Hauptstadt und grö�?te Stadt Ungarns mit über 1,7 Millionen Einwohnern.",
        "Berühmt für das Parlamentsgebäude, das drittgrö�?te der Welt.",
        "Beherbergt die älteste U-Bahn-Linie Kontinentaleuropas (M1).",
        "Bekannt als 'Stadt der Bäder' mit über 100 Thermalquellen.",
        "Die Kettenbrücke war die erste dauerhafte Verbindung über die Donau.",
        "Das Burgviertel bietet einen Panoramablick auf die gesamte Stadt.",
        "Budapest ist ein wichtiges Zentrum für Bildung, Wirtschaft und Kunst.",
        "Die Gro�?e Synagoge in der Dohány-Stra�?e ist die grö�?te in Europa."
      ],
      "hu": [
        "Magyarország f�?városa és legnagyobb városa, több mint 1,7 millió lakossal.",
        "Híres az Országházról, amely a világ harmadik legnagyobb parlamenti épülete.",
        "Itt található a kontinens legid�?sebb földalatti vasútja (M1).",
        "A 'fürd�?k városa' néven ismert, több mint 100 termálforrással.",
        "A Lánchíd volt az els�? állandó híd a Duna felett.",
        "A Várnegyedb�?l lenyűgöz�? panoráma nyílik az egész városra.",
        "Fontos oktatási, gazdasági és művészeti központ Közép-Európában.",
        "A Dohány utcai zsinagóga Európa legnagyobb zsidó temploma."
      ],
      "ro": [
        "Capitala �?i cel mai mare ora�? al Ungariei, cu peste 1,7 milioane de locuitori.",
        "Faimoas�? pentru cl�?direa Parlamentului, a treia ca m�?rime din lume.",
        "G�?zduie�?te cea mai veche linie de metrou din Europa continental�? (M1).",
        "Cunoscut ca 'ora�?ul b�?ilor', având peste 100 de izvoare termale.",
        "Podul cu Lan�?uri a fost prima leg�?tur�? permanent�? peste Dun�?re.",
        "Cartierul Castelului ofer�? o vedere panoramic�? asupra întregului ora�?.",
        "Un centru important pentru educa�?ie, economie �?i art�? în Europa Central�?.",
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
  
    factsAdvanced: {
      "de": [],
      "hu": ["Budapest Magyarország politikai, gazdasági, közlekedési és kulturális központja.",
        "A Duna-part, a Budai Várnegyed és az Andrássy út az UNESCO Világörökség része.",
        "A világ egyetlen f�?városa, amely alatt barlangok és több mint 120 termálforrás található.",
        "Itt működik a kontinens els�? földalatti vasútja (M1), amelyet 1896-ban adtak át.",
        "A Dohány utcai zsinagóga Európa legnagyobb, a világ második legnagyobb zsinagógája."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budai-var",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0396, 47.4962],
    name: {"de": "Budaer Burg", "hu": "Budai Vár", "ro": "Castelul Buda", "en": "Buda Castle"},
    description: {
      "de": "Die Budaer Burg ist ein historisches Schloss und ein monumentaler Palastkomplex der ungarischen Könige in Budapest, der majestätisch über der Donau thront. Das gesamte Burgviertel gehört zum UNESCO-Welterbe und ist eines der bedeutendsten kulturellen und historischen Zentren Ungarns. Die Anlage umfasst prächtige Gebäude wie den Königspalast, die Matthiaskirche und die Fischerbastei, die alle Zeugen der wechselvollen Geschichte des Landes sind. Besucher können durch die mittelalterlichen Gassen schlendern, beeindruckende Museen besuchen und einen der schönsten Panoramablicke auf die Stadt Pest genie�?en. Die Budaer Burg verbindet gotische, Renaissance- und Barockarchitektur zu einem einzigartigen Ensemble, das jährlich Millionen von Touristen anzieht.",
      "hu": "A Budai Vár a magyar királyok történelmi kastély- és palotaegyüttese Budapesten, amely fenségesen magasodik a Duna fölé a Várhegyen. Az egész Várnegyed az UNESCO világörökség része, és Magyarország egyik legfontosabb kulturális és történelmi központja. Az együttes olyan lenyűgöz�? épületeket foglal magában, mint a Királyi Palota, a Mátyás-templom és a Halászbástya, amelyek mind az ország viharos történelmének tanúi. A látogatók középkori utcákon sétálhatnak, rangos múzeumokat fedezhetnek fel, és élvezhetik az egyik legszebb panorámát a város pesti oldalára. A Budai Vár a gótikus, reneszánsz és barokk építészet különleges elegye, amely évente több millió turistát vonz a világ minden tájáról.",
      "ro": "Castelul Buda este un castel istoric �?i un complex monumental de palate al regilor maghiari din Budapesta, care troneaz�? maiestuos deasupra Dun�?rii. �?ntregul cartier al Castelului face parte din patrimoniul mondial UNESCO �?i este unul dintre cele mai importante centre culturale �?i istorice ale Ungariei. Complexul cuprinde cl�?diri splendide precum Palatul Regal, Biserica Mátyás �?i Bastionul Pescarilor, toate fiind martore ale istoriei zbuciumate a �?�?rii. Vizitatorii se pot plimba pe str�?zile medievale, pot vizita muzee impresionante �?i se pot bucura de una dintre cele mai frumoase vederi panoramice asupra ora�?ului Pesta. Castelul Buda îmbin�? arhitectura gotic�?, renascentist�? �?i baroc�? într-un ansamblu unic, care atrage anual milioane de turi�?ti.",
      "en": "Buda Castle is a historical castle and a monumental palace complex of the Hungarian kings in Budapest, majestically overlooking the Danube. The entire Castle District is a UNESCO World Heritage site and is one of Hungary's most significant cultural and historical centers. The complex includes magnificent buildings such as the Royal Palace, Matthias Church, and the Fisherman's Bastion, all of which bear witness to the country's turbulent history. Visitors can stroll through medieval alleys, explore impressive museums, and enjoy one of the most beautiful panoramic views of the city's Pest side. Buda Castle combines Gothic, Renaissance, and Baroque architecture into a unique ensemble that attracts millions of tourists annually."
    },
    
    descriptionAdvanced: {
      "de": "Die Budaer Burg ist das historische Herz von Budapest und ein monumentales Zeugnis ungarischer Macht und Kultur über acht Jahrhunderte. Thronend auf dem Burgberg über der Donau, vereint das Burgviertel gotische, Renaissance- und Barockarchitektur zu einem einzigartigen UNESCO-Welterbe. Die Anlage umfasst den prachtvollen Königspalast, die geschichtsträchtige Matthiaskirche und die märchenhafte Fischerbastei. �?ber Jahrhunderte war die Burg die Residenz ungarischer Könige und ein Bollwerk gegen Invasoren, was sich in den massiven Verteidigungsanlagen widerspiegelt. Heute beherbergt sie bedeutende Museen wie die Nationalgalerie und die Nationalbibliothek. Ein Spaziergang durch die kopfsteingepflasterten Gassen der Burg bietet nicht nur historische Einblicke, sondern auch den wohl spektakulärsten Ausblick auf die Pester Seite der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
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
        "Der Burggarten-Basar am Fu�?e des Hügels ist ein Meisterwerk der Neorenaissance."
      ],
      "hu": [
        "A várat el�?ször a 13. században építették a tatárjárás után, IV. Béla idején.",
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
        "Castelul a fost construit pentru prima dat�? în secolul al XIII-lea, dup�? invazia mongol�?.",
        "Face parte din patrimoniul mondial UNESCO din anul 1987.",
        "G�?zduie�?te Galeria Na�?ional�? Maghiar�? �?i Muzeul de Istorie din Budapesta.",
        "Biserica Mátyás a fost locul a numeroase încoron�?ri regale.",
        "Bastionul Pescarilor are �?apte turnuri care simbolizeaz�? cele �?apte triburi maghiare.",
        "Sub castel se afl�? un sistem extins de labirinturi �?i pe�?teri.",
        "Palatul a fost aproape complet reconstruit dup�? cel de-al Doilea R�?zboi Mondial.",
        "Biblioteca Na�?ional�? Széchényi se afl�?, de asemenea, în complexul castelului.",
        "Castelul este conectat de malul Dun�?rii prin funicularul istoric (Sikló).",
        "Bazarul Gr�?dinii Castelului de la poalele dealului este o capodoper�? neorenascentist�?."
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
    parent: "HU-BU",
    coords: [19.0456, 47.5071],
    name: {"de": "Parlamentsgebäude", "hu": "Országház", "ro": "Parlamentul", "en": "Parliament Building"},
    image: "/geo-images/hungary/orszaghaz.webp",
    description: {
      "de": "Das ungarische Parlamentsgebäude, auch Országház genannt, ist eines der bekanntesten Wahrzeichen von Budapest und ein Meisterwerk der Neogotik. Es liegt majestätisch am Pester Ufer der Donau und ist das drittgrö�?te Parlamentsgebäude der Welt. Entworfen von Imre Steindl und eingeweiht im Jahr 1902, beeindruckt es durch seine symmetrische Fassade, seine monumentale Kuppel und seine reiche Innenausstattung mit Gold und Fresken. Das Gebäude beherbergt die ungarischen Kronjuwelen, einschlie�?lich der Heiligen Stephanskrone, und ist der Sitz der ungarischen Nationalversammlung. Als Teil des UNESCO-Welterbes zieht es jährlich unzählige Besucher an, die seine architektonische Pracht und historische Bedeutung bewundern.",
      "hu": "A magyar Országház Budapest egyik legismertebb jelképe és a neogótikus építészet remekműve, amely fenségesen terül el a Duna pesti partján. Ez a világ harmadik legnagyobb parlamenti épülete, amelyet Steindl Imre tervezett, és 1902-ben adtak át teljes egészében. Az épület lenyűgözi a látogatókat szimmetrikus homlokzatával, monumentális kupolájával, valamint arannyal és freskókkal gazdagon díszített bels�? tereivel. Itt �?rzik a magyar koronázási jelvényeket, köztük a Szent Koronát is, és ez az épület ad otthont a magyar Országgyűlésnek. Az UNESCO világörökség részeként az Országház évente számtalan látogatót vonz, akik megcsodálhatják építészeti pompáját és történelmi jelent�?ségét.",
      "ro": "Cl�?direa Parlamentului maghiar, cunoscut�? �?i sub numele de Országház, este unul dintre cele mai faimoase simboluri ale Budapestei �?i o capodoper�? a arhitecturii neogotice. Situat�? maiestuos pe malul Pestei al Dun�?rii, este a treia cea mai mare cl�?dire parlamentar�? din lume. Proiectat�? de Imre Steindl �?i inaugurat�? în 1902, impresioneaz�? prin fa�?ada sa simetric�?, cupola monumental�? �?i interiorul bogat decorat cu aur �?i fresce. Cl�?direa ad�?poste�?te bijuteriile coroanei maghiare, inclusiv Sfânta Coroan�? a lui �?tefan, �?i este sediul Adun�?rii Na�?ionale a Ungariei. Ca parte a patrimoniului mondial UNESCO, atrage anual nenum�?ra�?i vizitatori care îi admir�? splendoarea arhitectural�? �?i importan�?a istoric�?.",
      "en": "The Hungarian Parliament Building, also known as Országház, is one of Budapest's most iconic landmarks and a masterpiece of Neo-Gothic architecture. Majestically situated on the Pest bank of the Danube, it is the third-largest parliament building in the world. Designed by Imre Steindl and fully inaugurated in 1902, it impresses visitors with its symmetrical facade, monumental dome, and rich interior decorated with gold and frescoes. The building houses the Hungarian Crown Jewels, including the Holy Crown of Saint Stephen, and serves as the seat of the National Assembly of Hungary. As part of the UNESCO World Heritage site, it attracts countless visitors annually who admire its architectural splendor and historical significance."
    },
    
    descriptionAdvanced: {
      "de": "Das ungarische Parlamentsgebäude (Országház) ist eines der prächtigsten Regierungsgebäude der Welt und ein Symbol der ungarischen Souveränität. Direkt am Pester Ufer der Donau gelegen, besticht das neugotische Meisterwerk durch seine enorme Grö�?e und die filigranen Verzierungen der Fassade. Entworfen von Imre Steindl und inspiriert vom Londoner Palace of Westminster, wurde es pünktlich zum Millennium im Jahr 1896 fast fertiggestellt. Im Inneren faszinieren die monumentale Treppenhalle, der prachtvolle Kuppelsaal und der Sitzungssaal mit ihrer Golddekoration und den Wandgemälden. Das wertvollste Exponat ist die ungarische Heilige Krone mit den Krönungsinsignien, die im Kuppelsaal streng bewacht werden. Als Teil des UNESCO-Welterbes ist das Parlament ein Muss für jeden Besucher der ungarischen Hauptstadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Gebäude hat 691 Zimmer und eine Gesamtlänge von 268 Metern.",
        "Für die Innendekoration wurden etwa 40 Kilogramm 24-karätiges Gold verwendet.",
        "Die Kuppel erreicht eine Höhe von genau 96 Metern, was an das Jahr der Landnahme (896) erinnert.",
        "Es ist das grö�?te Gebäude Ungarns und das höchste in Budapest.",
        "Die Fassade ist mit 242 Statuen ungarischer und siebenbürgischer Herrscher geschmückt.",
        "Das Gebäude wurde fast ausschlie�?lich aus ungarischen Baumaterialien errichtet.",
        "Die Heilige Stephanskrone wird seit dem Jahr 2000 in der Kuppelhalle bewacht.",
        "Es verfügt über ein einzigartiges Fernwärme- und Belüftungssystem aus der Bauzeit.",
        "Die Bauarbeiten dauerten 17 Jahre und beschäftigten zeitweise über 1000 Arbeiter.",
        "Das Parlament ist nachts spektakulär beleuchtet und spiegelt sich in der Donau."
      ],
      "hu": [
        "Az épületben 691 helyiség található, hossza pedig 268 méter.",
        "A bels�? díszítéshez összesen mintegy 40 kilogramm 24 karátos aranyat használtak fel.",
        "A kupola magassága pontosan 96 méter, ami a honfoglalás évére (896) utal.",
        "Ez Magyarország legnagyobb épülete és Budapest egyik legmagasabb pontja.",
        "A homlokzatot 242 szobor díszíti, amelyek magyar és erdélyi uralkodókat ábrázolnak.",
        "Az épület szinte kizárólag hazai alapanyagokból készült, kivéve a márványmonolitokat.",
        "A Szent Koronát és a koronázási jelvényeket 2000 óta a kupolacsarnokban �?rzik.",
        "Az épület korát megel�?z�?, egyedülálló távfűtési és szell�?z�?rendszerrel rendelkezik.",
        "Az építkezés 17 évig tartott, és alkalmanként több mint 1000 munkás dolgozott rajta.",
        "Az Országház éjszakai kivilágítása a világ egyik legszebb városi látképe."
      ],
      "ro": [
        "Cl�?direa are 691 de camere �?i o lungime total�? de 268 de metri.",
        "Pentru decorarea interioar�? s-au folosit aproximativ 40 de kilograme de aur de 24 de carate.",
        "Cupola atinge o în�?l�?ime de exact 96 de metri, amintind de anul desc�?lec�?rii (896).",
        "Este cea mai mare cl�?dire din Ungaria �?i cea mai înalt�? din Budapesta.",
        "Fa�?ada este decorat�? cu 242 de statui ale conduc�?torilor maghiari �?i transilv�?neni.",
        "Cl�?direa a fost construit�? aproape exclusiv din materiale de construc�?ie maghiare.",
        "Sfânta Coroan�? a lui �?tefan este p�?zit�? în sala cupolei începând cu anul 2000.",
        "Dispune de un sistem unic de înc�?lzire central�? �?i ventila�?ie din perioada construc�?iei.",
        "Lucr�?rile de construc�?ie au durat 17 ani �?i au implicat peste 1000 de muncitori.",
        "Parlamentul este iluminat spectaculos noaptea, reflectându-se în apele Dun�?rii."
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
  
    factsAdvanced: {
      "de": ["Das ungarische Parlament ist mit 268 Metern Länge das drittgrö�?te Parlamentsgebäude weltweit.", "Für die Vergoldung der Innenräume wurden insgesamt 40 Kilogramm 24-karätiges Gold verwendet.", "Das Gebäude besitzt 691 Zimmer und insgesamt fast 20 Kilometer an Treppenhäusern.", "Die Kuppel des Parlaments erreicht eine symbolträchtige Höhe von genau 96 Metern."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hosok-tere",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0782, 47.5149],
    name: {"de": "Heldenplatz", "hu": "H�?sök tere", "ro": "Pia�?a Eroilor", "en": "Heroes' Square"},
    description: {
      "de": "Der Heldenplatz ist einer der bedeutendsten und meistbesuchten Plätze in Budapest und bildet den monumentalen Abschluss der Andrássy-Stra�?e. Das Herzstück des Platzes ist das Millenniumsdenkmal, das 1896 anlässlich der tausendjährigen Landnahme der Ungarn errichtet wurde. Es zeigt die Statuen der sieben Stammesfürsten sowie bedeutende Persönlichkeiten der ungarischen Geschichte in einer halbkreisförmigen Kolonnade. Flankiert wird der Platz von zwei prächtigen Gebäuden: dem Museum der Bildenden Künste und der Kunsthalle. Als Teil des UNESCO-Welterbes ist der Heldenplatz ein Symbol des nationalen Stolzes und ein zentraler Ort für staatliche Feierlichkeiten und kulturelle Veranstaltungen.",
      "hu": "A H�?sök tere Budapest egyik legjelent�?sebb és leglátogatottabb tere, amely az Andrássy út monumentális lezárásaként szolgál. A tér központi eleme a Millenniumi emlékmű, amelyet 1896-ban, a magyar honfoglalás ezredik évfordulójára kezdtek építeni. Az emlékmű a hét honfoglaló vezér szobrát, valamint a magyar történelem legfontosabb alakjait mutatja be a félköríves kolonnádokban. A teret két impozáns épület szegélyezi: a Szépművészeti Múzeum és a Műcsarnok. Az UNESCO világörökség részeként a H�?sök tere a nemzeti büszkeség jelképe, és számos állami ünnepség, valamint kulturális esemény központi helyszíne.",
      "ro": "Pia�?a Eroilor este una dintre cele mai importante �?i vizitate pie�?e din Budapesta, formând finalul monumental al Bulevardului Andrássy. Piesa central�? a pie�?ei este Monumentul Mileniului, ridicat în 1896 pentru a celebra o mie de ani de la desc�?lecarea maghiarilor. Acesta prezint�? statuile celor �?apte c�?petenii de triburi, precum �?i personalit�?�?i marcante ale istoriei maghiare într-o colonad�? semicircular�?. Pia�?a este flancat�? de dou�? cl�?diri magnifice: Muzeul de Arte Frumoase �?i Galeria de Art�? (Műcsarnok). Ca parte a patrimoniului mondial UNESCO, Pia�?a Eroilor este un simbol al mândriei na�?ionale �?i un loc central pentru festivit�?�?ile de stat �?i evenimentele culturale.",
      "en": "Heroes' Square is one of the most significant and most visited squares in Budapest, forming the monumental conclusion of Andrássy Avenue. The centerpiece of the square is the Millennium Monument, which was commissioned in 1896 to commemorate the thousandth anniversary of the Hungarian conquest. It features the statues of the seven chieftains of the Magyars and prominent figures of Hungarian history within a semicircular colonnade. The square is flanked by two magnificent buildings: the Museum of Fine Arts and the Palace of Art (Műcsarnok). As part of the UNESCO World Heritage site, Heroes' Square is a symbol of national pride and a central location for state celebrations and cultural events."
    },
    
    descriptionAdvanced: {
      "de": "Der Heldenplatz (H�?sök tere) ist der grö�?te und symbolträchtigste Platz von Budapest, gelegen am Ende der prachtvollen Andrássy-Stra�?e. Das Zentrum des Platzes bildet das Millenniumsdenkmal, das zum 1000-jährigen Jubiläum der ungarischen Landnahme errichtet wurde. Eine 36 Meter hohe Säule mit dem Erzengel Gabriel wird von Statuen der sieben ungarischen Stammesfürsten und zwei halbkreisförmigen Kolonnaden mit bedeutenden Königen und Staatsmännern umrahmt. Der Platz ist ein Ort des nationalen Gedenkens und Schauplatz wichtiger historischer Ereignisse sowie gro�?er Kundgebungen. Flankiert wird der Heldenplatz von den monumentalen Gebäuden des Museums der Bildenden Künste und der Kunsthalle. Das gesamte Ensemble gehört zum UNESCO-Welterbe und vermittelt eindrucksvoll den historischen Stolz der ungarischen Nation.",
      "hu": "A H�?sök tere Budapest legimpozánsabb köztere, az Andrássy út monumentális lezárása, amelyet a magyar államiság ezeréves évfordulójára, 1896-ban alakítottak ki. Középpontjában a 36 méter magas Millenniumi emlékmű áll, tetején Gábriel arkangyallal, aki a Szent Koronát és a kett�?s keresztet tartja. A monumentális oszlopcsarnokokban a magyar történelem 14 meghatározó alakjának szobra kapott helyet, az oszlop talpazatánál pedig a hét honfoglaló vezér lovas szobra tekinthet�? meg. A teret a Szépművészeti Múzeum és a Műcsarnok eklektikus épületei keretezik, alkotva egy egységes, világörökségi rangú építészeti együttest. Számtalan történelmi esemény és állami ünnepség helyszíneként a tér a nemzeti identitás egyik leger�?sebb szimbóluma.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Millenniumsdenkmal wurde vom Architekten Albert Schickedanz entworfen.",
        "Die zentrale Säule ist 36 Meter hoch und trägt die Statue des Erzengels Gabriel.",
        "Die sieben Reiterstatuen am Fu�?e der Säule stellen die ungarischen Stammesfürsten dar.",
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
        "A téren található a H�?sök emlékköve, amely az ismeretlen katona el�?tt tiszteleg.",
        "A H�?sök tere a Városliget kapuja, Budapest egyik legkedveltebb pihen�?helye.",
        "A tér alatt található a kisföldalatti (M1) egyik megállója.",
        "Az emlékmű szobrai közül többet is kicseréltek a politikai változások során.",
        "A tér számos történelmi jelent�?ségű esemény és tüntetés helyszíne volt.",
        "A tér építészeti együttese a magyar historizmus egyik legszebb példája."
      ],
      "ro": [
        "Monumentul Mileniului a fost proiectat de arhitectul Albert Schickedanz.",
        "Coloana central�? are o în�?l�?ime de 36 de metri �?i poart�? statuia Arhanghelului Gabriel.",
        "Cele �?apte statui ecvestre de la baza coloanei îi reprezint�? pe c�?peteniile triburilor maghiare.",
        "�?n colonade se afl�? statuile a 14 figuri marcante din istoria Ungariei.",
        "Pia�?a g�?zduie�?te Mormântul Soldatului Necunoscut.",
        "Pia�?a Eroilor este poarta de intrare c�?tre Parcul Ora�?ului (Városliget).",
        "Sub pia�?�? se afl�? o sta�?ie a liniei istorice de metrou M1.",
        "Statuile din colonade au fost înlocuite de mai multe ori de-a lungul istoriei.",
        "Pia�?a a fost locul unor demonstra�?ii politice �?i evenimente istorice majore.",
        "Arhitectura pie�?ei este un exemplu remarcabil al historismului maghiar."
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
  
    factsAdvanced: {
      "de": ["Der Heldenplatz markiert das Ende der UNESCO-geschützten Andrássy-Stra�?e.", "Das Millenniumsdenkmal wurde vom Bildhauer György Zala und dem Architekten Albert Schickedanz entworfen.", "Unter dem Pflaster des Platzes befindet sich die erste U-Bahn-Station des europäischen Kontinents.", "Die Statuen in den Kolonnaden wurden mehrfach ausgetauscht, um den politischen Wandel der Geschichte widerzuspiegeln."],
      "hu": [
        "Az emlékmű építése 1896-ban kezd�?dött és teljes egészében csak 1929-re fejez�?dött be.",
        "A tér közepén található a Magyar H�?sök Emlékköve, amely minden ismeretlen magyar katona el�?tt tiszteleg.",
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
    parent: "HU-BU",
    coords: [19.045, 47.498],
    name: {"de": "Donauufer", "hu": "Dunapart", "ro": "Malul Dun�?rii", "en": "Danube Promenade"},
    image: "/geo-images/hungary/dunapart.webp",
    description: {
      "de": "Das Donauufer in Budapest ist eine der spektakulärsten Stadtlandschaften der Welt und gehört zum UNESCO-Welterbe. Die Promenade erstreckt sich zwischen der Kettenbrücke und der Elisabethbrücke auf der Pester Seite und bietet einen unvergleichlichen Blick auf die Budaer Burg, den Gellértberg und das Parlamentsgebäude. Entlang des Ufers finden sich zahlreiche historische Denkmäler, elegante Hotels und gemütliche Cafés, die zum Verweilen einladen. Besonders berühmt ist das Mahnmal 'Schuhe am Donauufer', das an die Opfer des Holocaust erinnert. Das Donauufer ist nicht nur ein Ort der Geschichte, sondern auch ein lebendiger Treffpunkt für Einheimische und Touristen, die die magische Atmosphäre der Stadt am Fluss genie�?en möchten.",
      "hu": "A budapesti Dunapart a világ egyik leglátványosabb városi látképe, amely az UNESCO világörökség részét képezi. A pesti oldalon a Lánchíd és az Erzsébet híd között húzódó sétány páratlan kilátást nyújt a Budai Várra, a Gellért-hegyre és az Országházra. A part mentén számos történelmi emlékmű, elegáns szálloda és hangulatos kávézó található, amelyek hívogatják a látogatókat. Különösen megrázó a 'Cip�?k a Duna-parton' emlékmű, amely a holokauszt áldozatainak állít emléket. A Dunapart nemcsak a történelem helyszíne, hanem a helyiek és a turisták kedvelt találkozóhelye is, ahol mindenki átélheti a folyóparti metropolisz varázslatos hangulatát.",
      "ro": "Malul Dun�?rii din Budapesta este unul dintre cele mai spectaculoase peisaje urbane din lume �?i face parte din patrimoniul mondial UNESCO. Promenada se întinde între Podul cu Lan�?uri �?i Podul Elisabeta pe partea Pestei, oferind o vedere de neegalat asupra Castelului Buda, dealului Gellért �?i cl�?dirii Parlamentului. De-a lungul malului se g�?sesc numeroase monumente istorice, hoteluri elegante �?i cafenele primitoare care invit�? la relaxare. Deosebit de faimos este memorialul 'Pantofi pe malul Dun�?rii', care onoreaz�? victimele Holocaustului. Malul Dun�?rii nu este doar un loc al istoriei, ci �?i un punct de întâlnire vibrant pentru localnici �?i turi�?ti, care doresc s�? se bucure de atmosfera magic�? a ora�?ului de pe râu.",
      "en": "The Danube bank in Budapest is one of the most spectacular urban landscapes in the world and is a UNESCO World Heritage site. The promenade stretches between the Chain Bridge and the Elizabeth Bridge on the Pest side, offering unparalleled views of Buda Castle, Gellért Hill, and the Parliament building. Along the shore, numerous historical monuments, elegant hotels, and cozy cafes invite visitors to linger. Particularly moving is the 'Shoes on the Danube Bank' memorial, which commemorates the victims of the Holocaust. The Danube bank is not only a place of history but also a vibrant meeting point for locals and tourists alike, who wish to experience the magical atmosphere of the city by the river."
    },
    
    descriptionAdvanced: {
      "de": "Das Donauufer in Budapest gehört zu den schönsten Stadtlandschaften der Welt und wurde zurecht zum UNESCO-Weltkulturerbe erklärt. Entlang des Flusses reihen sich architektonische Meisterwerke wie das Parlament, die Ungarische Akademie der Wissenschaften und die prachtvollen Hotels am Pester Ufer aneinander. Auf der Budaer Seite ragen der Burgberg und der Gellértberg majestätisch empor und spiegeln sich im Wasser der Donau. Die Uferzonen sind durch die berühmten Brücken wie die Kettenbrücke oder die Freiheitsbrücke miteinander verbunden, die nachts prachtvoll illuminiert sind. Ein Spaziergang entlang des Donauufers vermittelt die ganze Eleganz und den Glanz der ungarischen Metropole. Es ist der lebendige Puls der Stadt und ein Ort, an dem Geschichte und Moderne auf spektakuläre Weise verschmelzen.",
      "hu": "A budapesti Dunapart a világ egyik legszebb folyóparti panorámája, amely 1987 óta az UNESCO Világörökség részét képezi. A védett szakasz a Margit hídtól a Szabadság hídig terjed, magában foglalva az Országház neogótikus tömbjét, a Tudományos Akadémiát és a pesti szállodasort. A part mentén sétálva szemünk elé tárul a Budai Vár és a Gellért-hegy fenséges látványa, miközben a folyón ringatózó hajók élettel töltik meg a vizet. A pesti alsó rakparton található a megrázó 'Cip�?k a Duna-parton' emlékmű, amely a holokauszt áldozatainak állít emléket. Esténként a kivilágított épületek és hidak tükröz�?dése a vízen különleges, romantikus atmoszférát teremt a város szívében.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Budapester Donauufer gehört seit 1987 zum UNESCO-Welterbe.",
        "Das Denkmal 'Schuhe am Donauufer' besteht aus 60 Paar Schuhen aus Eisen.",
        "Die Promenade bietet den besten Blick auf die nächtliche Beleuchtung der Stadt.",
        "Zahlreiche Luxushotels wie das Gresham Palace befinden sich direkt am Ufer.",
        "Die Donau ist an dieser Stelle etwa 350 Meter breit.",
        "Die Ufermauern wurden im 19. Jahrhundert zum Schutz vor Hochwasser errichtet.",
        "Entlang des Ufers verkehrt die Stra�?enbahnlinie 2, eine der schönsten Linien der Welt.",
        "Die Promenade ist ein beliebter Ort für Stra�?enkünstler und Musiker.",
        "Mehrere Schiffsanlegestellen bieten Rundfahrten auf der Donau an.",
        "Das Ufer ist Schauplatz des gro�?en Feuerwerks zum ungarischen Nationalfeiertag am 20. August."
      ],
      "hu": [
        "A budapesti Duna-part 1987 óta az UNESCO világörökség része.",
        "A 'Cip�?k a Duna-parton' emlékmű 60 pár vasból öntött cip�?b�?l áll.",
        "A sétányról nyílik a legjobb kilátás a város éjszakai díszkivilágítására.",
        "Számos luxusszálloda, köztük a Gresham-palota is közvetlenül a parton található.",
        "A Duna szélessége Budapest belvárosában körülbelül 350 méter.",
        "A rakpartokat a 19. században építették ki az árvízvédelem és a hajózás érdekében.",
        "A part mentén halad a 2-es villamos, amelyet a világ egyik legszebb villamosvonalának választottak.",
        "A sétány a helyiek és a turisták egyik legkedveltebb korzózó helye.",
        "Számos hajóállomás kínál városnéz�? túrákat a Dunán.",
        "A Duna-part az augusztus 20-i nemzeti ünnepi tűzijáték központi helyszíne."
      ],
      "ro": [
        "Malul Dun�?rii din Budapesta face parte din patrimoniul mondial UNESCO din 1987.",
        "Memorialul 'Pantofi pe malul Dun�?rii' const�? în 60 de perechi de pantofi din fier.",
        "Promenada ofer�? cea mai bun�? vedere asupra iluminatului nocturn al ora�?ului.",
        "Numeroase hoteluri de lux, precum Palatul Gresham, sunt situate direct pe mal.",
        "Dun�?rea are o l�?�?ime de aproximativ 350 de metri în aceast�? zon�?.",
        "Zidurile de sprijin ale malului au fost construite în secolul al XIX-lea pentru protec�?ia împotriva inunda�?iilor.",
        "De-a lungul malului circul�? tramvaiul 2, considerat una dintre cele mai frumoase linii din lume.",
        "Promenada este un loc popular pentru arti�?tii stradali �?i muzicieni.",
        "Mai multe debarcadere ofer�? croaziere turistice pe Dun�?re.",
        "Malul este locul central pentru focurile de artificii de Ziua Na�?ional�? a Ungariei, pe 20 august."
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
  
    factsAdvanced: {
      "de": ["Das Budapester Donauufer ist seit 1987 offizielles UNESCO-Weltkulturerbe.", "Die Uferpromenade auf der Pester Seite ist als 'Donau-Korso' bekannt und ein beliebter Treffpunkt.", "Am Ufer befinden sich 60 metallene Schuhe, ein bewegendes Denkmal für die Opfer des Holocaust.", "Die Donauufer in Budapest bieten eine der weltweit schönsten Nachtansichten einer Stadt."],
      "hu": [
        "A Duna budapesti szakasza 1987-ben került fel az UNESCO világörökségi listájára.",
        "A 'Cip�?k a Duna-parton' holokauszt-emlékmű 60 pár vasból öntött, korhű cip�?t ábrázol.",
        "A pesti Duna-korzón közleked�? 2-es villamos vonalát a National Geographic a világ egyik legszebbikének választotta.",
        "A rakpartok kiépítése a 19. század második felében kezd�?dött a rendszeres árvizek elleni védekezésül."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "margitsziget",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0475, 47.5266],
    name: {"de": "Margareteninsel", "hu": "Margitsziget", "ro": "Insula Margareta", "en": "Margaret Island"},
    description: {
      "de": "Die Margareteninsel ist eine grüne Oase mitten in der Donau in Budapest und dient als das wichtigste Naherholungsgebiet der Stadt. Die fast drei Kilometer lange Insel ist weitgehend autofrei und bietet eine entspannte Atmosphäre mit weitläufigen Parks, jahrhundertealten Bäumen und mittelalterlichen Ruinen. Besucher finden hier zahlreiche Attraktionen wie den singenden Springbrunnen, den japanischen Garten und das beliebte Palatinus-Strandbad. Die Insel ist nach der Heiligen Margarete benannt, einer ungarischen Königstochter, die im 13. Jahrhundert in einem Dominikanerkloster auf der Insel lebte. Ob zum Joggen, Spazierengehen oder für kulturelle Veranstaltungen im Freilichttheater �?? die Margareteninsel ist ein unverzichtbarer Teil des Budapester Lebensgefühls.",
      "hu": "A Margitsziget egy zöld oázis a Duna közepén Budapest szívében, amely a város legfontosabb pihen�?övezeteként szolgál. A közel három kilométer hosszú sziget nagy része autómentes, tágas parkokkal, évszázados fákkal és középkori romokkal várja a kikapcsolódni vágyókat. A látogatók számos látnivalót találhatnak itt, mint például a zenél�? szök�?kutat, a japánkertet és a népszerű Palatinus strandfürd�?t. A sziget Szent Margitról, IV. Béla király lányáról kapta a nevét, aki a 13. században az itt található dominikánus kolostorban élt. Legyen szó kocogásról, sétáról vagy kulturális eseményekr�?l a Szabadtéri Színpadon, a Margitsziget a budapesti életérzés elengedhetetlen része.",
      "ro": "Insula Margareta este o oaz�? verde în mijlocul Dun�?rii, în inima Budapestei, servind drept cea mai important�? zon�? de recreere a ora�?ului. Insula, lung�? de aproape trei kilometri, este în mare parte f�?r�? ma�?ini �?i ofer�? o atmosfer�? relaxat�?, cu parcuri vaste, copaci seculari �?i ruine medievale. Vizitatorii g�?sesc aici numeroase atrac�?ii, cum ar fi fântâna muzical�?, gr�?dina japonez�? �?i popularul �?trand Palatinus. Insula poart�? numele Sfintei Margareta, fiica regelui Béla al IV-lea, care a tr�?it în m�?n�?stirea dominican�? de pe insul�? în secolul al XIII-lea. Fie c�? este vorba de jogging, plimb�?ri sau evenimente culturale la Teatrul în Aer Liber, Insula Margareta este o parte indispensabil�? a stilului de via�?�? din Budapesta.",
      "en": "Margaret Island is a green oasis in the middle of the Danube in the heart of Budapest, serving as the city's most important recreational area. The nearly three-kilometer-long island is largely car-free and offers a relaxed atmosphere with extensive parks, centuries-old trees, and medieval ruins. Visitors can find numerous attractions here, such as the musical fountain, the Japanese garden, and the popular Palatinus strand bath. The island is named after Saint Margaret, the daughter of King Béla IV, who lived in a Dominican convent on the island in the 13th century. Whether for jogging, strolling, or attending cultural events at the Open-Air Theater, Margaret Island is an essential part of the Budapest experience."
    },
    
    descriptionAdvanced: {
      "de": "Die Margareteninsel (Margitsziget) ist die grüne Lunge von Budapest und ein wahres Erholungsparadies inmitten der Donau. Benannt nach der Heiligen Margarete, der Tochter von König Béla IV., beherbergt die Insel die Ruinen eines mittelalterlichen Dominikanerklosters. Die Insel ist heute fast vollständig autofrei und bietet weite Parkanlagen, botanische Gärten und jahrhundertealte Bäume. Zu den Hauptattraktionen gehören der singende Springbrunnen mit seinen Lichtspielen, der historische Wasserturm und das traditionsreiche Palatinus-Strandbad. Jogger nutzen den berühmten Laufpfad, der die gesamte Insel umrundet, während Familien die Ruhe und die vielen Spielplätze genie�?en. Die Margareteninsel ist ein Ort der Stille und der aktiven Erholung, der die Hektik der Gro�?stadt vergessen lässt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die Insel ist 2,8 Kilometer lang und an der breitesten Stelle 500 Meter breit.",
        "Der singende Springbrunnen ist einer der grö�?ten seiner Art in Europa.",
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
        "A zenél�? szök�?kút Európa egyik legnagyobb ilyen jellegű építménye.",
        "A dominikánus kolostor romjai a 13. századból származnak.",
        "A szigeten álló Víztorony az UNESCO világörökség része.",
        "A szigetet a Margit híd és az Árpád híd köti össze a várossal.",
        "A Palatinus strandfürd�? volt Budapest els�? szabadtéri fürd�?je.",
        "A sziget körül egy 5,3 kilométer hosszú, gumírozott futópálya található.",
        "A japánkertet az 1970-es években alakították ki, különleges növényfajokkal.",
        "A szigeten egy kis vadaspark is található, ahol �?zeket és vízimadarakat láthatunk.",
        "A Margitszigeti Szabadtéri Színpad nyaranta rangos operael�?adásoknak ad otthont."
      ],
      "ro": [
        "Insula are o lungime de 2,8 kilometri �?i o l�?�?ime maxim�? de 500 de metri.",
        "Fântâna muzical�? este una dintre cele mai mari de acest tip din Europa.",
        "Ruinele m�?n�?stirii dominicane dateaz�? din secolul al XIII-lea.",
        "Turnul de ap�? de pe insul�? face parte din patrimoniul mondial UNESCO.",
        "Insula este conectat�? de ora�? prin Podul Margareta �?i Podul Árpád.",
        "�?trandul Palatinus a fost prima baie în aer liber din Budapesta.",
        "Exist�? o pist�? de alergare cauciucat�? de 5,3 kilometri în jurul insulei.",
        "Gr�?dina japonez�? a fost amenajat�? în anii 1970 �?i ofer�? plante rare.",
        "Insula g�?zduie�?te un mic parc zoologic cu c�?prioare �?i p�?s�?ri de ap�?.",
        "Teatrul în Aer Liber g�?zduie�?te numeroase spectacole de oper�? �?i balet în timpul verii."
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
  
    factsAdvanced: {
      "de": ["Die Margareteninsel erstreckt sich über eine Länge von 2,5 Kilometern in der Donau.", "Der singende Springbrunnen auf der Insel ist einer der grö�?ten seiner Art in Europa.", "Im kleinen Tierpark der Insel können Besucher unter anderem Damwild und Störche beobachten.", "Die Insel wird durch die Margaretenbrücke im Süden und die Árpádbrücke im Norden erschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "varosliget",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0844, 47.5144],
    name: {"de": "Stadtwäldchen", "hu": "Városliget", "ro": "Parcul Ora�?ului", "en": "City Park"},
    image: "/geo-images/hungary/varosliget.webp",
    description: {
      "de": "Das Stadtwäldchen (Városliget) ist einer der ältesten und vielseitigsten öffentlichen Parks der Welt und liegt im Herzen von Budapest. Auf einer Fläche von über 100 Hektar bietet der Park eine beeindruckende Mischung aus Natur, Kultur und Unterhaltung. Zu den bekanntesten Sehenswürdigkeiten gehören die Burg Vajdahunyad, das prachtvolle Széchenyi-Heilbad und der Budapester Zoo. Im Winter verwandelt sich der See des Parks in eine der grö�?ten und schönsten Kunsteisbahnen Europas. Das Stadtwäldchen ist ein zentraler Ort für die Freizeitgestaltung der Budapester und beherbergt zudem bedeutende Museen wie das Museum für Völkerkunde und das Haus der Ungarischen Musik im Rahmen des Liget-Budapest-Projekts.",
      "hu": "A Városliget a világ egyik els�? nyilvános parkja, amely Budapest szívében kínál sokszínű kikapcsolódási lehet�?séget. A több mint 100 hektáros területen a természet, a kultúra és a szórakozás különleges elegye várja a látogatókat. Legismertebb látnivalói közé tartozik a Vajdahunyad vára, a monumentális Széchenyi gyógyfürd�? és a F�?városi Állat- és Növénykert. Télen a Városligeti-tó Európa egyik legnagyobb és legszebb műjégpályájává alakul át. A Liget Budapest projekt keretében a park megújul, és olyan világszínvonalú épületekkel gazdagodott, mint a Néprajzi Múzeum és a Magyar Zene Háza, tovább er�?sítve kulturális központi szerepét.",
      "ro": "Parcul Ora�?ului (Városliget) este unul dintre primele parcuri publice din lume, oferind o gam�? divers�? de activit�?�?i recreative în inima Budapestei. Pe o suprafa�?�? de peste 100 de hectare, parcul îmbin�? natura, cultura �?i divertismentul într-un mod unic. Printre cele mai cunoscute atrac�?ii se num�?r�? Castelul Vajdahunyad, monumentalele B�?i Széchenyi �?i Gr�?dina Zoologic�? din Budapesta. Iarna, lacul din parc se transform�? în unul dintre cele mai mari �?i mai frumoase patinoare artificiale din Europa. �?n cadrul proiectului Liget Budapest, parcul este în curs de modernizare �?i a fost îmbog�?�?it cu cl�?diri de clas�? mondial�?, precum Muzeul de Etnografie �?i Casa Muzicii Maghiare.",
      "en": "The City Park (Városliget) is one of the world's first public parks, offering a diverse range of recreational activities in the heart of Budapest. Spanning over 100 hectares, the park features a unique blend of nature, culture, and entertainment. Its most famous attractions include Vajdahunyad Castle, the monumental Széchenyi Thermal Bath, and the Budapest Zoo and Botanical Garden. In winter, the park's lake transforms into one of Europe's largest and most beautiful artificial ice rinks. Under the Liget Budapest project, the park is being revitalized and has been enriched with world-class buildings such as the Museum of Ethnography and the House of Hungarian Music."
    },
    
    descriptionAdvanced: {
      "de": "Das Stadtwäldchen (Városliget) ist der bedeutendste Stadtpark von Budapest und ein Zentrum für Kultur, Wellness und Freizeit. Entstanden im 19. Jahrhundert, war es einer der ersten öffentlichen Parks der Welt und Schauplatz der gro�?en Millenniumsausstellung von 1896. Im Park befinden sich weltberühmte Sehenswürdigkeiten wie die Burg Vajdahunyad, das Széchenyi-Heilbad und der Budapester Zoo. Der See im Stadtwäldchen wird im Winter zur grö�?ten Kunsteisbahn Europas und ist im Sommer ein beliebter Ort zum Bootfahren. In den letzten Jahren wurde der Park durch das Projekt 'Liget Budapest' mit modernen Museen wie dem Haus der Musik modernisiert. Das Stadtwäldchen ist der beliebteste Treffpunkt für Familien und Touristen, die Natur und Kultur im Herzen von Pest verbinden möchten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Stadtwäldchen wurde bereits im frühen 19. Jahrhundert als öffentlicher Park angelegt.",
        "Die Burg Vajdahunyad wurde ursprünglich aus Holz und Pappe für die Millenniumsfeierlichkeiten 1896 erbaut.",
        "Das Széchenyi-Heilbad ist der grö�?te Heilbadekomplex in Europa.",
        "Der Budapester Zoo wurde 1866 eröffnet und ist einer der ältesten der Welt.",
        "Die Kunsteisbahn im Stadtwäldchen wurde 1870 eröffnet.",
        "Das Haus der Ungarischen Musik wurde vom japanischen Architekten Sou Fujimoto entworfen.",
        "Der Park beherbergt das monumentale Denkmal der ungarischen Revolution von 1956.",
        "Das Museum der Bildenden Künste liegt direkt am Eingang des Parks am Heldenplatz.",
        "Im Park befindet sich auch das berühmte Restaurant Gundel, ein Flaggschiff der ungarischen Gastronomie.",
        "Das Liget-Budapest-Projekt ist das grö�?te kulturelle Stadtentwicklungsprojekt in Europa."
      ],
      "hu": [
        "A Városliget a 19. század elején vált a világ egyik els�? nyilvános népkertjévé.",
        "Vajdahunyad vára eredetileg fából és kartonból épült az 1896-os millenniumi ünnepségekre.",
        "A Széchenyi gyógyfürd�? Európa legnagyobb gyógyfürd�?-komplexuma.",
        "A F�?városi Állat- és Növénykert 1866-ban nyílt meg, a világ egyik legrégebbi állatkertje.",
        "A Városligeti Műjégpálya 1870 óta várja a korcsolyázókat.",
        "A Magyar Zene Háza a neves japán építész, Sou Fujimoto tervei alapján készült.",
        "A parkban található az 1956-os forradalom és szabadságharc monumentális emlékműve.",
        "A Szépművészeti Múzeum közvetlenül a Liget bejáratánál, a H�?sök terén áll.",
        "Itt található a világhírű Gundel étterem, a magyar gasztronómia egyik fellegvára.",
        "A Liget Budapest projekt Európa legnagyobb léptékű kulturális városfejlesztési programja."
      ],
      "ro": [
        "Parcul Ora�?ului a devenit unul dintre primele parcuri publice din lume la începutul secolului al XIX-lea.",
        "Castelul Vajdahunyad a fost construit ini�?ial din lemn �?i carton pentru festivit�?�?ile mileniului din 1896.",
        "B�?ile Széchenyi reprezint�? cel mai mare complex balnear curativ din Europa.",
        "Gr�?dina Zoologic�? din Budapesta a fost deschis�? în 1866, fiind una dintre cele mai vechi din lume.",
        "Patinoarul artificial din Parcul Ora�?ului a fost inaugurat în 1870.",
        "Casa Muzicii Maghiare a fost proiectat�? de renumitul arhitect japonez Sou Fujimoto.",
        "Parcul g�?zduie�?te monumentul monumental al Revolu�?iei Maghiare din 1956.",
        "Muzeul de Arte Frumoase este situat chiar la intrarea în parc, în Pia�?a Eroilor.",
        "�?n parc se afl�? �?i faimosul restaurant Gundel, un simbol al gastronomiei maghiare.",
        "Proiectul Liget Budapest este cel mai mare program de dezvoltare urban�? cultural�? din Europa."
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
  
    factsAdvanced: {
      "de": ["Das Stadtwäldchen ist der Standort des berühmten Széchenyi-Heilbades, des grö�?ten Thermalbads Europas.", "Im Park befindet sich das Denkmal für den unbekannten Chronisten Anonymus.", "Der Millennium-Denkmal-Komplex am Eingang des Parks ist ein UNESCO-Weltkulturerbe.", "Das Projekt 'Liget Budapest' ist das derzeit grö�?te kulturelle Stadtentwicklungsprojekt in Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "andrassy-ut",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.065, 47.5069],
    name: {"de": "Andrássy-Stra�?e", "hu": "Andrássy út", "ro": "Bulevardul Andrássy", "en": "Andrássy Avenue"},
    image: "/geo-images/hungary/andrassy-ut.webp",
    description: {
      "de": "Die Andrássy-Stra�?e ist der eleganteste Boulevard von Budapest und gehört seit 2002 zum UNESCO-Welterbe. Sie verbindet das Stadtzentrum mit dem Heldenplatz und ist gesäumt von prächtigen Villen, exklusiven Boutiquen und bedeutenden kulturellen Institutionen wie der Ungarischen Staatsoper. Die Stra�?e wurde im späten 19. Jahrhundert nach dem Vorbild der Pariser Boulevards angelegt und spiegelt den Glanz der österreichisch-ungarischen Monarchie wider. Unter der Andrássy-Stra�?e verläuft die historische Millenniums-U-Bahn (M1), die älteste elektrische U-Bahn Kontinentaleuropas. Ein Spaziergang entlang dieser Prachtstra�?e bietet einen faszinierenden Einblick in die Architektur des Historismus und das pulsierende Leben der ungarischen Hauptstadt.",
      "hu": "Az Andrássy út Budapest legelegánsabb sugárútja, amely 2002 óta az UNESCO világörökség részét képezi. A belvárost köti össze a H�?sök terével, mentén pedig lenyűgöz�? paloták, exkluzív üzletek és olyan jelent�?s kulturális intézmények találhatók, mint a Magyar Állami Operaház. Az utat a 19. század végén alakították ki párizsi mintára, tükrözve az Osztrák-Magyar Monarchia fénykorát. Az Andrássy út alatt fut a Millenniumi Földalatti Vasút (M1), amely a kontinens els�? elektromos földalatti vasútja volt. Egy séta ezen a díszes sugárúton felejthetetlen élményt nyújt a historizáló építészet kedvel�?inek és a magyar f�?város lüktetését keres�?knek.",
      "ro": "Bulevardul Andrássy este cea mai elegant�? arter�? din Budapesta, fiind inclus�? în patrimoniul mondial UNESCO din anul 2002. Conecteaz�? centrul ora�?ului cu Pia�?a Eroilor �?i este m�?rginit de palate splendide, buticuri exclusive �?i institu�?ii culturale importante, precum Opera de Stat Maghiar�?. Bulevardul a fost amenajat la sfâr�?itul secolului al XIX-lea dup�? modelul bulevardelor pariziene, reflectând str�?lucirea Monarhiei Austro-Ungare. Pe sub Bulevardul Andrássy circul�? metroul mileniului (M1), prima linie de metrou electric din Europa continental�?. O plimbare de-a lungul acestui bulevard ofer�? o perspectiv�? fascinant�? asupra arhitecturii historiste �?i a vie�?ii vibrante a capitalei maghiare.",
      "en": "Andrássy Avenue is the most elegant boulevard in Budapest and has been a UNESCO World Heritage site since 2002. It connects the city center with Heroes' Square and is lined with magnificent villas, exclusive boutiques, and significant cultural institutions such as the Hungarian State Opera House. The avenue was developed in the late 19th century, modeled after Parisian boulevards, reflecting the golden age of the Austro-Hungarian Monarchy. Beneath Andrássy Avenue runs the historic Millennium Underground Railway (M1), the first electric underground line in continental Europe. A stroll along this grand avenue offers a fascinating insight into Historicist architecture and the pulsating life of the Hungarian capital."
    },
    
    descriptionAdvanced: {
      "de": "Die Andrássy-Stra�?e ist die eleganteste Boulevardstra�?e von Budapest und ein herausragendes Beispiel städtebaulicher Eleganz des 19. Jahrhunderts. Sie verbindet den Elisabethenplatz im Stadtzentrum mit dem Heldenplatz am Stadtwäldchen und wird von prachtvollen Neorenaissance-Palästen gesäumt. Entlang der Allee befinden sich bedeutende kulturelle Einrichtungen wie die Ungarische Staatsoper und das Haus des Terrors. Die Stra�?e ist in drei Abschnitte unterteilt, die von luxuriösen Geschäften bis hin zu aristokratischen Villen mit Gärten reichen. Unter der Andrássy-Stra�?e verläuft die historische U-Bahn-Linie M1, die erste elektrische Metro auf dem europäischen Kontinent. Als UNESCO-Welterbe geschützt, spiegelt die Stra�?e die goldene �?ra Budapests am Ende der Monarchie wider.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die Stra�?e wurde 1876 eingeweiht und nach Premierminister Gyula Andrássy benannt.",
        "Die Ungarische Staatsoper ist eines der prächtigsten Gebäude an der Stra�?e.",
        "Die Millenniums-U-Bahn (M1) wurde 1896 zur Tausendjahrfeier Ungarns eröffnet.",
        "Die Stra�?e ist in drei Abschnitte mit unterschiedlichem Charakter unterteilt.",
        "Zahlreiche Botschaften und diplomatische Vertretungen haben hier ihren Sitz.",
        "Das Haus des Terrors, ein Museum zur Geschichte der Diktaturen, liegt an der Andrássy-Stra�?e.",
        "Die Stra�?e ist 2,4 Kilometer lang und führt direkt zum Stadtwäldchen.",
        "Die Architektur ist geprägt von Neorenaissance- und eklektischen Stilen.",
        "Die Andrássy-Stra�?e ist ein Zentrum für Luxus-Shopping in Budapest.",
        "Die gesamte Stra�?e steht unter Denkmalschutz und bewahrt ihr historisches Erscheinungsbild."
      ],
      "hu": [
        "Az utat 1876-ban adták át, és Andrássy Gyula miniszterelnökr�?l nevezték el.",
        "A Magyar Állami Operaház az út egyik legimpozánsabb épülete.",
        "A kisföldalatti (M1) 1896-ban, a honfoglalás ezredik évfordulójára készült el.",
        "Az út három, jellegében jól elkülöníthet�? szakaszra oszlik.",
        "Számos nagykövetség és diplomáciai képviselet található a sugárút mentén.",
        "Itt található a Terror Háza Múzeum, amely a diktatúrák áldozatainak állít emléket.",
        "A sugárút hossza 2,4 kilométer, és egyenesen a Városligetbe vezet.",
        "�?pítészetét a neoreneszánsz és az eklektika stílusjegyei határozzák meg.",
        "Az Andrássy út a luxusvásárlás és a divat központja Budapesten.",
        "A teljes sugárút műemléki védelem alatt áll, meg�?rizve történelmi arculatát."
      ],
      "ro": [
        "Bulevardul a fost inaugurat în 1876 �?i numit dup�? prim-ministrul Gyula Andrássy.",
        "Opera de Stat Maghiar�? este una dintre cele mai impresionante cl�?diri de pe bulevard.",
        "Metroul mileniului (M1) a fost deschis în 1896 pentru a celebra o mie de ani de istorie maghiar�?.",
        "Bulevardul este împ�?r�?it în trei sec�?iuni cu caractere distincte.",
        "Numeroase ambasade �?i reprezentan�?e diplomatice î�?i au sediul aici.",
        "Casa Terorii, un muzeu dedicat victimelor dictaturilor, se afl�? pe acest bulevard.",
        "Bulevardul are o lungime de 2,4 kilometri �?i duce direct c�?tre Parcul Ora�?ului.",
        "Arhitectura este dominat�? de stilurile neorenascentist �?i eclectic.",
        "Bulevardul Andrássy este centrul cump�?r�?turilor de lux din Budapesta.",
        "�?ntregul bulevard este protejat ca monument istoric, p�?strându-�?i aspectul original."
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
  
    factsAdvanced: {
      "de": ["Die Andrássy-Stra�?e wurde 2002 als Teil des Budapester Ensembles zum UNESCO-Welterbe erklärt.", "Die Stra�?e wurde nach dem ungarischen Ministerpräsidenten Graf Gyula Andrássy benannt.", "Viele der prachtvollen Gebäude wurden von den berühmtesten Architekten ihrer Zeit, wie Miklós Ybl, entworfen.", "Die Allee ist über 2,3 Kilometer lang und ein Inbegriff für den europäischen Boulevardstil."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyugati-palyaudvar",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0583, 47.5106],
    name: {"de": "Westbahnhof", "hu": "Nyugati pályaudvar", "ro": "Gara de Vest", "en": "Nyugati Railway Station"},
    description: {
      "de": "Der Westbahnhof (Nyugati pályaudvar) ist einer der architektonisch beeindruckendsten Bahnhöfe in Budapest und ein bedeutendes Denkmal der Eisenbahngeschichte. Das heutige Gebäude wurde von der Firma von Gustave Eiffel entworfen und im Jahr 1877 eingeweiht. Besonders markant ist die monumentale Eisen- und Glaskonstruktion der Bahnhofshalle, die zur Zeit ihrer Errichtung eine technische Meisterleistung darstellte. Der Bahnhof liegt am Nyugati-Platz und dient als wichtiger Knotenpunkt für den nationalen und internationalen Zugverkehr sowie für den öffentlichen Nahverkehr der Stadt. Neben seiner funktionalen Bedeutung beherbergt der Bahnhof auch eine der schönsten McDonald's-Filialen der Welt, die in einem ehemaligen Wartesaal untergebracht ist.",
      "hu": "A Nyugati pályaudvar Budapest egyik legimpozánsabb építészeti alkotása és a vasúttörténet kiemelked�? emléke. A mai épületet Gustave Eiffel cége tervezte, és 1877-ben adták át a forgalomnak. Különösen lenyűgöz�? a pályaudvar monumentális vas- és üvegszerkezetű csarnoka, amely építése idején technikai bravúrnak számított. A pályaudvar a Nyugati téren található, és fontos csomópontja a belföldi és nemzetközi vasúti közlekedésnek, valamint a városi tömegközlekedésnek is. Funkcionális jelent�?sége mellett a pályaudvar ad otthont a világ egyik legszebb McDonald's éttermének is, amely az egykori elegáns váróteremben kapott helyet.",
      "ro": "Gara de Vest (Nyugati pályaudvar) este una dintre cele mai impresionante realiz�?ri arhitecturale din Budapesta �?i un monument remarcabil al istoriei feroviare. Cl�?direa actual�? a fost proiectat�? de compania lui Gustave Eiffel �?i inaugurat�? în anul 1877. Impresioneaz�? în mod deosebit hala monumental�? din fier �?i sticl�? a g�?rii, care a reprezentat o performan�?�? tehnic�? la momentul construc�?iei sale. Gara este situat�? în Pia�?a Nyugati �?i serve�?te drept nod important pentru traficul feroviar na�?ional �?i interna�?ional, precum �?i pentru transportul public urban. Pe lâng�? importan�?a sa func�?ional�?, gara g�?zduie�?te �?i unul dintre cele mai frumoase restaurante McDonald's din lume, situat într-o fost�? sal�? de a�?teptare elegant�?.",
      "en": "The Nyugati Railway Station (West Station) is one of Budapest's most architecturally stunning buildings and a prominent monument of railway history. The current building was designed by Gustave Eiffel's company and inaugurated in 1877. Particularly impressive is the station's monumental iron and glass hall, which was a technical feat at the time of its construction. Located at Nyugati Square, the station serves as a major hub for national and international rail traffic, as well as for the city's public transport. Beyond its functional significance, the station also houses one of the world's most beautiful McDonald's restaurants, located in a former elegant waiting room."
    },
    
    descriptionAdvanced: {
      "de": "Der Westbahnhof (Nyugati pályaudvar) in Budapest ist ein architektonisches Meisterwerk des ausgehenden 19. Jahrhunderts und ein bedeutender Verkehrsknotenpunkt. Errichtet von der Firma Gustave Eiffels, besticht das Bahnhofsgebäude durch seine beeindruckende Stahl-Glas-Konstruktion der Empfangshalle. Die Kombination aus historischer Architektur und modernem Reisekomfort macht den Nyugati zu einem der schönsten Bahnhöfe Europas. In einem Flügel des Bahnhofs befindet sich eine der prachtvollsten McDonald�??s-Filialen weltweit, die in einem ehemaligen Speisesaal untergebracht ist. Der Bahnhof liegt am Nyugati-Platz, einem der belebtesten Plätze von Pest, und verbindet die Hauptstadt mit dem Norden und Osten Ungarns. Trotz zahlreicher Kriege und Umbauten hat das Gebäude seinen ursprünglichen Glanz und seine architektonische Integrität bewahrt.",
      "hu": "",
      "ro": "",
      "en": ""
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
        "Direkt neben dem Bahnhof befindet sich das Einkaufszentrum Westend, eines der grö�?ten der Stadt."
      ],
      "hu": [
        "A pályaudvar az 1846-ban megnyitott els�? magyar vasútállomás helyén épült.",
        "A vasszerkezetet Párizsban gyártották le, és Budapesten szerelték össze.",
        "A projekt vezet�? építésze az osztrák August de Serres volt.",
        "A vágánycsarnok fesztávolsága 25 méter.",
        "Innen indult az els�? magyarországi vasútvonal Vác irányába.",
        "Az épület az üveg- és vasarchitektúrát ötvözi a klasszikus téglaarchitektúrával.",
        "A pályaudvaron található McDonald's éttermet a világ legszebbjei között tartják számon.",
        "Az épületet az elmúlt években jelent�?sen felújították, visszaadva eredeti pompáját.",
        "A pályaudvar népszerű forgatási helyszín nemzetközi filmprodukciók számára is.",
        "Közvetlenül mellette található a Westend bevásárlóközpont, a város egyik legnagyobb üzletközpontja."
      ],
      "ro": [
        "Gara a fost construit�? pe locul primei sta�?ii de cale ferat�? maghiare din 1846.",
        "Structura de fier a fost prefabricat�? la Paris �?i asamblat�? la Budapesta.",
        "Arhitectul principal al proiectului a fost August de Serres.",
        "Hala liniilor are o deschidere de 25 de metri.",
        "De aici a plecat prima linie de cale ferat�? din Ungaria c�?tre Vác.",
        "Cl�?direa îmbin�? arhitectura din sticl�? �?i fier cu fa�?ade clasice din c�?r�?mid�?.",
        "Restaurantul McDonald's din gar�? este adesea considerat cel mai frumos din lume.",
        "Gara a fost renovat�? extensiv în ultimii ani pentru a-�?i rec�?p�?ta str�?lucirea de odinioar�?.",
        "Este o loca�?ie popular�? de filmare pentru produc�?ii cinematografice interna�?ionale.",
        "Chiar lâng�? gar�? se afl�? centrul comercial Westend, unul dintre cele mai mari din ora�?."
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
    parent: "HU-BU",
    coords: [19.0436, 47.499],
    name: {"de": "Kettenbrücke", "hu": "Lánchíd", "ro": "Podul cu Lan�?uri", "en": "Chain Bridge"},
    image: "/geo-images/hungary/lanchid.webp",
    description: {
      "de": "Die Széchenyi-Kettenbrücke ist die älteste und bekannteste Brücke über die Donau in Budapest und ein Symbol der ungarischen Hauptstadt. Sie wurde 1849 eingeweiht und war die erste dauerhafte Verbindung zwischen den Städten Buda und Pest, was ma�?geblich zur Vereinigung der Stadt beitrug. Die Brücke wurde auf Initiative des Grafen István Széchenyi nach den Plänen des englischen Ingenieurs William Tierney Clark errichtet. Mit ihren charakteristischen Löwenstatuen an den Brückentoren und ihrer eleganten Kettenkonstruktion ist sie ein Meisterwerk der Ingenieurskunst des 19. Jahrhunderts. Als Teil des UNESCO-Welterbes bietet die Kettenbrücke einen der romantischsten Spazierwege der Stadt mit einem atemberaubenden Blick auf das Panorama von Budapest.",
      "hu": "A Széchenyi lánchíd a Duna legid�?sebb és legismertebb hídja Budapesten, a magyar f�?város egyik legfontosabb jelképe. 1849-ben adták át, és ez volt az els�? állandó összeköttetés Buda és Pest között, ami dönt�? szerepet játszott a város kés�?bbi egyesítésében. A híd gróf Széchenyi István kezdeményezésére, az angol William Tierney Clark tervei alapján épült meg. Jellegzetes k�?oroszlánjai és elegáns láncszerkezete a 19. századi mérnöki tudomány remekművévé teszik. Az UNESCO világörökség részeként a Lánchíd a város egyik legromantikusabb sétaútvonala, ahonnan lenyűgöz�? kilátás nyílik Budapest panorámájára.",
      "ro": "Podul cu Lan�?uri Széchenyi este cel mai vechi �?i cel mai cunoscut pod peste Dun�?re din Budapesta, fiind un simbol al capitalei maghiare. Inaugurat în 1849, a fost prima leg�?tur�? permanent�? între ora�?ele Buda �?i Pesta, jucând un rol decisiv în unificarea ora�?ului. Podul a fost construit la ini�?iativa contelui István Széchenyi, dup�? planurile inginerului englez William Tierney Clark. Cu statuile sale caracteristice de lei de la por�?ile podului �?i structura sa elegant�? cu lan�?uri, este o capodoper�? a ingineriei din secolul al XIX-lea. Ca parte a patrimoniului mondial UNESCO, Podul cu Lan�?uri ofer�? una dintre cele mai romantice rute de plimbare din ora�?, cu o vedere uluitoare asupra panoramei Budapestei.",
      "en": "The Széchenyi Chain Bridge is the oldest and most famous bridge across the Danube in Budapest and a symbol of the Hungarian capital. Inaugurated in 1849, it was the first permanent connection between the cities of Buda and Pest, playing a crucial role in the unification of the city. The bridge was built on the initiative of Count István Széchenyi, based on the designs of English engineer William Tierney Clark. With its characteristic lion statues at the bridgeheads and its elegant chain construction, it is a masterpiece of 19th-century engineering. As part of the UNESCO World Heritage site, the Chain Bridge offers one of the city's most romantic walking routes with a breathtaking view of the Budapest panorama."
    },
    
    descriptionAdvanced: {
      "de": "Die Kettenbrücke (Széchenyi lánchíd) ist die älteste und berühmteste der Budapester Brücken über die Donau und ein Symbol der ungarischen Einheit. Sie wurde 1849 eingeweiht und war die erste permanente Verbindung zwischen den Städten Buda und Pest, was die Entwicklung zur modernen Metropole ma�?geblich beschleunigte. Die Brücke wurde auf Initiative von Graf István Széchenyi errichtet und vom englischen Ingenieur William Tierney Clark entworfen. Besonders markant sind die massiven Triumphbögen und die stolzen Löwenstatuen, die die Brückenköpfe bewachen. Nachts ist die Kettenbrücke prachtvoll beleuchtet und bietet einen der romantischsten Anblicke von Budapest. Sie ist nicht nur ein technisches Denkmal, sondern auch ein Herzstück der nationalen Identität Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die Brücke wurde nach dem ungarischen Staatsmann István Széchenyi benannt.",
        "William Tierney Clark entworfen, Adam Clark leitete den Bau.",
        "Die Löwenstatuen an den Enden der Brücke wurden von János Marschalkó geschaffen.",
        "Während des Zweiten Weltkriegs wurde die Brücke von deutschen Truppen gesprengt.",
        "Die Brücke wurde 1949, genau 100 Jahre nach ihrer ersten Einweihung, wiedereröffnet.",
        "Die Spannweite zwischen den Pfeilern beträgt 202 Meter.",
        "Die Kettenbrücke war bei ihrer Eröffnung eine der grö�?ten Hängebrücken der Welt.",
        "Einer Legende nach haben die Löwen der Brücke keine Zungen.",
        "Die Brücke ist nachts wunderschön beleuchtet und ein beliebtes Fotomotiv.",
        "Sie verbindet den Roosevelt-Platz (heute Széchenyi-Platz) in Pest mit dem Adam-Clark-Platz in Buda."
      ],
      "hu": [
        "A hidat a 'legnagyobb magyarról', Széchenyi Istvánról nevezték el.",
        "William Tierney Clark tervezte, az építkezést pedig Clark Ádám irányította.",
        "A hídf�?ket díszít�? k�?oroszlánokat Marschalkó János szobrászművész készítette.",
        "A második világháború végén a visszavonuló német csapatok felrobbantották a hidat.",
        "A hidat 1949-ben, az eredeti átadás 100. évfordulóján nyitották meg újra.",
        "A pillérek közötti legnagyobb távolság 202 méter.",
        "Átadásakor a Lánchíd a világ egyik legnagyobb függ�?hídja volt.",
        "A legenda szerint a híd oroszlánjainak nincs nyelve, bár ez valójában nem igaz.",
        "A híd éjszakai kivilágítása Budapest egyik legszebb látványa.",
        "A pesti Széchenyi István teret köti össze a budai Clark Ádám térrel."
      ],
      "ro": [
        "Podul a fost numit dup�? omul de stat maghiar István Széchenyi.",
        "Proiectat de William Tierney Clark, construc�?ia a fost coordonat�? de Adam Clark.",
        "Statuile de lei de la capetele podului au fost create de sculptorul János Marschalkó.",
        "La sfâr�?itul celui de-al Doilea R�?zboi Mondial, podul a fost aruncat în aer de trupele germane.",
        "Podul a fost redeschis în 1949, exact la 100 de ani de la prima sa inaugurare.",
        "Deschiderea maxim�? între piloni este de 202 metri.",
        "La momentul inaugur�?rii, Podul cu Lan�?uri era unul dintre cele mai mari poduri suspendate din lume.",
        "Conform unei legende, leii de pe pod nu au limbi, de�?i acest lucru nu este adev�?rat.",
        "Podul este iluminat superb noaptea �?i este un subiect popular pentru fotografii.",
        "Conecteaz�? Pia�?a Széchenyi István din Pesta cu Pia�?a Adam Clark din Buda."
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
  
    factsAdvanced: {
      "de": ["Die Kettenbrücke war bei ihrer Eröffnung eine der grö�?ten Hängebrücken der Welt.", "Die Löwen an den Brückenköpfen haben der Legende nach keine Zungen, was jedoch nur eine optische Täuschung ist.", "Während des Zweiten Weltkriegs wurde die Brücke gesprengt und zum 100. Jubiläum 1949 originalgetreu wiederaufgebaut.", "Die Brücke wurde nach einer umfassenden Sanierung im Jahr 2023 für den Fu�?gänger- und Busverkehr wieder freigegeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pecs",
    type: "city",
    parent: "HU-BA",
    coords: [18.2323, 46.0727],
    name: {"de": "Fünfkirchen", "hu": "Pécs", "ro": "Pécs", "en": "Pécs"},
    image: "/geo-images/hungary/pecs.webp",
    description: {
      "de": "Pécs, im Südwesten Ungarns am Fu�?e des Mecsek-Gebirges gelegen, ist eine Stadt mit einer über 2000-jährigen Geschichte. Die von den Römern als Sopianae gegründete Stadt ist bekannt für ihr mediterranes Flair und ihr reiches kulturelles Erbe. Besonders sehenswert sind die frühchristlichen Grabkammern, die zum UNESCO-Welterbe gehören, sowie die markante Moschee von Pascha Jakowali Hassan. Pécs war 2010 Kulturhauptstadt Europas und beherbergt die berühmte Zsolnay-Porzellanmanufaktur.",
      "hu": "Pécs, Magyarország délnyugati részén, a Mecsek lábánál fekv�? város, amely több mint 2000 éves múltra tekint vissza. A rómaiak által Sopianae néven alapított település mediterrán hangulatáról és gazdag kulturális örökségér�?l ismert. Különösen figyelemre méltóak az UNESCO világörökség részét képez�? ókeresztény sírkamrák, valamint Gázi Kászim pasa dzsámija. Pécs 2010-ben Európa Kulturális F�?városa volt, és itt található a híres Zsolnay Porcelánmanufaktúra is.",
      "ro": "Pécs, situat în sud-vestul Ungariei, la poalele mun�?ilor Mecsek, este un ora�? cu o istorie de peste 2000 de ani. Fondat de romani sub numele de Sopianae, ora�?ul este cunoscut pentru atmosfera sa mediteranean�? �?i mo�?tenirea cultural�? bogat�?. Deosebit de remarcabile sunt mormintele paleocre�?tine, care fac parte din patrimoniul mondial UNESCO, precum �?i moscheea pa�?ei Gazi Kasim. Pécs a fost Capital�? European�? a Culturii în 2010 �?i g�?zduie�?te faimoasa fabric�? de por�?elan Zsolnay.",
      "en": "Pécs, located in southwestern Hungary at the foot of the Mecsek Mountains, is a city with a history spanning over 2,000 years. Founded by the Romans as Sopianae, the city is known for its Mediterranean atmosphere and rich cultural heritage. Particularly noteworthy are the Early Christian Necropolis, a UNESCO World Heritage site, and the iconic Mosque of Pasha Qasim. Pécs was a European Capital of Culture in 2010 and is home to the world-famous Zsolnay Porcelain Manufactory."
    },
    descriptionAdvanced: {
      "de": "Pécs, die fünftgrö�?te Stadt Ungarns, liegt am Fu�?e des Mecsek-Gebirges und besticht durch ein mildes, fast mediterranes Flair. Als römische Siedlung Sopianae gegründet, blickt die Stadt auf eine über 2000-jährige Geschichte zurück, deren Zeugnisse in den zum UNESCO-Welterbe gehörenden frühchristlichen Grabkammern zu finden sind. Die Stadt ist ein Schmelztiegel der Kulturen, was sich in der ehemaligen Moschee von Pascha Jakowali Hassan und der prächtigen Kathedrale widerspiegelt. Bekannt als Stadt der Kunst und Bildung, beherbergt Pécs die älteste Universität des Landes sowie das weltberühmte Zsolnay-Kulturviertel. Im Jahr 2010 trug Pécs stolz den Titel der Kulturhauptstadt Europas und zieht seither Besucher mit seiner lebendigen Atmosphäre und den vielen Festivals an.",
      "hu": "Pécs, a Mecsek-hegység lábánál fekv�? mediterrán hangulatú nagyváros, Magyarország egyik leggazdagabb történelmi és kulturális örökséggel rendelkez�? települése. A rómaiak által Sopianae néven alapított város már a korai kereszténység idején fontos központ volt, amit a világörökség részét képez�? ókeresztény sírkamrák is tanúsítanak. Pécs egyedülállóságát a különböz�? kultúrák rétegz�?dése adja: a római falak felett gótikus székesegyház, a török hódoltság korából pedig mecsetek és minaretek maradtak fenn. A város a művészetek otthona is, itt található a világhírű Zsolnay Porcelánmanufaktúra és a róla elnevezett kulturális negyed. 2010-ben Európa Kulturális F�?városaként Pécs megmutatta a világnak pezsg�? szellemi életét és modern építészeti értékeit.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Fünftgrö�?te Stadt Ungarns und Sitz des Komitats Baranya.",
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
        "A Pécsi Tudományegyetemet 1367-ben alapították, az ország els�? egyetemeként.",
        "Az ókeresztény sírkamrák egyedülálló UNESCO világörökségi helyszínt jelentenek.",
        "A Zsolnay Porcelánmanufaktúra otthona, híres az eozin mázáról.",
        "A pécsi székesegyház lenyűgöz�? román stílusú építmény.",
        "A Zsolnay Kulturális Negyed a művészet és a design modern központja.",
        "Mediterrán éghajlatáról és a mecseki bortermelésr�?l is ismert.",
        "Gázi Kászim pasa dzsámija a török hódoltság korának egyik legfontosabb emléke."
      ],
      "ro": [
        "Al cincilea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Baranya.",
        "Universitatea din Pécs a fost fondat�? în 1367, fiind prima din Ungaria.",
        "Mormintele paleocre�?tine reprezint�? un sit unic în patrimoniul UNESCO.",
        "Casa fabricii de por�?elan Zsolnay, faimoas�? pentru glazura sa de eozin�?.",
        "Catedrala din Pécs este o construc�?ie romanic�? impresionant�?.",
        "Cartierul Cultural Zsolnay este un centru modern pentru art�? �?i design.",
        "Cunoscut pentru clima mediteranean�? �?i viticultura de pe muntele Mecsek.",
        "Moscheea pa�?ei Gazi Kasim este un vestigiu important al epocii otomane."
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
  
    factsAdvanced: {
      "de": [],
      "hu": ["Pécs ad otthont az UNESCO Világörökség részét képez�? ókeresztény sírkamráknak.",
        "Itt alapították Magyarország els�? egyetemét 1367-ben, Nagy Lajos király idején.",
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
    parent: "HU-BA",
    coords: [18.2975, 45.855],
    name: {"de": "Siklós", "hu": "Siklós", "ro": "Siklós", "en": "Siklós"},
    image: "/geo-images/hungary/siklos.webp",
    description: {"de": "Stadt in Südungarn, berühmt für ihre gut erhaltene Burg.", "hu": "Dél-magyarországi város, jól karbantartott váráról híres.", "ro": "Ora�? în sudul Ungariei, faimos pentru castelul s�?u bine conservat.", "en": "City in southern Hungary, famous for its well-preserved castle."},
    descriptionAdvanced: {
      "de": "Siklós, im sonnigen Süden des Komitats Baranya gelegen, beherbergt eine der am besten erhaltenen mittelalterlichen Burgen Ungarns. Die Burg Siklós thront auf einer Anhöhe und bietet faszinierende Einblicke in die Renaissance-Architektur sowie eine reiche Ausstellung zur Geschichte der ungarischen Adelsfamilien. Die Stadt liegt im Herzen einer bedeutenden Weinregion und ist bekannt für ihre Gastfreundschaft und die Nähe zum Heilbad Harkány. Ein Spaziergang durch die historischen Räume der Burg führt Besucher vorbei an prachtvollen Kapellen und massiven Wehrtürmen. Siklós ist ein Ort, an dem die Geschichte lebendig wird und man die Ruhe der südungarischen Landschaft in vollen Zügen genie�?en kann.",
      "hu": "Siklós a Villányi-hegység déli lábánál fekv�? történelmi város, amely leginkább monumentális és épségben maradt váráról ismert. A siklósi vár Magyarország egyik legjelent�?sebb er�?dítménye, amely a gótikától a barokkig számos építészeti stílust ötvöz, s falaiban ma interaktív kiállítások mutatják be a várúr és a várnép életét. A város vallási emlékei, mint a Malkocs bej dzsámi vagy a kegytemplom, a különböz�? kultúrák évszázados jelenlétét hirdetik. Siklós közvetlen szomszédságában található a harkányi gyógyfürd�? és a villányi borvidék, így a település a pihenés és a gasztronómia kedvel�?inek is ideális célpontja. A táj nyugalma és a történelmi falak varázsa egyedülálló élményt nyújt minden látogatónak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Siklós wurde bereits im 13. Jahrhundert gegründet.", "Sie ist eine der wenigen Burgen Ungarns, die nie vollständig zerstört wurden.", "Die Burg beherbergt eine prachtvolle Kapelle mit gotischen Elementen.", "In der Nähe befindet sich die berühmte Wallfahrtskirche von Máriagyűd."],
      "hu": [
        "A siklósi vár az ország egyik legépebben fennmaradt középkori vára.",
        "Itt forgatták a híres 'A Tenkes kapitánya' című magyar sorozat jelent�?s részét.",
        "A várban látható egy 15. századi gótikus kápolna, amelynek falfestményei világhírűek.",
        "A városban található Malkocs bej dzsámi elnyerte az Europa Nostra-díjat a példás felújításért.",
        "Siklós híres bortermelésér�?l is, amely a Villányi borvidék szerves része."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg Siklós wurde im 13. Jahrhundert erbaut.", "Liegt in der Nähe der Weinregion Villány."], "hu": ["A siklósi vár a 13. században épült.", "A villányi borvidék közelében fekszik."], "ro": ["Castelul Siklós a fost construit în secolul al XIII-lea.", "Situat în apropierea regiunii viticole Villány."], "en": ["Siklós Castle was built in the 13th century.", "Located near the Villány wine region."]},
  },
  {
    id: "mohacs",
    type: "city",
    parent: "HU-BA",
    coords: [18.6814, 45.9956],
    name: {"de": "Mohatsch", "hu": "Mohács", "ro": "Mohács", "en": "Mohács"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Stadt an der Donau, bekannt für die Schlacht von Mohács und das Busójárás-Festival.", "hu": "Duna-parti város, a mohácsi vészr�?l és a busójárásról ismert.", "ro": "Ora�? pe Dun�?re, cunoscut pentru B�?t�?lia de la Mohács �?i festivalul Busójárás.", "en": "City on the Danube, known for the Battle of Mohács and the Busójárás festival."},
    descriptionAdvanced: {
      "de": "Mohács, am Ufer der Donau gelegen, ist in der ungarischen Geschichte als Ort zweier schicksalhafter Schlachten gegen das Osmanische Reich bekannt. Heute ist die Stadt vor allem für das spektakuläre Busójárás-Festival berühmt, das zum immateriellen UNESCO-Kulturerbe gehört und jährlich das Ende des Winters feiert. Bei diesem Volksfest ziehen maskierte Gestalten mit furchterregenden Holzmasken und Schafsfellkostümen durch die Stra�?en, um böse Geister zu vertreiben. Mohács ist zudem ein bedeutender Donauhafen und ein kultureller Treffpunkt für Ungarn, Donauschwaben und Kroaten. Die Stadt bewahrt ein reiches Erbe an Volkskunst und traditioneller Architektur, das Besucher aus aller Welt anzieht.",
      "hu": "Mohács a Duna partján fekv�? történelmi város, amelynek neve örökre összefonódott az 1526-os sorsdönt�? csatával, amely a középkori magyar királyság bukását és a török hódoltság kezdetét jelentette. A város határában található Nemzeti Emlékhely lenyűgöz�? szobrai és tömegsírjai méltó emléket állítanak a h�?söknek. Mohács azonban ma már nem csak a gyászról szól: a város világhírű népünnepélye, a Busójárás, az UNESCO szellemi örökség része, amely minden évben ezreket vonz a télbúcsúztató álarcos forgataggal. A Duna-parti város pezsg�? kulturális életet, modern múzeumokat és a folyó menti ártéri erd�?k nyugalmát kínálja az idelátogatóknak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Busójárás-Festival in Mohács ist Teil des UNESCO-Weltkulturerbes.", "Die Schlacht von Mohács im Jahr 1526 markierte den Beginn der Türkenherrschaft in Ungarn.", "Die Gedenkstätte der Schlacht von Mohács erinnert an den heldenhaften Kampf der Soldaten.", "Die Stadt ist bekannt für ihre lebendige Keramik- und Töpfertradition."],
      "hu": [
        "Mohács híres a Busójárásról, amely 2009-ben került fel az UNESCO világörökségi listájára.",
        "Az 1526-os csata helyszínén 1976-ban nyílt meg a monumentális Nemzeti Emlékhely.",
        "A város központjában áll a Fogadalmi Templom, amely a csata 400. évfordulójára épült.",
        "Mohácson található a Busóudvar, ahol az év minden napján megismerhet�? a busóhagyomány.",
        "A város fontos Duna-menti határkiköt�? Magyarország és Horvátország között."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Schauplatz der Schlacht von Mohács 1526.", "Das Busójárás ist UNESCO-Kulturerbe."], "hu": ["Az 1526-os mohácsi csata helyszíne.", "A busójárás UNESCO szellemi kulturális örökség."], "ro": ["Locul B�?t�?liei de la Mohács din 1526.", "Busójárás este patrimoniu cultural UNESCO."], "en": ["Site of the Battle of Mohács in 1526.", "The Busójárás is UNESCO cultural heritage."]},
  },
  {
    id: "villany",
    type: "city",
    parent: "HU-BA",
    coords: [18.4547, 45.8694],
    name: {"de": "Wieland", "hu": "Villány", "ro": "Villány", "en": "Villány"},    description: {"de": "Zentrum einer der berühmtesten Rotweinregionen Ungarns.", "hu": "Magyarország egyik leghíresebb vörösborvidékének központja.", "ro": "Centrul uneia dintre cele mai faimoase regiuni de vin ro�?u din Ungaria.", "en": "Center of one of Hungary's most famous red wine regions."},
    descriptionAdvanced: {
      "de": "Villány gilt als die ",
      "hu": "Villány Magyarország egyik legdélebbi és leghíresebb borvidékének központja, amelyet a 'vörösborok városa'-ként ismernek világszerte. A település arculatát a történelmi pincesor, a rendezett sz�?l�?ültetvények és a mediterrán jellegű éghajlat határozza meg, amely kiváló feltételeket biztosít a testes vörösborok, mint a Cabernet vagy a Franc számára. Villány nemcsak a borászatról szól, hanem a min�?ségi gasztronómiáról és a borkultúrához kapcsolódó fesztiválokról is, amelyek minden évben tömegeket vonzanak. A város környéki dombok kiváló túrázási lehet�?ségeket kínálnak, míg a helyi borászok vendégszeretete és a pincék hűvös nyugalma felejthetetlen élményt nyújt a kikapcsolódni vágyóknak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Villány ist die südlichste und wärmste Weinregion Ungarns.", "Die Region ist berühmt für ihre vollmundigen Rotweine aus der Cabernet Franc Traube.", "Die Weinstra�?e von Villány-Siklós war die erste ihrer Art in Ungarn.", "Jährlich im Herbst findet in Villány ein gro�?es Rotweinfestival statt."],
      "hu": [
        "Villány volt az ország els�? borvidéke, amely bevezette a védett eredetű borok rendszerét.",
        "A történelmi pincesor házai műemléki védettség alatt állnak.",
        "Itt rendezik meg minden évben a Villányi Vörösbor Fesztivált, a régió legnagyobb ünnepét.",
        "A villányi borok rendszeresen nyernek aranyérmeket a legfontosabb nemzetközi borversenyeken.",
        "A város határában található a Szársomlyó-hegy, amely különleges és ritka növényvilágáról híres."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für vollmundige Rotweine.", "Beliebtes Ziel für Weintourismus."], "hu": ["Testes vörösborairól ismert.", "Népszerű borturisztikai célpont."], "ro": ["Cunoscut pentru vinurile ro�?ii corpolente.", "Destina�?ie popular�? pentru turismul viticol."], "en": ["Known for full-bodied red wines.", "Popular destination for wine tourism."]},
  },
  {
    id: "kecskemet",
    type: "city",
    parent: "HU-BK",
    coords: [19.6913, 46.9062],
    name: {"de": "Kecskemét", "hu": "Kecskemét", "ro": "Kecskemét", "en": "Kecskemét"},
    image: "/geo-images/hungary/kecskemet.webp",
    description: {
      "de": "Kecskemét, im Herzen der ungarischen Tiefebene gelegen, ist berühmt für seine prächtige Jugendstilarchitektur und seine Obstgärten. Die Stadt ist der Geburtsort des Kompunisten Zoltán Kodály und beherbergt das renommierte Kodály-Institut. Das Stadtbild wird von farbenfrohen Gebäuden wie dem Cifra-Palast und dem Rathaus geprägt. Kecskemét ist zudem weltbekannt für seinen Aprikosenschnaps (Barackpálinka) und ist ein wichtiges Zentrum der ungarischen Lebensmittelindustrie und Automobilproduktion.",
      "hu": "Kecskemét, az Alföld szívében fekv�? város, híres pompás szecessziós építészetér�?l és gyümölcsöskertjeir�?l. A város Kodály Zoltán zeneszerz�? szül�?helye, és itt található a neves Kodály Intézet is. A városképet olyan színes épületek határozzák meg, mint a Cifra Palota és a Városháza. Kecskemét világszerte ismert a barackpálinkájáról, emellett a magyar élelmiszeripar és autógyártás egyik meghatározó központja.",
      "ro": "Kecskemét, situat în inima Marii Câmpii Maghiare, este renumit pentru arhitectura sa Art Nouveau magnific�? �?i livezile sale. Ora�?ul este locul de na�?tere al compozitorului Zoltán Kodály �?i g�?zduie�?te renumitul Institut Kodály. Aspectul ora�?ului este definit de cl�?diri colorate precum Palatul Cifra �?i Prim�?ria. Kecskemét este, de asemenea, cunoscut în întreaga lume pentru rachiul s�?u de caise (Barackpálinka) �?i este un centru important al industriei alimentare �?i al produc�?iei auto.",
      "en": "Kecskemét, located in the heart of the Great Hungarian Plain, is famous for its magnificent Art Nouveau architecture and its orchards. The city is the birthplace of composer Zoltán Kodály and home to the renowned Kodály Institute. The cityscape is defined by colorful buildings such as the Cifra Palace and the City Hall. Kecskemét is world-famous for its apricot brandy (Barackpálinka) and is a major center for the Hungarian food industry and automotive production."
    },
    descriptionAdvanced: {
      "de": "Kecskemét, bekannt als die ",
      "hu": "Kecskemét, a 'hírös város' az Alföld szívében, Bács-Kiskun vármegye székhelye, amely lenyűgöz�? szecessziós építészetér�?l és gazdag kulturális életér�?l híres. A város f�?tere egyedülálló építészeti együttes, ahol a Cifrapalota színes kerámiái és a Városháza monumentális tömbje varázsolja el a látogatókat. Kecskemét a magyar zenei nevelés és képz�?művészet egyik központja, Kodály Zoltán szül�?városaként világszerte ismerik a Kodály-módszert. A város környéke, a Kiskunság pusztai világa és a híres kecskeméti barackpálinka a magyar hagyományok legjavát kínálja. Kecskemét ma modern ipari központ is, ahol a hagyomány és a csúcstechnológia harmonikusan él egymás mellett.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Rathaus von Kecskemét besitzt ein Glockenspiel, das klassische Melodien spielt.", "Die Stadt beherbergt das Museum für Ungarische Naive Kunst.", "Kecskemét ist das Zentrum der ungarischen Obstverarbeitung und Pálinka-Herstellung.", "Der Cifrapalota ist ein Meisterwerk des ungarischen Jugendstils."],
      "hu": [
        "Kecskemét Városházája a magyar szecesszió egyik legszebb alkotása, Lechner �?dön tervezte.",
        "A Cifrapalota homlokzatát a pécsi Zsolnay-gyár színes majolikái díszítik.",
        "Itt született Kodály Zoltán, a világhírű zeneszerz�? és zenepedagógus.",
        "Kecskemét híres a baracktermesztésér�?l és a világszerte elismert kecskeméti barackpálinkáról.",
        "A várostól nem messze található a Kiskunsági Nemzeti Park, az ország egyik legfontosabb természetvédelmi területe."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Achtgrö�?te Stadt Ungarns und Sitz des Komitats Bács-Kiskun.",
        "Der Cifra-Palast ist ein Meisterwerk des ungarischen Jugendstils.",
        "Heimat des Mercedes-Benz Werks in Ungarn.",
        "Das Kodály-Institut ist ein weltweit anerkanntes Zentrum für Musikpädagogik.",
        "Die Stadt veranstaltet regelmä�?ig das Animationsfilmfestival KAFF.",
        "Bekannt für den gro�?en Marktplatz und die vielfältigen Kirchen.",
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
        "Ismert a tágas f�?terér�?l és változatos templomairól.",
        "Az alföldi zöldség- és gyümölcstermesztés egyik legfontosabb központja."
      ],
      "ro": [
        "Al optulea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Bács-Kiskun.",
        "Faimos pentru rachiul de caise de Kecskemét (Barackpálinka).",
        "Palatul Cifra este o capodoper�? a stilului Art Nouveau maghiar.",
        "G�?zduie�?te fabrica Mercedes-Benz din Ungaria.",
        "Institutul Kodály este un centru de pedagogie muzical�? recunoscut mondial.",
        "Ora�?ul g�?zduie�?te regulat festivalul de film de anima�?ie KAFF.",
        "Cunoscut pentru pia�?a sa central�? mare �?i bisericile diverse.",
        "Centru important pentru cultivarea fructelor �?i legumelor în Câmpia Maghiar�?."
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
  },
  {
    id: "kalocsa",
    type: "city",
    parent: "HU-BK",
    coords: [18.9803, 46.5297],
    name: {"de": "Kollotschau", "hu": "Kalocsa", "ro": "Kalocsa", "en": "Kalocsa"},
    image: "/geo-images/hungary/kalocsa.webp",
    description: {"de": "Eine der ältesten Städte Ungarns, berühmt für Paprika und Volkskunst.", "hu": "Magyarország egyik legrégebbi városa, híres a paprikáról és a népművészetr�?l.", "ro": "Unul dintre cele mai vechi ora�?e din Ungaria, faimos pentru boia �?i arta popular�?.", "en": "One of the oldest cities in Hungary, famous for paprika and folk art."},
    descriptionAdvanced: {
      "de": "Kalocsa, eine der ältesten Städte Ungarns am linken Ufer der Donau, ist weltberühmt für zwei Dinge: Paprika und Stickereien. Die Stadt ist ein bedeutender Erzbischofssitz mit einer prachtvollen barocken Kathedrale und einer wertvollen Diözesanbibliothek. Besucher können im Paprikamuseum alles über den Anbau und die Verarbeitung des ",
      "hu": "Kalocsa Magyarország egyik legrégebbi városa a Duna mentén, amely több mint ezer éve az ország egyik legfontosabb vallási és kulturális központja. Az érseki székhely monumentális F�?székesegyháza és az �?rseki Palota könyvtára felbecsülhetetlen értékeket �?riz. Kalocsa azonban nemcsak a hitr�?l, hanem a színekr�?l is szól: világhírű a kalocsai fűszerpaprika, amely az ország 'piros aranya', valamint a színpompás kalocsai hímzés és falpingálás, amely az UNESCO szellemi örökség része. A városban sétálva lépten-nyomon találkozhatunk a népművészet él�? hagyományaival és a pusztai vendégszeretettel, ami Kalocsát a magyar identitás egyik legfontosabb �?rz�?helyévé teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kalocsa ist seit der Zeit des Heiligen Stephan ein bedeutender Erzbischofssitz.", "Die Stadt gilt als die 'Hauptstadt des Paprikas' in Ungarn.", "Die Kalocsaer Volkskunst mit ihren bunten Blumenmustern ist weltweit bekannt.", "In der Stadt befindet sich ein einzigartiges Porzellanmuseum."],
      "hu": [
        "Kalocsa az ország egyik legrégebbi püspöksége, amelyet Szent István király alapított 1001-ben.",
        "A kalocsai népművészet (hímzés, pingálás) 2012-ben került fel az UNESCO szellemi örökség listájára.",
        "Itt található a Paprika Múzeum, amely bemutatja a kalocsai paprika termesztésének történetét.",
        "Az �?rseki Könyvtárban látható egy 11. századi Biblia és számos középkori kódex.",
        "A város híres rendezvénye a Kalocsai Paprikafesztivál, amelyet minden �?sszel megtartanak."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Zentrum des ungarischen Paprikaanbaus.", "Sitz eines Erzbistums."], "hu": ["A magyar paprikatermesztés központja.", "�?rseki székhely."], "ro": ["Centrul cultiv�?rii boielei maghiare.", "Sediul unei arhiepiscopii."], "en": ["Center of Hungarian paprika cultivation.", "Seat of an archbishopric."]},
  },
  {
    id: "kiskunmajsa",
    type: "city",
    parent: "HU-BK",
    coords: [19.7381, 46.4919],
    name: {"de": "Kiskunmajsa", "hu": "Kiskunmajsa", "ro": "Kiskunmajsa", "en": "Kiskunmajsa"},
    image: "/geo-images/hungary/kiskunmajsa.webp",
    description: {"de": "Kleinstadt in der Gro�?en Tiefebene, bekannt für ihr Thermalbad.", "hu": "Alföldi kisváros, termálfürd�?jér�?l ismert.", "ro": "Mic ora�? în Marea Câmpie, cunoscut pentru baia sa termal�?.", "en": "Small town in the Great Plain, known for its thermal bath."},
    descriptionAdvanced: {
      "de": "Kiskunmajsa ist ein aufstrebender Kurort in der ungarischen Tiefebene, bekannt für sein weitläufiges Jonathermál Heil- und Erlebnisbad. Das Thermalwasser der Region wurde in den 1980er Jahren entdeckt und zieht seither Erholungssuchende an, die Linderung bei Gelenk- und Wirbelsäulenbeschwerden suchen. Die Stadt bewahrt zudem das Erbe der ungarischen Revolution von 1956 in einem beeindruckenden Gedenkmuseum, das landesweit einzigartig ist. Die umliegende Puszta-Landschaft lädt zu ausgiebigen Ausritten und Kutschfahrten ein, die die ursprüngliche Lebensweise der Kiskunság-Region vermitteln. Kiskunmajsa bietet eine ideale Kombination aus gesundheitlicher Erholung, historischem Gedenken und Naturerlebnis.",
      "hu": "Kiskunmajsa a Kiskunság szívében fekv�? dinamikus fürd�?város, amely leginkább a Jonathermál Gyógy- és �?lményfürd�?jér�?l ismert. A város turizmusa a feltör�? gyógyvízre épül, amely kiválóan alkalmas mozgásszervi és reumás panaszok enyhítésére, s tágas medencéivel a családok kedvelt üdül�?helye. Kiskunmajsa azonban történelmi emlékezetében is jelent�?s: itt található az ország egyetlen 1956-os Múzeuma, amely a forradalom és szabadságharc vidéki eseményeinek állít emléket. A város határában a pusztai táj nyugalma, az �?sborókás és a hagyományos tanyasi világ várja a természet és a nyugalom kedvel�?it. Kiskunmajsa a gyógyulás, a pihenés és a történelmi emlékezet különleges találkozóhelye az Alföldön.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Jonathermál-Bad in Kiskunmajsa ist für seine familienfreundliche Atmosphäre bekannt.", "Die Stadt beherbergt das einzige 1956er Revolutionsmuseum auf dem Land in Ungarn.", "In der Umgebung befinden sich geschützte Salzseen mit einer seltenen Flora und Fauna.", "Kiskunmajsa ist ein wichtiges Zentrum für den ländlichen Tourismus in der Tiefebene."],
      "hu": [
        "A kiskunmajsai gyógyvíz 72 fokos h�?mérsékleten tör fel a föld mélyéb�?l.",
        "Az 1956-os Múzeumot Pongrátz Gergely, a forradalom egyik h�?se alapította a városban.",
        "A római katolikus templom barokk épülete a város egyik legszebb műemléke.",
        "Kiskunmajsa híres a sörfesztiváljáról és a hagyományos pusztai lovasnapokról.",
        "A város határában található kiterjedt erd�?k és szikes tavak gazdag madárvilágnak adnak otthont."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beliebtes Ziel für Kururlauber.", "Liegt in der Region Kiskunság."], "hu": ["Népszerű célpont a gyógyulni vágyók körében.", "A Kiskunság régióban fekszik."], "ro": ["Destina�?ie popular�? pentru turi�?tii de spa.", "Situat în regiunea Kiskunság."], "en": ["Popular destination for spa tourists.", "Located in the Kiskunság region."]},
  },
  {
    id: "bekescsaba",
    type: "city",
    parent: "HU-BE",
    coords: [21.0978, 46.6797],
    name: {"de": "Tschaba", "hu": "Békéscsaba", "ro": "Bichi�?ciaba", "en": "Békéscsaba"},
    image: "/geo-images/hungary/bekescsaba.webp",
    description: {
      "de": "Békéscsaba, im Südosten Ungarns gelegen, ist weltberühmt für seine kulinarischen Traditionen, insbesondere für die Csabai-Wurst. Die Stadt ist das kulturelle Zentrum der slowakischen Minderheit in Ungarn und besticht durch ihre ruhige Atmosphäre und die weiten Plätze. Besucher können das Munkácsy-Mihály-Museum besuchen, das dem berühmten ungarischen Maler gewidmet ist, oder das jährliche Wurstfestival erleben, das Tausende von Gästen anzieht. Die Umgebung bietet zudem ideale Bedingungen für Landwirtschaft und Naturtourismus.",
      "hu": "Békéscsaba, Magyarország délkeleti részén fekszik, és világszerte híres gasztronómiai hagyományairól, különösen a csabai kolbászról. A város a magyarországi szlovák kisebbség kulturális központja, amely nyugodt hangulatával és tágas tereivel vonzza a látogatókat. A látogatók megtekinthetik a Munkácsy Mihály Múzeumot, amely a híres fest�?művész emlékét �?rzi, vagy ellátogathatnak az évente megrendezett Kolbászfesztiválra. A környék emellett kiváló feltételeket kínál a mez�?gazdaság és a természetjárás számára.",
      "ro": "Békéscsaba, situat în sud-estul Ungariei, este renumit în întreaga lume pentru tradi�?iile sale culinare, în special pentru cârnatul Csabai. Ora�?ul este centrul cultural al minorit�?�?ii slovace din Ungaria �?i impresioneaz�? prin atmosfera sa lini�?tit�? �?i pie�?ele largi. Vizitatorii pot vizita Muzeul Munkácsy Mihály, dedicat faimosului pictor maghiar, sau pot experimenta festivalul anual al cârna�?ilor, care atrage mii de oaspe�?i. �?mprejurimile ofer�?, de asemenea, condi�?ii ideale pentru agricultur�? �?i turism în natur�?.",
      "en": "Békéscsaba, located in southeastern Hungary, is world-famous for its culinary traditions, particularly the Csabai sausage. The city serves as the cultural center for the Slovak minority in Hungary and charms visitors with its peaceful atmosphere and wide squares. Visitors can explore the Munkácsy Mihály Museum, dedicated to the famous Hungarian painter, or experience the annual Sausage Festival, which attracts thousands of guests. The surrounding area also offers excellent conditions for agriculture and nature tourism."
    },
    descriptionAdvanced: {
      "de": "Békéscsaba, das Zentrum des Komitats Békés, ist weit über Ungarn hinaus für seine kulinarischen Traditionen bekannt, insbesondere für die berühmte Békéscsabaer Wurst. Die Stadt blickt auf eine reiche Geschichte zurück, die eng mit der Ansiedlung slowakischer Kolonisten im 18. Jahrhundert verbunden ist, was sich noch heute in der Kultur und Architektur widerspiegelt. Das Munkácsy-Museum würdigt das Werk des weltberühmten Malers Mihály Munkácsy, der seine Jugend in der Stadt verbrachte. Jährlich im Herbst lockt das Wurstfestival Zehntausende Besucher an, die die gastronomische Vielfalt der Region feiern. Békéscsaba ist zudem eine Stadt der Brücken, da der idyllische �?l�?víz-Kanal das gesamte Stadtzentrum durchzieht und zu entspannten Spaziergängen einlädt.",
      "hu": "Békéscsaba az Alföld délkeleti részén fekv�? város, Békés vármegye székhelye, amely leginkább világhírű kolbászáról és gazdag evangélikus hagyományairól ismert. A város arculatát a 18. században ide települt szlovákok kultúrája és a polgári fejl�?dés határozta meg, amit az impozáns evangélikus Nagytemplom �?? Közép-Európa legnagyobb evangélikus temploma �?? is hirdet. Békéscsaba a magyar gasztronómia egyik fellegvára, a minden évben megrendezett Csabai Kolbászfesztivál az ország egyik legnagyobb turisztikai eseménye. A város kulturális életét a Munkácsy Mihály Múzeum és a Jókai Színház teszi teljessé, míg a környez�? folyók és erd�?k kiváló lehet�?séget adnak a természetközeli kikapcsolódásra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Békéscsabaer Wurstfestival ist eines der grö�?ten gastronomischen Ereignisse Mitteleuropas.", "Die evangelische Kirche von Békéscsaba ist die grö�?te ihrer Art in ganz Ungarn.", "Der Maler Mihály Munkácsy verbrachte hier seine prägenden Jahre.", "Die Stadt ist bekannt für ihre erstklassige Geflügelzucht und landwirtschaftlichen Produkte."],
      "hu": [
        "A békéscsabai evangélikus Nagytemplom Magyarország és Közép-Európa legnagyobb ilyen felekezetű temploma.",
        "A Csabai kolbász 2013 óta Hungarikum min�?sítéssel rendelkezik.",
        "Munkácsy Mihály, a világhírű fest�?művész itt töltötte asztalosinas éveit, s a múzeum �?rzi hagyatékát.",
        "A város híres szülötte Kodály Zoltán és Arany János barátja, a fest�? Pósteleki kastély is a közelben van.",
        "Békéscsaba az ország egyik legfontosabb röplabda- és sportközpontja."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Békés.",
        "Heimat der Csabai-Wurst, eines Hungarikums.",
        "Das Békéscsabaer Wurstfestival ist eines der grö�?ten kulinarischen Events Ungarns.",
        "Das Munkácsy-Mihály-Museum beherbergt die weltweit grö�?te Sammlung seiner Werke.",
        "Wichtiges Zentrum der slowakischen Kultur in Ungarn.",
        "Die Stadt hat eine der grö�?ten evangelischen Kirchen Mitteleuropas.",
        "Bekannt für die Textilindustrie und Lebensmittelverarbeitung.",
        "Beliebtes Ziel für Radtouristen in der flachen Tiefebene."
      ],
      "hu": [
        "Békés vármegye székhelye.",
        "A csabai kolbász, mint Hungarikum hazája.",
        "A Csabai Kolbászfesztivál Magyarország egyik legnagyobb gasztronómiai eseménye.",
        "A Munkácsy Mihály Múzeum �?rzi a fest�?művész legnagyobb gyűjteményét a világon.",
        "A magyarországi szlovák kultúra fontos központja.",
        "Itt található Közép-Európa egyik legnagyobb evangélikus temploma.",
        "Híres a textiliparáról és az élelmiszer-feldolgozásáról.",
        "Népszerű úti cél a kerékpáros turisták számára az Alföldön."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Békés.",
        "Casa cârnatului Csabai, un produs de tip 'Hungarikum'.",
        "Festivalul Cârna�?ilor din Békéscsaba este unul dintre cele mai mari evenimente culinare.",
        "Muzeul Munkácsy Mihály g�?zduie�?te cea mai mare colec�?ie a operelor sale din lume.",
        "Centru important al culturii slovace din Ungaria.",
        "Ora�?ul are una dintre cele mai mari biserici evanghelice din Europa Central�?.",
        "Cunoscut pentru industria textil�? �?i prelucrarea alimentelor.",
        "Destina�?ie popular�? pentru cicloturi�?ti în zona de câmpie."
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
  },
  {
    id: "gyula",
    type: "city",
    parent: "HU-BE",
    coords: [21.2811, 46.6447],
    name: {"de": "Jula", "hu": "Gyula", "ro": "Jula", "en": "Gyula"},
    image: "/geo-images/hungary/gyula.webp",
    description: {"de": "Historische Kurstadt nahe der rumänischen Grenze.", "hu": "Történelmi fürd�?város a román határ közelében.", "ro": "Ora�? balnear istoric aproape de grani�?a cu România.", "en": "Historic spa town near the Romanian border."},
    descriptionAdvanced: {
      "de": "Gyula, an der Grenze zu Rumänien im Südosten Ungarns gelegen, ist eine Stadt von historischer Eleganz und heilender Kraft. Das Wahrzeichen der Stadt ist die einzige vollständig erhaltene mittelalterliche Backsteinburg in ganz Mitteleuropa, die am Ufer eines idyllischen Sees thront. Direkt neben der Burg befindet sich das Gyulaer Burgbad, eines der schönsten Heilbäder Ungarns, das in dem weitläufigen Park des einstigen Almásy-Schlosses angelegt wurde. Das Almásy-Schloss selbst ist heute ein interaktives Besucherzentrum, das faszinierende Einblicke in das Leben des ungarischen Adels und ihrer Bediensteten bietet. Gyula ist zudem die Geburtsstadt des Komponisten Ferenc Erkel, dem Schöpfer der ungarischen Nationalhymne, dessen Erbe in der ganzen Stadt gepflegt wird.",
      "hu": "Gyula a dél-alföldi régió egyik legszebb és leglátogatottabb történelmi városa, amely különleges középkori hangulatával és világhírű várfürd�?jével bűvöli el a látogatókat. A város ékköve a gyulai vár, amely Közép-Európa egyetlen épségben maradt gótikus síkvára, s falaiban ma várjátékok és múzeum repít vissza a múltba. Közvetlenül a vár mellett terül el az egykori Almásy-kastély parkjában a Gyulai Várfürd�?, amely gyógyvize és modern élménymedencéi révén az ország egyik legnépszerűbb pihen�?helye. Gyula rendezett parkjai, szök�?kútjai és híres cukrászdái (mint a Százéves cukrászda) a békebeli kisvárosi eleganciát ötvözik a modern turisztikai kínálattal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Gyula ist die am besten erhaltene gotische Backsteinburg in Mitteleuropa.", "Das Burgbad verfügt über ein einzigartiges Heilwasser mit hohem Mineralstoffgehalt.", "In Gyula wurde Ferenc Erkel, der Komponist der ungarischen Nationalhymne, geboren.", "Das 'Hundertjährige Kaffeehaus' der Stadt ist eine der ältesten Konditoreien Ungarns."],
      "hu": [
        "A gyulai vár 24 szobából álló múzeuma a 15. századi végvári életet mutatja be.",
        "A Gyulai Várfürd�? az Almásy-kastély 8,5 hektáros természetvédelmi parkjában található.",
        "Itt található Magyarország második legrégebbi cukrászdája, a híres Százéves cukrászda.",
        "Gyula híres szülötte Erkel Ferenc, a magyar nemzeti opera megteremt�?je és a Himnusz zeneszerz�?je.",
        "A várost átszeli az �?l�?víz-csatorna, amely hangulatos sétányokat és csónakázási lehet�?séget biztosít."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für das Burgbad.", "Die Burg Gyula ist die einzige intakte Ziegelburg Mitteleuropas."], "hu": ["A Várfürd�?r�?l ismert.", "A gyulai vár Közép-Európa egyetlen épen maradt téglavára."], "ro": ["Cunoscut pentru Baia Cet�?�?ii.", "Cetatea Gyula este singura cetate de c�?r�?mid�? intact�? din Europa Central�?."], "en": ["Known for the Castle Bath.", "Gyula Castle is the only intact brick castle in Central Europe."]},
  },
  {
    id: "szarvas",
    type: "city",
    parent: "HU-BE",
    coords: [20.55, 46.8667],
    name: {"de": "Szarvas", "hu": "Szarvas", "ro": "Szarvas", "en": "Szarvas"},
    image: "/geo-images/hungary/szarvas.webp",
    description: {"de": "Stadt am Fluss Körös, bekannt für ihr Arboretum.", "hu": "Körös-parti város, arborétumáról ismert.", "ro": "Ora�? pe râul Körös, cunoscut pentru arboretul s�?u.", "en": "City on the Körös river, known for its arboretum."},
    descriptionAdvanced: {
      "de": "Szarvas, im Herzen der ungarischen Tiefebene am Ufer der Körös gelegen, ist ein Juwel der Natur und Bildung. Die Stadt beherbergt das Pepi-Garten-Arboretum, einen der bedeutendsten botanischen Gärten des Landes mit einer beeindruckenden Vielfalt an seltenen Pflanzenarten aus aller Welt. Inmitten des Arboretums befindet sich das Mini-Ungarn-Modellpark, in dem man die wichtigsten Sehenswürdigkeiten des historischen Ungarns im Miniaturformat bewundern kann. Szarvas markiert zudem den geografischen Mittelpunkt des historischen Königreichs Ungarn, an den ein markantes Denkmal in Form einer Windmühle erinnert. Die unberührten Ufer der Körös bieten ideale Bedingungen für Angler, Kanufahrer und Naturliebhaber, die die Ruhe der ungarischen Landschaft suchen.",
      "hu": "Szarvas a Hármas-Körös partján fekv�? hangulatos kisváros, amelyet gyakran az Alföld ékköveként emlegetnek természeti szépségei és kulturális kincsei miatt. Legfontosabb látnivalója a Szarvasi Arborétum (Pepi-kert), Magyarország egyik legnagyobb és legszebb növénygyűjteménye, ahol több mint 1600 növényfaj található. Közvetlenül mellette fekszik a Mini Magyarország makettpark, amely interaktív módon mutatja be az ország legszebb épületeit. Szarvas történelmi jelent�?ségét adja, hogy itt található a történelmi Magyarország földrajzi középpontja is. A folyóparti sétányok, a vízi színház és a környez�? vizek vadregényes tájai Szarvast a természetjárók és a családosok egyik kedvenc magyarországi célpontjává teszik.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Arboretum von Szarvas (Pepi-Garten) beherbergt über 1.600 verschiedene Baumarten.", "Das Mini-Ungarn-Modellland zeigt über 50 detailgetreue Nachbildungen historischer Gebäude.", "Szarvas liegt am geografischen Mittelpunkt des einstigen Gro�?ungarns.", "Die Stadt ist ein wichtiges Zentrum für die Erforschung der Sü�?wasserfischerei."],
      "hu": [
        "A Szarvasi Arborétumot gróf Bolza Pál alapította a 19. század végén.",
        "Szarvason található a történelmi Magyarország földrajzi középpontját jelz�? emlékmű.",
        "A Szarvasi Vízi Színház az ország egyik leglátványosabb szabadtéri színpada a Holt-Körös partján.",
        "Itt működik az ország egyik legjelent�?sebb öntözési és haltenyésztési kutatóintézete.",
        "A Holt-Körös partján található Bolza-kastély a város egyik legszebb klasszicista épülete."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Arboretum Szarvas ist das grö�?te in Ungarn.", "Hier befindet sich das geografische Zentrum des historischen Ungarns."], "hu": ["A Szarvasi Arborétum a legnagyobb Magyarországon.", "Itt található a történelmi Magyarország földrajzi középpontja."], "ro": ["Arboretul Szarvas este cel mai mare din Ungaria.", "Aici se afl�? centrul geografic al Ungariei istorice."], "en": ["The Szarvas Arboretum is the largest in Hungary.", "The geographical center of historical Hungary is located here."]},
  },
  {
    id: "miskolc",
    type: "city",
    parent: "HU-BZ",
    coords: [20.79, 48.1],
    name: {"de": "Mischkolz", "hu": "Miskolc", "ro": "Miskolc", "en": "Miskolc"},
    image: "/geo-images/hungary/miskolc.webp",
    description: {
      "de": "Miskolc, die viertgrö�?te Stadt Ungarns, liegt im Nordosten des Landes am östlichen Rand des Bükk-Gebirges. Die Stadt ist ein bedeutendes Industriezentrum, hat sich aber auch zu einem beliebten Touristenziel entwickelt. Besonders bekannt ist der Stadtteil Miskolctapolca mit seinem einzigartigen Höhlenbad, dessen Thermalwasser in natürlichen Kalksteinhöhlen flie�?t. Die historische Burg Diósgy�?r und die malerische Umgebung von Lillafüred mit dem Hámori-See machen Miskolc zu einem vielseitigen Reiseziel.",
      "hu": "Miskolc, Magyarország negyedik legnagyobb városa, az ország északkeleti részén, a Bükk-hegység keleti lábánál fekszik. A város jelent�?s ipari központ, de az utóbbi id�?ben népszerű turisztikai célponttá is vált. Különösen híres Miskolctapolca városrésze az egyedülálló Barlangfürd�?vel, ahol a termálvíz természetes mészk�?barlangokban folyik. A történelmi Diósgy�?ri vár és Lillafüred fest�?i környéke a Hámori-tóval Miskolcot sokoldalú úti céllá teszi.",
      "ro": "Miskolc, al patrulea ora�? ca m�?rime din Ungaria, este situat în nord-estul �?�?rii, la marginea estic�? a mun�?ilor Bükk. Ora�?ul este un centru industrial important, dar s-a dezvolat �?i ca o destina�?ie turistic�? popular�?. Este deosebit de faimos cartierul Miskolctapolca cu baia sa unic�? în pe�?ter�?, unde apa termal�? curge în pe�?teri naturale de calcar. Cetatea istoric�? Diósgy�?r �?i împrejurimile pitore�?ti din Lillafüred, cu lacul Hámori, fac din Miskolc o destina�?ie versatil�?.",
      "en": "Miskolc, the fourth largest city in Hungary, is located in the northeastern part of the country at the eastern edge of the Bükk Mountains. While a major industrial center, the city has also evolved into a popular tourist destination. It is particularly famous for the Miskolctapolca district and its unique Cave Bath, where thermal water flows through natural limestone caverns. The historic Diósgy�?r Castle and the picturesque area of Lillafüred with Lake Hámori make Miskolc a diverse travel destination."
    },
    descriptionAdvanced: {
      "de": "Miskolc, am östlichen Rand des Bükk-Gebirges gelegen, ist die viertgrö�?te Stadt Ungarns und ein Tor zu spektakulären Naturwundern. Die Stadt hat eine lange industrielle Tradition, wandelt sich aber zunehmend zu einem Zentrum für Tourismus und Kultur. Das absolute Highlight ist das Höhlenbad von Miskolctapolca, ein in Europa einzigartiges Thermalbad in natürlichen Höhlengängen. Ebenfalls sehenswert ist die mittelalterliche Burg Diósgy�?r, die einst eine Lieblingsresidenz ungarischer Königinnen war und heute durch moderne Rekonstruktionen beeindruckt. Der Stadtteil Lillafüred mit seinem malerischen Hámori-See und den Wasserfällen gilt als einer der romantischsten Orte des Landes.",
      "hu": "Miskolc Magyarország egyik legnagyobb városa és �?szak-Magyarország gazdasági, kulturális központja, amely a Bükk-hegység lábánál fekszik. A város arculatát az egykori nehézipar és a természeti kincsek különleges találkozása határozza meg. Legfontosabb turisztikai vonzereje a miskolctapolcai Barlangfürd�?, ahol Európában egyedülálló módon természetes karsztjáratokban fürödhetnek a látogatók. Miskolchoz tartozik a fest�?i Lillafüred a Palotaszállóval és a Hámori-tóval, valamint a középkori diósgy�?ri vár, amely a magyar királynék jegyajándéka volt. A város pezsg�? kulturális életét a Miskolci Nemzeti Színház és a nemzetközi operafesztivál teszi teljessé, miközben a Bükk erd�?i a természetjárók paradicsomát kínálják.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Miskolctapolca beherbergt ein Thermalbad, das in einem natürlichen Höhlensystem angelegt wurde.", "Die Burg Diósgy�?r war im Mittelalter traditionell der Witwensitz der ungarischen Königinnen.", "Der Stadtteil Lillafüred ist bekannt für seinen terrassenförmig angelegten Hängegarten und Wasserfälle.", "Das Nationale Theater von Miskolc war das erste Theatergebäude aus Stein im heutigen Ungarn."],
      "hu": [
        "Miskolctapolcán található Európa egyetlen természetes barlangfürd�?je.",
        "A diósgy�?ri vár volt a középkori Magyarország egyik legjelent�?sebb lovagvára.",
        "A Miskolci Nemzeti Színház az ország legrégebbi k�?színháza, 1823-ban nyílt meg.",
        "Lillafüreden található Magyarország legmagasabb függ�?leges vízesése (20 méter).",
        "Az avasi kilátóból lenyűgöz�? panoráma nyílik az egész városra és a Bükk vonulataira."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Viertgrö�?te Stadt Ungarns und Sitz des Komitats Borsod-Abaúj-Zemplén.",
        "Das Höhlenbad in Miskolctapolca ist europaweit einzigartig.",
        "Die Burg Diósgy�?r war einst eine bedeutende Residenz ungarischer Königinnen.",
        "Lillafüred bietet einen der schönsten Wasserfälle und ein Schlosshotel.",
        "Die Universität Miskolc ist ein wichtiges Zentrum für Technik und Bergbau.",
        "Das Miskolcer Opernfestival ist ein bedeutendes kulturelles Ereignis.",
        "Das Bükk-Gebirge bietet zahlreiche Wanderwege und Höhlen in der Nähe.",
        "Die Stadt hat eine lange Tradition in der Schwerindustrie und Metallurgie."
      ],
      "hu": [
        "Magyarország negyedik legnagyobb városa és Borsod-Abaúj-Zemplén vármegye székhelye.",
        "A miskolctapolcai Barlangfürd�? Európa-szerte egyedülálló látványosság.",
        "A Diósgy�?ri vár egykor a magyar királynék kedvelt rezidenciája volt.",
        "Lillafüred az ország egyik legszebb vízesésével és egy kastélyszállóval várja a látogatókat.",
        "A Miskolci Egyetem a műszaki és bányászati képzés fontos központja.",
        "A Miskolci Operafesztivál jelent�?s kulturális esemény a régióban.",
        "A Bükk-hegység számos túraútvonalat és barlangot kínál a közelben.",
        "A város hosszú múltra tekint vissza a nehézipar és a kohászat területén."
      ],
      "ro": [
        "Al patrulea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Borsod-Abaúj-Zemplén.",
        "Baia în pe�?ter�? din Miskolctapolca este unic�? în Europa.",
        "Cetatea Diósgy�?r a fost odat�? o re�?edin�?�? important�? a reginelor maghiare.",
        "Lillafüred ofer�? una dintre cele mai frumoase cascade �?i un hotel castel.",
        "Universitatea din Miskolc este un centru important pentru tehnic�? �?i minerit.",
        "Festivalul de Oper�? din Miskolc este un eveniment cultural semnificativ.",
        "Mun�?ii Bükk ofer�? numeroase trasee de drume�?ie �?i pe�?teri în apropiere.",
        "Ora�?ul are o lung�? tradi�?ie în industria grea �?i metalurgie."
      ],
      "en": [
        "Fourth largest city in Hungary and the seat of Borsod-Abaúj-Zemplén County.",
        "The Cave Bath in Miskolctapolca is unique in Europe.",
        "Diósgy�?r Castle was once a significant residence for Hungarian queens.",
        "Lillafüred features one of the most beautiful waterfalls and a castle hotel.",
        "The University of Miskolc is a major center for engineering and mining.",
        "The Miskolc Opera Festival is a prominent cultural event.",
        "The Bükk Mountains offer numerous hiking trails and caves nearby.",
        "The city has a long-standing tradition in heavy industry and metallurgy."
      ]
    },
  },
  {
    id: "szerencs",
    type: "city",
    parent: "HU-BZ",
    coords: [21.2053, 48.1631],
    name: {"de": "Szerencs", "hu": "Szerencs", "ro": "Szerencs", "en": "Szerencs"},    description: {"de": "Das 'Tor zu Tokaj', bekannt für seine Schokoladenfabrik.", "hu": "A 'Tokaji kapu', csokoládégyáráról ismert.", "ro": "'Poarta c�?tre Tokaj', cunoscut pentru fabrica sa de ciocolat�?.", "en": "The 'Gateway to Tokaj', known for its chocolate factory."},
    descriptionAdvanced: {
      "de": "Szerencs gilt als das ",
      "hu": "Szerencs a Zempléni-hegység déli kapujánál fekv�? történelmi város, amelyet gyakran a 'csokoládé városaként' is emlegetnek a nagy múltú édességgyártása miatt. A település legfontosabb műemléke a reneszánsz stílusú Rákóczi-vár, amely egykor a híres erdélyi fejedelmi család birtoka volt, s ma kulturális központként működik. A vár falai között kapott helyet a Zempléni Múzeum, amely világhírű képeslapgyűjteményér�?l és cukoripari kiállításáról nevezetes. Szerencs a Tokaji borvidék kapuja is, így a környék kiváló borai is hozzátartoznak a város kínálatához. A rendezett parkok, a várkert tava és a csokoládé illata egyedülálló, barátságos hangulatot kölcsönöz a településnek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szerencs war im 17. Jahrhundert ein wichtiger Stützpunkt der Rákóczi-Fürsten.", "Die Stadt ist landesweit bekannt für ihre historische Schokoladenproduktion.", "Jährlich findet in Szerencs das grö�?te Schokoladenfestival Ungarns statt.", "Die Stadt dient als wichtiger Knotenpunkt und Eingangstor zur Weinregion Tokaj."],
      "hu": [
        "1605-ben a szerencsi várban választották Magyarország fejedelmévé Bocskai Istvánt.",
        "A Zempléni Múzeum képeslapgyűjteménye az egyik legnagyobb ilyen jellegű gyűjtemény a világon.",
        "Szerencsen működött évtizedekig az ország egyik legjelent�?sebb cukorgyára.",
        "A városban minden évben megrendezik az Országos Csokoládé Fesztivált.",
        "A Rákóczi-vár udvara kiváló akusztikája miatt népszerű koncerthelyszín."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hat eine Burg aus der Renaissancezeit.", "Traditionelle Zucker- und Schokoladenproduktion."], "hu": ["Reneszánsz kori várral rendelkezik.", "Hagyományos cukor- és csokoládégyártás."], "ro": ["Are un castel din perioada Rena�?terii.", "Produc�?ie tradi�?ional�? de zah�?r �?i ciocolat�?."], "en": ["Has a Renaissance-era castle.", "Traditional sugar and chocolate production."]},
  },
  {
    id: "tokaj",
    type: "city",
    parent: "HU-BZ",
    coords: [21.4108, 48.1225],
    name: {"de": "Tokaj", "hu": "Tokaj", "ro": "Tokaj", "en": "Tokaj"},
    image: "/geo-images/hungary/tokaj.webp",
    description: {"de": "Zentrum der historischen Weinregion Tokaj, berühmt für Sü�?weine.", "hu": "A történelmi Tokaji borvidék központja, édes borairól híres.", "ro": "Centrul regiunii viticole istorice Tokaj, faimos pentru vinurile dulci.", "en": "Center of the historic Tokaj wine region, famous for sweet wines."},
    descriptionAdvanced: {
      "de": "Tokaj ist das Herz und der Namensgeber der berühmtesten Weinregion Ungarns, die zum UNESCO-Weltkulturerbe gehört. Am Zusammenfluss von Thei�? und Bodrog gelegen, herrscht hier ein besonderes Mikroklima, das die Produktion des edelsü�?en ",
      "hu": "Tokaj a világ els�? zárt borvidékének névadó városa a Tisza és a Bodrog találkozásánál, a magyar borászat és kultúra egyik legfontosabb szimbóluma. A vulkanikus kopasz-hegy lábánál fekv�? település hangulatos utcáival, patinás borospincéivel és a folyóparti panorámával varázsolja el a látogatókat. Tokaj világhírnevét a 'királyok borának' nevezett aszúnak köszönheti, amely a különleges mikroklíma és a vulkanikus talaj eredménye. A város 2002 óta az UNESCO Világörökség része mint kultúrtáj. A látogatókat a Világörökségi Bormúzeum, a neves pincészetek és a Bodrogon tehet�? hajótúrák várják, amelyek a min�?ségi pihenés és a nemes hagyományok élményét nyújtják.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Weinregion Tokaj wurde 2002 zum UNESCO-Weltkulturerbe erklärt.", "Der Tokaji Aszú wird oft als 'Wein der Könige und König der Weine' bezeichnet.", "Die Stadt liegt malerisch am Zusammenfluss der Flüsse Thei�? und Bodrog.", "Die labyrinthartigen Weinkeller der Stadt erstrecken sich über viele Kilometer unter der Erde."],
      "hu": [
        "A Tokaji borvidék 1737 óta a világ els�? zárt borvidéke, az UNESCO világörökség része.",
        "Itt készül a világhírű Tokaji Aszú, amelyet XIV. Lajos a 'borok királyának' nevezett.",
        "A város alatt kiterjedt, évszázados pincebirodalom húzódik, ahol a nemespenész borítja a falakat.",
        "Tokajnál találkozik a Bodrog és a Tisza folyó, ami népszerű horgász- és vízitúra-helyszín.",
        "A Bodrog-parti sétányról látható a Tokaji-hegy, amely a borvidék szimbolikus központja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Weinregion ist UNESCO-Welterbe.", "Heimat des Tokaji Aszú."], "hu": ["A borvidék UNESCO világörökség.", "A Tokaji Aszú hazája."], "ro": ["Regiunea viticol�? este în Patrimoniul Mondial UNESCO.", "Casa vinului Tokaji Aszú."], "en": ["The wine region is a UNESCO World Heritage site.", "Home of the Tokaji Aszú."]},
  },
  {
    id: "aggtelek",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.4547, 48.4719],
    name: {"de": "Aggtelek", "hu": "Aggtelek", "ro": "Aggtelek", "en": "Aggtelek"},    description: {"de": "Nationalpark, berühmt für sein ausgedehntes Tropfsteinhöhlensystem.", "hu": "Nemzeti park, kiterjedt cseppk�?barlang-rendszerér�?l híres.", "ro": "Parc na�?ional, faimos pentru sistemul s�?u extins de pe�?teri cu stalactite.", "en": "National park, famous for its extensive stalactite cave system."},
    descriptionAdvanced: {
      "de": "Aggtelek ist weltberühmt für das Baradla-Höhlensystem, das zusammen mit dem angrenzenden slowakischen Karst zum UNESCO-Weltkulturerbe gehört. Die Baradla-Höhle ist die grö�?te und beeindruckendste Tropfsteinhöhle Mitteleuropas mit faszinierenden Stalaktiten- und Stalagmitenformationen von gigantischen Ausma�?en. Die Höhle bietet zudem einen einzigartigen Konzertsaal mit einer Akustik, die Musiker und Zuhörer gleicherma�?en in Staunen versetzt. Aggtelek liegt in einem unberührten Nationalpark, der eine einzigartige Flora und Fauna sowie bizarre Karstlandschaften beheimatet. Es ist ein Paradies für Naturfreunde, Wanderer und alle, die in die mysteriöse Unterwelt der Natur eintauchen möchten.",
      "hu": "Aggtelek az �?szaki-középhegység északi részén fekv�? falu, amely világhírnevét a határában található Baradla-barlangnak köszönheti. Ez Közép-Európa leghosszabb és egyik leglátványosabb cseppk�?barlangja, amely az Aggteleki-karszt és a Szlovák-karszt barlangvilágának részeként az UNESCO Világörökség része. A látogatókat monumentális cseppk�?képz�?dmények, hatalmas termek és föld alatti patakok várják, amelyek a természet évezredes munkáját dicsérik. Aggtelek környéke, az Aggteleki Nemzeti Park vadregényes tájaival, tanösvényeivel és ritka él�?világával a természetjárók és a barlangászok paradicsoma. A barlangi koncertek különleges akusztikája pedig felejthetetlen kulturális élményt nyújt a föld mélyén.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Höhlensystem von Aggtelek und dem Slowakischen Karst ist Teil des UNESCO-Weltkulturerbes.", "Die Baradla-Höhle ist über 25 Kilometer lang und beherbergt den höchsten Tropfstein Ungarns.", "In der Höhle finden aufgrund der hervorragenden Akustik regelmä�?ig klassische Konzerte statt.", "Der Nationalpark Aggtelek schützt die einzigartige Karstlandschaft und seltene Tierarten."],
      "hu": [
        "A Baradla-barlang teljes hossza meghaladja a 25 kilométert, s átnyúlik Szlovákiába is.",
        "Az Aggteleki-karszt barlangjai 1995-ben kerültek fel az UNESCO Világörökségi listájára.",
        "A barlangban található az ország legmagasabb cseppköve, a 19 méter magas 'Csillagvizsgáló'.",
        "Az Aggteleki Nemzeti Park Magyarország els�? olyan parkja, amelyet els�?sorban geológiai értékek védelmére hoztak létre.",
        "A Hangversenyteremben rendszeresen tartanak komoly- és könnyűzenei koncerteket a kiváló akusztika miatt."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Baradla-Höhle ist Teil des UNESCO-Welterbes.", "Erstreckt sich über die Grenze zur Slowakei."], "hu": ["A Baradla-barlang az UNESCO világörökség része.", "Átnyúlik a szlovák határon."], "ro": ["Pe�?tera Baradla este parte a Patrimoniului Mondial UNESCO.", "Se extinde peste grani�?a cu Slovacia."], "en": ["The Baradla Cave is part of the UNESCO World Heritage site.", "Extends across the border into Slovakia."]},
  },
  {
    id: "szeged",
    type: "city",
    parent: "HU-CS",
    coords: [20.1414, 46.253],
    name: {"de": "Szegedin", "hu": "Szeged", "ro": "Seghedin", "en": "Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {
      "de": "Szeged, bekannt als die 'Stadt des Sonnenscheins', liegt im Süden Ungarns an der Mündung der Maros in die Thei�?. Die Stadt wurde nach der verheerenden Flut von 1879 fast vollständig im eklektischen Stil neu aufgebaut, was ihr ein gro�?zügiges und harmonisches Stadtbild verleiht. Das Wahrzeichen ist die beeindruckende Votivkirche auf dem Domplatz, wo im Sommer die berühmten Freilichtspiele stattfinden. Szeged ist zudem weltberühmt für seine Salami, seinen Paprika und seine köstliche Fischsuppe.",
      "hu": "Szeged, a 'napfény városa', Magyarország déli részén, a Maros és a Tisza találkozásánál fekszik. Az 1879-es nagy árvíz után a várost szinte teljesen újjáépítették eklektikus stílusban, ami tágas és harmonikus városképet eredményezett. Legismertebb jelképe a Dóm téren álló Fogadalmi Templom, ahol nyaranta a híres Szegedi Szabadtéri Játékokat rendezik. Szeged világhírű a Pick szalámijáról, a paprikájáról és a fenséges halászlevér�?l is.",
      "ro": "Seghedin, cunoscut ca 'ora�?ul soarelui', este situat în sudul Ungariei, la confluen�?a râurilor Mure�? �?i Tisa. Ora�?ul a fost reconstruit aproape în întregime în stil eclectic dup�? marea inunda�?ie din 1879, ceea ce îi confer�? un aspect urban aerisit �?i armonios. Simbolul s�?u este Biserica Votiv�? impresionant�? din Pia�?a Domului, unde vara au loc faimoasele Jocuri în Aer Liber. Seghedin este, de asemenea, renumit în întreaga lume pentru salamul Pick, boia �?i ciorba de pe�?te.",
      "en": "Szeged, known as the 'City of Sunshine,' is located in southern Hungary at the confluence of the Maros and Tisza rivers. The city was almost entirely rebuilt in an eclectic style after the devastating flood of 1879, resulting in a spacious and harmonious cityscape. Its landmark is the impressive Votive Church on Cathedral Square, which hosts the famous Open-Air Festival every summer. Szeged is also world-famous for its Pick salami, paprika, and delicious fish soup."
    },
    descriptionAdvanced: {
      "de": "Szeged, am Ufer der Thei�? im sonnigen Süden Ungarns gelegen, wird aufgrund seiner vielen Sonnenstunden oft als ",
      "hu": "Szeged, a 'napfény városa', Dél-Magyarország legnagyobb városa és kulturális központja a Tisza és a Maros találkozásánál. A települést az 1879-es nagy árvíz után szinte teljesen újjáépítették, így ma egységes és gyönyörű szecessziós, valamint eklektikus belvárossal büszkélkedhet. Szeged jelképe a monumentális Fogadalmi Templom és az el�?tte elterül�? Dóm tér, amely a világhírű Szegedi Szabadtéri Játékok otthona. A város híres egyetemi életér�?l, tudományos eredményeir�?l és gasztronómiai különlegességeir�?l, mint a Pick szalámi vagy a szegedi fűszerpaprika. A Tisza-parti sétányok, a pezsg�? teraszok és a mediterrán hangulat Szegedet az ország egyik legkedveltebb turisztikai célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szeged wird wegen des sonnigen Klimas oft als die 'Stadt des Sonnenscheins' bezeichnet.", "Der Dom von Szeged ist eine der grö�?ten Kirchen Ungarns und wurde nach einer Flutkatastrophe erbaut.", "Die Stadt ist die Heimat der weltberühmten Pick-Salami und des Szegediner Paprikas.", "Auf dem Domplatz finden jährlich die renommierten Szegeder Freilichtspiele statt."],
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
    facts: {
      "de": [
        "Drittgrö�?te Stadt Ungarns und Sitz des Komitats Csongrád-Csanád.",
        "Die Universität Szeged gehört zu den besten Forschungseinrichtungen des Landes.",
        "Die Votivkirche (Dom) wurde als Dank für den Wiederaufbau nach der Flut erbaut.",
        "Heimat der weltberühmten Pick-Salami und des Szegeder Paprikas.",
        "Die Szegeder Freilichtspiele sind das grö�?te Theaterfestival Ungarns.",
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
        "A Móra Ferenc Múzeum jelent�?s régészeti és történelmi gyűjteményekkel bír."
      ],
      "ro": [
        "Al treilea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Csongrád-Csanád.",
        "Universitatea din Seghedin este una dintre cele mai bune institu�?ii de cercetare.",
        "Biserica Votiv�? (Domul) a fost construit�? ca mul�?umire pentru reconstruc�?ie.",
        "Casa faimosului salam Pick �?i a boielei de Seghedin.",
        "Jocurile în Aer Liber din Seghedin sunt cel mai mare festival de teatru.",
        "Ora�?ul are cel mai mare num�?r de ore însorite pe an din Ungaria.",
        "Faimos pentru ciorba de pe�?te de Seghedin (Halászlé), o specialitate culinar�?.",
        "Muzeul Móra Ferenc prezint�? colec�?ii arheologice �?i istorice importante."
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
  },
  {
    id: "hodmezovasarhely",
    type: "city",
    parent: "HU-CS",
    coords: [20.3189, 46.4308],
    name: {"de": "Neumarkt an der Thei�?", "hu": "Hódmez�?vásárhely", "ro": "Hódmez�?vásárhely", "en": "Hódmez�?vásárhely"},
    image: "/geo-images/hungary/hodmezovasarhely.webp",
    description: {"de": "Stadt in Südungarn mit einer reichen landwirtschaftlichen Tradition.", "hu": "Dél-magyarországi város gazdag mez�?gazdasági hagyományokkal.", "ro": "Ora�? în sudul Ungariei cu o bogat�? tradi�?ie agricol�?.", "en": "City in southern Hungary with a rich agricultural tradition."},
    descriptionAdvanced: {
      "de": "Hódmez�?vásárhely, eine Stadt mit Komitatsrecht im Südosten Ungarns, ist bekannt für ihre enge Verbindung zur Landwirtschaft und bildenden Kunst. Das Stadtbild ist geprägt von weiten Plätzen und einer Mischung aus ländlicher Tradition und bürgerlicher Eleganz. Die Stadt beherbergt bedeutende Museen wie das Tornyai-János-Museum, das die reiche archäologische und künstlerische Geschichte der Region dokumentiert. Ein besonderes architektonisches Juwel ist das Rathaus, das den Stolz der ehemaligen Agrarstadt widerspiegelt. Hódmez�?vásárhely ist zudem ein wichtiger Ort für das Kunsthandwerk, insbesondere für die traditionelle Töpferei, die in der Region eine lange Geschichte hat.",
      "hu": "Hódmez�?vásárhely az Alföld déli részén fekv�? nagyváros, amely gazdag mez�?városi hagyományairól és élénk művészeti életér�?l ismert. A város arculatát a tágas terek, a felújított szecessziós paloták és a híres agyagipar hagyományai határozzák meg. Hódmez�?vásárhely évszázadok óta a fest�?k és keramikusok városa, az itteni Alkotóház ma is a magyar művészeti élet fontos bázisa. A település büszkélkedhet az ország egyik legjobb állapotban fennmaradt árvízvédelmi falával, valamint a népszerű Török Sándor Strandfürd�?vel. A város környéki puszták és a Tisza folyó közelsége kiváló lehet�?séget ad a természetjárásra és a vízi sportokra, miközben a város maga a nyugodt, polgári alföldi élet megtestesít�?je.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Stadt besitzt eines der flächenmä�?ig grö�?ten Verwaltungsgebiete in Ungarn.", "Das Tornyai-János-Museum zeigt bedeutende Werke ungarischer Maler des 20. Jahrhunderts.", "Die Region ist bekannt für ihre traditionelle Töpferkunst und Keramikherstellung.", "Hódmez�?vásárhely ist eine bedeutende Stadt für den Reitsport und die Landwirtschaft."],
      "hu": [
        "Hódmez�?vásárhely Magyarország második legnagyobb területű városa a kiterjedt pusztai részek miatt.",
        "A városban található Emlékpont Múzeum az ország egyik legmodernebb történeti kiállítóhelye.",
        "A hódmez�?vásárhelyi majolika és kerámia hagyományai világszerte elismertek.",
        "Itt található az ország egyetlen olyan árvízvédelmi fala, amely a város szívében fut végig.",
        "A város f�?terén álló Városháza tornya 57 méter magas, s az alföldi eklektika remeke."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Zweitgrö�?te Stadt Ungarns nach Fläche.", "Bekannt für ihre Töpferkunst."], "hu": ["Magyarország második legnagyobb területű városa.", "Fazekasságáról ismert."], "ro": ["Al doilea ora�? ca m�?rime din Ungaria dup�? suprafa�?�?.", "Cunoscut pentru ol�?ritul s�?u."], "en": ["Second largest city in Hungary by area.", "Known for its pottery."]},
  },
  {
    id: "mako",
    type: "city",
    parent: "HU-CS",
    coords: [20.4806, 46.2167],
    name: {"de": "Makó", "hu": "Makó", "ro": "Mac�?u", "en": "Makó"},
    image: "/geo-images/hungary/mako.webp",
    description: {"de": "Stadt nahe der rumänischen Grenze, berühmt für ihre Zwiebeln.", "hu": "Város a román határ közelében, hagymájáról híres.", "ro": "Ora�? aproape de grani�?a cu România, faimos pentru ceapa sa.", "en": "City near the Romanian border, famous for its onions."},
    descriptionAdvanced: {
      "de": "Makó, im Südosten Ungarns nahe der rumänischen Grenze gelegen, ist landesweit und international als die ",
      "hu": "Makó a Maros partján fekv�? város, amely világhírnevét a makói vöröshagymának és az elmúlt években megvalósult lenyűgöz�? organikus építészetének köszönheti. A város szinte minden fontos középülete a híres építész, Makovecz Imre tervei alapján készült, egyedülálló, természetközeli városképet alkotva. Makó legf�?bb büszkesége a Hagymatikum Gyógyfürd�?, amely különleges formavilágával és gyógyiszapjával vonzza a látogatókat. A Maros-parti lombkoronasétány és a kalandpark a természet és az aktív kikapcsolódás kedvel�?inek kínál élményeket. Makó a hagyományok és a modern építészeti bravúrok városa, ahol a hagymatermesztés évszázados múltja találkozik a jöv�?be mutató designnal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Makó ist weltberühmt für seine Zwiebelproduktion, die als ungarisches Kulturerbe gilt.", "Das Heilbad 'Hagymatikum' wurde vom renommierten Architekten Imre Makovecz entworfen.", "Der Fluss Maros liefert den heilenden Heilschlamm für die medizinischen Behandlungen in der Stadt.", "Makó beherbergt einen einzigartigen Baumkronenpfad am Ufer des Maros."],
      "hu": [
        "Makó a magyar vöröshagyma-termesztés történelmi központja, a makói hagyma hungarikum.",
        "A Hagymatikum fürd�? a világ egyik legszebbnek választott organikus építészeti alkotása.",
        "Itt található Magyarország leghosszabb (közel 200 méter) lombkoronasétánya a Maros ártéri erd�?jében.",
        "A városban 12 Makovecz Imre által tervezett épület található, ami egyedülálló a világon.",
        "Makó híres a Maros gyógyiszapjáról, amelyet a mozgásszervi betegségek kezelésére használnak."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Makó-Zwiebel ist ein geschütztes Agrarprodukt.", "Das Thermalbad Hagymatikum wurde von Imre Makovecz entworfen."], "hu": ["A makói hagyma védett mez�?gazdasági termék.", "A Hagymatikum termálfürd�?t Makovecz Imre tervezte."], "ro": ["Ceapa de Makó este un produs agricol protejat.", "Baia termal�? Hagymatikum a fost proiectat�? de Imre Makovecz."], "en": ["The Makó onion is a protected agricultural product.", "The Hagymatikum thermal bath was designed by Imre Makovecz."]},
  },
  {
    id: "szekesfehervar",
    type: "city",
    parent: "HU-FE",
    coords: [18.4103, 47.1899],
    name: {"de": "Stuhlwei�?enburg", "hu": "Székesfehérvár", "ro": "Székesfehérvár", "en": "Székesfehérvár"},
    image: "/geo-images/hungary/szekesfehervar.webp",
    description: {
      "de": "Székesfehérvár, eine der ältesten Städte Ungarns, war im Mittelalter die Krönungs- und Grabstätte der ungarischen Könige. Die Stadt liegt in Zentralungarn und ist heute ein bedeutendes Industrie- und Kulturzentrum. Besucher können die Ruinen der Krönungsbasilika im Ruinengarten besichtigen oder das märchenhafte Bory-Schloss bewundern, das von einem Künstler im 20. Jahrhundert erbaut wurde. Die barocke Altstadt lädt mit ihren Denkmälern und Museen zu einer Zeitreise in die ungarische Geschichte ein.",
      "hu": "Székesfehérvár, Magyarország egyik leg�?sibb városa, a középkorban a magyar királyok koronázó- és temetkezési helye volt. A város Közép-Magyarországon fekszik, és ma jelent�?s ipari és kulturális központ. A látogatók megtekinthetik a koronázó bazilika romjait a Romkertben, vagy megcsodálhatják a mesebeli Bory-várat, amelyet egy művész épített a 20. században. A barokk óváros műemlékeivel és múzeumaival id�?utazásra hív a magyar történelembe.",
      "ro": "Székesfehérvár, unul dintre cele mai vechi ora�?e din Ungaria, a fost locul de încoronare �?i de înmormântare al regilor maghiari în Evul Mediu. Ora�?ul este situat în centrul Ungariei �?i este ast�?zi un important centru industrial �?i cultural. Vizitatorii pot vedea ruinele bazilicii de încoronare în Gr�?dina Ruinelor sau pot admira castelul de basm Bory, construit de un artist în secolul XX. Centrul vechi baroc, cu monumentele �?i muzeele sale, invit�? la o c�?l�?torie în timpul istoriei maghiare.",
      "en": "Székesfehérvár, one of Hungary's oldest cities, served as the coronation and burial site for Hungarian kings during the Middle Ages. Located in central Hungary, it is now a major industrial and cultural hub. Visitors can explore the ruins of the coronation basilica in the Ruin Garden or admire the fairytale-like Bory Castle, built by an artist in the 20th century. The Baroque old town, with its monuments and museums, offers a journey through Hungarian history."
    },
    descriptionAdvanced: {
      "de": "Székesfehérvár, eine der ältesten Städte Ungarns, war im Mittelalter die Krönungsstadt der ungarischen Könige und ist tief mit der Geschichte des Landes verwurzelt. Hier wurden 37 Könige gekrönt und 15 von ihnen beigesetzt, was der Stadt den Beinamen ",
      "hu": "Székesfehérvár, a 'királyok városa', Magyarország egyik legfontosabb történelmi központja, ahol a középkorban a magyar uralkodókat koronázták és temették el. A város szíve a barokk belváros, ahol a történelmi falak és a modern szobrok harmonikus elegye várja a látogatókat. Legfontosabb emlékhelye a Nemzeti Emlékhely (Középkori Romkert), ahol egykor a monumentális Szent István-bazilika állt. Székesfehérvár ma dinamikusan fejl�?d�? ipari és kulturális központ, büszkélkedhet a mesebeli Bory-várral, gazdag múzeumokkal és pezsg�? tereivel. A város ideális fekvése Budapest és a Balaton között, valamint történelmi mélysége Székesfehérvárt az ország egyik legfontosabb turisztikai célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Székesfehérvár war im Mittelalter die offizielle Krönungsstadt ungarischer Könige.", "Im Ruinengarten sind die Fundamente der einstigen Krönungsbasilika zu besichtigen.", "Die Bory-Burg wurde von einem einzigen Mann über 36 Jahre hinweg als Denkmal der Liebe erbaut.", "Die Stadt beherbergt die 'Blasglocke', ein einzigartiges Figurenoktett in der Innenstadt."],
      "hu": [
        "Székesfehérváron összesen 37 királykoronázás és 15 királytemetés történt a középkorban.",
        "A Bory-vár egyedülálló építmény, amelyet Bory Jen�? szobrász saját kezűleg épített több évtizeden át.",
        "Itt található az ország egyik legszebb barokk f�?tere és a püspöki székesegyház.",
        "Székesfehérvár híres órajátékáról, amely a magyar történelem nagyjait mutatja be naponta többször.",
        "A város ma Magyarország egyik legjelent�?sebb gazdasági motorja és informatikai központja."
      ],
      "ro": [],
      "en": []
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
        "Magyarország egykori f�?városa a középkorban.",
        "Itt 37 magyar királyt koronáztak meg és 15-öt temettek el.",
        "A Romkert �?rzi az egykori koronázó bazilika alapfalait.",
        "A Bory-vár egy egyedülálló, betonból készült művészeti alkotás.",
        "Fejér vármegye székhelye és fontos ipari központ.",
        "Itt található a neves Szent István Király Múzeum.",
        "Híres az évente augusztusban megrendezett Királyi Napok fesztiválról.",
        "Közlekedési szempontból kedvez�? helyen, Budapest és a Balaton között fekszik."
      ],
      "ro": [
        "Fost�? capital�? a Ungariei în Evul Mediu.",
        "Aici au fost încorona�?i 37 de regi maghiari �?i 15 au fost înmormânta�?i.",
        "Gr�?dina Ruinelor p�?streaz�? funda�?iile fostei bazilici de încoronare.",
        "Castelul Bory este o construc�?ie unic�? din beton �?i art�?.",
        "Re�?edin�?a jude�?ului Fejér �?i un sit industrial important.",
        "Ora�?ul g�?zduie�?te renumitul Muzeu Regele Sfântul �?tefan.",
        "Cunoscut pentru festivalul anual 'Zilele Regale' din august.",
        "Situat convenabil între Budapesta �?i Lacul Balaton."
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
  },
  {
    id: "dunaujvaros",
    type: "city",
    parent: "HU-FE",
    coords: [18.9397, 46.9619],
    name: {"de": "Neustadt an der Donau", "hu": "Dunaújváros", "ro": "Dunaújváros", "en": "Dunaújváros"},    description: {"de": "Industriestadt an der Donau, erbaut in den 1950er Jahren.", "hu": "Ipari város a Duna partján, az 1950-es években épült.", "ro": "Ora�? industrial pe Dun�?re, construit în anii 1950.", "en": "Industrial city on the Danube, built in the 1950s."},
    descriptionAdvanced: {
      "de": "Dunaújváros, am rechten Ufer der Donau gelegen, ist eine Stadt, die vor allem durch ihre moderne Industriegeschichte im 20. Jahrhundert geprägt wurde. Ursprünglich als sozialistische Musterstadt geplant, zeigt sie heute ein interessantes Bild der Architektur des Realsozialismus gepaart mit modernen Grünflächen. Das Herz der Stadt ist das riesige Stahlwerk, das einst den wirtschaftlichen Aufschwung der Region sicherte. In den letzten Jahren hat sich Dunaújváros jedoch stark gewandelt und bietet heute einen Skulpturenpark an der Donau sowie vielfältige Sport- und Freizeitmöglichkeiten. Die Stadt ist ein interessantes Beispiel für den städtebaulichen Wandel in Ungarn und bietet einen tiefen Einblick in die jüngere Zeitgeschichte des Landes.",
      "hu": "Dunaújváros Magyarország egyik legfiatalabb városa a Duna mentén, amely az 1950-es években épült fel mint szocialista iparváros (eredetileg Sztálinváros néven). A település arculatát a monumentális szocreál építészet és a vasmű határozza meg, ami ma különleges építészeti örökségként vonzza a látogatókat. Dunaújváros azonban nemcsak az iparról szól: a Duna-parti szoborpark, a tágas parkok és a folyó menti sétányok modern és élhet�? városképet mutatnak. A város híres kiváló sportéletér�?l és uszodájáról, valamint a Duna által nyújtott vízi sportlehet�?ségekr�?l. Dunaújváros egy érdekes fejezete a magyar történelemnek, ahol a tervezett városépítés minden sajátossága megfigyelhet�?.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Dunaújváros wurde in den 1950er Jahren als sozialistische Industriestadt unter dem Namen Sztálinváros gegründet.", "Am Donauufer befindet sich ein weitläufiger Skulpturenpark mit modernen Metallplastiken.", "Die Stadt ist ein wichtiges Zentrum für Wassersportarten und besitzt ein modernes Sportzentrum.", "Das Intercisa-Museum dokumentiert die römische Vergangenheit der Region."],
      "hu": [
        "Dunaújváros az ország els�? tervezett szocialista városa, 1951-ben kapott nevet.",
        "Itt található Közép-Európa egyik legnagyobb szabadtéri szoborparkja a Duna-parton.",
        "A városban működik az ország legnagyobb kohászati üzeme, a Dunai Vasmű (Dunaferr).",
        "Dunaújváros híres a sikeres jégkorong- és kézilabda-csapatairól.",
        "A várost átlósan szelik át a tágas sugárutak, amelyeket a korszak ideáljai szerint terveztek."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hie�? früher Sztálinváros (Stalinstadt).", "Zentrum der ungarischen Stahlindustrie."], "hu": ["Korábban Sztálinvárosnak hívták.", "A magyar acélipar központja."], "ro": ["Se numea anterior Sztálinváros (Ora�?ul lui Stalin).", "Centrul industriei siderurgice maghiare."], "en": ["Formerly called Sztálinváros (Stalin City).", "Center of the Hungarian steel industry."]},
  },
  {
    id: "gardony",
    type: "city",
    parent: "HU-FE",
    coords: [18.6167, 47.1978],
    name: {"de": "Gárdony", "hu": "Gárdony", "ro": "Gárdony", "en": "Gárdony"},
    image: "/geo-images/hungary/gardony.webp",
    description: {"de": "Stadt am Ufer des Velencer Sees, ein beliebtes Urlaubsziel.", "hu": "Város a Velencei-tó partján, népszerű nyaralóhely.", "ro": "Ora�? pe malul Lacului Velence, o destina�?ie popular�? de vacan�?�?.", "en": "City on the shores of Lake Velence, a popular holiday destination."},
    descriptionAdvanced: {
      "de": "Gárdony ist ein beliebtes Ferienzentrum am Südufer des Velence-Sees, der für sein warmes Wasser und seine heilende Wirkung bekannt ist. Die Stadt besteht aus mehreren Ortsteilen wie Agárd und Dinnyés und bietet ideale Bedingungen für Badeurlauber, Wassersportler und Angler. Besonders bekannt ist Agárd für sein Heilbad und seinen Strand, der im Sommer zahlreiche Besucher aus dem nahegelegenen Budapest anzieht. Gárdony ist zudem der Geburtsort des berühmten ungarischen Schriftstellers Géza Gárdonyi, dessen Geburtshaus heute ein Museum ist. Die Region um den See ist ein geschütztes Naturparadies, das vor allem für seine reiche Vogelwelt in den Schilfgebieten bekannt ist.",
      "hu": "Gárdony a Velencei-tó déli partjának központja, a 'napfény tavának' legnépszerűbb üdül�?helye, amely magában foglalja Agárdot és Dinnyést is. A város élete a tó köré szervez�?dik: szabadstrandok, vitorláskiköt�?k és pezsg�? kerékpáros élet várja a látogatókat. Gárdony híres szülötte Gárdonyi Géza, az Egri csillagok írója, akinek emlékháza és a közeli rönkvár vonzó célpont a családoknak. A település büszkélkedhet modern gyógyfürd�?vel és a Velencei-tavi Madárrezervátum közelségével is. Gárdony a sport, a kultúra és a természetközeli kikapcsolódás ideális ötvözete, amely Budapestt�?l karnyújtásnyira kínál teljes feltölt�?dést.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gárdony liegt am Velence-See, einem der wärmsten Binnenseen Europas.", "Der berühmte Schriftsteller Géza Gárdonyi wurde im Ortsteil Agárd geboren.", "Die Stadt ist ein Zentrum für den Segelsport und das Windsurfen in Ungarn.", "Das Heilbad Agárd ist für sein schwefelhaltiges Thermalwasser bekannt."],
      "hu": [
        "Gárdonyhoz tartozik Agárd, ahol az író Gárdonyi Géza született 1863-ban.",
        "Az Agárdi Gyógy- és Termálfürd�? vize 58 fokos h�?mérsékleten tör fel a mélyb�?l.",
        "A Velencei-tavi Galéria számos kortárs művészeti kiállításnak ad otthont a városban.",
        "Gárdony népszerű megállóhelye a tó körüli kerékpárútnak, amely közel 30 km hosszú.",
        "Dinnyésen található az egyedülálló Várpark, ahol magyar várak makettjeit láthatjuk eredeti anyagokból."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Geburtsort des Schriftstellers Géza Gárdonyi.", "Beliebt für Wassersport."], "hu": ["Gárdonyi Géza író szül�?városa.", "Népszerű a vízisportok kedvel�?i körében."], "ro": ["Locul de na�?tere al scriitorului Géza Gárdonyi.", "Popular pentru sporturi nautice."], "en": ["Birthplace of writer Géza Gárdonyi.", "Popular for water sports."]},
  },
  {
    id: "gyor",
    type: "city",
    parent: "HU-GS",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab", "hu": "Gy�?r", "ro": "Gy�?r", "en": "Gy�?r"},
    image: "/geo-images/hungary/gyor.webp",
    description: {
      "de": "Gy�?r, die 'Stadt der Flüsse', liegt im Nordwesten Ungarns am Zusammenfluss von Raab, Rabnitz und Donau. Die Stadt ist ein bedeutendes wirtschaftliches Zentrum und beherbergt eines der weltweit grö�?ten Motorenwerke von Audi. Das historische Stadtzentrum besticht durch seine barocke Architektur, charmante Gassen und den imposanten Dom auf dem Káptalan-Hügel. Gy�?r ist zudem ein wichtiger Verkehrsknotenpunkt zwischen Budapest, Wien und Bratislava.",
      "hu": "Gy�?r, a 'folyók városa', �?szaknyugat-Magyarországon fekszik, a Rába, a Rábca és a Duna találkozásánál. A város jelent�?s gazdasági központ, itt található az Audi egyik legnagyobb motorgyára a világon. A történelmi belváros barokk építészetével, hangulatos utcáival és a Káptalandombon álló Bazilikával vonzza a látogatókat. Gy�?r emellett fontos közlekedési csomópont Budapest, Bécs és Pozsony között.",
      "ro": "Gy�?r, 'ora�?ul râurilor', este situat în nord-vestul Ungariei, la confluen�?a râurilor Rába, Rábca �?i Dun�?rea. Ora�?ul este un centru economic important, g�?zduind una dintre cele mai mari fabrici de motoare Audi din lume. Centrul istoric al ora�?ului impresioneaz�? prin arhitectura sa baroc�?, str�?zile fermec�?toare �?i Bazilica impun�?toare de pe dealul Káptalan. Gy�?r este, de asemenea, un nod de transport vital între Budapesta, Viena �?i Bratislava.",
      "en": "Gy�?r, the 'City of Rivers,' is located in northwestern Hungary at the confluence of the Rába, Rábca, and Danube rivers. The city is a major economic hub, home to one of the world's largest Audi engine plants. Its historic center charms visitors with Baroque architecture, cozy alleys, and the majestic Basilica on Káptalan Hill. Gy�?r is also a key transportation hub situated between Budapest, Vienna, and Bratislava."
    },
    descriptionAdvanced: {
      "de": "Gy�?r, im Nordwesten Ungarns an der Mündung von drei Flüssen gelegen, wird oft als die ",
      "hu": "Gy�?r, a 'folyók városa', Magyarország északnyugati részén, a Duna, a Rába és a Rábca találkozásánál fekv�? dinamikus nagyváros, amely barokk belvárosával és modern iparával emelkedik ki. A város központja, a Káptalandomb a Püspökvárral és a Bazilikával a magyar kereszténység egyik bölcs�?je. Gy�?r híres rendezett tereir�?l, szök�?kútjairól és gazdag művészeti életér�?l, amit a Gy�?ri Balett világhírneve is fémjelez. Ma a város az ország egyik legfontosabb gazdasági motorja (az Audi révén), de meg�?rizte hangulatos történelmi jellegét is. Gy�?r a modern fejl�?dés és az ezeréves múlt harmonikus találkozási pontja, amely minden évszakban pezsg�? programokkal várja a látogatókat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gy�?r liegt am Zusammenfluss der Flüsse Raab (Rába), Kleiner Donau und Donau.", "Die barocke Altstadt von Gy�?r gehört zu den am besten erhaltenen historischen Ensembles Ungarns.", "Die Stadt ist der Sitz der Audi Hungaria Motor Kft, einem der weltweit grö�?ten Motorenwerke.", "Die Kathedrale von Gy�?r beherbergt das heilige Antlitz der weinenden Madonna aus Irland."],
      "hu": [
        "Gy�?r barokk belvárosa Magyarország egyik legszebb és legépebben maradt műemléki együttese.",
        "Itt alapították meg a Gy�?ri Balettet, amely az ország egyik legnevesebb táncegyüttese.",
        "A gy�?ri Bazilikában �?rzik Szent László király hermáját, a magyar ötvösművészet remekét.",
        "Gy�?r városa az Audi gyár révén a magyar autóipar európai hírű központja.",
        "A várost 2010-ben az egyik legélhet�?bb magyar városnak választották."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sechstgrö�?te Stadt Ungarns und Sitz des Komitats Gy�?r-Moson-Sopron.",
        "Wichtiges Zentrum der Automobilindustrie durch das Audi-Werk.",
        "Das barocke Stadtzentrum gehört zu den am besten erhaltenen in Ungarn.",
        "Der Dom von Gy�?r beherbergt die Reliquie des Heiligen Ladislaus.",
        "Die Stadt hat eine reiche Tradition im Handball und Sport.",
        "Liegt ideal auf der Achse Budapest-Wien-Bratislava.",
        "Das Xantus-János-Museum zeigt bedeutende lokale Sammlungen.",
        "Bekannt für seine zahlreichen Thermal- und Erlebnisbäder."
      ],
      "hu": [
        "Magyarország hatodik legnagyobb városa és Gy�?r-Moson-Sopron vármegye székhelye.",
        "Az autóipar meghatározó központja az Audi gyárnak köszönhet�?en.",
        "A barokk belváros az egyik legépszerűbb Magyarországon.",
        "A gy�?ri Bazilikában �?rzik Szent László király hermáját.",
        "A város gazdag kézilabda- és sportmúlttal rendelkezik.",
        "Ideális elhelyezkedés a Budapest-Bécs-Pozsony tengelyen.",
        "A Xantus János Múzeum jelent�?s helytörténeti gyűjteményt mutat be.",
        "Számos termál- és élményfürd�?je miatt is kedvelt úti cél."
      ],
      "ro": [
        "Al �?aselea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Gy�?r-Moson-Sopron.",
        "Centru important al industriei auto datorit�? fabricii Audi.",
        "Centrul baroc al ora�?ului este unul dintre cele mai bine conservate din Ungaria.",
        "Bazilica din Gy�?r ad�?poste�?te relicva Sfântului Ladislau.",
        "Ora�?ul are o tradi�?ie bogat�? în handbal �?i sport.",
        "Situat ideal pe axa Budapesta-Viena-Bratislava.",
        "Muzeul Xantus János prezint�? colec�?ii locale semnificative.",
        "Cunoscut pentru numeroasele sale b�?i termale �?i parcuri acvatice."
      ],
      "en": [
        "Sixth largest city in Hungary and the seat of Gy�?r-Moson-Sopron County.",
        "A major center of the automotive industry due to the Audi plant.",
        "The Baroque city center is one of the best-preserved in Hungary.",
        "Gy�?r Basilica houses the reliquary of Saint Ladislaus.",
        "The city has a strong tradition in handball and other sports.",
        "Ideally located on the Budapest-Vienna-Bratislava axis.",
        "The Xantus János Museum displays significant local collections.",
        "Known for its numerous thermal and adventure baths."
      ]
    },
  },
  {
    id: "sopron",
    type: "city",
    parent: "HU-GS",
    coords: [16.5905, 47.6817],
    name: {"de": "�?denburg", "hu": "Sopron", "ro": "Sopron", "en": "Sopron"},
    image: "/geo-images/hungary/sopron.webp",
    description: {
      "de": "Sopron, die 'treueste Stadt' Ungarns, liegt im äu�?ersten Westen des Landes an der Grenze zu �?sterreich. Die Stadt ist bekannt für ihre au�?ergewöhnlich gut erhaltene mittelalterliche Altstadt und ihren Status als bedeutendes Weinanbaugebiet, insbesondere für den Blaufränkischen. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen herrlichen Blick über die Dächer und die umliegenden Weinberge hat. Sopron ist zudem ein Symbol für die europäische Einheit, da hier 1989 das Paneuropäische Picknick stattfand.",
      "hu": "Sopron, a 'leghűségesebb város', Magyarország legnyugatibb részén, az osztrák határ mentén fekszik. A város híres kivételesen jól meg�?rzött középkori óvárosáról és jelent�?s borvidékér�?l, különösen a kékfrankosról. A város jelképe a Tűztorony, ahonnan csodálatos kilátás nyílik a háztet�?kre és a környez�? sz�?l�?ültetvényekre. Sopron emellett az európai egység szimbóluma is, hiszen 1989-ben itt rendezték meg a Páneurópai Pikniket.",
      "ro": "Sopron, 'cel mai fidel ora�?' al Ungariei, este situat în extremitatea vestic�? a �?�?rii, la grani�?a cu Austria. Ora�?ul este cunoscut pentru centrul s�?u vechi medieval excep�?ional de bine conservat �?i pentru statutul s�?u de regiune viticol�? important�?, în special pentru soiul Kékfrankos. Simbolul ora�?ului este Turnul Pompierilor, de unde se poate admira o vedere superb�? asupra acoperi�?urilor �?i podgoriilor din jur. Sopron este, de asemenea, un simbol al unit�?�?ii europene, aici având loc în 1989 Picnicul Paneuropean.",
      "en": "Sopron, the 'Most Loyal City' of Hungary, is located in the far west of the country on the border with Austria. The city is famous for its exceptionally well-preserved medieval old town and its status as a major wine-growing region, particularly for the Kékfrankos (Blaufränkisch) variety. Its landmark is the Fire Tower, offering a magnificent view over the rooftops and surrounding vineyards. Sopron is also a symbol of European unity, as it hosted the Pan-European Picnic in 1989."
    },
    descriptionAdvanced: {
      "de": "Sopron, im äu�?ersten Westen Ungarns direkt an der Grenze zu �?sterreich gelegen, ist eine Stadt von au�?ergewöhnlicher Schönheit und historischer Bedeutung. Als eine der wenigen Städte Ungarns blieb ihr mittelalterlicher Kern fast unversehrt erhalten, was Sopron zu einem Freilichtmuseum der Architektur macht. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen Panoramablick über die barocke Innenstadt bis hin zum Neusiedler See hat. Sopron ist auch als ",
      "hu": "Sopron, a 'leghűségesebb város' az osztrák határ mentén, a Soproni-hegység lábánál fekszik, és Magyarország egyik leggazdagabb műemléki állományával rendelkezik. A város középkori hangulatú belvárosa, szűk utcái és az emblematikus Tűztorony az ország történelmének viharos és dics�? korszakait idézi. Sopron híres bortermelésér�?l is, a Kékfrankos hazájaként a borkultúra minden szegletében jelen van. A várost körülölel�? erd�?k, a L�?verek tiszta leveg�?je és a közeli Fert�?-tó kiváló lehet�?séget adnak az aktív pihenésre. Sopron kulturális és szellemi élete is kiemelked�?, egyeteme és fesztiváljai révén a térség egyik legfontosabb központja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Sopron trägt den Ehrentitel 'Civitas Fidelissima' (die treueste Stadt).", "Der Feuerturm ist das Wahrzeichen der Stadt und steht auf römischen Fundamenten.", "Die Stadt ist das Zentrum der ungarischen Produktion des Blaufränkisch-Rotweins.", "In Sopron fand 1989 das Paneuropäische Picknick statt, das den Fall des Eisernen Vorhangs einleitete."],
      "hu": [
        "Sopron az 1921-es népszavazás emlékére viseli a 'Civitas Fidelissima' (Leghűségesebb Város) címet.",
        "A Tűztorony Sopron jelképe, alsó része római kori falakra épült.",
        "Sopron belvárosának alaprajza a római kori Scarbantia városának szerkezetét követi.",
        "A város környéki L�?verek híres gyógyító klímájáról és szubalpin leveg�?jér�?l.",
        "Sopron a Kékfrankos vörösbor f�?városa, s számos történelmi borospincével büszkélkedhet."
      ],
      "ro": [],
      "en": []
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
        "Beliebtes Ziel für Touristen aus �?sterreich und ganz Europa."
      ],
      "hu": [
        "A 'Civitas Fidelissima' címet az 1921-es népszavazás után kapta.",
        "A történelmi belváros Közép-Európa egyik legépszerűbb műemlékegyüttese.",
        "A Tűztorony a város legismertebb jelképe.",
        "A kékfrankos bortermelés egyik legfontosabb központja.",
        "A Sopron melletti Páneurópai Piknik segítette a vasfüggöny lebontását.",
        "A várost a fest�?i Lövérek dombjai veszik körül.",
        "Számos múzeumnak és történelmi templomnak ad otthont.",
        "Népszerű úti cél az osztrák és az európai turisták körében."
      ],
      "ro": [
        "A primit titlul de 'Civitas Fidelissima' dup�? referendumul din 1921.",
        "Centrul istoric este unul dintre cele mai bine conservate din Europa Central�?.",
        "Turnul Pompierilor (Tűztorony) este simbolul emblematic al ora�?ului.",
        "Centru important pentru cultivarea vinului Kékfrankos.",
        "Picnicul Paneuropean de lâng�? Sopron a marcat începutul c�?derii Cortinei de Fier.",
        "Ora�?ul este înconjurat de dealurile pitore�?ti Lövérek.",
        "G�?zduie�?te numeroase muzee �?i biserici istorice.",
        "Destina�?ie popular�? pentru turi�?tii din Austria �?i din întreaga Europ�?."
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
  },
  {
    id: "pannonhalma",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.7606, 47.5536],
    name: {"de": "Martinsberg", "hu": "Pannonhalma", "ro": "Pannonhalma", "en": "Pannonhalma"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Historische Benediktinerabtei auf einem Hügel, eines der ältesten Denkmäler Ungarns.", "hu": "Történelmi bencés apátság egy dombon, Magyarország egyik legrégebbi műemléke.", "ro": "Aba�?ie benedictin�? istoric�? pe un deal, unul dintre cele mai vechi monumente din Ungaria.", "en": "Historic Benedictine abbey on a hill, one of the oldest monuments in Hungary."},
    descriptionAdvanced: {
      "de": "Pannonhalma ist berühmt für seine Benediktinerabtei, die majestätisch auf dem Berg des Heiligen Martin thront und zum UNESCO-Weltkulturerbe gehört. Gegründet im Jahr 996, ist sie das spirituelle und kulturelle Zentrum der ungarischen Benediktiner und blickt auf eine über tausendjährige Geschichte zurück. Die Basilika mit ihrer romanischen Krypta, der prachtvolle Kreuzgang und die monumentale Bibliothek mit ihren wertvollen Handschriften sind beeindruckende Zeugnisse sakraler Kunst. Pannonhalma ist zudem für seine lange Tradition im Weinbau und in der Kräuterkunde bekannt, was Besucher in der klösterlichen Weinkellerei und dem Arzneikräutergarten erleben können. Die Abtei ist ein Ort der Stille, des Gebets und der gelehrten Tradition inmitten der sanften Hügel Transdanubiens.",
      "hu": "Pannonhalma a magyar kereszténység és kultúra bölcs�?je, ahol az ezeréves Bencés F�?apátság magasodik a dombtet�?n. Az 996-ban alapított monostor Magyarország egyik legfontosabb szakrális központja, amely 1996 óta az UNESCO Világörökség része. Az apátság monumentális épületegyüttese magában foglalja a gótikus bazilikát, az ezeréves kriptát és a világhírű könyvtárat, amely felbecsülhetetlen értékű kódexeket �?riz. Pannonhalma azonban modern is: neves borászata, levendulása és arborétuma a min�?ségi pihenés és a gasztronómia élményét nyújtja. A csend, az imádság és az alkotó munka harmóniája Pannonhalmát az ország egyik legfontosabb spirituális és kulturális célpontjává teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Erzabtei Pannonhalma wurde 996 gegründet und ist Teil des UNESCO-Weltkulturerbes.", "Die Klosterbibliothek bewahrt mit der Gründungsurkunde der Abtei Tihany das älteste ungarische Sprachdenkmal auf.", "Die Mönche betreiben ein renommiertes Weingut und produzieren Kräuterliköre nach alten Rezepten.", "Die Abtei liegt auf dem Mons Sacer Pannoniae, dem Heiligen Berg von Pannonien."],
      "hu": [
        "A Pannonhalmi F�?apátság Magyarország legrégebbi folyamatosan működ�? kulturális és vallási intézménye.",
        "Az apátsági könyvtárban �?rizik a magyar nyelv legrégebbi írott emlékét, a Tihanyi Alapítólevelet (másolatát).",
        "Pannonhalma híres gyógynövénykertjér�?l és az abból készült teákról, lik�?rökr�?l.",
        "A bazilika alatti kriptában nyugszik többek között Habsburg Ottó szívurnája is.",
        "Az apátsági borászat a bencés szerzetesek évezredes sz�?l�?művel�? hagyományait viszi tovább."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Gegründet im Jahr 996.", "Teil des UNESCO-Welterbes."], "hu": ["996-ban alapították.", "Az UNESCO világörökség része."], "ro": ["Fondat�? în anul 996.", "Parte a Patrimoniului Mondial UNESCO."], "en": ["Founded in 996.", "Part of the UNESCO World Heritage site."]},
  },
  {
    id: "debrecen",
    type: "city",
    parent: "HU-HB",
    coords: [21.6273, 47.5316],
    name: {"de": "Debrezin", "hu": "Debrecen", "ro": "Debre�?in", "en": "Debrecen"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {
      "de": "Debrecen ist die zweitgrö�?te Stadt Ungarns und das wirtschaftliche sowie kulturelle Zentrum der Ostungarischen Tiefebene. Die Stadt hat historisch eine wichtige Rolle in der protestantischen Reformation gespielt und wird oft als 'das kalvinistische Rom' bezeichnet. Im Zentrum steht die imposante Reformierte Gro�?kirche, ein Symbol des ungarischen Protestantismus. Debrecen zieht Besucher mit seinen Thermalbädern, dem berühmten Blumenkarneval und dem nahegelegenen Nationalpark Hortobágy an.",
      "hu": "Debrecen Magyarország második legnagyobb városa, valamint az Alföld gazdasági és kulturális központja. A város történelmileg fontos szerepet játszott a protestáns reformációban, ezért gyakran emlegetik 'kálvinista Róma' néven. A városközpontban álló monumentális Református Nagytemplom a magyar protestantizmus jelképe. Debrecen vonzza a látogatókat termálfürd�?ivel, a híres Virágkarneváljával és a közeli Hortobágyi Nemzeti Parkkal.",
      "ro": "Debre�?in este al doilea cel mai mare ora�? din Ungaria �?i centrul economic �?i cultural al Marii Câmpii Maghiare. Ora�?ul a jucat un rol istoric important în Reforma Protestant�?, fiind adesea numit 'Roma calvinist�?'. �?n centrul ora�?ului se afl�? impun�?toarea Biseric�? Reformat�? Mare, un simbol al protestantismului maghiar. Debre�?in atrage vizitatorii cu b�?ile sale termale, faimosul Carnaval al Florilor �?i Parcul Na�?ional Hortobágy din apropiere.",
      "en": "Debrecen is the second largest city in Hungary and the economic and cultural center of the Great Hungarian Plain. Historically, the city played a vital role in the Protestant Reformation and is often referred to as 'the Calvinist Rome.' At the heart of the city stands the imposing Reformed Great Church, a symbol of Hungarian Protestantism. Debrecen attracts visitors with its thermal baths, the famous Flower Carnival, and the nearby Hortobágy National Park."
    },
    descriptionAdvanced: {
      "de": "Debrecen, die zweitgrö�?te Stadt Ungarns, gilt als das ",
      "hu": "Debrecen, a 'kálvinista Róma', Magyarország második legnagyobb városa és a Tiszántúl legfontosabb központja, amely gazdag történelmi, egyházi és kulturális örökséggel rendelkezik. A város jelképe a monumentális Református Nagytemplom, ahol Kossuth Lajos 1849-ben kikiáltotta Magyarország függetlenségét. Debrecen híres egyetemi életér�?l, a Nagyerd�? parkjáról, gyógyfürd�?jér�?l és modern sportlétesítményeir�?l. A város kulturális életét a Csokonai Színház és a Déri Múzeum (a híres Munkácsy-trilógiával) teszi teljessé. Debrecen a modern fejl�?dés és a hagyománytisztelet városa, amely kapuként szolgál a Hortobágy pusztai világa felé, s vonzó célpont minden látogató számára.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Debrecen war im 19. Jahrhundert zweimal kurzzeitig die Hauptstadt von Ungarn.", "Die Gro�?e Reformierte Kirche ist das grö�?te protestantische Gotteshaus in Ungarn.", "Jährlich im August findet in Debrecen der berühmte Blumenkarneval statt.", "Die Universität von Debrecen ist eine der renommiertesten Bildungseinrichtungen des Landes."],
      "hu": [
        "Debrecen Magyarország legnagyobb vidéki városa, lakossága meghaladja a 200 ezer f�?t.",
        "A Református Nagytemplom a magyar reformáció és a szabadságharc szimbóluma.",
        "A Déri Múzeumban látható Munkácsy Mihály világhírű Krisztus-trilógiája.",
        "A debreceni Nagyerd�? volt az ország els�? természetvédelmi területe (1939).",
        "A város híres szülötte Szabó Magda írón�?, akinek emlékét irodalmi ház �?rzi."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Bevölkerung: ca. 200.000 Einwohner (2024).",
        "Die Universität Debrecen wurde 1538 gegründet und ist eine der ältesten des Landes.",
        "Die Reformierte Gro�?kirche ist das Wahrzeichen der Stadt.",
        "Jährlich findet der Debrecener Blumenkarneval am 20. August statt.",
        "Die Stadt war 1849 und kurzzeitig 1944/45 die Hauptstadt Ungarns.",
        "Beliebtes Ziel: Thermalbad Aquaticum mit gro�?em Erlebnisbad.",
        "In der Nähe liegt der Hortobágy-Nationalpark (UNESCO-Welterbe).",
        "Debrecen ist ein wichtiges Zentrum der ungarischen Jazz- und Kulturszene."
      ],
      "hu": [
        "Népesség: kb. 200 000 f�? (2024).",
        "A Debreceni Egyetem el�?dje 1538-ban alakult, az ország egyik legrégebbi intézménye.",
        "A Református Nagytemplom a város legismertebb jelképe.",
        "Minden év augusztus 20-án megrendezik a Debreceni Virágkarnevált.",
        "A város 1849-ben és 1944/45-ben is Magyarország ideiglenes f�?városa volt.",
        "Népszerű úti cél az Aquaticum termál- és élményfürd�?.",
        "A közelben található a Hortobágyi Nemzeti Park (UNESCO világörökség).",
        "Debrecen a magyar jazzélet és kultúra egyik meghatározó központja."
      ],
      "ro": [
        "Popula�?ie: aprox. 200.000 de locuitori (2024).",
        "Universitatea din Debre�?in a fost fondat�? în 1538, fiind una dintre cele mai vechi.",
        "Biserica Reformat�? Mare este simbolul emblematic al ora�?ului.",
        "Anual, pe 20 august, are loc Carnavalul Florilor din Debre�?in.",
        "Ora�?ul a fost capitala Ungariei în 1849 �?i temporar în 1944/45.",
        "Destina�?ie popular�?: complexul termal Aquaticum cu parc acvatic.",
        "�?n apropiere se afl�? Parcul Na�?ional Hortobágy (patrimoniu UNESCO).",
        "Debre�?in este un centru important al scenei de jazz �?i cultur�? din Ungaria."
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
  },
  {
    id: "hortobagy",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.15, 47.5833],
    name: {"de": "Hortobágy", "hu": "Hortobágy", "ro": "Hortobágy", "en": "Hortobágy"},
    image: "/geo-images/hungary/hortobagy.webp",
    description: {"de": "Der grö�?te Nationalpark Ungarns, der die traditionelle Puszta-Landschaft schützt.", "hu": "Magyarország legnagyobb nemzeti parkja, amely a hagyományos pusztai tájat védi.", "ro": "Cel mai mare parc na�?ional din Ungaria, protejând peisajul tradi�?ional Puszta.", "en": "Hungary's largest national park, protecting the traditional Puszta landscape."},
    descriptionAdvanced: {
      "de": "Hortobágy ist das Herz der ungarischen Puszta und der grö�?te Nationalpark des Landes, der für seine unendliche Weite und einzigartige Hirtenkultur bekannt ist. Die Region gehört zum UNESCO-Weltkulturerbe und bewahrt die traditionelle Lebensweise der Puszta-Hirten mit ihren charakteristischen Ziehbrunnen und Peitschenknallen. Besucher können hier seltene Haustierrassen wie das graue Steppenrind, das Zackelschaf und das Wollschwein (Mangalica) in ihrer natürlichen Umgebung beobachten. Das Wahrzeichen der Region ist die Neunbögige Brücke, die sich elegant über den Fluss Hortobágy spannt und Schauplatz traditionsreicher Märkte ist. Hortobágy ist ein Ort von archaischer Schönheit, der die Seele der ungarischen Tiefebene widerspiegelt.",
      "hu": "Hortobágy Magyarország legnagyobb és legismertebb pusztája, az UNESCO Világörökség része, amely a magyar pásztorkultúra és az érintetlen természet egyedülálló �?rz�?helye. A hortobágyi rónaság végtelen horizontja, a délibáb és a gulyás-csikós hagyományok a magyar nemzeti identitás legfontosabb jelképei. Itt található a híres Kilenclyukú híd és a Hortobágyi csárda, ahol a látogatók megkóstolhatják a pusztai ételeket. A terület madárvilága nemzetközi jelent�?ségű, különösen a daruvonulás idején. Hortobágy nemcsak múzeum, hanem él�? puszta, ahol a szürke marhák, rackajuhok és a ménesek ma is szabadon élnek, hirdetve a magyar puszta szabadságát és szépségét.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark Hortobágy ist das erste und grö�?te Naturschutzgebiet Ungarns.", "Die Neunbögige Brücke ist die längste Steinbrücke für den Stra�?enverkehr in Ungarn.", "Hortobágy ist berühmt für seine 'Csikós', die berittenen Hirten mit ihren spektakulären Reitvorführungen.", "Die Region ist ein bedeutendes Vogelparadies und wichtiger Rastplatz für Tausende von Kranichen."],
      "hu": [
        "A Hortobágyi Nemzeti Park Magyarország els�? és legnagyobb nemzeti parkja (alapítva 1973).",
        "A Kilenclyukú híd 167 méterével az ország leghosszabb k�?hídja.",
        "A Hortobágyon több mint 300 madárfaj fordul el�?, ami Európában is kiemelked�?.",
        "Itt látható a világ egyik legritkább lófajtája, a vadlovakat bemutató Pentezugi Vadlórezervátum.",
        "A pusztai csillagoségbolt-park min�?sítés elismeri a terület rendkívül alacsony fényszennyezését."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["UNESCO-Welterbe.", "Bekannt für die Neunbögige Brücke und traditionelle Hirtenkultur."], "hu": ["UNESCO világörökség.", "A Kilenclyukú hídról és a hagyományos pásztorkultúráról ismert."], "ro": ["Patrimoniu Mondial UNESCO.", "Cunoscut pentru Podul cu Nou�? Arcuri �?i cultura pastoral�? tradi�?ional�?."], "en": ["UNESCO World Heritage site.", "Known for the Nine-holed Bridge and traditional pastoral culture."]},
  },
  {
    id: "hajduszoboszlo",
    type: "city",
    parent: "HU-HB",
    coords: [21.4, 47.45],
    name: {"de": "Hajdúszoboszló", "hu": "Hajdúszoboszló", "ro": "Hajdúszoboszló", "en": "Hajdúszoboszló"},    description: {"de": "Berühmter Kurort mit dem grö�?ten Bäderkomplex Europas.", "hu": "Híres fürd�?város Európa legnagyobb fürd�?komplexumával.", "ro": "Faimoas�? sta�?iune balnear�? cu cel mai mare complex de b�?i din Europa.", "en": "Famous spa town with the largest bath complex in Europe."},
    descriptionAdvanced: {
      "de": "Hajdúszoboszló ist der bekannteste Badekurort Ungarns und beherbergt den grö�?ten Badekomplex Europas, der jährlich Millionen von Erholungssuchenden anzieht. Das ",
      "hu": "Hajdúszoboszló Európa egyik legnagyobb fürd�?komplexumával rendelkez�? városa az Alföldön, amelyet méltán neveznek a 'reumások Mekkája'-ként. Világhírnevét az 1925-ben feltör�? jódos, brómos és konyhasós gyógyvizének köszönheti, amely számtalan embernek hozott gyógyulást. A Hungarospa fürd�?komplexum nemcsak gyógyhely, hanem igazi vízi paradicsom is: strand, aquapark és egy különleges fedett élményfürd�? várja a látogatókat minden évszakban. Hajdúszoboszló barátságos, virágos parkjai, rendezett terei és pezsg�? turisztikai élete a pihenés és a szórakozás tökéletes helyszíne, ahol a vendégszeretet és a gyógyító er�? kéz a kézben jár.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hajdúszoboszló besitzt den grö�?ten Bade- und Wellnesskomplex in ganz Europa.", "Das Heilwasser der Stadt wird aufgrund seiner Farbe und Heilkraft oft als 'flüssiges Gold' bezeichnet.", "Der Aquapark von Hajdúszoboszló war der erste Rutschenpark in Ungarn.", "Die Stadt feiert jährlich das Fest des 'Goldenen Wassers' zur Erinnerung an die Entdeckung der Quellen."],
      "hu": [
        "A hajdúszoboszlói gyógyvizet 1925-ben földgázkutatás közben fedezték fel véletlenül.",
        "A komplexum területe több mint 30 hektár, s egyszerre akár 30 ezer ember is fürödhet benne.",
        "Hajdúszoboszló az ország egyik leglátogatottabb városa Budapest és Hévíz után.",
        "A városban található a Harangház, egy egyedülálló hangművészeti és képz�?művészeti alkotás.",
        "A gyógyvíz jellegzetes sötétbarna színét magas ásványianyag-tartalma adja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde 1925 entdeckt.", "Beliebtes Ziel für Gesundheitstourismus."], "hu": ["A termálvizet 1925-ben fedezték fel.", "Népszerű egészségturisztikai célpont."], "ro": ["Apa termal�? a fost descoperit�? în 1925.", "Destina�?ie popular�? pentru turismul de s�?n�?tate."], "en": ["The thermal water was discovered in 1925.", "Popular destination for health tourism."]},
  },
  {
    id: "eger",
    type: "city",
    parent: "HU-HE",
    coords: [20.3739, 47.9025],
    name: {"de": "Erlau", "hu": "Eger", "ro": "Eger", "en": "Eger"},
    image: "/geo-images/hungary/eger.webp",
    description: {
      "de": "Eger, eine der schönsten Barockstädte Ungarns, liegt im Nordosten des Landes am Fu�?e des Bükk-Gebirges. Die Stadt ist berühmt für ihre heldenhafte Burg, die 1552 der osmanischen Belagerung standhielt, sowie für ihre erstklassigen Weine, insbesondere das 'Erlauer Stierblut' (Egri Bikavér). Besucher können das nördlichste Minarett aus der Türkenzeit besteigen oder in den historischen Thermalbädern entspannen. Die malerische Altstadt mit ihren Kirchen und Museen macht Eger zu einem der beliebtesten Reiseziele Ungarns.",
      "hu": "Eger, Magyarország egyik legszebb barokk városa, az ország északkeleti részén, a Bükk-hegység lábánál fekszik. A város híres h�?sies váráról, amely 1552-ben ellenállt az oszmán ostromnak, valamint kiváló borairól, különösen az Egri Bikavérr�?l. A látogatók megmászhatják a török korból származó legészakibb minaretet, vagy kikapcsolódhatnak a történelmi termálfürd�?kben. A fest�?i óváros templomaival és múzeumaival Egert Magyarország egyik legnépszerűbb úti céljává teszi.",
      "ro": "Eger, unul dintre cele mai frumoase ora�?e baroce din Ungaria, este situat în nord-estul �?�?rii, la poalele mun�?ilor Bükk. Ora�?ul este faimos pentru castelul s�?u eroic, care a rezistat asediului otoman în 1552, precum �?i pentru vinurile sale de prim�? clas�?, în special 'Sânge de Taur de Eger' (Egri Bikavér). Vizitatorii pot urca în cel mai nordic minaret din epoca turc�? sau se pot relaxa în b�?ile termale istorice. Centrul vechi pitoresc, cu bisericile �?i muzeele sale, face din Eger una dintre cele mai populare destina�?ii din Ungaria.",
      "en": "Eger, one of Hungary's most beautiful Baroque cities, is located in the northeastern part of the country at the foot of the Bükk Mountains. The city is famous for its heroic castle, which withstood an Ottoman siege in 1552, and its world-class wines, particularly the 'Bull's Blood of Eger' (Egri Bikavér). Visitors can climb the northernmost minaret from the Turkish era or relax in the historic thermal baths. The picturesque old town, with its churches and museums, makes Eger one of Hungary's most popular travel destinations."
    },
    descriptionAdvanced: {
      "de": "Eger, im Norden Ungarns gelegen, ist eine Stadt von historischem Glanz, berühmter Weinkultur und beeindruckender Architektur. Bekannt wurde die Stadt vor allem durch die heldenhafte Verteidigung ihrer Burg gegen das osmanische Heer im Jahr 1552, ein Ereignis, das tief im ungarischen Nationalbewusstsein verankert ist. Das barocke Stadtbild wird von der monumentalen Basilika, dem Lyzeum mit seiner berühmten Bibliothek und dem nördlichsten Minarett aus der Zeit der Türkenherrschaft geprägt. Eger ist zudem das Zentrum einer erstklassigen Weinregion, deren bekanntester Tropfen das ",
      "hu": "Eger a történelmi h�?sök városa a Mátra és a Bükk lábánál, Magyarország egyik legszebb és leglátogatottabb barokk települése. A város neve elválaszthatatlan az 1552-es várvédést�?l, amikor Dobó István maroknyi serege megállította a török áradatot, h�?sies példát mutatva az utókornak. Eger központja az impozáns vár, a barokk Bazilika és a török kori minaret, amely az ország egyik legészakibb iszlám emléke. A város világhírű borvidék központja is, az Egri Bikavér és a Szépasszony-völgy pincéi a borkultúra szerelmeseinek kötelez�? célpontjai. Eger pezsg�? kulturális élete, termálfürd�?je és történelmi utcái minden látogatót elvarázsolnak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Eger ist berühmt für seine Burg, die 1552 erfolgreich gegen eine enorme osmanische �?bermacht verteidigt wurde.", "Die Stadt beherbergt ein original erhaltenes osmanisches Minarett, das nördlichste seiner Art.", "Das 'Erlauer Stierblut' (Egri Bikavér) ist einer der bekanntesten Rotweine Ungarns.", "Die Basilika von Eger ist die zweitgrö�?te Kirche Ungarns."],
      "hu": [
        "Eger vára 1552-ben ellenállt a több mint tízszeres török túler�?nek.",
        "Itt található Magyarország egyetlen épségben maradt minaretje a török hódoltság korából.",
        "Az egri Bazilika az ország második legnagyobb temploma az esztergomi után.",
        "A Szépasszony-völgy több mint 200 vulkanikus tufa-falba vájt borospincével várja a vendégeket.",
        "Gárdonyi Géza, az Egri csillagok írója a várban van eltemetve, sírfelirata: 'Csak a teste'."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Heves und ein bedeutendes religiöses Zentrum.",
        "Die Burg Eger ist ein Symbol des ungarischen Widerstands gegen die Türken.",
        "Heimat des Egri Bikavér, eines der bekanntesten ungarischen Rotweine.",
        "Das Eger-Minarett ist eines von nur drei erhaltenen in Ungarn.",
        "Die Basilika von Eger ist die zweitgrö�?te Kirche des Landes.",
        "Bekannt für das Tal der Schönen Frau (Szépasszony-völgy) mit seinen Weinkellern.",
        "Das Lyzeum beherbergt eine der schönsten Bibliotheken und eine Camera Obscura.",
        "Beliebtes Ziel für Weintourismus und Wellness."
      ],
      "hu": [
        "Heves vármegye székhelye és jelent�?s vallási központ.",
        "Az egri vár a török elleni magyar ellenállás jelképe.",
        "Az Egri Bikavér, az egyik legismertebb magyar vörösbor hazája.",
        "Az egri minaret egyike a Magyarországon épségben maradt három török toronynak.",
        "Az egri Bazilika az ország második legnagyobb temploma.",
        "Híres a Szépasszony-völgyr�?l és annak hangulatos borpincéir�?l.",
        "A Líceum épületében található az ország egyik legszebb könyvtára és egy Camera Obscura.",
        "Népszerű borturisztikai és wellness úti cél."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Heves �?i un centru religios important.",
        "Castelul Eger este un simbol al rezisten�?ei maghiare împotriva turcilor.",
        "Casa Egri Bikavér, unul dintre cele mai cunoscute vinuri ro�?ii maghiare.",
        "Minaretul din Eger este unul dintre cele trei r�?mase în Ungaria.",
        "Bazilica din Eger este a doua cea mai mare biseric�? din �?ar�?.",
        "Faimos pentru Valea Femeii Frumoase (Szépasszony-völgy) �?i cramele sale.",
        "Liceul g�?zduie�?te una dintre cele mai frumoase biblioteci �?i o Camera Obscura.",
        "Destina�?ie popular�? pentru turism viticol �?i wellness."
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
  },
  {
    id: "gyongyos",
    type: "city",
    parent: "HU-HE",
    coords: [19.9281, 47.7833],
    name: {"de": "Gyöngyös", "hu": "Gyöngyös", "ro": "Gyöngyös", "en": "Gyöngyös"},
    image: "/geo-images/hungary/gyongyos.webp",
    description: {"de": "Stadt am Fu�?e des Mátra-Gebirges, das 'Tor zur Mátra'.", "hu": "Város a Mátra lábánál, a 'Mátra kapuja'.", "ro": "Ora�? la poalele mun�?ilor Mátra, 'Poarta c�?tre Mátra'.", "en": "City at the foot of the Mátra mountains, the 'Gateway to the Mátra'."},
    descriptionAdvanced: {
      "de": "Gyöngyös, am Fu�?e des Mátra-Gebirges gelegen, ist als das ",
      "hu": "Gyöngyös, a 'Mátra kapuja', Heves vármegye jelent�?s városa, amely történelmi hangulatával és a hegyvidék közelségével vonzza a látogatókat. A város központja a tágas F�? tér a barokk Szent Bertalan-templommal és a Ferences kolostorral, amely az ország egyik leggazdagabb egyházi kincstárát �?rzi. Gyöngyös élete szorosan összefonódik a Mátra turizmusával: innen indul a népszerű mátravasút és a Kékes-tet�? felé vezet�? utak. A város híres borászatáról is, a Mátrai borvidék fehérborai (pl. Szürkebarát, Olaszrizling) messze földön ismertek. Gyöngyös a kultúra, a vallási emlékek és a természetjárás ideális találkozóhelye az �?szaki-középhegység lábánál.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gyöngyös ist der wichtigste Knotenpunkt für Ausflüge in das Mátra-Gebirge.", "Das Mátra-Museum im Grassalkovich-Schloss beherbergt ein fast vollständiges Mammutskelett.", "Die Stadt ist ein historisches Zentrum des Weinanbaus am Fu�?e des Gebirges.", "Von Gyöngyös aus startet die Mátra-Schmalspurbahn, eine beliebte Touristenattraktion."],
      "hu": [
        "Gyöngyös már a középkorban is fontos kereskedelmi és egyházi központ volt a Mátra lábánál.",
        "A Szent Bertalan-templom kincstára az ország második legjelent�?sebb egyházi gyűjteménye.",
        "Itt található a Mátra Múzeum, amely az ország egyetlen komplett mamutcsontvázát �?rzi.",
        "A gyöngyösi Orczy-kastély az alföldi és a hegyvidéki építészet különleges elegye.",
        "A város határában található Európa egyik legnagyobb naper�?mű-parkja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Zentrum der Weinregion Mátra.", "Ausgangspunkt für Ausflüge zum Kékes."], "hu": ["A Mátrai borvidék központja.", "Kiindulópont a Kékesre tett kirándulásokhoz."], "ro": ["Centrul regiunii viticole Mátra.", "Punct de plecare pentru excursii la Kékes."], "en": ["Center of the Mátra wine region.", "Starting point for excursions to Kékes."]},
  },
  {
    id: "matra",
    type: "landmark",
    parent: "HU-HE",
    coords: [19.9833, 47.8833],
    name: {"de": "Mátra", "hu": "Mátra", "ro": "Mátra", "en": "Mátra"},
    image: "/geo-images/hungary/matra.webp",
    description: {"de": "Gebirgszug in Nordungarn, der den höchsten Gipfel des Landes beherbergt.", "hu": "Hegység �?szak-Magyarországon, itt található az ország legmagasabb csúcsa.", "ro": "Lan�? muntos în nordul Ungariei, care g�?zduie�?te cel mai înalt vârf din �?ar�?.", "en": "Mountain range in northern Hungary, home to the country's highest peak."},
    descriptionAdvanced: {
      "de": "Das Mátra-Gebirge im Norden Ungarns ist die Heimat des Kékes-Tet�?, der mit 1014 Metern der höchste Gipfel des Landes ist. Die Region ist geprägt von dichten Buchen- und Eichenwäldern, klaren Bächen und einer Vielzahl an Wanderwegen, die Naturliebhaber und Sportler gleicherma�?en anziehen. Bekannte Kurorte wie Galyatet�? oder Mátraháza bieten frische Bergluft und moderne Wellness-Anlagen für Erholungssuchende. Im Winter verwandelt sich das Mátra-Gebirge in eines der beliebtesten Skigebiete Ungarns mit gut präparierten Pisten und Loipen. Die vielfältige Flora und Fauna sowie die atemberaubenden Ausblicke von den Berggipfeln machen die Mátra zu einem der wertvollsten Naturgebiete des Landes.",
      "hu": "A Mátra Magyarország egyik legnépszerűbb hegyvidéki tájegysége, ahol az ország legmagasabb csúcsai (Kékes-tet�?, Galya-tet�?) és legsűrűbb erd�?i találhatók. A vulkanikus eredetű hegység vadregényes völgyei, kristálytiszta forrásai és kiépített túraútvonalai minden évszakban vonzzák a természetbarátokat. A Mátra nemcsak kirándulóhely, hanem fontos gyógyhely is: tiszta leveg�?je és különleges klímája kiválóan alkalmas légz�?szervi panaszok kezelésére. Télen a Mátra az ország síközpontjává válik, nyáron pedig a kalandparkok és a kisvasutak nyújtanak élményt. A hegység déli lejt�?i híres borvidéket alkotnak, ahol a vulkanikus talaj kiváló fehérborokat érlel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Mátra-Gebirge beherbergt den höchsten Berg Ungarns, den Kékes-Tet�?.", "Die Region ist eines der schneesichersten Gebiete des Landes und ein Zentrum des Wintersports.", "Das Mátra-Gebirge ist vulkanischen Ursprungs, was sich in der Bodenbeschaffenheit und Vegetation zeigt.", "Zahlreiche Wanderwege führen zu Aussichtspunkten mit Blick über die ungarische Tiefebene bis nach Bratislava."],
      "hu": [
        "A Mátrában található Magyarország legmagasabb pontja, a Kékes-tet�? (1014 m).",
        "A hegység vulkanikus eredetű, amit a sok tufa- és andezit-szikla hirdet.",
        "Galyatet�?n működik az ország legmagasabban fekv�? kilátója és turistacentruma.",
        "A Mátra erd�?iben számos ritka és védett állatfaj él, köztük a hiúz is.",
        "A mátrai kisvasút (Mátravasút) az ország egyik legforgalmasabb és legszebb erdei vasútvonala."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der Kékes ist mit 1014 Metern der höchste Berg Ungarns.", "Beliebtes Gebiet zum Wandern und Skifahren."], "hu": ["A Kékes 1014 méterével Magyarország legmagasabb hegye.", "Népszerű túrázó- és síterep."], "ro": ["Kékes este cel mai înalt munte din Ungaria, cu 1014 metri.", "Zon�? popular�? pentru drume�?ii �?i schi."], "en": ["Kékes is the highest mountain in Hungary at 1014 meters.", "Popular area for hiking and skiing."]},
  },
  {
    id: "szolnok",
    type: "city",
    parent: "HU-JN",
    coords: [20.2, 47.1833],
    name: {"de": "Sollnock", "hu": "Szolnok", "ro": "Szolnok", "en": "Szolnok"},
    description: {
      "de": "Szolnok liegt im Herzen Ungarns an der Mündung der Zagyva in die Thei�? und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt ist bekannt für ihre lebendige Flusslandschaft, die moderne Tiszavirág-Brücke und ihre reiche Tradition in der Luftfahrt. Besucher können das beeindruckende Luftfahrtmuseum 'RepTár' erkunden oder in den Thermalbädern der Stadt entspannen. Szolnok ist zudem ein wichtiges Zentrum für Kultur und Sport in der Region der Nördlichen Gro�?en Tiefebene.",
      "hu": "Szolnok Magyarország szívében, a Zagyva tiszai torkolatánál fekszik, és fontos közlekedési csomópont. A város híres a nyüzsg�? folyóparti életér�?l, a modern Tiszavirág hídról és gazdag repüléstörténeti múltjáról. A látogatók felfedezhetik a lenyűgöz�? RepTár repül�?múzeumot, vagy kikapcsolódhatnak a város termálfürd�?iben. Szolnok emellett az �?szak-Alföld régió meghatározó kulturális és sportközpontja.",
      "ro": "Szolnok este situat în inima Ungariei, la confluen�?a râului Zagyva cu Tisa, fiind un important nod de transport. Ora�?ul este cunoscut pentru peisajul s�?u fluvial vibrant, podul modern Tiszavirág �?i tradi�?ia sa bogat�? în avia�?ie. Vizitatorii pot explora impresionantul muzeu al avia�?iei 'RepTár' sau se pot relaxa în b�?ile termale ale ora�?ului. Szolnok este, de asemenea, un centru important pentru cultur�? �?i sport în regiunea Marii Câmpii de Nord.",
      "en": "Szolnok is located in the heart of Hungary at the confluence of the Zagyva and Tisza rivers, serving as a major transportation hub. The city is famous for its vibrant riverfront, the modern Tiszavirág Bridge, and its rich aviation heritage. Visitors can explore the impressive 'RepTár' aviation museum or relax in the city's thermal baths. Szolnok is also a significant cultural and sporting center in the Northern Great Plain region."
    },
    descriptionAdvanced: {
      "de": "Szolnok liegt strategisch günstig am Zusammenfluss von Thei�? und Zagyva im Herzen der ungarischen Tiefebene und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt hat eine lange Geschichte als Flussübergang und war einst ein wichtiges militärisches und wirtschaftliches Zentrum. Ein besonderes kulturelles Highlight ist die Künstlerkolonie von Szolnok, die seit über einem Jahrhundert Maler und Bildhauer anzieht und das kulturelle Leben der Stadt prägt. Die Stadt ist zudem für ihre Thermalbäder und das imposante Szigligeti-Theater bekannt, das ein wichtiger Ort für das ungarische Schauspielwesen ist. Entlang der Thei�? lädt die breite Promenade zu entspannten Spaziergängen ein, während das jährliche Gulasch-Festival die kulinarische Tradition der Region feiert.",
      "hu": "Szolnok, a 'Tisza f�?városa', az Alföld szívében fekv�? fontos közlekedési, gazdasági és kulturális központ, ahol a Tisza és a Zagyva folyó találkozik. A város élete elválaszthatatlan a Tiszától: a folyóparti sétányok, a szabadstrand és az emblematikus Tiszavirág-híd a város legszebb részei. Szolnok híres repüléstörténeti múltjáról, amit a modern Reptár múzeum mutat be, valamint pezsg�? művészeti életér�?l, amit a Szolnoki Művésztelep képvisel. A város gyógyfürd�?je és az aktív vízi sportok lehet�?sége kiváló pihenést nyújt minden korosztálynak. Szolnok az alföldi vendégszeretet és a modern városi fejl�?dés harmonikus ötvözete a folyó partján.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szolnok liegt am geografischen Zusammenfluss der Flüsse Thei�? und Zagyva.", "Die Stadt beherbergt eine der ältesten und bedeutendsten Künstlerkolonien Ungarns.", "Die Szolnoker Fu�?gängerbrücke (Tiszavirág-híd) ist die längste ihrer Art in Mitteleuropa.", "Jährlich findet in Szolnok das ungarische Gulasch-Festival statt."],
      "hu": [
        "Szolnok városa már a honfoglalás óta fontos átkel�?hely a Tisza folyón.",
        "A Tiszavirág-híd Közép-Európa leghosszabb gyalogoshídja, formája a kérész szárnyát idézi.",
        "Itt található a Reptár, Európa egyik legmodernebb interaktív repül�?múzeuma.",
        "A Szolnoki Művésztelep az ország legrégebbi, folyamatosan működ�? művésztelepe (alapítva 1902).",
        "Szolnok híres a tiszai halászlevér�?l és a szolnoki habos isler süteményr�?l."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Jász-Nagykun-Szolnok.",
        "Die Tiszavirág-Brücke ist die längste Fu�?gängerbrücke Mitteleuropas.",
        "Das RepTár ist eines der modernsten Luftfahrtmuseen in Europa.",
        "Bekannt für das jährliche Gulasch-Festival im September.",
        "Wichtiger Eisenbahnknotenpunkt an der Strecke Budapest-Bukarest.",
        "Die Stadt hat eine renommierte Künstlerkolonie, die 1902 gegründet wurde.",
        "Beliebtes Ziel für Wassersportler auf der Thei�?.",
        "Beherbergt das Damjanich-János-Museum mit bedeutenden archäologischen Funden."
      ],
      "hu": [
        "Jász-Nagykun-Szolnok vármegye székhelye.",
        "A Tiszavirág híd Közép-Európa leghosszabb gyalogoshídja.",
        "A RepTár Európa egyik legmodernebb repüléstörténeti múzeuma.",
        "Híres az évente szeptemberben megrendezett Gulyásfesztiválról.",
        "Fontos vasúti csomópont a Budapest-Bukarest vonalon.",
        "A város neves művészteleppel rendelkezik, amelyet 1902-ben alapítottak.",
        "Népszerű úti cél a Tisza menti vízi sportok kedvel�?i számára.",
        "Itt található a Damjanich János Múzeum jelent�?s régészeti gyűjteménye."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Jász-Nagykun-Szolnok.",
        "Podul Tiszavirág este cel mai lung pod pietonal din Europa Central�?.",
        "RepTár este unul dintre cele mai moderne muzee de avia�?ie din Europa.",
        "Cunoscut pentru festivalul anual al gula�?ului din septembrie.",
        "Nod feroviar important pe ruta Budapesta-Bucure�?ti.",
        "Ora�?ul are o colonie de arti�?ti renumit�?, fondat�? în 1902.",
        "Destina�?ie popular�? pentru sporturi nautice pe râul Tisa.",
        "G�?zduie�?te Muzeul Damjanich János cu descoperiri arheologice importante."
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
  },
  {
    id: "jaszbereny",
    type: "city",
    parent: "HU-JN",
    coords: [19.9167, 47.5],
    name: {"de": "Jászberény", "hu": "Jászberény", "ro": "Jászberény", "en": "Jászberény"},
    image: "/geo-images/hungary/jaszbereny.webp",
    description: {"de": "Das kulturelle und wirtschaftliche Zentrum der Region Jászság.", "hu": "A Jászság kulturális és gazdasági központja.", "ro": "Centrul cultural �?i economic al regiunii Jászság.", "en": "The cultural and economic center of the Jászság region."},
    descriptionAdvanced: {
      "de": "Jászberény ist das kulturelle und historische Zentrum des Jászság, einer Region, die im 13. Jahrhundert von den Jazygen besiedelt wurde. Die Stadt bewahrt stolz das Erbe dieser Volksgruppe, was im Jazygen-Museum eindrucksvoll dokumentiert wird. Das wertvollste Exponat ist das berühmte Lehel-Horn, ein elfenbeinernes Relikt, das eng mit der ungarischen Sagenwelt verknüpft ist. Jászberény ist zudem für seinen charmanten Tierpark bekannt, der einer der ältesten und beliebtesten des Landes ist und ein tolles Ausflugsziel für Familien darstellt. Die Stadt ist geprägt von barocker Architektur und einer lebendigen Traditionspflege, die bei zahlreichen Festen und kulturellen Veranstaltungen zum Ausdruck kommt.",
      "hu": "Jászberény a Jászság f�?városa és kulturális központja a Zagyva folyó partján, amely büszkén �?rzi a jászok különleges történelmi és néprajzi örökségét. A város szimbóluma a Jász Múzeumban �?rzött Lehel-kürtje, a jászok szent ereklyéje. Jászberény híres családbarát Állat- és Növénykertjér�?l, amely az ország egyik leghangulatosabb vidéki vadasparkja. A város f�?tere a monumentális épületekkel, a barokk templommal és a tágas parkokkal igazi mez�?városi hangulatot áraszt. Jászberény ma is a térség gazdasági motorja, ahol a hagyomány�?rzés (pl. Csángó Fesztivál) és az ipari fejl�?dés kéz a kézben jár, vonzó célpontot jelentve a kultúra és a természet kedvel�?inek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Jászberény ist das historische Zentrum der Region Jászság (Jazygien).", "Das Lehel-Horn, ein legendäres Elfenbeinhorn aus dem 10. Jahrhundert, wird im örtlichen Museum aufbewahrt.", "Der Tier- und Pflanzenpark von Jászberény ist eine der traditionsreichsten Anlagen Ungarns.", "Die Stadt feiert jährlich das Jazygen-Festival zur Pflege ihrer kulturellen Identität."],
      "hu": [
        "A jászberényi Jász Múzeumban látható a Lehel-kürtje, a jász nép 10. századi ereklyéje.",
        "A Jászberényi Állatkert volt az ország els�? vidéki állatkertje után alapított egyik legrégebbi vadaspark.",
        "Minden évben itt rendezik meg a Csángó Fesztivált, a népművészet egyik legfontosabb hazai ünnepét.",
        "A város f�?terén álló Szentháromság-szobor a barokk vallásos művészet remeke.",
        "Jászberény a hűt�?gépgyártásáról is világszerte ismertté vált az elmúlt évtizedekben."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bewahrt das Horn des Lehel, ein nationales Relikt.", "Veranstaltet jährlich das Jász-Festival."], "hu": ["Itt �?rzik Lehel kürtjét, egy nemzeti ereklyét.", "�?vente megrendezik a Jász Világtalálkozót."], "ro": ["P�?streaz�? Cornul lui Lehel, o relicv�? na�?ional�?.", "G�?zduie�?te anual Festivalul Jász."], "en": ["Preserves the Horn of Lehel, a national relic.", "Hosts the annual Jász Festival."]},
  },
  {
    id: "kisujszallas",
    type: "city",
    parent: "HU-JN",
    coords: [20.7667, 47.2167],
    name: {"de": "Kisújszállás", "hu": "Kisújszállás", "ro": "Kisújszállás", "en": "Kisújszállás"},
    image: "/geo-images/hungary/kisujszallas.webp",
    description: {"de": "Stadt in der Region Nagykunság mit landwirtschaftlicher Prägung.", "hu": "Nagykunsági város mez�?gazdasági jelleggel.", "ro": "Ora�? în regiunea Nagykunság cu caracter agricol.", "en": "City in the Nagykunság region with an agricultural character."},
    descriptionAdvanced: {
      "de": "Kisújszállás liegt in der Region Nagykunság (Gro�?kumanien) und blickt auf eine Geschichte zurück, die eng mit der Ansiedlung der Kumanen im Mittelalter verbunden ist. Die Stadt ist geprägt von einer ruhigen, ländlichen Atmosphäre und einer Architektur, die typisch für die Siedlungen der ungarischen Tiefebene ist. Ein bedeutendes Wahrzeichen ist das klassizistische Rathaus sowie die reformierte Kirche, die den religiösen Charakter der Region widerspiegelt. Kisújszállás ist stolz auf seine berühmten Söhne, darunter der Erfinder der modernen Computertechnik, John von Neumann, dessen Familie Wurzeln in der Stadt hatte. Heute bietet die Stadt mit dem Kumánia Heil- und Strandbad moderne Erholungsmöglichkeiten in einer traditionsbewussten Umgebung.",
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
    facts: {"de": ["Bekannt für sein Thermalbad.", "Geburtsort des Biologen István Györffy."], "hu": ["Termálfürd�?jér�?l ismert.", "Györffy István biológus szül�?városa."], "ro": ["Cunoscut pentru baia sa termal�?.", "Locul de na�?tere al biologului István Györffy."], "en": ["Known for its thermal bath.", "Birthplace of biologist István Györffy."]},
  },
  {
    id: "tatabanya",
    type: "city",
    parent: "HU-KE",
    coords: [18.4222, 47.58],
    name: {"de": "Totiserkolonie", "hu": "Tatabánya", "ro": "Tatabánya", "en": "Tatabánya"},
    image: "/geo-images/hungary/tatabanya.webp",
    description: {
      "de": "Tatabánya, am Fu�?e des Gerecse-Gebirges gelegen, ist eine Stadt mit einer starken industriellen Vergangenheit, die sich zu einem modernen Zentrum entwickelt hat. Das markanteste Wahrzeichen ist das Turul-Denkmal, die grö�?te Vogelstatue Europas, die hoch über der Stadt auf einem Felsen thront. In der Nähe befindet sich die Szelim-Höhle, eine bedeutende archäologische Fundstätte. Tatabánya bietet zudem zahlreiche Möglichkeiten für Wanderungen und Naturerlebnisse in den umliegenden Bergen.",
      "hu": "Tatabánya, a Gerecse-hegység lábánál fekv�? város, er�?s ipari múlttal rendelkezik, amely mára modern központtá fejl�?dött. Legismertebb jelképe a Turul-emlékmű, Európa legnagyobb madárszobra, amely a város feletti sziklán magasodik. A közelben található a Szelim-barlang, amely jelent�?s régészeti lel�?hely. Tatabánya emellett számos lehet�?séget kínál túrázásra és természetjárásra a környez�? hegyekben.",
      "ro": "Tatabánya, situat la poalele mun�?ilor Gerecse, este un ora�? cu un trecut industrial puternic, care s-a dezvoltat într-un centru modern. Cel mai proeminent simbol al s�?u este Monumentul Turul, cea mai mare statuie a unei p�?s�?ri din Europa, situat�? pe o stânc�? deasupra ora�?ului. �?n apropiere se afl�? pe�?tera Szelim, un sit arheologic important. Tatabánya ofer�?, de asemenea, numeroase oportunit�?�?i pentru drume�?ii �?i experien�?e în natur�? în mun�?ii din jur.",
      "en": "Tatabánya, located at the foot of the Gerecse Mountains, is a city with a strong industrial past that has evolved into a modern center. Its most iconic landmark is the Turul Monument, the largest bird statue in Europe, perched on a cliff high above the city. Nearby is the Szelim Cave, a significant archaeological site. Tatabánya also offers numerous opportunities for hiking and nature experiences in the surrounding mountains."
    },
    descriptionAdvanced: {
      "de": "Tatabánya, am Fu�?e des Gerecse-Gebirges gelegen, hat sich von einer bedeutenden Bergbaustadt zu einem modernen Industrie- und Sportzentrum gewandelt. Das unübersehbare Wahrzeichen der Stadt ist der Turul-Vogel, die grö�?te Vogelstatue aus Bronze in Europa, die auf einem Felsen hoch über der Stadt thront. Neben dem Turul-Denkmal befindet sich die Szelim-Höhle, eine beeindruckende natürliche Höhle mit prähistorischen Funden und einer fantastischen Aussicht. Tatabánya ist zudem für seine erfolgreiche Sporttradition bekannt und bietet zahlreiche Einrichtungen für Profi- und Freizeitsportler. Die waldreiche Umgebung des Gerecse-Gebirges lädt zu ausgiebigen Wanderungen und Naturbeobachtungen ein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Turul-Denkmal in Tatabánya ist die grö�?te Bronzestatue eines Vogels in Europa.", "Die Szelim-Höhle ist ein bedeutendes paläontologisches Denkmal direkt neben dem Turul-Vogel.", "Die Stadt hat eine lange Bergbaugeschichte, die im Open-Air-Bergbaumuseum dokumentiert wird.", "Tatabánya ist ein wichtiger Knotenpunkt an der Bahnstrecke Wien-Budapest."],
      "hu": [],
      "ro": [],
      "en": []
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
        "A Szelim-barlang már a k�?korszakban is lakott volt.",
        "Fontos ipari központ az M1-es autópálya mentén (Budapest-Bécs).",
        "A Szabadtéri Bányászati Múzeum a szénbányászat történetét mutatja be.",
        "Népszerű kiindulópont a Gerecse-hegységbe induló túrákhoz.",
        "A város modern sportközponttal és termálfürd�?vel is rendelkezik."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Komárom-Esztergom.",
        "Monumentul Turul are o anvergur�? a aripilor de 15 metri.",
        "Format în 1947 prin unirea a patru sate miniere.",
        "Pe�?tera Szelim a fost locuit�? înc�? din epoca pietrei.",
        "Centru industrial important pe autostrada M1 (Budapesta-Viena).",
        "Muzeul Mineritului în Aer Liber prezint�? istoria extrac�?iei c�?rbunelui.",
        "Baz�? popular�? pentru drume�?ii în mun�?ii Gerecse.",
        "Ora�?ul are un centru sportiv modern �?i o baie termal�?."
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
  },
  {
    id: "esztergom",
    type: "city",
    parent: "HU-KE",
    coords: [18.7394, 47.7914],
    name: {"de": "Gran", "hu": "Esztergom", "ro": "Esztergom", "en": "Esztergom"},
    image: "/geo-images/hungary/esztergom.webp",
    description: {
      "de": "Esztergom, am malerischen Donauknie gelegen, ist eine der geschichtsträchtigsten Städte Ungarns und das geistige Zentrum der katholischen Kirche des Landes. Die Stadt war die erste Hauptstadt Ungarns und der Geburtsort des Heiligen Stephan, des ersten Königs. Das Stadtbild wird von der monumentalen Basilika dominiert, der grö�?ten Kirche Ungarns, die majestätisch auf dem Burgberg thront. Besucher können zudem die �?berreste des mittelalterlichen Königspalastes erkunden und den Blick über die Donau nach der Slowakei genie�?en.",
      "hu": "Esztergom, a fest�?i Dunakanyarban fekszik, Magyarország egyik legfontosabb történelmi városa és a magyar katolikus egyház központja. A város az ország els�? f�?városa volt, és itt született Szent István, az els�? magyar király. A városképet a monumentális Bazilika uralja, amely Magyarország legnagyobb temploma, és fenségesen magasodik a Várhegyen. A látogatók megtekinthetik a középkori királyi palota maradványait is, és élvezhetik a Dunára és Szlovákiára nyíló kilátást.",
      "ro": "Esztergom, situat în pitorescul Cot al Dun�?rii, este unul dintre cele mai importante ora�?e istorice din Ungaria �?i centrul spiritual al Bisericii Catolice din �?ar�?. Ora�?ul a fost prima capital�? a Ungariei �?i locul de na�?tere al Sfântului �?tefan, primul rege. Aspectul ora�?ului este dominat de Bazilica monumental�?, cea mai mare biseric�? din Ungaria, care troneaz�? maiestuos pe dealul castelului. Vizitatorii pot vedea, de asemenea, r�?m�?�?i�?ele palatului regal medieval �?i se pot bucura de vederea peste Dun�?re c�?tre Slovacia.",
      "en": "Esztergom, situated at the picturesque Danube Bend, is one of Hungary's most historically significant cities and the spiritual center of the country's Catholic Church. The city served as Hungary's first capital and was the birthplace of Saint Stephen, the first king. The cityscape is dominated by the monumental Basilica, the largest church in Hungary, which stands majestically on Castle Hill. Visitors can also explore the remains of the medieval Royal Palace and enjoy views across the Danube into Slovakia."
    },
    descriptionAdvanced: {
      "de": "Esztergom, die einstige Hauptstadt Ungarns und Wiege des ungarischen Christentums, liegt malerisch an der Donau direkt gegenüber der Slowakei. Hier wurde der erste ungarische König, der Heilige Stephan, gekrönt, und die Stadt ist bis heute der Sitz des ungarischen Primas. Das alles beherrschende Wahrzeichen ist die Esztergomer Basilika, die grö�?te Kirche des Landes, deren gewaltige Kuppel schon von weitem sichtbar ist. In der Schatzkammer der Basilika werden wertvolle sakrale Kunstschätze aus über einem Jahrtausend aufbewahrt. Neben der Basilika laden die Reste des königlichen Schlosses und die charmante Altstadt (Víziváros) am Donauufer dazu ein, in die reiche Geschichte Ungarns einzutauchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Esztergom war die erste Hauptstadt des ungarischen Königreichs.", "Die Basilika von Esztergom ist das grö�?te Kirchenbauwerk in Ungarn.", "In der Stadt wurde der erste ungarische König, der Heilige Stephan, geboren und gekrönt.", "Die Maria-Valeria-Brücke verbindet Esztergom mit der slowakischen Stadt Štúrovo."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Erste Hauptstadt Ungarns und Sitz des Erzbischofs von Esztergom-Budapest.",
        "Die Basilika von Esztergom ist die grö�?te Kirche und das höchste Gebäude Ungarns.",
        "Geburtsort und Krönungsort des Heiligen Stephan I.",
        "Die Maria-Valeria-Brücke verbindet Esztergom mit Štúrovo in der Slowakei.",
        "Das Christliche Museum beherbergt die bedeutendste kirchliche Kunstsammlung des Landes.",
        "Die Burg von Esztergom war im Mittelalter eine wichtige königliche Residenz.",
        "Bekannt für das malerische Viertel Viziváros am Fu�?e des Burgbergs.",
        "Wichtiger Industriestandort, unter anderem Sitz eines gro�?en Suzuki-Werks."
      ],
      "hu": [
        "Magyarország els�? f�?városa és az esztergom-budapesti érsek székhelye.",
        "Az esztergomi Bazilika az ország legnagyobb temploma és legmagasabb épülete.",
        "Szent István király szül�?- és koronázási helye.",
        "A Mária Valéria híd köti össze Esztergomot a szlovákiai Párkánnyal.",
        "A Keresztény Múzeum az ország legjelent�?sebb egyházi művészeti gyűjteményét �?rzi.",
        "Az esztergomi vár a középkorban fontos királyi székhely volt.",
        "Híres a Várhegy lábánál fekv�? fest�?i Vízivárosról.",
        "Fontos ipari központ, itt található a Suzuki magyarországi gyára."
      ],
      "ro": [
        "Prima capital�? a Ungariei �?i re�?edin�?a arhiepiscopului de Esztergom-Budapesta.",
        "Bazilica din Esztergom este cea mai mare biseric�? �?i cea mai înalt�? cl�?dire din Ungaria.",
        "Locul de na�?tere �?i de încoronare al regelui Sfântul �?tefan I.",
        "Podul Maria Valeria leag�? Esztergom de ora�?ul Štúrovo din Slovacia.",
        "Muzeul Cre�?tin g�?zduie�?te cea mai important�? colec�?ie de art�? religioas�? din �?ar�?.",
        "Castelul din Esztergom a fost o re�?edin�?�? regal�? important�? în Evul Mediu.",
        "Cunoscut pentru cartierul pitoresc Viziváros de la poalele dealului castelului.",
        "Centru industrial important, g�?zduind o mare fabric�? Suzuki."
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
  },
  {
    id: "tata",
    type: "city",
    parent: "HU-KE",
    coords: [18.3167, 47.65],
    name: {"de": "Totis", "hu": "Tata", "ro": "Tata", "en": "Tata"},
    image: "/geo-images/hungary/tata.webp",
    description: {"de": "Die 'Stadt der Gewässer', bekannt für ihre Lakes und die Burg.", "hu": "A 'Vizek városa', tavairól és váráról ismert.", "ro": "'Ora�?ul apelor', cunoscut pentru lacurile �?i castelul s�?u.", "en": "The 'City of Waters', known for its lakes and castle."},
    descriptionAdvanced: {
      "de": "Tata, auch als die 'Stadt der Gewässer' bekannt, ist eine der idyllischsten Kleinstädte Ungarns und liegt malerisch am Ufer des �?reg-Sees (Alten See). Das Wahrzeichen der Stadt ist die am Seeufer gelegene mittelalterliche Burg, die einst eine beliebte Sommerresidenz ungarischer Könige wie Sigismund von Luxemburg war. Tata besticht durch sein barockes Stadtbild, prachtvolle Schlösser wie das Esterházy-Schloss und zahlreiche Parks, die die Stadt in ein grünes Paradies verwandeln. Einzigartig ist auch der Englische Garten mit seinen künstlichen Ruinen und Thermalquellen, der zum Träumen und Verweilen einlädt. Jedes Jahr im November lockt der 'Wilde Gänse-Zug' Tausende Naturfreunde an den �?reg-See, um die Rast der Zugvögel zu beobachten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tata wird wegen seiner vielen Seen und Quellen oft als 'Stadt der Gewässer' bezeichnet.", "Die Burg von Tata am �?reg-See war eine wichtige Residenz der ungarischen Könige.", "Der Englische Garten von Tata war der erste seiner Art in Ungarn.", "Der �?reg-See ist ein international bedeutendes Schutzgebiet für wandernde Wildgänse."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg Tata liegt malerisch am Ufer des �?reg-Sees.", "Beliebter Ort für Vogelbeobachtungen."], "hu": ["A tatai vár fest�?i környezetben, az �?reg-tó partján fekszik.", "Népszerű madármegfigyel�? hely."], "ro": ["Castelul Tata este situat pitoresc pe malul Lacului �?reg.", "Loc popular pentru observarea p�?s�?rilor."], "en": ["Tata Castle is picturesquely situated on the shores of Lake �?reg.", "Popular spot for bird watching."]},
  },
  {
    id: "salgotarjan",
    type: "city",
    parent: "HU-NO",
    coords: [19.8053, 48.0986],
    name: {"de": "Salgótarján", "hu": "Salgótarján", "ro": "Salgótarján", "en": "Salgótarján"},
    image: "/geo-images/hungary/salgotarjan.webp",
    description: {"de": "Stadt in einem Tal umgeben von Bergen, ehemalige Bergbaustadt.", "hu": "Hegyekkel körülvett völgyben fekv�? város, egykori bányászváros.", "ro": "Ora�? într-o vale înconjurat�? de mun�?i, fost ora�? minier.", "en": "City in a valley surrounded by mountains, former mining town."},
    descriptionAdvanced: {
      "de": "Salgótarján, eingebettet in die bewaldeten Täler des Karancs-Medves-Gebirges im Norden Ungarns, ist eine Stadt mit einer starken Bergbautradition und einer faszinierenden Umgebung. Nach dem Niedergang des Bergbaus hat sich die Stadt zu einem Tor für Naturtouristen entwickelt, die die bizarren Basaltformationen der Region entdecken möchten. Ein absolutes Highlight ist das unterirdische Bergbaumuseum, das einzige seiner Art in Ungarn, das einen authentischen Einblick in die Arbeit der Kumpel bietet. Hoch über der Stadt thronen die Ruinen der Burgen Salgó und Somosk�?, die auf gewaltigen Basaltkegeln errichtet wurden und spektakuläre Ausblicke bieten. Die Region ist zudem bekannt für das europäische Diplom für Naturschutzgebiete, das die Einzigartigkeit der hiesigen vulkanischen Landschaft würdigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Salgótarján beherbergt das einzige unterirdische Bergbaumuseum Ungarns.", "Die Burgruine Salgó steht auf einem 625 Meter hohen Basaltkegel.", "In der Nähe befinden sich die berühmten Basaltorgeln von Somosk�?.", "Die Stadt liegt in einem der waldreichsten und gebirgigsten Gebiete Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["In der Nähe befinden sich die Burgruinen Salgó und Somosk�?.", "Hat ein unterirdisches Bergbaumuseum."], "hu": ["A közelben található Salgó és Somosk�? vára.", "Földalatti bányamúzeummal rendelkezik."], "ro": ["�?n apropiere se afl�? ruinele castelelor Salgó �?i Somosk�?.", "Are un muzeu minier subteran."], "en": ["Nearby are the castle ruins of Salgó and Somosk�?.", "Has an underground mining museum."]},
  },
  {
    id: "balassagyarmat",
    type: "city",
    parent: "HU-NO",
    coords: [19.2944, 48.0792],
    name: {"de": "Jahrmarkt", "hu": "Balassagyarmat", "ro": "Balassagyarmat", "en": "Balassagyarmat"},
    image: "/geo-images/hungary/balassagyarmat.webp",
    description: {"de": "Grenzstadt zur Slowakei, bekannt als die 'mutigste Stadt'.", "hu": "Határváros Szlovákiával, a 'Legbátrabb város' néven ismert.", "ro": "Ora�? de grani�?�? cu Slovacia, cunoscut ca 'cel mai curajos ora�?'.", "en": "Border town with Slovakia, known as the 'Bravest City'."},
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
    facts: {"de": ["Wehrte 1919 tschechoslowakische Truppen ab.", "Ehemaliger Sitz des Komitats Nógrád."], "hu": ["1919-ben visszaverte a csehszlovák csapatokat.", "Nógrád vármegye egykori székhelye."], "ro": ["A respins trupele cehoslovace în 1919.", "Fostul sediu al comitatului Nógrád."], "en": ["Repelled Czechoslovak troops in 1919.", "Former seat of Nógrád county."]},
  },
  {
    id: "holloko",
    type: "landmark",
    parent: "HU-NO",
    coords: [19.5833, 47.9964],
    name: {"de": "Hollók�?", "hu": "Hollók�?", "ro": "Hollók�?", "en": "Hollók�?"},
    image: "/geo-images/hungary/holloko.webp",
    description: {"de": "Ein traditionelles Paloczen-Dorf, das als lebendiges Museum erhalten ist.", "hu": "Hagyományos palóc falu, amelyet él�? múzeumként �?riztek meg.", "ro": "Un sat tradi�?ional Palóc, conservat ca un muzeu viu.", "en": "A traditional Palóc village preserved as a living museum."},
    descriptionAdvanced: {
      "de": "Hollók�? ist ein lebendiges Museumsdorf im Norden Ungarns und war das erste Dorf weltweit, das von der UNESCO zum Weltkulturerbe erklärt wurde. Das 'Alte Dorf' (�?falu) besteht aus 67 traditionellen Lehmhäusern mit charakteristischen Holzbalkonen, die nach einem Brand im frühen 20. Jahrhundert in ihrem ursprünglichen Stil wiedererrichtet wurden. Hier wird die Kultur der Palócen noch aktiv gelebt, sei es durch das Tragen traditioneller Trachten an Feiertagen oder durch das Ausüben alter Handwerke. �?ber dem Dorf thront die Ruine der Burg Hollók�? aus dem 13. Jahrhundert, von der aus man einen weiten Blick über die hügelige Landschaft der Cserhát hat. Ein Besuch in Hollók�? ist wie eine Zeitreise in ein Ungarn vergangener Jahrhunderte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hollók�? war 1987 das erste Dorf weltweit, das zum UNESCO-Weltkulturerbe erklärt wurde.", "Das 'Alte Dorf' bewahrt die traditionelle Architektur der Palócen in ihrer reinsten Form.", "Die Bewohner tragen zu festlichen Anlässen wie Ostern ihre prächtigen, handgestickten Trachten.", "Die Burg Hollók�? wurde nach der tatarischen Invasion zum Schutz der Region erbaut."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das erste Dorf weltweit, das UNESCO-Welterbe wurde.", "�?berragt von einer Burgruine aus dem 13. Jahrhundert."], "hu": ["A világ els�? faluja, amely UNESCO világörökség lett.", "Egy 13. századi várrom magasodik fölé."], "ro": ["Primul sat din lume care a devenit Patrimoniu Mondial UNESCO.", "Dominat de ruinele unui castel din secolul al XIII-lea."], "en": ["The first village in the world to become a UNESCO World Heritage site.", "Overlooked by a 13th-century castle ruin."]},
  },
  {
    id: "szentendre",
    type: "city",
    parent: "HU-PE",
    coords: [19.0761, 47.6694],
    name: {"de": "Sankt Andrä", "hu": "Szentendre", "ro": "Szentendre", "en": "Szentendre"},
    image: "/geo-images/hungary/szentendre.webp",
    description: {
      "de": "Szentendre, eine malerische Stadt am Donauufer nördlich von Budapest, ist bekannt für ihre lebendige Künstlerkolonie und ihre mediterrane Atmosphäre. Die Stadt wurde im 17. Jahrhundert von serbischen Flüchtlingen geprägt, was sich in der barocken Architektur und den zahlreichen orthodoxen Kirchen widerspiegelt. Heute ist Szentendre ein beliebtes Ziel für Kunstliebhaber, mit unzähligen Galerien, Museen und charmanten Kunsthandwerksläden. Das nahegelegene Skanzen, das grö�?te Freilichtmuseum Ungarns, bietet zudem tiefe Einblicke in die traditionelle ländliche Kultur des Landes.",
      "hu": "Szentendre, a Duna partján, Budapestt�?l északra fekv�? fest�?i város, amely élénk művésztelepér�?l és mediterrán hangulatáról ismert. A várost a 17. században szerb menekültek formálták, ami a barokk építészetben és a számos ortodox templomban is tükröz�?dik. Ma Szentendre a művészetkedvel�?k kedvelt úti célja, számtalan galériával, múzeummal és hangulatos kézműves bolttal. A közeli Skanzen, Magyarország legnagyobb szabadtéri néprajzi múzeuma, mély betekintést nyújt az ország hagyományos népi kultúrájába.",
      "ro": "Szentendre, un ora�? pitoresc pe malul Dun�?rii, la nord de Budapesta, este cunoscut pentru colonia sa vibrant�? de arti�?ti �?i atmosfera sa mediteranean�?. Ora�?ul a fost modelat în secolul al XVII-lea de refugia�?ii sârbi, fapt reflectat în arhitectura baroc�? �?i numeroasele biserici ortodoxe. Ast�?zi, Szentendre este o destina�?ie popular�? pentru iubitorii de art�?, cu nenum�?rate galerii, muzee �?i magazine fermec�?toare de artizanat. Skanzen-ul din apropiere, cel mai mare muzeu în aer liber din Ungaria, ofer�? o perspectiv�? profund�? asupra culturii rurale tradi�?ionale a �?�?rii.",
      "en": "Szentendre, a picturesque town on the banks of the Danube north of Budapest, is famous for its vibrant artists' colony and Mediterranean atmosphere. The town was shaped in the 17th century by Serbian refugees, which is reflected in its Baroque architecture and numerous Orthodox churches. Today, Szentendre is a popular destination for art lovers, featuring countless galleries, museums, and charming craft shops. The nearby Skanzen, Hungary's largest open-air museum, provides deep insights into the country's traditional rural culture."
    },
    descriptionAdvanced: {
      "de": "Szentendre, malerisch am Donauknie nördlich von Budapest gelegen, ist als 'Stadt der Künstler' bekannt und besticht durch ihr mediterranes Flair. Die Stadt wurde im 17. Jahrhundert von serbischen, griechischen und dalmatinischen Flüchtlingen geprägt, was man heute noch an den prächtigen orthodoxen Kirchen und der Architektur erkennen kann. Die verwinkelten Kopfsteinpflastergassen, bunten Fassaden und kleinen Galerien machen Szentendre zu einem der beliebtesten Ausflugsziele in Ungarn. Neben dem berühmten Marzipanmuseum und dem Freilichtmuseum (Skanzen) bietet die Stadt eine Vielzahl an kleinen Werkstätten für Kunsthandwerk. Ein Spaziergang entlang der Donaupromenade rundet das Erlebnis in dieser farbenfrohen und geschichtsträchtigen Stadt ab.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szentendre ist berühmt für seine lebendige Künstlerkolonie und zahlreiche Galerien.", "Die Stadt wurde architektonisch stark von serbischen Siedlern im 17. Jahrhundert geprägt.", "Das Szentendreer Skanzen ist das grö�?te Freilichtmuseum für Volksarchitektur in Ungarn.", "Das Marzipanmuseum zeigt beeindruckende Skulpturen aus Zucker und Mandeln."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Bekannt als 'Stadt der Künste' mit einer bedeutenden Künstlerkolonie.",
        "Geprägt durch serbische und dalmatinische Einflüsse im 17. Jahrhundert.",
        "Beherbergt das Ungarische Freilichtmuseum (Skanzen), das grö�?te des Landes.",
        "Berühmt für das Marzipan-Museum und zahlreiche kleine Galerien.",
        "Die barocke Altstadt mit ihren engen Gassen ist fast vollständig erhalten.",
        "Hat sieben Kirchen, von denen viele ursprünglich orthodox waren.",
        "Beliebtes Ausflugsziel für Touristen aus Budapest.",
        "Liegt am Tor zum malerischen Donauknie."
      ],
      "hu": [
        "A 'művészetek városa' néven ismert, jelent�?s művészteleppel rendelkezik.",
        "A 17. századi szerb és dalmát hatások határozzák meg a városképét.",
        "Itt található a Szabadtéri Néprajzi Múzeum (Skanzen), az ország legnagyobbja.",
        "Híres a Szamos Marcipán Múzeumról és a számos kis galériáról.",
        "A barokk óváros szűk utcáival szinte teljesen épségben maradt.",
        "Hét temploma van, amelyek közül sok eredetileg ortodox volt.",
        "A budapesti turisták egyik legkedveltebb kirándulóhelye.",
        "A fest�?i Dunakanyar kapujában fekszik."
      ],
      "ro": [
        "Cunoscut ca 'ora�?ul artelor', având o colonie de arti�?ti important�?.",
        "Modelat de influen�?e sârbe �?i dalmate în secolul al XVII-lea.",
        "G�?zduie�?te Muzeul Satului (Skanzen), cel mai mare din �?ar�?.",
        "Faimos pentru Muzeul Mar�?ipanului �?i numeroasele galerii mici.",
        "Centrul vechi baroc cu str�?zile sale înguste este aproape complet conservat.",
        "Are �?apte biserici, dintre care multe au fost ini�?ial ortodoxe.",
        "O destina�?ie de excursie foarte popular�? pentru turi�?tii din Budapesta.",
        "Situat la poarta pitorescului Cot al Dun�?rii."
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
  },
  {
    id: "godollo",
    type: "city",
    parent: "HU-PE",
    coords: [19.3478, 47.5969],
    name: {"de": "Gödöll�?", "hu": "Gödöll�?", "ro": "Gödöll�?", "en": "Gödöll�?"},
    image: "/geo-images/hungary/godollo.webp",
    description: {"de": "Stadt nahe Budapest, berühmt für ihr königliches Schloss.", "hu": "Budapest közeli város, híres királyi kastélyáról.", "ro": "Ora�? lâng�? Budapesta, faimos pentru palatul s�?u regal.", "en": "City near Budapest, famous for its royal palace."},
    descriptionAdvanced: {
      "de": "Gödöll�? ist weltberühmt für das Grassalkovich-Schloss, eines der bedeutendsten Barockensembles Ungarns und die einstige Lieblingsresidenz von Kaiserin Elisabeth (Sissi). Das Schloss ist ein architektonisches Meisterwerk mit prachtvollen Prunksälen, einem königlichen Reitstall und einem weitläufigen Schlosspark, der zum Flanieren einlädt. Die enge Verbindung zu ",
      "hu": "Gödöll�? Budapestt�?l keletre fekv�? város, amely leginkább monumentális barokk kastélyáról, a Grassalkovich-kastélyról híres. Ez az épület Magyarország egyik legnagyobb és legszebb barokk palotája, amely a 19. század második felében I. Ferenc József és Erzsébet királyné (Sisi) kedvenc pihen�?helyévé vált. A kastély falai között ma múzeum működik, amely hűen mutatja be a királyi pár életét és a magyar arisztokrácia mindennapjait. A város azonban több egy kastélynál: büszkélkedhet a Szent István Egyetemmel, gyönyörű parkokkal és a Gödöll�?i-dombság természeti értékeivel. Gödöll�? kulturális élete is gazdag, számos zenei és hagyomány�?rz�? rendezvénynek ad otthont, amelyek a királyi múltat idézik fel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Gödöll�? war die bevorzugte Sommerresidenz der Kaiserin Sissi.", "Es ist eines der grö�?ten und bedeutendsten Barockschlösser Ungarns.", "Gödöll�? beherbergt das einzige Barocktheater des Landes, das noch bespielt wird.", "Die Stadt ist ein Zentrum der Agrarwissenschaften mit einer traditionsreichen Universität."],
      "hu": [
        "A gödöll�?i Grassalkovich-kastély a magyarországi barokk építészet egyik csúcspontja.",
        "Erzsébet királyné (Sisi) több id�?t töltött itt, mint bármely más rezidenciáján Bécsen kívül.",
        "Itt található az ország egyik legrégebbi és legjelent�?sebb agrártudományi egyeteme.",
        "A Gödöll�?i Királyi Kastélypark természetvédelmi terület, számos ritka növényfajjal.",
        "A városban található a Máriabesny�?i Nagyboldogasszony Bazilika, amely fontos zarándokhely."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Schloss Gödöll�? war die Sommerresidenz von Kaiserin Sisi.", "Sitz der Szent-István-Universität."], "hu": ["A Gödöll�?i Királyi Kastély Sisi császárné nyári rezidenciája volt.", "A Szent István Egyetem székhelye."], "ro": ["Palatul Gödöll�? a fost re�?edin�?a de var�? a �?mp�?r�?tesei Sisi.", "Sediul Universit�?�?ii Szent István."], "en": ["The Royal Palace of Gödöll�? was the summer residence of Empress Sisi.", "Seat of Szent István University."]},
  },
  {
    id: "vac",
    type: "city",
    parent: "HU-PE",
    coords: [19.1306, 47.7756],
    name: {"de": "Waitzen", "hu": "Vác", "ro": "Vác", "en": "Vác"},
    image: "/geo-images/hungary/vac.webp",
    description: {"de": "Historische Stadt am Donauknie mit barocker Architektur.", "hu": "Történelmi város a Dunakanyarban, barokk építészettel.", "ro": "Ora�? istoric la Cotul Dun�?rii cu arhitectur�? baroc�?.", "en": "Historic city at the Danube Bend with Baroque architecture."},
    descriptionAdvanced: {
      "de": "Vác, am malerischen Donauknie gelegen, ist eine Stadt von barocker Schönheit und reicher religiöser Tradition. Das Zentrum der Stadt ist der prächtige Hauptplatz (Március 15. tér), der von aufwendig restaurierten Gebäuden und der markanten Unterkirche gesäumt wird. Einzigartig ist die Vác-Mumienausstellung ",
      "hu": "Vác a Duna bal partján fekv�? fest�?i barokk város, amely gazdag történelmi múltjával és vallási emlékeivel tűnik ki a Dunakanyar települései közül. A város központja a Március 15. tér, amely egyedülálló, szinte érintetlen barokk épületeivel és hangulatos kávézóival varázsolja el a látogatókat. Vác büszkélkedhet Magyarország egyetlen diadalívével, amelyet Mária Terézia tiszteletére emeltek, valamint az impozáns Székesegyházzal. A város nemzetközi hírnevét az 1994-ben felfedezett 'váci múmiáknak' is köszönheti, amelyek a Fehérek templomának kriptájából kerültek el�?, és ma a Tragor Ignác Múzeumban láthatók. A Duna-parti sétány és a környez�? dombok kiváló lehet�?séget nyújtanak a kikapcsolódásra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Dom von Vác ist das einzige klassizistische Kathedralgebäude in Ungarn.", "Die Mumien von Vác wurden zufällig bei Renovierungsarbeiten in einer Krypta entdeckt.", "Der Triumphbogen in Vác ist das einzige Bauwerk dieser Art im ganzen Land.", "Vác besitzt einen der schönsten barocken Hauptplätze in Mitteleuropa."],
      "hu": [
        "Vác az egyetlen magyarországi város, ahol klasszicista stílusú diadalív (K�?kapu) található.",
        "A váci Székesegyház az ország egyik legjelent�?sebb és legnagyobb klasszicista temploma.",
        "A 'Memento Mori' kiállítás a 18. századi természetes módon mumifikálódott polgárokat mutatja be.",
        "Vácon épült fel az els�? magyarországi vasútvonal végállomása 1846-ban.",
        "A város f�?tere, a Március 15. tér, Európa egyik legszebb barokk stílusú tere."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hat den einzigen Triumphbogen Ungarns.", "Sitz eines katholischen Bistums."], "hu": ["Itt található Magyarország egyetlen diadalíve.", "Katolikus püspöki székhely."], "ro": ["Are singurul arc de triumf din Ungaria.", "Sediul unei episcopii catolice."], "en": ["Has the only triumphal arch in Hungary.", "Seat of a Catholic bishopric."]},
  },
  {
    id: "visegrad",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.9667, 47.7833],
    name: {"de": "Plintenburg", "hu": "Visegrád", "ro": "Visegrád", "en": "Visegrád"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Kleine Stadt am Donauknie, berühmt für ihre mittelalterliche Zitadelle.", "hu": "Kisváros a Dunakanyarban, híres középkori fellegváráról.", "ro": "Mic ora�? la Cotul Dun�?rii, faimos pentru cetatea sa medieval�?.", "en": "Small town at the Danube Bend, famous for its medieval citadel."},
    descriptionAdvanced: {
      "de": "Visegrád, im Herzen des spektakulären Donauknies gelegen, war im Mittelalter eine der glanzvollsten Residenzen der ungarischen Könige. Hoch auf einem steilen Fels thront die Wolkenburg (Fellegvár), von der aus man einen der atemberaubendsten Panoramablicke über die Donauschleife genie�?en kann. Im Tal befinden sich die �?berreste des Renaissance-Palastes von König Matthias Corvinus, der einst als ",
      "hu": "Visegrád a Dunakanyar legszebb pontján fekv�? történelmi város, amely a középkorban a magyar királyok székhelye és a térség egyik legfontosabb politikai központja volt. A város fölé magasodik a Fellegvár, amelynek falai között egykor a magyar koronázási jelvényeket is �?rizték, s ahonnan lenyűgöz�? panoráma nyílik a folyó éles kanyarulatára. A Duna partján található a Királyi Palota, amelyet Károly Róbert alapított, és Mátyás király idején érte el fénykorát mint pazar reneszánsz rezidencia. Visegrád ma is a magyar történelem él�? emlékműve, ahol minden évben megrendezik a Nemzetközi Palotajátékokat, felidézve a lovagi tornák és királyi találkozók hangulatát. A környez�? erd�?k és kirándulóhelyek a természetjárók kedvelt célpontjai.",
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
    facts: {"de": ["Ehemalige königliche Residenz.", "Namensgeber der Visegrád-Gruppe (V4)."], "hu": ["Egykori királyi székhely.", "A Visegrádi Együttműködés (V4) névadója."], "ro": ["Fost�? re�?edin�?�? regal�?.", "A dat numele Grupului de la Visegrád (V4)."], "en": ["Former royal residence.", "Namesake of the Visegrád Group (V4)."]},
  },
  {
    id: "kaposvar",
    type: "city",
    parent: "HU-SO",
    coords: [17.7897, 46.3592],
    name: {"de": "Kopisch", "hu": "Kaposvár", "ro": "Kaposvár", "en": "Kaposvár"},
    image: "/geo-images/hungary/kaposvar.webp",
    description: {
      "de": "Kaposvár, die 'Stadt der Blumen und Maler', liegt im Südwesten Ungarns in der hügeligen Region Somogy. Die Stadt ist bekannt für ihre gepflegten Parks, die charmante klassizistische Architektur und ihr reiches kulturelles Erbe. Kaposvár ist der Geburtsort des berühmten Malers József Rippl-Rónai, dessen Erbe im Rippl-Rónai-Museum und in seiner ehemaligen Villa gepflegt wird. Mit ihrer Universität und dem renommierten Csiky-Gergely-Theater ist die Stadt ein wichtiges geistiges Zentrum der Region.",
      "hu": "Kaposvár, a 'virágok és fest�?k városa', Délnyugat-Magyarországon, a Somogyi-dombság szívében fekszik. A város híres gondozott parkjairól, hangulatos klasszicista építészetér�?l és gazdag kulturális örökségér�?l. Kaposvár Rippl-Rónai József fest�?művész szül�?városa, akinek emlékét a Rippl-Rónai Múzeum és egykori villája �?rzi. Egyetemével és a neves Csiky Gergely Színházzal a város a régió fontos szellemi központja.",
      "ro": "Kaposvár, 'ora�?ul florilor �?i al pictorilor', este situat în sud-vestul Ungariei, în regiunea deluroas�? Somogy. Ora�?ul este cunoscut pentru parcurile sale bine între�?inute, arhitectura clasicist�? fermec�?toare �?i mo�?tenirea cultural�? bogat�?. Kaposvár este locul de na�?tere al faimosului pictor József Rippl-Rónai, a c�?rui mo�?tenire este p�?strat�? în Muzeul Rippl-Rónai �?i în fosta sa vil�?. Cu universitatea sa �?i renumitul Teatru Csiky Gergely, ora�?ul este un centru intelectual important al regiunii.",
      "en": "Kaposvár, the 'City of Flowers and Painters,' is located in southwestern Hungary in the hilly Somogy region. The city is known for its well-kept parks, charming Neoclassical architecture, and rich cultural heritage. Kaposvár is the birthplace of the famous painter József Rippl-Rónai, whose legacy is preserved in the Rippl-Rónai Museum and his former villa. With its university and the renowned Csiky Gergely Theatre, the city serves as a major intellectual hub for the region."
    },
    descriptionAdvanced: {
      "de": "Kaposvár, die ",
      "hu": "Kaposvár, Somogy vármegye székhelye, a 'virágok városa', amely nevét gondozott parkjairól, színes köztereir�?l és szecessziós építészetér�?l kapta. A város kulturális élete kiemelked�?, a Csiky Gergely Színház az ország egyik legnevesebb teátruma, míg a Rippl-Rónai Múzeum a híres posztimpresszionista fest�?művész hagyatékát �?rzi. Kaposvár belvárosa sétálóutcáival és felújított palotáival mediterrán hangulatot áraszt, ahol a művészet és a mindennapi élet kéz a kézben jár. A várost körülöleli a Zselic dombvidéke, amely nemcsak természeti szépségeir�?l, hanem a 'Csillagparkjáról' is híres, hiszen itt az ország egyik legalacsonyabb fényszennyezésű egét figyelhetjük meg. Kaposvár a modern dunántúli város és a hagyomány�?rz�? vidéki központ ideális ötvözete.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kaposvár wird aufgrund ihrer vielen Parks und Gärten oft als 'Stadt der Blumen' bezeichnet.", "Der Maler József Rippl-Rónai, ein Meister des ungarischen Jugendstils, lebte und wirkte hier.", "Das Csiky-Gergely-Theater ist ein architektonisches Juwel der Stadt.", "Die Region Zselic bei Kaposvár ist einer der ersten Sternenparks in Europa."],
      "hu": [
        "Kaposvárt hét dombra építették, hasonlóan az örök városhoz, Rómához.",
        "Itt található a Rippl-Rónai Emlékház és Látogatóközpont, a művész egykori villájában.",
        "A Csiky Gergely Színház épülete a magyar szecessziós építészet egyik remekműve.",
        "A közeli Deseda-tó Magyarország leghosszabb mesterséges tava, kedvelt üdül�?hely.",
        "A Zselici Csillagoségbolt-park az ország els�? ilyen jellegű nemzetközi min�?sítésű területe."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Somogy.",
        "Bekannt für das Csiky-Gergely-Theater, eines der schönsten Ungarns.",
        "Heimat des Rippl-Rónai-Museums mit einer bedeutenden Kunstsammlung.",
        "Die Stadt hat über 40 Brunnen und zahlreiche blumengeschmückte Plätze.",
        "Wichtiger Bildungsstandort mit der Universität Kaposvár.",
        "Das Thermalbad Virágfürd�? ist eines der grö�?ten in der Region.",
        "Veranstaltet jährlich das Rippl-Rónai-Festival der Malerei.",
        "Liegt in der Nähe des Zselic-Landschaftsschutzgebiets (Sternenpark)."
      ],
      "hu": [
        "Somogy vármegye székhelye.",
        "Híres a Csiky Gergely Színházról, amely az ország egyik legszebb színházépülete.",
        "Itt található a Rippl-Rónai Múzeum jelent�?s művészeti gyűjteménye.",
        "A városban több mint 40 szök�?kút és számos virágos tér található.",
        "Fontos oktatási központ a Kaposvári Egyetemnek köszönhet�?en.",
        "A Virágfürd�? a régió egyik legnagyobb termál- és élményfürd�?je.",
        "Minden évben megrendezik a Rippl-Rónai Fesztivált.",
        "A közelben található a Zselici Tájvédelmi Körzet (Csillagoségbolt-park)."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Somogy.",
        "Faimos pentru Teatrul Csiky Gergely, unul dintre cele mai frumoase din Ungaria.",
        "G�?zduie�?te Muzeul Rippl-Rónai cu o colec�?ie de art�? important�?.",
        "Ora�?ul are peste 40 de fântâni arteziene �?i numeroase pie�?e cu flori.",
        "Centru educa�?ional important cu Universitatea din Kaposvár.",
        "Baia termal�? Virágfürd�? este una dintre cele mai mari din regiune.",
        "G�?zduie�?te anual Festivalul Rippl-Rónai dedicat picturii.",
        "Situat în apropierea Rezerva�?iei Peisagistice Zselic (Parc de cer stelat)."
      ],
      "en": [
        "Seat of Somogy County.",
        "Famous for the Csiky Gergely Theatre, one of Hungary's most beautiful theaters.",
        "Home to the Rippl-Rónai Museum with a significant art collection.",
        "The city features over 40 fountains and numerous flower-filled squares.",
        "A major educational hub with the University of Kaposvár.",
        "The Virágfürd�? thermal bath is one of the largest in the region.",
        "Hosts the annual Rippl-Rónai Festival of Painting.",
        "Located near the Zselic Landscape Protection Area (Starry Sky Park)."
      ]
    },
  },
  {
    id: "siofok",
    type: "city",
    parent: "HU-SO",
    coords: [18.05, 46.9],
    name: {"de": "Siófok", "hu": "Siófok", "ro": "Siófok", "en": "Siófok"},
    image: "/geo-images/hungary/siofok.webp",
    description: {"de": "Die 'Hauptstadt des Plattensees', bekannt für ihr reges Nachtleben und Strände.", "hu": "A 'Balaton f�?városa', pezsg�? éjszakai életér�?l és strandjairól ismert.", "ro": "'Capitala Lacului Balaton', cunoscut�? pentru via�?a de noapte vibrant�? �?i plaje.", "en": "The 'Capital of Lake Balaton', known for its vibrant nightlife and beaches."},
    descriptionAdvanced: {
      "de": "Siófok, am Ostufer des Plattensees gelegen, ist als die ",
      "hu": "Siófok a Balaton déli partjának legnagyobb városa, amelyet méltán neveznek a 'magyar tenger nyári f�?városának'. A város a Balaton legfontosabb turisztikai központja, ahol a sekély, homokos part és a pezsg�? éjszakai élet (különösen a Pet�?fi sétányon) vonzza a látogatók tömegeit. Siófok azonban nem csak a strandolásról szól: a város jelképe a felújított Víztorony, amelynek tetejér�?l lenyűgöz�? panoráma nyílik a tó. A kiköt�? a Balaton legforgalmasabb hajózási csomópontja, ahonnan számos menetrendszerinti és sétahajó indul. Kulturális értékei között Kálmán Imre, a világhírű operettszerz�? szül�?háza és múzeuma emelkedik ki, emlékeztetve a város elegáns, múlt századi hangulatára.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Siófok ist die grö�?te Stadt am Plattensee und ein Zentrum des Sommertourismus.", "Der Komponist Emmerich Kálmán, Schöpfer der 'Csárdásfürstin', wurde hier geboren.", "Der 45 Meter hohe Wasserturm im Stadtzentrum ist das Wahrzeichen von Siófok.", "Der Hafen von Siófok ist der Heimathafen der grö�?ten Flotte am Balaton."],
      "hu": [
        "Siófok a világhírű operettszerz�?, Kálmán Imre ('A Csárdáskirályn�?' szerz�?je) szül�?városa.",
        "A siófoki kiköt�?b�?l indul a legrégebbi balatoni hajójárat a túlpartra, Balatonfüredre.",
        "A város jelképe a 45 méter magas Víztorony, amely ma forgó kávézóként és kilátóként működik.",
        "Siófoknál található a Sió-csatorna zsiliprendszere, amely a Balaton vízszintjét szabályozza.",
        "A város strandjai összesen több mint 15 kilométer hosszan nyúlnak el a tó partján."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Geburtsort des Komponisten Emmerich Kálmán.", "Wahrzeichen ist der Wasserturm im Zentrum."], "hu": ["Kálmán Imre zeneszerz�? szül�?városa.", "Jelképe a központban álló Víztorony."], "ro": ["Locul de na�?tere al compozitorului Emmerich Kálmán.", "Simbolul s�?u este Turnul de Ap�? din centru."], "en": ["Birthplace of composer Emmerich Kálmán.", "Its landmark is the Water Tower in the center."]},
  },
  {
    id: "balatonfoldvar",
    type: "city",
    parent: "HU-SO",
    coords: [17.8833, 46.85],
    name: {"de": "Balatonföldvár", "hu": "Balatonföldvár", "ro": "Balatonföldvár", "en": "Balatonföldvár"},
    image: "/geo-images/hungary/balatonfoldvar.webp",
    description: {"de": "Beliebter Ferienort am Südufer des Plattensees.", "hu": "Népszerű üdül�?hely a Balaton déli partján.", "ro": "Sta�?iune popular�? pe malul sudic al Lacului Balaton.", "en": "Popular resort town on the southern shore of Lake Balaton."},
    descriptionAdvanced: {
      "de": "Balatonföldvár gilt als einer der elegantesten und am besten geplanten Ferienorte am Südufer des Plattensees. Die Stadt zeichnet sich durch ihre gro�?zügigen Parkanlagen, die breiten Promenaden und den prächtigen Yachthafen aus, der zu den schönsten am See gehört. Ein besonderes Merkmal sind die vielen historischen Villen aus der Zeit der Jahrhundertwende, die der Stadt einen nostalgischen Charme verleihen. Vom Hochufer aus bietet sich ein atemberaubender Panoramablick über den Balaton bis hin zur Halbinsel Tihany am gegenüberliegenden Ufer. Balatonföldvár ist ein Ort der Ruhe und Erholung, der besonders bei Seglern und Familien beliebt ist, die eine kultivierte Urlaubsatmosphäre schätzen.",
      "hu": "Balatonföldvár a déli part egyik legelegánsabb üdül�?helye, amely parkosított környezetével, hatalmas platánfáival és patinás villáival a békebeli Balaton hangulatát idézi. A települést a 19. század végén a Széchényi család alapította mint tervezett fürd�?várost, s azóta is meg�?rizte rendezett, nyugodt arculatát. A város legszebb része a több mint egy kilométer hosszú, kett�?s platánsorral szegélyezett Kvassay sétány, amely közvetlenül a vízparton húzódik. Balatonföldvár büszkélkedhet a Balaton egyik legmodernebb vitorláskiköt�?jével, valamint a magasparton található Hajózástörténeti Látogatóközponttal, ahonnan az egyik legszebb kilátás nyílik a Tihanyi-félszigetre és a tó északi partjának hegyeire.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balatonföldvár besitzt einen der grö�?ten und modernsten Segelhäfen am Plattensee.", "Das Hochufer bietet einen der schönsten Aussichtspunkte auf den gesamten See.", "Die Stadt wurde Ende des 19. Jahrhunderts systematisch als Kurort geplant.", "Der weitläufige Park am Hafen beherbergt seltene und geschützte Baumarten."],
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
    facts: {"de": ["Bekannt für seinen gro�?en Yachthafen.", "Hat eine schöne platanengesäumte Promenade."], "hu": ["Nagy vitorláskiköt�?jér�?l ismert.", "Gyönyörű platánsoros sétánya van."], "ro": ["Cunoscut pentru portul s�?u mare de iahturi.", "Are o frumoas�? promenad�? m�?rginit�? de platani."], "en": ["Known for its large marina.", "Has a beautiful plane tree-lined promenade."]},
  },
  {
    id: "nyiregyhaza",
    type: "city",
    parent: "HU-SZ",
    coords: [21.7167, 47.95],
    name: {"de": "Nyíregyháza", "hu": "Nyíregyháza", "ro": "Nyíregyháza", "en": "Nyíregyháza"},
    image: "/geo-images/hungary/nyiregyhaza.webp",
    description: {
      "de": "Nyíregyháza, im Nordosten Ungarns gelegen, ist eine dynamisch wachsende Stadt und das Zentrum der Region Nyírség. Die Stadt ist vor allem für den Tierpark Sóstó bekannt, der als einer der schönsten und modernsten Zoos in Europa gilt. Der Stadtteil Sóstógyógyfürd�? bietet zudem ein beliebtes Thermalbad und ein Freilichtmuseum, das die traditionelle ländliche Architektur der Region zeigt. Nyíregyháza ist ein wichtiger Bildungsstandort und ein Tor zu den kulturellen Schätzen des Nordostens.",
      "hu": "Nyíregyháza, Magyarország északkeleti részén fekv�? dinamikusan fejl�?d�? város, a Nyírség központja. A város leginkább a Sóstó Zoo-ról ismert, amelyet Európa egyik legszebb és legmodernebb állatkertjeként tartanak számon. Sóstógyógyfürd�? városrésze népszerű termálfürd�?t és egy skanzent is kínál, amely a régió hagyományos népi építészetét mutatja be. Nyíregyháza fontos oktatási központ és kapu az északkeleti országrész kulturális kincseihez.",
      "ro": "Nyíregyháza, situat în nord-estul Ungariei, este un ora�? în dezvoltare dinamic�? �?i centrul regiunii Nyírség. Ora�?ul este cunoscut în special pentru Gr�?dina Zoologic�? Sóstó, considerat�? una dintre cele mai frumoase �?i moderne din Europa. Cartierul Sóstógyógyfürd�? ofer�?, de asemenea, o baie termal�? popular�? �?i un muzeu în aer liber care prezint�? arhitectura rural�? tradi�?ional�? a regiunii. Nyíregyháza este un centru educa�?ional important �?i o poart�? c�?tre comorile culturale din nord-est.",
      "en": "Nyíregyháza, located in northeastern Hungary, is a dynamically growing city and the center of the Nyírség region. The city is best known for the Sóstó Zoo, widely regarded as one of the most beautiful and modern zoos in Europe. The Sóstógyógyfürd�? district also features a popular thermal bath and an open-air museum showcasing the region's traditional rural architecture. Nyíregyháza is a significant educational hub and a gateway to the cultural treasures of the northeast."
    },
    descriptionAdvanced: {
      "de": "Nyíregyháza, im Nordosten Ungarns gelegen, ist eine dynamische Stadt, die vor allem für ihren au�?ergewöhnlichen Zoo und das Heilbad Sóstó bekannt ist. Der Zoo von Nyíregyháza, eingebettet in einen Eichenwald, gilt als einer der besten Europas und bietet Tieren in weitläufigen Gehegen einen natürlichen Lebensraum. Sóstógyógyfürd�?, das ",
      "hu": "Nyíregyháza Szabolcs-Szatmár-Bereg vármegye székhelye, az ország hetedik legnagyobb városa, amely dinamikus fejl�?désével és családbarát turisztikai kínálatával emelkedik ki. A város legfontosabb vonzereje a Sóstógyógyfürd�? negyed, ahol sós vizű tó, modern élményfürd�? és egy különleges falumúzeum várja a látogatókat. Itt található a Nyíregyházi Állatpark is, amely több alkalomal elnyerte Európa legjobb állatkertje címet, és különleges természetközeli kifutóival világszínvonalú élményt nyújt. Nyíregyháza belvárosa parkjaival, templomaival és pezsg�? tereivel barátságos alföldi hangulatot áraszt. Gazdaságában az élelmiszeripar mellett a modern technológiai ipar is egyre nagyobb szerepet játszik, miközben a város meg�?rizte 'zöld' jellegét.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von Nyíregyháza (Sóstó Zoo) beherbergt über 5000 Tiere aus aller Welt.", "Sóstógyógyfürd�? ist ein staatlich anerkannter Luft- und Badekurort am Stadtrand.", "Die Stadt ist ein Zentrum der ungarischen Obstproduktion, besonders für �?pfel und Pflaumen.", "Das Freilichtmuseum Sóstó zeigt die traditionelle Dorfarchitektur des Nordostens."],
      "hu": [
        "A Nyíregyházi Állatpark (Sóstó Zoo) 30 hektáron több mint 500 faj 5000 egyedét mutatja be.",
        "A Sóstói Múzeumfalu Magyarország egyik legnagyobb szabadtéri néprajzi múzeuma.",
        "A várost 1753-ban szlovák telepesek (tirpákok) népesítették be újra, akiknek emlékét néprajzi értékek �?rzik.",
        "Nyíregyháza híres a Krúdy Gyula emlékezetér�?l, a város szülöttér�?l, aki a magyar irodalom egyik legnagyobb alakja.",
        "A Sóstói-tó vize és a környez�? erd�? gyógyhely min�?sítéssel rendelkezik."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Siebtgrö�?te Stadt Ungarns und Sitz des Komitats Szabolcs-Szatmár-Bereg.",
        "Der Tierpark Sóstó beherbergt über 500 Tierarten in naturnahen Gehegen.",
        "Sóstógyógyfürd�? ist ein staatlich anerkannter Kurort.",
        "Das Freilichtmuseum (Skanzen) zeigt das dörfliche Leben des 19. Jahrhunderts.",
        "Die Stadt hat eine bedeutende Universität und mehrere Forschungsinstitute.",
        "Bekannt für den gro�?en Marktplatz und die evangelische Kirche.",
        "Wichtiger Knotenpunkt für den Handel mit der Ukraine und Rumänien.",
        "Die Region ist berühmt für den Anbau von �?pfeln und Pflaumen."
      ],
      "hu": [
        "Magyarország hetedik legnagyobb városa és Szabolcs-Szatmár-Bereg vármegye székhelye.",
        "A Sóstó Zoo több mint 500 állatfajnak ad otthont természetközeli kifutókban.",
        "Sóstógyógyfürd�? országosan elismert gyógyhely.",
        "A Múzeumfalu (Skanzen) a 19. századi falusi életet mutatja be.",
        "A város jelent�?s egyetemmel és több kutatóintézettel rendelkezik.",
        "Ismert a tágas tereir�?l és az evangélikus templomáról.",
        "Fontos kereskedelmi csomópont Ukrajna és Románia felé.",
        "A régió híres az alma- és szilvatermesztésér�?l."
      ],
      "ro": [
        "Al �?aptelea ora�? ca m�?rime din Ungaria �?i re�?edin�?a jude�?ului Szabolcs-Szatmár-Bereg.",
        "Gr�?dina Zoologic�? Sóstó g�?zduie�?te peste 500 de specii de animale.",
        "Sóstógyógyfürd�? este o sta�?iune balnear�? recunoscut�? oficial.",
        "Muzeul Satului (Skanzen) prezint�? via�?a rural�? din secolul al XIX-lea.",
        "Ora�?ul are o universitate important�? �?i mai multe institute de cercetare.",
        "Cunoscut pentru pia�?a sa mare �?i biserica evanghelic�?.",
        "Nod comercial important c�?tre Ucraina �?i România.",
        "Regiunea este faimoas�? pentru cultivarea merelor �?i prunelor."
      ],
      "en": [
        "Seventh largest city in Hungary and the seat of Szabolcs-Szatmár-Bereg County.",
        "Sóstó Zoo houses over 500 animal species in naturalistic enclosures.",
        "Sóstógyógyfürd�? is an officially recognized health resort.",
        "The Open-Air Museum (Skanzen) showcases 19th-century village life.",
        "The city has a significant university and several research institutes.",
        "Known for its large main square and Lutheran church.",
        "An important trade hub towards Ukraine and Romania.",
        "The region is famous for its apple and plum production."
      ]
    },
  },
  {
    id: "mateszalka",
    type: "city",
    parent: "HU-SZ",
    coords: [22.3167, 47.95],
    name: {"de": "Mátészalka", "hu": "Mátészalka", "ro": "Mátészalka", "en": "Mátészalka"},
    image: "/geo-images/hungary/mateszalka.webp",
    description: {"de": "Stadt im Osten Ungarns, bekannt als die 'Stadt des Lichts'.", "hu": "Kelet-magyarországi város, a 'Fény városa' néven ismert.", "ro": "Ora�? în estul Ungariei, cunoscut ca 'Ora�?ul Luminii'.", "en": "City in eastern Hungary, known as the 'City of Light'."},
    
    descriptionAdvanced: {
      "de": "Mátészalka, im Nordosten Ungarns an der Grenze zwischen den Regionen Nyírség und Szatmár gelegen, ist historisch als die ",
      "hu": "Mátészalka a Nyírség és a Szatmári-síkság határán fekv�? város, amely leginkább a technológiai haladás úttör�?jeként vonult be a magyar történelembe. Ez volt az els�? magyarországi település, ahol 1888-ban kigyúlt a villanyvilágítás, megel�?zve ezzel még Budapestet is. A város kulturális élete gazdag, a Szatmári Múzeum egyedülálló kocsi- és szekérgyűjteménye nemzetközi hírű. Mátészalka büszke szülötteire is, köztük Tony Curtis filmszínész családjára, akinek emlékét a városban állandó kiállítás �?rzi. A település fontos közlekedési és gazdasági központ a térségben, miközben �?rzi a szatmári táj jellegzetem hangulatát és vendégszeretetét.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hier wurde 1888 die erste elektrische Stra�?enbeleuchtung Ungarns installiert.", "Wichtiges Zentrum der Region Szatmár."], "hu": ["Itt telepítették Magyarország els�? elektromos közvilágítását 1888-ban.", "A Szatmár régió fontos központja."], "ro": ["Aici a fost instalat primul iluminat stradal electric din Ungaria în 1888.", "Centru important al regiunii Szatmár."], "en": ["The first electric street lighting in Hungary was installed here in 1888.", "Important center of the Szatmár region."]},
  
    factsAdvanced: {
      "de": ["In Mátészalka erstrahlte 1888 zum ersten Mal in ganz Ungarn elektrisches Licht in den Stra�?en.",
        "Das Szatmár-Museum der Stadt beherbergt eine europaweit einzigartige Sammlung von über 100 historischen Wagen und Schlitten.",
        "Die Stadt feiert jährlich die 'Licht-Tage' (Fényes Napok) zur Erinnerung an die Pionierrolle bei der Elektrifizierung.",
        "Der Vater des berühmten US-Schauspielers Tony Curtis stammte aus Mátészalka.",
        "Mátészalka ist ein wichtiger Eisenbahnknotenpunkt für den Verkehr in Richtung Rumänien und die Ukraine."],
      "hu": ["Mátészalka a 'fény városa', itt vezették be el�?ször az utcai villanyvilágítást Magyarországon.",
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
    parent: "HU-SZ",
    coords: [22.3167, 48.1167],
    name: {"de": "Vásárosnamény", "hu": "Vásárosnamény", "ro": "Vásárosnamény", "en": "Vásárosnamény"},
    image: "/geo-images/hungary/vasarosnameny.webp",
    description: {"de": "Das 'Herz von Bereg', eine Stadt an der Thei�?.", "hu": "A 'Bereg szíve', város a Tisza partján.", "ro": "'Inima Beregului', un ora�? pe râul Tisa.", "en": "The 'Heart of Bereg', a city on the Tisza river."},
    
    descriptionAdvanced: {
      "de": "Vásárosnamény, oft als das ",
      "hu": "Vásárosnamény a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Beliebtes Ziel für Wassertourismus.", "Hat ein Thermalbad und einen Aquapark."], "hu": ["A víziturisztika népszerű célpontja.", "Termálfürd�?vel és aquaparkkal rendelkezik."], "ro": ["Destina�?ie popular�? pentru turismul nautic.", "Are o baie termal�? �?i un aquaparc."], "en": ["Popular destination for water tourism.", "Has a thermal bath and an aquapark."]},
  
    factsAdvanced: {
      "de": ["Das Bereg-Museum im Tomcsányi-Schloss zeigt die weltweit bedeutendste Sammlung von Bereger Volkskunst.",
        "Der Strand von Gergelyiugornya gilt als einer der schönsten und beliebtesten Flussstrände an der Oberen Thei�?.",
        "Die Stadt liegt an der Kreuzung dreier bedeutender Flüsse, was sie zu einem Zentrum für Kanu- und Bootstouren macht.",
        "Vásárosnamény beherbergt mit dem Atlantika-Wasserpark eines der grö�?ten Erlebnisbäder der Region.",
        "Die Region ist berühmt für ihre jahrhundertealte Tradition der handgefertigten Bereger Stickerei."],
      "hu": ["Vásárosnamény a Beregi-síkság gazdasági és kulturális központja.",
        "Gergelyiugornya a Fels�?-Tisza vidékének legnépszerűbb tiszai strandja.",
        "A Beregi Múzeum a 18. századi, barokk stílusú Tomcsányi-kastélyban kapott helyet.",
        "A város híres a beregi hímzésr�?l, amely a tájegység egyik legfontosabb népművészeti kincse.",
        "Itt található az Atlantika Vízividámpark, az ország egyik legnagyobb vidéki aquaparkja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szekszard",
    type: "city",
    parent: "HU-TO",
    coords: [18.7, 46.35],
    name: {"de": "Sechshard", "hu": "Szekszárd", "ro": "Szekszárd", "en": "Szekszárd"},
    image: "/geo-images/hungary/szekszard.webp",
    description: {"de": "Die kleinste Komitatshauptstadt Ungarns, berühmt für ihre Rotweine.", "hu": "Magyarország legkisebb megyeszékhelye, vörösborairól híres.", "ro": "Cea mai mic�? re�?edin�?�? de jude�? din Ungaria, faimoas�? pentru vinurile sale ro�?ii.", "en": "The smallest county capital in Hungary, famous for its red wines."},
    
    descriptionAdvanced: {
      "de": "Szekszárd, die Hauptstadt des Komitats Tolna, ist die kleinste Komitatshauptstadt Ungarns und besticht durch ihre persönliche, fast familiäre Atmosphäre. Die Stadt ist weltberühmt für ihre exzellenten Rotweine, insbesondere das ",
      "hu": "Szekszárd Tolna vármegye székhelye, a Szekszárdi-dombság és az Alföld találkozásánál fekv�? barátságos város, amely leginkább világhírű vörösborairól ismert. Ez Magyarország legkisebb népességgel bíró vármegyeszékhelye, ami egyedi, közvetlen és emberléptékű hangulatot kölcsönöz a településnek. Szekszárd központja a Garay tér és a Béla király tér, ahol az ország egyik legnagyobb egyhajós temploma és a neoklasszicista Megyeháza áll. A város kulturális életében fontos szerepet játszik Liszt Ferenc emlékezete, aki gyakran vendégeskedett a településen. Szekszárd a sz�?l�? és a bor városa, ahol a pincesorok és a környékbeli dűl�?k nemcsak a gazdaság, hanem a turizmus alapkövei is, különösen a Szekszárdi Szüreti Napok idején.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Zentrum der Weinregion Szekszárd.", "Geburtsort des Dichters Mihály Babits."], "hu": ["A Szekszárdi borvidék központja.", "Babits Mihály költ�? szül�?városa."], "ro": ["Centrul regiunii viticole Szekszárd.", "Locul de na�?tere al poetului Mihály Babits."], "en": ["Center of the Szekszárd wine region.", "Birthplace of poet Mihály Babits."]},
  
    factsAdvanced: {
      "de": ["Szekszárd ist eine der traditionsreichsten Rotweinregionen Ungarns und Geburtsort des echten Bikavér.",
        "Franz Liszt besuchte die Stadt viermal und widmete ihr seine 'Szekszärder Messe'.",
        "König Béla I. gründete hier 1061 eine Abtei und wurde nach seinem Tod vermutlich auch hier bestattet.",
        "Die Stadt beherbergt die einzige staatlich anerkannte deutsche Bühne Ungarns, die Deutsche Bühne Ungarn.",
        "Das jährlich stattfindende Weinlesefest von Szekszárd ist eines der grö�?ten und traditionsreichsten Feste seiner Art im Land."],
      "hu": ["Szekszárd a Szekszárdi Bikavér, a híres magyar vörösházasítás egyik hazája.",
        "Liszt Ferenc négyszer is ellátogatott a városba, és itt komponálta Szekszárdi miséjét.",
        "A várost I. Béla király alapította, aki a hagyomány szerint itt is van eltemetve a bencés apátságban.",
        "A szekszárdi Megyeháza udvarán láthatóak a 11. századi apátsági templom romjai.",
        "A város határában kezd�?dik a Gemenci erd�?, Európa legnagyobb összefügg�? ártéri erdeje."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "paks",
    type: "city",
    parent: "HU-BK",
    coords: [18.8667, 46.6167],
    name: {"de": "Paks", "hu": "Paks", "ro": "Paks", "en": "Paks"},
    image: "/geo-images/hungary/paks.webp",
    description: {"de": "Stadt an der Donau, bekannt für das einzige Kernkraftwerk Ungarns.", "hu": "Duna-parti város, Magyarország egyetlen atomer�?művér�?l ismert.", "ro": "Ora�? pe Dun�?re, cunoscut pentru singura central�? nuclear�? din Ungaria.", "en": "City on the Danube, known for Hungary's only nuclear power plant."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Paks a Duna mentén, Tolna vármegyében fekv�? város, amelynek nevét ma legtöbben Magyarország egyetlen atomer�?művével azonosítják. Az energetikai központ meghatározó szerepet játszik a város életében, ám Paks ennél jóval gazdagabb múltra tekint vissza. Az egykori ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Kernkraftwerk Paks liefert etwa die Hälfte des ungarischen Stroms.", "Hat eine lange Tradition in der Fischerei."], "hu": ["A Paksi Atomer�?mű adja a magyar áramtermelés mintegy felét.", "Nagy hagyománya van a halászatnak."], "ro": ["Centrala nuclear�? Paks furnizeaz�? aproximativ jum�?tate din energia electric�? a Ungariei.", "Are o lung�? tradi�?ie în pescuit."], "en": ["The Paks Nuclear Power Plant provides about half of Hungary's electricity.", "Has a long tradition of fishing."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A Paksi Atomer�?mű Magyarország villamosenergia-szükségletének mintegy felét állítja el�?.",
        "A Makovecz Imre által tervezett Szentlélek-templom 1991-ben készült el, formája két hegycsúcsot és a feltámadást jelképezi.",
        "A Sárgödör tér 66 apró, színes présházával a város egyik leglátványosabb műemléke.",
        "Paks híres a tiszai és dunai halászlé közötti 'versengésben' a sajátos dunai receptjér�?l.",
        "A város mellett elhaladó EuroVelo 6 kerékpárút fontos megállóhelye a Duna mentén."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bonyhad",
    type: "city",
    parent: "HU-TO",
    coords: [18.5333, 46.3],
    name: {"de": "Bonnhard", "hu": "Bonyhád", "ro": "Bonyhád", "en": "Bonyhád"},
    image: "/geo-images/hungary/bonyhad.webp",
    description: {"de": "Das Zentrum der Region Völgység, bekannt für seine Emaillefabrik.", "hu": "A Völgység központja, zománcgyáráról ismert.", "ro": "Centrul regiunii Völgység, cunoscut pentru fabrica sa de email.", "en": "The center of the Völgység region, known for its enamel factory."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Bonyhád a Völgység központja Tolna vármegyében, a Mecsek és a Tolnai-dombság találkozásánál fekv�? város, amelyet gyakran a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Historisch ein Zentrum der Ungarndeutschen.", "Bekannt für die Bonyháder Schuhe."], "hu": ["Történelmileg a magyarországi németek egyik központja.", "A bonyhádi cip�?kr�?l is ismert."], "ro": ["Istoric un centru al germanilor din Ungaria.", "Cunoscut pentru pantofii Bonyhád."], "en": ["Historically a center of the Hungarian Germans.", "Known for Bonyhád shoes."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["Bonyhád a bonyhádi zománcedény-gyártás bölcs�?je, amely termékek több mint 100 éve készülnek itt.",
        "A városban található a Völgységi Múzeum, amely a térség sokszínű etnikai múltját mutatja be.",
        "Itt született Perczel Mór, az 1848�??49-es szabadságharc egyik legnevesebb tábornoka.",
        "A település híres a tarka magyar szarvasmarha tenyésztésér�?l, amelynek szobra is áll a városban.",
        "Bonyhád fontos iskolaváros, több nagy múltú középfokú oktatási intézménnyel rendelkezik."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szombathely",
    type: "city",
    parent: "HU-VA",
    coords: [16.6217, 47.2306],
    name: {"de": "Steinamanger", "hu": "Szombathely", "ro": "Szombathely", "en": "Szombathely"},
    image: "/geo-images/hungary/szombathely.webp",
    description: {
      "de": "Szombathely, die älteste Stadt Ungarns, wurde im Jahr 43 n. Chr. von den Römern als Savaria gegründet. Die Stadt im Westen des Landes blickt auf eine fast 2000-jährige kontinuierliche Geschichte zurück und war einst die Hauptstadt der Provinz Pannonia Superior. Besucher können römische Ruinen im Iseum, dem Heiligtum der Göttin Isis, und im Ruinengarten besichtigen. Szombathely ist zudem als Geburtsort des Heiligen Martin von Tours bekannt und feiert sein Erbe jährlich mit dem Savaria Historischen Karneval.",
      "hu": "Szombathely, Magyarország legrégebbi városa, amelyet i.sz. 43-ban alapítottak a rómaiak Savaria néven. Az ország nyugati részén fekv�? város közel 2000 éves folyamatos történelemre tekint vissza, és egykor Pannonia Superior tartomány székhelye volt. A látogatók megtekinthetik a római romokat az Iseumban, Ízisz istenn�? szentélyében, valamint a Járdányi Paulovics István Romkertben. Szombathely Tours-i Szent Márton szül�?helyeként is ismert, és örökségét évente a Savaria Történelmi Karnevállal ünnepli.",
      "ro": "Szombathely, cel mai vechi ora�? din Ungaria, a fost fondat de romani în anul 43 d.Hr. sub numele de Savaria. Ora�?ul din vestul �?�?rii are o istorie continu�? de aproape 2000 de ani �?i a fost odat�? capitala provinciei Pannonia Superior. Vizitatorii pot vedea ruinele romane în Iseum, sanctuarul zei�?ei Isis, �?i în Gr�?dina Ruinelor. Szombathely este, de asemenea, cunoscut ca locul de na�?tere al Sfântului Martin de Tours �?i î�?i s�?rb�?tore�?te mo�?tenirea anual prin Carnavalul Istoric Savaria.",
      "en": "Szombathely, the oldest city in Hungary, was founded by the Romans in 43 AD as Savaria. Located in the western part of the country, the city boasts a continuous history of nearly 2,000 years and was once the capital of the province of Pannonia Superior. Visitors can explore Roman ruins at the Iseum, a sanctuary dedicated to the goddess Isis, and in the Ruin Garden. Szombathely is also famous as the birthplace of Saint Martin of Tours and celebrates its heritage annually with the Savaria Historical Carnival."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Szombathely, Vas vármegye székhelye, Magyarország egyik leg�?sibb városa, amelyet a rómaiak alapítottak Kr. u. 43-ban Savaria néven. A város gazdag antik örökséggel büszkélkedhet, s ezt minden évben a monumentális Savaria Történelmi Karnevál keretében keltik életre. Szombathely belvárosa barokk pompájával, tágas tereivel és az impozáns Székesegyházzal nyűgözi le a látogatókat. A kultúra és a tudomány városa, ahol a Savaria Múzeum és az Iseum (Ízisz istenn�? szentélye) világszínvonalú régészeti leleteket mutat be. A modern Szombathely egyben fontos ipari és oktatási központ is az Alpokalja lábánál, amely kiváló kiindulópont a közeli hegységek és gyógyfürd�?k felfedezéséhez.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "�?lteste Stadt Ungarns mit römischen Wurzeln (Savaria).",
        "Geburtsort des Heiligen Martin von Tours (316 n. Chr.).",
        "Das Iseum ist eines der bedeutendsten Isis-Heiligtümer in Europa.",
        "Der Savaria Historische Karneval ist das grö�?te Kostümfest der Region.",
        "Sitz des Komitats Vas und ein wichtiges kulturelles Zentrum im Westen.",
        "Die Kathedrale von Szombathely ist eine der grö�?ten Kirchen Ungarns.",
        "Beherbergt ein bedeutendes Freilichtmuseum (Vasi Múzeumfalu).",
        "Wichtiger Industriestandort mit Fokus auf Elektronik und Maschinenbau."
      ],
      "hu": [
        "Magyarország legrégebbi városa, római gyökerekkel (Savaria).",
        "Tours-i Szent Márton szül�?helye (i.sz. 316).",
        "Az Iseum Európa egyik legjelent�?sebb Ízisz-szentélye.",
        "A Savaria Történelmi Karnevál a régió legnagyobb jelmezes fesztiválja.",
        "Vas vármegye székhelye és Nyugat-Magyarország fontos kulturális központja.",
        "A szombathelyi székesegyház Magyarország egyik legnagyobb temploma.",
        "Itt található a Vasi Múzeumfalu, egy jelent�?s skanzen.",
        "Fontos ipari központ, különös tekintettel az elektronikára és a gépgyártásra."
      ],
      "ro": [
        "Cel mai vechi ora�? din Ungaria, cu r�?d�?cini romane (Savaria).",
        "Locul de na�?tere al Sfântului Martin de Tours (316 d.Hr.).",
        "Iseum este unul dintre cele mai importante sanctuare ale zei�?ei Isis din Europa.",
        "Carnavalul Istoric Savaria este cel mai mare festival de costume din regiune.",
        "Re�?edin�?a jude�?ului Vas �?i un centru cultural important în vest.",
        "Catedrala din Szombathely este una dintre cele mai mari biserici din Ungaria.",
        "G�?zduie�?te un muzeu în aer liber semnificativ (Vasi Múzeumfalu).",
        "Sit industrial important cu accent pe electronic�? �?i construc�?ii de ma�?ini."
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
  
    factsAdvanced: {
      "de": [],
      "hu": ["Szombathely az ország legrégebbi városi rangú települése, amelyet Claudius császár alapított.",
        "Szent Márton, a tours-i püspök, a hagyomány szerint Savariában született a 4. században.",
        "Az Iseum Savariense Közép-Európa egyik legjelent�?sebb Ízisz-szentélyének rekonstrukciója.",
        "A szombathelyi Székesegyház Magyarország egyik legnagyobb és legszebb barokk temploma.",
        "A Kámoni Arborétum 27 hektáron több ezer ritka növényfajnak és fás szárú gyűjteménynek ad otthont."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "koszeg",
    type: "city",
    parent: "HU-VA",
    coords: [16.5406, 47.3892],
    name: {"de": "Güns", "hu": "K�?szeg", "ro": "K�?szeg", "en": "K�?szeg"},
    image: "/geo-images/hungary/koszeg.webp",
    description: {"de": "Historische Stadt an der österreichischen Grenze, bekannt für ihre Burg.", "hu": "Történelmi város az osztrák határon, váráról ismert.", "ro": "Ora�? istoric la grani�?a cu Austria, cunoscut pentru castelul s�?u.", "en": "Historic city on the Austrian border, known for its castle."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "K�?szeg Magyarország egyik legszebb és leghangulatosabb kisvárosa az Alpokalja lábánál, amely szinte érintetlen középkori belvárosával és történelmi várával varázsolja el a látogatókat. A város neve elválaszthatatlan az 1532-es török ostromtól, amikor Jurisics Miklós maroknyi csapata megállította Szulejmán szultán hatalmas seregét, megmentve ezzel Bécset a támadástól. Ennek emlékére K�?szegen minden nap 11 órakor is meghúzzák a harangokat. A város híres a bortermelésér�?l (f�?ként a Kékfrankosról), a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Burg Jurisics hielt 1532 einer osmanischen Belagerung stand.", "Hat einen der schönsten mittelalterlichen Hauptplätze Ungarns."], "hu": ["A Jurisics-vár 1532-ben ellenállt az oszmán ostromnak.", "Magyarország egyik legszebb középkori f�?terével rendelkezik."], "ro": ["Castelul Jurisics a rezistat unui asediu otoman în 1532.", "Are una dintre cele mai frumoase pie�?e principale medievale din Ungaria."], "en": ["Jurisics Castle withstood an Ottoman siege in 1532.", "Has one of the most beautiful medieval main squares in Hungary."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["K�?szeg Magyarország egyetlen városa, ahol délel�?tt 11-kor is harangoznak a török feletti gy�?zelem emlékére.",
        "A Jurisics-vár ma kulturális központ és múzeum, ahol az 1532-es ostrom eseményeit ismerhetjük meg.",
        "Itt található az ország egyik legrégebbi patikamúzeuma, az Arany Egyszarvú Patika.",
        "K�?szeg híres a 'Sz�?l�? Jövésének Könyvér�?l', amelybe 1740 óta minden évben lerajzolják a sz�?l�?hajtásokat.",
        "A város feletti Hétforrás és az �?ház-kilátó a K�?szegi-hegység legnépszerűbb kirándulóhelyei."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarvar",
    type: "city",
    parent: "HU-VA",
    coords: [16.9333, 47.25],
    name: {"de": "Kotenburg", "hu": "Sárvár", "ro": "Sárvár", "en": "Sárvár"},
    image: "/geo-images/hungary/sarvar.webp",
    description: {"de": "Beliebter Kurort mit einem berühmten Thermalbad und einer Renaissanceburg.", "hu": "Népszerű fürd�?város híres termálfürd�?vel és reneszánsz várral.", "ro": "Sta�?iune balnear�? popular�? cu o faimoas�? baie termal�? �?i un castel renascentist.", "en": "Popular spa town with a famous thermal bath and a Renaissance castle."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Sárvár a Rába partján fekv�? város Vas vármegyében, amely világszínvonalú gyógyfürd�?jér�?l és tökéletesen épen maradt reneszánsz váráról ismert. A Nádasdy-vár a magyarországi reneszánsz építészet egyik gyöngyszeme, ötszögletű udvarával és freskókkal díszített dísztermével a Nádasdy család egykori hatalmát hirdeti. A vár falai között nyomtatták az els�? magyar nyelvű �?jszövetséget is. Sárvár igazi vonzereje ma a Sárvári Gyógy- és Wellnessfürd�?, amely különleges gyógyvizének köszönhet�?en az európai királyi fürd�?k szövetségének tagja. A város arborétuma, a csónakázótó és a Rába menti erd�?k ideális környezetet biztosítanak a pihenésre és a regenerálódásra.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Burg Nádasdy ist ein wichtiges historisches Denkmal.", "Das Heilwasser ist hervorragend für rheumatische Beschwerden."], "hu": ["A Nádasdy-vár fontos történelmi műemlék.", "Gyógyvize kiváló reumatikus panaszokra."], "ro": ["Castelul Nádasdy este un important monument istoric.", "Apa termal�? este excelent�? pentru afec�?iuni reumatice."], "en": ["Nádasdy Castle is an important historical monument.", "The healing water is excellent for rheumatic complaints."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A sárvári Nádasdy-vár az ország egyik legépebben fennmaradt várkastélya.",
        "Sárváron nyomtatták 1541-ben az els�? magyar nyelvű könyvet, a Sylvester János-féle �?jszövetséget.",
        "A sárvári gyógyvíz kétféle forrásból ered, az egyik 43, a másik 83 fokos hévíz.",
        "A városi arborétum Magyarország egyik legrégebbi növénygyűjteménye, több száz éves mocsári tölgyekkel.",
        "Sárvár az 'Európai Királyi Fürd�?k' (Royal Spas of Europe) hálózatának tagja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem-city",
    type: "city",
    parent: "HU-VE",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "Veszprém", "ro": "Veszprém", "en": "Veszprém"},
    image: "/geo-images/hungary/veszprem-city.webp",
    description: {
      "de": "Veszprém, die 'Stadt der Königinnen', liegt auf den malerischen Hügeln des Bakony-Waldes in der Nähe des Plattensees. Die Stadt blickt auf eine reiche Geschichte zurück und war traditionell der Ort, an dem die ungarischen Königinnen gekrönt wurden. Das gut erhaltene Burgviertel auf einem steilen Felsen bietet beeindruckende Ausblicke und beherbergt zahlreiche historische Gebäude und Museen. Veszprém war 2023 Kulturhauptstadt Europas und ist bekannt für sein lebendiges kulturelles Leben und seine Musikfestivals.",
      "hu": "Veszprém, a 'királynék városa', a Bakony lankáin, a Balaton közelében fekszik. A város gazdag történelemre tekint vissza, hagyományosan itt koronázták meg a magyar királynékat. A meredek sziklán elhelyezked�?, jól meg�?rzött várnegyed lenyűgöz�? kilátást nyújt, és számos történelmi épületnek, múzeumnak ad otthont. Veszprém 2023-ban Európa Kulturális F�?városa volt, és híres pezsg�? kulturális életér�?l, valamint zenei fesztiváljairól.",
      "ro": "Veszprém, 'ora�?ul reginelor', este situat pe dealurile pitore�?ti ale p�?durii Bakony, în apropierea lacului Balaton. Ora�?ul are o istorie bogat�?, fiind tradi�?ional locul unde erau încoronate reginele maghiare. Cartierul castelului, bine conservat pe o stânc�? abrupt�?, ofer�? priveli�?ti impresionante �?i g�?zduie�?te numeroase cl�?diri istorice �?i muzee. Veszprém a fost Capital�? European�? a Culturii în 2023 �?i este cunoscut pentru via�?a sa cultural�? vibrant�? �?i festivalurile de muzic�?.",
      "en": "Veszprém, the 'City of Queens,' is located on the picturesque hills of the Bakony Forest near Lake Balaton. The city boasts a rich history, traditionally serving as the site where Hungarian queens were crowned. The well-preserved Castle District, perched on a steep cliff, offers stunning views and houses numerous historic buildings and museums. Veszprém was a European Capital of Culture in 2023 and is renowned for its vibrant cultural scene and music festivals."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Veszprém, a ",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats Veszprém und eine der ältesten Städte Ungarns.",
        "Traditioneller Krönungsort der ungarischen Königinnen.",
        "Kulturhauptstadt Europas im Jahr 2023.",
        "Das Burgviertel ist ein architektonisches Juwel auf einem Dolomitfelsen.",
        "Bekannt für den Veszprémer Zoo, einen der ältesten des Landes.",
        "Veranstaltet jährlich das VeszprémFest und das Stra�?enmusikfestival.",
        "Die St.-Michaels-Kathedrale ist ein bedeutendes religiöses Denkmal.",
        "Liegt ideal als Tor zum Bakony-Gebirge und zum Plattensee."
      ],
      "hu": [
        "Veszprém vármegye székhelye és Magyarország egyik leg�?sibb városa.",
        "A magyar királynék hagyományos koronázóhelye.",
        "2023-ban Európa Kulturális F�?városa volt.",
        "A várnegyed egy építészeti ékszerdoboz a dolomitsziklán.",
        "Híres a Veszprémi Állatkertr�?l, amely az ország egyik legrégebbi állatkertje.",
        "Minden évben megrendezik a VeszprémFestet és az Utcazene Fesztivált.",
        "A Szent Mihály-székesegyház jelent�?s vallási műemlék.",
        "Ideális kiindulópont a Bakony és a Balaton felfedezéséhez."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Veszprém �?i unul dintre cele mai vechi ora�?e din Ungaria.",
        "Locul tradi�?ional de încoronare a reginelor maghiare.",
        "Capital�? European�? a Culturii în anul 2023.",
        "Cartierul castelului este o bijuterie arhitectural�? pe o stânc�? de dolomit.",
        "Cunoscut pentru Gr�?dina Zoologic�? din Veszprém, una dintre cele mai vechi.",
        "G�?zduie�?te anual VeszprémFest �?i Festivalul Muzicii de Strad�?.",
        "Catedrala Sfântul Mihail este un monument religios important.",
        "Situat ideal ca poart�? c�?tre mun�?ii Bakony �?i Lacul Balaton."
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
  
    factsAdvanced: {
      "de": [],
      "hu": ["Veszprém volt Magyarország egyik legkorábbi püspöki székhelye és vára.",
        "A Gizella-kápolna a város egyik legrégebbi építménye, 13. századi freskókkal.",
        "A veszprémi Völgyhíd (Szent István völgyhíd) a város egyik jelképe, monumentális látványt nyújt a Séd-völgye felett.",
        "A Veszprémi Állatkert híres a Böbe majomról és modern, tágas kifutóiról.",
        "A várost gyakran a szél városaként is emlegetik a Bakony fel�?l érkez�? állandó légmozgás miatt."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonfured",
    type: "city",
    parent: "HU-VE",
    coords: [17.8833, 46.95],
    name: {"de": "Balatonfüred", "hu": "Balatonfüred", "ro": "Balatonfüred", "en": "Balatonfüred"},
    image: "/geo-images/hungary/balatonfured.webp",
    description: {"de": "Der älteste Kurort am Plattensee, bekannt für seine Heilquellen.", "hu": "A Balaton legrégebbi üdül�?helye, gyógyforrásairól ismert.", "ro": "Cea mai veche sta�?iune de pe Lacul Balaton, cunoscut�? pentru izvoarele sale vindec�?toare.", "en": "The oldest resort on Lake Balaton, known for its healing springs."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Balatonfüred az északi part ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Zentrum des Segelsports am Plattensee.", "Veranstaltet jährlich den Anna-Ball."], "hu": ["A balatoni vitorlázás központja.", "�?vente megrendezik az Anna-bált."], "ro": ["Centrul naviga�?iei pe Lacul Balaton.", "G�?zduie�?te anual Balul Anna."], "en": ["Center of sailing on Lake Balaton.", "Hosts the annual Anna Ball."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["Balatonfüreden tartották az els�? Anna-bált 1825-ben, Horváth Anna Krisztina tiszteletére.",
        "A Tagore sétány az indiai költ�?óriásról, Rabindranath Tagore-ról kapta nevét, aki itt gyógyult meg.",
        "Itt épült fel a Balaton els�? g�?zhajója, a Kisfaludy, Széchenyi István kezdeményezésére.",
        "A Kossuth Lajos-forrás savanyúvize közismert gyógyhatásáról, bárki szabadon kóstolhatja a téren.",
        "Balatonfüred a legrégebbi magyarországi vitorlásklub, a Kereked Yacht Club otthona."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihany",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.8833, 46.9167],
    name: {"de": "Tihany", "hu": "Tihany", "ro": "Tihany", "en": "Tihany"},
    image: "/geo-images/hungary/tihany.webp",
    description: {"de": "Halbinsel im Plattensee, berühmt für ihre Benediktinerabtei und Lavendelfelder.", "hu": "Félsziget a Balatonban, híres bencés apátságáról és levendulamez�?ir�?l.", "ro": "Peninsul�? în Lacul Balaton, faimoas�? pentru aba�?ia benedictin�? �?i câmpurile de lavand�?.", "en": "Peninsula in Lake Balaton, famous for its Benedictine abbey and lavender fields."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Tihany a Balaton északi partjának ékköve, egy vulkanikus eredetű félsziget, amely mélyen benyúlik a tóba, s ahonnan a legszebb kilátás nyílik a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Gründungsurkunde der Abtei (1055) enthält die ältesten ungarischen Wörter.", "Bietet einen atemberaubenden Blick auf den See."], "hu": ["Az apátság alapítólevele (1055) tartalmazza a legrégebbi magyar szavakat.", "Lélegzetelállító kilátást nyújt a tóra."], "ro": ["Actul de fondare al aba�?iei (1055) con�?ine cele mai vechi cuvinte maghiare.", "Ofer�? o vedere uluitoare asupra lacului."], "en": ["The abbey's founding charter (1055) contains the oldest Hungarian words.", "Offers a breathtaking view of the lake."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A Tihanyi Apátság alapítólevele latin nyelvű, de 58 magyar szót és szókapcsolatot tartalmaz.",
        "Az apátság altemplomában található az alapító, I. András király egyetlen épségben maradt sírja.",
        "Tihany híres a levendulatermesztésr�?l, az els�? töveket az 1920-as években telepítették ide.",
        "A félszigeten találhatók a barátlakások, Európa egyetlen épségben maradt remetetelepe.",
        "A Tihanyi Visszhang a 19. század óta híres, bár a beépítések miatt ma már kevésbé hallható."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zalaegerszeg",
    type: "city",
    parent: "HU-ZA",
    coords: [16.8439, 46.8417],
    name: {"de": "Egersee", "hu": "Zalaegerszeg", "ro": "Zalaegerszeg", "en": "Zalaegerszeg"},
    image: "/geo-images/hungary/zalaegerszeg.webp",
    description: {
      "de": "Zalaegerszeg, im Westen Ungarns am Ufer der Zala gelegen, ist eine grüne Stadt, die von den sanften Hügeln der Region Zala umgeben ist. Die Stadt ist bekannt für ihr reiches kulturelles Erbe und ihre Verbindung zur ungarischen �?lindustrie. Ein Highlight ist das Göcsej-Freilichtmuseum, das erste seiner Art in Ungarn, das die traditionelle bäuerliche Architektur der Region zeigt. Mit dem nahegelegenen Gébárti-See und dem Aquacity-Wasserpark bietet Zalaegerszeg zudem vielfältige Freizeitmöglichkeiten für Natur- und Wasserliebhaber.",
      "hu": "Zalaegerszeg, Nyugat-Magyarországon, a Zala folyó partján fekv�? zöld város, amelyet a Zalai-dombság lankái öveznek. A város híres gazdag kulturális örökségér�?l és a magyar olajiparhoz fűz�?d�? szoros kapcsolatáról. Egyik legf�?bb látványossága a Göcseji Falumúzeum, az ország els�? szabadtéri néprajzi múzeuma, amely a régió hagyományos paraszti építészetét mutatja be. A közeli Gébárti-tóval és az Aquacity víziparkkal Zalaegerszeg változatos kikapcsolódási lehet�?ségeket kínál a természet és a víz kedvel�?inek.",
      "ro": "Zalaegerszeg, situat în vestul Ungariei pe malul râului Zala, este un ora�? verde înconjurat de dealurile domoale ale regiunii Zala. Ora�?ul este cunoscut pentru mo�?tenirea sa cultural�? bogat�? �?i leg�?tura sa cu industria petrolier�? maghiar�?. Un punct de atrac�?ie este Muzeul Satului Göcsej, primul de acest fel din Ungaria, care prezint�? arhitectura rural�? tradi�?ional�? a regiunii. Cu lacul Gébárti din apropiere �?i parcul acvatic Aquacity, Zalaegerszeg ofer�? diverse oportunit�?�?i de petrecere a timpului liber pentru iubitorii de natur�? �?i ap�?.",
      "en": "Zalaegerszeg, located in western Hungary on the banks of the Zala River, is a green city surrounded by the gentle hills of the Zala region. The city is known for its rich cultural heritage and its connection to the Hungarian oil industry. A highlight is the Göcsej Open-Air Museum, the first of its kind in Hungary, showcasing the region's traditional rural architecture. With the nearby Lake Gébárti and the Aquacity water park, Zalaegerszeg offers diverse leisure opportunities for nature and water lovers."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Zalaegerszeg, Zala vármegye székhelye, a Zala folyó völgyében, a zalai dombok között fekszik, és az ország egyik legzöldebb városaként ismert. A város arculatát a modern építészet és a népi hagyományok tisztelete határozza meg. Itt nyílt meg az ország legels�? szabadtéri néprajzi múzeuma, a Göcseji Falumúzeum, amely bemutatja a régió különleges faépítészetét és paraszti kultúráját. Zalaegerszeg fontos ipari és kulturális központ, büszkélkedhet a Hevesi Sándor Színházzal és a TV-toronnyal, ahonnan tiszta id�?ben az Alpok csúcsai is látszanak. A környez�? Gébárti-tó és az AquaCity vízipark kiváló kikapcsolódást nyújt a családoknak, míg a város körüli erd�?k a természetjárók paradicsomát alkotják.",
      "ro": "",
      "en": ""
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
        "A város modern építészetér�?l és gondozott parkjairól ismert.",
        "Fontos ipari központ, különös tekintettel az elektronikára és a logisztikára.",
        "A Gébárti-tó népszerű horgász- és fürd�?hely.",
        "Minden évben megrendezik a Göcseji Prímásversenyt.",
        "Magyarország egyik legerd�?sebb régiójában fekszik."
      ],
      "ro": [
        "Re�?edin�?a jude�?ului Zala.",
        "Muzeul Satului Göcsej prezint�? peste 40 de cl�?diri istorice.",
        "G�?zduie�?te Muzeul Maghiar al Petrolului �?i Gazelor.",
        "Ora�?ul este cunoscut pentru arhitectura sa modern�? �?i parcurile bine între�?inute.",
        "Centru industrial important cu accent pe electronic�? �?i logistic�?.",
        "Lacul Gébárti este o destina�?ie popular�? pentru pescuit �?i sc�?ldat.",
        "G�?zduie�?te anual concursul de l�?utari din Göcsej.",
        "Situat în una dintre cele mai împ�?durite regiuni din Ungaria."
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
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Zalaegerszegen nyílt meg 1968-ban az ország els�? szabadtéri néprajzi múzeuma.",
        "A város felett magasodó TV-torony 95 méter magas, és körpanorámás kávézóval rendelkezik.",
        "Itt található a Magyar Olaj- és Gázipari Múzeum, emléket állítva a régió energetikai múltjának.",
        "Zalaegerszeg híres a 'virágváros' jellegér�?l és a rendezett, tiszta köztereir�?l.",
        "A város szélén található Gébárti-tó népszerű horgász- és szabadid�?központ."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykanizsa",
    type: "city",
    parent: "HU-ZA",
    coords: [16.9911, 46.45],
    name: {"de": "Gro�?kirchen", "hu": "Nagykanizsa", "ro": "Nagykanizsa", "en": "Nagykanizsa"},
    image: "/geo-images/hungary/nagykanizsa.webp",
    description: {"de": "Wichtiger Verkehrsknotenpunkt im Südwesten Ungarns.", "hu": "Fontos közlekedési csomópont Délnyugat-Magyarországon.", "ro": "Important nod de transport în sud-vestul Ungariei.", "en": "Important transport hub in southwestern Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Nagykanizsa Zala vármegye második legnagyobb városa, egykor fontos katonai végvár és kereskedelmi központ a délnyugati határ mentén. A város történelmében meghatározó volt a török elleni küzdelem, s bár az egykori vár mára elpusztult, emléke a város nevében és kultúrájában tovább él. Nagykanizsa tágas tereivel, mint az Erzsébet tér, és elegáns palotáival a polgári jólét korszakát idézi, amikor a város a délnyugati térség legfontosabb gazdasági centruma volt. A város környéke, különösen a Csónakázó-tó és a környez�? erd�?k kiváló lehet�?séget adnak a túrázásra és a sportolásra. Nagykanizsa híres a kerékpáros kultúrájáról és a határ menti baráti kapcsolatok ápolásáról.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["War historisch eine wichtige Festungsstadt.", "Bekannt für ihre Parks und Grünflächen."], "hu": ["Történelmileg fontos végvár volt.", "Parkjairól és zöldövezeteir�?l ismert."], "ro": ["A fost istoric un important ora�? fort�?rea�?�?.", "Cunoscut pentru parcurile �?i spa�?iile sale verzi."], "en": ["Was historically an important fortress town.", "Known for its parks and green spaces."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Nagykanizsa vára a török hódoltság idején az ország egyik legfontosabb végvára volt.",
        "Az Erzsébet téren található Zenepavilon a város egyik legkedveltebb találkozóhelye.",
        "Nagykanizsa a 19. század végén az ország egyik legjelent�?sebb sörgyártó városa volt.",
        "A várostól nem messze található a Csónakázó-tó, amely körül nemzetközi szintű kerékpárpálya fut.",
        "A város központjában áll az Alsóvárosi templom, amely a török mecset köveib�?l épült fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely",
    type: "city",
    parent: "HU-ZA",
    coords: [17.2431, 46.7681],
    name: {"de": "Kesthell", "hu": "Keszthely", "ro": "Keszthely", "en": "Keszthely"},
    image: "/geo-images/hungary/keszthely.webp",
    description: {"de": "Die grö�?te Stadt am Plattensee, bekannt für das Schloss Festetics.", "hu": "A Balaton legnagyobb városa, a Festetics-kastélyról ismert.", "ro": "Cel mai mare ora�? de pe Lacul Balaton, cunoscut pentru Castelul Festetics.", "en": "The largest city on Lake Balaton, known for the Festetics Palace."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Keszthely a Balaton legrégebbi és legpatinásabb városa a tó nyugati végénél, amely méltán viseli a 'Balaton f�?városa' címet történelmi és kulturális jelent�?sége miatt. A város ékköve a Grassalkovich-kastélyhoz mérhet�? Festetics-kastély, Magyarország egyik legszebb barokk palotája, amelynek könyvtára és parkja egyedülálló értéket képvisel. Keszthely hangulatos belvárosa, múzeumai (mint a Georgikon vagy a Balatoni Múzeum) és a Monarchia korabeli Szigetfürd�?je visszarepítik a látogatót a múltba. A város nemcsak kulturális központ, hanem fontos egyetemi város is, ahol a mez�?gazdasági oktatás több évszázados múltra tekint vissza. A Balaton-parti sétány és a kiköt�? egész évben vonzó célpont a kikapcsolódásra vágyóknak.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Schloss Festetics ist eines der grö�?ten in Ungarn.", "Heimat des Georgikon, der ersten landwirtschaftlichen Hochschule Europas."], "hu": ["A Festetics-kastély az egyik legnagyobb Magyarországon.", "A Georgikon, Európa els�? mez�?gazdasági f�?iskolájának otthona."], "ro": ["Castelul Festetics este unul dintre cele mai mari din Ungaria.", "Casa Georgikon, primul colegiu agricol din Europa."], "en": ["The Festetics Palace is one of the largest in Hungary.", "Home to the Georgikon, Europe's first agricultural college."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A keszthelyi Festetics-kastély Magyarország negyedik legnagyobb kastélya, 101 helyiséggel.",
        "Itt alapították 1797-ben a Georgikont, Európa els�? agrártudományi f�?iskoláját.",
        "A Helikon Könyvtár a kastélyban az ország egyetlen érintetlenül maradt aristokrata magánkönyvtára.",
        "Keszthelyen található a Balaton egyetlen megmaradt, eredeti formájában újjáépített Szigetfürd�?je.",
        "A Balatoni Múzeum a tó természetvilágát és az emberi élet történetét mutatja be a környéken."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "harkany",
    type: "city",
    parent: "HU-BA",
    coords: [18.2386, 45.8494],
    name: {"de": "Harkány", "hu": "Harkány", "ro": "Harkány", "en": "Harkány"},
    description: {"de": "Berühmte Kurstadt im Süden Ungarns, bekannt für ihr schwefelhaltiges Thermalwasser.", "hu": "Híres fürd�?város Dél-Magyarországon, kénes termálvizér�?l ismert.", "ro": "Faimos ora�? balnear în sudul Ungariei, cunoscut pentru apa sa termal�? sulfuroas�?.", "en": "Famous spa town in southern Hungary, known for its sulfurous thermal water."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Harkány az ország egyik legjelent�?sebb gyógyfürd�?városa Baranya vármegyében, a Villányi-hegység déli lábánál. Világhírnevét egyedülálló összetételű kénes gyógyvizének köszönheti, amelyet véletlenül fedeztek fel az 1820-as években, a mocsarak lecsapolása során. A harkányi víz különlegessége a benne oldott karbonil-szulfid, amely sokkal gyorsabban szívódik fel, mint a hagyományos szulfátok, így rendkívül hatékony a mozgásszervi és b�?rbetegségek kezelésében. A város mediterrán klímája, gondozott parkjai és a fürd�? modern szolgáltatásai egész évben vonzzák a gyógyulni és pihenni vágyókat. Harkány ideális kiindulópont a közeli Siklós és Villány felfedezéséhez is.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Wasser ist besonders gut für Gelenkbeschwerden.", "Eines der bedeutendsten Heilbäder Ungarns."], "hu": ["A víz különösen jó ízületi panaszokra.", "Magyarország egyik legjelent�?sebb gyógyfürd�?je."], "ro": ["Apa este deosebit de bun�? pentru afec�?iuni articulare.", "Una dintre cele mai importante b�?i curative din Ungaria."], "en": ["The water is particularly good for joint complaints.", "One of Hungary's most significant medicinal baths."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A harkányi gyógyvizet 1823-ban fedezte fel Pogány János csatornázó munkás.",
        "Ez az egyetlen hely a világon, ahol a kén karbonil-szulfid formájában van jelen a vízben.",
        "A város közvetlen szomszédságában található a Siklósi Vár és a Villányi borvidék.",
        "A Harkányi Gyógyfürd�? több mint 13 hektáros parkban terül el.",
        "A fürd�? kénes vize jellegzetes illatáról már messzir�?l felismerhet�?."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szigetvar",
    type: "city",
    parent: "HU-BA",
    coords: [17.7981, 46.0494],
    name: {"de": "Inselburg", "hu": "Szigetvár", "ro": "Szigetvár", "en": "Szigetvár"},
    description: {"de": "Historische Stadt, bekannt für die heldenhafte Verteidigung ihrer Burg gegen die Osmanen.", "hu": "Történelmi város, a vár oszmánok elleni h�?sies védelmér�?l ismert.", "ro": "Ora�? istoric, cunoscut pentru ap�?rarea eroic�? a cet�?�?ii sale împotriva otomanilor.", "en": "Historic town known for the heroic defense of its castle against the Ottomans."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Szigetvár városa a magyar történelem egyik legh�?siesebb helyszíne, ahol 1532-ben Zrínyi Miklós és maroknyi serege megállította Szulejmán szultán hatalmas hadát. A szigetvári vár ostroma a világtörténelem egyik legfontosabb csatája volt, hiszen bár a vár elesett, a török sereg annyira meggyengült, hogy nem tudta folytatni útját Bécs felé. A vár falai között ma múzeum és emlékhely működik, ahol a látogatók megismerhetik a 'szigetvári h�?s' történetét. A város azonban nemcsak a múltjáról híres: modern gyógyfürd�?je és a török kori emlékek, mint a Szulejmán-dzsámi, egyedülálló hangulatot kölcsönöznek a településnek. Szigetvár ma a magyar-török megbékélés és a történelmi emlékezet egyik legfontosabb központja.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Schauplatz der Belagerung von 1566.", "Hier starb Sultan Süleyman der Prächtige."], "hu": ["Az 1566-os ostrom helyszíne.", "Itt halt meg I. Szulejmán szultán."], "ro": ["Locul asediului din 1566.", "Aici a murit sultanul Soliman Magnificul."], "en": ["Site of the siege of 1566.", "Sultan Suleiman the Magnificent died here."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szigetvár véd�?je, Zrínyi Miklós, a várkapun kitörve halt h�?si halált 1566-ban.",
        "I. Szulejmán szultán a vár ostroma alatt, sátrában hunyt el természetes halállal.",
        "A vár 2016 óta Nemzeti Emlékhely min�?sítéssel rendelkezik.",
        "A városban található Magyar-Török Barátság Park a két nemzet közös történelmének állít emléket.",
        "Szigetvár gyógyfürd�?je 62 fokos nátrium-kloridos, alkáli-hidrogénkarbonátos vízzel várja a vendégeket."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "baja",
    type: "city",
    parent: "HU-BK",
    coords: [18.95, 46.1833],
    name: {"de": "Frankenstadt", "hu": "Baja", "ro": "Baja", "en": "Baja"},
    image: "/geo-images/hungary/baja.webp",
    description: {"de": "Stadt an der Donau, berühmt für ihre Fischsuppe und das jährliche Fischsuppen-Festival.", "hu": "Duna-parti város, híres a halászlevér�?l és az évente megrendezett halászlé-fesztiválról.", "ro": "Ora�? pe Dun�?re, faimos pentru ciorba de pe�?te �?i festivalul anual al ciorbei de pe�?te.", "en": "City on the Danube, famous for its fish soup and the annual fish soup festival."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Baja a Duna bal partján, a Sugovica folyóág és a Gemenci erd�? szomszédságában fekv�? hangulatos kisváros, amelyet gyakran a 'vizek városaként' emlegetnek. A település arculatát a folyó és a vízi élet határozza meg, legfontosabb eseménye pedig a minden évben megrendezett Bajai Halászléf�?z�? Népünnepély, ahol több ezer bográcsban rotyog a híres bajai halászlé. A város központja a Szentháromság tér, amely Európa egyik legszebb, itáliai stílusú tere, közvetlen kapcsolattal a vízparttal. Baja kulturális sokszínűségét a magyarok, horvátok (bunyevácok) és németek évszázados együttélése adja. A város ideális célpont a vízi sportok kedvel�?inek és a természetjáróknak, akik a Gemenci erd�? vadregényes tájait fedeznék fel.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Liegt am Zusammenfluss von Donau und Sugovica.", "Wichtiges kulturelles Zentrum der Region."], "hu": ["A Duna és a Sugovica találkozásánál fekszik.", "A régió fontos kulturális központja."], "ro": ["Situat la confluen�?a Dun�?rii cu Sugovica.", "Centru cultural important al regiunii."], "en": ["Located at the confluence of the Danube and Sugovica.", "Important cultural center of the region."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Baja f�?tere, a Szentháromság tér, pontosan akkora, mint a velencei Szent Márk tér.",
        "A bajai halászlé különlegessége a gyufatészta, amelyet a halhús mellé tálalnak.",
        "A város határában kezd�?dik a Gemenci erd�?, Európa legnagyobb összefügg�? ártéri erdeje.",
        "Baja híres szülötte Türr István, a Korinthoszi-csatorna egyik tervez�?je.",
        "A Sugovica-parti sétány és a Pet�?fi-sziget a város legnépszerűbb kikapcsolódási helyszíne."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kiskunfelegyhaza",
    type: "city",
    parent: "HU-BK",
    coords: [19.85, 46.7167],
    name: {"de": "Feledihas", "hu": "Kiskunfélegyháza", "ro": "Kiskunfélegyháza", "en": "Kiskunfélegyháza"},
    description: {"de": "Stadt in der Gro�?en Tiefebene mit beeindruckender Jugendstilarchitektur.", "hu": "Alföldi város lenyűgöz�? szecessziós építészettel.", "ro": "Ora�? în Marea Câmpie cu o arhitectur�? Art Nouveau impresionant�?.", "en": "City in the Great Plain with impressive Art Nouveau architecture."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Kiskunfélegyháza a Kiskunság szívében fekv�? város, amely gazdag néprajzi hagyományairól és gyönyörű szecessziós építészetér�?l ismert. A város jelképe az impozáns Városháza, amely a magyar szecesszió egyik legszebb példája, gazdagon díszítve Zsolnay-kerámiákkal. A település története szorosan összefonódik a kunok kiváltságaival és a mez�?városi polgárosodással. Kiskunfélegyháza híres szülötte Pet�?fi Sándor (akit a város sajátjának tekint) és Móra Ferenc, az 'aranykoporsó' írója. A látogatókat a Kiskun Múzeum különleges börtönmúzeuma és a város környéki pusztai világ, Bugac közelsége vonzza. A város gazdaságában a mez�?gazdaság és az élelmiszeripar mellett a gépgyártás is jelent�?s.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Rathaus ist ein Meisterwerk des ungarischen Jugendstils.", "Heimatstadt des Schriftstellers Ferenc Móra."], "hu": ["A városháza a magyar szecesszió remekműve.", "Móra Ferenc író szül�?városa."], "ro": ["Prim�?ria este o capodoper�? a stilului Art Nouveau maghiar.", "Ora�?ul natal al scriitorului Ferenc Móra."], "en": ["The town hall is a masterpiece of Hungarian Art Nouveau.", "Hometown of writer Ferenc Móra."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A kiskunfélegyházi Városháza tornya 45 méter magas és Zsolnay-cseréppel fedett.",
        "Pet�?fi Sándor gyermekkorának jelent�?s részét itt töltötte, és Félegyházát nevezte szül�?városának.",
        "A Kiskun Múzeumban látható az ország egyik utolsóként fennmaradt szélmalma.",
        "Móra Ferenc szül�?háza ma emlékmúzeumként működik a városban.",
        "A várostól mindössze 20 kilométerre fekszik Bugac, a pusztai turizmus központja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bugac",
    type: "landmark",
    parent: "HU-BK",
    coords: [19.6833, 46.6833],
    name: {"de": "Bugac", "hu": "Bugac", "ro": "Bugac", "en": "Bugac"},
    description: {"de": "Teil des Kiskunság-Nationalparks, bekannt für seine traditionelle Puszta-Landschaft.", "hu": "A Kiskunsági Nemzeti Park része, hagyományos pusztai tájáról ismert.", "ro": "Parte a Parcului Na�?ional Kiskunság, cunoscut pentru peisajul s�?u tradi�?ional de puszta.", "en": "Part of the Kiskunság National Park, known for its traditional puszta landscape."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Bugac a Kiskunsági Nemzeti Park legnagyobb és legismertebb egysége, a magyar puszta és a pásztorkultúra egyik legfontosabb �?rz�?helye. A terület híres a végtelen homokpusztáiról, az �?shonos magyar állatfajokról (szürke marha, rackajuh, mangalica) és a lenyűgöz�? lovasbemutatókról. Bugacpuszta szívében található a Pásztormúzeum, amely bemutatja az egykori pusztai életmódot és a pásztorok eszközeit. Kétévente itt rendezik meg az Ősök Napját és a Kurultájt, a hun és türk tudatú népek legnagyobb hagyomány�?rz�? seregszemléjét. A táj nyugalma, az �?sborókás és a pusztai rónaság különleges atmoszférája felejthetetlen élményt nyújt a természetbarátoknak és a magyar történelem iránt érdekl�?d�?knek.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Veranstaltet den Kurultáj, ein Treffen der Turkvölker.", "Heimat der ungarischen Graurinder."], "hu": ["Itt rendezik meg a Kurultájt.", "A magyar szürkemarhák hazája."], "ro": ["G�?zduie�?te Kurultáj, o întâlnire a popoarelor turcice.", "Casa vitelor sure maghiare."], "en": ["Hosts the Kurultáj, a meeting of Turkic peoples.", "Home of the Hungarian Grey cattle."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Bugac az UNESCO által elismert bioszféra-rezervátum része.",
        "Itt található a Kiskunság egyik utolsó nagy kiterjedésű �?sborókása.",
        "A bugaci ménes és a csikósok bemutatói világszerte ismertek.",
        "A Pásztormúzeum épülete egy hagyományos nádtet�?s kunyhót formáz.",
        "A területen rendszeresen végeznek régészeti ásatásokat, amelyek egy jelent�?s középkori kolostort tártak fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "oroshaza",
    type: "city",
    parent: "HU-BE",
    coords: [20.6667, 46.5667],
    name: {"de": "Orosháza", "hu": "Orosháza", "ro": "Orosháza", "en": "Orosháza"},
    description: {"de": "Stadt in Südostungarn, bekannt für das Heil- und Strandbad Gyopárosfürd�?.", "hu": "Délkelet-magyarországi város, a Gyopárosfürd�? gyógy- és strandfürd�?r�?l ismert.", "ro": "Ora�? în sud-estul Ungariei, cunoscut pentru b�?ile curative �?i de �?trand Gyopárosfürd�?.", "en": "City in southeastern Hungary, known for the Gyopárosfürd�? medicinal and thermal bath."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Orosháza Békés vármegye jelent�?s gazdasági és kulturális központja, amely leginkább a t�?le karnyújtásnyira fekv�? Gyopárosfürd�?r�?l nevezetes. A 'földi paradicsomként' is emlegetett fürd�?komplexum egy természetes szikes tó partján épült fel, s gyógyvize mellett lenyűgöz�? parkjával és modern élményfürd�?jével várja a látogatókat. Orosháza városa híres gazdag agrármúltjáról és ipari fejl�?désér�?l, különösen az üveggyártásról. A kulturális élet központja a városi múzeum és a művészeti galériák, míg a gasztronómia kedvel�?it a környékbeli kolbász- és húsipari specialitások vonzzák. A település rendezett tereivel, szobraival és barátságos alföldi hangulatával ideális helyszín a regenerálódásra és a dél-alföldi kultúra felfedezésére.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird oft als 'Perle der Tiefebene' bezeichnet.", "Wichtiges Zentrum der Glasindustrie."], "hu": ["Gyakran az 'Alföld gyöngyszemeként' emlegetik.", "Az üvegipar fontos központja."], "ro": ["Adesea numit 'Perla Câmpii'.", "Centru important al industriei sticlei."], "en": ["Often referred to as the 'Pearl of the Lowlands'.", "Important center of the glass industry."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Gyopárosfürd�? vize 1999-ben kapta meg hivatalosan a gyógyvíz min�?sítést.",
        "Orosháza az ország egyik legfontosabb üvegipari központja, ahol több mint 150 éve folyik gyártás.",
        "A város híres a Darvas-kúriáról, amely a környék egyik legszebb klasszicista épülete.",
        "A Szántó Kovács János Múzeumban látható az ország egyik leggazdagabb paraszti kocsi-gyűjteménye.",
        "Gyopárosfürd�? tórendszere három tóból áll, amelyek összesen 6 hektár felületűek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mezohegyes",
    type: "city",
    parent: "HU-BE",
    coords: [20.8167, 46.3167],
    name: {"de": "Mez�?hegyes", "hu": "Mez�?hegyes", "ro": "Mez�?hegyes", "en": "Mez�?hegyes"},
    description: {"de": "Stadt bekannt für ihr staatliches Gestüt und ihre reiche Pferdezuchttradition.", "hu": "Állami ménesbirtokáról és gazdag lótartási hagyományairól ismert város.", "ro": "Ora�? cunoscut pentru herghelia sa de stat �?i bogata tradi�?ie în cre�?terea cailor.", "en": "Town known for its state stud farm and rich horse-breeding tradition."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Mez�?hegyes egyedülálló 'város az országban', amelynek története szorosan összefonódik a híres állami ménesbirtokkal. A települést II. József császár alapította 1784-ben mint katonai ménest, s azóta a magyar lótenyésztés egyik legfontosabb fellegvára. Mez�?hegyes építészeti képe rendkívül különleges: a város egységes klasszicista és empire stílusú épületei, a monumentális istállók és a lovaspályák egy letűnt kor eleganciáját hirdetik. Itt tenyésztették ki a nóniusz, a gidrán és a furioso-north star lófajtákat, amelyek ma is a magyar büszkeségek közé tartoznak. A terület ma Nemzeti Ménesbirtok és Tangazdaságként működik, s kulturális-turisztikai eseményeivel, lovasversenyeivel vonzza a látogatókat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Gegründet 1784 von Kaiser Joseph II.", "Die Architektur der Stadt ist einzigartig in Ungarn."], "hu": ["1784-ben alapította II. József császár.", "A város építészete egyedülálló Magyarországon."], "ro": ["Fondat în 1784 de împ�?ratul Iosif al II-lea.", "Arhitectura ora�?ului este unic�? în Ungaria."], "en": ["Founded in 1784 by Emperor Joseph II.", "The town's architecture is unique in Hungary."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A mez�?hegyesi ménesbirtok az UNESCO világörökségi várományos listáján szerepel.",
        "Itt található az ország egyik legnagyobb fedett lovardája.",
        "A településen 54 műemlék épület található, amelyek többsége a ménesbirtokhoz kapcsolódik.",
        "Mez�?hegyes híres a nóniusz lófajtáról, amelyet 'magyar lónak' is neveznek ereje és nemessége miatt.",
        "A város parkjai és platánsorai az ország egyik legszebb tájépítészeti együttesét alkotják."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarospatak",
    type: "city",
    parent: "HU-BZ",
    coords: [21.5667, 48.3167],
    name: {"de": "Scharoschpatak", "hu": "Sárospatak", "ro": "Sárospatak", "en": "Sárospatak"},
    description: {"de": "Historische Stadt am Fluss Bodrog, bekannt für ihre Renaissanceburg und das Kollegium.", "hu": "Történelmi város a Bodrog partján, reneszánsz váráról és kollégiumáról ismert.", "ro": "Ora�? istoric pe râul Bodrog, cunoscut pentru castelul s�?u renascentist �?i colegiu.", "en": "Historic town on the Bodrog river, known for its Renaissance castle and college."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Sárospatak, a 'Bodrog-parti Athén', a magyar művel�?déstörténet és oktatás egyik legfontosabb központja Borsod-Abaúj-Zemplén vármegyében. A város szimbóluma a Rákóczi-vár, a magyarországi kés�? reneszánsz építészet legértékesebb alkotása, amely a híres erdélyi fejedelmi család székhelye volt. A vár falai között ma múzeum működik, bemutatva a Rákóczi-szabadságharc emlékeit. Sárospatak másik büszkesége a Református Kollégium, ahol több évszázadon át tanultak a magyar szellemi élet kiválóságai, s amelynek könyvtára felbecsülhetetlen értékeket �?riz. A Bodrog folyó, a közeli Megyer-hegyi tengerszem és a Zempléni-hegység közelsége a természetjárók számára is vonzóvá teszi ezt a történelmi várost.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird oft als 'Athen am Bodrog' bezeichnet.", "Die Burg Rákóczi ist ein bedeutendes Denkmal."], "hu": ["Gyakran 'Bodrog-parti Athénként' emlegetik.", "A Rákóczi-vár jelent�?s műemlék."], "ro": ["Adesea numit 'Atena de pe Bodrog'.", "Castelul Rákóczi este un monument important."], "en": ["Often called 'Athens on the Bodrog'.", "The Rákóczi Castle is a significant monument."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A sárospataki Rákóczi-vár szerepel az 500 forintos bankjegy hátoldalán.",
        "A Református Kollégiumot 1531-ben alapították, Magyarország egyik legrégebbi iskolája.",
        "Itt élt és tanított a híres pedagógus, Comenius, a 17. század közepén.",
        "A közeli Megyer-hegyi tengerszem az ország egyik legszebb természeti látványossága, egy régi k�?bánya helyén alakult ki.",
        "Sárospatak a Tokaji borvidék északi kapuja, híres pincészeteir�?l és borairól."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lillafured",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.6167, 48.1],
    name: {"de": "Lillafüred", "hu": "Lillafüred", "ro": "Lillafüred", "en": "Lillafüred"},
    description: {"de": "Malerischer Ferienort im Bükk-Gebirge, bekannt für sein Schlosshotel und den Wasserfall.", "hu": "Fest�?i üdül�?hely a Bükkben, kastélyszállójáról és vízesésér�?l ismert.", "ro": "Sta�?iune pitoreasc�? în mun�?ii Bükk, cunoscut�? pentru hotelul s�?u castel �?i cascad�?.", "en": "Picturesque resort in the Bükk Mountains, known for its castle hotel and waterfall."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Lillafüred Magyarország egyik legfest�?ibb hegyvidéki üdül�?helye Miskolc mellett, a Bükk-hegység keleti kapujában. Központi látványossága a monumentális neoreneszánsz stílusú Palotaszálló, amely a Hámori-tó partján, meredek sziklákkal körülvett völgyben épült fel az 1920-as években. A szálló alatti függ�?kert, a vízesés (amely az ország legmagasabbja) és a közeli cseppk�?barlangok (Anna- és Szent István-barlang) egyedülálló romantikus atmoszférát teremtenek. Lillafüred kedvelt célpontja a kirándulóknak, a kisvasút szerelmeseinek és a csónakázni vágyóknak. A völgy különleges mikroklímája és a tiszta hegyi leveg�? gyógyító ereje miatt is keresett célpont minden évszakban.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hier befindet sich der höchste Wasserfall Ungarns.", "Der Hámori-See bietet Möglichkeiten zum Bootfahren."], "hu": ["Itt található Magyarország legmagasabb vízesése.", "A Hámori-tó csónakázási lehet�?séget kínál."], "ro": ["Aici se afl�? cea mai înalt�? cascad�? din Ungaria.", "Lacul Hámori ofer�? posibilit�?�?i de plimbare cu barca."], "en": ["Home to the highest waterfall in Hungary.", "Lake Hámori offers boating opportunities."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A lillafüredi vízesés 20 méter magas, és mesterségesen alakították ki a Szinva-patak elterelésével.",
        "A Palotaszálló építéséhez szükséges köveket a környez�? hegyekb�?l bányászták.",
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
    parent: "HU-CS",
    coords: [20.0833, 46.4833],
    name: {"de": "�?pusztaszer", "hu": "�?pusztaszer", "ro": "�?pusztaszer", "en": "�?pusztaszer"},
    description: {"de": "Nationaler Historischer Gedenkpark, Ort der ersten ungarischen Nationalversammlung.", "hu": "Nemzeti Történeti Emlékpark, az els�? magyar országgyűlés helyszíne.", "ro": "Parcul Memorial Istoric Na�?ional, locul primei adun�?ri na�?ionale maghiare.", "en": "National Historical Memorial Park, site of the first Hungarian national assembly."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "�?pusztaszer a magyar nemzet történelmi bölcs�?je, az a hely, ahol a hagyomány szerint Árpád vezér és a törzsf�?k megtartották az els�? országgyűlést a honfoglalás után. A Nemzeti Történeti Emlékpark legfontosabb látnivalója a Feszty-körkép, a monumentális panorámakép, amely a magyarok bejövetelét ábrázolja lenyűgöz�? részletességgel. Az emlékpark területén skanzen (szabadtéri néprajzi múzeum), honfoglalás kori bemutatók és a monostor romjai is megtalálhatók. �?pusztaszer nemcsak múzeum, hanem a nemzeti összetartozás szimbóluma is, ahol minden évben ezrek emlékeznek meg a magyar államiság gyökereir�?l. A park interaktív módon, minden korosztály számára élvezetesen mutatja be múltunkat és népi hagyományainkat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Beherbergt das Feszty-Panorama-Gemälde.", "Ein wichtiges Symbol der ungarischen Identität."], "hu": ["Itt látható a Feszty-körkép.", "A magyar identitás fontos szimbóluma."], "ro": ["G�?zduie�?te pictura panoramic�? Feszty.", "Un simbol important al identit�?�?ii maghiare."], "en": ["Houses the Feszty Panorama painting.", "An important symbol of Hungarian identity."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Feszty-körkép (A magyarok bejövetele) 120 méter hosszú és 15 méter magas falfestmény.",
        "A parkban található az Árpád-emlékmű, amelyet 1896-ban emeltek a millennium tiszteletére.",
        "A skanzen a dél-alföldi falvak népi építészetét mutatja be, működ�? szélmalommal.",
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
    parent: "HU-CS",
    coords: [20.15, 46.7167],
    name: {"de": "Csongrád", "hu": "Csongrád", "ro": "Csongrád", "en": "Csongrád"},
    description: {"de": "Stadt an der Mündung der Körös in die Thei�?, bekannt für ihre Altstadt und den Sandstrand.", "hu": "Város a Körös tiszai torkolatánál, óvárosáról és homokos strandjáról ismert.", "ro": "Ora�? la confluen�?a râurilor Körös �?i Tisa, cunoscut pentru ora�?ul vechi �?i plaja de nisip.", "en": "City at the confluence of the Körös and Tisza rivers, known for its old town and sandy beach."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Csongrád a Tisza partján fekv�? város, amely leginkább a folyóhoz kapcsolódó különleges életmódjáról és hangulatos történelmi városrészér�?l ismert. A város ékköve a 'Belváros' (vagy �?város), amely nádtet�?s házaival és kanyargós utcáival egy 18. századi halászfalu hangulatát �?rizte meg érintetlenül. Csongrád másik híres látnivalója a Körös-torok, a Tisza-part egyik legszebb homokos strandja, amely nyaranta igazi tengerparti életérzést nyújt a látogatóknak. A város híres borászatáról is, különösen a Csongrádi borvidék vörösborai (mint a Kadarka) emelkednek ki. A Tisza folyó közelsége, az ártéri erd�?k és a csendes kisvárosi atmoszféra teszi Csongrádot a lassú turizmus egyik kedvelt magyarországi helyszínévé.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Stadtteil 'Belváros' bewahrt die traditionelle Architektur.", "Beliebter Ort für Wassersportler."], "hu": ["A 'Belváros' városrész �?rzi a hagyományos építészetet.", "Népszerű hely a vízisportok kedvel�?i körében."], "ro": ["Cartierul 'Belváros' p�?streaz�? arhitectura tradi�?ional�?.", "Loc popular pentru pasiona�?ii de sporturi nautice."], "en": ["The 'Belváros' district preserves traditional architecture.", "Popular spot for water sports enthusiasts."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A csongrádi Belváros házai műemléki védettség alatt állnak, ma is lakottak vagy vendégházként működnek.",
        "A Körös-toroki homokpad a Tisza alacsony vízállásakor válik láthatóvá és használhatóvá.",
        "A város nevét a közeli szláv 'Csernigrád' (fekete vár) elnevezésr�?l kapta.",
        "Itt található a Szent Rókus templom, amely a város egyik legrégebbi barokk épülete.",
        "Csongrád híres a tiszai halászlevesér�?l, amelyet hagyományosan bográcsban készítenek a parton."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mor",
    type: "city",
    parent: "HU-FE",
    coords: [18.2, 47.3667],
    name: {"de": "Moor", "hu": "Mór", "ro": "Mór", "en": "Mór"},
    description: {"de": "Stadt im Vértes-Gebirge, Zentrum einer berühmten Wei�?weinregion.", "hu": "Város a Vértes lábánál, egy híres fehérborvidék központja.", "ro": "Ora�? în mun�?ii Vértes, centrul unei faimoase regiuni de vin alb.", "en": "City in the Vértes Mountains, center of a famous white wine region."},
    descriptionAdvanced: {
      "de": "Mór, eingebettet zwischen dem Vértes- und Bakony-Gebirge, ist das Zentrum einer der kleinsten, aber angesehensten Weinregionen Ungarns. Die Stadt blickt auf eine lange Tradition des Weinbaus zurück, die vor allem durch die Ansiedlung deutscher Siedler im 18. Jahrhundert geprägt wurde. Weltberühmt ist Mór für die Rebsorte 'Ezerjó', aus der charaktervolle, säurereiche Wei�?weine gekeltert werden. Das barocke Lamberg-Schloss im Stadtzentrum ist ein kulturelles Juwel und beherbergt Ausstellungen zur Lokalgeschichte und Weinbaukultur. Jedes Jahr im Oktober locken die Mórer Weintage Zehntausende Besucher an, die die edlen Tropfen in den vielen Weinkellern verkosten. Die umliegende Hügellandschaft bietet zudem hervorragende Bedingungen für Wanderer und Naturliebhaber.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Mór ist die Heimat der einzigartigen ungarischen Rebsorte 'Ezerjó'.", "Das Lamberg-Schloss wurde vom berühmten Architekten Franz Anton Hillebrandt entworfen.", "Die Mórer Weintage sind eines der ältesten und grö�?ten Weinfeste in Transdanubien.", "In der Stadt lebt eine bedeutende deutsche Minderheit, die den Weinbau ma�?geblich prägte."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für die Rebsorte 'Ezerjó'.", "Veranstaltet jährlich die Mórer Weintage."], "hu": ["Az 'Ezerjó' sz�?l�?fajtáról ismert.", "�?vente megrendezik a Móri Bornapokat."], "ro": ["Cunoscut pentru soiul de struguri 'Ezerjó'.", "G�?zduie�?te anual Zilele Vinului din Mór."], "en": ["Known for the 'Ezerjó' grape variety.", "Hosts the annual Mór Wine Days."]},
  },
  {
    id: "martonvasar",
    type: "city",
    parent: "HU-FE",
    coords: [18.7833, 47.3167],
    name: {"de": "Martonwaschar", "hu": "Martonvásár", "ro": "Martonvásár", "en": "Martonvásár"},
    description: {"de": "Stadt bekannt für das neugotische Schloss Brunszvik und seine Verbindung zu Beethoven.", "hu": "A neogótikus Brunszvik-kastélyról és Beethovenhez fűz�?d�? kapcsolatáról ismert város.", "ro": "Ora�? cunoscut pentru castelul neogotic Brunszvik �?i leg�?tura sa cu Beethoven.", "en": "Town known for the neo-Gothic Brunszvik Castle and its connection to Beethoven."},
    descriptionAdvanced: {
      "de": "Martonvásár ist landesweit bekannt für das prächtige Schloss Brunszvik, das als das 'ungarische Zentrum der Beethoven-Pflege' gilt. Das Schloss wurde im neugotischen Stil umgebaut und ist von einem der schönsten englischen Gärten Ungarns umgeben, in dessen Mitte ein idyllischer See mit einer Insel liegt. Ludwig van Beethoven war ein enger Freund der Familie Brunszvik und verbrachte hier mehrere Sommer, wobei er angeblich einige seiner berühmten Werke in dieser inspirierenden Umgebung komponierte. Heute beherbergt das Schloss ein Beethoven-Museum und ist Sitz des Agrarwissenschaftlichen Forschungszentrums der Ungarischen Akademie der Wissenschaften. Im Sommer finden auf der Insel im Schlosspark regelmä�?ig klassische Konzerte statt, die die Verbindung zwischen dem Genie und diesem romantischen Ort feiern. Martonvásár ist ein Ort, an dem sich Musikgeschichte, Architektur und Natur auf harmonische Weise vereinen.",
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
    facts: {"de": ["Beethoven war oft Gast im Schloss.", "Beherbergt ein Beethoven-Gedenkmuseum."], "hu": ["Beethoven gyakori vendég volt a kastélyban.", "Beethoven-emlékmúzeumnak ad otthont."], "ro": ["Beethoven a fost adesea oaspete la castel.", "G�?zduie�?te un muzeu memorial Beethoven."], "en": ["Beethoven was a frequent guest at the castle.", "Houses a Beethoven Memorial Museum."]},
  },
  {
    id: "mosonmagyarovar",
    type: "city",
    parent: "HU-GS",
    coords: [17.2667, 47.8667],
    name: {"de": "Wieselburg-Ungarisch Altenburg", "hu": "Mosonmagyaróvár", "ro": "Mosonmagyaróvár", "en": "Mosonmagyaróvár"},
    description: {"de": "Stadt an der Grenze zu �?sterreich und der Slowakei, bekannt für ihr Thermalbad.", "hu": "Város az osztrák és szlovák határ közelében, termálfürd�?jér�?l ismert.", "ro": "Ora�? lâng�? grani�?a cu Austria �?i Slovacia, cunoscut pentru baia sa termal�?.", "en": "City near the Austrian and Slovak borders, known for its thermal bath."},
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
    facts: {"de": ["Wichtiges Zentrum für Zahnmedizintourismus.", "Hat eine bedeutende landwirtschaftliche Universität."], "hu": ["A fogászati turizmus fontos központja.", "Jelent�?s agrár-egyetemmel rendelkezik."], "ro": ["Centru important pentru turismul stomatologic.", "Are o universitate agricol�? important�?."], "en": ["Important center for dental tourism.", "Has a significant agricultural university."]},
  },
  {
    id: "fertod",
    type: "city",
    parent: "HU-GS",
    coords: [16.8667, 47.6167],
    name: {"de": "Fert�?d", "hu": "Fert�?d", "ro": "Fert�?d", "en": "Fert�?d"},
    image: "/geo-images/hungary/fertod.webp",
    description: {"de": "Stadt bekannt für das Schloss Esterházy, das 'ungarische Versailles'.", "hu": "Az Esterházy-kastélyról, a 'magyar Versailles-ról' ismert város.", "ro": "Ora�? cunoscut pentru Castelul Esterházy, 'Versailles-ul maghiar'.", "en": "Town known for the Esterházy Palace, the 'Hungarian Versailles'."},
    descriptionAdvanced: {
      "de": "Fert�?d ist weltberühmt für das Schloss Esterházy, das oft als das 'ungarische Versailles' bezeichnet wird und eines der bedeutendsten Barockensembles Mitteleuropas ist. Das Schloss besticht durch seine enorme Grö�?e, den prachtvollen Festsaal und die reich verzierten Fassaden, die den einstigen Reichtum der Fürsten Esterházy widerspiegeln. �?ber fast drei Jahrzehnte wirkte hier der berühmte Komponist Joseph Haydn als Kapellmeister und schuf im Dienste des Fürsten 'Prachtliebender Nikolaus' einen Gro�?teil seines Lebenswerks. Der weitläufige Schlosspark und das angrenzende Marionettentheater zeugen von der glanzvollen höfischen Kultur des 18. Jahrhunderts. Fert�?d liegt zudem am Rande des Nationalparks Fert�?-Hanság, der Teil des UNESCO-Weltkulturerbes ist. Ein Besuch in Fert�?d bietet einen faszinierenden Einblick in die barocke Pracht und die Musikgeschichte von Weltrang.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Esterházy in Fert�?d ist das grö�?te und prächtigste Barockschloss in Ungarn.", "Joseph Haydn lebte und arbeitete fast 30 Jahre lang als Hofkomponist in diesem Schloss.", "Das Schloss besitzt 126 reich dekorierte Zimmer und einen prächtigen Festsaal.", "Jährlich findet in Fert�?d das internationale Haydn-Festival mit hochrangigen Musikern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Joseph Haydn lebte und arbeitete hier viele Jahre.", "Das Schloss ist ein Meisterwerk des Rokoko."], "hu": ["Joseph Haydn sok éven át élt és dolgozott itt.", "A kastély a rokokó remekműve."], "ro": ["Joseph Haydn a tr�?it �?i a lucrat aici mul�?i ani.", "Castelul este o capodoper�? a stilului rococo."], "en": ["Joseph Haydn lived and worked here for many years.", "The palace is a masterpiece of Rococo architecture."]},
  },
  {
    id: "hajduboszormeny",
    type: "city",
    parent: "HU-HB",
    coords: [21.5167, 47.6667],
    name: {"de": "Hajdúböszörmény", "hu": "Hajdúböszörmény", "ro": "Hajdúböszörmény", "en": "Hajdúböszörmény"},
    description: {"de": "Die grö�?te der Hajdú-Städte mit einer einzigartigen kreisförmigen Stadtstruktur.", "hu": "A legnagyobb hajdúváros, egyedülálló körgyűrűs városszerkezettel.", "ro": "Cel mai mare dintre ora�?ele Hajdú, cu o structur�? urban�? circular�? unic�?.", "en": "The largest of the Hajdú towns with a unique circular city structure."},
    descriptionAdvanced: {
      "de": "Hajdúböszörmény ist die grö�?te und geschichtlich bedeutendste der sogenannten 'Haiduckenstädte' in Ostungarn. Das Stadtbild ist einzigartig, da es eine kreisförmige Struktur aufweist, die ursprünglich zu Verteidigungszwecken angelegt wurde und heute denkmalgeschützt ist. Die Haiducken, ursprünglich berittene Viehhirten und später Elitesoldaten, erhielten hier im 17. Jahrhundert von Fürst István Bocskai Land und Privilegien. Das Bocskai-István-Museum dokumentiert die faszinierende Geschichte dieser wehrhaften Gemeinschaft und zeigt wertvolle archäologische Funde aus der Bronzezeit. Die Stadt bewahrt stolz ihre Traditionen und ist für ihre Gastfreundschaft sowie die typische Gastronomie der Tiefebene bekannt. Hajdúböszörmény strahlt eine ruhige, bodenständige Kraft aus, die tief in der ungarischen Geschichte verwurzelt ist.",
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
    facts: {"de": ["Bewahrt die Traditionen der Hajdú-Reiter.", "Wichtiges landwirtschaftliches Zentrum."], "hu": ["Őrzi a hajdú hagyományokat.", "Fontos mez�?gazdasági központ."], "ro": ["P�?streaz�? tradi�?iile haiducilor (Hajdú).", "Centru agricol important."], "en": ["Preserves the Hajdú traditions.", "Important agricultural center."]},
  },
  {
    id: "berettyoujfalu",
    type: "city",
    parent: "HU-HB",
    coords: [21.5, 47.2167],
    name: {"de": "Berettyóújfalu", "hu": "Berettyóújfalu", "ro": "Berettyóújfalu", "en": "Berettyóújfalu"},
    description: {"de": "Stadt im Osten Ungarns, das Zentrum der Region Bihar.", "hu": "Kelet-magyarországi város, a Bihar régió központja.", "ro": "Ora�? în estul Ungariei, centrul regiunii Bihar.", "en": "City in eastern Hungary, the center of the Bihar region."},
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
    facts: {"de": ["Bekannt für sein Thermalbad.", "Wichtiger Verkehrsknotenpunkt nahe der Grenze."], "hu": ["Termálfürd�?jér�?l ismert.", "Fontos közlekedési csomópont a határ közelében."], "ro": ["Cunoscut pentru baia sa termal�?.", "Nod de transport important lâng�? grani�?�?."], "en": ["Known for its thermal bath.", "Important transport hub near the border."]},
  },
  {
    id: "parad",
    type: "city",
    parent: "HU-HE",
    coords: [20.0333, 47.9167],
    name: {"de": "Parád", "hu": "Parád", "ro": "Parád", "en": "Parád"},
    image: "/geo-images/hungary/parad.webp",
    description: {"de": "Kurort im Mátra-Gebirge, bekannt für seine Heilquellen und das Kutschenmuseum.", "hu": "�?dül�?hely a Mátrában, gyógyforrásairól és kocsimúzeumáról ismert.", "ro": "Sta�?iune în mun�?ii Mátra, cunoscut�? pentru izvoarele sale curative �?i muzeul tr�?surilor.", "en": "Resort in the Mátra Mountains, known for its healing springs and carriage museum."},
    descriptionAdvanced: {
      "de": "Parád, eingebettet in das malerische Parád-Tal im Mátra-Gebirge, ist einer der traditionsreichsten Kurorte Ungarns, bekannt für seine vielfältigen Heilwasserquellen. Besonders berühmt ist das 'Paráder Schwefelwasser', das seit Jahrhunderten zur Behandlung von Verdauungsbeschwerden genutzt wird. Der Ortsteil Parádfürd�? besticht durch seine historischen Badegebäude und das imposante Károlyi-Schloss, in dem das Mitte eines weitläufigen Arboretums liegt. Einzigartig ist das Kutschenmuseum in den ehemaligen herrschaftlichen Stallungen (Cifra Istálló), das eine weltweit bedeutende Sammlung historischer Fahrzeuge zeigt. Die Umgebung von Parád bietet fantastische Wanderwege durch dichte Wälder und zu spektakulären Aussichtspunkten im höchsten Gebirge Ungarns. Die Stadt verbindet auf charmante Weise alpine Frische mit kaiserlicher Kurtradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Parád ist landesweit bekannt für seine verschiedenen Heil- und Mineralwasserquellen.", "Das Kutschenmuseum 'Cifra Istálló' gilt als eines der schönsten seiner Art weltweit.", "Das Károlyi-Schloss in Parádfürd�? war einst eine prachtvolle Jagdresidenz.", "In Parád wird noch heute die traditionelle Glasmacherkunst in kleinen Werkstätten gepflegt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Paráder Schwefelwasser ist landesweit bekannt.", "Beherbergt das Cifra-Stallgebäude."], "hu": ["A parádi kénes víz országszerte ismert.", "Itt található a Cifra-istálló."], "ro": ["Apa sulfuroas�? de Parád este cunoscut�? în toat�? �?ara.", "G�?zduie�?te cl�?direa Cifra-istálló."], "en": ["The sulfurous water of Parád is known nationwide.", "Home to the Cifra Stable building."]},
  },
  {
    id: "belapatfalva",
    type: "city",
    parent: "HU-HE",
    coords: [20.35, 48.05],
    name: {"de": "Bélapátfalva", "hu": "Bélapátfalva", "ro": "Bélapátfalva", "en": "Bélapátfalva"},
    description: {"de": "Stadt am Fu�?e des Bükk-Gebirges, berühmt für ihre mittelalterliche Zisterzienserabtei.", "hu": "Város a Bükk lábánál, középkori ciszterci apátságáról híres.", "ro": "Ora�? la poalele mun�?ilor Bükk, faimos pentru aba�?ia sa cistercian�? medieval�?.", "en": "Town at the foot of the Bükk Mountains, famous for its medieval Cistercian abbey."},
    descriptionAdvanced: {
      "de": "Bélapátfalva liegt malerisch am Fu�?e des Bükk-Gebirges und ist vor allem für seine Zisterzienserabtei bekannt, die ein herausragendes Denkmal der romanischen Architektur in Ungarn ist. Die Abtei wurde 1232 gegründet und beeindruckt durch ihre schlichte Schönheit und die charakteristische Fassade aus abwechselnd roten und grauen Steinreihen. Es ist die einzige mittelalterliche Klosterkirche in Ungarn, die fast unversehrt in ihrer ursprünglichen Form erhalten geblieben ist. Direkt neben der Kirche entspringt die 'Drei-Quellen', die dem Ort eine spirituelle Ruhe verleihen. Die Umgebung von Bélapátfalva ist geprägt von den steilen Kalkfelsen des Bükk-Gebirges, die zu anspruchsvollen Wanderungen und Naturerkundungen einladen. Die Stadt ist ein Ort der Stille und Besinnung inmitten einer spektakulären Berglandschaft.",
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
    facts: {"de": ["Die Abteikirche ist eine der am besten erhaltenen romanischen Kirchen Ungarns.", "Beliebter Ausgangspunkt für Wanderungen."], "hu": ["Az apátsági templom Magyarország egyik legjobb állapotban maradt román stílusú temploma.", "Népszerű kiindulópont túrázáshoz."], "ro": ["Biserica aba�?iei este una dintre cele mai bine conservate biserici romanice din Ungaria.", "Punct de plecare popular pentru drume�?ii."], "en": ["The abbey church is one of the best-preserved Romanesque churches in Hungary.", "Popular starting point for hiking."]},
  },
  {
    id: "mezotur",
    type: "city",
    parent: "HU-JN",
    coords: [20.6167, 47.0],
    name: {"de": "Mez�?túr", "hu": "Mez�?túr", "ro": "Mez�?túr", "en": "Mez�?túr"},
    description: {"de": "Stadt in der Tiefebene, bekannt für ihre jahrhundertealte Töpfertradition.", "hu": "Alföldi város, évszázados fazekas hagyományairól ismert.", "ro": "Ora�? în câmpie, cunoscut pentru tradi�?ia sa secular�? în ol�?rit.", "en": "City in the plains, known for its centuries-old pottery tradition."},
    descriptionAdvanced: {
      "de": "Mez�?túr, im Herzen der ungarischen Tiefebene am Ufer der Berettyó gelegen, blickt auf eine jahrhundertelange Tradition als Zentrum des Handwerks und der Bildung zurück. Die Stadt ist landesweit als die 'Stadt der Töpfer' bekannt, da die hiesige Tonverarbeitung seit dem Mittelalter Weltruf genie�?t. Die charakteristische Mez�?túrer Keramik mit ihren typischen Farben und Mustern ist ein geschütztes Kulturerbe der Region. Das Reformierte Kollegium der Stadt, gegründet im 16. Jahrhundert, war über lange Zeit ein geistiges Zentrum der Umgebung. Jährlich im Sommer lockt das 'Túr-Festival' Besucher an, die die Volkskunst, Musik und kulinarischen Spezialitäten der Tiefebene feiern möchten. Mez�?túr strahlt eine angenehme, ländliche Gelassenheit aus und pflegt stolz sein handwerkliches Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Mez�?túr ist das bedeutendste historische Zentrum der Töpferkunst in der ungarischen Tiefebene.", "Die Stadt beherbergt ein renommiertes Museum, das sich ausschlie�?lich der Geschichte der Keramik widmet.", "Das Reformierte Kollegium von Mez�?túr wurde bereits im Jahr 1530 gegründet.", "Die Stadt liegt malerisch am Ufer der Berettyó, die ideale Bedingungen für Angler bietet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Mez�?túrer Keramik ist ein Hungarikum.", "Veranstaltet jährlich Töpferfestivals."], "hu": ["A mez�?túri kerámia hungarikum.", "�?vente rendeznek fazekas fesztiválokat."], "ro": ["Ceramica de Mez�?túr este un Hungarikum.", "G�?zduie�?te anual festivaluri de ol�?rit."], "en": ["Mez�?túr ceramics are a Hungarikum.", "Hosts annual pottery festivals."]},
  },
  {
    id: "tiszafured",
    type: "city",
    parent: "HU-JN",
    coords: [20.75, 47.6167],
    name: {"de": "Tiszafüred", "hu": "Tiszafüred", "ro": "Tiszafüred", "en": "Tiszafüred"},
    description: {"de": "Die 'Hauptstadt des Thei�?-Sees', ein Zentrum für �?kotourismus und Wassersport.", "hu": "A 'Tisza-tó f�?városa', az ökoturizmus és a vízisportok központja.", "ro": "'Capitala Lacului Tisa', un centru pentru ecoturism �?i sporturi nautice.", "en": "The 'Capital of Lake Tisza', a center for ecotourism and water sports."},
    descriptionAdvanced: {
      "de": "Tiszafüred ist das touristische Zentrum und die 'Hauptstadt' des Thei�?-Sees, einer einzigartigen Wasserlandschaft im Osten Ungarns. Die Stadt bietet ideale Bedingungen für alle, die aktive Erholung am und im Wasser suchen, sei es beim Baden, Segeln, Angeln oder bei Kanutouren durch die labyrinthartigen Schilfgebiete. Besonders attraktiv ist der Thei�?-See-�?kozentrum-Park, in dem man in riesigen Aquarien die einheimische Unterwasserwelt, darunter auch den mächtigen Hausen, bewundern kann. Tiszafüred hat zudem eine lange Tradition als Kurort und bietet entspannende Stunden in seinem Thermalbad. Die Stadt ist zudem für ihre traditionsreiche Töpferkunst bekannt, deren Erzeugnisse im örtlichen Museum besichtigt werden können. Als Tor zum Nationalpark Hortobágy ist Tiszafüred ein perfekter Ausgangspunkt für Naturerlebnisse zwischen Wasser und Puszta.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszafüred ist das wichtigste touristische Zentrum am Thei�?-See.", "Das �?kozentrum in der Stadt beherbergt das grö�?te Sü�?wasseraquarium-System in Europa.", "Die Stadt ist ein staatlich anerkannter Heilkurort mit wertvollem Thermalwasser.", "Die Tiszafüreder Töpferkunst ist ein wichtiger Teil der regionalen Volkskunsttradition."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Tor zum Nationalpark Hortobágy.", "Bekannt für seine Thermalbäder."], "hu": ["A Hortobágyi Nemzeti Park kapuja.", "Termálfürd�?ir�?l ismert."], "ro": ["Poarta c�?tre Parcul Na�?ional Hortobágy.", "Cunoscut pentru b�?ile sale termale."], "en": ["Gateway to the Hortobágy National Park.", "Known for its thermal baths."]},
  },
  {
    id: "komarom",
    type: "city",
    parent: "HU-KE",
    coords: [18.1167, 47.75],
    name: {"de": "Komorn", "hu": "Komárom", "ro": "Komárom", "en": "Komárom"},
    description: {"de": "Grenzstadt an der Donau, bekannt für ihr riesiges Festungssystem.", "hu": "Duna-parti határváros, hatalmas er�?drendszerér�?l ismert.", "ro": "Ora�? de grani�?�? pe Dun�?re, cunoscut pentru sistemul s�?u imens de fortifica�?ii.", "en": "Border city on the Danube, known for its massive fortress system."},
    descriptionAdvanced: {
      "de": "Komárom, an der Donau an der Grenze zur Slowakei gelegen, ist eine Stadt mit einer beeindruckenden militärischen Vergangenheit und einer lebendigen Gegenwart. Berühmt ist die Stadt für ihr gigantisches Festungssystem, bestehend aus den Festungen Monostor, Igmánd und Csillag, das im 19. Jahrhundert als das grö�?te der �?sterreichisch-Ungarischen Monarchie galt. Die Festung Monostor ist heute ein faszinierendes Freilichtmuseum und Schauplatz zahlreicher historischer Festivals und Ausstellungen. Komárom ist zudem ein bedeutender Kurort, dessen Thermalwasser besonders reich an Mineralien ist und in einem modernen Bad genutzt wird. Die Stadt ist durch die Elisabethbrücke mit ihrer Zwillingsstadt Komárno in der Slowakei verbunden, was zu einen regen kulturellen Austausch führt. Komárom verbindet auf einzigartige Weise monumentale Festungsarchitektur mit entspannender Wellnesskultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Festungssystem von Komárom galt im 19. Jahrhundert als uneinnehmbar.", "Die Festung Monostor ist die grö�?te Festungsanlage in ganz Mitteleuropa.", "Die Stadt ist ein wichtiger Hafen an der Donau und ein industrielles Zentrum.", "Komárom besitzt ein bekanntes Heilbad mit jodhaltigem Thermalwasser."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Festungssystem ist das grö�?te seiner Art in Mitteleuropa.", "Geteilt in einen ungarischen und einen slowakischen Teil."], "hu": ["Az er�?drendszer Közép-Európa legnagyobb ilyen jellegű építménye.", "Magyar és szlovák részre oszlik."], "ro": ["Sistemul de fortifica�?ii este cel mai mare de acest tip din Europa Central�?.", "�?mp�?r�?it într-o parte maghiar�? �?i una slovac�?."], "en": ["The fortress system is the largest of its kind in Central Europe.", "Divided into a Hungarian and a Slovak part."]},
  },
  {
    id: "babolna",
    type: "city",
    parent: "HU-KE",
    coords: [17.9833, 47.65],
    name: {"de": "Bábolna", "hu": "Bábolna", "ro": "Bábolna", "en": "Bábolna"},
    description: {"de": "Stadt berühmt für ihr historisches Gestüt und die Pferdezucht.", "hu": "Történelmi ménesbirtokáról és lótartásáról híres város.", "ro": "Ora�? faimos pentru herghelia sa istoric�? �?i cre�?terea cailor.", "en": "Town famous for its historic stud farm and horse breeding."},
    descriptionAdvanced: {
      "de": "Bábolna ist weltberühmt für sein Nationalgestüt, das 1789 gegründet wurde und die Wiege der weltbekannten Araberpferdezucht in Ungarn ist. Die Architektur des Ortes ist geprägt von den herrschaftlichen Gebäuden des Gestüts, dem prachtvollen Schloss und der Reithalle, die eine Atmosphäre von aristokratischem Glanz versprühen. Hier wurde die berühmte Linie 'Shagya-Araber' gezüchtet, die für ihre Ausdauer, Schnelligkeit und Eleganz geschätzt wird. Ein besonderes Highlight ist das Gestütsmuseum, das die Geschichte der Pferdezucht und die militärische Bedeutung der Anlage eindrucksvoll dokumentiert. Bábolna ist zudem eine moderne Agrarstadt und beherbergt bedeutende Unternehmen der Geflügelzucht. Für Pferdeliebhaber und Freunde historischer Ensembles ist Bábolna ein Ort von zeitloser Eleganz und gro�?er Bedeutung.",
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
    facts: {"de": ["Gegründet im Jahr 1789.", "Heimat der Shagya-Araber-Pferde."], "hu": ["1789-ben alapították.", "A Shagya-arab lovak hazája."], "ro": ["Fondat în anul 1789.", "Casa cailor Shagya Arab."], "en": ["Founded in 1789.", "Home of the Shagya Arabian horses."]},
  },
  {
    id: "szecseny",
    type: "city",
    parent: "HU-NO",
    coords: [19.5167, 48.0833],
    name: {"de": "Szecseny", "hu": "Szécsény", "ro": "Szécsény", "en": "Szécsény"},
    description: {"de": "Historische Stadt in Nordungarn, bekannt für das Barockschloss Forgách.", "hu": "�?szak-magyarországi történelmi város, a barokk Forgách-kastélyról ismert.", "ro": "Ora�? istoric în nordul Ungariei, cunoscut pentru castelul baroc Forgách.", "en": "Historic town in northern Hungary, known for the Baroque Forgách Castle."},
    descriptionAdvanced: {
      "de": "Szécsény, im Norden Ungarns im Ipoly-Tal gelegen, ist eine Stadt von gro�?er historischer Bedeutung und barockem Charme. Berühmt wurde sie durch den Reichstag von 1705, auf dem Fürst Ferenc Rákóczi II. zum Oberhaupt der ungarischen Konföderation gewählt wurde. Das barocke Forgách-Schloss, in dem heute das Ferenc-Kubinyi-Museum untergebracht ist, erinnert an diese glanzvolle Zeit und zeigt bedeutende Ausstellungen zur Regionalgeschichte. Ebenfalls sehenswert ist das Franziskanerkloster mit seiner gotischen Kirche, das über Jahrhunderte ein geistiges Zentrum der Region war. Eine Kuriosität der Stadt ist der 'Schiefe Turm' von Szécsény, ein alter Wehrturm, der sich im Laufe der Zeit geneigt hat. Die ruhige Atmosphäre der Stadt und die Nähe zur slowakischen Grenze machen sie zu einem interessanten Ziel für Geschichtsinteressierte.",
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
    facts: {"de": ["Ort der ungarischen Nationalversammlung von 1705.", "Hat einen schiefen Feuerturm."], "hu": ["Az 1705-ös országgyűlés helyszíne.", "Ferde tűztoronnyal rendelkezik."], "ro": ["Locul adun�?rii na�?ionale maghiare din 1705.", "Are un turn de foc înclinat."], "en": ["Site of the Hungarian national assembly of 1705.", "Has a leaning fire tower."]},
  },
  {
    id: "tar",
    type: "city",
    parent: "HU-NO",
    coords: [19.75, 47.95],
    name: {"de": "Tar", "hu": "Tar", "ro": "Tar", "en": "Tar"},
    description: {"de": "Dorf am Fu�?e der Mátra, bekannt für seinen buddhistischen Stupa.", "hu": "Falu a Mátra lábánál, buddhista sztúpájáról ismert.", "ro": "Sat la poalele mun�?ilor Mátra, cunoscut pentru stupa sa budist�?.", "en": "Village at the foot of the Mátra, known for its Buddhist stupa."},
    descriptionAdvanced: {
      "de": "Der kleine Ort Tar im Cserhát-Gebirge ist bekannt für den buddhistischen K�?rösi-Csoma-Sándor-Gedenkpark. Dieser Park wurde zu Ehren des berühmten ungarischen Sprachforschers errichtet, der das erste tibetisch-englische Wörterbuch verfasste. Das Zentrum des Parks bildet eine wei�?e Friedensstupa, die vom 14. Dalai Lama eingeweiht wurde. Ein tibetisches Gedenkhaus und ein kleiner Tempel vermitteln Einblicke in die fernöstliche Kultur. Tar beherbergt zudem eine historisch interessante mittelalterliche Wehrkirche.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Tar befindet sich eine buddhistische Stupa, die dem Weltfrieden gewidmet ist.", "Der Gedenkpark ehrt den Tibetologen Alexander Csoma de K�?rös.", "Die Stupa wurde 1992 vom Dalai Lama persönlich eingeweiht.", "Der Ort besitzt eine gut erhaltene mittelalterliche Wehrkirche."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der Stupa wurde zum Gedenken an Alexander Csoma de K�?rös errichtet.", "Ein Ort der Ruhe und Meditation."], "hu": ["A sztúpát K�?rösi Csoma Sándor emlékére emelték.", "A nyugalom és meditáció helye."], "ro": ["Stupa a fost ridicat�? în memoria lui Alexander Csoma de K�?rös.", "Un loc de lini�?te �?i medita�?ie."], "en": ["The stupa was built in memory of Alexander Csoma de K�?rös.", "A place of peace and meditation."]},
  },
  {
    id: "erd",
    type: "city",
    parent: "HU-PE",
    coords: [18.9167, 47.3833],
    name: {"de": "Hanselbeck", "hu": "�?rd", "ro": "�?rd", "en": "�?rd"},
    description: {"de": "Gro�?e Stadt in der Agglomeration von Budapest, bekannt für ihr osmanisches Minarett.", "hu": "Nagyváros Budapest agglomerációjában, oszmán minaretjér�?l ismert.", "ro": "Ora�? mare în aglomera�?ia Budapestei, cunoscut pentru minaretul s�?u otoman.", "en": "Large city in the Budapest agglomeration, known for its Ottoman minaret."},
    descriptionAdvanced: {
      "de": "�?rd, südwestlich von Budapest an der Donau gelegen, bewahrt trotz seiner modernen Rolle als Vorstadt interessante historische Schätze. Das original erhaltene osmanische Minarett aus dem 17. Jahrhundert ist eines von nur drei noch existierenden in ganz Ungarn. Das Ungarische Geographische Museum dokumentiert die Leistungen ungarischer Weltreisender und Entdecker. Von den Hochufern der Stadt bieten sich weite Ausblicke über die Donaulandschaft. Die geschützten Lösswände entlang des Flusses beherbergen eine besondere Flora und Fauna.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["�?rd besitzt eines der drei originalen türkischen Minarette in Ungarn.", "Das Ungarische Geographische Museum ist landesweit einzigartig.", "Die Stadt ist eine der flächenmä�?ig grö�?ten Siedlungen Ungarns.", "Die Donau-Lösswände bei �?rd stehen unter Naturschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Minarett ist eines von nur drei erhaltenen in Ungarn.", "Wichtiges Verkehrszentrum."], "hu": ["A minaret egyike a Magyarországon fennmaradt háromnak.", "Fontos közlekedési csomópont."], "ro": ["Minaretul este unul dintre cele doar trei r�?mase în Ungaria.", "Centru de transport important."], "en": ["The minaret is one of only three remaining in Hungary.", "Important transport hub."]},
  },
  {
    id: "cegled",
    type: "city",
    parent: "HU-PE",
    coords: [19.8, 47.1833],
    name: {"de": "Ziegled", "hu": "Cegléd", "ro": "Cegléd", "en": "Cegléd"},
    description: {"de": "Stadt in der Tiefebene, bekannt für ihr Thermalbad und die Verbindung zu Lajos Kossuth.", "hu": "Alföldi város, termálfürd�?jér�?l és Kossuth Lajoshoz fűz�?d�? kapcsolatáról ismert.", "ro": "Ora�? în câmpie, cunoscut pentru baia sa termal�? �?i leg�?tura cu Lajos Kossuth.", "en": "City in the plains, known for its thermal bath and connection to Lajos Kossuth."},
    descriptionAdvanced: {
      "de": "Cegléd ist als 'Tor zur Tiefebene' und bedeutender Ort der ungarischen Geschichte bekannt. Die Stadt ist eng mit Lajos Kossuth verbunden, der hier 1848 seine berühmte Rekrutierungsrede hielt. Das Kossuth-Museum bewahrt das Erbe des Nationalhelden und dokumentiert die Revolutionsgeschichte. Die reformierte Kirche von Cegléd ist eine der grö�?ten protestantischen Gotteshäuser in Mitteleuropa. Das moderne Thermal- und Strandbad der Stadt nutzt wertvolles Heilwasser für therapeutische Zwecke.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Cegléd ist ein bedeutendes Zentrum des Kossuth-Kultes in Ungarn.", "Die reformierte Kirche der Stadt beeindruckt durch ihre monumentale Grö�?e.", "Die Stadt beherbergt ein einzigartiges internationales Trommelmuseum.", "Die Region ist berühmt für den Anbau hochwertiger Aprikosen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beherbergt das grö�?te Kossuth-Museum des Landes.", "Bekannt für seine reformierte Kirche."], "hu": ["Itt található az ország legnagyobb Kossuth-múzeuma.", "Református templomáról is ismert."], "ro": ["G�?zduie�?te cel mai mare muzeu Kossuth din �?ar�?.", "Cunoscut pentru biserica sa reformat�?."], "en": ["Home to the largest Kossuth museum in the country.", "Known for its Reformed church."]},
  },
  {
    id: "balatonlelle",
    type: "city",
    parent: "HU-SO",
    coords: [17.7, 46.7833],
    name: {"de": "Lelle", "hu": "Balatonlelle", "ro": "Balatonlelle", "en": "Balatonlelle"},
    description: {"de": "Beliebter Ferienort am Südufer des Plattensees mit Sandstrand.", "hu": "Népszerű üdül�?hely a Balaton déli partján, homokos stranddal.", "ro": "Sta�?iune popular�? pe malul sudic al Lacului Balaton, cu plaj�? de nisip.", "en": "Popular resort town on the southern shore of Lake Balaton with a sandy beach."},
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
    facts: {"de": ["Bekannt für seine Weinproduktion.", "Veranstaltet im Sommer viele Festivals."], "hu": ["Bortermelésér�?l ismert.", "Nyáron számos fesztiválnak ad otthont."], "ro": ["Cunoscut pentru produc�?ia de vin.", "G�?zduie�?te multe festivaluri în timpul verii."], "en": ["Known for its wine production.", "Hosts many festivals during the summer."]},
  },
  {
    id: "fonyod",
    type: "city",
    parent: "HU-SO",
    coords: [17.55, 46.75],
    name: {"de": "Fonyód", "hu": "Fonyód", "ro": "Fonyód", "en": "Fonyód"},
    description: {"de": "Stadt am Südufer des Plattensees, bekannt für ihre Aussichtspunkte und den Hafen.", "hu": "Város a Balaton déli partján, kilátóiról és kiköt�?jér�?l ismert.", "ro": "Ora�? pe malul sudic al Lacului Balaton, cunoscut pentru punctele sale de belvedere �?i port.", "en": "City on the southern shore of Lake Balaton, known for its viewpoints and harbor."},
    descriptionAdvanced: {
      "de": "Fonyód liegt auf einer markanten Hügelkette am Südufer des Plattensees und bietet spektakuläre Ausblicke. Von den zwei vulkanischen Hügeln aus kann man fast den gesamten See bis zur Halbinsel Tihany überblicken. Die Stadt blickt auf eine lange Tradition als Kurort zurück, was die vielen historischen Villen bezeugen. Der Hafen von Fonyód ist ein wichtiger Knotenpunkt für die Schifffahrt zum Nordufer. Ein Anziehungspunkt ist auch der gro�?e Wochenmarkt, der Besucher aus der weiten Umgebung anlockt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Fonyód besitzt die längste Hafenmole am gesamten Plattensee.", "Der Wochenmarkt von Fonyód ist der grö�?te am Südufer des Sees.", "Die Stadt ist berühmt für ihre Aussichtstürme auf den vulkanischen Hügeln.", "Historische Villenviertel aus der Monarchiezeit prägen das Stadtbild."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bietet den schönsten Blick auf das Badacsony-Gebirge.", "Hat den längsten Pier am Plattensee."], "hu": ["Innen nyílik a legszebb kilátás a Badacsonyra.", "Itt található a Balaton leghosszabb mólója."], "ro": ["Ofer�? cea mai frumoas�? vedere asupra mun�?ilor Badacsony.", "Are cel mai lung debarcader de pe Lacul Balaton."], "en": ["Offers the most beautiful view of the Badacsony mountains.", "Has the longest pier on Lake Balaton."]},
  },
  {
    id: "kisvarda",
    type: "city",
    parent: "HU-SZ",
    coords: [22.0833, 48.2167],
    name: {"de": "Kleinwardein", "hu": "Kisvárda", "ro": "Kisvárda", "en": "Kisvárda"},
    description: {"de": "Stadt im Nordosten Ungarns, bekannt für ihre Burgruine und das Thermalbad.", "hu": "�?szakkelet-magyarországi város, várromjáról és termálfürd�?jér�?l ismert.", "ro": "Ora�? în nord-estul Ungariei, cunoscut pentru ruinele cet�?�?ii �?i baia termal�?.", "en": "City in northeastern Hungary, known for its castle ruins and thermal bath."},
    descriptionAdvanced: {
      "de": "Kisvárda im Nordosten Ungarns ist eine Stadt mit starker historischer Identität und lebendiger Kulturszene. Die spätgotische Burgruine dient heute als eindrucksvolle Kulisse für Freilichtspiele und Festivals. Besonders bekannt ist das jährliche Treffen der ungarischen Theater aus dem Ausland. Das Thermalbad 'Várfürd�?' bietet moderne Erholung mit Heilwasser aus über 1000 Metern Tiefe. Die Stadt war historisch ein bedeutendes Handelszentrum an der Grenze zu den Karpaten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Kisvárda war im Mittelalter eine strategisch wichtige Festung.", "Die Stadt beherbergt das Festival der ungarischen Theater jenseits der Grenzen.", "Das Thermalbad nutzt sehr hei�?es Heilwasser für medizinische Zwecke.", "Kisvárda ist ein wichtiges Bildungs- und Kulturzentrum der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Veranstaltet jährlich das Festival der ungarischen Theater.", "Wichtiges wirtschaftliches Zentrum der Region."], "hu": ["�?vente megrendezik a Magyar Színházak Fesztiválját.", "A régió fontos gazdasági központja."], "ro": ["G�?zduie�?te anual Festivalul Teatrelor Maghiare.", "Centru economic important al regiunii."], "en": ["Hosts the annual Festival of Hungarian Theaters.", "Important economic center of the region."]},
  },
  {
    id: "tiszadada",
    type: "city",
    parent: "HU-SZ",
    coords: [21.1167, 48.0333],
    name: {"de": "Tiszadada", "hu": "Tiszadada", "ro": "Tiszadada", "en": "Tiszadada"},
    description: {"de": "Dorf an der Thei�?, bekannt für das Schloss Andrássy.", "hu": "Tisza-parti falu, az Andrássy-kastélyról ismert.", "ro": "Sat pe râul Tisa, cunoscut pentru Castelul Andrássy.", "en": "Village on the Tisza river, known for the Andrássy Castle."},
    descriptionAdvanced: {
      "de": "Tiszadada ist ein idyllisches Dorf am Ufer der Thei�?, das durch seine unberührte Natur besticht. Der Ort liegt in einer weiten Flussschleife und bietet ideale Bedingungen für Ruhe und Entspannung. Das Schloss Patay mit seinem weitläufigen Park erinnert an die einstige Adelskultur der Region. Tiszadada war ein wichtiger Inspirationsort für den berühmten visionären Maler Tivadar Csontváry Kosztka. Die Auenwälder entlang der Thei�? sind ein Paradies für Angler und Naturbeobachter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszadada liegt an einem der schönsten Abschnitte der mittleren Thei�?.", "Der Maler Tivadar Csontváry Kosztka wirkte zeitweise in diesem Dorf.", "Das Schloss Patay ist ein bedeutendes Baudenkmal der Region.", "Die Gegend ist bekannt für ihre reiche Vogelwelt in den Flussauen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Malerische Lage am Fluss.", "Ort der Entspannung und Natur."], "hu": ["Fest�?i fekvés a folyó partján.", "A kikapcsolódás és a természet helye."], "ro": ["Loca�?ie pitoreasc�? pe malul râului.", "Loc de relaxare �?i natur�?."], "en": ["Picturesque location on the riverbank.", "Place of relaxation and nature."]},
  },
  {
    id: "dombovar",
    type: "city",
    parent: "HU-TO",
    coords: [18.1333, 46.3667],
    name: {"de": "Dombovar", "hu": "Dombóvár", "ro": "Dombóvár", "en": "Dombóvár"},
    description: {"de": "Stadt in Südtransdanubien, bekannt für das Gunaras-Heilbad.", "hu": "Dél-dunántúli város, a Gunaras gyógyfürd�?r�?l ismert.", "ro": "Ora�? în Transdanubia de Sud, cunoscut pentru baia curativ�? Gunaras.", "en": "City in Southern Transdanubia, known for the Gunaras medicinal bath."},
    descriptionAdvanced: {
      "de": "Dombóvár ist eine dynamische Stadt mit bedeutender Eisenbahngeschichte und modernen Heilkräften. Der Stadtteil Gunarasfürd�? ist ein staatlich anerkannter Heilkurort, dessen Wasser einen hohen Fluoridgehalt aufweist. Die Entwicklung der Stadt zum wichtigen Bahnknotenpunkt im 19. Jahrhundert prägte Architektur und Wirtschaft. Dombóvár ist zudem von einer waldreichen Hügellandschaft umgeben, die zu Wanderungen einlädt. Das Szigeter-Viertel beherbergt interessante Museen zur Lokalgeschichte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gunarasfürd�? in Dombóvár ist berühmt für sein fluoridhaltiges Heilwasser.", "Dombóvár ist ein zentraler Knotenpunkt der Bahnstrecke Budapest-Pécs.", "Die Stadt bewahrt wertvolle Sammlungen zur ungarischen Eisenbahngeschichte.", "In der Umgebung befinden sich die Ruinen der mittelalterlichen Burg Gólyavár."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Das Heilwasser ist reich an Fluorid."], "hu": ["Fontos vasúti csomópont.", "A gyógyvíz fluoridban gazdag."], "ro": ["Nod feroviar important.", "Apa curativ�? este bogat�? în fluor."], "en": ["Important railway junction.", "The medicinal water is rich in fluoride."]},
  },
  {
    id: "dunafoldvar",
    type: "city",
    parent: "HU-TO",
    coords: [18.9167, 46.8],
    name: {"de": "Donafeldwar", "hu": "Dunaföldvár", "ro": "Dunaföldvár", "en": "Dunaföldvár"},
    description: {"de": "Stadt an der Donau, bekannt für ihre Burg und die Brücke.", "hu": "Duna-parti város, váráról és hídjáról ismert.", "ro": "Ora�? pe Dun�?re, cunoscut pentru cetatea �?i podul s�?u.", "en": "City on the Danube, known for its castle and bridge."},
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
    facts: {"de": ["Die Burg bietet einen weiten Blick über die Donau.", "Bekannt für seine Thermalbäder."], "hu": ["A várból messzire ellátni a Duna felett.", "Termálfürd�?ir�?l is ismert."], "ro": ["Cetatea ofer�? o vedere larg�? asupra Dun�?rii.", "Cunoscut pentru b�?ile sale termale."], "en": ["The castle offers a wide view over the Danube.", "Known for its thermal baths."]},
  },
  {
    id: "buk",
    type: "city",
    parent: "HU-VA",
    coords: [16.75, 47.3833],
    name: {"de": "Bük", "hu": "Bük", "ro": "Bük", "en": "Bük"},
    description: {"de": "Einer der bekanntesten Kurorte Ungarns mit einem riesigen Thermalbad.", "hu": "Magyarország egyik legismertebb fürd�?városa hatalmas termálfürd�?vel.", "ro": "Una dintre cele mai cunoscute sta�?iuni balneare din Ungaria, cu o baie termal�? imens�?.", "en": "One of Hungary's best-known spa towns with a massive thermal bath."},
    descriptionAdvanced: {
      "de": "Bük im Westen Ungarns beherbergt mit Bükfürd�? eines der grö�?ten Heilbäder des Landes. Die Entdeckung der Quellen im Jahr 1957 verwandelte das Dorf in ein internationales Wellness-Zentrum. Das Heilwasser von Bük zeichnet sich durch einen extrem hohen Mineralstoffgehalt aus. Neben dem Badekomplex bietet der Ort einen Meisterschaftsgolfplatz und vielfältige Sportmöglichkeiten. Die ruhige, waldreiche Umgebung ist ideal für Radtouren und Spaziergänge.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Bükfürd�? besitzt das zweitgrö�?te Heil- und Erlebnisbad in Ungarn.", "Das Heilwasser von Bük hat einen au�?ergewöhnlich hohen Fluorid- und Jodgehalt.", "Die Stadt beherbergt einen der ersten und schönsten Golfplätze des Landes.", "Bük ist ein führendes Zentrum für Rehabilitation im Westen Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde bei �?lbohrungen entdeckt.", "Beliebt bei internationalen Gästen."], "hu": ["A termálvizet olajfúrás közben találták.", "Népszerű a nemzetközi vendégek körében."], "ro": ["Apa termal�? a fost descoperit�? în timpul forajelor petroliere.", "Popular printre oaspe�?ii interna�?ionali."], "en": ["The thermal water was discovered during oil drilling.", "Popular with international guests."]},
  },
  {
    id: "oriszentpeter",
    type: "city",
    parent: "HU-VA",
    coords: [16.4167, 46.8333],
    name: {"de": "Sankt Peter in der Wart", "hu": "Őriszentpéter", "ro": "Őriszentpéter", "en": "Őriszentpéter"},
    description: {"de": "Das Zentrum der Region Őrség, bekannt für seine traditionelle Architektur und Natur.", "hu": "Az Őrség központja, hagyományos építészetér�?l és természetér�?l ismert.", "ro": "Centrul regiunii Őrség, cunoscut pentru arhitectura tradi�?ional�? �?i natur�?.", "en": "The center of the Őrség region, known for its traditional architecture and nature."},
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
    facts: {"de": ["Besteht aus mehreren verstreuten Ortsteilen (Szer).", "Bekannt für Kürbiskernöl."], "hu": ["Több, szétszórt településrészb�?l (szer) áll.", "Híres a tökmagolajáról."], "ro": ["Format din mai multe c�?tune dispersate (szer).", "Faimos pentru uleiul de semin�?e de dovleac."], "en": ["Consists of several scattered settlements (szer).", "Famous for pumpkin seed oil."]},
  },
  {
    id: "papa",
    type: "city",
    parent: "HU-VE",
    coords: [17.4667, 47.3333],
    name: {"de": "Papa", "hu": "Pápa", "ro": "Pápa", "en": "Pápa"},
    description: {"de": "Historische Stadt mit barocker Architektur und einem berühmten Thermalbad.", "hu": "Történelmi város barokk építészettel és híres termálfürd�?vel.", "ro": "Ora�? istoric cu arhitectur�? baroc�? �?i o faimoas�? baie termal�?.", "en": "Historic city with Baroque architecture and a famous thermal bath."},
    descriptionAdvanced: {
      "de": "Pápa, die 'Stadt des Barock', ist ein bedeutendes religiöses und architektonisches Zentrum in Westungarn. Das prächtige Schloss Esterházy ist ein Meisterwerk des Barock und bietet Einblicke in das Leben des Hochadels. Die Stadt ist zudem als 'kalvinistisches Athen' bekannt und beherbergt ein seit 1531 bestehendes Kollegium. Das einzigartige Blaudruckmuseum dokumentiert die jahrhundertealte Tradition der Textilfärberei in der Region. Das moderne Várkertfürd�? bietet Heilung und Entspannung in historischer Parkumgebung.",
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
    facts: {"de": ["Sitz des Schlosses Esterházy.", "Wichtiges Zentrum der reformierten Kirche."], "hu": ["Az Esterházy-kastély székhelye.", "A református egyház fontos központja."], "ro": ["Sediul Castelului Esterházy.", "Centru important al bisericii reformate."], "en": ["Seat of the Esterházy Palace.", "Important center of the Reformed church."]},
  },
  {
    id: "badacsony",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.5, 46.8],
    name: {"de": "Badacsony", "hu": "Badacsony", "ro": "Badacsony", "en": "Badacsony"},
    description: {"de": "Vulkanberg am Plattensee, berühmt für seine Weine und Basaltformationen.", "hu": "Vulkanikus hegy a Balatonnál, borairól és bazaltorgonáiról híres.", "ro": "Munte vulcanic la Lacul Balaton, faimos pentru vinurile sale �?i forma�?iunile de bazalt.", "en": "Volcanic mountain at Lake Balaton, famous for its wines and basalt formations."},
    descriptionAdvanced: {
      "de": "Der Badacsony ist der markanteste Zeugenberg am Nordufer des Plattensees, berühmt für seine Sargform und Weinkultur. Die riesigen Basaltorgeln an seinen Flanken sind beeindruckende Naturdenkmäler vulkanischen Ursprungs. Die sonnigen Hänge bieten ideale Bedingungen für den Weinbau, insbesondere für die seltene Rebsorte Kéknyelű. Wanderwege führen zum Gipfel, von dem aus man ein atemberaubendes Panorama über den Balaton genie�?t. Badacsony vereint auf einzigartige Weise Naturgewalt, erstklassige Weine und landschaftliche �?sthetik.",
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
    facts: {"de": ["Bekannt für die Rebsorte 'Kéknyelű'.", "Bietet Wanderwege mit Panoramablick."], "hu": ["A 'Kéknyelű' sz�?l�?fajtáról ismert.", "Panorámás túraútvonalakat kínál."], "ro": ["Cunoscut pentru soiul de struguri 'Kéknyelű'.", "Ofer�? trasee de drume�?ie cu vedere panoramic�?."], "en": ["Known for the 'Kéknyelű' grape variety.", "Offers hiking trails with panoramic views."]},
  },
  {
    id: "heviz",
    type: "city",
    parent: "HU-ZA",
    coords: [17.1833, 46.7833],
    name: {"de": "Heiwis", "hu": "Hévíz", "ro": "Hévíz", "en": "Hévíz"},
    description: {"de": "Weltberühmter Kurort mit dem grö�?ten biologisch aktiven Thermalsee der Welt.", "hu": "Világhírű fürd�?város a világ legnagyobb biológiailag aktív termáltavával.", "ro": "Sta�?iune balnear�? renumit�? în întreaga lume, cu cel mai mare lac termal activ biologic din lume.", "en": "World-famous spa town with the largest biologically active thermal lake in the world."},
    descriptionAdvanced: {
      "de": "Hévíz beherbergt den grö�?ten natürlichen, biologisch aktiven Thermalsee der Welt und ist ein Weltruf genie�?ender Kurort. Das heilende Wasser erneuert sich innerhalb weniger Tage komplett und bietet ganzjährig Badetemperaturen. Die Wasseroberfläche ist charakteristisch mit roten Seerosen bedeckt, die zum Symbol der Stadt wurden. Die Hévízer Heilkur wird erfolgreich bei Erkrankungen des Bewegungsapparates und rheumatischen Leiden eingesetzt. Die elegante Stadt besticht durch gepflegte Parks, Promenaden und erstklassige Wellness-Hotels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Hévízer See ist der grö�?te natürliche Thermalsee weltweit.", "Das Wasser des Sees kühlt auch im tiefsten Winter nicht unter 24 Grad ab.", "Der heilende Schlamm vom Seeboden wird für medizinische Zwecke genutzt.", "Die indischen roten Seerosen wurden Ende des 19. Jahrhunderts hier angesiedelt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Wassertemperatur sinkt auch im Winter nicht unter 24°C.", "Bekannt für seine Schlammpackungen."], "hu": ["A víz h�?mérséklete télen sem süllyed 24°C alá.", "Híres az iszappakolásairól."], "ro": ["Temperatura apei nu scade sub 24°C nici iarna.", "Cunoscut pentru împachet�?rile cu n�?mol."], "en": ["The water temperature does not drop below 24°C even in winter.", "Known for its mud packs."]},
  },
  {
    id: "zalakaros",
    type: "city",
    parent: "HU-ZA",
    coords: [17.1167, 46.55],
    name: {"de": "Zalakaros", "hu": "Zalakaros", "ro": "Zalakaros", "en": "Zalakaros"},
    description: {"de": "Beliebte Kurstadt im Südwesten Ungarns mit einem modernen Erlebnisbad.", "hu": "Népszerű fürd�?város Délnyugat-Magyarországon, modern élményfürd�?vel.", "ro": "Ora�? balnear popular în sud-vestul Ungariei, cu o baie de aventur�? modern�?.", "en": "Popular spa town in southwestern Hungary with a modern adventure bath."},
    descriptionAdvanced: {
      "de": "Zalakaros ist einer der jüngsten und dynamischsten Badekurorte Ungarns im Südwesten des Landes. Die Entdeckung des fast 100 Grad hei�?en Thermalwassers im Jahr 1962 führte zur Gründung eines modernen Badezentrums. Das Wasser ist reich an Jod, Brom und Schwefel und besonders wirksam bei chronischen Beschwerden. Die Stadt ist als 'Gartenstadt' bekannt, geprägt von weiten Grünflächen und farbenfrohen Blumenbeeten. Die Nähe zum Naturschutzgebiet Klein-Balaton macht den Ort auch für Naturfreunde attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Zalakaros besitzt eine der hei�?esten Thermalwasserquellen in ganz Ungarn.", "Die Stadt wurde mehrfach als 'blühendste Stadt Ungarns' ausgezeichnet.", "Das Thermalbad verfügt über ein modernes Erlebnisreich für Familien und Kinder.", "Der Ort ist ein idealer Ausgangspunkt für Ausflüge zum Naturschutzgebiet Klein-Balaton."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde 1962 entdeckt.", "Eines der meistbesuchten Bäder Ungarns."], "hu": ["A termálvizet 1962-ben fedezték fel.", "Magyarország egyik leglátogatottabb fürd�?je."], "ro": ["Apa termal�? a fost descoperit�? în 1962.", "Una dintre cele mai vizitate b�?i din Ungaria."], "en": ["The thermal water was discovered in 1962.", "One of the most visited baths in Hungary."]},
    },
    {
    id: "balaton-to",
    type: "lake",
    parent: "HU-VE",
    coords: [17.88, 46.88],
    name: {"de": "Plattensee", "hu": "Balaton", "ro": "Lacul Balaton", "en": "Lake Balaton"},
    image: "/geo-images/hungary/balaton-to.webp",
    description: {"de": "Der Balaton ist der grö�?te See Mitteleuropas und das bedeutendste Urlaubsziel für Sommerurlauber in Ungarn.", "hu": "A Balaton Közép-Európa legnagyobb tava és a magyarországi nyári üdülések legnépszerűbb célpontja.", "ro": "Lacul Balaton este cel mai mare lac din Europa Central�? �?i cea mai important�? destina�?ie de vacan�?�? din Ungaria.", "en": "Lake Balaton is the largest lake in Central Europe and the most important holiday destination in Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Balaton, a 'magyar tenger', Közép-Európa legnagyobb édesvízi tava, és Magyarország legfontosabb turisztikai régiója. A tó 77 kilométer hosszan nyúlik el, északi partját vulkanikus hegyek és történelmi városok (Tihany, Balatonfüred), déli partját pedig sekély víz és pezsg�? üdül�?városok (Siófok, Balatonföldvár) jellemzik. A Balaton nemcsak a fürd�?zésr�?l szól: a környék borvidékei, a Balaton-felvidéki Nemzeti Park természeti kincsei és a számtalan vitorlásverseny (mint a Kékszalag) mind a tó vonzerejét növelik. A víz tiszta és nyáron kellemesen felmelegszik, ideális feltételeket biztosítva a családoknak. A Balaton minden évszakban más arcát mutatja, télen a befagyott tó és a korcsolyázás élménye vonzza a látogatókat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird aufgrund seiner Grö�?e oft als das 'Ungarische Meer' bezeichnet.", "Bekannt für sein flaches, im Sommer angenehm warmes Wasser."], "hu": ["Hatalmas mérete miatt gyakran a 'magyar tengernek' nevezik.", "Sekély, nyáron kellemesen felmeleged�? vizér�?l ismert szerte a világon."], "ro": ["Datorit�? dimensiunii sale mari, este adesea numit 'Marea Ungariei'.", "Cunoscut pentru apa sa pu�?in adânc�? �?i pl�?cut de cald�? în timpul verii."], "en": ["Often referred to as the 'Hungarian Sea' due to its large size.", "Known for its shallow water that warms up pleasantly in the summer."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Balaton felülete közel 600 négyzetkilométer, átlagos mélysége azonban csak 3-4 méter.",
        "A tó medre körülbelül 15-20 ezer évvel ezel�?tt alakult ki tektonikai mozgások következtében.",
        "A Balaton legmélyebb pontja a Tihanyi-kútnál található, körülbelül 11-12 méter.",
        "A tó körül kiépített Balatoni Bringakörút hossza több mint 200 kilométer.",
        "�?vente itt rendezik meg a Kékszalag nemzetközi vitorlásversenyt, Európa legnagyobb tókerül�? versenyét."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "tisza-folyo",
    type: "river",
    parent: "HU-CS",
    coords: [20.15, 46.25],
    name: {"de": "Thei�?", "hu": "Tisza", "ro": "Tisa", "en": "Tisza"},
    image: "/geo-images/hungary/tisza-folyo.webp",
    description: {"de": "Die Thei�? ist der zweitlängste Fluss Ungarns und prägt ma�?geblich die Landschaft der Gro�?en Tiefebene.", "hu": "A Tisza Magyarország második leghosszabb folyója, amely meghatározza az Alföld tájegységének képét.", "ro": "Tisa este al doilea cel mai lung râu din Ungaria �?i modeleaz�? peisajul Marii Câmpii Maghiare.", "en": "The Tisza is the second longest river in Hungary and significantly shapes the landscape of the Great Plain."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Tisza Magyarország második legnagyobb folyója, amelyet a magyar néplélek és költészet (különösen Pet�?fi Sándor) gyakran a 'legmagyarabb folyóként' emleget. A Tisza kanyargós útja során érinti az Alföld szinte minden fontosabb városát, s élete elválaszthatatlan a magyar mez�?gazdaságtól és kultúrától. A folyó híres a 'tiszavirágzásról', a kérészek násztáncáról, amely minden év júniusában látványos természeti jelenség. A Tisza partja mentén számtalan szabadstrand, horgászhely és vízitúra-útvonal található. A folyó fels�? szakasza gyors és tiszta, míg az alsóbb szakaszokon lassúvá és méltóságossá válik. A Tisza nemcsak vízi út, hanem egy különleges ökoszisztéma is, amely ártéri erd�?ivel és gazdag él�?világával a természetvédelem egyik legfontosabb színtere hazánkban.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Berühmt für die 'Thei�?blüte', das spektakuläre Massenschlüpfen von Eintagsfliegen.", "Ein wichtiges Gebiet für den Wassertourismus und den Fischfang im Land."], "hu": ["Híres a tiszavirágzásról, a kérészek látványos tömeges rajzásáról.", "Az ország egyik legfontosabb területe a vízitúrázás és a horgászat számára."], "ro": ["Faimos pentru 'înflorirea Tisei', roirea spectaculoas�? a efemeridelor.", "O zon�? important�? pentru turismul nautic �?i pescuitul din �?ar�?."], "en": ["Famous for the 'Tisza blooming', a spectacular mass swarming of mayflies.", "An important area for water tourism and fishing in the country."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Tisza teljes hossza 962 kilométer, ebb�?l közel 600 kilométer esik Magyarország területére.",
        "A tiszavirágzás egy egyedülálló jelenség, amikor kérészek milliói rajzanak a víz felett néhány napig.",
        "A folyót a 19. században Széchenyi István kezdeményezésére szabályozták, jelent�?sen lerövidítve az útját.",
        "A Tisza-tó Magyarország legnagyobb mesterséges tava, amely a Tisza szabályozása során jött létre.",
        "A Tisza mentén található a Gemenci erd�? egy része, amely az ország legvadregényesebb tájai közé tartozik."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "duna-folyo",
    type: "river",
    parent: "HU-BU",
    coords: [19.04, 47.50],
    name: {"de": "Donau", "hu": "Duna", "ro": "Dun�?rea", "en": "Danube"},
    image: "/geo-images/hungary/duna-folyo.webp",
    description: {"de": "Die Donau ist die wichtigste Wasserstra�?e Ungarns und verbindet das Land mit dem Schwarzen Meer.", "hu": "A Duna Magyarország legfontosabb vízi útja, amely összeköti az országot a Fekete-tengerrel.", "ro": "Dun�?rea este cea mai important�? cale navigabil�? a Ungariei, conectând �?ara cu Marea Neagr�?.", "en": "The Danube is the most important waterway in Hungary, connecting the country with the Black Sea."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Duna Európa második leghosszabb folyója és Magyarország legfontosabb vízi útja, amely észak-déli irányban szeli ketté az országot. A folyó mentén épült fel a f�?város, Budapest, amelynek panorámája a Dunával együtt a világörökség része. A Duna magyarországi szakasza rendkívül változatos: a Dunakanyar szűk völgyét�?l a Kisalföld rónaságáig és a déli ártéri erd�?kig számos tájegységet érint. A folyó nemcsak a gazdaság és a közlekedés alapja, hanem a turizmusé is: szállodahajók, vízitúrázók és horgászok ezrei élvezik a vizét. A Duna menti gátak és sétányok a városi kikapcsolódás legfontosabb színterei. Történelmi szempontból a Duna mindig is összeköt�? kapocs volt Európa nemzetei között, s ma is fontos stratégiai és környezetvédelmi tengely.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Flie�?t direkt durch das Herz der ungarischen Hauptstadt Budapest.", "Dient als natürliche Grenze zwischen mehreren europäischen Staaten."], "hu": ["Közvetlenül a magyar f�?város, Budapest szívén folyik keresztül.", "Természetes határként szolgál több európai állam között."], "ro": ["Curge direct prin inima capitalei maghiare, Budapesta.", "Serve�?te ca grani�?�? natural�? între mai multe state europene."], "en": ["Flows directly through the heart of the Hungarian capital, Budapest.", "Serves as a natural border between several European states."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Duna Magyarországon 417 kilométer hosszan folyik keresztül.",
        "A folyó a Fekete-erd�?ben ered és a Fekete-tengerbe torkollik, 10 országot érintve.",
        "Budapestnél a Duna átlagos szélessége 400-500 méter, mélysége pedig 3-10 méter között mozog.",
        "A Duna mentén fekszik a Dunakanyar, ahol a folyó éles kanyart vesz a Visegrádi-hegység és a Börzsöny között.",
        "A Duna-Dráva Nemzeti Park �?rzi a folyó menti legértékesebb vizes él�?helyeket és ártéri erd�?ket."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "kekes-teto",
    type: "mountain",
    parent: "HU-HE",
    coords: [20.0108, 47.8728],
    name: {"de": "Kékes", "hu": "Kékes-tet�?", "ro": "Kékes", "en": "Kékes"},
    image: "/geo-images/hungary/kekes-teto.webp",
    description: {"de": "Mit 1014 Metern ist der Kékes der höchste Gipfel Ungarns und ein beliebtes Ziel für Wanderer.", "hu": "A 1014 méter magas Kékes-tet�? Magyarország legmagasabb pontja és közkedvelt túracélpont.", "ro": "Cu o în�?l�?ime de 1014 metri, Kékes este cel mai înalt vârf din Ungaria �?i o destina�?ie popular�?.", "en": "At 1014 meters, Kékes is the highest peak in Hungary and a popular destination for hikers."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Kékes-tet�? Magyarország legmagasabb pontja, a Mátra-hegység és az ország szimbóluma, amely 1014 méterrel magasodik a tengerszint fölé. A csúcs tetején álló tévétorony kilátója és az ott található jellegzetes nemzeti színű k�? az utazók kötelez�? megállója. A Kékes nemcsak földrajzi rekord, hanem népszerű gyógyhely is: tiszta, pormentes leveg�?je és különleges klímája kiválóan alkalmas légz�?szervi megbetegedések kezelésére. Télen a Kékes az ország legfontosabb síközpontjává válik, ahol Magyarország leghosszabb lesiklópályája várja a téli sportok kedvel�?it. Az év többi szakaszában a sűrű bükkerd�?k és a kiépített túraútvonalak vonzzák a természetjárókat, akik a csúcsról lenyűgöz�? panorámát élvezhetnek az Alföldre és a Tátra vonulataira.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der markante Fernsehturm auf dem Gipfel dient auch als Aussichtsplattform.", "Ein beliebtes Skigebiet im Winter mit den längsten Pisten des Landes."], "hu": ["A csúcson álló tévétorony kilátóként is funkcionál a látogatók számára.", "Télen népszerű síterep, itt található az ország leghosszabb sípályája."], "ro": ["Turnul de televiziune de pe vârf serve�?te �?i ca platform�? de observa�?ie.", "O sta�?iune de schi popular�? iarna, cu cele mai lungi pârtii din �?ar�?."], "en": ["The prominent TV tower on the summit also serves as an observation deck.", "A popular ski resort in winter with the longest slopes in the country."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Kékes-tet�? magassága pontosan 1014 méter, amit a csúcson egy k�? jelöl.",
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
    id: "szalajka-volgy-poi",
    type: "landmark",
    parent: "HU-HE",
    coords: [20.4, 48.1],
    name: {"de": "Szalajka-Tal", "hu": "Szalajka-völgy", "ro": "Valea Szalajka", "en": "Szalajka Valley"},
    image: "/geo-images/hungary/szalajka-volgy.webp",
    description: {"de": "Das Szalajka-Tal ist ein idyllisches Ausflugsziel im Bükk-Gebirge, berühmt für seine Wasserfälle.", "hu": "A Szalajka-völgy idilli kirándulóhely a Bükkben, amely vízeséseir�?l és forrásairól híres.", "ro": "Valea Szalajka este o destina�?ie idilic�? în mun�?ii Bükk, faimoas�? pentru cascadele sale.", "en": "Szalajka Valley is an idyllic excursion spot in the Bükk Mountains, famous for its waterfalls."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Szalajka-völgy a Bükk-hegység egyik legszebb és leglátogatottabb természeti látványossága Szilvásvárad mellett. A völgy híres kristálytiszta patakjairól, pisztrángos tavairól és a különleges Fátyol-vízesésr�?l, ahol a víz 17 méter magas mésztufa-lépcs�?kön zúdul le. A látogatók gyalogosan vagy a népszerű erdei kisvasúttal fedezhetik fel a völgy kincseit, köztük a Szabadtéri Erdei Múzeumot és az Istállós-k�?i-barlangot, ahol �?semberi leleteket találtak. A völgy gasztronómiai különlegessége a frissen sült vagy füstölt pisztráng, amelyet helyben tenyésztenek. A Szalajka-völgy a természet, a történelem és a rekreáció tökéletes találkozóhelye, amely minden korosztály számára kínál felfedeznivalót.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der stufenförmige Schleierwasserfall ist eines der bekanntesten Naturwunder Ungarns.", "Eine Schmalspurbahn bringt Besucher tief in das malerische Tal hinein."], "hu": ["A lépcs�?zetes Fátyol-vízesés Magyarország egyik legismertebb természeti csodája.", "Erdei kisvasút szállítja a látogatókat mélyen a fest�?i völgy belsejébe."], "ro": ["Cascada Fátyol în trepte este una dintre cele mai cunoscute minuni naturale.", "O cale ferat�? îngust�? transport�? vizitatorii adânc în valea pitoreasc�?."], "en": ["The terraced Veil Waterfall is one of Hungary's best-known natural wonders.", "A narrow-gauge forest railway takes visitors deep into the scenic valley."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Fátyol-vízesés mésztufa gátjait a patak vizéb�?l kiváló mész alakította ki évezredek alatt.",
        "A völgy neve a 'szalajka' (szalmiákszesz) égetéséb�?l ered, ami egykor fontos ipari tevékenység volt itt.",
        "Szilvásvárad a világhírű lipicai ménes otthona, lovasstadionja nemzetközi versenyek színhelye.",
        "Az Istállós-k�?i-barlang a Bükk egyik legmagasabb pontján fekv�? �?semberbarlang.",
        "A völgyben közleked�? kisvasút Magyarország egyik legforgalmasabb erdei vasútvonala."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gemenci-erdo-poi",
    type: "forest",
    parent: "HU-TO",
    coords: [18.8, 46.2],
    name: {"de": "Gemencer Wald", "hu": "Gemenci erd�?", "ro": "P�?durea Gemenc", "en": "Gemenc Forest"},
    image: "/geo-images/hungary/gemenci-erdo.webp",
    description: {"de": "Der Gemencer Wald ist das grö�?te zusammenhängende Auwaldgebiet Mitteleuropas entlang der Donau.", "hu": "A Gemenci erd�? Közép-Európa legnagyobb összefügg�? ártéri erd�?területe a Duna mentén.", "ro": "P�?durea Gemenc este cea mai mare zon�? de lunc�? continu�? din Europa Central�?, de-a lungul Dun�?rii.", "en": "The Gemenc Forest is the largest continuous floodplain forest in Central Europe along the Danube."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Gemenci erd�? Európa legnagyobb összefügg�? ártéri erdeje, a Duna-Dráva Nemzeti Park ékköve Szekszárd és Baja között. Ez a vadregényes táj a folyó állandó áradásai és apadásai révén jött létre, különleges vizes él�?helyet biztosítva számtalan állat- és növényfajnak. Gemenc világszerte híres gímszarvas-állományáról, amelynek trófeái a világ legjobbjai közé tartoznak, valamint itt található a világ legsűrűbb fekete gólya populációja is. Az erd�?t legegyszerűbben a Gemenci Állami Erdei Vasúttal vagy vízi úton, kenuval lehet felfedezni. A sűrű nádasok, a holtágak nyugalma és az óriási fűzfák árnyéka a természet érintetlenségének érzését nyújtja minden látogatónak.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Berühmt für seinen Bestand an prachtvollen Gímszarvas-Hirschen und Wildschweinen.", "Die Region ist ein wichtiges Brutgebiet für geschützte Schwarzstörche."], "hu": ["Híres kapitális gímszarvas-állományáról és a területén él�? vaddisznókról.", "A vidék a védett fekete gólyák egyik legfontosabb fészkel�?helye az országban."], "ro": ["Faimoas�? pentru efectivul s�?u de cerbi comuni �?i porci mistre�?i.", "Regiunea este un loc important de cuib�?rit pentru barza neagr�? protejat�?."], "en": ["Famous for its population of magnificent red deer and wild boars.", "The region is an important nesting ground for protected black storks."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Gemenci erd�? területe közel 20 ezer hektár, és az ország legfontosabb vadrezervátuma.",
        "Itt él a legtöbb fekete gólya Magyarországon, évente mintegy 40-50 pár fészkel az ártéren.",
        "A Gemenci kisvasút 30 kilométer hosszan kanyarog az ártéri erd�? sűrűjében.",
        "Az erd�?ben található a 'Gemenc királya' nevű fa, amely egy hatalmas, több száz éves fekete nyár.",
        "Gemenc volt a helyszíne az 1971-es Vadászati Világkiállítás számos bemutatójának."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nemzeti-muzeum-poi",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.06, 47.49],
    name: {"de": "Ungarisches Nationalmuseum", "hu": "Magyar Nemzeti Múzeum", "ro": "Muzeul Na�?ional Maghiar", "en": "Hungarian National Museum"},
    image: "/geo-images/hungary/nemzeti-muzeum.webp",
    description: {"de": "Das Nationalmuseum bewahrt die wichtigsten Schätze der ungarischen Geschichte und Kultur auf.", "hu": "A Magyar Nemzeti Múzeum a magyar történelem és kultúra legfontosabb emlékeit �?rzi.", "ro": "Muzeul Na�?ional Maghiar p�?streaz�? cele mai importante comori ale istoriei �?i culturii maghiare.", "en": "The National Museum preserves the most important treasures of Hungarian history and culture."},
    
    descriptionAdvanced: {
      "de": "Das Ungarische Nationalmuseum in Budapest ist das bedeutendste Museum zur Geschichte des Landes und ein Symbol der ungarischen nationalen Identität. Das monumentale klassizistische Gebäude wurde zwischen 1837 und 1847 errichtet und spielte eine zentrale Rolle in der ungarischen Revolution von 1848, als hier die ersten Forderungen der Nation verlesen wurden. Die Ausstellungen des Museums führen Besucher durch die gesamte Geschichte Ungarns, von der Urzeit über die Landnahme und das goldene Mittelalter bis hin zur Neuzeit. Besonders beeindruckend sind der Krönungsmantel der ungarischen Könige und die reiche Sammlung archäologischer Schätze aus dem Karpatenbecken. Das Museum ist nicht nur ein Ort der Bewahrung, sondern auch ein Ort des Gedenkens und der nationalen Besinnung. Der umliegende Museumsgarten ist ein beliebter Treffpunkt im Herzen der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Gebäude spielte eine zentrale Rolle beim Ausbruch der Revolution am 15. März 1848.", "Beherbergt den wertvollen ungarischen Krönungsmantel aus dem 11. Jahrhundert."], "hu": ["Az épület központi szerepet játszott az 1848. március 15-i forradalom kirobbanásakor.", "Itt �?rzik az értékes, 11. századból származó magyar koronázási palástot."], "ro": ["Cl�?direa a jucat un rol central în izbucnirea revolu�?iei din 15 martie 1848.", "G�?zduie�?te pre�?ioasa mantie de încoronare maghiar�? din secolul al XI-lea."], "en": ["The building played a central role in the outbreak of the revolution on March 15, 1848.", "Houses the precious 11th-century Hungarian coronation mantle."]},
    
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
    parent: "HU-BU",
    coords: [19.11, 47.60],
    name: {"de": "Aquaworld Budapest", "hu": "Aquaworld Budapest", "ro": "Aquaworld Budapesta", "en": "Aquaworld Budapest"},
    image: "/geo-images/hungary/aquaworld-budapest.webp",
    description: {"de": "Aquaworld Budapest ist einer der grö�?ten überdachten Wasser-Themenparks in ganz Europa.", "hu": "Az Aquaworld Budapest Európa egyik legnagyobb fedett vízi élményparkja és szabadid�?központja.", "ro": "Aquaworld Budapesta este unul dintre cele mai mari parcuri tematice acvatice acoperite din Europa.", "en": "Aquaworld Budapest is one of the largest indoor water theme parks in all of Europe."},
    
    descriptionAdvanced: {
      "de": "Aquaworld Budapest ist einer der grö�?ten überdachten Wasserthemenparks Europas und bietet ein ganzjähriges Tropenerlebnis im Norden der ungarischen Hauptstadt. Der Park ist architektonisch beeindruckend durch seine riesige Kuppel mit einem Durchmesser von 72 Metern, die den zentralen Bereich überspannt. Das Herzstück des Komplexes ist eine detailgetreue Nachbildung des kambodschanischen Angkor Wat Tempels, der von Hängebrücken, Palmen und zahlreichen Pools umgeben ist. Mit 17 Innen- und Au�?enbecken sowie 11 spektakulären Rutschen bietet Aquaworld Unterhaltung für alle Altersklassen und Adrenalinjunkies. Neben dem Wasserspa�? verfügt der Komplex über eine gro�?zügige Saunawelt und ein Wellness-Zentrum für Entspannungssuchende. Es ist das ideale Ausflugsziel für Familien, die unabhängig vom Wetter einen Tag voller Abenteuer und Erholung erleben möchten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der beeindruckende Kuppelbau erinnert architektonisch an den Tempel von Angkor Wat.", "Bietet 17 verschiedene Rutschen und zahlreiche In- und Outdoorbecken für Familien."], "hu": ["A monumentális kupolás épület építészetileg az angkori templomvilágot idézi meg.", "17 különböz�? csúszda és számos kinti-benti medence várja a családokat."], "ro": ["Cl�?direa impresionant�? cu cupol�? aminte�?te de templul Angkor Wat.", "Ofer�? 17 tobogane diferite �?i numeroase bazine interioare �?i exterioare pentru familii."], "en": ["The impressive dome structure architecturally evokes the Angkor Wat temple complex.", "Offers 17 different slides and numerous indoor and outdoor pools for families."]},
    
    factsAdvanced: {
      "de": ["Aquaworld Budapest besitzt eine der grö�?ten freitragenden Kuppeln in Europa.", "Das Design des Innenraums wurde durch die Tempelanlage von Angkor Wat inspiriert.", "Der Park bietet insgesamt über 4000 Quadratmeter Wasserfläche für Sport und Spiel.", "Es gibt spezielle Surfbecken, in denen Besucher das Wellenreiten üben können."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "fovarosi-allatkert",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.07, 47.51],
    name: {"de": "Budapester Zoo", "hu": "F�?városi Állat- és Növénykert", "ro": "Gr�?dina Zoologic�? din Budapesta", "en": "Budapest Zoo"},
    image: "/geo-images/hungary/fovarosi-allatkert.webp",
    description: {"de": "Der Zoo im Herzen von Budapest ist einer der ältesten und artenreichsten Tiergärten der Welt.", "hu": "A Budapest szívében fekv�? állatkert a világ egyik legrégebbi és legszebb állatkertje.", "ro": "Gr�?dina zoologic�? din inima Budapestei este una dintre cele mai vechi din lume.", "en": "The zoo in the heart of Budapest is one of the oldest and most diverse zoos in the world."},
    
    descriptionAdvanced: {
      "de": "Der Hauptstädtische Tier- und Pflanzenpark von Budapest ist einer der ältesten und architektonisch schönsten Zoos der Welt. Er wurde bereits 1866 eröffnet und besticht durch seine einzigartigen historischen Gebäude im Jugendstil und orientalischer Architektur, wie das berühmte Elefantenhaus. Der Zoo beherbergt eine beeindruckende Vielfalt an Tieren aus allen Kontinenten sowie einen botanischen Garten mit seltenen Pflanzenarten. Besonders sehenswert ist das 'Holnemvolt Schloss', ein spezieller Bereich für Familien, der die Traditionen der ungarischen Jahrmärkte mit Tierbegegnungen verbindet. Das Ziel des Zoos ist nicht nur die Unterhaltung, sondern auch der Artenschutz und die Umweltbildung in einem historischen Ambiente. Ein Spaziergang durch den Tierpark im Stadtpark ist ein Muss für jeden Budapest-Besucher und bietet Erlebnisse für Gro�? und Klein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für seine architektonisch wertvollen Tierhäuser im Jugendstil und orientalischen Design.", "Zählt mit über einer Million Besuchern jährlich zu den beliebtesten Zielen des Landes."], "hu": ["Híres szecessziós és orientális stílusú, műemléki védettségű állatházairól.", "�?vente több mint egymillió látogatóval az ország egyik legnépszerűbb célpontja."], "ro": ["Cunoscut�? pentru casele de animale valoroase în stil Art Nouveau �?i design oriental.", "Cu peste un milion de vizitatori anual, este printre cele mai populare destina�?ii din �?ar�?."], "en": ["Known for its architecturally significant animal houses in Art Nouveau and Oriental designs.", "With over a million visitors annually, it is one of the most popular destinations in the country."]},
    
    factsAdvanced: {
      "de": ["Der Budapester Zoo ist einer der ältesten wissenschaftlichen Tiergärten der Welt.", "Das Elefantenhaus ist ein Meisterwerk des ungarischen Jugendstils mit Zsolnay-Keramiken.", "Der Zoo beherbergt das grö�?te Palmenhaus Mitteleuropas.", "Viele der historischen Tierhäuser stehen unter nationalem Denkmalschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vajdahunyad-vara-poi",
    type: "historical",
    parent: "HU-BU",
    coords: [19.08, 47.51],
    name: {"de": "Burg Vajdahunyad", "hu": "Vajdahunyad vára", "ro": "Castelul Vajdahunyad", "en": "Vajdahunyad Castle"},
    image: "/geo-images/hungary/vajdahunyad-vara.webp",
    description: {"de": "Die Burg Vajdahunyad im Stadtwäldchen vereint die bedeutendsten Baustile der ungarischen Geschichte.", "hu": "A városligeti Vajdahunyad vára a magyar történelem legfontosabb építészeti stílusait ötvözi.", "ro": "Castelul Vajdahunyad din Parcul Ora�?ului îmbin�? cele mai importante stiluri arhitecturale maghiare.", "en": "The Vajdahunyad Castle in the City Park combines the most significant architectural styles of Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Vajdahunyad vára a budapesti Városliget mesebeli építménye, amely az 1896-os millenniumi ünnepségekre épült azzal a céllal, hogy bemutassa a magyar építészet ezeréves fejl�?dését. Az Alpár Ignác által tervezett épületegyüttes különböz�? történelmi stílusokat ötvöz: látható rajta a román kori jáki templom kapuja, gótikus és reneszánsz palotaszárnyak, valamint barokk kupolák. Nevét a legismertebb részér�?l, az erdélyi Vajdahunyad várát mintázó homlokzatról kapta. A vár udvarán áll az Anonymous szobra, Budapest egyik legtitokzatosabb emlékműve. Az épületben ma a Magyar Mez�?gazdasági Múzeum működik, a vár körüli tó pedig nyáron csónakázásra, télen pedig korcsolyázásra csábítja a Városliget látogatóit.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde ursprünglich aus Holz für die Millenniumsfeier 1896 erbaut und später versteinert.", "Beherbergt heute das grö�?te landwirtschaftliche Museum in ganz Mitteleuropa."], "hu": ["Eredetileg fából épült az 1896-os millenniumi ünnepségre, kés�?bb építették fel tartós anyagból.", "Ma itt található Közép-Európa legnagyobb mez�?gazdasági múzeuma."], "ro": ["Construit ini�?ial din lemn pentru festivit�?�?ile mileniului din 1896 �?i ulterior din piatr�?.", "G�?zduie�?te ast�?zi cel mai mare muzeu al agriculturii din Europa Central�?."], "en": ["Originally built from wood for the 1896 Millennial Exhibition and later rebuilt in stone.", "Today it houses the largest agricultural museum in Central Europe."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vár eredetileg fából és kartonból készült az ünnepségekre, de annyira népszerű lett, hogy k�?b�?l újjáépítették.",
        "Az épületegyüttesen 21 különböz�? magyarországi történelmi épület részlete ismerhet�? fel.",
        "A várudvaron található Anonymous-szoborhoz az a legenda fűz�?dik, hogy aki megérinti az író tollát, tehetséges lesz.",
        "Vajdahunyad vára a világ egyik legnagyobb mez�?gazdasági szakmúzeumának ad otthont.",
        "A vár körüli Városligeti-tó télen Európa egyik legszebb szabadtéri műjégpályájává alakul."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "matyas-templom-poi",
    type: "historical",
    parent: "HU-BU",
    coords: [19.03, 47.50],
    name: {"de": "Matthiaskirche", "hu": "Mátyás-templom", "ro": "Biserica Mátyás", "en": "Matthias Church"},
    image: "/geo-images/hungary/matyas-templom.webp",
    description: {"de": "Die Matthiaskirche im Burgviertel ist eine der prachtvollsten und geschichtsträchtigsten Kirchen des Landes.", "hu": "A budai várnegyedben álló Mátyás-templom az ország egyik legszebb és leggazdagabb múltú temploma.", "ro": "Biserica Mátyás din cartierul cet�?�?ii este una dintre cele mai splendide �?i istorice biserici din �?ar�?.", "en": "The Matthias Church in the Castle District is one of the most magnificent and historic churches in the country."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Mátyás-templom, hivatalos nevén a Budavári Nagyboldogasszony-templom, a Budai Várnegyed és Budapest egyik legfontosabb történelmi és vallási szimbóluma. A 13. században alapított templom az évszázadok során a magyar királyok koronázási helyszínévé és esküv�?ik színterévé vált, nevét pedig a népszerű Mátyás királyról kapta, aki jelent�?sen b�?víttette az épületet. A török hódoltság alatt mecsetként használták, majd a 19. század végén Schulek Frigyes vezetésével nyerte el mai, lenyűgöz�? neogótikus formáját. A templom tet�?zetét díszít�? színes Zsolnay-cserepek és a bels�? terek gazdag festése egyedülálló látványt nyújt. Itt található a magyar királyi pár, III. Béla és Antiochiai Anna sírhelye is, s a templom ma is fontos egyházi és zenei események otthona.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Diente über Jahrhunderte als Krönungskirche der ungarischen Könige.", "Das farbenfrohe Dach aus Zsolnay-Ziegeln ist ein weithin bekanntes Markenzeichen."], "hu": ["�?vszázadokon keresztül a magyar királyok koronázási helyszíneként szolgált.", "A színes Zsolnay-cserepekb�?l álló tet�?zete a templom egyik legismertebb védjegye."], "ro": ["A servit timp de secole ca biseric�? de încoronare a regilor maghiari.", "Acoperi�?ul colorat din �?igl�? Zsolnay este o emblem�? cunoscut�? peste tot."], "en": ["Served as the coronation church for Hungarian kings for centuries.", "The colorful roof made of Zsolnay tiles is a widely recognized landmark."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt koronázták meg az utolsó két magyar királyt, Ferenc Józsefet és IV. Károlyt.",
        "A templom déli tornya, a Mátyás-torony 78 méter magas, és tetején a hollós címer látható.",
        "A tet�?zetet borító színes mázas cserepek a pécsi Zsolnay-gyárból származnak.",
        "A templom bels�? falfestéseit olyan híres művészek készítették, mint Lotz Károly és Székely Bertalan.",
        "A templomban ma is működik egy egyháztörténeti gyűjtemény, ahol a koronázási jelvények másolatai is láthatók."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "baradla-barlang",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.49, 48.47],
    name: {"de": "Baradla-Höhle", "hu": "Baradla-barlang", "ro": "Pe�?tera Baradla", "en": "Baradla Cave"},
    image: "/geo-images/hungary/baradla-barlang.webp",
    description: {"de": "Ein riesiges Tropfsteinhöhlensystem im Nationalpark Aggtelek.", "hu": "Hatalmas cseppk�?barlang-rendszer az Aggteleki Nemzeti Parkban.", "ro": "Un sistem uria�? de pe�?teri cu stalactite în Parcul Na�?ional Aggtelek.", "en": "A huge stalactite cave system in the Aggtelek National Park."},
    descriptionAdvanced: {
      "de": "Die Baradla-Höhle bei Aggtelek ist das grö�?te Tropfsteinhöhlensystem Ungarns und gehört zum UNESCO-Weltkulturerbe. Sie erstreckt sich über 25 Kilometer bis unter das Staatsgebiet der Slowakei und beeindruckt durch gigantische Hallen. In der 'Riesenhalle' können Besucher den höchsten Tropfstein des Landes bewundern, der über Jahrtausende gewachsen ist. Die au�?ergewöhnliche Akustik des 'Konzertsaals' macht klassische Konzerte in der Höhle zu einem mystischen Erlebnis. Die Höhle belegt, dass Menschen bereits in der Jungsteinzeit dieses unterirdische Labyrinth nutzten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Baradla-Höhle ist Teil eines grenzüberschreitenden UNESCO-Weltnaturerbes.", "Einige der Tropfsteinformationen sind schätzungsweise über 200.000 Jahre alt.", "Die Temperatur in der Höhle beträgt das ganze Jahr über konstant etwa 10 Grad.", "Der grö�?te Tropfstein der Höhle, die 'Sternwarte', ist über 19 Meter hoch."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Teil des UNESCO-Welterbes.", "Berühmt für beeindruckende Gesteinsformationen."], "hu": ["Az UNESCO világörökség része.", "Lenyűgöz�? k�?zetformációiról híres."], "ro": ["Parte a Patrimoniului Mondial UNESCO.", "Faimoas�? pentru forma�?iunile sale stâncoase impresionante."], "en": ["Part of the UNESCO World Heritage.", "Famous for its impressive rock formations."]}
  },
  {
    id: "hortobagyi-nemzeti-park",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.09, 47.58],
    name: {"de": "Nationalpark Hortobágy", "hu": "Hortobágyi Nemzeti Park", "ro": "Parcul Na�?ional Hortobágy", "en": "Hortobágy National Park"},
    image: "/geo-images/hungary/hortobagyi-nemzeti-park.webp",
    description: {"de": "Das grö�?te Naturschutzgebiet Ungarns und ein Symbol der Puszta.", "hu": "Magyarország legnagyobb természetvédelmi területe és a puszta szimbóluma.", "ro": "Cea mai mare rezerva�?ie natural�? din Ungaria �?i un simbol al pustei.", "en": "Hungary's largest nature reserve and a symbol of the puszta."},
    descriptionAdvanced: {
      "de": "Der Nationalpark Hortobágy repräsentiert die ursprüngliche Puszta-Landschaft und ist ein geschütztes UNESCO-Welterbe. Die unendliche Weite der Grassteppe wird durch charakteristische Ziehbrunnen und traditionelle Hirtenkultur geprägt. Der Park ist Lebensraum für seltene Tierrassen wie das graue Steppenrind, Zackelschafe und Nonius-Pferde. Spektakulär ist der herbstliche Kranichzug, wenn Zehntausende Vögel in den Feuchtgebieten rasten. Hortobágy zeigt eindrucksvoll die tiefen kulturellen Wurzeln Ungarns in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hortobágy ist die grö�?te zusammenhängende Naturgrassteppe in Europa.", "Der Nationalpark ist als Kulturlandschaft Teil des UNESCO-Weltkulturerbes.", "Das Gebiet beherbergt die längste Steinbrücke Ungarns, die Neunbögige Brücke.", "Im Herbst ist der Park einer der bedeutendsten Kranichrastplätze weltweit."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für die Neunbogige Brücke.", "Heimat vieler geschützter Vogelarten."], "hu": ["A Kilenclyukú hídról ismert.", "Számos védett madárfaj otthona."], "ro": ["Cunoscut pentru Podul cu nou�? arcuri.", "Casa multor specii de p�?s�?ri protejate."], "en": ["Known for the Nine-holed Bridge.", "Home to many protected bird species."]}
  },
  {
    id: "bukki-nemzeti-park",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.52, 48.05],
    name: {"de": "Nationalpark Bükk", "hu": "Bükki Nemzeti Park", "ro": "Parcul Na�?ional Bükk", "en": "Bükk National Park"},
    image: "/geo-images/hungary/bukki-nemzeti-park.webp",
    description: {"de": "Ein waldreiches Berggebiet mit Höhlen und malerischen Tälern.", "hu": "Erd�?kben gazdag hegyvidék barlangokkal és fest�?i völgyekkel.", "ro": "O zon�? montan�? împ�?durit�? cu pe�?teri �?i v�?i pitore�?ti.", "en": "A heavily forested mountainous area with caves and picturesque valleys."},
    descriptionAdvanced: {
      "de": "Der Nationalpark Bükk schützt eine spektakuläre Mittelgebirgslandschaft mit dichten Wäldern und bizarren Kalksteinfelsen. Das Bükk-Plateau ist eine einzigartige Karsthochfläche mit tiefen Dolinen und seltenen alpinen Pflanzenarten. �?ber 1000 Höhlen sind im Kalkstein des Gebirges bekannt, darunter wichtige prähistorische Fundstätten. Der Park beherbergt eine reiche Fauna, wie den Kaiseradler und die seltene ungarische Wildkatze. Mit seinen weiten Ausblicken von den wei�?en Felsen bietet der Nationalpark dramatische Naturerlebnisse.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark Bükk ist das waldreichste Naturschutzgebiet in Ungarn.", "Das Gebirge beherbergt das am höchsten gelegene Höhlensystem des Landes.", "Im Nationalpark befindet sich die höchste öffentliche Stra�?e Ungarns.", "Die Region ist bekannt für ihre Bestände an frei lebenden Mufflons."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beherbergt den wunderschönen Szalajka-Tal.", "Einer der ersten Nationalparks Ungarns."], "hu": ["Itt található a gyönyörű Szalajka-völgy.", "Magyarország egyik els�? nemzeti parkja."], "ro": ["G�?zduie�?te frumoasa Vale Szalajka.", "Unul dintre primele parcuri na�?ionale din Ungaria."], "en": ["Home to the beautiful Szalajka Valley.", "One of Hungary's first national parks."]}
  },
  {
    id: "ferto-to",
    type: "lake",
    parent: "HU-GS",
    coords: [16.73, 47.74],
    name: {"de": "Neusiedler See", "hu": "Fert�?-tó", "ro": "Lacul Neusiedl", "en": "Lake Neusiedl"},
    image: "/geo-images/hungary/ferto-to.webp",
    description: {"de": "Der westlichste Steppensee Europas, an der Grenze zu �?sterreich.", "hu": "Európa legnyugatibb sztyepptava az osztrák határon.", "ro": "Cel mai vestic lac de step�? din Europa, la grani�?a cu Austria.", "en": "The westernmost steppe lake in Europe, on the border with Austria."},
    descriptionAdvanced: {
      "de": "Der Neusiedler See (Fert�?-tó) ist der westlichste Steppensee Europas und ein grenzüberschreitendes UNESCO-Welterbe. Der riesige Schilfgürtel und das extrem flache Wasser bieten Lebensraum für Tausende von Wasservögeln. Die Kulturlandschaft um den See zeigt ein harmonisches Miteinander von Weinbau, Geschichte und unberührter Natur. Auf ungarischer Seite ist das prachtvolle Schloss Esterházy in Fert�?d das kulturelle Highlight. Der See ist ein Paradies für Radfahrer, Segler und Vogelbeobachter in einer einzigartigen Grenzlandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Neusiedler See ist der zweitgrö�?te Steppensee in Mitteleuropa.", "Der Schilfgürtel des Sees ist ein international bedeutendes Vogelschutzgebiet.", "An vielen Stellen ist der See kaum tiefer als einen halben Meter.", "Die gesamte Fert�?-Region gehört seit 2001 zum UNESCO-Weltkulturerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Einzigartige Flora und Fauna.", "UNESCO-Welterbestätte."], "hu": ["Egyedülálló növény- és állatvilág.", "UNESCO világörökségi helyszín."], "ro": ["Flor�? �?i faun�? unice.", "Sit al Patrimoniului Mondial UNESCO."], "en": ["Unique flora and fauna.", "UNESCO World Heritage site."]}
  },
  {
    id: "velencei-to",
    type: "lake",
    parent: "HU-FE",
    coords: [18.59, 47.20],
    name: {"de": "Velencer See", "hu": "Velencei-tó", "ro": "Lacul Velence", "en": "Lake Velence"},
    image: "/geo-images/hungary/velencei-to.webp",
    description: {"de": "Einer der wärmsten Seen in Europa, ideal für Erholung.", "hu": "Európa egyik legmelegebb tava, ideális a pihenésre.", "ro": "Unul dintre cele mai calde lacuri din Europa, ideal pentru relaxare.", "en": "One of the warmest lakes in Europe, ideal for recreation."},
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
    facts: {"de": ["Wird aufgrund der vielen Sonnenstunden 'See der Sonne' genannt.", "Beliebt bei Seglern und Surfern."], "hu": ["A magas napsütéses órák száma miatt a 'Napfény tavának' is hívják.", "Népszerű a vitorlázók és szörföz�?k körében."], "ro": ["Numit 'Lacul Soarelui' datorit�? num�?rului mare de ore de soare.", "Popular printre navigatori �?i surferi."], "en": ["Called the 'Lake of Sunshine' due to the high number of sunny hours.", "Popular among sailors and surfers."]}
  },
  {
    id: "borzsony",
    type: "mountain",
    parent: "HU-PE",
    coords: [18.91, 47.92],
    name: {"de": "Börzsöny", "hu": "Börzsöny", "ro": "Börzsöny", "en": "Börzsöny"},
    image: "/geo-images/hungary/borzsony.webp",
    description: {"de": "Ein vulkanisches Gebirge nördlich von Budapest mit dichten Wäldern.", "hu": "Vulkáni hegység Budapestt�?l északra sűrű erd�?kkel.", "ro": "Un munte vulcanic la nord de Budapesta cu p�?duri dense.", "en": "A volcanic mountain range north of Budapest with dense forests."},
    descriptionAdvanced: {
      "de": "Das Börzsöny-Gebirge im Norden Ungarns ist ein fast kreisrundes Vulkangebirge von wilder Schönheit. Es umschlie�?t eine der grö�?ten Calderas Europas und bietet dichte Wälder sowie tiefe Täler. Das Gebirge ist ein Paradies für Wanderer, die Einsamkeit und unberührte Natur suchen. Markante Gipfel wie der Csóványos bieten weite Ausblicke bis zur Hohen Tatra. Zahlreiche saubere Bergbäche und eine reiche Fauna prägen dieses wertvolle Naturschutzgebiet am Donauknie.",
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
    facts: {"de": ["Der höchste Gipfel ist der Csóványos.", "Bietet tolle Aussichten auf das Donauknie."], "hu": ["Legmagasabb csúcsa a Csóványos.", "Nagyszerű kilátást nyújt a Dunakanyarra."], "ro": ["Cel mai înalt vârf este Csóványos.", "Ofer�? vederi minunate asupra Cotului Dun�?rii."], "en": ["The highest peak is Csóványos.", "Offers great views of the Danube Bend."]}
  },
  {
    id: "villanyi-borvidek",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.45, 45.86],
    name: {"de": "Weinregion Villány", "hu": "Villányi borvidék", "ro": "Regiunea viticol�? Villány", "en": "Villány Wine Region"},
    image: "/geo-images/hungary/villanyi-borvidek.webp",
    description: {"de": "Eine der berühmtesten Rotweinregionen Ungarns im Süden.", "hu": "Magyarország egyik leghíresebb déli vörösborvidéke.", "ro": "Una dintre cele mai faimoase regiuni de vin ro�?u din Ungaria în sud.", "en": "One of the most famous red wine regions in Hungary in the south."},
    descriptionAdvanced: {
      "de": "Die Weinregion Villány im äu�?ersten Süden Ungarns gilt als die beste Rotweinregion des Landes. Das submediterrane Klima und die kalkhaltigen Böden bringen vollmundige Weine von Weltklasse hervor. Besonders der Villányi Franc hat die Region international bekannt gemacht. Die malerischen Kellergassen in Villány und Palkonya laden zu Verkostungen in historischem Ambiente ein. Villány war die erste Region Ungarns, die konsequenten Weintourismus und Herkunftsschutz etablierte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Villány ist die südlichste und sonnigste Weinregion Ungarns.", "Die Region ist berühmt für erstklassige Cabernet Franc und Merlot Weine.", "Die historische Kellergasse von Palkonya steht unter nationalem Denkmalschutz.", "In Villány wurde 1988 der erste Weinstra�?enverein Ungarns gegründet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Produziert erstklassige Cabernet Franc Weine.", "Verfügt über malerische Weinkellerreihen."], "hu": ["Kiváló min�?ségű Cabernet Franc borokat termel.", "Fest�?i pincesorokkal rendelkezik."], "ro": ["Produce vinuri Cabernet Franc de calitate superioar�?.", "Are �?iruri pitore�?ti de crame."], "en": ["Produces premium Cabernet Franc wines.", "Features picturesque rows of wine cellars."]}
  },
  {
    id: "egri-var",
    type: "historical",
    parent: "HU-HE",
    coords: [20.38, 47.90],
    name: {"de": "Burg Eger", "hu": "Egri vár", "ro": "Castelul Eger", "en": "Castle of Eger"},
    image: "/geo-images/hungary/egri-var.webp",
    description: {"de": "Eine historische Burg, die 1552 der türkischen Belagerung standhielt.", "hu": "Történelmi vár, amely 1552-ben ellenállt a török ostromnak.", "ro": "Un castel istoric care a rezistat asediului turcesc din 1552.", "en": "A historical castle that withstood the Turkish siege in 1552."},
    descriptionAdvanced: {
      "de": "Die Burg von Eger ist ein Symbol für heldenhaften Widerstand und nationalen Stolz in Ungarn. Im Jahr 1552 verteidigte eine kleine Garnison unter István Dobó die Festung erfolgreich gegen eine gewaltige osmanische �?bermacht. Die Burgmauern beherbergen heute umfangreiche Ausstellungen zum mittelalterlichen Leben und zur Belagerungsgeschichte. Besucher können die unterirdischen Kasematten und die Ruinen der einstigen Kathedrale erkunden. Von der Burg aus bietet sich ein herrlicher Blick über das barocke Stadtbild von Eger.",
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
    facts: {"de": ["Schauplatz von Gárdonyis Roman 'Sterne von Eger'.", "Ein wichtiges nationales Symbol."], "hu": ["Gárdonyi Géza 'Egri csillagok' című regényének helyszíne.", "Fontos nemzeti szimbólum."], "ro": ["Cadrul romanului lui Gárdonyi 'Stelele din Eger'.", "Un simbol na�?ional important."], "en": ["Setting of Gárdonyi's novel 'Eclipse of the Crescent Moon'.", "An important national symbol."]}
  },
  {
    id: "visegradi-fellegvar",
    type: "historical",
    parent: "HU-PE",
    coords: [18.98, 47.79],
    name: {"de": "Zitadelle Visegrád", "hu": "Visegrádi Fellegvár", "ro": "Cetatea Visegrád", "en": "Visegrád Citadel"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Eine mittelalterliche Festung mit atemberaubendem Blick auf das Donauknie.", "hu": "Középkori er�?dítmény, lenyűgöz�? kilátással a Dunakanyarra.", "ro": "O cetate medieval�? cu o vedere uluitoare asupra Cotului Dun�?rii.", "en": "A medieval fortress with a breathtaking view of the Danube Bend."},
    descriptionAdvanced: {
      "de": "Die Wolkenburg (Fellegvár) von Visegrád thront auf einem steilen Fels hoch über dem malerischen Donauknie. Die im 13. Jahrhundert errichtete Festung war über lange Zeit eine bevorzugte Residenz der ungarischen Könige. Sie diente zudem als sicherer Verwahrort für die ungarischen Krönungsinsignien. Das spektakuläre Panorama über die Donauschleife macht die Burg zu einem der meistfotografierten Orte Ungarns. In den Ausstellungsräumen wird die Geschichte der Jagd und des höfischen Lebens im Mittelalter lebendig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg beherbergte jahrhundertelang die heilige ungarische Stephanskrone.", "Visegrád war im 14. Jahrhundert der Ort des ersten 'Visegrád-Königstreffens'.", "Der Blick von der Oberburg gilt als das schönste Panorama an der Donau.", "Regelmä�?ige Mittelalter-Festivals locken Tausende Besucher auf den Burgberg."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wurde im 13. Jahrhundert erbaut.", "Bewahrte einst die Heilige Krone Ungarns auf."], "hu": ["A 13. században épült.", "Egykor itt �?rizték a Szent Koronát."], "ro": ["A fost construit�? în secolul al XIII-lea.", "A p�?strat odat�? Sfânta Coroan�? a Ungariei."], "en": ["Built in the 13th century.", "Once kept the Holy Crown of Hungary."]}
  },
  {
    id: "szigetvari-var",
    type: "historical",
    parent: "HU-BA",
    coords: [17.79, 46.05],
    name: {"de": "Burg Szigetvár", "hu": "Szigetvári vár", "ro": "Castelul Szigetvár", "en": "Castle of Szigetvár"},
    image: "/geo-images/hungary/szigetvari-var.webp",
    description: {"de": "Bekannt für die heroische Verteidigung durch Miklós Zrínyi im Jahr 1566.", "hu": "Zrínyi Miklós h�?sies, 1566-os várvédelmér�?l ismert.", "ro": "Cunoscut pentru ap�?rarea eroic�? condus�? de Miklós Zrínyi în 1566.", "en": "Known for the heroic defense by Miklós Zrínyi in 1566."},
    descriptionAdvanced: {
      "de": "Die Burg von Szigetvár ist untrennbar mit der heldenhaften Belagerung von 1566 verbunden. Unter der Führung von Nikolaus Zrinyi leisteten die Verteidiger erbitterten Widerstand gegen das Heer von Sultan Süleyman dem Prächtigen. Während der Belagerung verstarb der gealterte Sultan in seinem Zelt vor der Festung. Heute ist die Burg ein Ort des Gedenkens und beherbergt Ausstellungen über die ungarisch-türkischen Kriege. Eine ehemalige Moschee im Inneren erinnert an die Zeit der osmanischen Herrschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szigetvár wird aufgrund des Opfergangs oft als das 'ungarische Thermopylae' bezeichnet.", "Nikolaus Zrinyi wird als einer der grö�?ten Nationalhelden Ungarns verehrt.", "Sultan Süleyman starb hier am Vorabend des Falls der Festung.", "In der Nähe befindet sich der ungarisch-türkische Freundschaftspark."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Sultan Süleyman der Prächtige starb während der Belagerung.", "Ein Symbol des ungarischen Widerstands."], "hu": ["Nagy Szulejmán szultán az ostrom alatt hunyt el.", "A magyar ellenállás szimbóluma."], "ro": ["Sultanul Suleiman Magnificul a murit în timpul asediului.", "Un simbol al rezisten�?ei maghiare."], "en": ["Sultan Suleiman the Magnificent died during the siege.", "A symbol of Hungarian resistance."]}
  },
  {
    id: "sarvari-var",
    type: "historical",
    parent: "HU-VA",
    coords: [16.93, 47.25],
    name: {"de": "Burg Sárvár", "hu": "Sárvári vár", "ro": "Castelul Sárvár", "en": "Castle of Sárvár"},
    image: "/geo-images/hungary/sarvari-var.webp",
    description: {"de": "Die Burg Nádasdy ist ein Meisterwerk der Renaissance-Architektur.", "hu": "A Nádasdy-vár a reneszánsz építészet remekműve.", "ro": "Castelul Nádasdy este o capodoper�? a arhitecturii renascentiste.", "en": "Nádasdy Castle is a masterpiece of Renaissance architecture."},
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
    facts: {"de": ["Hier wurde das erste in Ungarn gedruckte Buch auf Ungarisch verlegt.", "Befindet sich im Stadtzentrum."], "hu": ["Itt nyomtatták az els�? magyar nyelvű könyvet Magyarországon.", "A városközpontban található."], "ro": ["Aici a fost tip�?rit�? prima carte în limba maghiar�? din Ungaria.", "Situat în centrul ora�?ului."], "en": ["The first Hungarian book printed in Hungary was published here.", "Located in the city center."]}
  },
  {
    id: "diosgyori-var",
    type: "historical",
    parent: "HU-BZ",
    coords: [20.69, 48.09],
    name: {"de": "Burg Diósgy�?r", "hu": "Diósgy�?ri vár", "ro": "Castelul Diósgy�?r", "en": "Castle of Diósgy�?r"},
    image: "/geo-images/hungary/diosgyori-var.webp",
    description: {"de": "Eine mittelalterliche Burg, die oft als die Burg der Königinnen bezeichnet wird.", "hu": "Középkori vár, amelyet gyakran a királynék váraként emlegetnek.", "ro": "Un castel medieval, adesea numit Castelul Reginelor.", "en": "A medieval castle, often referred to as the Queens' Castle."},
    descriptionAdvanced: {
      "de": "Die Burg Diósgy�?r in Miskolc war im Mittelalter traditionell der Witwensitz und die Lieblingsresidenz der ungarischen Königinnen. König Ludwig der Gro�?e baute die Festung im 14. Jahrhundert zu einem prachtvollen gotischen Palast aus. In den letzten Jahren wurde die Burg originalgetreu rekonstruiert und erstrahlt heute wieder in ihrem alten Glanz. Besonders beeindruckend ist die Ritterhalle, die einst eine der grö�?ten ihrer Art in Europa war. Historische Vorführungen und Ritterspiele lassen den Alltag an einem Königshof lebendig werden.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Diósgy�?r war über Jahrhunderte das traditionelle Morgengabe-Geschenk für Königinnen.", "In der Burg befindet sich eine der grö�?ten Wachsfigurenausstellungen des Landes.", "Die Ritterhalle war im Mittelalter ein Zentrum der europäischen Diplomatie.", "Das jährliche Burgfestival gehört zu den wichtigsten Kulturevents der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["War ein beliebtes Ziel von König Ludwig dem Gro�?en.", "Wurde kürzlich umfassend restauriert."], "hu": ["Nagy Lajos király kedvelt tartózkodási helye volt.", "Nemrégiben nagyszabású felújításon esett át."], "ro": ["A fost o destina�?ie popular�? pentru Regele Ludovic cel Mare.", "A fost restaurat recent pe scar�? larg�?."], "en": ["Was a popular destination for King Louis the Great.", "Has been extensively restored recently."]}
  },
  {
    id: "esztergomi-bazilika",
    type: "historical",
    parent: "HU-KE",
    coords: [18.73, 47.79],
    name: {"de": "Basilika von Esztergom", "hu": "Esztergomi Bazilika", "ro": "Bazilica din Esztergom", "en": "Esztergom Basilica"},
    image: "/geo-images/hungary/esztergomi-bazilika.webp",
    description: {"de": "Die grö�?te und höchste Kirche Ungarns mit monumentaler Architektur.", "hu": "Magyarország legnagyobb és legmagasabb temploma monumentális építészettel.", "ro": "Cea mai mare �?i cea mai înalt�? biseric�? din Ungaria, cu o arhitectur�? monumental�?.", "en": "Hungary's largest and tallest church with monumental architecture."},
    descriptionAdvanced: {
      "de": "Die Basilika von Esztergom ist das grö�?te Kirchenbauwerk Ungarns und das geistige Zentrum des Landes. Sie thront majestätisch auf dem Burgberg über der Donau und ist von weitem sichtbar. Das monumentale klassizistische Bauwerk beeindruckt durch seine gewaltige Kuppel und die prachtvolle Innenausstattung. In der Krypta ruhen bedeutende Kirchenfürsten, und die Schatzkammer bewahrt unschätzbare sakrale Kunstwerke auf. Von der Kuppelgalerie bietet sich ein atemberaubender Blick bis weit in die Slowakei hinein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Basilika ist die Kathedrale des ungarischen Primas und Erzbischofs.", "Das Altarbild ist das weltweit grö�?te Gemälde auf einer einzigen Leinwand.", "Die Bakócz-Kapelle im Inneren ist ein Juwel der ungarischen Renaissance.", "Die Orgel der Basilika gehört zu den klanggewaltigsten Instrumenten Europas."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der Hauptsitz der katholischen Kirche in Ungarn.", "Das Altarbild ist das grö�?te Gemälde auf einer einzigen Leinwand."], "hu": ["A magyar katolikus egyház központja.", "Oltárképe a világ legnagyobb egyetlen vászonra festett képe."], "ro": ["Sediul Bisericii Catolice din Ungaria.", "Imaginea altarului este cea mai mare pictur�? pe o singur�? pânz�?."], "en": ["The headquarters of the Catholic Church in Hungary.", "The altarpiece is the largest painting on a single canvas."]}
  },
  {
    id: "szentendrei-skanzen",
    type: "historical",
    parent: "HU-PE",
    coords: [19.04, 47.69],
    name: {"de": "Skanzen Szentendre", "hu": "Szentendrei Skanzen", "ro": "Skanzen Szentendre", "en": "Szentendre Skanzen"},
    image: "/geo-images/hungary/szentendrei-skanzen.webp",
    description: {"de": "Das grö�?te ungarische Freilichtmuseum, das ländliche Architektur zeigt.", "hu": "A legnagyobb magyar szabadtéri néprajzi múzeum, amely a vidéki építészetet mutatja be.", "ro": "Cel mai mare muzeu în aer liber maghiar, prezentând arhitectura rural�?.", "en": "The largest Hungarian open-air museum, showcasing rural architecture."},
    descriptionAdvanced: {
      "de": "Das Ungarische Freilichtmuseum (Skanzen) in Szentendre ist das bedeutendste Museum für Volksarchitektur im Land. Auf einem riesigen Areal werden originale Bauernhäuser und Kirchen aus allen Regionen Ungarns präsentiert. Besucher können hier den Alltag der Landbevölkerung aus drei Jahrhunderten hautnah miterleben. In den Werkstätten werden traditionelle Handwerke wie Brotbacken und Töpfern live vorgeführt. Eine historische Museumsbahn verbindet die verschiedenen Regionen des Parks und macht den Besuch für Familien attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Skanzen umfasst über 300 historische Gebäude in zehn regionalen Einheiten.", "In dem Museum werden zahlreiche bedrohte Handwerkstechniken bewahrt.", "Jährlich finden hier gro�?e Volksfeste zu Ostern und Pfingsten statt.", "Das Museum wurde für seine pädagogische Arbeit international ausgezeichnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Umfasst authentisch nachgebaute Dorfregionen.", "Organisiert traditionelle Feste und Programme."], "hu": ["Hitelesen újjáépített falusi tájegységeket mutat be.", "Hagyományos fesztiválokat és programokat szervez."], "ro": ["Prezint�? regiuni de sate reconstruite autentic.", "Organizeaz�? festivaluri �?i programe tradi�?ionale."], "en": ["Features authentically reconstructed village regions.", "Organizes traditional festivals and programs."]}
  },
  {
    id: "tihanyi-apatsag",
    type: "historical",
    parent: "HU-VE",
    coords: [17.88, 46.91],
    name: {"de": "Abtei Tihany", "hu": "Tihanyi Apátság", "ro": "Aba�?ia Tihany", "en": "Tihany Abbey"},
    image: "/geo-images/hungary/tihanyi-apatsag.webp",
    description: {"de": "Eine Benediktinerabtei auf der Tihany-Halbinsel mit einer tausendjährigen Geschichte.", "hu": "Bencés apátság a Tihanyi-félszigeten, ezeréves történelemmel.", "ro": "O aba�?ie benedictin�? pe Peninsula Tihany cu o istorie de o mie de ani.", "en": "A Benedictine abbey on the Tihany Peninsula with a thousand-year history."},
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
    facts: {"de": ["Die Gründungsurkunde enthält die ältesten ungarischen Wörter.", "Bietet einen herrlichen Blick über den Plattensee."], "hu": ["Alapítólevele tartalmazza a legrégebbi magyar szavakat.", "Csodálatos kilátást nyújt a Balatonra."], "ro": ["Carta de fondare con�?ine cele mai vechi cuvinte maghiare.", "Ofer�? o priveli�?te magnific�? asupra Lacului Balaton."], "en": ["Its founding charter contains the oldest Hungarian words.", "Offers a magnificent view over Lake Balaton."]}
  },
  {
    id: "pannonhalmi-foapatsag",
    type: "historical",
    parent: "HU-GS",
    coords: [17.76, 47.55],
    name: {"de": "Erzabtei Pannonhalma", "hu": "Pannonhalmi F�?apátság", "ro": "Arhiaba�?ia Pannonhalma", "en": "Pannonhalma Archabbey"},
    image: "/geo-images/hungary/pannonhalmi-foapatsag.webp",
    description: {"de": "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum auf dem Martinsberg.", "hu": "UNESCO világörökség és spirituális központ a Márton-hegyen.", "ro": "Un sit al Patrimoniului Mondial UNESCO �?i centru spiritual pe Dealul Sf. Martin.", "en": "A UNESCO World Heritage site and spiritual center on St. Martin's Hill."},
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
    facts: {"de": ["Wurde im Jahr 996 gegründet.", "Verfügt über eine beeindruckende Bibliothek mit alten Handschriften."], "hu": ["996-ban alapították.", "Lenyűgöz�? könyvtára van régi kéziratokkal."], "ro": ["A fost fondat�? în anul 996.", "Are o bibliotec�? impresionant�? cu manuscrise vechi."], "en": ["Founded in 996.", "Features an impressive library with ancient manuscripts."]}
  },
  {
    id: "holloko-ofalu",
    type: "historical",
    parent: "HU-NO",
    coords: [19.58, 47.99],
    name: {"de": "Altes Dorf Hollók�?", "hu": "Hollók�? �?falu", "ro": "Satul vechi Hollók�?", "en": "Hollók�? Old Village"},
    image: "/geo-images/hungary/holloko-ofalu.webp",
    description: {"de": "Ein intaktes Palóczen-Dorf und UNESCO-Weltkulturerbe.", "hu": "�?rintetlen palóc falu és UNESCO világörökségi helyszín.", "ro": "Un sat Palóc intact �?i un sit al Patrimoniului Mondial UNESCO.", "en": "An intact Palóc village and UNESCO World Heritage site."},
    descriptionAdvanced: {
      "de": "Das alte Dorf von Hollók�? ist ein lebendiges Freilichtmuseum im Norden Ungarns und gehört zum UNESCO-Weltkulturerbe. Es besteht aus 67 traditionellen Wohnhäusern, die nach einem Brand im ursprünglichen Stil der Palócen-Volksgruppe wiedererrichtet wurden. Die Bewohner pflegen noch heute aktiv ihre farbenfrohen Trachten und alten Handwerke, besonders an Festtagen. �?ber dem Dorf thront die Ruine der Burg Hollók�?, die einen weiten Blick über die sanften Hügel des Cserhát bietet. Ein Besuch in Hollók�? fühlt sich an wie eine Zeitreise in das ländliche Ungarn des 18. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Hollók�? war 1987 das erste Dorf weltweit, das zum UNESCO-Welterbe erklärt wurde.", "Die charakteristische Palóc-Architektur ist hier in ihrer reinsten Form erhalten.", "Die aufwendigen, handgestickten Trachten werden zu festlichen Anlässen stolz getragen.", "Die Burg wurde im 13. Jahrhundert zum Schutz gegen tatarische �?berfälle errichtet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bewahrt die Traditionen des 17. und 18. Jahrhunderts.", "Die Bewohner tragen an Festtagen Tracht."], "hu": ["A 17-18. századi hagyományokat �?rzi.", "A lakosok ünnepekkor népviseletet hordanak."], "ro": ["P�?streaz�? tradi�?iile din secolele XVII �?i XVIII.", "Locuitorii poart�? costume tradi�?ionale la festivaluri."], "en": ["Preserves the traditions of the 17th and 18th centuries.", "Residents wear traditional costumes on holidays."]}
  },
  {
    id: "szepmuveszeti-muzeum",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.07, 47.51],
    name: {"de": "Museum der Bildenden Künste", "hu": "Szépművészeti Múzeum", "ro": "Muzeul de Arte Frumoase", "en": "Museum of Fine Arts"},
    image: "/geo-images/hungary/szepmuveszeti-muzeum.webp",
    description: {"de": "Eines der bedeutendsten Museen in Budapest mit internationaler Kunst.", "hu": "Budapest egyik legjelent�?sebb múzeuma nemzetközi művészeti alkotásokkal.", "ro": "Unul dintre cele mai importante muzee din Budapesta cu art�? interna�?ional�?.", "en": "One of the most important museums in Budapest with international art."},
    descriptionAdvanced: {
      "de": "Das Museum der Bildenden Künste am Budapester Heldenplatz beherbergt die bedeutendste Kunstsammlung Ungarns. Das monumentale neoklassizistische Gebäude zeigt Meisterwerke von der Antike bis zum Ende des 18. Jahrhunderts. Besonders berühmt ist die Sammlung spanischer Meister, darunter Werke von El Greco, Velázquez und Goya, die als eine der besten au�?erhalb Spaniens gilt. Die ägyptische Abteilung und die Galerie alter Meister ziehen Kunstliebhaber aus aller Welt an. In den prachtvoll renovierten Sälen, wie dem romanischen Saal, begegnen sich europäische Kunstgeschichte und ungarische Museumstradition.",
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
    facts: {"de": ["Liegt am Heldenplatz.", "Besitzt eine gro�?e Sammlung spanischer Malerei."], "hu": ["A H�?sök terén található.", "Nagy spanyol festészeti gyűjteménnyel rendelkezik."], "ro": ["Situat în Pia�?a Eroilor.", "Are o mare colec�?ie de pictur�? spaniol�?."], "en": ["Located at Heroes' Square.", "Has a large collection of Spanish painting."]}
  },
  {
    id: "gellert-hegy",
    type: "mountain",
    parent: "HU-BU",
    coords: [19.04, 47.48],
    name: {"de": "Gellértberg", "hu": "Gellért-hegy", "ro": "Dealul Gellért", "en": "Gellért Hill"},
    image: "/geo-images/hungary/gellert-hegy.webp",
    description: {"de": "Ein prominenter Hügel in Budapest, der einen Panoramablick auf die Stadt bietet.", "hu": "Budapest kiemelked�? hegye, amely panorámás kilátást nyújt a városra.", "ro": "Un deal proeminent în Budapesta, oferind vedere panoramic�? asupra ora�?ului.", "en": "A prominent hill in Budapest offering panoramic views of the city."},
    descriptionAdvanced: {
      "de": "Der Gellértberg erhebt sich steil über der Donau im Herzen von Budapest und bietet den wohl berühmtesten Panoramablick über die Stadt. Auf seinem Gipfel thront die Zitadelle, eine ehemalige Festungsanlage, sowie die imposante Freiheitsstatue, ein Symbol der ungarischen Hauptstadt. Der Berg ist nach dem Heiligen Gellért benannt, der der Legende nach hier den Märtyrertod starb. Neben den Denkmälern beherbergt der Berg die einzigartige Felsenkirche und ist für seine Thermalquellen am Fu�?e des Hanges bekannt. Ein Spaziergang über die bewaldeten Wege des Gellértberges gehört zum Pflichtprogramm jedes Budapest-Besuchers.",
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
    facts: {"de": ["Hier steht die Freiheitsstatue.", "Die Zitadelle krönt den Gipfel."], "hu": ["Itt áll a Szabadság-szobor.", "A hegy tetejét a Citadella koronázza meg."], "ro": ["Aici se afl�? Statuia Libert�?�?ii.", "Cetatea încoroneaz�? vârful."], "en": ["The Liberty Statue stands here.", "The Citadel crowns the summit."]}
  },
  {
    id: "normafa",
    type: "landmark",
    parent: "HU-BU",
    coords: [18.96, 47.50],
    name: {"de": "Normafa", "hu": "Normafa", "ro": "Normafa", "en": "Normafa"},
    image: "/geo-images/hungary/normafa.webp",
    description: {"de": "Ein beliebtes Ausflugsziel in den Budaer Bergen, ideal zum Wandern.", "hu": "Népszerű kirándulóhely a Budai-hegységben, ideális túrázásra.", "ro": "O destina�?ie popular�? de excursie în Mun�?ii Buda, ideal�? pentru drume�?ii.", "en": "A popular excursion destination in the Buda Hills, ideal for hiking."},
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
    facts: {"de": ["Bietet im Winter Möglichkeiten zum Skifahren.", "Berühmt für seine Strudelspezialitäten."], "hu": ["Télen síelési lehet�?séget kínál.", "Híres a rétesér�?l."], "ro": ["Ofer�? oportunit�?�?i de schi iarna.", "Cunoscut pentru specialit�?�?ile sale de �?trudel."], "en": ["Offers skiing opportunities in winter.", "Famous for its strudel specialties."]}
  },
  {
    id: "magyar-allami-operahaz",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.05, 47.50],
    name: {"de": "Staatsoper", "hu": "Magyar Állami Operaház", "ro": "Opera de Stat", "en": "State Opera"},
    image: "/geo-images/hungary/magyar-allami-operahaz.webp",
    description: {"de": "Ein prachtvolles Neorenaissance-Gebäude auf der Andrássy-Stra�?e.", "hu": "Lenyűgöz�? neoreneszánsz épület az Andrássy úton.", "ro": "O cl�?dire magnific�? neo-renascentist�? pe Bulevardul Andrássy.", "en": "A magnificent Neo-Renaissance building on Andrássy Avenue."},
    descriptionAdvanced: {
      "de": "Die Ungarische Staatsoper an der Andrássy-Stra�?e ist ein architektonisches Juwel der Neorenaissance und eines der schönsten Opernhäuser weltweit. Entworfen von Miklós Ybl, wurde das Gebäude 1884 im Beisein von Kaiser Franz Joseph I. feierlich eröffnet. Das prachtvolle Innere besticht durch reich vergoldete Logen, Deckenfresken bedeutender ungarischer Maler und einen riesigen Kronleuchter. Die Akustik des Hauses gilt als eine der besten in Europa und zieht internationale Spitzenkünstler und ein begeistertes Publikum an. Ein Besuch einer Vorstellung oder eine Führung durch die glanzvollen Säle vermittelt den aristokratischen Glanz der Budapester Blütezeit.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Wiener Expertenkommission stufte die Akustik der Oper als drittbeste in Europa ein.", "Gustav Mahler wirkte hier mehrere Jahre als künstlerischer Direktor.", "Das Gebäude wurde im Jahr 2022 nach einer umfassenden Restaurierung wiedereröffnet.", "Die Oper besitzt den zweitgrö�?ten Vorhang in ganz Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Eröffnet im Jahr 1884.", "Berühmt für seine hervorragende Akustik."], "hu": ["1884-ben nyitotta meg kapuit.", "Kiváló akusztikájáról ismert."], "ro": ["Deschis�? în 1884.", "Faimoas�? pentru acustica sa excelent�?."], "en": ["Opened in 1884.", "Famous for its excellent acoustics."]}
  },
  {
    id: "csodak-palotaja",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.03, 47.53],
    name: {"de": "Palast der Wunder", "hu": "Csodák Palotája", "ro": "Palatul Minunilor", "en": "Center of Scientific Wonders"},
    image: "/geo-images/hungary/csodak-palotaja.webp",
    description: {"de": "Ein interaktives Wissenschaftszentrum, das spielerisch Wissen vermittelt.", "hu": "Interaktív tudományos központ, amely játékosan adja át az ismereteket.", "ro": "Un centru �?tiin�?ific interactiv care transmite cuno�?tin�?e în mod ludic.", "en": "An interactive science center that imparts knowledge playfully."},
    descriptionAdvanced: {
      "de": "Der Palast der Wunder (Csodák Palotája) in Budapest ist das erste interaktive wissenschaftliche Erlebniszentrum in Mittel- und Osteuropa. Auf einer riesigen Fläche bietet das Zentrum über 250 Spiele und Experimente, die physikalische und naturwissenschaftliche Gesetzmä�?igkeiten spielerisch vermitteln. Besucher aller Altersgruppen können hier Naturphänomene hautnah erleben, von der Optik über die Mechanik bis hin zur Weltraumforschung. Regelmä�?ige spektakuläre Wissenschaftsshows in den Laboren begeistern das Publikum mit Experimenten zum Mitmachen. Der Palast der Wunder ist der ideale Ort für Familien, um die Welt der Wissenschaft mit Spa�? und Staunen zu entdecken.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Csodák Palotája wurde 1995 als Pionierprojekt in Ungarn gegründet.", "Das Zentrum bietet Themenbereiche von der Nanotechnologie bis zum Magnetismus.", "Es ist eines der beliebtesten au�?erschulischen Bildungszentren in der ungarischen Hauptstadt.", "In den 5D- und 9D-Kinos können Besucher virtuelle Reisen durch die Wissenschaft erleben."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das erste seiner Art in Mitteleuropa.", "Bietet über 250 interaktive Spiele."], "hu": ["Az els�? ilyen jellegű intézmény Közép-Európában.", "Több mint 250 interaktív játékot kínál."], "ro": ["Primul de acest fel din Europa Central�?.", "Ofer�? peste 250 de jocuri interactive."], "en": ["The first of its kind in Central Europe.", "Offers over 250 interactive games."]}
  },
  {
    id: "boldogko-var-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.23, 48.34],
    name: {"de": "Burg Boldogk�?", "hu": "Boldogk�?i vár", "ro": "Cetatea Boldogk�?", "en": "Boldogk�? Castle"},
    image: "/geo-images/hungary/boldogko-var.webp",
    description: {"de": "Mittelalterliche Burg auf einem markanten Felsen im Zemplén-Gebirge.", "hu": "Középkori vár a Zempléni-hegység egyik meredek szikláján.", "ro": "Cetate medieval�? situat�? pe o stânc�? abrupt�? în mun�?ii Zemplén.", "en": "Medieval castle perched on a steep rock in the Zemplén Mountains."},
    descriptionAdvanced: {
      "de": "Die Burg Boldogk�? im Zemplén-Gebirge thront spektakulär auf einem schmalen, schiffartigen Felsrücken und ist eine der romantischsten Burgen Ungarns. Der markanteste Teil der Anlage ist die sogenannte 'Löwenkammer' auf dem Felssporn, von der aus man einen weiten Blick über das Hernád-Tal hat. Die im 13. Jahrhundert errichtete Festung beherbergt heute interessante Ausstellungen zur Militärgeschichte und eine einzigartige Zinnfigurensammlung. In den Sommermonaten finden in der Burg regelmä�?ig historische Ritterspiele und mittelalterliche Festmahle statt. Die ungewöhnliche Form der Burg und die unberührte Landschaft der Umgebung machen Boldogk�? zu einem Geheimtipp für Entdecker.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Boldogk�? steht auf einem vulkanischen Felsrücken im Zemplén-Gebirge.", "Der Name 'Boldogk�?' bedeutet übersetzt etwa 'Glücklicher Stein'.", "Die Burg beherbergt die grö�?te Zinnfigurensammlung Mitteleuropas.", "Ein markanter Holzsteg führt entlang des schmalen Felsgrates zur Aussichtsplattform."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für den hölzernen Wehrgang.", "Beherbergt eine gro�?e Zinnfigurenausstellung."], "hu": ["Híres a sziklán futó fapadlós gyilokjáróról.", "Itt található az ország egyik legnagyobb ólomkatona-kiállítása."], "ro": ["Cunoscut�? pentru galeria sa de lemn pe stânc�?.", "G�?zduie�?te o mare expozi�?ie de sold�?�?ei de plumb."], "en": ["Famous for its wooden walkway on the rock.", "Home to a large exhibition of tin soldiers."]}
  },
  {
    id: "fuzer-var-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.46, 48.54],
    name: {"de": "Burg Füzér", "hu": "Füzéri vár", "ro": "Cetatea Füzér", "en": "Füzér Castle"},
    image: "/geo-images/hungary/fuzer-var.webp",
    description: {"de": "Spektakulär restaurierte Höhenburg auf einem vulkanischen Gipfel.", "hu": "Látványosan felújított hegyi vár egy vulkáni kúpon.", "ro": "Cetate montan�? restaurat�? spectaculos pe un con vulcanic.", "en": "Spectacularly restored hilltop castle on a volcanic cone."},
    descriptionAdvanced: {
      "de": "Die Burg Füzér im äu�?ersten Norden Ungarns thront majestätisch auf einem steilen Vulkankegel und gilt als eine der spektakulärsten rekonstruierten Festungen des Landes. Die im 13. Jahrhundert gegründete Burg spielte eine wichtige Rolle in der ungarischen Geschichte und bewahrte nach der Schlacht von Mohács ein Jahr lang die ungarische Stephanskrone auf. In den letzten Jahren wurde die Oberburg mit ihrer prachtvollen gotischen Kapelle und dem Palastflügel aufwendig und detailgetreu wiederaufgebaut. Besucher können heute in originalgetreu eingerichteten Räumen in das Leben des 16. und 17. Jahrhunderts eintauchen. Die Lage im Zemplén-Gebirge bietet zudem fantastische Wandermöglichkeiten und unberührte Naturerlebnisse.",
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
    facts: {"de": ["Eine der ersten Steinburgen des Landes.", "Bewahrte einst die ungarische Heilige Krone."], "hu": ["Az ország egyik legkorábbi k�?vára.", "Egykor itt �?rizték a Szent Koronát."], "ro": ["Una dintre primele cet�?�?i de piatr�? din �?ar�?.", "Aici a fost p�?strat�? odat�? Sfânta Coroan�?."], "en": ["One of the country's earliest stone castles.", "The Holy Crown was once kept here."]}
  },
  {
    id: "sirok-var",
    type: "landmark",
    parent: "HU-HE",
    coords: [20.19, 47.93],
    name: {"de": "Burg Sirok", "hu": "Siroki vár", "ro": "Cetatea Sirok", "en": "Sirok Castle"},
    image: "/geo-images/hungary/sirok-var.webp",
    description: {"de": "Ungarns am besten erhaltene in den Fels gehauene Höhlenburg.", "hu": "Magyarország legjelent�?sebb barlang- és sziklavára a Mátra keleti részén.", "ro": "Cea mai bine conservat�? cetate s�?pat�? în stânc�? din Ungaria.", "en": "Hungary's best-preserved cave and rock castle in the Mátra."},
    descriptionAdvanced: {
      "de": "Die Burg von Sirok ist die am spektakulärsten gelegene Felsenburg im Mátra-Gebirge, teilweise direkt in den weichen Tuffstein gehauen. Die Ruinen thronen auf einem hohen Felsrücken und bieten ein Labyrinth aus unterirdischen Gängen, Hallen und Verteidigungsanlagen, die in den Stein gemei�?elt wurden. Besonders markant sind die bizarren Felsformationen in der Umgebung der Burg, die sogenannten 'Barát' und 'Apáca' (Mönch und Nonne), um die sich zahlreiche Legenden ranken. Ein gut ausgebauter Lehrpfad führt Besucher durch die Geschichte der Festung und zu den schönsten Aussichtspunkten über die bewaldeten Hänge der Mátra. Sirok ist ein Ort von wildromantischer Schönheit, der die Verbindung von Natur und mittelalterlicher Wehrarchitektur zeigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Gro�?e Teile der Burg Sirok wurden direkt aus dem vulkanischen Felsgestein gehauen.", "Die Burg war im 16. Jahrhundert ein wichtiger Vorposten gegen die osmanische Expansion.", "Unter der Burg erstreckt sich ein weitläufiges System aus künstlichen Felsenhöhlen.", "Von den Burgmauern aus kann man bis zum fernen Bükk-Gebirge blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Verfügt über ein weitläufiges Tunnelsystem.", "Bietet Panoramablick auf die Mátra."], "hu": ["Kiterjedt földalatti kazamata-rendszerrel bír.", "Pazar kilátást nyújt a Mátrára."], "ro": ["Are un sistem extins de tuneluri subterane.", "Ofer�? vedere panoramic�? asupra mun�?ilor Mátra."], "en": ["Features an extensive underground tunnel system.", "Offers panoramic views of the Mátra."]}
  },
  {
    id: "sumeg-var-b2",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.43, 46.98],
    name: {"de": "Burg Sümeg", "hu": "Sümegi vár", "ro": "Cetatea Sümeg", "en": "Sümeg Castle"},
    image: "/geo-images/hungary/sumeg-var.webp",
    description: {"de": "Imposante Festung, die über der Stadt Sümeg auf einem Hügel thront.", "hu": "Impozáns er�?dítmény, amely a Balaton-felvidék kapujában magasodik.", "ro": "Fort�?rea�?�? impun�?toare care domin�? ora�?ul Sümeg de pe un deal.", "en": "Imposing fortress towering over the town of Sümeg on a hill."},
    descriptionAdvanced: {
      "de": "Die Burg Sümeg thront majestätisch auf einem steilen Kalksteinfelsen über der gleichnamigen Stadt und gilt als eine der besterhaltenen Festungen Ungarns. Im 13. Jahrhundert nach dem Tatarensturm errichtet, diente sie über Jahrhunderte als wichtiger Verteidigungsposten. Besonders markant ist der mächtige Alte Turm und die weitläufigen Burgmauern, die die gesamte Bergkuppe umschlie�?en. Heute ist die Burg ein lebendiges Zentrum für mittelalterliche Kultur, bekannt für ihre spektakulären Ritterspiele und historischen Vorführungen. Von der Burg aus bietet sich ein herrlicher Blick über das Tapolcaer Becken bis hin zum Plattensee.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Sümeg ist eine der am besten erhaltenen mittelalterlichen Festungen des Landes.", "In der Burg werden regelmä�?ig historische Burgspiele und Ritterturniere veranstaltet.", "Die Anlage besitzt ein eigenes Waffenmuseum und eine Folterkammer.", "Vom Burgberg aus kann man bei gutem Wetter bis zum Plattensee blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Berühmt für historische Ritterspiele.", "Widerstand erfolgreich osmanischen Belagerungen."], "hu": ["Híres a látványos lovagi tornáiról.", "Sikeresen ellenállt a török ostromoknak."], "ro": ["Faimoas�? pentru jocurile cavalere�?ti istorice.", "A rezistat cu succes asediilor otomane."], "en": ["Famous for historical knight tournaments.", "Successfully resisted Ottoman sieges."]}
  },
  {
    id: "somlo-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.37, 47.15],
    name: {"de": "Burg Somló", "hu": "Somlói vár", "ro": "Cetatea Somló", "en": "Somló Castle"},
    image: "/geo-images/hungary/somlo-var.webp",
    description: {"de": "Malerische Burgruine auf dem vulkanischen Berg Somló.", "hu": "Regényes várrom a Somló vulkanikus tanúhegyének tetején.", "ro": "Ruine pitore�?ti ale cet�?�?ii pe muntele vulcanic Somló.", "en": "Picturesque castle ruins on the volcanic Somló mountain."},
    descriptionAdvanced: {
      "de": "Die Burgruine Somló liegt auf dem gleichnamigen Zeugenberg, der vor allem für seinen exzellenten Wei�?wein bekannt ist. Die im 14. Jahrhundert errichtete Festung schmiegt sich an die steilen Basaltwände des Berges und bietet ein faszinierendes Labyrinth aus Mauern und Türmen. Trotz ihres Ruinenzustands vermittelt die Anlage noch heute die strategische Bedeutung, die sie einst für den Schutz der Region hatte. Der Aufstieg zur Burg führt durch die berühmten Weinhänge von Somló, wo der 'Wein der Hochzeitsnächte' wächst. Von den Ruinen aus genie�?t man einen weiten Panoramablick über die ungarische Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Somló-Berg ist der kleinste Weinbauort Ungarns, aber weltberühmt für seine Qualität.", "Die Burg war einst im Besitz bedeutender ungarischer Adelsfamilien wie der Erd�?dys.", "Der Weg zur Burg führt an bizarren Basaltformationen vulkanischen Ursprungs vorbei.", "Die Ruine ist ein beliebtes Ziel für Wanderer und Weinliebhaber gleicherma�?en."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Umgeben von berühmten Weinbergen.", "Ein beliebtes Ziel für Wanderer."], "hu": ["Híres borvidék veszi körül.", "Kedvelt kirándulóhely a túrázók körében."], "ro": ["�?nconjurat�? de podgorii faimoase.", "O destina�?ie popular�? pentru drume�?i."], "en": ["Surrounded by famous vineyards.", "A popular destination for hikers."]}
  },
  {
    id: "nagyvazsony-kinizsi-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.69, 46.98],
    name: {"de": "Kinizsi-Burg", "hu": "Nagyvázsonyi Kinizsi-vár", "ro": "Cetatea Kinizsi", "en": "Kinizsi Castle"},
    image: "/geo-images/hungary/nagyvazsony-var.webp",
    description: {"de": "Historische Burg, die einst dem legendären Paul Kinizsi gehörte.", "hu": "A legendás verhetetlen hadvezér, Kinizsi Pál egykori vára.", "ro": "Cetate istoric�? care a apar�?inut legendarului Paul Kinizsi.", "en": "Historic castle once owned by the legendary Paul Kinizsi."},
    descriptionAdvanced: {
      "de": "Die Burg von Nagyvázsony, auch als Kinizsi-Burg bekannt, ist eng mit dem legendären Heerführer Paul Kinizsi verbunden. Paul Kinizsi, berühmt für seine unglaubliche Kraft und Tapferkeit in den Schlachten gegen die Osmanen, erhielt die Burg von König Matthias Corvinus als Geschenk. Der markante quadratische Wohnturm ist bis heute erhalten und beherbergt ein interessantes Burgmuseum. In den Sommermonaten werden im Burghof regelmä�?ig mittelalterliche Spiele veranstaltet, die an die Heldentaten Kinizsis erinnern. Nagyvázsony liegt am Fu�?e des Bakony-Gebirges und bewahrt eine ruhige, historische Atmosphäre.",
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
    facts: {"de": ["Besitzt einen markanten Wohnturm.", "Veranstaltet im Sommer Ritterspiele."], "hu": ["Jellegzetes, magas lakótoronnyal rendelkezik.", "Nyáron lovagi játékokat rendeznek a várudvaron."], "ro": ["Are un turn de locuin�?�? proeminent.", "G�?zduie�?te jocuri cavalere�?ti în timpul verii."], "en": ["Has a distinctive residential tower.", "Hosts knightly tournaments in the summer."]}
  },
  {
    id: "szerencs-var",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.20, 48.16],
    name: {"de": "Burg Szerencs", "hu": "Szerencsi vár", "ro": "Cetatea Szerencs", "en": "Szerencs Castle"},
    image: "/geo-images/hungary/szerencs-var.webp",
    description: {"de": "Renaissanceschloss im Herzen der Schokoladenstadt Szerencs.", "hu": "Reneszánsz várkastély a csokoládé városának szívében.", "ro": "Castel renascentist în inima ora�?ului ciocolatei, Szerencs.", "en": "Renaissance castle in the heart of the chocolate town, Szerencs."},
    descriptionAdvanced: {
      "de": "Die Burg Szerencs im Nordosten Ungarns ist ein bedeutendes Baudenkmal der Spätrenaissance und eng mit der Geschichte der Familie Rákóczi verknüpft. Die Stadt Szerencs gilt als das Tor zum Weinbaugebiet Hegyalja und war im 17. Jahrhundert ein wichtiger Schauplatz politischer Versammlungen. Die Burg wurde auf den Fundamenten eines Klosters errichtet und besticht heute durch ihre harmonische Architektur und den umliegenden See. Im Inneren befindet sich das Zemplén-Museum, das eine der grö�?ten Postkartensammlungen der Welt sowie Ausstellungen zur Schokoladenherstellung beherbergt. Die Burg strahlt eine vornehme Ruhe aus und ist ein kulturelles Zentrum der Region.",
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
    facts: {"de": ["Sitz des Zemplén-Museums.", "Verbunden mit dem Fürsten Bocskai."], "hu": ["A Zempléni Múzeumnak ad otthont.", "Bocskai István fejedelemmel fonódott össze a múltja."], "ro": ["Sediul Muzeului Zemplén.", "Legat�? de principele Bocskai."], "en": ["Home to the Zemplén Museum.", "Connected with Prince Bocskai."]}
  },
  {
    id: "koszeg-jurisics-var",
    type: "landmark",
    parent: "HU-VA",
    coords: [16.54, 47.39],
    name: {"de": "Jurisics-Burg", "hu": "K�?szegi Jurisics-vár", "ro": "Cetatea Jurisics", "en": "Jurisics Castle"},
    image: "/geo-images/hungary/koszeg-var.webp",
    description: {"de": "Geschichtsträchtige Burg, die 1532 den Vormarsch der Osmanen stoppte.", "hu": "Történelmi vár, mely 1532-ben megállította a török sereget.", "ro": "Cetate istoric�? ce a oprit avansul otomanilor în 1532.", "en": "Historic castle that stopped the Ottoman advance in 1532."},
    descriptionAdvanced: {
      "de": "Die Burg Jurisics in K�?szeg ist ein nationales Symbol für Tapferkeit und Ausdauer in Ungarn. Im Jahr 1532 hielt hier eine kleine Gruppe von Verteidigern unter dem Kommando von Nikolaus Jurisics einer gewaltigen osmanischen �?bermacht stand. Zu Ehren dieses Sieges läuten in K�?szeg bis heute täglich um 11 Uhr die Kirchenglocken. Die Burganlage selbst vereint Elemente der Gotik und der Renaissance und beherbergt heute das Jurisics-Burgmuseum. Besucher können die Wehrgänge, den Rittersaal und die historischen Ausstellungen erkunden, die die Geschichte der 'treuesten Stadt' lebendig werden lassen. K�?szeg bewahrt durch seine Burg und die Altstadt ein fast unversehrtes mittelalterliches Flair.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Belagerung von K�?szeg 1532 dauerte 25 Tage und verhinderte einen Angriff auf Wien.", "Das tägliche 11-Uhr-Läuten in K�?szeg erinnert an den Abzug der türkischen Truppen.", "In der Burg ist ein bedeutendes Archiv mit Dokumenten zur Regionalgeschichte untergebracht.", "Der Burghof dient im Sommer als stimmungsvolle Kulisse für Theateraufführungen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["In K�?szeg läuten die Glocken um 11 Uhr.", "Wahrzeichen der Grenzstadt K�?szeg."], "hu": ["K�?szegen 11 órakor is szólnak a harangok.", "A határmenti kisváros jelképe."], "ro": ["�?n K�?szeg clopotele bat �?i la ora 11.", "Simbolul ora�?ului de grani�?�? K�?szeg."], "en": ["Bells ring at 11 AM in K�?szeg.", "Symbol of the border town K�?szeg."]}
  },
  {
    id: "simontornya-var",
    type: "landmark",
    parent: "HU-TO",
    coords: [18.55, 46.75],
    name: {"de": "Burg Simontornya", "hu": "Simontornyai vár", "ro": "Cetatea Simontornya", "en": "Simontornya Castle"},
    image: "/geo-images/hungary/simontornya-var.webp",
    description: {"de": "Prächtiges Renaissanceschloss mit einer wechselvollen Geschichte.", "hu": "Pazar reneszánsz palotaszárnyakkal díszített alföldi vár.", "ro": "Castel renascentist splendid cu o istorie bogat�?.", "en": "Splendid Renaissance castle with a rich history."},
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
    facts: {"de": ["Einst eine wichtige Festung an der Sió.", "Besitzt schöne Terrakotta-Verzierungen."], "hu": ["Valaha a Sió menti védelmi vonal része volt.", "Gyönyörű reneszánsz faragványok díszítik."], "ro": ["Odat�? o fort�?rea�?�? important�? pe râul Sió.", "Are frumoase decora�?iuni din teracot�?."], "en": ["Once an important fortress along the Sió.", "Features beautiful terracotta decorations."]}
  },
  {
    id: "varpalota-thury-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.14, 47.20],
    name: {"de": "Thury-Burg", "hu": "Várpalotai Thury-vár", "ro": "Cetatea Thury", "en": "Thury Castle"},
    image: "/geo-images/hungary/varpalota-var.webp",
    description: {"de": "Mittelalterliche Festung im Zentrum von Várpalota.", "hu": "Középkori er�?dítmény Várpalota városának szívében.", "ro": "Fort�?rea�?�? medieval�? în centrul ora�?ului Várpalota.", "en": "Medieval fortress in the center of Várpalota."},
    descriptionAdvanced: {
      "de": "Die Burg Thury in Várpalota ist benannt nach ihrem berühmtesten Verteidiger, dem legendären Burgkapitän Georg Thury. Thury war bekannt für seine unzähligen siegreichen Zweikämpfe gegen türkische Krieger und seine Standhaftigkeit in den Grenzkriegen des 16. Jahrhunderts. Die Burg selbst ist eine mächtige quadratische Festung mit Ecktürmen, die im Laufe der Jahrhunderte mehrfach umgebaut wurde. Heute beherbergt die Burg das Ungarische Chemische Museum und eine Ausstellung zur Geschichte des ungarischen Handwerks. Die Burganlage bildet das Herz der Stadt Várpalota und erinnert an die Zeit, als sie ein wichtiger Vorposten im Kampf gegen die osmanische Expansion war. Regelmä�?ige Veranstaltungen halten das Andenken an Georg Thury und seine Epoche wach.",
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
    facts: {"de": ["Benannt nach Kapitän György Thury.", "Beherbergt ein Chemie-Museum."], "hu": ["Thury György várkapitány nevét viseli.", "Itt található a Vegyészeti Múzeum."], "ro": ["Numit�? dup�? c�?pitanul György Thury.", "G�?zduie�?te un muzeu al chimiei."], "en": ["Named after Captain György Thury.", "Houses a chemistry museum."]}
  },
  {
    id: "szelce-volgy",
    type: "landmark",
    parent: "HU-NO",
    coords: [19.06, 48.15],
    name: {"de": "Szelce-Tal", "hu": "Szelce-völgy", "ro": "Valea Szelce", "en": "Szelce Valley"},
    image: "/geo-images/hungary/szelce-volgy.webp",
    description: {"de": "Unberührtes Tal in Nordungarn mit dichter Waldlandschaft.", "hu": "�?rintetlen északi völgy dús erd�?kkel és friss leveg�?vel.", "ro": "Vale neatins�? în nordul Ungariei cu p�?duri dese.", "en": "Pristine valley in North Hungary with dense forest landscape."},
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
    facts: {"de": ["Einzigartige Gebirgsflora.", "Ideal für ruhige Naturwanderungen."], "hu": ["Különleges hegyi flórával rendelkezik.", "Tökéletes hely a csendes erdei túrákhoz."], "ro": ["Flor�? montan�? unic�?.", "Ideal�? pentru drume�?ii lini�?tite în natur�?."], "en": ["Unique mountain flora.", "Ideal for quiet nature hikes."]}
  },
  {
    id: "palvolgyi-barlang",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.016, 47.532],
    name: {"de": "Pálvölgyi-Höhle", "hu": "Pálvölgyi-barlang", "ro": "Pe�?tera Pálvölgyi", "en": "Pálvölgyi Cave"},
    image: "/geo-images/hungary/palvolgyi-barlang.webp",
    description: {"de": "Die längste Höhle in den Budaer Bergen mit tollen Formationen.", "hu": "A Budai-hegység leghosszabb, látványos cseppköves barlangja.", "ro": "Cea mai lung�? pe�?ter�? din mun�?ii Budapesta cu forma�?iuni superbe.", "en": "The longest cave in the Buda Hills with amazing formations."},
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
    facts: {"de": ["Bekannt für bizarre Tropfsteine.", "Konstante Temperatur von 11 Grad."], "hu": ["Különleges cseppk�?formációiról ismert.", "H�?mérséklete állandóan 11 fok."], "ro": ["Cunoscut�? pentru stalactite bizare.", "Temperatur�? constant�? de 11 grade."], "en": ["Known for bizarre dripstones.", "Constant temperature of 11 degrees."]}
  },
  {
    id: "mecsek-hegyseg",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.23, 46.10],
    name: {"de": "Mecsek-Gebirge", "hu": "Mecsek hegység", "ro": "Mun�?ii Mecsek", "en": "Mecsek Mountains"},
    image: "/geo-images/hungary/mecsek.webp",
    description: {"de": "Mittelgebirge im Süden mit mediterranem Flair und Höhlen.", "hu": "Déli középhegység mediterrán hangulattal és barlangokkal.", "ro": "Mun�?i de în�?l�?ime medie în sud cu aer mediteranean �?i pe�?teri.", "en": "Middle mountains in the south with Mediterranean flair and caves."},
    descriptionAdvanced: {
      "de": "Das Mecsek-Gebirge im Südwesten Ungarns ist eine facettenreiche Mittelgebirgslandschaft mit einem fast mediterranen Flair. Seine bewaldeten Hänge schützen die Stadt Pécs vor kalten Nordwinden und ermöglichen den Anbau von Feigen und edlen Reben. Das Gebirge beherbergt zahlreiche Naturschätze, darunter tiefe Täler wie das Meleg-mányi-völgy mit seinen Kalktuff-Wasserfällen und markante Gipfel wie den Zeng�?. Die Region ist zudem bekannt für ihre reichen Vorkommen an Heilkräutern und eine vielfältige Tierwelt, darunter seltene Orchideenarten. Zahlreiche Wanderwege, Aussichtstürme und idyllische Bergdörfer machen das Mecsek-Gebirge zu einem der beliebtesten Erholungsgebiete des Landes. Hier trifft mittelmitteleuropäische Waldnatur auf den Hauch des Südens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der höchste Gipfel des Mecsek ist der Zeng�? mit 682 Metern Höhe.", "Das Gebirge beherbergt die weltweit einzige Population der seltenen Banater Pfingstrose.", "Im Mecsek-Gebirge wurde jahrzehntelang ungarisches Uran und Steinkohle abgebaut.", "Die Region ist berühmt für das Thermalwasser von Harkány und den Wein von Villány."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Höchster Gipfel ist der Zeng�?.", "Reich an seltenen Pflanzenarten."], "hu": ["Legmagasabb csúcsa a Zeng�?.", "Ritka növényfajokban rendkívül gazdag."], "ro": ["Cel mai înalt vârf este Zeng�?.", "Boga�?i în specii de plante rare."], "en": ["Highest peak is Zeng�?.", "Rich in rare plant species."]}
  },
  {
    id: "balatonfelvideki-np",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.80, 46.90],
    name: {"de": "NP Balaton-Oberland", "hu": "Balaton-felvidéki Nemzeti Park", "ro": "PN Balatonul de Sus", "en": "Balaton Uplands NP"},
    image: "/geo-images/hungary/balaton-felvidek.webp",
    description: {"de": "Abwechslungsreiche Landschaft mit Vulkanbergen und Lavendel.", "hu": "Változatos táj tanúhegyekkel, barlangokkal és levendulával.", "ro": "Peisaj divers cu mun�?i vulcanici �?i lavand�?.", "en": "Diverse landscape with volcanic hills and lavender fields."},
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
    facts: {"de": ["Beinhaltet das Káli-Becken.", "Berühmt für Basaltorgeln."], "hu": ["Magában foglalja a Káli-medencét.", "Híres a bazaltorgonáiról."], "ro": ["Include bazinul Káli.", "Faimos pentru coloanele de bazalt."], "en": ["Includes the Káli Basin.", "Famous for basalt organs."]}
  },
  {
    id: "koros-maros-np",
    type: "landmark",
    parent: "HU-BE",
    coords: [21.00, 46.50],
    name: {"de": "NP Körös-Maros", "hu": "Körös-Maros Nemzeti Park", "ro": "PN Cri�?-Mure�?", "en": "Körös-Maros NP"},
    image: "/geo-images/hungary/koros-maros-np.webp",
    description: {"de": "Schutzgebiet in der südlichen Tiefebene mit reicher Vogelwelt.", "hu": "Dél-alföldi védett terület gazdag madárvilággal és rétekkel.", "ro": "Zon�? protejat�? în câmpia de sud cu o avifaun�? bogat�?.", "en": "Protected area in the southern plains with rich birdlife."},
    descriptionAdvanced: {
      "de": "Der Nationalpark Körös-Maros im Südosten Ungarns schützt die ursprünglichen Steppen- und Flusslandschaften zwischen den Flüssen Körös und Maros. Die Region ist geprägt von weiten Graslandschaften (Puszta), geheimnisvollen Lösswänden und idyllischen Altarmen, die eine reiche Vogelwelt beherbergen. Besonders bekannt ist der Park für seinen Schutz der Gro�?trappe, eines der schwersten flugfähigen Vögel der Welt, der hier eines seiner wichtigsten Rückzugsgebiete in Europa hat. Die unberührten Flussauen bieten zudem Lebensraum für seltene Pflanzen wie die ungarische Distel und zahlreiche Fischarten. In Zentren wie Szarvas können Besucher die Natur des Parks hautnah erleben und in die Hirtenkultur der Tiefebene eintauchen. Körös-Maros ist ein Ort von stiller Schönheit, der die Weite des ungarischen Horizonts widerspiegelt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark bewahrt bedeutende Reste der ursprünglichen Lösssteppe der Tiefebene.", "In der Region Dévaványa befindet sich die grö�?te Gro�?trappen-Population Mitteleuropas.", "Der Maros-Fluss ist bekannt für seinen Reichtum an seltenen Flussmuscheln.", "Der Park umfasst 13 verschiedene Teilgebiete mit einer Gesamtfläche von über 50.000 Hektar."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtig für den Trappenschutz.", "Beheimatet alte Haustierrassen."], "hu": ["Fontos túzokvédelmi terület.", "Ősi magyar állatfajták otthona."], "ro": ["Important pentru protec�?ia dropiilor.", "G�?zduie�?te rase vechi de animale."], "en": ["Important for great bustard protection.", "Home to ancient domestic animal breeds."]}
  },
  {
    id: "oreg-bakony",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.75, 47.25],
    name: {"de": "Alter Bakony", "hu": "�?reg-Bakony", "ro": "Bakonyul Vechi", "en": "Old Bakony"},
    image: "/geo-images/hungary/bakony.webp",
    description: {"de": "Der Kern des Bakony-Waldes mit dichten Buchenwäldern.", "hu": "A Bakony-erd�? szíve dús bükkösökkel és szurdokokkal.", "ro": "Nucleul p�?durii Bakony cu f�?gete dese.", "en": "The core of the Bakony forest with dense beech woods."},
    descriptionAdvanced: {
      "de": "Der Alte Bakony (�?reg-Bakony) ist der zentrale und wildeste Teil des Bakony-Gebirges, geprägt von dichten Buchenwäldern und tiefen Kalksteinschluchten. Hier befindet sich mit dem K�?ris-hegy der höchste Gipfel des Gebirges, von dem aus man an klaren Tagen bis zum Plattensee blicken kann. Die Region ist berühmt für ihre geheimnisvolle Atmosphäre, die einst den berühmten Bakonyer 'Betyáren' (Outlaws) als Versteck diente. Zahlreiche Karstquellen und Höhlen machen den Bakony zu einem spannenden Ziel für Entdecker und Naturfreunde. Historische Orte wie die Abtei Zirc oder die Burg Csesznek liegen eingebettet in diese waldreiche Mittelgebirgslandschaft. Der �?reg-Bakony ist das grüne Herz Transdanubiens und bietet unberührte Naturerlebnisse fernab der Zivilisation.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der K�?ris-hegy ist mit 706 Metern die höchste Erhebung im Bakony-Gebirge.", "Der Name des Gebirges leitet sich wahrscheinlich vom slawischen Wort für 'Buchenwald' ab.", "In den Höhlen des Bakony versteckten sich im 19. Jahrhundert legendäre Gesetzlose.", "Die Cuha-Schlucht ist eines der malerischsten Durchbruchstäler im Alten Bakony."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Höchster Punkt ist der K�?ris-hegy.", "Bekannt für seine Karstphänomene."], "hu": ["Legmagasabb pontja a K�?ris-hegy.", "Karsztjelenségeir�?l nevezetes."], "ro": ["Cel mai înalt punct este K�?ris-hegy.", "Cunoscut pentru fenomenele carstice."], "en": ["Highest point is K�?ris-hegy.", "Known for its karst phenomena."]}
  },
  {
    id: "zempleni-hegyseg-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.40, 48.40],
    name: {"de": "Zemplén-Gebirge", "hu": "Zempléni-hegység", "ro": "Mun�?ii Zemplén", "en": "Zemplén Mountains"},
    image: "/geo-images/hungary/zemplen.webp",
    description: {"de": "Abgelegenes, vulkanisches Gebirge mit vielen Burgen im Nordosten.", "hu": "�?szakkeleti vulkanikus hegység vadregényes várakkal.", "ro": "Mun�?i vulcanici izola�?i cu multe cet�?�?i în nord-est.", "en": "Remote volcanic mountains with many castles in the northeast."},
    descriptionAdvanced: {
      "de": "Das Zemplén-Gebirge, im äu�?ersten Nordosten Ungarns an der slowakischen Grenze gelegen, ist ein waldreiches Vulkangebirge von herber Schönheit. Es beherbergt einige der einsamsten und unberührtesten Waldgebiete des Landes, in denen heute wieder Wölfe und Luchse heimisch sind. Die Region ist geprägt von markanten Bergkuppen, tiefen Tälern und zahlreichen Burgruinen wie Füzér oder Regéc, die stolz über den Wäldern thronen. Das Zemplén-Gebirge ist zudem untrennbar mit dem Tokajer Weinbau verbunden, da die vulkanischen Böden an seinen Südhängen die Basis für den berühmten Aszú-Wein bilden. Die ruhigen Bergdörfer bewahren oft noch ihre alten Traditionen und bieten eine authentische Gastfreundschaft. Für Wanderer und Naturliebhaber ist das Zemplén-Gebirge ein wahres Paradies am Rande der Karpaten.",
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
    facts: {"de": ["Heimat der Tokajer Weine.", "Reich an vulkanischen Formen."], "hu": ["A tokaji borok hazája.", "Vulkanikus formákban gazdag."], "ro": ["Casa vinurilor de Tokaj.", "Boga�?i în forme vulcanice."], "en": ["Home of the Tokaj wines.", "Rich in volcanic formations."]}
  },
  {
    id: "pilis-hegyseg",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.90, 47.70],
    name: {"de": "Pilis-Gebirge", "hu": "Pilis hegység", "ro": "Mun�?ii Pilis", "en": "Pilis Mountains"},
    image: "/geo-images/hungary/pilis.webp",
    description: {"de": "Wanderparadies nahe Budapest mit Aussichtstürmen und Höhlen.", "hu": "Budapest közeli hegység kilátókkal és barlangokkal.", "ro": "Paradis al drume�?iilor lâng�? Budapesta cu turnuri �?i pe�?teri.", "en": "Hiking paradise near Budapest with lookout towers and caves."},
    descriptionAdvanced: {
      "de": "Das Pilis-Gebirge, nordwestlich von Budapest am Donauknie gelegen, ist eine sagenumwobene Berglandschaft von gro�?er historischer und spiritueller Bedeutung. Für die frühen Ungarn galt der Pilis als heiliges Zentrum, und heute ziehen Orte wie der Rám-Abgrund (Rám-szakadék) Tausende von Wanderern an. Das Gebirge ist geprägt von steilen Kalksteinwänden, bizarren Felsformationen und zahlreichen Höhlen, die fantastische Ausblicke über die Donauschleife bieten. Der höchste Punkt, der Pilis-Gipfel, bietet ein Panorama von au�?ergewöhnlicher Weite bis hin zu den Gipfeln der Matra. Historisch bedeutsam ist das Zisterzienserkloster in Pilisszentkereszt, das einst ein geistiges Zentrum des ungarischen Mittelalters war. Die Nähe zur Hauptstadt macht den Pilis zum beliebtesten Naherholungsgebiet der Budapester.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Pilis-Gebirge ist Teil des Biosphärenreservats der UNESCO.", "Der Rám-Abgrund ist eine der spektakulärsten und abenteuerlichsten Wanderrouten Ungarns.", "Im Mittelalter war das Gebirge das Jagdrevier der ungarischen Könige.", "Die Dobogók�?-Hochebene gilt als einer der wichtigsten energetischen Orte des Landes."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Höchster Gipfel ist der Pilis-tet�?.", "Gilt als spirituelles Zentrum."], "hu": ["Legmagasabb pontja a Pilis-tet�?.", "Sokan spirituális központnak tartják."], "ro": ["Cel mai înalt vârf este Pilis-tet�?.", "Considerat un centru spiritual."], "en": ["Highest peak is Pilis-tet�?.", "Considered a spiritual center."]}
  },
  {
    id: "vertes-hegyseg",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.40, 47.40],
    name: {"de": "Vértes-Gebirge", "hu": "Vértes hegység", "ro": "Mun�?ii Vértes", "en": "Vértes Mountains"},
    image: "/geo-images/hungary/vertes.webp",
    description: {"de": "Karstgebirge in Transdanubien mit Ruinen und Wäldern.", "hu": "Dunántúli karszthegység várromokkal és sűrű erd�?kkel.", "ro": "Mun�?i carstici în Transdanubia cu ruine �?i p�?duri.", "en": "Karst mountains in Transdanubia with ruins and forests."},
    descriptionAdvanced: {
      "de": "Das Vértes-Gebirge ist eine idyllische Mittelgebirgsregion zwischen dem Bakony und dem Gerecse, bekannt für seine unberührten Wälder und geschichtsträchtigen Ruinen. Der Name 'Vértes' (Panzer) erinnert an eine Legende aus dem 11. Jahrhundert, wonach die fliehenden deutschen Ritter ihre Panzerharnische im Gebirge wegwarfen. Die Landschaft ist geprägt von sanften Hügeln, tiefen Karstschluchten und bizarren Dolomitfelsen, die eine reiche Flora und Fauna beherbergen. Ein besonderes Highlight ist die Burgruine Vitányvár, die versteckt im dichten Wald liegt und einen Hauch von Romantik versprüht. Das Gebirge bietet zudem hervorragende Möglichkeiten für Radtouren und ruhige Waldspaziergänge in einer fast unberührten Natur. Die Dörfer am Rande des Vértes, wie Csákvár, bewahren stolz ihr handwerkliches und adeliges Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Vértes-Gebirge ist eines der am dünnsten besiedelten Gebiete Ungarns.", "Die Region beherbergt seltene submediterrane Pflanzenarten auf den Dolomitfelsen.", "In der Nähe von Gánt befindet sich eine ehemalige Bauxit-Mine mit einer marsähnlichen Landschaft.", "Die Burg Csókak�? am Südrand bietet einen weiten Blick über das Móri-Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtige historische Schlachtfelder.", "Reich an Bauxitvorkommen."], "hu": ["Fontos történelmi csaták helyszíne.", "Bauxitlel�?helyekben gazdag."], "ro": ["Locul unor importante b�?t�?lii istorice.", "Boga�?i în z�?c�?minte de bauxit�?."], "en": ["Site of important historical battles.", "Rich in bauxite deposits."]}
  },
  {
    id: "gemenc-arter-b2",
    type: "landmark",
    parent: "HU-TO",
    coords: [18.85, 46.25],
    name: {"de": "Gemenc-Aue", "hu": "Gemenc ártér", "ro": "Lunca Gemenc", "en": "Gemenc Floodplain"},
    image: "/geo-images/hungary/gemenc.webp",
    description: {"de": "Einzigartiger Auenwald an der Donau mit reicher Fauna.", "hu": "Egyedülálló ártéri erd�? a Duna mentén, vadon él�? állatokkal.", "ro": "P�?dure de lunc�? unic�? pe Dun�?re cu o faun�? bogat�?.", "en": "Unique floodplain forest along the Danube with rich fauna."},
    descriptionAdvanced: {
      "de": "Die Gemencer Aue im Süden Ungarns ist das grö�?te zusammenhängende �?berschwemmungsgebiet Mitteleuropas und eine Wildnis von Weltrang. Regelmä�?ig von den Fluten der Donau überspült, hat sich hier eine archaische Landschaft aus dichten Auwäldern, Totarmen und Schilfgebieten erhalten. Gemenc ist berühmt für seine riesigen Bestände an Rothirschen und Schwarzwild, die hier optimale Lebensbedingungen finden. Auch seltene Vögel wie der Schwarzstorch und der Seeadler brüten in den ungestörten Wipfeln der jahrhundertealten Bäume. Eine Fahrt mit der Gemencer Waldbahn bietet Besuchern die einzigartige Möglichkeit, tief in dieses Labyrinth aus Wasser und Wald einzudringen. Gemenc ist ein lebendiges Beispiel für die Kraft der Natur und ein unersetzlicher Teil des ungarischen �?kosystems.",
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
    facts: {"de": ["Berühmt für Rotwildbestände.", "Besitzt eine Schmalspurbahn."], "hu": ["Híres a gímszarvas állományáról.", "Erdei kisvasút fut át rajta."], "ro": ["Faimoas�? pentru cerbi.", "Are o cale ferat�? cu ecartament îngust."], "en": ["Famous for its red deer population.", "Has a narrow-gauge forest railway."]}
  },
  {
    id: "debreceni-allatkert",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.638, 47.552],
    name: {"de": "Zoo Debrecen", "hu": "Debreceni Állatkert", "ro": "Gr�?dina Zoologic�? Debre�?in", "en": "Debrecen Zoo"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {"de": "Ungarns erster Zoo au�?erhalb von Budapest, im Gro�?en Wald gelegen.", "hu": "Az ország els�? vidéki állatkertje a Nagyerd�? szívében.", "ro": "Prima gr�?din�? zoologic�? provincial�? din Ungaria, în P�?durea Mare.", "en": "Hungary's first provincial zoo, located in the Great Forest."},
    descriptionAdvanced: {
      "de": "Der Zoo und Vergnügungspark von Debrecen, im idyllischen Stadtwald (Nagyerdei Kultúrpark) gelegen, war der erste Tierpark Ungarns au�?erhalb der Hauptstadt. Seit seiner Eröffnung im Jahr 1958 bietet er Besuchern eine charmante Mischung aus Tierbegegnungen und nostalgischer Jahrmarktsatmosphäre. Der Zoo beherbergt eine Vielzahl von Tierarten aus aller Welt, darunter Giraffen, Flusspferde und seltene Affenarten, in einer parkähnlichen Umgebung. Besonders beliebt ist das angrenzende 'Ludas Matyi' Vergnügungsviertel mit seinen historischen Karussells und modernen Fahrgeschäften. Der Tierpark legt gro�?en Wert auf die Umweltbildung und bietet interaktive Programme für Schulklassen und Familien an. Ein Spaziergang durch den Debrecener Zoo ist ein fester Bestandteil jedes Besuchs in der 'kalvinistischen Hauptstadt' Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Debrecener Zoo war der erste Regionaltiergarten in Ungarn.", "Er liegt inmitten des Gro�?en Stadtwaldes (Nagyerd�?), dem ersten Naturschutzgebiet des Landes.", "Der Vergnügungspark beherbergt das einzige noch funktionierende historische Riesenrad Ungarns.", "Der Zoo ist für seine erfolgreiche Zucht seltener exotischer Vogelarten bekannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Verbunden mit einem Vergnügungspark.", "Spezialisiert auf exotische Vögel."], "hu": ["Vidámparkkal van összekapcsolva.", "Különleges madárfajokat is bemutat."], "ro": ["Conectat�? cu un parc de distrac�?ii.", "Specializat�? în p�?s�?ri exotice."], "en": ["Connected with an amusement park.", "Specializes in exotic bird species."]}
  },
  {
    id: "nyiregyhazi-allatkert",
    type: "landmark",
    parent: "HU-SZ",
    coords: [21.724, 48.006],
    name: {"de": "Sóstó Zoo", "hu": "Nyíregyházi Állatkert", "ro": "Gr�?dina Zoologic�? Nyíregyháza", "en": "Nyíregyháza Zoo"},
    image: "/geo-images/hungary/nyiregyhaza-zoo.webp",
    description: {"de": "Preisgekrönter Tierpark mit naturnahen Gehegen und Ozeanarium.", "hu": "Világszínvonalú állatpark óceanáriummal a Sóstó partján.", "ro": "Parc zoologic premiat cu habitate naturale �?i oceanariu.", "en": "Award-winning zoo with natural habitats and an oceanarium."},
    descriptionAdvanced: {
      "de": "Der Sóstó-Zoo in Nyíregyháza gilt als einer der besten und modernsten Tiergärten Europas und ist ein absolutes Highlight im Nordosten Ungarns. In einem 30 Hektar gro�?en Eichenwald untergebracht, bietet der Zoo den Tieren naturnahe und weitläufige Gehege, die nach Kontinenten gegliedert sind. Besonders beeindruckend ist die 'Grüne Pyramide', ein riesiges Tropenhaus mit einem Ozeanarium, in dem Besucher die faszinierende Unterwasserwelt und die Flora und Fauna des Regenwaldes erleben können. Nyíregyháza beherbergt zudem seltene Arten wie Wei�?e Tiger und Afrikanische Elefanten und ist international für seine Zuchterfolge bekannt. Mit seinen interaktiven Ausstellungen und modernen Informationszentren setzt der Zoo Ma�?stäbe in Sachen Bildung und Artenschutz. Ein Besuch in Sóstó ist ein unvergessliches Erlebnis für die ganze Familie.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von Nyíregyháza wurde mehrfach zum besten Tiergarten Europas in seiner Kategorie gewählt.", "Die 'Grüne Pyramide' beherbergt das grö�?te Haifischbecken in ganz Mitteleuropa.", "Besucher können im 'Tarzan-Pfad' den Tieren der Savanne über Hängebrücken ganz nah kommen.", "Der Zoo besitzt ein eigenes Hotel direkt auf dem Gelände für ein besonderes �?bernachtungserlebnis."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Gilt als einer der besten Europas.", "Beherbergt seltene wei�?e Tiger."], "hu": ["Európa egyik legjobb állatkertje.", "Ritka fehér tigrisek is élnek itt."], "ro": ["Considerat�? una dintre cele mai bune din Europa.", "G�?zduie�?te rari tigri albi."], "en": ["Considered one of the best in Europe.", "Home to rare white tigers."]}
  },
  {
    id: "tropicarium-budapest",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.017, 47.410],
    name: {"de": "Tropicarium", "hu": "Tropicarium Budapest", "ro": "Tropicarium Budapesta", "en": "Tropicarium Budapest"},
    image: "/geo-images/hungary/tropicarium.webp",
    description: {"de": "Das 'Haifisch-Zoo' in Budapest mit einem riesigen Glastunnel.", "hu": "A 'cápás állatkert' hatalmas víz alatti alagúttal.", "ro": "'Gr�?dina zoologic�? cu rechini' din Budapesta cu un tunel de sticl�?.", "en": "The 'shark zoo' in Budapest with a massive glass tunnel."},
    descriptionAdvanced: {
      "de": "Das Tropicarium Budapest im Einkaufszentrum Campona ist das grö�?te Meerwasseraquarium Mitteleuropas und bietet ein faszinierendes Abenteuer in der Welt der Ozeane und Tropen. Die Hauptattraktion ist der riesige Haifischtunnel, in dem man unter zwei Millionen Litern Salzwasser spazieren kann, während majestätische Haie und Rochen über die Köpfe der Besucher hinweggleiten. Im tropischen Regenwald-Bereich können Besucher alle 15 Minuten ein echtes Tropengewitter mit Regen und Blitzen miterleben, umgeben von Alligatoren und exotischen Vögeln. Das Tropicarium zeigt zudem eine Vielzahl von Sü�?wasserfischen aus der ungarischen Heimat und ferner Länder. Es ist ein Ort der Unterhaltung und Information, der das Bewusstsein für die Zerbrechlichkeit der marinen �?kosysteme stärkt. Ein Besuch im 'Hai-Zoo' ist ein spannendes Erlebnis für Gro�? und Klein, unabhängig vom Wetter.",
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
    facts: {"de": ["Hat ein echtes Regenwald-Erlebnis.", "Man kann Haifütterungen sehen."], "hu": ["Valódi es�?erd�? élményt nyújt.", "Látványos cápaetetések helyszíne."], "ro": ["Ofer�? o experien�?�? de jungl�? tropical�?.", "Se pot vedea hr�?niri de rechini."], "en": ["Provides a real rainforest experience.", "Spectacular shark feedings can be viewed."]}
  },
  {
    id: "miskolctapolca-barlangfurdo",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.744, 48.061],
    name: {"de": "Höhlenbad Miskolctapolca", "hu": "Miskolctapolca Barlangfürd�?", "ro": "Baia în Pe�?ter�? Miskolctapolca", "en": "Miskolctapolca Cave Bath"},
    image: "/geo-images/hungary/barlangfurdo.webp",
    description: {"de": "Einzigartiges Thermalbad in einer natürlichen Höhle.", "hu": "Egyedülálló gyógyfürd�? természetes barlangjáratokban.", "ro": "Baie termal�? unic�? într-o pe�?ter�? natural�?.", "en": "Unique thermal bath located in a natural cave system."},
    
    descriptionAdvanced: {
      "de": "Das Höhlenbad von Miskolctapolca ist ein in Europa einzigartiges Thermalbad, das in einem natürlichen Höhlensystem über Jahrtausende durch Wassererosion entstanden ist. Besucher können in angenehm warmem Wasser durch die verwinkelten Gänge und Hallen der Höhle schwimmen und die heilende Wirkung der Quellen genie�?en. Die Luft in der Höhle ist besonders rein und frei von Allergenen, was das Baden zu einem ganzheitlichen Erlebnis für Körper und Geist macht. Neben den natürlichen Höhlengängen bietet der Komplex auch moderne Au�?enbecken und Saunalandschaften. Das sanfte Licht in der Grotte und das Echo der Stimmen verleihen dem Bad eine fast mystische Atmosphäre. Miskolctapolca ist ein unverzichtbares Ziel für alle, die Entspannung in einer spektakulären natürlichen Umgebung suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Angenehme 30 Grad Wassertemperatur.", "Heilklimatische Wirkung der Luft."], "hu": ["Kellemes, 30 fokos termálvíz.", "A barlang leveg�?je gyógyhatású."], "ro": ["Temperatur�? pl�?cut�? de 30 de grade.", "Efect curativ al aerului din pe�?ter�?."], "en": ["Pleasant 30-degree water temperature.", "Therapeutic effect of the cave air."]},
  
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
    parent: "HU-BA",
    coords: [18.683, 45.991],
    name: {"de": "Busójárás-Ort", "hu": "Mohácsi Busójárás helye", "ro": "Locul Busójárás", "en": "Mohács Busójárás Site"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Ort der berühmten Winteraustreibung mit gruseligen Masken.", "hu": "A télűz�? Busójárás helyszíne, UNESCO világörökség.", "ro": "Locul faimosului ritual de alungare a iernii cu m�?�?ti.", "en": "Site of the famous winter expulsion ritual with scary masks."},
    
    descriptionAdvanced: {
      "de": "Das Busójárás in Mohács ist der bedeutendste Volksbrauch Ungarns zum Ende des Winters und gehört zum immateriellen UNESCO-Weltkulturerbe. Die Tradition geht auf die Legende zurück, wonach die Šokci-Kroaten mit schrecklichen Masken und Lärm die türkischen Besatzer aus der Stadt vertrieben haben. Heute ziehen Hunderte von 'Busós' in furchterregenden Holzmasken und Schafsfellkostümen durch die Stra�?en, wirbeln Staub auf und lärmen mit hölzernen Ratschen. Das Festival gipfelt im Verbrennen eines riesigen Sargs auf einem Scheiterhaufen, was symbolisch den Winter beerdigt. Zehntausende Besucher aus aller Welt kommen jährlich nach Mohács, um dieses farbenfrohe und archaische Spektakel mitzuerleben. Es ist ein Fest der Gemeinschaft, der Freude und des Sieges über das Dunkle.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["UNESCO-Weltkulturerbe.", "Findet jährlich im Februar statt."], "hu": ["Az UNESCO szellemi örökség része.", "�?vente februárban rendezik meg."], "ro": ["Patrimoniu cultural UNESCO.", "Are loc anual în februarie."], "en": ["UNESCO Cultural Heritage.", "Takes place annually in February."]},
  
    factsAdvanced: {
      "de": ["Das Busójárás-Festival findet jedes Jahr im Februar während der Faschingszeit statt.", "Die handgeschnitzten Holzmasken sind Unikate und werden oft über Generationen vererbt.", "Die Teilnehmer tragen traditionelle Rindslederschuhe und wei�?e Leinenhosen.", "Das Fest wurde 2009 als erster ungarischer Brauch in die UNESCO-Liste aufgenommen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zsolnay-negyed",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.243, 46.084],
    name: {"de": "Zsolnay-Viertel", "hu": "Zsolnay Kulturális Negyed", "ro": "Cartierul Zsolnay", "en": "Zsolnay Cultural Quarter"},
    image: "/geo-images/hungary/zsolnay-negyed.webp",
    description: {"de": "Wunderschön restauriertes Fabrikareal mit Porzellankunst.", "hu": "Pécs ékköve, a világhírű porcelángyár felújított területe.", "ro": "Zon�? industrial�? restaurat�? superb cu art�? din por�?elan.", "en": "Beautifully restored factory area with world-famous ceramics."},
    
    descriptionAdvanced: {
      "de": "Das Zsolnay-Kulturviertel in Pécs ist ein spektakuläres Zeugnis ungarischer Industriegeschichte und ästhetischer Exzellenz. Auf dem Gelände der ehemaligen Porzellanmanufaktur entstand ein modernes Kunstzentrum, das die Geschichte der Familie Zsolnay und ihrer weltberühmten Keramiken würdigt. Besonders beeindruckend ist die Verwendung der charakteristischen Eosin-Glasur und der farbenfrohen Pyrogranit-Elemente an den Gebäuden. Besucher können Museen, Galerien, Werkstätten und das markante Zsolnay-Mausoleum erkunden. Das Viertel war das Herzstück des Projekts Pécs - Kulturhauptstadt Europas 2010 und ist heute ein lebendiger Treffpunkt für Künstler und Touristen. Die Symbiose aus historischer Industriearchitektur und moderner Nutzung ist in Ungarn einzigartig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat der Eosin-Keramik.", "Beherbergt Museen und Ateliers."], "hu": ["Az eozin mázas kerámia hazája.", "Múzeumoknak és műhelyeknek ad otthont."], "ro": ["Casa ceramicii de tip eozin�?.", "G�?zduie�?te muzee �?i ateliere."], "en": ["Home of the eosin-glazed ceramics.", "Houses museums and art studios."]},
  
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
    parent: "HU-CS",
    coords: [20.148, 46.248],
    name: {"de": "Votivkirche Szeged", "hu": "Szegedi Dóm", "ro": "Catedrala din Seghedin", "en": "Votive Church of Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {"de": "Monumentale neoromanische Kathedrale am Domplatz von Szeged.", "hu": "Monumentális neoromán dóm a Napfény városának szívében.", "ro": "Catedral�? neoromanic�? monumental�? în Pia�?a Domului.", "en": "Monumental Neo-Romanesque cathedral on Szeged's Dome Square."},
    
    descriptionAdvanced: {
      "de": "Der Dom von Szeged, auch Votivkirche genannt, ist das markanteste Wahrzeichen der Stadt und eine der grö�?ten Kirchen Ungarns. Das neoromanische Bauwerk wurde nach der verheerenden Flut von 1879 als Gelübde der Bürger errichtet, um den Wiederaufbau der Stadt zu danken. Der riesige Domplatz vor der Kirche, umgeben von Arkaden, bietet die perfekte Kulisse für die berühmten Szegeder Freilichtspiele. Im Inneren beeindruckt der Dom durch seine monumentale Orgel und die prachtvollen Mosaike sowie die Statue der 'Madonna im Pelz'. Die zwei markanten Türme des Doms sind schon von weitem sichtbar und prägen die Silhouette der Stadt an der Thei�?. Der Dom ist nicht nur ein religiöses Zentrum, sondern auch ein Ort des Gedenkens an die Standhaftigkeit der Szegeder Bürger.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Nach dem gro�?en Hochwasser erbaut.", "Besitzt eine der grö�?ten Orgeln."], "hu": ["A nagy árvíz utáni fogadalomból épült.", "Az ország egyik legnagyobb orgonája van itt."], "ro": ["Construit�? dup�? marea inunda�?ie.", "Are una dintre cele mai mari orgi."], "en": ["Built after the great flood.", "Houses one of the largest organs."]},
  
    factsAdvanced: {
      "de": ["Der Dom wurde zwischen 1913 und 1930 nach Plänen von Frigyes Schulek und Ern�? Foerk erbaut.", "Die Orgel des Doms besitzt über 9000 Pfeifen und ist eine der grö�?ten in Europa.", "Die Mosaike im Innenraum stellen Szenen aus der ungarischen Geschichte und Bibel dar.", "Vom Aussichtsturm des Doms hat man einen Panoramablick über die gesamte Stadt und die Thei�?."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pannonhalmi-leveltar",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.761, 47.554],
    name: {"de": "Archiv Pannonhalma", "hu": "Pannonhalmi Apátsági Levéltár", "ro": "Arhiva Pannonhalma", "en": "Pannonhalma Abbey Archives"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Bedeutendes Archiv mit dem ältesten ungarischen Schriftstück.", "hu": "Történelmi levéltár a leg�?sibb magyar nyelvemlékkel.", "ro": "Arhiv�? important�? cu cel mai vechi document scris maghiar.", "en": "Significant archive with the oldest Hungarian written record."},
    
    descriptionAdvanced: {
      "de": "Das Archiv der Erzabtei Pannonhalma ist eines der bedeutendsten historischen Archive Ungarns und bewahrt die schriftliche �?berlieferung aus über tausend Jahren auf. Sein kostbarster Schatz ist die Gründungsurkunde der Abtei Tihany aus dem Jahr 1055, die die ältesten geschriebenen Wörter der ungarischen Sprache enthält. Das Archiv dokumentiert nicht nur die Geschichte des Benediktinerordens, sondern liefert auch unschätzbare Informationen zur Rechts-, Wirtschafts- und Sozialgeschichte des mittelalterlichen Ungarns. Die sorgfältig bewahrten Pergamente, Siegel und Handschriften sind für Forscher aus aller Welt von grö�?tem Interesse. Untergebracht in den ehrwürdigen Mauern der Abtei, strahlt das Archiv eine Atmosphäre von gelehrter Ruhe und Kontinuität aus. Es ist ein wahres Gedächtnis der ungarischen Nation und des europäischen Mönchtums.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Teil der Benediktinerabtei.", "Bewahrt die Tihanyer Stiftungsurkunde."], "hu": ["A bencés f�?apátság része.", "Itt �?rzik a tihanyi alapítólevelet."], "ro": ["Parte a aba�?iei benedictine.", "P�?streaz�? documentul de fondare din Tihany."], "en": ["Part of the Benedictine Abbey.", "Preserves the Tihany founding charter."]},
  
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
    parent: "HU-BU",
    coords: [19.039, 47.496],
    name: {"de": "Nationalgalerie", "hu": "Magyar Nemzeti Galéria", "ro": "Galeria Na�?ional�?", "en": "Hungarian National Gallery"},
    image: "/geo-images/hungary/nemzeti-galeria.webp",
    description: {"de": "Die grö�?te Sammlung ungarischer bildender Kunst im Budaer Schloss.", "hu": "A legjelent�?sebb hazai képz�?művészeti gyűjtemény a Várban.", "ro": "Cea mai mare colec�?ie de art�? maghiar�? în Castelul Buda.", "en": "The largest collection of Hungarian fine arts in Buda Castle."},
    
    descriptionAdvanced: {
      "de": "Die Ungarische Nationalgalerie im prachtvollen Budapester Burgpalast beherbergt die umfassendste Sammlung ungarischer bildender Kunst von den Anfängen bis zur Gegenwart. Die Ausstellungen führen den Besucher durch die Epochen des Mittelalters, der Renaissance, des Barock bis hin zum 19. und 20. Jahrhundert. Besonders beeindruckend sind die riesigen Altäre aus der Spätgotik und die monumentalen Historienbilder ungarischer Meister wie Mihály Munkácsy. In den prachtvollen Sälen des Palastes kommen die Kunstwerke besonders zur Geltung und erzählen die bewegte Geschichte des Landes. Die Galerie bietet zudem einen fantastischen Blick über die Donau und das Parlament von den Fenstern des Burgbergs aus. Für jeden Kunstliebhaber ist ein Besuch der Nationalgalerie eine Reise durch die Seele Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Präsentiert Kunst vom Mittelalter.", "Befindet sich im ehemaligen Palast."], "hu": ["Középkortól napjainkig mutatja be a művészetet.", "A volt Királyi Palota épületében található."], "ro": ["Prezint�? art�? din Evul Mediu.", "Se afl�? în fostul Palat Regal."], "en": ["Presents art from the Middle Ages.", "Located in the former Royal Palace."]},
  
    factsAdvanced: {
      "de": ["Die Galerie ist in den Flügeln A, B, C und D des Budapester Burgpalastes untergebracht.", "Die Sammlung umfasst über 100.000 Kunstwerke ungarischer Künstler.", "Das Altarbild-Archiv ist eines der bedeutendsten seiner Art in Mitteleuropa.", "Die Galerie beherbergt die weltweit grö�?te Sammlung von Werken von Mihály Munkácsy."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "corvin-negyed-poi",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.073, 47.486],
    name: {"de": "Corvin-Viertel", "hu": "Corvin Negyed", "ro": "Cartierul Corvin", "en": "Corvin Quarter"},
    image: "/geo-images/hungary/corvin-negyed.webp",
    description: {"de": "Modernes Stadtviertel mit historischem Erbe in Budapest.", "hu": "Budapest modern, megújult városrésze történelmi emlékekkel.", "ro": "Cartier urban modern cu mo�?tenire istoric�? în Budapesta.", "en": "Modern urban district with historical heritage in Budapest."},
    
    descriptionAdvanced: {
      "de": "Das Corvin-Viertel in Budapest ist eines der ehrgeizigsten Stadterneuerungsprojekte Zentraleuropas und verbindet moderne Architektur mit urbanem Lebensstil. Wo früher graue Mietshäuser standen, erstreckt sich heute eine moderne Promenade mit Geschäften, Restaurants, Büros und Wohnanlagen von internationalem Standard. Das Herzstück ist das Corvin-Plaza-Einkaufszentrum und die markante Corvin-Promenade, die als neue pulsierende Ader des 8. Bezirks dient. Trotz der Modernisierung bewahrt das Viertel historische Ankerpunkte wie das Corvin-Kino, das im 1956er Freiheitskampf eine zentrale Rolle spielte. Die Architektur besticht durch klare Linien, viel Glas und grüne Innenhöfe, die eine hohe Lebensqualität bieten. Das Viertel ist ein Symbol für das dynamische und zukunftsorientierte Budapest.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für die Corvin-Promenade.", "Stätte wichtiger 1956er Kämpfe."], "hu": ["Híres a Corvin-sétányról.", "Az 1956-os harcok egyik fontos helyszíne."], "ro": ["Cunoscut pentru promenada Corvin.", "Locul unor lupte importante din 1956."], "en": ["Known for the Corvin Promenade.", "Site of important 1956 battles."]},
  
    factsAdvanced: {
      "de": ["Das Corvin-Viertel Projekt wurde mit zahlreichen internationalen Immobilienpreisen ausgezeichnet.", "Die Corvin-Promenade ist die längste neu geschaffene Fu�?gängerzone in Budapest.", "In der Nähe befindet sich die Statue des Jungen von Pál-Stra�?e, einem Wahrzeichen des Viertels.", "Das Viertel ist ein bedeutender Standort für internationale Technologie- und IT-Unternehmen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hatvan",
    type: "city",
    parent: "HU-HE",
    coords: [19.6833, 47.6667],
    name: {"de": "Hatvan", "hu": "Hatvan", "ro": "Hatvan", "en": "Hatvan"},
    image: "/geo-images/hungary/hatvan.webp",
    description: {"de": "Stadt an der Zagyva, bekannt für das Grassalkovich-Schloss.", "hu": "Zagyva-parti város, a Grassalkovich-kastélyról ismert.", "ro": "Ora�? pe râul Zagyva, cunoscut pentru Castelul Grassalkovich.", "en": "City on the Zagyva river, known for the Grassalkovich Castle."},
    
    descriptionAdvanced: {
      "de": "Hatvan liegt an der Schnittstelle zwischen der Gro�?en Tiefebene und dem Hügelland der Mátra und blickt auf eine traditionsreiche Geschichte als Verkehrsknotenpunkt zurück. Das Wahrzeichen der Stadt ist das prachtvolle barocke Grassalkovich-Schloss, in dem heute das Ungarische Jagdmuseum untergebracht ist. Die Ausstellungen zeigen die reiche Jagdkultur des Landes und die Naturwerte der Region in einem herrschaftlichen Ambiente. Die Stadt ist zudem für ihren bedeutenden Bahnhof und die Industriegeschichte bekannt, die die moderne Entwicklung ma�?geblich prägten. Ein Spaziergang durch den Schlosspark bietet Erholung und einen Blick auf die architektonische Eleganz vergangener Jahrhunderte. Hatvan verbindet auf angenehme Weise ländliche Tradition mit urbaner Dynamik.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Beherbergt das Ungarische Jagdmuseum."], "hu": ["Fontos vasúti csomópont.", "Itt található a Magyar Vadászati Múzeum."], "ro": ["Nod feroviar important.", "G�?zduie�?te Muzeul Maghiar al Vân�?torii."], "en": ["Important railway junction.", "Home to the Hungarian Hunting Museum."]},
  
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
    parent: "HU-VE",
    coords: [17.4333, 46.8833],
    name: {"de": "Tapolca", "hu": "Tapolca", "ro": "Tapolca", "en": "Tapolca"},
    image: "/geo-images/hungary/tapolca.webp",
    description: {"de": "Stadt am Rande des Balaton-Oberlandes, berühmt für ihre Seehöhle.", "hu": "Város a Balaton-felvidék szélén, híres a tavasbarlangjáról.", "ro": "Ora�? la marginea regiunii Balaton-Oberland, faimos pentru pe�?tera sa cu lac.", "en": "City on the edge of the Balaton Uplands, famous for its lake cave."},
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
    facts: {"de": ["Die Seehöhle kann mit Booten befahren werden.", "Der Malom-See im Zentrum ist sehr malerisch."], "hu": ["A tavasbarlang csónakkal bejárható.", "A központban található Malom-tó rendkívül fest�?i."], "ro": ["Pe�?tera cu lac poate fi explorat�? cu barca.", "Lacul Malom din centru este foarte pitoresc."], "en": ["The lake cave can be explored by boat.", "The Malom Lake in the center is very picturesque."]},
  },
  {
    id: "kazincbarcika",
    type: "city",
    parent: "HU-BZ",
    coords: [20.6333, 48.25],
    name: {"de": "Kazincbarcika", "hu": "Kazincbarcika", "ro": "Kazincbarcika", "en": "Kazincbarcika"},
    description: {"de": "Industriestadt im Sajó-Tal, bekannt als die 'Stadt der Farben'.", "hu": "Ipari város a Sajó-völgyben, a 'Színes város' néven ismert.", "ro": "Ora�? industrial în valea Sajó, cunoscut ca 'ora�?ul culorilor'.", "en": "Industrial city in the Sajó Valley, known as the 'City of Colors'."},
    descriptionAdvanced: {
      "de": "Kazincbarcika im Norden Ungarns ist als die 'Stadt der Farben' bekannt und hat sich von einer sozialistischen Industriestadt zu einem modernen urbanen Kunstzentrum gewandelt. Im Rahmen des Projekts 'Kolorcity' wurden zahlreiche Fassaden der Plattenbauten durch gro�?flächige, bunte Wandgemälde ungarischer und internationaler Künstler verziert. Das Stadtbild ist heute geprägt von dieser lebendigen Stra�?enkunst, die Kazincbarcika landesweit einzigartig macht. Trotz der chemischen Industrie, die weiterhin ein wichtiger wirtschaftlicher Faktor ist, legt die Stadt gro�?en Wert auf Grünflächen und Parks. Regelmä�?ige Kulturfestivals und Sportveranstaltungen prägen das gesellschaftliche Leben der Bewohner. Die Stadt ist ein interessantes Beispiel für den erfolgreichen Wandel einer Industriestadt durch Kreativität und Farbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kazincbarcika beherbergt über 40 gro�?formatige Wandgemälde an öffentlichen Gebäuden.", "Die Stadt wurde in den 1950er Jahren durch die Zusammenlegung dreier Dörfer gegründet.", "Der Name 'Kolorcity' steht für das Konzept der farbenfrohen und lebenswerten Stadt.", "Kazincbarcika ist ein bedeutendes Zentrum der chemischen Industrie in Ungarn."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Berühmt für seine gro�?flächigen Wandmalereien an Wohngebäuden.", "Wichtiges Zentrum der chemischen Industrie."], "hu": ["Híres a lakóépületeken található nagyméretű falfestményeir�?l.", "A vegyipar fontos központja."], "ro": ["Faimos pentru picturile sale murale mari de pe cl�?dirile reziden�?iale.", "Centru important al industriei chimice."], "en": ["Famous for its large-scale murals on residential buildings.", "Important center of the chemical industry."]},
  },
  {
    id: "ozd",
    type: "city",
    parent: "HU-BZ",
    coords: [20.2833, 48.2167],
    name: {"de": "�?zd", "hu": "�?zd", "ro": "�?zd", "en": "�?zd"},
    description: {"de": "Ehemaliges Zentrum der ungarischen Schwerindustrie in Nordungarn.", "hu": "A magyar nehézipar egykori központja �?szak-Magyarországon.", "ro": "Fost centru al industriei grele maghiare în nordul Ungariei.", "en": "Former center of Hungarian heavy industry in northern Hungary."},
    descriptionAdvanced: {
      "de": "�?zd ist eine Stadt mit einer tief verwurzelten industriellen Identität im Norden Ungarns, geprägt durch die einstige Stahl- und Eisenverarbeitung. Nach dem Niedergang der Schwerindustrie hat die Stadt begonnen, ihr industrielles Erbe in kulturelle Projekte umzuwandeln. Ein Highlight ist das 'Digitale Kraftwerk' und das Nationale Filminstitut, die in den historischen Werkshallen untergebracht sind und modernste Technik in alten Mauern präsentieren. Die Umgebung von �?zd ist überraschend grün und gebirgig, eingebettet in die Hügellandschaft des Gömör-Heveser Berglandes. Historische Arbeitersiedlungen mit ihrer charakteristischen Architektur vermitteln noch heute ein authentisches Bild der hiesigen Industriegeschichte. �?zd ist ein Ort des Umbruchs, der mutig neue Wege zwischen Tradition und Moderne sucht.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In �?zd befindet sich das Nationale Filminstitut �?? Filmarcivums, ein modernes digitales Kulturzentrum.", "Die Stadt war über ein Jahrhundert lang eines der Zentren der ungarischen Metallurgie.", "Der industrielle Denkmalkomplex der Stadt ist landesweit einzigartig.", "In der Umgebung von �?zd befinden sich zahlreiche malerische Wanderwege und Naturschätze."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für sein industrielles Erbe und Museen.", "Umgeben von den Hügeln des Heves-Borsodi-Hügellandes."], "hu": ["Ipari örökségér�?l és múzeumairól ismert.", "A Heves�??Borsodi-dombság dombjai veszik körül."], "ro": ["Cunoscut pentru mo�?tenirea sa industrial�? �?i muzee.", "�?nconjurat de dealurile regiunii Heves-Borsod."], "en": ["Known for its industrial heritage and museums.", "Surrounded by the hills of the Heves-Borsod region."]},
  },
  {
    id: "szigliget",
    type: "city",
    parent: "HU-VE",
    coords: [17.4333, 46.8],
    name: {"de": "Szigliget", "hu": "Szigliget", "ro": "Szigliget", "en": "Szigliget"},
    description: {"de": "Malerisches Dorf am Nordufer des Plattensees, bekannt für seine Burg.", "hu": "Fest�?i falu a Balaton északi partján, váráról ismert.", "ro": "Sat pitoresc pe malul nordic al Lacului Balaton, cunoscut pentru cetatea sa.", "en": "Picturesque village on the northern shore of Lake Balaton, known for its castle."},
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
    facts: {"de": ["Die Burg Szigliget bietet einen der schönsten Ausblicke auf den See.", "Bekannt für seine reetgedeckten Häuser und Weinkeller."], "hu": ["A szigligeti várból nyílik az egyik legszebb kilátás a Balatonra.", "Nádfedeles házairól és borpincéir�?l is ismert."], "ro": ["Cetatea Szigliget ofer�? una dintre cele mai frumoase vederi asupra lacului.", "Cunoscut pentru casele sale cu acoperi�? de stuf �?i crame."], "en": ["Szigliget Castle offers one of the most beautiful views of the lake.", "Known for its thatched-roof houses and wine cellars."]},
  },
  {
    id: "herend",
    type: "city",
    parent: "HU-VE",
    coords: [17.8167, 47.1333],
    name: {"de": "Herend", "hu": "Herend", "ro": "Herend", "en": "Herend"},
    image: "/geo-images/hungary/herend.webp",
    description: {"de": "Weltberühmt für seine Porzellanmanufaktur, die seit 1826 besteht.", "hu": "Világhírű porcelánmanufaktúrájáról ismert, amely 1826 óta működik.", "ro": "Renumit în întreaga lume pentru manufactura sa de por�?elan, fondat�? în 1826.", "en": "World-famous for its porcelain manufactory, operating since 1826."},
    descriptionAdvanced: {
      "de": "Herend ist weltweit ein Synonym für exquisites Porzellan und handwerkliche Perfektion aus Ungarn. Die 1826 gegründete Porzellanmanufaktur Herend ist eine der grö�?ten und traditionsreichsten Europas und belieferte bereits königliche Höfe wie den von Königin Victoria. Im Besucherzentrum 'Porcelanium' können Gäste die einzelnen Schritte der Porzellanherstellung, vom Formen bis zur feinen Bemalung, live miterleben. Das Herender Porzellanmuseum zeigt eine beeindruckende Sammlung historischer Stücke und moderner Meisterwerke, die den Weltruf der Marke begründen. Die charakteristischen Muster wie 'Victoria' oder 'Rothschild' sind Sammlern auf allen Kontinenten bekannt. Ein Besuch in Herend ist ein Eintauchen in eine Welt voller Eleganz, Tradition und ungarischer Handwerkskunst auf höchstem Niveau.",
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
    facts: {"de": ["Das Herend-Porzellan ist ein ungarisches Kulturerbe (Hungarikum).", "Beherbergt das Porzellanmuseum und die Minimanufaktur."], "hu": ["A herendi porcelán magyar örökség (Hungarikum).", "Itt található a Porcelánmúzeum és a Minimanufaktúra."], "ro": ["Por�?elanul de Herend este un patrimoniu cultural maghiar (Hungarikum).", "G�?zduie�?te Muzeul Por�?elanului �?i Minimanufactura."], "en": ["Herend porcelain is a Hungarian cultural heritage (Hungarikum).", "Home to the Porcelain Museum and the Minimanufactory."]},
  },
  {
    id: "mezokovesd",
    type: "city",
    parent: "HU-BZ",
    coords: [20.5833, 47.8167],
    name: {"de": "Mez�?kövesd", "hu": "Mez�?kövesd", "ro": "Mez�?kövesd", "en": "Mez�?kövesd"},
    description: {"de": "Zentrum der Matyó-Kultur, bekannt für ihre farbenfrohen Stickereien.", "hu": "A matyó kultúra központja, színes hímzéseir�?l ismert.", "ro": "Centrul culturii Matyó, cunoscut pentru broderiile sale colorate.", "en": "Center of the Matyó culture, known for its colorful embroideries."},
    descriptionAdvanced: {
      "de": "Mez�?kövesd ist die 'Hauptstadt' des Matyó-Landes und weltberühmt für seine farbenfrohe Volkskunst und Stickereien. Die Matyó-Stickerei mit ihren charakteristischen bunten Rosenmotiven gehört zum immateriellen UNESCO-Weltkulturerbe und prägt die Identität der Stadt. Im Stadtteil 'Hadas' können Besucher das ursprüngliche Dorfbild mit traditionellen Häusern und Werkstätten der Volkskünstler erleben. Mez�?kövesd ist zudem für das Zsóry-Heil- und Strandbad bekannt, das über eines der wirksamsten schwefelhaltigen Thermalwasser in Ungarn verfügt. Die Stadt verbindet auf einzigartige Weise die Bewahrung lebendiger Traditionen mit modernen Erholungsmöglichkeiten. Ein Besuch bei den stickenden Frauen oder in den Museen der Stadt bietet tiefe Einblicke in die ungarische Volksseele.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Matyó-Volkskunst in Mez�?kövesd ist seit 2012 Teil des UNESCO-Weltkulturerbes.", "Das Zsóry-Bad besitzt eines der schwefelreichsten Thermalwasser in ganz Mitteleuropa.", "Das Matyó-Museum zeigt prächtige Trachten, die durch ihre enorme Farbenpracht bestechen.", "Jährlich findet in Mez�?kövesd das Matyó-Festival zur Feier der regionalen Identität statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Matyó-Stickerei gehört zum UNESCO-Weltkulturerbe.", "Bekannt für das Zsóry-Heilbad."], "hu": ["A matyó hímzés az UNESCO szellemi világörökség része.", "A Zsóry-gyógyfürd�?r�?l is ismert."], "ro": ["Broderia Matyó face parte din patrimoniul UNESCO.", "Cunoscut �?i pentru baia curativ�? Zsóry."], "en": ["Matyó embroidery is part of the UNESCO Intangible Cultural Heritage.", "Known for the Zsóry medicinal bath."]},
  },
  {
    id: "hajos",
    type: "city",
    parent: "HU-BK",
    coords: [19.1167, 46.4],
    name: {"de": "Hajós", "hu": "Hajós", "ro": "Hajós", "en": "Hajós"},
    image: "/geo-images/hungary/hajos.webp",
    description: {"de": "Stadt in der Tiefebene, berühmt für ihr einzigartiges Weinkellerdorf.", "hu": "Alföldi város, egyedülálló pincefalujáról híres.", "ro": "Ora�? în câmpie, faimos pentru satul s�?u unic de crame.", "en": "City in the plains, famous for its unique wine cellar village."},
    descriptionAdvanced: {
      "de": "Hajós ist weit über die Grenzen des Komitats Bács-Kiskun hinaus für sein einzigartiges Kellerdorf bekannt, das aus über 1.200 historischen Weinkellern besteht. Diese Keller wurden von den im 18. Jahrhundert eingewanderten Donauschwaben in die Lösswand gegraben und bilden heute ein geschlossenes architektonisches Ensemble. Die wei�? getünchten Presshäuser in den schmalen Gassen des Kellerdorfes vermitteln eine ganz besondere, nostalgische Atmosphäre. Hajós ist zudem als bedeutender Wallfahrtsort bekannt, dessen barocke Kirche eine wertvolle Marienstatue beherbergt. Das barocke Erzbischofsschloss ist ein weiteres architektonisches Highlight und dokumentiert den einstigen Glanz der Region. Ein Besuch in Hajós verbindet den Genuss exzellenter Weine mit dem Erlebnis einer lebendigen schwäbischen Tradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Kellerdorf von Hajós ist das grö�?te zusammenhängende seiner Art in ganz Europa.", "Die Weinregion ist vor allem für ihre charaktervollen Rotweine wie Cabernet Sauvignon bekannt.", "Jährlich am Urbantag findet in Hajós ein gro�?es Weinfestival im Kellerdorf statt.", "Das Erzbischofsschloss von Hajós ist das älteste seiner Art im Komitat Bács-Kiskun."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Kellerdorf besteht aus over 1200 kleinen Weinkellern.", "Bekannt für das Barockschloss des Erzbischofs."], "hu": ["A pincefalu több mint 1200 apró borpincéb�?l áll.", "Az érseki barokk kastélyáról is ismert."], "ro": ["Satul de crame este format din peste 1200 de mici pivni�?e de vin.", "Cunoscut �?i pentru castelul baroc al arhiepiscopului."], "en": ["The cellar village consists of over 1200 small wine cellars.", "Known for the Archbishop's Baroque Castle."]},
  },
  {
    id: "szentgotthard",
    type: "city",
    parent: "HU-VA",
    coords: [16.2833, 46.95],
    name: {"de": "Szentgotthárd", "hu": "Szentgotthárd", "ro": "Szentgotthárd", "en": "Szentgotthárd"},
    description: {"de": "Westlichste Stadt Ungarns an der Grenze zu �?sterreich.", "hu": "Magyarország legnyugatibb városa az osztrák határnál.", "ro": "Cel mai vestic ora�? din Ungaria, la grani�?a cu Austria.", "en": "Hungary's westernmost city at the Austrian border."},
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
    facts: {"de": ["Ort der berühmten Schlacht von Szentgotthárd im Jahr 1664.", "Besitzt eine prächtige Zisterzienserabtei."], "hu": ["Az 1664-es híres szentgotthárdi csata helyszíne.", "Pompás ciszterci apátsággal rendelkezik."], "ro": ["Locul faimoasei b�?t�?lii de la Szentgotthárd din 1664.", "Are o aba�?ie cistercian�? magnific�?."], "en": ["Site of the famous Battle of Szentgotthárd in 1664.", "Features a magnificent Cistercian abbey."]},
  },
  {
    id: "lenti",
    type: "city",
    parent: "HU-ZA",
    coords: [16.5333, 46.6167],
    name: {"de": "Lenti", "hu": "Lenti", "ro": "Lenti", "en": "Lenti"},
    description: {"de": "Stadt im Südwesten, bekannt für ihr Thermalbad und den Energiepark.", "hu": "Délnyugati város, termálfürd�?jér�?l és energiaparkjáról ismert.", "ro": "Ora�? în sud-vest, cunoscut pentru baia sa termal�? �?i parcul energetic.", "en": "Southwestern city, known for its thermal bath and energy park."},
    descriptionAdvanced: {
      "de": "Lenti, im Südwesten Ungarns am Treffpunkt dreier Grenzen gelegen, ist ein bekannter Kurort mit einer ganz besonderen energetischen Kraft. Das dortige Heil- und Erlebnisbad ist nicht nur für sein wertvolles Thermalwasser bekannt, sondern beherbergt auch den St.-Georg-Energiepark. Man glaubt, dass hier heilende Energieströme flie�?en, die den Genesungsprozess zusätzlich unterstützen sollen. Die Stadt ist zudem ein idealer Ausgangspunkt für Erkundungen in der hügeligen Landschaft des Komitats Zala und zum nahegelegenen Kerka-Tal. Eine Schmalspurbahn führt von Lenti aus durch die dichten Wälder der Umgebung und bietet Naturerlebnisse für die ganze Familie. Lenti strahlt eine angenehme, ruhige Atmosphäre aus und ist ein Ort der Harmonie zwischen Mensch und Natur.",
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
    facts: {"de": ["Der St. Georg Energiepark soll heilende Erdstrahlen haben.", "Ausgangspunkt der längsten Waldbahn Ungarns."], "hu": ["A Szent György Energiapark gyógyító földsugárzásáról ismert.", "Itt található Magyarország leghosszabb erdei vasútjának kiindulópontja."], "ro": ["Parcul energetic Sf. Gheorghe ar avea radia�?ii terestre curative.", "Punctul de plecare al celei mai lungi c�?i ferate forestiere din Ungaria."], "en": ["The St. George Energy Park is said to have healing earth radiations.", "Starting point of the longest forest railway in Hungary."]},
  },
  {
    id: "karcag",
    type: "city",
    parent: "HU-JN",
    coords: [20.9167, 47.3167],
    name: {"de": "Karcag", "hu": "Karcag", "ro": "Karcag", "en": "Karcag"},
    description: {"de": "Hauptstadt der Region Gro�?-Kumanien, bewahrt kumanische Traditionen.", "hu": "A Nagykunság f�?városa, a kun hagyományok �?rz�?je.", "ro": "Capitala regiunii Cumania Mare, p�?streaz�? tradi�?iile cumane.", "en": "Capital of the Greater Cumania region, preserving Cuman traditions."},
    descriptionAdvanced: {
      "de": "Karcag ist das historische und kulturelle Zentrum von Gro�?kumanien (Nagykunság) und bewahrt stolz das Erbe der einstigen Nomadenstämme. Die Stadt ist geprägt von einer weiten, offenen Landschaft und einer Architektur, die vom Stolz der kumanischen Bewohner zeugt. Das Györffy-István-Nagykun-Museum dokumentiert die faszinierende Geschichte der Kumanen und zeigt bedeutende archäologische Funde aus der Bronzezeit. Karcag ist zudem für seine kulinarische Tradition berühmt, insbesondere für das Karcager Hammelgulasch, das zum ungarischen Kulturerbe gehört. Das moderne Akácliget-Heilbad bietet Entspannung in einer waldreichen Umgebung am Rande der Stadt. Karcag ist ein Ort, an dem die Tradition der Tiefebene noch immer lebendig gelebt und gefeiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Karcag ist die 'Hauptstadt' der historischen Region Gro�?kumanien.", "Das Karcager Hammelgulasch wird traditionell in gro�?en Kesseln über offenem Feuer zubereitet.", "In der Stadt befindet sich das markante Nagykun-Denkmal, das an die Ansiedlung der Kumanen erinnert.", "Karcag beherbergt eine bedeutende Windmühle, die ein Symbol für die Agrartradition der Region ist."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt für das Hammelgulasch nach Karcager Art (Hungarikum).", "Beherbergt das Györffy-István-Nagykun-Museum."], "hu": ["Híres a karcagi birkapörköltr�?l (Hungarikum).", "Itt található a Györffy István Nagykun Múzeum."], "ro": ["Faimos pentru tocan�? de berbec în stil Karcag (Hungarikum).", "G�?zduie�?te Muzeul Györffy István Nagykun."], "en": ["Famous for the Karcag-style mutton stew (Hungarikum).", "Home to the Györffy István Nagykun Museum."]},
  },
  {
    id: "jaszapati",
    type: "city",
    parent: "HU-JN",
    coords: [20.15, 47.52],
    name: {"de": "Jászapáti", "hu": "Jászapáti", "ro": "Jászapáti", "en": "Jászapáti"},
    description: {"de": "Kleinstadt im Jászság, bekannt für ihr Thermalbad und die barocke Kirche.", "hu": "Jászsági kisváros, termálfürd�?jér�?l és barokk templomáról ismert.", "ro": "Ora�? mic în Jászság, cunoscut pentru baia sa termal�? �?i biserica baroc�?.", "en": "Small town in Jászság, known for its thermal bath and Baroque church."},
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
    facts: {"de": ["Besitzt eine der grö�?ten Kirchen der Region.", "Das Heilwasser ist seit den 1960ern beliebt."], "hu": ["A régió egyik legnagyobb templomával rendelkezik.", "Gyógyvize az 1960-as évek óta népszerű."], "ro": ["Are una dintre cele mai mari biserici din regiune.", "Apa curativ�? este popular�? din anii 1960."], "en": ["Has one of the largest churches in the region.", "Its healing water has been popular since the 1960s."]},
  },
  {
    id: "tiszaujvaros",
    type: "city",
    parent: "HU-BZ",
    coords: [21.05, 47.93],
    name: {"de": "Tiszaújváros", "hu": "Tiszaújváros", "ro": "Tiszaújváros", "en": "Tiszaújváros"},
    description: {"de": "Moderne Industriestadt an der Thei�?, bekannt für Chemie und Sport.", "hu": "Modern iparváros a Tisza partján, vegyiparáról és sportéletér�?l ismert.", "ro": "Ora�? industrial modern pe Tisa, cunoscut pentru industria chimic�? �?i sport.", "en": "Modern industrial city on the Tisza, known for chemistry and sports."},
    descriptionAdvanced: {
      "de": "Tiszaújváros ist eine moderne, dynamische Stadt am Ufer der Thei�?, die vor allem durch ihre bedeutende chemische Industrie und ihr erstklassiges Heilbad bekannt ist. In den 1960er Jahren als sozialistische Musterstadt gegründet, hat sich Tiszaújváros heute zu einem attraktiven Wohn- und Tourismusstandort entwickelt. Das Thermal- und Erlebnisbad der Stadt gehört zu den modernsten Ungarns und bietet mit seinem jod- und bromhaltigen Wasser hervorragende Bedingungen für Erholung und Heilung. Die Stadt legt gro�?en Wert auf Sport und Freizeitgestaltung, was sich in zahlreichen modernen Sportanlagen und gepflegten Parks widerspiegelt. Die Nähe zum Fluss Thei�? ermöglicht zudem vielfältige Aktivitäten wie Angeln, Bootfahren und Radtouren entlang des Ufers. Tiszaújváros ist ein Beispiel für erfolgreiche Stadtentwicklung in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszaújváros wurde ursprünglich unter dem Namen Leninváros (Leninstadt) gegründet.", "Die Stadt beherbergt eines der grö�?ten Chemieunternehmen Mitteleuropas.", "Das Heilbad von Tiszaújváros ist für seine moderne Architektur und hohe Wasserqualität bekannt.", "Die Stadt ist ein regelmä�?iger Austragungsort internationaler Triathlon-Wettbewerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hie�? früher Leninváros.", "Verfügt über ein gro�?es Heil- und Erlebnisbad."], "hu": ["Korábban Leninvárosnak hívták.", "Hatalmas gyógy- és élményfürd�?vel rendelkezik."], "ro": ["Se numea anterior Leninváros.", "Are o baie curativ�? �?i de aventur�? imens�?."], "en": ["Formerly called Leninváros.", "Features a large medicinal and adventure bath."]},
  },
  {
    id: "komlo",
    type: "city",
    parent: "HU-BA",
    coords: [18.27, 46.19],
    name: {"de": "Komló", "hu": "Komló", "ro": "Komló", "en": "Komló"},
    description: {"de": "Ehemalige Bergbaustadt im Mecsek-Gebirge mit schöner natürlicher Umgebung.", "hu": "Egykori bányászváros a Mecsekben, szép természeti környezettel.", "ro": "Fost ora�? minier în mun�?ii Mecsek cu împrejurimi naturale frumoase.", "en": "Former mining town in the Mecsek Mountains with beautiful natural surroundings."},
    
    descriptionAdvanced: {
      "de": "Komló, eingebettet in die bewaldeten Täler des Mecsek-Gebirges, blickt auf eine bedeutende Geschichte als Bergbaustadt zurück. Im 20. Jahrhundert entwickelte sich die Stadt zu einem der wichtigsten Steinkohlezentren Ungarns, was das Stadtbild und die Gemeinschaft ma�?geblich prägte. Nach der Einstellung des Bergbaus hat sich Komló zu einem Tor für Naturtouristen entwickelt, die die unberührten Wälder des Mecsek erkunden möchten. Einzigartig ist das Mini-Zoo-Zentrum, das eine Vielzahl einheimischer und exotischer Kleintiere in einer familienfreundlichen Atmosphäre präsentiert. Die Stadt ist zudem ein idealer Ausgangspunkt für Wanderungen zu den Ruinen der Burg Máré und durch das idyllische Sikonda-Tal. Komló verbindet industrielles Erbe mit der natürlichen Frische des Mittelgebirges.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["War ein wichtiges Zentrum des Steinkohlebergbaus.", "Ein beliebtes Wandergebiet am Fu�?e des Mecsek."], "hu": ["A feketek�?szén-bányászat fontos központja volt.", "Népszerű túrahelyszín a Mecsek lábánál."], "ro": ["A fost un centru important al minieritului de c�?rbune.", "O zon�? popular�? de drume�?ii la poalele mun�?ilor Mecsek."], "en": ["Was an important center of coal mining.", "A popular hiking area at the foot of the Mecsek."]},
  
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
    parent: "HU-PE",
    coords: [18.91, 47.32],
    name: {"de": "Százhalombatta", "hu": "Százhalombatta", "ro": "Százhalombatta", "en": "Százhalombatta"},
    description: {"de": "Industriestadt an der Donau, bekannt für ihre Raffinerie und Archäologie.", "hu": "Duna-parti iparváros, finomítójáról és régészeti parkjáról ismert.", "ro": "Ora�? industrial pe Dun�?re, cunoscut pentru rafin�?ria sa �?i parkul arheologic.", "en": "Industrial city on the Danube, known for its refinery and archaeological park."},
    
    descriptionAdvanced: {
      "de": "Százhalombatta liegt am rechten Ufer der Donau südlich von Budapest und ist bekannt für seine beeindruckende prähistorische Vergangenheit und moderne Industrie. Der Name der Stadt bedeutet wörtlich 'Hundert Hügel' und bezieht sich auf die über 100 eisenzeitlichen Grabhügel im hiesigen Archäologischen Park. Dieser Park ist das erste interaktive Freilichtmuseum seiner Art in Ungarn und präsentiert rekonstruierte Häuser und Grabstätten aus der Hallstattzeit. Heute ist die Stadt zudem ein bedeutendes Energiezentrum mit einer der grö�?ten Erdölraffinerien des Landes. Die Donaupromenade von Százhalombatta bietet moderne Freizeitmöglichkeiten und einen weiten Blick über den Fluss. Die Stadt verbindet auf faszinierende Weise die ältesten Siedlungsspuren der Region mit technischem Fortschritt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Name bedeutet 'Hundert Hügel'.", "Beherbergt ein bedeutendes Eisenzeit-Museum."], "hu": ["Neve száz halmot jelent.", "Jelent�?s vaskori régészeti parkkal rendelkezik."], "ro": ["Numele înseamn�? 'O sut�? de movile'.", "G�?zduie�?te un muzeu important al epocii fierului."], "en": ["The name means 'Hundred Mounds'.", "Home to a significant Iron Age archaeological park."]},
  
    factsAdvanced: {
      "de": ["Százhalombatta beherbergt den grö�?ten prähistorischen Grabhügel-Park Mitteleuropas.", "Der Name der Stadt stammt von den zahlreichen künstlichen Hügeln der Eisenzeit.", "In der Stadt befindet sich die bedeutende 'Matrica'-Museumssammlung zur römischen Geschichte.", "Százhalombatta ist ein wichtiges Zentrum der ungarischen Energiewirtschaft."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "monor",
    type: "city",
    parent: "HU-PE",
    coords: [19.45, 47.35],
    name: {"de": "Monor", "hu": "Monor", "ro": "Monor", "en": "Monor"},
    description: {"de": "Stadt am Rande des Gödöll�?-Hügellandes, bekannt für ihr Kellerdorf.", "hu": "Város a Gödöll�?i-dombság szélén, pincefalujáról ismert.", "ro": "Ora�? la poalele dealurilor Gödöll�?, cunoscut pentru satul s�?u de crame.", "en": "City at the edge of the Gödöll�? Hills, known for its cellar village."},
    
    descriptionAdvanced: {
      "de": "Monor liegt am Rande der Hügellandschaft von Gödöll�? und ist landesweit für sein einzigartiges Kellerdorf am Strázsa-Hügel bekannt. Das Kellerdorf umfasst fast 1000 historische Weinkeller, die in geschlossenen Reihen angeordnet sind und ein bedeutendes architektonisches Denkmal bilden. Die Region hat eine lange Tradition im Weinbau, die bis in die Zeit des Mittelalters zurückreicht. Jährlich finden hier Weinfeste und kulinarische Veranstaltungen statt, die die exzellenten Weine der Region und die Gastfreundschaft der Bewohner feiern. Neben dem Wein bietet Monor eine ruhige, kleinstädtische Atmosphäre und ist ein wichtiger Verkehrsknotenpunkt südöstlich von Budapest. Ein Spaziergang durch die Kellergassen bietet authentische Einblicke in die ungarische Weinkultur der Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Kellerdorf Strázsa-hegy hat fast 1000 Weinkeller.", "Wichtiges Weinbauzentrum in der Nähe von Budapest."], "hu": ["A Strázsa-hegyi pincefalu közel 1000 borpincét számlál.", "Fontos borászati központ Budapest közelében."], "ro": ["Satul de crame Strázsa-hegy are aproape 1000 de pivni�?e.", "Centru viticol important lâng�? Budapesta."], "en": ["The Strázsa-hegy cellar village has nearly 1000 wine cellars.", "Important viticultural center near Budapest."]},
  
    factsAdvanced: {
      "de": ["Das Kellerdorf von Monor am Strázsa-Hügel ist eines der grö�?ten zusammenhängenden Ensembles dieser Art.", "Die Region gehört zum Weinbaugebiet Etyek-Buda.", "In Monor befindet sich ein bedeutendes klassizistisches Rathaus aus dem 19. Jahrhundert.", "Die Stadt feiert jährlich das 'Monorer Kellerfest' mit traditioneller Musik und Weinproben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykoros",
    type: "city",
    parent: "HU-PE",
    coords: [19.78, 47.03],
    name: {"de": "Nagyk�?rös", "hu": "Nagyk�?rös", "ro": "Nagyk�?rös", "en": "Nagyk�?rös"},
    description: {"de": "Historische Stadt in der Tiefebene, berühmt für Landwirtschaft und Arany János.", "hu": "Történelmi alföldi város, mez�?gazdaságáról és Arany Jánosról híres.", "ro": "Ora�? istoric în câmpie, faimos pentru agricultur�? �?i Arany János.", "en": "Historic city in the plains, famous for agriculture and Arany János."},
    
    descriptionAdvanced: {
      "de": "Nagy�?rös, im Herzen Ungarns gelegen, ist als die 'Hauptstadt des ungarischen Marktes' und bedeutender Ort der literaturgeschichte bekannt. Die Stadt war über Jahrhunderte ein blühendes Handelszentrum, was sich in den gro�?zügigen Plätzen und prächtigen Bürgerhäusern widerspiegelt. Ein kulturelles Highlight ist das Arany-János-Museum, das dem gro�?en ungarischen Dichter gewidmet ist, der hier als Lehrer wirkte und einige seiner bedeutendsten Werke schuf. Nagy�?rös ist zudem berühmt für seine erstklassige Obstproduktion, insbesondere für �?pfel und Kirschen, die auf den fruchtbaren Böden der Umgebung gedeihen. Die Stadt bewahrt eine ruhige, bürgerliche Eleganz und pflegt stolz ihr reiches kulturelles und landwirtschaftliches Erbe. Die weiten Parks und Alleen verleihen Nagy�?rös eine angenehme, grüne Atmosphäre.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Arany János lehrte hier am Lyzeum.", "Bekannt für den K�?röser Markt."], "hu": ["Arany János itt tanított a gimnáziumban.", "Híres a k�?rösi vásárokról."], "ro": ["Arany János a predat aici la liceu.", "Faimos pentru târgurile din Nagyk�?rös."], "en": ["Arany János taught here at the lyceum.", "Famous for the Nagyk�?rös market."]},
  
    factsAdvanced: {
      "de": ["Nagy�?rös beherbergt den einzigen Safaripark Ungarns am Stadtrand.", "Der Dichter Arany János lebte und lehrte fast ein Jahrzehnt lang in dieser Stadt.", "Die Stadt ist ein historisches Zentrum der ungarischen Obstverarbeitung.", "Das reformierte Gymnasium von Nagy�?rös blickt auf eine über 450-jährige Geschichte zurück."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "marcali",
    type: "city",
    parent: "HU-SO",
    coords: [17.41, 46.58],
    name: {"de": "Marcali", "hu": "Marcali", "ro": "Marcali", "en": "Marcali"},
    description: {"de": "Kleinstadt südlich des Plattensees mit einem modernen Thermalbad.", "hu": "Kisváros a Balatontól délre, modern termálfürd�?vel.", "ro": "Ora�? mic la sud de Lacul Balaton, cu o baie termal�? modern�?.", "en": "Small town south of Lake Balaton with a modern thermal bath."},
    
    descriptionAdvanced: {
      "de": "Marcali, südlich des Plattensees gelegen, ist das wirtschaftliche und kulturelle Zentrum der Region Somogy-Hinterland. Die Stadt besticht durch ihr gepflegtes Stadtbild und das moderne Heil- und Strandbad, das Entspannung für Bewohner und Besucher bietet. Ein bedeutendes Wahrzeichen ist das Schloss Széchényi, das von einem weitläufigen Park umgeben ist und heute ein Museum beherbergt. Marcali blickt auf eine lange handwerkliche Tradition zurück, die in den lokalen Sammlungen zur Volkskunde gewürdigt wird. Die Umgebung der Stadt ist geprägt von sanften Hügeln, dichten Wäldern und Weinbergen, die zu Naturerlebnissen einladen. Marcali strahlt eine angenehme Ruhe aus und ist ein idealer Ort für alle, die das authentische ländliche Ungarn unweit des Balaton suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wirtschaftliches Zentrum des Marcali-Beckens.", "Beliebtes Ziel für Jagd- und Naturtourismus."], "hu": ["A Marcali-hát gazdasági központja.", "Népszerű vadász- és természetjáró célpont."], "ro": ["Centrul economic al bazinului Marcali.", "Destina�?ie popular�? pentru vân�?toare �?i ecoturism."], "en": ["Economic center of the Marcali Basin.", "Popular destination for hunting and nature tourism."]},
  
    factsAdvanced: {
      "de": ["Das Heilbad von Marcali ist für sein fluoridhaltiges Thermalwasser bekannt.", "Das Schloss Széchényi war einst im Besitz einer der bedeutendsten Adelsfamilien Ungarns.", "Die Stadt ist ein wichtiges Zentrum für den ländlichen Tourismus im Komitat Somogy.", "Marcali feiert jährlich ein gro�?es Erntedankfest zur Pflege bäuerlicher Traditionen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "barcs",
    type: "city",
    parent: "HU-SO",
    coords: [17.46, 45.96],
    name: {"de": "Barcs", "hu": "Barcs", "ro": "Barcs", "en": "Barcs"},
    description: {"de": "Grenzstadt an der Drau, Tor zum Nationalpark Donau-Drau.", "hu": "Határváros a Dráva partján, a Duna�??Dráva Nemzeti Park kapuja.", "ro": "Ora�? de grani�?�? pe râul Drava, poarta c�?tre Parcul Na�?ional Dun�?re-Drava.", "en": "Border city on the Drava river, gateway to the Danube-Drava National Park."},
    
    descriptionAdvanced: {
      "de": "Barcs liegt direkt am Ufer der Drau im Süden Ungarns und ist ein bedeutendes Tor zum Nationalpark Donau-Drau. Die Stadt ist geprägt von der Nähe zum Fluss, der hier die Grenze zu Kroatien bildet und für seine unberührte Natur bekannt ist. Das Dráva-Heilbad von Barcs bietet mit seinem wertvollen Thermalwasser Erholung in einer ruhigen Grenzlandschaft. Ein kulturelles Highlight ist das Dráva-Museum, das die Natur- und Kulturgeschichte des Flusstals eindrucksvoll dokumentiert. Barcs ist ein Paradies für Angler, Kanufahrer und Radfahrer, die die Stille der Auenwälder und die reiche Vogelwelt schätzen. Die Stadt verbindet auf charmante Weise ungarische und kroatische Kultureinflüsse am Ufer eines der saubersten Flüsse Europas.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für den Dráva-Freistrand.", "Wichtiger Flusshafen und Grenzübergang."], "hu": ["Híres a drávai szabadstrandjáról.", "Fontos folyami kiköt�? és határátkel�?."], "ro": ["Cunoscut pentru plaja liber�? de pe Drava.", "Port fluvial �?i punct de trecere a frontierei important."], "en": ["Known for the Drava free beach.", "Important river port and border crossing."]},
  
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
    parent: "HU-VA",
    coords: [17.15, 47.25],
    name: {"de": "Celldömölk", "hu": "Celldömölk", "ro": "Celldömölk", "en": "Celldömölk"},
    description: {"de": "Stadt am Fu�?e des Berges Ság, bekannt für den Wallfahrtsort Kemenesalja.", "hu": "Város a Ság-hegy lábánál, a kemenesaljai búcsújáróhelyr�?l ismert.", "ro": "Ora�? la poalele muntelui Ság, cunoscut pentru locul de pelerinaj Kemenesalja.", "en": "City at the foot of Ság Mountain, known for the Kemenesalja pilgrimage site."},
    
    descriptionAdvanced: {
      "de": "Celldömölk, am Fu�?e des vulkanischen Ság-Berges gelegen, ist einer der bedeutendsten Wallfahrtsorte Westungarns. Die prachtvolle barocke Maria-Himmelfahrt-Kirche und das angrenzende Benediktinerkloster ziehen seit Jahrhunderten Pilger an. Ein einzigartiges Naturwunder ist der Ság-Berg selbst, ein erloschener Vulkan, dessen erstarrte Kraterwände einen faszinierenden Einblick in die Erdgeschichte bieten. Im Kemenes-Vulkanpark können Besucher alles über die vulkanischen Aktivitäten der Region und der Welt erfahren. Die Stadt bietet zudem Entspannung im modernen Vulkán-Heilbad, das direkt am Fu�?e des Berges liegt. Celldömölk verbindet auf beeindruckende Weise tiefe Religiosität mit spektakulären Naturphänomenen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Berg Ság ist ein erloschener Vulkan.", "Beherbergt das Kemenes Vulkanpark-Museum."], "hu": ["A Ság-hegy egy kialudt vulkáni tanúhegy.", "Itt található a Kemenes Vulkánpark múzeuma."], "ro": ["Muntele Ság este un vulcan stins.", "G�?zduie�?te muzeul Parcului Vulcanic Kemenes."], "en": ["Ság Mountain is an extinct volcanic hill.", "Home to the Kemenes Volcano Park museum."]},
  
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
    parent: "HU-VA",
    coords: [16.61, 47.01],
    name: {"de": "Körmend", "hu": "Körmend", "ro": "Körmend", "en": "Körmend"},
    description: {"de": "Stadt an der Raab, berühmt für das Schloss Batthyány-Strattmann.", "hu": "Rába-parti város, a Batthyány�??Strattmann-kastélyról híres.", "ro": "Ora�? pe râul Rába, faimos pentru Castelul Batthyány-Strattmann.", "en": "City on the Rába river, famous for the Batthyány-Strattmann Castle."},
    
    descriptionAdvanced: {
      "de": "Körmend, an der Raab (Rába) gelegen, ist vor allem für das prachtvolle Schloss Batthyány bekannt, eines der bedeutendsten Barock-Ensembles Ungarns. Das Schloss war über Jahrhunderte der Hauptsitz der mächtigen Familie Batthyány und beherbergt heute ein Museum sowie eine wertvolle Bibliothek. Der weitläufigen Schlosspark mit seinen jahrhundertealten Bäumen ist eines der wertvollsten Arboretums des Landes. Körmend blickt auf eine reiche Geschichte als Grenzstadt und Handelszentrum zurück, was sich in der Architektur des Zentrums widerspiegelt. Die Stadt ist zudem für ihre erfolgreiche Basketballtradition und ihre lebendige Sportkultur bekannt. Körmend bietet eine elegante Atmosphäre, die von adeliger Geschichte und der natürlichen Schönheit des Raab-Tals geprägt ist.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Schloss beherbergt ein Schuhmuseum.", "Umgeben von einem prächtigen Schlosspark."], "hu": ["A kastélyban cip�?történeti múzeum működik.", "Pompás kastélypark veszi körül."], "ro": ["Castelul g�?zduie�?te un muzeu al pantofilor.", "�?nconjurat de un parc magnific al castelului."], "en": ["The castle houses a shoe museum.", "Surrounded by a magnificent castle park."]},
  
    factsAdvanced: {
      "de": ["Das Schloss Batthyány in Körmend besitzt eine der wertvollsten historischen Waffensammlungen des Landes.", "Der Schlosspark beherbergt Exemplare von Platanen, die bereits über 200 Jahre alt sind.", "Körmend wird oft als 'Hauptstadt der ungarischen Basketballkultur' bezeichnet.", "Die Stadt liegt an der historischen Poststra�?e zwischen Wien und Triest."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jaki-templom",
    type: "landmark",
    parent: "HU-VA",
    coords: [16.58, 47.14],
    name: {"de": "Kirche von Ják", "hu": "Jáki templom", "ro": "Biserica din Ják", "en": "Church of Ják"},
    description: {"de": "Meisterwerk der romanischen Architektur in Ungarn mit berühmtem Portal.", "hu": "A magyarországi román stílusú építészet remekműve, híres bélletes kapujával.", "ro": "Capodoper�? a arhitecturii romanice din Ungaria cu celebrul s�?u portal.", "en": "A masterpiece of Romanesque architecture in Hungary with its famous portal."},
    
    descriptionAdvanced: {
      "de": "Die Kirche von Ják ist das herausragendste Denkmal der romanischen Architektur in Ungarn und ein Symbol christlicher Kunst im Karpatenbecken. Gegründet im 13. Jahrhundert als Abteikirche des Benediktinerordens, beeindruckt sie vor allem durch ihr prachtvolles Stufenportal mit seinen reichen Steinmetzarbeiten. Die monumentale Doppelturmfassade und die schlichte Erhabenheit des Innenraums zeugen von der Meisterschaft mittelalterlicher Baumeister. Die Kirche steht erhaben auf einem Hügel und ist schon von weitem sichtbar, was ihre Bedeutung als spirituelles Zentrum unterstreicht. Direkt neben der Kirche befindet sich die St.-Jakobus-Kapelle, die ebenfalls ein Juwel romanischer Baukunst ist. Ják ist ein Ort von zeitloser Schönheit, der Besucher tief in die religiöse Geschichte Ungarns eintauchen lässt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Im 13. Jahrhundert als Benediktinerklosterkirche erbaut.", "Das Portal ist reich mit Skulpturen verziert."], "hu": ["A 13. században épült bencés apátsági templomként.", "Kapuzata gazdagon díszített szobrokkal."], "ro": ["Construit�? în secolul al XIII-lea ca biseric�? a aba�?iei benedictine.", "Portalul este bogat decorat cu sculpturi."], "en": ["Built in the 13th century as a Benedictine abbey church.", "The portal is richly decorated with sculptures."]},
  
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
    parent: "HU-SZ",
    coords: [22.13, 47.84],
    name: {"de": "Reformierte Kirche Nyírbátor", "hu": "Nyírbátori református templom", "ro": "Biserica reformat�? din Nyírbátor", "en": "Nyírbátor Reformed Church"},
    description: {"de": "Spätgotische Hallenkirche mit beeindruckendem Netzgewölbe.", "hu": "Kés�? gótikus csarnoktemplom lenyűgöz�? hálóboltozattal.", "ro": "Biseric�? hal�? în stil gotic târziu cu o bolt�? în re�?ea impresionant�?.", "en": "Late Gothic hall church with an impressive net vault."},
    
    descriptionAdvanced: {
      "de": "Die reformierte Kirche von Nyírbátor ist eines der bedeutendsten spätgotischen Bauwerke in Ostungarn und eng mit der mächtigen Familie Báthory verbunden. Das Gebäude beeindruckt durch sein enormes einschiffiges Halleninnere und das kunstvolle Netzgewölbe, das als Meisterwerk der ungarischen Gotik gilt. Direkt neben der Kirche befindet sich der markante hölzerne Glockenturm, der grö�?te und älteste seiner Art im Land. Nyírbátor war im Mittelalter ein spirituelles Zentrum der Region und beherbergt zudem eine prachtvolle katholische Minoritenkirche mit barocker Ausstattung. Die Geschichte der Báthorys, die sowohl Helden als auch sagenumwobene Gestalten hervorbrachten, ist in der ganzen Stadt spürbar. Ein Besuch in Nyírbátor bietet tiefe Einblicke in die Architektur und die Mythenwelt des ungarischen Nordostens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Besitzt einen hölzernen Glockenturm aus dem 17. Jahrhundert.", "Einstige Grabstätte der Familie Báthori."], "hu": ["17. századi fa harangtoronnyal rendelkezik.", "A Báthori család egykori temetkezési helye."], "ro": ["Are o clopotni�?�? din lemn din secolul al XVII-lea.", "Fostul loc de înmormântare al familiei Báthori."], "en": ["Has a wooden bell tower from the 17th century.", "Former burial place of the Báthori family."]},
  
    factsAdvanced: {
      "de": ["Die Kirche wurde Ende des 15. Jahrhunderts von István Báthory nach der Schlacht von Brotfield errichtet.", "Der hölzerne Glockenturm stammt aus dem Jahr 1640 und ist ein Wahrzeichen der Region.", "In der Kirche befinden sich wertvolle Renaissance-Grabdenkmäler der Familie Báthory.", "Nyírbátor feiert jährlich ein gro�?es Renaissance-Festival mit historischen Kostümen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "edelenyi-kastely",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.74, 48.30],
    name: {"de": "Schloss Edelény", "hu": "Edelényi kastély", "ro": "Castelul din Edelény", "en": "Edelény Palace"},
    description: {"de": "Eines der grö�?ten und prächtigsten Barockschlösser Ungarns.", "hu": "Magyarország egyik legnagyobb és legpompásabb barokk kastélya.", "ro": "Unul dintre cele mai mari �?i mai splendide castele baroce din Ungaria.", "en": "One of the largest and most magnificent Baroque palaces in Hungary."},
    
    descriptionAdvanced: {
      "de": "Das Schloss L�??Huillier-Coburg in Edelény ist eines der grö�?ten und prachtvollsten Barockschlösser im Nordosten Ungarns. Das Bauwerk besticht durch seine enorme Grö�?e und die sieben markanten Zwiebeltürme, die ihm ein fast märchenhaftes Aussehen verleihen. Das absolute Highlight im Inneren sind die einzigartigen Wandmalereien von Ferenc Lieb aus dem 18. Jahrhundert, die das Leben des Adels in lebhaften Farben darstellen. Das Schloss wurde in den letzten Jahren aufwendig restauriert und dient heute als modernes Kulturzentrum mit interaktiven Ausstellungen. Es liegt inmitten eines weiten Parks am Ufer des Flusses Bódva und strahlt eine vornehme Ruhe aus. Edelény ist ein Muss für jeden Liebhaber barocker Architektur und aristokratischer Wohnkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für seine einzigartigen Rokoko-Wandmalereien.", "Auf einer Insel im Fluss Bódva erbaut."], "hu": ["Egyedülálló rokokó falfestményeir�?l ismert.", "A Bódva folyó szigetén épült fel."], "ro": ["Cunoscut pentru picturile sale murale unice în stil rococo.", "Construit pe o insul�? a râului Bódva."], "en": ["Known for its unique Rococo wall paintings.", "Built on an island in the Bódva River."]},
  
    factsAdvanced: {
      "de": ["Das Schloss in Edelény ist das siebtgrö�?te Schlossgebäude in Ungarn.", "Es beherbergt den grö�?ten zusammenhängenden Zyklus profaner Barockfresken des Landes.", "Das Schloss wurde im 18. Jahrhundert für den lothringischen General Jean-François L'Huillier erbaut.", "Eine Besonderheit ist der interaktive 3D-Film, der die Geschichte des Schlosses für Besucher lebendig macht."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csakvari-kastely",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.46, 47.39],
    name: {"de": "Schloss Csákvár", "hu": "Csákvári Esterházy-kastély", "ro": "Castelul Esterházy din Csákvár", "en": "Csákvár Esterházy Palace"},
    description: {"de": "Klassizistisches Schloss der Familie Esterházy im Vértes-Gebirge.", "hu": "Az Esterházy család klasszicista kastélya a Vértes lábánál.", "ro": "Castelul clasicist al familiei Esterházy la poalele mun�?ilor Vértes.", "en": "Neoclassical palace of the Esterházy family at the foot of the Vértes."},
    
    descriptionAdvanced: {
      "de": "Das Esterházy-Schloss in Csákvár ist ein herausragendes Beispiel klassizistischer Architektur im Vértes-Gebirge. Das ehemalige herrschaftliche Anwesen war über Jahrhunderte ein Zentrum für Kultur und Pferdezucht der Familie Esterházy. Das Schloss beeindruckt durch seine harmonischen Proportionen und die monumentale Säulenhalle im Zentrum. Umgeben ist das Gebäude von einem der schönsten englischen Gärten Ungarns, der seltene Baumarten und romantische Pavillons beherbergt. Heute ist in einem Teil des Schlosses ein Krankenhaus untergebracht, während die Repräsentationsräume und der Park für Besucher zugänglich sind. Csákvár ist zudem für seine traditionsreiche Töpferkunst bekannt, die im örtlichen Museum dokumentiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Früher ein bedeutendes kulturelles Zentrum.", "Umgeben von einem gro�?en englischen Landschaftsgarten."], "hu": ["Egykor jelent�?s kulturális központ volt.", "Hatalmas angolpark veszi körül."], "ro": ["Odat�? un centru cultural important.", "�?nconjurat de un imens parc englezesc."], "en": ["Once a significant cultural center.", "Surrounded by a vast English landscape garden."]},
  
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
    parent: "HU-VE",
    coords: [18.22, 47.21],
    name: {"de": "Schloss Nádasdy", "hu": "Nádasdy-kastély", "ro": "Castelul Nádasdy", "en": "Nádasdy Mansion"},
    description: {"de": "Einzigartiges neugotisches Schloss im Tudor-Stil in Nádasdladány.", "hu": "Egyedülálló neogótikus, Tudor-stílusú kastély Nádasdladányban.", "ro": "Castel neogotic unic în stil Tudor în Nádasdladány.", "en": "Unique Neo-Gothic Tudor-style mansion in Nádasdladány."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Nádasdy in Nádasdladány ist ein einzigartiges architektonisches Juwel, das im Tudor-Stil erbaut wurde und an englische Herrensitze erinnert. Das neugotische Schloss wurde im 19. Jahrhundert für Graf Ferenc Nádasdy als Liebesbeweis für seine Frau Ilona Zichy errichtet. Besonders beeindruckend ist der prachtvolle Ahnensaal mit seinen geschnitzten Holzdecken und den Porträts der Familie Batthyány und Nádasdy. Das Schloss verfügte bereits bei seinem Bau über modernste Technik wie Zentralheizung und elektrisches Licht, was damals eine Sensation war. Umgeben von einem idyllischen englischen Garten, strahlt die Anlage eine romantische und zugleich mystische Atmosphäre aus. Nádasdladány bietet einen faszinierenden Einblick in die eklektische Architektur und den aristokratischen Lebensstil des ungarischen Historismus.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für den prachtvollen Ahnen-Saal.", "Eines der romantischsten Schlösser Ungarns."], "hu": ["Híres a pompás Ősök csarnokáról.", "Magyarország egyik legromantikusabb kastélya."], "ro": ["Cunoscut pentru splendida sal�? a str�?mo�?ilor.", "Unul dintre cele mai romantice castele din Ungaria."], "en": ["Known for the magnificent Ancestors' Hall.", "One of the most romantic mansions in Hungary."]},
  
    factsAdvanced: {
      "de": ["Das Schloss Nádasdy ist das einzige bedeutende Bauwerk im Tudor-Stil in ganz Ungarn.", "Im Ahnensaal hängen lebensgro�?e Porträts der Vorfahren, die in die Wandtäfelung eingelassen sind.", "Das Gebäude diente aufgrund seiner besonderen Atmosphäre bereits als Filmkulisse für internationale Produktionen.", "Das Schloss wurde in den letzten Jahren originalgetreu saniert und ist für Besucher zugänglich."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "deg-kastely",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.44, 46.88],
    name: {"de": "Schloss Dég", "hu": "Dégi Festetics-kastély", "ro": "Castelul Festetics din Dég", "en": "Dég Festetics Palace"},
    description: {"de": "Eines der bedeutendsten klassizistischen Schlösser mit dem grö�?ten englischen Garten.", "hu": "Az ország egyik legjelent�?sebb klasszicista kastélya a legnagyobb angolparkkal.", "ro": "Unul dintre cele mai importante castele clasiciste cu cel mai mare parc englezesc.", "en": "One of the most significant Neoclassical palaces with the largest English garden."},
    
    descriptionAdvanced: {
      "de": "Das Festetics-Schloss in Dég ist eines der frühesten und bedeutendsten Denkmäler der klassizistischen Architektur in Ungarn. Entworfen vom berühmten Architekten Mihály Pollack, besticht das Bauwerk durch seine edle Schlichtheit und die monumentale dorische Säulenhalle. Einzigartig ist das sogenannte 'Holländerhaus', ein rotes Backsteingebäude auf einer Insel im Schlosspark, das einst als Quarantänestation diente. Das Schloss war über lange Zeit ein geheimes Zentrum der ungarischen Freimaurerei, woran heute noch architektonische Details erinnern. Der weitläufige englische Garten mit seinem verzweigten Kanalsystem ist einer der grö�?ten und romantischsten des Landes. Dég bietet eine Atmosphäre von erhabener Ruhe und geheimnisvoller Geschichte inmitten der Hügellandschaft von Fejér.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für das 'Holländerhaus' im Park.", "Ein wichtiges Zentrum der ungarischen Freimaurerei."], "hu": ["Híres a parkban található Hollandi-házról.", "A magyar szabadk�?művesség egyik központja volt."], "ro": ["Cunoscut pentru 'Casa Olandez�?' din parc.", "Un centru important al masoneriei maghiare."], "en": ["Known for the 'Dutch House' in the park.", "An important center of Hungarian Freemasonry."]},
  
    factsAdvanced: {
      "de": ["Das Schloss Dég beherbergte einst das bedeutendste Freimaurer-Archiv Mitteleuropas.", "Das 'Holländerhaus' auf der Parkinsel ist ein landesweit einzigartiges Baudenkmal.", "Der Schlosspark besitzt das grö�?te künstliche Seensystem ungarischer Gartenanlagen.", "Das Schloss wurde nach umfangreichen Restaurierungsarbeiten im Jahr 2022 wiedereröffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszadob-kastely",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.17, 47.92],
    name: {"de": "Schloss Andrássy", "hu": "Tiszadobi Andrássy-kastély", "ro": "Castelul Andrássy din Tiszadob", "en": "Tiszadob Andrássy Castle"},
    description: {"de": "Märchenhaftes historistisches Schloss an der Thei�? mit Labyrinth.", "hu": "Mesebeli historizáló kastély a Tisza partján, labirintussal.", "ro": "Castel istoric de basm pe malul Tisei, cu un labirint.", "en": "Fairytale-like Historicist castle on the Tisza with a labyrinth."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Andrássy in Tiszadob ist ein märchenhaftes Bauwerk am Ufer der Thei�?, das durch seine eklektische Architektur mit Elementen der Gotik und Renaissance besticht. Das Schloss wurde Ende des 19. Jahrhunderts für Graf Gyula Andrássy erbaut und sollte der �?berlieferung nach die vier Jahreszeiten, die 12 Monate, die 52 Wochen und die 365 Tage im Jahr widerspiegeln. Ein absolutes Highlight ist der kunstvoll angelegte Buchsbaum-Irrgarten im Schlosspark, der einer der grö�?ten und schönsten Ungarns ist. Das Schloss thront auf einem Hochufer und bietet fantastische Ausblicke über die weiten Flusslandschaften der Thei�?. Die romantischen Türmchen und verwinkelten Fassaden verleihen dem Gebäude den Charakter eines echten Zauberschlosses. Tiszadob ist ein Ort, an dem sich aristokratische Träume und die wilde Natur des Flusstals begegnen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Architektur ist von französischen Schlössern inspiriert.", "Hat einen berühmten Buchsbaum-Irrgarten."], "hu": ["�?pítészetét francia kastélyok ihlették.", "Híres a bukszus-labirintusáról."], "ro": ["Arhitectura sa este inspirat�? de castelele franceze.", "Are un faimos labirint de cimi�?ir."], "en": ["Its architecture was inspired by French castles.", "Has a famous boxwood labyrinth."]},
  
    factsAdvanced: {
      "de": ["Das Schloss besitzt exakt 4 Türme, 12 Eingänge, 52 Zimmer und 365 Fenster.", "Der Irrgarten im Park ist ein einzigartiges Beispiel historischer Gartenkunst in Ungarn.", "Graf Gyula Andrássy war ein bedeutender Staatsmann und Ministerpräsident der k.u.k. Monarchie.", "In dem Schloss finden regelmä�?ig internationale Kultur- und Kunstfestivals statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fuzerradvany-kastely",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.53, 48.48],
    name: {"de": "Schloss Füzérradvány", "hu": "Füzérradványi Károlyi-kastély", "ro": "Castelul Károlyi din Füzérradvány", "en": "Füzérradvány Károlyi Palace"},
    description: {"de": "Prächtiges Schloss im eklektischen Stil mit riesigem Landschaftspark.", "hu": "Pompás eklektikus kastély hatalmas tájképi kerttel a Zemplénben.", "ro": "Castel splendid în stil eclectic cu un imens parc peisagistic.", "en": "Magnificent eclectic-style palace with a huge landscape park in Zemplén."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Károlyi in Füzérradvány ist ein prachtvolles Beispiel des Historismus im Zemplén-Gebirge, das vor allem durch sein italienisches Flair besticht. Ursprünglich ein Barockbau, wurde das Schloss im 19. Jahrhundert im Stil der Neorenaissance umgestaltet, wobei originale Bauelemente aus italienischen Palazzi integriert wurden. Besucher sind fasziniert von den Marmorkaminen, den geschnitzten Holztüren und den prachtvollen Sälen, die ein Stück Italien in den Norden Ungarns bringen. Das Schloss ist von einem der bedeutendsten Landschaftsparks des Landes umgeben, der für seine riesigen Platanen und seltenen Nadelhölzer berühmt ist. In den 1930er Jahren fungierte das Schloss als elegantes Luxushotel und zog die High Society der Monarchie an. Heute bietet das renovierte Schloss faszinierende Einblicke in die Welt des ungarischen Hochadels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt für sein italienisches Renaissance-Interieur.", "Der Park beherbergt jahrhundertealte Platanen."], "hu": ["Híres itáliai reneszánsz bels�? tereir�?l.", "A parkban évszázados platánfák találhatók."], "ro": ["Cunoscut pentru interiorul s�?u în stil renascentist italian.", "Parcul g�?zduie�?te platani seculari."], "en": ["Known for its Italian Renaissance interiors.", "The park is home to centuries-old plane trees."]},
  
    factsAdvanced: {
      "de": ["Das Schloss beherbergt zahlreiche originale Renaissance-Details, die direkt aus Italien importiert wurden.", "Der Park von Füzérradvány beherbergt die ältesten und grö�?ten Platanen Ungarns.", "Die Burganlage diente in der Zwischenkriegszeit als Drehort für zahlreiche Filme.", "Vom Schlossturm aus hat man einen weiten Blick bis hin zur Burg Füzér."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabadkigyos-kastely",
    type: "landmark",
    parent: "HU-BE",
    coords: [21.08, 46.61],
    name: {"de": "Schloss Wenckheim", "hu": "Szabadkígyósi Wenckheim-kastély", "ro": "Castelul Wenckheim din Szabadkígyós", "en": "Szabadkígyós Wenckheim Palace"},
    description: {"de": "Meisterwerk von Miklós Ybl im eklektischen und Neorenaissance-Stil.", "hu": "Ybl Miklós remekműve eklektikus és neoreneszánsz stílusban.", "ro": "Capodoper�? a lui Miklós Ybl în stil eclectic �?i neorenascentist.", "en": "A masterpiece by Miklós Ybl in eclectic and Neo-Renaissance style."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Wenckheim in Szabadkígyós ist eines der prächtigsten eklektischen Schlösser im Südosten Ungarns, entworfen vom berühmten Architekten Miklós Ybl. Das zwischen 1875 und 1879 errichtete Bauwerk besticht durch seine harmonische Architektur, die deutsche und französische Einflüsse vereint. Einzigartig ist die symbolische Gestaltung des Gebäudes mit seinen 365 Fenstern, 52 Zimmern und 12 Eingängen, die den Kalender widerspiegeln. Das Schloss besitzt einen markanten Aussichtsturm und eine prachtvolle Kapelle, die die religiöse Bedeutung für die Familie Wenckheim unterstreicht. Der umliegende Park mit seinem künstlichen See und den seltenen Baumarten lädt zu ausgiebigen Spaziergängen ein. Szabadkígyós ist ein leuchtendes Beispiel für die glanzvolle �?ra der ungarischen Schlossbaukunst am Ende des 19. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hat 365 Fenster, 52 Zimmer und 4 Eingänge (wie das Jahr).", "Umgeben von einem herrlichen Schlosspark."], "hu": ["365 ablaka, 52 szobája és 4 bejárata van.", "Gyönyörű kastélypark veszi körül."], "ro": ["Are 365 de ferestre, 52 de camere �?i 4 intr�?ri.", "�?nconjurat de un parc superb al castelului."], "en": ["Has 365 windows, 52 rooms, and 4 entrances.", "Surrounded by a beautiful castle park."]},
  
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
    parent: "HU-PE",
    coords: [18.72, 47.55],
    name: {"de": "Kirchenruine von Zsámbék", "hu": "Zsámbéki romtemplom", "ro": "Biserica ruin�? din Zsámbék", "en": "Zsámbék Church Ruins"},
    description: {"de": "Beeindruckende Ruine einer spätromanisch-gotischen Basilika.", "hu": "Kés�? román-kori és gótikus bazilika lenyűgöz�? romjai.", "ro": "Ruinele impresionante ale unei bazilici în stil romanic târziu �?i gotic.", "en": "Impressive ruins of a late Romanesque and Gothic basilica."},
    
    descriptionAdvanced: {
      "de": "Die Kirchenruine von Zsámbék ist eines der eindrucksvollsten und dramatischsten Baudenkmäler des ungarischen Mittelalters. Die im 13. Jahrhundert errichtete spätromanisch-frühgotische Basilika wurde durch ein verheerendes Erdbeben im Jahr 1763 weitgehend zerstört. Die stehengebliebenen Mauern und die markanten Doppeltürme ragen heute als steinerne Zeugen in den Himmel und bieten ein faszinierendes Bild verfallener Pracht. Die Ruine bewahrt meisterhafte Steinmetzarbeiten und Kapitelle, die den �?bergang der Stilepochen dokumentieren. Am Fu�?e der Ruine befindet sich ein Lapidarium, in dem wertvolle architektonische Fragmente der einstigen Abtei ausgestellt sind. Zsámbék ist ein Ort von gro�?er spiritueller Kraft und ein beliebtes Ziel für Fotografen und Geschichtsinteressierte. Die Ruine dient zudem als stimmungsvolle Kulisse für sommerliche Freilichtkonzerte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde durch ein Erdbeben im Jahr 1763 zerstört.", "Ein Symbol der mittelalterlichen ungarischen Architektur."], "hu": ["Az 1763-as földrengés során pusztult el.", "A középkori magyar építészet egyik jelképe."], "ro": ["A fost distrus�? de un cutremur în anul 1763.", "Un simbol al arhitecturii maghiare medievale."], "en": ["Destroyed by an earthquake in 1763.", "A symbol of medieval Hungarian architecture."]},
  
    factsAdvanced: {
      "de": ["Die Kirche wurde ursprünglich für den Prämonstratenserorden erbaut.", "Das Erdbeben von 1763 war so stark, dass es die gesamte Region um Zsámbék erschütterte.", "Die Ruine gilt als das bedeutendste Denkmal des �?bergangsstils zwischen Romanik und Gotik in Ungarn.", "Von der Anhöhe der Ruine hat man einen weiten Blick über das Zsámbéker Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentendre-varazshegy",
    type: "landmark",
    parent: "HU-PE",
    coords: [19.04, 47.67],
    name: {"de": "Varázsciki Völgy", "hu": "Varázsciki Völgy", "ro": "Varázsciki Völgy", "en": "Varázsciki Valley"},
    description: {"de": "Ein versteckter Märchenpark und Erlebnispfad in Szentendre.", "hu": "Rejtett mesepark és élményösvény Szentendrén.", "ro": "Un parc de basm ascuns �?i o potec�? de aventur�? în Szentendre.", "en": "A hidden fairytale park and adventure trail in Szentendre."},
    
    descriptionAdvanced: {
      "de": "Der Zauberberg (Varázshegy) in Szentendre ist ein kreativer Erlebnisraum für Familien, der die Welt der Märchen und Mythen mit der Kunst verbindet. Inmitten der malerischen Stadt Szentendre bietet dieser Ort interaktive Ausstellungen, bei denen Kinder und Erwachsene in phantastische Welten eintauchen können. Die Installationen nutzen Lichteffekte, Klangwelten und künstlerische Objekte, um die Phantasie der Besucher anzuregen. Es ist ein Ort des Staunens, der zeigt, wie vielfältig die kulturelle Szene der 'Stadt der Künstler' ist. Regelmä�?ige Workshops laden dazu ein, selbst kreativ zu werden und kleine Kunstwerke zu erschaffen. Der Zauberberg ist eine wunderbare Ergänzung zu den klassischen Museen der Stadt und bietet ein modernes, spielerisches Kulturerlebnis.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Einzigartige Installationen aus Naturmaterialien.", "Ideal für Familien mit kleinen Kindern."], "hu": ["Egyedülálló installációk természetes anyagokból.", "Ideális kisgyermekes családok számára."], "ro": ["Instala�?ii unice din materiale naturale.", "Ideal pentru familii cu copii mici."], "en": ["Unique installations from natural materials.", "Ideal for families with young children."]},
  
    factsAdvanced: {
      "de": ["Der Zauberberg ist ein modernes interaktives Zentrum für zeitgenössische Kunstvermittlung.", "Der Ort ist besonders auf die Bedürfnisse und Interessen von Kindern ausgerichtet.", "Regelmä�?ig finden hier Märchenlesungen und theatralische Vorführungen statt.", "Das Zentrum befindet sich in einem historischen Gebäude, das modern umgestaltet wurde."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonalmadi-strand",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.02, 47.03],
    name: {"de": "Strand Balatonalmádi", "hu": "Balatonalmádi strand", "ro": "Plaja Balatonalmádi", "en": "Balatonalmádi Beach"},
    description: {"de": "Gepflegter Strand am Nordostufer des Plattensees.", "hu": "Gondozott strand a Balaton északkeleti partján.", "ro": "Plaj�? bine între�?inut�? pe malul de nord-est al Lacului Balaton.", "en": "Well-kept beach on the northeastern shore of Lake Balaton."},
    
    descriptionAdvanced: {
      "de": "Der Strand von Balatonalmádi ist einer der beliebtesten und am besten ausgestatteten Badeplätze am Nordostufer des Plattensees. Mit seinen weitläufigen Rasenflächen, den schattenspendenden alten Bäumen und dem klaren Wasser bietet er ideale Bedingungen für einen entspannten Sommertag. Besonders attraktiv für Familien ist der flach abfallende Uferbereich und die Vielzahl an Spielplätzen und Sportmöglichkeiten. Balatonalmádi ist zudem für seine markanten roten Sandsteinfelsen bekannt, die dem Ort ein besonderes geologisches Gepräge geben. Am Strand finden im Sommer regelmä�?ig Sportwettbewerbe und Unterhaltungsprogramme statt, die für eine lebendige Urlaubsatmosphäre sorgen. Die Nähe zum Bahnhof und zur Promenade macht den Strand besonders leicht erreichbar und komfortabel.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Gro�?e Liegewiesen und Schatten spendende Bäume.", "Bietet einen weiten Blick über den See."], "hu": ["Nagy füves terület és árnyas fák várják a strandolókat.", "Szép kilátást nyújt a tóra."], "ro": ["Zone largi cu iarb�? �?i copaci umbro�?i.", "Ofer�? o vedere frumoas�? asupra lacului."], "en": ["Large grassy areas and shady trees.", "Offers a beautiful view over the lake."]},
  
    factsAdvanced: {
      "de": ["Balatonalmádi besitzt einen der grö�?ten und gepflegtesten Strände am Nordufer des Sees.", "Die Region ist berühmt für ihren roten Perm-Sandstein, der auch für die Gestaltung des Strandes genutzt wurde.", "Vom Ufer aus hat man einen fantastischen Blick auf das Südufer und den Yachthafen.", "Der Strand trägt seit Jahren die 'Blaue Welle'-Flagge für exzellente Wasserqualität und Service."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely-strand",
    type: "landmark",
    parent: "HU-ZA",
    coords: [17.25, 46.76],
    name: {"de": "Städtischer Strand Keszthely", "hu": "Keszthelyi városi strand", "ro": "Plaja municipal�? Keszthely", "en": "Keszthely City Beach"},
    description: {"de": "Historischer Strand mit dem ikonischen Inselbadgebäude.", "hu": "Történelmi strand az ikonikus Szigetfürd�? épületével.", "ro": "Plaj�? istoric�? cu cl�?direa iconic�? Szigetfürd�?.", "en": "Historic beach with the iconic Szigetfürd�? island bath building."},
    
    descriptionAdvanced: {
      "de": "Der Stadtstrand von Keszthely ist der traditionsreichste und am schönsten gestaltete Badeplatz am Westbecken des Plattensees. Besonders markant ist das historische Inselbad (Szigetfürd�?), ein prachtvoller Holzbau aus dem 19. Jahrhundert, der dem Strand eine nostalgische Eleganz verleiht. Der Strand bietet weitläufige Liegewiesen, gepflegte Promenaden und eine Vielzahl an Sport- und Freizeitmöglichkeiten für alle Altersklassen. Das flache, saubere Wasser und der Blick auf die Berge des Balaton-Oberlandes machen das Baden hier zu einem besonderen Genuss. Keszthely verbindet an seinem Strand auf einzigartige Weise kaiserliche Badetradition mit modernem Urlaubsstandard.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Inselbad wurde im 19. Jahrhundert erbaut.", "Bietet vielfältige Sport- und Freizeitmöglichkeiten."], "hu": ["A Szigetfürd�? a 19. században épült.", "Változatos sport- és szabadid�?s lehet�?ségeket kínál."], "ro": ["Baia insular�? a fost construit�? în secolul al XIX-lea.", "Ofer�? diverse oportunit�?�?i de sport �?i agrement."], "en": ["The island bath was built in the 19th century.", "Offers diverse sports and leisure opportunities."]},
  
    factsAdvanced: {
      "de": ["Der Strand beherbergt das einzige erhaltene historische Inselbad am Plattensee.", "Die Anlage wurde originalgetreu nach Plänen aus dem Jahr 1864 restauriert.", "In den Sommermonaten finden hier regelmä�?ig stimmungsvolle Abendkonzerte statt.", "Der Strand ist direkt an die belebte Seeuferpromenade von Keszthely angeschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siofok-strand",
    type: "landmark",
    parent: "HU-SO",
    coords: [18.05, 46.91],
    name: {"de": "Nagystrand Siófok", "hu": "Siófoki Nagystrand", "ro": "Plaja Mare Siófok", "en": "Siófok Great Beach"},
    description: {"de": "Grö�?ter und belebtester Strand am Südufer mit Clubatmosphäre.", "hu": "A déli part legnagyobb és legpezsg�?bb strandja klubhangulattal.", "ro": "Cea mai mare �?i mai animat�? plaj�? de pe malul sudic.", "en": "The largest and busiest beach on the southern shore with a club atmosphere."},
    
    descriptionAdvanced: {
      "de": "Der Gro�?e Strand von Siófok ist der bekannteste und belebteste Badeplatz an der ungarischen Riviera. Mit seiner kilometerlangen Uferlinie und dem flach abfallenden Wasser ist er der Inbegriff des Balaton-Sommers für Generationen von Urlaubern. Das Zentrum des Geschehens ist der 'Plage-Siófok', ein moderner Erlebniskomplex mit Sandstrand, Pools und zahlreichen Bars. Hier treffen sich tagsüber Sonnenanbeter und Wassersportler, während sich der Strand am Abend in eine pulsierende Partymeile verwandelt. Siófok bietet an seinem Strand die perfekte Infrastruktur für einen abwechslungsreichen Urlaub zwischen Sport, Spiel und Unterhaltung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat des Plázs Siófok, einem Zentrum für Konzerte.", "Bekannt für sein Riesenrad."], "hu": ["Itt található a Plázs Siófok, a koncertek központja.", "Híres az óriáskerekér�?l."], "ro": ["G�?zduie�?te Plázs Siófok, un centru pentru concerte.", "Faimoas�? pentru roata sa panoramic�?."], "en": ["Home to Plázs Siófok, a center for concerts.", "Famous for its Ferris wheel."]},
  
    factsAdvanced: {
      "de": ["Siófok besitzt den längsten zusammenhängenden Sandstrand am gesamten Plattensee.", "Der Strand ist der Hauptveranstaltungsort für das jährliche 'Balaton Sound' Rahmenprogramm.", "Von der Mole aus hat man den besten Blick auf die Sonnenuntergänge über dem See.", "Die Wasserqualität wird regelmä�?ig mit der höchsten Auszeichnung prämiert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor-gyerekvonat",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.63, 47.68],
    name: {"de": "Kindereisenbahn Gy�?r", "hu": "Gy�?ri gyerekvonat", "ro": "Trenule�?ul copiilor din Gy�?r", "en": "Gy�?r Children's Train"},
    description: {"de": "Kleine Parkeisenbahn, ein Favorit für Familien in Gy�?r.", "hu": "Gy�?ri kerti vasút, a családok kedvence a püspökvári kertben.", "ro": "Trenule�? de parc, un favorit al familiilor din Gy�?r.", "en": "Small park railway, a favorite for families in Gy�?r."},
    
    descriptionAdvanced: {
      "de": "Die Kindereisenbahn in Gy�?r ist ein charmantes technisches Denkmal und ein beliebtes Ausflugsziel für Familien im Norden Ungarns. In einer idyllischen Waldumgebung gelegen, bietet sie eine nostalgische Fahrt durch das Grüne und vermittelt Kindern spielerisch die Welt der Eisenbahn. Die Wagen und Lokomotiven sind liebevoll gepflegt und erinnern an die Blütezeit der ungarischen Schmalspurbahnen. Entlang der Strecke befinden sich Spielplätze und Picknickareale, die zum Verweilen in der Natur einladen. Für viele Kinder in Gy�?r ist eine Fahrt mit der kleinen Bahn ein unvergessliches Erlebnis und ein fester Bestandteil der regionalen Freizeitkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Fährt durch eine malerische Grünanlage.", "Ein beliebtes Wochenendprogramm."], "hu": ["Fest�?i zöldövezeten halad keresztül.", "Népszerű hétvégi program."], "ro": ["Circul�? printr-o zon�? verde pitoreasc�?.", "Un program popular de weekend."], "en": ["Runs through a scenic green area.", "A popular weekend activity."]},
  
    factsAdvanced: {
      "de": ["Die kleine Eisenbahn in Gy�?r wird oft liebevoll als 'G�?zös' (Dampferchen) bezeichnet.", "Die Strecke führt durch eines der schönsten Waldgebiete am Rande der Stadt.", "Die Bahn ist Teil eines grö�?eren Familienfreizeitparks in Gy�?r.", "Regelmä�?ig finden thematische Sonderfahrten zu Nikolaus oder Ostern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budakeszi-vadaspark",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.91, 47.51],
    name: {"de": "Wildpark Budakeszi", "hu": "Budakeszi Vadaspark", "ro": "Parcul de animale s�?lbatice Budakeszi", "en": "Budakeszi Wildlife Park"},
    description: {"de": "Wildpark in der Nähe von Budapest mit einheimischen Tierarten.", "hu": "Budapest közeli vadaspark �?shonos állatfajokkal.", "ro": "Parc de animale s�?lbatice lâng�? Budapesta cu specii native.", "en": "Wildlife park near Budapest featuring native species."},
    
    descriptionAdvanced: {
      "de": "Der Wildpark Budakeszi am westlichen Stadtrand von Budapest bietet ein authentisches Naturerlebnis im Waldgebirge der Budaer Berge. Hier können Besucher die einheimische Tierwelt des Karpatenbeckens in ihrer natürlichen Umgebung beobachten, von Rothirschen und Wildschweinen bis hin zu Braunbären und Wölfen. Der Park legt gro�?en Wert auf Umweltbildung und bietet interaktive Lehrpfade, die Kindern und Erwachsenen das �?kosystem Wald näherbringen. Ein besonderes Highlight ist der integrierte Abenteuerpark mit Kletterparcours und der Bauernhofbereich mit alten ungarischen Haustierrassen. Der Wildpark ist der ideale Ort für Städter, um Ruhe zu finden und mehr über den Schutz der heimischen Fauna zu erfahren.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bietet Abenteuerparks und Streichelzoo.", "Liegt im wunderschönen Budaer Bergland."], "hu": ["Kalandparkkal és állatsimogatóval is várja a látogatókat.", "A Budai-hegység gyönyörű környezetében fekszik."], "ro": ["Ofer�? parcuri de aventur�? �?i gr�?din�? zoologic�?.", "Situat în frumo�?ii mun�?i Buda."], "en": ["Offers adventure parks and a petting zoo.", "Located in the beautiful Buda Hills."]},
  
    factsAdvanced: {
      "de": ["Der Wildpark Budakeszi beherbergt über 50 verschiedene Tierarten aus Ungarn und Europa.", "Ein Highlight ist die regelmä�?ige Fütterungsshow, bei der Besucher viel über das Verhalten der Tiere lernen.", "Der Park ist Teil eines riesigen Waldgebietes, das als 'Lunge von Budapest' gilt.", "In dem Park befindet sich zudem ein Dino-Park mit lebensgro�?en Modellen prähistorischer Tiere."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszpremi-allatkert",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.89, 47.10],
    name: {"de": "Zoo Veszprém", "hu": "Veszprémi Állatkert", "ro": "Gr�?dina Zoologic�? Veszprém", "en": "Veszprém Zoo"},
    description: {"de": "Einer der schönsten Zoos Ungarns mit weiten Gehegen und Dinopark.", "hu": "Az ország egyik legszebb állatkertje tágas kifutókkal és dinóparkkal.", "ro": "Una dintre cele mai frumoase gr�?dini zoologice din Ungaria cu parc de dinozauri.", "en": "One of the most beautiful zoos in Hungary with spacious enclosures and a dino park."},
    
    descriptionAdvanced: {
      "de": "Der Zoo von Veszprém ist einer der traditionsreichsten und landschaftlich schönsten Tiergärten Ungarns, gelegen im malerischen Fejes-Tal. Er ist bekannt für seine weitläufigen Gehege, die die Tiere in einer naturnahen Umgebung präsentieren, darunter seltene Arten wie den Roten Panda und Afrikanische Nashörner. Besonders spektakulär ist das Giraffenhaus und die weitläufige Savannen-Anlage, die das Gefühl einer Safari vermitteln. Einzigartig ist der integrierte Dinopark mit lebensgro�?en Modellen, der die Erdgeschichte für Kinder lebendig werden lässt. Der Zoo legt gro�?en Wert auf Artenschutzprogramme und ist ein bedeutendes Bildungszentrum in Westungarn. Ein Besuch in Veszprém bietet Erlebnisse für alle Generationen inmitten einer beeindruckenden Mittelgebirgslandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Dinopark zeigt lebensgro�?e Modelle.", "Bekannt für seine Elefanten und Nashörner."], "hu": ["A dinópark élethű modelleket mutat be.", "Híres az elefántjairól és orrszarvúiról."], "ro": ["Parcul de dinozauri prezint�? modele în m�?rime natural�?.", "Cunoscut pentru elefan�?i �?i rinoceri."], "en": ["The dino park features life-sized models.", "Famous for its elephants and rhinos."]},
  
    factsAdvanced: {
      "de": ["Der Veszprémer Zoo wurde bereits im Jahr 1958 als dritter Zoo des Landes eröffnet.", "Der Park beherbergt den grö�?ten Elefanten-Park in ganz Ungarn.", "Vom Zoo aus hat man einen fantastischen Blick auf die Viadukt-Brücke von Veszprém.", "Der Zoo ist ganzjährig geöffnet und bietet auch im Winter spannende Einblicke."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szegedi-vadaspark",
    type: "landmark",
    parent: "HU-CS",
    coords: [20.12, 46.25],
    name: {"de": "Wildpark Szeged", "hu": "Szegedi Vadaspark", "ro": "Gr�?dina Zoologic�? Seghedin", "en": "Szeged Wildlife Park"},
    description: {"de": "Gro�?flächiger Tierpark, der sich auf den Schutz seltener Arten konzentriert.", "hu": "Nagy területű állatpark, amely ritka fajok védelmére összpontosít.", "ro": "Parc zoologic întins, concentrat pe protec�?ia speciilor rare.", "en": "Large-scale wildlife park focused on the protection of rare species."},
    
    descriptionAdvanced: {
      "de": "Der Wildpark Szeged ist der flächenmä�?ig grö�?te Zoo Ungarns und bekannt für seine naturnahe Haltung seltener und gefährdeter Tierarten. In einem weitläufigen Waldgebiet gelegen, bietet er Tieren von fast allen Kontinenten einen Lebensraum, der ihren natürlichen Bedürfnissen entspricht. Ein Schwerpunkt des Parks liegt auf der Haltung südamerikanischer Arten und Raubtiere wie dem Schneeleoparden. Besucher können auf schattigen Wegen durch den Wald wandern und dabei Tiere entdecken, die in anderen Zoos oft nur in engen Gehegen zu sehen sind. Der Wildpark engagiert sich intensiv für internationale Zuchtprogramme und die Wiederauswilderung bedrohter Arten. Die entspannte Atmosphäre und die pädagogisch wertvollen Informationen machen ihn zu einem Top-Ziel im sonnigen Süden Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Grö�?ter Tierpark Ungarns nach Fläche.", "Spezialisiert auf südamerikanische Fauna."], "hu": ["Területileg Magyarország legnagyobb állatkertje.", "Dél-amerikai állatfajokra specializálódott."], "ro": ["Cea mai mare gr�?din�? zoologic�? din Ungaria ca suprafa�?�?.", "Specializat�? pe fauna sud-american�?."], "en": ["The largest zoo in Hungary by area.", "Specializes in South American fauna."]},
  
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
    parent: "HU-VE",
    coords: [17.88, 46.91],
    name: {"de": "Lavendelfelder Tihany", "hu": "Tihanyi levendulamez�?", "ro": "Câmpurile de lavand�? din Tihany", "en": "Tihany Lavender Fields"},
    description: {"de": "Wunderschöne Lavendelfelder, die die Halbinsel Tihany im Juni lila färben.", "hu": "Gyönyörű levendulamez�?k, melyek júniusban lilára festik a félszigetet.", "ro": "Câmpuri superbe de lavand�? care coloreaz�? peninsula în violet în iunie.", "en": "Beautiful lavender fields that turn the peninsula purple in June."},
    
    descriptionAdvanced: {
      "de": "Die Lavendelfelder von Tihany sind ein leuchtendes Symbol der Halbinsel und verwandeln die Landschaft im Frühsommer in ein duftendes violettes Meer. Der Anbau von Lavendel hat in Tihany eine lange Tradition, die auf den Benediktinermönch Gyula Bittera zurückgeht, der den ersten Lavendel im Jahr 1924 aus Frankreich einführte. Durch das vulkanische Gestein und das milde Klima besitzt das Tihanyer Lavendelöl einen au�?ergewöhnlich hohen Gehalt an wertvollen Inhaltsstoffen. Besucher können während der Lavendelwochen im Juni den Lavendel selbst pflücken und im Lavendelhaus-Besucherzentrum alles über die Verarbeitung erfahren. Die blühenden Felder vor der Kulisse des azurblauen Plattensees sind eines der meistfotografierten Motive Ungarns. Tihany ist das 'ungarische Provence' und ein Fest für die Sinne.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat des Lavendelhauses, eines Besucherzentrums.", "Ein Symbol für die Halbinsel Tihany."], "hu": ["Itt található a Levendula Ház látogatóközpont.", "A Tihanyi-félsziget egyik jelképe."], "ro": ["Casa Casei Lavandei, un centru pentru vizitatori.", "Un simbol al peninsulei Tihany."], "en": ["Home to the Lavender House visitor center.", "A symbol of the Tihany Peninsula."]},
  
    factsAdvanced: {
      "de": ["Der Lavendel von Tihany hat aufgrund des Mikroklimas eine höhere Qualität als der ursprüngliche französische Lavendel.", "Die Ernte findet jährlich Ende Juni im Rahmen des gro�?en Lavendel-Festivals statt.", "Aus dem Lavendel werden hochwertige �?le, Seifen, Tees und sogar Liköre hergestellt.", "Die Lavendelfelder stehen aufgrund ihrer Bedeutung für das Landschaftsbild unter Schutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "megyer-hegyi-tengerszem",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.57, 48.34],
    name: {"de": "Megyer-hegy Meerauge", "hu": "Megyer-hegyi tengerszem", "ro": "Ochiul de mare de pe muntele Megyer", "en": "Megyer-hegy Tarn"},
    description: {"de": "Eindrucksvoller Bergsee in einem ehemaligen Mühlsteinbruch.", "hu": "Lenyűgöz�? tó egy egykori malomk�?bánya helyén.", "ro": "Lac montan impresionant în locul unei foste cariere de pietre de moar�?.", "en": "Impressive mountain lake in a former millstone quarry."},
    
    descriptionAdvanced: {
      "de": "Der Megyer-Hegyi Tengerszem (Meerauge vom Megyer-Berg) bei Sárospatak ist eines der faszinierendsten Naturwunder Ungarns. Entstanden in einem ehemaligen Mühlsteinbruch aus dem 15. Jahrhundert, hat sich in dem tiefen Felsenkessel über die Zeit ein kristallklarer Bergsee gebildet. Die senkrecht aufragenden, bis zu 70 Meter hohen Felswände um den See erzeugen eine atemberaubende und fast mystische Kulisse. Ein schmaler Pfad führt Besucher durch die in den Stein gehauenen Gänge bis zum Rand des Sees, von wo aus man die Tiefe und Stille des Ortes erleben kann. Das Gebiet ist heute ein Naturschutzgebiet und wurde 2011 zum schönsten Naturphänomen Ungarns gewählt. Für Wanderer und Naturfotografen ist dieser Ort im Zemplén-Gebirge ein absolutes Muss.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde 2011 zum schönsten Naturwunder Ungarns gewählt.", "Besitzt spektakuläre, 70 Meter hohe Felswände."], "hu": ["2011-ben Magyarország legszebb természeti csodájának választották.", "Látványos, 70 méter magas sziklafalak veszik körül."], "ro": ["Votat cea mai frumoas�? minune natural�? a Ungariei în 2011.", "Are pere�?i de stânc�? spectaculo�?i, înal�?i de 70 de metri."], "en": ["Voted the most beautiful natural wonder of Hungary in 2011.", "Features spectacular 70-meter-high rock walls."]},
  
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
