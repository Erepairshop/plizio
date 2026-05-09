import type { POI } from "./poi";

export const poiExtraTimorlesteEconomicV2: POI[] = [
  {
    id: "hera-power-plant-economic-v2",
    type: "energy",
    parent: "TL-DI",
    coords: [125.6667, -8.5417],
    name: { de: "Kraftwerk Hera", hu: "Hera Erőmű", ro: "Centrala Electrică Hera", en: "Hera Power Plant" },
    description: { de: "Ein bedeutendes Schwerölkraftwerk in der Nähe von Dili, das einen großen Teil der Hauptstadt mit Strom versorgt.", hu: "Egy jelentős nehézolaj-erőmű Dili közelében, amely a főváros nagy részét ellátja árammal.", ro: "O importantă centrală electrică pe păcură lângă Dili, care furnizează energie electrică pentru o mare parte din capitală.", en: "A major heavy oil power plant near Dili that supplies electricity to a large part of the capital." },
    facts: {
      de: ["Liegt an der Nordküste.", "Bedeutend für Dili."],
      hu: ["Az északi parton fekszik.", "Jelentős Dili számára."],
      ro: ["Situată pe coasta de nord.", "Importantă pentru Dili."],
      en: ["Located on the north coast.", "Important for Dili."]
    }
  },
  {
    id: "tibar-bay-port-economic-v2",
    type: "port",
    parent: "TL-LI",
    coords: [125.4833, -8.5667],
    name: { de: "Hafen von Tibar Bay", hu: "Tibar-öböl kikötője", ro: "Portul Golfului Tibar", en: "Tibar Bay Port" },
    description: { de: "Ein moderner Tiefseehafen westlich von Dili, der den Großteil des internationalen Frachtverkehrs abwickelt.", hu: "Egy modern mélyvízi kikötő Dilitől nyugatra, amely a nemzetközi teherforgalom nagy részét bonyolítja.", ro: "Un port modern de apă adâncă la vest de Dili, care gestionează majoritatea traficului internațional de marfă.", en: "A modern deepwater port west of Dili that handles the majority of international freight traffic." },
    facts: {
      de: ["Modernes Infrastrukturprojekt.", "Entlastet den Hafen von Dili."],
      hu: ["Modern infrastrukturális projekt.", "Tehermentesíti Dili kikötőjét."],
      ro: ["Proiect de infrastructură modernă.", "Decongestionază portul Dili."],
      en: ["Modern infrastructure project.", "Relieves the port of Dili."]
    }
  },
  {
    id: "betano-power-plant-economic-v2",
    type: "energy",
    parent: "TL-MF",
    coords: [125.7167, -9.1667],
    name: { de: "Kraftwerk Betano", hu: "Betano Erőmű", ro: "Centrala Electrică Betano", en: "Betano Power Plant" },
    description: { de: "Ein großes Kraftwerk an der Südküste, das zur Energieunabhängigkeit und industriellen Entwicklung der Region beiträgt.", hu: "Egy nagy erőmű a déli parton, amely hozzájárul a régió energiafüggetlenségéhez és ipari fejlődéséhez.", ro: "O mare centrală electrică pe coasta de sud, care contribuie la independența energetică și dezvoltarea industrială a regiunii.", en: "A large power plant on the south coast contributing to the region's energy independence and industrial development." },
    facts: {
      de: ["Liegt an der Südküste.", "Unterstützt lokale Industrie."],
      hu: ["A déli parton fekszik.", "Támogatja a helyi ipart."],
      ro: ["Situată pe coasta de sud.", "Sprijină industria locală."],
      en: ["Located on the south coast.", "Supports local industry."]
    }
  },
  {
    id: "suai-supply-base-economic-v2",
    type: "industry",
    parent: "TL-CO",
    coords: [125.2667, -9.3167],
    name: { de: "Versorgungsbasis Suai", hu: "Suai Ellátóbázis", ro: "Baza de Aprovizionare Suai", en: "Suai Supply Base" },
    description: { de: "Ein logistisches Zentrum für die Erdöl- und Erdgasindustrie entlang der Timorsee.", hu: "A Timor-tenger menti kőolaj- és földgázipar logisztikai központja.", ro: "Un centru logistic pentru industria petrolului și gazelor de-a lungul Mării Timor.", en: "A logistical center for the oil and gas industry along the Timor Sea." },
    facts: {
      de: ["Zentrum für Offshore-Projekte.", "Teil des Tasi-Mane-Projekts."],
      hu: ["Tengeri projektek központja.", "A Tasi Mane projekt része."],
      ro: ["Centru pentru proiecte offshore.", "Parte a proiectului Tasi Mane."],
      en: ["Center for offshore projects.", "Part of the Tasi Mane project."]
    }
  },
  {
    id: "dili-seaport-economic-v2",
    type: "port",
    parent: "TL-DI",
    coords: [125.5736, -8.5492],
    name: { de: "Seehafen Dili", hu: "Dili Tengeri Kikötő", ro: "Portul Maritim Dili", en: "Dili Seaport" },
    description: { de: "Der historische Haupthafen der Hauptstadt, der zunehmend in ein Zentrum für Passagier- und Kreuzfahrtschiffe umgewandelt wird.", hu: "A főváros történelmi fő kikötője, amelyet egyre inkább utas- és tengerjáró hajók központjává alakítanak.", ro: "Principalul port istoric al capitalei, transformat din ce în ce mai mult într-un centru pentru nave de pasageri și croaziere.", en: "The historical main port of the capital, increasingly being transformed into a hub for passenger and cruise ships." },
    facts: {
      de: ["Historischer Knotenpunkt.", "Fokus auf Passagiere."],
      hu: ["Történelmi csomópont.", "Fókusz az utasokon."],
      ro: ["Nod istoric.", "Concentrare pe pasageri."],
      en: ["Historical hub.", "Focus on passengers."]
    }
  },
  {
    id: "gleno-coffee-processing-economic-v2",
    type: "industry",
    parent: "TL-ER",
    coords: [125.4333, -8.7167],
    name: { de: "Kaffeeverarbeitung Gleno", hu: "Gleno Kávéfeldolgozó", ro: "Procesarea Cafelei Gleno", en: "Gleno Coffee Processing" },
    description: { de: "Das Zentrum der Kaffeeverarbeitung im Distrikt Ermera, wo erstklassige Kaffeebohnen für den Export vorbereitet werden.", hu: "A kávéfeldolgozás központja Ermera körzetben, ahol az első osztályú kávébabokat exportra készítik elő.", ro: "Centrul procesării cafelei din districtul Ermera, unde boabele de cafea de primă clasă sunt pregătite pentru export.", en: "The center of coffee processing in the Ermera district, where premium coffee beans are prepared for export." },
    facts: {
      de: ["Fokus auf Bio-Kaffee.", "Wichtiges Exportgut."],
      hu: ["Fókusz a bio kávén.", "Fontos exportcikk."],
      ro: ["Concentrare pe cafeaua organică.", "Important produs de export."],
      en: ["Focus on organic coffee.", "Important export commodity."]
    }
  },
  {
    id: "iralalaro-hydropower-economic-v2",
    type: "energy",
    parent: "TL-LA",
    coords: [127.1333, -8.4667],
    name: { de: "Wasserkraftprojekt Iralalaro", hu: "Iralalaro Vízierőmű Projekt", ro: "Proiectul Hidroenergetic Iralalaro", en: "Iralalaro Hydropower Project" },
    description: { de: "Ein geplantes Wasserkraftwerk, das das Wasser des Ira-Lalaro-Sees zur Erzeugung erneuerbarer Energie nutzen soll.", hu: "Egy tervezett vízvizierőmű, amely az Ira Lalaro-tó vizét hasznosítaná megújuló energia termelésére.", ro: "O hidrocentrală planificată pentru a utiliza apa lacului Ira Lalaro pentru generarea de energie regenerabilă.", en: "A planned hydropower plant aiming to utilize the water of Lake Ira Lalaro to generate renewable energy." },
    facts: {
      de: ["Fokus auf erneuerbare Energie.", "Nutzt den größten See des Landes."],
      hu: ["Fókusz a megújuló energián.", "Az ország legnagyobb tavát használja."],
      ro: ["Concentrare pe energia regenerabilă.", "Utilizează cel mai mare lac din țară."],
      en: ["Focus on renewable energy.", "Utilizes the country's largest lake."]
    }
  },
  {
    id: "baucau-limestone-quarry-economic-v2",
    type: "mine",
    parent: "TL-BA",
    coords: [126.3667, -8.4667],
    name: { de: "Kalksteinbruch Baucau", hu: "Baucau Mészkőbánya", ro: "Cariera de Calcar Baucau", en: "Baucau Limestone Quarry" },
    description: { de: "Eine bedeutende Abbauzone für Kalkstein auf dem Baucau-Plateau, der für den lokalen Bau und die Zementproduktion verwendet wird.", hu: "Egy jelentős mészkő-kitermelő zóna a Baucau-fennsíkon, amelyet a helyi építőiparban és cementgyártásban használnak.", ro: "O zonă importantă de extracție a calcarului pe platoul Baucau, utilizat pentru construcții locale și producția de ciment.", en: "A significant limestone extraction zone on the Baucau plateau, used for local construction and cement production." },
    facts: {
      de: ["Wichtiger Baustoff.", "Nutzt lokale Geologie."],
      hu: ["Fontos építőanyag.", "A helyi geológiát használja."],
      ro: ["Important material de construcție.", "Utilizează geologia locală."],
      en: ["Important building material.", "Utilizes local geology."]
    }
  },
  {
    id: "com-fishing-port-economic-v2",
    type: "port",
    parent: "TL-LA",
    coords: [127.0667, -8.3583],
    name: { de: "Fischereihafen Com", hu: "Com Halászkikötő", ro: "Portul de Pescuit Com", en: "Com Fishing Port" },
    description: { de: "Ein kleiner, aber wichtiger Hafen im Osten des Landes, der lokale Fischerboote und maritimen Handel unterstützt.", hu: "Egy kis, de fontos kikötő az ország keleti részén, amely támogatja a helyi halászhajókat és a tengeri kereskedelmet.", ro: "Un port mic, dar important în estul țării, care sprijină bărcile locale de pescuit și comerțul maritim.", en: "A small but important port in the east of the country supporting local fishing boats and maritime trade." },
    facts: {
      de: ["Unterstützt lokale Fischer.", "Östlicher Handelspunkt."],
      hu: ["Támogatja a helyi halászokat.", "Keleti kereskedelmi pont."],
      ro: ["Sprijină pescarii locali.", "Punct comercial estic."],
      en: ["Supports local fishermen.", "Eastern trade point."]
    }
  },
  {
    id: "oecusse-special-economic-zone-economic-v2",
    type: "trade-hub",
    parent: "TL-OE",
    coords: [124.3333, -9.2000],
    name: { de: "Sonderwirtschaftszone Oecusse", hu: "Oecusse Különleges Gazdasági Övezet", ro: "Zona Economică Specială Oecusse", en: "Oecusse Special Economic Zone" },
    description: { de: "Ein ambitioniertes Projekt (ZEESM) in der Exklave, um ausländische Investitionen, Handel und Tourismus anzuziehen.", hu: "Egy ambiciózus projekt (ZEESM) az exklávéban a külföldi befektetések, a kereskedelem és a turizmus vonzására.", ro: "Un proiect ambițios (ZEESM) în exclavă pentru a atrage investiții străine, comerț și turism.", en: "An ambitious project (ZEESM) in the exclave to attract foreign investment, trade, and tourism." },
    facts: {
      de: ["Bekannt als ZEESM.", "Förderung von Investitionen."],
      hu: ["ZEESM néven ismert.", "A befektetések ösztönzése."],
      ro: ["Cunoscut sub numele de ZEESM.", "Promovarea investițiilor."],
      en: ["Known as ZEESM.", "Promoting investments."]
    }
  },
  {
    id: "viqueque-oil-seeps-economic-v2",
    type: "energy",
    parent: "TL-VI",
    coords: [126.3667, -8.8500],
    name: { de: "Ölaustritte von Viqueque", hu: "Viqueque-i Olajszivárgások", ro: "Izvoarele de Petrol Viqueque", en: "Viqueque Oil Seeps" },
    description: { de: "Natürliche Ölaustritte im Viqueque-Gebiet, die das Potenzial für Onshore-Ölexploration in Osttimor zeigen.", hu: "Természetes olajszivárgások a Viqueque térségben, amelyek a szárazföldi kőolaj-kutatás lehetőségét mutatják Kelet-Timorban.", ro: "Scurgeri naturale de petrol în zona Viqueque, care arată potențialul de explorare petrolieră pe uscat în Timorul de Est.", en: "Natural oil seeps in the Viqueque area indicating the potential for onshore oil exploration in East Timor." },
    facts: {
      de: ["Natürliches Öl.", "Potenzial für Exploration."],
      hu: ["Természetes olaj.", "Kutatási potenciál."],
      ro: ["Petrol natural.", "Potențial de explorare."],
      en: ["Natural oil.", "Exploration potential."]
    }
  },
  {
    id: "maliana-border-trade-center-economic-v2",
    type: "trade-hub",
    parent: "TL-BO",
    coords: [125.2167, -8.9833],
    name: { de: "Grenzhandelszentrum Maliana", hu: "Maliana Határmenti Kereskedelmi Központ", ro: "Centrul de Comerț la Frontieră Maliana", en: "Maliana Border Trade Center" },
    description: { de: "Ein wichtiger Handelsknotenpunkt nahe der indonesischen Grenze, der den Austausch landwirtschaftlicher Güter erleichtert.", hu: "Fontos kereskedelmi csomópont az indonéz határ közelében, amely megkönnyíti a mezőgazdasági termékek cseréjét.", ro: "Un important nod comercial lângă granița cu Indonezia, care facilitează schimbul de bunuri agricole.", en: "An important trading hub near the Indonesian border facilitating the exchange of agricultural goods." },
    facts: {
      de: ["Förderung des Grenzhandels.", "Agrarmärkte."],
      hu: ["A határmenti kereskedelem ösztönzése.", "Agrárpiacok."],
      ro: ["Promovarea comerțului la frontieră.", "Piețe agricole."],
      en: ["Promoting border trade.", "Agricultural markets."]
    }
  },
  {
    id: "ermera-coffee-coop-economic-v2",
    type: "industry",
    parent: "TL-ER",
    coords: [125.3967, -8.7512],
    name: { de: "Kaffeekooperative Ermera", hu: "Ermera Kávészövetkezet", ro: "Cooperativa de Cafea Ermera", en: "Ermera Coffee Co-op" },
    description: { de: "Ein Netzwerk von Kaffeebauern, das fairen Handel und nachhaltige Anbaumethoden in der Bergregion fördert.", hu: "Kávétermelők hálózata, amely a méltányos kereskedelmet és a fenntartható gazdálkodást támogatja a hegyvidéken.", ro: "O rețea de cultivatori de cafea care promovează comerțul echitabil și practicile agricole durabile în regiunea montană.", en: "A network of coffee farmers promoting fair trade and sustainable farming practices in the mountainous region." },
    facts: {
      de: ["Fördert fairen Handel.", "Unterstützt lokale Bauern."],
      hu: ["Támogatja a méltányos kereskedelmet.", "Támogatja a helyi gazdákat."],
      ro: ["Promovează comerțul echitabil.", "Sprijină fermierii locali."],
      en: ["Promotes fair trade.", "Supports local farmers."]
    }
  },
  {
    id: "lospalos-timber-mill-economic-v2",
    type: "industry",
    parent: "TL-LA",
    coords: [126.9967, -8.5186],
    name: { de: "Sägewerk Lospalos", hu: "Lospalos Fafeldolgozó", ro: "Fabrica de Cherestea Lospalos", en: "Lospalos Timber Mill" },
    description: { de: "Eine lokale Einrichtung zur Holzverarbeitung im Osten, die Bauholz aus nachhaltigen regionalen Quellen liefert.", hu: "Egy helyi fafeldolgozó létesítmény keleten, amely fenntartható regionális forrásokból biztosít épületfát.", ro: "O facilitate locală de prelucrare a lemnului în est, furnizând cherestea din surse regionale durabile.", en: "A local timber processing facility in the east providing lumber from sustainable regional sources." },
    facts: {
      de: ["Verarbeitet lokales Holz.", "Wichtig für den Bau."],
      hu: ["Helyi fát dolgoz fel.", "Fontos az építkezéshez."],
      ro: ["Procesează lemn local.", "Important pentru construcții."],
      en: ["Processes local wood.", "Important for construction."]
    }
  },
  {
    id: "pelican-paradise-resort-project-economic-v2",
    type: "industry",
    parent: "TL-DI",
    coords: [125.5200, -8.5500],
    name: { de: "Pelican Paradise Resort Projekt", hu: "Pelican Paradise Resort Projekt", ro: "Proiectul Pelican Paradise Resort", en: "Pelican Paradise Resort Project" },
    description: { de: "Eine groß angelegte touristische Entwicklung westlich von Dili, die darauf abzielt, Arbeitsplätze zu schaffen und den Tourismus zu stärken.", hu: "Egy nagyszabású turisztikai fejlesztés Dilitől nyugatra, melynek célja a munkahelyteremtés és a turizmus fellendítése.", ro: "O dezvoltare turistică pe scară largă la vest de Dili, menită să creeze locuri de muncă și să stimuleze turismul.", en: "A large-scale tourism development west of Dili aiming to create jobs and boost tourism." },
    facts: {
      de: ["Ausländische Investition.", "Zentrum für Ökotourismus."],
      hu: ["Külföldi befektetés.", "Ökoturizmus központja."],
      ro: ["Investiție străină.", "Centru pentru ecoturism."],
      en: ["Foreign investment.", "Center for ecotourism."]
    }
  },
  {
    id: "atauro-eco-tourism-hub-economic-v2",
    type: "trade-hub",
    parent: "TL-DI",
    coords: [125.6000, -8.2333],
    name: { de: "Ökotourismus-Zentrum Atauro", hu: "Atauro Ökoturizmus Központ", ro: "Centrul de Ecoturism Atauro", en: "Atauro Eco-Tourism Hub" },
    description: { de: "Ein wachsender Wirtschaftssektor auf der Insel Atauro, der sich auf nachhaltiges Tauchen und Gemeinschaftstourismus konzentriert.", hu: "Egy növekvő gazdasági ágazat Atauro szigetén, amely a fenntartható búvárkodásra és a közösségi turizmusra összpontosít.", ro: "Un sector economic în creștere pe insula Atauro, axat pe scufundări durabile și turism comunitar.", en: "A growing economic sector on Atauro Island focusing on sustainable diving and community-based tourism." },
    facts: {
      de: ["Nachhaltige Entwicklung.", "Weltklasse-Tauchen."],
      hu: ["Fenntartható fejlődés.", "Világszínvonalú búvárkodás."],
      ro: ["Dezvoltare durabilă.", "Scufundări de talie mondială."],
      en: ["Sustainable development.", "World-class diving."]
    }
  },
  {
    id: "manatuto-salt-works-economic-v2",
    type: "industry",
    parent: "TL-MT",
    coords: [126.0167, -8.5167],
    name: { de: "Salinen von Manatuto", hu: "Manatuto Sólepárlók", ro: "Salinele din Manatuto", en: "Manatuto Salt Works" },
    description: { de: "Ein traditionelles Zentrum der Meersalzgewinnung, das einen wichtigen Einkommenszweig für die Küstengemeinden darstellt.", hu: "A tengeri só lepárlásának hagyományos központja, amely a partmenti közösségek fontos bevételi forrása.", ro: "Un centru tradițional de extracție a sării de mare, oferind o sursă importantă de venit pentru comunitățile de coastă.", en: "A traditional center of sea salt extraction providing an important source of income for coastal communities." },
    facts: {
      de: ["Traditionelle Methoden.", "Wichtig für Küstengemeinden."],
      hu: ["Hagyományos módszerek.", "Fontos a partmenti közösségeknek."],
      ro: ["Metode tradiționale.", "Important pentru comunitățile de coastă."],
      en: ["Traditional methods.", "Important for coastal communities."]
    }
  },
  {
    id: "liquica-cement-plant-economic-v2",
    type: "industry",
    parent: "TL-LI",
    coords: [125.3333, -8.5833],
    name: { de: "Zementwerk Liquiçá", hu: "Liquiçá Cementgyár", ro: "Fabrica de Ciment Liquiçá", en: "Liquiçá Cement Plant" },
    description: { de: "Eine industrielle Anlage im Westen, die Baustoffe für die rasante infrastrukturelle Entwicklung des Landes produziert.", hu: "Egy nyugati ipari létesítmény, amely építőanyagokat termel az ország gyors infrastrukturális fejlődéséhez.", ro: "O facilitate industrială în vest, producând materiale de construcție pentru dezvoltarea rapidă a infrastructurii țării.", en: "An industrial facility in the west producing building materials for the country's rapid infrastructural development." },
    facts: {
      de: ["Produziert Baumaterial.", "Fördert Infrastruktur."],
      hu: ["Építőanyagot gyárt.", "Támogatja az infrastruktúrát."],
      ro: ["Produce materiale de construcție.", "Promovează infrastructura."],
      en: ["Produces building material.", "Promotes infrastructure."]
    }
  },
  {
    id: "pante-macassar-port-economic-v2",
    type: "port",
    parent: "TL-OE",
    coords: [124.3833, -9.1950],
    name: { de: "Hafen Pante Macassar", hu: "Pante Macassar Kikötő", ro: "Portul Pante Macassar", en: "Pante Macassar Port" },
    description: { de: "Der Haupthafen der Oecusse-Exklave, entscheidend für den Fährverkehr nach Dili und den internationalen Frachthandel.", hu: "Az Oecusse-exklávé fő kikötője, amely kulcsfontosságú a Dilibe tartó kompok és a nemzetközi teherforgalom számára.", ro: "Principalul port al exclavei Oecusse, crucial pentru serviciile de feribot către Dili și comerțul internațional cu mărfuri.", en: "The main port of the Oecusse exclave, crucial for ferry services to Dili and international freight trade." },
    facts: {
      de: ["Verbindet Oecusse.", "Teil von ZEESM."],
      hu: ["Összeköti Oecusse-t.", "A ZEESM része."],
      ro: ["Conectează Oecusse.", "Parte a ZEESM."],
      en: ["Connects Oecusse.", "Part of ZEESM."]
    }
  },
  {
    id: "inur-sacrato-power-station-economic-v2",
    type: "energy",
    parent: "TL-OE",
    coords: [124.3667, -9.2167],
    name: { de: "Kraftwerk Inur Sacrato", hu: "Inur Sacrato Erőmű", ro: "Centrala Electrică Inur Sacrato", en: "Inur Sacrato Power Station" },
    description: { de: "Ein modernes Kraftwerk in Oecusse, das eine stabile Energieversorgung für die Sonderwirtschaftszone gewährleistet.", hu: "Egy modern erőmű Oecusse-ban, amely stabil energiaellátást biztosít a különleges gazdasági övezet számára.", ro: "O centrală electrică modernă în Oecusse, asigurând o aprovizionare stabilă cu energie pentru zona economică specială.", en: "A modern power station in Oecusse ensuring a stable energy supply for the special economic zone." },
    facts: {
      de: ["Stabile Energie für Oecusse.", "Moderne Anlage."],
      hu: ["Stabil energia Oecusse számára.", "Modern létesítmény."],
      ro: ["Energie stabilă pentru Oecusse.", "Facilitate modernă."],
      en: ["Stable energy for Oecusse.", "Modern facility."]
    }
  }
];
