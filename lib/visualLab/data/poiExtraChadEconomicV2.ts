import type { POI } from "./poi";

export const poiExtraChadEconomicV2: POI[] = [
  {
    id: "doba-oil-field-economic-v2",
    type: "industry",
    parent: "TD-LR",
    coords: [16.8, 8.7],
    name: {
      de: "Doba Ölfeld",
      hu: "Doba olajmező",
      ro: "Câmpul petrolifer Doba",
      en: "Doba Oil Field"
    },
    description: {
      de: "Das Doba-Becken ist das Herz der tschadischen Erdölindustrie und ein wichtiger Wirtschaftsfaktor des Landes.",
      hu: "A Doba-medence Csád kőolajiparának szíve és az ország legfontosabb gazdasági bevételi forrása.",
      ro: "Bazinul Doba este inima industriei petroliere din Ciad și un factor economic major pentru țară.",
      en: "The Doba Basin is the heart of Chad's petroleum industry and a major economic driver for the country."
    },
    facts: {
      de: ["Hauptstandort der Ölförderung", "Export via Pipeline nach Kamerun"],
      hu: ["A kőolajkitermelés központja", "Exportvezeték Kamerunon keresztül"],
      ro: ["Locația principală de extracție a petrolului", "Export prin conductă către Camerun"],
      en: ["Main site of oil extraction", "Exports via pipeline to Cameroon"]
    }
  },
  {
    id: "kome-oil-field-economic-v2",
    type: "industry",
    parent: "TD-LR",
    coords: [16.7, 8.8],
    name: {
      de: "Kome Ölfeld",
      hu: "Kome olajmező",
      ro: "Câmpul petrolifer Kome",
      en: "Kome Oil Field"
    },
    description: {
      de: "Eines der größten Fördergebiete innerhalb des Doba-Projekts mit umfangreicher Infrastruktur zur Rohölgewinnung.",
      hu: "A Doba-projekt egyik legnagyobb kitermelési területe, kiterjedt nyersolaj-kitermelési infrastruktúrával.",
      ro: "Una dintre cele mai mari zone de producție din cadrul proiectului Doba, cu infrastructură extinsă.",
      en: "One of the largest production areas within the Doba project with extensive crude oil infrastructure."
    },
    facts: {
      de: ["Teil des ExxonMobil-Konsortiums", "Zentrum der industriellen Erschließung"],
      hu: ["Az ExxonMobil konzorcium része", "Az ipari fejlesztés központja"],
      ro: ["Parte a consorțiului ExxonMobil", "Centru de dezvoltare industrială"],
      en: ["Part of the ExxonMobil consortium", "Center of industrial development"]
    }
  },
  {
    id: "bol-river-port-economic-v2",
    type: "port",
    parent: "TD-LC",
    coords: [14.71, 13.46],
    name: {
      de: "Bol Flusshafen",
      hu: "Boli folyami kikötő",
      ro: "Portul fluvial Bol",
      en: "Bol River Port"
    },
    description: {
      de: "Ein wichtiger Umschlagplatz am Tschadsee für den regionalen Handel mit Fisch, Getreide und Handelsgütern.",
      hu: "Fontos kereskedelmi csomópont a Csád-tónál, ahol hallal, gabonával és egyéb árukkal kereskednek.",
      ro: "Un punct important de transbordare pe Lacul Ciad pentru comerțul regional cu pește și cereale.",
      en: "A key transshipment point on Lake Chad for regional trade in fish, grain, and commercial goods."
    },
    facts: {
      de: ["Zentrum des Seehandels", "Wichtiger Logistikknoten im Westen"],
      hu: ["A tavi kereskedelem központja", "Fontos nyugati logisztikai csomópont"],
      ro: ["Centrul comerțului pe lac", "Nod logistic important în vest"],
      en: ["Center of lake trade", "Important western logistics hub"]
    }
  },
  {
    id: "moundou-brewery-economic-v2",
    type: "industry",
    parent: "TD-LO",
    coords: [16.08, 8.57],
    name: {
      de: "Moundou Brauerei",
      hu: "Moundoui sörgyár",
      ro: "Berăria Moundou",
      en: "Moundou Brewery"
    },
    description: {
      de: "Sitz der Brauerei des berühmten Gala-Biers, eines der erfolgreichsten Industrieunternehmen im Süden des Landes.",
      hu: "A híres Gala sör gyára, az ország déli részének egyik legsikeresebb ipari vállalata.",
      ro: "Sediul berăriei faimoasei beri Gala, una dintre cele mai de succes companii industriale din sud.",
      en: "Home to the brewery of the famous Gala beer, one of the most successful industrial companies in the south."
    },
    facts: {
      de: ["Produzent von Gala Bier", "Größter Arbeitgeber in Moundou"],
      hu: ["A Gala sör gyártója", "Moundou legnagyobb munkáltatója"],
      ro: ["Producătorul berii Gala", "Cel mai mare angajator din Moundou"],
      en: ["Producer of Gala beer", "Largest employer in Moundou"]
    }
  },
  {
    id: "sarh-sugar-refinery-economic-v2",
    type: "industry",
    parent: "TD-MC",
    coords: [18.39, 9.15],
    name: {
      de: "Sarh Zuckerfabrik",
      hu: "Sarhi cukorgyár",
      ro: "Rafinăria de zahăr Sarh",
      en: "Sarh Sugar Refinery"
    },
    description: {
      de: "Die Zuckerfabrik in Sarh verarbeitet Zuckerrohr aus der Region und ist eine Säule der lokalen Agrarindustrie.",
      hu: "A sarhi cukorgyár a régió cukornádtermését dolgozza fel, a helyi agrárbirodalom egyik oszlopa.",
      ro: "Rafinăria de zahăr din Sarh procesează trestia de zahăr din regiune, fiind un pilon al agroindustriei.",
      en: "The sugar refinery in Sarh processes sugar cane from the region and is a pillar of the local agro-industry."
    },
    facts: {
      de: ["Verarbeitung lokaler Rohstoffe", "Bedeutend für den Binnenmarkt"],
      hu: ["Helyi nyersanyagok feldolgozása", "Jelentős a belföldi piac számára"],
      ro: ["Procesarea materiilor prime locale", "Important pentru piața internă"],
      en: ["Processing local raw materials", "Significant for the domestic market"]
    }
  },
  {
    id: "bongor-cotton-plant-economic-v2",
    type: "industry",
    parent: "TD-ME",
    coords: [15.37, 10.28],
    name: {
      de: "Bongor Baumwollwerk",
      hu: "Bongori gyapotfeldolgozó",
      ro: "Fabrica de bumbac Bongor",
      en: "Bongor Cotton Mill"
    },
    description: {
      de: "In dieser Anlage wird Baumwolle für den Export vorbereitet, was Bongor zu einem wichtigen Zentrum der Textilindustrie macht.",
      hu: "Ebben az üzemben készítik elő a gyapotot exportra, így Bongor a textilipar egyik fontos központja.",
      ro: "În această instalație, bumbacul este pregătit pentru export, făcând din Bongor un centru important.",
      en: "In this facility, cotton is prepared for export, making Bongor an important center for the textile industry."
    },
    facts: {
      de: ["Zentrum der Baumwollentkörnung", "Wichtiges Exportgut"],
      hu: ["A gyapotmagtalanítás központja", "Fontos exportcikk"],
      ro: ["Centru de egrenare a bumbacului", "Bun de export important"],
      en: ["Center of cotton ginning", "Important export commodity"]
    }
  },
  {
    id: "pala-gold-mines-economic-v2",
    type: "industry",
    parent: "TD-MO",
    coords: [14.9, 9.36],
    name: {
      de: "Pala Goldminen",
      hu: "Pala aranybányák",
      ro: "Minele de aur Pala",
      en: "Pala Gold Mines"
    },
    description: {
      de: "Bergbaugebiet im Südwesten, in dem Goldvorkommen sowohl industriell als auch handwerklich abgebaut werden.",
      hu: "Délnyugati bányavidék, ahol ipari és kézműves módszerekkel is termelnek ki aranyat.",
      ro: "Zonă minieră din sud-vest, unde zăcămintele de aur sunt exploatate industrial și artizanal.",
      en: "Mining area in the southwest where gold deposits are extracted both industrially and artisanally."
    },
    facts: {
      de: ["Reiche Mineralvorkommen", "Bedeutend für den Bergbausektor"],
      hu: ["Gazdag ásványkincsek", "Jelentős a bányászati szektorban"],
      ro: ["Zăcăminte minerale bogate", "Semnificativ pentru sectorul minier"],
      en: ["Rich mineral deposits", "Significant for the mining sector"]
    }
  },
  {
    id: "mao-natron-mines-economic-v2",
    type: "industry",
    parent: "TD-KA",
    coords: [15.1, 14.1],
    name: {
      de: "Mao Natron-Minen",
      hu: "Maoi nátronbányák",
      ro: "Minele de natron Mao",
      en: "Mao Natron Mines"
    },
    description: {
      de: "Natron ist ein traditionelles Bergbauprodukt in der Kanem-Region und wird für Vieh und Industrie genutzt.",
      hu: "A nátron hagyományos bányászati termék a Kanem régióban, az állattenyésztés és az ipar is hasznosítja.",
      ro: "Natronul este un produs minier tradițional în regiunea Kanem, fiind utilizat pentru animale și industrie.",
      en: "Natron is a traditional mining product in the Kanem region, used for livestock and industry."
    },
    facts: {
      de: ["Abbau in Trockenseen", "Traditionelles Exportgut"],
      hu: ["Kiszáradt tavakból bányásszák", "Hagyományos exporttermék"],
      ro: ["Extracție din lacuri secate", "Bun de export tradițional"],
      en: ["Extraction from dry lakes", "Traditional export commodity"]
    }
  },
  {
    id: "abeche-tannery-economic-v2",
    type: "industry",
    parent: "TD-OD",
    coords: [20.84, 13.83],
    name: {
      de: "Abéché Gerberei",
      hu: "Abéchéi cserzőüzem",
      ro: "Tăbăcăria Abéché",
      en: "Abéché Tannery"
    },
    description: {
      de: "Die Lederverarbeitung in Abéché ist bekannt für ihre Qualität und versorgt sowohl den lokalen als auch den Exportmarkt.",
      hu: "Az abéchéi bőrfeldolgozás minőségéről híres, a helyi és az exportpiacot is kiszolgálja.",
      ro: "Prelucrarea pielii din Abéché este cunoscută pentru calitatea sa, aprovizionând piețele locale și de export.",
      en: "Leather processing in Abéché is known for its quality, supplying both local and export markets."
    },
    facts: {
      de: ["Traditionelles Handwerk", "Industrielle Lederproduktion"],
      hu: ["Hagyományos kézművesség", "Ipari bőrgyártás"],
      ro: ["Meșteșug tradițional", "Producție industrială de piele"],
      en: ["Traditional craftsmanship", "Industrial leather production"]
    }
  },
  {
    id: "bebedjia-oil-center-economic-v2",
    type: "industry",
    parent: "TD-LR",
    coords: [16.59, 8.68],
    name: {
      de: "Bébédjia Öl-Logistikzentrum",
      hu: "Bébédjia olajlogisztikai központ",
      ro: "Centrul logistic petrolier Bébédjia",
      en: "Bébédjia Oil Logistics Center"
    },
    description: {
      de: "Ein strategischer Knotenpunkt für die Wartung und Logistik der Ölfelder im Logone Oriental.",
      hu: "Stratégiai csomópont a Logone Oriental olajmezőinek karbantartásához és logisztikájához.",
      ro: "Un punct strategic pentru întreținerea și logistica câmpurilor petroliere din Logone Oriental.",
      en: "A strategic hub for the maintenance and logistics of the oil fields in Logone Oriental."
    },
    facts: {
      de: ["Versorgungsbasis für Ölfelder", "Wichtige technische Infrastruktur"],
      hu: ["Olajmezők ellátóbázisa", "Fontos műszaki infrastruktúra"],
      ro: ["Bază de aprovizionare pentru petrol", "Infrastructură tehnică importantă"],
      en: ["Supply base for oil fields", "Important technical infrastructure"]
    }
  },
  {
    id: "ndjamena-abattoir-economic-v2",
    type: "industry",
    parent: "TD-ND",
    coords: [15.05, 12.11],
    name: {
      de: "N'Djamena Schlachthof",
      hu: "N'Djamena vágóhíd",
      ro: "Abatorul N'Djamena",
      en: "N'Djamena Abattoir"
    },
    description: {
      de: "Zentraler Standort für die Fleischverarbeitung in der Hauptstadt, essenziell für die Versorgung der Metropole.",
      hu: "A főváros húsfeldolgozásának központi helyszíne, alapvető a metropolisz ellátásában.",
      ro: "Locația centrală pentru procesarea cărnii în capitală, esențială pentru aprovizionarea metropolei.",
      en: "Central site for meat processing in the capital, essential for the city's supply."
    },
    facts: {
      de: ["Moderne Fleischverarbeitung", "Wichtig für den Binnenhandel"],
      hu: ["Modern húsfeldolgozás", "Fontos a belföldi kereskedelemben"],
      ro: ["Procesare modernă a cărnii", "Important pentru comerțul intern"],
      en: ["Modern meat processing", "Important for domestic trade"]
    }
  },
  {
    id: "melfi-iron-ore-economic-v2",
    type: "industry",
    parent: "TD-GR",
    coords: [17.9, 11.0],
    name: {
      de: "Melfi Eisenerzvorkommen",
      hu: "Melfi vasérclelőhely",
      ro: "Zăcăminte de fier Melfi",
      en: "Melfi Iron Ore Deposits"
    },
    description: {
      de: "Bedeutendes Erzvorkommen in der Guéra-Region, das als Potenzial für die zukünftige industrielle Entwicklung gilt.",
      hu: "Jelentős érclelőhely a Guéra régióban, amely a jövőbeli ipari fejlődés alapja lehet.",
      ro: "Zăcământ important de minereu în regiunea Guéra, considerat un potențial pentru dezvoltarea viitoare.",
      en: "Significant ore deposit in the Guéra region, considered a potential site for future industrial development."
    },
    facts: {
      de: ["Große Eisenerzreserven", "Potenzieller Bergbaustandort"],
      hu: ["Hatalmas vasérckészletek", "Potenciális bányászati helyszín"],
      ro: ["Rezerve mari de minereu de fier", "Locație minieră potențială"],
      en: ["Large iron ore reserves", "Potential mining site"]
    }
  },
  {
    id: "hadjer-lamis-limestone-economic-v2",
    type: "industry",
    parent: "TD-HL",
    coords: [15.4, 12.7],
    name: {
      de: "Hadjer-Lamis Kalksteinbruch",
      hu: "Hadjer-Lamis mészkőbánya",
      ro: "Cariera de calcar Hadjer-Lamis",
      en: "Hadjer-Lamis Limestone Quarry"
    },
    description: {
      de: "Dieser Steinbruch liefert Rohstoffe für die Bauindustrie und Zementproduktion im westlichen Tschad.",
      hu: "Ez a bánya biztosítja a nyersanyagot az építőipar és a cementgyártás számára Nyugat-Csádban.",
      ro: "Această carieră furnizează materii prime pentru industria construcțiilor din vestul Ciadului.",
      en: "This quarry provides raw materials for the construction industry and cement production in western Chad."
    },
    facts: {
      de: ["Rohstoff für Zement", "Wichtig für die Bauwirtschaft"],
      hu: ["Cementgyártás alapanyaga", "Fontos az építőipar számára"],
      ro: ["Materie primă pentru ciment", "Important pentru construcții"],
      en: ["Raw material for cement", "Important for the construction industry"]
    }
  },
  {
    id: "guelendeng-port-economic-v2",
    type: "port",
    parent: "TD-ME",
    coords: [15.55, 10.92],
    name: {
      de: "Guelendeng Binnenhafen",
      hu: "Guelendengi folyami kikötő",
      ro: "Portul fluvial Guelendeng",
      en: "Guelendeng Inland Port"
    },
    description: {
      de: "Ein wichtiger Verladepunkt am Chari-Fluss für den Transport von Agrargütern in Richtung N'Djamena.",
      hu: "Fontos rakodóhely a Chari-folyón a mezőgazdasági áruk N'Djamena felé történő szállításához.",
      ro: "Un punct important de încărcare pe râul Chari pentru transportul mărfurilor agricole spre N'Djamena.",
      en: "An important loading point on the Chari River for transporting agricultural goods towards N'Djamena."
    },
    facts: {
      de: ["Flusstransport-Knoten", "Handel am Chari-Fluss"],
      hu: ["Folyami szállítási csomópont", "Kereskedelem a Chari-folyón"],
      ro: ["Nod de transport fluvial", "Comerț pe râul Chari"],
      en: ["River transport hub", "Trade on the Chari River"]
    }
  },
  {
    id: "koumra-textile-factory-economic-v2",
    type: "industry",
    parent: "TD-MA",
    coords: [17.55, 8.91],
    name: {
      de: "Koumra Textilfabrik",
      hu: "Koumrai textilgyár",
      ro: "Fabrica de textile Koumra",
      en: "Koumra Textile Factory"
    },
    description: {
      de: "Eine der Verarbeitungsstätten für die im Süden angebaute Baumwolle, zentral für die regionale Wertschöpfung.",
      hu: "A délen termesztett gyapot egyik feldolgozóhelye, a regionális értékteremtés központja.",
      ro: "Una dintre unitățile de procesare a bumbacului cultivat în sud, centrală pentru economia regională.",
      en: "One of the processing sites for cotton grown in the south, central to regional value creation."
    },
    facts: {
      de: ["Teil der Baumwollkette", "Wichtiger regionaler Betrieb"],
      hu: ["A gyapotlánc része", "Fontos regionális üzem"],
      ro: ["Parte a lanțului bumbacului", "Unitate regională importantă"],
      en: ["Part of the cotton chain", "Important regional operation"]
    }
  },
  {
    id: "rig-rig-natron-economic-v2",
    type: "industry",
    parent: "TD-KA",
    coords: [14.6, 14.2],
    name: {
      de: "Rig-Rig Natron-Abbau",
      hu: "Rig-Rigi nátronkitermelés",
      ro: "Extracția de natron Rig-Rig",
      en: "Rig-Rig Natron Extraction"
    },
    description: {
      de: "In den Senken um Rig-Rig wird Natron gewonnen, das im gesamten Tschad als Viehfutterzusatz geschätzt wird.",
      hu: "Rig-Rig környéki mélyedésekben termelik ki a nátront, amelyet Csád-szerte állati takarmány-kiegészítőként használnak.",
      ro: "În depresiunile de lângă Rig-Rig se extrage natron, prețuit în tot Ciadul ca supliment pentru animale.",
      en: "Natron is extracted in the depressions around Rig-Rig, valued throughout Chad as a livestock feed supplement."
    },
    facts: {
      de: ["Salzgewinnung in Wadis", "Traditionelle Rohstoffquelle"],
      hu: ["Sókitermelés a vádiakban", "Hagyományos nyersanyagforrás"],
      ro: ["Extracția sării în uadiuri", "Sursă tradițională de materii prime"],
      en: ["Salt extraction in wadis", "Traditional raw material source"]
    }
  },
  {
    id: "bagasola-fishing-port-economic-v2",
    type: "port",
    parent: "TD-LC",
    coords: [14.39, 13.78],
    name: {
      de: "Bagasola Fischereihafen",
      hu: "Bagasolai halászkikötő",
      ro: "Portul de pescuit Bagasola",
      en: "Bagasola Fishing Port"
    },
    description: {
      de: "Ein bedeutender Hafen für die Fischereiindustrie am Tschadsee, der Fisch für die Hauptstadt liefert.",
      hu: "A Csád-tó halászati iparának jelentős kikötője, amely hallal látja el a fővárost.",
      ro: "Un port semnificativ pentru industria pescuitului de pe Lacul Ciad, aprovizionând capitala.",
      en: "A significant port for the fishing industry on Lake Chad, supplying fish to the capital."
    },
    facts: {
      de: ["Zentrum der Fischverarbeitung", "Wichtig für die Ernährung"],
      hu: ["Halfeldolgozási központ", "Fontos az élelmiszerellátásban"],
      ro: ["Centru de procesare a peștelui", "Important pentru alimentație"],
      en: ["Center of fish processing", "Important for food security"]
    }
  },
  {
    id: "lere-fishing-center-economic-v2",
    type: "port",
    parent: "TD-MO",
    coords: [14.16, 9.61],
    name: {
      de: "Léré Fischerei-Zentrum",
      hu: "Léréi halászati központ",
      ro: "Centrul de pescuit Léré",
      en: "Léré Fishing Center"
    },
    description: {
      de: "Am Léré-See gelegen, ist dieser Ort ein wichtiger Punkt für den Fischfang und den Binnenhandel im Südwesten.",
      hu: "A Léré-tónál található központ a halászat és a délnyugati belföldi kereskedelem fontos pontja.",
      ro: "Situat pe lacul Léré, acest loc este un punct important pentru pescuit și comerțul intern.",
      en: "Located on Lake Léré, this site is a key point for fishing and domestic trade in the southwest."
    },
    facts: {
      de: ["Handel am Léré-See", "Lokaler Fischereihafen"],
      hu: ["Kereskedelem a Léré-tónál", "Helyi halászkikötő"],
      ro: ["Comerț pe lacul Léré", "Port local de pescuit"],
      en: ["Trade on Lake Léré", "Local fishing port"]
    }
  },
  {
    id: "massakory-livestock-economic-v2",
    type: "industry",
    parent: "TD-HL",
    coords: [15.73, 13.0],
    name: {
      de: "Massakory Viehlogistik",
      hu: "Massakoryi állatlogisztika",
      ro: "Logistica animalelor Massakory",
      en: "Massakory Livestock Logistics"
    },
    description: {
      de: "Ein wichtiger Handels- und Sammelpunkt für Viehexporte in die Nachbarländer, insbesondere Nigeria.",
      hu: "Fontos kereskedelmi és gyűjtőpont a szomszédos országokba, különösen Nigériába irányuló állatexporthoz.",
      ro: "Un punct important de colectare pentru exporturile de animale către țările vecine, în special Nigeria.",
      en: "An important trading and collection point for livestock exports to neighboring countries, especially Nigeria."
    },
    facts: {
      de: ["Zentrum des Viehhandels", "Strategische Logistiklage"],
      hu: ["Állatkereskedelem központja", "Stratégiai logisztikai helyszín"],
      ro: ["Centrul comerțului cu animale", "Locație logistică strategică"],
      en: ["Center of livestock trade", "Strategic logistics location"]
    }
  },
  {
    id: "ati-meat-processing-economic-v2",
    type: "industry",
    parent: "TD-BA",
    coords: [18.34, 13.21],
    name: {
      de: "Ati Fleischverarbeitung",
      hu: "Ati húsfeldolgozás",
      ro: "Procesarea cărnii Ati",
      en: "Ati Meat Processing"
    },
    description: {
      de: "In Ati konzentriert sich die Verarbeitung von Fleischprodukten aus der umliegenden Batha-Region.",
      hu: "Atiban összpontosul a környező Batha régióból származó hústermékek feldolgozása.",
      ro: "În Ati se concentrează procesarea produselor din carne din regiunea înconjurătoare Batha.",
      en: "The processing of meat products from the surrounding Batha region is concentrated in Ati."
    },
    facts: {
      de: ["Regionales Verarbeitungszentrum", "Bedeutend für die Batha-Region"],
      hu: ["Regionális feldolgozó központ", "Jelentős a Batha régió számára"],
      ro: ["Centru regional de procesare", "Important pentru regiunea Batha"],
      en: ["Regional processing center", "Significant for the Batha region"]
    }
  }
];
