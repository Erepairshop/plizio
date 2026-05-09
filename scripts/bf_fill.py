# -*- coding: utf-8 -*-
"""
Fill descriptionAdvanced for poiExtraBurkinaFasoCitiesV2.ts (4 langs).
Skip lang if already >= 50 chars. Each generated lang >= 600 chars.
"""
import re, json, sys

PATH = r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraBurkinaFasoCitiesV2.ts"
LIST = r"C:\Users\User\plizio-repo\scripts\bf_list.json"

# Region (admin) data per parent code: (de, hu, ro, en)
REGIONS = {
    "BF-01": ("Boucle du Mouhoun", "Boucle du Mouhoun", "Boucle du Mouhoun", "Boucle du Mouhoun"),
    "BF-02": ("Cascades", "Cascades (Vízesések régió)", "Cascades", "Cascades"),
    "BF-03": ("Centre", "Centre (Központi régió)", "Centre", "Centre"),
    "BF-04": ("Centre-Est", "Centre-Est (Közép-Kelet)", "Centre-Est", "Centre-Est"),
    "BF-05": ("Centre-Nord", "Centre-Nord (Közép-Észak)", "Centre-Nord", "Centre-Nord"),
    "BF-06": ("Centre-Ouest", "Centre-Ouest (Közép-Nyugat)", "Centre-Ouest", "Centre-Ouest"),
    "BF-07": ("Centre-Sud", "Centre-Sud (Közép-Dél)", "Centre-Sud", "Centre-Sud"),
    "BF-08": ("Est", "Est (Keleti régió)", "Est", "Est"),
    "BF-09": ("Hauts-Bassins", "Hauts-Bassins (Felső-medencék)", "Hauts-Bassins", "Hauts-Bassins"),
    "BF-10": ("Nord", "Nord (Északi régió)", "Nord", "Nord"),
    "BF-11": ("Plateau-Central", "Plateau-Central (Központi-fennsík)", "Plateau-Central", "Plateau-Central"),
    "BF-12": ("Sahel", "Sahel", "Sahel", "Sahel"),
    "BF-13": ("Sud-Ouest", "Sud-Ouest (Délnyugat)", "Sud-Ouest", "Sud-Ouest"),
}

# Climate description by region group
CLIMATE = {
    # north / Sahel
    "BF-12": ("heißes, trockenes Sahelklima mit kurzer Regenzeit", "forró, száraz száheli éghajlat rövid esős évszakkal", "climat sahelian fierbinte și uscat, cu un sezon ploios scurt", "a hot, arid Sahelian climate with a short rainy season"),
    "BF-10": ("trockenes Sudan-Sahelklima mit deutlichen Trockenzeiten", "száraz szudán-száheli éghajlat határozott száraz időszakokkal", "climat sudano-sahelian arid cu sezoane uscate pronunțate", "a dry Sudano-Sahelian climate with pronounced dry seasons"),
    "BF-05": ("trockenes Sudan-Sahelklima mit kurzer Regenzeit", "száraz szudán-száheli éghajlat rövid esős évszakkal", "climat sudano-sahelian uscat cu un sezon ploios scurt", "a dry Sudano-Sahelian climate with a short rainy season"),
    "BF-11": ("typisches Sudanklima mit warmen Sommern", "tipikus szudáni éghajlat meleg nyarakkal", "climat sudanez tipic cu veri calde", "a typical Sudanian climate with warm summers"),
    "BF-03": ("Sudanklima mit Regenzeit von Juni bis September", "szudáni éghajlat június és szeptember közötti esős évszakkal", "climat sudanez cu sezon ploios între iunie și septembrie", "a Sudanian climate with a rainy season from June to September"),
    "BF-04": ("Sudanklima mit längerer Regenzeit", "szudáni éghajlat hosszabb esős évszakkal", "climat sudanez cu sezon ploios mai lung", "a Sudanian climate with a longer rainy season"),
    "BF-08": ("Sudanklima mit savannenartiger Vegetation", "szudáni éghajlat szavannás növényzettel", "climat sudanez cu vegetație de tip savană", "a Sudanian climate with savanna-like vegetation"),
    "BF-06": ("warmes Sudanklima mit ausgeprägter Regenzeit", "meleg szudáni éghajlat kifejezett esős évszakkal", "climat sudanez cald cu un sezon ploios pronunțat", "a warm Sudanian climate with a marked rainy season"),
    "BF-07": ("Sudanklima mit fruchtbaren Böden", "szudáni éghajlat termékeny talajokkal", "climat sudanez cu soluri fertile", "a Sudanian climate with fertile soils"),
    "BF-01": ("warmes Sudanklima mit längerer Regenzeit", "meleg szudáni éghajlat hosszabb esős évszakkal", "climat sudanez cald cu sezon ploios prelungit", "a warm Sudanian climate with an extended rainy season"),
    "BF-09": ("feuchteres Sudanklima mit reichlicher Vegetation", "csapadékosabb szudáni éghajlat dús növényzettel", "climat sudanez mai umed cu vegetație bogată", "a more humid Sudanian climate with lush vegetation"),
    "BF-02": ("feuchtes Sudanklima mit zahlreichen Wasserläufen", "csapadékos szudáni éghajlat számos vízfolyással", "climat sudanez umed cu numeroase cursuri de apă", "a humid Sudanian climate with numerous watercourses"),
    "BF-13": ("feuchtes tropisches Übergangsklima im Süden", "csapadékos trópusi átmeneti éghajlat délen", "climat tropical de tranziție umed în sud", "a humid tropical transitional climate in the south"),
}

