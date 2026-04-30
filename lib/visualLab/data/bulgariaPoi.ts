import type { POI } from "./poi";
export const bulgariaAllPoi: POI[] = [
  {
    id: "bg-country",
    type: "country",
    coords: [25.4858, 42.7339],
    name: {
      de: "Bulgarien",
      hu: "Bulgária",
      ro: "Bulgaria",
      en: "Bulgaria"
    },
    description: {
      de: "Bulgarien ist ein Land auf der Balkanhalbinsel, bekannt für seine vielfältige Landschaft, antike Geschichte und die wunderschöne Schwarzmeerküste.",
      hu: "Bulgária a Balkán-félszigeten fekvő ország, amely változatos tájairól, ősi történelméről és a gyönyörű fekete-tengeri partvidékéről ismert.",
      ro: "Bulgaria este o țară din Peninsula Balcanică, cunoscută pentru peisajele sale diverse, istoria antică și frumoasa coastă a Mării Negre.",
      en: "Bulgaria is a country on the Balkan Peninsula, known for its diverse landscapes, ancient history, and the beautiful Black Sea coast."
    },
    descriptionAdvanced: {
      de: "Bulgarien, am östlichen Rand der Balkanhalbinsel gelegen, ist ein Land von außergewöhnlicher geografischer und kultureller Vielfalt. Es grenzt im Norden an Rumänien, im Westen an Serbien und Nordmazedonien, im Süden an Griechenland und die Türkei und im Osten an das Schwarze Meer. Die Landschaft wird durch zwei große Gebirgsketten geprägt: das Balkangebirge (Stara Planina), das sich quer durch das Land zieht, und die Rhodopen im Süden, ergänzt durch die alpinen Massive von Rila und Pirin. Bulgarien ist eines der ältesten Länder Europas und bewahrt eine Geschichte, die von thrakischen, römischen, byzantinischen und osmanischen Einflüssen geprägt ist. Die Hauptstadt Sofia ist ein lebendiges Zentrum, in dem antike Ruinen neben moderner Architektur stehen. Die Schwarzmeerküste lockt mit goldenen Sandstränden und historischen Hafenstädten wie Warna und Burgas. Kulturell ist Bulgarien für seine einzigartige Folklore, die orthodoxen Klöster – allen voran das Rila-Kloster – und seine Rosenölproduktion weltberühmt. Das Land bietet ideale Bedingungen für Wandern, Skifahren und Strandurlaub. Mit einer reichen kulinarischen Tradition, die frisches Gemüse, Joghurt und exzellente Weine betont, ist Bulgarien ein Ziel für Entdecker und Genießer gleichermaßen. Die wirtschaftliche Entwicklung konzentriert sich auf Tourismus, Landwirtschaft und zunehmend auf den IT-Sektor. Bulgarien ist Mitglied der EU und der NATO und arbeitet stetig an seiner Modernisierung, während es seine tief verwurzelten Traditionen pflegt.",
      hu: "Bulgária a Balkán-félsziget keleti részén fekvő ország, amely rendkívüli földrajzi és kulturális sokszínűségéről ismert. Északon Romániával, nyugaton Szerbiával és Észak-Macedóniával, délen Görögországgal és Törökországgal, keleten pedig a Fekete-tengerrel határos. Tájait két nagy hegylánc határozza meg: az országon végighúzódó Balkán-hegység (Sztara Planina) és a déli Rodope-hegység, kiegészülve a Rila és a Pirin alpesi masszívumaival. Bulgária Európa egyik legrégebbi állama, történelmét trák, római, bizánci és oszmán hatások formálták. Fővárosa, Szófia, egy lüktető központ, ahol az ókori romok modern épületek mellett láthatók. A Fekete-tenger partvidéke aranyhomokos strandokkal és olyan történelmi kikötővárosokkal vonzza a látogatókat, mint Várna és Burgasz. Kulturális szempontból Bulgária világhírű egyedülálló folklórjáról, ortodox kolostorairól – mindenekelőtt a Rilai kolostorról – és rózsaolaj-termeléséről. Az ország ideális feltételeket kínál túrázáshoz, síeléshez és tengerparti nyaraláshoz egyaránt. Gazdag kulináris hagyományai, amelyek a friss zöldségekre, a joghurtra és a kiváló borokra épülnek, a felfedezők és az ínyencek kedvelt célpontjává teszik. A gazdasági fejlődés a turizmusra, a mezőgazdaságra és egyre inkább az informatikai szektorra összpontosul. Bulgária az Európai Unió és a NATO tagja, folyamatosan modernizálódik, miközben büszkén őrzi mélyen gyökerező hagyományait.",
      ro: "Bulgaria, situată la marginea estică a Peninsulei Balcanice, este o țară cu o diversitate geografică și culturală excepțională. Se învecinează la nord cu România, la vest cu Serbia și Macedonia de Nord, la sud cu Grecia și Turcia, iar la est cu Marea Neagră. Peisajul este dominat de două lanțuri muntoase majore: Munții Balcani (Stara Planina), care traversează țara, și Munții Rodopi în sud, completați de masivele alpine Rila și Pirin. Bulgaria este una dintre cele mai vechi țări din Europa, păstrând o istorie marcată de influențe trace, romane, bizantine și otomane. Capitala Sofia este un centru vibrant unde ruinele antice stau alături de arhitectura modernă. Coasta Mării Negre atrage vizitatori cu plaje de nisip auriu și orașe portuare istorice precum Varna și Burgas. Din punct de vedere cultural, Bulgaria este renumită în întreaga lume pentru folclorul său unic, mănăstirile ortodoxe – în special Mănăstirea Rila – și producția de ulei de trandafir. Țara oferă condiții ideale pentru drumeții, schi și vacanțe la malul mării. Cu o tradiție culinară bogată, care pune accent pe legume proaspete, iaurt și vinuri excelente, Bulgaria este o destinație atât pentru exploratori, cât și pentru gurmanzi. Dezvoltarea economică se concentrează pe turism, agricultură și, tot mai mult, pe sectorul IT. Bulgaria este membră a UE și NATO, lucrând constant la modernizarea sa, în timp ce își păstrează tradițiile adânc înrădăcinate.",
      en: "Bulgaria, situated on the eastern edge of the Balkan Peninsula, is a nation of extraordinary geographical and cultural diversity. It shares borders with Romania to the north, Serbia and North Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. The landscape is defined by two major mountain ranges: the Balkan Mountains (Stara Planina), which stretch across the country, and the Rhodope Mountains in the south, complemented by the alpine massifs of Rila and Pirin. Bulgaria is one of the oldest countries in Europe, preserving a history shaped by Thracian, Roman, Byzantine, and Ottoman influences. The capital, Sofia, is a vibrant hub where ancient ruins stand alongside modern architecture. The Black Sea coastline attracts visitors with golden sandy beaches and historic port cities like Varna and Burgas. Culturally, Bulgaria is world-renowned for its unique folklore, Orthodox monasteries—most notably the Rila Monastery—and its rose oil production. The country offers ideal conditions for hiking, skiing, and seaside holidays alike. With a rich culinary tradition emphasizing fresh vegetables, yogurt, and excellent wines, Bulgaria is a destination for explorers and gourmets. Economic development focuses on tourism, agriculture, and increasingly the IT sector. Bulgaria is a member of the EU and NATO, steadily modernizing while cherishing its deep-rooted traditions."
    },
    facts: {
      de: ["Hauptstadt: Sofia", "Währung: Lew (BGN)", "Bevölkerung: ca. 6,4 Millionen", "Höchster Punkt: Musala (2925 m)", "UNESCO-Welterbestätten: 10", "Gründungsjahr: 681 n. Chr.", "Größter Fluss: Donau (Grenzfluss)", "Wichtigstes Exportgut: Rosenöl", "Amtssprache: Bulgarisch", "Zeitzone: EET (UTC+2)"],
      hu: ["Főváros: Szófia", "Pénznem: Bolgár leva (BGN)", "Népesség: kb. 6,4 millió", "Legmagasabb pont: Muszala (2925 m)", "UNESCO világörökségi helyszínek: 10", "Alapítás éve: i. sz. 681", "Legnagyobb folyó: Duna (határfolyó)", "Legfontosabb exportcikk: Rózsaolaj", "Hivatalos nyelv: Bolgár", "Időzóna: EET (UTC+2)"],
      ro: ["Capitala: Sofia", "Moneda: Leva bulgară (BGN)", "Populație: aprox. 6,4 milioane", "Cel mai înalt punct: Musala (2925 m)", "Situri UNESCO: 10", "Anul fondării: 681 d.Hr.", "Cel mai mare râu: Dunărea (frontieră)", "Principalul produs de export: Ulei de trandafir", "Limba oficială: Bulgară", "Fus orar: EET (UTC+2)"],
      en: ["Capital: Sofia", "Currency: Bulgarian Lev (BGN)", "Population: approx. 6.4 million", "Highest point: Musala (2,925 m)", "UNESCO World Heritage sites: 10", "Year of foundation: 681 AD", "Largest river: Danube (border river)", "Key export: Rose oil", "Official language: Bulgarian", "Time zone: EET (UTC+2)"]
    },
    image: "/images/visualLab/bulgaria/country.jpg"
  },
  {
    id: "bg-bansko",
    type: "city",
    parent: "bg-country",
    coords: [23.4857, 41.8383],
    name: {
      de: "Bansko",
      hu: "Banszko",
      ro: "Bansko",
      en: "Bansko"
    },
    description: {
      de: "Bansko, am Fuße des Pirin-Gebirges gelegen, ist Bulgariens führendes Wintersportzentrum und ein charmantes Reiseziel das ganze Jahr über. Die Stadt verbindet eine historische Altstadt mit kopfsteingepflasterten Gassen und traditionellen Steinhäusern mit modernster Skiausrüstung und luxuriösen Hotels. Bansko ist bekannt für seine langen und gut präparierten Pisten, die sowohl Anfänger als auch Profis anziehen. Im Sommer dient die Stadt als idealer Ausgangspunkt für Wanderungen und Mountainbike-Touren im Nationalpark Pirin. Die lokale Gastronomie in den typischen „Mehanas“ bietet herzhafte bulgarische Spezialitäten in gemütlicher Atmosphäre. Bansko hat sich zudem zu einem beliebten Ort für digitale Nomaden entwickelt, was der Stadt ein internationales und dynamisches Flair verleiht. Die Mischung aus alpiner Natur, reicher Geschichte und moderner Infrastruktur macht Bansko zu einem der vielseitigsten Urlaubsziele auf dem Balkan.",
      hu: "Banszko, a Pirin-hegység lábánál fekvő város, Bulgária vezető téli sportközpontja és egész évben vonzó úti cél. A város ötvözi a történelmi óvárost macskaköves utcáival és hagyományos kőházaival a legmodernebb sífelszerelésekkel és luxusszállodákkal. Banszko híres hosszú és jól karbantartott pályáiról, amelyek kezdőket és profikat egyaránt vonzanak. Nyáron a város ideális kiindulópont a Pirin Nemzeti Parkban tett túrákhoz és hegyi kerékpáros túrákhoz. A tipikus „mehanákban” (vendéglőkben) a helyi gasztronómia kiadós bolgár specialitásokat kínál hangulatos környezetben. Banszko emellett a digitális nomádok kedvelt helyévé is vált, ami nemzetközi és dinamikus hangulatot kölcsönöz a városnak. Az alpesi természet, a gazdag történelem és a modern infrastruktúra keveréke Banszkót a Balkán egyik legsokoldalúbb üdülőhelyévé teszi.",
      ro: "Bansko, situat la poalele Munților Pirin, este cel mai important centru de sporturi de iarnă din Bulgaria și o destinație fermecătoare pe tot parcursul anului. Orașul îmbină un centru istoric cu străzi pietruite și case tradiționale din piatră cu echipamente de schi de ultimă generație și hoteluri de lux. Bansko este cunoscut pentru pârtiile sale lungi și bine întreținute, care atrag atât începători, cât și profesioniști. Vara, orașul servește ca punct de plecare ideal pentru drumeții și tururi cu bicicleta de munte în Parcul Național Pirin. Gastronomia locală din tipicele „mehana” oferă specialități bulgărești consistente într-o atmosferă primitoare. Bansko a devenit, de asemenea, un loc popular pentru nomazii digitali, ceea ce conferă orașului un fler internațional și dinamic. Amestecul de natură alpină, istorie bogată și infrastructură modernă face din Bansko una dintre cele mai versatile destinații de vacanță din Balcani.",
      en: "Bansko, nestled at the foot of the Pirin Mountains, is Bulgaria's leading winter sports center and a charming year-round destination. The town combines a historic old town with cobblestone streets and traditional stone houses with state-of-the-art skiing facilities and luxury hotels. Bansko is famous for its long and well-groomed slopes, attracting both beginners and professionals. In summer, the town serves as an ideal base for hiking and mountain biking tours in Pirin National Park. Local gastronomy in typical \"mehanas\" offers hearty Bulgarian specialties in a cozy atmosphere. Bansko has also become a popular hub for digital nomads, giving the town an international and dynamic flair. The blend of alpine nature, rich history, and modern infrastructure makes Bansko one of the most versatile holiday destinations in the Balkans."
    },
    facts: {
      de: ["Status: Bestes Skigebiet Bulgariens", "Lage: Am Fuße des Pirin-Gebirges", "Höhe: 925 m über dem Meeresspiegel", "Kultur: Jazz-Festival im August", "Gastronomie: Traditionelle Mehanas", "Tourismus: Zentrum für digitale Nomaden"],
      hu: ["Státusz: Bulgária legjobb síterepe", "Fekvés: A Pirin-hegység lábánál", "Magasság: 925 m tengerszint felett", "Kultúra: Jazzfesztivál augusztusban", "Gasztronómia: Hagyományos mehanák", "Turizmus: Digitális nomádok központja"],
      ro: ["Statut: Cea mai bună stațiune de schi din Bulgaria", "Locație: La poalele Munților Pirin", "Altitudine: 925 m deasupra mării", "Cultură: Festival de jazz în august", "Gastronomie: Mehana tradiționale", "Turism: Centru pentru nomazi digitali"],
      en: ["Status: Best ski resort in Bulgaria", "Location: At the foot of the Pirin Mountains", "Elevation: 925 m above sea level", "Culture: Jazz Festival in August", "Gastronomy: Traditional mehanas", "Tourism: Hub for digital nomads"]
    },
    image: "/images/visualLab/bulgaria/bansko.jpg"
  },
  {
    id: "bg-pirin",
    type: "landmark",
    parent: "bg-country",
    coords: [23.4000, 41.7500],
    name: {
      de: "Nationalpark Pirin",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "Der Nationalpark Pirin, im Südwesten Bulgariens gelegen, ist ein majestätisches Hochgebirgsreservat und gehört seit 1983 zum UNESCO-Weltnaturerbe. Der Park umfasst den größten Teil des Pirin-Gebirges, das für seine schroffen Granitgipfel, tiefen Täler und über 180 kristallklaren Gletscherseen bekannt ist. Der höchste Gipfel ist der Wichren (2.914 m), der dritthöchste Berg des Balkans, der Bergsteiger durch seine markante Kalksteinwand herausfordert. Die Landschaft des Parks ist von außergewöhnlicher biologischer Vielfalt geprägt; hier wachsen seltene Pflanzen wie das Edelweiß und die Baikuschew-Kiefer, die mit über 1.300 Jahren als einer der ältesten Bäume Bulgariens gilt. Der Park ist zudem ein Rückzugsort für Braunbären, Wölfe und Gämsen. Wanderer finden hier ein weitverzweigtes Netz an markierten Wegen, die zu spektakulären Aussichtspunkten und gemütlichen Berghütten führen. Im Winter verwandelt sich die Region um Bansko, das am Rande des Parks liegt, in eines der besten Skigebiete Osteuropas. Der Nationalpark Pirin ist nicht nur ein Paradies für Outdoor-Enthusiasten, sondern auch ein wichtiges Zentrum für den Naturschutz. Die alpine Flora und Fauna sowie die unberührte Wildnis machen den Park zu einem der wertvollsten Naturschätze Europas. Ein Besuch im Pirin-Gebirge bietet die Möglichkeit, die rohe Kraft und Schönheit der Natur in ihrer reinsten Form zu erleben, fernab von der Hektik des modernen Lebens.",
      hu: "A Pirin Nemzeti Park Bulgária délnyugati részén fekvő, fenséges magashegyi rezervátum, amely 1983 óta az UNESCO természeti világörökségének része. A park a Pirin-hegység nagy részét magában foglalja, amely meredek gránitcsúcsairól, mély völgyeiről és több mint 180 kristálytiszta gleccsertaváról híres. Legmagasabb csúcsa a Vihren (2914 m), a Balkán harmadik legmagasabb hegye, amely markáns mészkőfalaival komoly kihívást jelent a hegymászók számára. A park tájait rendkívüli biológiai sokszínűség jellemzi; olyan ritka növények élnek itt, mint a havasi gyopár és a Bajkusev-fenyő, amely több mint 1300 évével Bulgária egyik legöregebb fája. A park emellett barna medvék, farkasok és zergék menedékhelye is. A túrázók jelzett utak kiterjedt hálózatát találják itt, amelyek látványos kilátópontokhoz és hangulatos hegyi menedékházakhoz vezetnek. Télen a park szélén fekvő Banszko környéke Kelet-Európa egyik legjobb síterepévé válik. A Pirin Nemzeti Park nemcsak a szabadtéri sportok kedvelőinek paradicsoma, hanem a természetvédelem fontos központja is. Az alpesi flóra és fauna, valamint az érintetlen vadon Európa egyik legértékesebb természeti kincsévé teszi a parkot. A Pirin-hegységben tett látogatás lehetőséget nyújt arra, hogy az ember a természet nyers erejét és szépségét a legtisztább formájában tapasztalja meg, távol a modern élet zajától.",
      ro: "Parcul Național Pirin, situat în sud-vestul Bulgariei, este o rezervație montană maiestuoasă și face parte din Patrimoniul Mondial Natural UNESCO din 1983. Parcul cuprinde cea mai mare parte a Munților Pirin, cunoscuți pentru vârfurile lor de granit abrupte, văile adânci și peste 180 de lacuri glaciare cristaline. Cel mai înalt vârf este Vihren (2.914 m), al treilea munte ca înălțime din Balcani, care provoacă alpiniștii prin peretele său de calcar distinctiv. Peisajul parcului este marcat de o biodiversitate excepțională; aici cresc plante rare precum floarea-de-colț și pinul lui Baikushev, care, cu o vârstă de peste 1.300 de ani, este considerat unul dintre cei mai bătrâni copaci din Bulgaria. Parcul este, de asemenea, un refugiu pentru urșii bruni, lupi și capre negre. Drumeții găsesc aici o rețea vastă de trasee marcate care duc la puncte de belvedere spectaculoase și cabane montane primitoare. Iarna, regiunea din jurul orașului Bansko, situat la marginea parcului, se transformă într-una dintre cele mai bune zone de schi din Europa de Est. Parcul Național Pirin nu este doar un paradis pentru entuziaștii activităților în aer liber, ci și un centru important pentru conservarea naturii. Flora și fauna alpină, precum și sălbăticia neatinsă, fac din parc una dintre cele mai valoroase comori naturale ale Europei. O vizită în Munții Pirin oferă ocazia de a experimenta forța brută și frumusețea naturii în forma sa cea mai pură, departe de agitația vieții moderne.",
      en: "Pirin National Park, located in southwestern Bulgaria, is a majestic high-mountain reserve and has been a UNESCO World Natural Heritage site since 1983. The park encompasses the larger part of the Pirin Mountains, famous for their rugged granite peaks, deep valleys, and over 180 crystal-clear glacial lakes. The highest peak is Vihren (2,914 m), the third-highest mountain in the Balkans, which challenges climbers with its striking limestone wall. The park's landscape is characterized by exceptional biodiversity; rare plants such as edelweiss and the Baikushev pine, which at over 1,300 years old is one of Bulgaria's oldest trees, grow here. The park is also a sanctuary for brown bears, wolves, and chamois. Hikers will find an extensive network of marked trails leading to spectacular viewpoints and cozy mountain huts. In winter, the region around Bansko, situated on the edge of the park, transforms into one of the best ski resorts in Eastern Europe. Pirin National Park is not only a paradise for outdoor enthusiasts but also an important center for nature conservation. The alpine flora and fauna, as well as the untouched wilderness, make the park one of Europe's most valuable natural treasures. A visit to the Pirin Mountains offers the chance to experience the raw power and beauty of nature in its purest form, far from the hustle and bustle of modern life."
    },
    facts: {
      de: ["Status: UNESCO-Weltnaturerbe seit 1983", "Höchster Gipfel: Wichren (2914 m)", "Gletscherseen: Über 180 im Parkgebiet", "Flora: Über 1300 Pflanzenarten", "Čltester Baum: Baikuschew-Kiefer (1300+ Jahre)", "Fauna: Rückzugsort für Braunbären und Gämsen", "Geologie: Granit- und Kalksteinmassive", "Tourismus: Zentrum für Wandern und Skifahren", "Lage: Südwestbulgarien", "Schutz: Einer der ältesten Nationalparks Bulgariens"],
      hu: ["Státusz: UNESCO természeti világörökség 1983 óta", "Legmagasabb csúcs: Vihren (2914 m)", "Gleccsertavak: Több mint 180 a parkban", "Flóra: Több mint 1300 növényfaj", "Legöregebb fa: Bajkusev-fenyő (1300+ év)", "Fauna: Barna medvék és zergék menedéke", "Geológia: Gránit- és mészkőmasszívumok", "Turizmus: Túrázás és síelés központja", "Fekvés: Délnyugat-Bulgária", "Védelem: Bulgária egyik legrégebbi nemzeti parkja"],
      ro: ["Statut: Patrimoniu Mondial Natural UNESCO din 1983", "Cel mai înalt vârf: Vihren (2914 m)", "Lacuri glaciare: Peste 180 în parc", "Floră: Peste 1300 de specii de plante", "Cel mai bătrân copac: Pinul lui Baikushev (1300+ ani)", "Faună: Refugiu pentru urși bruni și capre negre", "Geologie: Masive de granit și calcar", "Turism: Centru pentru drumeții și schi", "Locație: Sud-vestul Bulgariei", "Protecție: Unul dintre cele mai vechi parcuri naționale"],
      en: ["Status: UNESCO World Natural Heritage site since 1983", "Highest peak: Vihren (2,914 m)", "Glacial lakes: Over 180 in the park area", "Flora: Over 1,300 plant species", "Oldest tree: Baikushev pine (1,300+ years)", "Fauna: Sanctuary for brown bears and chamois", "Geology: Granite and limestone massifs", "Tourism: Center for hiking and skiing", "Location: Southwestern Bulgaria", "Protection: One of Bulgaria's oldest national parks"]
    },
    image: "/images/visualLab/bulgaria/pirin.jpg"
  }
];

