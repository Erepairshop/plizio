import type { POI } from "./poi";

export const poiExtraAfghanistanReliefV2: POI[] = [
  {
    id: "noshaq-relief-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [71.8298, 36.4332],
    name: { de: "Noshaq", hu: "Noshak-csúcs", ro: "Noshaq", en: "Mount Noshaq" },
    description: { de: "Der Noshaq ist mit über 7400 Metern der höchste Berg Afghanistans und liegt im Hindukusch-Gebirge nahe der pakistanischen Grenze.", hu: "A Noshak Afganisztán legmagasabb pontja, amely több mint 7400 méterrel magasodik a Hindukus-hegységben, a pakisztáni határ közelében.", ro: "Noshaq este cel mai înalt munte din Afganistan, depășind 7400 de metri, situat în lanțul muntos Hindu Kush, aproape de granița cu Pakistanul.", en: "Mount Noshaq is the highest peak in Afghanistan, standing at over 7,400 meters in the Hindu Kush mountain range near the Pakistani border." },
    facts: {
      de: ["Höchster Berg Afghanistans.", "Teil des Hindukusch.", "Höhe von 7492 Metern."],
      hu: ["Afganisztán legmagasabb hegye.", "A Hindukus hegység része.", "Magassága 7492 méter."],
      ro: ["Cel mai înalt munte din Afganistan.", "Face parte din Hindu Kush.", "Înălțimea este de 7492 de metri."],
      en: ["Highest mountain in Afghanistan.", "Part of the Hindu Kush.", "Elevation of 7,492 meters."]
    }
  },
  {
    id: "hindu-kush-relief-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [71.0000, 35.0000],
    name: { de: "Hindukusch", hu: "Hindukus", ro: "Hindu Kush", en: "Hindu Kush" },
    description: { de: "Der Hindukusch ist ein gewaltiges Hochgebirge in Zentralasien, das sich über einen großen Teil Afghanistans erstreckt und das Land geografisch teilt.", hu: "A Hindukus egy hatalmas közép-ázsiai magashegység, amely Afganisztán jelentős részén húzódik keresztül, földrajzilag kettéosztva az országot.", ro: "Hindu Kush este un lanț muntos masiv din Asia Centrală care se întinde pe o mare parte din Afganistan, împărțind țara din punct de vedere geografic.", en: "The Hindu Kush is a massive high-mountain range in Central Asia that stretches across a large part of Afghanistan, dividing the country geographically." },
    facts: {
      de: ["Über 800 km lang.", "Teilt das Land geografisch.", "Gipfel über 7000 Meter."],
      hu: ["Több mint 800 km hosszú.", "Földrajzilag megosztja az országot.", "7000 méter feletti csúcsok."],
      ro: ["Lungime de peste 800 km.", "Împarte țara din punct de vedere geografic.", "Vârfuri de peste 7000 de metri."],
      en: ["Over 800 km long.", "Divides the country geographically.", "Peaks over 7,000 meters."]
    }
  },
  {
    id: "wakhan-valley-relief-v2",
    type: "valley",
    parent: "AF-BDS",
    coords: [73.0000, 37.0000],
    name: { de: "Wachantal", hu: "Vahán-völgy", ro: "Valea Wakhan", en: "Wakhan Valley" },
    description: { de: "Das Wachantal liegt im äußersten Nordosten Afghanistans, eingebettet zwischen dem Pamir-Gebirge und dem Karakorum, und ist historisch ein Teil der Seidenstraße.", hu: "A Vahán-völgy Afganisztán legészakkeletibb részén, a Pamír és a Karakorum hegységek között terül el, és történelmileg a Selyemút része volt.", ro: "Valea Wakhan se află în extremitatea nord-estică a Afganistanului, între Munții Pamir și Karakorum, fiind istoric o parte a Drumului Mătăsii.", en: "The Wakhan Valley lies in the extreme northeast of Afghanistan, nestled between the Pamir and Karakoram mountains, historically a part of the Silk Road." },
    facts: {
      de: ["Historische Seidenstraße.", "Liegt im Wachan-Korridor.", "Umgeben von Hochgebirgen."],
      hu: ["A történelmi Selyemút része.", "A Vahán-folyosóban található.", "Magashegységek veszik körül."],
      ro: ["Drumul Mătăsii istoric.", "Situată în Coridorul Wakhan.", "Înconjurată de munți înalți."],
      en: ["Historical Silk Road.", "Located in the Wakhan Corridor.", "Surrounded by high mountains."]
    }
  },
  {
    id: "panjshir-valley-relief-v2",
    type: "valley",
    parent: "AF-PAN",
    coords: [69.6000, 35.2600],
    name: { de: "Pandschschir-Tal", hu: "Pandzssír-völgy", ro: "Valea Panjshir", en: "Panjshir Valley" },
    description: { de: "Das Pandschschir-Tal nördlich von Kabul wird vom Pandschschir-Fluss durchflossen und ist von hohen Berggipfeln umgeben, bekannt für seine natürliche Schönheit und strategische Bedeutung.", hu: "A Kabultól északra fekvő Pandzssír-völgyet a Pandzssír-folyó szeli át, magas hegycsúcsok veszik körül, természeti szépségéről és stratégiai jelentőségéről ismert.", ro: "Valea Panjshir la nord de Kabul este traversată de râul Panjshir și este înconjurată de vârfuri muntoase, cunoscută pentru frumusețea sa naturală și importanța strategică.", en: "The Panjshir Valley north of Kabul is crossed by the Panjshir River and surrounded by high mountain peaks, known for its natural beauty and strategic importance." },
    facts: {
      de: ["Nördlich von Kabul.", "Bedeutet 'Fünf Löwen'.", "Strategische Bedeutung."],
      hu: ["Kabultól északra.", "Jelentése 'Öt Oroszlán'.", "Stratégiai fontosságú hely."],
      ro: ["La nord de Kabul.", "Înseamnă 'Cinci Lei'.", "Importanță strategică."],
      en: ["North of Kabul.", "Means 'Five Lions'.", "Strategic importance."]
    }
  },
  {
    id: "registan-desert-relief-v2",
    type: "desert",
    parent: "AF-KAN",
    coords: [65.0000, 30.5000],
    name: { de: "Registan-Wüste", hu: "Regisztán-sivatag", ro: "Deșertul Registan", en: "Registan Desert" },
    description: { de: "Die Registan-Wüste im Süden Afghanistans ist eine trockene Region aus roten Sanddünen, Felsen und spärlicher Vegetation, die extremen klimatischen Bedingungen ausgesetzt ist.", hu: "A dél-afganisztáni Regisztán-sivatag egy száraz régió, amely vörös homokdűnékből, sziklákból és ritkás növényzetből áll, rendkívüli éghajlati viszonyokkal.", ro: "Deșertul Registan din sudul Afganistanului este o regiune aridă cu dune de nisip roșu, stânci și vegetație rară, supusă unor condiții climatice extreme.", en: "The Registan Desert in southern Afghanistan is an arid region of red sand dunes, rocks, and sparse vegetation, subject to extreme climatic conditions." },
    facts: {
      de: ["Wüste aus rotem Sand.", "Im Süden des Landes.", "Trockenes, extremes Klima."],
      hu: ["Vörös homoksivatag.", "Az ország déli részén.", "Száraz, szélsőséges éghajlat."],
      ro: ["Deșert de nisip roșu.", "În sudul țării.", "Climă aridă extremă."],
      en: ["Desert of red sand.", "In the south of the country.", "Arid, extreme climate."]
    }
  },
  {
    id: "dasht-e-margo-relief-v2",
    type: "desert",
    parent: "AF-NIM",
    coords: [63.0000, 31.0000],
    name: { de: "Dascht-e Margo", hu: "Dast-e Margo", ro: "Dasht-e Margo", en: "Dasht-e Margo" },
    description: { de: "Dascht-e Margo, die 'Wüste des Todes', ist eine weite, wasserlose Ebene im Südwesten Afghanistans, bekannt für ihre extremen Temperaturen und lebensfeindliche Umgebung.", hu: "A Dast-e Margo, a 'Halál sivataga' egy hatalmas, víztelen síkság Délnyugat-Afganisztánban, amely rendkívüli hőmérsékletéről és zord környezetéről híres.", ro: "Dasht-e Margo, 'Deșertul Morții', este o vastă câmpie fără apă în sud-vestul Afganistanului, cunoscută pentru temperaturile extreme și mediul ostil.", en: "Dasht-e Margo, the 'Desert of Death', is a vast, waterless plain in southwestern Afghanistan, known for its extreme temperatures and hostile environment." },
    facts: {
      de: ["Bedeutet 'Wüste des Todes'.", "Eine der trockensten Regionen.", "Südwestliches Afghanistan."],
      hu: ["Jelentése 'A halál sivataga'.", "A legszárazabb régiók egyike.", "Délnyugat-Afganisztán."],
      ro: ["Înseamnă 'Deșertul Morții'.", "Una dintre cele mai aride regiuni.", "Sud-vestul Afganistanului."],
      en: ["Means 'Desert of Death'.", "One of the driest regions.", "Southwestern Afghanistan."]
    }
  },
  {
    id: "koh-e-baba-relief-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [67.3300, 34.6600],
    name: { de: "Koh-e Baba", hu: "Koh-e Baba-hegység", ro: "Munții Koh-e Baba", en: "Koh-e Baba" },
    description: { de: "Das Koh-e Baba-Gebirge ist ein westlicher Ausläufer des Hindukusch in Zentralafghanistan und bildet die Quelle mehrerer großer Flüsse des Landes.", hu: "A Koh-e Baba hegység a Hindukus nyugati nyúlványa Közép-Afganisztánban, és az ország több jelentős folyójának forrásvidéke.", ro: "Lanțul muntos Koh-e Baba este o prelungire vestică a Hindu Kush în centrul Afganistanului și formează sursa mai multor râuri mari ale țării.", en: "The Koh-e Baba mountain range is a western extension of the Hindu Kush in central Afghanistan and forms the source of several major rivers of the country." },
    facts: {
      de: ["Westlicher Teil des Hindukusch.", "Quelle wichtiger Flüsse.", "Liegt in der Bamiyan-Provinz."],
      hu: ["A Hindukus nyugati része.", "Fontos folyók forrása.", "Bámiján tartományban található."],
      ro: ["Partea de vest a Hindu Kush.", "Sursa unor râuri importante.", "Situat în provincia Bamiyan."],
      en: ["Western part of the Hindu Kush.", "Source of important rivers.", "Located in Bamyan province."]
    }
  },
  {
    id: "shah-e-fuladi-relief-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [67.6250, 34.6450],
    name: { de: "Shah-e Fuladi", hu: "Shah-e Fuladi", ro: "Shah-e Fuladi", en: "Shah-e Fuladi" },
    description: { de: "Der Shah-e Fuladi ist mit über 5000 Metern der höchste Gipfel des Koh-e Baba-Gebirges und überragt das umliegende zentralafghanische Hochland.", hu: "A Shah-e Fuladi több mint 5000 méteres magasságával a Koh-e Baba hegység legmagasabb csúcsa, amely a közép-afganisztáni fennsík fölé magasodik.", ro: "Shah-e Fuladi, la peste 5000 de metri, este cel mai înalt vârf din munții Koh-e Baba, dominând platoul central afgan înconjurător.", en: "Shah-e Fuladi, at over 5,000 meters, is the highest peak of the Koh-e Baba mountain range, towering over the surrounding central Afghan highlands." },
    facts: {
      de: ["Höchster Gipfel des Koh-e Baba.", "Über 5000 Meter hoch.", "Im zentralen Hochland."],
      hu: ["A Koh-e Baba legmagasabb csúcsa.", "Több mint 5000 méter magas.", "A központi fennsíkon található."],
      ro: ["Cel mai înalt vârf din Koh-e Baba.", "Peste 5000 de metri altitudine.", "În zonele înalte centrale."],
      en: ["Highest peak of Koh-e Baba.", "Over 5,000 meters high.", "In the central highlands."]
    }
  },
  {
    id: "bamyan-valley-relief-v2",
    type: "valley",
    parent: "AF-BAM",
    coords: [67.8200, 34.8200],
    name: { de: "Bamiyan-Tal", hu: "Bámiján-völgy", ro: "Valea Bamiyan", en: "Bamyan Valley" },
    description: { de: "Das Bamiyan-Tal ist ein weites, fruchtbares Flusstal im zentralen Hochland Afghanistans, das tief in die umgebende Gebirgslandschaft eingeschnitten ist.", hu: "A Bámiján-völgy egy széles, termékeny folyóvölgy Afganisztán középső hegyvidékén, amely mélyen bevágódik a környező hegyi tájba.", ro: "Valea Bamiyan este o vale largă și fertilă în podișul central al Afganistanului, tăiată adânc în peisajul montan înconjurător.", en: "The Bamyan Valley is a wide, fertile river valley in the central highlands of Afghanistan, deeply carved into the surrounding mountainous landscape." },
    facts: {
      de: ["Fruchtbares Tal in großer Höhe.", "Kultureller Knotenpunkt.", "Umgeben von roten Felsen."],
      hu: ["Termékeny völgy nagy magasságban.", "Kulturális csomópont.", "Vörös sziklák veszik körül."],
      ro: ["Vale fertilă la mare altitudine.", "Nod cultural.", "Înconjurată de stânci roșii."],
      en: ["Fertile valley at high altitude.", "Cultural hub.", "Surrounded by red cliffs."]
    }
  },
  {
    id: "spin-ghar-relief-v2",
    type: "mountain",
    parent: "AF-NAN",
    coords: [70.0000, 33.9000],
    name: { de: "Spīn Ghar", hu: "Szafed Koh", ro: "Spīn Ghar", en: "Spīn Ghar" },
    description: { de: "Das Spīn Ghar, auch als Safed Koh bekannt, ist ein schroffes Gebirge im Osten Afghanistans, dessen höchster Punkt der Berg Sikaram ist.", hu: "A Spīn Ghar, más néven Szafed Koh egy zord hegység Afganisztán keleti részén, amelynek legmagasabb pontja a Szikaram-hegy.", ro: "Spīn Ghar, cunoscut și sub numele de Safed Koh, este un lanț muntos accidentat în estul Afganistanului, al cărui punct cel mai înalt este Muntele Sikaram.", en: "Spīn Ghar, also known as Safed Koh, is a rugged mountain range in eastern Afghanistan, whose highest point is Mount Sikaram." },
    facts: {
      de: ["Bedeutet 'Weißer Berg'.", "An der Grenze zu Pakistan.", "Gipfel bis zu 4761 Meter."],
      hu: ["Jelentése 'Fehér-hegy'.", "A pakisztáni határon.", "Csúcsai elérik a 4761 métert."],
      ro: ["Înseamnă 'Muntele Alb'.", "La granița cu Pakistanul.", "Vârfuri de până la 4761 de metri."],
      en: ["Means 'White Mountain'.", "On the border with Pakistan.", "Peaks up to 4,761 meters."]
    }
  },
  {
    id: "pamir-mountains-af-relief-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [73.5000, 37.2000],
    name: { de: "Pamir-Gebirge (Afghanischer Teil)", hu: "Pamír (Afganisztáni rész)", ro: "Munții Pamir (Partea afgană)", en: "Pamir Mountains (Afghan Part)" },
    description: { de: "Der afghanische Teil des Pamir-Gebirges liegt im abgelegenen Wachan-Korridor und ist geprägt von rauen, hochalpinen Landschaften und tiefen Tälern.", hu: "A Pamír-hegység afganisztáni része a távoli Vahán-folyosóban fekszik, és zord, magashegységi tájak, valamint mély völgyek jellemzik.", ro: "Partea afgană a Munților Pamir este situată în coridorul izolat Wakhan și este caracterizată de peisaje alpine aspre și văi adânci.", en: "The Afghan part of the Pamir Mountains is located in the remote Wakhan Corridor and is characterized by rugged, high alpine landscapes and deep valleys." },
    facts: {
      de: ["Bekannt als 'Dach der Welt'.", "Extrem abgelegen.", "Raue alpine Umwelt."],
      hu: ["A 'Világ tetejeként' is ismert.", "Rendkívül elszigetelt.", "Zord alpesi környezet."],
      ro: ["Cunoscut ca 'Acoperișul Lumii'.", "Extrem de izolat.", "Mediu alpin aspru."],
      en: ["Known as the 'Roof of the World'.", "Extremely remote.", "Harsh alpine environment."]
    }
  },
  {
    id: "salang-valley-relief-v2",
    type: "valley",
    parent: "AF-PAR",
    coords: [69.0000, 35.3000],
    name: { de: "Salang-Tal", hu: "Szalang-völgy", ro: "Valea Salang", en: "Salang Valley" },
    description: { de: "Das Salang-Tal erstreckt sich durch den Hindukusch und dient als eine der wichtigsten Nord-Süd-Passagen für das Land.", hu: "A Szalang-völgy a Hindukus hegyein húzódik keresztül, és az ország egyik legfontosabb észak-déli átjárójaként szolgál.", ro: "Valea Salang se întinde prin Hindu Kush și servește drept una dintre cele mai importante rute de trecere nord-sud pentru țară.", en: "The Salang Valley stretches through the Hindu Kush and serves as one of the most important north-south passages for the country." },
    facts: {
      de: ["Wichtige Transportroute.", "Tiefe Schluchten.", "Im Hindukusch-Massiv."],
      hu: ["Fontos közlekedési útvonal.", "Mély szurdokok.", "A Hindukus masszívumban."],
      ro: ["Ruta de transport importantă.", "Chei adânci.", "În masivul Hindu Kush."],
      en: ["Important transport route.", "Deep gorges.", "In the Hindu Kush massif."]
    }
  },
  {
    id: "koh-e-paghman-relief-v2",
    type: "mountain",
    parent: "AF-KAB",
    coords: [68.9000, 34.6000],
    name: { de: "Koh-e Paghman", hu: "Pagmán-hegység", ro: "Munții Paghman", en: "Koh-e Paghman" },
    description: { de: "Die Paghman-Berge erheben sich nordwestlich von Kabul und bieten ein kühleres Klima sowie grüne Täler, die sich stark von der Umgebung abheben.", hu: "A Pagmán-hegység Kabultól északnyugatra emelkedik, hűvösebb éghajlatot és zöld völgyeket kínálva, amelyek élesen elütnek a környezettől.", ro: "Munții Paghman se înalță la nord-vest de Kabul, oferind un climat mai răcoros și văi verzi care contrastează puternic cu împrejurimile.", en: "The Paghman Mountains rise northwest of Kabul, offering a cooler climate and green valleys that contrast sharply with the surroundings." },
    facts: {
      de: ["Nahe der Hauptstadt Kabul.", "Beliebtes Erholungsgebiet.", "Schneebedeckte Gipfel im Winter."],
      hu: ["A főváros, Kabul közelében.", "Népszerű pihenőhely.", "Télen hóval borított csúcsok."],
      ro: ["Aproape de capitala Kabul.", "Zonă populară de recreere.", "Vârfuri înzăpezite iarna."],
      en: ["Near the capital Kabul.", "Popular recreation area.", "Snow-capped peaks in winter."]
    }
  },
  {
    id: "dasht-e-leili-relief-v2",
    type: "desert",
    parent: "AF-JOW",
    coords: [65.7500, 36.8000],
    name: { de: "Dascht-e Leili", hu: "Dast-e Leili", ro: "Dasht-e Leili", en: "Dasht-e Leili" },
    description: { de: "Dascht-e Leili ist eine Wüstenregion im Norden Afghanistans, bestehend aus trockenen Ebenen, die sich in den Provinzen Dschuzdschan und Faryab erstrecken.", hu: "A Dast-e Leili egy sivatagi régió Afganisztán északi részén, amely száraz síkságokból áll, és Dzsauzdján és Fárjáb tartományokban terül el.", ro: "Dasht-e Leili este o regiune deșertică din nordul Afganistanului, constând din câmpii aride care se extind în provinciile Jowzjan și Faryab.", en: "Dasht-e Leili is a desert region in northern Afghanistan, consisting of arid plains stretching across the Jowzjan and Faryab provinces." },
    facts: {
      de: ["Wüste im Norden.", "Karges Gelände.", "Erstreckt sich über mehrere Provinzen."],
      hu: ["Északi sivatag.", "Kietlen terep.", "Több tartományon ível át."],
      ro: ["Deșert în nord.", "Teren arid.", "Se întinde pe mai multe provincii."],
      en: ["Desert in the north.", "Barren terrain.", "Stretches across several provinces."]
    }
  },
  {
    id: "korengal-valley-relief-v2",
    type: "valley",
    parent: "AF-KNR",
    coords: [70.8200, 34.8800],
    name: { de: "Korengal-Tal", hu: "Korengal-völgy", ro: "Valea Korengal", en: "Korengal Valley" },
    description: { de: "Das Korengal-Tal ist ein dicht bewaldetes, tiefes Tal in Ostafghanistan, das durch seine unzugängliche und steile Geländebeschaffenheit charakterisiert wird.", hu: "A Korengal-völgy egy sűrűn erdősült, mély völgy Kelet-Afganisztánban, amelyet megközelíthetetlen és meredek terepviszonyok jellemeznek.", ro: "Valea Korengal este o vale adâncă, dens împădurită din estul Afganistanului, caracterizată prin terenul său inaccesibil și abrupt.", en: "The Korengal Valley is a densely forested, deep valley in eastern Afghanistan, characterized by its inaccessible and steep terrain." },
    facts: {
      de: ["Im Osten Afghanistans.", "Dicht bewaldetes Tal.", "Schwer zugänglich."],
      hu: ["Kelet-Afganisztánban.", "Sűrűn erdősült völgy.", "Nehezen megközelíthető."],
      ro: ["În estul Afganistanului.", "Vale dens împădurită.", "Greu accesibilă."],
      en: ["In eastern Afghanistan.", "Densely forested valley.", "Difficult to access."]
    }
  },
  {
    id: "siah-koh-relief-v2",
    type: "mountain",
    parent: "AF-HER",
    coords: [63.0000, 34.0000],
    name: { de: "Siah Koh", hu: "Siah Koh", ro: "Siah Koh", en: "Siah Koh" },
    description: { de: "Die Siah Koh, was auf Persisch 'Schwarzer Berg' bedeutet, sind eine Berggruppe, die sich durch den westlichen und zentralen Teil des Landes zieht.", hu: "A Siah Koh, ami perzsául 'Fekete-hegyet' jelent, egy hegycsoport, amely az ország nyugati és középső részén húzódik keresztül.", ro: "Siah Koh, care înseamnă 'Muntele Negru' în persană, este un grup muntos care se întinde prin părțile vestice și centrale ale țării.", en: "The Siah Koh, meaning 'Black Mountain' in Persian, is a mountain group stretching through the western and central parts of the country." },
    facts: {
      de: ["Bedeutet 'Schwarzer Berg'.", "Rauer, dunkler Fels.", "Im Westen Afghanistans."],
      hu: ["Jelentése 'Fekete-hegy'.", "Zord, sötét kőzet.", "Afganisztán nyugati részén."],
      ro: ["Înseamnă 'Muntele Negru'.", "Stâncă aspră, întunecată.", "În vestul Afganistanului."],
      en: ["Means 'Black Mountain'.", "Rugged, dark rock.", "In western Afghanistan."]
    }
  },
  {
    id: "shomali-plain-relief-v2",
    type: "plateau",
    parent: "AF-KAB",
    coords: [69.2500, 34.8000],
    name: { de: "Schomali-Ebene", hu: "Somali-fennsík", ro: "Câmpia Shomali", en: "Shomali Plain" },
    description: { de: "Die Schomali-Ebene nördlich von Kabul ist eine breite, Hochebene, die für ihren fruchtbaren Boden und die umgebende Gebirgskulisse bekannt ist.", hu: "A Kabultól északra fekvő Somali-fennsík egy széles terület, amely termékeny talajáról és a környező hegyi kulisszáról ismert.", ro: "Câmpia Shomali, la nord de Kabul, este un platou vast, cunoscut pentru solul său fertil și peisajul montan înconjurător.", en: "The Shomali Plain north of Kabul is a broad plateau known for its fertile soil and surrounding mountainous backdrop." },
    facts: {
      de: ["Nördlich der Hauptstadt.", "Bedeutet 'nördlich'.", "Wichtige landwirtschaftliche Region."],
      hu: ["A fővárostól északra.", "Jelentése 'északi'.", "Fontos mezőgazdasági régió."],
      ro: ["La nord de capitală.", "Înseamnă 'nordic'.", "Regiune agricolă importantă."],
      en: ["North of the capital.", "Means 'northern'.", "Important agricultural region."]
    }
  },
  {
    id: "pech-valley-relief-v2",
    type: "valley",
    parent: "AF-KNR",
    coords: [71.0000, 34.9000],
    name: { de: "Pech-Tal", hu: "Pecs-völgy", ro: "Valea Pech", en: "Pech Valley" },
    description: { de: "Das Pech-Tal ist ein steiles Flusstal in der Provinz Kunar, umgeben von zerklüfteten Bergen und tiefen Schluchten.", hu: "A Pecs-völgy egy meredek folyóvölgy Kunar tartományban, amelyet csipkézett hegyek és mély szurdokok vesznek körül.", ro: "Valea Pech este o vale abruptă a unui râu din provincia Kunar, înconjurată de munți stâncoși și chei adânci.", en: "The Pech Valley is a steep river valley in Kunar province, surrounded by craggy mountains and deep gorges." },
    facts: {
      de: ["In der Provinz Kunar.", "Steiles und enges Tal.", "Nahe der pakistanischen Grenze."],
      hu: ["Kunar tartományban.", "Meredek és szűk völgy.", "A pakisztáni határ közelében."],
      ro: ["În provincia Kunar.", "Vale abruptă și îngustă.", "Aproape de granița cu Pakistanul."],
      en: ["In Kunar province.", "Steep and narrow valley.", "Near the Pakistani border."]
    }
  },
  {
    id: "zarghun-ghar-relief-v2",
    type: "mountain",
    parent: "AF-LOG",
    coords: [69.0000, 34.0000],
    name: { de: "Zarghun Ghar", hu: "Zarghun Ghar", ro: "Zarghun Ghar", en: "Zarghun Ghar" },
    description: { de: "Zarghun Ghar in der Provinz Logar ist eine markante Bergkette mit karger Vegetation und trockenen Felsformationen.", hu: "A Logar tartományban található Zarghun Ghar egy jellegzetes hegylánc gyér növényzettel és száraz sziklaalakzatokkal.", ro: "Zarghun Ghar din provincia Logar este un lanț muntos distinct cu vegetație rară și formațiuni stâncoase aride.", en: "Zarghun Ghar in Logar province is a distinct mountain range with sparse vegetation and arid rock formations." },
    facts: {
      de: ["Provinz Logar.", "Zerklüftete Berge.", "Bedeutet 'Grüner Berg' (obwohl trocken)."],
      hu: ["Logar tartomány.", "Csipkézett hegyek.", "Jelentése 'Zöld hegy' (bár száraz)."],
      ro: ["Provincia Logar.", "Munți accidentați.", "Înseamnă 'Muntele Verde' (deși arid)."],
      en: ["Logar province.", "Rugged mountains.", "Means 'Green Mountain' (though arid)."]
    }
  },
  {
    id: "tora-bora-relief-v2",
    type: "mountain",
    parent: "AF-NAN",
    coords: [70.2200, 34.1200],
    name: { de: "Tora-Bora-Massiv", hu: "Tora Bora-hegység", ro: "Masivul Tora Bora", en: "Tora Bora Massif" },
    description: { de: "Das Tora-Bora-Massiv ist Teil des Spīn Ghar-Gebirges und zeichnet sich durch ein komplexes Höhlensystem in steilem, bewaldetem Terrain aus.", hu: "A Tora Bora-hegység a Spīn Ghar hegylánc része, amelyet meredek, erdős terepen lévő összetett barlangrendszer jellemez.", ro: "Masivul Tora Bora face parte din lanțul muntos Spīn Ghar și este caracterizat de un sistem complex de peșteri într-un teren abrupt, împădurit.", en: "The Tora Bora Massif is part of the Spīn Ghar mountain range, characterized by a complex cave system in steep, forested terrain." },
    facts: {
      de: ["Bedeutet 'Schwarzer Staub'.", "Weitläufige Höhlensysteme.", "Unzugängliches Terrain."],
      hu: ["Jelentése 'Fekete por'.", "Kiterjedt barlangrendszerek.", "Megközelíthetetlen terep."],
      ro: ["Înseamnă 'Praf Negru'.", "Sisteme extinse de peșteri.", "Teren inaccesibil."],
      en: ["Means 'Black Dust'.", "Extensive cave systems.", "Inaccessible terrain."]
    }
  }
];