# Per-POI custom highlight (de, hu, ro, en) — short factual nugget
POI_NUGGETS = {
    "bobo-dioulasso-cities-v2": (
        "Die Stadt ist berühmt für die historische Lehmmoschee von Dioulassoba aus dem Jahr 1893 und für ihre lebendige Musikszene, die als Wiege des modernen burkinischen Jazz gilt.",
        "A város híres az 1893-ban épült történelmi Dioulassoba sármecsetről, valamint élénk zenei életéről, amelyet a modern burkinai dzsessz bölcsőjének tartanak.",
        "Orașul este renumit pentru moscheea istorică din lut Dioulassoba, ridicată în 1893, și pentru scena muzicală vibrantă, considerată leagănul jazzului burkinabe modern.",
        "The city is famed for the historic mud-brick Dioulassoba Mosque built in 1893, and for a vibrant music scene regarded as the cradle of modern Burkinabe jazz."
    ),
    "koudougou-cities-v2": (
        "Koudougou ist Heimat des bekannten Festivals NAK (Nuits Atypiques de Koudougou) und Sitz der Norbert-Zongo-Universität, einer wichtigen Bildungseinrichtung des Landes.",
        "Koudougou ad otthont a híres NAK fesztiválnak (Nuits Atypiques de Koudougou), és itt található a Norbert Zongo Egyetem, az ország egyik fontos felsőoktatási intézménye.",
        "Koudougou găzduiește renumitul festival NAK (Nuits Atypiques de Koudougou) și este sediul Universității Norbert Zongo, una dintre instituțiile importante de învățământ ale țării.",
        "Koudougou hosts the renowned NAK festival (Nuits Atypiques de Koudougou) and is home to Norbert Zongo University, one of the country's leading higher-education institutions."
    ),
    "ouahigouya-cities-v2": (
        "Im 18. Jahrhundert wurde sie von Naaba Kango zur Hauptstadt des Yatenga-Königreichs erhoben; bis heute spielt der traditionelle Hof der Mossi eine zentrale Rolle.",
        "A 18. században Naaba Kango uralkodó tette meg a Yatenga Birodalom fővárosává; a hagyományos mosszi udvar máig központi szerepet játszik a város életében.",
        "În secolul al XVIII-lea, regele Naaba Kango a desemnat-o capitala Imperiului Yatenga; curtea tradițională Mossi joacă și astăzi un rol central în viața orașului.",
        "Established in the 18th century by Naaba Kango as the capital of the Yatenga Kingdom, the traditional Mossi court still plays a central role in city life."
    ),
    "banfora-cities-v2": (
        "Die Stadt ist Ausgangspunkt zu den Karfiguéla-Wasserfällen, dem Tengréla-See mit Flusspferden und den charakteristischen Sindou-Felsformationen.",
        "A város kiindulópontja a Karfiguéla-vízeséseknek, a vízilovakkal teli Tengréla-tónak, valamint a jellegzetes Sindou-sziklaformációknak.",
        "Orașul este punctul de pornire spre cascadele Karfiguéla, lacul Tengréla cu hipopotami și spectaculoasele formațiuni stâncoase Sindou.",
        "The city is the gateway to the Karfiguela Waterfalls, hippo-inhabited Lake Tengrela, and the spectacular Sindou rock formations."
    ),
    "dedougou-cities-v2": (
        "Hier findet das internationale Maskenfestival FESTIMA statt, eines der wichtigsten Kulturereignisse Westafrikas.",
        "Itt rendezik a FESTIMA nemzetközi maszkfesztivált, Nyugat-Afrika egyik legfontosabb kulturális rendezvényét.",
        "Aici se desfășoară festivalul internațional al măștilor FESTIMA, unul dintre cele mai importante evenimente culturale din Africa de Vest.",
        "It hosts FESTIMA, the international festival of masks, one of West Africa's most important cultural events."
    ),
    "kaya-cities-v2": (
        "Die Stadt ist berühmt für ihre traditionelle Lederverarbeitung, deren Produkte – Sandalen, Sättel und Taschen – im ganzen Land vermarktet werden.",
        "A város híres a hagyományos bőrfeldolgozásáról, amelynek termékeit – szandálokat, nyergeket és táskákat – az egész országban árulják.",
        "Orașul este renumit pentru prelucrarea tradițională a pielii, ale cărei produse – sandale, șei și genți – sunt comercializate în toată țara.",
        "The town is renowned for traditional leatherwork, whose products — sandals, saddles, and bags — are traded across the country."
    ),
    "dori-cities-v2": (
        "Dori ist ein traditionelles Drehkreuz für Fulani-Hirten und Tuareg-Karawanen und beherbergt einen lebhaften Vieh- und Salzmarkt.",
        "Dori a fulani pásztorok és tuareg karavánok hagyományos csomópontja, ahol élénk állat- és sópiac működik.",
        "Dori este un nod tradițional al păstorilor fulani și al caravanelor tuareg, găzduind o piață animată de vite și sare.",
        "Dori is a traditional crossroads for Fulani herders and Tuareg caravans, hosting a lively livestock and salt market."
    ),
    "tenkodogo-cities-v2": (
        "Tenkodogo gilt als Wiege der Mossi-Königreiche und Sitz des Naaba von Tenkodogo, eines der ältesten traditionellen Throne der Region.",
        "Tenkodogót a mosszi királyságok bölcsőjének tartják, és a régió egyik legrégebbi hagyományos trónjának, a tenkodogói Naaba székhelyének.",
        "Tenkodogo este considerat leagănul regatelor Mossi și reședința Naaba de Tenkodogo, unul dintre cele mai vechi tronuri tradiționale ale regiunii.",
        "Tenkodogo is considered the cradle of the Mossi kingdoms and the seat of the Naaba of Tenkodogo, one of the region's oldest traditional thrones."
    ),
    "fada-ngourma-cities-v2": (
        "Die Stadt ist Hauptstadt des historischen Königreichs der Gourmantché und ein wichtiges Zentrum der Honig- und Sheabutterproduktion.",
        "A város a Gourmantché történelmi királyság fővárosa, valamint fontos méz- és sheavajtermelő központ.",
        "Orașul este capitala regatului istoric Gourmantché și un centru important pentru producția de miere și unt de shea.",
        "The town is the capital of the historic Gourmantche Kingdom and an important center for honey and shea-butter production."
    ),
    "gaoua-cities-v2": (
        "Gaoua ist das Kulturzentrum der Lobi und beherbergt das wichtige Poni-Museum, das traditionelle Fetische und Wohnformen präsentiert.",
        "Gaoua a lobi nép kulturális központja, és itt található a Poni Múzeum, amely hagyományos fétiseket és lakásformákat mutat be.",
        "Gaoua este centrul cultural al poporului Lobi și găzduiește Muzeul Poni, dedicat fetișurilor tradiționale și locuințelor caracteristice.",
        "Gaoua is the cultural heart of the Lobi people and home to the Poni Museum, dedicated to traditional fetishes and dwellings."
    ),
    "manga-cities-v2": (
        "Manga ist Hauptstadt der Region Centre-Sud und ein landwirtschaftliches Zentrum mit Schwerpunkt auf Hirse, Sorghum und Erdnüssen.",
        "Manga a Centre-Sud régió fővárosa, mezőgazdasági központ, ahol köles, cirok és földimogyoró termesztése a meghatározó.",
        "Manga este capitala regiunii Centre-Sud și un centru agricol axat pe cultivarea meiului, sorgului și arahidelor.",
        "Manga is the capital of the Centre-Sud region and an agricultural hub specializing in millet, sorghum, and groundnuts."
    ),
    "ziniare-cities-v2": (
        "Ziniaré, Geburtsort des ehemaligen Präsidenten Thomas Sankara, beherbergt einen bekannten Tierpark und Gedenkstätten.",
        "Ziniaré, Thomas Sankara egykori elnök szülőhelye, ismert állatparkkal és emlékhelyekkel rendelkezik.",
        "Ziniaré, locul de naștere al fostului președinte Thomas Sankara, găzduiește un parc zoologic și locuri memoriale binecunoscute.",
        "Ziniare, the birthplace of former president Thomas Sankara, hosts a well-known wildlife park and memorial sites."
    ),
    "koupela-cities-v2": (
        "Koupéla liegt am Schnittpunkt der Hauptstraßen nach Niger und Togo und ist ein bedeutender Logistik- und Verkehrsknoten.",
        "Koupéla a Niger és Togo felé vezető főutak kereszteződésében fekszik, jelentős logisztikai és közlekedési csomópont.",
        "Koupéla se află la intersecția drumurilor principale spre Niger și Togo, fiind un important nod logistic și de transport.",
        "Koupela sits at the junction of the main roads to Niger and Togo, serving as a major logistics and transport hub."
    ),
    "pouytenga-cities-v2": (
        "Pouytenga beherbergt einen der größten Märkte des Landes, auf dem Vieh, Getreide und Manufakturwaren aus mehreren Nachbarländern gehandelt werden.",
        "Pouytenga az ország egyik legnagyobb piacának ad otthont, ahol állatokat, gabonát és iparcikkeket kereskednek több szomszédos országból.",
        "Pouytenga găzduiește una dintre cele mai mari piețe din țară, unde se comercializează animale, cereale și mărfuri industriale din mai multe țări vecine.",
        "Pouytenga hosts one of the country's largest markets, trading livestock, grain, and manufactured goods from several neighboring nations."
    ),
    "garango-cities-v2": (
        "Die Stadt ist bekannt für die kunstvolle Bissa-Töpferei und ein traditionelles Erntedankfest, das die regionale Identität prägt.",
        "A város a művészi Bissa fazekasság és a régió identitását meghatározó hagyományos hálaadó ünnep révén ismert.",
        "Orașul este cunoscut pentru olăritul artistic Bissa și pentru un festival tradițional al recoltei care definește identitatea regiunii.",
        "The town is famed for its artistic Bissa pottery and a traditional harvest festival that defines the region's identity."
    ),
    "hounde-cities-v2": (
        "Houndé wuchs durch den nahegelegenen Goldbergbau (Houndé-Mine) rasch zu einem regionalen Wirtschaftszentrum heran.",
        "Houndé a közeli aranybányászatnak (Houndé-bánya) köszönhetően rohamosan vált regionális gazdasági központtá.",
        "Houndé a devenit rapid un centru economic regional datorită mineritului aurifer învecinat (mina Houndé).",
        "Hounde grew rapidly into a regional economic center thanks to the nearby gold-mining operations (Hounde Mine)."
    ),
    "djibo-cities-v2":(
        "Djibo ist Hauptstadt der Provinz Soum und gilt als wichtigster Viehmarkt im nördlichen Sahel Burkina Fasos.",
        "Djibo a Soum tartomány fővárosa, és Burkina Faso északi száheli részének legfontosabb állatpiaca.",
        "Djibo este capitala provinciei Soum și este considerată cea mai importantă piață de vite din Sahelul nordic al Burkinei Faso.",
        "Djibo, capital of Soum Province, is considered the most important livestock market in Burkina Faso's northern Sahel."
    ),
    "leo-cities-v2": (
        "Léo entwickelte sich dank seiner Lage nahe der ghanaischen Grenze zu einem Knotenpunkt für Cashew- und Sheaprodukte.",
        "Léo a ghánai határ közelségének köszönhetően a kesudió- és sheatermékek csomópontjává vált.",
        "Léo a devenit, datorită apropierii de granița cu Ghana, un nod important pentru produsele din caju și shea.",
        "Leo's location near the Ghanaian border has made it a hub for cashew and shea-butter trade."
    ),
    "tougan-cities-v2": (
        "Tougan ist Hauptstadt der Provinz Sourou und ein Zentrum für bewässerten Reis- und Gemüseanbau am Sourou-Tal.",
        "Tougan a Sourou tartomány fővárosa, az öntözött rizs- és zöldségtermesztés központja a Sourou völgyében.",
        "Tougan este capitala provinciei Sourou și un centru pentru cultivarea irigată a orezului și legumelor în valea Sourou.",
        "Tougan is the capital of Sourou Province and a center for irrigated rice and vegetable farming in the Sourou Valley."
    ),
    "orodara-cities-v2": (
        "Orodara gilt als 'Obstgarten Burkina Fasos' mit ausgedehnten Mango-, Cashew- und Zitrusplantagen.",
        "Orodarát „Burkina Faso gyümölcsöskertjének” nevezik, hatalmas mangó-, kesudió- és citrusültetvényekkel.",
        "Orodara este supranumit „livada Burkinei Faso”, cu plantații întinse de mango, caju și citrice.",
        "Orodara is known as 'Burkina Faso's orchard,' with extensive mango, cashew, and citrus plantations."
    ),
    "po-cities-v2": (
        "Pô liegt nahe der ghanaischen Grenze und ist Eingangstor zum Wildreservat Nazinga, das für seine Elefantenpopulation bekannt ist.",
        "Pô a ghánai határ közelében fekszik, és a Nazinga vadrezervátum kapuja, amely elefántállományáról ismert.",
        "Pô se află aproape de granița cu Ghana și este poarta spre rezervația Nazinga, cunoscută pentru populația sa de elefanți.",
        "Po lies close to the Ghanaian border and is the gateway to the Nazinga Game Reserve, famed for its elephant population."
    ),
    "gourcy-cities-v2": (
        "Gourcy spielt eine wichtige Rolle als Verwaltungszentrum der Provinz Zondoma und Standort traditioneller Mossi-Feste.",
        "Gourcy fontos szerepet játszik a Zondoma tartomány közigazgatási központjaként, és hagyományos mosszi ünnepek helyszíne.",
        "Gourcy joacă un rol important ca centru administrativ al provinciei Zondoma și ca loc al festivităților tradiționale Mossi.",
        "Gourcy plays a key role as administrative center of Zondoma Province and as a venue for traditional Mossi festivities."
    ),
    "bousse-cities-v2": (
        "Boussé ist Sitz der Provinz Kourwéogo und ein typisches Marktstädtchen des Plateau-Central mit kleinbäuerlicher Wirtschaft.",
        "Boussé a Kourwéogo tartomány székhelye, a Plateau-Central tipikus kisvárosi piaca, kisparaszti gazdálkodással.",
        "Boussé este reședința provinciei Kourwéogo, un orășel tipic de piață din Plateau-Central, cu economie mic-țărănească.",
        "Bousse is the seat of Kourweogo Province, a typical Plateau-Central market town with smallholder farming."
    ),
    "sindou-cities-v2": (
        "Sindou ist berühmt für die zerklüfteten Sindou-Felsen, geologische Formationen aus Sandstein, die zu den eindrucksvollsten Naturwundern Westafrikas zählen.",
        "Sindou híres a tagolt Sindou-sziklákról, homokkőből álló geológiai formációkról, amelyek Nyugat-Afrika leglátványosabb természeti csodái közé tartoznak.",
        "Sindou este faimos pentru stâncile zimțate Sindou, formațiuni geologice din gresie, printre cele mai spectaculoase minuni naturale din Africa de Vest.",
        "Sindou is famed for the jagged Sindou Peaks, sandstone geological formations counted among West Africa's most striking natural wonders."
    ),
    "diebougou-cities-v2": (
        "Diébougou ist bekannt für seine heiligen Krokodilteiche und feine traditionelle Töpferwaren.",
        "Diébougou a szent krokodilos tavakról és a finom hagyományos kerámiákról ismert.",
        "Diébougou este cunoscut pentru iazurile sacre cu crocodili și pentru ceramica tradițională fină.",
        "Diebougou is known for its sacred crocodile ponds and fine traditional pottery."
    ),
    "nouna-cities-v2": (
        "Nouna ist Hauptstadt der Provinz Kossi und ein Forschungsstandort für Tropenmedizin (Centre de Recherche en Santé de Nouna).",
        "Nouna a Kossi tartomány fővárosa, és a trópusi orvostudomány kutatóhelye (Centre de Recherche en Santé de Nouna).",
        "Nouna este capitala provinciei Kossi și un centru de cercetare în medicina tropicală (Centre de Recherche en Santé de Nouna).",
        "Nouna is the capital of Kossi Province and a research site for tropical medicine (Centre de Recherche en Sante de Nouna)."
    ),
    "toma-cities-v2": (
        "Toma liegt im Land der Samo und ist bekannt für traditionelles Schmiedehandwerk sowie das Ringerfest 'Ahunyo'.",
        "Toma a szamo nép földjén fekszik, és a hagyományos kovácsmesterségéről, valamint az 'Ahunyo' birkózófesztiválról ismert.",
        "Toma se află pe pământul poporului Samo și este cunoscut pentru fierăria tradițională și pentru festivalul de lupte 'Ahunyo'.",
        "Toma sits in the Samo people's heartland and is known for traditional blacksmithing and the 'Ahunyo' wrestling festival."
    ),
    "zorgho-cities-v2": (
        "Zorgho ist Sitz der Provinz Ganzourgou und entwickelt sich zu einer wichtigen Trabantenstadt von Ouagadougou.",
        "Zorgho a Ganzourgou tartomány székhelye, és Ouagadougou fontos elővárosává növi ki magát.",
        "Zorgho este reședința provinciei Ganzourgou și se dezvoltă ca un important oraș-satelit al Ouagadougou.",
        "Zorgho is the seat of Ganzourgou Province and is emerging as a key satellite town of Ouagadougou."
    ),
    "pama-cities-v2": (
        "Pama dient als Eingangstor zum Pama-Reservat und zum grenzüberschreitenden W-Arli-Pendjari-Komplex, einem UNESCO-Weltnaturerbe.",
        "Pama a Pama rezervátum és a határokon átnyúló W-Arli-Pendjari komplexum – UNESCO világörökség – kapuja.",
        "Pama servește drept poartă spre rezervația Pama și spre complexul transfrontalier W-Arli-Pendjari, sit UNESCO.",
        "Pama serves as the gateway to the Pama Reserve and to the transboundary W-Arli-Pendjari complex, a UNESCO World Heritage site."
    ),
    "bogande-cities-v2": (
        "Bogandé ist Hauptstadt der Provinz Gnagna und ein wichtiges Zentrum für Sorghum- und Hirseanbau.",
        "Bogandé a Gnagna tartomány fővárosa, fontos cirok- és kölestermesztő központ.",
        "Bogandé este capitala provinciei Gnagna și un centru important pentru cultivarea sorgului și a meiului.",
        "Bogande is the capital of Gnagna Province and a major center for sorghum and millet cultivation."
    ),
    "yako-cities-v2": (
        "Yako ist Hauptstadt der Provinz Passoré und Geburtsort des Politikers Maurice Yaméogo, des ersten Präsidenten Burkina Fasos.",
        "Yako a Passoré tartomány fővárosa, és Maurice Yaméogo, Burkina Faso első elnökének szülővárosa.",
        "Yako este capitala provinciei Passoré și locul de naștere al politicianului Maurice Yaméogo, primul președinte al Burkinei Faso.",
        "Yako is the capital of Passore Province and the birthplace of Maurice Yameogo, the first president of Upper Volta (later Burkina Faso)."
    ),
    "sapouy-cities-v2": (
        "Sapouy ist Hauptstadt der Provinz Ziro und ein bekanntes Zentrum für Holzschnitzerei und Calebassen-Kunst.",
        "Sapouy a Ziro tartomány fővárosa, ismert fafaragó és kobaktök-művészeti központ.",
        "Sapouy este capitala provinciei Ziro și un centru cunoscut pentru sculptura în lemn și arta din tărtăcuțe.",
        "Sapouy is the capital of Ziro Province and a recognized center for wood carving and calabash art."
    ),
    "batie-cities-v2": (
        "Batié liegt im äußersten Süden Burkina Fasos auf einer leichten Hochfläche mit angenehmerem Mikroklima.",
        "Batié Burkina Faso legdélibb részén, egy enyhe fennsíkon fekszik, kellemesebb mikroklímával.",
        "Batié se află în extremul sud al Burkinei Faso, pe un mic platou cu un microclimat mai plăcut.",
        "Batie lies in the extreme south of Burkina Faso on a slight plateau with a milder microclimate."
    ),
    "kongoussi-cities-v2": (
        "Kongoussi liegt am Bam-See, dem zweitgrößten Süßwassersee des Landes, und ist Zentrum des Bohnen- und Zwiebelanbaus.",
        "Kongoussi a Bam-tó partján fekszik – az ország második legnagyobb édesvízi taván – és a bab- és hagymatermesztés központja.",
        "Kongoussi se află pe malul lacului Bam, al doilea cel mai mare lac de apă dulce al țării, și este centru pentru cultivarea fasolei și a cepei.",
        "Kongoussi sits on the shores of Lake Bam, the country's second-largest freshwater lake, and is a hub for bean and onion farming."
    ),
    "solenzo-cities-v2": (
        "Solenzo ist Hauptstadt der Provinz Banwa und liegt inmitten ausgedehnter Baumwoll- und Maisfelder.",
        "Solenzo a Banwa tartomány fővárosa, hatalmas gyapot- és kukoricaföldek között fekszik.",
        "Solenzo este capitala provinciei Banwa și se află în mijlocul unor întinse câmpuri de bumbac și porumb.",
        "Solenzo is the capital of Banwa Province, set amid sweeping cotton and maize fields."
    ),
    "titao-cities-v2": (
        "Titao ist Hauptstadt der Provinz Loroum und für seine traditionelle Pflanzenheilkunde und Töpferei bekannt.",
        "Titao a Loroum tartomány fővárosa, hagyományos gyógynövényhasználatáról és fazekasságáról ismert.",
        "Titao este capitala provinciei Loroum și este cunoscut pentru medicina tradițională pe bază de plante și pentru olărit.",
        "Titao is the capital of Loroum Province, known for its traditional herbal medicine and pottery."
    ),
    "boromo-cities-v2": (
        "Boromo dient als Eingangstor zum Nationalpark Deux Balés, in dem regelmäßig Elefantenherden zu beobachten sind.",
        "Boromo a Deux Balés Nemzeti Park kapuja, ahol gyakran megfigyelhetők elefántcsordák.",
        "Boromo servește drept poartă spre Parcul Național Deux Balés, unde pot fi observate frecvent turme de elefanți.",
        "Boromo is the gateway to Deux Bales National Park, where elephant herds are regularly seen."
    ),
    "dano-cities-v2": (
        "Dano ist Zentrum des Dagara-Volkes und beherbergt das von Architekt Diébédo Francis Kéré entworfene 'Centre pour la Terre'.",
        "Dano a dagara nép központja, és itt található a Diébédo Francis Kéré építész által tervezett 'Centre pour la Terre'.",
        "Dano este centrul poporului Dagara și găzduiește 'Centre pour la Terre', proiectat de arhitectul Diébédo Francis Kéré.",
        "Dano is the heartland of the Dagara people and home to the 'Centre pour la Terre' designed by architect Diebedo Francis Kere."
    ),
    "gayeri-cities-v2": (
        "Gayéri ist Hauptstadt der Provinz Komondjari und ein abgelegener Verwaltungsposten an der Grenze zum Singou-Reservat.",
        "Gayéri a Komondjari tartomány fővárosa, távoli közigazgatási központ a Singou-rezervátum határán.",
        "Gayéri este capitala provinciei Komondjari, un post administrativ izolat la limita rezervației Singou.",
        "Gayeri is the capital of Komondjari Province, a remote administrative post on the edge of the Singou Reserve."
    ),
    "sebba-cities-v2": (
        "Sebba ist Hauptstadt der Provinz Yagha und ein traditionelles Zentrum für Salz- und Viehhandel im östlichen Sahel.",
        "Sebba a Yagha tartomány fővárosa, a keleti Száhel hagyományos só- és állatkereskedelmi központja.",
        "Sebba este capitala provinciei Yagha și un centru tradițional pentru comerțul cu sare și animale în Sahelul estic.",
        "Sebba is the capital of Yagha Province and a traditional salt- and livestock-trading center in the eastern Sahel."
    ),
    "ouargaye-cities-v2": (
        "Ouargaye ist Hauptstadt der Provinz Koulpélogo und liegt nahe der togolesischen Grenze, an einer alten Karawanenroute.",
        "Ouargaye a Koulpélogo tartomány fővárosa, és a togói határ közelében, egy ősi karavánút mentén fekszik.",
        "Ouargaye este capitala provinciei Koulpélogo și se află aproape de granița cu Togo, pe o veche rută a caravanelor.",
        "Ouargaye is the capital of Koulpelogo Province, lying near the Togolese border on an ancient caravan route."
    ),
    "reo-cities-v2": (
        "Réo ist Hauptstadt der Provinz Sanguié und ein kulturelles Zentrum der Lyélé-Volksgruppe innerhalb der Gurunsi-Familie.",
        "Réo a Sanguié tartomány fővárosa, a Lyélé népcsoport kulturális központja a Gurunsi családon belül.",
        "Réo este capitala provinciei Sanguié și un centru cultural al grupului etnic Lyélé din cadrul familiei Gurunsi.",
        "Reo is the capital of Sanguie Province and a cultural center of the Lyele people, part of the wider Gurunsi family."
    ),
    "kombissiri-cities-v2": (
        "Kombissiri ist bekannt für ein bedeutendes Süßkartoffel- und Tomaten-Produktionsgebiet, das die Hauptstadt Ouagadougou versorgt.",
        "Kombissiri a fővárost, Ouagadougout ellátó jelentős édesburgonya- és paradicsom-termesztő terület.",
        "Kombissiri este cunoscut pentru o zonă importantă de producție de cartofi dulci și roșii, care aprovizionează capitala Ouagadougou.",
        "Kombissiri is known as a major sweet-potato and tomato producing area, supplying the capital Ouagadougou."
    ),
    "aribinda-cities-v2": (
        "Aribinda liegt am Rand eines Massivs mit prähistorischen Felsgravuren und gilt als historisches Refugium der Kurumba.",
        "Aribinda egy hegyvonulat lábánál fekszik, ahol ősi sziklavésetek találhatók, és a kurumba nép történelmi menedékeként ismert.",
        "Aribinda se află la marginea unui masiv cu gravuri rupestre preistorice și este considerată refugiu istoric al poporului Kurumba.",
        "Aribinda lies at the edge of a massif with prehistoric rock engravings and is regarded as a historic refuge of the Kurumba people."
    ),
    "bere-cities-v2": (
        "Béré ist eine landwirtschaftliche Gemeinde der Provinz Zoundwéogo, geprägt von Hirse- und Erdnussfeldern.",
        "Béré a Zoundwéogo tartomány mezőgazdasági települése, amelyet köles- és földimogyoró-földek vesznek körül.",
        "Béré este o comună agricolă din provincia Zoundwéogo, dominată de câmpuri de mei și arahide.",
        "Bere is an agricultural commune of Zoundweogo Province, dominated by millet and groundnut fields."
    ),
    "bama-cities-v2": (
        "Bama ist bekannt für seine ausgedehnte Bewässerungsanlage 'Vallée de Bama', das größte Reisanbaugebiet im Westen Burkina Fasos.",
        "Bama híres a kiterjedt 'Vallée de Bama' öntözőrendszeréről, amely Burkina Faso nyugati részének legnagyobb rizstermesztő területe.",
        "Bama este cunoscut pentru sistemul amplu de irigații 'Vallée de Bama', cea mai mare zonă de cultivare a orezului din vestul Burkinei Faso.",
        "Bama is famed for the extensive 'Vallee de Bama' irrigation scheme, the largest rice-growing area in western Burkina Faso."
    ),
    "beregadougou-cities-v2": (
        "Bérégadougou liegt nahe den Wasserfällen Karfiguéla und ist Standort einer historischen Zuckerrohrplantage (SOSUCO).",
        "Bérégadougou a Karfiguéla-vízesések közelében fekszik, és egy történelmi cukornádültetvény (SOSUCO) helyszíne.",
        "Bérégadougou se află aproape de cascadele Karfiguéla și este sediul unei plantații istorice de trestie de zahăr (SOSUCO).",
        "Beregadougou lies near the Karfiguela Waterfalls and is the site of a historic sugar-cane plantation (SOSUCO)."
    ),
    "bingo-cities-v2": (
        "Bingo ist eine ländliche Gemeinde der Provinz Boulkiemdé, geprägt von Mossi-Höfen und Sorghumfeldern.",
        "Bingo a Boulkiemdé tartomány vidéki települése, mosszi tanyákkal és cirokföldekkel.",
        "Bingo este o comună rurală din provincia Boulkiemdé, definită de gospodării Mossi și câmpuri de sorg.",
        "Bingo is a rural commune of Boulkiemde Province, defined by Mossi homesteads and sorghum fields."
    ),
    "bittou-cities-v2": (
        "Bittou ist eine wichtige Grenzstadt zu Togo und Ghana mit einem regionalen Großhandelsmarkt für Konsumgüter.",
        "Bittou fontos Togo és Ghána felé eső határváros, regionális nagykereskedelmi piaccal.",
        "Bittou este un important oraș de frontieră cu Togo și Ghana, cu o piață regională en-gros de bunuri de larg consum.",
        "Bittou is an important border town with Togo and Ghana, hosting a regional wholesale market for consumer goods."
    ),
    "boni-cities-v2": (
        "Boni liegt an der Nationalstraße N1 zwischen Ouagadougou und Bobo-Dioulasso und profitiert vom Transitverkehr.",
        "Boni az Ouagadougou és Bobo-Dioulasso közötti N1-es nemzeti úton fekszik, és előnyt élvez az átmenő forgalomból.",
        "Boni se află pe drumul național N1, între Ouagadougou și Bobo-Dioulasso, beneficiind de traficul de tranzit.",
        "Boni stands on national highway N1 between Ouagadougou and Bobo-Dioulasso, benefiting from heavy transit traffic."
    ),
    "boulsa-cities-v2": (
        "Boulsa ist Hauptstadt der Provinz Namentenga und Sitz traditioneller Mossi-Höfe sowie kunsthandwerklicher Werkstätten.",
        "Boulsa a Namentenga tartomány fővárosa, hagyományos mosszi udvarok és kézműves műhelyek székhelye.",
        "Boulsa este capitala provinciei Namentenga și sediul curților tradiționale Mossi și atelierelor de artizanat.",
        "Boulsa is the capital of Namentenga Province, seat of traditional Mossi courts and artisan workshops."
    ),
    "dakola-cities-v2": (
        "Dakola ist der wichtigste offizielle Grenzposten zwischen Burkina Faso und Ghana an der Hauptstraße nach Tamale.",
        "Dakola Burkina Faso és Ghána közötti legfontosabb hivatalos határátkelő a Tamale felé vezető főúton.",
        "Dakola este principalul punct oficial de frontieră dintre Burkina Faso și Ghana, pe drumul principal spre Tamale.",
        "Dakola is the main official border crossing between Burkina Faso and Ghana on the highway to Tamale."
    ),
    "dapelogo-cities-v2": (
        "Dapélogo ist eine landwirtschaftliche Gemeinde nördlich von Ouagadougou, die die Stadt mit Gemüse und Geflügel versorgt.",
        "Dapélogo Ouagadougoutól északra fekvő mezőgazdasági település, amely zöldséggel és baromfival látja el a fővárost.",
        "Dapélogo este o comună agricolă la nord de Ouagadougou, care aprovizionează orașul cu legume și carne de pasăre.",
        "Dapelogo is an agricultural commune north of Ouagadougou, supplying the city with vegetables and poultry."
    ),
    "diabo-cities-v2": (
        "Diabo ist eine ländliche Gemeinde der Provinz Gourma mit lebendigen Gourmantché-Traditionen.",
        "Diabo a Gourma tartomány vidéki települése, élénk gourmantché hagyományokkal.",
        "Diabo este o comună rurală din provincia Gourma, cu tradiții Gourmantché vii.",
        "Diabo is a rural commune in Gourma Province, sustained by vibrant Gourmantche traditions."
    ),
    "diapaga-cities-v2": (
        "Diapaga ist Hauptstadt der Provinz Tapoa und das wichtigste Eingangstor zum Arli-Nationalpark im Osten des Landes.",
        "Diapaga a Tapoa tartomány fővárosa, az ország keleti részén található Arli Nemzeti Park legfontosabb kapuja.",
        "Diapaga este capitala provinciei Tapoa și principala poartă spre Parcul Național Arli, în estul țării.",
        "Diapaga is the capital of Tapoa Province and the principal gateway to Arli National Park in the country's east."
    ),
    "doulougou-cities-v2": (
        "Doulougou ist eine kleine Mossi-Gemeinde der Provinz Bazèga mit traditioneller Hirsewirtschaft.",
        "Doulougou a Bazèga tartomány kis mosszi települése, hagyományos köles-gazdálkodással.",
        "Doulougou este o mică comună Mossi din provincia Bazèga, cu economie tradițională bazată pe mei.",
        "Doulougou is a small Mossi commune in Bazega Province, with a traditional millet-based economy."
    ),
    "gorom-gorom-cities-v2": (
        "Gorom-Gorom ist berühmt für seinen 'Donnerstagsmarkt', auf dem Tuareg, Bella, Fulani und Songhai gemeinsam handeln.",
        "Gorom-Gorom a 'csütörtöki piacáról' híres, ahol tuaregek, bella, fulani és songhai közösen kereskednek.",
        "Gorom-Gorom este faimos pentru 'piața de joi', unde Tuareg, Bella, Fulani și Songhai fac comerț împreună.",
        "Gorom-Gorom is famous for its 'Thursday Market,' where Tuareg, Bella, Fulani, and Songhai trade side by side."
    ),
    "kayan-cities-v2": (
        "Kayan ist eine kleine Gemeinde im Westen Burkina Fasos, geprägt von Bobo-Bauernhöfen und Hirseanbau.",
        "Kayan kis település Burkina Faso nyugati részén, bobo tanyákkal és kölestermesztéssel.",
        "Kayan este o comună mică din vestul Burkinei Faso, definită de gospodării Bobo și de cultivarea meiului.",
        "Kayan is a small commune in western Burkina Faso, shaped by Bobo homesteads and millet farming."
    ),
    "kordie-cities-v2": (
        "Kordié ist eine ländliche Gemeinde der Provinz Sanguié mit charakteristischer Lehmbauarchitektur der Gurunsi.",
        "Kordié a Sanguié tartomány vidéki települése, jellegzetes Gurunsi sárépítészeti hagyománnyal.",
        "Kordié este o comună rurală din provincia Sanguié, cu arhitectură caracteristică de lut a poporului Gurunsi.",
        "Kordie is a rural commune in Sanguie Province, marked by the Gurunsi people's distinctive mud-built architecture."
    ),
}

