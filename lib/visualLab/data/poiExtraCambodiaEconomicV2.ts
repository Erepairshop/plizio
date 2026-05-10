import type { POI } from "./poi";

export const poiExtraCambodiaEconomicV2: POI[] = [
  {
    id: "sihanoukville-autonomous-port-economic-v2",
    type: "port",
    parent: "KH-18",
    coords: [103.5042, 10.6358],
    name: {
      de: "Autonomer Hafen Sihanoukville",
      hu: "Sihanoukville Autonóm Kikötő",
      ro: "Portul Autonom Sihanoukville",
      en: "Sihanoukville Autonomous Port"
    },
    description: {
      de: "Der wichtigste Tiefseehafen Kambodschas, der den Großteil des internationalen Seehandels des Landes abwickelt.",
      hu: "Kambodzsa legfontosabb mélyvízi kikötője, amely az ország nemzetközi tengeri kereskedelmének nagy részét bonyolítja le.",
      ro: "Principalul port de apă adâncă al Cambodgiei, care gestionează majoritatea comerțului maritim internațional al țării.",
      en: "Cambodia's primary deep-water port, handling the majority of the country's international maritime trade."
    },
    facts: {
      de: ["Wichtigster Exporthafen Kambodschas.", "Direkter Zugang zum Golf von Thailand."],
      hu: ["Kambodzsa legfontosabb exportkikötője.", "Közvetlen hozzáférés a Thai-öbölhöz."],
      ro: ["Principalul port de export al Cambodgiei.", "Acces direct la Golful Thailandei."],
      en: ["Cambodia's main export port.", "Direct access to the Gulf of Thailand."]
    }, image: "/poi-images/sihanoukville-autonomous-port-economic-v2.webp"},
  {
    id: "phnom-penh-autonomous-port-economic-v2",
    type: "port",
    parent: "KH-12",
    coords: [104.9225, 11.5761],
    name: {
      de: "Autonomer Hafen Phnom Penh",
      hu: "Phnompen Autonóm Kikötő",
      ro: "Portul Autonom Phnom Penh",
      en: "Phnom Penh Autonomous Port"
    },
    description: {
      de: "Ein wichtiger Binnenhafen am Mekong, der die Hauptstadt mit internationalen Handelsrouten verbindet.",
      hu: "Fontos folyami kikötő a Mekongon, amely a fővárost köti össze a nemzetközi kereskedelmi útvonalakkal.",
      ro: "Un port fluvial major pe râul Mekong, care conectează capitala de rutele comerciale internaționale.",
      en: "A major inland port on the Mekong River, connecting the capital to international trade routes."
    },
    facts: {
      de: ["Liegt am Zusammenfluss von Tonle Sap und Mekong.", "Zweitgrößter Hafen des Landes."],
      hu: ["A Tonlé Szap és a Mekong összefolyásánál fekszik.", "Az ország második legnagyobb kikötője."],
      ro: ["Situat la confluența râurilor Tonle Sap și Mekong.", "Al doilea cel mai mare port din țară."],
      en: ["Located at the confluence of the Tonle Sap and Mekong rivers.", "The second largest port in the country."]
    }, image: "/poi-images/phnom-penh-autonomous-port-economic-v2.webp"},
  {
    id: "phnom-penh-sez-economic-v2",
    type: "industry",
    parent: "KH-12",
    coords: [104.8150, 11.5450],
    name: {
      de: "Sonderwirtschaftszone Phnom Penh",
      hu: "Phnompen Különleges Gazdasági Övezet",
      ro: "Zona Economică Specială Phnom Penh",
      en: "Phnom Penh Special Economic Zone"
    },
    description: {
      de: "Eine der größten Sonderwirtschaftszonen Kambodschas, die zahlreiche internationale Produktionsstätten beherbergt.",
      hu: "Kambodzsa egyik legnagyobb különleges gazdasági övezete, amely számos nemzetközi gyártóüzemnek ad otthont.",
      ro: "Una dintre cele mai mari zone economice speciale din Cambodgia, găzduind numeroase unități de producție internaționale.",
      en: "One of Cambodia's largest special economic zones, housing numerous international manufacturing facilities."
    },
    facts: {
      de: ["Zieht Investoren aus aller Welt an.", "Schwerpunkt auf Leichtindustrie und Elektronik."],
      hu: ["A világ minden tájáról vonzza a befektetőket.", "Főként könnyűiparra és elektronikára fókuszál."],
      ro: ["Atrage investitori din întreaga lume.", "Se concentrează pe industria ușoară și electronică."],
      en: ["Attracts investors from around the world.", "Focuses on light industry and electronics."]
    }, image: "/poi-images/phnom-penh-sez-economic-v2.webp"},
  {
    id: "sihanoukville-sez-economic-v2",
    type: "industry",
    parent: "KH-18",
    coords: [103.6269, 10.6719],
    name: {
      de: "Sonderwirtschaftszone Sihanoukville",
      hu: "Sihanoukville Különleges Gazdasági Övezet",
      ro: "Zona Economică Specială Sihanoukville",
      en: "Sihanoukville Special Economic Zone"
    },
    description: {
      de: "Eine strategisch wichtige Industriezone, die stark von chinesischen Investitionen im Rahmen der Neuen Seidenstraße profitiert.",
      hu: "Stratégiailag fontos ipari övezet, amely jelentős mértékben profitál a kínai Egy Övezet Egy Út kezdeményezés befektetéseiből.",
      ro: "O zonă industrială strategică ce beneficiază masiv de investițiile chineze din inițiativa Belt and Road.",
      en: "A strategically important industrial zone that benefits heavily from Chinese Belt and Road initiative investments."
    },
    facts: {
      de: ["Nahe dem größten Hafen des Landes.", "Fokus auf Textilien und Maschinenbau."],
      hu: ["Az ország legnagyobb kikötője közelében található.", "Textiliparra és gépgyártásra fókuszál."],
      ro: ["Situată lângă cel mai mare port al țării.", "Axată pe textile și construcția de mașini."],
      en: ["Located near the country's largest port.", "Focuses on textiles and machinery."]
    }, image: "/poi-images/sihanoukville-sez-economic-v2.webp"},
  {
    id: "manhattan-sez-bavet-economic-v2",
    type: "industry",
    parent: "KH-20",
    coords: [106.1822, 11.0825],
    name: {
      de: "Manhattan Sonderwirtschaftszone",
      hu: "Manhattan Különleges Gazdasági Övezet",
      ro: "Zona Economică Specială Manhattan",
      en: "Manhattan Special Economic Zone"
    },
    description: {
      de: "Die erste Sonderwirtschaftszone Kambodschas, gelegen an der vietnamesischen Grenze in Bavet.",
      hu: "Kambodzsa első különleges gazdasági övezete, amely a vietnámi határnál, Bavetben található.",
      ro: "Prima zonă economică specială din Cambodgia, situată la granița cu Vietnamul, în Bavet.",
      en: "Cambodia's first special economic zone, located on the Vietnamese border in Bavet."
    },
    facts: {
      de: ["Wichtiger Handelsstützpunkt nach Vietnam.", "Bekannt für Schuh- und Textilproduktion."],
      hu: ["Fontos kereskedelmi bázis Vietnám felé.", "Cipő- és textilgyártásáról ismert."],
      ro: ["Bază comercială importantă către Vietnam.", "Cunoscută pentru producția de încălțăminte și textile."],
      en: ["Important trade base towards Vietnam.", "Known for shoe and textile production."]
    }, image: "/poi-images/manhattan-sez-bavet-economic-v2.webp"},
  {
    id: "koh-kong-sez-economic-v2",
    type: "industry",
    parent: "KH-09",
    coords: [102.9900, 11.6150],
    name: {
      de: "Sonderwirtschaftszone Koh Kong",
      hu: "Koh Kong Különleges Gazdasági Övezet",
      ro: "Zona Economică Specială Koh Kong",
      en: "Koh Kong Special Economic Zone"
    },
    description: {
      de: "Ein aufstrebendes Industriegebiet an der thailändischen Grenze, das den grenzüberschreitenden Handel fördert.",
      hu: "Feltörekvő ipari terület a thai határnál, amely elősegíti a határon átnyúló kereskedelmet.",
      ro: "O zonă industrială emergentă la granița cu Thailanda, care promovează comerțul transfrontalier.",
      en: "An emerging industrial area on the Thai border, promoting cross-border trade."
    },
    facts: {
      de: ["Profitiert von der Nähe zu Thailand.", "Wichtig für die lokale Wirtschaftsentwicklung."],
      hu: ["Profitál a Thaiföldhöz való közelségből.", "Fontos a helyi gazdaságfejlesztés szempontjából."],
      ro: ["Beneficiază de apropierea de Thailanda.", "Importantă pentru dezvoltarea economică locală."],
      en: ["Benefits from its proximity to Thailand.", "Important for local economic development."]
    }, image: "/poi-images/koh-kong-sez-economic-v2.webp"},
  {
    id: "neak-loeung-port-economic-v2",
    type: "port",
    parent: "KH-14",
    coords: [105.2817, 11.2586],
    name: {
      de: "Hafen Neak Loeung",
      hu: "Neak Loeung Kikötő",
      ro: "Portul Neak Loeung",
      en: "Neak Loeung Port"
    },
    description: {
      de: "Ein wichtiger Binnenhafen, der den Güterverkehr auf dem Mekong zwischen Phnom Penh und Vietnam erleichtert.",
      hu: "Fontos folyami kikötő, amely megkönnyíti a teherforgalmat a Mekongon Phnompen és Vietnám között.",
      ro: "Un port fluvial important care facilitează traficul de mărfuri pe Mekong, între Phnom Penh și Vietnam.",
      en: "An important inland port facilitating freight traffic on the Mekong between Phnom Penh and Vietnam."
    },
    facts: {
      de: ["Verbindet Kambodscha und Vietnam.", "Schlüsselpunkt für Agrarexporte."],
      hu: ["Összeköti Kambodzsát és Vietnámot.", "Mezőgazdasági export kulcsfontosságú pontja."],
      ro: ["Conectează Cambodgia și Vietnamul.", "Punct cheie pentru exporturile agricole."],
      en: ["Connects Cambodia and Vietnam.", "Key point for agricultural exports."]
    }, image: "/poi-images/neak-loeung-port-economic-v2.webp"},
  {
    id: "lower-sesan-2-dam-economic-v2",
    type: "energy",
    parent: "KH-19",
    coords: [106.2625, 13.5511],
    name: {
      de: "Unterer Sesan-2-Staudamm",
      hu: "Alsó-Sesan-2 Gát",
      ro: "Barajul Sesan 2 Inferior",
      en: "Lower Sesan 2 Dam"
    },
    description: {
      de: "Ein massives Wasserkraftwerksprojekt, das einen erheblichen Teil des kambodschanischen Strombedarfs deckt.",
      hu: "Hatalmas vízerőmű projekt, amely a kambodzsai villamosenergia-igény jelentős részét fedezi.",
      ro: "Un proiect masiv de hidrocentrală care acoperă o parte semnificativă a necesarului de electricitate al Cambodgiei.",
      en: "A massive hydropower project that meets a significant portion of Cambodia's electricity needs."
    },
    facts: {
      de: ["Größter Staudamm Kambodschas.", "Erzeugt 400 Megawatt Strom."],
      hu: ["Kambodzsa legnagyobb gátja.", "400 megawatt áramot termel."],
      ro: ["Cel mai mare baraj din Cambodgia.", "Generează 400 de megawați de energie electrică."],
      en: ["Cambodia's largest dam.", "Generates 400 megawatts of electricity."]
    }, image: "/poi-images/lower-sesan-2-dam-economic-v2.webp"},
  {
    id: "kamchay-dam-economic-v2",
    type: "energy",
    parent: "KH-07",
    coords: [104.1200, 10.7183],
    name: {
      de: "Kamchay-Staudamm",
      hu: "Kamchay Gát",
      ro: "Barajul Kamchay",
      en: "Kamchay Dam"
    },
    description: {
      de: "Das erste große Wasserkraftwerk des Landes, finanziert durch chinesische Investitionen, im Kampot-Gebiet.",
      hu: "Az ország első nagy vízerőműve, amelyet kínai befektetésekből finanszíroztak Kampot térségében.",
      ro: "Prima mare hidrocentrală a țării, finanțată prin investiții chineze, în regiunea Kampot.",
      en: "The country's first major hydropower plant, financed by Chinese investments, in the Kampot area."
    },
    facts: {
      de: ["Wurde 2011 in Betrieb genommen.", "Liefert Strom für Süd-Kambodscha."],
      hu: ["2011-ben helyezték üzembe.", "Dél-Kambodzsa áramellátását biztosítja."],
      ro: ["A fost pusă în funcțiune în 2011.", "Furnizează electricitate pentru sudul Cambodgiei."],
      en: ["Commissioned in 2011.", "Supplies electricity to southern Cambodia."]
    }, image: "/poi-images/kamchay-dam-economic-v2.webp"},
  {
    id: "kirirom-1-hydropower-economic-v2",
    type: "energy",
    parent: "KH-09",
    coords: [104.0433, 11.3125],
    name: {
      de: "Wasserkraftwerk Kirirom 1",
      hu: "Kirirom 1 Vízerőmű",
      ro: "Hidrocentrala Kirirom 1",
      en: "Kirirom 1 Hydropower Plant"
    },
    description: {
      de: "Ein kleineres, aber historisch wichtiges Wasserkraftwerk in den Kardamombergen, das Phnom Penh mit Strom versorgt.",
      hu: "Kisebb, de történelmileg fontos vízerőmű a Kardamom-hegységben, amely Phnompent látja el árammal.",
      ro: "O hidrocentrală mai mică, dar importantă istoric, în Munții Cardamom, care alimentează Phnom Penh cu energie electrică.",
      en: "A smaller but historically important hydropower plant in the Cardamom Mountains, supplying power to Phnom Penh."
    },
    facts: {
      de: ["Eines der ältesten Kraftwerke des Landes.", "Nutzt das Wasser des Kirirom-Plateaus."],
      hu: ["Az ország egyik legrégebbi erőműve.", "A Kirirom-fennsík vizét hasznosítja."],
      ro: ["Una dintre cele mai vechi centrale electrice din țară.", "Folosește apa de pe platoul Kirirom."],
      en: ["One of the country's oldest power plants.", "Utilizes water from the Kirirom Plateau."]
    }, image: "/poi-images/kirirom-1-hydropower-economic-v2.webp"},
  {
    id: "tatay-hydropower-economic-v2",
    type: "energy",
    parent: "KH-09",
    coords: [103.0900, 11.5833],
    name: {
      de: "Wasserkraftwerk Tatay",
      hu: "Tatay Vízerőmű",
      ro: "Hidrocentrala Tatay",
      en: "Tatay Hydropower Plant"
    },
    description: {
      de: "Ein modernes Wasserkraftprojekt am Tatay-Fluss in der Provinz Koh Kong, das zur nationalen Energiesicherheit beiträgt.",
      hu: "Modern vízerőmű projekt a Tatay folyón, Koh Kong tartományban, amely hozzájárul a nemzeti energiabiztonsághoz.",
      ro: "Un proiect hidroenergetic modern pe râul Tatay din provincia Koh Kong, contribuind la securitatea energetică națională.",
      en: "A modern hydropower project on the Tatay River in Koh Kong Province, contributing to national energy security."
    },
    facts: {
      de: ["Produziert saubere Energie.", "Kapazität von 246 Megawatt."],
      hu: ["Tiszta energiát termel.", "Kapacitása 246 megawatt."],
      ro: ["Produce energie curată.", "Capacitate de 246 de megawați."],
      en: ["Produces clean energy.", "Capacity of 246 megawatts."]
    }, image: "/poi-images/tatay-hydropower-economic-v2.webp"},
  {
    id: "stung-atay-hydropower-economic-v2",
    type: "energy",
    parent: "KH-15",
    coords: [103.1119, 12.0675],
    name: {
      de: "Wasserkraftwerk Stung Atay",
      hu: "Stung Atay Vízerőmű",
      ro: "Hidrocentrala Stung Atay",
      en: "Stung Atay Hydropower Plant"
    },
    description: {
      de: "Eine weitere wichtige Anlage zur Stromerzeugung in den unzugänglichen Gebieten der Pursat-Provinz.",
      hu: "Egy másik fontos áramtermelő létesítmény Pursat tartomány nehezen megközelíthető részein.",
      ro: "O altă instalație importantă de generare a energiei în zonele inaccesibile ale provinciei Pursat.",
      en: "Another important power generation facility in the remote areas of Pursat Province."
    },
    facts: {
      de: ["Reduziert die Abhängigkeit von Importstrom.", "Teil des nationalen Netzausbaus."],
      hu: ["Csökkenti az import áramtól való függőséget.", "A nemzeti hálózatfejlesztés része."],
      ro: ["Reduce dependența de energia electrică importată.", "Face parte din extinderea rețelei naționale."],
      en: ["Reduces dependence on imported electricity.", "Part of the national grid expansion."]
    }, image: "/poi-images/stung-atay-hydropower-economic-v2.webp"},
  {
    id: "okvau-gold-mine-economic-v2",
    type: "mine",
    parent: "KH-11",
    coords: [106.9100, 12.8300],
    name: {
      de: "Okvau-Goldmine",
      hu: "Okvau Aranybánya",
      ro: "Mina de Aur Okvau",
      en: "Okvau Gold Mine"
    },
    description: {
      de: "Kambodschas erste moderne, im kommerziellen Maßstab betriebene Goldmine in der Provinz Mondulkiri.",
      hu: "Kambodzsa első modern, kereskedelmi léptékű aranybányája Mondulkiri tartományban.",
      ro: "Prima mină de aur modernă, la scară comercială din Cambodgia, situată în provincia Mondulkiri.",
      en: "Cambodia's first modern, commercial-scale gold mine in Mondulkiri Province."
    },
    facts: {
      de: ["Produziert Tausende Unzen Gold pro Jahr.", "Betrieben von einem australischen Unternehmen."],
      hu: ["Évente több ezer uncia aranyat termel.", "Egy ausztrál vállalat üzemelteti."],
      ro: ["Produce mii de uncii de aur pe an.", "Operată de o companie australiană."],
      en: ["Produces thousands of ounces of gold per year.", "Operated by an Australian company."]
    }, image: "/poi-images/okvau-gold-mine-economic-v2.webp"},
  {
    id: "phnom-dek-iron-mine-economic-v2",
    type: "mine",
    parent: "KH-13",
    coords: [105.0200, 13.5100],
    name: {
      de: "Phnom Dek Eisenmine",
      hu: "Phnom Dek Vasércbánya",
      ro: "Mina de Fier Phnom Dek",
      en: "Phnom Dek Iron Mine"
    },
    description: {
      de: "Eine der größten bekannten Eisenerzlagerstätten des Landes, deren Abbau die Schwerindustrie unterstützen soll.",
      hu: "Az ország egyik legnagyobb ismert vasérclelőhelye, amelynek kitermelése a nehézipart hivatott támogatni.",
      ro: "Unul dintre cele mai mari zăcăminte cunoscute de minereu de fier din țară, a cărui exploatare este menită să sprijine industria grea.",
      en: "One of the country's largest known iron ore deposits, whose extraction is intended to support heavy industry."
    },
    facts: {
      de: ["Wichtig für die Stahlproduktion.", "Zieht ausländische Investitionen an."],
      hu: ["Fontos az acélgyártás szempontjából.", "Külföldi befektetéseket vonz."],
      ro: ["Importantă pentru producția de oțel.", "Atrage investiții străine."],
      en: ["Important for steel production.", "Attracts foreign investments."]
    }, image: "/poi-images/phnom-dek-iron-mine-economic-v2.webp"},
  {
    id: "kampot-cement-plant-economic-v2",
    type: "industry",
    parent: "KH-07",
    coords: [104.2800, 10.6600],
    name: {
      de: "Zementfabrik Kampot",
      hu: "Kampot Cementgyár",
      ro: "Fabrica de Ciment Kampot",
      en: "Kampot Cement Plant"
    },
    description: {
      de: "Ein großes Zementwerk, das den Bauboom im Land mit lokal produzierten Baumaterialien versorgt.",
      hu: "Nagy cementgyár, amely helyben gyártott építőanyagokkal látja el az ország építőipari fellendülését.",
      ro: "O mare fabrică de ciment care furnizează materiale de construcție produse local pentru boom-ul imobiliar din țară.",
      en: "A large cement plant supplying the country's construction boom with locally produced building materials."
    },
    facts: {
      de: ["Verringert Zementimporte.", "Nutzt lokale Kalksteinvorkommen."],
      hu: ["Csökkenti a cementimportot.", "Helyi mészkőlelőhelyeket használ."],
      ro: ["Reduce importurile de ciment.", "Utilizează zăcăminte locale de calcar."],
      en: ["Reduces cement imports.", "Uses local limestone deposits."]
    }, image: "/poi-images/kampot-cement-plant-economic-v2.webp"},
  {
    id: "bavet-border-trade-hub-economic-v2",
    type: "trade-hub",
    parent: "KH-20",
    coords: [106.1750, 11.0769],
    name: {
      de: "Grenzhub Bavet",
      hu: "Bavet Határmenti Kereskedelmi Központ",
      ro: "Centrul Comercial de Frontieră Bavet",
      en: "Bavet Border Trade Hub"
    },
    description: {
      de: "Ein geschäftiges Handelszentrum an der Grenze zu Vietnam, berühmt für Casinos und grenzüberschreitenden Warenaustausch.",
      hu: "Forgalmas kereskedelmi központ a vietnámi határnál, amely kaszinóiról és a határon átnyúló árucseréről híres.",
      ro: "Un centru comercial plin de viață la granița cu Vietnamul, faimos pentru cazinouri și schimbul transfrontalier de mărfuri.",
      en: "A bustling trade hub on the Vietnamese border, famous for casinos and cross-border exchange of goods."
    },
    facts: {
      de: ["Wichtiger Transitpunkt für Güter.", "Zieht viele vietnamesische Besucher an."],
      hu: ["Fontos tranzitpont az áruk számára.", "Sok vietnámi látogatót vonz."],
      ro: ["Punct de tranzit important pentru mărfuri.", "Atrage mulți vizitatori vietnamezi."],
      en: ["Important transit point for goods.", "Attracts many Vietnamese visitors."]
    }, image: "/poi-images/bavet-border-trade-hub-economic-v2.webp"},
  {
    id: "poipet-border-trade-hub-economic-v2",
    type: "trade-hub",
    parent: "KH-01",
    coords: [102.5572, 13.6592],
    name: {
      de: "Grenzhub Poipet",
      hu: "Poipet Határmenti Kereskedelmi Központ",
      ro: "Centrul Comercial de Frontieră Poipet",
      en: "Poipet Border Trade Hub"
    },
    description: {
      de: "Der wichtigste Grenzübergang nach Thailand, ein Zentrum für Handel, Logistik und Unterhaltung.",
      hu: "A legfontosabb határátkelő Thaiföld felé, a kereskedelem, logisztika és szórakoztatás központja.",
      ro: "Cel mai important punct de trecere a frontierei către Thailanda, un centru pentru comerț, logistică și divertisment.",
      en: "The most important border crossing to Thailand, a center for trade, logistics, and entertainment."
    },
    facts: {
      de: ["Verbindet Bangkok und Phnom Penh.", "Riesiges Volumen an täglichem Warentransit."],
      hu: ["Összeköti Bangkokot és Phnompent.", "Hatalmas napi árutranzit volumen."],
      ro: ["Conectează Bangkok și Phnom Penh.", "Volum uriaș de tranzit zilnic de mărfuri."],
      en: ["Connects Bangkok and Phnom Penh.", "Huge volume of daily goods transit."]
    }, image: "/poi-images/poipet-border-trade-hub-economic-v2.webp"},
  {
    id: "chakrey-ting-cement-factory-economic-v2",
    type: "industry",
    parent: "KH-07",
    coords: [104.2400, 10.6500],
    name: {
      de: "Zementfabrik Chakrey Ting",
      hu: "Chakrey Ting Cementgyár",
      ro: "Fabrica de Ciment Chakrey Ting",
      en: "Chakrey Ting Cement Factory"
    },
    description: {
      de: "Eine der ältesten und größten Zementfabriken in Kambodscha, maßgeblich an der Infrastrukturentwicklung beteiligt.",
      hu: "Kambodzsa egyik legrégebbi és legnagyobb cementgyára, amely jelentős szerepet játszik az infrastruktúra fejlesztésében.",
      ro: "Una dintre cele mai vechi și mai mari fabrici de ciment din Cambodgia, implicată major în dezvoltarea infrastructurii.",
      en: "One of the oldest and largest cement factories in Cambodia, instrumental in infrastructure development."
    },
    facts: {
      de: ["Modernisierte Produktionslinien.", "Wichtiger Arbeitgeber in der Region Kampot."],
      hu: ["Modernizált gyártósorok.", "Fontos munkáltató a Kampot régióban."],
      ro: ["Linii de producție modernizate.", "Angajator important în regiunea Kampot."],
      en: ["Modernized production lines.", "Important employer in the Kampot region."]
    }, image: "/poi-images/chakrey-ting-cement-factory-economic-v2.webp"},
  {
    id: "kampot-seaport-economic-v2",
    type: "port",
    parent: "KH-07",
    coords: [104.1489, 10.5892],
    name: {
      de: "Seehafen Kampot",
      hu: "Kampot Tengeri Kikötő",
      ro: "Portul Maritim Kampot",
      en: "Kampot Seaport"
    },
    description: {
      de: "Ein neuerer Seehafen, der entworfen wurde, um den wachsenden maritimen Handel im Süden des Landes zu unterstützen.",
      hu: "Egy újabb tengeri kikötő, amelyet az ország déli részén növekvő tengeri kereskedelem támogatására terveztek.",
      ro: "Un port maritim mai nou, conceput pentru a sprijini comerțul maritim în creștere din sudul țării.",
      en: "A newer seaport designed to support the growing maritime trade in the south of the country."
    },
    facts: {
      de: ["Entlastet den Hafen von Sihanoukville.", "Zieht internationale Frachtschiffe an."],
      hu: ["Tehermentesíti Sihanoukville kikötőjét.", "Nemzetközi teherhajókat vonz."],
      ro: ["Degrevează portul Sihanoukville.", "Atrage nave de marfă internaționale."],
      en: ["Relieves the port of Sihanoukville.", "Attracts international cargo ships."]
    }, image: "/poi-images/kampot-seaport-economic-v2.webp"},
  {
    id: "sihanoukville-coal-power-plant-economic-v2",
    type: "energy",
    parent: "KH-18",
    coords: [103.5858, 10.7303],
    name: {
      de: "Kohlekraftwerk Sihanoukville",
      hu: "Sihanoukville Széntüzelésű Erőmű",
      ro: "Centrala pe Cărbune Sihanoukville",
      en: "Sihanoukville Coal Power Plant"
    },
    description: {
      de: "Ein großes Wärmekraftwerk an der Küste, das eine konstante Energieversorgung für die wachsende Industrie gewährleistet.",
      hu: "Nagy tengerparti hőerőmű, amely folyamatos energiaellátást biztosít a növekvő ipar számára.",
      ro: "O mare centrală termoelectrică pe coastă, care asigură o alimentare constantă cu energie pentru industria în creștere.",
      en: "A large coastal thermal power plant ensuring a constant energy supply for the growing industry."
    },
    facts: {
      de: ["Bedeutender Stromlieferant für Küstenstädte.", "Teil umstrittener Energieprojekte."],
      hu: ["Jelentős áramszállító a tengerparti városoknak.", "Vitatott energiaprojektek része."],
      ro: ["Furnizor major de energie electrică pentru orașele de coastă.", "Face parte din proiecte energetice controversate."],
      en: ["Major electricity supplier for coastal cities.", "Part of controversial energy projects."]
    }
  }
];
