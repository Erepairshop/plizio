// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraChinaEconomicV2: POI[] = [
  {
    id: "yantian-port-economic-v2",
    type: "port",
    parent: "CN-GD",
    coords: [114.285, 22.585],
    name: {
      de: "Hafen Yantian",
      hu: "Yantian kikötő",
      ro: "Portul Yantian",
      en: "Yantian Port"
    },
    description: {
      de: "Einer der verkehrsreichsten Containerhäfen der Welt in Shenzhen, ein Schlüsselknotenpunkt für den globalen Handel.",
      hu: "A világ egyik legforgalmasabb konténerkikötője Sencsenben, a globális kereskedelem kulcsfontosságú csomópontja.",
      ro: "Unul dintre cele mai aglomerate porturi de containere din lume, situat în Shenzhen, un nod cheie pentru comerțul global.",
      en: "One of the busiest container ports in the world, located in Shenzhen, a key hub for global trade."
    },
    facts: {
      de: ["Teil des Hafens von Shenzhen", "Tiefwasserhafen", "Wichtiger Handelspartner für USA und Europa"],
      hu: ["A sencseni kikötő része", "Mélyvízi kikötő", "Fontos kereskedelmi partner az USA és Európa számára"],
      ro: ["Parte a portului Shenzhen", "Port cu apă adâncă", "Partener comercial major pentru SUA și Europa"],
      en: ["Part of the Port of Shenzhen", "Deep-water port", "Major trade partner for the US and Europe"]
    }, image: "/poi-images/yantian-port-economic-v2.webp"},
  {
    id: "zhanjiang-port-economic-v2",
    type: "port",
    parent: "CN-GD",
    coords: [110.35, 21.19],
    name: {
      de: "Hafen Zhanjiang",
      hu: "Zhanjiang kikötő",
      ro: "Portul Zhanjiang",
      en: "Zhanjiang Port"
    },
    description: {
      de: "Ein strategischer Hafen in der Provinz Guangdong, der auf den Umschlag von Rohöl, Eisenerz und Kohle spezialisiert ist.",
      hu: "Stratégiai kikötő Guangdong tartományban, amely kőolaj, vasérc és szén kezelésére szakosodott.",
      ro: "Un port strategic în provincia Guangdong, specializat în manipularea țițeiului, minereului de fier și cărbunelui.",
      en: "A strategic port in Guangdong province, specializing in crude oil, iron ore, and coal handling."
    },
    facts: {
      de: ["Südchinas wichtigster Hafen für Rohöl", "Moderne Logistikanlagen", "Verbindung zum Schienennetz"],
      hu: ["Dél-Kína legfontosabb kőolajkikötője", "Modern logisztikai létesítmények", "Vasúti hálózati kapcsolat"],
      ro: ["Cel mai important port pentru țiței din sudul Chinei", "Facilități logistice moderne", "Conexiune la rețeaua feroviară"],
      en: ["Southern China's main crude oil port", "Modern logistics facilities", "Connected to the rail network"]
    }, image: "/poi-images/zhanjiang-port-economic-v2.webp"},
  {
    id: "shenhua-shendong-coal-mine-economic-v2",
    type: "mine",
    parent: "CN-SN",
    coords: [110.25, 39.45],
    name: {
      de: "Shenhua Shendong Kohlebergwerk",
      hu: "Shenhua Shendong szénbánya",
      ro: "Mina de cărbune Shenhua Shendong",
      en: "Shenhua Shendong Coal Mine"
    },
    description: {
      de: "Eines der größten und technologisch fortschrittlichsten Kohlebergwerke der Welt in der Inneren Mongolei und der Provinz Shaanxi.",
      hu: "A világ egyik legnagyobb és technológiailag legfejlettebb szénbányája Belső-Mongóliában és Shaanxi tartományban.",
      ro: "Una dintre cele mai mari și mai avansate tehnologic mine de cărbune din lume, situată în Mongolia Interioară și provincia Shaanxi.",
      en: "One of the largest and most technologically advanced coal mines in the world, located in Inner Mongolia and Shaanxi province."
    },
    facts: {
      de: ["Hoher Automatisierungsgrad", "Produziert hochwertige Kohle", "Betrieben von der Shenhua Group"],
      hu: ["Magas fokú automatizálás", "Kiváló minőségű szenet termel", "A Shenhua Group üzemelteti"],
      ro: ["Grad ridicat de automatizare", "Produce cărbune de înaltă calitate", "Operată de Shenhua Group"],
      en: ["High degree of automation", "Produces high-quality coal", "Operated by Shenhua Group"]
    }, image: "/poi-images/shenhua-shendong-coal-mine-economic-v2.webp"},
  {
    id: "baosteel-shanghai-economic-v2",
    type: "industry",
    parent: "CN-SH",
    coords: [121.5, 31.4],
    name: {
      de: "Baosteel Werk Shanghai",
      hu: "Baosteel sanghaji gyár",
      ro: "Uzina Baosteel Shanghai",
      en: "Baosteel Shanghai Plant"
    },
    description: {
      de: "Eines der größten Stahlwerke der Welt und der Hauptproduktionsstandort von Baoshan Iron & Steel Co., Ltd.",
      hu: "A világ egyik legnagyobb acélműve, a Baoshan Iron & Steel Co., Ltd. fő gyártóbázisa.",
      ro: "Una dintre cele mai mari oțelării din lume și principalul centru de producție al Baoshan Iron & Steel Co., Ltd.",
      en: "One of the largest steel plants in the world and the main production base of Baoshan Iron & Steel Co., Ltd."
    },
    facts: {
      de: ["Produziert hochwertigen Stahl für die Automobilindustrie", "Führend in der Stahltechnologie", "Wichtiger Exporteur"],
      hu: ["Kiváló minőségű acélt gyárt az autóipar számára", "Vezető az acéltechnológiában", "Jelentős exportőr"],
      ro: ["Produce oțel de înaltă calitate pentru industria auto", "Lider în tehnologia oțelului", "Exportator major"],
      en: ["Produces high-quality steel for the automotive industry", "Leader in steel technology", "Major exporter"]
    }
  },
  {
    id: "three-gorges-dam-economic-v2",
    type: "energy",
    parent: "CN-HB",
    coords: [111.003, 30.823],
    name: {
      de: "Drei-Schluchten-Damm",
      hu: "Három-szurdok gát",
      ro: "Barajul de la cele Trei Defileuri",
      en: "Three Gorges Dam"
    },
    description: {
      de: "Das größte Wasserkraftwerk der Welt, das eine entscheidende Rolle bei der Stromerzeugung und beim Hochwasserschutz in China spielt.",
      hu: "A világ legnagyobb vízerőműve, amely kulcsfontosságú szerepet játszik Kína áramtermelésében és árvízvédelmében.",
      ro: "Cea mai mare hidrocentrală din lume, jucând un rol crucial în generarea de energie și controlul inundațiilor în China.",
      en: "The world's largest hydroelectric power station, playing a crucial role in power generation and flood control in China."
    },
    facts: {
      de: ["Installierte Leistung von 22.500 MW", "Verbessert die Schiffbarkeit des Jangtse", "Umstrittenes Megaprojekt"],
      hu: ["22 500 MW beépített kapacitás", "Javítja a Jangce hajózhatóságát", "Ellentmondásos megaprojekt"],
      ro: ["Capacitate instalată de 22.500 MW", "Îmbunătățește navigația pe râul Yangtze", "Megaproiect controversat"],
      en: ["Installed capacity of 22,500 MW", "Improves navigation on the Yangtze River", "Controversial megaproject"]
    }, image: "/poi-images/three-gorges-dam-economic-v2.webp"},
  {
    id: "yiwu-international-trade-city-economic-v2",
    type: "trade-hub",
    parent: "CN-ZJ",
    coords: [120.06, 29.33],
    name: {
      de: "Yiwu International Trade City",
      hu: "Yiwu Nemzetközi Kereskedelmi Város",
      ro: "Orașul Comercial Internațional Yiwu",
      en: "Yiwu International Trade City"
    },
    description: {
      de: "Der größte Großhandelsmarkt der Welt, der eine riesige Vielfalt an Kleinwaren anbietet und Käufer aus aller Welt anzieht.",
      hu: "A világ legnagyobb kiskereskedelmi piaca, amely a kis árucikkek hatalmas választékát kínálja, és a világ minden tájáról vonzza a vásárlókat.",
      ro: "Cea mai mare piață angro din lume, care oferă o varietate imensă de mărfuri mici și atrage cumpărători din întreaga lume.",
      en: "The world's largest wholesale market for small commodities, offering a huge variety of goods and attracting buyers globally."
    },
    facts: {
      de: ["Über 75.000 Stände", "Auch als „China Commodity City“ bekannt", "Exportiert in über 200 Länder"],
      hu: ["Több mint 75 000 stand", "Más néven „Kínai Áruváros”", "Több mint 200 országba exportál"],
      ro: ["Peste 75.000 de standuri", "Cunoscut și ca „China Commodity City”", "Exportă în peste 200 de țări"],
      en: ["Over 75,000 booths", "Also known as 'China Commodity City'", "Exports to over 200 countries"]
    }, image: "/poi-images/yiwu-international-trade-city-economic-v2.webp"},
  {
    id: "tsmc-nanjing-economic-v2",
    type: "industry",
    parent: "CN-JS",
    coords: [118.79, 32.06],
    name: {
      de: "TSMC Fab Nanjing",
      hu: "TSMC Nankingi gyár",
      ro: "Fabrica TSMC Nanjing",
      en: "TSMC Fab Nanjing"
    },
    description: {
      de: "Eine hochmoderne Halbleiterfabrik (Fab) von Taiwan Semiconductor Manufacturing Company in Nanjing, die fortschrittliche Chips herstellt.",
      hu: "A Taiwan Semiconductor Manufacturing Company (TSMC) legmodernebb félvezetőgyára Nankingban, amely fejlett chipeket gyárt.",
      ro: "O fabrică de semiconductori de ultimă generație (fab) de la Taiwan Semiconductor Manufacturing Company în Nanjing, producând cipuri avansate.",
      en: "A state-of-the-art semiconductor fabrication plant (fab) by Taiwan Semiconductor Manufacturing Company in Nanjing, producing advanced chips."
    },
    facts: {
      de: ["Fokus auf 16nm- und 28nm-Prozesstechnologie", "Wichtiger Teil der globalen Elektronik-Lieferkette", "Strategische Investition"],
      hu: ["A 16 nm-es és 28 nm-es folyamattechnológiára összpontosít", "A globális elektronikai ellátási lánc fontos része", "Stratégiai beruházás"],
      ro: ["Concentrat pe tehnologia de proces de 16nm și 28nm", "Parte importantă a lanțului global de aprovizionare cu electronice", "Investiție strategică"],
      en: ["Focuses on 16nm and 28nm process technology", "Crucial part of the global electronics supply chain", "Strategic investment"]
    }
  },
  {
    id: "datong-coal-industry-economic-v2",
    type: "mine",
    parent: "CN-SX",
    coords: [113.3, 40.09],
    name: {
      de: "Datong Kohleindustrie",
      hu: "Datong Szénipar",
      ro: "Industria Cărbunelui Datong",
      en: "Datong Coal Industry"
    },
    description: {
      de: "Eines der größten Kohleunternehmen in China mit Sitz in Datong, Provinz Shanxi, bekannt für seinen hochwertigen Dampfkohleabbau.",
      hu: "Kína egyik legnagyobb szénipari vállalata, amely Datongban, Shanxi tartományban található, és kiváló minőségű energetikai szénbányászatáról ismert.",
      ro: "Una dintre cele mai mari companii de cărbune din China, cu sediul în Datong, provincia Shanxi, cunoscută pentru extracția de cărbune termic de înaltă calitate.",
      en: "One of the largest coal enterprises in China, based in Datong, Shanxi province, known for its high-quality steam coal mining."
    },
    facts: {
      de: ["Lange Bergbaugeschichte", "Wichtiger Energielieferant für Nordchina", "Auch in der Chemieindustrie tätig"],
      hu: ["Hosszú bányászati múlt", "Észak-Kína fontos energiaellátója", "A vegyiparban is aktív"],
      ro: ["Istorie minieră îndelungată", "Furnizor major de energie pentru nordul Chinei", "Activ și în industria chimică"],
      en: ["Long history of mining", "Major energy supplier for Northern China", "Also involved in chemical industries"]
    }, image: "/poi-images/datong-coal-industry-economic-v2.webp"},
  {
    id: "sinopec-zhenhai-refinery-economic-v2",
    type: "industry",
    parent: "CN-ZJ",
    coords: [121.72, 29.93],
    name: {
      de: "Sinopec Raffinerie Zhenhai",
      hu: "Sinopec Zhenhai Finomító",
      ro: "Rafinăria Sinopec Zhenhai",
      en: "Sinopec Zhenhai Refinery"
    },
    description: {
      de: "Eine der größten und modernsten Ölraffinerien der Welt, betrieben von Sinopec, in Ningbo.",
      hu: "A világ egyik legnagyobb és legmodernebb olajfinomítója, amelyet a Sinopec üzemeltet Ningbóban.",
      ro: "Una dintre cele mai mari și mai moderne rafinării de petrol din lume, operată de Sinopec, în Ningbo.",
      en: "One of the largest and most advanced oil refineries in the world, operated by Sinopec, located in Ningbo."
    },
    facts: {
      de: ["Hohe Komplexität und Effizienz", "Produziert eine breite Palette von Erdölprodukten", "Integriert mit petrochemischen Anlagen"],
      hu: ["Nagy komplexitás és hatékonyság", "Széles körű kőolajtermékeket gyárt", "Petrokémiai üzemekkel integrálva"],
      ro: ["Complexitate și eficiență ridicate", "Produce o gamă largă de produse petroliere", "Integrată cu uzine petrochimice"],
      en: ["High complexity and efficiency", "Produces a wide range of petroleum products", "Integrated with petrochemical plants"]
    }, image: "/poi-images/sinopec-zhenhai-refinery-economic-v2.webp"},
  {
    id: "gansu-wind-farm-economic-v2",
    type: "energy",
    parent: "CN-GS",
    coords: [96.93, 40.23],
    name: {
      de: "Windpark Gansu",
      hu: "Gansu szélerőműpark",
      ro: "Parcul Eolian Gansu",
      en: "Gansu Wind Farm"
    },
    description: {
      de: "Einer der größten Windparks der Welt in der Provinz Gansu, ein Meilenstein für Chinas Engagement für erneuerbare Energien.",
      hu: "A világ egyik legnagyobb szélerőműparkja Gansu tartományban, mérföldkő Kína megújuló energia iránti elkötelezettségében.",
      ro: "Unul dintre cele mai mari parcuri eoliene din lume, situat în provincia Gansu, o piatră de hotar pentru angajamentul Chinei față de energia regenerabilă.",
      en: "One of the largest wind farms in the world, located in Gansu province, a landmark for China's commitment to renewable energy."
    },
    facts: {
      de: ["Besteht aus mehreren großen Windparks", "Nutzt die starken Winde der Wüste Gobi", "Teil des Jiuquan Wind Power Base"],
      hu: ["Több nagy szélerőműparkból áll", "A Góbi-sivatag erős szelét használja ki", "A Jiuquan Szélerőmű Bázis része"],
      ro: ["Constă din mai multe parcuri eoliene mari", "Utilizează vânturile puternice din deșertul Gobi", "Parte a Bazei de Energie Eoliană Jiuquan"],
      en: ["Comprises multiple large-scale wind farms", "Harnesses the strong winds of the Gobi Desert", "Part of the Jiuquan Wind Power Base"]
    }, image: "/poi-images/gansu-wind-farm-economic-v2.webp"},
  {
    id: "jingtang-port-area-economic-v2",
    type: "port",
    parent: "CN-HE",
    coords: [119.02, 39.23],
    name: {
      de: "Hafengebiet Jingtang",
      hu: "Jingtang kikötő terület",
      ro: "Zona Portuară Jingtang",
      en: "Jingtang Port Area"
    },
    description: {
      de: "Ein Teil des Hafens von Tangshan, ein wichtiger Seehafen für den Transport von Kohle, Stahl und Eisenerz in Nordchina.",
      hu: "A Tangshan kikötő része, Észak-Kína egyik fontos tengeri kikötője a szén, acél és vasérc szállítására.",
      ro: "O parte a portului Tangshan, un port maritim major pentru transportul de cărbune, oțel și minereu de fier în nordul Chinei.",
      en: "Part of the Port of Tangshan, a major seaport for coal, steel, and iron ore transport in Northern China."
    },
    facts: {
      de: ["In der Nähe von großen Industriegebieten", "Wichtiger Knotenpunkt für die Stahlindustrie", "Erhebliche Erweiterungen in den letzten Jahren"],
      hu: ["Nagy ipari területek közelében található", "Az acélipar fontos csomópontja", "Jelentős bővítések az elmúlt években"],
      ro: ["Aproape de zone industriale majore", "Nod important pentru industria oțelului", "Extinderi semnificative în ultimii ani"],
      en: ["Located near major industrial zones", "Important hub for the steel industry", "Significant expansions in recent years"]
    }, image: "/poi-images/jingtang-port-area-economic-v2.webp"},
  {
    id: "foxconn-shenzhen-campus-economic-v2",
    type: "industry",
    parent: "CN-GD",
    coords: [114.1, 22.7],
    name: {
      de: "Foxconn Campus Shenzhen",
      hu: "Foxconn Shenzhen Kampusz",
      ro: "Campusul Foxconn Shenzhen",
      en: "Foxconn Shenzhen Campus"
    },
    description: {
      de: "Ein riesiger Produktionskomplex, bekannt für die Montage von Elektronikprodukten für große globale Marken wie Apple. Oft als „Foxconn City“ bezeichnet.",
      hu: "Hatalmas gyártókomplexum, amely olyan nagy globális márkák, mint az Apple elektronikai termékeinek összeszereléséről ismert. Gyakran „Foxconn City”-nek is nevezik.",
      ro: "Un complex de producție masiv, cunoscut pentru asamblarea produselor electronice pentru mărci globale majore precum Apple. Adesea denumit „Orașul Foxconn”.",
      en: "A massive manufacturing complex, famous for assembling electronics for major global brands like Apple. Often referred to as 'Foxconn City'."
    },
    facts: {
      de: ["Einer der größten Arbeitgeber der Region", "Hochsicherheitsanlage", "Symbol für Chinas Rolle in der globalen Fertigung"],
      hu: ["A régió egyik legnagyobb munkaadója", "Szigorúan őrzött létesítmény", "Kína globális gyártásban betöltött szerepének szimbóluma"],
      ro: ["Unul dintre cei mai mari angajatori din regiune", "Unitate de înaltă securitate", "Simbol al rolului Chinei în producția globală"],
      en: ["One of the largest employers in the region", "High-security facility", "Symbol of China's role in global manufacturing"]
    }, image: "/poi-images/foxconn-shenzhen-campus-economic-v2.webp"},
  {
    id: "bayan-obo-mine-economic-v2",
    type: "mine",
    parent: "CN-NM",
    coords: [109.97, 41.78],
    name: {
      de: "Bayan-Obo-Mine",
      hu: "Bayan Obo bánya",
      ro: "Mina Bayan Obo",
      en: "Bayan Obo Mine"
    },
    description: {
      de: "Die weltweit größte bekannte Lagerstätte für Seltene Erden in der Inneren Mongolei, die für die globale High-Tech-Industrie von entscheidender Bedeutung ist.",
      hu: "A világ legnagyobb ismert ritkaföldfém-lelőhelye Belső-Mongóliában, amely kulcsfontosságú a globális high-tech ipar számára.",
      ro: "Cel mai mare zăcământ cunoscut de pământuri rare din lume, situat în Mongolia Interioară, crucial pentru industria globală de înaltă tehnologie.",
      en: "The world's largest known deposit of rare-earth elements, located in Inner Mongolia, crucial for the global high-tech industry."
    },
    facts: {
      de: ["Liefert einen Großteil der weltweiten Seltenerdmetalle", "Auch eine wichtige Quelle für Eisen und Niob", "Komplexe Geologie"],
      hu: ["A világ ritkaföldfém-ellátásának nagy részét adja", "Fontos vas- és nióbiumforrás is", "Összetett geológia"],
      ro: ["Furnizează o mare parte din pământurile rare ale lumii", "De asemenea, o sursă importantă de fier și niobiu", "Geologie complexă"],
      en: ["Supplies a majority of the world's rare-earth metals", "Also a major source of iron and niobium", "Complex geology"]
    }, image: "/poi-images/bayan-obo-mine-economic-v2.webp"},
  {
    id: "huaqiangbei-electronics-market-economic-v2",
    type: "trade-hub",
    parent: "CN-GD",
    coords: [114.08, 22.54],
    name: {
      de: "Elektronikmarkt Huaqiangbei",
      hu: "Huaqiangbei elektronikai piac",
      ro: "Piața de Electronice Huaqiangbei",
      en: "Huaqiangbei Electronics Market"
    },
    description: {
      de: "Ein weltberühmter Elektronik-Großhandelsmarkt in Shenzhen, der alles von Komponenten bis hin zu fertigen Geräten verkauft.",
      hu: "Világhírű elektronikai nagybani piac Sencsenben, ahol az alkatrészektől a kész eszközökig mindent árulnak.",
      ro: "O piață angro de electronice de renume mondial în Shenzhen, care vinde de la componente la dispozitive finite.",
      en: "A world-renowned electronics wholesale market in Shenzhen, selling everything from components to finished devices."
    },
    facts: {
      de: ["Epizentrum für Elektronik-Enthusiasten", "Riesiges Ökosystem von Herstellern und Händlern", "Bekannt für schnelle Prototypenentwicklung"],
      hu: ["Az elektronika rajongóinak epicentruma", "Gyártók és kereskedők hatalmas ökoszisztémája", "A gyors prototípus-készítésről ismert"],
      ro: ["Epicentru pentru pasionații de electronică", "Ecosistem vast de producători și comercianți", "Cunoscut pentru prototipare rapidă"],
      en: ["Epicenter for electronics enthusiasts", "Vast ecosystem of manufacturers and traders", "Known for rapid prototyping"]
    }, image: "/poi-images/huaqiangbei-electronics-market-economic-v2.webp"},
  {
    id: "tianjin-port-economic-v2",
    type: "port",
    parent: "CN-TJ",
    coords: [117.78, 38.98],
    name: {
      de: "Hafen Tianjin",
      hu: "Tiencsini kikötő",
      ro: "Portul Tianjin",
      en: "Port of Tianjin"
    },
    description: {
      de: "Der größte Hafen in Nordchina und das maritime Tor zu Peking. Ein wichtiger Umschlagplatz für Container und Massengüter.",
      hu: "Észak-Kína legnagyobb kikötője és Peking tengeri kapuja. Fontos átrakodási pont konténerek és ömlesztett áruk számára.",
      ro: "Cel mai mare port din nordul Chinei și poarta maritimă către Beijing. Un hub major pentru containere și mărfuri în vrac.",
      en: "The largest port in Northern China and the maritime gateway to Beijing. A major hub for containers and bulk cargo."
    },
    facts: {
      de: ["Wichtiger Teil der Belt and Road Initiative", "Künstlicher Tiefwasserhafen", "Schwerwiegende Explosion im Jahr 2015"],
      hu: ["Az Egy övezet, egy út kezdeményezés fontos része", "Mesterséges mélyvízi kikötő", "Súlyos robbanás 2015-ben"],
      ro: ["Parte importantă a Inițiativei Belt and Road", "Port artificial de apă adâncă", "A suferit o explozie majoră în 2015"],
      en: ["Important part of the Belt and Road Initiative", "Artificial deep-water port", "Suffered a major explosion in 2015"]
    }, image: "/poi-images/tianjin-port-economic-v2.webp"},
  {
    id: "qingdao-haier-industrial-park-economic-v2",
    type: "industry",
    parent: "CN-SD",
    coords: [120.38, 36.06],
    name: {
      de: "Haier Industriepark Qingdao",
      hu: "Haier Ipari Park, Csingtao",
      ro: "Parcul Industrial Haier Qingdao",
      en: "Haier Industrial Park Qingdao"
    },
    description: {
      de: "Ein riesiger Industriepark des Haushaltsgeräteherstellers Haier, der Forschung, Entwicklung und Produktion integriert.",
      hu: "A Haier háztartásigép-gyártó óriásvállalat hatalmas ipari parkja, amely integrálja a kutatást, fejlesztést és gyártást.",
      ro: "Un parc industrial masiv al gigantului de electrocasnice Haier, care integrează cercetarea, dezvoltarea și producția.",
      en: "A massive industrial park by the home appliance giant Haier, integrating research, development, and manufacturing."
    },
    facts: {
      de: ["Fokus auf intelligente Fertigung und IoT", "Zentrale für die globale Expansion von Haier", "Beispiel für chinesische Markenbildung"],
      hu: ["Az intelligens gyártásra és az IoT-re összpontosít", "A Haier globális terjeszkedésének központja", "A kínai márkaépítés példája"],
      ro: ["Accent pe producția inteligentă și IoT", "Hub pentru expansiunea globală a Haier", "Exemplu de branding chinezesc"],
      en: ["Focus on smart manufacturing and IoT", "Hub for Haier's global expansion", "Example of Chinese brand building"]
    }, image: "/poi-images/qingdao-haier-industrial-park-economic-v2.webp"},
  {
    id: "jinchuan-group-mine-economic-v2",
    type: "mine",
    parent: "CN-GS",
    coords: [102.16, 38.48],
    name: {
      de: "Mine der Jinchuan-Gruppe",
      hu: "Jinchuan Csoport bánya",
      ro: "Mina Grupului Jinchuan",
      en: "Jinchuan Group Mine"
    },
    description: {
      de: "Eine der größten Nickel-, Kupfer- und Kobaltminen der Welt in der Provinz Gansu. Ein wichtiger Lieferant für die Batterie- und Legierungsindustrie.",
      hu: "A világ egyik legnagyobb nikkel-, réz- és kobaltbányája Gansu tartományban. Fontos beszállító az akkumulátor- és ötvözetipar számára.",
      ro: "Una dintre cele mai mari mine de nichel, cupru și cobalt din lume, situată în provincia Gansu. Un furnizor vital pentru industriile de baterii și aliaje.",
      en: "One of the world's largest nickel, copper, and cobalt mines, located in Gansu province. A vital supplier for the battery and alloy industries."
    },
    facts: {
      de: ["Chinas größte Nickel- und Kobaltproduktionsbasis", "Umfassender Verhüttungs- und Veredelungskomplex", "Führend in der Metallurgie"],
      hu: ["Kína legnagyobb nikkel- és kobalttermelő bázisa", "Átfogó kohászati és finomító komplexum", "Vezető a kohászatban"],
      ro: ["Cea mai mare bază de producție de nichel și cobalt din China", "Complex cuprinzător de topire și rafinare", "Lider în metalurgie"],
      en: ["China's largest nickel and cobalt production base", "Comprehensive smelting and refining complex", "Leader in metallurgy"]
    }, image: "/poi-images/jinchuan-group-mine-economic-v2.webp"},
  {
    id: "yangshan-deep-water-port-economic-v2",
    type: "port",
    parent: "CN-SH",
    coords: [122.07, 30.62],
    name: {
      de: "Tiefwasserhafen Yangshan",
      hu: "Yangshan mélyvízi kikötő",
      ro: "Portul de Apă Adâncă Yangshan",
      en: "Yangshan Deep-Water Port"
    },
    description: {
      de: "Der größte automatisierte Containerterminal der Welt, Teil des Hafens von Shanghai, auf Inseln vor der Küste gebaut.",
      hu: "A világ legnagyobb automatizált konténerterminálja, a sanghaji kikötő része, a parttól távol eső szigeteken épült.",
      ro: "Cel mai mare terminal de containere automatizat din lume, parte a portului Shanghai, construit pe insule în larg.",
      en: "The world's largest automated container terminal, part of the Port of Shanghai, built on islands offshore."
    },
    facts: {
      de: ["Verbunden mit dem Festland durch die Donghai-Brücke", "Kann die größten Containerschiffe der Welt abfertigen", "Wunder der modernen Ingenieurskunst"],
      hu: ["A Donghai híd köti össze a szárazfölddel", "A világ legnagyobb konténerszállító hajóit is képes fogadni", "A modern mérnöki tudomány csodája"],
      ro: ["Conectat la continent prin Podul Donghai", "Poate gestiona cele mai mari nave de containere din lume", "O minune a ingineriei moderne"],
      en: ["Connected to the mainland by the Donghai Bridge", "Can handle the world's largest container ships", "A marvel of modern engineering"]
    }, image: "/poi-images/yangshan-deep-water-port-economic-v2.webp"},
  {
    id: "catl-ningde-plant-economic-v2",
    type: "industry",
    parent: "CN-FJ",
    coords: [119.52, 26.66],
    name: {
      de: "CATL Werk Ningde",
      hu: "CATL Ningde gyár",
      ro: "Uzina CATL Ningde",
      en: "CATL Ningde Plant"
    },
    description: {
      de: "Der Hauptsitz und eine wichtige Produktionsstätte von Contemporary Amperex Technology Co. Limited (CATL), dem weltweit größten Hersteller von Batterien für Elektrofahrzeuge.",
      hu: "A Contemporary Amperex Technology Co. Limited (CATL), a világ legnagyobb elektromosjármű-akkumulátor gyártójának központja és fontos termelési bázisa.",
      ro: "Sediul central și o bază majoră de producție a Contemporary Amperex Technology Co. Limited (CATL), cel mai mare producător mondial de baterii pentru vehicule electrice.",
      en: "The headquarters and a major production base of Contemporary Amperex Technology Co. Limited (CATL), the world's largest electric vehicle battery manufacturer."
    },
    facts: {
      de: ["Treibt die globale EV-Revolution an", "Führend in der Batterietechnologie-Forschung", "Enormes Wachstum in den letzten Jahren"],
      hu: ["A globális elektromos jármű forradalmat hajtja", "Vezető az akkumulátortechnológiai kutatásban", "Hatalmas növekedés az elmúlt években"],
      ro: ["Conduce revoluția globală a vehiculelor electrice", "Lider în cercetarea tehnologiei bateriilor", "Creștere enormă în ultimii ani"],
      en: ["Powering the global EV revolution", "Leader in battery technology research", "Massive growth in recent years"]
    }, image: "/poi-images/catl-ningde-plant-economic-v2.webp"},
  {
    id: "shengli-oil-field-economic-v2",
    type: "energy",
    parent: "CN-SD",
    coords: [118.47, 37.45],
    name: {
      de: "Shengli-Ölfeld",
      hu: "Shengli olajmező",
      ro: "Câmpul Petrolier Shengli",
      en: "Shengli Oil Field"
    },
    description: {
      de: "Eines der wichtigsten und ältesten Ölfelder Chinas in der Provinz Shandong, betrieben von Sinopec.",
      hu: "Kína egyik legfontosabb és legrégebbi olajmezője Shandong tartományban, a Sinopec üzemeltetésében.",
      ro: "Unul dintre cele mai importante și mai vechi câmpuri petroliere din China, situat în provincia Shandong, operat de Sinopec.",
      en: "One of China's most important and oldest oil fields, located in Shandong province, operated by Sinopec."
    },
    facts: {
      de: ["Entdeckt im Jahr 1961", "Komplexe geologische Formationen", "Wichtiger Beitrag zur Energiesicherheit Chinas"],
      hu: ["1961-ben fedezték fel", "Bonyolult geológiai képződmények", "Fontos hozzájárulás Kína energiabiztonságához"],
      ro: ["Descoperit în 1961", "Formațiuni geologice complexe", "Contribuție majoră la securitatea energetică a Chinei"],
      en: ["Discovered in 1961", "Complex geological formations", "Major contributor to China's energy security"]
    }
  }
];

