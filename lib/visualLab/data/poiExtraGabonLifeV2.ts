import type { POI } from "./poi";

export const poiExtraGabonLifeV2: POI[] = [
  {
    id: "langoue-bai-life-v2",
    type: "animal-habitat",
    parent: "GA-6",
    coords: [12.5, 0.2],
    name: {
      de: "Langoué Baï",
      hu: "Langoué Baï",
      ro: "Langoué Baï",
      en: "Langoué Baï"
    },
    description: {
      de: "Eine natürliche Waldlichtung im Ivindo-Nationalpark, die für ihre hohe Konzentration an Waldelefanten und Gorillas bekannt ist.",
      hu: "Természetes erdei tisztás az Ivindo Nemzeti Parkban, amely az erdei elefántok és gorillák magas koncentrációjáról ismert.",
      ro: "O poiană naturală în Parcul Național Ivindo, cunoscută pentru concentrația mare de elefanți de pădure și gorile.",
      en: "A natural forest clearing in Ivindo National Park, famous for its high concentration of forest elephants and gorillas."
    },
    facts: {
      de: ["Salzhaltige Lichtung", "Elefanten-Beobachtung"],
      hu: ["Sós vizű tisztás", "Elefántmegfigyelés"],
      ro: ["Poiană sărată", "Observarea elefanților"],
      en: ["Saline clearing", "Elephant watching"]
    }
  },
  {
    id: "moukalaba-doudou-gorilla-life-v2",
    type: "animal-habitat",
    parent: "GA-8",
    coords: [10.5, -2.5],
    name: {
      de: "Moukalaba-Doudou Gorillahabitat",
      hu: "Moukalaba-Doudou gorilla élőhely",
      ro: "Habitatul gorilelor Moukalaba-Doudou",
      en: "Moukalaba-Doudou Gorilla Habitat"
    },
    description: {
      de: "Ein bedeutendes Schutzgebiet für Primaten, insbesondere für Westliche Flachlandgorillas und Schimpansen im Süden Gabuns.",
      hu: "Jelentős főemlős-védelmi terület, különösen a nyugati síkvidéki gorillák és csimpánzok számára Dél-Gabonban.",
      ro: "O zonă importantă de protecție a primatelor, în special pentru gorilele de câmpie vestice și cimpanzei în sudul Gabonului.",
      en: "A significant primate protection area, especially for Western Lowland Gorillas and chimpanzees in southern Gabon."
    },
    facts: {
      de: ["Hohe Primatendichte", "Ökotourismus-Zentrum"],
      hu: ["Magas főemlős-sűrűség", "Ökoturisztikai központ"],
      ro: ["Densitate mare de primate", "Centru de ecoturism"],
      en: ["High primate density", "Ecotourism hub"]
    }
  },
  {
    id: "iguela-reserve-life-v2",
    type: "animal-habitat",
    parent: "GA-7",
    coords: [9.3, -1.8],
    name: {
      de: "Iguela Wildreservat",
      hu: "Iguela vadvédelmi terület",
      ro: "Rezervația de vânătoare Iguela",
      en: "Iguela Game Reserve"
    },
    description: {
      de: "Ein küstennahes Reservat, in dem Elefanten und Flusspferde oft am Strand und in den Lagunen zu sehen sind.",
      hu: "Tengerparti rezervátum, ahol az elefántok és vízilovak gyakran láthatók a strandon és a lagúnákban.",
      ro: "O rezervație de coastă unde elefanții și hipopotamii pot fi văzuți adesea pe plajă și în lagune.",
      en: "A coastal reserve where elephants and hippos are often seen on the beach and in the lagoons."
    },
    facts: {
      de: ["Strandbesuchende Elefanten", "Reiche Lagunenfauna"],
      hu: ["Strandoló elefántok", "Gazdag lagúna-fauna"],
      ro: ["Elefanți pe plajă", "Faună bogată în lagune"],
      en: ["Beach-visiting elephants", "Rich lagoon fauna"]
    }
  },
  {
    id: "akanda-birds-life-v2",
    type: "animal-habitat",
    parent: "GA-1",
    coords: [9.5, 0.5],
    name: {
      de: "Akanda Vogelschutzgebiet",
      hu: "Akanda madárvédelmi terület",
      ro: "Zona de protecție a păsărilor Akanda",
      en: "Akanda Bird Sanctuary"
    },
    description: {
      de: "Wichtige Raststätte für Zehntausende von Zugvögeln in den ausgedehnten Mangrovenwäldern nördlich von Libreville.",
      hu: "Fontos pihenőhely költöző madarak tízezrei számára a Libreville-től északra fekvő kiterjedt mangroveerdőkben.",
      ro: "Un punct important de popas pentru zeci de mii de păsări migratoare în pădurile vaste de mangrove de la nord de Libreville.",
      en: "Important stopover for tens of thousands of migratory birds in the extensive mangroves north of Libreville."
    },
    facts: {
      de: ["Zugvogel-Hotspot", "Mangroven-Ökosystem"],
      hu: ["Vándormadár-lelőhely", "Mangrove-ökoszisztéma"],
      ro: ["Hotspot pentru păsări", "Ecosistem de mangrove"],
      en: ["Migratory bird hotspot", "Mangrove ecosystem"]
    }
  },
  {
    id: "pongara-turtles-life-v2",
    type: "animal-habitat",
    parent: "GA-1",
    coords: [9.3, 0.1],
    name: {
      de: "Pongara Schildkrötenstrand",
      hu: "Pongara teknőspart",
      ro: "Plaja țestoaselor Pongara",
      en: "Pongara Turtle Beach"
    },
    description: {
      de: "Ein entscheidender Nistplatz für Lederschildkröten, die jedes Jahr an die Sandstrände des Pongara-Nationalparks kommen.",
      hu: "A kérgesteknősök döntő fontosságú fészkelőhelye, amelyek minden évben a Pongara Nemzeti Park homokos partjaira érkeznek.",
      ro: "Un loc crucial de cuibărit pentru țestoasele luth, care vin în fiecare an pe plajele de nisip din Parcul Național Pongara.",
      en: "A crucial nesting site for leatherback turtles, which come to the sandy beaches of Pongara National Park every year."
    },
    facts: {
      de: ["Schildkröten-Nistplatz", "Saisonale Beobachtung"],
      hu: ["Teknős-fészkelőhely", "Szezonális megfigyelés"],
      ro: ["Cuibăritul țestoaselor", "Observare sezonieră"],
      en: ["Turtle nesting site", "Seasonal watching"]
    }
  },
  {
    id: "mwagna-park-life-v2",
    type: "animal-habitat",
    parent: "GA-6",
    coords: [13.8, 0.6],
    name: {
      de: "Mwagna Wildpark",
      hu: "Mwagna vadaspark",
      ro: "Parcul de animale Mwagna",
      en: "Mwagna Wilderness"
    },
    description: {
      de: "Ein abgelegenes Wildnisgebiet im Osten Gabuns, das unberührte Lebensräume für Flachlandgorillas und Waldelefanten bietet.",
      hu: "Elszigetelt vadon Kelet-Gabonban, amely érintetlen élőhelyet biztosít a síkvidéki gorilláknak és erdei elefántoknak.",
      ro: "O zonă sălbatică izolată în estul Gabonului, care oferă habitate neatinse pentru gorilele de câmpie și elefanții de pădure.",
      en: "A remote wilderness area in eastern Gabon, providing pristine habitats for lowland gorillas and forest elephants."
    },
    facts: {
      de: ["Unberührte Wildnis", "Geringer menschlicher Einfluss"],
      hu: ["Érintetlen vadon", "Alacsony emberi hatás"],
      ro: ["Sălbăticie neatinsă", "Impact uman redus"],
      en: ["Pristine wilderness", "Low human impact"]
    }
  },
  {
    id: "belinga-elephants-life-v2",
    type: "animal-habitat",
    parent: "GA-6",
    coords: [13.2, 1.1],
    name: {
      de: "Belinga Elefantenregion",
      hu: "Belinga elefánt-régió",
      ro: "Regiunea elefanților Belinga",
      en: "Belinga Elephant Region"
    },
    description: {
      de: "Die dichten Wälder rund um Belinga beherbergen eine der bedeutendsten Populationen von Waldelefanten in Zentralafrika.",
      hu: "A Belinga körüli sűrű erdők Közép-Afrika egyik legjelentősebb erdei elefántállományának adnak otthont.",
      ro: "Pădurile dese din jurul Belinga adăpostesc una dintre cele mai importante populații de elefanți de pădure din Africa Centrală.",
      en: "The dense forests around Belinga host one of the most significant populations of forest elephants in Central Africa."
    },
    facts: {
      de: ["Dichter Regenwald", "Wichtiger Korridor"],
      hu: ["Sűrű esőerdő", "Fontos folyosó"],
      ro: ["Pădure tropicală deasă", "Coridor important"],
      en: ["Dense rainforest", "Important corridor"]
    }
  },
  {
    id: "ivindo-hippos-life-v2",
    type: "animal-habitat",
    parent: "GA-6",
    coords: [12.8, 0.1],
    name: {
      de: "Ivindo Flusspferd-Pools",
      hu: "Ivindo víziló-medencék",
      ro: "Bazinele cu hipopotami de pe Ivindo",
      en: "Ivindo Hippo Pools"
    },
    description: {
      de: "Ruhige Abschnitte des Ivindo-Flusses, in denen große Gruppen von Flusspferden den Tag verbringen.",
      hu: "Az Ivindo folyó nyugodt szakaszai, ahol nagy vízilócsoportok töltik a napot.",
      ro: "Secțiuni liniștite ale râului Ivindo, unde grupuri mari de hipopotami își petrec ziua.",
      en: "Quiet stretches of the Ivindo River where large groups of hippos spend the day."
    },
    facts: {
      de: ["Flussfauna", "Sichtungsgarantie"],
      hu: ["Folyami fauna", "Garantált észlelés"],
      ro: ["Faună fluvială", "Observare garantată"],
      en: ["River fauna", "Sightings guaranteed"]
    }
  },
  {
    id: "loango-beach-fauna-life-v2",
    type: "animal-habitat",
    parent: "GA-7",
    coords: [9.5, -2.2],
    name: {
      de: "Loango Strandtiere",
      hu: "Loango tengerparti állatvilág",
      ro: "Fauna de pe plaja Loango",
      en: "Loango Beach Fauna"
    },
    description: {
      de: "Weltweit einzigartig wandern hier Waldelefanten, Büffel und sogar Gorillas direkt an den Atlantikstrand.",
      hu: "A világon egyedülálló módon erdei elefántok, bivalyok és néha gorillák is közvetlenül az atlanti-óceáni partra merészkednek.",
      ro: "Unic în lume, elefanții de pădure, bivolii și chiar gorilele se plimbă direct pe plaja Atlanticului.",
      en: "Unique in the world, forest elephants, buffaloes, and even gorillas roam directly onto the Atlantic beach here."
    },
    facts: {
      de: ["Surfende Flusspferde", "Strand-Elefanten"],
      hu: ["Szörföző vízilovak", "Parti elefántok"],
      ro: ["Hipopotami în valuri", "Elefanți pe plajă"],
      en: ["Surfing hippos", "Beach elephants"]
    }
  },
  {
    id: "bakoumba-primates-life-v2",
    type: "animal-habitat",
    parent: "GA-2",
    coords: [13.0, -1.8],
    name: {
      de: "Bakoumba Primatenzentrum",
      hu: "Bakoumba főemlős központ",
      ro: "Centrul de primate Bakoumba",
      en: "Bakoumba Primate Center"
    },
    description: {
      de: "Ein Zentrum für den Schutz und die Erforschung von Primaten, insbesondere Mandrills und Gorillas, in der Nähe von Bakoumba.",
      hu: "A főemlősök, különösen a mandrillok és gorillák védelmére és kutatására szolgáló központ Bakoumba közelében.",
      ro: "Un centru pentru protecția și cercetarea primatelor, în special mandrili și gorile, lângă Bakoumba.",
      en: "A center for the protection and research of primates, especially mandrills and gorillas, near Bakoumba."
    },
    facts: {
      de: ["Mandrill-Forschung", "Wiederansiedlung"],
      hu: ["Mandrill-kutatás", "Visszatelepítés"],
      ro: ["Cercetarea mandrililor", "Reintroducere"],
      en: ["Mandrill research", "Reintroduction"]
    }
  },
  {
    id: "bitam-rubber-life-v2",
    type: "agriculture",
    parent: "GA-9",
    coords: [11.5, 2.1],
    name: {
      de: "Bitam Kautschukplantagen",
      hu: "Bitam kaucsukültetvények",
      ro: "Plantațiile de cauciuc din Bitam",
      en: "Bitam Rubber Plantations"
    },
    description: {
      de: "Große Kautschukbaum-Plantagen im Norden Gabuns, die eine wichtige Säule der lokalen Agrarwirtschaft darstellen.",
      hu: "Nagy kaucsukfa-ültetvények Gabon északi részén, amelyek a helyi agrárgazdaság fontos pillérei.",
      ro: "Plantații mari de arbori de cauciuc în nordul Gabonului, reprezentând un pilon important al economiei agricole locale.",
      en: "Large rubber tree plantations in northern Gabon, representing a key pillar of the local agricultural economy."
    },
    facts: {
      de: ["Latex-Produktion", "Nord-Gabun Wirtschaft"],
      hu: ["Latex-termelés", "Észak-Gabon gazdasága"],
      ro: ["Producție de latex", "Economia Gabunului de Nord"],
      en: ["Latex production", "North Gabon economy"]
    }
  },
  {
    id: "ntoum-vegetables-life-v2",
    type: "agriculture",
    parent: "GA-1",
    coords: [9.7, 0.4],
    name: {
      de: "Ntoum Gemüsegärten",
      hu: "Ntoum zöldségkertek",
      ro: "Grădinile de legume din Ntoum",
      en: "Ntoum Market Gardens"
    },
    description: {
      de: "Die fruchtbaren Gebiete um Ntoum dienen als 'Gemüsegarten' für die nahegelegene Hauptstadt Libreville.",
      hu: "A Ntoum környéki termékeny területek a közeli főváros, Libreville 'konyhakertjeként' szolgálnak.",
      ro: "Zonele fertile din jurul Ntoum servesc ca „grădină de legume” pentru capitala apropiată, Libreville.",
      en: "The fertile areas around Ntoum serve as the 'market garden' for the nearby capital, Libreville."
    },
    facts: {
      de: ["Frischgemüse-Quelle", "Stadtnah"],
      hu: ["Friss zöldségforrás", "Városközeli"],
      ro: ["Sursă de legume proaspete", "Aproape de oraș"],
      en: ["Fresh vegetable source", "Urban proximity"]
    }
  },
  {
    id: "woleu-ntem-cocoa-life-v2",
    type: "agriculture",
    parent: "GA-9",
    coords: [11.6, 1.5],
    name: {
      de: "Woleu-Ntem Kakaogärten",
      hu: "Woleu-Ntem kakaókertek",
      ro: "Grădinile de cacao din Woleu-Ntem",
      en: "Woleu-Ntem Cocoa Gardens"
    },
    description: {
      de: "Traditionelle kleinbäuerliche Kakaoplantagen in der nördlichsten Provinz, bekannt für hochwertige Bohnen.",
      hu: "Hagyományos kisüzemi kakaóültetvények a legészakibb tartományban, amelyek kiváló minőségű babjaikról ismertek.",
      ro: "Plantații tradiționale de cacao de mici dimensiuni în cea mai nordică provincie, cunoscute pentru boabe de înaltă calitate.",
      en: "Traditional smallholder cocoa plantations in the northernmost province, known for high-quality beans."
    },
    facts: {
      de: ["Exportgut Kakaobohnen", "Kleinfarmen"],
      hu: ["Kakaóbab export", "Kisgazdaságok"],
      ro: ["Export de cacao", "Ferme mici"],
      en: ["Cocoa bean export", "Smallholder farms"]
    }
  },
  {
    id: "ogooue-lolo-coffee-life-v2",
    type: "agriculture",
    parent: "GA-5",
    coords: [12.8, -1.3],
    name: {
      de: "Ogooué-Lolo Kaffeegärten",
      hu: "Ogooué-Lolo kávékertek",
      ro: "Grădinile de cafea din Ogooué-Lolo",
      en: "Ogooué-Lolo Coffee Gardens"
    },
    description: {
      de: "Hügelige Kaffeeplantagen in der zentralen Region Ogooué-Lolo, die ein kühleres Klima für den Anbau nutzen.",
      hu: "Dombvidéki kávéültetvények Ogooué-Lolo központi régiójában, amelyek a hűvösebb klímát használják ki a termesztéshez.",
      ro: "Plantații de cafea deluroase în regiunea centrală Ogooué-Lolo, care profită de climatul mai răcoros pentru cultivare.",
      en: "Hilly coffee plantations in the central Ogooué-Lolo region, utilizing the cooler climate for cultivation."
    },
    facts: {
      de: ["Robusta-Kaffee", "Hügellandbau"],
      hu: ["Robuszta kávé", "Dombvidéki gazdálkodás"],
      ro: ["Cafea Robusta", "Agricultură pe dealuri"],
      en: ["Robusta coffee", "Hill farming"]
    }
  },
  {
    id: "nyanga-cattle-life-v2",
    type: "agriculture",
    parent: "GA-8",
    coords: [10.9, -2.9],
    name: {
      de: "Nyanga Viehzucht-Weiden",
      hu: "Nyanga állattenyésztő legelők",
      ro: "Pășunile pentru vite din Nyanga",
      en: "Nyanga Cattle Pastures"
    },
    description: {
      de: "Die weiten Savannen der Nyanga-Region sind das Zentrum der Rinderzucht in Gabun.",
      hu: "Nyanga régió tágas szavannái Gabon állattenyésztési központjai.",
      ro: "Savanele vaste din regiunea Nyanga sunt centrul creșterii vitelor în Gabon.",
      en: "The vast savannas of the Nyanga region are the heart of cattle ranching in Gabon."
    },
    facts: {
      de: ["Rinderzucht", "Savannenlandschaft"],
      hu: ["Szarvasmarha-tenyésztés", "Szavanna-táj"],
      ro: ["Creșterea vitelor", "Peisaj de savană"],
      en: ["Cattle ranching", "Savanna landscape"]
    }
  },
  {
    id: "lambarene-fishery-life-v2",
    type: "agriculture",
    parent: "GA-3",
    coords: [10.2, -0.7],
    name: {
      de: "Lambaréné Fischereizentrum",
      hu: "Lambaréné halászati központ",
      ro: "Centrul de pescuit Lambaréné",
      en: "Lambaréné Fishery Hub"
    },
    description: {
      de: "Ein bedeutender Standort für die Binnenfischerei am Ogooué-Fluss und den umliegenden Seen.",
      hu: "A belvízi halászat jelentős helyszíne az Ogooué folyón és a környező tavakon.",
      ro: "O locație importantă pentru pescuitul interior pe râul Ogooué și lacurile din jur.",
      en: "A major location for inland fishing on the Ogooué River and surrounding lakes."
    },
    facts: {
      de: ["Süßwasserfisch", "Flusshandel"],
      hu: ["Édesvízi hal", "Folyami kereskedelem"],
      ro: ["Pește de apă dulce", "Comerț fluvial"],
      en: ["Freshwater fish", "River trade"]
    }
  },
  {
    id: "lebamba-rice-life-v2",
    type: "agriculture",
    parent: "GA-4",
    coords: [11.5, -2.2],
    name: {
      de: "Lebamba Reisfelder",
      hu: "Lebamba rizsföldek",
      ro: "Câmpurile de orez din Lebamba",
      en: "Lebamba Rice Fields"
    },
    description: {
      de: "Landwirtschaftliche Projekte in der Ngounié-Provinz, die sich auf den großflächigen Anbau von Reis konzentrieren.",
      hu: "Ngounié tartomány mezőgazdasági projektjei, amelyek a nagyméretű rizstermesztésre összpontosítanak.",
      ro: "Proiecte agricole în provincia Ngounié, axate pe cultivarea orezului la scară largă.",
      en: "Agricultural projects in the Ngounié province focused on large-scale rice cultivation."
    },
    facts: {
      de: ["Getreideanbau", "Ernährungssicherheit"],
      hu: ["Gabonatermesztés", "Élelmiszerbiztonság"],
      ro: ["Cultivarea cerealelor", "Securitate alimentară"],
      en: ["Cereal cultivation", "Food security"]
    }
  },
  {
    id: "mpassa-reserve-life-v2",
    type: "animal-habitat",
    parent: "GA-2",
    coords: [14.1, -1.7],
    name: {
      de: "Mpassa Wildreservat",
      hu: "Mpassa vadvédelmi terület",
      ro: "Rezervația de vânătoare Mpassa",
      en: "Mpassa Game Reserve"
    },
    description: {
      de: "Ein Schutzgebiet in der Provinz Haut-Ogooué, das für die Wiederansiedlung von im Inland ausgestorbenen Arten genutzt wird.",
      hu: "Haut-Ogooué tartomány egyik védett területe, amelyet a belföldön kihalt fajok visszatelepítésére használnak.",
      ro: "O zonă protejată în provincia Haut-Ogooué, folosită pentru reintroducerea speciilor dispărute la nivel local.",
      en: "A protected area in the Haut-Ogooué province used for the reintroduction of species that went extinct locally."
    },
    facts: {
      de: ["Wiederansiedlungsprojekte", "Savannenschutz"],
      hu: ["Visszatelepítési projektek", "Szavannavédelem"],
      ro: ["Proiecte de reintroducere", "Protecția savanei"],
      en: ["Reintroduction projects", "Savanna protection"]
    }
  },
  {
    id: "sette-cama-lagoon-fauna-life-v2",
    type: "animal-habitat",
    parent: "GA-7",
    coords: [10.1, -2.5],
    name: {
      de: "Sette Cama Lagunentiere",
      hu: "Sette Cama lagúna állatvilága",
      ro: "Fauna lagunei Sette Cama",
      en: "Sette Cama Lagoon Fauna"
    },
    description: {
      de: "Die Lagunen von Sette Cama bieten einen Lebensraum für seltene Seekühe und zahlreiche Krokodilarten.",
      hu: "Sette Cama lagúnái életteret biztosítanak a ritka tengeriteheneknek és számos krokodilfajnak.",
      ro: "Lagunele din Sette Cama oferă un habitat pentru lamantini rari și numeroase specii de crocodili.",
      en: "The lagoons of Sette Cama provide a habitat for rare manatees and numerous crocodile species."
    },
    facts: {
      de: ["Seekuh-Habitat", "Krokodil-Beobachtung"],
      hu: ["Lamantin-élőhely", "Krokodilmegfigyelés"],
      ro: ["Habitatul lamantinilor", "Observarea crocodililor"],
      en: ["Manatee habitat", "Crocodile watching"]
    }
  },
  {
    id: "akanda-mangrove-life-v2",
    type: "animal-habitat",
    parent: "GA-1",
    coords: [9.4, 0.4],
    name: {
      de: "Akanda Mangroven-Ökosystem",
      hu: "Akanda mangrove-ökoszisztéma",
      ro: "Ecosistemul de mangrove Akanda",
      en: "Akanda Mangrove Ecosystem"
    },
    description: {
      de: "Die dichten Mangrovenwälder von Akanda sind eine wichtige Kinderstube für Fische und Krebstiere des Atlantiks.",
      hu: "Akanda sűrű mangroveerdői az Atlanti-óceán halainak és rákféléinek fontos bölcsődehelyei.",
      ro: "Pădurile dese de mangrove din Akanda sunt o pepinieră vitală pentru peștii și crustaceele din Atlantic.",
      en: "The dense mangroves of Akanda are a vital nursery for Atlantic fish and crustaceans."
    },
    facts: {
      de: ["Marine Biodiversität", "Küstenschutz"],
      hu: ["Tengeri biodiverzitás", "Partvédelem"],
      ro: ["Biodiversitate marină", "Protecția coastei"],
      en: ["Marine biodiversity", "Coastal protection"]
    }
  }
];
