import type { POI } from "./poi";

export const poiExtraPeruEconomicV2: POI[] = [
  {
    id: "port-callao-economic-v2",
    type: "port",
    parent: "PE-CAL",
    coords: [-77.14, -12.05],
    name: { de: "Hafen von Callao", hu: "Callao kikötője", ro: "Portul Callao", en: "Port of Callao" },
    description: {
      de: "Der wichtigste und größte Hafen Perus, der den Großteil des internationalen Handels des Landes abwickelt.",
      hu: "Peru legfontosabb és legnagyobb kikötője, amely az ország nemzetközi kereskedelmének nagy részét bonyolítja.",
      ro: "Cel mai important și cel mai mare port din Peru, care se ocupă de majoritatea comerțului internațional al țării.",
      en: "The most important and largest port in Peru, handling the majority of the country's international trade."
    },
    facts: {
      de: ["Größter Hafen in Peru.", "Wickelt einen Großteil der Fracht ab."],
      hu: ["Peru legnagyobb kikötője.", "A teherforgalom nagy részét kezeli."],
      ro: ["Cel mai mare port din Peru.", "Gestionează o mare parte a mărfurilor."],
      en: ["Largest port in Peru.", "Handles a majority of cargo."]
    }
  },
  {
    id: "port-matarani-economic-v2",
    type: "port",
    parent: "PE-ARE",
    coords: [-72.1, -16.99],
    name: { de: "Hafen von Matarani", hu: "Matarani kikötője", ro: "Portul Matarani", en: "Port of Matarani" },
    description: {
      de: "Ein bedeutender Seehafen im Süden Perus, der hauptsächlich für den Export von Mineralien aus den nahegelegenen Minen genutzt wird.",
      hu: "Jelentős tengeri kikötő Dél-Peruban, amelyet főként a közeli bányák ásványkincseinek exportjára használnak.",
      ro: "Un port maritim major în sudul Peru, utilizat în principal pentru exportul de minerale din minele din apropiere.",
      en: "A major seaport in southern Peru, primarily used for exporting minerals from nearby mines."
    },
    facts: {
      de: ["Wichtiger Hafen im Süden.", "Exportiert Mineralien."],
      hu: ["Fontos déli kikötő.", "Ásványkincseket exportál."],
      ro: ["Port important în sud.", "Exportă minerale."],
      en: ["Important southern port.", "Exports minerals."]
    }
  },
  {
    id: "port-salaverry-economic-v2",
    type: "port",
    parent: "PE-LAL",
    coords: [-78.98, -8.22],
    name: { de: "Hafen von Salaverry", hu: "Salaverry kikötője", ro: "Portul Salaverry", en: "Port of Salaverry" },
    description: {
      de: "Ein strategisch wichtiger Hafen für die Region La Libertad, der landwirtschaftliche Produkte und Mineralien exportiert.",
      hu: "Stratégiailag fontos kikötő a La Libertad régió számára, amely mezőgazdasági termékeket és ásványkincseket exportál.",
      ro: "Un port important strategic pentru regiunea La Libertad, exportând produse agricole și minerale.",
      en: "A strategically important port for the La Libertad region, exporting agricultural products and minerals."
    },
    facts: {
      de: ["Wichtig für La Libertad.", "Exportiert Agrarprodukte."],
      hu: ["Fontos La Libertad számára.", "Mezőgazdasági cikkeket exportál."],
      ro: ["Important pentru La Libertad.", "Exportă produse agricole."],
      en: ["Important for La Libertad.", "Exports agricultural goods."]
    }
  },
  {
    id: "port-marcona-economic-v2",
    type: "port",
    parent: "PE-ICA",
    coords: [-75.16, -15.35],
    name: { de: "Hafen von San Juan de Marcona", hu: "San Juan de Marcona kikötője", ro: "Portul San Juan de Marcona", en: "Port of San Juan de Marcona" },
    description: {
      de: "Dieser Hafen in der Region Ica wird hauptsächlich für den Export von Eisenerz aus den nahegelegenen Minen genutzt.",
      hu: "Ezt az Ica régióban található kikötőt főként a közeli bányákból származó vasérc exportjára használják.",
      ro: "Acest port din regiunea Ica este folosit în principal pentru exportul minereului de fier din minele din apropiere.",
      en: "This port in the Ica region is primarily used for exporting iron ore from nearby mines."
    },
    facts: {
      de: ["Liegt in der Region Ica.", "Exportiert Eisenerz."],
      hu: ["Ica régióban található.", "Vasércet exportál."],
      ro: ["Situat în regiunea Ica.", "Exportă minereu de fier."],
      en: ["Located in the Ica region.", "Exports iron ore."]
    }
  },
  {
    id: "port-bayovar-economic-v2",
    type: "port",
    parent: "PE-PIU",
    coords: [-81.03, -5.79],
    name: { de: "Terminal Portuario de Bayóvar", hu: "Bayóvar kikötői terminál", ro: "Terminalul Portuar Bayóvar", en: "Bayóvar Port Terminal" },
    description: {
      de: "Ein spezialisiertes Hafenterminal in der Region Piura, das hauptsächlich für den Export von Phosphat genutzt wird.",
      hu: "Egy speciális kikötői terminál a Piura régióban, amelyet főként foszfát exportálására használnak.",
      ro: "Un terminal portuar specializat în regiunea Piura, utilizat în principal pentru exportul de fosfați.",
      en: "A specialized port terminal in the Piura region, mainly used for the export of phosphate."
    },
    facts: {
      de: ["Spezialisiert auf Phosphat.", "Mit der Bayóvar-Mine verbunden."],
      hu: ["Foszfátra specializálódott.", "A Bayóvar-bányához kapcsolódik."],
      ro: ["Specializat pe fosfați.", "Conectat la mina Bayóvar."],
      en: ["Specialized in phosphate.", "Connected to the Bayóvar mine."]
    }
  },
  {
    id: "port-chancay-economic-v2",
    type: "port",
    parent: "PE-LMA",
    coords: [-77.27, -11.58],
    name: { de: "Megapuerto de Chancay", hu: "Chancay megakikötő", ro: "Megaportul Chancay", en: "Chancay Megaport" },
    description: {
      de: "Ein großes Tiefwasserhafenprojekt, das den Handel zwischen Südamerika und Asien erheblich steigern soll.",
      hu: "Egy nagy mélyvízi kikötői projekt, amelynek célja a Dél-Amerika és Ázsia közötti kereskedelem jelentős növelése.",
      ro: "Un proiect major de port de mare adâncime, menit să crească semnificativ comerțul dintre America de Sud și Asia.",
      en: "A major deep-water port project aimed at significantly increasing trade between South America and Asia."
    },
    facts: {
      de: ["Großes Hafenprojekt.", "Zielt auf den Asien-Handel ab."],
      hu: ["Nagy kikötőprojekt.", "Az ázsiai kereskedelmet célozza."],
      ro: ["Proiect portuar major.", "Vizează comerțul cu Asia."],
      en: ["Major port project.", "Aims at Asian trade."]
    }
  },
  {
    id: "port-iquitos-economic-v2",
    type: "port",
    parent: "PE-LOR",
    coords: [-73.25, -3.74],
    name: { de: "Hafen von Iquitos", hu: "Iquitos kikötője", ro: "Portul Iquitos", en: "Port of Iquitos" },
    description: {
      de: "Ein entscheidender Flusshafen am Amazonas, der von hochseetauglichen Schiffen vom Atlantik aus erreicht werden kann.",
      hu: "Döntő fontosságú folyami kikötő az Amazonason, amely tengerjáró hajókkal is elérhető az Atlanti-óceán felől.",
      ro: "Un port fluvial crucial pe Amazon, accesibil de către navele maritime din Oceanul Atlantic.",
      en: "A crucial river port on the Amazon, accessible by ocean-going vessels from the Atlantic."
    },
    facts: {
      de: ["Wichtiger Flusshafen.", "Erreichbar vom Atlantik."],
      hu: ["Fontos folyami kikötő.", "Az Atlanti-óceán felől elérhető."],
      ro: ["Port fluvial important.", "Accesibil din Atlantic."],
      en: ["Important river port.", "Accessible from the Atlantic."]
    }
  },
  {
    id: "port-pucallpa-economic-v2",
    type: "port",
    parent: "PE-UCA",
    coords: [-74.53, -8.38],
    name: { de: "Hafen von Pucallpa", hu: "Pucallpa kikötője", ro: "Portul Pucallpa", en: "Port of Pucallpa" },
    description: {
      de: "Ein wichtiger Flusshafen am Río Ucayali, der für den Transport und Handel in der Amazonasregion unerlässlich ist.",
      hu: "Fontos folyami kikötő az Ucayali folyón, amely elengedhetetlen az amazonasi régió közlekedéséhez és kereskedelméhez.",
      ro: "Un port fluvial important pe râul Ucayali, esențial pentru transportul și comerțul din regiunea Amazonului.",
      en: "An important river port on the Ucayali River, vital for transport and trade in the Amazon region."
    },
    facts: {
      de: ["Hafen am Río Ucayali.", "Wichtig für die Amazonasregion."],
      hu: ["Kikötő az Ucayali folyón.", "Fontos az amazonasi régiónak."],
      ro: ["Port pe râul Ucayali.", "Important pentru regiunea amazoniană."],
      en: ["Port on the Ucayali River.", "Important for the Amazon region."]
    }
  },
  {
    id: "port-yurimaguas-economic-v2",
    type: "port",
    parent: "PE-LOR",
    coords: [-76.11, -5.9],
    name: { de: "Hafen von Yurimaguas", hu: "Yurimaguas kikötője", ro: "Portul Yurimaguas", en: "Port of Yurimaguas" },
    description: {
      de: "Ein wichtiger Flusshafen am Río Huallaga, der als Knotenpunkt zwischen dem Amazonasgebiet und den Anden dient.",
      hu: "Fontos folyami kikötő a Huallaga folyón, amely csomópontként szolgál az Amazonas és az Andok között.",
      ro: "Un port fluvial cheie pe râul Huallaga, servind ca un hub între Amazon și Anzi.",
      en: "A key river port on the Huallaga River, serving as a hub connecting the Amazon with the Andes."
    },
    facts: {
      de: ["Hafen am Río Huallaga.", "Verbindet Amazonas und Anden."],
      hu: ["Kikötő a Huallaga folyón.", "Összeköti az Amazonast és az Andokat."],
      ro: ["Port pe râul Huallaga.", "Conectează Amazonul cu Anzii."],
      en: ["Port on the Huallaga River.", "Connects the Amazon and the Andes."]
    }
  },
  {
    id: "ind-antamina-economic-v2",
    type: "industry",
    parent: "PE-ANC",
    coords: [-77.05, -9.53],
    name: { de: "Antamina-Mine", hu: "Antamina bánya", ro: "Mina Antamina", en: "Antamina Mine" },
    description: {
      de: "Eine der größten Kupfer- und Zinkminen der Welt, die hoch in den Anden liegt.",
      hu: "A világ egyik legnagyobb réz- és cinkbányája, amely magasan az Andok hegységben található.",
      ro: "Una dintre cele mai mari mine de cupru și zinc din lume, situată la mare altitudine în munții Anzi.",
      en: "One of the largest copper and zinc mines in the world, located high in the Andes mountains."
    },
    facts: {
      de: ["Große Kupfer- und Zinkmine.", "Liegt hoch in den Anden."],
      hu: ["Nagy réz- és cinkbánya.", "Magasan az Andokban fekszik."],
      ro: ["Mină mare de cupru și zinc.", "Situată sus în Anzi."],
      en: ["Large copper and zinc mine.", "Located high in the Andes."]
    }
  },
  {
    id: "ind-cerroverde-economic-v2",
    type: "industry",
    parent: "PE-ARE",
    coords: [-71.59, -16.53],
    name: { de: "Cerro Verde-Mine", hu: "Cerro Verde bánya", ro: "Mina Cerro Verde", en: "Cerro Verde Mine" },
    description: {
      de: "Eine riesige Kupfermine im Tagebau, die sich in der Nähe der Stadt Arequipa befindet.",
      hu: "Hatalmas külszíni rézbánya, amely Arequipa városának közelében található.",
      ro: "O mină masivă de cupru în carieră deschisă, situată lângă orașul Arequipa.",
      en: "A massive open-pit copper mine located near the city of Arequipa."
    },
    facts: {
      de: ["Riesige Kupfermine.", "In der Nähe von Arequipa."],
      hu: ["Hatalmas rézbánya.", "Arequipa közelében található."],
      ro: ["Mină uriașă de cupru.", "În apropiere de Arequipa."],
      en: ["Massive copper mine.", "Near Arequipa."]
    }
  },
  {
    id: "ind-lasbambas-economic-v2",
    type: "industry",
    parent: "PE-APU",
    coords: [-72.33, -14.1],
    name: { de: "Las Bambas-Mine", hu: "Las Bambas bánya", ro: "Mina Las Bambas", en: "Las Bambas Mine" },
    description: {
      de: "Ein bedeutendes Kupferbergbauprojekt in der Region Apurímac, das zu den größten des Landes zählt.",
      hu: "Jelentős rézbányászati projekt az Apurímac régióban, amely az ország egyik legnagyobbja.",
      ro: "Un proiect major de exploatare a cuprului în regiunea Apurímac, printre cele mai mari din țară.",
      en: "A major copper mining project in the Apurímac region, ranking among the country's largest."
    },
    facts: {
      de: ["Bedeutendes Kupferprojekt.", "In der Region Apurímac."],
      hu: ["Jelentős rézprojekt.", "Apurímac régióban."],
      ro: ["Proiect important de cupru.", "În regiunea Apurímac."],
      en: ["Major copper project.", "In the Apurímac region."]
    }
  },
  {
    id: "ind-cuajone-economic-v2",
    type: "industry",
    parent: "PE-MOQ",
    coords: [-70.73, -17.04],
    name: { de: "Cuajone-Mine", hu: "Cuajone bánya", ro: "Mina Cuajone", en: "Cuajone Mine" },
    description: {
      de: "Eine bedeutende Kupfermine im Süden Perus, die Teil eines großen Bergbaukomplexes ist.",
      hu: "Jelentős rézbánya Dél-Peruban, amely egy nagy bányászati komplexum része.",
      ro: "O mină de cupru semnificativă în sudul Peru, parte a unui mare complex minier.",
      en: "A significant copper mine in southern Peru, part of a large mining complex."
    },
    facts: {
      de: ["Bedeutende Kupfermine.", "Teil eines großen Komplexes."],
      hu: ["Jelentős rézbánya.", "Egy nagy komplexum része."],
      ro: ["Mină importantă de cupru.", "Parte a unui complex mare."],
      en: ["Significant copper mine.", "Part of a large complex."]
    }
  },
  {
    id: "ind-toquepala-economic-v2",
    type: "industry",
    parent: "PE-TAC",
    coords: [-70.61, -17.25],
    name: { de: "Toquepala-Mine", hu: "Toquepala bánya", ro: "Mina Toquepala", en: "Toquepala Mine" },
    description: {
      de: "Bekannt für ihren großen Kupferabbau im Tagebau und verfügt über eine eigene Eisenbahnlinie zur Küste.",
      hu: "Nagy külszíni rézkitermeléséről ismert, és saját vasútvonallal rendelkezik a part felé.",
      ro: "Cunoscută pentru marea sa extracție de cupru în carieră deschisă, cu o cale ferată dedicată spre coastă.",
      en: "Known for its large open-pit copper extraction and has a dedicated railway to the coast."
    },
    facts: {
      de: ["Großer Kupferabbau.", "Hat eine eigene Eisenbahn."],
      hu: ["Nagy rézkitermelés.", "Saját vasúttal rendelkezik."],
      ro: ["Extracție mare de cupru.", "Are o cale ferată proprie."],
      en: ["Large copper extraction.", "Has a dedicated railway."]
    }
  },
  {
    id: "ind-yanacocha-economic-v2",
    type: "industry",
    parent: "PE-CAJ",
    coords: [-78.5, -6.97],
    name: { de: "Yanacocha-Mine", hu: "Yanacocha bánya", ro: "Mina Yanacocha", en: "Yanacocha Mine" },
    description: {
      de: "War einst die größte Goldmine in Südamerika und befindet sich in der Region Cajamarca.",
      hu: "Egykor Dél-Amerika legnagyobb aranybányája volt, amely a Cajamarca régióban található.",
      ro: "A fost odată cea mai mare mină de aur din America de Sud, situată în regiunea Cajamarca.",
      en: "Was once the largest gold mine in South America, located in the Cajamarca region."
    },
    facts: {
      de: ["Ehemalige größte Goldmine.", "In der Region Cajamarca."],
      hu: ["Egykori legnagyobb aranybánya.", "Cajamarca régióban."],
      ro: ["Fosta cea mai mare mină de aur.", "În regiunea Cajamarca."],
      en: ["Former largest gold mine.", "In the Cajamarca region."]
    }
  },
  {
    id: "ind-toromocho-economic-v2",
    type: "industry",
    parent: "PE-JUN",
    coords: [-76.17, -11.61],
    name: { de: "Toromocho-Mine", hu: "Toromocho bánya", ro: "Mina Toromocho", en: "Toromocho Mine" },
    description: {
      de: "Eine große Kupfer- und Molybdänmine im Tagebau, die auf großer Höhe in der Region Junín liegt.",
      hu: "Nagy külszíni réz- és molibdénbánya, amely nagy magasságban található a Junín régióban.",
      ro: "O mare mină de cupru și molibden în carieră deschisă, situată la o altitudine mare în Junín.",
      en: "A large open-pit copper and molybdenum mine situated at a high altitude in Junín."
    },
    facts: {
      de: ["Kupfer- und Molybdänmine.", "Liegt auf großer Höhe."],
      hu: ["Réz- és molibdénbánya.", "Nagy magasságban található."],
      ro: ["Mină de cupru și molibden.", "Situată la mare altitudine."],
      en: ["Copper and molybdenum mine.", "Located at high altitude."]
    }
  },
  {
    id: "ind-quellaveco-economic-v2",
    type: "industry",
    parent: "PE-MOQ",
    coords: [-70.61, -17.11],
    name: { de: "Quellaveco-Mine", hu: "Quellaveco bánya", ro: "Mina Quellaveco", en: "Quellaveco Mine" },
    description: {
      de: "Ein wichtiges und modernes Kupferbergbauprojekt in der Region Moquegua, das hochgradig automatisiert ist.",
      hu: "Fontos és modern rézbányászati projekt a Moquegua régióban, amely nagymértékben automatizált.",
      ro: "Un proiect minier modern și important de cupru în regiunea Moquegua, puternic automatizat.",
      en: "A major modern copper mining project in the Moquegua region, highly automated."
    },
    facts: {
      de: ["Modernes Kupferprojekt.", "Stark automatisiert."],
      hu: ["Modern rézprojekt.", "Nagymértékben automatizált."],
      ro: ["Proiect modern de cupru.", "Puternic automatizat."],
      en: ["Modern copper project.", "Highly automated."]
    }
  },
  {
    id: "ind-constancia-economic-v2",
    type: "industry",
    parent: "PE-CUS",
    coords: [-71.78, -14.44],
    name: { de: "Constancia-Mine", hu: "Constancia bánya", ro: "Mina Constancia", en: "Constancia Mine" },
    description: {
      de: "Eine Kupfer- und Molybdänmine im Tagebau in der Provinz Chumbivilcas in Cusco.",
      hu: "Külszíni réz- és molibdénbánya Cusco Chumbivilcas tartományában.",
      ro: "O mină de cupru și molibden în carieră deschisă în provincia Chumbivilcas din Cusco.",
      en: "An open-pit copper and molybdenum mine located in the Chumbivilcas province of Cusco."
    },
    facts: {
      de: ["Kupfer- und Molybdänmine.", "In der Region Cusco."],
      hu: ["Réz- és molibdénbánya.", "Cusco régióban."],
      ro: ["Mină de cupru și molibden.", "În regiunea Cusco."],
      en: ["Copper and molybdenum mine.", "In the Cusco region."]
    }
  },
  {
    id: "ind-lagunasnorte-economic-v2",
    type: "industry",
    parent: "PE-LAL",
    coords: [-78.23, -7.94],
    name: { de: "Lagunas Norte-Mine", hu: "Lagunas Norte bánya", ro: "Mina Lagunas Norte", en: "Lagunas Norte Mine" },
    description: {
      de: "Eine wichtige Goldmine in den Anden, die sich in der Region La Libertad befindet.",
      hu: "Fontos aranybánya az Andokban, amely a La Libertad régióban található.",
      ro: "O mină de aur importantă în Anzi, situată în regiunea La Libertad.",
      en: "An important gold mine in the Andes, located in the La Libertad region."
    },
    facts: {
      de: ["Wichtige Goldmine.", "In der Region La Libertad."],
      hu: ["Fontos aranybánya.", "La Libertad régióban."],
      ro: ["Mină de aur importantă.", "În regiunea La Libertad."],
      en: ["Important gold mine.", "In the La Libertad region."]
    }
  },
  {
    id: "ind-laarena-economic-v2",
    type: "industry",
    parent: "PE-LAL",
    coords: [-77.85, -7.83],
    name: { de: "La Arena-Mine", hu: "La Arena bánya", ro: "Mina La Arena", en: "La Arena Mine" },
    description: {
      de: "Ein Gold- und Kupferbergbaubetrieb, der zu den regionalen Mineralexporten beiträgt.",
      hu: "Arany- és rézbányászati művelet, amely hozzájárul a regionális ásványkincs-exportokhoz.",
      ro: "O operațiune minieră de aur și cupru, care contribuie la exporturile regionale de minerale.",
      en: "A gold and copper mining operation that contributes to regional mineral exports."
    },
    facts: {
      de: ["Gold- und Kupferbergbau.", "Wichtig für den Export."],
      hu: ["Arany- és rézbányászat.", "Fontos az export számára."],
      ro: ["Extracție de aur și cupru.", "Important pentru export."],
      en: ["Gold and copper mining.", "Important for exports."]
    }
  },
  {
    id: "ind-marcona-economic-v2",
    type: "industry",
    parent: "PE-ICA",
    coords: [-75.1, -15.2],
    name: { de: "Marcona-Mine", hu: "Marcona bánya", ro: "Mina Marcona", en: "Marcona Mine" },
    description: {
      de: "Die einzige große Eisenerzmine in Peru, die sich nahe der Küste in der Region Ica befindet.",
      hu: "Az egyetlen nagy vasércbánya Peruban, amely a tengerpart közelében, az Ica régióban található.",
      ro: "Singura mare mină de minereu de fier din Peru, situată lângă coastă, în regiunea Ica.",
      en: "The only major iron ore mine in Peru, located near the coast in the Ica region."
    },
    facts: {
      de: ["Einzige große Eisenerzmine.", "Nahe der Küste."],
      hu: ["Egyetlen nagy vasércbánya.", "A part közelében."],
      ro: ["Singura mare mină de fier.", "Aproape de coastă."],
      en: ["Only major iron ore mine.", "Near the coast."]
    }
  },
  {
    id: "ind-bayovarmine-economic-v2",
    type: "industry",
    parent: "PE-PIU",
    coords: [-80.82, -6.08],
    name: { de: "Phosphatmine von Bayóvar", hu: "Bayóvar foszfátbánya", ro: "Mina de fosfați Bayóvar", en: "Bayóvar Phosphate Mine" },
    description: {
      de: "Eine der größten Phosphatlagerstätten in Südamerika, die für die Düngemittelproduktion von entscheidender Bedeutung ist.",
      hu: "Dél-Amerika egyik legnagyobb foszfátlelőhelye, amely elengedhetetlen a műtrágyagyártáshoz.",
      ro: "Unul dintre cele mai mari zăcăminte de fosfați din America de Sud, crucial pentru producția de îngrășăminte.",
      en: "One of the largest phosphate deposits in South America, crucial for fertilizer production."
    },
    facts: {
      de: ["Große Phosphatlagerstätte.", "Wichtig für Düngemittel."],
      hu: ["Nagy foszfátlelőhely.", "Fontos a műtrágyához."],
      ro: ["Zăcământ mare de fosfați.", "Important pentru îngrășăminte."],
      en: ["Large phosphate deposit.", "Important for fertilizers."]
    }
  },
  {
    id: "ind-camisea-economic-v2",
    type: "industry",
    parent: "PE-CUS",
    coords: [-73.0, -11.75],
    name: { de: "Camisea-Gasprojekt", hu: "Camisea gázprojekt", ro: "Proiectul de gaze Camisea", en: "Camisea Gas Project" },
    description: {
      de: "Ein bedeutendes Erdgasförderprojekt im Amazonas-Regenwald der Region Cusco.",
      hu: "Jelentős földgázkitermelési projekt a Cusco régió amazóniai esőerdejében.",
      ro: "Un proiect major de extracție a gazelor naturale în pădurea amazoniană din regiunea Cusco.",
      en: "A major natural gas extraction project located in the Amazon rainforest of the Cusco region."
    },
    facts: {
      de: ["Erdgasförderprojekt.", "Im Amazonas-Regenwald."],
      hu: ["Földgázkitermelés.", "Az amazóniai esőerdőben."],
      ro: ["Proiect de gaze naturale.", "În pădurea amazoniană."],
      en: ["Natural gas extraction.", "In the Amazon rainforest."]
    }
  },
  {
    id: "ind-talara-economic-v2",
    type: "industry",
    parent: "PE-PIU",
    coords: [-81.27, -4.57],
    name: { de: "Raffinerie von Talara", hu: "Talara finomító", ro: "Rafinăria Talara", en: "Talara Refinery" },
    description: {
      de: "Eine der wichtigsten Ölraffinerien in Peru, die kürzlich umfassend modernisiert wurde.",
      hu: "Peru egyik legfontosabb olajfinomítója, amelyet nemrégiben jelentősen korszerűsítettek.",
      ro: "Una dintre principalele rafinării de petrol din Peru, care a suferit recent o modernizare masivă.",
      en: "One of the main oil refineries in Peru, which recently underwent a massive modernization."
    },
    facts: {
      de: ["Wichtige Ölraffinerie.", "Kürzlich modernisiert."],
      hu: ["Fontos olajfinomító.", "Nemrég korszerűsítették."],
      ro: ["Rafinărie importantă de petrol.", "Recent modernizată."],
      en: ["Main oil refinery.", "Recently modernized."]
    }
  },
  {
    id: "ind-lapampilla-economic-v2",
    type: "industry",
    parent: "PE-CAL",
    coords: [-77.13, -11.92],
    name: { de: "Raffinerie La Pampilla", hu: "La Pampilla finomító", ro: "Rafinăria La Pampilla", en: "La Pampilla Refinery" },
    description: {
      de: "Die größte Ölraffinerie in Peru, die sich in der Küstenregion von Callao befindet.",
      hu: "A legnagyobb olajfinomító Peruban, amely a tengerparti Callao régióban található.",
      ro: "Cea mai mare rafinărie de petrol din Peru, situată în regiunea de coastă Callao.",
      en: "The largest oil refinery in Peru, located in the coastal region of Callao."
    },
    facts: {
      de: ["Größte Ölraffinerie.", "Befindet sich in Callao."],
      hu: ["Legnagyobb olajfinomító.", "Callaóban található."],
      ro: ["Cea mai mare rafinărie de petrol.", "Situată în Callao."],
      en: ["Largest oil refinery.", "Located in Callao."]
    }
  },
  {
    id: "ind-siderperu-economic-v2",
    type: "industry",
    parent: "PE-ANC",
    coords: [-78.59, -9.06],
    name: { de: "Stahlwerk Siderperu", hu: "Siderperu acélmű", ro: "Oțelăria Siderperu", en: "Siderperu Steelworks" },
    description: {
      de: "Das erste Stahlwerk, das in Peru gegründet wurde, gelegen in der Küstenstadt Chimbote.",
      hu: "Az első acélgyár, amelyet Peruban alapítottak, a tengerparti Chimbote városában található.",
      ro: "Prima fabrică de oțel înfiinințată în Peru, situată în orașul de coastă Chimbote.",
      en: "The first steel plant established in Peru, located in the coastal city of Chimbote."
    },
    facts: {
      de: ["Erstes Stahlwerk Perus.", "Gelegen in Chimbote."],
      hu: ["Peru első acélműve.", "Chimbote városában."],
      ro: ["Prima oțelărie din Peru.", "Situată în Chimbote."],
      en: ["First steel plant in Peru.", "Located in Chimbote."]
    }
  },
  {
    id: "ind-ilosmelter-economic-v2",
    type: "industry",
    parent: "PE-MOQ",
    coords: [-71.36, -17.5],
    name: { de: "Kupferhütte von Ilo", hu: "Ilo rézkohó", ro: "Topitoria de cupru Ilo", en: "Ilo Copper Smelter" },
    description: {
      de: "Verarbeitet Kupfererze aus nahegelegenen Minen und umfasst eine Raffinerie sowie eine Schwefelsäureanlage.",
      hu: "Feldolgozza a közeli bányákból származó rézércet, és tartalmaz egy finomítót, valamint egy kénsavgyárat.",
      ro: "Procesează minereul de cupru din minele din apropiere și include o rafinărie și o fabrică de acid sulfuric.",
      en: "Processes copper ore from nearby mines and includes a refinery and a sulfuric acid plant."
    },
    facts: {
      de: ["Verarbeitet Kupfererze.", "Hat eine Schwefelsäureanlage."],
      hu: ["Rézércet dolgoz fel.", "Kénsavgyárat is tartalmaz."],
      ro: ["Procesează minereu de cupru.", "Are o fabrică de acid sulfuric."],
      en: ["Processes copper ore.", "Includes a sulfuric acid plant."]
    }
  },
  {
    id: "ind-cajamarquilla-economic-v2",
    type: "industry",
    parent: "PE-LMA",
    coords: [-76.89, -11.98],
    name: { de: "Zinkraffinerie Cajamarquilla", hu: "Cajamarquilla cinkfinomító", ro: "Rafinăria de zinc Cajamarquilla", en: "Cajamarquilla Zinc Refinery" },
    description: {
      de: "Eine der größten Zinkraffinerien der Welt, die sich in der Nähe der Hauptstadt Lima befindet.",
      hu: "A világ egyik legnagyobb cinkfinomítója, amely a főváros, Lima közelében található.",
      ro: "Una dintre cele mai mari rafinării de zinc din lume, situată lângă capitala Lima.",
      en: "One of the largest zinc refineries in the world, located near the capital city of Lima."
    },
    facts: {
      de: ["Große Zinkraffinerie.", "Nahe Lima."],
      hu: ["Nagy cinkfinomító.", "Lima közelében."],
      ro: ["Rafinărie mare de zinc.", "Lângă Lima."],
      en: ["Large zinc refinery.", "Near Lima."]
    }
  },
  {
    id: "ind-orcopampa-economic-v2",
    type: "industry",
    parent: "PE-ARE",
    coords: [-72.32, -15.26],
    name: { de: "Orcopampa-Mine", hu: "Orcopampa bánya", ro: "Mina Orcopampa", en: "Orcopampa Mine" },
    description: {
      de: "Eine unterirdische Gold- und Silbermine, die in großer Höhe in der Region Arequipa liegt.",
      hu: "Föld alatti arany- és ezüstbánya, amely nagy magasságban, az Arequipa régióban található.",
      ro: "O mină subterană de aur și argint, situată la mare altitudine în regiunea Arequipa.",
      en: "An underground gold and silver mine located at high elevation in the Arequipa region."
    },
    facts: {
      de: ["Unterirdische Mine.", "Fördert Gold und Silber."],
      hu: ["Föld alatti bánya.", "Aranyat és ezüstöt termel ki."],
      ro: ["Mină subterană.", "Extrage aur și argint."],
      en: ["Underground mine.", "Produces gold and silver."]
    }
  },
  {
    id: "ind-tintaya-economic-v2",
    type: "industry",
    parent: "PE-CUS",
    coords: [-71.29, -14.9],
    name: { de: "Tintaya-Mine", hu: "Tintaya bánya", ro: "Mina Tintaya", en: "Tintaya Mine" },
    description: {
      de: "Eine historisch bedeutende Kupfermine in der südlichen Andenregion von Cusco.",
      hu: "Történelmileg jelentős rézbánya a dél-andoki Cusco régióban.",
      ro: "O mină de cupru cu importanță istorică în regiunea andină sudică Cusco.",
      en: "A historically significant copper mine located in the southern Andean region of Cusco."
    },
    facts: {
      de: ["Historische Kupfermine.", "In der Region Cusco."],
      hu: ["Történelmi rézbánya.", "Cusco régióban."],
      ro: ["Mină istorică de cupru.", "În regiunea Cusco."],
      en: ["Historical copper mine.", "In the Cusco region."]
    }
  }
];
