// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraIndiaEconomicV2: POI[] = [
  {
    id: "mumbai-port-economic-v2",
    type: "port",
    parent: "IN-MH",
    coords: [72.8777, 19.0760],
    name: {
      de: "Hafen von Mumbai",
      hu: "Mumbai kikötő",
      ro: "Portul Mumbai",
      en: "Mumbai Port"
    },
    description: {
      de: "Einer der größten Häfen Indiens, der einen bedeutenden Teil des Seehandels des Landes abwickelt.",
      hu: "India egyik legnagyobb kikötője, amely az ország tengeri kereskedelmének jelentős részét bonyolítja.",
      ro: "Unul dintre cele mai mari porturi din India, gestionând o parte semnificativă a comerțului maritim al țării.",
      en: "One of the largest ports in India, handling a significant portion of the country's maritime trade."
    },
    facts: {
      de: ["Wickelt über 20% des indischen Außenhandels ab.", "Bekannt für den Umschlag von Stück- und Massengut."],
      hu: ["India külkereskedelmének több mint 20%-át bonyolítja.", "Ismert a darab- és ömlesztettáru-kezelésről."],
      ro: ["Gestionează peste 20% din comerțul exterior al Indiei.", "Cunoscut pentru manipularea mărfurilor generale și în vrac."],
      en: ["Handles over 20% of India's foreign trade.", "Known for handling general and bulk cargo."]
    }, image: "/poi-images/mumbai-port-economic-v2.webp"},
  {
    id: "bengaluru-it-hub-economic-v2",
    type: "industry",
    parent: "IN-KA",
    coords: [77.5946, 12.9716],
    name: {
      de: "Bengaluru IT-Hub",
      hu: "Bengaluru IT központ",
      ro: "Centrul IT din Bengaluru",
      en: "Bengaluru IT Hub"
    },
    description: {
      de: "Bekannt als das 'Silicon Valley Indiens', ist Bengaluru ein wichtiges Zentrum für die Informationstechnologiebranche.",
      hu: "India 'Szilícium-völgyeként' ismert Bengaluru az információs technológiai ipar egyik fő központja.",
      ro: "Cunoscut sub numele de 'Silicon Valley-ul Indiei', Bengaluru este un centru major pentru industria tehnologiei informației.",
      en: "Known as the 'Silicon Valley of India', Bengaluru is a major hub for the information technology industry."
    },
    facts: {
      de: ["Heimat zahlreicher multinationaler IT-Unternehmen.", "Trägt erheblich zu Indiens IT-Exporten bei."],
      hu: ["Számos multinacionális IT-cég otthona.", "Jelentősen hozzájárul India IT-exportjához."],
      ro: ["Găzduiește numeroase companii multinaționale de IT.", "Contribuie semnificativ la exporturile de IT ale Indiei."],
      en: ["Home to numerous multinational IT companies.", "Contributes significantly to India's IT exports."]
    }
  },
  {
    id: "jharia-coalfield-economic-v2",
    type: "mine",
    parent: "IN-JH",
    coords: [86.4214, 23.7431],
    name: {
      de: "Jharia-Kohlenfeld",
      hu: "Jharia szénmező",
      ro: "Bazinul carbonifer Jharia",
      en: "Jharia Coalfield"
    },
    description: {
      de: "Eines der größten Kohlenreserven in Indien und ein Hauptlieferant von Kokskohle für die Stahlindustrie.",
      hu: "India egyik legnagyobb széntartaléka és a koksz egyik fő szállítója az acélipar számára.",
      ro: "Una dintre cele mai mari rezerve de cărbune din India și un furnizor primar de cărbune cocsificabil pentru industria siderurgică.",
      en: "One of the largest coal reserves in India and a primary supplier of coking coal for the steel industry."
    },
    facts: {
      de: ["Ist seit über einem Jahrhundert in Betrieb.", "Steht vor großen Herausforderungen durch unterirdische Brände."],
      hu: ["Több mint egy évszázada működik.", "Súlyos problémákkal küzd a föld alatti tüzek miatt."],
      ro: ["Funcționează de peste un secol.", "Se confruntă cu provocări majore din cauza incendiilor subterane."],
      en: ["Has been operational for over a century.", "Faces major challenges from underground fires."]
    }, image: "/poi-images/jharia-coalfield-economic-v2.webp"},
  {
    id: "mundra-port-economic-v2",
    type: "port",
    parent: "IN-GJ",
    coords: [69.7135, 22.7483],
    name: {
      de: "Hafen von Mundra",
      hu: "Mundra kikötő",
      ro: "Portul Mundra",
      en: "Mundra Port"
    },
    description: {
      de: "Indiens größter privater Hafen und ein wichtiges Tor für den Handel im Norden Indiens.",
      hu: "India legnagyobb magánkikötője és fontos kapu Észak-India kereskedelme számára.",
      ro: "Cel mai mare port privat din India și o poartă crucială pentru comerțul din nordul Indiei.",
      en: "India's largest private port and a crucial gateway for trade in northern India."
    },
    facts: {
      de: ["Verfügt über ein tiefes Tiefgang, das große Schiffe aufnehmen kann.", "Ist bekannt für seine effiziente Frachtabfertigung."],
      hu: ["Mély merüléssel rendelkezik, amely lehetővé teszi nagy hajók fogadását.", "Hatékony rakománykezeléséről ismert."],
      ro: ["Are un pescaj adânc care poate găzdui nave mari.", "Este cunoscut pentru eficiența sa în manipularea mărfurilor."],
      en: ["Has a deep draft capable of accommodating large vessels.", "Is known for its efficient cargo handling."]
    }, image: "/poi-images/mundra-port-economic-v2.webp"},
  {
    id: "reliance-jamnagar-refinery-economic-v2",
    type: "energy",
    parent: "IN-GJ",
    coords: [70.0577, 22.3964],
    name: {
      de: "Reliance Jamnagar Raffinerie",
      hu: "Reliance Jamnagar finomító",
      ro: "Rafinăria Reliance Jamnagar",
      en: "Reliance Jamnagar Refinery"
    },
    description: {
      de: "Die größte Ölraffinerie der Welt, ein wichtiger Akteur auf dem globalen Ölmarkt.",
      hu: "A világ legnagyobb olajfinomítója, amely kulcsfontosságú szereplő a globális olajpiacon.",
      ro: "Cea mai mare rafinărie de petrol din lume, un jucător cheie pe piața globală a petrolului.",
      en: "The largest oil refinery in the world, a key player in the global oil market."
    },
    facts: {
      de: ["Hat eine Verarbeitungskapazität von über 1,24 Millionen Barrel pro Tag.", "Exportiert Produkte in viele Länder."],
      hu: ["Napi több mint 1,24 millió hordó feldolgozási kapacitással rendelkezik.", "Számos országba exportál termékeket."],
      ro: ["Are o capacitate de procesare de peste 1,24 milioane de barili pe zi.", "Exportă produse în numeroase țări."],
      en: ["Has a processing capacity of over 1.24 million barrels per day.", "Exports products to numerous countries."]
    }, image: "/poi-images/reliance-jamnagar-refinery-economic-v2.webp"},
  {
    id: "delhi-ncr-trade-hub-economic-v2",
    type: "trade-hub",
    parent: "IN-DL",
    coords: [77.2090, 28.6139],
    name: {
      de: "Delhi-NCR Handelszentrum",
      hu: "Delhi-NCR kereskedelmi központ",
      ro: "Centrul comercial Delhi-NCR",
      en: "Delhi-NCR Trade Hub"
    },
    description: {
      de: "Die Nationale Hauptstadtregion (NCR) ist ein bedeutendes Handels- und Wirtschaftszentrum in Nordindien.",
      hu: "A Nemzeti Fővárosi Régió (NCR) Észak-India egyik fő kereskedelmi és gazdasági központja.",
      ro: "Regiunea Capitalei Naționale (NCR) este un centru comercial și economic major în nordul Indiei.",
      en: "The National Capital Region (NCR) is a major commercial and economic hub in North India."
    },
    facts: {
      de: ["Umfasst Delhi und mehrere umliegende Bezirke.", "Ein Zentrum für Groß- und Einzelhandel."],
      hu: ["Magában foglalja Delhit és több környező kerületet.", "A nagy- és kiskereskedelem központja."],
      ro: ["Include Delhi și mai multe districte înconjurătoare.", "Un centru pentru comerțul cu ridicata și cu amănuntul."],
      en: ["Includes Delhi and several surrounding districts.", "A center for wholesale and retail trade."]
    }, image: "/poi-images/delhi-ncr-trade-hub-economic-v2.webp"},
  {
    id: "chennai-port-economic-v2",
    type: "port",
    parent: "IN-TN",
    coords: [80.2917, 13.0927],
    name: {
      de: "Hafen von Chennai",
      hu: "Chennai kikötő",
      ro: "Portul Chennai",
      en: "Chennai Port"
    },
    description: {
      de: "Einer der ältesten Häfen Indiens und der zweitgrößte Containerhafen des Landes.",
      hu: "India egyik legrégebbi kikötője és az ország második legnagyobb konténerkikötője.",
      ro: "Unul dintre cele mai vechi porturi din India și al doilea cel mai mare port de containere din țară.",
      en: "One of the oldest ports in India and the country's second-largest container port."
    },
    facts: {
      de: ["Spielt eine entscheidende Rolle im Handel des südlichen Indiens.", "Ist bekannt für den Umschlag von Automobilen und Containern."],
      hu: ["Dél-India kereskedelmében kulcsfontosságú szerepet játszik.", "Ismert az autók és konténerek kezeléséről."],
      ro: ["Joacă un rol crucial în comerțul din sudul Indiei.", "Este cunoscut pentru manipularea automobilelor și containerelor."],
      en: ["Plays a crucial role in the trade of Southern India.", "Is known for handling automobiles and containers."]
    }, image: "/poi-images/chennai-port-economic-v2.webp"},
  {
    id: "kudankulam-nuclear-power-plant-economic-v2",
    type: "energy",
    parent: "IN-TN",
    coords: [77.7128, 8.1670],
    name: {
      de: "Kernkraftwerk Kudankulam",
      hu: "Kudankulam atomerőmű",
      ro: "Centrala nucleară de la Kudankulam",
      en: "Kudankulam Nuclear Power Plant"
    },
    description: {
      de: "Das leistungsstärkste Kernkraftwerk in Indien und ein wichtiger Beitrag zur Energieversorgung des Landes.",
      hu: "India legnagyobb teljesítményű atomerőműve, amely jelentősen hozzájárul az ország energiaellátásához.",
      ro: "Cea mai puternică centrală nucleară din India, contribuind semnificativ la aprovizionarea cu energie a țării.",
      en: "The most powerful nuclear power plant in India, a significant contributor to the country's energy supply."
    },
    facts: {
      de: ["Wurde in Zusammenarbeit mit Russland gebaut.", "Verfügt über mehrere VVER-1000-Reaktoren."],
      hu: ["Oroszországgal együttműködésben épült.", "Több VVER-1000 típusú reaktorral rendelkezik."],
      ro: ["Construită în colaborare cu Rusia.", "Dispune de mai multe reactoare VVER-1000."],
      en: ["Built in collaboration with Russia.", "Features multiple VVER-1000 reactors."]
    }, image: "/poi-images/kudankulam-nuclear-power-plant-economic-v2.webp"},
  {
    id: "bailadila-iron-ore-mine-economic-v2",
    type: "mine",
    parent: "IN-CT",
    coords: [81.2333, 18.7000],
    name: {
      de: "Bailadila Eisenerzmine",
      hu: "Bailadila vasércbánya",
      ro: "Mina de minereu de fier Bailadila",
      en: "Bailadila Iron Ore Mine"
    },
    description: {
      de: "Bekannt für seine hochwertigen Eisenerzvorkommen, die hauptsächlich nach Japan exportiert werden.",
      hu: "Híres a kiváló minőségű vasérckészleteiről, amelyeket főként Japánba exportálnak.",
      ro: "Cunoscută pentru zăcămintele sale de minereu de fier de înaltă calitate, exportate în principal în Japonia.",
      en: "Known for its high-quality iron ore deposits, which are primarily exported to Japan."
    },
    facts: {
      de: ["Liegt in der Region Bastar in Chhattisgarh.", "Produziert einen erheblichen Teil des indischen Eisenerzes."],
      hu: ["Chhattisgarh Bastar régiójában található.", "India vasérctermelésének jelentős részét adja."],
      ro: ["Situată în regiunea Bastar din Chhattisgarh.", "Produce o parte semnificativă a minereului de fier din India."],
      en: ["Located in the Bastar region of Chhattisgarh.", "Produces a significant portion of India's iron ore."]
    }, image: "/poi-images/bailadila-iron-ore-mine-economic-v2.webp"},
  {
    id: "ahmedabad-textile-industry-economic-v2",
    type: "industry",
    parent: "IN-GJ",
    coords: [72.5714, 23.0225],
    name: {
      de: "Ahmedabad Textilindustrie",
      hu: "Ahmedábádi textilipar",
      ro: "Industria textilă din Ahmedabad",
      en: "Ahmedabad Textile Industry"
    },
    description: {
      de: "Historisch bekannt als das 'Manchester des Ostens', hat Ahmedabad eine reiche Geschichte in der Textilherstellung.",
      hu: "Történelmileg a 'Kelet Manchestereként' ismert Ahmedábád gazdag textilgyártási múlttal rendelkezik.",
      ro: "Cunoscut istoric sub numele de 'Manchesterul Estului', Ahmedabad are o istorie bogată în producția de textile.",
      en: "Historically known as the 'Manchester of the East', Ahmedabad has a rich history of textile manufacturing."
    },
    facts: {
      de: ["Ein wichtiges Zentrum für Baumwolltextilien und Denim.", "Die Industrie hat sich zu modernen Techniken gewandelt."],
      hu: ["A pamut textíliák és a farmer fontos központja.", "Az ipar modern technikákra váltott."],
      ro: ["Un centru important pentru textile din bumbac și denim.", "Industria a evoluat spre tehnici moderne."],
      en: ["A major center for cotton textiles and denim.", "The industry has transitioned to modern techniques."]
    }, image: "/poi-images/ahmedabad-textile-industry-economic-v2.webp"},
  {
    id: "kolkata-port-economic-v2",
    type: "port",
    parent: "IN-WB",
    coords: [88.3048, 22.5697],
    name: {
      de: "Hafen von Kolkata",
      hu: "Kalkuttai kikötő",
      ro: "Portul Kolkata",
      en: "Kolkata Port"
    },
    description: {
      de: "Indiens einziger großer Flusshafen, der für den Handel mit Südostasien von entscheidender Bedeutung ist.",
      hu: "India egyetlen nagy folyami kikötője, amely létfontosságú a délkelet-ázsiai kereskedelem szempontjából.",
      ro: "Singurul port fluvial major din India, vital pentru comerțul cu Asia de Sud-Est.",
      en: "India's only major riverine port, vital for trade with Southeast Asia."
    },
    facts: {
      de: ["Liegt am Fluss Hooghly.", "Besteht aus den Docksystemen von Kolkata und Haldia."],
      hu: ["A Hooghly folyón található.", "A kalkuttai és a haldiai dokkrendszerekből áll."],
      ro: ["Situat pe râul Hooghly.", "Este format din sistemele de docuri Kolkata și Haldia."],
      en: ["Located on the Hooghly River.", "Comprises the Kolkata and Haldia dock systems."]
    }, image: "/poi-images/kolkata-port-economic-v2.webp"},
  {
    id: "pune-automotive-hub-economic-v2",
    type: "industry",
    parent: "IN-MH",
    coords: [73.8567, 18.5204],
    name: {
      de: "Pune Automobilzentrum",
      hu: "Pune autóipari központ",
      ro: "Centrul auto din Pune",
      en: "Pune Automotive Hub"
    },
    description: {
      de: "Bekannt als das 'Detroit Indiens', ist Pune ein wichtiger Standort für die Automobil- und Fertigungsindustrie.",
      hu: "India 'Detroitjaként' ismert Pune az autó- és feldolgozóipar egyik fő központja.",
      ro: "Cunoscut sub numele de 'Detroit-ul Indiei', Pune este un centru major pentru industria auto și de producție.",
      en: "Known as the 'Detroit of India', Pune is a major hub for the automotive and manufacturing sectors."
    },
    facts: {
      de: ["Heimat von Produktionsstätten vieler globaler Automobilhersteller.", "Starker Fokus auf Automobil-F&E."],
      hu: ["Számos globális autógyártó gyártóüzemének ad otthont.", "Nagy hangsúlyt fektet az autóipari K+F-re."],
      ro: ["Găzduiește unități de producție ale multor producători auto globali.", "Accent puternic pe cercetare și dezvoltare în domeniul auto."],
      en: ["Home to manufacturing plants of many global automotive companies.", "Strong focus on automotive R&D."]
    }, image: "/poi-images/pune-automotive-hub-economic-v2.webp"},
  {
    id: "vizag-steel-plant-economic-v2",
    type: "industry",
    parent: "IN-AP",
    coords: [83.2185, 17.6868],
    name: {
      de: "Stahlwerk Vizag",
      hu: "Vizag acélmű",
      ro: "Combinatul siderurgic Vizag",
      en: "Vizag Steel Plant"
    },
    description: {
      de: "Ein führendes Stahlwerk in Indien, bekannt für seine hochwertigen Stahlprodukte.",
      hu: "India egyik vezető acélműve, amely kiváló minőségű acéltermékeiről ismert.",
      ro: "Un combinat siderurgic de top din India, cunoscut pentru produsele sale din oțel de înaltă calitate.",
      en: "A top steel plant in India, known for its high-quality steel products."
    },
    facts: {
      de: ["Erstes integriertes Küstenstahlwerk in Indien.", "Hat eine hohe Produktionskapazität."],
      hu: ["India első tengerparti integrált acélműve.", "Nagy termelési kapacitással rendelkezik."],
      ro: ["Primul combinat siderurgic integrat de coastă din India.", "Are o capacitate mare de producție."],
      en: ["First shore-based integrated steel plant in India.", "Has a high production capacity."]
    }, image: "/poi-images/vizag-steel-plant-economic-v2.webp"},
  {
    id: "surat-diamond-industry-economic-v2",
    type: "industry",
    parent: "IN-GJ",
    coords: [72.8311, 21.1702],
    name: {
      de: "Surat Diamantenindustrie",
      hu: "Surat gyémántipar",
      ro: "Industria diamantelor din Surat",
      en: "Surat Diamond Industry"
    },
    description: {
      de: "Ein globales Zentrum für das Schleifen und Polieren von Diamanten, das einen Großteil der weltweiten Diamanten verarbeitet.",
      hu: "A gyémántcsiszolás és -fényezés globális központja, ahol a világ gyémántjainak nagy részét feldolgozzák.",
      ro: "Un centru global pentru tăierea și lustruirea diamantelor, procesând o mare parte din diamantele din lume.",
      en: "A global hub for diamond cutting and polishing, processing a majority of the world's diamonds."
    },
    facts: {
      de: ["9 von 10 Diamanten der Welt werden in Surat geschliffen.", "Beschäftigt eine große Anzahl von Handwerkern."],
      hu: ["A világ 10 gyémántjából 9-et Suratban csiszolnak.", "Nagyszámú kézművest foglalkoztat."],
      ro: ["9 din 10 diamante din lume sunt tăiate în Surat.", "Angajează un număr mare de artizani."],
      en: ["9 out of 10 diamonds in the world are cut in Surat.", "Employs a large number of artisans."]
    }, image: "/poi-images/surat-diamond-industry-economic-v2.webp"},
  {
    id: "cochin-port-economic-v2",
    type: "port",
    parent: "IN-KL",
    coords: [76.2673, 9.9312],
    name: {
      de: "Hafen von Cochin",
      hu: "Koccsi kikötő",
      ro: "Portul Cochin",
      en: "Cochin Port"
    },
    description: {
      de: "Ein wichtiger Hafen an der Südwestküste Indiens, strategisch günstig an den wichtigsten Seewegen gelegen.",
      hu: "Fontos kikötő India délnyugati partján, stratégiailag a fő tengeri útvonalak mentén helyezkedik el.",
      ro: "Un port major pe coasta de sud-vest a Indiei, situat strategic pe principalele rute maritime.",
      en: "A major port on the south-west coast of India, strategically located on major sea routes."
    },
    facts: {
      de: ["Bekannt für den Export von Gewürzen und Meeresfrüchten.", "Verfügt über ein internationales Container-Umschlags-Terminal."],
      hu: ["Fűszerek és tengeri termékek exportjáról ismert.", "Nemzetközi konténer-átrakó terminállal rendelkezik."],
      ro: ["Cunoscut pentru exportul de condimente și fructe de mare.", "Dispune de un terminal internațional de transbordare a containerelor."],
      en: ["Known for exporting spices and seafood.", "Features an International Container Transshipment Terminal."]
    }, image: "/poi-images/cochin-port-economic-v2.webp"},
  {
    id: "bokaro-steel-city-economic-v2",
    type: "industry",
    parent: "IN-JH",
    coords: [86.1511, 23.6693],
    name: {
      de: "Stahlstadt Bokaro",
      hu: "Bokaro acélváros",
      ro: "Orașul siderurgic Bokaro",
      en: "Bokaro Steel City"
    },
    description: {
      de: "Eine geplante Stadt, die um das Bokaro-Stahlwerk herum gebaut wurde, eines der größten Stahlwerke Indiens.",
      hu: "Tervezett város, amely a Bokaro Acélmű köré épült, amely India egyik legnagyobb acélműve.",
      ro: "Un oraș planificat, construit în jurul Combinatului Siderurgic Bokaro, unul dintre cele mai mari din India.",
      en: "A planned city built around the Bokaro Steel Plant, one of the largest in India."
    },
    facts: {
      de: ["Wurde mit Hilfe der Sowjetunion gegründet.", "Ein wichtiges Zentrum für die Stahlproduktion."],
      hu: ["A Szovjetunió segítségével hozták létre.", "Az acélgyártás egyik fontos központja."],
      ro: ["Înființat cu ajutorul Uniunii Sovietice.", "Un centru important pentru producția de oțel."],
      en: ["Established with the help of the Soviet Union.", "A major center for steel production."]
    }, image: "/poi-images/bokaro-steel-city-economic-v2.webp"},
  {
    id: "paradeep-port-economic-v2",
    type: "port",
    parent: "IN-OR",
    coords: [86.6543, 20.3297],
    name: {
      de: "Hafen von Paradeep",
      hu: "Paradeep kikötő",
      ro: "Portul Paradeep",
      en: "Paradeep Port"
    },
    description: {
      de: "Ein wichtiger Seehafen an der Ostküste, der hauptsächlich Eisenerz, Kohle und Rohöl umschlägt.",
      hu: "Fontos tengeri kikötő a keleti parton, amely főként vasércet, szenet és kőolajat kezel.",
      ro: "Un port maritim major pe coasta de est, care manipulează în principal minereu de fier, cărbune și țiței.",
      en: "A major seaport on the east coast, primarily handling iron ore, coal, and crude oil."
    },
    facts: {
      de: ["Einer der tiefsten Häfen Indiens.", "Verfügt über eine mechanisierte Kohleumschlagsanlage."],
      hu: ["India egyik legmélyebb kikötője.", "Gépesített szénkezelő létesítménnyel rendelkezik."],
      ro: ["Unul dintre cele mai adânci porturi din India.", "Dispune de o instalație mecanizată de manipulare a cărbunelui."],
      en: ["One of the deepest ports in India.", "Features a mechanized coal handling plant."]
    }, image: "/poi-images/paradeep-port-economic-v2.webp"},
  {
    id: "sasan-ultra-mega-power-project-economic-v2",
    type: "energy",
    parent: "IN-MP",
    coords: [82.5296, 24.1105],
    name: {
      de: "Sasan Ultra Mega Power Project",
      hu: "Sasan Ultra Mega erőmű projekt",
      ro: "Proiectul energetic Sasan Ultra Mega",
      en: "Sasan Ultra Mega Power Project"
    },
    description: {
      de: "Eines der größten integrierten Kohleminen- und Kraftwerksprojekte der Welt.",
      hu: "A világ egyik legnagyobb integrált szénbánya- és erőmű-projektje.",
      ro: "Unul dintre cele mai mari proiecte integrate de mină de cărbune și centrală electrică din lume.",
      en: "One of the world's largest integrated coal mine and power plant projects."
    },
    facts: {
      de: ["Hat eine Erzeugungskapazität von fast 4000 MW.", "Nutzt superkritische Technologie für mehr Effizienz."],
      hu: ["Közel 4000 MW termelési kapacitással rendelkezik.", "Szuperkritikus technológiát használ a nagyobb hatékonyság érdekében."],
      ro: ["Are o capacitate de generare de aproape 4000 MW.", "Folosește tehnologie supercritică pentru o eficiență sporită."],
      en: ["Has a generation capacity of nearly 4000 MW.", "Uses supercritical technology for greater efficiency."]
    }, image: "/poi-images/sasan-ultra-mega-power-project-economic-v2.webp"},
  {
    id: "gurgaon-financial-and-technology-hub-economic-v2",
    type: "trade-hub",
    parent: "IN-HR",
    coords: [77.0266, 28.4595],
    name: {
      de: "Gurgaon Finanz- und Technologiezentrum",
      hu: "Gurgaon pénzügyi és technológiai központ",
      ro: "Centrul financiar și tehnologic Gurgaon",
      en: "Gurgaon Financial and Technology Hub"
    },
    description: {
      de: "Ein führendes Finanz- und Industriezentrum mit den Niederlassungen vieler Fortune-500-Unternehmen.",
      hu: "Vezető pénzügyi és ipari központ, ahol számos Fortune 500-as vállalatnak van irodája.",
      ro: "Un centru financiar și industrial de frunte, cu birouri ale multor companii din Fortune 500.",
      en: "A leading financial and industrial hub with offices of many Fortune 500 companies."
    },
    facts: {
      de: ["Teil der Nationalen Hauptstadtregion (NCR).", "Ein wichtiges Zentrum für Outsourcing-Dienstleistungen."],
      hu: ["A Nemzeti Fővárosi Régió (NCR) része.", "A kiszervezési szolgáltatások fontos központja."],
      ro: ["Parte a Regiunii Capitalei Naționale (NCR).", "Un centru major pentru servicii de outsourcing."],
      en: ["Part of the National Capital Region (NCR).", "A major center for outsourcing services."]
    }, image: "/poi-images/gurgaon-financial-and-technology-hub-economic-v2.webp"},
  {
    id: "khetri-copper-mine-economic-v2",
    type: "mine",
    parent: "IN-RJ",
    coords: [75.7956, 27.9818],
    name: {
      de: "Khetri Kupfermine",
      hu: "Khetri rézbánya",
      ro: "Mina de cupru Khetri",
      en: "Khetri Copper Mine"
    },
    description: {
      de: "Bekannt für seine Kupfervorkommen, ist der Khetri-Gürtel seit der Antike ein wichtiges Kupferabbaugebiet.",
      hu: "Rézlelőhelyeiről ismert Khetri öv az ókor óta fontos rézbányászati terület.",
      ro: "Cunoscută pentru zăcămintele sale de cupru, centura Khetri a fost o zonă importantă de extracție a cuprului încă din antichitate.",
      en: "Known for its copper deposits, the Khetri belt has been an important copper mining area since ancient times."
    },
    facts: {
      de: ["Wird von Hindustan Copper Ltd. betrieben.", "Spielt eine wichtige Rolle in Indiens Kupferproduktion."],
      hu: ["A Hindustan Copper Ltd. üzemelteti.", "Fontos szerepet játszik India réztermelésében."],
      ro: ["Operată de Hindustan Copper Ltd.", "Joacă un rol important în producția de cupru a Indiei."],
      en: ["Operated by Hindustan Copper Ltd.", "Plays a vital role in India's copper production."]
    }
  }
];

