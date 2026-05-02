import type { POI } from "./poi";

export const poiExtraGabonEconomicV2: POI[] = [
  {
    id: "gamba-oil-terminal-economic-v2",
    type: "port",
    parent: "GA-8",
    coords: [12.70, -2.65],
    name: {
      de: "Gamba Ölterminal",
      hu: "Gamba olajterminál",
      ro: "Terminalul petrolier Gamba",
      en: "Gamba Oil Terminal"
    },
    description: {
      de: "Ein wichtiger Knotenpunkt für den Export von Rohöl im Süden Gabuns.",
      hu: "Fontos nyersolaj-exportőr csomópont Gabon déli részén.",
      ro: "Un nod important pentru exportul de țiței în sudul Gabonului.",
      en: "A major hub for crude oil exports located in southern Gabon."
    },
    facts: {
      de: ["Verladestelle für Onshore-Ölfelder.", "Strategisch wichtig für die Wirtschaft."],
      hu: ["Szárazföldi olajmezők rakodóhelye.", "Stratégiai fontosságú a gazdaság számára."],
      ro: ["Punct de încărcare pentru câmpurile petroliere onshore.", "Strategic important pentru economie."],
      en: ["Loading point for onshore oil fields.", "Strategically important for the economy."]
    }
  },
  {
    id: "nkok-sez-economic-v2",
    type: "industry",
    parent: "GA-1",
    coords: [9.78, 0.40],
    name: {
      de: "Sonderwirtschaftszone Nkok",
      hu: "Nkok különleges gazdasági övezet",
      ro: "Zona Economică Specială Nkok",
      en: "Nkok Special Economic Zone"
    },
    description: {
      de: "Ein bedeutendes Industriegebiet nahe Libreville, spezialisiert auf Holzverarbeitung.",
      hu: "Libreville közelében fekvő jelentős ipari terület, amely fafeldolgozásra szakosodott.",
      ro: "O zonă industrială majoră lângă Libreville, specializată în prelucrarea lemnului.",
      en: "A major industrial area near Libreville, specialized in timber processing."
    },
    facts: {
      de: ["Zentrum für die Möbelproduktion.", "Fördert die lokale Wertschöpfung."],
      hu: ["Bútorgyártási központ.", "Elősegíti a helyi értéknövelést."],
      ro: ["Centru pentru producția de mobilier.", "Promovează valoarea adăugată locală."],
      en: ["Hub for furniture production.", "Promotes local value addition."]
    }
  },
  {
    id: "rabi-kounga-oilfield-economic-v2",
    type: "industry",
    parent: "GA-8",
    coords: [9.88, -1.91],
    name: {
      de: "Rabi-Kounga Ölfeld",
      hu: "Rabi-Kounga olajmező",
      ro: "Câmpul petrolier Rabi-Kounga",
      en: "Rabi-Kounga Oil Field"
    },
    description: {
      de: "Eines der größten Onshore-Ölfelder in Gabun, gelegen im dichten Regenwald.",
      hu: "Gabon egyik legnagyobb szárazföldi olajmezője a sűrű esőerdőben.",
      ro: "Unul dintre cele mai mari câmpuri petroliere onshore din Gabon, situat în pădurea tropicală.",
      en: "One of the largest onshore oil fields in Gabon, located in the dense rainforest."
    },
    facts: {
      de: ["Entdeckt in den 1980er Jahren.", "Rückgrat der nationalen Ölförderung."],
      hu: ["Az 1980-as években fedezték fel.", "A nemzeti olajtermelés gerince."],
      ro: ["Descoperit în anii 1980.", "Coloana vertebrală a producției naționale de petrol."],
      en: ["Discovered in the 1980s.", "Backbone of national oil production."]
    }
  },
  {
    id: "cap-lopez-terminal-economic-v2",
    type: "port",
    parent: "GA-8",
    coords: [8.70, -0.63],
    name: {
      de: "Cap Lopez Ölterminal",
      hu: "Cap Lopez olajterminál",
      ro: "Terminalul petrolier Cap Lopez",
      en: "Cap Lopez Oil Terminal"
    },
    description: {
      de: "Ein wichtiges Exportterminal für Erdöl an der Spitze der Halbinsel Mandji.",
      hu: "Fontos kőolaj-exportterminál a Mandji-félsziget csúcsán.",
      ro: "Un terminal important de export de petrol în vârful peninsulei Mandji.",
      en: "A key oil export terminal at the tip of the Mandji Peninsula."
    },
    facts: {
      de: ["Lagertanks für Rohöl.", "Anlegestelle für große Öltanker."],
      hu: ["Nyersolaj tárolótartályok.", "Nagy olajszállító hajók kikötőhelye."],
      ro: ["Rezervoare de stocare pentru țiței.", "Punct de acostare pentru petroliere mari."],
      en: ["Storage tanks for crude oil.", "Berthing point for large oil tankers."]
    }
  },
  {
    id: "sogara-refinery-economic-v2",
    type: "industry",
    parent: "GA-8",
    coords: [8.75, -0.68],
    name: {
      de: "SOGARA Erdölraffinerie",
      hu: "SOGARA olajfinomító",
      ro: "Rafinăria SOGARA",
      en: "SOGARA Oil Refinery"
    },
    description: {
      de: "Die einzige Erdölraffinerie Gabuns, die den lokalen Markt mit Treibstoffen versorgt.",
      hu: "Gabon egyetlen olajfinomítója, amely üzemanyaggal látja el a helyi piacot.",
      ro: "Singura rafinărie de petrol din Gabon, care furnizează combustibil pieței locale.",
      en: "Gabon's only oil refinery, supplying the local market with fuels."
    },
    facts: {
      de: ["Sitz in Port-Gentil.", "Produziert Benzin und Kerosin."],
      hu: ["Székhelye Port-Gentil.", "Benzint és kerozint állít elő."],
      ro: ["Cu sediul în Port-Gentil.", "Produce benzină și kerosen."],
      en: ["Located in Port-Gentil.", "Produces gasoline and kerosene."]
    }
  },
  {
    id: "belinga-mine-economic-v2",
    type: "industry",
    parent: "GA-6",
    coords: [13.2, 1.1],
    name: {
      de: "Belinga Eisenerzprojekt",
      hu: "Belinga vasércprojekt",
      ro: "Proiectul de minereu de fier Belinga",
      en: "Belinga Iron Ore Project"
    },
    description: {
      de: "Eines der weltweit größten unerschlossenen Eisenerzvorkommen im Nordosten Gabuns.",
      hu: "A világ egyik legnagyobb feltáratlan vasérckészlete Gabon északkeleti részén.",
      ro: "Unul dintre cele mai mari zăcăminte de fier neexploatate din lume, în nord-estul Gabonului.",
      en: "One of the world's largest untapped iron ore deposits in northeastern Gabon."
    },
    facts: {
      de: ["Enormes wirtschaftliches Potenzial.", "Erfordert neue Eisenbahnverbindungen."],
      hu: ["Hatalmas gazdasági potenciál.", "Új vasúti összeköttetést igényel."],
      ro: ["Potențial economic enorm.", "Necesită noi conexiuni feroviare."],
      en: ["Enormous economic potential.", "Requires new railway connections."]
    }
  },
  {
    id: "mabounie-mine-economic-v2",
    type: "industry",
    parent: "GA-3",
    coords: [10.4, -0.8],
    name: {
      de: "Mabounié Niob-Projekt",
      hu: "Mabounié niobiom-projekt",
      ro: "Proiectul de niobiu Mabounié",
      en: "Mabounié Niobium Project"
    },
    description: {
      de: "Ein Bergbauprojekt zur Gewinnung von Niob und Seltenen Erden nahe Lambaréné.",
      hu: "Bányászati projekt niobiom és ritkaföldfémek kitermelésére Lambaréné közelében.",
      ro: "Un proiect minier pentru extracția niobiului și a pământurilor rare lângă Lambaréné.",
      en: "A mining project for the extraction of niobium and rare earths near Lambaréné."
    },
    facts: {
      de: ["Strategische Metalle.", "Vorkommen von Phosphaten und Titan."],
      hu: ["Stratégiai fémek.", "Foszfát- és titánkészletek."],
      ro: ["Metale strategice.", "Zăcăminte de fosfați și titan."],
      en: ["Strategic metals.", "Deposits of phosphates and titanium."]
    }
  },
  {
    id: "tchimbele-power-station-economic-v2",
    type: "industry",
    parent: "GA-1",
    coords: [10.4, 0.6],
    name: {
      de: "Wasserkraftwerk Tchimbele",
      hu: "Tchimbele vízerőmű",
      ro: "Centrala hidroelectrică Tchimbele",
      en: "Tchimbele Hydroelectric Power Station"
    },
    description: {
      de: "Ein wichtiges Wasserkraftwerk in den Kristallbergen, das Libreville mit Strom versorgt.",
      hu: "Fontos vízerőmű a Kristály-hegységben, amely Libreville-t látja el árammal.",
      ro: "O centrală hidroelectrică importantă în Munții de Cristal, care alimentează Libreville.",
      en: "An important hydroelectric power station in the Crystal Mountains, supplying electricity to Libreville."
    },
    facts: {
      de: ["Nutzt die Kraft des Mbe-Flusses.", "Teil der Energieinfrastruktur."],
      hu: ["Az Mbe folyó erejét hasznosítja.", "Az energetikai infrastruktúra része."],
      ro: ["Utilizează forța râului Mbe.", "Parte a infrastructurii energetice."],
      en: ["Uses the power of the Mbe River.", "Part of the energy infrastructure."]
    }
  },
  {
    id: "kinguele-power-station-economic-v2",
    type: "industry",
    parent: "GA-1",
    coords: [10.3, 0.5],
    name: {
      de: "Wasserkraftwerk Kinguélé",
      hu: "Kinguélé vízerőmű",
      ro: "Centrala hidroelectrică Kinguélé",
      en: "Kinguélé Hydroelectric Power Station"
    },
    description: {
      de: "Ein weiteres bedeutendes Kraftwerk im System der Kristallberge zur Energieerzeugung.",
      hu: "A Kristály-hegység rendszerének egy másik jelentős erőműve az energiatermeléshez.",
      ro: "O altă centrală importantă din sistemul Munților de Cristal pentru producția de energie.",
      en: "Another significant power station in the Crystal Mountains system for energy production."
    },
    facts: {
      de: ["Strom für die Hauptstadtregion.", "Nachhaltige Energiegewinnung."],
      hu: ["Áram a fővárosi régiónak.", "Fenntartható energiatermelés."],
      ro: ["Energie pentru regiunea capitalei.", "Producție de energie durabilă."],
      en: ["Power for the capital region.", "Sustainable energy production."]
    }
  },
  {
    id: "mayumba-port-economic-v2",
    type: "port",
    parent: "GA-5",
    coords: [10.65, -3.42],
    name: {
      de: "Hafen von Mayumba",
      hu: "Mayumba kikötője",
      ro: "Portul Mayumba",
      en: "Port of Mayumba"
    },
    description: {
      de: "Ein strategischer Hafen im Süden, der für den Export von Holz und Mineralien ausgebaut wird.",
      hu: "Stratégiai kikötő délen, amelyet fa és ásványi anyagok exportjára fejlesztenek.",
      ro: "Un port strategic în sud, dezvoltat pentru exportul de lemn și minerale.",
      en: "A strategic port in the south, being developed for timber and mineral exports."
    },
    facts: {
      de: ["Tor zum südlichen Gabun.", "Tiefwasserhafen-Potenzial."],
      hu: ["Dél-Gabon kapuja.", "Mélyvízi kikötő potenciál."],
      ro: ["Poarta către sudul Gabonului.", "Potențial de port de apă adâncă."],
      en: ["Gateway to southern Gabon.", "Deep-water port potential."]
    }
  },
  {
    id: "port-mole-libreville-economic-v2",
    type: "port",
    parent: "GA-1",
    coords: [9.44, 0.39],
    name: {
      de: "Port Mole Libreville",
      hu: "Libreville-i Port Mole",
      ro: "Port Mole Libreville",
      en: "Port Mole Libreville"
    },
    description: {
      de: "Der historische Handels- und Passagierhafen im Herzen der Hauptstadt Libreville.",
      hu: "Történelmi kereskedelmi és utaskikötő Libreville szívében.",
      ro: "Portul istoric comercial și de pasageri din inima capitalei Libreville.",
      en: "The historic commercial and passenger port in the heart of the capital Libreville."
    },
    facts: {
      de: ["Zentrum für Küstenschifffahrt.", "Verbindung nach Port-Gentil."],
      hu: ["Part menti hajózás központja.", "Összeköttetés Port-Gentillel."],
      ro: ["Centru pentru navigația de coastă.", "Legătură cu Port-Gentil."],
      en: ["Hub for coastal shipping.", "Connection to Port-Gentil."]
    }
  },
  {
    id: "mounana-uranium-economic-v2",
    type: "industry",
    parent: "GA-2",
    coords: [13.16, -1.41],
    name: {
      de: "Uranmine von Mounana",
      hu: "Mounanai uránbánya",
      ro: "Mina de uraniu din Mounana",
      en: "Mounana Uranium Mining Complex"
    },
    description: {
      de: "Ein historischer Bergbaukomplex, der einst einer der weltweit wichtigsten Uranlieferanten war.",
      hu: "Történelmi bányakomplexum, amely egykor a világ egyik legfontosabb uránszállítója volt.",
      ro: "Un complex minier istoric, care a fost odată unul dintre cei mai importanți furnizori de uraniu din lume.",
      en: "A historic mining complex that was once one of the world's most important uranium suppliers."
    },
    facts: {
      de: ["Förderung bis 1999.", "Prägte die Region Haut-Ogooué."],
      hu: ["Kitermelés 1999-ig.", "Meghatározta Haut-Ogooué régiót."],
      ro: ["Extracție până în 1999.", "A modelat regiunea Haut-Ogooué."],
      en: ["Extraction until 1999.", "Shaped the Haut-Ogooué region."]
    }
  },
  {
    id: "biniomi-manganese-economic-v2",
    type: "industry",
    parent: "GA-2",
    coords: [13.5, -1.6],
    name: {
      de: "Manganmine von Biniomi",
      hu: "Biniomi mangánbánya",
      ro: "Mina de mangan din Biniomi",
      en: "Biniomi Manganese Mine"
    },
    description: {
      de: "Eine neue Abbaustätte für Mangan zur Erweiterung der Kapazitäten in der Region Moanda.",
      hu: "Új mangánbánya a kapacitások bővítésére Moanda régióban.",
      ro: "Un nou sit de extracție a manganului pentru extinderea capacităților în regiunea Moanda.",
      en: "A new manganese extraction site expanding capacities in the Moanda region."
    },
    facts: {
      de: ["Hochwertiges Erz.", "Wichtiger Exportartikel Gabuns."],
      hu: ["Kiváló minőségű érc.", "Gabon fontos exportterméke."],
      ro: ["Minereu de înaltă calitate.", "Articol important de export al Gabonului."],
      en: ["High-grade ore.", "Important export item for Gabon."]
    }
  },
  {
    id: "okondja-manganese-economic-v2",
    type: "industry",
    parent: "GA-2",
    coords: [13.6, -0.6],
    name: {
      de: "Manganmine von Okondja",
      hu: "Okondjai mangánbánya",
      ro: "Mina de mangan din Okondja",
      en: "Okondja Manganese Mine"
    },
    description: {
      de: "Ein bedeutendes Mangan-Bergbauprojekt im Osten Gabuns zur Diversifizierung der Standorte.",
      hu: "Jelentős mangánbányászati projekt Kelet-Gabonban a helyszínek diverzifikálására.",
      ro: "Un proiect major de extracție a manganului în estul Gabonului pentru diversificarea siturilor.",
      en: "A significant manganese mining project in eastern Gabon to diversify extraction sites."
    },
    facts: {
      de: ["Große Reserven.", "Stärkt den Bergbausektor."],
      hu: ["Hatalmas tartalékok.", "Erősíti a bányászati szektort."],
      ro: ["Rezerve mari.", "Consolidează sectorul minier."],
      en: ["Large reserves.", "Strengthens the mining sector."]
    }
  },
  {
    id: "port-gentil-commercial-port-economic-v2",
    type: "port",
    parent: "GA-8",
    coords: [8.78, -0.71],
    name: {
      de: "Handelshafen von Port-Gentil",
      hu: "Port-Gentil kereskedelmi kikötője",
      ro: "Portul comercial Port-Gentil",
      en: "Port-Gentil Commercial Port"
    },
    description: {
      de: "Der zentrale Handelshafen der wirtschaftlichen Hauptstadt, wichtig für den Import von Gütern.",
      hu: "A gazdasági főváros központi kereskedelmi kikötője, fontos az áruimport számára.",
      ro: "Portul comercial central al capitalei economice, important pentru importul de bunuri.",
      en: "The central commercial port of the economic capital, vital for importing goods."
    },
    facts: {
      de: ["Logistikdrehscheibe.", "Versorgt die Ölindustrie."],
      hu: ["Logisztikai csomópont.", "Az olajipart szolgálja ki."],
      ro: ["Hub logistic.", "Deservește industria petrolieră."],
      en: ["Logistics hub.", "Serves the oil industry."]
    }
  },
  {
    id: "owendo-timber-port-economic-v2",
    type: "port",
    parent: "GA-1",
    coords: [9.49, 0.30],
    name: {
      de: "Holzverladehafen Owendo",
      hu: "Owendói fakikötő",
      ro: "Portul de cherestea Owendo",
      en: "Owendo Timber Port"
    },
    description: {
      de: "Spezialisierte Hafenanlagen in Owendo für den weltweiten Export von gabunischen Hölzern.",
      hu: "Speciális kikötői létesítmények Owendóban a gaboni fa világméretű exportjához.",
      ro: "Facilități portuare specializate în Owendo pentru exportul global de lemn gabonez.",
      en: "Specialized port facilities in Owendo for the global export of Gabonese timber."
    },
    facts: {
      de: ["Lagerplatz für Okoumé-Stämme.", "Moderne Verladetechnik."],
      hu: ["Okoumé rönkök tárolóhelye.", "Modern rakodási technológia."],
      ro: ["Loc de depozitare pentru bușteni de Okoumé.", "Tehnologie modernă de încărcare."],
      en: ["Storage area for Okoumé logs.", "Modern loading technology."]
    }
  },
  {
    id: "lucina-oil-terminal-economic-v2",
    type: "port",
    parent: "GA-8",
    coords: [8.6, -0.9],
    name: {
      de: "Lucina Ölterminal",
      hu: "Lucina olajterminál",
      ro: "Terminalul petrolier Lucina",
      en: "Lucina Oil Terminal"
    },
    description: {
      de: "Ein Offshore-Terminal für die Verladung von Rohöl aus den küstennahen Ölfeldern.",
      hu: "Offshore terminál a part menti olajmezőkről származó nyersolaj berakodására.",
      ro: "Un terminal offshore pentru încărcarea țițeiului din câmpurile petroliere de coastă.",
      en: "An offshore terminal for loading crude oil from coastal oil fields."
    },
    facts: {
      de: ["Offshore-Verladestation.", "Ansteuerung für Tanker."],
      hu: ["Tengeri rakodóállomás.", "Tartályhajók úti célja."],
      ro: ["Stație de încărcare offshore.", "Punct de acces pentru tancuri petroliere."],
      en: ["Offshore loading station.", "Access point for oil tankers."]
    }
  },
  {
    id: "oguendjo-oil-terminal-economic-v2",
    type: "port",
    parent: "GA-8",
    coords: [9.0, -1.4],
    name: {
      de: "Oguendjo Ölterminal",
      hu: "Oguendjo olajterminál",
      ro: "Terminalul petrolier Oguendjo",
      en: "Oguendjo Oil Terminal"
    },
    description: {
      de: "Ein weiteres wichtiges Verladeterminal für die Ölindustrie im Golf von Guinea.",
      hu: "Egy másik fontos berakodási terminál az olajipar számára a Guineai-öbölben.",
      ro: "Un alt terminal important de încărcare pentru industria petrolieră din Golful Guineei.",
      en: "Another important loading terminal for the oil industry in the Gulf of Guinea."
    },
    facts: {
      de: ["Maritime Infrastruktur.", "Unterstützt den Erdölexport."],
      hu: ["Tengeri infrastruktúra.", "Támogatja a kőolajexportot."],
      ro: ["Infrastructură maritimă.", "Susține exportul de petrol."],
      en: ["Maritime infrastructure.", "Supports petroleum exports."]
    }
  },
  {
    id: "lastoursville-timber-hub-economic-v2",
    type: "industry",
    parent: "GA-7",
    coords: [12.7, -0.8],
    name: {
      de: "Holzverarbeitungszentrum Lastoursville",
      hu: "Lastoursville-i fafeldolgozó központ",
      ro: "Centrul de prelucrare a lemnului Lastoursville",
      en: "Lastoursville Timber Processing Hub"
    },
    description: {
      de: "Ein bedeutendes Zentrum im Landesinneren für die erste Verarbeitung von Baumstämmen.",
      hu: "Jelentős belföldi központ a rönkök elsődleges feldolgozására.",
      ro: "Un centru interior important pentru prima prelucrare a buștenilor.",
      en: "A major inland center for the primary processing of logs."
    },
    facts: {
      de: ["Anschluss an die Eisenbahn.", "Sägewerke und Furnierproduktion."],
      hu: ["Vasúti kapcsolat.", "Fűrészüzemek és furnérgyártás."],
      ro: ["Conexiune la calea ferată.", "Găstere și producție de furnir."],
      en: ["Connected to the railway.", "Sawmills and veneer production."]
    }
  },
  {
    id: "franceville-metallurgical-complex-economic-v2",
    type: "industry",
    parent: "GA-2",
    coords: [13.5, -1.6],
    name: {
      de: "Metallurgischer Komplex Franceville",
      hu: "Franceville-i kohászati komplexum",
      ro: "Complexul metalurgic Franceville",
      en: "Franceville Metallurgical Complex"
    },
    description: {
      de: "Industrieanlagen zur Weiterverarbeitung von Manganerz zu Ferromangan.",
      hu: "Ipari létesítmények mangánérc ferromangánná történő feldolgozására.",
      ro: "Instalații industriale pentru prelucrarea minereului de mangan în feromangan.",
      en: "Industrial facilities for processing manganese ore into ferromanganese."
    },
    facts: {
      de: ["Veredelung von Rohstoffen.", "Wichtig für die Stahlindustrie."],
      hu: ["Nyersanyagok nemesítése.", "Fontos az acélipar számára."],
      ro: ["Rafinarea materiilor prime.", "Important pentru industria oțelului."],
      en: ["Refinement of raw materials.", "Important for the steel industry."]
    }
  }
];
