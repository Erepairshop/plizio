import type { POI } from "./poi";

export const poiExtraGambiaEconomicV2: POI[] = [
  {
    id: "banjul-sea-port-economic-v2",
    type: "port",
    parent: "GM-B",
    coords: [-16.57, 13.45],
    name: {
      de: "Hafen von Banjul",
      hu: "Banjuli kikötő",
      ro: "Portul din Banjul",
      en: "Port of Banjul"
    },
    description: {
      de: "Der Haupthafen Gambias und das wirtschaftliche Herz des Landes, über den fast der gesamte Außenhandel abgewickelt wird.",
      hu: "Gambia fő kikötője és az ország gazdasági szíve, amelyen keresztül szinte a teljes külkereskedelem bonyolódik.",
      ro: "Principalul port al Gambiei și inima economică a țării, prin care se desfășoară aproape tot comerțul exterior.",
      en: "Gambia's main port and the economic heart of the country, through which almost all foreign trade is handled."
    },
    facts: {
      de: ["Strategischer Tiefwasserhafen am Atlantik.", "Wichtigster Umschlagplatz für Importwaren."],
      hu: ["Stratégiai mélyvízi kikötő az Atlanti-óceánon.", "Az importáruk legfontosabb rakodóhelye."],
      ro: ["Port strategic de apă adâncă la Atlantic.", "Cel mai important punct de transbordare pentru importuri."],
      en: ["Strategic deep-water port on the Atlantic.", "Most important transshipment point for imports."]
    }
  },
  {
    id: "banjul-fisheries-jetty-economic-v2",
    type: "port",
    parent: "GM-B",
    coords: [-16.575, 13.445],
    name: {
      de: "Fischereianlegestelle Banjul",
      hu: "Banjuli halászati móló",
      ro: "Mollul de pescuit din Banjul",
      en: "Banjul Fisheries Jetty"
    },
    description: {
      de: "Ein spezialisierter Hafenbereich in der Hauptstadt, der ausschließlich für die kommerzielle Fischereiflotte und die Fischverarbeitung dient.",
      hu: "A főváros speciális kikötői területe, amely kizárólag a kereskedelmi halászflotta és a halfeldolgozás céljait szolgálja.",
      ro: "O zonă portuară specializată din capitală, dedicată exclusiv flotei de pescuit comercial și procesării peștelui.",
      en: "A specialized port area in the capital, dedicated exclusively to the commercial fishing fleet and fish processing."
    },
    facts: {
      de: ["Zentrum der industriellen Fischerei.", "Anlegestelle für Kühlschiffe und Trawler."],
      hu: ["Az ipari halászat központja.", "Hűtőhajók és vonóhálós hajók kikötőhelye."],
      ro: ["Centrul pescuitului industrial.", "Punct de acostare pentru nave frigorifice și traulere."],
      en: ["Center of industrial fishing.", "Berth for reefer ships and trawlers."]
    }
  },
  {
    id: "sarro-groundnut-plant-economic-v2",
    type: "industry",
    parent: "GM-B",
    coords: [-16.63, 13.48],
    name: {
      de: "Erdnussverarbeitungswerk Sarro",
      hu: "Sarro földimogyoró-feldolgozó üzem",
      ro: "Fabrica de procesare a arahidelor Sarro",
      en: "Sarro Groundnut Processing Plant"
    },
    description: {
      de: "Die größte Anlage der Gambia Groundnut Corporation zur Verarbeitung und Lagerung von Erdnüssen für den Export.",
      hu: "A Gambia Groundnut Corporation legnagyobb üzeme a földimogyoró feldolgozására és exportra történő tárolására.",
      ro: "Cea mai mare unitate a Gambia Groundnut Corporation pentru procesarea și depozitarea arahidelor destinate exportului.",
      en: "The largest facility of the Gambia Groundnut Corporation for processing and storing groundnuts for export."
    },
    facts: {
      de: ["Zentraler Punkt für den Erdnussexport.", "Große Siloanlagen zur Lagerung."],
      hu: ["A földimogyoró-export központi pontja.", "Nagy silórendszerek a tároláshoz."],
      ro: ["Punct central pentru exportul de arahide.", "Instalații mari de silozuri pentru depozitare."],
      en: ["Central point for groundnut exports.", "Large silo facilities for storage."]
    }
  },
  {
    id: "banjul-breweries-economic-v2",
    type: "industry",
    parent: "GM-B",
    coords: [-16.67, 13.46],
    name: {
      de: "Banjul Breweries (JulBrew)",
      hu: "Banjuli Sörgyár (JulBrew)",
      ro: "Berăria din Banjul (JulBrew)",
      en: "Banjul Breweries (JulBrew)"
    },
    description: {
      de: "Die einzige Brauerei Gambias, die das berühmte nationale Bier JulBrew sowie verschiedene Erfrischungsgetränke produziert.",
      hu: "Gambia egyetlen sörgyára, amely a híres nemzeti sört, a JulBrew-t, valamint különféle üdítőitalokat gyárt.",
      ro: "Singura berărie din Gambia, care produce faimoasa bere națională JulBrew, precum și diverse băuturi răcoritoare.",
      en: "The only brewery in Gambia, producing the famous national beer JulBrew as well as various soft drinks."
    },
    facts: {
      de: ["Größter Getränkehersteller des Landes.", "Wichtiger privater Arbeitgeber."],
      hu: ["Az ország legnagyobb italgyártója.", "Fontos magánszektorbeli munkaadó."],
      ro: ["Cel mai mare producător de băuturi din țară.", "Important angajator privat."],
      en: ["Largest beverage producer in the country.", "Important private sector employer."]
    }
  },
  {
    id: "gambia-milling-corp-economic-v2",
    type: "industry",
    parent: "GM-B",
    coords: [-16.58, 13.45],
    name: {
      de: "Gambia Milling Corporation",
      hu: "Gambia Milling Corporation",
      ro: "Gambia Milling Corporation",
      en: "Gambia Milling Corporation"
    },
    description: {
      de: "Eine moderne Weizenmühle im Hafengebiet von Banjul, die einen Großteil des im Land benötigten Mehls produziert.",
      hu: "Egy modern búzamalom Banjul kikötői területén, amely az országban szükségelt liszt nagy részét előállítja.",
      ro: "O moară de grâu modernă în zona portului Banjul, care produce cea mai mare parte a făinii necesare în țară.",
      en: "A modern wheat mill in the Banjul port area, which produces most of the flour needed in the country."
    },
    facts: {
      de: ["Sichert die nationale Mehlversorgung.", "Direkter Zugang zum Getreideimport."],
      hu: ["Biztosítja a nemzeti lisztellátást.", "Közvetlen hozzáférés a gabonaimporthoz."],
      ro: ["Asigură aprovizionarea națională cu făină.", "Acces direct la importurile de cereale."],
      en: ["Ensures national flour supply.", "Direct access to grain imports."]
    }
  },
  {
    id: "brikama-power-station-economic-v2",
    type: "industry",
    parent: "GM-W",
    coords: [-16.65, 13.27],
    name: {
      de: "Kraftwerk Brikama",
      hu: "Brikamai erőmű",
      ro: "Centrala electrică din Brikama",
      en: "Brikama Power Station"
    },
    description: {
      de: "Das wichtigste thermische Kraftwerk des Landes, das einen bedeutenden Teil der Stromversorgung für den Großraum Banjul liefert.",
      hu: "Az ország legfontosabb hőerőműve, amely Banjul térségének áramellátásának jelentős részét biztosítja.",
      ro: "Cea mai importantă centrală termoelectrică din țară, care furnizează o parte semnificativă din energia electrică pentru zona metropolitană Banjul.",
      en: "The country's most important thermal power plant, providing a significant portion of the electricity supply for the Greater Banjul Area."
    },
    facts: {
      de: ["Rückgrat der nationalen Energieversorgung.", "Betrieben mit schweren Brennstoffen."],
      hu: ["A nemzeti energiaellátás gerince.", "Nehézfűtőolajjal működik."],
      ro: ["Coloana vertebrală a aprovizionării naționale cu energie.", "Funcționează cu combustibili grei."],
      en: ["Backbone of national energy supply.", "Operated with heavy fuels."]
    }
  },
  {
    id: "gunjur-fish-meal-factory-economic-v2",
    type: "industry",
    parent: "GM-W",
    coords: [-16.76, 13.18],
    name: {
      de: "Fischmehlfabrik Gunjur",
      hu: "Gunjuri hallisztgyár",
      ro: "Fabrica de făină de pește din Gunjur",
      en: "Gunjur Fish Meal Factory"
    },
    description: {
      de: "Eine industrielle Anlage an der Küste, die Fischabfälle und Kleinfische zu Fischmehl für den internationalen Export verarbeitet.",
      hu: "Ipari létesítmény a tengerparton, amely a halmaradékokat és kishalakat hallisztté dolgozza fel nemzetközi exportra.",
      ro: "O instalație industrială pe coastă care procesează deșeurile de pește și peștii mici în făină de pește pentru exportul internațional.",
      en: "An industrial facility on the coast that processes fish waste and small fish into fish meal for international export."
    },
    facts: {
      de: ["Exportorientierte Produktion.", "Wichtiger Akteur in der lokalen Wirtschaft."],
      hu: ["Exportorientált termelés.", "Fontos szereplő a helyi gazdaságban."],
      ro: ["Producție orientată spre export.", "Actor important în economia locală."],
      en: ["Export-oriented production.", "Important player in the local economy."]
    }
  },
  {
    id: "denton-bridge-fish-cluster-economic-v2",
    type: "industry",
    parent: "GM-B",
    coords: [-16.64, 13.48],
    name: {
      de: "Industriegebiet Denton Bridge",
      hu: "Denton Bridge ipari terület",
      ro: "Zona industrială Denton Bridge",
      en: "Denton Bridge Industrial Area"
    },
    description: {
      de: "Ein Cluster von Fischverarbeitungsbetrieben und Lagerhäusern in der Nähe der Brücke, die Banjul mit dem Festland verbindet.",
      hu: "Halfeldolgozó üzemek és raktárak csoportja a Banjult a szárazfölddel összekötő híd közelében.",
      ro: "Un cluster de unități de procesare a peștelui și depozite lângă podul care leagă Banjul de continent.",
      en: "A cluster of fish processing plants and warehouses near the bridge connecting Banjul to the mainland."
    },
    facts: {
      de: ["Zentrum für Garnelen- und Fischfiletexport.", "Logistisch günstige Lage am Wasser."],
      hu: ["A garnéla- és halfilé-export központja.", "Logisztikailag kedvező vízparti fekvés."],
      ro: ["Centru pentru exportul de creveți și file de pește.", "Locație logistică avantajoasă pe malul apei."],
      en: ["Center for shrimp and fish fillet exports.", "Logistically favorable waterfront location."]
    }
  },
  {
    id: "kaur-groundnut-depot-economic-v2",
    type: "port",
    parent: "GM-M",
    coords: [-15.33, 13.68],
    name: {
      de: "Erdnuss-Depot Kaur",
      hu: "Kauri földimogyoró-depó",
      ro: "Depozitul de arahide din Kaur",
      en: "Kaur Groundnut Depot"
    },
    description: {
      de: "Ein historisch bedeutender Flusshafen und Sammelstelle für Erdnüsse, die hier auf Lastkähne für den Transport nach Banjul verladen werden.",
      hu: "Történelmileg jelentős folyami kikötő és földimogyoró-gyűjtőhely, ahol az árut uszályokra rakják a Banjulba történő szállításhoz.",
      ro: "Un port fluvial și punct de colectare a arahidelor istoric important, unde acestea sunt încărcate pe barje pentru transportul către Banjul.",
      en: "A historically significant river port and collection point for groundnuts, which are loaded onto barges here for transport to Banjul."
    },
    facts: {
      de: ["Einst wichtigster Umschlagplatz im Landesinneren.", "Große Kapazitäten für die Zwischenlagerung."],
      hu: ["Egykor a legfontosabb belső rakodóhely.", "Nagy kapacitás az átmeneti tároláshoz."],
      ro: ["Cândva cel mai important punct de transbordare din interior.", "Capacități mari pentru depozitarea intermediară."],
      en: ["Once the most important inland transshipment point.", "Large capacities for intermediate storage."]
    }
  },
  {
    id: "kuntaur-groundnut-depot-economic-v2",
    type: "port",
    parent: "GM-M",
    coords: [-14.89, 13.67],
    name: {
      de: "Erdnuss-Depot Kuntaur",
      hu: "Kuntauri földimogyoró-depó",
      ro: "Depozitul de arahide din Kuntaur",
      en: "Kuntaur Groundnut Depot"
    },
    description: {
      de: "Ein wichtiger logistischer Knotenpunkt am Oberlauf des Flusses für den Abtransport der landwirtschaftlichen Erzeugnisse der Region.",
      hu: "Fontos logisztikai csomópont a folyó felső szakaszán a régió mezőgazdasági termékeinek elszállítására.",
      ro: "Un important nod logistic pe cursul superior al râului pentru transportul produselor agricole din regiune.",
      en: "An important logistical hub on the upper reaches of the river for the transport of the region's agricultural products."
    },
    facts: {
      de: ["Sammelstelle für die Central River Region.", "Anlegestelle für flussgehende Transportschiffe."],
      hu: ["A Central River régió gyűjtőhelye.", "Folyami szállítóhajók kikötőhelye."],
      ro: ["Punct de colectare pentru regiunea Central River.", "Punct de acostare pentru navele de transport fluvial."],
      en: ["Collection point for the Central River Region.", "Berth for river-going transport vessels."]
    }
  },
  {
    id: "barra-ferry-terminal-economic-v2",
    type: "port",
    parent: "GM-N",
    coords: [-16.54, 13.48],
    name: {
      de: "Fährterminal Barra",
      hu: "Barrai kompterminál",
      ro: "Terminalul de feribot din Barra",
      en: "Barra Ferry Terminal"
    },
    description: {
      de: "Die entscheidende Verbindungseinrichtung am Nordufer, die den Personen- und Güterverkehr zwischen Banjul und dem Senegal ermöglicht.",
      hu: "A döntő fontosságú összeköttetés az északi parton, amely lehetővé teszi a személy- és áruforgalmat Banjul és Szenegál között.",
      ro: "Instalația de legătură crucială de pe malul nordic, care permite traficul de pasageri și mărfuri între Banjul și Senegal.",
      en: "The crucial link on the North Bank, enabling passenger and freight traffic between Banjul and Senegal."
    },
    facts: {
      de: ["Tor zum Norden des Landes.", "Hohes Verkehrsaufkommen für Handel und Pendler."],
      hu: ["Kapu az ország északi részéhez.", "Nagy forgalom a kereskedelem és az ingázók számára."],
      ro: ["Poarta către nordul țării.", "Volum mare de trafic pentru comerț și navetiști."],
      en: ["Gateway to the north of the country.", "High traffic volume for trade and commuters."]
    }
  },
  {
    id: "bakau-fish-landing-economic-v2",
    type: "port",
    parent: "GM-B",
    coords: [-16.67, 13.48],
    name: {
      de: "Fischereianlegestelle Bakau",
      hu: "Bakaui halászati rakodóhely",
      ro: "Punctul de debarcare a peștelui din Bakau",
      en: "Bakau Fish Landing Site"
    },
    description: {
      de: "Ein wichtiger lokaler Hafen für die handwerkliche Fischerei, der die umliegenden Märkte mit frischem Fisch versorgt.",
      hu: "Fontos helyi kikötő a kézműves halászat számára, amely friss hallal látja el a környező piacokat.",
      ro: "Un important port local pentru pescuitul artizanal, care furnizează pește proaspăt piețelor din jur.",
      en: "An important local port for artisanal fishing, supplying surrounding markets with fresh fish."
    },
    facts: {
      de: ["Wichtig für die lokale Nahrungsmittelsicherheit.", "Zentrum für handwerklichen Bootsbau."],
      hu: ["Fontos a helyi élelmiszerbiztonság szempontjából.", "A kézműves hajóépítés központja."],
      ro: ["Important pentru securitatea alimentară locală.", "Centru pentru construcția artizanală de bărci."],
      en: ["Important for local food security.", "Center for artisanal boat building."]
    }
  },
  {
    id: "brufut-fish-landing-economic-v2",
    type: "port",
    parent: "GM-W",
    coords: [-16.76, 13.38],
    name: {
      de: "Fischereianlegestelle Brufut",
      hu: "Brufuti halászati rakodóhely",
      ro: "Punctul de debarcare a peștelui din Brufut",
      en: "Brufut Fish Landing Site"
    },
    description: {
      de: "Ein bedeutender Umschlagplatz für den Fang an der Küste, bekannt für die anschließende Verarbeitung und Trocknung von Fisch.",
      hu: "Jelentős rakodóhely a tengerparti fogások számára, amely a halak feldolgozásáról és szárításáról ismert.",
      ro: "Un punct important de transbordare pentru capturile de pe coastă, cunoscut pentru procesarea și uscarea ulterioară a peștelui.",
      en: "A significant transshipment point for coastal catches, known for the subsequent processing and drying of fish."
    },
    facts: {
      de: ["Große Anlagen zur Fischtrocknung.", "Bedeutende Flotte von Pirogen."],
      hu: ["Nagy halszárító létesítmények.", "Jelentős pirog-flotta."],
      ro: ["Instalații mari pentru uscarea peștelui.", "Flotă semnificativă de pirogi."],
      en: ["Large facilities for fish drying.", "Significant fleet of pirogues."]
    }
  },
  {
    id: "sanyang-fish-landing-economic-v2",
    type: "port",
    parent: "GM-W",
    coords: [-16.79, 13.26],
    name: {
      de: "Fischereianlegestelle Sanyang",
      hu: "Sanyangi halászati rakodóhely",
      ro: "Punctul de debarcare a peștelui din Sanyang",
      en: "Sanyang Fish Landing Site"
    },
    description: {
      de: "Ein geschäftiger Fischereiknotenpunkt an der Atlantikküste, der eine zentrale Rolle in der Wirtschaft der West Coast Region spielt.",
      hu: "Nyüzsgő halászati csomópont az Atlanti-óceán partján, amely központi szerepet játszik a Nyugati Part régió gazdaságában.",
      ro: "Un nod de pescuit aglomerat de pe coasta Atlanticului, care joacă un rol central în economia regiunii West Coast.",
      en: "A bustling fishing hub on the Atlantic coast, playing a central role in the economy of the West Coast Region."
    },
    facts: {
      de: ["Täglicher Markt für Großhändler.", "Export von Premium-Fischarten."],
      hu: ["Napi piac nagykereskedők számára.", "Prémium halfajok exportja."],
      ro: ["Piață zilnică pentru angrosiști.", "Export de specii de pește premium."],
      en: ["Daily market for wholesalers.", "Export of premium fish species."]
    }
  },
  {
    id: "kartong-sand-mining-economic-v2",
    type: "industry",
    parent: "GM-W",
    coords: [-16.76, 13.09],
    name: {
      de: "Sandabbaugebiet Kartong",
      hu: "Kartongi homokbánya",
      ro: "Zonă de extracție a nisipului din Kartong",
      en: "Kartong Sand Mining Site"
    },
    description: {
      de: "Ein bedeutender Standort für die Gewinnung von Bausand und Mineralien, der für die nationale Bauindustrie von großer Bedeutung ist.",
      hu: "Az építési homok és ásványi kincsek kitermelésének jelentős helyszíne, amely nagy fontossággal bír a nemzeti építőipar számára.",
      ro: "O locație importantă pentru extracția nisipului de construcție și a mineralelor, de mare importanță pentru industria națională a construcțiilor.",
      en: "A significant site for the extraction of construction sand and minerals, of great importance to the national construction industry."
    },
    facts: {
      de: ["Versorgungsquelle für Infrastrukturprojekte.", "Extraktion von Ilmenit."],
      hu: ["Infrastrukturális projektek forrása.", "Ilmenit kitermelése."],
      ro: ["Sursă de aprovizionare pentru proiecte de infrastructură.", "Extracția de ilmenit."],
      en: ["Source of supply for infrastructure projects.", "Extraction of ilmenite."]
    }
  },
  {
    id: "batokunku-wind-power-economic-v2",
    type: "industry",
    parent: "GM-W",
    coords: [-16.78, 13.33],
    name: {
      de: "Windkraftanlage Batokunku",
      hu: "Batokunku szélerőmű",
      ro: "Turbina eoliană din Batokunku",
      en: "Batokunku Wind Power Plant"
    },
    description: {
      de: "Ein wegweisendes Projekt für erneuerbare Energien in Gambia, das das Dorf Batokunku mit nachhaltigem Strom versorgt.",
      hu: "Egy úttörő megújuló energia projekt Gambiában, amely fenntartható árammal látja el Batokunku falut.",
      ro: "Un proiect pionier de energie regenerabilă în Gambia, care furnizează energie electrică durabilă satului Batokunku.",
      en: "A pioneering renewable energy project in Gambia, providing sustainable electricity to the village of Batokunku."
    },
    facts: {
      de: ["Erste kommunale Windkraftanlage Gambias.", "Modellprojekt für dezentrale Energie."],
      hu: ["Gambia első közösségi szélerőműve.", "Modellprojekt a decentralizált energiához."],
      ro: ["Prima turbină eoliană comunitară din Gambia.", "Proiect model pentru energie descentralizată."],
      en: ["Gambia's first community wind turbine.", "Model project for decentralized energy."]
    }
  },
  {
    id: "fatoto-river-wharf-economic-v2",
    type: "port",
    parent: "GM-U",
    coords: [-13.88, 13.41],
    name: {
      de: "Flusshafen Fatoto",
      hu: "Fatotoi folyami kikötő",
      ro: "Debarcaderul fluvial din Fatoto",
      en: "Fatoto River Wharf"
    },
    description: {
      de: "Der östlichste Flusshafen des Landes, ein wichtiger Endpunkt für den Warentransport per Schiff in das ferne Hinterland.",
      hu: "Az ország legkeletibb folyami kikötője, a hajón történő áruszállítás fontos végpontja a távoli szárazföldi területek felé.",
      ro: "Cel mai estic port fluvial al țării, un punct terminus important pentru transportul de mărfuri cu nave către interiorul îndepărtat.",
      en: "The country's easternmost river port, an important terminus for the transport of goods by ship to the far hinterland."
    },
    facts: {
      de: ["Letzte größere Anlegestelle im Osten.", "Zentrum für den Handel mit dem Grenzgebiet."],
      hu: ["Az utolsó nagyobb kikötőhely keleten.", "A határ menti kereskedelem központja."],
      ro: ["Ultimul debarcader major din est.", "Centru pentru comerțul cu zona de frontieră."],
      en: ["Last major berth in the east.", "Center for trade with the border area."]
    }
  },
  {
    id: "bansang-river-wharf-economic-v2",
    type: "port",
    parent: "GM-M",
    coords: [-14.65, 13.44],
    name: {
      de: "Anlegestelle Bansang",
      hu: "Bansangi kikötőhely",
      ro: "Debarcaderul din Bansang",
      en: "Bansang River Wharf"
    },
    description: {
      de: "Ein wichtiger regionaler Hafen am Südufer des Gambia-Flusses, der für den Transport von Agrarprodukten und Gütern des täglichen Bedarfs genutzt wird.",
      hu: "Fontos regionális kikötő a Gambia-folyó déli partján, amelyet mezőgazdasági termékek és napi szükségleti cikkek szállítására használnak.",
      ro: "Un important port regional pe malul sudic al râului Gambia, utilizat pentru transportul produselor agricole și al bunurilor de uz zilnic.",
      en: "An important regional port on the south bank of the Gambia River, used for the transport of agricultural products and daily necessities."
    },
    facts: {
      de: ["Bedeutender Umschlagplatz für Getreide.", "Wichtige Verbindung zur South Bank Road."],
      hu: ["Jelentős gabonarakodó hely.", "Fontos összeköttetés a South Bank Roadhoz."],
      ro: ["Punct important de transbordare pentru cereale.", "Legătură importantă cu South Bank Road."],
      en: ["Significant transshipment point for grain.", "Important link to the South Bank Road."]
    }
  },
  {
    id: "kerewan-fish-landing-economic-v2",
    type: "port",
    parent: "GM-N",
    coords: [-16.09, 13.49],
    name: {
      de: "Fischereianlegestelle Kerewan",
      hu: "Kerewani halászati rakodóhely",
      ro: "Punctul de debarcare a peștelui din Kerewan",
      en: "Kerewan Fish Landing Site"
    },
    description: {
      de: "Ein strategischer Punkt für die Fischerei am North Bank, gelegen an einem tiefen Seitenarm des Gambia-Flusses.",
      hu: "Stratégiai halászati pont az északi parton, a Gambia-folyó egyik mély mellékága mentén.",
      ro: "Un punct strategic pentru pescuit pe North Bank, situat pe un braț adânc al râului Gambia.",
      en: "A strategic point for fishing on the North Bank, located on a deep side-arm of the Gambia River."
    },
    facts: {
      de: ["Zentrum für die Fischversorgung der Region.", "Umgeben von produktiven Mangrovengebieten."],
      hu: ["A régió halellátásának központja.", "Termékeny mangrove területek veszik körül."],
      ro: ["Centru pentru aprovizionarea cu pește a regiunii.", "Înconjurat de zone productive de mangrove."],
      en: ["Center for fish supply in the region.", "Surrounded by productive mangrove areas."]
    }
  },
  {
    id: "brikama-ice-plant-economic-v2",
    type: "industry",
    parent: "GM-W",
    coords: [-16.64, 13.28],
    name: {
      de: "Eisfabrik Brikama",
      hu: "Brikamai jéggyár",
      ro: "Fabrica de gheață din Brikama",
      en: "Brikama Ice Plant"
    },
    description: {
      de: "Eine industrielle Kühlanlage, die für die Konservierung und den Transport von Fisch aus der Küstenregion von entscheidender Bedeutung ist.",
      hu: "Ipari hűtőberendezés, amely döntő fontosságú a tengerparti régióból származó halak tartósítása és szállítása szempontjából.",
      ro: "O instalație frigorifică industrială, de o importanță crucială pentru conservarea și transportul peștelui din regiunea de coastă.",
      en: "An industrial refrigeration plant, crucial for the preservation and transport of fish from the coastal region."
    },
    facts: {
      de: ["Sichert die Kühlkette für Fischexporte.", "Versorgung lokaler Händler mit Stangeneis."],
      hu: ["Biztosítja a hűtési láncot a halexporthoz.", "Helyi kereskedők ellátása tömbjéggel."],
      ro: ["Asigură lanțul frigorific pentru exportul de pește.", "Aprovizionarea comercianților locali cu gheață bloc."],
      en: ["Ensures the cold chain for fish exports.", "Supplying local traders with block ice."]
    }
  }
];
