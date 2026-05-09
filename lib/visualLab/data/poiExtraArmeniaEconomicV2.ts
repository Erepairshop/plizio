import type { POI } from "./poi";

export const poiExtraArmeniaEconomicV2: POI[] = [
  {
    id: "zangezur-copper-molybdenum-combine-economic-v2",
    type: "mine",
    parent: "AM-SU",
    coords: [46.1558, 39.1517],
    name: { de: "Kupfer-Molybdän-Kombinat Sangesur", hu: "Zangezur Réz-Molibdén Kombinát", ro: "Combinatul de Cupru și Molibden Zangezur", en: "Zangezur Copper Molybdenum Combine" },
    description: { de: "Das Kupfer-Molybdän-Kombinat Sangesur ist das größte Bergbauunternehmen in Armenien und befindet sich in der Stadt Kadscharan. Es spielt eine zentrale Rolle für die Wirtschaft des Landes.", hu: "A Zangezur Réz-Molibdén Kombinát Örményország legnagyobb bányászati vállalata, amely Kadszaran városában található. Kulcsfontosságú szerepet játszik az ország gazdaságában.", ro: "Combinatul de Cupru și Molibden Zangezur este cea mai mare companie minieră din Armenia, situată în orașul Kajaran. Joacă un rol central în economia țării.", en: "The Zangezur Copper Molybdenum Combine is the largest mining company in Armenia, located in the town of Kajaran. It plays a central role in the country's economy." },
    facts: {
      de: ["Größtes Bergbauunternehmen in Armenien.", "Befindet sich in der Stadt Kadscharan.", "Produziert Kupfer- und Molybdänkonzentrate.", "Wichtiger Beitrag zur nationalen Wirtschaft."],
      hu: ["Örményország legnagyobb bányászati vállalata.", "Kadszaran városában található.", "Réz- és molibdénkoncentrátumokat állít elő.", "Jelentősen hozzájárul a nemzetgazdasághoz."],
      ro: ["Cea mai mare companie minieră din Armenia.", "Situată în orașul Kajaran.", "Produce concentrate de cupru și molibden.", "Contribuitor major la economia națională."],
      en: ["Largest mining company in Armenia.", "Located in the town of Kajaran.", "Produces copper and molybdenum concentrates.", "Major contributor to the national economy."]
    }
  },
  {
    id: "metsamor-nuclear-power-plant-economic-v2",
    type: "energy",
    parent: "AM-AV",
    coords: [44.1436, 40.1786],
    name: { de: "Kernkraftwerk Mezamor", hu: "Mecamori atomerőmű", ro: "Centrala Nucleară Metsamor", en: "Metsamor Nuclear Power Plant" },
    description: { de: "Das Kernkraftwerk Mezamor ist das einzige seiner Art im Südkaukasus und liefert einen erheblichen Teil des armenischen Stroms. Es wurde in den 1970er Jahren während der Sowjetzeit erbaut.", hu: "A Mecamori atomerőmű az egyetlen ilyen létesítmény a Dél-Kaukázusban, és az örmény áramellátás jelentős részét biztosítja. Az 1970-es években, a szovjet időszakban épült.", ro: "Centrala Nucleară Metsamor este singura de acest fel din Caucazul de Sud și furnizează o parte semnificativă din electricitatea Armeniei. A fost construită în anii 1970.", en: "The Metsamor Nuclear Power Plant is the only one of its kind in the South Caucasus and provides a significant portion of Armenia's electricity. It was built in the 1970s." },
    facts: {
      de: ["Einziges Kernkraftwerk im Südkaukasus.", "Liefert einen großen Teil des Stroms in Armenien.", "Erbaut während der Sowjetära in den 1970er Jahren.", "Befindet sich in der Nähe der Stadt Mezamor."],
      hu: ["Az egyetlen atomerőmű a Dél-Kaukázusban.", "Az örmény áram jelentős részét biztosítja.", "A szovjet érában, az 1970-es években épült.", "Mecamor városának közelében található."],
      ro: ["Singura centrală nucleară din Caucazul de Sud.", "Furnizează o mare parte din energia Armeniei.", "Construită în perioada sovietică în anii 1970.", "Situată în apropierea orașului Metsamor."],
      en: ["Only nuclear power plant in the South Caucasus.", "Provides a large part of Armenia's electricity.", "Built during the Soviet era in the 1970s.", "Located near the city of Metsamor."]
    }
  },
  {
    id: "sevan-hrazdan-cascade-economic-v2",
    type: "energy",
    parent: "AM-KT",
    coords: [44.9733, 40.4572],
    name: { de: "Sewan-Hrasdan-Kaskade", hu: "Szeván-Hrazdan vízerőmű-rendszer", ro: "Cascada Sevan-Hrazdan", en: "Sevan-Hrazdan Cascade" },
    description: { de: "Die Sewan-Hrasdan-Kaskade ist ein Komplex aus mehreren Wasserkraftwerken am Fluss Hrasdan, die das Wasser des Sewansees nutzen. Sie ist entscheidend für die erneuerbare Energieerzeugung des Landes.", hu: "A Szeván-Hrazdan vízerőmű-rendszer a Hrazdan folyón található erőművek komplexuma, amely a Szeván-tó vizét használja. Döntő fontosságú az ország megújuló energiaellátásában.", ro: "Cascada Sevan-Hrazdan este un complex de hidrocentrale pe râul Hrazdan, care utilizează apa din Lacul Sevan. Este crucială pentru producția de energie regenerabilă a țării.", en: "The Sevan-Hrazdan Cascade is a complex of hydroelectric power plants on the Hrazdan River, utilizing water from Lake Sevan. It is crucial for the country's renewable energy production." },
    facts: {
      de: ["Komplex von Wasserkraftwerken am Fluss Hrasdan.", "Nutzt das Wasser aus dem Sewansee.", "Umfasst Anlagen wie Sewan, Atarbekjan und Gjumusch.", "Entscheidend für die erneuerbare Energieerzeugung."],
      hu: ["Vízerőművek komplexuma a Hrazdan folyón.", "A Szeván-tó vizét hasznosítja.", "Többek között a Szeván, Atarbekjan és Gjumus erőműveket foglalja magába.", "Kulcsfontosságú a megújuló energiatermelésben."],
      ro: ["Complex de hidrocentrale pe râul Hrazdan.", "Utilizează apa din Lacul Sevan.", "Include centrale precum Sevan, Atarbekyan și Gyumush.", "Crucială pentru producția de energie regenerabilă."],
      en: ["Complex of hydroelectric power plants on the Hrazdan River.", "Utilizes water from Lake Sevan.", "Includes plants like Sevan, Atarbekyan, and Gyumush.", "Crucial for renewable energy production."]
    }
  },
  {
    id: "yerevan-thermal-power-plant-economic-v2",
    type: "energy",
    parent: "AM-ER",
    coords: [44.5028, 40.0883],
    name: { de: "Wärmekraftwerk Eriwan", hu: "Jereváni hőerőmű", ro: "Centrala Termoelectrică Erevan", en: "Yerevan Thermal Power Plant" },
    description: { de: "Das Wärmekraftwerk Eriwan ist ein großes gasbefeuertes Kraftwerk in der Hauptstadt Armeniens. Es wurde 2010 mit einem neuen Gas-und-Dampf-Kombikraftwerksblock modernisiert und liefert Strom sowie Fernwärme.", hu: "A Jereváni hőerőmű egy nagy gáztüzelésű erőmű Örményország fővárosában. 2010-ben egy új kombinált ciklusú blokkal modernizálták, amely áramot és távhőt is szolgáltat.", ro: "Centrala Termoelectrică Erevan este o mare centrală pe gaz din capitala Armeniei. A fost modernizată cu o nouă unitate cu ciclu combinat în 2010 și furnizează electricitate și termoficare.", en: "The Yerevan Thermal Power Plant is a large gas-fired power station in the capital of Armenia. It was modernized with a new combined-cycle unit in 2010 and provides both electricity and district heating." },
    facts: {
      de: ["Großes gasbefeuertes Kraftwerk in der Hauptstadt.", "2010 mit einem neuen Kombiblock modernisiert.", "Liefert sowohl Strom als auch Fernwärme.", "Befindet sich im südlichen Industriegebiet von Eriwan."],
      hu: ["Nagy gáztüzelésű erőmű a fővárosban.", "2010-ben egy új kombinált blokkal modernizálták.", "Áramot és távhőt egyaránt szolgáltat.", "Jereván déli ipari negyedében található."],
      ro: ["Mare centrală pe gaz în capitală.", "Modernizată cu o nouă unitate combinată în 2010.", "Furnizează atât electricitate, cât și termoficare.", "Situată în districtul industrial de sud din Erevan."],
      en: ["Large gas-fired power plant in the capital.", "Modernized with a new combined-cycle unit in 2010.", "Provides both electricity and district heating.", "Located in the southern industrial district of Yerevan."]
    }
  },
  {
    id: "hrazdan-thermal-power-plant-economic-v2",
    type: "energy",
    parent: "AM-KT",
    coords: [44.7558, 40.5694],
    name: { de: "Wärmekraftwerk Hrasdan", hu: "Hrazdani hőerőmű", ro: "Centrala Termoelectrică Hrazdan", en: "Hrazdan Thermal Power Plant" },
    description: { de: "Das Wärmekraftwerk Hrasdan gehört zu den größten Kraftwerken in Armenien und nutzt hauptsächlich Erdgas als Brennstoff. Es spielt eine wichtige Rolle bei der Stabilisierung des nationalen Stromnetzes.", hu: "A Hrazdani hőerőmű Örményország egyik legnagyobb erőműve, amely elsősorban földgázt használ tüzelőanyagként. Fontos szerepet játszik az országos villamosenergia-hálózat stabilizálásában.", ro: "Centrala Termoelectrică Hrazdan este una dintre cele mai mari centrale din Armenia și utilizează în principal gaze naturale ca combustibil. Joacă un rol important în stabilizarea rețelei naționale.", en: "The Hrazdan Thermal Power Plant is one of the largest power plants in Armenia and primarily uses natural gas as fuel. It plays an important role in balancing the national power grid." },
    facts: {
      de: ["Eines der größten Kraftwerke des Landes.", "Befindet sich in der Provinz Kotajk.", "Nutzt Erdgas als primären Brennstoff.", "Spielt eine wichtige Rolle beim Ausgleich des Stromnetzes."],
      hu: ["Az ország egyik legnagyobb erőműve.", "Kotajk tartományban található.", "Elsődleges tüzelőanyaga a földgáz.", "Fontos szerepe van az energiahálózat egyensúlyozásában."],
      ro: ["Una dintre cele mai mari centrale electrice din țară.", "Situată în provincia Kotayk.", "Utilizează gaze naturale ca combustibil principal.", "Joacă un rol vital în echilibrarea rețelei de energie."],
      en: ["One of the largest power plants in the country.", "Located in the Kotayk Province.", "Uses natural gas as its primary fuel.", "Plays a vital role in balancing the energy grid."]
    }
  },
  {
    id: "amulsar-gold-mine-economic-v2",
    type: "mine",
    parent: "AM-VD",
    coords: [45.7178, 39.7214],
    name: { de: "Amulsar-Goldmine", hu: "Amulszar aranybánya", ro: "Mina de aur Amulsar", en: "Amulsar Gold Mine" },
    description: { de: "Die Amulsar-Goldmine ist ein großes Goldbergbauprojekt in der Provinz Wajoz Dsor. Ihre Erschließung war von bedeutenden ökologischen Debatten und lokalen Protesten begleitet.", hu: "Az Amulszar aranybánya egy jelentős bányászati projekt Vajoc Dzor tartományban. Fejlesztését komoly környezetvédelmi viták és helyi tüntetések kísérték.", ro: "Mina de aur Amulsar este un mare proiect de extracție a aurului în provincia Vayots Dzor. Dezvoltarea sa a fost însoțită de dezbateri ecologice semnificative și proteste locale.", en: "The Amulsar Gold Mine is a large gold mining project in the Vayots Dzor Province. Its development has been accompanied by significant environmental debates and local protests." },
    facts: {
      de: ["Großes Goldvorkommen in der Provinz Wajoz Dsor.", "Entwickelt von Lydian International.", "Gegenstand von bedeutenden Umweltdebatten und Protesten.", "Voraussichtlich eine der größten Goldminen des Landes."],
      hu: ["Nagy aranylelőhely Vajoc Dzor tartományban.", "A Lydian International fejlesztette ki.", "Jelentős környezetvédelmi viták és tüntetések tárgya.", "Várhatóan az ország egyik legnagyobb aranybányája lesz."],
      ro: ["Mare depozit de aur în provincia Vayots Dzor.", "Dezvoltat de Lydian International.", "Subiectul unor dezbateri și proteste de mediu semnificative.", "De așteptat să fie una dintre cele mai mari mine de aur din țară."],
      en: ["Large gold deposit in the Vayots Dzor Province.", "Developed by Lydian International.", "Subject to significant environmental debates and protests.", "Expected to be one of the largest gold producing sites in the country."]
    }
  },
  {
    id: "sotk-gold-mine-economic-v2",
    type: "mine",
    parent: "AM-GR",
    coords: [45.9753, 40.2392],
    name: { de: "Sotk-Goldmine", hu: "Szotk aranybánya", ro: "Mina de aur Sotk", en: "Sotk Gold Mine" },
    description: { de: "Die Sotk-Goldmine in der Provinz Gegharkunik ist eine der wichtigsten Goldminen Armeniens. Das abgebaute Erz wird traditionell zur Verarbeitung in die Fabrik nach Ararat transportiert.", hu: "A Gegarkunik tartományban található Szotk aranybánya Örményország egyik legfontosabb aranybányája. A kitermelt ércet hagyományosan az araráti feldolgozóüzembe szállítják.", ro: "Mina de aur Sotk, situată în provincia Gegharkunik, este una dintre cele mai importante mine de aur din Armenia. Minereul este transportat în mod tradițional la fabrica din Ararat pentru procesare.", en: "The Sotk Gold Mine, located in the Gegharkunik Province, is one of the most important gold mines in Armenia. The mined ore is traditionally transported to the Ararat factory for processing." },
    facts: {
      de: ["Befindet sich in der Provinz Gegharkunik nahe der Grenze.", "Eine der wichtigsten Goldminen in Armenien.", "Das Erz wird zur Verarbeitungsanlage in Ararat transportiert.", "Wird seit der Sowjetzeit historisch betrieben."],
      hu: ["Gegarkunik tartományban, a határ közelében található.", "Örményország egyik legfontosabb aranybányája.", "Az ércet az araráti feldolgozóüzembe szállítják.", "A szovjet időszak óta folyamatosan működik."],
      ro: ["Situată în provincia Gegharkunik, aproape de graniță.", "Una dintre cele mai importante mine de aur din Armenia.", "Minereul este transportat la uzina de procesare din Ararat.", "Operată istoric din perioada sovietică."],
      en: ["Located in the Gegharkunik Province near the border.", "One of the most important gold mines in Armenia.", "Ore is transported to the Ararat processing plant.", "Historically operated since the Soviet period."]
    }
  },
  {
    id: "alaverdi-copper-smelter-economic-v2",
    type: "industry",
    parent: "AM-LO",
    coords: [44.6567, 41.1042],
    name: { de: "Kupferhütte Alawerdi", hu: "Alaverdi Rézkohó", ro: "Topitoria de cupru Alaverdi", en: "Alaverdi Copper Smelter" },
    description: { de: "Die Kupferhütte Alawerdi in der Provinz Lori ist ein historisches metallurgisches Werk, dessen Ursprünge bis ins 18. Jahrhundert zurückreichen. Sie war maßgeblich an der Industrialisierung der Region beteiligt.", hu: "A Lori tartományban található Alaverdi Rézkohó egy történelmi kohászati üzem, amelynek eredete a 18. századra nyúlik vissza. Meghatározó szerepet játszott a régió iparosításában.", ro: "Topitoria de cupru Alaverdi din provincia Lori este o uzină metalurgică istorică, cu origini care datează din secolul al XVIII-lea. A jucat un rol major în industrializarea regiunii.", en: "The Alaverdi Copper Smelter in the Lori Province is a historic metallurgical plant with origins dating back to the 18th century. It played a major role in the industrialization of the region." },
    facts: {
      de: ["Historisches metallurgisches Werk in der Provinz Lori.", "Die Aktivitäten gehen bis ins 18. Jahrhundert zurück.", "Spielte eine Hauptrolle bei der Industrialisierung der Region.", "Steht derzeit vor betrieblichen und ökologischen Herausforderungen."],
      hu: ["Történelmi kohászati üzem Lori tartományban.", "Működése a 18. századra nyúlik vissza.", "Főszerepet játszott a régió iparosításában.", "Jelenleg működési és környezeti kihívásokkal küzd."],
      ro: ["Uzină metalurgică istorică în provincia Lori.", "Operațiunile datează din secolul al XVIII-lea.", "A jucat un rol major în industrializarea regiunii.", "În prezent se confruntă cu provocări operaționale și de mediu."],
      en: ["Historic metallurgical plant in the Lori Province.", "Operations date back to the 18th century.", "Played a major role in the industrialization of the region.", "Currently facing operational and environmental challenges."]
    }
  },
  {
    id: "ararat-cement-factory-economic-v2",
    type: "industry",
    parent: "AM-AR",
    coords: [44.7211, 39.8142],
    name: { de: "Zementfabrik Ararat", hu: "Ararát Cementgyár", ro: "Fabrica de Ciment Ararat", en: "Ararat Cement Factory" },
    description: { de: "Die Zementfabrik Ararat ist eine große Produktionsanlage, die sowohl den heimischen Markt als auch den Export mit Baumaterialien versorgt. Sie ist von großer Bedeutung für die Bauindustrie des Landes.", hu: "Az Ararát Cementgyár egy nagy termelési létesítmény, amely mind a hazai piacot, mind az exportot ellátja építőanyaggal. Hatalmas jelentőséggel bír az ország építőipara számára.", ro: "Fabrica de Ciment Ararat este o mare unitate de producție care furnizează materiale de construcții pentru piața internă și pentru export. Este de mare importanță pentru industria construcțiilor din țară.", en: "The Ararat Cement Factory is a large production facility that supplies construction materials to both the domestic market and for export. It is of great importance to the country's construction industry." },
    facts: {
      de: ["Großflächige Zementproduktionsanlage in der Provinz Ararat.", "Liefert Baumaterialien für Inlands- und Exportmärkte.", "Im 20. Jahrhundert erbaut, um große Bauprojekte zu unterstützen.", "Vital für die lokale Bauindustrie."],
      hu: ["Nagyüzemi cementgyár Ararát tartományban.", "Építőanyagokat szállít a hazai és exportpiacokra.", "A 20. században épült a hatalmas építkezési projektek támogatására.", "Létfontosságú a helyi építőipar számára."],
      ro: ["Unitate de producție de ciment la scară largă în provincia Ararat.", "Furnizează materiale de construcții pentru piețele interne și de export.", "Construită în secolul XX pentru a sprijini proiecte masive de construcții.", "Vitală pentru industria locală a construcțiilor."],
      en: ["Large-scale cement production facility in Ararat Province.", "Supplies construction materials for domestic and export markets.", "Built in the 20th century to support massive construction projects.", "Vital for the local building industry."]
    }
  },
  {
    id: "yerevan-brandy-company-economic-v2",
    type: "industry",
    parent: "AM-ER",
    coords: [44.4975, 40.1758],
    name: { de: "Weinbrandfabrik Eriwan", hu: "Jereváni Konyakgyár", ro: "Fabrica de Coniac Erevan", en: "Yerevan Brandy Company" },
    description: { de: "Die Weinbrandfabrik Eriwan ist der berühmte Hersteller des armenischen Cognacs ArArAt und wurde 1887 gegründet. Sie gehört zu den führenden Exporteuren alkoholischer Getränke in Armenien.", hu: "A Jereváni Konyakgyár a híres ArArAt örmény konyak gyártója, amelyet 1887-ben alapítottak. Örményország egyik vezető alkoholos ital-exportőre.", ro: "Fabrica de Coniac Erevan este celebrul producător al coniacului armean ArArAt și a fost fondată în 1887. Este unul dintre principalii exportatori de băuturi alcoolice din Armenia.", en: "The Yerevan Brandy Company is the famous producer of the Armenian cognac ArArAt and was founded in 1887. It is one of the leading exporters of alcoholic beverages in Armenia." },
    facts: {
      de: ["Berühmter Hersteller von armenischem Cognac, insbesondere der Marke ArArAt.", "Gegründet 1887 von Nerses Tairjan.", "Einer der führenden Exporteure alkoholischer Getränke in Armenien.", "Das Fabrikgebäude ist ein Wahrzeichen in Eriwan."],
      hu: ["Híres örmény konyak, különösen az ArArAt márka gyártója.", "Nerszesz Tairjan alapította 1887-ben.", "Örményország egyik vezető alkoholosital-exportőre.", "A gyárépület Jereván egyik nevezetessége."],
      ro: ["Producător celebru de coniac armean, în special marca ArArAt.", "Fondată în 1887 de Nerses Tairyan.", "Unul dintre principalii exportatori de băuturi alcoolice din Armenia.", "Clădirea fabricii este un punct de reper în Erevan."],
      en: ["Famous producer of Armenian cognac, specifically the ArArAt brand.", "Founded in 1887 by Nerses Tairyan.", "One of the leading exporters of alcoholic beverages in Armenia.", "The factory building is a landmark in Yerevan."]
    }
  },
  {
    id: "agarak-copper-molybdenum-mine-economic-v2",
    type: "mine",
    parent: "AM-SU",
    coords: [46.1953, 38.8789],
    name: { de: "Kupfer-Molybdän-Kombinat Agarak", hu: "Agarak Réz-Molibdén Kombinát", ro: "Combinatul de Cupru și Molibden Agarak", en: "Agarak Copper-Molybdenum Mine Complex" },
    description: { de: "Das Kupfer-Molybdän-Kombinat Agarak befindet sich in der Provinz Sjunik nahe der iranischen Grenze. Es ist ein bedeutender Arbeitgeber im Süden Armeniens und baut wichtige Erze ab.", hu: "Az Agarak Réz-Molibdén Kombinát Sjunik tartományban, az iráni határ közelében található. Jelentős munkáltató Dél-Örményországban, és fontos érceket bányász.", ro: "Combinatul de Cupru și Molibden Agarak este situat în provincia Syunik, aproape de granița cu Iranul. Este un angajator important în sudul Armeniei și extrage minereuri importante.", en: "The Agarak Copper-Molybdenum Mine Complex is located in the Syunik Province near the Iranian border. It is a significant employer in southern Armenia and mines important ores." },
    facts: {
      de: ["Befindet sich in der Provinz Sjunik, nahe der iranischen Grenze.", "Baut Kupfer- und Molybdänerze ab und verarbeitet diese.", "Ein wichtiger Arbeitgeber in der südlichen Region Armeniens.", "Verfügt über einen Tagebau und eine Flotationsanlage."],
      hu: ["Sjunik tartományban, az iráni határ közelében található.", "Réz- és molibdénérceket bányász és dolgoz fel.", "Fontos munkáltató Örményország déli régiójában.", "Nyíltvízi bányával és flotációs üzemmel rendelkezik."],
      ro: ["Situat în provincia Syunik, aproape de granița cu Iranul.", "Extrage și procesează minereuri de cupru și molibden.", "Un angajator important în regiunea de sud a Armeniei.", "Dispune de o mină în carieră deschisă și o instalație de flotație."],
      en: ["Situated in the Syunik Province, near the Iranian border.", "Extracts and processes copper and molybdenum ores.", "An important employer in the southern region of Armenia.", "Features an open-pit mine and a flotation plant."]
    }
  },
  {
    id: "hrazdan-cement-factory-economic-v2",
    type: "industry",
    parent: "AM-KT",
    coords: [44.7511, 40.5283],
    name: { de: "Zementfabrik Hrasdan", hu: "Hrazdani Cementgyár", ro: "Fabrica de Ciment Hrazdan", en: "Hrazdan Cement Factory" },
    description: { de: "Die Zementfabrik Hrasdan in der Provinz Kotajk wurde in den 1970er Jahren gegründet, um den wachsenden Baubedarf zu decken. Sie nutzt lokale Kalksteinvorkommen für die Produktion.", hu: "A Kotajk tartományban található Hrazdani Cementgyárat az 1970-es években alapították a növekvő építkezési igények kielégítésére. A termeléshez helyi mészkőlelőhelyeket használ.", ro: "Fabrica de Ciment Hrazdan din provincia Kotayk a fost înființată în anii 1970 pentru a răspunde nevoilor tot mai mari de construcții. Folosește zăcăminte locale de calcar pentru producție.", en: "The Hrazdan Cement Factory in the Kotayk Province was established in the 1970s to meet growing construction needs. It uses local limestone deposits for production." },
    facts: {
      de: ["Ein weiterer großer Zementproduzent in Hrasdan.", "Gegründet 1970, um den wachsenden Baubedarf zu decken.", "Nutzt lokale Kalksteinvorkommen.", "Spielt weiterhin eine Schlüsselrolle in der Region Kotajk."],
      hu: ["Egy másik jelentős cementgyártó Hrazdanban.", "1970-ben hozták létre a növekvő építőipari igények kielégítésére.", "Helyi mészkőlelőhelyeket hasznosít.", "Továbbra is kulcsszereplő a Kotajk régióban."],
      ro: ["Un alt producător major de ciment, situat în Hrazdan.", "Înființată în 1970 pentru a răspunde nevoilor crescânde de construcții.", "Utilizează zăcăminte locale de calcar.", "Continuă să fie un jucător industrial cheie în regiunea Kotayk."],
      en: ["Another major cement producer, located in Hrazdan.", "Established in 1970 to meet growing construction needs.", "Utilizes local limestone deposits.", "Continues to be a key industrial player in the Kotayk region."]
    }
  },
  {
    id: "zvartnots-cargo-terminal-economic-v2",
    type: "trade-hub",
    parent: "AM-AV",
    coords: [44.3986, 40.1472],
    name: { de: "Frachtterminal Swartnoz", hu: "Zvartnotsz teherterminál", ro: "Terminalul Cargo Zvartnots", en: "Zvartnots Cargo Terminal" },
    description: { de: "Das Frachtterminal des internationalen Flughafens Swartnoz ist der wichtigste Luftfrachtknotenpunkt Armeniens. Es ist von entscheidender Bedeutung für den globalen Handel des Binnenlandes.", hu: "A Zvartnotsz nemzetközi repülőtér teherterminálja Örményország legfontosabb légi árufuvarozási központja. Döntő jelentőségű a tengerparttal nem rendelkező ország globális kereskedelme szempontjából.", ro: "Terminalul Cargo al Aeroportului Internațional Zvartnots este principalul hub de transport aerian al Armeniei. Este crucial pentru comerțul global al acestei țări fără ieșire la mare.", en: "The cargo terminal of Zvartnots International Airport is the main air freight hub of Armenia. It is crucial for the global trade of the landlocked country." },
    facts: {
      de: ["Das wichtigste Luftfrachtdrehkreuz für Armenien.", "Bewickelt den internationalen Import und Export von Waren.", "Verfügt über moderne Logistik- und Lagereinrichtungen.", "Entscheidend für die globalen Handelsverbindungen Armeniens."],
      hu: ["Örményország fő légi teherszállítási csomópontja.", "A nemzetközi áruimportot és -exportot bonyolítja le.", "Modern logisztikai és raktározási létesítményekkel rendelkezik.", "Kulcsfontosságú az ország globális kereskedelmi kapcsolataihoz."],
      ro: ["Principalul hub de transport aerian pentru Armenia.", "Gestionează importul și exportul internațional de mărfuri.", "Dispune de facilități moderne de logistică și depozitare.", "Crucial pentru conexiunile comerciale globale ale Armeniei."],
      en: ["The main air freight hub for Armenia.", "Handles international import and export of goods.", "Features modern logistics and warehousing facilities.", "Crucial for landlocked Armenia's global trade connections."]
    }
  },
  {
    id: "meghri-free-economic-zone-economic-v2",
    type: "trade-hub",
    parent: "AM-SU",
    coords: [46.2425, 38.9022],
    name: { de: "Freie Wirtschaftszone Meghri", hu: "Meghri Szabadgazdasági Övezet", ro: "Zona Economică Liberă Meghri", en: "Meghri Free Economic Zone" },
    description: { de: "Die Freie Wirtschaftszone Meghri an der Grenze zum Iran wurde gegründet, um Handel und wirtschaftliche Zusammenarbeit zu fördern. Sie bietet steuerliche Anreize für Hersteller und Unternehmen.", hu: "Az iráni határon fekvő Meghri Szabadgazdasági Övezetet a kereskedelem és a gazdasági együttműködés fellendítése céljából hozták létre. Adókedvezményeket kínál a gyártók és a vállalatok számára.", ro: "Zona Economică Liberă Meghri, la granița cu Iranul, a fost înființată pentru a promova comerțul și cooperarea economică. Oferă stimulente fiscale pentru producători și companii.", en: "The Meghri Free Economic Zone, on the border with Iran, was established to promote trade and economic cooperation. It offers tax incentives for manufacturers and businesses." },
    facts: {
      de: ["Befindet sich an der Grenze zum Iran.", "Gegründet, um Handel und wirtschaftliche Zusammenarbeit zu stärken.", "Bietet steuerliche Anreize für Unternehmen und Hersteller.", "Ein strategisches Tor für den regionalen Transit."],
      hu: ["Az iráni határon található.", "A szomszédos országokkal való kereskedelem fellendítésére jött létre.", "Adókedvezményeket kínál a vállalkozásoknak és a gyártóknak.", "Stratégiai átjáró a regionális tranzit számára."],
      ro: ["Situată la granița cu Iranul.", "Înființată pentru a stimula comerțul și cooperarea cu țările vecine.", "Oferă stimulente fiscale pentru afaceri și producători.", "O poartă strategică pentru tranzitul regional."],
      en: ["Located on the border with Iran.", "Established to boost trade and economic cooperation with neighboring countries.", "Offers tax incentives for businesses and manufacturers.", "A strategic gateway for regional transit."]
    }
  },
  {
    id: "shirak-airport-cargo-center-economic-v2",
    type: "trade-hub",
    parent: "AM-SH",
    coords: [43.8592, 40.7508],
    name: { de: "Frachtzentrum Flughafen Schirak", hu: "Sirak Repülőtér Teherközpontja", ro: "Centrul Cargo al Aeroportului Shirak", en: "Shirak Airport Cargo Center" },
    description: { de: "Das Frachtzentrum des Flughafens Schirak in Gjumri dient als sekundärer Luftfrachtknotenpunkt Armeniens. Es ist wichtig für die Abwicklung landwirtschaftlicher und industrieller Exporte aus dem Norden.", hu: "A Gjumriban található Sirak repülőtér teherközpontja Örményország másodlagos légi teherfuvarozási csomópontjaként szolgál. Fontos az északi mezőgazdasági és ipari export lebonyolításában.", ro: "Centrul Cargo al Aeroportului Shirak din Gyumri servește ca al doilea hub de transport aerian al Armeniei. Este important pentru gestionarea exporturilor agricole și industriale din nord.", en: "The Shirak Airport Cargo Center in Gyumri serves as Armenia's secondary air freight hub. It is important for handling agricultural and industrial exports from the north." },
    facts: {
      de: ["Sekundäre Luftfrachtanlage in Gjumri.", "Bedient die nördlichen Regionen Armeniens.", "Wickelt landwirtschaftliche und industrielle Exporte ab.", "Wichtig für die Dezentralisierung des Frachtverkehrs aus Eriwan."],
      hu: ["Másodlagos légi teherszállító létesítmény Gjumriban.", "Örményország északi régióit szolgálja ki.", "Mezőgazdasági és ipari exportot bonyolít le.", "Fontos a Jerevánból induló teherforgalom decentralizálásában."],
      ro: ["Facilitate secundară de transport aerian situată în Gyumri.", "Deservește regiunile nordice ale Armeniei.", "Gestionează exporturile agricole și industriale.", "Important pentru descentralizarea traficului de marfă din Erevan."],
      en: ["Secondary air cargo facility located in Gyumri.", "Serves the northern regions of Armenia.", "Handles agricultural and industrial exports.", "Important for decentralizing freight traffic from Yerevan."]
    }
  },
  {
    id: "grand-tobacco-factory-economic-v2",
    type: "industry",
    parent: "AM-ER",
    coords: [44.4939, 40.1419],
    name: { de: "Grand Tobacco Fabrik", hu: "Grand Tobacco Gyár", ro: "Fabrica Grand Tobacco", en: "Grand Tobacco Factory" },
    description: { de: "Die Grand Tobacco Fabrik in Eriwan ist einer der größten Tabakhersteller im Kaukasus. Sie produziert Zigaretten für den Inlandsmarkt und für den Export und ist ein wichtiger Steuerzahler.", hu: "A jereváni Grand Tobacco Gyár a Kaukázus egyik legnagyobb dohányipari vállalata. Cigarettákat gyárt a hazai piacra és exportra, és fontos adófizető.", ro: "Fabrica Grand Tobacco din Erevan este unul dintre cei mai mari producători de tutun din Caucaz. Produce țigări pentru piața internă și pentru export, fiind un contribuabil important.", en: "The Grand Tobacco Factory in Yerevan is one of the largest tobacco manufacturers in the Caucasus. It produces cigarettes for the domestic market and export, and is a major taxpayer." },
    facts: {
      de: ["Einer der größten Tabakhersteller im Kaukasus.", "Produziert Zigaretten für den Inlandsverbrauch und den Export.", "Teil der größeren Unternehmensgruppe Grand Holding.", "Ein bedeutender Beitragszahler zu den nationalen Steuereinnahmen."],
      hu: ["A Kaukázus egyik legnagyobb dohányipari vállalata.", "Cigarettát gyárt belföldi fogyasztásra és exportra egyaránt.", "A nagyobb Grand Holding vállalatcsoport része.", "Jelentősen hozzájárul a nemzeti adóbevételekhez."],
      ro: ["Una dintre cele mai mari companii producătoare de tutun din Caucaz.", "Produce țigări atât pentru consumul intern, cât și pentru export.", "Face parte din grupul corporativ mai mare Grand Holding.", "Un contribuabil semnificativ la veniturile fiscale naționale."],
      en: ["One of the largest tobacco manufacturing companies in the Caucasus.", "Produces cigarettes for both domestic consumption and export.", "Part of the larger Grand Holding corporate group.", "A significant contributor to national tax revenues."]
    }
  },
  {
    id: "spayka-greenhouse-complex-economic-v2",
    type: "industry",
    parent: "AM-AR",
    coords: [44.5519, 39.9547],
    name: { de: "Spayka Gewächshauskomplex", hu: "Spayka Üvegházkomplexum", ro: "Complexul de sere Spayka", en: "Spayka Greenhouse Complex" },
    description: { de: "Der Spayka Gewächshauskomplex im Ararat-Tal ist eine riesige landwirtschaftliche High-Tech-Anlage. Das Unternehmen ist einer der führenden Exporteure von frischem Gemüse und Obst aus Armenien.", hu: "Az Ararát-völgyben található Spayka Üvegházkomplexum egy hatalmas, csúcstechnológiás mezőgazdasági létesítmény. A vállalat Örményország egyik vezető friss zöldség- és gyümölcsexportőre.", ro: "Complexul de sere Spayka din Valea Ararat este o instalație agricolă uriașă de înaltă tehnologie. Compania este unul dintre principalii exportatori de legume și fructe proaspete din Armenia.", en: "The Spayka Greenhouse Complex in the Ararat valley is a massive high-tech agricultural facility. The company is one of the leading exporters of fresh vegetables and fruit from Armenia." },
    facts: {
      de: ["Massive landwirtschaftliche High-Tech-Anlage im Ararat-Tal.", "Spezialisiert auf den Anbau von Tomaten und Gurken.", "Nutzt fortschrittliche Hydrokultur- und Klimakontrolltechnologien.", "Ein führender Exporteur von Frischprodukten aus Armenien."],
      hu: ["Hatalmas csúcstechnológiás mezőgazdasági létesítmény az Ararát-völgyben.", "Paradicsom és uborka termesztésére specializálódott.", "Fejlett hidroponikus és klímaszabályozási technológiákat alkalmaz.", "Örményország friss termékeinek vezető exportőre."],
      ro: ["Facilitate agricolă masivă de înaltă tehnologie în valea Ararat.", "Specializată în cultivarea roșiilor și castraveților.", "Utilizează tehnologii avansate hidroponice și de control al climei.", "Un exportator principal de produse proaspete din Armenia."],
      en: ["Massive high-tech agricultural facility in the Ararat valley.", "Specializes in growing tomatoes, cucumbers, and other vegetables.", "Uses advanced hydroponic and climate-control technologies.", "A leading exporter of fresh produce from Armenia."]
    }
  },
  {
    id: "jermuk-mineral-water-factory-economic-v2",
    type: "industry",
    parent: "AM-VD",
    coords: [45.6706, 39.8406],
    name: { de: "Mineralwasserfabrik Dschermuk", hu: "Jermuk Ásványvízgyár", ro: "Fabrica de Apă Minerală Jermuk", en: "Jermuk Mineral Water Factory" },
    description: { de: "Die Mineralwasserfabrik Dschermuk füllt das berühmte, natürlich sprudelnde Wasser aus den Quellen von Dschermuk ab. Die Marke ist weit über die Grenzen Armeniens hinaus bekannt und beliebt.", hu: "A Jermuk Ásványvízgyár a Jermuk forrásaiból származó, híres, természetes szénsavas vizet palackozza. A márka Örményország határain túl is széles körben ismert és népszerű.", ro: "Fabrica de Apă Minerală Jermuk îmbuteliază faimoasa apă minerală naturală din izvoarele din Jermuk. Marca este cunoscută și populară cu mult dincolo de granițele Armeniei.", en: "The Jermuk Mineral Water Factory bottles the famous, naturally sparkling water from the Jermuk springs. The brand is known and popular well beyond the borders of Armenia." },
    facts: {
      de: ["Füllt das berühmte Mineralwasser aus den Dschermuk-Quellen ab.", "Die Marke ist in ganz Osteuropa und darüber hinaus anerkannt.", "Die Fabrik wurde mit europäischer Abfülltechnik modernisiert.", "Unterstützt die lokale Wirtschaft des Kurortes Dschermuk."],
      hu: ["A híres jermuki forrásokból származó ásványvizet palackozza.", "A márka széles körben elismert Kelet-Európában és azon túl is.", "A gyárat európai palackozási technológiával korszerűsítették.", "Támogatja a jermuki üdülőváros helyi gazdaságát."],
      ro: ["Îmbuteliază faimoasa apă minerală din izvoarele Jermuk.", "Marca este recunoscută pe scară largă în Europa de Est și nu numai.", "Fabrica a fost modernizată cu tehnologie europeană de îmbuteliere.", "Susține economia locală a orașului stațiune Jermuk."],
      en: ["Bottles the famous naturally sparkling water from Jermuk springs.", "The brand is widely recognized across Eastern Europe and beyond.", "The factory was modernized with European bottling technology.", "Supports the local economy of the resort town of Jermuk."]
    }
  },
  {
    id: "vorotan-cascade-economic-v2",
    type: "energy",
    parent: "AM-SU",
    coords: [46.2483, 39.3808],
    name: { de: "Worotan-Kaskade", hu: "Vorotan vízerőmű-rendszer", ro: "Cascada Vorotan", en: "Vorotan Cascade" },
    description: { de: "Die Worotan-Kaskade ist ein Komplex aus drei Wasserkraftwerken am Fluss Worotan in der Provinz Sjunik. Sie trägt maßgeblich zur Deckung des armenischen Strombedarfs aus erneuerbaren Quellen bei.", hu: "A Vorotan vízerőmű-rendszer három vízerőmű komplexuma a Vorotan folyón, Sjunik tartományban. Jelentősen hozzájárul az örményországi villamosenergia-igény megújuló forrásokból történő fedezéséhez.", ro: "Cascada Vorotan este un complex de trei hidrocentrale pe râul Vorotan, în provincia Syunik. Contribuie semnificativ la satisfacerea nevoilor de energie electrică ale Armeniei din surse regenerabile.", en: "The Vorotan Cascade is a complex of three hydroelectric power plants on the Vorotan River in the Syunik Province. It contributes significantly to meeting Armenia's electricity needs from renewable sources." },
    facts: {
      de: ["Komplex aus drei Wasserkraftwerken am Fluss Worotan.", "Umfasst die Anlagen Spandarjan, Schamb und Tatew.", "Erzeugt einen erheblichen Teil der erneuerbaren Energie Armeniens.", "Wurde von der amerikanischen Firma ContourGlobal erworben."],
      hu: ["Három vízerőműből álló komplexum a Vorotan folyón.", "Magába foglalja a Szpandarjan, a Samb és a Tatev erőműveket.", "Örményország megújuló energiájának jelentős részét termeli.", "Az amerikai ContourGlobal cég vásárolta meg."],
      ro: ["Un complex de trei hidrocentrale pe râul Vorotan.", "Include centralele Spandaryan, Shamb și Tatev.", "Generează o parte semnificativă din energia regenerabilă a Armeniei.", "Achiziționat de compania americană ContourGlobal."],
      en: ["A complex of three hydroelectric power plants on the Vorotan River.", "Includes the Spandaryan, Shamb, and Tatev plants.", "Generates a significant portion of Armenia's renewable electricity.", "Acquired by the American company ContourGlobal."]
    }
  },
  {
    id: "nairit-chemical-plant-economic-v2",
    type: "industry",
    parent: "AM-ER",
    coords: [44.4925, 40.1278],
    name: { de: "Chemiewerk Nairit", hu: "Nairit Vegyiművek", ro: "Uzina Chimică Nairit", en: "Nairit Chemical Plant" },
    description: { de: "Das Chemiewerk Nairit in Eriwan war einst ein Gigant der sowjetischen chemischen Industrie und produzierte Chloropren-Kautschuk. Heute prägt seine riesige Infrastruktur das südliche Industriegebiet der Hauptstadt.", hu: "A jereváni Nairit Vegyiművek egykor a szovjet vegyipar óriása volt, és kloroprén kaucsukot állított elő. Ma hatalmas infrastruktúrája meghatározza a főváros déli ipari övezetének arculatát.", ro: "Uzina Chimică Nairit din Erevan a fost cândva un gigant al industriei chimice sovietice, producând cauciuc cloroprenic. Astăzi, infrastructura sa masivă domină zona industrială de sud a capitalei.", en: "The Nairit Chemical Plant in Yerevan was once a giant of the Soviet chemical industry, producing chloroprene rubber. Today, its massive infrastructure dominates the southern industrial zone of the capital." },
    facts: {
      de: ["Einst ein Gigant der sowjetischen chemischen Industrie in Eriwan.", "Spezialisiert auf die Herstellung von Chloropren-Kautschuk.", "War im 21. Jahrhundert mit finanziellen Schwierigkeiten konfrontiert.", "Die massive Infrastruktur bleibt ein markantes Merkmal in Eriwan."],
      hu: ["Egykor a szovjet vegyipar óriása volt Jerevánban.", "Kloroprén kaucsuk gyártására specializálódott.", "A 21. században súlyos pénzügyi nehézségekkel küzdött.", "Hatalmas infrastruktúrája továbbra is kiemelkedő jellemzője Jerevánnak."],
      ro: ["Cândva un gigant al industriei chimice sovietice situat în Erevan.", "Specializată în producția de cauciuc cloroprenic.", "S-a confruntat cu dificultăți financiare grave în secolul XXI.", "Infrastructura sa masivă rămâne o caracteristică proeminentă a Erevanului."],
      en: ["Once a giant of the Soviet chemical industry located in Yerevan.", "Specialized in the production of chloroprene rubber.", "Faced severe financial and operational difficulties in the 21st century.", "Its massive infrastructure remains a prominent feature of Yerevan's industrial zone."]
    }
  }
];
