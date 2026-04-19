import type { POI } from "./poi";

// ============================================================================
// ROMANIA — POI (Points of Interest)
// 1 ország, 42 régió (41 județ + Bucureşti), városok, folyók, hegyek,
// tavak, tenger, történelmi helyek, látnivalók.
// Nyelvek: de, hu, ro, en (minden mezőben). Koordináták: [lon, lat].
// Kép útvonalak: /geo-images/romania/{id}.webp
// Címer útvonalak: /geo-images/romania/coa_{id}.svg
// ============================================================================

// ---------------------------------------------------------------------------
// 1) ORSZÁG
// ---------------------------------------------------------------------------
export const romaniaCountry: POI[] = [
  {
    id: "RO",
    type: "country",
    parent: "EU",
    coords: [24.9668, 45.9432],
    name: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" },
    description: {
      de: "Land in Südosteuropa am Schwarzen Meer, geprägt von den Karpaten und dem Donaudelta.",
      hu: "Délkelet-európai ország a Fekete-tenger partján, a Kárpátokkal és a Duna-deltával.",
      ro: "Țară din sud-estul Europei, la Marea Neagră, cu Carpații și Delta Dunării.",
      en: "Country in Southeast Europe on the Black Sea, marked by the Carpathians and Danube Delta.",
    },
    facts: {
      de: [
        "Hauptstadt: Bukarest.",
        "Amtssprache: Rumänisch.",
        "Fläche: 238.397 km².",
        "EU-Mitglied seit 2007.",
        "Karpaten bedecken ein Drittel des Landes.",
      ],
      hu: [
        "Főváros: Bukarest.",
        "Hivatalos nyelv: román.",
        "Területe: 238 397 km².",
        "2007 óta EU-tag.",
        "A Kárpátok az ország egyharmadát borítják.",
      ],
      ro: [
        "Capitala: București.",
        "Limba oficială: româna.",
        "Suprafață: 238.397 km².",
        "Membru UE din 2007.",
        "Carpații acoperă o treime din țară.",
      ],
      en: [
        "Capital: Bucharest.",
        "Official language: Romanian.",
        "Area: 238,397 km².",
        "EU member since 2007.",
        "The Carpathians cover a third of the country.",
      ],
    },
    area: 238397,
    subjects: ["sachkunde", "geographie", "geschichte"],
    grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/RO.webp",
    
  },
];

// ---------------------------------------------------------------------------
// 2) RÉGIÓK (41 județ + Bucureşti)
// ---------------------------------------------------------------------------
export const romaniaRegions: POI[] = [
  {
    id: "RO-AB", type: "region", parent: "RO", coords: [23.5806, 46.0667],
    name: { de: "Alba", hu: "Fehér", ro: "Alba", en: "Alba" },
    description: { de: "Kreis in Siebenbürgen rund um Alba Iulia.", hu: "Erdélyi megye Gyulafehérvár központtal.", ro: "Județ în Transilvania, centrul Alba Iulia.", en: "County in Transylvania, centered on Alba Iulia." },
    facts: { de: ["Krönungsstadt Alba Iulia.", "Weinbau im Târnave-Tal.", "Apuseni-Gebirge."], hu: ["Gyulafehérvár koronázóvárosa.", "Küküllő-menti szőlőtermelés.", "Erdélyi-szigethegység."], ro: ["Alba Iulia, oraș al încoronării.", "Viticultură pe Târnave.", "Munții Apuseni."], en: ["Coronation city Alba Iulia.", "Viticulture along the Târnave.", "Apuseni Mountains."] },
    image: "/geo-images/romania/RO-AB.webp",
  },
  {
    id: "RO-AG", type: "region", parent: "RO", coords: [24.8733, 44.8563],
    name: { de: "Argeș", hu: "Argeș", ro: "Argeș", en: "Argeș" },
    description: { de: "Kreis in Muntenien mit Sitz in Pitești.", hu: "Munténiai megye Pitești székhellyel.", ro: "Județ în Muntenia, reședința Pitești.", en: "County in Muntenia with seat in Pitești." },
    facts: { de: ["Dacia-Autos aus Mioveni.", "Burg Poenari (Drăculești).", "Transfăgărășan-Straße."], hu: ["Dacia-autók Mioveniben.", "Poenari vára (Drăculești).", "Transzfogarasi út."], ro: ["Automobile Dacia la Mioveni.", "Cetatea Poenari.", "Transfăgărășan."], en: ["Dacia cars from Mioveni.", "Poenari Citadel (Drăculești).", "Transfăgărășan road."] },
    image: "/geo-images/romania/RO-AG.webp",
  },
  {
    id: "RO-AR", type: "region", parent: "RO", coords: [21.5, 46.2],
    name: { de: "Arad", hu: "Arad", ro: "Arad", en: "Arad" },
    description: { de: "Westrumänischer Kreis an der ungarischen Grenze.", hu: "Nyugat-romániai megye a magyar határon.", ro: "Județ din vestul României, la granița cu Ungaria.", en: "Western Romanian county on the Hungarian border." },
    facts: { de: ["Stadt der 13 Märtyrer von 1849.", "Zitadelle von Arad.", "Mureș-Tal."], hu: ["Az 1849-es 13 vértanú városa.", "Aradi vár.", "Maros völgye."], ro: ["Orașul celor 13 martiri din 1849.", "Cetatea Aradului.", "Valea Mureșului."], en: ["City of the 13 Martyrs of 1849.", "Arad Citadel.", "Mureș Valley."] },
    image: "/geo-images/romania/RO-AR.webp",
  },
  {
    id: "RO-B", type: "region", parent: "RO", coords: [26.1025, 44.4268],
    name: { de: "Bukarest", hu: "Bukarest", ro: "București", en: "Bucharest" },
    description: { de: "Hauptstadt Rumäniens – die größte Stadt des Landes.", hu: "Románia fővárosa – az ország legnagyobb városa.", ro: "Capitala României – cel mai mare oraș al țării.", en: "Capital of Romania – the country's largest city." },
    facts: { de: ["Rund 1,9 Mio. Einwohner.", "Parlamentspalast: zweitgrößtes Gebäude der Welt.", "Triumphbogen (Arcul de Triumf)."], hu: ["Kb. 1,9 millió lakos.", "Parlament Palotája: a világ második legnagyobb épülete.", "Diadalív."], ro: ["Aproximativ 1,9 milioane de locuitori.", "Palatul Parlamentului – al doilea cel mai mare clădire din lume.", "Arcul de Triumf."], en: ["About 1.9 million inhabitants.", "Palace of the Parliament – world's second-largest building.", "Arch of Triumph."] },
    image: "/geo-images/romania/RO-B.webp",
  },
  {
    id: "RO-BC", type: "region", parent: "RO", coords: [26.917, 46.57],
    name: { de: "Bacău", hu: "Bákó", ro: "Bacău", en: "Bacău" },
    description: { de: "Moldauischer Kreis am Siret.", hu: "Moldvai megye a Szeret mentén.", ro: "Județ moldovean pe râul Siret.", en: "Moldavian county along the Siret river." },
    facts: { de: ["Industriezentrum Bacău.", "Lacul Bicaz in der Nähe.", "Ceahlău-Gebirge im Westen."], hu: ["Bákó ipari központ.", "A közeli Bicaz-tó.", "Csalhó-hegység nyugaton."], ro: ["Centru industrial Bacău.", "Lacul Bicaz în apropiere.", "Munții Ceahlău la vest."], en: ["Industrial hub Bacău.", "Nearby Lake Bicaz.", "Ceahlău Mountains to the west."] },
    image: "/geo-images/romania/RO-BC.webp",
  },
  {
    id: "RO-BH", type: "region", parent: "RO", coords: [22.1, 46.9667],
    name: { de: "Bihor", hu: "Bihar", ro: "Bihor", en: "Bihor" },
    description: { de: "Kreis in West-Siebenbürgen mit Sitz Oradea.", hu: "Nyugat-erdélyi megye Nagyvárad székhellyel.", ro: "Județ în vestul Transilvaniei, reședința Oradea.", en: "Western Transylvanian county, seat Oradea." },
    facts: { de: ["Jugendstil-Stadt Oradea.", "Apuseni-Höhlen (Scărișoara).", "Thermalbäder Băile Felix."], hu: ["Nagyvárad szecessziós városa.", "Bihari-barlangok (Scărișoara).", "Félixfürdő termálvizei."], ro: ["Oradea, oraș Art Nouveau.", "Peșteri în Apuseni (Scărișoara).", "Băile Felix."], en: ["Art Nouveau Oradea.", "Apuseni caves (Scărișoara).", "Băile Felix thermal baths."] },
    image: "/geo-images/romania/RO-BH.webp",
  },
  {
    id: "RO-BN", type: "region", parent: "RO", coords: [24.5, 47.15],
    name: { de: "Bistritz-Nassod", hu: "Beszterce-Naszód", ro: "Bistrița-Năsăud", en: "Bistrița-Năsăud" },
    description: { de: "Nordsiebenbürgischer Kreis am Rande der Ostkarpaten.", hu: "Észak-erdélyi megye a Keleti-Kárpátok szélén.", ro: "Județ în nordul Transilvaniei, la marginea Carpaților Orientali.", en: "Northern Transylvanian county at the edge of the Eastern Carpathians." },
    facts: { de: ["Sächsische Stadt Bistritz.", "Rodna-Gebirge.", "Borgopass (Bram Stokers Dracula)."], hu: ["Beszterce szász város.", "Radnai-havasok.", "Borgói-hágó (Bram Stoker Draculája)."], ro: ["Orașul săsesc Bistrița.", "Munții Rodnei.", "Pasul Tihuța (Dracula de Bram Stoker)."], en: ["Saxon town of Bistritz.", "Rodna Mountains.", "Tihuța Pass (Bram Stoker's Dracula)."] },
    image: "/geo-images/romania/RO-BN.webp",
  },
  {
    id: "RO-BR", type: "region", parent: "RO", coords: [27.9667, 45.2667],
    name: { de: "Brăila", hu: "Brăila", ro: "Brăila", en: "Brăila" },
    description: { de: "Kreis in der Walachei an der Donau.", hu: "Havasalföldi megye a Duna mentén.", ro: "Județ în Muntenia, pe Dunăre.", en: "County in Wallachia, on the Danube." },
    facts: { de: ["Donauhafen Brăila.", "Kleine Brăila-Insel (Balta).", "Kornkammer."], hu: ["Brăila dunai kikötő.", "Kis Brăila-sziget (Balta).", "Gabonatermő vidék."], ro: ["Port dunărean Brăila.", "Balta Brăilei.", "Zonă agricolă (grâu)."], en: ["Danube port Brăila.", "Small Brăila Wetland (Balta).", "Grain-producing region."] },
    image: "/geo-images/romania/RO-BR.webp",
  },
  {
    id: "RO-BT", type: "region", parent: "RO", coords: [26.65, 47.75],
    name: { de: "Botoșani", hu: "Botosán", ro: "Botoșani", en: "Botoșani" },
    description: { de: "Nordostkreis an der Grenze zur Ukraine.", hu: "Északkeleti megye az ukrán határon.", ro: "Județ în nord-estul României, la granița cu Ucraina.", en: "Northeastern county on the Ukrainian border." },
    facts: { de: ["Heimat des Dichters Mihai Eminescu.", "Putna-Kloster in der Nähe.", "Agrarregion."], hu: ["Mihai Eminescu költő szülőföldje.", "A közeli Putna kolostor.", "Mezőgazdasági vidék."], ro: ["Locul natal al lui Mihai Eminescu.", "Mănăstirea Putna în apropiere.", "Zonă agricolă."], en: ["Birthplace of poet Mihai Eminescu.", "Nearby Putna Monastery.", "Agrarian region."] },
    image: "/geo-images/romania/RO-BT.webp",
  },
  {
    id: "RO-BV", type: "region", parent: "RO", coords: [25.5, 45.75],
    name: { de: "Kronstadt", hu: "Brassó", ro: "Brașov", en: "Brașov" },
    description: { de: "Siebenbürgischer Kreis im Herzen der Karpaten.", hu: "Erdélyi megye a Kárpátok szívében.", ro: "Județ transilvănean în inima Carpaților.", en: "Transylvanian county in the heart of the Carpathians." },
    facts: { de: ["Schloss Bran (Dracula).", "Schwarze Kirche in Kronstadt.", "Skigebiet Poiana Brașov."], hu: ["Bran vára (Drakula).", "Brassói Fekete templom.", "Poiana Brașov síterep."], ro: ["Castelul Bran.", "Biserica Neagră din Brașov.", "Stațiunea Poiana Brașov."], en: ["Bran Castle (Dracula).", "Black Church in Brașov.", "Poiana Brașov ski resort."] },
    image: "/geo-images/romania/RO-BV.webp",
  },
  {
    id: "RO-BZ", type: "region", parent: "RO", coords: [26.8167, 45.15],
    name: { de: "Buzău", hu: "Buzău", ro: "Buzău", en: "Buzău" },
    description: { de: "Kreis am Übergang zwischen Karpaten und Tiefebene.", hu: "Megye a Kárpátok és az alföld határán.", ro: "Județ între Carpați și câmpie.", en: "County between the Carpathians and the plain." },
    facts: { de: ["Schlammvulkane (Vulcanii Noroioși).", "Felsenkapellen von Bozioru.", "Weinbau von Pietroasa."], hu: ["Iszapvulkánok (Vulcanii Noroioși).", "Bozioru sziklatemplomai.", "Pietroasai borvidék."], ro: ["Vulcanii Noroioși.", "Așezările rupestre din Bozioru.", "Podgoria Pietroasa."], en: ["Mud Volcanoes (Vulcanii Noroioși).", "Rock-hewn chapels of Bozioru.", "Pietroasa wine region."] },
    image: "/geo-images/romania/RO-BZ.webp",
  },
  {
    id: "RO-CJ", type: "region", parent: "RO", coords: [23.6236, 46.7712],
    name: { de: "Klausenburg", hu: "Kolozs", ro: "Cluj", en: "Cluj" },
    description: { de: "Herz Siebenbürgens mit Sitz Cluj-Napoca.", hu: "Erdély szíve, székhelye Kolozsvár.", ro: "Inima Transilvaniei, reședința Cluj-Napoca.", en: "Heart of Transylvania, seat Cluj-Napoca." },
    facts: { de: ["Universitätsstadt Cluj-Napoca.", "Salzbergwerk Turda.", "Apuseni-Gebirge."], hu: ["Kolozsvár egyetemváros.", "Tordai sóbánya.", "Erdélyi-szigethegység."], ro: ["Cluj-Napoca, oraș universitar.", "Salina Turda.", "Munții Apuseni."], en: ["University city Cluj-Napoca.", "Turda Salt Mine.", "Apuseni Mountains."] },
    image: "/geo-images/romania/RO-CJ.webp",
  },
  {
    id: "RO-CL", type: "region", parent: "RO", coords: [27.0, 44.2],
    name: { de: "Călărași", hu: "Călărași", ro: "Călărași", en: "Călărași" },
    description: { de: "Südlicher Donaukreis nahe Bulgarien.", hu: "Déli dunai megye Bulgária közelében.", ro: "Județ sudic pe Dunăre, aproape de Bulgaria.", en: "Southern Danube county near Bulgaria." },
    facts: { de: ["Donauhafen.", "Ackerbau (Weizen, Mais).", "Brücke bei Silistra."], hu: ["Dunai kikötő.", "Szántóföldi gazdálkodás (búza, kukorica).", "Szilisztrai hídfő."], ro: ["Port dunărean.", "Cereale (grâu, porumb).", "Punct de trecere Silistra."], en: ["Danube port.", "Cereal farming (wheat, maize).", "Silistra crossing."] },
    image: "/geo-images/romania/RO-CL.webp",
  },
  {
    id: "RO-CS", type: "region", parent: "RO", coords: [21.9, 45.3],
    name: { de: "Karasch-Severin", hu: "Krassó-Szörény", ro: "Caraș-Severin", en: "Caraș-Severin" },
    description: { de: "Kreis im Banater Bergland mit Sitz in Reșița.", hu: "Megye a Bánsági hegyvidéken, székhely Resicabánya.", ro: "Județ în Munții Banatului, reședința Reșița.", en: "County in the Banat Mountains, seat in Reșița." },
    facts: { de: ["Semenic-Nationalpark.", "Donau-Klissura bei Orșova.", "Eisenindustrie in Reșița."], hu: ["Szemenik Nemzeti Park.", "Dunai-szoros Ószova (Orșova) közelében.", "Vasipar Resicabányán."], ro: ["Parcul Național Semenic.", "Defileul Dunării la Orșova.", "Siderurgie la Reșița."], en: ["Semenic National Park.", "Danube gorge near Orșova.", "Iron industry in Reșița."] },
    image: "/geo-images/romania/RO-CS.webp",
  },
  {
    id: "RO-CT", type: "region", parent: "RO", coords: [28.6, 44.18],
    name: { de: "Konstanza", hu: "Konstanca", ro: "Constanța", en: "Constanța" },
    description: { de: "Küstenkreis am Schwarzen Meer.", hu: "Tengerparti megye a Fekete-tengernél.", ro: "Județ la Marea Neagră.", en: "Coastal county on the Black Sea." },
    facts: { de: ["Wichtigster Seehafen Rumäniens.", "Badeort Mamaia.", "Antike Stadt Histria."], hu: ["Románia legfontosabb tengeri kikötője.", "Mamaia üdülőhely.", "Histria ókori városa."], ro: ["Cel mai mare port maritim al României.", "Stațiunea Mamaia.", "Cetatea antică Histria."], en: ["Romania's biggest sea port.", "Mamaia beach resort.", "Ancient city of Histria."] },
    image: "/geo-images/romania/RO-CT.webp",
  },
  {
    id: "RO-CV", type: "region", parent: "RO", coords: [25.8, 45.85],
    name: { de: "Kovasna", hu: "Kovászna", ro: "Covasna", en: "Covasna" },
    description: { de: "Szeklerkreis im Südosten Siebenbürgens.", hu: "Székely megye Délkelet-Erdélyben.", ro: "Județ secuiesc în sud-estul Transilvaniei.", en: "Székely county in southeastern Transylvania." },
    facts: { de: ["Mofetten (CO₂-Gaskuren).", "Szeklerburgen.", "Ursulberg (Bálványosfürdő)."], hu: ["Mofetták (gyógygázfürdők).", "Székely várak.", "Bálványos-fürdő."], ro: ["Mofete (cure cu CO₂).", "Cetăți secuiești.", "Stațiunea Băile Balvanyos."], en: ["Mofette CO₂ spas.", "Székely fortresses.", "Băile Balvanyos resort."] },
    image: "/geo-images/romania/RO-CV.webp",
  },
  {
    id: "RO-DB", type: "region", parent: "RO", coords: [25.4667, 44.9333],
    name: { de: "Dâmbovița", hu: "Dâmbovița", ro: "Dâmbovița", en: "Dâmbovița" },
    description: { de: "Muntenischer Kreis mit historischer Hauptstadt Târgoviște.", hu: "Munténiai megye, történelmi fővárosa Târgoviște.", ro: "Județ în Muntenia, fostă capitală Târgoviște.", en: "Muntenian county with historical capital Târgoviște." },
    facts: { de: ["Fürstenhof Târgoviște.", "Chindia-Turm (Vlad Țepeș).", "Bucegi-Gebirge nördlich."], hu: ["Târgoviștei fejedelmi udvar.", "Chindia-torony (Vlad Tepes).", "Bucsecs-hegység északon."], ro: ["Curtea Domnească Târgoviște.", "Turnul Chindia (Vlad Țepeș).", "Munții Bucegi la nord."], en: ["Princely Court Târgoviște.", "Chindia Tower (Vlad the Impaler).", "Bucegi Mountains to the north."] },
    image: "/geo-images/romania/RO-DB.webp",
  },
  {
    id: "RO-DJ", type: "region", parent: "RO", coords: [23.8, 44.33],
    name: { de: "Dolj", hu: "Dolj", ro: "Dolj", en: "Dolj" },
    description: { de: "Kreis im Südwesten der Walachei mit Sitz Craiova.", hu: "Délnyugat-havasalföldi megye Craiova központtal.", ro: "Județ în sud-vestul Munteniei, reședința Craiova.", en: "Southwestern Wallachian county, seat Craiova." },
    facts: { de: ["Universitätsstadt Craiova.", "Brâncuși-Museum.", "Donauufer im Süden."], hu: ["Craiova egyetemváros.", "Brâncuși Múzeum.", "Dunai partok délen."], ro: ["Craiova, oraș universitar.", "Muzeul Brâncuși.", "Malul Dunării la sud."], en: ["University city Craiova.", "Brâncuși Museum.", "Danube bank to the south."] },
    image: "/geo-images/romania/RO-DJ.webp",
  },
  {
    id: "RO-GJ", type: "region", parent: "RO", coords: [23.3, 45.0333],
    name: { de: "Gorj", hu: "Gorzs", ro: "Gorj", en: "Gorj" },
    description: { de: "Oltenischer Kreis mit Sitz Târgu Jiu.", hu: "Olténiai megye Târgu Jiu székhellyel.", ro: "Județ oltenean, reședința Târgu Jiu.", en: "Oltenian county with seat Târgu Jiu." },
    facts: { de: ["Heimat von Constantin Brâncuși.", "Skulpturenensemble Târgu Jiu.", "Braunkohlerevier."], hu: ["Constantin Brâncuși szülőföldje.", "A Târgu Jiui szoboregyüttes.", "Lignitbányászat."], ro: ["Locul natal al lui Brâncuși.", "Ansamblul sculptural de la Târgu Jiu.", "Bazin carbonifer."], en: ["Birthplace of Brâncuși.", "Târgu Jiu sculptural ensemble.", "Lignite basin."] },
    image: "/geo-images/romania/RO-GJ.webp",
  },
  {
    id: "RO-GL", type: "region", parent: "RO", coords: [27.95, 45.75],
    name: { de: "Galați", hu: "Galac", ro: "Galați", en: "Galați" },
    description: { de: "Ostrumänischer Kreis an Donau und Prut.", hu: "Kelet-romániai megye a Duna és Prut mentén.", ro: "Județ estic, pe Dunăre și Prut.", en: "Eastern county along the Danube and Prut." },
    facts: { de: ["Größter Donauhafen Rumäniens.", "Stahlwerk Galați.", "Naturreservat Prutul de Jos."], hu: ["Románia legnagyobb dunai kikötője.", "Galaci acélmű.", "Alsó-Prut természetvédelmi terület."], ro: ["Cel mai mare port dunărean al României.", "Combinatul siderurgic Galați.", "Rezervația Prutul de Jos."], en: ["Romania's largest Danube port.", "Galați steel mill.", "Lower Prut reserve."] },
    image: "/geo-images/romania/RO-GL.webp",
  },
  {
    id: "RO-GR", type: "region", parent: "RO", coords: [25.9667, 43.9],
    name: { de: "Giurgiu", hu: "Gyurgyevó", ro: "Giurgiu", en: "Giurgiu" },
    description: { de: "Südlicher Kreis mit Donaugrenze zu Bulgarien.", hu: "Déli megye a Duna bulgáriai határánál.", ro: "Județ sudic, la granița dunăreană cu Bulgaria.", en: "Southern county on the Danube border with Bulgaria." },
    facts: { de: ["Grenzbrücke Ruse–Giurgiu.", "Nahe bei Bukarest.", "Ackerbauregion."], hu: ["Ruse–Giurgiu közötti határhíd.", "Közel Bukaresthez.", "Szántóföldi vidék."], ro: ["Podul Giurgiu–Ruse.", "Aproape de București.", "Zonă agricolă."], en: ["Giurgiu–Ruse border bridge.", "Near Bucharest.", "Farming area."] },
    image: "/geo-images/romania/RO-GR.webp",
  },
  {
    id: "RO-HD", type: "region", parent: "RO", coords: [22.9, 45.75],
    name: { de: "Hunedoara", hu: "Hunyad", ro: "Hunedoara", en: "Hunedoara" },
    description: { de: "Westsiebenbürgischer Bergkreis.", hu: "Nyugat-erdélyi hegyvidéki megye.", ro: "Județ transilvănean muntos.", en: "Mountainous Transylvanian county." },
    facts: { de: ["Corvin-Burg in Hunedoara.", "Retezat-Nationalpark.", "Dakische Hauptstadt Sarmizegetusa."], hu: ["Vajdahunyad vára.", "Retyezát Nemzeti Park.", "Dák főváros: Sarmizegetusa."], ro: ["Castelul Corvinilor.", "Parcul Național Retezat.", "Capitala dacică Sarmizegetusa."], en: ["Corvin Castle.", "Retezat National Park.", "Dacian capital Sarmizegetusa."] },
    image: "/geo-images/romania/RO-HD.webp",
  },
  {
    id: "RO-HR", type: "region", parent: "RO", coords: [25.8, 46.55],
    name: { de: "Harghita", hu: "Hargita", ro: "Harghita", en: "Harghita" },
    description: { de: "Szeklerkreis im Osten Siebenbürgens.", hu: "Székely megye Kelet-Erdélyben.", ro: "Județ secuiesc în estul Transilvaniei.", en: "Székely county in eastern Transylvania." },
    facts: { de: ["St.-Anna-See (Vulkankrater).", "Heilbäder Tușnad, Borsec.", "Hargita-Gebirge."], hu: ["Szent Anna-tó (vulkáni kráter).", "Tusnád, Borszék gyógyfürdők.", "Hargita-hegység."], ro: ["Lacul Sfânta Ana (crater vulcanic).", "Stațiuni: Tușnad, Borsec.", "Munții Harghita."], en: ["Lake Saint Ana (volcanic crater).", "Tușnad, Borsec spas.", "Harghita Mountains."] },
    image: "/geo-images/romania/RO-HR.webp",
  },
  {
    id: "RO-IF", type: "region", parent: "RO", coords: [26.15, 44.55],
    name: { de: "Ilfov", hu: "Ilfov", ro: "Ilfov", en: "Ilfov" },
    description: { de: "Kreis rund um Bukarest.", hu: "Bukarestet körülölelő megye.", ro: "Județ care înconjoară Bucureștiul.", en: "County surrounding Bucharest." },
    facts: { de: ["Snagov-See und -Kloster.", "Flughafen Otopeni.", "Waldgebiet Băneasa."], hu: ["Snagovi tó és kolostor.", "Otopeni repülőtér.", "Băneasa erdő."], ro: ["Lacul și Mănăstirea Snagov.", "Aeroportul Otopeni.", "Pădurea Băneasa."], en: ["Snagov Lake and Monastery.", "Otopeni Airport.", "Băneasa Forest."] },
    image: "/geo-images/romania/RO-IF.webp",
  },
  {
    id: "RO-IL", type: "region", parent: "RO", coords: [27.2, 44.55],
    name: { de: "Ialomița", hu: "Ialomița", ro: "Ialomița", en: "Ialomița" },
    description: { de: "Kreis in der Walachischen Tiefebene.", hu: "Megye a Havasalföldi-alföldön.", ro: "Județ în Câmpia Bărăganului.", en: "County in the Bărăgan Plain." },
    facts: { de: ["Getreideanbau in der Bărăgan-Steppe.", "Fluss Ialomița.", "Thermalbäder in Amara."], hu: ["Gabonatermesztés a Bărăgan-pusztán.", "Ialomița folyó.", "Amarai termálfürdők."], ro: ["Cereale în Bărăgan.", "Râul Ialomița.", "Stațiunea Amara."], en: ["Cereals in the Bărăgan steppe.", "Ialomița river.", "Amara thermal spa."] },
    image: "/geo-images/romania/RO-IL.webp",
  },
  {
    id: "RO-IS", type: "region", parent: "RO", coords: [27.58, 47.16],
    name: { de: "Jassy", hu: "Jászvásár", ro: "Iași", en: "Iași" },
    description: { de: "Kultureller Mittelpunkt der Moldau.", hu: "Moldva kulturális központja.", ro: "Centrul cultural al Moldovei.", en: "Cultural center of Moldavia." },
    facts: { de: ["Älteste Universität Rumäniens (1860).", "Kulturpalast.", "Kloster Golia."], hu: ["Románia legrégebbi egyeteme (1860).", "Kultúrpalota.", "Golia kolostor."], ro: ["Prima universitate românească (1860).", "Palatul Culturii.", "Mănăstirea Golia."], en: ["Romania's oldest university (1860).", "Palace of Culture.", "Golia Monastery."] },
    image: "/geo-images/romania/RO-IS.webp",
  },
  {
    id: "RO-MH", type: "region", parent: "RO", coords: [22.7, 44.7],
    name: { de: "Mehedinți", hu: "Mehedinți", ro: "Mehedinți", en: "Mehedinți" },
    description: { de: "Südwestlicher Donaukreis mit Drobeta-Turnu Severin.", hu: "Délnyugati megye a Dunánál, központ Drobeta-Turnu Severin.", ro: "Județ sud-vestic pe Dunăre, Drobeta-Turnu Severin.", en: "Southwestern Danube county with Drobeta-Turnu Severin." },
    facts: { de: ["Eisernes Tor I und II.", "Reste der Trajansbrücke.", "Mraconia-Schlucht."], hu: ["Vaskapu I és II.", "Traianus hídjának maradványai.", "Mraconia-szurdok."], ro: ["Porțile de Fier I și II.", "Rămășițele Podului lui Traian.", "Cazanele Dunării."], en: ["Iron Gates I and II.", "Remains of Trajan's Bridge.", "Danube gorges (Cazane)."] },
    image: "/geo-images/romania/RO-MH.webp",
  },
  {
    id: "RO-MM", type: "region", parent: "RO", coords: [23.95, 47.6667],
    name: { de: "Maramureș", hu: "Máramaros", ro: "Maramureș", en: "Maramureș" },
    description: { de: "Nordkreis mit Holzkirchen und Bergwelt.", hu: "Északi megye fatemplomokkal és hegyekkel.", ro: "Județ nordic cu biserici de lemn și munți.", en: "Northern county with wooden churches and mountains." },
    facts: { de: ["UNESCO-Holzkirchen.", "Fröhlicher Friedhof von Săpânța.", "Rodna-Massiv."], hu: ["UNESCO-fatemplomok.", "Vidám temető (Szaplonca).", "Radnai-havasok."], ro: ["Biserici de lemn UNESCO.", "Cimitirul Vesel din Săpânța.", "Masivul Rodnei."], en: ["UNESCO wooden churches.", "Merry Cemetery of Săpânța.", "Rodna massif."] },
    image: "/geo-images/romania/RO-MM.webp",
  },
  {
    id: "RO-MS", type: "region", parent: "RO", coords: [24.55, 46.55],
    name: { de: "Mureș", hu: "Maros", ro: "Mureș", en: "Mureș" },
    description: { de: "Zentralsiebenbürgischer Kreis am Fluss Mureș.", hu: "Közép-erdélyi megye a Maros folyónál.", ro: "Județ în centrul Transilvaniei, pe râul Mureș.", en: "Central Transylvanian county on the Mureș river." },
    facts: { de: ["Târgu Mureș (Neumarkt) – Kulturpalast.", "Medieval Sighișoara.", "Sovata-See (Bärensee)."], hu: ["Marosvásárhely – Kultúrpalota.", "Segesvár középkori vára.", "Szováta – Medve-tó."], ro: ["Târgu Mureș – Palatul Culturii.", "Sighișoara medievală.", "Lacul Ursu la Sovata."], en: ["Târgu Mureș – Palace of Culture.", "Medieval Sighișoara.", "Bear Lake at Sovata."] },
    image: "/geo-images/romania/RO-MS.webp",
  },
  {
    id: "RO-NT", type: "region", parent: "RO", coords: [26.4, 46.9],
    name: { de: "Neamț", hu: "Neamț", ro: "Neamț", en: "Neamț" },
    description: { de: "Moldauischer Kreis mit Klöstern und dem Ceahlău.", hu: "Moldvai megye kolostorokkal és a Csalhó-hegységgel.", ro: "Județ moldovean, cu mănăstiri și Ceahlău.", en: "Moldavian county with monasteries and Ceahlău Mountain." },
    facts: { de: ["Kloster Neamț.", "Lacul Bicaz.", "Ceahlău-Massiv."], hu: ["Neamț kolostor.", "Bicaz-tó.", "Csalhó hegytömbje."], ro: ["Mănăstirea Neamț.", "Lacul Bicaz.", "Masivul Ceahlău."], en: ["Neamț Monastery.", "Lake Bicaz.", "Ceahlău massif."] },
    image: "/geo-images/romania/RO-NT.webp",
  },
  {
    id: "RO-OT", type: "region", parent: "RO", coords: [24.3667, 44.43],
    name: { de: "Olt", hu: "Olt", ro: "Olt", en: "Olt" },
    description: { de: "Kreis am Fluss Olt in Oltenien.", hu: "Olt folyó menti megye Olténiában.", ro: "Județ pe râul Olt, în Oltenia.", en: "Olt River county in Oltenia." },
    facts: { de: ["Fluss Olt.", "Ackerbau und Obstbau.", "Kloster Brâncoveni."], hu: ["Olt folyó.", "Szántóföldi és gyümölcstermelés.", "Brâncoveni kolostor."], ro: ["Râul Olt.", "Agricultură, pomicultură.", "Mănăstirea Brâncoveni."], en: ["Olt river.", "Farming and orchards.", "Brâncoveni Monastery."] },
    image: "/geo-images/romania/RO-OT.webp",
  },
  {
    id: "RO-PH", type: "region", parent: "RO", coords: [26.0, 45.0],
    name: { de: "Prahova", hu: "Prahova", ro: "Prahova", en: "Prahova" },
    description: { de: "Muntenischer Kreis mit Sitz Ploiești und Prahova-Tal.", hu: "Munténiai megye Ploiești székhellyel és Prahova-völggyel.", ro: "Județ muntean, reședința Ploiești, Valea Prahovei.", en: "Muntenian county with seat Ploiești and the Prahova Valley." },
    facts: { de: ["Erdölzentrum Ploiești.", "Schloss Peleș in Sinaia.", "Bergresort Bușteni."], hu: ["Ploiești kőolajközpont.", "Peleș-kastély Sinaián.", "Bușteni-i hegyvidéki üdülő."], ro: ["Centrul petrolier Ploiești.", "Castelul Peleș la Sinaia.", "Stațiunea Bușteni."], en: ["Ploiești oil hub.", "Peleș Castle in Sinaia.", "Bușteni mountain resort."] },
    image: "/geo-images/romania/RO-PH.webp",
  },
  {
    id: "RO-SB", type: "region", parent: "RO", coords: [24.15, 45.8],
    name: { de: "Hermannstadt", hu: "Szeben", ro: "Sibiu", en: "Sibiu" },
    description: { de: "Siebenbürgischer Kreis mit sächsischem Erbe.", hu: "Erdélyi megye szász örökséggel.", ro: "Județ transilvănean cu moștenire săsească.", en: "Transylvanian county with Saxon heritage." },
    facts: { de: ["Kulturhauptstadt 2007.", "Freilichtmuseum ASTRA.", "Fogaraser Gebirge (Transfăgărășan)."], hu: ["2007 Európa kulturális fővárosa.", "ASTRA szabadtéri múzeum.", "Fogarasi-havasok (Transzfogarasi út)."], ro: ["Capitală Culturală 2007.", "Muzeul ASTRA.", "Munții Făgăraș (Transfăgărășan)."], en: ["European Capital of Culture 2007.", "ASTRA open-air museum.", "Făgăraș Mountains (Transfăgărășan)."] },
    image: "/geo-images/romania/RO-SB.webp",
  },
  {
    id: "RO-SJ", type: "region", parent: "RO", coords: [23.05, 47.2],
    name: { de: "Sălaj", hu: "Szilágy", ro: "Sălaj", en: "Sălaj" },
    description: { de: "Kreis in Nordwest-Siebenbürgen.", hu: "Északnyugat-erdélyi megye.", ro: "Județ în nord-vestul Transilvaniei.", en: "County in northwestern Transylvania." },
    facts: { de: ["Sitz Zalău.", "Römerlimes Porolissum.", "Hügelland."], hu: ["Zilahi székhely.", "Porolissum római limes.", "Dombvidék."], ro: ["Reședința Zalău.", "Limesul roman Porolissum.", "Zonă deluroasă."], en: ["Seat Zalău.", "Roman Porolissum limes.", "Hill country."] },
    image: "/geo-images/romania/RO-SJ.webp",
  },
  {
    id: "RO-SM", type: "region", parent: "RO", coords: [22.8667, 47.8],
    name: { de: "Sathmar", hu: "Szatmár", ro: "Satu Mare", en: "Satu Mare" },
    description: { de: "Nordwestkreis an der ungarischen Grenze.", hu: "Északnyugati megye a magyar határon.", ro: "Județ nord-vestic, la granița cu Ungaria.", en: "Northwestern county on the Hungarian border." },
    facts: { de: ["Multikultureller Raum.", "Holzkirchen der Region Codru.", "Thermalbäder Tășnad."], hu: ["Multikulturális térség.", "Kodrui fatemplomok.", "Tășnad termálfürdő."], ro: ["Spațiu multicultural.", "Biserici de lemn Codru.", "Băile Tășnad."], en: ["Multicultural region.", "Codru wooden churches.", "Tășnad thermal baths."] },
    image: "/geo-images/romania/RO-SM.webp",
  },
  {
    id: "RO-SV", type: "region", parent: "RO", coords: [25.85, 47.45],
    name: { de: "Suczawa", hu: "Szucsáva", ro: "Suceava", en: "Suceava" },
    description: { de: "Nordmoldauischer Kreis mit den bemalten Klöstern der Bukowina.", hu: "Észak-moldvai megye a bukovinai festett kolostorokkal.", ro: "Județ în nordul Moldovei, cu mănăstirile pictate din Bucovina.", en: "Northern Moldavian county with Bukovina's painted monasteries." },
    facts: { de: ["UNESCO-Klöster Voroneț, Moldovița, Sucevița.", "Festung Suceava.", "Obcinele Bucovinei."], hu: ["UNESCO kolostorok: Voroneț, Moldovița, Sucevița.", "Szucsáva vára.", "Bukovinai dombok."], ro: ["Mănăstiri UNESCO (Voroneț, Moldovița, Sucevița).", "Cetatea Sucevei.", "Obcinele Bucovinei."], en: ["UNESCO monasteries (Voroneț, Moldovița, Sucevița).", "Suceava Citadel.", "Bukovina highlands."] },
    image: "/geo-images/romania/RO-SV.webp",
  },
  {
    id: "RO-TL", type: "region", parent: "RO", coords: [28.8, 45.17],
    name: { de: "Tulcea", hu: "Tulcea", ro: "Tulcea", en: "Tulcea" },
    description: { de: "Kreis mit dem Donaudelta.", hu: "A Duna-delta megyéje.", ro: "Județul Deltei Dunării.", en: "County of the Danube Delta." },
    facts: { de: ["UNESCO-Biosphärenreservat Donaudelta.", "Vogelparadies.", "Hafenstadt Tulcea."], hu: ["UNESCO Duna-delta bioszféra-rezervátum.", "Madárparadicsom.", "Tulcea kikötőváros."], ro: ["Rezervația Biosferei Delta Dunării (UNESCO).", "Paradisul păsărilor.", "Port Tulcea."], en: ["UNESCO Danube Delta Biosphere Reserve.", "Bird paradise.", "Port town Tulcea."] },
    image: "/geo-images/romania/RO-TL.webp",
  },
  {
    id: "RO-TM", type: "region", parent: "RO", coords: [21.23, 45.76],
    name: { de: "Temesch", hu: "Temes", ro: "Timiș", en: "Timiș" },
    description: { de: "Größter Kreis Rumäniens im Banat.", hu: "Románia legnagyobb megyéje a Bánságban.", ro: "Cel mai mare județ al României, în Banat.", en: "Romania's largest county, in Banat." },
    facts: { de: ["Timișoara (Temeswar) – Stadt der Revolution 1989.", "Kulturhauptstadt 2023.", "Banater Tiefebene."], hu: ["Temesvár – az 1989-es forradalom városa.", "2023 Európa kulturális fővárosa.", "Bánsági-alföld."], ro: ["Timișoara – orașul Revoluției 1989.", "Capitală Culturală 2023.", "Câmpia Banatului."], en: ["Timișoara – city of the 1989 Revolution.", "European Capital of Culture 2023.", "Banat Plain."] },
    image: "/geo-images/romania/RO-TM.webp",
  },
  {
    id: "RO-TR", type: "region", parent: "RO", coords: [25.33, 44.0],
    name: { de: "Teleorman", hu: "Teleorman", ro: "Teleorman", en: "Teleorman" },
    description: { de: "Südlicher Donaukreis in der Walachei.", hu: "Déli dunai megye Havasalföldön.", ro: "Județ sudic pe Dunăre, în Muntenia.", en: "Southern Danube county in Wallachia." },
    facts: { de: ["Ackerbau in der Burnas-Ebene.", "Fluss Vedea.", "Sitz Alexandria."], hu: ["Szántóföldi gazdálkodás a Burnas-síkságon.", "Vedea folyó.", "Székhely: Alexandria."], ro: ["Cereale în Câmpia Burnazului.", "Râul Vedea.", "Reședința Alexandria."], en: ["Cereals in the Burnas Plain.", "Vedea river.", "Seat: Alexandria."] },
    image: "/geo-images/romania/RO-TR.webp",
  },
  {
    id: "RO-VL", type: "region", parent: "RO", coords: [24.3667, 45.1],
    name: { de: "Vâlcea", hu: "Vâlcea", ro: "Vâlcea", en: "Vâlcea" },
    description: { de: "Oltenischer Kreis im Tal des Olt.", hu: "Olténiai megye az Olt völgyében.", ro: "Județ oltenesc pe Valea Oltului.", en: "Oltenian county in the Olt valley." },
    facts: { de: ["Heilbäder Călimănești-Căciulata.", "Kloster Horezu (UNESCO).", "Cozia-Gebirge."], hu: ["Călimănești-Căciulata gyógyfürdők.", "Horezu kolostor (UNESCO).", "Cozia-hegység."], ro: ["Stațiuni Călimănești-Căciulata.", "Mănăstirea Horezu (UNESCO).", "Munții Cozia."], en: ["Călimănești-Căciulata spas.", "Horezu Monastery (UNESCO).", "Cozia Mountains."] },
    image: "/geo-images/romania/RO-VL.webp",
  },
  {
    id: "RO-VN", type: "region", parent: "RO", coords: [27.18, 45.75],
    name: { de: "Vrancea", hu: "Vráncea", ro: "Vrancea", en: "Vrancea" },
    description: { de: "Kreis am Karpatenbogen, seismisches Gebiet.", hu: "A Kárpát-kanyar megyéje, szeizmikus terület.", ro: "Județ la curbura Carpaților, zonă seismică.", en: "County at the Carpathian bend, a seismic region." },
    facts: { de: ["Erdbebenzone Vrancea.", "Weinbau Panciu, Odobești.", "Lebendes Feuer (Focul Viu)."], hu: ["Vrancea földrengésövezet.", "Panciu, Odobești borvidék.", "Élő tűz (Focul Viu)."], ro: ["Zonă seismică Vrancea.", "Podgorii Panciu, Odobești.", "Focul Viu."], en: ["Vrancea seismic zone.", "Panciu, Odobești wine regions.", "Living Fire (Focul Viu)."] },
    image: "/geo-images/romania/RO-VN.webp",
  },
  {
    id: "RO-VS", type: "region", parent: "RO", coords: [27.73, 46.63],
    name: { de: "Vaslui", hu: "Vaslui", ro: "Vaslui", en: "Vaslui" },
    description: { de: "Moldauischer Kreis an der Grenze zur Republik Moldau.", hu: "Moldvai megye a Moldovai Köztársaság határán.", ro: "Județ moldovean, la granița cu Republica Moldova.", en: "Moldavian county on the border with the Republic of Moldova." },
    facts: { de: ["Schlacht von Vaslui 1475 (Stefan der Große).", "Fluss Prut.", "Weinbau Huși."], hu: ["Vaslui-i csata, 1475 (Nagy István).", "Prut folyó.", "Huși borvidék."], ro: ["Bătălia de la Vaslui, 1475 (Ștefan cel Mare).", "Râul Prut.", "Podgoria Huși."], en: ["Battle of Vaslui, 1475 (Stephen the Great).", "Prut river.", "Huși wine region."] },
    image: "/geo-images/romania/RO-VS.webp",
  },
];

// ---------------------------------------------------------------------------
// 3) VÁROSOK (megyeközpontok)
// ---------------------------------------------------------------------------
export const romaniaCities: POI[] = [
  {
    id: "city-bucuresti", type: "state-capital", parent: "RO-B", coords: [26.1025, 44.4268],
    name: { de: "Bukarest", hu: "Bukarest", ro: "București", en: "Bucharest" },
    description: {
      de: "Bukarest ist die Hauptstadt und das wichtigste wirtschaftliche, politische und kulturelle Zentrum Rumäniens. Die Stadt liegt im Südosten des Landes in der Walachischen Tiefebene am Fluss Dâmbovița. Sie ist bekannt für ihre breiten, von Bäumen gesäumten Boulevards und die prachtvolle Architektur der Belle Époque, die ihr den Beinamen 'Kleines Paris' einbrachte. Heute prägen sowohl historische Kirchen als auch monumentale Bauten aus der kommunistischen Ära das vielfältige Stadtbild.",
      hu: "Bukarest Románia fővárosa, az ország legnagyobb gazdasági, politikai és kulturális központja. A város az ország délkeleti részén, a Havasalföldi-alföldön, a Dâmbovița folyó partján fekszik. Széles, fákkal szegélyezett sugárútjairól és a Belle Époque korszakának pompás építészetéről ismert, amiért egykor a 'Kelet Párizsa' nevet kapta. Napjainkban a történelmi templomok és a kommunista korszak monumentális építményei egyaránt meghatározzák a város sokszínű arculatát.",
      ro: "București este capitala și cel mai important centru economic, politic și cultural al României. Orașul este situat în sud-estul țării, în Câmpia Română, pe malurile râului Dâmbovița. Este renumit pentru bulevardele sale largi, mărginite de copaci, și pentru arhitectura spectaculoasă din perioada Belle Époque, care i-a adus supranumele de 'Micul Paris'. Astăzi, peisajul urban divers este marcat atât de biserici istorice, cât și de construcții monumentale din epoca comunistă.",
      en: "Bucharest is the capital and the most important economic, political, and cultural center of Romania. The city is located in the southeast of the country in the Wallachian Plain on the banks of the Dâmbovița River. It is known for its wide, tree-lined boulevards and the magnificent Belle Époque architecture that earned it the nickname 'Little Paris'. Today, the diverse cityscape is shaped by both historical churches and monumental buildings from the communist era.",
    },
    facts: {
      de: [
        "Mit rund 1,9 Millionen Einwohnern ist sie die größte Stadt Rumäniens.",
        "Der Parlamentspalast ist das zweitgrößte Verwaltungsgebäude der Welt nach dem Pentagon.",
        "Die Stadt wurde erstmals 1459 in einem Dokument von Vlad III. Drăculea erwähnt.",
        "Der Triumphbogen (Arcul de Triumf) erinnert an den Sieg im Ersten Weltkrieg.",
        "Das Dorfmuseum (Muzeul Satului) ist eines der ältesten Freilichtmuseen Europas.",
        "Bukarest besitzt eines der dichtesten Metronetze in Osteuropa.",
        "Die Lipscani-Altstadt ist das Herz des Bukarester Nachtlebens und Handels.",
        "Die Stadt beherbergt zahlreiche Universitäten und Forschungsinstitute.",
      ],
      hu: [
        "Körülbelül 1,9 millió lakosával Románia legnagyobb városa.",
        "A Parlament Palotája a világ második legnagyobb középülete a Pentagon után.",
        "A várost először 1459-ben említette meg Vlad Țepeș egy dokumentumban.",
        "A Diadalív (Arcul de Triumf) az első világháborús győzelemnek állít emléket.",
        "A Falumúzeum (Muzeul Satului) Európa egyik legrégebbi szabadtéri múzeuma.",
        "Bukarest rendelkezik Kelet-Európa egyik legsűrűbb metróhálózatával.",
        "A Lipscani negyed a város történelmi magja és a szórakozónegyed központja.",
        "Számos egyetemnek és tudományos kutatóintézetnek ad otthont.",
      ],
      ro: [
        "Cu aproximativ 1,9 milioane de locuitori, este cel mai mare oraș din România.",
        "Palatul Parlamentului este a doua cea mai mare clădire administrativă din lume, după Pentagon.",
        "Orașul a fost menționat pentru prima dată în 1459, într-un document emis de Vlad Țepeș.",
        "Arcul de Triumf comemorează victoria României în Primul Război Mondial.",
        "Muzeul Satului este unul dintre cele mai vechi și mai mari muzee în aer liber din Europa.",
        "Bucureștiul are una dintre cele mai dense rețele de metrou din Europa de Est.",
        "Centrul vechi Lipscani este inima vieții de noapte și a comerțului istoric.",
        "Găzduiește numeroase universități și institute de cercetare de prestigiu.",
      ],
      en: [
        "With about 1.9 million inhabitants, it is the largest city in Romania.",
        "The Palace of the Parliament is the world's second-largest administrative building after the Pentagon.",
        "The city was first mentioned in 1459 in a document issued by Vlad the Impaler.",
        "The Arch of Triumph commemorates Romania's victory in World War I.",
        "The Village Museum is one of the oldest and largest open-air museums in Europe.",
        "Bucharest has one of the densest metro networks in Eastern Europe.",
        "The Lipscani old town is the heart of Bucharest's nightlife and historical trade.",
        "It is home to numerous prestigious universities and research institutes.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-bucuresti.webp",
  },
  {
    id: "city-cluj-napoca", type: "state-capital", parent: "RO-CJ", coords: [23.6236, 46.7712],
    name: { de: "Klausenburg", hu: "Kolozsvár", ro: "Cluj-Napoca", en: "Cluj-Napoca" },
    description: {
      de: "Cluj-Napoca ist die inoffizielle Hauptstadt Siebenbürgens und ein bedeutendes Zentrum für Bildung, IT und Kultur. Die Stadt liegt im Somesch-Tal am Rande des Apuseni-Gebirges und blickt auf eine über 2000-jährige Geschichte zurück. Sie ist bekannt für ihre lebendige Atmosphäre, zahlreiche Festivals und eine beeindruckende Mischung aus gotischer, barocker und moderner Architektur. Als eine der dynamischsten Städte Rumäniens zieht sie Studenten und Fachkräfte aus dem ganzen Land an.",
      hu: "Kolozsvár Erdély nem hivatalos fővárosa, valamint az oktatás, az informatika és a kultúra kiemelkedő központja. A város a Szamos völgyében, az Erdélyi-szigethegység lábánál fekszik, és több mint 2000 éves múltra tekint vissza. Élénk hangulatáról, számos fesztiváljáról, valamint a gótikus, barokk és modern építészet lenyűgöző keveredéséről ismert. Románia egyik legdinamikusabb városaként az ország minden részéről vonzza a hallgatókat és a szakembereket.",
      ro: "Cluj-Napoca este capitala neoficială a Transilvaniei și un centru major pentru educație, IT și cultură. Orașul este situat pe valea Someșului Mic, la poalele Munților Apuseni, având o istorie de peste 2000 de ani. Este renumit pentru atmosfera sa vibrantă, numeroasele festivaluri și un amestec impresionant de arhitectură gotică, barocă și modernă. Fiind unul dintre cele mai dinamice orașe din România, atrage studenți și profesioniști din întreaga țară.",
      en: "Cluj-Napoca is the unofficial capital of Transylvania and a major hub for education, IT, and culture. The city is located in the Someș Valley at the edge of the Apuseni Mountains and boasts a history spanning over 2000 years. It is known for its vibrant atmosphere, numerous festivals, and an impressive blend of Gothic, Baroque, and modern architecture. As one of Romania's most dynamic cities, it attracts students and professionals from all over the country.",
    },
    facts: {
      de: [
        "Die Babeș-Bolyai-Universität ist die größte Universität Rumäniens.",
        "Die gotische St.-Michaels-Kirche dominiert den zentralen Platz der Stadt.",
        "Cluj-Napoca ist der Geburtsort des ungarischen Königs Matthias Corvinus.",
        "Das UNTOLD Festival ist eines der größten Elektronik-Musikfestivals in Europa.",
        "Der Botanische Garten 'Alexandru Borza' gilt als einer der schönsten im Südosten Europas.",
        "Die Stadt war 2015 die Jugendhauptstadt Europas.",
        "Das TIFF (Transilvania International Film Festival) findet jährlich hier statt.",
        "Die Salina Turda, ein spektakuläres Salzbergwerk, liegt nur wenige Kilometer entfernt.",
      ],
      hu: [
        "A Babeș-Bolyai Tudományegyetem Románia legnagyobb egyeteme.",
        "A gótikus Szent Mihály-templom uralja a város főterét.",
        "Kolozsvár Hunyadi Mátyás magyar király szülővárosa.",
        "Az UNTOLD fesztivál Európa egyik legnagyobb elektronikus zenei eseménye.",
        "Az 'Alexandru Borza' Botanikus Kert Délkelet-Európa egyik legszebbje.",
        "A város 2015-ben Európa Ifjúsági Fővárosa volt.",
        "Itt rendezik meg évente a TIFF-et (Transilvania Nemzetközi Filmfesztivál).",
        "A látványos Tordai sóbánya mindössze néhány kilométerre található.",
      ],
      ro: [
        "Universitatea Babeș-Bolyai este cea mai mare instituție de învățământ superior din țară.",
        "Biserica Sfântul Mihail este unul dintre cele mai frumoase monumente gotice din Transilvania.",
        "Cluj-Napoca este locul de naștere al regelui Matia Corvin.",
        "Festivalul UNTOLD este unul dintre cele mai mari evenimente de muzică electronică din Europa.",
        "Grădina Botanică 'Alexandru Borza' este considerată una dintre cele mai frumoase din regiune.",
        "Orașul a deținut titlul de Capitală Europeană a Tineretului în anul 2015.",
        "Găzduiește anual TIFF, cel mai important festival de film din România.",
        "Salina Turda, un obiectiv turistic spectaculos, se află în imediata apropiere.",
      ],
      en: [
        "Babeș-Bolyai University is the largest university in Romania.",
        "St. Michael's Church is one of the most beautiful Gothic monuments in Transylvania.",
        "Cluj-Napoca is the birthplace of the Hungarian King Matthias Corvinus.",
        "UNTOLD Festival is one of the largest electronic music festivals in Europe.",
        "The 'Alexandru Borza' Botanical Garden is considered one of the finest in Southeast Europe.",
        "The city held the title of European Youth Capital in 2015.",
        "It hosts the annual TIFF (Transilvania International Film Festival).",
        "The spectacular Turda Salt Mine is located just a few kilometers away.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-cluj-napoca.webp",
  },
  {
    id: "city-timisoara", type: "state-capital", parent: "RO-TM", coords: [21.2087, 45.7489],
    name: { de: "Temeswar", hu: "Temesvár", ro: "Timișoara", en: "Timișoara" },
    description: {
      de: "Timișoara, oft als 'Klein-Wien' bezeichnet, ist eine multikulturelle Metropole im Westen Rumäniens. Die Stadt liegt in der Banater Tiefebene und ist berühmt für ihre barocke Architektur, ihre weitläufigen Parks und ihre Rolle als Ausgangspunkt der rumänischen Revolution von 1989. Sie war über Jahrhunderte ein Schmelztiegel verschiedener Kulturen, darunter rumänische, ungarische, deutsche und serbische Einflüsse. Heute ist sie ein bedeutendes Industrie- und Technologiezentrum mit einer lebendigen Kunstszene.",
      hu: "Temesvár, amelyet gyakran 'Kis Bécsnek' is neveznek, egy multikulturális metropolisz Románia nyugati részén. A város a Bánsági-alföldön fekszik, és híres barokk építészetéről, kiterjedt parkjairól, valamint az 1989-es romániai forradalom kiindulópontjaként betöltött szerepéről. Évszázadokon át különböző kultúrák – köztük a román, magyar, német és szerb – olvasztótégelye volt. Ma jelentős ipari és technológiai központ, élénk művészeti élettel.",
      ro: "Timișoara, supranumită adesea 'Micul Viena', este o metropolă multiculturală din vestul României. Orașul este situat în Câmpia Banatului și este faimos pentru arhitectura sa barocă, parcurile întinse și rolul său de punct de plecare al Revoluției din 1989. Timp de secole, a fost un creuzet al diverselor culturi, incluzând influențe românești, maghiare, germane și sârbești. Astăzi este un important centru industrial și tehnologic, cu o scenă artistică vibrantă.",
      en: "Timișoara, often called 'Little Vienna', is a multicultural metropolis in western Romania. The city is located in the Banat Plain and is famous for its Baroque architecture, extensive parks, and its role as the starting point of the 1989 Romanian Revolution. For centuries, it has been a melting pot of various cultures, including Romanian, Hungarian, German, and Serbian influences. Today, it is a major industrial and technological hub with a vibrant arts scene.",
    },
    facts: {
      de: [
        "Timișoara war 1884 die erste Stadt in Europa mit elektrischer Straßenbeleuchtung.",
        "Die Stadt war 2023 eine der Kulturhauptstädte Europas.",
        "Die Kathedrale der Heiligen drei Hierarchen ist ein Wahrzeichen der Stadt.",
        "Der Opernplatz (Piața Victoriei) war das Zentrum der Revolution von 1989.",
        "Timișoara besitzt drei Staatstheater in drei verschiedenen Sprachen (Rumänisch, Deutsch, Ungarisch).",
        "Die Festung Temeswar war eine der wichtigsten Verteidigungsanlagen der Habsburger.",
        "Die Stadt liegt am Bega-Kanal, der ersten schiffbaren Wasserstraße Rumäniens.",
        "Es gibt über 30 Parks, weshalb sie auch als 'Stadt der Blumen' bekannt ist.",
      ],
      hu: [
        "Temesvár volt 1884-ben az első európai város, ahol bevezették az elektromos közvilágítást.",
        "A város 2023-ban Európa egyik kulturális fővárosa volt.",
        "A román ortodox székesegyház a város egyik legfontosabb jelképe.",
        "A Győzelem tér (Piața Victoriei) volt az 1989-es forradalom központi helyszíne.",
        "Temesvár három állami színházzal rendelkezik három különböző nyelven (román, német, magyar).",
        "A temesvári vár a Habsburg Birodalom egyik legfontosabb védelmi vonala volt.",
        "A város a Béga-csatorna partján fekszik, amely Románia első hajózható csatornája.",
        "Több mint 30 parkja van, ezért a 'virágok városaként' is emlegetik.",
      ],
      ro: [
        "Timișoara a fost primul oraș din Europa cu iluminat public electric, în 1884.",
        "Orașul a deținut titlul de Capitală Europeană a Culturii în anul 2023.",
        "Catedrala Mitropolitană este unul dintre cele mai emblematice simboluri ale orașului.",
        "Piața Victoriei a fost locul central al evenimentelor Revoluției din 1989.",
        "Este singurul oraș din Europa cu trei teatre de stat în limbi diferite (română, germană, maghiară).",
        "Cetatea Timișoarei a fost una dintre cele mai importante fortificații habsburgice.",
        "Canalul Bega, care traversează orașul, este prima cale navigabilă din România.",
        "Datorită numărului mare de parcuri, este supranumit 'Orașul florilor'.",
      ],
      en: [
        "Timișoara was the first city in Europe with electric street lighting, in 1884.",
        "The city held the title of European Capital of Culture in 2023.",
        "The Metropolitan Cathedral is one of the city's most iconic landmarks.",
        "Victory Square (Piața Victoriei) was the central site of the 1989 Revolution.",
        "It is the only city in Europe with three state theaters in different languages (Romanian, German, Hungarian).",
        "The Timișoara Fortress was one of the most important Habsburg fortifications.",
        "The Bega Canal, which flows through the city, is Romania's first navigable waterway.",
        "With over 30 parks, it is often called the 'City of Flowers'.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    historyYear: 1989, historyPeriod: "modern",
    image: "/geo-images/romania/city-timisoara.webp",
  },
  {
    id: "city-iasi", type: "state-capital", parent: "RO-IS", coords: [27.5848, 47.1585],
    name: { de: "Jassy", hu: "Jászvásár", ro: "Iași", en: "Iași" },
    description: {
      de: "Iași ist das kulturelle und historische Herz der Region Moldau und eine der ältesten Städte Rumäniens. Die Stadt liegt auf sieben Hügeln im Nordosten des Landes und war über Jahrhunderte die Hauptstadt des Fürstentums Moldau. Sie ist berühmt für ihre prächtigen Kirchen, Klöster und den beeindruckenden Kulturpalast. Als bedeutende Universitätsstadt beherbergt Iași die älteste Hochschule des Landes und ist ein wichtiges Zentrum für Literatur und Wissenschaft.",
      hu: "Jászvásár (Iași) Moldva kulturális és történelmi szíve, valamint Románia egyik legrégebbi városa. A város hét dombra épült az ország északkeleti részén, és évszázadokon át a Moldvai Fejedelemség fővárosa volt. Híres pompás templomairól, kolostorairól és a lenyűgöző Kultúrpalotáról. Jelentős egyetemvárosként itt található az ország legrégebbi felsőoktatási intézménye, emellett az irodalom és a tudomány fontos központja.",
      ro: "Iași este inima culturală și istorică a Moldovei și unul dintre cele mai vechi orașe din România. Orașul este situat pe șapte coline în nord-estul țării și a fost timp de secole capitala Principatului Moldovei. Este renumit pentru bisericile sale splendide, mănăstirile istorice și impresionantul Palat al Culturii. Ca oraș universitar major, Iași găzduiește cea mai veche universitate din țară și este un centru esențial pentru literatură și știință.",
      en: "Iași is the cultural and historical heart of Moldavia and one of the oldest cities in Romania. Located on seven hills in the northeast of the country, it served for centuries as the capital of the Principality of Moldavia. It is famous for its magnificent churches, historical monasteries, and the stunning Palace of Culture. As a major university city, Iași is home to the country's oldest university and remains a vital center for literature and science.",
    },
    facts: {
      de: [
        "Die Universität Alexandru Ioan Cuza wurde 1860 als erste Universität Rumäniens gegründet.",
        "Der Kulturpalast beherbergt vier Museen und ist ein Meisterwerk der Neogotik.",
        "Iași war zwischen 1916 und 1918 die provisorische Hauptstadt Rumäniens.",
        "Das Nationaltheater Vasile Alecsandri gilt als eines der schönsten Theatergebäude Europas.",
        "Die Metropolitankathedrale ist die größte orthodoxe Kirche in Rumänien.",
        "Der Copou-Park beherbergt die berühmte Linde des Dichters Mihai Eminescu.",
        "Das Kloster der Drei Hierarchen ist bekannt für seine einzigartigen Steinschnitzereien.",
        "Iași ist als 'Stadt der 100 Kirchen' bekannt.",
      ],
      hu: [
        "Az Alexandru Ioan Cuza Egyetem 1860-ban alakult meg Románia első egyetemeként.",
        "A Kultúrpalota négy múzeumnak ad otthont, és a neogótikus építészet remekműve.",
        "1916 és 1918 között Iași volt Románia ideiglenes fővárosa.",
        "A Vasile Alecsandri Nemzeti Színház Európa egyik legszebb színházépülete.",
        "A Metropolita-székesegyház Románia legnagyobb ortodox temploma.",
        "A Copou-parkban található Mihai Eminescu költő híres hársfája.",
        "A Három Hierarcha-kolostor egyedülálló kőfaragványairól híres.",
        "A várost a '100 templom városaként' is emlegetik.",
      ],
      ro: [
        "Universitatea 'Alexandru Ioan Cuza' este prima universitate modernă din România, fondată în 1860.",
        "Palatul Culturii găzduiește patru muzee naționale și este o capodoperă a stilului neogotic.",
        "Iași a fost capitala provizorie a României în timpul Primului Război Mondial (1916-1918).",
        "Teatrul Național 'Vasile Alecsandri' este considerat unul dintre cele mai frumoase din Europa.",
        "Catedrala Mitropolitană este cea mai mare biserică ortodoxă din România.",
        "Grădina Copou adăpostește celebrul Tei al lui Eminescu, loc de pelerinaj cultural.",
        "Mănăstirea Sfinții Trei Ierarhi este celebră pentru decorațiunile sale exterioare sculptate în piatră.",
        "Orașul este supranumit 'Capitala culturală a României'.",
      ],
      en: [
        "Alexandru Ioan Cuza University was founded in 1860 as Romania's first modern university.",
        "The Palace of Culture houses four national museums and is a neo-Gothic masterpiece.",
        "Iași served as the temporary capital of Romania during World War I (1916-1918).",
        "The Vasile Alecsandri National Theatre is considered one of the most beautiful in Europe.",
        "The Metropolitan Cathedral is the largest Orthodox church in Romania.",
        "Copou Garden is home to Eminescu's Linden Tree, a site of cultural pilgrimage.",
        "The Monastery of the Three Holy Hierarchs is famous for its unique stone-carved exterior.",
        "The city is often referred to as the 'Cultural Capital of Romania'.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-iasi.webp",
  },
  {
    id: "city-constanta", type: "state-capital", parent: "RO-CT", coords: [28.6348, 44.1598],
    name: { de: "Konstanza", hu: "Konstanca", ro: "Constanța", en: "Constanța" },
    description: {
      de: "Konstanza ist die wichtigste Hafenstadt Rumäniens und liegt am Westufer des Schwarzen Meeres. Sie wurde vor über 2500 Jahren als griechische Kolonie Tomis gegründet und ist damit eine der ältesten kontinuierlich bewohnten Städte des Landes. Die Stadt verbindet antike Ruinen mit modernem Hafenbetrieb und ist das Tor zu den rumänischen Badeorten. Besonders sehenswert ist die historische Altstadt mit dem berühmten Casino und dem Ovid-Platz.",
      hu: "Konstanca Románia legfontosabb kikötővárosa, a Fekete-tenger nyugati partján fekszik. Több mint 2500 évvel ezelőtt alapították Tomis néven görög gyarmatként, így az ország egyik legrégebbi, folyamatosan lakott városa. A városban az ókori romok modern kikötői élettel párosulnak, és ez a kapu a román tengerparti üdülőhelyek felé. Különösen érdemes meglátogatni a történelmi óvárost a híres Kaszinóval és az Ovidius térrel.",
      ro: "Constanța este cel mai important oraș-port al României, situat pe țărmul vestic al Mării Negre. Fondat acum peste 2500 de ani ca colonie grecească sub numele de Tomis, este unul dintre cele mai vechi orașe locuite neîntrerupt din țară. Orașul îmbină vestigiile antice cu activitatea portuară modernă, fiind poarta de acces către stațiunile de pe litoralul românesc. Centrul istoric, cu celebrul Cazinou și Piața Ovidiu, este o atracție majoră.",
      en: "Constanța is Romania's most important port city, located on the western shore of the Black Sea. Founded over 2500 years ago as the Greek colony of Tomis, it is one of the oldest continuously inhabited cities in the country. The city blends ancient ruins with modern port operations and serves as the gateway to Romania's seaside resorts. The historical old town, featuring the famous Casino and Ovid Square, is a major highlight.",
    },
    facts: {
      de: [
        "Der Hafen von Konstanza ist der größte am Schwarzen Meer und einer der größten in Europa.",
        "Der römische Dichter Ovid verbrachte hier seine letzten Jahre im Exil.",
        "Das Casino von Konstanza ist ein Meisterwerk des Jugendstils direkt am Meer.",
        "Das Archäologische Museum beherbergt die berühmte Statue 'Glykon-Schlange'.",
        "Die Große Mahmudiye-Moschee bietet einen Panoramablick über die Stadt.",
        "In der Nähe liegt Mamaia, der größte und bekannteste Badeort Rumäniens.",
        "Das Genuesische Leuchtfeuer erinnert an die mittelalterliche Handelsgeschichte.",
        "Die Stadt besitzt ein beeindruckendes römisches Mosaik aus dem 4. Jahrhundert.",
      ],
      hu: [
        "Konstanca kikötője a legnagyobb a Fekete-tengeren és az egyik legnagyobb Európában.",
        "Ovidius, a római költő itt töltötte száműzetésének utolsó éveit.",
        "A konstancai Kaszinó a szecessziós építészet remekműve közvetlenül a tengerparton.",
        "A Régészeti Múzeumban található a híres 'Glykon-kígyó' szobor.",
        "A Mahmudiye-mecset tornyából csodálatos panoráma nyílik a városra.",
        "A közelben található Mamaia, Románia legnagyobb és legismertebb üdülőhelye.",
        "A Genovai világítótorony a középkori kereskedelmi múltra emlékeztet.",
        "A városban egy lenyűgöző, 4. századi római mozaikpadló is megtekinthető.",
      ],
      ro: [
        "Portul Constanța este cel mai mare de la Marea Neagră și unul dintre cele mai mari din Europa.",
        "Poetul roman Publius Ovidius Naso a trăit aici ultimii ani de viață, în exil.",
        "Cazinoul din Constanța este o capodoperă a stilului Art Nouveau, situat pe faleză.",
        "Muzeul de Istorie Națională și Arheologie adăpostește celebrul 'Șarpe Glykon'.",
        "Marea Moschee Carol I oferă o vedere panoramică spectaculoasă asupra orașului și portului.",
        "Mamaia, situată la nord de oraș, este cea mai mare și populară stațiune de pe litoral.",
        "Farul Genovez este un monument istoric ce amintește de comerțul medieval.",
        "Edificiul Roman cu Mozaic este unul dintre cele mai mari de acest tip din lume.",
      ],
      en: [
        "The Port of Constanța is the largest on the Black Sea and one of the largest in Europe.",
        "The Roman poet Ovid spent his final years of exile here.",
        "The Constanța Casino is an Art Nouveau masterpiece located right on the seafront.",
        "The National History and Archaeology Museum houses the famous 'Glykon Snake' statue.",
        "The Grand Mosque of Constanța offers a spectacular panoramic view of the city and port.",
        "Mamaia, located just north of the city, is Romania's largest and most popular seaside resort.",
        "The historical Genoese Lighthouse is a monument recalling medieval trade.",
        "The Roman Mosaics Edifice is one of the largest of its kind in the world.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-constanta.webp",
  },
  {
    id: "city-brasov", type: "state-capital", parent: "RO-BV", coords: [25.6104, 45.6427],
    name: { de: "Kronstadt", hu: "Brassó", ro: "Brașov", en: "Brașov" },
    description: {
      de: "Brașov liegt im Herzen Rumäniens am Fuße des Tâmpa-Berges und ist eine der meistbesuchten Städte des Landes. Die Stadt wurde von den Siebenbürger Sachsen gegründet und besticht durch ihre gut erhaltene mittelalterliche Altstadt mit kopfsteingepflasterten Gassen und farbenfrohen Häusern. Als Tor zu den Karpaten bietet sie eine perfekte Mischung aus historischem Erbe und atemberaubender Natur. Die monumentale Schwarze Kirche und der lebhafte Rathausplatz sind die zentralen Wahrzeichen dieser geschichtsträchtigen Metropole.",
      hu: "Brassó Románia szívében, a Cenk-hegy lábánál fekszik, és az ország egyik leglátogatottabb városa. Az erdélyi szászok által alapított város jól megőrzött középkori óvárosával, macskaköves utcáival és színes házaival bűvöli el a látogatókat. A Kárpátok kapujaként a történelmi örökség és a lenyűgöző természet tökéletes keverékét kínálja. A monumentális Fekete templom és a nyüzsgő Tanácstér e történelmi metropolisz központi jelképei.",
      ro: "Brașov este situat în inima României, la poalele muntelui Tâmpa, fiind unul dintre cele mai vizitate orașe din țară. Fondat de sașii transilvăneni, orașul impresionează prin centrul său medieval bine conservat, cu străzi pietruite și case colorate. Ca poartă de acces către Carpați, oferă un amestec perfect de moștenire istorică și natură spectaculoasă. Monumentala Biserică Neagră și Piața Sfatului sunt reperele centrale ale acestei metropole pline de istorie.",
      en: "Brașov is located in the heart of Romania at the foot of Mount Tâmpa and is one of the most visited cities in the country. Founded by the Transylvanian Saxons, the city impresses with its well-preserved medieval old town, featuring cobblestone streets and colorful houses. As the gateway to the Carpathians, it offers a perfect blend of historical heritage and stunning nature. The monumental Black Church and the lively Council Square are the central landmarks of this historic metropolis.",
    },
    facts: {
      de: [
        "Die Schwarze Kirche ist der größte gotische Sakralbau in Südosteuropa.",
        "Die Schnurrgasse (Strada Sforii) gilt als eine der schmalsten Straßen Europas.",
        "Brașov war über Jahrhunderte ein bedeutendes Handelszentrum zwischen Orient und Okzident.",
        "Auf dem Gipfel des Tâmpa-Berges steht ein Hollywood-ähnlicher Schriftzug der Stadt.",
        "Die Stadtmauer und die Bastionen zeugen von der wehrhaften Vergangenheit der Stadt.",
        "Poiana Brașov, das bekannteste Skigebiet Rumäniens, liegt nur 12 km entfernt.",
        "Das Rathaus beherbergt heute das Historische Museum der Stadt.",
        "Jährlich findet hier das internationale Musikfestival 'Der Goldene Hirsch' statt.",
      ],
      hu: [
        "A Fekete templom Délkelet-Európa legnagyobb gótikus temploma.",
        "A Zsinór utca (Strada Sforii) Európa egyik legkeskenyebb utcájaként ismert.",
        "Brassó évszázadokon át fontos kereskedelmi központ volt Kelet és Nyugat között.",
        "A Cenk-hegy tetején egy Hollywood-stílusú városfelirat látható.",
        "A városfalak és a bástyák a város egykori védelmi erejéről tanúskodnak.",
        "Poiana Brașov, Románia legismertebb síközpontja mindössze 12 km-re található.",
        "A régi városháza épületében ma a városi történelmi múzeum működik.",
        "Itt rendezik meg az 'Aranyszarvas' nemzetközi könnyűzenei fesztivált.",
      ],
      ro: [
        "Biserica Neagră este cel mai mare edificiu religios în stil gotic din sud-estul Europei.",
        "Strada Sforii este considerată una dintre cele mai înguste străzi din Europa.",
        "Brașovul a fost timp de secole un centru comercial vital între Orient și Occident.",
        "Pe muntele Tâmpa se află o emblemă of orașului, similară cu celebrul semn Hollywood.",
        "Zidurile cetății și bastioanele păstrate atestă trecutul defensiv al orașului.",
        "Poiana Brașov, cea mai renumită stațiune montană din țară, se află la doar 12 km.",
        "Casa Sfatului găzduiește astăzi Muzeul Județean de Istorie.",
        "Orașul este gazda celebrului festival internațional de muzică 'Cerbul de Aur'.",
      ],
      en: [
        "The Black Church is the largest Gothic religious building in Southeast Europe.",
        "Rope Street (Strada Sforii) is considered one of the narrowest streets in Europe.",
        "Brașov was for centuries a vital commercial hub between the Orient and the Occident.",
        "A Hollywood-style sign of the city stands on the summit of Mount Tâmpa.",
        "The preserved fortress walls and bastions testify to the city's defensive past.",
        "Poiana Brașov, Romania's most famous mountain resort, is only 12 km away.",
        "The Council House now serves as the County History Museum.",
        "The city hosts the famous 'Golden Stag' international music festival.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-brasov.webp",
  },
  {
    id: "city-craiova", type: "state-capital", parent: "RO-DJ", coords: [23.7949, 44.3302],
    name: { de: "Craiova", hu: "Craiova", ro: "Craiova", en: "Craiova" },
    description: {
      de: "Craiova ist die historische Hauptstadt der Region Oltenien und ein bedeutendes wirtschaftliches sowie akademisches Zentrum im Südwesten Rumäniens. Die Stadt ist bekannt für ihre prachtvollen Paläste, weitläufigen Parkanlagen und eine reiche kulturelle Tradition. Als Sitz zahlreicher Industriebetriebe und einer renommierten Universität spielt Craiova eine Schlüsselrolle in der regionalen Entwicklung. Das Stadtbild wird durch eine Mischung aus klassizistischer Architektur und modernen Akzenten geprägt.",
      hu: "Craiova Olténia történelmi fővárosa, valamint Délnyugat-Románia jelentős gazdasági és akadémiai központja. A város pompás palotáiról, kiterjedt parkjairól és gazdag kulturális hagyományairól ismert. Számos ipari vállalat és egy neves egyetem székhelyeként Craiova kulcsszerepet játszik a régió fejlődésében. A városképet a klasszicista építészet és a modern elemek keveredése határozza meg.",
      ro: "Craiova este capitala istorică a Olteniei și un centru economic și academic major în sud-vestul României. Orașul este renumit pentru palatele sale somptuoase, parcurile întinse și o bogată tradiție culturală. Fiind sediul a numeroase industrii și al unei universități de prestigiu, Craiova joacă un rol cheie în dezvoltarea regională. Peisajul urban este definit de un amestec de arhitectură clasicistă și accente moderne.",
      en: "Craiova is the historical capital of Oltenia and a major economic and academic center in southwestern Romania. The city is renowned for its magnificent palaces, extensive parks, and a rich cultural tradition. As the seat of numerous industries and a prestigious university, Craiova plays a key role in regional development. The cityscape is characterized by a blend of Neoclassical architecture and modern accents.",
    },
    facts: {
      de: [
        "Der Nicolae-Romanescu-Park ist einer der größten und schönsten Naturparks in Europa.",
        "Das Kunstmuseum von Craiova beherbergt bedeutende Werke des Bildhauers Constantin Brâncuși.",
        "Die Stadt war einst der Sitz der Banat-Verwaltung der Walachei.",
        "Craiova ist ein wichtiges Zentrum der rumänischen Automobilindustrie (Ford-Werk).",
        "Die Universität von Craiova ist eine der führenden Bildungseinrichtungen des Landes.",
        "Das Rathausgebäude ist ein beeindruckendes Beispiel für den neorumänischen Architekturstil.",
        "Die Stadt ist bekannt für ihre lebendige Theaterszene und das Shakespeare-Festival.",
        "Die Madonna-Dudu-Kirche ist ein bedeutendes religiöses und historisches Denkmal.",
      ],
      hu: [
        "A Nicolae Romanescu park Európa egyik legnagyobb és legszebb természetes parkja.",
        "A Craiovai Művészeti Múzeumban Constantin Brâncuși szobrászművész jelentős alkotásai láthatók.",
        "A város egykor a Havasalföldi bánság igazgatási központja volt.",
        "Craiova a román autóipar egyik fontos központja (Ford-gyár).",
        "A Craiovai Egyetem az ország egyik vezető oktatási intézménye.",
        "A városháza épülete a neoromán építészeti stílus egyik lenyűgöző példája.",
        "A város híres élénk színházi életéről és a nemzetközi Shakespeare-fesztiválról.",
        "A Madona Dudu-templom jelentős vallási és történelmi műemlék.",
      ],
      ro: [
        "Parcul Nicolae Romanescu este unul dintre cele mai mari și frumoase parcuri naturale din Europa.",
        "Muzeul de Artă din Craiova adăpostește opere valoroase ale sculptorului Constantin Brâncuși.",
        "Orașul a fost reședința Marii Bănii a Craiovei, având o importanță politică istorică.",
        "Craiova este un centru vital al industriei auto din România, găzduind uzina Ford.",
        "Universitatea din Craiova este una dintre cele mai importante instituții de învățământ din țară.",
        "Clădirea Primăriei este un exemplu remarcabil al stilului arhitectural neoromânesc.",
        "Orașul este renumit pentru viața sa teatrală și pentru Festivalul Internațional Shakespeare.",
        "Biserica Madona Dudu este un simbol spiritual și un monument istoric de seamă.",
      ],
      en: [
        "Nicolae Romanescu Park is one of the largest and most beautiful natural parks in Europe.",
        "The Craiova Art Museum houses significant works by the sculptor Constantin Brâncuși.",
        "The city was once the seat of the Great Ban of Craiova, holding historical political importance.",
        "Craiova is a vital hub for the Romanian automotive industry, hosting the Ford plant.",
        "The University of Craiova is one of the leading educational institutions in the country.",
        "The City Hall building is a remarkable example of the Neo-Romanian architectural style.",
        "The city is famous for its vibrant theater scene and the International Shakespeare Festival.",
        "The Madona Dudu Church is a significant spiritual symbol and historical monument.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-craiova.webp",
  },
  {
    id: "city-galati", type: "state-capital", parent: "RO-GL", coords: [28.0323, 45.4353],
    name: { de: "Galați", hu: "Galac", ro: "Galați", en: "Galați" },
    description: {
      de: "Galați ist eine bedeutende Hafenstadt im Osten Rumäniens und liegt am linken Ufer der Donau, nahe der Mündung des Prut. Die Stadt ist ein wichtiges Industriezentrum, insbesondere für die Stahlproduktion und den Schiffbau. Durch ihre strategische Lage am Fluss war Galați über Jahrhunderte ein entscheidender Handelsplatz zwischen dem Binnenland und dem Schwarzen Meer. Die weitläufige Donaupromenade bietet einen herrlichen Blick auf den Fluss und ist ein beliebter Treffpunkt für Einwohner und Besucher.",
      hu: "Galac (Galați) jelentős kikötőváros Románia keleti részén, a Duna bal partján, a Prut torkolatának közelében fekszik. A város fontos ipari központ, különösen az acélgyártás és a hajóépítés terén kiemelkedő. Stratégiai folyami elhelyezkedése révén Galac évszázadokon át döntő fontosságú kereskedelmi csomópont volt a szárazföld és a Fekete-tenger között. A kiterjedt dunai sétány lenyűgöző kilátást nyújt a folyóra, és a helyiek, valamint a látogatók kedvelt találkozóhelye.",
      ro: "Galați este un oraș-port major din estul României, situat pe malul stâng al Dunării, aproape de gura de vărsare a Prutului. Orașul este un centru industrial esențial, remarcându-se în special prin producția de oțel și construcțiile navale. Datorită poziției sale strategice pe fluviu, Galați a fost timp de secole un punct comercial vital între interiorul țării și Marea Neagră. Faleza Dunării, una dintre cele mai lungi din Europa, oferă o priveliște superbă și este un loc preferat de promenadă.",
      en: "Galați is a major port city in eastern Romania, situated on the left bank of the Danube, near the mouth of the Prut River. The city is a key industrial hub, particularly known for steel production and shipbuilding. Due to its strategic location on the river, Galați served for centuries as a vital commercial link between the hinterland and the Black Sea. The extensive Danube promenade offers a magnificent view of the river and is a popular gathering spot for residents and visitors.",
    },
    facts: {
      de: [
        "Galați beherbergt das größte Stahlwerk Rumäniens (Liberty Galați).",
        "Die Stadt besitzt eine der längsten Uferpromenaden an der Donau in Europa.",
        "Die befestigte Kirche Precista ist das älteste historische Denkmal der Stadt.",
        "Galați ist ein bedeutendes Zentrum für die Ausbildung von Marineingenieuren.",
        "Der Botanische Garten von Galați gehört zu den modernsten des Landes.",
        "Die Stadt war im 19. Jahrhundert ein wichtiger Freihafen.",
        "Das Fernsehturm-Restaurant bietet einen Panoramablick über die gesamte Region.",
        "Galați liegt am Schnittpunkt der historischen Regionen Moldau, Walachei und Dobrudscha.",
      ],
      hu: [
        "Galac ad otthont Románia legnagyobb acélművének (Liberty Galați).",
        "A város rendelkezik Európa egyik leghosszabb dunai sétányával.",
        "A Precista erődtemplom a város legrégebbi történelmi műemléke.",
        "Galac a tengerészeti mérnökképzés egyik kiemelkedő központja.",
        "A galaci botanikus kert az ország egyik legmodernebb ilyen intézménye.",
        "A város a 19. században fontos szabadkikötőként működött.",
        "A tévétorony étterméből panorámás kilátás nyílik az egész régióra.",
        "Galac Moldva, Havasalföld és Dobrudzsa történelmi régiók találkozásánál fekszik.",
      ],
      ro: [
        "Galați găzduiește cel mai mare combinat siderurgic din România (Liberty Galați).",
        "Orașul deține una dintre cele mai lungi faleze amenajate de pe malul Dunării din Europa.",
        "Biserica fortificată Precista este cel mai vechi monument istoric din oraș.",
        "Este un centru universitar de prestigiu pentru ingineria navală.",
        "Grădina Botanică din Galați este una dintre cele mai moderne și complexe din țară.",
        "În secolul al XIX-lea, orașul a avut statutul de Porto-Franco (port liber).",
        "Turnul de Televiziune oferă o vedere panoramică spectaculoasă asupra orașului și Dunării.",
        "Galați se află la intersecția regiunilor istorice Moldova, Muntenia și Dobrogea.",
      ],
      en: [
        "Galați is home to Romania's largest steel mill (Liberty Galați).",
        "The city boasts one of the longest developed Danube promenades in Europe.",
        "The Precista Fortified Church is the oldest historical monument in the city.",
        "It is a prestigious university center for naval engineering.",
        "The Galați Botanical Garden is one of the most modern and complex in the country.",
        "In the 19th century, the city held the status of Porto-Franco (free port).",
        "The TV Tower restaurant offers a spectacular panoramic view of the city and the Danube.",
        "Galați is located at the crossroads of the historical regions of Moldavia, Wallachia, and Dobruja.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-galati.webp",
  },
  {
    id: "city-oradea", type: "state-capital", parent: "RO-BH", coords: [21.9189, 47.0722],
    name: { de: "Großwardein", hu: "Nagyvárad", ro: "Oradea", en: "Oradea" },
    description: {
      de: "Oradea ist eine prachtvolle Stadt im Nordwesten Rumäniens, nahe der ungarischen Grenze, und gilt als Hauptstadt des Jugendstils im Land. Die Stadt liegt am Ufer der Schnellen Kreisch (Crișul Repede) und beeindruckt durch ihre sorgfältig restaurierte Architektur aus der Zeit der Österreichisch-Ungarischen Monarchie. Oradea ist ein Schmelztiegel der Kulturen und Religionen, was sich in der Vielfalt ihrer Kirchen, Synagogen und Paläste widerspiegelt. Heute ist sie eine der dynamischsten und lebenswertesten Städte Rumäniens.",
      hu: "Nagyvárad (Oradea) egy pompás város Románia északnyugati részén, a magyar határ közelében, és az ország szecessziós fővárosaként ismert. A Sebes-Körös partján fekvő város lenyűgöző, gondosan restaurált építészettel büszkélkedhet az Osztrák–Magyar Monarchia idejéből. Nagyvárad a kultúrák és vallások olvasztótégelye, ami templomainak, zsinagógáinak és palotáinak sokszínűségében is tükröződik. Ma Románia egyik legdinamikusabb és legélhetőbb városa.",
      ro: "Oradea este un oraș splendid din nord-vestul României, situat aproape de granița cu Ungaria, fiind considerat capitala Art Nouveau a țării. Orașul, traversat de Crișul Repede, impresionează prin arhitectura sa meticulos restaurată din perioada Austro-Ungară. Oradea este un creuzet de culturi și religii, fapt reflectat în diversitatea bisericilor, sinagogilor și palatelor sale. Astăzi, este unul dintre cele mai dinamice și atractive orașe din România.",
      en: "Oradea is a magnificent city in northwestern Romania, near the Hungarian border, and is considered the country's Art Nouveau capital. Situated on the banks of the Crișul Repede River, the city impresses with its meticulously restored architecture from the Austro-Hungarian era. Oradea is a melting pot of cultures and religions, reflected in the diversity of its churches, synagogues, and palaces. Today, it is one of the most dynamic and livable cities in Romania.",
    },
    facts: {
      de: [
        "Oradea ist Mitglied des exklusiven Netzwerks europäischer Jugendstil-Städte.",
        "Die Festung von Oradea ist eine der am besten erhaltenen sternförmigen Festungen Osteuropas.",
        "Der Palast 'Schwarzer Adler' (Vulturul Negru) ist das architektonische Wahrzeichen der Stadt.",
        "Die Stadt beherbergt die größte Barockkirche Rumäniens.",
        "Băile Felix, der größte dauerhafte Thermalbadeort des Landes, liegt direkt vor den Toren der Stadt.",
        "Oradea war im Mittelalter ein bedeutendes astronomisches Zentrum mit dem 'Nullmeridian'.",
        "Die Neologe Synagoge Zion ist eine der beeindruckendsten Synagogen in der Region.",
        "Die Stadt hat in den letzten Jahren zahlreiche europäische Preise für Stadtentwicklung gewonnen.",
      ],
      hu: [
        "Nagyvárad tagja az európai szecessziós városok exkluzív hálózatának.",
        "A nagyváradi vár Kelet-Európa egyik legjobb állapotban fennmaradt csillag alakú erődítménye.",
        "A Fekete Sas-palota (Vulturul Negru) a város építészeti jelképe.",
        "A városban található Románia legnagyobb barokk temploma (a római katolikus székesegyház).",
        "Félixfürdő, az ország legnagyobb állandó termálvizes üdülőhelye a város kapujában fekszik.",
        "Nagyvárad a középkorban fontos csillagászati központ volt, itt haladt át a 'kezdőmeridián'.",
        "A neológ zsinagóga a régió egyik legimpozánsabb zsidó temploma.",
        "A város az elmúlt években számos európai díjat nyert városfejlesztési projektjeivel.",
      ],
      ro: [
        "Oradea este singurul oraș din România care face parte din rețeaua europeană a orașelor Art Nouveau.",
        "Cetatea Oradea este una dintre cele mai bine conservate fortificații în stil stea din Europa de Est.",
        "Palatul Vulturul Negru este cel mai emblematic monument arhitectural al orașului.",
        "Găzduiește cel mai mare complex baroc din România, incluzând Catedrala Romano-Catolică.",
        "Stațiunea Băile Felix, renumită pentru apele sale termale, se află la doar câțiva kilometri.",
        "În perioada medievală, Oradea a fost un centru astronomic major, având stabilit aici 'Meridianul Zero'.",
        "Sinagoga Neologă Sion este a treia ca mărime din Europa și un punct turistic important.",
        "Orașul a fost desemnat în repetate rânduri drept unul dintre cele mai eficiente orașe din România.",
      ],
      en: [
        "Oradea is the only city in Romania that is a member of the European Art Nouveau Cities Network.",
        "The Oradea Fortress is one of the best-preserved star-shaped fortifications in Eastern Europe.",
        "The Black Eagle Palace (Vulturul Negru) is the city's most iconic architectural landmark.",
        "It houses the largest Baroque complex in Romania, including the Roman Catholic Cathedral.",
        "Băile Felix, the country's largest permanent thermal resort, is located just a few kilometers away.",
        "In medieval times, Oradea was a major astronomical center, with the 'Prime Meridian' established here.",
        "The Zion Neologue Synagogue is the third largest in Europe and a significant tourist site.",
        "The city has been repeatedly recognized as one of the most efficient and livable in Romania.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-oradea.webp",
  },
  {
    id: "city-ploiesti", type: "state-capital", parent: "RO-PH", coords: [26.0127, 44.9369],
    name: { de: "Ploiești", hu: "Ploiești", ro: "Ploiești", en: "Ploiești" },
    description: { de: "Erdölzentrum Rumäniens nördlich von Bukarest.", hu: "Románia kőolajközpontja Bukaresttől északra.", ro: "Centrul petrolier al României, la nord de București.", en: "Romania's oil hub north of Bucharest." },
    facts: { de: ["Erste Raffinerie der Welt 1857.", "Uhrenmuseum.", "Schwere Bombardierungen 1943/44."], hu: ["A világ első kőolajfinomítója, 1857.", "Óramúzeum.", "Súlyos bombázások 1943–44-ben."], ro: ["Prima rafinărie din lume (1857).", "Muzeul Ceasului.", "Bombardamente grele 1943/44."], en: ["World's first refinery (1857).", "Clock Museum.", "Heavy bombings in 1943/44."] },
    historyPeriod: "ww2", historyYear: [1943, 1944],
    image: "/geo-images/romania/city-ploiesti.webp",
  },
  {
    id: "city-pitesti", type: "state-capital", parent: "RO-AG", coords: [24.8697, 44.8563],
    name: { de: "Pitești", hu: "Pitești", ro: "Pitești", en: "Pitești" },
    description: { de: "Wirtschaftszentrum Muntenas, Standort Dacia-Renault.", hu: "Munténia gazdasági központja, a Dacia-Renault telephelye.", ro: "Centru economic al Munteniei, sediu Dacia-Renault.", en: "Economic center of Muntenia, home of Dacia-Renault." },
    facts: { de: ["Dacia-Werk Mioveni.", "Schlosspark Trivale.", "Obstbau (Argeș)."], hu: ["Dacia-gyár Mioveniben.", "Trivale-park.", "Gyümölcstermelés (Argeș)."], ro: ["Uzina Dacia de la Mioveni.", "Parcul Trivale.", "Pomicultură pe Argeș."], en: ["Dacia plant at Mioveni.", "Trivale Park.", "Fruit orchards (Argeș)."] },
    image: "/geo-images/romania/city-pitesti.webp",
  },
  {
    id: "city-arad", type: "state-capital", parent: "RO-AR", coords: [21.3123, 46.1866],
    name: { de: "Arad", hu: "Arad", ro: "Arad", en: "Arad" },
    description: { de: "Stadt an der Mureș, geprägt von habsburgischer Architektur.", hu: "A Maros menti város habsburg építészettel.", ro: "Oraș pe Mureș, cu arhitectură habsburgică.", en: "City on the Mureș with Habsburg architecture." },
    facts: { de: ["Zitadelle von Arad (1763).", "13 Märtyrer von 1849.", "Rumäniens größtes Theater."], hu: ["Aradi vár (1763).", "1849-es 13 aradi vértanú.", "Románia legnagyobb színháza."], ro: ["Cetatea Aradului (1763).", "Cei 13 martiri din 1849.", "Teatrul cel mai mare al României."], en: ["Arad Citadel (1763).", "13 Martyrs of 1849.", "Romania's largest theatre."] },
    historyPeriod: "empire", historyYear: 1849,
    image: "/geo-images/romania/city-arad.webp",
  },
  {
    id: "city-sibiu", type: "state-capital", parent: "RO-SB", coords: [24.1524, 45.7983],
    name: { de: "Hermannstadt", hu: "Nagyszeben", ro: "Sibiu", en: "Sibiu" },
    description: {
      de: "Sibiu ist eine der malerischsten Städte Siebenbürgens und bekannt für ihr außergewöhnlich gut erhaltenes historisches Zentrum. Die Stadt wurde im 12. Jahrhundert von deutschen Siedlern gegründet und war über Jahrhunderte das kulturelle und politische Zentrum der Siebenbürger Sachsen. Mit ihren drei miteinander verbundenen Plätzen, den charakteristischen Häusern mit 'Augen' und den mittelalterlichen Wehranlagen versprüht Sibiu einen einzigartigen europäischen Charme. Heute ist die Stadt ein bedeutendes Kulturzentrum, das durch internationale Festivals und Museen Weltruf genießt.",
      hu: "Nagyszeben (Sibiu) Erdély egyik legfestőibb városa, amely kivételesen jól megőrzött történelmi központjáról ismert. A várost a 12. században német telepesek alapították, és évszázadokon át az erdélyi szászok kulturális és politikai központja volt. Három egymáshoz kapcsolódó terével, jellegzetes 'szemes' házaival és középkori védműveivel Nagyszeben egyedülálló európai hangulatot áraszt. Ma a város jelentős kulturális központ, amely nemzetközi fesztiváljai és múzeumai révén világhírnévnek örvend.",
      ro: "Sibiu este unul dintre cele mai pitorești orașe din Transilvania, renumit pentru centrul său istoric excepțional de bine conservat. Orașul a fost fondat în secolul al XII-lea de coloniști germani și a fost timp de secole centrul cultural și politic al sașilor transilvăneni. Cu cele trei piețe interconectate, casele caracteristice cu 'ochi' și sistemele de fortificații medievale, Sibiu emană un farmec european unic. Astăzi, orașul este un centru cultural major, recunoscut la nivel mondial prin festivalurile și muzeele sale.",
      en: "Sibiu is one of the most picturesque cities in Transylvania, famous for its exceptionally well-preserved historical center. Founded in the 12th century by German settlers, the city served for centuries as the cultural and political hub of the Transylvanian Saxons. With its three interconnected squares, characteristic houses with 'eyes', and medieval fortification systems, Sibiu exudes a unique European charm. Today, the city is a major cultural center, enjoying world renown through its international festivals and museums.",
    },
    facts: {
      de: [
        "Sibiu war 2007 die erste Stadt in Osteuropa, die zur Kulturhauptstadt Europas ernannt wurde.",
        "Das Brukenthal-Museum ist das älteste Museum Rumäniens und beherbergt eine bedeutende Kunstsammlung.",
        "Die 'Augen der Stadt' sind eigentlich Lüftungsschlitze in den Dächern der alten Häuser.",
        "Die Lügenbrücke ist die erste gusseiserne Brücke Rumäniens und Gegenstand zahlreicher Legenden.",
        "Das ASTRA-Museum am Stadtrand ist eines der größten Freilichtmuseen der Welt.",
        "Sibiu beherbergt das drittgrößte internationale Theaterfestival der Welt.",
        "Die evangelische Stadtpfarrkirche besitzt eine der größten Orgeln in Südosteuropa.",
        "Die Stadt war im Mittelalter durch 39 Zunfttürme und vier Verteidigungsgürtel geschützt.",
      ],
      hu: [
        "Nagyszeben volt 2007-ben Kelet-Európa első városa, amely elnyerte az Európa Kulturális Fővárosa címet.",
        "A Brukenthal Múzeum Románia legrégebbi múzeuma, és jelentős művészeti gyűjteménynek ad otthont.",
        "A város 'szemei' valójában szellőzőnyílások a régi házak tetőszerkezetén.",
        "A Hazugságok hídja Románia első öntöttvas hídja, amelyhez számos legenda fűződik.",
        "A város szélén található ASTRA Múzeum a világ egyik legnagyobb szabadtéri néprajzi múzeuma.",
        "Nagyszebenben rendezik meg a világ harmadik legnagyobb nemzetközi színházi fesztiválját.",
        "Az evangélikus székesegyház orgonája az egyik legnagyobb Délkelet-Európában.",
        "A várost a középkorban 39 céhtorony és négy védelmi gyűrű oltalmazta.",
      ],
      ro: [
        "Sibiu a fost primul oraș din Europa de Est desemnat Capitală Culturală Europeană, în anul 2007.",
        "Muzeul Național Brukenthal este cel mai vechi muzeu din România, deschis publicului în 1817.",
        "'Ochii orașului' sunt de fapt ferestre de aerisire specifice acoperișurilor caselor vechi din Sibiu.",
        "Podul Minciunilor este primul pod din fontă din România, fiind înconjurat de numeroase legende.",
        "Muzeul ASTRA este unul dintre cele mai mari muzee în aer liber din lume, dedicat civilizației populare.",
        "Găzduiește Festivalul Internațional de Teatru de la Sibiu, al treilea ca mărime din lume.",
        "Catedrala Evanghelică are unul dintre cele mai înalte turnuri din Transilvania și o orgă monumentală.",
        "În secolul al XIV-lea, Sibiul era deja o cetate puternică, apărată de breslele meșteșugărești.",
      ],
      en: [
        "Sibiu was the first city in Eastern Europe to be designated European Capital of Culture, in 2007.",
        "The Brukenthal National Museum is the oldest museum in Romania, opened to the public in 1817.",
        "The 'Eyes of the City' are actually ventilation windows in the roofs of Sibiu's old houses.",
        "The Bridge of Lies is the first cast-iron bridge in Romania and is surrounded by numerous legends.",
        "The ASTRA Museum is one of the largest open-air museums in the world, dedicated to folk civilization.",
        "It hosts the Sibiu International Theatre Festival, the third largest in the world.",
        "The Evangelical Cathedral features one of the tallest towers in Transylvania and a monumental organ.",
        "In the 14th century, Sibiu was already a powerful fortress defended by craft guilds.",
      ],
    },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-sibiu.webp",
  },
  {
    id: "city-targu-mures", type: "state-capital", parent: "RO-MS", coords: [24.5635, 46.5425],
    name: { de: "Neumarkt am Mieresch", hu: "Marosvásárhely", ro: "Târgu Mureș", en: "Târgu Mureș" },
    description: { de: "Kreishauptstadt am Mureș, bekannt für den Kulturpalast.", hu: "Megyei jogú város a Maros partján, híres a Kultúrpalotáról.", ro: "Reședință de județ pe Mureș, cunoscută pentru Palatul Culturii.", en: "County seat on the Mureș, famed for its Palace of Culture." },
    facts: { de: ["Kulturpalast (1913) mit Jugendstilsälen.", "Teleki-Bolyai-Bibliothek.", "Medizinische Universität."], hu: ["Kultúrpalota (1913) szecessziós termekkel.", "Teleki-Bolyai Könyvtár.", "Orvosi egyetem."], ro: ["Palatul Culturii (1913) cu săli Art Nouveau.", "Biblioteca Teleki-Bolyai.", "Universitate de Medicină."], en: ["Palace of Culture (1913) with Art Nouveau halls.", "Teleki-Bolyai Library.", "Medical University."] },
    image: "/geo-images/romania/city-targu-mures.webp",
  },
  {
    id: "city-baia-mare", type: "state-capital", parent: "RO-MM", coords: [23.5802, 47.6578],
    name: { de: "Frauenbach", hu: "Nagybánya", ro: "Baia Mare", en: "Baia Mare" },
    description: { de: "Bergbaustadt im Maramureș, Zentrum der Nagybánya-Malerschule.", hu: "Bányászváros Máramarosban, a Nagybányai festőiskola központja.", ro: "Oraș minier în Maramureș, centru al Școlii de pictură Baia Mare.", en: "Mining town in Maramureș, home of the Baia Mare Painters' School." },
    facts: { de: ["Stefansturm (15. Jh.).", "Künstlerkolonie ab 1896.", "Nationales Dorfmuseum Maramureș in der Nähe."], hu: ["István-torony (15. század).", "Művésztelep 1896-tól.", "Máramarosi falumúzeum közelben."], ro: ["Turnul Ștefan (sec. XV).", "Colonia de pictori din 1896.", "Muzeul Satului Maramureșean."], en: ["Stephen's Tower (15th c.).", "Artist colony from 1896.", "Maramureș Village Museum nearby."] },
    image: "/geo-images/romania/city-baia-mare.webp",
  },
  {
    id: "city-bacau", type: "state-capital", parent: "RO-BC", coords: [26.9175, 46.5671],
    name: { de: "Bacău", hu: "Bákó", ro: "Bacău", en: "Bacău" },
    description: { de: "Industriestadt in der Moldau am Fluss Bistrița.", hu: "Moldvai ipari város a Beszterce folyó partján.", ro: "Oraș industrial moldovean, pe Bistrița.", en: "Moldavian industrial city on the Bistrița river." },
    facts: { de: ["Luftfahrt- und Maschinenbauindustrie.", "Fürstenhaus Ștefan cel Mare.", "Nähe zum Nemira-Gebirge."], hu: ["Repülőgép- és gépgyártás.", "Nagy István fejedelmi háza.", "Közeli Nemira-hegység."], ro: ["Industrie aeronautică și de utilaj.", "Curtea Domnească a lui Ștefan cel Mare.", "Munții Nemira aproape."], en: ["Aerospace and machinery industry.", "Princely Court of Stephen the Great.", "Near the Nemira Mountains."] },
    image: "/geo-images/romania/city-bacau.webp",
  },
  {
    id: "city-alba-iulia", type: "state-capital", parent: "RO-AB", coords: [23.5805, 46.0667],
    name: { de: "Karlsburg", hu: "Gyulafehérvár", ro: "Alba Iulia", en: "Alba Iulia" },
    description: { de: "Krönungsstadt und Symbol der rumänischen Einheit von 1918.", hu: "Koronázó város és az 1918-as román egyesülés jelképe.", ro: "Orașul încoronării și simbol al Marii Uniri de la 1918.", en: "Coronation city and symbol of the 1918 Great Union." },
    facts: { de: ["Alba-Carolina-Zitadelle (18. Jh.).", "Krönungskathedrale.", "Michael-Kathedrale (Katholisch)."], hu: ["Alba-Carolina vár (18. század).", "Koronázó székesegyház.", "Szent Mihály-székesegyház (katolikus)."], ro: ["Cetatea Alba Carolina (sec. XVIII).", "Catedrala Încoronării.", "Catedrala Sf. Mihail."], en: ["Alba Carolina Citadel (18th c.).", "Coronation Cathedral.", "St. Michael's Cathedral."] },
    historyPeriod: "ww1", historyYear: 1918,
    image: "/geo-images/romania/city-alba-iulia.webp",
  },
  {
    id: "city-suceava", type: "state-capital", parent: "RO-SV", coords: [26.2556, 47.6514],
    name: { de: "Suczawa", hu: "Szucsáva", ro: "Suceava", en: "Suceava" },
    description: { de: "Ehemalige Hauptstadt des Fürstentums Moldau.", hu: "A Moldvai Fejedelemség egykori fővárosa.", ro: "Fosta capitală a Moldovei medievale.", en: "Former capital of medieval Moldavia." },
    facts: { de: ["Festung von Suceava.", "Tor zur Bukowina (Klöster).", "Stefan der Große regierte hier."], hu: ["Szucsávai vár.", "Bukovina kapuja (kolostorok).", "Nagy István innen uralkodott."], ro: ["Cetatea de Scaun a Sucevei.", "Poarta Bucovinei (mănăstiri).", "Ștefan cel Mare a domnit aici."], en: ["Citadel of Suceava.", "Gateway to Bukovina (monasteries).", "Stephen the Great ruled from here."] },
    historyPeriod: "middle-ages",
    image: "/geo-images/romania/city-suceava.webp",
  },
  {
    id: "city-targoviste", type: "city", parent: "RO-DB", coords: [25.4572, 44.9254],
    name: { de: "Târgoviște", hu: "Târgoviște", ro: "Târgoviște", en: "Târgoviște" },
    description: { de: "Einstige Hauptstadt der Walachei mit Fürstenhof.", hu: "Havasalföld egykori fővárosa fejedelmi udvarral.", ro: "Fostă capitală a Țării Românești, cu Curtea Domnească.", en: "Former capital of Wallachia with a princely court." },
    facts: { de: ["Chindia-Turm (Vlad Țepeș).", "Hinrichtung Ceaușescus 1989.", "Fürstenhof Curtea Domnească."], hu: ["Chindia-torony (Vlad Tepes).", "Ceaușescu kivégzése 1989-ben.", "Curtea Domnească fejedelmi udvar."], ro: ["Turnul Chindia (Vlad Țepeș).", "Execuția soților Ceaușescu (1989).", "Curtea Domnească."], en: ["Chindia Tower (Vlad the Impaler).", "Ceaușescu's execution in 1989.", "Curtea Domnească princely court."] },
    historyPeriod: "modern", historyYear: 1989,
    image: "/geo-images/romania/city-targoviste.webp",
  },
  {
    id: "city-sighisoara", type: "city", parent: "RO-MS", coords: [24.7931, 46.2167],
    name: { de: "Schäßburg", hu: "Segesvár", ro: "Sighișoara", en: "Sighișoara" },
    description: { de: "Eine der besterhaltenen mittelalterlichen Stadtanlagen Europas (UNESCO).", hu: "Európa egyik legjobb állapotban fennmaradt középkori városmagja (UNESCO).", ro: "Una dintre cele mai bine păstrate cetăți medievale din Europa (UNESCO).", en: "One of Europe's best-preserved medieval fortified towns (UNESCO)." },
    facts: { de: ["UNESCO-Welterbe seit 1999.", "Stundturm (Turnul cu Ceas).", "Geburtshaus Vlad Țepeș."], hu: ["UNESCO-örökség 1999 óta.", "Óratorony.", "Vlad Tepes szülőháza."], ro: ["Patrimoniu UNESCO din 1999.", "Turnul cu Ceas.", "Casa lui Vlad Dracul."], en: ["UNESCO site since 1999.", "Clock Tower.", "Vlad Dracul's birthplace."] },
    historyPeriod: "middle-ages",
    image: "/geo-images/romania/city-sighisoara.webp",
  },
  {
    id: "city-drobeta-turnu-severin", type: "city", parent: "RO-MH", coords: [22.6566, 44.6369],
    name: { de: "Drobeta-Turnu Severin", hu: "Drobeta-Turnu Severin", ro: "Drobeta-Turnu Severin", en: "Drobeta-Turnu Severin" },
    description: { de: "Donaustadt am Eisernen Tor, auf der römischen Drobeta.", hu: "Dunai város a Vaskapunál, a római Drobeta helyén.", ro: "Oraș dunărean la Porțile de Fier, pe locul roman Drobeta.", en: "Danube city at the Iron Gates, on Roman Drobeta." },
    facts: { de: ["Pfeiler der Trajansbrücke.", "Eisernes Tor I-Staudamm.", "Eisen-Museum."], hu: ["Traianus hídjának pillérei.", "Vaskapu I vízerőmű.", "Vasmúzeum."], ro: ["Pilonii Podului lui Traian.", "Hidrocentrala Porțile de Fier I.", "Muzeul Regiunii Porților de Fier."], en: ["Piers of Trajan's Bridge.", "Iron Gates I hydro-dam.", "Iron Gates Regional Museum."] },
    historyPeriod: "empire",
    image: "/geo-images/romania/city-drobeta-turnu-severin.webp",
  },
  {
    id: "city-miercurea-ciuc", type: "state-capital", parent: "RO-HR", coords: [25.8, 46.3606],
    name: { de: "Szeklerburg", hu: "Csíkszereda", ro: "Miercurea Ciuc", en: "Miercurea Ciuc" },
    description: { de: "Szeklerstadt am Oberlauf des Olt.", hu: "Székely város az Olt felső folyásánál.", ro: "Oraș secuiesc, pe cursul superior al Oltului.", en: "Székely town on the upper Olt." },
    facts: { de: ["Miko-Burg (17. Jh.).", "Wallfahrt Șumuleu Ciuc / Csíksomlyó.", "Ciuc-Bier."], hu: ["Mikó-vár (17. század).", "Csíksomlyói búcsú.", "Csíki sör."], ro: ["Cetatea Mikó (sec. XVII).", "Pelerinajul Șumuleu Ciuc.", "Berea Ciuc."], en: ["Mikó Castle (17th c.).", "Șumuleu Ciuc pilgrimage.", "Ciuc beer."] },
    image: "/geo-images/romania/city-miercurea-ciuc.webp",
  },
  {
    id: "city-tulcea", type: "state-capital", parent: "RO-TL", coords: [28.8, 45.175],
    name: { de: "Tulcea", hu: "Tulcea", ro: "Tulcea", en: "Tulcea" },
    description: { de: "Tor zum Donaudelta.", hu: "A Duna-delta kapuja.", ro: "Poarta Deltei Dunării.", en: "Gateway to the Danube Delta." },
    facts: { de: ["Ausgangspunkt ins Delta.", "Denkmal der Unabhängigkeit (1878).", "Seehafen."], hu: ["Kiindulópont a deltába.", "Függetlenségi emlékmű (1878).", "Folyami kikötő."], ro: ["Punct de plecare în Deltă.", "Monumentul Independenței (1878).", "Port fluvial."], en: ["Starting point into the Delta.", "Independence Monument (1878).", "River port."] },
    image: "/geo-images/romania/city-tulcea.webp",
  },
  {
    id: "city-herastrau-park", type: "city", parent: "RO-B", coords: [26.0825, 44.4708],
    name: { de: "Herăstrău-Park", hu: "Herăstrău-park", ro: "Parcul Herăstrău", en: "Herăstrău Park" },
    description: { de: "Großer Park in Bukarest am Herăstrău-See.", hu: "Nagy park Bukarestben, a Herăstrău-tó partján.", ro: "Cel mai mare parc din București, situat pe malul lacului Herăstrău.", en: "Largest park in Bucharest, located on the shores of Lake Herăstrău." },
    facts: { de: ["König-Michael-I.-Park.", "Austragungsort für Wassersport.", "Nahe dem Triumphbogen."], hu: ["I. Mihály király park.", "Vizi sportok helyszíne.", "A Diadalív közelében."], ro: ["Numit și Parcul Regele Mihai I.", "Loc pentru sporturi nautice.", "Lângă Arcul de Triumf."], en: ["King Michael I Park.", "Venue for water sports.", "Near the Arch of Triumph."] },
    image: "/geo-images/romania/city-herastrau-park.webp",
  },
  {
    id: "city-village-museum", type: "city", parent: "RO-B", coords: [26.0764, 44.4719],
    name: { de: "Nationales Dorfmuseum", hu: "Nemzeti Falumúzeum", ro: "Muzeul Național al Satului „Dimitrie Gusti”", en: "Dimitrie Gusti National Village Museum" },
    description: { de: "Freilichtmuseum mit traditionellen rumänischen Bauernhäusern.", hu: "Szabadtéri múzeum hagyományos román parasztházakkal.", ro: "Muzeu în aer liber care prezintă gospodării tradiționale românești.", en: "Open-air museum showcasing traditional Romanian peasant households." },
    facts: { de: ["Gegründet 1936.", "Über 300 authentische Gebäude.", "Liegt im Herăstrău-Park."], hu: ["1936-ban alapították.", "Több mint 300 eredeti épület.", "A Herăstrău-parkban található."], ro: ["Fondat în 1936.", "Peste 300 de construcții autentice.", "Situat în Parcul Herăstrău."], en: ["Founded in 1936.", "Over 300 authentic buildings.", "Located in Herăstrău Park."] },
    image: "/geo-images/romania/city-village-museum.webp",
  },
  {
    id: "city-black-church", type: "city", parent: "RO-BV", coords: [25.5878, 45.6406],
    name: { de: "Schwarze Kirche", hu: "Fekete templom", ro: "Biserica Neagră", en: "Black Church" },
    description: { de: "Größte gotische Kirche Südosteuropas in Kronstadt.", hu: "Délkelet-Európa legnagyobb gótikus temploma Brassóban.", ro: "Cea mai mare biserică gotică din sud-estul Europei, la Brașov.", en: "Largest Gothic church in Southeastern Europe, located in Brașov." },
    facts: { de: ["Bau ab 1383.", "Großer Brand 1689 gab ihr den Namen.", "Bedeutende Buchholz-Orgel."], hu: ["Építése 1383-ban kezdődött.", "Az 1689-es tűzvész után kapta a nevét.", "Híres Buchholz-orgona."], ro: ["Construcție începută în 1383.", "Nume primit după incendiul din 1689.", "Orga Buchholz celebră."], en: ["Construction started in 1383.", "Named after the Great Fire of 1689.", "Famous Buchholz organ."] },
    image: "/geo-images/romania/city-black-church.webp",
  },
  {
    id: "city-patriarchal-cathedral", type: "city", parent: "RO-B", coords: [26.0975, 44.4244],
    name: { de: "Patriarchalkathedrale", hu: "Patriarkális székesegyház", ro: "Catedrala Patriarhală", en: "Patriarchal Cathedral" },
    description: { de: "Sitz des rumänisch-orthodoxen Patriarchen auf dem Dealul Mitropoliei.", hu: "A román ortodox pátriárka székhelye a Mitropolia-dombon.", ro: "Sediul Patriarhiei Române, situat pe Dealul Mitropoliei.", en: "Seat of the Romanian Orthodox Patriarch, on Dealul Mitropoliei." },
    facts: { de: ["Erbaut 1654–1658.", "Wallfahrtsort für den Hl. Dimitrie.", "Prachtvolle Ikonostase."], hu: ["1654–1658 között épült.", "Szent Demeter-zarándokhely.", "Díszes ikonfal."], ro: ["Construită între 1654–1658.", "Moaștele Sf. Dimitrie cel Nou.", "Ikonostas spectaculos."], en: ["Built 1654–1658.", "Pilgrimage site for St. Dimitrie.", "Splendid iconostasis."] },
    image: "/geo-images/romania/city-patriarchal-cathedral.webp",
  },
  {
    id: "city-mogosoaia-palace", type: "city", parent: "RO-IF", coords: [25.993, 44.527],
    name: { de: "Schloss Mogoșoaia", hu: "Mogosoaia-palota", ro: "Palatul Mogoșoaia", en: "Mogoșoaia Palace" },
    description: { de: "Prachtvoller Palast im Brâncovenesc-Stil nahe Bukarest.", hu: "Díszes Brâncoveanu-stílusú palota Bukarest közelében.", ro: "Palat brâncovenesc spectaculos situat lângă București.", en: "Splendid Brâncovenesc-style palace located near Bucharest." },
    facts: { de: ["Fertiggestellt 1702.", "Einzigartige Mischung aus Orient und Okzident.", "Schöner Schlosspark."], hu: ["1702-ben készült el.", "A kelet és nyugat egyedi stíluskeveréke.", "Szép kastélypark."], ro: ["Finalizat în 1702.", "Stil arhitectural unic brâncovenesc.", "Parc domnesc superb."], en: ["Completed in 1702.", "Unique blend of Oriental and Western styles.", "Beautiful palace park."] },
    image: "/geo-images/romania/city-mogosoaia-palace.webp",
  },
  {
    id: "city-cotroceni-palace", type: "city", parent: "RO-B", coords: [26.062, 44.435],
    name: { de: "Palast von Cotroceni", hu: "Cotroceni-palota", ro: "Palatul Cotroceni", en: "Cotroceni Palace" },
    description: { de: "Sitz des rumänischen Präsidenten und historisches Nationalmuseum.", hu: "A román elnök székhelye és történelmi nemzeti múzeum.", ro: "Sediul Președinției României și muzeu național de istorie.", en: "Seat of the Romanian President and national history museum." },
    facts: { de: ["Ehemalige königliche Residenz.", "Erbaut auf einem alten Klostergelände.", "Barocker Baustil."], hu: ["Egykori királyi rezidencia.", "Egy régi kolostor helyén épült.", "Barokk építészeti stílus."], ro: ["Fostă reședință regală.", "Ridicat pe locul unui vechi schit.", "Muzeul Național Cotroceni."], en: ["Former royal residence.", "Built on the site of an old monastery.", "National Cotroceni Museum."] },
    image: "/geo-images/romania/city-cotroceni-palace.webp",
  },
  {
    id: "landmark-therme-bucuresti", type: "city", parent: "RO-IF", coords: [26.075, 44.606],
    name: { de: "Therme Bukarest", hu: "Bukaresti Therme", ro: "Therme București", en: "Therme Bucharest" },
    description: { de: "Größtes Wellness- und Entspannungszentrum in Europa.", hu: "Európa legnagyobb wellness és relaxációs központja.", ro: "Cel mai mare centru de wellness și relaxare din Europa.", en: "The largest wellness and relaxation center in Europe." },
    facts: { de: ["Botanischer Garten innen.", "Thermalwasser.", "Viele Rutschen."], hu: ["Beltéri botanikus kert.", "Termálvíz.", "Számos csúszda."], ro: ["Grădină botanică interioară.", "Apă termală.", "Multe tobogane."], en: ["Indoor botanical garden.", "Thermal water.", "Many waterslides."] },
    image: "/geo-images/romania/landmark-therme-bucuresti.webp",
  },
  {
    id: "landmark-palas-iasi", type: "city", parent: "RO-IS", coords: [27.587, 47.156],
    name: { de: "Palas Iași", hu: "Palas Jászvásár", ro: "Palas Iași", en: "Palas Iași" },
    description: { de: "Modernes Stadtviertel mit Einkaufszentrum und Park am Kulturpalast.", hu: "Modern városnegyed bevásárlóközponttal és parkkal a Kultúrpalota mellett.", ro: "Ansamblu urbanistic modern cu mall și parc lângă Palatul Culturii.", en: "Modern urban complex with a mall and park next to the Palace of Culture." },
    facts: { de: ["Blick auf den Palast.", "Große Grünflächen.", "Lifestyle-Zentrum."], hu: ["Kilátás a palotára.", "Nagy zöldfelületek.", "Életmód központ."], ro: ["Vedere spre palat.", "Spații verzi vaste.", "Centru de lifestyle."], en: ["View of the palace.", "Vast green spaces.", "Lifestyle center."] },
    image: "/geo-images/romania/landmark-palas-iasi.webp",
  },
  {
    id: "landmark-astra-museum", type: "city", parent: "RO-SB", coords: [24.120, 45.750],
    name: { de: "ASTRA-Museum", hu: "ASTRA Múzeum", ro: "Muzeul ASTRA Sibiu", en: "ASTRA Museum" },
    description: { de: "Eines der größten Freilichtmuseen der Welt in Sibiu.", hu: "A világ egyik legnagyobb szabadtéri múzeuma Nagyszebenben.", ro: "Unul dintre cele mai mari muzee în aer liber din lume, la Sibiu.", en: "One of the largest open-air museums in the world, located in Sibiu." },
    facts: { de: ["Traditionelle Häuser.", "Windmühlen am See.", "96 Hektar Fläche."], hu: ["Hagyományos házak.", "Szélmalmok a tónál.", "96 hektár terület."], ro: ["Case tradiționale.", "Mori de vânt pe lac.", "Suprafață de 96 hectare."], en: ["Traditional houses.", "Windmills by the lake.", "96 hectares area."] },
    image: "/geo-images/romania/landmark-astra-museum.webp",
  },
  {
    id: "landmark-cluj-botanical", type: "city", parent: "RO-CJ", coords: [23.586, 46.762],
    name: { de: "Botanischer Garten Klausenburg", hu: "Kolozsvári botanikus kert", ro: "Grădina Botanică din Cluj-Napoca", en: "Cluj-Napoca Botanical Garden" },
    description: { de: "Wunderschöner botanischer Garten der Universität Babeș-Bolyai.", hu: "A Babeș-Bolyai Tudományegyetem gyönyörű botanikus kertje.", ro: "Grădina botanică superbă a Universității Babeș-Bolyai.", en: "The beautiful botanical garden of the Babeș-Bolyai University." },
    facts: { de: ["Japanischer Garten.", "Römischer Garten.", "Über 10.000 Pflanzenarten."], hu: ["Japánkert.", "Római kert.", "Több mint 10 000 növényfaj."], ro: ["Grădină japoneză.", "Grădină romană.", "Peste 10.000 specii de plante."], en: ["Japanese garden.", "Roman garden.", "Over 10,000 plant species."] },
    image: "/geo-images/romania/landmark-cluj-botanical.webp",
  },
  {
    id: "landmark-stefan-statue", type: "city", parent: "RO-IS", coords: [27.585, 47.161],
    name: { de: "Stefan-der-Große-Statue", hu: "Nagy István szobra", ro: "Statuia lui Ștefan cel Mare din Iași", en: "Stephen the Great Statue" },
    description: { de: "Reiterstatue des berühmtesten moldauischen Fürsten in Iași.", hu: "A leghíresebb moldvai fejedelem lovasszobra Jászvásáron.", ro: "Statuia ecvestră a celui mai faimos domnitor moldovean, în Iași.", en: "The equestrian statue of the most famous Moldavian prince, in Iași." },
    facts: { de: ["Vor dem Kulturpalast.", "Symbol der Stadt.", "Eingeweiht 1883."], hu: ["A Kultúrpalota előtt.", "A város jelképe.", "1883-ban avatták fel."], ro: ["În fața Palatului Culturii.", "Simbol al orașului.", "Inaugurată în 1883."], en: ["In front of the Palace of Culture.", "Symbol of the city.", "Unveiled in 1883."] },
    image: "/geo-images/romania/landmark-stefan-statue.webp",
  },
  {
    id: "landmark-asachi-university", type: "city", parent: "RO-IS", coords: [27.572, 47.174],
    name: { de: "Gheorghe-Asachi-Universität", hu: "Gheorghe Asachi Egyetem", ro: "Universitatea Tehnică Gheorghe Asachi", en: "Gheorghe Asachi University" },
    description: { de: "Technische Universität in Iași mit einer der schönsten Bibliotheken.", hu: "Műszaki egyetem Jászvásáron, az egyik legszebb könyvtárral.", ro: "Universitate tehnică din Iași, cu una dintre cele mai frumoase biblioteci.", en: "Technical university in Iași, featuring one of the most beautiful libraries." },
    facts: { de: ["Prachtvolle Bibliothek.", "Historisches Gebäude.", "Gegründet 1813."], hu: ["Pompás könyvtár.", "Történelmi épület.", "1813-ban alapították."], ro: ["Bibliotecă splendidă.", "Clădire istorică.", "Fondată în 1813."], en: ["Splendid library.", "Historic building.", "Founded in 1813."] },
    image: "/geo-images/romania/landmark-asachi-university.webp",
  },
  {
    id: "landmark-bucharest-old-town", type: "city", parent: "RO-B", coords: [26.102, 44.431],
    name: { de: "Altstadt Bukarest", hu: "Bukaresti óváros", ro: "Centrul Vechi București", en: "Bucharest Old Town" },
    description: { de: "Das historische Herz von Bukarest mit vielen Cafés und Denkmälern.", hu: "Bukarest történelmi szíve számos kávézóval és műemlékkel.", ro: "Inima istorică a Bucureștiului, cu multe cafenele și monumente.", en: "The historical heart of Bucharest with many cafes and monuments." },
    facts: { de: ["Lipscani-Viertel.", "Nachtleben.", "Historische Architektur."], hu: ["Lipscani negyed.", "Éjszakai élet.", "Történelmi építészet."], ro: ["Cartierul Lipscani.", "Viață de noapte.", "Arhitectură istorică."], en: ["Lipscani district.", "Nightlife.", "Historic architecture."] },
    image: "/geo-images/romania/landmark-bucharest-old-town.webp",
  },
  {
    id: "city-gura-humorului", type: "city", parent: "RO-SV", coords: [25.889, 47.554],
    name: { de: "Gura Humorului", hu: "Gura Humorului", ro: "Gura Humorului", en: "Gura Humorului" },
    description: { de: "Charmante Stadt in der Bukowina, Tor zu den Klöstern.", hu: "Bájos város Bukovinában, a kolostorok kapuja.", ro: "Oraș fermecător în Bucovina, poartă către mănăstiri.", en: "Charming town in Bukovina, gateway to the monasteries." },
    facts: { de: ["Nahe Kloster Voroneț.", "Touristenort.", "Schöne Berglandschaft."], hu: ["A Voroneț-kolostor közelében.", "Turisztikai központ.", "Szép hegyi táj."], ro: ["Lângă Mănăstirea Voroneț.", "Stațiune turistică.", "Peisaj montan frumos."], en: ["Near Voroneț Monastery.", "Tourist resort.", "Beautiful mountain scenery."] },
    image: "/geo-images/romania/city-gura-humorului.webp",
  },
  {
    id: "landmark-salina-cacica", type: "city", parent: "RO-SV", coords: [25.898, 47.636],
    name: { de: "Salzbergwerk Cacica", hu: "Kacsikai sóbánya", ro: "Salina Cacica", en: "Cacica Salt Mine" },
    description: { de: "Einzigartiges Salzbergwerk mit einer Kapelle und einem See.", hu: "Egyedülálló sóbánya kápolnával és tóval.", ro: "Salină unică cu o capelă și un lac.", en: "Unique salt mine with a chapel and a lake." },
    facts: { de: ["Unterirdische Kapelle.", "Salzwassersee.", "Handgegraben."], hu: ["Föld alatti kápolna.", "Sós vizű tó.", "Kézzel vájták."], ro: ["Capelă subterană.", "Lac cu apă sărată.", "Săpată manual."], en: ["Underground chapel.", "Saltwater lake.", "Dug by hand."] },
    image: "/geo-images/romania/landmark-salina-cacica.webp",
  },
  {
    id: "landmark-dino-park-rasnov", type: "city", parent: "RO-BV", coords: [25.460, 45.589],
    name: { de: "Dino Parc Râșnov", hu: "Dino Parc Barcarozsnyó", ro: "Dino Parc Râșnov", en: "Dino Parc Râșnov" },
    description: { de: "Größter Dinosaurierpark in Südosteuropa.", hu: "Délkelet-Európa legnagyobb dinoszaurusz parkja.", ro: "Cel mai mare parc cu dinozauri din sud-estul Europei.", en: "The largest dinosaur park in Southeastern Europe." },
    facts: { de: ["Über 100 Dinosaurier.", "Waldgelände.", "Interaktive Zonen."], hu: ["Több mint 100 dinoszaurusz.", "Erdei környezet.", "Interaktív zónák."], ro: ["Peste 100 de dinozauri.", "Zonă împădurită.", "Zone interactive."], en: ["Over 100 dinosaurs.", "Wooded area.", "Interactive zones."] },
    image: "/geo-images/romania/landmark-dino-park-rasnov.webp",
  },
];

// ---------------------------------------------------------------------------
// 4) TERMÉSZET (folyók, hegyek, tavak, tenger)
// ---------------------------------------------------------------------------
export const romaniaNature: POI[] = [
  // ---------- Folyók ----------
  {
    id: "river-dunarea", type: "river", parent: "RO", coords: [28.725, 45.217],
    name: { de: "Donau", hu: "Duna", ro: "Dunărea", en: "Danube" },
    description: { de: "Zweitlängster Fluss Europas; bildet die Südgrenze Rumäniens und das Donaudelta.", hu: "Európa második leghosszabb folyója; Románia déli határa, a Duna-delta.", ro: "Al doilea cel mai lung fluviu al Europei; granița sudică și Delta Dunării.", en: "Europe's second-longest river; Romania's southern border and the Danube Delta." },
    facts: { de: ["1.075 km in Rumänien.", "Eisernes Tor (Schlucht).", "Mündet ins Schwarze Meer."], hu: ["1075 km Romániában.", "Vaskapu (szurdok).", "A Fekete-tengerbe ömlik."], ro: ["1.075 km pe teritoriul României.", "Porțile de Fier.", "Se varsă în Marea Neagră."], en: ["1,075 km in Romania.", "Iron Gates gorge.", "Empties into the Black Sea."] },
    length: 2860,
    image: "/geo-images/romania/river-dunarea.webp",
  },
  {
    id: "river-mures", type: "river", parent: "RO", coords: [21.3, 46.18],
    name: { de: "Mieresch", hu: "Maros", ro: "Mureș", en: "Mureș" },
    description: { de: "Hauptfluss Siebenbürgens, mündet bei Szeged in die Theiss.", hu: "Erdély fő folyója, Szegednél torkollik a Tiszába.", ro: "Principalul râu al Transilvaniei, se varsă în Tisa la Szeged.", en: "Transylvania's main river, joins the Tisza at Szeged." },
    facts: { de: ["Länge ~761 km.", "Quelle im Hargitagebirge.", "Fließt durch Târgu Mureș und Arad."], hu: ["Hossza kb. 761 km.", "Forrása a Hargitában.", "Átfolyik Marosvásárhelyen és Aradon."], ro: ["Lungime ~761 km.", "Izvorăște în Munții Hășmaș/Harghita.", "Trece prin Târgu Mureș, Arad."], en: ["~761 km long.", "Rises in Hășmaș/Harghita Mountains.", "Flows through Târgu Mureș, Arad."] },
    length: 761,
    image: "/geo-images/romania/river-mures.webp",
  },
  {
    id: "river-olt", type: "river", parent: "RO", coords: [24.37, 43.73],
    name: { de: "Olt", hu: "Olt", ro: "Olt", en: "Olt" },
    description: { de: "Längster rein innerrumänischer Fluss.", hu: "A leghosszabb, teljes egészében Románia területén folyó folyó.", ro: "Cel mai lung râu care curge doar pe teritoriul României.", en: "Longest river entirely within Romania." },
    facts: { de: ["615 km lang.", "Durchbricht die Südkarpaten (Cozia).", "Mündet bei Turnu Măgurele in die Donau."], hu: ["Hossza 615 km.", "Áttöri a Déli-Kárpátokat (Cozia).", "Turnu Măgurele-nél a Dunába ömlik."], ro: ["615 km lungime.", "Traversează Carpații Meridionali (Cozia).", "Se varsă în Dunăre la Turnu Măgurele."], en: ["615 km long.", "Crosses the Southern Carpathians (Cozia).", "Meets the Danube at Turnu Măgurele."] },
    length: 615,
    image: "/geo-images/romania/river-olt.webp",
  },
  {
    id: "river-siret", type: "river", parent: "RO", coords: [27.95, 45.75],
    name: { de: "Sereth", hu: "Szeret", ro: "Siret", en: "Siret" },
    description: { de: "Größter Zufluss der Donau in Rumänien.", hu: "A Duna legnagyobb romániai mellékfolyója.", ro: "Cel mai mare afluent al Dunării în România.", en: "Largest tributary of the Danube in Romania." },
    facts: { de: ["Länge ~559 km (Rumänien).", "Fließt durch Bacău, mündet bei Galați.", "Durchzieht die gesamte Moldau."], hu: ["Hossza kb. 559 km (Romániában).", "Átfolyik Bákón, Galacnál torkollik.", "Átszeli egész Moldvát."], ro: ["Lungime ~559 km.", "Trece prin Bacău, se varsă la Galați.", "Străbate Moldova."], en: ["~559 km (in Romania).", "Flows through Bacău, joins at Galați.", "Crosses all of Moldavia."] },
    length: 559,
    image: "/geo-images/romania/river-siret.webp",
  },
  {
    id: "river-prut", type: "river", parent: "RO", coords: [28.1, 45.6],
    name: { de: "Pruth", hu: "Prut", ro: "Prut", en: "Prut" },
    description: { de: "Grenzfluss zu Moldawien und der Ukraine.", hu: "Határfolyó Moldova és Ukrajna felé.", ro: "Râu de graniță cu Republica Moldova și Ucraina.", en: "Border river with Moldova and Ukraine." },
    facts: { de: ["In Rumänien ~742 km.", "Mündet bei Reni in die Donau.", "Oberlauf in den Karpaten."], hu: ["Romániában kb. 742 km.", "Reni közelében ömlik a Dunába.", "Forrása a Kárpátokban."], ro: ["În România ~742 km.", "Se varsă la Reni.", "Izvoare în Carpați."], en: ["~742 km in Romania.", "Meets the Danube near Reni.", "Sources in the Carpathians."] },
    length: 953,
    image: "/geo-images/romania/river-prut.webp",
  },
  {
    id: "river-somes", type: "river", parent: "RO", coords: [23.6, 47.2],
    name: { de: "Samosch", hu: "Szamos", ro: "Someș", en: "Someș" },
    description: { de: "Fluss im Nordwesten, fließt nach Ungarn und mündet in die Theiss.", hu: "Északnyugati folyó, Magyarországon át a Tiszába ömlik.", ro: "Râu nord-vestic, se varsă în Tisa (prin Ungaria).", en: "Northwestern river, joins the Tisza via Hungary." },
    facts: { de: ["~376 km (Rumänien).", "Verbindet Cluj-Napoca, Dej, Satu Mare.", "Entsteht aus dem Kleinen und Großen Someș."], hu: ["Kb. 376 km (Romániában).", "Összeköti Kolozsvárt, Dést, Szatmárt.", "A Nagy- és Kis-Szamos találkozása."], ro: ["~376 km (RO).", "Leagă Cluj-Napoca, Dej, Satu Mare.", "Unirea Someșului Mare și Mic."], en: ["~376 km (Romania).", "Connects Cluj-Napoca, Dej, Satu Mare.", "Formed by Someșul Mare & Mic."] },
    length: 376,
    image: "/geo-images/romania/river-somes.webp",
  },
  {
    id: "river-arges", type: "river", parent: "RO", coords: [26.65, 44.07],
    name: { de: "Argeș", hu: "Argeș", ro: "Argeș", en: "Argeș" },
    description: { de: "Fluss der Walachei, speist den Vidraru-Stausee.", hu: "Havasalföldi folyó, a Vidraru-víztározó forrása.", ro: "Râu muntean, alimentează Barajul Vidraru.", en: "Wallachian river, feeding the Vidraru reservoir." },
    facts: { de: ["~350 km lang.", "Mündet bei Oltenița in die Donau.", "Transfăgărășan entlang des Oberlaufs."], hu: ["Kb. 350 km hosszú.", "Oltenițánál a Dunába ömlik.", "A Transzfogarasi út a felső szakaszon halad."], ro: ["~350 km.", "Se varsă în Dunăre la Oltenița.", "Transfăgărășanul urmează cursul superior."], en: ["~350 km long.", "Joins the Danube at Oltenița.", "Transfăgărășan follows the upper course."] },
    length: 350,
    image: "/geo-images/romania/river-arges.webp",
  },
  {
    id: "river-dambovita", type: "river", parent: "RO", coords: [26.1, 44.43],
    name: { de: "Dâmbovița", hu: "Dâmbovița", ro: "Dâmbovița", en: "Dâmbovița" },
    description: { de: "Fluss, der Bukarest durchquert.", hu: "Bukaresten átfolyó folyó.", ro: "Râul care traversează Bucureștiul.", en: "River running through Bucharest." },
    facts: { de: ["Länge 286 km.", "Mündet in den Argeș.", "Stausee Văcărești."], hu: ["Hossza 286 km.", "Az Argeșbe ömlik.", "Văcărești tározó."], ro: ["Lungime 286 km.", "Se varsă în Argeș.", "Acumularea Văcărești."], en: ["286 km long.", "Joins the Argeș.", "Văcărești reservoir."] },
    length: 286,
    image: "/geo-images/romania/river-dambovita.webp",
  },
  {
    id: "river-jiu", type: "river", parent: "RO", coords: [23.8, 44.33],
    name: { de: "Jiu", hu: "Zsil", ro: "Jiu", en: "Jiu" },
    description: { de: "Fluss Olteniens; durchbricht die Südkarpaten.", hu: "Olténia folyója, áttöri a Déli-Kárpátokat.", ro: "Râul Olteniei; traversează Carpații Meridionali.", en: "River of Oltenia; cuts through the Southern Carpathians." },
    facts: { de: ["Länge 339 km.", "Fließt durch Craiova.", "Jiu-Schlucht-Nationalpark."], hu: ["Hossza 339 km.", "Átfolyik Craiován.", "Zsil-szurdok Nemzeti Park."], ro: ["Lungime 339 km.", "Traversează Craiova.", "Parcul Național Defileul Jiului."], en: ["339 km long.", "Flows through Craiova.", "Jiu Gorge National Park."] },
    length: 339,
    image: "/geo-images/romania/river-jiu.webp",
  },
  {
    id: "river-ialomita", type: "river", parent: "RO", coords: [27.4, 44.6],
    name: { de: "Ialomița", hu: "Ialomița", ro: "Ialomița", en: "Ialomița" },
    description: { de: "Muntenischer Fluss, mündet in die Donau.", hu: "Munténiai folyó, a Dunába ömlik.", ro: "Râu muntean, se varsă în Dunăre.", en: "Muntenian river, joining the Danube." },
    facts: { de: ["Länge ~414 km.", "Quelle im Bucegi-Gebirge.", "Ialomița-Höhle bei Sinaia."], hu: ["Hossza kb. 414 km.", "Forrása a Bucsecs-hegységben.", "Ialomicioara-barlang Sinaia közelében."], ro: ["~414 km.", "Izvorăște din Bucegi.", "Peștera Ialomicioara."], en: ["~414 km long.", "Rises in Bucegi.", "Ialomicioara Cave near Sinaia."] },
    length: 414,
    image: "/geo-images/romania/river-ialomita.webp",
  },
  {
    id: "river-tarnava", type: "river", parent: "RO", coords: [24.27, 46.15],
    name: { de: "Kokel", hu: "Küküllő", ro: "Târnava", en: "Târnava" },
    description: { de: "Siebenbürgischer Fluss (Große & Kleine Kokel).", hu: "Erdélyi folyó (Nagy- és Kis-Küküllő).", ro: "Râu transilvănean (Târnava Mare și Mică).", en: "Transylvanian river (Greater & Lesser Târnava)." },
    facts: { de: ["Weinbau an den Ufern.", "Blaj am Zusammenfluss.", "Mündet in den Mureș."], hu: ["Szőlőtermelés a partokon.", "Balázsfalva az egyesülésnél.", "A Marosba ömlik."], ro: ["Podgorii pe maluri.", "Blaj la confluență.", "Se varsă în Mureș."], en: ["Wine country on its banks.", "Blaj at the confluence.", "Joins the Mureș."] },
    length: 249,
    image: "/geo-images/romania/river-tarnava.webp",
  },
  {
    id: "river-crisul", type: "river", parent: "RO", coords: [21.9, 46.9],
    name: { de: "Kreisch", hu: "Körös", ro: "Crișuri", en: "Criș" },
    description: { de: "Drei Flüsse (Weiße, Schwarze, Schnelle Körös) im Westen.", hu: "Három folyó (Fehér-, Fekete-, Sebes-Körös) nyugaton.", ro: "Trei râuri (Crișul Alb, Negru, Repede).", en: "Three rivers (Crișul Alb, Negru, Repede) in the west." },
    facts: { de: ["Alle fließen nach Ungarn.", "Crișul Repede bei Oradea.", "Zuflüsse der Theiss."], hu: ["Mind Magyarországra folyik.", "A Sebes-Körös Nagyváradnál.", "A Tisza mellékfolyói."], ro: ["Curg toate spre Ungaria.", "Crișul Repede la Oradea.", "Afluenți ai Tisei."], en: ["All flow into Hungary.", "Crișul Repede at Oradea.", "Tributaries of the Tisza."] },
    length: 240,
    image: "/geo-images/romania/river-crisul.webp",
  },

  // ---------- Hegyek ----------
  {
    id: "mountain-carpati", type: "mountain", parent: "RO", coords: [24.6, 45.6],
    name: { de: "Karpaten", hu: "Kárpátok", ro: "Carpații", en: "Carpathians" },
    description: { de: "Das große Gebirgssystem, das Rumänien prägt.", hu: "Románia meghatározó nagy hegyrendszere.", ro: "Principalul sistem montan al României.", en: "Romania's dominant mountain system." },
    facts: { de: ["Rund 66.000 km² in Rumänien.", "Drei Abschnitte: Orientali, Meridionali, Occidentali.", "Beherbergt Bären und Luchse."], hu: ["Romániában kb. 66 000 km².", "Három ága: Keleti, Déli, Nyugati.", "Medvék és hiúzok élnek itt."], ro: ["Circa 66.000 km² în România.", "Trei ramuri: Orientali, Meridionali, Occidentali.", "Adăpostesc urși și râși."], en: ["About 66,000 km² in Romania.", "Three branches: Eastern, Southern, Western.", "Home to bears and lynx."] },
    elevation: 2544,
    image: "/geo-images/romania/mountain-carpati.webp",
  },
  {
    id: "mountain-fagaras", type: "mountain", parent: "RO", coords: [24.6, 45.6],
    name: { de: "Fogarascher Berge", hu: "Fogarasi-havasok", ro: "Munții Făgăraș", en: "Făgăraș Mountains" },
    description: { de: "Höchstes Gebirge der Südkarpaten mit dem Moldoveanu (2.544 m).", hu: "A Déli-Kárpátok legmagasabb vonulata, a Moldoveanu (2544 m) csúccsal.", ro: "Cei mai înalți munți din Carpații Meridionali, cu vf. Moldoveanu (2.544 m).", en: "Highest range of the Southern Carpathians with Moldoveanu (2,544 m)." },
    facts: { de: ["Bâlea-See und Transfăgărășan.", "Zahlreiche Gipfel über 2.500 m.", "Wild und gletscherartig geformt."], hu: ["Bâlea-tó és a Transzfogarasi út.", "Több 2500 m feletti csúcs.", "Vad, gleccser-formálta domborzat."], ro: ["Lacul Bâlea și Transfăgărășanul.", "Numeroase vârfuri peste 2.500 m.", "Relief glaciar sălbatic."], en: ["Lake Bâlea and Transfăgărășan road.", "Many peaks over 2,500 m.", "Wild glacial landscape."] },
    elevation: 2544,
    image: "/geo-images/romania/mountain-fagaras.webp",
  },
  {
    id: "mountain-moldoveanu", type: "mountain", parent: "RO", coords: [24.735, 45.6],
    name: { de: "Moldoveanu", hu: "Moldoveanu-csúcs", ro: "Vârful Moldoveanu", en: "Moldoveanu Peak" },
    description: { de: "Höchster Berg Rumäniens (2.544 m) im Fogarascher Gebirge.", hu: "Románia legmagasabb csúcsa (2544 m) a Fogarasi-havasokban.", ro: "Cel mai înalt vârf al României (2.544 m), în Făgăraș.", en: "Romania's highest peak (2,544 m), in the Făgăraș Mountains." },
    facts: { de: ["2.544 m hoch.", "Kreis Argeș.", "Gletschermorphologie."], hu: ["2544 m magas.", "Argeș megyében.", "Jégkori formák."], ro: ["2.544 m altitudine.", "În județul Argeș.", "Relief glaciar."], en: ["Altitude 2,544 m.", "In Argeș County.", "Glacial morphology."] },
    elevation: 2544,
    image: "/geo-images/romania/mountain-moldoveanu.webp",
  },
  {
    id: "mountain-negoiu", type: "mountain", parent: "RO", coords: [24.55, 45.55],
    name: { de: "Negoiu", hu: "Negoj-csúcs", ro: "Vârful Negoiu", en: "Negoiu Peak" },
    description: { de: "Zweithöchster Gipfel Rumäniens (2.535 m).", hu: "Románia második legmagasabb csúcsa (2535 m).", ro: "Al doilea vârf ca înălțime (2.535 m).", en: "Romania's second-highest peak (2,535 m)." },
    facts: { de: ["Fogarascher Gebirge.", "Kreis Sibiu.", "Anspruchsvolle Touren."], hu: ["Fogarasi-havasok.", "Szeben megye.", "Kihívást jelentő túrák."], ro: ["Munții Făgăraș.", "Județul Sibiu.", "Trasee dificile."], en: ["Făgăraș range.", "Sibiu County.", "Challenging routes."] },
    elevation: 2535,
    image: "/geo-images/romania/mountain-negoiu.webp",
  },
  {
    id: "mountain-bucegi", type: "mountain", parent: "RO", coords: [25.45, 45.45],
    name: { de: "Bucegi-Gebirge", hu: "Bucsecs-hegység", ro: "Munții Bucegi", en: "Bucegi Mountains" },
    description: { de: "Ikonische Südkarpaten mit Sphinx und Babele.", hu: "Ikonikus déli-kárpáti hegy a Szfinx és a Babele sziklákkal.", ro: "Munți simbol ai Meridionalilor, cu Sfinxul și Babele.", en: "Iconic Southern Carpathians with the Sphinx and Babele rocks." },
    facts: { de: ["Omu-Gipfel 2.505 m.", "Nationalpark seit 1935.", "Ausgangspunkt Sinaia/Bușteni."], hu: ["Omu-csúcs 2505 m.", "Nemzeti park 1935 óta.", "Kiindulópont: Sinaia / Bușteni."], ro: ["Vf. Omu 2.505 m.", "Parc național din 1935.", "Acces din Sinaia/Bușteni."], en: ["Omu peak 2,505 m.", "National park since 1935.", "Access from Sinaia/Bușteni."] },
    elevation: 2505,
    image: "/geo-images/romania/mountain-bucegi.webp",
  },
  {
    id: "mountain-retezat", type: "mountain", parent: "RO", coords: [22.87, 45.35],
    name: { de: "Retezat-Gebirge", hu: "Retyezát", ro: "Munții Retezat", en: "Retezat Mountains" },
    description: { de: "Gletscherseen-Paradies, ältester Nationalpark Rumäniens (1935).", hu: "Gleccsertavak paradicsoma, Románia legrégebbi nemzeti parkja (1935).", ro: "Paradisul lacurilor glaciare, cel mai vechi parc național (1935).", en: "Glacial lake paradise, Romania's oldest national park (1935)." },
    facts: { de: ["Peleaga-Gipfel 2.509 m.", "Über 80 Gletscherseen.", "Größter See: Bucura."], hu: ["Peleaga-csúcs 2509 m.", "Több mint 80 gleccsertó.", "Legnagyobb tó: Bucura."], ro: ["Vf. Peleaga 2.509 m.", "Peste 80 de lacuri glaciare.", "Cel mai mare: Bucura."], en: ["Peleaga peak 2,509 m.", "Over 80 glacial lakes.", "Largest: Bucura."] },
    elevation: 2509,
    image: "/geo-images/romania/mountain-retezat.webp",
  },
  {
    id: "mountain-piatra-craiului", type: "mountain", parent: "RO", coords: [25.2, 45.52],
    name: { de: "Königstein", hu: "Királykő", ro: "Piatra Craiului", en: "Piatra Craiului" },
    description: { de: "Schmaler Kalksteinkamm im Süden Siebenbürgens.", hu: "Keskeny mészkőgerinc Erdély déli részén.", ro: "Creastă calcaroasă îngustă, sud-vestul Transilvaniei.", en: "Narrow limestone ridge in southern Transylvania." },
    facts: { de: ["Längster Kalkkamm in Rumänien.", "Endemische Nelke Dianthus callizonus.", "Nationalpark."], hu: ["Románia leghosszabb mészkőgerinc.", "Endemikus szegfű (Dianthus callizonus).", "Nemzeti park."], ro: ["Cea mai lungă creastă calcaroasă.", "Garofița Pietrei Craiului (endemică).", "Parc Național."], en: ["Longest limestone ridge in Romania.", "Endemic Dianthus callizonus.", "National park."] },
    elevation: 2238,
    image: "/geo-images/romania/mountain-piatra-craiului.webp",
  },
  {
    id: "mountain-apuseni", type: "mountain", parent: "RO", coords: [22.8, 46.55],
    name: { de: "Apuseni-Gebirge", hu: "Erdélyi-szigethegység", ro: "Munții Apuseni", en: "Apuseni Mountains" },
    description: { de: "Karstlandschaft mit Höhlen und Dörfern.", hu: "Karsztos táj barlangokkal és hegyi falvakkal.", ro: "Zonă carstică cu peșteri și sate de munte.", en: "Karst landscape with caves and mountain villages." },
    facts: { de: ["Scărișoara-Eishöhle.", "Motzen-Land (Țara Moților).", "Bihor-Gipfel 1.849 m."], hu: ["Szkerisórai Jégbarlang.", "Mócvidék (Țara Moților).", "Bihari-csúcs 1849 m."], ro: ["Ghețarul Scărișoara.", "Țara Moților.", "Vf. Bihor 1.849 m."], en: ["Scărișoara Ice Cave.", "Motzen Land (Țara Moților).", "Bihor Peak 1,849 m."] },
    elevation: 1849,
    image: "/geo-images/romania/mountain-apuseni.webp",
  },
  {
    id: "mountain-rodnei", type: "mountain", parent: "RO", coords: [24.75, 47.56],
    name: { de: "Rodnaer Berge", hu: "Radnai-havasok", ro: "Munții Rodnei", en: "Rodna Mountains" },
    description: { de: "Höchste Gruppe der Ostkarpaten mit Pietrosul (2.303 m).", hu: "A Keleti-Kárpátok legmagasabb tömbje a Pietrosu (2303 m) csúccsal.", ro: "Cel mai înalt masiv al Carpaților Orientali, cu Pietrosul (2.303 m).", en: "Highest massif of the Eastern Carpathians with Pietrosul (2,303 m)." },
    facts: { de: ["UNESCO-Biosphärenreservat.", "Murmeltiere & Gämsen.", "Gletscherseen."], hu: ["UNESCO bioszféra-rezervátum.", "Mormoták és zergék.", "Gleccsertavak."], ro: ["Rezervație UNESCO.", "Marmote și capre negre.", "Lacuri glaciare."], en: ["UNESCO biosphere reserve.", "Marmots and chamois.", "Glacial lakes."] },
    elevation: 2303,
    image: "/geo-images/romania/mountain-rodnei.webp",
  },
  {
    id: "mountain-ceahlau", type: "mountain", parent: "RO", coords: [25.95, 46.98],
    name: { de: "Ceahlău", hu: "Csalhó", ro: "Ceahlău", en: "Ceahlău" },
    description: { de: "Heiliger Berg der Moldau mit markanter Silhouette.", hu: "Moldva szent hegye, jellegzetes sziluettel.", ro: "Muntele sfânt al Moldovei, cu siluetă spectaculoasă.", en: "Sacred mountain of Moldavia with a striking silhouette." },
    facts: { de: ["Toaca-Gipfel 1.904 m.", "Nationalpark.", "Legenden um die Dochia-Felsen."], hu: ["Toaca-csúcs 1904 m.", "Nemzeti park.", "Dochia-sziklák legendái."], ro: ["Vf. Toaca 1.904 m.", "Parc Național.", "Legendele Babei Dochia."], en: ["Toaca peak 1,904 m.", "National park.", "Baba Dochia rock legends."] },
    elevation: 1904,
    image: "/geo-images/romania/mountain-ceahlau.webp",
  },
  {
    id: "mountain-maramures", type: "mountain", parent: "RO", coords: [24.5, 47.85],
    name: { de: "Maramureș-Gebirge", hu: "Máramarosi-havasok", ro: "Munții Maramureșului", en: "Maramureș Mountains" },
    description: { de: "Dünn besiedelte Grenzgebirge im Norden.", hu: "Ritkán lakott határhegység északon.", ro: "Munți de graniță, slab populați, în nord.", en: "Sparsely populated border mountains in the north." },
    facts: { de: ["Farcău 1.957 m.", "Grenze zur Ukraine.", "Reiche Flora und Fauna."], hu: ["Farcău 1957 m.", "Határ Ukrajnával.", "Gazdag élővilág."], ro: ["Farcău 1.957 m.", "Graniță cu Ucraina.", "Floră și faună bogate."], en: ["Farcău 1,957 m.", "Ukrainian border.", "Rich flora and fauna."] },
    elevation: 1957,
    image: "/geo-images/romania/mountain-maramures.webp",
  },
  {
    id: "mountain-orientali", type: "mountain", parent: "RO", coords: [25.5, 46.8],
    name: { de: "Ostkarpaten", hu: "Keleti-Kárpátok", ro: "Carpații Orientali", en: "Eastern Carpathians" },
    description: { de: "Nördlicher Abschnitt der rumänischen Karpaten.", hu: "A román Kárpátok északi szakasza.", ro: "Ramura nordică a Carpaților românești.", en: "Northern branch of the Romanian Carpathians." },
    facts: { de: ["Vulkanische Reste (Călimani, Harghita).", "Rodna-Massiv im Norden.", "Viele Pässe."], hu: ["Vulkáni maradványok (Kelemen, Hargita).", "Radnai-havasok északon.", "Sok hágó."], ro: ["Vulcanism vechi (Călimani, Harghita).", "Masivul Rodnei la nord.", "Multe pasuri."], en: ["Old volcanism (Călimani, Harghita).", "Rodna massif in the north.", "Many passes."] },
    elevation: 2303,
    image: "/geo-images/romania/mountain-orientali.webp",
  },
  {
    id: "mountain-meridionali", type: "mountain", parent: "RO", coords: [24.0, 45.4],
    name: { de: "Südkarpaten", hu: "Déli-Kárpátok", ro: "Carpații Meridionali", en: "Southern Carpathians" },
    description: { de: "Die \"Transsilvanischen Alpen\" mit den höchsten Gipfeln.", hu: "Az \"Erdélyi-havasok\", a legmagasabb csúcsokkal.", ro: "\"Alpii Transilvaniei\", cu cele mai înalte vârfuri.", en: "\"Transylvanian Alps\" with the highest peaks." },
    facts: { de: ["Moldoveanu 2.544 m.", "Fogaraș, Bucegi, Retezat.", "Transfăgărășan & Transalpina."], hu: ["Moldoveanu 2544 m.", "Fogaras, Bucsecs, Retyezát.", "Transzfogarasi és Transalpina utak."], ro: ["Moldoveanu 2.544 m.", "Făgăraș, Bucegi, Retezat.", "Transfăgărășan & Transalpina."], en: ["Moldoveanu 2,544 m.", "Făgăraș, Bucegi, Retezat.", "Transfăgărășan & Transalpina roads."] },
    elevation: 2544,
    image: "/geo-images/romania/mountain-meridionali.webp",
  },
  {
    id: "mountain-occidentali", type: "mountain", parent: "RO", coords: [22.7, 46.3],
    name: { de: "Westkarpaten", hu: "Nyugati-Kárpátok", ro: "Carpații Occidentali", en: "Western Carpathians" },
    description: { de: "Niedrigere, zerklüftete Gebirgsgruppen im Westen.", hu: "Alacsonyabb, tagolt nyugati hegyláncok.", ro: "Lanțuri joase și fragmentate în vest.", en: "Lower, fragmented ranges in the west." },
    facts: { de: ["Apuseni, Banater Gebirge, Poiana-Ruscă.", "Karst und Höhlen.", "Bihor-Gipfel 1.849 m."], hu: ["Erdélyi-szigethegység, Bánsági-hg., Pojána Ruszka.", "Karszt és barlangok.", "Bihari-csúcs 1849 m."], ro: ["Apuseni, Munții Banatului, Poiana Ruscă.", "Carst și peșteri.", "Vf. Bihor 1.849 m."], en: ["Apuseni, Banat Mts, Poiana Ruscă.", "Karst and caves.", "Bihor peak 1,849 m."] },
    elevation: 1849,
    image: "/geo-images/romania/mountain-occidentali.webp",
  },

  // ---------- Tavak ----------
  {
    id: "lake-sfanta-ana", type: "lake", parent: "RO-HR", coords: [25.88, 46.13],
    name: { de: "St.-Anna-See", hu: "Szent Anna-tó", ro: "Lacul Sfânta Ana", en: "Saint Ana Lake" },
    description: { de: "Einziger Vulkankratersee Mittel- und Osteuropas.", hu: "Közép- és Kelet-Európa egyetlen vulkáni krátertava.", ro: "Singurul lac vulcanic din Europa Centrală și de Est.", en: "The only volcanic crater lake in Central-Eastern Europe." },
    facts: { de: ["Höhe 950 m.", "Regenwasser-gespeist.", "Reservat seit 1979."], hu: ["950 m magasságban.", "Csak csapadék táplálja.", "1979 óta védett."], ro: ["Altitudine 950 m.", "Alimentat doar din precipitații.", "Rezervație din 1979."], en: ["At 950 m elevation.", "Fed only by rainfall.", "Reserve since 1979."] },
    area: 0.22, elevation: 946,
    image: "/geo-images/romania/lake-sfanta-ana.webp",
  },
  {
    id: "lake-bicaz", type: "lake", parent: "RO-NT", coords: [25.9, 46.89],
    name: { de: "Bicaz-Stausee", hu: "Bicaz-tó", ro: "Lacul Bicaz (Izvorul Muntelui)", en: "Bicaz Lake (Izvorul Muntelui)" },
    description: { de: "Größter künstlicher See der Ostkarpaten.", hu: "A Keleti-Kárpátok legnagyobb mesterséges tava.", ro: "Cel mai mare lac de acumulare din Carpații Orientali.", en: "Largest reservoir in the Eastern Carpathians." },
    facts: { de: ["Erbaut 1950–60 für Wasserkraft.", "Länge ~35 km.", "Am Fuß des Ceahlău."], hu: ["1950–60 között épült vízerőműhöz.", "Hossza kb. 35 km.", "A Csalhó lábánál."], ro: ["Construit 1950–60 pentru hidroenergie.", "Lungime ~35 km.", "La poalele Ceahlăului."], en: ["Built 1950–60 for hydroelectric power.", "~35 km long.", "At the foot of Ceahlău."] },
    area: 33,
    image: "/geo-images/romania/lake-bicaz.webp",
  },
  {
    id: "lake-vidraru", type: "lake", parent: "RO-AG", coords: [24.63, 45.35],
    name: { de: "Vidraru-Stausee", hu: "Vidraru-tó", ro: "Lacul Vidraru", en: "Lake Vidraru" },
    description: { de: "Berühmter Stausee an der Transfăgărășan.", hu: "Híres víztározó a Transzfogarasi út mentén.", ro: "Lac de acumulare celebru pe Transfăgărășan.", en: "Famous reservoir on the Transfăgărășan." },
    facts: { de: ["Staumauer 166 m hoch.", "Fertiggestellt 1966.", "Wasserkraftwerk."], hu: ["166 m magas gát.", "1966-ban készült el.", "Vízerőmű."], ro: ["Baraj de 166 m.", "Finalizat în 1966.", "Hidrocentrală."], en: ["Dam 166 m tall.", "Completed in 1966.", "Hydro plant."] },
    area: 8.7,
    image: "/geo-images/romania/lake-vidraru.webp",
  },
  {
    id: "lake-razim", type: "lake", parent: "RO-TL", coords: [28.97, 44.85],
    name: { de: "Razim-Sinoe-Komplex", hu: "Razim-Sinoe tavak", ro: "Complexul Razim-Sinoe", en: "Razim-Sinoe Lagoon Complex" },
    description: { de: "Größter Lagunensee Rumäniens an der Schwarzmeerküste.", hu: "Románia legnagyobb lagúnarendszere a Fekete-tenger partján.", ro: "Cel mai mare complex lagunar al României.", en: "Romania's largest lagoon system on the Black Sea coast." },
    facts: { de: ["Fläche >1.000 km².", "Brackwasser.", "Ramsar-Schutzgebiet."], hu: ["Területe >1000 km².", "Brakkvíz.", "Ramsari védett terület."], ro: ["Suprafață >1.000 km².", "Apă salmastră.", "Sit Ramsar."], en: ["Area >1,000 km².", "Brackish water.", "Ramsar site."] },
    area: 1015,
    image: "/geo-images/romania/lake-razim.webp",
  },
  {
    id: "lake-balea", type: "lake", parent: "RO-SB", coords: [24.62, 45.6],
    name: { de: "Bâlea-See", hu: "Bâlea-tó", ro: "Lacul Bâlea", en: "Lake Bâlea" },
    description: { de: "Gletschersee auf 2.034 m Höhe im Fogarascher Gebirge.", hu: "Gleccsertó 2034 m magasan a Fogarasi-havasokban.", ro: "Lac glaciar la 2.034 m, în Făgăraș.", en: "Glacial lake at 2,034 m in the Făgăraș Mountains." },
    facts: { de: ["Erreichbar über Transfăgărășan.", "Im Winter: Eishotel.", "Nur im Sommer autofrei zugänglich."], hu: ["A Transzfogarasin át elérhető.", "Télen jégszálloda.", "Nyáron autóval is megközelíthető."], ro: ["Acces pe Transfăgărășan.", "Iarna: Hotelul de Gheață.", "Vara acces cu mașina."], en: ["Reached via Transfăgărășan.", "Winter: Ice Hotel.", "Car access in summer."] },
    area: 0.046, elevation: 2034,
    image: "/geo-images/romania/lake-balea.webp",
  },
  {
    id: "lake-rosu", type: "lake", parent: "RO-HR", coords: [25.78, 46.79],
    name: { de: "Roter See", hu: "Gyilkos-tó", ro: "Lacul Roșu", en: "Red Lake" },
    description: { de: "Naturlicher Stausee, entstanden 1837 durch einen Bergrutsch.", hu: "1837-ben földcsuszamlással keletkezett természetes tó.", ro: "Lac natural format în 1837 dintr-o alunecare de teren.", en: "Natural lake formed in 1837 by a landslide." },
    facts: { de: ["Abgestorbene Baumstämme im Wasser.", "Nahe der Bicaz-Schlucht.", "Touristenmagnet."], hu: ["Kiálló faderekak a vízben.", "A Békási-szoros közelében.", "Turistamágnes."], ro: ["Trunchiuri de arbori în apă.", "Aproape de Cheile Bicazului.", "Atracție turistică."], en: ["Dead tree trunks in the water.", "Near Bicaz Gorge.", "Tourist magnet."] },
    area: 0.13,
    image: "/geo-images/romania/lake-rosu.webp",
  },
  {
    id: "lake-iezer", type: "lake", parent: "RO-MM", coords: [24.45, 47.65],
    name: { de: "Iezer-See", hu: "Iezer-tó", ro: "Lacul Iezer", en: "Iezer Lake" },
    description: { de: "Glazialer See im Rodna-Massiv.", hu: "Gleccsertó a Radnai-havasokban.", ro: "Lac glaciar în Masivul Rodnei.", en: "Glacial lake in the Rodna massif." },
    facts: { de: ["Höhe ~1.825 m.", "Geschützt im Nationalpark.", "Moorufer."], hu: ["Magasság kb. 1825 m.", "Nemzeti parki védelem.", "Tőzeges partok."], ro: ["Altitudine ~1.825 m.", "În Parcul Național.", "Malul mlăștinos."], en: ["~1,825 m elevation.", "In the National Park.", "Boggy shores."] },
    area: 0.032, elevation: 1825,
    image: "/geo-images/romania/lake-iezer.webp",
  },
  {
    id: "lake-sovata", type: "lake", parent: "RO-MS", coords: [25.08, 46.59],
    name: { de: "Bärensee Sovata", hu: "Medve-tó", ro: "Lacul Ursu", en: "Bear Lake" },
    description: { de: "Heliothermaler Salzsee in Form einer Bärenhaut.", hu: "Heliotermikus sósvíztó medvebőr alakban.", ro: "Lac sărat heliotermal, în formă de piele de urs.", en: "Heliothermal salt lake shaped like a bear hide." },
    facts: { de: ["Entstand 1875.", "Gesundheitskur in Sovata.", "Wärmste Schicht ~40 °C."], hu: ["1875-ben keletkezett.", "Szováta gyógyfürdő.", "Legmelegebb réteg kb. 40 °C."], ro: ["Format în 1875.", "Stațiune balneară Sovata.", "Strat cald ~40 °C."], en: ["Formed in 1875.", "Sovata spa resort.", "Warm layer ~40 °C."] },
    area: 0.04,
    image: "/geo-images/romania/lake-sovata.webp",
  },

  // ---------- Tenger ----------
  {
    id: "sea-marea-neagra", type: "sea", parent: "RO", coords: [29.5, 44.0],
    name: { de: "Schwarzes Meer", hu: "Fekete-tenger", ro: "Marea Neagră", en: "Black Sea" },
    description: { de: "Binnenmeer zwischen Europa und Asien; Rumänien hat 245 km Küste.", hu: "Beltenger Európa és Ázsia között; Románia 245 km hosszan határos vele.", ro: "Mare interioară între Europa și Asia; România are 245 km de coastă.", en: "Inland sea between Europe and Asia; Romania has 245 km of coastline." },
    facts: { de: ["Salzgehalt ~18 ‰.", "Badeorte Mamaia, Neptun, Mangalia.", "Anoxisches Tiefenwasser."], hu: ["Sótartalom kb. 18 ‰.", "Mamaia, Neptun, Mangalia üdülőhelyek.", "Oxigénmentes mélyvíz."], ro: ["Salinitate ~18 ‰.", "Stațiuni: Mamaia, Neptun, Mangalia.", "Ape adânci anoxice."], en: ["Salinity ~18 ‰.", "Resorts: Mamaia, Neptun, Mangalia.", "Anoxic deep waters."] },
    area: 436400,
    image: "/geo-images/romania/sea-marea-neagra.webp",
  },
  {
    id: "nature-apuseni-np", type: "mountain", parent: "RO", coords: [22.8, 46.55],
    name: { de: "Apuseni-Nationalpark", hu: "Erdélyi-szigethegység Nemzeti Park", ro: "Parcul Național Apuseni", en: "Apuseni National Park" },
    description: { de: "Karstlandschaft mit Höhlen und Wäldern.", hu: "Karsztos táj barlangokkal és erdőkkel.", ro: "Rezervație naturală carstică cu peșteri și păduri.", en: "Karst landscape with caves and forests." },
    facts: { de: ["Über 1.500 Höhlen.", "Padis-Plateau.", "Karstphänomene."], hu: ["Több mint 1500 barlang.", "Pádis-fennsík.", "Karsztjelenségek."], ro: ["Peste 1.500 de peșteri.", "Platoul Padiș.", "Fenomene carstice spectaculoase."], en: ["Over 1,500 caves.", "Padiș Plateau.", "Spectacular karst phenomena."] },
    image: "/geo-images/romania/nature-apuseni-np.webp",
  },
  {
    id: "nature-mocanita-vaser", type: "landmark", parent: "RO-MM", coords: [24.44, 47.72],
    name: { de: "Wassertalbahn (Mocănița)", hu: "Vaszér-völgyi erdei vasút", ro: "Mocănița de pe Valea Vaserului", en: "Vaser Valley Railway (Mocănița)" },
    description: { de: "Schmalspurige Waldbahn in den Karpaten.", hu: "Keskenynyomtávú erdei vasút a Kárpátokban.", ro: "Cale ferată forestieră cu ecartament îngust din Maramureș.", en: "Narrow-gauge forest railway in the Carpathians." },
    facts: { de: ["Erbaut 1932.", "Letzte mit Dampf betriebene Waldbahn Europas.", "Touristische Attraktion."], hu: ["1932-ben épült.", "Európa utolsó gőzvontatású erdei vasútja.", "Turisztikai látványosság."], ro: ["Construită în 1932.", "Ultima cale ferată forestieră cu abur din Europa.", "Atracție turistică majoră."], en: ["Built in 1932.", "Europe's last steam-powered forest railway.", "Major tourist attraction."] },
    image: "/geo-images/romania/nature-mocanita-vaser.webp",
  },
  {
    id: "nature-padurea-verde", type: "landmark", parent: "RO-TM", coords: [21.26, 45.78],
    name: { de: "Jagdwald (Pădurea Verde)", hu: "Vadászerdő", ro: "Pădurea Verde", en: "Green Forest" },
    description: { de: "Wald- und Erholungsgebiet am Rande von Temeswar.", hu: "Erdő és pihenőövezet Temesvár szélén.", ro: "Zonă forestieră și de agrement la marginea Timișoarei.", en: "Forest and recreation area on the outskirts of Timișoara." },
    facts: { de: ["Beherbergt den Zoo von Timișoara.", "Historisches Jagdrevier.", "Naturlehrpfade."], hu: ["Itt található a temesvári állatkert.", "Történelmi vadászterület.", "Tanösvények."], ro: ["Găzduiește Grădina Zoologică.", "Fost domeniu de vânătoare.", "Trasee pentru biciclete."], en: ["Home to the Timișoara Zoo.", "Former hunting ground.", "Bike and walking trails."] },
    image: "/geo-images/romania/nature-padurea-verde.webp",
  },
  {
    id: "nature-scarisoara", type: "landmark", parent: "RO-AB", coords: [22.81, 46.48],
    name: { de: "Eishöhle von Scărișoara", hu: "Szkerisórai-jégbarlang", ro: "Peștera Scărișoara", en: "Scărișoara Ice Cave" },
    description: { de: "Eine der größten Eishöhlen der Welt in den Apuseni-Bergen.", hu: "A világ egyik legnagyobb jégbarlangja az Erdélyi-szigethegységben.", ro: "Unul dintre cei mai mari ghețari subterani din lume.", en: "One of the world's largest underground glaciers in the Apuseni Mountains." },
    facts: { de: ["Eisvolumen ~100.000 m³.", "Eis ist über 3.500 Jahre alt.", "Höhe 1.165 m."], hu: ["Jégtömege kb. 100 000 m³.", "A jég több mint 3500 éves.", "1165 m magasságban."], ro: ["Volum de gheață de 100.000 m³.", "Gheață veche de peste 3.500 de ani.", "Altitudine 1.165 m."], en: ["Ice volume ~100,000 m³.", "Ice is over 3,500 years old.", "Elevation 1,165 m."] },
    image: "/geo-images/romania/nature-scarisoara.webp",
  },
  {
    id: "nature-sapte-scari", type: "landmark", parent: "RO-BV", coords: [25.64, 45.56],
    name: { de: "Sieben-Leitern-Klamm", hu: "Hétlétra-vízesés", ro: "Canionul Șapte Scări", en: "Seven Ladders Canyon" },
    description: { de: "Enger Canyon mit sieben Wasserfällen im Piatra-Mare-Massiv.", hu: "Szűk szurdok hét vízeséssel a Nagykőhavasban.", ro: "Defileu îngust cu șapte cascade în Masivul Piatra Mare.", en: "Narrow canyon with seven waterfalls in the Piatra Mare Massif." },
    facts: { de: ["Über Leitern passierbar.", "Länge 160 m.", "Höhendifferenz 58 m."], hu: ["Létrákon járható végig.", "Hossza 160 m.", "Szintkülönbség 58 m."], ro: ["Amenajat cu scări metalice.", "Lungime 160 m.", "Diferență de nivel 58 m."], en: ["Traversed via metal ladders.", "Length 160 m.", "Vertical drop 58 m."] },
    image: "/geo-images/romania/nature-sapte-scari.webp",
  },
  {
    id: "nature-letea-forest", type: "landmark", parent: "RO-TL", coords: [29.52, 45.34],
    name: { de: "Letea-Wald", hu: "Letea-erdő", ro: "Pădurea Letea", en: "Letea Forest" },
    description: { de: "Nördlichster subtropischer Wald Europas im Donaudelta.", hu: "Európa legészakibb szubtrópusi erdeje a Duna-deltában.", ro: "Cea mai veche rezervație naturală din România, în Delta Dunării.", en: "Europe's northernmost subtropical forest, located in the Danube Delta." },
    facts: { de: ["Berühmt für Wildpferde.", "Sanddünen und Lianen.", "UNESCO-Schutz."], hu: ["Híres a vadlovairól.", "Homokdűnék és liánok.", "UNESCO-védelem."], ro: ["Faimoasă pentru caii sălbatici.", "Dune de nisip și liane.", "Protejată UNESCO."], en: ["Famous for wild horses.", "Sand dunes and lianas.", "UNESCO protected."] },
    image: "/geo-images/romania/nature-letea-forest.webp",
  },
  {
    id: "nature-calimani-np", type: "mountain", parent: "RO", coords: [25.2, 47.1],
    name: { de: "Călimani-Nationalpark", hu: "Kelemen-havasok Nemzeti Park", ro: "Parcul Național Călimani", en: "Călimani National Park" },
    description: { de: "Vulkanisches Gebirge mit bizarren Felsformationen.", hu: "Vulkáni eredetű hegység bizarr sziklaalakzatokkal.", ro: "Munți vulcanici cu formațiuni stâncoase spectaculoase.", en: "Volcanic mountains with bizarre rock formations." },
    facts: { de: ["Höchster Vulkankrater Rumäniens.", "Die \"12 Apostel\" Felsen.", "Pietrosu-Gipfel 2.100 m."], hu: ["Románia legnagyobb vulkáni krátere.", "A \"12 apostol\" sziklák.", "Pietrosu-csúcs 2100 m."], ro: ["Cel mai mare crater vulcanic stins.", "Stâncile \"12 Apostoli\".", "Vf. Pietrosu 2.100 m."], en: ["Largest extinct volcanic crater.", "The \"12 Apostles\" rocks.", "Pietrosu peak 2,100 m."] },
    image: "/geo-images/romania/nature-calimani-np.webp",
  },
  {
    id: "nature-domogled-np", type: "mountain", parent: "RO", coords: [22.6, 45.1],
    name: { de: "Domogled-Valea Cernei Nationalpark", hu: "Domogled-Cserna-völgy Nemzeti Park", ro: "Parcul Național Domogled-Valea Cernei", en: "Domogled-Valea Cernei National Park" },
    description: { de: "Größter Nationalpark Rumäniens im Cerna-Tal.", hu: "Románia legnagyobb nemzeti parkja a Cserna-völgyben.", ro: "Cel mai mare parc național din România.", en: "Romania's largest national park, located in the Cerna Valley." },
    facts: { de: ["Endemische Schwarzkiefer.", "Reiche Schmetterlingsfauna.", "Steile Kalkwände."], hu: ["Bánáti feketefenyő.", "Gazdag lepkefauna.", "Meredek mészkőfalak."], ro: ["Pinul negru de Banat.", "Cea mai bogată faună de fluturi.", "Abrupturi calcaroase."], en: ["Endemic Banat black pine.", "Richest butterfly fauna.", "Steep limestone cliffs."] },
    image: "/geo-images/romania/nature-domogled-np.webp",
  },
  {
    id: "nature-macin-mountains", type: "mountain", parent: "RO", coords: [28.3, 45.2],
    name: { de: "Măcin-Gebirge", hu: "Măcin-hegység", ro: "Munții Măcinului", en: "Măcin Mountains" },
    description: { de: "Ältestes Gebirge Rumäniens in der Dobrudscha.", hu: "Románia legrégebbi hegysége Dobrudzsában.", ro: "Cei mai vechi munți din România, situați în Dobrogea.", en: "Oldest mountains in Romania, located in Dobruja." },
    facts: { de: ["Hercynische Gebirgsbildung.", "Höhe bis 467 m.", "Steppenartige Landschaft."], hu: ["Hercyniai hegységképződés.", "Magasság 467 m-ig.", "Sztyeppszerű táj."], ro: ["Formați în orogeneza hercinică.", "Altitudine max. 467 m.", "Biodiversitate de stepă."], en: ["Formed during Hercynian orogeny.", "Elevation up to 467 m.", "Steppe-like biodiversity."] },
    image: "/geo-images/romania/nature-macin-mountains.webp",
  },
  {
    id: "nature-vadu-crisului", type: "landmark", parent: "RO-BH", coords: [22.51, 46.97],
    name: { de: "Vadu Crișului Wasserfall", hu: "Rév-körösi vízesés", ro: "Cascada Vadu Crișului", en: "Vadu Crișului Waterfall" },
    description: { de: "Wasserfall in einer spektakulären Kalksteinschlucht.", hu: "Vízesés egy látványos mészkőszurdokban.", ro: "Cascadă spectaculoasă într-un defileu calcaros.", en: "Spectacular waterfall in a limestone gorge." },
    facts: { de: ["Nahe einer Schauhöhle.", "Am Fluss Crișul Repede.", "Leicht mit dem Zug erreichbar."], hu: ["Egy látogatható barlang közelében.", "A Sebes-Körös partján.", "Vonattal könnyen megközelíthető."], ro: ["Lângă peștera omonimă.", "Pe malul Crișului Repede.", "Accesibil ușor cu trenul."], en: ["Near a show cave.", "On the banks of Crișul Repede.", "Easily accessible by train."] },
    image: "/geo-images/romania/nature-vadu-crisului.webp",
  },
  {
    id: "nature-ponor-fortresses", type: "landmark", parent: "RO-BH", coords: [22.7, 46.56],
    name: { de: "Ponor-Burgen (Festungen)", hu: "Ponor-várak (barlang)", ro: "Cetățile Ponorului", en: "Ponor Fortresses (Cave)" },
    description: { de: "Größtes Karstphänomen Rumäniens.", hu: "Románia legnagyobb karsztjelensége.", ro: "Cel mai mare complex carstic din România.", en: "The largest karst complex in Romania." },
    facts: { de: ["Drei riesige Felstrichter.", "74 m hohes Naturtor.", "Unterirdischer Fluss."], hu: ["Három hatalmas víznyelő.", "74 m magas természetes kapu.", "Földalatti folyó."], ro: ["Trei doline uriașe.", "Portal înalt de 74 m.", "Râu subteran."], en: ["Three giant sinkholes.", "74-m high natural portal.", "Underground river."] },
    image: "/geo-images/romania/nature-ponor-fortresses.webp",
  },
  {
    id: "nature-cheile-nerei", type: "landmark", parent: "RO-CS", coords: [21.8, 44.9],
    name: { de: "Nera-Schlucht", hu: "Néra-szurdok", ro: "Cheile Nerei", en: "Nera Gorges" },
    description: { de: "Längste Schlucht Rumäniens am Fluss Nera.", hu: "Románia leghosszabb szurdoka a Néra folyó mentén.", ro: "Cele mai lungi chei din România.", en: "The longest gorges in Romania, along the Nera River." },
    facts: { de: ["Länge ~22 km.", "Ochiul Beiului See.", "Beușnița Wasserfälle."], hu: ["Hossza kb. 22 km.", "Bég-szeme tó.", "Beușnița-vízesések."], ro: ["Lungime ~22 km.", "Lacul Ochiul Beiului.", "Cascadele Beușnița."], en: ["Length ~22 km.", "Ochiul Beiului Lake.", "Beușnița Waterfalls."] },
    image: "/geo-images/romania/nature-cheile-nerei.webp",
  },
  {
    id: "nature-detunatele", type: "landmark", parent: "RO-AB", coords: [23.200, 46.266],
    name: { de: "Detunatele", hu: "Detunáta", ro: "Detunatele", en: "Detunatele" },
    description: { de: "Einzigartige Basaltsäulen im Apuseni-Gebirge.", hu: "Egyedülálló bazaltoszlopok az Erdélyi-szigethegységben.", ro: "Coloane de bazalt unice în Munții Apuseni.", en: "Unique basalt columns in the Apuseni Mountains." },
    facts: { de: ["Vulkanischen Ursprungs.", "Zwei Hauptgipfel.", "Naturdenkmal."], hu: ["Vulkanikus eredetű.", "Két fő csúcsa van.", "Természeti műemlék."], ro: ["Origine vulcanică.", "Două vârfuri principale.", "Monument al naturii."], en: ["Volcanic origin.", "Two main peaks.", "Natural monument."] },
    image: "/geo-images/romania/nature-detunatele.webp",
  },
  {
    id: "nature-barsana-cave", type: "landmark", parent: "RO-MM", coords: [24.066, 47.816],
    name: { de: "Bârsăna-Höhle", hu: "Barcánfalvi-barlang", ro: "Peștera Bârsăna", en: "Bârsăna Cave" },
    description: { de: "Eine interessante Höhle in der Region Maramureș.", hu: "Érdekes barlang Máramaros régiójában.", ro: "O peșteră interesantă în regiunea Maramureș.", en: "An interesting cave in the Maramureș region." },
    facts: { de: ["In der Nähe des Klosters.", "Karstformationen.", "Lokale Legenden."], hu: ["A kolostor közelében.", "Karsztképződmények.", "Helyi legendák."], ro: ["Lângă mănăstire.", "Formațiuni carstice.", "Legende locale."], en: ["Near the monastery.", "Karst formations.", "Local legends."] },
    image: "/geo-images/romania/nature-barsana-cave.webp",
  },
  {
    id: "nature-urlatoarea", type: "landmark", parent: "RO-PH", coords: [25.525, 45.408],
    name: { de: "Urlătoarea-Wasserfall", hu: "Urlătoarea-vízesés", ro: "Cascada Urlătoarea", en: "Urlătoarea Waterfall" },
    description: { de: "Ein leicht zugänglicher Wasserfall im Bucegi-Gebirge.", hu: "Könnyen megközelíthető vízesés a Bucsecs-hegységben.", ro: "O cascadă ușor accesibilă în Munții Bucegi.", en: "An easily accessible waterfall in the Bucegi Mountains." },
    facts: { de: ["15 Meter hoch.", "Lautes Rauschen.", "Beliebtes Wanderziel."], hu: ["15 méter magas.", "Hangos morajlás.", "Népszerű túracélpont."], ro: ["Înălțime de 15 metri.", "Zgomot puternic.", "Destinație populară de drumeție."], en: ["15 meters high.", "Loud roaring sound.", "Popular hiking destination."] },
    image: "/geo-images/romania/nature-urlatoarea.webp",
  },
  {
    id: "nature-bigar", type: "landmark", parent: "RO-CS", coords: [21.924, 45.003],
    name: { de: "Bigăr-Wasserfall", hu: "Bigér-vízesés", ro: "Cascada Bigăr", en: "Bigăr Waterfall" },
    description: { de: "Einer der ungewöhnlichsten Wasserfälle der Welt, bedeckt mit Moos.", hu: "A világ egyik legkülönlegesebb vízesése, mohával borítva.", ro: "Una dintre cele mai neobișnuite cascade din lume, acoperită cu mușchi.", en: "One of the most unusual waterfalls in the world, covered in moss." },
    facts: { de: ["Direkt am 45. Breitengrad.", "Glockenförmig.", "Teil des Nationalparks Cheile Nerei."], hu: ["A 45. szélességi körön.", "Harang alakú.", "A Néra-szurdok Nemzeti Park része."], ro: ["Pe paralela 45.", "Formă de clopot.", "Parte din Parcul Național Cheile Nerei."], en: ["On the 45th parallel.", "Bell-shaped.", "Part of Cheile Nerei National Park."] },
    image: "/geo-images/romania/nature-bigar.webp",
  },
  {
    id: "nature-cascada-cailor", type: "landmark", parent: "RO-MM", coords: [24.795, 47.592],
    name: { de: "Pferdewasserfall", hu: "Lóhavasi-vízesés", ro: "Cascada Cailor", en: "Horses' Waterfall" },
    description: { de: "Der höchste Wasserfall Rumäniens im Rodna-Gebirge.", hu: "Románia legmagasabb vízesése a Radnai-havasokban.", ro: "Cea mai înaltă cascadă din România, în Munții Rodnei.", en: "The highest waterfall in Romania, located in the Rodna Mountains." },
    facts: { de: ["90 Meter Fallhöhe.", "In der Nähe von Borșa.", "Legende über Pferde."], hu: ["90 méteres esés.", "Borsa közelében.", "Legenda az elszabadult lovakról."], ro: ["Cădere de 90 metri.", "Lângă stațiunea Borșa.", "Legendă despre cai."], en: ["90-meter drop.", "Near Borșa resort.", "Legend about horses."] },
    image: "/geo-images/romania/nature-cascada-cailor.webp",
  },
  {
    id: "nature-pestera-ursilor", type: "landmark", parent: "RO-BH", coords: [22.569, 46.554],
    name: { de: "Bärenhöhle", hu: "Medve-barlang", ro: "Peștera Urșilor", en: "Bears' Cave" },
    description: { de: "Spektakuläre Höhle mit Skeletten von Höhlenbären.", hu: "Látványos barlang barlangi medvék csontvázaival.", ro: "Peșteră spectaculoasă cu schelete de urși de cavernă.", en: "Spectacular cave with skeletons of cave bears." },
    facts: { de: ["Entdeckt 1975.", "Drei Galerien.", "Beeindruckende Stalaktiten."], hu: ["1975-ben fedezték fel.", "Három galéria.", "Lenyűgöző sztalaktitok."], ro: ["Descoperită în 1975.", "Trei galerii.", "Stalactite impresionante."], en: ["Discovered in 1975.", "Three galleries.", "Impressive stalactites."] },
    image: "/geo-images/romania/nature-pestera-ursilor.webp",
  },
  {
    id: "nature-pestera-muierilor", type: "landmark", parent: "RO-GJ", coords: [23.753, 45.191],
    name: { de: "Frauenhöhle", hu: "Asszonyok barlangja", ro: "Peștera Muierilor", en: "Women's Cave" },
    description: { de: "Erste elektrifizierte Höhle Rumäniens mit reicher Geschichte.", hu: "Románia első villamosított barlangja gazdag történelemmel.", ro: "Prima peșteră electrificată din România, cu istorie bogată.", en: "The first electrified cave in Romania, with a rich history." },
    facts: { de: ["Zufluchtsort im Krieg.", "7 km Gesamtlänge.", "Paläontologische Funde."], hu: ["Menedékhely háború idején.", "7 km összhosszúság.", "Őslénytani leletek."], ro: ["Adăpost în timpul războaielor.", "7 km lungime totală.", "Descoperiri paleontologice."], en: ["Refuge during wars.", "7 km total length.", "Paleontological finds."] },
    image: "/geo-images/romania/nature-pestera-muierilor.webp",
  },
  {
    id: "nature-babele", type: "landmark", parent: "RO-DB", coords: [25.467, 45.406],
    name: { de: "Babele", hu: "Babele-sziklák", ro: "Babele", en: "Babele" },
    description: { de: "Pilzförmige Felsformationen im Bucegi-Gebirge.", hu: "Gomba alakú sziklaképződmények a Bucsecs-hegységben.", ro: "Formațiuni stâncoase în formă de ciuperci în Munții Bucegi.", en: "Mushroom-shaped rock formations in the Bucegi Mountains." },
    facts: { de: ["Durch Erosion geformt.", "In der Nähe der Sphinx.", "2216 Meter Höhe."], hu: ["Erózió formálta.", "A Szfinx közelében.", "2216 méter magasság."], ro: ["Modelate de eroziune.", "Lângă Sfinx.", "Altitudine 2216 metri."], en: ["Shaped by erosion.", "Near the Sphinx.", "2216 meters altitude."] },
    image: "/geo-images/romania/nature-babele.webp",
  },
  {
    id: "nature-lacul-colibita", type: "landmark", parent: "RO-BN", coords: [24.850, 47.183],
    name: { de: "Colibița-See", hu: "Kolibica-tó", ro: "Lacul Colibița", en: "Colibița Lake" },
    description: { de: "Stausee in den Calimani-Bergen, bekannt als 'Meer im Gebirge'.", hu: "Víztározó a Kelemen-havasokban, a 'hegyi tengerként' ismert.", ro: "Lac de acumulare în Munții Călimani, supranumit 'marea de la munte'.", en: "Reservoir in the Călimani Mountains, known as the 'sea in the mountains'." },
    facts: { de: ["Sehr saubere Luft.", "Beliebtes Erholungsgebiet.", "900 Meter Höhe."], hu: ["Nagyon tiszta levegő.", "Népszerű üdülőhely.", "900 méter magasság."], ro: ["Aer foarte curat.", "Zonă de agrement populară.", "Altitudine 900 metri."], en: ["Very clean air.", "Popular recreation area.", "900 meters altitude."] },
    image: "/geo-images/romania/nature-lacul-colibita.webp",
  },
  {
    id: "nature-cheile-gradistei", type: "landmark", parent: "RO-BV", coords: [25.300, 45.450],
    name: { de: "Grădiștei-Schlucht", hu: "Gradistye-szurdok", ro: "Cheile Grădiștei", en: "Grădiștei Gorges" },
    description: { de: "Malerische Schlucht in der Nähe von Moieciu.", hu: "Festői szurdok Moieciu közelében.", ro: "Chei pitorești în apropiere de Moieciu.", en: "Picturesque gorges near Moieciu." },
    facts: { de: ["Bekanntes Ferienresort.", "Blick auf die Karpaten.", "Sportanlagen."], hu: ["Ismert üdülőhely.", "Kilátás a Kárpátokra.", "Sportlétesítmények."], ro: ["Complex turistic cunoscut.", "Vedere spre Carpați.", "Facilități sportive."], en: ["Well-known tourist resort.", "View of the Carpathians.", "Sports facilities."] },
    image: "/geo-images/romania/nature-cheile-gradistei.webp",
  },
];

// ---------------------------------------------------------------------------
// 5) TÖRTÉNELMI HELYEK
// ---------------------------------------------------------------------------
export const romaniaHistorical: POI[] = [
  {
    id: "hist-sarmizegetusa-regia", type: "historical", parent: "RO-HD", coords: [23.3117, 45.6225],
    name: { de: "Sarmizegetusa Regia", hu: "Sarmizegetusa Regia", ro: "Sarmizegetusa Regia", en: "Sarmizegetusa Regia" },
    description: { de: "Hauptstadt des Dakerreiches, heute UNESCO-Welterbe.", hu: "A dák királyság fővárosa, ma UNESCO-örökség.", ro: "Capitala Regatului Dac, patrimoniu UNESCO.", en: "Capital of the Dacian kingdom, UNESCO World Heritage site." },
    facts: { de: ["Erobert 106 n. Chr. durch Kaiser Trajan.", "Heiligtum mit Sonnenkalender.", "Liegt auf 1.200 m Höhe."], hu: ["Kr. u. 106-ban foglalta el Traianus császár.", "Szentély napkalendáriummal.", "1200 m magasan fekszik."], ro: ["Cucerită în 106 d.Hr. de Traian.", "Sanctuarul cu calendar solar.", "La 1.200 m altitudine."], en: ["Conquered in 106 AD by Emperor Trajan.", "Sanctuary with solar calendar.", "At 1,200 m elevation."] },
    historyPeriod: "empire", historyYear: [-82, 106],
    image: "/geo-images/romania/hist-sarmizegetusa-regia.webp",
  },
  {
    id: "hist-ulpia-traiana", type: "historical", parent: "RO-HD", coords: [22.7833, 45.5083],
    name: { de: "Ulpia Traiana Sarmizegetusa", hu: "Ulpia Traiana Sarmizegetusa", ro: "Ulpia Traiana Sarmizegetusa", en: "Ulpia Traiana Sarmizegetusa" },
    description: { de: "Hauptstadt der römischen Provinz Dacia.", hu: "Dacia római provincia fővárosa.", ro: "Capitala provinciei romane Dacia.", en: "Capital of the Roman province of Dacia." },
    facts: { de: ["Gegründet um 106 n. Chr.", "Amphitheater erhalten.", "Kolonie mit Stadtrechten."], hu: ["Kr. u. 106 körül alapították.", "Megmaradt amfiteátrum.", "Városjogú colonia."], ro: ["Întemeiată cca 106 d.Hr.", "Amfiteatru conservat.", "Colonia cu drepturi depline."], en: ["Founded c. 106 AD.", "Preserved amphitheatre.", "Colony with full rights."] },
    historyPeriod: "empire", historyYear: 106,
    image: "/geo-images/romania/hist-ulpia-traiana.webp",
  },
  {
    id: "hist-histria", type: "historical", parent: "RO-CT", coords: [28.7767, 44.5469],
    name: { de: "Histria", hu: "Histria", ro: "Histria", en: "Histria" },
    description: { de: "Älteste Stadt auf rumänischem Boden, griechische Gründung 657 v. Chr.", hu: "Románia területének legrégebbi városa, görögök alapították Kr. e. 657-ben.", ro: "Cea mai veche așezare urbană a României, fondată de greci în 657 î.Hr.", en: "Oldest urban settlement in Romania, founded by Greeks in 657 BC." },
    facts: { de: ["Milesische Kolonie.", "Aufgegeben im 7. Jh. n. Chr.", "Ausgrabungen seit 1914."], hu: ["Milétoszi gyarmat.", "A 7. században elhagyták.", "1914 óta ásatások."], ro: ["Colonie milesiană.", "Abandonată în sec. VII d.Hr.", "Săpături din 1914."], en: ["Milesian colony.", "Abandoned in the 7th c. AD.", "Excavated since 1914."] },
    historyPeriod: "empire", historyYear: -657,
    image: "/geo-images/romania/hist-histria.webp",
  },
  {
    id: "hist-alba-carolina", type: "historical", parent: "RO-AB", coords: [23.568, 46.069],
    name: { de: "Festung Alba Carolina", hu: "Károlyvár (Alba Carolina)", ro: "Cetatea Alba Carolina", en: "Alba Carolina Citadel" },
    description: { de: "Barocke Sternfestung in Alba Iulia, nach Karl VI. benannt.", hu: "Barokk csillagvár Gyulafehérváron, VI. Károlyról elnevezve.", ro: "Cetate barocă în formă de stea la Alba Iulia, numită după Carol al VI-lea.", en: "Baroque star-shaped citadel in Alba Iulia, named after Charles VI." },
    facts: { de: ["Erbaut 1715–1738.", "Siebenzackige Form.", "Ort der Union 1918."], hu: ["1715–1738 között épült.", "Hétágú csillag alaprajz.", "Az 1918-as egyesülés helyszíne."], ro: ["Construită 1715–1738.", "Formă stelară cu 7 colțuri.", "Locul Marii Uniri 1918."], en: ["Built 1715–1738.", "Seven-pointed star shape.", "Site of the 1918 Great Union."] },
    historyPeriod: "empire", historyYear: [1715, 1738],
    image: "/geo-images/romania/hist-alba-carolina.webp",
  },
  {
    id: "hist-bran-castle", type: "historical", parent: "RO-BV", coords: [25.3671, 45.515],
    name: { de: "Schloss Bran", hu: "Bran vára (Törcsvár)", ro: "Castelul Bran", en: "Bran Castle" },
    description: { de: "Mittelalterliche Burg, bekannt als \"Draculas Schloss\".", hu: "Középkori vár, \"Drakula kastélya\" néven is ismert.", ro: "Cetate medievală, cunoscută drept \"Castelul lui Dracula\".", en: "Medieval castle known as \"Dracula's Castle\"." },
    facts: { de: ["Erbaut 1377–1388.", "Königin Maria wohnte hier.", "Symbol des Bram-Stoker-Romans."], hu: ["1377–1388 között épült.", "Mária királyné lakhelye volt.", "Bram Stoker regényének szimbóluma."], ro: ["Construit 1377–1388.", "Reședință a reginei Maria.", "Simbol al romanului Stoker."], en: ["Built 1377–1388.", "Queen Marie's residence.", "Icon of Stoker's novel."] },
    historyPeriod: "middle-ages", historyYear: [1377, 1388],
    image: "/geo-images/romania/hist-bran-castle.webp",
  },
  {
    id: "hist-peles-castle", type: "historical", parent: "RO-PH", coords: [25.5425, 45.3597],
    name: { de: "Schloss Peleș", hu: "Peles-kastély", ro: "Castelul Peleș", en: "Peleș Castle" },
    description: { de: "Königliche Sommerresidenz in Sinaia, Neorenaissance.", hu: "Királyi nyári rezidencia Sinaián, neoreneszánsz stílusban.", ro: "Reședința regală de vară de la Sinaia, stil neorenaștere.", en: "Royal summer residence at Sinaia, Neo-Renaissance." },
    facts: { de: ["Erbaut 1873–1914.", "Erstes elektrifiziertes Schloss Europas.", "König Karl I. ließ es errichten."], hu: ["1873–1914 között épült.", "Európa első villamos árammal ellátott kastélya.", "I. Károly király építtette."], ro: ["Construit 1873–1914.", "Primul castel european cu electricitate.", "Ctitorul: regele Carol I."], en: ["Built 1873–1914.", "First electrified castle in Europe.", "Commissioned by King Carol I."] },
    historyPeriod: "empire", historyYear: [1873, 1914],
    image: "/geo-images/romania/hist-peles-castle.webp",
  },
  {
    id: "hist-corvin-castle", type: "historical", parent: "RO-HD", coords: [22.888, 45.7494],
    name: { de: "Corvinenburg", hu: "Vajdahunyadi vár", ro: "Castelul Corvinilor", en: "Corvin Castle" },
    description: { de: "Spätgotische Burg der Familie Hunyadi.", hu: "Későgótikus Hunyadi-vár.", ro: "Cetate gotică târzie a familiei Corvin (Hunyadi).", en: "Late Gothic castle of the Hunyadi family." },
    facts: { de: ["Erbaut 1446 unter Johann Hunyadi.", "Mächtige Ritterhalle.", "Eines der größten Schlösser Europas."], hu: ["1446-ban Hunyadi János építtette.", "Impozáns lovagterem.", "Európa egyik legnagyobb vára."], ro: ["Construit 1446 de Iancu de Hunedoara.", "Sala Cavalerilor.", "Unul dintre cele mai mari castele europene."], en: ["Built 1446 under John Hunyadi.", "Mighty Knights' Hall.", "One of Europe's largest castles."] },
    historyPeriod: "middle-ages", historyYear: 1446,
    image: "/geo-images/romania/hist-corvin-castle.webp",
  },
  {
    id: "hist-sighisoara-citadel", type: "historical", parent: "RO-MS", coords: [24.7925, 46.2192],
    name: { de: "Zitadelle Schäßburg", hu: "Segesvári vár", ro: "Cetatea Sighișoara", en: "Sighișoara Citadel" },
    description: { de: "Bewohnte mittelalterliche Festungsstadt (UNESCO).", hu: "Ma is lakott középkori várnegyed (UNESCO).", ro: "Cetate medievală locuită (UNESCO).", en: "Still-inhabited medieval fortified town (UNESCO)." },
    facts: { de: ["9 Türme erhalten.", "Stundturm mit Uhrwerk 1648.", "Vlad Țepeș geboren um 1431."], hu: ["9 torony maradt fenn.", "Óratorony óraszerkezete 1648-ból.", "Vlad Tepes itt született kb. 1431-ben."], ro: ["9 turnuri păstrate.", "Mecanism din 1648 la Turnul cu Ceas.", "Vlad Țepeș născut aici cca 1431."], en: ["9 surviving towers.", "Clock tower mechanism from 1648.", "Vlad the Impaler born here c. 1431."] },
    historyPeriod: "middle-ages",
    image: "/geo-images/romania/hist-sighisoara-citadel.webp",
  },
  {
    id: "hist-voronet", type: "historical", parent: "RO-SV", coords: [25.865, 47.517],
    name: { de: "Kloster Voroneț", hu: "Voroneci kolostor", ro: "Mănăstirea Voroneț", en: "Voroneț Monastery" },
    description: { de: "\"Sixtinische Kapelle des Ostens\" mit Voroneț-Blau.", hu: "A \"Kelet Sixtus-kápolnája\", a híres voroneci kékkel.", ro: "\"Capela Sixtină a Estului\", cu celebrul albastru de Voroneț.", en: "\"Sistine Chapel of the East\" with its famous Voroneț blue." },
    facts: { de: ["Erbaut 1488 unter Stefan dem Großen.", "Jüngstes Gericht an der Westfassade.", "UNESCO-Welterbe."], hu: ["1488-ban Nagy István építtette.", "Az Utolsó ítélet freskó a nyugati homlokzaton.", "UNESCO-örökség."], ro: ["Ctitorită 1488 de Ștefan cel Mare.", "Judecata de Apoi pe fațada vestică.", "Patrimoniu UNESCO."], en: ["Founded 1488 by Stephen the Great.", "Last Judgement on west facade.", "UNESCO site."] },
    historyPeriod: "middle-ages", historyYear: 1488,
    image: "/geo-images/romania/hist-voronet.webp",
  },
  {
    id: "hist-moldovita", type: "historical", parent: "RO-SV", coords: [25.585, 47.655],
    name: { de: "Kloster Moldovița", hu: "Moldovica kolostor", ro: "Mănăstirea Moldovița", en: "Moldovița Monastery" },
    description: { de: "Bemaltes Kloster der Bukowina (UNESCO).", hu: "Bukovinai festett kolostor (UNESCO).", ro: "Mănăstire pictată din Bucovina (UNESCO).", en: "Painted monastery of Bukovina (UNESCO)." },
    facts: { de: ["Erbaut 1532.", "Belagerung Konstantinopels als Fresko.", "Gut erhaltene Außenmalerei."], hu: ["1532-ben épült.", "A konstantinápolyi ostrom mint freskó.", "Jól megőrzött külső freskók."], ro: ["Construită 1532.", "Asediul Constantinopolului.", "Frescă exterioară bine păstrată."], en: ["Built 1532.", "Siege of Constantinople fresco.", "Well-preserved exterior paintings."] },
    historyPeriod: "middle-ages", historyYear: 1532,
    image: "/geo-images/romania/hist-moldovita.webp",
  },
  {
    id: "hist-sucevita", type: "historical", parent: "RO-SV", coords: [25.712, 47.777],
    name: { de: "Kloster Sucevița", hu: "Szucsevica kolostor", ro: "Mănăstirea Sucevița", en: "Sucevița Monastery" },
    description: { de: "Letztes der bemalten Klöster (UNESCO).", hu: "A festett kolostorok legkésőbbi példája (UNESCO).", ro: "Ultima dintre mănăstirile pictate (UNESCO).", en: "Last of the painted monasteries (UNESCO)." },
    facts: { de: ["Erbaut um 1585.", "\"Himmelsleiter\" Fresko.", "Festungsartige Anlage."], hu: ["Kb. 1585-ben épült.", "\"Mennyekbe vezető létra\" freskó.", "Erődített kolostor."], ro: ["Construită cca 1585.", "Fresca \"Scara Virtuților\".", "Zidită ca o cetate."], en: ["Built c. 1585.", "\"Ladder of Virtues\" fresco.", "Fortress-like complex."] },
    historyPeriod: "middle-ages", historyYear: 1585,
    image: "/geo-images/romania/hist-sucevita.webp",
  },
  {
    id: "hist-horezu", type: "historical", parent: "RO-VL", coords: [24.0, 45.17],
    name: { de: "Kloster Horezu", hu: "Horezu kolostor", ro: "Mănăstirea Horezu", en: "Horezu Monastery" },
    description: { de: "Barockes Kloster (Brâncovenesc-Stil), UNESCO-Welterbe.", hu: "Brâncoveanu-stílusú barokk kolostor, UNESCO-örökség.", ro: "Mănăstire în stil brâncovenesc, patrimoniu UNESCO.", en: "Brâncovenesc-style monastery, UNESCO site." },
    facts: { de: ["Erbaut 1690–1697.", "Fürst Constantin Brâncoveanu.", "Keramik von Horezu berühmt."], hu: ["1690–1697 között épült.", "Brâncoveanu fejedelem alapította.", "Híres horezu-i kerámia."], ro: ["Construită 1690–1697.", "Ctitorită de Brâncoveanu.", "Ceramica de Horezu, UNESCO."], en: ["Built 1690–1697.", "Founded by Prince Brâncoveanu.", "Famous Horezu pottery."] },
    historyPeriod: "reformation", historyYear: [1690, 1697],
    image: "/geo-images/romania/hist-horezu.webp",
  },
  {
    id: "hist-poenari", type: "historical", parent: "RO-AG", coords: [24.628, 45.355],
    name: { de: "Burg Poenari", hu: "Poenari vára", ro: "Cetatea Poenari", en: "Poenari Citadel" },
    description: { de: "Bergburg Vlad Țepeș', \"echte Draculaburg\".", hu: "Vlad Tepes hegyi vára, a \"valódi Drakula-vár\".", ro: "Cetatea de munte a lui Vlad Țepeș, \"adevăratul castel al lui Dracula\".", en: "Mountain stronghold of Vlad the Impaler, the \"real Dracula castle\"." },
    facts: { de: ["1.480 Treppen zum Aufstieg.", "15. Jahrhundert.", "An der Transfăgărășan."], hu: ["1480 lépcső vezet fel.", "15. századi.", "A Transzfogarasi út mentén."], ro: ["1.480 de trepte.", "Secolul XV.", "Pe Transfăgărășan."], en: ["1,480 steps to reach it.", "15th century.", "Along Transfăgărășan."] },
    historyPeriod: "middle-ages", historyYear: 1459,
    image: "/geo-images/romania/hist-poenari.webp",
  },
  {
    id: "hist-curtea-veche", type: "historical", parent: "RO-B", coords: [26.1, 44.43],
    name: { de: "Alter Fürstenhof Bukarest", hu: "Régi fejedelmi udvar (Bukarest)", ro: "Curtea Veche", en: "Old Princely Court" },
    description: { de: "Historische Keimzelle Bukarests, Residenz Vlad Țepeș'.", hu: "Bukarest történelmi magja, Vlad Tepes rezidenciája.", ro: "Nucleul istoric al Bucureștiului, reședința lui Vlad Țepeș.", en: "Bucharest's historical core, Vlad the Impaler's residence." },
    facts: { de: ["Erwähnt 1459 – Bukarests Geburtstag.", "Curtea-Veche-Kirche (16. Jh.).", "Im Altstadtviertel Lipscani."], hu: ["1459-ben említve – Bukarest születése.", "Curtea Veche templom (16. század).", "A Lipscani óvárosi negyedben."], ro: ["Atestat 1459 – nașterea Bucureștiului.", "Biserica Curtea Veche (sec. XVI).", "În Centrul Vechi (Lipscani)."], en: ["Attested 1459 – Bucharest's birth.", "Curtea Veche Church (16th c.).", "In Lipscani old town."] },
    historyPeriod: "middle-ages", historyYear: 1459,
    image: "/geo-images/romania/hist-curtea-veche.webp",
  },
  {
    id: "hist-targoviste-court", type: "historical", parent: "RO-DB", coords: [25.4586, 44.9317],
    name: { de: "Fürstenhof von Târgoviște", hu: "Târgoviștei fejedelmi udvar", ro: "Curtea Domnească din Târgoviște", en: "Princely Court of Târgoviște" },
    description: { de: "Ehemalige Hauptstadt der Walachei und Residenz von Vlad Țepeș.", hu: "Havasalföld egykori fővárosa és Vlad Tepes rezidenciája.", ro: "Fostă capitală a Țării Românești și reședința lui Vlad Țepeș.", en: "Former capital of Wallachia and residence of Vlad the Impaler." },
    facts: { de: ["Chindia-Turm.", "Große Fürstenkirche.", "Ort der Ceaușescu-Hinrichtung."], hu: ["Chindia-torony.", "Nagyfejedelmi templom.", "A Ceaușescu-házaspár kivégzésének helye."], ro: ["Turnul Chindia.", "Biserica Mare Domnească.", "Locul procesului și execuției soților Ceaușescu."], en: ["Chindia Tower.", "Great Princely Church.", "Site of the Ceaușescu execution."] },
    image: "/geo-images/romania/hist-targoviste-court.webp",
  },
  {
    id: "hist-oradea-fortress", type: "historical", parent: "RO-BH", coords: [21.942, 47.051],
    name: { de: "Festung Oradea", hu: "Nagyváradi vár", ro: "Cetatea Oradea", en: "Oradea Fortress" },
    description: { de: "Mächtige fünfzackige Sternfestung im Westen Rumäniens.", hu: "Hatalmas ötszögletű csillagvár Románia nyugati részén.", ro: "Cetate bastionară în formă de stea cu cinci colțuri.", en: "Massive pentagonal star-shaped fortress in western Romania." },
    facts: { de: ["Religiöses Zentrum im Mittelalter.", "Vielmals belagert.", "Heute Kulturzentrum."], hu: ["Középkori vallási központ.", "Számos alkalommal ostromolták.", "Ma kulturális központ."], ro: ["Centru religios important în Evul Mediu.", "Asediată de numeroase ori.", "Recent restaurată și deschisă publicului."], en: ["Medieval religious center.", "Besieged numerous times.", "Recently restored cultural hub."] },
    image: "/geo-images/romania/hist-oradea-fortress.webp",
  },
  {
    id: "hist-deva-citadel", type: "historical", parent: "RO-HD", coords: [22.896, 45.888],
    name: { de: "Zitadelle von Deva", hu: "Dévai vár", ro: "Cetatea Devei", en: "Deva Citadel" },
    description: { de: "Ruine einer strategischen Festung auf einem Vulkankegel.", hu: "Stratégiai fontosságú várrom egy vulkáni kúpon.", ro: "Ruinele unei cetăți strategice pe un con vulcanic.", en: "Ruins of a strategic fortress atop a volcanic cone." },
    facts: { de: ["Erbaut im 13. Jh.", "Wichtiger Grenzschutz.", "Erreichbar per Seilbahn."], hu: ["A 13. században épült.", "Fontos határvédelmi szerep.", "Siklóval megközelíthető."], ro: ["Construită în secolul al XIII-lea.", "Cheia Mureșului.", "Accesibilă cu telecabina."], en: ["Built in the 13th century.", "Key to the Mureș Valley.", "Accessible by funicular."] },
    image: "/geo-images/romania/hist-deva-citadel.webp",
  },
  {
    id: "hist-rasnov-fortress", type: "historical", parent: "RO-BV", coords: [25.468, 45.59],
    name: { de: "Bauernburg Rosenau", hu: "Barcarozsnyói vár", ro: "Cetatea Râșnov", en: "Râșnov Citadel" },
    description: { de: "Gut erhaltene Bauernburg auf einem felsigen Hügel.", hu: "Jó állapotban fennmaradt parasztvár egy sziklás dombon.", ro: "Cetate țărănească bine conservată pe un deal stâncos.", en: "Well-preserved peasant fortress on a rocky hill." },
    facts: { de: ["Fluchtort für Dorfbewohner.", "Tiefer Brunnen (146 m).", "Panoramablick."], hu: ["Menekülőhely a falusiaknak.", "Mély kút (146 m).", "Panorámás kilátás."], ro: ["Refugiu pentru localnici.", "Fântână adâncă de 146 m.", "Vedere panoramică asupra Țării Bârsei."], en: ["Refuge for local villagers.", "Deep well (146 m).", "Panoramic views."] },
    image: "/geo-images/romania/hist-rasnov-fortress.webp",
  },
  {
    id: "hist-fagaras-fortress", type: "historical", parent: "RO-BV", coords: [24.974, 45.845],
    name: { de: "Burg Fogarasch", hu: "Fogarasi vár", ro: "Cetatea Făgăraș", en: "Făgăraș Fortress" },
    description: { de: "Einstige Residenz siebenbürgischer Fürsten.", hu: "Az erdélyi fejedelmek egykori rezidenciája.", ro: "Fosta reședință a principilor Transilvaniei.", en: "Former residence of Transylvanian princes." },
    facts: { de: ["Umgeben von einem Wassergraben.", "Im 20. Jh. Gefängnis.", "Prachtvolle Renaissancemauern."], hu: ["Vizesárok veszi körül.", "A 20. században börtön volt.", "Díszes reneszánsz falak."], ro: ["Înconjurată de un șanț cu apă.", "Închisoare politică în sec. XX.", "Găzduiește Muzeul Țării Făgărașului."], en: ["Surrounded by a water moat.", "Political prison in the 20th c.", "Houses the Făgăraș Land Museum."] },
    image: "/geo-images/romania/hist-fagaras-fortress.webp",
  },
  {
    id: "hist-biertan", type: "historical", parent: "RO-SB", coords: [24.521, 46.135],
    name: { de: "Kirchenburg von Biertan", hu: "Berethalmi erődtemplom", ro: "Biserica fortificată din Biertan", en: "Biertan Fortified Church" },
    description: { de: "UNESCO-geschützte sächsische Kirchenburg.", hu: "UNESCO-védelem alatt álló szász erődtemplom.", ro: "Biserică fortificată săsească, patrimoniu UNESCO.", en: "UNESCO-protected Saxon fortified church." },
    facts: { de: ["Drei Ringmauern.", "Berühmte Sakristeitür.", "Ehemaliger Bischofssitz."], hu: ["Három falgyűrű.", "Híres sekrestyeajtó.", "Egykori püspöki székhely."], ro: ["Trei rânduri de ziduri.", "Ușă de sacristie celebră.", "Fost sediu al episcopatului evanghelic."], en: ["Three concentric walls.", "Famous sacristy door.", "Former evangelical bishopric seat."] },
    image: "/geo-images/romania/hist-biertan.webp",
  },
  {
    id: "hist-neamt-citadel", type: "historical", parent: "RO-NT", coords: [26.345, 47.215],
    name: { de: "Zitadelle Neamț", hu: "Németi vár", ro: "Cetatea Neamț", en: "Neamț Citadel" },
    description: { de: "Mittelalterliche Festung in der Moldau auf dem Pleșu-Berg.", hu: "Középkori moldvai vár a Pleșu-hegyen.", ro: "Cetate medievală moldovenească pe stânca Pleșului.", en: "Medieval Moldavian fortress atop the Pleșu Rock." },
    facts: { de: ["Erbaut unter Petru I. Mușat.", "Verteidigte gegen Osmanen.", "Hohe Mauern und Gräben."], hu: ["I. Péter moldvai fejedelem építtette.", "Védekezett az oszmánok ellen.", "Magas falak és árkok."], ro: ["Construită de Petru I Mușat.", "Asediată de Sobieski și Baiazid.", "Restaurată spectaculos."], en: ["Built by Petru I Mușat.", "Besieged by Sobieski and Bayezid.", "Spectacularly restored."] },
    image: "/geo-images/romania/hist-neamt-citadel.webp",
  },
  {
    id: "hist-putna", type: "historical", parent: "RO-SV", coords: [25.605, 47.863],
    name: { de: "Kloster Putna", hu: "Putnai kolostor", ro: "Mănăstirea Putna", en: "Putna Monastery" },
    description: { de: "Bedeutendes Kloster und Grablege Stefans des Großen.", hu: "Jelentős kolostor és Nagy István temetkezési helye.", ro: "Unul dintre cele mai importante centre culturale și religioase.", en: "One of the most important cultural and religious centers." },
    facts: { de: ["Gegründet 1466.", "\"Jerusalem der rumänischen Nation\".", "Reiches Museum."], hu: ["1466-ban alapították.", "A \"román nemzet Jeruzsáleme\".", "Gazdag múzeum."], ro: ["Ctitorită de Ștefan cel Mare.", "Mormântul lui Ștefan cel Mare.", "Poreclită „Ierusalimul neamului românesc”."], en: ["Founded by Stephen the Great.", "Burial place of Stephen the Great.", "Nicknamed \"Jerusalem of the Romanian people\"."] },
    image: "/geo-images/romania/hist-putna.webp",
  },
  {
    id: "hist-curtea-de-arges", type: "historical", parent: "RO-AG", coords: [24.675, 45.157],
    name: { de: "Kathedrale von Curtea de Argeș", hu: "Curtea de Argeș-i kolostor", ro: "Mănăstirea Curtea de Argeș", en: "Curtea de Argeș Cathedral" },
    description: { de: "Prachtvolle byzantinische Kathedrale und Grabstätte der Könige.", hu: "Díszes bizánci székesegyház és királyi temetkezőhely.", ro: "Catedrală bizantină spectaculoasă și necropolă regală.", en: "Splendid Byzantine cathedral and royal necropolis." },
    facts: { de: ["Legende von Meister Manole.", "Grabstätte von König Karl I.", "Einzigartige Architektur."], hu: ["Manole mester legendája.", "I. Károly király sírhelye.", "Egyedülálló építészet."], ro: ["Legenda Meșterului Manole.", "Necropola Regilor României.", "Stil arhitectural unic."], en: ["Legend of Master Manole.", "Necropolis of Romania's Kings.", "Unique architectural style."] },
    image: "/geo-images/romania/hist-curtea-de-arges.webp",
  },
  {
    id: "hist-enisala", type: "historical", parent: "RO-TL", coords: [28.835, 44.884],
    name: { de: "Festung Enisala", hu: "Eniszala vára", ro: "Cetatea Enisala", en: "Enisala Fortress" },
    description: { de: "Mittelalterliche genuesische Festung mit Blick auf den Razim-See.", hu: "Középkori genuai vár a Razim-tóra néző kilátással.", ro: "Singura cetate medievală din Dobrogea care a supraviețuit.", en: "The only medieval fortress in Dobruja that has survived." },
    facts: { de: ["Kontrollierte Handelswege.", "Strategische Lage.", "Genuesische Architektur."], hu: ["Ellenőrizte a kereskedelmi utakat.", "Stratégiai elhelyezkedés.", "Genuai építészet."], ro: ["Construită de genovezi.", "Vedere asupra lacului Razim.", "Rol militar defensiv."], en: ["Built by Genovese merchants.", "Overlooking Lake Razim.", "Defensive military role."] },
    image: "/geo-images/romania/hist-enisala.webp",
  },
  {
    id: "hist-calnic", type: "historical", parent: "RO-AB", coords: [23.659, 45.891],
    name: { de: "Burg Kelling (Câlnic)", hu: "Kelneki vár", ro: "Cetatea Câlnic", en: "Câlnic Fortress" },
    description: { de: "UNESCO-Weltkulturerbe, eine der besterhaltenen Burgen Siebenbürgens.", hu: "UNESCO-világörökség, Erdély egyik legjobb állapotban fennmaradt vára.", ro: "Monument UNESCO, una dintre cele mai bine păstrate cetăți.", en: "UNESCO monument, one of the best-preserved fortresses." },
    facts: { de: ["Einstiger Adelssitz.", "Massiver Wohnturm.", "Sächsische Kapelle."], hu: ["Egykori nemesi lakhely.", "Hatalmas lakótorony.", "Szász kápolna."], ro: ["Fostă reședință nobiliară.", "Turn de locuință masiv.", "Capelă evanghelică."], en: ["Former noble residence.", "Massive residential tower.", "Evangelical chapel."] },
    image: "/geo-images/romania/hist-calnic.webp",
  },
  {
    id: "hist-prejmer", type: "historical", parent: "RO-BV", coords: [25.773, 45.722],
    name: { de: "Kirchenburg von Prejmer", hu: "Prázsmári erődtemplom", ro: "Biserica fortificată din Prejmer", en: "Prejmer Fortified Church" },
    description: { de: "Die stärkste Bauernburg Osteuropas (UNESCO).", hu: "Kelet-Európa legerősebb parasztvára (UNESCO).", ro: "Cea mai puternică biserică fortificată din sud-estul Europei.", en: "The strongest fortified church in Southeastern Europe." },
    facts: { de: ["272 Wohnkammern.", "Dicke Mauern (5 m).", "Griechisches Kreuz."], hu: ["272 lakókamra.", "Vastag falak (5 m).", "Görög kereszt alaprajz."], ro: ["272 de camere de refugiu.", "Ziduri groase de 5 m.", "Plan în formă de cruce greacă."], en: ["272 refuge rooms.", "5-m thick walls.", "Greek cross floor plan."] },
    image: "/geo-images/romania/hist-prejmer.webp",
  },
  {
    id: "hist-cozia", type: "historical", parent: "RO-VL", coords: [24.311, 45.272],
    name: { de: "Kloster Cozia", hu: "Kozsia-kolostor", ro: "Mănăstirea Cozia", en: "Cozia Monastery" },
    description: { de: "Mittelalterliches Kloster am Ufer des Olt, erbaut von Mircea cel Bătrân.", hu: "Középkori kolostor az Olt partján, Mircea cel Bătrân alapította.", ro: "Mănăstire medievală pe malul Oltului, ctitorită de Mircea cel Bătrân.", en: "Medieval monastery on the banks of the Olt, founded by Mircea the Elder." },
    facts: { de: ["Erbaut 1388.", "Byzantinischer Architekturstil.", "Grabstätte von Mircea cel Bătrân."], hu: ["1388-ban épült.", "Bizánci építészeti stílus.", "Mircea cel Bătrân nyughelye."], ro: ["Construită în 1388.", "Stil arhitectural bizantin.", "Mormântul lui Mircea cel Bătrân."], en: ["Built in 1388.", "Byzantine architectural style.", "Burial place of Mircea the Elder."] },
    image: "/geo-images/romania/hist-cozia.webp",
  },
  {
    id: "hist-suceava-fortress", type: "historical", parent: "RO-SV", coords: [26.270, 47.645],
    name: { de: "Festung von Suceava", hu: "Szucsávai vár", ro: "Cetatea de Scaun a Sucevei", en: "Suceava Princely Fortress" },
    description: { de: "Mächtige mittelalterliche Festung, Residenz der moldauischen Fürsten.", hu: "Hatalmas középkori erődítmény, a moldvai fejedelmek székhelye.", ro: "Cetate medievală impunătoare, reședința domnitorilor Moldovei.", en: "Imposing medieval fortress, the residence of Moldavian princes." },
    facts: { de: ["Hauptstadt der Moldau.", "Nie durch Waffen erobert.", "Unter Stefan dem Großen ausgebaut."], hu: ["Moldva egykori fővárosa.", "Fegyverrel sosem vették be.", "Nagy István idején bővítették."], ro: ["Capitala Moldovei medievale.", "Niciodată cucerită prin arme.", "Fortificată de Ștefan cel Mare."], en: ["Capital of medieval Moldavia.", "Never conquered by force of arms.", "Fortified by Stephen the Great."] },
    image: "/geo-images/romania/hist-suceava-fortress.webp",
  },
  {
    id: "hist-sighisoara-clock-tower", type: "historical", parent: "RO-MS", coords: [24.793, 46.219],
    name: { de: "Stundturm Schäßburg", hu: "Segesvári óratorony", ro: "Turnul cu Ceas din Sighișoara", en: "Sighișoara Clock Tower" },
    description: { de: "Wahrzeichen von Schäßburg mit einem mechanischen Figurenspiel.", hu: "Segesvár jelképe mechanikus figurás óraszerkezettel.", ro: "Simbolul orașului Sighișoara, cu un mecanism cu figurine.", en: "The symbol of Sighișoara, featuring a mechanical figurine clock." },
    facts: { de: ["Erbaut im 14. Jh.", "64 Meter hoch.", "Beherbergt das Geschichtsmuseum."], hu: ["A 14. században épült.", "64 méter magas.", "A történeti múzeumnak ad otthont."], ro: ["Construit în sec. XIV.", "Înălțime de 64 metri.", "Găzduiește Muzeul de Istorie."], en: ["Built in the 14th century.", "64 meters tall.", "Houses the History Museum."] },
    image: "/geo-images/romania/hist-sighisoara-clock-tower.webp",
  },
  {
    id: "hist-arad-fortress", type: "historical", parent: "RO-AR", coords: [21.330, 46.172],
    name: { de: "Festung Arad", hu: "Aradi vár", ro: "Cetatea Aradului", en: "Arad Fortress" },
    description: { de: "Vauban-Festung am Ufer des Mureș, Ort historischer Ereignisse.", hu: "Vauban-stílusú vár a Maros partján, történelmi események helyszíne.", ro: "Cetate în stil Vauban pe malul Mureșului, loc al evenimentelor istorice.", en: "Vauban-style fortress on the banks of the Mureș, site of historical events." },
    facts: { de: ["Erbaut unter Maria Theresia.", "Sternförmiger Grundriss.", "Gefängnis nach 1849."], hu: ["Mária Terézia idején épült.", "Csillag alakú alaprajz.", "Börtönként szolgált 1849 után."], ro: ["Construită sub Maria Tereza.", "Plan în formă de stea.", "Închisoare după 1849."], en: ["Built under Maria Theresa.", "Star-shaped floor plan.", "Served as a prison after 1849."] },
    image: "/geo-images/romania/hist-arad-fortress.webp",
  },
  {
    id: "hist-densus", type: "historical", parent: "RO-HD", coords: [22.791, 45.583],
    name: { de: "Kirche von Densuș", hu: "Demsusi templom", ro: "Biserica Sfântul Nicolae din Densuș", en: "Densuș Church" },
    description: { de: "Eine der ältesten Steinkirchen Rumäniens, erbaut aus römischen Spolien.", hu: "Románia egyik legrégebbi kőtemploma, római kövekből épült.", ro: "Una dintre cele mai vechi biserici de piatră, construită din spoli romane.", en: "One of Romania's oldest stone churches, built from Roman spolia." },
    facts: { de: ["Erbaut im 13. Jh.", "Römische Grabsteine im Mauerwerk.", "Einzigartige Architektur."], hu: ["A 13. században épült.", "Római sírkövek a falakban.", "Egyedülálló építészet."], ro: ["Construită în sec. XIII.", "Pietre funerare romane în ziduri.", "Arhitectură unică."], en: ["Built in the 13th century.", "Roman tombstones in the walls.", "Unique architecture."] },
    image: "/geo-images/romania/hist-densus.webp",
  },
  {
    id: "hist-cirtza", type: "historical", parent: "RO-SB", coords: [24.567, 45.783],
    name: { de: "Kloster Kerz", hu: "Kerczi apátság", ro: "Mănăstirea Cârța", en: "Cârța Monastery" },
    description: { de: "Ruinen einer Zisterzienserabtei, ein bedeutendes gotisches Denkmal.", hu: "Ciszterci apátság romjai, jelentős gótikus műemlék.", ro: "Ruinele unei abații cisterciene, monument gotic important.", en: "Ruins of a Cistercian abbey, an important Gothic monument." },
    facts: { de: ["Gegründet um 1202.", "Früheste Gotik in Siebenbürgen.", "Einstige Abtei der weißen Mönche."], hu: ["1202 körül alapították.", "A legkorábbi gótika Erdélyben.", "A fehér barátok egykori apátsága."], ro: ["Fondată în jurul anului 1202.", "Cea mai veche gotică din Transilvania.", "Fosta abație a călugărilor albi."], en: ["Founded around 1202.", "Earliest Gothic in Transylvania.", "Former abbey of the white monks."] },
    image: "/geo-images/romania/hist-cirtza.webp",
  },
  {
    id: "hist-rupea", type: "historical", parent: "RO-BV", coords: [25.212, 46.038],
    name: { de: "Burg Rupea", hu: "Kőhalmi vár", ro: "Cetatea Rupea", en: "Rupea Fortress" },
    description: { de: "Mittelalterliche Bauernburg auf einem Basaltfelsen.", hu: "Középkori parasztvár egy bazaltsziklán.", ro: "Cetate țărănească medievală pe o stâncă de bazalt.", en: "Medieval peasant fortress on a basalt rock." },
    facts: { de: ["Schneckenförmige Anlage.", "Strategischer Kontrollpunkt.", "Restauriert im 21. Jh."], hu: ["Csiga alakú alaprajz.", "Stratégiai ellenőrző pont.", "A 21. században restaurálták."], ro: ["Formă de spirală.", "Punct strategic de control.", "Restaurată în sec. XXI."], en: ["Spiral-shaped layout.", "Strategic control point.", "Restored in the 21st century."] },
    image: "/geo-images/romania/hist-rupea.webp",
  },
  {
    id: "hist-dragomirna", type: "historical", parent: "RO-SV", coords: [26.231, 47.758],
    name: { de: "Kloster Dragomirna", hu: "Dragomirnai kolostor", ro: "Mănăstirea Dragomirna", en: "Dragomirna Monastery" },
    description: { de: "Einzigartiges befestigtes Kloster mit extrem hohen Mauern.", hu: "Egyedülálló erődített kolostor rendkívül magas falakkal.", ro: "Mănăstire fortificată unică, cu ziduri extrem de înalte.", en: "Unique fortified monastery with extremely high walls." },
    facts: { de: ["Erbaut 1602–1609.", "Schmalste Kirche der Moldau.", "Reiche Steinschnitzereien."], hu: ["1602–1609 között épült.", "Moldva legkeskenyebb temploma.", "Gazdag kőfaragványok."], ro: ["Construită între 1602–1609.", "Cea mai îngustă biserică din Moldova.", "Sculpturi în piatră bogate."], en: ["Built 1602–1609.", "Narrowest church in Moldavia.", "Rich stone carvings."] },
    image: "/geo-images/romania/hist-dragomirna.webp",
  },
  {
    id: "hist-agapia", type: "historical", parent: "RO-NT", coords: [26.235, 47.170],
    name: { de: "Kloster Agapia", hu: "Agapia-kolostor", ro: "Mănăstirea Agapia", en: "Agapia Monastery" },
    description: { de: "Eines der größten Nonnenklöster Rumäniens, bekannt für seine Fresken.", hu: "Románia egyik legnagyobb apácakolostora, freskóiról híres.", ro: "Una dintre cele mai mari mănăstiri de maici, celebră pentru fresce.", en: "One of Romania's largest nunneries, famous for its frescoes." },
    facts: { de: ["Fresken von Nicolae Grigorescu.", "Gegründet im 17. Jh.", "Blumenreiche Innenhöfe."], hu: ["Nicolae Grigorescu freskói.", "A 17. században alapították.", "Virággal teli belső udvarok."], ro: ["Pictată de Nicolae Grigorescu.", "Fondată în sec. XVII.", "Curți interioare pline de flori."], en: ["Frescoes by Nicolae Grigorescu.", "Founded in the 17th century.", "Flower-filled courtyards."] },
    image: "/geo-images/romania/hist-agapia.webp",
  },
  {
    id: "hist-tismana", type: "historical", parent: "RO-GJ", coords: [22.950, 45.050],
    name: { de: "Kloster Tismana", hu: "Tiszmanai kolostor", ro: "Mănăstirea Tismana", en: "Tismana Monastery" },
    description: { de: "Ältestes Kloster der Walachei, erbaut auf einem Felsen.", hu: "Havasalföld legrégebbi kolostora, egy sziklára épült.", ro: "Cea mai veche mănăstire din Țara Românească, pe o stâncă.", en: "The oldest monastery in Wallachia, built on a rock." },
    facts: { de: ["Gegründet von Nicodim.", "Versteck für den Goldschatz.", "Höhle hinter der Kirche."], hu: ["Nicodim alapította.", "Az aranytartalék rejtekhelye volt.", "Barlang a templom mögött."], ro: ["Fondată de Sf. Nicodim.", "Locul tezaurului BNR în război.", "Peșteră în spatele bisericii."], en: ["Founded by St. Nicodim.", "Hidden site of the national gold reserve.", "Cave behind the church."] },
    image: "/geo-images/romania/hist-tismana.webp",
  },
];

// ---------------------------------------------------------------------------
// 6) LÁTNIVALÓK (természeti és épített látnivalók, sóbányák)
// ---------------------------------------------------------------------------
export const romaniaLandmarks: POI[] = [
  {
    id: "landmark-delta-dunarii", type: "landmark", parent: "RO-TL", coords: [29.37, 45.17],
    name: { de: "Donaudelta", hu: "Duna-delta", ro: "Delta Dunării", en: "Danube Delta" },
    description: { de: "Zweitgrößtes Delta Europas, UNESCO-Biosphärenreservat.", hu: "Európa második legnagyobb deltája, UNESCO bioszféra-rezervátum.", ro: "Al doilea delta al Europei, rezervație UNESCO.", en: "Europe's second-largest delta, UNESCO biosphere reserve." },
    facts: { de: ["Fläche ~5.800 km² (RO-Teil).", "Über 300 Vogelarten.", "UNESCO seit 1991."], hu: ["Területe kb. 5800 km² (romániai rész).", "Több mint 300 madárfaj.", "UNESCO 1991 óta."], ro: ["Suprafață ~5.800 km² (partea RO).", "Peste 300 de specii de păsări.", "UNESCO din 1991."], en: ["Area ~5,800 km² (RO part).", "Over 300 bird species.", "UNESCO since 1991."] },
    area: 5800,
    subjects: ["sachkunde", "geographie"],
    image: "/geo-images/romania/landmark-delta-dunarii.webp",
  },
  {
    id: "landmark-retezat-np", type: "landmark", parent: "RO-HD", coords: [22.87, 45.37],
    name: { de: "Retezat-Nationalpark", hu: "Retyezát Nemzeti Park", ro: "Parcul Național Retezat", en: "Retezat National Park" },
    description: { de: "Ältester Nationalpark Rumäniens (1935).", hu: "Románia legrégebbi nemzeti parkja (1935).", ro: "Cel mai vechi parc național (1935).", en: "Romania's oldest national park (1935)." },
    facts: { de: ["UNESCO-MAB-Biosphäre.", "Über 80 Gletscherseen.", "Heimat von Gämsen und Bären."], hu: ["UNESCO-MAB bioszféra.", "Több mint 80 gleccsertó.", "Zergék, medvék élnek itt."], ro: ["Rezervație MAB UNESCO.", "Peste 80 lacuri glaciare.", "Caprete negre și urși."], en: ["UNESCO MAB reserve.", "Over 80 glacial lakes.", "Chamois and bears."] },
    area: 381,
    image: "/geo-images/romania/landmark-retezat-np.webp",
  },
  {
    id: "landmark-transfagarasan", type: "landmark", parent: "RO", coords: [24.62, 45.6],
    name: { de: "Transfăgărășan-Straße", hu: "Transzfogarasi út", ro: "Transfăgărășan (DN7C)", en: "Transfăgărășan Road" },
    description: { de: "Spektakuläre Hochgebirgsstraße über die Fogarascher Berge.", hu: "Látványos magashegyi út a Fogarasi-havasokon át.", ro: "Șosea alpină spectaculoasă prin Munții Făgăraș.", en: "Spectacular high-altitude road across the Făgăraș Mountains." },
    facts: { de: ["Höchster Punkt 2.042 m.", "Erbaut 1970–1974 (Ceaușescu).", "Im Winter meist gesperrt."], hu: ["Legmagasabb pontja 2042 m.", "1970–1974 között épült (Ceaușescu).", "Télen többnyire zárva."], ro: ["Punct culminant 2.042 m.", "Construit 1970–1974 (Ceaușescu).", "Închis iarna."], en: ["Highest point 2,042 m.", "Built 1970–1974 (Ceaușescu).", "Closed in winter."] },
    elevation: 2042,
    image: "/geo-images/romania/landmark-transfagarasan.webp",
  },
  {
    id: "landmark-transalpina", type: "landmark", parent: "RO", coords: [23.68, 45.44],
    name: { de: "Transalpina-Straße", hu: "Transalpina út", ro: "Transalpina (DN67C)", en: "Transalpina Road" },
    description: { de: "Höchste Straße Rumäniens durch die Parâng-Berge.", hu: "Románia legmagasabb hegyi útja a Páring-hegységben.", ro: "Șoseaua cu cea mai mare altitudine din România, în Parâng.", en: "Romania's highest road, crossing the Parâng Mountains." },
    facts: { de: ["Höchster Punkt 2.145 m.", "\"Königsstraße\".", "Oltenien ↔ Siebenbürgen."], hu: ["Legmagasabb pontja 2145 m.", "\"Király útja\".", "Olténia ↔ Erdély."], ro: ["Punct culminant 2.145 m.", "\"Drumul Regelui\".", "Oltenia ↔ Transilvania."], en: ["Highest point 2,145 m.", "\"King's Road\".", "Oltenia ↔ Transylvania."] },
    elevation: 2145,
    image: "/geo-images/romania/landmark-transalpina.webp",
  },
  {
    id: "landmark-cheile-bicazului", type: "landmark", parent: "RO-NT", coords: [25.83, 46.82],
    name: { de: "Bicaz-Schlucht", hu: "Békási-szoros", ro: "Cheile Bicazului", en: "Bicaz Gorge" },
    description: { de: "Spektakuläre Kalksteinschlucht zwischen Transsilvanien und Moldau.", hu: "Látványos mészkőszurdok Erdély és Moldva között.", ro: "Chei calcaroase spectaculoase între Transilvania și Moldova.", en: "Spectacular limestone gorge between Transylvania and Moldavia." },
    facts: { de: ["8 km lang, Felsen 300 m hoch.", "Teil Hășmaș-Nationalpark.", "Straße DN12C."], hu: ["8 km hosszú, 300 m magas sziklák.", "Nagyhagymás Nemzeti Park része.", "DN12C út."], ro: ["8 km, pereți de 300 m.", "Parte din Parcul Național Hășmaș.", "Pe DN12C."], en: ["8 km long, 300-m walls.", "Part of Hășmaș National Park.", "Road DN12C."] },
    image: "/geo-images/romania/landmark-cheile-bicazului.webp",
  },
  {
    id: "landmark-cheile-turzii", type: "landmark", parent: "RO-CJ", coords: [23.68, 46.56],
    name: { de: "Turzii-Schlucht", hu: "Tordai-hasadék", ro: "Cheile Turzii", en: "Turda Gorge" },
    description: { de: "Karstschlucht bei Turda, Naturreservat.", hu: "Karsztos szurdok Torda mellett, természetvédelmi terület.", ro: "Chei carstice lângă Turda, rezervație naturală.", en: "Karst gorge near Turda, nature reserve." },
    facts: { de: ["Länge ~2,9 km.", "Über 60 Höhlen.", "Endemische Pflanzen."], hu: ["Kb. 2,9 km hosszú.", "Több mint 60 barlang.", "Endemikus növények."], ro: ["Lungime ~2,9 km.", "Peste 60 de peșteri.", "Plante endemice."], en: ["~2.9 km long.", "Over 60 caves.", "Endemic plants."] },
    image: "/geo-images/romania/landmark-cheile-turzii.webp",
  },
  {
    id: "landmark-salina-turda", type: "landmark", parent: "RO-CJ", coords: [23.787, 46.587],
    name: { de: "Salzbergwerk Turda", hu: "Tordai sóbánya", ro: "Salina Turda", en: "Turda Salt Mine" },
    description: { de: "Historisches Salzbergwerk und unterirdischer Themenpark.", hu: "Történelmi sóbánya és földalatti élménypark.", ro: "Mină de sare istorică și parc tematic subteran.", en: "Historic salt mine and underground theme park." },
    facts: { de: ["Abbau seit römischer Zeit.", "Riesenrad und Bootfahrten.", "Tiefe bis 112 m."], hu: ["Kitermelés a római kor óta.", "Óriáskerék és csónakázótó.", "Mélysége 112 m."], ro: ["Exploatată din epoca romană.", "Roată panoramică și lac cu bărci.", "Adâncime 112 m."], en: ["Mined since Roman times.", "Ferris wheel and boating lake.", "Depth 112 m."] },
    historyPeriod: "empire",
    image: "/geo-images/romania/landmark-salina-turda.webp",
  },
  {
    id: "landmark-salina-praid", type: "landmark", parent: "RO-HR", coords: [25.13, 46.55],
    name: { de: "Salzbergwerk Praid", hu: "Parajdi sóbánya", ro: "Salina Praid", en: "Praid Salt Mine" },
    description: { de: "Größtes aktives Salzbergwerk Rumäniens.", hu: "Románia legnagyobb működő sóbányája.", ro: "Cea mai mare salină activă din România.", en: "Romania's largest active salt mine." },
    facts: { de: ["Abbau seit dem Mittelalter.", "Kurzentrum gegen Atemwegsleiden.", "Besucherniveau auf 120 m Tiefe."], hu: ["Középkor óta bányásznak itt.", "Gyógyászati kezelés légúti betegségekre.", "Látogatószint 120 m mélyen."], ro: ["Exploatată din Evul Mediu.", "Tratament pentru afecțiuni respiratorii.", "Nivel vizitatori la 120 m."], en: ["Mined since the Middle Ages.", "Treatment for respiratory ailments.", "Visitor level at 120 m depth."] },
    image: "/geo-images/romania/landmark-salina-praid.webp",
  },
  {
    id: "landmark-salina-slanic", type: "landmark", parent: "RO-PH", coords: [25.94, 45.24],
    name: { de: "Salzbergwerk Slănic", hu: "Slănic Prahova sóbánya", ro: "Salina Slănic Prahova", en: "Slănic Prahova Salt Mine" },
    description: { de: "Historisches Salzbergwerk mit riesigen Hallen.", hu: "Történelmi sóbánya hatalmas termekkel.", ro: "Salină istorică cu săli mari.", en: "Historic salt mine with huge halls." },
    facts: { de: ["Unirea-Halle: 53.000 m³.", "Kurbetrieb.", "Populäres Ausflugsziel."], hu: ["Unirea-terem: 53 000 m³.", "Gyógyászati központ.", "Népszerű kirándulóhely."], ro: ["Sala Unirii: 53.000 m³.", "Sanatoriu subteran.", "Obiectiv turistic popular."], en: ["Union Hall: 53,000 m³.", "Underground sanatorium.", "Popular attraction."] },
    image: "/geo-images/romania/landmark-salina-slanic.webp",
  },
  {
    id: "landmark-mud-volcanoes", type: "kid-landmark", parent: "RO-BZ", coords: [26.715, 45.35],
    name: { de: "Schlammvulkane Buzău", hu: "Iszapvulkánok (Buzău)", ro: "Vulcanii Noroioși", en: "Mud Volcanoes" },
    description: { de: "Seltene Naturerscheinung: kalte Vulkane aus Schlamm.", hu: "Ritka természeti jelenség: hideg iszapvulkánok.", ro: "Fenomen natural rar: vulcani reci cu noroi.", en: "Rare natural phenomenon: cold mud volcanoes." },
    facts: { de: ["Gas drückt Schlamm an die Oberfläche.", "Naturreservat.", "Mondlandschaft."], hu: ["A gáz nyomja fel az iszapot.", "Természetvédelmi terület.", "Holdbéli táj."], ro: ["Gazele împing noroiul la suprafață.", "Rezervație naturală.", "Peisaj selenar."], en: ["Gas pushes mud to the surface.", "Nature reserve.", "Lunar landscape."] },
    image: "/geo-images/romania/landmark-mud-volcanoes.webp",
  },
  {
    id: "landmark-sphinx-bucegi", type: "kid-landmark", parent: "RO-DB", coords: [25.467, 45.395],
    name: { de: "Bucegi-Sphinx", hu: "Bucsecs-Szfinx", ro: "Sfinxul din Bucegi", en: "Bucegi Sphinx" },
    description: { de: "Markante Felsformation auf 2.216 m Höhe.", hu: "Jellegzetes sziklaalakzat 2216 m magasan.", ro: "Formațiune stâncoasă la 2.216 m altitudine.", en: "Striking rock formation at 2,216 m elevation." },
    facts: { de: ["Nahe den Babele-Felsen.", "Durch Wind erodiert.", "Mit Seilbahn erreichbar."], hu: ["A Babele sziklák közelében.", "Szél formálta.", "Libegővel elérhető."], ro: ["Lângă Babele.", "Eroziune eoliană.", "Acces cu telecabina."], en: ["Near the Babele rocks.", "Shaped by wind.", "Accessible by cable car."] },
    elevation: 2216,
    image: "/geo-images/romania/landmark-sphinx-bucegi.webp",
  },
  {
    id: "landmark-palace-parliament", type: "landmark", parent: "RO-B", coords: [26.0876, 44.4272],
    name: { de: "Parlamentspalast", hu: "Parlament Palotája", ro: "Palatul Parlamentului", en: "Palace of the Parliament" },
    description: { de: "Monumentalbau aus der Ceaușescu-Ära, zweitgrößtes Gebäude der Welt.", hu: "Monumentális épület a Ceaușescu-érából, a világ második legnagyobb épülete.", ro: "Clădire monumentală din epoca Ceaușescu, a doua cea mai mare clădire din lume.", en: "Monumental building from the Ceaușescu era, the world's second-largest building." },
    facts: { de: ["Volumen 3,93 Mio. m³.", "Baubeginn 1984.", "1.100 Räume."], hu: ["Térfogata 3,93 millió m³.", "Építés kezdete: 1984.", "1100 helyiség."], ro: ["Volum 3,93 mil. m³.", "Început în 1984.", "1.100 de camere."], en: ["Volume 3.93 million m³.", "Construction began 1984.", "1,100 rooms."] },
    historyPeriod: "modern", historyYear: 1984,
    image: "/geo-images/romania/landmark-palace-parliament.webp",
  },
  {
    id: "landmark-merry-cemetery", type: "kid-landmark", parent: "RO-MM", coords: [23.692, 47.973],
    name: { de: "Fröhlicher Friedhof Săpânța", hu: "Szaplonca vidám temetője", ro: "Cimitirul Vesel din Săpânța", en: "Merry Cemetery of Săpânța" },
    description: { de: "Bunte geschnitzte Grabkreuze mit humorvollen Versen.", hu: "Színes faragott sírkeresztek humoros versekkel.", ro: "Cruci de lemn colorate, cu versuri haioase.", en: "Colorful carved wooden crosses with humorous verses." },
    facts: { de: ["Begründet 1935 von Stan Ioan Pătraș.", "Über 800 bemalte Kreuze.", "Einzigartig in Europa."], hu: ["1935-ben Stan Ioan Pătraș alapította.", "Több mint 800 festett kereszt.", "Európában egyedülálló."], ro: ["Început în 1935 de Stan Ioan Pătraș.", "Peste 800 de cruci pictate.", "Unic în Europa."], en: ["Started in 1935 by Stan Ioan Pătraș.", "Over 800 painted crosses.", "Unique in Europe."] },
    historyPeriod: "modern", historyYear: 1935,
    image: "/geo-images/romania/landmark-merry-cemetery.webp",
  },
  {
    id: "landmark-ateneul-roman", type: "landmark", parent: "RO-B", coords: [26.0971, 44.4415],
    name: { de: "Rumänisches Athenäum", hu: "Román Atheneum", ro: "Ateneul Român", en: "Romanian Athenaeum" },
    description: { de: "Prachtvolles Konzerthaus in Bukarest.", hu: "Díszes bukaresti koncertterem.", ro: "Sală de concerte emblematică din București.", en: "Bucharest's flagship concert hall." },
    facts: { de: ["Eröffnet 1888.", "Sitz der Georg-Enescu-Philharmonie.", "Kuppelgemälde mit rumänischer Geschichte."], hu: ["1888-ban nyílt meg.", "A George Enescu Filharmónia székhelye.", "Kupolafreskó a román történelemről."], ro: ["Inaugurat 1888.", "Sediul Filarmonicii G. Enescu.", "Frescă istorică pe cupolă."], en: ["Opened 1888.", "Home of G. Enescu Philharmonic.", "Dome fresco depicting Romanian history."] },
    historyPeriod: "empire", historyYear: 1888,
    image: "/geo-images/romania/landmark-ateneul-roman.webp",
  },
];

// ---------------------------------------------------------------------------
// 7) ÖSSZES POI EGYBEFŰZVE
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 8) KULTÚRA (romaniaCulture)
// ---------------------------------------------------------------------------
export const romaniaCulture: POI[] = [
  {
    id: "cultura-teatrul-national", type: "landmark", parent: "RO-B", coords: [26.1036, 44.4361],
    name: { ro: "Teatrul Național București", en: "National Theatre Bucharest", hu: "Bukaresti Nemzeti Színház", de: "Nationaltheater Bukarest" },
    description: { ro: "Cel mai mare teatru din România.", en: "The largest theatre in Romania.", hu: "Románia legnagyobb színháza.", de: "Das größte Theater in Rumänien." },
    facts: { ro: ["Clădirea actuală a fost refăcută recent."], en: ["Current building was recently renovated."], hu: ["A jelenlegi épületet nemrég újították fel."], de: ["Das aktuelle Gebäude wurde kürzlich renoviert."] },
    image: "/geo-images/romania/cultura-teatrul-national.webp"
  },
  {
    id: "cultura-muzeul-taranului", type: "landmark", parent: "RO-B", coords: [26.0836, 44.4544],
    name: { ro: "Muzeul Țăranului Român", en: "Museum of the Romanian Peasant", hu: "Román Parasztmúzeum", de: "Museum des rumänischen Bauern" },
    description: { ro: "Muzeu dedicat artei și tradițiilor populare.", en: "Museum dedicated to folk art and traditions.", hu: "Népművészetnek és hagyományoknak szentelt múzeum.", de: "Museum für Volkskunst und Traditionen." },
    facts: { ro: ["Clădire în stil neoromânesc."], en: ["Neo-Romanian style building."], hu: ["Neoromán stílusú épület."], de: ["Gebäude im neo-rumänischen Stil."] },
    image: "/geo-images/romania/museum-of-the-romanian-peasant.webp"
  },
  {
    id: "cultura-opera-cluj", type: "landmark", parent: "RO-CJ", coords: [23.5969, 46.7704],
    name: { ro: "Opera Națională Română Cluj-Napoca", en: "Romanian National Opera, Cluj-Napoca", hu: "Kolozsvári Román Nemzeti Opera", de: "Rumänische Nationaloper Cluj-Napoca" },
    description: { ro: "Prima instituție lirică a țării.", en: "The country's first lyrical institution.", hu: "Az ország első lírai intézménye.", de: "Die erste lyrische Einrichtung des Landes." },
    facts: { ro: ["Inaugurată în 1919."], en: ["Inaugurated in 1919."], hu: ["1919-ben nyílt meg."], de: ["1919 eingeweiht."] },
    image: "/geo-images/romania/cultura-opera-cluj.webp"
  },
  {
    id: "cultura-festivalul-enab", type: "landmark", parent: "RO-SB", coords: [24.15, 45.8],
    name: { ro: "FITS - Festivalul Internațional de Teatru de la Sibiu", en: "Sibiu International Theatre Festival", hu: "Nagyszebeni Nemzetközi Színházi Fesztivál", de: "Internationales Theaterfestival Sibiu" },
    description: { ro: "Unul dintre cele mai mari festivaluri de teatru din lume.", en: "One of the largest theatre festivals in the world.", hu: "A világ egyik legnagyobb színházi fesztiválja.", de: "Eines der größten Theaterfestivals der Welt." },
    facts: { ro: ["Are loc anual în Sibiu."], en: ["Takes place annually in Sibiu."], hu: ["Évente kerül megrendezésre Nagyszebenben."], de: ["Findet jährlich in Sibiu statt."] },
    image: "/geo-images/romania/sibiu-international-theatre-festival.webp"
  },
  {
    id: "cultura-muzeul-brukenthal", type: "landmark", parent: "RO-SB", coords: [24.151, 45.796],
    name: { ro: "Muzeul Național Brukenthal", en: "Brukenthal National Museum", hu: "Brukenthal Nemzeti Múzeum", de: "Brukenthal-Nationalmuseum" },
    description: { ro: "Cel mai vechi muzeu din România.", en: "The oldest museum in Romania.", hu: "Románia legrégebbi múzeuma.", de: "Das älteste Museum in Rumänien." },
    facts: { ro: ["Fondat de Samuel von Brukenthal."], en: ["Founded by Samuel von Brukenthal."], hu: ["Samuel von Brukenthal alapította."], de: ["Gegründet von Samuel von Brukenthal."] },
    image: "/geo-images/romania/cultura-muzeul-brukenthal.webp"
  },
  {
    id: "cultura-palatul-culturii", type: "landmark", parent: "RO-IS", coords: [27.585, 47.157],
    name: { ro: "Palatul Culturii Iași", en: "Palace of Culture Iași", hu: "Jászvásári Kultúrpalota", de: "Kulturpalast Iași" },
    description: { ro: "Edificiu emblematic în stil neogotic.", en: "Iconic neo-Gothic building.", hu: "Emblematikus neogótikus épület.", de: "Ikonisches neugotisches Gebäude." },
    facts: { ro: ["Găzduiește patru muzee mari."], en: ["Houses four major museums."], hu: ["Négy nagy múzeumnak ad otthont."], de: ["Beherbergt vier große Museen."] },
    image: "/geo-images/romania/cultura-palatul-culturii.webp"
  },
  {
    id: "cultura-untold", type: "landmark", parent: "RO-CJ", coords: [23.572, 46.768],
    name: { ro: "UNTOLD Festival", en: "UNTOLD Festival", hu: "UNTOLD Fesztivál", de: "UNTOLD Festival" },
    description: { ro: "Cel mai mare festival de muzică din România.", en: "The largest music festival in Romania.", hu: "Románia legnagyobb zenei fesztiválja.", de: "Das größte Musikfestival in Rumänien." },
    facts: { ro: ["Atrage sute de mii de participanți anual."], en: ["Attracts hundreds of thousands of attendees annually."], hu: ["Évente több százezer résztvevőt vonz."], de: ["Zieht jährlich Hunderttausende von Besuchern an."] },
    image: "/geo-images/romania/cultura-untold.webp"
  },
  {
    id: "cultura-saga-festival", type: "landmark", parent: "RO-B", coords: [26.08, 44.47],
    name: { ro: "SAGA Festival", en: "SAGA Festival", hu: "SAGA Fesztivál", de: "SAGA Festival" },
    description: { ro: "Festival de muzică electronică din București.", en: "Electronic music festival in Bucharest.", hu: "Elektronikus zenei fesztivál Bukarestben.", de: "Elektronisches Musikfestival in Bukarest." },
    facts: { ro: ["Se desfășoară în București."], en: ["Takes place in Bucharest."], hu: ["Bukarestben rendezik."], de: ["Findet in Bukarest statt."] },
    image: "/geo-images/romania/cultura-saga-festival.webp"
  },
  {
    id: "cultura-muzeul-antipa", type: "landmark", parent: "RO-B", coords: [26.085, 44.453],
    name: { ro: "Muzeul Grigore Antipa", en: "Grigore Antipa Museum", hu: "Grigore Antipa Múzeum", de: "Grigore-Antipa-Museum" },
    description: { ro: "Muzeu național de istorie naturală.", en: "National museum of natural history.", hu: "Nemzeti természettudományi múzeum.", de: "Nationales naturhistorisches Museum." },
    facts: { ro: ["Una dintre cele mai mari colecții din Europa de Est."], en: ["One of the largest collections in Eastern Europe."], hu: ["Kelet-Európa egyik legnagyobb gyűjteménye."], de: ["Eine der größten Sammlungen in Osteuropa."] },
    image: "/geo-images/romania/grigore-antipa-museum.webp"
  },
  {
    id: "cultura-opera-timisoara", type: "landmark", parent: "RO-TM", coords: [21.226, 45.753],
    name: { ro: "Opera Națională Română Timișoara", en: "Romanian National Opera Timișoara", hu: "Temesvári Román Nemzeti Opera", de: "Rumänische Nationaloper Timișoara" },
    description: { ro: "Instituție culturală de prestigiu în Banat.", en: "Prestigious cultural institution in Banat.", hu: "Rangos kulturális intézmény a Bánságban.", de: "Renommierte kulturelle Einrichtung im Banat." },
    facts: { ro: ["Situată în Piața Victoriei."], en: ["Located in Victory Square."], hu: ["A Győzelem téren található."], de: ["Am Siegesplatz gelegen."] },
    image: "/geo-images/romania/cultura-opera-timisoara.webp"
  }
];

// ---------------------------------------------------------------------------
// 9) TRADIȚII (romaniaTraditions)
// ---------------------------------------------------------------------------
export const romaniaTraditions: POI[] = [
  {
    id: "trad-martisor", type: "historical", parent: "RO", coords: [25.0, 45.0],
    name: { ro: "Mărțișorul", en: "Mărțișor (March Amulet)", hu: "Mărțișor", de: "Mărțișor" },
    description: { ro: "Sărbătoarea venirii primăverii la 1 martie.", en: "Celebration of the arrival of spring on March 1st.", hu: "A tavasz eljövetelének ünnepe március 1-jén.", de: "Feier der Ankunft des Frühlings am 1. März." },
    facts: { ro: ["Inclus în patrimoniul imaterial UNESCO."], en: ["Included in UNESCO intangible heritage."], hu: ["Az UNESCO szellemi kulturális örökség része."], de: ["In das immaterielle UNESCO-Kulturerbe aufgenommen."] },
    image: "/geo-images/romania/trad-martisor.webp"
  },
  {
    id: "trad-calusari", type: "historical", parent: "RO-OT", coords: [24.36, 44.43],
    name: { ro: "Dansul Călușarilor", en: "Călușari Dance", hu: "Călușari tánc", de: "Călușari-Tanz" },
    description: { ro: "Dans tradițional românesc cu funcție rituală.", en: "Traditional Romanian dance with a ritual function.", hu: "Hagyományos román rituális tánc.", de: "Traditioneller rumänischer Ritualtanz." },
    facts: { ro: ["Inclus în patrimoniul UNESCO din 2005."], en: ["Included in UNESCO heritage since 2005."], hu: ["2005 óta az UNESCO örökség része."], de: ["Seit 2005 im UNESCO-Kulturerbe."] },
    image: "/geo-images/romania/trad-calusari.webp"
  },
  {
    id: "trad-mucenici", type: "historical", parent: "RO", coords: [26.0, 44.5],
    name: { ro: "Sărbătoarea Mucenicilor", en: "Martyrs' Day (Mucenici)", hu: "Mucenici ünnepe", de: "Tag der Märtyrer (Mucenici)" },
    description: { ro: "Tradiție culinară și religioasă pe 9 martie.", en: "Culinary and religious tradition on March 9th.", hu: "Kulináris és vallási hagyomány március 9-én.", de: "Kulinarische und religiöse Tradition am 9. März." },
    facts: { ro: ["Se prepară colaci în formă de 8."], en: ["Figure-8 shaped pastries are made."], hu: ["8-as alakú kalácsokat készítenek."], de: ["Es werden Gebäcke in Form einer 8 gebacken."] },
    image: "/geo-images/romania/trad-mucenici.webp"
  },
  {
    id: "trad-paste", type: "historical", parent: "RO", coords: [25.5, 46.0],
    name: { ro: "Tradiții de Paște", en: "Easter Traditions", hu: "Húsvéti hagyományok", de: "Ostertraditionen" },
    description: { ro: "Încondeierea ouălor și slujba de Înviere.", en: "Egg painting and the Resurrection service.", hu: "Tojásírás és a feltámadási mise.", de: "Eier bemalen und der Auferstehungsgottesdienst." },
    facts: { ro: ["Ouăle roșii sunt un simbol principal."], en: ["Red eggs are a main symbol."], hu: ["A piros tojások a fő szimbólumok."], de: ["Rote Eier sind ein Hauptsymbol."] },
    image: "/geo-images/romania/trad-paste.webp"
  },
  {
    id: "trad-sanzaiene", type: "historical", parent: "RO", coords: [24.0, 46.5],
    name: { ro: "Sânzienele", en: "Sânziene (Midsummer)", hu: "Sânziene (Szentivánéj)", de: "Sânziene (Mittsommer)" },
    description: { ro: "Sărbătoare de vară legată de recolte și dragoste.", en: "Summer festival related to harvest and love.", hu: "Nyári ünnep a terméshez és a szerelemhez kötődően.", de: "Sommerfest im Zusammenhang mit Ernte und Liebe." },
    facts: { ro: ["Se sărbătorește pe 24 iunie."], en: ["Celebrated on June 24th."], hu: ["Június 24-én ünneplik."], de: ["Wird am 24. Juni gefeiert."] },
    image: "/geo-images/romania/sanziene-midsummer.webp"
  },
  {
    id: "trad-colindat", type: "historical", parent: "RO", coords: [25.0, 47.0],
    name: { ro: "Colindatul de Crăciun", en: "Christmas Caroling", hu: "Karácsonyi kántálás", de: "Weihnachtssingen" },
    description: { ro: "Tradiție de iarnă în care grupuri merg din casă în casă.", en: "Winter tradition where groups go from house to house.", hu: "Téli hagyomány, amikor csoportok házról házra járnak.", de: "Wintertradition, bei der Gruppen von Haus zu Haus gehen." },
    facts: { ro: ["Colindatul de ceată bărbătească este în patrimoniul UNESCO."], en: ["Men's group caroling is in UNESCO heritage."], hu: ["A férficsoportos kántálás az UNESCO örökség része."], de: ["Das Singen in Männergruppen gehört zum UNESCO-Kulturerbe."] },
    image: "/geo-images/romania/christmas-caroling.webp"
  },
  {
    id: "trad-dragobete", type: "historical", parent: "RO", coords: [23.5, 45.5],
    name: { ro: "Dragobetele", en: "Dragobete (Lovers' Day)", hu: "Dragobete (Szerelmesek napja)", de: "Dragobete (Tag der Liebenden)" },
    description: { ro: "Sărbătoarea tradițională a iubirii la români.", en: "Traditional Romanian celebration of love.", hu: "A szerelem hagyományos román ünnepe.", de: "Traditionelles rumänisches Fest der Liebe." },
    facts: { ro: ["Sărbătorit pe 24 februarie."], en: ["Celebrated on February 24th."], hu: ["Február 24-én ünneplik."], de: ["Wird am 24. Februar gefeiert."] },
    image: "/geo-images/romania/dragobete-lovers.webp"
  },
  {
    id: "trad-ignatul", type: "historical", parent: "RO", coords: [24.5, 46.0],
    name: { ro: "Ignatul", en: "Ignat Day (Pig Slaughter)", hu: "Disznóvágás (Ignat)", de: "Ignattag (Schweineschlachten)" },
    description: { ro: "Tradiție pre-crăciun care implică tăierea porcului.", en: "Pre-Christmas tradition involving pig slaughtering.", hu: "Karácsony előtti disznóvágás hagyomanya.", de: "Vorweihnachtliche Tradition des Schweineschlachtens." },
    facts: { ro: ["Are loc pe 20 decembrie."], en: ["Takes place on December 20th."], hu: ["December 20-án zajlik."], de: ["Findet am 20. Dezember statt."] },
    image: "/geo-images/romania/ignat-day-pig-slaughter.webp"
  },
  {
    id: "trad-boboteaza", type: "historical", parent: "RO", coords: [26.0, 45.0],
    name: { ro: "Boboteaza", en: "Epiphany", hu: "Vízkereszt", de: "Dreikönigsfest" },
    description: { ro: "Sărbătoare de iarnă cu sfințirea apelor.", en: "Winter holiday with the blessing of the waters.", hu: "Téli ünnep a vizek megszentelésével.", de: "Winterfest mit der Segnung der Gewässer." },
    facts: { ro: ["Sărbătorită pe 6 ianuarie."], en: ["Celebrated on January 6th."], hu: ["Január 6-án ünneplik."], de: ["Wird am 6. Januar gefeiert."] },
    image: "/geo-images/romania/epiphany.webp"
  },
  {
    id: "trad-paparudele", type: "historical", parent: "RO", coords: [25.0, 44.0],
    name: { ro: "Paparudele", en: "Paparuda", hu: "Paparuda (Esőtánc)", de: "Paparuda (Regentanz)" },
    description: { ro: "Ritual arhaic pentru invocarea ploii.", en: "Archaic ritual for invoking rain.", hu: "Archaikus rituálé az eső hívására.", de: "Archaisches Ritual zur Beschwörung von Regen." },
    facts: { ro: ["Practicat în perioade de secetă."], en: ["Practiced during periods of drought."], hu: ["Aszály idején gyakorolják."], de: ["Wird während Dürreperioden praktiziert."] },
    image: "/geo-images/romania/trad-paparudele.webp"
  }
];

// ---------------------------------------------------------------------------
// 10) FAUNĂ (romaniaWildlife)
// ---------------------------------------------------------------------------
export const romaniaWildlife: POI[] = [
  {
    id: "wild-ursul-brun", type: "animal-habitat", parent: "RO-BV", coords: [25.6, 45.6],
    name: { ro: "Ursul Brun", en: "Brown Bear", hu: "Barna medve", de: "Braunbär" },
    description: { ro: "Cea mai mare populație din Europa.", en: "Largest population in Europe.", hu: "A legnagyobb populáció Európában.", de: "Größte Population in Europa." },
    facts: { ro: ["Peste 6000 de exemplare în Carpați."], en: ["Over 6000 individuals in the Carpathians."], hu: ["Több mint 6000 példány a Kárpátokban."], de: ["Über 6000 Exemplare in den Karpaten."] },
    image: "/geo-images/romania/wild-ursul-brun.webp"
  },
  {
    id: "wild-rasul", type: "animal-habitat", parent: "RO-NT", coords: [26.0, 47.0],
    name: { ro: "Râsul (Lynx)", en: "Carpathian Lynx", hu: "Kárpáti hiúz", de: "Karpatenluchs" },
    description: { ro: "Cea mai mare felină sălbatică din Europa.", en: "The largest wild feline in Europe.", hu: "Európa legnagyobb vadmacskája.", de: "Die größte Wildkatze in Europa." },
    facts: { ro: ["Trăiește în păduri dese."], en: ["Lives in dense forests."], hu: ["Sűrű erdőkben él."], de: ["Lebt in dichten Wäldern."] },
    image: "/geo-images/romania/wild-rasul.webp"
  },
  {
    id: "wild-zimbrul", type: "animal-habitat", parent: "RO-NT", coords: [26.2, 47.2],
    name: { ro: "Zimbrul European", en: "European Bison", hu: "Európai bölény", de: "Wisent" },
    description: { ro: "Cel mai mare mamifer terestru din Europa, reintrodus în natură.", en: "The largest land mammal in Europe, reintroduced.", hu: "Európa legnagyobb szárazföldi emlőse, visszatelepítve.", de: "Das größte Landsäugetier Europas, wieder eingeführt." },
    facts: { ro: ["Prezent în rezervații precum Vânători-Neamț."], en: ["Present in reserves like Vânători-Neamț."], hu: ["Vânători-Neamț rezervátumában él."], de: ["Präsent im Reservat Vânători-Neamț."] },
    image: "/geo-images/romania/wild-zimbrul.webp"
  },
  {
    id: "wild-vidra", type: "animal-habitat", parent: "RO-TL", coords: [29.0, 45.0],
    name: { ro: "Vidra", en: "Eurasian Otter", hu: "Vidra", de: "Fischotter" },
    description: { ro: "Mamifer acvatic întâlnit în Delta Dunării și râuri.", en: "Aquatic mammal found in the Danube Delta and rivers.", hu: "A Duna-deltában és a folyókban élő vízi emlős.", de: "Wassersäugetier, das im Donaudelta und in Flüssen vorkommt." },
    facts: { ro: ["Este un indicator al calității apei."], en: ["It is an indicator of water quality."], hu: ["A vízminőség indikátora."], de: ["Es ist ein Indikator für die Wasserqualität."] },
    image: "/geo-images/romania/eurasian-otter.webp"
  },
  {
    id: "wild-pelicanul", type: "animal-habitat", parent: "RO-TL", coords: [29.4, 44.9],
    name: { ro: "Pelicanul", en: "Pelican", hu: "Pelikán", de: "Pelikan" },
    description: { ro: "Delta Dunării găzduiește cele mai mari colonii de pelicani.", en: "The Danube Delta hosts the largest colonies of pelicans.", hu: "A Duna-delta a legnagyobb pelikánkolóniáknak ad otthont.", de: "Das Donaudelta beherbergt die größten Pelikankolonien." },
    facts: { ro: ["Pelicanul comun și creț sunt prezenți."], en: ["Great white and Dalmatian pelicans are present."], hu: ["Rózsás és borzas gödény egyaránt jelen van."], de: ["Rosapelikan und Krauskopfpelikan sind vertreten."] },
    image: ""
  },
  {
    id: "wild-capra-neagra", type: "animal-habitat", parent: "RO-SB", coords: [24.6, 45.6],
    name: { ro: "Capra Neagră", en: "Chamois", hu: "Zerge", de: "Gämse" },
    description: { ro: "Se găsește pe crestele stâncoase ale Carpaților.", en: "Found on the rocky ridges of the Carpathians.", hu: "A Kárpátok sziklás gerincein található.", de: "Zu finden auf den felsigen Kämmen der Karpaten." },
    facts: { ro: ["Adaptat la mediul alpin."], en: ["Adapted to the alpine environment."], hu: ["Alpesi környezethez alkalmazkodott."], de: ["An die alpine Umgebung angepasst."] },
    image: "/geo-images/romania/wild-capra-neagra.webp"
  },
  {
    id: "wild-sturionul", type: "animal-habitat", parent: "RO-TL", coords: [29.6, 45.1],
    name: { ro: "Sturionii", en: "Sturgeons", hu: "Tokhalak", de: "Störe" },
    description: { ro: "Pești preistorici care migrează din Marea Neagră în Dunăre.", en: "Prehistoric fish that migrate from the Black Sea to the Danube.", hu: "Őskori halak, amelyek a Fekete-tengerből a Dunába vándorolnak.", de: "Prähistorische Fische, die vom Schwarzen Meer in die Donau wandern." },
    facts: { ro: ["Produc faimosul caviar."], en: ["Produce the famous caviar."], hu: ["A híres kaviárt adják."], de: ["Produzieren den berühmten Kaviar."] },
    image: ""
  },
  {
    id: "wild-marmota", type: "animal-habitat", parent: "RO-BV", coords: [24.7, 45.6],
    name: { ro: "Marmota", en: "Marmot", hu: "Marmota", de: "Murmeltier" },
    description: { ro: "Rozător specific zonelor alpine din Făgăraș și Retezat.", en: "Rodent specific to the alpine areas of Făgăraș and Retezat.", hu: "A Fogarasi-havasok és a Retyezát alpesi övezetének jellemző rágcsálója.", de: "Nagetier der alpinen Zonen von Făgăraș und Retezat." },
    facts: { ro: ["Hibernează în timpul iernii."], en: ["Hibernates during winter."], hu: ["Télen téli álmot alszik."], de: ["Hält Winterschlaf."] },
    image: "/geo-images/romania/wild-marmota.webp"
  },
  {
    id: "wild-cocosul-de-munte", type: "animal-habitat", parent: "RO-SV", coords: [25.5, 47.4],
    name: { ro: "Cocoșul de Munte", en: "Western Capercaillie", hu: "Siketfajd", de: "Auerhuhn" },
    description: { ro: "Pasăre mare, specifică pădurilor de conifere.", en: "Large bird, specific to coniferous forests.", hu: "Nagytestű madár, tűlevelű erdőkben él.", de: "Großer Vogel, heimisch in Nadelwäldern." },
    facts: { ro: ["Renumit pentru dansul nupțial spectaculos."], en: ["Famous for its spectacular mating dance."], hu: ["Látványos násztáncáról híres."], de: ["Berühmt für seinen spektakulären Balztanz."] },
    image: ""
  },
  {
    id: "wild-lupul", type: "animal-habitat", parent: "RO-HR", coords: [25.8, 46.5],
    name: { ro: "Lupul Carpatin", en: "Carpathian Wolf", hu: "Kárpáti farkas", de: "Karpatenwolf" },
    description: { ro: "România găzduiește una dintre cele mai mari populații de lupi din Europa.", en: "Romania hosts one of the largest wolf populations in Europe.", hu: "Romániában él Európa egyik legnagyobb farkaspopulációja.", de: "Rumänien beherbergt eine der größten Wolfspopulationen Europas." },
    facts: { ro: ["Trăiesc în haite bine organizate."], en: ["They live in well-organized packs."], hu: ["Jól szervezett falkákban élnek."], de: ["Sie leben in gut organisierten Rudeln."] },
    image: ""
  }
];

// ---------------------------------------------------------------------------
// 11) FOLCLOR ȘI ZONE ETNOGRAFICE (romaniaFolk)
// ---------------------------------------------------------------------------
export const romaniaFolk: POI[] = [
  {
    id: "folk-maramures", type: "region", parent: "RO-MM", coords: [24.0, 47.8],
    name: { ro: "Țara Maramureșului", en: "Maramureș Region", hu: "Máramaros vidék", de: "Region Maramureș" },
    description: { ro: "Cunoscută pentru bisericile de lemn și portul tradițional.", en: "Known for its wooden churches and traditional attire.", hu: "Fatemplomairól és hagyományos viseletéről ismert.", de: "Bekannt für seine Holzkirchen und traditionelle Kleidung." },
    facts: { ro: ["Porțile de lemn sunt un simbol."], en: ["Wooden gates are a symbol."], hu: ["A fakapuk szimbólumok."], de: ["Holztore sind ein Symbol."] },
    image: ""
  },
  {
    id: "folk-bucovina", type: "region", parent: "RO-SV", coords: [25.5, 47.5],
    name: { ro: "Bucovina", en: "Bukovina", hu: "Bukovina", de: "Bukowina" },
    description: { ro: "Zonă faimoasă pentru mănăstirile pictate și încondeierea ouălor.", en: "Famous area for painted monasteries and egg painting.", hu: "A festett kolostorokról és a tojásírásról híres vidék.", de: "Bekannt für die bemalten Klöster und das Bemalen von Eiern." },
    facts: { ro: ["Ceramica de Marginea este renumită."], en: ["Marginea ceramics are renowned."], hu: ["A margineai kerámia híres."], de: ["Marginea-Keramik ist berühmt."] },
    image: ""
  },
  {
    id: "folk-tara-motilor", type: "region", parent: "RO-AB", coords: [23.0, 46.4],
    name: { ro: "Țara Moților", en: "Țara Moților (Land of the Moți)", hu: "Mócvidék", de: "Motzenland" },
    description: { ro: "Zonă etnografică din Munții Apuseni, unde trăiesc moții.", en: "Ethnographic area in the Apuseni Mountains, where the Moți live.", hu: "Néprajzi vidék az Erdélyi-szigethegységben, a mócok hazája.", de: "Ethnographisches Gebiet im Apuseni-Gebirge, wo die Motzen leben." },
    facts: { ro: ["Meșteșugul lemnului este specific."], en: ["Woodcrafting is specific here."], hu: ["A faművesség jellemző itt."], de: ["Die Holzkunst ist hier spezifisch."] },
    image: ""
  },
  {
    id: "folk-oltenia", type: "region", parent: "RO-GJ", coords: [23.5, 44.8],
    name: { ro: "Oltenia Tradițională", en: "Traditional Oltenia", hu: "Hagyományos Olténia", de: "Traditionelles Oltenien" },
    description: { ro: "Cunoscută pentru covoarele oltenești și ceramica de Horezu.", en: "Known for Oltenian carpets and Horezu ceramics.", hu: "Az olténiai szőnyegekről és a horezui kerámiáról ismert.", de: "Bekannt für oltenische Teppiche und Horezu-Keramik." },
    facts: { ro: ["Ceramica de Horezu este în patrimoniul UNESCO."], en: ["Horezu ceramics are in UNESCO heritage."], hu: ["A horezui kerámia UNESCO örökség."], de: ["Horezu-Keramik gehört zum UNESCO-Kulturerbe."] },
    image: ""
  },
  {
    id: "folk-tara-oasului", type: "region", parent: "RO-SM", coords: [23.3, 47.9],
    name: { ro: "Țara Oașului", en: "Oaș Country", hu: "Avasság (Avas)", de: "Oascher Land" },
    description: { ro: "Regiune faimoasă pentru portul colorat și muzica tradițională.", en: "Region famous for colorful costumes and traditional music.", hu: "A színes viseletről és a hagyományos zenéről híres vidék.", de: "Region berühmt für bunte Trachten und traditionelle Musik." },
    facts: { ro: ["Nuntile oșenești sunt spectaculoase."], en: ["Oaș weddings are spectacular."], hu: ["Az avasi esküvők látványosak."], de: ["Oascher Hochzeiten sind spektakulär."] },
    image: "/geo-images/romania/folk-tara-oasului.webp"
  },
  {
    id: "folk-dobrogea", type: "region", parent: "RO-TL", coords: [28.5, 44.8],
    name: { ro: "Tradiții Dobrogene", en: "Dobruja Traditions", hu: "Dobrudzsai hagyományok", de: "Dobrudscha Traditionen" },
    description: { ro: "Mix cultural unic între români, turci, tătari și lipoveni.", en: "Unique cultural mix between Romanians, Turks, Tatars, and Lipovans.", hu: "Egyedülálló kulturális keverék románok, törökök, tatárok és lipovánok között.", de: "Einzigartige kulturelle Mischung aus Rumänen, Türken, Tataren und Lippowanern." },
    facts: { ro: ["Gastronomia include pește și plăcinte."], en: ["Gastronomy includes fish and pies."], hu: ["A gasztronómia halat és lepényt tartalmaz."], de: ["Gastronomie umfasst Fisch und Pasteten."] },
    image: "/geo-images/romania/folk-dobrogea.webp"
  },
  {
    id: "folk-transilvania-saseasca", type: "region", parent: "RO-SB", coords: [24.5, 46.0],
    name: { ro: "Transilvania Săsească", en: "Saxon Transylvania", hu: "Szász Erdély", de: "Siebenbürgen (sächsisch)" },
    description: { ro: "Zonă marcată de satele cu biserici fortificate construite de sași.", en: "Area marked by villages with fortified churches built by Saxons.", hu: "A szászok által épített erődtemplomos falvakkal jellemezhető vidék.", de: "Gegend, die von Dörfern mit von Sachsen erbauten Kirchenburgen geprägt ist." },
    facts: { ro: ["Multe biserici fortificate sunt UNESCO."], en: ["Many fortified churches are UNESCO."], hu: ["Sok erődtemplom UNESCO örökség."], de: ["Viele Kirchenburgen sind UNESCO."] },
    image: ""
  },
  {
    id: "folk-tara-fagarasului", type: "region", parent: "RO-BV", coords: [24.8, 45.8],
    name: { ro: "Țara Făgărașului", en: "Făgăraș Country", hu: "Fogarasföld", de: "Fogarascher Land" },
    description: { ro: "Regiune istorică bogată în tradiții transilvănene.", en: "Historical region rich in Transylvanian traditions.", hu: "Erdélyi hagyományokban gazdag történelmi régió.", de: "Historische Region reich an siebenbürgischen Traditionen." },
    facts: { ro: ["Faimoasă pentru cetatea Făgăraș."], en: ["Famous for Făgăraș Fortress."], hu: ["A fogarasi várról híres."], de: ["Berühmt für die Festung Fogarasch."] },
    image: ""
  },
  {
    id: "folk-marginimea-sibiului", type: "region", parent: "RO-SB", coords: [23.9, 45.7],
    name: { ro: "Mărginimea Sibiului", en: "Mărginimea Sibiului", hu: "Szeben-hegyalja", de: "Mărginimea Sibiului" },
    description: { ro: "Zonă etnografică pastorală din apropierea Sibiului.", en: "Pastoral ethnographic area near Sibiu.", hu: "Pásztorkodó néprajzi vidék Nagyszeben közelében.", de: "Pastorales ethnographisches Gebiet in der Nähe von Sibiu." },
    facts: { ro: ["Cunoscută pentru brânza de oaie."], en: ["Known for sheep cheese."], hu: ["Juhtúrójáról ismert."], de: ["Bekannt für Schafskäse."] },
    image: ""
  }
];

// ---------------------------------------------------------------------------
// 12) ÖSSZES POI EGYBEFŰZVE
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// EXTRA POIS FOR MISSING COUNTIES
// ---------------------------------------------------------------------------
export const romaniaExtraPois: POI[] = [
  // ARAD (RO-AR)
  {
    id: "ro-poi-moneasa", type: "landmark", parent: "RO-AR", coords: [22.2583, 46.4583],
    name: { de: "Moneasa", hu: "Menyháza", ro: "Stațiunea Moneasa", en: "Moneasa Resort" },
    description: { de: "Bekannter Kurort.", hu: "Híres gyógyüdülőhely.", ro: "Stațiune balneoclimaterică cunoscută.", en: "Well-known spa resort." },
    facts: { de: [], hu: [], ro: ["Moneasa (în maghiară Menyháza) este satul de reședință al comunei cu același nume din județul Arad, Crișana, România."], en: ["Moneasa (Hungarian: Menyháza) is a commune in Arad County, Romania.", "Its administrative surface stretches over 6,824 hectares (16,860 acres) and it is composed of two villages, Moneasa and Rănușa (Kisróna)."] },
    image: ""
  },
  {
    id: "ro-poi-cetatea-siria", type: "historical", parent: "RO-AR", coords: [21.6333, 46.2667],
    name: { de: "Burg Șiria", hu: "Világosvári vár", ro: "Cetatea Șiria", en: "Șiria Fortress" },
    description: { de: "Ruinen einer mittelalterlichen Burg.", hu: "Egy középkori vár romjai.", ro: "Ruinele unei cetăți medievale.", en: "Ruins of a medieval fortress." },
    facts: { de: ["Diese Liste führt (noch unvollständig) Burgen, Festungen, Kirchenburgen, Schlösser und Wehrklöster in Rumänien auf.", "Marienburg, Feldioara (Marienberg), Kreis Brașov Zitadelle Alba Carolina, Alba Iulia (Karlsburg), Kreis Alba Alexandru-Ghica-Palast, Moara Vlăsiei-Căciulați, Kreis Ilfov Festung Arad, Arad, Kreis Arad Schloss Bánffy, Bonțida (Bruck), Kreis Cluj Burg Bethlen-Haller, Cetatea de Baltă Schloss Bran, Bran (Törzburg), Kreis Brașov Brukenthal’sche Sommerresidenz, Avrig (Freck), Kreis Sibiu Schloss Csernovics, Macea (Matscha), Kreis Arad Cetatea Tricule, Svinița, Kreis Mehedinți am Ufer der Donau Chindia-Turm, Târgoviște, Kreis Dâmbovița Burgruine Colț, Râu de Mori (Mühlendorf), Kreis Hunedoara Schloss Cotroceni, Bukarest Burgruine Deva, Deva, Kreis Hunedoara Burg Făgăraș, Făgăraș (Fogarasch), Kreis Brașov Fürstenhof Târgoviște (Curtea Domnească), Târgoviște, Kreis Dâmbovița Schloss Gilău, Gilău (Gela), Kreis Cluj Burg Hunedoara, Hunedoara (Eisenmarkt), Kreis Hunedoara Schloss Hunyadi, Timișoara (Temeswar), Kreis Timiș Burg Kelling (Festung Câlnic), Câlnic (dt.", "Kelling) Schloss Kendeffy, Sântămăria-Orlea (Liebfrauen), Kreis Hunedoara Burg Lazar (Castelul Lazar), Lăzarea, Kreis Harghita Burg Mălăieşti (auch Burg Saracinesti, rumänisch Cetatea Mălăieşti (Saracinesti)), Sălașu de Sus-Mălăieşti Burg Mikó (Castelul Mikó), Miercurea Ciuc, Kreis Harghita Schloss Mogoșoaia, Bukarest Burg Neamț, Târgu Neamț, Kreis Neamț Schloss Peleș, Sinaia, Kreis Prahova Schloss Pelișor, Sinaia, Kreis Prahova Burg Poenari, Arefu, Kreis Argeș Bauernburg Râșnov, Râșnov (Rosenau), Kreis Brașov Burg Rupea, Rupea (Reps), Kreis Brașov Burgruine Saschiz, Saschiz (Keisd), Kreis Mureș Schloss Săvârșin, Săvârșin (Soborschin), Kreis Arad Burgruine Schwarzburg (Cetatea Neagra; auch: castrum Feketewholum), Codlea (Zeiden), auf dem Zeidner Berg Burg Suceava, Suceava (Suczawa), Kreis Suceava Burg Sighișoara (lat."], hu: ["Szucsáva, régi magyar nevén Szőcsvásár(románul Suceava, lengyelül Suczawa, ukránul Сучава, jiddisül שאָץ) nagyváros Romániában, Suceava megye központja.", "1388 és 1565 között Szucsáva volt az első központosított moldvai állam fővárosa."], ro: ["Cetatea Șiria este o cetate monumente istoric (cod LMI AR-II-a-A-00650), datând din secolul al XIII-lea, zidită pe Dealul Cetății (496 m), de unde domină regiunea din jurul localității Șiria."], en: ["This is a list of castles and fortresses declared historic monuments by Romania's Ministry of Culture."] },
    image: ""
  },

  // BACĂU (RO-BC)
  {
    id: "ro-poi-salina-targu-ocna", type: "landmark", parent: "RO-BC", coords: [26.5986, 46.2731],
    name: { de: "Salzbergwerk Târgu Ocna", hu: "Aknavásár fémbánya", ro: "Salina Târgu Ocna", en: "Târgu Ocna Salt Mine" },
    description: { de: "Touristisches Salzbergwerk.", hu: "Turisztikai sóbánya.", ro: "Salină turistică.", en: "Tourist salt mine." },
    facts: { de: ["Târgu Ocna (deutsch veraltet Stadt Okna, ungarisch Aknavásár) ist eine Stadt im Kreis Bacău in Rumänien."], hu: ["Azoknál az országoknál, ahol két oszlopban vannak a latin nevek, az első oszlop a középkori és újkori latin nevet tartalmazza.", "A második oszlopban az ókori latin név látható, amennyiben az eltér az újkoritól, illetve ha a település csak az ókorban létezett."], ro: ["Salina Târgu Ocna este o exploatare minieră a sării aflată în stațiunea balneoclimaterică Târgu Ocna din Județul Bacău, Moldova, România.", "Este a treia cea mai mare salină și una din cele mai vechi din România, ce aparține Societății Naționale a Sării „Salrom“ S.A.", "Societatea deține și cea mai mare bază de tratament din țară, amplasată în mina Trotuș la 240 m adâncime, ce oferă condiții pentru relaxare, mișcare și tratarea afecțiunilor respiratorii."], en: ["Târgu Ocna (Romanian pronunciation: [ˌtɨrɡu ˈokna]; Hungarian: Aknavásár) is a town in Bacău County, Romania.", "It administers two villages, Poieni and Vâlcele.", "The town is situated on the left bank of the Trotuș River, an affluent of the Siret, and on a branch railway which crosses the Ghimeș Pass from Moldavia into Transylvania."] },
    image: ""
  },
  {
    id: "ro-poi-slanic-moldova", type: "landmark", parent: "RO-BC", coords: [26.4386, 46.2069],
    name: { de: "Slănic Moldova", hu: "Szlanikfürdő", ro: "Slănic Moldova", en: "Slănic Moldova" },
    description: { de: "Kurort mit Mineralquellen.", hu: "Gyógyüdülőhely ásványvízforrásokkal.", ro: "Stațiune cu izvoare minerale.", en: "Resort with mineral springs." },
    facts: { de: ["Slănic-Moldova (deutsch Moldenmarkt, ungarisch Szlanikfürdő) ist eine Kleinstadt im Kreis Bacău in der Region Westmoldau in Rumänien.", "Die Kleinstadt ist auch als Kurort mit kräftigen salinischen Heilquellen bei Târgu Ocna bekannt.", "Slănic ist auch der Name einer ehemals bedeutenden Staatssaline in der Walachei."], hu: ["Szlanikfürdő (románul Slănic-Moldova) város Romániában, Moldvában, Bákó megyében.", "A települést „Moldova gyöngyének” is nevezik.", "A lakosságban a moldvai csángók vannak többségben, de mára már nagyon kevesen beszélnek magyarul."], ro: [], en: [] },
    image: ""
  },

  // BIHOR (RO-BH)
  {
    id: "ro-poi-pestera-ursilor", type: "landmark", parent: "RO-BH", coords: [22.5683, 46.5531],
    name: { de: "Bärenhöhle", hu: "Medve-barlang", ro: "Peștera Urșilor", en: "Bears' Cave" },
    description: { de: "Höhle mit Höhlenbärenfossilien.", hu: "Barlang barlangi medve fosszíliákkal.", ro: "Peșteră cu fosile de urși de peșteră.", en: "Cave with cave bear fossils." },
    facts: { de: ["Peștera Urșilor (deutsch Bärenhöhle) ist eine der bekanntesten Höhlen in Rumänien und liegt im Kreischgebiet, im Westen von Siebenbürgen, ungefähr 75 Kilometer südöstlich der Kreisstadt Oradea im Kreis Bihor in der Nähe der Gemeinde Pietroasa, Ortsteil Chișcău."], hu: ["Magyarország Medve-barlang, bátonyterenyei barlang Medve-barlang, nagybörzsönyi barlang Medve-barlang, váci barlang Románia Medve-barlang, homoródalmási barlang Medve-barlang (Peştera Urşilor), kiskohi barlang Medve-barlang (Grota Urșilor), menyházi barlang Szlovákia Medve-barlang, (Medvedia jaskyňa), a Magas-Tátrában, a Jávor-völgyben Hasonló néven Medvehagymás-barlang Balatonedericsen Medvekoponyás-barlang a Parasznyán található Kő-lyuk másik elnevezése Medve-kői-sziklaüreg Bakonyszücsön Medvetorok-barlang Boldogkőújfalun Medvetükrös-barlang Szilvásváradon Nagymedve-barlang Miskolcon"], ro: ["Peștera Urșilor a fost descoperită în 1975, cu ocazia unei dinamitări executate la cariera de marmură din zonă.", "Este unul dintre principalele obiective turistice ale Munților Apuseni, ea aflându-se în județul Bihor, în imediata apropiere a localității Chișcău, comuna Pietroasa, la o altitudine de 482 m."], en: [] },
    image: ""
  },
  {
    id: "ro-poi-baile-felix", type: "landmark", parent: "RO-BH", coords: [21.9833, 46.9833],
    name: { de: "Thermalbad Felix", hu: "Félixfürdő", ro: "Băile Felix", en: "Băile Felix" },
    description: { de: "Größtes Thermalbad in Rumänien.", hu: "Románia legnagyobb termálfürdője.", ro: "Cea mai mare stațiune balneară din România.", en: "Largest thermal spa in Romania." },
    facts: { de: ["Băile Felix (deutsch Bad Felix, ungarisch Félixfürdő) ist ein Kurort mit Thermalquellen von internationalem Ruf im Kreis Bihor im westlichen Rumänien.", "Die Heilquellen werden seit etwa tausend Jahren genutzt.", "Die Wassertemperatur beträgt 20 bis 49 °C."], hu: [], ro: ["Băile Felix (în maghiară Félixfürdő) este un sat în comuna Sânmartin din județul Bihor, Crișana, România.", "Băile Felix se află la ca.", "10 km sud de municipiul Oradea."], en: ["Băile Felix (Hungarian: Félixfürdő) is a thermal spa resort near the commune of Sânmartin in Bihor County, Transylvania, Romania.", "Băile Felix is at a close distance to Oradea, a major city in western Romania."] },
    image: ""
  },

  // BISTRIȚA-NĂSĂUD (RO-BN)
  {
    id: "ro-poi-bistrita", type: "city", parent: "RO-BN", coords: [24.5, 47.1333],
    name: { de: "Bistritz", hu: "Beszterce", ro: "Bistrița", en: "Bistrița" },
    description: { de: "Historische Stadt in Siebenbürgen.", hu: "Történelmi város Erdélyben.", ro: "Oraș istoric în Transilvania.", en: "Historic city in Transylvania." },
    facts: { de: ["Bistrița (, deutsch Bistritz, siebenbürgisch-sächsisch Nīzn [Nösen] oder Bistriz, ungarisch Beszterce [ˈbɛstɛrt͜sɛ]) ist eine Stadt im Nordosten von Siebenbürgen im Kreis Bistrița-Năsăud in Rumänien.", "Bistrița ist Zentrum des Nösnerlandes.", "Durch die Stadt fließt der gleichnamige Fluss Bistrița."], hu: [], ro: ["Bistrița (în germană Bistritz, formă arhaică Nösen; în maghiară Beszterce; în dialectul săsesc Nîsner-Bistritz, Nîzn, Bästerts, Bîsterts, Bistriz) este municipiul de reședință al județului Bistrița-Năsăud, Transilvania, România, format din localitățile componente Bistrița (reședința), Ghinda, Sărata, Sigmir, Slătinița, Unirea și Viișoara.", "Este și cel mai mare oraș din acest județ și al 25-lea din țară, cu o populație de 78,877 locuitori (2021).", "Ocupă o suprafață de 14.547 ha."], en: ["Bistrița (Romanian pronunciation: [ˈbistritsa] ; German: Bistritz, archaic Nösen; Transylvanian Saxon: Bästerts; Hungarian: Beszterce) is the capital city of Bistrița-Năsăud County, in northern Transylvania, Romania.", "It is situated on the Bistrița River.", "The city has a population of 78,877 inhabitants as of 2021 and administers six villages: Ghinda (Windau; Vinda), Sărata (Salz; Sófalva), Sigmir (Schönbirk; Szépnyír), Slătinița (Pintak; Pinták), Unirea (until 1950 Aldorf; Wallendorf; Aldorf) and Viișoara (Heidendorf; Besenyő)."] },
    image: ""
  },
  {
    id: "ro-poi-parcul-rodnei", type: "landmark", parent: "RO-BN", coords: [24.8, 47.5333],
    name: { de: "Nationalpark Rodna-Gebirge", hu: "Radnai-havasok Nemzeti Park", ro: "Parcul Național Munții Rodnei", en: "Rodna Mountains National Park" },
    description: { de: "Höchstes Gebirge der Ostkarpaten.", hu: "A Keleti-Kárpátok legmagasabb hegysége.", ro: "Cei mai înalți munți din Carpații Orientali.", en: "Highest mountains of the Eastern Carpathians." },
    facts: { de: ["i4i6 Der Nationalpark Rodna-Gebirge (rumänisch Parcul Național Munții Rodnei) liegt im Rodna-Gebirge im Norden Rumäniens.", "Er erstreckt sich auf einem Areal von 46.399 Hektar in den Kreisen Maramureș und Bistrița-Năsăud.", "Der 1990 ausgewiesenen Park umfasst eine Fläche von 472 km² und hat die WDPA ID 11171."], hu: ["Ez a szócikk Románia turizmusát tárgyalja, azon belül az ország turisztikai felosztását, a legfontosabb és legjellegzetesebb turisztikai látnivalókat, a természetjárás, üdülő- és gyógyturizmus fő jellemzőit, valamint a turistáknak nyújtott szolgáltatások, a szállás, étkezés és közlekedés adottságait."], ro: ["Parcul Național Rodna este o arie protejată de interes național ce corespunde categoriei a II-a IUCN (parc național) situată în nordul României, pe teritoriile județelor Bistrița-Năsăud și Maramureș, în zona centrală a Munților Rodnei.", "Parcul Național Munții Rodnei este desemnat internațional ca Rezervație a biosferei de către Comitetul UNESCO, în cadrul programului \"Omul și Biosfera\"."], en: ["The Rodna Mountains National Park (Romanian: Parcul Național Munții Rodnei) is a protected area (national park category II IUCN) situated in Romania, in the administrative territory of counties Bistrița-Năsăud, Maramureș, and Suceava."] },
    image: ""
  },
  {
    id: "ro-poi-lacul-colibita", type: "lake", parent: "RO-BN", coords: [24.8833, 47.1667],
    name: { de: "Colibița-See", hu: "Kolibica-tó", ro: "Lacul Colibița", en: "Colibița Lake" },
    description: { de: "Stausee mit sauberer Bergluft.", hu: "Víztározó tiszta hegyi levegővel.", ro: "Lac de acumulare cu aer montan curat.", en: "Reservoir with clean mountain air." },
    facts: { de: [], hu: [], ro: ["Lacul Colibița este un lac artificial de acumulare din Munții Călimani, județul Bistrița-Năsăud.", "Lacul a fost creat prin construirea barajului Colibița pe cursul râului Bistrița, baraj amenajat în perioada 1977 - 1991 cu scop hidroenergetic, de alimentarea cu apă a localităților din aval, a industriei, irigații și regularizare a debitului apelor râului Bistrița.", "Lacul Colibița are suprafața de 270 ha, lungimea de 13 km și volumul de 65 mil m3 fiind situat la o altitudine de 900 m."], en: ["Bistrița (Romanian pronunciation: [ˈbistritsa] ; German: Bistritz, archaic Nösen; Transylvanian Saxon: Bästerts; Hungarian: Beszterce) is the capital city of Bistrița-Năsăud County, in northern Transylvania, Romania.", "It is situated on the Bistrița River.", "The city has a population of 78,877 inhabitants as of 2021 and administers six villages: Ghinda (Windau; Vinda), Sărata (Salz; Sófalva), Sigmir (Schönbirk; Szépnyír), Slătinița (Pintak; Pinták), Unirea (until 1950 Aldorf; Wallendorf; Aldorf) and Viișoara (Heidendorf; Besenyő)."] },
    image: ""
  },

  // BOTOȘANI (RO-BT)
  {
    id: "ro-poi-botosani", type: "city", parent: "RO-BT", coords: [26.6664, 47.7408],
    name: { de: "Botoschan", hu: "Botosán", ro: "Botoșani", en: "Botoșani" },
    description: { de: "Kulturstadt im Norden der Moldau.", hu: "Kulturális város Észak-Moldvában.", ro: "Oraș cultural din nordul Moldovei.", en: "Cultural city in northern Moldavia." },
    facts: { de: ["Botoșani ([] deutsch Botoschan oder auch Bottuschan) ist eine Stadt im Nordosten von Rumänien und liegt im gleichnamigen Kreis Botoșani.", "Die Stadt ist umgeben von den Ostkarpaten, der Republik Moldau und der Ukraine."], hu: [], ro: ["Botoșani este municipiul de reședință al județului cu același nume, Moldova, România.", "Se află în Câmpia Jijiei, la o altitudine de 170 m deasupra nivelului mării.", "Are o suprafață de 41,36 km²."], en: ["Botoșani (Romanian pronunciation: [botoˈʃanʲ] ) is the capital city of Botoșani County, in the northern part of Moldavia, Romania.", "Today, it is best known as the birthplace of many celebrated Romanians, including Mihai Eminescu, Nicolae Iorga and Grigore Antipa."] },
    image: ""
  },
  {
    id: "ro-poi-casa-eminescu", type: "historical", parent: "RO-BT", coords: [26.55, 47.7667],
    name: { de: "Eminescu Gedenkhaus", hu: "Eminescu Emlékház", ro: "Casa Memorială Mihai Eminescu", en: "Mihai Eminescu Memorial House" },
    description: { de: "Geburtshaus des Nationaldichters.", hu: "A nemzeti költő szülőháza.", ro: "Casa unde s-a născut poetul național.", en: "Birthplace of the national poet." },
    facts: { de: ["Dies ist eine Liste von Literaturmuseen und literarischen Gedenkstätten, sortiert nach Ländern und Regionen.", "Siehe auch: Liste von Schriftstellermuseen, sortiert nach den Nachnamen der Schriftsteller."], hu: ["Veronica Micle, eredeti nevén Ana Câmpeanu (Naszód, 1850.", "április 22.", "– Văratec, 1889."], ro: ["Casa memorială Mihai Eminescu de la Ipotești este un muzeu memorial amenajat în casa în care a trăit poetul Mihai Eminescu (1850-1889) în satul Ipotești din județul Botoșani.", "Memorialul Ipotești - Centrul Național de Studii „Mihai Eminescu” se află pe Lista Monumentelor Istorice din județul Botoșani din anul 2004, având codul BT-IV-a-B-02047, fiind format din două obiective: Casa memorială \"Mihai Eminescu\" - datând din sec.", "al XIX-lea și având codul BT-IV-m-B-02047.01 Mormintele familiei Eminescu - datând din sec."], en: ["Mihai Eminescu (Romanian pronunciation: [miˈhaj emiˈnesku] ; born Mihail Eminovici; 15 January [O.S.", "3 January] 1850 – 15 June [O.S.", "3 June] 1889) was a Romanian Romantic poet, novelist, and journalist from Moldavia, generally regarded as the most famous and influential Romanian poet."] },
    image: "/geo-images/romania/ro-poi-casa-eminescu.webp"
  },
  {
    id: "ro-poi-lacul-stanca", type: "lake", parent: "RO-BT", coords: [27.2167, 47.8167],
    name: { de: "Stânca-Costești See", hu: "Stânca-Costești-tó", ro: "Lacul Stânca-Costești", en: "Stânca-Costești Lake" },
    description: { de: "Großer Stausee am Fluss Prut.", hu: "Nagy víztározó a Prut folyón.", ro: "Mare lac de acumulare pe râul Prut.", en: "Large reservoir on the Prut river." },
    facts: { de: ["Der Drum național 24C (rumänisch für „Nationalstraße 24C“, kurz DN24C) ist eine Hauptstraße in Rumänien."], hu: [], ro: ["Lacul Stânca Costești este o arie protejată (arie de protecție specială avifaunistică — SPA) din România întinsă pe o suprafață de 2.192,8 ha, integral pe uscat."], en: ["The Stânca–Costești Dam (Romanian: Barajul Stânca–Costești) is a dam on the Prut River and a checkpoint between Moldova and Romania.", "The dam is located between Costești (Moldova) and Stânca (Romania)."] },
    image: ""
  },

  // BRĂILA (RO-BR)
  {
    id: "ro-poi-braila", type: "city", parent: "RO-BR", coords: [27.9667, 45.2667],
    name: { de: "Mühlbach", hu: "Brăila", ro: "Brăila", en: "Brăila" },
    description: { de: "Wichtige Hafenstadt an der Donau.", hu: "Fontos dunai kikötőváros.", ro: "Important port la Dunăre.", en: "Important Danube port city." },
    facts: { de: ["Brăila ([brəˈila]; ) ist die Kreishauptstadt des gleichnamigen Kreises und Sitz der Planungsregion Südost in Rumänien."], hu: ["Brăila (magyarul: Brajla, régi nevén: Ibrail) város Románia délkeleti részén, a Duna bal partján, Brăila megye székhelye.", "Lakossága 154 686 fő (2021."], ro: ["Brăila (în bulgară Браила, în turcă Ibrail) este municipiul de reședință al județului cu același nume, Muntenia, România.", "Conform recensământului din 2021, publicat de Institutul Național de Statistică, populația orașului era de 154.686 de locuitori, orașul fiind al 11-lea cel mai mare centru urban din țară după numărul de locuitori.", "În Brăila se află sediul Agenției de Dezvoltare Regională Sud-Est."], en: ["Brăila (, also US: , Romanian: [brəˈila] ) is a city in Muntenia, eastern Romania, a port on the Danube and the capital of Brăila County.", "The Sud-Est Regional Development Agency is headquartered in the city.", "According to the 2021 Romanian census, Brăila had a population of 154,686 inhabitants, making it the 11th most populous city in Romania and the 9th largest on the Danube."] },
    image: ""
  },
  {
    id: "ro-poi-insula-mica", type: "landmark", parent: "RO-BR", coords: [27.95, 44.8833],
    name: { de: "Naturpark Kleine Brăila-Insel", hu: "Kis-Brăila Sziget Natúrpark", ro: "Parcul Natural Balta Mică a Brăilei", en: "Small Brăila Island Natural Park" },
    description: { de: "Feuchtgebiet und Naturschutzgebiet.", hu: "Vizes élőhely és természetvédelmi terület.", ro: "Zonă umedă și rezervație naturală.", en: "Wetland and nature reserve." },
    facts: { de: ["Die Große Brăila-Insel (rumänisch Insula Mare a Brăilei oder Balta Brăilei) ist eine rund 710 km² große und 60 km lange Donauinsel in Rumänien."], hu: ["A Brăilai Kissziget Natúrpark (románul Parcul Natural Balta Mică a Brăilei) IUCN V-ös besorolású védett terület Romániában a Duna alsó szakaszán, a Brăilai Nagysziget térségében, Brăila megye területén."], ro: ["Parcul Natural Balta Mică a Brăilei este o arie protejată (zonă umedă) de interes internațional ce corespunde categoriei a V-a (parc natural), situată în Muntenia, pe teritoriul județului Brăila."], en: ["The Great Brăila Island (Romanian: Insula Mare a Brăilei) is an island on the Danube river in the Brăila County, Romania.", "It has on average 57.9 km (36.0 mi) length and 18.6 km (11.6 mi) width, with a total area of 710 km2 (270 sq mi).", "The two river branches which separate it from the mainland are Măcin Branch and Vâlciu Branch."] },
    image: ""
  },
  {
    id: "ro-poi-teatrul-filotti", type: "landmark", parent: "RO-BR", coords: [27.9731, 45.2719],
    name: { de: "Maria Filotti Theater", hu: "Maria Filotti Színház", ro: "Teatrul Maria Filotti", en: "Maria Filotti Theatre" },
    description: { de: "Historisches Theatergebäude.", hu: "Történelmi színházépület.", ro: "Clădire istorică a teatrului.", en: "Historical theater building." },
    facts: { de: [], hu: ["István (Zsibó, 1977.", "–) Jászai Mari-díjas romániai magyar rendező, színházigazgató, művészeti vezető."], ro: ["Teatrul „Maria Filotti”, cunoscut și sub numele vechi ca Teatrul Rally, este o instituție de cultură inaugurată la 1864 în Brăila, România."], en: ["The Maria Filotti is a theatre in Brăila, Romania."] },
    image: ""
  },

  // BUZĂU (RO-BZ)
  {
    id: "ro-poi-focul-viu", type: "landmark", parent: "RO-BZ", coords: [26.5444, 45.5417],
    name: { de: "Lebendiges Feuer", hu: "Élő tűz", ro: "Focul Viu", en: "Living Fire" },
    description: { de: "Erdgasflammen aus dem Boden.", hu: "Földgázlángok a talajból.", ro: "Flăcări de gaze naturale din pământ.", en: "Natural gas flames coming from the ground." },
    facts: { de: ["Negură Bunget ist eine Metal-Band aus Rumänien."], hu: ["Andreiașu de Jos település Romániában, Moldvában, Vrancea megyében."], ro: ["Focul Viu se poate referi la: Focul Viu din Satul Terca Comuna Lopătari, Buzău Focul Viu din Satul Andreiașu de Jos Comuna Andreiașu de Jos, Vrancea Focul Viu de pe Vârful Răiuți din Satul Răiuți Comuna Reghiu, Vrancea Focul Viu din estul dealului Ciolanu situat pe interfluviul de pe dreapta văii Ojasca.", "Peștera Ghețarul de la Focul Viu, una dintre peșterile aflate în Munții Bihorului.", "Focul viu (film) (Firestarter 2: Rekindled)"], en: ["Living Fire is a Brazilian Christian hardcore band, hailing from São Paulo, Brazil, formed in 2006.", "Their first studio album, Jesus Rules, was released in 2012 by Thumper Punk Records.", "The subsequent album, Dead to Sin, was also released by Thumper Punk Records, in 2014."] },
    image: ""
  },
  {
    id: "ro-poi-lacul-vulturilor", type: "lake", parent: "RO-BZ", coords: [26.0969, 45.5033],
    name: { de: "Adlersee", hu: "Sasok tava", ro: "Lacul Vulturilor", en: "Eagles' Lake" },
    description: { de: "Periglazialer See im Siriu-Gebirge.", hu: "Periglaciális tó a Sziryu-hegységben.", ro: "Lac periglaciar în Munții Siriu.", en: "Periglacial lake in the Siriu Mountains." },
    facts: { de: ["Sita Buzăului [ˈsita buˈsəului] (veraltet Sita Buzău ungarisch Szitabodza) ist eine Gemeinde im Kreis Covasna in der Region Siebenbürgen in Rumänien."], hu: ["A Szilon-havas (románul: Masivul Siriu) a Kárpátkanyar, s ezen belül a Keleti-Kárpátok csoportjába tartozó középmagas hegység.", "A hegység a Kárpátok főgerincének alkotórésze, amely délnyugat felé a Tatárhavasban, majd a Csukás-hegységben folytatódik, észak felé pedig a Háromszéki-havasokban, közeli szomszédja a Lóhavas és a főgerincen kívül a Moldva felé eső Pintyillő, mely a legközelebbi nálánál magasabb hegység a maga 1772 méteres csúcsával.", "A hegység területén jelenleg kisebb részben Háromszék ill."], ro: ["Lacul Vulturilor (denumit și Lacul Fără Fund) este un lac periglaciar aflat în Munții Siriului, la o altitudine de 1.420 m, în apropierea localității Gura Siriului din comuna Siriu, județul Buzău, România și se află pe suprafața comunei Chiojdu.", "Adâncimea sa maximă este de 2,5 m."], en: [] },
    image: ""
  },

  // CĂLĂRAȘI (RO-CL)
  {
    id: "ro-poi-calarasi", type: "city", parent: "RO-CL", coords: [27.3333, 44.2],
    name: { de: "Călărași", hu: "Călărași", ro: "Călărași", en: "Călărași" },
    description: { de: "Stadt an der Donau (Borcea-Arm).", hu: "Város a Duna (Borcea-ág) partján.", ro: "Oraș pe malul brațului Borcea al Dunării.", en: "City on the Borcea branch of the Danube." },
    facts: { de: ["Călărași ([kələˈraʃʲ]; ) ist eine Stadt in Rumänien, die Hauptstadt des Kreises Călărași und Sitz der Planungsregion Südrumänien-Mutenia."], hu: ["Călărași délkelet-romániai város a Borceai-Duna-ág partján, Călărași megye székhelye.", "Bulgáriától 12 km-re, Bukaresttől 125 km-re található.", "Lakossága 71 042 fő."], ro: ["Călărași (în trecut, Lichirești și, temporar, Știrbeiu) este municipiul de reședință al județului cu același nume, Muntenia, România.", "Este cel mai mare oraș al județului și unul din cele mai importante municipii din regiunea de dezvoltare Sud.", "Situat în sud-estul României, pe partea stângă a cursului brațului Borcea al Dunării, Călărașiul este cunoscut pentru industria alimentară, industria de PAL melaminat, industria siderurgică, industria de hârtie și industria de prefabricate."], en: ["Călărași (Romanian pronunciation: [kələˈraʃʲ] ; Bulgarian: Кълъраш, romanized: Kŭlŭrash), the capital of Călărași County in the Muntenia region, is situated in south-east Romania, on the banks of the Danube's Borcea branch, at about 12 kilometres (7 miles) from the Bulgarian border and 125 kilometres (78 miles) from Bucharest.", "It is one of six Romanian county seats lying on the river Danube.", "The city is an industrial centre for lumber and paper, food processing, glass manufacturing, textiles, medical equipment production, and heavy industry, the last one represented by the Călărași steel works."] },
    image: "/geo-images/romania/ro-poi-calarasi.webp"
  },
  {
    id: "ro-poi-bratul-borcea", type: "river", parent: "RO-CL", coords: [27.75, 44.25],
    name: { de: "Borcea-Arm", hu: "Borcea-ág", ro: "Brațul Borcea", en: "Borcea Branch" },
    description: { de: "Nebenarm der Donau.", hu: "A Duna mellékága.", ro: "Braț secundar al Dunării.", en: "Secondary branch of the Danube." },
    facts: { de: ["Die Donau ist mit einem mittleren jährlichen Abfluss (MQ) von rund 6855 m³/s und einer Gesamtlänge von 2857 Kilometern nach der Wolga der zweitgrößte und zweitlängste Fluss in Europa.", "Der Strom entwässert weite Teile Mittel- und Südosteuropas.", "Er durchfließt bzw."], hu: ["A Borceai-Duna-ág (románul: Brațul Borcea) a Duna folyam egy mellékága a folyó alsó szakaszán, Romániában, Călărași megye és Ialomița megye közigazgatási területén.", "Călărași felett (mintegy 9 km-re Ostrov felé) ágazik ki bal kéz felé a főágból, ahová mintegy 99 km után, Giurgeninél tér vissza.", "Nevét a partján fekvő Borcea településről kapta."], ro: [], en: ["Borcea is a commune situated in the eastern part of Călărași County, Muntenia, Romania.", "It is one of the most populous communes in the county and it is situated on the west bank of the Borcea branch (a section of the Danube).", "The commune was formed as a result of the administrative reform of 1968 by joining two neighboring villages, Cocargeaua and Pietroiu."] },
    image: ""
  },
  {
    id: "ro-poi-muzeul-dunarii", type: "landmark", parent: "RO-CL", coords: [27.33, 44.195],
    name: { de: "Museum der Unteren Donau", hu: "Alsó-Duna Múzeum", ro: "Muzeul Dunării de Jos", en: "Lower Danube Museum" },
    description: { de: "Museum für Archäologie und Geschichte.", hu: "Régészeti és történelmi múzeum.", ro: "Muzeu de arheologie și istorie.", en: "Museum of archeology and history." },
    facts: { de: ["i3i6 Das Donaudelta (rumänisch Delta Dunării, ukrainisch Дельта Дунаю) befindet sich im Mündungsgebiet der Donau in das Schwarze Meer.", "Das Donaudelta stellt nach dem Wolgadelta das zweitgrößte Delta Europas dar und umfasst ein Gebiet von 5800 km², wovon 72 % mit einer Fläche von 4178 km² unter Naturschutz stehen.", "Diese Fläche liegt zu 82,5 % im rumänischen Teil der Landschaft Dobrudscha sowie zu 17,5 % in der Ukraine."], hu: [], ro: ["Muzeul Istoriei, Culturii și Spiritualității Creștine de la Dunărea de Jos este un muzeu din municipiul Galați găzduit în Palatul Episcopal al Dunării de Jos, deschis publicului în această nouă locație în anul 2014, în urma recâștigării dreptului de proprietate asupra clădirii.", "Clădirea muzeului este declarată monument istoric, având codul GL-II-m-B-03036.", "Anterior, ea a adăpostit Muzeul de Artă Vizuală."], en: ["The Danube Swabians (German: Donauschwaben [ˈdoːnaʊʃvaːbm̩] ) is the ethnic German-speaking population, today largely extinct through emigration, which lived in the Kingdom of Hungary in east-central Europe, especially in the Danube River valley, first in the 12th century, and in greater numbers in the 17th and 18th centuries.", "Most were descended from earlier 18th-century Swabian settlers from Upper Swabia, the Swabian Jura, northern Lake Constance, the upper Danube, the Swabian-Franconian Forest, the Southern Black Forest and the Principality of Fürstenberg, followed by Hessians, Bavarians, Franconians and Lorrainers recruited by Austria to repopulate the area and restore agriculture after the expulsion of the Ottoman Empire.", "They were able to keep their language and religion and initially developed strongly German communities in the region which retained the German language, customs, and folklore."] },
    image: ""
  },

  // CARAȘ-SEVERIN (RO-CS)
  {
    id: "ro-poi-cheile-nerei", type: "landmark", parent: "RO-CS", coords: [21.8333, 44.9333],
    name: { de: "Nera-Klamm Nationalpark", hu: "Néra-szurdok Nemzeti Park", ro: "Parcul Național Cheile Nerei-Beușnița", en: "Cheile Nerei-Beușnița National Park" },
    description: { de: "Schluchten, Wasserfälle und blaue Seen.", hu: "Szurdokok, vízesések és kék tavak.", ro: "Chei, cascade și lacuri albastre.", en: "Gorges, waterfalls, and blue lakes." },
    facts: { de: ["i3i5 Der Nationalpark Cheile Nerei - Beușnița (auch Nationalpark Nera-Klamm - Beușnița, rumänisch Parcul Național Cheile Nerei - Beușnița) ist ein Nationalpark im Anina-Gebirge, Kreis Caraș-Severin, im Südwesten Rumäniens.", "Er erstreckt sich auf einem Areal von 76.062 Hektar und besteht aus einer Karstlandschaft aus Kalkstein auf einer Länge von 22 Kilometern entlang des Neratals mit einer Lagenhöhe zwischen 200 und 1116 Meter an der höchsten Bergspitze, dem Leordis Gipfel."], hu: ["Ez a szócikk Románia turizmusát tárgyalja, azon belül az ország turisztikai felosztását, a legfontosabb és legjellegzetesebb turisztikai látnivalókat, a természetjárás, üdülő- és gyógyturizmus fő jellemzőit, valamint a turistáknak nyújtott szolgáltatások, a szállás, étkezés és közlekedés adottságait."], ro: [], en: [] },
    image: ""
  },
  {
    id: "ro-poi-baile-herculane", type: "city", parent: "RO-CS", coords: [22.4131, 44.88],
    name: { de: "Herkulesbad", hu: "Herkulesfürdő", ro: "Băile Herculane", en: "Băile Herculane" },
    description: { de: "Historischer Thermal-Kurort.", hu: "Történelmi hőforrásos gyógyüdülő.", ro: "Stațiune balneară istorică.", en: "Historical thermal spa resort." },
    facts: { de: ["Băile Herculane (deutsch Herkulesbad, ungarisch Herkulesfürdő) ist eine Kleinstadt und ein Kurort im Kreis Caraș-Severin in der Region Banat in Rumänien."], hu: [], ro: ["Băile Herculane (în latină Aqua Herculis, în germană Herkulesbad, în maghiară Herkulesfürdő) este un oraș în județul Caraș-Severin, Banat, România, format din localitățile componente Băile Herculane (reședința) și Pecinișca.", "Are o populație de 5.008 locuitori.", "Orașul este situat pe Valea Cernei, fiind accesibil la 5 km de DN 6 (E70), principala arteră rutieră ce leagă capitala țării de Timișoara."], en: ["Băile Herculane (Latin: Aqua Herculis; German: Herkulesbad; Hungarian: Herkulesfürdő; Czech: Herkulovy Lázně, Turkish: Lazarethane, English: Herculean Baths) is a spa town in Romanian Banat, in Caraș-Severin County, situated in the valley of the Cerna River, between the Mehedinți Mountains to the east and the Cerna Mountains to the west, elevation 168 m (551 ft).", "Its current population is 3,787.", "The town administers one village, Pecinișca (Hungarian: Pecsenyeska; from 1912 to 1918 Csernabesenyő)."] },
    image: ""
  },
  {
    id: "ro-poi-cascada-bigar", type: "landmark", parent: "RO-CS", coords: [21.9594, 45.0033],
    name: { de: "Bigăr-Wasserfall", hu: "Bigér-vízesés", ro: "Cascada Bigăr", en: "Bigăr Waterfall" },
    description: { de: "Einzigartiger moosbedeckter Wasserfall.", hu: "Egyedülálló mohos vízesés.", ro: "Cascadă unică acoperită de mușchi.", en: "Unique moss-covered waterfall." },
    facts: { de: ["Der Bigăr-Wasserfall (rumänisch Cascada Bigăr) ist ein Wasserfall des etwa 200 Meter langen Baches Bigăr auf dem Gebiet der Gemeinde Bozovici im Kreis Caraș-Severin in Rumänien.", "Die Umgebung des Baches einschließlich Wasserfall und Quelle ist unter der Bezeichnung Izvorul Bigăr (deutsch Bigăr-Quelle; auch bekannt als Izbucul Bigăr) ein Naturschutzgebiet der IUCN-Kategorie IV.", "Der Bach mündet über die Miniș in die Nera und schließlich in die Donau."], hu: ["A Bigéri-vízesés (románul: Izvorul Bigăr) Románia egyik leghíresebb vízesése, amely Bozovics közigazgatási területén, Krassó-Szörény megyében található.", "A travertínó vízesés jelentős része 2021.", "június 7-én leszakadt, így különleges látványa már a múlté."], ro: [], en: [] },
    image: ""
  },

  // CONSTANȚA (RO-CT)
  {
    id: "ro-poi-acvariul-constanta", type: "landmark", parent: "RO-CT", coords: [28.6622, 44.1714],
    name: { de: "Aquarium Constanța", hu: "Konstancai Akvárium", ro: "Acvariul Constanța", en: "Constanța Aquarium" },
    description: { de: "Aquarium am Schwarzen Meer.", hu: "Fekete-tengeri akvárium.", ro: "Acvariu pe litoralul Mării Negre.", en: "Aquarium on the Black Sea coast." },
    facts: { de: [], hu: [], ro: [], en: ["The Constanța Aquarium is located along the Black Sea in Constanța, Romania.", "The building that hosts the aquarium dates to the early 20th century.", "It served as a restaurant for the adjacent Constanța Casino until the aquarium opened in 1958."] },
    image: ""
  },

  // COVASNA (RO-CV)
  {
    id: "ro-poi-sfantu-gheorghe", type: "city", parent: "RO-CV", coords: [25.7833, 45.8667],
    name: { de: "Sankt Georgen", hu: "Sepsiszentgyörgy", ro: "Sfântu Gheorghe", en: "Sfântu Gheorghe" },
    description: { de: "Wichtiges Zentrum des Szeklerlandes.", hu: "A Székelyföld fontos központja.", ro: "Centru important al Ținutului Secuiesc.", en: "Important center of Szeklerland." },
    facts: { de: ["Sfântu Gheorghe ([ˈsfɨntu ˈ⁠ɟeor⁠ɟe]; bis 1993 Sfîntu Gheorghe, deutsch Sankt Georgen, ungarisch Sepsiszentgyörgy [ˈʃɛpʃisɛɲɟørɟ]) ist die Hauptstadt des Kreises Covasna in Rumänien.", "Sie liegt am Fluss Olt in einem Tal zwischen dem Baraolt- und dem Bodoc-Gebirge.", "Im Jahr 2003 hatte sie etwa 61.500 Einwohner."], hu: [], ro: ["Sfântu Gheorghe (în maghiară Sepsiszentgyörgy sau Szentgyörgy, în germană Sankt Georgen) este municipiul de reședință al județului Covasna, Transilvania, România, format din localitatea componentă Sfântu Gheorghe (reședința), și din satele Chilieni și Coșeni.", "Are o suprafață de 7.292 ha."], en: ["Sfântu Gheorghe (pronounced [ˈsfɨntu ˈɡe̯orɡe] ; Hungarian: Sepsiszentgyörgy [ˈʃɛpʃisɛɲɟørɟ] , or Szentgyörgy; Yiddish: סנט דזשארדזש; English lit.: Saint George) is a city that serves as the seat of Covasna County in Transylvania, Romania.", "Located in the central part of the country, it lies on the Olt River in a valley between the Baraolt Mountains and the Bodoc Mountains.", "The town administers two villages, Chilieni (Hungarian: Kilyén) and Coșeni (Hungarian: Szotyor)."] },
    image: ""
  },
  {
    id: "ro-poi-statiunea-covasna", type: "landmark", parent: "RO-CV", coords: [26.1667, 45.85],
    name: { de: "Kurort Covasna", hu: "Kovásznafürdő", ro: "Stațiunea Covasna", en: "Covasna Resort" },
    description: { de: "Bekannt für Mineralwasser und Mofetten.", hu: "Ásványvizeiről és mofettáiról ismert.", ro: "Cunoscută pentru ape minerale și mofete.", en: "Known for mineral waters and mofettas." },
    facts: { de: [], hu: [], ro: ["Covasna (maghiară Kovászna, în germană Kovasna) este un oraș în județul Covasna, Transilvania, România, format din localitățile componente Chiuruș și Covasna (reședința).", "Numele vine de la cuvântul slavon „kvasny”, ceea ce înseamnă „dospit, fermentat” (cu referire la apele gazoase de aici, care sunt gazoase ca băuturile fermentate - berea, de exemplu).", "Datorită faptului că este situată într-o zonă cu activitate vulcanică (în trecut), localitatea este renumită pentru apele sale minerale și mofetele (emanații gazoase post-vulcanice, predominant dioxid de carbon)."], en: ["Covasna (Romanian pronunciation: [koˈvasna] , Hungarian: Kovászna, Hungarian pronunciation: [ˈkovaːsnɒ] , German: Kowasna) is a town in Covasna County, Transylvania, Romania, at an altitude of 550–600 m (1,800–1,970 ft).", "It is known for its natural mineral waters and mofettas.", "The town administers one village, Chiuruș (Hungarian: Csomakőrös)."] },
    image: ""
  },
  {
    id: "ro-poi-balta-dracului", type: "landmark", parent: "RO-CV", coords: [26.175, 45.845],
    name: { de: "Teufelsteich", hu: "Pokolsár", ro: "Balta Dracului", en: "Devil's Pond" },
    description: { de: "Eine vulkanische Schlammemission.", hu: "Egy vulkáni iszapkitörés.", ro: "O emanație de noroi vulcanic.", en: "A volcanic mud emission." },
    facts: { de: ["Die Liste der Naturschutzgebiete in Rumänien enthält die Naturschutzgebiete von nationaler Bedeutung, die erstmals durch das Gesetz Nummer 5 vom 6.", "März 2000 ausgewiesen und durch die Regierungsbeschlüsse Nummer 2151 vom 30.", "November 2004, Nummer 1581 vom 8."], hu: ["Pokolsár (románul Balta Dracului) egy meleg iszapvulkán Kovászna belvárosában, a Főtér keleti peremén.", "Iszapját kezdetben fürdőkúrára használtak."], ro: ["Piperul de baltă, sau dintele-dracului, iarba iute, piparca sălbatică, troscot piperat, trestie mirositoare (Persicaria hydropiper, sin.", "Polygonum hydropiper) este o specie de plante din familia Polygonaceae.", "Crește în locuri umede și apă mică; este nativă zonei temperate din emisfera nordică."], en: ["A devil is the mythical personification of evil as it is conceived in various cultures and religious traditions.", "It is seen as the objectification of a hostile and destructive force.", "Jeffrey Burton Russell states that the different conceptions of the devil can be summed up as 1) a principle of evil independent from God, 2) an aspect of God, 3) a created being turning evil (a fallen angel) or 4) a symbol of human evil."] },
    image: ""
  },

  // DÂMBOVIȚA (RO-DB)
  {
    id: "ro-poi-pestera-ialomitei", type: "landmark", parent: "RO-DB", coords: [25.4383, 45.3933],
    name: { de: "Ialomița-Höhle", hu: "Ialomița-barlang", ro: "Peștera Ialomiței", en: "Ialomița Cave" },
    description: { de: "Höhle im Bucegi-Gebirge mit Kloster.", hu: "Barlang a Bucsecs-hegységben kolostorral.", ro: "Peșteră în Munții Bucegi cu o mănăstire.", en: "Cave in the Bucegi Mountains with a monastery." },
    facts: { de: ["Die folgende Liste enthält alle 435 Fauna-Flora-Habitat-Gebiete in Rumänien.", "Die Gebiete sind Bestandteil des europäischen Schutzgebietsnetzes Natura 2000.", "Das flächenmäßig größte FFH-Gebiet in Rumänien ist mit 4.536,5 km² das Donaudelta."], hu: ["Rasova község Constanța megyében, Dobrudzsában, Romániában.", "A hozzá tartozó település Cochirleni."], ro: ["Peștera Ialomiței, știută și drept Peștera Schitul Ialomiței, Peștera Schitului, sau Peștera Ialomicioarei, este o peșteră din Munții Bucegi, una din cele mai cunoscute din România."], en: ["This is one of a series of comprehensive lists of continents, countries, and first level administrative country subdivisions such as states, provinces, and territories, as well as certain political and geographic features of substantial area.", "References for the information provided in this table may be found in the individual articles on each body listed herein.", "Some divisions are listed twice, with one listing including territory that is excluded in the other for various reasons, including territorial disputes."] },
    image: "/geo-images/romania/ro-poi-pestera-ialomitei.webp"
  },

  // DOLJ (RO-DJ)
  {
    id: "ro-poi-parcul-romanescu", type: "landmark", parent: "RO-DJ", coords: [23.8, 44.2969],
    name: { de: "Nicolae-Romanescu-Park", hu: "Nicolae Romanescu Park", ro: "Parcul Nicolae Romanescu", en: "Nicolae Romanescu Park" },
    description: { de: "Einer der größten Naturparks in Europa.", hu: "Európa egyik legnagyobb természetes parkja.", ro: "Unul dintre cele mai mari parcuri naturale din Europa.", en: "One of the largest natural parks in Europe." },
    facts: { de: [], hu: [], ro: ["Parcul Nicolae Romanescu din Craiova este cel mai mare și mai cunoscut parc al orașului, fiind declarat monument istoric cu codul DJ-II-a-A-07924.", "La inițiativa lui Nicolae P.", "Romanescu, primarul Craiovei de la acea vreme, parcul a fost proiectat de arhitectul francez Édouard Redont."], en: ["Nicolae Romanescu Park (Romanian: Parcul Nicolae Romanescu), known over time as the Bibescu Park, the Independence Park or the People's Park, is a park in Craiova, Romania.", "Located on the site of the mid-19th century estate and gardens of the Bibescu family, it was designed by the French architect Édouard Redont and constructed between 1897 and 1903.", "It is wrongly considered in pop culture as the largest natural park in Eastern Europe."] },
    image: ""
  },
  {
    id: "ro-poi-muzeul-arta-craiova", type: "landmark", parent: "RO-DJ", coords: [23.795, 44.3183],
    name: { de: "Kunstmuseum Craiova", hu: "Craiova Művészeti Múzeum", ro: "Muzeul de Artă Craiova", en: "Craiova Art Museum" },
    description: { de: "Beherbergt Werke von Constantin Brâncuși.", hu: "Constantin Brâncuși műveinek ad otthont.", ro: "Găzduiește opere de Constantin Brâncuși.", en: "Houses works by Constantin Brâncuși." },
    facts: { de: ["Constantin Brâncuși, Aussprache: rumänisch [konstanˈtin brɨŋˈkuʃʲ] , französisch [kɔ̃stɑ̃ˈtɛ̃ bʁɑ̃kyˈzi] (* 19.", "Februar 1876 in Hobița; † 16.", "März 1957 in Paris) war ein rumänisch-französischer Bildhauer der Moderne und Fotograf seiner Werke im Umfeld seines Ateliers."], hu: [], ro: ["Muzeul de Artă din Craiova este un muzeu județean din Craiova, amplasat în Calea Unirii nr.", "Înființat în anul 1908 sub numele de Pinacoteca Alexandru și Aristia Aman, va deveni în 1954 Muzeul de Artă Craiova.", "Muzeul este adăpostit în Palatul Constantin Mihail, monument de arhitectură, cunoscut și ca Palatul Jean Mihail, construit în 1900 - 1907 în stilul eclectic (cu influențe puternice de neobaroc), după planurile arhitectului francez Paul Gottereau, inaugurat în 1909."], en: ["The Craiova Art Museum (Romanian: Muzeul de Artă din Craiova) is an art museum in the city of Craiova, Oltenia, Romania.", "The museum is housed in the Constantin Mihail Palace, built from 1898 to 1907 according to the plans of French architect Paul Gottereau.", "The palace once belonged to Michael Constantine (1837—1908), a member of one of the richest families in Romania and is known as Jean Mihail Palace."] },
    image: ""
  },

  // GALAȚI (RO-GL)
  {
    id: "ro-poi-faleza-dunarii", type: "landmark", parent: "RO-GL", coords: [28.0514, 45.4214],
    name: { de: "Donauuferpromenade", hu: "Dunai sétány", ro: "Faleza Dunării Galați", en: "Danube Promenade" },
    description: { de: "Die längste Uferpromenade in Rumänien.", hu: "A leghosszabb folyóparti sétány Romániában.", ro: "Cea mai lungă faleză pe malul apei din România.", en: "The longest river promenade in Romania." },
    facts: { de: [], hu: [], ro: ["Galați este municipiul de reședință al județului cu același nume, Moldova, România.", "Se află în apropiere de frontiera triplă sudică cu Republica Moldova și Ucraina.", "Conform ultimului recensământ, municipiul numără 217.851 de locuitori stabili, respectiv 311.000 după domiciliu."], en: ["The Danube Promenade (Hungarian: Dunakorzó) is located on the Pest side of Budapest, Hungary.", "The promenade itself lies on the left bank of the Danube, extending from the Széchenyi Chain Bridge to the Erzsébet Bridge."] },
    image: ""
  },
  {
    id: "ro-poi-turnul-tv-galati", type: "landmark", parent: "RO-GL", coords: [28.0289, 45.4258],
    name: { de: "Galați Fernsehturm", hu: "Galați TV Torony", ro: "Turnul de Televiziune Galați", en: "Galați TV Tower" },
    description: { de: "Turm mit Restaurant auf der Spitze.", hu: "Torony étteremmel a tetején.", ro: "Turn cu restaurant în vârf.", en: "Tower with a restaurant at the top." },
    facts: { de: [], hu: [], ro: ["Turnul de Televiziune Galați este un turn de 110 m înălțime din beton armat din Galați, România."], en: ["Galați TV Tower (Romanian: Turnul de televiziune Galaţi) is a 110-metre (360 ft) tall concrete tower used for FM and TV broadcasting in Galați, Romania.", "The tower, completed in 1978, is equipped with a tower restaurant, perhaps the only of this kind in Romania."] },
    image: ""
  },

  // GIURGIU (RO-GR)
  {
    id: "ro-poi-giurgiu", type: "city", parent: "RO-GR", coords: [25.9667, 43.9],
    name: { de: "Giurgiu", hu: "Gyurgyevó", ro: "Giurgiu", en: "Giurgiu" },
    description: { de: "Donauhafen und Grenzstadt zu Bulgarien.", hu: "Dunai kikötő és határváros Bulgária felé.", ro: "Port la Dunăre și oraș de graniță cu Bulgaria.", en: "Danube port and border city with Bulgaria." },
    facts: { de: ["Giurgiu (; deutsch veraltet Zurz) ist eine Stadt in Rumänien, Hauptstadt des gleichnamigen Kreises."], hu: [], ro: ["Giurgiu (în bulgară Гюргево, transliterat: Ghiurghevo, în turcă Yergöğü) este municipiul de reședință al județului cu același nume, Muntenia, România.", "Este un port fluvial important și un punct de frontieră cu Bulgaria.", "Are o suprafață de 5.388 ha."], en: ["Giurgiu (Romanian pronunciation: [ˈdʒjurdʒju] ; Bulgarian: Гюргево, romanized: Gyurgevo; Turkish: Yergöğü) is a city in southern Romania.", "The seat of Giurgiu County, it lies in the historical region of Muntenia.", "It is situated amongst mud-flats and marshes on the left bank of the Danube facing the Bulgarian city of Ruse on the opposite bank."] },
    image: ""
  },
  {
    id: "ro-poi-podul-prieteniei", type: "landmark", parent: "RO-GR", coords: [26.0078, 43.8864],
    name: { de: "Freundschaftsbrücke", hu: "Barátság híd", ro: "Podul Prieteniei", en: "Friendship Bridge" },
    description: { de: "Brücke über die Donau nach Ruse.", hu: "Híd a Dunán Ruse felé.", ro: "Pod peste Dunăre către Ruse.", en: "Bridge over the Danube to Ruse." },
    facts: { de: ["Die Giurgiu-Russe-Freundschaftsbrücke oder Brücke der Freundschaft (bulgarisch Мост на дружбата Most na druschbata; rumänisch Podul prieteniei) ist eine Straßen- und Eisenbahnbrücke über die Donau zwischen den Städten Giurgiu in Rumänien und Russe in Bulgarien."], hu: ["A nyelvészetben is használt deixis (< ógörög δεῖξις (deixisz) „rámutatás”) terminus eredetileg a formális logika szakszava.", "Nyelvi eszközzel való közvetlen utalást nevez meg a beszédhelyzettel kapcsolatos egyik vagy másik nyelven kívüli entitásra, amelyet sajátos módon aktualizál.", "A deiktikus elemnek nevezett nyelvi eszköz személyre, tárgyra, helyre, időre, cselekvési módra, minőségre vagy szociális viszonyra utal."], ro: ["Podul Prieteniei este numele mai multor poduri care leagă țări separate de râuri sau strâmtori.", "Podul Prieteniei (Paraguay–Brazilia) - leagă Paraguayul de Brazilia Podul Prieteniei sino-coreană - leagă Republica Populară Chineză de Coreea de Nord Podul Prieteniei sino-nepaleză - leagă Republica Populară Chineză de Nepal (Photograph 1, Photo 2 Arhivat în 29 septembrie 2007, la Wayback Machine.) Podul Prieteniei (China–Pakistan) - leagă Republica Populară Chineză de Pakistan Podul Prieteniei thailandezo–laoțiană - leagă Thailanda de Laos Podul Prieteniei Qatar–Bahrain - leagă Qatarul de Bahrain (în stadiul de planificare în 2005) Podul Prieteniei Afghanistan–Uzbekistan - leagă Afghanistanul de Uzbekistan Podul Prieteniei Giurgiu-Ruse - leagă Bulgaria și România peste Dunăre Podul Prieteniei este de asemenea numele unui pod care leagă două părți ale Macaului, Peninsula Macau și Ilha da Taipa, separate de apă - Podul Prieteniei sino-portugheze (Ponte de Amizade) Un alt Pod al Prieteniei se află în Bangkok - Podul Prieteniei thailandezo-japoneză."], en: ["Friendship Bridge may refer to:"] },
    image: ""
  },
  {
    id: "ro-poi-parcul-comana", type: "landmark", parent: "RO-GR", coords: [26.1433, 44.175],
    name: { de: "Naturpark Comana", hu: "Comana Natúrpark", ro: "Parcul Natural Comana", en: "Comana Natural Park" },
    description: { de: "Feuchtgebiet und Waldgebiet.", hu: "Vizes élőhely és erdő.", ro: "Zonă umedă și forestieră.", en: "Wetland and forest area." },
    facts: { de: ["i3i6 Der Naturpark Comana (rumänisch Parcul Natural Comana) ist ein nach den IUCN-Richtlinien erklärtes Naturschutzgebiet in Rumänien und gehört zur IUCN-Kategorie V."], hu: ["A Comana Natúrpark (románul Parcul Natural Comana) IUCN V-ös besorolású védett terület Románia déli részén, Giurgiu megye területén, Bukarest és Giurgiu városok között félúton."], ro: ["Parcul Natural Comana este o arie protejată de interes național ce corespunde categoriei a V-a IUCN (parc natural), situat în Muntenia, pe teritoriul județului Giurgiu."], en: ["The Comana Natural Park (Romanian: Parcul Natural Comana) is a protected area (natural park category V IUCN) situated in Romania, in the administrative territory of Giurgiu County.", "The park is roughly a 45-minute drive from the Romanian capital of Bucharest.", "The park was established in 2004 and has recreational activities such as kayaking,"] },
    image: ""
  },

  // GORJ (RO-GJ)
  {
    id: "ro-poi-manastirea-tismana", type: "historical", parent: "RO-GJ", coords: [22.9472, 45.0583],
    name: { de: "Kloster Tismana", hu: "Tismana-kolostor", ro: "Mănăstirea Tismana", en: "Tismana Monastery" },
    description: { de: "Ältestes aktives Kloster in Rumänien.", hu: "Románia legrégebbi működő kolostora.", ro: "Cea mai veche mănăstire activă din România.", en: "Oldest active monastery in Romania." },
    facts: { de: ["Tismana ist eine Kleinstadt in der rumänischen Walachei im Kreis Gorj.", "Besonders bekannt ist der in den Transsilvanischen Alpen gelegene Ort durch das rumänisch-orthodoxe Kloster Tismana.", "Dieses ist das älteste noch vorhandene Kloster in der Walachei."], hu: ["A Curtea de Argeș-i kolostor (románul: Mănăstirea Curtea de Argeș) ortodox kolostor, épületegyüttes Romániában, Curtea de Argeș (egyes forrásokban Argyasudvarhely) városában.", "1512 és 1517 között, V.", "Basarab havasalföldi fejedelem (Neagoe Basarab) uralkodása alatt épült."], ro: ["Mănăstirea Tismana este cel mai vechi așezământ monahal din Țara Românească (Oltenia), aflat pe teritoriul orașului Tismana din județul Gorj, la 36 km de orașul Târgu-Jiu."], en: ["Nikodim Tismanski, also known as Nicodemus the Sanctified, Nikodim Osvećeni, Nikodim Vratnenski, Nikodim Grčić, and in Romanian, Nicodim de la Tismana, (Prilep, today in North Macedonia, then Byzantine Empire, c.", "1320 – Tismana, Walachia, now Romania, 26 December 1406), was a Christian monk scribe and translator who was the founder of monasteries, one in Serbia and two in Romania.", "In Serbian medieval history he is remembered for conveying hesychastic monastic traditions and as a member of a diplomatic and ecclesiastical mission to Constantinople in 1375."] },
    image: ""
  },
  {
    id: "ro-poi-cheile-oltetului", type: "landmark", parent: "RO-GJ", coords: [23.7667, 45.195],
    name: { de: "Olteț-Klamm", hu: "Oltész-szurdok", ro: "Cheile Oltețului", en: "Olteț Gorges" },
    description: { de: "Sehr enge Karstschlucht.", hu: "Nagyon szűk karszt-szurdok.", ro: "Chei carstice foarte înguste.", en: "Very narrow karst gorge." },
    facts: { de: ["Die Liste der Naturschutzgebiete in Rumänien enthält die Naturschutzgebiete von nationaler Bedeutung, die erstmals durch das Gesetz Nummer 5 vom 6.", "März 2000 ausgewiesen und durch die Regierungsbeschlüsse Nummer 2151 vom 30.", "November 2004, Nummer 1581 vom 8."], hu: [], ro: [], en: ["Polovragi is a commune in Gorj County, Oltenia, Romania.", "It is composed of two villages, Polovragi and Racovița.", "The commune is located in the northeastern part of Gorj County, 54 km (34 mi) from the county seat, Târgu Jiu, on the border with Vâlcea County."] },
    image: ""
  },

  // IALOMIȚA (RO-IL)
  {
    id: "ro-poi-slobozia", type: "city", parent: "RO-IL", coords: [27.3667, 44.5667],
    name: { de: "Slobozia", hu: "Slobozia", ro: "Slobozia", en: "Slobozia" },
    description: { de: "Hauptstadt des Kreises Ialomița.", hu: "Ialomița megye székhelye.", ro: "Reședința județului Ialomița.", en: "Capital of Ialomița county." },
    facts: { de: ["Slobozia [sloboˈzja] (deutsch veraltet: Freistadt) ist eine Stadt in Rumänien und die Kreishauptstadt von Ialomița.", "Sie hatte im Jahr 2003 ungefähr 52.600 Einwohner und liegt in der Bărăgan-Ebene, einer der klimatisch wärmsten Gegenden Rumäniens."], hu: [], ro: ["Slobozia este municipiul de reședință al județului Ialomița, Muntenia, România, format din localitățile componente Bora, Slobozia (reședința) și Slobozia Nouă.", "Orașul a fost construit pe rămășițele vechii cetăți romane Netindava.", "Slobozia este cel mai mare municipiu al județului Ialomița, România."], en: ["Slobozia (Romanian pronunciation: [sloboˈzi.a]) is the capital city of Ialomița County, Muntenia, Romania, with a population of 41,550 in 2021."] },
    image: "/geo-images/romania/ro-poi-slobozia.webp"
  },
  {
    id: "ro-poi-lacul-amara", type: "lake", parent: "RO-IL", coords: [27.3222, 44.6056],
    name: { de: "Amara-See", hu: "Amara-tó", ro: "Lacul Amara", en: "Amara Lake" },
    description: { de: "Salzsee, bekannt für Heilschlamm.", hu: "Sóstó, amely gyógyiszapjáról ismert.", ro: "Lac sărat cunoscut pentru nămolul terapeutic.", en: "Salt lake known for therapeutic mud." },
    facts: { de: [], hu: ["Az Amara-tó (románul: Lacul Amara) sós vizű limán tó, amely a romániai Ialomița megyében fekvő Amara városának közelében található.", "Gyógyhatású iszapja és ásványi anyagokban gazdag vize népszerű gyógyüdülőhellyé tette."], ro: ["Lacul Amara se poate referi la două întinderi de apă din România: Lacul Amara din județul Ialomița Lacul Amara din județul Buzău"], en: ["Lake Amara (Romanian: Lacul Amara) is a saltwater fluvial liman lake located on the Slobozia - Buzău road near Amara in Ialomița County, Romania.", "The lake has a surface area of 132 ha (0.51 mi2), a water volume of 2,600,000 m3 (0.00062 cu mi), a length of 4 km (2.5 mi) and a width between 200 m (660 ft) and 800 m (2,600 ft) while the maximum depth reaches 3 m (9.8 ft).", "The lake is situated in a depression having no links to the Ialomița River."] },
    image: ""
  },
  {
    id: "ro-poi-biserica-poiana", type: "historical", parent: "RO-IL", coords: [27.350, 44.566],
    name: { de: "Holzkirche von Poiana", hu: "Poiana-i fatemplom", ro: "Biserica de lemn din Poiana", en: "Wooden Church of Poiana" },
    description: { de: "Historische Holzkirche.", hu: "Történelmi fatemplom.", ro: "Biserică istorică din lemn.", en: "Historical wooden church." },
    facts: { de: [], hu: ["Az élesdi Istenszülő elszenderedése fatemplom műemlékké nyilvánított épület Romániában, Bihar megyében.", "A romániai műemlékek jegyzékében a BH-II-m-B-01096 sorszámon szerepel."], ro: ["Biserica de lemn din Poiana se poate referi la: Biserica de lemn din Poiana, comuna Vârfurile, județul Arad, România Biserica de lemn din Poiana, comuna Deleni, județul Iași, România Biserica de lemn din Poiana, comuna Ciulnița, județul Ialomița, România – transferată la Muzeul Național al Agriculturii, Slobozia Biserica de lemn din Poiana Botizii, județul Maramureș, România Biserica de lemn din Poiana Cobâlea, regiunea Transcarpatia, Ucraina Biserica de lemn din Poiana Horea, județul Cluj, România Biserica de lemn din Poiana Ilvei, județul Bistrița-Năsăud, România Biserica de lemn din Poiana Onții, județul Sălaj, România Biserica de lemn din Poiana Sibiului, județul Sibiu, România Biserica de lemn din Poiana Stampei, județul Suceava, România"], en: ["The wooden churches of Maramureș in the Maramureș region of northern Transylvania are a group of almost one hundred Orthodox churches, and occasionally Greek-Catholic ones, of different architectural solutions from different periods and areas.", "The Maramureș churches are high timber constructions with characteristic tall, slim bell towers at the western end of the building.", "They are a particular vernacular expression of the cultural landscape of this mountainous area of northern Romania."] },
    image: ""
  },

  // IAȘI (RO-IS)
  {
    id: "ro-poi-parcul-copou", type: "landmark", parent: "RO-IS", coords: [27.5664, 47.1786],
    name: { de: "Copou-Park", hu: "Copou Park", ro: "Parcul Copou", en: "Copou Park" },
    description: { de: "Ältester öffentlicher Park in Iași mit der Eminescu-Linde.", hu: "Iași legrégebbi közparkja az Eminescu-hárssal.", ro: "Cel mai vechi parc public din Iași, cu Teiul lui Eminescu.", en: "Oldest public park in Iași, with Eminescu's Linden Tree." },
    facts: { de: [], hu: [], ro: ["Parcul Copou (sau Grădina Copou) este cel mai vechi parc din Iași, situat pe dealul Copoului, fiind cel mai mare parc urban din zona centrală și de nord a orașului.", "Contribuind semnificativ la calitatea aerului și la menținerea biodiversității locale, vegetația sa este majoritar arboricolă, cu o compoziție peisagistică apreciată pentru frumusețe, echilibru și valoare ecoprotectivă.", "Fondul principal este compus din tei, frasin și arțar, complementat de prezența a trei tipuri de arbuști: forsiția, iasomia și liliacul."], en: ["The Copou Park or Copou Gardens is the oldest public park in Iași, Romania.", "Its development started in 1834 under the reign of Mihail Sturdza, making the park one of the first public gardens in Romania and a Iași landmark.", "In its centre lies the Lions' Obelisk (1834), a 13.5 m (44 ft) tall obelisk dedicated to Regulamentul Organic, the first law on political, administrative and juridical organization in the Romanian Principalities."] },
    image: ""
  },

  // ILFOV (RO-IF)
  {
    id: "ro-poi-palatul-mogosoaia", type: "historical", parent: "RO-IF", coords: [25.9922, 44.5275],
    name: { de: "Schloss Mogoșoaia", hu: "Mogoșoaia-palota", ro: "Palatul Mogoșoaia", en: "Mogoșoaia Palace" },
    description: { de: "Historischer Palast im Brâncovenesc-Stil.", hu: "Történelmi palota Brâncovenesc-stílusban.", ro: "Palat istoric în stil brâncovenesc.", en: "Historical palace in Brâncovenesc style." },
    facts: { de: ["Das Schloss Mogoșoaia befindet sich in Rumänien.", "Es liegt rund 15 Kilometer nordwestlich der Landeshauptstadt Bukarest in einem Park am Ufer des Mogoșoaia-Sees in der Gemeinde Mogoșoaia im Kreis Ilfov.", "Schloss Mogoșoaia gehört zu den bekanntesten Kulturdenkmalen Rumäniens."], hu: ["Bukarest (románul: București) Románia fővárosa, politikai, ipari, kereskedelmi és kulturális központja, valamint legnagyobb városa.", "Valamivel több mint 1,8 millió lakosával és 2,2 millió lakosú városi agglomerációval, az Európai Unió 7.", "legnagyobb városa."], ro: ["Palatul Mogoșoaia este o clădire istorică din localitatea Mogoșoaia, județul Ilfov, România, aflată la circa 15 km de centrul orașului București.", "Complexul conține clădirea propriu-zisă, curtea acestuia cu turnul de veghe, cuhnia (bucătăria), casa de oaspeți (Vila D'Elchingen), ghețăria și cavoul familiei Bibescu, precum și biserica „Sfântul Gheorghe” aflată lângă zidurile curții.", "Palatul Mogoșoaia a fost în posesia familiei Brâncoveanu timp de aproximativ 119 de ani, trecând apoi în proprietatea familiei Bibescu."], en: ["Mogoșoaia Palace (Romanian: Palatul Mogoșoaia, pronounced [paˈlatul moɡoˈʃo̯aja]) is situated about 10 kilometres (6.2 mi) from Bucharest, Romania.", "It was built between 1698 and 1702 by Constantin Brâncoveanu in what is called the Romanian Renaissance style or Brâncovenesc style.", "The palace bears the name of the widow of the Romanian boyar Mogoș, who owned the land it was built on."] },
    image: ""
  },
  {
    id: "ro-poi-manastirea-snagov", type: "historical", parent: "RO-IF", coords: [26.175, 44.7303],
    name: { de: "Kloster Snagov", hu: "Snagov-kolostor", ro: "Mănăstirea Snagov", en: "Snagov Monastery" },
    description: { de: "Kloster auf einer Insel, angebliches Grab von Vlad III.", hu: "Szigeti kolostor, Vlad Tepes feltételezett sírja.", ro: "Mănăstire pe o insulă, presupusul mormânt al lui Vlad Țepeș.", en: "Island monastery, alleged tomb of Vlad the Impaler." },
    facts: { de: ["Das Kloster Snagov (rumänisch Mănăstirea Snagov) ist ein mittelalterliches Kloster und ein bedeutendes historisches Denkmal, das sich im südrumänischen Kreis Ilfov, ca.", "40 km nördlich von Bukarest, auf einer Insel im nördlichen Teil des Snagov-Sees befindet.", "Das Klostergelände gehört verwaltungstechnisch zur Gemeinde Snagov, untersteht aber direkt der Erzdiözese Bukarest."], hu: ["Copăceni község és falu Ilfov megyében, Munténiában, Romániában."], ro: ["Mănăstirea Snagov este un important monument istoric și de artă feudală din Țara Românească, care se găsește pe insula situată în partea nordică a lacului Snagov, în localitatea Snagov și în apropierea satului Siliștea Snagovului (din comuna Gruiu).", "Mănăstirea este probabil una din ctitoriile domniei târzii a lui Mircea cel Bătrân, fiind prima dată atestată documentar în 1408.", "A fost refăcută de mai multe ori de alți domnitori, printre care se pot menționa Vlad Țepeș, Mircea Ciobanul, Neagoe Basarab."], en: ["The Snagov Monastery (Romanian: Mănăstirea Snagov), also known as the Vlad Țepeș Monastery (Romanian: Mănăstirea Vlad Țepeș) is a medieval monastery and important historical monument located in southern Romania in the county of Ilfov, on an island in the northern reaches of Lake Snagov, belonging to the commune of Snagov, and in geographical proximity to the village of Siliștea Snagovului, in the Gruiu commune.", "An old center of Orthodox spirituality and culture, it stands on the foundations of an old Thracian settlement.", "The monastery is probably one of the late foundations of Mircea the Elder, being first documented in 1408."] },
    image: ""
  },
  {
    id: "ro-poi-padurea-cernica", type: "landmark", parent: "RO-IF", coords: [26.25, 44.4333],
    name: { de: "Cernica-Wald", hu: "Cernica-erdő", ro: "Pădurea Cernica", en: "Cernica Forest" },
    description: { de: "Erholungsgebiet nahe Bukarest.", hu: "Pihenőövezet Bukarest közelében.", ro: "Zonă de recreere lângă București.", en: "Recreation area near Bucharest." },
    facts: { de: ["Die folgende Liste enthält alle 171 Europäischen Vogelschutzgebiete nach Art.", "4 (1) der Europäischen Vogelschutzrichtlinie in Rumänien.", "Die Gebiete umfassen eine Gesamtfläche von 38.753 km²."], hu: [], ro: ["Lacul și Pădurea Cernica alcătuiesc o zonă naturală (arie de protecție specială avifaunistică - sit SPA) situată în partea sudică a României, pe teritoriile județelor Călărași și Ilfov."], en: ["Cernica is a commune in the southeast part of Ilfov County, Muntenia, Romania, with a population of 11,871 as of 2021.", "It is composed of five villages: Bălăceanca, Căldăraru, Cernica, Poșta, and Tânganu.", "The commune is situated in the Wallachian Plain, on the banks of the Dâmbovița River and its left tributary, the Colentina River."] },
    image: ""
  },

  // MEHEDINȚI (RO-MH)
  {
    id: "ro-poi-portile-de-fier", type: "landmark", parent: "RO-MH", coords: [22.5333, 44.6667],
    name: { de: "Eisernes Tor", hu: "Vaskapu-szoros", ro: "Porțile de Fier", en: "Iron Gates" },
    description: { de: "Schlucht und Wasserkraftwerk an der Donau.", hu: "Szurdok és vízerőmű a Dunán.", ro: "Defileu și hidrocentrală pe Dunăre.", en: "Gorge and hydroelectric dam on the Danube." },
    facts: { de: ["Das Eiserne Tor (rumänisch Porțile de Fier; serbisch Ђердап, Đerdap) ist ein Durchbruchstal der Donau.", "Es liegt in den südlichen Karpaten, genauer zwischen den Serbischen Karpaten und dem Banater Gebirge, an der Grenze von Serbien und Rumänien.", "Bis zu seiner Entschärfung 1972 im Zusammenhang mit dem Kraftwerk Eisernes Tor 1 galt es als der für die Schifffahrt gefährlichste Flussabschnitt der Donau, der nicht ohne ortskundige Lotsen passiert werden konnte."], hu: ["A magyar tulipán vagy al-dunai tulipán (Tulipa hungarica) endemikus tulipánfaj a Vaskapu-szorosban és környékén.", "Borbás Vince írta le először 1882-ben, – Rapaics Raymund a növény felfedezőjeként „Rochel Antal”-t nevezi meg 1835-ben, – mikor ez a vidék az Osztrák–Magyar Monarchia területét képezte.", "Jelenleg védett növény a romániai Mehedinți megyében, Szörényvárhoz (románul Drobeta-Turnu Severin) közel eső vidéken, a Kazán-szorosban (románul Cazanele Dunării) és a Vaskapu-szorosban (románul Porțile de Fier 1)."], ro: ["Porțile de Fier (limba sârbă: Гвоздена врата / Gvozdena vrata, croată: Željezna vrata, maghiară: Vaskapu, turcă: Demirkapi, germană: Eisernes Tor, bulgară: Железни врата) este numele unui defileu pe fluviul Dunăre.", "Face parte din granița dintre Serbia și România.", "În sensul larg, reprezintă 134 km din cursul Dunării, în sensul mai îngust doar barajul hidroelectric din apropierea orașului românesc Orșova."], en: ["The Iron Gates (Romanian: Porțile de Fier; Serbian: Ђердапска клисура, Đerdapska klisura) is a gorge on the river Danube.", "It forms part of the boundary between Serbia to the south and Romania to the north.", "In the broad sense it encompasses a route of 134 km (83 mi); in the narrow sense it only encompasses the last barrier on this route, just beyond the Romanian city of Orșova, that contains two hydroelectric dams, with two power stations, Iron Gate I Hydroelectric Power Station and Iron Gate II Hydroelectric Power Station."] },
    image: ""
  },
  {
    id: "ro-poi-chipul-decebal", type: "landmark", parent: "RO-MH", coords: [22.2889, 44.6417],
    name: { de: "Felsskulptur des Decebalus", hu: "Decebal arcmása", ro: "Chipul lui Decebal", en: "Rock Sculpture of Decebalus" },
    description: { de: "Riesige Skulptur in der Donau-Schlucht.", hu: "Hatalmas szobor a Duna-szorosban.", ro: "Sculptură uriașă în defileul Dunării.", en: "Huge sculpture in the Danube gorge." },
    facts: { de: [], hu: [], ro: ["Chipul regelui dac Decebal este un basorelief înalt de 55 m, aflat pe malul stâncos al Dunării, între localitățile Eșelnița și Dubova, în apropiere de orașul Orșova,Mehedinți, România.", "Basorelieful îl reprezintă pe Decebal, ultimul rege al Daciei, fiind sculptat într-o stâncă de către sculptorul Florin Cotarcea, din orașul Orșova.", "Sculptorul a lucrat timp de zece ani, perioadă în care a fost ajutat de 11 alpiniști."], en: ["The rock sculpture of Decebalus (Romanian: Chipul regelui dac Decebal) is a colossal carving of the face of Decebalus (r.", "AD 87–106), the last king of Dacia, who fought against the Roman emperors Domitian and Trajan.", "The sculpture is located near the city of Orșova, in Mehedinți County."] },
    image: ""
  },

  // OLT (RO-OT)
  {
    id: "ro-poi-slatina", type: "city", parent: "RO-OT", coords: [24.3667, 44.4333],
    name: { de: "Slatina", hu: "Slatina", ro: "Slatina", en: "Slatina" },
    description: { de: "Industriestadt am Fluss Olt.", hu: "Ipari város az Olt folyó partján.", ro: "Oraș industrial pe râul Olt.", en: "Industrial city on the Olt River." },
    facts: { de: ["Slatina ist der Familienname von: Klaus Slatina (1941–2022), deutscher Fußballspieler Slatina ist der Name folgender geografischer Objekte: Städte, Gemeinden: Slatina (Laktaši), Kurort in der Republik Srpska, Bosnien und Herzegowina Bjala Slatina, Stadt in Bulgarien Slatina (Kroatien), Stadt (früher Podravska Slatina), Kroatien Slatina (Rumänien), Stadt im südlichen Rumänien, Rumänien Slatina (Suceava), Gemeinde im Kreis Suceava, Rumänien Slatina-Timiș, Gemeinde im Kreis Caraș-Severin, Rumänien Slatina (Levice), Gemeinde in der südlichen Slowakei, mit Mineralwasserquellen Zvolenská Slatina, Gemeinde in der Mittelslowakei Rogaška Slatina (deutsch: Rohitsch-Sauerbrunn), Gemeinde in der Region Spodnja Štajerska, Slowenien Slatina pod Hazmburkem, Gemeinde im Okres Litoměřice, Tschechien Slatina u Velvar, Gemeinde im Okres Kladno, Tschechien Slatina u Horažďovic, Gemeinde im Okres Klatovy, Tschechien Slatina nad Úpou, Gemeinde (deutsch Moorgrund an der Aupa) im Okres Náchod, Tschechien Slatina u Bílovce, Gemeinde (deutsch Schlatten) im Okres Nový Jičín, Tschechien Slatina u Chříče, Gemeinde im Okres Plzeň-sever, Tschechien Slatina nad Zdobnicí, Gemeinde (deutsch Moorwies) im Okres Rychnov nad Kněžnou, Tschechien Slatina (Bezirk Svitavy) (deutsch Schlettau), früher auch Slatina u Moravské Třebové oder Slatina u Jevíčka, Gemeinde im Okres Svitavy, Tschechien Slatina u Vysokého Mýta, Gemeinde im Okres Ústí nad Orlicí, Tschechien Slatina u Jevišovic, Gemeinde (deutsch Latein) im Okres Znojmo, Tschechien Horní Slatina, Gemeinde (deutsch Oberlatein) im Okres Jindřichův Hradec, Tschechien Solotwyno, Stadt in der Oblast Transkarpatien, Ukraine (rumänischer Name) Orte und Ortsteile: Slatina (Teslić), Dorf in der Gemeinde Teslić in Bosnien und Herzegowina Slatina (Sofia), einer der 24 Bezirke in Sofia, Bulgarien Slatina (Oblast Lowetsch), Dorf in der Oblast Lowetsch, Bulgarien Slatina (Oblast Montana), Dorf in der Oblast Montana, Bulgarien Slatina (Oblast Plowdiw), Dorf in der Oblast Plowdiw, Bulgarien Slatina (Oblast Silistra), Dorf in der Oblast Silistra, Bulgarien Sllatina (Vushtrria), Kosovo Slatina (Andrijevica), Dorf in der Gemeinde Andrijevica, Montenegro Slatina (Danilovgrad), Dorf in der Gemeinde Danilovgrad, Montenegro Slatina (Pljevlja), Dorf in der Gemeinde Pljevlja, Montenegro Slatina (Šavnik), Dorf in der Gemeinde Šavnik, Montenegro Slatina (Argeș), Dorf im Kreis Argeș, Rumänien Slatina de Criș, Dorf im Kreis Arad, Rumänien Slatina de Mureș, Dorf im Kreis Arad, Rumänien Slatina-Nera, Dorf im Kreis Caraș-Severin, Rumänien Slatina (Negotin), Dorf in der Opština Negotin, Serbien Slatina (Knjaževac), Dorf in der Opština Knjaževac, Serbien Slatina (Bor), Dorf in der Opština Bor, Serbien Slatina (Lúky), Ort in der nordwestlichen Slowakei bei Lúky, Slowakei Slatina (Dohňany), Ort in der nordwestlichen Slowakei bei Dohňany, Slowakei Slatina nad Bebravou, Ort in der westlichen Slowakei bei Krásna Ves, Slowakei Slatina (Kungota), Ortsteil der Gemeinde Kungota, Podravska, Slowenien (dt.", "Sulz) Slatina (Brno), Stadtteil von Brno, Tschechien Slatina (Františkovy Lázně), Ort in der Gemeinde Franzensbad, Tschechien Slatina (Hradec Králové), Ortsteil von Hradec Králové, Tschechien Slatina (Přešťovice), Ortschaft der Gemeinde Přešťovice, Tschechien historisch: Slatina (Stará Voda), aufgegebener Ort, der zu Stará Voda u Mariánských Lázní gehörte, Tschechien Baulichkeiten: Kloster Slatina (Mănăstirea Slatina), rumänisch-orthodoxes Kloster im Kreis Suceava in der Region Bukowina in Rumänien Gewässer: Slatina (Hron), Fluss in der Mittelslowakei Slatina (Bach), Bach im Okres Bánovce nad Bebravou"], hu: [], ro: [], en: ["Slatina may refer to:"] },
    image: ""
  },
  {
    id: "ro-poi-manastirea-brancoveni", type: "historical", parent: "RO-OT", coords: [24.3164, 44.3125],
    name: { de: "Kloster Brâncoveni", hu: "Brâncoveni-kolostor", ro: "Mănăstirea Brâncoveni", en: "Brâncoveni Monastery" },
    description: { de: "Bedeutendes Kloster- und Architekturdenkmal.", hu: "Jelentős kolostor és építészeti műemlék.", ro: "Important monument arhitectural și mănăstiresc.", en: "Important monastic and architectural monument." },
    facts: { de: [], hu: [], ro: ["Mănăstirea Brâncoveni este o mănăstire din România, situată în comuna Brâncoveni din județul Olt."], en: [] },
    image: ""
  },

  // SĂLAJ (RO-SJ)
  {
    id: "ro-poi-zalau", type: "city", parent: "RO-SJ", coords: [23.0567, 47.1917],
    name: { de: "Zillenmarkt", hu: "Zilah", ro: "Zalău", en: "Zalău" },
    description: { de: "Kreishauptstadt von Sălaj.", hu: "Szilágy megye székhelye.", ro: "Reședința județului Sălaj.", en: "Capital of Sălaj county." },
    facts: { de: ["Zalău ([zaˈlə̯u], veraltet Zălau oder Zălău; ungarisch Zilah [ˈzilɒx], deutsch Zillenmarkt oder auch Waltenberg) ist eine Stadt in Rumänien und liegt im Kreis Sălaj im Kreischgebiet.", "Die Kommune besteht aus zwei Ansiedlungen, der Stadt Zalău und Stâna und liegt am Oberlauf des Zalău – ein rechter Nebenfluss der Crasna – an den nordwestlichen Hängen der Meseș-Berge (Munții Meseș).", "Im Jahr 2007 hatte die Stadt ungefähr 63.600 Einwohner, 1992 zählte man noch 67.977 Einwohner."], hu: [], ro: ["Zalău (original și colocvial Zălau; în maghiară Zilah, în germană Zillenmarkt sau Waltenberg) este municipiul de reședință al județului Sălaj, Transilvania, România, format din localitățile componente Stâna și Zalău (reședința).", "Conform recensământului din anul 2011, Zalău are o populație de 56.205 locuitori."], en: ["Zalău (Romanian pronunciation: [zaˈləw], unofficial and former official name: Romanian: Zălau (Romanian pronunciation: [zalˈəw]; German: Zillenmarkt or Waltenberg, Hungarian: Zilah, Turkish: Zile) is the seat of Sălaj County, Romania.", "In 2021, its estimated population was 52,359."] },
    image: ""
  },
  {
    id: "ro-poi-porolissum", type: "historical", parent: "RO-SJ", coords: [23.1583, 47.1803],
    name: { de: "Porolissum", hu: "Porolissum", ro: "Castrul Roman Porolissum", en: "Porolissum Roman Camp" },
    description: { de: "Ehemaliges römisches Militärlager.", hu: "Egykori római katonai tábor.", ro: "Fost castru militar roman.", en: "Former Roman military camp." },
    facts: { de: ["Kastell Romita (antiker Name Certinae, Cersie oder Certie) war ein römisches Hilfstruppenlager auf dem Gebiet des zur Gemeinde Românași im Kreis Sălaj gehörenden Dorfes Romita in der rumänischen Region Siebenbürgen.", "In antiker Zeit lag es in der römischen Provinz Dacia Porolissensis und war Bestandteil des Limes Porolissensis."], hu: ["Apulum a római Dacia egyik legjelentősebb politikai, gazdasági és kulturális központja volt a 106 és 271 közötti időszakban a mai Gyulafehérvár területén.", "Az egykori dák település, Apulon közelében közvetlenül a római hódítást követően letelepedő XIII Gemina legio castruma körül a 2–3.", "században kettős település jött létre (Colonia Aurelia Apulensis és Municipium Septimium Apulense)."], ro: ["Porolissum a fost un oraș roman din Dacia.", "Stabilit ca tabără militară în anul 106 d.C., în timpul războaielor daco-romane ale lui Traian, orașul s-a dezvoltat repede prin intermediul comerțului cu băștinașii daci, și a devenit capitala provinciei romane Dacia Porolissensis în 124 d.C.", "Situl este unul dintre cele mai mari și mai bine păstrate din România."], en: ["Porolissum was an ancient Roman city in Dacia.", "Established as a military fort in 106 during Trajan's Dacian Wars, the city quickly grew through trade with the natives and became the capital of the province Dacia Porolissensis in 124.", "It is one of the largest and best-preserved archaeological sites in modern-day Romania from the Roman Era."] },
    image: "/geo-images/romania/ro-poi-porolissum.webp"
  },
  {
    id: "ro-poi-gradina-zmeilor", type: "landmark", parent: "RO-SJ", coords: [23.3, 47.2],
    name: { de: "Drachengarten", hu: "Sárkányok kertje", ro: "Grădina Zmeilor", en: "Dragons' Garden" },
    description: { de: "Spektakuläres Naturschutzgebiet mit Felsformationen.", hu: "Látványos természetvédelmi terület sziklaképződményekkel.", ro: "Rezervație naturală spectaculoasă cu formațiuni stâncoase.", en: "Spectacular nature reserve with rock formations." },
    facts: { de: ["Die Liste der Naturschutzgebiete in Rumänien enthält die Naturschutzgebiete von nationaler Bedeutung, die erstmals durch das Gesetz Nummer 5 vom 6.", "März 2000 ausgewiesen und durch die Regierungsbeschlüsse Nummer 2151 vom 30.", "November 2004, Nummer 1581 vom 8."], hu: ["A Sárkányok kertje (románul Grădina Zmeilor) egy felszíni erózióval létrejött sziklaképződmény Romániában, az erdélyi Szilágy megyében.", "A 32,5 hektáros terület védelem alatt áll."], ro: ["Grădina Zmeilor este o arie protejată de interes național ce corespunde categoriei a IV-a IUCN (rezervație naturală de tip geologic, floristic, faunistic și peisagistic), situată în județul Sălaj, pe teritoriul administrativ al comunei Bălan."], en: [] },
    image: "/geo-images/romania/ro-poi-gradina-zmeilor.webp"
  },

  // SATU MARE (RO-SM)
  {
    id: "ro-poi-castelul-karolyi", type: "historical", parent: "RO-SM", coords: [22.4667, 47.6833],
    name: { de: "Schloss Károlyi", hu: "Károlyi-kastély", ro: "Castelul Károlyi", en: "Károlyi Castle" },
    description: { de: "Historisches Schloss in Carei.", hu: "Történelmi kastély Nagykárolyban.", ro: "Castel istoric în Carei.", en: "Historical castle in Carei." },
    facts: { de: ["Das Schloss Károlyi (rumänisch Castelul Károlyi, ungarisch Károlyi-kastély) ist eine neogotisch-neobarocke Schlossanlage in Carei (deutsch Großkarol, ungarisch Nagykároly) im Nordwesten Rumäniens.", "Sie war einst Stammsitz der ungarischen Adelsfamilie Károlyi von Nagykároly."], hu: ["A Castel dell’Ovo (jelentése Tojásvár) egy nápolyi vár."], ro: ["Ansamblul castelului Károlyi din Carei este un ansamblu de monumente istorice aflat pe teritoriul orașului Carei, operă a arhitectului Arthur Meinig.", "În Repertoriul Arheologic Național, monumentul apare cu codul 136535.04.01.", "Monument de arhitectură, castelul Károly, a fost construit între anii 1892-1894."], en: ["Károlyi Castle refers to a number of castles and hunting lodges in Hungary and Romania which were owned by members of the Károlyi family"] },
    image: ""
  },
  {
    id: "ro-poi-turnul-pompierilor", type: "landmark", parent: "RO-SM", coords: [22.875, 47.7958],
    name: { de: "Feuerwehrturm", hu: "Tűzoltótorony", ro: "Turnul Pompierilor", en: "Firemen's Tower" },
    description: { de: "Wahrzeichen der Stadt Satu Mare.", hu: "Szatmárnémeti jelképe.", ro: "Simbol al orașului Satu Mare.", en: "Landmark of the city of Satu Mare." },
    facts: { de: [], hu: ["A tűzoltótorony (románul: Turnul Pompierilor) tűztorony Szatmárnémetiben.", "A régi Pannónia szálló (ma Dacia hotel) mögötti téren áll.", "A kerek torony 45 méter magas, és a város egyik szimbólumának számít."], ro: ["Turnul Pompierilor, denumit pe vremuri Turnul Lăcătușilor, este situat pe strada Tipografiei din municipiul Cluj-Napoca."], en: [] },
    image: ""
  },

  // TELEORMAN (RO-TR)
  {
    id: "ro-poi-alexandria", type: "city", parent: "RO-TR", coords: [25.3333, 43.9667],
    name: { de: "Alexandria", hu: "Alexandria", ro: "Alexandria", en: "Alexandria" },
    description: { de: "Kreishauptstadt am Fluss Vedea.", hu: "Megyeszékhely a Vedea folyó partján.", ro: "Reședința județului pe râul Vedea.", en: "County capital on the Vedea river." },
    facts: { de: ["Alexandria oder Alexandrien (altgriechisch Ἀλεξάνδρεια Alexándreia, nach Alexander dem Großen; arabisch الإسكندرية al-Iskandariyya; koptisch: Ⲣⲁⲕⲟϯ Rakoti bzw.", "ⲁⲗⲉⲝⲁⲛⲇⲣⲓⲁ Aleksandria) ist mit über fünf Millionen Einwohnern (Stand 2023) und einer Ausdehnung von 32 Kilometern entlang der Mittelmeerküste nach Kairo die zweitgrößte Stadt Ägyptens und die größte ägyptische Stadt mit direktem Zugang zum Mittelmeer.", "Sie besitzt den größten Seehafen des Landes, an dem etwa 80 % des ägyptischen Außenhandels abgewickelt werden."], hu: [], ro: [], en: ["Alexandria is a major city in Egypt.", "Lying at the western edge of the Nile River Delta, it extends about 40 km (25 mi) along the country's northern coast.", "It is Egypt's principal seaport, the second largest city after Cairo, and the largest city on the Mediterranean coast."] },
    image: ""
  },
  {
    id: "ro-poi-cetatea-turnu", type: "historical", parent: "RO-TR", coords: [24.8711, 43.7433],
    name: { de: "Festung Turnu", hu: "Turnu erőd", ro: "Ruinele Cetății Turnu", en: "Turnu Fortress Ruins" },
    description: { de: "Ruinen einer alten römischen und mittelalterlichen Festung.", hu: "Egy ősi római és középkori erőd romjai.", ro: "Ruinele unei vechi cetăți romane și medievale.", en: "Ruins of an ancient Roman and medieval fortress." },
    facts: { de: ["Liste archäologischer Museen: Museen der Archäologie, einschließlich einiger bedeutender archäologischer Abteilungen und Sammlungen von allgemeineren Museen (natur-, kunst- und kulturhistorische Museen)."], hu: [], ro: ["Ruinele Cetății Severinului sunt un ansamblu de monumente istorice aflat pe teritoriul municipiului Drobeta Turnu Severin.", "În Repertoriul Arheologic Național, monumentul apare cu codul 109782.07.01.", "Cetatea are un plan dreptunghiular destul de regulat care o înconjoară și două ziduri de incintă."], en: ["The medieval fortress of Turnu (English: tower, Turkish: Kule, also known as Nicopolis minor, Holavnic) is located in the southern part of Turnu Măgurele at a distance of 3 km from the city and 1 km from the confluence of the Olt and Danube rivers in today's Romania.", "The fortress is documented during the reign of Mircea the Elder (1394) and was built on the Danube line for the defense of Wallachia against the Turkish peril.", "At the end of the reign of Mircea the Elder, under unclear circumstances, it came under Ottoman occupation to return to the possession of Wallachia only in 1829 when it was burned and demolished."] },
    image: ""
  },
  {
    id: "ro-poi-padurea-troianu", type: "landmark", parent: "RO-TR", coords: [24.9833, 44.025],
    name: { de: "Troianu-Wald", hu: "Troianu-erdő", ro: "Pădurea Troianu", en: "Troianu Forest" },
    description: { de: "Naturschutzgebiet für wilde Pfingstrosen.", hu: "Vadon termő pünkösdi rózsák természetvédelmi területe.", ro: "Rezervație naturală pentru bujori sălbatici.", en: "Nature reserve for wild peonies." },
    facts: { de: ["Die Liste der Naturschutzgebiete in Rumänien enthält die Naturschutzgebiete von nationaler Bedeutung, die erstmals durch das Gesetz Nummer 5 vom 6.", "März 2000 ausgewiesen und durch die Regierungsbeschlüsse Nummer 2151 vom 30.", "November 2004, Nummer 1581 vom 8."], hu: [], ro: ["Pădurea Troianu este o arie protejată (sit de importanță comunitară — SCI) din România, desemnată în scopul protejării biodiversității și menținerii într-o stare de conservare favorabilă a florei spontane și faunei sălbatice, precum și a habitatelor naturale de interes comunitar aflate în arealul zonei de protecție.", "Aceasta este întinsă pe o suprafață de 78,7 ha, integral pe uscat."], en: ["The spectacles in ancient Rome were numerous, open to all citizens and generally free of charge; some of them were distinguished by the grandeur of the stagings and cruelty.", "Romans preferred to attend gladiatorial fights, those with ferocious beasts (venationes), reproductions of naval battles (naumachia), chariot races, athletic contests, theatrical performances by mimes, and pantomimes.", "Forty years after the invective of Juvenal (n."] },
    image: ""
  },

  // TIMIȘ (RO-TM)
  {
    id: "ro-poi-catedrala-mitropolitana", type: "landmark", parent: "RO-TM", coords: [21.2241, 45.7505],
    name: { de: "Orthodoxe Kathedrale", hu: "Ortodox Katedrális", ro: "Catedrala Mitropolitană", en: "Metropolitan Cathedral" },
    description: { de: "Orthodoxe Kathedrale in Timișoara.", hu: "Ortodox katedrális Temesváron.", ro: "Catedrală ortodoxă din Timișoara.", en: "Orthodox cathedral in Timișoara." },
    facts: { de: ["Die Kathedrale der Heiligen drei Hierarchen (rumänisch: Catedrala Ortodoxă oder Catedrala Mitropolitană) ist eine denkmalgeschützte rumänisch-Orthodoxe Kirche am Bulevardul Regele Ferdinand I Nr.", "Bezirk Cetate der westrumänischen Stadt Timișoara an der Piața Victoriei, und eines ihrer Wahrzeichen.", "Sie ist den Heiligen drei Hierarchen Basilius dem Großen, Gregor von Nazianz und Johannes Chrysostomos geweiht."], hu: ["A balázsfalvi Szentháromság-székesegyház műemlék Romániában, Fehér megyében.", "A romániai műemlékek jegyzékében az AB-II-m-A-00187 sorszámon szerepel."], ro: ["Catedrala Mitropolitană din Iași, cu hramul Sfânta Parascheva, Întâmpinarea Domnului și Sfântul Mucenic Gheorghe, este biserica catedrală a Mitropoliei Moldovei și Bucovinei, una dintre cele șase catedrale mitropolitane ortodoxe din România.", "Catedrala Mitropolitană a fost inclusă pe Lista monumentelor istorice, având codul de clasificare cod LMI IS-II-m-A-04069.01."], en: [] },
    image: ""
  },

  // VASLUI (RO-VS)
  {
    id: "ro-poi-vaslui", type: "city", parent: "RO-VS", coords: [27.7333, 46.6333],
    name: { de: "Vaslui", hu: "Vászló", ro: "Vaslui", en: "Vaslui" },
    description: { de: "Kreishauptstadt von Vaslui.", hu: "Vaslui megye székhelye.", ro: "Reședința județului Vaslui.", en: "Capital of Vaslui county." },
    facts: { de: ["Vaslui [vasˈluj] (deutsch Wassluy) ist eine Stadt in Rumänien und ist Kreishauptstadt im gleichnamigen Kreis.", "Die Stadt hatte im Jahr 2021 ungefähr 63.000 Einwohner."], hu: [], ro: ["Vaslui este municipiul de reședință al județului cu același nume, Moldova, România, format din localitățile componente Bahnari, Brodoc, Moara Grecilor, Rediu, Vaslui (reședința) și Viișoara.", "Se află în estul României, aproape de frontiera cu Republica Moldova.", "Este atestat documentar în anul 1375."], en: ["Vaslui (Romanian pronunciation: [vasˈluj]), a city in eastern Romania, is the seat of Vaslui County, in the historical region of Western Moldavia.", "The city administers five villages: Bahnari, Brodoc, Moara Grecilor, Rediu, and Viișoara."] },
    image: ""
  },
  {
    id: "ro-poi-curtea-domneasca-vaslui", type: "historical", parent: "RO-VS", coords: [27.7289, 46.6358],
    name: { de: "Fürstenhof Vaslui", hu: "Vászlói Fejedelmi Udvar", ro: "Curtea Domnească din Vaslui", en: "Princely Court of Vaslui" },
    description: { de: "Ehemalige Residenz der moldauischen Herrscher.", hu: "A moldvai uralkodók egykori rezidenciája.", ro: "Fosta reședință a domnitorilor moldoveni.", en: "Former residence of the Moldavian rulers." },
    facts: { de: [], hu: [], ro: ["Curtea Domnească din Vaslui, cunoscută și sub denumirea colectivă Curțile Domnești din Vaslui, este o curte domnească ridicată în Vaslui de domnul Moldovei Ștefan al II-lea, fiul lui Alexandru cel Bun.", "Conform unei alte teorii, curtea ar fi fost clădită chiar de Alexandru cel Bun.", "În urma Bătăliei de la Vaslui, câștigata de Ștefan cel Mare, acesta a ctitorit Biserica „Tăierea Capului Sfântului Ioan Botezătorul” în apropierea curții domnești."], en: ["Vaslui (Romanian pronunciation: [vasˈluj]), a city in eastern Romania, is the seat of Vaslui County, in the historical region of Western Moldavia.", "The city administers five villages: Bahnari, Brodoc, Moara Grecilor, Rediu, and Viișoara."] },
    image: ""
  },
  {
    id: "ro-poi-muzeul-stefan", type: "landmark", parent: "RO-VS", coords: [27.73, 46.636],
    name: { de: "Kreismuseum Stefan der Große", hu: "Nagy István Megyei Múzeum", ro: "Muzeul Județean Ștefan cel Mare", en: "Stephen the Great County Museum" },
    description: { de: "Museum für Geschichte und Archäologie.", hu: "Történelmi és régészeti múzeum.", ro: "Muzeu de istorie și arheologie.", en: "Museum of history and archeology." },
    facts: { de: ["Liste archäologischer Museen: Museen der Archäologie, einschließlich einiger bedeutender archäologischer Abteilungen und Sammlungen von allgemeineren Museen (natur-, kunst- und kulturhistorische Museen)."], hu: ["Temesvár (németül: Temeswar, románul: Timișoara [timiˈʃo̯ara], horvátul: Temišvar, a bánsági bolgárok nyelvén: Timišvár, szerbül: Темишвар) város Romániában, a Bánságban.", "Az egykori Temes vármegye és a mai Temes megye székhelye.", "250 849 lakosával Románia harmadik legnépesebb városa."], ro: ["Muzeul Național al Bucovinei (cunoscut simplu ca Muzeul Bucovinei, în trecut Societatea Muzeul, Muzeul orășenesc Suceava, Muzeul Regional al Bucovinei, Muzeul Regional Suceava, Muzeul Județean Suceava, Complexul Muzeal Bucovina) este principala instituție muzeală din județul Suceava.", "Aceasta funcționează într-o clădire construită între anii 1902–1903, în stilurile neoclasic și baroc, situată pe strada Ștefan cel Mare nr.", "33, în centrul municipiului Suceava."], en: ["The Great Plains Transportation Museum (\"GPTM\") is a railroad museum in Wichita, Kansas, United States.", "Adjacent to an active railroad, and across a street from the city's former train station, downtown, the museum has several locomotives and other railroad cars, vintage and modern, and indoor exhibits and a gift shop.", "Visitors are allowed to board some of the cars, including locomotives, and manipulate controls."] },
    image: ""
  },

  // VÂLCEA (RO-VL)
  {
    id: "ro-poi-manastirea-cozia", type: "historical", parent: "RO-VL", coords: [24.3164, 45.2731],
    name: { de: "Kloster Cozia", hu: "Cozia-kolostor", ro: "Mănăstirea Cozia", en: "Cozia Monastery" },
    description: { de: "Mittelalterliches Kloster am Fluss Olt.", hu: "Középkori kolostor az Olt folyó partján.", ro: "Mănăstire medievală pe malul Oltului.", en: "Medieval monastery on the Olt river." },
    facts: { de: ["Das Kloster Cozia (rumänisch Mǎnǎstirea Cozia) liegt im Olt-Tal in Rumänien.", "Es wurde 1386 von Fürst Mircea dem Älteren gegründet.", "Erst als Nucet-Kloster benannt, bekam es den heutigen Namen vom nahe gelegenen Berg Cozia."], hu: ["A Cozia kolostor Romániában, Olténiában, Vâlcea megyében, Călimăneștiben, az Olt jobb partján helyezkedik el.", "Az ortodox vallási épületegyüttes a romániai műemlékek jegyzékében a VL-II-a-A-09697 sorszámon szerepel.", "Mircea cel Bătrân alapította 1388-ban, a történelem során pedig sokszor alakították és javították."], ro: ["Mănăstirea Cozia este un complex monahal medieval, situat în orașul Călimănești, pe malul râului Olt.", "Este o ctitorie a domnului Mircea cel Bătrân, extinsă și renovată de-a lungul istoriei sale multiseculare.", "Paul de Alep, în jurnalul călătoriei sale în Țara Românească între 21 august 1656 - 13 octombrie 1658 scria despre Cozia: „În limba lor înțelesul numelui acestei mănăstiri, Cozia este „fortăreață de pământ din pricina nenumăraților munți din această țară”."], en: ["Cozia Monastery (Romanian: Mănăstirea Cozia) is one of the most important medieval monastic complexes in Romania, located on the right bank of the Olt River near the town of Călimănești in Vâlcea County.", "Founded in the late 14th century by voivode Mircea the Elder, the monastery has played a pivotal role in the spiritual, cultural, and political history of the region for over six centuries.", "Its construction between 1387 and 1391 marked a defining moment in the development of Wallachian religious architecture and established Cozia as a prominent Orthodox monastic center."] },
    image: "/geo-images/romania/ro-poi-manastirea-cozia.webp"
  },
  {
    id: "ro-poi-salina-ocnele-mari", type: "landmark", parent: "RO-VL", coords: [24.3167, 45.0833],
    name: { de: "Salzbergwerk Ocnele Mari", hu: "Ocnele Mari Sóbánya", ro: "Salina Ocnele Mari", en: "Ocnele Mari Salt Mine" },
    description: { de: "Großes touristisches Salzbergwerk.", hu: "Nagy turisztikai sóbánya.", ro: "Mare salină turistică.", en: "Large tourist salt mine." },
    facts: { de: [], hu: [], ro: ["Salina Ocnele Mari este o exploatare minieră a sării aflată în localitatea Ocnele Mari, Vâlcea, Oltenia, România.", "Este a doua cea mai mare salină și cea mai veche din România, ce aparține Societății Naționale a Sării „Salrom” S.A., având o suprafață de aproximativ 50.000 metri pătrați.", "Salina este situată la 7 km de Râmnicu Vâlcea, iar accesul se face exclusiv cu autobuze, pe un drum cu o lungime de aproximativ 2 km."], en: ["The Ocnele Mari mine is a large salt mine located in southern Romania in Vâlcea County, close to Ocnele Mari.", "Ocnele Mari represents one of the largest salt reserves in the country, having estimated reserves of 9 billion tonnes of sodium chloride."] },
    image: ""
  },

  // VRANCEA (RO-VN)
  {
    id: "ro-poi-focsani", type: "city", parent: "RO-VN", coords: [27.1833, 45.7],
    name: { de: "Fokschan", hu: "Foksány", ro: "Focșani", en: "Focșani" },
    description: { de: "Kreishauptstadt in der historischen Region Moldau.", hu: "Megyeszékhely a történelmi Moldva régióban.", ro: "Oraș reședință în regiunea istorică Moldova.", en: "County capital in the historical region of Moldavia." },
    facts: { de: ["Focșani (, deutsch Fokschan, ungarisch Foksány) ist eine Stadt im Osten Rumäniens."], hu: [], ro: ["Focșani este municipiul de reședință al județului Vrancea, la limita între regiunile istorice Moldova și Muntenia, România, format din localitățile componente Focșani (reședința), Mândrești-Moldova și Mândrești-Munteni.", "Potrivit recensământului din 2021, are o populație de 66.648 locuitori.", "O așezare a existat în acest loc încă din secolul al XIII-lea, aici fiind localizată Civitas Milcoviae, reședința Episcopiei de Milcov, catolică."], en: ["Focșani (Romanian: [fokˈʃanʲ] ; Yiddish: פֿאָקשאַן, romanized: Fokshan) is the capital city of Vrancea County in Romania on the banks the river Milcov, in the historical region of Moldavia.", "As of 2022, it has a population of 66,719."] },
    image: ""
  },
  {
    id: "ro-poi-mausoleul-marasesti", type: "historical", parent: "RO-VN", coords: [27.2333, 45.8833],
    name: { de: "Mausoleum Mărășești", hu: "Mărășești-i mauzóleum", ro: "Mausoleul de la Mărășești", en: "Mărășești Mausoleum" },
    description: { de: "Denkmal für die Gefallenen des Ersten Weltkriegs.", hu: "Az első világháború hőseinek emlékműve.", ro: "Monument dedicat eroilor din Primul Război Mondial.", en: "Monument dedicated to the heroes of World War I." },
    facts: { de: ["Die Liste von Kriegsgräberstätten in Rumänien führt Soldatenfriedhöfe und sonstige Kriegsgräberstätten in Rumänien auf."], hu: ["Károly király park (románul: Parcul Carol I) egy közpark Bukarest déli részén, a 4.", "kerületben, az úgynevezett Filaret-negyedben.", "1906-ban hozták létre egy kiállítás helyszíneként; később közparkká alakították át."], ro: ["Mausoleul de la Mărășești este un monument istoric dedicat eroilor Primului Război Mondial.", "Mausoleul a fost ridicat pe locul în care, în vara anului 1917, s-au desfășurat luptele de la Mărășești, soldate cu victoria trupelor române.", "În confruntările de la Mărășești au pierit 480 de ofițeri și 21.000 de soldați români."], en: ["The Mausoleum of Mărășești is a memorial site in Romania containing remains of 5,073 Romanian soldiers and officers killed in the First World War and dedicated to the commemoration of the Battle of Mărășești and Romanian Army members who were killed during World War I.", "The memorial took architects George Cristinel and Constantin Pomponiu 15 years to build and was unveiled on 18 September 1938 by King Carol II.", "The frieze in bas-relief surrounding the base of the dome was sculpted by Cornel Medrea and Ion Jalea."] },
    image: ""
  },
  {
    id: "ro-poi-rezervatia-putna", type: "landmark", parent: "RO-VN", coords: [26.5667, 45.9167],
    name: { de: "Naturpark Putna-Vrancea", hu: "Putna-Vrancea Natúrpark", ro: "Parcul Natural Putna-Vrancea", en: "Putna-Vrancea Natural Park" },
    description: { de: "Schutzgebiet mit Wasserfällen und Wäldern.", hu: "Védett terület vízesésekkel és erdőkkel.", ro: "Arie protejată cu cascade și păduri.", en: "Protected area with waterfalls and forests." },
    facts: { de: ["i3i6 Der Naturpark Putna-Vrancea (rumänisch Parcul Natural Putna) ist ein nach den IUCN-Richtlinien erklärtes Naturschutzgebiet in Rumänien und gehört zur IUCN-Kategorie V."], hu: ["A Putna–Vrancea Natúrpark (románul Parcul Natural Putna–Vrancea) IUCN V-ös besorolású védett terület Romániában Vrancea megye észak-nyugati részén, a Háromszéki-havasok vidékén."], ro: ["Parcul Natural Putna-Vrancea este o arie protejată de interes național, ce corespunde categoriei a V-a IUCN (parc natural), situată în sud-vestul Moldovei, pe teritoriul județului Vrancea."], en: ["The Putna-Vrancea Natural Park (Romanian: Parcul Natural Putna-Vrancea) is a protected area (natural park category V IUCN) situate in Romania, in administrative territory of Vrancea County."] },
    image: ""
  }
];

export const romaniaAllPois: POI[] = [
  ...romaniaCountry,
  ...romaniaRegions,
  ...romaniaCities,
  ...romaniaNature,
  ...romaniaHistorical,
  ...romaniaLandmarks,
  ...romaniaCulture,
  ...romaniaTraditions,
  ...romaniaWildlife,
  ...romaniaFolk,
  ...romaniaExtraPois,
];
