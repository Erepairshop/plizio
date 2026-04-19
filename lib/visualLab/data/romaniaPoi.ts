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
      de: "Hauptstadt Rumäniens und größtes wirtschaftliches, politisches und kulturelles Zentrum des Landes. Prägend sind der Parlamentspalast, der Altstadt Lipscani und elegante Boulevards im Pariser Stil.",
      hu: "Románia fővárosa, az ország legnagyobb gazdasági, politikai és kulturális központja. Meghatározó a Parlament Palotája, a Lipscani óváros és a párizsi stílusú körutak.",
      ro: "Capitala României și cel mai important centru economic, politic și cultural al țării. Emblematic: Palatul Parlamentului, centrul vechi Lipscani, bulevarde în stil parizian.",
      en: "Romania's capital and largest economic, political and cultural center. Landmarks include the Palace of the Parliament, the Lipscani old town and Parisian-style boulevards.",
    },
    facts: { de: ["~1,9 Mio. Einwohner.", "Parlamentspalast: 3.930.000 m³.", "\"Kleines Paris des Ostens\".", "Flughafen Otopeni."], hu: ["~1,9 millió lakos.", "Parlament Palotája: 3 930 000 m³.", "\"Kelet kis Párizsa\".", "Otopeni repülőtér."], ro: ["Aproximativ 1,9 milioane locuitori.", "Palatul Parlamentului – 3.930.000 m³.", "\"Micul Paris\".", "Aeroportul Otopeni."], en: ["About 1.9 million inhabitants.", "Palace of the Parliament: 3.93 million m³.", "\"Little Paris of the East\".", "Otopeni Airport."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-bucuresti.webp",
  },
  {
    id: "city-cluj-napoca", type: "state-capital", parent: "RO-CJ", coords: [23.6236, 46.7712],
    name: { de: "Klausenburg", hu: "Kolozsvár", ro: "Cluj-Napoca", en: "Cluj-Napoca" },
    description: { de: "Historische Hauptstadt Siebenbürgens und bedeutende Universitätsstadt.", hu: "Erdély történelmi fővárosa és kiemelkedő egyetemváros.", ro: "Capitala istorică a Transilvaniei, oraș universitar important.", en: "Historical capital of Transylvania and a major university city." },
    facts: { de: ["Babeș-Bolyai-Universität.", "Michaelskirche am Zentralplatz.", "Matthias-Corvinus-Haus."], hu: ["Babeș-Bolyai Tudományegyetem.", "Szent Mihály-templom a Főtéren.", "Mátyás király szülőháza."], ro: ["Universitatea Babeș-Bolyai.", "Biserica Sf. Mihail.", "Casa Matei Corvin."], en: ["Babeș-Bolyai University.", "St. Michael's Church on the main square.", "Matthias Corvinus's birthplace."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-cluj-napoca.webp",
  },
  {
    id: "city-timisoara", type: "state-capital", parent: "RO-TM", coords: [21.2087, 45.7489],
    name: { de: "Temeswar", hu: "Temesvár", ro: "Timișoara", en: "Timișoara" },
    description: { de: "Multikulturelle Banater Metropole, Ausgangspunkt der Revolution 1989.", hu: "Multikulturális bánsági metropolisz, az 1989-es forradalom kiindulópontja.", ro: "Metropolă multiculturală a Banatului, începutul Revoluției din 1989.", en: "Multicultural Banat metropolis, birthplace of the 1989 Revolution." },
    facts: { de: ["Erste gasbeleuchtete Stadt Europas (1884).", "Europäische Kulturhauptstadt 2023.", "Opernplatz & Siegesplatz."], hu: ["Európa első gázvilágítású városa (1884).", "2023 Európa kulturális fővárosa.", "Operatér és Győzelem tér."], ro: ["Primul oraș european cu iluminat public cu gaz (1884).", "Capitală Culturală Europeană 2023.", "Piața Operei și Piața Victoriei."], en: ["First European city with gas street lighting (1884).", "European Capital of Culture 2023.", "Opera Square and Victory Square."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    historyYear: 1989, historyPeriod: "modern",
    image: "/geo-images/romania/city-timisoara.webp",
  },
  {
    id: "city-iasi", type: "state-capital", parent: "RO-IS", coords: [27.5848, 47.1585],
    name: { de: "Jassy", hu: "Jászvásár", ro: "Iași", en: "Iași" },
    description: { de: "Kulturelle Hauptstadt der Moldau mit reicher Universitätstradition.", hu: "Moldva kulturális fővárosa gazdag egyetemi hagyományokkal.", ro: "Capitala culturală a Moldovei, cu tradiție universitară bogată.", en: "Cultural capital of Moldavia with rich university tradition." },
    facts: { de: ["Kulturpalast.", "Alexandru-Ioan-Cuza-Universität (1860).", "Metropolitankathedrale."], hu: ["Kultúrpalota.", "Alexandru Ioan Cuza Egyetem (1860).", "Metropolita-székesegyház."], ro: ["Palatul Culturii.", "Universitatea Alexandru Ioan Cuza (1860).", "Mitropolia Moldovei."], en: ["Palace of Culture.", "Alexandru Ioan Cuza University (1860).", "Metropolitan Cathedral."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-iasi.webp",
  },
  {
    id: "city-constanta", type: "state-capital", parent: "RO-CT", coords: [28.6348, 44.1598],
    name: { de: "Konstanza", hu: "Konstanca", ro: "Constanța", en: "Constanța" },
    description: { de: "Größter Seehafen Rumäniens am Schwarzen Meer, antikes Tomis.", hu: "Románia legnagyobb tengeri kikötője a Fekete-tengeren, az ókori Tomis.", ro: "Cel mai mare port maritim al României, anticul Tomis.", en: "Romania's largest sea port on the Black Sea, ancient Tomis." },
    facts: { de: ["Exil Ovids (ab 8 n. Chr.).", "Casino am Meer.", "Römisches Mosaik."], hu: ["Ovidius száműzetésének helye (Kr. u. 8-tól).", "Tengerparti kaszinó.", "Római mozaik."], ro: ["Locul exilului lui Ovidiu (din 8 d.Hr.).", "Cazinoul de la mare.", "Edificiul roman cu mozaic."], en: ["Ovid's exile (from 8 AD).", "Seaside Casino.", "Roman mosaic edifice."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-constanta.webp",
  },
  {
    id: "city-brasov", type: "state-capital", parent: "RO-BV", coords: [25.6104, 45.6427],
    name: { de: "Kronstadt", hu: "Brassó", ro: "Brașov", en: "Brașov" },
    description: { de: "Siebenbürgische Stadt mit gotischer Altstadt am Fuß des Tâmpa.", hu: "Erdélyi város gótikus óvárossal a Cenk-hegy lábánál.", ro: "Oraș transilvănean, cu centru gotic la poalele Tâmpei.", en: "Transylvanian city with a Gothic old town at the foot of Mount Tâmpa." },
    facts: { de: ["Schwarze Kirche (14.–15. Jh.).", "Ratsplatz.", "Nähe zu Bran und Poiana Brașov."], hu: ["Fekete templom (14–15. század).", "Tanácstér.", "Közel Branhoz és Poiana Brașovhoz."], ro: ["Biserica Neagră (sec. XIV–XV).", "Piața Sfatului.", "Aproape de Bran și Poiana Brașov."], en: ["Black Church (14th–15th c.).", "Council Square.", "Close to Bran and Poiana Brașov."] },
    subjects: ["sachkunde", "geographie", "geschichte"], grades: [3, 4, 5, 6, 7, 8],
    image: "/geo-images/romania/city-brasov.webp",
  },
  {
    id: "city-craiova", type: "state-capital", parent: "RO-DJ", coords: [23.7949, 44.3302],
    name: { de: "Craiova", hu: "Craiova", ro: "Craiova", en: "Craiova" },
    description: { de: "Hauptstadt Olteniens, Wirtschafts- und Universitätszentrum.", hu: "Olténia fővárosa, gazdasági és egyetemi központ.", ro: "Capitala Olteniei, centru economic și universitar.", en: "Capital of Oltenia, an economic and university hub." },
    facts: { de: ["Oltenien-Museum.", "Madonna Dudu-Kirche.", "Ford-Werk."], hu: ["Olténia Múzeum.", "Madonna Dudu templom.", "Ford-gyár."], ro: ["Muzeul Olteniei.", "Biserica Madona Dudu.", "Uzinele Ford."], en: ["Museum of Oltenia.", "Madonna Dudu Church.", "Ford plant."] },
    image: "/geo-images/romania/city-craiova.webp",
  },
  {
    id: "city-galati", type: "state-capital", parent: "RO-GL", coords: [28.0323, 45.4353],
    name: { de: "Galați", hu: "Galac", ro: "Galați", en: "Galați" },
    description: { de: "Größter Donauhafen Rumäniens und Werftstadt.", hu: "Románia legnagyobb dunai kikötője és hajógyártó városa.", ro: "Cel mai mare port dunărean și oraș de șantier naval.", en: "Romania's largest Danube port and shipbuilding city." },
    facts: { de: ["Größtes Stahlwerk Rumäniens (Liberty).", "Donauuferpromenade.", "Nähe Prut-Mündung."], hu: ["Románia legnagyobb acélműve (Liberty).", "Dunai sétány.", "Közel a Prut torkolatához."], ro: ["Cel mai mare combinat siderurgic (Liberty).", "Faleza Dunării.", "Aproape de vărsarea Prutului."], en: ["Largest steel mill (Liberty).", "Danube waterfront.", "Near the Prut mouth."] },
    image: "/geo-images/romania/city-galati.webp",
  },
  {
    id: "city-oradea", type: "state-capital", parent: "RO-BH", coords: [21.9189, 47.0722],
    name: { de: "Großwardein", hu: "Nagyvárad", ro: "Oradea", en: "Oradea" },
    description: { de: "Jugendstil-Juwel im Nordwesten an der Körösch.", hu: "Szecessziós ékszerdoboz északnyugaton a Körös partján.", ro: "Bijuterie Art Nouveau din nord-vest, pe Criș.", en: "Art Nouveau gem in the northwest, on the Criș." },
    facts: { de: ["Festung Oradea.", "Schwarzer-Adler-Passage.", "Thermalbäder Felix."], hu: ["Nagyváradi vár.", "Fekete Sas passzázs.", "Félixfürdő."], ro: ["Cetatea Oradea.", "Palatul Vulturul Negru.", "Băile Felix."], en: ["Oradea Fortress.", "Black Eagle Palace.", "Băile Felix."] },
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
    description: { de: "Siebenbürgisches Kulturjuwel mit sächsischem Erbe.", hu: "Erdélyi kulturális ékszerdoboz szász örökséggel.", ro: "Bijuterie culturală transilvăneană cu moștenire săsească.", en: "Transylvanian cultural gem with Saxon heritage." },
    facts: { de: ["Kulturhauptstadt 2007.", "Die \"Augen der Stadt\" (Dachluken).", "Brukenthal-Museum."], hu: ["2007 Európa kulturális fővárosa.", "A város \"szemei\" (padlás­ablakok).", "Brukenthal Múzeum."], ro: ["Capitală Culturală 2007.", "\"Ochii orașului\".", "Muzeul Brukenthal."], en: ["European Capital of Culture 2007.", "The \"Eyes of the City\".", "Brukenthal Museum."] },
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
    image: ""
  },
  {
    id: "cultura-muzeul-taranului", type: "landmark", parent: "RO-B", coords: [26.0836, 44.4544],
    name: { ro: "Muzeul Țăranului Român", en: "Museum of the Romanian Peasant", hu: "Román Parasztmúzeum", de: "Museum des rumänischen Bauern" },
    description: { ro: "Muzeu dedicat artei și tradițiilor populare.", en: "Museum dedicated to folk art and traditions.", hu: "Népművészetnek és hagyományoknak szentelt múzeum.", de: "Museum für Volkskunst und Traditionen." },
    facts: { ro: ["Clădire în stil neoromânesc."], en: ["Neo-Romanian style building."], hu: ["Neoromán stílusú épület."], de: ["Gebäude im neo-rumänischen Stil."] },
    image: ""
  },
  {
    id: "cultura-opera-cluj", type: "landmark", parent: "RO-CJ", coords: [23.5969, 46.7704],
    name: { ro: "Opera Națională Română Cluj-Napoca", en: "Romanian National Opera, Cluj-Napoca", hu: "Kolozsvári Román Nemzeti Opera", de: "Rumänische Nationaloper Cluj-Napoca" },
    description: { ro: "Prima instituție lirică a țării.", en: "The country's first lyrical institution.", hu: "Az ország első lírai intézménye.", de: "Die erste lyrische Einrichtung des Landes." },
    facts: { ro: ["Inaugurată în 1919."], en: ["Inaugurated in 1919."], hu: ["1919-ben nyílt meg."], de: ["1919 eingeweiht."] },
    image: ""
  },
  {
    id: "cultura-festivalul-enab", type: "landmark", parent: "RO-SB", coords: [24.15, 45.8],
    name: { ro: "FITS - Festivalul Internațional de Teatru de la Sibiu", en: "Sibiu International Theatre Festival", hu: "Nagyszebeni Nemzetközi Színházi Fesztivál", de: "Internationales Theaterfestival Sibiu" },
    description: { ro: "Unul dintre cele mai mari festivaluri de teatru din lume.", en: "One of the largest theatre festivals in the world.", hu: "A világ egyik legnagyobb színházi fesztiválja.", de: "Eines der größten Theaterfestivals der Welt." },
    facts: { ro: ["Are loc anual în Sibiu."], en: ["Takes place annually in Sibiu."], hu: ["Évente kerül megrendezésre Nagyszebenben."], de: ["Findet jährlich in Sibiu statt."] },
    image: ""
  },
  {
    id: "cultura-muzeul-brukenthal", type: "landmark", parent: "RO-SB", coords: [24.151, 45.796],
    name: { ro: "Muzeul Național Brukenthal", en: "Brukenthal National Museum", hu: "Brukenthal Nemzeti Múzeum", de: "Brukenthal-Nationalmuseum" },
    description: { ro: "Cel mai vechi muzeu din România.", en: "The oldest museum in Romania.", hu: "Románia legrégebbi múzeuma.", de: "Das älteste Museum in Rumänien." },
    facts: { ro: ["Fondat de Samuel von Brukenthal."], en: ["Founded by Samuel von Brukenthal."], hu: ["Samuel von Brukenthal alapította."], de: ["Gegründet von Samuel von Brukenthal."] },
    image: ""
  },
  {
    id: "cultura-palatul-culturii", type: "landmark", parent: "RO-IS", coords: [27.585, 47.157],
    name: { ro: "Palatul Culturii Iași", en: "Palace of Culture Iași", hu: "Jászvásári Kultúrpalota", de: "Kulturpalast Iași" },
    description: { ro: "Edificiu emblematic în stil neogotic.", en: "Iconic neo-Gothic building.", hu: "Emblematikus neogótikus épület.", de: "Ikonisches neugotisches Gebäude." },
    facts: { ro: ["Găzduiește patru muzee mari."], en: ["Houses four major museums."], hu: ["Négy nagy múzeumnak ad otthont."], de: ["Beherbergt vier große Museen."] },
    image: ""
  },
  {
    id: "cultura-untold", type: "landmark", parent: "RO-CJ", coords: [23.572, 46.768],
    name: { ro: "UNTOLD Festival", en: "UNTOLD Festival", hu: "UNTOLD Fesztivál", de: "UNTOLD Festival" },
    description: { ro: "Cel mai mare festival de muzică din România.", en: "The largest music festival in Romania.", hu: "Románia legnagyobb zenei fesztiválja.", de: "Das größte Musikfestival in Rumänien." },
    facts: { ro: ["Atrage sute de mii de participanți anual."], en: ["Attracts hundreds of thousands of attendees annually."], hu: ["Évente több százezer résztvevőt vonz."], de: ["Zieht jährlich Hunderttausende von Besuchern an."] },
    image: ""
  },
  {
    id: "cultura-saga-festival", type: "landmark", parent: "RO-B", coords: [26.08, 44.47],
    name: { ro: "SAGA Festival", en: "SAGA Festival", hu: "SAGA Fesztivál", de: "SAGA Festival" },
    description: { ro: "Festival de muzică electronică din București.", en: "Electronic music festival in Bucharest.", hu: "Elektronikus zenei fesztivál Bukarestben.", de: "Elektronisches Musikfestival in Bukarest." },
    facts: { ro: ["Se desfășoară în București."], en: ["Takes place in Bucharest."], hu: ["Bukarestben rendezik."], de: ["Findet in Bukarest statt."] },
    image: ""
  },
  {
    id: "cultura-muzeul-antipa", type: "landmark", parent: "RO-B", coords: [26.085, 44.453],
    name: { ro: "Muzeul Grigore Antipa", en: "Grigore Antipa Museum", hu: "Grigore Antipa Múzeum", de: "Grigore-Antipa-Museum" },
    description: { ro: "Muzeu național de istorie naturală.", en: "National museum of natural history.", hu: "Nemzeti természettudományi múzeum.", de: "Nationales naturhistorisches Museum." },
    facts: { ro: ["Una dintre cele mai mari colecții din Europa de Est."], en: ["One of the largest collections in Eastern Europe."], hu: ["Kelet-Európa egyik legnagyobb gyűjteménye."], de: ["Eine der größten Sammlungen in Osteuropa."] },
    image: ""
  },
  {
    id: "cultura-opera-timisoara", type: "landmark", parent: "RO-TM", coords: [21.226, 45.753],
    name: { ro: "Opera Națională Română Timișoara", en: "Romanian National Opera Timișoara", hu: "Temesvári Román Nemzeti Opera", de: "Rumänische Nationaloper Timișoara" },
    description: { ro: "Instituție culturală de prestigiu în Banat.", en: "Prestigious cultural institution in Banat.", hu: "Rangos kulturális intézmény a Bánságban.", de: "Renommierte kulturelle Einrichtung im Banat." },
    facts: { ro: ["Situată în Piața Victoriei."], en: ["Located in Victory Square."], hu: ["A Győzelem téren található."], de: ["Am Siegesplatz gelegen."] },
    image: ""
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
    image: ""
  },
  {
    id: "trad-calusari", type: "historical", parent: "RO-OT", coords: [24.36, 44.43],
    name: { ro: "Dansul Călușarilor", en: "Călușari Dance", hu: "Călușari tánc", de: "Călușari-Tanz" },
    description: { ro: "Dans tradițional românesc cu funcție rituală.", en: "Traditional Romanian dance with a ritual function.", hu: "Hagyományos román rituális tánc.", de: "Traditioneller rumänischer Ritualtanz." },
    facts: { ro: ["Inclus în patrimoniul UNESCO din 2005."], en: ["Included in UNESCO heritage since 2005."], hu: ["2005 óta az UNESCO örökség része."], de: ["Seit 2005 im UNESCO-Kulturerbe."] },
    image: ""
  },
  {
    id: "trad-mucenici", type: "historical", parent: "RO", coords: [26.0, 44.5],
    name: { ro: "Sărbătoarea Mucenicilor", en: "Martyrs' Day (Mucenici)", hu: "Mucenici ünnepe", de: "Tag der Märtyrer (Mucenici)" },
    description: { ro: "Tradiție culinară și religioasă pe 9 martie.", en: "Culinary and religious tradition on March 9th.", hu: "Kulináris és vallási hagyomány március 9-én.", de: "Kulinarische und religiöse Tradition am 9. März." },
    facts: { ro: ["Se prepară colaci în formă de 8."], en: ["Figure-8 shaped pastries are made."], hu: ["8-as alakú kalácsokat készítenek."], de: ["Es werden Gebäcke in Form einer 8 gebacken."] },
    image: ""
  },
  {
    id: "trad-paste", type: "historical", parent: "RO", coords: [25.5, 46.0],
    name: { ro: "Tradiții de Paște", en: "Easter Traditions", hu: "Húsvéti hagyományok", de: "Ostertraditionen" },
    description: { ro: "Încondeierea ouălor și slujba de Înviere.", en: "Egg painting and the Resurrection service.", hu: "Tojásírás és a feltámadási mise.", de: "Eier bemalen und der Auferstehungsgottesdienst." },
    facts: { ro: ["Ouăle roșii sunt un simbol principal."], en: ["Red eggs are a main symbol."], hu: ["A piros tojások a fő szimbólumok."], de: ["Rote Eier sind ein Hauptsymbol."] },
    image: ""
  },
  {
    id: "trad-sanzaiene", type: "historical", parent: "RO", coords: [24.0, 46.5],
    name: { ro: "Sânzienele", en: "Sânziene (Midsummer)", hu: "Sânziene (Szentivánéj)", de: "Sânziene (Mittsommer)" },
    description: { ro: "Sărbătoare de vară legată de recolte și dragoste.", en: "Summer festival related to harvest and love.", hu: "Nyári ünnep a terméshez és a szerelemhez kötődően.", de: "Sommerfest im Zusammenhang mit Ernte und Liebe." },
    facts: { ro: ["Se sărbătorește pe 24 iunie."], en: ["Celebrated on June 24th."], hu: ["Június 24-én ünneplik."], de: ["Wird am 24. Juni gefeiert."] },
    image: ""
  },
  {
    id: "trad-colindat", type: "historical", parent: "RO", coords: [25.0, 47.0],
    name: { ro: "Colindatul de Crăciun", en: "Christmas Caroling", hu: "Karácsonyi kántálás", de: "Weihnachtssingen" },
    description: { ro: "Tradiție de iarnă în care grupuri merg din casă în casă.", en: "Winter tradition where groups go from house to house.", hu: "Téli hagyomány, amikor csoportok házról házra járnak.", de: "Wintertradition, bei der Gruppen von Haus zu Haus gehen." },
    facts: { ro: ["Colindatul de ceată bărbătească este în patrimoniul UNESCO."], en: ["Men's group caroling is in UNESCO heritage."], hu: ["A férficsoportos kántálás az UNESCO örökség része."], de: ["Das Singen in Männergruppen gehört zum UNESCO-Kulturerbe."] },
    image: ""
  },
  {
    id: "trad-dragobete", type: "historical", parent: "RO", coords: [23.5, 45.5],
    name: { ro: "Dragobetele", en: "Dragobete (Lovers' Day)", hu: "Dragobete (Szerelmesek napja)", de: "Dragobete (Tag der Liebenden)" },
    description: { ro: "Sărbătoarea tradițională a iubirii la români.", en: "Traditional Romanian celebration of love.", hu: "A szerelem hagyományos román ünnepe.", de: "Traditionelles rumänisches Fest der Liebe." },
    facts: { ro: ["Sărbătorit pe 24 februarie."], en: ["Celebrated on February 24th."], hu: ["Február 24-én ünneplik."], de: ["Wird am 24. Februar gefeiert."] },
    image: ""
  },
  {
    id: "trad-ignatul", type: "historical", parent: "RO", coords: [24.5, 46.0],
    name: { ro: "Ignatul", en: "Ignat Day (Pig Slaughter)", hu: "Disznóvágás (Ignat)", de: "Ignattag (Schweineschlachten)" },
    description: { ro: "Tradiție pre-crăciun care implică tăierea porcului.", en: "Pre-Christmas tradition involving pig slaughtering.", hu: "Karácsony előtti disznóvágás hagyomanya.", de: "Vorweihnachtliche Tradition des Schweineschlachtens." },
    facts: { ro: ["Are loc pe 20 decembrie."], en: ["Takes place on December 20th."], hu: ["December 20-án zajlik."], de: ["Findet am 20. Dezember statt."] },
    image: ""
  },
  {
    id: "trad-boboteaza", type: "historical", parent: "RO", coords: [26.0, 45.0],
    name: { ro: "Boboteaza", en: "Epiphany", hu: "Vízkereszt", de: "Dreikönigsfest" },
    description: { ro: "Sărbătoare de iarnă cu sfințirea apelor.", en: "Winter holiday with the blessing of the waters.", hu: "Téli ünnep a vizek megszentelésével.", de: "Winterfest mit der Segnung der Gewässer." },
    facts: { ro: ["Sărbătorită pe 6 ianuarie."], en: ["Celebrated on January 6th."], hu: ["Január 6-án ünneplik."], de: ["Wird am 6. Januar gefeiert."] },
    image: ""
  },
  {
    id: "trad-paparudele", type: "historical", parent: "RO", coords: [25.0, 44.0],
    name: { ro: "Paparudele", en: "Paparuda", hu: "Paparuda (Esőtánc)", de: "Paparuda (Regentanz)" },
    description: { ro: "Ritual arhaic pentru invocarea ploii.", en: "Archaic ritual for invoking rain.", hu: "Archaikus rituálé az eső hívására.", de: "Archaisches Ritual zur Beschwörung von Regen." },
    facts: { ro: ["Practicat în perioade de secetă."], en: ["Practiced during periods of drought."], hu: ["Aszály idején gyakorolják."], de: ["Wird während Dürreperioden praktiziert."] },
    image: ""
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
    image: ""
  },
  {
    id: "wild-rasul", type: "animal-habitat", parent: "RO-NT", coords: [26.0, 47.0],
    name: { ro: "Râsul (Lynx)", en: "Carpathian Lynx", hu: "Kárpáti hiúz", de: "Karpatenluchs" },
    description: { ro: "Cea mai mare felină sălbatică din Europa.", en: "The largest wild feline in Europe.", hu: "Európa legnagyobb vadmacskája.", de: "Die größte Wildkatze in Europa." },
    facts: { ro: ["Trăiește în păduri dese."], en: ["Lives in dense forests."], hu: ["Sűrű erdőkben él."], de: ["Lebt in dichten Wäldern."] },
    image: ""
  },
  {
    id: "wild-zimbrul", type: "animal-habitat", parent: "RO-NT", coords: [26.2, 47.2],
    name: { ro: "Zimbrul European", en: "European Bison", hu: "Európai bölény", de: "Wisent" },
    description: { ro: "Cel mai mare mamifer terestru din Europa, reintrodus în natură.", en: "The largest land mammal in Europe, reintroduced.", hu: "Európa legnagyobb szárazföldi emlőse, visszatelepítve.", de: "Das größte Landsäugetier Europas, wieder eingeführt." },
    facts: { ro: ["Prezent în rezervații precum Vânători-Neamț."], en: ["Present in reserves like Vânători-Neamț."], hu: ["Vânători-Neamț rezervátumában él."], de: ["Präsent im Reservat Vânători-Neamț."] },
    image: ""
  },
  {
    id: "wild-vidra", type: "animal-habitat", parent: "RO-TL", coords: [29.0, 45.0],
    name: { ro: "Vidra", en: "Eurasian Otter", hu: "Vidra", de: "Fischotter" },
    description: { ro: "Mamifer acvatic întâlnit în Delta Dunării și râuri.", en: "Aquatic mammal found in the Danube Delta and rivers.", hu: "A Duna-deltában és a folyókban élő vízi emlős.", de: "Wassersäugetier, das im Donaudelta und in Flüssen vorkommt." },
    facts: { ro: ["Este un indicator al calității apei."], en: ["It is an indicator of water quality."], hu: ["A vízminőség indikátora."], de: ["Es ist ein Indikator für die Wasserqualität."] },
    image: ""
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
    image: ""
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
    image: ""
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
    image: ""
  },
  {
    id: "folk-dobrogea", type: "region", parent: "RO-TL", coords: [28.5, 44.8],
    name: { ro: "Tradiții Dobrogene", en: "Dobruja Traditions", hu: "Dobrudzsai hagyományok", de: "Dobrudscha Traditionen" },
    description: { ro: "Mix cultural unic între români, turci, tătari și lipoveni.", en: "Unique cultural mix between Romanians, Turks, Tatars, and Lipovans.", hu: "Egyedülálló kulturális keverék románok, törökök, tatárok és lipovánok között.", de: "Einzigartige kulturelle Mischung aus Rumänen, Türken, Tataren und Lippowanern." },
    facts: { ro: ["Gastronomia include pește și plăcinte."], en: ["Gastronomy includes fish and pies."], hu: ["A gasztronómia halat és lepényt tartalmaz."], de: ["Gastronomie umfasst Fisch und Pasteten."] },
    image: ""
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
    id: "ro-poi-moneasa", type: "landmark", parent: "RO-AR", coords: [46.4583, 22.2583],
    name: { de: "Moneasa", hu: "Menyháza", ro: "Stațiunea Moneasa", en: "Moneasa Resort" },
    description: { de: "Bekannter Kurort.", hu: "Híres gyógyüdülőhely.", ro: "Stațiune balneoclimaterică cunoscută.", en: "Well-known spa resort." },
    image: ""
  },
  {
    id: "ro-poi-cetatea-siria", type: "historical", parent: "RO-AR", coords: [46.2667, 21.6333],
    name: { de: "Burg Șiria", hu: "Világosvári vár", ro: "Cetatea Șiria", en: "Șiria Fortress" },
    description: { de: "Ruinen einer mittelalterlichen Burg.", hu: "Egy középkori vár romjai.", ro: "Ruinele unei cetăți medievale.", en: "Ruins of a medieval fortress." },
    image: ""
  },

  // BACĂU (RO-BC)
  {
    id: "ro-poi-salina-targu-ocna", type: "landmark", parent: "RO-BC", coords: [46.2731, 26.5986],
    name: { de: "Salzbergwerk Târgu Ocna", hu: "Aknavásár fémbánya", ro: "Salina Târgu Ocna", en: "Târgu Ocna Salt Mine" },
    description: { de: "Touristisches Salzbergwerk.", hu: "Turisztikai sóbánya.", ro: "Salină turistică.", en: "Tourist salt mine." },
    image: ""
  },
  {
    id: "ro-poi-slanic-moldova", type: "landmark", parent: "RO-BC", coords: [46.2069, 26.4386],
    name: { de: "Slănic Moldova", hu: "Szlanikfürdő", ro: "Slănic Moldova", en: "Slănic Moldova" },
    description: { de: "Kurort mit Mineralquellen.", hu: "Gyógyüdülőhely ásványvízforrásokkal.", ro: "Stațiune cu izvoare minerale.", en: "Resort with mineral springs." },
    image: ""
  },

  // BIHOR (RO-BH)
  {
    id: "ro-poi-pestera-ursilor", type: "landmark", parent: "RO-BH", coords: [46.5531, 22.5683],
    name: { de: "Bärenhöhle", hu: "Medve-barlang", ro: "Peștera Urșilor", en: "Bears' Cave" },
    description: { de: "Höhle mit Höhlenbärenfossilien.", hu: "Barlang barlangi medve fosszíliákkal.", ro: "Peșteră cu fosile de urși de peșteră.", en: "Cave with cave bear fossils." },
    image: ""
  },
  {
    id: "ro-poi-baile-felix", type: "landmark", parent: "RO-BH", coords: [46.9833, 21.9833],
    name: { de: "Thermalbad Felix", hu: "Félixfürdő", ro: "Băile Felix", en: "Băile Felix" },
    description: { de: "Größtes Thermalbad in Rumänien.", hu: "Románia legnagyobb termálfürdője.", ro: "Cea mai mare stațiune balneară din România.", en: "Largest thermal spa in Romania." },
    image: ""
  },

  // BISTRIȚA-NĂSĂUD (RO-BN)
  {
    id: "ro-poi-bistrita", type: "city", parent: "RO-BN", coords: [47.1333, 24.5],
    name: { de: "Bistritz", hu: "Beszterce", ro: "Bistrița", en: "Bistrița" },
    description: { de: "Historische Stadt in Siebenbürgen.", hu: "Történelmi város Erdélyben.", ro: "Oraș istoric în Transilvania.", en: "Historic city in Transylvania." },
    image: ""
  },
  {
    id: "ro-poi-parcul-rodnei", type: "landmark", parent: "RO-BN", coords: [47.5333, 24.8],
    name: { de: "Nationalpark Rodna-Gebirge", hu: "Radnai-havasok Nemzeti Park", ro: "Parcul Național Munții Rodnei", en: "Rodna Mountains National Park" },
    description: { de: "Höchstes Gebirge der Ostkarpaten.", hu: "A Keleti-Kárpátok legmagasabb hegysége.", ro: "Cei mai înalți munți din Carpații Orientali.", en: "Highest mountains of the Eastern Carpathians." },
    image: ""
  },
  {
    id: "ro-poi-lacul-colibita", type: "lake", parent: "RO-BN", coords: [47.1667, 24.8833],
    name: { de: "Colibița-See", hu: "Kolibica-tó", ro: "Lacul Colibița", en: "Colibița Lake" },
    description: { de: "Stausee mit sauberer Bergluft.", hu: "Víztározó tiszta hegyi levegővel.", ro: "Lac de acumulare cu aer montan curat.", en: "Reservoir with clean mountain air." },
    image: ""
  },

  // BOTOȘANI (RO-BT)
  {
    id: "ro-poi-botosani", type: "city", parent: "RO-BT", coords: [47.7408, 26.6664],
    name: { de: "Botoschan", hu: "Botosán", ro: "Botoșani", en: "Botoșani" },
    description: { de: "Kulturstadt im Norden der Moldau.", hu: "Kulturális város Észak-Moldvában.", ro: "Oraș cultural din nordul Moldovei.", en: "Cultural city in northern Moldavia." },
    image: ""
  },
  {
    id: "ro-poi-casa-eminescu", type: "historical", parent: "RO-BT", coords: [47.7667, 26.55],
    name: { de: "Eminescu Gedenkhaus", hu: "Eminescu Emlékház", ro: "Casa Memorială Mihai Eminescu", en: "Mihai Eminescu Memorial House" },
    description: { de: "Geburtshaus des Nationaldichters.", hu: "A nemzeti költő szülőháza.", ro: "Casa unde s-a născut poetul național.", en: "Birthplace of the national poet." },
    image: ""
  },
  {
    id: "ro-poi-lacul-stanca", type: "lake", parent: "RO-BT", coords: [47.8167, 27.2167],
    name: { de: "Stânca-Costești See", hu: "Stânca-Costești-tó", ro: "Lacul Stânca-Costești", en: "Stânca-Costești Lake" },
    description: { de: "Großer Stausee am Fluss Prut.", hu: "Nagy víztározó a Prut folyón.", ro: "Mare lac de acumulare pe râul Prut.", en: "Large reservoir on the Prut river." },
    image: ""
  },

  // BRĂILA (RO-BR)
  {
    id: "ro-poi-braila", type: "city", parent: "RO-BR", coords: [45.2667, 27.9667],
    name: { de: "Mühlbach", hu: "Brăila", ro: "Brăila", en: "Brăila" },
    description: { de: "Wichtige Hafenstadt an der Donau.", hu: "Fontos dunai kikötőváros.", ro: "Important port la Dunăre.", en: "Important Danube port city." },
    image: ""
  },
  {
    id: "ro-poi-insula-mica", type: "landmark", parent: "RO-BR", coords: [44.8833, 27.95],
    name: { de: "Naturpark Kleine Brăila-Insel", hu: "Kis-Brăila Sziget Natúrpark", ro: "Parcul Natural Balta Mică a Brăilei", en: "Small Brăila Island Natural Park" },
    description: { de: "Feuchtgebiet und Naturschutzgebiet.", hu: "Vizes élőhely és természetvédelmi terület.", ro: "Zonă umedă și rezervație naturală.", en: "Wetland and nature reserve." },
    image: ""
  },
  {
    id: "ro-poi-teatrul-filotti", type: "landmark", parent: "RO-BR", coords: [45.2719, 27.9731],
    name: { de: "Maria Filotti Theater", hu: "Maria Filotti Színház", ro: "Teatrul Maria Filotti", en: "Maria Filotti Theatre" },
    description: { de: "Historisches Theatergebäude.", hu: "Történelmi színházépület.", ro: "Clădire istorică a teatrului.", en: "Historical theater building." },
    image: ""
  },

  // BUZĂU (RO-BZ)
  {
    id: "ro-poi-focul-viu", type: "landmark", parent: "RO-BZ", coords: [45.5417, 26.5444],
    name: { de: "Lebendiges Feuer", hu: "Élő tűz", ro: "Focul Viu", en: "Living Fire" },
    description: { de: "Erdgasflammen aus dem Boden.", hu: "Földgázlángok a talajból.", ro: "Flăcări de gaze naturale din pământ.", en: "Natural gas flames coming from the ground." },
    image: ""
  },
  {
    id: "ro-poi-lacul-vulturilor", type: "lake", parent: "RO-BZ", coords: [45.5033, 26.0969],
    name: { de: "Adlersee", hu: "Sasok tava", ro: "Lacul Vulturilor", en: "Eagles' Lake" },
    description: { de: "Periglazialer See im Siriu-Gebirge.", hu: "Periglaciális tó a Sziryu-hegységben.", ro: "Lac periglaciar în Munții Siriu.", en: "Periglacial lake in the Siriu Mountains." },
    image: ""
  },

  // CĂLĂRAȘI (RO-CL)
  {
    id: "ro-poi-calarasi", type: "city", parent: "RO-CL", coords: [44.2, 27.3333],
    name: { de: "Călărași", hu: "Călărași", ro: "Călărași", en: "Călărași" },
    description: { de: "Stadt an der Donau (Borcea-Arm).", hu: "Város a Duna (Borcea-ág) partján.", ro: "Oraș pe malul brațului Borcea al Dunării.", en: "City on the Borcea branch of the Danube." },
    image: ""
  },
  {
    id: "ro-poi-bratul-borcea", type: "river", parent: "RO-CL", coords: [44.25, 27.75],
    name: { de: "Borcea-Arm", hu: "Borcea-ág", ro: "Brațul Borcea", en: "Borcea Branch" },
    description: { de: "Nebenarm der Donau.", hu: "A Duna mellékága.", ro: "Braț secundar al Dunării.", en: "Secondary branch of the Danube." },
    image: ""
  },
  {
    id: "ro-poi-muzeul-dunarii", type: "landmark", parent: "RO-CL", coords: [44.195, 27.33],
    name: { de: "Museum der Unteren Donau", hu: "Alsó-Duna Múzeum", ro: "Muzeul Dunării de Jos", en: "Lower Danube Museum" },
    description: { de: "Museum für Archäologie und Geschichte.", hu: "Régészeti és történelmi múzeum.", ro: "Muzeu de arheologie și istorie.", en: "Museum of archeology and history." },
    image: ""
  },

  // CARAȘ-SEVERIN (RO-CS)
  {
    id: "ro-poi-cheile-nerei", type: "landmark", parent: "RO-CS", coords: [44.9333, 21.8333],
    name: { de: "Nera-Klamm Nationalpark", hu: "Néra-szurdok Nemzeti Park", ro: "Parcul Național Cheile Nerei-Beușnița", en: "Cheile Nerei-Beușnița National Park" },
    description: { de: "Schluchten, Wasserfälle und blaue Seen.", hu: "Szurdokok, vízesések és kék tavak.", ro: "Chei, cascade și lacuri albastre.", en: "Gorges, waterfalls, and blue lakes." },
    image: ""
  },
  {
    id: "ro-poi-baile-herculane", type: "city", parent: "RO-CS", coords: [44.88, 22.4131],
    name: { de: "Herkulesbad", hu: "Herkulesfürdő", ro: "Băile Herculane", en: "Băile Herculane" },
    description: { de: "Historischer Thermal-Kurort.", hu: "Történelmi hőforrásos gyógyüdülő.", ro: "Stațiune balneară istorică.", en: "Historical thermal spa resort." },
    image: ""
  },
  {
    id: "ro-poi-cascada-bigar", type: "landmark", parent: "RO-CS", coords: [45.0033, 21.9594],
    name: { de: "Bigăr-Wasserfall", hu: "Bigér-vízesés", ro: "Cascada Bigăr", en: "Bigăr Waterfall" },
    description: { de: "Einzigartiger moosbedeckter Wasserfall.", hu: "Egyedülálló mohos vízesés.", ro: "Cascadă unică acoperită de mușchi.", en: "Unique moss-covered waterfall." },
    image: ""
  },

  // CONSTANȚA (RO-CT)
  {
    id: "ro-poi-acvariul-constanta", type: "landmark", parent: "RO-CT", coords: [44.1714, 28.6622],
    name: { de: "Aquarium Constanța", hu: "Konstancai Akvárium", ro: "Acvariul Constanța", en: "Constanța Aquarium" },
    description: { de: "Aquarium am Schwarzen Meer.", hu: "Fekete-tengeri akvárium.", ro: "Acvariu pe litoralul Mării Negre.", en: "Aquarium on the Black Sea coast." },
    image: ""
  },

  // COVASNA (RO-CV)
  {
    id: "ro-poi-sfantu-gheorghe", type: "city", parent: "RO-CV", coords: [45.8667, 25.7833],
    name: { de: "Sankt Georgen", hu: "Sepsiszentgyörgy", ro: "Sfântu Gheorghe", en: "Sfântu Gheorghe" },
    description: { de: "Wichtiges Zentrum des Szeklerlandes.", hu: "A Székelyföld fontos központja.", ro: "Centru important al Ținutului Secuiesc.", en: "Important center of Szeklerland." },
    image: ""
  },
  {
    id: "ro-poi-statiunea-covasna", type: "landmark", parent: "RO-CV", coords: [45.85, 26.1667],
    name: { de: "Kurort Covasna", hu: "Kovásznafürdő", ro: "Stațiunea Covasna", en: "Covasna Resort" },
    description: { de: "Bekannt für Mineralwasser und Mofetten.", hu: "Ásványvizeiről és mofettáiról ismert.", ro: "Cunoscută pentru ape minerale și mofete.", en: "Known for mineral waters and mofettas." },
    image: ""
  },
  {
    id: "ro-poi-balta-dracului", type: "landmark", parent: "RO-CV", coords: [45.845, 26.175],
    name: { de: "Teufelsteich", hu: "Pokolsár", ro: "Balta Dracului", en: "Devil's Pond" },
    description: { de: "Eine vulkanische Schlammemission.", hu: "Egy vulkáni iszapkitörés.", ro: "O emanație de noroi vulcanic.", en: "A volcanic mud emission." },
    image: ""
  },

  // DÂMBOVIȚA (RO-DB)
  {
    id: "ro-poi-pestera-ialomitei", type: "landmark", parent: "RO-DB", coords: [45.3933, 25.4383],
    name: { de: "Ialomița-Höhle", hu: "Ialomița-barlang", ro: "Peștera Ialomiței", en: "Ialomița Cave" },
    description: { de: "Höhle im Bucegi-Gebirge mit Kloster.", hu: "Barlang a Bucsecs-hegységben kolostorral.", ro: "Peșteră în Munții Bucegi cu o mănăstire.", en: "Cave in the Bucegi Mountains with a monastery." },
    image: ""
  },

  // DOLJ (RO-DJ)
  {
    id: "ro-poi-parcul-romanescu", type: "landmark", parent: "RO-DJ", coords: [44.2969, 23.8],
    name: { de: "Nicolae-Romanescu-Park", hu: "Nicolae Romanescu Park", ro: "Parcul Nicolae Romanescu", en: "Nicolae Romanescu Park" },
    description: { de: "Einer der größten Naturparks in Europa.", hu: "Európa egyik legnagyobb természetes parkja.", ro: "Unul dintre cele mai mari parcuri naturale din Europa.", en: "One of the largest natural parks in Europe." },
    image: ""
  },
  {
    id: "ro-poi-muzeul-arta-craiova", type: "landmark", parent: "RO-DJ", coords: [44.3183, 23.795],
    name: { de: "Kunstmuseum Craiova", hu: "Craiova Művészeti Múzeum", ro: "Muzeul de Artă Craiova", en: "Craiova Art Museum" },
    description: { de: "Beherbergt Werke von Constantin Brâncuși.", hu: "Constantin Brâncuși műveinek ad otthont.", ro: "Găzduiește opere de Constantin Brâncuși.", en: "Houses works by Constantin Brâncuși." },
    image: ""
  },

  // GALAȚI (RO-GL)
  {
    id: "ro-poi-faleza-dunarii", type: "landmark", parent: "RO-GL", coords: [45.4214, 28.0514],
    name: { de: "Donauuferpromenade", hu: "Dunai sétány", ro: "Faleza Dunării Galați", en: "Danube Promenade" },
    description: { de: "Die längste Uferpromenade in Rumänien.", hu: "A leghosszabb folyóparti sétány Romániában.", ro: "Cea mai lungă faleză pe malul apei din România.", en: "The longest river promenade in Romania." },
    image: ""
  },
  {
    id: "ro-poi-turnul-tv-galati", type: "landmark", parent: "RO-GL", coords: [45.4258, 28.0289],
    name: { de: "Galați Fernsehturm", hu: "Galați TV Torony", ro: "Turnul de Televiziune Galați", en: "Galați TV Tower" },
    description: { de: "Turm mit Restaurant auf der Spitze.", hu: "Torony étteremmel a tetején.", ro: "Turn cu restaurant în vârf.", en: "Tower with a restaurant at the top." },
    image: ""
  },

  // GIURGIU (RO-GR)
  {
    id: "ro-poi-giurgiu", type: "city", parent: "RO-GR", coords: [43.9, 25.9667],
    name: { de: "Giurgiu", hu: "Gyurgyevó", ro: "Giurgiu", en: "Giurgiu" },
    description: { de: "Donauhafen und Grenzstadt zu Bulgarien.", hu: "Dunai kikötő és határváros Bulgária felé.", ro: "Port la Dunăre și oraș de graniță cu Bulgaria.", en: "Danube port and border city with Bulgaria." },
    image: ""
  },
  {
    id: "ro-poi-podul-prieteniei", type: "landmark", parent: "RO-GR", coords: [43.8864, 26.0078],
    name: { de: "Freundschaftsbrücke", hu: "Barátság híd", ro: "Podul Prieteniei", en: "Friendship Bridge" },
    description: { de: "Brücke über die Donau nach Ruse.", hu: "Híd a Dunán Ruse felé.", ro: "Pod peste Dunăre către Ruse.", en: "Bridge over the Danube to Ruse." },
    image: ""
  },
  {
    id: "ro-poi-parcul-comana", type: "landmark", parent: "RO-GR", coords: [44.175, 26.1433],
    name: { de: "Naturpark Comana", hu: "Comana Natúrpark", ro: "Parcul Natural Comana", en: "Comana Natural Park" },
    description: { de: "Feuchtgebiet und Waldgebiet.", hu: "Vizes élőhely és erdő.", ro: "Zonă umedă și forestieră.", en: "Wetland and forest area." },
    image: ""
  },

  // GORJ (RO-GJ)
  {
    id: "ro-poi-manastirea-tismana", type: "historical", parent: "RO-GJ", coords: [45.0583, 22.9472],
    name: { de: "Kloster Tismana", hu: "Tismana-kolostor", ro: "Mănăstirea Tismana", en: "Tismana Monastery" },
    description: { de: "Ältestes aktives Kloster in Rumänien.", hu: "Románia legrégebbi működő kolostora.", ro: "Cea mai veche mănăstire activă din România.", en: "Oldest active monastery in Romania." },
    image: ""
  },
  {
    id: "ro-poi-cheile-oltetului", type: "landmark", parent: "RO-GJ", coords: [45.195, 23.7667],
    name: { de: "Olteț-Klamm", hu: "Oltész-szurdok", ro: "Cheile Oltețului", en: "Olteț Gorges" },
    description: { de: "Sehr enge Karstschlucht.", hu: "Nagyon szűk karszt-szurdok.", ro: "Chei carstice foarte înguste.", en: "Very narrow karst gorge." },
    image: ""
  },

  // IALOMIȚA (RO-IL)
  {
    id: "ro-poi-slobozia", type: "city", parent: "RO-IL", coords: [44.5667, 27.3667],
    name: { de: "Slobozia", hu: "Slobozia", ro: "Slobozia", en: "Slobozia" },
    description: { de: "Hauptstadt des Kreises Ialomița.", hu: "Ialomița megye székhelye.", ro: "Reședința județului Ialomița.", en: "Capital of Ialomița county." },
    image: ""
  },
  {
    id: "ro-poi-lacul-amara", type: "lake", parent: "RO-IL", coords: [44.6056, 27.3222],
    name: { de: "Amara-See", hu: "Amara-tó", ro: "Lacul Amara", en: "Amara Lake" },
    description: { de: "Salzsee, bekannt für Heilschlamm.", hu: "Sóstó, amely gyógyiszapjáról ismert.", ro: "Lac sărat cunoscut pentru nămolul terapeutic.", en: "Salt lake known for therapeutic mud." },
    image: ""
  },
  {
    id: "ro-poi-biserica-poiana", type: "historical", parent: "RO-IL", coords: [44.566, 27.350],
    name: { de: "Holzkirche von Poiana", hu: "Poiana-i fatemplom", ro: "Biserica de lemn din Poiana", en: "Wooden Church of Poiana" },
    description: { de: "Historische Holzkirche.", hu: "Történelmi fatemplom.", ro: "Biserică istorică din lemn.", en: "Historical wooden church." },
    image: ""
  },

  // IAȘI (RO-IS)
  {
    id: "ro-poi-parcul-copou", type: "landmark", parent: "RO-IS", coords: [47.1786, 27.5664],
    name: { de: "Copou-Park", hu: "Copou Park", ro: "Parcul Copou", en: "Copou Park" },
    description: { de: "Ältester öffentlicher Park in Iași mit der Eminescu-Linde.", hu: "Iași legrégebbi közparkja az Eminescu-hárssal.", ro: "Cel mai vechi parc public din Iași, cu Teiul lui Eminescu.", en: "Oldest public park in Iași, with Eminescu's Linden Tree." },
    image: ""
  },

  // ILFOV (RO-IF)
  {
    id: "ro-poi-palatul-mogosoaia", type: "historical", parent: "RO-IF", coords: [44.5275, 25.9922],
    name: { de: "Schloss Mogoșoaia", hu: "Mogoșoaia-palota", ro: "Palatul Mogoșoaia", en: "Mogoșoaia Palace" },
    description: { de: "Historischer Palast im Brâncovenesc-Stil.", hu: "Történelmi palota Brâncovenesc-stílusban.", ro: "Palat istoric în stil brâncovenesc.", en: "Historical palace in Brâncovenesc style." },
    image: ""
  },
  {
    id: "ro-poi-manastirea-snagov", type: "historical", parent: "RO-IF", coords: [44.7303, 26.175],
    name: { de: "Kloster Snagov", hu: "Snagov-kolostor", ro: "Mănăstirea Snagov", en: "Snagov Monastery" },
    description: { de: "Kloster auf einer Insel, angebliches Grab von Vlad III.", hu: "Szigeti kolostor, Vlad Tepes feltételezett sírja.", ro: "Mănăstire pe o insulă, presupusul mormânt al lui Vlad Țepeș.", en: "Island monastery, alleged tomb of Vlad the Impaler." },
    image: ""
  },
  {
    id: "ro-poi-padurea-cernica", type: "landmark", parent: "RO-IF", coords: [44.4333, 26.25],
    name: { de: "Cernica-Wald", hu: "Cernica-erdő", ro: "Pădurea Cernica", en: "Cernica Forest" },
    description: { de: "Erholungsgebiet nahe Bukarest.", hu: "Pihenőövezet Bukarest közelében.", ro: "Zonă de recreere lângă București.", en: "Recreation area near Bucharest." },
    image: ""
  },

  // MEHEDINȚI (RO-MH)
  {
    id: "ro-poi-portile-de-fier", type: "landmark", parent: "RO-MH", coords: [44.6667, 22.5333],
    name: { de: "Eisernes Tor", hu: "Vaskapu-szoros", ro: "Porțile de Fier", en: "Iron Gates" },
    description: { de: "Schlucht und Wasserkraftwerk an der Donau.", hu: "Szurdok és vízerőmű a Dunán.", ro: "Defileu și hidrocentrală pe Dunăre.", en: "Gorge and hydroelectric dam on the Danube." },
    image: ""
  },
  {
    id: "ro-poi-chipul-decebal", type: "landmark", parent: "RO-MH", coords: [44.6417, 22.2889],
    name: { de: "Felsskulptur des Decebalus", hu: "Decebal arcmása", ro: "Chipul lui Decebal", en: "Rock Sculpture of Decebalus" },
    description: { de: "Riesige Skulptur in der Donau-Schlucht.", hu: "Hatalmas szobor a Duna-szorosban.", ro: "Sculptură uriașă în defileul Dunării.", en: "Huge sculpture in the Danube gorge." },
    image: ""
  },

  // OLT (RO-OT)
  {
    id: "ro-poi-slatina", type: "city", parent: "RO-OT", coords: [44.4333, 24.3667],
    name: { de: "Slatina", hu: "Slatina", ro: "Slatina", en: "Slatina" },
    description: { de: "Industriestadt am Fluss Olt.", hu: "Ipari város az Olt folyó partján.", ro: "Oraș industrial pe râul Olt.", en: "Industrial city on the Olt River." },
    image: ""
  },
  {
    id: "ro-poi-manastirea-brancoveni", type: "historical", parent: "RO-OT", coords: [44.3125, 24.3164],
    name: { de: "Kloster Brâncoveni", hu: "Brâncoveni-kolostor", ro: "Mănăstirea Brâncoveni", en: "Brâncoveni Monastery" },
    description: { de: "Bedeutendes Kloster- und Architekturdenkmal.", hu: "Jelentős kolostor és építészeti műemlék.", ro: "Important monument arhitectural și mănăstiresc.", en: "Important monastic and architectural monument." },
    image: ""
  },

  // SĂLAJ (RO-SJ)
  {
    id: "ro-poi-zalau", type: "city", parent: "RO-SJ", coords: [47.1917, 23.0567],
    name: { de: "Zillenmarkt", hu: "Zilah", ro: "Zalău", en: "Zalău" },
    description: { de: "Kreishauptstadt von Sălaj.", hu: "Szilágy megye székhelye.", ro: "Reședința județului Sălaj.", en: "Capital of Sălaj county." },
    image: ""
  },
  {
    id: "ro-poi-porolissum", type: "historical", parent: "RO-SJ", coords: [47.1803, 23.1583],
    name: { de: "Porolissum", hu: "Porolissum", ro: "Castrul Roman Porolissum", en: "Porolissum Roman Camp" },
    description: { de: "Ehemaliges römisches Militärlager.", hu: "Egykori római katonai tábor.", ro: "Fost castru militar roman.", en: "Former Roman military camp." },
    image: ""
  },
  {
    id: "ro-poi-gradina-zmeilor", type: "landmark", parent: "RO-SJ", coords: [47.2, 23.3],
    name: { de: "Drachengarten", hu: "Sárkányok kertje", ro: "Grădina Zmeilor", en: "Dragons' Garden" },
    description: { de: "Spektakuläres Naturschutzgebiet mit Felsformationen.", hu: "Látványos természetvédelmi terület sziklaképződményekkel.", ro: "Rezervație naturală spectaculoasă cu formațiuni stâncoase.", en: "Spectacular nature reserve with rock formations." },
    image: ""
  },

  // SATU MARE (RO-SM)
  {
    id: "ro-poi-castelul-karolyi", type: "historical", parent: "RO-SM", coords: [47.6833, 22.4667],
    name: { de: "Schloss Károlyi", hu: "Károlyi-kastély", ro: "Castelul Károlyi", en: "Károlyi Castle" },
    description: { de: "Historisches Schloss in Carei.", hu: "Történelmi kastély Nagykárolyban.", ro: "Castel istoric în Carei.", en: "Historical castle in Carei." },
    image: ""
  },
  {
    id: "ro-poi-turnul-pompierilor", type: "landmark", parent: "RO-SM", coords: [47.7958, 22.875],
    name: { de: "Feuerwehrturm", hu: "Tűzoltótorony", ro: "Turnul Pompierilor", en: "Firemen's Tower" },
    description: { de: "Wahrzeichen der Stadt Satu Mare.", hu: "Szatmárnémeti jelképe.", ro: "Simbol al orașului Satu Mare.", en: "Landmark of the city of Satu Mare." },
    image: ""
  },

  // TELEORMAN (RO-TR)
  {
    id: "ro-poi-alexandria", type: "city", parent: "RO-TR", coords: [43.9667, 25.3333],
    name: { de: "Alexandria", hu: "Alexandria", ro: "Alexandria", en: "Alexandria" },
    description: { de: "Kreishauptstadt am Fluss Vedea.", hu: "Megyeszékhely a Vedea folyó partján.", ro: "Reședința județului pe râul Vedea.", en: "County capital on the Vedea river." },
    image: ""
  },
  {
    id: "ro-poi-cetatea-turnu", type: "historical", parent: "RO-TR", coords: [43.7433, 24.8711],
    name: { de: "Festung Turnu", hu: "Turnu erőd", ro: "Ruinele Cetății Turnu", en: "Turnu Fortress Ruins" },
    description: { de: "Ruinen einer alten römischen und mittelalterlichen Festung.", hu: "Egy ősi római és középkori erőd romjai.", ro: "Ruinele unei vechi cetăți romane și medievale.", en: "Ruins of an ancient Roman and medieval fortress." },
    image: ""
  },
  {
    id: "ro-poi-padurea-troianu", type: "landmark", parent: "RO-TR", coords: [44.025, 24.9833],
    name: { de: "Troianu-Wald", hu: "Troianu-erdő", ro: "Pădurea Troianu", en: "Troianu Forest" },
    description: { de: "Naturschutzgebiet für wilde Pfingstrosen.", hu: "Vadon termő pünkösdi rózsák természetvédelmi területe.", ro: "Rezervație naturală pentru bujori sălbatici.", en: "Nature reserve for wild peonies." },
    image: ""
  },

  // TIMIȘ (RO-TM)
  {
    id: "ro-poi-catedrala-mitropolitana", type: "landmark", parent: "RO-TM", coords: [45.7505, 21.2241],
    name: { de: "Orthodoxe Kathedrale", hu: "Ortodox Katedrális", ro: "Catedrala Mitropolitană", en: "Metropolitan Cathedral" },
    description: { de: "Orthodoxe Kathedrale in Timișoara.", hu: "Ortodox katedrális Temesváron.", ro: "Catedrală ortodoxă din Timișoara.", en: "Orthodox cathedral in Timișoara." },
    image: ""
  },

  // VASLUI (RO-VS)
  {
    id: "ro-poi-vaslui", type: "city", parent: "RO-VS", coords: [46.6333, 27.7333],
    name: { de: "Vaslui", hu: "Vászló", ro: "Vaslui", en: "Vaslui" },
    description: { de: "Kreishauptstadt von Vaslui.", hu: "Vaslui megye székhelye.", ro: "Reședința județului Vaslui.", en: "Capital of Vaslui county." },
    image: ""
  },
  {
    id: "ro-poi-curtea-domneasca-vaslui", type: "historical", parent: "RO-VS", coords: [46.6358, 27.7289],
    name: { de: "Fürstenhof Vaslui", hu: "Vászlói Fejedelmi Udvar", ro: "Curtea Domnească din Vaslui", en: "Princely Court of Vaslui" },
    description: { de: "Ehemalige Residenz der moldauischen Herrscher.", hu: "A moldvai uralkodók egykori rezidenciája.", ro: "Fosta reședință a domnitorilor moldoveni.", en: "Former residence of the Moldavian rulers." },
    image: ""
  },
  {
    id: "ro-poi-muzeul-stefan", type: "landmark", parent: "RO-VS", coords: [46.636, 27.73],
    name: { de: "Kreismuseum Stefan der Große", hu: "Nagy István Megyei Múzeum", ro: "Muzeul Județean Ștefan cel Mare", en: "Stephen the Great County Museum" },
    description: { de: "Museum für Geschichte und Archäologie.", hu: "Történelmi és régészeti múzeum.", ro: "Muzeu de istorie și arheologie.", en: "Museum of history and archeology." },
    image: ""
  },

  // VÂLCEA (RO-VL)
  {
    id: "ro-poi-manastirea-cozia", type: "historical", parent: "RO-VL", coords: [45.2731, 24.3164],
    name: { de: "Kloster Cozia", hu: "Cozia-kolostor", ro: "Mănăstirea Cozia", en: "Cozia Monastery" },
    description: { de: "Mittelalterliches Kloster am Fluss Olt.", hu: "Középkori kolostor az Olt folyó partján.", ro: "Mănăstire medievală pe malul Oltului.", en: "Medieval monastery on the Olt river." },
    image: ""
  },
  {
    id: "ro-poi-salina-ocnele-mari", type: "landmark", parent: "RO-VL", coords: [45.0833, 24.3167],
    name: { de: "Salzbergwerk Ocnele Mari", hu: "Ocnele Mari Sóbánya", ro: "Salina Ocnele Mari", en: "Ocnele Mari Salt Mine" },
    description: { de: "Großes touristisches Salzbergwerk.", hu: "Nagy turisztikai sóbánya.", ro: "Mare salină turistică.", en: "Large tourist salt mine." },
    image: ""
  },

  // VRANCEA (RO-VN)
  {
    id: "ro-poi-focsani", type: "city", parent: "RO-VN", coords: [45.7, 27.1833],
    name: { de: "Fokschan", hu: "Foksány", ro: "Focșani", en: "Focșani" },
    description: { de: "Kreishauptstadt in der historischen Region Moldau.", hu: "Megyeszékhely a történelmi Moldva régióban.", ro: "Oraș reședință în regiunea istorică Moldova.", en: "County capital in the historical region of Moldavia." },
    image: ""
  },
  {
    id: "ro-poi-mausoleul-marasesti", type: "historical", parent: "RO-VN", coords: [45.8833, 27.2333],
    name: { de: "Mausoleum Mărășești", hu: "Mărășești-i mauzóleum", ro: "Mausoleul de la Mărășești", en: "Mărășești Mausoleum" },
    description: { de: "Denkmal für die Gefallenen des Ersten Weltkriegs.", hu: "Az első világháború hőseinek emlékműve.", ro: "Monument dedicat eroilor din Primul Război Mondial.", en: "Monument dedicated to the heroes of World War I." },
    image: ""
  },
  {
    id: "ro-poi-rezervatia-putna", type: "landmark", parent: "RO-VN", coords: [45.9167, 26.5667],
    name: { de: "Naturpark Putna-Vrancea", hu: "Putna-Vrancea Natúrpark", ro: "Parcul Natural Putna-Vrancea", en: "Putna-Vrancea Natural Park" },
    description: { de: "Schutzgebiet mit Wasserfällen und Wäldern.", hu: "Védett terület vízesésekkel és erdőkkel.", ro: "Arie protejată cu cascade și păduri.", en: "Protected area with waterfalls and forests." },
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
