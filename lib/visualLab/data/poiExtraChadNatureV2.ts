import type { POI } from "./poi";

export const poiExtraChadNatureV2: POI[] = [
  {
    id: "lake-chad-nature-v2",
    type: "lake",
    parent: "TD-LC",
    coords: [14.5, 13.0],
    name: {
      de: "Tschadsee",
      hu: "Csád-tó",
      ro: "Lacul Ciad",
      en: "Lake Chad"
    },
    description: {
      de: "Ein historisch bedeutender, flacher See am Rande der Sahara.",
      hu: "Történelmileg jelentős, sekély tó a Szahara szélén.",
      ro: "Un lac puțin adânc, semnificativ din punct de vedere istoric, la marginea Saharei.",
      en: "A historically significant, shallow lake on the edge of the Sahara."
    },
    facts: {
      de: ["Wichtige Wasserquelle für Millionen.", "Fläche schwankt stark saisonal.", "Heimat vieler Zugvögel.", "Endorheisches Becken."],
      hu: ["Milliók számára fontos vízforrás.", "Területe szezonálisan erősen ingadozik.", "Sok költöző madár otthona.", "Lefolyástalan medence."],
      ro: ["Sursă vitală de apă pentru milioane de oameni.", "Suprafața variază puternic sezonier.", "Adăpostește numeroase păsări migratoare.", "Bazin endoreic."],
      en: ["Vital water source for millions.", "Surface area fluctuates seasonally.", "Home to many migratory birds.", "Endorheic basin."]
    }
  },
  {
    id: "chari-river-nature-v2",
    type: "river",
    parent: "TD-CB",
    coords: [15.0, 12.1],
    name: {
      de: "Schari",
      hu: "Chari",
      ro: "Râul Chari",
      en: "Chari River"
    },
    description: {
      de: "Der Hauptzufluss des Tschadsees, der durch die Hauptstadt fließt.",
      hu: "A Csád-tó fő mellékfolyója, amely a fővároson is keresztülfolyik.",
      ro: "Principalul afluent al Lacului Ciad, care trece prin capitală.",
      en: "The main tributary of Lake Chad, flowing through the capital."
    },
    facts: {
      de: ["Etwa 1.400 km lang.", "Vereint sich mit dem Logone.", "Wichtig für den Fischfang.", "Speist 90% des Tschadsee-Wassers."],
      hu: ["Körülbelül 1400 km hosszú.", "Egyesül a Logone folyóval.", "Fontos a halászat szempontjából.", "A Csád-tó vizének 90%-át adja."],
      ro: ["Are o lungime de aproximativ 1.400 km.", "Se unește cu râul Logone.", "Important pentru pescuit.", "Asigură 90% din apa Lacului Ciad."],
      en: ["About 1,400 km long.", "Confluence with the Logone river.", "Vital for local fishing.", "Provides 90% of Lake Chad's water."]
    }
  },
  {
    id: "logone-river-nature-v2",
    type: "river",
    parent: "TD-LO",
    coords: [15.1, 11.5],
    name: {
      de: "Logone",
      hu: "Logone",
      ro: "Râul Logone",
      en: "Logone River"
    },
    description: {
      de: "Ein bedeutender Fluss im Südwesten, der die Grenze zu Kamerun bildet.",
      hu: "Jelentős folyó délnyugaton, amely Kamerunnal alkot határt.",
      ro: "Un râu important în sud-vest, formând granița cu Camerunul.",
      en: "A major river in the southwest, forming the border with Cameroon."
    },
    facts: {
      de: ["Mündet in den Schari.", "Wichtige Feuchtgebiete.", "Saisonale Überschwemmungen.", "Transportweg für lokale Güter."],
      hu: ["A Chari folyóba ömlik.", "Fontos vizes élőhelyek.", "Szezonális áradások.", "Helyi áruk szállítási útvonala."],
      ro: ["Se varsă în râul Chari.", "Zone umede importante.", "Inundații sezoniere.", "Rută de transport pentru mărfuri locale."],
      en: ["Flows into the Chari River.", "Important wetland areas.", "Seasonal flooding patterns.", "Transport route for local goods."]
    }
  },
  {
    id: "emi-koussi-nature-v2",
    type: "mountain",
    parent: "TD-BE",
    coords: [19.8, 18.5],
    name: {
      de: "Emi Koussi",
      hu: "Emi Koussi",
      ro: "Emi Koussi",
      en: "Emi Koussi"
    },
    description: {
      de: "Ein erloschener Vulkan und der höchste Gipfel der Sahara.",
      hu: "Egy kialudt tűzhányó és a Szahara legmagasabb csúcsa.",
      ro: "Un vulcan stins și cel mai înalt vârf din Sahara.",
      en: "An extinct volcano and the highest peak in the Sahara Desert."
    },
    facts: {
      de: ["3.415 Meter hoch.", "Liegt im Tibesti-Gebirge.", "Besitzt zwei große Krater.", "Beeindruckende Lavafelder."],
      hu: ["3415 méter magas.", "A Tibeszti-hegységben található.", "Két hatalmas krátere van.", "Lenyűgöző lávamezők."],
      ro: ["3.415 metri înălțime.", "Situat în Munții Tibesti.", "Are două cratere mari.", "Câmpuri de lavă impresionante."],
      en: ["3,415 meters high.", "Located in the Tibesti Mountains.", "Has two large craters.", "Stunning lava fields."]
    }
  },
  {
    id: "tibesti-mountains-nature-v2",
    type: "mountain",
    parent: "TD-TI",
    coords: [20.5, 17.5],
    name: {
      de: "Tibesti-Gebirge",
      hu: "Tibeszti-hegység",
      ro: "Munții Tibesti",
      en: "Tibesti Mountains"
    },
    description: {
      de: "Ein gewaltiges Gebirgsmassiv vulkanischen Ursprungs im Norden des Tschad.",
      hu: "Hatalmas vulkáni eredetű hegység Csád északi részén.",
      ro: "Un masiv muntos vast de origine vulcanică în nordul Ciadului.",
      en: "A massive mountain range of volcanic origin in northern Chad."
    },
    facts: {
      de: ["Heimat der Toubou-Nomaden.", "Extrem trockenes Klima.", "Uralte Felsmalereien.", "Höchste Erhebung der Sahara."],
      hu: ["A tubu nomádok otthona.", "Extrém száraz éghajlat.", "Ősi sziklarajzok.", "A Szahara legmagasabb pontja."],
      ro: ["Casa nomazilor Toubou.", "Climat extrem de arid.", "Picturi rupestre străvechi.", "Cea mai înaltă regiune din Sahara."],
      en: ["Home to the Toubou nomads.", "Extremely arid climate.", "Ancient rock art sites.", "Highest region in the Sahara."]
    }
  },
  {
    id: "ennedi-plateau-nature-v2",
    type: "mountain",
    parent: "TD-EO",
    coords: [17.0, 21.5],
    name: {
      de: "Ennedi-Massiv",
      hu: "Ennedi-fennsík",
      ro: "Podișul Ennedi",
      en: "Ennedi Plateau"
    },
    description: {
      de: "Eine spektakuläre Sandsteinlandschaft mit natürlichen Bögen und Türmen.",
      hu: "Látványos homokkő táj természetes boltívekkel és tornyokkal.",
      ro: "Un peisaj spectaculos de gresie cu arcade și turnuri naturale.",
      en: "A spectacular sandstone landscape with natural arches and towers."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Einzigartige Felsformationen.", "Beherbergt seltene Wüstenkrokodile.", "Reich an prähistorischer Kunst."],
      hu: ["UNESCO Világörökség.", "Egyedülálló sziklaformációk.", "Ritka sivatagi krokodilok otthona.", "Gazdag történelem előtti művészet."],
      ro: ["Patrimoniu Mondial UNESCO.", "Formațiuni stâncoase unice.", "Adăpostește crocodili de deșert rari.", "Bogat în artă preistorică."],
      en: ["UNESCO World Heritage site.", "Unique rock formations.", "Home to rare desert crocodiles.", "Rich in prehistoric rock art."]
    }
  },
  {
    id: "lake-fitri-nature-v2",
    type: "lake",
    parent: "TD-BA",
    coords: [12.8, 17.5],
    name: {
      de: "Fitri-See",
      hu: "Fitri-tó",
      ro: "Lacul Fitri",
      en: "Lake Fitri"
    },
    description: {
      de: "Ein wichtiger Süßwassersee in der Mitte des Landes, ein Ramsar-Gebiet.",
      hu: "Fontos édesvizű tó az ország közepén, Ramsari terület.",
      ro: "Un lac important de apă dulce în centrul țării, sit Ramsar.",
      en: "An important freshwater lake in the center of the country, a Ramsar site."
    },
    facts: {
      de: ["Überrest eines größeren Sees.", "Wichtiger Lebensraum für Fische.", "Zentrum für Viehzucht.", "Relikt des Megatschad."],
      hu: ["Egy nagyobb tó maradványa.", "Fontos élőhely a halaknak.", "Az állattenyésztés központja.", "A Mega-Csád maradványa."],
      ro: ["Rămășița unui lac mai mare.", "Habitat important pentru pești.", "Centru pentru creșterea animalelor.", "Relicvă a Mega-Ciadului."],
      en: ["Remnant of a larger lake.", "Vital habitat for fish.", "Center for livestock farming.", "Relic of the Mega-Chad."]
    }
  },
  {
    id: "lake-iro-nature-v2",
    type: "lake",
    parent: "TD-MC",
    coords: [10.1, 19.4],
    name: {
      de: "Iro-See",
      hu: "Iro-tó",
      ro: "Lacul Iro",
      en: "Lake Iro"
    },
    description: {
      de: "Ein kleiner, fast kreisrunder See im Süden, wahrscheinlich ein Einschlagkrater.",
      hu: "Kicsi, majdnem kör alakú tó délen, valószínűleg becsapódási kráter.",
      ro: "Un lac mic, aproape circular în sud, probabil un crater de impact.",
      en: "A small, nearly circular lake in the south, likely an impact crater."
    },
    facts: {
      de: ["Besitzt eine reiche Fischfauna.", "Saisonale Verbindung zum Bahr Salamat.", "Durchmesser von ca. 13 km.", "Wichtig für lokale Fischer."],
      hu: ["Gazdag halkészlettel rendelkezik.", "Szezonális kapcsolata van a Bahr Salamattal.", "Átmérője kb. 13 km.", "Fontos a helyi halászoknak."],
      ro: ["Are o faună piscicolă bogată.", "Conexiune sezonieră cu Bahr Salamat.", "Diametru de aprox. 13 km.", "Important pentru pescarii locali."],
      en: ["Rich in fish species.", "Seasonal link to Bahr Salamat.", "Diameter of about 13 km.", "Crucial for local fishing."]
    }
  },
  {
    id: "ounianga-lakes-nature-v2",
    type: "lake",
    parent: "TD-BE",
    coords: [19.0, 20.5],
    name: {
      de: "Seen von Ounianga",
      hu: "Ounianga-tavak",
      ro: "Lacurile Ounianga",
      en: "Lakes of Ounianga"
    },
    description: {
      de: "Eine Gruppe von 18 Seen in der Wüste, ein UNESCO-Weltnaturerbe.",
      hu: "18 tóból álló csoport a sivatagban, UNESCO világörökségi helyszín.",
      ro: "Un grup de 18 lacuri în deșert, sit natural UNESCO.",
      en: "A group of 18 lakes in the desert, a UNESCO World Heritage site."
    },
    facts: {
      de: ["Unglaubliche Oasenlandschaft.", "Süß- und Salzwasserseen.", "Unterirdische Grundwasserspeicher.", "Relikt aus feuchteren Zeiten."],
      hu: ["Hihetetlen oázis táj.", "Édesvizű és sós tavak.", "Föld alatti vízkészletek táplálják.", "Nedvesebb korszakok maradványa."],
      ro: ["Peisaj de oază incredibil.", "Lacuri cu apă dulce și sărată.", "Alimentate de acvifere subterane.", "Relicvă din vremuri mai umede."],
      en: ["Incredible oasis landscape.", "Both fresh and saltwater lakes.", "Fed by underground aquifers.", "Relic of a more humid era."]
    }
  },
  {
    id: "lake-katam-nature-v2",
    type: "lake",
    parent: "TD-BE",
    coords: [19.1, 20.4],
    name: {
      de: "Katam-See",
      hu: "Katam-tó",
      ro: "Lacul Katam",
      en: "Lake Katam"
    },
    description: {
      de: "Einer der malerischsten Seen der Ounianga-Gruppe, bekannt für seine Farben.",
      hu: "Az Ounianga-csoport egyik legfestőibb tava, színeiről ismert.",
      ro: "Unul dintre cele mai pitorești lacuri din grupul Ounianga.",
      en: "One of the most picturesque lakes of the Ounianga group, known for its colors."
    },
    facts: {
      de: ["Ganzjährig wasserführend.", "Umgeben von Sanddünen.", "Teilweise von Schilf bedeckt.", "Kontrastreiche Wüstenkulisse."],
      hu: ["Egész évben van benne víz.", "Homokdűnék veszik körül.", "Részben nádas borítja.", "Kontrasztos sivatagi háttér."],
      ro: ["Conține apă tot anul.", "Înconjurat de dune de nisip.", "Acoperit parțial de stuf.", "Cadru de deșert contrastant."],
      en: ["Perennial water body.", "Surrounded by sand dunes.", "Partially covered by reeds.", "Contrasting desert backdrop."]
    }
  },
  {
    id: "guelta-archei-nature-v2",
    type: "lake",
    parent: "TD-EO",
    coords: [16.9, 21.8],
    name: {
      de: "Guelta d'Archei",
      hu: "Guelta d'Archei",
      ro: "Guelta d'Archei",
      en: "Guelta d'Archei"
    },
    description: {
      de: "Einer der bekanntesten Guelta-Wasserlöcher in der Sahara, im Ennedi-Massiv.",
      hu: "A Szahara egyik legismertebb sziklamedencéje az Ennedi-hegységben.",
      ro: "Unul dintre cele mai faimoase puncte de apă din Sahara, în Masivul Ennedi.",
      en: "One of the most famous gueltas (water holes) in the Sahara, in the Ennedi range."
    },
    facts: {
      de: ["Rückzugsort für Krokodile.", "Wichtiger Tränkplatz für Kamele.", "Steile Sandsteinwände.", "Isoliertes Ökosystem."],
      hu: ["Krokodilok menedékhelye.", "Fontos itatóhely a tevéknek.", "Meredek homokkő falak.", "Elszigetelt ökoszisztéma."],
      ro: ["Refugiu pentru crocodili.", "Loc important de adăpat camilele.", "Pereți de gresie abrupți.", "Ecosistem izolat."],
      en: ["Sanctuary for crocodiles.", "Vital watering hole for camels.", "Sheer sandstone cliffs.", "Isolated ecosystem."]
    }
  },
  {
    id: "bahr-salamat-nature-v2",
    type: "river",
    parent: "TD-SA",
    coords: [10.5, 20.0],
    name: {
      de: "Bahr Salamat",
      hu: "Bahr Salamat",
      ro: "Bahr Salamat",
      en: "Bahr Salamat"
    },
    description: {
      de: "Ein saisonaler Fluss im Südosten, der durch den Zakouma-Nationalpark fließt.",
      hu: "Szezonális folyó délkeleten, amely a Zakouma Nemzeti Parkon folyik át.",
      ro: "Un râu sezonier în sud-est, care traversează Parcul Național Zakouma.",
      en: "A seasonal river in the southeast that flows through Zakouma National Park."
    },
    facts: {
      de: ["Mündet in den Schari.", "Lebensader für Wildtiere.", "Bildet ausgedehnte Auen.", "Wichtig für die Landwirtschaft."],
      hu: ["A Chari folyóba ömlik.", "A vadvilág életereje.", "Kiterjedt ártereket alkot.", "Fontos a mezőgazdaság számára."],
      ro: ["Se varsă în râul Chari.", "Sursă de viață pentru fauna sălbatică.", "Formează lunci întinse.", "Important pentru agricultură."],
      en: ["Flows into the Chari River.", "Lifeline for wildlife.", "Forms extensive floodplains.", "Crucial for local farming."]
    }
  },
  {
    id: "bahr-aouk-nature-v2",
    type: "river",
    parent: "TD-SA",
    coords: [9.5, 20.0],
    name: {
      de: "Bahr Aouk",
      hu: "Bahr Aouk",
      ro: "Bahr Aouk",
      en: "Bahr Aouk"
    },
    description: {
      de: "Ein Grenzfluss zwischen dem Tschad und der Zentralafrikanischen Republik.",
      hu: "Határfolyó Csád és a Közép-afrikai Köztársaság között.",
      ro: "Un râu de frontieră între Ciad și Republica Centrafricană.",
      en: "A border river between Chad and the Central African Republic."
    },
    facts: {
      de: ["Teil des Schari-Beckens.", "Fischreiche Gewässer.", "Umgeben von Feuchtsavannen.", "Schwer zugängliche Region."],
      hu: ["A Chari-medence része.", "Halakban gazdag vizek.", "Nedves szavannák veszik körül.", "Nehezen hozzáférhető régió."],
      ro: ["Parte a bazinului Chari.", "Ape bogate în pește.", "Înconjurat de savane umede.", "Regiune greu accesibilă."],
      en: ["Part of the Chari basin.", "Rich in fish species.", "Surrounded by wet savannas.", "Remote and difficult to access."]
    }
  },
  {
    id: "bahr-keita-nature-v2",
    type: "river",
    parent: "TD-SA",
    coords: [9.8, 19.5],
    name: {
      de: "Bahr Keïta",
      hu: "Bahr Keïta",
      ro: "Bahr Keïta",
      en: "Bahr Keïta"
    },
    description: {
      de: "Ein wichtiger Nebenfluss im Salamat-Becken.",
      hu: "Fontos mellékfolyó a Salamat-medencében.",
      ro: "Un afluent important în bazinul Salamat.",
      en: "An important tributary in the Salamat basin."
    },
    facts: {
      de: ["Führt hauptsächlich in der Regenzeit Wasser.", "Unterstützt lokale Ökosysteme.", "Mündet in den Salamat.", "Wichtiger Viehtränkplatz."],
      hu: ["Főleg az esős évszakban van benne víz.", "Helyi ökoszisztémákat támogat.", "A Salamat folyóba ömlik.", "Fontos itatóhely az állatoknak."],
      ro: ["Are apă în principal în sezonul ploios.", "Susține ecosistemele locale.", "Se varsă în râul Salamat.", "Loc important de adăpat."],
      en: ["Flows mainly in the rainy season.", "Supports local ecosystems.", "Tributary of the Salamat river.", "Important for watering livestock."]
    }
  },
  {
    id: "mayo-kebbi-nature-v2",
    type: "river",
    parent: "TD-MO",
    coords: [9.5, 14.5],
    name: {
      de: "Mayo Kébbi",
      hu: "Mayo Kébbi",
      ro: "Mayo Kébbi",
      en: "Mayo Kébbi"
    },
    description: {
      de: "Ein Fluss im Südwesten, der den Léré-See entwässert.",
      hu: "Folyó délnyugaton, amely a Léré-tavat csapolja le.",
      ro: "Un râu în sud-vest care drenează Lacul Léré.",
      en: "A river in the southwest that drains Lake Léré."
    },
    facts: {
      de: ["Teil des Niger-Flusssystems.", "Bekannt für seine Wasserfälle.", "Verbindet Seen mit dem Benue.", "Bedeutend für Biodiversität."],
      hu: ["A Niger folyórendszer része.", "Vízeséseiről ismert.", "Összeköti a tavakat a Benuéval.", "Jelentős a biodiverzitás számára."],
      ro: ["Parte a sistemului râului Niger.", "Cunoscut pentru cascadele sale.", "Conectează lacurile cu râul Benue.", "Semnificativ pentru biodiversitate."],
      en: ["Part of the Niger river system.", "Known for its waterfalls.", "Connects lakes with the Benue river.", "Significant for biodiversity."]
    }
  },
  {
    id: "lake-lere-nature-v2",
    type: "lake",
    parent: "TD-MO",
    coords: [9.6, 14.1],
    name: {
      de: "Léré-See",
      hu: "Léré-tó",
      ro: "Lacul Léré",
      en: "Lake Léré"
    },
    description: {
      de: "Ein flacher See im Südwesten des Tschad, bekannt für seine Rundschwanzseekühe.",
      hu: "Sekély tó Csád délnyugati részén, lamantinokról ismert.",
      ro: "Un lac puțin adânc în sud-vestul Ciadului, cunoscut pentru manati.",
      en: "A shallow lake in southwestern Chad, famous for its manatees."
    },
    facts: {
      de: ["Heimat von Seekühen.", "Fischreiches Gewässer.", "Wichtiger Grenzsee zu Kamerun.", "Vogelparadies."],
      hu: ["Lamantinok otthona.", "Halakban gazdag víz.", "Fontos határtó Kamerun felé.", "Madárparadicsom."],
      ro: ["Casa lamantinilor.", "Ape bogate în pește.", "Lac de frontieră important cu Camerun.", "Paradis al păsărilor."],
      en: ["Home to African manatees.", "Rich in fish resources.", "Major border lake near Cameroon.", "Birdwatcher's paradise."]
    }
  },
  {
    id: "lake-trene-nature-v2",
    type: "lake",
    parent: "TD-MO",
    coords: [9.7, 14.3],
    name: {
      de: "Trené-See",
      hu: "Trené-tó",
      ro: "Lacul Trené",
      en: "Lake Trené"
    },
    description: {
      de: "Ein Nachbarsee des Léré-Sees im Mayo-Kebbi-Gebiet.",
      hu: "A Léré-tó szomszédja a Mayo-Kebbi területen.",
      ro: "Un lac vecin cu Lacul Léré în zona Mayo-Kebbi.",
      en: "A neighboring lake to Lake Léré in the Mayo-Kebbi area."
    },
    facts: {
      de: ["Süßwasserökosystem.", "Wichtig für lokale Fischerei.", "Schöne Ufervegetation.", "Teil des Mayo Kébbi Beckens."],
      hu: ["Édesvízi ökoszisztéma.", "Fontos a helyi halászatnak.", "Szép parti vegetáció.", "A Mayo Kébbi-medence része."],
      ro: ["Ecosistem de apă dulce.", "Important pentru pescuitul local.", "Vegetație de mal frumoasă.", "Parte a bazinului Mayo Kébbi."],
      en: ["Freshwater ecosystem.", "Crucial for local fishing.", "Lush shoreline vegetation.", "Part of the Mayo Kébbi basin."]
    }
  },
  {
    id: "pic-tousside-nature-v2",
    type: "mountain",
    parent: "TD-TI",
    coords: [21.0, 16.4],
    name: {
      de: "Pic Toussidé",
      hu: "Pic Toussidé",
      ro: "Vârful Toussidé",
      en: "Pic Toussidé"
    },
    description: {
      de: "Ein markanter Vulkankegel im Tibesti-Gebirge.",
      hu: "Jellegzetes vulkáni kúp a Tibeszti-hegységben.",
      ro: "Un con vulcanic proeminent în munții Tibesti.",
      en: "A prominent volcanic cone in the Tibesti Mountains."
    },
    facts: {
      de: ["3.265 Meter hoch.", "Jüngster Vulkan im Tibesti.", "Bekannt für Fumarolen.", "Steile Gipfelflanken."],
      hu: ["3265 méter magas.", "A legfiatalabb vulkán a Tibesztiben.", "Fumaroláiról ismert.", "Meredek csúcsoldalak."],
      ro: ["3.265 metri înălțime.", "Cel mai tânăr vulcan din Tibesti.", "Cunoscut pentru fumarole.", "Pante de vârf abrupte."],
      en: ["3,265 meters high.", "Youngest volcano in Tibesti.", "Known for its fumaroles.", "Steep summit slopes."]
    }
  },
  {
    id: "tarso-voon-nature-v2",
    type: "mountain",
    parent: "TD-TI",
    coords: [20.9, 17.3],
    name: {
      de: "Tarso Voon",
      hu: "Tarso Voon",
      ro: "Tarso Voon",
      en: "Tarso Voon"
    },
    description: {
      de: "Ein großes vulkanisches Massiv mit einer weiten Kaldera.",
      hu: "Hatalmas vulkáni masszívum széles kalderával.",
      ro: "Un masiv vulcanic mare cu o calderă vastă.",
      en: "A large volcanic massif with a wide caldera."
    },
    facts: {
      de: ["Umfasst Thermalquellen.", "Zahlreiche Basaltströme.", "3.100 Meter hoch.", "Teil des Tibesti-Zentrums."],
      hu: ["Hévízforrásokat tartalmaz.", "Számos bazaltfolyam.", "3100 méter magas.", "A Tibeszti központjának része."],
      ro: ["Include izvoare termale.", "Numeroase fluxuri de bazalt.", "3.100 metri înălțime.", "Parte a centrului Tibesti."],
      en: ["Features thermal springs.", "Numerous basalt flows.", "3,100 meters high.", "Part of the central Tibesti."]
    }
  },
  {
    id: "tarso-toh-nature-v2",
    type: "mountain",
    parent: "TD-TI",
    coords: [21.3, 17.1],
    name: {
      de: "Tarso Toh",
      hu: "Tarso Toh",
      ro: "Tarso Toh",
      en: "Tarso Toh"
    },
    description: {
      de: "Ein vulkanisches Hochland im nördlichen Tibesti.",
      hu: "Vulkáni fennsík az északi Tibesztiben.",
      ro: "Un podiș vulcanic în nordul munților Tibesti.",
      en: "A volcanic highland in the northern Tibesti."
    },
    facts: {
      de: ["Weite Lavaebenen.", "Zahlreiche Vulkankegel.", "Isolierte Lage.", "Markante Geologie."],
      hu: ["Széles lávamezők.", "Számos vulkáni kúp.", "Elszigetelt elhelyezkedés.", "Jellegzetes geológia."],
      ro: ["Câmpii vaste de lavă.", "Numeroase conuri vulcanice.", "Locație izolată.", "Geologie distinctivă."],
      en: ["Vast lava plains.", "Numerous volcanic cones.", "Isolated location.", "Distinctive geology."]
    }
  },
  {
    id: "bikku-bitti-nature-v2",
    type: "mountain",
    parent: "TD-TI",
    coords: [21.9, 19.2],
    name: {
      de: "Bikku Bitti",
      hu: "Bikku Bitti",
      ro: "Bikku Bitti",
      en: "Bikku Bitti"
    },
    description: {
      de: "Der höchste Berg Libyens, der direkt an der Grenze zum Tschad liegt.",
      hu: "Líbia legmagasabb hegye, közvetlenül a csádi határon.",
      ro: "Cel mai înalt munte din Libia, situat chiar pe granița cu Ciad.",
      en: "The highest mountain in Libya, located right on the border with Chad."
    },
    facts: {
      de: ["2.267 Meter hoch.", "Gehört zum Tibesti-Massiv.", "Sehr schwer zugänglich.", "Felsige Gebirgslandschaft."],
      hu: ["2267 méter magas.", "A Tibeszti-masszívum része.", "Nagyon nehezen megközelíthető.", "Sziklás hegyi táj."],
      ro: ["2.267 metri înălțime.", "Face parte din masivul Tibesti.", "Foarte greu de accesat.", "Peisaj montan stâncos."],
      en: ["2,267 meters high.", "Part of the Tibesti massif.", "Extremely remote.", "Rocky mountain landscape."]
    }
  },
  {
    id: "mandara-mountains-nature-v2",
    type: "mountain",
    parent: "TD-MO",
    coords: [10.6, 13.9],
    name: {
      de: "Mandara-Gebirge",
      hu: "Mandara-hegység",
      ro: "Munții Mandara",
      en: "Mandara Mountains"
    },
    description: {
      de: "Ein Vulkangebirge an der Grenze zwischen Kamerun und Tschad.",
      hu: "Vulkáni hegység Kamerun és Csád határán.",
      ro: "Munți vulcanici la granița dintre Camerun și Ciad.",
      en: "A volcanic range on the border between Cameroon and Chad."
    },
    facts: {
      de: ["Einzigartige Granitformationen.", "Traditionelle Terrassenwirtschaft.", "Reiche kulturelle Geschichte.", "Beliebtes Wandergebiet."],
      hu: ["Egyedülálló gránitformációk.", "Hagyományos teraszos művelés.", "Gazdag kulturális történelem.", "Népszerű túraútvonalak."],
      ro: ["Formațiuni unice de granit.", "Agricultură tradițională în terase.", "Istorie culturală bogată.", "Zonă populară de drumeții."],
      en: ["Unique granite formations.", "Traditional terrace farming.", "Rich cultural history.", "Popular hiking area."]
    }
  },
  {
    id: "ouaddai-highlands-nature-v2",
    type: "mountain",
    parent: "TD-OU",
    coords: [13.5, 21.5],
    name: {
      de: "Ouaddaï-Hochland",
      hu: "Ouaddaï-fennsík",
      ro: "Podișul Ouaddaï",
      en: "Ouaddaï Highlands"
    },
    description: {
      de: "Eine hügelige Gebirgsregion im Osten des Landes.",
      hu: "Dombos hegyvidék az ország keleti részén.",
      ro: "O regiune muntoasă deluroasă în estul țării.",
      en: "A hilly mountain region in the eastern part of the country."
    },
    facts: {
      de: ["Wasserscheide der Region.", "Felsige Landschaften.", "Wichtige Weidegründe.", "Teil des Sahel-Gürtels."],
      hu: ["A régió vízválasztója.", "Sziklás tájak.", "Fontos legelőhelyek.", "A Száhel-övezet része."],
      ro: ["Cumpănă de ape a regiunii.", "Peisaje stâncoase.", "Pășuni importante.", "Parte a centurii Sahel."],
      en: ["Regional watershed.", "Rocky landscapes.", "Important grazing grounds.", "Part of the Sahel belt."]
    }
  },
  {
    id: "manda-forest-nature-v2",
    type: "forest",
    parent: "TD-MC",
    coords: [9.2, 18.0],
    name: {
      de: "Manda-Wald",
      hu: "Manda-erdő",
      ro: "Pădurea Manda",
      en: "Manda Forest"
    },
    description: {
      de: "Ein wichtiges Wald- und Schutzgebiet im Süden des Landes.",
      hu: "Fontos erdő és védett terület az ország déli részén.",
      ro: "O pădure și arie protejată importantă în sudul țării.",
      en: "An important forest and protected area in the south of the country."
    },
    facts: {
      de: ["Trockenwald-Vegetation.", "Heimat von Antilopen.", "Wichtiger Biodiversitätskorridor.", "Gefährdet durch Holzentnahme."],
      hu: ["Száraz erdei vegetáció.", "Antilopok otthona.", "Fontos biodiverzitási folyosó.", "Veszélyeztetett fakitermelés miatt."],
      ro: ["Vegetație de pădure uscată.", "Adăpostește antilope.", "Coridor de biodiversitate important.", "Amenințată de defrișări."],
      en: ["Dry forest vegetation.", "Habitat for various antelopes.", "Vital biodiversity corridor.", "Threatened by logging."]
    }
  },
  {
    id: "binder-lere-forest-nature-v2",
    type: "forest",
    parent: "TD-MO",
    coords: [9.5, 14.3],
    name: {
      de: "Binder-Léré-Wald",
      hu: "Binder-Léré erdő",
      ro: "Pădurea Binder-Léré",
      en: "Binder-Léré Forest"
    },
    description: {
      de: "Ein Waldreservat, das Teil des komplexen Binder-Léré-Ökosystems ist.",
      hu: "Erdőrezervátum, amely a komplex Binder-Léré ökoszisztéma része.",
      ro: "O rezervație forestieră parte a ecosistemului complex Binder-Léré.",
      en: "A forest reserve that is part of the complex Binder-Léré ecosystem."
    },
    facts: {
      de: ["Teil eines Wildreservats.", "Uferbegleitende Wälder.", "Reiche Vogelwelt.", "Schutzgebiet für Großwild."],
      hu: ["Egy vadrezervátum része.", "Folyóparti erdők.", "Gazdag madárvilág.", "Nagyvadak védett területe."],
      ro: ["Parte a unei rezervații de vânătoare.", "Păduri riverane.", "Avifaună bogată.", "Arie protejată pentru vânat mare."],
      en: ["Part of a wildlife reserve.", "Riparian forests.", "Rich birdlife.", "Protected area for large game."]
    }
  }
];
