import type { POI } from "./poi";

export const poiExtraLebanonReliefV2: POI[] = [
  {
    id: "qurnat-as-sawda-relief-v2",
    type: "mountain",
    parent: "LB-AS",
    coords: [36.1150, 34.3033],
    name: { de: "Qurnat as-Sauda", hu: "Kurnat asz-Szauda", ro: "Qurnat as Sawda", en: "Qurnat as Sawda" },
    description: {
      de: "Mit 3088 Metern ist er der höchste Gipfel im Libanongebirge und bietet an klaren Tagen Ausblicke bis zur Küste Zyperns.",
      hu: "A maga 3088 méterével a Libanon-hegység legmagasabb csúcsa, tiszta időben egészen Ciprus partjaiig ellátni innen.",
      ro: "Cu o înălțime de 3088 metri, este cel mai înalt vârf din Munții Liban și oferă vederi spre coasta Ciprului în zilele senine.",
      en: "At 3088 meters, it is the highest peak in the Mount Lebanon range, offering views to the coast of Cyprus on clear days."
    },
    facts: {
      de: ["Höhe beträgt 3088 Meter.", "Höchster Punkt des Libanon.", "Oft bis in den Sommer schneebedeckt.", "Beliebt bei Bergsteigern."],
      hu: ["Magassága 3088 méter.", "Libanon legmagasabb pontja.", "Gyakran nyárig hó borítja.", "Népszerű a hegymászók körében."],
      ro: ["Altitudinea este de 3088 metri.", "Cel mai înalt punct din Liban.", "Adesea acoperit de zăpadă până în vară.", "Popular printre alpiniști."],
      en: ["Elevation is 3088 meters.", "Highest point in Lebanon.", "Often snow-capped until summer.", "Popular among mountaineers."]
    }, image: "/poi-images/qurnat-as-sawda-relief-v2.webp"},
  {
    id: "bekaa-valley-relief-v2",
    type: "valley",
    parent: "LB-BI",
    coords: [36.0000, 33.8333],
    name: { de: "Bekaa-Ebene", hu: "Bekaa-völgy", ro: "Valea Bekaa", en: "Beqaa Valley" },
    description: {
      de: "Ein breites und fruchtbares Tal zwischen dem Libanongebirge und dem Anti-Libanon, das als landwirtschaftliches Herz des Landes gilt.",
      hu: "Széles és termékeny völgy a Libanon-hegység és az Antilibanon között, amely az ország mezőgazdasági központjának számít.",
      ro: "O vale largă și fertilă între Munții Liban și Munții Anti-Liban, considerată inima agricolă a țării.",
      en: "A broad and fertile valley between the Mount Lebanon and Anti-Lebanon ranges, considered the agricultural heartland of the country."
    },
    facts: {
      de: ["Wichtigstes Anbaugebiet für Wein.", "Durchschnitten vom Litani-Fluss.", "Teil des Großen Afrikanischen Grabenbruchs.", "Liegt durchschnittlich 1000 Meter hoch."],
      hu: ["A legfontosabb borvidék.", "A Litáni-folyó szeli ketté.", "A Nagy-hasadékvölgy része.", "Átlagos magassága 1000 méter."],
      ro: ["Cea mai importantă regiune viticolă.", "Traversată de râul Litani.", "Parte a Marelui Rift African.", "Situată la o altitudine medie de 1000 de metri."],
      en: ["Main wine-producing region.", "Bisected by the Litani River.", "Part of the Great Rift Valley.", "Sits at an average elevation of 1000 meters."]
    }, image: "/poi-images/bekaa-valley-relief-v2.webp"},
  {
    id: "anti-lebanon-mountains-relief-v2",
    type: "mountain",
    parent: "LB-BH",
    coords: [36.2500, 34.0000],
    name: { de: "Anti-Libanon", hu: "Antilibanon", ro: "Munții Anti-Liban", en: "Anti-Lebanon Mountains" },
    description: {
      de: "Ein markanter Gebirgszug, der die natürliche und politische Grenze zwischen dem Libanon und Syrien bildet.",
      hu: "Jelentős hegylánc, amely a természetes és politikai határt alkotja Libanon és Szíria között.",
      ro: "Un lanț muntos proeminent care formează granița naturală și politică între Liban și Siria.",
      en: "A prominent mountain range that forms the natural and political border between Lebanon and Syria."
    },
    facts: {
      de: ["Trockener als das Libanongebirge.", "Bildet die östliche Grenze.", "Weniger dicht besiedelt.", "Wichtige Wasserscheide."],
      hu: ["Szárazabb, mint a Libanon-hegység.", "A keleti határt képezi.", "Ritkábban lakott terület.", "Fontos vízválasztó."],
      ro: ["Mai arid decât Munții Liban.", "Formează granița estică.", "Mai slab populat.", "Cumpănă importantă de ape."],
      en: ["Drier than the Mount Lebanon range.", "Forms the eastern border.", "Less densely populated.", "Important drainage divide."]
    }, image: "/poi-images/anti-lebanon-mountains-relief-v2.webp"},
  {
    id: "mount-sannine-relief-v2",
    type: "mountain",
    parent: "LB-JL",
    coords: [35.8333, 33.9500],
    name: { de: "Dschebel Sannin", hu: "Szannín-hegy", ro: "Muntele Sannine", en: "Mount Sannine" },
    description: {
      de: "Ein dominanter Berg nahe Beirut, dessen schneebedeckter Gipfel das Panorama der libanesischen Hauptstadt prägt.",
      hu: "Bejrút közelében emelkedő meghatározó hegy, melynek hóval borított csúcsa uralja a libanoni főváros látképét.",
      ro: "Un munte dominant lângă Beirut, al cărui vârf acoperit de zăpadă marchează orizontul capitalei libaneze.",
      en: "A dominant mountain near Beirut, whose snow-capped peak defines the skyline of the Lebanese capital."
    },
    facts: {
      de: ["Erreicht 2628 Meter Höhe.", "Sichtbar von ganz Beirut.", "Quelle vieler Bergquellen.", "Zentrum für Wintersport."],
      hu: ["Magassága eléri a 2628 métert.", "Bejrút egész területéről látható.", "Számos hegyi forrás eredője.", "A téli sportok központja."],
      ro: ["Atinge 2628 metri altitudine.", "Vizibil din întregul Beirut.", "Sursa multor izvoare montane.", "Centru pentru sporturile de iarnă."],
      en: ["Reaches 2628 meters in height.", "Visible from all over Beirut.", "Source of many mountain springs.", "Center for winter sports."]
    }, image: "/poi-images/mount-sannine-relief-v2.webp"},
  {
    id: "mount-hermon-relief-v2",
    type: "mountain",
    parent: "LB-BH",
    coords: [35.8500, 33.4116],
    name: { de: "Hermonberg", hu: "Hermon-hegy", ro: "Muntele Hermon", en: "Mount Hermon" },
    description: {
      de: "Ein massives Gebirge an der südlichen Grenze des Anti-Libanon, bekannt für seine religiöse und strategische Bedeutung.",
      hu: "Masszív hegység az Antilibanon déli határán, amely vallási és stratégiai jelentőségéről ismert.",
      ro: "Un masiv muntos la granița sudică a Anti-Libanului, cunoscut pentru importanța sa religioasă și strategică.",
      en: "A massive mountain at the southern end of the Anti-Lebanon range, known for its religious and strategic significance."
    },
    facts: {
      de: ["Höchster Punkt ist 2814 Meter.", "Grenze dreier Länder.", "Quelle des Jordan-Flusses.", "Wird in antiken Schriften oft erwähnt."],
      hu: ["Legmagasabb pontja 2814 méter.", "Három ország határán fekszik.", "A Jordán-folyó forrása.", "Ókori iratok gyakran említik."],
      ro: ["Cel mai înalt punct are 2814 metri.", "Graniță pentru trei țări.", "Sursa râului Iordan.", "Adesea menționat în scrierile antice."],
      en: ["Highest point is 2814 meters.", "Border of three countries.", "Source of the Jordan River.", "Often mentioned in ancient writings."]
    }, image: "/poi-images/mount-hermon-relief-v2.webp"},
  {
    id: "chouf-mountains-relief-v2",
    type: "mountain",
    parent: "LB-JL",
    coords: [35.6167, 33.6833],
    name: { de: "Chouf-Gebirge", hu: "Súf-hegység", ro: "Munții Chouf", en: "Chouf Mountains" },
    description: {
      de: "Eine bewaldete Bergregion, die das größte Naturreservat des Libanon mit ausgedehnten Zedernwäldern beherbergt.",
      hu: "Erdős hegyvidék, amely Libanon legnagyobb természetvédelmi területének és kiterjedt cédruserdeinek ad otthont.",
      ro: "O regiune montană împădurită care găzduiește cea mai mare rezervație naturală din Liban, cu păduri întinse de cedru.",
      en: "A forested mountain region hosting Lebanon's largest nature reserve with extensive cedar forests."
    },
    facts: {
      de: ["Heimat der Chouf-Zedern.", "Wichtiger Lebensraum für Wildtiere.", "Reich an historischen Bergdörfern.", "Beliebt für Ökotourismus."],
      hu: ["A súfi cédrusok otthona.", "Fontos élőhely a vadon élő állatok számára.", "Gazdag történelmi hegyi falvakban.", "Népszerű az ökoturizmus számára."],
      ro: ["Casa cedrilor din Chouf.", "Habitat important pentru fauna sălbatică.", "Bogat în sate montane istorice.", "Popular pentru ecoturism."],
      en: ["Home to the Chouf cedars.", "Important habitat for wildlife.", "Rich in historical mountain villages.", "Popular for ecotourism."]
    }, image: "/poi-images/chouf-mountains-relief-v2.webp"},
  {
    id: "litani-valley-relief-v2",
    type: "valley",
    parent: "LB-BI",
    coords: [35.6333, 33.3333],
    name: { de: "Litani-Tal", hu: "Litáni-völgy", ro: "Valea Litani", en: "Litani Valley" },
    description: {
      de: "Das Flusstal des Litani, dem längsten Fluss des Libanon, das tiefe Schluchten in die Landschaft schneidet.",
      hu: "A Litáni, Libanon leghosszabb folyójának völgye, amely mély szurdokokat vág a tájba.",
      ro: "Valea râului Litani, cel mai lung râu din Liban, care taie defilee adânci în peisaj.",
      en: "The river valley of the Litani, Lebanon's longest river, which cuts deep gorges into the landscape."
    },
    facts: {
      de: ["Wichtig für die Wasserversorgung.", "Längster Fluss des Libanon.", "Mündet ins Mittelmeer.", "Gefälle bietet Wasserkraft."],
      hu: ["Fontos a vízellátás szempontjából.", "Libanon leghosszabb folyója.", "A Földközi-tengerbe torkollik.", "Esése vízenergiát biztosít."],
      ro: ["Important pentru aprovizionarea cu apă.", "Cel mai lung râu din Liban.", "Se varsă în Marea Mediterană.", "Panta sa oferă energie hidroelectrică."],
      en: ["Important for water supply.", "Longest river in Lebanon.", "Flows into the Mediterranean Sea.", "Gradient provides hydroelectric power."]
    }, image: "/poi-images/litani-valley-relief-v2.webp"},
  {
    id: "adonis-valley-relief-v2",
    type: "valley",
    parent: "LB-JL",
    coords: [35.7500, 34.0667],
    name: { de: "Adonis-Tal", hu: "Adonisz-völgy", ro: "Valea Adonis", en: "Adonis Valley" },
    description: {
      de: "Ein malerisches Flusstal, das in der antiken Mythologie eng mit der Legende von Adonis und Aphrodite verbunden ist.",
      hu: "Festői folyóvölgy, amely az ókori mitológiában szorosan kapcsolódik Adónisz és Aphrodité legendájához.",
      ro: "O vale pitorească de râu care, în mitologia antică, este strâns legată de legenda lui Adonis și a Afroditei.",
      en: "A picturesque river valley closely associated in ancient mythology with the legend of Adonis and Aphrodite."
    },
    facts: {
      de: ["Der Fluss wird im Frühling oft rötlich.", "Reich an endemischen Pflanzen.", "Steile, grüne Schluchten.", "Historische Pilgerstätte."],
      hu: ["A folyó tavasszal gyakran vöröses színű.", "Gazdag endemikus növényekben.", "Meredek, zöld szurdokok jellemzik.", "Történelmi zarándokhely."],
      ro: ["Râul capătă adesea o culoare roșiatică primăvara.", "Bogat în plante endemice.", "Defilee abrupte și verzi.", "Loc istoric de pelerinaj."],
      en: ["The river often turns reddish in spring.", "Rich in endemic plants.", "Steep, green gorges.", "Historical pilgrimage site."]
    }, image: "/poi-images/adonis-valley-relief-v2.webp"},
  {
    id: "mount-barouk-relief-v2",
    type: "mountain",
    parent: "LB-JL",
    coords: [35.6833, 33.7000],
    name: { de: "Dschebel Barouk", hu: "Barouk-hegy", ro: "Muntele Barouk", en: "Mount Barouk" },
    description: {
      de: "Ein markanter Bergkamm im Chouf-Gebirge, der berühmt für seine alten Zedernbestände und atemberaubenden Aussichten ist.",
      hu: "Meghatározó hegygerinc a Súf-hegységben, amely híres régi cédruserdeiről és lélegzetelállító kilátásáról.",
      ro: "O creastă montană proeminentă în Munții Chouf, renumită pentru pădurile sale vechi de cedru și vederile uluitoare.",
      en: "A prominent mountain ridge in the Chouf Mountains, famous for its ancient cedar stands and breathtaking views."
    },
    facts: {
      de: ["Höhe von knapp 2000 Metern.", "Teil des Chouf-Reservats.", "Rückzugsort für Wölfe.", "Schneesicher im Winter."],
      hu: ["Magassága megközelíti a 2000 métert.", "A Súf Természetvédelmi Terület része.", "Farkasok menedékhelye.", "Télen hóbiztos terület."],
      ro: ["Altitudine de aproape 2000 de metri.", "Parte a rezervației Chouf.", "Refugiu pentru lupi.", "Aproape mereu cu zăpadă iarna."],
      en: ["Height of nearly 2000 meters.", "Part of the Chouf Reserve.", "Refuge for wolves.", "Snow-reliable in winter."]
    }, image: "/poi-images/mount-barouk-relief-v2.webp"},
  {
    id: "mount-makmel-relief-v2",
    type: "mountain",
    parent: "LB-AS",
    coords: [36.0833, 34.2833],
    name: { de: "Dschebel Makmel", hu: "Makmel-hegy", ro: "Muntele Makmel", en: "Mount Makmel" },
    description: {
      de: "Eine schroffe Gebirgsregion im nördlichen Libanon, die zu den höchsten und abgelegensten Teilen des Landes gehört.",
      hu: "Zord hegyvidék Észak-Libanonban, amely az ország legmagasabb és legelhagyatottabb részei közé tartozik.",
      ro: "O regiune montană accidentată în nordul Libanului, care se numără printre cele mai înalte și mai îndepărtate părți ale țării.",
      en: "A rugged mountain region in northern Lebanon, ranking among the highest and most remote parts of the country."
    },
    facts: {
      de: ["Beherbergt die höchsten Gipfel.", "Sehr raues Klima.", "Heimat von Wildziegen.", "Kaum bewachsen auf den Kuppen."],
      hu: ["A legmagasabb csúcsok otthona.", "Nagyon zord éghajlat jellemzi.", "Vadkecskék élőhelye.", "A csúcsokon alig van növényzet."],
      ro: ["Găzduiește cele mai înalte vârfuri.", "Climă foarte aspră.", "Casa caprelor sălbatice.", "Aproape fără vegetație pe creste."],
      en: ["Hosts the highest peaks.", "Very harsh climate.", "Home to wild goats.", "Barely vegetated on the summits."]
    }, image: "/poi-images/mount-makmel-relief-v2.webp"},
  {
    id: "mount-kneisseh-relief-v2",
    type: "mountain",
    parent: "LB-JL",
    coords: [35.7500, 33.8667],
    name: { de: "Dschebel Kneisseh", hu: "Kneisseh-hegy", ro: "Muntele Kneisseh", en: "Mount Kneisseh" },
    description: {
      de: "Ein auffälliger Berggipfel, dessen Name 'Kirchenberg' bedeutet und der das Landschaftsbild östlich von Beirut prägt.",
      hu: "Szembetűnő hegycsúcs, melynek neve 'Templomhegyet' jelent, és meghatározza a Bejrúttól keletre elterülő tájat.",
      ro: "Un vârf muntos izbitor, al cărui nume înseamnă 'Muntele Bisericii' și care domină peisajul la est de Beirut.",
      en: "A striking mountain peak whose name means 'Church Mountain', dominating the landscape east of Beirut."
    },
    facts: {
      de: ["Höhe etwa 2090 Meter.", "Klare Sicht auf die Hauptstadt.", "Beliebte Wanderroute.", "Wichtige Relaisstationen für Funk."],
      hu: ["Magassága körülbelül 2090 méter.", "Tiszta rálátás a fővárosra.", "Népszerű túraútvonal.", "Fontos rádiórelé-állomások találhatók itt."],
      ro: ["Altitudine de aproximativ 2090 metri.", "Vedere clară către capitală.", "Traseu popular de drumeții.", "Stații importante de relee radio."],
      en: ["Elevation around 2090 meters.", "Clear view of the capital.", "Popular hiking route.", "Important radio relay stations."]
    }, image: "/poi-images/mount-kneisseh-relief-v2.webp"},
  {
    id: "qannoubine-valley-relief-v2",
    type: "valley",
    parent: "LB-AS",
    coords: [35.9667, 34.2500],
    name: { de: "Qannoubin-Tal", hu: "Kannúbin-völgy", ro: "Valea Qannoubine", en: "Qannoubine Valley" },
    description: {
      de: "Ein steiles und schwer zugängliches Tal, das jahrhundertelang als sicherer Rückzugsort für maronitische Gemeinschaften diente.",
      hu: "Meredek és nehezen megközelíthető völgy, amely évszázadokon át biztonságos menedékként szolgált a maronita közösségek számára.",
      ro: "O vale abruptă și greu accesibilă, care a servit secole la rând drept refugiu sigur pentru comunitățile maronite.",
      en: "A steep and inaccessible valley that served for centuries as a safe haven for Maronite communities."
    },
    facts: {
      de: ["Teil des Qadisha-Talsystems.", "Zahlreiche in den Fels gehauene Klöster.", "UNESCO-Weltkulturerbe.", "Extrem steile Felswände."],
      hu: ["A Kadisa-völgyrendszer része.", "Számos sziklába vájt kolostorral rendelkezik.", "Az UNESCO Világörökség része.", "Rendkívül meredek sziklafalak övezik."],
      ro: ["Parte a sistemului Văii Qadisha.", "Numeroase mănăstiri săpate în stâncă.", "Patrimoniu Mondial UNESCO.", "Pereți de stâncă extrem de abrupți."],
      en: ["Part of the Qadisha valley system.", "Numerous rock-hewn monasteries.", "UNESCO World Heritage site.", "Extremely steep rock faces."]
    }, image: "/poi-images/qannoubine-valley-relief-v2.webp"},
  {
    id: "batroun-coast-relief-v2",
    type: "coast",
    parent: "LB-AS",
    coords: [35.6583, 34.2500],
    name: { de: "Küste von Batroun", hu: "Batroun partvidéke", ro: "Coasta Batroun", en: "Batroun Coast" },
    description: {
      de: "Ein malerischer Küstenstreifen im Nordlibanon, der für seine natürlichen Felsformationen und klaren Buchten bekannt ist.",
      hu: "Festői partszakasz Észak-Libanonban, amely természetes sziklaalakzatairól és tiszta öbleiről ismert.",
      ro: "O fâșie de coastă pitorească în nordul Libanului, cunoscută pentru formațiunile sale naturale de rocă și golfurile limpezi.",
      en: "A picturesque coastline in northern Lebanon, known for its natural rock formations and clear bays."
    },
    facts: {
      de: ["Antike phönizische Meeresmauer.", "Beliebt bei Surfern.", "Klares, tiefblaues Wasser.", "Reiche marine Biodiversität."],
      hu: ["Ókori föníciai tengeri fal.", "A szörfösök kedvelt helye.", "Tiszta, mélykék víz jellemzi.", "Gazdag tengeri biológiai sokféleség."],
      ro: ["Zid maritim antic fenician.", "Popular printre surferi.", "Apă limpede, albastru închis.", "Bogată biodiversitate marină."],
      en: ["Ancient Phoenician sea wall.", "Popular with surfers.", "Clear, deep blue water.", "Rich marine biodiversity."]
    }, image: "/poi-images/batroun-coast-relief-v2.webp"},
  {
    id: "mount-niha-relief-v2",
    type: "mountain",
    parent: "LB-JL",
    coords: [35.6167, 33.5833],
    name: { de: "Dschebel Niha", hu: "Niha-hegy", ro: "Muntele Niha", en: "Mount Niha" },
    description: {
      de: "Ein markanter Gebirgsrücken, der das südliche Ende des Libanongebirges markiert und spektakuläre Schluchten birgt.",
      hu: "Jelentős hegygerinc, amely a Libanon-hegység déli végét jelzi, és látványos szurdokokat rejt.",
      ro: "O creastă montană proeminentă care marchează capătul sudic al Munților Liban și ascunde defilee spectaculoase.",
      en: "A prominent mountain ridge that marks the southern end of the Mount Lebanon range and conceals spectacular gorges."
    },
    facts: {
      de: ["Historische Festung in der Felswand.", "Tief eingeschnittene Täler.", "Strategischer Aussichtspunkt.", "Naturreservat in der Nähe."],
      hu: ["Történelmi erőd a sziklafalban.", "Mélyen bevágódó völgyek jellemzik.", "Stratégiai fontosságú kilátóhely.", "A közelben természetvédelmi terület található."],
      ro: ["Fortăreață istorică în peretele stâncos.", "Văi adânc incizate.", "Punct de observație strategic.", "Rezervație naturală în apropiere."],
      en: ["Historical fortress in the rock face.", "Deeply incised valleys.", "Strategic vantage point.", "Nature reserve nearby."]
    }
  },
  {
    id: "tannourine-mountains-relief-v2",
    type: "mountain",
    parent: "LB-AS",
    coords: [35.9333, 34.2000],
    name: { de: "Tannourine-Gebirge", hu: "Tannourine-hegység", ro: "Munții Tannourine", en: "Tannourine Mountains" },
    description: {
      de: "Eine zerklüftete und bewaldete Bergregion im Norden, die für ihre steilen Klippen und tiefen Dolinen bekannt ist.",
      hu: "Tagolt és erdős hegyvidék északon, amely meredek szikláiról és mély víznyelőiről ismert.",
      ro: "O regiune montană stâncoasă și împădurită în nord, cunoscută pentru stâncile sale abrupte și dolinele adânci.",
      en: "A rugged and forested mountain region in the north, known for its steep cliffs and deep sinkholes."
    },
    facts: {
      de: ["Heimat der Baatara-Schlucht.", "Wichtiges Klettergebiet.", "Dichte Zedernwälder.", "Verkarstete Kalksteinlandschaft."],
      hu: ["A Baatara-szurdok otthona.", "Jelentős sziklamászó terület.", "Sűrű cédruserdők borítják.", "Karsztosodott mészkőtáj jellemzi."],
      ro: ["Casa Defileului Baatara.", "Zonă importantă de escaladă.", "Păduri dese de cedru.", "Peisaj calcaros carstic."],
      en: ["Home to the Baatara Gorge.", "Important rock climbing area.", "Dense cedar forests.", "Karstified limestone landscape."]
    }, image: "/poi-images/tannourine-mountains-relief-v2.webp"},
  {
    id: "byblos-coast-relief-v2",
    type: "coast",
    parent: "LB-JL",
    coords: [35.6480, 34.1230],
    name: { de: "Küste von Byblos", hu: "Büblosz partvidéke", ro: "Coasta Byblos", en: "Byblos Coast" },
    description: {
      de: "Eine historisch geprägte Küstenlinie, wo sanfte Strände auf felsige Vorsprünge und jahrtausendealte Hafenanlagen treffen.",
      hu: "Történelmi múltú partvidék, ahol a homokos strandok sziklás kiszögellésekkel és évezredes kikötőkkel találkoznak.",
      ro: "O coastă cu o bogată istorie, unde plajele line se întâlnesc cu promontorii stâncoase și porturi milenare.",
      en: "A historically significant coastline where gentle beaches meet rocky outcrops and millennia-old harbors."
    },
    facts: {
      de: ["Einer der ältesten Häfen der Welt.", "Kleine vorgelagerte Riffe.", "Flaches Küstengewässer.", "Wichtiger Ort für Unterwasserarchäologie."],
      hu: ["A világ egyik legrégebbi kikötője.", "Kisebb part menti zátonyok találhatók itt.", "Sekély parti vizek jellemzik.", "Fontos víz alatti régészeti helyszín."],
      ro: ["Unul dintre cele mai vechi porturi din lume.", "Mici recife în larg.", "Ape de coastă puțin adânci.", "Loc important pentru arheologia subacvatică."],
      en: ["One of the oldest harbors in the world.", "Small offshore reefs.", "Shallow coastal waters.", "Important site for underwater archaeology."]
    }
  },
  {
    id: "nahr-al-kalb-valley-relief-v2",
    type: "valley",
    parent: "LB-JL",
    coords: [35.6000, 33.9500],
    name: { de: "Nahr al-Kalb-Tal", hu: "Nahr al-Kalb völgy", ro: "Valea Nahr al-Kalb", en: "Nahr al-Kalb Valley" },
    description: {
      de: "Das schmale Flusstal des 'Hundeflusses', das sich tief durch die Küstenberge schneidet und ein natürliches Hindernis bildet.",
      hu: "A 'Kutya-folyó' szűk völgye, amely mélyen bevágódik a parti hegyekbe, és természetes akadályt képez.",
      ro: "Valea îngustă a 'Râului Câinelui', care taie adânc prin munții de coastă și formează un obstacol natural.",
      en: "The narrow river valley of the 'Dog River', which cuts deep through the coastal mountains and forms a natural obstacle."
    },
    facts: {
      de: ["Historische Inschriften an den Felswänden.", "Steile Hänge auf beiden Seiten.", "Führt Schmelzwasser vom Sannin.", "Früher schwer passierbar."],
      hu: ["Történelmi feliratok a sziklafalakon.", "Mindkét oldalon meredek lejtők találhatók.", "A Szannín-hegy olvadékvizét szállítja.", "Korábban nehezen járható volt."],
      ro: ["Inscripții istorice pe pereții de stâncă.", "Versanți abrupți pe ambele părți.", "Transportă apa topită de pe Muntele Sannine.", "Odinioară greu de trecut."],
      en: ["Historical inscriptions on the rock faces.", "Steep slopes on both sides.", "Carries meltwater from Mount Sannine.", "Historically difficult to pass."]
    }, image: "/poi-images/nahr-al-kalb-valley-relief-v2.webp"},
  {
    id: "naqoura-coast-relief-v2",
    type: "coast",
    parent: "LB-JA",
    coords: [35.1333, 33.1167],
    name: { de: "Küste von Naqura", hu: "Nakúra partvidéke", ro: "Coasta Naqoura", en: "Naqoura Coast" },
    description: {
      de: "Der südlichste Küstenabschnitt des Libanon, der sich durch unberührte Klippen und klares Wasser auszeichnet.",
      hu: "Libanon legdélibb partszakasza, amelyet érintetlen sziklák és kristálytiszta víz jellemez.",
      ro: "Cea mai sudică porțiune de coastă a Libanului, caracterizată prin stânci neatinse și ape limpezi.",
      en: "The southernmost stretch of coast in Lebanon, characterized by pristine cliffs and clear water."
    },
    facts: {
      de: ["Grenzt direkt an Israel.", "Bedeutende Nistplätze für Meeresschildkröten.", "Weiße Kalksteinklippen.", "Weniger touristisch erschlossen."],
      hu: ["Közvetlenül Izraellel határos.", "Jelentős tengeri teknős fészkelőhelyek találhatók itt.", "Fehér mészkősziklák övezik.", "Kevésbé turisztikai célpont."],
      ro: ["Se învecinează direct cu Israelul.", "Locuri importante de cuibărit pentru țestoasele marine.", "Stânci albe de calcar.", "Mai puțin dezvoltată turistic."],
      en: ["Borders directly on Israel.", "Important nesting sites for sea turtles.", "White limestone cliffs.", "Less developed for tourism."]
    }
  },
  {
    id: "akkar-plateau-relief-v2",
    type: "plateau",
    parent: "LB-AK",
    coords: [36.1333, 34.5667],
    name: { de: "Akkar-Hochebene", hu: "Akkar-fennsík", ro: "Podișul Akkar", en: "Akkar Plateau" },
    description: {
      de: "Eine weite, hügelige Ebene im Norden des Landes, die durch fruchtbare Böden und vulkanisches Gestein geprägt ist.",
      hu: "Széles, dombos síkság az ország északi részén, amelyet termékeny talaj és vulkáni kőzetek jellemeznek.",
      ro: "Un podiș larg și deluros în nordul țării, caracterizat de soluri fertile și roci vulcanice.",
      en: "A wide, rolling plateau in the north of the country, characterized by fertile soils and volcanic rock."
    },
    facts: {
      de: ["Große landwirtschaftliche Bedeutung.", "Übergangszone zu Syrien.", "Geprägt von Basaltgestein.", "Reich an Wasserressourcen."],
      hu: ["Nagy mezőgazdasági jelentőséggel bír.", "Átmeneti zóna Szíria felé.", "Bazaltkőzetek határozzák meg.", "Gazdag vízkészletekkel rendelkezik."],
      ro: ["Mare importanță agricolă.", "Zonă de tranziție către Siria.", "Caracterizat de rocă bazaltică.", "Bogat în resurse de apă."],
      en: ["Great agricultural importance.", "Transition zone to Syria.", "Characterized by basaltic rock.", "Rich in water resources."]
    }
  },
  {
    id: "ouyoun-orghosh-plateau-relief-v2",
    type: "plateau",
    parent: "LB-BH",
    coords: [36.0333, 34.2333],
    name: { de: "Hochebene von Ouyoun Orghosh", hu: "Ouyoun Orghosh fennsík", ro: "Podișul Ouyoun Orghosh", en: "Ouyoun Orghosh Plateau" },
    description: {
      de: "Eine karge, hochgelegene Ebene am Rande der Baumgrenze, die von zahlreichen kleinen Bergquellen gespeist wird.",
      hu: "Kopár, magasan fekvő fennsík a fahatár szélén, amelyet számos kis hegyi forrás táplál.",
      ro: "Un podiș arid, de mare altitudine, la marginea limitei copacilor, alimentat de numeroase mici izvoare montane.",
      en: "A barren, high-altitude plateau at the edge of the tree line, fed by numerous small mountain springs."
    },
    facts: {
      de: ["Liegt auf über 2000 Metern Höhe.", "Viele natürliche Süßwasserquellen.", "Karge, felsige Landschaft.", "Beliebt für Sommerausflüge."],
      hu: ["Több mint 2000 méteres magasságban fekszik.", "Számos természetes édesvizű forrása van.", "Kopár, sziklás táj jellemzi.", "Népszerű nyári kirándulóhely."],
      ro: ["Situat la peste 2000 de metri altitudine.", "Multe izvoare naturale de apă dulce.", "Peisaj stâncos și arid.", "Popular pentru excursiile de vară."],
      en: ["Situated at over 2000 meters elevation.", "Many natural freshwater springs.", "Barren, rocky landscape.", "Popular for summer excursions."]
    }
  }
];
