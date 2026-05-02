import type { POI } from "./poi";

export const poiExtraGuineaEconomicV2: POI[] = [
  {
    id: "hafen-kamsar-economic-v2",
    type: "port",
    parent: "GN-B",
    coords: [-14.6112, 10.6543],
    name: {
      de: "Hafen von Kamsar",
      hu: "Kamsar kikötője",
      ro: "Portul Kamsar",
      en: "Port of Kamsar"
    },
    description: {
      de: "Der Hafen von Kamsar ist einer der wichtigsten Exporthäfen Guineas und dient primär der Verschiffung von Bauxit aus den Sangarédi-Minen.",
      hu: "Kamsar kikötője Guinea egyik legfontosabb exportkikötője, amely elsősorban a Sangarédi bányákból származó bauxit szállítását szolgálja.",
      ro: "Portul Kamsar este unul dintre cele mai importante porturi de export din Guineea, servind în principal pentru expedierea bauxitei din minele Sangarédi.",
      en: "The Port of Kamsar is one of Guinea's most important export ports, primarily used for shipping bauxite from the Sangarédi mines."
    },
    facts: {
      de: ["Wichtigster Bauxit-Exporthafen", "Endstation der Sangarédi-Bahn", "Am Rio Nuñez gelegen"],
      hu: ["Legfontosabb bauxit-exportkikötő", "A Sangarédi-vasút végállomása", "A Rio Nuñez partján található"],
      ro: ["Cel mai important port de export de bauxită", "Stația terminus a căii ferate Sangarédi", "Situat pe râul Rio Nuñez"],
      en: ["Major bauxite export port", "Terminus of the Sangarédi railway", "Located on the Rio Nuñez river"]
    }
  },
  {
    id: "hafen-dapilon-economic-v2",
    type: "port",
    parent: "GN-B",
    coords: [-14.5321, 10.7456],
    name: {
      de: "Hafen von Dapilon",
      hu: "Dapilon kikötője",
      ro: "Portul Dapilon",
      en: "Port of Dapilon"
    },
    description: {
      de: "Ein moderner Flusshafen in der Region Boké, der speziell für den großflächigen Export von Bauxit durch das SMB-Winning Consortium entwickelt wurde.",
      hu: "Modern folyami kikötő Boké régióban, amelyet kifejezetten az SMB-Winning konzorcium bauxitexportjára fejlesztettek ki.",
      ro: "Un port fluvial modern în regiunea Boké, dezvoltat special pentru exportul la scară largă de bauxită de către consorțiul SMB-Winning.",
      en: "A modern river port in the Boké region, specifically developed for the large-scale export of bauxite by the SMB-Winning Consortium."
    },
    facts: {
      de: ["Teil des Boké-Bergbaukorridors", "Moderner Bauxit-Terminal", "Wichtiger Wirtschaftsfaktor"],
      hu: ["A bokéi bányászati folyosó része", "Modern bauxit terminál", "Fontos gazdasági tényező"],
      ro: ["Parte a coridorului minier Boké", "Terminal modern de bauxită", "Factor economic important"],
      en: ["Part of the Boké mining corridor", "Modern bauxite terminal", "Key economic driver"]
    }
  },
  {
    id: "hafen-katougouma-economic-v2",
    type: "port",
    parent: "GN-B",
    coords: [-14.4567, 10.8712],
    name: {
      de: "Hafen von Katougouma",
      hu: "Katougouma kikötője",
      ro: "Portul Katougouma",
      en: "Port of Katougouma"
    },
    description: {
      de: "Ein strategischer Binnenhafen am Rio Nuñez, der eine Schlüsselrolle beim Transport von Bauxit aus den nahegelegenen Abbaugebieten zum Weltmarkt spielt.",
      hu: "Stratégiai jelentőségű belvízi kikötő a Rio Nuñez folyón, amely kulcsszerepet játszik a közeli bányák bauxitjának világpiacra juttatásában.",
      ro: "Un port interior strategic pe râul Rio Nuñez, care joacă un rol cheie în transportul bauxitei din zonele miniere din apropiere către piața mondială.",
      en: "A strategic inland port on the Rio Nuñez river, playing a key role in transporting bauxite from nearby mining areas to the global market."
    },
    facts: {
      de: ["Inland-Verladestation", "Logistikzentrum für Bauxit", "Wichtiger Arbeitgeber der Region"],
      hu: ["Belföldi rakodóállomás", "Bauxit logisztikai központ", "A régió fontos munkáltatója"],
      ro: ["Stație de încărcare interioară", "Centru logistic pentru bauxită", "Angajator important în regiune"],
      en: ["Inland loading station", "Bauxite logistics hub", "Important regional employer"]
    }
  },
  {
    id: "bauxitmine-sangaredi-economic-v2",
    type: "industry",
    parent: "GN-B",
    coords: [-13.9212, 11.1034],
    name: {
      de: "Bauxitmine Sangarédi",
      hu: "Sangarédi bauxitbánya",
      ro: "Mina de bauxită Sangarédi",
      en: "Sangarédi Bauxite Mine"
    },
    description: {
      de: "Eine der weltweit reichsten Bauxitminen, die von der Compagnie des Bauxites de Guinée betrieben wird und für ihre hohe Erzqualität bekannt ist.",
      hu: "A világ egyik leggazdagabb bauxitbányája, amelyet a Compagnie des Bauxites de Guinée üzemeltet, és kiváló minőségű ércéről híres.",
      ro: "Una dintre cele mai bogate mine de bauxită din lume, operată de Compagnie des Bauxites de Guinée și cunoscută pentru calitatea ridicată a minereului.",
      en: "One of the world's richest bauxite mines, operated by the Compagnie des Bauxites de Guinée and known for its high ore quality."
    },
    facts: {
      de: ["Weltklasse-Bauxitvorkommen", "Tagebau-Großbetrieb", "Wichtigste Devisenquelle"],
      hu: ["Világszínvonalú bauxitlelőhely", "Külszíni fejtésű nagyüzem", "Fontos devizaforrás"],
      ro: ["Zăcământ de bauxită de clasă mondială", "Operațiune minieră de suprafață", "Sursă majoră de valută"],
      en: ["World-class bauxite deposit", "Large-scale open-pit mine", "Primary source of foreign exchange"]
    }
  },
  {
    id: "bauxitmine-debele-economic-v2",
    type: "industry",
    parent: "GN-D",
    coords: [-12.9156, 10.1878],
    name: {
      de: "Bauxitmine Debele",
      hu: "Debele bauxitbánya",
      ro: "Mina de bauxită Debele",
      en: "Debele Bauxite Mine"
    },
    description: {
      de: "Die Mine bei Kindia wird in Kooperation mit russischen Unternehmen betrieben und ist ein bedeutender Standort der guineischen Aluminiumindustrie.",
      hu: "A Kindia melletti bányát orosz vállalatokkal együttműködésben üzemeltetik, és a guineai alumíniumipar egyik jelentős helyszíne.",
      ro: "Mina de lângă Kindia este operată în cooperare cu companii rusești și este un site important al industriei de aluminiu din Guineea.",
      en: "The mine near Kindia is operated in cooperation with Russian companies and is a significant site for the Guinean aluminum industry."
    },
    facts: {
      de: ["Kooperation mit RUSAL", "Große Reserven", "Eigene Eisenbahnanbindung"],
      hu: ["Együttműködés a RUSAL-lal", "Hatalmas tartalékok", "Saját vasúti összeköttetés"],
      ro: ["Cooperare cu RUSAL", "Rezerve mari", "Conexiune feroviară proprie"],
      en: ["Cooperation with RUSAL", "Large reserves", "Dedicated railway link"]
    }
  },
  {
    id: "simandou-eisenerzmine-economic-v2",
    type: "industry",
    parent: "GN-N",
    coords: [-8.9234, 9.1745],
    name: {
      de: "Simandou-Eisenerzprojekt",
      hu: "Simandou vasércprojekt",
      ro: "Proiectul de minereu de fier Simandou",
      en: "Simandou Iron Ore Project"
    },
    description: {
      de: "Das Simandou-Projekt gilt als eines der weltweit größten unerschlossenen Eisenerzvorkommen mit extrem hohem Metallgehalt.",
      hu: "A Simandou-projekt a világ egyik legnagyobb feltáratlan vasérckészletének számít, rendkívül magas fémtartalommal.",
      ro: "Proiectul Simandou este considerat unul dintre cele mai mari zăcăminte de minereu de fier neexploatate din lume, cu un conținut de metal extrem de ridicat.",
      en: "The Simandou project is considered one of the world's largest untapped iron ore deposits with extremely high metal content."
    },
    facts: {
      de: ["Gigantisches Rohstoffprojekt", "Hochwertiges Eisenerz", "Umfangreiche Infrastrukturplanung"],
      hu: ["Gigantikus nyersanyagprojekt", "Kiváló minőségű vasérc", "Kiterjedt infrastruktúra-fejlesztés"],
      ro: ["Proiect gigant de materii prime", "Minereu de fier de înaltă calitate", "Planificare extinsă a infrastructurii"],
      en: ["Gigantic resource project", "High-grade iron ore", "Extensive infrastructure planning"]
    }
  },
  {
    id: "kaleta-wasserkraftwerk-economic-v2",
    type: "industry",
    parent: "GN-D",
    coords: [-13.2789, 10.4567],
    name: {
      de: "Kaléta-Wasserkraftwerk",
      hu: "Kaléta vízerőmű",
      ro: "Hidrocentrala Kaléta",
      en: "Kaléta Hydropower Plant"
    },
    description: {
      de: "Ein großes Wasserkraftwerk am Fluss Konkouré, das einen wesentlichen Beitrag zur Stromversorgung der Hauptstadt Conakry und der Industrie leistet.",
      hu: "Hatalmas vízerőmű a Konkouré folyón, amely jelentősen hozzájárul Conakry főváros és az ipar áramellátásához.",
      ro: "O hidrocentrală mare pe râul Konkouré, care aduce o contribuție semnificativă la alimentarea cu energie a capitalei Conakry și a industriei.",
      en: "A large hydropower plant on the Konkouré River, which makes a significant contribution to the power supply of the capital Conakry and industry."
    },
    facts: {
      de: ["240 Megawatt Leistung", "Am Konkouré-Fluss", "Symbol der Energieautarkie"],
      hu: ["240 megawatt teljesítmény", "A Konkouré folyón található", "Az energiafüggetlenség szimbóluma"],
      ro: ["Capacitate de 240 megawați", "Pe râul Konkouré", "Simbol al autosuficienței energetice"],
      en: ["240 megawatt capacity", "On the Konkouré River", "Symbol of energy self-sufficiency"]
    }
  },
  {
    id: "souapiti-wasserkraftwerk-economic-v2",
    type: "industry",
    parent: "GN-D",
    coords: [-13.1845, 10.5123],
    name: {
      de: "Souapiti-Wasserkraftwerk",
      hu: "Souapiti vízerőmű",
      ro: "Hidrocentrala Souapiti",
      en: "Souapiti Hydropower Plant"
    },
    description: {
      de: "Souapiti ist das größte Wasserkraftprojekt Guineas und dient der Regulierung des Konkouré-Flusses sowie der massiven Steigerung der Energieproduktion.",
      hu: "Souapiti Guinea legnagyobb vízerőmű-projektje, amely a Konkouré folyó szabályozását és az energiatermelés jelentős növelését szolgálja.",
      ro: "Souapiti este cel mai mare proiect hidroenergetic din Guineea, servind la reglarea râului Konkouré și la creșterea masivă a producției de energie.",
      en: "Souapiti is Guinea's largest hydropower project, serving to regulate the Konkouré River and massively increase energy production."
    },
    facts: {
      de: ["Größtes Kraftwerk des Landes", "Riesiger Stausee", "Energieexport-Potenzial"],
      hu: ["Az ország legnagyobb erőműve", "Hatalmas víztározó", "Energiaexport-potenciál"],
      ro: ["Cea mai mare centrală electrică din țară", "Rezervor uriaș", "Potențial de export de energie"],
      en: ["Largest power plant in the country", "Huge reservoir", "Energy export potential"]
    }
  },
  {
    id: "garafiri-wasserkraftwerk-economic-v2",
    type: "industry",
    parent: "GN-D",
    coords: [-12.6512, 10.5434],
    name: {
      de: "Garafiri-Wasserkraftwerk",
      hu: "Garafiri vízerőmű",
      ro: "Hidrocentrala Garafiri",
      en: "Garafiri Hydropower Plant"
    },
    description: {
      de: "Das Garafiri-Kraftwerk war das erste große Staudammprojekt nach der Unabhängigkeit und ist ein Meilenstein der nationalen Energieinfrastruktur.",
      hu: "A Garafiri erőmű volt az első nagy gátprojekt a függetlenség elnyerése után, és mérföldkő a nemzeti energetikai infrastruktúrában.",
      ro: "Centrala Garafiri a fost primul proiect major de baraj după independență și este o piatră de hotar în infrastructura energetică națională.",
      en: "The Garafiri power plant was the first major dam project after independence and is a milestone in the national energy infrastructure."
    },
    facts: {
      de: ["Historisches Energieprojekt", "Am Oberlauf des Konkouré", "Wichtig für die Aluminiumherstellung"],
      hu: ["Történelmi energiaforrás", "A Konkouré felső szakaszán", "Fontos az alumíniumgyártáshoz"],
      ro: ["Proiect energetic istoric", "Pe cursul superior al Konkouré", "Important pentru producția de aluminiu"],
      en: ["Historic energy project", "On the upper Konkouré", "Vital for aluminum production"]
    }
  },
  {
    id: "goldmine-siguiri-economic-v2",
    type: "industry",
    parent: "GN-K",
    coords: [-9.2834, 11.4867],
    name: {
      de: "Siguiri-Goldmine",
      hu: "Siguiri aranybánya",
      ro: "Mina de aur Siguiri",
      en: "Siguiri Gold Mine"
    },
    description: {
      de: "Die Siguiri-Goldmine im Nordosten Guineas ist ein großangelegter Tagebau, der jährlich beträchtliche Mengen an Gold für den Export produziert.",
      hu: "Az északkelet-guineai Siguiri aranybánya egy nagyszabású külszíni fejtés, amely évente jelentős mennyiségű aranyat termel exportra.",
      ro: "Mina de aur Siguiri din nord-estul Guineei este o exploatare la suprafață pe scară largă, care produce anual cantități considerabile de aur pentru export.",
      en: "The Siguiri Gold Mine in northeast Guinea is a large-scale open-pit operation producing significant quantities of gold for export annually."
    },
    facts: {
      de: ["Großer Goldproduzent", "Betrieben von AngloGold Ashanti", "Wichtiger regionaler Arbeitgeber"],
      hu: ["Jelentős aranytermelő", "Az AngloGold Ashanti üzemelteti", "Fontos regionális munkáltató"],
      ro: ["Producător major de aur", "Operat de AngloGold Ashanti", "Angajator regional important"],
      en: ["Major gold producer", "Operated by AngloGold Ashanti", "Key regional employer"]
    }
  },
  {
    id: "goldmine-lefa-economic-v2",
    type: "industry",
    parent: "GN-F",
    coords: [-11.0878, 11.7512],
    name: {
      de: "Lefa-Goldmine",
      hu: "Lefa aranybánya",
      ro: "Mina de aur Lefa",
      en: "Lefa Gold Mine"
    },
    description: {
      de: "Lefa ist eine der größten Goldminen Westafrikas und ein technologisches Zentrum für den Bergbau in der Region Faranah.",
      hu: "Lefa Nyugat-Afrika egyik legnagyobb aranybányája, és a bányászat technológiai központja a Faranah régióban.",
      ro: "Lefa este una dintre cele mai mari mine de aur din Africa de Vest și un centru tehnologic pentru minerit în regiunea Faranah.",
      en: "Lefa is one of West Africa's largest gold mines and a technological center for mining in the Faranah region."
    },
    facts: {
      de: ["Hochmoderne Extraktionsanlage", "Bedeutende Goldreserven", "Internationale Investitionen"],
      hu: ["Ultramodern kinyerő üzem", "Jelentős aranytartalékok", "Nemzetközi befektetések"],
      ro: ["Instalație de extracție ultramodernă", "Rezerve semnificative de aur", "Investiții internaționale"],
      en: ["State-of-the-art extraction plant", "Significant gold reserves", "International investment"]
    }
  },
  {
    id: "goldmine-kiniero-economic-v2",
    type: "industry",
    parent: "GN-K",
    coords: [-9.3812, 10.4856],
    name: {
      de: "Kiniero-Goldmine",
      hu: "Kiniero aranybánya",
      ro: "Mina de aur Kiniero",
      en: "Kiniero Gold Mine"
    },
    description: {
      de: "Eine historische Goldmine in der Region Kouroussa, die durch neue Investitionen wiederbelebt wurde und zur wirtschaftlichen Entwicklung Oberguineas beiträgt.",
      hu: "Történelmi aranybánya Kouroussa régióban, amelyet új beruházásokkal élesztettek újjá, hozzájárulva Felső-Guinea gazdasági fejlődéséhez.",
      ro: "O mină de aur istorică din regiunea Kouroussa, care a fost revitalizată prin noi investiții, contribuind la dezvoltarea economică a Guineei Superioare.",
      en: "A historic gold mine in the Kouroussa region, revitalized by new investments, contributing to the economic development of Upper Guinea."
    },
    facts: {
      de: ["Wiedereröffnung der Mine", "Oberguinea-Bergbauzentrum", "Goldexport-Standort"],
      hu: ["A bánya újranyitása", "Felső-guineai bányászati központ", "Aranyexport helyszín"],
      ro: ["Redeschiderea minei", "Centru minier în Guineea Superioară", "Locație de export de aur"],
      en: ["Reopening of the mine", "Upper Guinea mining center", "Gold export site"]
    }
  },
  {
    id: "aluminiumwerk-fria-economic-v2",
    type: "industry",
    parent: "GN-B",
    coords: [-13.5823, 10.3845],
    name: {
      de: "Aluminiumoxid-Werk Fria",
      hu: "Fria timföldgyár",
      ro: "Fabrica de alumină Fria",
      en: "Fria Alumina Plant"
    },
    description: {
      de: "Das Werk in Fria ist die älteste Aluminiumoxid-Raffinerie Afrikas und bildet das industrielle Rückgrat der gleichnamigen Bergbaustadt.",
      hu: "A friai gyár Afrika legrégebbi timföldfinomítója, és az azonos nevű bányászváros ipari gerincét alkotja.",
      ro: "Fabrica din Fria este cea mai veche rafinărie de alumină din Africa și formează coloana vertebrală industrială a orașului minier cu același nume.",
      en: "The Fria plant is Africa's oldest alumina refinery and forms the industrial backbone of the eponymous mining town."
    },
    facts: {
      de: ["Erste Raffinerie Afrikas", "Verarbeitung von Bauxit", "Großindustrieller Komplex"],
      hu: ["Afrika első finomítója", "Bauxit feldolgozása", "Nagyipari komplexum"],
      ro: ["Prima rafinărie din Africa", "Prelucrarea bauxitei", "Complex industrial de mari dimensiuni"],
      en: ["Africa's first refinery", "Bauxite processing", "Large industrial complex"]
    }
  },
  {
    id: "eisenerzmine-zogota-economic-v2",
    type: "industry",
    parent: "GN-N",
    coords: [-9.0312, 7.9245],
    name: {
      de: "Zogota-Eisenerzmine",
      hu: "Zogota vasércbánya",
      ro: "Mina de minereu de fier Zogota",
      en: "Zogota Iron Ore Mine"
    },
    description: {
      de: "Eine bedeutende Eisenerzmine in der Waldregion Guineas, die Teil der Erschließung der gewaltigen Erzvorkommen im Südosten des Landes ist.",
      hu: "Jelentős vasércbánya Guinea erdős régiójában, amely az ország délkeleti részén található hatalmas érckészletek feltárásának része.",
      ro: "O mină importantă de minereu de fier din regiunea forestieră a Guineei, care face parte din dezvoltarea vastelor zăcăminte de minereu din sud-estul țării.",
      en: "A significant iron ore mine in Guinea's forest region, part of the development of the vast ore deposits in the southeast of the country."
    },
    facts: {
      de: ["Hochwertiges Eisenerz", "Südost-Guinea-Bergbau", "Export über Nachbarländer geplant"],
      hu: ["Kiváló minőségű vasérc", "Délkelet-guineai bányászat", "Export a szomszédos országokon keresztül"],
      ro: ["Minereu de fier de înaltă calitate", "Minerit în sud-estul Guineei", "Export planificat prin țările vecine"],
      en: ["High-grade iron ore", "Southeast Guinea mining", "Export via neighboring countries planned"]
    }
  },
  {
    id: "bauxitmine-bel-air-economic-v2",
    type: "industry",
    parent: "GN-B",
    coords: [-14.4512, 10.4378],
    name: {
      de: "Bel-Air-Bauxitmine",
      hu: "Bel-Air bauxitbánya",
      ro: "Mina de bauxită Bel-Air",
      en: "Bel-Air Bauxite Mine"
    },
    description: {
      de: "Die Bel-Air-Mine an der Küste von Boffa ist bekannt für ihren direkten Zugang zum Meer und effiziente Verladeprozesse für den Bauxitexport.",
      hu: "A Boffa partjainál található Bel-Air bánya közvetlen tengeri kapcsolatáról és a bauxitexport hatékony rakodási folyamatairól ismert.",
      ro: "Mina Bel-Air de pe coasta Boffa este cunoscută pentru accesul direct la mare și procesele eficiente de încărcare pentru exportul de bauxită.",
      en: "The Bel-Air mine on the coast of Boffa is known for its direct sea access and efficient loading processes for bauxite export."
    },
    facts: {
      de: ["Küstennaher Bergbau", "Eigener Verladeterminal", "Moderne Fördertechnik"],
      hu: ["Partközeli bányászat", "Saját rakodóterminál", "Modern bányászati technológia"],
      ro: ["Minerit de coastă", "Terminal de încărcare propriu", "Tehnologie modernă de extracție"],
      en: ["Coastal mining operation", "Private loading terminal", "Modern extraction technology"]
    }
  },
  {
    id: "hafen-konta-economic-v2",
    type: "port",
    parent: "GN-D",
    coords: [-13.1545, 9.3867],
    name: {
      de: "Hafen von Konta",
      hu: "Konta kikötője",
      ro: "Portul Konta",
      en: "Port of Konta"
    },
    description: {
      de: "Ein kleinerer, aber strategisch wichtiger Hafen in der Region Forécariah, der primär für den Umschlag lokaler Rohstoffe genutzt wird.",
      hu: "Kisebb, de stratégiailag fontos kikötő Forécariah régióban, amelyet elsősorban a helyi nyersanyagok átrakodására használnak.",
      ro: "Un port mai mic, dar strategic, în regiunea Forécariah, utilizat în principal pentru transbordarea materiilor prime locale.",
      en: "A smaller but strategically important port in the Forécariah region, primarily used for transshipping local raw materials."
    },
    facts: {
      de: ["Regionaler Exporthafen", "Nähe zur Grenze von Sierra Leone", "Entwicklungsstandort"],
      hu: ["Regionális exportkikötő", "Közel a Sierra Leone-i határhoz", "Fejlesztési terület"],
      ro: ["Port regional de export", "Aproape de granița cu Sierra Leone", "Sit în dezvoltare"],
      en: ["Regional export port", "Near Sierra Leone border", "Development site"]
    }
  },
  {
    id: "diamantenmine-banankoro-economic-v2",
    type: "industry",
    parent: "GN-K",
    coords: [-9.3278, 9.2745],
    name: {
      de: "Banankoro-Diamantenminen",
      hu: "Banankoro gyémántbányák",
      ro: "Minele de diamante Banankoro",
      en: "Banankoro Diamond Mines"
    },
    description: {
      de: "Das Gebiet um Banankoro ist das Herz der guineischen Diamantenförderung, wo sowohl industrieller als auch handwerklicher Abbau betrieben wird.",
      hu: "Banankoro környéke a guineai gyémántbányászat szíve, ahol ipari és kisipari kitermelés egyaránt folyik.",
      ro: "Zona din jurul localității Banankoro este inima producției de diamante din Guineea, unde se desfășoară atât minerit industrial, cât și artizanal.",
      en: "The area around Banankoro is the heart of Guinean diamond production, where both industrial and artisanal mining take place."
    },
    facts: {
      de: ["Zentrum des Edelsteinhandels", "Alluviale Vorkommen", "Wichtig für die Region Kérouané"],
      hu: ["A drágakő-kereskedelem központja", "Hordalékos lelőhelyek", "Fontos Kérouané régió számára"],
      ro: ["Centrul comerțului cu pietre prețioase", "Zăcăminte aluvionare", "Important pentru regiunea Kérouané"],
      en: ["Center of gemstone trade", "Alluvial deposits", "Crucial for the Kérouané region"]
    }
  },
  {
    id: "kalksteinwerk-sougueta-economic-v2",
    type: "industry",
    parent: "GN-D",
    coords: [-12.5612, 10.1478],
    name: {
      de: "Kalksteinwerk Souguéta",
      hu: "Souguéta mészkőbánya",
      ro: "Fabrica de calcar Souguéta",
      en: "Souguéta Limestone Plant"
    },
    description: {
      de: "Das Werk in Souguéta nutzt die lokalen Kalksteinvorkommen für die Produktion von Baumaterialien und Zementzuschlagstoffen.",
      hu: "A souguétai üzem a helyi mészkőkészleteket hasznosítja építőanyagok és cementadalékok gyártásához.",
      ro: "Fabrica din Souguéta utilizează zăcămintele locale de calcar pentru producția de materiale de construcții și aditivi pentru ciment.",
      en: "The plant in Souguéta utilizes local limestone deposits for the production of building materials and cement additives."
    },
    facts: {
      de: ["Wichtiger Baustofflieferant", "In der Region Kindia", "Versorgung der Bauwirtschaft"],
      hu: ["Fontos építőanyag-beszállító", "Kindia régióban található", "Az építőipar kiszolgálása"],
      ro: ["Furnizor important de materiale de construcții", "În regiunea Kindia", "Aprovizionarea industriei construcțiilor"],
      en: ["Key construction material supplier", "In Kindia region", "Serving the construction industry"]
    }
  },
  {
    id: "zementwerk-conakry-economic-v2",
    type: "industry",
    parent: "GN-C",
    coords: [-13.5845, 9.6123],
    name: {
      de: "Ciments de Guinée Werk",
      hu: "Ciments de Guinée gyár",
      ro: "Fabrica Ciments de Guinée",
      en: "Ciments de Guinée Plant"
    },
    description: {
      de: "Die Zementfabrik in Conakry ist die bedeutendste Produktionsstätte für Zement im Land und deckt einen Großteil des nationalen Bedarfs.",
      hu: "A conakry-i cementgyár az ország legjelentősebb cementgyártó üzeme, amely a nemzeti szükséglet nagy részét fedezi.",
      ro: "Fabrica de ciment din Conakry este cea mai importantă unitate de producție de ciment din țară și acoperă o mare parte din cererea națională.",
      en: "The cement factory in Conakry is the most significant cement production facility in the country, meeting a large portion of national demand."
    },
    facts: {
      de: ["Führender Zementhersteller", "Industriegebiet Conakry", "Wichtig für die Infrastruktur"],
      hu: ["Vezető cementgyártó", "Conakry ipari negyedében", "Fontos az infrastruktúra számára"],
      ro: ["Producător lider de ciment", "Zona industrială Conakry", "Important pentru infrastructură"],
      en: ["Leading cement producer", "Conakry industrial zone", "Vital for infrastructure"]
    }
  },
  {
    id: "bauxitmine-koumbia-economic-v2",
    type: "industry",
    parent: "GN-B",
    coords: [-13.6212, 11.2345],
    name: {
      de: "Koumbia-Bauxitmine",
      hu: "Koumbia bauxitbánya",
      ro: "Mina de bauxită Koumbia",
      en: "Koumbia Bauxite Mine"
    },
    description: {
      de: "Eine der neueren Bauxitminen in der Region Boké, die Teil der massiven Expansion Guineas zum weltweit führenden Bauxitexporteur ist.",
      hu: "Az egyik újabb bauxitbánya Boké régióban, amely része Guinea világranglistás bauxitexportőrré válásának.",
      ro: "Una dintre cele mai noi mine de bauxită din regiunea Boké, parte a expansiunii masive a Guineei pentru a deveni lider mondial în exportul de bauxită.",
      en: "One of the newer bauxite mines in the Boké region, part of Guinea's massive expansion to become a leading global bauxite exporter."
    },
    facts: {
      de: ["Neues Bergbauprojekt", "Hohe Produktionskapazität", "Anschluss an den Boké-Korridor"],
      hu: ["Új bányászati projekt", "Nagy termelési kapacitás", "Csatlakozás a bokéi folyosóhoz"],
      ro: ["Proiect minier nou", "Capacitate mare de producție", "Conectat la coridorul Boké"],
      en: ["New mining project", "High production capacity", "Connected to the Boké corridor"]
    }
  }
];
