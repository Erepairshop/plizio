import type { POI } from "./poi";

export const poiExtraIsraelEconomicV2: POI[] = [
  {
    id: "il-port-haifa-economic-v2",
    type: "port",
    parent: "IL-HA",
    coords: [35.0116, 32.8197],
    name: { de: "Hafen von Haifa", hu: "Haifai kikötő", ro: "Portul Haifa", en: "Port of Haifa" },
    description: { de: "Der größte Seehafen Israels, der eine zentrale Rolle im internationalen Handel und im Passagierverkehr des Landes spielt.", hu: "Izrael legnagyobb tengeri kikötője, amely központi szerepet játszik az ország nemzetközi kereskedelmében és személyforgalmában.", ro: "Cel mai mare port maritim din Israel, având un rol central în comerțul internațional și traficul de pasageri al țării.", en: "The largest seaport in Israel, playing a central role in the country's international trade and passenger traffic." },
    facts: {
      de: ["Eröffnet im Jahr 1933.", "Wichtiger Knotenpunkt am Mittelmeer.", "Befindet sich an der Bucht von Haifa."],
      hu: ["1933-ban nyitották meg.", "Fontos csomópont a Földközi-tengeren.", "A Haifai-öbölben található."],
      ro: ["Deschis în anul 1933.", "Nod important la Marea Mediterană.", "Situat în Golful Haifa."],
      en: ["Opened in 1933.", "Important hub on the Mediterranean Sea.", "Located on the Bay of Haifa."]
    }
  },
  {
    id: "il-port-ashdod-economic-v2",
    type: "port",
    parent: "IL-D",
    coords: [34.6469, 31.8344],
    name: { de: "Hafen von Aschdod", hu: "Asdodi kikötő", ro: "Portul Așdod", en: "Port of Ashdod" },
    description: { de: "Ein bedeutender Frachthafen an der Mittelmeerküste, der einen großen Teil der israelischen Importe und Exporte abwickelt.", hu: "Jelentős teherkikötő a Földközi-tenger partján, amely az izraeli import és export nagy részét bonyolítja le.", ro: "Un port de marfă important pe coasta mediteraneană, care gestionează o mare parte din importurile și exporturile Israelului.", en: "A major cargo port on the Mediterranean coast, handling a large portion of Israel's imports and exports." },
    facts: {
      de: ["Zweitgrößter Hafen des Landes.", "In den 1960er Jahren erbaut.", "Wichtig für die südliche Wirtschaft."],
      hu: ["Az ország második legnagyobb kikötője.", "Az 1960-as években épült.", "Fontos a déli gazdaság számára."],
      ro: ["Al doilea port ca mărime din țară.", "Construit în anii 1960.", "Important pentru economia sudică."],
      en: ["Second largest port in the country.", "Built in the 1960s.", "Important for the southern economy."]
    }
  },
  {
    id: "il-port-eilat-economic-v2",
    type: "port",
    parent: "IL-D",
    coords: [34.9541, 29.5394],
    name: { de: "Hafen von Eilat", hu: "Eilati kikötő", ro: "Portul Eilat", en: "Port of Eilat" },
    description: { de: "Israels einziger Hafen am Roten Meer, der den direkten maritimen Zugang zu den Märkten in Asien und Ostafrika ermöglicht.", hu: "Izrael egyetlen kikötője a Vörös-tengeren, amely közvetlen tengeri hozzáférést biztosít az ázsiai és kelet-afrikai piacokhoz.", ro: "Singurul port al Israelului la Marea Roșie, oferind acces maritim direct către piețele din Asia și Africa de Est.", en: "Israel's only port on the Red Sea, providing direct maritime access to markets in Asia and East Africa." },
    facts: {
      de: ["Lage am Golf von Akaba.", "Wichtig für den asiatischen Handel.", "Südlichster Hafen Israels."],
      hu: ["Az Akabai-öbölben fekszik.", "Fontos az ázsiai kereskedelem számára.", "Izrael legdélibb kikötője."],
      ro: ["Situat în Golful Aqaba.", "Important pentru comerțul cu Asia.", "Cel mai sudic port din Israel."],
      en: ["Located on the Gulf of Aqaba.", "Important for trade with Asia.", "Southernmost port of Israel."]
    }
  },
  {
    id: "il-orot-rabin-economic-v2",
    type: "energy",
    parent: "IL-HA",
    coords: [34.8817, 32.4681],
    name: { de: "Kraftwerk Orot Rabin", hu: "Orot Rabin Erőmű", ro: "Centrala Electrică Orot Rabin", en: "Orot Rabin Power Station" },
    description: { de: "Das größte Kraftwerk Israels, das sich an der Küste von Hadera befindet und einen erheblichen Teil des landesweiten Stroms erzeugt.", hu: "Izrael legnagyobb erőműve, amely Hadera partján található, és az országos áramtermelés jelentős részét adja.", ro: "Cea mai mare centrală electrică din Israel, situată pe coasta Haderei, producând o parte semnificativă a energiei țării.", en: "The largest power station in Israel, located on the coast of Hadera, generating a significant portion of the country's electricity." },
    facts: {
      de: ["Wurde 1981 in Betrieb genommen.", "Verwendet hauptsächlich Kohle und Gas.", "Befindet sich bei Hadera."],
      hu: ["1981-ben helyezték üzembe.", "Főként szenet és gázt használ.", "Hadera mellett található."],
      ro: ["Pusă în funcțiune în 1981.", "Folosește în principal cărbune și gaz.", "Situată lângă Hadera."],
      en: ["Commissioned in 1981.", "Uses primarily coal and gas.", "Located near Hadera."]
    }
  },
  {
    id: "il-rutenberg-economic-v2",
    type: "energy",
    parent: "IL-D",
    coords: [34.5200, 31.6264],
    name: { de: "Kraftwerk Rutenberg", hu: "Rutenberg Erőmű", ro: "Centrala Electrică Rutenberg", en: "Rutenberg Power Station" },
    description: { de: "Ein bedeutendes Kohle- und Gaskraftwerk in der Nähe von Aschkelon, das eine wichtige Rolle in der Energieversorgung des Südens spielt.", hu: "Jelentős szén- és gázerőmű Askelón közelében, amely fontos szerepet játszik a déli régió energiaellátásában.", ro: "O importantă centrală electrică pe cărbune și gaz lângă Așkelon, care joacă un rol major în aprovizionarea cu energie a sudului.", en: "A major coal and gas power plant near Ashkelon, playing an important role in the energy supply of the south." },
    facts: {
      de: ["Benannt nach Pinchas Rutenberg.", "Zweitgrößtes Kraftwerk des Landes.", "Liegt direkt am Mittelmeer."],
      hu: ["Pinhasz Rutenbergről kapta a nevét.", "Az ország második legnagyobb erőműve.", "Közvetlenül a Földközi-tenger partján fekszik."],
      ro: ["Numită după Pinhas Rutenberg.", "A doua cea mai mare centrală din țară.", "Situată direct la Marea Mediterană."],
      en: ["Named after Pinhas Rutenberg.", "Second largest power plant in the country.", "Located directly on the Mediterranean."]
    }
  },
  {
    id: "il-reading-economic-v2",
    type: "energy",
    parent: "IL-TA",
    coords: [34.7761, 32.1039],
    name: { de: "Kraftwerk Reading", hu: "Reading Erőmű", ro: "Centrala Electrică Reading", en: "Reading Power Station" },
    description: { de: "Ein historisches Kraftwerk in Tel Aviv, das heute mit Erdgas betrieben wird und ein markantes Wahrzeichen der städtischen Küstenlinie ist.", hu: "Történelmi erőmű Tel-Avivban, amelyet ma földgázzal üzemeltetnek, és a városi partvonal jellegzetes tájékozódási pontja.", ro: "O centrală electrică istorică din Tel Aviv, operată în prezent cu gaze naturale, fiind un punct de reper pe coasta orașului.", en: "A historic power station in Tel Aviv, now powered by natural gas, which is a prominent landmark of the city's coastline." },
    facts: {
      de: ["Eröffnet im Jahr 1938.", "Liegt an der Mündung des Jarkon.", "Architektur im Bauhaus-Stil."],
      hu: ["1938-ban nyitották meg.", "A Jarkon folyó torkolatánál fekszik.", "Bauhaus stílusú építészet."],
      ro: ["Deschisă în anul 1938.", "Situată la gura râului Yarkon.", "Arhitectură în stil Bauhaus."],
      en: ["Opened in 1938.", "Located at the mouth of the Yarkon.", "Bauhaus-style architecture."]
    }
  },
  {
    id: "il-ashalim-economic-v2",
    type: "energy",
    parent: "IL-D",
    coords: [34.7350, 31.0250],
    name: { de: "Sonnenkraftwerk Ashalim", hu: "Ashalim Naperőmű", ro: "Centrala Solară Ashalim", en: "Ashalim Power Station" },
    description: { de: "Ein innovatives Solarkraftwerk in der Negev-Wüste, das einen der höchsten Solartürme der Welt besitzt und erneuerbare Energie liefert.", hu: "Innovatív naperőmű a Negev-sivatagban, amely a világ egyik legmagasabb naptornyával rendelkezik, és megújuló energiát szolgáltat.", ro: "O centrală solară inovatoare în deșertul Negev, cu unul dintre cele mai înalte turnuri solare din lume, furnizând energie regenerabilă.", en: "An innovative solar power plant in the Negev Desert, featuring one of the tallest solar towers in the world and providing renewable energy." },
    facts: {
      de: ["Turmhöhe von über 240 Metern.", "Nutzt Tausende von Spiegeln.", "Wichtig für grüne Energie in Israel."],
      hu: ["A torony magassága több mint 240 méter.", "Több ezer tükröt használ.", "Fontos a zöld energia szempontjából Izraelben."],
      ro: ["Înălțimea turnului este de peste 240 de metri.", "Folosește mii de oglinzi.", "Importantă pentru energia verde în Israel."],
      en: ["Tower height of over 240 meters.", "Uses thousands of mirrors.", "Important for green energy in Israel."]
    }
  },
  {
    id: "il-haifa-refinery-economic-v2",
    type: "industry",
    parent: "IL-HA",
    coords: [35.0394, 32.7931],
    name: { de: "Raffinerie Haifa", hu: "Haifai Finomító", ro: "Rafinăria Haifa", en: "Haifa Oil Refinery" },
    description: { de: "Eine der größten Erdölraffinerien des Landes, bekannt für ihre ikonischen Kühltürme, die industrielle Kraft und Geschichte repräsentieren.", hu: "Az ország egyik legnagyobb kőolajfinomítója, amely ikonikus hűtőtornyairól ismert, és az ipari erőt valamint a történelmet jelképezi.", ro: "Una dintre cele mai mari rafinării de petrol din țară, cunoscută pentru turnurile sale de răcire iconice, reprezentând puterea industrială.", en: "One of the largest oil refineries in the country, known for its iconic cooling towers that represent industrial power and history." },
    facts: {
      de: ["Gegründet in der britischen Mandatszeit.", "Gehört zur Bazan-Gruppe.", "Wichtig für die petrochemische Industrie."],
      hu: ["A brit mandátum idején alapították.", "A Bazan csoport része.", "Fontos a petrolkémiai ipar számára."],
      ro: ["Fondată în perioada mandatului britanic.", "Aparține Grupului Bazan.", "Importantă pentru industria petrochimică."],
      en: ["Founded during the British Mandate.", "Part of the Bazan Group.", "Important for the petrochemical industry."]
    }
  },
  {
    id: "il-ashdod-refinery-economic-v2",
    type: "industry",
    parent: "IL-D",
    coords: [34.6644, 31.8239],
    name: { de: "Raffinerie Aschdod", hu: "Asdodi Finomító", ro: "Rafinăria Așdod", en: "Ashdod Oil Refinery" },
    description: { de: "Ein moderner petrochemischer Komplex, der einen erheblichen Teil des israelischen Treibstoffbedarfs produziert und verarbeitet.", hu: "Modern petrolkémiai komplexum, amely az izraeli üzemanyag-szükséglet jelentős részét termeli és dolgozza fel.", ro: "Un complex petrochimic modern care produce și procesează o parte semnificativă din necesarul de combustibil al Israelului.", en: "A modern petrochemical complex that produces and processes a significant portion of Israel's fuel needs." },
    facts: {
      de: ["Inbetriebnahme im Jahr 1973.", "Zweitgrößte Raffinerie in Israel.", "Produziert Treibstoffe und Chemikalien."],
      hu: ["1973-ban helyezték üzembe.", "Izrael második legnagyobb finomítója.", "Üzemanyagokat és vegyszereket gyárt."],
      ro: ["Pusă în funcțiune în 1973.", "A doua rafinărie ca mărime din Israel.", "Produce combustibili și substanțe chimice."],
      en: ["Commissioned in 1973.", "Second largest refinery in Israel.", "Produces fuels and chemicals."]
    }
  },
  {
    id: "il-dead-sea-works-economic-v2",
    type: "industry",
    parent: "IL-D",
    coords: [35.3970, 31.0360],
    name: { de: "Totes Meer Werke", hu: "Holt-tengeri Művek", ro: "Uzinele Mării Moarte", en: "Dead Sea Works" },
    description: { de: "Ein riesiger industrieller Komplex, der wertvolle Mineralien wie Kali, Brom und Magnesium aus dem Wasser des Toten Meeres extrahiert.", hu: "Hatalmas ipari komplexum, amely értékes ásványokat, például hamuzsírt, brómot és magnéziumot von ki a Holt-tenger vizéből.", ro: "Un complex industrial uriaș care extrage minerale valoroase precum potasiu, brom și magneziu din apa Mării Moarte.", en: "A huge industrial complex that extracts valuable minerals such as potash, bromine, and magnesium from the water of the Dead Sea." },
    facts: {
      de: ["Gegründet im Jahr 1929.", "Einer der weltgrößten Düngemittelproduzenten.", "Liegt am südlichen Becken des Sees."],
      hu: ["1929-ben alapították.", "A világ egyik legnagyobb műtrágyagyártója.", "A tó déli medencéjénél található."],
      ro: ["Fondată în anul 1929.", "Unul dintre cei mai mari producători de îngrășăminte.", "Situată pe bazinul sudic al mării."],
      en: ["Founded in 1929.", "One of the world's largest fertilizer producers.", "Located on the southern basin of the sea."]
    }
  },
  {
    id: "il-ramat-hovav-economic-v2",
    type: "industry",
    parent: "IL-D",
    coords: [34.8144, 31.1444],
    name: { de: "Industriegebiet Ramat Hovaw", hu: "Ramat Hovav Ipari Park", ro: "Zona Industrială Ramat Hovav", en: "Ramat Hovav Industrial Zone" },
    description: { de: "Ein bedeutendes Zentrum für die chemische Industrie im Süden Israels, das zahlreiche Fabriken und Entsorgungseinrichtungen beherbergt.", hu: "A vegyipar jelentős központja Izrael déli részén, amely számos gyárnak és hulladékkezelő létesítménynek ad otthont.", ro: "Un centru major pentru industria chimică în sudul Israelului, găzduind numeroase fabrici și instalații de eliminare a deșeurilor.", en: "A major center for the chemical industry in southern Israel, home to numerous factories and waste disposal facilities." },
    facts: {
      de: ["Südlich von Be'er Scheva gelegen.", "Schwerpunkt auf Schwerindustrie.", "Verfügt über eine Sondermülldeponie."],
      hu: ["Beér-Seva városától délre fekszik.", "A nehéziparra összpontosít.", "Veszélyes hulladék lerakóval rendelkezik."],
      ro: ["Situată la sud de Beer Șeva.", "Se concentrează pe industria grea.", "Dispune de un depozit de deșeuri periculoase."],
      en: ["Located south of Beersheba.", "Focus on heavy industry.", "Has a hazardous waste landfill."]
    }
  },
  {
    id: "il-diamond-exchange-economic-v2",
    type: "trade-hub",
    parent: "IL-TA",
    coords: [34.8025, 32.0839],
    name: { de: "Israelische Diamantenbörse", hu: "Izraeli Gyémánttőzsde", ro: "Bursa de Diamante din Israel", en: "Israel Diamond Exchange" },
    description: { de: "Das Herzstück des israelischen Diamantenhandels in Ramat Gan, das als einer der wichtigsten Umschlagplätze der Welt für Edelsteine gilt.", hu: "Az izraeli gyémántkereskedelem központja Ramat Ganban, amely a világ egyik legfontosabb drágakő-elosztó helye.", ro: "Inima comerțului cu diamante din Israel în Ramat Gan, considerat unul dintre cele mai importante centre de pietre prețioase din lume.", en: "The heart of the Israeli diamond trade in Ramat Gan, considered one of the world's most important trading hubs for gemstones." },
    facts: {
      de: ["Ein Komplex aus vier Hochhäusern.", "Strengste Sicherheitsvorkehrungen.", "Verantwortlich für riesige Exportvolumen."],
      hu: ["Négy felhőkarcolóból álló komplexum.", "Szigorú biztonsági intézkedések jellemzik.", "Hatalmas exportvolumenért felelős."],
      ro: ["Un complex format din patru zgârie-nori.", "Măsuri stricte de securitate.", "Responsabil pentru volume uriașe de export."],
      en: ["A complex of four skyscrapers.", "Strict security measures.", "Responsible for huge export volumes."]
    }
  },
  {
    id: "il-matam-park-economic-v2",
    type: "industry",
    parent: "IL-HA",
    coords: [34.9578, 32.7892],
    name: { de: "Matam-Park", hu: "Matam Ipari Park", ro: "Parcul Matam", en: "Matam High-Tech Park" },
    description: { de: "Der erste und größte High-Tech-Park in Israel, gelegen in Haifa, der zahlreiche globale Technologieunternehmen und Forschungszentren anzieht.", hu: "Izrael első és legnagyobb csúcstechnológiai parkja Haifában, amely számos globális technológiai vállalatot és kutatóközpontot vonz.", ro: "Primul și cel mai mare parc high-tech din Israel, situat în Haifa, atrăgând numeroase companii tehnologice globale și centre de cercetare.", en: "The first and largest high-tech park in Israel, located in Haifa, attracting numerous global technology companies and research centers." },
    facts: {
      de: ["Gegründet in den 1970er Jahren.", "Knotenpunkt der israelischen Innovation.", "Beschäftigt Zehntausende von Ingenieuren."],
      hu: ["Az 1970-es években alapították.", "Az izraeli innováció központja.", "Mérnökök tízezreit foglalkoztatja."],
      ro: ["Fondat în anii 1970.", "Centrul inovației israeliene.", "Angajează zeci de mii de ingineri."],
      en: ["Founded in the 1970s.", "Hub of Israeli innovation.", "Employs tens of thousands of engineers."]
    }
  },
  {
    id: "il-airport-city-economic-v2",
    type: "trade-hub",
    parent: "IL-M",
    coords: [34.9122, 32.0000],
    name: { de: "Airport City Tel Aviv", hu: "Airport City Tel-Aviv", ro: "Airport City Tel Aviv", en: "Airport City Tel Aviv" },
    description: { de: "Ein bedeutendes Geschäfts- und Logistikzentrum in der Nähe des Ben-Gurion-Flughafens, das als Drehscheibe für Handel und Unternehmen dient.", hu: "Jelentős üzleti és logisztikai központ a Ben Gurion repülőtér közelében, amely a kereskedelem és a vállalatok csomópontjaként szolgál.", ro: "Un centru important de afaceri și logistică lângă Aeroportul Ben Gurion, care servește ca un hub pentru comerț și companii.", en: "A major business and logistics center near Ben Gurion Airport, serving as a hub for trade and companies." },
    facts: {
      de: ["Zentrale Lage in Israel.", "Sitz vieler Firmenzentralen.", "Bietet umfangreiche Lagerkapazitäten."],
      hu: ["Központi elhelyezkedés Izraelben.", "Sok vállalati központ székhelye.", "Jelentős raktárkapacitást kínál."],
      ro: ["Locație centrală în Israel.", "Sediul multor corporații.", "Oferă capacități mari de depozitare."],
      en: ["Central location in Israel.", "Headquarters of many corporations.", "Offers large storage capacities."]
    }
  },
  {
    id: "il-sorek-desalination-economic-v2",
    type: "industry",
    parent: "IL-M",
    coords: [34.7081, 31.9333],
    name: { de: "Meerwasserentsalzungsanlage Sorek", hu: "Sorek Sótalanító Üzem", ro: "Uzina de desalinizare Sorek", en: "Sorek Desalination Plant" },
    description: { de: "Eine der größten Umkehrosmose-Entsalzungsanlagen der Welt, die einen entscheidenden Beitrag zur Trinkwasserversorgung des Landes leistet.", hu: "A világ egyik legnagyobb fordított ozmózisos sótalanító üzeme, amely döntő mértékben hozzájárul az ország ivóvízellátásához.", ro: "Una dintre cele mai mari uzine de desalinizare cu osmoză inversă din lume, contribuind decisiv la alimentarea cu apă potabilă a țării.", en: "One of the world's largest reverse osmosis desalination plants, making a crucial contribution to the country's drinking water supply." },
    facts: {
      de: ["Ging 2013 in Betrieb.", "Produziert Millionen Kubikmeter Wasser.", "Nutzung fortschrittlicher Filtertechnik."],
      hu: ["2013-ban kezdte meg működését.", "Több millió köbméter vizet termel.", "Fejlett szűréstechnikát alkalmaz."],
      ro: ["A intrat în funcțiune în 2013.", "Produce milioane de metri cubi de apă.", "Utilizează tehnologie avansată de filtrare."],
      en: ["Began operations in 2013.", "Produces millions of cubic meters of water.", "Uses advanced filtration technology."]
    }
  },
  {
    id: "il-hadera-desalination-economic-v2",
    type: "industry",
    parent: "IL-HA",
    coords: [34.8822, 32.4700],
    name: { de: "Entsalzungsanlage Hadera", hu: "Haderai Sótalanító Üzem", ro: "Uzina de desalinizare Hadera", en: "Hadera Desalination Plant" },
    description: { de: "Eine wichtige Anlage an der Mittelmeerküste, die Meerwasser in Trinkwasser umwandelt und die Wasserknappheit der Region lindert.", hu: "Fontos létesítmény a Földközi-tenger partján, amely tengervizet ivóvízzé alakít, enyhítve a régió vízhiányát.", ro: "O instalație importantă pe coasta mediteraneană care transformă apa de mare în apă potabilă, atenuând deficitul de apă al regiunii.", en: "An important facility on the Mediterranean coast that converts seawater into drinking water, alleviating the region's water scarcity." },
    facts: {
      de: ["Eröffnet im Jahr 2009.", "Eine der größten Anlagen ihrer Art.", "Arbeitet eng mit dem Kraftwerk zusammen."],
      hu: ["2009-ben nyitották meg.", "A maga nemében az egyik legnagyobb létesítmény.", "Szorosan együttműködik az erőművel."],
      ro: ["Deschisă în anul 2009.", "Una dintre cele mai mari facilități de acest gen.", "Lucrează îndeaproape cu centrala electrică."],
      en: ["Opened in 2009.", "One of the largest facilities of its kind.", "Works closely with the power plant."]
    }
  },
  {
    id: "il-zin-mine-economic-v2",
    type: "mine",
    parent: "IL-D",
    coords: [35.1500, 30.9333],
    name: { de: "Phosphatmine Zin", hu: "Cin Foszfátbánya", ro: "Mina de fosfați Zin", en: "Zin Phosphate Mine" },
    description: { de: "Eine der wichtigsten Minen in der Negev-Wüste, die große Mengen an Phosphaten für die chemische Industrie und den Export abbaut.", hu: "A Negev-sivatag egyik legfontosabb bányája, amely nagy mennyiségű foszfátot termel ki a vegyipar és az export számára.", ro: "Una dintre cele mai importante mine din deșertul Negev, extrăgând cantități mari de fosfați pentru industria chimică și export.", en: "One of the most important mines in the Negev Desert, extracting large quantities of phosphates for the chemical industry and export." },
    facts: {
      de: ["Liegt tief in der Wüstenlandschaft.", "Sichert wertvolle Rohstoffe.", "Teil der israelischen Düngemittelproduktion."],
      hu: ["Mélyen a sivatagi tájban fekszik.", "Értékes nyersanyagokat biztosít.", "Az izraeli műtrágyagyártás része."],
      ro: ["Situată adânc în peisajul deșertic.", "Asigură materii prime valoroase.", "Parte a producției israeliene de îngrășăminte."],
      en: ["Located deep in the desert landscape.", "Secures valuable raw materials.", "Part of Israeli fertilizer production."]
    }
  },
  {
    id: "il-ashkelon-terminal-economic-v2",
    type: "trade-hub",
    parent: "IL-D",
    coords: [34.5167, 31.6333],
    name: { de: "Ölterminal Aschkelon", hu: "Askelóni Olajterminál", ro: "Terminalul petrolier Așkelon", en: "Ashkelon Oil Terminal" },
    description: { de: "Ein entscheidender Knotenpunkt für den Öltransport, der das Rote Meer mit dem Mittelmeer verbindet und internationale Märkte versorgt.", hu: "Az olajszállítás döntő csomópontja, amely összeköti a Vörös-tengert a Földközi-tengerrel, és nemzetközi piacokat lát el.", ro: "Un punct central pentru transportul de petrol, conectând Marea Roșie cu Marea Mediterană și aprovizionând piețele internaționale.", en: "A crucial hub for oil transport, connecting the Red Sea with the Mediterranean and supplying international markets." },
    facts: {
      de: ["Teil der EAPC-Pipeline.", "Kann große Supertanker abfertigen.", "Strategisch wichtige Infrastruktur."],
      hu: ["Az EAPC vezeték része.", "Nagy szupertankereket is képes fogadni.", "Stratégiailag fontos infrastruktúra."],
      ro: ["Parte a conductei EAPC.", "Poate deservi supertancuri mari.", "Infrastructură strategică importantă."],
      en: ["Part of the EAPC pipeline.", "Can handle large supertankers.", "Strategically important infrastructure."]
    }
  },
  {
    id: "il-osem-sderot-economic-v2",
    type: "industry",
    parent: "IL-D",
    coords: [34.5833, 31.5167],
    name: { de: "Osem-Werk Sderot", hu: "Osem Gyár Szderót", ro: "Fabrica Osem Sderot", en: "Osem Factory Sderot" },
    description: { de: "Eine große Lebensmittelproduktionsstätte in Süd-Israel, die eine Vielzahl von beliebten israelischen Snacks und Grundnahrungsmitteln herstellt.", hu: "Nagy élelmiszergyártó létesítmény Dél-Izraelben, amely számos népszerű izraeli rágcsálnivalót és alapvető élelmiszert állít elő.", ro: "O mare unitate de producție alimentară în sudul Israelului, care fabrică o varietate de gustări populare și alimente de bază israeliene.", en: "A large food production facility in southern Israel, manufacturing a variety of popular Israeli snacks and staple foods." },
    facts: {
      de: ["Gehört zu den größten Arbeitgebern der Region.", "Produziert die berühmten Bamba-Snacks.", "Symbol der industriellen Resilienz."],
      hu: ["A régió egyik legnagyobb munkaadója.", "A híres Bamba snackeket is gyártja.", "Az ipari ellenállóképesség szimbóluma."],
      ro: ["Unul dintre cei mai mari angajatori din regiune.", "Produce faimoasele gustări Bamba.", "Simbol al rezilienței industriale."],
      en: ["One of the largest employers in the region.", "Produces the famous Bamba snacks.", "Symbol of industrial resilience."]
    }
  },
  {
    id: "il-caesarea-park-economic-v2",
    type: "industry",
    parent: "IL-HA",
    coords: [34.9333, 32.4833],
    name: { de: "Gewerbepark Caesarea", hu: "Caesarea Üzleti Park", ro: "Parcul de Afaceri Cezareea", en: "Caesarea Business Park" },
    description: { de: "Ein umweltfreundlicher und moderner Industriepark, der eine breite Palette von High-Tech-, Medizintechnik- und Logistikunternehmen anzieht.", hu: "Környezetbarát és modern ipari park, amely a csúcstechnológiai, orvostechnikai és logisztikai vállalatok széles skáláját vonzza.", ro: "Un parc industrial modern și ecologic, care atrage o gamă largă de companii de înaltă tehnologie, tehnologie medicală și logistică.", en: "An eco-friendly and modern industrial park attracting a wide range of high-tech, medical technology, and logistics companies." },
    facts: {
      de: ["Zählt zu den größten Gewerbeparks in Israel.", "Fokus auf nachhaltige Entwicklung.", "Bietet moderne Infrastruktur."],
      hu: ["Izrael egyik legnagyobb üzleti parkja.", "A fenntartható fejlődésre összpontosít.", "Modern infrastruktúrát kínál."],
      ro: ["Unul dintre cele mai mari parcuri de afaceri din Israel.", "Se concentrează pe dezvoltarea durabilă.", "Oferă infrastructură modernă."],
      en: ["One of the largest business parks in Israel.", "Focus on sustainable development.", "Offers modern infrastructure."]
    }
  }
];