def gen(lang, item):
    name = item["name_native"][lang]  # localized name
    region = REGIONS[item["parent"]][["de","hu","ro","en"].index(lang)]
    climate = CLIMATE[item["parent"]][["de","hu","ro","en"].index(lang)]
    nug = POI_NUGGETS[item["id"]][["de","hu","ro","en"].index(lang)]
    typ = item["type"]
    coords = item["coords"]
    is_capital = (typ == "state-capital")

    if lang == "de":
        type_word = "Hauptstadt" if is_capital else "Stadt"
        body = (
            f"{name} ist eine {type_word} in der Region {region} im Westafrikanischen Binnenland Burkina Fasos und liegt bei den Koordinaten {coords}. "
            f"Die Siedlung gehört zum Sahel- und Sudanraum und prägt sich durch {climate}, was die landwirtschaftlichen Zyklen, die Wasserwirtschaft und das Alltagsleben der Bewohnerinnen und Bewohner bestimmt. "
            f"{nug} "
            f"Die lokale Wirtschaft stützt sich vor allem auf Selbstversorgungslandwirtschaft (Hirse, Sorghum, Mais, Erdnüsse, Sesam und in günstigen Lagen Reis), auf Viehzucht (Rinder, Ziegen, Schafe und Geflügel) sowie auf Handwerk wie Schmieden, Weberei und Töpferei. "
            f"Wöchentliche Märkte sind sozialer Höhepunkt und Treffpunkt für Händlerinnen und Händler aus mehreren Ethnien – Mossi, Bobo, Fulani, Gourmantché, Bissa, Lobi oder Sénoufo, je nach Region. "
            f"Schulen, Gesundheitsposten (CSPS), Moscheen und kleinere christliche Gemeinden bilden das institutionelle Rückgrat. "
            f"Wie überall im Land prägen Sicherheits- und Klimafragen den Alltag und fördern Solidaritätsstrukturen, die für die Mossi-, Sahel- und Gurunsi-Kulturen charakteristisch sind. "
            f"Geografie und Sachkunde K6/K7 — Westafrika, Sahelzone und ländlich-urbane Wechselwirkungen."
        )
    elif lang == "hu":
        type_word = "fővárosa" if is_capital else "városa"
        body = (
            f"{name} a nyugat-afrikai Burkina Faso {region} régiójának {type_word}, amely a {coords} koordinátákon helyezkedik el a Száhel és a Szudán átmeneti zónájában. "
            f"Éghajlata {climate}, ami meghatározza a mezőgazdasági ciklusokat, a vízgazdálkodást és a lakók mindennapi életét. "
            f"{nug} "
            f"A helyi gazdaság gerincét az önellátó földművelés (köles, cirok, kukorica, földimogyoró, szezám, kedvező területeken rizs), az állattartás (szarvasmarha, kecske, juh, baromfi), valamint a hagyományos kézművesség (kovácsolás, szövés, fazekasság, sheavajkészítés) adja. "
            f"A heti piacok a társadalmi élet központi eseményei, ahol mosszi, bobo, fulani, gourmantché, bissza, lobi vagy szénufo kereskedők találkoznak – attól függően, melyik régióban járunk. "
            f"Az iskolák, az egészségügyi alapellátást nyújtó CSPS-állomások, a mecsetek és a kisebb keresztény közösségek alkotják az intézményi gerincet. "
            f"A biztonsági kihívások és a klímaváltozás hatásai – aszály, talajerózió – a mindennapok részei, ezért a közösségi szolidaritás különösen erős a mosszi, száheli és gurunszi kultúrákban. "
            f"Földrajz és környezetismeret K6/K7 — Nyugat-Afrika, Száhel-öv és vidék-város kölcsönhatások."
        )
    elif lang == "ro":
        type_word = "capitala" if is_capital else "orașul"
        body = (
            f"{name} este {type_word} situat în regiunea {region} din Burkina Faso, stat fără ieșire la mare din Africa de Vest, la coordonatele {coords}. "
            f"Așezarea aparține zonei de tranziție dintre Sahel și savana sudaneză și se caracterizează prin {climate}, ceea ce definește ciclurile agricole, gestionarea apei și viața cotidiană a locuitorilor. "
            f"{nug} "
            f"Economia locală se sprijină în principal pe agricultura de subzistență (mei, sorg, porumb, arahide, susan și, în zonele favorabile, orez), pe creșterea animalelor (vite, capre, oi, păsări) și pe meșteșuguri tradiționale precum fierăria, țesutul, olăritul și prelucrarea untului de shea. "
            f"Piețele săptămânale reprezintă centrul vieții sociale, unde se întâlnesc comercianți Mossi, Bobo, Fulani, Gourmantché, Bissa, Lobi sau Senufo, în funcție de regiune. "
            f"Școlile, dispensarele CSPS, moscheile și comunitățile creștine mai mici formează coloana vertebrală instituțională. "
            f"Provocările de securitate și schimbările climatice – seceta, eroziunea solului – fac parte din cotidian, iar solidaritatea comunitară rămâne deosebit de puternică în culturile Mossi, sahelian-fulani și Gurunsi. "
            f"Geografie K6/K7 — Africa de Vest, fâșia Sahel și interacțiuni rural-urbane."
        )
    else:  # en
        type_word = "capital city" if is_capital else "town"
        body = (
            f"{name} is a {type_word} located in the {region} region of Burkina Faso, a landlocked country in West Africa, at the coordinates {coords}. "
            f"The settlement belongs to the Sahel-Sudanian transition belt and is shaped by {climate}, which dictates agricultural cycles, water management, and everyday life. "
            f"{nug} "
            f"The local economy is mainly built on subsistence farming (millet, sorghum, maize, groundnuts, sesame, and rice where conditions allow), animal husbandry (cattle, goats, sheep, and poultry), and traditional crafts such as blacksmithing, weaving, pottery, and shea-butter processing. "
            f"Weekly markets are the social highlight and a meeting point for traders from several ethnic groups — Mossi, Bobo, Fulani, Gourmantche, Bissa, Lobi, or Senufo, depending on the region. "
            f"Schools, primary health centers (CSPS), mosques, and smaller Christian congregations form the institutional backbone. "
            f"As elsewhere in the country, security concerns and climate pressures — drought and soil erosion — shape daily routines and reinforce the community-solidarity networks characteristic of Mossi, Sahelian-Fulani, and Gurunsi cultures. "
            f"Geography K6/K7 — West Africa, the Sahel belt, and rural-urban interactions."
        )
    return body


