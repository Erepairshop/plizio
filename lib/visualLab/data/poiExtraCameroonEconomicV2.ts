import type { POI } from "./poi";

export const poiExtraCameroonEconomicV2: POI[] = [
  {
    id: "douala-autonomous-port-economic-v2",
    type: "port",
    parent: "CM-LT",
    coords: [9.6958, 4.0416],
    name: {
      de: "Autonomer Hafen von Douala",
      hu: "Doualai Autonóm Kikötő",
      ro: "Portul Autonom Douala",
      en: "Autonomous Port of Douala"
    },
    description: {
      de: "Der größte und wichtigste Hafen Kameruns, der den Großteil des internationalen Handels des Landes abwickelt.",
      hu: "Kamerun legnagyobb és legfontosabb kikötője, amely az ország nemzetközi kereskedelmének nagy részét bonyolítja.",
      ro: "Cel mai mare și mai important port din Camerun, care gestionează majoritatea comerțului internațional al țării.",
      en: "The largest and most important port in Cameroon, handling the majority of the country's international trade."
    },
    facts: {
      de: [
        "Liegt am Wouri-Fluss",
        "Wichtigster Hafen Zentralafrikas",
        "Umfasst Container- und Holzterminals",
        "Wichtig für den Export nach Tschad und in die ZAR"
      ],
      hu: [
        "A Wouri folyón található",
        "Közép-Afrika fő kikötője",
        "Konténer- és faterminálokat foglal magában",
        "Fontos a Csádba és a KAK-ba irányuló export szempontjából"
      ],
      ro: [
        "Situat pe râul Wouri",
        "Principalul port al Africii Centrale",
        "Include terminale de containere și de lemn",
        "Important pentru exportul către Ciad și RCA"
      ],
      en: [
        "Located on the Wouri River",
        "Central Africa's main port",
        "Includes container and timber terminals",
        "Crucial for export to Chad and CAR"
      ]
    }
  },
  {
    id: "kribi-deep-sea-port-economic-v2",
    type: "port",
    parent: "CM-SU",
    coords: [9.9833, 2.7667],
    name: {
      de: "Tiefseehafen Kribi",
      hu: "Kribi Mélyvízi Kikötő",
      ro: "Portul de Apă Adâncă Kribi",
      en: "Kribi Deep Sea Port"
    },
    description: {
      de: "Ein moderner Tiefseehafen im Süden Kameruns, der für große Containerschiffe und den Mineralienexport konzipiert wurde.",
      hu: "Modern mélyvízi kikötő Dél-Kamerunban, amelyet nagy konténerszállító hajók fogadására és ásványkincsek exportjára terveztek.",
      ro: "Un port modern de apă adâncă în sudul Camerunului, conceput pentru nave mari de containere și exportul de minerale.",
      en: "A modern deep-sea port in southern Cameroon designed to accommodate large container ships and mineral exports."
    },
    facts: {
      de: [
        "In Mboro südlich von Kribi",
        "Fertigstellung der ersten Phase 2018",
        "Tiefgang von 16 Metern",
        "Wichtig für das Mbalam-Eisenerzprojekt"
      ],
      hu: [
        "Mboróban, Kribitől délre",
        "Az első fázis 2018-ban készült el",
        "16 méteres merülés",
        "Fontos a Mbalam vasércprojekt szempontjából"
      ],
      ro: [
        "În Mboro la sud de Kribi",
        "Prima fază finalizată în 2018",
        "Pescaj de 16 metri",
        "Important pentru proiectul de minereu de fier Mbalam"
      ],
      en: [
        "In Mboro south of Kribi",
        "First phase completed in 2018",
        "Draft of 16 meters",
        "Crucial for the Mbalam iron ore project"
      ]
    }
  },
  {
    id: "limbe-port-economic-v2",
    type: "port",
    parent: "CM-SW",
    coords: [9.0167, 4.0167],
    name: {
      de: "Seehafen Limbe",
      hu: "Limbei Kikötő",
      ro: "Portul Maritim Limbe",
      en: "Limbe Seaport"
    },
    description: {
      de: "Ein wichtiger Hafen in der Südwestregion, der hauptsächlich für Agrarprodukte und die Ölindustrie genutzt wird.",
      hu: "Fontos kikötő a délnyugati régióban, amelyet főként mezőgazdasági termékek és az olajipar számára használnak.",
      ro: "Un port important în regiunea de Sud-Vest, utilizat în principal pentru produse agricole și industria petrolieră.",
      en: "An important port in the Southwest region primarily used for agricultural products and the oil industry."
    },
    facts: {
      de: [
        "Früher als Victoria bekannt",
        "Dient der CDC für den Export",
        "Nahe der Sonara-Ölraffinerie",
        "Befindet sich am Fuß des Kamerunbergs"
      ],
      hu: [
        "Korábban Victoria néven ismert",
        "A CDC exportját szolgálja ki",
        "A Sonara olajfinomító közelében",
        "A Kamerun-hegy lábánál található"
      ],
      ro: [
        "Cunoscut anterior sub numele de Victoria",
        "Deservește CDC pentru export",
        "Aproape de rafinăria de petrol Sonara",
        "Situat la poalele Muntelui Camerun"
      ],
      en: [
        "Formerly known as Victoria",
        "Serves the CDC for exports",
        "Near the Sonara oil refinery",
        "Located at the foot of Mount Cameroon"
      ]
    }
  },
  {
    id: "sonara-oil-refinery-economic-v2",
    type: "industry",
    parent: "CM-SW",
    coords: [9.0105, 4.0255],
    name: {
      de: "Sonara-Ölraffinerie",
      hu: "Sonara Olajfinomító",
      ro: "Rafinăria de Petrol Sonara",
      en: "Sonara Oil Refinery"
    },
    description: {
      de: "Die einzige Erdölraffinerie Kameruns, die eine Schlüsselrolle in der Energieversorgung und Wirtschaft des Landes spielt.",
      hu: "Kamerun egyetlen kőolajfinomítója, amely kulcsszerepet játszik az ország energiaellátásában és gazdaságában.",
      ro: "Singura rafinărie de petrol din Camerun, jucând un rol cheie în furnizarea de energie și economia țării.",
      en: "Cameroon's only petroleum refinery, playing a key role in the country's energy supply and economy."
    },
    facts: {
      de: [
        "In Limbe gelegen",
        "Kapazität von 2,1 Millionen Tonnen pro Jahr",
        "Gegründet 1973",
        "Verarbeitet importiertes leichtes Rohöl"
      ],
      hu: [
        "Limbe városában található",
        "Évi 2,1 millió tonna kapacitás",
        "1973-ban alapították",
        "Importált könnyű kőolajat dolgoz fel"
      ],
      ro: [
        "Situată în Limbe",
        "Capacitate de 2,1 milioane de tone pe an",
        "Fondată în 1973",
        "Procesează țiței ușor importat"
      ],
      en: [
        "Located in Limbe",
        "Capacity of 2.1 million tonnes per year",
        "Founded in 1973",
        "Processes imported light crude oil"
      ]
    }
  },
  {
    id: "alucam-smelter-edea-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [10.1333, 3.8],
    name: {
      de: "ALUCAM Aluminiumhütte Edea",
      hu: "ALUCAM Alumíniumkohó Edéa",
      ro: "Topitoria de Aluminiu ALUCAM Edea",
      en: "ALUCAM Aluminium Smelter Edea"
    },
    description: {
      de: "Eines der größten Industrieunternehmen in Kamerun, das Aluminium aus importiertem Aluminiumoxid produziert.",
      hu: "Kamerun egyik legnagyobb ipari vállalata, amely importált timföldből gyárt alumíniumot.",
      ro: "Una dintre cele mai mari companii industriale din Camerun, producând aluminiu din alumină importată.",
      en: "One of the largest industrial companies in Cameroon, producing aluminium from imported alumina."
    },
    facts: {
      de: [
        "Nutzt Strom aus dem Edea-Staudamm",
        "In Edéa am Sanaga-Fluss",
        "Gegründet im Jahr 1954",
        "Wichtiger Arbeitgeber der Region"
      ],
      hu: [
        "Az edéai gát áramát használja",
        "Edéában, a Sanaga folyó mentén",
        "1954-ben alapították",
        "A régió jelentős munkaadója"
      ],
      ro: [
        "Folosește energia electrică de la barajul Edea",
        "În Edéa pe râul Sanaga",
        "Înființată în 1954",
        "Un angajator major în regiune"
      ],
      en: [
        "Uses power from the Edea Dam",
        "In Edéa on the Sanaga River",
        "Founded in 1954",
        "Major employer in the region"
      ]
    }
  },
  {
    id: "edea-hydro-station-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [10.125, 3.805],
    name: {
      de: "Wasserkraftwerk Edéa",
      hu: "Edéa Vízerőmű",
      ro: "Hidrocentrala Edéa",
      en: "Edéa Hydroelectric Power Station"
    },
    description: {
      de: "Das erste und eines der wichtigsten Wasserkraftwerke in Kamerun, das den Großteil des Stroms für die Industrie liefert.",
      hu: "Az első és egyik legfontosabb vízerőmű Kamerunban, amely az ipar áramellátásának nagy részét biztosítja.",
      ro: "Prima și una dintre cele mai importante hidrocentrale din Camerun, furnizând majoritatea energiei electrice pentru industrie.",
      en: "The first and one of the most important hydroelectric power stations in Cameroon, supplying most of the electricity for industry."
    },
    facts: {
      de: [
        "Liegt am Sanaga-Fluss",
        "Installierte Leistung von 276 MW",
        "Versorgt die ALUCAM-Hütte",
        "Erste Bauphase 1953 abgeschlossen"
      ],
      hu: [
        "A Sanaga folyón található",
        "276 MW beépített teljesítmény",
        "Az ALUCAM kohót látja el",
        "Az első építési fázis 1953-ban fejeződött be"
      ],
      ro: [
        "Situată pe râul Sanaga",
        "Capacitate instalată de 276 MW",
        "Aprovizionează topitoria ALUCAM",
        "Prima fază de construcție finalizată în 1953"
      ],
      en: [
        "Located on the Sanaga River",
        "Installed capacity of 276 MW",
        "Supplies the ALUCAM smelter",
        "First construction phase completed in 1953"
      ]
    }
  },
  {
    id: "song-loulou-hydro-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [10.45, 4.05],
    name: {
      de: "Wasserkraftwerk Song Loulou",
      hu: "Song Loulou Vízerőmű",
      ro: "Hidrocentrala Song Loulou",
      en: "Song Loulou Hydroelectric Station"
    },
    description: {
      de: "Das leistungsstärkste Wasserkraftwerk Kameruns, das eine wesentliche Rolle im nationalen Stromnetz spielt.",
      hu: "Kamerun legnagyobb teljesítményű vízerőműve, amely jelentős szerepet játszik az országos villamosenergia-hálózatban.",
      ro: "Cea mai puternică hidrocentrală din Camerun, care joacă un rol esențial în rețeaua electrică națională.",
      en: "Cameroon's most powerful hydroelectric station, playing an essential role in the national power grid."
    },
    facts: {
      de: [
        "Leistung von 384 Megawatt",
        "Liegt am Sanaga-Fluss",
        "Wurde 1981 in Betrieb genommen",
        "Wird von Eneo Cameroon betrieben"
      ],
      hu: [
        "384 megawatt teljesítmény",
        "A Sanaga folyón található",
        "1981-ben helyezték üzembe",
        "Az Eneo Cameroon üzemelteti"
      ],
      ro: [
        "Capacitate de 384 megawați",
        "Situată pe râul Sanaga",
        "Pusă în funcțiune în 1981",
        "Operat de Eneo Cameroon"
      ],
      en: [
        "Capacity of 384 megawatts",
        "Located on the Sanaga River",
        "Commissioned in 1981",
        "Operated by Eneo Cameroon"
      ]
    }
  },
  {
    id: "memveele-dam-economic-v2",
    type: "industry",
    parent: "CM-SU",
    coords: [10.3667, 2.4],
    name: {
      de: "Memve'ele-Staudamm",
      hu: "Memve'ele Gát",
      ro: "Barajul Memve'ele",
      en: "Memve'ele Dam"
    },
    description: {
      de: "Ein großes Staudamm- und Wasserkraftprojekt im Süden Kameruns zur Verringerung des nationalen Energiedefizits.",
      hu: "Nagy gát- és vízerőműprojekt Dél-Kamerunban az országos energiahiány csökkentése érdekében.",
      ro: "Un mare proiect de baraj și hidrocentrală în sudul Camerunului pentru a reduce deficitul național de energie.",
      en: "A major dam and hydroelectric project in southern Cameroon aimed at reducing the national energy deficit."
    },
    facts: {
      de: [
        "Liegt am Ntem-Fluss",
        "Leistung von 211 Megawatt",
        "Kosten von über 600 Millionen USD",
        "Befindet sich nahe der Äquatorialguinea-Grenze"
      ],
      hu: [
        "A Ntem folyón található",
        "211 megawatt teljesítmény",
        "Több mint 600 millió dolláros költség",
        "Az egyenlítői-guineai határ közelében fekszik"
      ],
      ro: [
        "Situat pe râul Ntem",
        "Capacitate de 211 megawați",
        "Cost de peste 600 de milioane de dolari",
        "Aproape de granița cu Guineea Ecuatorială"
      ],
      en: [
        "Located on the Ntem River",
        "Capacity of 211 megawatts",
        "Cost over 600 million USD",
        "Located near the Equatorial Guinea border"
      ]
    }
  },
  {
    id: "lom-pangar-dam-economic-v2",
    type: "industry",
    parent: "CM-ES",
    coords: [13.4833, 5.3833],
    name: {
      de: "Lom-Pangar-Talsperre",
      hu: "Lom Pangar Gát",
      ro: "Barajul Lom Pangar",
      en: "Lom Pangar Dam"
    },
    description: {
      de: "Ein Speicherbecken im Osten Kameruns, das den Wasserfluss des Sanaga-Flusses für flussabwärts gelegene Kraftwerke reguliert.",
      hu: "Kelet-Kamerunban található tározó, amely a Sanaga folyó vízhozamát szabályozza a folyásirányban lévő erőművek számára.",
      ro: "Un rezervor în estul Camerunului care reglează debitul de apă al râului Sanaga pentru centralele din aval.",
      en: "A storage reservoir in eastern Cameroon that regulates the water flow of the Sanaga River for downstream power stations."
    },
    facts: {
      de: [
        "Fassungsvermögen von 6 Milliarden Kubikmetern",
        "Am Zusammenfluss von Lom und Pangar",
        "Erhöht die Produktion von Edea und Song Loulou",
        "Hat auch ein 30-MW-Kraftwerk"
      ],
      hu: [
        "6 milliárd köbméter kapacitás",
        "A Lom és Pangar folyók találkozásánál",
        "Növeli Edéa és Song Loulou termelését",
        "Egy 30 MW-os erőművel is rendelkezik"
      ],
      ro: [
        "Capacitate de 6 miliarde de metri cubi",
        "La confluența râurilor Lom și Pangar",
        "Crește producția Edea și Song Loulou",
        "Are și o centrală de 30 MW"
      ],
      en: [
        "Capacity of 6 billion cubic meters",
        "At the confluence of Lom and Pangar rivers",
        "Increases production of Edea and Song Loulou",
        "Also has a 30 MW power plant"
      ]
    }
  },
  {
    id: "betare-oya-gold-mines-economic-v2",
    type: "industry",
    parent: "CM-ES",
    coords: [14.0833, 5.6],
    name: {
      de: "Goldminen von Bétaré-Oya",
      hu: "Bétaré-Oya Aranybányák",
      ro: "Minele de Aur Bétaré-Oya",
      en: "Bétaré-Oya Gold Mines"
    },
    description: {
      de: "Eines der wichtigsten Goldabbaugebiete Kameruns, in dem sowohl industrielle als auch handwerkliche Förderung betrieben wird.",
      hu: "Kamerun egyik legfontosabb aranybányászati területe, ahol ipari és kézműves kitermelés is folyik.",
      ro: "Una dintre cele mai importante zone de exploatare a aurului din Camerun, unde se desfășoară minerit industrial și artizanal.",
      en: "One of Cameroon's main gold mining areas, featuring both industrial and artisanal extraction."
    },
    facts: {
      de: [
        "Befindet sich in der Region Ost",
        "Zahlreiche ausländische Bergbauunternehmen",
        "Verursacht erhebliche Umweltauswirkungen",
        "Lom-Fluss ist stark vom Bergbau geprägt"
      ],
      hu: [
        "A Keleti régióban található",
        "Számos külföldi bányavállalat",
        "Jelentős környezeti hatásokat okoz",
        "A Lom folyót erősen befolyásolja a bányászat"
      ],
      ro: [
        "Situat în Regiunea de Est",
        "Numeroase companii miniere străine",
        "Cauzează un impact semnificativ asupra mediului",
        "Râul Lom este puternic afectat de minerit"
      ],
      en: [
        "Located in the East Region",
        "Numerous foreign mining companies",
        "Causes significant environmental impact",
        "Lom River is heavily marked by mining"
      ]
    }
  },
  {
    id: "geovic-cobalt-mine-economic-v2",
    type: "industry",
    parent: "CM-ES",
    coords: [13.8833, 3.25],
    name: {
      de: "Nkamouna Kobalt-Nickel-Mine",
      hu: "Nkamouna Kobalt-Nikkel Bánya",
      ro: "Mina de Cobalt-Nichel Nkamouna",
      en: "Nkamouna Cobalt-Nickel Mine"
    },
    description: {
      de: "Eine bedeutende Kobalt-, Nickel- und Mangan-Lagerstätte in der Ostregion, entwickelt von Geovic Mining.",
      hu: "Jelentős kobalt-, nikkel- és mangánlelőhely a Keleti régióban, a Geovic Mining fejlesztésében.",
      ro: "Un important zăcământ de cobalt, nichel și mangan în Regiunea de Est, dezvoltat de Geovic Mining.",
      en: "A significant cobalt, nickel, and manganese deposit in the East Region, developed by Geovic Mining."
    },
    facts: {
      de: [
        "Eines der größten Kobaltvorkommen in Afrika",
        "Geschätzte 68 Millionen Tonnen Erz",
        "Liegt nahe Lomié",
        "Wichtig für die Batterieproduktion weltweit"
      ],
      hu: [
        "Afrika egyik legnagyobb kobaltlelőhelye",
        "Becsült 68 millió tonna érc",
        "Lomié közelében található",
        "Fontos az akkumulátorgyártás számára világszerte"
      ],
      ro: [
        "Unul dintre cele mai mari zăcăminte de cobalt din Africa",
        "Estimat la 68 milioane de tone de minereu",
        "Situat lângă Lomié",
        "Important pentru producția globală de baterii"
      ],
      en: [
        "One of Africa's largest cobalt deposits",
        "Estimated 68 million tonnes of ore",
        "Located near Lomié",
        "Important for global battery production"
      ]
    }
  },
  {
    id: "mbalam-iron-ore-economic-v2",
    type: "industry",
    parent: "CM-ES",
    coords: [14.3667, 2.2167],
    name: {
      de: "Mbalam Eisenerzprojekt",
      hu: "Mbalam Vasércprojekt",
      ro: "Proiectul de Minereu de Fier Mbalam",
      en: "Mbalam Iron Ore Project"
    },
    description: {
      de: "Ein massives geplantes Eisenerzbergbauprojekt an der Grenze zwischen Kamerun und der Republik Kongo.",
      hu: "Hatalmas tervezett vasércbányászati projekt Kamerun és a Kongói Köztársaság határán.",
      ro: "Un proiect masiv planificat de exploatare a minereului de fier la granița dintre Camerun și Republica Congo.",
      en: "A massive planned iron ore mining project on the border between Cameroon and the Republic of Congo."
    },
    facts: {
      de: [
        "Beinhaltet den Bau einer 510 km langen Eisenbahn",
        "Zielt auf den Tiefseehafen Kribi ab",
        "Geschätzte 775 Millionen Tonnen hochgradiges Erz",
        "Strategisch für die Wirtschaftsentwicklung"
      ],
      hu: [
        "Egy 510 km hosszú vasútvonal építését foglalja magában",
        "A Kribi mélyvízi kikötőt célozza meg",
        "Becsült 775 millió tonna magas minőségű érc",
        "Stratégiai fontosságú a gazdaságfejlesztés szempontjából"
      ],
      ro: [
        "Include construirea unei căi ferate de 510 km",
        "Vizează portul de apă adâncă Kribi",
        "Se estimează la 775 milioane de tone de minereu de înaltă calitate",
        "Strategic pentru dezvoltarea economică"
      ],
      en: [
        "Includes construction of a 510 km railway",
        "Targets the Kribi Deep Sea Port",
        "Estimated 775 million tonnes of high-grade ore",
        "Strategic for economic development"
      ]
    }
  },
  {
    id: "nkout-iron-deposit-economic-v2",
    type: "industry",
    parent: "CM-SU",
    coords: [12.0167, 2.9167],
    name: {
      de: "Nkout Eisenerzvorkommen",
      hu: "Nkout Vasérclelőhely",
      ro: "Zăcământul de Minereu de Fier Nkout",
      en: "Nkout Iron Ore Deposit"
    },
    description: {
      de: "Eine große Eisenerzlagerstätte im Süden Kameruns, die für die zukünftige industrielle Entwicklung erschlossen wird.",
      hu: "Nagy vasérclelőhely Dél-Kamerunban, amelyet a jövőbeli ipari fejlődés érdekében tárnak fel.",
      ro: "Un mare zăcământ de minereu de fier în sudul Camerunului, fiind dezvoltat pentru viitoarea creștere industrială.",
      en: "A major iron ore deposit in southern Cameroon, being developed for future industrial growth."
    },
    facts: {
      de: [
        "Ressourcen von über 2 Milliarden Tonnen",
        "Liegt etwa 30 km von Djoum entfernt",
        "Erfordert erhebliche Infrastrukturinvestitionen",
        "Gehört zur südlichen Eisenprovinz"
      ],
      hu: [
        "Több mint 2 milliárd tonnás készlet",
        "Djoumtól mintegy 30 km-re található",
        "Jelentős infrastrukturális beruházásokat igényel",
        "A déli vasérctartományhoz tartozik"
      ],
      ro: [
        "Resurse de peste 2 miliarde de tone",
        "Situat la aproximativ 30 km de Djoum",
        "Necesită investiții majore în infrastructură",
        "Face parte din provincia sudică de fier"
      ],
      en: [
        "Resources of over 2 billion tonnes",
        "Located about 30 km from Djoum",
        "Requires major infrastructure investments",
        "Part of the southern iron province"
      ]
    }
  },
  {
    id: "minim-martap-bauxite-economic-v2",
    type: "industry",
    parent: "CM-AD",
    coords: [13.1, 6.7833],
    name: {
      de: "Minim-Martap Bauxitlagerstätte",
      hu: "Minim-Martap Bauxitlelőhely",
      ro: "Zăcământul de Bauxită Minim-Martap",
      en: "Minim-Martap Bauxite Deposit"
    },
    description: {
      de: "Eines der größten unerschlossenen Bauxitvorkommen der Welt, gelegen in der kamerunischen Adamaua-Region.",
      hu: "A világ egyik legnagyobb feltáratlan bauxitlelőhelye, amely a kameruni Adamawa régióban található.",
      ro: "Unul dintre cele mai mari zăcăminte de bauxită neexploatate din lume, situat în Regiunea Adamawa din Camerun.",
      en: "One of the world's largest undeveloped bauxite deposits, located in Cameroon's Adamawa Region."
    },
    facts: {
      de: [
        "Über 1 Milliarde Tonnen geschätzte Ressourcen",
        "Geplant ist der Transport per Bahn nach Douala oder Kribi",
        "Sehr hoher Aluminiumoxidgehalt",
        "Könnte Kameruns Export drastisch steigern"
      ],
      hu: [
        "Több mint 1 milliárd tonna becsült készlet",
        "A tervek szerint vasúton szállítják Doualába vagy Kribibe",
        "Nagyon magas timföldtartalom",
        "Jelentősen növelheti Kamerun exportját"
      ],
      ro: [
        "Resurse estimate de peste 1 miliard de tone",
        "Transport planificat pe calea ferată către Douala sau Kribi",
        "Conținut foarte ridicat de alumină",
        "Ar putea crește drastic exporturile Camerunului"
      ],
      en: [
        "Over 1 billion tonnes of estimated resources",
        "Planned transport by rail to Douala or Kribi",
        "Very high alumina content",
        "Could drastically boost Cameroon's exports"
      ]
    }
  },
  {
    id: "akonolinga-rutile-mine-economic-v2",
    type: "industry",
    parent: "CM-CE",
    coords: [12.25, 3.7667],
    name: {
      de: "Akonolinga Rutil-Mine",
      hu: "Akonolinga Rutilbánya",
      ro: "Mina de Rutil Akonolinga",
      en: "Akonolinga Rutile Mine"
    },
    description: {
      de: "Eine bedeutende Rutil-Lagerstätte in der Zentralregion Kameruns, wichtig für die Titandioxid-Produktion.",
      hu: "Jelentős rutillelőhely Kamerun Központi régiójában, amely fontos a titán-dioxid gyártásához.",
      ro: "Un zăcământ semnificativ de rutil în Regiunea Centrală a Camerunului, important pentru producția de dioxid de titan.",
      en: "A significant rutile deposit in the Central Region of Cameroon, important for titanium dioxide production."
    },
    facts: {
      de: [
        "Eines der weltweit größten Rutilvorkommen",
        "Befindet sich entlang des Nyong-Flusses",
        "Verwendet für Pigmente und Titanmetall",
        "Entwickelt von Eramet"
      ],
      hu: [
        "A világ egyik legnagyobb rutillelőhelye",
        "A Nyong folyó mentén található",
        "Pigmentekhez és titánfémhez használják",
        "Az Eramet fejleszti"
      ],
      ro: [
        "Unul dintre cele mai mari zăcăminte de rutil din lume",
        "Situat de-a lungul râului Nyong",
        "Folosit pentru pigmenți și metal de titan",
        "Dezvoltat de Eramet"
      ],
      en: [
        "One of the world's largest rutile deposits",
        "Located along the Nyong River",
        "Used for pigments and titanium metal",
        "Developed by Eramet"
      ]
    }
  },
  {
    id: "cimencam-douala-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [9.7167, 4.05],
    name: {
      de: "CIMENCAM Zementwerk Douala",
      hu: "CIMENCAM Cementgyár Douala",
      ro: "Fabrica de Ciment CIMENCAM Douala",
      en: "CIMENCAM Cement Plant Douala"
    },
    description: {
      de: "Die wichtigste Zementproduktionsstätte des Landes, betrieben vom Marktführer für Baumaterialien in Kamerun.",
      hu: "Az ország legfontosabb cementgyára, amelyet Kamerun vezető építőanyag-piaci szereplője üzemeltet.",
      ro: "Principala unitate de producție a cimentului din țară, operată de liderul pieței de materiale de construcții din Camerun.",
      en: "The country's primary cement production facility, operated by the market leader for building materials in Cameroon."
    },
    facts: {
      de: [
        "Teil der LafargeHolcim-Gruppe",
        "Produktionskapazität von über 1 Million Tonnen",
        "Versorgt hauptsächlich den Süden des Landes",
        "Gegründet im Jahr 1963"
      ],
      hu: [
        "A LafargeHolcim csoport része",
        "Több mint 1 millió tonnás gyártási kapacitás",
        "Főként az ország déli részét látja el",
        "1963-ban alapították"
      ],
      ro: [
        "Parte a grupului LafargeHolcim",
        "Capacitate de producție de peste 1 milion de tone",
        "Aprovizionează în principal sudul țării",
        "Fondată în 1963"
      ],
      en: [
        "Part of the LafargeHolcim group",
        "Production capacity over 1 million tonnes",
        "Primarily supplies the south of the country",
        "Founded in 1963"
      ]
    }
  },
  {
    id: "dangote-cement-douala-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [9.6833, 4.0333],
    name: {
      de: "Dangote Zementwerk Douala",
      hu: "Dangote Cementgyár Douala",
      ro: "Fabrica de Ciment Dangote Douala",
      en: "Dangote Cement Plant Douala"
    },
    description: {
      de: "Ein großes Zementwerk am Wouri-Fluss, das erheblich zur Deckung des nationalen Infrastrukturbedarfs beiträgt.",
      hu: "Nagy cementgyár a Wouri folyó partján, amely jelentősen hozzájárul a nemzeti infrastrukturális igények kielégítéséhez.",
      ro: "O mare fabrică de ciment pe râul Wouri care contribuie semnificativ la satisfacerea nevoilor naționale de infrastructură.",
      en: "A large cement plant on the Wouri River that contributes significantly to meeting the national infrastructure needs."
    },
    facts: {
      de: [
        "Kapazität von 1,5 Millionen Tonnen pro Jahr",
        "Inbetriebnahme im Jahr 2015",
        "Teil der Dangote Group aus Nigeria",
        "Nutzt Klinkerimporte"
      ],
      hu: [
        "Évi 1,5 millió tonna kapacitás",
        "2015-ben helyezték üzembe",
        "A nigériai Dangote Group része",
        "Klinkerimportot használ"
      ],
      ro: [
        "Capacitate de 1,5 milioane de tone pe an",
        "Pusă în funcțiune în 2015",
        "Parte a Grupului Dangote din Nigeria",
        "Folosește importuri de clincher"
      ],
      en: [
        "Capacity of 1.5 million tonnes per year",
        "Commissioned in 2015",
        "Part of the Dangote Group from Nigeria",
        "Relies on clinker imports"
      ]
    }
  },
  {
    id: "chococam-factory-douala-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [9.7333, 4.0667],
    name: {
      de: "CHOCOCAM Schokoladenfabrik",
      hu: "CHOCOCAM Csokoládégyár",
      ro: "Fabrica de Ciocolată CHOCOCAM",
      en: "CHOCOCAM Chocolate Factory"
    },
    description: {
      de: "Kameruns größter Hersteller von Schokolade und Kakaoprodukten für den lokalen Markt und den Export in der CEMAC-Region.",
      hu: "Kamerun legnagyobb csokoládé- és kakaótermék-gyártója a helyi piac és a CEMAC-régióba irányuló export számára.",
      ro: "Cel mai mare producător de ciocolată și produse din cacao din Camerun pentru piața locală și exportul în regiunea CEMAC.",
      en: "Cameroon's largest manufacturer of chocolate and cocoa products for the local market and export within the CEMAC region."
    },
    facts: {
      de: [
        "Tochtergesellschaft der südafrikanischen Tiger Brands",
        "Verarbeitet lokalen kamerunischen Kakao",
        "Produziert die berühmte Marke 'Mambo'",
        "Gegründet 1967"
      ],
      hu: [
        "A dél-afrikai Tiger Brands leányvállalata",
        "Helyi kameruni kakaót dolgoz fel",
        "A híres 'Mambo' márkát gyártja",
        "1967-ben alapították"
      ],
      ro: [
        "Filială a companiei sud-africane Tiger Brands",
        "Procesează cacao locală din Camerun",
        "Produce faimosul brand 'Mambo'",
        "Fondată în 1967"
      ],
      en: [
        "Subsidiary of South Africa's Tiger Brands",
        "Processes local Cameroonian cocoa",
        "Produces the famous 'Mambo' brand",
        "Founded in 1967"
      ]
    }
  },
  {
    id: "cdc-rubber-tiko-economic-v2",
    type: "industry",
    parent: "CM-SW",
    coords: [9.3667, 4.0667],
    name: {
      de: "CDC Kautschukfabrik Tiko",
      hu: "CDC Gumiüzem Tiko",
      ro: "Fabrica de Cauciuc CDC Tiko",
      en: "CDC Rubber Processing Plant Tiko"
    },
    description: {
      de: "Eine wichtige Verarbeitungsanlage der Cameroon Development Corporation für Naturkautschuk.",
      hu: "A Cameroon Development Corporation fontos természetes gumi feldolgozó üzeme.",
      ro: "O importantă unitate de procesare a cauciucului natural a Cameroon Development Corporation.",
      en: "A major natural rubber processing facility owned by the Cameroon Development Corporation."
    },
    facts: {
      de: [
        "Verarbeitet Latex von umliegenden Plantagen",
        "Zweitgrößter Arbeitgeber nach dem Staat",
        "Exportiert Kautschuk weltweit",
        "Tiko ist ein historisches Landwirtschaftszentrum"
      ],
      hu: [
        "A környező ültetvényekről származó latexet dolgozza fel",
        "Az állam után a második legnagyobb munkaadó",
        "Világszerte exportál gumit",
        "Tiko történelmi mezőgazdasági központ"
      ],
      ro: [
        "Procesează latexul din plantațiile din jur",
        "Al doilea cel mai mare angajator după stat",
        "Exportă cauciuc la nivel global",
        "Tiko este un centru agricol istoric"
      ],
      en: [
        "Processes latex from surrounding plantations",
        "Second largest employer after the state",
        "Exports rubber globally",
        "Tiko is a historic agricultural hub"
      ]
    }
  },
  {
    id: "socapalm-dibombari-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [9.6667, 4.1833],
    name: {
      de: "Socapalm Palmölmühle Dibombari",
      hu: "Socapalm Pálmaolajmalom Dibombari",
      ro: "Moara de Ulei de Palmier Socapalm Dibombari",
      en: "Socapalm Palm Oil Mill Dibombari"
    },
    description: {
      de: "Eine der Hauptproduktionsstätten für Palmöl in Kamerun, die lokale Plantagen bedient.",
      hu: "Kamerun egyik fő pálmaolaj-termelő üzeme, amely a helyi ültetvényeket szolgálja ki.",
      ro: "Una dintre principalele unități de producție a uleiului de palmier din Camerun, deservind plantațiile locale.",
      en: "One of the main palm oil production facilities in Cameroon, serving local plantations."
    },
    facts: {
      de: [
        "Teil der Socfin-Gruppe",
        "Produziert rohes Palmöl und Palmkernöl",
        "Spielt eine große Rolle im Agrarsektor",
        "Umgrenzt von Tausenden Hektar Plantagen"
      ],
      hu: [
        "A Socfin csoport része",
        "Nyers pálmaolajat és pálmamagolajat termel",
        "Nagy szerepet játszik az agrárszektorban",
        "Több ezer hektáros ültetvények övezik"
      ],
      ro: [
        "Parte a grupului Socfin",
        "Produce ulei brut de palmier și ulei de miez de palmier",
        "Joacă un rol major în sectorul agricol",
        "Înconjurat de mii de hectare de plantații"
      ],
      en: [
        "Part of the Socfin group",
        "Produces crude palm oil and palm kernel oil",
        "Plays a major role in the agricultural sector",
        "Surrounded by thousands of hectares of plantations"
      ]
    }
  },
  {
    id: "hevecam-niete-economic-v2",
    type: "industry",
    parent: "CM-SU",
    coords: [10.05, 2.7667],
    name: {
      de: "Hevecam Kautschukfabrik Niété",
      hu: "Hevecam Gumiüzem Niété",
      ro: "Fabrica de Cauciuc Hevecam Niété",
      en: "Hevecam Rubber Factory Niété"
    },
    description: {
      de: "Ein bedeutender Agrarindustriekomplex in der Südregion, der sich auf den Anbau und die Verarbeitung von Kautschuk spezialisiert hat.",
      hu: "Jelentős agrár-ipari komplexum a Déli régióban, amely a gumi termesztésére és feldolgozására specializálódott.",
      ro: "Un complex agro-industrial major în Regiunea de Sud, specializat în cultivarea și procesarea cauciucului.",
      en: "A major agro-industrial complex in the South Region specializing in the cultivation and processing of rubber."
    },
    facts: {
      de: [
        "Plantagenfläche von über 40.000 Hektar",
        "Liegt in der Nähe von Kribi",
        "Tochtergesellschaft von Halcyon Agri",
        "Wichtiger Exporteur von Naturkautschuk"
      ],
      hu: [
        "Több mint 40 000 hektáros ültetvényterület",
        "Kribi közelében található",
        "A Halcyon Agri leányvállalata",
        "A természetes gumi fontos exportőre"
      ],
      ro: [
        "Suprafață de plantație de peste 40.000 de hectare",
        "Situat în apropiere de Kribi",
        "Filială a Halcyon Agri",
        "Un exportator major de cauciuc natural"
      ],
      en: [
        "Plantation area of over 40,000 hectares",
        "Located near Kribi",
        "Subsidiary of Halcyon Agri",
        "A major exporter of natural rubber"
      ]
    }
  },
  {
    id: "sabc-brewery-yaounde-economic-v2",
    type: "industry",
    parent: "CM-CE",
    coords: [11.5167, 3.8667],
    name: {
      de: "SABC Brauerei Yaoundé",
      hu: "SABC Sörfőzde Yaoundé",
      ro: "Fabrica de Bere SABC Yaoundé",
      en: "SABC Brewery Yaoundé"
    },
    description: {
      de: "Eine der größten Brauereien Kameruns, die eine Vielzahl von Bieren und Erfrischungsgetränken für die Zentralregion produziert.",
      hu: "Kamerun egyik legnagyobb sörfőzdéje, amely különféle söröket és üdítőitalokat gyárt a Központi régió számára.",
      ro: "Una dintre cele mai mari fabrici de bere din Camerun, producând o varietate de beri și băuturi răcoritoare pentru Regiunea Centrală.",
      en: "One of Cameroon's largest breweries, producing a variety of beers and soft drinks for the Central Region."
    },
    facts: {
      de: [
        "SABC gehört zur französischen Castel-Gruppe",
        "Marktführer in Kamerun",
        "Produziert lokale und internationale Marken",
        "Wichtiger Steuerzahler"
      ],
      hu: [
        "A SABC a francia Castel Group tulajdona",
        "Piacvezető Kamerunban",
        "Helyi és nemzetközi márkákat gyárt",
        "Jelentős adófizető"
      ],
      ro: [
        "SABC este deținută de Grupul francez Castel",
        "Lider de piață în Camerun",
        "Produce mărci locale și internaționale",
        "Contribuabil important"
      ],
      en: [
        "SABC is owned by the French Castel Group",
        "Market leader in Cameroon",
        "Produces local and international brands",
        "Major taxpayer"
      ]
    }
  },
  {
    id: "cicam-garoua-economic-v2",
    type: "industry",
    parent: "CM-NO",
    coords: [13.4, 9.3],
    name: {
      de: "CICAM Textilfabrik Garoua",
      hu: "CICAM Textilgyár Garoua",
      ro: "Fabrica de Textile CICAM Garoua",
      en: "CICAM Textile Mill Garoua"
    },
    description: {
      de: "Ein wichtiges Textilunternehmen in der Nordregion, das lokale Baumwolle zu Stoffen und Kleidung verarbeitet.",
      hu: "Fontos textilipari vállalat az Északi régióban, amely a helyi gyapotot szövetekké és ruházattá dolgozza fel.",
      ro: "O importantă companie textilă în Regiunea de Nord, care procesează bumbacul local în țesături și îmbrăcăminte.",
      en: "An important textile company in the North Region that processes local cotton into fabrics and clothing."
    },
    facts: {
      de: [
        "Verarbeitet Baumwolle von Sodecoton",
        "Produziert die traditionellen Pagne-Stoffe",
        "Wichtigster Textilhersteller des Landes",
        "Unterstützt die nordkamerunische Wirtschaft"
      ],
      hu: [
        "A Sodecoton gyapotját dolgozza fel",
        "A hagyományos pagne szöveteket gyártja",
        "Az ország legfontosabb textilgyártója",
        "Támogatja Észak-Kamerun gazdaságát"
      ],
      ro: [
        "Procesează bumbac de la Sodecoton",
        "Produce țesăturile tradiționale pagne",
        "Cel mai important producător de textile din țară",
        "Sprijină economia nordului Camerunului"
      ],
      en: [
        "Processes cotton from Sodecoton",
        "Produces traditional pagne fabrics",
        "The country's most important textile manufacturer",
        "Supports the northern Cameroonian economy"
      ]
    }
  },
  {
    id: "sodecoton-maroua-economic-v2",
    type: "industry",
    parent: "CM-EN",
    coords: [14.3333, 10.5833],
    name: {
      de: "Sodecoton Entkörnungsanlage Maroua",
      hu: "Sodecoton Gyapotfeldolgozó Maroua",
      ro: "Fabrica de Egrenare Sodecoton Maroua",
      en: "Sodecoton Ginning Plant Maroua"
    },
    description: {
      de: "Eine zentrale Anlage zur Verarbeitung von Rohbaumwolle in der extremen Nordregion Kameruns.",
      hu: "Központi nyersgyapot-feldolgozó üzem Kamerun Távol-Északi régiójában.",
      ro: "O instalație centrală de procesare a bumbacului brut în regiunea Extremului Nord din Camerun.",
      en: "A central raw cotton processing facility in the Far North Region of Cameroon."
    },
    facts: {
      de: [
        "Trennt Baumwollfasern von den Samen",
        "Unterstützt Tausende von lokalen Bauern",
        "Samen werden zu Öl und Tierfutter verarbeitet",
        "Größtes Agrarunternehmen im Norden"
      ],
      hu: [
        "Elválasztja a gyapotszálakat a magoktól",
        "Helyi gazdák ezreit támogatja",
        "A magokat olajjá és takarmánnyá dolgozzák fel",
        "A legnagyobb agrárcég északon"
      ],
      ro: [
        "Separă fibrele de bumbac de semințe",
        "Sprijină mii de fermieri locali",
        "Semințele sunt procesate în ulei și hrană pentru animale",
        "Cea mai mare companie agricolă din nord"
      ],
      en: [
        "Separates cotton fibers from seeds",
        "Supports thousands of local farmers",
        "Seeds are processed into oil and animal feed",
        "Largest agricultural company in the north"
      ]
    }
  },
  {
    id: "cimencam-figuil-economic-v2",
    type: "industry",
    parent: "CM-NO",
    coords: [13.9667, 9.75],
    name: {
      de: "CIMENCAM Zementwerk Figuil",
      hu: "CIMENCAM Cementgyár Figuil",
      ro: "Fabrica de Ciment CIMENCAM Figuil",
      en: "CIMENCAM Cement Plant Figuil"
    },
    description: {
      de: "Ein strategisches Zementwerk in der Nordregion Kameruns, das den Bedarf im Norden des Landes und den Export in den Tschad deckt.",
      hu: "Stratégiai fontosságú cementgyár Kamerun Északi régiójában, amely az ország északi részének igényeit és a Csádba irányuló exportot fedezi.",
      ro: "O fabrică strategică de ciment în Regiunea de Nord a Camerunului, care acoperă nevoile nordului țării și exporturile către Ciad.",
      en: "A strategic cement plant in the North Region of Cameroon that covers the needs of the country's north and exports to Chad."
    },
    facts: {
      de: [
        "Liegt im Bezirk Mayo-Louti",
        "Baut den lokalen Kalkstein ab",
        "Wichtiger Industriestandort im Norden",
        "Versorgt den Norden seit den 1980er Jahren"
      ],
      hu: [
        "Mayo-Louti megyében található",
        "Helyi mészkövet bányász",
        "Fontos ipari központ északon",
        "Az 1980-as évek óta látja el az északi országrészt"
      ],
      ro: [
        "Situat în departamentul Mayo-Louti",
        "Extrage calcarul local",
        "Important site industrial în nord",
        "Aprovizionează nordul din anii 1980"
      ],
      en: [
        "Located in the Mayo-Louti department",
        "Mines local limestone",
        "Important industrial site in the north",
        "Has supplied the north since the 1980s"
      ]
    }
  },
  {
    id: "kribi-gas-plant-economic-v2",
    type: "industry",
    parent: "CM-SU",
    coords: [9.9333, 2.9333],
    name: {
      de: "Kribi Gaskraftwerk",
      hu: "Kribi Gázerőmű",
      ro: "Centrala pe Gaz Kribi",
      en: "Kribi Gas Power Plant"
    },
    description: {
      de: "Ein wichtiges thermisches Kraftwerk, das Offshore-Erdgas nutzt, um Strom für das kamerunische Netz zu erzeugen.",
      hu: "Fontos hőerőmű, amely tengeri földgázt használ fel villamos energia termelésére a kameruni hálózat számára.",
      ro: "O centrală termică importantă care utilizează gaz natural offshore pentru a genera energie electrică pentru rețeaua cameruneză.",
      en: "An important thermal power plant that uses offshore natural gas to generate electricity for the Cameroonian grid."
    },
    facts: {
      de: [
        "Leistung von 216 Megawatt",
        "Wird von Kribi Power Development Company betrieben",
        "Reduziert die Abhängigkeit von Wasserkraft",
        "Bezieht Gas aus dem Sanaga-Süd-Feld"
      ],
      hu: [
        "216 megawatt teljesítmény",
        "A Kribi Power Development Company üzemelteti",
        "Csökkenti a vízenergiától való függőséget",
        "Gázt a Sanaga South mezőről kap"
      ],
      ro: [
        "Capacitate de 216 megawați",
        "Operat de Kribi Power Development Company",
        "Reduce dependența de hidroenergie",
        "Obține gaze din zăcământul Sanaga South"
      ],
      en: [
        "Capacity of 216 megawatts",
        "Operated by Kribi Power Development Company",
        "Reduces dependence on hydropower",
        "Gets gas from the Sanaga South field"
      ]
    }
  },
  {
    id: "foumban-bauxite-economic-v2",
    type: "industry",
    parent: "CM-OU",
    coords: [10.9, 5.7333],
    name: {
      de: "Foumban Bauxitlagerstätte",
      hu: "Foumban Bauxitlelőhely",
      ro: "Zăcământul de Bauxită Foumban",
      en: "Foumban Bauxite Deposit"
    },
    description: {
      de: "Eine beträchtliche Bauxitlagerstätte in der Westregion, die Potenzial für den zukünftigen Aluminiumabbau bietet.",
      hu: "Jelentős bauxitlelőhely a Nyugati régióban, amely potenciállal rendelkezik a jövőbeli alumíniumbányászat számára.",
      ro: "Un depozit substanțial de bauxită în Regiunea de Vest, cu potențial pentru viitoarea exploatare a aluminiului.",
      en: "A substantial bauxite deposit in the West Region with potential for future aluminium mining."
    },
    facts: {
      de: [
        "Ressourcen auf Millionen Tonnen geschätzt",
        "Wartet auf Infrastrukturentwicklung",
        "Nahe der historischen Stadt Foumban",
        "Teil von Kameruns Bergbau-Zukunft"
      ],
      hu: [
        "A készleteket több millió tonnára becsülik",
        "Infrastruktúra-fejlesztésre vár",
        "Foumban történelmi városa közelében",
        "Kamerun bányászati jövőjének része"
      ],
      ro: [
        "Resursele sunt estimate la milioane de tone",
        "Așteaptă dezvoltarea infrastructurii",
        "Aproape de orașul istoric Foumban",
        "Parte a viitorului minier al Camerunului"
      ],
      en: [
        "Resources estimated at millions of tonnes",
        "Awaiting infrastructure development",
        "Near the historic city of Foumban",
        "Part of Cameroon's mining future"
      ]
    }
  },
  {
    id: "ngaoundal-bauxite-economic-v2",
    type: "industry",
    parent: "CM-AD",
    coords: [13.25, 6.4667],
    name: {
      de: "Ngaoundal Bauxitlagerstätte",
      hu: "Ngaoundal Bauxitlelőhely",
      ro: "Zăcământul de Bauxită Ngaoundal",
      en: "Ngaoundal Bauxite Deposit"
    },
    description: {
      de: "Teil des riesigen Bauxitkomplexes im Adamaua-Hochland, zusammen mit Minim-Martap eine der reichsten Lagerstätten.",
      hu: "Az Adamawa-fennsík hatalmas bauxitkomplexumának része, a Minim-Martap mellett az egyik leggazdagabb lelőhely.",
      ro: "Parte a imensului complex de bauxită de pe Platoul Adamawa, împreună cu Minim-Martap, unul dintre cele mai bogate zăcăminte.",
      en: "Part of the vast bauxite complex on the Adamawa Plateau, along with Minim-Martap, one of the richest deposits."
    },
    facts: {
      de: [
        "Hoher Aluminiumoxidgehalt von ca. 43%",
        "Zusammen mit Minim-Martap erschlossen",
        "Entwicklung durch Canyon Resources",
        "Strategisch nahe der Camrail-Bahnstrecke"
      ],
      hu: [
        "Magas, kb. 43%-os timföldtartalom",
        "A Minim-Martappal együtt fejlesztik",
        "A Canyon Resources fejleszti",
        "Stratégiailag közel a Camrail vasútvonalhoz"
      ],
      ro: [
        "Conținut ridicat de alumină de aproximativ 43%",
        "Dezvoltat împreună cu Minim-Martap",
        "Dezvoltat de Canyon Resources",
        "Strategic aproape de linia de cale ferată Camrail"
      ],
      en: [
        "High alumina content of approx. 43%",
        "Developed alongside Minim-Martap",
        "Developed by Canyon Resources",
        "Strategically close to the Camrail railway line"
      ]
    }
  },
  {
    id: "camalco-makan-economic-v2",
    type: "industry",
    parent: "CM-AD",
    coords: [13.15, 6.6],
    name: {
      de: "Makan Bauxitprojekt",
      hu: "Makan Bauxitprojekt",
      ro: "Proiectul de Bauxită Makan",
      en: "Makan Bauxite Project"
    },
    description: {
      de: "Das dritte Konzessionsgebiet neben Minim-Martap und Ngaoundal, das die Bauxitressourcen der Adamaua-Region erweitert.",
      hu: "A harmadik koncessziós terület a Minim-Martap és Ngaoundal mellett, amely bővíti az Adamawa régió bauxitkészleteit.",
      ro: "A treia zonă de concesiune alături de Minim-Martap și Ngaoundal, extinzând resursele de bauxită din Regiunea Adamawa.",
      en: "The third concession area alongside Minim-Martap and Ngaoundal, expanding the bauxite resources of the Adamawa Region."
    },
    facts: {
      de: [
        "Verwaltetet von Camalco Cameroon",
        "Direktes Oberflächengestein (Direct Shipping Ore)",
        "Teil eines Projekts mit über 1 Milliarde Tonnen",
        "Wird per Zug zum Hafen transportiert werden"
      ],
      hu: [
        "A Camalco Cameroon kezeli",
        "Közvetlenül szállítható felszíni érc (DSO)",
        "Egy több mint 1 milliárd tonnás projekt része",
        "Vonattal szállítják majd a kikötőbe"
      ],
      ro: [
        "Gestionat de Camalco Camerun",
        "Minereu de suprafață cu transport direct (DSO)",
        "Parte a unui proiect de peste 1 miliard de tone",
        "Va fi transportat cu trenul în port"
      ],
      en: [
        "Managed by Camalco Cameroon",
        "Direct Shipping Ore (DSO) at the surface",
        "Part of a project exceeding 1 billion tonnes",
        "Will be transported by train to the port"
      ]
    }
  },
  {
    id: "sabc-ndokoti-economic-v2",
    type: "industry",
    parent: "CM-LT",
    coords: [9.7333, 4.05],
    name: {
      de: "SABC Brauerei Ndokoti",
      hu: "SABC Sörfőzde Ndokoti",
      ro: "Fabrica de Bere SABC Ndokoti",
      en: "SABC Brewery Ndokoti"
    },
    description: {
      de: "Die größte Brauerei und Abfüllanlage Kameruns im industriellen Herzen von Douala.",
      hu: "Kamerun legnagyobb sörfőzdéje és palackozóüzeme Douala ipari szívében.",
      ro: "Cea mai mare fabrică de bere și de îmbuteliere din Camerun, situată în inima industrială a orașului Douala.",
      en: "Cameroon's largest brewery and bottling plant located in the industrial heart of Douala."
    },
    facts: {
      de: [
        "Im Industriegebiet Ndokoti in Douala",
        "Größter Produktionsstandort der SABC",
        "Versorgt Douala und den Exportmarkt",
        "Produziert Millionen Hektoliter jährlich"
      ],
      hu: [
        "A doualai Ndokoti ipari zónában található",
        "A SABC legnagyobb termelési helyszíne",
        "Doualát és az exportpiacot látja el",
        "Évente több millió hektolitert termel"
      ],
      ro: [
        "În zona industrială Ndokoti din Douala",
        "Cel mai mare sit de producție al SABC",
        "Aprovizionează Douala și piața de export",
        "Produce milioane de hectolitri anual"
      ],
      en: [
        "In the Ndokoti industrial zone of Douala",
        "SABC's largest production site",
        "Supplies Douala and the export market",
        "Produces millions of hectoliters annually"
      ]
    }
  }
];