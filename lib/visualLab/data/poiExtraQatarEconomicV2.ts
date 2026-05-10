import type { POI } from "./poi";

export const poiExtraQatarEconomicV2: POI[] = [
  {
    id: "ras-laffan-industrial-city-economic-v2",
    type: "industry",
    parent: "QA-KH",
    coords: [51.5333, 25.8833],
    name: {
      de: "Industriestadt Ras Laffan",
      hu: "Ras Laffan Ipari Város",
      ro: "Orașul Industrial Ras Laffan",
      en: "Ras Laffan Industrial City"
    },
    description: {
      de: "Eines der größten Exportzentren für verflüssigtes Erdgas (LNG) weltweit.",
      hu: "A világ egyik legnagyobb cseppfolyósított földgáz (LNG) exportközpontja.",
      ro: "Unul dintre cele mai mari centre de export de gaze naturale lichefiate (GNL) din lume.",
      en: "One of the largest liquefied natural gas (LNG) export centers globally."
    },
    facts: {
      de: ["Hauptsitz von QatarEnergy.", "Gigantische Hafenanlagen.", "Wichtig für die globale Energieversorgung."],
      hu: ["A QatarEnergy központja.", "Hatalmas kikötői létesítmények.", "Fontos a globális energiaellátásban."],
      ro: ["Sediul QatarEnergy.", "Facilități portuare uriașe.", "Important pentru aprovizionarea globală cu energie."],
      en: ["Headquarters of QatarEnergy.", "Massive port facilities.", "Important for global energy supply."]
    }, image: "/poi-images/ras-laffan-industrial-city-economic-v2.webp"},
  {
    id: "hamad-port-economic-v2",
    type: "port",
    parent: "QA-WA",
    coords: [51.6086, 25.0272],
    name: {
      de: "Hamad-Hafen",
      hu: "Hamad Kikötő",
      ro: "Portul Hamad",
      en: "Hamad Port"
    },
    description: {
      de: "Katars wichtigster Seehafen südlich von Doha, zentral für den internationalen Handel.",
      hu: "Katar legfontosabb tengeri kikötője Dohától délre, a nemzetközi kereskedelem központja.",
      ro: "Principalul port maritim al Qatarului la sud de Doha, central pentru comerțul internațional.",
      en: "Qatar's main seaport south of Doha, central to international trade."
    },
    facts: {
      de: ["Eröffnet im Jahr 2017.", "Kapazität für Millionen von Containern.", "Fördert die wirtschaftliche Diversifizierung."],
      hu: ["2017-ben nyílt meg.", "Kapacitása több millió konténer.", "Elősegíti a gazdasági diverzifikációt."],
      ro: ["Deschis în 2017.", "Capacitate pentru milioane de containere.", "Promovează diversificarea economică."],
      en: ["Opened in 2017.", "Capacity for millions of containers.", "Promotes economic diversification."]
    }
  },
  {
    id: "mesaieed-industrial-city-economic-v2",
    type: "industry",
    parent: "QA-WA",
    coords: [51.5500, 24.9833],
    name: {
      de: "Industriestadt Mesaieed",
      hu: "Mesaieed Ipari Város",
      ro: "Orașul Industrial Mesaieed",
      en: "Mesaieed Industrial City"
    },
    description: {
      de: "Ein bedeutendes Zentrum für Petrochemie, Düngemittelproduktion und Stahlherstellung.",
      hu: "A petrolkémia, a műtrágyagyártás és az acélgyártás jelentős központja.",
      ro: "Un centru major pentru petrochimie, producția de îngrășăminte și oțel.",
      en: "A major center for petrochemicals, fertilizer production, and steel manufacturing."
    },
    facts: {
      de: ["Gegründet in den 1940er Jahren.", "Wichtiger Tiefseehafen.", "Zuhause von Qatar Steel."],
      hu: ["Az 1940-es években alapították.", "Fontos mélyvízi kikötő.", "A Qatar Steel otthona."],
      ro: ["Fondat în anii 1940.", "Port important de adâncime.", "Sediul Qatar Steel."],
      en: ["Founded in the 1940s.", "Important deep-water port.", "Home of Qatar Steel."]
    }, image: "/poi-images/mesaieed-industrial-city-economic-v2.webp"},
  {
    id: "dukhan-oil-field-economic-v2",
    type: "energy",
    parent: "QA-SH",
    coords: [50.7833, 25.4333],
    name: {
      de: "Dukhan-Ölfeld",
      hu: "Dukhan Olajmező",
      ro: "Câmpul Petrolier Dukhan",
      en: "Dukhan Oil Field"
    },
    description: {
      de: "Das älteste und wichtigste Onshore-Ölfeld in Katar, das die moderne Wirtschaft des Landes begründete.",
      hu: "Katar legrégebbi és legfontosabb szárazföldi olajmezője, amely megalapozta az ország modern gazdaságát.",
      ro: "Cel mai vechi și important câmp petrolier terestru din Qatar, care a fondat economia modernă a țării.",
      en: "The oldest and most important onshore oil field in Qatar, which established the country's modern economy."
    },
    facts: {
      de: ["Entdeckt im Jahr 1939.", "Erste Ölexporte 1949.", "Reich an hochwertigem Rohöl."],
      hu: ["1939-ben fedezték fel.", "Első olajexport 1949-ben.", "Gazdag kiváló minőségű kőolajban."],
      ro: ["Descoperit în 1939.", "Primele exporturi de petrol în 1949.", "Bogat în țiței de înaltă calitate."],
      en: ["Discovered in 1939.", "First oil exports in 1949.", "Rich in high-quality crude oil."]
    }, image: "/poi-images/dukhan-oil-field-economic-v2.webp"},
  {
    id: "north-field-economic-v2",
    type: "energy",
    parent: "QA-MS",
    coords: [52.0000, 26.5000],
    name: {
      de: "Nord-Feld",
      hu: "Északi Mező",
      ro: "Câmpul Nord",
      en: "North Field"
    },
    description: {
      de: "Das weltweit größte ungebundene Erdgasfeld, das Katar zu einem globalen Energie-Giganten macht.",
      hu: "A világ legnagyobb független földgázmezője, amely Katart globális energia-óriássá teszi.",
      ro: "Cel mai mare câmp de gaze naturale neasociat din lume, făcând din Qatar un gigant energetic global.",
      en: "The world's largest non-associated natural gas field, making Qatar a global energy giant."
    },
    facts: {
      de: ["Entdeckt im Jahr 1971.", "Teilt sich das Feld mit dem Iran.", "Enthält riesige Gasreserven."],
      hu: ["1971-ben fedezték fel.", "Iránnal közös mező.", "Hatalmas gáztartalékokat rejt."],
      ro: ["Descoperit în 1971.", "Împarte câmpul cu Iranul.", "Conține rezerve uriașe de gaze."],
      en: ["Discovered in 1971.", "Shares the field with Iran.", "Contains massive gas reserves."]
    }, image: "/poi-images/north-field-economic-v2.webp"},
  {
    id: "qatar-science-and-technology-park-economic-v2",
    type: "trade-hub",
    parent: "QA-DA",
    coords: [51.4350, 25.3220],
    name: {
      de: "Wissenschafts- und Technologiepark Katar",
      hu: "Katar Tudományos és Technológiai Park",
      ro: "Parcul de Știință și Tehnologie Qatar",
      en: "Qatar Science & Technology Park"
    },
    description: {
      de: "Ein Zentrum für angewandte Forschung, technologische Innovation und Unternehmertum in Doha.",
      hu: "Az alkalmazott kutatás, a technológiai innováció és a vállalkozói szellem központja Dohában.",
      ro: "Un centru pentru cercetare aplicată, inovație tehnologică și antreprenoriat în Doha.",
      en: "A center for applied research, technological innovation, and entrepreneurship in Doha."
    },
    facts: {
      de: ["Teil der Qatar Foundation.", "Fördert Technologie-Start-ups.", "Zieht internationale Tech-Giganten an."],
      hu: ["A Qatar Foundation része.", "Támogatja a technológiai start-upokat.", "Vonzza a nemzetközi tech-óriásokat."],
      ro: ["Parte a Qatar Foundation.", "Sprijină start-up-urile tehnologice.", "Atrage giganții tehnologici internaționali."],
      en: ["Part of the Qatar Foundation.", "Supports technology start-ups.", "Attracts international tech giants."]
    }, image: "/poi-images/qatar-science-and-technology-park-economic-v2.webp"},
  {
    id: "al-ruwais-port-economic-v2",
    type: "port",
    parent: "QA-MS",
    coords: [51.2130, 26.1380],
    name: {
      de: "Al-Ruwais-Hafen",
      hu: "Al Ruwais Kikötő",
      ro: "Portul Al Ruwais",
      en: "Al Ruwais Port"
    },
    description: {
      de: "Ein wichtiger Hafen im Norden Katars, der den Handel mit benachbarten Golfstaaten erleichtert.",
      hu: "Fontos kikötő Katar északi részén, amely megkönnyíti a kereskedelmet a szomszédos öböl menti országokkal.",
      ro: "Un port important în nordul Qatarului care facilitează comerțul cu statele vecine din Golf.",
      en: "An important port in northern Qatar facilitating trade with neighboring Gulf states."
    },
    facts: {
      de: ["Kürzlich modernisiert.", "Fokus auf regionale Fracht.", "Unterstützt die Wirtschaft im Norden."],
      hu: ["Nemrég korszerűsítették.", "Fókuszban a regionális teherszállítás.", "Támogatja az északi gazdaságot."],
      ro: ["Modernizat recent.", "Concentrează-te pe marfă regională.", "Sprijină economia nordică."],
      en: ["Recently modernized.", "Focus on regional cargo.", "Supports the northern economy."]
    }, image: "/poi-images/al-ruwais-port-economic-v2.webp"},
  {
    id: "qatar-financial-centre-economic-v2",
    type: "trade-hub",
    parent: "QA-DA",
    coords: [51.5280, 25.3180],
    name: {
      de: "Katar-Finanzzentrum",
      hu: "Katar Pénzügyi Központ",
      ro: "Centrul Financiar Qatar",
      en: "Qatar Financial Centre"
    },
    description: {
      de: "Ein wichtiges Finanz- und Geschäftszentrum, das ausländische Investitionen nach Katar zieht.",
      hu: "Fontos pénzügyi és üzleti központ, amely külföldi befektetéseket vonz Katarba.",
      ro: "Un important centru financiar și de afaceri care atrage investiții străine în Qatar.",
      en: "A major financial and business center attracting foreign investment to Qatar."
    },
    facts: {
      de: ["Gegründet im Jahr 2005.", "Bietet ein eigenes Rechtssystem.", "Zentrum für globale Banken."],
      hu: ["2005-ben alapították.", "Saját jogrendszert kínál.", "Globális bankok központja."],
      ro: ["Înființat în 2005.", "Oferă un sistem juridic propriu.", "Centrul băncilor globale."],
      en: ["Founded in 2005.", "Offers its own legal system.", "Center for global banks."]
    }
  },
  {
    id: "qatar-steel-plant-economic-v2",
    type: "industry",
    parent: "QA-WA",
    coords: [51.5600, 24.9750],
    name: {
      de: "Katar-Stahlwerk",
      hu: "Katar Acélmű",
      ro: "Oțelăria Qatar",
      en: "Qatar Steel Plant"
    },
    description: {
      de: "Eines der führenden Stahlunternehmen in der Golfregion, das wesentlich zur Infrastruktur beiträgt.",
      hu: "Az öböl-menti régió egyik vezető acélipari vállalata, amely jelentősen hozzájárul az infrastruktúrához.",
      ro: "Una dintre cele mai importante companii siderurgice din regiunea Golfului, contribuind semnificativ la infrastructură.",
      en: "One of the leading steel companies in the Gulf region, contributing significantly to infrastructure."
    },
    facts: {
      de: ["Produziert seit 1978.", "Hauptsitz in Mesaieed.", "Exportiert in viele Länder."],
      hu: ["1978 óta termel.", "Központja Mesaieedben van.", "Számos országba exportál."],
      ro: ["Produce din 1978.", "Sediul central în Mesaieed.", "Exportă în multe țări."],
      en: ["Producing since 1978.", "Headquartered in Mesaieed.", "Exports to many countries."]
    }
  },
  {
    id: "qatalum-aluminum-plant-economic-v2",
    type: "industry",
    parent: "QA-WA",
    coords: [51.5700, 24.9650],
    name: {
      de: "Qatalum-Aluminiumwerk",
      hu: "Qatalum Alumíniummű",
      ro: "Uzina de Aluminiu Qatalum",
      en: "Qatalum Aluminum Plant"
    },
    description: {
      de: "Eine der effizientesten und umweltfreundlichsten Aluminiumhütten der Welt.",
      hu: "A világ egyik leghatékonyabb és leginkább környezetbarát alumíniumkohója.",
      ro: "Una dintre cele mai eficiente și ecologice topitorii de aluminiu din lume.",
      en: "One of the most efficient and environmentally friendly aluminum smelters in the world."
    },
    facts: {
      de: ["Joint Venture mit Norsk Hydro.", "Produziert Primäraluminium.", "Nutzt modernste Technologie."],
      hu: ["Közös vállalat a Norsk Hydróval.", "Elsődleges alumíniumot gyárt.", "A legkorszerűbb technológiát használja."],
      ro: ["O societate mixtă cu Norsk Hydro.", "Produce aluminiu primar.", "Folosește tehnologie de ultimă oră."],
      en: ["Joint venture with Norsk Hydro.", "Produces primary aluminum.", "Uses cutting-edge technology."]
    }, image: "/poi-images/qatalum-aluminum-plant-economic-v2.webp"},
  {
    id: "pearl-gtl-plant-economic-v2",
    type: "energy",
    parent: "QA-KH",
    coords: [51.5400, 25.9000],
    name: {
      de: "Pearl GTL-Anlage",
      hu: "Pearl GTL Üzem",
      ro: "Uzina Pearl GTL",
      en: "Pearl GTL Plant"
    },
    description: {
      de: "Die weltweit größte Anlage zur Umwandlung von Erdgas in flüssige Kraftstoffe (Gas-to-Liquids).",
      hu: "A világ legnagyobb létesítménye a földgáz folyékony üzemanyaggá történő átalakítására (Gas-to-Liquids).",
      ro: "Cea mai mare instalație din lume de conversie a gazelor naturale în combustibili lichizi (Gas-to-Liquids).",
      en: "The world's largest plant for converting natural gas into liquid fuels (Gas-to-Liquids)."
    },
    facts: {
      de: ["Zusammenarbeit mit Shell.", "Produziert sauberen Diesel.", "Ein technologisches Meisterwerk."],
      hu: ["Együttműködés a Shell-lel.", "Tiszta dízelt állít elő.", "Technológiai mestermű."],
      ro: ["Colaborare cu Shell.", "Produce motorină curată.", "O capodoperă tehnologică."],
      en: ["Collaboration with Shell.", "Produces clean diesel.", "A technological masterpiece."]
    }, image: "/poi-images/pearl-gtl-plant-economic-v2.webp"},
  {
    id: "halul-island-oil-terminal-economic-v2",
    type: "energy",
    parent: "QA-DA",
    coords: [52.4110, 25.6740],
    name: {
      de: "Halul-Insel Ölterminal",
      hu: "Halul-sziget Olajterminál",
      ro: "Terminalul Petrolier Insula Halul",
      en: "Halul Island Oil Terminal"
    },
    description: {
      de: "Das wichtigste Offshore-Zentrum zur Lagerung und Verladung von Rohöl in Katar.",
      hu: "A nyersolaj tárolásának és berakodásának legfontosabb tengeri központja Katarban.",
      ro: "Principalul centru offshore pentru depozitarea și încărcarea țițeiului din Qatar.",
      en: "The main offshore center for storing and loading crude oil in Qatar."
    },
    facts: {
      de: ["Liegt weit vor der Küste.", "Wichtiger Knotenpunkt für Export.", "Strenge Sicherheitsstandards."],
      hu: ["Messze a partoktól található.", "Fontos exportcsomópont.", "Szigorú biztonsági előírások."],
      ro: ["Situat departe în larg.", "Un nod important pentru export.", "Standarde stricte de siguranță."],
      en: ["Located far offshore.", "Important hub for export.", "Strict safety standards."]
    }, image: "/poi-images/halul-island-oil-terminal-economic-v2.webp"},
  {
    id: "barzan-gas-project-economic-v2",
    type: "energy",
    parent: "QA-KH",
    coords: [51.5300, 25.8900],
    name: {
      de: "Barzan-Gasprojekt",
      hu: "Barzan Gázprojekt",
      ro: "Proiectul de Gaze Barzan",
      en: "Barzan Gas Project"
    },
    description: {
      de: "Ein gigantisches Projekt, das den wachsenden inländischen Energiebedarf Katars decken soll.",
      hu: "Gigantikus projekt, amelynek célja Katar növekvő hazai energiaigényének kielégítése.",
      ro: "Un proiect gigantic conceput pentru a satisface cererea internă în creștere de energie a Qatarului.",
      en: "A massive project designed to meet Qatar's growing domestic energy demand."
    },
    facts: {
      de: ["Fokus auf den lokalen Markt.", "Verarbeitet Gas aus dem Nord-Feld.", "Unterstützt Wasserentsalzung."],
      hu: ["Fókuszban a helyi piac.", "Az Északi Mezőből származó gázt dolgozza fel.", "Támogatja a vízsótalanítást."],
      ro: ["Se concentrează pe piața locală.", "Procesează gazul din Câmpul Nord.", "Sprijină desalinizarea apei."],
      en: ["Focus on the local market.", "Processes gas from the North Field.", "Supports water desalination."]
    }, image: "/poi-images/barzan-gas-project-economic-v2.webp"},
  {
    id: "doha-port-economic-v2",
    type: "port",
    parent: "QA-DA",
    coords: [51.5450, 25.2950],
    name: {
      de: "Doha-Hafen",
      hu: "Doha Kikötő",
      ro: "Portul Doha",
      en: "Doha Port"
    },
    description: {
      de: "Einst der Haupthafen des Landes, heute umstrukturiert für Kreuzfahrtschiffe und Tourismus.",
      hu: "Egykor az ország fő kikötője, ma luxushajók és a turizmus számára átalakítva.",
      ro: "Fostul port principal al țării, reproiectat acum pentru nave de croazieră și turism.",
      en: "Once the country's main port, now redesigned for cruise ships and tourism."
    },
    facts: {
      de: ["Zentral in Doha gelegen.", "Fokus auf Kreuzfahrttourismus.", "Historische Bedeutung."],
      hu: ["Doha központjában található.", "Fókuszban a tengeri turizmus.", "Történelmi jelentőségű."],
      ro: ["Situat central în Doha.", "Concentrează-te pe turismul de croazieră.", "Semnificație istorică."],
      en: ["Centrally located in Doha.", "Focus on cruise tourism.", "Historical significance."]
    }, image: "/poi-images/doha-port-economic-v2.webp"},
  {
    id: "umm-bab-cement-plant-economic-v2",
    type: "industry",
    parent: "QA-SH",
    coords: [50.8060, 25.2150],
    name: {
      de: "Umm-Bab Zementwerk",
      hu: "Umm Bab Cementgyár",
      ro: "Fabrica de Ciment Umm Bab",
      en: "Umm Bab Cement Plant"
    },
    description: {
      de: "Eine entscheidende Anlage für die Herstellung von Zement, der das rasante Bauwachstum in Katar unterstützt.",
      hu: "Döntő fontosságú létesítmény a cementgyártásban, amely támogatja Katar gyors építőipari növekedését.",
      ro: "O facilitate esențială pentru producția de ciment care susține creșterea rapidă a construcțiilor din Qatar.",
      en: "A crucial facility for cement production that supports Qatar's rapid construction growth."
    },
    facts: {
      de: ["Produziert hochwertigen Zement.", "Wichtig für die Infrastruktur.", "Nutzt lokale Rohstoffe."],
      hu: ["Kiváló minőségű cementet gyárt.", "Fontos az infrastruktúra számára.", "Helyi nyersanyagokat használ."],
      ro: ["Produce ciment de înaltă calitate.", "Important pentru infrastructură.", "Folosește materii prime locale."],
      en: ["Produces high-quality cement.", "Important for infrastructure.", "Uses local raw materials."]
    }, image: "/poi-images/umm-bab-cement-plant-economic-v2.webp"},
  {
    id: "ras-bufontas-free-zone-economic-v2",
    type: "trade-hub",
    parent: "QA-DA",
    coords: [51.5740, 25.2150],
    name: {
      de: "Ras-Bufontas Freihandelszone",
      hu: "Ras Bufontas Szabadkereskedelmi Övezet",
      ro: "Zona Liberă Ras Bufontas",
      en: "Ras Bufontas Free Zone"
    },
    description: {
      de: "Ein hochmodernes Geschäfts- und Logistikzentrum in der Nähe des internationalen Flughafens Hamad.",
      hu: "Korszerű üzleti és logisztikai központ a Hamad Nemzetközi Repülőtér közelében.",
      ro: "Un centru de afaceri și logistică de ultimă generație în apropierea Aeroportului Internațional Hamad.",
      en: "A state-of-the-art business and logistics center near Hamad International Airport."
    },
    facts: {
      de: ["Bietet Steueranreize.", "Fokus auf Technologie und Logistik.", "Zieht internationale Unternehmen an."],
      hu: ["Adókedvezményeket kínál.", "Fókuszban a technológia és a logisztika.", "Nemzetközi cégeket vonz."],
      ro: ["Oferă stimulente fiscale.", "Concentrează-te pe tehnologie și logistică.", "Atrage companii internaționale."],
      en: ["Offers tax incentives.", "Focus on technology and logistics.", "Attracts international companies."]
    }, image: "/poi-images/ras-bufontas-free-zone-economic-v2.webp"},
  {
    id: "umm-al-houl-power-plant-economic-v2",
    type: "energy",
    parent: "QA-WA",
    coords: [51.6250, 25.0760],
    name: {
      de: "Umm-al-Houl Kraftwerk",
      hu: "Umm Al Houl Erőmű",
      ro: "Centrala Electrică Umm Al Houl",
      en: "Umm Al Houl Power Plant"
    },
    description: {
      de: "Eines der größten Anlagen für Stromerzeugung und Wasserentsalzung im Nahen Osten.",
      hu: "A Közel-Kelet egyik legnagyobb áramtermelő és vízsótalanító létesítménye.",
      ro: "Una dintre cele mai mari instalații de generare a energiei și desalinizare a apei din Orientul Mijlociu.",
      en: "One of the largest power generation and water desalination facilities in the Middle East."
    },
    facts: {
      de: ["Deckt einen Großteil des Wasserbedarfs.", "Hochmoderne Technologie.", "Nahe dem Hamad-Hafen gelegen."],
      hu: ["A vízigény nagy részét fedezi.", "Korszerű technológia.", "A Hamad Kikötő közelében található."],
      ro: ["Acoperă o mare parte din necesarul de apă.", "Tehnologie de ultimă generație.", "Situat lângă Portul Hamad."],
      en: ["Covers much of the water demand.", "State-of-the-art technology.", "Located near Hamad Port."]
    }, image: "/poi-images/umm-al-houl-power-plant-economic-v2.webp"},
  {
    id: "al-rayyan-industrial-area-economic-v2",
    type: "industry",
    parent: "QA-RA",
    coords: [51.4240, 25.1870],
    name: {
      de: "Industriegebiet Al Rayyan",
      hu: "Al Rayyan Ipari Terület",
      ro: "Zona Industrială Al Rayyan",
      en: "Al Rayyan Industrial Area"
    },
    description: {
      de: "Ein weitläufiges Gewerbegebiet, das zahlreiche kleine und mittlere Produktionsunternehmen beherbergt.",
      hu: "Kiterjedt ipari park, amely számos kis- és középvállalkozásnak ad otthont a termelés területén.",
      ro: "Un parc de afaceri extins care găzduiește numeroase companii de producție mici și mijlocii.",
      en: "A sprawling business park hosting numerous small and medium-sized manufacturing companies."
    },
    facts: {
      de: ["Zentrum für lokale Fertigung.", "Wichtiger Arbeitgeber.", "Enormes Wirtschaftswachstum."],
      hu: ["A helyi gyártás központja.", "Jelentős munkáltató.", "Hatalmas gazdasági növekedés."],
      ro: ["Centru pentru producția locală.", "Angajator major.", "Creștere economică enormă."],
      en: ["Center for local manufacturing.", "Major employer.", "Enormous economic growth."]
    }
  },
  {
    id: "qafco-fertilizer-plant-economic-v2",
    type: "industry",
    parent: "QA-WA",
    coords: [51.5580, 24.9700],
    name: {
      de: "QAFCO-Düngemittelwerk",
      hu: "QAFCO Műtrágyagyár",
      ro: "Fabrica de Îngrășăminte QAFCO",
      en: "QAFCO Fertilizer Plant"
    },
    description: {
      de: "Katars führendes Unternehmen für die Produktion von Ammoniak und Harnstoff für die globale Landwirtschaft.",
      hu: "Katar vezető vállalata az ammónia és a karbamid gyártásában a globális mezőgazdaság számára.",
      ro: "Cea mai importantă companie din Qatar pentru producția de amoniac și uree pentru agricultura globală.",
      en: "Qatar's leading company for the production of ammonia and urea for global agriculture."
    },
    facts: {
      de: ["Weltgrößter Exporteur von Harnstoff.", "Standort in Mesaieed.", "Trägt zur Ernährungssicherheit bei."],
      hu: ["A karbamid legnagyobb exportőre a világon.", "Mesaieedben található.", "Hozzájárul az élelmezésbiztonsághoz."],
      ro: ["Cel mai mare exportator de uree din lume.", "Situat în Mesaieed.", "Contribuie la securitatea alimentară."],
      en: ["World's largest exporter of urea.", "Located in Mesaieed.", "Contributes to food security."]
    }, image: "/poi-images/qafco-fertilizer-plant-economic-v2.webp"},
  {
    id: "oryx-gtl-plant-economic-v2",
    type: "energy",
    parent: "QA-KH",
    coords: [51.5350, 25.8950],
    name: {
      de: "Oryx GTL-Anlage",
      hu: "Oryx GTL Üzem",
      ro: "Uzina Oryx GTL",
      en: "Oryx GTL Plant"
    },
    description: {
      de: "Ein Pionierprojekt in Katar, das Erdgas in saubere, hochwertige flüssige Kraftstoffe umwandelt.",
      hu: "Egy úttörő projekt Katarban, amely a földgázt tiszta, kiváló minőségű folyékony üzemanyaggá alakítja.",
      ro: "Un proiect de pionierat în Qatar, care transformă gazele naturale în combustibili lichizi curați, de înaltă calitate.",
      en: "A pioneering project in Qatar that converts natural gas into clean, high-quality liquid fuels."
    },
    facts: {
      de: ["Joint Venture mit Sasol.", "Erste Anlage ihrer Art in der Region.", "Reduziert Emissionen."],
      hu: ["Közös vállalat a Sasol-lal.", "Az első ilyen jellegű üzem a régióban.", "Csökkenti a károsanyag-kibocsátást."],
      ro: ["O societate mixtă cu Sasol.", "Prima facilitate de acest gen din regiune.", "Reduce emisiile."],
      en: ["Joint venture with Sasol.", "First facility of its kind in the region.", "Reduces emissions."]
    }
  }
];
