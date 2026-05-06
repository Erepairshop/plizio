// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraEgyptEconomicV2: POI[] = [
  {
    id: "alexandria-port-economic-v2",
    type: "port",
    parent: "EG-ALX",
    coords: [29.8719, 31.1927],
    name: { de: "Hafen von Alexandria", hu: "Alexandria Kikötője", ro: "Portul Alexandria", en: "Port of Alexandria" },
    description: { de: "Der wichtigste Seehafen Ägyptens am Mittelmeer.", hu: "Egyiptom legfontosabb tengeri kikötője a Földközi-tengeren.", ro: "Cel mai important port maritim al Egiptului la Marea Mediterană.", en: "Egypt's main seaport on the Mediterranean Sea." },
    facts: {
      de: ["Größter Hafen Ägyptens", "Wichtiger Handelsknotenpunkt"],
      hu: ["Egyiptom legnagyobb kikötője", "Fontos kereskedelmi csomópont"],
      ro: ["Cel mai mare port din Egipt", "Nod comercial important"],
      en: ["Largest port in Egypt", "Major trade hub"]
    }, image: "/poi-images/alexandria-port-economic-v2.webp"},
  {
    id: "suez-port-economic-v2",
    type: "port",
    parent: "EG-SUZ",
    coords: [32.5598, 29.9668],
    name: { de: "Hafen von Suez", hu: "Szuezi Kikötő", ro: "Portul Suez", en: "Port of Suez" },
    description: { de: "Ein bedeutender Hafen am südlichen Eingang des Suezkanals.", hu: "Jelentős kikötő a Szuezi-csatorna déli bejáratánál.", ro: "Un port important la intrarea sudică a Canalului Suez.", en: "A major port at the southern entrance of the Suez Canal." },
    facts: {
      de: ["Liegt am Roten Meer", "Wichtig für den Öltransport"],
      hu: ["A Vörös-tengeren található", "Fontos az olajszállításban"],
      ro: ["Situat la Marea Roșie", "Important pentru transportul de petrol"],
      en: ["Located on the Red Sea", "Important for oil transport"]
    }, image: "/poi-images/suez-port-economic-v2.webp"},
  {
    id: "port-said-economic-v2",
    type: "port",
    parent: "EG-PTS",
    coords: [32.3019, 31.2653],
    name: { de: "Hafen von Port Said", hu: "Port Szaíd-i Kikötő", ro: "Portul Port Said", en: "Port of Port Said" },
    description: { de: "Ein Hafen am nördlichen Ende des Suezkanals.", hu: "Kikötő a Szuezi-csatorna északi végén.", ro: "Un port la capătul nordic al Canalului Suez.", en: "A port at the northern end of the Suez Canal." },
    facts: {
      de: ["Gegründet 1859", "Wichtiger Transitpunkt"],
      hu: ["1859-ben alapították", "Fontos tranzitpont"],
      ro: ["Fondat în 1859", "Punct de tranzit important"],
      en: ["Founded in 1859", "Key transit point"]
    }, image: "/poi-images/port-said-economic-v2.webp"},
  {
    id: "damietta-port-economic-v2",
    type: "port",
    parent: "EG-DT",
    coords: [31.7606, 31.4514],
    name: { de: "Hafen von Damietta", hu: "Damietta Kikötője", ro: "Portul Damietta", en: "Port of Damietta" },
    description: { de: "Einer der ältesten Häfen Ägyptens am Nildelta.", hu: "Egyiptom egyik legrégebbi kikötője a Nílus-deltánál.", ro: "Unul dintre cele mai vechi porturi din Egipt, în Delta Nilului.", en: "One of the oldest ports in Egypt located on the Nile Delta." },
    facts: {
      de: ["Großes Containerterminal", "Exportiert Agrarprodukte"],
      hu: ["Nagy konténerterminál", "Mezőgazdasági termékeket exportál"],
      ro: ["Terminal de containere mare", "Exportă produse agricole"],
      en: ["Large container terminal", "Exports agricultural products"]
    }, image: "/poi-images/damietta-port-economic-v2.webp"},
  {
    id: "safaga-port-economic-v2",
    type: "port",
    parent: "EG-BA",
    coords: [33.9389, 26.7469],
    name: { de: "Hafen von Safaga", hu: "Szafaga Kikötő", ro: "Portul Safaga", en: "Safaga Port" },
    description: { de: "Ein wichtiger Hafen am Roten Meer, bekannt für den Phosphat-Export.", hu: "Fontos kikötő a Vörös-tengeren, a foszfátexportról ismert.", ro: "Un port important la Marea Roșie, cunoscut pentru exportul de fosfați.", en: "A major port on the Red Sea known for phosphate exports." },
    facts: {
      de: ["Phosphat-Exporteur", "Fährhafen nach Saudi-Arabien"],
      hu: ["Foszfát exportőr", "Kompkikötő Szaúd-Arábiába"],
      ro: ["Exportator de fosfați", "Port de feribot spre Arabia Saudită"],
      en: ["Phosphate exporter", "Ferry port to Saudi Arabia"]
    }, image: "/poi-images/safaga-port-economic-v2.webp"},
  {
    id: "sokhna-port-economic-v2",
    type: "port",
    parent: "EG-SUZ",
    coords: [32.3387, 29.6265],
    name: { de: "Hafen Ain Sokhna", hu: "Ain Sokhna Kikötő", ro: "Portul Ain Sokhna", en: "Ain Sokhna Port" },
    description: { de: "Ein moderner Tiefseehafen nahe dem Suezkanal.", hu: "Modern mélytengeri kikötő a Szuezi-csatorna közelében.", ro: "Un port modern de mare adâncime lângă Canalul Suez.", en: "A modern deep-sea port near the Suez Canal." },
    facts: {
      de: ["Wichtig für Asien-Europa-Handel", "Schnell wachsender Hafen"],
      hu: ["Fontos az Ázsia-Európa kereskedelemben", "Gyorsan növekvő kikötő"],
      ro: ["Important pentru comerțul Asia-Europa", "Port în creștere rapidă"],
      en: ["Key for Asia-Europe trade", "Fast-growing port"]
    }, image: "/poi-images/sokhna-port-economic-v2.webp"},
  {
    id: "helwan-iron-steel-economic-v2",
    type: "industry",
    parent: "EG-C",
    coords: [31.3323, 29.8394],
    name: { de: "Helwan Stahlwerk", hu: "Helwan Acélmű", ro: "Uzina de Oțel Helwan", en: "Helwan Iron and Steel Works" },
    description: { de: "Eines der größten Stahlwerke Ägyptens in Kairo.", hu: "Egyiptom egyik legnagyobb acélműve Kairóban.", ro: "Una dintre cele mai mari uzine siderurgice din Egipt, în Cairo.", en: "One of the largest steelworks in Egypt, located in Cairo." },
    facts: {
      de: ["Historisch bedeutend", "Produzierte für den Inlandsmarkt"],
      hu: ["Történelmi jelentőségű", "A belföldi piacra termelt"],
      ro: ["Importantă istoric", "A produs pentru piața internă"],
      en: ["Historically significant", "Produced for the domestic market"]
    }, image: "/poi-images/helwan-iron-steel-economic-v2.webp"},
  {
    id: "zohr-gas-field-economic-v2",
    type: "industry",
    parent: "EG-PTS",
    coords: [32.1158, 31.8491],
    name: { de: "Zohr-Erdgasfeld", hu: "Zohr Gázmező", ro: "Câmpul Gazeifer Zohr", en: "Zohr Gas Field" },
    description: { de: "Das größte Erdgasfeld im Mittelmeer vor der Küste Ägyptens.", hu: "A Földközi-tenger legnagyobb gázmezője Egyiptom partjainál.", ro: "Cel mai mare câmp de gaze naturale din Marea Mediterană, în largul coastei Egiptului.", en: "The largest natural gas field in the Mediterranean Sea, off the coast of Egypt." },
    facts: {
      de: ["Entdeckt 2015", "Enorme Reserven"],
      hu: ["2015-ben fedezték fel", "Hatalmas tartalékok"],
      ro: ["Descoperit în 2015", "Rezerve enorme"],
      en: ["Discovered in 2015", "Enormous reserves"]
    }, image: "/poi-images/zohr-gas-field-economic-v2.webp"},
  {
    id: "sukari-gold-mine-economic-v2",
    type: "industry",
    parent: "EG-BA",
    coords: [34.7291, 24.9546],
    name: { de: "Sukari-Goldmine", hu: "Sukari Aranybánya", ro: "Mina de Aur Sukari", en: "Sukari Gold Mine" },
    description: { de: "Eine große Goldmine in der östlichen Wüste nahe dem Roten Meer.", hu: "Egy nagy aranybánya a keleti sivatagban a Vörös-tenger közelében.", ro: "O mare mină de aur în deșertul estic, lângă Marea Roșie.", en: "A large gold mine in the Eastern Desert near the Red Sea." },
    facts: {
      de: ["Produziert seit 2009", "Erste moderne Goldmine in Ägypten"],
      hu: ["2009 óta termel", "Az első modern aranybánya Egyiptomban"],
      ro: ["Produce din 2009", "Prima mină modernă de aur din Egipt"],
      en: ["Producing since 2009", "First modern gold mine in Egypt"]
    }, image: "/poi-images/sukari-gold-mine-economic-v2.webp"},
  {
    id: "alexandria-petroleum-economic-v2",
    type: "industry",
    parent: "EG-ALX",
    coords: [29.8926, 31.1578],
    name: { de: "Erdölraffinerie Alexandria", hu: "Alexandriai Kőolajfinomító", ro: "Rafinăria de Petrol Alexandria", en: "Alexandria Petroleum Refinery" },
    description: { de: "Eine der größten Erdölraffinerien in Ägypten.", hu: "Egyiptom egyik legnagyobb kőolajfinomítója.", ro: "Una dintre cele mai mari rafinării de petrol din Egipt.", en: "One of the largest petroleum refineries in Egypt." },
    facts: {
      de: ["Wichtig für die Treibstoffversorgung", "Nahe dem Hafen"],
      hu: ["Fontos az üzemanyag-ellátásban", "A kikötő közelében"],
      ro: ["Importantă pentru aprovizionarea cu combustibil", "Aproape de port"],
      en: ["Crucial for fuel supply", "Located near the port"]
    }, image: "/poi-images/alexandria-petroleum-economic-v2.webp"},
  {
    id: "abu-qir-fertilizer-economic-v2",
    type: "industry",
    parent: "EG-ALX",
    coords: [30.0638, 31.3167],
    name: { de: "Abu Qir Düngemittelwerk", hu: "Abu Qir Műtrágyagyár", ro: "Fabrica de Îngrășăminte Abu Qir", en: "Abu Qir Fertilizers Company" },
    description: { de: "Ein führender Hersteller von Stickstoffdüngern in Ägypten.", hu: "Vezető nitrogénműtrágya-gyártó Egyiptomban.", ro: "Un producător de top de îngrășăminte cu azot din Egipt.", en: "A leading producer of nitrogen fertilizers in Egypt." },
    facts: {
      de: ["Exportiert weltweit", "Wichtig für die Landwirtschaft"],
      hu: ["Világszerte exportál", "Fontos a mezőgazdaság számára"],
      ro: ["Exportă la nivel mondial", "Importantă pentru agricultură"],
      en: ["Exports globally", "Crucial for agriculture"]
    }, image: "/poi-images/abu-qir-fertilizer-economic-v2.webp"},
  {
    id: "borg-el-arab-industrial-economic-v2",
    type: "industry",
    parent: "EG-ALX",
    coords: [29.575, 30.8753],
    name: { de: "Industriegebiet Borg El Arab", hu: "Borg El Arab Ipari Zóna", ro: "Zona Industrială Borg El Arab", en: "Borg El Arab Industrial Zone" },
    description: { de: "Eine bedeutende Industriezone südwestlich von Alexandria.", hu: "Jelentős ipari övezet Alexandriától délnyugatra.", ro: "O zonă industrială majoră la sud-vest de Alexandria.", en: "A major industrial zone southwest of Alexandria." },
    facts: {
      de: ["Zentrum für Textilindustrie", "Viele internationale Firmen"],
      hu: ["A textilipar központja", "Sok nemzetközi cég"],
      ro: ["Centru pentru industria textilă", "Multe companii internaționale"],
      en: ["Hub for textile industry", "Many international companies"]
    }, image: "/poi-images/borg-el-arab-industrial-economic-v2.webp"},
  {
    id: "mahalla-textile-economic-v2",
    type: "industry",
    parent: "EG-GH",
    coords: [31.1643, 30.9702],
    name: { de: "Misr Spinnerei und Weberei", hu: "Misr Fonó és Szövő", ro: "Filatura și Țesătoria Misr", en: "Misr Spinning and Weaving" },
    description: { de: "Die größte Textilfabrik im Nahen Osten, in El Mahalla El Kubra.", hu: "A Közel-Kelet legnagyobb textilgyára, El Mahalla El Kubrában.", ro: "Cea mai mare fabrică de textile din Orientul Mijlociu, în El Mahalla El Kubra.", en: "The largest textile factory in the Middle East, located in El Mahalla El Kubra." },
    facts: {
      de: ["Beschäftigt zehntausende Arbeiter", "Gegründet 1927"],
      hu: ["Több tízezer munkást foglalkoztat", "1927-ben alapították"],
      ro: ["Angajează zeci de mii de muncitori", "Fondată în 1927"],
      en: ["Employs tens of thousands of workers", "Founded in 1927"]
    }, image: "/poi-images/mahalla-textile-economic-v2.webp"},
  {
    id: "aswan-dam-hydroelectric-economic-v2",
    type: "industry",
    parent: "EG-ASN",
    coords: [32.8872, 23.9702],
    name: { de: "Wasserkraftwerk Assuan-Staudamm", hu: "Asszuáni-gát Vízerőmű", ro: "Hidrocentrala Barajul Aswan", en: "Aswan Dam Hydroelectric Plant" },
    description: { de: "Ein massives Wasserkraftwerk am Assuan-Staudamm, das den Großteil des ägyptischen Stroms erzeugt.", hu: "Hatalmas vízerőmű az Asszuáni-gáton, amely Egyiptom áramának nagy részét termeli.", ro: "O hidrocentrală masivă la Barajul Aswan, care generează o mare parte din energia electrică a Egiptului.", en: "A massive hydroelectric plant at the Aswan Dam generating a large portion of Egypt's electricity." },
    facts: {
      de: ["Kapazität von 2100 MW", "In den 1970ern fertiggestellt"],
      hu: ["2100 MW kapacitás", "Az 1970-es években fejezték be"],
      ro: ["Capacitate de 2100 MW", "Finalizată în anii 1970"],
      en: ["2100 MW capacity", "Completed in the 1970s"]
    }, image: "/poi-images/aswan-dam-hydroelectric-economic-v2.webp"},
  {
    id: "benban-solar-park-economic-v2",
    type: "industry",
    parent: "EG-ASN",
    coords: [32.7314, 24.4533],
    name: { de: "Benban Solarpark", hu: "Benban Napelempark", ro: "Parcul Solar Benban", en: "Benban Solar Park" },
    description: { de: "Einer der größten Solarparks der Welt nahe Assuan.", hu: "A világ egyik legnagyobb napelemparkja Asszuán közelében.", ro: "Unul dintre cele mai mari parcuri solare din lume, lângă Aswan.", en: "One of the largest solar parks in the world, located near Aswan." },
    facts: {
      de: ["Beinhaltet über 30 Solarkraftwerke", "Teil der erneuerbaren Energiewende"],
      hu: ["Több mint 30 naperőművet foglal magába", "A megújuló energiaátmenet része"],
      ro: ["Conține peste 30 de centrale solare", "Parte a tranziției energetice regenerabile"],
      en: ["Contains over 30 solar power plants", "Part of renewable energy transition"]
    }, image: "/poi-images/benban-solar-park-economic-v2.webp"},
  {
    id: "zait-wind-farm-economic-v2",
    type: "industry",
    parent: "EG-BA",
    coords: [33.5658, 27.9158],
    name: { de: "Gabal el-Zait Windpark", hu: "Gabal el-Zait Szélerőmű", ro: "Parcul Eolian Gabal el-Zait", en: "Gabal el-Zait Wind Farm" },
    description: { de: "Einer der größten Windparks im Nahen Osten, gelegen am Golf von Suez.", hu: "A Közel-Kelet egyik legnagyobb szélerőműparkja, a Szuezi-öböl partján.", ro: "Unul dintre cele mai mari parcuri eoliene din Orientul Mijlociu, situat în Golful Suez.", en: "One of the largest wind farms in the Middle East, located on the Gulf of Suez." },
    facts: {
      de: ["Nutzt starke Küstenwinde", "Hunderte Windturbinen"],
      hu: ["Erős parti szeleket használ ki", "Több száz szélturbina"],
      ro: ["Folosește vânturile puternice de coastă", "Sute de turbine eoliene"],
      en: ["Utilizes strong coastal winds", "Hundreds of wind turbines"]
    }, image: "/poi-images/zait-wind-farm-economic-v2.webp"},
  {
    id: "idku-lng-terminal-economic-v2",
    type: "industry",
    parent: "EG-BH",
    coords: [30.2989, 31.3197],
    name: { de: "Idku LNG-Terminal", hu: "Idku LNG Terminál", ro: "Terminalul LNG Idku", en: "Idku LNG Terminal" },
    description: { de: "Eine Anlage zur Verflüssigung von Erdgas an der Mittelmeerküste.", hu: "Földgáz cseppfolyósítására szolgáló létesítmény a Földközi-tenger partján.", ro: "O instalație pentru lichefierea gazelor naturale pe coasta mediteraneană.", en: "A facility for the liquefaction of natural gas on the Mediterranean coast." },
    facts: {
      de: ["Wichtig für den Export", "Verarbeitet Gas aus dem Nildelta"],
      hu: ["Fontos az exporthoz", "A Nílus-delta gázát dolgozza fel"],
      ro: ["Important pentru export", "Procesează gaz din Delta Nilului"],
      en: ["Crucial for export", "Processes gas from the Nile Delta"]
    }, image: "/poi-images/idku-lng-terminal-economic-v2.webp"},
  {
    id: "el-dakheila-port-economic-v2",
    type: "port",
    parent: "EG-ALX",
    coords: [29.8058, 31.1397],
    name: { de: "Hafen von El-Dakheila", hu: "El-Dakheila Kikötő", ro: "Portul El-Dakheila", en: "El-Dakheila Port" },
    description: { de: "Eine natürliche Erweiterung des Hafens von Alexandria mit tiefem Wasser.", hu: "Az alexandriai kikötő természetes kiterjesztése, mély vízzel.", ro: "O extensie naturală a portului Alexandria cu apă adâncă.", en: "A natural extension of the Port of Alexandria with deep water." },
    facts: {
      de: ["Spezialisiert auf Schüttgut", "Nahe dem Stahlwerk"],
      hu: ["Ömlesztett árura specializálódott", "Az acélmű közelében"],
      ro: ["Specializat pe mărfuri în vrac", "Lângă uzina de oțel"],
      en: ["Specializes in bulk cargo", "Close to the steel mill"]
    }, image: "/poi-images/el-dakheila-port-economic-v2.webp"},
  {
    id: "10th-of-ramadan-industrial-economic-v2",
    type: "industry",
    parent: "EG-SHR",
    coords: [31.745, 30.3017],
    name: { de: "Industriegebiet 10. Ramadan", hu: "Ramadán 10. Ipari Zóna", ro: "Zona Industrială 10 Ramadan", en: "10th of Ramadan Industrial City" },
    description: { de: "Eine der größten und ältesten neuen Industriestädte in Ägypten.", hu: "Egyiptom egyik legnagyobb és legrégebbi új iparvárosa.", ro: "Unul dintre cele mai mari și mai vechi noi orașe industriale din Egipt.", en: "One of the largest and oldest new industrial cities in Egypt." },
    facts: {
      de: ["Viele Fabriken ansässig", "Wichtiger Wirtschaftsstandort"],
      hu: ["Sok gyár található itt", "Fontos gazdasági helyszín"],
      ro: ["Multe fabrici rezidente", "Locație economică importantă"],
      en: ["Home to many factories", "Key economic location"]
    }, image: "/poi-images/10th-of-ramadan-industrial-economic-v2.webp"},
  {
    id: "6th-of-october-industrial-economic-v2",
    type: "industry",
    parent: "EG-GZ",
    coords: [30.936, 29.932],
    name: { de: "Industriegebiet 6. Oktober", hu: "Október 6. Ipari Zóna", ro: "Zona Industrială 6 Octombrie", en: "6th of October Industrial City" },
    description: { de: "Ein wichtiger Industriestandort westlich von Kairo mit Lebensmittel- und Autoindustrie.", hu: "Fontos ipari központ Kairótól nyugatra, élelmiszer- és autóiparral.", ro: "O importantă zonă industrială la vest de Cairo, cu industrie alimentară și auto.", en: "A major industrial hub west of Cairo, featuring food and automotive industries." },
    facts: {
      de: ["BMW-Montagewerk", "Lebensmittelverarbeitung"],
      hu: ["BMW összeszerelő üzem", "Élelmiszer-feldolgozás"],
      ro: ["Fabrică de asamblare BMW", "Procesarea alimentelor"],
      en: ["BMW assembly plant", "Food processing"]
    }, image: "/poi-images/6th-of-october-industrial-economic-v2.webp"},
  {
    id: "nuweiba-port-economic-v2",
    type: "port",
    parent: "EG-JS",
    coords: [34.6653, 28.9819],
    name: { de: "Hafen von Nuweiba", hu: "Nuweiba Kikötő", ro: "Portul Nuweiba", en: "Port of Nuweiba" },
    description: { de: "Ein wichtiger Fährhafen im Golf von Akaba zur Verbindung mit Jordanien.", hu: "Fontos kompkikötő az Akabai-öbölben a Jordániával való kapcsolathoz.", ro: "Un port de feribot important în Golful Aqaba pentru conectarea cu Iordania.", en: "An important ferry port in the Gulf of Aqaba for connection to Jordan." },
    facts: {
      de: ["Verbindet Ägypten und Akaba", "Wichtig für Pilger"],
      hu: ["Összeköti Egyiptomot és Akabát", "Fontos a zarándokok számára"],
      ro: ["Conectează Egiptul și Aqaba", "Important pentru pelerini"],
      en: ["Connects Egypt and Aqaba", "Important for pilgrims"]
    }, image: "/poi-images/nuweiba-port-economic-v2.webp"},
  {
    id: "hurghada-port-economic-v2",
    type: "port",
    parent: "EG-BA",
    coords: [33.8239, 27.2341],
    name: { de: "Hafen von Hurghada", hu: "Hurghada Kikötő", ro: "Portul Hurghada", en: "Port of Hurghada" },
    description: { de: "Neben dem Tourismus auch ein Hafen für Passagier- und Frachtverkehr am Roten Meer.", hu: "A turizmus mellett a Vörös-tenger utas- és teherforgalmának egyik kikötője is.", ro: "Pe lângă turism, un port pentru trafic de pasageri și mărfuri la Marea Roșie.", en: "Alongside tourism, also a port for passenger and freight traffic on the Red Sea." },
    facts: {
      de: ["Zentrum des Tourismus", "Fährverbindungen nach Sharm El-Sheikh"],
      hu: ["A turizmus központja", "Kompkapcsolatok Sharm El-Sheikh-be"],
      ro: ["Centrul turismului", "Conexiuni de feribot spre Sharm El-Sheikh"],
      en: ["Tourism hub", "Ferry connections to Sharm El-Sheikh"]
    }, image: "/poi-images/hurghada-port-economic-v2.webp"},
  {
    id: "arish-port-economic-v2",
    type: "port",
    parent: "EG-SIN",
    coords: [33.8119, 31.1394],
    name: { de: "Hafen von Al-Arisch", hu: "Al-Arish Kikötő", ro: "Portul Al-Arish", en: "Port of Arish" },
    description: { de: "Ein Hafen an der Mittelmeerküste der Sinai-Halbinsel.", hu: "Kikötő a Sínai-félsziget Földközi-tengeri partján.", ro: "Un port pe coasta mediteraneană a Peninsulei Sinai.", en: "A port on the Mediterranean coast of the Sinai Peninsula." },
    facts: {
      de: ["Fischereihafen", "Wird derzeit ausgebaut"],
      hu: ["Halászkikötő", "Jelenleg bővítik"],
      ro: ["Port de pescuit", "În prezent în curs de extindere"],
      en: ["Fishing port", "Currently being expanded"]
    }, image: "/poi-images/arish-port-economic-v2.webp"},
  {
    id: "ezz-steel-suez-economic-v2",
    type: "industry",
    parent: "EG-SUZ",
    coords: [32.3789, 29.8731],
    name: { de: "Ezz Steel Suez", hu: "Ezz Acélmű Szuez", ro: "Ezz Steel Suez", en: "Ezz Steel Suez" },
    description: { de: "Ein großes Stahlwerk eines der führenden Stahlproduzenten in der Region.", hu: "Egy nagy acélmű a régió egyik vezető acélgyártójától.", ro: "O mare uzină de oțel a unuia dintre cei mai importanți producători de oțel din regiune.", en: "A large steel plant of one of the leading steel producers in the region." },
    facts: {
      de: ["Produziert Flachstahl", "Großer Exporteur"],
      hu: ["Laposacélt gyárt", "Nagy exportőr"],
      ro: ["Produce oțel plat", "Mare exportator"],
      en: ["Produces flat steel", "Major exporter"]
    }, image: "/poi-images/ezz-steel-suez-economic-v2.webp"},
  {
    id: "al-ameerya-petroleum-economic-v2",
    type: "industry",
    parent: "EG-ALX",
    coords: [29.9322, 31.0267],
    name: { de: "Al-Amiriya Erdölraffinerie", hu: "Al-Amiriya Kőolajfinomító", ro: "Rafinăria de Petrol Al-Amiriya", en: "Al-Amiriya Petroleum Refinery" },
    description: { de: "Eine weitere bedeutende Raffinerie in der Region Alexandria.", hu: "Egy másik jelentős finomító Alexandria régiójában.", ro: "O altă rafinărie majoră în regiunea Alexandria.", en: "Another major refinery in the Alexandria region." },
    facts: {
      de: ["Hohe Verarbeitungskapazität", "Wichtig für petrochemische Industrie"],
      hu: ["Magas feldolgozó kapacitás", "Fontos a petrolkémiai ipar számára"],
      ro: ["Capacitate mare de procesare", "Importantă pentru industria petrochimică"],
      en: ["High processing capacity", "Important for petrochemical industry"]
    }, image: "/poi-images/al-ameerya-petroleum-economic-v2.webp"},
  {
    id: "suez-oil-processing-economic-v2",
    type: "industry",
    parent: "EG-SUZ",
    coords: [32.5317, 29.9619],
    name: { de: "Suez Erdölraffinerie", hu: "Szuezi Kőolajfinomító", ro: "Rafinăria de Petrol Suez", en: "Suez Oil Processing Company" },
    description: { de: "Eines der ältesten und größten Erdölverarbeitungsunternehmen Ägyptens.", hu: "Egyiptom egyik legrégebbi és legnagyobb kőolaj-feldolgozó vállalata.", ro: "Una dintre cele mai vechi și mai mari companii de procesare a petrolului din Egipt.", en: "One of the oldest and largest oil processing companies in Egypt." },
    facts: {
      de: ["Liegt am Kanal", "Verarbeitet heimisches und importiertes Öl"],
      hu: ["A csatorna mellett található", "Hazai és import olajat dolgoz fel"],
      ro: ["Situată pe canal", "Procesează petrol intern și importat"],
      en: ["Located on the canal", "Processes domestic and imported oil"]
    }, image: "/poi-images/suez-oil-processing-economic-v2.webp"},
  {
    id: "sadat-city-industrial-economic-v2",
    type: "industry",
    parent: "EG-MNF",
    coords: [30.5056, 30.3803],
    name: { de: "Sadat-Stadt Industriezone", hu: "Sadat City Ipari Zóna", ro: "Zona Industrială Orașul Sadat", en: "Sadat City Industrial Zone" },
    description: { de: "Eine wichtige Industriezone, fokussiert auf Schwer- und Leichtindustrie.", hu: "Fontos ipari zóna, amely a nehéz- és könnyűiparra összpontosít.", ro: "O zonă industrială importantă, axată pe industria grea și ușoară.", en: "An important industrial zone focused on heavy and light industry." },
    facts: {
      de: ["Viele Zement- und Keramikwerke", "Zwischen Kairo und Alexandria"],
      hu: ["Sok cement- és kerámiagyár", "Kairó és Alexandria között"],
      ro: ["Multe fabrici de ciment și ceramică", "Între Cairo și Alexandria"],
      en: ["Many cement and ceramics plants", "Between Cairo and Alexandria"]
    }, image: "/poi-images/sadat-city-industrial-economic-v2.webp"},
  {
    id: "sharm-el-sheikh-port-economic-v2",
    type: "port",
    parent: "EG-JS",
    coords: [34.2869, 27.8606],
    name: { de: "Hafen von Sharm El-Sheikh", hu: "Sharm El-Sheikh Kikötő", ro: "Portul Sharm El-Sheikh", en: "Port of Sharm El-Sheikh" },
    description: { de: "Ein Hafen, der hauptsächlich Yachten und Kreuzfahrtschiffe bedient.", hu: "Kikötő, amely főként jachtokat és tengerjáró hajókat szolgál ki.", ro: "Un port care deservește în principal iahturi și nave de croazieră.", en: "A port mainly serving yachts and cruise ships." },
    facts: {
      de: ["Internationales Touristenziel", "Im Süden der Sinai-Halbinsel"],
      hu: ["Nemzetközi turisztikai célpont", "A Sínai-félsziget déli részén"],
      ro: ["Destinație turistică internațională", "În sudul Peninsulei Sinai"],
      en: ["International tourist destination", "In the south of the Sinai Peninsula"]
    }, image: "/poi-images/sharm-el-sheikh-port-economic-v2.webp"},
  {
    id: "maghara-coal-mine-economic-v2",
    type: "industry",
    parent: "EG-SIN",
    coords: [33.3667, 30.7],
    name: { de: "Maghara-Kohlemine", hu: "Maghara Szénbánya", ro: "Mina de Cărbune Maghara", en: "Maghara Coal Mine" },
    description: { de: "Ein bedeutendes Kohlebergwerk auf der Sinai-Halbinsel.", hu: "Jelentős szénbánya a Sínai-félszigeten.", ro: "O mină importantă de cărbune în Peninsula Sinai.", en: "A significant coal mine on the Sinai Peninsula." },
    facts: {
      de: ["Wurde reaktiviert", "Liefert Kohle für die Industrie"],
      hu: ["Újraindították", "Szenet szállít az iparnak"],
      ro: ["A fost reactivată", "Furnizează cărbune pentru industrie"],
      en: ["Was reactivated", "Supplies coal for industry"]
    }, image: "/poi-images/maghara-coal-mine-economic-v2.webp"},
  {
    id: "abu-zaabal-fertilizer-economic-v2",
    type: "industry",
    parent: "EG-KB",
    coords: [31.4011, 30.2522],
    name: { de: "Abu Zaabal Düngemittel", hu: "Abu Zaabal Műtrágyagyár", ro: "Fabrica de Îngrășăminte Abu Zaabal", en: "Abu Zaabal Fertilizer" },
    description: { de: "Ein traditionsreicher Hersteller von Phosphatdüngern in der Nähe von Kairo.", hu: "Nagy múltú foszfátműtrágya-gyártó Kairó közelében.", ro: "Un producător tradițional de îngrășăminte fosfatice lângă Cairo.", en: "A traditional producer of phosphate fertilizers near Cairo." },
    facts: {
      de: ["Produziert Superphosphat", "Gegründet in den 1940ern"],
      hu: ["Szuperfoszfátot gyárt", "Az 1940-es években alapították"],
      ro: ["Produce superfosfat", "Fondată în anii 1940"],
      en: ["Produces superphosphate", "Founded in the 1940s"]
    }
  }
];