export const bulgariaCities: POI[] = [
  {
    id: "city-sofia",
    type: "city",
    parent: "bg-country",
    coords: [23.3219, 42.6977],
    name: {
      de: "Sofia",
      hu: "Szófia",
      ro: "Sofia",
      en: "Sofia"
    },
    description: {
      de: "Bulgariens Hauptstadt mit der Alexander-Newski-Kathedrale und dem Witoscha-Gebirge.",
      hu: "Bulgária fővárosa, az Alekszander Nyevszki-székesegyházzal és a Vitosa-heggyel.",
      ro: "Capitala Bulgariei, cu Catedrala Alexandr Nevski și muntele Vitosha.",
      en: "Bulgaria's capital, home to Alexander Nevsky Cathedral and Vitosha Mountain."
    },
    facts: {
      de: ["Hauptstadt Bulgariens", "Alexander-Newski-Kathedrale", "Am Fuß des Witoscha-Gebirges"],
      hu: ["Bulgária fővárosa", "Alekszander Nyevszki-székesegyház", "A Vitosa-hegység lábánál"],
      ro: ["Capitala Bulgariei", "Catedrala Alexandr Nevski", "La poalele muntelui Vitosha"],
      en: ["Capital of Bulgaria", "Alexander Nevsky Cathedral", "At the foot of Vitosha Mountain"]
    },
    image: "/geo-images/bulgaria/city-sofia.webp"
  },
  {
    id: "city-pernik",
    type: "city",
    parent: "bg-country",
    coords: [23.0200, 42.6050],
    name: {
      de: "Pernik",
      hu: "Pernik",
      ro: "Pernik",
      en: "Pernik"
    },
    description: {
      de: "Pernik, westlich von Sofia gelegen, ist eine Stadt mit einer starken industriellen Identität und einer tief verwurzelten Bergbautradition. Bekannt als das „Schwarze Gold Bulgariens“, war Pernik über Jahrzehnte das Zentrum der Kohleförderung und Schwerindustrie des Landes. Ein besonderes Highlight ist das Bergbaumuseum, das einzige seiner Art auf dem Balkan, das sich in einem authentischen unterirdischen Stollen befindet. Pernik ist zudem weltberühmt für das internationale Festival der Maskenspiele „Surva“, das zum UNESCO-Immateriellen Kulturerbe gehört und jedes Jahr Tausende von Besuchern anzieht. Die Stadt bietet eine Mischung aus industriellem Erbe, kulturellen Traditionen und der Nähe zur Natur des Witoscha-Gebirges. Pernik verbindet seine harte Arbeitsvergangenheit mit einem lebendigen Brauchtum und ist ein faszinierendes Ziel für Entdecker abseits der ausgetretenen Pfade.",
      hu: "Pernik Szófiától nyugatra fekvő város, erős ipari identitással és mélyen gyökerező bányászati hagyományokkal. „Bulgária fekete aranyaként” ismert Pernik évtizedeken át az ország szénbányászatának és nehéziparának központja volt. Különleges látnivaló a Bányászati Múzeum, amely az egyetlen ilyen jellegű intézmény a Balkánon, és egy eredeti földalatti tárnában található. Pernik emellett világhírű a „Szurva” nemzetközi maszkos fesztiválról, amely az UNESCO szellemi kulturális örökségének része, és minden évben látogatók ezreit vonzza. A város ötvözi az ipari örökséget, a kulturális hagyományokat és a Vitosa-hegység közelségét. Pernik a kemény munka múltját kapcsolja össze az élő népszokásokkal, izgalmas úti célt kínálva a felfedezőknek.",
      ro: "Pernik, situat la vest de Sofia, este un oraș cu o puternică identitate industrială și o tradiție minieră adânc înrădăcinată. Cunoscut sub numele de „aurul negru al Bulgariei”, Pernik a fost timp de decenii centrul extracției de cărbune și al industriei grele a țării. Un punct culminant special este Muzeul Mineritului, singurul de acest gen din Balcani, situat într-o galerie subterană autentică. Pernik este, de asemenea, faimos în întreaga lume pentru festivalul internațional al jocurilor cu măști „Surva”, care face parte din Patrimoniul Cultural Imaterial UNESCO și atrage mii de vizitatori în fiecare an. Orașul oferă un amestec de moștenire industrială, tradiții culturale și proximitatea față de natura muntelui Vitosha. Pernik îmbină trecutul său de muncă grea cu un folclor vibrant și este o destinație fascinantă pentru exploratori.",
      en: "Pernik, located west of Sofia, is a city with a strong industrial identity and deep-rooted mining traditions. Known as the \"Black Gold of Bulgaria,\" Pernik was for decades the center of the country's coal mining and heavy industry. A special highlight is the Mining Museum, the only one of its kind in the Balkans, located in an authentic underground gallery. Pernik is also world-famous for the \"Surva\" International Festival of Masquerade Games, which is part of the UNESCO Intangible Cultural Heritage and attracts thousands of visitors every year. The city offers a blend of industrial heritage, cultural traditions, and proximity to the nature of the Vitosha Mountain. Pernik combines its hard-working past with vibrant folklore, making it a fascinating destination for explorers off the beaten path."
    },
    facts: {
      de: ["Status: Zentrum des bulgarischen Bergbaus", "Kultur: UNESCO-Festival 'Surva'", "Highlight: Unterirdisches Bergbaumuseum", "Lage: Westlich von Sofia", "Geschichte: Antike Festung Krakra", "Wirtschaft: Schwerindustrie und Energie"],
      hu: ["Státusz: A bolgár bányászat központja", "Kultúra: UNESCO 'Szurva' fesztivál", "Látnivaló: Földalatti Bányászati Múzeum", "Fekvés: Szófiától nyugatra", "Történelem: Krakra ókori erődje", "Gazdaság: Nehézipar és energia"],
      ro: ["Statut: Centrul mineritului bulgar", "Cultură: Festivalul UNESCO 'Surva'", "Atracție: Muzeul Mineritului în subteran", "Locație: La vest de Sofia", "Istorie: Vechea cetate Krakra", "Economie: Industrie grea și energie"],
      en: ["Status: Center of Bulgarian mining", "Culture: UNESCO 'Surva' Festival", "Highlight: Underground Mining Museum", "Location: West of Sofia", "History: Ancient Krakra Fortress", "Economy: Heavy industry and energy"]
    },
    image: "/geo-images/bulgaria/city-pernik.webp"
  }
];

