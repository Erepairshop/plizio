// @ts-nocheck
import type { POI } from "./poi";

export const northmacedoniaCountry: POI = {
  id: "country-mk",
  type: "country",
  parent: "europe",
  coords: [21.7453, 41.6086],
  name: {
    de: "Nordmazedonien",
    hu: "Észak-Macedónia",
    ro: "Macedonia de Nord",
    en: "North Macedonia"
  },
  description: {
    de: "Nordmazedonien ist ein faszinierendes Land auf dem Balkan, bekannt für seine Berge, Seen und reiche Geschichte.",
    hu: "Észak-Macedónia egy lenyűgöző balkáni ország, amely hegyeiről, tavairól és gazdag történelméről ismert.",
    ro: "Macedonia de Nord este o țară fascinantă din Balcani, cunoscută pentru munții, lacurile și istoria sa bogată.",
    en: "North Macedonia is a fascinating Balkan country known for its mountains, lakes, and rich history."
  },
  descriptionAdvanced: {
    de: "Nordmazedonien liegt im Herzen der Balkanhalbinsel und besticht durch eine beeindruckende landschaftliche Vielfalt. Von den hochalpinen Gipfeln der Šar-Berge bis hin zu den jahrtausendealten, kristallklaren Gewässern des Ohridsees bietet das Land eine atemberaubende Kulisse für Naturliebhaber. Historisch ist das Land durch ein reiches Erbe geprägt, das von antiken makedonischen Reichen über byzantinische Klöster bis hin zur osmanischen Ära reicht. Diese kulturelle Schichtung macht Nordmazedonien zu einem einzigartigen Reiseziel für Entdecker. Geografie K7 — Gebirge und Gewässer auf dem Balkan.",
    hu: "Észak-Macedónia a Balkán-félsziget szívében fekszik, és lenyűgöző természeti sokszínűséggel büszkélkedhet. A Šar-hegység alpesi csúcsaitól kezdve az Ohridi-tó évezredes, kristálytiszta vizéig az ország lélegzetelállító hátteret kínál a természet kedvelőinek. Történelmileg gazdag örökség jellemzi, az ősi makedón királyságoktól a bizánci kolostorokon át az oszmán korszakig. Ez a kulturális rétegzettség egyedülálló úti céllá teszi az országot a felfedezők számára. Földrajz K7 — A Balkán hegységei és vizei.",
    ro: "Macedonia de Nord este situată în inima Peninsulei Balcanice și impresionează prin diversitatea sa peisagistică remarcabilă. De la vârfurile alpine ale Munților Šar până la apele cristaline de milenii ale Lacului Ohrid, țara oferă un fundal uimitor pentru iubitorii de natură. Din punct de vedere istoric, țara este marcată de o moștenire bogată, care se întinde de la anticul regat macedonean la mănăstirile bizantine și până la epoca otomană. Această stratificare culturală face din Macedonia de Nord o destinație unică pentru exploratori. Geografie K7 — Munți și ape în Balcani.",
    en: "North Macedonia is a landlocked gem in the heart of the Balkans, characterized by its rugged mountain ranges and ancient lake basins. It serves as a crossroads of civilizations, where Illyrian, Roman, Byzantine, and Ottoman influences converge to create a uniquely rich cultural landscape. Visitors are often captivated by the contrast between its bustling, modern capital and the serene, timeless beauty of its UNESCO-protected natural sites. The country's terrain is dominated by high-altitude plateaus and deep valleys, making it an outdoor enthusiast's paradise. It is a place where history is etched into the very stones of its ancient monasteries and historic city centers. Geography K7 — Balkan mountains and hydrological systems."
  },
  facts: {
    de: ["Ohridsee gehört zum UNESCO-Welterbe.", "Mutter Teresa wurde in Skopje geboren."],
    hu: ["Az Ohridi-tó az UNESCO Világörökség része.", "Teréz anya Szkopjéban született."],
    ro: ["Lacul Ohrid face parte din Patrimoniul Mondial UNESCO.", "Maica Tereza s-a născut la Skopje."],
    en: ["Lake Ohrid is a UNESCO World Heritage site.", "Mother Teresa was born in Skopje."]
  },
  factsAdvanced: {
    de: [
      "Der Ohridsee ist einer der ältesten und tiefsten Seen Europas.",
      "Die Hauptstadt Skopje hat eine Geschichte, die bis in die Antike zurückreicht.",
      "Das Land verfügt über mehr als 34 Berge, die über 2000 Meter hoch sind.",
      "Die Kokino-Sternwarte gilt als eines der ältesten megalithischen Observatorien weltweit."
    ],
    hu: [
      "Az Ohridi-tó Európa egyik legrégebbi és legmélyebb tava.",
      "Szkopje főváros történelme egészen az ókorig nyúlik vissza.",
      "Az országban több mint 34 hegycsúcs haladja meg a 2000 méteres magasságot.",
      "A Kokino csillagvizsgáló a világ egyik legrégebbi megalitikus obszervatóriuma."
    ],
    ro: [
      "Lacul Ohrid este unul dintre cele mai vechi și mai adânci lacuri din Europa.",
      "Capitala Skopje are o istorie care datează din antichitate.",
      "Țara are peste 34 de munți care depășesc 2000 de metri înălțime.",
      "Observatorul Kokino este considerat unul dintre cele mai vechi observatoare megalitice din lume."
    ],
    en: [
      "Lake Ohrid is recognized as one of the world's oldest and deepest lakes, supporting thousands of endemic species.",
      "The Kokino archaeological site, dating back to 1800 BC, served as a sophisticated prehistoric solar observatory.",
      "North Macedonia's mountainous landscape features over 34 peaks that exceed an elevation of 2,000 meters.",
      "The country's history is deeply intertwined with the development of the Cyrillic alphabet, which was fostered by students of Saints Cyril and Methodius."
    ]
  }
};

