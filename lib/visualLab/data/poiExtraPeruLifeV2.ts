import type { POI } from "./poi";

export const poiExtraPeruLifeV2: POI[] = [
  {
    id: "parque-de-las-leyendas-life-v2",
    type: "kid-landmark",
    parent: "PE-LMA",
    coords: [-77.0877, -12.0722],
    name: {
      de: "Parque de las Leyendas",
      hu: "Parque de las Leyendas Állatkert",
      ro: "Parque de las Leyendas",
      en: "Parque de las Leyendas Zoo"
    },
    description: {
      de: "Limas wichtigster Zoo und botanischer Garten, der in drei ökologische Zonen Perus unterteilt ist.",
      hu: "Lima legfontosabb állatkertje és botanikus kertje, amely Peru három ökológiai zónáját mutatja be.",
      ro: "Principala grădină zoologică și botanică din Lima, împărțită în trei zone ecologice ale țării.",
      en: "Lima's main zoo and botanical garden, divided into three ecological zones of Peru."
    },
    facts: {
      de: ["Wurde 1964 gegründet.", "Befindet sich auf einem alten archäologischen Komplex."],
      hu: ["1964-ben alapították.", "Egy ősi prehispán régészeti komplexum területén található."],
      ro: ["A fost fondat în anul 1964.", "Se află pe un vechi complex arheologic."],
      en: ["It was founded in 1964.", "Located on an ancient pre-Hispanic archaeological complex."]
    }
  },
  {
    id: "paracas-national-reserve-life-v2",
    type: "animal-habitat",
    parent: "PE-ICA",
    coords: [-76.1666, -14.2500],
    name: {
      de: "Nationalreservat Paracas",
      hu: "Paracas Nemzeti Rezervátum",
      ro: "Rezervația Națională Paracas",
      en: "Paracas National Reserve"
    },
    description: {
      de: "Ein geschütztes Wüstengebiet an der Küste, das vielen Meerestieren und Zugvögeln als wichtiger Lebensraum dient.",
      hu: "Egy védett partmenti sivatagi terület, amely számos tengeri állat és vándormadár fontos élőhelye.",
      ro: "O zonă deșertică protejată pe coastă, care servește drept habitat important pentru multe animale marine.",
      en: "A protected coastal desert area serving as an important habitat for many marine animals and migratory birds."
    },
    facts: {
      de: ["Umfasst 335.000 Hektar.", "Heimat von Humboldt-Pinguinen und Seelöwen."],
      hu: ["335 000 hektár kiterjedésű.", "Humboldt-pingvinek és oroszlánfókák otthona."],
      ro: ["Acoperă o suprafață de 335.000 de hectare.", "Găzduiește pinguini Humboldt și lei de mare."],
      en: ["Covers 335,000 hectares.", "Home to Humboldt penguins and sea lions."]
    }
  },
  {
    id: "salinas-aguada-blanca-life-v2",
    type: "animal-habitat",
    parent: "PE-ARE",
    coords: [-71.3688, -16.0333],
    name: {
      de: "Reservat Salinas und Aguada Blanca",
      hu: "Salinas és Aguada Blanca Rezervátum",
      ro: "Rezervația Salinas și Aguada Blanca",
      en: "Salinas and Aguada Blanca Reserve"
    },
    description: {
      de: "Ein hochgelegenes Schutzgebiet, das gegründet wurde, um die Lebensräume von Vikunjas und Flamingos zu schützen.",
      hu: "Egy magasan fekvő természetvédelmi terület, amelyet a vikunyák és flamingók élőhelyének védelmére hoztak létre.",
      ro: "O arie protejată la mare altitudine, înființată pentru a proteja habitatele vicuñelor și păsărilor flamingo.",
      en: "A high-altitude protected area established to protect the habitats of vicuñas and flamingos."
    },
    facts: {
      de: ["Liegt auf über 4.300 Metern Höhe.", "Wurde 1979 offiziell eingerichtet."],
      hu: ["Több mint 4300 méteres magasságban fekszik.", "1979-ben alapították hivatalosan."],
      ro: ["Este situată la peste 4.300 de metri altitudine.", "A fost înființată oficial în 1979."],
      en: ["Located at an altitude of over 4,300 meters.", "It was officially established in 1979."]
    }
  },
  {
    id: "parque-de-la-papa-life-v2",
    type: "agriculture",
    parent: "PE-CUS",
    coords: [-71.8500, -13.4166],
    name: {
      de: "Kartoffelpark von Pisac",
      hu: "Krumplipark Pisacban",
      ro: "Parcul Cartofilor din Pisac",
      en: "Potato Park of Pisac"
    },
    description: {
      de: "Eine von indigenen Gemeinschaften verwaltete landwirtschaftliche Zone, die über tausend einheimische Kartoffelsorten schützt.",
      hu: "Bennszülött közösségek által irányított mezőgazdasági terület, amely több mint ezer őshonos burgonyafajtát őriz.",
      ro: "O zonă agricolă gestionată de comunitățile indigene care protejează peste o mie de soiuri native de cartofi.",
      en: "An agricultural zone managed by indigenous communities that protects over a thousand native potato varieties."
    },
    facts: {
      de: ["Besteht aus sechs Quechua-Gemeinden.", "Fördert die biologische Vielfalt der Anden."],
      hu: ["Hat kecsua közösségből áll.", "Elősegíti az Andok biológiai sokféleségét."],
      ro: ["Este format din șase comunități Quechua.", "Promovează diversitatea biologică din Anzi."],
      en: ["Consists of six Quechua communities.", "Promotes the biological diversity of the Andes."]
    }
  },
  {
    id: "chanchamayo-coffee-farms-life-v2",
    type: "agriculture",
    parent: "PE-JUN",
    coords: [-75.3166, -11.0500],
    name: {
      de: "Kaffeeplantagen in Chanchamayo",
      hu: "Chanchamayo Kávéültetvények",
      ro: "Plantațiile de Cafea din Chanchamayo",
      en: "Chanchamayo Coffee Farms"
    },
    description: {
      de: "Das Herz der peruanischen Kaffeeproduktion im zentralen Dschungel, wo hochwertige Arabica-Bohnen angebaut werden.",
      hu: "A perui kávétermelés szíve a központi dzsungelben, ahol kiváló minőségű Arabica kávét termesztenek.",
      ro: "Inima producției de cafea peruane din jungla centrală, unde sunt cultivate boabe de cafea Arabica de înaltă calitate.",
      en: "The heart of Peruvian coffee production in the central jungle, where high-quality Arabica beans are grown."
    },
    facts: {
      de: ["Die Region exportiert Kaffee in die ganze Welt.", "Hier wird nachhaltiger Schattenkaffee angebaut."],
      hu: ["A régió az egész világba exportál kávét.", "Itt fenntartható árnyékkávét termesztenek."],
      ro: ["Regiunea exportă cafea în întreaga lume.", "Aici se cultivă cafea de umbră durabilă."],
      en: ["The region exports coffee worldwide.", "Sustainable shade-grown coffee is cultivated here."]
    }
  },
  {
    id: "manglares-de-tumbes-life-v2",
    type: "animal-habitat",
    parent: "PE-TUM",
    coords: [-80.4000, -3.4166],
    name: {
      de: "Mangrovenwälder von Tumbes",
      hu: "Tumbes Mangroveerdők",
      ro: "Mangrovele din Tumbes",
      en: "Tumbes Mangroves Sanctuary"
    },
    description: {
      de: "Ein einzigartiges Ökosystem im Norden Perus, in dem sich Süßwasser mit dem Meer mischt und Krokodile beheimatet sind.",
      hu: "Egyedülálló ökoszisztéma Észak-Peruban, ahol az édesvíz keveredik a tengerrel, és krokodiloknak ad otthont.",
      ro: "Un ecosistem unic în nordul statului Peru, unde apa dulce se amestecă cu marea și găzduiește crocodili.",
      en: "A unique ecosystem in northern Peru where freshwater mixes with the sea, home to American crocodiles."
    },
    facts: {
      de: ["Fläche von 2.972 Hektar.", "Wichtiger Lebensraum für schwarze Muscheln."],
      hu: ["Területe 2972 hektár.", "Fontos élőhely a fekete kagylók számára."],
      ro: ["Are o suprafață de 2.972 de hectare.", "Un habitat important pentru scoicile negre."],
      en: ["Covers an area of 2,972 hectares.", "An important habitat for black shells."]
    }
  },
  {
    id: "allpahuayo-mishana-life-v2",
    type: "animal-habitat",
    parent: "PE-LOR",
    coords: [-73.4166, -3.9166],
    name: {
      de: "Reservat Allpahuayo Mishana",
      hu: "Allpahuayo Mishana Rezervátum",
      ro: "Rezervația Allpahuayo Mishana",
      en: "Allpahuayo Mishana Reserve"
    },
    description: {
      de: "Ein Amazonas-Schutzgebiet nahe Iquitos, berühmt für seine weißen Sandwälder und extrem hohe Artenvielfalt.",
      hu: "Egy amazóniai természetvédelmi terület Iquitos közelében, amely híres fehér homokos erdeiről és nagy fajgazdagságáról.",
      ro: "O arie protejată amazoniană lângă Iquitos, faimoasă pentru pădurile sale de nisip alb și diversitatea ridicată a speciilor.",
      en: "An Amazonian reserve near Iquitos, famous for its white-sand forests and extremely high biodiversity."
    },
    facts: {
      de: ["Schützt seltene endemische Vogelarten.", "Wurde im Jahr 2004 offiziell anerkannt."],
      hu: ["Ritka, endemikus madárfajokat véd.", "2004-ben kapott hivatalos elismerést."],
      ro: ["Protejează specii de păsări endemice rare.", "A fost recunoscută oficial în anul 2004."],
      en: ["Protects rare endemic bird species.", "It was officially recognized in the year 2004."]
    }
  },
  {
    id: "huascaran-flora-fauna-life-v2",
    type: "animal-habitat",
    parent: "PE-ANC",
    coords: [-77.5000, -9.1666],
    name: {
      de: "Nationalpark Huascarán (Flora & Fauna)",
      hu: "Huascarán Nemzeti Park (Flóra & Fauna)",
      ro: "Parcul Național Huascarán (Floră și Faună)",
      en: "Huascarán National Park (Flora & Fauna)"
    },
    description: {
      de: "Neben den Gletschern schützt dieser Nationalpark Puya-Raimondii-Pflanzen, Brillenbären und Andenkondore.",
      hu: "A gleccserek mellett a nemzeti park Puya raimondii növényeket, pápaszemes medvéket és andoki kondorkeselyűket véd.",
      ro: "Pe lângă ghețari, acest parc protejează plantele Puya Raimondii, urșii cu ochelari și condorii andini.",
      en: "In addition to glaciers, this national park protects Puya Raimondii plants, spectacled bears, and Andean condors."
    },
    facts: {
      de: ["Die Puya Raimondii kann bis zu 12 Meter hoch werden.", "Ist ein UNESCO-Weltnaturerbe."],
      hu: ["A Puya raimondii akár 12 méter magasra is megnőhet.", "A park az UNESCO világörökség része."],
      ro: ["Planta Puya Raimondii poate crește până la 12 metri.", "Este un sit al Patrimoniului Natural UNESCO."],
      en: ["The Puya Raimondii can grow up to 12 meters tall.", "It is a UNESCO World Natural Heritage site."]
    }
  },
  {
    id: "megantoni-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "PE-CUS",
    coords: [-72.2500, -12.2500],
    name: {
      de: "Sanktuarium Megantoni",
      hu: "Megantoni Menedékhely",
      ro: "Sanctuarul Megantoni",
      en: "Megantoni Sanctuary"
    },
    description: {
      de: "Eine schwer zugängliche Schutzregion, die eine wichtige Brücke zwischen dem Andenhochland und dem Amazonas-Regenwald bildet.",
      hu: "Egy nehezen megközelíthető védett régió, amely fontos hidat képez az Andok hegyvidéke és az amazonasi esőerdő között.",
      ro: "O zonă protejată greu accesibilă, care formează o punte importantă între zonele muntoase și pădurea amazoniană.",
      en: "A hard-to-reach protected region that forms a vital bridge between the Andean highlands and the Amazon rainforest."
    },
    facts: {
      de: ["Heimat unbekannter Frosch- und Orchideenarten.", "Liegt in der Region Cusco."],
      hu: ["Ismeretlen béka- és orchideafajok otthona.", "Cusco régióban található."],
      ro: ["Adăpostește specii necunoscute de broaște și orhidee.", "Se află în regiunea Cusco."],
      en: ["Home to unknown species of frogs and orchids.", "Located in the Cusco region."]
    }
  },
  {
    id: "hacienda-san-jose-agriculture-life-v2",
    type: "agriculture",
    parent: "PE-ICA",
    coords: [-76.1333, -13.4166],
    name: {
      de: "Hacienda San José Landwirtschaft",
      hu: "Hacienda San José Mezőgazdaság",
      ro: "Hacienda San José Agricultură",
      en: "Hacienda San José Agriculture"
    },
    description: {
      de: "Ein historisches landwirtschaftliches Anwesen in Chincha, das für seine Zuckerrohr- und Baumwollproduktion bekannt war.",
      hu: "Történelmi mezőgazdasági birtok Chinchában, amely cukornád- és pamuttermeléséről volt híres.",
      ro: "O moșie agricolă istorică din Chincha, cunoscută pentru producția sa de trestie de zahăr și bumbac.",
      en: "A historic agricultural estate in Chincha, known for its sugarcane and cotton production."
    },
    facts: {
      de: ["Das Anwesen wurde im 17. Jahrhundert erbaut.", "Verfügt über ausgedehnte Katakomben."],
      hu: ["A birtokot a 17. században építették.", "Kiterjedt katakombákkal rendelkezik."],
      ro: ["Moșia a fost construită în secolul al XVII-lea.", "Dispune de catacombe extinse."],
      en: ["The estate was built in the 17th century.", "Features extensive underground catacombs."]
    }
  },
  {
    id: "zooloogico-huachipa-life-v2",
    type: "kid-landmark",
    parent: "PE-LMA",
    coords: [-76.9000, -12.0166],
    name: {
      de: "Zoo Huachipa",
      hu: "Huachipa Állatkert",
      ro: "Grădina Zoologică Huachipa",
      en: "Huachipa Zoo"
    },
    description: {
      de: "Ein beliebter Tierpark am Rande von Lima, der eine große Sammlung peruanischer und exotischer Tierarten zeigt.",
      hu: "Egy népszerű vadaspark Lima szélén, amely perui és egzotikus állatfajok nagy gyűjteményét mutatja be.",
      ro: "O grădină zoologică populară la marginea orașului Lima, care prezintă o colecție mare de animale.",
      en: "A popular animal park on the outskirts of Lima, showcasing a large collection of Peruvian and exotic animal species."
    },
    facts: {
      de: ["Mitglied der Weltzoo-Organisation (WAZA).", "Hat ein erfolgreiches Zuchtprogramm für Humboldt-Pinguine."],
      hu: ["Az Állatkertek Világszervezetének (WAZA) tagja.", "Sikeres tenyésztési programja van Humboldt-pingvinek számára."],
      ro: ["Membră a Organizației Mondiale a Grădinilor Zoologice.", "Are un program de reproducere de succes pentru pinguini."],
      en: ["Member of the World Association of Zoos and Aquariums.", "Has a successful breeding program for Humboldt penguins."]
    }
  },
  {
    id: "quillabamba-cacao-farms-life-v2",
    type: "agriculture",
    parent: "PE-CUS",
    coords: [-72.7666, -12.8666],
    name: {
      de: "Kakaoplantagen in Quillabamba",
      hu: "Quillabamba Kakaóültetvények",
      ro: "Plantațiile de Cacao din Quillabamba",
      en: "Quillabamba Cacao Farms"
    },
    description: {
      de: "Das Zentrum der peruanischen Kakaoproduktion im Tropenwald von Cusco, das für seine feinwürzigen Edelkakaos geschätzt wird.",
      hu: "A perui kakaótermelés központja Cusco trópusi erdejében, amely finom fűszeres prémium kakaójáról ismert.",
      ro: "Centrul producției de cacao din Peru din pădurea tropicală Cusco, apreciat pentru boabele fine.",
      en: "The center of Peruvian cacao production in the tropical forest of Cusco, prized for its fine-flavor premium cacao."
    },
    facts: {
      de: ["Das Mikroklima ist ideal für Chuncho-Kakao.", "Viele Farmen bieten Agro-Tourismus an."],
      hu: ["A mikroklíma ideális a Chuncho kakaó számára.", "Sok farm kínál agroturizmust a látogatóknak."],
      ro: ["Microclimatul este ideal pentru cacaoa Chuncho.", "Multe ferme oferă activități de agroturism."],
      en: ["The microclimate is ideal for Chuncho cacao.", "Many farms offer agro-tourism activities."]
    }
  },
  {
    id: "cruz-del-condor-life-v2",
    type: "animal-habitat",
    parent: "PE-ARE",
    coords: [-71.9000, -15.6166],
    name: {
      de: "Kondorkreuz (Cruz del Cóndor)",
      hu: "Kondorkereszt (Cruz del Cóndor)",
      ro: "Crucea Condorului",
      en: "Condor Cross (Cruz del Cóndor)"
    },
    description: {
      de: "Ein spektakulärer Aussichtspunkt am Rand der Colca-Schlucht, der der beste Ort ist, um Andenkondore fliegen zu sehen.",
      hu: "Látványos kilátó a Colca-kanyon szélén, amely a legjobb hely az andoki kondorkeselyűk megfigyelésére.",
      ro: "Un punct de observație spectaculos de pe marginea canionului Colca, cel mai bun loc pentru a vedea condorii zburând.",
      en: "A spectacular viewpoint on the edge of the Colca Canyon, the best place to watch Andean condors in flight."
    },
    facts: {
      de: ["Die Kondore haben eine Spannweite von bis zu drei Metern.", "Der Aufwind hilft ihnen beim Gleiten."],
      hu: ["A kondorkeselyűk szárnyfesztávolsága elérheti a három métert.", "A felszálló légáramlatok segítik a vitorlázást."],
      ro: ["Condorii au o anvergură a aripilor de până la trei metri.", "Curenții ascendenți îi ajută să planeze."],
      en: ["The condors have a wingspan of up to three meters.", "Updrafts help them glide effortlessly."]
    }
  },
  {
    id: "circuito-magico-del-agua-life-v2",
    type: "kid-landmark",
    parent: "PE-LMA",
    coords: [-77.0333, -12.0666],
    name: {
      de: "Magischer Wasserrundgang",
      hu: "Varázslatos Vízkörút (Parque de las Aguas)",
      ro: "Circuitul Magic al Apei",
      en: "Magic Water Circuit"
    },
    description: {
      de: "Ein weitläufiger Park in Lima mit zahlreichen interaktiven, farbenfrohen Springbrunnen, die besonders nachts Familien anziehen.",
      hu: "Kiterjedt park Limában, számos interaktív, színes szökőkúttal, amelyek különösen éjszaka vonzzák a családokat.",
      ro: "Un parc vast din Lima, cu numeroase fântâni interactive și colorate care atrag familiile în special noaptea.",
      en: "A sprawling park in Lima featuring numerous interactive, colorful fountains that attract families, especially at night."
    },
    facts: {
      de: ["Hält den Guinness-Weltrekord für den größten Springbrunnenkomplex.", "Wurde 2007 eröffnet."],
      hu: ["A Guinness-rekordok könyvében a legnagyobb szökőkút komplexumként szerepel.", "2007-ben nyitották meg."],
      ro: ["Deține recordul mondial Guinness pentru cel mai mare complex de fântâni.", "A fost inaugurat în 2007."],
      en: ["Holds the Guinness World Record for the largest fountain complex.", "It was officially opened in 2007."]
    }
  },
  {
    id: "matses-national-reserve-life-v2",
    type: "animal-habitat",
    parent: "PE-LOR",
    coords: [-72.9166, -6.1666],
    name: {
      de: "Nationalreservat Matsés",
      hu: "Matsés Nemzeti Rezervátum",
      ro: "Rezervația Națională Matsés",
      en: "Matsés National Reserve"
    },
    description: {
      de: "Ein abgelegenes und unberührtes Amazonas-Schutzgebiet an der Grenze zu Brasilien, in dem seltene Primatenarten leben.",
      hu: "Egy eldugott és érintetlen amazóniai természetvédelmi terület a brazil határon, ahol ritka főemlősfajok élnek.",
      ro: "O arie protejată izolată la granița cu Brazilia, unde trăiesc specii rare de primate și alte animale amazoniene.",
      en: "A remote and pristine Amazonian reserve on the border with Brazil, home to rare primate species."
    },
    facts: {
      de: ["Schützt das Land des indigenen Matsés-Volkes.", "Bekannt für seine hohe Amphibienvielfalt."],
      hu: ["A bennszülött matsés nép földjét védi.", "Magas kétéltű diverzitásáról ismert."],
      ro: ["Protejează pământurile poporului indigen Matsés.", "Cunoscut pentru diversitatea sa mare de amfibieni."],
      en: ["Protects the lands of the indigenous Matsés people.", "Known for its high amphibian diversity."]
    }
  },
  {
    id: "granja-porcon-life-v2",
    type: "kid-landmark",
    parent: "PE-CAJ",
    coords: [-78.6333, -7.0333],
    name: {
      de: "Bauernhof Porcón",
      hu: "Porcón Farm",
      ro: "Ferma Porcón",
      en: "Porcón Farm (Granja Porcón)"
    },
    description: {
      de: "Ein landwirtschaftliches Projekt und Zoo in den Anden von Cajamarca, das einen Kiefernwald aufforstete und Tiere beherbergt.",
      hu: "Mezőgazdasági projekt és állatkert a Cajamarca-i Andokban, amely fenyőerdőt telepített, és számos állatot tart.",
      ro: "Un proiect agricol și o grădină zoologică care a reîmpădurit o pădure de pini și adăpostește animale andine.",
      en: "An agricultural project and zoo in the Andes of Cajamarca that reforested a pine forest and houses various animals."
    },
    facts: {
      de: ["Gilt als erfolgreiches Kooperativen-Modell.", "Mehr als 10.000 Hektar wurden mit Kiefern bepflanzt."],
      hu: ["Sikeres szövetkezeti modellként tartják számon.", "Több mint 10 ezer hektárt ültettek be fenyővel."],
      ro: ["Este considerat un model cooperativ de succes.", "Peste 10.000 de hectare au fost plantate cu pini."],
      en: ["Considered a highly successful cooperative model.", "More than 10,000 hectares were planted with pine trees."]
    }
  },
  {
    id: "tacama-vineyard-life-v2",
    type: "agriculture",
    parent: "PE-ICA",
    coords: [-75.7166, -13.9666],
    name: {
      de: "Weingut Tacama",
      hu: "Tacama Szőlőbirtok",
      ro: "Podgoria Tacama",
      en: "Tacama Vineyard"
    },
    description: {
      de: "Eines der ältesten Weingüter Südamerikas, das Wein und Pisco in der fruchtbaren Ica-Oase produziert.",
      hu: "Dél-Amerika egyik legrégebbi szőlőbirtoka, amely bort és piscot termel a termékeny Ica-oázisban.",
      ro: "Una dintre cele mai vechi podgorii din America de Sud, producând vin și pisco în oaza fertilă Ica.",
      en: "One of the oldest vineyards in South America, producing wine and pisco in the fertile Ica oasis."
    },
    facts: {
      de: ["Gegründet in den 1540er Jahren.", "Pisco ist das peruanische Nationalgetränk."],
      hu: ["Az 1540-es években alapították.", "A pisco a perui nemzeti ital alapanyaga."],
      ro: ["Fondată în anii 1540.", "Pisco este băutura națională din Peru."],
      en: ["Established in the 1540s.", "Pisco is the national grape brandy of Peru."]
    }
  },
  {
    id: "tingo-maria-banana-farms-life-v2",
    type: "agriculture",
    parent: "PE-HUC",
    coords: [-76.0000, -9.3000],
    name: {
      de: "Bananenplantagen von Tingo María",
      hu: "Tingo María Banánültetvények",
      ro: "Plantațiile de Banane din Tingo María",
      en: "Tingo María Banana Farms"
    },
    description: {
      de: "Große tropische Landwirtschaftsflächen, die vom Amazonas-Klima profitieren, um Plátanos und tropische Früchte anzubauen.",
      hu: "Nagy kiterjedésű trópusi mezőgazdasági területek, amelyek az amazóniai klímát kihasználva főzőbanánt és más trópusi gyümölcsöket termesztenek.",
      ro: "Zone agricole tropicale extinse care beneficiază de clima amazoniană pentru a cultiva banane și alte fructe tropicale.",
      en: "Large tropical agricultural areas that benefit from the Amazonian climate to grow plantains and tropical fruits."
    },
    facts: {
      de: ["Tingo María ist das 'Tor zum Amazonas'.", "Landwirtschaft ist der Hauptwirtschaftszweig der Region."],
      hu: ["Tingo María az 'Amazónia kapuja'.", "A mezőgazdaság a régió legfontosabb gazdasági ágazata."],
      ro: ["Tingo María este poarta către Amazon.", "Agricultura este principalul sector economic al regiunii."],
      en: ["Tingo María is known as the Gateway to the Amazon.", "Agriculture is the main economic sector of the region."]
    }
  },
  {
    id: "santuario-de-amancay-life-v2",
    type: "animal-habitat",
    parent: "PE-LMA",
    coords: [-76.8333, -12.2500],
    name: {
      de: "Naturschutzgebiet der Amancay",
      hu: "Amancay Természetvédelmi Terület",
      ro: "Rezervația Amancay",
      en: "Amancay Sanctuary"
    },
    description: {
      de: "Ein Hügelgebiet nahe Pachacámac, das für die gelbe Amancay-Blume bekannt ist, die nur kurz im Winter erblüht.",
      hu: "Pachacámac közeli dombvidék, amely a sárga amancay virágról ismert, amely csak télen nyílik rövid ideig.",
      ro: "O zonă deluroasă lângă Pachacámac, cunoscută pentru floarea galbenă amancay, care înflorește scurt timp în timpul iernii.",
      en: "A hilly area near Pachacámac, known for the yellow amancay flower, which blooms briefly during the winter."
    },
    facts: {
      de: ["Die Amancay-Blume ist das Symbol von Lima.", "Das Gebiet leidet unter städtischem Druck."],
      hu: ["Az amancay virág Lima szimbóluma.", "A terület a városi terjeszkedés nyomása alatt áll."],
      ro: ["Floarea amancay este simbolul orașului Lima.", "Zona se confruntă cu presiunea expansiunii urbane."],
      en: ["The amancay flower is the traditional symbol of Lima.", "The area faces pressure from urban expansion."]
    }
  },
  {
    id: "lomas-de-lachay-life-v2",
    type: "animal-habitat",
    parent: "PE-LMA",
    coords: [-77.3666, -11.3666],
    name: {
      de: "Nationalreservat Lomas de Lachay",
      hu: "Lomas de Lachay Nemzeti Rezervátum",
      ro: "Rezervația Națională Lomas de Lachay",
      en: "Lomas de Lachay National Reserve"
    },
    description: {
      de: "Eine nebelabhängige Öko-Oase in der Wüste nahe Lima, die in der feuchten Jahreszeit ergrünt und Tiere anzieht.",
      hu: "Egy ködtől függő öko-oázis a Lima melletti sivatagban, amely a nedves évszakban kizöldül és állatokat vonz.",
      ro: "O oază ecologică dependentă de ceață, care înverzește în sezonul umed și atrage diverse animale în deșert.",
      en: "A fog-dependent ecological oasis in the desert near Lima that turns green during the humid season and attracts wildlife."
    },
    facts: {
      de: ["Beherbergt Andenfüchse und Wüstenbussarde.", "Ein Phänomen, das 'Lomas' (Nebel-Oasen) genannt wird."],
      hu: ["Andoki rókáknak és sivatagi ölyveknek ad otthont.", "Ezt a jelenséget 'Lomas' (ködoázis) néven ismerik."],
      ro: ["Găzduiește vulpi andine și șoimi de deșert.", "Un fenomen cunoscut sub numele de 'Lomas' (oaze de ceață)."],
      en: ["Home to Andean foxes and desert buzzards.", "A phenomenon known as 'Lomas' (fog oases)."]
    }
  },
  {
    id: "bosque-de-pomac-life-v2",
    type: "animal-habitat",
    parent: "PE-LAM",
    coords: [-79.7666, -6.4833],
    name: {
      de: "Historisches Schutzgebiet Bosque de Pómac",
      hu: "Bosque de Pómac Történelmi Védett Terület",
      ro: "Sanctuarul Istoric Bosque de Pómac",
      en: "Bosque de Pómac Historical Sanctuary"
    },
    description: {
      de: "Ein dichter Trockenwald an der Nordküste, der nicht nur eine wichtige Flora und Fauna schützt, sondern auch antike Pyramiden.",
      hu: "Sűrű száraz erdő az északi parton, amely nemcsak fontos növény- és állatvilágot, hanem ősi piramisokat is véd.",
      ro: "O pădure uscată pe coasta de nord, care protejează flora și fauna, dar și piramidele antice ale culturilor pre-incașe.",
      en: "A dense dry forest on the northern coast that protects important flora and fauna as well as ancient pyramids."
    },
    facts: {
      de: ["Einer der größten verbliebenen Johannisbrotbaumwälder.", "Beherbergt endemische Vogelarten."],
      hu: ["Az egyik legnagyobb fennmaradt szentjánoskenyérfa-erdő.", "Endemikus madárfajoknak ad otthont."],
      ro: ["Una dintre cele mai mari păduri de roșcovi rămase.", "Adăpostește specii endemice de păsări."],
      en: ["One of the largest remaining carob tree forests.", "Home to endemic dry-forest bird species."]
    }
  },
  {
    id: "el-angolo-hunting-reserve-life-v2",
    type: "animal-habitat",
    parent: "PE-PIU",
    coords: [-80.7500, -4.3333],
    name: {
      de: "Jagdreservat El Angolo",
      hu: "El Angolo Vadászrezervátum",
      ro: "Rezervația de Vânătoare El Angolo",
      en: "El Angolo Hunting Reserve"
    },
    description: {
      de: "Ein streng reguliertes Schutzgebiet im trockenen Nordwesten Perus, das der Erhaltung des Weißwedelhirsches dient.",
      hu: "Egy szigorúan szabályozott védett terület Peru száraz északnyugati részén, amely a fehérfarkú szarvas megőrzését szolgálja.",
      ro: "O arie protejată strict reglementată, dedicată conservării cerbului cu coadă albă.",
      en: "A strictly regulated protected area in northwestern Peru dedicated to the conservation of the white-tailed deer."
    },
    facts: {
      de: ["Liegt in der Region Piura.", "Die Jagd wird nur außerhalb der Fortpflanzungszeit gestattet."],
      hu: ["Piura régióban található.", "A vadászat csak a szaporodási időszakon kívül engedélyezett."],
      ro: ["Este situată în regiunea Piura.", "Vânătoarea este permisă doar în afara sezonului de reproducere."],
      en: ["Located in the Piura region.", "Regulated hunting is only permitted outside the breeding season."]
    }
  },
  {
    id: "taricaya-rescue-center-life-v2",
    type: "animal-habitat",
    parent: "PE-MDD",
    coords: [-69.0500, -12.5666],
    name: {
      de: "Tierrettungszentrum Taricaya",
      hu: "Taricaya Állatmentő Központ",
      ro: "Centrul de Salvare Taricaya",
      en: "Taricaya Rescue Center"
    },
    description: {
      de: "Ein Rehabilitationszentrum im Amazonasgebiet, das illegal gehandelte Tiere aufnimmt und sie auf die Auswilderung vorbereitet.",
      hu: "Egy rehabilitációs központ az Amazonas-medencében, amely illegálisan kereskedett állatokat fogad és készít fel a szabadon engedésre.",
      ro: "Un centru de reabilitare în regiunea Amazonului care primește animale traficate ilegal pentru a le elibera ulterior.",
      en: "A rehabilitation center in the Amazon basin that takes in illegally trafficked animals and prepares them for release."
    },
    facts: {
      de: ["Das Projekt verfügt über einen Canopy-Walkway.", "Wichtig für den Schutz von Brüllaffen und Jaguaren."],
      hu: ["A projektnek van egy lombkoronasétánya is.", "Fontos a bőgőmajmok és jaguárok védelmében."],
      ro: ["Proiectul include un pod suspendat prin coronament.", "Important pentru protecția maimuțelor urlătoare și a jaguarilor."],
      en: ["The project features a canopy walkway.", "Crucial for the protection of howler monkeys and jaguars."]
    }
  },
  {
    id: "cueva-de-las-lechuzas-life-v2",
    type: "animal-habitat",
    parent: "PE-HUC",
    coords: [-76.0166, -9.3166],
    name: {
      de: "Höhle der Eulen",
      hu: "Baglyok Barlangja",
      ro: "Peștera Bufnițelor",
      en: "Cave of the Owls"
    },
    description: {
      de: "Eine beeindruckende Karsthöhle im Nationalpark Tingo María, in der eine große Kolonie von Fettschwalmen (Guácharos) lebt.",
      hu: "Lenyűgöző karsztbarlang a Tingo María Nemzeti Parkban, ahol a zsírfecskék (guácharos) nagy kolóniája él.",
      ro: "O peșteră carstică impresionantă în Parcul Național Tingo María, unde trăiește o colonie mare de păsări guácharo.",
      en: "An impressive karst cave in Tingo María National Park, home to a large colony of oilbirds (guácharos)."
    },
    facts: {
      de: ["Die Vögel orientieren sich in der Dunkelheit durch Echoortung.", "Die Höhle ist für Touristen zugänglich."],
      hu: ["A madarak sötétben echolokációval tájékozódnak.", "A barlang a turisták számára is látogatható."],
      ro: ["Păsările navighează în întuneric folosind ecolocația.", "Peștera este accesibilă turiștilor."],
      en: ["The birds navigate in the dark using echolocation.", "The cave is partially accessible to tourists."]
    }
  },
  {
    id: "mala-valley-orchards-life-v2",
    type: "agriculture",
    parent: "PE-LMA",
    coords: [-76.6333, -12.6500],
    name: {
      de: "Obstgärten des Mala-Tals",
      hu: "Mala-völgyi Gyümölcsösök",
      ro: "Livezile din Valea Mala",
      en: "Mala Valley Orchards"
    },
    description: {
      de: "Ein fruchtbares Flusstal südlich von Lima, das weithin für seine köstlichen Äpfel und peruanischen Tamales bekannt ist.",
      hu: "Limától délre fekvő termékeny folyóvölgy, amely széles körben ismert finom almájáról és perui tamales-éről.",
      ro: "O vale fertilă la sud de Lima, renumită pentru merele sale delicioase și preparatele tradiționale tamales.",
      en: "A fertile river valley south of Lima, widely known for its delicious apples and Peruvian tamales."
    },
    facts: {
      de: ["Das Tal ist ein beliebtes Wochenendausflugsziel.", "Bietet auch Weinbau und Pisco-Destillerien."],
      hu: ["A völgy népszerű hétvégi kirándulóhely.", "Szőlőtermesztést és pisco lepárlókat is kínál."],
      ro: ["Valea este o destinație populară pentru weekend.", "Include podgorii și distilerii de pisco."],
      en: ["The valley is a popular weekend getaway destination.", "Also features vineyards and pisco distilleries."]
    }
  },
  {
    id: "trujillo-botanical-garden-life-v2",
    type: "kid-landmark",
    parent: "PE-LAL",
    coords: [-79.0333, -8.1166],
    name: {
      de: "Botanischer Garten von Trujillo",
      hu: "Trujillo Botanikus Kert",
      ro: "Grădina Botanică din Trujillo",
      en: "Trujillo Botanical Garden"
    },
    description: {
      de: "Ein ruhiger städtischer Garten im Herzen von Trujillo, der heimische Pflanzen und kleine Tiere wie Pfauen beherbergt.",
      hu: "Nyugodt városi kert Trujillo szívében, amely őshonos növényeknek és kisebb állatoknak, például páváknak ad otthont.",
      ro: "O grădină urbană liniștită în inima orașului Trujillo, care găzduiește plante native și animale mici, precum păuni.",
      en: "A tranquil urban garden in the heart of Trujillo that houses native plants and small animals like peacocks."
    },
    facts: {
      de: ["Gilt als die grüne Lunge der Stadt.", "Bietet Umweltbildung für Kinder."],
      hu: ["A város zöld tüdejének tartják.", "Környezeti oktatást kínál gyerekeknek."],
      ro: ["Este considerat plămânul verde al orașului.", "Oferă educație de mediu pentru copii."],
      en: ["Considered the green lung of the city.", "Provides environmental education for children."]
    }
  },
  {
    id: "viru-asparagus-farms-life-v2",
    type: "agriculture",
    parent: "PE-LAL",
    coords: [-78.7500, -8.4166],
    name: {
      de: "Spargelfarmen von Virú",
      hu: "Virú Spárgafarmok",
      ro: "Fermele de Sparanghel din Virú",
      en: "Virú Asparagus Farms"
    },
    description: {
      de: "Ein hochmodernes Agrargebiet an der Küste, das Peru zu einem der weltweit größten Exporteure von Spargel gemacht hat.",
      hu: "Egy ultramodern tengerparti mezőgazdasági terület, amely Perut a világ egyik legnagyobb spárgaexportőrévé tette.",
      ro: "O zonă agricolă modernă pe coastă care a transformat Peru în unul dintre cei mai mari exportatori de sparanghel din lume.",
      en: "A state-of-the-art agricultural coastal area that has made Peru one of the world's top exporters of asparagus."
    },
    facts: {
      de: ["Nutzt fortschrittliche Wüstenbewässerungstechnologien.", "Der Spargel wird ganzjährig geerntet."],
      hu: ["Fejlett sivatagi öntözési technológiákat alkalmaz.", "A spárgát egész évben szüretelik."],
      ro: ["Folosește tehnologii avansate de irigare în deșert.", "Sparanghelul este recoltat tot anul."],
      en: ["Utilizes advanced desert irrigation technologies.", "Asparagus is harvested year-round."]
    }
  },
  {
    id: "puno-quinoa-fields-life-v2",
    type: "agriculture",
    parent: "PE-PUN",
    coords: [-70.0166, -15.8333],
    name: {
      de: "Quinoa-Felder in Puno",
      hu: "Puno Quinoaföldek",
      ro: "Câmpurile de Quinoa din Puno",
      en: "Puno Quinoa Fields"
    },
    description: {
      de: "Die windgepeitschten Hochebenen rund um den Titicacasee sind das traditionelle Anbaugebiet des Anden-Superfoods Quinoa.",
      hu: "A Titicaca-tó körüli szeles fennsíkok az andoki szuperélelmiszer, a quinoa hagyományos termesztővidékei.",
      ro: "Podișurile bătute de vânt din jurul Lacului Titicaca sunt zona tradițională de cultivare a superalimentului andin quinoa.",
      en: "The windswept high plateaus around Lake Titicaca are the traditional growing region for the Andean superfood quinoa."
    },
    facts: {
      de: ["Quinoa war bereits eine heilige Pflanze der Inkas.", "Wächst auf fast 4.000 Metern Höhe."],
      hu: ["A quinoa már az inkák szent növénye volt.", "Majdnem 4000 méteres magasságban terem."],
      ro: ["Quinoa era o plantă sacră a incașilor.", "Crește la o altitudine de aproape 4.000 de metri."],
      en: ["Quinoa was considered a sacred plant by the Incas.", "Grows at an altitude of nearly 4,000 meters."]
    }
  },
  {
    id: "machupicchu-butterfly-house-life-v2",
    type: "kid-landmark",
    parent: "PE-CUS",
    coords: [-72.5333, -13.1500],
    name: {
      de: "Schmetterlingshaus Machupicchu",
      hu: "Machupicchu Lepkeház",
      ro: "Casa Fluturilor din Machupicchu",
      en: "Machupicchu Butterfly House"
    },
    description: {
      de: "Ein Bildungszentrum und Schutzgebiet für Schmetterlinge in der Nähe der berühmten Ruinen, das den Lebenszyklus lokaler Arten zeigt.",
      hu: "Lepkék oktatási központja és védett területe a híres romok közelében, amely bemutatja a helyi fajok életciklusát.",
      ro: "Un centru educațional și un sanctuar pentru fluturi aproape de faimoasele ruine, care prezintă ciclul de viață al speciilor locale.",
      en: "An educational center and sanctuary for butterflies near the famous ruins, showing the life cycle of local species."
    },
    facts: {
      de: ["Besucher können die Metamorphose live beobachten.", "Fördert den Erhalt des Nebelwald-Ökosystems."],
      hu: ["A látogatók élőben figyelhetik meg a metamorfózist.", "Támogatja a köderdő ökoszisztémájának megőrzését."],
      ro: ["Vizitatorii pot observa metamorfoza în direct.", "Promovează conservarea ecosistemului de pădure tropicală montană."],
      en: ["Visitors can watch the metamorphosis live.", "Promotes the conservation of the cloud forest ecosystem."]
    }
  },
  {
    id: "ausangate-alpaca-farms-life-v2",
    type: "agriculture",
    parent: "PE-CUS",
    coords: [-71.2166, -13.7833],
    name: {
      de: "Alpaka-Herden am Ausangate",
      hu: "Ausangate Alpakacsordák",
      ro: "Turmele de Alpaca de la Ausangate",
      en: "Ausangate Alpaca Herds"
    },
    description: {
      de: "Die hochgelegenen Weiden rund um den heiligen Berg Ausangate sind das Herzstück der peruanischen Alpaka-Zucht.",
      hu: "A szent hegy, az Ausangate körüli magaslati legelők a perui alpakatenyésztés központja.",
      ro: "Pășunile la mare altitudine din jurul muntelui sacru Ausangate sunt centrul creșterii de alpaca din Peru.",
      en: "The high-altitude pastures surrounding the sacred Ausangate mountain are the heartland of Peruvian alpaca breeding."
    },
    facts: {
      de: ["Alpakawolle ist weltweit für ihre Weichheit geschätzt.", "Die Zucht ist tief in der Quechua-Kultur verwurzelt."],
      hu: ["Az alpaka gyapjút világszerte nagyra értékelik puhasága miatt.", "A tenyésztés mélyen gyökerezik a kecsua kultúrában."],
      ro: ["Lâna de alpaca este apreciată global pentru catifelarea sa.", "Creșterea alpacalelor este profund înrădăcinată în cultura Quechua."],
      en: ["Alpaca wool is globally prized for its softness.", "The breeding tradition is deeply rooted in Quechua culture."]
    }
  }
];
