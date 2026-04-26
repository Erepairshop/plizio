import type { POI } from "./poi";

export const poiExtraHu3: POI[] = [
  // HU-BU: Budapest (3G, 1LN, 1W)
  {
    id: "historical-aquincum-museum-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.049, 47.564],
    name: { de: "Aquincum Museum", hu: "Aquincumi Múzeum", ro: "Muzeul Aquincum", en: "Aquincum Museum" },
    description: {
      de: "Reste der antiken römischen Stadt Aquincum, einst Hauptstadt der Provinz Pannonia.",
      hu: "Az ókori római Aquincum városának maradványai, amely egykor Pannónia provincia központja volt.",
      ro: "Vestigiile vechiului oraș roman Aquincum, odinioară capitala provinciei Pannonia.",
      en: "Remains of the ancient Roman city of Aquincum, once the center of Pannonia province."
    },
    facts: {
      de: ["Im 1. Jahrhundert gegründet.", "Besitzt ein gut erhaltenes Amphitheater."],
      hu: ["Az 1. században alapították.", "Jól megőrzött amfiteátrummal rendelkezik."],
      ro: ["Fondat în secolul I.", "Deține un amfiteatru bine conservat."],
      en: ["Founded in the 1st century.", "Features a well-preserved amphitheater."]
    },
    descriptionAdvanced: {
      de: "Das Aquincum Museum bietet einen faszinierenden Einblick in das Leben der römischen Antike am Ufer der Donau. Als ehemalige Hauptstadt der Provinz Pannonia war Aquincum ein bedeutendes militärisches und ziviles Zentrum des Römischen Reiches. Die weitläufige Ausgrabungsstätte umfasst die Überreste von Wohngebäuden, öffentlichen Bädern, Tempeln und zwei beeindruckenden Amphitheatern. Besucher können durch die antiken Straßen wandeln und die gut erhaltenen Grundmauern sowie prächtige Mosaikböden bestaunen. Das dazugehörige Museum beherbergt eine wertvolle Sammlung von archäologischen Funden, darunter Statuen, Schmuck, Münzen und die berühmte Wasserorgel von Aquincum. Die Anlage veranschaulicht eindrucksvoll die hochentwickelte römische Ingenieurskunst und Stadtplanung. Jährlich stattfindende Festivals und historische Vorführungen lassen die Geschichte für Jung und Alt lebendig werden und machen das Museum zu einem der wichtigsten kulturellen Ziele in Budapest.",
      hu: "Az Aquincumi Múzeum lenyűgöző betekintést nyújt a római kori életbe a Duna partján. Pannónia provincia egykori központjaként Aquincum jelentős katonai és polgári központja volt a Római Birodalomnak. A kiterjedt ásatási területen lakóházak, közfürdők, templomok és két lenyűgöző amfiteátrum maradványai láthatók. A látogatók az ókori utcákon sétálva megcsodálhatják a jól megőrzött alapfalakat és a díszes mozaikpadlókat. A múzeum értékes régészeti leleteket őriz, köztük szobrokat, ékszereket, érméket és az Aquincumi Víziorgonát. A romkert szemléletesen mutatja be a fejlett római mérnöki tudást és várostervezést. Az évente megrendezett fesztiválok és történelmi játékok minden korosztály számára életre keltik a múltat, Budapest egyik legfontosabb kulturális helyszínévé téve a múzeumot. Történelem K5 – Római Birodalom Pannóniában.",
      ro: "Muzeul Aquincum din Budapesta păstrează vestigiile unuia dintre cele mai importante centre administrative și militare ale Imperiului Roman în provincia Pannonia. Situat în cartierul Óbuda, parcul arheologic cuprinde ruinele orașului civil, inclusiv amfiteatrul, băile publice, vilele cu mozaicuri spectaculoase și sistemul de canalizare ingenios. Cel mai faimos exponat al muzeului este orga hidraulică portabilă, o raritate mondială din antichitate. Vizitatorii pot retrăi atmosfera de acum 2000 de ani prin intermediul expozițiilor interactive și al festivalurilor istorice, precum Floralia, care aduc la viață tradițiile romane. Aquincum este o dovadă vie a rădăcinilor europene ale capitalei maghiare și un sit esențial pentru înțelegerea antichității. Istorie K8 – Provincia Pannonia și moștenirea romană.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stadt Aquincum wurde gegen Ende des 1. Jahrhunderts n. Chr. als Teil des römischen Limes gegründet.",
      "Auf dem Höhepunkt ihrer Entwicklung im 2. und 3. Jahrhundert hatte die Stadt schätzungsweise 30.000 bis 40.000 Einwohner.",
      "Aquincum verfügte über eine eigene Wasserleitung, Kanalisation und beheizte Badehäuser nach römischem Standard.",
      "Die im Museum ausgestellte Aquincum-Orgel ist ein weltweit einzigartiges Musikinstrument aus dem Jahr 228 n. Chr.",
      "Das Zivilamphitheater bot Platz für rund 6.000 Zuschauer, während das Militäramphitheater noch deutlich größer war.",
      "Marcus Aurelius soll Teile seiner 'Selbstbetrachtungen' während der Feldzüge gegen die Markomannen hier verfasst haben.",
      "Die Ausgrabungen begannen im späten 19. Jahrhundert und brachten eine der größten zusammenhängenden Ruinenstädte Ungarns ans Licht.",
      "Das Museum wurde 1894 eröffnet und ist damit eines der ältesten Museen für Archäologie im Land."
      ],
      hu: ["Aquincumot az 1. század végén alapították a római limes részeként.", "Virágkorában, a 2-3. században lakossága elérte a 30-40 ezer főt.", "Saját vízvezetékkel, csatornázással és fűtött fürdőkkel rendelkezett.", "A múzeumban látható víziorgona a világon egyedülálló hangszer 228-ból.", "Polgárvárosi amfiteátruma 6000 néző befogadására volt alkalmas.", "Marcus Aurelius császár itt írhatta „Elmélkedései” egyes részeit.", "Az ásatások a 19. század végén indultak el a területen.", "A múzeum 1894-ben nyílt meg, az ország egyik legrégebbi ilyen intézménye."],
      ro: ["Aquincum a fost capitala provinciei Pannonia Inferior, având peste 40.000 de locuitori.", "Orga de la Aquincum, descoperită în 1931, este singurul instrument muzical roman de acest tip păstrat.", "Amfiteatrul civil putea găzdui până la 6.000 de spectatori la luptele de gladiatori.", "Săpăturile sistematice au început în anul 1880 sub conducerea lui János Rómer.", "Muzeul include o clădire modernă de expoziții și un lapidariu cu sute de inscripții în piatră.", "Ruinele băilor romane păstrează încă sistemul de încălzire prin pardoseală (hypocaustum)."],
      en: []
    },
  },
  {
    id: "historical-vasarcsarnok-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.058, 47.487],
    name: { de: "Große Markthalle", hu: "Nagy Vásárcsarnok", ro: "Marea Hală Centrală", en: "Great Market Hall" },
    description: {
      de: "Die größte und schönste Markthalle in Budapest, bekannt für ihre Architektur und lokale Produkte.",
      hu: "Budapest legnagyobb és legszebb vásárcsarnoka, híres építészetéről és helyi termékeiről.",
      ro: "Cea mai mare și mai frumoasă hală de piață din Budapesta, celebră pentru arhitectură și produse locale.",
      en: "Budapest's largest and most beautiful market hall, famous for its architecture and local products."
    },
    facts: {
      de: ["1897 eröffnet.", "Dach mit bunten Zsolnay-Ziegeln."],
      hu: ["1897-ben nyílt meg.", "Zsolnay-cserepes tetőszerkezet."],
      ro: ["Deschisă în 1897.", "Acoperiș cu țigle colorate Zsolnay."],
      en: ["Opened in 1897.", "Roof decorated with colorful Zsolnay tiles."]
    },
    descriptionAdvanced: {
      de: "Die Große Markthalle in Budapest, auch Zentralmarkthalle genannt, ist ein architektonisches Juwel und ein pulsierendes Zentrum des täglichen Lebens. Das Ende des 19. Jahrhunderts im neugotischen Stil errichtete Gebäude besticht durch seine imposante Stahlkonstruktion und das mit farbenfrohen Zsolnay-Keramikziegeln gedeckte Dach. Auf drei Etagen bietet die Halle eine unglaubliche Vielfalt an frischen Lebensmitteln, von traditionellem ungarischem Paprika und Salami bis hin zu frischem Obst, Gemüse und Fleisch. Während das Erdgeschoss hauptsächlich den Lebensmitteln gewidmet ist, finden Besucher im Obergeschoss ungarisches Kunsthandwerk, Souvenirs und zahlreiche Imbissstände, die lokale Spezialitäten wie Lángos anbieten. Der Keller beherbergt Fischgeschäfte und eingelegtes Gemüse. Die Markthalle ist nicht nur ein Ort zum Einkaufen, sondern auch ein bedeutendes Denkmal und ein Muss für jeden Besucher, der die echte Budapester Atmosphäre erleben möchte.",
      hu: "A budapesti Nagyvásárcsarnok, más néven Központi Vásárcsarnok, építészeti remekmű és a fővárosi mindennapi élet lüktető központja. A 19. század végén neogótikus stílusban emelt épület lenyűgöző acélszerkezetével és a színes Zsolnay-kerámiákkal díszített tetőzetével emelkedik ki környezetéből. Három szinten kínál friss élelmiszereket, a hagyományos magyar paprikától és szalámitól kezdve a zöldségeken át a friss húsokig. Míg a földszint az élelmiszereké, az emeleten magyar kézműves termékek, szuvenírek és lángosos büfék várják a turistákat. A pincerész halboltoknak és savanyúságosoknak ad otthont. A vásárcsarnok nemcsak bevásárlóhely, hanem műemlék is, amely elengedhetetlen állomása az igazi budapesti hangulatot kereső látogatóknak. Történelem K8 – Modern kori építészet és kereskedelem.",
      ro: "Hala Centrală din Budapesta, cunoscută și sub numele de Nagycsarnok (Marea Hală), este cel mai mare și mai frumos complex comercial acoperit din capitala Ungariei. Construită între anii 1894 și 1897 după planurile arhitectului Samu Pecz, clădirea este o capodoperă a stilului istoricist, remarcându-se prin structura sa metalică impunătoare și acoperișul decorat cu plăci ceramice colorate Zsolnay. Situată la capătul Podului Libertății, hala a fost concepută pentru a asigura aprovizionarea modernă și igienică a orașului, având chiar și un tunel care o lega direct de cheiul Dunării. Astăzi, este o destinație turistică de top unde vizitatorii pot găsi produse tradiționale maghiare, de la celebrul salam Pick și boiaua de ardei, până la delicatese locale și suveniruri artizanale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Markthalle wurde 1897 nach Entwürfen des Architekten Samu Pecz fertiggestellt.",
      "Zur Eröffnung war die Halle eine der modernsten ihrer Art, mit eigenem Gleisanschluss und Kühlsystemen.",
      "Das charakteristische Dach besteht aus farbigen Keramikziegeln der weltberühmten Zsolnay-Manufaktur in Pécs.",
      "Im Zweiten Weltkrieg wurde das Gebäude schwer beschädigt und verlor für einige Zeit seinen alten Glanz.",
      "In den 1990er Jahren fand eine umfassende Renovierung statt, die der Halle ihre ursprüngliche Pracht zurückgab.",
      "Die Markthalle ist die größte ihrer Art in Ungarn und umfasst eine Fläche von rund 10.000 Quadratmetern.",
      "Berühmte Persönlichkeiten wie Prinzessin Diana und Margaret Thatcher haben die Halle bei ihren Staatsbesuchen besucht.",
      "Die unterste Etage war früher für die Lagerung von Waren konzipiert und ist heute für ihre Fischmärkte bekannt."
      ],
      hu: ["A csarnok 1897-ben készült el Pecz Samu építész tervei alapján.", "Megnyitásakor kora egyik legmodernebbje volt saját vasúti rakodóval.", "Jellegzetes tetőcserepei a pécsi Zsolnay-gyárból származnak.", "A második világháború alatt az épület súlyos károkat szenvedett.", "Az 1990-es években teljes körű felújításon esett át a csarnok.", "Alapterülete mintegy 10 000 negyzetmétert tesz ki.", "Olyan hírességek is megfordultak itt, mint Diana hercegnő vagy Margaret Thatcher.", "A legalsó szinten találhatók a híres vecsési savanyúságokat kínáló standok."],
      ro: ["Inaugurarea oficială a avut loc în anul 1897, în prezența împăratului Franz Joseph.", "Suprafața totală a halei este de aproximativ 10.000 de metri pătrați.", "Acoperișul este acoperit cu țigle de ceramică smălțuită de la fabrica Zsolnay din Pécs.", "În 2013, CNN Travel a desemnat-o drept cea mai frumoasă piață din lume.", "Subsolul halei a fost dotat inițial cu celule frigorifice moderne pentru carne.", "Clădirea a fost grav avariată în al Doilea Război Mondial și restaurată în anii '90."],
      en: []
    },
  },
  {
    id: "historical-operahaz-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.058, 47.502],
    name: { de: "Ungarische Staatsoper", hu: "Magyar Állami Operaház", ro: "Opera de Stat Maghiară", en: "Hungarian State Opera" },
    description: {
      de: "Ein Meisterwerk der Neorenaissance an der Andrássy-Allee, entworfen von Miklós Ybl.",
      hu: "A neoreneszánsz építészet remekműve az Andrássy úton, Ybl Miklós tervezte.",
      ro: "O capodoperă a arhitecturii neorenascentiste pe Bulevardul Andrássy, proiectată de Miklós Ybl.",
      en: "A masterpiece of Neo-Renaissance architecture on Andrássy Avenue, designed by Miklós Ybl."
    },
    facts: {
      de: ["1884 eingeweiht.", "Hervorragende Akustik."],
      hu: ["1884-ben avatták fel.", "Kiváló akusztikájáról ismert."],
      ro: ["Inaugurată în 1884.", "Acoustică excelentă."],
      en: ["Inaugurated in 1884.", "Famous for its excellent acoustics."]
    },
    descriptionAdvanced: {
      de: "Die Ungarische Staatsoper in Budapest gilt als eines der schönsten Opernhäuser der Welt und ist ein glanzvolles Symbol der ungarischen Kulturgeschichte. Das im prachtvollen Neorenaissancestil an der eleganten Andrássy-Allee errichtete Gebäude wurde von dem berühmten Architekten Miklós Ybl entworfen. Die opulente Innenausstattung mit Marmorsäulen, vergoldeten Ornamenten und Deckenfresken bedeutender ungarischer Maler wie Károly Lotz raubt den Besuchern den Atem. Die Akustik des hufeisenförmigen Zuschauerraums wird oft als eine der besten in Europa bezeichnet. Neben hochkarätigen Opernaufführungen beherbergt das Haus auch das Ungarische Nationalballett. Eine Führung durch das Gebäude offenbart architektonische Details wie die prunkvolle Treppe und das Foyer, das an die Pracht der K.-u.-k.-Monarchie erinnert. Die Staatsoper ist nicht nur ein Ort für Musikliebhaber, sondern auch ein bedeutendes historisches Denkmal, das die goldene Ära Budapests widerspiegelt.",
      hu: "A Magyar Állami Operaház Budapest egyik legszebb épülete és a magyar kultúrtörténet ragyogó szimbóluma. A neoreneszánsz stílusú palotát az Andrássy úton a híres építész, Ybl Miklós tervezte. Pompás belső terei márványoszlopokkal, aranyozott díszítésekkel és Lotz Károly mennyezeti freskóival nyűgözi le a látogatókat. Patkó alakú nézőterének akusztikája Európa legjobbjai közé tartozik. Az épület nemcsak opera- és balettelőadásoknak ad otthont, hanem önmagában is látogatható műemlék. Egy vezetett túra során megismerhetjük a díszes lépcsőházat, a királyi páholyt és a főlépcsőházat, amely a monarchia aranykorát idézi. Az Operaház a budapesti zenei élet központja és a világ egyik legjelentősebb dalszínháza. Művészettörténet K8 – Neoreneszánsz építészet.",
      ro: "Opera de Stat Maghiară din Budapesta este una dintre cele mai spectaculoase clădiri de operă din lume, fiind o bijuterie a stilului neorenașterii italiene. Proiectată de celebrul arhitect Miklós Ybl și deschisă în anul 1884, construcția a fost finanțată parțial de împăratul Franz Joseph I, cu condiția ca aceasta să nu fie mai mare decât Opera din Viena. Interiorul este de o opulență rară, decorat cu fresce semnate de maeștri precum Károly Lotz și Bertalan Székely, și dominat de un candelabru gigant din bronz. Acustica sălii principale este considerată printre cele mai bune din Europa, fiind a treia după Scala din Milano și Opera Garnier din Paris, oferind cadrul perfect pentru spectacole de operă și balet de clasă mondială într-o atmosferă istorică autentică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Opernhaus wurde 1884 nach neun Jahren Bauzeit in Anwesenheit von Kaiser Franz Joseph I. eröffnet.",
      "Kaiser Franz Joseph stellte die Bedingung, dass die Oper nicht größer sein dürfe als die Wiener Staatsoper.",
      "Der Hauptlüster im Zuschauerraum wiegt drei Tonnen und wurde ursprünglich für Gasbeleuchtung konzipiert.",
      "Gustav Mahler wirkte hier von 1888 bis 1891 als Direktor und prägte eine bedeutende Ära des Hauses.",
      "Die Fassade wird von Statuen berühmter Komponisten wie Ferenc Liszt und Ferenc Erkel geschmückt.",
      "In der königlichen Loge sind die Symbole der ungarischen Könige und die Initialen von Franz Joseph und Sisi zu sehen.",
      "Nach einer umfassenden Renovierung wurde das Haus im Jahr 2022 mit modernster Bühnentechnik wiedereröffnet.",
      "Der hufeisenförmige Saal bietet Platz für rund 1.200 Zuschauer und sorgt für ein intimes Opernerlebnis."
      ],
      hu: ["Kilencévnyi építkezés után 1884-ben avatták fel Ferenc József jelenlétében.", "A császár kikötése volt, hogy nem lehet nagyobb a bécsi Operánál.", "A nézőtér központi csillárja három tonnát nyom és eredetileg gázüzemű volt.", "Gustav Mahler 1888 és 1891 között az intézmény igazgatója volt.", "Homlokzatát Liszt Ferenc és Erkel Ferenc szobrai díszítik.", "A királyi páholyban ma is láthatók Ferenc József és Sisi névjelei.", "A 2022-ben befejezett felújítás során modern színpadtechnikát kapott.", "A nézőtér befogadóképessége körülbelül 1200 fő."],
      ro: ["Opera a fost deschisă pe 27 septembrie 1884, după 9 ani de construcție.", "Capacitatea sălii este de aproximativ 1.200 de locuri după renovarea recentă.", "Candelabrul principal cântărește 3 tone și a fost fabricat la Mainz, Germania.", "Gustav Mahler a fost directorul artistic al operei între anii 1888 și 1891.", "Fațada este ornată cu statuile compozitorilor Ferenc Erkel și Franz Liszt.", "Scena este dotată cu o tehnologie hidraulică avansată încă de la inaugurare."],
      en: []
    },
  },
  {
    id: "animal-habitat-allatkert-bp-extra",
    type: "animal-habitat",
    parent: "HU-BU",
    coords: [19.077, 47.518],
    name: { de: "Budapester Zoo", hu: "Fővárosi Állat- és Növénykert", ro: "Grădina Zoologică din Budapesta", en: "Budapest Zoo and Botanical Garden" },
    description: {
      de: "Einer der ältesten Zoos der Welt, gelegen im Stadtwäldchen von Budapest.",
      hu: "A világ egyik legrégebbi állatkertje, amely a Városligetben található.",
      ro: "Una dintre cele mai vechi grădini zoologice din lume, situată în Parcul Orașului.",
      en: "One of the oldest zoos in the world, located in the City Park of Budapest."
    },
    facts: {
      de: ["1866 gegründet.", "Über 1000 Tierarten."],
      hu: ["1866-ban alapították.", "Több mint 1000 állatfaj látható."],
      ro: ["Fondată în 1866.", "Peste 1000 de specii de animale."],
      en: ["Founded in 1866.", "Home to over 1000 animal species."]
    },
    descriptionAdvanced: {
      de: "Der Budapester Zoo und Botanische Garten ist eine der ältesten und traditionsreichsten zoologischen Einrichtungen weltweit. Gelegen im malerischen Stadtwäldchen, bietet der Zoo eine faszinierende Mischung aus Tierbeobachtung und architektonischer Schönheit. Viele der Tierhäuser sind in einem einzigartigen Jugendstil gestaltet, wie etwa das Elefantenhaus mit seinen orientalischen Türmen und Zsolnay-Keramiken. Der Zoo beherbergt über tausend Tierarten aus allen Kontinenten, eingebettet in eine botanisch reiche Umgebung mit seltenen Pflanzen und alten Bäumen. Besonders hervorzuheben ist das Engagement des Zoos für den Artenschutz und die Nachzucht bedrohter Spezies. Neben den Tieren bietet die Anlage interaktive Ausstellungen wie das 'Magische Berg'-Zentrum, das Wissen über die Evolution und die Naturwunder vermittelt. Für Familien ist der Zoo seit Generationen ein beliebtes Ausflugsziel, das Bildung und Erholung auf höchstem Niveau verbindet und den Respekt vor der Natur fördert.",
      hu: "A Fővárosi Állat- és Növénykert a világ egyik legrégebbi és legtöbb hagyománnyal rendelkező állatkertje. A festői Városligetben elhelyezkedő intézmény az állatbemutatás és az építészeti szépség különleges elegyét nyújtja. Számos állatháza egyedülálló szecessziós stílusban épült, mint például az Elefántház keleti tornyaival és Zsolnay-díszítéseivel. Az állatkert több mint ezer állatfajnak ad otthont, amelyeket botanikai értékekben gazdag környezet vesz körül. Különösen jelentős a veszélyeztetett fajok védelmében végzett munkája. A látogatókat interaktív kiállítások, mint a Varázshegy, segítik a természet titkainak megismerésében. Generációk óta a budapesti családok kedvenc helyszíne, ahol a kikapcsolódás és a környezettudatos nevelés kéz a kézben jár. Biológia K6 – Állatok és növények a világ körül.",
      ro: "Grădina Zoologică și Botanică din Budapesta este cea mai veche grădină zoologică din Ungaria și una dintre primele deschise în lume, primindu-și primii vizitatori în anul 1866. Situată în parcul Városliget, grădina este faimoasă nu doar pentru diversitatea animalelor sale, ci și pentru arhitectura sa unică, cu numeroase pavilioane construite în stil Art Nouveau și cu influențe orientale. Printre cele mai spectaculoase clădiri se numără Casa Elefanților, decorată cu ceramică Zsolnay, și Poarta Principală monumentală. Grădina se concentrează astăzi pe conservarea speciilor pe cale de dispariție și pe educația ecologică, oferind experiențe interactive precum 'Palatul Magic' pentru copii, toate într-un cadru botanic luxuriant ce cuprinde mii de specii de plante din întreaga lume.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde am 9. August 1866 eröffnet und ist damit einer der ersten Zoos der Welt.",
      "Das berühmte Elefantenhaus ist im ungarischen Jugendstil mit indo-islamischen Motiven gestaltet.",
      "In den 1910er Jahren wurden viele der heute noch stehenden Gebäude von Károly Kós entworfen.",
      "Der 'Magische Berg' (Varázshegy) befindet sich im Inneren des großen künstlichen Felsens im Zentrum des Zoos.",
      "Der Zoo beherbergt auch ein bedeutendes Aquarium und ein Palmenhaus mit tropischer Vegetation.",
      "Viele der historischen Gebäude im Zoo stehen unter nationalem Denkmalschutz.",
      "Der Budapester Zoo nimmt an zahlreichen internationalen Programmen zur Rettung gefährdeter Tierarten teil.",
      "Neben exotischen Tieren zeigt der Zoo auch traditionelle ungarische Haustierrassen in einem eigenen Bereich."
      ],
      hu: ["1866. augusztus 9-én nyílt meg, így a világ elsők között alapított állatkertje.", "A híres Elefántházat indoszlám stílusjegyek és magyar szecesszió díszíti.", "Az 1910-es években Kós Károly tervei alapján épült újjá számos épülete.", "A Varázshegy a kert közepén álló hatalmas műszikla belsejében található.", "Jelentős akváriummal és trópusi növényeket bemutató Pálmaházzal rendelkezik.", "Az állatkert szinte minden épülete országos műemléki védelem alatt áll.", "Aktívan részt vesz nemzetközi fajmegmentési programokban (EEP).", "A magyar udvarban őshonos háziállatfajtákat mutatnak be."],
      ro: ["Grădina a fost deschisă oficial pe 9 august 1866, având inițial 500 de animale.", "Găzduiește în prezent peste 1.000 de specii de animale de pe toate continentele.", "Pavilionul Elefanților a fost premiat pentru designul său oriental restaurat.", "Este prima grădină zoologică din lume unde s-a născut un pui de rinocer prin inseminare.", "Grădina Botanică din incintă prezintă peste 2.000 de specii de plante exotice.", "Stânca Mare (Nagy-szikla) este un deal artificial ce adăpostește habitate moderne."],
      en: []
    },
  },
  {
    id: "port-csepel-kikoto-extra",
    type: "port",
    parent: "HU-BU",
    coords: [19.068, 47.435],
    name: { de: "Freihafen von Csepel", hu: "Csepeli Szabadkikötő", ro: "Portul Liber Csepel", en: "Csepel Free Port" },
    description: {
      de: "Der wichtigste Binnenhafen Ungarns an der Donau, ein Logistikzentrum von europäischer Bedeutung.",
      hu: "Magyarország legfontosabb dunai kikötője, európai jelentőségű logisztikai központ.",
      ro: "Cel mai important port dunărean al Ungariei, un centru logistic de importanță europeană.",
      en: "Hungary's most important Danube port, a logistics hub of European significance."
    },
    facts: {
      de: ["1928 erbaut.", "Größter Hafen des Landes."],
      hu: ["1928-ban épült.", "Az ország legnagyobb kikötője."],
      ro: ["Construit în 1928.", "Cel mai mare port din țară."],
      en: ["Built in 1928.", "The largest port in the country."]
    },
    descriptionAdvanced: {
      de: "Der Freihafen von Csepel ist der wichtigste logistische Knotenpunkt für den Schiffsverkehr in Ungarn und ein Tor für den internationalen Handel. Er liegt strategisch günstig am südlichen Ende von Budapest auf der Insel Csepel an der Donau. Als größter Binnenhafen des Landes verbindet er Ungarn über den Rhein-Main-Donau-Kanal mit der Nordsee und über das Donaudelta mit dem Schwarzen Meer. Der Hafen verfügt über moderne Containerterminals, Getreidesilos und spezialisierte Lagerhäuser, die den Umschlag verschiedenster Güter ermöglichen. Er dient nicht nur dem Schiffsverkehr, sondern ist durch seine Schienen- und Straßenanbindung ein echtes trimodales Logistikzentrum. Die kontinuierliche Modernisierung der Infrastruktur stellt sicher, dass der Hafen den wachsenden Anforderungen des globalen Warenverkehrs gerecht wird. Für die ungarische Wirtschaft ist der Freihafen Csepel von strategischer Bedeutung, da er den effizienten Export heimischer Produkte und den Import wichtiger Rohstoffe unterstützt.",
      hu: "A Csepeli Szabadkikötő a magyarországi hajóforgalom legfontosabb logisztikai csomópontja és a nemzetközi kereskedelem kapuja. Budapest déli határán, a Csepel-szigeten helyezkedik el, stratégiai ponton a Duna mentén. Az ország legnagyobb belvízi kikötőjeként összeköti Magyarországot az Északi-tengerrel a Rajna-Majna-Duna csatornán keresztül, déli irányban pedig a Fekete-tengerrel. Modern konténerterminálokkal, gabonatárolókkal és speciális raktárakkal rendelkezik. Nemcsak vízi, hanem vasúti és közúti kapcsolatai révén valódi trimodális logisztikai központ. Folyamatos modernizációja biztosítja, hogy megfeleljen a globális áruszállítás növekvő igényeinek. Gazdasági jelentősége kiemelkedő, hiszen támogatja a magyar exportot és a nyersanyagimportot is. Földrajz K8 – Közlekedés és logisztika Magyarországon.",
      ro: "Portul Liber Csepel (Szabadkikötő) este cel mai mare și mai important port fluvial al Ungariei, fiind situat strategic la vârful nordic al insulei Csepel din Budapesta. Inaugurat oficial în anul 1928, portul a fost conceput pentru a conecta capitala maghiară cu rutele comerciale maritime prin intermediul Dunării, servind ca un hub logistic vital pentru exporturile și importurile țării. Facilitățile sale impresionante includ trei bazine comerciale majore, silozuri de cereale gigantice și terminale moderne de containere. Portul este un punct unde transportul naval, feroviar și rutier se intersectează eficient, contribuind masiv la economia orașului. De-a lungul timpului, zona s-a dezvoltat constant, devenind astăzi un centru logistic multifuncțional care gestionează milioane de tone de marfă anual.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Grundsteinlegung des Freihafens von Csepel erfolgte im Jahr 1928.",
      "Er ist der einzige Hafen in Ungarn, der offiziell den Status eines Freihafens (Zollfreigebiet) besitzt.",
      "Das Hafenbecken ist so tief konzipiert, dass es auch bei niedrigem Wasserstand der Donau schiffbar bleibt.",
      "Das Getreidesilo des Hafens war bei seiner Fertigstellung eines der modernsten und größten in Europa.",
      "Der Hafen umfasst eine Gesamtfläche von über 150 Hektar mit zahlreichen Lagerhallen und Industrieflächen.",
      "Jährlich werden hier Millionen Tonnen an Gütern, insbesondere Container und Schüttgut, umgeschlagen.",
      "Der Hafen ist direkt an das ungarische Eisenbahnnetz angeschlossen, was den Weitertransport ins Hinterland erleichtert.",
      "Während des Zweiten Weltkriegs war der Hafen ein wichtiges strategisches Ziel und wurde schwer bombardiert."
      ],
      hu: ["A szabadkikötő alapkövét 1928-ban rakták le.", "Magyarország egyetlen olyan kikötője, amely vámmentes (szabadkikötői) státusszal bírt.", "Medencéit úgy tervezték, hogy alacsony vízállásnál is hajózható maradjon.", "Gabonasilója a megnyitásakor Európa egyik legnagyobbja és legmodernebbje volt.", "Területe meghaladja a 150 hektárt, számos ipari és raktárépülettel.", "Évente több millió tonna árut, főleg konténereket és ömlesztett árut mozgatnak itt.", "Közvetlen iparvágány-kapcsolattal rendelkezik a hazai vasúthálózathoz.", "A második világháború alatt stratégiai célpont volt és súlyos bombatalálatok érték."],
      ro: ["Construcția portului a început în anul 1918 și a fost finalizată în 1928.", "Hala de depozitare a cerealelor este unul dintre cele mai mari silozuri din Europa.", "Portul dispune de o rețea feroviară internă proprie de peste 40 de kilometri.", "Nivelul apei în medincile portului este controlat prin ecluze moderne.", "În timpul construcției sale s-au descoperit morminte importante din epoca bronzului.", "Anual, peste 2.000 de barje și nave fluviale acostează în terminalele portului."],
      en: []
    },
  },

  // HU-BA: Baranya (3G, 1LN, 1W)
  {
    id: "historical-siklosi-var-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.297, 45.852],
    name: { de: "Burg Siklós", hu: "Siklósi vár", ro: "Cetatea Siklós", en: "Siklós Castle" },
    description: {
      de: "Eine der am besten erhaltenen Burgen Ungarns, die seit dem 13. Jahrhundert bewohnt ist.",
      hu: "Magyarország egyik legépszerűbb vára, amely a 13. század óta lakott.",
      ro: "Una dintre cele mai bine conservate cetăți din Ungaria, locuită încă din secolul al XIII-lea.",
      en: "One of Hungary's best-preserved castles, inhabited since the 13th century."
    },
    facts: {
      de: ["Prächtige Kapelle.", "Einst Sitz mächtiger Adelsfamilien."],
      hu: ["Pompás kápolnával rendelkezik.", "Hatalmas főúri családok székhelye volt."],
      ro: ["Capelă superbă.", "Fost sediu al unor familii nobiliare puternice."],
      en: ["Splendid chapel.", "Former seat of powerful noble families."]
    },
    descriptionAdvanced: {
      de: "Die Burg Siklós ist eine der besterhaltenen mittelalterlichen Festungsanlagen in Ungarn und thront majestätisch über der gleichnamigen Stadt im Süden des Landes. Ihre Geschichte reicht bis ins 13. Jahrhundert zurück, und über die Jahrhunderte wurde sie von bedeutenden Adelsfamilien wie den Garas und den Perényis bewohnt und ausgebaut. Die Burg vereint verschiedene Baustile, von der Gotik über die Renaissance bis zum Barock. Besucher können die dicken Mauern, die prunkvolle Schlosskapelle mit ihren gotischen Fenstern und die weitläufigen Kerkeranlagen erkunden. Das Burgmuseum bietet detaillierte Ausstellungen zur Geschichte der Region, zum mittelalterlichen Leben und zur Waffenkunst. Besonders bekannt ist die Burg auch als Drehort für die beliebte ungarische Fernsehserie 'Kapitän Tenkes'. Die gepflegten Burggärten und der beeindruckende Blick von den Bastionen auf die umliegenden Weinberge machen den Besuch zu einem kulturellen und landschaftlichen Erlebnis, das die reiche Geschichte Südtransdanubiens lebendig werden lässt.",
      hu: "A siklósi vár Magyarország egyik legépszerűbb középkori erődítménye, amely méltóságteljesen magasodik a város fölé Baranyában. Története a 13. századig nyúlik vissza, az évszázadok során pedig olyan hatalmas családok birtokolták, mint a Garaiak vagy a Perényiek. Építészete a gótika, a reneszánsz és a barokk stílusjegyeit ötvözi. A látogatók bejárhatják a vastag falakat, a pompás várkápolnát és a hátborzongató börtöncellákat is. A vármúzeumban gazdag kiállítás mutatja be a középkori életet, a fegyvereket és a környék történetét. Országos ismertségét a „Tenkes kapitánya” című televíziós sorozatnak is köszönheti, amelyet itt forgattak. A bástyákról nyíló kilátás a villányi borvidékre felejthetetlen élményt nyújt. Történelem K6 – Középkori várak és lovagvilág.",
      ro: "Castelul din Siklós, situat la poalele Munților Villány, este una dintre cele mai bine conservate fortificații medievale din Ungaria, fiind locuit continuu timp de secole. Prima atestare documentară datează din 1294, sub proprietatea familiei Kán. De-a lungul timpului, castelul a fost modernizat succesiv, trecând de la stilul gotic la cel renascentist și ulterior baroc, reflectând puterea familiilor nobiliare Garay și Batthyány. Zidurile sale masive și bastionul circular oferă o privire fascinantă asupra arhitecturii defensive maghiare. Astăzi, castelul găzduiește muzee și o capelă gotică spectaculoasă, fiind un punct central al turismului cultural din sudul țării. Istorie K6 – Castele și viața în Evul Mediu.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die erste schriftliche Erwähnung der Burg Siklós stammt aus dem Jahr 1294.",
      "Im 15. Jahrhundert war die Burg Schauplatz wichtiger politischer Ereignisse unter der Herrschaft der Familie Gara.",
      "Die Burgkapelle gilt als eines der schönsten Beispiele spätgotischer Architektur in Ungarn.",
      "Die Festung hielt im 16. Jahrhundert der türkischen Belagerung lange stand, fiel aber schließlich 1543 an die Osmanen.",
      "Sigismund von Luxemburg, König von Ungarn und späterer Kaiser, wurde hier im Jahr 1401 kurzzeitig gefangen gehalten.",
      "Im 18. Jahrhundert wurde die Burg von der Familie Batthyány teilweise in ein barockes Schloss umgewandelt.",
      "Umfassende Restaurierungsarbeiten in den letzten Jahrzehnten haben die Burg zu einem erstklassigen Touristenziel gemacht.",
      "Innerhalb der Mauern befindet sich auch ein Panoptikum, das die ehemaligen Bewohner der Burg darstellt."
      ],
      hu: ["A várat először 1294-ben említik írásos források.", "A 15. században az ország egyik legfontosabb politikai központja volt.", "Gótikus várkápolnája a magyarországi késő gótika egyik legszebb emléke.", "1543-ban a vár török kézre került és hosszú ideig oszmán megszállás alatt állt.", "Luxemburgi Zsigmond királyt 1401-ben rövid ideig itt tartották fogva a főurak.", "A 18. században a Batthyány család barokk kastéllyá alakította át a palotaszárnyat.", "A várban ma panoptikum is működik, ahol a hajdani lakókat láthatjuk.", "A legutóbbi évtizedek felújításai révén az ország egyik legmodernebb múzeumi helyszíne lett."],
      ro: ["Castelul a fost deținut de familia Garay între 1394 și 1481.", "Regele Sigismund de Luxemburg a fost găzduit aici în 1401.", "Capela gotică a fost construită în secolul al XV-lea, având elemente arhitecturale rare.", "Fortificația a rezistat sub dominație otomană timp de 143 de ani.", "Restaurarea majoră a început în 1956 și a durat peste un deceniu.", "Muzeul castelului expune o colecție vastă de arme medievale și instrumente de tortură."],
      en: []
    },
  },
  {
    id: "historical-mohacsi-emlekhely-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.648, 45.940],
    name: { de: "Gedenkstätte von Mohács", hu: "Mohácsi Nemzeti Emlékhely", ro: "Locul Memorial Național Mohács", en: "Mohács National Memorial Site" },
    description: {
      de: "Gedenkpark an die Schlacht von 1526, die das Schicksal Ungarns für Jahrhunderte bestimmte.",
      hu: "Az 1526-os csata emlékparkja, amely évszázadokra meghatározta Magyarország sorsát.",
      ro: "Parc memorial dedicat bătăliei din 1526, care a decis soarta Ungariei pentru secole.",
      en: "Memorial park of the 1526 battle that determined Hungary's fate for centuries."
    },
    facts: {
      de: ["Über 1700 Holzstatuen.", "Ort der tragischen Niederlage."],
      hu: ["Több mint 1700 fa szobor.", "A tragikus vereség helyszíne."],
      ro: ["Peste 1700 de statui din lemn.", "Locul înfrângerii tragice."],
      en: ["Over 1700 wooden statues.", "Site of the tragic defeat."]
    },
    descriptionAdvanced: {
      de: "Die Gedenkstätte von Mohács ist ein bewegender Ort der Erinnerung an die tragische Schlacht von 1526, die das Schicksal Ungarns für fast 150 Jahre unter osmanische Herrschaft stellte. Der Gedenkpark liegt genau an dem Ort, an dem ungarische Archäologen Massengräber der gefallenen Soldaten entdeckten. Das Gelände ist als symbolisches Schlachtfeld gestaltet, auf dem über 1.700 kunstvoll geschnitzte Holzstatuen die ungarischen Krieger, Ritter und geistlichen Führer darstellen. Die düstere Atmosphäre und die beeindruckende Architektur des Empfangsgebäudes, das an eine Krone erinnert, laden zur Reflexion über Mut, Aufopferung und nationale Identität ein. Eine interaktive Ausstellung im Besucherzentrum erklärt die historischen Hintergründe, den Verlauf der Schlacht und die weitreichenden Konsequenzen für ganz Mitteleuropa. Jedes Jahr am Jahrestag der Schlacht finden Gedenkfeiern statt, die zeigen, dass dieser Ort auch heute noch eine tiefe emotionale Bedeutung für das ungarische Volk besitzt und als Mahnmal für den Frieden dient.",
      hu: "A Mohácsi Nemzeti Emlékhely az 1526-os tragikus csata helyszínén kialakított megrendítő kegyhely, amely évszázadokra meghatározta Magyarország sorsát. Az emlékpark azon a területen fekszik, ahol a régészek a csatában elesett katonák tömegsírjait feltárták. A terület szimbolikus csatatérként van elrendezve, ahol több mint 1700 művészien kifaragott faoszlop ábrázolja a magyar sereget, a lovagokat és az egyházi vezetőket. A park komor hangulata és a fogadóépület koronát idéző építészete a bátorságra és a nemzeti identitásra emlékeztet. Az interaktív kiállítás részletesen bemutatja a csata menetét és a közép-európai következményeket. Évente a csata évfordulóján nagyszabású megemlékezéseket tartanak itt, mementóul szolgálva a béke fontosságára. Történelem K6 – A mohácsi vész és a török hódítás.",
      ro: "Locul Memorial Național din Mohács comemorează tragica bătălie din 29 august 1526, când armata maghiară a fost înfrântă de forțele otomane conduse de Soliman Magnificul. Acest eveniment a marcat sfârșitul independenței regatului maghiar medieval și începutul a 150 de ani de dominație turcă. Parcul memorial, inaugurat în 1976 la 450 de ani de la bătălie, este situat pe locul unde au fost descoperite gropi comune ale soldaților căzuți. Arhitectura solemnă, cu mii de stâlpi funerari din lemn sculptat, creează o atmosferă de reculegere și onoare față de eroii națiunii. Este un loc esențial pentru înțelegerea identității istorice maghiare. Istorie K7 – Bătălii decisive și consecințele lor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Schlacht von Mohács fand am 29. August 1526 statt und dauerte nur etwa zwei Stunden.",
      "In der Schlacht fiel auch der junge ungarische König Ludwig II., der auf der Flucht in einem Bach ertrank.",
      "Die Gedenkstätte wurde 1976 zum 450. Jahrestag der Schlacht offiziell eingeweiht.",
      "Die Holzstatuen im Park stammen von verschiedenen Künstlern und symbolisieren die anonymen Opfer des Krieges.",
      "Das zentrale Denkmal stellt eine Blume dar, deren Blütenblätter die verschiedenen Nationalitäten der Gefallenen symbolisieren.",
      "Die Massengräber sind im Park markiert und dienen als stumme Zeugen der gewaltigen Verluste.",
      "Das moderne Besucherzentrum wurde 2011 eröffnet und bietet eine moderne pädagogische Aufarbeitung der Ereignisse.",
      "Die Niederlage bei Mohács führte zur Teilung Ungarns in drei Teile: das Osmanische Reich, das Habsburgerreich und das Fürstentum Siebenbürgen."
      ],
      hu: ["A mohácsi csata 1526. augusztus 29-én zajlott le, és mindössze két óráig tartott.", "A csatában vesztette életét II. Lajos magyar király, aki menekülés közben a Csele-patakba fulladt.", "Az emlékhelyet 1976-ban, a csata 450. évfordulóján adták át.", "A faragott szobrok névtelen áldozatok ezreit jelképezik.", "A központi emlékmű egy virágot formáz, melynek szirmai a nemzetek összefogását jelzik.", "A tömegsírok pontos helyét fémjelzések mutatják a park területén.", "A modern látogatóközpont 2011-ben nyílt meg modern pedagógiai eszközökkel.", "A vereséget követően Magyarország három részre szakadt: királyi Magyarországra, Erdélyre és a török hódoltságra."],
      ro: ["Bătălia a durat mai puțin de două ore, soldându-se cu circa 18.000 de morți maghiari.", "Regele Ludovic al II-lea al Ungariei s-a înecat în pârâul Csele în timpul retragerii.", "Memorialul a fost proiectat de arhitectul György Vadász.", "Există 5 gropi comune cercetate arheologic în incinta parcului.", "Peste 120 de sculpturi simbolice din lemn marchează locurile de odihnă ale soldaților.", "Poarta memorială are o înălțime de 10 metri și este decorată cu simboluri istorice."],
      en: []
    },
  },
  {
    id: "historical-pecsi-szekesegyhaz-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.223, 46.079],
    name: { de: "Kathedrale von Pécs", hu: "Pécsi Székesegyház", ro: "Catedrala din Pécs", en: "Pécs Cathedral" },
    description: {
      de: "Die Basilika St. Peter und Paul ist das Wahrzeichen von Pécs mit vier markanten Türmen.",
      hu: "Szent Péter és Szent Pál Bazilika, Pécs jelképe négy jellegzetes tornyával.",
      ro: "Bazilica Sf. Petru și Pavel este simbolul orașului Pécs, cu cele patru turnuri distinctive.",
      en: "The Basilica of Sts. Peter and Paul is the landmark of Pécs with its four distinctive towers."
    },
    facts: {
      de: ["Romanische Fundamente.", "Prächtige Fresken im Inneren."],
      hu: ["Román kori alapok.", "Belső terét pazar freskók díszítik."],
      ro: ["Fundații romanice.", "Fresce superbe în interior."],
      en: ["Romanesque foundations.", "Interior decorated with magnificent frescoes."]
    },
    descriptionAdvanced: {
      de: "Die Kathedrale von Pécs, offiziell Basilika St. Peter und Paul, ist das Wahrzeichen der Stadt und ein herausragendes Denkmal christlicher Architektur in Ungarn. Ihre markante Silhouette mit den vier mächtigen Türmen ist bereits von weitem sichtbar und prägt das Stadtbild am Fuße des Mecsek-Gebirges. Die Ursprünge des Baus reichen bis in das 11. Jahrhundert zurück, wobei die heutige neoromanische Pracht das Ergebnis einer umfassenden Rekonstruktion im späten 19. Jahrhundert ist. Das Innere der Basilika beeindruckt durch seine monumentale Weite, prunkvolle Freskenzyklen von Bertalan Székely und Károly Lotz sowie eine prachtvolle Orgel. Besonders sehenswert sind die Unterkirche, eine der ältesten in Ungarn, und die Seitenkapellen mit ihren kunstvollen Verzierungen. Die Kathedrale ist Teil des UNESCO-Welterbes von Pécs, zu dem auch die frühchristlichen Grabstätten gehören. Sie dient nicht nur als religiöses Zentrum, sondern auch als Ort für bedeutende Konzerte und kulturelle Veranstaltungen, die Besucher aus aller Welt anziehen.",
      hu: "A pécsi Szent Péter- és Szent Pál-székesegyház a város legfontosabb jelképe és a magyarországi keresztény építészet egyik kiemelkedő emléke. Négy hatalmas tornya messziről uralja Pécs városképét a Mecsek lábánál. Az épület alapjai a 11. századig nyúlnak vissza, jelenlegi neoromán pompáját a 19. század végi nagy átépítésnek köszönheti. Belső tere monumentalitásával és Székely Bertalan, valamint Lotz Károly gyönyörű freskóival nyűgözi le a látogatót. Különösen értékes az altemplom, amely az ország egyik legrégebbi és legépebben maradt ilyen tere. A bazilika része az UNESCO Világörökséghez tartozó pécsi ókeresztény emlékek környezetének. Nemcsak hitéleti központ, hanem rangos orgonakoncertek helyszíne is. Történelem K6 – Középkori építészet és egyház.",
      ro: "Catedrala Sfinții Petru și Pavel din Pécs este o capodoperă a arhitecturii religioase, având origini ce coboară până în perioada paleocreștină a provinciei romane Pannonia. Structura actuală, cu cele patru turnuri impunătoare de 60 de metri, a fost reconstruită în stil neoromanic la sfârșitul secolului al XIX-lea sub îndrumarea arhitectului Friedrich von Schmidt. Interiorul catedralei impresionează prin frescele spectaculoase realizate de artiști celebri precum Bertalan Székely și Károly Lotz. Cele patru turnuri simbolizează cele patru puncte cardinale, dar și soliditatea credinței creștine în regiune. Catedrala este inima spirituală a orașului Pécs și un sit protejat UNESCO. Istorie K8 – Arhitectura sacră și moștenirea romană.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Grundsteine der ersten Basilika wurden vermutlich bereits zur Zeit des heiligen Königs Stephan gelegt.",
      "Während der türkischen Besatzung wurde die Kirche zeitweise als Moschee und Getreidespeicher genutzt.",
      "Die heutige neoromanische Gestalt erhielt die Kathedrale zwischen 1882 und 1891 nach Plänen von Friedrich von Schmidt.",
      "Die vier Türme der Kathedrale sind jeweils 60 Meter hoch und symbolisieren die vier Himmelsrichtungen.",
      "In der Unterkirche befinden sich Gräber bedeutender Bischöfe und Persönlichkeiten der ungarischen Geschichte.",
      "Die Akustik der Kathedrale ist so außergewöhnlich, dass sie regelmäßig für Orgelkonzerte von Weltruf genutzt wird.",
      "Die Bronzetüren des Hauptportals zeigen Szenen aus der Geschichte der Diözese und der Stadt Pécs.",
      "Die Basilika wurde 1991 von Papst Johannes Paul II. bei seinem Besuch in Ungarn zur 'Basilica Minor' erhoben."
      ],
      hu: ["A dóm alapköveit vélhetően Szent István király idején rakták le.", "A török hódoltság alatt a templomot dzsámiként és raktárként is használták.", "Jelenlegi formáját 1882 és 1891 között nyerte el Friedrich von Schmidt tervei alapján.", "A négy torony egyenként 60 méter magas, a négy égtáj felé tájolva.", "Altemplomában jelentős püspökök és történelmi személyiségek nyugszanak.", "A székesegyház akusztikája világhírű, rendszeresen tartanak itt koncerteket.", "A főkapu bronzdomborművei a pécsi egyházmegye történetét mutatják be.", "II. János Pál pápa 1991-es látogatása során a templomot „basilica minor” rangra emelte."],
      ro: ["Catedrala are o lungime de 70 de metri și o lățime de 22 de metri.", "Fiecare dintre cele patru turnuri atinge înălțimea de 60 de metri.", "În timpul dominației otomane (1543-1686), catedrala a servit drept moschee.", "Orga catedralei a fost fabricată de celebra firmă Angster în 1887.", "Cripta este cea mai veche parte, datând din secolul al XI-lea.", "Papalitatea a acordat catedralei titlul de 'Basilica Minor' în 1991."],
      en: []
    },
  },
  {
    id: "animal-habitat-pecsi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-BA",
    coords: [18.223, 46.096],
    name: { de: "Zoo Pécs", hu: "Pécsi Állatkert", ro: "Grădina Zoologică din Pécs", en: "Pécs Zoo" },
    description: {
      de: "Ein malerischer Zoo am Hang des Mecsek-Gebirges mit einem großen Aquarium.",
      hu: "Festői állatkert a Mecsek oldalában, modern akvárium-terráriummal.",
      ro: "O grădină zoologică pitorească pe versantul munților Mecsek, cu un acvariu mare.",
      en: "A scenic zoo on the slopes of the Mecsek mountains, featuring a large aquarium."
    },
    facts: {
      de: ["1960 gegründet.", "Tolle Aussicht auf die Stadt."],
      hu: ["1960-ban alapították.", "Nagyszerű kilátás nyílik a városra."],
      ro: ["Fondată în 1960.", "O priveliște minunată asupra orașului."],
      en: ["Founded in 1960.", "Offers a great view over the city."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Pécs, malerisch an den Hängen des Mecsek-Gebirges gelegen, bietet ein einzigartiges Naturerlebnis hoch über der Stadt. Nach einer umfassenden Modernisierung präsentiert sich der Zoo heute als moderne Einrichtung, die sowohl heimische als auch exotische Tierarten in naturnah gestalteten Gehegen beherbergt. Ein besonderes Highlight ist das integrierte Aquarium-Terrarium, das in das Hauptgebäude eingebettet ist und eine faszinierende Unterwasserwelt sowie seltene Reptilien zeigt. Besucher können von verschiedenen Aussichtspunkten im Zoo einen spektakulären Blick über Pécs genießen, während sie Tiere wie Löwen, Zebras und Rote Pandas beobachten. Der Zoo legt großen Wert auf Umweltbildung und bietet zahlreiche interaktive Programme für Kinder und Schulen an. Die Kombination aus artenreicher Tierwelt, moderner Architektur und der bewaldeten Umgebung des Mecsek macht den Zoo Pécs zu einem der attraktivsten Ausflugsziele für Familien und Naturfreunde in Südungarn.",
      hu: "A Pécsi Állatkert és Akvárium-Terrárium a Mecsek oldalában fekszik, különleges élményt nyújtva a város felett. A közelmúltban végrehajtott teljes felújítás után modern környezetben mutatja be a hazai és egzotikus állatfajokat. Egyik legnagyobb attrakciója az integrált akvárium-terrárium, ahol a látogatók bepillantást nyerhetnek a vizek mélyére és a hüllők világába. Az állatkert teraszos kialakításának köszönhetően számos pontról csodálatos kilátás nyílik Pécsre. Az intézmény nagy hangsúlyt fektet az oktatásra és a környezetvédelemre, számos interaktív programot kínálva a gyerekeknek. A Mecsek erdeivel övezett terület ideális családi programot kínál, ahol a természet és az állatvilág harmóniája tapasztalható meg. Biológia K5 – Állatvilág és élőhelyvédelem.",
      ro: "Grădina Zoologică din Pécs, situată pe versantul sudic al Munților Mecsek, oferă o experiență unică datorită cadrului său natural spectaculos și a varietății de specii găzduite. Inaugurată în 1960, grădina a trecut printr-o renovare completă în 2016, devenind una dintre cele mai moderne facilități de acest gen din Ungaria. Vizitatorii pot explora diverse secțiuni, de la parcul pentru animale sălbatice europene la acvariul-terariu situat în clădirea principală. Programul educațional pune accent pe conservarea speciilor pe cale de dispariție și pe interacțiunea responsabilă cu natura. Este o destinație preferată pentru familii și un centru important pentru educația ecologică. Științele Naturii K5 – Animale și habitate.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde 1960 innerhalb von nur wenigen Monaten durch den Einsatz zahlreicher freiwilliger Helfer erbaut.",
      "Er liegt auf einer Höhe von etwa 300 Metern über dem Meeresspiegel in einem ehemaligen Steinbruchgebiet.",
      "Das Aquarium-Terrarium befand sich früher im Stadtzentrum und wurde 2016 in den Zoo auf den Berg verlegt.",
      "Zu den seltensten Bewohnern des Zoos gehören die Zwergflusspferde und die Berberlöwen.",
      "Ein großer Teil des Zoos ist barrierefrei gestaltet, was den Besuch mit Kinderwagen oder Rollstühlen erleichtert.",
      "Der Zoo nimmt aktiv an internationalen Zuchtprogrammen (EEP) für bedrohte Tierarten teil.",
      "Das moderne Besucherzentrum bietet Informationen über das Ökosystem des Mecsek-Gebirges.",
      "Auf dem Gelände des Zoos befindet sich auch ein kleiner Öko-Lehrpfad, der die lokale Flora erklärt."
      ],
      hu: ["1960-ban épült fel mindössze néhány hónap alatt, társadalmi összefogással.", "Körülbelül 300 méteres magasságban található egy egykori kőbánya területén.", "Az akvárium-terrárium korábban a belvárosban volt, 2016-ban költözött fel a hegyre.", "Ritka lakói közé tartoznak a törpevíziló és a berber oroszlánok.", "Területének jelentős része akadálymentesített, könnyen bejárható babakocsival is.", "Aktívan részt vesznek a veszélyeztetett fajok nemzetközi tenyésztési programjaiban.", "A látogatóközpont interaktív módon mutatja be a Mecsek ökoszisztémáját.", "Tanösvény segíti a helyi növényvilág megismerésére az állatkert területén."],
      ro: ["Grădina zoologică găzduiește peste 250 de specii de animale.", "Suprafața totală a parcului este de aproximativ 3,5 hectare.", "Acvariul-terariu include un bazin cu rechini de 100.000 de litri.", "Aici trăiesc specii rare precum leopardul persan și hipopotamul pitic.", "Turnul de apă din incintă a fost transformat în punct de observație.", "Peste 150.000 de vizitatori trec anual pragul acestei grădini zoologice."],
      en: []
    },
  },
  {
    id: "industry-beremendi-cementgyar-extra",
    type: "industry",
    parent: "HU-BA",
    coords: [18.441, 45.811],
    name: { de: "Zementwerk Beremend", hu: "Beremendi Cementgyár", ro: "Fabrica de Ciment Beremend", en: "Beremend Cement Works" },
    description: {
      de: "Eines der größten und modernsten Zementwerke Ungarns im südlichsten Teil des Landes.",
      hu: "Magyarország egyik legnagyobb és legmodernebb cementgyára az ország legdélibb részén.",
      ro: "Una dintre cele mai mari și moderne fabrici de ciment din Ungaria, în sudul extrem al țării.",
      en: "One of Hungary's largest and most modern cement plants in the southernmost part of the country."
    },
    facts: {
      de: ["Große Kalksteinbrüche.", "Wichtiger regionaler Arbeitgeber."],
      hu: ["Hatalmas mészkőbányák.", "Fontos regionális munkáltató."],
      ro: ["Cariere uriașe de calcar.", "Angajator regional important."],
      en: ["Huge limestone quarries.", "Important regional employer."]
    },
    descriptionAdvanced: {
      de: "Das Zementwerk Beremend ist einer der größten und technologisch fortschrittlichsten Industriestandorte im Süden Ungarns. Es liegt in unmittelbarer Nähe zur kroatischen Grenze in einer Region, die reich an hochwertigen Kalksteinvorkommen ist. Das Werk spielt eine entscheidende Rolle für die Bauindustrie des Landes und beliefert Großprojekte in ganz Ungarn und im benachbarten Ausland mit Qualitätszement. Seit seiner Gründung wurde der Standort kontinuierlich modernisiert, um die Produktionseffizienz zu steigern und gleichzeitig die Umweltbelastung zu minimieren. Heute gehört das Werk zu einer internationalen Unternehmensgruppe und setzt modernste Filtertechnologien und alternative Brennstoffe ein, um den ökologischen Fußabdruck zu verringern. Für die lokale Bevölkerung ist das Werk der wichtigste Arbeitgeber und ein stabilisierender Faktor für die Wirtschaft der Region. Die imposanten Silos und die weitläufigen Steinbrüche prägen die Landschaft um Beremend und zeugen von der industriellen Kraft dieses Standortes.",
      hu: "A Beremendi Cementgyár Magyarország egyik legnagyobb és legmodernebb ipari létesítménye az ország legdélebbi csücskében. A horvát határ közelében fekvő üzem a környék kiváló minőségű mészkővagyona miatt jött létre, és évtizedek óta a hazai építőipar meghatározó bázisa. A gyár nemcsak az országos projekteket látja el alapanyaggal, hanem jelentős exportot is lebonyolít a balkáni régióba. Folyamatos fejlesztések révén az üzem a fenntartható gyártás úttörőjévé vált, modern szűrőrendszerekkel és alternatív tüzelőanyagok használatával csökkentve környezeti lábnyomát. Beremend és környéke számára a gyár a legfontosabb munkáltató és a gazdasági stabilitás záloga. A hatalmas silók és a bánya látványa messziről jelzi az üzem jelenlétét. Földrajz K8 – Ipar és bányászat Magyarországon.",
      ro: "Fabrica de Ciment din Beremend este unul dintre cei mai importanți piloni industriali ai regiunii Baranya, fiind renumită pentru tehnologia sa avansată de producție. Situată în punctul cel mai sudic al Ungariei, fabrica utilizează depozitele bogate de calcar din Munții Villány pentru a produce ciment de înaltă calitate utilizat în construcții majore la nivel național. Fondată la începutul secolului al XX-lea, unitatea a fost modernizată constant, fiind astăzi un model de eficiență energetică și responsabilitate ecologică. Activitatea sa susține economia locală și oferă mii de locuri de muncă indirecte în sectorul construcțiilor și logisticii. Geografie K8 – Resurse naturale și industrie.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Zementproduktion in Beremend begann bereits im Jahr 1911 mit den ersten Ringöfen.",
      "Das Werk nutzt den Kalkstein vom nahegelegenen Beremender Berg, der eine der besten Qualitäten in Europa aufweist.",
      "Beremend ist die südlichste Siedlung Ungarns, was dem Werk eine strategische Lage für den Export auf den Balkan verleiht.",
      "In den 1970er Jahren wurde ein komplett neues, modernes Trockenverfahren-Werk errichtet.",
      "Das Unternehmen investiert massiv in Nachhaltigkeit und nutzt heute zu einem großen Teil Ersatzbrennstoffe aus Abfällen.",
      "Die jährliche Produktionskapazität des Werkes liegt bei über einer Million Tonnen Zement.",
      "Das Werk verfügt über eine eigene Eisenbahnanbindung für den effizienten Abtransport der Waren.",
      "Beremend war das erste Zementwerk in Ungarn, das nach internationalen Qualitäts- und Umweltstandards zertifiziert wurde."
      ],
      hu: ["A cementgyártás Beremenden már 1911-ben elkezdődött az első körkemencékkel.", "Az üzem a Beremendi-hegy kiváló tisztaságú mészkővagyat használja fel.", "Beremend Magyarország legdélebbi települése, ami stratégiai előnyt jelent az exportban.", "Az 1970-es években épült fel az akkoriban világszínvonalú száraz eljárású technológia.", "Ma a gyár jelentős részben hulladékból származó energiával működik.", "Éves termelési kapacitása meghaladja az egymillió tonna cementet.", "Saját vasútvonallal rendelkezik az áruk hatékony elszállításához.", "A gyár az elsők között kapta meg az országban a környezetvédelmi tanúsítványokat."],
      ro: ["Producția de ciment la Beremend a început oficial în anul 1911.", "Capacitatea anuală de producție depășește 1 milion de tone de ciment.", "Cariera de calcar adiacentă este una dintre cele mai mari din Europa Centrală.", "Fabrica utilizează combustibili alternativi pentru a reduce emisiile de CO2.", "Cimentul de aici a fost folosit la construcția barajelor de pe Dunăre.", "Sistemul de filtrare a aerului reține 99,9% din particulele de praf."],
      en: []
    },
  },

  // HU-BK: Bács-Kiskun (3G, 1LN, 1W)
  {
    id: "historical-kalocsai-szekesegyhaz-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [18.972, 46.529],
    name: { de: "Kathedrale von Kalocsa", hu: "Kalocsai Érseki Székesegyház", ro: "Catedrala din Kalocsa", en: "Kalocsa Cathedral" },
    description: {
      de: "Ein prächtiges Barockbauwerk, Sitz eines der ältesten Erzbistümer Ungarns.",
      hu: "Pompás barokk épület, Magyarország egyik legrégebbi érsekségének székhelye.",
      ro: "O clădire barocă impunătoare, sediul uneia dintre cele mai vechi arhiepiscopii din Ungaria.",
      en: "A magnificent Baroque building, the seat of one of Hungary's oldest archdioceses."
    },
    facts: {
      de: ["Berühmte Orgel.", "Bischofspalast nebenan."],
      hu: ["Híres orgonával rendelkezik.", "Mellette az Érseki Palota áll."],
      ro: ["Orgă celebră.", "Palatul Arhiepiscopal se află alături."],
      en: ["Famous organ.", "Archiepiscopal Palace stands next to it."]
    },
    descriptionAdvanced: {
      de: "Die Kathedrale von Kalocsa, auch als Erzbischöfliche Kathedrale Mariä Himmelfahrt bekannt, ist ein prächtiges Meisterwerk des Barock im Herzen der ungarischen Tiefebene. Als Sitz eines der ältesten Erzbistümer Ungarns, das bereits vom heiligen König Stephan gegründet wurde, blickt der Ort auf eine über tausendjährige Geschichte zurück. Das heutige Gebäude wurde im 18. Jahrhundert errichtet und beeindruckt durch seine strahlend weiße Fassade und die zwei hoch aufragenden Türme. Das Innere der Kirche ist reich mit Stuckarbeiten, Vergoldungen und wertvollen Altarbildern ausgestattet. Ein besonderer Schatz ist die weltberühmte Orgel, auf der schon Franz Liszt gespielt hat. Direkt neben der Kathedrale befindet sich der Erzbischöfliche Palast, der eine der bedeutendsten kirchlichen Bibliotheken des Landes beherbergt. Die Kathedrale ist nicht nur ein religiöses Zentrum, sondern auch ein Symbol für die kulturelle und geistige Bedeutung von Kalocsa, das auch für seine Volkskunst und den Paprikaanbau weltberühmt ist.",
      hu: "A Kalocsai Érseki Székesegyház, más néven Nagyboldogasszony-főszékesegyház, a magyar barokk építészet egyik legszebb alkotása az Alföld szívében. Az érsekség Szent István általi alapítása óta Kalocsa a magyar egyházi élet egyik központja. A mai épület a 18. században nyerte el formáját, fehér homlokzatával és két karcsú tornyával a város minden pontjáról látható. Belső tere gazdag stukkódíszítéssel, aranyozott oltárokkal és Lotz Károly freskóival büszkélkedhet. Világhírű orgonája, melyen Liszt Ferenc is játszott, ma is rendszeresen megszólal koncerteken. A közvetlenül mellette álló Érseki Palota és az ott őrzött könyvtár Európa-szerte ritka kincseket rejt. A templom Kalocsa vallási és kulturális örökségének legfontosabb eleme. Történelem K6 – Kereszténység és püspökségek Magyarországon.",
      ro: "Catedrala Adormirea Maicii Domnului din Kalocsa este centrul Arhiepiscopiei Romano-Catolice de Kalocsa-Kecskemét, fiind un monument baroc de o eleganță rară. Prima biserică a fost fondată chiar de Sfântul Ștefan în anul 1001, însă actuala clădire a fost ridicată în secolul al XVIII-lea, între 1735 și 1754, sub coordonarea arhitectului italian Andreas Mayerhoffer. Fațada albă cu turnuri înalte și interiorul bogat decorat cu stucaturi și picturi murale reflectă importanța istorică a acestui oraș ca centru religios. Biblioteca Arhiepiscopală adiacentă păstrează manuscrise medievale neprețuite, făcând din acest loc un tezaur al culturii europene. Istorie K8 – Barocul în Europa Centrală.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Erzbistum Kalocsa wurde vermutlich im Jahr 1001 vom heiligen Stephan I. gegründet.",
      "Die heutige barocke Kathedrale ist bereits der vierte Bau an dieser Stelle; die Vorgänger wurden durch Kriege zerstört.",
      "Die Fassade wird von Statuen der heiligen Könige Stephan und Ladislaus sowie der Jungfrau Maria geschmückt.",
      "Die Orgel der Kathedrale wurde von der berühmten Firma Angster aus Pécs gebaut und verfügt über mehr als 3.500 Pfeifen.",
      "In der Krypta der Kathedrale ruhen die Gebeine vieler bedeutender Erzbischöfe von Kalocsa.",
      "Die Deckenfresken stellen Szenen aus dem Leben Mariens und der ungarischen Heiligen dar.",
      "Kalocsa ist neben Esztergom der einzige Ort in Ungarn, der zwei Erzbischöfe in seiner Geschichte gleichzeitig beherbergte.",
      "Das Gebäude wurde nach den Zerstörungen des Zweiten Weltkriegs und der kommunistischen Ära umfassend renoviert."
      ],
      hu: ["A kalocsai érsekséget vélhetően 1001-ben alapította Szent István király.", "A jelenlegi barokk dóm már a negyedik templom ezen a helyen.", "Homlokzatán Szent István, Szent László és Szűz Mária szobrai láthatók.", "Az orgonát a pécsi Angster gyár készítette, több mint 3500 síppal rendelkezik.", "A templom kriptájában pihennek a város jelentős érsekei.", "A székesegyház belső tereit pazar barokk és rokokó faragványok díszítik.", "Kalocsa mellett csak Esztergom rendelkezik érseki székhellyel az országban.", "A 2010-es években végrehajtott felújítás során visszakapta eredeti ragyogását."],
      ro: ["Catedrala a fost construită pe locul a două biserici medievale anterioare.", "Orga actuală a fost instalată în 1877 și are peste 3500 de tuburi.", "Interiorul este decorat cu picturi realizate de renumitul artist local Vilmos Aba-Novák.", "Turnurile catedralei au o înălțime de 65 de metri.", "Cripta adăpostește mormintele arhiepiscopilor începând cu secolul al XI-lea.", "Piața Sfânta Treime din fața catedralei este una dintre cele mai frumoase din Ungaria."],
      en: []
    },
  },
  {
    id: "historical-kecskemeti-varoshaza-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [19.691, 46.906],
    name: { de: "Rathaus von Kecskemét", hu: "Kecskeméti Városháza", ro: "Primăria din Kecskemét", en: "Kecskemét City Hall" },
    description: {
      de: "Ein herausragendes Beispiel des ungarischen Sezessionsstils, entworfen von Ödön Lechner.",
      hu: "A magyar szecessziós építészet kiemelkedő példája, Lechner Ödön tervezte.",
      ro: "Un exemplu remarcabil al secesiunii maghiare, proiectat de Ödön Lechner.",
      en: "An outstanding example of Hungarian Secessionist architecture, designed by Ödön Lechner."
    },
    facts: {
      de: ["Glockenspiel am Mittag.", "Fassade mit Zsolnay-Keramik."],
      hu: ["Déli harangjátékáról híres.", "Zsolnay kerámiával díszített homlokzat."],
      ro: ["Joc de clopote la prânz.", "Fațadă decorată cu ceramică Zsolnay."],
      en: ["Carillon plays at noon.", "Facade decorated with Zsolnay ceramics."]
    },
    descriptionAdvanced: {
      de: "Das Rathaus von Kecskemét ist ein strahlendes Beispiel für die ungarische Sezessionsarchitektur und eines der bekanntesten Gebäude des Landes. Es wurde Ende des 19. Jahrhunderts nach den Plänen der berühmten Architekten Ödön Lechner und Gyula Pártos erbaut. Die Fassade ist überaus reich mit farbenfrohen Zsolnay-Keramiken, floralen Motiven und ungarischen Volkssymbolen verziert, was dem Gebäude ein fast märchenhaftes Aussehen verleiht. Im Inneren befindet sich der prunkvolle Festsaal, der mit monumentalen Wandgemälden von Bertalan Székely geschmückt ist, die wichtige Szenen der ungarischen Geschichte darstellen. Eine besondere Attraktion ist das Glockenspiel am Giebel des Hauses, das zu jeder vollen Stunde bekannte Melodien spielt und Passanten zum Verweilen einlädt. Das Rathaus ist nicht nur der Sitz der Stadtverwaltung, sondern auch ein kulturelles Herzstück Kecskeméts und ein Symbol für den Stolz und die künstlerische Blütezeit der Stadt um die Jahrhundertwende.",
      hu: "A Kecskeméti Városháza a magyar szecessziós építészet egyik legragyogóbb ékköve, Lechner Ödön és Pártos Gyula zsenialitását dicséri. A 19. század végén emelt épület homlokzatát gazdagon díszítik a színes Zsolnay-kerámiák és népi motívumok, amelyek egyedi, nemzeti karaktert kölcsönöznek neki. Belső tereiben a díszterem a leglátványosabb, ahol Székely Bertalan monumentális falfestményei elevenítik fel a magyar történelem sorsfordító pillanatait, mint például a honfoglaló magyarok vérszerződését. Különleges látványosság a főhomlokzat ormán elhelyezett harangjáték, amely minden órában klasszikus dallamokkal örvendezteti meg a járókelőket. A városháza nemcsak közigazgatási központ, hanem a város kulturális büszkesége is, amely Kecskemét aranykorának állít emléket. Művészettörténet K8 – A magyar szecesszió mesterei.",
      ro: "Primăria din Kecskemét este una dintre cele mai emblematice clădiri ale stilului Secesiunii maghiare, fiind proiectată de arhitecții Ödön Lechner și Gyula Pártos. Finalizată în 1897, clădirea impresionează prin culorile vibrante ale țiglei ceramice Zsolnay și elementele decorative inspirate din folclorul maghiar. Sala de consiliu găzduiește frescele monumentale ale lui Bertalan Székely, care ilustrează momente cheie din istoria națiunii, precum Descălecarea. Turnul primăriei adăpostește un carillon celebru care redă melodii de Kodály Zoltán la fiecare oră fixă, întărind legătura orașului cu muzica clasică. Este un simbol al mândriei civice și al creativității arhitecturale. Istorie K8 – Secesiunea și identitatea națională.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Rathaus wurde zwischen 1893 und 1897 zur Feier des tausendjährigen Bestehens Ungarns (Millennium) errichtet.",
      "Architekt Ödön Lechner gilt als der Schöpfer des 'ungarischen Nationalstils', der westliche Architektur mit östlichen Elementen verband.",
      "Das Glockenspiel besteht aus 37 Glocken und wurde 1983 anlässlich der Renovierung des Gebäudes installiert.",
      "Die Wandgemälde im Festsaal zeigen unter anderem den Blutvertrag der Magyaren und die Krönung von Franz Joseph I.",
      "Das Gebäude überstand das schwere Erdbeben von 1911 fast unbeschadet, was für die hohe Bauqualität spricht.",
      "Die Dachziegel und dekorativen Elemente bestehen aus wetterfester Pyrogranit-Keramik der Zsolnay-Manufaktur.",
      "Das Rathaus von Kecskemét diente als Vorbild für viele andere öffentliche Gebäude in der ungarischen Provinz.",
      "Besucher können das Gebäude im Rahmen von geführten Touren besichtigen und dabei den prachtvollen Sitzungssaal bewundern."
      ],
      hu: ["A millenniumi ünnepségek alkalmából, 1893 és 1897 között épült.", "Lechner Ödön itt alkalmazta először széles körben a „magyar nemzeti stílust”.", "A harangjáték 37 harangból áll és 1983 óta működik a tetőzetben.", "A díszterem freskói között látható Ferenc József koronázási jelenete is.", "Az épület sértetlenül vészelte át az 1911-es nagy kecskeméti földrengést.", "Díszítőelemei fagyálló pirogránitból készültek a pécsi Zsolnay-gyárban.", "A városháza az egész ország szecessziós középületeinek példaképévé vált.", "Vezetett túrák keretében a látogatók a tanácstermet is megtekinthetik."],
      ro: ["Clădirea a fost inaugurată cu ocazia aniversării Mileniului în 1896.", "Carillonul este format din 37 de clopote care redau 12 melodii diferite.", "Acoperișul este decorat cu ceramică smălțuită de tip majolică de la fabrica Zsolnay.", "Fațada principală are o lungime de peste 80 de metri.", "Sala festivă are o capacitate de 200 de persoane și este bogat ornamentată.", "Arhitectul Ödön Lechner a fost supranumit 'Gaudi al Ungariei'."],
      en: []
    },
  },
  {
    id: "historical-kecskemeti-nagytemplom-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [19.692, 46.907],
    name: { de: "Große Kirche von Kecskemét", hu: "Kecskeméti Nagytemplom", ro: "Marea Biserică din Kecskemét", en: "Kecskemét Great Church" },
    description: {
      de: "Die größte spätbarocke Kirche der Tiefebene, gewidmet dem heiligen Nikolaus.",
      hu: "Az Alföld legnagyobb késő barokk temploma, Szent Miklós tiszteletére szentelve.",
      ro: "Cea mai mare biserică barocă târzie din Câmpia Maghiară, dedicată Sfântului Nicolae.",
      en: "The largest late Baroque church in the Great Plain, dedicated to Saint Nicholas."
    },
    facts: {
      de: ["73 Meter hoher Turm.", "Im 18. Jahrhundert erbaut."],
      hu: ["73 méter magas torony.", "A 18. században épült."],
      ro: ["Turn de 73 de metri înălțime.", "Construită în secolul al XVIII-lea."],
      en: ["73-meter high tower.", "Built in the 18th century."]
    },
    descriptionAdvanced: {
      de: "Die Große Kirche von Kecskemét, auch als Altstadt-Kirche bekannt, ist das größte sakrale Bauwerk der Region und ein bedeutendes Denkmal des Spätbarocks. Sie ist dem heiligen Nikolaus gewidmet und prägt mit ihrem 73 Meter hohen Turm unübersehbar die Silhouette der Stadt. Der Bau wurde im späten 18. Jahrhundert begonnen, als Kecskemét eine wirtschaftliche Blütezeit erlebte. Die Architektur besticht durch ihre klaren Linien und die monumentale Fassade. Im Inneren erwartet die Besucher ein weitläufiger Raum mit beeindruckenden Altären, einer prunkvollen Kanzel und wertvollen Deckengemälden. Die Kirche ist ein Ort der Stille und des Gebets inmitten des geschäftigen Stadtzentrums. Von der Aussichtsplattform des Turms bietet sich ein fantastischer Rundblick über Kecskemét und die weite ungarische Tiefebene. Als spirituelles Zentrum der katholischen Gemeinde spielt die Große Kirche eine zentrale Rolle im religiösen Leben der Region und ist Schauplatz zahlreicher festlicher Gottesdienste.",
      hu: "A Kecskeméti Nagytemplom, hivatalos nevén az Urunk Mennybemenetele Társszékesegyház, az Alföld egyik legjelentősebb késő barokk építménye. A 18. század végén emelt templom monumentális méreteivel uralja Kecskemét főterét. Tornya 73 méter magas, így a város és a környék fontos tájékozódási pontja. Belső tere tágas és világos, pazar oltárai és freskói a barokk kor vallási buzgalmát tükrözik. A templom szorosan összefonódik a város történelmével, harangja évszázadokon át jelezte a tüzeket és a fontos eseményeket. A Nagytemplom nemcsak a katolikus hívők központja, hanem a város épített örökségének egyik legértékesebb darabja, amely Kecskemét fejlődésének és gazdagodásának tanúja. Történelem K6 – Barokk építészet az Alföldön.",
      ro: "Marea Biserică din Kecskemét, dedicată Înălțării Domnului, este cea mai mare catedrală catolică din regiunea Marii Câmpii Ungare, dominând centrul orașului cu turnul său de 73 de metri. Construită în stil baroc târziu între anii 1774 și 1806, biserica a fost proiectată de arhitectul Gáspár Oswald. Interiorul este vast și solemn, fiind decorat cu fresce religioase impunătoare și un altar principal sculptat cu mare măiestrie. Turnul bisericii a servit mult timp drept post de observație pentru pompieri, oferind o panoramă completă asupra orașului Kecskemét. Este un punct de reper spiritual și arhitectural major, reflectând stabilitatea comunității catolice locale. Istorie K7 – Biserica în epoca modernă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Turm der Kirche war lange Zeit der höchste in der gesamten ungarischen Tiefebene (Alföld).",
      "Der Bau dauerte fast 30 Jahre und wurde 1806 offiziell abgeschlossen.",
      "Die Hauptfassade ist mit Skulpturen des heiligen Nikolaus und anderer Heiliger geschmückt.",
      "In der Kirche befindet sich eine Gedenktafel für die Opfer des großen Erdbebens von 1911.",
      "Die Orgel der Kirche ist bekannt für ihren kraftvollen Klang und wird regelmäßig für Konzerte genutzt.",
      "Der Turm diente früher auch als Feuerwachturm, von dem aus die Wächter Brände in der Stadt meldeten.",
      "Die Glocken der Großen Kirche gehören zu den schwersten und klangvollsten in ganz Südungarn.",
      "Das Gebäude steht unter nationalem Denkmalschutz und ist ein fester Bestandteil jedes Stadtrundgangs in Kecskemét."
      ],
      hu: ["A templom 1774 és 1806 között épült Osvald Gáspár tervei alapján.", "Tornya 73 méter magas, ezzel a Duna-Tisza köze egyik legmagasabb templomtornya.", "A főoltárképe Urunk mennybemenetelét ábrázolja, Falconer József alkotása.", "A templom alatt kiterjedt kriptarendszer található, ahol neves polgárok nyugszanak.", "Az 1911-es földrengés során a torony megdőlt, de sikerült megmenteni.", "A harangházban található az ország egyik legnagyobb súlyú harangja.", "A belső falfestmények egy része a 20. század elején készült.", "A templom 1993 óta társszékesegyházi rangot visel."],
      ro: ["Turnul bisericii are o înălțime totală de 73 de metri, fiind cel mai înalt din oraș.", "Construcția a durat mai mult de 30 de ani din cauza lipsei de fonduri.", "Cele șase clopote ale bisericii au fost turnate în secole diferite.", "Interiorul poate găzdui peste 3000 de credincioși simultan.", "Frescele de pe tavan au fost pictate în 1903 de artiști din școala locală.", "Ceasul din turn este unul dintre cele mai vechi mecanisme funcționale din regiune."],
      en: []
    },
  },
  {
    id: "animal-habitat-kecskemeti-vadaskert-extra",
    type: "animal-habitat",
    parent: "HU-BK",
    coords: [19.722, 46.910],
    name: { de: "Zoo Kecskemét", hu: "Kecskeméti Vadaskert", ro: "Grădina Zoologică din Kecskemét", en: "Kecskemét Zoo" },
    description: {
      de: "Ein gemütlicher Zoo, der sich besonders auf die heimische Fauna und Rettungsprojekte konzentriert.",
      hu: "Hangulatos állatkert, amely különös figyelmet fordít a hazai élővilágra és mentési programokra.",
      ro: "O grădină zoologică primitoare, care se concentrează pe fauna locală și proiecte de salvare.",
      en: "A cozy zoo with a special focus on native wildlife and rescue programs."
    },
    facts: {
      de: ["Ideal für Familien.", "Ungarische Haustierrassen."],
      hu: ["Ideális családok számára.", "Őshonos magyar állatfajták."],
      ro: ["Ideal pentru familii.", "Rase de animale domestice maghiare."],
      en: ["Ideal for families.", "Features native Hungarian livestock breeds."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Kecskemét, offiziell als 'Vadaskert' (Wildgarten) bekannt, ist eine charmante und familiäre Einrichtung, die sich besonders dem Schutz und der Präsentation der heimischen Tierwelt widmet. Gegründet in den 1970er Jahren, hat sich der Zoo von einem kleinen Wildpark zu einem modernen Bildungszentrum entwickelt. Auf einer kompakten Fläche können Besucher Tiere aus allen Kontinenten entdecken, darunter Löwen, Kamele und verschiedene Affenarten. Ein besonderer Schwerpunkt liegt jedoch auf den ungarischen Wildtieren und traditionellen Haustierrassen, was den Zoo zu einem idealen Ort macht, um mehr über die Fauna des Karpatenbeckens zu erfahren. Der Zoo ist bekannt für seine Rettungsstation, in der verletzte Wildtiere gepflegt und, wenn möglich, wieder ausgewildert werden. Die schattigen Wege und die freundliche Atmosphäre machen den 'Vadaskert' zu einem perfekten Ziel für junge Familien, die Natur und Tiere hautnah erleben möchten, ohne den Trubel großer Zoos.",
      hu: "A Kecskeméti Vadaskert egy hangulatos és családias állatkert, amely különös figyelmet fordít a hazai élővilág bemutatására és a bajba jutott állatok mentésére. Az 1970-es években alapított intézmény mára modern oktatóközponttá vált, ahol minden földrész állatvilágából láthatunk képviselőket, köztük oroszlánokat és majmokat is. Kiemelt szerepet kapnak az őshonos magyar fajok és a hagyományos háziállatok, így a gyerekek testközelből ismerhetik meg a pusztai életmódot. A Vadaskert híres mentőállomásáról, ahol sérült madarakat és vadon élő állatokat ápolnak, majd gyógyulásuk után visszajuttatják őket a természetbe. Árnyas sétányai és barátságos légköre miatt ideális célpont kisgyermekes családok számára.",
      ro: "Grădina Zoologică din Kecskemét, cunoscută și sub numele de Vadaskert, este o oază de natură situată în inima orașului, oferind vizitatorilor șansa de a vedea specii autohtone și exotice. Deși este una dintre cele mai mici grădini zoologice din Ungaria, ea este renumită pentru grija acordată animalelor și pentru programele sale educaționale interactive. Inaugurată în 1971, grădina a început ca o colecție de animale de vânătoare, transformându-se ulterior într-un centru modern de conservare. Secțiunea pentru copii permite interacțiunea directă cu animale domestice, fiind o destinație ideală pentru activități educaționale în aer liber. Științele Naturii K3 – Lumea animalelor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde 1971 eröffnet und war ursprünglich als Geschenk für die Kinder der Stadt gedacht.",
      "Trotz seiner relativ geringen Fläche beherbergt er über 500 Tiere aus rund 100 verschiedenen Arten.",
      "Der Zoo Kecskemét ist berühmt für seine erfolgreiche Nachzucht von Luchsen und anderen europäischen Raubtieren.",
      "Es gibt einen Streichelzoo, in dem Kinder Kontakt zu zahmen Ziegen und Schafen aufnehmen können.",
      "Der Zoo bietet regelmäßige Schaufütterungen an, bei denen Pfleger Wissenswertes über die Tiere erzählen.",
      "Ein großer Teil der Anlage ist bewaldet, was auch an heißen Sommertagen für angenehme Kühle sorgt.",
      "Der Zoo arbeitet eng mit Schulen zusammen, um das Umweltbewusstsein der jüngeren Generation zu stärken.",
      "Die Eintrittspreise sind bewusst familienfreundlich gestaltet, um allen Bewohnern den Zugang zur Natur zu ermöglichen."
      ],
      hu: ["1971-ben nyílt meg, eredetileg a város gyermekeinek ajándékaként.", "Viszonylag kis területén több mint 500 állat él körülbelül 100 fajból.", "Híres az európai hiúzok sikeres szaporításáról és védelméről.", "Az állatsimogatóban a gyerekek közvetlen kapcsolatba kerülhetnek a kecskékkel.", "Rendszeres látványetetések során a gondozók érdekes tényeket mesélnek.", "A terület fásított, így a legnagyobb nyári hőségben is kellemes klímájú.", "Szoros együttműködésben áll a helyi iskolákkal a természetismereti oktatásban.", "A belépőjegyek ára tudatosan családbarát a helyi közösség számára."],
      ro: ["Grădina găzduiește aproximativ 500 de animale din peste 100 de specii.", "Suprafața totală a grădinii zoologice este de circa 3 hectare.", "Vedetele grădinii sunt leii africani și tigrii siberieni.", "Există un program special de 'adoptare' a animalelor pentru susținere financiară.", "Clădirea principală include un centru de expoziții de reptile și insecte.", "Peste 100.000 de persoane vizitează anual acest parc."],
      en: []
    },
  },
  {
    id: "industry-mercedes-kecskemet-extra",
    type: "industry",
    parent: "HU-BK",
    coords: [19.740, 46.874],
    name: { de: "Mercedes-Benz Werk Kecskemét", hu: "Mercedes-Benz Gyár Kecskemét", ro: "Fabrica Mercedes-Benz Kecskemét", en: "Mercedes-Benz Plant Kecskemét" },
    description: {
      de: "Eines der modernsten Automobilwerke Europas, wo Premium-Kompaktwagen hergestellt werden.",
      hu: "Európa egyik legmodernebb autógyára, ahol prémium kompakt autók készülnek.",
      ro: "Una dintre cele mai moderne fabrici auto din Europa, unde se produc mașini compacte premium.",
      en: "One of Europe's most modern car plants, producing premium compact automobiles."
    },
    facts: {
      de: ["2012 eröffnet.", "Tausende Mitarbeiter."],
      hu: ["2012-ben nyílt meg.", "Több ezer munkavállalót foglalkoztat."],
      ro: ["Deschisă în 2012.", "Mii de angajați."],
      en: ["Opened in 2012.", "Employs thousands of workers."]
    },
    descriptionAdvanced: {
      de: "Das Mercedes-Benz Werk in Kecskemét ist einer der bedeutendsten Industriestandorte in Ungarn und ein Symbol für die moderne Automobilfertigung auf höchstem Niveau. Seit seiner Eröffnung im Jahr 2012 hat sich das Werk zu einer tragenden Säule der ungarischen Wirtschaft entwickelt. Hier werden verschiedene Premium-Kompaktmodelle der Marke Mercedes-Benz für den Weltmarkt produziert, darunter die CLA-Klasse und die A-Klasse. Das Werk zeichnet sich durch hochautomatisierte Produktionslinien, modernste Robotertechnik und strenge Qualitätskontrollen aus. Ein besonderes Augenmerk liegt auf der Nachhaltigkeit und dem Übergang zur Elektromobilität, weshalb das Werk kontinuierlich für die Produktion von Elektrofahrzeugen ausgebaut wird. Tausende hochqualifizierte Mitarbeiter sind hier beschäftigt, und das Unternehmen ist ein Vorreiter im Bereich der dualen Ausbildung in Ungarn. Die Ansiedlung von Mercedes-Benz hat Kecskemét zu einem globalen Zentrum der Automobilindustrie gemacht und zahlreiche Zulieferbetriebe in die Region gelockt.",
      hu: "A kecskeméti Mercedes-Benz Gyár Magyarország egyik legjelentősebb ipari bázisa és a modern autógyártás jelképe. 2012-es megnyitása óta az üzem a hazai gazdaság egyik tartópillérévé vált, ahol prémium kategóriás kompakt autókat készítenek a világpiacra. Itt készülnek többek között a CLA és az A-osztály modelljei, amelyeket világszerte Kecskemétről szállítanak a vásárlókhoz. A gyár a legmodernebb robottechnikát és automatizált gyártósorokat alkalmazza, szigorú minőségellenőrzés mellett. Kiemelt figyelmet fordítanak a fenntarthatóságra és az elektromos átállásra, ezért az üzem folyamatosan bővül az elektromos modellek gyártásához szükséges technológiával. Több ezer munkavállalót foglalkoztat, és meghatározó szerepet tölt be a hazai duális szakképzésben is.",
      ro: "Fabrica Mercedes-Benz din Kecskemét este motorul economic al regiunii și unul dintre cele mai moderne centre de producție auto din Europa. Inaugurată în 2012, fabrica este specializată în asamblarea modelelor compacte și a vehiculelor electrice de ultimă generație. Investiția gigantului german a transformat Kecskemét într-un hub tehnologic global, atrăgând numeroși furnizori și specialiști. Procesul de producție utilizează roboți avansați și sisteme inteligente, punând un accent major pe sustenabilitate și reducerea amprentei de carbon. Fabrica oferă locuri de muncă pentru mii de angajați și colaborează strâns cu universitățile locale pentru formarea viitorilor ingineri. Geografie K8 – Globalizarea și industria auto.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Entscheidung für den Standort Kecskemét fiel im Jahr 2008 nach einem intensiven internationalen Wettbewerb.",
      "Es war das erste Pkw-Werk von Mercedes-Benz in Europa außerhalb Deutschlands.",
      "Im Jahr 2012 lief das erste Fahrzeug, eine B-Klasse, offiziell vom Band.",
      "Das Werk in Kecskemét produziert exklusiv für den Weltmarkt den Mercedes-Benz CLA.",
      "Mercedes-Benz ist einer der größten Steuerzahler und Arbeitgeber in ganz Ungarn.",
      "Das Werk nutzt modernste Lackiertechnologien, die besonders umweltschonend und ressourceneffizient sind.",
      "Es gibt ein eigenes Besucherzentrum, das Einblicke in die faszinierende Welt der Autoproduktion bietet.",
      "Das Unternehmen engagiert sich stark in der Region, unterstützt soziale Projekte und fördert Sport und Kultur."
      ],
      hu: ["A beruházásról 2008-ban döntöttek egy erős nemzetközi verseny után.", "Ez volt a Mercedes-Benz első Németországon kívüli európai személyautó-gyára.", "2012-ben az első legördülő modell egy B-osztályú Mercedes volt.", "A CLA modelleket kizárólag Kecskeméten gyártják a világ összes piaca számára.", "Az üzem Magyarország egyik legnagyobb adófizetője és munkaadója.", "Környezetbarát festőüzeme és energiahatékony rendszerei példaértékűek.", "Látogatóközpontja betekintést enged az autógyártás lenyűgöző világába.", "Számos beszállító cég települt a régióba a gyár megjelenése miatt."],
      ro: ["Fabrica a produs primul său autoturism, un Mercedes-Benz B-Class, în martie 2012.", "Suprafața totală a complexului industrial este de peste 440 de hectare.", "Peste 4.500 de angajați lucrează direct în cadrul unității de producție.", "Unitatea a atins pragul de 1 milion de mașini produse în anul 2019.", "Fabrica folosește energie electrică provenită 100% din surse regenerabile.", "Modelele CLA și CLA Shooting Brake sunt produse exclusiv la Kecskemét."],
      en: []
    },
  },

  // HU-BE: Békés (3G, 1LN, 1W)
  {
    id: "historical-gyulai-var-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [21.285, 46.645],
    name: { de: "Burg von Gyula", hu: "Gyulai vár", ro: "Cetatea din Gyula", en: "Gyula Castle" },
    description: {
      de: "Die einzige erhaltene gotische Backsteinburg im Karpatenbecken.",
      hu: "A Kárpát-medence egyetlen épen maradt gótikus tégla vára.",
      ro: "Singura cetate gotică din cărămidă rămasă intactă în Bazinul Carpatic.",
      en: "The only intact Gothic brick castle in the Carpathian Basin."
    },
    facts: {
      de: ["Über 600 Jahre alt.", "Sommertheater im Hof."],
      hu: ["Több mint 600 éves.", "Várszínház működik az udvarán."],
      ro: ["Vechime de peste 600 de ani.", "Teatru de vară în curte."],
      en: ["Over 600 years old.", "Hosts a summer theater in its courtyard."]
    },
    descriptionAdvanced: {
      de: "Die Burg von Gyula ist ein einzigartiges historisches Monument und die einzige erhaltene gotische Backsteinfestung im Karpatenbecken. Ihre Errichtung begann im 14. Jahrhundert, wobei sie strategisch wichtig war, um das Tiefland vor feindlichen Einfällen zu schützen. Die massiven Backsteinmauern und der markante Turm verleihen der Burg ein unverwechselbares Aussehen, das sie von den typischen Steinburgen im Bergland unterscheidet. Im Inneren der Burg befindet sich ein umfangreiches Museum mit 24 Ausstellungsräumen, die das Leben der Ritter, die Zeit der türkischen Besatzung und die Geschichte der Burgherren lebendig darstellen. Besucher können die Schmiede, die Backstube, den Weinkeller und sogar den Gerichtssaal besichtigen. Im Sommer verwandelt sich der Innenhof in eine spektakuläre Bühne für das Burgtheater, das weit über die Region hinaus bekannt ist. Direkt neben der Burg befinden sich das berühmte Burgbad und das Almásy-Schloss, was die Anlage zu einem erstklassigen kulturellen und touristischen Komplex macht.",
      hu: "A Gyulai vár az egyetlen épen maradt gótikus síkvidéki téglaerődítmény a Kárpát-medencében, egyedülálló történelmi mementó. Építése a 14. században kezdődött, stratégiai szerepe pedig az Alföld védelme volt a külső ellenségekkel szemben. Masszív téglafalai és jellegzetes tornya különleges látványt nyújtanak, megkülönböztetve a hegyvidéki kőáraktól. A belső terekben 24 kiállítóterem mutatja be a lovagok életét, a török megszállás korát és a várurak mindennapjait. Megtekinthető a kovácsműhely, a sütöde, a borozó és a várbörtön is. Nyaranként a várudvar látványos várszínházi előadások helyszínévé válik. A közvetlen szomszédságában lévő Várfürdő és Almásy-kastély komplex turisztikai élményt kínál Gyulán.",
      ro: "Cetatea din Gyula este singura cetate de cărămidă în stil gotic din Europa Centrală care a rămas intactă până în prezent, reprezentând o valoare istorică inestimabilă. Construită în secolul al XV-lea, fortificația a servit ca punct strategic de apărare împotriva invaziilor otomane. Zidurile sale de cărămidă, turnul de observație și curtea interioară oferă o imagine autentică a vieții militare medievale. După o lungă perioadă de restaurare, cetatea găzduiește astăzi un muzeu interactiv cu 24 de săli care prezintă istoria locală, de la viața nobililor la cea a soldaților. În timpul verii, teatrul din cetate atrage mii de spectatori cu piese istorice și concerte. Istorie K6 – Cetăți medievale și arhitectura defensivă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde aus Millionen von Ziegeln errichtet, die aus dem lokalen Lehm der Umgebung gebrannt wurden.",
      "Während der Türkenkriege im Jahr 1566 hielt die Burg einer gewaltigen Übermacht fast 63 Tage lang stand.",
      "Nach dem Fall der Burg blieb Gyula für 129 Jahre unter osmanischer Herrschaft.",
      "In den 1950er und 60er Jahren fand eine umfassende archäologische Ausgrabung und Restaurierung statt.",
      "Der Wohnturm der Burg bietet einen wunderbaren Blick über die Stadt und die nahe gelegene Grenze zu Rumänien.",
      "Im Burgmuseum ist eine seltene Sammlung mittelalterlicher Waffen und Rüstungen zu sehen.",
      "Die Burg von Gyula gilt als eine der sichersten Festungen ihrer Zeit im ungarischen Tiefland.",
      "Das jährlich stattfindende Burgfeuer-Festival erinnert mit historischen Spielen an die heldenhaften Verteidiger."
      ],
      hu: ["A várat millió számmal égetett téglákból építették a helyi agyagból.", "1566-ban a vár 63 napig állt ellen a hatalmas török túlerőnek.", "A vár elfoglalása után Gyula 129 évig oszmán uralom alatt állt.", "Az 1950-es években kezdődött meg a szakszerű régészeti feltárása és helyreállítása.", "A lakótoronyból pazar kilátás nyílik a városra és a román határra.", "A vármúzeumban középkori fegyverek és páncélok gyűjteménye látható.", "Síkvidéki elhelyezkedése ellenére korának egyik legmodernebb védműve volt.", "A minden évben megrendezett Vártűz-fesztivál a hős védőkre emlékezik."],
      ro: ["Construcția a început în jurul anului 1405 sub îndrumarea lui János Maróti.", "Cetatea a fost asediată și ocupată de turci în 1566, după un asediu de 63 de zile.", "Turnul principal are o înălțime de 23 de metri și oferă o vedere panoramică.", "Pentru construcție au fost folosite peste 5 milioane de cărămizi arse.", "În interior funcționează o fierărie și o brutărie medievală complet funcționale.", "Cetatea a fost eliberată de sub stăpânirea otomană în anul 1695."],
      en: []
    },
  },
  {
    id: "historical-szarvasi-szarazmalom-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [20.551, 46.864],
    name: { de: "Trockenmühle von Szarvas", hu: "Szarvasi szárazmalom", ro: "Moara uscată din Szarvas", en: "Szarvas Horse-drawn Mill" },
    description: {
      de: "Eine seltene, von Pferden angetriebene Mühle aus dem 19. Jahrhundert, heute ein Museum.",
      hu: "Ritka, 19. századi lovas meghajtású malom, amely ma múzeumként működik.",
      ro: "O moară rară din secolul al XIX-lea acționată de cai, astăzi muzeu.",
      en: "A rare 19th-century horse-drawn mill, now functioning as a museum."
    },
    facts: {
      de: ["Voll funktionsfähig.", "Einzigartig in Ungarn."],
      hu: ["Teljesen működőképes.", "Egyedülálló Magyarországon."],
      ro: ["Complet funcțională.", "Unică în Ungaria."],
      en: ["Fully functional.", "Unique in Hungary."]
    },
    descriptionAdvanced: {
      de: "Die Trockenmühle von Szarvas ist ein außergewöhnliches technisches Denkmal und eine der wenigen erhaltenen pferdebetriebenen Mühlen in Mitteleuropa. Errichtet im 19. Jahrhundert, ist sie ein Zeugnis für die landwirtschaftliche Ingenieurskunst der damaligen Zeit in der ungarischen Tiefebene, wo Wasserkraft oft Mangelware war. Das beeindruckende Gebäude besteht aus einem gewaltigen kreisförmigen Mahlraum, in dem Pferde die Mechanik über einen großen hölzernen Zahnradantrieb in Gang setzten. Die Mühle ist heute voll funktionsfähig und dient als Museum, das Besuchern den Prozess des Mahlens von Getreide ohne Wind- oder Wasserkraft veranschaulicht. Die riesige Dachkonstruktion und die massiven Eichenbalken sind architektonisch beeindruckend. Bei speziellen Vorführungen wird die Mühle auch heute noch in Betrieb genommen, um die traditionelle Arbeitsweise erlebbar zu machen. Sie ist ein Symbol für den Fleiß und den Erfindungsreichtum der ländlichen Bevölkerung und ein Muss für Technik- und Geschichtsinteressierte.",
      hu: "A Szarvasi szárazmalom egy különleges technikatörténeti emlék, az egyetlen eredeti helyén megmaradt lovas meghajtású malom Magyarországon. A 19. században épült létesítmény a mezőgazdasági mérnöki tudás ékes példája az Alföldön, ahol a folyók hiánya miatt gyakran állati erővel végezték a gabonaőrlést. Az épület központi eleme a hatalmas járókerék, amelyet lovak hajtottak körbe, működtetve a bonyolult fa áttételeket és az őrlőköveket. A malom ma múzeumként működik, ahol a látogatók megismerhetik a kenyér alapanyagának hagyományos előállítását. Impozáns tetőszerkezete és masszív tölgyfagerendái építészetileg is lenyűgözőek. Alkalmanként bemutató őrléseket is tartanak, hogy a múlt technológiája élővé váljon a mai ember számára.",
      ro: "Moara uscată din Szarvas este una dintre puținele mori acționate de cai păstrate în Europa, fiind o dovadă vie a ingeniozității tehnice din perioada preindustrială. Construită în 1836, moara a fost folosită timp de peste un secol pentru măcinarea cerealelor și producerea uleiului de dovleac. Mecanismul complex din lemn, acționat de forța animală, este complet funcțional și astăzi, fiind prezentat vizitatorilor în timpul demonstrațiilor periodice. Clădirea cu acoperiș de șindrilă și grinzi masive reflectă tradiția arhitecturală rurală a regiunii Békés. Este un monument tehnic de importanță națională, esențial pentru înțelegerea istoriei agriculturii și a industriei alimentare. Istorie K5 – Tradiții și meșteșuguri rurale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Mühle wurde 1836 erbaut und war bis Ende des 19. Jahrhunderts kommerziell in Betrieb.",
      "Um die Mahlsteine zu bewegen, wurden in der Regel zwei bis vier kräftige Pferde gleichzeitig eingespannt.",
      "Das Gebäude wurde komplett ohne den Einsatz von Metallnägeln, nur mit Holzverbindungen, errichtet.",
      "Die Trockenmühle von Szarvas ist die einzige ihrer Art in Ungarn, die an ihrem ursprünglichen Platz erhalten blieb.",
      "Das riesige Triebrad hat einen Durchmesser von über zehn Metern und ist aus massivem Hartholz gefertigt.",
      "Nach einer umfassenden Restaurierung in den 1970er Jahren wurde die Mühle für den Tourismus erschlossen.",
      "In der Mühle wird nicht nur Mehl gemahlen, sondern früher wurde dort auch Hirse geschält.",
      "Die Anlage ist heute Teil des Nationalen Erbes Ungarns und ein bedeutendes Ziel für Schulausflüge."
      ],
      hu: ["A malom 1836-ban épült és a 19. század végéig kereskedelmi célra használták.", "Az őrlőkövek mozgatásához egyszerre általában két vagy négy lovat fogtak be.", "Az épület fém szögek nélkül, kizárólag fa csapolásokkal készült.", "A hatalmas járókerék átmérője meghaladja a tíz métert.", "A restaurálás után az 1970-es években nyílt meg a nagyközönség előtt.", "A malomban nemcsak lisztet őröltek, hanem köleskását is hántoltak.", "A Nemzeti Örökség része, a hazai népi építészet egyik legértékesebb emléke.", "Fontos állomása az alföldi technikatörténeti túraútvonalaknak."],
      ro: ["Moara a fost construită de familia Bolza în anul 1836.", "Mecanismul principal din lemn are un diametru de peste 10 metri.", "Pentru a măcina grâul, moara era acționată de 2 sau 4 cai simultan.", "Restaurarea completă a monumentului a avut loc între 1962 și 1973.", "Moara putea produce până la 200 kg de făină pe oră în condiții optime.", "Este singura moară de acest tip din Ungaria care a rămas pe locul original."],
      en: []
    },
  },
  {
    id: "historical-gyulai-almasy-kastely-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [21.284, 46.646],
    name: { de: "Almásy-Schloss Gyula", hu: "Gyulai Almásy-kastély", ro: "Castelul Almásy din Gyula", en: "Almásy Mansion Gyula" },
    description: {
      de: "Ein prachtvolles Barockschloss mit einer interaktiven Ausstellung über das Adelsleben.",
      hu: "Pompás barokk kastély interaktív kiállítással a nemesi életről.",
      ro: "Un castel baroc superb cu o expoziție interactivă despre viața nobiliară.",
      en: "A splendid Baroque mansion with an interactive exhibition about noble life."
    },
    facts: {
      de: ["Kürzlich renoviert.", "Neben dem Burgbad."],
      hu: ["Nemrég újították fel.", "A Várfürdő szomszédságában."],
      ro: ["Renovat recent.", "Lângă Băile Cetății."],
      en: ["Recently renovated.", "Located next to the Castle Spa."]
    },
    descriptionAdvanced: {
      de: "Das Almásy-Schloss in Gyula ist ein prachtvolles barockes Herrenhaus, das nach einer aufwendigen Restaurierung zu einem der modernsten interaktiven Museen Ungarns geworden ist. Es liegt in unmittelbarer Nähe zur Burg von Gyula und inmitten eines weitläufigen Schlossparks. Das Schloss war über Generationen der Sitz bedeutender Adelsfamilien wie der Harruckerns, Wenckheims und Almásys. Die heutige Ausstellung geht über die übliche Präsentation von Möbeln hinaus und lässt Besucher in den Alltag sowohl der Schlossherren als auch der Bediensteten eintauchen. Durch modernste Technik und interaktive Stationen erfährt man, wie damals gekocht wurde, welche Kleidung man trug und wie die prunkvollen Feste organisiert wurden. Besonders beeindruckend sind die restaurierten Innenräume, die Kapelle und das elegante Treppenhaus. Das Schloss ist heute ein kulturelles Zentrum, das regelmäßig Konzerte, Vorträge und temporäre Ausstellungen beherbergt und die glanzvolle Ära des ungarischen Adels greifbar macht.",
      hu: "A gyulai Almásy-kastély egy pompás barokk főúri rezidencia, amely a közelmúltban az ország egyik legmodernebb interaktív látogatóközpontjává alakult. A vár szomszédságában, hatalmas ősparkban fekvő épület generációkon át jelentős nemesi családok, a Harruckernek, Wenckheimek és Almásyak otthona volt. A kiállítás szakít a hagyományos bútorbemutatással: a látogatók a 'kastélyfalak titkait' fedezhetik fel, betekintve a személyzet és a főurak mindennapjaiba. Modern eszközökkel tudhatjuk meg, hogyan főztek, öltözködtek és hogyan mulattak egykor a kastély lakói. Restaurált belső terei, a kápolna és az elegáns lépcsőház a főúri világ aranykorát idézik. A kastély ma rangos kulturális rendezvényeknek és koncerteknek is otthont ad.",
      ro: "Conacul Almásy din Gyula este o bijuterie arhitecturală în stil baroc și neoclasic, renumit pentru rolul său cultural și istoric în viața aristocrației maghiare. Clădirea, situată în apropierea cetății, a fost martora unor evenimente majore, precum depunerea armelor de către generalii revoluției din 1849. Recent restaurat, castelul găzduiește un centru de vizitare interactiv de talie europeană, care prezintă viața de zi cu zi atât a nobililor, cât și a personalului auxiliar. Expoziția utilizează tehnologii moderne pentru a recrea atmosfera secolelor XVIII-XIX, de la banchete fastuoase la activitățile casnice ascunse. Este un exemplu strălucit de valorificare a patrimoniului nobiliar. Istorie K8 – Viața aristocrației în secolul al XIX-lea.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Schloss war das erste Gebäude in Ungarn, in dem im 18. Jahrhundert ein Theaterstück aufgeführt wurde.",
      "Berühmte Persönlichkeiten wie der Komponist Ferenc Erkel waren hier oft zu Gast und gaben Musikunterricht.",
      "Nach der Revolution von 1848/49 legten zehn der dreizehn Märtyrer von Arad hier vor dem Schloss ihre Waffen nieder.",
      "Die interaktive Ausstellung wurde bereits mehrfach für ihre innovative Vermittlung von Geschichte ausgezeichnet.",
      "Ein besonderes Highlight ist der Blick vom Aussichtsturm auf die Burg und die Stadt Gyula.",
      "Im Schlosskeller befand sich früher eine bedeutende Weinsammlung der Adelsfamilien.",
      "Das Schloss wurde während des Zweiten Weltkriegs und in der Folgezeit stark vernachlässigt und als Schule genutzt.",
      "Seit der Wiedereröffnung 2016 hat sich das Schloss zu einem der meistbesuchten Museen in Südostungarn entwickelt."
      ],
      hu: ["Ez volt az első épület Magyarországon, ahol a 18. században színielőadást tartottak.", "Erkel Ferenc zeneszerző gyakori vendég volt itt és zenét is tanított.", "Az 1848/49-es szabadságharc után itt tette le a fegyvert tíz aradi vértanú.", "Az interaktív tárlat több rangos szakmai díjat nyert el újszerű látásmódjáért.", "Kilátótornyából egyedülálló perspektívából látható a gyulai vár.", "Pincerendszerében régebben a környék legértékesebb borait őrizték.", "A második világháború után iskolaként működött, állaga leromlott.", "A 2016-os megnyitása óta a dél-alföldi régió leglátogatottabb múzeuma."],
      ro: ["Arhitectul celebru Ferenc Erkel, compozitorul imnului național, a dat lecții de muzică aici.", "După bătălia de la Șiria, 10 dintre cei 13 generali de la Arad au fost aduși aici.", "Castelul are un sistem de încălzire prin pardoseală foarte avansat pentru epoca sa.", "Suprafața expozițională interactivă se întinde pe mai mult de 1300 mp.", "Parcul castelului face parte astăzi din complexul Băilor Cetății Gyula.", "Aici a funcționat prima școală de grădinărit din Ungaria."],
      en: []
    },
  },
  {
    id: "animal-habitat-korosvolgyi-allatpark-extra",
    type: "animal-habitat",
    parent: "HU-BE",
    coords: [20.533, 46.852],
    name: { de: "Körös-Tal Tierpark", hu: "Körösvölgyi Állatpark", ro: "Parcul de Animale Valea Crișului", en: "Koros Valley Animal Park" },
    description: {
      de: "Ein Park in Szarvas, der die ursprüngliche Fauna des Karpatenbeckens zeigt.",
      hu: "Szarvasi állatpark, amely a Kárpát-medence őshonos állatvilágát mutatja be.",
      ro: "Un parc de animale în Szarvas care prezintă fauna originală a Bazinului Carpatic.",
      en: "An animal park in Szarvas showcasing the native fauna of the Carpathian Basin."
    },
    facts: {
      de: ["Bisons und Wölfe.", "Schöne natürliche Umgebung."],
      hu: ["Bölények és farkasok.", "Gyönyörű természeti környezet."],
      ro: ["Zimbri și lupi.", "Cadru natural superb."],
      en: ["Bisons and wolves.", "Beautiful natural surroundings."]
    },
    descriptionAdvanced: {
      de: "Der Körös-Tal Tierpark in Szarvas ist ein idyllisches Naturzentrum, das sich auf die Präsentation der ursprünglichen Flora und Fauna des Karpatenbeckens spezialisiert hat. Gelegen am Ufer eines malerischen Seitenarms der Körös, bietet der Park weitläufige Gehege, in denen Tiere in ihrer natürlichen Umgebung beobachtet werden können. Besucher begegnen hier Arten, die früher in Ungarn heimisch waren, wie Wisenten, Wölfen und Elchen, aber auch heute noch verbreiteten Wildtieren wie Hirschen, Wildschweinen und zahlreichen Vogelarten. Ein besonderes Highlight ist das imposante Hauptgebäude, das moderne Architektur mit natürlichen Materialien verbindet und interessante Ausstellungen zur Naturgeschichte der Region beherbergt. Der Park ist ideal für ruhige Spaziergänge und bietet zahlreiche Lehrpfade, die insbesondere Kindern spielerisch den Wert des Naturschutzes vermitteln. Die Kombination aus Wasserflächen, Wald und artenreicher Tierwelt macht den Besuch zu einem erholsamen und lehrreichen Erlebnis für alle Altersgruppen.",
      hu: "A Körösvölgyi Állatpark Szarvason egy idilli természeti központ, amely a Kárpát-medence őshonos állatvilágának bemutatására szakosodott. A Körös egyik kanyargós holtágának partján elhelyezkedő park tágas kifutóiban természetes környezetükben figyelhetők meg az állatok. Találkozhatunk itt olyan fajokkal, amelyek egykor hazánkban éltek, mint az európai bölény, a farkas vagy a jávorszarvas, de láthatók a ma is elterjedt nagyvadak is. A park modern látogatóközpontja természettudományi kiállításokat és interaktív bemutatókat kínál. A terület ideális nyugodt sétákhoz, tanösvényei pedig játékos formában tanítják meg a gyermekeknek a természetvédelem értékeit. A vízfelületek, az erdő és az állatvilág harmóniája felejthetetlen élményt nyújt minden korosztálynak.",
      ro: "Parcul de Animale din Valea Crișurilor (Körösvölgyi Állatpark), situat în Szarvas, este dedicat prezentării faunei native din Bazinul Carpatic, oferind un mediu natural controlat pentru numeroase specii. Vizitatorii pot observa animale care odinioară populau câmpiile și pădurile Ungariei, cum ar fi bizonii europeni, elanii și diverse specii de păsări răpitoare. Parcul face parte din Rezervația Naturală Criș-Mureș și pune un accent deosebit pe conservarea și reintroducerea speciilor dispărute. Potecile educaționale și punctele de observație permit o imersiune totală în natură, fiind un loc ideal pentru lecții de biologie în aer liber. Științele Naturii K6 – Conservarea biodiversității.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Tierpark wird von der Direktion des Körös-Maros-Nationalparks verwaltet und betrieben.",
      "Das Hauptgebäude beherbergt eines der größten Süßwasseraquarien Ungarns mit einheimischen Fischarten.",
      "Die Wisente im Park sind Teil eines internationalen Programms zur Wiederansiedlung dieser beeindruckenden Tiere.",
      "Es gibt einen Aussichtsturm, von dem aus man einen weiten Blick über den Nationalpark und die Flusslandschaft hat.",
      "Der Park organisiert regelmäßig geführte Nachtwanderungen, um die dämmerungsaktiven Tiere zu erleben.",
      "Ein spezieller Bereich ist den ungarischen Haustierrassen wie dem Graurind und den Zackelschafen gewidmet.",
      "Die Anlage ist komplett barrierefrei und bietet zahlreiche Rastplätze für Familien.",
      "Im Frühjahr und Herbst ist der Park ein wichtiger Rastplatz für Zugvögel, die in den Feuchtgebieten der Körös Nahrung finden."
      ],
      hu: ["A parkot a Körös-Maros Nemzeti Park Igazgatósága üzemelteti.", "Központi épületében található az ország egyik legnagyobb édesvízi akváriuma.", "A bölények egy nemzetközi fajmegmentési program keretében élnek itt.", "Kilátótornyából belátható a holtág és a nemzeti park érintetlen vidéke.", "Rendszeresen szerveznek éjszakai túrákat a rejtőzködő állatok megfigyelésére.", "Külön részleg mutatja be a magyar szürkemarhát és a rackajuhokat.", "A terület akadálymentesített, így kerekesszékkel is kényelmesen látogatható.", "Tavasszal és ősszel fontos madárvonulási megfigyelőhely a Körös mentén."],
      ro: ["Parcul găzduiește peste 50 de specii de animale sălbatice native.", "Principalul punct de atracție este țarcul bizonilor europeni, reintroduși în zonă.", "Lungimea traseului de vizitare este de aproximativ 1,5 kilometri.", "Vizitatorii pot vedea specii rare precum dropia sau lupul cenușiu.", "Parcul include un centru de reabilitare pentru păsările rănite.", "Există un lac special amenajat pentru prezentarea păsărilor de apă locale."],
      en: []
    },
  },
  {
    id: "industry-csabai-kolbaszgyar-extra",
    type: "industry",
    parent: "HU-BE",
    coords: [21.096, 46.675],
    name: { de: "Wurstfabrik Békéscsaba", hu: "Békéscsabai Kolbászgyár", ro: "Fabrica de Cârnați Békéscsaba", en: "Bekescsaba Sausage Factory" },
    description: {
      de: "Die Heimat der berühmten Csabai-Wurst, ein Symbol ungarischer Gastronomie.",
      hu: "A híres Csabai kolbász hazája, a magyar gasztronómia egyik jelképe.",
      ro: "Patria celebrilor cârnați de Csaba, un simbol al gastronomiei maghiare.",
      en: "The home of the famous Csabai sausage, a symbol of Hungarian gastronomy."
    },
    facts: {
      de: ["Traditionelle Rezepte.", "Jährliches Wurstfestival."],
      hu: ["Hagyományos receptek.", "Évente kolbászfesztivált tartanak."],
      ro: ["Rețete tradiționale.", "Festival anual al cârnaților."],
      en: ["Traditional recipes.", "Hosts an annual sausage festival."]
    },
    descriptionAdvanced: {
      de: "Die Wurstfabrik in Békéscsaba ist die Heimat der weltberühmten Csabai-Wurst, eines der bekanntesten 'Hungarikums'. Die Stadt blickt auf eine jahrhundertelange Tradition der Fleischverarbeitung zurück, die auf den Rezepten und Methoden der ungarischen und slowakischen Bevölkerung der Region basiert. In der modernen Fabrik wird die echte Csabai-Wurst nach strengen Qualitätskriterien hergestellt, wobei die charakteristische Mischung aus hochwertigem Schweinefleisch und reichlich edelsüßem sowie scharfem Paprika entscheidend ist. Im Gegensatz zu vielen anderen Würsten wird die Csabai traditionell ohne Pfeffer hergestellt. Die Fabrik ist nicht nur ein wichtiger Wirtschaftsfaktor, sondern bewahrt auch ein kulturelles Erbe, das jährlich beim großen Csabaer Wurstfestival gefeiert wird. Besucher können im angeschlossenen Museum mehr über die Geschichte des Fleischerhandwerks erfahren und natürlich die verschiedenen Sorten der würzigen Salami und Wurst direkt vor Ort verkosten.",
      hu: "A békéscsabai kolbászgyár a világhírű Csabai kolbász és szalámi hazája, a magyar gasztronómia egyik legfontosabb bázisa. A város évszázados húsfeldolgozási hagyományokkal rendelkezik, amely a helyi magyar és szlovák lakosság receptjein alapul. A modern üzemben szigorú minőségi előírások mellett készülnek a termékek, ahol a hús és a bőséges, kiváló minőségű paprika aránya határozza meg a karakteres ízt. A Csabai különlegessége, hogy hagyományosan nem használnak hozzá borsot. A gyár nemcsak gazdasági motor, hanem egy kulturális örökség őrzője is, amelyet a minden évben megrendezett Csabai Kolbászfesztivál ünnepel. A látogatók a múzeumban megismerhetik a hentesmesterség történetét és megkóstolhatják a fűszeres hústermékeket.",
      ro: "Fabrica de Cârnați din Békéscsaba este inima producției celebrului 'Csabai kolbász', un produs cu denumire de origine protejată și un simbol al gastronomiei maghiare. Tradiția producerii acestui cârnat picant, bazat pe rețete transmise din generație în generație, datează de peste 200 de ani. Fabrica modernă combină metodele artizanale cu standardele riguroase de siguranță alimentară, exportând produsele sale în întreaga lume. Caracteristica principală este utilizarea boielei de ardei de înaltă calitate și absența piperului negru, ceea ce îi conferă gustul unic și culoarea roșie intensă. Festivalul Cârnaților de la Békéscsaba atrage anual zeci de mii de turiști dornici să guste acest deliciu. Geografie K8 – Economia regională și tradițiile gastronomice.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die 'Csabai kolbász' ist seit 2013 offiziell als Hungarikum geschützt und steht für höchste ungarische Qualität.",
      "Das Geheimnis des Geschmacks liegt in der Verwendung von erstklassigem, lokal produziertem Paprikapulver.",
      "Traditionell wird die Wurst über Buchenholz geräuchert, was ihr das charakteristische Aroma verleiht.",
      "In Békéscsaba gibt es fast keine Familie, die nicht ihr eigenes, streng gehütetes Wurstrezept besitzt.",
      "Die Csabai-Wurst ist bekannt für ihre lange Haltbarkeit, was früher besonders für die ländliche Vorratshaltung wichtig war.",
      "Beim jährlichen Wurstfestival in Békéscsaba treten hunderte Teams an, um die beste Wurst der Region herzustellen.",
      "Die Fabrik exportiert ihre Produkte in zahlreiche Länder weltweit, von Europa bis nach Übersee.",
      "Die slowakischen Einwanderer im 18. Jahrhundert prägten die Fleischkultur von Békéscsaba entscheidend mit."
      ],
      hu: ["A Csabai kolbász 2013 óta hivatalos Hungarikum, kiemelt nemzeti érték.", "Az ízvilág titka a helyben termelt, lángvörös fűszerpaprika használata.", "A termékeket hagyományosan bükkfán füstölik a jellegzetes aroma érdekében.", "Békéscsabán szinte minden családnak saját, titkos kolbászreceptje van.", "A Csabai kolbász híres hosszú eltarthatóságáról és egyedi állagáról.", "A fesztiválon évente több száz csapat verseng a legjobb kolbász címért.", "Az üzemből a világ számos országába exportálnak, Amerikától Ázsiáig.", "A 18. századi szlovák betelepülés alapozta meg a város húsiparát."],
      ro: ["Produsul 'Csabai kolbász' a primit statutul de Hungaricum în anul 2013.", "Rețeta originală folosește exclusiv boia de ardei dulce și iute locală.", "Festivalul Cârnaților de la Békéscsaba este cel mai mare eveniment gastronomic din Ungaria.", "Producția anuală de cârnați în unitățile autorizate depășește 1000 de tone.", "Cârnatul de Csaba trebuie să fie afumat obligatoriu cu lemn de fag.", "Există o versiune uriașă de cârnat produsă anual pentru Guinness World Records."],
      en: []
    },
  },

  // HU-BZ: Borsod-Abaúj-Zemplén (3G, 1LN, 1W)
  {
    id: "historical-boldogkoi-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [21.233, 48.345],
    name: { de: "Burg Boldogkő", hu: "Boldogkői vár", ro: "Cetatea Boldogkő", en: "Boldogko Castle" },
    description: {
      de: "Eine spektakulär auf einem Felsen gelegene Burg im Zemplén-Gebirge.",
      hu: "Egy sziklaszirten trónoló, látványos vár a Zempléni-hegységben.",
      ro: "O cetate spectaculoasă situată pe o stâncă în munții Zemplén.",
      en: "A spectacular castle perched on a rocky cliff in the Zemplén Mountains."
    },
    facts: {
      de: ["Aussichtsplattform am Felsgrat.", "Mittelalterliche Ausstellungen."],
      hu: ["Kilátó a sziklaélen.", "Középkori kiállítások."],
      ro: ["Punct de belvedere pe creastă.", "Expoziții medievale."],
      en: ["Viewing platform on the ridge.", "Medieval exhibitions."]
    },
    descriptionAdvanced: {
      de: "Die Burg Boldogkő ist eine der spektakulärsten und malerischsten Festungsanlagen in Nordungarn und thront imposant auf einem schmalen Felsgrat im Zemplén-Gebirge. Ihre markante Silhouette mit dem langen, auf einem Felsen vorspringenden Gang macht sie zu einem der meistfotografierten Motive des Landes. Die Burg wurde nach dem Mongoleneinfall im 13. Jahrhundert errichtet, um die Handelswege nach Polen zu schützen. Besucher können die rekonstruierten Palasträume, die Waffenkammer und eine faszinierende Ausstellung von Zinnsoldaten besichtigen, die die großen Schlachten der ungarischen Geschichte nachstellt. Ein absolutes Highlight ist der Spaziergang auf dem hölzernen Steg am Felsgrat, der atemberaubende Ausblicke auf das weite Hernád-Tal bietet. Im Sommer finden auf der Burg regelmäßig Ritterspiele und mittelalterliche Feste statt, die die Geschichte für Besucher greifbar machen. Die Kombination aus wilder Natur und gut erhaltener Architektur verleiht Boldogkő eine fast mystische Atmosphäre.",
      hu: "A boldogkői vár Észak-Magyarország egyik leglátványosabb és legfestőibb erődítménye, amely egy keskeny sziklaélen trónol a Zempléni-hegységben. Markáns sziluettje, a sziklából kinyúló gyaloghíddal, az ország egyik legtöbbet fotózott helyszínévé teszi. A várat a 13. századi tatárjárás után emelték a Lengyelország felé vezető kereskedelmi utak védelmére. A látogatók bejárhatják a felújított palotaszárnyat, a fegyvertárat és a különleges ólomkatona-kiállítást, amely a magyar történelem nagy csatáit mutatja be. A sziklataréjon végigvezető fa folyosó lélegzetelállító kilátást kínál a Hernád völgyére. Nyaranként rendszeres lovagi tornák és középkori lakomák repítik vissza a vendégeket a múltba, Boldogkő misztikus és vadregényes világába.",
      ro: "Cetatea Boldogkő, cocoțată pe o creastă stâncoasă a Munților Zemplén, este una dintre cele mai pitorești și bine conservate fortificații din nordul Ungariei. Construită după invazia tătară din secolul al XIII-lea, cetatea a servit ca punct strategic de apărare a drumului comercial spre Polonia. Silueta sa unică, cu turnuri ascuțite și ziduri ce par să răsară direct din piatră, oferă o panoramă spectaculoasă asupra văii Hernád. În interior, vizitatorii pot explora expoziții de istorie militară, o colecție impresionantă de soldăței de plumb și pot asista la turniruri medievale organizate regulat. Este un loc plin de legende care transportă vizitatorii direct în epoca cavalerilor. Istorie K6 – Fortificații de frontieră.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Name der Burg bedeutet übersetzt etwa 'Burg des glücklichen Steins'.",
      "Einer Legende nach wurde die Burg von sieben Schwestern erbaut, die den König retten wollten.",
      "Die Burg wechselte in ihrer Geschichte oft die Besitzer, darunter waren bedeutende Adelsfamilien wie die Drugeths.",
      "Innerhalb der Burg befindet sich die größte Zinnsoldaten-Ausstellung in Mitteleuropa mit tausenden Figuren.",
      "Die Burgkapelle wurde erst in neuerer Zeit restauriert und wird heute oft für Hochzeiten genutzt.",
      "Im Keller der Burg reifen Weine aus der Region, die Besucher bei Verkostungen probieren können.",
      "Boldogkő liegt an der 'Nationalen Blauen Tour' (Országos Kéktúra), dem bekanntesten Fernwanderweg Ungarns.",
      "Die Restaurierungsarbeiten der letzten Jahre haben viele Bereiche der Burg wieder begehbar gemacht."
      ],
      hu: ["A vár neve a 'Boldogkő' sziklaelnevezésből ered, ahol állítólag tündérek laktak.", "Egy legenda szerint hét tündérszép leány építette a várat a király megsegítésére.", "Története során olyan családok birtokolták, mint a Drugethek vagy a Bebekek.", "Itt látható Közép-Európa legnagyobb ólomkatona-kiállítása több ezer figurával.", "Várkápolnáját nemrég szentelték újra, ma népszerű esküvői helyszín.", "A vár alatt érlelik a híres boldogkői aszalt barackot és pálinkát.", "Itt halad át az Országos Kéktúra zempléni szakasza.", "A vár rekonstrukciója során számos helyiséget eredeti berendezéssel láttak el."],
      ro: ["Prima atestare documentară a cetății datează din anul 1282.", "Turnul 'Leului' este situat pe vârful unei stânci înguste, fiind accesibil printr-o punte.", "Aici a scris Bálint Balassi, celebrul poet maghiar, o parte din opera sa.", "Cetatea a fost distrusă parțial de trupele imperiale în 1702, dar restaurată ulterior.", "Există un tunel secret săpat în stâncă care făcea legătura cu fântâna cetății.", "Expoziția de soldăței de plumb conține peste 1000 de piese pictate manual."],
      en: []
    },
  },
  {
    id: "historical-fuzeri-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [21.460, 48.541],
    name: { de: "Burg Füzér", hu: "Füzéri vár", ro: "Cetatea Füzér", en: "Fuzer Castle" },
    description: {
      de: "Eine der am schönsten restaurierten Burgen Ungarns auf einem Vulkankegel.",
      hu: "Magyarország egyik legszebben felújított vára egy vulkáni kúpon.",
      ro: "Una dintre cele mai frumos restaurate cetăți din Ungaria, pe un con vulcanic.",
      en: "One of Hungary's most beautifully restored castles on a volcanic cone."
    },
    facts: {
      de: ["Hier wurde die Krone gehütet.", "Atemberaubendes Panorama."],
      hu: ["Itt őrizték a Szent Koronát.", "Lélegzetelállító panoráma."],
      ro: ["Aici a fost păstrată coroana.", "Panoramă uluitoare."],
      en: ["The Holy Crown was kept here.", "Breathtaking panorama."]
    },
    descriptionAdvanced: {
      de: "Die Burg Füzér ist ein wahres Juwel der mittelalterlichen Architektur und liegt spektakulär auf einem 170 Meter hohen vulkanischen Kegel im nördlichsten Teil Ungarns. Sie gilt als eine der ältesten Steinburgen des Landes und wurde nach umfassenden Restaurierungen in den letzten Jahren in ihren prachtvollen Zustand des 16. Jahrhunderts zurückversetzt. Besonders beeindruckend ist die Burgkapelle mit ihren gotischen Gewölben und den farbenfrohen Glasfenstern. Die Burg spielte eine bedeutende Rolle in der ungarischen Geschichte, da hier nach der Niederlage von Mohács die heilige ungarische Krone vor den Türken versteckt wurde. Besucher können die herrschaftlichen Wohnräume, die Küche und den Rittersaal erkunden, die alle detailgetreu eingerichtet sind. Der Aufstieg zur Burg wird mit einem der schönsten Panoramen Ungarns belohnt, das über die dichten Wälder des Zemplén-Gebirges bis weit über die Grenze zur Slowakei reicht. Füzér ist ein Symbol für den Wiederaufbau und den Stolz auf die nationale Geschichte.",
      hu: "A füzéri vár a középkori magyar építészet egyik legcsodálatosabb ékköve, amely egy meredek vulkáni kúpon magasodik az ország legészakibb részén. Ez az egyik legkorábbi kővárunk, amely a közelmúltbeli nagyszabású restaurálásoknak köszönhetően visszanyerte 16. századi fényét. Különösen lenyűgöző a gótikus várkápolna a színes üvegablakaival és díszes boltozatával. A vár történetének egyik legfontosabb eseménye, hogy a mohácsi vereség után itt rejtegették a Szent Koronát a török elől. A látogatók berendezett palotatermeket, konyhát és lovagtermet járhatnak be, megismerve a várurak életét. A várba vezető kaptató végén az ország egyik legszebb panorámája fogad, ellátva a Zemplén erdeitől egészen a szlovák hegyekig.",
      ro: "Cetatea din Füzér este situată pe un vârf vulcanic izolat din Munții Zemplén, fiind considerată una dintre cele mai spectaculoase și 'miraculoase' fortificații din Ungaria. Construită înainte de invazia tătară, ea a jucat un rol crucial în protejarea Coroanei Sfânte a Ungariei după bătălia de la Mohács (1526). Restaurarea recentă a redat cetății strălucirea de odinioară, reconstruind palatul gotic și capela spectaculoasă cu elemente renascentiste. Urcarea spre cetate este o aventură în sine, oferind peisaje naturale de o frumusețe rară. Este un simbol al rezilienței istorice și un punct de referință pentru arhitectura nobiliară medievală târzie. Istorie K7 – Simbolurile puterii regale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde vermutlich bereits vor dem Mongoleneinfall von 1241 auf dem steilen Basaltfelsen errichtet.",
      "Im Jahr 1526 bewahrte der Burgherr Perényi Péter hier die heilige Stephanskrone fast ein Jahr lang auf.",
      "Die Burg wurde im 17. Jahrhundert von kaiserlichen Truppen gesprengt, um sie für Rebellen unbrauchbar zu machen.",
      "Die heutige Rekonstruktion basiert auf detaillierten archäologischen Ausgrabungen und historischen Plänen.",
      "Füzér wurde 2021 zu einem der sieben Naturwunder Ungarns gewählt.",
      "Innerhalb der Mauern gibt es interaktive Ausstellungen, die das mittelalterliche Handwerk und die Verteidigung der Burg zeigen.",
      "Der Ort Füzér am Fuße der Burg beherbergt auch ein interessantes dörfliches Freilichtmuseum (Skanzen).",
      "Die Burg ist nur zu Fuß über einen steilen, aber gut befestigten Pfad erreichbar."
      ],
      hu: ["A várat valószínűleg már az 1241-es tatárjárás előtt elkezdték építeni.", "Perényi Péter koronaőr 1526-ban majdnem egy évig itt őrizte a Szent Koronát.", "A 17. században császári csapatok robbantották fel, hogy ne kerüljön a kurucok kezére.", "A mai újjáépítés alapos régészeti feltárásokon és történeti forrásokon alapul.", "Füzért 2021-ben Magyarország hét természeti csodája közé választották.", "A várfalak között interaktív tárlat mutatja be a középkori harcászatot.", "A vár alatti faluban skanzen és interaktív tájház mutatja be a palóc életet.", "A csúcsra csak gyalogosan, egy meredek, de biztonságos ösvényen lehet feljutni."],
      ro: ["Cetatea se află la o altitudine de 552 de metri pe o stâncă de dacit.", "A fost prima cetate nobiliară din Ungaria construită din piatră.", "Coroana Sfântă a fost păstrată aici în secret timp de un an (1526-1527).", "Familia Perényi a transformat cetatea într-un centru cultural renascentist.", "Capela cetății a fost premiată internațional pentru calitatea restaurării.", "În 1676, cetatea a fost incendiată pentru a nu cădea în mâna rebelilor curuți."],
      en: []
    },
  },
  {
    id: "historical-diosgyori-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [20.689, 48.097],
    name: { de: "Burg Diósgyőr", hu: "Diósgyőri vár", ro: "Cetatea Diósgyőr", en: "Diosgyor Castle" },
    description: {
      de: "Einst der Lieblingssitz ungarischer Königinnen, heute eine moderne Erlebnisburg.",
      hu: "Egykor a magyar királynék kedvenc lakhelye, ma modern élményvár.",
      ro: "Odinioară reședința preferată a reginelor maghiare, astăzi o cetate interactivă.",
      en: "Once the favorite residence of Hungarian queens, now a modern interactive castle."
    },
    facts: {
      de: ["Vier markante Türme.", "Ritterspiele im Sommer."],
      hu: ["Négy jellegzetes torony.", "Nyári lovagi játékok."],
      ro: ["Patru turnuri distinctive.", "Turniruri cavalerești vara."],
      en: ["Four distinctive towers.", "Hosts knightly tournaments in summer."]
    },
    descriptionAdvanced: {
      de: "Die Burg Diósgyőr, am westlichen Rand von Miskolc am Fuße des Bükk-Gebirges gelegen, ist eine beeindruckende mittelalterliche Erlebnisburg. Bekannt als die 'Burg der Königinnen', diente sie über Jahrhunderte als Morgengabe und Lieblingsresidenz der ungarischen Regentinnen. Die imposante vierstürmige Anlage wurde im 14. Jahrhundert unter König Ludwig dem Großen prachtvoll ausgebaut und war Schauplatz bedeutender europäischer Diplomatie. Nach einer großangelegten Rekonstruktion bietet die Burg heute ein lebendiges Museumskonzept, bei dem Animatoren in historischen Kostümen den Alltag des Mittelalters demonstrieren. Besucher können den riesigen Rittersaal, die Schlosskapelle und die privaten Gemächer der Königinnen besichtigen. Regelmäßige Ritterturniere, Konzerte und Handwerksvorführungen machen die Burg zu einem kulturellen Zentrum der Region. Die Kombination aus historischer Substanz und moderner Erlebniswelt lässt die glanzvolle Ära des ungarischen Rittertums für alle Besucher wieder auferstehen.",
      hu: "A Diósgyőri vár Miskolc nyugati szélén, a Bükk-hegység lábánál fekvő, lenyűgöző középkori erődítmény. Mint a 'királynék vára', évszázadokon át a magyar uralkodónék kedvenc lakhelye és jegyajándéka volt. A négytornyos vár lovagkori pompáját Nagy Lajos király idején érte el, amikor európai jelentőségű diplomáciai események helyszínéül szolgált. A nagyszabású rekonstrukció után ma már modern élményvárként működik, ahol korhű ruhába öltözött animátorok mutatják be a középkor mindennapjait. A látogatók bejárhatják a hatalmas lovagtermet, a várkápolnát és a királynék lakosztályait is. Rendszeres lovagi tornák, koncertek és kézműves foglalkozások teszik a várat a régió kulturális központjává, ahol a múlt megelevenedik.",
      ro: "Cetatea Diósgyőr, situată la marginea orașului Miskolc, a fost odinioară 'castelul reginelor', fiind oferit în mod tradițional soțiilor regilor maghiari. Fortificația a cunoscut perioada de glorie în secolul al XIV-lea, sub domnia lui Ludovic cel Mare, care a transformat-o într-un palat gotic luxos cu patru turnuri masive. Recent, cetatea a trecut printr-un proces vast de reconstrucție, devenind un centru cultural și istoric vibrant unde istoria prinde viață prin actori costumați și ateliere meșteșugărești. Turnurile sale oferă o vedere panoramică spre Munții Bükk, iar curtea interioară găzduiește cele mai mari turniruri cavalerești din țară. Este un monument viu al epocii cavalerești. Istorie K6 – Viața la curtea regală.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "König Ludwig der Große unterzeichnete hier im Jahr 1381 den Frieden von Turin mit der Republik Venedig.",
      "Die Burg war traditionell das Hochzeitsgeschenk für die ungarischen Königinnen, insgesamt besaßen sie sechs Regentin.",
      "Nach der türkischen Besatzung verfiel die Burg zur Ruine und diente den Anwohnern lange als Steinbruch.",
      "Der Rittersaal galt bei seiner Fertigstellung als einer der größten und prächtigsten in ganz Mitteleuropa.",
      "In der Burg befindet sich eines der größten Panoptiken (Wachsfigurenkabinette) Mitteleuropas mit Szenen aus dem mittelalterlichen Leben.",
      "Die vier massiven Ecktürme sind das charakteristische Merkmal der Burgarchitektur von Diósgyőr.",
      "Jedes Jahr im Mai findet hier das 'Historische Festival von Diósgyőr' mit hunderten Teilnehmern statt.",
      "Die Burg ist direkt mit der Straßenbahn vom Stadtzentrum in Miskolc aus erreichbar."
      ],
      hu: ["Nagy Lajos király itt írta alá a velencei háborút lezáró turini békét 1381-ben.", "A vár hagyományosan hat magyar királyné birtoka és kedvelt pihenőhelye volt.", "A török idők után romba dőlt, és köveit a környékbeliek építkezésekhez hordták el.", "Lovagterme átadásakor Közép-Európa egyik legnagyobb és legdíszesebb ilyen tere volt.", "A várban az ország egyik legnagyobb panoptikuma látható középkori jelenetekkel.", "A négy hatalmas saroktorony a diósgyőri várarchitektúra legfőbb jellegzetessége.", "Minden év májusában megrendezik itt a Diósgyőri Történelmi Fesztivált.", "A vár Miskolc belvárosából közvetlen villamosjárattal is megközelíthető."],
      ro: ["Pacea de la Torino a fost semnată aici în anul 1381.", "Cetatea avea în secolul al XIV-lea cea mai mare sală de banchete din Europa Centrală.", "După 1526, cetatea a fost transformată într-o fortăreață de frontieră modernă.", "Șanțul de apărare care înconjura cetatea avea o lățime de 17 metri.", "În interior funcționează o expoziție cu figuri de ceară în mărime naturală.", "Arheologii au descoperit aici obiecte de lux provenite din Veneția și Orient."],
      en: []
    },
  },
  {
    id: "animal-habitat-miskolci-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-BZ",
    coords: [20.645, 48.118],
    name: { de: "Zoo Miskolc", hu: "Miskolci Állatkert", ro: "Grădina Zoologică din Miskolc", en: "Miskolc Zoo" },
    description: {
      de: "Der älteste Zoo Ungarns in einem Waldgebiet, bekannt als 'Kulturpark'.",
      hu: "Magyarország legrégebbi erdőben épült állatkertje, vadasparki környezetben.",
      ro: "Cea mai veche grădină zoologică din Ungaria situată în pădure.",
      en: "Hungary's oldest forest-based zoo, set in a natural wildlife park environment."
    },
    facts: {
      de: ["Im Bükk-Nationalpark.", "Fokus auf Naturschutz."],
      hu: ["A Bükki Nemzeti Parkban.", "Természetvédelemre fókuszál."],
      ro: ["În Parcul Național Bükk.", "Focus pe conservare."],
      en: ["Located in Bükk National Park.", "Focuses on nature conservation."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Miskolc ist der älteste Zoologische Garten in der ungarischen Provinz und liegt eingebettet in die wunderschöne Waldlandschaft des Bükk-Nationalparks. Ursprünglich als Wildpark gegründet, hat er sich zu einer modernen Einrichtung entwickelt, die einen starken Fokus auf den Schutz der heimischen Fauna und gefährdeter Bergtiere legt. Die Gehege sind harmonisch in den natürlichen Buchenwald integriert, was den Besuch besonders an heißen Sommertagen sehr angenehm macht. Neben den typischen europäischen Tieren wie Braunbären, Wölfen und Luchsen beherbergt der Zoo auch exotische Arten wie Tiger und Leoparden. Ein besonderes Anliegen des Zoos ist die Umweltbildung; ein Lehrpfad informiert über die Ökologie des Bükk-Gebirges. Die ruhige Atmosphäre und die naturnahe Gestaltung machen den Zoo Miskolc zu einem beliebten Ziel für Wanderer und Familien, die Tiere ohne künstliche Barrieren und in einer echten Waldumgebung erleben möchten.",
      hu: "A Miskolci Állatkert Magyarország legrégebbi vidéki állatkertje, amely a Bükki Nemzeti Park kapujában, vadasparki környezetben található. Az intézmény különleges értéke, hogy kifutói harmonikusan illeszkednek a természetes bükkerdőbe, így a látogatók valódi erdei hangulatban sétálhatnak az állatok között. Kiemelt figyelmet fordítanak a hazai fauna és a veszélyeztetett hegyvidéki állatok védelmére. Az európai medvék, farkasok és hiúzok mellett egzotikus ragadozók, mint a szibériai tigris is megcsodálhatók. A park oktatási központja és tanösvényei a Bükk ökológiáját mutatják be a gyerekeknek. A csendes, árnyas környezet és a Lillafüred közelsége miatt az állatkert az egyik legkedveltebb kirándulóhely Észak-Magyarországon.",
      ro: "Grădina Zoologică din Miskolc, situată în valea pitorească Csanyik din Munții Bükk, este cea mai veche grădină zoologică din Ungaria care funcționează într-un cadru forestier natural. Deschisă în 1983, aceasta se concentrează pe conservarea speciilor native din Carpați, dar adăpostește și animale exotice de pe toate continentele. Designul parcului permite vizitatorilor să se plimbe prin pădure în timp ce observă animalele în spații care imită habitatele lor naturale. Grădina este implicată activ în programe de salvare a faunei rănite și în educația tinerilor despre importanța pădurilor europene. Este o destinație perfectă pentru cei care doresc să combine educația despre animale cu o drumeție montană. Științele Naturii K5 – Ecosistemul de pădure.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde 1983 offiziell eröffnet und trug lange Zeit den Namen 'Kulturpark von Miskolc'.",
      "Er beherbergt über 120 verschiedene Tierarten aus fünf Kontinenten.",
      "Ein besonderes Highlight ist die Sammlung seltener ungarischer Haustierrassen.",
      "Der Zoo liegt direkt neben dem malerischen Stadtteil Lillafüred, was ihn ideal für einen Tagesausflug macht.",
      "Miskolc Zoo nimmt am internationalen Projekt zur Erhaltung des europäischen Ziesel-Bestandes teil.",
      "Der Zoo verfügt über ein modernes Bildungszentrum, in dem Naturkundekurse für Kinder stattfinden.",
      "Viele Gehege nutzen natürliche Felsformationen des Bükk-Gebirges als Begrenzung.",
      "Der Zoo ist das ganze Jahr über geöffnet und zeigt im Winter besonders die aktiven nordischen Tierarten."
      ],
      hu: ["1983-ban nyílt meg hivatalosan, sokáig Miskolci Kultúrpark néven ismerték.", "Több mint 120 állatfajt mutat be öt földrész állatvilágából.", "Különlegessége az őshonos magyar háziállatfajták gazdag gyűjteménye.", "A park közvetlenül a festői Lillafüred mellett fekszik, remek kirándulási célpont.", "Aktívan részt vesznek az európai ürgeállomány védelmét szolgáló projektekben.", "Sok kifutó természetes sziklaformációkat használ fel határolóelemként.", "Az állatkert egész évben nyitva tart, télen a havas táj különleges látványt nyújt.", "A bemutatók során a gondozók interaktív módon mesélnek az állatok életmódjáról."],
      ro: ["Grădina zoologică găzduiește peste 120 de specii și aproximativ 700 de animale.", "Este situată pe o suprafață de 21 de hectare în inima pădurii.", "Aici trăiește cea mai mare haită de lupi din grădinile zoologice maghiare.", "Parcul include un 'drum al urșilor' unde vizitatorii pot vedea urșii bruni.", "Există un program special de conservare pentru acvila de munte.", "Clădirea de recepție este construită în stil tradițional din bârne de lemn."],
      en: []
    },
  },
  {
    id: "industry-tiszaujvarosi-vegyimuvek-extra",
    type: "industry",
    parent: "HU-BZ",
    coords: [21.036, 47.931],
    name: { de: "Chemiewerk Tiszaújváros", hu: "Tiszaújvárosi Vegyi Kombinát", ro: "Combinatul Chimic Tiszaújváros", en: "Tiszaujvaros Chemical Plant" },
    description: {
      de: "Eines der größten Chemieunternehmen in Mitteleuropa, spezialisiert auf Kunststoffe.",
      hu: "Közép-Európa egyik legnagyobb vegyipari vállalata, műanyaggyártásra szakosodva.",
      ro: "Una dintre cele mai mari companii chimice din Europa Centrală, specializată în mase plastice.",
      en: "One of Central Europe's largest chemical companies, specializing in plastics production."
    },
    facts: {
      de: ["Teil der MOL-Gruppe.", "Wichtiger Exporteur."],
      hu: ["A MOL-csoport tagja.", "Meghatározó exportőr."],
      ro: ["Parte a grupului MOL.", "Exportator major."],
      en: ["Part of the MOL Group.", "Major exporter for the region."]
    },
    descriptionAdvanced: {
      de: "Das Chemiewerk in Tiszaújváros ist einer der größten und bedeutendsten Industriekomplexe in Mitteleuropa und das Herzstück der ungarischen Petrochemie. Strategisch günstig an der Einmündung der Sajó in die Theiß gelegen, produziert das Werk eine breite Palette an Grundstoffen für die Kunststoffindustrie, wie Polyethylen und Polypropylen. Die Anlage ist Teil der internationalen MOL-Gruppe und spielt eine entscheidende Rolle in der Wertschöpfungskette von Öl und Gas. Tiszaújváros selbst wurde in den 1950er Jahren als Planstadt speziell für die Mitarbeiter dieses Industriestandortes gegründet. In den letzten Jahren wurden Milliarden in moderne, umweltfreundlichere Technologien investiert, darunter eine riesige neue Polyol-Anlage, die zu den modernsten weltweit gehört. Das Werk ist ein globaler Exporteur und beliefert Industrien von der Automobilbranche bis hin zur Verpackungsherstellung, was es zu einem unverzichtbaren Motor für das ungarische Wirtschaftswachstum macht.",
      hu: "A Tiszaújvárosi Vegyi Kombinát (ma MOL Petrolkémia) Közép-Európa egyik legnagyobb és legfontosabb vegyipari komplexuma. A Sajó és a Tisza találkozásánál fekvő üzem a magyar petrolkémiai ipar fellegvára, ahol a műanyaggyártáshoz szükséges alapanyagokat, például polietilént és polipropilént állítanak elő. Tiszaújváros maga is ezen ipar köré épült tervezett városként az 1950-es években. Az utóbbi években hatalmas beruházások révén a gyár a világ egyik legmodernebb poliol-üzemével bővült, biztosítva a versenyképességet a globális piacon. Az üzem meghatározó szerepet játszik a MOL-csoport értékláncában és az ország exportteljesítményében, miközben több ezer embernek ad munkát, motorja lévén az észak-magyarországi régió gazdasági fejlődésének.",
      ro: "Combinatul Chimic din Tiszaújváros (în prezent parte a grupului MOL) este gigantul industriei petrochimice maghiare, având o importanță strategică pentru întreaga regiune a Europei Centrale. Fondat în anii 1950 sub numele de TVK, combinatul transformă hidrocarburile în polimeri esențiali pentru producția de plastice utilizate în medicină, auto și ambalaje. Orașul Tiszaújváros a fost construit practic în jurul acestei facilități industriale gigantice, devenind un model de urbanizare industrială. Tehnologiile moderne implementate recent pun accent pe economia circulară și pe producția de materiale sustenabile. Este un simbol al transformării industriale postbelice a Ungariei. Geografie K8 – Industria chimică și polimerii.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Werk wurde ursprünglich unter dem Namen 'Tisza Vegyi Kombinát' (TVK) in den 1950er Jahren gegründet.",
      "Tiszaújváros hieß früher 'Leninváros' und war ein Musterbeispiel für die sozialistische Stadtplanung um ein Industriezentrum.",
      "Die neue Polyol-Anlage ist die größte Einzelinvestition in der Geschichte der ungarischen Industrie (über 1,2 Mrd. Euro).",
      "Das Werk ist über Pipelines direkt mit den Raffinerien der Region verbunden.",
      "Sicherheit und Umweltschutz haben oberste Priorität, weshalb das Werk über eine eigene, hochspezialisierte Feuerwehr verfügt.",
      "Mehrere tausend Menschen aus der gesamten Region Nordungarn finden hier ihren Arbeitsplatz.",
      "Die Produkte aus Tiszaújváros finden sich in fast allen Alltagsgegenständen aus Kunststoff in ganz Europa wieder.",
      "Das Werk ist ein Vorreiter in der Forschung für recycelbare Kunststoffe und nachhaltige Chemieprozesse."
      ],
      hu: ["Az üzemet eredetileg TVK (Tisza Vegyi Kombinát) néven alapították az 1950-es években.", "Tiszaújváros korábbi neve Leninváros volt, mint az ipar köré épített szocialista mintaváros.", "A gyár termékei szinte mindenhol ott vannak: a csomagolóanyagoktól az autóalkatrészekig.", "A legújabb poliol-projekt az ország egyik legnagyobb ipari beruházása az utóbbi évtizedben.", "Az üzemnek saját tűzoltósága és környezetvédelmi figyelőrendszere van.", "A terület mérete egy kisebb városéval vetekszik, saját belső úthálózattal.", "Folyamatosan fejlesztik az újrahasznosított műanyagok felhasználását a gyártásban.", "A vegyiművek hűtővizét a Tiszából nyerik és szigorú tisztítás után juttatják vissza."],
      ro: ["Combinatul a fost înființat în anul 1953 ca întreprindere de stat.", "Unitatea produce anual peste 500.000 de tone de polietilenă și polipropilenă.", "În cadrul complexului a fost construită recent o fabrică de poliol de 1,2 miliarde euro.", "Turnurile de răcire ale combinatului sunt repere vizuale de la zeci de kilometri distanță.", "Peste 3.000 de specialiști lucrează pe platforma industrială din Tiszaújváros.", "MOL Petrochemicals este unul dintre primii 10 producători de polimeri din Europa."],
      en: []
    },
  },

  // HU-CS: Csongrád-Csanád (3G, 1LN, 1W)
  {
    id: "historical-szegedi-dom-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.149, 46.248],
    name: {de: "Votivkirche von Szeged", hu: "Szegedi Dóm", ro: "Catedrala din Szeged", en: "Votive Church of Szeged"},
    description: {
      de: "Ein imposantes neoromanisches Bauwerk, errichtet nach der großen Flut von 1879.",
      hu: "Impozáns neoromán épület, amelyet az 1879-es nagy árvíz után emeltek fogadalomból.",
      ro: "O clădire neoromanică impunătoare, ridicată ca urmare a marii inundații din 1879.",
      en: "An imposing Neo-Romanesque building, built after the great flood of 1879."
    },
    facts: {
      de: ["Zweithöchste Kirche Ungarns.", "Berühmte Freilichtspiele."],
      hu: ["Magyarország 4. legmagasabb temploma.", "Híres Szabadtéri Játékok helyszíne."],
      ro: ["A patra cea mai înaltă biserică din Ungaria.", "Locul celebrelor Jocuri în Aer Liber."],
      en: ["The 4th tallest church in Hungary.", "Venue for the famous Open-Air Festival."]
    },
    descriptionAdvanced: {
      de: "Die Votivkirche von Szeged, auch als Kathedrale Unserer Lieben Frau von Ungarn bekannt, ist eines der beeindruckendsten religiösen Bauwerke des Landes. Nach der verheerenden Flut von 1879 gelobten die Bürger von Szeged, eine prächtige Kirche zu errichten, falls ihre Stadt wiederaufgebaut würde. Der Bau im neoromanischen Stil begann 1913 und wurde 1930 abgeschlossen. Die markanten roten Backsteintürme ragen 81 Meter in den Himmel und prägen die Silhouette der Stadt. Der Dómplatz, der die Kirche umgibt, ist genau so groß wie der Markusplatz in Venedig und bietet eine einzigartige Akustik. Im Inneren beeindruckt die Kathedrale durch monumentale Fresken, eine gewaltige Orgel mit über 9.000 Pfeifen und die Statue der 'Madonna im Pelz'. Die Votivkirche ist nicht nur ein Ort des Gebets, sondern auch das Herzstück der berühmten Szegeder Freilichtspiele, die jeden Sommer tausende Besucher auf den Platz locken.",
      hu: "A Szegedi Dóm, hivatalos nevén Magyarok Nagyasszonya-székesegyház, az ország egyik legimpozánsabb egyházi épülete. Az 1879-es pusztító árvíz után a szegediek fogadalmat tettek: ha városuk újjáépül, monumentális templomot emelnek. A neoromán stílusú építkezés 1913-ban kezdődött és 1930-ban fejeződött be. Jellegzetes vörös téglafalai és 81 méter magas tornyai meghatározzák Szeged sziluettjét. A templomot övező Dóm tér pontosan akkora, mint a velencei Szent Márk tér, és kiváló akusztikával rendelkezik. Belső terét hatalmas freskók, egy több mint 9000 sípos orgona és a különleges 'szőrmés Madonna' szobor díszíti. A dóm nemcsak hitéleti központ, hanem a világhírű Szegedi Szabadtéri Játékok szíve is, amely minden nyáron ezreket vonz a térre.",
      ro: "Domul din Szeged, cunoscut oficial sub numele de Biserica Votivă, este simbolul inconfundabil al orașului și o dovadă a credinței locuitorilor după marea inundație din 1879. Construit din cărămidă roșie între anii 1913 și 1930, catedrala este a patra ca mărime din Ungaria, având două turnuri gemene de 81 de metri care domină peisajul. Stilul său arhitectural este o combinație eclectică de elemente neoromanice și neogotice. Piața catedralei, celebră pentru acustica sa perfectă, găzduiește în fiecare vară Festivalul de Teatru în Aer Liber, transformând spațiul într-o scenă culturală de talie mondială. Interiorul bisericii adăpostește una dintre cele mai mari orgi din Europa. Istorie K8 – Renașterea urbană a orașului Szeged.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Kirche wurde als Einlösung eines Gelübdes nach der großen Flut von 1879 erbaut.",
      "Mit ihren 81 Meter hohen Türmen ist sie eine der höchsten Kirchen Ungarns.",
      "Die Orgel der Kathedrale ist die drittgrößte in Europa und verfügt über 9.040 Pfeifen.",
      "Auf dem Dómplatz finden seit 1931 die berühmten Szegeder Freilichtspiele statt.",
      "Das Gebäude wurde aus Millionen von roten Ziegelsteinen im neoromanischen Stil errichtet.",
      "Im Inneren befindet sich ein Mosaik der Jungfrau Maria in traditioneller ungarischer Hirtenkleidung.",
      "Die Krypta der Kathedrale dient als letzte Ruhestätte für bedeutende Persönlichkeiten der Region.",
      "Das Glockenspiel der Kirche ist weithin über die Stadt Szeged zu hören."
      ],
      hu: ["A templom az 1879-es nagy szegedi árvíz után tett fogadalom beteljesítése.", "81 méteres tornyaival Magyarország 4. legmagasabb temploma.", "Orgonája Európa harmadik legnagyobbja, összesen 9040 síppal rendelkezik.", "A Dóm téren 1931 óta rendezik meg a Szegedi Szabadtéri Játékokat.", "Az épület több millió vörös téglából készült neoromán stílusban.", "Belsejében látható a Magyarok Nagyasszonya mozaik népviseletben.", "Kriptájában pihennek a város és az egyházmegye neves személyiségei.", "Harangjátéka rendszeresen felcsendül, dallamai messzire hallatszanak a városban."],
      ro: ["Piatra de temelie a fost pusă în 1913, dar construcția a fost oprită de Primul Război Mondial.", "Interiorul poate găzdui peste 5000 de persoane.", "Orga domului are 5 manuale și peste 9000 de tuburi sonore.", "Mozaicul 'Madona în cojoc' o înfățișează pe Fecioara Maria în costum popular local.", "Turnurile au o înălțime de 81 de metri și sunt vizibile de la mare distanță.", "Cripta domului găzduiește mormintele unor personalități maghiare celebre."],
      en: []
    },
  },
  {
    id: "historical-mora-ferenc-muzeum-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.152, 46.252],
    name: {de: "Móra Ferenc Museum", hu: "Móra Ferenc Múzeum", ro: "Muzeul Móra Ferenc", en: "Mora Ferenc Museum"},
    description: {
      de: "Ein bedeutendes Kulturzentrum in Szeged, benannt nach dem berühmten Schriftsteller.",
      hu: "Szeged jelentős kulturális központja, a híres íróról elnevezve.",
      ro: "Un centru cultural important din Szeged, numit după celebrul scriitor.",
      en: "A significant cultural center in Szeged, named after the famous writer."
    },
    facts: {
      de: ["Prachtvolles klassizistisches Gebäude.", "Direkt an der Theiß."],
      hu: ["Pompás klasszicista épület.", "Közvetlenül a Tisza-parton áll."],
      ro: ["Clădire clasicistă superbă.", "Chiar pe malul Tisei."],
      en: ["Magnificent Neoclassical building.", "Located right on the Tisza riverbank."]
    },
    descriptionAdvanced: {
      de: "Das Móra-Ferenc-Museum in Szeged ist ein bedeutendes kulturelles Zentrum und eines der meistbesuchten Museen in Südungarn. Das im imposanten klassizistischen Stil direkt am Ufer der Theiß errichtete Gebäude wurde 1896 zur Millenniumsfeier Ungarns eröffnet. Benannt ist es nach dem berühmten ungarischen Schriftsteller Ferenc Móra, der viele Jahre lang der Direktor des Museums war. Die Sammlungen umfassen ein breites Spektrum von Archäologie über Ethnografie bis hin zu Naturwissenschaften und Bildender Kunst. Besonders berühmt ist das Museum für seine wertvolle Goldfund-Sammlung der Hunnen und seine wechselnden internationalen Großausstellungen, die oft Schätze aus aller Welt zeigen. Die prachtvolle Fassade mit ihren korinthischen Säulen ist ein Wahrzeichen der Stadt. Besucher können hier tief in die Geschichte der ungarischen Tiefebene eintauchen und gleichzeitig moderne Kunstwerke bewundern, was das Museum zu einem unverzichtbaren Ziel für Kulturliebhaber in Szeged macht.",
      hu: "A szegedi Móra Ferenc Múzeum a dél-alföldi régió legjelentősebb kulturális központja és egyik leglátogatottabb múzeuma. Az impozáns klasszicista épület közvetlenül a Tisza partján áll, és 1896-ban, a millenniumi ünnepségek alkalmából nyílt meg. Nevét a híres magyar íróról, Móra Ferencről kapta, aki hosszú évekig az intézmény igazgatója volt. Gyűjteményei felölelik a régészetet, a néprajzot, a természettudományokat és a képzőművészetet is. Különösen híres hun-kori aranyleleteiről és nagyszabású időszaki kiállításairól, amelyek gyakran világritkaságokat mutatnak be. A múzeum főlépcsője a szegediek kedvelt találkozóhelye. A látogatók itt mélyen elmerülhetnek az Alföld történelmében és természeti kincseiben.",
      ro: "Muzeul Móra Ferenc din Szeged este cea mai importantă instituție culturală din sudul Ungariei, fiind situat într-o clădire neoclasică impunătoare pe malul Tisei. Denumit după celebrul scriitor și arheolog maghiar care a fost directorul instituției, muzeul adăpostește colecții vaste de etnografie, istorie naturală și artă plastică. Una dintre principalele atracții este expoziția dedicată tezaurului de aur al hunilor, descoperit în regiune. Muzeul organizează regulat expoziții internaționale de mare succes, precum cele dedicate Egiptului Antic sau dinozaurilor. Este un centru de cercetare activ care păstrează și promovează moștenirea culturală a regiunii Csongrád. Istorie K7 – Arheologie și patrimoniu cultural.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Museum wurde 1896 als Teil der nationalen Millenniumsfeierlichkeiten eröffnet.",
      "Das Gebäude wurde im Stil des Neoklassizismus von den Architekten Adolf Voyta entworfen.",
      "Der namensgebende Schriftsteller Ferenc Móra leitete das Museum von 1917 bis 1934.",
      "Eine der bedeutendsten Sammlungen des Hauses umfasst archäologische Funde der Awaren und Hunnen.",
      "Die ethnografische Abteilung zeigt das traditionelle Leben der Fischer und Handwerker an der Theiß.",
      "Das Museum beherbergt eine wertvolle Gemäldegalerie mit Werken ungarischer Meister.",
      "Die Freitreppe des Museums ist ein beliebter Treffpunkt und bietet einen Blick auf die Theiß.",
      "Regelmäßig finden hier internationale Wanderausstellungen zu Themen wie Ägypten oder Pompeji statt."
      ],
      hu: ["A múzeumot 1896-ban adták át a város és a nemzet közművelődésének.", "Épületét Voyta Adolf tervezte monumentális klasszicista stílusban.", "Móra Ferenc író 1917 és 1934 között vezette az intézményt.", "Egyik legértékesebb része az avar és hun régészeti gyűjtemény.", "Néprajzi osztálya a tiszai halászok és iparosok életét mutatja be.", "A múzeum képtára neves magyar festők alkotásait őrzi.", "A Tisza-parti korzó egyik meghatározó látványossága a múzeum homlokzata.", "Rendszeresen ad otthont nemzetközi vándorkiállításoknak (pl. Egyiptom, Pompeji)."],
      ro: ["Muzeul a fost fondat în 1883, imediat după reconstrucția orașului.", "Clădirea actuală, 'Palatul Culturii', a fost finalizată în 1896.", "Móra Ferenc a condus instituția între anii 1917 și 1934.", "Colecția muzeului depășește 1,2 milioane de obiecte de patrimoniu.", "Expoziția 'Aurul Avarilor' este una dintre cele mai valoroase din Europa Centrală.", "Scările muzeului sunt un loc de întâlnire popular pentru locuitorii din Szeged."],
      en: []
    },
  },
  {
    id: "historical-csongradi-ovaros-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.144, 46.713],
    name: {de: "Altstadt von Csongrád", hu: "Csongrádi Óváros", ro: "Centrul Vechi Csongrád", en: "Csongrad Old Town"},
    description: {
      de: "Ein Denkmalensemble mit reetgedeckten Fischerhäusern an der Theiß.",
      hu: "Nádtetős halászházakból álló műemléki együttes a Tisza partján.",
      ro: "Un ansamblu istoric de case pescărești cu acoperiș de stuf pe malul Tisei.",
      en: "A historic ensemble of thatched-roof fisherman cottages on the Tisza banks."
    },
    facts: {
      de: ["Besondere Atmosphäre.", "Lebendiges Freilichtmuseum."],
      hu: ["Különleges hangulatot áraszt.", "Élő skanzenként működik."],
      ro: ["Atmosferă deosebită.", "Funcționează ca un muzeu viu."],
      en: ["Unique atmosphere.", "Functions as a living open-air museum."]
    },
    descriptionAdvanced: {
      de: "Die Altstadt von Csongrád, oft auch als 'Stamm' (Belsőváros) bezeichnet, ist ein einzigartiges architektonisches Juwel an der Theiß. Dieses historische Viertel besteht aus einer Gruppe von gut erhaltenen, traditionellen Fischerhäusern mit reetgedeckten Dächern und strahlend weißen Wänden. Es ist eines der wenigen Beispiele für eine geschlossene dörfliche Siedlungsstruktur, die inmitten einer modernen Stadt erhalten geblieben ist. Die engen Gassen und die malerische Umgebung vermitteln den Besuchern das Gefühl, in die Zeit des 18. und 19. Jahrhunderts zurückversetzt zu sein. Viele der Häuser werden heute als Museen, Kunsthandwerkswerkstätten oder Gästehäuser genutzt, was der Altstadt ein lebendiges und authentisches Flair verleiht. Die unmittelbare Nähe zum Fluss prägt den Charakter des Viertels und erinnert an die jahrhundertelange Bedeutung der Fischerei für die Bewohner. Ein Spaziergang durch die Altstadt bietet Ruhe und Inspiration und ist ein Muss für jeden, der die traditionelle ungarische Volksarchitektur hautnah erleben möchte.",
      hu: "A csongrádi óváros, vagy ahogy a helyiek hívják, a 'Belsőváros', egyedülálló építészeti kincs a Tisza mentén. Ez a történelmi negyed nádtetős, hófehér falú halászházakból áll, amelyek hűen őrizik a 18-19. századi népi építészet emlékeit. Ez az egyik legépebben maradt zárt, falusias településszerkezet Magyarországon, amely egy modern város szívében maradt fenn. A szűk utcák és a virágos kertek a múltba repítik a látogatót, felidézve a tiszai hajósok és halászok életmódját. Számos ház ma múzeumként, kézműves műhelyként vagy vendégházként működik, így a negyed élő és lüktető része a városnak. A folyó közelsége és a házak között uralkodó csend különleges, idilli hangulatot áraszt.",
      ro: "Orașul vechi din Csongrád este un monument etnografic viu, fiind format dintr-un ansamblu unic de case tradiționale pescărești cu acoperiș de stuf, situate pe malul înalt al Tisei. Acest cartier istoric, cunoscut sub numele de 'Belváros', păstrează atmosfera satelor de pe malul râului de acum două secole. Casele varuite în alb, cu grinzi de lemn și grădini pline de flori, sunt locuite și astăzi, unele funcționând ca ateliere pentru meșteșugari sau case de vacanță. Este singura așezare din Ungaria unde o întreagă zonă urbană veche a fost declarată rezervație arhitecturală națională. Plimbarea pe străzile înguste oferă o liniște rară și o incursiune în viața tradițională a pescarilor. Istorie K5 – Arhitectura populară maghiară.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Altstadt von Csongrád steht seit den 1970er Jahren unter nationalem Denkmalschutz.",
      "Das Viertel besteht aus 37 denkmalgeschützten Gebäuden in traditioneller Bauweise.",
      "Die Häuser sind typische Beispiele für die Volksarchitektur der Region mit Schilfdächern.",
      "Ursprünglich war dieses Gebiet die Siedlung der Fischer, Schiffer und Handwerker.",
      "Heute dient die Altstadt als lebendiges Freilichtmuseum und Künstlerkolonie.",
      "Die weißen Wände und die blauen Fensterrahmen sind charakteristisch für diesen Baustil.",
      "Jährlich finden in der Altstadt traditionelle Weinfeste und Handwerksmärkte statt.",
      "Besucher können in einigen der historischen Häuser übernachten und das alte Lebensgefühl erfahren."
      ],
      hu: ["A csongrádi óváros az 1970-es évek óta országos műemléki védelem alatt áll.", "A negyed 37 védett épületből áll, melyek hagyományos technikával épültek.", "A házak jellemzője a vastag vályogfal és a meredek nádtető.", "Eredetileg a halászok, kubikosok és hajósok lakták ezt a területet.", "Ma élő skanzenként és művésztelepként is funkcionál a városrész.", "A fehérre meszelt falak és a kék ablakkeretek a helyi stílus védjegyei.", "Évente tartanak itt hagyományőrző borfesztiválokat és kézműves vásárokat.", "A látogatóknak lehetőségük van megszállni is a patinás házak némelyikében."],
      ro: ["Zona cuprinde 37 de case tradiționale protejate prin lege ca monumente istorice.", "Cele mai vechi clădiri datează de la sfârșitul secolului al XVIII-lea.", "Acoperișurile sunt realizate din stuf recoltat direct din mlaștinile Tisei.", "Fiecare casă are o structură tipică cu trei camere: tindă, cameră curată și cămară.", "Csongrád a fost un important centru de construcție a bărcilor din lemn.", "Cartierul a supraviețuit miraculos tuturor marilor inundații ale râului Tisa."],
      en: []
    },
  },
  {
    id: "animal-habitat-szegedi-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-CS",
    coords: [20.117, 46.252],
    name: {de: "Zoo Szeged", hu: "Szegedi Vadaspark", ro: "Grădina Zoologică din Szeged", en: "Szeged Zoo"},
    description: {
      de: "Der flächenmäßig größte Zoo Ungarns, spezialisiert auf seltene Tierarten.",
      hu: "Magyarország legnagyobb területű állatkertje, ritka fajok tartására szakosodva.",
      ro: "Cea mai mare grădină zoologică din Ungaria ca suprafață, specializată pe specii rare.",
      en: "Hungary's largest zoo by territory, specializing in rare animal species."
    },
    facts: {
      de: ["Große natürliche Gehege.", "Fokus auf Naturschutz."],
      hu: ["Tágas, természetes kifutók.", "Természetvédelemre fókuszál."],
      ro: ["Țarcuri naturale vaste.", "Focus pe conservare."],
      en: ["Large natural enclosures.", "Focuses on conservation programs."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Szeged, auch als Wildpark bekannt, ist flächenmäßig die größte zoologische Einrichtung in Ungarn und besticht durch seine weitläufigen, naturnahen Gehege. Er liegt in einem wunderschönen Waldgebiet am Rande der Stadt und hat sich auf die Haltung seltener und gefährdeter Tierarten spezialisiert. Ein besonderer Schwerpunkt liegt auf den Tieren Südamerikas, doch finden sich hier Bewohner aus allen Kontinenten. Der Zoo ist bekannt für seine erfolgreichen Erhaltungszuchtprogramme und seine modernen Bildungsansätze. Besucher können auf schattigen Waldwegen wandern und dabei Tiere wie Schneeleoparden, Ameisenbären und Gibbons beobachten. Großen Wert legt der Zoo auf den Schutz der Biodiversität und bietet zahlreiche interaktive Stationen, die insbesondere Kindern den Wert der Natur vermitteln. Die großzügige Gestaltung der Anlage sorgt dafür, dass sich die Tiere in einer Umgebung wohlfühlen, die ihrem natürlichen Lebensraum so nahe wie möglich kommt, was den Zoo zu einem der attraktivsten Ausflugsziele in der Region macht.",
      hu: "A Szegedi Vadaspark Magyarország legnagyobb területű állatkertje, amely tágas, természetközeli kifutóival tűnik ki. A város szélén elterülő gyönyörű erdőben fekszik, és fő célkitűzése a ritka, veszélyeztetett fajok bemutatása és védelme. Különösen erős a dél-amerikai fauna bemutatásában, de minden földrész képviselteti magát. A vadaspark híres sikeres fajmegmentési programjairól és modern pedagógiai szemléletéről. A látogatók árnyas erdei utakon sétálva figyelhetik meg az állatokat, többek között hópárducokat, sörényes farkasokat és különleges majomfajokat. Az intézmény nagy hangsúlyt fektet a biodiverzitás megőrzésére és az interaktív ismeretterjesztésre, ami a régió egyik legvonzóbb kirándulóhelyévé teszi.",
      ro: "Grădina Zoologică din Szeged (Vadaspark) este cea mai mare grădină zoologică din Ungaria din punct de vedere al suprafeței, fiind renumită pentru spațiile sale vaste și naturale. Situată într-o pădure de stejari de la marginea orașului, grădina se specializează în conservarea speciilor rare și pe cale de dispariție, participând la numeroase programe europene de reproducere. Vizitatorii pot vedea animale grupate pe continente, cu un accent deosebit pe fauna din America de Sud și Asia. Grădina zoologică oferă un mediu relaxant și educativ, având secțiuni dedicate animalelor nocturne și un centru modern pentru prezentarea pinguinilor. Este un lider național în educația pentru mediu. Științele Naturii K6 – Biodiversitatea globală.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo Szeged wurde 1989 eröffnet und ist damit einer der jüngsten Zoos in Ungarn.",
      "Mit einer Fläche von rund 45 Hektar ist er der größte Zoo des Landes.",
      "Der Zoo ist in geografische Zonen unterteilt, die die Flora und Fauna der Kontinente widerspiegeln.",
      "Er beherbergt seltene Arten wie den Mähnenwolf, den Riesenotter und den Roten Vari.",
      "Der Zoo nimmt an zahlreichen internationalen Zuchtprogrammen (EEP) für bedrohte Tierarten teil.",
      "Ein besonderes Highlight ist das moderne Elefantenhaus, das 2018 eingeweiht wurde.",
      "Auf dem Gelände befindet sich auch eine Rettungsstation für verletzte heimische Wildtiere.",
      "Der Zoo bietet spezielle pädagogische Programme für Schulen und Kindergartengruppen an."
      ],
      hu: ["A Szegedi Vadaspark 1989-ben nyílt meg, így az egyik legfiatalabb hazai állatkert.", "Mintegy 45 hektáros területével ez az ország legnagyobb állatkertje.", "Földrészenként csoportosítva mutatja be az állatvilágot és a növényzetet.", "Olyan ritka fajok élnek itt, mint az óriásvidra, a ködfoltos párduc és a vörös vari.", "Számos nemzetközi fajmegmentési programban (EEP) vesznek részt aktívan.", "Egyik büszkesége a 2018-ban átadott modern Elefántház.", "A park területén mentőállomás is működik sérült hazai vadállatok számára.", "Különleges oktatóprogramokat kínálnak iskolás és óvodás csoportoknak."],
      ro: ["Grădina se întinde pe o suprafață de 45 de hectare de pădure naturală.", "Aici trăiesc specii extrem de rare precum leopardul de zăpadă și tamarinul leul de aur.", "Parcul a fost deschis oficial în anul 1989.", "Grădina deține cel mai modern centru de salvare a animalelor sălbatice din sudul țării.", "Pinguinii din Szeged locuiesc într-un bazin spectaculos cu vedere subacvatică.", "Anual sunt organizate 'Nopți la Zoo' pentru observarea animalelor nocturne."],
      en: []
    },
  },
  {
    id: "industry-szegedi-paprika-extra",
    type: "industry",
    parent: "HU-CS",
    coords: [20.14, 46.23],
    name: {de: "Paprikafabrik Szeged", hu: "Szegedi Paprikafeldolgozó", ro: "Fabrica de Paprika din Szeged", en: "Szeged Paprika Processing"},
    description: {
      de: "Szeged ist weltweit bekannt für sein Paprikapulver, das 'rote Gold' Ungarns.",
      hu: "Szeged világszerte ismert a fűszerpaprikájáról, a magyar 'vörös aranyról'.",
      ro: "Szeged este cunoscut în întreaga lume pentru paprika, 'aurul roșu' al Ungariei.",
      en: "Szeged is world-famous for its spice paprika, the 'red gold' of Hungary."
    },
    facts: {
      de: ["Hungaricum-Produkt.", "Hunderte Jahre Tradition."],
      hu: ["Hungarikum termék.", "Több száz éves hagyomány."],
      ro: ["Produs Hungaricum.", "Tradiție de sute de ai."],
      en: ["A certified Hungaricum.", "Centuries of tradition."]
    },
    descriptionAdvanced: {
      de: "Die Paprikaverarbeitung in Szeged ist ein bedeutender Pfeiler der ungarischen Lebensmittelindustrie und ein Symbol für die kulinarische Identität des Landes. Die Region um Szeged bietet ideale klimatische Bedingungen für den Anbau von Gewürzpaprika, der hier als 'rotes Gold' bezeichnet wird. Die Tradition reicht bis in das 18. Jahrhundert zurück, als der Paprika zunächst als Zierpflanze und später als unverzichtbares Gewürz Einzug hielt. In den modernen Verarbeitungsbetrieben wird der Paprika nach strengen Verfahren getrocknet und zu feinem Pulver gemahlen, wobei die charakteristische Farbe und das Aroma erhalten bleiben. Der Szegeder Paprika ist weltweit für seine außergewöhnliche Qualität bekannt und besitzt eine geschützte Ursprungsbezeichnung. Die Fabrik ist nicht nur ein Produktionsstandort, sondern auch ein Bewahrer von Traditionen, die seit Generationen vom Vater auf den Sohn übertragen werden. Das hier hergestellte Paprikapulver ist die Seele vieler ungarischer Nationalgerichte wie Gulasch und Pörkölt.",
      hu: "A szegedi paprikafeldolgozás a magyar élelmiszeripar egyik legfontosabb bázisa és a nemzeti gasztronómia szimbóluma. Szeged környéke ideális éghajlati feltételeket biztosít a fűszerpaprika termesztéséhez, amelyet méltán neveznek 'vörös aranynak'. A hagyomány a 18. századig nyúlik vissza, és a modern üzemekben ma is szigorú eljárásokkal készül a finom őrlemény. A szegedi paprika világszerte elismert kiváló minőségéről és eredetvédett termékként képviseli Magyarországot. A gyár nemcsak termelési helyszín, hanem a generációról generációra szálló tudás őrzője is. Az itt készült paprikapor adja a lelkét a leghíresebb magyar ételeknek, mint a halászlének vagy a pörköltnek.",
      ro: "Industria ardeiului din Szeged este coloana vertebrală a gastronomiei maghiare, acest 'aur roșu' fiind exportat și apreciat în întreaga lume. Regiunea beneficiază de cel mai mare număr de ore de soare din Ungaria, condiția ideală pentru cultivarea ardeiului cu un conținut ridicat de zahăr și pigmenți naturali. Fabrica de prelucrare din Szeged transformă fructele recoltate manual în pudră fină, respectând procese tradiționale de uscare și măcinare la moară de piatră. Paprika de Szeged are statutul de denumire de origine protejată (DOP) în Uniunea Europeană, garantând calitatea și autenticitatea produsului. Muzeul Pick și al Ardeiului din oraș oferă o incursiune fascinantă în această istorie picantă. Geografie K8 – Agricultură specializată și mărci naționale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Paprikaanbau in der Region Szeged begann bereits im frühen 18. Jahrhundert.",
      "Szegeder Paprika ist seit 2010 ein offiziell anerkanntes 'Hungarikum' und gesetzlich geschützt.",
      "Die Früchte werden traditionell im Spätsommer geerntet und früher an den Wänden der Häuser getrocknet.",
      "Es gibt verschiedene Qualitätsstufen, von 'Edelsüß' bis hin zu 'Scharf'.",
      "Die charakteristische rote Farbe verdankt das Pulver dem hohen Gehalt an natürlichen Farbstoffen (Carotinoiden).",
      "In Szeged gibt es ein eigenes Paprika-Museum, das die Geschichte des Anbaus und der Verarbeitung zeigt.",
      "Ungarischer Paprika enthält von Natur aus einen hohen Anteil an Vitamin C, was bereits Albert Szent-Györgyi entdeckte.",
      "Das Paprikapulver wird in over 50 Länder weltweit exportiert und steht für ungarische Qualität."
      ],
      hu: ["A paprika termesztése a 18. század elején honosodott meg a szegedi tájon.", "A szegedi fűszerpaprika-őrlemény 2010 óta hivatalos Hungarikum.", "A termést hagyományosan nyár végén takarítják be és szárítják ki.", "Több minőségi kategória létezik a csemege édestől a csípősig.", "Jellegzetes színét a magas természetes festékanyag-tartalmának köszönheti.", "Szegeden Paprika Múzeum is látogatható, amely a termesztés történetét mutatja be.", "A paprika kiemelkedően magas C-vitamin tartalmát Szent-Györgyi Albert itt fedezte fel.", "A világ több mint 50 országába exportálják, garantálva a magyar minőséget."],
      ro: ["Ardeiul a fost adus în Ungaria în secolul al XVI-lea de către turci.", "Pudra de ardei de Szeged a obținut protecția DOP în anul 2010.", "Există 8 categorii de calitate, de la 'delicatesă' la 'iute'.", "Ardeiul de Szeged este extrem de bogat în vitamina C, fapt descoperit de Albert Szent-Györgyi.", "Se recoltează anual mii de tone de ardei din satele din jurul orașului.", "Culoarea roșie intensă provine din uscarea naturală sub soarele puternic al Câmpiei de Sud."],
      en: []
    },
  },
  {
    id: "historical-bory-var-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.455, 47.202],
    name: {de: "Bory-Burg", hu: "Bory-vár", ro: "Cetatea Bory", en: "Bory Castle"},
    description: {
      de: "Eine von Jenő Bory im 20. Jahrhundert eigenhändig errichtete Betonburg in Székesfehérvár.",
      hu: "Bory Jenő által a 20. században saját kezűleg épített betonvár Székesfehérváron.",
      ro: "O cetate de beton construită manual de Jenő Bory în secolul XX, în Székesfehérvár.",
      en: "A concrete castle built single-handedly by Jenő Bory in the 20th century in Székesfehérvár."
    },
    facts: {
      de: ["Denkmal der ewigen Liebe.", "Hunderte Skulpturen."],
      hu: ["Az örök szerelem emlékműve.", "Százszámra láthatók itt szobrok."],
      ro: ["Monument al iubirii eterne.", "Sute de sculpturi expuse."],
      en: ["Monument to eternal love.", "Features hundreds of sculptures."]
    },
    descriptionAdvanced: {
      de: "Die Bory-Burg in Székesfehérvár ist ein einzigartiges architektonisches Kunstwerk und ein Denkmal der ewigen Liebe. Der Architekt und Bildhauer Jenő Bory errichtete dieses märchenhafte Schloss über einen Zeitraum von 40 Jahren fast im Alleingang. Das Besondere an der Konstruktion ist die frühe und innovative Verwendung von Beton, aus dem nicht nur die Mauern, sondern auch hunderte von Statuen und dekorativen Elementen geformt wurden. Die Burg ist ein Labyrinth aus Türmen, Arkaden, Innenhöfen und Galerien, die mit Kunstwerken von Bory und seiner Frau, der Malerin Ilona Komócsin, geschmückt sind. Jede Ecke des Gebäudes erzählt eine Geschichte und spiegelt die künstlerische Vision seines Schöpfers wider. Die Anlage ist nicht nur ein Wohnhaus und Atelier, sondern ein Gesamtkunstwerk, das verschiedene Baustile von der Romanik bis zur Renaissance vereint. Heute ist die Bory-Burg eines der romantischsten Ziele in Ungarn und fasziniert Besucher durch ihre fantastische Atmosphäre und die Liebe zum Detail.",
      hu: "A székesfehérvári Bory-vár egyedülálló építészeti alkotás és az örök szerelem monumentális emlékműve. Bory Jenő építész és szobrászművész negyven éven át, szinte saját kezűleg emelte ezt a mesebeli várat. A szerkezet különlegessége a beton korai és művészi alkalmazása: nemcsak a falak, hanem a szobrok és díszítőelemek százai is ebből az anyagból készültek. A vár tornyok, árkádos udvarok és galériák labirintusa, melyeket Bory és festőművész felesége, Komócsin Ilona alkotásai díszítenek. Minden szeglete egy-egy történetet mesél, tükrözve az alkotó vízióját és a felesége iránti tiszteletét. Az épületegyüttes a romantika, a gótika és a reneszánsz stílusjegyeit ötvözi, mára Székesfehérvár egyik legvonzóbb látványossága lett.",
      ro: "Castelul Bory din Székesfehérvár este un monument unic al iubirii și perseverenței, fiind construit aproape de unul singur de către sculptorul și arhitectul Jenő Bory pe parcursul a 40 de ani. Această structură eclectică, realizată în mare parte din beton experimental, combină elemente romantice, gotice și renascentiste într-un ansamblu artistic fascinant. Castelul este decorat cu sute de sculpturi și picturi realizate de Bory și soția sa, artista Ilona Komócsin. Grădinile pline de statui, turnurile spiralate și galeriile de arcade creează o atmosferă de basm care atrage mii de vizitatori anual. Este considerat cel mai mare edificiu din lume construit de o singură persoană. Istorie K8 – Arta și arhitectura secolului XX.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Jenő Bory baute die Burg zwischen 1923 und 1959 fast ohne fremde Hilfe.",
      "Das Gebäude steht im Guinness-Buch der Rekorde als das größte Gebäude, das eine Person allein errichtet hat.",
      "Bory nutzte Beton als modernes künstlerisches Medium, was zur damaligen Zeit revolutionär war.",
      "Die Burg beherbergt hunderte von Skulpturen, die fast alle von Jenő Bory selbst geschaffen wurden.",
      "In der 'Galerie der Frauen' sind Porträts und Statuen zu sehen, die seine Frau Ilona darstellen.",
      "Die Burg verfügt über sieben Türme und dreißig Räume unterschiedlicher Größe.",
      "Die Anlage wird heute noch von den Nachkommen der Familie Bory gepflegt und bewohnt.",
      "Die Bory-Burg gilt als eines der wichtigsten Beispiele für exzentrische Architektur in Mitteleuropa."
      ],
      hu: ["Bory Jenő 1923 és 1959 között, magányosan építette a várat.", "A Guinness Rekordok Könyvében is szerepelt, mint a világ legnagyobb, egy ember által emelt épülete.", "A beton használata művészeti közegként forradalmi volt a maga korában.", "A várban több száz szobor látható, melyek szinte mind az alkotó keze munkái.", "A 'Hölgyek galériája' Bory feleségének állít emléket számos portréval.", "A vár hét toronnyal és harminc különböző méretű helyiséggel rendelkezik.", "Az épületet ma is az alkotó leszármazottai gondozzák és lakják.", "A Bory-vár az excentrikus építészet egyik legfontosabb közép-európai példája."],
      ro: ["Construcția a durat din 1923 până în 1959, anul morții artistului.", "Castelul are 7 turnuri și 30 de camere pline de opere de artă.", "Jenő Bory a folosit betonul ca material artistic, o inovație pentru acea vreme.", "Zidurile sunt împodobite cu poezii dedicate soției sale, Ilona.", "Castelul apare în Cartea Recordurilor ca cea mai mare structură 'făcută de un singur om'.", "În interior funcționează studioul original de sculptură al artistului."],
      en: []
    },
  },
  {
    id: "historical-martonvasari-kastely-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.789, 47.319],
    name: {de: "Schloss Brunszvik", hu: "Brunszvik-kastély", ro: "Castelul Brunszvik", en: "Brunszvik Mansion"},
    description: {
      de: "Ein neugotisches Schloss in Martonvásár, bekannt für seine Beethoven-Verbindungen.",
      hu: "Neogótikus kastély Martonvásáron, amely Beethoven látogatásairól híres.",
      ro: "Un castel neogotic în Martonvásár, cunoscut pentru legăturile cu Beethoven.",
      en: "A Neo-Gothic mansion in Martonvásár, famous for its connections to Beethoven."
    },
    facts: {
      de: ["Beethoven-Gedenkmuseum.", "Prächtiger englischer Garten."],
      hu: ["Beethoven Emlékmúzeum.", "Gyönyörű angolkert veszi körül."],
      ro: ["Muzeu memorial Beethoven.", "Grădină englezească superbă."],
      en: ["Beethoven Memorial Museum.", "Surrounded by a beautiful English garden."]
    },
    descriptionAdvanced: {
      de: "Das Schloss Brunszvik in Martonvásár ist ein prachtvolles Beispiel neugotischer Architektur und ein bedeutender Ort der Musikgeschichte. Das im 18. Jahrhundert ursprünglich barocke Gebäude erhielt Mitte des 19. Jahrhunderts sein heutiges romantisches Aussehen mit Zinnen und Spitzbogenfenstern. Weltberühmt ist das Schloss vor allem durch seine enge Verbindung zu Ludwig van Beethoven, der ein enger Freund der Familie Brunszvik war und das Anwesen mehrfach besuchte. Man sagt, dass Beethoven hier Inspiration für einige seiner berühmtesten Werke fand und eine tiefe Zuneigung zu den Brunszvik-Schwestern hegte. Heute beherbergt das Schloss ein faszinierendes Beethoven-Gedenkmuseum und das Forschungsinstitut für Agrarwissenschaften der Ungarischen Akademie der Wissenschaften. Umgeben ist das Gebäude von einem der schönsten englischen Landschaftsgärten Ungarns, dessen alter Baumbestand und idyllischer See zum Träumen einladen. Im Sommer bilden der Schlosshof und der Park eine zauberhafte Kulisse für hochkarätige Beethoven-Konzerte, die Musikliebhaber aus aller Welt anziehen.",
      hu: "A martonvásári Brunszvik-kastély a magyarországi neogótikus építészet egyik legszebb példája és fontos zenei emlékhely. Az eredetileg barokk stílusú épület a 19. század közepén kapta romantikus, Tudor-stílusú megjelenését. A kastély világhírét Ludwig van Beethovennel való kapcsolata alapozta meg: a zeneszerző közeli barátja volt a Brunszvik családnak és többször is vendégeskedett itt. Úgy tartják, Beethoven Martonvásáron talált ihletet több híres művéhez, és gyengéd szálak fűzték a Brunszvik-nővérekhez. Ma az épület Beethoven Emlékmúzeumnak és kutatóintézetnek ad otthont. A kastélyt övező gyönyörű angolkert hatalmas fáival és idilli tavával Magyarország egyik legszebb tájképi kertje, nyaranként pedig szabadtéri koncertek helyszíne.",
      ro: "Castelul Brunszvik din Martonvásár este unul dintre cele mai frumoase exemple de arhitectură neogotică din Ungaria, fiind celebru pentru legătura sa strânsă cu marele compozitor Ludwig van Beethoven. Familia Brunszvik, proprietara domeniului, l-a găzduit pe Beethoven de mai multe ori, acesta fiind prieten apropiat al familiei și profesor de muzică al surorilor Brunszvik. Castelul actual, cu fațada sa dantelată și turnurile elegante, este înconjurat de un parc englezesc spectaculos de 70 de hectare, cu un lac central și insulă. Astăzi, clădirea găzduiește Muzeul Beethoven și un institut de cercetare agricolă, fiind un loc unde cultura se întâlnește cu știința. Istorie K8 – Clasicismul și muzica în secolul al XIX-lea.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Schloss wurde ursprünglich im Barockstil erbaut und später im Tudor-Stil neugotisch umgestaltet.",
      "Ludwig van Beethoven besuchte Martonvásár zwischen 1800 und 1806 mehrmals.",
      "Einige Historiker vermuten, dass die 'Unsterbliche Geliebte' Beethovens eine der Brunszvik-Schwestern war.",
      "Im Schloss befindet sich das einzige Beethoven-Museum Ungarns mit wertvollen Originalmanuskripten.",
      "Der Schlosspark umfasst 70 Hektar und beherbergt seltene Baumarten wie Sumpfzypressen.",
      "Das Anwesen ist heute Sitz des Zentrums für Agrarforschung der Ungarischen Akademie der Wissenschaften.",
      "Im Sommer finden auf einer Insel im Schlosspark regelmäßig Open-Air-Konzerte mit Werken Beethovens statt.",
      "Brunszvik Teréz, die Tochter des Hauses, gründete 1828 in Ungarn den ersten Kindergarten Mitteleuropas."
      ],
      hu: ["A kastély barokk alapokra épült, majd romantikus neogótikus stílusban építették át.", "Ludwig van Beethoven 1800 és 1806 között többször is meglátogatta a családot.", "A zeneszerző 'halhatatlan kedvese' vélhetően az egyik Brunszvik-lány volt.", "Itt működik az ország egyetlen Beethoven múzeuma értékes eredeti kéziratokkal.", "A 70 hektáros kastélyparkban ritka mocsárciprusok is láthatók.", "Az épület ma a Magyar Tudományos Akadémia Agrártudományi Kutatóközpontja.", "Nyaranként a park szigetén nagyszabású Beethoven-hangversenyeket tartanak.", "Brunszvik Teréz, a család tagja alapította az első magyarországi óvodát 1828-ban."],
      ro: ["Beethoven a compus aici piese celebre precum 'Sonata Appassionata'.", "Castelul a fost reconstruit în stil neogotic englezesc în anul 1870.", "Parcul conține specii rare de arbori aduse din întreaga lume acum 200 de ani.", "Pe insula de pe lac se organizează vara concerte Beethoven în aer liber.", "Brunszvik Teréz, membra familiei, a înființat prima grădiniță din Ungaria.", "Muzeul Beethoven deține obiecte personale și manuscrise ale compozitorului."],
      en: []
    },
  },
  {
    id: "historical-nadasdy-kastely-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.254, 47.118],
    name: {de: "Schloss Nádasdy", hu: "Nádasdy-kastély", ro: "Castelul Nádasdy", en: "Nádasdy Mansion"},
    description: {
      de: "Ein einzigartiges neugotisches Tudor-Schloss in Nádasdladány.",
      hu: "Egyedülálló Tudor-stílusú neogótikus kastély Nádasdladányban.",
      ro: "Un castel neogotic unic în stil Tudor, situat în Nádasdladány.",
      en: "A unique Tudor-style Neo-Gothic mansion in Nádasdladány."
    },
    facts: {
      de: ["Historische Bibliothek.", "Stimmungsvoller Schlosspark."],
      hu: ["Történelmi könyvtár.", "Hangulatos kastélypark."],
      ro: ["Bibliotecă istorică.", "Parc de castel atmosferic."],
      en: ["Historic library.", "Atmospheric castle park."]
    },
    descriptionAdvanced: {
      de: "Das Schloss Nádasdy in Nádasdladány ist ein einzigartiges architektonisches Juwel in Ungarn, da es konsequent im englischen Tudor-Stil errichtet wurde. Das im späten 19. Jahrhundert erbaute Schloss strahlt den Charme eines britischen Landsitzes aus und war für seine Zeit technisch hochmodern ausgestattet. Die Familie Nádasdy wollte mit diesem Bau an ihre glorreiche Vergangenheit anknüpfen und schuf ein Gebäude von außergewöhnlicher Eleganz und Detailtreue. Besonders beeindruckend ist der Ahnensaal mit seinen lebensgroßen Porträts und der prächtig geschnitzten Holzdecke. Auch die Bibliothek, die einen bedeutenden Teil der Familiensammlung beherbergt, zeugt von der hohen Kultur der Besitzer. Das Schloss ist von einem weitläufigen Park umgeben, der mit seinem künstlichen See und den verschlungenen Wegen perfekt zur romantischen Architektur passt. Nach einer umfassenden Restaurierung in den letzten Jahren erstrahlt das Schloss wieder in altem Glanz und bietet Besuchern die Möglichkeit, in die aristokratische Welt des späten 19. Jahrhunderts einzutauchen.",
      hu: "A nádasdladányi Nádasdy-kastély az egyetlen olyan főúri rezidencia Magyarországon, amely következetesen az angol Tudor-stílusban épült. A 19. század végén emelt épület egy brit vidéki kastély hangulatát árasztja, és korában technikai szempontból rendkívül modernnek számított. A Nádasdy család ezen építkezéssel kívánta hangsúlyozni ősi származását és rangját. Belső terei közül a legimpozánsabb az Ősök csarnoka, ahol életnagyságú portrék és pazarul faragott faborítás látható. A kastély könyvtára is kiemelkedő értéket képvisel, megőrizve a család szellemi örökségét. A felújított épületet hatalmas angolpark veszi körül, mesterséges tóval és kanyargós sétányokkal, amely tökéletesen illeszkedik a romantikus építészethez.",
      ro: "Castelul Nádasdy din Nádasdladány este un exemplu remarcabil de stil neogotic 'Tudor', amintind de marile reședințe nobiliare britanice. Construit la sfârșitul secolului al XIX-lea de contele Ferenc Nádasdy ca dovadă a iubirii eterne pentru soția sa decedată prematur, castelul impresionează prin luxul și tehnologia sa modernă pentru acea vreme. Sala Strămoșilor, decorată cu portrete de familie în mărime naturală și sculpturi în lemn executate cu migală, este inima clădirii. Castelul a fost printre primele din țară dotate cu iluminat electric, încălzire centrală și sistem de telefonie. Recent restaurat, acesta oferă vizitatorilor o privire asupra stilului de viață aristocratic de la începutul secolului XX. Istorie K8 – Modernizarea reședințelor nobiliare.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Schloss wurde zwischen 1873 und 1876 nach Plänen von István Linzbauer erbaut.",
      "Es ist das einzige Schloss in Ungarn, das im romantischen englischen Tudor-Stil errichtet wurde.",
      "Das Gebäude verfügte bereits bei seiner Fertigstellung über moderne Annehmlichkeiten wie Gasbeleuchtung und Telefon.",
      "Der Ahnensaal ist mit aufwendigen Holzschnitzereien und Porträts der Familie Nádasdy geschmückt.",
      "Die Bibliothek des Schlosses ist eine der wenigen aristokratischen Sammlungen, die den Zweiten Weltkrieg überstanden haben.",
      "In den Mauern des Schlosses befindet sich eine Kapelle, die der Heiligen Helena gewidmet ist.",
      "Der Schlosspark wurde als englischer Landschaftsgarten mit einem malerischen Teich angelegt.",
      "Das Schloss diente aufgrund seiner einzigartigen Architektur bereits mehrfach als Kulisse für Filmproduktionen."
      ],
      hu: ["A kastély 1873 és 1876 között épült Linzbauer István tervei alapján.", "Ez az ország egyetlen romantikus Tudor-stílusú főúri kastélya.", "Átadásakor már rendelkezett gázvilágítással és beszélőcső-rendszerrel.", "Az Ősök csarnoka fafaragványai a magyar belsőépítészet remekművei.", "Könyvtára egyike azon keveseknek, amelyek épségben túlélték a világháborút.", "A kastély kápolnáját Szent Ilona tiszteletére szentelték fel.", "Parkját tájképi kertként alakították ki, hangsúlyozva a természetességet.", "Különleges megjelenése miatt számos filmforgatás helyszínéül szolgált már."],
      ro: ["Construcția a fost finalizată în 1885, după planurile arhitectului István Linzbauer.", "Interiorul este decorat cu mobilier original din stejar și vitralii spectaculoase.", "Castelul avea un sistem de conducte subterane pentru transportul mâncării din bucătărie.", "Sala Strămoșilor păstrează portretele familiei Nádasdy începând cu secolul al XVI-lea.", "Parcul castelului se întinde pe 24 de hectare și are un lac artificial.", "Aici s-au filmat scene pentru mai multe producții cinematografice internaționale."],
      en: []
    },
  },
  {
    id: "animal-habitat-velencei-madarrezervatum-extra",
    type: "animal-habitat",
    parent: "HU-FE",
    coords: [18.577, 47.195],
    name: {de: "Vogelreservat Velence-See", hu: "Velencei-tavi Madárrezervátum", ro: "Rezervația de Păsări de la Lacul Velence", en: "Velence Lake Bird Sanctuary"},
    description: {
      de: "Ein geschütztes Feuchtgebiet am Velence-See, Heimat zahlreicher Wasservögel.",
      hu: "Védett vizes élőhely a Velencei-tó nyugati részén, számos vízimadár otthona.",
      ro: "O zonă umedă protejată la Lacul Velence, casă pentru numeroase păsări de apă.",
      en: "A protected wetland on Lake Velence, home to numerous water birds."
    },
    facts: {
      de: ["Sperrgebiet für Besucher.", "Wichtiger Rastplatz."],
      hu: ["Látogatástól elzárt terület.", "Fontos vonulóhely."],
      ro: ["Zonă restricționată vizitatorilor.", "Loc important de popas."],
      en: ["Restricted area for visitors.", "Important migratory stopover."]
    },
    descriptionAdvanced: {
      de: "Das Vogelreservat am Velence-See ist ein Naturparadies von internationaler Bedeutung und ein Rückzugsort für zahlreiche bedrohte Vogelarten. Es erstreckt sich über den westlichen, stark verschilften Teil des Sees und bietet ideale Brut- und Rastbedingungen. Das Reservat ist Teil des Natura-2000-Netzwerks und steht unter strengem Schutz, um das empfindliche Ökosystem zu bewahren. Besucher können hier seltene Vögel wie den Silberreiher, den Löffler und verschiedene Rohrsängerarten beobachten. Besonders während des Vogelzugs im Frühjahr und Herbst dient der See als lebenswichtiger Rastplatz für tausende Zugvögel auf ihrem Weg zwischen Europa und Afrika. Die weiten Schilfflächen und die flachen Wasserbereiche sind nicht nur ökologisch wertvoll, sondern strahlen auch eine tiefe Ruhe aus. Von speziellen Aussichtstürmen am Rande des Reservats aus können Naturfreunde und Fotografen die faszinierende Vogelwelt beobachten, ohne die Tiere in ihrem natürlichen Lebensraum zu stören. Das Reservat ist ein lebendiges Beispiel für erfolgreichen Naturschutz in der ungarischen Kulturlandschaft.",
      hu: "A Velencei-tavi Madárrezervátum nemzetközi jelentőségű természetvédelmi terület a tó nyugati, sűrűn nádasodott részén. Ez a háborítatlan vizes élőhely számos ritka és védett madárfaj számára nyújt ideális fészkelő- és pihenőhelyet. A rezervátum része a Natura 2000 hálózatnak, és szigorú oltalom alatt áll az ökoszisztéma megőrzése érdekében. Itt költ többek között a nagy kócsag, a kanalasgém és számos nádaslakó énekesmadár. A tavaszi és őszi vonulási időszakban a tó stratégiai állomása a több ezer kilométert megtevő vándormadaraknak. A látogatók a rezervátum szélén elhelyezett megfigyelőtornyokból nyerhetnek betekintést ebbe a rejtett vízi világba, anélkül, hogy zavarnák a kényes egyensúlyt.",
      ro: "Rezervația de Păsări de pe Lacul Velence este unul dintre cele mai importante situri de cuibărit și popas pentru păsările migratoare din Europa Centrală. Situată în partea de vest a lacului, zona este dominată de stufărișuri dense și canale de apă liniștite, oferind un habitat ideal pentru specii protejate la nivel global. Rezervația este celebră în special pentru coloniile de egrete mari, stârci roșii și diverse specii de rațe sălbatice. Accesul în zona strict protejată este limitat, dar punctele de observație periferice și excursiile ghidate cu barca permit observarea vieții aviare fără a deranja ecosistemul. Este un punct crucial în coridorul de migrație trans-european. Științele Naturii K7 – Zonele umede și migrația păsărilor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Reservat wurde 1958 gegründet, um die einzigartige Flora und Fauna des Velence-Sees zu schützen.",
      "Es umfasst eine Fläche von rund 420 Hektar im westlichen Teil des Sees.",
      "Über 200 verschiedene Vogelarten wurden in dem Gebiet bereits nachgewiesen.",
      "Das Reservat ist als international bedeutendes Feuchtgebiet nach der Ramsar-Konvention geschützt.",
      "Die dichten Schilfbestände bieten Schutz für seltene Arten wie die Rohrdommel und die Rohrweihe.",
      "Ein Teil des Reservats ist für die Öffentlichkeit gesperrt, um die Brutgeschäfte der Vögel nicht zu stören.",
      "Der Velence-See ist einer der wärmsten Seen Europas, was die biologische Vielfalt zusätzlich begünstigt.",
      "Naturkundliche Führungen werden am Rande des Reservats angeboten, um Besuchern die Ökologie näherzubringen."
      ],
      hu: ["A rezervátumot 1958-ban alapították a tó egyedi élővilágának megőrzésére.", "Mintegy 420 hektáros területet foglal el a Velencei-tó nyugati medencéjében.", "Eddig több mint 200 madárfaj jelenlétét mutatták ki a területen.", "A Ramsari Egyezmény védelme alatt álló nemzetközi jelentőségű vizes élőhely.", "A sűrű nádasban él a ritka bölömbika és a barna rétihéja is.", "A terület belső részei a fészkelési időszakban nem látogathatók.", "A Velencei-tó sekély vize kedvez a gazdag táplálékbázis kialakulásának.", "Szakvezetett túrák indulnak a tóparti kutatóházaktól a természetkedvelőknek."],
      ro: ["Rezervația a fost înființată în anul 1958 și are o suprafață de 420 de hectare.", "Peste 100 de specii de păsări cuibăresc aici în mod regulat.", "Zona face parte din rețeaua internațională Natura 2000 și este sit Ramsar.", "Egretă mare este simbolul rezervației, având aici una dintre cele mai mari colonii.", "În timpul migrației de toamnă, mii de gâște sălbatice poposesc pe lac.", "Stuful recoltat de aici este folosit pentru acoperișuri tradiționale în întreaga țară."],
      en: []
    },
  },
  {
    id: "industry-dunaujvarosi-vasmu-extra",
    type: "industry",
    parent: "HU-FE",
    coords: [18.932, 46.945],
    name: {de: "Hüttenwerk Dunaújváros", hu: "Dunaújvárosi Vasmű", ro: "Combinatul Siderurgic Dunaújváros", en: "Dunaujvaros Steel Works"},
    description: {
      de: "Das größte Stahlwerk Ungarns, das Herz der Industriestadt Dunaújváros.",
      hu: "Magyarország legnagyobb vasműve, Dunaújváros ipari központja.",
      ro: "Cel mai mare combinat siderurgic din Ungaria, inima oraului industrial Dunaújváros.",
      en: "Hungary's largest steel works, the heart of the industrial city Dunaujvaros."
    },
    facts: {
      de: ["In den 1950ern gebaut.", "Enorme Produktionskapazität."],
      hu: ["Az 1950-es években épült.", "Hatalmas termelési kapacitás."],
      ro: ["Construit în anii 1950.", "Capacitate uriașă de producție."],
      en: ["Built in the 1950s.", "Enormous production capacity."]
    },
    descriptionAdvanced: {
      de: "Das Hüttenwerk in Dunaújváros, heute als Dunaferr bekannt, ist das größte integrierte Stahlwerk Ungarns und das industrielle Herz der Stadt. Es wurde in den 1950er Jahren als monumentales Projekt der sozialistischen Industrialisierung gegründet, wobei die Stadt Dunaújváros (damals Sztálinváros) eigens um das Werk herum geplant wurde. Der Komplex umfasst den gesamten Produktionsprozess von der Roheisenerzeugung bis hin zu gewalzten Stahlprodukten. Über Jahrzehnte hinweg war das Werk der wichtigste Lieferant für die ungarische Maschinenbau- und Bauindustrie. Die riesigen Hochöfen, Kokereien und Walzwerke prägen das Stadtbild und zeugen von der gewaltigen Dimension der schweren Industrie. Trotz der Herausforderungen des wirtschaftlichen Wandels bleibt das Werk ein entscheidender Arbeitgeber in der Region. In den letzten Jahren wurden Anstrengungen unternommen, um die Produktion effizienter und umweltfreundlicher zu gestalten. Das Hüttenwerk ist nicht nur ein Industriestandort, sondern auch ein historisches Zeugnis einer Ära, die Ungarn nachhaltig geprägt hat.",
      hu: "A dunaújvárosi vasmű, mai nevén Dunaferr, Magyarország legnagyobb kohászati komplexuma és a város ipari szíve. Az 1950-es években alapították a szocialista iparosítás monumentális projektjeként, ekkor született meg maga a város (akkori nevén Sztálinváros) is az üzem köré építve. A vasmű a teljes gyártási folyamatot lefedi a nyersvasgyártástól a hengerelt acéltermékekig. Évtizedeken át ez a gyár volt a magyar gépgyártás és építőipar legfontosabb alapanyag-szállítója. Hatalmas kohói és kéményei meghatározzák a Duna-part látképét, jelképezve a nehézipar erejét. Bár a gazdasági változások nagy kihívások elé állították, az üzem továbbra is a régió legfontosabb munkaadója és meghatározó gazdasági szereplője.",
      ro: "Combinatul Siderurgic din Dunaújváros (Dunaferr) este cel mai mare complex industrial de acest tip din Ungaria, fiind inima economică a orașului construit special pentru a deservi această industrie. Fondat în anii 1950 sub numele de Combinatul Dunărea, acesta a fost un simbol al industrializării socialiste, transformându-se ulterior într-o unitate modernă de producție a oțelului. Procesul tehnologic include furnale masive, laminoare și facilități de cocsificare, producând oțel de înaltă calitate pentru industria auto, construcții și electrocasnice. Importanța sa strategică este vitală pentru economia națională, oferind mii de locuri de muncă și susținând numeroase industrii conexe. Geografie K8 – Industria grea și siderurgia.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Grundsteinlegung für das kombinat erfolgte im Jahr 1950 im Rahmen des ersten Fünfjahresplans.",
      "Dunaújváros war die erste planmäßig angelegte sozialistische Industriestadt in Ungarn.",
      "Das Werk verfügt über einen eigenen Donauhafen für den Import von Eisenerz und Kohle.",
      "Auf dem Höhepunkt der Produktion beschäftigte das Unternehmen über 10.000 Mitarbeiter.",
      "Die hier produzierten Stahlbleche werden unter anderem in der Automobilindustrie und im Schiffsbau verwendet.",
      "Das Werk umfasst ein Gelände von mehreren hundert Hektar mit einem eigenen internen Schienennetz.",
      "Im Werk befindet sich eine eigene Berufsschule, die Fachkräfte für die Metallurgie ausbildet.",
      "Das Hüttenwerk spielt eine zentrale Rolle für die Energieversorgung der Stadt durch Abwärmenutzung."
      ],
      hu: ["Az üzem alapkövét 1950-ben rakták le az első ötéves terv keretében.", "Dunaújváros volt az első tervezett szocialista iparváros Magyarországon.", "A vasmű saját dunai kikötővel rendelkezik az érc és a szén beszállításához.", "Fénykorában több mint 10 000 ember dolgozott a hatalmas komplexumban.", "Itt készülnek azok az acéllemezek, melyeket a hazai gépipar széles körben felhasznál.", "A gyár területe több száz hektár, saját belső vasúthálózattal rendelkezik.", "Az üzem területén szakképző intézmény működik a kohászati utánpótlás biztosítására.", "A vasmű hulladékhőjét a város távfűtési rendszerében is hasznosítják."],
      ro: ["Orașul Dunaújváros a fost fondat în 1950 special pentru lucrătorii combinatului.", "Capacitatea de producție a oțelului brut depășește 1,6 milioane de tone anual.", "Combinatul dispune de un port propriu pe Dunăre pentru transportul materiilor prime.", "Suprafața platformei industriale este de aproximativ 800 de hectare.", "Primul furnal a fost pornit în mod festiv în anul 1954.", "Dunaferr este principalul furnizor de tablă pentru industria constructoare de mașini din regiune."],
      en: []
    },
  },
  {
    id: "historical-pannonhalmi-apatsag-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [17.761, 47.552],
    name: {de: "Erzabtei Pannonhalma", hu: "Pannonhalmi Főapátság", ro: "Abatia Pannonhalma", en: "Pannonhalma Archabbey"},
    description: {
      de: "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum der ungarischen Benediktiner.",
      hu: "UNESCO világörökségi helyszín, a magyar bencések szellemi központja.",
      ro: "Sit al patrimoniului mondial UNESCO și centrul spiritual al benedictinilor maghiari.",
      en: "A UNESCO World Heritage site and the spiritual center of Hungarian Benedictines."
    },
    facts: {
      de: ["Über 1000 Jahre alt.", "Berühmte Bibliothek."],
      hu: ["Több mint 1000 éves.", "Híres könyvtárral rendelkezik."],
      ro: ["Vechime de peste 1000 de ani.", "Bibliotecă celebră."],
      en: ["Over 1000 years old.", "Features a famous library."]
    },
    descriptionAdvanced: {
      de: "Die Erzabtei Pannonhalma ist eines der ältesten und bedeutendsten historischen Denkmäler Ungarns und ein lebendiges Zentrum des Benediktinerordens. Auf dem 'Heiligen Berg von Pannonia' gelegen, blickt das Kloster auf eine über tausendjährige Geschichte zurück, die eng mit der Gründung des ungarischen Staates verbunden ist. Die Abtei vereint meisterhaft verschiedene Baustile, von der romanischen Krypta über die gotische Basilika bis hin zum klassizistischen Bibliotheksturm. Besonders berühmt ist die monumentale Bibliothek mit über 400.000 Bänden und der Gründungsurkunde der Abtei aus dem Jahr 1001. Die Erzabtei ist seit 1996 UNESCO-Weltkulturerbe und zieht Pilger sowie Touristen gleichermaßen an. Neben der geistlichen Arbeit widmen sich die Mönche heute auch dem Weinbau, der Kräuterkunde und der Bildung im angeschlossenen Gymnasium. Der Blick von den Klostermauern über die hügelige Landschaft ist atemberaubend und unterstreicht die Erhabenheit dieses Ortes, der Tradition und Moderne auf einzigartige Weise verbindet.",
      hu: "A Pannonhalmi Főapátság Magyarország egyik legrégebbi történelmi emléke és a bencés rend szellemi központja. A 'Szent Hegy' tetején elhelyezkedő monostor több mint ezeréves múltra tekint vissza, amely szorosan összefonódik a magyar államalapítással. Építészete mesterien ötvözi a különböző korokat: a román stílusú altemplomtól a gótikus bazilikán át a klasszicista könyvtártoronyig. Világhírű könyvtára több mint 400 000 kötetet őriz, köztük az 1001-ben kelt alapítólevelet. Az apátság 1996 óta az UNESCO Világörökség része, és évente zarándokok és turisták tízezreit vonzza. A szerzetesek ma is aktívan tevékenykednek: gimnáziumot tartanak fenn, gyógynövénytermesztéssel és neves borászattal is foglalkoznak.",
      ro: "Abatia Benedictină din Pannonhalma este unul dintre cele mai vechi monumente istorice din Ungaria și un sit al Patrimoniului Mondial UNESCO. Fondată în anul 996 de principele Géza, abatia a jucat un rol esențial în creștinarea maghiarilor și în difuzarea culturii europene. Complexul arhitectural îmbină stilurile romanic, gotic și baroc, având o bibliotecă spectaculoasă ce adăpostește peste 400.000 de volume, inclusiv Diploma de Fundare a Abației din Tihany. Călugării benedictini continuă tradiția seculară a educației, a producției de vin și a cultivării plantelor medicinale (levănțică). Este un simbol al continuității spirituale și culturale a națiunii. Istorie K8 – Rolul ordinelor religioase în istoria Europei.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Abtei wurde im Jahr 996 vom Fürsten Géza, dem Vater des heiligen Stephan, gegründet.",
      "Sie ist das spirituelle Zentrum des Benediktinerordens in Ungarn und eine eigenständige Diözese.",
      "In der Bibliothek wird das älteste schriftliche Denkmal der ungarischen Sprache, die Stiftungsurkunde von Tihany, aufbewahrt.",
      "Die heutige Basilika St. Martin wurde im 13. Jahrhundert im frühgotischen Stil erbaut.",
      "Das Kloster beherbergt ein renommiertes Internatsgymnasium, das zu den besten Schulen des Landes zählt.",
      "Pannonhalma betreibt eine eigene Weinkellerei, die die jahrhundertealte Weinbautradition der Mönche fortsetzt.",
      "Die Abtei verfügt über einen bedeutenden botanischen Garten (Arboretum) mit seltenen Heilpflanzen.",
      "Seit 1996 gehört die gesamte Anlage zum UNESCO-Weltkulturerbe."
      ],
      hu: ["Az apátságot 996-ban alapította Géza fejedelem, Szent István apja.", "A magyar bencés kongregáció központja és önálló egyházmegyei jogkörrel bír.", "Könyvtárában őrzik a legrégebbi magyar nyelvű szórványemléket, a tihanyi alapítólevelet.", "A Szent Márton-bazilika jelenlegi formáját a 13. században kapta.", "A monostor falai között működik az ország egyik legjobb hírű bentlakásos gimnáziuma.", "Saját pincészete a környék vulkanikus talajának köszönhetően kiváló borokat termel.", "Az apátsághoz jelentős arborétum és gyógynövénykert is tartozik.", "1996-ban II. János Pál pápa is meglátogatta az ezeréves intézményt."],
      ro: ["Abația a fost fondată în anul 996, fiind prima școală din Ungaria.", "Biblioteca conține peste 400.000 de volume și manuscrise medievale rare.", "Diploma de fundare din 1055 conține primele cuvinte scrise în limba maghiară.", "Arhitectura actuală include elemente de la secolul al XIII-lea până în secolul al XIX-lea.", "Abația deține propriile podgorii și o cramă modernă de renume internațional.", "Papa Ioan Paul al II-lea a vizitat abația în anul 1996, la aniversarea mileniului."],
      en: []
    },
  },
  {
    id: "historical-soproni-tuztorony-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [16.591, 47.685],
    name: {de: "Soproner Feuerturm", hu: "Soproni Tűztorony", ro: "Turnul de Foc din Sopron", en: "Sopron Fire Tower"},
    description: {
      de: "Das Wahrzeichen von Sopron, erbaut auf römischen Fundamenten.",
      hu: "Sopron városának jelképe, amely római kori alapokra épült.",
      ro: "Simbolul oraului Sopron, construit pe fundații romane.",
      en: "The landmark of Sopron, built on Roman foundations."
    },
    facts: {
      de: ["Blick auf die Alpen.", "Tor der Treue."],
      hu: ["Kilátás az Alpokra.", "A Hűség Kapuja található alatta."],
      ro: ["Vedere spre Alpi.", "Sub el se află Poarta Fidelității."],
      en: ["View of the Alps.", "The Gate of Loyalty is located below it."]
    },
    descriptionAdvanced: {
      de: "Der Feuerturm in Sopron ist das unbestrittene Wahrzeichen der Stadt und ein faszinierendes Zeugnis ihrer wechselvollen Geschichte. Er wurde auf den Fundamenten der antiken römischen Stadtmauer errichtet und vereint in seiner Architektur Elemente aus verschiedenen Epochen, von der Gotik bis zum Barock. Ursprünglich diente der Turm der Überwachung der Stadt; die Wächter hielten Ausschau nach Bränden und kündigten die Ankunft fremder Händler oder hoher Gäste mit Fanfarenklängen an. Das untere quadratische Teil des Turms ist mittelalterlich, während der obere, mit einer Laterne gekrönte Teil nach dem großen Stadtbrand von 1676 in seiner heutigen barocken Form entstand. Besonders symbolträchtig ist das 'Tor der Treue' am Fuße des Turms, das an die Volksabstimmung von 1921 erinnert, bei der sich die Bürger für den Verbleib bei Ungarn entschieden. Wer die 119 Stufen zur Aussichtsplattform erklimmt, wird mit einem herrlichen Blick über die mittelalterliche Altstadt von Sopron bis hin zu den Ausläufern der Alpen belohnt.",
      hu: "A soproni Tűztorony a város megkérdőjelezhetetlen jelképe és viharos történelmének hű tanúja. Római kori alapfalakra épült, és építészetében több korszak – a gótika, a reneszánsz és a barokk – jegyeit is hordozza. Eredetileg városőrzési célokat szolgált: a toronyból figyelték a tüzeket, és harsonaszóval jelezték az idegen kereskedők vagy jeles vendégek érkezését. Alsó, négyszögletes része középkori, míg felső, hengeres része és a jellegzetes hagymakupola az 1676-os nagy tűzvész után nyerte el barokk formáját. Különösen jelképes az aljában lévő Hűségkapu, amely az 1921-es népszavazásra emlékeztet, ahol a város a Magyarországhoz való tartozás mellett döntött. A torony erkélyéről páratlan kilátás nyílik az óvárosra és az Alpokaljára.",
      ro: "Turnul Pompierilor (Tűztorony) este simbolul orașului Sopron și o mărturie a loialității locuitorilor săi față de Ungaria. Partea inferioară a turnului a fost construită pe ruinele zidurilor romane ale cetății Scarbantia, în timp ce partea superioară barocă, cu balconul circular, datează din secolul al XVII-lea. Turnul a servit drept punct de observație pentru incendii și post pentru muzicienii orașului care anunțau ora și evenimentele importante. Poarta Loialității, situată la baza turnului, comemorează referendumul din 1921 prin care Sopron a ales să rămână parte a Ungariei. Panorama oferită de balconul turnului cuprinde întregul centru istoric și Munții Alpi în depărtare. Istorie K8 – Loialitatea și identitatea urbană.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Turm steht auf den Überresten eines quadratischen römischen Torturms aus dem 4. Jahrhundert.",
      "Nach dem großen Brand von 1676 wurde der Turm im Barockstil mit einer charakteristischen Haube wiederaufgebaut.",
      "Das 'Tor der Treue' (Civitas Fidelissima) wurde 1922 zum Gedenken an den Anschluss an Ungarn errichtet.",
      "Die Turmwächter hatten früher die Aufgabe, bei Feuer Signale mit Laternen oder Fahnen zu geben.",
      "Die Gesamthöhe des Turms beträgt 58 Meter, und man muss 119 Stufen zur Galerie hinaufsteigen.",
      "Das Glockenspiel des Turms spielt regelmäßig Melodien, die eng mit der Geschichte der Stadt verbunden sind.",
      "An der Fassade des Turms sind verschiedene Wappen der Stadt und bedeutender Adelsfamilien zu sehen.",
      "Der Turm dient heute als Museum, das Einblicke in die Stadtbefestigung und die Geschichte von Sopron bietet."
      ],
      hu: ["A torony egy 4. századi római kaputorony maradványaira épült.", "Mai barokk alakját az 1676-os pusztító városi tűzvész utáni újjáépítéskor kapta.", "A Hűségkaput (Civitas Fidelissima) 1922-ben emelték a népszavazás emlékére.", "A toronyőrök feladata volt a tűzjelzés mellett a pontos idő közhírré tétele is.", "A torony magassága 58 méter, és 119 lépcsőfok vezet fel a körerkélyre.", "Harangjátéka rendszeresen felcsendül, Sopron történelmi dallamait játszva.", "Homlokzatán a város és a neves nemesi családok címerei láthatók.", "Ma múzeumként működik, bemutatva a városfalak és a torony történetét."],
      ro: ["Înălțimea totală a turnului este de 58 de metri.", "Balconul circular se află la o înălțime de 30 de metri și este accesibil vizitatorilor.", "Fundațiile romane pe care se sprijină turnul au o vechime de peste 1800 de ani.", "Poarta Loialității a fost inaugurată în 1928 pentru a onora decizia locuitorilor din 1921.", "Vârful turnului este decorat cu vulturul bicefal, simbol al Imperiului Habsburgic.", "În trecut, turnul găzduia paznici care sunau din trâmbiță la fiecare sfert de oră."],
      en: []
    },
  },
  {
    id: "historical-nagycenki-szechenyi-kastely-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [16.705, 47.608],
    name: {de: "Schloss Széchenyi Nagycenk", hu: "Nagycenki Széchenyi-kastély", ro: "Castelul Széchenyi din Nagycenk", en: "Szechenyi Mansion Nagycenk"},
    description: {
      de: "Der ehemalige Wohnsitz von István Széchenyi, dem 'größten Ungarn'.",
      hu: "Széchenyi István, a 'legnagyobb magyar' egykori lakhelye.",
      ro: "Fosta reședință a lui István Széchenyi, 'cel mai mare maghiar'.",
      en: "The former residence of István Széchenyi, the 'Greatest Hungarian'."
    },
    facts: {
      de: ["Gedenkmuseum.", "Prachtvolle Lindenallee."],
      hu: ["Emlékmúzeum működik benne.", "Gyönyörű hárfasor vezet hozzá."],
      ro: ["Muzeu memorial.", "Alee de tei superbă."],
      en: ["Memorial museum.", "Magnificent linden alley leads to it."]
    },
    descriptionAdvanced: {
      de: "Das Schloss Széchenyi in Nagycenk ist ein Ort von höchster nationaler Bedeutung in Ungarn, da es der Wohnsitz von Graf István Széchenyi war, den man den 'größten Ungarn' nennt. Das im klassizistischen Stil erbaut Schloss strahlt eine vornehme Zurückhaltung aus und spiegelt den Geist seines berühmten Bewohners wider, der das Land im 19. Jahrhundert entscheidend modernisierte. Heute beherbergt das Gebäude das István-Széchenyi-Gedenkmuseum, das das Leben und Wirken des Grafen, seine Reformideen und seine technischen Errungenschaften, wie den Bau der Kettenbrücke, dokumentiert. Besonders beeindruckend ist die prachtvolle, 2,6 Kilometer lange Lindenallee, die direkt zum Schloss führt und bereits im 18. Jahrhundert angelegt wurde. In der Nähe des Schlosses befindet sich auch das Mausoleum der Familie Széchenyi, ein bedeutender Wallfahrtsort für viele Ungarn. Die gesamte Anlage, eingebettet in einen ruhigen Park, ist ein Symbol für Patriotismus, Fortschritt und das kulturelle Erbe der Reformzeit, das bis heute die Identität des Landes prägt.",
      hu: "A nagycenki Széchenyi-kastély nemzeti zarándokhely, hiszen itt élt gróf Széchenyi István, a „legnagyobb magyar”. A klasszicista stílusú épület nemes egyszerűséget áraszt, tükrözve lakója szellemét, aki a 19. században alapjaiban modernizálta Magyarországot. Ma az épület a Széchenyi István Emlékmúzeumnak ad otthont, amely bemutatja a gróf életútját, reformtörekvéseit és olyan alkotásait, mint a Lánchíd építése vagy a Magyar Tudományos Akadémia megalapítása. Különösen lenyűgöző a kastélyhoz vezető 2,6 kilométer hosszú hársfasor, amelyet még a 18. században telepítettek. A kastély közelében található a Széchenyi-mauzóleum is, ahol a nemzet nagyjai róják le kegyeletüket. Az egész birtok a haladás és a hazafiság jelképe. Történelem K6 – A reformkor nagyjai és Széchenyi munkássága.",
      ro: "Castelul Széchenyi din Nagycenk a fost reședința 'Celui mai mare maghiar', contele István Széchenyi, cel care a modernizat Ungaria în secolul al XIX-lea. Clădirea în stil clasicist este înconjurată de un parc imens și o alee faimoasă de tei, lungă de 2,6 kilometri, plantată de soția contelui. Castelul găzduiește astăzi Muzeul Memorial Széchenyi, care prezintă viața și inovațiile contelui, de la construcția Podului cu Lanțuri la dezvoltarea căilor ferate și a navigației pe Dunăre. Mausoleul familiei Széchenyi, situat în apropiere, este un loc de pelerinaj național. Este un monument dedicat progresului și patriotismului vizionar. Istorie K8 – Epoca reformelor și István Széchenyi.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Schloss war der Stammsitz der Familie Széchenyi und wurde im 18. Jahrhundert errichtet.",
      "Graf István Széchenyi führte hier im Jahr 1827 das erste moderne Badezimmer Ungarns ein.",
      "Die berühmte Lindenallee besteht aus über 400 Bäumen und wurde von Széchenyis Vorfahren gepflanzt.",
      "Das Museum im Schloss zeigt persönliche Gegenstände des Grafen und Modelle seiner technischen Projekte.",
      "In der Schlosskapelle befindet sich eine wertvolle Orgel, auf der schon berühmte Musiker spielten.",
      "Das Mausoleum in Nagycenk ist die letzte Ruhestätte von István Széchenyi und seiner Frau.",
      "In unmittelbarer Nähe befindet sich eine historische Museumsbahn, die besonders bei Familien beliebt ist.",
      "Das Schlossensemble gehört seit 2001 zum UNESCO-Welterbe der Kulturlandschaft Fertő/Neusiedler See."
      ],
      hu: ["A kastély a Széchenyi család ősi birtoka, jelenlegi formáját a 18-19. században nyerte el.", "Széchenyi István itt vezettette be az országban először a modern fürdőszobát 1827-ben.", "A híres hársfasor több mint 400 fából áll és Széchenyi ősei ültették.", "A múzeumban a gróf személyes tárgyai mellett technikai modelljei is láthatók.", "A kastélykápolna orgonáján neves művészek játszottak a történelem során.", "A nagycenki mauzóleum Széchenyi István és felesége végső nyughelye.", "A közelben működik a Széchenyi Múzeumvasút, amely népszerű családi program.", "A kastélyegyüttes 2001 óta az UNESCO Világörökség része a Fertő-táj részeként."],
      ro: ["Aleea de tei din Nagycenk a fost plantată în anul 1754 și are peste 400 de arbori.", "Castelul a fost dotat cu primul sistem de iluminat cu gaz și prima baie modernă din țară.", "István Széchenyi a trăit și a lucrat aici în perioadele sale cele mai productive.", "Mausoleul familiei a fost construit în stil clasicist în anul 1810.", "Calea ferată cu aburi pentru copii de la Nagycenk face parte din complexul castelului.", "Muzeul memorial a fost deschis publicului în anul 1973."],
      en: []
    },
  },
  {
    id: "animal-habitat-ferto-hansag-park-extra",
    type: "animal-habitat",
    parent: "HU-GS",
    coords: [16.82, 47.66],
    name: {de: "Nationalpark Fertő-Hanság", hu: "Fertő-Hanság Nemzeti Park", ro: "Parcul Național Fertő-Hanság", en: "Ferto-Hansag National Park"},
    description: {
      de: "Ein grenzüberschreitender Nationalpark, der den Neusiedler See und seine Sümpfe schützt.",
      hu: "Határon átnyúló nemzeti park, amely a Fertő-tavat és a Hanság mocsárvilágát védi.",
      ro: "Un parc național transfrontalier care protejează Lacul Neusiedler și mlaștinile Hanság.",
      en: "A cross-border national park protecting Lake Neusiedler and the Hanság marshlands."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Seltene Wasservögel."],
      hu: ["Világörökségi helyszín.", "Ritka vízimadarak élnek itt."],
      ro: ["Patrimoniu UNESCO.", "Păsări de apă rare."],
      en: ["UNESCO World Heritage site.", "Home to rare water birds."]
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Fertő-Hanság umfasst die einzigartige Seenlandschaft des Neusiedler Sees und die geheimnisvolle Sumpfwelt des Hanság. Als grenzüberschreitender Nationalpark mit Österreich schützt er ein Ökosystem, das aufgrund seiner Lage am Übergang zwischen Alpenausläufern und ungarischer Tiefebene eine außergewöhnliche Artenvielfalt beherbergt. Der Neusiedler See ist ein Steppensee mit ausgedehnten Schilfgürteln, die als Kinderstube für unzählige Fisch- und Vogelarten dienen. Im Hanság-Gebiet dominieren Feuchtwiesen und Moorwälder, in denen seltene Pflanzenarten wie das Sumpf-Knabenkraut gedeihen. Der Park ist ein Paradies für Vogelbeobachter, da hier Arten wie der Große Trapp, der Seeadler und tausende von Gänsen leben. Besucher können die Natur auf zahlreichen Lehrpfaden, mit dem Fahrrad oder bei geführten Kanutouren durch das Schilflabyrinth entdecken. Die harmonische Verbindung von Natur und jahrhundertealter Kulturlandschaft macht den Nationalpark zu einem der wertvollsten Schutzgebiete in ganz Mitteleuropa.",
      hu: "A Fertő-Hanság Nemzeti Park a Fertő-tó egyedülálló vidékét és a Hanság titokzatos mocsárvilágát foglalja magában. Ausztriával közös határon átnyúló nemzeti parkként olyan ökoszisztémát véd, amely az Alpok és az Alföld találkozásánál rendkívüli fajgazdagságot mutat. A Fertő-tó Európa egyik legnagyobb sztyeppi tava, hatalmas nádasokkal, amelyek számtalan hal- és madárfaj bölcsőjéül szolgálnak. A Hanság területén nedves rétek és láperdők dominálnak, ahol ritka növények, például orchideafélék díszlenek. A park a madármegfigyelők paradicsoma: itt él a túzok, a rétisas és vadludak tízezrei pihennek meg vonuláskor. A látogatókat tanösvények, kerékpárutak és vezetett kenutúrák várják a nádaslabirintusban. Természetismeret K5 – Vizes élőhelyek és nemzeti parkjaink.",
      ro: "Parcul Național Fertő-Hansag, situat la granița cu Austria, protejează ecosistemul unic al Lacului Fertő (Neusiedler See), cel mai vestic lac de stepă din Europa. Zona este un mozaic de stufărișuri, pășuni sărate și mlaștini, fiind un paradis pentru ornitologi datorită celor peste 300 de specii de păsări care cuibăresc sau poposesc aici în timpul migrației. Parcul este inclus în Patrimoniul Mondial UNESCO și funcționează ca o rezervație transfrontalieră. Vizitatorii pot explora traseele educaționale, pot observa turme de vite gri maghiare și bivoli, sau pot face excursii cu barca prin canalele înguste de stuf. Științele Naturii K7 – Biodiversitatea zonelor umede.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Nationalpark wurde 1991 gegründet und war der erste grenzüberschreitende Nationalpark Ungarns.",
      "Das Gebiet des Fertő-Sees ist seit 2001 Teil des UNESCO-Welterbes.",
      "Der Neusiedler See ist nach dem Plattensee der zweitgrößte Steppensee Mitteleuropas.",
      "Im Nationalpark leben seltene ungarische Haustierrassen wie das Graurind und das Wasserbüffel.",
      "Das Schilfgürtel des Sees ist stellenweise bis zu fünf Kilometer breit.",
      "Der Nationalpark ist ein wichtiger Rastplatz auf der europäischen Vogelzuglinie zwischen Nord und Süd.",
      "Im Hanság-Gebiet werden Anstrengungen zur Wiederherstellung der ursprünglichen Sumpflandschaft unternommen.",
      "Es gibt mehrere Besucherzentren, wie das 'Haus am See' in Sarród, die Ausstellungen zur Natur bieten."
      ],
      hu: ["A nemzeti parkot 1991-ben alapították, hazánk első határon átnyúló nemzeti parkja.", "A Fertő-tó vidéke 2001 óta az UNESCO Világörökség része.", "A Fertő-tó a Balaton után Közép-Európa második legnagyobb sztyeppi tava.", "A területen őshonos magyar állatok, mint a szürkemarha és a bivaly is élnek.", "A tó nádasszegélye helyenként az öt kilométeres szélességet is eléri.", "Fontos állomás az európai észak-déli irányú madárvonulási útvonalon.", "A Hanságban jelentős erőfeszítések folynak az eredeti mocsárvilág visszaállítására.", "Látogatóközpontjai, mint a sarródi Kócsagvár, modern kiállításokkal várják a vendégeket."],
      ro: ["Lacul Fertő are o adâncime medie de numai 1 metru, fiind un lac extrem de puțin adânc.", "Rezervația Biosferei UNESCO a fost declarată în anul 1979.", "Este locul de cuibărit preferat pentru lopătari, stârci și egrete.", "Suprafața totală a parcului național pe partea maghiară este de 23.500 hectare.", "Aici se găsește cea mai mare populație de vultur codalb din regiune.", "Plantele halofite (iubitoare de sare) sunt caracteristice pentru zonele de stepă din parc."],
      en: []
    },
  },
  {
    id: "industry-audi-gyor-extra",
    type: "industry",
    parent: "HU-GS",
    coords: [17.685, 47.695],
    name: {de: "Audi Hungaria Győr", hu: "Audi Hungaria Győr", ro: "Audi Hungaria Győr", en: "Audi Hungaria Győr"},
    description: {
      de: "Eines der größten Motorenwerke der Welt und ein bedeutendes Fahrzeugwerk.",
      hu: "A világ egyik legnagyobb motorgyára és jelentős járműgyártó központ.",
      ro: "Una dintre cele mai mari fabrici de motoare din lume și un centru auto major.",
      en: "One of the world's largest engine plants and a major automobile manufacturing hub."
    },
    facts: {
      de: ["Seit 1993 in Győr.", "Exportiert weltweit."],
      hu: ["1993 óta működik Győrben.", "Világszerte exportál termékeket."],
      ro: ["În Győr din 1993.", "Exportă în toată lumea."],
      en: ["In Győr since 1993.", "Exports products worldwide."]
    },
    descriptionAdvanced: {
      de: "Audi Hungaria in Győr ist einer der größten und modernsten Industriekomplexe weltweit und das Rückgrat der ungarischen Exportwirtschaft. Seit seiner Gründung im Jahr 1993 hat sich der Standort zum größten Motorenwerk der Welt entwickelt, das fast die gesamte Palette der Audi- und Volkswagen-Modelle beliefert. Neben der Motorenproduktion verfügt Győr auch über ein komplettes Fahrzeugwerk, in dem unter anderem die Modelle Audi Q3 und TT gefertigt werden. Das Werk zeichnet sich durch höchste technologische Standards, innovative Produktionsmethoden und eine starke Ausrichtung auf die Elektromobilität aus. Tausende hochqualifizierte Ingenieure und Facharbeiter sorgen dafür, dass täglich tausende Motoren und Fahrzeuge den Standort verlassen. Audi Hungaria ist zudem ein wichtiger Partner der Wissenschaft und arbeitet eng mit der regionalen Universität zusammen. Die Ansiedlung von Audi hat Győr zu einer der wohlhabendsten und dynamischsten Städte Ungarns gemacht und die gesamte Region zu einem globalen Zentrum der Automobilindustrie transformiert.",
      hu: "Az Audi Hungaria Győrben a világ egyik legnagyobb és legmodernebb ipari létesítménye, a magyar exportgazdaság tartóoszlopa. 1993-as alapítása óta a gyár a világ legnagyobb motorgyárává nőtte ki magát, amely szinte az összes Audi és Volkswagen modellt kiszolgálja. Emellett Győrben teljes autógyártás is zajlik, itt készülnek többek között az Audi Q3 és TT modellek. Az üzem a legmagasabb technológiai színvonalat és innovatív gyártási módszereket képviseli, nagy hangsúlyt fektetve az elektromos mobilitásra. Több ezer mérnök és szakmunkás dolgozik a gyárban, amely a régió tudományos életének is motorja. Az Audi megjelenése Győrt az ország egyik legdinamikusabb városává és globális autóipari központtá tette. Földrajz K8 – Az autóipar szerepe a modern gazdaságban.",
      ro: "Fabrica Audi din Győr (Audi Hungaria) este cea mai mare fabrică de motoare din lume și un pilon central al industriei auto globale. Inaugurată în 1993, unitatea a transformat orașul Győr într-un centru tehnologic de elită, producând motoare pentru aproape toate mărcile grupului Volkswagen. Pe lângă producția de motoare, fabrica asamblează modele de succes precum Audi TT și Audi Q3. Procesul de producție este un exemplu de eficiență și inovație, utilizând energie regenerabilă și procese logistice verzi. Audi Hungaria colaborează strâns cu Universitatea Széchenyi István, formând generații de ingineri și cercetători de top. Geografie K8 – Industria auto și dezvoltarea regională.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Audi Hungaria wurde 1993 gegründet und startete zunächst als reines Motorenwerk.",
      "Der Standort in Győr ist heute das größte Motorenwerk der Welt.",
      "Seit 1998 werden in Győr auch komplette Fahrzeuge produziert, beginnend mit dem Audi TT.",
      "Das Werk verfügt über eine der größten Photovoltaik-Dachanlagen Europas zur nachhaltigen Energiegewinnung.",
      "Audi ist der größte Exporteur Ungarns und einer der bedeutendsten Arbeitgeber des Landes.",
      "Das Unternehmen betreibt in Győr ein eigenes Werkzeugbau-Zentrum für internationale Projekte.",
      "In Zusammenarbeit mit der Universität Győr wurde ein Lehrstuhl für Fahrzeugtechnik etabliert.",
      "Das Werk in Győr ist seit 2020 bilanziell CO2-neutral in seiner Produktion."
      ],
      hu: ["Az Audi Hungaria 1993-ban kezdte meg működését tisztán motorgyárként.", "Jelenleg ez a világ legnagyobb motorgyára, napi több ezer egységnyi kapacitással.", "1998-tól teljes járműgyártás is folyik, az első modell az Audi TT volt.", "Az üzem Európa egyik legnagyobb tetőre szerelt napelemparkjával rendelkezik.", "Az Audi Magyarország legnagyobb exportőre és egyik legjelentősebb munkaadója.", "Saját szerszámgyárat is működtetnek, amely nemzetközi projekteket szolgál ki.", "A győri egyetemmel szoros együttműködésben járműipari tanszéket hoztak létre.", "2020 óta az üzem gyártási folyamata mérleg szerint CO2-semleges."],
      ro: ["Fabrica din Győr produce peste 1,6 milioane de motoare anual.", "Peste 12.000 de angajați lucrează direct în cadrul complexului Audi Hungaria.", "Audi Hungaria este cel mai mare exportator al Ungariei după cifra de afaceri.", "Unitatea a produs peste 40 de milioane de motoare de la înființare până în 2021.", "Producția de energie termică este asigurată în mare parte prin energie geotermală.", "Aici funcționează unul dintre cele mai avansate centre de cercetare și dezvoltare din Europa."],
      en: []
    },
  },
  {
    id: "historical-debreceni-egyetem-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.623, 47.554],
    name: {de: "Universität Debrecen", hu: "Debreceni Egyetem főépület", ro: "Universitatea din Debrecen", en: "University of Debrecen Main Building"},
    description: {
      de: "Das monumentale Hauptgebäude einer der ältesten Universitäten Ungarns.",
      hu: "Magyarország egyik legrégebbi egyetemének monumentális főépülete.",
      ro: "Clădirea principală monumentală a uneia dintre cele mai vechi universități din Ungaria.",
      en: "The monumental main building of one of Hungary's oldest universities."
    },
    facts: {
      de: ["Imposanter Vorplatz.", "Historische Glasmalereien."],
      hu: ["Impozáns előtérrel rendelkezik.", "Történelmi üvegablakok."],
      ro: ["Piață monumentală în față.", "Vitralii istorice."],
      en: ["Imposing front square.", "Historic stained glass windows."]
    },
    descriptionAdvanced: {
      de: "Das Hauptgebäude der Universität Debrecen ist ein architektonisches Monument und ein Wahrzeichen der 'kalvinistischen Metropole'. Das im neobarocken Stil errichtete Gebäude beeindruckt durch seine monumentale Größe, die prachtvolle Fassade und den weitläufigen Vorplatz mit seinem kunstvollen Springbrunnen. Die Universität blickt auf eine Tradition zurück, die bis zum Reformierten Kollegium im 16. Jahrhundert reicht, und ist heute eine der führenden Bildungseinrichtungen des Landes. Besonders sehenswert ist der glasüberdachte Innenhof, der als Aula dient und einen majestätischen Rahmen für akademische Feierlichkeiten bietet. Die Universität ist nicht nur ein Ort des Lernens, sondern auch ein kulturelles Zentrum mit einer bedeutenden Bibliothek und botanischen Gärten. Die Statuen bedeutender Gelehrter auf dem Campus zeugen vom intellektuellen Erbe der Stadt. Als eine der ältesten kontinuierlich betriebenen Hochschulen Ungarns verbindet die Universität Debrecen historische Pracht mit modernster Forschung und Lehre auf internationalem Niveau.",
      hu: "A Debreceni Egyetem főépülete monumentális építészeti alkotás és a „kálvinista Róma” egyik legfontosabb jelképe. A neobarokk stílusú palota méreteivel, díszes homlokzatával és az előtte elterülő tágas, szökőkutas parkkal nyűgözi le a látogatókat. Az egyetem gyökerei a 16. századi Református Kollégiumig nyúlnak vissza, ma pedig az ország egyik vezető felsőoktatási intézménye. Különösen látványos az üvegtetős belső udvar, az aula, amely méltó helyszíne a rangos akadémiai ünnepségeknek. Az épület nemcsak az oktatás vára, hanem kulturális központ is, jelentős könyvtárral és botanikus kerttel. A campus területén álló szobrok a város gazdag szellemi örökségét idézik, összekötve a múltat a modern kutatással. Történelem K8 – Felsőoktatás és építészet Magyarországon.",
      ro: "Universitatea din Debrecen este una dintre cele mai prestigioase instituții de învățământ superior din Ungaria, având o istorie continuă ce datează de la înființarea Colegiului Reformat în 1538. Clădirea centrală, o capodoperă arhitecturală monumentală în stil neoclasic și baroc, a fost inaugurată în 1932 și domină parcul Nagyerdei cu fațada sa impunătoare și curtea interioară acoperită cu sticlă. Universitatea este un centru de excelență în medicină, agricultură și științe, atrăgând mii de studenți internaționali. Biblioteca universitară este a doua ca mărime din țară, fiind un tezaur de cunoaștere. Este simbolul statutului orașului Debrecen ca 'Roma calvină' și centru intelectual. Istorie K8 – Evoluția învățământului superior.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das monumentale Hauptgebäude wurde im Jahr 1932 in Anwesenheit des Reichsverwesers eingeweiht.",
      "Die Universität geht auf das 1538 gegründete Reformierte Kollegium von Debrecen zurück.",
      "Die Aula im Innenhof ist 700 Quadratmeter groß und wird von einer beeindruckenden Glaskuppel gekrönt.",
      "Hinter dem Hauptgebäude erstreckt sich der Botanische Garten der Universität mit über 5.000 Pflanzenarten.",
      "Die Universitätsbibliothek von Debrecen ist die größte Provinzbibliothek des Landes.",
      "An der Fassade befinden sich Reliefs, die die Geschichte der Fakultäten und der Stadt darstellen.",
      "Debrecen ist die zweitgrößte Stadt Ungarns und wird oft als 'Rom des Kalvinismus' bezeichnet.",
      "Die Universität beherbergt Studenten aus over 100 Nationen, was sie zu einem internationalen Zentrum macht."
      ],
      hu: ["A monumentális főépületet 1932-ben avatták fel nagyszabású ünnepség keretében.", "Az egyetem közvetlen elődje az 1538-ban alapított Debreceni Református Kollégium.", "Belső aulája 700 négyzetméteres és lenyűgöző üvegkupola borítja.", "Az épület mögött terül el az egyetemi botanikus kert több mint 5000 növényfajjal.", "A Debreceni Egyetemi Könyvtár az ország legnagyobb vidéki könyvtára.", "Homlokzatán domborművek hirdetik a különböző tudományágak fontosságát.", "Debrecen a második legnagyobb magyar város, az ország keleti régiójának központja.", "Az egyetemen több mint 100 nemzet diákjai tanulnak, valódi nemzetközi környezetben."],
      ro: ["Universitatea este succesoarea directă a Colegiului Reformat fondat în 1538.", "Clădirea principală are o fațadă de 108 metri lungime și un turn central impunător.", "Curtea interioară cu tavan de sticlă este utilizată pentru ceremonii academice majore.", "Peste 30.000 de studenți învață anual în cadrul celor 14 facultăți ale universității.", "Grădina Botanică a universității deține o colecție rară de cactuși și plante tropicale.", "Fântâna arteziană din fața clădirii principale este un loc emblematic de întâlnire."],
      en: []
    },
  },
  {
    id: "historical-hortobagyi-pasztormuzeum-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.148, 47.581],
    name: {de: "Hirtenmuseum Hortobágy", hu: "Hortobágyi Pásztormúzeum", ro: "Muzeul Păstorilor din Hortobágy", en: "Hortobagy Shepherd Museum"},
    description: {
      de: "Ein Museum, das das traditionelle Leben der Hirten in der Puszta präsentiert.",
      hu: "A pusztai pásztorélet hagyományait bemutató múzeum.",
      ro: "Un muzeu care prezintă viața tradițională a păstorilor din Puszta.",
      en: "A museum showcasing the traditional lifestyle of shepherds in the Puszta."
    },
    facts: {
      de: ["In einem alten Stall.", "Ganzjährig geöffnet."],
      hu: ["Egy régi szekérállásban van.", "Egész évben látogatható."],
      ro: ["Într-un vechi grajd.", "Deschis tot anul."],
      en: ["Housed in an old stable.", "Open all year round."]
    },
    descriptionAdvanced: {
      de: "Das Hirtenmuseum in Hortobágy ist das Herzstück des Nationalparks und vermittelt einen tiefen Einblick in das traditionelle Leben in der ungarischen Puszta. Es ist in einem historischen Gebäude untergebracht, das früher als Remise für Pferdefuhrwerke diente. Die Ausstellungen zeigen die jahrhundertealte Kultur der Hirten, ihre kunstvoll gefertigten Gebrauchsgegenstände, Trachten und die Hierarchie innerhalb der Hirtengemeinschaft. Besucher erfahren hier, wie die Menschen im Einklang mit der rauen Natur der Tiefebene lebten und ihre Herden aus Graurindern, Zackelschafen und Pferden hüteten. Die Puszta von Hortobágy ist UNESCO-Welterbe, und das Museum erklärt die Bedeutung dieser einzigartigen Kulturlandschaft. Durch lebensnahe Dioramen und historische Fotografien wird die Vergangenheit lebendig und vermittelt den Stolz und die Freiheit des Hirtenlebens. Direkt neben dem Museum befindet sich die berühmte 'Neunbögige Brücke', das Wahrzeichen der Region, was den Ort zu einem unverzichtbaren Ziel für jeden Besucher der Puszta macht.",
      hu: "A Hortobágyi Pásztormúzeum a nemzeti park szíve, amely mély betekintést nyújt a pusztai élet hagyományaiba. A múzeum egy 18. századi műemlék épületben kapott helyet, amely egykor szekérállásként szolgált. A kiállítás bemutatja a pásztorok évszázados kultúráját, művészien kifaragott használati tárgyaikat, viseletüket és a közösségen belüli szigorú rendet. Megismerhetjük, hogyan éltek együtt a természettel a végtelen rónaságon, terelve a szürkemarha-gulyákat és rackanyájakat. A hortobágyi puszta az UNESCO Világörökség része, a múzeum pedig segít megérteni e táj kulturális jelentőségét. Az épület mellett álló híres Kilenclyukú híd a vidék jelképe, így a múzeum elengedhetetlen állomása minden pusztát felfedező látogatónak. Néprajz K6 – Pásztorélet és pusztai hagyományok.",
      ro: "Muzeul Păstorilor din Hortobágy, situat lângă celebrul Pod cu Nouă Arcuri, oferă o incursiune autentică în viața și tradițiile nomade ale păstorilor din stepa maghiară (Puszta). Clădirea muzeului a fost inițial un han pentru negustori, construit la sfârșitul secolului al XVIII-lea. Expoziția prezintă obiecte de uz cotidian, costume tradiționale din piele de oaie și tehnici de creștere a animalelor specifice regiunii, precum vitele gri maghiare și oile Racka. Păstorii din Hortobágy au păstrat un set unic de abilități și un limbaj simbolic care reflectă legătura profundă cu natura aspră a stepei. Este un loc esențial pentru înțelegerea culturii populare maghiare de câmpie. Istorie K5 – Tradițiile păstorești din Puszta.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Museum ist in einem denkmalgeschützten Gebäude aus dem 18. Jahrhundert untergebracht.",
      "Hortobágy ist die größte zusammenhängende natürliche Grassteppe (Puszta) in Mitteleuropa.",
      "Die Ausstellung dokumentiert die verschiedenen Hirtengruppen wie Csikós (Pferdehirten) und Gulyás (Rinderhirten).",
      "Besonders sehenswert sind die handgeschnitzten Trinkhörner und die berühmten ungarischen Hirtenmäntel (Suba).",
      "Hortobágy wurde 1999 aufgrund seiner einzigartigen Hirtenkultur in die Liste des UNESCO-Welterbes aufgenommen.",
      "In der Nähe des Museums findet jährlich der traditionelle Brückenmarkt statt.",
      "Das Museum bietet interaktive Elemente, die zeigen, wie Hirten in der weiten Ebene navigierten.",
      "Hortobágy ist auch für seine traditionellen Gasthöfe (Csárda) bekannt, die regionale Spezialitäten anbieten."
      ],
      hu: ["A múzeum épülete korábban az utazók lovas kocsijainak pihenőhelye volt.", "Hortobágy Közép-Európa legnagyobb összefüggő természetes füves pusztája.", "A tárlat bemutatja a csikósok, gulyások és juhászok közötti különbségeket.", "Különösen értékesek a kézzel vésett ivótülkök és a hímzett cifraszűrök.", "A hortobágyi pásztorkultúra 1999 óta része a világörökségnek.", "A múzeum közelében tartják minden évben a hagyományos hídi vásárt.", "Interaktív elemek mutatják be, hogyan tájékozódtak a pásztorok a síkságon.", "A környéken számos hagyományos csárda várja a pusztai ételekre vágyókat."],
      ro: ["Muzeul funcționează într-o clădire monument istoric construită în 1785.", "Expoziția detaliază ierarhia păstorilor, de la 'csikós' (păstor de cai) la 'gulyás' (păstor de vite).", "Pot fi văzute unelte tradiționale sculptate în os și coarne de vită.", "Hortobágy este prima rezervație naturală din Ungaria, înființată în 1973.", "Păstoritul tradițional din Hortobágy face parte din Patrimoniul Mondial UNESCO.", "În apropiere se desfășoară anual Târgul de la Pod, un eveniment secular."],
      en: []
    },
  },
  {
    id: "historical-deri-muzeum-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.622, 47.532],
    name: {de: "Déri-Museum", hu: "Déri Múzeum", ro: "Muzeul Déri", en: "Déri Museum"},
    description: {
      de: "Ein bedeutendes Museum in Debrecen, bekannt für die Munkácsy-Trilogie.",
      hu: "Debrecen jelentős múzeuma, híres a Munkácsy-trilógiáról.",
      ro: "Un muzeu important din Debrecen, celebru pentru trilogia lui Munkácsy.",
      en: "A significant museum in Debrecen, famous for the Munkácsy trilogy."
    },
    facts: {
      de: ["Reiche Sammlungen.", "Ägyptische Ausstellung."],
      hu: ["Gazdag gyűjtemények.", "Egyiptomi kiállítással."],
      ro: ["Colecții bogate.", "Expoziție egipteană."],
      en: ["Rich collections.", "Features an Egyptian exhibition."]
    },
    descriptionAdvanced: {
      de: "Das Déri-Museum in Debrecen gehört zu den bedeutendsten Kultureinrichtungen Ungarns und ist weltberühmt für seine einzigartige Sammlung. Das prachtvolle Gebäude im neoklassizistischen Stil beherbergt Schätze aus verschiedensten Epochen und Weltkulturen. Das absolute Highlight des Museums ist die monumentale Christus-Trilogie des ungarischen Malers Mihály Munkácsy, deren gewaltige Leinwände in einem speziell dafür errichteten Saal die Besucher in ihren Bann ziehen. Neben dieser nationalen Kostbarkeit bietet das Museum faszinierende Einblicke in die altägyptische Kultur, das Handwerk der Region und die Stadtgeschichte von Debrecen. Die Schenkung des Seidenfabrikanten Frigyes Déri bildete den Grundstock für die vielfältigen Exponate, die von Samurai-Rüstungen bis hin zu archäologischen Funden aus der Puszta reichen. Das Museum ist ein Ort der Staunens und der Bildung, der die lokale Identität mit der Weltgeschichte verknüpft und durch seine abwechslungsreiche Gestaltung Besucher jeden Alters begeistert.",
      hu: "A debreceni Déri Múzeum Magyarország egyik legjelentősebb közgyűjteménye, amely világhírét elsősorban a Munkácsy-trilógiának köszönheti. Az impozáns neoklasszicista épület a város szívében ad otthont a különböző korokból és kultúrákból származó kincseknek. A múzeum legfontosabb látnivalója Munkácsy Mihály monumentális Krisztus-trilógiája, amelynek hatalmas vásznai egy különlegesen kialakított teremben nyűgözi le a látogatókat. Emellett az intézmény gazdag egyiptomi gyűjteménnyel, helytörténeti és néprajzi kiállításokkal is büszkélkedhet. A névadó Déri Frigyes selyemgyáros nagylelkű adománya alapozta meg a gyűjteményt, amely a szamuráj fegyverektől a pusztai leletekig terjed. A múzeum Debrecen kulturális ékszerdoboza. Művészettörténet K7 – Munkácsy Mihály élete és művészete.",
      ro: "Muzeul Déri din Debrecen este una dintre cele mai importante și bogate instituții muzeale din Ungaria, fiind celebru la nivel mondial pentru găzduirea 'Trilogiei lui Munkácsy'. Clădirea barocă impunătoare a fost construită special pentru a adăposti colecția privată a producătorului de mătase Frigyes Déri, care a donat orașului obiecte de artă de o valoare inestimabilă. Vizitatorii pot explora secțiuni dedicate Egiptului Antic, samurailor japonezi și istoriei locale, dar punctul culminant este sala monumentală unde sunt expuse cele trei picturi gigantice ale lui Mihály Munkácsy despre patimile lui Iisus. Muzeul este un centru cultural de elită, oferind o perspectivă globală asupra artei și istoriei. Istorie K7 – Marile colecții de artă ale lumii.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Museum wurde 1930 eröffnet und basiert auf der privaten Schenkung von Frigyes Déri.",
      "Mihály Munkácsys Trilogie (Christus vor Pilatus, Ecce Homo, Golgatha) ist das Herzstück der Ausstellung.",
      "Die ägyptische Abteilung zeigt zwei echte Mumien und wertvolle Grabbeigaben.",
      "Vor dem Museum stehen vier preisgekrönte Bronzestatuen des Bildhauers Ferenc Medgyessy.",
      "Die ethnografische Sammlung präsentiert die traditionelle Handwerkskunst der Region Hajdúság.",
      "Das Gebäude wurde nach den Plänen der Architekten Dénes Györgyi und Aladár Münnich errichtet.",
      "Im Museum befindet sich auch eine bedeutende numismatische Sammlung mit seltenen Münzen.",
      "Regelmäßig finden moderne Wechselausstellungen statt, die einen Bogen zur Gegenwart schlagen."
      ],
      hu: ["A múzeum 1930-ban nyílt meg, alapját Déri Frigyes magángyűjteménye képezi.", "Munkácsy Mihály három festménye (Krisztus Pilátus előtt, Ecce Homo, Golgota) a tárlat ékköve.", "Az egyiptomi osztályon két valódi múmia és értékes sírmellékletek láthatók.", "A múzeum előtt álló négy bronzszobor Medgyessy Ferenc díjnyertes alkotása.", "Néprajzi anyaga a hajdúsági paraszti világ és kézművesség remekeit mutatja be.", "Az épületet Györgyi Dénes és Münnich Aladár építészek tervezték.", "Jelentős éremgyűjteménnyel rendelkezik, mely ritka történelmi pénzeket őriz.", "Rendszeresen szerveznek tematikus éjszakai tárlatvezetéseket a látogatóknak."],
      ro: ["Trilogia lui Munkácsy cuprinde pânzele: 'Cristos în fața lui Pilat', 'Ecce Homo' și 'Golgota'.", "Colecția Déri conține peste 30.000 de obiecte de artă și artefacte istorice.", "Cele patru statui de bronz din fața muzeului au câștigat premiul mare la Expoziția Mondială de la Paris din 1937.", "Muzeul a fost inaugurat oficial în anul 1930.", "Expoziția de arme și armuri japoneze este una dintre cele mai mari din Europa Centrală.", "Camera mumiilor egiptene include două sarcofage autentice vechi de mii de ani."],
      en: []
    },
  },
  {
    id: "animal-habitat-nagyerdei-kulturpark-extra",
    type: "animal-habitat",
    parent: "HU-HB",
    coords: [21.635, 47.55],
    name: {de: "Kulturpark Debrecen", hu: "Nagyerdei Kultúrpark", ro: "Parcul de Cultură Debrecen", en: "Nagyerdei Culture Park"},
    description: {
      de: "Kombination aus Zoo und Vergnügungspark im großen Wald von Debrecen.",
      hu: "Állatkert és vidámpark ötvözete Debrecenben, a Nagyerdő szívében.",
      ro: "Combinație de grădină zoologică și parc de distracții în Pădurea Mare.",
      en: "A combination of a zoo and an amusement park in the heart of the Great Forest."
    },
    facts: {
      de: ["1958 eröffnet.", "Über 160 Tierarten."],
      hu: ["1958-ban nyílt meg.", "Több mint 160 állatfaj."],
      ro: ["Deschis în 1958.", "Peste 160 de specii de animale."],
      en: ["Opened in 1958.", "Home to over 160 animal species."]
    },
    descriptionAdvanced: {
      de: "Der Kulturpark im Großen Wald von Debrecen (Nagyerdei Kultúrpark) ist eine einzigartige Kombination aus einem Zoologischen Garten und einem Vergnügungspark. Er war die erste Einrichtung dieser Art in der ungarischen Provinz und liegt inmitten eines jahrhundertealten Naturschutzgebietes. Der Zoo beherbergt eine Vielzahl von Tierarten aus allen Kontinenten, wobei ein Schwerpunkt auf dem Erhalt bedrohter Arten und der Umweltbildung liegt. Besonders beliebt ist die Afrikasavanne und das Tropenhaus. Direkt nebenan bietet der Vergnügungspark mit seinen historischen und modernen Fahrgeschäften Spaß für die ganze Familie. Die schattigen Wege unter den alten Eichen des Großen Waldes machen den Besuch auch an heißen Sommertagen sehr angenehm. Der Park ist ein traditionsreicher Ort der Erholung für die Bewohner von Debrecen und bietet eine harmonische Mischung aus Naturerlebnis, Tierbeobachtung und Unterhaltung. Regelmäßige Veranstaltungen wie die 'Nacht im Zoo' machen den Park zu einem lebendigen Zentrum für Freizeit und Bildung.",
      hu: "A debreceni Nagyerdei Kultúrpark az ország első olyan intézménye, amely az állatkert és a vidámpark élményét ötvözi. A város évszázados védett erdejében, a Nagyerdőben elhelyezkedő park harmonikus kikapcsolódást nyújt a természet és a szórakozás kedvelőinek. Az állatkert több mint száz állatfajnak ad otthont, nagy hangsúlyt fektetve a fajmegőrzésre és az oktatásra. Különösen népszerű az Afrika-kifutó és a trópusi ház. A közvetlen szomszédságában lévő vidámpark nosztalgikus és modern játékaival a családok kedvence. Az öreg tölgyek alatti hűvös sétányok a legnagyobb hőségben is kellemes klímát biztosítanak. A kultúrpark Debrecen egyik legkedveltebb pihenőövezete, ahol a tudás és a játék kéz a kézben jár. Természetismeret K5 – Városi erdők és állatvilág.",
      ro: "Parcul Cultural Nagyerdei din Debrecen combină prima grădină zoologică din afara capitalei cu un parc de distracții tradițional, totul situat în Pădurea Mare (Nagyerdei). Inaugurat în 1958, complexul oferă o experiență recreativă diversă, punând accent pe specii de animale din cinci continente și pe divertismentul familial clasic. Grădina zoologică participă la numeroase programe europene de conservare, fiind celebră pentru succesul în reproducerea unor specii rare precum girafa și hipopotamul pitic. Parcul de distracții păstrează farmecul retro al anilor '60, având un carusel istoric și un trenuleț care trece prin pădure. Este destinația preferată a locuitorilor orașului pentru relaxare și educație în natură. Științele Naturii K5 – Animale și recreere.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo von Debrecen wurde 1958 als erster Zoo außerhalb der Hauptstadt Budapest eröffnet.",
      "Der Park erstreckt sich über eine Fläche von rund 17 Hektar im geschützten Großen Wald.",
      "Es werden over 160 Tierarten gezeigt, darunter seltene Giraffen, Tiger und Rote Pandas.",
      "Der angeschlossene Vergnügungspark verfügt über nostalgische Karussells aus den 1950er Jahren.",
      "Der Nagyerdei Kultúrpark ist Mitglied in den wichtigsten internationalen Zoo-Vereinigungen (EAZA, WAZA).",
      "Ein besonderes Highlight ist das jährliche Blumenkarneval-Wochenende im August.",
      "Der Park legt großen Wert auf pädagogische Programme und besitzt eine eigene Zooschule.",
      "Der 'Große Wald' selbst ist seit 1939 das erste staatliche Naturschutzgebiet Ungarns."
      ],
      hu: ["1958-ban nyílt meg az első vidéki állatkertként Magyarországon.", "A park mintegy 17 hektáros területet foglal el a védett Nagyerdőben.", "Több mint 160 állatfaj látható itt, köztük ritka zsiráfok és vörös pandák.", "A csatlakozó vidámparkban az 1950-es évekből származó körhinták is működnek.", "Tagja a legjelentősebb nemzetközi állatkerti szövetségeknek (EAZA, WAZA).", "A Debreceni Virágkarnevál idején a park kiemelt rendezvényhelyszín.", "Saját állatkerti iskolája segíti a gyermekek környezettudatos nevelését.", "A Nagyerdő maga 1939 óta az ország első természetvédelmi területe."],
      ro: ["Grădina zoologică găzduiește peste 160 de specii de animale din întreaga lume.", "Este situată pe o suprafață de 17 hectare în interiorul primei păduri protejate din Ungaria.", "Parcul de distracții deține un carusel din anul 1896, încă funcțional.", "Roata uriașă oferă o panoramă spectaculoasă asupra parcului Nagyerdei.", "Succesul în reproducerea girafei reticulate este recunoscut la nivel internațional.", "Anual, peste 300.000 de vizitatori vizitează complexul cultural."],
      en: []
    },
  },
  {
    id: "industry-bmw-debrecen-extra",
    type: "industry",
    parent: "HU-HB",
    coords: [21.5, 47.58],
    name: {de: "BMW Werk Debrecen", hu: "BMW Gyár Debrecen", ro: "Fabrica BMW Debrecen", en: "BMW Plant Debrecen"},
    description: {
      de: "Ein hochmodernes Automobilwerk von BMW, das sich auf E-Mobilität spezialisiert.",
      hu: "A BMW ultramodern autógyára, amely az e-mobilitásra fókuszál.",
      ro: "Fabrica auto ultramodernă a BMW, specializată în e-mobilitate.",
      en: "BMW's state-of-the-art car plant, focusing on e-mobility."
    },
    facts: {
      de: ["In Bau/Inbetriebnahme.", "Fokus auf Nachhaltigkeit."],
      hu: ["Építés/beüzemelés alatt.", "Fenntarthatósági fókusz."],
      ro: ["În construcție/punere în funcțiune.", "Focus pe sustenabilitate."],
      en: ["Under construction/commissioning.", "Focuses on sustainability."]
    },
    descriptionAdvanced: {
      de: "Das neue BMW-Werk in Debrecen ist eines der zukunftsweisendsten Industrieprojekte in Europa und ein Meilenstein für die Elektromobilität. Es ist das weltweit erste Werk der BMW Group, das konsequent nach dem Prinzip der 'iFACTORY' konzipiert wurde – es ist also vollständig digitalisiert, nachhaltig und hochflexibel. Hier wird ab Mitte der 2020er Jahre die 'Neue Klasse', die nächste Generation von vollelektrischen Fahrzeugen, vom Band laufen. Das Werk setzt neue Maßstäbe im Umweltschutz, indem es komplett auf fossile Brennstoffe verzichtet und seinen Energiebedarf aus erneuerbaren Quellen deckt. Die Ansiedlung von BMW hat Debrecen zu einem der wichtigsten Zentren der globalen Automobilindustrie gemacht und zieht zahlreiche Zulieferbetriebe und hochkarätige Forschungsprojekte in die Region. Mit tausenden neuen Arbeitsplätzen und modernster Infrastruktur ist das Werk ein Motor für die wirtschaftliche Entwicklung in Ostungarn und ein Symbol für den technologischen Wandel in der gesamten Branche.",
      hu: "A debreceni BMW Gyár Európa egyik legmodernebb ipari projektje és az elektromos mobilitás jövőjének mérföldköve. Ez a BMW csoport első olyan üzeme a világon, amelyet teljes egészében az „iFACTORY” koncepció alapján terveztek: teljesen digitalizált, fenntartható és rugalmas. A 2020-as évek közepétől itt indul el a „Neue Klasse” gyártása, amely a BMW tisztán elektromos autóinak legújabb generációja. Az üzem környezetvédelmi szempontból is példaértékű, hiszen teljesen mentes a fosszilis tüzelőanyagól, energiáját megújuló forrásokból nyeri. A beruházás Debrecent globális autóipari központtá emelte, számos beszállítót és kutatási projektet vonzva a régióba, több ezer új munkahelyet teremtve. Földrajz K8 – Fenntartható ipar és e-mobilitás.",
      ro: "Noua fabrică BMW din Debrecen reprezintă viitorul industriei auto sustenabile, fiind prima unitate de producție a grupului proiectată exclusiv pentru vehicule electrice. Investiția masivă de peste 2 miliarde de euro transformă Debrecen într-un pol industrial global de ultimă generație, implementând conceptul de 'iFACTORY' bazat pe digitalizare, sustenabilitate și circularitate. Fabrica va produce noua generație de modele electrice BMW, denumită 'Neue Klasse', utilizând procese care elimină complet emisiile de CO2 și reduc consumul de apă. Această dezvoltare industrială aduce schimbări majore în infrastructura regiunii și oferă oportunități de carieră pentru mii de tineri specialiști maghiari și internaționali. Geografie K8 – Inovația tehnologică și industria verde.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Entscheidung für den Standort Debrecen wurde 2018 bekannt gegeben.",
      "Das Werk ist für eine jährliche Produktionskapazität von rund 150.000 Fahrzeugen ausgelegt.",
      "Debrecen ist das erste BMW-Werk weltweit, das CO2-frei und ohne fossile Energieträger operiert.",
      "Hier wird die 'Neue Klasse' eingeführt, die Basis für alle zukünftigen Elektro-Modelle von BMW.",
      "Das Gelände des Werks umfasst eine Fläche von over 400 Hektar.",
      "BMW investiert über zwei Milliarden Euro in den Aufbau des Standorts und der Batterieproduktion.",
      "Das Unternehmen fördert lokale Bildungsprogramme und kooperiert eng mit der Universität Debrecen.",
      "Das Werk verfügt über eine direkte Anbindung an das ungarische Autobahn- und Schienennetz."
      ],
      hu: ["A debreceni helyszínről szóló döntést 2018-ban jelentették be.", "A gyár éves termelési kapacitását 150 000 gépkocsira tervezték.", "Ez az első BMW gyár a világon, amely CO2-kibocsátás nélkül üzemel.", "Itt mutatkozik be a „Neue Klasse” modellcsalád, a márka jövőjének alapja.", "Az ipari terület nagysága meghaladja a 400 hektárt.", "A BMW több mint kétmilliárd eurót fektet be a telephely és az akkumulátorgyár felépítésébe.", "Az egyetemmel szoros együttműködésben támogatják a helyi mérnökképzést.", "Közvetlen autópálya- és vasúti összeköttetéssel rendelkezik a nemzetközi hálózathoz."],
      ro: ["Fabrica se întinde pe o suprafață de peste 400 de hectare în zona industrială de nord.", "Capacitatea planificată de producție este de aproximativ 150.000 de unități pe an.", "Procesele de producție vor funcționa fără utilizarea combustibililor fosili.", "Prima mașină de serie 'Neue Klasse' este programată să iasă de pe bandă în 2025.", "Peste 1.500 de locuri de muncă directe vor fi create în prima fază a proiectului.", "BMW Debrecen va include și o unitate de asamblare de baterii de înaltă tensiune."],
      en: []
    },
  },
  {
    id: "historical-siroki-var-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.196, 47.94],
    name: {de: "Burg Sirok", hu: "Siroki vár", ro: "Cetatea Sirok", en: "Sirok Castle"},
    description: {
      de: "Eine faszinierende Felsenburg im Mátra-Gebirge mit vielen Höhlengängen.",
      hu: "Lenyűgöző sziklavár a Mátrában, számos sziklába vájt folyosóval.",
      ro: "O cetate de stâncă fascinantă în munții Mátra, cu multe galerii săpate.",
      en: "A fascinating rock castle in the Mátra Mountains with many carved tunnels."
    },
    facts: {
      de: ["Strategische Lage.", "Vulkanische Felsen."],
      hu: ["Stratégiai elhelyezkedés.", "Vulkanikus kőzeten áll."],
      ro: ["Poziție strategică.", "Pe roci vulcanice."],
      en: ["Strategic location.", "Built on volcanic rocks."]
    },
    descriptionAdvanced: {
      de: "Die Burg von Sirok ist eine der faszinierendsten und geheimnisvollsten Festungsanlagen Ungarns, da sie teilweise direkt in die vulkanischen Felsen des Mátra-Gebirges gehauen wurde. Die Ruine thront spektakulär auf einem steilen Gipfel und bietet einen atemberaubenden Blick über die umliegenden Täler und Wälder. Besonders beeindruckend ist das weitverzweigte System von Höhlengängen und unterirdischen Kasematten, die von den Verteidigern in den weichen Tuffstein getrieben wurden. Die Geschichte der Burg reicht bis in die Zeit nach dem Mongoleneinfall zurück, und sie war im 16. Jahrhundert ein wichtiger Teil des Grenzfestungssystems gegen die Türken. Heute können Besucher die rekonstruierten Ober- und Unterburgen erkunden und durch die dunklen Felsengänge wandern, die eine fast mystische Atmosphäre ausstrahlen. Die Sage von der schönen Helena, die sich vor Trauer von den Burgmauern stürzte, ist bis heute lebendig. Die Burg Sirok ist ein Muss für Wanderer und Geschichtsinteressierte, die eine Burg abseits der klassischen Pfade entdecken möchten.",
      hu: "A siroki vár Magyarország egyik legkülönlegesebb erődítménye, hiszen egyes részeit közvetlenül a Mátra vulkanikus szikláiba vájták. A rom fenségesen trónol a hegycsúcson, lenyűgöző kilátást nyújtva a környező völgyekre. Különlegessége a sziklába faragott folyosórendszer és a földalatti kazamaták, melyeket a védők a puha tufakőbe vágtak. Története a tatárjárás utáni időkre nyúlik vissza, és a 16. században fontos láncszeme volt a török elleni végvárrendszernek. A látogatók bejárhatják a felújított alsó és felső várat, sétálhatnak a sötét sziklaalagutakban, melyek misztikus hangulatot árasztanak. A várhoz fűződő legendák, mint a szikláról mélybe ugró szép Helénáé, ma is élnek a környéken. Történelem K6 – Sziklavárak és végvári élet.",
      ro: "Cetatea din Sirok este una dintre cele mai fascinante fortificații 'sculptate în stâncă' din Ungaria, situată pe o creastă vulcanică a Munților Mátra. Construită inițial în secolul al XIII-lea, cetatea a fost parțial săpată direct în tuf vulcanic, având un sistem complex de coridoare și încăperi subterane care serveau drept depozite și locuințe. Poziția sa strategică oferea control total asupra văii Tarna, fiind o verigă importantă în sistemul defensiv împotriva turcilor. Ruinele actuale, restaurate parțial, păstrează turnul principal și tunelurile misterioase, oferind o experiență autentică de explorare. Legendele locale vorbesc despre comori ascunse în inima muntelui de către apărătorii cetății. Istorie K6 – Cetăți de piatră și viața militară.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde auf einem vulkanischen Tufffelsen in etwa 296 Metern Höhe errichtet.",
      "Große Teile der Wohnräume und Verteidigungsanlagen wurden direkt aus dem Fels herausgeschlagen.",
      "Im 16. Jahrhundert wurde die Burg kampflos an die Osmanen übergeben, die sie 90 Jahre lang besetzten.",
      "Zwei markante Felsformationen unterhalb der Burg werden als 'Versteinerte Musikanten' bezeichnet.",
      "Die Burg wurde im späten 17. Jahrhundert von kaiserlichen Truppen teilweise gesprengt.",
      "Nach umfassenden Restaurierungen ist die Burg seit 2012 wieder sicher für Touristen zugänglich.",
      "Ein Ausstellungsraum in der Unterburg informiert über das tägliche Leben in der Grenzfestung.",
      "Die Burg ist Teil der nationalen Burgenroute und ein beliebtes Wanderziel im Mátra-Gebirge."
      ],
      hu: ["A vár vulkáni tufa sziklán épült, mintegy 296 méteres magasságban.", "Számos lakóhelyiséget és védművet közvetlenül a sziklából faragtak ki.", "A 16. században harc nélkül került török kézre, akik 90 évig birtokolták.", "A vár alatti jellegzetes sziklaalakzatokat „Bálványköveknek” nevezik.", "A 17. század végén császári parancsra a várat részben felrobbantották.", "A 2012-es nagyszabású felújítás óta biztonságosan látogatható minden része.", "Az alsóvárban berendezett tárlat a végvári katonák mindennapjait mutatja be.", "A vár a nemzeti várprogram része és kedvelt túracélpont a Mátrában."],
      ro: ["Cetatea se află pe vârful vulcanic Várhegy, la o altitudine de 296 de metri.", "Majoritatea încăperilor inferioare au fost săpate manual în roca vulcanică moale.", "A rezistat sub stăpânire otomană timp de 100 de ani, între 1596 și 1696.", "Formațiunile stâncoase din apropiere, 'Călugărul' și 'Călugărița', sunt simboluri ale zonei.", "Există un puț adânc de 20 de metri săpat direct în piatră.", "Restaurarea majoră a căilor de acces și a zidurilor a avut loc în 2012."],
      en: []
    },
  },
  {
    id: "historical-egri-var-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.38, 47.904],
    name: {de: "Burg Eger", hu: "Egri vár", ro: "Cetatea din Eger", en: "Eger Castle"},
    description: {
      de: "Symbol des heldenhaften Widerstands gegen die Osmanen im Jahr 1552.",
      hu: "Az 1552-es török elleni hősies ellenállás jelképe.",
      ro: "Simbolul rezistenței eroice împotriva otomanilor în anul 1552.",
      en: "Symbol of the heroic resistance against the Ottomans in 1552."
    },
    facts: {
      de: ["Nationales Denkmal.", "Interaktive Museen."],
      hu: ["Nemzeti emlékhely.", "Interaktív múzeumok."],
      ro: ["Monument național.", "Muzee interactive."],
      en: ["National heritage site.", "Houses interactive museums."]
    },
    descriptionAdvanced: {
      de: "Die Burg von Eger ist das stolze Symbol des ungarischen Widerstandswillens und eines der wichtigsten nationalen Denkmäler des Landes. Weltberühmt wurde sie durch die heldenhafte Verteidigung im Jahr 1552, als eine kleine Gruppe ungarischer Soldaten unter István Dobó einer gewaltigen osmanischen Übermacht standhielt. Dieser Sieg verhinderte für Jahrzehnte das weitere Vordringen der Türken ins Innere Europas. Die weitläufige Anlage beherbergt heute das István-Dobó-Burgmuseum mit Ausstellungen zu den Kämpfen, der Waffenkunst und dem mittelalterlichen Leben. Besucher können die massiven Bastionen, die unterirdischen Kasematten und die Ruinen der gotischen Kathedrale besichtigen. Jährlich finden historische Festspiele statt, die die Ereignisse von 1552 mit Ritterturnieren und Kanonendonner nachstellen. Die Burg bietet zudem einen fantastischen Blick über die barocke Altstadt von Eger. Für jeden Ungarn ist ein Besuch der Burg eine Reise zum Herzen der nationalen Identität, geprägt von Tapferkeit und Opferbereitschaft.",
      hu: "Az Egri vár a magyar hazaszeretet és a hősies ellenállás legfontosabb szimbóluma. Világhírét az 1552-es ostromnak köszönheti, amikor a Dobó István vezette maroknyi várvédő sereg megállította a hatalmas török túlerőt, ezzel évtizedekre megóvva Európát a további oszmán előrenyomulástól. A vár ma nemzeti emlékhely, ahol a Dobó István Vármúzeum mutatja be a küzdelmek történetét, a fegyverzetet és a várurak életét. A látogatók bejárhatják a hatalmas bástyákat, a földalatti kazamatarendszert és megtekinthetik a gótikus székesegyház romjait is. Évente történelmi fesztiválok idézik fel az 1552-es eseményeket, melyek Gárdonyi Géza „Egri csillagok” című regénye révén minden magyar számára alapvető kulturális élményt jelentenek. Történelem K6 – Az egri diadal és a török háborúk.",
      ro: "Cetatea din Eger este un simbol suprem al eroismului maghiar, renumită pentru asediul legendar din 1552. Sub conducerea căpitanului István Dobó, o mică garnizoană de aproximativ 2.000 de soldați a reușit să înfrângă o armată otomană copleșitoare de peste 40.000 de oameni. Această victorie miraculoasă a oprit înaintarea turcilor spre Europa Centrală timp de decenii. Cetatea este astăzi un loc de pelerinaj național, adăpostind Muzeul Memorial Dobó István, sistemul de cazemate subterane și mormântul căpitanului. Panoramele oferite de pe bastioane asupra orașului baroc Eger sunt spectaculoase, iar evenimentele istorice recreează atmosfera luptei pentru libertate. Istorie K7 – Rezistența antiotomană și eroii naționali.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Belagerung von 1552 dauerte 39 Tage; etwa 2.000 Verteidiger besiegten ein Heer von fast 40.000 Türken.",
      "Die Geschichte der Belagerung wurde im berühmten Roman 'Die Sterne von Eger' von Géza Gárdonyi verewigt.",
      "Innerhalb der Burg befinden sich die Ruinen einer der größten gotischen Kathedralen Ungarns.",
      "Die Kasematten sind ein riesiges unterirdisches Labyrinth, das früher als Schutzraum und Lager diente.",
      "Das Grabmal des Schriftstellers Géza Gárdonyi befindet sich auf dem Gelände der Burg.",
      "Täglich um 15:52 Uhr wird zur Erinnerung an den Sieg eine Kanone auf der Burg abgefeuert.",
      "In der Burgkapelle können Besucher den Eid des István Dobó und seiner Soldaten nachlesen.",
      "Die Burg von Eger wurde 2014 offiziell zum nationalen Kulturerbe erklärt."
      ],
      hu: ["Az 1552-es ostrom 39 napig tartott, ahol mintegy 2000 védő győzött 40 000 török felett.", "A vár története Gárdonyi Géza klasszikus regénye révén vált közismertté.", "A várfalak között találhatók Magyarország egyik legnagyobb gótikus katedrálisának romjai.", "A kazamaták egy hatalmas földalatti labirintust alkotnak, mely egykor raktárként szolgált.", "Gárdonyi Géza író sírja a vár területén, a fülei bástya közelében található.", "Minden nap 15:52-kor ágyúlövéssel emlékeznek a győzelem évére a várban.", "A várkápolnában látható a várvédők esküjének szövege.", "Az Egri várat 2014-ben hivatalosan is a nemzeti kulturális örökség részévé nyilvánították."],
      ro: ["Asediul din 1552 a durat 38 de zile și s-a încheiat cu retragerea turcilor.", "Géza Gárdonyi a imortalizat victoria în romanul 'Stelele din Eger'.", "Sistemul de cazemate (coridoare subterane) are o lungime de peste 3 kilometri.", "În timpul asediului, femeile din Eger au luptat alături de soldați pe ziduri.", "Cetatea a fost în cele din urmă ocupată de turci în 1596, după un al doilea asediu.", "Sala Cavalerilor găzduiește expoziții de arme medievale autentice."],
      en: []
    },
  },
  {
    id: "historical-egri-minaret-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.377, 47.905],
    name: {de: "Minarett von Eger", hu: "Egri minaret", ro: "Minaretul din Eger", en: "Eger Minaret"},
    description: {
      de: "Das nördlichste historische Minarett aus der Zeit der osmanischen Herrschaft.",
      hu: "Az oszmán hódoltság idejéből származó legészakibb történelmi minaret.",
      ro: "Cel mai nordic minaret istoric din perioada stăpânirii otomane.",
      en: "The northernmost historic minaret from the Ottoman era."
    },
    facts: {
      de: ["40 Meter hoch.", "97 Stufen zur Spitze."],
      hu: ["40 méter magas.", "97 lépcső vezet a tetejére."],
      ro: ["40 de metri înălțime.", "97 de trepte până în vârf."],
      en: ["40 meters high.", "97 steps to the top."]
    },
    descriptionAdvanced: {
      de: "Das Minarett von Eger ist eines der markantesten Wahrzeichen der Stadt und ein seltenes bauliches Zeugnis der fast hundertjährigen osmanischen Herrschaft in Ungarn. Es ist das am besten erhaltene und zugleich nördlichste historische Minarett in Mitteleuropa. Das im frühen 17. Jahrhundert aus rotem Sandstein errichtete Bauwerk gehörte ursprünglich zu einer Moschee, die nach der Rückeroberung der Stadt abgerissen wurde. Das Minarett selbst überdauerte die Jahrhunderte und wurde später mit einem christlichen Kreuz an der Spitze gekrönt, um den Sieg des Christentums zu symbolisieren. Mit einer Höhe von 40 Metern prägt es die Silhouette der Stadt. Wer die 97 steilen und engen Stufen der Wendeltreppe zur Aussichtsgalerie erklimmt, wird mit einem spektakulären Rundblick über die Barockstadt Eger belohnt. Das Minarett ist nicht nur ein architektonisches Kuriosum, sondern auch ein Mahnmal für die wechselvolle Geschichte der Region am Schnittpunkt der Kulturen.",
      hu: "Az Egri minaret a város egyik legjellegzetesebb látványossága és a közel százéves török hódoltság egyik legépebb emléke hazánkban. Ez az oszmán építészet legészakibb, máig fennmaradt történelmi emléke Közép-Európában. A 17. század elején vörös homokkőből emelt torony eredetileg egy dzsámihoz tartozott, amelyet a város visszafoglalása után lebontottak. Maga a minaret azonban fennmaradt, és csúcsára később keresztet helyeztek, szimbolizálva a kereszténység győzelmét. 40 méteres magasságával meghatározza Eger barokk belvárosának látképét. Aki vállalja a 97 meredek és szűk lépcsőfok leküzdését, a felső erkélyről lenyűgöző panorámában gyönyörködhet a város felett. Történelem K6 – Török emlékek Magyarországon.",
      ro: "Minaretul din Eger este cel mai nordic monument istoric al erei otomane din Europa și unul dintre cele mai bine conservate din Ungaria. Construit la începutul secolului al XVII-lea din gresie sculptată, minaretul făcea parte inițial dintr-o moschee care a fost ulterior dărâmată. Turnul zvelt, cu 14 laturi și o înălțime de 40 de metri, a supraviețuit încercărilor de distrugere după retragerea turcilor, devenind un punct de reper iconic al orașului. Vizitatorii curajoși pot urca cele 97 de trepte înguste până la balconul superior, de unde pot admira o vedere panoramică unică asupra centrului istoric din Eger. Este un monument rar care reflectă diversitatea istorică și culturală a regiunii. Istorie K8 – Moștenirea otomană în Ungaria.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Minarett wurde um 1600 während der osmanischen Besetzung von Eger erbaut.",
      "Es ist das nördlichste Bauwerk dieser Art aus der Zeit des Osmanischen Reiches in Europa.",
      "Nach der Rückeroberung 1687 versuchten 400 Ochsen vergeblich, den Turm mit Seilen umzureißen.",
      "Das Minarett hat einen 14-eckigen Grundriss und ist 40 Meter hoch.",
      "Die schmale Wendeltreppe im Inneren besteht aus 97 Steinstufen.",
      "Die ursprüngliche Moschee wurde im 19. Jahrhundert zerstört, nur der Turm blieb erhalten.",
      "Das Minarett wurde in den letzten Jahren aufwendig stabilisiert und restauriert.",
      "Die Galerie in 26 Metern Höhe bietet einen der besten Fotopunkte der gesamten Stadt."
      ],
      hu: ["A minaretet 1600 körül építették Eger török megszállása idején.", "Ez az Oszmán Birodalom legészakibb épen maradt emléke Európában.", "A legenda szerint a visszafoglaláskor 400 ökörrel próbálták ledönteni, sikertelenül.", "A torony tizennégyszög alaprajzú és összesen 40 méter magas.", "A belső csigalépcső mindössze 60 centiméter széles, igazi próbatétel a látogatóknak.", "Az eredeti dzsámit a 19. században bontották le, csak a torony maradt meg.", "Az utóbbi években teljes körű statikai megerősítésen és restauráláson esett át.", "A 26 méter magasan lévő körerkély az egyik legjobb fotópont a városban."],
      ro: ["Minaretul are o înălțime totală de 40 de metri.", "Scara interioară în spirală numără exact 97 de trepte de piatră foarte înguste.", "După plecarea turcilor, maghiarii au încercat să dărâme minaretul folosind 400 de boi, dar turnul a rezistat.", "Crucea de fier din vârf a fost adăugată pentru a simboliza victoria creștinismului.", "Este construit pe o bază poligonală cu 14 laturi egale.", "Restaurarea completă a structurii a fost finalizată în anul 2018."],
      en: []
    },
  },
  {
    id: "animal-habitat-gyongyosi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-HE",
    coords: [19.932, 47.785],
    name: {de: "Zoo Gyöngyös", hu: "Gyöngyösi Állatkert", ro: "Grădina Zoologică din Gyöngyös", en: "Gyongyos Zoo"},
    description: {
      de: "Ein kleiner, aber beliebter Zoo am Fuße des Mátra-Gebirges.",
      hu: "Kicsi, de kedvelt állatkert a Mátra lábánál.",
      ro: "O grădină zoologică mică, dar populară, la poalele munților Mátra.",
      en: "A small but popular zoo at the foot of the Mátra Mountains."
    },
    facts: {
      de: ["Besuchernah.", "Viele exotische Tiere."],
      hu: ["Barátságos környezet.", "Sok egzotikus állat."],
      ro: ["Aproape de vizitatori.", "Multe animale exotice."],
      en: ["Visitor-friendly.", "Home to many exotic animals."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Gyöngyös, am Fuße des Mátra-Gebirges gelegen, ist eine charmante und besonders besucherfreundliche Einrichtung. Trotz seiner vergleichsweise geringen Fläche bietet der Zoo eine erstaunliche Vielfalt an Tieren aus aller Welt. Ein Markenzeichen des Zoos ist die Nähe zu den Tieren; viele Gehege sind so gestaltet, dass Besucher die Bewohner hautnah erleben können. Von majestätischen Löwen und Tigern über verspielte Erdmännchen bis hin zu exotischen Reptilien und Vögeln gibt es viel zu entdecken. Ein besonderer Schwerpunkt liegt auf interaktiven Programmen wie Schaufütterungen und Tierbegegnungen, die besonders bei Kindern sehr beliebt sind. Die familiäre Atmosphäre und die übersichtliche Gestaltung machen den Zoo zu einem idealen Ausflugsziel für Familien mit kleineren Kindern. Eingebettet in die malerische Landschaft der Mátra-Region, lässt sich ein Besuch im Zoo wunderbar mit Wanderungen oder einer Fahrt mit der Schmalspurbahn kombinieren. Der Zoo Gyöngyös beweist eindrucksvoll, dass auch kleinere Einrichtungen einen großen Beitrag zur Umweltbildung und zum Tierschutz leisten können.",
      hu: "A Gyöngyösi Állatkert a Mátra lábánál fekvő, családias hangulatú és rendkívül látogatóbarát intézmény. Bár területe kisebb a nagyvárosi állatkertekénél, meglepően gazdag és változatos állatvilágot mutat be a világ minden tájáról. Az állatkert védjegye a közvetlenség: a kifutók kialakítása lehetővé teszi, hogy a látogatók szinte karnyújtásnyira kerüljenek az állatokhoz. A fenséges oroszlánok és tigrisek mellett egzotikus hüllők, majmok és színes madarak is láthatók. Nagy hangsúlyt fektetnek az interaktív programokra, mint a látványetetések és a zoopedagógiai foglalkozások, melyek a gyerekek körében különösen népszerűek. Elhelyezkedése miatt kiváló kiegészítője egy mátrai kirándulásnak, ahol a természet és az állatok szeretete találkozik. Természetismeret K5 – Állatkertek szerepe a fajmegőrzésben.",
      ro: "Grădina Zoologică din Gyöngyös este o destinație familială plină de farmec, situată la poalele Munților Mátra. Deși compactă, grădina se remarcă prin atmosfera sa prietenoasă și prin colecția variată de animale exotice și domestice. Vizitatorii pot vedea feline mari, precum lei și tigri, dar și animale mai mici, cum ar fi lemurienii, care sunt vedetele parcului. Grădina pune un accent deosebit pe experiența directă, oferind zone de mângâiat animale și sesiuni de hrănire supravegheate. Este locul ideal pentru ca tinerii să învețe despre responsabilitatea față de animale într-un cadru natural relaxant, fiind o oprire populară în timpul excursiilor montane. Științele Naturii K3 – Îngrijirea animalelor și habitatele lor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo Gyöngyös wurde im Jahr 2004 als Privatinitiative gegründet.",
      "Er beherbergt heute over 100 verschiedene Tierarten auf einer Fläche von rund 2 Hektar.",
      "Der Zoo ist bekannt für seine erfolgreiche Zucht von weißen Löwen und Tigern.",
      "Es gibt einen großen Streichelzoo, in dem Kinder Kontakt zu Ziegen, Schafen und Alpakas haben können.",
      "Der Zoo bietet regelmäßig Nachtführungen an, bei denen man die Tiere in der Dämmerung erlebt.",
      "Auf dem Gelände befindet sich ein moderner Spielplatz für die jüngsten Besucher.",
      "Der Zoo arbeitet eng mit lokalen Schulen zusammen, um Wissen über bedrohte Tierarten zu vermitteln.",
      "Durch die Lage direkt an der Hauptstraße ist der Zoo sehr leicht für Touristen erreichbar."
      ],
      hu: ["A Gyöngyösi Állatkert 2004-ben nyílt meg magánkezdeményezésként.", "Mára több mint 100 állatfajt mutat be mintegy 2 hektáros területen.", "Híresek a fehér oroszlánok és tigrisek sikeres tartásáról és bemutatásáról.", "Nagy állatsimogatóval rendelkezik, ahol kecskék és alpakák várják a gyerekeket.", "Rendszeresen szerveznek éjszakai túrákat, ahol a ragadozók aktívabb arcát láthatjuk.", "A park területén modern játszótér is szolgálja a legkisebbek kikapcsolódását.", "Szoros kapcsolatot ápolnak a helyi iskolákkal a természetvédelmi nevelésben.", "Könnyen megközelíthető helyen, a város szélén, a főút mentén található."],
      ro: ["Grădina găzduiește peste 80 de specii de animale de pe patru continente.", "Este una dintre puținele grădini zoologice private de succes din Ungaria.", "Lemurienii cu coadă inelată sunt foarte prietenoși și pot fi observați de aproape.", "Grădina dispune de un loc de joacă modern și o zonă de picnic pentru familii.", "Vizitatorii pot participa la 'zoo-pedagogie', lecții interactive despre biologie.", "Parcul este deschis pe tot parcursul anului, oferind experiențe diferite în fiecare sezon."],
      en: []
    },
  },
  {
    id: "industry-matrai-eromu-extra",
    type: "industry",
    parent: "HU-HE",
    coords: [20.06, 47.782],
    name: {de: "Kraftwerk Mátra", hu: "Mátrai Erőmű", ro: "Centrala Electrică Mátra", en: "Matra Power Plant"},
    description: {
      de: "Eines der größten Kraftwerke Ungarns, das Braunkohle aus Tagebauen nutzt.",
      hu: "Magyarország egyik legnagyobb erőműve, amely lignit tüzelésű.",
      ro: "Una dintre cele mai mari centrale electrice din Ungaria, care folosește lignit.",
      en: "One of Hungary's largest power plants, using lignite as its main fuel source."
    },
    facts: {
      de: ["Riesige Schaufelradbagger.", "Zentrum der Energieregion."],
      hu: ["Hatalmas kotrógépek.", "Az energiarégió központja."],
      ro: ["Excavatoare uriașe.", "Centrul regiunii energetice."],
      en: ["Features massive bucket-wheel excavators.", "Center of the energy region."]
    },
    descriptionAdvanced: {
      de: "Das Kraftwerk Mátra in Visonta ist einer der größten Energieerzeuger Ungarns und von strategischer Bedeutung für die Stromversorgung des Landes. Es nutzt hauptsächlich Lignit, eine Form der Braunkohle, die in riesigen nahegelegenen Tagebauen gewonnen wird. Die gewaltigen Schaufelradbagger in den Gruben Visonta und Bükkábrány sind technologische Giganten und prägen die Landschaft. Das Kraftwerk selbst ist weithin an seinen massiven Kühltürmen und Schornsteinen erkennbar. In den letzten Jahren hat sich der Standort zu einem Zentrum der Energiewende gewandelt: Neben der Kohleverbrennung wird zunehmend Biomasse eingesetzt, und auf den rekultivierten Flächen der ehemaligen Tagebaue entstand einer der größten Solarparks Ungarns. Das Unternehmen ist der wichtigste Arbeitgeber in der Region Heves und sichert tausende Arbeitsplätze in der Industrie und im Bergbau. Das Kraftwerk Mátra steht beispielhaft für den Wandel von der traditionellen Schwerindustrie hin zu einer nachhaltigeren Energiezukunft, während es gleichzeitig die Stabilität des nationalen Stromnetzes garantiert.",
      hu: "A Mátrai Erőmű Visontán Magyarország egyik legnagyobb energiatermelő egysége és a hazai áramellátás stratégiai bázisa. Az üzem elsősorban a közeli külszíni bányákból származó lignitre épül, melyet hatalmas technológiai monstrumok, lánctalpas kotrógépek termelnek ki. Az erőmű óriási hűtőtornyai és kéményei messziről felismerhetővé teszik a telephelyet. Az utóbbi években az üzem a zöld átállás központjává vált: a szén mellett egyre nagyobb arányban hasznosítanak biomasszát, a rekultivált bányaterületeken pedig az ország egyik legnagyobb napelemparkja épült fel. Heves vármegye legfontosabb munkaadójaként több ezer család megélhetését biztosítja, miközben a hagyományos nehézipar és a fenntartható jövő közötti átmenet mintapéldája. Földrajz K8 – Energiatermelés és környezetvédelem.",
      ro: "Centrala Electrică Mátra, situată în localitatea Visonta, este unul dintre cei mai mari producători de energie electrică din Ungaria și un pilon al independenței energetice naționale. Centrala utilizează lignitul extras din carierele de suprafață din apropiere, fiind în prezent în plin proces de transformare tehnologică spre surse mai curate. Pe lângă unitățile pe bază de cărbune, complexul include un parc fotovoltaic imens și planuri pentru unități pe bază de gaze naturale și biomasă. Turnurile sale de răcire colosale sunt repere geografice majore la poalele Munților Mátra. Activitatea centralei este vitală nu doar pentru furnizarea de electricitate, ci și pentru stabilitatea rețelei energetice naționale. Geografie K8 – Resursele energetice și protecția mediului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Kraftwerk wurde in den 1960er Jahren unter dem Namen 'Gagarin-Kraftwerk' erbaut.",
      "Es ist das einzige bedeutende Kraftwerk Ungarns, das heimische Braunkohle verfeuert.",
      "Die installierte elektrische Leistung des Kraftwerks beträgt rund 950 Megawatt.",
      "Die Tagebaue des Werks fördern jährlich mehrere Millionen Tonnen Lignit.",
      "Das Kraftwerk deckt etwa 15 Prozent des ungarischen Strombedarfs ab.",
      "Auf dem Gelände befindet sich eine der größten Photovoltaik-Anlagen des Landes mit über 70.000 Modulen.",
      "Das Unternehmen investiert massiv in die Rekultivierung der Tagebauflächen, um sie der Natur zurückzugeben.",
      "Ein Industriepark rund um das Kraftwerk nutzt die Abwärme für verschiedene Produktionsprozesse."
      ],
      hu: ["Az erőművet a 1960-as évek végén helyezték üzembe Gagarin Hőerőmű néven.", "A visontai és bükkábrányi bányák látják el tüzelőanyaggal a blokkokat.", "A bányákban dolgozó óriáskotrók Magyarország legnagyobb munkagépei.", "Az üzem az ország villamosenergia-szükségletének jelentős részét fedezi.", "A telephelyen működő naperőmű kapacitása folyamatosan bővül.", "A hűtőtornyokból távozó vízgőz a környék mikroklímájára is hatással van.", "A gyár saját vasútvonallal és bonyolult szállítószalag-rendszerrel rendelkezik.", "Kiemelt figyelmet fordítanak a bányászat utáni tájrehabilitációra és erdősítésre."],
      ro: ["Centrala asigură aproximativ 15% din producția totală de electricitate a Ungariei.", "Carierele de lignit adiacente sunt cele mai mari mine de suprafață din țară.", "Turnurile de răcire au o înălțime de peste 100 de metri.", "Complexul găzduiește unul dintre cele mai mari parcuri de panouri solare din Europa Centrală.", "Peste 2.000 de persoane lucrează direct în cadrul centralei și al minelor aferente.", "Procesul de recultivare a fostelor cariere transformă minele în lacuri și zone verzi."],
      en: []
    },
  },

  // HU-JN: Jász-Nagykun-Szolnok (2G, 2LN, 1W)
  {
    id: "historical-karcagi-szelmalom-extra",
    type: "historical",
    parent: "HU-JN",
    coords: [20.916, 47.319],
    name: { de: "Windmühle von Karcag", hu: "Karcagi szélmalom", ro: "Moara de vânt din Karcag", en: "Karcag Windmill" },
    description: {
      de: "Eines der wenigen erhaltenen Windmühlendenkmäler in der ungarischen Tiefebene.",
      hu: "Az Alföld kevés épségben maradt szélmalom-műemlékének egyike.",
      ro: "Una dintre puținele mori de vânt istorice rămase în Câmpia Maghiară.",
      en: "One of the few remaining historic windmills in the Great Hungarian Plain."
    },
    facts: {
      de: ["In den 1850ern gebaut.", "Aus Backstein errichtet."],
      hu: ["Az 1850-es években épült.", "Téglából falazott szerkezet."],
      ro: ["Construită în anii 1850.", "Construcție din cărămidă."],
      en: ["Built in the 1850s.", "Constructed of brick."]
    },
    descriptionAdvanced: {
      de: "Die Windmühle von Karcag, auch bekannt als Lomb-Mühle, ist eines der am besten erhaltenen technischen Denkmäler in der ungarischen Tiefebene. Erbaut in den 1850er Jahren, zeugt sie von einer Zeit, in der die Windkraft eine entscheidende Rolle bei der Getreideverarbeitung in der wasserarmen Puszta spielte. Das imposante Backsteingebäude mit seiner charakteristischen Kegelform und den vier Flügeln ist weithin sichtbar. Im Inneren der Mühle können Besucher die fast vollständig erhaltene Mahlmechanik aus dem 19. Jahrhundert bewundern, die über mehrere Stockwerke reicht. Die Mühle wurde auf einer künstlichen Erhebung errichtet, um den Wind optimal einzufangen. Nach ihrer Stilllegung wurde sie liebevoll restauriert und dient heute als Museum, das die harte Arbeit der Müller und die Bedeutung des Getreidehandels für die Region Karcag veranschaulicht. Sie ist ein stolzes Symbol für den Erfindungsreichtum der ländlichen Bevölkerung in der Großen Ungarischen Tiefebene.",
      hu: "A karcagi szélmalom, más néven Lomb-malom, az Alföld egyik legszebben megőrzött technikatörténeti emléke. Az 1850-es években épült téglaépület a Nagykunság szeles síkságának jelképe, emlékeztetve arra a korra, amikor a vízfolyásokban szegény vidéken a szél erejét használták gabonaőrlésre. A jellegzetes kúp alakú, négylapátos malom belső szerkezete szinte teljes épségben maradt fenn, bemutatva a 19. századi ácsmesterség és gépészet bravúrjait. A malmot mesterséges dombra emelték, hogy a vitorlák hatékonyabban fogják fel a szelet. Ma múzeumként működik, ahol a látogatók több szinten keresztül ismerhetik meg a molnárok nehéz és tiszteletre méltó munkáját és a malom működési elvét. Történelem K6 – Hagyományos iparágak az Alföldön.",
      ro: "Moara de vânt din Karcag, cunoscută sub numele de Moara Lomb, este una dintre cele mai bine conservate relicve ale industriei rurale din Marea Câmpie. Construită la mijlocul secolului al XIX-lea, moara din cărămidă reprezintă ingeniozitatea locuitorilor din regiunea Nagykunság, care au folosit forța vântului într-o zonă lipsită de cursuri de apă rapide. Structura sa circulară masivă și mecanismul interior din lemn, care este încă parțial funcțional, oferă o imagine autentică a modului în care se procesau cerealele acum 150 de ani. Moara este situată pe o ridicătură naturală pentru a capta cât mai bine curenții de aer. Astăzi funcționează ca muzeu tehnic, fiind un simbol al tradițiilor agricole și al peisajului specific de stepă maghiară. Istorie K6 – Tehnologii tradiționale în agricultură.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Mühle wurde im Jahr 1858 aus lokal gebrannten Backsteinen errichtet.",
      "Sie gehört zum Typ der sogenannten Turmwindmühlen, deren Dach sich mit den Flügeln in den Wind drehen lässt.",
      "Die Mühle verfügte ursprünglich über zwei Mahlsteinpaare für unterschiedliche Getreidesorten.",
      "In der Region Karcag gab es früher dutzende solcher Mühlen, von denen nur wenige überdauert haben.",
      "Das Gebäude wurde in den 1970er Jahren umfassend restauriert und unter Denkmalschutz gestellt.",
      "Die Mechanik ist ein hervorragendes Beispiel für die Mühlenbaukunst des 19. Jahrhunderts.",
      "Die Mühle steht auf einem künstlich aufgeschütteten Hügel, um die Windausbeute zu maximieren.",
      "Besucher können alle vier Stockwerke der Mühle besichtigen und die Funktionsweise der Zahnräder und Mahlsteine kennenlernen."
      ],
      hu: ["A malom 1858-ban épült helyben égetett téglákból.", "A toronyszélmalom típusa lehetővé teszi a tető forgatását a szélirányba.", "Eredetileg két pár malomkővel rendelkezett a különböző minőségű őrléshez.", "Karcag környékén egykor tucatnyi hasonló malom működött.", "Az épületet az 1970-es években újították fel és nyilvánították műemlékké.", "A hatalmas fa fogaskerekek és tengelyek ma is megcsodálhatók belül.", "A malomdomb a sík vidéken messziről látható tájékozódási pont.", "Vezetett túrák során a teljes őrlési folyamat technológiája megismerhető."],
      ro: ["Moara a fost construită în anul 1858 de familia Lomb.", "Zidurile sale de cărămidă au o grosime de peste 1 metru la bază.", "Acoperișul morii se putea roti în funcție de direcția vântului prin intermediul unei pârghii.", "În interior sunt păstrate pietrele de moară originale de mari dimensiuni.", "Karcag era odinioară numit 'orașul celor zece mori de vânt'.", "Moara este protejată ca monument istoric național din anii 1950."],
      en: []
    },
  },
  {
    id: "historical-tisza-szallo-szolnok-extra",
    type: "historical",
    parent: "HU-JN",
    coords: [20.198, 47.172],
    name: { de: "Tisza Hotel Szolnok", hu: "Tisza Szálló Szolnok", ro: "Hotelul Tisza Szolnok", en: "Tisza Hotel Szolnok" },
    description: {
      de: "Ein elegantes neoklassizistisches Gebäude am Ufer der Theiß mit eigenem Thermalbad.",
      hu: "Elegáns neoklasszicista épület a Tisza partján, saját gyógyfürdővel.",
      ro: "O clădire neoclasică elegantă pe malul Tisei, cu propria baie termală.",
      en: "An elegant Neoclassical building on the banks of the Tisza, with its own thermal bath."
    },
    facts: {
      de: ["1928 eröffnet.", "Prachtvoller Spiegelsaal."],
      hu: ["1928-ban nyílt meg.", "Pompás tükörteremmel."],
      ro: ["Deschis în 1928.", "Sală a oglinzilor superbă."],
      en: ["Opened in 1928.", "Magnificent hall of mirrors."]
    },
    descriptionAdvanced: {
      de: "Das Tisza Hotel in Szolnok ist ein architektonisches Juwel am Ufer der Theiß und ein Symbol für die Eleganz der Jahrhundertwende. Das im neoklassizistischen Stil errichtete Gebäude besticht durch seine herrschaftliche Fassade und seine erstklassige Lage direkt am Fluss. Besonders berühmt ist das Hotel für sein eigenes Thermalbad, das aus einer lokalen Heilquelle gespeist wird und Gästen Entspannung in historischem Ambiente bietet. Der Spiegelsaal des Hotels gilt als einer der schönsten Festsäle in Ostungarn und war über Jahrzehnte Schauplatz glanzvoller Bälle und gesellschaftlicher Ereignisse. Das Hotel verbindet historischen Charme mit moderner Gastfreundschaft und ist ein wichtiger Teil des kulturellen Erbes von Szolnok. Ein Spaziergang entlang der angrenzenden Theiß-Promenade bietet einen wunderbaren Blick auf das Hotel und unterstreicht seine Bedeutung als gesellschaftliches Zentrum der Stadt.",
      hu: "A szolnoki Tisza Szálló a város egyik legszebb neoklasszicista épülete, amely közvetlenül a folyóparti sétány mellett magasodik. Az 1920-as évek végén emelt palota nemcsak szálláshelyként, hanem a társasági élet központjaként és gyógyfürdőként is funkcionál. Különleges adottsága, hogy saját termálforrással rendelkezik, amely az épület patinás medencéit táplálja. Legpompásabb terme a Tükörterem, amely gazdag stukkódíszítéseivel és hatalmas ablakaival a korszak báljainak és fényes rendezvényeinek hangulatát idézi. A szálló eleganciája és a Tisza közelsége ma is különleges vonzerőt jelent a látogatóknak, ötvözve a történelmi miliőt a modern vendéglátással. Történelem K8 – Polgári életmód és építészet a két világháború között.",
      ro: "Hotelul Tisza din Szolnok este o clădire emblematică a arhitecturii neoclasice maghiare, situată pe malul râului Tisa, fiind renumit pentru băile sale termale și istoria sa culturală bogată. Inaugurat la începutul secolului XX, hotelul a fost de-a lungul deceniilor centrul vieții sociale din Szolnok, găzduind numeroase personalități și evenimente fastuoase. Arhitectura sa elegantă, cu fațada ornamentată și interioare spațioase, reflectă prosperitatea orașului din perioada interbelică. Băile termale ale hotelului, alimentate de izvoare locale binefăcătoare, oferă relaxare într-un cadru istoric autentic. Situat în imediata apropiere a Coloniei de Artiști din Szolnok, hotelul este un punct de referință pentru turismul cultural și balnear din Marea Câmpie. Istorie K8 – Dezvoltarea stațiunilor balneare urbane.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Hotel wurde im Jahr 1928 nach Plänen des Architekten Árpád Hegedűs eröffnet.",
      "Das angeschlossene Thermalbad wurde bereits vor dem Hotelbau für seine heilende Wirkung geschätzt.",
      "Der prachtvolle Spiegelsaal ist für seine außergewöhnliche Akustik und seine reiche Stuckverzierung bekannt.",
      "Das Hotel war während der Zeit zwischen den Weltkriegen ein beliebter Treffpunkt für Künstler und Politiker.",
      "Die Heilquelle des Hotels liefert Wasser mit einer Temperatur von rund 55 Grad Celsius aus großer Tiefe.",
      "In den 1990er Jahren wurde das Gebäude umfassend renoviert, um den historischen Glanz wiederherzustellen.",
      "Das Hotel ist ein denkmalgeschütztes Gebäude und prägt das Gesicht der Stadt Szolnok zur Theiß hin.",
      "Neben dem Hotelbetrieb dient das Gebäude auch als Veranstaltungsort für Konzerte und Ausstellungen."
      ],
      hu: ["A szállodát 1928-ban adták át Hegedűs Árpád építész tervei alapján.", "Saját gyógyvizét 55 fokos hőmérsékleten hozzák felszínre a mélyből.", "A Tükörterem kiváló akusztikája miatt gyakran ad otthont koncerteknek.", "Az épület a két világháború közötti magyar polgári építészet remeke.", "A fürdőrészleg kupolás kialakítása a klasszikus római fürdőket idézi.", "Híres vendégek sora fordult meg falai között az évtizedek során.", "A Tisza-parti sétányról nyílik a legszebb kilátás az épület homlokzatára.", "A szálló ma országos műemléki védettséget élvez."],
      ro: ["Hotelul și baia au fost construite între anii 1927 și 1928 după planurile arhitectului Ármin Hegedűs.", "Apa termală a hotelului izvorăște de la o adâncime de peste 900 de metri.", "Clădirea este construită în stil eclectic cu puternice influențe neoclasice.", "Terasa hotelului oferă cea mai frumoasă panoramă asupra parcului de pe malul Tisei.", "În timpul regimului comunist, hotelul a rămas cel mai luxos loc de cazare din județ.", "Interiorul păstrează elemente decorative originale, inclusiv vitralii și tâmplărie de epocă."],
      en: []
    },
  },
  {
    id: "animal-habitat-jaszberenyi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-JN",
    coords: [19.907, 47.513],
    name: { de: "Zoo Jászberény", hu: "Jászberényi Állat- és Növénykert", ro: "Grădina Zoologică din Jászberény", en: "Jaszbereny Zoo" },
    description: {
      de: "Ein kleiner, aber feiner Zoo, bekannt für seine täglichen Tiershows.",
      hu: "Kicsi, de színvonalas állatkert, amely híres a látványetetéseiről.",
      ro: "O grădină zoologică mică, dar de calitate, celebră pentru spectacolele cu animale.",
      en: "A small but high-quality zoo, famous for its daily animal feeding shows."
    },
    facts: {
      de: ["1975 gegründet.", "Lehrpfad im Park."],
      hu: ["1975-ben alapították.", "Tanösvény is található benne."],
      ro: ["Fondată în 1975.", "Include o potecă didactică."],
      en: ["Founded in 1975.", "Features an educational trail."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Jászberény ist eine charmante und naturverbundene Einrichtung in der Region Jászság. Er zeichnet sich durch seine familiäre Atmosphäre und seine wunderschöne Lage in einem bewaldeten Parkgelände aus. Gegründet in den 1970er Jahren, hat sich der Zoo zu einem bedeutenden Bildungs- und Freizeitzentrum entwickelt. Ein besonderes Highlight für Besucher sind die täglichen Schaufütterungen und Tiershows, die einen tiefen Einblick in das Verhalten der Bewohner gewähren. Der Zoo legt großen Wert auf die Präsentation der Tiere in naturnah gestalteten Gehegen und engagiert sich aktiv in internationalen Artenschutzprogrammen. Ein interaktiver Lehrpfad führt durch die Anlage und vermittelt Wissen über die Flora und Fauna. Für Familien ist der Zoo Jászberény ein beliebtes Ziel, das Erholung und Wissensvermittlung auf sympathische Weise miteinander verbindet und den Respekt vor der Natur fördert.",
      hu: "A Jászberényi Állat- és Növénykert egy barátságos, családi léptékű intézmény a Jászság szívében. Az 1970-es években alapított kert különlegessége a sűrű erdős környezet, amely árnyas sétányaival a nyári hőségben is kellemes kikapcsolódást nyújt. Az állatkert az országban elsőként vezette be a látványetetéseket, ahol a gondozók interaktív módon mutatják be a lakók szokásait. A gyűjteményben megtalálhatók a hazai vadállatok és egzotikus fajok egyaránt, különös tekintettel a főemlősökre és a ragadozókra. A kert nagy hangsúlyt fektet a természetvédelmi nevelésre és az állatok jólétére, így a látogatók valódi közelségbe kerülhetnek a természettel. Természetismeret K5 – Erdők élővilága és környezeti nevelés.",
      ro: "Grădina Zoologică din Jászberény este una dintre cele mai vechi și îndrăgite instituții de acest tip din regiunea Jászság, fiind renumită pentru atmosfera sa familiară și pentru îngrijirea dedicată animalelor. Inaugurată în 1975, grădina zoologică s-a transformat dintr-o mică colecție locală într-un centru modern de conservare care găzduiește specii de pe toate continentele. O atracție deosebită este 'spectacolul pinguinilor' și posibilitatea de a vedea urși bruni și lupi în habitate spațioase. Grădina pune un mare accent pe programele educaționale, organizând regulat activități de 'zoo-pedagogie' unde copiii pot învăța despre biodiversitate prin interacțiune directă. Este o destinație ideală pentru o excursie de o zi în inima Câmpiei Maghiare. Științele Naturii K3 – Descoperirea lumii animale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde im Jahr 1975 eröffnet und ist einer der traditionsreichsten in der ungarischen Provinz.",
      "Er beherbergt eine Vielzahl von Tierarten, von heimischen Waldtieren bis hin zu exotischen Primaten.",
      "Der Zoo Jászberény war der erste in Ungarn, der regelmäßige Schaufütterungen als festen Programmpunkt einführte.",
      "Die Anlage umfasst auch einen botanischen Bereich mit seltenen Baum- und Pflanzenarten der Region.",
      "Besonders bekannt ist der Zoo für seine Zuchterfolge bei verschiedenen Greifvogelarten.",
      "Ein großer Abenteuerspielplatz macht den Besuch für Kinder zu einem besonderen Erlebnis.",
      "Der Zoo nimmt am Europäischen Erhaltungszuchtprogramm (EEP) für bedrohte Tierarten teil.",
      "Regelmäßig finden thematische Tage und Umweltbildungsprogramme für Schulklassen statt."
      ],
      hu: ["1975-ben nyílt meg, és azóta folyamatosan fejlődik.", "A Jászberényi Állatkert volt az első, amely napi rendszerességű állatbemutatókat tartott.", "Botanikai gyűjteménye számos ritka fafajjal rendelkezik a park területén.", "Sikeres tenyésztési programot folytatnak különféle ritka ragadozó madarakkal.", "A gyerekeket hatalmas, természetes anyagokból épült játszótér várja.", "Aktívan részt vesznek az Európai Fajmegőrzési Tenyészprogramokban (EEP).", "Rendszeresen szerveznek tematikus éjszakai kalandtúrákat az állatkertben.", "A látogatóközpontban interaktív kiállítás mutatja be a Jászság élővilágát."],
      ro: ["Grădina zoologică a fost deschisă pe 1 mai 1975, de Ziua Muncii.", "Aici trăiesc peste 500 de exemplare din aproximativ 100 de specii diferite.", "Grădina este celebră pentru reproducerea cu succes a maimuțelor marmoset.", "Există un program zilnic de hrănire spectacol pentru diverse animale, inclusiv vidre și pinguini.", "Parcul include un mic muzeu etnografic care prezintă viața tradițională a regiunii Jászság.", "Grădina este implicată în programe europene de salvare a păsărilor răpitoare rănite."],
      en: []
    },
  },
  {
    id: "agriculture-tiszafuredi-halas-extra",
    type: "agriculture",
    parent: "HU-JN",
    coords: [20.755, 47.621],
    name: { de: "Fischereizentrum Tiszafüred", hu: "Tiszafüredi halaspark", ro: "Centrul de pescuit Tiszafüred", en: "Tiszafured Fishing Park" },
    description: {
      de: "Ein Zentrum für nachhaltige Fischzucht und Angeltourismus am Theiß-See.",
      hu: "A fenntartható haltenyésztés és a horgászturizmus központja a Tisza-tónál.",
      ro: "Centru pentru piscicultură sustenabilă și turism de pescuit la Lacul Tisa.",
      en: "A center for sustainable fish farming and fishing tourism at Lake Tisza."
    },
    facts: {
      de: ["Große Teichwirtschaft.", "Typische Theiß-Fische."],
      hu: ["Hatalmas halastórendszer.", "Jellemző tiszai halfajok."],
      ro: ["Sistem vast de iazuri.", "Specii de pești tipice Tisei."],
      en: ["Large pond system.", "Typical fish species of the Tisza."]
    },
    descriptionAdvanced: {
      de: "Das Fischereizentrum in Tiszafüred ist das Tor zur faszinierenden Wasserwelt des Theiß-Sees und ein Zentrum für nachhaltigen Angeltourismus. Es liegt strategisch günstig an einem der fischreichsten Gewässer Ungarns und bietet umfassende Dienstleistungen für Naturfreunde und Sportfischer. Das Zentrum engagiert sich stark für den Schutz des Ökosystems und die Aufrechterhaltung des Fischbestandes durch professionelle Teichwirtschaft und Besatzprogramme. Besucher können hier alles über die traditionellen Fischereimethoden der Theiß-Region erfahren und die Vielfalt der heimischen Fischarten kennenlernen. Neben dem Angeln bietet das Zentrum auch Bootstouren und Naturbeobachtungen an, bei denen man die reiche Vogelwelt des Sees entdecken kann. Es ist ein Ort, an dem die enge Verbindung der Menschen zur Flusslandschaft der Theiß spürbar wird und der einen verantwortungsbewussten Umgang mit den natürlichen Ressourcen fördert.",
      hu: "A tiszafüredi halaspark a fenntartható haltenyésztés és a tiszai horgászhagyományok egyik legfontosabb központja a Tisza-tónál. A hatalmas tórendszer és a hozzá kapcsolódó csatornák ideális feltételeket biztosítanak az őshonos halfajok, például a ponty, a süllő és a harcsa szaporításához. A park célja nemcsak az élelmiszertermelés, hanem a Tisza-tó ökológiai egyensúlyának fenntartása is a rendszeres telepítések révén. A látogatók és a horgászok számára a park betekintést nyújt a modern akvakultúra világába és a hagyományos halászati módszerekbe. A környék csendje és a vízivilág közelsége a természetfotósok és a nyugodt kikapcsolódást keresők paradicsomává teszi a területet. Földrajz K7 – Halászat és vízgazdálkodás.",
      ro: "Pescuitul și piscicultura de la Tiszafüred reprezintă esența identității acestui oraș situat pe malul lacului Tisa. Regiunea este renumită pentru tradițiile sale pescărești milenare, evoluând de la metodele arhaice de captură la piscicultura modernă sustenabilă. Tiszafüred este centrul gastronomic al regiunii, unde 'ciorba de pește de Tisa' (tiszai halászlé) este pregătită după rețete transmise din generație în generație. Lacul de acumulare din apropiere oferă un habitat bogat pentru numeroase specii, precum crapul, somnul și șalăul, transformând zona într-un paradis pentru pescarii sportivi. Muzeul local și evenimentele precum 'Zilele Peștelui' promovează importanța economică și culturală a apei în viața comunității. Geografie K8 – Resursele acvatice și gastronomia regională.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Tiszafüred gilt als die 'Hauptstadt des Theiß-Sees' und ist seit Jahrzehnten ein Zentrum der Binnenfischerei.",
      "Das Fischereizentrum verwaltet große Teichflächen, die der nachhaltigen Zucht von Speisefischen dienen.",
      "Zu den häufigsten Fischarten der Region gehören der Karpfen, der Zander und der mächtige Wels.",
      "Das Zentrum bietet spezielle Programme für Kinder an, um ihnen die Grundlagen des Naturschutzes zu vermitteln.",
      "Jährlich finden hier bedeutende Angelwettbewerbe statt, die Teilnehmer aus ganz Europa anziehen.",
      "Das angeschlossene Informationszentrum dokumentiert die Geschichte der Fischerei an der mittleren Theiß.",
      "Es gibt Bestrebungen, die traditionelle Fischsuppe von Tiszafüred als lokales Markenzeichen zu stärken.",
      "Das Zentrum arbeitet eng mit dem Nationalpark Hortobágy zusammen, um den Schutz des Sees zu gewährleisten."
      ],
      hu: ["Tiszafüred a Tisza-tó horgászati és turisztikai fővárosa.", "A halaspark nagy területen gazdálkodik, biztosítva a tó halutánpótlását.", "Itt élnek a vidék rekordméretű harcsái, melyek a horgászok álmai.", "A központ oktatóprogramokat kínál a vizes élőhelyek védelméről.", "Évente rendeznek itt rangos országos és nemzetközi horgászversenyeket.", "A park területén bemutató akváriumok is várják az érdeklődőket.", "Szoros az együttműködés a Hortobágyi Nemzeti Park szakembereivel.", "A tiszai halászlé egyik legfontosabb alapanyag-forrása ez a vidék."],
      ro: ["Tiszafüred este considerat 'capitala' lacului Tisa.", "Ciorba de pește de aici se caracterizează prin utilizarea mai multor tipuri de pește de râu și boia de calitate.", "Există numeroase ferme piscicole în jurul orașului care alimentează piața națională.", "Pescuitul sportiv pe lacul Tisa atrage anual peste 100.000 de turiști.", "Tradiția afumării peștelui este o specialitate locală foarte apreciată de vizitatori.", "Regiunea este implicată în programe de populare periodică a râului cu puiet de specii native."],
      en: []
    },
  },
  {
    id: "industry-szolnoki-papirgyar-extra",
    type: "industry",
    parent: "HU-JN",
    coords: [20.218, 47.165],
    name: { de: "Papierfabrik Szolnok", hu: "Szolnoki Papírgyár", ro: "Fabrica de Hârtie Szolnok", en: "Szolnok Paper Mill" },
    description: {
      de: "Eine der traditionsreichsten Papierfabriken Ungarns, Teil einer globalen Gruppe.",
      hu: "Magyarország egyik legnagyobb múltú papírgyára, ma nemzetközi cégcsoport tagja.",
      ro: "Una dintre cele mai vechi fabrici de hârtie din Ungaria, astăzi parte a unui grup global.",
      en: "One of Hungary's oldest paper mills, now part of a global group."
    },
    facts: {
      de: ["Moderne Produktion.", "Umweltfreundliche Technik."],
      hu: ["Modern gyártósorok.", "Környezetbarát technológia."],
      ro: ["Producție modernă.", "Tehnologie ecologică."],
      en: ["Modern production lines.", "Eco-friendly technology."]
    },
    descriptionAdvanced: {
      de: "Die Papierfabrik in Szolnok ist einer der traditionsreichsten Industriestandorte in Ungarn und ein bedeutender Akteur auf dem europäischen Papiermarkt. Gegründet zu einer Zeit, als die Industrialisierung Ungarns an Fahrt aufnahm, hat sich das Werk kontinuierlich weiterentwickelt und modernisiert. Heute gehört es zu einer weltweit agierenden Unternehmensgruppe und nutzt modernste, umweltfreundliche Technologien zur Herstellung hochwertiger Papierprodukte. Die Fabrik ist bekannt für ihre effiziente Produktion von Schreib- und Druckpapieren sowie Spezialpapieren. Ein besonderes Augenmerk liegt auf der Nachhaltigkeit, wobei ein Großteil des Energiebedarfs durch umweltschonende Verfahren gedeckt und der Wasserverbrauch minimiert wird. Für die Stadt Szolnok ist die Papierfabrik ein wichtiger Arbeitgeber und ein Symbol für die industrielle Stärke der Region. Die kontinuierlichen Investitionen in Forschung und Entwicklung stellen sicher, dass das Werk wettbewerbsfähig bleibt.",
      hu: "A szolnoki papírgyár Magyarország egyik legnagyobb múlttal rendelkező ipari létesítménye, amely évszázadok óta meghatározza a város gazdasági arculatát. A gyár a 19. század közepén alakult, kihasználva a Tisza vízét és a jó közlekedési adottságokat. Ma egy globális cégcsoport tagjaként a legmodernebb, környezetbarát technológiával állít elő kiváló minőségű író- és nyomópapírokat. Az üzem nagy hangsúlyt fektet a fenntarthatóságra, az újrahasznosított alapanyagok használatára és a vízfelhasználás minimalizálására. Szolnok számára a gyár stabil munkaadó és a helyi szakképzés fontos bázisa. A folyamatos modernizáció révén a gyár ma is versenyképes szereplője az európai papírpiacnak. Földrajz K8 – A könnyűipar története és jövője.",
      ro: "Fabrica de Hârtie din Szolnok este unul dintre pilonii tradiționali ai industriei ușoare maghiare, având o istorie ce reflectă dezvoltarea tehnologică a orașului de pe malul Tisei. Fondată în perioada industrializării clasice, fabrica s-a specializat în producția de diverse tipuri de hârtie și carton, utilizând resursele locale de apă și energie. De-a lungul deceniilor, unitatea a trecut prin procese de modernizare pentru a face față standardelor internaționale de calitate și protecție a mediului. Astăzi, fabrica este integrată în lanțuri de producție moderne, punând accent pe reciclare și pe utilizarea sustenabilă a materiilor prime celulozice. Este un exemplu de reziliență industrială, oferind locuri de muncă specializate pentru generații de locuitori din Szolnok. Geografie K8 – Industria lemnului și prelucrarea hârtiei.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Wurzeln der Papierherstellung in Szolnok reichen bis in die Mitte des 19. Jahrhunderts zurück.",
      "Die Fabrik ist heute auf die Produktion von holzfreien, ungestrichenen Papieren spezialisiert.",
      "Ein Großteil der in Szolnok produzierten Waren wird in westeuropäische Länder exportiert.",
      "Das Werk verfügt über ein integriertes Qualitätsmanagementsystem nach internationalen Standards.",
      "In den letzten Jahren wurden Millionen in die Modernisierung der Papiermaschinen investiert.",
      "Die Fabrik nutzt die Nähe zur Theiß für logistische Zwecke und die Wasserversorgung.",
      "Szolnok ist ein wichtiger Ausbildungsknotenpunkt für Fachkräfte der ungarischen Papierindustrie.",
      "Das Unternehmen engagiert sich in sozialen Projekten und fördert die lokale Gemeinschaft."
      ],
      hu: ["A papírgyártás gyökerei Szolnokon az 1800-as évek közepéig nyúlnak vissza.", "Az üzem ma speciális, famentes nyomópapírok gyártására szakosodott.", "A termékek jelentős részét az európai uniós piacokon értékesítik.", "A gyár saját biológiai szennyvíztisztító teleppel rendelkezik.", "Az elmúlt években jelentős beruházások történtek a gépsorok digitalizációjába.", "A szolnoki gyár a régió egyik legfontosabb ipartörténeti központja.", "A vállalat aktívan támogatja a helyi közösségi és sportrendezvényeket.", "A technológiai fejlesztéseknek köszönhetően az energiahatékonyságuk példaértékű."],
      ro: ["Producția de hârtie la Szolnok are o tradiție de peste 80 de ani.", "Fabrica utilizează cantități mari de apă din râul Tisa, care este ulterior epurată riguros.", "Unitatea produce o gamă largă de produse, de la hârtie de scris la ambalaje industriale complexe.", "Procesul de producție include o secție modernă de colectare și procesare a hârtiei reciclate.", "Fabrica este situată strategic lângă nodul feroviar Szolnok pentru un transport eficient.", "În cadrul fabricii funcționează un laborator propriu pentru testarea rezistenței fibrelor celulozice."],
      en: []
    },
  },

  // HU-KE: Komárom-Esztergom (2G, 2LN, 1W)
  {
    id: "historical-esztergomi-bazilika-extra",
    type: "historical",
    parent: "HU-KE",
    coords: [18.736, 47.799],
    name: { de: "Basilika von Esztergom", hu: "Esztergomi Bazilika", ro: "Catedrala din Esztergom", en: "Esztergom Basilica" },
    description: {
      de: "Die größte Kirche Ungarns und Sitz des katholischen Primas.",
      hu: "Magyarország legnagyobb temploma, a katolikus prímás székhelye.",
      ro: "Cea mai mare biserică din Ungaria și sediul primatului catolic.",
      en: "Hungary's largest church and the seat of the Catholic primate."
    },
    facts: {
      de: ["100 Meter hohe Kuppel.", "Riesiges Altarbild."],
      hu: ["100 méter magas kupola.", "Hatalmas oltárkép."],
      ro: ["Cupolă de 100 de metri.", "Retablu uriaș."],
      en: ["100-meter high dome.", "Features a massive altarpiece."]
    },
    descriptionAdvanced: {
      de: "Die Basilika von Esztergom, offiziell die Kathedrale Unserer Lieben Frau und des heiligen Adalbert, ist das größte Kirchenbauwerk Ungarns und ein weithin sichtbares Symbol des ungarischen Katholizismus. Majestätisch auf dem Burgberg über dem Donauknie thronend, beeindruckt sie durch ihre monumentalen Ausmaße und die 100 Meter hohe Kuppel. Der im klassizistischen Stil errichtete Bau beherbergt den Sitz des Erzbischofs von Esztergom-Budapest und damit des Primas von Ungarn. Im Inneren raubt das gewaltige Altarbild, die größte auf einer einzigen Leinwand gemalte Darstellung der Welt, den Besuchern den Atem. Besonders kostbar ist die Bakócz-Kapelle aus rotem Marmor, ein Meisterwerk der Renaissance, das aus einem Vorgängerbau integriert wurde. Die Schatzkammer der Basilika bewahrt eine der bedeutendsten Sammlungen kirchlicher Goldschmiedekunst in Europa auf. Ein Aufstieg zur Kuppelgalerie bietet ein unvergleichliches Panorama über das Donauknie bis weit in die Slowakei.",
      hu: "Az esztergomi bazilika, hivatalos nevén a Nagyboldogasszony- és Szent Adalbert-főszékesegyház, Magyarország legnagyobb temploma és a katolikus egyház hazai központja. A várhegyen magasodó monumentális épület 100 méter magas kupolájával uralja a Dunakanyar látképét. Klasszicista stílusa tekintélyt parancsoló, belső tere pedig lélegzetelállító méretekkel büszkélkedhet. Itt található a világ legnagyobb, egyetlen vászonra festett oltárképe. Különleges kincse a vörös márványból készült Bakócz-kápolna, amely a magyarországi reneszánsz legszebb fennmaradt emléke. A bazilika kincstára Európa-szerte híres ötvösművészeti gyűjteményével. A kupola körerkélyéről nyíló panoráma felejthetetlen élményt nyújt a Duna felett. Történelem K6 – A magyar katolikus egyház és a reneszánsz művészet.",
      ro: "Bazilica din Esztergom, oficial Catedrala Primatului Maicii Domnului și a Sfântului Adalbert, este cea mai mare biserică din Ungaria și un simbol monumental al creștinismului maghiar. Situată pe dealul cetății, dominând maiestuos fluviul Dunărea, bazilica impresionează prin dimensiunile sale colosale și arhitectura neoclasică severă. Cupola sa uriașă, vizibilă de la zeci de kilometri distanță, este o capodoperă de inginerie a secolului al XIX-lea. În interior, vizitatorii pot admira Capela Bakócz, o bijuterie renascentistă din marmură roșie, și cel mai mare altar pictat pe o singură pânză din lume. Tezaurul bazilicii adăpostește obiecte de cult de o valoare inestimabilă, fiind unul dintre cele mai bogate din Europa. Istorie K8 – Centrul religios al Ungariei.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Basilika ist das höchste Gebäude Ungarns und eines der größten Kirchenbauwerke Europas.",
      "Die Bakócz-Kapelle aus dem 16. Jahrhundert wurde beim Bau der Basilika in 1.600 nummerierte Stücke zerlegt und wieder eingefügt.",
      "Das Altarbild von Girolamo Michelangelo Grigoletti misst 13,5 mal 6,6 Meter.",
      "In der Krypta der Basilika ruhen viele bedeutende ungarische Kirchenfürsten, darunter Kardinal József Mindszenty.",
      "Die Orgel der Basilika wurde bereits zur Einweihung 1856 von Franz Liszt mit der 'Graner Messe' gewürdigt.",
      "Die Mauern der Basilika sind an einigen Stellen bis zu 17 Meter dick, um die Last der Kuppel zu tragen.",
      "Die Schatzkammer beherbergt das Krönungskreuz der ungarischen Könige aus dem 13. Jahrhundert.",
      "Die Basilika wurde im Jahr 1856 nach 34-jähriger Bauzeit offiziell geweiht."
      ],
      hu: ["A bazilika az ország legmagasabb épülete, kupolájának belső magassága 71,5 méter.", "A Bakócz-kápolnát 1600 darabra bontva helyezték át eredeti helyéről az új templomba.", "A főoltárképet Girolamo Michelangelo Grigoletti festette 1854-ben.", "Kriptájában nyugszik többek között Mindszenty József bíboros is.", "Felszentelésekor, 1856-ban Liszt Ferenc vezényelte az erre az alkalomra írt Esztergomi misét.", "A kincstárban őrzik a magyar királyok koronázási keresztjét a 13. századból.", "A falak vastagsága a kupolát tartó részeken eléri a 17 métert.", "Az építkezés 1822-től 1869-ig tartott, három neves érsek és több építész munkáját dicséri."],
      ro: ["Bazilica are o înălțime totală de 100 de metri, fiind cea mai înaltă clădire din Ungaria.", "Construcția actuală a durat 47 de ani, fiind finalizată în 1869.", "Capela Bakócz (1506) a fost demontată în 1600 de bucăți și încorporată în noua bazilică.", "Altarul principal are dimensiunile de 13,5 x 6,6 metri, fiind pictat de Michelangelo Grigoletti.", "Cripta bazilicii este locul de odihnă al cardinalilor și primatului Ungariei, inclusiv al lui József Mindszenty.", "Ecourile din interiorul domului pot dura până la 9 secunde."],
      en: []
    },
  },
  {
    id: "historical-monostori-erod-extra",
    type: "historical",
    parent: "HU-KE",
    coords: [18.098, 47.749],
    name: { de: "Fort Monostor", hu: "Monostori Erőd", ro: "Fortăreața Monostor", en: "Fort Monostor" },
    description: {
      de: "Ein gigantisches Festungssystem in Komárom, eine der größten Befestigungen Mitteleuropas.",
      hu: "Hatalmas erődrendszer Komáromban, Közép-Európa egyik legnagyobb erődítménye.",
      ro: "Un sistem gigantic de fortificații în Komárom, unul dintre cele mai mari din Europa Centrală.",
      en: "A gigantic fortress system in Komárom, one of Central Europe's largest fortifications."
    },
    facts: {
      de: ["Unterirdische Kasematten.", "Heute Kulturzentrum."],
      hu: ["Földalatti kazamaták.", "Ma kulturális központ."],
      ro: ["Cazemate subterane.", "Astăzi centru cultural."],
      en: ["Underground casemates.", "Now a cultural center."]
    },
    descriptionAdvanced: {
      de: "Das Fort Monostor in Komárom ist ein gigantisches Meisterwerk der Militärarchitektur des 19. Jahrhunderts und eine der größten Festungsanlagen in Mitteleuropa. Errichtet nach den Napoleonischen Kriegen, sollte es als letztes Verteidigungszentrum des Habsburgerreiches dienen. Die Ausmaße der Festung sind atemberaubend: Sie umfasst ein Gelände von über 70 Hektar und verfügt über hunderte von Räumen sowie kilometerlange unterirdische Kasematten. Die massiven Steinmauern und die tiefen Gräben zeugen von der strategischen Bedeutung des Standortes an der Donau. Lange Zeit war die Festung für die Öffentlichkeit gesperrt und diente als geheimes Munitionslager für die sowjetischen Truppen. Heute ist Fort Monostor ein faszinierendes Freilichtmuseum und ein lebendiges Kulturzentrum, das Ausstellungen zur Militärgeschichte, zum Festungsbau und zum Leben der Soldaten zeigt. Die düsteren Gänge und die imposanten Bastionen bieten eine einzigartige Kulisse für Filme und historische Veranstaltungen.",
      hu: "A komáromi Monostori erőd Közép-Európa egyik legnagyobb és legmodernebb 19. századi erődítménye, a katonai építészet remekműve. A hatalmas komplexumot a napóleoni háborúk után emelték, mint a Habsburg Birodalom utolsó védelmi vonalát. Területe meghaladja a 70 hektárt, sűrű átszőve földalatti kazamatákkal és hatalmas lőterekkel. Évtizedekig a szovjet csapatok titkos fegyverraktára volt, ma azonban izgalmas múzeumként és kulturális központként várja a látogatókat. Bejárhatóak a monumentális bástyák, a katonák egykori szállásai és a sötét folyosórendszer, amely a „Duna Gibraltárja” becenevet hozta Komáromnak. Az erőd látványa és méretei lenyűgözik a történelemkedvelőket. Történelem K7 – Erődrendszerek és katonai építészet.",
      ro: "Cetatea Monostor din Komárom este cea mai mare fortificație modernă din Europa Centrală, fiind o capodoperă a arhitecturii militare din secolul al XIX-lea. Construită de Imperiul Austriac pentru a fi 'Gibraltarul de pe Dunăre', cetatea face parte dintr-un sistem defensiv uriaș situat pe ambele maluri ale fluviului. Structura sa, formată din kilometri de coridoare subterane, cazemate masive și bastioane acoperite cu pământ, a fost proiectată să reziste celor mai puternice atacuri de artilerie. Deși nu a fost niciodată implicată în bătălii majore, a servit ca punct strategic și depozit de muniție uriaș, inclusiv pentru armata sovietică în secolul XX. Astăzi, cetatea este un muzeu fascinant unde vizitatorii pot explora 'orașul de sub pământ' și expoziții de istorie militară. Istorie K8 – Sisteme defensive și arhitectură militară.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Festung wurde zwischen 1850 und 1871 als Teil des Komáromer Festungssystems errichtet.",
      "Auf dem Gelände befinden sich über 600 Räume, die früher tausenden Soldaten Platz boten.",
      "Fort Monostor wird oft als das 'Gibraltar an der Donau' bezeichnet.",
      "Während des Kalten Krieges nutzte die Sowjetarmee das Fort als größtes Munitionsdepot in Mitteleuropa.",
      "Die Gesamtlänge der unterirdischen Gänge und Kasematten beträgt mehrere Kilometer.",
      "Die Festung wurde aus gewaltigen Mengen an behauenem Kalkstein und Ziegeln erbaut.",
      "Das Fort ist Teil der vorläufigen Liste des UNESCO-Welterbes für Festungsarchitektur.",
      "Heute finden auf dem weitläufigen Gelände regelmäßig Konzerte, Festivals und Ritterspiele statt."
      ],
      hu: ["Az erődrendszert 1850 és 1871 között építették ki a Duna stratégiai pontján.", "Az épületegyüttesben több mint 600 helyiség található, melyek 8000 katonát tudtak befogadni.", "A Monostori erőd az UNESCO Világörökség várományosi listáján szerepel.", "A hidegháború alatt itt volt Közép-Európa legnagyobb szovjet lőszerraktára.", "Az udvaron rendszeresen tartanak lovasbemutatókat és történelmi fesztiválokat.", "Földalatti folyosóinak teljes hossza több kilométert tesz ki.", "Az erőd építéséhez több millió köbméter követ és téglát használtak fel.", "A monumentális falak a kor legmodernebb tüzérségi támadásainak is ellenálltak."],
      ro: ["Cetatea se întinde pe o suprafață de 70 de hectare și are peste 600 de încăperi.", "Zidurile de piatră și pământ au o grosime de câțiva metri pentru a absorbi șocul exploziilor.", "Fortificația putea adăposti o garnizoană de 8.000 de soldați în condiții de asediu.", "Sistemul de coridoare subterane are o lungime totală de peste 3 km.", "După 1945, a fost cel mai mare depozit de muniție al Armatei Roșii din Europa Centrală.", "Din 2009, cetatea este inclusă pe lista tentativă a Patrimoniului Mondial UNESCO."],
      en: []
    },
  },
  {
    id: "kid-landmark-tatai-tanosveny-extra",
    type: "kid-landmark",
    parent: "HU-KE",
    coords: [18.312, 47.641],
    name: { de: "Tataer Fényes Lehrpfad", hu: "Tatai Fényes Tanösvény", ro: "Poteca Fényes din Tata", en: "Tata Fenyes Nature Trail" },
    description: {
      de: "Ein hölzerner Stegweg durch ein einzigartiges Sumpfgebiet mit sprudelnden Quellen.",
      hu: "Cölöpsétány egy egyedülálló mocsaras területen, kristálytiszta források felett.",
      ro: "O potecă pe piloni printr-o zonă mlaștinoasă unică, deasupra izvoarelor cristaline.",
      en: "A boardwalk trail through a unique marshland, over crystal-clear springs."
    },
    facts: {
      de: ["Konstante Wassertemperatur.", "Interaktive Stationen."],
      hu: ["Állandó vízhőmérséklet.", "Interaktív állomások."],
      ro: ["Temperatură constantă a apei.", "Stații interactive."],
      en: ["Constant water temperature.", "Features interactive stations."]
    },
    descriptionAdvanced: {
      de: "Der Tataer Fényes Lehrpfad ist ein märchenhaftes Naturerlebnis und ein wahres Paradies für Familien und Naturfotografen. Auf einem rund 1,3 Kilometer langen hölzernen Stegweg wandert man durch ein einzigartiges Sumpfgebiet, das von kristallklaren, ganzjährig warmen Karstquellen gespeist wird. Die sprudelnden Quellen am Grund der flachen Seen erzeugen ein faszinierendes Schauspiel, während seltene Pflanzen und Tiere die Wege säumen. Das Wasser hat konstant eine Temperatur von etwa 20-22 Grad Celsius, was dazu führt, dass das Gebiet auch im Winter eisfrei bleibt und eine ganz besondere Atmosphäre ausstrahlt. Interaktive Stationen entlang des Weges erklären spielerisch die ökologischen Zusammenhänge und die Besonderheiten der lokalen Fauna. Kinder können auf Aussichtstürmen die Vogelwelt beobachten oder mit einer handbetriebenen Fähre den See überqueren. Der Lehrpfad ist ein herausragendes Beispiel für sanften Tourismus und bietet Entspannung inmitten einer fast unberührten Sumpflandschaft.",
      hu: "A tatai Fényes Tanösvény egy varázslatos cölöpsétány a város szélén elterülő egyedülálló láperdőben. A terület különlegessége a 20-22 fokos, kristálytiszta karsztforrások feltörése, amelyek még a leghidegebb téli napokon is jégmentesen tartják a mocsarat. A sétány a víz felett kanyarog, lehetőséget adva a látogatóknak, hogy közvetlen közelről figyeljék meg a láp ritka növény- és állatvilágát, mint például a mocsári teknősöket és a különleges vízi madarakat. A tanösvény interaktív állomásai játékosan tanítják meg a gyermekeknek az ökoszisztéma fontosságát. A táj misztikus hangulata, a vízből kinyúló fák és a bugyogó források miatt ez az egyik legnépszerűbb kirándulóhely családok és fotósok számára egyaránt. Természetismeret K5 – Lápok világa és vizes élőhelyek védelme.",
      ro: "Poteca educațională de pe malul lacului Öreg din Tata (Fényes Tanösvény) este o destinație magică pentru copii și iubitorii de natură, oferind o plimbare spectaculoasă pe poduri de lemn deasupra unei mlaștini cu ape termale. Acest ecosistem unic este alimentat de izvoare calde care țâșnesc din adâncuri, menținând o temperatură constantă și o vegetație luxuriantă chiar și în timpul iernii. Copiii pot observa de aproape broaște țestoase, numeroase specii de pești și păsări rare care trăiesc în stufăriș. Traseul este interactiv, având panouri informative și puncte de observație sub formă de turnuri. Este o experiență senzorială deosebită, unde sunetul apei și culorile naturii creează o atmosferă de basm, perfectă pentru educația ecologică timpurie. Științele Naturii K3 – Aventura în mlaștină.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Quellen liefern täglich rund 30.000 Kubikmeter kristallklares Wasser aus dem Untergrund.",
      "Der Lehrpfad wurde im Jahr 2015 eröffnet und hat sich schnell zu einem der beliebtesten Ziele in Nordungarn entwickelt.",
      "Das Wasser im Sumpfgebiet friert aufgrund der konstanten Temperatur selbst bei tiefstem Frost nicht zu.",
      "Zu den seltensten Pflanzen im Gebiet gehört der Sumpffarn, der hier ideale Bedingungen findet.",
      "Besucher können von einem 14 Meter hohen Aussichtsturm den Blick über das gesamte Sumpfgebiet genießen.",
      "Die handbetriebene Seilfähre ist ein besonderes Highlight für Kinder während des Rundgangs.",
      "Der Pfad ist komplett barrierefrei gestaltet und für Kinderwagen bestens geeignet.",
      "In den Seen leben seltene Sumpfschildkröten und zahlreiche Fischarten, die man vom Steg aus beobachten kann."
      ],
      hu: ["A forrásokból naponta több mint 30 ezer köbméter langyos víz tör a felszínre.", "A tanösvény 1350 méter hosszú és teljesen akadálymentesített.", "A terület 2015-ben kapta meg jelenlegi formáját és lett az ország egyik legszebb sétánya.", "Itt található a régió legnagyobb mocsári teknős populációja.", "A látogatók kézzel hajtott kötélkomppal is átkelhetnek az egyik tavon.", "A tanösvény kilátótornyából belátható az egész 30 hektáros védett terület.", "Télen a langyos források felett gomolygó pára mesebeli látványt nyújt.", "A terület a Ramsari Egyezmény védelme alatt álló nemzetközi jelentőségű vizes élőhely."],
      ro: ["Poteca are o lungime de 1350 de metri și este construită în totalitate pe piloni de lemn.", "Izvoarele termale de aici au o temperatură constantă de 20-22 de grade Celsius tot anul.", "În zonă pot fi văzute exemplare rare de nufăr alb și ferigă de mlastină.", "Există un turn de observație de unde se poate admira panorama întregii zone umede.", "Poteca a fost premiată internațional pentru designul său ecologic și accesibilitate.", "Vizitatorii pot închiria bărci mici pentru a explora canalele din jurul potecii."],
      en: []
    },
  },
  {
    id: "animal-habitat-gerecse-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-KE",
    coords: [18.445, 47.680],
    name: { de: "Wildpark Gerecse", hu: "Gerecse vadaspark", ro: "Parcul de animale Gerecse", en: "Gerecse Wildlife Park" },
    description: {
      de: "Ein Park im Gerecse-Gebirge, der die heimischen Wildtierarten in natürlicher Umgebung zeigt.",
      hu: "A Gerecse-hegység vadasparkja, amely hazai vadfajokat mutat be természetes környezetben.",
      ro: "Parc de animale în munții Gerecse, care prezintă specii locale în mediul lor natural.",
      en: "A wildlife park in the Gerecse Mountains, showcasing native species in their natural habitat."
    },
    facts: {
      de: ["Hirsche und Mufflons.", "Schöne Waldwanderwege."],
      hu: ["Szarvasok és muflonok.", "Erdei túraútvonalak."],
      ro: ["Cerbi și mufloni.", "Trasee montane prin pădure."],
      en: ["Deer and mouflons.", "Beautiful forest hiking trails."]
    },
    descriptionAdvanced: {
      de: "Der Wildpark Gerecse, eingebettet in die dichten Wälder des gleichnamigen Gebirges, bietet ein authentisches Naturerlebnis fernab vom Trubel der Großstadt. Der Park hat es sich zur Aufgabe gemacht, die heimischen Wildtierarten Ungarns in ihrer natürlichen Umgebung zu zeigen und das Bewusstsein für den Wald als Lebensraum zu stärken. Auf weitläufigen Flächen können Besucher majestätische Rothirsche, Damwild und die für die Region typischen Mufflons beobachten. Die Gehege sind so gestaltet, dass sie den Tieren viel Rückzugsraum bieten und gleichzeitig gute Beobachtungsmöglichkeiten für Wanderer ermöglichen. Schattige Waldwege führen durch die Anlage und verbinden verschiedene Aussichtspunkte. Der Wildpark ist ein idealer Ausgangspunkt für Wanderungen im Gerecse-Gebirge und bietet besonders Familien die Gelegenheit, die Tiere des Waldes ohne Zäune aus nächster Nähe zu erleben. Die Ruhe und die frische Waldluft machen den Besuch zu einem erholsamen Erlebnis für alle Sinne.",
      hu: "A Gerecse vadaspark a hegység sűrű erdeiben fekvő természetközeli bemutatóhely, ahol a hazai nagyvadakat figyelhetjük meg természetes közegükben. A park célja a magyarországi erdők élővilágának bemutatása és a környezettudatos szemléletformálás. Tágas kifutóiban gímszarvasok, dámvadak és a Gerecsére jellemző muflonok élnek, melyek az árnyas fák között keresnek menedéket. A vadaspark kiváló kiindulópontja a hegységbe induló túráknak, hiszen a jól jelzett ösvények érintik a területet. A csendes, háborítatlan környezet ideális a kikapcsolódásra és a vadmegfigyelésre, ahol a látogatók valódi erdei élményben részesülhetnek, távol a városok zajától. Természetismeret K5 – Erdők életközössége és nagyvadjaink.",
      ro: "Parcul de Vânătoare Gerecse (Gerecse Vadaspark) este o arie protejată situată în inima munților Gerecse, dedicată prezentării și conservării faunei sălbatice native din Ungaria. Într-un cadru natural de păduri de stejar și fag, vizitatorii pot observa animale precum cerbi lopătari, mufloni și mistreți în spații vaste care imită mediul lor natural. Parcul joacă un rol important în educația cinegetică și ecologică, oferind informații despre managementul durabil al pădurilor și despre importanța echilibrului biologic. Traseele de drumeție din jurul parcului sunt liniștite și oferă aer curat, fiind o destinație ideală pentru familiile care doresc să combine mișcarea în natură cu observarea animalelor sălbatice. Științele Naturii K5 – Mamiferele mari ale Europei.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Park beherbergt eine der bedeutendsten Mufflon-Populationen in dieser Region Ungarns.",
      "Gerecse ist bekannt für seinen Reichtum an Fossilien, die manchmal auch am Rande der Wege zu finden sind.",
      "Der Wildpark wird forstwirtschaftlich betreut, um ein natürliches Gleichgewicht zwischen Tier und Wald zu gewährleisten.",
      "Es gibt spezielle Futterstellen, an denen die Tiere zu bestimmten Zeiten besonders gut beobachtet werden können.",
      "Der Park bietet geführte Wanderungen an, bei denen Ranger Wissenswertes über die Waldökologie erklären.",
      "Für Kinder gibt es einen Waldspielplatz, der komplett aus natürlichen Materialien errichtet wurde.",
      "Im Herbst ist die Hirschbrunft ein spektakuläres Naturereignis, das viele Besucher anzieht.",
      "Der Park ist eng mit dem regionalen Wanderwegnetz verbunden, das zu markanten Aussichtspunkten führt."
      ],
      hu: ["A vadaspark híres a jelentős muflonállományáról, amely a hegység egyik jelképe.", "A területen található tanösvények a fenntartható erdőgazdálkodást mutatják be.", "Ősszel a szarvasbőgés idején különleges esti programokat szerveznek.", "A kifutókat úgy alakították ki, hogy a természetes domborzati elemeket használják fel.", "A park területén ritka énekesmadarak és odúlakó fajok is megfigyelhetők.", "Kényelmes pihenőhelyek és erdei játszótér várja a kisgyermekes családokat.", "A vadaspark szoros kapcsolatban áll a közeli Tardos településsel.", "A tiszta hegyi levegő miatt kedvelt célpontja a gyógyulni vágyóknak is."],
      ro: ["Parcul găzduiește una dintre cele mai frumoase populații de mufloni din regiune.", "Suprafața zonei de observație depășește 50 de hectare de pădure nativă.", "Există puncte de hrănire unde animalele pot fi văzute de la distanță mică în siguranță.", "Parcul este situat lângă localitatea Tardos, celebră pentru cariera sa de calcar roșu.", "Vizitatorii pot învăța despre urmele animalelor și despre comportamentul lor sezonier.", "În timpul toamnei, 'boncănitul cerbilor' este un fenomen auditiv spectaculos în această zonă."],
      en: []
    },
  },
  {
    id: "industry-suzuki-esztergom-extra",
    type: "industry",
    parent: "HU-KE",
    coords: [18.751, 47.768],
    name: { de: "Suzuki Werk Esztergom", hu: "Suzuki Autógyár Esztergom", ro: "Fabrica Suzuki Esztergom", en: "Suzuki Plant Esztergom" },
    description: {
      de: "Das Herz der ungarischen Suzuki-Produktion, wo Millionen von Fahrzeugen hergestellt wurden.",
      hu: "A magyarországi Suzuki-gyártás központja, ahol autók milliói készültek.",
      ro: "Centrul producției Suzuki din Ungaria, unde au fost fabricate milioane de mașini.",
      en: "The hub of Suzuki production in Hungary, where millions of cars have been built."
    },
    facts: {
      de: ["1991 gegründet.", "Große Exportkapazität."],
      hu: ["1991-ben alapították.", "Jelentős exportkapacitás."],
      ro: ["Fondată în 1991.", "Capacitate majoră de export."],
      en: ["Founded in 1991.", "Major export capacity."]
    },
    descriptionAdvanced: {
      de: "Das Suzuki-Werk in Esztergom, offiziell Magyar Suzuki Zrt., ist ein Meilenstein der ungarischen Industriegeschichte und das Herz der Automobilproduktion im Land. Seit der Grundsteinlegung im Jahr 1991 hat sich das Werk von einer Montagehalle zu einem hochmodernen Fertigungsstandort entwickelt, der Millionen von Fahrzeugen für den Weltmarkt produziert hat. Hier laufen beliebte Modelle wie der Vitara und der S-Cross vom Band, die für ihre Zuverlässigkeit und Qualität bekannt sind. Das Werk ist einer der größten Arbeitgeber in Nordungarn und hat die Region wirtschaftlich nachhaltig geprägt. Mit modernster Robotertechnik und effizienten Produktionsprozessen setzt Suzuki Maßstäbe in der Fahrzeugfertigung. In den letzten Jahren hat das Werk massiv in die Produktion von Hybridfahrzeugen investiert, um den Anforderungen an eine nachhaltige Mobilität gerecht zu werden. Suzuki Esztergom ist nicht nur ein Produktionsstandort, sondern auch ein Symbol für die erfolgreiche wirtschaftliche Zusammenarbeit zwischen Japan und Ungarn.",
      hu: "Az esztergomi Suzuki gyár, a Magyar Suzuki Zrt., a hazai autóipar egyik alapköve és a város gazdasági motorja. 1991-es alapítása óta az üzem több millió gépkocsit gyártott le a hazai és a nemzetközi piacra, Magyarországot felhelyezve a globális autóipari térképre. Itt készülnek a népszerű Vitara és S-Cross modellek, melyek a magyar utak meghatározó szereplői. A gyár folyamatos modernizálódik, ma már a hibrid technológia és az automatizált gyártósorok jellemzik. Több ezer munkavállalót foglalkoztat, és kiterjedt hazai beszállítói hálózatával az ország egyik legnagyobb adófizetője. Az üzem nemcsak ipari létesítmény, hanem a japán-magyar gazdasági együttműködés sikeres szimbóluma. Földrajz K8 – Autógyártás és technológiai fejlődés.",
      ro: "Fabrica Magyar Suzuki din Esztergom este unul dintre cei mai importanți producători de autoturisme din Europa Centrală și un simbol al succesului industrial japonez în Ungaria. Inaugurată în 1992, fabrica a produs primul automobil modern maghiar de după război, celebrul model 'Swift', care a devenit 'mașina noastră' pentru milioane de familii. Astăzi, unitatea de la Esztergom este un centru de producție hi-tech, asamblând modele precum Vitara și S-Cross, care sunt exportate în peste 100 de țări de pe cinci continente. Procesul de producție utilizează sute de roboți industriali și respectă standarde japoneze stricte de calitate. Fabrica este principalul angajator din regiunea Dunării și un motor pentru sute de furnizori locali. Geografie K8 – Industria auto și exportul global.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das erste in Ungarn produzierte Suzuki-Modell war der legendäre Swift im Jahr 1992.",
      "Das Werk in Esztergom ist der einzige europäische Produktionsstandort von Suzuki.",
      "Im Jahr 2020 feierte das Werk die Produktion des 3,5-millionsten Fahrzeugs.",
      "Rund 90 Prozent der in Esztergom hergestellten Autos werden in über 100 Länder weltweit exportiert.",
      "Das Werk verfügt über ein eigenes Testgelände und moderne Qualitätssicherungszentren.",
      "Suzuki ist einer der größten Steuerzahler Ungarns und ein wichtiger Partner für lokale Zulieferer.",
      "Die Fabrik hat eine eigene Eisenbahnanbindung für den effizienten Abtransport der Neufahrzeuge.",
      "Seit 2019 konzentriert sich das Werk verstärkt auf die Fertigung von Modellen mit Hybrid-Antrieb."
      ],
      hu: ["Az első Magyarországon gyártott modell a legendás „mi autónk”, a Swift volt 1992-ben.", "Ez a Suzuki egyetlen európai gyártóbázisa, ahonnan több mint 100 országba exportálnak.", "Az üzemben 2020-ban ünnepelték a 3,5 milliomodik legördülő autót.", "A gyár területe hatalmas, saját vasúti rakodóval és tesztpályával rendelkezik.", "A termelés több mint 90 százaléka külföldi piacokra kerül.", "A Suzuki Esztergom egyik legnagyobb és legfontosabb munkaadója évtizedek óta.", "Kiemelt figyelmet fordítanak a gyártás során a hulladékmentességre és az energiahatékonyságra.", "A 2019-es évtől kezdődően az üzem fókuszába az öntöltő hibrid modellek kerültek."],
      ro: ["Magyar Suzuki a fost fondată în 1991 ca o investiție mixtă maghiaro-japoneză.", "Primul model Suzuki Swift a ieșit de pe banda de montaj în anul 1922.", "Capacitatea de producție a fabricii este de aproximativ 300.000 de vehicule pe an.", "În anul 2020, fabrica a atins borna de 3,5 milioane de mașini produse.", "Unitatea de la Esztergom este singura fabrică Suzuki din Europa.", "Fabrica se întinde pe o suprafață de peste 57 de hectare lângă malul Dunării."],
      en: []
    },
  },

  // HU-NO: Nógrád (2G, 2LN, 1W)
  {
    id: "historical-hollokoi-var-extra",
    type: "historical",
    parent: "HU-NO",
    coords: [19.584, 47.994],
    name: { de: "Burg Hollókő", hu: "Hollókői vár", ro: "Cetatea Hollókő", en: "Holloko Castle" },
    description: {
      de: "Eine mittelalterliche Burgruine, die über dem UNESCO-Welterbedorf Hollókő wacht.",
      hu: "Középkori várrom, amely az UNESCO világörökségi falu, Hollókő felett őrködik.",
      ro: "O ruină medievală care veghează asupra satului UNESCO Hollókő.",
      en: "A medieval castle ruin watching over the UNESCO World Heritage village of Hollókő."
    },
    facts: {
      de: ["Im 13. Jahrhundert erbaut.", "Toller Rundblick."],
      hu: ["A 13. században épült.", "Pazar körpanoráma."],
      ro: ["Construită în secolul XIII.", "Panoramă superbă."],
      en: ["Built in the 13th century.", "Magnificent panoramic view."]
    },
    descriptionAdvanced: {
      de: "Die Burg Hollókő thront majestätisch auf einem Felsen über dem malerischen Dorf Hollókő, das zum UNESCO-Welterbe gehört. Die im 13. Jahrhundert nach dem Mongoleneinfall errichtete Festung diente jahrhundertelang als wichtiger strategischer Punkt im Norden Ungarns. Ihre markante, unregelmäßige Form passt sich perfekt dem zerklüfteten Gelände an. Besucher können die gut erhaltenen Mauern, den imposanten Bergfried und die Palasträume erkunden, die heute interessante Ausstellungen zur mittelalterlichen Waffenkunst und zum Leben der Burgherren beherbergen. Besonders faszinierend ist der Blick von den Bastionen auf die charakteristischen Dächer des alten Dorfes und die sanften Hügel des Cserhát-Gebirges. Die Burg ist eng mit den Legenden der Region verbunden und bildet zusammen mit dem Dorf ein einzigartiges Ensemble, das die Zeit des Mittelalters und der traditionellen Volkskultur lebendig hält. Regelmäßige Ritterspiele und historische Festivals lassen die glanzvolle Vergangenheit der Burg für Besucher aus aller Welt wieder auferstehen.",
      hu: "A hollókői vár a Cserhát dombjai között, egy meredek sziklán magasodik az UNESCO világörökségi falu felett. A 13. században épült erődítmény viharos történelmet tudhat magáénak, számos ostromot és tulajdonosváltást élt meg. Jellegzetes, szabálytalan alaprajza követi a szikla formáját, meghatározva a vidék látképét. A közelmúltban felújított várban középkori fegyverkiállítás, várkápolna és panoptikum várja a látogatókat, bemutatva a lovagok és a várnép mindennapjait. A bástyákról nyíló kilátás lenyűgöző: tiszta időben az egész Cserhát és a Mátra vonulatai is láthatók. Hollókő vára és a falu együttesen az ódon magyar hagyományok és a történelmi múlt élő mementója. Történelem K6 – Várak és népi hagyományok.",
      ro: "Cetatea Hollókő veghează de peste șapte secole asupra satului tradițional omonim, fiind parte integrantă a sitului UNESCO de la Hollókő. Construită pe o creastă stâncoasă a Munților Cserhát după invazia tătară din secolul al XIII-lea, cetatea a jucat un rol defensiv crucial în luptele cu turcii. Recent renovată, fortificația oferă vizitatorilor șansa de a explora turnul de observație, palatul gotic și expoziția de arme medievale. Drumul care urcă din sat spre cetate oferă perspective spectaculoase asupra acoperișurilor de șindrilă ale caselor vechi și asupra peisajului colinar din jur. Este un simbol al dăinuirii culturii palóc și un exemplu rar de unitate perfectă între o cetate medievală și așezarea sa rurală. Istorie K6 – Cetăți de pază și patrimoniul mondial.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Legende nach wurde die Burg von Raben erbaut, die die Steine herbeischafften, um eine entführte Schönheit zu befreien.",
      "Die Burg wurde im Jahr 1310 erstmals urkundlich erwähnt und gehörte bedeutenden Adelsfamilien.",
      "Während der Türkenkriege wechselte die Burg mehrfach den Besitzer zwischen Osmanen und Ungarn.",
      "Im Jahr 1711 wurde die Burg auf Befehl von Kaiser Leopold I. teilweise zerstört, um Aufständischen keinen Unterschlupf zu bieten.",
      "Umfassende Restaurierungsarbeiten in den 1960er Jahren und erneut 2015 machten die Burg wieder sicher begehbar.",
      "Innerhalb der Burg befindet sich eine kleine Kapelle, die in den Fels gehauen wurde.",
      "Der Wohnturm der Burg beherbergt ein Panoptikum, das die ehemaligen Bewohner in zeitgenössischen Gewändern darstellt.",
      "Die Burg ist nur über einen romantischen Wanderweg vom Dorf aus erreichbar."
      ],
      hu: ["A várat a tatárjárás után emelték a Kacsics nemzetség tagjai.", "Egy legenda szerint az építőköveket hollók hordták fel a hegyre egy elrabolt lány kérésére.", "A 18. század elején császári parancsra a várat részben felrobbantották, hogy ne használhassák a kurucok.", "A vár tornyából látható a falu jellegzetes nádtetős házainak és templomának sziluettje.", "Itt rendezték meg az ország egyik első hagyományőrző lovagi tornáját.", "A vármúzeumban látható az ország egyik legteljesebb középkori konyharekonstrukciója.", "A várba vezető gyalogút a falu központjából indul és kényelmes sétával elérhető.", "A vár és a falu 1987 óta a világörökség része, nemzetközi jelentőségű kulturális kincs."],
      ro: ["Prima atestare documentară a cetății datează din anul 1310.", "Numele 'Hollókő' înseamnă 'Piatra Corbului', legat de o legendă despre un corb care a ajutat la construcție.", "Cetatea a fost distrusă parțial în 1711 din ordinul împăratului habsburgic pentru a preveni revoltele.", "Zidurile cetății sunt construite din piatră locală de andezit.", "Interiorul găzduiește o capelă medievală mică și un atelier de fierărie demonstrativ.", "Panorama de pe turn cuprinde întreaga regiune muntoasă a Cserhátului."],
      en: []
    },
  },
  {
    id: "historical-dregely-vara-extra",
    type: "historical",
    parent: "HU-NO",
    coords: [19.043, 47.996],
    name: { de: "Burg Drégely", hu: "Drégely vára", ro: "Cetatea Drégely", en: "Dregely Castle" },
    description: {
      de: "Symbol für Heldenmut, wo Szondi und seine Krieger gegen das osmanische Heer kämpften.",
      hu: "A hősies helytállás jelképe, ahol Szondi György várkapitány és katonái küzdöttek a török ellen.",
      ro: "Simbol al eroismului, unde Szondi și oștenii săi au luptat împotriva otomanilor.",
      en: "A symbol of heroism, where Szondi and his warriors fought against the Ottoman army."
    },
    facts: {
      de: ["In 444 Metern Höhe.", "Historischer Ort."],
      hu: ["444 méter magasságban.", "Történelmi emlékhely."],
      ro: ["La 444 metri înălțime.", "Loc istoric."],
      en: ["Located at 444 meters altitude.", "National historic site."]
    },
    descriptionAdvanced: {
      de: "Die Burg Drégely ist ein heiliger Ort der ungarischen Geschichte und ein unsterbliches Symbol für Heldenmut und Opferbereitschaft. Gelegen auf einem steilen 444 Meter hohen Gipfel des Börzsöny-Gebirges, war sie Schauplatz einer der heldenhaftesten Taten während der Türkenkriege. Im Jahr 1552 verteidigte der Burgkapitän György Szondi die Festung mit nur 146 Soldaten gegen ein gewaltiges osmanisches Heer von über 12.000 Mann. Trotz der hoffnungslosen Lage weigerten sie sich aufzugeben und kämpften bis zum letzten Mann. Heute sind die Ruinen der Burg ein nationales Denkmal und ein Ziel für tausende Wanderer, die den Geist der Vergangenheit spüren wollen. Die rauen Mauern, die fast mit dem Felsen verschmelzen, bieten eine atemberaubende Aussicht über das Ipoly-Tal. Ein Besuch der Burg ist eine emotionale Reise, die an die Tapferkeit derer erinnert, die ihr Leben für die Freiheit ihres Landes gaben.",
      hu: "Drégely vára a magyar történelem egyik legmegrendítőbb emlékhelye, a hősies önfeláldozás szimbóluma. A Börzsöny északi részén, 444 méter magas sziklán álló romoknál zajlott 1552-ben Szondi György várkapitány és maroknyi seregének legendás csatája a török túlerő ellen. Bár a vár elpusztult, Szondi és vitézeinek bátorsága, akik az utolsó szálig elestek a szabadságért, örökre beíródott a nemzet emlékezetébe. Ma a romok között sétálva érezhető a történelem súlya, a falmaradványok pedig dacolnak az idővel és az elemekkel. A csúcsról nyíló panoráma az Ipoly völgyére és a szlovák hegyekre fenséges, méltó keretet adva a hősök emlékének. Történelem K6 – Szondi György hősies halála és a végvári harcok.",
      ro: "Cetatea Drégely este un simbol legendar al eroismului maghiar, fiind situată pe un vârf abrupt de andezit în Munții Börzsöny. În anul 1552, căpitanul György Szondi și mica sa garnizoană de 150 de soldați au rezistat cu o dârzenie incredibilă în fața unei armate otomane de peste 10.000 de oameni. Sacrificiul lor suprem a devenit un punct de referință în literatura și identitatea națională, fiind imortalizat în poeziile lui Arany János. Astăzi, ruinele cetății oferă o experiență de drumeție memorabilă, drumul spre vârf fiind un test de rezistență. Panorama asupra văii Ipoly și a munților din jur este răsplata perfectă pentru efort. Eforturile recente de conservare au salvat zidurile rămase, transformând locul într-un monument istoric de pelerinaj. Istorie K7 – Rezistența împotriva expansiunii otomane.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde vermutlich im 13. Jahrhundert erbaut, um die Handelswege nach Norden zu kontrollieren.",
      "Die Belagerung durch den Pascha von Buda im Juli 1552 dauerte vier Tage und endete mit dem Tod aller Verteidiger.",
      "Der osmanische Kommandeur Ali Pascha war so beeindruckt von Szondis Tapferkeit, dass er ihn mit militärischen Ehren bestatten ließ.",
      "Die Burg wurde nach der Belagerung nie wieder aufgebaut und blieb für Jahrhunderte eine Ruine.",
      "Seit 1991 bemüht sich eine Stiftung um die Konservierung der Mauern und die Erforschung des Geländes.",
      "Jedes Jahr im Juli findet eine Gedenkfeier zu Ehren von György Szondi und seinen Soldaten statt.",
      "An der Burgruine befindet sich eine Gedenktafel, die die Namen der bekannten Verteidiger auflistet.",
      "Der Aufstieg zur Burg gilt als einer der schönsten, aber auch anstrengendsten Wanderwege in der Region Nógrád."
      ],
      hu: ["Szondi György és 146 vitéze több mint 12 000 török katonával szemben védte a várat négy napig.", "A hősies ellenállásról Arany János is írt híres balladát „Szondi két apródja” címmel.", "Ali pasa, a török sereg vezére tisztelte Szondi bátorságát, ezért katonai pompával temettette el.", "A vár eredetileg a 13. században épült, mint vadászkastély és határvédő erőd.", "Az 1990-es évek óta folyik a falak szakszerű állagmegóvása önkéntesek segítségével.", "Drégely vára 2012 óta Nemzeti Emlékhely, kiemelt történelmi jelentőséggel bír.", "Minden év júliusában nagyszabású várjátékokkal emlékeznek meg az ostromról.", "A vár csak gyalogosan közelíthető meg, a környező erdők az ország legszebb túraútvonalai közé tartoznak."],
      ro: ["Cetatea a fost construită în secolul al XIII-lea ca punct de observație.", "Asediul din 1552 a durat patru zile, cetatea fiind distrusă complet de artileria turcă.", "Se află la o altitudine de 444 metri pe o stâncă vulcanică izolată.", "După căderea cetății, turcii nu au mai reconstruit-o, ridicând o nouă fortificație în vale.", "Anual, în luna iulie, are loc 'Sărbătoarea Szondi' în memoria eroilor căzuți.", "Traseul spre cetate face parte din parcursul istoric național al Ungariei."],
      en: []
    },
  },
  {
    id: "kid-landmark-ipolytarnoc-extra",
    type: "kid-landmark",
    parent: "HU-NO",
    coords: [19.645, 48.232],
    name: { de: "Fossilien von Ipolytarnóc", hu: "Ipolytarnóci Ősmaradványok", ro: "Fosilele de la Ipolytarnóc", en: "Ipolytarnoc Fossils" },
    description: {
      de: "Ein 'Pompeji der Urzeit' mit versteinerten Fußabdrücken und prähistorischen Pflanzen.",
      hu: "Az 'ősvilági Pompeji', ahol megkövült lábnyomok és őskori növények láthatók.",
      ro: "Un 'Pompei al preistoriei' cu urme fosilizate și plante preistorice.",
      en: "A 'Prehistoric Pompeii' featuring fossilized footprints and prehistoric plants."
    },
    facts: {
      de: ["17 Millionen Jahre alt.", "Interaktive Ausstellung."],
      hu: ["17 millió éves leletek.", "Interaktív kiállítás."],
      ro: ["Vechime de 17 milioane ani.", "Expoziție interactivă."],
      en: ["17 million years old.", "Interactive exhibition."]
    },
    descriptionAdvanced: {
      de: "Ipolytarnóc ist ein weltweit einzigartiges Naturphänomen, das oft als das 'Pompeji der Urzeit' bezeichnet wird. Vor rund 17 Millionen Jahren begrub ein gewaltiger Vulkanausbruch die damalige subtropische Landschaft unter einer dicken Ascheschicht und bewahrte sie so für die Ewigkeit. Besucher können hier versteinerte Fußabdrücke von längst ausgestorbenen Tieren bewundern, die im ehemaligen Schlamm am Ufer eines Ur-Meeres zurückgeblieben sind. Zu den beeindruckendsten Funden gehören riesige versteinerte Kiefernstämme und die Blätter von Urzeitpflanzen. Das moderne Besucherzentrum bietet ein faszinierendes 4D-Kino, das die Katastrophe von damals für Kinder und Erwachsene hautnah erlebbar macht. Ein Erlebnispfad führt durch den Park und zeigt lebensgroße Rekonstruktionen von prähistorischen Raubtieren und Pflanzen. Ipolytarnóc ist nicht nur ein bedeutendes wissenschaftliches Zentrum, sondern auch ein spannendes Ausflugsziel, das die Erdgeschichte auf spielerische und beeindruckende Weise vermittelt.",
      hu: "Az ipolytarnóci ősmaradványok lelőhelye egy világritkaságnak számító „ősvilági Pompeji” Nógrád vármegyében. 17 millió évvel ezelőtt egy vulkánkitörés során a forró hamu konzerválta az akkori szubtrópusi dzsungelt és lakóit. A látogatók itt megtekinthetik az őskori állatok megkövesedett lábnyomait, köztük orrszarvúakét és medvekutyákét, valamint hatalmas megkövült fenyőtörzseket. A modern látogatóközpont interaktív kiállításokkal, 4D-s mozival és tanösvényekkel repíti vissza a vendégeket az időben. A terület a Novohrad-Nógrád UNESCO Globális Geopark szíve, ahol a tudomány és a szórakozás találkozik, felejthetetlen élményt nyújtva gyermekeknek és felnőtteknek egyaránt. Földrajz K6 – Ősvilág és geológiai kincseink.",
      ro: "Rezervația Paleontologică de la Ipolytarnóc este un 'Pompei al lumii antice', oferind o aventură fascinantă în timp pentru micii exploratori. Aici, o erupție vulcanică de acum 17 milioane de ani a conservat perfect urme de animale preistorice, plante exotice și trunchiuri de arbori gigantici. Copiii pot vedea urmele lăsate de rinoceri antici și prădători dispăruți în noroiul vulcanic, pot explora o pădure de pini preistorici pietrificați și se pot bucura de un cinema 4D care recreează lumea de acum milioane de ani. Traseele de drumeție tematice și parcul de aventură din coronamentul arborilor fac din Ipolytarnóc o destinație educativă de top. Este un loc unde paleontologia devine o poveste vie și captivantă. Științele Naturii K5 – Fosilele și istoria pământului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "In Ipolytarnóc wurden Fußabdrücke von über 11 verschiedenen prähistorischen Tierarten entdeckt.",
      "Der größte hier gefundene versteinerte Baumstamm war ursprünglich über 100 Meter lang.",
      "Das Gebiet wurde bereits 1944 unter Naturschutz gestellt und ist heute Teil des Novohrad-Nógrád Geoparks.",
      "Die Fundstelle gehört zum UNESCO-Welterbe und gilt als eine der reichsten Fossilienfundstätten Europas.",
      "Besucher können an einer geführten Tour teilnehmen, die unter einer schützenden Halle direkt über die Fundschichten führt.",
      "Das 4D-Kino simuliert den Vulkanausbruch mit Spezialeffekten wie Wind und Gerüchen.",
      "In der 'Halle der Urzeit-Haie' sind Zähne von Raubfischen zu sehen, die einst im Tethys-Meer schwammen.",
      "Der Park bietet auch einen Baumkronenpfad, von dem aus man die Natur aus der Vogelperspektive betrachten kann."
      ],
      hu: ["Itt találták meg a világ egyik legnagyobb megkövesedett fenyőtörzsét, amely eredetileg 100 méteres volt.", "Több mint 3000 lábnyomot azonosítottak a kutatók az egykori mocsár üledékében.", "A terület 1944 óta országos védettségű természetvédelmi terület.", "Az Európa Diplomás terület része az UNESCO Világörökség várományosi listájának.", "A 4D-s mozi az ősvilági katasztrófát szimulálja speciális effektekkel.", "A tanösvényeken életnagyságú ősmammut és más állatrekonstrukciók láthatók.", "Ipolytarnóc a nemzetközi geoturizmus egyik legfontosabb magyarországi célpontja.", "A területen található kőzetek között cápafogakat és egzotikus növényi lenyomatokat is találtak."],
      ro: ["Ipolytarnóc a primit Diploma Europeană pentru Arii Protejate în anul 1995.", "Aici se află unul dintre cele mai mari trunchiuri de copac pietrificat din lume, lung de 42 de metri.", "Urmele a peste 11 specii de animale preistorice au fost identificate în gresia vulcanică.", "Rezervația deține un centru de vizitare ultra-modern cu tehnologie de realitate augmentată.", "Situl este propus pentru includerea în Patrimoniul Mondial UNESCO datorită unicității sale.", "În apropiere se află un parc de aventură cu poduri de frânghie situat la înălțime în pădure."],
      en: []
    },
  },
  {
    id: "animal-habitat-nogradi-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-NO",
    coords: [19.047, 47.904],
    name: { de: "Wildpark Nógrád", hu: "Nógrádi vadaspark", ro: "Parcul de animale Nógrád", en: "Nograd Wildlife Park" },
    description: {
      de: "Ein weitläufiges Gelände, auf dem Rotwild, Damwild und Mufflons beobachtet werden können.",
      hu: "Tágas terület, ahol gímszarvasok, dámvadak és muflonok figyelhetők meg.",
      ro: "O zonă vastă unde pot fi observați cerbi carpatini, lopătari și mufloni.",
      en: "A spacious area where red deer, fallow deer, and mouflons can be observed."
    },
    facts: {
      de: ["Traktorsafaris möglich.", "Natürlicher Lebensraum."],
      hu: ["Traktoros szafari túrák.", "Természetes élőhelyek."],
      ro: ["Safari cu tractorul.", "Habitat natural."],
      en: ["Tractor safari tours available.", "Natural habitats."]
    },
    descriptionAdvanced: {
      de: "Der Wildpark Nógrád bietet ein außergewöhnliches Safari-Erlebnis inmitten der hügeligen Landschaft Nordungarns. Auf einer riesigen Fläche von über 110 Hektar können Tiere beobachtet werden, die sich in einem fast vollkommen natürlichen Lebensraum bewegen. Das Besondere an diesem Park ist, dass es keine klassischen Gehwege für Besucher gibt; stattdessen wird man mit einem Traktor und einem Anhänger durch das Gelände gefahren. Während dieser 'Traktorsafari' kommt man den großen Herden von Rotwild, Damwild und Mufflons unglaublich nahe. Die Tiere sind an den Traktor gewöhnt und lassen sich oft aus wenigen Metern Entfernung fotografieren. Der Parkbetreiber erzählt während der Fahrt interessante Geschichten über die Jagd, den Naturschutz und die Biologie der Tiere. Die unberührte Natur, die weiten Wiesen und die dichten Wälder des Parks vermitteln ein Gefühl von Freiheit und Wildnis, das in Europa selten geworden ist. Ein Besuch in Nógrád ist ein unvergessliches Abenteuer für Tierliebhaber und Familien.",
      hu: "A Nógrádi Vadaspark egyedülálló safari-élményt kínál Észak-Magyarország dombjai között. A több mint 110 hektáros területen az állatok nem szűk ketrecekben, hanem szinte teljesen szabadon, természetes élőhelyükön élnek. A látogatókat traktorral vontatott pótkocsikon szállítják körbe a hatalmas legelőkön, ahol karnyújtásnyi közelségbe kerülhetnek a gímszarvas- és dámvadcsapatokhoz, valamint a muflonokhoz és vaddisznókhoz. A vadaspark célja a vadállomány bemutatása mellett az erdő és a vad gazdálkodásának megismertetése. A festői táj, a dombok és a hatalmas erdőfoltok valódi vadon érzetet keltenek, ami felejthetetlen kaland családoknak és természetfotósoknak egyaránt. Természetismeret K5 – Nagyvadjaink és a fenntartható vadgazdálkodás.",
      ro: "Parcul de Vânătoare Nógrád (Nógrádi Vadaspark) este o arie protejată spectaculoasă situată la poalele Munților Börzsöny, oferind o perspectivă unică asupra faunei cinegetice maghiare. Vizitatorii pot explora parcul la bordul unor remorci tractate special, trecând prin păduri și pajiști unde turme mari de cerbi carpatini, cerbi lopătari, mufloni și mistreți trăiesc într-o stare de semi-libertate. Parcul pune accent pe prezentarea ecosistemului forestier autentic și pe importanța managementului durabil al vânatului. Este o destinație ideală pentru familii, oferind o experiență de tip 'safari' în inima Ungariei de Nord, unde animalele pot fi văzute în habitatul lor natural, fără garduri vizibile. Științele Naturii K5 – Fauna forestieră și habitatele de munte.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Wildpark beherbergt mehrere hundert Tiere, darunter kapitale Hirsche und scheue Wildschweine.",
      "Die Traktorsafaris dauern in der Regel etwa 45 bis 60 Minuten und führen quer durch das Gelände.",
      "Der Park ist bekannt für seine erstklassige Zucht von Rotwild mit beeindruckenden Geweihen.",
      "Neben der Safari gibt es im Eingangsbereich einen Streichelzoo für Kinder mit Ziegen und Schafen.",
      "Der Wildpark Nógrád ist ein beliebtes Ziel für Naturfotografen, die Tiere ohne störende Zäune aufnehmen wollen.",
      "Das Gelände war früher ein geschlossenes Jagdgebiet und wurde erst später für den Tourismus geöffnet.",
      "In der Brunftzeit im September bietet der Park spezielle Touren an, um das Röhren der Hirsche zu erleben.",
      "Der Parkladen bietet regionale Spezialitäten und Produkte aus Wildfleisch an."
      ],
      hu: ["A vadaspark területe meghaladja a 110 hektárt, sűrű erdőkkel és tágas rétekkel.", "A traktoros túra során több száz nagyvadat láthatunk közvetlen közelről.", "Nógrád vármegye legnagyobb és legismertebb magánkézben lévő vadasparkja.", "A parkban sikeres vadgazdálkodás folyik, híresek a kapitális trófeát viselő bikákról.", "A bejáratnál állatsimogató várja a kisebb gyerekeket juhokkal és kecskékkel.", "A terület korábban zárt vadászterület volt, mielőtt megnyitották a nagyközönség előtt.", "Szeptemberben a szarvasbőgés idején különleges esti túrákat is tartanak.", "A parkban helyi vadhúsból készült termékeket is vásárolhatnak a látogatók."],
      ro: ["Parcul se întinde pe o suprafață impresionantă de peste 100 de hectare.", "Este renumit pentru populația sa de mufloni, aduși inițial din Corsica.", "Traseul cu tractorul oferă posibilitatea de a vedea animalele de la doar câțiva metri distanță.", "În cadrul parcului funcționează un punct de informare despre ecologia pădurii.", "Animalele sunt obișnuite cu prezența vehiculelor, ceea ce permite fotografierea lor facilă.", "Peisajul oferă o panoramă superbă spre cetatea Nógrád situată în apropiere."],
      en: []
    },
  },
  {
    id: "industry-salgotarjani-uveggyar-extra",
    type: "industry",
    parent: "HU-NO",
    coords: [19.789, 48.103],
    name: { de: "Glasfabrik Salgótarján", hu: "Salgótarjáni Üveggyár", ro: "Fabrica de Sticlă Salgótarján", en: "Salgotarjan Glass Factory" },
    description: {
      de: "Eine traditionsreiche Fabrik, bekannt für ihre hochwertigen Glas- und Kristallprodukte.",
      hu: "Nagy múltú gyár, amely kiváló minőségű üveg- és kristálytermékeiről ismert.",
      ro: "O fabrică cu tradiție, celebră pentru produsele de sticlă și cristal de calitate.",
      en: "A long-standing factory famous for its high-quality glass and crystal products."
    },
    facts: {
      de: ["Hunderte Jahre Glasmacherkunst.", "Exportiert weltweit."],
      hu: ["Több évszázados üvegfúvó múlt.", "Világszerte exportál."],
      ro: ["Secole de meșteșug al sticlei.", "Exportă în întreaga lume."],
      en: ["Centuries of glassmaking history.", "Exports worldwide."]
    },
    descriptionAdvanced: {
      de: "Die Glasfabrik in Salgótarján ist ein traditionsreiches Zentrum des ungarischen Kunsthandwerks und der Industrie. Seit dem 19. Jahrhundert ist die Stadt eng mit der Kunst der Glasherstellung verbunden, die durch Generationen von Facharbeitern perfektioniert wurde. Das Werk ist bekannt für seine hochwertigen Hohlglasprodukte, Kristallgläser und kunstvoll verzierten Vasen, die in viele Länder weltweit exportiert werden. Besucher können in der angeschlossenen Schauhütte die faszinierende Arbeit der Glasbläser hautnah miterleben und sehen, wie aus einer glühenden Masse filigrane Kunstwerke entstehen. Das Glasmuseum dokumentiert die wechselvolle Geschichte der Fabrik und zeigt eine beeindruckende Sammlung von historischen Exponaten und modernem Design. Trotz der Herausforderungen des Marktes hat die Glasfabrik ihren Ruf als Produzent von erstklassiger Qualität bewahrt. Sie ist ein Symbol für den industriellen Stolz von Salgótarján und ein lebendiges Beispiel für die Verbindung von Tradition und moderner Fertigungstechnik.",
      hu: "A salgótarjáni üveggyártás évszázados hagyományokkal rendelkező, világhírű magyar iparág, amelynek központja Nógrád székhelye. A gyár az üvegfúvás és a kristálymegmunkálás művészetét ötvözi a modern technológiával. Termékei, köztük a kézzel csiszolt kelyhek, vázák és dísztárgyak, a világ számos luxushotelében és királyi udvarában megtalálhatók. A város története elválaszthatatlan az üvegipar felemelkedésétől, amely generációk számára biztosított megélhetést és szakmai büszkeséget. A látogatók a múzeumban megismerhetik a technológia fejlődését, és alkalmanként betekintényt nyerhetnek a gyártás látványos folyamataiba is, ahol az izzó üvegből törékeny ékszer születik. Földrajz K8 – Hagyományos iparágak és kézműves technológiák.",
      ro: "Fabrica de Sticlă din Salgótarján este un simbol al tradiției industriale a orașului, fiind renumită pentru producția de sticlărie de înaltă calitate și design deosebit. Fondată în secolul al XIX-lea pentru a valorifica resursele locale de cărbune și nisip cuarțos, fabrica a devenit celebră la nivel internațional pentru sticla sa suflată manual și pentru produsele din cristal. Designul modern al obiectelor din sticlă produse aici a câștigat numeroase premii la expoziții mondiale, fiind exportate pe toate continentele. Deși industria sticlei a trecut prin perioade dificile, moștenirea artistică și tehnică este păstrată în Muzeul Sticlei din oraș, care prezintă evoluția de la uneltele arhaice la formele de artă contemporană. Este o mărturie a ingeniozității meșteșugarilor din Ungaria de Nord. Geografie K8 – Industria silicatului și designul industrial.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die erste Glashütte in der Region wurde bereits im Jahr 1893 gegründet.",
      "Salgótarján war über Jahrzehnte das Zentrum der ungarischen Glas- und Bergbauindustrie.",
      "In der Fabrik werden noch heute viele Arbeitsschritte in traditioneller Handarbeit ausgeführt.",
      "Das hier hergestellte Bleikristall ist für seinen besonderen Glanz und seinen klaren Klang bekannt.",
      "Die Glasfabrik belieferte früher königliche Höfe und Luxushotels in ganz Europa.",
      "Im Glasmuseum sind über 2.000 Exponate zu sehen, die die Entwicklung der Glasformung zeigen.",
      "Salgótarján feiert jährlich ein Glas-Festival, das Künstler und Sammler anzieht.",
      "Das Unternehmen setzt heute verstärkt auf individuelles Design und exklusive Kleinserien."
      ],
      hu: ["Az első üveghutát a környéken már 1893-ban megalapították.", "Salgótarján évtizedekig a közép-európai üveg- és bányászipar egyik fellegvára volt.", "A gyárban ma is alkalmazzák a hagyományos, szájjal fúvott üvegkészítési technikát.", "Itt készültek azok a híres ólomkristály termékek, melyek Hungarikumnak számítottak.", "Az üvegmúzeumban több mint 2000 egyedi kiállítási tárgy látható.", "A salgótarjáni üvegtermékek több világkiállításon is nagydíjat nyertek.", "A gyár speciális laboratóriumi üvegeket is gyárt a vegyipar számára.", "Az üvegfestés és gravírozás helyi mesterei világszerte elismert szakemberek."],
      ro: ["Fabrica de sticlă a fost înființată în anul 1893 sub numele de 'Öblösüveggyár'.", "Produsele de la Salgótarján au decorat mesele multor case regale din Europa.", "Orașul a fost supranumit 'orașul sticlei și al oțelului' datorită industriei sale grele.", "Muzeul Sticlei deține o colecție de peste 2000 de piese unice din cristal și sticlă colorată.", "Tehnica suflării sticlei este încă prezentată ca meșteșug tradițional în atelierele locale.", "Fabrica a fost un pionier în utilizarea gazului pentru topirea sticlei în locul cărbunelui."],
      en: []
    },
  },

  // HU-PE: Pest (2G, 2LN, 1W)
  {
    id: "historical-visegradi-fellegvar-extra",
    type: "historical",
    parent: "HU-PE",
    coords: [18.981, 47.794],
    name: { de: "Zitadelle von Visegrád", hu: "Visegrádi Fellegvár", ro: "Cetatea din Visegrád", en: "Visegrad Citadel" },
    description: {
      de: "Die majestätische Burg hoch über dem Donauknie, einst Residenz der Könige.",
      hu: "A Dunakanyar felett magasodó fenséges vár, egykori királyi székhely.",
      ro: "Cetatea maiestuoasă de deasupra cotului Dunării, fostă reședință regală.",
      en: "The majestic castle high above the Danube Bend, once a royal residence."
    },
    facts: {
      de: ["Mittelalterliche Waffen.", "Blick auf das Donauknie."],
      hu: ["Középkori fegyverkiállítás.", "Kilátás a Dunakanyarra."],
      ro: ["Expoziție de arme medievale.", "Vedere spre cotul Dunării."],
      en: ["Medieval weapons display.", "Offers a view of the Danube Bend."]
    },
    descriptionAdvanced: {
      de: "Die Zitadelle von Visegrád ist eine der imposantesten Festungsanlagen Ungarns und thront majestätisch auf einem steilen Felsgipfel hoch über dem Donauknie. Die im 13. Jahrhundert nach dem Mongoleneinfall errichtete Burg war über Jahrhunderte ein politisches und kulturelles Zentrum des Landes. Hier wurden die ungarischen Kronjuwelen gehütet, und im Jahr 1335 fand hier das berühmte Treffen der Könige statt, das den Grundstein für die heutige Zusammenarbeit der Visegrád-Staaten legte. Besucher können die rekonstruierten Räume, die Burgkapelle und eine umfangreiche Ausstellung mittelalterlicher Waffen besichtigen. Das absolute Highlight ist jedoch der atemberaubende Panoramablick von den Burgmauern auf das Donauknie, wo sich der Fluss in einer gewaltigen Schleife durch das Gebirge windet. Die Kombination aus historischer Bedeutung und spektakulärer Landschaft macht die Zitadelle zu einem der meistbesuchten Ziele Ungarns. Ritterspiele und Falknervorführungen im Burghof lassen die Ära der Ritter und Könige für die Besucher wieder lebendig werden.",
      hu: "A visegrádi Fellegvár Magyarország egyik legemblematikusabb történelmi építménye, amely fenségesen magasodik a Dunakanyar fölé. A 13. században épült vár évszázadokon át a magyar királyok rezidenciája és a Szent Korona őrzőhelye volt. Itt zajlott 1335-ben a híres visegrádi királytalálkozó, amely a mai közép-európai együttműködés alapkövét is jelentette. A látogatók bejárhatják a felújított palotaszárnyakat, a várkápolnát és a középkori fegyvereket bemutató kiállítást. Azonban a legnagyobb vonzerőt a bástyákról nyíló panoráma jelenti, ahonnan az egész Dunakanyar és a folyó hatalmas kanyarulata térképként terül el a szemünk előtt. A vár az ország egyik legfontosabb nemzeti emlékhelye. Történelem K6 – Királyi központok és a középkori Magyarország.",
      ro: "Cetatea de Sus din Visegrád (Fellegvár) este una dintre cele mai emblematice fortificații ale Ungariei, situată strategic pe o stâncă înaltă deasupra Curburii Dunării. Construită în secolul al XIII-lea ca parte a sistemului defensiv după invazia tătară, cetatea a devenit ulterior reședința regilor maghiari și locul unde era păstrată Coroana Sfântă a Ungariei. Visegrád a fost scena celebrului summit regal din 1335, care a pus bazele cooperării central-europene (Grupul de la Visegrád). Astăzi, cetatea este un muzeu impresionant care găzduiește expoziții despre istoria vânătorii, viața la curte și sistemele de fortificații. Priveliștea panoramică asupra Dunării care șerpuiește printre munți este considerată cea mai frumoasă din țară. Istorie K7 – Centrul puterii regale în Evul Mediu.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde von König Béla IV. und seiner Frau Königin Maria zwischen 1240 und 1250 erbaut.",
      "Im Jahr 1335 trafen sich hier die Könige von Ungarn, Böhmen und Polen zu diplomatischen Verhandlungen.",
      "Die heilige ungarische Stephanskrone wurde über 200 Jahre lang in einem geheimen Tresor der Burg aufbewahrt.",
      "Die Festung hielt im 16. Jahrhundert mehreren türkischen Belagerungen stand, wurde aber schließlich 1544 erobert.",
      "Nach der Rückeroberung wurde die Burg auf Befehl der Habsburger teilweise gesprengt, um sie militärisch unbrauchbar zu machen.",
      "Umfassende Ausgrabungen im 20. Jahrhundert brachten wertvolle Schätze aus der Zeit der Anjou-Könige ans Licht.",
      "Innerhalb der Mauern befindet sich eine Ausstellung von Wachsfiguren, die das königliche Bankett von 1335 nachstellen.",
      "Die Burg ist sowohl zu Fuß über Wanderwege als auch über eine Panoramastraße mit dem Auto erreichbar."
      ],
      hu: ["A várat IV. Béla és felesége, Laszkarisz Mária építtette a tatárjárás után.", "A Szent Koronát több mint 200 éven át a vár legbiztonságosabb tornyában őrizték.", "A várban látható panoptikum a híres 1335-ös királyi lakoma jeleneteit mutatja be.", "Az erődítmény 333 méter magas hegycsúcson fekszik, stratégiailag kiváló helyen.", "A török hódoltság idején a vár súlyosan megrongálódott, majd a Habsburgok robbantották fel.", "A fellegvárat az alsóvárral (Salamon-torony) egykor hosszú védőfal kötötte össze.", "Ma a vár udvarán rendszeresen tartanak lovagi tornákat és solymászbemutatókat.", "A Dunakanyarra innen nyílik az ország egyik legtöbbet fotózott kilátása."],
      ro: ["Visegrád a fost capitala regatului Ungariei în timpul lui Carol Robert de Anjou.", "Coroana Sfântă a fost păstrată în Turnul Coroanei din cetate timp de decenii.", "În palatul regal de jos se află fântâna de marmură roșie, o capodoperă renascentistă.", "Cetatea a fost distrusă de trupele imperiale austriece în 1702 pentru a nu fi folosită de rebeli.", "Expoziția de figuri de ceară din interior recreează banchetul regilor din 1335.", "Urcarea la cetate se poate face pe jos prin pădure sau pe drumul asfaltat 'Panoráma'."],
      en: []
    },
  },
  {
    id: "historical-godolloi-kastely-extra",
    type: "historical",
    parent: "HU-PE",
    coords: [19.347, 47.596],
    name: { de: "Schloss Gödöllő", hu: "Gödöllői Királyi Kastély", ro: "Castelul Regal din Gödöllő", en: "Royal Palace of Gödöllő" },
    description: {
      de: "Das größte Barockschloss Ungarns, einst Lieblingsresidenz von Königin Sisi.",
      hu: "Magyarország legnagyobb barokk kastélya, Sisi királyné kedvenc lakhelye.",
      ro: "Cel mai mare castel baroc din Ungaria, reședința preferată a reginei Sisi.",
      en: "Hungary's largest Baroque palace, a favorite residence of Queen Sisi."
    },
    facts: {
      de: ["Prächtiges Reittheater.", "Schöner Schlosspark."],
      hu: ["Pompás lovarda.", "Gyönyörű kastélypark."],
      ro: ["Manaj superb.", "Parc de castel minunat."],
      en: ["Splendid riding hall.", "Beautiful palace park."]
    },
    descriptionAdvanced: {
      de: "Das Königliche Schloss Gödöllő ist das größte Barockschloss Ungarns und ein Ort von außergewöhnlicher historischer Pracht. Im 18. Jahrhundert von Graf Antal Grassalkovich erbaut, wurde es später zum Lieblingszufluchtsort von Kaiser Franz Joseph I. und seiner Gemahlin Königin Elisabeth, besser bekannt als Sisi. Besonders die Königin liebte die Freiheit und die ländliche Ruhe von Gödöllő, weit weg von der strengen Wiener Hofburg. Das prächtig restaurierte Schloss beeindruckt durch seine strahlend weiße Fassade, die prunkvollen Treppenaufgänge und die herrschaftlichen Appartements, die originalgetreu eingerichtet sind. Besucher können das Privattheater, die Schlosskapelle und den weitläufigen englischen Landschaftsgarten erkunden. Das Schloss ist heute ein bedeutendes Kulturzentrum, das regelmäßig Konzerte, Bälle und Ausstellungen beherbergt. Eine Führung durch die Räume lässt die glanzvolle Ära der Österreichisch-Ungarischen Monarchie und die faszinierende Persönlichkeit Sisis für die Besucher wieder auferstehen.",
      hu: "A Gödöllői Királyi Kastély, más néven Grassalkovich-kastély, Magyarország legnagyobb barokk épületegyüttese és a magyar-osztrák történelem ragyogó emléke. A 18. században épült palota az 1867-es kiegyezés után lett a királyi pár, Ferenc József és Sisi kedvenc pihenőhelye. Erzsébet királyné különösen szerette Gödöllőt, ahol megszabadulhatott a bécsi udvar szigorú etikettjétől és hódolhatott lovas szenvedélyének. A kastély pazar belső terei, az aranyszínű díszítések és a királyi lakosztályok ma múzeumként látogathatók, hűen tükrözve a monarchia aranykorának fényét. A kastélypark, a lovarda és a barokk színház Európa-szerte egyedülálló kulturális kincsek, melyek ma is rangos eseményeknek adnak otthont. Történelem K8 – A monarchia kora és Sisi kultusza.",
      ro: "Castelul Regal din Gödöllő, cunoscut și sub numele de Castelul Grassalkovich, este cel mai mare castel baroc din Ungaria și a fost reședința de vară preferată a împăratului Franz Joseph și a reginei Elisabeta (Sisi). Clădirea impresionează prin eleganța sa arhitecturală, culorile pastelate și grădinile regale vaste care o înconjoară. Interiorul restaurat cu minuțiozitate permite vizitatorilor să exploreze apartamentele regale, teatrul baroc (unul dintre cele mai vechi din Europa) și pavilionul regal de vânătoare. Atmosfera de la Gödöllő este strâns legată de cultul reginei Sisi, care găsea aici liniștea și libertatea pe care Viena nu i le putea oferi. Este un monument al istoriei comune austro-ungare și un centru cultural de prim rang. Istorie K8 – Imperiul Austro-Ungar și viața la curte.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Schloss Gödöllő ist das zweitgrößte Barockschloss in Europa nach Schloss Versailles.",
      "Königin Sisi verbrachte insgesamt über 2.000 Tage auf dem Schloss in Gödöllő.",
      "Das Schlosstheater ist das älteste noch funktionsfähige Barocktheater mit Kulissenwechselmaschine in Ungarn.",
      "Während der Zeit des Sozialismus wurde das Schloss vernachlässigt und zeitweise als Altenheim und Kaserne genutzt.",
      "Die umfassende Renovierung in den 1990er Jahren gab dem Schloss seinen alten Glanz zurück.",
      "Der Schlosspark beherbergt einen historischen Palmenhaus und ein prachtvolles Reittheater.",
      "In den Räumen des Museums sind viele persönliche Gegenstände und Kleider von Königin Elisabeth ausgestellt.",
      "Das Schloss ist nur etwa 30 Kilometer von Budapest entfernt und bequem mit der Vorortbahn (HÉV) erreichbar."
      ],
      hu: ["A kastély területe és szobáinak száma alapján a versailles-i után a második legnagyobb barokk palota Európában.", "Sisi királyné több mint 2000 napot töltött élete során a gödöllői falak között.", "Az épület barokk színháza az egyetlen ilyen, ma is működő színpadtechnikájú színház hazánkban.", "A második világháború után az épület állapota súlyosan leromlott, szovjet laktanyaként is szolgált.", "A 20. század végén kezdődött nagyszabású restaurálás adta vissza a palota eredeti fényét.", "A kastélyparkban található a híres pálmaház és a királyi váróépület is.", "A múzeumban számos személyes tárgy és korhű ruha látható, melyek Sisi alakját idézik.", "Budapestről hévvel vagy autóval mindössze fél óra alatt elérhető ez a történelmi ékszerdoboz."],
      ro: ["Castelul a fost construit în secolul al XVIII-lea de contele Antal Grassalkovich I.", "După compromisul din 1867, statul maghiar a oferit castelul ca dar de încoronare perechii regale.", "Regina Elisabeta (Sisi) a petrecut la Gödöllő peste 2000 de zile din viața sa.", "Teatrul baroc al castelului a fost construit în 1785 și este complet funcțional astăzi.", "Grădina castelului are o suprafață de 26 de hectare și include un arboretum.", "În timpul perioadei comuniste, castelul a servit drept cămin pentru bătrâni și bază militară sovietică."],
      en: []
    },
  },
  {
    id: "animal-habitat-medveotthon-extra",
    type: "animal-habitat",
    parent: "HU-PE",
    coords: [19.267, 47.635],
    name: { de: "Bärenheim Veresegyház", hu: "Veresegyházi Medveotthon", ro: "Sanctuarul de Urși Veresegyház", en: "Veresegyhaz Bear Sanctuary" },
    description: {
      de: "Der einzige Bärenpark in Mitteleuropa, der geretteten Bären und Wölfen ein Zuhause bietet.",
      hu: "Közép-Európa egyetlen medveotthona, amely mentett medvéknek és farkasoknak ad otthont.",
      ro: "Singurul sanctuar de urși din Europa Centrală, casă pentru urși și lupi salvați.",
      en: "The only bear sanctuary in Central Europe, home to rescued bears and wolves."
    },
    facts: {
      de: ["Über 30 Bären.", "Fütterung mit Honig."],
      hu: ["Több mint 30 medve.", "Mézzel is lehet etetni."],
      ro: ["Peste 30 de urși.", "Hrănire cu miere."],
      en: ["Home to over 30 bears.", "Visitors can feed them honey."]
    },
    descriptionAdvanced: {
      de: "Das Bärenheim in Veresegyház ist eine einzigartige Tierschutzeinrichtung und der einzige Bärenpark dieser Art in Mitteleuropa. Auf einem weitläufigen Gelände von über 5 Hektar finden Braunbären und Wölfe, die aus schlechter Haltung oder Zirkussen gerettet wurden, ein dauerhaftes und artgerechtes Zuhause. Die Anlage ist so gestaltet, dass sie den natürlichen Bedürfnissen der Tiere entspricht, mit großen Teichen zum Baden, künstlichen Höhlen und viel Platz zum Graben und Spielen. Besucher können die imposanten Raubtiere aus sicherer Entfernung beobachten und dabei viel über ihr Verhalten und ihre Biologie erfahren. Ein besonderes Highlight für Kinder ist die Möglichkeit, die Bären mit langen Holzlöffeln und Honig zu füttern – ein Erlebnis, das den sanften Charakter dieser oft missverstandenen Tiere zeigt. Das Bärenheim legt großen Wert auf Aufklärung und bietet Programme zum Schutz heimischer Raubtiere an. Die ruhige und freundliche Atmosphäre macht das Bärenheim zu einem idealen Ausflugsziel für Tierfreunde und Familien.",
      hu: "A Veresegyházi Medveotthon Közép-Európa egyetlen ilyen jellegű intézménye, amely mentett medvéknek és farkasoknak biztosít biztonságos, természetközeli életteret. A több mint 5 hektáros parkban az állatok tágas kifutókban, tavak és barlangok között élnek, elfeledve korábbi rossz tartási körülményeiket. A látogatók számára a legnépszerűbb program a medvék mézzel való etetése hosszú fakanalak segítségével, ami közvetlen, mégis biztonságos kapcsolatot teremt az óriásokkal. Az otthonban nemcsak barnamedvék, hanem farkasfalkák és ormányos medvék is láthatók. Az intézmény nagy hangsúlyt fektet az állatvédelemre és a szemléletformálásra, kiváló családi célponttá téve a parkot, ahol a természet szeretete és a játékosság találkozik. Természetismeret K5 – Felelős állattartás és ragadozóink.",
      ro: "Sanctuarul de Urși de la Veresegyház (Medveotthon) este singura facilitate de acest tip din Europa Centrală, oferind un refugiu sigur și condiții naturale urșilor și lupilor care nu mai pot fi eliberați în sălbăticie. Inaugurat în 1998, sanctuarul se întinde pe o suprafață vastă unde animalele pot trăi în siguranță, beneficiind de îngrijire medicală și hrană adecvată. Vizitatorii pot observa comportamentul acestor animale fascinante de pe platforme sigure, având chiar posibilitatea de a 'hrăni' urșii cu miere folosind linguri lungi de lemn. Este un loc unde educația despre protecția animalelor se îmbină cu experiența emoționantă a contactului vizual cu marile prădătoare ale Europei. Științele Naturii K5 – Protecția animalelor și managementul sanctuarelor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Bärenheim wurde im Jahr 1998 in Zusammenarbeit mit dem World Animal Protection (WAP) eröffnet.",
      "Es beherbergt ständig zwischen 30 und 40 Bären sowie mehrere Wolfsrudel.",
      "Die Bären verbrauchen jährlich tonnenweise Obst, Gemüse und natürlich ihren geliebten Honig.",
      "Die Anlage verfügt über spezielle Quarantänestationen und ein modernes tierärztliches Behandlungszentrum.",
      "Viele der Bären hier haben eine traurige Vergangenheit und blühen in der Gemeinschaft mit Artgenossen wieder auf.",
      "Besucher können Honig vor Ort kaufen und die Tiere unter Aufsicht der Pfleger füttern.",
      "Das Bärenheim ist das ganze Jahr über geöffnet, da Braunbären in Gefangenschaft meist keinen vollen Winterschlaf halten.",
      "Auf dem Gelände gibt es auch einen Aussichtsturm und Spielmöglichkeiten für Kinder."
      ],
      hu: ["A medveotthon 1998-ban nyílt meg a World Animal Protection és a helyi önkormányzat összefogásával.", "Jelenleg több mint 30 barna medve és több farkasfalka él a hatalmas területen.", "Az állatok évente több tonna gyümölcsöt, zöldséget és mézet fogyasztanak el.", "A park területén egy kilátótorony és kismesterségek utcája is várja a vendégeket.", "A medvék számára mesterséges tavakat alakítottak ki a fürdőzéshez és a játékhoz.", "Az otthon egész évben nyitva tart, télen a havas környezetben is megfigyelhetők az állatok.", "A látogatók a mézet helyben vásárolhatják meg az etetéshez.", "Számos film és televíziós műsor forgatási helyszíne volt már az otthon barátságos lakói miatt."],
      ro: ["Sanctuarul găzduiește în prezent peste 40 de urși bruni.", "Suprafața totală a parcului este de aproximativ 5,5 hectare.", "Pe lângă urși, aici trăiesc și haite de lupi gri în zone separate.", "Aria este dotată cu lacuri artificiale unde urșii se pot scălda și pescui.", "Sanctuarul este partener oficial al organizației World Animal Protection.", "Peste 200.000 de turiști vizitează anual acest loc unic lângă Budapesta."],
      en: []
    },
  },
  {
    id: "kid-landmark-szentendre-skanzen-extra",
    type: "kid-landmark",
    parent: "HU-PE",
    coords: [19.049, 47.697],
    name: { de: "Skanzen Szentendre", hu: "Szentendrei Skanzen", ro: "Muzeul Satului din Szentendre", en: "Szentendre Open-Air Museum" },
    description: {
      de: "Das größte Freilichtmuseum Ungarns, das die ländliche Architektur aller Regionen zeigt.",
      hu: "Magyarország legnagyobb szabadtéri múzeuma, bemutatva a népi építészetet.",
      ro: "Cel mai mare muzeu în aer liber din Ungaria, prezentând arhitectura populară.",
      en: "Hungary's largest open-air museum, showcasing regional folk architecture."
    },
    facts: {
      de: ["Historische Eisenbahn.", "Handwerksvorführungen."],
      hu: ["Skanzen-vonat közlekedik.", "Kézműves bemutatók."],
      ro: ["Trenuleț istoric în interior.", "Demonstrații meșteșugărești."],
      en: ["Internal heritage train.", "Craftsmanship demonstrations."]
    },
    descriptionAdvanced: {
      de: "Das Skanzen in Szentendre ist das größte Freilichtmuseum Ungarns und ein faszinierendes Fenster in die ländliche Vergangenheit des Landes. Auf einem riesigen Gelände am Fuße des Pilis-Gebirges wurden originale Bauernhäuser, Kirchen, Mühlen und Werkstätten aus allen Regionen Ungarns Stein für Stein wiederaufgebaut. Das Museum ist in verschiedene 'Dorflandschaften' unterteilt, die die architektonische und kulturelle Vielfalt des Karpatenbeckens widerspiegeln. Besucher können in die Wohnstuben von armen Bauern und reichen Gutsherren blicken, traditionellen Handwerkern bei der Arbeit über die Schulter schauen oder an alten Bräuchen teilnehmen. Besonders beliebt ist die historische Skanzen-Bahn, die die Besucher bequem durch das weitläufige Gelände befördert. Für Kinder gibt es zahlreiche Mitmach-Stationen, auf denen sie lernen können, wie man Brot backt, Wolle spinnt oder Kerzen zieht. Das Skanzen ist nicht nur ein Ort der Bewahrung, sondern ein lebendiges Museum, das die Wurzeln der ungarischen Identität auf beeindruckende Weise erlebbar macht.",
      hu: "A Szentendrei Skanzen, hivatalos nevén Szabadtéri Néprajzi Múzeum, Magyarország legnagyobb szabadtéri gyűjteménye, amely a Kárpát-medence népi építészetét és életmódját mutatja be. A Pilis lábánál fekvő hatalmas területen eredeti, kőről kőre áttelepített parasztházak, templomok, malmok és műhelyek sorakoznak, tíz tájegységbe csoportosítva. A látogatók időutazáson vehetnek részt: beléphetnek a régi tisztaszobákba, megismerhetik a hagyományos mesterségeket és a vidéki mindennapokat. Különlegessége a Skanzen-vonat, amely segít bejárni a hatalmas parkot. Számos interaktív program, kézműves foglalkozás és népi ünnepi fesztivál teszi élővé a múltat, garantálva a tartalmas szórakozást minden korosztálynak. Néprajz K6 – Népi építészet és hagyományos életmód.",
      ro: "Muzeul Satului din Szentendre (Skanzen) este cel mai mare muzeu în aer liber din Ungaria, fiind un loc unde copiii se pot întoarce literalmente în timp. Întins pe o suprafață vastă, muzeul recreează sate întregi din diferite regiuni ale țării, cu case autentice, mori de apă, biserici de lemn și școli vechi. Pentru copii, experiența este extrem de interactivă: pot călători cu trenul cu aburi al muzeului, pot încerca meșteșuguri tradiționale precum olăritul sau împletitul și pot vedea cum trăiau strămoșii lor fără electricitate. Animalele din curțile caselor și jocurile populare de altădată completează atmosfera de sat viu. Este locul perfect pentru a învăța istoria și tradițiile maghiare într-un mod activ și distractiv. Istorie K5 – Viața la sat și meșteșugurile străvechi.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Museum wurde 1967 gegründet und umfasst heute über 300 historische Gebäude.",
      "Die Skanzen-Bahn ist eine originale Schmalspurbahn, die früher in der ungarischen Landwirtschaft eingesetzt wurde.",
      "Das Gelände ist in zehn Regionen unterteilt, von der Großen Tiefebene bis zum Hochland von Transdanubien.",
      "Regelmäßig finden thematische Wochenenden statt, die sich mit traditionellen Festen wie Ostern oder Erntedank beschäftigen.",
      "Im Skanzen befindet sich auch eine funktionstüchtige Wassermühle und eine Windmühle.",
      "Das Museum beherbergt eine wertvolle Sammlung von über 40.000 volkskundlichen Gegenständen.",
      "Für Schulen werden spezielle pädagogische Programme angeboten, die Geschichte begreifbar machen.",
      "Das Skanzen wurde bereits mehrfach als eines der besten Museen Europas ausgezeichnet."
      ],
      hu: ["A múzeumot 1967-ben alapították, és mára több mint 300 épületből álló falurendszerré nőtt.", "A Skanzen-vonat egy eredeti gőzmozdony által vontatott szerelvényen szállítja az utasokat.", "A területen tíz különböző tájegység képviselteti magát az Alföldtől a Dunántúlig.", "Rendszeresen tartanak bemutató sütéseket, ahol megkóstolható a friss, kemencés kenyérlepény.", "A skanzen területén működik az ország egyik leggazdagabb néprajzi szakkönyvtára.", "A múzeum gyermek-élménypontjai játékos formában ismertetik meg a népi kultúrát.", "Itt látható az ország egyetlen működő, lóhajtásos szárazmalma és több vízimallom is.", "A Skanzen minden évszakban más arcát mutatja, követve a népszokások és a természet körforgását."],
      ro: ["Muzeul satului a fost fondat în 1967 și are o suprafață de 60 de hectare.", "Există peste 400 de clădiri originale aduse din toate colțurile Ungariei.", "Calea ferată a Skanzenului are o lungime de 2,2 km și utilizează un tren istoric.", "În fiecare weekend se organizează ateliere de coacere a colacilor și fabricare a lumânărilor.", "Secțiunea dedicată copiilor include un loc de joacă bazat pe povești populare maghiare.", "Muzeul este împărțit în 8 regiuni etnografice distincte, fiecare cu specificul său arhitectural."],
      en: []
    },
  },
  {
    id: "industry-mol-olajfinomito-extra",
    type: "industry",
    parent: "HU-PE",
    coords: [18.918, 47.288],
    name: { de: "MOL Raffinerie Százhalombatta", hu: "MOL Olajfinomító Százhalombatta", ro: "Rafinăria MOL Százhalombatta", en: "MOL Refinery Szazhalombatta" },
    description: {
      de: "Die größte Ölraffinerie Ungarns, eine Schlüsselanlage der nationalen Energieversorgung.",
      hu: "Magyarország legnagyobb kőolajfinomítója, az ország energiabiztonságának alapja.",
      ro: "Cea mai mare rafinărie din Ungaria, unitate cheie pentru securitatea energetică.",
      en: "Hungary's largest oil refinery, a key facility for national energy security."
    },
    facts: {
      de: ["Donau-Raffinerie.", "Riesige Lagertanks."],
      hu: ["Dunai Finomító néven ismert.", "Hatalmas tárolótartályok."],
      ro: ["Cunoscută ca Rafinăria Dunăreană.", "Rezervoare de stocare uriașe."],
      en: ["Known as the Danube Refinery.", "Features massive storage tanks."]
    },
    descriptionAdvanced: {
      de: "Die MOL-Raffinerie in Százhalombatta, auch bekannt als Donau-Raffinerie (Dunai Finomító), ist das industrielle Herzstück der ungarischen Energieversorgung. Als größte Ölraffinerie des Landes spielt sie eine entscheidende Rolle für die Mobilität und die Wirtschaft Ungarns. Der riesige Komplex liegt strategisch günstig an der Donau südlich von Budapest und verarbeitet jährlich Millionen Tonnen Rohöl zu Treibstoffen, Heizölen und chemischen Grundstoffen. Das Werk zeichnet sich durch hochkomplexe verfahrenstechnische Anlagen, weithin sichtbare Destillationstürme und ein gewaltiges Netzwerk aus Pipelines und Lagertanks aus. Seit ihrer Inbetriebnahme wurde die Raffinerie kontinuierlich modernisiert, um strengste Umweltstandards zu erfüllen und die Effizienz der Kraftstoffproduktion zu steigern. Das Unternehmen MOL investiert massiv in neue Technologien zur Reduzierung des CO2-Fußabdrucks und zur Herstellung nachhaltigerer Produkte. Die Raffinerie ist nicht nur ein technisches Monument, sondern auch ein Garant für die nationale Energiesicherheit und ein bedeutender Arbeitgeber in der Region.",
      hu: "A százhalombattai MOL Olajfinomító, más néven Dunai Finomító, Magyarország legfontosabb ipari létesítménye az energiaellátás szempontjából. Mint az ország legnagyobb kőolaj-feldolgozója, kulcsszerepet játszik a gazdaság motorjának fenntartásában, itt készül a hazai üzemanyagok döntő többsége. A hatalmas komplexum a Duna partján fekszik, és bonyolult csővezeték-hálózattal kapcsolódik a nemzetközi nyersolaj-vezetékekhez. Modern technológiája és szigorú biztonsági rendszerei európai szinten is kiemelkedőek. Az utóbbi években a gyár a fenntartható jövő felé nyit: hatalmas zöldhidrogén-üzemet és napelemparkot építenek, hogy csökkentsék a környezeti lábnyomot, miközben garantálják az ország energiabiztonságát. Földrajz K8 – Energiagazdálkodás és vegyipar.",
      ro: "Rafinăria Dunărea (Dunai Finomító) de la Százhalombatta este cea mai mare și mai complexă facilitate industrială din Ungaria, fiind inima sistemului de aprovizionare cu energie al țării. Parte a grupului MOL, rafinăria procesează țiței pentru a produce benzină, motorină, combustibil pentru aviație și bitum de înaltă calitate. Situată pe malul Dunării pentru un transport eficient, unitatea utilizează tehnologii de procesare de ultimă oră, având unul dintre cele mai mari scoruri de complexitate din Europa (indicele Nelson). Rafinăria este vitală pentru securitatea energetică națională, asigurând funcționarea transportului și a industriei. În ultimii ani, MOL a investit masiv în proiecte de hidrogen verde și economie circulară în cadrul acestui sit pentru a reduce emisiile de CO2. Geografie K8 – Resursele energetice și industria petrochimică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Raffinerie nahm ihren Betrieb im Jahr 1965 auf und wurde stetig erweitert.",
      "Mit einer Kapazität von rund 8,1 Millionen Tonnen Rohöl pro Jahr gehört sie zu den größten Raffinerien in Zentraleuropa.",
      "Das Werk produziert über 50 verschiedene Produkte, von Flugbenzin bis zu Bitumen für den Straßenbau.",
      "Über 1.200 Kilometer an internen Pipelines verbinden die verschiedenen Produktionseinheiten auf dem Gelände.",
      "Die Raffinerie verfügt über einen eigenen Donauhafen und eine umfangreiche Bahninfrastruktur.",
      "Sicherheit hat oberste Priorität; das Werk besitzt eine der bestausgestatteten Werkfeuerwehren Europas.",
      "MOL investiert in Százhalombatta aktuell in eine der größten Anlagen zur Herstellung von grünem Wasserstoff in der Region.",
      "Das Werk ist ein wichtiger Partner für die chemische Industrie, insbesondere für das nahegelegene Tiszaújváros."
      ],
      hu: ["A finomító 1965-ben kezdte meg működését, és azóta folyamatosan bővült.", "Évente mintegy 8 millió tonna kőolaj feldolgozására képes a hatalmas üzem.", "A területen több mint 1000 kilométernyi csővezeték szövi át a technológiai egységeket.", "Saját kikötővel és vasúti terminállal rendelkezik a termékek hatékony elszállításához.", "A finomító kéményei és hűtőtornyai messziről felismerhetővé teszik Százhalombattát.", "A MOL csoport itt valósítja meg legjelentősebb innovációs és környezetvédelmi beruházásait.", "Az üzem területén működik az ország egyik legjobban felszerelt üzemi tűzoltósága.", "A finomítóban gyártott üzemanyagok a legmagasabb európai minőségi szabványoknak felelnek meg."],
      ro: ["Rafinăria a început producția în anul 1965, fiind construită pentru a procesa țițeiul sosit prin conducte.", "Capacitatea anuală de procesare a țițeiului este de aproximativ 8,1 milioane de tone.", "Coșurile de fum ale rafinăriei și ale centralei termice adiacente sunt vizibile de la Budapesta.", "Unitatea produce peste 50 de tipuri diferite de produse petroliere și chimice.", "Sistemul de securitate și protecția mediului include stații de epurare a apei de mare capacitate.", "Rafinăria furnizează materie primă pentru combinatul chimic de la Tiszaújváros prin conducte dedicate."],
      en: []
    },
  },

  // HU-SO: Somogy (2G, 2LN, 1W)
  {
    id: "historical-csillagvar-balatonszentgyorgy-extra",
    type: "historical",
    parent: "HU-SO",
    coords: [17.388, 46.687],
    name: { de: "Sternburg Balatonszentgyörgy", hu: "Balatonszentgyörgyi Csillagvár", ro: "Cetatea Stea Balatonszentgyörgy", en: "Star Castle Balatonszentgyörgy" },
    description: {
      de: "Ein sternförmiges Gebäude aus dem 19. Jahrhundert, das als Jagdschloss diente.",
      hu: "19. századi csillag alaprajzú épület, amely vadászkastélyként szolgált.",
      ro: "Clădire în formă de stea din secolul XIX, care a servit drept castel de vânătoare.",
      en: "A 19th-century star-shaped building that served as a hunting lodge."
    },
    facts: {
      de: ["Vorgeschichtliche Museum.", "Einzigartige Architektur."],
      hu: ["Őstörténeti múzeum.", "Egyedülálló építészeti stílus."],
      ro: ["Muzeu de preistorie.", "Stil arhitectural unic."],
      en: ["Prehistoric museum.", "Unique architectural style."]
    },
    descriptionAdvanced: {
      de: "Die Sternburg (Csillagvár) in Balatonszentgyörgy ist ein einzigartiges architektonisches Kuriosum am südwestlichen Ende des Balatons. Das Gebäude mit seinem charakteristischen sternförmigen Grundriss wurde im 19. Jahrhundert von Graf László Festetics ursprünglich als Jagdschloss errichtet. Die ungewöhnliche Architektur erinnert an eine mittelalterliche Festung, was ihr den Namen 'Burg' einbrachte. Im Inneren befindet sich heute ein faszinierendes Museum, das das Leben in der Grenzregion während der Türkenkriege und die prähistorische Tierwelt anschaulich darstellt. Besonders sehenswert ist das Wachsfigurenkabinett, das Szenen aus dem mittelalterlichen Alltag zeigt, sowie die Sammlung historischer Waffen. Die Burg ist von einem idyllischen Park umgeben, in dem sich ein kleiner Streichelzoo und ein Spielplatz befinden, was sie zu einem idealen Ausflugsziel für Familien macht. Von der Burg aus hat man einen schönen Blick auf den Plattensee und die umliegenden Weinberge. Die Csillagvár verbindet auf charmante Weise Geschichte, Architektur und Freizeitvergnügen in einer der beliebtesten Ferienregionen Ungarns.",
      hu: "A balatonszentgyörgyi Csillagvár egyedülálló építészeti kuriózum a Balaton nyugati végében. A 19. század elején épült, csillag alaprajzú épületet gróf Festetics László emeltette vadászkastélyként, ám különleges, erődformájú kialakítása miatt kapta a „vár” elnevezést. A vastag falak között ma izgalmas múzeum működik, amely a török hódoltság korának végvári életét és a középkori magyar hadviselést mutatja be élethű panoptikummal és fegyvergyűjteménnyel. A kastélyt hatalmas őspark övezi, ahol pihenőhelyek és állatsimogató várja a látogatókat. A Csillagvár kiváló példája a romantikus kastélyépítészetnek, ahol a történelem és a természet nyugalma kéz a kézben jár. Történelem K6 – Végvári élet és vadászhagyományok.",
      ro: "Cetatea de Stele (Csillagvár) din Balatonszentgyörgy este o construcție unică în Ungaria, fiind renumită pentru planul său arhitectural în formă de stea cu patru colțuri. Deși la prima vedere pare o fortificație medievală, clădirea a fost ridicată în anii 1820 de către contele László Festetics ca pavilion de vânătoare și reședință de vară. Interiorul castelului găzduiește astăzi un muzeu fascinant care prezintă viața în cetățile de graniță, o colecție impresionantă de păpuși în costume populare maghiare și scene din istoria regiunii. Pivnița castelului, cu arcadele sale masive, oferă o atmosferă misterioasă. Înconjurat de un parc liniștit, Csillagvár este un loc unde legenda și realitatea se împletesc, oferind o incursiune deosebită în cultura nobiliară și populară. Istorie K6 – Arhitectură neobișnuită și viața la conac.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Sternburg wurde zwischen 1820 und 1821 in nur einem Jahr erbaut.",
      "Der sternförmige Grundriss hat vier Zacken, was dem Gebäude sein festungsartiges Aussehen verleiht.",
      "Die Burg diente der Familie Festetics als Basis für ihre Jagdausflüge in die waldreiche Umgebung.",
      "Im Keller der Burg befindet sich eine weltweit einzigartige Panoptikum-Ausstellung zum mittelalterlichen Leben.",
      "Die Burgkapelle ist der Heiligen Maria gewidmet und wird heute oft für Hochzeiten genutzt.",
      "Der Park beherbergt seltene Baumarten und bietet viele schattige Plätze zum Verweilen.",
      "Jährlich finden auf dem Burggelände traditionelle Handwerksmärkte und Ritterspiele statt.",
      "Die Csillagvár liegt nur wenige Kilometer von der Stadt Keszthely und dem berühmten Hévízer Thermalsee entfernt."
      ],
      hu: ["A kastélyt 1820 és 1821 között építették fel, rendkívül rövid idő alatt.", "Csillag alakú alaprajza négy égtáj felé mutató bástyákat formáz.", "A panoptikumban több mint 150 viaszfigura mutatja be a régi magyar életmódot.", "A pincerendszerben egyedülálló középkori kínzókamra és börtönkiállítás látható.", "A vár udvarán nyaranként lovasbemutatókat és íjászversenyeket tartanak.", "A környező parkban ritka fenyőfélék és idős tölgyek nyújtanak árnyékot.", "A vár a Balaton-felvidéki túraútvonalak egyik kedvelt állomása.", "Belső udvara kiváló akusztikája miatt népszerű helyszíne kamarazenei koncerteknek."],
      ro: ["Castelul a fost construit între 1820 și 1821 în stil romantic.", "Forma de stea a fost inspirată de fortificațiile militare moderne ale epocii.", "Muzeul de ceară din incintă prezintă figuri istorice în mărime naturală.", "Fântâna din curtea interioară are o adâncime de peste 30 de metri.", "Colecția de păpuși cuprinde peste 500 de exemplare îmbrăcate în port popular tradițional.", "În timpul verii, în curtea castelului se organizează turniruri cavalerești și spectacole folclorice."],
      en: []
    },
  },
  {
    id: "historical-kaposvari-varoshaza-extra",
    type: "historical",
    parent: "HU-SO",
    coords: [17.791, 46.358],
    name: { de: "Rathaus von Kaposvár", hu: "Kaposvári Városháza", ro: "Primăria din Kaposvár", en: "Kaposvár City Hall" },
    description: {
      de: "Ein prachtvolles neorenaissancistisches Gebäude am Hauptplatz von Kaposvár.",
      hu: "Pompás neoreneszánsz épület Kaposvár főterén.",
      ro: "O clădire neorenascentistă superbă în piața centrală din Kaposvár.",
      en: "A magnificent Neo-Renaissance building on the main square of Kaposvár."
    },
    facts: {
      de: ["Im 19. Jahrhundert erbaut.", "Schöner Ratssaal."],
      hu: ["A 19. század végén épült.", "Díszes díszteremmel."],
      ro: ["Construită la finele sec. XIX.", "Sală festivă decorată."],
      en: ["Built in the late 19th century.", "Features an ornate ceremonial hall."]
    },
    descriptionAdvanced: {
      de: "Das Rathaus von Kaposvár ist ein prachtvolles Monument der ungarischen Neorenaissance und das stolze Herz der Stadtverwaltung. Errichtet am Ende des 19. Jahrhunderts am zentralen Kossuth-Platz, spiegelt das Gebäude den wirtschaftlichen Aufschwung und das bürgerliche Selbstbewusstsein jener Zeit wider. Die imposante Fassade ist reich mit architektonischen Details, Statuen und Ornamenten verziert, während das Innere durch ein elegantes Treppenhaus und den prunkvollen Ratssaal besticht. Der Saal ist mit wertvollen Wandgemälden und Holzschnitzereien ausgestattet und bietet einen würdigen Rahmen für offizielle Empfänge und festliche Sitzungen. Besonders sehenswert ist das Glasmosaikfenster im Treppenhaus, das die Wappen der Stadt und des Komitats Somogy zeigt. Das Rathaus ist nicht nur ein Verwaltungsgebäude, sondern ein bedeutendes Baudenkmal, das die architektonische Identität von Kaposvár prägt. Jeden Mittag erklingt vom Rathaus aus ein Glockenspiel, das Einheimische und Besucher gleichermaßen zum Innehalten einlädt.",
      hu: "A Kaposvári Városháza a magyar neoreneszánsz építészet egyik legpompásabb alkotása a Dunántúlon. A 19. század végén a Kossuth téren emelt épület a város polgári öntudatának és gazdasági felemelkedésének szimbóluma. Homlokzatát gazdag díszítés, szobrok és díszes ablakkeretek teszik impozánssá. Belső terei közül kiemelkedik a díszterem, melynek falfestményei és fafaragásai a korszak mesterművei. A városháza tornya meghatározza Kaposvár belvárosának látképét, harangjátéka pedig minden órában klasszikus dallamokkal tölti meg a teret. Az épület nemcsak a közigazgatás központja, hanem a város kulturális életének is büszke helyszíne, amely országos műemléki védelem alatt áll. Történelem K8 – Polgári várostervezés és építészet.",
      ro: "Primăria din Kaposvár este o clădire monumentală situată în centrul istoric al orașului, fiind un exemplu strălucit al stilului neorenascentist de la începutul secolului XX. Inaugurată în 1904, clădirea reflectă ambiția și prosperitatea de care se bucura orașul în perioada 'Belle Époque'. Fațada sa bogat ornamentată și turnul de observație impunător domină piața principală a orașului (Piața Kossuth). Sala festivă a primăriei este renumită pentru vitraliile sale spectaculoase și pentru decorațiunile interioare care evocă istoria județului Somogy. Primăria nu este doar un centru administrativ, ci și inima culturală a orașului, fiind martora tuturor evenimentelor majore ale comunității de peste un secol. Istorie K8 – Dezvoltarea urbană și arhitectura civilă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Gebäude wurde zwischen 1902 und 1904 nach Plänen der Architekten Ede Kopeczek und Gyula Kertész erbaut.",
      "Der Prunksaal des Rathauses wird oft für klassische Konzerte genutzt, da er eine hervorragende Akustik besitzt.",
      "An der Außenfassade befinden sich Statuen, die Justitia und den Stadtgeist symbolisieren.",
      "Das Rathaus überstand den Zweiten Weltkrieg fast unbeschadet und bewahrte seine ursprüngliche Innenausstattung.",
      "In den 2000er Jahren wurde die gesamte Fassade aufwendig restauriert.",
      "Das Glockenspiel des Rathauses spielt zu jeder vollen Stunde Melodien berühmter ungarischer Komponisten.",
      "Im Erdgeschoss befindet sich ein Informationszentrum für Touristen, das Einblicke in die Stadtgeschichte bietet.",
      "Das Rathaus ist Teil eines geschlossenen architektonischen Ensembles am Hauptplatz, der zu den schönsten in Westungarn gehört."
      ],
      hu: ["Az épületet 1902 és 1904 között emelték Kopeczek Ede és Kertész Gyula tervei alapján.", "A díszterem hatalmas üvegablakai a város és a vármegye címerét ábrázolják.", "A városháza tornyában 18 harangból álló harangjáték működik.", "Homlokzatán Justitia, az igazság istennőjének szobra hirdeti a törvény erejét.", "Az épület sértetlenül vészelte át az elmúlt évszázad viharait, megőrizve eredeti belső bútorzatát.", "A földszinten berendezett információs pont a város történelmét mutatja be az érdeklődőknek.", "A városháza előtti tér a város legfontosabb rendezvényeinek, köztük a virágkarneválnak a színhelye.", "Az esti díszkivilágításban az épület sziluettje különleges látványt nyújt."],
      ro: ["Clădirea a fost proiectată de arhitecții localnici Kopeczek György și Kertész Róbert.", "Construcția a durat doar doi ani, între 1902 și 1904.", "Turnul primăriei are o înălțime de peste 40 de metri, fiind un punct de reper vizual.", "Vitraliile din sala festivă au fost realizate de celebrul atelier al lui Miksa Róth.", "În fața primăriei se află statuia lui Lajos Kossuth, liderul revoluției de la 1848.", "Clădirea a fost restaurată complet în anul 2004, la centenarul său."],
      en: []
    },
  },
  {
    id: "kid-landmark-katica-tanya-extra",
    type: "kid-landmark",
    parent: "HU-SO",
    coords: [17.712, 46.257],
    name: { de: "Marienkäfer-Farm Patca", hu: "Katica Tanya", ro: "Ferma Gărgărița Patca", en: "Ladybird Farm Patca" },
    description: {
      de: "Ein riesiger Erlebnispark für Familien mit Tieren und zahlreichen Spielmöglichkeiten.",
      hu: "Hatalmas élményközpont családoknak, állatokkal és rengeteg játékkal.",
      ro: "Un centru de distracție uriaș pentru familii, cu animale și multe jocuri.",
      en: "A massive experience center for families with animals and many play options."
    },
    facts: {
      de: ["Riesige Rutschen.", "Bauernhof-Aktivitäten."],
      hu: ["Óriáscsúszdák találhatók itt.", "Gazdasági tevékenységek gyerekeknek."],
      ro: ["Tobogane uriașe.", "Activități de fermă pentru copii."],
      en: ["Features giant slides.", "Farm activities for children."]
    },
    descriptionAdvanced: {
      de: "Die Marienkäfer-Farm (Katica Tanya) in Patca ist ein preisgekröntes Erlebnishaus und einer der größten Familien-Freizeitparks in Südungarn. Sie bietet eine einzigartige Mischung aus traditionellem Bauernhofleben und modernen Spielattraktionen auf einer riesigen Fläche. Kinder können hier Tiere füttern, lernen wie man Kühe melkt oder traditionelle Handwerkstechniken ausprobieren. Gleichzeitig bietet der Park spektakuläre Attraktionen wie riesige Rutschen, Kletterwände und einen der größten Indoor-Spielbereiche des Landes. Ein besonderes Augenmerk legt die Farm auf Nachhaltigkeit; sie wird fast vollständig durch erneuerbare Energien betrieben und vermittelt den Besuchern spielerisch den Wert des Umweltschutzes. Es gibt zahlreiche interaktive Stationen, die Wissen über die Natur und die Landwirtschaft vermitteln. Die Katica Tanya ist ein Ort, an dem Kinder den ganzen Tag aktiv sein können, während Eltern die ruhige ländliche Atmosphäre genießen. Es ist das ideale Ziel für einen Familienausflug, bei dem Spaß und Lernen Hand in Hand gehen.",
      hu: "A patcai Katica Tanya egy díjnyertes élményközpont és ökogazdaság a zselici dombok között, amely a családok és iskolás csoportok kedvenc célpontja. A park egyedülálló módon ötvözi a hagyományos paraszti életmód bemutatását a modern szórakozási lehetőségekkel. A gyerekek itt megismerhetik a háztáji állatokat, kipróbálhatják a kenyérsütést, ugyanakkor hatalmas beltéri csúszdapark, kötélpálya és gokartpálya is várja őket. A tanya kiemelt figyelmet fordít a fenntarthatóságra: szinte teljes energiaigényét megújuló forrásokból fedezi. A természetközeli környezet és a rengeteg aktív program garantálja, hogy a látogatók egy teljes napot tartalmasan és vidáman tölthessenek el a szabadban. Természetismeret K5 – Fenntartható gazdálkodás és vidéki élet.",
      ro: "Ferma 'Buburuza' (Katica Tanya) din Patca este cel mai mare și mai modern parc de experiențe agro-turistice din Ungaria, dedicat exclusiv familiilor cu copii. Aici, micii vizitatori se pot bucura de un amestec unic între viața la fermă și jocurile de ultimă generație. Copiii pot hrăni animale domestice, pot mulge vaci sau pot vedea cum se fabrică pâinea în cuptor tradițional, dar în același timp au acces la tobogane gigantice, circuite de go-kart și parcuri de aventură interioare. Ferma pune un accent uriaș pe sustenabilitate, funcționând aproape integral cu energie regenerabilă și învățându-i pe copii importanța protejării planetei prin joc și distracție. Este o destinație completă, unde o zi nu pare niciodată suficientă. Științele Naturii K3 – Viața la fermă și energia verde.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Marienkäfer-Farm wurde bereits mehrfach als 'Touristische Attraktion des Jahres' in Ungarn ausgezeichnet.",
      "Der Park verfügt über den größten Indoor-Rutschenpark Mitteleuropas.",
      "Fast 100 Prozent des Strombedarfs der Anlage werden durch eigene Photovoltaik-Anlagen gedeckt.",
      "Es gibt über 50 verschiedene Spielbereiche, von Wasserparks bis hin zu mittelalterlichen Katapult-Vorführungen.",
      "Auf dem Bauernhof leben viele alte ungarische Haustierrassen wie Zackelschafe und Wollschweine (Mangalica).",
      "Das Restaurant auf der Farm bietet regionale Gerichte aus lokal produzierten Zutaten an.",
      "In der 'Halle der Traditionen' können Kinder lernen, wie früher Brot im Ofen gebacken wurde.",
      "Die Farm ist das ganze Jahr über geöffnet und bietet saisonale Programme wie Erntedank oder Nikolausfeiern."
      ],
      hu: ["A Katica Tanya több alkalommal is elnyerte az „Év ökoturisztikai létesítménye” címet.", "Itt található Magyarország egyik legnagyobb fedett csúszdaháza és játszóbirodalma.", "A gazdaságban őshonos magyar állatokkal, például rackajuhokkal és mangalicákkal találkozhatunk.", "A tanya saját naperőművel és környezetbarát szennyvíztisztítóval rendelkezik.", "Rendszeresen szerveznek hagyományőrző napokat, ahol a régi mesterségeket lehet kipróbálni.", "A területen található egy hatalmas lovagi vár és egy működő ostromgép-rekonstrukció is.", "Az étteremben helyi alapanyagokból készült hagyományos somogyi ételeket szolgálnak fel.", "A vadasparki részben gímszarvasok és dámvadak is megfigyelhetők."],
      ro: ["Parcul se întinde pe o suprafață de peste 13 hectare de teren amenajat.", "Katica Tanya a câștigat numeroase premii naționale pentru 'Cel mai bun loc de agrement'.", "Aici se află cel mai mare tobogan interior din regiune, cu o cădere spectaculoasă.", "Există un program educațional care explică funcționarea panourilor solare și a centralelor pe biomasă.", "Copiii pot obține un 'permis de conducere de fermier' după parcurgerea unui traseu cu tractorașe.", "Toate mesele servite în cadrul fermei sunt preparate din ingrediente locale, naturale."],
      en: []
    },
  },
  {
    id: "agriculture-balatoni-halaszat-extra",
    type: "agriculture",
    parent: "HU-SO",
    coords: [17.885, 46.915],
    name: { de: "Balaton-Fischerei", hu: "Balatoni halászat", ro: "Pescuitul la Balaton", en: "Balaton Fishery" },
    description: {
      de: "Die Tradition der Fischerei am Balaton, dem größten Binnensee Mitteleuropas.",
      hu: "A balatoni halászat hagyománya, Közép-Európa legnagyobb tavánál.",
      ro: "Tradiția pescuitului la Balaton, cel mai mare lac din Europa Centrală.",
      en: "The tradition of fishing at Lake Balaton, Central Europe's largest lake."
    },
    facts: {
      de: ["Zander als Spezialität.", "Historische Fischernetze."],
      hu: ["A süllő a fő specialitás.", "Történelmi halászati eszközök."],
      ro: ["Șalăul este principala captură.", "Unelte istorice de pescuit."],
      en: ["Zander is a local specialty.", "Historic fishing tools."]
    },
    descriptionAdvanced: {
      de: "Die Fischerei am Balaton ist eine jahrhundertealte Tradition, die das Leben und die Kultur rund um den größten Binnensee Mitteleuropas geprägt hat. Schon seit der Römerzeit ist der See für seinen Fischreichtum bekannt, wobei der Zander (Süllő) als der 'König des Balatons' gilt. Die traditionelle Fischerei wurde früher mit handgeknüpften Netzen und speziellen Booten betrieben, Techniken, die von Generation zu Generation weitergegeben wurden. Heute liegt der Fokus auf einer nachhaltigen Bewirtschaftung des Sees, um die ökologische Balance zu bewahren und den Fischbestand für die Zukunft zu sichern. Entlang der Ufer finden sich zahlreiche Fischereizentren und kleine Häfen, die einen Einblick in dieses Handwerk bieten. Das Angeln am Balaton ist zudem ein wichtiger Teil des Tourismus und zieht jährlich tausende Sportfischer an. In den Restaurants rund um den See werden die fangfrischen Fische nach traditionellen Rezepten zubereitet, wobei die Balatoner Fischsuppe eine geschätzte Spezialität ist, die in keiner Speisekarte fehlen darf.",
      hu: "A balatoni halászat évezredes múltra visszatekintő tevékenység, amely alapvetően meghatározta a tó környéki falvak életét és kultúráját. A Balaton, mint Közép-Európa legnagyobb édesvízi tava, gazdag és változatos halállománnyal rendelkezik, melynek legismertebb képviselője a nemes húsú süllő, a „Balaton királya”. A hagyományos halászati módszerek, mint a kerítőhálós vagy az északi parti nádasok közötti halászat, mára a fenntartható gazdálkodás és a horgászturizmus irányába mozdultak el. A tó védelme érdekében a kereskedelmi célú halászatot korlátozták, előtérbe helyezve az ökológiai egyensúlyt. A part menti csárdákban ma is a legfontosabb gasztronómiai vonzerőt a frissen készült halételek jelentik. Földrajz K7 – Halászat és környezetvédelem nagy tavainknál.",
      ro: "Pescuitul pe lacul Balaton reprezintă o tradiție milenară care a definit stilul de viață al locuitorilor de pe ambele maluri ale 'mării maghiare'. Din antichitate și până în epoca modernă, resursele piscicole ale lacului, precum șalăul (fogas) și gardonul, au asigurat hrana și dezvoltarea comunităților locale. Astăzi, pescuitul comercial este strict reglementat pentru a asigura sustenabilitatea ecosistemului, punându-se un accent major pe pescuitul sportiv și turismul gastronomic. Gastronomia locală gravitează în jurul peștelui proaspăt, ciorba de pește și fileul de șalău fiind specialități obligatorii pentru orice vizitator. Muzeele pescărești din localități precum Keszthely sau Tihany păstrează uneltele și poveștile acestei meserii nobile. Geografia K8 – Gospodărirea resurselor acvatice.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zander ist der bekannteste Fisch des Balatons und wird für sein festes, weißes Fleisch geschätzt.",
      "Früher wurde am Balaton die sogenannte 'Eisfischerei' betrieben, bei der Netze durch Löcher im gefrorenen See gezogen wurden.",
      "Es gibt im See über 40 verschiedene Fischarten, darunter auch Aale, Brassen und kapitale Karpfen.",
      "Das 'Balatoni Halgazdálkodási Zrt.' ist das Unternehmen, das für den Schutz und den Besatz des Sees verantwortlich ist.",
      "In der Stadt Keszthely gibt es ein interessantes Balaton-Museum, das die Geschichte der Fischerei dokumentiert.",
      "Die traditionellen Fischerboote des Balatons hatten eine flache Bauweise, um auch in ufernahen Zonen operieren zu können.",
      "Jährlich werden hunderte Tonnen Fischbesatz in den See eingebracht, um die Bestände stabil zu halten.",
      "Die Fischerei-Festivals in den Uferorten sind beliebte kulturelle Ereignisse mit viel Musik und kulinarischen Köstlichkeiten."
      ],
      hu: ["A balatoni halászat írásos emlékei már a 11. századi tihanyi alapítólevélben is szerepelnek.", "A tóban több mint 40 halfaj él, köztük a védett lápi póc és a garda is.", "A tihanyi gardahalászat, a „látott hal” hagyománya egyedülálló kulturális örökség.", "Keszthelyen a Balatoni Múzeumban külön részleg mutatja be a halászat technikai fejlődését.", "A Balatoni Halgazdálkodási Nonprofit Zrt. felel a tó halállományának tervszerű pótlásáért.", "Évente több száz tonna egynyári pontyot és előnevelt süllőt telepítenek a vízbe.", "A hagyományos balatoni halászhajók lapos fenekűek voltak a sekély vizek miatt.", "A Balaton-felvidéki csárdák híres étele a roston sült süllő és a bográcsos halászlé."],
      ro: ["Lacul Balaton găzduiește peste 40 de specii de pești.", "Șalăul de Balaton (Fogas) este considerat 'regele peștilor' din lac.", "Prima societate de pescuit organizată pe Balaton a fost înființată în secolul al XIX-lea.", "Pescuitul la copcă era o practică comună în iernile geroase de altădată.", "Regiunea este renumită pentru rețetele de ciorbă de pește specifice fiecărui sat de pe mal.", "Astăzi, anual se eliberează peste 50.000 de permise de pescuit sportiv pe lac."],
      en: []
    },
  },
  {
    id: "industry-kaposvari-cukorgyar-extra",
    type: "industry",
    parent: "HU-SO",
    coords: [17.810, 46.370],
    name: { de: "Zuckerfabrik Kaposvár", hu: "Kaposvári Cukorgyár", ro: "Fabrica de Zahăr Kaposvár", en: "Kaposvar Sugar Factory" },
    description: {
      de: "Die einzige noch aktive Zuckerfabrik Ungarns, ein wichtiges Werk der Lebensmittelindustrie.",
      hu: "Magyarország egyetlen működő cukorgyára, az élelmiszeripar fontos bázisa.",
      ro: "Singura fabrică de zahăr activă din Ungaria, bază importantă a industriei alimentare.",
      en: "Hungary's only active sugar factory, an important base for the food industry."
    },
    facts: {
      de: ["Verarbeitet Zuckerrüben.", "Produziert Biogas."],
      hu: ["Cukorrépát dolgoz fel.", "Biogázt is előállít."],
      ro: ["Procesează sfeclă de zahăr.", "Produce și biogaz."],
      en: ["Processes sugar beets.", "Also produces biogas."]
    },
    descriptionAdvanced: {
      de: "Die Zuckerfabrik in Kaposvár ist heute die einzige verbliebene aktive Zuckerfabrik in Ungarn und damit ein strategisch wichtiger Pfeiler der nationalen Lebensmittelindustrie. Das traditionsreiche Werk verarbeitet jährlich riesige Mengen an Zuckerrüben, die von Landwirten aus der gesamten Region Süd-Transdanubien angeliefert werden. Seit seiner Gründung wurde der Standort kontinuierlich modernisiert, um technologisch auf dem neuesten Stand zu bleiben und die Effizienz zu steigern. Ein herausragendes Merkmal der Fabrik ist ihre Vorreiterrolle in Sachen Nachhaltigkeit: Sie betreibt eine der größten Biogasanlagen Europas, die aus den Reststoffen der Zuckerproduktion Energie gewinnt und das Werk fast vollständig autark macht. Die Fabrik sichert nicht nur hunderte Arbeitsplätze direkt vor Ort, sondern ist auch die Lebensgrundlage für viele landwirtschaftliche Betriebe in der Umgebung. Der hier produzierte Zucker ist in fast jedem ungarischen Haushalt zu finden und steht für Qualität und regionale Wertschöpfung.",
      hu: "A Kaposvári Cukorgyár Magyarország egyetlen még működő cukorgyára, a hazai élelmiszeripar egyik legfontosabb stratégiai üzeme. A gyár a dél-dunántúli régió cukorrépa-termelésére épül, és évtizedek óta biztosítja az ország cukorellátásának jelentős részét. Az üzem nemcsak a gyártásban, hanem a környezetvédelemben is élen jár: itt működik Európa egyik legnagyobb biogázüzeme, amely a feldolgozás során keletkező melléktermékekből állít elő energiát. Ezáltal a gyár szinte teljesen önellátóvá vált az energiafelhasználás terén. Kaposvár számára az üzem stabilitást, munkahelyeket és a város ipari hagyományainak folytatását jelenti, miközben modern válaszokat ad a globális gazdasági kihívásokra. Földrajz K8 – Élelmiszeripar és fenntartható energiatermelés.",
      ro: "Fabrica de Zahăr din Kaposvár este singura unitate de producție a zahărului din sfeclă care mai funcționează în Ungaria, fiind o instituție vitală pentru agricultura națională. Fondată la sfârșitul secolului al XIX-lea, fabrica a supraviețuit transformărilor economice radicale, modernizându-se constant pentru a atinge o eficiență de top. Unitatea procesează anual sute de mii de tone de sfeclă de zahăr provenite de pe terenurile fertile ale Transdanubiei, asigurând o mare parte din necesarul de zahăr al țării. Pe lângă zahăr, fabrica produce biogaz din resturile de sfeclă, fiind un exemplu de economie circulară și sustenabilitate industrială. Activitatea sa sezonieră, numită 'campania zahărului', definește ritmul economic al orașului Kaposvár în fiecare toamnă. Geografie K8 – Industria alimentară și procesarea sfeclei de zahăr.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Zuckerfabrik in Kaposvár wurde im Jahr 1894 gegründet und hat seither zwei Weltkriege überstanden.",
      "Sie gehört heute zur österreichischen Agrana-Gruppe, einem der führenden Zuckerproduzenten in Europa.",
      "Die Fabrik verarbeitet während der 'Zuckerrüben-Kampagne' im Herbst und Winter bis zu 7.000 Tonnen Rüben pro Tag.",
      "Das Werk produziert jährlich rund 100.000 Tonnen Kristallzucker für den ungarischen Markt.",
      "Die integrierte Biogasanlage deckt bis zu 80 Prozent des Primärenergiebedarfs der Fabrik ab.",
      "Aus den Reststoffen der Rüben wird auch hochwertiges Viehfutter pelletiert und vertrieben.",
      "Das Unternehmen investiert massiv in die digitale Überwachung der Produktionsprozesse zur Ressourcenschonung.",
      "Die Zuckerfabrik ist einer der größten Steuerzahler der Stadt Kaposvár und unterstützt lokale Sportvereine."
      ],
      hu: ["A gyárat 1894-ben alapították, és a múlt század nagy ipari átalakulásait egyedüliként élte túl.", "Az üzem naponta több ezer tonna cukorrépa feldolgozására képes a kampányidőszakban.", "A gyár biogáz-termelése annyi energiát állít elő, amennyi egy kisebb város ellátásához elegendő lenne.", "A Kaposváron gyártott cukor „Magyar Cukor” márkanéven kerül a boltok polcaira.", "A folyamatos technológiai fejlesztések révén az üzem hatékonysága világszínvonalú.", "A gyár saját vasúti hálózattal és korszerű csomagolóüzemmel rendelkezik.", "A környezeti fenntarthatóság érdekében a gyár szén-dioxid kibocsátását drasztikusan csökkentették.", "Az üzem a régió mezőgazdasági termelőinek legfontosabb és legmegbízhatóbb partnere."],
      ro: ["Fabrica a fost înființată în anul 1894 de către o societate pe acțiuni locală.", "Este cea mai mare fabrică de zahăr din Europa Centrală ca și capacitate de depozitare în silozuri.", "Unitatea de producere a biogazului asigură independența energetică a fabricii pe timpul campaniei.", "Zahărul produs aici este comercializat sub marca 'Magyar Cukor'.", "Fabrica oferă asistență tehnică fermierilor pentru optimizarea culturilor de sfeclă.", "Pe timpul iernii, fabrica prelucrează zahăr brut din trestie pentru a menține activitatea."],
      en: []
    },
  },

  // HU-SZ: Szabolcs-Szatmár-Bereg (2G, 1LN, 2W)
  {
    id: "historical-nyirbatori-templom-extra",
    type: "historical",
    parent: "HU-SZ",
    coords: [22.128, 47.838],
    name: { de: "Kirche von Nyírbátor", hu: "Nyírbátori református templom", ro: "Biserica Reformată din Nyírbátor", en: "Reformed Church of Nyirbator" },
    description: {
      de: "Ein Meisterwerk der Spätgotik mit einem der höchsten hölzernen Glockentürme.",
      hu: "A késő gótika remekműve, az egyik legmagasabb fa harangtoronnyal.",
      ro: "O capodoperă a goticului târziu, cu unul dintre cele mai înalte turnuri de lemn.",
      en: "A masterpiece of Late Gothic architecture with one of the tallest wooden belfries."
    },
    facts: {
      de: ["Báthory-Gedächtnisort.", "Netzgewölbe."],
      hu: ["Báthory-emlékhely.", "Gyönyörű hálóboltozat."],
      ro: ["Loc memorial Báthory.", "Bolți în rețea superbe."],
      en: ["Báthory family heritage site.", "Beautiful net vaulting."]
    },
    descriptionAdvanced: {
      de: "Die reformierte Kirche von Nyírbátor ist eines der herausragendsten spätgotischen Baudenkmäler in Nordostungarn. Erbaut im späten 15. Jahrhundert durch die mächtige Familie Báthory, beeindruckt die einschiffige Hallenkirche durch ihre monumentale Größe und das meisterhafte Netzgewölbe. Ein besonderes architektonisches Highlight ist der freistehende hölzerne Glockenturm, der im 17. Jahrhundert errichtet wurde und als einer der ältesten und höchsten seiner Art in Ungarn gilt. Die Kirche beherbergt wertvolle Renaissance-Schnitzereien und dient als Grabstätte bedeutender Mitglieder der Báthory-Dynastie. Die Akustik des weiten Raumes ist außergewöhnlich und macht die Kirche zu einem beliebten Ort für geistliche Konzerte. Als Symbol der ungarischen Reformation und mittelalterlicher Baukunst zieht Nyírbátor Besucher an, die die Verbindung von Geschichte, Glauben und handwerklicher Perfektion erleben möchten.",
      hu: "A nyírbátori református templom a magyarországi késő gótikus építészet egyik legkiemelkedőbb emléke. A 15. század végén a hatalmas Báthory család megbízásából épült csarnoktemplom monumentalitásával és gyönyörű hálóboltozatával nyűgözi le a látogatókat. Különleges építészeti eleme a különálló, 30 méter magas fa harangtorony, amely a 17. században készült, és az ország egyik legrégebbi és legmagasabb ilyen típusú építménye. A templom belső tereiben értékes reneszánsz faragványok és a Báthoryak síremlékei láthatók. Kiváló akusztikája miatt gyakran ad otthont egyházi zenei koncerteknek. Nyírbátor vallási és történelmi jelentőségét ez az épület hirdeti legméltóbban a Nyírségben. Történelem K6 – Gótikus építészet és a Báthoryak kora.",
      ro: "Biserica Reformată din Nyírbátor este o capodoperă a stilului gotic târziu, fiind renumită pentru bolțile sale stelate spectaculoase și dimensiunile sale impresionante. Construită la sfârșitul secolului al XV-lea din ordinul lui István Báthory, învingătorul de la Câmpul Pâinii, biserica reflectă gloria familiei Báthory, una dintre cele mai influente din istoria Transilvaniei și a Ungariei. Interiorul bisericii, de o simplitate nobilă specifică reformei, pune în valoare arhitectura complexă a tavanului. Turnul-clopotniță din lemn, situat lângă biserică, este cel mai vechi și cel mai mare de acest tip din Ungaria, fiind construit fără niciun cui de fier. Complexul monumental este inima istorică a regiunii Nyírség. Istorie K7 – Arhitectura gotică și Reforma.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Kirche wurde zwischen 1488 und 1511 im Auftrag von István Báthory errichtet.",
        "Das Netzgewölbe gilt als eines der schönsten Beispiele spätgotischer Steinmetzkunst in Ungarn.",
        "Der hölzerne Glockenturm ist 30 Meter hoch und wurde komplett ohne Eisennägel erbaut.",
        "Im Inneren befindet sich das Grabmal von István Báthory aus rotem Marmor.",
        "Die Kirche war ursprünglich katholisch, bevor sie im 16. Jahrhundert reformiert wurde.",
        "Die Fenster der Kirche zeigen noch heute Fragmente spätgotischen Maßwerks.",
        "Die Báthory-Familie nutzte die Kirche als ihre private Hof- und Grablegekapelle.",
        "Nyírbátor war im Mittelalter eines der wichtigsten religiösen Zentren der Region."
      ],
      hu: ["A templomot Báthory István erdélyi vajda építtette 1488 és 1511 között.", "Hálóboltozata a magyarországi gótikus kőfaragóművészet egyik csúcsteljesítménye.", "A 30 méter magas fa harangtorony vasszegek nélkül, kizárólag fa csapolásokkal készült.", "Belsejében látható a sárkányos címerrel díszített Báthory-síremlék vörös márványból.", "Eredetileg katolikus templomnak épült, a reformáció idején vált protestánssá.", "Az ablakok mérműves díszítései a késő gótika legszebb jegyeit viselik.", "A templomkertben álló szobrok a város híres szülötteire emlékeztetnek.", "Nyírbátor a középkorban a régió egyik legfontosabb szellemi és hatalmi központja volt."],
      ro: ["Biserica a fost construită între anii 1484 și 1511.", "Bolta sa este considerată una dintre cele mai frumoase din întreaga Europă Centrală.", "În interior se află mormintele monumentale ale membrilor familiei Báthory.", "Clopotnița de lemn a fost ridicată în jurul anului 1640 în stilul Renașterii transilvănene.", "Biserica are o lungime de 45 de metri și o înălțime a tavanului de 20 de metri.", "Anual, aici se organizează festivalul de muzică clasică 'Zilele Muzicale Nyírbátor'."],
      en: []
    },
  },
  {
    id: "historical-mariapocs-kegytemplom-extra",
    type: "historical",
    parent: "HU-SZ",
    coords: [22.028, 47.878],
    name: { de: "Wallfahrtskirche Máriapócs", hu: "Máriapócsi kegytemplom", ro: "Biserica din Máriapócs", en: "Mariapocs Pilgrimage Church" },
    description: {
      de: "Einer der bedeutendsten Wallfahrtsorte Ungarns, bekannt für die 'weinende Madonna'.",
      hu: "Magyarország egyik legjelentősebb zarándokhelye, a könnyező Szűzanya kegyhelye.",
      ro: "Unul dintre cele mai importante locuri de pelerinaj, sanctuarul Madonei care plânge.",
      en: "One of Hungary's most important pilgrimage sites, the shrine of the Weeping Madonna."
    },
    facts: {
      de: ["Griechisch-katholisches Zentrum.", "Barocke Ausstattung."],
      hu: ["Görögkatolikus központ.", "Barokk berendezés."],
      ro: ["Centru greco-catolic.", "Mobilier baroc."],
      en: ["Greek Catholic center.", "Baroque interior."]
    },
    descriptionAdvanced: {
      de: "Die Wallfahrtskirche von Máriapócs ist der bedeutendste griechisch-katholische Wallfahrtsort in Ungarn und ein spirituelles Zentrum von europäischem Rang. Weltberühmt wurde der Ort durch das Wunder der 'weinenden Madonna' im Jahr 1696, als die Augen des Marienbildes in der kleinen Holzkirche Tränen vergossen. Heute beherbergt die prächtige barocke Basilika eine Kopie des Originals, die ebenfalls bereits mehrfach Tränen geweint haben soll. Jährlich pilgern hunderttausende Gläubige verschiedener Konfessionen hierher, um Trost und Heilung zu suchen. Die prunkvolle Ikonostase und die reiche barocke Innenausstattung schaffen eine Atmosphäre tiefer Frömmigkeit. Papst Johannes Paul II. besuchte den Ort im Jahr 1991 und unterstrich damit die Bedeutung von Máriapócs as Brücke zwischen Ost- und Westkirche. Der Ort ist nicht nur ein religiöses Ziel, sondern auch ein Denkmal der lebendigen Tradition des byzantinischen Ritus in Ungarn.",
      hu: "A máriapócsi kegytemplom Magyarország legjelentősebb görögkatolikus zarándokhelye és nemzetközi hírű búcsújáró hely. Világhírét az 1696-ban történt csodának köszönheti, amikor a templom Mária-képe könnyezni kezdett. A mai barokk bazilika pompás belső térrel, gazdagon díszített ikonosztázzal és értékes freskókkal várja a hívőket. Évente több százezer zarándok keresi fel a kegyhelyet, hogy a „könnyező Szűzanya” előtt imádkozzon. II. János Pál pápa 1991-es látogatása tovább emelte a hely jelentőségét. Máriapócs nemcsak vallási központ, hanem a bizánci rítusú keresztény kultúra és hagyomány őrzője is hazánkban. Történelem K6 – Búcsújáró helyek és egyházi hagyományok.",
      ro: "Biserica de Pelerinaj din Máriapócs este cel mai important loc de pelerinaj greco-catolic din Ungaria, fiind celebră la nivel mondial pentru Icoana Plângătoare a Maicii Domnului. Prima minune a avut loc în 1696, când icoana a fost văzută vărsând lacrimi, fenomen care s-a repetat de mai multe ori de-a lungul secolelor. Actuala biserică barocă, ridicată în secolul al XVIII-lea, impresionează prin bogăția decorului interior și prin atmosfera de liniște și devoțiune. Pelerinii vin aici din toate colțurile Europei, în special în preajma sărbătorilor mariene, transformând localitatea într-un centru spiritual vibrant. Icoana originală se află astăzi în Catedrala Sfântul Ștefan din Viena, la Máriapócs fiind păstrată o copie care, la rândul ei, a început să lăcrimeze. Istorie K7 – Fenomene religioase și tradiția pelerinajului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das erste Wunder des Weinens wurde am 4. November 1696 dokumentiert.",
        "Das Originalbild wurde auf Befehl von Kaiser Leopold I. nach Wien in den Stephansdom gebracht.",
        "Die heutige barocke Wallfahrtskirche wurde im 18. Jahrhundert errichtet.",
        "Máriapócs wurde 1948 von Papst Pius XII. in den Rang einer 'Basilica Minor' erhoben.",
        "Die Ikonostase ist ein Meisterwerk der ungarischen Barockkunst mit zahlreichen Heiligenfiguren.",
        "Der Ort ist das nationale Heiligtum für griechisch-katholische Ungarn.",
        "Viele Pilger legen die letzten Meter zum Gnadenbild auf den Knien zurück.",
        "In der Kirche werden zahlreiche Votivgaben von geheilten Pilgern aufbewahrt."
      ],
      hu: ["A kegykép első könnyezését 1696. november 4-én jegyezték fel hivatalosan.", "Az eredeti képet Lipót császár parancsára Bécsbe, a Stephansdomba szállították.", "A jelenlegi barokk templom a 18. század közepén épült fel a korábbi fatemplom helyén.", "Máriapócs 1948-ban kapta meg a „basilica minor” rangot XII. Pius pápától.", "Ikonosztáza az ország egyik legszebb barokk egyházi műalkotása, számos szent alakjával.", "A hely a magyarországi görögkatolikusok nemzeti szentélye és lelki központja.", "A templom falain számos fogadalmi tárgy látható, melyek a gyógyulásokért adott hálát jelzik.", "A kegyhely a Kárpát-medencei Mária-út egyik legfontosabb északkeleti állomása."],
      ro: ["Máriapócs a fost declarat loc de pelerinaj național de către Papa Pius al XII-lea.", "Biserica actuală a fost construită între anii 1731 și 1756.", "Icoana plângătoare este vizitată anual de peste 500.000 de pelerini.", "Papa Ioan Paul al II-lea a vizitat Máriapócs în anul 1991.", "Interiorul bisericii este decorat cu fresce spectaculoase realizate de artiști locali.", "Localitatea a primit titlul de 'Sediul Maicii Domnului' în religia catolică maghiară."],
      en: []
    },
  },
  {
    id: "animal-habitat-nyiregyhazi-allatpark-extra",
    type: "animal-habitat",
    parent: "HU-SZ",
    coords: [21.670, 48.005],
    name: { de: "Zoo Nyíregyháza", hu: "Nyíregyházi Állatpark", ro: "Grădina Zoologică Nyíregyháza", en: "Nyiregyhaza Zoo" },
    description: {
      de: "Einer der besten Zoos Europas in einem Eichenwald bei Sóstó.",
      hu: "Európa egyik legjobb állatkertje a nyíregyházi Sóstó melletti tölgyerdőben.",
      ro: "Una dintre cele mai bune grădini zoologice din Europa, în pădurea de la Sóstó.",
      en: "One of Europe's best zoos, located in an oak forest near Sóstó."
    },
    facts: {
      de: ["Über 500 Tierarten.", "Ozeanarium und Regenwaldhaus."],
      hu: ["Több mint 500 állatfaj.", "Ócenárium és esőerdő-ház."],
      ro: ["Peste 500 de specii.", "Oceanariu și casa pădurii tropicale."],
      en: ["Home to over 500 species.", "Features an oceanarium and rainforest house."]
    },
    descriptionAdvanced: {
      de: "Der Tierpark Nyíregyháza, auch bekannt als Sóstó Zoo, gilt als einer der spektakulärsten und besten Zoos in Europa. Er erstreckt sich über ein weitläufiges, 30 Hektar großes Eichenwaldgelände im Erholungsgebiet Sóstó. Was diesen Zoo so besonders macht, ist die Gestaltung der Lebensräume, die den Tieren viel Platz und natürliche Barrieren bietet. Ein absolutes Highlight ist das 'Grüne Pyramide'-Gebäude mit seinem riesigen Ozeanarium und einem Regenwaldhaus, das Besucher in exotische Welten entführt. Von der afrikanischen Savanne über den indischen Dschungel bis hin zur polaren Welt der Eisbären sind alle Kontinente vertreten. Der Zoo legt großen Wert auf Artenschutz und beherbergt seltene Arten wie den Weißen Tiger und den Komodowaran. Die Kombination aus Tierbeobachtung, botanischer Vielfalt und interaktiven Bildungsprogrammen macht den Besuch zu einem unvergesslichen Abenteuer für die ganze Familie.",
      hu: "A Nyíregyházi Állatpark, közismertebb nevén a Sóstó Zoo, Európa egyik leglátványosabb és legelismertebb állatkertje. A nyíregyházi Sóstó melletti 30 hektáros tölgyerdőben elhelyezkedő park tágas, természetközeli kifutóival tűnik ki. Legnagyobb attrakciója a Zöld Piramis, amely egy óriási ócenáriumot és egy esőerdő-házat foglal magában, ahol a látogatók egzotikus világokba csöppenhetnek. Az állatkert több mint 5000 állatnak ad otthont, köztük olyan ritkaságoknak, mint a fehér tigris vagy a komodói varánusz. A park nagy hangsúlyt fektet a fajmegőrzésre és az interaktív ismeretterjesztésre, ami a családok számára egy egész napos, felejthetetlen kalandot kínál. Természetismeret K5 – Világunk állatai és élőhelyeik.",
      ro: "Grădina Zoologică din Nyíregyháza (Sóstó Zoo) este considerată una dintre cele mai bune și mai moderne grădini zoologice din Europa, fiind situată în zona de agrement Sóstó, într-o pădure de stejari. Ceea ce o face specială este conceptul de 'zoo-continent', unde animalele sunt grupate pe regiuni geografice în habitate vaste și naturale. Printre atracțiile majore se numără 'Piramida Verde' cu oceanariu subacvatic și junglă tropicală, dar și 'Lumea Polară' unde pot fi văzuți urși polari. Grădina este implicată în numeroase programe internaționale de reproducere a speciilor pe cale de dispariție, având succese remarcabile cu elefanții africani și rinocerii albi. Este o destinație turistică de talie mondială. Științele Naturii K6 – Conservarea biodiversității globale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde mehrfach zum besten Tierpark Europas in seiner Kategorie gewählt.",
        "Er beherbergt über 5.000 Tiere aus rund 500 verschiedenen Arten.",
        "Die 'Grüne Pyramide' beherbergt ein Haifischbecken mit einem Glastunnel für Besucher.",
        "Im Zoo Nyíregyháza gelang die europaweit erste Nachzucht eines Afrikanischen Elefanten in Gefangenschaft.",
        "Das Gelände ist in geografische Zonen unterteilt, die die natürliche Heimat der Tiere widerspiegeln.",
        "Es gibt ein hoteleigenes Angebot direkt am Zoogelände für mehrtägige Safaris.",
        "Der Zoo engagiert sich in over 50 internationalen Programmen zur Rettung bedrohter Tierarten.",
        "Die weitläufigen Eichenwälder bieten auch im Hochsommer angenehmen Schatten für Mensch und Tier."
      ],
      hu: ["Az állatkertet többször is Európa legjobb állatkertjének választották saját kategóriájában.", "A Zöld Piramisban található cápás akvárium alatt egy üvegalagúton sétálhatnak át a látogatók.", "Itt született meg az ország első afrikai elefántbébije sikeres fogságban tartott tenyésztésből.", "A terület kontinensenkénti csoportosításban mutatja be a világ élővilágát a sarkvidéktől a szavannáig.", "A park saját szállodával rendelkezik, így a vendégek a vadon hangjai között ébredhetnek.", "Aktívan részt vesznek több mint 50 nemzetközi fajmegmentési programban (EEP).", "Az állatparkban látható Magyarország legnagyobb medve- és nagymacska-gyűjteménye.", "A Sóstói tölgyerdő árnyas fái még a legnagyobb nyári hőségben is kellemes klímát biztosítanak."],
      ro: ["Grădina zoologică se întinde pe o suprafață de 30 de hectare de pădure naturală.", "Găzduiește peste 5000 de animale din 500 de specii de pe toate continentele.", "Tunelul subacvatic din Piramida Verde permite observarea rechinilor și a recifelor de corali.", "A fost votată de mai multe ori ca fiind 'Cea mai bună grădină zoologică din Europa' la categoria sa.", "Este singurul loc din Ungaria unde se pot vedea specii rari precum ursul polar și balena ucigașă (machete educaționale).", "Sóstó Zoo dispune de un hotel propriu situat chiar în incinta parcului."],
      en: []
    },
  },
  {
    id: "industry-lego-nyiregyhaza-extra",
    type: "industry",
    parent: "HU-SZ",
    coords: [21.751, 47.915],
    name: { de: "LEGO Werk Nyíregyháza", hu: "LEGO Gyár Nyíregyháza", ro: "Fabrica LEGO Nyíregyháza", en: "LEGO Factory Nyiregyhaza" },
    description: {
      de: "Eines der modernsten LEGO-Werke weltweit, wo Millionen von Bausteinen entstehen.",
      hu: "A világ egyik legmodernebb LEGO gyára, ahol építőkockák milliói készülnek.",
      ro: "Una dintre cele mai moderne fabrici LEGO din lume, unde se produc milioane de piese.",
      en: "One of the most modern LEGO factories worldwide, producing millions of bricks."
    },
    facts: {
      de: ["Riesiges Logistikzentrum.", "Nachhaltige Produktion."],
      hu: ["Hatalmas logisztikai központ.", "Fenntartható gyártás."],
      ro: ["Centru logistic uriaș.", "Producție sustenabilă."],
      en: ["Massive logistics hub.", "Features sustainable production."]
    },
    descriptionAdvanced: {
      de: "Das LEGO-Werk in Nyíregyháza ist einer der modernsten und bedeutendsten Produktionsstandorte der LEGO-Gruppe weltweit. Auf einer riesigen Fläche werden hier täglich Millionen der berühmten bunten Bausteine sowie DUPLO-Produkte für den Weltmarkt gefertigt. Das Werk ist ein Musterbeispiel für nachhaltige industrielle Fertigung und nutzt modernste Automatisierungstechnologien. Von der Spritzgießerei über die Dekoration und Verpackung bis hin zum gigantischen Logistikzentrum deckt der Standort den gesamten Produktionsprozess ab. Das Unternehmen ist der wichtigste private Arbeitgeber in der Region und investiert massiv in die Ausbildung seiner Mitarbeiter und in lokale Gemeinschaftsprojekte. Ein besonderes Augenmerk liegt auf der Reduzierung des ökologischen Fußabdrucks durch den Einsatz von erneuerbaren Energien und Recycling-Verfahren. Das Werk in Nyíregyháza ist ein Symbol für den technologischen Fortschritt und die wirtschaftliche Dynamik im Nordosten Ungarns.",
      hu: "A nyíregyházi LEGO gyár a dán játékgyártó óriás egyik legmodernebb és legjelentősebb termelési központja a világon. A hatalmas területen elterülő üzemben naponta több millió ikonikus építőkocka és DUPLO elem készül a világpiacra. A gyár a fenntartható ipari termelés mintapéldája, ahol a legkorszerűbb automatizálási technológiákat alkalmazzák. A folyamat a fröccsöntéstől a díszítésen és csomagoláson át a hatalmas logisztikai központig tart. A vállalat Nyíregyháza és a régió egyik legfontosabb munkaadója, amely nagy hangsúlyt fektet a dolgozói környezetre és a megújuló energiaforrások használatára, jelentősen hozzájárulva a város gazdasági fejlődéséhez. Földrajz K8 – Globális termelési láncok és modern gyáripar.",
      ro: "Fabrica LEGO din Nyíregyháza este una dintre cele mai mari și mai moderne unități de producție ale celebrului grup danez la nivel mondial. Inaugurată în 2014 pentru a înlocui o facilitate mai mică, fabrica se întinde pe o suprafață uriașă, acoperind întregul proces de producție: de la turnarea prin injecție a pieselor de plastic, la decorare, ambalare și depozitare robotizată. Unitatea de la Nyíregyháza produce miliarde de piese LEGO anual, fiind un model de sustenabilitate, cu un parc fotovoltaic propriu și sisteme de reciclare a apei. Prezența LEGO a transformat economia locală, oferind mii de locuri de muncă și punând orașul Nyíregyháza pe harta globală a producției de jucării. Este un loc unde precizia tehnică se întâlnește cu magia creativității. Geografie K8 – Companii multinaționale și producția industrială.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Werk wurde im Jahr 2014 offiziell eröffnet und kontinuierlich erweitert.",
        "Jährlich werden hier Milliarden von LEGO-Elementen mit höchster Präzision produziert.",
        "Die Fabrik nutzt Solarenergie und hochmoderne Filtersysteme zur Ressourcenschonung.",
        "In Nyíregyháza werden fast alle weltweit verkauften DUPLO-Bausteine hergestellt.",
        "Das automatisierte Hochregallager des Logistikzentrums ist eines der größten in Ungarn.",
        "LEGO ist bekannt für seine strengen Qualitätskontrollen; die Fehlertoleranz liegt im Mikrometerbereich.",
        "Das Unternehmen fördert MINT-Bildungsprogramme an lokalen Schulen und Universitäten.",
        "Das Werk umfasst eine Gesamtfläche von über 160.000 Quadratmetern Produktionsfläche."
      ],
      hu: ["Az új nyíregyházi gyárat 2014-ben adták át, és azóta folyamatosan bővül.", "Évente több milliárd LEGO elemet állítanak itt elő hajszálpontos precizitással.", "A gyár tetőzetén elhelyezett napelempark az egyik legnagyobb ilyen ipari létesítmény a régióban.", "Itt készül a világon értékesített összes DUPLO kocka jelentős része.", "Az automata magasraktár méretei lenyűgözőek, több tízezer raklap áru tárolására képes.", "A LEGO szigorú minőségellenőrzése miatt a kockák hibaszázaléka rendkívül alacsony.", "A gyár aktívan támogatja a helyi oktatást és a gyermekek kreativitását fejlesztő programokat.", "A termelési terület nagysága meghaladja a 160 ezer négyzetmétert."],
      ro: ["Fabrica se întinde pe o suprafață de peste 120.000 de metri pătrați de clădiri construite.", "Peste 2.500 de angajați lucrează în cadrul complexului industrial LEGO din Nyíregyháza.", "Depozitul automatizat al fabricii are o înălțime de 30 de metri și este gestionat complet de roboți.", "Aici sunt produse în special seturile LEGO Duplo pentru copiii mici.", "Unitatea folosește peste 700 de mașini de turnare prin injecție de mare precizie.", " LEGO Nyíregyháza este una dintre cele 5 fabrici principale ale grupului din întreaga lume."],
      en: []
    },
  },
  {
    id: "agriculture-szabolcsi-alma-extra",
    type: "agriculture",
    parent: "HU-SZ",
    coords: [22.250, 48.050],
    name: { de: "Apfelplantagen von Szabolcs", hu: "Szabolcsi almáskertek", ro: "Livezile de meri din Szabolcs", en: "Szabolcs Apple Orchards" },
    description: {
      de: "Die größte Apfelanbauregion Ungarns, bekannt für hochwertige Früchte.",
      hu: "Magyarország legnagyobb almatermő vidéke, kiváló minőségű gyümölcsökkel.",
      ro: "Cea mai mare regiune pomicolă din Ungaria, celebră pentru meri.",
      en: "Hungary's largest apple-growing region, famous for high-quality fruit."
    },
    facts: {
      de: ["Jonatán-Spezialität.", "Export in viele Länder."],
      hu: ["A Jonatán alma a fő fajta.", "Számos országba exportálnak."],
      ro: ["Soiul Ionatan este principal.", "Exportă în numeroase țări."],
      en: ["Jonathan apples are the main variety.", "Exports to many countries."]
    },
    descriptionAdvanced: {
      de: "Der Apfel aus der Region Szabolcs-Szatmár-Bereg ist weit über die Landesgrenzen hinaus als 'Hungarikum' bekannt und steht für höchste Fruchtqualität. Die fruchtbaren Lössböden und das spezielle Mikroklima der ungarischen Tiefebene im Nordosten bieten ideale Bedingungen für den Obstbau. Besonders berühmt ist die Sorte 'Jonatán', die hier ein einzigartiges Aroma und eine leuchtend rote Farbe entwickelt. Die Tradition des Apfelanbaus reicht Generationen zurück und ist die wichtigste Lebensgrundlage für tausende Familienbetriebe in der Region. In den modernen Obstplantagen werden heute auch viele neue Sorten angebaut, die sowohl für den Frischverzehr als auch für die Saftproduktion in ganz Europa gefragt sind. Die Erntezeit im Herbst ist ein kulturelles Ereignis, das mit zahlreichen Festen gefeiert wird. Der Szabolcser Apfel ist nicht nur ein gesundes Lebensmittel, sondern auch ein Symbol für die landwirtschaftliche Kraft und den Fleiß der Menschen in dieser Region.",
      hu: "A szabolcsi alma Magyarország egyik legismertebb mezőgazdasági terméke és a Nyírség büszkesége. Szabolcs-Szatmár-Bereg vármegye löszös talaja és sajátos mikroklímája ideális feltételeket biztosít a gyümölcstermesztéshez. Különösen híres a Jonatán alma, amely ezen a vidéken nyeri el jellegzetes, lángvörös színét és édes-savanykás ízvilágát. Az almatermesztés évszázados hagyományokra tekint vissza, és ma is több ezer család megélhetését biztosítja a térségben. A szabolcsi alma nemcsak friss gyümölcsként, hanem kiváló minőségű lé- és pálinkaalapanyagként is keresett az európai piacokon, képviselve a magyar minőséget és szaktudást. Földrajz K7 – Mezőgazdasági tájegységek és gyümölcstermesztés.",
      ro: "Cultura mărului în județul Szabolcs-Szatmár-Bereg este coloana vertebrală a agriculturii din nord-estul Ungariei, această regiune fiind celebră la nivel european pentru calitatea fructelor sale. Solul nisipos și numărul mare de ore de soare oferă condițiile perfecte pentru mere zemoase, aromate și bogate în vitamine. Merele de Szabolcs au statut de denumire de origine protejată, fiind un brand național puternic (Hungaricum). Pe lângă consumul în stare proaspătă, merele sunt baza unor produse tradiționale precum pălinca de mere și diverse sucuri naturale. Livezile nesfârșite care înfloresc primăvara oferă un peisaj de o frumusețe rară, transformând regiunea într-o destinație turistică agricolă de top. Geografia K8 – Agricultura specializată și mărci regionale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Region Szabolcs liefert rund zwei Drittel der gesamten ungarischen Apfelproduktion.",
        "Der Apfelanbau in großem Stil begann hier Ende des 19. Jahrhunderts.",
        "Der Jonatán-Apfel aus Szabolcs gilt aufgrund seines Zucker-Säure-Verhältnisses als geschmacklich unerreicht.",
        "Die Früchte werden in moderne Kühlhäuser gelagert, um sie das ganze Jahr über frisch liefern zu können.",
        "Neben Äpfeln ist die Region auch für ihre hochwertigen Pflaumen und Sauerkirschen bekannt.",
        "Viele Plantagen nutzen heute computergesteuerte Bewässerungssysteme und Hagelschutznetze.",
        "Der Szabolcser Apfel besitzt eine geschützte geografische Ursprungsbezeichnung in der EU.",
        "Jedes Jahr findet in Nyíregyháza das große 'Apfelfestival' zur Feier der Ernte statt."
      ],
      hu: ["Magyarország teljes almatermésének mintegy kétharmada Szabolcs vármegyéből származik.", "Az almatermesztés a 19. század végén, a homokterületek fásításával vált nagyüzemivé.", "A Jonatán alma mellett ma már modern fajtákat, például Galát és Idaredet is termesztenek.", "A szabolcsi alma 2011 óta uniós oltalom alatt álló földrajzi jelzéssel rendelkező termék.", "Az őszi almaszüret idején Nyíregyházán nagyszabású Almafesztivált rendeznek.", "A gyümölcs kiemelkedő beltartalmi értékei miatt egészséges és tápláló néptáplálék.", "A régióban modern hűtőházak láncolata biztosítja az alma egész éves frissességét.", "A szabolcsi almaexport a magyar agrárgazdaság egyik meghatározó tétele."],
      ro: ["Județul Szabolcs produce peste 60% din cantitatea totală de mere a Ungariei.", "Soiul 'Jonatán' este cel mai emblematic pentru această regiune istorică.", "Tradiția cultivării mărului la scară industrială a început în anii 1920.", "Peste 30.000 de hectare de livezi sunt cultivate în prezent în acest județ.", "Merele de Szabolcs sunt exportate masiv în întreaga Europă și în țările arabe.", "Regiunea găzduiește numeroase stațiuni de cercetare pentru pomicultură."],
      en: []
    },
  },

  // HU-TO: Tolna (2G, 1LN, 2W)
  {
    id: "historical-simontornyai-var-extra",
    type: "historical",
    parent: "HU-TO",
    coords: [18.552, 46.751],
    name: { de: "Burg Simontornya", hu: "Simontornyai vár", ro: "Cetatea Simontornya", en: "Simontornya Castle" },
    description: {
      de: "Eine gut erhaltene Renaissance-Burg, die einst Teil des Verteidigungsgürtels war.",
      hu: "Jó állapotban maradt reneszánsz vár, amely egykor a végvárrendszer része volt.",
      ro: "O cetate renascentistă bine conservată, fostă parte a sistemului de apărare.",
      en: "A well-preserved Renaissance castle, once part of the defensive border system."
    },
    facts: {
      de: ["Gotischer Wohnturm.", "Renaissance-Ausstellung."],
      hu: ["Gótikus lakótoronnyal.", "Reneszánsz kiállítás látható benne."],
      ro: ["Turn de locuit gotic.", "Expoziție renascentistă."],
      en: ["Gothic residential tower.", "Features a Renaissance exhibition."]
    },
    descriptionAdvanced: {
      de: "Die Burg Simontornya ist ein faszinierendes Baudenkmal, das auf einzigartige Weise mittelalterliche Wehrhaftigkeit mit dem Glanz der Renaissance verbindet. Benannt nach ihrem Erbauer, Simon Turul, blickt die Anlage auf eine über 700-jährige Geschichte zurück. Während sie ursprünglich als gotischer Wohnturm errichtet wurde, verwandelte sie sich unter der Herrschaft der Familie Buzlay im 16. Jahrhundert in einen prächtigen Renaissance-Palast. Besonders beeindruckend sind die kunstvollen Fensterrahmen und Porträts aus rotem Marmor, die von italienischen Meistern geschaffen wurden. Trotz der späteren türkischen Besetzung und barocken Umbauten ist der Charakter der Renaissance-Residenz gut erhalten geblieben. Heute beherbergt die Burg ein Museum, das Einblicke in die Geschichte der Region, den Festungsbau und das aristokratische Leben bietet. Die Burg Simontornya ist ein verstecktes Juwel in der ungarischen Provinz, das Besucher durch seine architektonische Eleganz und seine bewegte Vergangenheit in den Bann zieht.",
      hu: "A simontornyai vár egy különleges építészeti emlék, ahol a középkori erődfalak és a reneszánsz palota eleganciája találkozik. A 13. században emelt gótikus lakótorony a 16. század elején, a Buzlay család birtoklása idején alakult át pompás reneszánsz rezidenciává, itáliai mesterek munkája nyomán. Bár a török hódoltság és a későbbi barokk átépítések nyomai is látszanak, a vár megőrizte nemesi karakterét. Ma múzeumként működik, ahol a látogatók megismerhetik a vár történetét, a nemesi mindennapokat és a Sió-csatorna menti vidék múltját. A vár udvara és a vastag falak között megbújó termek misztikus hangulatot árasztanak. Történelem K6 – Reneszánsz udvari kultúra és várkastélyok.",
      ro: "Cetatea din Simontornya este o bijuterie ascunsă a arhitecturii renascentiste din județul Tolna, având o istorie fascinantă care se întinde pe șase secole. Construită inițial ca un turn de locuință gotic în secolul al XIII-lea, cetatea a fost transformată într-un palat renascentist somptuos de către familia Buzlay în timpul domniei regelui Matia Corvin. Zidurile sale de cărămidă, ferestrele sculptate și loggia elegantă reflectă influența artei italiene în Ungaria acelei epoci. Deși a suferit modificări în timpul ocupației otomane, cetatea și-a păstrat nucleul arhitectural deosebit. Astăzi, vizitatorii pot explora sălile palatului, expozițiile de istorie locală și pot admira detaliile rafinate ale uneia dintre cele mai frumoase reședințe nobiliare de tip castel din Transdanubia. Istorie K7 – Renașterea și influențele europene.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der ursprüngliche Wohnturm wurde im Jahr 1277 durch Simon Turul errichtet.",
        "Die Burg wurde im frühen 16. Jahrhundert nach dem Vorbild des königlichen Hofes in Buda modernisiert.",
        "Während der Türkenkriege war Simontornya fast 150 Jahre lang eine osmanische Garnisonsstadt.",
        "Im Inneren ist eine wertvolle Sammlung von archäologischen Funden aus der Burg grabung zu sehen.",
        "Die Burgkapelle verfügt über schöne gotische Gewölbereste.",
        "Das heutige Aussehen der Burg ist das Ergebnis einer umfassenden Restaurierung in den 1960er Jahren.",
        "Simontornya liegt an der Sió, die früher eine wichtige strategische Wasserstraße war.",
        "Regelmäßig finden in der Burg kulturelle Veranstaltungen und Ausstellungen zeitgenössischer Kunst statt."
      ],
      hu: ["A vár nevét építtetőjéről, Simon Turul fia Simonról kapta 1277-ben.", "A reneszánsz átépítés során vörös márványból faragott ajtó- és ablakkereteket kapott az épület.", "A török hódoltság alatt Simontornya fontos katonai és közigazgatási központ volt.", "A várban látható kiállítás bemutatja a középkori Tolna vármegye régészeti leleteit.", "A lakótorony falai között ma is felismerhetők a gótikus bordás boltozatok maradványai.", "Az 1960-as években végrehajtott restaurálás az ország egyik legszakszerűbb várfelújítása volt.", "A vár stratégiai szerepét egykor a mocsaras Sió-völgy védelme adta.", "Rendszeresen ad otthont képzőművészeti tárlatoknak és történelmi programoknak."],
      ro: ["Numele localității provine de la cavalerul Simon, care a construit primul turn în 1270.", "Mózes Buzlay, diplomat al regelui Matia, a adus meșteri italieni pentru reconstrucție.", "Cetatea a fost o fortăreață de graniță importantă în timpul luptelor cu turcii.", "Poarta castelului păstrează elemente gotice și renascentiste originale.", "Săpăturile arheologice din anii 1960 au scos la iveală numeroase cahle de sobă ornamentate.", "În interior funcționează un muzeu dedicat istoriei fortificației și vieții nobiliare."],
      en: []
    },
  },
  {
    id: "historical-dunafoldvari-var-extra",
    type: "historical",
    parent: "HU-TO",
    coords: [18.928, 46.805],
    name: { de: "Burg Dunaföldvár", hu: "Dunaföldvári vár", ro: "Cetatea Dunaföldvár", en: "Dunaföldvár Castle" },
    description: {
      de: "Eine Donaufestung mit einem markanten Wohnturm, der heute als Museum dient.",
      hu: "Dunai erődítmény jellegzetes öregtoronnyal, amely ma múzeum.",
      ro: "O fortificație dunăreană cu un turn principal distinctiv, astăzi muzeu.",
      en: "A Danube fortress with a distinctive keep, now serving as a museum."
    },
    facts: {
      de: ["Blick auf die Donau.", "Mittelalterliche Mauern."],
      hu: ["Kilátás a Dunára.", "Középkori falak."],
      ro: ["Vedere spre Dunăre.", "Ziduri medievale."],
      en: ["Offers a view of the Danube.", "Medieval walls."]
    },
    descriptionAdvanced: {
      de: "Die Burg von Dunaföldvár, auch als Csonka-Turm bekannt, ist eine markante Festung am rechten Ufer der Donau. Ihr Herzstück ist ein mächtiger quadratischer Wohnturm aus dem 15. Jahrhundert, der einst die wichtige Donauüberquerung und die Handelswege schützte. Die strategische Lage auf einer Anhöhe machte die Burg zu einem hart umkämpften Punkt während der Türkenkriege. Heute ist die Anlage liebevoll restauriert und beherbergt ein Museum, das die Geschichte der Stadt Dunaföldvár und der Schifffahrt auf der Donau dokumentiert. Besucher können den Turm besteigen und von der obersten Etage einen spektakulären Blick über den Fluss und die weite ungarische Tiefebene genießen. In den ehemaligen Kellern und Nebengebäuden finden wechselnde Ausstellungen und handwerkliche Vorführungen statt. Die Burg ist ein lebendiger Ort der Geschichte, der eng mit dem Schicksal des Flusses und der Menschen, die an seinen Ufern leben, verbunden ist.",
      hu: "A dunaföldvári vár, ismertebb nevén a Csonka-torony, a Duna menti védelmi rendszer egyik fontos láncszeme volt. A 15. században emelt négyszögletes öregtorony stratégiai helyen, a folyó feletti magaslaton őrizte a révátkelőt és a kereskedelmi utakat. A török háborúk idején a vár és a torony súlyosan károkat szenvedett, de mindvégig fontos katonai pont maradt. Ma a felújított torony múzeumként várja a látogatókat, bemutatva a város és a dunai hajózás történetét. A legfelső szintről páratlan kilátás nyílik a Duna hömpölygő vizére és az Alföld végtelen rónaságára, összekötve a történelmi múltat a természeti szépséggel. Történelem K6 – Dunai végvárak és folyami közlekedés.",
      ro: "Cetatea din Dunaföldvár, dominată de 'Turnul Turcesc' (Csonka-torony), este un punct de reper istoric important pe malul Dunării, marcând locul unde drumurile comerciale traversau fluviul. Turnul actual, construit inițial în secolul al XV-lea, a fost martorul unor perioade tulburi, servind ca punct defensiv sub ocupație otomană și ulterior ca închisoare. Recent restaurat, complexul cetății găzduiește expoziții de istorie locală, arheologie și artă, oferind o privire detaliată asupra evoluției orașului Dunaföldvár. Terasa cetății oferă una dintre cele mai frumoase vederi panoramice asupra Dunării și a podului care face legătura cu Marea Câmpie. Este un loc unde istoria militară se întâlnește cu farmecul peisajului fluvial maghiar. Istorie K6 – Cetăți dunărene și controlul drumurilor comerciale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Wohnturm wurde im 15. Jahrhundert unter der Herrschaft von König Sigismund erbaut.",
        "Während der osmanischen Zeit diente der Turm als Getreidespeicher und Verteidigungsanlage.",
        "Der Name 'Csonka-torony' (verstümmelter Turm) rührt daher, dass er lange Zeit ohne Dachruine dastand.",
        "Innerhalb der Burgmauern befindet sich auch eine kleine historische Kapelle.",
        "Das Burgmuseum zeigt eine interessante Sammlung lokaler archäologischer Funde aus der Römerzeit.",
        "Die Festung war ein wichtiger Bestandteil des Grenzfestungssystems gegen die Türken.",
        "Jedes Jahr findet rund um die Burg ein großes mittelalterliches Marktfest statt.",
        "Der Turm bietet heute Platz für eine kleine Kunstgalerie mit Werken regionaler Künstler."
      ],
      hu: ["A vártorony eredetileg Zsigmond király idején épült a 15. század elején.", "A „Csonka-torony” nevet azért kapta, mert sokáig tető nélkül, romosan állt a Duna felett.", "A török időkben az oszmánok börtönnek és lőszerraktárnak is használták az épületet.", "A torony mellett egy barokk kori kápolna és várudvar is látogatható.", "A múzeumban értékes helytörténeti gyűjtemény és római kori kövek láthatók.", "Minden évben itt rendezik meg a Dunaföldvári Várnapokat középkori bemutatókkal.", "A várfalak maradványai jól érzékeltetik az egykori erődítmény méreteit.", "A torony erkélyéről tiszta időben ellátni egészen a paksi atomerőműig."],
      ro: ["Turnul are o înălțime de 18 metri și ziduri de piatră foarte groase.", "În timpul ocupației turcești, a servit drept sediu al garnizoanei locale.", "Arheologii au descoperit în interiorul turnului obiecte ceramice rare din epoca otomană.", "Cetatea a fost parțial distrusă în timpul revoltei lui Rákóczi din secolul al XVIII-lea.", "În turn a funcționat o închisoare unde au fost deținuți briganzii celebri ai regiunii.", "Lângă cetate se află un restaurant tradițional situat într-o fostă pivniță de vinuri."],
      en: []
    },
  },
  {
    id: "kid-landmark-gemenci-kisvasut-extra",
    type: "kid-landmark",
    parent: "HU-TO",
    coords: [18.847, 46.223],
    name: { de: "Schmalspurbahn Gemenc", hu: "Gemenci kisvasút", ro: "Trenulețul de la Gemenc", en: "Gemenc Forest Railway" },
    description: {
      de: "Eine charmante Waldbahn, die durch die größte Auenlandschaft Ungarns führt.",
      hu: "Bájos erdei vasút, amely Magyarország legnagyobb ártéri erdején vezet keresztül.",
      ro: "Un trenuleț de pădure fermecător care traversează cea mai mare luncă din Ungaria.",
      en: "A charming forest railway running through Hungary's largest floodplain forest."
    },
    facts: {
      de: ["Wildbeobachtung möglich.", "Start in Pörböly."],
      hu: ["Vadmegfigyelési lehetőség.", "Pörbölyről indul."],
      ro: ["Observare de animale sălbatice.", "Plecare din Pörböly."],
      en: ["Wildlife spotting opportunities.", "Starts from Pörböly."]
    },
    descriptionAdvanced: {
      de: "Die Schmalspurbahn Gemenc ist ein Highlight für Naturliebhaber und Familien und bietet eine einzigartige Möglichkeit, die größte Auenlandschaft Mitteleuropas zu erkunden. Die Bahn schlängelt sich auf einer Strecke von rund 30 Kilometern durch den dichten Auwald des Nationalparks Donau-Drau. Während der Fahrt können Passagiere mit etwas Glück seltene Tiere wie Hirsche, Wildschweine oder sogar Schwarzstörche in ihrem natürlichen Lebensraum beobachten. Die Bahn startet im Ökotourismus-Zentrum Pörböly, wo Besucher auch ein interessantes Museum über das Leben im Auwald und eine Wildtier-Rettungsstation finden. Die gemütliche Fahrt im offenen Waggon vermittelt ein Gefühl von Entschleunigung und lässt die Schönheit der ungarischen Natur hautnah erleben. Besonders im Frühjahr während der Hochwasserzeit oder im Herbst zur Hirschbrunft bietet die Gemencer Waldbahn unvergessliche Eindrücke. Es ist ein Ort, an dem Umweltschutz und sanfter Tourismus auf charmante Weise zusammenkommen.",
      hu: "A Gemenci Állami Erdei Vasút Magyarország egyik legkülönlegesebb kisvasútja, amely a Duna-Dráva Nemzeti Park területén, Európa legnagyobb összefüggő ártéri erdején vezet keresztül. A zakatoló szerelvényekről a látogatók zavartalanul figyelhetik meg a Gemenci erdő gazdag élővilágát, köztük a világhírű gímszarvasokat és vaddisznókat. A vasút Pörbölyről indul, ahol modern ökoturisztikai központ és vadmentő állomás várja a családokat. A kanyargós síneken tett utazás során a vonat mocsaras rétek, holtágak és hatalmas füzek között halad el, bemutatva az ártér vadregényes szépségét minden évszakban. A kisvasút a természetbarátok és a gyermekek számára egyaránt felejthetetlen kalandot kínál. Természetismeret K5 – Ártéri erdők és erdei vasutak.",
      ro: "Calea Ferată Forestieră din Gemenc este singura cale ferată din Ungaria care străbate o zonă inundabilă vastă, oferind o aventură de neuitat pentru copii și familii. Trenulețul cu ecartament îngust pornește de la marginea orașului Szekszárd și șerpuiește prin inima Pădurii Gemenc, trecând pe lângă brațe moarte ale Dunării și poieni unde pot fi văzuți cerbi și mistreți. Vagoanele deschise permit o conexiune directă cu natura, oferind șansa de a respira aerul curat al pădurii și de a auzi sunetele sălbăticiei. Călătoria include opriri la puncte de observație, muzee forestiere și centre de vizitare interactive unde copiii pot învăța despre viața vidrelor și a berzelor negre. Este o experiență educativă și distractivă care combină tehnica feroviară veche cu conservarea naturii. Științele Naturii K3 – Călătorie în lumea pădurii.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Waldbahn wurde ursprünglich im frühen 20. Jahrhundert für den Holztransport gebaut.",
        "Gemenc ist der größte zusammenhängende Auwald in Mitteleuropa und ein wichtiges Naturschutzgebiet.",
        "In Pörböly steht eine historische Dampflokomotive namens 'Rezét', die an Festtagen den Zug zieht.",
        "Die Strecke führt an zahlreichen Altwasserarmen der Donau vorbei, die reich an Fischen und Vögeln sind.",
        "An den Haltestellen starten Lehrpfade, die tiefer in den Wald zu Aussichtstürmen führen.",
        "Die Region ist weltberühmt für ihren Bestand an prächtigen Rothirschen.",
        "Die Schmalspurbahn verkehrt nach einem saisonalen Fahrplan und ist besonders an Wochenenden beliebt.",
        "Das Informationszentrum bietet auch Fahrradverleih und Kanutouren als Ergänzung zur Bahnfahrt an."
      ],
      hu: ["A vasút hossza mintegy 30 kilométer, összekötve a Sárközt a Duna-parttal.", "A Gemenci erdő Magyarország egyetlen olyan ártéri erdeje, ahol fekete gólyák is fészkelnek.", "A nosztalgiavonatokat ünnepnapokon a „Rezét” nevű gőzmozdony vontatja.", "A vasútvonal mentén tanösvények és madármegfigyelő tornyok sora található.", "Áradások idején előfordul, hogy a síneket is ellepi a víz, ilyenkor szünetel a közlekedés.", "A pörbölyi központban interaktív kiállítás mutatja be az ártéri gazdálkodás történetét.", "A terület híres a Kapitális gímszarvas-bikáiról, melyeknek bőgése ősszel messzire hallatszik.", "A kisvasút kocsijai nyáron nyitottak, így a látogatók közvetlen kapcsolatba kerülhetnek az erdő illataival."],
      ro: ["Linia ferată are o lungime totală de 32 de kilometri, fiind cea mai lungă de acest tip din regiune.", "Locomotiva cu aburi 'Rezét' este atracția principală, circulând în zilele de sărbătoare.", "Traseul feroviar este inundat periodic de apele Dunării, necesitând lucrări de întreținere speciale.", "La stația Pörböly funcționează un centru de vizitare cu expoziții interactive despre ecosistemul luncii.", "În timpul toamnei se organizează 'trenurile boncănitului' pentru a asculta cerbii.", "Calea ferată a fost construită inițial pentru transportul lemnului în anul 1915."],
      en: []
    },
  },
  {
    id: "industry-paksi-atomeromu-extra",
    type: "industry",
    parent: "HU-TO",
    coords: [18.855, 46.573],
    name: { de: "Kernkraftwerk Paks", hu: "Paksi Atomerőmű", ro: "Centrala Nucleară Paks", en: "Paks Nuclear Power Plant" },
    description: {
      de: "Das einzige Kernkraftwerk Ungarns, das rund die Hälfte des Strombedarfs deckt.",
      hu: "Magyarország egyetlen atomerőműve, amely az ország áramigényének felét biztosítja.",
      ro: "Singura centrală nucleară din Ungaria, care asigură jumătate din necesarul de curent.",
      en: "Hungary's only nuclear power plant, providing half of the country's electricity."
    },
    facts: {
      de: ["Vier Reaktorblöcke.", "Besucherzentrum."],
      hu: ["Négy reaktorblokk.", "Látogatóközponttal rendelkezik."],
      ro: ["Patru blocuri de reactoare.", "Deține un centru pentru vizitatori."],
      en: ["Four reactor units.", "Includes a visitor center."]
    },
    descriptionAdvanced: {
      de: "Das Kernkraftwerk Paks ist der wichtigste Stromerzeuger Ungarns und ein technisches Monument von nationaler Bedeutung. Es deckt etwa die Hälfte des gesamten ungarischen Strombedarfs und spielt damit eine entscheidende Rolle für die Energiesicherheit und CO2-arme Energieerzeugung des Landes. Das Kraftwerk am Ufer der Donau besteht aus vier Reaktorblöcken sowjetischer Bauart (WWER-440), die kontinuierlich modernisiert wurden und höchste Sicherheitsstandards erfüllen. Für Interessierte bietet das Werk ein modernes Besucherzentrum und ein Museum für Atomenergie, das die Funktionsweise der Kernkraft und die Geschichte des Standortes anschaulich erklärt. Paks ist nicht nur ein Industriestandort, sondern auch ein Motor für die regionale Entwicklung, der tausende hochqualifizierte Arbeitsplätze sichert. Aktuell wird der Standort durch den Bau zwei neuer, leistungsstärkerer Blöcke (Paks II) erweitert, was das größte Investitionsprojekt in der modernen Geschichte Ungarns darstellt.",
      hu: "A Paksi Atomerőmű Magyarország legfontosabb villamosenergia-termelő egysége és a nemzeti energiabiztonság alapköve. A Duna partján fekvő létesítmény négy blokkja biztosítja a hazai áramfogyasztás mintegy felét, szén-dioxid-mentes módon. Az 1980-as évek óta üzemelő gyár a legmagasabb biztonsági előírások mellett működik, folyamatosan modernizált technológiával. Paks nemcsak ipari óriás, hanem tudományos és oktatási központ is, ahol a látogatóközpont interaktív módon mutatja be az atomenergia békés célú felhasználását. Az erőmű meghatározó szerepet játszik Tolna vármegye gazdaságában, több ezer szakembernek adva munkát és biztosítva az ország energiafüggetlenségét. Földrajz K8 – Energiatermelés és technológiai óriások.",
      ro: "Centrala Nuclearo-Electrică de la Paks este cea mai importantă unitate de producere a energiei din Ungaria, asigurând aproximativ jumătate din consumul intern de electricitate. Situată pe malul Dunării, centrala utilizează patru reactoare de tip VVER-440, care folosesc apa fluviului pentru răcire. Paks este un pilon al securității energetice naționale, oferind energie la prețuri stabile și cu emisii de CO2 extrem de reduse. Managementul centralei pune un accent absolut pe siguranță, fiind una dintre cele mai bine cotate unități de acest tip la nivel mondial. Proiectul de extindere (Paks II) vizează construirea a două reactoare noi pentru a menține capacitatea energetică a țării în viitor. Este un centru tehnologic și științific de o importanță capitală. Geografie K8 – Energia nucleară și independența energetică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der erste Block des Kraftwerks nahm im Jahr 1982 den kommerziellen Betrieb auf.",
        "Die vier vorhandenen Blöcke produzieren jährlich über 15.000 Gigawattstunden Strom.",
        "Das Kraftwerk nutzt das Wasser der Donau zur Kühlung der Kondensatoren.",
        "Das Kernkraftwerk Paks hat eine der weltweit höchsten Auslastungsraten und gilt als sehr zuverlässig.",
        "Im Museum für Atomenergie kann man originale Bauteile und Ausrüstungen aus der Bauzeit besichtigen.",
        "Die Sicherheitssysteme wurden nach internationalen Standards (IAEO) mehrfach erfolgreich geprüft.",
        "Rund um das Kraftwerk wird die Umwelt kontinuierlich durch ein dichtes Messnetz überwacht.",
        "Paks ist die einzige Anlage in Ungarn, die Kernenergie zur friedlichen Stromerzeugung nutzt."
      ],
      hu: ["Az erőmű első blokkját 1982-ben helyezték üzembe, a negyediket 1987-ben.", "Évente több mint 15 000 gigawattóra villamos energiát termelnek a paksi blokkok.", "A reaktorok hűtéséhez a Duna vizét használják fel, melyet szigorúan ellenőrzött módon engednek vissza.", "Az atomerőmű területén működik az ország egyetlen Atomenergetikai Múzeuma.", "A biztonsági rendszerek többszörös védelemmel vannak ellátva a külső és belső kockázatok ellen.", "Paks városának lakossága és fejlődése szorosan összefonódott az erőmű történetével.", "A létesítmény környezetében folyamatos sugárvédelmi ellenőrző hálózat működik.", "Az üzem élettartam-hosszabbítása biztosítja a blokkok működését a 2030-as évekig."],
      ro: ["Cele patru blocuri ale centralei au fost puse în funcțiune între anii 1982 și 1987.", "Paks asigură peste 50% din producția totală de energie electrică a Ungariei.", "Reactoarele de la Paks au o durată de viață prelungită până în anii 2030-2040.", "Dunărea furnizează 100 de metri cubi de apă pe secundă pentru răcirea reactoarelor.", "În cadrul centralei funcționează un centru de pregătire cu simulatoare de mărime naturală.", "Muzeul Energiei Nucleare din Paks prezintă istoria și fizica din spatele producției de energie."],
      en: []
    },
    },
  {
    id: "agriculture-szekszardi-bor-extra",
    type: "agriculture",
    parent: "HU-TO",
    coords: [18.702, 46.348],
    name: { de: "Weinregion Szekszárd", hu: "Szekszárdi borvidék", ro: "Regiunea viticolă Szekszárd", en: "Szekszárd Wine Region" },
    description: {
      de: "Eine traditionsreiche Rotweinregion, bekannt für den Szekszárdi Bikavér.",
      hu: "Nagy múltú vörösboros vidék, híres a szekszárdi bikavérről.",
      ro: "Regiune viticolă cu tradiție pentru vinuri roșii, celebră pentru Bikavér.",
      en: "A historic red wine region, famous for the Szekszárd Bikavér (Bull's Blood)."
    },
    facts: {
      de: ["Lössböden.", "Hunderte von Weinkellern."],
      hu: ["Löszös talaj.", "Több száz borospince."],
      ro: ["Sol loessos.", "Sute de pivnițe de vin."],
      en: ["Loess soil.", "Home to hundreds of wine cellars."]
    },
    descriptionAdvanced: {
      de: "Die Weinregion Szekszárd ist eine der traditionsreichsten Rotweinregionen Ungarns und berühmt für ihren charaktervollen 'Bikavér' (Stierblut). Die hügelige Landschaft mit ihren fruchtbaren Lössböden bietet ideale Bedingungen für Rebsorten wie Kékfrankos und Kadarka. Szekszárd ist bekannt für seine samtigen, eleganten Rotweine, die durch das milde Klima und die hohe Sonnenscheindauer geprägt sind. Die Weinkultur hat hier tiefe Wurzeln, die bis in die Römerzeit zurückreichen. Heute verbinden die Winzer moderne Kellertechnik mit jahrhundertealter Erfahrung. Besucher können hunderte von Weinkellern erkunden, die oft direkt in die Lösshänge gegraben wurden. Die Gastfreundschaft der Szekszárder Winzer und die malerische Hügellandschaft machen die Region zu einem erstklassigen Ziel für Weinfreunde und Gourmets, die das authentische ungarische Lebensgefühl suchen.",
      hu: "A szekszárdi borvidék Magyarország egyik legősibb és legkarakteresebb vörösboros területe, a Szekszárdi Bikavér hazája. A löszös dombok és a meleg mikroklíma ideális feltételeket biztosítanak a Kadarka és a Kékfrankos szőlőfajtáknak. Szekszárd borai híresek bársonyos eleganciájukról, fűszerességükről és mély tüzükről. A város völgyeiben több száz patinás borospince rejtőzik, melyekben generációk óta száll apáról fiúra a bortermelés tudománya. A szekszárdi borászok közössége a hagyománytisztelet és a modern innováció kiváló ötvözetét képviseli, boraik pedig rendszeresen nyernek nagydíjakat a legrangosabb nemzetközi versenyeken. A vidék hangulata, a lankás táj és a pincék nyugalma az igazi magyar borkultúra élményét nyújtja. Földrajz K8 – Borászati tájak és mezőgazdasági hagyományok.",
      ro: "Vinul de Szekszárd reprezintă una dintre cele mai vechi și valoroase mărci de vin roșu din Ungaria, regiunea fiind situată pe dealurile de loess din sudul Transdanubiei. Climatul sub-mediteranean și compoziția unică a solului permit producerea unor vinuri corpolente, catifelate și cu un buchet aromatic complex. Szekszárd este, alături de Eger, singura regiune autorizată să producă celebrul 'Bikavér' (Sânge de Taur), un cupaj roșu de excepție. Cultura vinului este adânc înrădăcinată în viața orașului, cu numeroase pivnițe istorice săpate direct în dealurile de loess. Festivalurile de vin și tradiția ospitalității fac din Szekszárd un centru mondial al turismului oenologic, atrăgând cunoscători de pretutindeni. Geografia K8 – Regiuni viticole și cultura vinului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Szekszárd ist eine der ältesten Weinregionen Ungarns mit Wurzeln in der Römerzeit.",
        "Der 'Szekszárdi Bikavér' ist eine geschützte Cuvée, die mindestens aus vier Rebsorten bestehen muss.",
        "Die Region ist besonders für ihre Lössböden bekannt, die den Weinen ihre samtige Struktur verleihen.",
        "Kadarka ist die traditionelle Rebsorte der Region, die hier besonders würzige Weine hervorbringt.",
        "In Szekszárd gibt es hunderte von kleinen, oft familiengeführten Weinkellern in den Tälern.",
        "Das jährliche Weinlesefest im September ist eines der größten kulturellen Ereignisse der Stadt.",
        "Die Region hat eine der höchsten Sonnenscheindauern in ganz Ungarn.",
        "Szekszárder Weine gewannen bereits im 19. Jahrhundert internationale Preise in Paris und Wien."
      ],
      hu: ["Szekszárd a bikavér elnevezés első írásos használója, megelőzve Egert is.", "A Szekszárdi Bikavér 2017 óta kiemelt nemzeti érték, Hungarikum várományos.", "A vidék talaja lösz, amely a boroknak különleges, selymes szerkezetet ad.", "Itt tartják minden év szeptemberében az ország egyik legszebb szüreti fesztiválját.", "A Kadarka fajta Szekszárdon találta meg második hazáját, fűszeres, könnyed bort adva.", "A borvidékhez 15 település tartozik, központja a Tolna vármegyei székhely.", "Híres borász dinasztiák sora dolgozik a völgyekben, világszínvonalú technológiával.", "A „szekszárdi palack” egyedi formája segít felismerni a régió prémium borait a boltokban."],
      ro: ["Prima mențiune despre viticultura la Szekszárd datează din perioada romană.", "Soiul 'Kadarka' este considerat sufletul regiunii viticole Szekszárd.", "Szekszárd a fost prima regiune din Ungaria care a protejat oficial numele 'Bikavér'.", "Pivnițele din loess mențin o temperatură constantă de 12-14 grade pe tot parcursul anului.", "Marele compozitor Franz Liszt era un mare admirator și consumator al vinurilor de aici.", "Regiunea deține peste 2000 de hectare de podgorii cultivate cu soiuri roșii."],
      en: []
    },
  },

  // HU-VA: Vas (2G, 1LN, 2W)
  {
    id: "historical-jurisics-var-extra",
    type: "historical",
    parent: "HU-VA",
    coords: [16.541, 47.390],
    name: { de: "Jurisics-Burg Kőszeg", hu: "Jurisics-vár", ro: "Cetatea Jurisics", en: "Jurisics Castle" },
    description: {
      de: "Symbol des Widerstands gegen die Osmanen unter der Führung von Miklós Jurisics.",
      hu: "A török elleni hősies védekezés szimbóluma, Jurisics Miklós vezetésével.",
      ro: "Simbolul apărării eroice împotriva otomanilor, sub comanda lui Miklós Jurisics.",
      en: "Symbol of the heroic defense against the Ottomans, led by Miklós Jurisics."
    },
    facts: {
      de: ["Mittelalterliche Mauern.", "Glockengeläut um 11 Uhr."],
      hu: ["Középkori falak.", "11 órakor is szólnak a harangok."],
      ro: ["Ziduri medievale.", "Clopotele bat și la ora 11."],
      en: ["Medieval walls.", "Bells ring at 11 AM to commemorate the defense."]
    },
    descriptionAdvanced: {
      de: "Die Jurisics-Burg in Kőszeg ist ein unvergängliches Symbol für Heldenmut und nationalen Widerstand. Weltberühmt wurde sie im Jahr 1532, als eine kleine Gruppe ungarischer Verteidiger unter der Führung von Miklós Jurisics die Stadt erfolgreich gegen das gewaltige osmanische Heer von Sultan Süleyman dem Prächtigen verteidigte. Dieser Sieg verhinderte den weiteren Vormarsch der Türken auf Wien. Die Burg selbst vereint gotische und Renaissance-Elemente und ist heute das kulturelle Herz der Stadt Kőszeg. In den Mauern befindet sich ein Museum, das die Geschichte der Belagerung und der Stadt dokumentiert. Eine Besonderheit ist das Glockengeläut um 11 Uhr, das täglich an den Abzug der Türken erinnert. Die malerische Lage am Fuße des Günser Gebirges und die gut erhaltene Altstadt machen die Burg zu einem bedeutenden historischen Denkmal.",
      hu: "A kőszegi Jurisics-vár a hősies helytállás és a magyar szabadságszeretet egyik legfontosabb jelképe. 1532-ben itt állította meg a Jurisics Miklós vezette maroknyi védősereg Szulejmán szultán hatalmas oszmán hadát, ezzel megakadályozva a további előrenyomulást Bécs felé. A vár építészete a gótika és a reneszánsz stílusjegyeit hordozza, méltóságteljesen magasodva Kőszeg ékszerdobozszerű óvárosa mellett. A várban ma múzeum működik, amely részletesen bemutatja az ostrom történetét, a középkori fegyvereket és a város múltját. Egyedülálló hagyomány a mindennap 11 órakor megszólaló harangszó, amely a török elvonulására emlékezteti a látogatókat és a helyieket. Történelem K6 – A török elleni harcok és Kőszeg ostroma.",
      ro: "Cetatea Jurisics din Kőszeg este unul dintre cele mai importante monumente ale eroismului maghiar, devenind celebră la nivel european în 1532. Sub comanda căpitanului Miklós Jurisics, o mică garnizoană a reușit să oprească timp de 25 de zile înaintarea marii armate otomane a lui Soliman Magnificul spre Viena. În onoarea acestei victorii incredibile, clopotele tuturor bisericilor din Kőszeg bat și astăzi la ora 11:00 dimineața. Arhitectura cetății îmbină elemente gotice, renascentiste și baroce, fiind înconjurată de un șanț de apă pitoresc. Muzeul cetății prezintă detalii fascinante despre asediu și despre istoria orașului liber regal Kőszeg. Este un loc unde mândria națională și arhitectura istorică creează o atmosferă solemnă. Istorie K7 – Bătălii decisive și eroi locali.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Belagerung von 1532 dauerte 25 Tage und verzögerte den Angriff des Sultans auf Wien entscheidend.",
        "Miklós Jurisics hielt die Burg mit nur wenigen hundert Soldaten gegen eine Übermacht von über 60.000 Türken.",
        "Zum Gedenken an den Sieg läuten die Kirchenglocken in Kőszeg jeden Tag um 11 Uhr.",
        "Die Burg wurde ursprünglich im 13. Jahrhundert erbaut und später im Renaissance-Stil erweitert.",
        "Im Burgmuseum ist eine Kopie des 'Buchs der Weinreben' zu sehen, das seit 1740 die Entwicklung der Reben dokumentiert.",
        "Der Burghof dient im Sommer als spektakuläre Kulisse für Theateraufführungen und Konzerte.",
        "Die Burg ist von einem gut erhaltenen Festungsgraben und mittelalterlichen Stadtmauern umgeben.",
        "Kőszeg gilt aufgrund seiner Geschichte und Architektur als eine der schönsten Kleinstädte Ungarns."
      ],
      hu: ["A várat Jurisics Miklós mindössze pár száz katonával védte a 60 ezres török túlerő ellen.", "A hősök emlékére Kőszegen minden nap 11 órakor is meghúzzák a harangokat.", "A vár udvarán álló Jurisics-szobor a várkapitány bátorságának állít emléket.", "A 2011-es felújítás után a vár interaktív kiállítóterekkel és modern látogatóközponttal bővült.", "A várban őrzik a híres „Szőlő jövésének könyvét”, amely 1740 óta rögzíti a szőlőhajtásokat.", "A bástyákról pazar kilátás nyílik az Alpokalja vonulataira és a város főterére.", "Nyaranként a várudvar ad otthont a népszerű Kőszegi Várszínház előadásainak.", "A vár körüli vizesárok ma parkosított pihenőövezetként szolgál."],
      ro: ["Asediul din 1532 a implicat o armată turcă de 80.000 de soldați împotriva a 800 de apărători.", "Tradiția bătăii clopotelor la ora 11:00 a început în anul 1777.", "Cetatea a fost inițial construită în secolul al XIII-lea după invazia tătară.", "Sala Cavalerilor are un tavan de lemn original decorat cu blazoane nobiliare.", "Podul de la poarta principală era odinioară un pod mobil peste șanțul cu apă.", "Cetatea a servit ca depozit de muniție și cereale în timpul războaielor napoleoniene."],
      en: []
    },
  },
  {
    id: "historical-nadasdy-var-sarvar-extra",
    type: "historical",
    parent: "HU-VA",
    coords: [16.936, 47.252],
    name: { de: "Nádasdy-Burg Sárvár", hu: "Sárvári Nádasdy-vár", ro: "Cetatea Nádasdy din Sárvár", en: "Nádasdy Castle Sárvár" },
    description: {
      de: "Eine prächtige Renaissance-Burg mit einem berühmten Prunksaal.",
      hu: "Pompás reneszánsz várkastély, híres díszteremmel.",
      ro: "O cetate renascentistă superbă, cu o sală festivă celebră.",
      en: "A magnificent Renaissance castle with a famous ceremonial hall."
    },
    facts: {
      de: ["Barocke Deckenfresken.", "Hussarenausstellung."],
      hu: ["Barokk mennyezeti freskók.", "Huszárkiállítás látható."],
      ro: ["Fresce baroce pe tavan.", "Expoziție de husari."],
      en: ["Baroque ceiling frescoes.", "Houses a hussar exhibition."]
    },
    descriptionAdvanced: {
      de: "Die Nádasdy-Burg in Sárvár ist eines der bedeutendsten Renaissance-Denkmäler Ungarns und ein Zeugnis für die Macht und Kultur des Adels. Das prächtige Wasserschloss mit seinem charakteristischen fünfzackigen Grundriss war über Generationen der Sitz der einflussreichen Familie Nádasdy. Das Juwel der Burg ist der prunkvolle Barocksaal, dessen Deckenfresken die Schlachten gegen die Türken in beeindruckender Detailtreue darstellen. Heute beherbergt die Burg das Ferenc-Nádasdy-Museum, das umfangreiche Sammlungen zur ungarischen Geschichte, zur hussarischen Militärtradition und zum Kunsthandwerk zeigt. Das Schloss ist von einem wunderschönen botanischen Garten (Arboretum) umgeben, der zum Verweilen einlädt. Die gelungene Verbindung von wehrhafter Architektur und höfischem Glanz macht die Nádasdy-Burg zu einem kulturellen Höhepunkt im Westen Ungarns und zu einem Muss für Geschichtsinteressierte.",
      hu: "A sárvári Nádasdy-vár a magyarországi reneszánsz építészet egyik legszebb és legépebben maradt példája. Az ötszögletű, vizesárokkal övezett várkastély évszázadokon át a hatalmas Nádasdy család székhelye volt, akik jelentős kulturális központtá fejlesztették a helyet. Legpompásabb része a barokk díszterem, melynek mennyezeti freskói a török elleni csaták jeleneteit ábrázolják hihetetlen részletességgel. A várban működő Nádasdy Ferenc Múzeum gazdag huszárkiállítással, iparművészeti gyűjteménnyel és a híres sárvári biblia emlékeivel várja a vendégeket. A várkastélyt övező arborétum és a tó partja a nyugalom szigete Vas vármegye szívében. Történelem K6 – Reneszánsz várak és a huszár hagyományok.",
      ro: "Cetatea Nádasdy din Sárvár este una dintre cele mai spectaculoase fortificații renascentiste din Ungaria, fiind inseparabil legată de istoria puternicei familii nobiliare Nádasdy. Clădirea, cu plan pentagonal și bastioane impunătoare, a servit nu doar ca punct defensiv, ci și ca un centru cultural strălucit în secolele XVI-XVII. Sala Mare a cetății este renumită pentru frescele sale monumentale de pe tavan, care ilustrează scene de luptă împotriva turcilor, fiind considerate capodopere ale barocului maghiar. Astăzi, cetatea găzduiește Muzeul Nádasdy Ferenc, unde vizitatorii pot admira colecții de istorie militară, obiecte de lux și faimoasa expoziție de husari. Este un loc unde atmosfera de curte nobiliară se păstrează perfect. Istorie K8 – Renașterea și puterea familiilor nobiliare.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde im 16. Jahrhundert unter Baron Tamás Nádasdy zu einem bedeutenden kulturellen Zentrum ausgebaut.",
        "Der Prunksaal der Burg besitzt eine der prächtigsten barocken Deckenmalereien in ganz Mitteleuropa.",
        "Das hier ansässige Husarenmuseum zeigt die weltweit bedeutendste Sammlung zur Geschichte dieser ungarischen Reitertruppe.",
        "In der Burg wurde im Jahr 1541 das erste in Ungarn gedruckte Buch in ungarischer Sprache herausgegeben.",
        "Die Festung ist von einem breiten Wassergraben umgeben, der heute Teil des Schlossparks ist.",
        "Der Turm der Burg bietet einen wunderbaren Blick über die Stadt Sárvár und das Umland.",
        "König Ludwig III. von Bayern verbrachte seine letzten Lebensjahre in diesem Schloss und starb hier im Jahr 1921.",
        "Jährlich findet auf der Burg ein internationales Husarentreffen statt, das die alte Militärtradition feiert."
      ],
      hu: ["A vár díszterme a magyarországi barokk falfestészet egyik legkiemelkedőbb remekműve.", "Itt működik a világ egyik legjelentősebb huszárkiállítása, bemutatva a lovaskatona-hagyományokat.", "A vár nyomdájában jelent meg 1541-ben az első magyar nyelvű Újszövetség.", "A Nádasdy család tagja volt az a Nádasdy Ferenc, aki a „fekete bégként” vált rettegetté a törökök körében.", "A kastély egykor a bajor királyi család tulajdona is volt, III. Lajos király itt hunyt el 1921-ben.", "A vártoronyból belátható a sárvári gyógyfürdő és a környező erdők vidéke.", "A várudvaron minden évben megrendezik a Nemzetközi Huszártalálkozót.", "A várfalakat övező parkban több száz éves tölgyek és ritka növényfajok láthatók."],
      ro: ["Aici a trăit faimoasa Elisabeta Báthory, soția lui Ferenc Nádasdy.", "În cetatea din Sárvár a fost tipărită prima carte în limba maghiară în 1541 (Noul Testament).", "Frescele din Sala Mare au fost pictate de Hans Rudolf Miller în anul 1653.", "Cetatea este înconjurată de un șanț cu apă, transformat astăzi în parc și lac de canotaj.", "Turnul de la poarta principală oferă o panoramă asupra orașului balnear Sárvár.", "Muzeul husarilor este unic în țară, prezentând istoria acestui corp de cavalerie de elită."],
      en: []
    },
  },
  {
    id: "kid-landmark-jeli-arboretum-extra",
    type: "kid-landmark",
    parent: "HU-VA",
    coords: [17.062, 47.072],
    name: { de: "Jeli Arborétum", hu: "Jeli Arborétum", ro: "Arboretumul Jeli", en: "Jeli Arboretum" },
    description: {
      de: "Ein farbenfroher Garten, berühmt für seine Rhododendronblüte im Mai.",
      hu: "Színpompás kert, amely a májusi rododendron-virágzásról híres.",
      ro: "O grădină colorată, celebră pentru înflorirea rododendronilor în mai.",
      en: "A colorful garden famous for its rhododendron blooming in May."
    },
    facts: {
      de: ["'Garten der Düfte'.", "Exotische Pflanzenarten."],
      hu: ["A 'varázskert' néven is ismert.", "Egzotikus növényfajok."],
      ro: ["Cunoscut ca 'grădina magică'.", "Specii de plante exotice."],
      en: ["Known as the 'Magic Garden'.", "Home to exotic plant species."]
    },
    descriptionAdvanced: {
      de: "Das Jeli Arborétum in Kám ist ein wahres Naturparadies und wird oft als der 'Zaubergarten' Ungarns bezeichnet. Weltberühmt ist der Garten vor allem für seine spektakuläre Rhododendronblüte im Mai, wenn tausende von Sträuchern in den schillerndsten Farben erblühen und einen betörenden Duft verströmen. Gegründet wurde das Arboretum in den 1920er Jahren von Graf István Ambrózy-Migazzi, der den Traum von einem 'immergrünen Garten' verwirklichte. Auf einer Fläche von über 100 Hektar können Besucher Pflanzen aus aller Welt entdecken, die in thematischen Bereichen wie dem 'Japanischen Garten' oder der 'Amerikanischen Sektion' angeordnet sind. Ein hölzerner Baumkronenpfad bietet zudem die Möglichkeit, die Natur aus einer ganz neuen Perspektive zu erleben. Das Jeli Arborétum ist ein ideales Ziel für Familien und Naturfreunde, die Ruhe suchen und in ein Meer aus Farben eintauchen möchten.",
      hu: "A Jeli Arborétum, más néven a „varázskert”, Vas vármegye egyik legcsodálatosabb természeti kincse Kám község határában. Világhírét az Európa-szerte egyedülálló rododendron-gyűjteményének köszönheti, amely májusban borítja virágba a kertet, lenyűgöző szín- és illatorgiát nyújtva. A kertet gróf Ambrózy-Migazzi István alapította az 1920-as években, megvalósítva az „örökké zöldellő kert” álmát. A több mint 100 hektáros parkban a világ különböző tájainak növényvilágát ismerhetjük meg tanösvényeken és egy látványos lombkoronasétányon keresztül. A Jeli Arborétum ideális családi kirándulóhely, ahol a természet csendje és a virágpompás táj varázsa mindenkit magával ragad. Természetismeret K5 – Arborétumaink és egzotikus növényvilág.",
      ro: "Arboretumul Jeli din Kám este cunoscut sub numele de 'Grădina Magică', fiind faimos în întreaga Europă pentru spectaculoasa înflorire a rododendronilor în luna mai. Pentru copii, parcul este o lume de basm plină de culori vibrante și mirosuri amețitoare, unde pot alerga pe poteci umbrite și pot explora 'lumea uriașilor' – o secțiune cu arbori seculari aduși de pe diferite continente. O atracție deosebită este podul din coronamentul arborilor, care oferă o perspectivă de pasăre asupra grădinii, situat la 10 metri înălțime. Parcul a fost creat de contele Ambrózy-Migazzi, care a visat la o grădină mereu verde, transformând o zonă de mărăciniș într-un paradis botanic. Este locul ideal pentru o lecție de biologie în aer liber. Științele Naturii K3 – Plantele lumii și simțurile noastre.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Arboretum wurde 1922 von Graf István Ambrózy-Migazzi gegründet, dem 'Blumengrafen'.",
        "Mit über 300 Rhododendron-Arten besitzt Jeli eine der bedeutendsten Sammlungen dieser Pflanzen in Europa.",
        "Die Hauptblütezeit liegt im Mai, wenn sich der Park in ein riesiges Blütenmeer verwandelt.",
        "Ein besonderes Highlight ist der 130 Meter lange Baumkronenpfad, der in 10 Metern Höhe durch die Wipfel führt.",
        "Das Arboretum beherbergt exotische Bäume aus China, Japan, Amerika und dem Kaukasus.",
        "Der 'Garten der Düfte' ist speziell darauf ausgelegt, die Sinne der Besucher anzusprechen.",
        "Das Gelände umfasst mehrere kleine Teiche und idyllische Bäche, die für ein feuchtes Mikroklima sorgen.",
        "Jeli ist ein geschütztes Naturdenkmal und dient auch forstwirtschaftlichen Forschungszwecken."
      ],
      hu: ["A kert legfőbb látványossága a több mint 300 rododendronfaj tízezernyi példánya.", "A „Hétforrás” vidéke hűvös, párás mikroklímát biztosít az egzotikus növényeknek.", "A lombkoronasétány 130 méter hosszan, 10 méter magasságban vezet a fák között.", "A kertben távoli tájak, például Japán és Észak-Amerika fenyőritkaságai is láthatók.", "Ambrózy grófot a kortársai csak a „virágos grófként” emlegették szenvedélye miatt.", "A virágzási csúcsidőszakban, május második felében tízezrek látogatják meg az arborétumot.", "A területen ritka orchideafélék és védett erdei növények is őshonosak.", "Kényelmes piknikezőhelyek és erdei játszótér várja a legkisebb természetjárókat."],
      ro: ["Arboretumul găzduiește peste 300 de varietăți de rododendroni în mii de exemplare.", "Suprafața totală a parcului depășește 100 de hectare de teren protejat.", "Podul din coronament are o lungime de 130 de metri și este construit din zada.", "În 'Sectiunea Japoneză' pot fi admirați bambuși și cireși ornamentali autentici.", "Grădina a fost înființată în anul 1922 pe domeniul de vânătoare al contelui.", "Arboretumul deține o colecție impresionantă de pini de munte și molizi rari."],
      en: []
    },
  },
  {
    id: "industry-opel-szentgotthard-extra",
    type: "industry",
    parent: "HU-VA",
    coords: [16.273, 46.953],
    name: { de: "Opel Werk Szentgotthárd", hu: "Opel Gyár Szentgotthárd", ro: "Fabrica Opel Szentgotthárd", en: "Opel Plant Szentgotthard" },
    description: {
      de: "Ein bedeutendes Motorenwerk, das für verschiedene Marken der Stellantis-Gruppe produziert.",
      hu: "Jelentős motorgyár, amely a Stellantis-csoport számos márkájának termel.",
      ro: "O fabrică importantă de motoare care produce pentru grupul Stellantis.",
      en: "A major engine plant producing for various brands of the Stellantis Group."
    },
    facts: {
      de: ["Seit 1990er Jahren.", "Hochpräzise Fertigung."],
      hu: ["Az 1990-es évek óta működik.", "Nagy pontosságú gyártás."],
      ro: ["Activă din anii 1990.", "Producție de înaltă precizie."],
      en: ["Active since the 1990s.", "High-precision manufacturing."]
    },
    descriptionAdvanced: {
      de: "Das Opel-Werk in Szentgotthárd ist ein Eckpfeiler der ungarischen Automobilindustrie und einer der modernsten Motorenproduzenten in Europa. Gegründet in den frühen 1990er Jahren, war es das erste große westliche Automobilprojekt in Ungarn nach der politischen Wende. Heute gehört das Werk zur Stellantis-Gruppe und produziert hochmoderne, effiziente Verbrennungsmotoren für verschiedene Marken wie Opel, Peugeot und Citroën. Die Fabrik zeichnet sich durch eine enorme Flexibilität aus; auf denselben Linien können verschiedene Motorentypen mit höchster Präzision gefertigt werden. Szentgotthárd ist für seine hohe Qualität und seine Innovationskraft bekannt und hat die Region wirtschaftlich nachhaltig transformiert. Das Werk investiert kontinuierlich in umweltfreundlichere Technologien und spielt eine Schlüsselrolle in der globalen Lieferkette des Konzerns. Als einer der größten Arbeitgeber im Westen Ungarns sichert es tausende Arbeitsplätze und fördert die technische Ausbildung in der Region.",
      hu: "A szentgotthárdi Opel gyár, hivatalosan Opel Szentgotthárd Kft., a magyar autóipar egyik úttörője és a Stellantis-csoport egyik legmodernebb motorgyára. 1991-es alapítása mérföldkő volt a rendszerváltás utáni gazdaságban, hiszen itt indult el az első nyugati személyautók gyártása hazánkban. Ma az üzem a világpiacra termel nagyteljesítményű, hatékony benzin- és dízelmotorokat, melyek számos világmárka modelljeibe kerülnek beépítésre. A gyár híres a precíziós technológiájáról és rugalmas gyártási folyamatairól. Mint Vas vármegye egyik legnagyobb munkaadója, meghatározó szerepet tölt be a régió fejlődésében és a műszaki szakképzés támogatásában, képviselve a magyar mérnöki szaktudás nemzetközi színvonalát. Földrajz K8 – Autóipar és gazdasági fejlődés.",
      ro: "Fabrica Opel din Szentgotthárd este un punct de referință pentru industria auto maghiară, fiind prima fabrică modernă de autoturisme și motoare deschisă în Ungaria după 1990. Situată la granița cu Austria, unitatea a pus bazele renașterii industriale a țării, producând inițial modelul Opel Astra. Astăzi, fabrica face parte din grupul Stellantis și este specializată în producția de motoare pe benzină ultra-eficiente pentru diverse mărci ale grupului (Peugeot, Citroën, Opel). Procesul de producție este caracterizat prin flexibilitate maximă și digitalizare, liniile de asamblare fiind capabile să schimbe tipul de motor produs în timp record. Fabrica este principalul motor economic al regiunii și un centru de formare tehnică de înalt nivel. Geografie K8 – Industria auto și investițiile străine.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Werk wurde 1990 gegründet und war das erste Pkw-Produktionswerk in Ungarn seit Jahrzehnten.",
        "Im Jahr 1992 lief hier der erste Opel Astra vom Band, was den Beginn einer neuen Industrieära markierte.",
        "Heute konzentriert sich der Standort ausschließlich auf die Produktion von Benzin- und Dieselmotoren.",
        "Die Fabrik liefert Motoren an Fahrzeugwerke in ganz Europa und darüber hinaus.",
        "In Szentgotthárd wurde 2020 die Produktion der preisgekrönten PureTech-Dreizylindermotoren aufgenommen.",
        "Das Werk nutzt fortschrittliche Robotertechnik und digitale Überwachungssysteme zur Qualitätssicherung.",
        "Das Unternehmen engagiert sich stark in der dualen Berufsausbildung nach deutschem Vorbild.",
        "Szentgotthárd ist aufgrund seiner Lage nahe der österreichischen Grenze ein logistisch idealer Standort."
      ],
      hu: ["Itt készült az első magyar gyártású Opel Astra, amely 1992-ben gördült le a szalagról.", "A gyár jelenleg a Stellantis-csoport egyik legfontosabb motorgyártó bázisa Európában.", "Az üzemben évente több százezer motor készül elképesztő sebességgel és pontossággal.", "Szentgotthárd az egyik legrégebbi és legsikeresebb külföldi tőkebefektetés az országban.", "A gyár gyártósorai alkalmasak a legújabb generációs, alacsony károsanyag-kibocsátású motorok készítésére.", "A vállalat kiemelt figyelmet fordít az energiahatékonyságra és a hulladékmentes termelésre.", "Saját tanműhelye az ország egyik legjobb duális képzési helyszíne a gépészek számára.", "Az Opel gyár megjelenése alapjaiban rajzolta át Szentgotthárd és környékének gazdasági térképét."],
      ro: ["Primul Opel Astra maghiar a ieșit de pe banda de montaj în martie 1992.", "Fabrica a produs peste 10 milioane de motoare de la înființare până în prezent.", "Unitatea de la Szentgotthárd este una dintre cele mai flexibile fabrici de motoare din grupul Stellantis.", "Investiția inițială a fost un simbol al deschiderii economice a Ungariei spre Occident.", "Peste 1.000 de specialiști lucrează în prezent în cadrul unității de producție.", "Fabrica utilizează sisteme avansate de recuperare a energiei termice din procesele industriale."],
      en: []
    },
  },
  {
    id: "industry-kormendi-gyogyszergyar-extra",
    type: "industry",
    parent: "HU-VA",
    coords: [16.602, 47.009],
    name: { de: "Pharmwerk Körmend", hu: "Egis Körmend", ro: "Fabrica Egis Körmend", en: "Egis Körmend Pharmaceutical" },
    description: {
      de: "Ein wichtiger Standort der ungarischen Pharmaindustrie, spezialisiert auf Medikamentenproduktion.",
      hu: "A magyar gyógyszeripar egyik fontos bázisa, gyógyszergyártásra szakosodva.",
      ro: "O bază importantă a industriei farmaceutice maghiare, specializată în medicamente.",
      en: "An important base of the Hungarian pharmaceutical industry, specializing in drug production."
    },
    facts: {
      de: ["Modernes Labor.", "Wichtiger regionaler Arbeitgeber."],
      hu: ["Modern laboratórium.", "Fontos regionális munkáltató."],
      ro: ["Laborator modern.", "Angajator regional important."],
      en: ["Modern laboratory.", "Important regional employer."]
    },
    descriptionAdvanced: {
      de: "Das Pharmwerk in Körmend ist ein bedeutender Standort der ungarischen Egis-Gruppe und eine wichtige Säule der nationalen Gesundheitsindustrie. Die Fabrik ist auf die Herstellung moderner pharmazeutischer Produkte spezialisiert, die in viele Länder weltweit exportiert werden. Körmend beherbergt hochmoderne Produktionsanlagen und Forschungslabore, die höchsten internationalen Qualitätsstandards (GMP) entsprechen. Der Fokus liegt auf der Entwicklung und Fertigung von Medikamenten zur Behandlung von Herz-Kreislauf-Erkrankungen und Erkrankungen des zentralen Nervensystems. Als einer der größten Arbeitgeber im Komitat Vas prägt das Unternehmen die wirtschaftliche Dynamik der Region und bietet hochqualifizierte Arbeitsplätze für Chemiker, Pharmazeuten und Ingenieure. Die kontinuierlichen Investitionen in Innovation und Umweltschutz machen das Werk zu einem Vorreiter in der ungarischen Pharmabranche. Die lange Tradition und das moderne Know-how sichern Körmend einen festen Platz in der europäischen Medikamentenversorgung.",
      hu: "A körmendi gyógyszergyár, az Egis Gyógyszergyár Zrt. vidéki bázisa, a magyar vegyipar egyik legjelentősebb pillére a Dunántúlon. Az üzem modern gyógyszerkészítmények előállítására szakosodott, melyeket a világ minden tájára exportálnak. Körmenden nemcsak gyártás, hanem komoly kutatás-fejlesztési munka is folyik, biztosítva a hazai egészségipar versenyképességét. A gyár a legmagasabb minőségbiztosítási rendszerek (GMP) szerint működik, több száz embernek adva biztos megélhetést. Vas vármegye gazdaságában betöltött szerepe felbecsülhetetlen, hiszen a tudásalapú ipar képviselőjeként támogatja a helyi innovációt és a fenntartható ipari fejlődést. Földrajz K8 – Vegyipar és gyógyszergyártás Magyarországon.",
      ro: "Fabrica de Medicamente din Körmend, parte a grupului Egis, este unul dintre cele mai importante centre ale industriei farmaceutice maghiare, renumit pentru cercetare și inovație. Situată în vestul țării, unitatea s-a specializat în producția de forme farmaceutice complexe, precum tablete și capsule, care sunt exportate în zeci de țări. Industria medicamentelor este o ramură tradițională de succes a economiei maghiare, iar fabrica din Körmend joacă un rol central în acest ecosistem prin standardele sale înalte de calitate și siguranță. Colaborarea strânsă cu universitățile medicale și investițiile masive în tehnologie fac din această unitate un angajator de elită în regiune, contribuind semnificativ la sănătatea publică și la progresul științific. Geografie K8 – Industria chimică și farmaceutică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Egis-Gruppe gehört zu den führenden Pharmaunternehmen in Mittel- und Osteuropa.",
        "Das Werk in Körmend wurde in den 1960er Jahren gegründet und seither massiv erweitert.",
        "In Körmend werden jährlich Milliarden von Tabletten und Kapseln für den Weltmarkt produziert.",
        "Das Werk verfügt über eine eigene Forschungs- und Entwicklungsabteilung für neue Wirkstoffe.",
        "Egis ist bekannt für seine strengen Qualitätskontrollen und Zertifizierungen nach globalen Standards.",
        "Das Unternehmen betreibt in Körmend eine moderne Logistikzentrale für den internationalen Versand.",
        "Ein Großteil der Produktion ist für den Export bestimmt, unter anderem in die EU und nach Übersee.",
        "Egis ist ein wichtiger Partner der ungarischen Universitäten im Bereich der pharmazeutischen Forschung."
      ],
      hu: ["Az Egis-csoport a kelet-közép-európai régió egyik vezető gyógyszergyártó vállalata.", "A körmendi üzemben évente több milliárd tablettát és kapszulát csomagolnak a világpiacra.", "A gyár saját laboratóriumaiban folyik az új hatóanyagok stabilitási vizsgálata.", "Az üzem területén modern logisztikai központ épült a nemzetközi áruszállítás kiszolgálására.", "A vállalat aktívan támogatja Körmend városának kulturális és sportéletét.", "Kiemelt figyelmet fordítanak a környezetvédelemre és a biztonságos vegyszerkezelésre.", "A gyógyszergyár a környék diplomás szakembereinek egyik legvonzóbb munkahelye.", "A termékek között szív- és érrendszeri, valamint idegrendszeri betegségek kezelésére szolgáló gyógyszerek is találhatók."],
      ro: ["Egis este unul dintre liderii pieței farmaceutice din Europa Centrală și de Est.", "Fabrica din Körmend a fost inaugurată în anii 1960 pentru extinderea capacității de producție.", "Peste 80% din producția fabricii este destinată exportului pe piețele internaționale.", "Unitatea deține certificări europene și americane stricte pentru bunele practici de fabricație (GMP).", "În cadrul fabricii funcționează un laborator modern de control al calității pentru fiecare lot de medicamente.", "Körmend este un hub logistic important pentru distribuția medicamentelor spre vestul Europei."],
      en: []
    },
  },

  // HU-VE: Veszprém (2G, 1LN, 2W)
  {
    id: "historical-sumegi-var-extra",
    type: "historical",
    parent: "HU-VE",
    coords: [17.282, 46.982],
    name: { de: "Burg Sümeg", hu: "Sümegi vár", ro: "Cetatea Sümeg", en: "Sumeg Castle" },
    description: {
      de: "Eine der am besten erhaltenen Höhenburgen Ungarns mit regelmäßigen Ritterspielen.",
      hu: "Magyarország egyik legépszerűbb hegyi vára, rendszeres lovagi játékokkal.",
      ro: "Una dintre cele mai bine conservate cetăți montane, cu turniruri cavalerești.",
      en: "One of Hungary's best-preserved hilltop castles with regular knightly tournaments."
    },
    facts: {
      de: ["Auf einem Kalksteinfelsen.", "Mittelalterliches Erlebnismuseum."],
      hu: ["Mészkőszirten magasodik.", "Középkori élménymúzeum."],
      ro: ["Situată pe o stâncă de calcar.", "Muzeu interactiv medieval."],
      en: ["Perched on a limestone cliff.", "Features a medieval experience museum."]
    },
    descriptionAdvanced: {
      de: "Die Burg Sümeg thront majestätisch auf einem steilen Kalksteinfelsen über der gleichnamigen Stadt und ist eine der am besten erhaltenen mittelalterlichen Festungen Ungarns. Ihre strategische Lage bot über Jahrhunderte Schutz vor feindlichen Einfällen, insbesondere während der Türkenkriege, als sie nie vollständig erobert wurde. Heute ist die Burg ein lebendiges Geschichtsmuseum, das Besucher mit einer Vielzahl von Attraktionen in den Bann zieht. Besonders beliebt sind die regelmäßigen Ritterspiele im mittelalterlichen Turnierhof, bei denen Reiter und Kämpfer in historischen Kostümen ihr Können zeigen. Besucher können die Burgkapelle, die Waffenkammer, die Folterkammer und die Schmiede erkunden. Der Aufstieg zur Burg wird mit einem spektakulären Rundblick über das Balaton-Oberland belohnt. Die Kombination aus wehrhafter Architektur und dem authentischen mittelalterlichen Treiben macht Sümeg zu einem der attraktivsten Ausflugsziele für Familien und Geschichtsinteressierte in Ungarn.",
      hu: "A sümegi vár Magyarország egyik legszebben megőrzött és legnépszerűbb középkori erődítménye, amely fenségesen trónol a Tapolcai-medence egyik meredek mészkőszirtjén. A 13. századi alapítású vár évszázadokon át fontos védelmi szerepet töltve be, és a török időkben soha nem került tartósan oszmán kézre. Ma az ország egyik legaktívabb élményvára, ahol a látogatókat rendszeres lovagi tornák, íjászbemutatók és középkori lakomák repítik vissza a múltba. A várfalak közül pazar körpanoráma nyílik a Balaton-felvidékre. Bejárható a belső várudvar, a várkapitányi lakosztály és a kínzókamra is, így a történelem minden szeglete élővé válik a vendégek számára. Történelem K6 – Élet a végvárakban és lovagi tornák.",
      ro: "Cetatea din Sümeg este una dintre cele mai spectaculoase și bine conservate fortificații montane din Ungaria, tronând maiestuos pe o stâncă de calcar deasupra orașului. Construită din ordinul regelui Béla IV după invazia tătară, cetatea a servit timp de secole ca un punct strategic de apărare de necucerit. Este faimoasă pentru programul său istoric viu, găzduind în mod regulat turniruri cavalerești, cine medievale și spectacole de echitație care atrag mii de turiști. Zidurile groase, bastioanele și muzeul de arme din interior oferă o imagine fidelă a vieții dintr-o cetate de graniță. Panorama de pe zidurile cetății asupra regiunii Balaton-felvidék este absolut uluitoare, făcând din Sümeg o destinație obligatorie pentru iubitorii de istorie. Istorie K6 – Cetăți de apărare și viața medievală.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde im 13. Jahrhundert nach dem Mongoleneinfall auf Befehl von König Béla IV. errichtet.",
        "Sümeg war während der türkischen Besatzung ein wichtiger Zufluchtsort für die Bischöfe von Veszprém.",
        "Die Festung hielt im 16. und 17. Jahrhundert zahlreichen Belagerungen stand und galt als uneinnehmbar.",
        "Die Burg wurde im Jahr 1713 auf Befehl der Habsburger in Brand gesetzt, um sie unbrauchbar zu machen.",
        "Seit den 1990er Jahren wurde die Burg durch private Initiative umfassend restauriert und touristisch erschlossen.",
        "Das Burgmuseum zeigt eine beeindruckende Sammlung von Katapulten und Belagerungsmaschinen.",
        "In der Burgküche können Besucher traditionelle Speisen probieren, die nach mittelalterlichen Rezepten zubereitet werden.",
        "Der markante weiße Kalksteinfelsen, auf dem die Burg steht, ist weithin in der Landschaft sichtbar."
      ],
      hu: ["A várat IV. Béla király parancsára építették a tatárjárás utáni védelmi vonal részeként.", "A sümegi vár a veszprémi püspökök fontos menedékhelye és székhelye volt évszázadokig.", "A 18. század elején a császári csapatok felgyújtották, de falai dacoltak a pusztulással.", "Az 1990-es évek óta tartó folyamatos felújítás az ország egyik legsikeresebb vármentése.", "A várban látható az ország egyik leggazdagabb középkori fegyver- és páncélgyűjteménye.", "A meredek felvezető út és a masszív kapuk hűen tükrözik az erődítmény egykori védhetőségét.", "Minden évben itt rendezik meg a nagyszabású Végvári Napok fesztivált.", "A vár alatti istállókban ritka magyar lófajtákat és hagyományos lovasfelszereléseket láthatunk."],
      ro: ["Cetatea se află la o altitudine de 270 de metri pe un deal izolat.", "În timpul ocupației turcești a regiunii, Sümeg a rămas una dintre puținele cetăți niciodată cucerite.", "Vesperém a fost sediul episcopiei după ce orașul Veszprém a căzut în mâna turcilor.", "Sistemul de apărare al porților este unul dintre cele mai complexe din țară.", "În curtea cetății se află o fântână adâncă de 30 de metri săpată în stâncă.", "Cetatea a fost restaurată masiv începând cu anii 1990 prin eforturi private."],
      en: []
    },
  },
  {
    id: "historical-tihanyi-apatsag-extra",
    type: "historical",
    parent: "HU-VE",
    coords: [17.892, 46.914],
    name: { de: "Abtei Tihany", hu: "Tihanyi Bencés Apátság", ro: "Abatia Tihany", en: "Tihany Benedictine Abbey" },
    description: {
      de: "Ein Wahrzeichen des Balatons, berühmt für seine barocke Kirche und die Gründungsurkunde.",
      hu: "A Balaton jelképe, híres barokk templomáról és az alapítóleveléről.",
      ro: "Simbolul Balatonului, celebră pentru biserica barocă și hrisovul de ctitorire.",
      en: "A landmark of Lake Balaton, famous for its Baroque church and founding charter."
    },
    facts: {
      de: ["Wunderschönes Panorama.", "Königliche Krypta."],
      hu: ["Gyönyörű panoráma.", "Királyi kripta található alatta."],
      ro: ["Panoramă superbă.", "Criptă regală sub biserică."],
      en: ["Beautiful panoramic view.", "Includes a royal crypt."]
    },
    descriptionAdvanced: {
      de: "Die Benediktinerabtei von Tihany ist ein Wahrzeichen Ungarns und thront auf einer Halbinsel mit atemberaubendem Blick über den Plattensee. Gegründet wurde sie im Jahr 1055 von König Andreas I., dessen Grab sich noch heute in der romanischen Krypta befindet – der einzigen original erhaltenen Königsgrablege des Landes. Die heutige barocke Kirche mit ihren zwei markanten Türmen stammt aus dem 18. Jahrhundert und ist berühmt für ihre prachtvollen Holzschnitzereien und Deckengemälde. Die Gründungsurkunde der Abtei ist ein nationales Heiligtum, da sie die ersten schriftlich überlieferten ungarischen Wörter enthält. Tihany ist jedoch nicht nur ein Ort des Gebets, sondern auch ein Zentrum der Kultur und Naturforschung. Die Abtei ist umgeben von Lavendelfeldern und vulkanischen Hügeln, was der gesamten Halbinsel eine fast mediterrane Atmosphäre verleiht. Ein Besuch in Tihany verbindet tiefe Geschichte, spirituelle Ruhe und eine der schönsten Landschaften Mitteleuropas.",
      hu: "A Tihanyi Bencés Apátság a Balaton legismertebb jelképe és a magyar államiság ezeréves tanúja. Az 1055-ben I. András király által alapított monostor a félsziget csúcsán magasodik, fehér tornyaival messziről uralva a tó látképét. A barokk stílusú templom alatti román kori altemplomban található az alapító király sírja, amely az egyetlen eredeti helyén megmaradt uralkodói síremlék Magyarországon. Az apátság alapítólevele a legrégebbi, eredeti formában fennmaradt magyar nyelvemlékünket tartalmazza. Tihany nemcsak hitéleti központ, hanem kulturális ékszerdoboz is, ahol a gyönyörű panoráma és a történelem mélysége különleges spirituális élményt nyújt minden látogatónak. Történelem K6 – Az államalapítás kora és a bencés rend.",
      ro: "Abația Benedictină din Tihany este simbolul spiritual și istoric al Peninsulei Tihany, oferind o panoramă iconică asupra lacului Balaton. Fondată în 1055 de regele Andrei I, abația deține unul dintre cele mai importante documente ale limbii maghiare: Diploma de Fundare, care conține primele cuvinte scrise în limba nativă. Biserica barocă actuală, cu cele două turnuri albe, a fost reconstruită în secolul al XVIII-lea pe locul vechii structuri medievale. Cripta regală, unde se află mormântul regelui Andrei I, este singura locație de înmormântare regală maghiară care a rămas pe locul original din secolul al XI-lea. Abația este renumită și pentru cultura lavandei și pentru celebrul ecou de la Tihany. Istorie K8 – Fundarea statului maghiar și moștenirea benedictină.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Abtei wurde 1055 gegründet; ihre Stiftungsurkunde enthält die ältesten schriftlichen Spuren der ungarischen Sprache.",
        "In der romanischen Krypta ruht König Andreas I., der einzige ungarische König, dessen Grab an seinem ursprünglichen Ort erhalten blieb.",
        "Die barocke Innenausstattung der Kirche wurde fast vollständig von dem Künstler Sebestyén Stulhoff geschaffen.",
        "Tihany ist bekannt für sein Echo, das an der Nordseite der Abtei besonders gut zu hören ist.",
        "Die Abtei verwaltet ausgedehnte Lavendelfelder, deren Ernte für Kosmetik und kulinarische Produkte genutzt wird.",
        "Das Museum der Abtei zeigt Ausstellungen zur Geschichte des Benediktinerordens und zur regionalen Volkskunde.",
        "Die zwei Türme der Abtei sind das bekannteste Fotomotiv am gesamten Balaton.",
        "Jährlich findet am 15. August das große Patroziniumsfest statt, das zahlreiche Pilger anzieht."
      ],
      hu: ["Az apátság alapítólevele 1055-ben íródott, latin nyelvű szövegében magyar szavakkal (pl. „fehérvárra menő hadiút”).", "A barokk templombelsőt Sebestyén Stulhoff asztalosmester faragta több mint tíz éven át.", "A templom két tornya a Balaton leggyakrabban fotózott építészeti motívuma.", "Tihany híres visszhangja a templom északi fala mellett hallható a legjobban.", "Az apátság levenduláskertjeiből származó olajok és teák világhírűek.", "A monostor falai között múzeum mutatja be a bencés rend és a félsziget történetét.", "A barokk templom orgonája rendszeresen megszólal nyári hangversenyek alkalmával.", "Az apátság terasza az ország egyik legszebb kilátópontja, ahonnan a Balaton mindkét medencéje látható."],
      ro: ["Diploma de fundare din 1055 este cel mai vechi document original păstrat în Ungaria.", "Cripta romanică de sub biserică datează din secolul al XI-lea.", "Andrei I este singurul rege maghiar din dinastia Arpadiană înmormântat într-un loc intact.", "Interiorul baroc al bisericii a fost realizat de celebrul sculptor Sebestyén Stulhoff.", "Abația găzduiește anual festivalul lavandei, planta fiind adusă aici în anii 1920.", "Cele două turnuri ale abației au fost finalizate în anul 1754."],
      en: []
    },
  },
  {
    id: "animal-habitat-veszpremi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-VE",
    coords: [17.895, 47.094],
    name: { de: "Zoo Veszprém", hu: "Veszprémi Állatkert", ro: "Grădina Zoologică din Veszprém", en: "Veszprem Zoo" },
    description: {
      de: "Ein malerischer Zoo mit einem großen Dinopark und afrikanischen Savannengehegen.",
      hu: "Festői állatkert óriási dinóparkkal és afrikai szavanna kifutóval.",
      ro: "O grădină zoologică pitorească cu un parc de dinozauri și savană africană.",
      en: "A scenic zoo featuring a large Dino Park and an African savanna enclosure."
    },
    facts: {
      de: ["Ganzjährig geöffnet.", "Modernes Elefantenhaus."],
      hu: ["Egész évben nyitva áll.", "Modern elefántház."],
      ro: ["Deschis tot anul.", "Casă modernă pentru elefanți."],
      en: ["Open all year round.", "Features a modern elephant house."]
    },
    descriptionAdvanced: {
      de: "Der Zoo Veszprém, offiziell Kittenberger-Kálmán-Zoo genannt, ist einer der ältesten und schönsten Zoos in Ungarn. Gelegen in einem malerischen Tal und auf dem angrenzenden Hochplateau am Rande des Bakony-Gebirges, bietet er ein abwechslungsreiches Gelände für Tierbeobachtungen. Der Zoo ist bekannt für seine weitläufigen Gehege und seine modernen Anlagen, wie etwa das beeindruckende Elefantenhaus oder die afrikanische Savanne, wo Nashörner, Giraffen und Zebras gemeinsam leben. Ein besonderes Highlight, vor allem für Familien, ist der große Dinopark, in dem lebensgroße Rekonstruktionen von Urzeitriesen zu bestaunen sind. Der Zoo engagiert sich stark für den Artenschutz und bietet zahlreiche pädagogische Programme an. Die Kombination aus herrlicher Natur, artenreicher Tierwelt und spannenden Themenwelten macht den Zoo Veszprém zu einem der attraktivsten Ausflugsziele in Westungarn. Ein Besuch lässt sich wunderbar mit einem Stadtrundgang durch die historische 'Stadt der Königinnen' verbinden.",
      hu: "A Veszprémi Állatkert, hivatalos nevén Kittenberger Kálmán Növény- és Vadaspark, hazánk egyik legrégebbi és legszebb fekvésű állatkertje. A Bakony lábánál, egy festői völgyben és a felette lévő fennsíkon elterülő park tágas kifutókkal és modern bemutatóhelyekkel várja a látogatókat. Különösen népszerű az afrikai szavanna kifutó, ahol zsiráfok, zebrák és orrszarvúak élnek együtt egy hatalmas területen. A gyermekek nagy kedvence a Dinó Park, ahol életnagyságú őshüllő-rekonstrukciók láthatók. Az állatkert névadója a híres Afrika-kutató, akinek szellemisége ma is áthatja az intézmény természetvédelmi és oktatási munkáját. Veszprém állatkertje ideális családi program, ahol a természet és az állatvilág harmóniája tapasztalható meg. Természetismeret K5 – Vadon élő állatok és a Kittenberger-örökség.",
      ro: "Grădina Zoologică din Veszprém (Kittenberger Kálmán Zoo) este una dintre cele mai vechi și spectaculoase din Ungaria, fiind situată într-o vale pitorească înconjurată de stânci de dolomit. Denumită după celebrul explorator maghiar al Africii, grădina se remarcă prin parcul său vast dedicat faunei africane, unde girafele și rinocerii pot fi observați în spații generoase. Un element de atracție unic este parcul de dinozauri, care oferă o călătorie educațională în preistorie cu replici în mărime naturală. Grădina a trecut prin modernizări masive, devenind un centru de excelență în educația ecologică și conservarea speciilor. Localizarea sa la poalele Munților Bakony oferă un cadru natural deosebit pentru o zi întreagă de explorare. Științele Naturii K5 – Animalele lumii și evoluția speciilor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Zoo wurde 1958 in nur fünf Monaten durch die Hilfe tausender Freiwilliger aus der Stadt erbaut.",
        "Er wurde nach dem berühmten ungarischen Afrikaforscher Kálmán Kittenberger benannt.",
        "Das 'Savannen-Gehege' ist eines der größten seiner Art in Ungarn und beherbergt eine gemischte Tiergemeinschaft.",
        "Im Zoo Veszprém befindet sich der größte Dinopark des Landes mit über 30 lebensgroßen Modellen.",
        "Das moderne Schimpansenhaus bietet den Primaten eine abwechslungsreiche Umgebung nach neuesten Erkenntnissen.",
        "Der Zoo ist ganzjährig geöffnet und bietet auch im Winter spannende Einblicke in das Leben der Tiere.",
        "Von den Aussichtspunkten des Zoos hat man einen herrlichen Blick auf die Burg von Veszprém.",
        "Der Zoo nimmt an zahlreichen europäischen Erhaltungszuchtprogrammen (EEP) für bedrohte Tierarten teil."
      ],
      hu: ["1958-ban épült fel mindössze öt hónap alatt, a helyi lakosság példátlan összefogásával.", "Kittenberger Kálmán híres magyar vadász és Afrika-kutató emlékét őrzi a park.", "Itt található az ország egyik legmodernebb és legtágasabb elefántháza és kifutója.", "A Dinó Parkban több mint 30 életnagyságú dinoszaurusz szobor látható tanösvénnyel.", "A park aktívan részt vesz a veszélyeztetett fajok, például a vörös vari mentésében.", "A tágas csimpánzház és az oktatóközpont nemzetközi színvonalú élményt nyújt.", "A vadaspark területe több mint 15 hektár, árnyas erdei utakkal átszőve.", "Veszprém, a „királynék városa” büszke az állatkertjére, amely a város egyik legfőbb vonzereje."],
      ro: ["Grădina zoologică a fost inaugurată în anul 1958.", "Este situată la doar 15 km de lacul Balaton, fiind o destinație turistică majoră.", "Aici se află unul dintre cele mai mari și moderne complexe pentru elefanți din regiune.", "Parcul de dinozauri cuprinde peste 30 de figurine în mărime naturală ale reptilelor preistorice.", "Grădina este numită în onoarea lui Kittenberger Kálmán, faimos vânător și naturalist.", "Există un punct de observație care oferă o panoramă spectaculoasă asupra cetății Veszprém."],
      en: []
    },
    },
  {
    id: "industry-herendi-porcelan-extra",
    type: "industry",
    parent: "HU-VE",
    coords: [17.752, 47.132],
    name: { de: "Porzellanmanufaktur Herend", hu: "Herendi Porcelánmanufaktúra", ro: "Manufactura de Porțelan Herend", en: "Herend Porcelain Manufactory" },
    description: {
      de: "Die weltberühmte Manufaktur für handgemaltes Luxusporzellan.",
      hu: "A világhírű, kézzel festett luxusporcelánokat készítő manufaktúra.",
      ro: "Manufactură de renume mondial care produce porțelan de lux pictat manual.",
      en: "The world-famous manufactory producing hand-painted luxury porcelain."
    },
    facts: {
      de: ["Hungaricum.", "Besucherzentrum Porcelanium."],
      hu: ["Hungarikum.", "Porcelanium látogatóközpont."],
      ro: ["Produs Hungaricum.", "Centru pentru vizitatori Porcelanium."],
      en: ["A certified Hungaricum.", "Includes the Porcelanium Visitor Center."]
    },
    descriptionAdvanced: {
      de: "Die Porzellanmanufaktur Herend ist eine Weltmarke und ein stolzes Symbol ungarischer Handwerkskunst. Gegründet im Jahr 1826, entwickelte sie sich schnell zu einem Hoflieferanten für europäische Königshäuser und Aristokraten. Herend ist berühmt für sein handgemaltes Luxusporzellan, das durch filigrane Muster, lebendige Farben und erstklassige Qualität besticht. Besonders bekannt sind Dekore wie 'Victoria', das einst die englische Königin begeisterte. Im Besucherzentrum 'Porcelanium' können Gäste den Meistern über die Schulter schauen und in der Minimanufaktur die einzelnen Schritte der Porzellanherstellung miterleben – von der Formgebung bis zur kunstvollen Bemalung. Das angeschlossene Museum zeigt eine beeindruckende Sammlung historischer Stücke. Herend-Porzellan ist heute ein geschätztes 'Hungarikum' und wird in über 60 Länder exportiert. Jedes Stück ist ein Unikat und vereint jahrhundertealte Tradition mit künstlerischer Perfektion, was die Manufaktur zu einem kulturellen Botschafter Ungarns macht.",
      hu: "A Herendi Porcelánmanufaktúra a világ egyik legnagyobb és legismertebb luxusporcelán-készítő műhelye, a magyar kézművesség büszkesége. Az 1826-ban alapított gyár termékei az évszázadok során eljutottak a királyi udvarokba és a legrangosabb világkiállításokra. A herendi porcelán védjegye a kézi festés és az egyedi, finom motívumvilág, mint például a híres „Viktória” vagy a „Rothschild” minta. A látogatók a Porcelanium látogatóközpontban megismerhetik a porcelánkészítés misztikus folyamatát a korongozástól a festésig. Herend porcelánja ma már hivatalos Hungarikum, amely a magyar tradíciót és a művészi tökéletességet képviseli az egész világon, az Egyesült Államoktól Japánig. Művészettörténet K8 – A herendi porcelán és a kézműves hagyományok.",
      ro: "Manufactura de Porțelan din Herend este o legendă a luxului și rafinamentului european, fiind unul dintre cei mai mari și mai vechi producători de porțelan pictat manual din lume. Fondată în 1826, manufactura a devenit furnizor oficial al curților regale, inclusiv pentru regina Victoria a Marii Britanii și împăratul Franz Joseph. Fiecare piesă de la Herend este o operă de artă, realizată cu o precizie incredibilă de către artiști care stăpânesc mii de modele tradiționale. Muzeul Porțelanului și atelierul demonstrativ 'Porcelanium' permit vizitatorilor să vadă cum 'aurul alb' prinde viață sub degetele meșterilor. Este un brand de țară (Hungaricum) care duce faima artei maghiare în cele mai exclusiviste locații de pe glob. Istorie K8 – Meșteșuguri artistice și industria de lux.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Manufaktur wurde 1826 von Vince Stingl gegründet und später von Mór Fischer zum Weltruhm geführt.",
        "Königin Victoria bestellte nach der Londoner Weltausstellung von 1851 ein komplettes Service mit dem heute nach ihr benannten Muster.",
        "Jedes einzelne Stück Herend-Porzellan wird bis heute von Hand geformt und von Meistern handbemalt.",
        "Herend ist die größte Porzellanmanufaktur ihrer Art in Europa und exportiert in alle Kontinente.",
        "Das Porzellanmuseum in Herend bewahrt über 10.000 wertvolle historische Exponate auf.",
        "Die Manufaktur stellt über 16.000 verschiedene Formen und rund 4.000 verschiedene Muster her.",
        "Bekannte Persönlichkeiten wie Kaiser Franz Joseph I. und Lady Diana gehörten zu den Bewunderern von Herend.",
        "Die Manufaktur ist offizielles Mitglied der Association Colbert, einer Vereinigung der exklusivsten Luxusmarken der Welt."
      ],
      hu: ["Herend a világ legnagyobb porcelánmanufaktúrája, ahol ma is minden darab kézzel készül.", "Királynők és államfők kedvelt márkája, a brit királyi családnak is saját gyűjteménye van.", "A manufaktúra több mint 16 000 formát és 4000 különböző mintát tart számon az archívumában.", "A „Viktória” minta nevét az angol királynőről kapta, aki az 1851-es londoni világkiállításon rendelt belőle.", "A múzeumban több mint 10 000 értékes műtárgy mutatja be a gyár történetét.", "A herendi porcelán készítése során az égetés hőmérséklete elérheti az 1400 Celsius-fokot.", "A manufaktúra tagja a rangos francia Colbert-bizottságnak, a luxusmárkák szövetségének.", "Évente több ezer turista érkezik Herendre, hogy tanúja legyen a „fehér arany” születésének."],
      ro: ["Modelul 'Victoria', decorat cu fluturi și flori, a fost creat special pentru regina Angliei în 1851.", " Manufactura din Herend deține o paletă de peste 16.000 de forme și 4.000 de modele pictate.", "Peste 500 de pictori lucrează manual la decorarea porțelanului în cadrul fabricii.", "Porțelanul de Herend este fabricat dintr-un amestec secret de caolin, feldspat și cuarț.", "Herend a câștigat medalia de aur la prima Expoziție Mondială de la Londra.", "În fața manufacturii se află o statuie uriașă de porțelan a leului, simbol al puterii mărcii."],
      en: []
    },
  },
  {
    id: "industry-ajkai-timfoldgyar-extra",
    type: "industry",
    parent: "HU-VE",
    coords: [17.555, 47.100],
    name: { de: "Tonerdefabrik Ajka", hu: "Ajkai Timföldgyár", ro: "Fabrica de Alumină Ajka", en: "Ajka Alumina Plant" },
    description: {
      de: "Ein bedeutendes Werk der ungarischen Aluminiumindustrie.",
      hu: "A magyar alumíniumipar egyik jelentős bázisa.",
      ro: "O bază importantă a industriei de aluminiu din Ungaria.",
      en: "An important base of the Hungarian aluminum industry."
    },
    facts: {
      de: ["Industriezentrum.", "Verarbeitet Bauxit."],
      hu: ["Ipari központ.", "Bauxitot dolgoz fel."],
      ro: ["Centru industrial.", "Procesează bauxită."],
      en: ["Industrial center.", "Processes bauxite."]
    },
    descriptionAdvanced: {
      de: "Die Tonerdefabrik Ajka war über Jahrzehnte hinweg ein zentraler Pfeiler der ungarischen Schwerindustrie und der Aluminiumherstellung. Gegründet, um die reichen Bauxitvorkommen des Bakony-Gebirges zu verwerten, prägte das Werk die wirtschaftliche Entwicklung der gesamten Region. In dem komplexen chemischen Verfahren wird aus dem roten Bauxitgestein weiße Tonerde gewonnen, die als Grundstoff für die Aluminiumschmelze dient. Trotz technologischer Modernisierungen erlangte das Werk im Jahr 2010 traurige Weltberühmtheit durch den Dammbruch eines Rotschlamm-Deponierückstands, der eine schwere Umweltkatastrophe auslöste. Heute wird der Standort unter strengsten Sicherheitsauflagen und Umweltstandards weitergeführt und ist ein Beispiel für den industriellen Strukturwandel in Ungarn. Die Fabrik ist eng mit der Geschichte der Stadt Ajka verbunden, die ohne die industrielle Entwicklung kaum ihre heutige Größe erreicht hätte. Es bleibt ein Ort, der die Herausforderungen und die Bedeutung der Rohstoffverarbeitung in Europa verdeutlicht.",
      hu: "Az ajkai timföldgyár a magyar alumíniumipar egykori és jelenlegi meghatározó bázisa a Bakony lábánál. A gyár a környék gazdag bauxitkincsére épült, feldolgozva a nyers ércet a fémgyártáshoz szükséges timfölddé. Évtizedeken át ez az üzem volt a régió gazdasági motorja, meghatározva Ajka városának fejlődését és ipari arculatát. Bár a 2010-es vörösiszap-katasztrófa tragikus emlékként él a köztudatban, az üzem azóta szigorú biztonsági és környezetvédelmi felügyelet mellett működik tovább, alkalmazva a modern technológiákat. A gyár története a magyar nehézipar erejét és a technológiai megújulás képességét szimbolizálja, miközben továbbra is jelentős munkaadó a térségben. Földrajz K8 – Nehézipar és környezetvédelem Magyarországon.",
      ro: "Fabrica de Alumină din Ajka a fost un pilon strategic al industriei metalurgice maghiare, procesând bauxita extrasă din Munții Bakony pentru a produce alumină, materia primă a aluminiului. Istoria sa este marcată de dezvoltarea industrială intensă din perioada postbelică, transformând Ajka într-un centru muncitoresc modern. Fabrica a utilizat tehnologii complexe de procesare chimică a minereului, contribuind semnificativ la exporturile de metale ale țării. În prezent, producția de alumină a încetat, dar zona industrială rămâne activă prin procesarea materialelor și servicii logistice. Lecțiile învățate din managementul deșeurilor industriale de aici sunt esențiale pentru standardele moderne de securitate ecologică din Europa. Geografie K8 – Resursele minerale și industria metalurgică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Fabrik wurde in den 1940er Jahren gegründet und war Teil des ungarisch-sowjetischen Aluminiumprogramms.",
        "Das Werk nutzt das Bayer-Verfahren, um Aluminiumoxid (Tonerde) aus Bauxit zu extrahieren.",
        "Ajka war einst das Zentrum der 'ungarischen Aluminiumstraße', die mehrere Standorte verband.",
        "Nach der Katastrophe von 2010 wurde das Werk umfassend saniert und modernisiert.",
        "Die Fabrik liefert Tonerde an verschiedene Aluminiumhütten im In- und Ausland.",
        "Neben der Tonerdeherstellung wurden am Standort auch andere chemische Produkte entwickelt.",
        "Das Werk ist einer der größten Arbeitgeber im Komitat Veszprém.",
        "In der Nähe befindet sich ein Kraftwerk, das die Fabrik mit der notwendigen Prozesswärme versorgte."
      ],
      hu: ["A gyárat az 1940-es években alapították a magyar-szovjet bauxit-alumínium program keretében.", "A timföldgyártás során alkalmazott Bayer-eljárás az érc kémiai feltárásán alapul.", "Az üzem területén látható hatalmas silók és kémények Ajka városképének részei.", "A katasztrófa utáni rekultiváció és kármentesítés során modern gátrendszereket építettek ki.", "A gyár ma már speciális vegyipari alapanyagokat is előállít a timföld mellett.", "Az üzem saját vasútvonallal kapcsolódik az országos hálózathoz a szállítás megkönnyítésére.", "A timföld a repülőgépgyártás és a modern elektronika egyik elengedhetetlen alapanyaga.", "A gyár kutatóközpontja évtizedekig a hazai alumínium-technológia fellegvára volt."],
      ro: ["Ungaria a fost odinioară unul dintre cei mai mari producători de bauxită din lume.", "Fabrica de la Ajka a funcționat timp de peste 70 de ani ca unitate integrată.", "Procesul Bayer a fost metoda principală de extracție a aluminei utilizată aici.", "În prezent, situl este sub monitorizare ecologică strictă după închiderea producției.", "Coșurile de fum ale centralei termice adiacente sunt repere vizuale ale orașului Ajka.", "Regiunea Bakony păstrează numeroase mine de bauxită abandonate, acum obiective geologice."],
      en: []
    }
  },

  // HU-ZA: Zala (2G, 1LN, 2W)
  {
    id: "historical-festetics-keszthely-extra",
    type: "historical",
    parent: "HU-ZA",
    coords: [17.242, 46.771],
    name: { de: "Schloss Festetics Keszthely", hu: "Festetics-kastély", ro: "Castelul Festetics", en: "Festetics Palace" },
    description: {
      de: "Eines der prachtvollsten Barockschlösser Ungarns mit der berühmten Helikon-Bibliothek.",
      hu: "Magyarország egyik legpompásabb barokk kastélya a híres Helikon Könyvtárral.",
      ro: "Unul dintre cele mai superbe castele baroce cu celebra bibliotecă Helikon.",
      en: "One of Hungary's grandest Baroque palaces, featuring the famous Helikon Library."
    },
    facts: {
      de: ["101 Räume.", "Wunderschöner Schlossgarten."],
      hu: ["101 szobával rendelkezik.", "Gyönyörű kastélypark veszi körül."],
      ro: ["Are 101 camere.", "Înconjurat de un parc superb."],
      en: ["Features 101 rooms.", "Surrounded by a beautiful palace garden."]
    },
    descriptionAdvanced: {
      de: "Das Schloss Festetics in Keszthely am Westufer des Balaton ist eines der bedeutendsten architektonischen Denkmäler Ungarns. Der Bau des Schlosses begann 1745 durch Christoph Festetics und dauerte über ein Jahrhundert an, wobei es seine endgültige neobarocke Form erst in den 1880er Jahren erhielt. Besonders berühmt ist das Schloss für die Helikon-Bibliothek, die einzige erhaltene aristokratische Privatbibliothek Ungarns mit über 80.000 wertvollen Bänden. Die prachtvollen Säle, die originalgetreue Einrichtung und der weitläufige Schlossgarten im englischen Stil spiegeln den einstigen Reichtum und die kulturelle Bedeutung der Familie Festetics wider. Heute fungiert das Schloss als 'Helikon Schlossmuseum' und beherbergt mehrere Ausstellungen, darunter eine zur Jagdgeschichte und eine beeindruckende Kutschensammlung. Das Schloss ist nicht nur ein Museum, sondern auch ein Ort für Konzerte und kulturelle Veranstaltungen, der jährlich hunderttausende Besucher anzieht und das geistige Erbe Westungarns bewahrt.",
      hu: "A keszthelyi Festetics-kastély Magyarország egyik legpompásabb barokk épületegyüttese és a Balaton-part kulturális ékköve. A 18. század közepén kezdett építkezés több mint száz éven át tartott, mire elnyerte mai neobarokk formáját. A kastély világhírét a Helikon Könyvtárnak köszönheti, amely az ország egyetlen épségben maradt főúri magánkönyvtára több mint 80 000 kötettel. A pazar belső terek, a tükörtermek és a korhű berendezés a Festetics család hatalmát és műveltségét tükrözik. A kastélyt hatalmas angolpark övezi ritka fafajokkal és tavakkal. Ma Helikon Kastélymúzeum néven működik, ahol vadászati és hintókiállítás, valamint egyedülálló vasútmodell-gyűjtemény várja a látogatókat. Történelem K8 – Főúri életforma és borkultúra a Balatonnál.",
      ro: "Palatul Festetics din Keszthely este unul dintre cele mai mari și mai frumoase castele baroce din Ungaria, fiind un simbol al bogăției și rafinamentului familiei nobiliare Festetics. Construcția a început în 1745 și a durat peste un secol, rezultând un edificiu monumental cu 101 camere. Piesa centrală este Biblioteca Helikon, singura bibliotecă aristocratică privată care a rămas intactă în Ungaria, adăpostind peste 80.000 de volume rare. Palatul este înconjurat de un parc englezesc superb, cu sere exotice și o faimoasă expoziție de calești. Centrul cultural Helikon, care funcționează aici, transformă palatul într-un loc vibrant, gazdă a numeroase concerte și evenimente de înaltă ținută. Este o destinație esențială pentru iubitorii de istorie și artă. Istorie K8 – Viața aristocratică și barocul maghiar.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Mit 101 Räumen ist es das drittgrößte Schlossgebäude in ganz Ungarn.",
        "Die Helikon-Bibliothek beherbergt seltene Erstausgaben und wertvolle Atlanten aus mehreren Jahrhunderten.",
        "Die Familie Festetics gründete in Keszthely mit dem 'Georgikon' die erste landwirtschaftliche Hochschule Europas.",
        "Der Schlossgarten ist ein Naturschutzgebiet und beherbergt mehrere hundert Jahre alte Ginkgo-Bäume.",
        "Das Gebäude blieb im Zweiten Weltkrieg weitgehend unversehrt, was für ungarische Schlösser eine Seltenheit ist.",
        "In den Stallungen befindet sich heute eines der größten Jagdmuseen Zentraleuropas.",
        "Das Schloss war Schauplatz für zahlreiche Filmproduktionen aufgrund seiner authentischen historischen Atmosphäre.",
        "Eine riesige Modelleisenbahn-Ausstellung im Nebengebäude gehört zu den größten ihrer Art in Europa."
      ],
      hu: ["A kastély 101 szobájával az ország harmadik legnagyobb ilyen típusú épülete.", "A Helikon Könyvtárban ritka első kiadású könyveket és középkori kódexmásolatokat is őriznek.", "A Festetics család alapította Keszthelyen Európa első mezőgazdasági főiskoláját, a Georgikont.", "A kastélypark természetvédelmi terület, ahol több száz éves páfrányfenyők is élnek.", "A második világháború alatt az épület szinte sértetlen maradt, megőrizve eredeti bútorzatát.", "Az egykori lovardában ma Közép-Európa egyik legnagyobb hintókiállítása látható.", "A kastély kertjében nyaranként komolyzenei hangversenyeket és operaelőadásokat tartanak.", "A tetőtérben elhelyezett óriási terepasztal a kontinens egyik leglátványosabb vasútmodell kiállítása."],
      ro: ["Familia Festetics a înființat la Keszthely prima universitate agricolă din Europa (Georgikon).", "Palatul are o formă de 'U' și a fost extins succesiv în secolele XVIII și XIX.", "Biblioteca Helikon deține manuscrise medievale și incunabule de o valoare inestimabilă.", "Parcul palatului este o rezervație naturală ce conține arbori rari de peste 200 de ani.", "Muzeul Caleștilor deține peste 50 de vehicule istorice originale ale familiei.", "În timpul celui de-al Doilea Război Mondial, palatul a supraviețuit miraculos fără a fi jefuit."],
      en: []
    }
  },
  {
    id: "historical-rezi-var-extra",
    type: "historical",
    parent: "HU-ZA",
    coords: [17.228, 46.863],
    name: { de: "Burg Rezi", hu: "Rezi vár", ro: "Cetatea Rezi", en: "Rezi Castle" },
    description: {
      de: "Eine mittelalterliche Burgruine auf einem Felsen im Keszthelyer Gebirge.",
      hu: "Középkori várrom a Keszthelyi-hegység egyik bérci szikláján.",
      ro: "Ruină medievală pe o stâncă din munții Keszthely.",
      en: "A medieval castle ruin perched on a cliff in the Keszthely Mountains."
    },
    facts: {
      de: ["Blick auf den Balaton.", "Im 13. Jahrhundert erbaut."],
      hu: ["Kilátás a Balatonra.", "A 13. században épült."],
      ro: ["Vedere spre Balaton.", "Construită în secolul XIII."],
      en: ["Offers a view of Lake Balaton.", "Built in the 13th century."]
    },
    descriptionAdvanced: {
      de: "Die Burg Rezi thront spektakulär auf einem 427 Meter hohen Dolomitfelsen im Keszthelyer Gebirge und bietet einen der schönsten Ausblicke auf das Balaton-Oberland. Die im 13. Jahrhundert errichtete Festung diente ursprünglich dem Schutz der Region vor feindlichen Überfällen. Im Laufe der Geschichte wechselte sie häufig ihre Besitzer, darunter die mächtige Familie Lackfi und später die Familie Festetics. Während der Türkenkriege war die Burg ein wichtiger Teil des ungarischen Grenzfestungssystems, verlor jedoch im 16. Jahrhundert an Bedeutung und wurde schließlich verlassen, woraufhin sie zur Ruine verfiel. Heute sind noch beeindruckende Teile der Mauern und des Wohnturms erhalten. Eine Wanderung zur Burgruine ist ein Muss für Naturfreunde, da der Weg durch dichte Wälder führt und oben mit einem atemberaubenden Panorama belohnt wird. Rezi ist ein Symbol für die mittelalterliche Wehrhaftigkeit Ungarns und ein Ort, an dem Geschichte und unberührte Natur auf faszinierende Weise aufeinandertreffen.",
      hu: "A rezi vár romjai a Keszthelyi-hegység egyik leglátványosabb sziklabércén, 427 méter magasan dacolnak az idővel. A 13. század végén épült erődítmény stratégiai szerepe a vidék védelme és az útvonalak ellenőrzése volt. Bár a török hódoltság idején soha nem foglalták el tartósan az oszmánok, a vár a 16. század végén elvesztette jelentőségét és pusztulásnak indult. Ma a megmaradt falmaradványok és az öregtorony alapjai vonzzák a túrázókat. A várhoz vezető erdei út fáradalmait a csúcsról nyíló lélegzetelállító panoráma feledteti: tiszta időben az egész Balaton-felvidék és a tanúhegyek vonulata is látható. Rezi vára a középkori magyar várrendszer egyik vadregényes és csendes mementója. Történelem K6 – Középkori várak és a Balaton-felvidék védelme.",
      ro: "Ruinele cetății Rezi se află pe o creastă stâncoasă a Munților Keszthely, oferind una dintre cele mai spectaculoase panorame asupra regiunii Balatonului de Vest. Construită la sfârșitul secolului al XIII-lea, cetatea a avut un rol defensiv strategic, controlând drumurile comerciale care duceau spre malul lacului. Deși astăzi se păstrează doar porțiuni din zidurile masive și din turnul principal, locul emană o atmosferă romantică deosebită, fiind o destinație preferată pentru drumeți. Drumul spre cetate șerpuiește prin păduri de foioase, iar peisajul de la vârf cuprinde munții martori din bazinul Tapolca și sclipirea apei Balatonului. Este un loc ideal pentru a învăța despre istoria fortificațiilor montane și despre viața soldaților de pază. Istorie K6 – Cetăți medievale și peisaje montane.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde vermutlich nach dem Mongolensturm im späten 13. Jahrhundert zum Schutz erbaut.",
        "Von den Ruinen aus kann man bei klarem Wetter fast das gesamte Westbecken des Plattensees überblicken.",
        "Die Burgmauern folgen der natürlichen Felsformation, was ihre strategische Lage verdeutlicht.",
        "Im 16. Jahrhundert wurde die Burg von den Türken belagert, aber nie vollständig eingenommen.",
        "Die Anlage verfiel erst im 18. Jahrhundert endgültig, als sie ihre militärische Funktion verlor.",
        "In den letzten Jahren wurden Teile der Ruine gesichert, um sie für Besucher gefahrlos zugänglich zu machen.",
        "Der Wanderweg zur Burg ist Teil der 'Blauen Landestour' (Országos Kéktúra), des berühmtesten Wanderwegs Ungarns.",
        "Die Flora rund um die Burgruine beherbergt seltene Felsenpflanzen, die unter Naturschutz stehen."
      ],
      hu: ["A várat valószínűleg a tatárjárás utáni nagy várépítési hullám idején emelték a környék urai.", "A várfalak alaprajza hűen követi a sziklás hegygerinc szabálytalan vonalát.", "A néphit szerint a vár egykor a híres kalandor és hadvezér, Lackfi István birtoka volt.", "A vár alatt húzódó Sátorma-völgy híres misztikus barlangjairól és forrásairól.", "A romok állagmegóvása civil összefogással és szakértők bevonásával történik.", "A csúcsról látható a szomszédos Tátika vára is, amellyel egykor közös védelmi rendszert alkottak.", "A vár környéke botanikai ritkaságokban gazdag, védett sziklagyepek övezik.", "Itt halad át az Országos Kéktúra egyik leglátványosabb dunántúli szakasza."],
      ro: ["Cetatea a fost construită din piatră calcaroasă locală și dolomit.", "Se află la o altitudine de 427 de metri deasupra nivelului mării.", "În secolul al XVI-lea, cetatea a fost distrusă de însuși căpitanul său pentru a nu cădea în mâna turcilor.", "Zona cetății este o arie protejată, adăpostind specii rare de ferigi și fluturi.", "Legendele locale vorbesc despre tuneluri secrete care legau cetatea Rezi de cetatea Tátika.", "Restaurarea recentă a punctului de observație facilitează vizitarea ruinelor în siguranță."],
      en: []
    }
  },
  {
    id: "kid-landmark-zalakaros-furdo-extra",
    type: "kid-landmark",
    parent: "HU-ZA",
    coords: [17.126, 46.548],
    name: { de: "Heilbad Zalakaros", hu: "Zalakarosi Termálfürdő", ro: "Baia Termală Zalakaros", en: "Zalakaros Thermal Bath" },
    description: {
      de: "Ein beliebtes Thermal- und Erlebnisbad, ideal für Familien mit Kindern.",
      hu: "Népszerű termál- és élményfürdő, amely ideális családosoknak.",
      ro: "Baie termală și de agrement populară, ideală pentru familii.",
      en: "A popular thermal and adventure bath, ideal for families with children."
    },
    facts: {
      de: ["Große Rutschenwelt.", "Heilkräftiges Wasser."],
      hu: ["Hatalmas csúszdapark.", "Gyógyhatású termálvíz."],
      ro: ["Lume a toboganelor.", "Apă termală curativă."],
      en: ["Features a large slide park.", "Healing thermal water."]
    },
    descriptionAdvanced: {
      de: "Zalakaros ist einer der bekanntesten Kurorte Ungarns und beherbergt ein Thermal- und Erlebnisbad, das weit über die Landesgrenzen hinaus geschätzt wird. Das Heilwasser wurde 1962 bei Erdölbohrungen entdeckt und hat eine einzigartige Zusammensetzung aus Schwefel, Jod und Fluor. Das Bad hat sich in den letzten Jahrzehnten zu einem wahren Paradies für Familien entwickelt. Während die Heilbecken Ruhe und Linderung bei gesundheitlichen Beschwerden bieten, sorgt der riesige Erlebnisbereich mit zahlreichen Innen- und Außenbecken für Action. Besonders für Kinder ist die 'Vizipók-Csodapók' Kinderwelt und der Adrenalin-Rutschenpark ein absolutes Highlight. Mit über 20 verschiedenen Rutschen und abwechslungsreichen Wasserattraktionen ist Langeweile hier ein Fremdwort. Zalakaros kombiniert Wellness für Erwachsene mit modernem Badespaß für Kinder und ist eingebettet in eine gepflegte Parkanlage, die zum Entspannen einlädt. Der Ort selbst ist für seine blühenden Gärten und seine Gastfreundschaft bekannt, was ihn zu einem idealen Ziel für einen Familienurlaub macht.",
      hu: "A Zalakarosi Fürdő Magyarország egyik legnépszerűbb és legmodernebb családi élményfürdője és gyógyhelye. A 96 fokos, kénes termálvíz jótékony hatását az 1960-as években fedezték fel, és azóta Zalakaros nemzetközi hírű fürdővárossá nőtte ki magát. A komplexum különlegessége a „Vízipók-Csodapók” gyermekbirodalom, ahol több tucat vízi attrakció és hatalmas csúszdapark várja a legkisebbeket. Míg a gyerekek a kalandmedencékben játszanak, a szülők a gyógy- és wellness részlegeken töltődhetnek fel. A fürdő tágas, parkosított területei, az egész évben működő fedett és szabadtéri medencék garantálják a minőségi kikapcsolódást minden korosztály számára. Természetismeret K5 – Gyógyvizeink és a modern fürdőkultúra.",
      ro: "Băile din Zalakaros sunt un paradis acvatic situat în sud-vestul Ungariei, fiind renumite pentru una dintre cele mai mari și mai moderne secțiuni pentru copii din țară. 'Lumea Copiilor' din Zalakaros oferă aventuri pe mai multe niveluri, cu peste 60 de tipuri de atracții acvatice, de la tobogane cu efecte speciale la tunuri de apă și peșteri misterioase. Apa termală de aici este benefică și pentru cei mici, dar accentul este pus pe distracția sigură sub supravegherea salvamarilor. Parcul exterior de aventură și piscinele cu valuri transformă fiecare vizită într-o vacanță memorabilă. Este locul unde sănătatea prin apă se îmbină cu bucuria pură a jocului, fiind o destinație preferată pentru familiile cu copii de toate vârstele. Științele Naturii K3 – Apa și sănătatea noastră.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Thermalwasser von Zalakaros hat eine Quelltemperatur von 96 Grad Celsius.",
        "Es zählt zu den wirksamsten Heilwässern Europas für Erkrankungen des Bewegungsapparates.",
        "Das Bad erstreckt sich über eine Fläche von rund 12 Hektar in einer weitläufigen Parkanlage.",
        "Der Rutschenpark bietet Bahnen mit Zeitmessung und extremen Neigungswinkeln für Adrenalinjunkies.",
        "Die Kinderwelt umfasst über 60 verschiedene Wasserattraktionen auf mehreren Ebenen.",
        "Zalakaros wurde mehrfach als 'Blühendste Stadt Ungarns' ausgezeichnet.",
        "Das Bad ist ganzjährig geöffnet und bietet auch im Winter umfangreiche Wellness-Leistungen.",
        "In der Nähe befindet sich ein schöner Lehrpfad durch das angrenzende Sumpfgebiet des 'Kleinen Balaton'."
      ],
      hu: ["Zalakaros vize kéntartalma alapján az ország egyik legértékesebb gyógyvize.", "A fürdő területe meghaladja a 12 hektárt, több mint 20 különböző medencével.", "Az Adrenalin Csúszdaparkban extrém sebességű és dőlésszögű pályák is kipróbálhatók.", "A gyermekvilág kétszintes kialakítása és mesefigurás díszítése egyedülálló az országban.", "A fürdő vize mozgásszervi panaszok és rehabilitáció esetén is kiváló gyógyhatású.", "Zalakaros városa rendszeresen elnyeri a „Virágos Magyarország” díjat rendezettségéért.", "A komplexumban szaunavilág, sószoba és speciális masszázsok is rendelkezésre állnak.", "Télen is látogatható a fedett élményfürdő, mely forró vízzel várja a vendégeket."],
      ro: ["Zalakaros deține una dintre cele mai concentrate ape termale curative din Europa.", "Secțiunea interioară pentru copii are o suprafață de peste 1000 de metri pătrați.", "Există un tobogan 'Adrenalină' pentru copiii mai mari și adulți, cu o înălțime de 20 de metri.", "Băile funcționează de peste 50 de ani, fiind modernizate complet recent.", "Parcul băilor se întinde pe o suprafață de 12 hectare, cu multă umbră și spații verzi.", "Centrul oferă programe zilnice de animație și gimnastică acvatică pentru toată familia."],
      en: []
    }
  },
  {
    id: "industry-nagylengyeli-olaj-extra",
    type: "industry",
    parent: "HU-ZA",
    coords: [16.732, 46.755],
    name: { de: "Ölfeld Nagylengyel", hu: "Nagylengyeli olajmező", ro: "Câmpul petrolier Nagylengyel", en: "Nagylengyel Oil Field" },
    description: {
      de: "Das bedeutendste Erdölfördergebiet Ungarns in Transdanubien.",
      hu: "Magyarország legjelentősebb dunántúli kőolajkitermelő területe.",
      ro: "Cea mai importantă zonă de extracție a petrolului din Transdanubia.",
      en: "Hungary's most significant oil production area in Transdanubia."
    },
    facts: {
      de: ["Seit 1950er Jahren.", "Typische Tiefpumpen."],
      hu: ["Az 1950-es évek óta.", "Jellegzetes mélységi szivattyúk."],
      ro: ["Din anii 1950.", "Pompe de adâncime tipice."],
      en: ["Active since the 1950s.", "Features characteristic nodding donkeys."]
    },
    descriptionAdvanced: {
      de: "Das Ölfeld von Nagylengyel im Komitat Zala ist ein historischer Meilenstein der ungarischen Energiewirtschaft. Entdeckt in den frühen 1950er Jahren, galt es lange Zeit als das bedeutendste Erdölvorkommen des Landes. Die Entdeckung löste einen regelrechten Industrie-Boom in der Region aus und verwandelte das ländlich geprägte Transdanubien in ein Zentrum der Schwerindustrie. Das Besondere an Nagylengyel ist das schwere, bitumenreiche Rohöl, das sich hervorragend für die Asphaltherstellung eignet. Die Landschaft rund um das Dorf ist bis heute durch die charakteristischen 'nickenden' Tiefpumpen geprägt, die das schwarze Gold aus der Tiefe fördern. Obwohl die Fördermengen heute geringer sind als in der Blütezeit der 1960er Jahre, bleibt das Ölfeld ein aktiver Teil der ungarischen Rohstoffgewinnung. Ein kleines Museum und Denkmäler in der Region erinnern an die Pioniere der ungarischen Ölindustrie. Die technische Leistung, Öl aus komplexen geologischen Schichten zu fördern, wird hier für Besucher greifbar und zeigt einen wichtigen Teil der ungarischen Industriegeschichte.",
      hu: "A nagylengyeli olajmező a magyar kőolajbányászat történelmi jelentőségű bölcsője Zala vármegyében. Az 1950-es évek elején felfedezett lelőhely hosszú ideig az ország leggazdagabb kőolaj-forrása volt, alapjaiban határozva meg a hazai energiaipart. A vidék jellegzetesképét ma is a „bólogató” mélységi szivattyúk adják, amelyek a fekete aranyat hozzák a felszínre a mélyből. Az itteni olaj különlegessége a magas bitumentartalom, amely kiválóan alkalmas útépítési alapanyagok gyártására. Bár a kitermelés csúcsidőszaka már elmúlt, Nagylengyel és környéke ma is élő példája az emberi technológia és a természet kincseinek találkozásának, megőrizve az olajmunkások szakmai büszkeségét. Földrajz K8 – Kőolajbányászat és energiatermelés.",
      ro: "Câmpul petrolier de la Nagylengyel, situat în județul Zala, reprezintă un capitol istoric și tehnic fascinant al industriei extractive maghiare. Descoperit în anii 1950, acesta a fost unul dintre cele mai bogate zăcăminte de țiței greu din Ungaria, transformând regiunea Göcsej într-un centru energetic vital. Țițeiul de aici este renumit pentru conținutul ridicat de bitum, fiind materia primă ideală pentru construcția drumurilor din întreaga țară. Exploatarea a necesitat tehnologii speciale, inclusiv injectarea de dioxid de carbon pentru a crește presiunea în zăcământ, o metodă inovatoare la acea vreme. Deși producția a scăzut în ultimele decenii, peisajul este încă marcat de pompele 'cap de cal' care amintesc de epoca de aur a petrolului în Zala. Geografie K8 – Resurse minerale și industria extractivă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Ölfeld wurde 1951 entdeckt und war damals eine Sensation für die ungarische Wirtschaft.",
        "Das Rohöl von Nagylengyel lagert in einer Tiefe von etwa 2.000 bis 2.500 Metern.",
        "Es handelt sich um ein sehr schweres Öl, das bei Zimmertemperatur fast fest ist.",
        "Auf dem Höhepunkt der Förderung wurden hier über eine Million Tonnen Öl pro Jahr gewonnen.",
        "Die Entdeckung führte zum Bau einer speziellen Raffinerie in Zalaegerszeg.",
        "In Nagylengyel wurde erstmals in Ungarn die Methode der Kohlendioxid-Injektion zur Erhöhung der Förderrate eingesetzt.",
        "Die typischen Pumpen werden im Volksmund oft als 'Wippen' oder 'Ölmännchen' bezeichnet.",
        "Die Region Zala gilt bis heute als die Wiege der ungarischen Erdöl- und Erdgasindustrie."
      ],
      hu: ["A nagylengyeli olajat 1951-ben fedezték fel, ami óriási ipari fellendülést hozott a régiónak.", "Az olajkincs mintegy 2000-2500 méteres mélységben rejlik a pannon rétegek alatt.", "Magyarországon itt alkalmaztak először nagyüzemi szén-dioxid besajtolást a hozam növelésére.", "A kitermelt olaj sűrű és nehéz, szinte szurokszerű állagú szobahőmérsékleten.", "Fénykorában az üzem évente több mint egy millió tonna olajat adott az országnak.", "Zalaegerszeg közelében külön finomítót építettek a nagylengyeli olaj feldolgozására.", "A területen található Olajipari Múzeum bemutatja a fúrótornyok és szivattyúk működését.", "A kőolajbányászat alapjaiban változtatta meg a korábban szegény zalai falvak életét."],
      ro: ["Zăcământul a fost descoperit în anul 1951, la o adâncime de peste 2000 de metri.", "Țițeiul de la Nagylengyel are o vâscozitate ridicată, fiind supranumit 'petrolul-bitum'.", "Aici s-a utilizat pentru prima dată în Ungaria metoda de extracție secundară cu CO2.", "Peste 500 de puțuri au fost forate în zona Nagylengyel pe parcursul deceniilor.", "Muzeul Industriei Petroliere din Zalaegerszeg păstrează numeroase utilaje provenite de aici.", "Bitumul de Nagylengyel a fost folosit la pavarea majorității autostrăzilor maghiare."],
      en: []
    }
  },
  {
    id: "industry-zalaegerszegi-ruhagyar-extra",
    type: "industry",
    parent: "HU-ZA",
    coords: [16.840, 46.845],
    name: { de: "Bekleidungswerk Zalaegerszeg", hu: "Zalaegerszegi ruhagyár", ro: "Fabrica de Confecții Zalaegerszeg", en: "Zalaegerszeg Clothing Factory" },
    description: {
      de: "Ein traditionsreiches Werk der ungarischen Textilindustrie.",
      hu: "A magyar könnyűipar egyik nagy múltú szereplője.",
      ro: "Un actor cu tradiție în industria ușoară maghiară.",
      en: "A long-standing player in the Hungarian textile industry."
    },
    facts: {
      de: ["Hochwertige Mode.", "Exportfokus."],
      hu: ["Minőségi ruházati termékek.", "Export fókuszú gyártás."],
      ro: ["Produse de calitate.", "Orientare spre export."],
      en: ["High-quality clothing products.", "Export-oriented production."]
    },
    descriptionAdvanced: {
      de: "Das Bekleidungswerk Zalaegerszeg, oft unter seinem Kürzel Zalaegerszegi Ruhagyár (ZARU) bekannt, war über Jahrzehnte ein Aushängeschild der ungarischen Leichtindustrie. Gegründet in der Nachkriegszeit, entwickelte es sich zu einem der größten Textilunternehmen Zentraleuropas, das zeitweise mehrere tausend Mitarbeiter beschäftigte. Das Werk war bekannt für seine hochwertige Herrenkonfektion, insbesondere Anzüge und Mäntel, die nicht nur im Ostblock, sondern auch auf anspruchsvollen westlichen Märkten sehr gefragt waren. Große internationale Marken ließen ihre Kollektionen aufgrund der hohen handwerklichen Präzision und der modernen Fertigungstechniken in Zalaegerszeg nähen. Nach der Wende musste sich das Unternehmen dem harten globalen Wettbewerb stellen, konnte aber durch Qualität und Flexibilität lange Zeit bestehen. Auch wenn sich die Textilindustrie stark gewandelt hat, bleibt der Name Zalaegerszeg mit modischer Kompetenz und Textiltradition verbunden. Das Erbe der Fabrik lebt in kleineren Nachfolgeunternehmen und in der hohen Fachkompetenz der lokalen Arbeitskräfte weiter, die bis heute für Qualität 'Made in Hungary' stehen.",
      hu: "A Zalaegerszegi Ruhagyár (ZARU) évtizedekig a magyar könnyűipar zászlóshajója és a város legnagyobb munkaadója volt. A 20. század közepén alapított üzem világhírűvé vált minőségi férfiruházati termékeivel, különösen öltönyeivel és kabátjaival. A gyár nemcsak a hazai piacot látta el, hanem jelentős exportot is bonyolított Nyugat-Európába; neves nemzetközi divatházak is itt varratták kollekcióikat a magyar szakemberek precíz munkája miatt. Bár a textilipar globális átalakulása komoly kihívások elé állította az üzemet, a gyár neve ma is a minőség és a textilipari szaktudás szinonimája Zalaegerszegen, a szakmai örökség pedig kisebb manufaktúrákban él tovább a régióban. Földrajz K8 – Könnyűipar és textilgyártás Magyarországon.",
      ro: "Fabrica de Confecții din Zalaegerszeg (ZA-KO) a fost odinioară mândria industriei ușoare maghiare, fiind faimoasă în toată Europa pentru calitatea costumelor bărbătești și a hainelor de damă. Fondată în anii 1950 ca parte a programului de industrializare regională, fabrica s-a transformat rapid într-un exportator de top, produsele sale fiind vândute sub mărci internaționale de prestigiu din Germania și Franța. Sute de croitori și cusătorese din regiunea Zala și-au dedicat viața acestui meșteșug industrial, transformând Zalaegerszeg într-un centru al modei de serie. Deși structura industrială s-a schimbat, tradiția profesionalismului în textile rămâne o parte importantă a identității locale, multe mici ateliere continuând spiritul calității ZA-KO. Geografie K8 – Industria ușoară și forța de muncă feminină.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Fabrik wurde 1951 im Rahmen der Industrialisierungswelle in der Stadt Zalaegerszeg eröffnet.",
        "In seiner Blütezeit exportierte das Werk über 70 Prozent seiner Produktion in den Westen.",
        "Internationale Modehäuser wie Hugo Boss oder Pierre Cardin ließen zeitweise in Zalaegerszeg fertigen.",
        "Das Werk war ein wichtiger Pionier bei der Einführung computergestützter Schnittbilder in der ungarischen Industrie.",
        "Für viele Familien in Zalaegerszeg war die Fabrik über Generationen hinweg der wichtigste Arbeitgeber.",
        "Neben der Großproduktion gab es eine Spezialabteilung für Maßanfertigungen höchster Güte.",
        "Das Unternehmen verfügte über ein eigenes Ausbildungszentrum für Schneider und Textiltechniker.",
        "Die Fabrik prägte das Stadtbild von Zalaegerszeg und trug maßgeblich zum urbanen Wachstum der Region bei."
      ],
      hu: ["A gyárat 1951-ben alapították, és virágkorában több ezer embert foglalkoztatott.", "Termékeinek több mint 70 százaléka jutott el nyugati piacokra, köztük Németországba és Angliába.", "Olyan márkák készültek itt bérmunkában, mint a Hugo Boss vagy a Pierre Cardin.", "A gyár úttörő volt a számítógépes szabásminta-tervezés bevezetésében Magyarországon.", "Zalaegerszegen szinte minden második családban dolgozott valaki a ruhagyárban generációkon át.", "A vállalat saját szakképző intézetet tartott fenn a varrónők és szabászok utánpótlására.", "A gyár épülete ma ipari parkként üzemel, számos kisebb vállalkozásnak adva otthont.", "A zalaegerszegi ruhagyári konfekció a magyar stílus és elegancia elismert követe volt külföldön."],
      ro: ["Fabrica ZA-KO a fost înființată pe 1 ianuarie 1951.", "În perioada sa de glorie, fabrica avea peste 3000 de angajați, majoritatea femei.", "Peste 70% din producția de costume era exportată în țările vestice în perioada interbelică.", "Fabrica a fost un pionier în utilizarea mașinilor de cusut automate și a designului asistat de calculator.", "Clădirea fabricii este un monument al arhitecturii industriale socialiste funcționale.", "Numele ZA-KO a devenit un sinonim pentru eleganța accesibilă în întreaga Ungarie."],
      en: []
    }
  }
];

