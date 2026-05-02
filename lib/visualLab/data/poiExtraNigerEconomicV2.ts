import type { POI } from "./poi";

export const poiExtraNigerEconomicV2: POI[] = [
  {
    id: "somair-uranium-mine-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [7.3833, 18.7333],
    name: { de: "Uranmine SOMAIR", hu: "SOMAIR Uránbánya", ro: "Mina de uraniu SOMAIR", en: "SOMAIR Uranium Mine" },
    description: { de: "Eine der größten und ältesten Uranminen im Niger nahe Arlit, die von der Gesellschaft SOMAIR im Tagebau betrieben wird.", hu: "Niger egyik legnagyobb és legrégebbi uránbányája Arlit közelében, amelyet a SOMAIR vállalat üzemeltet külszíni fejtéssel.", ro: "Una dintre cele mai mari și mai vechi mine de uraniu din Niger, lângă Arlit, operată de compania SOMAIR ca mină cu carieră deschisă.", en: "One of the largest and oldest uranium mines in Niger near Arlit, operated by the SOMAIR company as an open-pit mine." },
    facts: {
      de: ["1971 in Betrieb genommen.", "Liegt nahe der Stadt Arlit.", "Tagebau-Uranmine."],
      hu: ["1971-ben kezdte meg működését.", "Arlit város közelében található.", "Külszíni uránbánya."],
      ro: ["Pusă în funcțiune în 1971.", "Situată lângă orașul Arlit.", "Mină de uraniu de suprafață."],
      en: ["Started operations in 1971.", "Located near the city of Arlit.", "Open-pit uranium mine."],
    }
  },
  {
    id: "cominak-akouta-mine-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [7.3667, 18.75],
    name: { de: "Uranmine COMINAK", hu: "COMINAK Uránbánya", ro: "Mina de uraniu COMINAK", en: "COMINAK Uranium Mine" },
    description: { de: "Eine historische Untertage-Uranmine in Akouta nahe Arlit, die jahrzehntelang zu den größten der Welt gehörte, bevor sie 2021 geschlossen wurde.", hu: "Történelmi földalatti uránbánya Akoutában, Arlit közelében, amely évtizedekig a világ legnagyobbjai közé tartozott, mielőtt 2021-ben bezárták.", ro: "O mină istorică de uraniu subterană din Akouta, lângă Arlit, care a fost una dintre cele mai mari din lume timp de decenii înainte de a se închide în 2021.", en: "A historic underground uranium mine in Akouta near Arlit, which was among the world's largest for decades before closing in 2021." },
    facts: {
      de: ["Tiefbau-Uranmine.", "Wurde im März 2021 geschlossen.", "Produzierte über 75.000 Tonnen Uran."],
      hu: ["Földalatti uránbánya.", "2021 márciusában zárták be.", "Több mint 75 000 tonna uránt termelt."],
      ro: ["Mină de uraniu subterană.", "A fost închisă în martie 2021.", "A produs peste 75.000 de tone de uraniu."],
      en: ["Underground uranium mine.", "Was closed in March 2021.", "Produced over 75,000 tonnes of uranium."],
    }
  },
  {
    id: "imouraren-mine-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [7.9333, 18.0667],
    name: { de: "Uranprojekt Imouraren", hu: "Imouraren Uránprojekt", ro: "Proiectul de uraniu Imouraren", en: "Imouraren Uranium Project" },
    description: { de: "Eines der größten unerschlossenen Uranvorkommen der Welt, südlich von Arlit gelegen, mit Plänen für einen massiven zukünftigen Abbau.", hu: "A világ egyik legnagyobb feltáratlan uránlelőhelye, Arlittól délre, masszív jövőbeli kitermelési tervekkel.", ro: "Unul dintre cele mai mari zăcăminte de uraniu neexploatate din lume, la sud de Arlit, cu planuri pentru o exploatare masivă viitoare.", en: "One of the largest undeveloped uranium deposits in the world, located south of Arlit, with plans for massive future extraction." },
    facts: {
      de: ["Riesiges Uranvorkommen.", "Wartet auf günstigere Marktbedingungen.", "Könnte Niger zum Top-Produzenten machen."],
      hu: ["Hatalmas uránlelőhely.", "Kedvezőbb piaci feltételekre vár.", "Nigert a vezető termelők közé emelheti."],
      ro: ["Zăcământ masiv de uraniu.", "Așteaptă condiții de piață mai favorabile.", "Ar putea face din Niger un producător de top."],
      en: ["Massive uranium deposit.", "Waiting for favorable market conditions.", "Could make Niger a top producer."],
    }
  },
  {
    id: "soraz-zinder-refinery-economic-v2",
    type: "industry",
    parent: "NE-7",
    coords: [9.0558, 14.1554],
    name: { de: "Raffinerie SORAZ", hu: "SORAZ Olajfinomító", ro: "Rafinăria SORAZ", en: "SORAZ Refinery" },
    description: { de: "Die einzige Erdölraffinerie Nigers nahe Zinder, betrieben als Joint Venture mit China zur Verarbeitung des in Agadem geförderten Rohöls.", hu: "Niger egyetlen olajfinomítója Zinder közelében, amelyet Kínával közös vállalatként üzemeltetnek az Agademben kitermelt kőolaj feldolgozására.", ro: "Singura rafinărie de petrol din Niger lângă Zinder, operată ca un joint venture cu China pentru a procesa țițeiul extras din Agadem.", en: "Niger's only oil refinery near Zinder, operated as a joint venture with China to process crude oil extracted in Agadem." },
    facts: {
      de: ["Kapazität von 20.000 Barrel/Tag.", "Liegt in der Region Zinder.", "Verarbeitet Öl aus dem Agadem-Becken."],
      hu: ["Kapacitása 20 000 hordó/nap.", "Zinder régióban található.", "Az Agadem-medence olaját dolgozza fel."],
      ro: ["Capacitate de 20.000 de barili/zi.", "Situată în regiunea Zinder.", "Procesează petrol din bazinul Agadem."],
      en: ["Capacity of 20,000 barrels/day.", "Located in the Zinder region.", "Processes oil from the Agadem basin."],
    }
  },
  {
    id: "agadem-oil-field-economic-v2",
    type: "industry",
    parent: "NE-3",
    coords: [13.25, 14.5],
    name: { de: "Ölfeld Agadem", hu: "Agadem Olajmező", ro: "Câmpul petrolier Agadem", en: "Agadem Oil Field" },
    description: { de: "Ein großes Erdölfördergebiet im Osten Nigers, das die Grundlage für die aufstrebende Erdölindustrie und den Export des Landes bildet.", hu: "Egy nagy kőolaj-kitermelő terület Kelet-Nigerben, amely az ország feltörekvő olajiparának és exportjának alapját képezi.", ro: "O zonă majoră de extracție a petrolului din estul Nigerului, care formează baza industriei petroliere în curs de dezvoltare și a exporturilor țării.", en: "A major oil production area in eastern Niger, forming the basis for the country's emerging oil industry and exports." },
    facts: {
      de: ["Zentrum der Ölförderung im Niger.", "Rund 463 km lange Pipeline nach Zinder.", "Geplanter Export-Pipeline-Ausbau."],
      hu: ["Az olajkitermelés központja Nigerben.", "Mintegy 463 km hosszú csővezeték Zinderbe.", "Tervezett export-csővezeték bővítés."],
      ro: ["Centrul extracției de petrol din Niger.", "Conductă de aproximativ 463 km spre Zinder.", "Extindere planificată a conductei de export."],
      en: ["Center of oil extraction in Niger.", "Roughly 463 km pipeline to Zinder.", "Planned export pipeline expansion."],
    }
  },
  {
    id: "sonichar-tchirozerine-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [7.9719, 17.2611],
    name: { de: "Kohlekraftwerk SONICHAR", hu: "SONICHAR Széntüzelésű Erőmű", ro: "Centrala pe cărbune SONICHAR", en: "SONICHAR Coal Power Plant" },
    description: { de: "Ein Bergbau- und Kraftwerkskomplex in Tchirozerine, der Kohle abbaut, um Strom hauptsächlich für die Uranminen der Region Agadez zu erzeugen.", hu: "Bánya- és erőmű-komplexum Tchirozerine-ben, amely szenet termel ki, hogy elsősorban az Agadez régió uránbányáit lássa el árammal.", ro: "Un complex minier și energetic din Tchirozerine care extrage cărbune pentru a genera energie în principal pentru minele de uraniu din regiunea Agadez.", en: "A mining and power plant complex in Tchirozerine that mines coal to generate electricity primarily for the uranium mines in the Agadez region." },
    facts: {
      de: ["Einzige aktive Kohlemine Nigers.", "Liefert Strom für die Uranindustrie.", "In der Nähe von Agadez."],
      hu: ["Niger egyetlen aktív szénbányája.", "Áramot szolgáltat az urániparnak.", "Agadez közelében."],
      ro: ["Singura mină activă de cărbune din Niger.", "Furnizează energie pentru industria uraniului.", "Aproape de Agadez."],
      en: ["Niger's only active coal mine.", "Supplies power for the uranium industry.", "Near Agadez."],
    }
  },
  {
    id: "samira-hill-gold-mine-economic-v2",
    type: "industry",
    parent: "NE-6",
    coords: [1.4417, 13.9111],
    name: { de: "Goldmine Samira Hill", hu: "Samira Hill Aranybánya", ro: "Mina de aur Samira Hill", en: "Samira Hill Gold Mine" },
    description: { de: "Die erste kommerzielle Goldmine im Niger, im Liptako-Gourma-Gebiet nahe der Grenze zu Burkina Faso gelegen, ein Schlüsselfaktor für den Goldexport.", hu: "Niger első kereskedelmi aranybányája a Liptako-Gourma térségben, Burkina Faso határának közelében, az aranyexport kulcsszereplője.", ro: "Prima mină de aur comercială din Niger, situată în zona Liptako-Gourma, aproape de granița cu Burkina Faso, un factor cheie pentru exportul de aur.", en: "Niger's first commercial gold mine, located in the Liptako-Gourma area near the border with Burkina Faso, a key factor in gold exports." },
    facts: {
      de: ["Eröffnete 2004.", "Befindet sich in der Region Tillabéri.", "Pionier der Goldindustrie im Niger."],
      hu: ["2004-ben nyitották meg.", "A Tillabéri régióban található.", "Az aranyipar úttörője Nigerben."],
      ro: ["Deschisă în 2004.", "Situată în regiunea Tillabéri.", "Pionier al industriei aurului din Niger."],
      en: ["Opened in 2004.", "Located in the Tillabéri region.", "Pioneer of the gold industry in Niger."],
    }
  },
  {
    id: "tchibarakaten-gold-mine-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [8.3, 19.3],
    name: { de: "Goldabbau Tchibarakaten", hu: "Tchibarakaten Aranybánya", ro: "Mineritul de aur Tchibarakaten", en: "Tchibarakaten Gold Mining" },
    description: { de: "Ein abgelegenes, aber bedeutendes Goldabbaugebiet im Aïr-Gebirge, das viele handwerkliche Bergleute anzieht und die lokale Wirtschaft ankurbelt.", hu: "Egy távoli, de jelentős aranybányászati terület az Aïr-hegységben, amely sok kézműves bányászt vonz, és fellendíti a helyi gazdaságot.", ro: "O zonă de exploatare a aurului îndepărtată, dar semnificativă în Munții Aïr, care atrage mulți mineri artizanali și stimulează economia locală.", en: "A remote but significant gold mining area in the Aïr Mountains, attracting many artisanal miners and boosting the local economy." },
    facts: {
      de: ["Großer handwerklicher Bergbau.", "Liegt tief in der Wüste.", "Sorgte ab 2014 für einen Goldrausch."],
      hu: ["Nagy kézműves bányászat.", "Mélyen a sivatagban található.", "2014-től aranylázat okozott."],
      ro: ["Minerit artizanal la scară largă.", "Situat adânc în deșert.", "A provocat o goană după aur din 2014."],
      en: ["Large artisanal mining.", "Located deep in the desert.", "Caused a gold rush starting in 2014."],
    }
  },
  {
    id: "djado-gold-fields-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [12.3, 21.0],
    name: { de: "Goldfelder von Djado", hu: "Djado Aranyvölgy", ro: "Câmpurile de aur Djado", en: "Djado Gold Fields" },
    description: { de: "Die historischen Regionen von Djado in der Sahara erlebten ab 2014 einen massiven Goldrausch, der Tausende von Goldsuchern in die extreme Wüste lockte.", hu: "A szaharai történelmi Djado régiók 2014-től masszív aranylázat éltek át, ami több ezer aranyásót vonzott az extrém sivatagba.", ro: "Regiunile istorice din Djado din Sahara au cunoscut o masivă goană după aur începând din 2014, atrăgând mii de prospectori în deșertul extrem.", en: "The historical regions of Djado in the Sahara experienced a massive gold rush from 2014, attracting thousands of prospectors to the extreme desert." },
    facts: {
      de: ["Im äußersten Nordosten Nigers.", "Zentrum des handwerklichen Abbaus.", "Gold liegt oft nahe der Oberfläche."],
      hu: ["Niger legészakkeletibb részén.", "A kézműves bányászat központja.", "Az arany gyakran a felszín közelében található."],
      ro: ["În nord-estul extrem al Nigerului.", "Centru al mineritului artizanal.", "Aurul este adesea aproape de suprafață."],
      en: ["In the extreme northeast of Niger.", "Center of artisanal mining.", "Gold is often near the surface."],
    }
  },
  {
    id: "dosso-dry-port-economic-v2",
    type: "port",
    parent: "NE-2",
    coords: [3.195, 13.0483],
    name: { de: "Trockenhafen Dosso", hu: "Dosso Szárazkikötő", ro: "Portul uscat Dosso", en: "Dosso Dry Port" },
    description: { de: "Ein wichtiges Logistikzentrum in Dosso zur Erleichterung des internationalen Frachtverkehrs vom und zum Binnenstaat Niger über Seehäfen in Benin.", hu: "Fontos logisztikai központ Dossoból a nemzetközi áruforgalom megkönnyítésére a tengerparttal nem rendelkező Nigerből és Nigerbe a benini tengeri kikötőkön keresztül.", ro: "Un centru logistic important în Dosso pentru a facilita traficul internațional de marfă de la și către țara fără ieșire la mare Niger prin porturile maritime din Benin.", en: "An important logistics center in Dosso to facilitate international freight traffic to and from landlocked Niger via seaports in Benin." },
    facts: {
      de: ["Verbindet Niger mit dem Hafen von Cotonou.", "Zentrale Zollabfertigungsstelle.", "Reduziert Transportengpässe."],
      hu: ["Nigert Cotonou kikötőjével köti össze.", "Központi vámkezelő hely.", "Csökkenti a szállítási szűk keresztmetszeteket."],
      ro: ["Leagă Niger de portul Cotonou.", "Punct central de vămuire.", "Reduce blocajele de transport."],
      en: ["Connects Niger with the port of Cotonou.", "Central customs clearance point.", "Reduces transportation bottlenecks."],
    }
  },
  {
    id: "niamey-river-port-economic-v2",
    type: "port",
    parent: "NE-8",
    coords: [2.1, 13.5],
    name: { de: "Flusshafen Niamey", hu: "Niamey Folyami Kikötő", ro: "Portul fluvial Niamey", en: "Niamey River Port" },
    description: { de: "Ein Hafen am Niger-Fluss in der Hauptstadt Niamey, der für die lokale und regionale Schifffahrt sowie den Warentransport während der Regenzeit genutzt wird.", hu: "Kikötő a Niger folyón a fővárosban, Niameyben, amelyet a helyi és regionális hajózásra, valamint áruszállításra használnak az esős évszakban.", ro: "Un port pe râul Niger în capitala Niamey, utilizat pentru navigația locală și regională, precum și pentru transportul de mărfuri în timpul sezonului ploios.", en: "A port on the Niger River in the capital Niamey, used for local and regional shipping as well as goods transport during the rainy season." },
    facts: {
      de: ["Liegt am Fluss Niger.", "Abhängig vom saisonalen Wasserstand.", "Wichtig für den regionalen Handel."],
      hu: ["A Niger folyón található.", "Függ a szezonális vízállástól.", "Fontos a regionális kereskedelem számára."],
      ro: ["Situat pe râul Niger.", "Depinde de nivelul apei sezonier.", "Important pentru comerțul regional."],
      en: ["Located on the Niger River.", "Dependent on seasonal water levels.", "Important for regional trade."],
    }
  },
  {
    id: "gaya-river-port-economic-v2",
    type: "port",
    parent: "NE-2",
    coords: [3.4478, 11.8864],
    name: { de: "Hafen von Gaya", hu: "Gaya Folyami Kikötő", ro: "Portul fluvial Gaya", en: "Gaya River Port" },
    description: { de: "Gaya, an der Grenze zu Benin gelegen, dient als wichtiger Flusshafen am Niger und Grenzposten für den Handel in Richtung Südatlantik.", hu: "A Benin határán fekvő Gaya fontos folyami kikötőként szolgál a Niger folyón és határállomásként a Dél-Atlanti-óceán felé irányuló kereskedelem számára.", ro: "Gaya, situată la granița cu Benin, servește ca port fluvial important pe Niger și punct de frontieră pentru comerțul către Atlanticul de Sud.", en: "Gaya, located on the border with Benin, serves as an important river port on the Niger and a border post for trade towards the South Atlantic." },
    facts: {
      de: ["Wichtigster Grenzübergang nach Benin.", "Brücke über den Niger.", "Umschlagplatz für Waren."],
      hu: ["A legfontosabb határátkelő Benin felé.", "Híd a Niger folyón.", "Átrakóhely az áruk számára."],
      ro: ["Cel mai important punct de trecere a frontierei spre Benin.", "Pod peste râul Niger.", "Punct de transbordare a mărfurilor."],
      en: ["Main border crossing to Benin.", "Bridge over the Niger River.", "Transshipment point for goods."],
    }
  },
  {
    id: "malbaza-cement-plant-economic-v2",
    type: "industry",
    parent: "NE-5",
    coords: [5.5264, 13.9472],
    name: { de: "Zementwerk Malbaza", hu: "Malbaza Cementgyár", ro: "Fabrica de ciment Malbaza", en: "Malbaza Cement Plant" },
    description: { de: "Die wichtigste Zementfabrik im Niger, die lokal abgebaute Rohstoffe nutzt, um die wachsende Bauindustrie des Landes zu versorgen.", hu: "Niger legfontosabb cementgyára, amely helyben bányászott nyersanyagokat használ fel az ország növekvő építőiparának ellátására.", ro: "Cea mai importantă fabrică de ciment din Niger, care folosește materii prime extrase la nivel local pentru a aproviziona industria în creștere a construcțiilor din țară.", en: "The most important cement factory in Niger, using locally mined raw materials to supply the country's growing construction industry." },
    facts: {
      de: ["Produziert Zement für den Inlandsmarkt.", "In der Region Tahoua.", "Nutzt lokale Kalksteinvorkommen."],
      hu: ["Cementet termel a hazai piacra.", "A Tahoua régióban.", "Helyi mészkőlelőhelyeket használ fel."],
      ro: ["Produce ciment pentru piața internă.", "În regiunea Tahoua.", "Utilizează zăcăminte locale de calcar."],
      en: ["Produces cement for the domestic market.", "In the Tahoua region.", "Uses local limestone deposits."],
    }
  },
  {
    id: "diori-hamani-cargo-hub-economic-v2",
    type: "port",
    parent: "NE-8",
    coords: [2.1836, 13.4815],
    name: { de: "Frachtflughafen Diori Hamani", hu: "Diori Hamani Teherkikötő", ro: "Hub de marfă Diori Hamani", en: "Diori Hamani Cargo Hub" },
    description: { de: "Der internationale Flughafen von Niamey fungiert auch als der wichtigste Luftfracht- und Logistik-Hub für den Binnenstaat Niger.", hu: "Niamey nemzetközi repülőtere egyben a tengerparttal nem rendelkező Niger legfontosabb légi árufuvarozási és logisztikai központjaként is működik.", ro: "Aeroportul internațional din Niamey funcționează și ca cel mai important hub de marfă aeriană și logistică pentru țara fără ieșire la mare, Niger.", en: "The international airport of Niamey also functions as the most important air cargo and logistics hub for landlocked Niger." },
    facts: {
      de: ["Wichtigstes Tor zur Welt.", "Sitz der Zollverwaltung.", "Bedeutend für High-Value-Exporte."],
      hu: ["Legfontosabb kapu a világ felé.", "A vámigazgatás székhelye.", "Jelentős a nagy értékű exportok számára."],
      ro: ["Cea mai importantă poartă către lume.", "Sediul administrației vamale.", "Important pentru exporturile de mare valoare."],
      en: ["Main gateway to the world.", "Seat of the customs administration.", "Important for high-value exports."],
    }
  },
  {
    id: "goudel-water-plant-economic-v2",
    type: "industry",
    parent: "NE-8",
    coords: [2.0736, 13.5428],
    name: { de: "Wasserwerk Goudel", hu: "Goudel Vízmű", ro: "Uzina de apă Goudel", en: "Goudel Water Plant" },
    description: { de: "Die zentrale Wasseraufbereitungsanlage in Niamey, die Wasser aus dem Niger entnimmt und die Hauptstadt mit wichtigem Trinkwasser versorgt.", hu: "A központi víztisztító telep Niameyben, amely a Niger folyóból nyer vizet, és fontos ivóvízzel látja el a fővárost.", ro: "Stația centrală de tratare a apei din Niamey, care extrage apa din fluviul Niger și furnizează capitalei apă potabilă vitală.", en: "The central water treatment plant in Niamey, drawing water from the Niger River and supplying the capital with vital drinking water." },
    facts: {
      de: ["Befindet sich am Ufer des Niger.", "Wichtigste Trinkwasserquelle Niameys.", "Wurde mehrfach ausgebaut."],
      hu: ["A Niger folyó partján található.", "Niamey legfontosabb ivóvízforrása.", "Többször kibővítették."],
      ro: ["Situată pe malul fluviului Niger.", "Cea mai importantă sursă de apă potabilă pentru Niamey.", "A fost extinsă de mai multe ori."],
      en: ["Located on the banks of the Niger River.", "Main source of drinking water for Niamey.", "Has been expanded several times."],
    }
  },
  {
    id: "kandadji-dam-project-economic-v2",
    type: "industry",
    parent: "NE-6",
    coords: [1.4883, 14.6111],
    name: { de: "Kandadji-Talsperre", hu: "Kandadji-gát", ro: "Barajul Kandadji", en: "Kandadji Dam" },
    description: { de: "Ein riesiges Wasserkraft- und Bewässerungsprojekt im Bau am Niger-Fluss, das die Energieunabhängigkeit und Landwirtschaft des Landes revolutionieren soll.", hu: "Egy hatalmas vízerőmű és öntözési projekt, amely a Niger folyón épül, és amely forradalmasítja az ország energiafüggetlenségét és mezőgazdaságát.", ro: "Un proiect uriaș de hidroenergie și irigații în construcție pe râul Niger, menit să revoluționeze independența energetică și agricultura țării.", en: "A massive hydropower and irrigation project under construction on the Niger River, designed to revolutionize the country's energy independence and agriculture." },
    facts: {
      de: ["Soll 130 Megawatt Strom erzeugen.", "Wird Tausende Hektar bewässern.", "Bedeutendstes Infrastrukturprojekt."],
      hu: ["130 megawatt villamos energiát fog termelni.", "Több ezer hektárt fog öntözni.", "A legjelentősebb infrastrukturális projekt."],
      ro: ["Va genera 130 megawați de energie electrică.", "Va iriga mii de hectare.", "Cel mai semnificativ proiect de infrastructură."],
      en: ["Will generate 130 megawatts of electricity.", "Will irrigate thousands of hectares.", "Most significant infrastructure project."],
    }
  },
  {
    id: "gorou-banda-power-economic-v2",
    type: "industry",
    parent: "NE-8",
    coords: [2.0833, 13.4333],
    name: { de: "Kraftwerk Gorou Banda", hu: "Gorou Banda Erőmű", ro: "Centrala electrică Gorou Banda", en: "Gorou Banda Power Plant" },
    description: { de: "Ein thermisches Kraftwerk in der Nähe von Niamey, das zur Stabilisierung der Stromversorgung der Hauptstadt und zur Verringerung der Importabhängigkeit gebaut wurde.", hu: "Egy hőerőmű Niamey közelében, amelyet a főváros áramellátásának stabilizálására és az importfüggőség csökkentésére építettek.", ro: "O centrală termică lângă Niamey, construită pentru a stabiliza alimentarea cu energie a capitalei și a reduce dependența de importuri.", en: "A thermal power plant near Niamey, built to stabilize the capital's power supply and reduce dependence on imports." },
    facts: {
      de: ["Wichtiger Stromversorger für Niamey.", "Nutzt Schweröl.", "Teil des nationalen Energieplans."],
      hu: ["Fontos áramszolgáltató Niamey számára.", "Nehézolajat használ.", "A nemzeti energiaterv része."],
      ro: ["Furnizor important de energie electrică pentru Niamey.", "Folosește păcură grea.", "Parte a planului energetic național."],
      en: ["Important power supplier for Niamey.", "Uses heavy fuel oil.", "Part of the national energy plan."],
    }
  },
  {
    id: "bilma-salt-pans-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [12.9167, 18.6833],
    name: { de: "Salinen von Bilma", hu: "Bilma Sópárlók", ro: "Salinele din Bilma", en: "Bilma Salt Pans" },
    description: { de: "Ein historisches und immer noch aktives Zentrum der Salzgewinnung in der Ténéré-Wüste, von wo aus Kamelkarawanen das Salz bis heute transportieren.", hu: "Történelmi és ma is aktív sókitermelő központ a Ténéré-sivatagban, ahonnan tevekaravánok szállítják a sót mind a mai napig.", ro: "Un centru istoric și încă activ de extracție a sării în deșertul Ténéré, de unde caravanele de cămile transportă sarea până în prezent.", en: "A historic and still active center of salt extraction in the Ténéré desert, from where camel caravans transport the salt to this day." },
    facts: {
      de: ["Produziert Salz in Blöcken.", "Ziel der berühmten Azalai-Karawanen.", "Traditionelle Handarbeit."],
      hu: ["Tömbökben termeli a sót.", "A híres Azalai karavánok célpontja.", "Hagyományos kézimunka."],
      ro: ["Produce sare în blocuri.", "Destinația celebrelor caravane Azalai.", "Muncă manuală tradițională."],
      en: ["Produces salt in blocks.", "Destination of the famous Azalai caravans.", "Traditional manual labor."],
    }
  },
  {
    id: "fachi-salt-works-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [11.5833, 18.2833],
    name: { de: "Salinen von Fachi", hu: "Fachi Sópárlók", ro: "Salinele din Fachi", en: "Fachi Salt Works" },
    description: { de: "Eine weitere wichtige Oase für die Salzgewinnung in der Sahara, deren Wirtschaft stark von der Salzproduktion für den Transsaharahandel abhängt.", hu: "Egy másik fontos oázis a szaharai sókitermeléshez, amelynek gazdasága erősen függ a transzszaharai kereskedelem számára történő sótermeléstől.", ro: "O altă oază importantă pentru extracția sării în Sahara, a cărei economie depinde puternic de producția de sare pentru comerțul trans-saharian.", en: "Another important oasis for salt extraction in the Sahara, whose economy depends heavily on salt production for trans-Saharan trade." },
    facts: {
      de: ["Wichtige Station im Karawanennetz.", "Mitten in der Wüste gelegen.", "Traditionelle Salzpfannen."],
      hu: ["Fontos állomás a karavánhálózatban.", "A sivatag közepén található.", "Hagyományos sómedencék."],
      ro: ["Stație importantă în rețeaua de caravane.", "Situată în mijlocul deșertului.", "Tăvi de sare tradiționale."],
      en: ["Important station in the caravan network.", "Located in the middle of the desert.", "Traditional salt pans."],
    }
  },
  {
    id: "zinder-tannery-economic-v2",
    type: "industry",
    parent: "NE-7",
    coords: [8.9833, 13.8],
    name: { de: "Gerbereien von Zinder", hu: "Zinder Bőrcserzők", ro: "Tăbăcăriile din Zinder", en: "Zinder Tanneries" },
    description: { de: "Traditionelle und semi-industrielle Anlagen in Zinder, die hochwertiges Leder produzieren, ein wichtiger Wirtschaftszweig in dieser historischen Handelsstadt.", hu: "Hagyományos és félipari létesítmények Zinderben, amelyek kiváló minőségű bőrt állítanak elő, amely fontos gazdasági ágazat ebben a történelmi kereskedővárosban.", ro: "Facilități tradiționale și semi-industriale din Zinder care produc piele de înaltă calitate, o industrie importantă în acest oraș comercial istoric.", en: "Traditional and semi-industrial facilities in Zinder producing high-quality leather, an important industry in this historic trading city." },
    facts: {
      de: ["Lange Tradition der Lederverarbeitung.", "Export nach Nigeria und darüber hinaus.", "Nutzt lokale Rohstoffe."],
      hu: ["A bőrfeldolgozás hosszú hagyománya.", "Export Nigériába és azon túl.", "Helyi nyersanyagokat használ."],
      ro: ["Tradiție lungă în prelucrarea pielii.", "Export în Nigeria și dincolo de aceasta.", "Utilizează materii prime locale."],
      en: ["Long tradition of leather processing.", "Export to Nigeria and beyond.", "Uses local raw materials."],
    }
  },
  {
    id: "niamey-abattoir-economic-v2",
    type: "industry",
    parent: "NE-8",
    coords: [2.0833, 13.5167],
    name: { de: "Schlachthof Niamey", hu: "Niamey Vágóhíd", ro: "Abatorul din Niamey", en: "Niamey Slaughterhouse" },
    description: { de: "Der industrielle Schlachthofkomplex in der Hauptstadt, der eine zentrale Rolle in der Fleischverarbeitung und der Viehwirtschaft des Landes spielt.", hu: "A főváros ipari vágóhíd-komplexuma, amely központi szerepet játszik a húsfeldolgozásban és az ország állattenyésztésében.", ro: "Complexul abatorului industrial din capitală, care joacă un rol central în prelucrarea cărnii și în industria zootehnică a țării.", en: "The industrial slaughterhouse complex in the capital, playing a central role in meat processing and the country's livestock industry." },
    facts: {
      de: ["Verarbeitet Rinder, Schafe und Ziegen.", "Wichtig für die Lebensmittelversorgung.", "Befindet sich in Niamey."],
      hu: ["Szarvasmarhákat, juhokat és kecskéket dolgoz fel.", "Fontos az élelmiszerellátás szempontjából.", "Niameyben található."],
      ro: ["Procesează bovine, ovine și caprine.", "Important pentru aprovizionarea cu alimente.", "Situat în Niamey."],
      en: ["Processes cattle, sheep, and goats.", "Important for food supply.", "Located in Niamey."],
    }
  },
  {
    id: "galmi-onion-processing-economic-v2",
    type: "industry",
    parent: "NE-5",
    coords: [5.6833, 13.9667],
    name: { de: "Zwiebelzentrum Galmi", hu: "Galmi Hagymafeldolgozó", ro: "Centrul de ceapă Galmi", en: "Galmi Onion Center" },
    description: { de: "Galmi ist das Epizentrum des Anbaus und der Verarbeitung der berühmten violetten Zwiebeln, die in ganz Westafrika exportiert werden.", hu: "Galmi a híres lila hagyma termesztésének és feldolgozásának epicentruma, amelyet egész Nyugat-Afrikába exportálnak.", ro: "Galmi este epicentrul cultivării și procesării celebrelor cepe violete care sunt exportate în toată Africa de Vest.", en: "Galmi is the epicenter of the cultivation and processing of the famous purple onions exported throughout West Africa." },
    facts: {
      de: ["Ursprung der 'Violet de Galmi'-Zwiebel.", "Wichtiges landwirtschaftliches Industriezentrum.", "Massenexport in Nachbarländer."],
      hu: ["A 'Violet de Galmi' hagyma eredete.", "Fontos mezőgazdasági ipari központ.", "Tömeges export a szomszédos országokba."],
      ro: ["Originea cepei 'Violet de Galmi'.", "Important centru industrial agricol.", "Export în masă către țările vecine."],
      en: ["Origin of the 'Violet de Galmi' onion.", "Important agricultural industrial center.", "Mass export to neighboring countries."],
    }
  },
  {
    id: "teguidda-salt-extraction-economic-v2",
    type: "industry",
    parent: "NE-1",
    coords: [6.7833, 17.5833],
    name: { de: "Salzgewinnung Teguidda-n-Tessoumt", hu: "Teguidda-n-Tessoumt Sókitermelés", ro: "Extracția sării din Teguidda-n-Tessoumt", en: "Teguidda-n-Tessoumt Salt Extraction" },
    description: { de: "Eine einzigartige Stätte, an der salzige Tonerde abgebaut und in Hunderten von bunten Verdunstungsbecken zu Salz für Vieh verarbeitet wird.", hu: "Egyedülálló hely, ahol a sós agyagot bányásszák, és több száz színes párologtató medencében dolgozzák fel állati takarmánysóvá.", ro: "Un sit unic unde argila sărată este extrasă și procesată în sare pentru animale în sute de bazine de evaporare colorate.", en: "A unique site where salty clay is mined and processed into salt for livestock in hundreds of colorful evaporation ponds." },
    facts: {
      de: ["Auffällige bunte Salzbecken.", "Salz primär für den Viehkonsum.", "Wirtschaftliche Lebensader der Region."],
      hu: ["Feltűnő színes sómedencék.", "A só elsősorban állati fogyasztásra szolgál.", "A régió gazdasági éltető eleme."],
      ro: ["Bazine de sare colorate izbitoare.", "Sare în principal pentru consumul animalelor.", "Colacul de salvare economic al regiunii."],
      en: ["Striking colorful salt ponds.", "Salt primarily for livestock consumption.", "Economic lifeline of the region."],
    }
  },
  {
    id: "maradi-dry-port-project-economic-v2",
    type: "port",
    parent: "NE-4",
    coords: [7.1, 13.5],
    name: { de: "Trockenhafen Maradi", hu: "Maradi Szárazkikötő", ro: "Portul uscat Maradi", en: "Maradi Dry Port" },
    description: { de: "Ein in Entwicklung befindliches Logistikzentrum in Maradi, das den Handel mit dem nahegelegenen Nigeria und anderen Küstenstaaten beschleunigen soll.", hu: "Maradiban fejlesztés alatt álló logisztikai központ, amely a közeli Nigériával és más part menti államokkal folytatott kereskedelmet hivatott felgyorsítani.", ro: "Un centru logistic în dezvoltare în Maradi, menit să accelereze comerțul cu Nigeria vecină și cu alte state de coastă.", en: "A logistics center under development in Maradi, designed to accelerate trade with nearby Nigeria and other coastal states." },
    facts: {
      de: ["Liegt nahe der nigerianischen Grenze.", "Soll Logistikkosten senken.", "Wichtig für die Wirtschaft Zentralnigers."],
      hu: ["A nigériai határ közelében található.", "Csökkentenie kell a logisztikai költségeket.", "Fontos Közép-Niger gazdasága számára."],
      ro: ["Situat aproape de granița cu Nigeria.", "Menit să reducă costurile logistice.", "Important pentru economia Nigerului central."],
      en: ["Located near the Nigerian border.", "Designed to lower logistics costs.", "Important for the economy of central Niger."],
    }
  },
  {
    id: "diffa-oil-exploration-economic-v2",
    type: "industry",
    parent: "NE-3",
    coords: [12.6167, 13.3167],
    name: { de: "Erdölexploration Diffa", hu: "Diffa Olajkutatás", ro: "Explorarea petrolieră Diffa", en: "Diffa Oil Exploration" },
    description: { de: "Das Gebiet um Diffa ist ein wichtiger Sektor für die Erkundung und Förderung von Erdöl im Tschadbecken, was erhebliche Investitionen anzieht.", hu: "A Diffa környéki terület a Csád-medence kőolajkutatásának és -kitermelésének fontos ágazata, amely jelentős befektetéseket vonz.", ro: "Zona din jurul Diffa este un sector important pentru explorarea și extracția petrolului din bazinul Ciad, atrăgând investiții semnificative.", en: "The area around Diffa is an important sector for the exploration and extraction of oil in the Chad Basin, attracting significant investments." },
    facts: {
      de: ["Teil des Agadem-Ölprojekts.", "Zieht internationale Ölkonzerne an.", "Verändert die regionale Wirtschaft."],
      hu: ["Az Agadem olajprojekt része.", "Nemzetközi olajvállalatokat vonz.", "Átalakítja a regionális gazdaságot."],
      ro: ["Parte a proiectului petrolier Agadem.", "Atrage companii petroliere internaționale.", "Transformă economia regională."],
      en: ["Part of the Agadem oil project.", "Attracts international oil companies.", "Transforms the regional economy."],
    }
  },
  {
    id: "koma-bangou-gold-economic-v2",
    type: "industry",
    parent: "NE-6",
    coords: [1.4667, 13.95],
    name: { de: "Goldfeld Koma Bangou", hu: "Koma Bangou Aranymező", ro: "Câmpul aurifer Koma Bangou", en: "Koma Bangou Gold Field" },
    description: { de: "Einer der wichtigsten handwerklichen Goldabbauorte im Tillabéri-Gebiet, an dem Zehntausende Menschen unter schwierigen Bedingungen nach Gold suchen.", hu: "Az egyik legfontosabb kézműves aranybányászati hely a Tillabéri régióban, ahol tízezrek keresnek aranyat nehéz körülmények között.", ro: "Unul dintre cele mai importante situri de exploatare artizanală a aurului din zona Tillabéri, unde zeci de mii de oameni caută aur în condiții dificile.", en: "One of the most important artisanal gold mining sites in the Tillabéri area, where tens of thousands of people search for gold under difficult conditions." },
    facts: {
      de: ["Bekannt für handwerklichen Abbau.", "Tausende Arbeiter vor Ort.", "Wichtige inoffizielle Einnahmequelle."],
      hu: ["A kézműves bányászatról ismert.", "Több ezer munkás a helyszínen.", "Fontos nem hivatalos bevételi forrás."],
      ro: ["Cunoscut pentru mineritul artizanal.", "Mii de muncitori la fața locului.", "O sursă importantă, neoficială, de venit."],
      en: ["Known for artisanal mining.", "Thousands of workers on site.", "Important unofficial source of income."],
    }
  },
  {
    id: "ayorou-livestock-market-economic-v2",
    type: "industry",
    parent: "NE-6",
    coords: [0.9167, 14.7333],
    name: { de: "Viehmarkt Ayorou", hu: "Ayorou Állatpiac", ro: "Piața de animale Ayorou", en: "Ayorou Livestock Market" },
    description: { de: "Einer der größten und wichtigsten Viehmärkte in der Sahelzone, auf dem sonntags Tausende von Rindern, Schafen und Kamelen gehandelt werden.", hu: "A Száhel-övezet egyik legnagyobb és legfontosabb állatpiaca, ahol vasárnaponként több ezer szarvasmarhát, juhot és tevét cserélnek gazdát.", ro: "Una dintre cele mai mari și mai importante piețe de animale din Sahel, unde mii de bovine, oi și cămile sunt tranzacționate duminica.", en: "One of the largest and most important livestock markets in the Sahel, where thousands of cattle, sheep, and camels are traded on Sundays." },
    facts: {
      de: ["Großer regionaler Viehmarkt.", "Zieht Händler aus Nachbarländern an.", "Wirtschaftliches Zentrum am Niger-Fluss."],
      hu: ["Nagy regionális állatpiac.", "A szomszédos országokból vonzza a kereskedőket.", "Gazdasági központ a Niger folyón."],
      ro: ["Piață regională mare de animale.", "Atrage comercianți din țările vecine.", "Centru economic pe fluviul Niger."],
      en: ["Large regional livestock market.", "Attracts traders from neighboring countries.", "Economic center on the Niger River."],
    }
  },
  {
    id: "zinder-peanut-processing-economic-v2",
    type: "industry",
    parent: "NE-7",
    coords: [8.9833, 13.8],
    name: { de: "Erdnussverarbeitung Zinder", hu: "Zinder Földimogyoró-feldolgozó", ro: "Procesarea arahidelor Zinder", en: "Zinder Peanut Processing" },
    description: { de: "Zinder war und ist ein wichtiges Zentrum für die Verarbeitung und den Handel mit Erdnüssen, einem historischen Exportgut Nigers.", hu: "Zinder fontos központja volt és maradt a földimogyoró feldolgozásának és kereskedelmének, amely Niger történelmi exportcikke.", ro: "Zinder a fost și rămâne un centru important pentru procesarea și comercializarea arahidelor, un produs istoric de export al Nigerului.", en: "Zinder has been and remains an important center for the processing and trading of peanuts, a historical export product of Niger." },
    facts: {
      de: ["Historisches Zentrum der Erdnussproduktion.", "Wichtig für die Öl- und Pastenherstellung.", "Prägte die Wirtschaft von Zinder."],
      hu: ["A földimogyoró-termelés történelmi központja.", "Fontos az olaj- és pasztagyártásban.", "Meghatározta Zinder gazdaságát."],
      ro: ["Centrul istoric al producției de arahide.", "Important pentru producția de ulei și pastă.", "A modelat economia Zinderului."],
      en: ["Historical center of peanut production.", "Important for oil and paste production.", "Shaped the economy of Zinder."],
    }
  },
  {
    id: "tahoua-phosphate-mining-economic-v2",
    type: "industry",
    parent: "NE-5",
    coords: [5.2667, 14.8833],
    name: { de: "Phosphatabbau Tahoua", hu: "Tahoua Foszfátbánya", ro: "Mineritul fosfaților Tahoua", en: "Tahoua Phosphate Mining" },
    description: { de: "Das Gebiet um Tahoua verfügt über bedeutende Phosphatvorkommen, die für die Herstellung von Düngemitteln und die lokale Landwirtschaft abgebaut werden.", hu: "A Tahoua körüli terület jelentős foszfátlelőhelyekkel rendelkezik, amelyeket műtrágya gyártásához és a helyi mezőgazdasághoz bányásznak.", ro: "Zona din jurul Tahoua are depozite semnificative de fosfat, care sunt extrase pentru producția de îngrășăminte și pentru agricultura locală.", en: "The area around Tahoua has significant phosphate deposits, which are mined for the production of fertilizers and local agriculture." },
    facts: {
      de: ["Wichtig für die Düngemittelproduktion.", "Fördert die landwirtschaftliche Entwicklung.", "Ressource in der Region Tahoua."],
      hu: ["Fontos a műtrágyagyártásban.", "Elősegíti a mezőgazdasági fejlődést.", "Erőforrás a Tahoua régióban."],
      ro: ["Important pentru producția de îngrășăminte.", "Promovează dezvoltarea agricolă.", "Resursă în regiunea Tahoua."],
      en: ["Important for fertilizer production.", "Promotes agricultural development.", "Resource in the Tahoua region."],
    }
  },
  {
    id: "agadez-logistics-hub-economic-v2",
    type: "port",
    parent: "NE-1",
    coords: [7.9667, 16.9667],
    name: { de: "Logistikzentrum Agadez", hu: "Agadez Logisztikai Központ", ro: "Centrul logistic Agadez", en: "Agadez Logistics Hub" },
    description: { de: "Agadez fungiert als wichtiger Umschlagplatz und 'Trockenhafen' für Waren und Minenausrüstung, die in die Sahara und aus der Sahara transportiert werden.", hu: "Agadez fontos átrakodóhelyként és 'szárazkikötőként' funkcionál a Szaharába és a Szaharából szállított áruk és bányászati berendezések számára.", ro: "Agadez acționează ca un important centru de transbordare și 'port uscat' pentru mărfuri și echipamente miniere transportate în și dinspre Sahara.", en: "Agadez acts as an important transshipment point and 'dry port' for goods and mining equipment transported into and out of the Sahara." },
    facts: {
      de: ["Tor zur Sahara.", "Versorgungsbasis für Uranminen.", "Kreuzungspunkt wichtiger Handelsrouten."],
      hu: ["Kapu a Szaharához.", "Ellátóbázis az uránbányák számára.", "Fontos kereskedelmi útvonalak kereszteződése."],
      ro: ["Poarta către Sahara.", "Baza de aprovizionare pentru minele de uraniu.", "Intersecția unor rute comerciale importante."],
      en: ["Gateway to the Sahara.", "Supply base for uranium mines.", "Intersection of important trade routes."],
    }
  }
];