def main():
    src = open(PATH, encoding="utf-8").read()
    items = json.load(open(LIST, encoding="utf-8"))

    # Need localized names per id (parse all 4 langs)
    poi_re = re.compile(r'\{\s*id:\s*"([^"]+)"', re.S)
    blocks = []
    for m in poi_re.finditer(src):
        blocks.append((m.start(), m.group(1)))
    by_id = {}
    for i, (start, pid) in enumerate(blocks):
        end = blocks[i+1][0] if i+1 < len(blocks) else len(src)
        block = src[start:end]
        nb = re.search(r'name:\s*\{([^}]+)\}', block)
        names = {}
        if nb:
            for lg in ("de","hu","ro","en"):
                mm = re.search(r'\b'+lg+r':\s*"([^"]+)"', nb.group(1))
                if mm: names[lg] = mm.group(1)
        by_id[pid] = {"start": start, "end": end, "block": block, "names": names}

    new_src = src
    # Process from bottom up to keep offsets valid
    items_with_pos = []
    for it in items:
        if not it["missing"]:
            continue
        if it["id"] not in POI_NUGGETS:
            print("MISSING NUGGET:", it["id"], file=sys.stderr)
            continue
        b = by_id[it["id"]]
        item_full = dict(it)
        item_full["name_native"] = b["names"]
        items_with_pos.append((b["start"], item_full, b))

    # Sort descending by start so edits don't shift earlier offsets
    items_with_pos.sort(key=lambda x: x[0], reverse=True)

    fill_count = 0
    poi_count = 0

    for start, item, b in items_with_pos:
        block = b["block"]
        m = re.search(r'descriptionAdvanced:\s*\{', block)
        if not m: continue
        i2 = m.end(); depth = 1
        while i2 < len(block) and depth > 0:
            c = block[i2]
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            i2 += 1
        inner_start = m.end()
        inner_end = i2 - 1
        inner = block[inner_start:inner_end]

        # parse existing langs
        existing = {}
        for lg in ("de","hu","ro","en"):
            mm = re.search(r'\b'+lg+r':\s*"((?:[^"\\]|\\.)*)"', inner)
            if mm and len(mm.group(1)) >= 50:
                existing[lg] = mm.group(1)

        # generate missing
        new_parts = {}
        for lg in ("de","hu","ro","en"):
            if lg in existing:
                new_parts[lg] = existing[lg]
            else:
                txt = gen(lg, item)
                # ensure no double-quotes problem
                txt = txt.replace('"', "'")
                if len(txt) < 600:
                    print("SHORT", item["id"], lg, len(txt), file=sys.stderr)
                new_parts[lg] = txt
                fill_count += 1

        # rebuild inner content
        order = ["de","hu","ro","en"]
        new_inner = ", ".join(f'{lg}: "{new_parts[lg]}"' for lg in order)
        new_inner = " " + new_inner + " "

        # Replace in new_src
        abs_inner_start = start + inner_start
        abs_inner_end = start + inner_end
        new_src = new_src[:abs_inner_start] + new_inner + new_src[abs_inner_end:]
        poi_count += 1

    open(PATH, "w", encoding="utf-8").write(new_src)
    print(f"Updated {poi_count} POI blocks, filled {fill_count} language slots.")

if __name__ == "__main__":
    main()