export const northmacedoniaPois: POI[] = [
  northmacedoniaCountry,
  {
    id: "city-skopje",
    type: "city",
    parent: "country-mk",
    coords: [21.4314, 42.0024],
    name: { de: "Skopje", hu: "Szkopje", ro: "Skopje", en: "Skopje" },
    description: {
      de: "Skopje ist die Hauptstadt und größte Stadt Nordmazedoniens.",
      hu: "Szkopje Észak-Macedónia fővárosa és legnagyobb városa.",
      ro: "Skopje este capitala și cel mai mare oraș din Macedonia de Nord.",
      en: "Skopje is the capital and largest city of North Macedonia."
    },
    descriptionAdvanced: {
      de: "Skopje präsentiert eine faszinierende Mischung aus osmanischem Erbe und moderner Architektur. Die Stadt am Fluss Vardar wurde durch das Erdbeben von 1963 stark geprägt, was zu ihrem einzigartigen Stadtbild führte. Sie dient als wichtiges kulturelles Zentrum des Landes. Geografie K7 — Flüsse und Städte in Südosteuropa.",
      hu: "Szkopje az oszmán örökség és a modern építészet lenyűgöző keverékét mutatja be. A Vardar folyó mentén fekvő várost az 1963-as földrengés mélyen meghatározta, ami hozzájárult egyedülálló városképéhez. Az ország legfontosabb kulturális központjaként szolgál. Földrajz K7 — Délkelet-Európa folyói és városai.",
      ro: "Skopje prezintă un amestec fascinant de moștenire otomană și arhitectură modernă. Orașul de pe râul Vardar a fost marcat profund de cutremurul din 1963, ceea ce a dus la aspectul său urban unic. Acesta servește ca un centru cultural important al țării. Geografie K7 — Râuri și orașe din Europa de Sud-Est.",
      en: "Skopje, the vibrant capital, stands at the crossroads of history and modernity. Divided by the Vardar River, the city showcases a stark contrast between its Ottoman-era Old Bazaar and the imposing monuments of the city center. Following the devastating earthquake of 1963, Skopje underwent a massive reconstruction, blending various architectural styles into a unique urban identity. It acts as the nation's cultural and political heart, continuously evolving while honoring its layered heritage. Geography K7 — Urban centers and river geography."
    },
    factsAdvanced: {
      de: [
        "Die Steinbrücke (Kameni Most) ist das Wahrzeichen der Stadt.",
        "Der Matka-Canyon liegt nur 15 km außerhalb des Zentrums.",
        "Skopje beherbergt eine der ältesten Festungen des Balkans.",
        "Der Vardar-Fluss teilt die Stadt in eine osmanische Altstadt und einen modernen Teil.",
        "Das Erdbeben von 1963 zerstörte fast 80 % der Stadt."
      ],
      hu: [
        "A Kőhíd (Kameni Most) a város legfőbb jelképe.",
        "A Matka-kanyon mindössze 15 km-re található a központtól.",
        "Szkopjéban található a Balkán egyik legrégebbi erődítménye.",
        "A Vardar folyó választja ketté az oszmán óvárost és a modern városrészt.",
        "Az 1963-as földrengés a város közel 80%-át elpusztította."
      ],
      ro: [
        "Podul de Piatră (Kameni Most) este simbolul orașului.",
        "Canionul Matka este situat la doar 15 km de centru.",
        "Skopje găzduiește una dintre cele mai vechi fortărețe din Balcani.",
        "Râul Vardar împarte orașul într-un oraș vechi otoman și o parte modernă.",
        "Cutremurul din 1963 a distrus aproape 80% din oraș."
      ],
      en: [
        "The iconic Stone Bridge, dating back to the 15th century, serves as the main link between the Old Bazaar and the modern city.",
        "Matka Canyon, a spectacular gorge located just 15 km from the center, features deep caves and historic monasteries.",
        "The Skopje Fortress, or Kale, has overlooked the city since the 6th century.",
        "The devastating 1963 earthquake resulted in the loss of nearly 80% of the city's architectural fabric, leading to a radical urban transformation.",
        "Skopje is the birthplace of Mother Teresa, and a dedicated memorial house marks her legacy in the city center."
      ]
    }
  },
  {
    id: "city-bitola",
    type: "city",
    parent: "country-mk",
    coords: [21.3347, 41.0314],
    name: { de: "Bitola", hu: "Bitola", ro: "Bitola", en: "Bitola" },
    description: {
      de: "Bitola ist eine der ältesten Städte des Landes und bekannt für ihre osmanische Architektur.",
      hu: "Bitola az ország egyik legrégebbi városa, ismert oszmán építészetéről.",
      ro: "Bitola este unul dintre cele mai vechi orașe din țară și cunoscut pentru arhitectura sa otomană.",
      en: "Bitola is one of the oldest cities in the country, known for its Ottoman architecture."
    },
    descriptionAdvanced: {
      de: "Bitola wird oft als die 'Stadt der Konsuln' bezeichnet, da sie während der osmanischen Zeit diplomatische Zentren beherbergte. Die Architektur spiegelt eine Mischung aus Tradition und dem europäischen Einfluss des 19. Jahrhunderts wider. In der Nähe befinden sich die beeindruckenden antiken Ruinen von Heraclea Lyncestis. Ein Bummel durch die berühmte Širok-Sokak-Fußgängerzone ist ein absolutes Muss für Besucher. Geschichte K8 — Diplomatie im Osmanischen Reich.",
      hu: "Bitolát gyakran a 'konzulok városaként' emlegetik, mivel az oszmán időkben fontos diplomáciai központ volt. Építészete a hagyományok és a 19. századi európai hatások keveredését tükrözi. A közelben találhatók Heraclea Lyncestis lenyűgöző ókori romjai. A híres Širok-Sokak sétálóutcán való séta minden látogató számára kötelező. Történelem K8 — Diplomácia az Oszmán Birodalomban.",
      ro: "Bitola este adesea numit 'Orașul Consulilor', deoarece a găzduit centre diplomatice importante în perioada otomană. Arhitectura sa reflectă un amestec de tradiție și influențe europene ale secolului al XIX-lea. În apropiere se află impresionantele ruine antice ale orașului Heraclea Lyncestis. O plimbare pe celebra stradă pietonală Širok-Sokak este o experiență obligatorie pentru vizitatori. Istorie K8 — Diplomația în Imperiul Otoman.",
      en: "Known as the 'City of Consuls,' Bitola served as a vital diplomatic hub during the Ottoman era, leaving a legacy of elegant 19th-century architecture. Its vibrant Širok Sokak pedestrian street is a testament to the city's cosmopolitan history, blending traditional Balkan charm with European refinement. Just outside the city, the ancient ruins of Heraclea Lyncestis offer a glimpse into its Roman past, featuring remarkably well-preserved mosaics. Bitola remains a cultural jewel, offering a unique perspective on the region's complex historical narrative. History K8 — Diplomacy in the Ottoman Empire."
    },
    factsAdvanced: {
      de: [
        "Die antike Stadt Heraclea Lyncestis liegt am Stadtrand.",
        "Bitola war ein wichtiges diplomatisches Zentrum der Osmanen.",
        "Die Stadt beherbergt eine beeindruckende Uhrturm-Architektur.",
        "Der Pelister-Nationalpark bietet von der Stadt aus einen direkten Zugang zur Natur."
      ],
      hu: [
        "Heraclea Lyncestis ókori városa a külvárosban található.",
        "Bitola fontos diplomáciai központ volt az oszmán időkben.",
        "A város lenyűgöző óratorony-építészettel rendelkezik.",
        "A Pelister Nemzeti Park közvetlen kapcsolatot biztosít a természettel a városból."
      ],
      ro: [
        "Orașul antic Heraclea Lyncestis se află la periferie.",
        "Bitola a fost un centru diplomatic important pentru otomani.",
        "Orașul găzduiește o arhitectură impresionantă a turnului cu ceas.",
        "Parcul Național Pelister oferă acces direct la natură din oraș."
      ],
      en: [
        "Bitola earned its moniker 'City of Consuls' by hosting numerous European diplomatic missions during the Ottoman period.",
        "The ancient site of Heraclea Lyncestis, founded by Philip II of Macedon, showcases some of the best preserved Roman floor mosaics in the region.",
        "The city's famous clock tower, a symbol of Bitola, is a landmark that has stood for centuries.",
        "Pelister National Park, located nearby, is known for its unique Molika pine forests and diverse wildlife.",
        "Širok Sokak, the main pedestrian thoroughfare, is famous for its lively cafe culture and historic facades."
      ]
    }, image: "/poi-images/city-bitola.webp"},
  {
    id: "city-ohrid",
    type: "city",
    parent: "country-mk",
    coords: [20.8016, 41.1172],
    name: { de: "Ohrid", hu: "Ohrid", ro: "Ohrid", en: "Ohrid" },
    description: {
      de: "Ohrid ist das touristische Zentrum am Ohridsee, mit 365 Kirchen in der Vergangenheit.",
      hu: "Ohrid a turizmus központja az Ohridi-tó partján, régen 365 templommal.",
      ro: "Ohrid este centrul turistic pe Lacul Ohrid, cu 365 de biserici în trecut.",
      en: "Ohrid is the tourist hub on Lake Ohrid, historically having 365 churches."
    },
    descriptionAdvanced: {
      de: "Ohrid gilt als eines der ältesten menschlichen Siedlungsgebiete in Europa und ist für seine spirituelle Geschichte bekannt. Die Stadt war einst ein bedeutendes Zentrum der slawischen Kultur und des Christentums, mit unzähligen Kirchen und Klöstern, die in die UNESCO-Welterbeliste aufgenommen wurden. Die malerische Altstadt liegt direkt am tiefblauen Ohridsee. Geschichtsunterricht K8 — Zentrum der slawischen Schriftkultur.",
      hu: "Ohrid Európa egyik legrégebbi lakott települése, amely spirituális történelméről ismert. A város egykor a szláv kultúra és a kereszténység jelentős központja volt, számtalan templommal és kolostorral, amelyeket felvettek az UNESCO Világörökség listájára. A festői óváros közvetlenül a mélykék Ohridi-tó partján fekszik. Történelem K8 — A szláv íráskultúra központja.",
      ro: "Ohrid este considerat una dintre cele mai vechi așezări umane din Europa și este cunoscut pentru istoria sa spirituală. Orașul a fost cândva un centru semnificativ al culturii slave și al creștinismului, cu nenumărate biserici și mănăstiri care au fost incluse pe lista Patrimoniului Mondial UNESCO. Orașul vechi pitoresc se află chiar pe malul albastru profund al Lacului Ohrid. Istorie K8 — Centrul culturii scrise slave.",
      en: "Ohrid is a treasure trove of spiritual history, perched elegantly above the ancient, deep waters of Lake Ohrid. Once known for having 365 churches—one for every day of the year—it remains a vital center of Christian heritage and Slavic literacy. Its stunning medieval architecture, including the cliff-hanging Church of St. John at Kaneo, has earned it a well-deserved place on the UNESCO World Heritage list. The blend of serene lakeside vistas and profound historical legacy makes it a unique destination. History K8 — Center of Slavic written culture."
    },
    factsAdvanced: {
      de: [
        "Ohrid war die Heimat des heiligen Kliment, eines Schülers von Kyrill und Method.",
        "Die Stadt beherbergt die berühmte St. Johannes-Kirche in Kaneo.",
        "Ohridsee ist einer der ältesten Seen der Welt.",
        "Historisch wird oft von 365 Kirchen gesprochen, eine für jeden Tag des Jahres."
      ],
      hu: [
        "Ohrid Szent Kliment, Cirill és Metód tanítványának szülőhelye.",
        "Itt található a híres Szent János-templom Kaneóban.",
        "Az Ohridi-tó a világ egyik legrégebbi tava.",
        "Történelmileg gyakran 365 templomról beszélnek, az év minden napjára egyről."
      ],
      ro: [
        "Ohrid a fost casa Sfântului Clement, un discipol al lui Chiril și Metodiu.",
        "Orașul găzduiește celebra biserică Sfântul Ioan din Kaneo.",
        "Lacul Ohrid este unul dintre cele mai vechi lacuri din lume.",
        "Din punct de vedere istoric, se vorbește des despre 365 de biserici, câte una pentru fiecare zi a anului."
      ],
      en: [
        "Ohrid served as the cradle of Slavic literacy, established by the disciples of Cyril and Methodius, Saint Clement and Saint Naum.",
        "Lake Ohrid is among Europe's oldest lakes, known for its unique ecosystem and remarkably clear, deep waters.",
        "The Church of St. John at Kaneo is one of the most photographed structures in the country due to its stunning clifftop setting.",
        "Ohrid is often cited for its historical wealth of 365 churches, reflecting the depth of its religious importance.",
        "The city's ancient theater, dating back to the Hellenistic period, is still used for cultural performances today."
      ]
    }, image: "/poi-images/city-ohrid.webp"},
  {
    id: "city-tetovo",
    type: "city",
    parent: "country-mk",
    coords: [20.9716, 42.0069],
    name: { de: "Tetovo", hu: "Tetovo", ro: "Tetovo", en: "Tetovo" },
    description: {
      de: "Tetovo liegt am Fuße der Šar-Berge und ist für die Bunte Moschee bekannt.",
      hu: "Tetovo a Šar-hegység lábánál fekszik, és a Festett mecsetről ismert.",
      ro: "Tetovo este situat la poalele Munților Šar și renumit pentru Moscheea Pictată.",
      en: "Tetovo lies at the foot of the Šar Mountains and is known for the Painted Mosque."
    },
    descriptionAdvanced: {
      de: "Tetovo ist ein kulturell vielfältiges Zentrum, das stark von osmanischen Einflüssen und albanischer Tradition geprägt ist. Die berühmte 'Bunte Moschee' (Šarena Džamija) ist eines der bemerkenswertesten Beispiele osmanischer Architektur in der Region und zieht Besucher mit ihren kunstvollen Wandmalereien an. Die Stadt liegt am Fuße des Šar-Gebirges und ist ein hervorragender Ausgangspunkt für Bergwanderungen. Sachkunde K5 — Architektur der Weltreligionen.",
      hu: "Tetovo kulturálisan változatos központ, amelyet erősen befolyásoltak az oszmán hatások és az albán hagyományok. A híres 'Festett mecset' (Šarena Džamija) a régió egyik legfigyelemreméltóbb oszmán építészeti példája, amely művészi falfestményeivel vonzza a látogatókat. A város a Šar-hegység lábánál fekszik, és kiváló kiindulópont hegyi túrákhoz. Sachkunde K5 — A világvallások építészete.",
      ro: "Tetovo este un centru cultural divers, puternic influențat de tradițiile otomane și albaneze. Celebra 'Moschee Pictată' (Šarena Džamija) este unul dintre cele mai remarcabile exemple de arhitectură otomană din regiune și atrage vizitatorii prin picturile sale murale artistice. Orașul este situat la poalele Munților Šar și reprezintă un punct de plecare excelent pentru drumeții montane. Sachkunde K5 — Arhitectura religiilor lumii.",
      en: "Tetovo is a dynamic city where cultural diversity and rich history meet at the foothills of the rugged Šar Mountains. It is most famous for the Sarena Dzamija, or 'Painted Mosque,' a 15th-century architectural marvel adorned with intricate, vibrant frescoes that are rare in Islamic art. The city serves as an essential center for the region's Albanian community and acts as a gateway to the high-altitude trails of the Šar peaks. Its unique character is shaped by a fusion of Ottoman traditions and local customs. Sachkunde K5 — Architecture of world religions."
    },
    factsAdvanced: {
      de: [
        "Die Bunte Moschee wurde im 15. Jahrhundert erbaut.",
        "Tetovo liegt nahe dem Skigebiet Popova Šapka.",
        "Die Stadt beherbergt das Arabati-Baba-Tekke, ein Derwischkloster.",
        "Der Fluss Pena durchquert die Stadt."
      ],
      hu: [
        "A Festett mecsetet a 15. században építették.",
        "Tetovo közel fekszik a Popova Šapka síközponthoz.",
        "A város ad otthont az Arabati Baba Tekkának, egy derviskolostornak.",
        "A Pena folyó keresztezi a várost."
      ],
      ro: [
        "Moscheea Pictată a fost construită în secolul al XV-lea.",
        "Tetovo se află aproape de stațiunea de schi Popova Šapka.",
        "Orașul găzduiește Arabati Baba Tekke, o mănăstire dervișă.",
        "Râul Pena traversează orașul."
      ],
      en: [
        "The Sarena Dzamija (Painted Mosque) is famous for its rare and highly detailed floral and landscape frescoes.",
        "Tetovo provides primary access to the Popova Sapka ski resort, one of the most popular winter destinations in the country.",
        "The Arabati Baba Tekke is a well-preserved complex that served as a significant center for the Bektashi Dervish order.",
        "The Pena river splits the city as it flows down from the surrounding mountain heights.",
        "Tetovo is a key hub for education and culture within the northwestern part of the country."
      ]
    }, image: "/poi-images/city-tetovo.webp"},
  {
    id: "city-kumanovo",
    type: "city",
    parent: "country-mk",
    coords: [21.7161, 42.1322],
    name: { de: "Kumanovo", hu: "Kumanovo", ro: "Kumanovo", en: "Kumanovo" },
    description: {
      de: "Kumanovo ist eine bedeutende Industriestadt im Norden.",
      hu: "Kumanovo fontos iparváros északon.",
      ro: "Kumanovo este un oraș industrial important din nord.",
      en: "Kumanovo is an important industrial city in the north."
    },
    descriptionAdvanced: {
      de: "Kumanovo ist eine der größten Städte Nordmazedoniens und ein wichtiger Verkehrsknotenpunkt im Norden des Landes. Die Stadt ist für ihre reiche industrielle Geschichte und ihre lebendige kulturelle Gemeinschaft bekannt. In der Nähe befinden sich bedeutende archäologische Stätten wie die antike Sternwarte Kokino. Die Stadt bietet einen guten Einblick in das moderne städtische Leben der Region. Sachkunde K6 — Industrie in der Region.",
      hu: "Kumanovo Észak-Macedónia egyik legnagyobb városa és az ország északi részének fontos közlekedési csomópontja. A város gazdag ipari történelméről és élénk kulturális közösségéről ismert. A közelben jelentős régészeti lelőhelyek találhatók, mint például az ókori Kokino csillagvizsgáló. A város jó betekintést nyújt a régió modern városi életébe. Sachkunde K6 — Ipar a régióban.",
      ro: "Kumanovo este unul dintre cele mai mari orașe din Macedonia de Nord și un nod de transport important în nordul țării. Orașul este cunoscut pentru istoria sa industrială bogată și comunitatea sa culturală vibrantă. În apropiere se află situri arheologice semnificative, cum ar fi anticul observator Kokino. Orașul oferă o perspectivă bună asupra vieții urbane moderne din regiune. Sachkunde K6 — Industrie în regiune.",
      en: "Kumanovo stands as a pivotal industrial and transport hub in the north of North Macedonia. With a rich history that bridges diverse cultural influences, the city maintains a lively, urban character and a strong community spirit. Just a short journey away lies the prehistoric site of Kokino, one of the world's oldest megalithic observatories. The city is a reflection of the country's economic past and its ongoing efforts to integrate industrial heritage with modern development. Sachkunde K6 — Regional industry."
    },
    factsAdvanced: {
      de: [
        "Kokino, eine antike Sternwarte, liegt in der Nähe von Kumanovo.",
        "Die Stadt hat eine vielfältige ethnische Bevölkerung.",
        "Kumanovo liegt an der Hauptroute zwischen Skopje und Serbien.",
        "Die Region ist historisch für den Widerstand gegen das Osmanische Reich bekannt."
      ],
      hu: [
        "Kokino, az ókori csillagvizsgáló Kumanovo közelében található.",
        "A város etnikailag sokszínű lakossággal rendelkezik.",
        "Kumanovo a Szkopje és Szerbia közötti főútvonalon fekszik.",
        "A régió történelmileg ismert az Oszmán Birodalommal szembeni ellenállásról."
      ],
      ro: [
        "Kokino, un observator antic, se află în apropiere de Kumanovo.",
        "Orașul are o populație etnică diversă.",
        "Kumanovo este situat pe ruta principală dintre Skopje și Serbia.",
        "Regiunea este cunoscută istoric pentru rezistența împotriva Imperiului Otoman."
      ],
      en: [
        "Kokino, located near Kumanovo, is a major archaeological site recognized for its ancient astronomical alignment.",
        "Kumanovo serves as a critical junction on the main international road and rail routes between Skopje and the Serbian border.",
        "The city reflects a unique demographic blend, contributing to its vibrant local culture and customs.",
        "The local region has historically played a significant role in various national resistance movements.",
        "Today, Kumanovo remains a center of industrial output and service-based economic activity."
      ]
    }
  }
];