export const bulgariaCulture: POI[] = [
  {
    id: "cult-rila-monastery",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3405, 42.1333],
    name: {
      de: "Rila-Kloster",
      hu: "Rilai kolostor",
      ro: "Mănăstirea Rila",
      en: "Rila Monastery"
    },
    description: {
      de: "UNESCO-geschütztes bulgarisch-orthodoxes Kloster aus dem 10. Jahrhundert.",
      hu: "UNESCO-védett bolgár ortodox kolostor a 10. századból.",
      ro: "Mănăstire ortodoxă bulgară din secolul al X-lea, inclusă în UNESCO.",
      en: "A UNESCO-protected Bulgarian Orthodox monastery from the 10th century."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Gegründet im 10. Jahrhundert", "Wichtiges orthodoxes Zentrum"],
      hu: ["UNESCO világörökség", "A 10. században alapították", "Fontos ortodox központ"],
      ro: ["Patrimoniu mondial UNESCO", "Fondată în secolul al X-lea", "Centru ortodox important"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century", "Important Orthodox center"]
    },
    image: "/geo-images/bulgaria/cult-rila-monastery.webp"
  },
  {
    id: "hist-baba-vida",
    type: "historical",
    parent: "bg-country",
    coords: [22.8890, 43.9950],
    name: {
      de: "Baba Vida",
      hu: "Baba Vida",
      ro: "Baba Vida",
      en: "Baba Vida Fortress"
    },
    description: {
      de: "Die bekannteste Festung von Vidin und die am besten erhaltene mittelalterliche Burg Bulgariens. Baba Vida steht direkt am Donauufer und prägt die Stadtansicht. Der Ort verbindet Grenzgeschichte, Verteidigung und Flusshandel. Für Burgenseiten und Donau-Routen ist Baba Vida ein starkes SEO-Ziel.",
      hu: "Vidin legismertebb erődje és Bulgária egyik legjobb állapotban fennmaradt középkori vára. Baba Vida közvetlenül a Duna partján áll, és meghatározza a város látképét. A hely határtörténelmet, védelmet és folyami kereskedelmet egyesít. A váras tartalmakhoz és a Duna-útvonalakhoz Baba Vida erős SEO-célpont.",
      ro: "Cea mai cunoscută fortăreață din Vidin și una dintre cele mai bine păstrate cetăți medievale ale Bulgariei. Baba Vida stă chiar pe malul Dunării și definește profilul orașului. Locul combină istoria de frontieră, apărarea și comerțul fluvial. Pentru paginile despre castele și traseele dunărene, Baba Vida este foarte puternic.",
      en: "Vidin's best-known fortress and one of Bulgaria's best-preserved medieval castles. Baba Vida stands right on the Danube and shapes the city skyline. It combines border history, defense, and river trade. For castle pages and Danube routes, Baba Vida is a strong SEO target."
    },
    facts: {
      de: ["Donauufer", "Vidin", "Mittelalterliche Burg", "Grenzgeschichte", "Stadtikon"],
      hu: ["Duna-part", "Vidin", "Középkori vár", "Határtörténelem", "Városi jelkép"],
      ro: ["Malul Dunării", "Vidin", "Cetate medievală", "Istorie de frontieră", "Simbol urban"],
      en: ["Danube bank", "Vidin", "Medieval castle", "Border history", "City icon"]
    },
    image: "/geo-images/bulgaria/hist-baba-vida.webp"
  },
  {
    id: "hist-cherven-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [25.9700, 43.6340],
    name: {
      de: "Festung Tscherwen",
      hu: "Cserven erőd",
      ro: "Cetatea Cerven",
      en: "Cherven Fortress"
    },
    description: {
      de: "Mittelalterliche Festung in Nordbulgarien mit Blick auf die Felsen über dem Fluss Tscherni Lom. Cherven gehört zu den wichtigsten historischen Ausflügen in der Region Russe. Die Ruinen zeigen die Verteidigungsstruktur des späten Mittelalters. Für Burgentourismus in Bulgarien ist Cherven ein klarer Suchtreffer.",
      hu: "Középkori erőd Észak-Bulgáriában, kilátással a Cserni Lom folyó fölötti sziklákra. Cserven az egyik legfontosabb történelmi kirándulóhely Rusze térségében. A romok a késő középkori védelmi rendszert mutatják be. A bolgár várturizmusban Cserven erős kulcsszó.",
      ro: "Cetate medievală din nordul Bulgariei, cu vedere asupra stâncilor deasupra râului Cherni Lom. Cerven este una dintre cele mai importante excursii istorice din zona Ruse. Ruinele arată structura defensivă a Evului Mediu târziu. Pentru turismul de cetăți în Bulgaria, Cerven este o căutare clară.",
      en: "A medieval fortress in northern Bulgaria overlooking the cliffs above the Cherni Lom River. Cherven is one of the most important historic excursions in the Ruse region. The ruins show the defensive structure of the late Middle Ages. For fortress tourism in Bulgaria, Cherven is a clear search term."
    },
    facts: {
      de: ["Nordbulgarien", "Russe-Region", "Mittelalterliche Ruine", "Flussschlucht", "Burgentourismus"],
      hu: ["Észak-Bulgária", "Rusze régió", "Középkori rom", "Folyószurdok", "Várturizmus"],
      ro: ["Nordul Bulgariei", "Zona Ruse", "Ruine medievale", "Defileu fluvial", "Turism de cetăți"],
      en: ["Northern Bulgaria", "Ruse region", "Medieval ruin", "River gorge", "Fortress tourism"]
    },
    image: "/geo-images/bulgaria/hist-cherven-fortress.webp"
  },
  {
    id: "hist-shipka-battlefield",
    type: "historical",
    parent: "bg-country",
    coords: [25.4000, 42.7510],
    name: {
      de: "Schipka-Pass",
      hu: "Shipka-hágó",
      ro: "Pasul Șipka",
      en: "Shipka Pass Battlefield"
    },
    description: {
      de: "Geschichtsträchtiger Gebirgspass, eng verbunden mit den Kämpfen um die bulgarische Befreiung. Der Ort wird oft mit Denkmälern, Schlachtfeld und Nationalgedenken gesucht. Die Lage im Balkangebirge macht die Erzählung besonders stark. Für historisches Bulgarien-SEO ist Shipka unverzichtbar.",
      hu: "Történelmi hegyi hágó, amely szorosan kapcsolódik a bolgár felszabadító harcokhoz. A helyet gyakran emlékművekkel, csatamezővel és nemzeti megemlékezéssel keresik. A Balkán-hegységi fekvés erősíti a történetet. A történelmi Bulgária SEO-ban Shipka kihagyhatatlan.",
      ro: "Pas montan încărcat de istorie, legat strâns de luptele pentru eliberarea Bulgariei. Locul este căutat pentru monumente, câmp de luptă și memorie națională. Poziția din Munții Balcani face povestea și mai puternică. Pentru SEO despre Bulgaria istorică, Shipka este esențial.",
      en: "A historic mountain pass closely tied to Bulgaria's liberation battles. The site is often searched for monuments, battlefield history, and national memory. Its Balkan Mountain setting makes the story especially powerful. For historic Bulgaria SEO, Shipka is essential."
    },
    facts: {
      de: ["Freiheitskampf", "Balkangebirge", "Nationalgedenken", "Schlachtfeld", "Monumente"],
      hu: ["Felszabadítás", "Balkán-hegység", "Nemzeti emlékezet", "Csatamező", "Emlékművek"],
      ro: ["Lupta de eliberare", "Munții Balcani", "Memorie națională", "Câmp de luptă", "Monumente"],
      en: ["Liberation struggle", "Balkan Mountains", "National memory", "Battlefield", "Monuments"]
    },
    image: "/geo-images/bulgaria/hist-shipka-battlefield.webp"
  },
  {
    id: "hist-nesebar-old-town",
    type: "historical",
    parent: "bg-country",
    coords: [27.7360, 42.6591],
    name: {
      de: "Alt-Nesebar",
      hu: "Ó-Neszebar",
      ro: "Orașul vechi Nessebar",
      en: "Nessebar Old Town"
    },
    description: {
      de: "Historische Halbinselstadt am Schwarzen Meer mit Kirchen, Gassen und antiker Atmosphäre. Nessebar ist eines der stärksten UNESCO-Nahziele an der bulgarischen Küste. Die Altstadt verbindet griechische, byzantinische und bulgarische Spuren. Für Meer, Geschichte und Bulgarien-Reisen ist Nessebar ein Premium-Keyword.",
      hu: "Történelmi félszigetváros a Fekete-tenger partján, templomokkal, sikátorokkal és ókori hangulattal. Neszebar Bulgária egyik legerősebb UNESCO-közeli tengerparti célpontja. Az óváros görög, bizánci és bolgár nyomokat egyesít. Tenger, történelem és bolgár utazás témában Neszebar prémium kulcsszó.",
      ro: "Oraș istoric pe o peninsulă de la Marea Neagră, cu biserici, străduțe și atmosferă antică. Nessebar este una dintre cele mai puternice destinații de coastă apropiate de UNESCO. Orașul vechi combină urme grecești, bizantine și bulgare. Pentru mare, istorie și turism în Bulgaria, Nessebar este un cuvânt cheie premium.",
      en: "A historic peninsula town on the Black Sea with churches, lanes, and an ancient atmosphere. Nessebar is one of Bulgaria's strongest UNESCO-adjacent coastal destinations. The old town blends Greek, Byzantine, and Bulgarian traces. For sea, history, and Bulgaria travel, Nessebar is a premium keyword."
    },
    facts: {
      de: ["Schwarzes Meer", "Halbinselstadt", "UNESCO-Nähe", "Altstadtkirchen", "Küstenhistorie"],
      hu: ["Fekete-tenger", "Félszigetváros", "UNESCO-közelség", "Óvárosi templomok", "Tengerparti történelem"],
      ro: ["Marea Neagră", "Oraș pe peninsulă", "Aproape de UNESCO", "Biserici vechi", "Istorie de coastă"],
      en: ["Black Sea", "Peninsula town", "Near UNESCO", "Old churches", "Coastal history"]
    },
    image: "/geo-images/bulgaria/hist-nesebar-old-town.webp"
  },
  {
    id: "hist-hisarya-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [24.7088, 42.5038],
    name: {
      de: "Hisarja-Ruinen",
      hu: "Hisarja erődromjai",
      ro: "Cetatea Hisarya",
      en: "Hisarya Fortress"
    },
    description: {
      de: "Römische und spätrömische Festungsmauern im Kurort Hisarja. Der Ort ist bekannt für Heilquellen, Archäologie und gut erhaltene Stadtmauern. Die Anlage zeigt, wie stark die Region schon in der Antike befestigt war. Für Geschichte und Wellness-Tourismus in Bulgarien ist Hisarja sehr relevant.",
      hu: "Római és késő római erődfalak a hiszaryai fürdővárosban. A hely gyógyforrásairól, régészetéről és jól megmaradt városfalairól ismert. A komplexum megmutatja, mennyire erősen erődített volt a térség az ókorban. Történelemhez és wellness-turizmushoz Hisarya nagyon releváns.",
      ro: "Ziduri fortificate romane și târzii-romane în stațiunea Hisarya. Locul este cunoscut pentru izvoare, arheologie și zidurile sale bine păstrate. Ansamblul arată cât de bine era fortificată zona încă din Antichitate. Pentru istorie și turism balnear în Bulgaria, Hisarya este foarte relevantă.",
      en: "Roman and late Roman fortress walls in the spa town of Hisarya. The site is known for its springs, archaeology, and well-preserved walls. The complex shows how strongly fortified the area was in antiquity. For history and spa tourism in Bulgaria, Hisarya is highly relevant."
    },
    facts: {
      de: ["Römische Mauern", "Kurort Hisarja", "Heilquellen", "Antike Verteidigung", "Archäologie"],
      hu: ["Római falak", "Hiszarya fürdőváros", "Gyógyforrások", "Ókori védelem", "Régészet"],
      ro: ["Ziduri romane", "Stațiunea Hisarya", "Izvoare termale", "Apărare antică", "Arheologie"],
      en: ["Roman walls", "Hisarya spa town", "Thermal springs", "Ancient defense", "Archaeology"]
    },
    image: "/geo-images/bulgaria/hist-hisarya-fortress.webp"
  },
  {
    id: "land-alexander-nevsky-cathedral",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3325, 42.6951],
    name: {
      de: "Alexander-Newski-Kathedrale",
      hu: "Alekszandr Nyevszkij-székesegyház",
      ro: "Catedrala Alexandr Nevski",
      en: "Alexander Nevsky Cathedral"
    },
    description: {
      de: "Das berühmteste Bauwerk Sofias mit goldenen Kuppeln und monumentaler Präsenz. Die Kathedrale ist ein zentrales Wahrzeichen für Bulgarien-Reisen und Stadtmarketing. Besucher suchen sie wegen Architektur, Orthodoxie und Fotomotiven. Als ikonisches Landmark ist sie ein SEO-Anker für Sofia.",
      hu: "Szófia leghíresebb épülete arany kupolákkal és monumentális megjelenéssel. A székesegyház központi jelkép a bolgár utazási és városmarketing tartalmakban. Az emberek építészete, ortodox jellege és fotózási értéke miatt keresik. Ikonikus landmarkként erős SEO-horgony Szófiához.",
      ro: "Cea mai celebră clădire a Sofiei, cu cupole aurii și prezență monumentală. Catedrala este un reper central pentru turismul și brandingul Bulgariei. Vizitatorii o caută pentru arhitectură, ortodoxie și fotografii. Ca landmark iconic, este un ancoraj SEO pentru Sofia.",
      en: "Sofia's most famous building, with golden domes and a monumental presence. The cathedral is a central symbol for Bulgaria travel and city branding. Visitors search for it for architecture, Orthodoxy, and photography. As an iconic landmark, it is a strong SEO anchor for Sofia."
    },
    facts: {
      de: ["Sofia", "Goldene Kuppeln", "Orthodoxes Wahrzeichen", "Fotomotiv", "Stadtikon"],
      hu: ["Szófia", "Arany kupolák", "Ortodox jelkép", "Fotótéma", "Városi ikon"],
      ro: ["Sofia", "Cupole aurii", "Simbol ortodox", "Loc foto", "Icon urban"],
      en: ["Sofia", "Golden domes", "Orthodox symbol", "Photo spot", "City icon"]
    },
    image: "/geo-images/bulgaria/land-alexander-nevsky-cathedral.webp"
  },
  {
    id: "land-national-palace-culture",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3206, 42.6809],
    name: {
      de: "Nationaler Kulturpalast",
      hu: "Nemzeti Kultúrpalota",
      ro: "Palatul Național al Culturii",
      en: "National Palace of Culture"
    },
    description: {
      de: "Sofias großer Veranstaltungs- und Kongresskomplex mit moderner sozialistischer Architektur. Der Kulturpalast ist ein sehr bekannter Treffpunkt für Events, Messen und Konzerte. Seine Lage im Zentrum macht ihn für Stadtbesuche und Google-Suchen gleichermaßen stark. Als Landmark ist er ein wichtiges Symbol des modernen Sofia.",
      hu: "Szófia nagy rendezvény- és kongresszusi komplexuma modern szocialista építészettel. A Kultúrpalota jól ismert találkozóhely rendezvényekhez, vásárokhoz és koncertekhez. Központi fekvése miatt városlátogatáshoz és keresésekhez is erős. Landmarkként a modern Szófia egyik fontos szimbóluma.",
      ro: "Marele complex de evenimente și congrese al Sofiei, cu arhitectură socialistă modernă. Palatul Culturii este un punct de întâlnire cunoscut pentru evenimente, târguri și concerte. Poziția centrală îl face puternic pentru vizite urbane și căutări online. Ca landmark, este un simbol important al Sofiei moderne.",
      en: "Sofia's major events and congress complex with modern socialist architecture. The palace is a well-known meeting point for events, fairs, and concerts. Its central location makes it strong for city visits and online searches. As a landmark, it is an important symbol of modern Sofia."
    },
    facts: {
      de: ["Sofia-Zentrum", "Kongresshalle", "Konzerte", "Moderne Architektur", "Event-Ort"],
      hu: ["Szófia központja", "Kongresszusi csarnok", "Koncertek", "Modern építészet", "Rendezvényhelyszín"],
      ro: ["Centrul Sofiei", "Săli de congrese", "Concerte", "Arhitectură modernă", "Loc de evenimente"],
      en: ["Central Sofia", "Congress hall", "Concerts", "Modern architecture", "Event venue"]
    },
    image: "/geo-images/bulgaria/land-national-palace-culture.webp"
  },
  {
    id: "land-ivan-vazov-theatre",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3240, 42.6938],
    name: {
      de: "Nationaltheater Iwan Wasow",
      hu: "Ivan Vazov Nemzeti Színház",
      ro: "Teatrul Național Ivan Vazov",
      en: "Ivan Vazov National Theatre"
    },
    description: {
      de: "Das klassische Theatergebäude im Herzen Sofias ist eines der elegantesten Wahrzeichen der Stadt. Es steht für Literatur, Bühne und städtische Kultur. Besucher kommen wegen der neoklassischen Fassade und der zentralen Lage. Für Kultur- und Stadt-SEO ist das Theater ein starker Name.",
      hu: "Szófia szívének klasszikus színházépülete, a város egyik legelegánsabb jelképe. Az irodalmat, a színpadot és a városi kultúrát képviseli. A neoklasszikus homlokzat és a központi fekvés miatt sokan keresik. Kultúra- és városi SEO-ban erős név.",
      ro: "Clădirea clasică a teatrului din inima Sofiei este unul dintre cele mai elegante repere ale orașului. Ea simbolizează literatura, scena și cultura urbană. Vizitatorii vin pentru fațada neoclasică și poziția centrală. Pentru SEO cultural și urban, teatrul este un nume puternic.",
      en: "The classic theatre building in the heart of Sofia is one of the city's most elegant landmarks. It stands for literature, the stage, and urban culture. Visitors come for the neoclassical facade and central location. For culture and city SEO, the theatre is a strong name."
    },
    facts: {
      de: ["Sofia", "Neoklassik", "Literatur- und Theaterort", "Zentrale Lage", "Kulturelles Symbol"],
      hu: ["Szófia", "Neoklasszicizmus", "Irodalmi és színházi hely", "Központi fekvés", "Kulturális szimbólum"],
      ro: ["Sofia", "Neoclasic", "Loc de teatru și literatură", "Poziție centrală", "Simbol cultural"],
      en: ["Sofia", "Neoclassical", "Theatre and literature site", "Central location", "Cultural symbol"]
    },
    image: "/geo-images/bulgaria/land-ivan-vazov-theatre.webp"
  },
  {
    id: "land-central-mineral-baths",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3235, 42.6972],
    name: {
      de: "Zentralbäder Sofia",
      hu: "Szófia központi fürdői",
      ro: "Băile Minerale Centrale",
      en: "Central Mineral Baths"
    },
    description: {
      de: "Das alte Badehaus Sofias verbindet Jugendstilfassade mit Thermaltradition. Heute ist es ein ikonischer Bau für Stadtgeschichte, Mineralwasser und Architektur. Es liegt zentral und passt stark zu Bulgarien-Themen rund um Wellness und Kultur. Als Landmark hat es hohe Wiedererkennbarkeit.",
      hu: "Szófia régi fürdőháza a szecessziós homlokzatot a termálhagyománnyal köti össze. Ma a várostörténet, a termálvíz és az építészet ikonikus épülete. Központi helyen áll, és jól kapcsolódik a wellness- és kultúratémákhoz. Landmarkként magas az ismertsége.",
      ro: "Vechea clădire a băilor din Sofia combină fațada Art Nouveau cu tradiția termală. Astăzi este o clădire iconică pentru istoria orașului, apa minerală și arhitectură. Este amplasată central și se potrivește bine temelor de wellness și cultură. Ca landmark, are o recunoaștere foarte mare.",
      en: "Sofia's old bathhouse combines an Art Nouveau facade with thermal tradition. Today it is an iconic building for city history, mineral water, and architecture. Its central position fits well with wellness and culture themes. As a landmark, it has high recognition."
    },
    facts: {
      de: ["Jugendstil", "Mineralwasser", "Sofia-Zentrum", "Historisches Badehaus", "Architekturikone"],
      hu: ["Szecesszió", "Termálvíz", "Szófia központja", "Történelmi fürdő", "Építészeti ikon"],
      ro: ["Art Nouveau", "Apă minerală", "Centrul Sofiei", "Baie istorică", "Icoană arhitecturală"],
      en: ["Art Nouveau", "Mineral water", "Central Sofia", "Historic bathhouse", "Architecture icon"]
    },
    image: "/geo-images/bulgaria/land-central-mineral-baths.webp"
  },
  {
    id: "land-ancient-theatre-plovdiv",
    type: "landmark",
    parent: "bg-country",
    coords: [24.7465, 42.1461],
    name: {
      de: "Antikes Theater Plowdiw",
      hu: "Plovdivi ókori színház",
      ro: "Teatrul Antic din Plovdiv",
      en: "Ancient Theatre of Plovdiv"
    },
    description: {
      de: "Das römische Theater von Plowdiw ist eines der markantesten Bauwerke im ganzen Land. Es wird bis heute für Aufführungen genutzt und zieht viele Besucher an. Die Lage in der Altstadt macht es ideal für Kultur-, Stadt- und SEO-Inhalte. Es ist ein Premium-Landmark für Bulgarien-Reisen.",
      hu: "A plovdivi római színház az ország egyik legmarkánsabb építménye. Ma is előadások helyszíne, és sok látogatót vonz. Az óvárosi fekvés tökéletes kulturális, városi és SEO tartalmakhoz. Bulgária utazási oldalain prémium landmark.",
      ro: "Teatrul roman din Plovdiv este una dintre cele mai emblematice construcții din țară. Este folosit și astăzi pentru spectacole și atrage mulți vizitatori. Poziția sa în orașul vechi îl face ideal pentru conținut cultural, urban și SEO. Este un landmark premium pentru turismul în Bulgaria.",
      en: "Plovdiv's Roman theatre is one of the country's most distinctive structures. It is still used for performances and attracts many visitors. Its old-town setting makes it ideal for culture, city, and SEO content. It is a premium landmark for Bulgaria travel."
    },
    facts: {
      de: ["Römisches Theater", "Plowdiw", "Altstadt", "Aufführungen", "Antike Architektur"],
      hu: ["Római színház", "Plovdiv", "Óváros", "Előadások", "Ókori építészet"],
      ro: ["Teatru roman", "Plovdiv", "Oraș vechi", "Spectacole", "Arhitectură antică"],
      en: ["Roman theatre", "Plovdiv", "Old town", "Performances", "Ancient architecture"]
    },
    image: "/geo-images/bulgaria/land-ancient-theatre-plovdiv.webp"
  },
  {
    id: "land-varna-archaeological-museum",
    type: "landmark",
    parent: "bg-country",
    coords: [27.9140, 43.2134],
    name: {
      de: "Archäologisches Museum Warna",
      hu: "Várnai Régészeti Múzeum",
      ro: "Muzeul Arheologic Varna",
      en: "Varna Archaeological Museum"
    },
    description: {
      de: "Eines der bedeutendsten Museen Bulgariens mit starkem Fokus auf Antike und Goldschatz. Das Museum ist ein Muss für Varna, Geschichte und Schwarzmeerküste. Die berühmten Funde machen es international sichtbar. Als Landmark stärkt es das kulturelle Profil der Hafenstadt.",
      hu: "Bulgária egyik legfontosabb múzeuma, erős ókori és aranykincs-fókusszal. A múzeum kötelező célpont Várnában, történelemhez és Fekete-tengerhez. A híres leletek nemzetközileg is ismertté teszik. Landmarkként erősíti a kikötőváros kulturális arculatát.",
      ro: "Unul dintre cele mai importante muzee din Bulgaria, cu accent puternic pe Antichitate și tezaurul de aur. Muzeul este o vizită obligatorie pentru Varna, istorie și litoralul Mării Negre. Descoperirile celebre îi dau vizibilitate internațională. Ca landmark, întărește profilul cultural al orașului-port.",
      en: "One of Bulgaria's most important museums, with a strong focus on antiquity and gold treasures. The museum is a must for Varna, history, and the Black Sea coast. Its famous finds give it international visibility. As a landmark, it strengthens the port city's cultural profile."
    },
    facts: {
      de: ["Varna", "Antike Funde", "Goldschatz", "Schwarzmeerküste", "Top-Museum"],
      hu: ["Várna", "Ókori leletek", "Aranykincs", "Fekete-tenger partja", "Topmúzeum"],
      ro: ["Varna", "Descoperiri antice", "Tezaur de aur", "Litoralul Mării Negre", "Muzeu major"],
      en: ["Varna", "Ancient finds", "Gold treasure", "Black Sea coast", "Top museum"]
    },
    image: "/geo-images/bulgaria/land-varna-archaeological-museum.webp"
  },
  {
    id: "land-national-history-museum",
    type: "landmark",
    parent: "bg-country",
    coords: [23.2750, 42.6450],
    name: {
      de: "Nationalhistorisches Museum",
      hu: "Nemzeti Történeti Múzeum",
      ro: "Muzeul Național de Istorie",
      en: "National History Museum"
    },
    description: {
      de: "Bulgariens größtes Geschichtsmuseum mit Sammlungen von der Antike bis zur Neuzeit. Das Museum ist ein zentraler Ort für Geschichte, Staatlichkeit und kulturelles Gedächtnis. Es liegt im Südwesten Sofias und passt gut zu Bildungsreisen. Als Landmark ist es ein starker Museumsbegriff für Bulgarien.",
      hu: "Bulgária legnagyobb történeti múzeuma, az ókortól a modern korig gyűjteményekkel. A múzeum a történelem, az államiság és a kulturális emlékezet központi helye. Szófia délnyugati részén található, így jól illik az oktatási utazásokhoz. Landmarkként erős múzeumi kulcsszó Bulgáriában.",
      ro: "Cel mai mare muzeu de istorie din Bulgaria, cu colecții din Antichitate până în epoca modernă. Muzeul este un loc central pentru istorie, statalitate și memorie culturală. Se află în sud-vestul Sofiei și se potrivește bine tururilor educative. Ca landmark, este un termen muzeal puternic pentru Bulgaria.",
      en: "Bulgaria's largest history museum, with collections from antiquity to the modern era. The museum is a central place for history, statehood, and cultural memory. It sits in southwest Sofia and fits educational travel well. As a landmark, it is a strong museum term for Bulgaria."
    },
    facts: {
      de: ["Größtes Geschichtsmuseum", "Sofia", "Antike bis Moderne", "Bildungsreisen", "Kulturerbe"],
      hu: ["Legnagyobb történeti múzeum", "Szófia", "Ókortól modern korig", "Oktatási utazás", "Kulturális emlékezet"],
      ro: ["Cel mai mare muzeu istoric", "Sofia", "Antichitate până azi", "Turism educativ", "Memorie culturală"],
      en: ["Largest history museum", "Sofia", "Antiquity to modern era", "Educational travel", "Cultural memory"]
    },
    image: "/geo-images/bulgaria/land-national-history-museum.webp"
  },
  {
    id: "land-saint-george-rotunda",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3220, 42.7000],
    name: {
      de: "St.-Georgs-Rotunde",
      hu: "Szent György rotunda",
      ro: "Rotunda Sfântul Gheorghe",
      en: "Saint George Rotunda"
    },
    description: {
      de: "Die älteste erhaltene Bauform in Sofia und ein sehr starker urbaner Anker. Die Rotunde steht für spätantike und frühchristliche Geschichte im Stadtzentrum. Sie ist klein, aber bedeutend für Architektur, Religion und Stadtentwicklung. Als Landmark ergänzt sie jede Sofia-Seite perfekt.",
      hu: "Szófia legrégebbi fennmaradt építészeti emléke és nagyon erős városi jelkép. A rotunda a késő antik és kora keresztény történelem emléke a belvárosban. Kicsi, de fontos építészeti, vallási és városfejlődési szempontból. Landmarkként tökéletesen kiegészíti a Szófiáról szóló oldalt.",
      ro: "Cea mai veche formă de clădire păstrată în Sofia și un reper urban foarte puternic. Rotunda reprezintă istoria târzie antică și creștină timpurie din centrul orașului. Este mică, dar importantă pentru arhitectură, religie și dezvoltarea urbană. Ca landmark, completează perfect orice pagină despre Sofia.",
      en: "The oldest preserved building form in Sofia and a very strong urban anchor. The rotunda represents late antique and early Christian history in the city center. It is small but important for architecture, religion, and urban development. As a landmark, it fits any Sofia page perfectly."
    },
    facts: {
      de: ["Čltestes Sofia-Bauwerk", "Spätantike", "Frühchristlich", "Innenstadt", "Architekturdenkmal"],
      hu: ["Szófia legrégebbi épülete", "Késő antik kor", "Kora keresztény", "Belváros", "Építészeti emlék"],
      ro: ["Cea mai veche clădire din Sofia", "Antichitate târzie", "Creștinism timpuriu", "Centru oraș", "Monument arhitectural"],
      en: ["Oldest Sofia building", "Late antiquity", "Early Christian", "City center", "Architectural monument"]
    },
    image: "/geo-images/bulgaria/land-saint-george-rotunda.webp"
  },
  {
    id: "port-varna",
    type: "port",
    parent: "bg-country",
    coords: [27.9098, 43.2160],
    name: {
      de: "Hafen Warna",
      hu: "Várna kikötője",
      ro: "Portul Varna",
      en: "Port of Varna"
    },
    description: {
      de: "Der wichtigste Seehafen an der bulgarischen Schwarzmeerküste und ein zentrales Logistikdreieck. Der Hafen verbindet Containerverkehr, Handel und maritime Wirtschaft. Für Reise- und Wirtschaftscontent ist Varna ein starkes Küsten-Keyword. Die Lage macht ihn für Black-Sea-SEO sehr wertvoll.",
      hu: "Bulgária legfontosabb tengeri kikötője a Fekete-tenger partján és kulcsfontosságú logisztikai csomópont. A kikötő összeköti a konténerforgalmat, a kereskedelmet és a tengeri gazdaságot. Utazási és gazdasági tartalmakban Várna erős parti kulcsszó. Fekete-tengeri SEO-ban különösen értékes.",
      ro: "Cel mai important port maritim de pe litoralul bulgar al Mării Negre și un nod logistic central. Portul leagă traficul de containere, comerțul și economia maritimă. Pentru conținut de călătorie și business, Varna este un cuvânt cheie costier puternic. Poziția sa îl face foarte valoros pentru SEO de litoral.",
      en: "The most important seaport on Bulgaria's Black Sea coast and a major logistics hub. The port connects container traffic, trade, and maritime business. For travel and business content, Varna is a strong coastal keyword. Its location makes it highly valuable for Black Sea SEO."
    },
    facts: {
      de: ["Schwarzmeerhafen", "Containerverkehr", "Logistikzentrum", "Varna", "Maritime Wirtschaft"],
      hu: ["Fekete-tengeri kikötő", "Konténerforgalom", "Logisztikai központ", "Várna", "Tengeri gazdaság"],
      ro: ["Port la Marea Neagră", "Trafic de containere", "Centru logistic", "Varna", "Economie maritimă"],
      en: ["Black Sea port", "Container traffic", "Logistics hub", "Varna", "Maritime business"]
    },
    image: "/geo-images/bulgaria/port-varna.webp"
  },
  {
    id: "port-burgas",
    type: "port",
    parent: "bg-country",
    coords: [27.4805, 42.5054],
    name: {
      de: "Hafen Burgas",
      hu: "Burgasz kikötője",
      ro: "Portul Burgas",
      en: "Port of Burgas"
    },
    description: {
      de: "Der größte Hafen im Süden der bulgarischen Schwarzmeerküste mit starkem Industrie- und Energiesektor. Burgas ist ein wichtiger Knoten für Öl, Fracht und maritime Dienstleistungen. Der Hafen prägt Stadtentwicklung und Arbeitsmarkt. Für Bulgarien-SEO rund um Logistik und Küste ist er unverzichtbar.",
      hu: "A bolgár Fekete-tenger déli részének legnagyobb kikötője, erős ipari és energetikai szereppel. Burgasz fontos csomópont az olaj, az áruszállítás és a tengeri szolgáltatások számára. A kikötő a városfejlődést és a munkaerőpiacot is meghatározza. Logisztikai és parti SEO-ban kihagyhatatlan.",
      ro: "Cel mai mare port din sudul litoralului bulgar al Mării Negre, cu rol puternic industrial și energetic. Burgas este un nod important pentru petrol, mărfuri și servicii maritime. Portul influențează dezvoltarea orașului și piața muncii. Pentru SEO despre logistică și coastă în Bulgaria, este esențial.",
      en: "The largest port in the south of Bulgaria's Black Sea coast, with a strong industrial and energy role. Burgas is an important node for oil, freight, and maritime services. The port shapes city development and the local job market. For Bulgaria SEO about logistics and coast, it is essential."
    },
    facts: {
      de: ["Südküste", "Öl und Fracht", "Industriesektor", "Burgas", "Schwarzmeerlogistik"],
      hu: ["Déli part", "Olaj és áru", "Ipari szektor", "Burgasz", "Fekete-tengeri logisztika"],
      ro: ["Coasta sudică", "Petrol și mărfuri", "Sector industrial", "Burgas", "Logistică la Marea Neagră"],
      en: ["Southern coast", "Oil and freight", "Industrial sector", "Burgas", "Black Sea logistics"]
    },
    image: "/geo-images/bulgaria/port-burgas.webp"
  },
  {
    id: "industry-maritsa-east-complex",
    type: "industry",
    parent: "bg-country",
    coords: [25.9000, 42.3000],
    name: {
      de: "Mariza-Ost-Komplex",
      hu: "Marica keleti komplexum",
      ro: "Complexul Maritsa East",
      en: "Maritsa East Complex"
    },
    description: {
      de: "Bulgariens größter Energie- und Bergbaukomplex mit Kohleförderung und Kraftwerksfunktion. Der Standort spielt eine zentrale Rolle für Stromversorgung und Industriegeschichte. Er ist ein Schlüsselbegriff für Wirtschafts- und Energiestrategie in Bulgarien. SEO rund um Energie und Schwerindustrie profitiert stark von diesem Namen.",
      hu: "Bulgária legnagyobb energiatermelő és bányászati komplexuma, szénkitermeléssel és erőművi funkcióval. A helyszín központi szerepet játszik az áramellátásban és az ipartörténetben. Kulcsszó az energiagazdaság és a nehézipar témájában. SEO-ban erősen teljesít az ipari tartalmaknál.",
      ro: "Cel mai mare complex energetic și minier din Bulgaria, cu extracție de cărbune și funcții de centrală. Locul joacă un rol central în alimentarea cu energie și istoria industrială. Este un termen cheie pentru strategia energetică și economică a Bulgariei. SEO-ul pentru energie și industrie grea beneficiază clar de acest nume.",
      en: "Bulgaria's largest energy and mining complex, with coal extraction and power-generation functions. The site plays a central role in electricity supply and industrial history. It is a key term for Bulgaria's energy and economic strategy. SEO about energy and heavy industry benefits strongly from this name."
    },
    facts: {
      de: ["Energiekomplex", "Braunkohle", "Stromversorgung", "Industriezone", "Südostbulgarien"],
      hu: ["Energetikai komplexum", "Barnaszén", "Villamosenergia-ellátás", "Ipari zóna", "Délkelet-Bulgária"],
      ro: ["Complex energetic", "Lignit", "Aprovizionare cu energie", "Zonă industrială", "Sud-estul Bulgariei"],
      en: ["Energy complex", "Lignite coal", "Power supply", "Industrial zone", "Southeastern Bulgaria"]
    },
    image: "/geo-images/bulgaria/industry-maritsa-east-complex.webp"
  },
  {
    id: "industry-kozloduy-npp",
    type: "industry",
    parent: "bg-country",
    coords: [23.7330, 43.7810],
    name: {
      de: "Kozloduj-Kernkraftwerk",
      hu: "Kozloduj atomerőmű",
      ro: "Centrala Nucleară Kozlodui",
      en: "Kozloduy Nuclear Power Plant"
    },
    description: {
      de: "Bulgarien wichtigstes Kernkraftwerk an der Donau und ein zentraler Punkt der Energieversorgung. Der Standort ist stark mit Stromproduktion, Technik und Sicherheitsmanagement verbunden. Für Industrie- und Energiesuchen in Bulgarien ist Kozloduj extrem relevant. Die Donau-Lage verstärkt den geografischen Wiedererkennungswert.",
      hu: "Bulgária legfontosabb atomerőműve a Duna partján és az energiaellátás központi eleme. A helyszín erősen kapcsolódik az áramtermeléshez, a technológiához és a biztonsági menedzsmenthez. Ipari és energetikai keresésekben Kozloduj rendkívül releváns. A dunai elhelyezkedés a földrajzi felismerhetőséget is növeli.",
      ro: "Cea mai importantă centrală nucleară a Bulgariei, situată pe Dunăre, și un element central al sistemului energetic. Locul este puternic asociat cu producția de energie, tehnologia și managementul securității. Pentru căutările despre industrie și energie în Bulgaria, Kozloduy este foarte relevant. Poziția pe Dunăre îi crește recunoașterea geografică.",
      en: "Bulgaria's most important nuclear power plant, located on the Danube and central to the energy system. The site is strongly associated with electricity generation, technology, and safety management. For industry and energy searches in Bulgaria, Kozloduy is highly relevant. Its Danube location boosts geographic recognition."
    },
    facts: {
      de: ["Donau", "Kernenergie", "Stromproduktion", "Technologie", "Energieversorgung"],
      hu: ["Duna", "Nukleáris energia", "Villamosenergia-termelés", "Technológia", "Energiaellátás"],
      ro: ["Dunăre", "Energie nucleară", "Producție de electricitate", "Tehnologie", "Sistem energetic"],
      en: ["Danube", "Nuclear power", "Electricity generation", "Technology", "Energy supply"]
    },
    image: "/geo-images/bulgaria/industry-kozloduy-npp.webp"
  },
  {
    id: "agriculture-rose-valley-kazanlak",
    type: "agriculture",
    parent: "bg-country",
    coords: [25.3980, 42.6200],
    name: {
      de: "Rosen Tal bei Kasanlak",
      hu: "Rózsák völgye Kazanlaknál",
      ro: "Valea Trandafirilor din Kazanlak",
      en: "Rose Valley of Kazanlak"
    },
    description: {
      de: "Das berühmteste Rosenanbaugebiet Bulgariens und die Heimat des Rosenöls. Die Region steht für landwirtschaftliche Tradition, frühe Ernte und starkes Exportprofil. Besucher suchen hier Felder, Feste und Destillerien. Für Agrar-, Duft- und Bulgarien-SEO ist das Rose Valley ein Top-Begriff.",
      hu: "Bulgária leghíresebb rózsatermesztő vidéke és a rózsaolaj otthona. A térség a mezőgazdasági hagyományról, a korai betakarításról és az exportprofilról ismert. A látogatók a mezők, fesztiválok és lepárlók miatt keresik. Agrár-, illat- és bolgár SEO-ban a Rózsa-völgy toplista.",
      ro: "Cea mai cunoscută zonă de cultivare a trandafirilor din Bulgaria și casa uleiului de trandafir. Regiunea înseamnă tradiție agricolă, recoltare timpurie și profil puternic de export. Vizitatorii caută câmpurile, festivalurile și distileriile. Pentru SEO despre agricultură, parfum și Bulgaria, Valea Trandafirilor este de top.",
      en: "Bulgaria's most famous rose-growing region and the home of rose oil. The area stands for agricultural tradition, early harvest, and a strong export profile. Visitors search for the fields, festivals, and distilleries. For agriculture, fragrance, and Bulgaria SEO, the Rose Valley is a top term."
    },
    facts: {
      de: ["Rosenöl", "Kazanlak", "Agrartradition", "Exportprodukt", "Rosenfest"],
      hu: ["Rózsaolaj", "Kazanlak", "Agrárhagyomány", "Exporttermék", "Rózsafesztivál"],
      ro: ["Ulei de trandafir", "Kazanlak", "Tradiție agricolă", "Produs de export", "Festivalul trandafirilor"],
      en: ["Rose oil", "Kazanlak", "Agricultural tradition", "Export product", "Rose festival"]
    },
    image: "/geo-images/bulgaria/agriculture-rose-valley-kazanlak.webp"
  },
  {
    id: "agriculture-melnik-vineyards",
    type: "agriculture",
    parent: "bg-country",
    coords: [23.4000, 41.5250],
    name: {
      de: "Weinberge von Melnik",
      hu: "Melnik szőlőhegyei",
      ro: "Vieiile din Melnik",
      en: "Melnik Vineyards"
    },
    description: {
      de: "Kleine, aber sehr bekannte Weinregion im Südwesten Bulgariens mit starkem Terroir-Charakter. Melnik ist ein Schlüsselname für bulgarischen Wein, Landwirtschaft und Genussreisen. Die Hügel und Weingüter sorgen für hohe Sichtbarkeit in Reise- und Lifestyle-Suchen. Für Agrar-SEO und Weintourismus ist Melnik sehr wertvoll.",
      hu: "Kicsi, de nagyon ismert borvidék Bulgária délnyugati részén, erős terroir-jelleggel. Melnik kulcsszó a bolgár bor, a mezőgazdaság és a gasztronómiai utazások terén. A dombok és pincészetek magas láthatóságot adnak az utazási és életmód-keresésekben. Agrár-SEO-hoz és borturizmushoz Melnik különösen értékes.",
      ro: "Regiune viticolă mică, dar foarte cunoscută din sud-vestul Bulgariei, cu caracter puternic de terroir. Melnik este un nume-cheie pentru vinul bulgăresc, agricultură și turismul gastronomic. Dealurile și cramele îi oferă vizibilitate mare în căutările de travel și lifestyle. Pentru SEO agricol și turism viticol, Melnik este foarte valoros.",
      en: "A small but very famous wine region in southwestern Bulgaria with a strong terroir character. Melnik is a key name for Bulgarian wine, agriculture, and food travel. The hills and wineries give it high visibility in travel and lifestyle searches. For agriculture SEO and wine tourism, Melnik is highly valuable."
    },
    facts: {
      de: ["Weinregion", "Melnik", "Terroir", "Winzerkultur", "Südwestbulgarien"],
      hu: ["Borvidék", "Melnik", "Terroir", "Pincészetek", "Délnyugat-Bulgária"],
      ro: ["Regiune viticolă", "Melnik", "Terroir", "Crame", "Sud-vestul Bulgariei"],
      en: ["Wine region", "Melnik", "Terroir", "Wineries", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/agriculture-melnik-vineyards.webp"
  }
];

export const bulgariaNature: POI[] = [
  {
    id: "nat-pirin",
    type: "landmark",
    parent: "bg-country",
    coords: [23.43, 41.73],
    name: {
      de: "Pirin-Nationalpark",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "UNESCO-geschützter Gebirgspark mit Gletscherseen im Pirin-Gebirge.",
      hu: "UNESCO-védett hegyi park gleccsertavakkal a Pirin-hegységben.",
      ro: "Parc montan protejat UNESCO, cu lacuri glaciare în Munții Pirin.",
      en: "A UNESCO-protected mountain park with glacial lakes in the Pirin range."
    },
    facts: {
      de: ["UNESCO-Naturerbe", "Gletscherseen", "Alpine Landschaft"],
      hu: ["UNESCO természeti világörökség", "Gleccsertavak", "Alpesi táj"],
      ro: ["Patrimoniu natural UNESCO", "Lacuri glaciare", "Peisaj alpin"],
      en: ["UNESCO natural heritage", "Glacial lakes", "Alpine landscape"]
    },
    image: "/geo-images/bulgaria/nat-pirin.webp"
  },
  {
    id: "nat-rila",
    type: "landmark",
    parent: "bg-country",
    coords: [23.55, 42.19],
    name: {
      de: "Rila-Nationalpark",
      hu: "Rilai Nemzeti Park",
      ro: "Parcul Național Rila",
      en: "Rila National Park"
    },
    description: {
      de: "Bulgariens größter Nationalpark mit dem Musala, dem höchsten Berg des Landes.",
      hu: "Bulgária legnagyobb nemzeti parkja, benne a Muszala csúccsal, az ország legmagasabb hegyével.",
      ro: "Cel mai mare parc național din Bulgaria, cu Musala, cel mai înalt vârf al țării.",
      en: "Bulgaria's largest national park, home to Musala, the country's highest peak."
    },
    facts: {
      de: ["Größter Nationalpark Bulgariens", "Musala 2925 m", "Hochgebirgsnatur"],
      hu: ["Bulgária legnagyobb nemzeti parkja", "Muszala 2925 m", "Magashegyi természet"],
      ro: ["Cel mai mare parc național din Bulgaria", "Musala 2925 m", "Natură de mare altitudine"],
      en: ["Largest national park in Bulgaria", "Musala 2925 m", "High-mountain nature"]
    },
    image: "/geo-images/bulgaria/nat-rila.webp"
  },
  {
    id: "nat-vitosha",
    type: "landmark",
    parent: "bg-country",
    coords: [23.28, 42.56],
    name: {
      de: "Witoscha",
      hu: "Vitosa",
      ro: "Vitoșa",
      en: "Vitosha"
    },
    description: {
      de: "Hausberg von Sofia mit Skigebieten und den Boyana-Wasserfällen.",
      hu: "Szófia hegyvidéke, sípályákkal és a Boyana-vízeséssel.",
      ro: "Muntele Sofiei, cu pârtii de schi și cascadele Boyana.",
      en: "Sofia's mountain with ski slopes and Boyana Waterfall."
    },
    facts: {
      de: ["Sofias Hausberg", "Ski- und Wandergebiet", "Boyana-Wasserfall"],
      hu: ["Szófia házi hegye", "Sí- és túraterület", "Boyana-vízesés"],
      ro: ["Muntele Sofiei", "Zonă de schi și drumeții", "Cascada Boyana"],
      en: ["Sofia's mountain", "Skiing and hiking area", "Boyana Waterfall"]
    },
    image: "/geo-images/bulgaria/nat-vitosha.webp"
  },
  {
    id: "nat-seven-rila",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3205, 42.2333],
    name: {
      de: "Sieben Rila-Seen",
      hu: "Hét Rilai-tó",
      ro: "Șapte lacuri din Rila",
      en: "Seven Rila Lakes"
    },
    description: {
      de: "Sieben Gletscherseen im Rila-Gebirge, eines der bekanntesten Naturziele Bulgariens.",
      hu: "Hét gleccsertó a Rilai-hegységben, Bulgária egyik legismertebb természeti látványossága.",
      ro: "Șapte lacuri glaciare în Munții Rila, una dintre cele mai cunoscute atracții naturale din Bulgaria.",
      en: "Seven glacial lakes in the Rila Mountains, one of Bulgaria's best-known natural attractions."
    },
    facts: {
      de: ["7 Gletscherseen", "Beliebtes Wanderziel", "Rila-Gebirge"],
      hu: ["7 gleccsertó", "Népszerű túracélpont", "Rilai-hegység"],
      ro: ["7 lacuri glaciare", "Destinație populară de drumeții", "Munții Rila"],
      en: ["7 glacial lakes", "Popular hiking destination", "Rila Mountains"]
    },
    image: "/geo-images/bulgaria/nat-seven-rila.webp"
  },
  {
    id: "nat-bansko",
    type: "landmark",
    parent: "bg-country",
    coords: [23.487, 41.8389],
    name: {
      de: "Bansko",
      hu: "Banszko síparadicsom",
      ro: "Stațiunea de schi Bansko",
      en: "Bansko Ski Resort"
    },
    description: {
      de: "Großer Skiort am Fuße des Pirin mit langen Pisten und Wintersporttourismus.",
      hu: "Nagy síközpont a Pirin lábánál, hosszú pályákkal és téli turizmussal.",
      ro: "Stațiune mare de schi la poalele munților Pirin, cu pârtii lungi și turism de iarnă.",
      en: "A major ski resort at the foot of the Pirin with long slopes and winter tourism."
    },
    facts: {
      de: ["Beliebtes Skizentrum", "Pirin-Tor", "Starker Wintertourismus"],
      hu: ["Népszerű síközpont", "A Pirin kapuja", "Erős téli turizmus"],
      ro: ["Centru de schi popular", "Poarta către Pirin", "Turism de iarnă puternic"],
      en: ["Popular ski center", "Gateway to Pirin", "Strong winter tourism"]
    },
    image: "/geo-images/bulgaria/nat-bansko.webp"
  },
  {
    id: "nat-musala",
    type: "mountain",
    parent: "bg-country",
    coords: [23.5856, 42.1798],
    name: {
      de: "Musala",
      hu: "Muszala",
      ro: "Musala",
      en: "Musala"
    },
    description: {
      de: "Der höchste Berg Bulgariens und ein zentrales Ziel für alpine Reisen. Musala liegt im Rila-Gebirge und dominiert jede Höhen-SEO rund um Bulgarien. Die Route ist bekannt für klare Bergluft, Seen und Panoramen. Als Berg-Ikone ist Musala ein Muss für Naturcontent.",
      hu: "Bulgária legmagasabb hegycsúcsa és az alpesi utazások központi célpontja. A Muszala a Rilai-hegységben áll, és minden magashegyi SEO-t ural Bulgáriában. Az útvonal tiszta hegyi levegőről, tavakról és panorámákról ismert. Hegyikonként Muszala kötelező természetes tartalom.",
      ro: "Cel mai înalt vârf al Bulgariei și o țintă centrală pentru turismul alpin. Musala se află în Munții Rila și domină orice SEO despre altitudine în Bulgaria. Traseul este cunoscut pentru aer curat, lacuri și panorame. Ca simbol montan, Musala este esențial pentru conținutul de natură.",
      en: "The highest peak in Bulgaria and a central target for alpine travel. Musala sits in the Rila Mountains and dominates high-altitude Bulgaria SEO. The route is known for clean mountain air, lakes, and panoramas. As a mountain icon, Musala is essential for nature content."
    },
    facts: {
      de: ["Höchster Berg Bulgariens", "Rila-Gebirge", "Alpine Route", "Panoramen", "Wandern"],
      hu: ["Bulgária legmagasabb csúcsa", "Rilai-hegység", "Alpesi útvonal", "Panoráma", "Túrázás"],
      ro: ["Cel mai înalt vârf", "Munții Rila", "Traseu alpin", "Panorame", "Drumeții"],
      en: ["Highest peak", "Rila Mountains", "Alpine route", "Panoramas", "Hiking"]
    },
    image: "/geo-images/bulgaria/nat-musala.webp"
  },
  {
    id: "nat-vihren",
    type: "mountain",
    parent: "bg-country",
    coords: [23.3965, 41.7695],
    name: {
      de: "Vihren",
      hu: "Vihren",
      ro: "Vihren",
      en: "Vihren"
    },
    description: {
      de: "Der bekannteste Gipfel des Pirin und ein starkes Ziel für Bergsteiger und Wanderer. Vihren steht für schroffe Kalksteinlandschaft und alpine Touren. Der Berg ist ein Kernbegriff für Naturreisen in Südwestbulgarien. Für Berg-SEO in Bulgarien ist Vihren besonders stark.",
      hu: "A Pirin legismertebb csúcsa és erős célpont hegymászóknak és túrázóknak. Vihren a meredek mészkővidéket és az alpesi túrákat jelenti. A hegy kulcsszó a délnyugat-bolgár természetjárásban. A bolgár hegyi SEO-ban Vihren kiemelkedő.",
      ro: "Cel mai cunoscut vârf din Pirin și o țintă importantă pentru alpiniști și drumeți. Vihren înseamnă relief calcaros abrupt și trasee alpine. Muntele este un termen cheie pentru turismul de natură din sud-vestul Bulgariei. Pentru SEO montan în Bulgaria, Vihren este foarte puternic.",
      en: "The best-known peak of Pirin and a major target for climbers and hikers. Vihren stands for rugged limestone terrain and alpine routes. The mountain is a core term for nature travel in southwestern Bulgaria. For mountain SEO in Bulgaria, Vihren is especially strong."
    },
    facts: {
      de: ["Pirin", "Kalkstein", "Bergsteigen", "Alpine Route", "Südwestbulgarien"],
      hu: ["Pirin", "Mészkő", "Hegymászás", "Alpesi út", "Délnyugat-Bulgária"],
      ro: ["Pirin", "Calcar", "Alpinism", "Traseu alpin", "Sud-vestul Bulgariei"],
      en: ["Pirin", "Limestone", "Climbing", "Alpine route", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/nat-vihren.webp"
  },
  {
    id: "nat-botev-peak",
    type: "mountain",
    parent: "bg-country",
    coords: [24.9140, 42.7030],
    name: {
      de: "Botev-Gipfel",
      hu: "Botev-csúcs",
      ro: "Vârful Botev",
      en: "Botev Peak"
    },
    description: {
      de: "Der höchste Gipfel des Balkangebirges und ein markantes Naturziel im Zentrum Bulgariens. Botev Peak ist eng mit Wandern, Hochgebirge und Panoramablicken verbunden. Die Lage im Nationalpark macht ihn für Naturreisen wichtig. Für Bergtourismus in Bulgarien ist Botev ein starkes Keyword.",
      hu: "A Balkán-hegység legmagasabb csúcsa és markáns természeti célpont Közép-Bulgáriában. A Botev-csúcs szorosan kapcsolódik a túrázáshoz, a magashegyi élményekhez és a panorámákhoz. A nemzeti parkbeli fekvése fontos természetes úti céllá teszi. A bolgár hegyi turizmusban Botev erős kulcsszó.",
      ro: "Cel mai înalt vârf din Munții Balcani și o destinație naturală importantă în centrul Bulgariei. Botev este strâns legat de drumeții, experiențe de mare altitudine și panorame. Poziția în parc național îl face important pentru turismul de natură. Pentru turism montan în Bulgaria, Botev este un cuvânt cheie puternic.",
      en: "The highest peak of the Balkan Mountains and a major natural destination in central Bulgaria. Botev Peak is closely tied to hiking, high-mountain experiences, and panoramic views. Its national-park setting makes it important for nature travel. For mountain tourism in Bulgaria, Botev is a strong keyword."
    },
    facts: {
      de: ["Balkangebirge", "Höchster Gipfel", "Wandern", "Panorama", "Nationalpark"],
      hu: ["Balkán-hegység", "Legmagasabb csúcs", "Túrázás", "Panoráma", "Nemzeti park"],
      ro: ["Munții Balcani", "Cel mai înalt vârf", "Drumeții", "Panoramă", "Parc național"],
      en: ["Balkan Mountains", "Highest peak", "Hiking", "Panorama", "National park"]
    },
    image: "/geo-images/bulgaria/nat-botev-peak.webp"
  },
  {
    id: "nat-rhodopes",
    type: "mountain",
    parent: "bg-country",
    coords: [24.6000, 41.8000],
    name: {
      de: "Rhodopen",
      hu: "Rodope-hegység",
      ro: "Munții Rodopi",
      en: "Rhodopes"
    },
    description: {
      de: "Das große südliche Bergland Bulgariens mit weichen Linien, Wäldern und Dorfkultur. Die Rhodopen sind stark mit Natur, Folklore und Langstreckenreisen verbunden. Viele Besucher suchen hier Aussichtspunkte, Schluchten und traditionelle Ortschaften. Für Bulgarien-NaturSEO ist der Name sehr breit einsetzbar.",
      hu: "Bulgária nagy déli hegyvidéke, lágy vonalakkal, erdőkkel és falusi kultúrával. A Rodope-hegység erősen kapcsolódik a természethez, a folklórhoz és a hosszabb utazásokhoz. Sok látogató kilátópontokat, szurdokokat és hagyományos falvakat keres itt. A bolgár természet SEO-ban nagyon széles körben használható.",
      ro: "Marea zonă montană din sudul Bulgariei, cu linii domoale, păduri și cultură rurală. Rodopii sunt strâns legați de natură, folclor și călătorii mai lungi. Mulți vizitatori caută puncte de belvedere, defileuri și sate tradiționale. Pentru SEO despre natura Bulgariei, numele este foarte versatil.",
      en: "The large southern mountain region of Bulgaria, with soft contours, forests, and village culture. The Rhodopes are closely tied to nature, folklore, and longer road trips. Many visitors search for viewpoints, gorges, and traditional settlements here. For Bulgaria nature SEO, the name is broadly useful."
    },
    facts: {
      de: ["Südbulgarien", "Wälder", "Folklore", "Dörfer", "Schluchten"],
      hu: ["Dél-Bulgária", "Erdők", "Folklór", "Falvak", "Szurdokok"],
      ro: ["Sudul Bulgariei", "Păduri", "Folclor", "Sate", "Defilee"],
      en: ["Southern Bulgaria", "Forests", "Folklore", "Villages", "Gorges"]
    },
    image: "/geo-images/bulgaria/nat-rhodopes.webp"
  },
  {
    id: "nat-srebarna-lake",
    type: "lake",
    parent: "bg-country",
    coords: [27.0330, 44.1055],
    name: {
      de: "Sreburna-See",
      hu: "Srebarna-tó",
      ro: "Lacul Srebarna",
      en: "Srebarna Lake"
    },
    description: {
      de: "Ein bedeutender Süßwassersee im Nordosten Bulgariens mit internationalem Schutzstatus. Sreburna ist bekannt für Vogelbeobachtung, Feuchtgebiete und ruhige Natur. Der See passt perfekt zu Öko- und Naturtourismus in Bulgarien. Als Seeziel ist er stark für nachhaltige Reise-SEO.",
      hu: "Fontos édesvízi tó Bulgária északkeleti részén, nemzetközi védelem alatt. Srebarna a madármegfigyelésről, a vizes élőhelyekről és a csendes természetről ismert. A tó tökéletes az öko- és természetjáró turizmushoz Bulgáriában. Tóként erős a fenntartható utazási SEO-ban.",
      ro: "Un lac important de apă dulce în nord-estul Bulgariei, cu statut internațional de protecție. Srebarna este cunoscut pentru birdwatching, zone umede și natură liniștită. Lacul se potrivește perfect turismului ecologic și de natură din Bulgaria. Ca destinație lacustră, este puternic pentru SEO sustenabil.",
      en: "An important freshwater lake in northeastern Bulgaria with international protection status. Srebarna is known for birdwatching, wetlands, and quiet nature. The lake fits perfectly into eco and nature tourism in Bulgaria. As a lake destination, it is strong for sustainable travel SEO."
    },
    facts: {
      de: ["Nordostbulgarien", "Vogelbeobachtung", "Feuchtgebiete", "Schutzstatus", "Ökotourismus"],
      hu: ["Északkelet-Bulgária", "Madármegfigyelés", "Vizes élőhely", "Védelem", "Ökoturizmus"],
      ro: ["Nord-estul Bulgariei", "Birdwatching", "Zone umede", "Statut protejat", "Ecoturism"],
      en: ["Northeastern Bulgaria", "Birdwatching", "Wetlands", "Protected status", "Ecotourism"]
    },
    image: "/geo-images/bulgaria/nat-srebarna-lake.webp"
  },
  {
    id: "nat-atanasovsko-lake",
    type: "lake",
    parent: "bg-country",
    coords: [27.4800, 42.5400],
    name: {
      de: "Atanasowo-See",
      hu: "Atanaszovo-tó",
      ro: "Lacul Atanasovsko",
      en: "Atanasovsko Lake"
    },
    description: {
      de: "Ein salziger Küstensee nördlich von Burgas mit Salzbecken und Vogelreichtum. Atanasovo ist für Naturfotografie, Biodiversität und Küstenökologie bekannt. Die Lage nahe der Stadt macht den See leicht erreichbar. Für Black-Sea-Nature-SEO ist er besonders wertvoll.",
      hu: "Sós parti tó Burgasz északi részén, sólepárlókkal és gazdag madárvilággal. Atanaszovo a természetfotózásról, a biodiverzitásról és a parti ökológiáról ismert. A városhoz közeli fekvés könnyen elérhetővé teszi. Fekete-tengeri természet SEO-ban különösen értékes.",
      ro: "Un lac sărat de coastă la nord de Burgas, cu bazine de sare și bogăție avifaunistică. Atanasovsko este cunoscut pentru fotografie de natură, biodiversitate și ecologie litorală. Poziția aproape de oraș îl face ușor accesibil. Pentru SEO de natură la Marea Neagră, este foarte valoros.",
      en: "A saline coastal lake north of Burgas with salt pans and rich birdlife. Atanasovsko is known for nature photography, biodiversity, and coastal ecology. Its near-city location makes it easy to access. For Black Sea nature SEO, it is especially valuable."
    },
    facts: {
      de: ["Burgas-Nähe", "Salzsee", "Vogelwelt", "Küstenökologie", "Fotografie"],
      hu: ["Burgasz közelében", "Sós tó", "Madárvilág", "Parti ökológia", "Fotózás"],
      ro: ["Aproape de Burgas", "Lac sărat", "Păsări", "Ecologie litorală", "Fotografie"],
      en: ["Near Burgas", "Salt lake", "Birdlife", "Coastal ecology", "Photography"]
    },
    image: "/geo-images/bulgaria/nat-atanasovsko-lake.webp"
  },
  {
    id: "nat-iskar-river",
    type: "river",
    parent: "bg-country",
    coords: [23.3920, 42.9500],
    name: {
      de: "Iskar",
      hu: "Iszkar folyó",
      ro: "Râul Iskar",
      en: "Iskar River"
    },
    description: {
      de: "Der längste Fluss, der vollständig durch Bulgarien fließt, und ein wichtiger Naturkorridor. Iskar ist mit Schluchten, Stauseen und Talräumen verbunden. Er prägt Städte, Dörfer und Verkehrsachsen im Westen und Zentrum des Landes. Für Fluss-SEO in Bulgarien ist Iskar sehr stark.",
      hu: "A leghosszabb, teljes egészében Bulgárián átfolyó folyó és fontos természeti folyosó. Az Iszkar szurdokokkal, tározókkal és völgytérségekkel kapcsolódik össze. Meghatározza Nyugat- és Közép-Bulgária városait, falvait és közlekedési tengelyeit. A bolgár folyó SEO-ban nagyon erős.",
      ro: "Cel mai lung râu care curge integral prin Bulgaria și un important coridor natural. Iskarul este legat de defilee, lacuri de acumulare și văi. Influențează orașele, satele și axele de transport din vestul și centrul țării. Pentru SEO despre râurile Bulgariei, Iskar este foarte puternic.",
      en: "The longest river flowing entirely through Bulgaria and an important natural corridor. Iskar is linked to gorges, reservoirs, and valley landscapes. It shapes cities, villages, and transport routes in the west and center of the country. For Bulgaria river SEO, Iskar is very strong."
    },
    facts: {
      de: ["Längster Binnenfluss", "Täler", "Stauseen", "Westbulgarien", "Naturkorridor"],
      hu: ["Leghosszabb belső folyó", "Völgyek", "Tározók", "Nyugat-Bulgária", "Természeti folyosó"],
      ro: ["Cel mai lung râu intern", "Văi", "Lacuri de acumulare", "Vestul Bulgariei", "Coridor natural"],
      en: ["Longest inland river", "Valleys", "Reservoirs", "Western Bulgaria", "Natural corridor"]
    },
    image: "/geo-images/bulgaria/nat-iskar-river.webp"
  },
  {
    id: "nat-st-anastasia-island",
    type: "island",
    parent: "bg-country",
    coords: [27.9620, 42.4540],
    name: {
      de: "Sankt-Anastasia-Insel",
      hu: "Szent Anasztázia-sziget",
      ro: "Insula Sfânta Anastasia",
      en: "St. Anastasia Island"
    },
    description: {
      de: "Die bekannteste bulgarische Insel im Schwarzen Meer und ein beliebtes Ausflugsziel vor Burgas. Die Insel verbindet Klostergeschichte, Küstenlandschaft und Bootstourismus. Besucher kommen für Ruhe, Meerblick und eine besondere Atmosphäre. Als Insel-Keyword ist sie sehr attraktiv für Bulgarien-Reisen.",
      hu: "Bulgária legismertebb fekete-tengeri szigete és kedvelt kirándulóhely Burgasz előtt. A sziget a kolostortörténetet, a parti tájat és a hajós turizmust köti össze. A látogatók a nyugalom, a tengerkép és a különleges hangulat miatt jönnek. Sziget kulcsszóként nagyon vonzó a bolgár utazásokban.",
      ro: "Cea mai cunoscută insulă bulgară din Marea Neagră și o destinație populară de excursie lângă Burgas. Insula combină istoria monahală, peisajul litoral și turismul cu barca. Vizitatorii vin pentru liniște, vedere la mare și o atmosferă aparte. Ca termen SEO pentru insule, este foarte atractivă.",
      en: "The best-known Bulgarian island in the Black Sea and a popular excursion spot near Burgas. The island combines monastery history, coastal scenery, and boat tourism. Visitors come for calm, sea views, and a unique atmosphere. As an island keyword, it is very attractive for Bulgaria travel."
    },
    facts: {
      de: ["Schwarzes Meer", "Burgas", "Bootsausflug", "Klostergeschichte", "Inselziel"],
      hu: ["Fekete-tenger", "Burgasz", "Hajós kirándulás", "Kolostortörténet", "Szigetcélpont"],
      ro: ["Marea Neagră", "Burgas", "Excursie cu barca", "Istorie monahală", "Destinație insulară"],
      en: ["Black Sea", "Burgas", "Boat trip", "Monastery history", "Island destination"]
    },
    image: "/geo-images/bulgaria/nat-st-anastasia-island.webp"
  }
];

bulgariaAllPoi.push(...bulgariaCities, ...bulgariaCulture, ...bulgariaNature);
