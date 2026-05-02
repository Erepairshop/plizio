import type { POI } from "./poi";

export const poiExtraCongoLifeV2: POI[] = [
  {
    id: "lossi-gorilla-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "CG-13",
    coords: [14.80, 0.00],
    name: {
      de: "Lossi-Gorilla-Schutzgebiet",
      hu: "Lossi Gorilla-szentély",
      ro: "Sanctuarul de Gorile Lossi",
      en: "Lossi Gorilla Sanctuary"
    },
    description: {
      de: "Ein bedeutendes Schutzgebiet für Flachlandgorillas, das in enger Zusammenarbeit mit der lokalen Bevölkerung verwaltet wird.",
      hu: "A síkvidéki gorillák jelentős védett területe, amelyet a helyi közösséggel szoros együttműködésben kezelnek.",
      ro: "O zonă protejată importantă pentru gorilele de câmpie, gestionată în strânsă colaborare cu comunitățile locale.",
      en: "A significant protected area for lowland gorillas, managed in close cooperation with the local population."
    },
    facts: {
      de: ["Heimat von Westlichen Flachlandgorillas", "Erstes gemeindebasiertes Reservat im Kongo"],
      hu: ["Nyugati síkvidéki gorillák élőhelye", "Az első közösségi alapú rezervátum Kongóban"],
      ro: ["Habitat al gorilelor de câmpie vestice", "Prima rezervație comunitară din Congo"],
      en: ["Home to Western Lowland Gorillas", "First community-based reserve in Congo"]
    }
  },
  {
    id: "tchimpounga-chimpanzee-life-v2",
    type: "animal-habitat",
    parent: "CG-5",
    coords: [11.90, -4.50],
    name: {
      de: "Tchimpounga Schimpansen-Reservat",
      hu: "Tchimpounga Csimpánz-rezervátum",
      ro: "Rezervația de Cimpanzei Tchimpounga",
      en: "Tchimpounga Chimpanzee Sanctuary"
    },
    description: {
      de: "Das größte Schimpansen-Waisenhaus in Afrika, gegründet vom Jane-Goodall-Institut für gerettete Jungtiere.",
      hu: "Afrika legnagyobb csimpánz-árvaháza, amelyet a Jane Goodall Intézet alapított mentett fiatal állatok számára.",
      ro: "Cel mai mare orfelinat de cimpanzei din Africa, fondat de Institutul Jane Goodall pentru puii salvați.",
      en: "The largest chimpanzee orphanage in Africa, founded by the Jane Goodall Institute for rescued young animals."
    },
    facts: {
      de: ["Geleitet vom Jane-Goodall-Institut", "Schutz für verwaiste Schimpansen"],
      hu: ["A Jane Goodall Intézet vezeti", "Árva csimpánzok védelme"],
      ro: ["Condus de Institutul Jane Goodall", "Protecție pentru cimpanzeii orfani"],
      en: ["Managed by the Jane Goodall Institute", "Protection for orphaned chimpanzees"]
    }
  },
  {
    id: "brazzaville-zoo-life-v2",
    type: "animal-habitat",
    parent: "CG-BZA",
    coords: [15.282, -4.265],
    name: {
      de: "Brazzaville Zoo",
      hu: "Brazzaville-i Állatkert",
      ro: "Grădina Zoologică Brazzaville",
      en: "Brazzaville Zoo"
    },
    description: {
      de: "Der zentrale Zoo der Hauptstadt, der einheimische Tierarten zeigt und ein beliebtes Ziel für Familien ist.",
      hu: "A főváros központi állatkertje, amely őshonos fajokat mutat be, és a családok kedvelt célpontja.",
      ro: "Grădina zoologică centrală a capitalei, care prezintă specii native și este o destinație populară pentru familii.",
      en: "The central zoo of the capital, displaying native species and serving as a popular destination for families."
    },
    facts: {
      de: ["Mitten in der Hauptstadt gelegen", "Beherbergt Affen und Reptilien"],
      hu: ["A főváros közepén található", "Majmoknak és hüllőknek ad otthont"],
      ro: ["Situată în mijlocul capitalei", "Găzduiește maimuțe și reptile"],
      en: ["Located in the heart of the capital", "Houses monkeys and reptiles"]
    }
  },
  {
    id: "brazzaville-botanical-garden-life-v2",
    type: "kid-landmark",
    parent: "CG-BZA",
    coords: [15.275, -4.270],
    name: {
      de: "Botanischer Garten von Brazzaville",
      hu: "Brazzaville-i Botanikus Kert",
      ro: "Grădina Botanică din Brazzaville",
      en: "Brazzaville Botanical Garden"
    },
    description: {
      de: "Eine grüne Oase in der Stadt, die die Vielfalt der tropischen Flora des Kongos präsentiert.",
      hu: "Zöld oázis a városban, amely Kongó trópusi flórájának sokszínűségét mutatja be.",
      ro: "O oază verde în oraș care prezintă diversitatea florei tropicale din Congo.",
      en: "A green oasis in the city showcasing the diversity of Congo's tropical flora."
    },
    facts: {
      de: ["Gegründet während der Kolonialzeit", "Ideal für Naturspaziergänge"],
      hu: ["A gyarmati időkben alapították", "Ideális természetjáráshoz"],
      ro: ["Fondată în perioada colonială", "Ideală pentru plimbări în natură"],
      en: ["Founded during the colonial era", "Ideal for nature walks"]
    }
  },
  {
    id: "nkayi-sugar-fields-life-v2",
    type: "agriculture",
    parent: "CG-11",
    coords: [13.29, -4.18],
    name: {
      de: "Zuckerrohrfelder von Nkayi",
      hu: "Nkayi cukornádültetvények",
      ro: "Câmpurile de trestie de zahăr din Nkayi",
      en: "Nkayi Sugar Cane Fields"
    },
    description: {
      de: "Ausgedehnte Plantagen rund um Nkayi, die das Zentrum der kongolesischen Zuckerproduktion bilden.",
      hu: "Hatalmas ültetvények Nkayi körül, amelyek a kongói cukortermelés központját alkotják.",
      ro: "Plantații vaste în jurul orașului Nkayi, care formează centrul producției de zahăr din Congo.",
      en: "Extensive plantations around Nkayi, forming the heart of Congolese sugar production."
    },
    facts: {
      de: ["Größtes Agrargebiet der Region", "Wichtigster Wirtschaftszweig von Nkayi"],
      hu: ["A régió legnagyobb mezőgazdasági területe", "Nkayi legfontosabb gazdasági ága"],
      ro: ["Cea mai mare zonă agricolă din regiune", "Cea mai importantă ramură economică din Nkayi"],
      en: ["Largest agricultural area in the region", "Main economic sector of Nkayi"]
    }
  },
  {
    id: "mossaka-rice-fields-life-v2",
    type: "agriculture",
    parent: "CG-8",
    coords: [16.20, -1.23],
    name: {
      de: "Reisfelder von Mossaka",
      hu: "Mossaka rizsföldjei",
      ro: "Câmpurile de orez din Mossaka",
      en: "Mossaka Rice Fields"
    },
    description: {
      de: "Fruchtbare Überschwemmungsgebiete am Kongo-Fluss, die für den Reisanbau genutzt werden.",
      hu: "Termékeny ártéri területek a Kongó-folyó mentén, amelyeket rizstermesztésre használnak.",
      ro: "Câmpii inundabile fertile de-a lungul fluviului Congo, utilizate pentru cultivarea orezului.",
      en: "Fertile floodplains along the Congo River used for rice cultivation."
    },
    facts: {
      de: ["Nutzung der jährlichen Fluten", "Wichtige Nahrungsquelle der Region"],
      hu: ["Az éves áradások kihasználása", "A régió fontos élelemforrása"],
      ro: ["Utilizarea inundațiilor anuale", "Sursă importantă de hrană pentru regiune"],
      en: ["Uses annual floods for irrigation", "Important food source for the region"]
    }
  },
  {
    id: "sangha-cocoa-plantations-life-v2",
    type: "agriculture",
    parent: "CG-13",
    coords: [16.00, 1.50],
    name: {
      de: "Kakaoplantagen von Sangha",
      hu: "Sangha kakaóültetvények",
      ro: "Plantațiile de cacao din Sangha",
      en: "Sangha Cocoa Plantations"
    },
    description: {
      de: "In den Regenwäldern der Sangha-Region gelegene Plantagen, die hochwertigen Kakao für den Export produzieren.",
      hu: "A Sangha-régió esőerdőiben található ültetvények, amelyek kiváló minőségű kakaót termelnek exportra.",
      ro: "Plantații situate în pădurile tropicale din regiunea Sangha, care produc cacao de înaltă calitate pentru export.",
      en: "Plantations located in the rainforests of the Sangha region, producing high-quality cocoa for export."
    },
    facts: {
      de: ["Wachsende Exportindustrie", "Anbau unter Schattenbäumen"],
      hu: ["Növekvő exportipar", "Árnyékoló fák alatti termesztés"],
      ro: ["Industrie de export în creștere", "Cultivare sub arbori de umbră"],
      en: ["Growing export industry", "Cultivation under shade trees"]
    }
  },
  {
    id: "ouesso-palm-oil-life-v2",
    type: "agriculture",
    parent: "CG-13",
    coords: [16.05, 1.61],
    name: {
      de: "Palmölplantagen von Ouésso",
      hu: "Ouésso pálmaolaj-ültetvények",
      ro: "Plantațiile de ulei de palmier din Ouésso",
      en: "Ouésso Palm Oil Plantations"
    },
    description: {
      de: "Großflächige Ölpalmen-Anbaugebiete im Norden des Landes, die für die lokale Versorgung und den Handel wichtig sind.",
      hu: "Nagy kiterjedésű olajpálma-termesztő területek az ország északi részén, amelyek fontosak a helyi ellátás szempontjából.",
      ro: "Zone vaste de cultivare a palmierului de ulei în nordul țării, importante pentru aprovizionarea locală.",
      en: "Large-scale oil palm cultivation areas in the north of the country, vital for local supply and trade."
    },
    facts: {
      de: ["Traditionelle und moderne Gewinnung", "Bedeutendes Handelsgut in Ouésso"],
      hu: ["Hagyományos és modern kinyerés", "Jelentős kereskedelmi áru Ouéssóban"],
      ro: ["Extracție tradițională și modernă", "Produs comercial important în Ouésso"],
      en: ["Traditional and modern extraction", "Significant trade commodity in Ouésso"]
    }
  },
  {
    id: "madingou-cassava-farms-life-v2",
    type: "agriculture",
    parent: "CG-11",
    coords: [13.55, -4.15],
    name: {
      de: "Maniok-Anbaugebiete von Madingou",
      hu: "Madingou maniókamezők",
      ro: "Câmpurile de manioc din Madingou",
      en: "Madingou Cassava Farms"
    },
    description: {
      de: "Zahlreiche kleinbäuerliche Betriebe in der Bouenza-Region, die Maniok als Hauptnahrungsmittel anbauen.",
      hu: "Számos kisbirtokos gazdaság a Bouenza-régióban, ahol a maniokot mint fő élelmiszert termesztik.",
      ro: "Numeroase ferme mici din regiunea Bouenza care cultivă manioc ca aliment de bază.",
      en: "Numerous smallholder farms in the Bouenza region cultivating cassava as a staple food."
    },
    facts: {
      de: ["Hauptnahrungsmittel der Bevölkerung", "Basis für die Herstellung von Chikwangue"],
      hu: ["A lakosság fő tápláléka", "A Chikwangue készítésének alapja"],
      ro: ["Alimentul de bază al populației", "Baza pentru producerea Chikwangue"],
      en: ["Staple food for the population", "Basis for making Chikwangue"]
    }
  },
  {
    id: "niari-coffee-plantations-life-v2",
    type: "agriculture",
    parent: "CG-9",
    coords: [12.50, -3.50],
    name: {
      de: "Kaffeeplantagen von Niari",
      hu: "Niari kávéültetvények",
      ro: "Plantațiile de cafea din Niari",
      en: "Niari Coffee Plantations"
    },
    description: {
      de: "In den kühleren Höhenlagen der Niari-Region wird hochwertiger Robusta-Kaffee angebaut.",
      hu: "A Niari-régió hűvösebb magaslatain kiváló minőségű Robusta kávét termesztenek.",
      ro: "În zonele mai înalte și răcoroase din regiunea Niari se cultivă cafea Robusta de înaltă calitate.",
      en: "High-quality Robusta coffee is grown in the cooler highlands of the Niari region."
    },
    facts: {
      de: ["Anbau von Robusta-Kaffee", "Wichtiger Exportartikel der Region"],
      hu: ["Robusta kávé termesztése", "A régió fontos exportcikke"],
      ro: ["Cultivarea cafelei Robusta", "Articol important de export al regiunii"],
      en: ["Cultivation of Robusta coffee", "Important export item for the region"]
    }
  },
  {
    id: "bateke-tobacco-fields-life-v2",
    type: "agriculture",
    parent: "CG-14",
    coords: [15.50, -2.50],
    name: {
      de: "Tabakfelder von Batéké",
      hu: "Batéké dohányföldek",
      ro: "Câmpurile de tutun din Batéké",
      en: "Batéké Tobacco Fields"
    },
    description: {
      de: "Die sandigen Böden des Batéké-Plateaus eignen sich hervorragend für den Anbau von Tabak.",
      hu: "A Batéké-fennsík homokos talaja kiválóan alkalmas dohánytermesztésre.",
      ro: "Solurile nisipoase ale Platoului Batéké sunt excelente pentru cultivarea tutunului.",
      en: "The sandy soils of the Batéké Plateau are excellent for growing tobacco."
    },
    facts: {
      de: ["Spezialisierter Anbau auf dem Plateau", "Traditioneller Wirtschaftszweig"],
      hu: ["Speciális termesztés a fennsíkon", "Hagyományos gazdasági ág"],
      ro: ["Cultivare specializată pe platou", "Ramură economică tradițională"],
      en: ["Specialized cultivation on the plateau", "Traditional economic sector"]
    }
  },
  {
    id: "brazzaville-children-park-life-v2",
    type: "kid-landmark",
    parent: "CG-BZA",
    coords: [15.285, -4.260],
    name: {
      de: "Brazzaville Vergnügungspark",
      hu: "Brazzaville-i vidámpark",
      ro: "Parcul de distracții Brazzaville",
      en: "Brazzaville Amusement Park"
    },
    description: {
      de: "Ein kleiner Freizeit- und Spielpark in der Hauptstadt, der Unterhaltung für Kinder bietet.",
      hu: "Egy kis szabadidő- és játszópark a fővárosban, amely szórakozást nyújt a gyerekeknek.",
      ro: "Un mic parc de distracții și joacă în capitală, care oferü divertisment pentru copii.",
      en: "A small recreational and play park in the capital offering entertainment for children."
    },
    facts: {
      de: ["Beliebt für Wochenendausflüge", "Spielplätze und Karussells"],
      hu: ["Népszerű hétvégi kirándulóhely", "Játszóterek és körhinták"],
      ro: ["Popular pentru excursii de weekend", "Locuri de joacă și caruseluri"],
      en: ["Popular for weekend outings", "Playgrounds and carousels"]
    }
  },
  {
    id: "mbeli-bai-watch-life-v2",
    type: "animal-habitat",
    parent: "CG-13",
    coords: [16.40, 2.30],
    name: {
      de: "Mbeli Bai Beobachtungsposten",
      hu: "Mbeli Bai megfigyelőpont",
      ro: "Punctul de observare Mbeli Bai",
      en: "Mbeli Bai Observation Point"
    },
    description: {
      de: "Eine natürliche Waldlichtung im Nouabalé-Ndoki-Nationalpark, berühmt für die Beobachtung von Gorillas und Waldelefanten.",
      hu: "Természetes erdei tisztás a Nouabalé-Ndoki Nemzeti Parkban, amely híres a gorillák és erdei elefántok megfigyeléséről.",
      ro: "O poiană naturală în Parcul Național Nouabalé-Ndoki, celebră pentru observarea gorilelor și a elefanților de pădure.",
      en: "A natural forest clearing in Nouabalé-Ndoki National Park, famous for observing gorillas and forest elephants."
    },
    facts: {
      de: ["Bester Ort für Tierbeobachtungen", "Zieht viele Waldelefanten an"],
      hu: ["A legjobb hely vadvilág megfigyelésére", "Sok erdei elefántot vonz"],
      ro: ["Cel mai bun loc pentru observarea faunei", "Atrage mulți elefanți de pădure"],
      en: ["Best spot for wildlife viewing", "Attracts many forest elephants"]
    }
  },
  {
    id: "conkouati-gorilla-orphanage-life-v2",
    type: "animal-habitat",
    parent: "CG-5",
    coords: [11.45, -3.95],
    name: {
      de: "Gorilla-Waisenhaus von Conkouati",
      hu: "Conkouati Gorilla-árvaház",
      ro: "Orfelinatul de gorile din Conkouati",
      en: "Conkouati Gorilla Orphanage"
    },
    description: {
      de: "Ein Schutzzentrum innerhalb des Conkouati-Douli-Nationalparks, das verwaiste Gorillas auf ihre Rückkehr in die Wildnis vorbereitet.",
      hu: "A Conkouati-Douli Nemzeti Parkon belüli védelmi központ, amely felkészíti az árva gorillákat a vadonba való visszatérésre.",
      ro: "Un centru de protecție în cadrul Parcului Național Conkouati-Douli, care pregătește gorilele orfane pentru întoarcerea în sălbăticie.",
      en: "A protection center within Conkouati-Douli National Park preparing orphaned gorillas for return to the wild."
    },
    facts: {
      de: ["Fokus auf Auswilderung", "Teil eines großen Nationalparks"],
      hu: ["A visszavadításra összpontosít", "Egy nagy nemzeti park része"],
      ro: ["Focus pe reintroducerea în sălbăticie", "Parte a unui mare parc național"],
      en: ["Focus on rewilding", "Part of a large national park"]
    }
  },
  {
    id: "abala-cattle-ranches-life-v2",
    type: "agriculture",
    parent: "CG-14",
    coords: [15.30, -0.60],
    name: {
      de: "Viehzuchtgebiete von Abala",
      hu: "Abala állattenyésztési körzetei",
      ro: "Zonele de creștere a animalelor din Abala",
      en: "Abala Cattle Ranches"
    },
    description: {
      de: "Die offenen Savannen um Abala sind bekannt für die Rinderzucht und versorgen weite Teile des Nordens mit Fleisch.",
      hu: "Az Abala körüli nyílt szavannák az állattenyésztésről ismertek, és az északi rész nagy részét ellátják hússal.",
      ro: "Savanele deschise din jurul orașului Abala sunt cunoscute pentru creșterea vitelor, aprovizionând nordul cu carne.",
      en: "The open savannas around Abala are known for cattle ranching, supplying much of the north with meat."
    },
    facts: {
      de: ["Zentrum der Fleischproduktion", "Große Weideflächen"],
      hu: ["A hústermelés központja", "Nagy legelőterületek"],
      ro: ["Centrul producției de carne", "Suprafețe mari de pășunat"],
      en: ["Center of meat production", "Large grazing areas"]
    }
  },
  {
    id: "mayombe-banana-groves-life-v2",
    type: "agriculture",
    parent: "CG-5",
    coords: [12.20, -4.30],
    name: {
      de: "Bananenhaine von Mayombe",
      hu: "Mayombe-i banánligetek",
      ro: "Livezile de banani din Mayombe",
      en: "Mayombe Banana Groves"
    },
    description: {
      de: "In den feuchten Tälern des Mayombe-Gebirges gedeihen Bananen und Kochbananen unter idealen Bedingungen.",
      hu: "A Mayombe-hegység nedves völgyeiben a banán és a főzőbanán ideális körülmények között fejlődik.",
      ro: "În văile umede ale munților Mayombe, bananele și pătlaginele cresc în condiții ideale.",
      en: "In the humid valleys of the Mayombe mountains, bananas and plantains thrive under ideal conditions."
    },
    facts: {
      de: ["Wichtige regionale Versorgungsquelle", "Tropisches Mikroklima"],
      hu: ["Fontos regionális ellátási forrás", "Trópusi mikroklíma"],
      ro: ["Sursă importantă de aprovizionare regională", "Microclimat tropical"],
      en: ["Important regional supply source", "Tropical microclimate"]
    }
  },
  {
    id: "likouala-parrot-habitats-life-v2",
    type: "animal-habitat",
    parent: "CG-7",
    coords: [17.50, 2.50],
    name: {
      de: "Papageien-Habitat von Likouala",
      hu: "Likouala papagáj-élőhelyek",
      ro: "Habitatul papagalilor din Likouala",
      en: "Likouala Parrot Habitats"
    },
    description: {
      de: "Die dichten Sumpfwälder von Likouala sind die Heimat des Graupapageis und anderer exotischer Vogelarten.",
      hu: "Likouala sűrű mocsári erdői a szürkepapagáj és más egzotikus madárfajok otthonai.",
      ro: "Pădurile dese de mlaștină din Likouala sunt casa papagalului gri și a altor specii de păsări exotice.",
      en: "The dense swamp forests of Likouala are home to the African Grey Parrot and other exotic bird species."
    },
    facts: {
      de: ["Heimat der Graupapageien", "Unberührte Sumpfwaldlandschaft"],
      hu: ["A szürkepapagájok otthona", "Érintetlen mocsári erdővidék"],
      ro: ["Casa papagalilor gri", "Peisaj de pădure de mlaștină neatins"],
      en: ["Home to African Grey Parrots", "Pristine swamp forest landscape"]
    }
  },
  {
    id: "pool-peanut-fields-life-v2",
    type: "agriculture",
    parent: "CG-12",
    coords: [15.00, -3.50],
    name: {
      de: "Erdnussfelder von Pool",
      hu: "Pool-régió földimogyoró-mezői",
      ro: "Câmpurile de arahide din Pool",
      en: "Pool Peanut Fields"
    },
    description: {
      de: "Die Region Pool ist bekannt für ihren intensiven Erdnussanbau, der die Märkte der nahen Hauptstadt Brazzaville versorgt.",
      hu: "A Pool-régió intenzív földimogyoró-termesztéséről ismert, amely a közeli Brazzaville piacait látja el.",
      ro: "Regiunea Pool este cunoscută pentru cultivarea intensivă a arahidelor, aprovizionând piețele din Brazzaville.",
      en: "The Pool region is known for intensive peanut cultivation, supplying the markets of nearby Brazzaville."
    },
    facts: {
      de: ["Hauptanbaugebiet für Erdnüsse", "Wichtig für die lokale Ernährung"],
      hu: ["Fő földimogyoró-termesztő vidék", "Fontos a helyi étrendben"],
      ro: ["Principala zonă de cultivare a arahidelor", "Importantă pentru dieta locală"],
      en: ["Main peanut cultivation area", "Important for the local diet"]
    }
  },
  {
    id: "odzala-elephant-path-life-v2",
    type: "animal-habitat",
    parent: "CG-8",
    coords: [14.90, 0.50],
    name: {
      de: "Wald-Elephanten-Pfad von Odzala",
      hu: "Odzala erdei elefánt-ösvény",
      ro: "Calea elefanților de pădure din Odzala",
      en: "Odzala Forest Elephant Path"
    },
    description: {
      de: "Ein Netzwerk von Pfaden im Odzala-Kokoua-Nationalpark, das von Waldelefanten auf ihrer Suche nach Nahrung und Wasser genutzt wird.",
      hu: "Ösvényhálózat az Odzala-Kokoua Nemzeti Parkban, amelyet az erdei elefántok használnak táplálékkeresés közben.",
      ro: "O rețea de poteci în Parcul Național Odzala-Kokoua, utilizată de elefanții de pădure în căutarea hranei.",
      en: "A network of trails in Odzala-Kokoua National Park used by forest elephants in their search for food and water."
    },
    facts: {
      de: ["Beobachtungsort für Waldelefanten", "Teil eines UNESCO-Welterbes"],
      hu: ["Erdei elefántok megfigyelőhelye", "UNESCO Világörökség része"],
      ro: ["Loc de observare a elefanților", "Parte a Patrimoniului Mondial UNESCO"],
      en: ["Spot for observing forest elephants", "Part of a UNESCO World Heritage site"]
    }
  },
  {
    id: "pointe-indienne-turtles-life-v2",
    type: "animal-habitat",
    parent: "CG-16",
    coords: [11.80, -4.70],
    name: {
      de: "Meeresschildkröten-Nistplätze von Pointe-Indienne",
      hu: "Pointe-Indienne tengeri teknős fészkelőhelyek",
      ro: "Locurile de cuibărit ale țestoaselor de la Pointe-Indienne",
      en: "Pointe-Indienne Turtle Nesting Sites"
    },
    description: {
      de: "Strände in der Nähe von Pointe-Noire, an denen Meeresschildkröten zur Eiablage an Land kommen.",
      hu: "Pointe-Noire közeli strandok, ahol a tengeri teknősök partra szállnak tojást rakni.",
      ro: "Plaje din apropierea orașului Pointe-Noire unde țestoasele marine vin să depună ouăle.",
      en: "Beaches near Pointe-Noire where sea turtles come ashore to lay their eggs."
    },
    facts: {
      de: ["Schutz von Lederschildkröten", "Saisonaler Nistplatz"],
      hu: ["Kérgesteknősök védelme", "Szezonális fészkelőhely"],
      ro: ["Protecția țestoaselor pieloase", "Loc de cuibărit sezonier"],
      en: ["Protection of Leatherback turtles", "Seasonal nesting site"]
    }
  }
];
