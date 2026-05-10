import type { POI } from "./poi";

export const poiExtraMaldivesEconomicV2: POI[] = [
  {
    id: "male-commercial-harbour-economic-v2",
    type: "port",
    parent: "MV-MLE",
    coords: [73.5041, 4.1755],
    name: { de: "Malé Handelshafen", hu: "Malé Kereskedelmi Kikötő", ro: "Portul Comercial Malé", en: "Malé Commercial Harbour" },
    description: { de: "Der Haupthafen der Malediven, der den Großteil der Importe und Exporte des Landes abwickelt.", hu: "A Maldív-szigetek fő kikötője, amely az ország import- és exportforgalmának nagy részét bonyolítja.", ro: "Portul principal al Maldivelor, care gestionează majoritatea importurilor și exporturilor țării.", en: "The main port of the Maldives, handling the vast majority of the country's imports and exports." },
    facts: {
      de: ["Wichtigstes Tor für internationale Fracht.", "Wird von den Maldives Ports Limited betrieben."],
      hu: ["A nemzetközi áruforgalom legfontosabb kapuja.", "A Maldives Ports Limited üzemelteti."],
      ro: ["Cea mai importantă poartă pentru mărfurile internaționale.", "Operat de Maldives Ports Limited."],
      en: ["Most important gateway for international cargo.", "Operated by Maldives Ports Limited."]
    }, image: "/poi-images/male-commercial-harbour-economic-v2.webp"},
  {
    id: "mifco-felivaru-economic-v2",
    type: "industry",
    parent: "MV-03",
    coords: [73.3490, 5.4411],
    name: { de: "MIFCO Fischverarbeitungsfabrik Felivaru", hu: "MIFCO Felivaru Halfeldolgozó Üzem", ro: "Fabrica de Procesare a Peștelui MIFCO Felivaru", en: "MIFCO Felivaru Fish Processing Plant" },
    description: { de: "Eine der größten staatlichen Fischverarbeitungs- und Konservenfabriken, die eine Schlüsselrolle in der lokalen Wirtschaft spielt.", hu: "Az egyik legnagyobb állami halfeldolgozó és konzervgyár, amely kulcsszerepet játszik a helyi gazdaságban.", ro: "Una dintre cele mai mari fabrici de stat pentru procesarea și conservarea peștelui, având un rol cheie în economia locală.", en: "One of the largest state-owned fish processing and canning factories, playing a key role in the local economy." },
    facts: {
      de: ["Produziert Thunfischkonserven für den Export.", "Gegründet in den 1970er Jahren."],
      hu: ["Tonhalkonzerveket gyárt exportra.", "Az 1970-es években alapították."],
      ro: ["Produce conserve de ton pentru export.", "Înființată în anii 1970."],
      en: ["Produces canned tuna for export.", "Established in the 1970s."]
    }, image: "/poi-images/mifco-felivaru-economic-v2.webp"},
  {
    id: "hulhumale-power-station-economic-v2",
    type: "energy",
    parent: "MV-MLE",
    coords: [73.5350, 4.2155],
    name: { de: "Hulhumalé Kraftwerk", hu: "Hulhumalé Erőmű", ro: "Centrala Electrică Hulhumalé", en: "Hulhumalé Power Station" },
    description: { de: "Ein modernes Kraftwerk, das die schnell wachsende künstliche Insel Hulhumalé und umliegende Gebiete mit Strom versorgt.", hu: "Egy modern erőmű, amely a gyorsan növekvő mesterséges szigetet, Hulhumalét és a környező területeket látja el árammal.", ro: "O centrală electrică modernă care furnizează energie insulei artificiale în creștere rapidă Hulhumalé și zonelor înconjurătoare.", en: "A modern power plant providing electricity to the rapidly growing artificial island of Hulhumalé and surrounding areas." },
    facts: {
      de: ["Erweitert mit neuen Dieselgeneratoren.", "Teil des Netzes der Greater Malé Region."],
      hu: ["Új dízelgenerátorokkal bővítették.", "A Nagy-Malé régió hálózatának része."],
      ro: ["Extinsă cu noi generatoare diesel.", "Parte a rețelei regiunii Greater Malé."],
      en: ["Expanded with new diesel generators.", "Part of the Greater Malé region grid."]
    }, image: "/poi-images/hulhumale-power-station-economic-v2.webp"},
  {
    id: "thilafushi-industrial-zone-economic-v2",
    type: "industry",
    parent: "MV-MLE",
    coords: [73.4355, 4.1833],
    name: { de: "Thilafushi Industriegebiet", hu: "Thilafushi Ipari Zóna", ro: "Zona Industrială Thilafushi", en: "Thilafushi Industrial Zone" },
    description: { de: "Eine künstliche Insel, die als Abfallentsorgungs- und Industriezentrum dient, mit Lagerhäusern und Produktionsstätten.", hu: "Egy mesterséges sziget, amely hulladékkezelési és ipari központként szolgál raktárakkal és gyártóüzemekkel.", ro: "O insulă artificială care servește ca centru de gestionare a deșeurilor și industrial, având depozite și unități de producție.", en: "An artificial island serving as a waste management and industrial hub, with warehouses and manufacturing facilities." },
    facts: {
      de: ["Wurde ursprünglich als Mülldeponie angelegt.", "Beherbergt Zementverpackung und Bootsbau."],
      hu: ["Eredetileg szeméttelepként hozták létre.", "Cementcsomagoló és hajóépítő üzemek is találhatók itt."],
      ro: ["Inițial a fost creată ca o groapă de gunoi.", "Găzduiește ambalarea cimentului și construcția de bărci."],
      en: ["Originally created as a landfill site.", "Hosts cement packing and boat building facilities."]
    }, image: "/poi-images/thilafushi-industrial-zone-economic-v2.webp"},
  {
    id: "kooddoo-fish-processing-economic-v2",
    type: "industry",
    parent: "MV-05",
    coords: [73.4333, 0.7333],
    name: { de: "Kooddoo Fischfabrik", hu: "Kooddoo Halfeldolgozó", ro: "Fabrica de Pește Kooddoo", en: "Kooddoo Fish Processing Plant" },
    description: { de: "Ein bedeutendes Fischverarbeitungs- und Kühlhauskomplex im Süden der Malediven zur Unterstützung der lokalen Fischerei.", hu: "Egy jelentős halfeldolgozó és hűtőházi komplexum a Maldív-szigetek déli részén, amely a helyi halászatot támogatja.", ro: "Un complex important de procesare și depozitare frigorifică a peștelui în sudul Maldivelor, pentru a sprijini pescuitul local.", en: "A major fish processing and cold storage complex in the southern Maldives to support local fisheries." },
    facts: {
      de: ["Verfügt über massive Gefrierkapazitäten.", "Sichert das Einkommen südlicher Fischer."],
      hu: ["Hatalmas fagyasztókapacitással rendelkezik.", "A déli halászok megélhetését biztosítja."],
      ro: ["Dispune de o capacitate masivă de congelare.", "Asigură veniturile pescarilor din sud."],
      en: ["Has massive freezing capacity.", "Secures the income of southern fishermen."]
    }
  },
  {
    id: "stelco-male-power-plant-economic-v2",
    type: "energy",
    parent: "MV-MLE",
    coords: [73.5070, 4.1720],
    name: { de: "STELCO Kraftwerk Malé", hu: "STELCO Malé Erőmű", ro: "Centrala Electrică STELCO Malé", en: "STELCO Malé Power Plant" },
    description: { de: "Das zentrale Dieselkraftwerk der State Electric Company, das die Hauptstadt Malé mit lebensnotwendigem Strom versorgt.", hu: "Az Állami Elektromos Művek központi dízelerőműve, amely a fővárost, Malét látja el létfontosságú árammal.", ro: "Centrala principală pe motorină a Companiei Electrice de Stat, care furnizează electricitate vitală capitalei Malé.", en: "The central diesel power plant of the State Electric Company, providing vital electricity to the capital city of Malé." },
    facts: {
      de: ["Größter Stromerzeuger der Hauptstadt.", "Nutzt große Dieselgeneratoren."],
      hu: ["A főváros legnagyobb áramtermelője.", "Nagy dízelgenerátorokat használ."],
      ro: ["Cel mai mare producător de energie din capitală.", "Folosește generatoare diesel mari."],
      en: ["Largest power producer in the capital.", "Uses large diesel generators."]
    }, image: "/poi-images/stelco-male-power-plant-economic-v2.webp"},
  {
    id: "maldives-inflight-catering-economic-v2",
    type: "industry",
    parent: "MV-MLE",
    coords: [73.5280, 4.1900],
    name: { de: "Maldives Bordverpflegung (MIC)", hu: "Maldív Repülőtéri Catering", ro: "Catering-ul Aeronautic din Maldive", en: "Maldives Inflight Catering" },
    description: { de: "Ein hochmodernes Catering-Unternehmen auf der Flughafeninsel Hulhulé, das internationale Fluggesellschaften mit Mahlzeiten versorgt.", hu: "Egy ultramodern catering vállalat a Hulhulé repülőtéri szigeten, amely nemzetközi légitársaságokat lát el ételekkel.", ro: "O companie ultramodernă de catering pe insula aeroportului Hulhulé, care furnizează mese companiilor aeriene internaționale.", en: "An ultra-modern catering company on the airport island of Hulhulé, providing meals to international airlines." },
    facts: {
      de: ["Produziert Tausende Mahlzeiten täglich.", "Befindet sich direkt am internationalen Flughafen."],
      hu: ["Naponta több ezer ételt készít.", "Közvetlenül a nemzetközi repülőtéren található."],
      ro: ["Produce mii de mese zilnic.", "Situată direct pe aeroportul internațional."],
      en: ["Produces thousands of meals daily.", "Located directly at the international airport."]
    }
  },
  {
    id: "maandhoo-fisheries-complex-economic-v2",
    type: "industry",
    parent: "MV-05",
    coords: [73.2333, 1.8833],
    name: { de: "Maandhoo Fischereikomplex", hu: "Maandhoo Halászati Komplexum", ro: "Complexul Piscicol Maandhoo", en: "Maandhoo Fisheries Complex" },
    description: { de: "Eine große Fischverarbeitungsanlage im Laamu-Atoll, die für die Verarbeitung von Thunfisch aus der Region zuständig ist.", hu: "Egy nagy halfeldolgozó üzem a Laamu-atollon, amely a régióból származó tonhal feldolgozásáért felelős.", ro: "O mare unitate de procesare a peștelui din atolul Laamu, responsabilă de procesarea tonului din regiune.", en: "A large fish processing facility in the Laamu Atoll, responsible for processing tuna from the region." },
    facts: {
      de: ["Betrieben von Horizon Fisheries.", "Produziert auch Fischmehl."],
      hu: ["A Horizon Fisheries üzemelteti.", "Hallisztet is gyártanak itt."],
      ro: ["Operat de Horizon Fisheries.", "Produce și făină de pește."],
      en: ["Operated by Horizon Fisheries.", "Also produces fishmeal."]
    }, image: "/poi-images/maandhoo-fisheries-complex-economic-v2.webp"},
  {
    id: "gan-airport-port-economic-v2",
    type: "port",
    parent: "MV-01",
    coords: [73.1555, -0.6933],
    name: { de: "Hafen am Flughafen Gan", hu: "Gan Repülőtéri Kikötő", ro: "Portul Aeroportului Gan", en: "Gan International Airport Port" },
    description: { de: "Ein wichtiger regionaler Hafen im Addu-Atoll, der den internationalen Flughafen Gan und den südlichen Handel bedient.", hu: "Fontos regionális kikötő az Addu-atollon, amely a Gan nemzetközi repülőteret és a déli kereskedelmet szolgálja ki.", ro: "Un port regional important în Atolul Addu, deservind aeroportul internațional Gan și comerțul sudic.", en: "An important regional port in the Addu Atoll, serving Gan International Airport and southern trade." },
    facts: {
      de: ["Liegt im südlichsten Atoll.", "Wichtig für die Logistik der südlichen Resorts."],
      hu: ["A legdélibb atollon található.", "Fontos a déli üdülőhelyek logisztikája szempontjából."],
      ro: ["Situat în cel mai sudic atol.", "Important pentru logistica stațiunilor din sud."],
      en: ["Located in the southernmost atoll.", "Important for the logistics of southern resorts."]
    }, image: "/poi-images/gan-airport-port-economic-v2.webp"},
  {
    id: "addu-city-fisheries-economic-v2",
    type: "industry",
    parent: "MV-01",
    coords: [73.1000, -0.6333],
    name: { de: "Addu Stadt Fischereikomplex", hu: "Addu Városi Halászati Komplexum", ro: "Complexul Piscicol din Addu", en: "Addu City Fisheries Complex" },
    description: { de: "Ein bedeutendes Zentrum für die Fischverarbeitung und Kühllagerung im Addu-Atoll zur Stärkung der südlichen Fischereiindustrie.", hu: "Az Addu-atoll jelentős halfeldolgozó és hűtőtároló központja, amely a déli halászati ipart erősíti.", ro: "Un centru important pentru procesarea peștelui și depozitarea la rece în Atolul Addu pentru a consolida industria pescuitului din sud.", en: "A major center for fish processing and cold storage in the Addu Atoll to strengthen the southern fishing industry." },
    facts: {
      de: ["Erhöht die Wertschöpfung des lokalen Fangs.", "Schafft wichtige Arbeitsplätze im Süden."],
      hu: ["Növeli a helyi fogás hozzáadott értékét.", "Fontos munkahelyeket teremt délen."],
      ro: ["Crește valoarea adăugată a capturilor locale.", "Creează locuri de muncă importante în sud."],
      en: ["Increases the value added of local catch.", "Creates important jobs in the south."]
    }, image: "/poi-images/addu-city-fisheries-economic-v2.webp"},
  {
    id: "sto-trade-center-male-economic-v2",
    type: "trade-hub",
    parent: "MV-MLE",
    coords: [73.5065, 4.1760],
    name: { de: "STO Handelszentrum Malé", hu: "STO Kereskedelmi Központ Malé", ro: "Centrul Comercial STO Malé", en: "STO Trade Center Malé" },
    description: { de: "Das Hauptquartier der State Trading Organization, ein zentraler Knotenpunkt für den Handel mit Lebensmitteln, Baumaterialien und Treibstoff.", hu: "Az Állami Kereskedelmi Szervezet központja, az élelmiszer-, építőanyag- és üzemanyag-kereskedelem központi csomópontja.", ro: "Sediul Organizației Comerciale de Stat, un punct central pentru comerțul cu alimente, materiale de construcții și combustibil.", en: "The headquarters of the State Trading Organization, a central hub for trade in food, building materials, and fuel." },
    facts: {
      de: ["Kontrolliert einen Großteil der Importe.", "Umfasst den größten Supermarkt des Landes."],
      hu: ["Az import jelentős részét ellenőrzi.", "Itt található az ország legnagyobb szupermarkete."],
      ro: ["Controlează o mare parte a importurilor.", "Include cel mai mare supermarket din țară."],
      en: ["Controls a large part of imports.", "Includes the country's largest supermarket."]
    }, image: "/poi-images/sto-trade-center-male-economic-v2.webp"},
  {
    id: "hulhumale-yacht-marina-economic-v2",
    type: "port",
    parent: "MV-MLE",
    coords: [73.5380, 4.2180],
    name: { de: "Hulhumalé Yachthafen", hu: "Hulhumalé Jachtkikötő", ro: "Portul de Iahturi Hulhumalé", en: "Hulhumalé Yacht Marina" },
    description: { de: "Ein moderner Yachthafen auf der künstlichen Insel Hulhumalé, der Safari-Boote und internationale Yachten beherbergt und den Luxustourismus fördert.", hu: "Modern jachtkikötő a mesterséges Hulhumalé szigeten, amely szafari hajókat és nemzetközi jachtokat fogad, támogatva a luxusturizmust.", ro: "Un port modern de iahturi pe insula artificială Hulhumalé, care găzduiește bărci de safari și iahturi internaționale, promovând turismul de lux.", en: "A modern yacht marina on the artificial island of Hulhumalé, hosting safari boats and international yachts, promoting luxury tourism." },
    facts: {
      de: ["Bietet Liegeplätze für über 300 Boote.", "Verfügt über Wartungseinrichtungen für Yachten."],
      hu: ["Több mint 300 hajó számára kínál kikötőhelyet.", "Jachtkarbantartó létesítményekkel is rendelkezik."],
      ro: ["Oferă dane pentru peste 300 de bărci.", "Dispune de facilități de întreținere pentru iahturi."],
      en: ["Offers berths for over 300 boats.", "Has maintenance facilities for yachts."]
    }, image: "/poi-images/hulhumale-yacht-marina-economic-v2.webp"},
  {
    id: "horizon-fisheries-processing-economic-v2",
    type: "industry",
    parent: "MV-05",
    coords: [73.2350, 1.8840],
    name: { de: "Horizon Fischverarbeitungsanlage", hu: "Horizon Halfeldolgozó Üzem", ro: "Unitatea de Procesare a Peștelui Horizon", en: "Horizon Fisheries Processing Plant" },
    description: { de: "Eine der fortschrittlichsten privaten Fischverarbeitungsanlagen auf den Malediven, spezialisiert auf nachhaltig gefangenen Thunfisch.", hu: "A Maldív-szigetek egyik legkorszerűbb magán halfeldolgozó üzeme, amely a fenntarthatóan fogott tonhalra specializálódott.", ro: "Una dintre cele mai avansate fabrici private de procesare a peștelui din Maldive, specializată în tonul prins în mod sustenabil.", en: "One of the most advanced private fish processing plants in the Maldives, specializing in sustainably caught tuna." },
    facts: {
      de: ["Exportiert nach Europa und Asien.", "Fördert MSC-zertifizierten Fischfang."],
      hu: ["Európába és Ázsiába is exportál.", "Támogatja az MSC-tanúsítvánnyal rendelkező halászatot."],
      ro: ["Exportă în Europa și Asia.", "Promovează pescuitul certificat MSC."],
      en: ["Exports to Europe and Asia.", "Promotes MSC-certified fishing."]
    }, image: "/poi-images/horizon-fisheries-processing-economic-v2.webp"},
  {
    id: "male-fish-market-economic-v2",
    type: "trade-hub",
    parent: "MV-MLE",
    coords: [73.5048, 4.1780],
    name: { de: "Fischmarkt von Malé", hu: "Malé Halpiac", ro: "Piața de Pește din Malé", en: "Malé Fish Market" },
    description: { de: "Das pulsierende kommerzielle Herz des lokalen Fischhandels, wo Fischer ihren täglichen Fang direkt an Groß- und Einzelhändler verkaufen.", hu: "A helyi halkereskedelem lüktető kereskedelmi szíve, ahol a halászok napi fogásukat közvetlenül a nagy- és kiskereskedőknek adják el.", ro: "Inima comercială vibrantă a comerțului local cu pește, unde pescarii își vând captura zilnică direct angrosiștilor și retailerilor.", en: "The pulsating commercial heart of the local fish trade, where fishermen sell their daily catch directly to wholesalers and retailers." },
    facts: {
      de: ["Handelszentrum für Gelbflossenthunfisch.", "Täglich Hunderte von Transaktionen."],
      hu: ["A sárgaúszójú tonhal kereskedelmi központja.", "Naponta több száz tranzakció zajlik itt."],
      ro: ["Centru comercial pentru tonul cu aripioare galbene.", "Sute de tranzacții în fiecare zi."],
      en: ["Trading hub for yellowfin tuna.", "Hundreds of transactions daily."]
    }, image: "/poi-images/male-fish-market-economic-v2.webp"},
  {
    id: "dhiffushi-solar-power-economic-v2",
    type: "energy",
    parent: "MV-26",
    coords: [73.7167, 4.4417],
    name: { de: "Dhiffushi Solarkraftwerk", hu: "Dhiffushi Naperőmű", ro: "Centrala Solară Dhiffushi", en: "Dhiffushi Solar Power Plant" },
    description: { de: "Eine zukunftsweisende Solaranlage, die dazu beiträgt, die Abhängigkeit der Insel von importiertem Dieselkraftstoff für die Stromerzeugung zu verringern.", hu: "Előremutató naperőmű, amely segít csökkenteni a sziget importált gázolajtól való függését a villamosenergia-termelésben.", ro: "O instalație solară avangardistă care ajută la reducerea dependenței insulei de combustibilul diesel importat pentru generarea de electricitate.", en: "A pioneering solar plant helping to reduce the island's dependence on imported diesel fuel for electricity generation." },
    facts: {
      de: ["Erstes Pilotprojekt für erneuerbare Energien auf den Inseln.", "Reduziert den CO2-Ausstoß erheblich."],
      hu: ["Az első megújuló energia kísérleti projekt a szigeteken.", "Jelentősen csökkenti a szén-dioxid-kibocsátást."],
      ro: ["Primul proiect pilot de energie regenerabilă pe insule.", "Reduce semnificativ emisiile de carbon."],
      en: ["First pilot project for renewable energy on the islands.", "Significantly reduces carbon emissions."]
    }
  },
  {
    id: "kadhdhoo-regional-port-economic-v2",
    type: "port",
    parent: "MV-05",
    coords: [73.2000, 1.8667],
    name: { de: "Regionalhafen Kadhdhoo", hu: "Kadhdhoo Regionális Kikötő", ro: "Portul Regional Kadhdhoo", en: "Kadhdhoo Regional Port" },
    description: { de: "Ein wichtiger regionaler Hafen im Laamu-Atoll, der den Warenverkehr und die lokale Wirtschaftszone in Süd-Zentral-Malediven unterstützt.", hu: "Fontos regionális kikötő a Laamu-atollon, amely az áruforgalmat és a helyi gazdasági övezetet támogatja a dél-középső Maldív-szigeteken.", ro: "Un port regional important din Atolul Laamu, care susține traficul de mărfuri și zona economică locală din regiunea central-sudică a Maldivelor.", en: "An important regional port in the Laamu Atoll supporting freight traffic and the local economic zone in the South Central Maldives." },
    facts: {
      de: ["Verbindet die Atolle mit der Hauptstadt.", "Umschlagplatz für landwirtschaftliche Güter."],
      hu: ["Összeköti az atollokat a fővárossal.", "Mezőgazdasági termékek átrakóhelye."],
      ro: ["Conectează atolii cu capitala.", "Punct de transfer pentru produsele agricole."],
      en: ["Connects the atolls with the capital.", "Transfer point for agricultural goods."]
    }, image: "/poi-images/kadhdhoo-regional-port-economic-v2.webp"},
  {
    id: "fenaka-thinadhoo-power-economic-v2",
    type: "energy",
    parent: "MV-02",
    coords: [73.0000, 0.5333],
    name: { de: "FENAKA Zentralkraftwerk Thinadhoo", hu: "FENAKA Thinadhoo Központi Erőmű", ro: "Centrala Electrică FENAKA Thinadhoo", en: "FENAKA Central Power Station Thinadhoo" },
    description: { de: "Das Hauptkraftwerk für das Gaafu Dhaalu Atoll, das von der staatlichen Versorgungsgesellschaft FENAKA betrieben wird und die wirtschaftliche Entwicklung antreibt.", hu: "A Gaafu Dhaalu atoll fő erőműve, amelyet a FENAKA állami közműszolgáltató üzemeltet, és a gazdasági fejlődést mozdítja elő.", ro: "Principala centrală electrică pentru atolul Gaafu Dhaalu, operată de compania publică de utilități FENAKA, care stimulează dezvoltarea economică.", en: "The main power plant for the Gaafu Dhaalu Atoll, operated by the state utility company FENAKA, driving economic development." },
    facts: {
      de: ["Wurde kürzlich mit neuen Generatoren modernisiert.", "Versorgt über zehntausend Einwohner."],
      hu: ["Nemrégiben új generátorokkal modernizálták.", "Több mint tízezer lakost lát el árammal."],
      ro: ["Recent modernizată cu noi generatoare.", "Furnizează energie pentru peste zece mii de locuitori."],
      en: ["Recently modernized with new generators.", "Provides power for over ten thousand residents."]
    }, image: "/poi-images/fenaka-thinadhoo-power-economic-v2.webp"},
  {
    id: "ensis-fisheries-processing-economic-v2",
    type: "industry",
    parent: "MV-MLE",
    coords: [73.5355, 4.2120],
    name: { de: "Ensis Fischverarbeitungsfabrik", hu: "Ensis Halfeldolgozó Gyár", ro: "Fabrica de Procesare a Peștelui Ensis", en: "Ensis Fisheries Processing Plant" },
    description: { de: "Eine große, hochmoderne Verarbeitungsanlage in Hulhumalé, die frischen Thunfisch für internationale Märkte verpackt und verarbeitet.", hu: "Egy nagy, ultramodern feldolgozóüzem Hulhumalén, amely friss tonhalat csomagol és dolgoz fel a nemzetközi piacok számára.", ro: "O fabrică de procesare mare și ultramodernă din Hulhumalé, care ambalează și procesează ton proaspăt pentru piețele internaționale.", en: "A large, ultra-modern processing plant in Hulhumalé, packaging and processing fresh tuna for international markets." },
    facts: {
      de: ["Einer der größten Fisch-Exporteure des Landes.", "Besitzt eigene Flotte von Kühlfahrzeugen."],
      hu: ["Az ország egyik legnagyobb halexportőre.", "Saját hűtőkocsi-flottával rendelkezik."],
      ro: ["Unul dintre cei mai mari exportatori de pește din țară.", "Are propria flotă de vehicule frigorifice."],
      en: ["One of the country's largest fish exporters.", "Owns its own fleet of refrigerated vehicles."]
    }, image: "/poi-images/ensis-fisheries-processing-economic-v2.webp"},
  {
    id: "kulhudhuffushi-regional-port-economic-v2",
    type: "port",
    parent: "MV-02",
    coords: [73.0667, 6.6222],
    name: { de: "Regionalhafen Kulhudhuffushi", hu: "Kulhudhuffushi Regionális Kikötő", ro: "Portul Regional Kulhudhuffushi", en: "Kulhudhuffushi Regional Port" },
    description: { de: "Der wichtigste Seehafen im Norden der Malediven, der als primäres Verteilzentrum für die nördlichen Atolle fungiert.", hu: "A Maldív-szigetek északi részének legfontosabb tengeri kikötője, amely az északi atollok elsődleges elosztóközpontjaként működik.", ro: "Cel mai important port maritim din nordul Maldivelor, acționând ca centru primar de distribuție pentru atolii din nord.", en: "The most important seaport in the northern Maldives, acting as the primary distribution center for the northern atolls." },
    facts: {
      de: ["Reduziert die Transportkosten für den Norden.", "Wird kontinuierlich ausgebaut."],
      hu: ["Csökkenti az északi területek szállítási költségeit.", "Folyamatosan bővítik a kapacitását."],
      ro: ["Reduce costurile de transport pentru nord.", "Capacitatea sa este extinsă continuu."],
      en: ["Reduces transportation costs for the north.", "Its capacity is continuously being expanded."]
    }, image: "/poi-images/kulhudhuffushi-regional-port-economic-v2.webp"},
  {
    id: "thilafushi-boat-building-economic-v2",
    type: "industry",
    parent: "MV-MLE",
    coords: [73.4380, 4.1850],
    name: { de: "Thilafushi Bootswerft", hu: "Thilafushi Hajóépítő Üzem", ro: "Șantierul Naval Thilafushi", en: "Thilafushi Boat Building Yard" },
    description: { de: "Ein bedeutendes industrielles Gebiet auf der Insel Thilafushi, spezialisiert auf den Bau traditioneller Dhoni-Boote und moderner Schiffe aus Fiberglas.", hu: "Jelentős ipari terület Thilafushi szigetén, amely hagyományos Dhoni hajók és modern üvegszálas hajók építésére specializálódott.", ro: "O zonă industrială semnificativă pe insula Thilafushi, specializată în construcția de bărci tradiționale Dhoni și nave moderne din fibră de sticlă.", en: "A significant industrial area on the island of Thilafushi, specializing in the construction of traditional Dhoni boats and modern fiberglass vessels." },
    facts: {
      de: ["Verbindet traditionelles Handwerk mit modernen Materialien.", "Wichtigster Arbeitgeber in der Schiffsbaubranche."],
      hu: ["Ötvözi a hagyományos kézművességet a modern anyagokkal.", "A hajóépítő iparág legfontosabb munkaadója."],
      ro: ["Combină meșteșugul tradițional cu materialele moderne.", "Cel mai important angajator din industria construcțiilor navale."],
      en: ["Combines traditional craftsmanship with modern materials.", "Most important employer in the shipbuilding industry."]
    }
  }
];
