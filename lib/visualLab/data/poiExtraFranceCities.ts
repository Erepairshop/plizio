import type { POI } from "./poi";

export const poiExtraFranceCities: POI[] = [
  // All batches combined - Final
  {
    id: "city-grenoble-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [5.7245, 45.1885],
    name: { de: "Grenoble", hu: "Grenoble", ro: "Grenoble", en: "Grenoble" },
    description: {
      de: "Grenoble, bekannt als die 'Hauptstadt der Alpen', ist ein bedeutendes europäisches Zentrum für Wissenschaft und Technologie, umgeben von Bergen.",
      hu: "Grenoble, az 'Alpok fővárosa', a tudomány és technológia fontos európai központja, hegyekkel körülvéve.",
      ro: "Grenoble, cunoscut ca 'Capitala Alpilor', este un centru european major pentru știință și tehnologie, înconjurat de munți.",
      en: "Grenoble, known as the 'Capital of the Alps,' is a major European center for science and technology, surrounded by mountains."
    },
    facts: {
      de: ["Gastgeber der Olympischen Winterspiele 1968.", "Zentrum für Nuklearforschung.", "Seilbahn zur Bastille Festung."],
      hu: ["Az 1968-as téli olimpia házigazdája.", "Atomkutatási központ.", "Felvonó a Bastille erődhöz."],
      ro: ["Gazda Jocurilor Olimpice de iarnă din 1968.", "Centru de cercetare nucleară.", "Telecabină către Fortăreața Bastilia."],
      en: ["Host of the 1968 Winter Olympics.", "Center for nuclear research.", "Cable car to the Bastille fortress."]
    }, image: "/poi-images/city-grenoble-extra.webp",
    descriptionAdvanced: {
      de: "Grenoble liegt in Südostfrankreich am Fuße der Alpen am Zusammenfluss der Flüsse Isère und Drac. Die Stadt ist ein führendes europäisches Zentrum für Wissenschaft und Technologie, insbesondere in den Bereichen Mikroelektronik und Kernforschung. Die Festung Bastille, die über der Stadt thront, bietet einen Panoramablick auf die umliegenden Gebirgsmassive.",
      hu: "Grenoble Délkelet-Franciaországban, az Alpok lábánál fekszik, az Isère és a Drac folyók találkozásánál. A város a tudomány és a technológia egyik vezető európai központja, különösen a mikroelektronika és a nukleáris kutatások területén. A város fölé magasodó Bastille-erőd panorámás kilátást nyújt a környező hegységekre.",
      ro: "Grenoble este situat în sud-estul Franței, la poalele Alpilor, la confluența râurilor Isère și Drac. Orașul este un centru european lider în știință și tehnologie, în special în microelectronică și cercetare nucleară. Fortăreața Bastille, situată deasupra orașului, oferă o vedere panoramică asupra masivelor muntoase înconjurătoare.",
      en: "Grenoble is located in southeastern France at the foot of the Alps, at the confluence of the Isère and Drac rivers. The city is a leading European center for science and technology, particularly in microelectronics and nuclear research. The Bastille fortress, perched above the city, offers a panoramic view of the surrounding mountain ranges.",
    },
    factsAdvanced: {
      de: ["Gastgeber der Winterolympiade 1968", "Bevölkerung von etwa 160.000 Einwohnern", "Erste Seilbahn der Welt im Jahr 1934", "Sitz des Synchrotrons ESRF", "Hauptstadt der historischen Region Dauphiné", "Liegt auf 214 Metern Meereshöhe"],
      hu: ["Az 1968-as téli olimpia házigazdája", "Lakossága körülbelül 160 000 fő", "A világ első libegője itt épült 1934-ben", "Az ESRF szinkrotron székhelye", "A történelmi Dauphiné régió fővárosa", "214 méterrel fekszik a tengerszint felett"],
      ro: ["Gazda Jocurilor Olimpice de Iarnă din 1968", "Populație de aproximativ 160.000 locuitori", "Prima telecabină din lume în 1934", "Sediul sincrotronului ESRF", "Capitala regiunii istorice Dauphiné", "Situat la 214 metri altitudine"],
      en: ["Host of the 1968 Winter Olympics", "Population of about 160,000 residents", "First urban cable car in the world in 1934", "Home to the ESRF synchrotron", "Capital of the historic Dauphiné region", "Elevation is 214 meters above sea level"],
    },
  },
  {
    id: "city-strasbourg-extra",
    type: "city",
    parent: "FR-GES",
    coords: [7.7521, 48.5734],
    name: { de: "Straßburg", hu: "Strasbourg", ro: "Strasbourg", en: "Strasbourg" },
    description: {
      de: "Straßburg ist der offizielle Sitz des Europäischen Parlaments und ein Symbol der deutsch-französischen Aussöhnung. Die Altstadt Grande Île ist UNESCO-Weltkulturerbe.",
      hu: "Strasbourg az Európai Parlament hivatalos székhelye és a francia-német megbékélés szimbóluma. A Grande Île történelmi központja az UNESCO Világörökség része.",
      ro: "Strasbourg este sediul oficial al Parlamentului European și un simbol al reconcilierii franco-germane. Centrul său istoric, Grande Île, este un sit al Patrimoniului Mondial UNESCO.",
      en: "Strasbourg is the official seat of the European Parliament and a symbol of Franco-German reconciliation. Its historic center, the Grande Île, is a UNESCO World Heritage site."
    },
    facts: {
      de: ["Sitz des Europäischen Parlaments.", "Historisches Viertel 'Petite France'.", "Berühmter Weihnachtsmarkt."],
      hu: ["Az Európai Parlament székhelye.", "A 'Petite France' történelmi negyed.", "Híres karácsonyi vásár."],
      ro: ["Sediul Parlamentului European.", "Cartierul istoric 'Petite France'.", "Târg de Crăciun renumit."],
      en: ["Seat of the European Parliament.", "Historic 'Petite France' quarter.", "Famous Christmas market."]
    }, image: "/poi-images/city-strasbourg-extra.webp",
    descriptionAdvanced: {
      de: "Straßburg ist die Hauptstadt der Region Grand Est im Osten Frankreichs und Sitz zahlreicher europäischer Institutionen. Die historische Altstadt Grande Île gehört zum UNESCO-Weltkulturerbe und wird von der gotischen Kathedrale Notre-Dame geprägt. Die Stadt vereint französische und deutsche Einflüsse in Architektur und Kultur, was sich besonders im Viertel La Petite France zeigt.",
      hu: "Strasbourg Kelet-Franciaországban a Grand Est régió fővárosa, és számos európai intézmény székhelye. A történelmi óváros, a Grande Île az UNESCO Világörökség része, amelynek képét a gótikus Notre-Dame székesegyház uralja. A város a francia és a német hatásokat ötvözi az építészetben és a kultúrában, ami különösen a La Petite France negyedben látszik.",
      ro: "Strasbourg este capitala regiunii Grand Est din estul Franței și sediul a numeroase instituții europene. Centrul istoric Grande Île face parte din Patrimoniul Mondial UNESCO și este dominat de catedrala gotică Notre-Dame. Orașul îmbină influențele franceze și germane în arhitectură și cultură, vizibile în cartierul La Petite France.",
      en: "Strasbourg is the capital of the Grand Est region in eastern France and the seat of numerous European institutions. The historic center, Grande Île, is a UNESCO World Heritage site dominated by the Gothic Notre-Dame Cathedral. The city blends French and German influences in its architecture and culture, notably seen in the La Petite France district.",
    },
    factsAdvanced: {
      de: ["Sitz des Europäischen Parlaments", "Kathedrale wurde 1439 vollendet", "Grande Île seit 1988 Weltkulturerbe", "Johannes Gutenberg erfand hier den Buchdruck", "Münster ist 142 Meter hoch", "Liegt am linken Rheinufer"],
      hu: ["Az Európai Parlament székhelye", "A székesegyház 1439-ben készült el", "A Grande Île 1988 óta Világörökség", "Johannes Gutenberg itt találta fel a könyvnyomtatást", "A dóm tornya 142 méter magas", "A Rajna bal partján fekszik"],
      ro: ["Sediul Parlamentului European", "Catedrala a fost finalizată în 1439", "Grande Île în patrimoniul UNESCO din 1988", "Johannes Gutenberg a inventat tiparul aici", "Turnul catedralei are 142 de metri înălțime", "Situat pe malul stâng al Rinului"],
      en: ["Seat of the European Parliament", "Cathedral was completed in 1439", "Grande Île is a World Heritage site since 1988", "Johannes Gutenberg invented printing here", "The cathedral spire is 142 meters high", "Located on the left bank of the Rhine"],
    },
  },
  {
    id: "industry-airbus-toulouse-extra",
    type: "industry",
    parent: "FR-OCC",
    coords: [1.3636, 43.6291],
    name: { de: "Airbus-Werk Toulouse", hu: "Airbus gyár, Toulouse", ro: "Fabrica Airbus Toulouse", en: "Airbus Factory Toulouse" },
    description: {
      de: "Die Endmontagelinie von Airbus in Toulouse ist eine der größten Industrieanlagen Europas und der Geburtsort vieler Passagierflugzeuge, einschließlich des A380.",
      hu: "Az Airbus toulouse-i végszerelő sora Európa egyik legnagyobb ipari létesítménye, számos utasszállító repülőgép, köztük az A380 szülőhelye.",
      ro: "Linia de asamblare finală Airbus din Toulouse este una dintre cele mai mari facilități industriale din Europa și locul de naștere al multor avioane de pasageri, inclusiv A380.",
      en: "The Airbus final assembly line in Toulouse is one of the largest industrial facilities in Europe and the birthplace of many passenger aircraft, including the A380."
    },
    facts: {
      de: ["Hauptsitz von Airbus.", "Produktion des A320, A330, A350.", "Besuchertouren 'Let's visit Airbus' verfügbar."],
      hu: ["Az Airbus főhadiszállása.", "A320, A330, A350 gyártása.", "Látogatói túrák 'Let's visit Airbus' néven."],
      ro: ["Sediul central al Airbus.", "Producția de A320, A330, A350.", "Tururi pentru vizitatori 'Let's visit Airbus' disponibile."],
      en: ["Headquarters of Airbus.", "Production of A320, A330, A350.", "Visitor tours 'Let's visit Airbus' available."]
    }, image: "/poi-images/industry-airbus-toulouse-extra.webp",
    descriptionAdvanced: {
      de: "Das Airbus-Werk in Toulouse ist das globale Zentrum der europäischen Luft- und Raumfahrtindustrie und Hauptsitz des Unternehmens. Auf dem weitläufigen Gelände in Blagnac befinden sich die Endmontagelinien für Modelle wie die A350 und früher den A380. Toulouse gilt aufgrund dieser Industrie als Luftfahrthauptstadt und beherbergt zudem das Museum Aeroscopia.",
      hu: "A toulouse-i Airbus-gyár az európai repülőgép- és űripar globális központja, valamint a vállalat székhelye. A Blagnacban található kiterjedt területen helyezkednek el az olyan modellek végszerelő sorai, mint az A350-es és korábban az A380-as. Toulouse-t az iparág miatt a repülés fővárosának tekintik, és itt található az Aeroscopia múzeum is.",
      ro: "Fabrica Airbus din Toulouse este centrul global al industriei aerospațiale europene și sediul central al companiei. Pe amplasamentul vast din Blagnac se află liniile de asamblare finală pentru modele precum A350 și anterior A380. Toulouse este considerat capitala aviației datorită acestei industrii și găzduiește muzeul Aeroscopia.",
      en: "The Airbus factory in Toulouse is the global hub of the European aerospace industry and the company's headquarters. The vast site in Blagnac houses the final assembly lines for models such as the A350 and formerly the A380. Toulouse is considered the aviation capital due to this industry and is also home to the Aeroscopia museum.",
    },
    factsAdvanced: {
      de: ["Hauptsitz von Airbus seit 1970", "Werksgelände umfasst 700 Hektar", "A380-Montagehalle war 490 Meter lang", "Beschäftigt über 25.000 Mitarbeiter", "Besuchszentrum Let's Visit Airbus", "Erster A300-Flug in Toulouse 1972"],
      hu: ["Az Airbus székhelye 1970 óta", "A gyár területe 700 hektár", "Az A380-as szerelőcsarnok 490 méter hosszú volt", "Több mint 25 000 alkalmazottat foglalkoztat", "Let's Visit Airbus látogatóközpont", "Az első A300-as repülés Toulouse-ban volt 1972-ben"],
      ro: ["Sediul central Airbus din 1970", "Situl fabricii acoperă 700 de hectare", "Hala de asamblare A380 avea 490 de metri lungime", "Angajează peste 25.000 de persoane", "Centru pentru vizitatori Let's Visit Airbus", "Primul zbor al A300 la Toulouse în 1972"],
      en: ["Headquarters of Airbus since 1970", "The factory site covers 700 hectares", "A380 assembly hall was 490 meters long", "Employs over 25,000 people locally", "Features Let's Visit Airbus visitor center", "First A300 flight took place here in 1972"],
    },
  },
  {
    id: "port-le-havre-extra",
    type: "port",
    parent: "FR-NOR",
    coords: [0.1025, 49.4944],
    name: { de: "Hafen von Le Havre", hu: "Le Havre kikötője", ro: "Portul Le Havre", en: "Port of Le Havre" },
    description: {
      de: "Der Hafen von Le Havre ist der zweitgrößte Hafen Frankreichs und ein wichtiges Tor für den internationalen Handel, insbesondere für Container und Ölprodukte.",
      hu: "Le Havre kikötője Franciaország második legnagyobb kikötője, a nemzetközi kereskedelem fontos kapuja, különösen a konténerek és olajtermékek számára.",
      ro: "Portul Le Havre este al doilea cel mai mare port din Franța și o poartă majoră pentru comerțul internațional, în special pentru containere și produse petroliere.",
      en: "The Port of Le Havre is the second largest port in France and a major gateway for international trade, especially for containers and oil products."
    },
    facts: {
      de: ["Größter Containerhafen Frankreichs.", "Wichtig für den Handel mit Nordamerika.", "UNESCO-Weltkulturerbe für seine Nachkriegsarchitektur."],
      hu: ["Franciaország legnagyobb konténerkikötője.", "Fontos az észak-amerikai kereskedelemben.", "A háború utáni építészete miatt UNESCO világörökség."],
      ro: ["Cel mai mare port de containere din Franța.", "Important pentru comerțul cu America de Nord.", "Patrimoniu Mondial UNESCO pentru arhitectura sa postbelică."],
      en: ["France's largest container port.", "Important for trade with North America.", "UNESCO World Heritage site for its post-war architecture."]
    }, image: "/poi-images/port-le-havre-extra.webp",
    descriptionAdvanced: {
      de: "Der Hafen von Le Havre liegt an der Mündung der Seine am Ärmelkanal und ist der wichtigste Containerhafen Frankreichs. Gegründet wurde er 1517 von König Franz I., um den Handel und die Flotte zu stärken. Das nach dem Zweiten Weltkrieg von Auguste Perret wiederaufgebaute Stadtzentrum in Hafennähe ist aufgrund seiner Betonarchitektur Teil des UNESCO-Weltkulturerbes.",
      hu: "Le Havre kikötője a Szajna torkolatánál, a La Manche csatornánál fekszik, és Franciaország legfontosabb konténerkikötője. 1517-ben alapította I. Ferenc király a kereskedelem és a flotta erősítése érdekében. A második világháború után Auguste Perret által újjáépített, kikötő közeli városközpont a betonépítészete miatt az UNESCO Világörökség része.",
      ro: "Portul Le Havre este situat la gura de vărsare a Senei în Canalul Mânecii și este cel mai important port de containere din Franța. A fost fondat în 1517 de regele Francisc I pentru a consolida comerțul și flota. Centrul orașului din apropierea portului, reconstruit după Al Doilea Război Mondial de Auguste Perret, face parte din patrimoniul UNESCO.",
      en: "The Port of Le Havre is located at the mouth of the Seine on the English Channel and is the most important container port in France. It was founded in 1517 by King Francis I to strengthen trade and the navy. The city center near the port, rebuilt after WWII by Auguste Perret, is a UNESCO World Heritage site due to its unique concrete architecture.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1517", "Zweitgrößter Handelshafen Frankreichs", "Wichtigster Hafen für den Außenhandel von Paris", "UNESCO-Welterbe der Innenstadt seit 2005", "Abwicklung von 60 % des französischen Containerverkehrs", "Kann die größten Containerschiffe empfangen"],
      hu: ["1517-ben alapították", "Franciaország második legnagyobb kereskedelmi kikötője", "Párizs külkereskedelmének legfontosabb kikötője", "A belváros 2005 óta UNESCO Világörökség", "A francia konténerforgalom 60%-át kezeli", "A legnagyobb konténerszállító hajókat is fogadja"],
      ro: ["Fondat în anul 1517", "Al doilea cel mai mare port comercial din Franța", "Principalul port pentru comerțul exterior al Parisului", "Centrul orașului în patrimoniul UNESCO din 2005", "Gestionează 60% din traficul francez de containere", "Poate primi cele mai mari nave portcontainer"],
      en: ["Founded in the year 1517", "Second largest commercial port in France", "Main port for Paris' foreign trade", "City center UNESCO World Heritage since 2005", "Handles 60% of French container traffic", "Capable of receiving the largest container ships"],
    },
  },
  {
    id: "agriculture-bordeaux-vineyards-extra",
    type: "agriculture",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: { de: "Weinberge von Bordeaux", hu: "Bordeaux-i borvidék", ro: "Viile din Bordeaux", en: "Bordeaux Vineyards" },
    description: {
      de: "Die Weinregion Bordeaux ist weltberühmt für ihre Weine. Tausende von Châteaux produzieren einige der prestigeträchtigsten Weine der Welt.",
      hu: "A Bordeaux-i borvidék világhírű borairól. Több ezer kastély (château) termeli a világ legnevesebb borait.",
      ro: "Regiunea viticolă Bordeaux este renumită în întreaga lume pentru vinurile sale. Mii de castele (châteaux) produc unele dintre cele mai prestigioase vinuri din lume.",
      en: "The Bordeaux wine region is world-famous for its wines. Thousands of châteaux produce some of the most prestigious wines in the world."
    },
    facts: {
      de: ["Über 110.000 Hektar Weinberge.", "Hauptrebsorten: Merlot, Cabernet Sauvignon.", "Die Cité du Vin ist ein Museum, das dem Wein gewidmet ist."],
      hu: ["Több mint 110 000 hektár szőlőültetvény.", "Fő szőlőfajták: Merlot, Cabernet Sauvignon.", "A Cité du Vin egy bormúzeum."],
      ro: ["Peste 110.000 de hectare de vii.", "Soiuri principale: Merlot, Cabernet Sauvignon.", "Cité du Vin este un muzeu dedicat vinului."],
      en: ["Over 110,000 hectares of vineyards.", "Main grape varieties: Merlot, Cabernet Sauvignon.", "The Cité du Vin is a museum dedicated to wine."]
    }, image: "/poi-images/agriculture-bordeaux-vineyards-extra.webp",
    descriptionAdvanced: {
      de: "Die Weinberge von Bordeaux erstrecken sich über 120.000 Hektar im Südwesten Frankreichs. Die Region ist weltweit bekannt für ihre 60 geschützten Ursprungsbezeichnungen. Schon die Römer bauten hier im 1. Jahrhundert v. Chr. Wein an. Das milde Seeklima begünstigt den Anbau von Rebsorten wie Merlot und Cabernet Sauvignon.",
      hu: "Bordeaux borvidékei 120 000 hektáron terülnek el Franciaország délnyugati részén. A régió 60 eredetmegjelöléssel rendelkezik, és világszerte híres minőségi borairól. A szőlőtermesztést a rómaiak kezdték el az i. e. 1. században. Az óceáni éghajlat kedvez a Merlot és a Cabernet Sauvignon fajtáknak.",
      ro: "Podgoriile din Bordeaux se întind pe 120.000 de hectare în sud-vestul Franței. Regiunea este renumită pentru cele 60 de denumiri de origine controlată. Romanii au început cultivarea viței-de-vie aici în secolul I î.Hr. Climatul oceanic temperat favorizează soiurile Merlot și Cabernet Sauvignon.",
      en: "The Bordeaux vineyards cover 120,000 hectares in southwestern France. The region is world-renowned for its 60 protected designations of origin. Viticulture was introduced by the Romans in the 1st century BC. The mild oceanic climate supports the production of varieties like Merlot and Cabernet Sauvignon.",
    },
    factsAdvanced: {
      de: ["120.000 Hektar Gesamtanbaufläche", "60 verschiedene Appellationen (AOC)", "Anbaubeginn durch Römer um 50 v. Chr.", "85 % der Produktion sind Rotweine", "Über 6.500 Weinbauern in der Region", "Jahresproduktion von ca. 700 Millionen Flaschen"],
      hu: ["120 000 hektár teljes termőterület", "60 különböző eredetmegjelölés (AOC)", "A rómaiak i. e. 50 körül kezdték a termesztést", "A termelés 85%-a vörösbor", "Több mint 6500 bortermelő a régióban", "Évi kb. 700 millió palack bor készül"],
      ro: ["120.000 de hectare de suprafață cultivată", "60 de denumiri de origine controlată (AOC)", "Începutul viticulturii în anul 50 î.Hr.", "85% din producție este reprezentată de vinuri roșii", "Peste 6.500 de producători în regiune", "Producție anuală de aproximativ 700 milioane de sticle"],
      en: ["120,000 hectares of total vineyard area", "60 different appellations (AOC)", "Viticulture started by Romans around 50 BC", "85% of production consists of red wines", "Over 6,500 winegrowers in the region", "Annual production of approx. 700 million bottles"],
    },
  },
  {
    id: "historical-arena-of-nimes-extra",
    type: "historical",
    parent: "FR-OCC",
    coords: [4.3599, 43.8344],
    name: { de: "Arena von Nîmes", hu: "Nîmes-i Aréna", ro: "Arena din Nîmes", en: "Arena of Nîmes" },
    description: {
      de: "Die Arena von Nîmes ist eines der am besten erhaltenen römischen Amphitheater der Welt. Sie wurde um 70 n. Chr. erbaut und wird heute für Konzerte und Veranstaltungen genutzt.",
      hu: "A Nîmes-i Aréna a világ egyik legjobb állapotban fennmaradt római amfiteátruma. Kb. i.sz. 70-ben épült, ma koncerteknek és rendezvényeknek ad otthont.",
      ro: "Arena din Nîmes este unul dintre cele mai bine conservate amfiteatre romane din lume. Construită în jurul anului 70 d.Hr., astăzi este folosită pentru concerte și evenimente.",
      en: "The Arena of Nîmes is one of the best-preserved Roman amphitheaters in the world. Built around 70 AD, it is now used for concerts and events."
    },
    facts: {
      de: ["Inspiriert vom Kolosseum in Rom.", "Platz für bis zu 24.000 Zuschauer.", "Teil des römischen Erbes von Nîmes."],
      hu: ["A római Colosseum ihlette.", "Akár 24 000 néző befogadására is alkalmas.", "Nîmes római kori örökségének része."],
      ro: ["Inspirat de Colosseumul din Roma.", "Capacitate de până la 24.000 de spectatori.", "Parte a moștenirii romane a orașului Nîmes."],
      en: ["Inspired by the Colosseum in Rome.", "Capacity for up to 24,000 spectators.", "Part of the Roman heritage of Nîmes."]
    }, image: "/poi-images/historical-arena-of-nimes-extra.webp",
    descriptionAdvanced: {
      de: "Das Amphitheater von Nîmes wurde um 70 n. Chr. nach dem Vorbild des Kolosseums in Rom erbaut. Es zählt zu den am besten erhaltenen römischen Bauwerken weltweit. Mit einer Kapazität von 24.000 Zuschauern diente es einst Gladiatorenkämpfen. Im Mittelalter wurde die Arena in eine befestigte Wohnanlage umgewandelt.",
      hu: "A Nîmes-i aréna i. sz. 70 körül épült a római Colosseum mintájára. Ez a világ egyik legjobb állapotban fennmaradt római kori amfiteátruma. A 24 000 néző befogadására alkalmas építményben egykor gladiátorviadalokat tartottak. A középkorban az arénát megerődített lakónegyeddé alakították át.",
      ro: "Amfiteatrul din Nîmes a fost construit în jurul anului 70 d.Hr., modelat după Colosseumul din Roma. Este una dintre cele mai bine conservate structuri romane din lume. Cu o capacitate de 24.000 de spectatori, a găzduit lupte de gladiatori. În Evul Mediu, arena a fost transformată într-un complex rezidențial fortificat.",
      en: "The Arena of Nîmes was built around 70 AD, modeled after the Colosseum in Rome. It is one of the best-preserved Roman amphitheaters in the world. With a capacity for 24,000 spectators, it originally hosted gladiator contests. During the Middle Ages, the arena was converted into a fortified residential complex.",
    },
    factsAdvanced: {
      de: ["Baujahr ca. 70 n. Chr.", "Platz für 24.000 Zuschauer", "Länge von 133 Metern", "Breite von 101 Metern", "21 Meter hohe Außenfassade", "Besteht aus 60 Arkaden auf zwei Ebenen"],
      hu: ["Épült i. sz. 70 körül", "24 000 néző befogadására alkalmas", "Hossza 133 méter", "Szélessége 101 méter", "A külső homlokzat magassága 21 méter", "60 árkádból áll két szinten"],
      ro: ["Construit în jurul anului 70 d.Hr.", "Capacitate de 24.000 de spectatori", "Lungime de 133 de metri", "Lățime de 101 metri", "Înălțimea fațadei exterioare de 21 de metri", "Format din 60 de arcade pe două niveluri"],
      en: ["Built around 70 AD", "Capacity for 24,000 spectators", "Length of 133 meters", "Width of 101 meters", "External facade height of 21 meters", "Consists of 60 arches on two levels"],
    },
  },
  {
    id: "landmark-viaduc-de-millau-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [3.0766, 44.0772],
    name: { de: "Viadukt von Millau", hu: "Millau-i völgyhíd", ro: "Viaductul Millau", en: "Millau Viaduct" },
    description: {
      de: "Das Viadukt von Millau ist die höchste Schrägseilbrücke der Welt und ein Meisterwerk der Ingenieurskunst, entworfen von Norman Foster und Michel Virlogeux.",
      hu: "A Millau-i völgyhíd a világ legmagasabb ferdekábeles hídja, a mérnöki tudomány mesterműve, melyet Norman Foster és Michel Virlogeux tervezett.",
      ro: "Viaductul Millau este cel mai înalt pod hobanat din lume și o capodoperă a ingineriei, proiectată de Norman Foster și Michel Virlogeux.",
      en: "The Millau Viaduct is the tallest cable-stayed bridge in the world and a masterpiece of engineering, designed by Norman Foster and Michel Virlogeux."
    },
    facts: {
      de: ["Höher als der Eiffelturm.", "Eröffnet im Jahr 2004.", "Überspannt das Tal des Flusses Tarn."],
      hu: ["Magasabb, mint az Eiffel-torony.", "2004-ben nyílt meg.", "A Tarn folyó völgyét hidalja át."],
      ro: ["Mai înalt decât Turnul Eiffel.", "Inaugurat în 2004.", "Traversează valea râului Tarn."],
      en: ["Taller than the Eiffel Tower.", "Opened in 2004.", "Spans the valley of the river Tarn."]
    }, image: "/poi-images/landmark-viaduc-de-millau-extra.webp",
    descriptionAdvanced: {
      de: "Das Viadukt von Millau ist eine Schrägseilbrücke, die das Tal des Tarn in Südfrankreich überspannt. Mit einer Pfeilerhöhe von bis zu 343 Metern ist es das höchste Bauwerk des Landes. Die Brücke wurde von Norman Foster und Michel Virlogeux entworfen. Sie wurde 2004 eröffnet und entlastet die Autobahn A75.",
      hu: "A Millau-i viadukt egy ferdekábeles híd, amely a Tarn folyó völgye felett ível át Dél-Franciaországban. 343 méteres pillérmagasságával ez az ország legmagasabb építménye. A hidat Norman Foster és Michel Virlogeux tervezte. 2004-es megnyitása jelentősen tehermentesítette az A75-ös autópályát.",
      ro: "Viaductul Millau este un pod hobanat care traversează valea râului Tarn în sudul Franței. Cu o înălțime maximă a pilonilor de 343 de metri, este cea mai înaltă structură din țară. Podul a fost proiectat de Norman Foster și Michel Virlogeux. Inaugurat în 2004, acesta deservește autostrada A75.",
      en: "The Millau Viaduct is a cable-stayed bridge spanning the Tarn valley in southern France. With a maximum pylon height of 343 meters, it is the tallest structure in the country. The bridge was designed by Norman Foster and Michel Virlogeux. Opened in 2004, it serves as a vital link on the A75 motorway.",
    },
    factsAdvanced: {
      de: ["2.460 Meter Gesamtlänge", "Höchster Pfeiler ist 343 Meter hoch", "Fahrbahn liegt 270 Meter über dem Tarn", "Eröffnung am 14. Dezember 2004", "Baukosten von 394 Millionen Euro", "Hält Windgeschwindigkeiten bis 250 km/h stand"],
      hu: ["2460 méter teljes hosszúság", "A legmagasabb pillér 343 méter", "Az útpálya 270 méterrel van a folyó felett", "2004. december 14-én adták át", "Építési költsége 394 millió euró volt", "Akár 250 km/h-s szélnek is ellenáll"],
      ro: ["Lungime totală de 2.460 de metri", "Cel mai înalt pilon are 343 de metri", "Tablierul se află la 270 de metri peste Tarn", "Inaugurat pe 14 decembrie 2004", "Costuri de construcție de 394 milioane euro", "Rezistă la vânturi de până la 250 km/h"],
      en: ["2,460 meters total length", "Tallest pylon is 343 meters high", "Road deck is 270 meters above the river", "Opened on December 14, 2004", "Construction cost of 394 million Euros", "Withstands wind speeds up to 250 km/h"],
    },
  },
  {
    id: "nature-gorges-du-verdon-extra",
    type: "river",
    parent: "FR-PAC",
    coords: [6.368, 43.749],
    name: { de: "Verdonschlucht", hu: "Verdon-szurdok", ro: "Cheile Verdonului", en: "Verdon Gorge" },
    description: {
      de: "Die Verdonschlucht ist einer der tiefsten und schönsten Canyons Europas. Der türkisfarbene Fluss Verdon hat sich hier tief in die Kalksteinfelsen gegraben.",
      hu: "A Verdon-szurdok Európa egyik legmélyebb és legszebb kanyonja. A türkizkék Verdon folyó mélyen bevágta magát a mészkősziklákba.",
      ro: "Cheile Verdonului sunt unul dintre cele mai adânci și mai frumoase canioane din Europa. Râul Verdon, de culoare turcoaz, a săpat adânc în stâncile de calcar.",
      en: "The Verdon Gorge is one of the deepest and most beautiful canyons in Europe. The turquoise Verdon River has carved deep into the limestone cliffs."
    },
    facts: {
      de: ["Bis zu 700 Meter tief.", "Beliebt für Kajakfahren, Wandern und Klettern.", "Teil des Regionalen Naturparks Verdon."],
      hu: ["Akár 700 méter mély.", "Népszerű kajakozásra, túrázásra és sziklamászásra.", "A Verdon Regionális Natúrpark része."],
      ro: ["Adâncime de până la 700 de metri.", "Popular pentru caiac, drumeții și alpinism.", "Parte a Parcului Natural Regional Verdon."],
      en: ["Up to 700 meters deep.", "Popular for kayaking, hiking, and climbing.", "Part of the Verdon Regional Natural Park."]
    }, image: "/poi-images/nature-gorges-du-verdon-extra.webp",
    descriptionAdvanced: {
      de: "Die Verdonschlucht gilt als einer der größten Canyons Europas und liegt im Südosten Frankreichs. Der Fluss Verdon hat sich über Jahrtausende tief in das Kalksteinplateau eingeschnitten. Das markante türkisfarbene Wasser ist auf Fluorverbindungen und Mikroalgen zurückzuführen. Die Schlucht ist bis zu 700 Meter tief.",
      hu: "A Verdon-kanyon Európa egyik legnagyobb szurdoka, amely Franciaország délkeleti részén található. A Verdon folyó évezredek alatt vájt mély utat a mészkőfennsíkba. A víz jellegzetes türkizkék színét a fluorvegyületek és a mikroalgák adják. A szurdok mélysége helyenként eléri a 700 métert.",
      ro: "Cheile Verdonului sunt considerate unul dintre cele mai mari canioane din Europa, fiind situate în sud-estul Franței. Râul Verdon a săpat adânc în platoul calcaros de-a lungul mileniilor. Culoarea turcoaz distinctivă a apei se datorează fluorului și microalgelor. Defileul are o adâncime de până la 700 de metri.",
      en: "The Verdon Gorge is considered one of Europe's grandest canyons, located in southeastern France. The Verdon River has carved a deep path through the limestone plateau over millennia. Its distinct turquoise water is caused by fluorine compounds and micro-algae. The gorge reaches depths of up to 700 meters.",
    },
    factsAdvanced: {
      de: ["Länge von etwa 25 Kilometern", "Maximale Tiefe von 700 Metern", "Gipfel des Plateaus auf 1.500 Metern", "Entstand vor ca. 25 Millionen Jahren", "Fließt in den Stausee Sainte-Croix", "Breite variiert zwischen 6 und 100 Metern"],
      hu: ["Kb. 25 kilométer hosszú", "Maximális mélysége 700 méter", "A fennsík csúcsai 1500 méterig érnek", "Kb. 25 millió évvel ezelőtt alakult ki", "A Sainte-Croix-tóba torkollik", "Szélessége 6 és 100 méter között mozog"],
      ro: ["Lungime de aproximativ 25 de kilometri", "Adâncime maximă de 700 de metri", "Vârfurile platoului ating 1.500 de metri", "Format în urmă cu aproximativ 25 milioane de ani", "Se varsă în lacul de acumulare Sainte-Croix", "Lățimea variază între 6 și 100 de metri"],
      en: ["Length of approximately 25 kilometers", "Maximum depth of 700 meters", "Plateau summits reach 1,500 meters", "Formed about 25 million years ago", "Flows into the Sainte-Croix reservoir", "Width varies between 6 and 100 meters"],
    },
  },
  {
    id: "castle-chateau-de-chambord-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.5173, 47.6162],
    name: { de: "Schloss Chambord", hu: "Chambord-i kastély", ro: "Castelul Chambord", en: "Château de Chambord" },
    description: {
      de: "Schloss Chambord ist das größte Schloss der Loire und ein Meisterwerk der französischen Renaissance-Architektur, das möglicherweise von Leonardo da Vinci beeinflusst wurde.",
      hu: "A Chambord-i kastély a Loire-völgy legnagyobb kastélya, a francia reneszánsz építészet mesterműve, melyet valószínűleg Leonardo da Vinci is befolyásolt.",
      ro: "Castelul Chambord este cel mai mare castel de pe Valea Loarei și o capodoperă a arhitecturii renascentiste franceze, posibil influențată de Leonardo da Vinci.",
      en: "Château de Chambord is the largest château in the Loire Valley and a masterpiece of French Renaissance architecture, possibly influenced by Leonardo da Vinci."
    },
    facts: {
      de: ["Gebaut als Jagdschloss für König Franz I.", "Berühmte doppelläufige Wendeltreppe.", "Umg eben von einem riesigen Waldgebiet."],
      hu: ["I. Ferenc király vadászkastélyának épült.", "Híres kettős csigalépcső.", "Hatalmas erdőterület veszi körül."],
      ro: ["Construit ca reședință de vânătoare pentru regele Francisc I.", "Scară dublă elicoidală faimoasă.", "Înconjurat de o pădure vastă."],
      en: ["Built as a hunting lodge for King Francis I.", "Famous double-helix staircase.", "Surrounded by a vast forest estate."]
    }, image: "/poi-images/castle-chateau-de-chambord-extra.webp",
    descriptionAdvanced: {
      de: "Das Schloss Chambord ist das größte und prächtigste Schloss im Loiretal. Es wurde im 16. Jahrhundert unter König Franz I. als Jagdschloss im Stil der Renaissance erbaut. Besonders berühmt ist die doppelläufige Wendeltreppe, die Leonardo da Vinci zugeschrieben wird. Das Anwesen umfasst einen weitläufigen Park von 5.440 Hektar.",
      hu: "A Chambord-i kastély a Loire-völgy legnagyobb és legpompásabb kastélya. A 16. században épült I. Ferenc király megbízásából, reneszánsz stílusú vadászkastélyként. Különlegessége a kettős csigalépcső, amelyet Leonardo da Vincinek tulajdonítanak. A birtokhoz egy 5440 hektáros park tartozik.",
      ro: "Castelul Chambord este cel mai mare și mai impunător castel din Valea Loarei. A fost construit în secolul al XVI-lea sub regele Francisc I ca pavilion de vânătoare în stil renascentist. Scara cu dublă elice, atribuită lui Leonardo da Vinci, este faimoasă. Domeniul cuprinde un parc de 5.440 de hectare.",
      en: "Château de Chambord is the largest and most magnificent castle in the Loire Valley. It was built in the 16th century under King Francis I as a hunting lodge in the Renaissance style. Its double-helix staircase, attributed to Leonardo da Vinci, is particularly famous. The estate includes a 5,440-hectare park.",
    },
    factsAdvanced: {
      de: ["Bauzeit von 1519 bis 1547", "Enthält 440 Zimmer", "Verfügt über 365 Schornsteine", "84 verschiedene Treppenaufgänge", "Länge der Außenmauer beträgt 32 km", "UNESCO-Weltkulturerbe seit 1981"],
      hu: ["Építése 1519-től 1547-ig tartott", "440 szobát tartalmaz", "365 kéménnyel rendelkezik", "84 különböző lépcsőház található benne", "A külső fal hossza 32 kilométer", "1981 óta az UNESCO Világörökség része"],
      ro: ["Construit între 1519 și 1547", "Conține 440 de camere", "Dispune de 365 de șemineuri", "84 de scări interioare", "Lungimea zidului exterior este de 32 km", "Patrimoniu Mondial UNESCO din 1981"],
      en: ["Construction from 1519 to 1547", "Contains 440 rooms", "Features 365 chimneys", "84 different staircases", "Outer wall length is 32 km", "UNESCO World Heritage site since 1981"],
    },
  },
  {
    id: "kid-landmark-parc-asterix-extra",
    type: "kid-landmark",
    parent: "FR-HDF",
    coords: [2.5723, 49.1342],
    name: { de: "Parc Astérix", hu: "Parc Astérix", ro: "Parc Astérix", en: "Parc Astérix" },
    description: {
      de: "Der Parc Astérix ist ein Themenpark, der auf der berühmten Comic-Serie von Goscinny und Uderzo basiert. Er bietet eine Mischung aus Achterbahnen und thematischen Welten.",
      hu: "A Parc Astérix egy vidámpark, amely Goscinny és Uderzo híres képregénysorozatán alapul. Hullámvasutak és tematikus világok keverékét kínálja.",
      ro: "Parc Astérix este un parc tematic bazat pe faimoasa serie de benzi desenate de Goscinny și Uderzo. Oferă un amestec de montañe ruse și lumi tematice.",
      en: "Parc Astérix is a theme park based on the famous comic book series by Goscinny and Uderzo. It offers a mix of roller coasters and themed worlds."
    },
    facts: {
      de: ["Themenwelten: Gallien, Römisches Reich, Griechenland.", "Über 40 Attraktionen und Shows.", "Berühmt für seine großen Achterbahnen wie 'OzIris'."],
      hu: ["Tematikus világok: Gallia, Római Birodalom, Görögország.", "Több mint 40 attrakció és show.", "Híres a nagy hullámvasútjairól, mint az 'OzIris'."],
      ro: ["Lumi tematice: Galia, Imperiul Roman, Grecia.", "Peste 40 de atracții și spectacole.", "Faimos pentru montagne rusele mari precum 'OzIris'."],
      en: ["Themed worlds: Gaul, Roman Empire, Greece.", "Over 40 attractions and shows.", "Famous for its big roller coasters like 'OzIris'."]
    }, image: "/poi-images/kid-landmark-parc-asterix-extra.webp",
    descriptionAdvanced: {
      de: "Der Parc Astérix ist ein Themenpark in Plailly, etwa 35 Kilometer nördlich von Paris. Er basiert auf den berühmten Comics von René Goscinny und Albert Uderzo über die unbeugsamen Gallier. Der Park wurde 1989 eröffnet und bietet zahlreiche Attraktionen in verschiedenen Themenbereichen. Er ist besonders für seine Holzachterbahn bekannt.",
      hu: "A Parc Astérix egy vidámpark Plailly-ben, körülbelül 35 kilométerre északra Párizstól. René Goscinny és Albert Uderzo híres képregényein alapul, amelyek a legyőzhetetlen gallokról szólnak. A parkot 1989-ben nyitották meg, és számos látványosságot kínál különböző tematikus részlegeken. Fajátékairól is híres.",
      ro: "Parc Astérix este un parc tematic situat în Plailly, la aproximativ 35 de kilometri nord de Paris. Se bazează pe faimoasele benzi desenate de René Goscinny și Albert Uderzo despre galii neînfricați. Parcul a fost deschis în 1989 și oferă numeroase atracții în zone tematice variate. Este celebru pentru roller coasterele sale.",
      en: "Parc Astérix is a theme park located in Plailly, about 35 kilometers north of Paris. It is based on the famous comic books by René Goscinny and Albert Uderzo about the indomitable Gauls. Opened in 1989, the park offers numerous attractions across various themed areas. It is particularly known for its wooden roller coaster.",
    },
    factsAdvanced: {
      de: ["Eröffnet am 30. April 1989", "Über 2,3 Millionen Besucher jährlich", "Fläche von etwa 33 Hektar", "Beinhaltet über 40 Attraktionen", "Holzachterbahn Tonnerre de Zeus", "6 verschiedene Themenbereiche"],
      hu: ["1989. április 30-án nyílt meg", "Évente több mint 2,3 millió látogató", "Kb. 33 hektáros területen fekszik", "Több mint 40 attrakciót tartalmaz", "Tonnerre de Zeus fa hullámvasút", "6 különböző tematikus zóna"],
      ro: ["Deschis pe 30 aprilie 1989", "Peste 2,3 milioane de vizitatori anual", "Suprafață de aproximativ 33 de hectare", "Include peste 40 de atracții", "Roller coaster din lemn Tonnerre de Zeus", "6 zone tematice diferite"],
      en: ["Opened on April 30, 1989", "Over 2.3 million annual visitors", "Covers about 33 hectares", "Features over 40 attractions", "Tonnerre de Zeus wooden coaster", "6 different themed areas"],
    },
  },
  {
    id: "city-rouen-extra",
    type: "city",
    parent: "FR-NOR",
    coords: [1.0993, 49.4432],
    name: { de: "Rouen", hu: "Rouen", ro: "Rouen", en: "Rouen" },
    description: {
      de: "Rouen ist die historische Hauptstadt der Normandie, bekannt für ihre beeindruckende Kathedrale, die von Claude Monet gemalt wurde, und als der Ort, an dem Jeanne d'Arc verbrannt wurde.",
      hu: "Rouen Normandia történelmi fővárosa, híres lenyűgöző katedrálisáról, melyet Claude Monet is megfestett, és arról a helyről, ahol Jeanne d'Arc-ot megégették.",
      ro: "Rouen este capitala istorică a Normandiei, cunoscută pentru catedrala sa impresionantă pictată de Claude Monet și ca locul unde a fost arsă pe rug Ioana d'Arc.",
      en: "Rouen is the historic capital of Normandy, known for its impressive cathedral painted by Claude Monet and as the place where Joan of Arc was burned at the stake."
    },
    facts: {
      de: ["Kathedrale Notre-Dame de Rouen.", "Gros-Horloge, eine astronomische Uhr aus dem 14. Jahrhundert.", "Jeanne d'Arc wurde 1431 hier hingerichtet."],
      hu: ["Notre-Dame de Rouen katedrális.", "Gros-Horloge, egy 14. századi csillagászati óra.", "Jeanne d'Arc-ot 1431-ben itt végezték ki."],
      ro: ["Catedrala Notre-Dame de Rouen.", "Gros-Horloge, un ceas astronomic din secolul al XIV-lea.", "Ioana d'Arc a fost executată aici în 1431."],
      en: ["Notre-Dame de Rouen Cathedral.", "Gros-Horloge, a 14th-century astronomical clock.", "Joan of Arc was executed here in 1431."]
    }, image: "/poi-images/city-rouen-extra.webp",
    descriptionAdvanced: {
      de: "Rouen ist die historische Hauptstadt der Normandie und liegt an der Seine. Die Stadt ist berühmt für ihre gotische Kathedrale Notre-Dame, die Claude Monet in einer Bilderserie verewigte. Hier wurde Jeanne d'Arc im Jahr 1431 auf dem Scheiterhaufen hingerichtet. Die Altstadt besticht durch ihre gut erhaltenen Fachwerkhäuser.",
      hu: "Rouen Normandia történelmi fővárosa, amely a Szajna partján fekszik. A város híres a gótikus Notre-Dame székesegyházáról, amelyet Claude Monet festménysorozatban örökített meg. Itt végezték ki Jeanne d’Arcot máglyán 1431-ben. Az óváros jellegzetességei a jól karbantartott fagerendás házak.",
      ro: "Rouen este capitala istorică a Normandiei, situată pe malul Senei. Orașul este faimos pentru catedrala gotică Notre-Dame, imortalizată de Claude Monet într-o serie de picturi. Aici a fost executată Ioana d'Arc pe rug în anul 1431. Centrul vechi impresionează prin casele sale medievale cu bârne de lemn.",
      en: "Rouen is the historic capital of Normandy, situated on the banks of the Seine. The city is famous for its Gothic Notre-Dame Cathedral, immortalized by Claude Monet in a series of paintings. Joan of Arc was executed here at the stake in 1431. The old town features beautifully preserved half-timbered houses.",
    },
    factsAdvanced: {
      de: ["Einwohnerzahl ca. 114.000 (2021)", "Astronomische Uhr Gros-Horloge von 1389", "Kathedrale war 1876-1880 höchstes Gebäude", "Über 2.000 registrierte Fachwerkhäuser", "Zweitgrößter Binnenhafen Frankreichs", "Gegründet von den Römern als Rotomagus"],
      hu: ["Kb. 114 000 lakos (2021)", "1389-ből származó Gros-Horloge óra", "A dóm 1876-1880 közt a világ legmagasabbja", "Több mint 2000 fagerendás ház", "Franciaország második legnagyobb folyami kikötője", "A rómaiak alapították Rotomagus néven"],
      ro: ["Aproximativ 114.000 de locuitori (2021)", "Ceasul astronomic Gros-Horloge din 1389", "Catedrala a fost cea mai înaltă clădire (1876)", "Peste 2.000 de case cu bârne de lemn", "Al doilea cel mai mare port fluvial al Franței", "Fondat de romani sub numele Rotomagus"],
      en: ["Population approx. 114,000 (2021)", "Gros-Horloge astronomical clock from 1389", "Cathedral was world's tallest (1876-1880)", "Over 2,000 half-timbered houses", "France's second-largest river port", "Founded by Romans as Rotomagus"],
    },
  },
  {
    id: "mountain-aiguille-du-midi-extra",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8871, 45.8795],
    name: { de: "Aiguille du Midi", hu: "Aiguille du Midi", ro: "Aiguille du Midi", en: "Aiguille du Midi" },
    description: {
      de: "Die Aiguille du Midi ist ein 3.842 m hoher Berg im Mont-Blanc-Massiv. Eine Seilbahn führt zum Gipfel und bietet einen spektakulären Blick auf die Alpen.",
      hu: "Az Aiguille du Midi egy 3842 méter magas hegy a Mont Blanc-masszívumban. Egy felvonó visz fel a csúcsra, ahonnan lenyűgöző kilátás nyílik az Alpokra.",
      ro: "Aiguille du Midi este un munte de 3.842 m în masivul Mont Blanc. O telecabină duce spre vârf, oferind o priveliște spectaculoasă asupra Alpilor.",
      en: "The Aiguille du Midi is a 3,842m mountain in the Mont Blanc massif. A cable car leads to the summit, offering a spectacular view of the Alps."
    },
    facts: {
      de: ["Höchste Seilbahn Europas.", "Panoramablick auf den Mont Blanc.", "Attraktion 'Step into the Void', ein Glaskasten über dem Abgrund."],
      hu: ["Európa legmagasabb felvonója.", "Panorámás kilátás a Mont Blanc-ra.", "'Lépj a semmibe' attrakció, egy üvegdoboz a szakadék felett."],
      ro: ["Cea mai înaltă telecabină din Europa.", "Vedere panoramică a Mont Blancului.", "Atracția 'Pas în gol', o cutie de sticlă deasupra abisului."],
      en: ["Highest cable car in Europe.", "Panoramic view of Mont Blanc.", "'Step into the Void' attraction, a glass box over the precipice."]
    }, image: "/poi-images/mountain-aiguille-du-midi-extra.webp",
    descriptionAdvanced: {
      de: "Die Aiguille du Midi ist ein 3.842 Meter hoher Berggipfel im Mont-Blanc-Massiv bei Chamonix. Eine Seilbahn führt Besucher in nur 20 Minuten von der Talstation auf den Gipfel. Von den Plattformen aus bietet sich ein spektakulärer Blick auf den Mont Blanc und die Alpen. Die Bergstation beherbergt ein Forschungszentrum.",
      hu: "Az Aiguille du Midi egy 3842 méter magas hegycsúcs a Mont Blanc-masszívumban, Chamonix közelében. Egy felvonó mindössze 20 perc alatt juttatja fel a látogatókat a völgyből a csúcsra. A kilátóteraszokról lenyűgöző panoráma nyílik a Mont Blanc-ra és az Alpokra. A felső állomáson egy kutatóközpont is működik.",
      ro: "Aiguille du Midi este un vârf muntos de 3.842 de metri în masivul Mont Blanc, lângă Chamonix. O telecabină transportă vizitatorii de la bază până la vârf în doar 20 de minute. De pe platformele sale, se oferă o vedere spectaculoasă asupra Mont Blanc și a Alpilor. Stația superioară găzduiește un centru de cercetare.",
      en: "Aiguille du Midi is a 3,842-meter mountain peak in the Mont Blanc massif near Chamonix. A cable car transports visitors from the valley to the summit in just 20 minutes. From its platforms, one can enjoy spectacular views of Mont Blanc and the surrounding Alps. The upper station also houses a high-altitude research center.",
    },
    factsAdvanced: {
      de: ["Höhe des Gipfels beträgt 3.842 Meter", "Seilbahn wurde im Jahr 1955 eröffnet", "Höhenunterschied von 2.800 Metern", "Glaskasten 'Step into the Void'", "Temperatur liegt oft unter -10 Grad", "Startpunkt für die Abfahrt Vallée Blanche"],
      hu: ["A csúcs magassága 3842 méter", "A felvonót 1955-ben nyitották meg", "2800 méteres szintkülönbséget hidal át", "Step into the Void üvegkilátó", "A hőmérséklet gyakran -10 fok alatti", "A Vallée Blanche gleccserpálya rajtja"],
      ro: ["Înălțimea vârfului este de 3.842 metri", "Telecabina a fost inaugurată în 1955", "Diferență de nivel de 2.800 de metri", "Cabină de sticlă 'Step into the Void'", "Temperatura este adesea sub -10 grade", "Punct de plecare pentru Vallée Blanche"],
      en: ["Summit height is 3,842 meters", "Cable car opened in 1955", "Elevation gain of 2,800 meters", "Step into the Void glass skywalk", "Temperature often drops below -10°C", "Starting point for the Vallée Blanche ski run"],
    },
  },
  {
    id: "city-montpellier-extra",
    type: "city",
    parent: "FR-OCC",
    coords: [3.8767, 43.6108],
    name: { de: "Montpellier", hu: "Montpellier", ro: "Montpellier", en: "Montpellier" },
    description: {
      de: "Montpellier ist eine dynamische Stadt im Süden Frankreichs, bekannt für ihre mittelalterlichen Gassen, ihre Universität und den sonnigen Place de la Comédie.",
      hu: "Montpellier egy dinamikus város Dél-Franciaországban, ismert középkori utcáiról, egyeteméről és a napsütötte Place de la Comédie-ról.",
      ro: "Montpellier este un oraș dinamic din sudul Franței, cunoscut pentru străzile sale medievale, universitatea sa și însorita Place de la Comédie.",
      en: "Montpellier is a dynamic city in the south of France, known for its medieval streets, its university, and the sunny Place de la Comédie."
    },
    facts: {
      de: ["Eine der am schnellsten wachsenden Städte Frankreichs.", "Medizinische Fakultät, eine der ältesten der Welt.", "Nähe zu den Mittelmeerstränden."],
      hu: ["Franciaország egyik leggyorsabban növekvő városa.", "Orvosi kar, a világ egyik legrégebbije.", "Közel a Földközi-tengeri strandokhoz."],
      ro: ["Unul dintre orașele cu cea mai rapidă creștere din Franța.", "Facultate de medicină, una dintre cele mai vechi din lume.", "Apropierea de plajele mediteraneene."],
      en: ["One of the fastest-growing cities in France.", "Faculty of Medicine, one of the oldest in the world.", "Proximity to the Mediterranean beaches."]
    }, image: "/poi-images/city-montpellier-extra.webp",
    descriptionAdvanced: {
      de: "Montpellier ist eine dynamische Stadt in Südfrankreich, unweit der Mittelmeerküste. Sie beherbergt eine der ältesten medizinischen Fakultäten der Welt, die im Jahr 1220 gegründet wurde. Das Zentrum bildet die Place de la Comédie mit ihrem markanten Brunnen. Moderne Viertel wie Antigone prägen das Stadtbild durch neoklassizistische Architektur.",
      hu: "Montpellier egy dinamikus város Dél-Franciaországban, nem messze a Földközi-tenger partjától. Itt található a világ egyik legrégebbi orvosi egyeteme, amelyet 1220-ban alapítottak. A város központja a Place de la Comédie a jellegzetes szökőkútjával. Az olyan modern negyedek, mint az Antigone, neoklasszicista stílust képviselnek.",
      ro: "Montpellier este un oraș dinamic în sudul Franței, situat aproape de coasta mediteraneană. Găzduiește una dintre cele mai vechi facultăți de medicină din lume, fondată în 1220. Centrul este dominat de Place de la Comédie și fântâna sa distinctivă. Cartierul modern Antigone definește peisajul prin arhitectura neoclasică.",
      en: "Montpellier is a dynamic city in southern France, located near the Mediterranean coast. It is home to one of the world's oldest medical schools, founded in 1220. The city center is centered around Place de la Comédie and its iconic fountain. Modern districts like Antigone shape the cityscape with neoclassical architecture.",
    },
    factsAdvanced: {
      de: ["Gegründet im 10. Jahrhundert", "Medizinische Fakultät seit 1220", "Bevölkerung ca. 300.000 (2021)", "Fast 300 Sonnentage pro Jahr", "Autofreie Altstadt (L'Écusson)", "Porte du Peyrou Triumphbogen von 1691"],
      hu: ["A 10. században alapították", "Orvosi egyeteme 1220 óta működik", "Lakossága kb. 300 000 fő (2021)", "Évente közel 300 napsütéses nap", "Autómentes óváros (L'Écusson)", "Porte du Peyrou diadalív 1691-ből"],
      ro: ["Fondat în secolul al X-lea", "Facultate de medicină din 1220", "Populație de aprox. 300.000 (2021)", "Aproape 300 de zile însorite pe an", "Centru vechi pietonal (L'Écusson)", "Arcul de Triumf Porte du Peyrou (1691)"],
      en: ["Founded in the 10th century", "Medical school active since 1220", "Population approx. 300,000 (2021)", "Nearly 300 days of sunshine per year", "Pedestrianized old town (L'Écusson)", "Porte du Peyrou triumphal arch (1691)"],
    },
  },
  {
    id: "animal-habitat-camargue-extra",
    type: "animal-habitat",
    parent: "FR-PAC",
    coords: [4.4286, 43.5539],
    name: { de: "Camargue", hu: "Camargue", ro: "Camargue", en: "Camargue" },
    description: {
      de: "Die Camargue ist ein riesiges Feuchtgebiet im Rhone-Delta, bekannt für ihre weißen Pferde, schwarzen Stiere und rosa Flamingos.",
      hu: "A Camargue egy hatalmas vizes élőhely a Rhône-deltában, híres fehér lovairól, fekete bikáiról és rózsaszín flamingóiról.",
      ro: "Camargue este o zonă umedă vastă în delta Ronului, cunoscută pentru caii săi albi, taurii negri și flamingo roz.",
      en: "The Camargue is a vast wetland in the Rhône delta, famous for its white horses, black bulls, and pink flamingos."
    },
    facts: {
      de: ["Wichtiger Ort für die Vogelbeobachtung.", "Einzigartige Landschaft aus Salzwiesen und Lagunen.", "Reisanbau ist ein wichtiger Wirtschaftszweig."],
      hu: ["Fontos madármegfigyelő hely.", "Egyedülálló táj, sóstavakkal és lagúnákkal.", "A rizstermesztés fontos gazdasági ágazat."],
      ro: ["Loc important pentru observarea păsărilor.", "Peisaj unic de mlaștini sărate și lagune.", "Cultivarea orezului este o industrie importantă."],
      en: ["Important place for bird watching.", "Unique landscape of salt marshes and lagoons.", "Rice cultivation is an important industry."]
    }, image: "/poi-images/animal-habitat-camargue-extra.webp",
    descriptionAdvanced: {
      de: "Die Camargue ist ein weites Sumpfgebiet im Rhone-Delta am Mittelmeer. Sie ist bekannt für ihre einzigartige Tierwelt, insbesondere die weißen Camargue-Pferde und schwarzen Stiere. Zudem ist die Region ein wichtiger Rückzugsort für rosa Flamingos. Die Landschaft ist geprägt von Salzwiesen, Lagunen und Reisfeldern.",
      hu: "A Camargue egy kiterjedt mocsárvidék a Rhône-deltában, a Földközi-tenger partján. Egyedülálló állatvilágáról ismert, különösen a fehér Camargue-lovakról és a fekete bikákról. A régió a rózsaszín flamingók fontos fészkelőhelye is. A tájat sós mocsarak, lagúnák és rizsföldek jellemzik.",
      ro: "Camargue este o zonă vastă de mlaștini situată în Delta Ronului, la Marea Mediterană. Este cunoscută pentru fauna sa unică, în special caii albi Camargue și taurii negri. De asemenea, regiunea este un refugiu important pentru flamingo roz. Peisajul este definit de mlaștini sărate, lagune și câmpuri de orez.",
      en: "The Camargue is a vast wetland region in the Rhone Delta on the Mediterranean coast. It is famous for its unique wildlife, particularly the white Camargue horses and black bulls. The region also serves as a crucial habitat for pink flamingos. The landscape is characterized by salt marshes, lagoons, and rice paddies.",
    },
    factsAdvanced: {
      de: ["Fläche von etwa 930 Quadratkilometern", "Biosphärenreservat seit 1977", "Einzige Reisanbauregion Frankreichs", "Über 400 verschiedene Vogelarten", "Sitz der Stadt Aigues-Mortes", "Traditionelle Stierkämpfe ohne Töten"],
      hu: ["Területe kb. 930 négyzetkilométer", "1977 óta bioszféra-rezervátum", "Franciaország egyetlen rizstermő vidéke", "Több mint 400 madárfaj él itt", "Itt fekszik Aigues-Mortes városa", "Hagyományos bikaviadalok (ölés nélkül)"],
      ro: ["Suprafață de aproximativ 930 kmp", "Rezervație a biosferei din 1977", "Singura regiune de orez din Franța", "Peste 400 de specii de păsări", "Găzduiește orașul Aigues-Mortes", "Lupte tradiționale cu tauri (fără ucidere)"],
      en: ["Area of approximately 930 sq km", "Biosphere reserve since 1977", "France's only rice-growing region", "Home to over 400 bird species", "Location of the town Aigues-Mortes", "Traditional bull games (non-lethal)"],
    },
  },
  {
    id: "landmark-pont-du-gard-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [4.6492, 43.9475],
    name: { de: "Pont du Gard", hu: "Pont du Gard", ro: "Pont du Gard", en: "Pont du Gard" },
    description: {
      de: "Der Pont du Gard ist ein antikes römisches Aquädukt, das den Fluss Gardon überquert. Er ist ein Zeugnis der römischen Ingenieurskunst und UNESCO-Weltkulturerbe.",
      hu: "A Pont du Gard egy ókori római vízvezeték, amely a Gardon folyót keresztezi. A római mérnöki tudás tanúbizonysága és az UNESCO Világörökség része.",
      ro: "Pont du Gard este un apeduct roman antic care traversează râul Gardon. Este o mărturie a ingineriei romane și un sit al Patrimoniului Mondial UNESCO.",
      en: "The Pont du Gard is an ancient Roman aqueduct that crosses the Gardon River. It is a testament to Roman engineering and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Teil eines 50 km langen Aquädukts.", "Erbaut im 1. Jahrhundert n. Chr.", "Höchstes römisches Aquädukt."],
      hu: ["Egy 50 km hosszú vízvezeték része volt.", "Az 1. században épült.", "A legmagasabb római vízvezeték."],
      ro: ["Parte a unui apeduct de 50 km.", "Construit în secolul I d.Hr.", "Cel mai înalt apeduct roman."],
      en: ["Part of a 50 km long aqueduct.", "Built in the 1st century AD.", "Highest Roman aqueduct."]
    }, image: "/poi-images/landmark-pont-du-gard-extra.webp",
    descriptionAdvanced: {
      de: "Der Pont du Gard ist ein dreistöckiges römisches Aquädukt im Süden Frankreichs. Er wurde im 1. Jahrhundert n. Chr. erbaut, um die Stadt Nîmes mit Wasser zu versorgen. Das Bauwerk überspannt den Fluss Gardon und gilt als Meisterwerk antiker Ingenieurskunst. Es wurde ohne die Verwendung von Mörtel errichtet.",
      hu: "A Pont du Gard egy háromszintes római vízvezeték Dél-Franciaországban. Az i. sz. 1. században épült, hogy vizet szállítson Nîmes városába. Az építmény a Gardon folyó felett ível át, és az ókori mérnöki tudomány remekművének tekintik. A hidat habarcs használata nélkül építették fel.",
      ro: "Pont du Gard este un apeduct roman cu trei niveluri, situat în sudul Franței. A fost construit în secolul I d.Hr. pentru a furniza apă orașului Nîmes. Structura traversează râul Gardon și este considerată o capodoperă a ingineriei antice. A fost ridicată fără a utiliza mortar.",
      en: "The Pont du Gard is a three-tiered Roman aqueduct located in southern France. It was built in the 1st century AD to supply water to the city of Nîmes. Spanning the Gardon River, the structure is regarded as a masterpiece of ancient engineering. It was constructed entirely without the use of mortar.",
    },
    factsAdvanced: {
      de: ["Höhe von 48,8 Metern", "Länge der obersten Ebene 275 Meter", "Bestandteil eines 50 km Aquädukts", "UNESCO-Weltkulturerbe seit 1985", "Besteht aus ca. 50.000 Tonnen Stein", "Versorgte Nîmes mit 20.000 m³ Wasser täglich"],
      hu: ["Magassága 48,8 méter", "A legfelső szint hossza 275 méter", "Egy 50 km hosszú vízvezeték része", "1985 óta az UNESCO Világörökség része", "Kb. 50 000 tonna kőből áll", "Napi 20 000 m³ vizet szállított Nîmes-be"],
      ro: ["Înălțime de 48,8 metri", "Lungimea nivelului superior de 275 metri", "Parte a unui apeduct de 50 km", "Patrimoniu Mondial UNESCO din 1985", "Construit din aprox. 50.000 tone de piatră", "Furniza zilnic 20.000 m³ de apă orașului"],
      en: ["Height of 48.8 meters", "Top level length of 275 meters", "Part of a 50 km aqueduct system", "UNESCO World Heritage site since 1985", "Consists of approx. 50,000 tons of stone", "Supplied 20,000 m³ of water daily to Nîmes"],
    },
  },
  {
    id: "historical-carnac-stones-extra",
    type: "historical",
    parent: "FR-BRE",
    coords: [-3.0583, 47.5847],
    name: { de: "Steinreihen von Carnac", hu: "Carnaci kősorok", ro: "Aliniamentele de la Carnac", en: "Carnac Stones" },
    description: {
      de: "Die Steinreihen von Carnac in der Bretagne sind die größte Ansammlung megalithischer Steine der Welt, deren Zweck bis heute ein Rätsel ist.",
      hu: "A bretagne-i Carnaci kősorok a világ legnagyobb megalitikus kőegyüttese, melynek célja máig rejtély.",
      ro: "Aliniamentele de la Carnac din Bretania reprezintă cea mai mare colecție de pietre megalitice din lume, al căror scop rămâne un mister.",
      en: "The Carnac stones in Brittany are the largest collection of megalithic stones in the world, whose purpose remains a mystery to this day."
    },
    facts: {
      de: ["Über 3.000 prähistorische Menhire.", "Stammen aus der Jungsteinzeit (ca. 4500-2000 v. Chr.).", "Drei Hauptgruppen von Steinreihen: Le Ménec, Kermario, Kerlescan."],
      hu: ["Több mint 3000 őskori menhir.", "Az újkőkorszakból származnak (kb. i.e. 4500-2000).", "Három fő kősorcsoport: Le Ménec, Kermario, Kerlescan."],
      ro: ["Peste 3.000 de menhire preistorice.", "Datează din perioada neolitică (cca. 4500-2000 î.Hr.).", "Trei grupuri principale de aliniamente: Le Ménec, Kermario, Kerlescan."],
      en: ["Over 3,000 prehistoric menhirs.", "Dating from the Neolithic period (c. 4500-2000 BC).", "Three main groups of alignments: Le Ménec, Kermario, Kerlescan."]
    }, image: "/poi-images/historical-carnac-stones-extra.webp",
    descriptionAdvanced: {
      de: "Die Steinreihen von Carnac in der Bretagne umfassen über 3.000 prähistorische Menhire. Die Megalithen wurden zwischen 4500 und 3300 v. Chr. während der Jungsteinzeit aufgestellt. Sie erstrecken sich über mehrere Kilometer in verschiedenen Formationen wie Ménec und Kermario. Der genaue Zweck der Anlage bleibt bis heute ein Rätsel.",
      hu: "A Carnac-i kősorok Bretagne-ban több mint 3000 prehisztorikus menhirt foglalnak magukban. A megalitokat i. e. 4500 és 3300 között, az újkőkorszakban állították fel. Több kilométeren keresztül húzódnak különböző formációkban, mint a Ménec és a Kermario. Az építmények pontos célja ma is rejtély.",
      ro: "Aliniamentele de la Carnac din Bretania cuprind peste 3.000 de menhire preistorice. Megaliții au fost ridicați între 4500 și 3300 î.Hr., în timpul neoliticului. Aceștia se întind pe câțiva kilometri în diverse formațiuni, precum Ménec și Kermario. Scopul exact al acestor structuri rămâne un mister.",
      en: "The Carnac stones in Brittany consist of more than 3,000 prehistoric standing stones. These megaliths were erected between 4500 and 3300 BC during the Neolithic period. They stretch over several kilometers in various alignments such as Ménec and Kermario. The exact purpose of the site remains a mystery to this day.",
    },
    factsAdvanced: {
      de: ["Über 3.000 Menhire insgesamt", "Älteste Steine von ca. 4500 v. Chr.", "Größtes Megalith-Ensemble der Welt", "Hauptraster Ménec hat 1.099 Steine", "Menhir-Höhe zwischen 0,5 und 6 Metern", "Erstreckt sich über 4 Kilometer"],
      hu: ["Összesen több mint 3000 menhir", "A legrégebbi kövek i. e. 4500-ból valók", "A világ legnagyobb megalit-együttese", "A Ménec-mező 1099 követ tartalmaz", "A kövek magassága 0,5 és 6 méter közötti", "Kb. 4 kilométer hosszan terül el"],
      ro: ["Peste 3.000 de menhire în total", "Cele mai vechi datează din 4500 î.Hr.", "Cel mai mare ansamblu megalitic din lume", "Situl Ménec conține 1.099 de pietre", "Înălțimea menhirelor între 0,5 și 6 metri", "Se întinde pe o lungime de 4 kilometri"],
      en: ["Over 3,000 menhirs in total", "Oldest stones date to approx. 4500 BC", "World's largest megalithic site", "Ménec alignment contains 1,099 stones", "Stone height varies from 0.5 to 6 meters", "Stretches across 4 kilometers"],
    },
  },
  {
    id: "city-avignon-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [4.8056, 43.9493],
    name: { de: "Avignon", hu: "Avignon", ro: "Avignon", en: "Avignon" },
    description: {
      de: "Avignon ist berühmt für den Papstpalast, in dem die Päpste im 14. Jahrhundert residierten. Die Brücke von Avignon, Pont Saint-Bénézet, ist ebenfalls weltberühmt.",
      hu: "Avignon a Pápai palotáról híres, ahol a 14. században a pápák székeltek. Az avignoni híd, a Pont Saint-Bénézet, szintén világhírű.",
      ro: "Avignon este renumit pentru Palatul Papilor, unde au locuit papii în secolul al XIV-lea. Podul din Avignon, Pont Saint-Bénézet, este de asemenea faimos în întreaga lume.",
      en: "Avignon is famous for the Palais des Papes (Palace of the Popes), where the Popes resided in the 14th century. The Pont d'Avignon (Pont Saint-Bénézet) is also world-famous."
    },
    facts: {
      de: ["Historisches Zentrum ist UNESCO-Weltkulturerbe.", "Jährliches Theaterfestival im Juli.", "Berühmtes Lied 'Sur le Pont d'Avignon'."],
      hu: ["Történelmi központja az UNESCO Világörökség része.", "Évenkénti színházi fesztivál júliusban.", "Híres dal: 'Sur le Pont d'Avignon'."],
      ro: ["Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Festival anual de teatru în iulie.", "Cântecul faimos 'Sur le Pont d'Avignon'."],
      en: ["Historic center is a UNESCO World Heritage site.", "Annual theatre festival in July.", "Famous song 'Sur le Pont d'Avignon'."]
    }, image: "/poi-images/city-avignon-extra.webp",
    descriptionAdvanced: {
      de: "Avignon liegt an der Rhone in der Provence und war im 14. Jahrhundert Sitz der Päpste. Der massive Papstpalast zeugt von dieser bedeutenden historischen Ära. Bekannt ist auch die Brücke Pont Saint-Bénézet, von der heute nur noch vier Bögen erhalten sind. Die Stadtmauer umschließt den gut erhaltenen mittelalterlichen Kern.",
      hu: "Avignon a Rhône folyó partján, Provence-ban fekszik, és a 14. században a pápák székhelye volt. A masszív Pápai Palota tanúskodik erről a jelentős történelmi korszakról. Híres továbbá a Pont Saint-Bénézet híd, amelynek ma már csak négy íve látható. A városfalak egy jól megőrzött középkori magot fognak körbe.",
      ro: "Avignon este situat pe râul Ron în Provence și a fost sediul papilor în secolul al XIV-lea. Masivul Palat al Papilor atestă această epocă istorică semnificativă. De asemenea, este faimos Pont Saint-Bénézet, din care s-au păstrat astăzi doar patru arcade. Zidurile orașului înconjoară centrul medieval bine conservat.",
      en: "Avignon is located on the Rhone River in Provence and served as the seat of the Popes in the 14th century. The massive Palais des Papes bears witness to this significant historical era. The city is also known for the Pont Saint-Bénézet, of which only four arches remain today. City walls encircle its well-preserved medieval core.",
    },
    factsAdvanced: {
      de: ["Sitz von 7 Päpsten (1309-1377)", "Palais des Papes ist größter Gotikpalast", "UNESCO-Weltkulturerbe seit 1995", "Stadtmauer ist 4,3 Kilometer lang", "Festival d'Avignon gegründet 1947", "Pont d'Avignon hatte einst 22 Bögen"],
      hu: ["7 pápa székhelye (1309-1377)", "A pápai palota a legnagyobb gótikus palota", "1995 óta az UNESCO Világörökség része", "A városfal 4,3 kilométer hosszú", "Az Avignoni Fesztivált 1947-ben alapították", "A hídnak eredetileg 22 íve volt"],
      ro: ["Sediul a 7 papi (1309-1377)", "Palatul Papilor este cel mai mare palat gotic", "Patrimoniu Mondial UNESCO din 1995", "Zidul orașului are 4,3 kilometri lungime", "Festivalul de la Avignon fondat în 1947", "Podul Avignon a avut inițial 22 de arcade"],
      en: ["Seat of 7 Popes (1309-1377)", "Palais des Papes is largest Gothic palace", "UNESCO World Heritage site since 1995", "City walls are 4.3 kilometers long", "Festival d'Avignon founded in 1947", "Pont d'Avignon originally had 22 arches"],
    },
  },
  {
    id: "lake-lake-geneva-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.4, 46.4],
    name: { de: "Genfersee", hu: "Genfi-tó", ro: "Lacul Geneva", en: "Lake Geneva" },
    description: {
      de: "Der Genfersee, an der Grenze zwischen Frankreich und der Schweiz gelegen, ist einer der größten Seen Westeuropas. Er ist bekannt für seine eleganten Städte und die Alpenkulisse.",
      hu: "A Genfi-tó, amely Franciaország és Svájc határán fekszik, Nyugat-Európa egyik legnagyobb tava. Elegáns városairól és alpesi hátteréről ismert.",
      ro: "Lacul Geneva, situat la granița dintre Franța și Elveția, este unul dintre cele mai mari lacuri din Europa de Vest. Este cunoscut pentru orașele sale elegante și peisajul alpin.",
      en: "Lake Geneva, located on the border between France and Switzerland, is one of the largest lakes in Western Europe. It is known for its elegant towns and Alpine backdrop."
    },
    facts: {
      de: ["Größter Alpensee.", "Französische Seite auch 'Lac Léman' genannt.", "Städte wie Évian-les-Bains am Ufer."],
      hu: ["A legnagyobb alpesi tó.", "Francia oldalon 'Lac Léman'-nak is nevezik.", "Olyan városok a partján, mint Évian-les-Bains."],
      ro: ["Cel mai mare lac alpin.", "Partea franceză numită și 'Lac Léman'.", "Orașe precum Évian-les-Bains pe malurile sale."],
      en: ["Largest Alpine lake.", "French side also called 'Lac Léman'.", "Towns like Évian-les-Bains on its shores."]
    }, image: "/poi-images/lake-lake-geneva-extra.webp",
    descriptionAdvanced: {
      de: "Der Genfersee ist der größte See Frankreichs und der Schweiz und liegt am Nordrand der Alpen. Er ist sichelförmig und wird hauptsächlich vom Fluss Rhone gespeist. Das milde Klima an seinen Ufern ermöglicht den Weinbau und mediterrane Vegetation. Zahlreiche bedeutende Städte wie Genf und Lausanne liegen an seinem Rand.",
      hu: "A Genfi-tó Franciaország és Svájc legnagyobb tava, az Alpok északi peremén található. Kifli alakú, és főként a Rhône folyó táplálja. Partjain az enyhe éghajlat lehetővé teszi a szőlőtermesztést és a mediterrán növényzetet. Számos jelentős város, például Genf és Lausanne fekszik a partján.",
      ro: "Lacul Geneva este cel mai mare lac din Franța și Elveția, situat la marginea nordică a Alpilor. Are formă de semilună și este alimentat în principal de râul Ron. Climatul blând de pe malurile sale permite viticultura și vegetația mediteraneană. Orașe importante precum Geneva și Lausanne se află pe malul său.",
      en: "Lake Geneva is the largest lake in both France and Switzerland, situated at the northern edge of the Alps. It is crescent-shaped and is primarily fed by the Rhone River. The mild climate along its shores supports viticulture and Mediterranean vegetation. Major cities like Geneva and Lausanne are located on its banks.",
    },
    factsAdvanced: {
      de: ["Fläche von ca. 580 Quadratkilometern", "Maximale Tiefe von 310 Metern", "Seehöhe liegt auf 372 Metern", "40 % der Fläche gehören zu Frankreich", "Größter Süßwasserspeicher Westeuropas", "Uferlänge beträgt insgesamt 167 km"],
      hu: ["Területe kb. 580 négyzetkilométer", "Maximális mélysége 310 méter", "A vízfelszín 372 méteres magasságban van", "A terület 40%-a tartozik Franciaországhoz", "Nyugat-Európa legnagyobb édesvíztározója", "A partvonal hossza összesen 167 km"],
      ro: ["Suprafață de aprox. 580 kmp", "Adâncime maximă de 310 metri", "Altitudinea oglinzii apei de 372 metri", "40% din suprafață aparține Franței", "Cea mai mare rezervă de apă dulce din Europa", "Lungimea totală a malurilor de 167 km"],
      en: ["Area of approx. 580 sq km", "Maximum depth of 310 meters", "Water level at 372 meters elevation", "40% of the area belongs to France", "Largest freshwater reservoir in Western Europe", "Total shoreline length of 167 km"],
    },
  },
  {
    id: "forest-fontainebleau-forest-extra",
    type: "forest",
    parent: "FR-IDF",
    coords: [2.699, 48.404],
    name: { de: "Wald von Fontainebleau", hu: "Fontainebleau-i erdő", ro: "Pădurea Fontainebleau", en: "Fontainebleau Forest" },
    description: {
      de: "Der Wald von Fontainebleau ist ein riesiges Waldgebiet südlich von Paris, das für seine Felsformationen, die zum Bouldern genutzt werden, und seine reiche Geschichte berühmt ist.",
      hu: "A Fontainebleau-i erdő egy hatalmas erdőterület Párizstól délre, híres a sziklaformációiról, amelyeket boulderezésre használnak, valamint gazdag történelméről.",
      ro: "Pădurea Fontainebleau este o pădure vastă la sud de Paris, renumită pentru formațiunile sale stâncoase folosite pentru bouldering și pentru istoria sa bogată.",
      en: "The Forest of Fontainebleau is a vast forest south of Paris, famous for its rock formations used for bouldering and its rich history."
    },
    facts: {
      de: ["Eines der größten Waldgebiete Frankreichs.", "Beliebtes Ziel für Boulderer und Wanderer.", "Inspirationsquelle für viele Künstler des 19. Jahrhunderts."],
      hu: ["Franciaország egyik legnagyobb erdőterülete.", "Népszerű célpont a boulder-mászók és túrázók számára.", "Sok 19. századi művész ihletforrása volt."],
      ro: ["Una dintre cele mai mari păduri din Franța.", "Destinație populară pentru bouldering și drumeții.", "Sursă de inspirație pentru mulți artiști din secolul al XIX-lea."],
      en: ["One of the largest forests in France.", "Popular destination for boulderers and hikers.", "Source of inspiration for many 19th-century artists."]
    }, image: "/poi-images/forest-fontainebleau-forest-extra.webp",
    descriptionAdvanced: {
      de: "Der Wald von Fontainebleau liegt etwa 60 Kilometer südöstlich von Paris und ist ein ehemaliges königliches Jagdgebiet. Er ist berühmt für seine markanten Sandsteinformationen und feinen Sandböden. Das Gebiet ist ein weltweit bekanntes Ziel für das Klettern an Felsblöcken (Bouldern). Das prächtige Schloss Fontainebleau grenzt direkt an den Wald.",
      hu: "A Fontainebleau-i erdő Párizstól kb. 60 kilométerre délkeletre fekszik, és egykori királyi vadászterület. Híres különleges homokkő-alakzatairól és finom homokos talajáról. A terület világszerte ismert a sziklamászók (boulderezés) körében. A pompás Fontainebleau-i kastély közvetlenül az erdő mellett található.",
      ro: "Pădurea Fontainebleau se află la aproximativ 60 de kilometri sud-est de Paris și este un fost domeniu de vânătoare regal. Este faimoasă pentru formațiunile sale de gresie și solurile nisipoase fine. Zona este o destinație renumită la nivel mondial pentru bouldering. Castelul Fontainebleau se învecinează direct cu pădurea.",
      en: "Fontainebleau Forest is located about 60 kilometers southeast of Paris and is a former royal hunting ground. It is famous for its distinct sandstone formations and fine sandy soils. The area is a world-renowned destination for bouldering. The magnificent Palace of Fontainebleau borders the forest directly.",
    },
    factsAdvanced: {
      de: ["Fläche von etwa 25.000 Hektar", "Über 11 Millionen Besucher jährlich", "Heimat der Malerschule von Barbizon", "Erstes Naturschutzgebiet der Welt (1861)", "Höchster Punkt liegt auf 144 Metern", "Enthält über 300 km markierte Wanderwege"],
      hu: ["Területe kb. 25 000 hektár", "Évente több mint 11 millió látogató", "A Barbizon-i festőiskola otthona", "A világ első természetvédelmi területe (1861)", "Legmagasabb pontja 144 méteren van", "Több mint 300 km jelzett turistaút"],
      ro: ["Suprafață de aproximativ 25.000 de hectare", "Peste 11 milioane de vizitatori anual", "Locul școlii de pictură de la Barbizon", "Prima rezervație naturală din lume (1861)", "Punctul maxim la 144 de metri", "Peste 300 km de trasee marcate"],
      en: ["Area of approximately 25,000 hectares", "Over 11 million annual visitors", "Home to the Barbizon school of painters", "World's first nature reserve (1861)", "Highest point is 144 meters", "Features over 300 km of marked trails"],
    },
  },
  {
    id: "agriculture-champagne-region-extra",
    type: "agriculture",
    parent: "FR-GES",
    coords: [4.3333, 49.1667],
    name: { de: "Champagne-Region", hu: "Champagne borvidék", ro: "Regiunea Champagne", en: "Champagne Region" },
    description: {
      de: "Die Champagne ist die einzige Region der Welt, in der echter Champagner hergestellt werden darf. Die Weinberge, Häuser und Keller sind UNESCO-Weltkulturerbe.",
      hu: "Champagne az egyetlen régió a világon, ahol valódi pezsgőt lehet készíteni. A szőlőültetvények, a házak és a pincék az UNESCO Világörökség részét képezik.",
      ro: "Champagne este singura regiune din lume unde se poate produce șampanie autentică. Viile, casele și pivnițele sunt situri ale Patrimoniului Mondial UNESCO.",
      en: "Champagne is the only region in the world where true champagne can be produced. Its vineyards, houses, and cellars are a UNESCO World Heritage site."
    },
    facts: {
      de: ["Hauptstädte: Reims und Épernay.", "Herstellung nach der 'méthode champenoise'.", "Kreideböden sind entscheidend für den Geschmack."],
      hu: ["Fő városai: Reims és Épernay.", "A 'méthode champenoise' eljárással készül.", "A krétás talaj döntő a pezsgő íze szempontjából."],
      ro: ["Orașe principale: Reims și Épernay.", "Producție conform 'méthode champenoise'.", "Solurile de cretă sunt cruciale pentru aromă."],
      en: ["Main cities: Reims and Épernay.", "Production according to the 'méthode champenoise'.", "Chalk soils are crucial for the flavor."]
    },
    descriptionAdvanced: {
      de: "Die Champagne ist eine historische Provinz im Nordosten Frankreichs, die weltweit für ihren Schaumwein bekannt ist. Die Weinberge erstrecken sich über die Departements Marne, Aube und Aisne auf kalkhaltigen Böden. Seit 2015 gehören die Weinberge, Häuser und Keller der Champagne zum UNESCO-Welterbe. Die Region ist geprägt durch streng kontrollierte Anbaugebiete und traditionelle Flaschengärung.",
      hu: "Champagne egy történelmi tartomány Franciaország északkeleti részén, amely világszerte híres pezsgőjéről. A szőlőültetvények Marne, Aube és Aisne megyék meszes talajain terülnek el. 2015 óta a Champagne borvidék dűlői, házai és pincéi az UNESCO Világörökség részét képezik. A régióra a szigorúan ellenőrzött eredetmegjelölés és a tradicionális palackos erjesztés jellemző.",
      ro: "Regiunea Champagne este o provincie istorică din nord-estul Franței, faimoasă la nivel mondial pentru vinul său spumant. Podgoriile se întind în departamentele Marne, Aube și Aisne pe soluri calcaroase. Din 2015, dealurile, casele și cramele din Champagne fac parte din Patrimoniul Mondial UNESCO. Regiunea este definită de denumiri de origine controlate riguros și metode tradiționale de fermentare.",
      en: "The Champagne region is a historical province in northeastern France, globally renowned for its sparkling wine. The vineyards span the departments of Marne, Aube, and Aisne on predominantly chalky soils. Since 2015, the hillsides, houses, and cellars of Champagne have been listed as a UNESCO World Heritage site. The region is characterized by strictly controlled production areas and the traditional method of bottle fermentation.",
    },
    factsAdvanced: {
      de: ["Die Herkunftsbezeichnung Champagne (AOC) wurde 1936 rechtlich geschützt.", "Die Region umfasst etwa 34.000 Hektar registrierte Rebflächen.", "Reims und Épernay gelten als die wichtigsten Handelszentren der Region.", "Über 300 Millionen Flaschen Champagner werden jährlich produziert.", "Die Kreidekeller in Reims liegen bis zu 40 Meter unter der Erdoberfläche.", "Drei Hauptrebsorten sind zugelassen: Chardonnay, Pinot Noir und Pinot Meunier."],
      hu: ["A Champagne eredetmegjelölést (AOC) 1936-ban rögzítették jogilag.", "A régió körülbelül 34 000 hektárnyi regisztrált szőlőterülettel rendelkezik.", "Reims és Épernay a terület legfontosabb kereskedelmi központjai.", "Évente több mint 300 millió palack pezsgőt állítanak elő a régióban.", "A reims-i mészkőpincék akár 40 méter mélyen is a föld alatt feküdhetnek.", "Három fő szőlőfajta engedélyezett: Chardonnay, Pinot Noir és Pinot Meunier."],
      ro: ["Denumirea de origine Champagne (AOC) a fost protejată juridic în 1936.", "Regiunea cuprinde aproximativ 34.000 de hectare de viță-de-vie înregistrată.", "Reims și Épernay sunt considerate principalele centre comerciale ale zonei.", "Peste 300 de milioane de sticle de șampanie sunt produse anual în regiune.", "Cramele de cretă din Reims se află la o adâncime de până la 40 de metri.", "Sunt autorizate trei soiuri principale: Chardonnay, Pinot Noir și Pinot Meunier."],
      en: ["The Champagne appellation (AOC) was legally established in 1936.", "The region encompasses approximately 34,000 hectares of registered vineyards.", "Reims and Épernay are the primary commercial centers for the industry.", "Over 300 million bottles of Champagne are produced annually in the region.", "Chalk cellars in Reims can be found up to 40 meters below the surface.", "Three main grape varieties are permitted: Chardonnay, Pinot Noir, and Pinot Meunier."],
    },
  },
  {
    id: "city-dijon-extra",
    type: "city",
    parent: "FR-BFC",
    coords: [5.0415, 47.3220],
    name: { de: "Dijon", hu: "Dijon", ro: "Dijon", en: "Dijon" },
    description: {
      de: "Dijon, die Hauptstadt von Burgund, ist berühmt für ihren Senf, den Kir-Cocktail und ihre reiche Geschichte als Sitz der Herzöge von Burgund.",
      hu: "Dijon, Burgundia fővárosa, híres a mustárjáról, a Kir koktélról és gazdag történelméről, mint a burgundi hercegek székhelye.",
      ro: "Dijon, capitala Burgundiei, este renumit pentru muștarul său, cocktailul Kir și istoria sa bogată ca sediu al ducilor de Burgundia.",
      en: "Dijon, the capital of Burgundy, is famous for its mustard, the Kir cocktail, and its rich history as the seat of the Dukes of Burgundy."
    },
    facts: {
      de: ["Historisches Zentrum ist UNESCO-Weltkulturerbe.", "Palast der Herzöge von Burgund.", "Internationale Gastronomiemesse jeden Herbst."],
      hu: ["Történelmi központja az UNESCO Világörökség része.", "A burgundi hercegek palotája.", "Minden ősszel nemzetközi gasztronómiai vásár."],
      ro: ["Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Palatul Ducilor de Burgundia.", "Târg internațional de gastronomie în fiecare toamnă."],
      en: ["Historic center is a UNESCO World Heritage site.", "Palace of the Dukes of Burgundy.", "International gastronomy fair every autumn."]
    }, image: "/poi-images/city-dijon-extra.webp",
    descriptionAdvanced: {
      de: "Dijon ist die historische Hauptstadt des Herzogtums Burgund und Sitz der Region Bourgogne-Franche-Comté. Die Stadt ist weltweit für ihren Senf bekannt, besitzt aber auch ein herausragendes architektonisches Erbe aus dem Mittelalter und der Renaissance. Das historische Zentrum gehört seit 2015 zum UNESCO-Welterbe. Zahlreiche Stadtpaläste aus lokalem Kalkstein prägen das elegante Stadtbild.",
      hu: "Dijon a Burgund hercegség történelmi fővárosa és Burgundia-Franche-Comté régió székhelye. A város világszerte ismert a mustárjáról, de kiemelkedő középkori és reneszánsz építészeti örökséggel is rendelkezik. Történelmi központja 2015 óta az UNESCO Világörökség része. A helyi mészkőből épült számos városi palota határozza meg elegáns utcaképét.",
      ro: "Dijon este capitala istorică a Ducatului Burgundiei și sediul regiunii Bourgogne-Franche-Comté. Orașul este cunoscut la nivel mondial pentru muștarul său, dar deține și un patrimoniu arhitectural remarcabil din Evul Mediu și Renaștere. Centrul istoric face parte din Patrimoniul Mondial UNESCO din 2015. Numeroase palate urbane din calcar local definesc peisajul urban elegant.",
      en: "Dijon is the historical capital of the Duchy of Burgundy and the seat of the Bourgogne-Franche-Comté region. While globally famous for its mustard, the city boasts an outstanding architectural heritage from the Middle Ages and Renaissance. Its historic center has been a UNESCO World Heritage site since 2015. Numerous townhouses built from local limestone characterize its elegant cityscape.",
    },
    factsAdvanced: {
      de: ["Der Palais des Ducs beherbergt heute das Rathaus und ein Kunstmuseum.", "Der Botanische Garten Arquebuse wurde im Jahr 1833 eröffnet.", "Die Eule an der Kirche Notre-Dame gilt als Glücksbringer der Stadt.", "Dijon war im 14. und 15. Jahrhundert ein bedeutendes europäisches Machtzentrum.", "Die Stadt liegt am Canal de Bourgogne, der 1832 fertiggestellt wurde.", "Dijon ist ein wichtiger Verkehrsknotenpunkt zwischen Paris und Lyon."],
      hu: ["A Palais des Ducs ma a városházának és egy művészeti múzeumnak ad otthont.", "Az Arquebuse botanikus kertet 1833-ban nyitották meg a nagyközönség előtt.", "A Notre-Dame templom falán lévő bagoly a város szerencsehozó jelképe.", "Dijon a 14. és 15. században jelentős európai hatalmi központ volt.", "A város a 1832-ben befejezett Burgundiai-csatorna mentén fekszik.", "Dijon fontos közlekedési csomópont Párizs és Lyon között."],
      ro: ["Palatul Ducilor găzduiește astăzi primăria și un muzeu de artă.", "Grădina Botanică Arquebuse a fost deschisă în anul 1833.", "Bufnița de pe biserica Notre-Dame este considerată talismanul orașului.", "Dijon a fost un centru de putere european major în secolele XIV și XV.", "Orașul este situat pe Canalul Burgundiei, finalizat în anul 1832.", "Dijon este un nod de transport important între Paris și Lyon."],
      en: ["The Palace of the Dukes now houses the city hall and a fine arts museum.", "The Arquebuse Botanical Garden was officially opened in 1833.", "The owl carved on Notre-Dame Church is a famous local good-luck charm.", "Dijon was a major European center of power during the 14th and 15th centuries.", "The city sits on the Canal de Bourgogne, which was completed in 1832.", "Dijon serves as a vital transportation hub between Paris and Lyon."],
    },
  },
  {
    id: "castle-chateau-haut-koenigsbourg-extra",
    type: "castle",
    parent: "FR-GES",
    coords: [7.344, 48.249],
    name: { de: "Hohkönigsburg", hu: "Haut-Koenigsbourg kastély", ro: "Castelul Haut-Koenigsbourg", en: "Château du Haut-Koenigsbourg" },
    description: {
      de: "Die Hohkönigsburg im Elsass ist eine restaurierte Bergfestung aus dem 12. Jahrhundert, die einen atemberaubenden Blick über die Rheinebene bietet.",
      hu: "A Haut-Koenigsbourg kastély Elzászban egy 12. századi, helyreállított hegyi erőd, ahonnan lenyűgöző kilátás nyílik a Rajna-völgyre.",
      ro: "Castelul Haut-Koenigsbourg din Alsacia este o fortăreață montană restaurată din secolul al XII-lea, oferind o priveliște uluitoare asupra câmpiei Rinului.",
      en: "The Château du Haut-Koenigsbourg in Alsace is a restored 12th-century mountain fortress offering a breathtaking view over the Rhine plain."
    },
    facts: {
      de: ["Im frühen 20. Jahrhundert von Kaiser Wilhelm II. restauriert.", "Strategische Lage auf einem Felsvorsprung.", "Eine der meistbesuchten Burgen Frankreichs."],
      hu: ["II. Vilmos császár restauráltatta a 20. század elején.", "Stratégiai elhelyezkedés egy sziklakiszögellésen.", "Franciaország egyik leglátogatottabb vára."],
      ro: ["Restaurat la începutul secolului al XX-lea de către împăratul Wilhelm al II-lea.", "Poziție strategică pe un promontoriu stâncos.", "Unul dintre cele mai vizitate castele din Franța."],
      en: ["Restored in the early 20th century by Emperor Wilhelm II.", "Strategic location on a rocky spur.", "One of the most visited castles in France."]
    }, image: "/poi-images/castle-chateau-haut-koenigsbourg-extra.webp",
    descriptionAdvanced: {
      de: "Die Haut-Koenigsbourg ist eine imposante Burgfestung in den Vogesen im Elsass. Sie wurde im 12. Jahrhundert erbaut, im Dreißigjährigen Krieg zerstört und Anfang des 20. Jahrhunderts unter Kaiser Wilhelm II. aufwendig rekonstruiert. Die Burg thront auf einem 757 Meter hohen Felskegel und bietet eine weite Sicht über die Rheinebene. Sie ist ein herausragendes Beispiel für die Wehrarchitektur der Stauferzeit.",
      hu: "Haut-Koenigsbourg egy impozáns várkastély az elzászi Vogézekben. A 12. században épült, a harmincéves háborúban elpusztult, majd a 20. század elején II. Vilmos császár parancsára teljesen újjáépítették. A vár egy 757 méter magas sziklakúpon trónol, és széles kilátást nyújt a Rajna-síkságra. A Staufer-korszak erődépítészetének egyik kiemelkedő példája.",
      ro: "Haut-Koenigsbourg este o cetate impunătoare situată în munții Vosgi din Alsacia. A fost construită în secolul al XII-lea, distrusă în Războiul de Treizeci de Ani și reconstruită la începutul secolului XX sub împăratul Wilhelm al II-lea. Castelul domină un vârf stâncos de 757 de metri și oferă o vedere panoramică asupra câmpiei Rinului. Este un exemplu remarcabil de arhitectură militară din perioada Staufer.",
      en: "Haut-Koenigsbourg is an imposing fortress located in the Vosges mountains of Alsace. Originally built in the 12th century and destroyed during the Thirty Years' War, it was extensively reconstructed in the early 20th century under Emperor Wilhelm II. The castle sits atop a 757-meter-high rocky outcrop, offering panoramic views of the Rhine plain. It serves as an outstanding example of mountain fortress architecture.",
    },
    factsAdvanced: {
      de: ["Die Burg wurde erstmals im Jahr 1147 urkundlich erwähnt.", "Die Rekonstruktion unter Bodo Ebhardt dauerte von 1900 bis 1908.", "Die Festung ist fast 270 Meter lang und besteht aus rotem Sandstein.", "Jährlich besuchen über 500.000 Menschen diese elsässische Sehenswürdigkeit.", "Der Name bedeutet übersetzt Königsburg oder obere Königsburg.", "In der Burg befinden sich umfangreiche Sammlungen von Waffen und Möbeln."],
      hu: ["A várat először 1147-ben említik hivatalos dokumentumokban.", "A Bodo Ebhardt vezette rekonstrukció 1900-tól 1908-ig tartott.", "Az erőd közel 270 méter hosszú és vörös homokkőből épült.", "Évente több mint 500 000 látogató keresi fel ezt az elzászi látványosságot.", "A név jelentése szabad fordításban Királyi Vár vagy Felső-Királyvár.", "A várban fegyverekből és bútorokból álló kiterjedt gyűjtemény található."],
      ro: ["Castelul a fost menționat documentar pentru prima dată în anul 1147.", "Reconstrucția sub conducerea lui Bodo Ebhardt a durat din 1900 până în 1908.", "Fortăreața are o lungime de aproape 270 de metri și este din gresie roșie.", "Peste 500.000 de oameni vizitează anual acest obiectiv turistic alsacian.", "Numele se traduce prin Castelul Regelui sau Castelul Regal de Sus.", "În interiorul castelului se află colecții vaste de arme și mobilier."],
      en: ["The castle was first documented in historical records in 1147.", "The reconstruction directed by Bodo Ebhardt lasted from 1900 to 1908.", "The fortress is nearly 270 meters long and built of red sandstone.", "More than 500,000 people visit this Alsatian landmark annually.", "The name translates to King's Castle or Upper King's Castle.", "The interior houses extensive collections of medieval weapons and furniture."],
    },
  },
  {
    id: "city-clermont-ferrand-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [3.0870, 45.7772],
    name: { de: "Clermont-Ferrand", hu: "Clermont-Ferrand", ro: "Clermont-Ferrand", en: "Clermont-Ferrand" },
    description: {
      de: "Clermont-Ferrand liegt im Zentralmassiv und ist berühmt für seine Kette von Vulkanen, die Chaîne des Puys, und als Heimat des Reifenherstellers Michelin.",
      hu: "Clermont-Ferrand a Francia-középhegységben fekszik, híres a Chaîne des Puys nevű vulkáni láncáról és a Michelin gumiabroncsgyártó otthonaként.",
      ro: "Clermont-Ferrand se află în Masivul Central și este renumit pentru lanțul său de vulcani, Chaîne des Puys, și ca sediu al producătorului de anvelope Michelin.",
      en: "Clermont-Ferrand is located in the Massif Central and is famous for its chain of volcanoes, the Chaîne des Puys, and as the home of the Michelin tire company."
    },
    facts: {
      de: ["Umgeben von 80 erloschenen Vulkanen.", "Hauptsitz von Michelin.", "Kathedrale aus schwarzem Lavastein."],
      hu: ["80 kialudt vulkán veszi körül.", "A Michelin főhadiszállása.", "Fekete lávakőből épült katedrális."],
      ro: ["Înconjurat de 80 de vulcani stinși.", "Sediul central al Michelin.", "Catedrală construită din piatră de lavă neagră."],
      en: ["Surrounded by 80 dormant volcanoes.", "Headquarters of Michelin.", "Cathedral made of black lava stone."]
    }, image: "/poi-images/city-clermont-ferrand-extra.webp",
    descriptionAdvanced: {
      de: "Clermont-Ferrand liegt im Herzen Zentralfrankreichs am Fuße der Chaîne des Puys, einer Kette erloschener Vulkane. Die Stadt entstand 1731 durch den Zusammenschluss der Städte Clermont und Montferrand. Einzigartig ist die Verwendung von schwarzem Lavagestein für viele historische Gebäude, darunter die gotische Kathedrale. Die Stadt ist zudem als Hauptsitz des Reifenherstellers Michelin weltberühmt.",
      hu: "Clermont-Ferrand Franciaország központi részén fekszik, a Chaîne des Puys kialudt vulkánláncának lábánál. A város 1731-ben jött létre Clermont és Montferrand egyesülésével. Különlegessége a fekete lávakő használata számos történelmi épületnél, köztük a gótikus katedrálisnál. A város a Michelin gumiabroncsgyártó központjaként is világszerte ismert.",
      ro: "Clermont-Ferrand este situat în inima Franței centrale, la poalele Chaîne des Puys, un lanț de vulcani stinși. Orașul a fost creat în 1731 prin fuziunea orașelor Clermont și Montferrand. Un element unic este utilizarea rocii vulcanice negre pentru multe clădiri istorice, inclusiv catedrala gotică. Orașul este faimos și ca sediu central al producătorului de anvelope Michelin.",
      en: "Clermont-Ferrand is located in central France at the foot of the Chaîne des Puys, a chain of extinct volcanoes. The city was formed in 1731 by the union of the towns of Clermont and Montferrand. It is unique for the widespread use of black volcanic rock in its historic buildings, most notably the Gothic cathedral. The city is also globally famous as the headquarters of the Michelin tire company.",
    },
    factsAdvanced: {
      de: ["Die Kathedrale Notre-Dame-de-l'Assomption wurde ab 1248 erbaut.", "Im Jahr 1095 rief Papst Urban II. hier zum Ersten Kreuzzug auf.", "Michelin wurde 1889 in Clermont-Ferrand von zwei Brüdern gegründet.", "Der Vulkan Puy de Dôme liegt nur etwa 10 Kilometer vom Zentrum entfernt.", "Das internationale Kurzfilmfestival findet hier seit 1979 jährlich statt.", "Die Stadtmauer von Montferrand gehört zu den besterhaltenen Frankreichs."],
      hu: ["A Notre-Dame-de-l'Assomption katedrális építése 1248-ban kezdődött.", "1095-ben II. Orbán pápa itt hirdette meg az első keresztes hadjáratot.", "A Michelint 1889-ben alapította két testvér Clermont-Ferrand-ban.", "A Puy de Dôme vulkán mindössze 10 kilométerre fekszik a központtól.", "A nemzetközi rövidfilmfesztivált 1979 óta évente itt rendezik meg.", "Montferrand városfala Franciaország egyik legjobb állapotú várfala."],
      ro: ["Catedrala Notre-Dame-de-l'Assomption a fost construită începând cu 1248.", "În 1095, Papa Urban al II-lea a proclamat aici Prima Cruciadă.", "Michelin a fost fondată în 1889 la Clermont-Ferrand de către doi frați.", "Vulcanul Puy de Dôme se află la doar 10 kilometri de centrul orașului.", "Festivalul internațional de scurtmetraj are loc aici anual din 1979.", "Zidurile cetății Montferrand sunt printre cele mai bine conservate din Franța."],
      en: ["The Cathedral of Notre-Dame-de-l'Assomption was begun in 1248.", "In 1095, Pope Urban II launched the First Crusade from this city.", "Michelin was founded in Clermont-Ferrand by two brothers in 1889.", "The Puy de Dôme volcano is located just 10 kilometers from the city.", "The International Short Film Festival has been held here since 1979.", "Montferrand's city walls are among the best-preserved in France."],
    },
  },
  {
    id: "kid-landmark-futuroscope-extra",
    type: "kid-landmark",
    parent: "FR-NAQ",
    coords: [0.3636, 46.6631],
    name: { de: "Futuroscope", hu: "Futuroscope", ro: "Futuroscope", en: "Futuroscope" },
    description: {
      de: "Futuroscope ist ein einzigartiger Themenpark, der sich auf Multimedia, Kino und futuristische Technologien konzentriert. Seine Pavillons haben auffällige, moderne Architekturen.",
      hu: "A Futuroscope egy egyedülálló vidámpark, amely a multimédiára, a moira és a futurisztikus technológiákra összpontosít. Pavilonjai feltűnő, modern építészeti stílusúak.",
      ro: "Futuroscope este un parc tematic unic axat pe multimedia, cinema și tehnologii futuriste. Pavilioanele sale au o arhitectură modernă și izbitoare.",
      en: "Futuroscope is a unique theme park focusing on multimedia, cinema, and futuristic technologies. Its pavilions have striking, modern architectures."
    },
    facts: {
      de: ["Fokus auf audiovisuelle Erlebnisse.", "Mischung aus 3D-, 4D-Kinos und interaktiven Attraktionen.", "Eröffnet im Jahr 1987."],
      hu: ["Fókuszban az audiovizuális élmények.", "3D, 4D mozik és interaktív attrakciók keveréke.", "1987-ben nyílt meg."],
      ro: ["Accent pe experiențe audiovizuiale.", "Amestec de cinematografe 3D, 4D și atracții interactive.", "Inaugurat în 1987."],
      en: ["Focus on audiovisual experiences.", "Mix of 3D, 4D cinemas, and interactive attractions.", "Opened in 1987."]
    }, image: "/poi-images/kid-landmark-futuroscope-extra.webp",
    descriptionAdvanced: {
      de: "Das Futuroscope ist ein multimedialer Themenpark in der Nähe von Poitiers, der sich auf futuristische Technologien und Kinematografie konzentriert. Er wurde 1987 eröffnet und zeichnet sich durch seine außergewöhnliche, gläserne Architektur aus. Die Attraktionen nutzen 3D- und 4D-Techniken sowie dynamische Simulatoren. Es ist einer der meistbesuchten Freizeitparks Frankreichs und fördert spielerisch das Interesse an Wissenschaft.",
      hu: "A Futuroscope egy multimédiás témapark Poitiers közelében, amely a jövő technológiáira és a mozgóképművészetre összpontosít. 1987-ben nyitották meg, és különleges, üvegből készült építészeti megoldásairól ismert. A látványosságok 3D-s és 4D-s technikákat, valamint dinamikus szimulátorokat használnak. Franciaország egyik leglátogatottabb szabadidőparkja, amely játékosan népszerűsíti a tudományt.",
      ro: "Futuroscope este un parc tematic multimedia situat lângă Poitiers, axat pe tehnologii futuriste și cinematografie. A fost deschis în 1987 și se remarcă prin arhitectura sa spectaculoasă din sticlă. Atracțiile utilizează tehnologii 3D și 4D, precum și simulatoare dinamice. Este unul dintre cele mai vizitate parcuri de distracții din Franța și promovează știința prin divertisment.",
      en: "Futuroscope is a multimedia theme park located near Poitiers, focusing on future technologies and cinematography. Opened in 1987, it is distinguished by its extraordinary glass-based architectural designs. The attractions utilize 3D and 4D techniques along with dynamic simulators. It is one of France's most visited amusement parks and promotes scientific interest through immersive entertainment.",
    },
    factsAdvanced: {
      de: ["Der Park wurde offiziell am 31. Mai 1987 eingeweiht.", "Die ikonische Kugel 'Kinemax' war zur Eröffnung die größte Leinwand Europas.", "Über 50 Millionen Besucher haben den Park seit der Eröffnung besucht.", "Das Gelände umfasst eine Fläche von insgesamt etwa 60 Hektar.", "Der Pavillon de la Vienne zeigt Filme auf einer 600 Quadratmeter großen Wand.", "Das Futuroscope verfügt über einen eigenen TGV-Bahnhof für Besucher."],
      hu: ["A parkot hivatalosan 1987. május 31-én adták át.", "Az ikonikus 'Kinemax' gömb nyitáskor Európa legnagyobb vetítővászna volt.", "A megnyitás óta több mint 50 millió látogató kereste fel a parkot.", "A park területe összesen körülbelül 60 hektárt tesz ki.", "A Pavillon de la Vienne egy 600 négyzetméteres falon vetít filmeket.", "A Futuroscope saját TGV-vasútállomással rendelkezik a látogatók számára."],
      ro: ["Parcul a fost inaugurat oficial la data de 31 mai 1987.", "Sfera iconică 'Kinemax' avea cel mai mare ecran din Europa la deschidere.", "Peste 50 de milioane de vizitatori au trecut pragul parcului de la deschidere.", "Suprafața totală a parcului este de aproximativ 60 de hectare.", "Pavillon de la Vienne proiectează filme pe un perete de 600 de metri pătrați.", "Futuroscope are propria stație de tren TGV pentru accesul vizitatorilor."],
      en: ["The park was officially inaugurated on May 31, 1987.", "The iconic 'Kinemax' sphere held Europe's largest screen at opening.", "Over 50 million guests have visited the park since it first opened.", "The park's grounds cover a total area of approximately 60 hectares.", "The Pavillon de la Vienne projects films on a 600-square-meter wall.", "Futuroscope has its own dedicated TGV train station for visitors."],
    },
  },
  {
    id: "historical-omaha-beach-extra",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.8803, 49.3711],
    name: { de: "Omaha Beach", hu: "Omaha part", ro: "Plaja Omaha", en: "Omaha Beach" },
    description: {
      de: "Omaha Beach war einer der fünf Landungsabschnitte der Alliierten in der Normandie am D-Day, dem 6. Juni 1944. Es war der Ort der intensivsten Kämpfe.",
      hu: "Az Omaha part egyike volt az öt szövetséges partraszállási zónának Normandiában a D-napon, 1944. június 6-án. Itt zajlottak a leghevesebb harcok.",
      ro: "Plaja Omaha a fost una dintre cele cinci sectoare de debarcare ale Aliaților în Normandia în Ziua Z, 6 iunie 1944. A fost locul celor mai intense lupte.",
      en: "Omaha Beach was one of the five Allied landing sectors in Normandy on D-Day, June 6, 1944. It was the site of the most intense fighting."
    },
    facts: {
      de: ["Codename für einen der Hauptlandungsstrände.", "Amerikanischer Soldatenfriedhof in der Nähe.", "Schauplatz schwerer US-Verluste."],
      hu: ["Az egyik fő partraszállási strand kódneve.", "Amerikai katonai temető a közelben.", "Súlyos amerikai veszteségek helyszíne."],
      ro: ["Nume de cod pentru una dintre principalele plaje de debarcare.", "Cimitirul soldaților americani în apropiere.", "Locul unor grele pierderi americane."],
      en: ["Codename for one of the main landing beaches.", "American military cemetery nearby.", "Site of heavy US casualties."]
    }, image: "/poi-images/historical-omaha-beach-extra.webp",
    descriptionAdvanced: {
      de: "Omaha Beach ist einer der fünf Landungsabschnitte der Alliierten während der Operation Overlord im Zweiten Weltkrieg. Am 6. Juni 1944 fanden hier besonders verlustreiche Kämpfe zwischen amerikanischen Truppen und der deutschen Wehrmacht statt. Heute ist der Strand in der Normandie ein wichtiger Ort des Gedenkens. In unmittelbarer Nähe befindet sich der amerikanische Soldatenfriedhof von Colleville-sur-Mer.",
      hu: "Omaha Beach egyike annak az öt partszakasznak, ahol a szövetséges erők partra szálltak a második világháború Overlord hadművelete során. 1944. június 6-án itt zajlottak a legvéresebb harcok az amerikai csapatok és a német hadsereg között. Ma a normandiai tengerpart fontos emlékhely. Közvetlen közelében található a Colleville-sur-Mer-i amerikai katonai temető.",
      ro: "Omaha Beach este unul dintre cele cinci sectoare de debarcare ale aliaților în timpul Operațiunii Overlord din Al Doilea Război Mondial. Pe 6 iunie 1944, aici au avut loc lupte extrem de sângeroase între trupele americane și armata germană. Astăzi, plaja din Normandia este un loc important de comemorare. În imediata apropiere se află cimitirul militar american din Colleville-sur-Mer.",
      en: "Omaha Beach is one of the five landing sectors used by Allied forces during Operation Overlord in World War II. On June 6, 1944, it was the site of the most intense and costly fighting between American troops and German forces. Today, this stretch of the Normandy coast is a significant site of remembrance. Nearby lies the American Military Cemetery at Colleville-sur-Mer.",
    },
    factsAdvanced: {
      de: ["Der Strandabschnitt erstreckt sich über eine Länge von acht Kilometern.", "Über 2.000 amerikanische Soldaten fielen am ersten Tag der Landung.", "Der Soldatenfriedhof in Colleville umfasst fast 9.400 Gräber.", "Pointe du Hoc liegt westlich von Omaha Beach und war Ziel von Rangern.", "Das Denkmal 'Les Braves' am Strand ehrt die Befreier Frankreichs.", "Jedes Jahr am 6. Juni finden hier internationale Gedenkfeiern statt."],
      hu: ["A partszakasz összesen nyolc kilométer hosszan terül el.", "Több mint 2000 amerikai katona esett el a partraszállás első napján.", "A Colleville-i katonai temetőben közel 9400 sír található.", "A Pointe du Hoc az Omaha Beachtől nyugatra fekszik, és rangerek célpontja volt.", "A tengerparton álló 'Les Braves' emlékmű Franciaország felszabadítóit tiszteli.", "Minden évben június 6-án nemzetközi megemlékezéseket tartanak itt."],
      ro: ["Sectorul de plajă se întinde pe o lungime de opt kilometri.", "Peste 2.000 de soldați americani au murit în prima zi a debarcării.", "Cimitirul militar din Colleville cuprinde aproape 9.400 de morminte.", "Pointe du Hoc se află la vest de Omaha Beach și a fost ținta rangerilor.", "Monumentul 'Les Braves' de pe plajă onorează eliberatorii Franței.", "În fiecare an, pe 6 iunie, aici au loc ceremonii internaționale de comemorare."],
      en: ["The landing sector stretches across a length of eight kilometers.", "Over 2,000 American soldiers were killed on the first day of landing.", "The military cemetery at Colleville contains nearly 9,400 graves.", "Pointe du Hoc, west of Omaha Beach, was a key target for U.S. Rangers.", "The 'Les Braves' monument on the beach honors the liberators of France.", "International commemoration ceremonies are held here every June 6th."],
    },
  },
  {
    id: "animal-habitat-zoo-de-beauval-extra",
    type: "animal-habitat",
    parent: "FR-CVL",
    coords: [1.3533, 47.2464],
    name: { de: "ZooParc de Beauval", hu: "Beauval Állatkert", ro: "Grădina Zoologică Beauval", en: "ZooParc de Beauval" },
    description: {
      de: "Der ZooParc de Beauval zählt zu den besten Zoos der Welt und beherbergt eine außergewöhnliche Vielfalt an Tieren, darunter Riesenpandas.",
      hu: "A ZooParc de Beauval a világ legjobb állatkertjei közé tartozik, és rendkívüli állatfaj-sokféleségnek ad otthont, beleértve az óriáspandákat is.",
      ro: "ZooParc de Beauval este considerată una dintre cele mai bune grădini zoologice din lume, găzduind o varietate excepțională de animale, inclusiv panda uriași.",
      en: "ZooParc de Beauval is ranked among the best zoos in the world, housing an exceptional variety of animals, including giant pandas."
    },
    facts: {
      de: ["Einzige Heimat von Riesenpandas in Frankreich.", "Mehr als 10.000 Tiere.", "Stark in den Bereichen Artenschutz und Forschung engagiert."],
      hu: ["Franciaország egyetlen óriáspanda-otthona.", "Több mint 10 000 állat.", "Erősen elkötelezett a fajvédelem és a kutatás mellett."],
      ro: ["Singurul loc din Franța care găzduiește panda uriași.", "Peste 10.000 de animale.", "Implicat activ în conservarea speciilor și cercetare."],
      en: ["Only home to giant pandas in France.", "More than 10,000 animals.", "Heavily involved in species conservation and research."]
    }, image: "/poi-images/animal-habitat-zoo-de-beauval-extra.webp",
    descriptionAdvanced: {
      de: "Der ZooParc de Beauval in Saint-Aignan gilt als einer der schönsten Zoos weltweit und ist der artenreichste Tierpark Frankreichs. Er wurde 1980 als Vogelpark gegründet und hat sich zu einem bedeutenden Zentrum für den Artenschutz entwickelt. Eine der Hauptattraktionen sind die Großen Pandas, die als Leihgabe aus China hier leben. Der Zoo beherbergt über 35.000 Tiere in weitläufigen, thematisch gestalteten Gehegen.",
      hu: "A Saint-Aignanban található ZooParc de Beauval a világ egyik legszebb állatkertje és Franciaország fajokban leggazdagabb parkja. 1980-ban madárparkként alapították, és mára a fajmegőrzés egyik legfontosabb központjává vált. Egyik fő látványossága az óriáspandák, amelyek Kínából érkeztek kölcsönbe. Az állatkert több mint 35 000 állatnak ad otthont tágas, tematikus kifutókban.",
      ro: "ZooParc de Beauval din Saint-Aignan este considerat una dintre cele mai frumoase grădini zoologice din lume și cea mai bogată în specii din Franța. A fost fondat în 1980 ca parc de păsări și a devenit un centru major pentru conservarea speciilor. Una dintre atracțiile principale sunt urșii panda uriași, împrumutați din China. Grădina găzduiește peste 35.000 de animale în spații tematice vaste.",
      en: "ZooParc de Beauval in Saint-Aignan is widely regarded as one of the world's finest zoos and boasts the greatest biodiversity of any park in France. Founded in 1980 as a bird sanctuary, it has evolved into a major center for species conservation. A standout attraction is its giant pandas, on loan from China. The zoo houses over 35,000 animals across expansive, thematically designed habitats.",
    },
    factsAdvanced: {
      de: ["Der Zoo wurde von Françoise Delord auf einem Grundstück von 45 Hektar gegründet.", "Seit 2012 leben hier die einzigen Großen Pandas Frankreichs.", "Die Glaskuppel 'Le Dôme Equatorial' beherbergt tropische Ökosysteme.", "Über 1,6 Millionen Besucher kommen jährlich in den Tierpark.", "Der Zoo beteiligt sich weltweit an über 50 Artenschutzprogrammen.", "Im Jahr 2017 wurde hier das erste Panda-Baby Frankreichs geboren."],
      hu: ["Az állatkertet Françoise Delord alapította egy 45 hektáros területen.", "2012 óta itt élnek Franciaország egyetlen óriáspandái.", "A 'Le Dôme Equatorial' üvegkupola trópusi ökoszisztémáknak ad otthont.", "Évente több mint 1,6 millió látogató érkezik az állatparkba.", "Az állatkert világszerte több mint 50 fajmegőrzési programban vesz részt.", "2017-ben itt született meg Franciaország első panda-bébije."],
      ro: ["Grădina a fost fondată de Françoise Delord pe un teren de 45 de hectare.", "Din 2012, aici trăiesc singurii urși panda uriași din Franța.", "Cupola de sticlă 'Le Dôme Equatorial' găzduiește ecosisteme tropicale.", "Peste 1,6 milioane de vizitatori vin anual la parcul zoologic.", "Grădina participă la peste 50 de programe de conservare la nivel mondial.", "În 2017, aici s-a născut primul pui de panda din Franța."],
      en: ["The zoo was founded by Françoise Delord on a 45-hectare plot of land.", "It has been home to France's only giant pandas since 2012.", "The 'Le Dôme Equatorial' glass dome houses entire tropical ecosystems.", "The park attracts over 1.6 million visitors on an annual basis.", "The zoo is actively involved in more than 50 global conservation programs.", "The first panda cub born in France was delivered here in 2017."],
    },
  },
  {
    id: "industry-aero-valley-bordeaux-extra",
    type: "industry",
    parent: "FR-NAQ",
    coords: [-0.7153, 44.8398],
    name: { de: "Aerospace Valley Bordeaux", hu: "Aerospace Valley Bordeaux", ro: "Aerospace Valley Bordeaux", en: "Aerospace Valley Bordeaux" },
    description: {
      de: "Bordeaux ist ein wichtiges Zentrum der französischen Luft- und Raumfahrtindustrie mit Unternehmen wie Dassault Aviation, ArianeGroup und Thales.",
      hu: "Bordeaux a francia repülőgép- és űripar fontos központja, ahol olyan vállalatok működnek, mint a Dassault Aviation, az ArianeGroup és a Thales.",
      ro: "Bordeaux este un centru major pentru industria aerospațială franceză, cu companii precum Dassault Aviation, ArianeGroup și Thales.",
      en: "Bordeaux is a major hub for the French aerospace industry, with companies like Dassault Aviation, ArianeGroup, and Thales."
    },
    facts: {
      de: ["Montage der Falcon-Privatjets.", "Entwicklung und Bau der Ariane-Raketen.", "Wichtiger Standort für militärische und zivile Luftfahrt."],
      hu: ["A Falcon magánrepülőgépek összeszerelése.", "Az Ariane rakéták fejlesztése és építése.", "A katonai és polgári repülés fontos helyszíne."],
      ro: ["Asamblarea avioanelor private Falcon.", "Dezvoltarea și construcția rachetelor Ariane.", "Locație importantă pentru aviația militară și civilă."],
      en: ["Assembly of Falcon private jets.", "Development and construction of Ariane rockets.", "Important site for military and civil aviation."]
    }, image: "/poi-images/industry-aero-valley-bordeaux-extra.webp",
    descriptionAdvanced: {
      de: "Aerospace Valley ist ein bedeutendes Industrie- und Forschungsnetzwerk in Südwestfrankreich, das Bordeaux und Toulouse verbindet. Es ist das weltweit führende Kompetenzzentrum für Luftfahrt, Raumfahrt und eingebettete Systeme. In der Region Bordeaux konzentriert sich die Industrie auf militärische Luftfahrt, Triebwerksbau und zivile Luftfahrtkomponenten. Zahlreiche High-Tech-Unternehmen und Forschungseinrichtungen sichern hier tausende Arbeitsplätze.",
      hu: "Az Aerospace Valley egy jelentős ipari és kutatási hálózat Délnyugat-Franciaországban, amely Bordeaux-t és Toulouse-t köti össze. Ez a világ vezető kompetenciaközpontja a repülés, az űrkutatás és a beágyazott rendszerek területén. Bordeaux környékén az ipar a katonai repülésre, a hajtóműgyártásra és a polgári repülési alkatrészekre összpontosít. Számos csúcstechnológiai vállalat és kutatóintézet biztosít itt több ezer munkahelyet.",
      ro: "Aerospace Valley este o rețea industrială și de cercetare majoră din sud-vestul Franței, care leagă Bordeaux de Toulouse. Este cel mai important pol de competitivitate din lume pentru aeronautică, spațiu și sisteme integrate. În regiunea Bordeaux, industria se concentrează pe aviația militară, motoare și componente civile. Numeroase companii de înaltă tehnologie și institute de cercetare asigură mii de locuri de muncă.",
      en: "Aerospace Valley is a major industrial and research cluster in southwestern France, connecting Bordeaux and Toulouse. It stands as the world's leading center of excellence for aeronautics, space, and embedded systems. In the Bordeaux area, the industry focuses on military aviation, engine manufacturing, and civil aerospace components. Numerous high-tech companies and research facilities secure thousands of specialized jobs here.",
    },
    factsAdvanced: {
      de: ["Das Netzwerk Aerospace Valley wurde im Jahr 2005 offiziell gegründet.", "Es umfasst über 800 Mitgliedsunternehmen und Forschungseinrichtungen.", "In der Region sind etwa 120.000 Menschen in diesem Sektor beschäftigt.", "Dassault Aviation produziert in der Nähe von Bordeaux die Falcon-Jets.", "Die Ariane-Raketentriebwerke werden teilweise in dieser Region entwickelt.", "Rund ein Drittel der französischen Luftfahrtindustrie ist hier ansässig."],
      hu: ["Az Aerospace Valley hálózatot hivatalosan 2005-ben alapították.", "Több mint 800 tagvállalatot és kutatóintézetet foglal magában.", "A régióban körülbelül 120 000 embert foglalkoztat ez a szektor.", "A Dassault Aviation Bordeaux közelében gyártja a Falcon repülőgépeket.", "Az Ariane rakéták hajtóműveit részben ebben a régióban fejlesztik.", "A francia repülőgépipar mintegy egyharmada ebben a térségben székel."],
      ro: ["Rețeaua Aerospace Valley a fost fondată oficial în anul 2005.", "Include peste 800 de companii membre și institute de cercetare.", "Aproximativ 120.000 de oameni sunt angajați în acest sector în regiune.", "Dassault Aviation produce avioanele Falcon în apropiere de Bordeaux.", "Motoarele rachetelor Ariane sunt dezvoltate parțial în această regiune.", "Circa o treime din industria aeronautică franceză își are sediul aici."],
      en: ["The Aerospace Valley cluster was officially established in 2005.", "It comprises over 800 member companies and research institutions.", "The sector employs approximately 120,000 people across the region.", "Dassault Aviation manufactures its Falcon jets near Bordeaux.", "Engines for Ariane rockets are partially developed in this industrial hub.", "Around one-third of the entire French aerospace industry is based here."],
    },
  },
  {
    id: "river-loire-extra",
    type: "river",
    parent: "FR-CVL",
    coords: [-0.173, 47.28],
    name: { de: "Loire", hu: "Loire", ro: "Loara", en: "Loire River" },
    description: {
      de: "Die Loire ist der längste Fluss Frankreichs. Ihr Tal, das Loiretal, ist bekannt als der 'Garten Frankreichs' und berühmt für seine vielen Schlösser.",
      hu: "A Loire Franciaország leghosszabb folyója. Völgye, a Loire-völgy, 'Franciaország kertjeként' ismert és számos kastélyáról híres.",
      ro: "Loara este cel mai lung râu din Franța. Valea sa, Valea Loarei, este cunoscută ca 'Grădina Franței' și renumită pentru numeroasele sale castele.",
      en: "The Loire is the longest river in France. Its valley, the Loire Valley, is known as the 'Garden of France' and is famous for its many châteaux."
    },
    facts: {
      de: ["Länge von über 1.000 Kilometern.", "Das Loiretal ist UNESCO-Weltkulturerbe.", "Wichtige Städte am Ufer sind Orléans, Tours und Nantes."],
      hu: ["Több mint 1000 kilométer hosszú.", "A Loire-völgy az UNESCO Világörökség része.", "Fontos városok a partján: Orléans, Tours és Nantes."],
      ro: ["Lungime de peste 1.000 de kilometri.", "Valea Loarei este un sit al Patrimoniului Mondial UNESCO.", "Orașe importante pe malurile sale sunt Orléans, Tours și Nantes."],
      en: ["Length of over 1,000 kilometers.", "The Loire Valley is a UNESCO World Heritage site.", "Important cities on its banks include Orléans, Tours, and Nantes."]
    }, image: "/poi-images/river-loire-extra.webp",
    descriptionAdvanced: {
      de: "Die Loire ist mit einer Länge von 1012 Kilometern der längste Fluss Frankreichs. Sie entspringt im Zentralmassiv und mündet bei Saint-Nazaire in den Atlantik. Das mittlere Loiretal ist berühmt für seine prächtigen Schlösser und gehört seit 2000 zum UNESCO-Welterbe. Aufgrund ihrer unregulierten Abschnitte gilt die Loire als einer der letzten großen Wildflüsse Westeuropas.",
      hu: "A Loire 1012 kilométeres hosszával Franciaország leghosszabb folyója. A Francia-középhegységben ered és Saint-Nazaire-nél ömlik az Atlanti-óceánba. A középső Loire-völgy híres pompás kastélyairól, és 2000 óta az UNESCO Világörökség része. Szabályozatlan szakaszai miatt a Loire-t Nyugat-Európa egyik utolsó nagy vadvizének tekintik.",
      ro: "Loara este cel mai lung râu din Franța, având o lungime de 1012 kilometri. Izvorăște în Masivul Central și se varsă în Oceanul Atlantic la Saint-Nazaire. Valea mijlocie a Loarei este celebră pentru castelele sale somptuoase și face parte din Patrimoniul Mondial UNESCO din anul 2000. Datorită sectoarelor sale neregularizate, Loara este considerată unul dintre ultimele mari râuri sălbatice din Europa de Vest.",
      en: "The Loire is the longest river in France, stretching 1,012 kilometers from its source. It rises in the Massif Central and flows into the Atlantic Ocean at Saint-Nazaire. The middle Loire Valley is world-famous for its magnificent chateaux and has been a UNESCO World Heritage site since 2000. Due to its largely unregulated stretches, it is often called the last wild river in Western Europe.",
    },
    factsAdvanced: {
      de: ["Das Einzugsgebiet der Loire umfasst rund 117.000 Quadratkilometer.", "Über 300 Schlösser befinden sich entlang des Flussverlaufs.", "Die Quelle liegt am Mont Gerbier-de-Jonc auf 1.408 Metern Höhe.", "Wichtige Städte am Fluss sind Orléans, Tours, Angers und Nantes.", "Der Fluss ist aufgrund von Sandbänken nur begrenzt schiffbar.", "Im 18. Jahrhundert war die Loire die wichtigste Handelsstraße Frankreichs."],
      hu: ["A Loire vízgyűjtő területe körülbelül 117 000 négyzetkilométer.", "A folyó mentén több mint 300 kastély és vár található.", "A folyó forrása a Mont Gerbier-de-Jonc hegyen, 1408 méteres magasságban van.", "A folyó menti fontos városok: Orléans, Tours, Angers és Nantes.", "A folyó a homokpadok miatt csak korlátozottan hajózható.", "A 18. században a Loire volt Franciaország legfontosabb kereskedelmi útvonala."],
      ro: ["Bazinul hidrografic al Loarei acoperă aproximativ 117.000 km pătrați.", "Peste 300 de castele se află de-a lungul cursului râului.", "Izvorul se află pe Mont Gerbier-de-Jonc, la o altitudine de 1.408 metri.", "Orașe importante de pe râu sunt Orléans, Tours, Angers și Nantes.", "Râul este navigabil doar limitat din cauza bancurilor de nisip.", "În secolul al XVIII-lea, Loara era principala rută comercială a Franței."],
      en: ["The Loire's drainage basin covers about 117,000 square kilometers.", "More than 300 chateaux are located along the river's course.", "Its source is at Mont Gerbier-de-Jonc, 1,408 meters above sea level.", "Major cities along the river include Orléans, Tours, Angers, and Nantes.", "The river is only partially navigable due to frequent sandbanks.", "In the 18th century, the Loire was France's most important trade route."],
    },
  },
  {
    id: "city-rennes-extra",
    type: "city",
    parent: "FR-BRE",
    coords: [-1.6778, 48.1173],
    name: { de: "Rennes", hu: "Rennes", ro: "Rennes", en: "Rennes" },
    description: {
      de: "Rennes ist die Hauptstadt der Bretagne, bekannt für ihre mittelalterlichen Fachwerkhäuser und die lebhafte Studentenpopulation.",
      hu: "Rennes Bretagne fővárosa, középkori, фахверк házairól és élénk egyetemista népességéről ismert.",
      ro: "Rennes este capitala Bretaniei, cunoscută pentru casele sale medievale cu grinzi de lemn și pentru populația sa vibrantă de studenți.",
      en: "Rennes is the capital of Brittany, known for its medieval half-timbered houses and vibrant student population."
    },
    facts: {
      de: ["Parlament der Bretagne ist ein wichtiges Wahrzeichen.", "Zwei Universitäten und zahlreiche Hochschulen.", "Großer Markt am Samstagmorgen, 'Marché des Lices'."],
      hu: ["Bretagne parlamentje fontos nevezetesség.", "Két egyetem és számos főiskola.", "Nagy piac szombat reggel, a 'Marché des Lices'."],
      ro: ["Parlamentul Bretaniei este un reper important.", "Două universități și numeroase colegii.", "Piață mare sâmbătă dimineața, 'Marché des Lices'."],
      en: ["Parliament of Brittany is a major landmark.", "Two universities and numerous colleges.", "Large market on Saturday morning, 'Marché des Lices'."]
    }, image: "/poi-images/city-rennes-extra.webp",
    descriptionAdvanced: {
      de: "Rennes ist die Hauptstadt der Bretagne und liegt am Zusammenfluss von Ille und Vilaine. Die Stadt blickt auf eine über 2000-jährige Geschichte zurück und war einst Sitz des Parlaments der Bretagne. Das Stadtbild ist geprägt durch gut erhaltene Fachwerkhäuser und monumentale klassizistische Bauten. Heute ist Rennes ein dynamisches Zentrum für Forschung, Technologie und studentisches Leben.",
      hu: "Rennes Bretagne fővárosa, az Ille és a Vilaine folyók találkozásánál fekszik. A város több mint 2000 éves múltra tekint vissza, és egykor Bretagne parlamentjének székhelye volt. A városképet jól megőrzött favázas házak és monumentális klasszicista épületek határozzák meg. Ma Rennes a kutatás, a technológia és az élénk diákélet dinamikus központja.",
      ro: "Rennes este capitala Bretaniei și se află la confluența râurilor Ille și Vilaine. Orașul are o istorie de peste 2000 de ani și a fost odată sediul Parlamentului Bretaniei. Peisajul urban este marcat de case tradiționale din lemn bine conservate și clădiri neoclasice monumentale. Astăzi, Rennes este un centru dinamic pentru cercetare, tehnologie și viață studențească.",
      en: "Rennes is the capital of Brittany, situated at the confluence of the Ille and Vilaine rivers. The city boasts over 2,000 years of history and once served as the seat of the Parliament of Brittany. Its urban landscape features well-preserved timber-framed houses alongside monumental neoclassical buildings. Today, Rennes is a dynamic hub for research, high technology, and student life.",
    },
    factsAdvanced: {
      de: ["Im Jahr 1720 zerstörte ein großer Brand weite Teile der Innenstadt.", "Rennes ist Sitz einer der größten Universitäten Frankreichs.", "Das Parlament der Bretagne wurde im 17. Jahrhundert erbaut.", "Die Stadt besitzt zwei Metrolinien, die erste wurde 2002 eröffnet.", "Der Thabor-Park gilt als einer der schönsten Stadtparks des Landes.", "Über 60.000 Studenten leben und lernen in der bretonischen Hauptstadt."],
      hu: ["1720-ban egy hatalmas tűzvész pusztította el a belváros nagy részét.", "Rennes ad otthont Franciaország egyik legnagyobb egyetemének.", "A bretagne-i parlament épülete a 17. században készült el.", "A városnak két metróvonala van, az elsőt 2002-ben nyitották meg.", "A Thabor-park az ország egyik legszebb városi parkjának számít.", "Több mint 60 000 diák él és tanul a breton fővárosban."],
      ro: ["În 1720, un incendiu major a distrus mari părți din centrul orașului.", "Rennes găzduiește una dintre cele mai mari universități din Franța.", "Parlamentul Bretaniei a fost construit în secolul al XVII-lea.", "Orașul are două linii de metrou, prima fiind inaugurată în 2002.", "Parcul Thabor este considerat unul dintre cele mai frumoase parcuri urbane.", "Peste 60.000 de studenți trăiesc și învață în capitala bretonă."],
      en: ["A massive fire in 1720 destroyed large portions of the city center.", "Rennes is home to one of the largest universities in France.", "The Parliament of Brittany building was constructed in the 17th century.", "The city operates two metro lines, the first of which opened in 2002.", "Thabor Park is widely considered one of the finest public gardens in France.", "Over 60,000 students live and study in the Breton capital."],
    },
  },
  {
    id: "castle-chateau-de-chenonceau-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.0665, 47.3249],
    name: { de: "Schloss Chenonceau", hu: "Chenonceau-i kastély", ro: "Castelul Chenonceau", en: "Château de Chenonceau" },
    description: {
      de: "Das Schloss Chenonceau, auch bekannt als das 'Damenschloss', ist berühmt für seine elegante Bogenbrücke über den Fluss Cher.",
      hu: "A Chenonceau-i kastély, más néven a 'Hölgyek kastélya', híres a Cher folyó felett átívelő elegáns hídjáról.",
      ro: "Castelul Chenonceau, cunoscut și sub numele de 'Castelul Doamnelor', este renumit pentru podul său elegant cu arcade peste râul Cher.",
      en: "Château de Chenonceau, also known as the 'Ladies' Château', is famous for its elegant arched bridge spanning the River Cher."
    },
    facts: {
      de: ["Von Frauen wie Diane de Poitiers und Katharina von Medici geprägt.", "Wunderschöne Gärten.", "Zweithäufigst besuchtes Schloss Frankreichs nach Versailles."],
      hu: ["Olyan nők alakították, mint Diane de Poitiers és Medici Katalin.", "Gyönyörű kertek.", "Franciaország második leglátogatottabb kastélya Versailles után."],
      ro: ["Modelat de femei precum Diane de Poitiers și Caterina de' Medici.", "Grădini frumoase.", "Al doilea cel mai vizitat castel din Franța, după Versailles."],
      en: ["Shaped by women like Diane de Poitiers and Catherine de' Medici.", "Beautiful gardens.", "Second most visited château in France after Versailles."]
    }, image: "/poi-images/castle-chateau-de-chenonceau-extra.webp",
    descriptionAdvanced: {
      de: "Das Schloss Chenonceau im Loiretal ist berühmt für seine einzigartige Lage direkt über dem Fluss Cher. Es wird oft als 'Schloss der Damen' bezeichnet, da es maßgeblich von einflussreichen Frauen wie Diane de Poitiers und Katharina von Medici geprägt wurde. Die Architektur vereint Gotik und Renaissance in vollendeter Harmonie. Seine charakteristische Galeriebrücke macht es zu einem der bekanntesten Wahrzeichen Frankreichs.",
      hu: "A Loire-völgyben található Chenonceau-i kastély híres egyedülálló fekvéséről közvetlenül a Cher folyó felett. Gyakran hívják a 'Hölgyek kastélyának', mivel olyan befolyásos nők alakították, mint Diane de Poitiers és Medici Katalin. Építészete a gótikát és a reneszánszt ötvözi tökéletes harmóniában. Jellegzetes galériahídja Franciaország egyik legismertebb jelképévé teszi.",
      ro: "Castelul Chenonceau din Valea Loarei este celebru pentru locația sa unică, direct deasupra râului Cher. Este adesea numit 'Castelul Doamnelor', deoarece a fost modelat de femei influente precum Diane de Poitiers și Caterina de Medici. Arhitectura sa îmbină stilul gotic și cel renascentist într-o armonie deplină. Galeria-pod caracteristică îl face unul dintre cele mai cunoscute simboluri ale Franței.",
      en: "Chateau de Chenonceau in the Loire Valley is famous for its unique position spanning the Cher River. It is often referred to as the 'Ladies' Chateau' because it was shaped by influential women including Diane de Poitiers and Catherine de' Medici. The architecture blends Gothic and Renaissance styles in perfect harmony. Its iconic gallery bridge makes it one of the most recognizable landmarks in France.",
    },
    factsAdvanced: {
      de: ["Das heutige Schloss wurde zwischen 1513 und 1517 auf alten Fundamenten erbaut.", "Die 60 Meter lange Galerie über dem Fluss wurde 1576 vollendet.", "Im Ersten Weltkrieg diente das Schloss als Lazarett für Verwundete.", "Der Cher bildete im Zweiten Weltkrieg die Grenze zwischen besetzter und freier Zone.", "Die Gartenanlagen von Diane de Poitiers umfassen über 12.000 Quadratmeter.", "Es ist nach Versailles das meistbesuchte Schloss in Frankreich."],
      hu: ["A mai kastély 1513 és 1517 között épült régi alapokra.", "A folyó feletti 60 méter hosszú galéria 1576-ban készült el.", "Az első világháború alatt a kastély katonai kórházként működött.", "A Cher folyó a második világháborúban a megszállt és a szabad zóna határa volt.", "Diane de Poitiers kertjei több mint 12 000 négyzetmétert tesznek ki.", "Versailles után ez a leglátogatottabb kastély Franciaországban."],
      ro: ["Castelul actual a fost construit între 1513 și 1517 pe fundații vechi.", "Galeria de 60 de metri lungime peste râu a fost finalizată în 1576.", "În Primul Război Mondial, castelul a servit drept spital militar.", "Râul Cher a format granița între zona ocupată și cea liberă în Al Doilea Război Mondial.", "Grădinile lui Diane de Poitiers se întind pe peste 12.000 de metri pătrați.", "Este cel mai vizitat castel din Franța după Palatul Versailles."],
      en: ["The current chateau was built between 1513 and 1517 on ancient foundations.", "The 60-meter-long gallery spanning the river was completed in 1576.", "During World War I, the chateau served as a military hospital.", "The Cher River marked the boundary between occupied and free zones in WWII.", "The gardens of Diane de Poitiers cover over 12,000 square meters.", "It is the most visited chateau in France after the Palace of Versailles."],
    },
  },
  {
    id: "sea-etretat-cliffs-extra",
    type: "sea",
    parent: "FR-NOR",
    coords: [0.2074, 49.7078],
    name: { de: "Klippen von Étretat", hu: "Étretat-i sziklák", ro: "Stâncile din Étretat", en: "Cliffs of Étretat" },
    description: {
      de: "Die Kreidefelsen von Étretat sind berühmt für ihre natürlichen Bögen, insbesondere die Porte d'Aval und die Aiguille (Nadel).",
      hu: "Az Étretat-i krétasziklák híresek természetes boltíveikről, különösen a Porte d'Aval-ról és az Aiguille-ról (Tű).",
      ro: "Stâncile de cretă din Étretat sunt renumite pentru arcadele lor naturale, în special Porte d'Aval și Aiguille (Acul).",
      en: "The chalk cliffs of Étretat are famous for their natural arches, especially the Porte d'Aval and the Aiguille (Needle)."
    },
    facts: {
      de: ["Inspiration für Künstler wie Claude Monet.", "Drei Hauptbögen: Porte d'Aval, Porte d'Amont, Manneporte.", "Wanderwege auf den Klippen bieten tolle Aussichten."],
      hu: ["Ihletforrás volt olyan művészeknek, mint Claude Monet.", "Három fő boltív: Porte d'Aval, Porte d'Amont, Manneporte.", "A sziklákon futó túraútvonalakról nagyszerű a kilátás."],
      ro: ["Sursă de inspirație pentru artiști precum Claude Monet.", "Trei arcade principale: Porte d'Aval, Porte d'Amont, Manneporte.", "Traseele de drumeție de pe stânci oferă priveliști superbe."],
      en: ["Inspiration for artists like Claude Monet.", "Three main arches: Porte d'Aval, Porte d'Amont, Manneporte.", "Hiking trails on the cliffs offer great views."]
    }, image: "/poi-images/sea-etretat-cliffs-extra.webp",
    descriptionAdvanced: {
      de: "Die Kreidefelsen von Étretat an der normandischen Alabasterküste sind weltberühmt für ihre spektakulären natürlichen Felsentore. Über Jahrtausende haben Wind und Wellen markante Formationen wie die Porte d'Aval und die L'Aiguille (die Nadel) geformt. Die strahlend weißen Klippen ragen bis zu 90 Meter senkrecht aus dem Ärmelkanal empor. Sie inspirierten zahlreiche Maler des Impressionismus, darunter Claude Monet.",
      hu: "A normandiai Alabástrom-parton található Étretat mészkősziklái világszerte ismertek látványos természetes sziklakapuiról. A szél és a hullámok évezredek alatt olyan jellegzetes képződményeket hoztak létre, mint a Porte d'Aval és a L'Aiguille (a tű). A vakítóan fehér sziklák akár 90 méter magasan emelkednek ki függőlegesen a La Manche csatornából. Számos impresszionista festőt ihlettek meg, köztük Claude Monet-t.",
      ro: "Stâncile de cretă din Étretat, situate pe Coasta de Alabastru din Normandia, sunt faimoase pentru arcadele lor naturale spectaculoase. De-a lungul mileniilor, vântul și valurile au modelat formațiuni distinctive precum Porte d'Aval și L'Aiguille (Acul). Stâncile albe strălucitoare se ridică vertical până la 90 de metri din Canalul Mânecii. Acestea au inspirat numeroși pictori impresioniști, inclusiv pe Claude Monet.",
      en: "The chalk cliffs of Étretat on Normandy's Alabaster Coast are world-renowned for their spectacular natural arches. Over millennia, wind and waves have carved out striking formations such as the Porte d'Aval and L'Aiguille (the Needle). These brilliant white cliffs rise vertically up to 90 meters from the English Channel. They served as a profound inspiration for many Impressionist painters, including Claude Monet.",
    },
    factsAdvanced: {
      de: ["Die Alabasterküste erstreckt sich insgesamt über 120 Kilometer.", "Die Felsnadel L'Aiguille ist etwa 70 Meter hoch.", "Claude Monet malte über 50 Bilder der Felsen von Étretat.", "Der Legende nach verbarg Arsène Lupin seinen Schatz in der Nadel.", "Die Klippen bestehen hauptsächlich aus Kreide und Feuerstein.", "Oben auf den Klippen befindet sich die Kapelle Notre-Dame-de-la-Garde."],
      hu: ["Az Alabástrom-part összesen 120 kilométer hosszan húzódik.", "A L'Aiguille sziklatű körülbelül 70 méter magas.", "Claude Monet több mint 50 képet festett Étretat szikláiról.", "A legenda szerint Arsène Lupin a sziklatűben rejtette el kincsét.", "A sziklák főként krétából és tűzkőből épülnek fel.", "A sziklák tetején található a Notre-Dame-de-la-Garde kápolna."],
      ro: ["Coasta de Alabastru se întinde pe o lungime totală de 120 de kilometri.", "Stânca ascuțită L'Aiguille are o înălțime de aproximativ 70 de metri.", "Claude Monet a pictat peste 50 de tablouri cu stâncile din Étretat.", "Conform legendei, Arsène Lupin și-a ascuns comoara în interiorul 'Acului'.", "Stâncile sunt compuse în principal din cretă și silex.", "Pe vârful stâncilor se află capela Notre-Dame-de-la-Garde."],
      en: ["The Alabaster Coast stretches for a total of 120 kilometers.", "The 'L'Aiguille' rock needle stands approximately 70 meters high.", "Claude Monet created over 50 paintings of the Étretat cliffs.", "Legend has it that Arsène Lupin hid his treasure inside the Needle.", "The cliffs are primarily composed of chalk and embedded flint.", "The Chapel of Notre-Dame-de-la-Garde sits atop the cliffs."],
    },
  },
  {
    id: "industry-perfume-grasse-extra",
    type: "industry",
    parent: "FR-PAC",
    coords: [6.9231, 43.6583],
    name: { de: "Parfümindustrie in Grasse", hu: "Grasse-i parfümipar", ro: "Industria parfumurilor din Grasse", en: "Grasse Perfume Industry" },
    description: {
      de: "Grasse gilt als die Welthauptstadt des Parfüms. Seit Jahrhunderten werden hier Duftstoffe aus den umliegenden Blumenfeldern gewonnen.",
      hu: "Grasse-t a parfüm világfővárosának tartják. Évszázadok óta nyernek ki itt illatanyagokat a környező virágmezőkről.",
      ro: "Grasse este considerată capitala mondială a parfumurilor. De secole, aici se extrag esențe din câmpurile de flori din jur.",
      en: "Grasse is considered the world's capital of perfume. For centuries, fragrances have been extracted here from the surrounding flower fields."
    },
    facts: {
      de: ["Heimat berühmter Parfümerien wie Fragonard.", "Internationales Parfümmuseum.", "Anbau von Jasmin, Rose und Tuberose."],
      hu: ["Olyan híres parfümházak otthona, mint a Fragonard.", "Nemzetközi Parfümmúzeum.", "Jázmin-, rózsa- és tubarózsatermesztés."],
      ro: ["Găzduiește parfumerii celebre precum Fragonard.", "Muzeul Internațional al Parfumurilor.", "Cultivarea iasomiei, trandafirilor și tuberozelor."],
      en: ["Home to famous perfumeries like Fragonard.", "International Perfume Museum.", "Cultivation of jasmine, rose, and tuberose."]
    }, image: "/poi-images/industry-perfume-grasse-extra.webp",
    descriptionAdvanced: {
      de: "Grasse gilt weltweit als die Hauptstadt des Parfüms und liegt im Hinterland der Côte d'Azur. Die Tradition der Duftherstellung reicht bis ins 16. Jahrhundert zurück, als man begann, Handschuhe zu parfümieren. Das besondere Mikroklima begünstigt den Anbau wertvoller Blüten wie Jasmin und Mairose. Heute werden hier Rohstoffe für die bekanntesten Luxusmarken der Welt verarbeitet und veredelt.",
      hu: "Grasse-t világszerte a parfüm fővárosának tekintik, a Côte d'Azur hátországában fekszik. Az illatszergyártás hagyománya a 16. századig nyúlik vissza, amikor elkezdték illatosítani a kesztyűket. A különleges mikroklíma kedvez az olyan értékes virágok termesztésének, mint a jázmin és a májusi rózsa. Ma itt dolgozzák fel a világ legismertebb luxusmárkáinak alapanyagait.",
      ro: "Grasse este considerat capitala mondială a parfumului, fiind situat în regiunea din spatele Coastei de Azur. Tradiția fabricării parfumurilor datează din secolul al XVI-lea, când s-a început parfumarea mănușilor. Microclimatul special favorizează cultivarea florilor prețioase, precum iasomia și trandafirul de mai. Astăzi, aici sunt procesate materii prime pentru cele mai faimoase mărci de lux din lume.",
      en: "Grasse is globally recognized as the perfume capital of the world, nestled in the hills behind the Côte d'Azur. Its fragrance-making tradition dates back to the 16th century, originating with the scenting of leather gloves. The area's unique microclimate is ideal for cultivating precious blooms like jasmine and May rose. Today, Grasse processes and refines raw materials for the world's most prestigious luxury brands.",
    },
    factsAdvanced: {
      de: ["Die drei großen Parfümhäuser Fragonard, Molinard und Galimard sitzen hier.", "Grasse produziert rund zwei Drittel der französischen Parfüm-Aromen.", "Jasmin aus Grasse ist ein Hauptbestandteil von Chanel No. 5.", "Das Internationale Parfümmuseum wurde hier im Jahr 1989 eröffnet.", "Die Ernte der Mairose findet nur im Mai für wenige Wochen statt.", "Über 60 Unternehmen der Branche sind in der Region Grasse tätig."],
      hu: ["A három nagy parfümház, a Fragonard, a Molinard és a Galimard székhelye itt van.", "Grasse állítja elő a francia parfüm-aromák mintegy kétharmadát.", "A Grasse-i jázmin a Chanel No. 5 egyik fő összetevője.", "A Nemzetközi Parfümmúzeumot 1989-ben nyitották meg a városban.", "A májusi rózsa betakarítása csak májusban, néhány hétig tart.", "Az ágazat több mint 60 vállalata tevékenykedik a Grasse-i régióban."],
      ro: ["Cele trei mari case de parfumuri Fragonard, Molinard și Galimard au sediul aici.", "Grasse produce aproximativ două treimi din aromele de parfum din Franța.", "Iasomia din Grasse este un ingredient cheie al parfumului Chanel No. 5.", "Muzeul Internațional al Parfumului a fost deschis aici în anul 1989.", "Recoltarea trandafirului de mai are loc doar în luna mai, timp de câteva săptămâni.", "Peste 60 de companii din industrie activează în regiunea Grasse."],
      en: ["The three major perfume houses—Fragonard, Molinard, and Galimard—are based here.", "Grasse produces about two-thirds of France's natural perfume aromas.", "Grasse jasmine is a signature ingredient in the famous Chanel No. 5.", "The International Perfume Museum was officially opened here in 1989.", "The May rose harvest lasts for only a few weeks during the month of May.", "More than 60 companies involved in the fragrance industry operate in the area."],
    },
  },
  {
    id: "mountain-pyrenees-np-extra",
    type: "mountain",
    parent: "FR-OCC",
    coords: [-0.0833, 42.8333],
    name: { de: "Nationalpark Pyrenäen", hu: "Pireneusok Nemzeti Park", ro: "Parcul Național Pirinei", en: "Pyrenees National Park" },
    description: {
      de: "Der Nationalpark Pyrenäen erstreckt sich entlang der Grenze zu Spanien und bietet spektakuläre Berglandschaften, Seen und Wasserfälle.",
      hu: "A Pireneusok Nemzeti Park a spanyol határ mentén húzódik, és látványos hegyi tájakat, tavakat és vízeséseket kínál.",
      ro: "Parcul Național Pirinei se întinde de-a lungul graniței cu Spania și oferă peisaje montane spectaculoase, lacuri și cascade.",
      en: "The Pyrenees National Park stretches along the border with Spain, offering spectacular mountain landscapes, lakes, and waterfalls."
    },
    facts: {
      de: ["Heimat des Cirque de Gavarnie, einem riesigen Felskessel.", "Reiche Tierwelt mit Gämsen und Bartgeiern.", "Über 350 km markierte Wanderwege."],
      hu: ["A Cirque de Gavarnie, egy hatalmas sziklakatlan otthona.", "Gazdag állatvilág zergékkel és szakállas saskeselyűkkel.", "Több mint 350 km jelzett túraútvonal."],
      ro: ["Găzduiește Cirque de Gavarnie, un circ glaciar uriaș.", "Faună bogată, inclusiv capre negre și zăgani.", "Peste 350 km de trasee de drumeție marcate."],
      en: ["Home to the Cirque de Gavarnie, a huge glacial cirque.", "Rich wildlife including chamois and bearded vultures.", "Over 350 km of marked hiking trails."]
    }, image: "/poi-images/mountain-pyrenees-np-extra.webp",
    descriptionAdvanced: {
      de: "Der Nationalpark Pyrenäen erstreckt sich entlang der Grenze zwischen Frankreich und Spanien im Hochgebirge. Er wurde 1967 gegründet, um die einzigartige Flora und Fauna sowie die spektakulären Landschaften zu schützen. Charakteristisch sind schroffe Gipfel über 3000 Meter, tiefe Kare und imposante Wasserfälle wie der Cirque de Gavarnie. Der Park ist ein Rückzugsort für seltene Tierarten wie den Steinadler und das Pyrenäen-Gämse.",
      hu: "A Pireneusi Nemzeti Park a francia-spanyol határ mentén, a magashegységben terül el. 1967-ben alapították az egyedülálló növény- és állatvilág, valamint a látványos tájak védelme érdekében. Jellemzői a 3000 méter feletti meredek csúcsok, a mély kárvölgyek és az olyan lenyűgöző vízesések, mint a Cirque de Gavarnie. A park ritka állatfajok, például a szirti sas és a pireneusi zerge menedékhelye.",
      ro: "Parcul Național al Pirineilor se întinde de-a lungul graniței dintre Franța și Spania, în zona montană înaltă. A fost fondat în 1967 pentru a proteja flora și fauna unică, precum și peisajele spectaculoase. Parcul este caracterizat de vârfuri abrupte de peste 3000 de metri, circuri glaciare adânci și cascade impunătoare, precum Cirque de Gavarnie. Este un refugiu pentru specii rare, cum ar fi acvila de munte și capra neagră a Pirineilor.",
      en: "The Pyrenees National Park stretches along the high-altitude border between France and Spain. Established in 1967, it was created to protect the region's unique flora, fauna, and spectacular landscapes. It is defined by rugged peaks exceeding 3,000 meters, deep glacial cirques, and imposing waterfalls like the Cirque de Gavarnie. The park serves as a vital sanctuary for rare species such as the golden eagle and the Pyrenean chamois.",
    },
    factsAdvanced: {
      de: ["Der Park umfasst eine Kernzone von etwa 45.700 Hektar Fläche.", "Der Cirque de Gavarnie gehört seit 1997 zum UNESCO-Welterbe.", "Es gibt über 200 Bergseen innerhalb des Nationalparks.", "Der Vignemale ist mit 3.298 Metern der höchste Gipfel im Park.", "Im Park leben etwa 1.000 verschiedene Gefäßpflanzenarten.", "Rund 800 Kilometer markierte Wanderwege führen durch das Gebiet."],
      hu: ["A park magterülete körülbelül 45 700 hektárt foglal el.", "A Cirque de Gavarnie 1997 óta az UNESCO Világörökség része.", "A nemzeti park területén több mint 200 hegyi tó található.", "A Vignemale a park legmagasabb csúcsa a maga 3298 méterével.", "A parkban körülbelül 1000 különböző edényes növényfaj él.", "Mintegy 800 kilométernyi jelzett turistaút szeli át a területet."],
      ro: ["Zona centrală a parcului acoperă aproximativ 45.700 de hectare.", "Cirque de Gavarnie face parte din Patrimoniul Mondial UNESCO din 1997.", "Există peste 200 de lacuri montane în interiorul parcului național.", "Vignemale este cel mai înalt vârf din parc, având 3.298 de metri.", "În parc trăiesc aproximativ 1.000 de specii diferite de plante vasculare.", "Circa 800 de kilometri de trasee marcate străbat acest teritoriu."],
      en: ["The park's core zone encompasses approximately 45,700 hectares.", "The Cirque de Gavarnie has been a UNESCO World Heritage site since 1997.", "There are over 200 mountain lakes located within the national park.", "At 3,298 meters, Vignemale is the highest peak inside the park boundaries.", "The park is home to about 1,000 different species of vascular plants.", "Roughly 800 kilometers of marked hiking trails crisscross the area."],
    },
  },
  {
    id: "city-aix-en-provence-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [5.4474, 43.5297],
    name: { de: "Aix-en-Provence", hu: "Aix-en-Provence", ro: "Aix-en-Provence", en: "Aix-en-Provence" },
    description: {
      de: "Aix-en-Provence ist eine elegante Stadt, die für ihre von Platanen gesäumte Allee Cours Mirabeau, ihre Brunnen und als Geburtsort des Malers Paul Cézanne bekannt ist.",
      hu: "Aix-en-Provence egy elegáns város, amely a platánfákkal szegélyezett Cours Mirabeau sétányáról, szökőkútjairól és a festő, Paul Cézanne szülőhelyeként ismert.",
      ro: "Aix-en-Provence este un oraș elegant, cunoscut pentru bulevardul său mărginit de platani, Cours Mirabeau, fântânile sale și ca loc de naștere al pictorului Paul Cézanne.",
      en: "Aix-en-Provence is an elegant city known for its plane tree-lined boulevard, Cours Mirabeau, its fountains, and as the birthplace of the painter Paul Cézanne."
    },
    facts: {
      de: ["'Stadt der tausend Brunnen' genannt.", "Atelier von Paul Cézanne kann besichtigt werden.", "Lebendige Kulturszene mit vielen Festivals."],
      hu: ["Az 'ezer szökőkút városának' is nevezik.", "Paul Cézanne műterme látogatható.", "Élénk kulturális élet, számos fesztivállal."],
      ro: ["Numit 'Orașul celor o mie de fântâni'.", "Atelierul lui Paul Cézanne poate fi vizitat.", "Scenă culturală vibrantă cu multe festivaluri."],
      en: ["Called the 'City of a Thousand Fountains'.", "Paul Cézanne's studio can be visited.", "Vibrant cultural scene with many festivals."]
    }, image: "/poi-images/city-aix-en-provence-extra.webp",
    descriptionAdvanced: {
      de: "Aix-en-Provence ist eine elegante Universitätsstadt im Süden Frankreichs, die für ihre Thermalquellen und zahlreichen Brunnen bekannt ist. Sie war die historische Hauptstadt der Provence und besticht durch ihre prachtvollen Alleen und herrschaftlichen Stadtpaläste aus dem 17. und 18. Jahrhundert. Als Geburtsstadt des Malers Paul Cézanne zieht sie Kunstliebhaber aus aller Welt an. Das Licht und die Farben der umliegenden Landschaft prägten den Stil der Moderne.",
      hu: "Aix-en-Provence egy elegáns egyetemi város Dél-Franciaországban, amely termálforrásairól és számos kútjáról ismert. Provence történelmi fővárosa volt, lenyűgöző sugárútjaival és 17-18. századi nemesi palotáival hódít. Paul Cézanne festő szülővárosaként a világ minden tájáról vonzza a művészetkedvelőket. A környező táj fényei és színei meghatározóak voltak a modern művészet kialakulásában.",
      ro: "Aix-en-Provence este un oraș universitar elegant din sudul Franței, cunoscut pentru izvoarele sale termale și numeroasele fântâni. A fost capitala istorică a Provenței și impresionează prin bulevardele sale somptuoase și palatele urbane din secolele XVII și XVIII. Ca oraș natal al pictorului Paul Cézanne, atrage iubitori de artă din întreaga lume. Lumina și culorile peisajului înconjurător au influențat decisiv stilul modern.",
      en: "Aix-en-Provence is an elegant university city in southern France, famous for its thermal springs and numerous fountains. Formerly the historical capital of Provence, it features grand avenues and stately 17th- and 18th-century mansions. As the birthplace of painter Paul Cézanne, it attracts art enthusiasts from across the globe. The unique light and colors of the surrounding landscape profoundly influenced the development of modern art.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde 122 v. Chr. vom römischen Konsul Sextius Calvinus gegründet.", "Der Cours Mirabeau ist die bekannteste Prachtstraße der Stadt.", "Aix beherbergt über 250 Brunnen, weshalb sie 'Stadt der tausend Brunnen' heißt.", "Paul Cézannes Atelier wurde im Originalzustand als Museum erhalten.", "Die Spezialität der Stadt sind die 'Calissons', ein Konfekt aus Mandeln.", "Der Berg Montagne Sainte-Victoire war ein zentrales Motiv in Cézannes Werk."],
      hu: ["A várost i. e. 122-ben alapította Sextius Calvinus római konzul.", "A Cours Mirabeau a város legismertebb és legszebb sugárútja.", "Aix több mint 250 kúttal rendelkezik, ezért hívják az 'ezer kút városának'.", "Paul Cézanne műtermét eredeti állapotában őrizték meg múzeumként.", "A város különlegessége a 'Calisson', egy mandulából készült édesség.", "A Montagne Sainte-Victoire hegy Cézanne munkásságának központi motívuma volt."],
      ro: ["Orașul a fost fondat în 122 î.Hr. de consulul roman Sextius Calvinus.", "Cours Mirabeau este cel mai cunoscut bulevard principal al orașului.", "Aix găzduiește peste 250 de fântâni, fiind numit 'orașul celor o mie de fântâni'.", "Atelierul lui Paul Cézanne a fost păstrat în stare originală ca muzeu.", "Specialitatea orașului sunt 'Calissons', dulciuri fine din migdale.", "Muntele Sainte-Victoire a fost un motiv central în opera lui Cézanne."],
      en: ["The city was founded in 122 BC by the Roman consul Sextius Calvinus.", "Cours Mirabeau is the city's most famous and picturesque grand boulevard.", "Aix is home to over 250 fountains, earning its nickname as the city of 1,000 fountains.", "Paul Cézanne's studio has been preserved in its original state as a museum.", "The city's culinary specialty is 'Calissons,' a traditional almond-based confection.", "The Montagne Sainte-Victoire was a recurring central motif in Cézanne's work."],
    },
  },
  {
    id: "historical-lascaux-iv-extra",
    type: "historical",
    parent: "FR-NAQ",
    coords: [1.178, 45.05],
    name: { de: "Lascaux IV", hu: "Lascaux IV", ro: "Lascaux IV", en: "Lascaux IV" },
    description: {
      de: "Lascaux IV ist eine vollständige Nachbildung der berühmten prähistorischen Höhle von Lascaux, die für ihre außergewöhnlichen paläolithischen Malereien bekannt ist.",
      hu: "A Lascaux IV a híres Lascaux-i barlang teljes másolata, amely a rendkívüli paleolitikus festményeiről ismert.",
      ro: "Lascaux IV este o replică completă a faimoasei peșteri preistorice Lascaux, cunoscută pentru picturile sale paleolitice excepționale.",
      en: "Lascaux IV is a complete replica of the famous prehistoric Lascaux cave, known for its exceptional Paleolithic paintings."
    },
    facts: {
      de: ["Originalhöhle wurde zum Schutz geschlossen.", "Über 600 Wandmalereien.", "Die Malereien sind etwa 17.000 Jahre alt."],
      hu: ["Az eredeti barlangot a védelem érdekében lezárták.", "Több mint 600 falfestmény.", "A festmények körülbelül 17 000 évesek."],
      ro: ["Peștera originală a fost închisă pentru conservare.", "Peste 600 de picturi parietale.", "Picturile au o vechime de aproximativ 17.000 de ani."],
      en: ["Original cave was closed for conservation.", "Over 600 parietal paintings.", "The paintings are approximately 17,000 years old."]
    }, image: "/poi-images/historical-lascaux-iv-extra.webp",
    descriptionAdvanced: {
      de: "Lascaux IV ist ein vollständiges Faksimile der berühmten Höhle von Lascaux in Montignac. Das Zentrum wurde 2016 eröffnet, um die prähistorischen Wandmalereien vor den Schäden durch den Massentourismus zu schützen. Es nutzt modernste Technologie, um die Atmosphäre und die Kunstwerke millimetergenau nachzubilden. Besucher erleben hier die bedeutendsten Werke des Jungpaläolithikums in einer authentischen Umgebung.",
      hu: "A Lascaux IV a híres Lascaux-barlang teljes körű és pontos másolata a franciaországi Montignac közelében. A központot 2016-ban nyitották meg, hogy az eredeti őskori festményeket megóvják a látogatók okozta károsodástól. A létesítmény csúcstechnológiával rekonstruálja a barlang falait és műalkotásait. A látogatók így hiteles környezetben ismerhetik meg a felső paleolitikum legjelentősebb barlangrajzait.",
      ro: "Lascaux IV este o replică completă a peșterii originale Lascaux, situată în Montignac, Franța. Centrul a fost deschis în 2016 pentru a proteja picturile preistorice originale de degradarea cauzată de vizitatori. Site-ul folosește tehnologie digitală avansată pentru a recrea mediul peșterii cu o precizie milimetrică. Oferă o experiență imersivă a artei paleolitice superioare, veche de peste 17.000 de ani.",
      en: "Lascaux IV is a complete replica of the original Lascaux cave, located in Montignac, France. It was opened in 2016 to preserve the prehistoric paintings from deterioration caused by massive tourist traffic. The site uses advanced digital technology to recreate the cave environment with millimeter precision. It offers an immersive experience of Upper Paleolithic art dating back roughly 17,000 years.",
    },
    factsAdvanced: {
      de: ["Eröffnung am 15. Dezember 2016", "Baukosten von etwa 66 Millionen Euro", "Befindet sich im UNESCO-Welterbe Vézère-Tal", "Die Originalhöhle wurde 1940 entdeckt", "Maßstabgetreue 1:1 Kopie der Malereien", "Alter der Kunstwerke ca. 17.000 Jahre"],
      hu: ["2016. december 15-én nyitotta meg kapuit", "A beruházás 66 millió euróba került", "Az UNESCO világörökségi Vézère-völgyben fekszik", "Az eredeti barlangot 1940-ben találták meg", "1:1 arányú, milliméterpontos belső rekonstrukció", "A festmények kora körülbelül 17 000 év"],
      ro: ["Inaugurată oficial la 15 decembrie 2016", "Costuri de construcție de 66 milioane euro", "Situată în Valea Vézère, patrimoniu UNESCO", "Peștera originală a fost găsită în 1940", "Replică fidelă la scara 1:1 a picturilor", "Vechimea desenelor este de circa 17.000 ani"],
      en: ["Opened to the public on December 15, 2016", "Construction cost roughly 66 million euros", "Located in the UNESCO-listed Vézère Valley", "The original cave was discovered in 1940", "Features 1:1 scale replicas of the paintings", "Artworks date back approximately 17,000 years"],
    },
  },
  {
    id: "kid-landmark-puy-du-fou-extra",
    type: "kid-landmark",
    parent: "FR-PDL",
    coords: [-0.9306, 46.8931],
    name: { de: "Puy du Fou", hu: "Puy du Fou", ro: "Puy du Fou", en: "Puy du Fou" },
    description: {
      de: "Puy du Fou ist ein historischer Themenpark, der für seine spektakulären Shows bekannt ist, die verschiedene Epochen der französischen Geschichte nachstellen.",
      hu: "A Puy du Fou egy történelmi vidámpark, amely a francia történelem különböző korszakait felelevenítő látványos előadásairól ismert.",
      ro: "Puy du Fou este un parc tematic istoric renumit pentru spectacolele sale grandioase care reconstituie diferite perioade din istoria Franței.",
      en: "Puy du Fou is a historical theme park renowned for its spectacular shows that reenact different periods of French history."
    },
    facts: {
      de: ["Keine Fahrgeschäfte, nur Shows und historische Dörfer.", "Mehrfach als 'Bester Park der Welt' ausgezeichnet.", "Berühmte Nachtshow 'Cinéscénie'."],
      hu: ["Nincsenek hullámvasutak, csak előadások és történelmi falvak.", "Többször is elnyerte a 'Világ legjobb parkja' díjat.", "Híres éjszakai show-ja a 'Cinéscénie'."],
      ro: ["Fără atracții mecanice, doar spectacole și sate istorice.", "Premiat de mai multe ori ca 'Cel mai bun parc din lume'.", "Celebrul spectacol de noapte 'Cinéscénie'."],
      en: ["No rides, only shows and historical villages.", "Awarded 'Best Park in the World' multiple times.", "Famous night show 'Cinéscénie'."]
    }, image: "/poi-images/kid-landmark-puy-du-fou-extra.webp",
    descriptionAdvanced: {
      de: "Puy du Fou ist ein historischer Themenpark in der Region Vendée im Westen Frankreichs. Er wurde 1978 gegründet und ist für seine spektakulären Shows bekannt, die verschiedene Epochen der Geschichte zum Leben erwecken. Der Park verzichtet auf klassische Fahrgeschäfte und setzt stattdessen auf aufwendige Inszenierungen mit Tausenden von Darstellern. Es ist einer der meistbesuchten Freizeitparks des Landes.",
      hu: "A Puy du Fou egy egyedülálló történelmi élménypark a franciaországi Vendée régióban. Az 1978-ban alapított park híres nagyszabású előadásairól, amelyek a történelmi korszakokat elevenítik fel. A helyszínen nincsenek hagyományos vidámparki játékok, a hangsúly a látványos élő show-műsorokon és a korhű falvakon van. Franciaország egyik legnépszerűbb és legtöbb díjat nyert tematikus parkja.",
      ro: "Puy du Fou este un parc tematic istoric situat în regiunea Vendée din vestul Franței. Fondat în 1978, parcul este renumit pentru spectacolele sale grandioase care readuc la viață diverse epoci istorice. Spre deosebire de parcurile clasice, acesta nu are carusele, mizând pe puneri în scenă elaborate cu mii de actori. Este una dintre cele mai vizitate destinații de agrement din țară.",
      en: "Puy du Fou is a historical theme park located in the Vendée region of western France. Established in 1978, it is famous for its grand shows that bring various historical eras to life. The park eschews traditional rides in favor of elaborate performances featuring thousands of actors and animals. It consistently ranks as one of the most visited leisure parks in France.",
    },
    factsAdvanced: {
      de: ["Gründung durch Philippe de Villiers 1978", "Gewinner des Thea Classic Award 2012", "Über 2 Millionen Besucher pro Jahr", "Die Abendshow Cinéscénie nutzt 2.500 Darsteller", "Fläche von insgesamt 55 Hektar", "Beinhaltet vier rekonstruierte historische Dörfer"],
      hu: ["Philippe de Villiers alapította 1978-ban", "2012-ben elnyerte a Thea Classic Award-ot", "Évente több mint 2 millió látogatót fogad", "A Cinéscénie előadásban 2500 színész szerepel", "A park teljes területe 55 hektár", "Négy korhűen rekonstruált történelmi falu várja"],
      ro: ["Fondat de Philippe de Villiers în 1978", "Câștigător al premiului Thea Classic în 2012", "Peste 2 milioane de vizitatori anual", "Spectacolul Cinéscénie are 2.500 de actori", "Suprafața totală este de 55 de hectare", "Găzduiește patru sate istorice reconstruite"],
      en: ["Founded by Philippe de Villiers in 1978", "Won the Thea Classic Award in 2012", "Attracts over 2 million visitors annually", "Cinéscénie show features 2,500 performers", "The park covers an area of 55 hectares", "Contains four reconstructed period villages"],
    },
  },
  {
    id: "agriculture-provence-lavender-extra",
    type: "agriculture",
    parent: "FR-PAC",
    coords: [5.923, 43.933],
    name: { de: "Lavendelfelder der Provence", hu: "Provence-i levendulamezők", ro: "Câmpurile de lavandă din Provence", en: "Lavender Fields of Provence" },
    description: {
      de: "Die Lavendelfelder der Provence bieten im Sommer einen atemberaubenden Anblick und Duft. Das Plateau de Valensole ist einer der berühmtesten Orte dafür.",
      hu: "A provence-i levendulamezők nyáron lélegzetelállító látványt és illatot nyújtanak. A Valensole-fennsík az egyik leghíresebb helyszín.",
      ro: "Câmpurile de lavandă din Provence oferă o priveliște și un parfum uimitoare în timpul verii. Platoul Valensole este unul dintre cele mai faimoase locuri.",
      en: "The lavender fields of Provence offer a breathtaking sight and scent in the summer. The Valensole Plateau is one of the most famous spots."
    },
    facts: {
      de: ["Blütezeit ist von Juni bis August.", "Wird für ätherische Öle, Seifen und Parfüm verwendet.", "Die Lavendelrouten führen durch die schönsten Landschaften."],
      hu: ["A virágzás júniustól augusztusig tart.", "Illóolajokhoz, szappanokhoz és parfümökhöz használják.", "A levendula-utak a legszebb tájakon vezetnek keresztül."],
      ro: ["Perioada de înflorire este din iunie până în august.", "Folosită pentru uleiuri esențiale, săpunuri și parfumuri.", "Rutele lavandei te poartă prin cele mai frumoase peisaje."],
      en: ["Flowering season is from June to August.", "Used for essential oils, soaps, and perfume.", "The lavender routes guide you through the most beautiful landscapes."]
    }, image: "/poi-images/agriculture-provence-lavender-extra.webp",
    descriptionAdvanced: {
      de: "Die Lavendelfelder der Provence prägen im Sommer das Landschaftsbild Südfrankreichs mit ihren leuchtend violetten Farben. Besonders das Plateau de Valensole ist für seine weiten Anbauflächen bekannt, die zur Produktion von ätherischen Ölen und Honig genutzt werden. Die Blütezeit lockt jährlich zahlreiche Besucher an, die die charakteristischen Düfte erleben möchten. Der Anbau hat eine lange Tradition und ist ein wichtiger Wirtschaftsfaktor.",
      hu: "Provence levendulamezői nyaranta jellegzetes lila színbe öltöztetik Dél-Franciaország tájait. Különösen a Valensole-fennsík híres hatalmas ültetvényeiről, ahol illóolaj és méz készítéséhez termesztik a növényt. A virágzás idején a látogatók a világ minden tájáról érkeznek, hogy megcsodálják a látványt és érezzék az illatot. A levendulatermesztésnek több évszázados hagyománya van a régióban.",
      ro: "Câmpurile de levănțică din Provence transformă peisajul din sudul Franței într-o mare violetă pe parcursul verii. Platoul Valensole este faimos pentru suprafețele sale vaste cultivate pentru producția de uleiuri esențiale și miere. Perioada de înflorire atrage anual mulți turiști care doresc să experimenteze aromele caracteristice. Cultivarea lavandei are o tradiție îndelungată și este vitală pentru economia locală.",
      en: "The lavender fields of Provence define the landscape of southern France during the summer months with their vibrant purple hues. The Valensole Plateau is particularly renowned for its vast cultivation areas used for essential oil and honey production. The blooming season attracts numerous visitors eager to experience the region's signature scents. Lavender farming is a long-standing tradition and a key economic driver.",
    },
    factsAdvanced: {
      de: ["Blütezeit von Mitte Juni bis Mitte August", "Haupterzeugungsgebiet ist das Plateau de Valensole", "Zwei Arten: Echter Lavendel und Lavandin", "Ernte erfolgt meist im Juli oder August", "Über 2.000 Jahre Anbaugeschichte in der Region", "Destillation von etwa 130 kg Blüten für 1 kg Öl"],
      hu: ["Virágzás június közepétől augusztus közepéig", "A fő termesztési körzet a Valensole-fennsík", "Két fajta: az orvosi levendula és a lavandin", "Az aratás általában júliusban vagy augusztusban van", "A termesztés 2000 éves múltra tekint vissza", "1 kg olajhoz kb. 130 kg virág lepárlása kell"],
      ro: ["Înflorire din mijlocul lunii iunie până în august", "Zona principală de cultură este Platoul Valensole", "Există două specii: lavanda fină și lavandinul", "Recoltarea are loc de obicei în luna iulie", "Istoric de cultivare de peste 2.000 de ani", "Se distilează 130 kg de flori pentru 1 kg de ulei"],
      en: ["Blooming period from mid-June to mid-August", "Valensole Plateau is the primary growing area", "Two main types: true lavender and lavandin", "Harvesting typically occurs in July or August", "Over 2,000 years of cultivation in the region", "Requires 130 kg of flowers for 1 kg of oil"],
    },
  },
  {
    id: "lake-annecy-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.15, 45.85],
    name: { de: "See von Annecy", hu: "Annecy-tó", ro: "Lacul Annecy", en: "Lake Annecy" },
    description: {
      de: "Der See von Annecy gilt als einer der saubersten Seen Europas. Umgeben von Bergen bietet er eine idyllische Kulisse für Wassersport und Erholung.",
      hu: "Az Annecy-tavat Európa egyik legtisztább tavának tartják. Hegyekkel körülvéve idilli környezetet biztosít a vízi sportokhoz és a pihenéshez.",
      ro: "Lacul Annecy este considerat unul dintre cele mai curate lacuri din Europa. Înconjurat de munți, oferă un cadru idilic pentru sporturi nautice și recreere.",
      en: "Lake Annecy is considered one of the cleanest lakes in Europe. Surrounded by mountains, it offers an idyllic setting for water sports and recreation."
    },
    facts: {
      de: ["Gespeist von Gebirgsquellen.", "Beliebt zum Schwimmen, Segeln und Radfahren um den See.", "Das Palais de l'Isle in Annecy ist ein berühmtes Fotomotiv."],
      hu: ["Hegyi források táplálják.", "Népszerű úszásra, vitorlázásra és a tó körüli kerékpározásra.", "Az Annecy-ban található Palais de l'Isle híres fotótéma."],
      ro: ["Alimentat de izvoare montane.", "Popular pentru înot, navigație și ciclism în jurul lacului.", "Palais de l'Isle din Annecy este un subiect fotografic faimos."],
      en: ["Fed by mountain springs.", "Popular for swimming, sailing, and cycling around the lake.", "The Palais de l'Isle in Annecy is a famous photo motif."]
    },
    descriptionAdvanced: {
      de: "Der See von Annecy liegt im Departement Haute-Savoie in den französischen Alpen und gilt als einer der saubersten Seen Europas. Er entstand vor etwa 18.000 Jahren durch das Abschmelzen großer Alpengletscher. Das klare, türkisfarbene Wasser wird von steilen Bergen wie dem Tournette-Massiv eingerahmt. Der See ist ein beliebtes Ziel für Wassersportler und Wanderer und prägt die Architektur der gleichnamigen Stadt.",
      hu: "Az Annecy-tó a francia Alpokban, Haute-Savoie megyében található, és Európa egyik legtisztább tavaként ismert. Körülbelül 18 000 évvel ezelőtt alakult ki az alpesi gleccserek olvadásának köszönhetően. A tiszta, türkizkék vizet meredek hegycsúcsok övezik, mint például a Tournette-masszívum. A tó népszerű helyszíne a vízi sportoknak és a túrázásnak, partján pedig a hangulatos Annecy városa fekszik.",
      ro: "Lacul Annecy este situat în departamentul Haute-Savoie din Alpii Francezi și este considerat unul dintre cele mai curate lacuri din Europa. S-a format acum aproximativ 18.000 de ani prin topirea marilor ghețari alpini. Apa sa limpede, de culoare turcoaz, este încadrată de munți abrupți, precum masivul Tournette. Lacul este o destinație populară pentru sporturi nautice și drumeții, definind peisajul orașului Annecy.",
      en: "Lake Annecy is situated in the Haute-Savoie department of the French Alps and is regarded as one of Europe's cleanest lakes. It was formed approximately 18,000 years ago during the melting of large alpine glaciers. The clear turquoise water is framed by steep mountains, including the Tournette massif. The lake is a popular destination for water sports and hiking, significantly influencing the character of Annecy city.",
    },
    factsAdvanced: {
      de: ["Drittgrößter See Frankreichs", "Maximale Tiefe von 82 Metern", "Länge von 14,6 Kilometern", "Wassertemperatur erreicht im Sommer 22-24 Grad", "Entstanden vor etwa 18.000 Jahren", "Berühmt für das Seefest 'Fête du Lac'"],
      hu: ["Franciaország harmadik legnagyobb tava", "Legnagyobb mélysége 82 méter", "Hosszúsága 14,6 kilométer", "Nyáron a víz hőmérséklete eléri a 22-24 fokot", "Kialakulása kb. 18 000 évvel ezelőtt történt", "Híres az augusztusi 'Fête du Lac' fesztiválról"],
      ro: ["Al treilea cel mai mare lac din Franța", "Adâncimea maximă este de 82 de metri", "Lungime totală de 14,6 kilometri", "Temperatura apei atinge 22-24 grade vara", "Format în urmă cu aproximativ 18.000 de ani", "Găzduiește festivalul anual 'Fête du Lac'"],
      en: ["Third largest lake in France", "Maximum water depth of 82 meters", "Total length of 14.6 kilometers", "Summer water temperatures reach 22-24 degrees", "Formed roughly 18,000 years ago", "Famous for the 'Fête du Lac' fireworks festival"],
    },
  }
];
