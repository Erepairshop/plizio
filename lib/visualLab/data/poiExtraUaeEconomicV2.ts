import type { POI } from "./poi";

export const poiExtraUaeEconomicV2: POI[] = [
  {
    id: "jebel-ali-port-economic-v2",
    type: "port",
    parent: "AE-DU",
    coords: [55.021, 24.992],
    name: { de: "Hafen von Jebel Ali", hu: "Dzsebel Ali Kikötő", ro: "Portul Jebel Ali", en: "Jebel Ali Port" },
    description: { de: "Der Hafen von Jebel Ali in Dubai ist der größte künstliche Hafen der Welt und der wichtigste Hafen im Nahen Osten.", hu: "A dubaji Dzsebel Ali Kikötő a világ legnagyobb mesterséges kikötője és a Közel-Kelet legfontosabb tengeri csomópontja.", ro: "Portul Jebel Ali din Dubai este cel mai mare port artificial din lume și cel mai important hub maritim din Orientul Mijlociu.", en: "Jebel Ali Port in Dubai is the world's largest man-made harbor and the most significant maritime hub in the Middle East." },
    facts: {
      de: ["Wurde 1979 offiziell eröffnet.", "Verfügt über mehr als 65 Liegeplätze."],
      hu: ["Hivatalosan 1979-ben nyitották meg.", "Több mint 65 horgonyzóhellyel rendelkezik."],
      ro: ["A fost deschis oficial în 1979.", "Dispune de peste 65 de dane de ancorare."],
      en: ["Officially opened in 1979.", "Has more than 65 berths for vessels."]
    }
  },
  {
    id: "khalifa-port-economic-v2",
    type: "port",
    parent: "AE-AZ",
    coords: [54.646, 24.846],
    name: { de: "Khalifa-Hafen", hu: "Halífa Kikötő", ro: "Portul Khalifa", en: "Khalifa Port" },
    description: { de: "Der Khalifa-Hafen ist das wichtigste maritime Tor in Abu Dhabi und verfügt über das erste halbautomatische Containerterminal der Region.", hu: "A Halífa Kikötő Abu-Dzabi fő tengeri kapuja, amely a régió első félautomata konténertermináljával rendelkezik.", ro: "Portul Khalifa este principala poartă maritimă din Abu Dhabi, prezentând primul terminal de containere semi-automatizat din regiune.", en: "Khalifa Port is the primary maritime gateway in Abu Dhabi, featuring the region's first semi-automated container terminal." },
    facts: {
      de: ["Der Betrieb wurde 2012 aufgenommen.", "Ist direkt mit der Kizad-Industriezone verbunden."],
      hu: ["Működését 2012-ben kezdte meg.", "Közvetlenül kapcsolódik a Kizad ipari övezethez."],
      ro: ["Operațiunile au început în anul 2012.", "Este conectat direct cu zona industrială Kizad."],
      en: ["Operations commenced in 2012.", "Directly connected to the Kizad industrial zone."]
    }
  },
  {
    id: "barakah-nuclear-power-plant-economic-v2",
    type: "energy",
    parent: "AE-AZ",
    coords: [52.234, 23.968],
    name: { de: "Kernkraftwerk Barakah", hu: "Barakah Atomerőmű", ro: "Centrala Nucleară Barakah", en: "Barakah Nuclear Power Plant" },
    description: { de: "Das Kernkraftwerk Barakah in Abu Dhabi ist das erste kommerzielle Kernkraftwerk in der arabischen Welt.", hu: "Az Abu-Dzabiban található Barakah Atomerőmű az arab világ első kereskedelmi célú nukleáris létesítménye.", ro: "Centrala Nucleară Barakah din Abu Dhabi este prima centrală nucleară comercială din lumea arabă.", en: "The Barakah Nuclear Power Plant in Abu Dhabi is the first commercial nuclear power station in the Arab world." },
    facts: {
      de: ["Besteht aus vier südkoreanischen APR-1400-Reaktoren.", "Liefert rund 25 % des Strombedarfs der VAE."],
      hu: ["Négy dél-koreai APR-1400 típusú reaktorból áll.", "Az EAE áramszükségletének mintegy 25%-át biztosítja."],
      ro: ["Este formată din patru reactoare sud-coreene APR-1400.", "Furnizează aproximativ 25% din necesarul de energie al EAU."],
      en: ["Consists of four South Korean APR-1400 reactors.", "Supplies roughly 25% of the UAE's electricity needs."]
    }
  },
  {
    id: "mbr-solar-park-economic-v2",
    type: "energy",
    parent: "AE-DU",
    coords: [55.353, 24.757],
    name: { de: "Mohammed bin Rashid Al Maktoum Solarpark", hu: "Mohammed bin Rashid Al Maktoum Napelempark", ro: "Parcul Solar Mohammed bin Rashid Al Maktoum", en: "Mohammed bin Rashid Al Maktoum Solar Park" },
    description: { de: "Dieser riesige Solarpark in der Wüste von Dubai ist eines der größten Erneuerbare-Energien-Projekte der Welt an einem einzigen Standort.", hu: "Ez a hatalmas napelempark a dubaji sivatagban a világ egyik legnagyobb, egy helyen található megújuló energia projektje.", ro: "Acest imens parc solar din deșertul Dubai este unul dintre cele mai mari proiecte de energie regenerabilă dintr-un singur amplasament din lume.", en: "This massive solar park in the Dubai desert is one of the world's largest single-site renewable energy projects." },
    facts: {
      de: ["Soll bis 2030 eine Kapazität von 5.000 MW erreichen.", "Verfügt über den höchsten Solarturm der Welt."],
      hu: ["2030-ra 5000 MW kapacitás elérése a célja.", "Itt található a világ legmagasabb naptornya."],
      ro: ["Obiectivul este de a atinge 5.000 MW până în 2030.", "Dispune de cel mai înalt turn solar din lume."],
      en: ["Aims to reach 5,000 MW capacity by 2030.", "Features the tallest solar tower in the world."]
    }
  },
  {
    id: "jafza-economic-v2",
    type: "trade-hub",
    parent: "AE-DU",
    coords: [55.050, 24.965],
    name: { de: "Freihandelszone Jebel Ali", hu: "Dzsebel Ali Szabadkereskedelmi Övezet", ro: "Zona Liberă Jebel Ali", en: "Jebel Ali Free Zone (JAFZA)" },
    description: { de: "JAFZA ist eine der am schnellsten wachsenden Freihandelszonen der Welt und beherbergt Tausende von internationalen Unternehmen in Dubai.", hu: "A JAFZA a világ egyik leggyorsabban növekvő szabadkereskedelmi övezete, amely több ezer nemzetközi vállalatnak ad otthont Dubajban.", ro: "JAFZA este una dintre zonele libere cu cea mai rapidă creștere din lume, găzduind mii de companii internaționale în Dubai.", en: "JAFZA is one of the world's fastest-growing free trade zones, housing thousands of international companies in Dubai." },
    facts: {
      de: ["Wurde 1985 gegründet.", "Trägt massiv zum nicht-ölbasierten BIP von Dubai bei."],
      hu: ["1985-ben alapították.", "Jelentősen hozzájárul Dubaj nem olajalapú GDP-jéhez."],
      ro: ["A fost înființată în anul 1985.", "Contribuie masiv la PIB-ul non-petrolier al Dubaiului."],
      en: ["Established in 1985.", "Contributes massively to Dubai's non-oil GDP."]
    }
  },
  {
    id: "adgm-economic-v2",
    type: "trade-hub",
    parent: "AE-AZ",
    coords: [54.391, 24.504],
    name: { de: "Abu Dhabi Global Market", hu: "Abu Dhabi Global Market", ro: "Abu Dhabi Global Market", en: "Abu Dhabi Global Market (ADGM)" },
    description: { de: "Das ADGM auf der Al Maryah Island ist ein internationales Finanzzentrum, das als wichtiger Wirtschafts- und Handelsknotenpunkt fungiert.", hu: "Az Al Maryah-szigeten található ADGM egy nemzetközi pénzügyi központ, amely kulcsfontosságú gazdasági és kereskedelmi csomópontként működik.", ro: "ADGM de pe Insula Al Maryah este un centru financiar internațional care funcționează ca un important hub economic și comercial.", en: "The ADGM on Al Maryah Island is an international financial centre serving as a key economic and trading hub." },
    facts: {
      de: ["Es wendet englisches Common Law an.", "Die Insel umfasst auch luxuriöse Geschäftskomplexe."],
      hu: ["Az angol szokásjog (Common Law) alapján működik.", "A szigeten luxus üzleti komplexumok is találhatók."],
      ro: ["Aplică legea comună engleză (Common Law).", "Insula include și complexe de afaceri de lux."],
      en: ["It applies English Common Law.", "The island also includes luxury business complexes."]
    }
  },
  {
    id: "port-rashid-economic-v2",
    type: "port",
    parent: "AE-DU",
    coords: [55.274, 25.264],
    name: { de: "Hafen Rashid", hu: "Rásid Kikötő", ro: "Portul Rashid", en: "Port Rashid" },
    description: { de: "Der Hafen Rashid war Dubais erster moderner Handelshafen und wurde in den letzten Jahren zunehmend in ein wichtiges Kreuzfahrtterminal umgewandelt.", hu: "A Rásid Kikötő Dubaj első modern kereskedelmi kikötője volt, amelyet az elmúlt években egyre inkább jelentős tengerjáró terminállá alakítottak át.", ro: "Portul Rashid a fost primul port comercial modern din Dubai și a fost transformat recent într-un important terminal pentru nave de croazieră.", en: "Port Rashid was Dubai's first modern commercial port and has increasingly been transformed into a major cruise terminal in recent years." },
    facts: {
      de: ["Eröffnete 1972 seinen Betrieb.", "Benannt nach dem ehemaligen Herrscher Sheikh Rashid bin Saeed Al Maktoum."],
      hu: ["1972-ben kezdte meg működését.", "Nevét a korábbi uralkodóról, Rásid bin Szaíd Al Maktúm sejkről kapta."],
      ro: ["Și-a început operațiunile în 1972.", "Numit după fostul conducător Șeic Rashid bin Saeed Al Maktoum."],
      en: ["Began operations in 1972.", "Named after former ruler Sheikh Rashid bin Saeed Al Maktoum."]
    }
  },
  {
    id: "port-of-fujairah-economic-v2",
    type: "port",
    parent: "AE-FU",
    coords: [56.353, 25.176],
    name: { de: "Hafen von Fudschaira", hu: "Fudzsejra Kikötője", ro: "Portul Fujairah", en: "Port of Fujairah" },
    description: { de: "Dieser Hafen am Golf von Oman ist der einzige Mehrzweckhafen an der Ostküste der VAE und ein globales Zentrum für die Betankung von Schiffen.", hu: "Ez az Ománi-öböl partján fekvő kikötő az EAE keleti partjának egyetlen többcélú kikötője, és a hajók üzemanyag-ellátásának globális központja.", ro: "Acest port situat pe Golful Oman este singurul port multifuncțional de pe coasta de est a EAU și un centru global de alimentare a navelor.", en: "Located on the Gulf of Oman, this is the only multi-purpose port on the Eastern seaboard of the UAE and a global bunkering hub." },
    facts: {
      de: ["Einer der größten Bunkerhäfen der Welt.", "Ist durch eine Ölpipeline mit Abu Dhabi verbunden."],
      hu: ["A világ egyik legnagyobb bunker-kikötője.", "Olajvezeték köti össze Abu-Dzabival."],
      ro: ["Este unul dintre cele mai mari porturi de bunkerare din lume.", "Este conectat la Abu Dhabi printr-o conductă de petrol."],
      en: ["One of the largest bunkering ports in the world.", "Connected to Abu Dhabi via an oil pipeline."]
    }
  },
  {
    id: "kizad-economic-v2",
    type: "industry",
    parent: "AE-AZ",
    coords: [54.654, 24.811],
    name: { de: "Khalifa-Industriezone Abu Dhabi", hu: "Halífa Ipari Övezet Abu-Dzabi", ro: "Zona Industrială Khalifa Abu Dhabi", en: "Khalifa Industrial Zone Abu Dhabi (KIZAD)" },
    description: { de: "KIZAD ist ein riesiger Industrie- und Logistikkomplex in Abu Dhabi, der darauf ausgelegt ist, ausländische Direktinvestitionen in die Region zu lenken.", hu: "A KIZAD egy hatalmas ipari és logisztikai komplexum Abu-Dzabiban, amelynek célja a közvetlen külföldi tőkebefektetések vonzása a régióba.", ro: "KIZAD este un vast complex industrial și logistic în Abu Dhabi, conceput pentru a atrage investiții străine directe în regiune.", en: "KIZAD is a massive industrial and logistics hub in Abu Dhabi designed to attract foreign direct investments to the region." },
    facts: {
      de: ["Ist ein zentraler Teil der Wirtschaftsvision 2030 von Abu Dhabi.", "Bietet hervorragende Anbindungen an See-, Luft- und Straßennetz."],
      hu: ["Abu-Dzabi 2030-as gazdasági jövőképének központi eleme.", "Kiváló összeköttetést biztosít a tengeri, légi és közúti hálózattal."],
      ro: ["Este o parte centrală a Viziunii Economice 2030 a Abu Dhabi.", "Oferă conexiuni excelente la rețelele maritime, aeriene și rutiere."],
      en: ["A central part of Abu Dhabi's Economic Vision 2030.", "Offers excellent connections to sea, air, and road networks."]
    }
  },
  {
    id: "ruwais-refinery-economic-v2",
    type: "industry",
    parent: "AE-AZ",
    coords: [52.730, 24.137],
    name: { de: "Raffinerie Ruwais", hu: "Ruwais Finomító", ro: "Rafinăria Ruwais", en: "Ruwais Refinery" },
    description: { de: "Die Raffinerie Ruwais in der Region Al Dhafra ist eine der größten und modernsten Erdölraffinerien der Welt und ein Eckpfeiler der ADNOC.", hu: "Az Al Dhafra régióban található Ruwais Finomító a világ egyik legnagyobb és legkorszerűbb kőolajfinomítója, az ADNOC egyik sarokköve.", ro: "Rafinăria Ruwais din regiunea Al Dhafra este una dintre cele mai mari și mai moderne rafinării de petrol din lume, piatră de temelie a ADNOC.", en: "The Ruwais Refinery in the Al Dhafra region is one of the world's largest and most modern oil refineries, acting as a cornerstone for ADNOC." },
    facts: {
      de: ["Sie verarbeitet Rohöl zu hochwertigen Erdölprodukten.", "Befindet sich etwa 240 Kilometer westlich von Abu Dhabi-Stadt."],
      hu: ["A nyersolajat kiváló minőségű kőolajtermékekké dolgozza fel.", "Körülbelül 240 kilométerre nyugatra található Abu-Dzabi városától."],
      ro: ["Procesează țițeiul în produse petroliere de înaltă calitate.", "Situată la aproximativ 240 de kilometri vest de orașul Abu Dhabi."],
      en: ["Processes crude oil into high-quality petroleum products.", "Located about 240 kilometers west of Abu Dhabi city."]
    }
  },
  {
    id: "ega-al-taweelah-economic-v2",
    type: "industry",
    parent: "AE-AZ",
    coords: [54.717, 24.848],
    name: { de: "Emirates Global Aluminium Al Taweelah", hu: "Emirates Global Aluminium Al Taweelah", ro: "Emirates Global Aluminium Al Taweelah", en: "Emirates Global Aluminium Al Taweelah" },
    description: { de: "Die EGA-Schmelze in Al Taweelah ist eine der größten Aluminiumproduktionsstätten der Welt und ein Symbol für die industrielle Diversifizierung der VAE.", hu: "Az EGA Al Taweelah kohója a világ egyik legnagyobb alumíniumgyártó létesítménye, amely az EAE ipari diverzifikációjának egyik szimbóluma.", ro: "Topitoria EGA din Al Taweelah este una dintre cele mai mari fabrici de producție a aluminiului din lume, simbolizând diversificarea industrială a EAU.", en: "The EGA smelter in Al Taweelah is one of the world's largest aluminium production facilities, symbolizing the UAE's industrial diversification." },
    facts: {
      de: ["Produziert hochreines Aluminium für den Export.", "Die Anlage verfügt über ein eigenes Kraftwerk."],
      hu: ["Nagy tisztaságú alumíniumot állít elő exportra.", "A létesítmény saját erőművel rendelkezik."],
      ro: ["Produce aluminiu de înaltă puritate pentru export.", "Facilitatea are propria sa centrală electrică."],
      en: ["Produces high-purity aluminium for export.", "The facility has its own dedicated power plant."]
    }
  },
  {
    id: "saif-zone-economic-v2",
    type: "trade-hub",
    parent: "AE-SH",
    coords: [55.516, 25.321],
    name: { de: "Internationale Freihandelszone des Flughafens Sardscha", hu: "Sardzsai Repülőtér Nemzetközi Szabadkereskedelmi Övezete", ro: "Zona Liberă Internațională a Aeroportului Sharjah", en: "Sharjah Airport International Free Zone (SAIF Zone)" },
    description: { de: "Die SAIF Zone ist ein dynamisches Geschäftszentrum, das Unternehmen erstklassige Logistikdienstleistungen mit direkter Anbindung an den Flughafen bietet.", hu: "A SAIF Zone egy dinamikus üzleti központ, amely első osztályú logisztikai szolgáltatásokat nyújt a vállalatoknak, közvetlen repülőtéri összeköttetéssel.", ro: "SAIF Zone este un centru de afaceri dinamic care oferă companiilor servicii logistice de top, având conexiune directă cu aeroportul.", en: "The SAIF Zone is a dynamic business hub providing companies with premier logistics services and direct access to the airport." },
    facts: {
      de: ["Wurde 1995 gegründet.", "Beherbergt Unternehmen aus über 160 Ländern."],
      hu: ["1995-ben alapították.", "Több mint 160 országból származó vállalatoknak ad otthont."],
      ro: ["A fost fondată în anul 1995.", "Găzduiește companii din peste 160 de țări."],
      en: ["Founded in 1995.", "Hosts companies from over 160 different countries."]
    }
  },
  {
    id: "zayed-port-economic-v2",
    type: "port",
    parent: "AE-AZ",
    coords: [54.381, 24.520],
    name: { de: "Hafen Zayed", hu: "Zájed Kikötő", ro: "Portul Zayed", en: "Zayed Port" },
    description: { de: "Der Hafen Zayed war jahrzehntelang der Haupthandelshafen von Abu Dhabi, bevor der Containerverkehr zum Khalifa-Hafen verlagert wurde.", hu: "A Zájed Kikötő évtizedekig Abu-Dzabi fő kereskedelmi kikötője volt, mielőtt a konténerforgalmat áthelyezték volna a Halífa Kikötőbe.", ro: "Portul Zayed a fost portul comercial principal al Abu Dhabi timp de decenii, înainte ca traficul de containere să fie mutat la Portul Khalifa.", en: "Zayed Port was the main commercial port of Abu Dhabi for decades before container traffic was shifted to Khalifa Port." },
    facts: {
      de: ["Benannt nach Sheikh Zayed bin Sultan Al Nahyan.", "Konzentriert sich heute auf Kreuzfahrtschiffe und Stückgut."],
      hu: ["Nevét Zájed bin Szultán Ál Nahján sejkről kapta.", "Ma már főként a tengerjáró hajókra és a darabárukra összpontosít."],
      ro: ["Numit după Șeicul Zayed bin Sultan Al Nahyan.", "În prezent se concentrează pe nave de croazieră și mărfuri generale."],
      en: ["Named after Sheikh Zayed bin Sultan Al Nahyan.", "Now focuses mainly on cruise ships and general cargo."]
    }
  },
  {
    id: "dubai-internet-city-economic-v2",
    type: "trade-hub",
    parent: "AE-DU",
    coords: [55.163, 25.097],
    name: { de: "Dubai Internet City", hu: "Dubai Internet City", ro: "Dubai Internet City", en: "Dubai Internet City" },
    description: { de: "Dubai Internet City ist der größte Technologiepark für Informations- und Kommunikationstechnologie in der Region des Nahen Ostens und Nordafrikas.", hu: "A Dubai Internet City a Közel-Kelet és Észak-Afrika régió legnagyobb információs és kommunikációs technológiai (IKT) parkja.", ro: "Dubai Internet City este cel mai mare parc tehnologic pentru tehnologia informației și comunicațiilor din regiunea Orientului Mijlociu și a Africii de Nord.", en: "Dubai Internet City is the largest information and communications technology hub in the Middle East and North Africa region." },
    facts: {
      de: ["Wurde im Jahr 1999 angekündigt.", "Beherbergt regionale Niederlassungen von globalen Tech-Giganten."],
      hu: ["1999-ben jelentették be a létrehozását.", "Globális technológiai óriáscégek regionális irodáinak ad otthont."],
      ro: ["Proiectul a fost anunțat în anul 1999.", "Găzduiește birouri regionale ale giganților tehnologici globali."],
      en: ["Announced in the year 1999.", "Hosts regional headquarters of global tech giants."]
    }
  },
  {
    id: "port-khalid-economic-v2",
    type: "port",
    parent: "AE-SH",
    coords: [55.378, 25.370],
    name: { de: "Hafen Khalid", hu: "Hálid Kikötő", ro: "Portul Khalid", en: "Port Khalid" },
    description: { de: "Der Hafen Khalid im Herzen von Sardscha ist einer der wichtigsten Häfen der VAE und verfügt über exzellente Einrichtungen für Ro-Ro- und Stückgutschiffe.", hu: "A Sardzsa szívében található Hálid Kikötő az EAE egyik legfontosabb kikötője, amely kiváló létesítményekkel rendelkezik a ro-ro és darabáru-hajók számára.", ro: "Portul Khalid, situat în inima orașului Sharjah, este unul dintre porturile principale ale EAU, cu facilități excelente pentru navele Ro-Ro și de mărfuri generale.", en: "Port Khalid in the heart of Sharjah is one of the UAE's principal ports, featuring excellent facilities for ro-ro and general cargo vessels." },
    facts: {
      de: ["Der erste Tiefwasserhafen in Sardscha.", "Verfügt über ein dediziertes Containerterminal."],
      hu: ["Az első mélyvízi kikötő Sardzsában.", "Különálló konténerterminállal rendelkezik."],
      ro: ["Primul port de mare adâncime din Sharjah.", "Dispune de un terminal dedicat containerelor."],
      en: ["The first deep-water port in Sharjah.", "Features a dedicated container terminal."]
    }
  },
  {
    id: "dmcc-economic-v2",
    type: "trade-hub",
    parent: "AE-DU",
    coords: [55.143, 25.074],
    name: { de: "Dubai Multi Commodities Centre", hu: "Dubaji Multimodális Árutőzsdei Központ", ro: "Centrul Multi-Mărfuri Dubai", en: "Dubai Multi Commodities Centre (DMCC)" },
    description: { de: "Das DMCC ist eine hochmoderne Freihandelszone im Stadtteil Jumeirah Lakes Towers, die als Zentrum für den globalen Rohstoffhandel dient.", hu: "A DMCC egy ultramodern szabadkereskedelmi övezet a Jumeirah Lakes Towers negyedben, amely a globális árukereskedelem központjaként szolgál.", ro: "DMCC este o zonă liberă ultramodernă în districtul Jumeirah Lakes Towers, servind drept centru pentru comerțul global cu mărfuri.", en: "DMCC is an ultra-modern free zone located in the Jumeirah Lakes Towers district, serving as a hub for global commodities trade." },
    facts: {
      de: ["Fördert den Handel mit Gold, Diamanten und Tee.", "Wurde mehrfach als beste Freihandelszone der Welt ausgezeichnet."],
      hu: ["Elősegíti az arannyal, gyémánttal és teával való kereskedelmet.", "Többször is a világ legjobb szabadkereskedelmi övezetévé választották."],
      ro: ["Promovează comerțul cu aur, diamante și ceai.", "A fost desemnată de mai multe ori drept cea mai bună zonă liberă din lume."],
      en: ["Promotes the trade of gold, diamonds, and tea.", "Has been repeatedly awarded as the world's best free zone."]
    }
  },
  {
    id: "stevin-rock-quarry-economic-v2",
    type: "mine",
    parent: "AE-RK",
    coords: [56.036, 25.928],
    name: { de: "Steinbruch Stevin Rock", hu: "Stevin Rock Kőbánya", ro: "Cariera Stevin Rock", en: "Stevin Rock Quarry" },
    description: { de: "Der Stevin Rock Steinbruch in Ras Al Khaimah gehört zu den größten Kalksteinbrüchen der Welt und liefert Baumaterialien für Megaprojekte in der gesamten Golfregion.", hu: "A Rász el-Haima-i Stevin Rock kőbánya a világ egyik legnagyobb mészkőbányája, amely építőanyagokkal látja el az öböl menti régió megaprojektjeit.", ro: "Cariera Stevin Rock din Ras Al Khaimah este una dintre cele mai mari cariere de calcar din lume, furnizând materiale de construcție pentru megaproiecte din întreaga regiune a Golfului.", en: "The Stevin Rock quarry in Ras Al Khaimah is one of the world's largest limestone quarries, supplying construction materials for megaprojects across the Gulf region." },
    facts: {
      de: ["Produziert jährlich Millionen Tonnen Gestein.", "Hat maßgeblich zu den künstlichen Inseln in Dubai beigetragen."],
      hu: ["Évente több millió tonna kőzetet termel ki.", "Jelentősen hozzájárult a dubaji mesterséges szigetek felépítéséhez."],
      ro: ["Produce anual milioane de tone de piatră.", "A contribuit semnificativ la construcția insulelor artificiale din Dubai."],
      en: ["Produces millions of tons of rock annually.", "Contributed significantly to the artificial islands in Dubai."]
    }
  },
  {
    id: "rakez-economic-v2",
    type: "trade-hub",
    parent: "AE-RK",
    coords: [55.972, 25.801],
    name: { de: "Wirtschaftszone Ras Al Khaimah", hu: "Rász el-Haima-i Gazdasági Övezet", ro: "Zona Economică Ras Al Khaimah", en: "Ras Al Khaimah Economic Zone (RAKEZ)" },
    description: { de: "RAKEZ ist ein bedeutendes Geschäfts- und Industriezentrum, das ausländische Investoren mit kostengünstigen Lösungen anzieht und ein diversifiziertes Wirtschaftswachstum fördert.", hu: "A RAKEZ egy jelentős üzleti és ipari központ, amely költséghatékony megoldásokkal vonzza a külföldi befektetőket, elősegítve a diverzifikált gazdasági növekedést.", ro: "RAKEZ este un centru major de afaceri și industrial, atrăgând investitori străini cu soluții eficiente din punct de vedere al costurilor și promovând o creștere economică diversificată.", en: "RAKEZ is a major business and industrial hub, attracting foreign investors with cost-effective solutions and promoting diversified economic growth." },
    facts: {
      de: ["Entstand aus der Fusion der RAK Free Trade Zone und RAK Investment Authority.", "Bietet spezialisierte Zonen für Industrie und Dienstleistungen."],
      hu: ["A RAK Szabadkereskedelmi Övezet és a RAK Befektetési Hatóság egyesüléséből jött létre.", "Speciális övezeteket kínál az ipar és a szolgáltatások számára."],
      ro: ["S-a format prin fuziunea RAK Free Trade Zone cu RAK Investment Authority.", "Oferă zone specializate pentru industrie și servicii."],
      en: ["Formed from the merger of RAK Free Trade Zone and RAK Investment Authority.", "Offers specialized zones for industry and services."]
    }
  },
  {
    id: "dwc-logistics-hub-economic-v2",
    type: "trade-hub",
    parent: "AE-DU",
    coords: [55.165, 24.912],
    name: { de: "Dubai World Central Logistikzentrum", hu: "Dubai World Central Logisztikai Központ", ro: "Centrul Logistic Dubai World Central", en: "Dubai World Central Logistics Hub" },
    description: { de: "Dieser riesige Logistikkomplex ist Teil des Projekts Dubai South und verbindet nahtlos den Hafen Jebel Ali mit dem internationalen Flughafen Al Maktoum.", hu: "Ez a hatalmas logisztikai komplexum a Dubai South projekt része, és zökkenőmentesen köti össze a Dzsebel Ali Kikötőt az Al Maktoum Nemzetközi Repülőtérrel.", ro: "Acest imens complex logistic face parte din proiectul Dubai South, conectând fluid Portul Jebel Ali cu Aeroportul Internațional Al Maktoum.", en: "This vast logistics complex is part of the Dubai South project, seamlessly connecting Jebel Ali Port with Al Maktoum International Airport." },
    facts: {
      de: ["Ermöglicht multimodalen Transport (See-Luft) in nur vier Stunden.", "Teil der ersten zweckgebundenen 'Aerotropolis' der Welt."],
      hu: ["Lehetővé teszi a multimodális szállítást (tengeri-légi) mindössze négy óra alatt.", "A világ első célzottan épített 'aerotropoliszának' része."],
      ro: ["Permite transportul multimodal (mare-aer) în doar patru ore.", "Face parte din primul 'aerotropolis' construit special din lume."],
      en: ["Enables multimodal (sea-air) transport in just four hours.", "Part of the world's first purpose-built 'aerotropolis'."]
    }
  },
  {
    id: "shams-solar-power-station-economic-v2",
    type: "energy",
    parent: "AE-AZ",
    coords: [53.712, 23.572],
    name: { de: "Sonnenwärmekraftwerk Shams", hu: "Shams Naperőmű", ro: "Centrala Solară Shams", en: "Shams Solar Power Station" },
    description: { de: "Shams in Abu Dhabi war bei seiner Inbetriebnahme das größte solarthermische Parabolrinnenkraftwerk der Welt.", hu: "Az Abu-Dzabiban található Shams a maga nemében a világ legnagyobb parabolavályús naperőműve volt az üzembe helyezésekor.", ro: "Shams din Abu Dhabi a fost cea mai mare centrală solară cu jgheaburi parabolice din lume la momentul punerii în funcțiune.", en: "Shams in Abu Dhabi was the world's largest parabolic trough solar power station at the time of its commissioning." },
    facts: {
      de: ["Produziert erneuerbaren Strom für Tausende von Haushalten.", "Trägt zur Reduzierung der CO2-Emissionen bei."],
      hu: ["Több ezer háztartás számára termel megújuló villamos energiát.", "Hozzájárul a szén-dioxid-kibocsátás csökkentéséhez."],
      ro: ["Produce electricitate regenerabilă pentru mii de gospodării.", "Contribuie la reducerea emisiilor de CO2."],
      en: ["Produces renewable electricity for thousands of homes.", "Contributes to the reduction of CO2 emissions."]
    }
  }
];
