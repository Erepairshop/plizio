import type { POI } from "./poi";

export const poiExtraKenyaEconomicV2: POI[] = [
  {
    id: "mombasa-port-economic-v2",
    type: "port",
    parent: "KE-01",
    coords: [39.65, -4.05],
    name: {
      de: "Hafen von Mombasa",
      hu: "Mombasa kikötője",
      ro: "Portul Mombasa",
      en: "Port of Mombasa"
    },
    description: {
      de: "Der größte Seehafen Ostafrikas, ein wichtiges Handelszentrum für Kenia und die Nachbarländer.",
      hu: "Kelet-Afrika legnagyobb tengeri kikötője, fontos kereskedelmi központ Kenya és a szomszédos országok számára.",
      ro: "Cel mai mare port maritim din Africa de Est, un centru comercial vital pentru Kenya și țările vecine.",
      en: "The largest seaport in East Africa, a major trade hub for Kenya and neighboring countries."
    },
    facts: {
      de: ["Größter Hafen Ostafrikas", "Wichtiges Handelszentrum"],
      hu: ["Kelet-Afrika legnagyobb kikötője", "Fontos kereskedelmi központ"],
      ro: ["Cel mai mare port din Africa de Est", "Centru comercial important"],
      en: ["Largest port in East Africa", "Major trade center"]
    }
  },
  {
    id: "kisumu-port-economic-v2",
    type: "port",
    parent: "KE-42",
    coords: [34.75, -0.1],
    name: {
      de: "Hafen von Kisumu",
      hu: "Kisumu kikötője",
      ro: "Portul Kisumu",
      en: "Port of Kisumu"
    },
    description: {
      de: "Ein wichtiger Binnenhafen am Viktoriasee, der den Handel zwischen Kenia, Uganda und Tansania fördert.",
      hu: "Fontos szárazföldi kikötő a Viktória-tavon, amely elősegíti a kereskedelmet Kenya, Uganda és Tanzánia között.",
      ro: "Un port interior important pe Lacul Victoria, facilitând comerțul între Kenya, Uganda și Tanzania.",
      en: "An important inland port on Lake Victoria, facilitating trade between Kenya, Uganda, and Tanzania."
    },
    facts: {
      de: ["Hafen am Viktoriasee", "Fördert regionalen Handel"],
      hu: ["Viktória-tavi kikötő", "Elősegíti a regionális kereskedelmet"],
      ro: ["Port pe Lacul Victoria", "Facilitează comerțul regional"],
      en: ["Port on Lake Victoria", "Facilitates regional trade"]
    }
  },
  {
    id: "lamu-port-economic-v2",
    type: "port",
    parent: "KE-05",
    coords: [40.91, -2.25],
    name: {
      de: "Lamu-Hafen (LAPSSET)",
      hu: "Lamu kikötő (LAPSSET)",
      ro: "Portul Lamu (LAPSSET)",
      en: "Lamu Port (LAPSSET)"
    },
    description: {
      de: "Ein moderner Tiefseehafen im Bau, Teil eines massiven regionalen Infrastrukturprojekts.",
      hu: "Építés alatt álló modern mélyvízi kikötő, egy hatalmas regionális infrastrukturális projekt része.",
      ro: "Un port modern de mare adâncime în construcție, parte a unui proiect masiv de infrastructură regională.",
      en: "A modern deep-sea port under construction, part of a massive regional infrastructure project."
    },
    facts: {
      de: ["Tiefseehafenprojekt", "Teil des LAPSSET-Korridors"],
      hu: ["Mélyvízi kikötő projekt", "A LAPSSET-folyosó része"],
      ro: ["Proiect de port de mare adâncime", "Face parte din coridorul LAPSSET"],
      en: ["Deep-sea port project", "Part of the LAPSSET corridor"]
    }
  },
  {
    id: "athi-river-epz-economic-v2",
    type: "industry",
    parent: "KE-16",
    coords: [36.98, -1.45],
    name: {
      de: "Exportproduktionszone Athi River",
      hu: "Athi River Exportfeldolgozó Zóna",
      ro: "Zona de Procesare a Exportului Athi River",
      en: "Athi River Export Processing Zone"
    },
    description: {
      de: "Eine der größten Sonderwirtschaftszonen Kenias, konzentriert auf Textil- und Bekleidungsherstellung für den Export.",
      hu: "Kenya egyik legnagyobb különleges gazdasági övezete, amely exportra szánt textil- és ruházati termékek gyártására összpontosít.",
      ro: "Una dintre cele mai mari zone economice speciale din Kenya, axată pe fabricarea de textile și îmbrăcăminte pentru export.",
      en: "One of Kenya's largest special economic zones, focusing on textile and apparel manufacturing for export."
    },
    facts: {
      de: ["Sonderwirtschaftszone", "Fokus auf Textilherstellung"],
      hu: ["Különleges gazdasági övezet", "Textiliparra fókuszál"],
      ro: ["Zonă economică specială", "Axată pe producția de textile"],
      en: ["Special economic zone", "Focus on textile manufacturing"]
    }
  },
  {
    id: "magadi-soda-ash-economic-v2",
    type: "industry",
    parent: "KE-34",
    coords: [36.28, -1.9],
    name: {
      de: "Magadi Soda-Fabrik",
      hu: "Magadi Szódaüzem",
      ro: "Fabrica de Sodă Magadi",
      en: "Magadi Soda Ash Plant"
    },
    description: {
      de: "Die größte Anlage zur Gewinnung von Natriumcarbonat in Afrika, gelegen am alkalischen Magadisee.",
      hu: "Afrika legnagyobb nátrium-karbonát kitermelő üzeme, a lúgos Magadi-tó partján.",
      ro: "Cea mai mare instalație de extracție a carbonatului de sodiu din Africa, situată pe Lacul alcalin Magadi.",
      en: "The largest soda ash extraction facility in Africa, located on the alkaline Lake Magadi."
    },
    facts: {
      de: ["Größte Sodafabrik Afrikas", "Am Magadisee gelegen"],
      hu: ["Afrika legnagyobb szódaüzeme", "A Magadi-tó partján található"],
      ro: ["Cea mai mare fabrică de sodă din Africa", "Situată pe Lacul Magadi"],
      en: ["Africa's largest soda ash plant", "Located on Lake Magadi"]
    }
  },
  {
    id: "ol-karia-geothermal-economic-v2",
    type: "industry",
    parent: "KE-32",
    coords: [36.31, -0.89],
    name: {
      de: "Geothermiekraftwerk Olkaria",
      hu: "Olkaria Geotermikus Erőmű",
      ro: "Centrala Geotermală Olkaria",
      en: "Olkaria Geothermal Power Station"
    },
    description: {
      de: "Der größte Geothermie-Komplex in Afrika, der einen großen Teil des kenianischen Strombedarfs deckt.",
      hu: "Afrika legnagyobb geotermikus komplexuma, amely a kenyai áramszükséglet jelentős részét fedezi.",
      ro: "Cel mai mare complex geotermal din Africa, care acoperă o mare parte din necesarul de energie electrică al Kenyei.",
      en: "The largest geothermal complex in Africa, providing a large portion of Kenya's electricity needs."
    },
    facts: {
      de: ["Größter Geothermie-Komplex Afrikas", "Wichtige Stromquelle"],
      hu: ["Afrika legnagyobb geotermikus komplexuma", "Fontos áramforrás"],
      ro: ["Cel mai mare complex geotermal din Africa", "Sursă importantă de energie"],
      en: ["Largest geothermal complex in Africa", "Major power source"]
    }
  },
  {
    id: "thika-pineapple-cannery-economic-v2",
    type: "industry",
    parent: "KE-22",
    coords: [37.07, -1.04],
    name: {
      de: "Del Monte Ananas-Fabrik Thika",
      hu: "Del Monte Ananászüzem Thika",
      ro: "Fabrica de Ananas Del Monte Thika",
      en: "Del Monte Pineapple Cannery Thika"
    },
    description: {
      de: "Eine riesige Obstverarbeitungsanlage, die kenianische Ananasprodukte für den globalen Markt herstellt.",
      hu: "Hatalmas gyümölcsfeldolgozó üzem, amely kenyai ananásztermékeket állít elő a globális piacra.",
      ro: "O unitate masivă de procesare a fructelor, care produce produse din ananas kenyan pentru piața globală.",
      en: "A massive fruit processing facility producing Kenyan pineapple products for the global market."
    },
    facts: {
      de: ["Riesige Obstverarbeitungsanlage", "Produktion für den Weltmarkt"],
      hu: ["Hatalmas gyümölcsfeldolgozó üzem", "Termelés a világpiacra"],
      ro: ["Unitate masivă de procesare a fructelor", "Producție pentru piața globală"],
      en: ["Massive fruit processing facility", "Production for global market"]
    }
  },
  {
    id: "bamburi-cement-factory-economic-v2",
    type: "industry",
    parent: "KE-01",
    coords: [39.71, -3.98],
    name: {
      de: "Zementfabrik Bamburi",
      hu: "Bamburi Cementgyár",
      ro: "Fabrica de Ciment Bamburi",
      en: "Bamburi Cement Factory"
    },
    description: {
      de: "Eines der größten Zementwerke in Ostafrika, das Baumaterialien für die Region liefert.",
      hu: "Kelet-Afrika egyik legnagyobb cementgyára, amely építőanyagokkal látja el a régiót.",
      ro: "Una dintre cele mai mari fabrici de ciment din Africa de Est, furnizând materiale de construcție pentru regiune.",
      en: "One of the largest cement plants in East Africa, supplying building materials for the region."
    },
    facts: {
      de: ["Großes Zementwerk", "Wichtig für die Bauindustrie"],
      hu: ["Nagy cementgyár", "Fontos az építőipar számára"],
      ro: ["Fabrică mare de ciment", "Importantă pentru industria construcțiilor"],
      en: ["Large cement plant", "Important for the construction industry"]
    }
  },
  {
    id: "webuye-panpaper-economic-v2",
    type: "industry",
    parent: "KE-39",
    coords: [34.77, 0.61],
    name: {
      de: "Pan Paper Mills Webuye",
      hu: "Pan Paper Mills Webuye",
      ro: "Fabrica de Hârtie Pan Paper Webuye",
      en: "Pan Paper Mills Webuye"
    },
    description: {
      de: "Eine historische Papierfabrik in Kenia, die einen erheblichen Einfluss auf die lokale Wirtschaft in Webuye hat.",
      hu: "Történelmi papírgyár Kenyában, amely jelentős hatással van Webuye helyi gazdaságára.",
      ro: "O fabrică istorică de hârtie din Kenya, cu un impact semnificativ asupra economiei locale din Webuye.",
      en: "A historic paper manufacturing facility in Kenya, with a significant impact on the local economy in Webuye."
    },
    facts: {
      de: ["Historische Papierfabrik", "Bedeutend für lokale Wirtschaft"],
      hu: ["Történelmi papírgyár", "Jelentős a helyi gazdaság számára"],
      ro: ["Fabrică istorică de hârtie", "Importantă pentru economia locală"],
      en: ["Historic paper mill", "Significant to local economy"]
    }
  },
  {
    id: "muhoroni-sugar-factory-economic-v2",
    type: "industry",
    parent: "KE-42",
    coords: [35.19, -0.15],
    name: {
      de: "Zuckerfabrik Muhoroni",
      hu: "Muhoroni Cukorgyár",
      ro: "Fabrica de Zahăr Muhoroni",
      en: "Muhoroni Sugar Factory"
    },
    description: {
      de: "Eine wichtige Anlage zur Verarbeitung von Zuckerrohr, das von lokalen Bauern im Zucker-Gürtel Kenias angebaut wird.",
      hu: "Fontos üzem a kenyai cukorövezetben élő helyi gazdák által termesztett cukornád feldolgozására.",
      ro: "O facilitate importantă pentru procesarea trestiei de zahăr cultivate de fermierii locali din centura de zahăr a Kenyei.",
      en: "A key facility for processing sugarcane grown by local farmers in Kenya's sugar belt."
    },
    facts: {
      de: ["Wichtige Zuckerfabrik", "Zentrum der Zuckerproduktion"],
      hu: ["Fontos cukorgyár", "A cukortermelés központja"],
      ro: ["Fabrică importantă de zahăr", "Centrul producției de zahăr"],
      en: ["Key sugar factory", "Center of sugar production"]
    }
  },
  {
    id: "kenyatta-international-convention-centre-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.822, -1.288],
    name: {
      de: "Kenyatta International Convention Centre (Wirtschaftszentrum)",
      hu: "Kenyatta Nemzetközi Kongresszusi Központ (Üzleti központ)",
      ro: "Kenyatta International Convention Centre (Centru de afaceri)",
      en: "Kenyatta International Convention Centre (Business Hub)"
    },
    description: {
      de: "Ein wichtiges Geschäftszentrum und Veranstaltungsort in Nairobi, das internationale Konferenzen und Ausstellungen anzieht.",
      hu: "Fontos üzleti központ és rendezvényhelyszín Nairobiban, amely nemzetközi konferenciákat és kiállításokat vonz.",
      ro: "Un centru de afaceri și locație de evenimente majoră din Nairobi, atrăgând conferințe și expoziții internaționale.",
      en: "A major business hub and event venue in Nairobi, attracting international conferences and exhibitions."
    },
    facts: {
      de: ["Wichtiges Geschäftszentrum", "Veranstaltungsort in Nairobi"],
      hu: ["Fontos üzleti központ", "Rendezvényhelyszín Nairobiban"],
      ro: ["Centru de afaceri major", "Locație de evenimente în Nairobi"],
      en: ["Major business hub", "Event venue in Nairobi"]
    }
  },
  {
    id: "eldoret-textile-mills-economic-v2",
    type: "industry",
    parent: "KE-27",
    coords: [35.26, 0.51],
    name: {
      de: "Textilfabrik Eldoret (Rivatex)",
      hu: "Eldoret Textilgyár (Rivatex)",
      ro: "Fabrica de Textile Eldoret (Rivatex)",
      en: "Eldoret Textile Mills (Rivatex)"
    },
    description: {
      de: "Eine wiederbelebte Textilfabrik, die zur Schaffung von Arbeitsplätzen in der Textil- und Bekleidungsindustrie beiträgt.",
      hu: "Újjáélesztett textilgyár, amely hozzájárul a munkahelyteremtéshez a textil- és ruházati iparban.",
      ro: "O fabrică de textile revitalizată, contribuind la crearea de locuri de muncă în industria textilă și de îmbrăcăminte.",
      en: "A revived textile mill contributing to job creation in the textile and apparel industry."
    },
    facts: {
      de: ["Wiederbelebte Textilfabrik", "Schafft Arbeitsplätze"],
      hu: ["Újjáélesztett textilgyár", "Munkahelyeket teremt"],
      ro: ["Fabrică de textile revitalizată", "Creează locuri de muncă"],
      en: ["Revived textile mill", "Creates jobs"]
    }
  },
  {
    id: "turkana-oil-fields-economic-v2",
    type: "industry",
    parent: "KE-23",
    coords: [36.0, 2.5],
    name: {
      de: "Erdölfelder von Turkana (Ngamia)",
      hu: "Turkana Olajmezők (Ngamia)",
      ro: "Câmpurile Petroliere Turkana (Ngamia)",
      en: "Turkana Oil Fields (Ngamia)"
    },
    description: {
      de: "Die ersten kommerziellen Ölfunde in Kenia, die das Potenzial haben, die Wirtschaft des Landes zu verändern.",
      hu: "Kenya első kereskedelmi olajleletei, amelyek megváltoztathatják az ország gazdaságát.",
      ro: "Primele descoperiri comerciale de petrol din Kenya, cu potențialul de a transforma economia țării.",
      en: "Kenya's first commercial oil discoveries, with the potential to transform the country's economy."
    },
    facts: {
      de: ["Erste Ölfunde in Kenia", "Wirtschaftliches Potenzial"],
      hu: ["Kenya első olajleletei", "Gazdasági potenciál"],
      ro: ["Primele descoperiri de petrol", "Potențial economic"],
      en: ["Kenya's first oil discoveries", "Economic potential"]
    }
  },
  {
    id: "kwale-titanium-mine-economic-v2",
    type: "industry",
    parent: "KE-02",
    coords: [39.46, -4.27],
    name: {
      de: "Kwale-Titan-Mine",
      hu: "Kwale Titánbánya",
      ro: "Mina de Titan Kwale",
      en: "Kwale Titanium Mine"
    },
    description: {
      de: "Ein großes Bergbauprojekt für Mineralsande an der kenianischen Küste, das Rutil, Ilmenit und Zirkon produziert.",
      hu: "Egy nagy ásványihomok-bányászati projekt a kenyai tengerparton, amely rutilt, ilmenitet és cirkont termel.",
      ro: "Un proiect minier major de nisipuri minerale pe coasta kenyană, producând rutil, ilmenit și zircon.",
      en: "A major mineral sands mining project on the Kenyan coast, producing rutile, ilmenite, and zircon."
    },
    facts: {
      de: ["Bergbauprojekt für Mineralsande", "Produziert Rutil und Zirkon"],
      hu: ["Ásványihomok-bányászati projekt", "Rutilt és cirkont termel"],
      ro: ["Proiect minier de nisipuri minerale", "Produce rutil și zircon"],
      en: ["Mineral sands mining project", "Produces rutile and zircon"]
    }
  },
  {
    id: "machakos-epz-economic-v2",
    type: "industry",
    parent: "KE-16",
    coords: [37.26, -1.51],
    name: {
      de: "Exportproduktionszone Machakos",
      hu: "Machakos Exportfeldolgozó Zóna",
      ro: "Zona de Procesare a Exportului Machakos",
      en: "Machakos Export Processing Zone"
    },
    description: {
      de: "Ein Industriezentrum in Machakos, das ausländische Investitionen in der Produktion und Agroindustrie anzieht.",
      hu: "Egy ipari központ Machakosban, amely vonzza a külföldi befektetéseket a termelés és az agráripar területén.",
      ro: "Un centru industrial în Machakos, care atrage investiții străine în producție și agroindustrie.",
      en: "An industrial hub in Machakos attracting foreign investment in manufacturing and agro-processing."
    },
    facts: {
      de: ["Industriezentrum in Machakos", "Zieht ausländische Investitionen an"],
      hu: ["Ipari központ Machakosban", "Külföldi befektetéseket vonz"],
      ro: ["Centru industrial în Machakos", "Atrage investiții străine"],
      en: ["Industrial hub in Machakos", "Attracts foreign investment"]
    }
  },
  {
    id: "kericho-tea-factories-economic-v2",
    type: "industry",
    parent: "KE-35",
    coords: [35.28, -0.37],
    name: {
      de: "Teefabriken von Kericho",
      hu: "Kericho Teagyárak",
      ro: "Fabricile de Ceai din Kericho",
      en: "Kericho Tea Factories"
    },
    description: {
      de: "Das Zentrum der kenianischen Teeverarbeitung, wo große Mengen an hochwertigem Tee für den Export verpackt werden.",
      hu: "A kenyai teafeldolgozás központja, ahol nagy mennyiségű, kiváló minőségű teát csomagolnak exportra.",
      ro: "Centrul procesării ceaiului kenyan, unde cantități mari de ceai de înaltă calitate sunt ambalate pentru export.",
      en: "The hub of Kenyan tea processing, where large volumes of high-quality tea are packaged for export."
    },
    facts: {
      de: ["Zentrum der Teeverarbeitung", "Export von hochwertigem Tee"],
      hu: ["A teafeldolgozás központja", "Kiváló minőségű tea exportja"],
      ro: ["Centrul procesării ceaiului", "Export de ceai de înaltă calitate"],
      en: ["Hub of tea processing", "Export of high-quality tea"]
    }
  },
  {
    id: "lake-turkana-wind-power-economic-v2",
    type: "industry",
    parent: "KE-25",
    coords: [36.75, 2.65],
    name: {
      de: "Windpark Turkana-See",
      hu: "Turkana-tavi Szélpark",
      ro: "Parcul Eolian Lacul Turkana",
      en: "Lake Turkana Wind Power"
    },
    description: {
      de: "Das größte Windkraftprojekt in Afrika, das saubere Energie in das nationale Stromnetz Kenias einspeist.",
      hu: "Afrika legnagyobb szélenergia-projektje, amely tiszta energiát táplál be a kenyai nemzeti hálózatba.",
      ro: "Cel mai mare proiect de energie eoliană din Africa, injectând energie curată în rețeaua națională a Kenyei.",
      en: "The largest wind power project in Africa, injecting clean energy into Kenya's national grid."
    },
    facts: {
      de: ["Größter Windpark Afrikas", "Liefert saubere Energie"],
      hu: ["Afrika legnagyobb szélparkja", "Tiszta energiát biztosít"],
      ro: ["Cel mai mare parc eolian din Africa", "Furnizează energie curată"],
      en: ["Largest wind farm in Africa", "Provides clean energy"]
    }
  },
  {
    id: "naivasha-flower-farms-economic-v2",
    type: "industry",
    parent: "KE-32",
    coords: [36.35, -0.75],
    name: {
      de: "Blumenfarmen von Naivasha (Verarbeitungsanlagen)",
      hu: "Naivasha Virágfarmok (Feldolgozó üzemek)",
      ro: "Fermele de Flori din Naivasha (Facilități de procesare)",
      en: "Naivasha Flower Farms (Processing Facilities)"
    },
    description: {
      de: "Große Gewächshäuser und Verarbeitungsanlagen, die Kenia zu einem der weltweit führenden Exporteure von Schnittblumen machen.",
      hu: "Nagy üvegházak és feldolgozó létesítmények, amelyek Kenyát a világ egyik vezető vágottvirág-exportőrévé teszik.",
      ro: "Sere mari și facilități de procesare care fac din Kenya unul dintre principalii exportatori mondiali de flori tăiate.",
      en: "Large greenhouses and processing facilities that make Kenya one of the world's leading exporters of cut flowers."
    },
    facts: {
      de: ["Wichtiges Zentrum für Blumenexport", "Verarbeitungsanlagen für Schnittblumen"],
      hu: ["Fontos virágexport központ", "Vágottvirág feldolgozó létesítmények"],
      ro: ["Centru major de export de flori", "Facilități de procesare pentru flori tăiate"],
      en: ["Major flower export center", "Cut flower processing facilities"]
    }
  },
  {
    id: "nairobi-industrial-area-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.86, -1.31],
    name: {
      de: "Nairobi Industriegebiet",
      hu: "Nairobi Ipari Terület",
      ro: "Zona Industrială Nairobi",
      en: "Nairobi Industrial Area"
    },
    description: {
      de: "Das größte Produktionszentrum Kenias, in dem eine breite Palette von Konsumgütern und Baumaterialien hergestellt wird.",
      hu: "Kenya legnagyobb termelési központja, ahol a fogyasztási cikkek és építőanyagok széles skáláját gyártják.",
      ro: "Cel mai mare centru de producție din Kenya, unde este fabricată o gamă largă de bunuri de larg consum și materiale de construcție.",
      en: "The largest manufacturing hub in Kenya, where a wide range of consumer goods and building materials are produced."
    },
    facts: {
      de: ["Größtes Produktionszentrum Kenias", "Vielzahl von Industriebetrieben"],
      hu: ["Kenya legnagyobb termelési központja", "Különféle ipari vállalatok"],
      ro: ["Cel mai mare centru de producție", "O varietate de întreprinderi industriale"],
      en: ["Largest manufacturing hub", "Variety of industrial enterprises"]
    }
  },
  {
    id: "tatu-city-industrial-park-economic-v2",
    type: "industry",
    parent: "KE-22",
    coords: [36.95, -1.13],
    name: {
      de: "Tatu City Industriepark",
      hu: "Tatu City Ipari Park",
      ro: "Parcul Industrial Tatu City",
      en: "Tatu City Industrial Park"
    },
    description: {
      de: "Eine hochmoderne Sonderwirtschaftszone in der Nähe von Nairobi, die große internationale Produktionsunternehmen beherbergt.",
      hu: "Egy ultramodern különleges gazdasági övezet Nairobi közelében, amely nagy nemzetközi gyártóvállalatoknak ad otthont.",
      ro: "O zonă economică specială ultramodernă lângă Nairobi, găzduind mari companii internaționale de producție.",
      en: "A state-of-the-art special economic zone near Nairobi, hosting major international manufacturing companies."
    },
    facts: {
      de: ["Hochmoderne Sonderwirtschaftszone", "Sitz internationaler Unternehmen"],
      hu: ["Ultramodern gazdasági övezet", "Nemzetközi cégek központja"],
      ro: ["Zonă economică specială", "Sediul companiilor internaționale"],
      en: ["State-of-the-art economic zone", "Headquarters of international companies"]
    }
  },
  {
    id: "mombasa-oil-refinery-economic-v2",
    type: "industry",
    parent: "KE-01",
    coords: [39.61, -4.01],
    name: {
      de: "Ölraffinerie Mombasa (KPRL)",
      hu: "Mombasa Olajfinomító (KPRL)",
      ro: "Rafinăria de Petrol Mombasa (KPRL)",
      en: "Mombasa Oil Refinery (KPRL)"
    },
    description: {
      de: "Eine bedeutende Anlage, die früher Rohöl für den ostafrikanischen Markt raffinierte und nun als Lagerstätte dient.",
      hu: "Jelentős létesítmény, amely korábban nyersolajat finomított a kelet-afrikai piacra, jelenleg pedig tárolóként szolgál.",
      ro: "O instalație majoră care a rafinat anterior țiței pentru piața din Africa de Est, servind acum ca depozit.",
      en: "A major facility that formerly refined crude oil for the East African market, now serving as a storage facility."
    },
    facts: {
      de: ["Ehemalige Ölraffinerie", "Dient nun als Lagerstätte"],
      hu: ["Egykori olajfinomító", "Jelenleg tárolóként szolgál"],
      ro: ["Fostă rafinărie de petrol", "Servește acum ca depozit"],
      en: ["Former oil refinery", "Now serves as a storage facility"]
    }
  },
  {
    id: "nzoia-sugar-company-economic-v2",
    type: "industry",
    parent: "KE-39",
    coords: [34.69, 0.58],
    name: {
      de: "Nzoia Zuckerfabrik",
      hu: "Nzoia Cukorgyár",
      ro: "Fabrica de Zahăr Nzoia",
      en: "Nzoia Sugar Company"
    },
    description: {
      de: "Eine der großen Zuckerfabriken im Westen Kenias, ein wichtiger Arbeitgeber in der Region Bungoma.",
      hu: "Nyugat-Kenya egyik nagy cukorgyára, a Bungoma régió egyik fő munkáltatója.",
      ro: "Una dintre marile fabrici de zahăr din vestul Kenyei, un angajator major în regiunea Bungoma.",
      en: "One of the large sugar factories in western Kenya, a major employer in the Bungoma region."
    },
    facts: {
      de: ["Große Zuckerfabrik", "Wichtiger Arbeitgeber"],
      hu: ["Nagy cukorgyár", "Fontos munkáltató"],
      ro: ["Fabrică mare de zahăr", "Angajator important"],
      en: ["Large sugar factory", "Major employer"]
    }
  },
  {
    id: "isuzu-east-africa-assembly-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.87, -1.3],
    name: {
      de: "Isuzu Ostafrika Montagewerk",
      hu: "Isuzu Kelet-Afrika Összeszerelő Üzem",
      ro: "Fabrica de Asamblare Isuzu Africa de Est",
      en: "Isuzu East Africa Assembly Plant"
    },
    description: {
      de: "Ein führendes Montagewerk für Nutzfahrzeuge in Kenia, das Busse und Lastwagen für den lokalen Markt produziert.",
      hu: "Vezető haszongépjármű-összeszerelő üzem Kenyában, amely buszokat és teherautókat gyárt a helyi piac számára.",
      ro: "O uzină de asamblare de vârf pentru vehicule comerciale din Kenya, producând autobuze și camioane pentru piața locală.",
      en: "A leading commercial vehicle assembly plant in Kenya, producing buses and trucks for the local market."
    },
    facts: {
      de: ["Montagewerk für Nutzfahrzeuge", "Produziert Busse und Lastwagen"],
      hu: ["Haszongépjármű-összeszerelő üzem", "Buszokat és teherautókat gyárt"],
      ro: ["Uzină de asamblare vehicule comerciale", "Produce autobuze și camioane"],
      en: ["Commercial vehicle assembly plant", "Produces buses and trucks"]
    }
  },
  {
    id: "east-african-breweries-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.88, -1.25],
    name: {
      de: "East African Breweries Limited (Ruaraka)",
      hu: "East African Breweries Limited (Ruaraka)",
      ro: "East African Breweries Limited (Ruaraka)",
      en: "East African Breweries Limited (Ruaraka)"
    },
    description: {
      de: "Die Hauptbrauerei eines der größten Getränkehersteller in der Region, ein bedeutender industrieller Akteur.",
      hu: "A régió egyik legnagyobb italgyártójának fő sörfőzdéje, jelentős ipari szereplő.",
      ro: "Fabrica principală de bere a unuia dintre cei mai mari producători de băuturi din regiune, un jucător industrial major.",
      en: "The main brewery of one of the largest beverage manufacturers in the region, a major industrial player."
    },
    facts: {
      de: ["Hauptbrauerei von EABL", "Großer Getränkehersteller"],
      hu: ["Az EABL fő sörfőzdéje", "Nagy italgyártó"],
      ro: ["Fabrica principală EABL", "Producător mare de băuturi"],
      en: ["Main brewery of EABL", "Large beverage manufacturer"]
    }
  },
  {
    id: "mombasa-apparel-epz-economic-v2",
    type: "industry",
    parent: "KE-01",
    coords: [39.63, -3.99],
    name: {
      de: "Mombasa Apparel EPZ",
      hu: "Mombasa Apparel EPZ",
      ro: "Mombasa Apparel EPZ",
      en: "Mombasa Apparel EPZ"
    },
    description: {
      de: "Eine große Fabrik zur Herstellung von Kleidung in Mombasa, die hauptsächlich für den Export in die USA unter AGOA produziert.",
      hu: "Egy nagy ruházati gyár Mombasában, amely főként az USA-ba exportál az AGOA keretében.",
      ro: "O fabrică mare de îmbrăcăminte din Mombasa, producând în principal pentru export în SUA prin AGOA.",
      en: "A large clothing manufacturing factory in Mombasa, producing mainly for export to the US under AGOA."
    },
    facts: {
      de: ["Bekleidungsherstellung in Mombasa", "Export in die USA"],
      hu: ["Ruházati gyár Mombasában", "Export az USA-ba"],
      ro: ["Fabrică de îmbrăcăminte în Mombasa", "Export către SUA"],
      en: ["Clothing manufacturing in Mombasa", "Export to the US"]
    }
  },
  {
    id: "twiga-chemicals-plant-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.875, -1.315],
    name: {
      de: "Twiga Chemiefabrik",
      hu: "Twiga Vegyipari Üzem",
      ro: "Fabrica de Produse Chimice Twiga",
      en: "Twiga Chemicals Plant"
    },
    description: {
      de: "Ein führender Hersteller und Vertreiber von landwirtschaftlichen Chemikalien und Industriegütern in Kenia.",
      hu: "A mezőgazdasági vegyszerek és ipari cikkek vezető gyártója és forgalmazója Kenyában.",
      ro: "Un producător și distribuitor de top de produse chimice agricole și bunuri industriale din Kenya.",
      en: "A leading manufacturer and distributor of agricultural chemicals and industrial goods in Kenya."
    },
    facts: {
      de: ["Hersteller von Agrarchemikalien", "Industriegüterproduktion"],
      hu: ["Agrárvegyszer gyártó", "Ipari termékek gyártása"],
      ro: ["Producător de produse chimice agricole", "Producția de bunuri industriale"],
      en: ["Manufacturer of agricultural chemicals", "Industrial goods production"]
    }
  },
  {
    id: "kenya-meat-commission-economic-v2",
    type: "industry",
    parent: "KE-16",
    coords: [36.985, -1.455],
    name: {
      de: "Kenya Meat Commission (Athi River)",
      hu: "Kenyai Húsipari Bizottság (Athi River)",
      ro: "Comisia Cărnii din Kenya (Athi River)",
      en: "Kenya Meat Commission (Athi River)"
    },
    description: {
      de: "Der wichtigste staatliche Fleischverarbeitungsbetrieb in Kenia, der Fleischprodukte für den lokalen und internationalen Markt verarbeitet.",
      hu: "A legfontosabb állami húsfeldolgozó üzem Kenyában, amely hústermékeket dolgoz fel a helyi és a nemzetközi piacra.",
      ro: "Principala unitate de procesare a cărnii de stat din Kenya, procesând produse din carne pentru piața locală și internațională.",
      en: "The premier state-owned meat processing facility in Kenya, processing meat products for the local and international market."
    },
    facts: {
      de: ["Staatlicher Fleischverarbeitungsbetrieb", "Fleischprodukte für In- und Ausland"],
      hu: ["Állami húsfeldolgozó üzem", "Hústermékek bel- és külföldre"],
      ro: ["Unitate de procesare a cărnii de stat", "Produse din carne pentru țară și străinătate"],
      en: ["State meat processing facility", "Meat products for domestic and foreign markets"]
    }
  },
  {
    id: "brooksides-dairy-processing-economic-v2",
    type: "industry",
    parent: "KE-22",
    coords: [36.955, -1.14],
    name: {
      de: "Brookside Molkerei Ruiru",
      hu: "Brookside Tejfeldolgozó Ruiru",
      ro: "Fabrica de Lactate Brookside Ruiru",
      en: "Brookside Dairy Processing Ruiru"
    },
    description: {
      de: "Einer der größten Milchverarbeitungsbetriebe Ostafrikas, der Milchprodukte in der gesamten Region vertreibt.",
      hu: "Kelet-Afrika egyik legnagyobb tejfeldolgozó üzeme, amely tejtermékeket forgalmaz az egész régióban.",
      ro: "Una dintre cele mai mari unități de procesare a lactatelor din Africa de Est, distribuind produse lactate în întreaga regiune.",
      en: "One of East Africa's largest dairy processing plants, distributing dairy products across the region."
    },
    facts: {
      de: ["Großer Milchverarbeitungsbetrieb", "Vertrieb in ganz Ostafrika"],
      hu: ["Nagy tejfeldolgozó üzem", "Forgalmazás egész Kelet-Afrikában"],
      ro: ["Unitate mare de procesare a lactatelor", "Distribuție în toată Africa de Est"],
      en: ["Large dairy processing plant", "Distribution throughout East Africa"]
    }
  },
  {
    id: "base-titanium-port-facility-economic-v2",
    type: "port",
    parent: "KE-01",
    coords: [39.635, -4.09],
    name: {
      de: "Base Titanium Verladeanlage Likoni",
      hu: "Base Titanium Rakodóterminál Likoni",
      ro: "Terminalul de Încărcare Base Titanium Likoni",
      en: "Base Titanium Loading Facility Likoni"
    },
    description: {
      de: "Eine spezielle Hafenanlage zum Export von Mineralsanden, die in Kwale abgebaut werden.",
      hu: "Egy speciális kikötői létesítmény a Kwale-ben bányászott ásványi homok exportálására.",
      ro: "O instalație portuară specializată pentru exportul de nisipuri minerale exploatate în Kwale.",
      en: "A specialized port facility for exporting mineral sands mined in Kwale."
    },
    facts: {
      de: ["Spezielle Hafenanlage", "Export von Mineralsanden"],
      hu: ["Speciális kikötői létesítmény", "Ásványi homok exportja"],
      ro: ["Instalație portuară specializată", "Export de nisipuri minerale"],
      en: ["Specialized port facility", "Export of mineral sands"]
    }
  },
  {
    id: "pepsi-cola-plant-ruaraka-economic-v2",
    type: "industry",
    parent: "KE-47",
    coords: [36.885, -1.245],
    name: {
      de: "Pepsi-Abfüllanlage Ruaraka",
      hu: "Pepsi Palackozóüzem Ruaraka",
      ro: "Fabrica de Îmbuteliere Pepsi Ruaraka",
      en: "Pepsi Bottling Plant Ruaraka"
    },
    description: {
      de: "Eine moderne Getränkeabfüllanlage in Nairobi, die Erfrischungsgetränke für den kenianischen Markt produziert.",
      hu: "Egy modern italpalackozó üzem Nairobiban, amely üdítőket gyárt a kenyai piacra.",
      ro: "O fabrică modernă de îmbuteliere a băuturilor în Nairobi, producând băuturi răcoritoare pentru piața kenyană.",
      en: "A modern beverage bottling plant in Nairobi, producing soft drinks for the Kenyan market."
    },
    facts: {
      de: ["Moderne Getränkeabfüllanlage", "Produktion für Kenia"],
      hu: ["Modern italpalackozó üzem", "Termelés Kenyának"],
      ro: ["Fabrică modernă de îmbuteliere", "Producție pentru Kenya"],
      en: ["Modern beverage bottling plant", "Production for Kenya"]
    }
  }
];
