import { type POI } from "./poi";

export const montenegroAllPoi: POI[] = [
  // CITIES
  // NATURE
  {
    id: "me-prokletije",
    name: { de: "Prokletije", hu: "Prokletije", ro: "Prokletije", en: "Prokletije" },
    type: "mountain",
    coords: [19.7667, 42.5000],
    parent: "ME-ALL",
    description: {
      de: "Das 'verwunschene Gebirge', bekannt für seine schroffe und dramatische Landschaft.",
      hu: "Az 'elátkozott hegyek', melyek zord és drámai tájukról ismertek.",
      ro: "„Munții Blestemați”, cunoscuți pentru peisajul lor accidentat și dramatic.",
      en: "The 'Accursed Mountains', known for their rugged and dramatic landscape."
    }, image: "/poi-images/me-prokletije.webp"},
  {
    id: "me-bay-kotor",
    name: { de: "Bucht von Kotor", hu: "Kotori-öböl", ro: "Golful Kotor", en: "Bay of Kotor" },
    type: "sea",
    coords: [18.6667, 42.4333],
    parent: "ME-ALL",
    description: {
      de: "Oft Europas südlichster Fjord genannt, eine beeindruckende Küstenlandschaft.",
      hu: "Gyakran Európa legdélebbi fjordjának nevezik, lenyűgöző parti táj.",
      ro: "Adesea numit cel mai sudic fiord din Europa, un peisaj de coastă uimitor.",
      en: "Often called Europe's southernmost fjord, a stunning coastal landscape."
    }, image: "/poi-images/me-bay-kotor.webp"},
  {
    id: "me-sveti-stefan",
    name: { de: "Sveti Stefan", hu: "Sveti Stefan", ro: "Sveti Stefan", en: "Sveti Stefan" },
    type: "island",
    coords: [18.8911, 42.2558],
    parent: "ME-ALL",
    description: {
      de: "Eine kleine Insel und ein Luxusresort mit Gebäuden aus dem 15. Jahrhundert.",
      hu: "Kis sziget és luxusüdülőhely 15. századi épületekkel.",
      ro: "O mică insulă și o stațiune de lux cu clădiri din secolul al XV-lea.",
      en: "A small islet and luxury resort featuring 15th-century buildings."
    }, image: "/poi-images/me-sveti-stefan.webp"},
  {
    id: "me-ada-bojana",
    name: { de: "Ada Bojana", hu: "Ada Bojana", ro: "Ada Bojana", en: "Ada Bojana" },
    type: "island",
    coords: [19.3486, 41.8617],
    parent: "ME-ALL",
    description: {
      de: "Flussinsel am südlichen Ende Montenegros, beliebt bei Kitesurfern.",
      hu: "Folyami sziget Montenegró déli végén, a kiteszörfösök kedvence.",
      ro: "Insulă fluvială la capătul sudic al Muntenegrului, populară pentru kitesurfing.",
      en: "River island at the southern end of Montenegro, popular for kitesurfing."
    }, image: "/poi-images/me-ada-bojana.webp"},
  {
    id: "me-black-lake",
    name: { de: "Schwarzer See", hu: "Fekete-tó", ro: "Lacul Negru", en: "Black Lake" },
    type: "lake",
    coords: [19.0911, 43.1467],
    parent: "ME-ALL",
    description: {
      de: "Ein bekannter Gletschersee im Durmitor-Nationalpark.",
      hu: "Egy híres gleccsertó a Durmitor Nemzeti Parkban.",
      ro: "Un lac glaciar bine-cunoscut în Parcul Național Durmitor.",
      en: "A well-known glacial lake in the Durmitor National Park."
    }, image: "/poi-images/me-black-lake.webp"},
  // HISTORY / LANDMARKS
  {
    id: "me-mamula",
    name: { de: "Mamula", hu: "Mamula", ro: "Mamula", en: "Mamula" },
    type: "historical",
    coords: [18.5583, 42.3953],
    parent: "ME-ALL",
    description: {
      de: "Unbewohnte Insel mit einem Fort aus dem 19. Jahrhundert.",
      hu: "Lakatlan sziget egy 19. századi erőddel.",
      ro: "Insulă nelocuită cu un fort din secolul al XIX-lea.",
      en: "Uninhabited island featuring a 19th-century fort."
    }, image: "/poi-images/me-mamula.webp"},
  {
    id: "me-san-giovanni",
    name: { de: "Festung San Giovanni", hu: "San Giovanni erőd", ro: "Fortăreața San Giovanni", en: "San Giovanni Fortress" },
    type: "historical",
    coords: [18.7750, 42.4267],
    parent: "ME-ALL",
    description: {
      de: "Alte Befestigungsanlage hoch über Kotor, die einen atemberaubenden Blick bietet.",
      hu: "Régi erődítmény Kotor fölött, amely lélegzetelállító kilátást nyújt.",
      ro: "Fortificație veche sus deasupra orașului Kotor, oferind priveliști uimitoare.",
      en: "Old fortification high above Kotor offering stunning views."
    }, image: "/poi-images/me-san-giovanni.webp"},
  {
    id: "me-djurdjevica-tara",
    name: { de: "Đurđevića-Tara-Brücke", hu: "Đurđevića Tara híd", ro: "Podul Đurđevića Tara", en: "Đurđevića Tara Bridge" },
    type: "landmark",
    coords: [19.2953, 43.1506],
    parent: "ME-ALL",
    description: {
      de: "Beeindruckende Betonbogenbrücke über die Tara-Schlucht.",
      hu: "Lenyűgöző beton ívhíd a Tara-kanyon felett.",
      ro: "Un pod impresionant cu arce din beton peste Canionul Tara.",
      en: "Impressive concrete arch bridge over the Tara Canyon."
    }, image: "/poi-images/me-djurdjevica-tara.webp"},
  {
    id: "me-cetinje-monastery",
    name: { de: "Kloster Cetinje", hu: "Cetinjei kolostor", ro: "Mănăstirea Cetinje", en: "Cetinje Monastery" },
    type: "historical",
    coords: [18.9222, 42.3875],
    parent: "ME-ALL",
    description: {
      de: "Bedeutendes serbisch-orthodoxes Kloster und Sitz der Metropolie von Montenegro.",
      hu: "Jelentős szerb ortodox kolostor, a montenegrói metropólia székhelye.",
      ro: "O mănăstire ortodoxă sârbă importantă și sediul Mitropoliei Muntenegrului.",
      en: "Significant Serbian Orthodox monastery and seat of the Metropolitanate of Montenegro."
    }
  },
  {
    id: "me-moraca-monastery",
    name: { de: "Kloster Morača", hu: "Morača kolostor", ro: "Mănăstirea Morača", en: "Morača Monastery" },
    type: "historical",
    coords: [19.3908, 42.7667],
    parent: "ME-ALL",
    description: {
      de: "Mittelalterliches serbisch-orthodoxes Kloster aus dem Jahr 1252.",
      hu: "Középkori szerb ortodox kolostor, amely 1252-ben épült.",
      ro: "Mănăstire ortodoxă sârbă medievală fondată în 1252.",
      en: "Medieval Serbian Orthodox monastery founded in 1252."
    }, image: "/poi-images/me-moraca-monastery.webp"},
  // REGIONAL POIS (2 per region)
  // ME-001: Herceg Novi
  {
    id: "me-001-kanli-kula",
    name: { de: "Kanli Kula", hu: "Kanli Kula", ro: "Kanli Kula", en: "Kanli Kula" },
    type: "historical",
    coords: [18.5390, 42.4545],
    parent: "ME-001",
    description: {
      de: "Eine beeindruckende Festung aus der osmanischen Zeit in Herceg Novi.",
      hu: "Lenyűgöző oszmán kori erőd Herceg Noviban.",
      ro: "O fortăreață impresionantă din epoca otomană în Herceg Novi.",
      en: "An impressive Ottoman-era fortress in Herceg Novi."
    },
    facts: {
      de: ["Name bedeutet 'Blutiger Turm'.", "Diente als Gefängnis.", "Heute ein Freilichttheater.", "Bietet Blick auf die Bucht."],
      hu: ["A neve 'véres tornyot' jelent.", "Börtönként is funkcionált.", "Ma szabadtéri színpadként működik.", "Pazar kilátás nyílik az öbölre."],
      ro: ["Numele înseamnă „Turnul Însângerat”.", "A servit drept închisoare.", "Astăzi este un teatru în aer liber.", "Oferă vedere spre golf."],
      en: ["The name means 'Bloody Tower'.", "It served as a prison.", "Now an open-air theater.", "Offers views over the bay."]
    }, image: "/poi-images/me-001-kanli-kula.webp"},
  // ME-002: Rožaje
  {
    id: "me-002-city",
    name: { de: "Rožaje", hu: "Rožaje", ro: "Rožaje", en: "Rožaje" },
    type: "city",
    coords: [20.1667, 42.8333],
    parent: "ME-002",
    description: {
      de: "Eine Stadt im Nordosten Montenegros, umgeben von hohen Bergen.",
      hu: "Város Montenegró északkeleti részén, magas hegyekkel körülvéve.",
      ro: "Un oraș în nord-estul Muntenegrului, înconjurat de munți înalți.",
      en: "A town in northeastern Montenegro, surrounded by high mountains."
    },
    facts: {
      de: ["Liegt am Fluss Ibar.", "Bekannt für die Holzindustrie.", "Ausgangspunkt für Wanderungen.", "Reich an Waldressourcen."],
      hu: ["Az Ibar folyó partján fekszik.", "Fafeldolgozó iparáról ismert.", "Kedvelt túraútvonalak kiindulópontja.", "Gazdag erdőállománnyal rendelkezik."],
      ro: ["Situat pe râul Ibar.", "Cunoscut pentru industria lemnului.", "Punct de plecare pentru drumeții.", "Bogat în resurse forestiere."],
      en: ["Located on the Ibar River.", "Known for its wood industry.", "Starting point for hiking.", "Rich in forest resources."]
    }
  },
  {
    id: "me-002-hajla",
    name: { de: "Hajla", hu: "Hajla", ro: "Hajla", en: "Hajla" },
    type: "mountain",
    coords: [20.1333, 42.7500],
    parent: "ME-002",
    description: {
      de: "Ein markanter Berg an der Grenze zwischen Montenegro und dem Kosovo.",
      hu: "Jellegzetes hegy Montenegró és Koszovó határán.",
      ro: "Un munte proeminent la granița dintre Muntenegru și Kosovo.",
      en: "A prominent mountain on the border between Montenegro and Kosovo."
    },
    facts: {
      de: ["Höchster Punkt 2403 m.", "Bekannt für botanische Vielfalt.", "Teil der verfluchten Berge.", "Bietet dramatische Gipfel."],
      hu: ["Legmagasabb pontja 2403 méter.", "Botanikai sokszínűségéről híres.", "Az Elátkozott-hegység része.", "Drámai sziklacsúcsok jellemzik."],
      ro: ["Cel mai înalt punct are 2403 m.", "Cunoscut pentru diversitatea botanică.", "Face parte din Munții Blestemați.", "Oferă vârfuri dramatice."],
      en: ["Highest point is 2403 m.", "Known for botanical diversity.", "Part of the Accursed Mountains.", "Features dramatic peaks."]
    }, image: "/poi-images/me-002-hajla.webp"},
  // ME-003: Berane
  {
    id: "me-003-city",
    name: { de: "Berane", hu: "Berane", ro: "Berane", en: "Berane" },
    type: "city",
    coords: [19.8733, 42.8425],
    parent: "ME-003",
    description: {
      de: "Ein bedeutendes wirtschaftliches und kulturelles Zentrum im Norden.",
      hu: "Fontos gazdasági és kulturális központ északon.",
      ro: "Un important centru economic și cultural din nord.",
      en: "A significant economic and cultural center in the north."
    },
    facts: {
      de: ["Liegt am Fluss Lim.", "Einst Ivangrad genannt.", "Hat einen regionalen Flughafen.", "Umgeben von Bergmassiven."],
      hu: ["A Lim folyó mentén fekszik.", "Korábban Ivangradnak hívták.", "Regionális repülőtere van.", "Hegyek veszik körül."],
      ro: ["Situat pe râul Lim.", "Numit anterior Ivangrad.", "Are un aeroport regional.", "Înconjurat de masive montane."],
      en: ["Located on the Lim River.", "Formerly called Ivangrad.", "Has a regional airport.", "Surrounded by mountain massifs."]
    }
  },
  {
    id: "me-003-djurdjevi-stupovi",
    name: { de: "Đurđevi Stupovi", hu: "Đurđevi Stupovi", ro: "Đurđevi Stupovi", en: "Đurđevi Stupovi" },
    type: "historical",
    coords: [19.8633, 42.8550],
    parent: "ME-003",
    description: {
      de: "Ein historisches serbisch-orthodoxes Kloster aus dem 13. Jahrhundert.",
      hu: "13. századi történelmi szerb ortodox kolostor.",
      ro: "O mănăstire ortodoxă sârbă istorică din secolul al XIII-lea.",
      en: "A historic 13th-century Serbian Orthodox monastery."
    },
    facts: {
      de: ["Gegründet im Jahr 1213.", "Sitz der Eparchie Budimlja-Nikšić.", "Bedeutendes Denkmal der Nemanjić.", "Kulturhistorisches Erbe."],
      hu: ["1213-ban alapították.", "A Budimlja-Nikšić egyházmegye székhelye.", "A Nemanjić-dinasztia emléke.", "Kulturális örökség."],
      ro: ["Fondată în anul 1213.", "Sediul Eparhiei de Budimlja-Nikšić.", "Monument important al dinastiei Nemanjić.", "Moștenire cultural-istorică."],
      en: ["Founded in 1213.", "Seat of the Eparchy of Budimlja-Nikšić.", "Important Nemanjić dynasty monument.", "Cultural and historical heritage."]
    }, image: "/poi-images/me-003-djurdjevi-stupovi.webp"},
  // ME-004: Plav
  {
    id: "me-004-city",
    name: { de: "Plav", hu: "Plav", ro: "Plav", en: "Plav" },
    type: "city",
    coords: [19.9450, 42.5967],
    parent: "ME-004",
    description: {
      de: "Eine malerische Stadt am Fuße der Prokletije-Berge.",
      hu: "Gleccser menti város a Prokletije lábánál.",
      ro: "Un oraș pitoresc la poalele munților Prokletije.",
      en: "A picturesque town at the foot of the Prokletije mountains."
    },
    facts: {
      de: ["Bekannt für den Redžepagić-Turm.", "Liegt am Plav-See.", "Eingang zum Nationalpark Prokletije.", "Reich an Quellen und Bächen."],
      hu: ["A Redžepagić-toronyról híres.", "A Plavi-tó partján fekszik.", "A Prokletije Nemzeti Park kapuja.", "Forrásokban és patakokban gazdag."],
      ro: ["Cunoscut pentru Turnul Redžepagić.", "Situat pe malul lacului Plav.", "Intrarea în Parcul Național Prokletije.", "Bogat în izvoare și pâraie."],
      en: ["Known for the Redžepagić Tower.", "Located by Lake Plav.", "Gateway to Prokletije National Park.", "Rich in springs and streams."]
    }
  },
  {
    id: "me-004-plav-lake",
    name: { de: "Plav-See", hu: "Plavi-tó", ro: "Lacul Plav", en: "Lake Plav" },
    type: "lake",
    coords: [19.9250, 42.5983],
    parent: "ME-004",
    description: {
      de: "Ein wunderschöner See glazialen Ursprungs.",
      hu: "Gyönyörű gleccsereredetű tó.",
      ro: "Un lac frumos de origine glaciară.",
      en: "A beautiful lake of origin glacial origin."
    },
    facts: {
      de: ["Größter Gletschersee der Region.", "Fischreiches Gewässer.", "Beliebt für Bootsfahrten.", "Wichtiges Ökosystem."],
      hu: ["A régió legnagyobb gleccsertava.", "Halakban gazdag víz.", "Kedvelt csónakázóhely.", "Fontos ökoszisztéma."],
      ro: ["Cel mai mare lac glaciar din regiune.", "Ape bogate în pește.", "Popular pentru plimbări cu barca.", "Ecosistem important."],
      en: ["Largest glacial lake in the region.", "Waters rich in fish.", "Popular for boat rides.", "Important ecosystem."]
    }, image: "/poi-images/me-004-plav-lake.webp"},
  // ME-005: Pljevlja
  {
    id: "me-005-city",
    name: { de: "Pljevlja", hu: "Pljevlja", ro: "Pljevlja", en: "Pljevlja" },
    type: "city",
    coords: [19.3583, 43.3567],
    parent: "ME-005",
    description: {
      de: "Eine Industriestadt im Norden mit einer reichen multikulturellen Geschichte.",
      hu: "Északi iparváros gazdag multikulturális történelemmel.",
      ro: "Un oraș industrial din nord, cu o bogată istorie multiculturală.",
      en: "An industrial town in the north with a rich multicultural history."
    },
    facts: {
      de: ["Bekannt für Kohlebergbau.", "Heimat eines Wärmekraftwerks.", "Hat osmanische Architektur.", "Sitz des Municipium S."],
      hu: ["Szénbányászatáról ismert.", "Itt található egy hőerőmű.", "Oszmán építészeti emlékek.", "A római Municipium S helyszíne."],
      ro: ["Cunoscut pentru minele de cărbune.", "Găzduiește o termocentrală.", "Are arhitectură otomană.", "Situl vechiului Municipium S."],
      en: ["Known for coal mining.", "Home to a thermal power plant.", "Has Ottoman architecture.", "Site of ancient Municipium S."]
    }
  },
  {
    id: "me-005-husein-pasa",
    name: { de: "Husein-paša-Moschee", hu: "Husein-paša mecset", ro: "Moscheea Husein-paša", en: "Husein-paša Mosque" },
    type: "historical",
    coords: [19.3580, 43.3570],
    parent: "ME-005",
    description: {
      de: "Eines der schönsten Denkmäler der islamischen Architektur auf dem Balkan.",
      hu: "A balkáni iszlám építészet egyik legszebb emléke.",
      ro: "Unul dintre cele mai frumoase monumente de arhitectură islamică din Balcani.",
      en: "One of the most beautiful monuments of Islamic architecture in the Balkans."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Höchstes Minarett auf dem Balkan.", "Besitzt ein seltenes Koran-Manuskript.", "Prächtige Wandmalereien."],
      hu: ["A 16. században épült.", "A Balkán legmagasabb minaretje.", "Ritka Korán-kéziratot őriz.", "Pompás falfestmények."],
      ro: ["Construită în secolul al XVI-lea.", "Cel mai înalt minaret din Balcani.", "Deține un manuscris rar al Coranului.", "Picturi murale superbe."],
      en: ["Built in the 16th century.", "Highest minaret in the Balkans.", "Preserves a rare Quran manuscript.", "Stunning wall paintings."]
    }
  },
  // ME-006: Bijelo Polje
  {
    id: "me-006-city",
    name: { de: "Bijelo Polje", hu: "Bijelo Polje", ro: "Bijelo Polje", en: "Bijelo Polje" },
    type: "city",
    coords: [19.7475, 43.0383],
    parent: "ME-006",
    description: {
      de: "Die 'Weiße Stadt', ein wichtiger Verkehrsknotenpunkt im Norden.",
      hu: "A 'fehér város', fontos északi közlekedési csomópont.",
      ro: "„Câmpul Alb”, un important nod de transport din nord.",
      en: "The 'White Field', an important transport hub in the north."
    },
    facts: {
      de: ["Liegt an der Lim-Schlucht.", "Bedeutendes Handelszentrum.", "Bekannt für das Miroslav-Evangelium.", "Tor zu Serbien."],
      hu: ["A Lim-kanyonban fekszik.", "Jelentős kereskedelmi központ.", "A Miroszláv-evangéliumról híres.", "Kapu Szerbia felé."],
      ro: ["Situat pe valea râului Lim.", "Centru comercial important.", "Cunoscut pentru Evangheliarul lui Miroslav.", "Poarta spre Serbia."],
      en: ["Located in the Lim valley.", "Significant commercial center.", "Famous for Miroslav's Gospel.", "Gateway to Serbia."]
    }
  },
  {
    id: "me-006-st-peter",
    name: { de: "St. Peter-Kirche", hu: "Szent Péter-templom", ro: "Biserica Sf. Petru", en: "St. Peter's Church" },
    type: "historical",
    coords: [19.7500, 43.0400],
    parent: "ME-006",
    description: {
      de: "Eine Kirche aus dem 12. Jahrhundert, in der das Miroslav-Evangelium geschrieben wurde.",
      hu: "12. századi templom, ahol a Miroszláv-evangélium íródott.",
      ro: "O biserică din secolul al XII-lea, unde a fost scris Evangheliarul lui Miroslav.",
      en: "A 12th-century church where the Miroslav's Gospel was written."
    },
    facts: {
      de: ["Von Prinz Miroslav gestiftet.", "Prächtige romanische Architektur.", "Bedeutendes kulturelles Denkmal.", "Einst Sitz eines Bistums."],
      hu: ["Miroszláv herceg alapította.", "Pompás román kori építészet.", "Kiemelkedő kulturális emlék.", "Egykor püspöki székhely volt."],
      ro: ["Fondată de prințul Miroslav.", "Arhitectură romanică superbă.", "Monument cultural deosebit.", "Fost sediu episcopal."],
      en: ["Founded by Prince Miroslav.", "Superb Romanesque architecture.", "Significant cultural monument.", "Former episcopal seat."]
    }, image: "/poi-images/me-006-st-peter.webp"},
  // ME-007: Žabljak
  // ME-008: Plužine
  {
    id: "me-008-city",
    name: { de: "Plužine", hu: "Plužine", ro: "Plužine", en: "Plužine" },
    type: "city",
    coords: [18.8394, 43.1544],
    parent: "ME-008",
    description: {
      de: "Eine Stadt am Ufer des Piva-Stausees, umgeben von Schluchten.",
      hu: "Város a Piva-tó partján, kanyonokkal körülvéve.",
      ro: "Un oraș pe malul lacului Piva, înconjurat de canioane.",
      en: "A town on the shores of Lake Piva, surrounded by canyons."
    },
    facts: {
      de: ["Erbaut nach der Überflutung.", "Zentrum der Piva-Region.", "Bekannt für das Piva-Kloster.", "Bietet Wassersportmöglichkeiten."],
      hu: ["Az árasztás után épült fel.", "A Piva-régió központja.", "A Piva-kolostorról ismert.", "Vízi sportlehetőségeket kínál."],
      ro: ["Construit după inundație.", "Centrul regiunii Piva.", "Cunoscut pentru mănăstirea Piva.", "Oferă activități nautice."],
      en: ["Built after the flood.", "Center of the Piva region.", "Known for the Piva Monastery.", "Offers water sports."]
    }
  },
  {
    id: "me-008-piva-monastery",
    name: { de: "Kloster Piva", hu: "Piva-kolostor", ro: "Mănăstirea Piva", en: "Piva Monastery" },
    type: "historical",
    coords: [18.8250, 43.1110],
    parent: "ME-008",
    description: {
      de: "Ein Kloster, das Stein für Stein an einen neuen Ort verlegt wurde.",
      hu: "Kolostor, amelyet kőről kőre költöztettek új helyre.",
      ro: "O mănăstire care a fost mutată piatră cu piatră într-un loc nou.",
      en: "A monastery that was moved stone by stone to a new location."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Wegen Kraftwerksbau verlegt.", "Prächtige Freskenzyklen.", "Besitzt reiche Schatzkammer."],
      hu: ["A 16. században épült.", "Vízi erőmű miatt költöztették.", "Pompás freskóciklusok.", "Gazdag kincstárral bír."],
      ro: ["Construită în secolul al XVI-lea.", "Mutată din cauza hidrocentralei.", "Cicluri superbe de fresce.", "Deține un tezaur bogat."],
      en: ["Built in the 16th century.", "Moved due to power plant construction.", "Superb fresco cycles.", "Has a rich treasury."]
    }, image: "/poi-images/me-008-piva-monastery.webp"},
  // ME-009: Nikšic
  {
    id: "me-009-krupac",
    name: { de: "Krupac-See", hu: "Krupac-tó", ro: "Lacul Krupac", en: "Krupac Lake" },
    type: "lake",
    coords: [18.8900, 42.7800],
    parent: "ME-009",
    description: {
      de: "Ein künstlicher See in der Nähe von Nikšić, ein beliebtes Erholungsgebiet.",
      hu: "Mesterséges tó Nikšić közelében, népszerű üdülőhely.",
      ro: "Un lac artificial lângă Nikšić, o zonă populară de recreere.",
      en: "An artificial lake near Nikšić, a popular recreation area."
    },
    facts: {
      de: ["Wird 'Meer von Nikšić' genannt.", "Austragungsort von Musikfestivals.", "Beliebt zum Schwimmen.", "Reich an Fischbestand."],
      hu: ["'Nikšić tengerének' is hívják.", "Zenei fesztiválok helyszíne.", "Kedvelt fürdőhely.", "Gazdag halállománnyal bír."],
      ro: ["Numit „marea din Nikšić”.", "Gazda unor festivaluri de muzică.", "Popular pentru înot.", "Bogat în resurse piscicole."],
      en: ["Called the 'Nikšić sea'.", "Host to music festivals.", "Popular for swimming.", "Rich in fish stock."]
    }, image: "/poi-images/me-009-krupac.webp"},
  // ME-010: Kotor
  {
    id: "me-010-perast",
    name: { de: "Perast", hu: "Perast", ro: "Perast", en: "Perast" },
    type: "city",
    coords: [18.7000, 42.4867],
    parent: "ME-010",
    description: {
      de: "Eine ruhige, barocke Stadt direkt am Wasser in der Bucht von Kotor.",
      hu: "Csendes, barokk stílusú vízparti város a Kotori-öbölben.",
      ro: "Un oraș baroc liniștit pe malul apei în Golful Kotor.",
      en: "A quiet, baroque-style waterfront town in the Bay of Kotor."
    },
    facts: {
      de: ["Einst eine wichtige Seefahrerstadt.", "Hat 16 Paläste und 19 Kirchen.", "Blick auf zwei Inseln.", "Vollständig geschützte Altstadt."],
      hu: ["Egykor fontos hajós város volt.", "16 palotája és 19 temploma van.", "Kilátás két kis szigetre.", "Teljesen védett óváros."],
      ro: ["Fost oraș important de navigatori.", "Are 16 palate și 19 biserici.", "Vedere spre două insule.", "Oraș vechi complet protejat."],
      en: ["Once an important maritime town.", "Has 16 palaces and 19 churches.", "Overlooks two islets.", "Completely protected old town."]
    }, image: "/poi-images/me-010-perast.webp"},
  // ME-011: Andrijevica
  {
    id: "me-011-city",
    name: { de: "Andrijevica", hu: "Andrijevica", ro: "Andrijevica", en: "Andrijevica" },
    type: "city",
    coords: [19.7917, 42.7339],
    parent: "ME-011",
    description: {
      de: "Eine kleine Stadt im Tal des Flusses Lim, umgeben von Komovi.",
      hu: "Kisváros a Lim folyó völgyében, a Komovi-hegység gyűrűjében.",
      ro: "Un oraș mic în valea râului Lim, înconjurat de Komovi.",
      en: "A small town in the Lim river valley, surrounded by Komovi."
    },
    facts: {
      de: ["Gegründet im 19. Jahrhundert.", "Zentrum der Vasojevići-Region.", "Ausgangspunkt für Bergsteiger.", "Reich an Bergquellen."],
      hu: ["A 19. században alapították.", "A Vasojevići régió központja.", "Hegymászók kedvelt bázisa.", "Hegyi forrásokban gazdag."],
      ro: ["Fondat în secolul al XIX-lea.", "Centrul regiunii Vasojevići.", "Punct de plecare pentru alpiniști.", "Bogat în izvoare montane."],
      en: ["Founded in the 19th century.", "Center of the Vasojevići region.", "Starting point for mountaineers.", "Rich in mountain springs."]
    }
  },
  {
    id: "me-011-komovi",
    name: { de: "Komovi", hu: "Komovi", ro: "Komovi", en: "Komovi" },
    type: "mountain",
    coords: [19.6667, 42.7167],
    parent: "ME-011",
    description: {
      de: "Eines der beeindruckendsten Gebirgsmassive Montenegros.",
      hu: "Montenegró egyik leglenyűgözőbb hegymasszívuma.",
      ro: "Unul dintre cele mai impresionante masive montane din Muntenegru.",
      en: "One of the most impressive mountain massifs in Montenegro."
    },
    facts: {
      de: ["Drei markante Gipfel.", "Über 2400 m hoch.", "Reich an Almwiesen.", "Beliebt für Hochgebirgswandern."],
      hu: ["Három jellegzetes csúcsból áll.", "2400 méter feletti magasság.", "Alpesi legelőkben gazdag.", "Népszerű magashegyi túrahely."],
      ro: ["Trei vârfuri proeminente.", "Peste 2400 m înălțime.", "Bogat în pășuni alpine.", "Popular pentru drumeții montane."],
      en: ["Composed of three prominent peaks.", "Over 2400 m high.", "Rich in alpine meadows.", "Popular for high mountain hiking."]
    }, image: "/poi-images/me-011-komovi.webp"},
  // ME-012: Podgorica
  {
    id: "me-012-millennium",
    name: { de: "Millennium-Brücke", hu: "Milenijum híd", ro: "Podul Mileniului", en: "Millennium Bridge" },
    type: "landmark",
    coords: [19.2589, 42.4450],
    parent: "ME-012",
    description: {
      de: "Ein modernes Wahrzeichen der Hauptstadt über den Fluss Morača.",
      hu: "A főváros modern jelképe a Morača folyó felett.",
      ro: "Un simbol modern al capitalei peste râul Morača.",
      en: "A modern symbol of the capital over the Morača river."
    },
    facts: {
      de: ["Eröffnet im Jahr 2005.", "173 Meter lang.", "Beeindruckende Pylon-Struktur.", "Verbindet Alt- und Neustadt."],
      hu: ["2005-ben adták át.", "173 méter hosszú.", "Lenyűgöző pilonos szerkezet.", "Összeköti az óvárost az újjal."],
      ro: ["Inaugurat în anul 2005.", "Lung de 173 metri.", "Structură de pilon impresionantă.", "Conectează orașul vechi de cel nou."],
      en: ["Opened in 2005.", "173 meters long.", "Impressive pylon structure.", "Connects old and new town."]
    }, image: "/poi-images/me-012-millennium.webp"},
  // ME-013: Bar
  // ME-014: Ulcinj
  // ME-015: Budva
  // ME-016: Tivat
  {
    id: "me-016-porto-montenegro",
    name: { de: "Porto Montenegro", hu: "Porto Montenegro", ro: "Porto Montenegro", en: "Porto Montenegro" },
    type: "landmark",
    coords: [18.6917, 42.4333],
    parent: "ME-016",
    description: {
      de: "Ein luxuriöser Yachthafen und Resort von Weltklasse.",
      hu: "Világszínvonalú luxus jachtkikötő és üdülőhely.",
      ro: "O marină de lux și o stațiune de clasă mondială.",
      en: "A world-class luxury yacht marina and resort."
    },
    facts: {
      de: ["Exklusive Einkaufsmeile.", "Bietet Superyacht-Liegeplätze.", "Elegante Architektur.", "Ehemalige Militärbasis."],
      hu: ["Exkluzív bevásárlónegyed.", "Szuperjacht-kikötőhelyek.", "Elegáns építészet.", "Egykori katonai bázis."],
      ro: ["Zonă de cumpărături exclusivistă.", "Oferă locuri de acostare pentru super-iahturi.", "Arhitectură elegantă.", "Fostă bază militară."],
      en: ["Exclusive shopping mile.", "Offers superyacht berths.", "Elegant architecture.", "Former military base."]
    }, image: "/poi-images/me-016-porto-montenegro.webp"},
  // ME-017: Mojkovac
  {
    id: "me-017-city",
    name: { de: "Mojkovac", hu: "Mojkovac", ro: "Mojkovac", en: "Mojkovac" },
    type: "city",
    coords: [19.5833, 42.9600],
    parent: "ME-017",
    description: {
      de: "Eine Stadt am Fluss Tara, bekannt für eine historische Schlacht.",
      hu: "Város a Tara folyó mentén, történelmi csatájáról nevezetes.",
      ro: "Un oraș pe râul Tara, cunoscut pentru o bătălie istorică.",
      en: "A town on the Tara River, famous for a historic battle."
    },
    facts: {
      de: ["Schauplatz der Schlacht von 1916.", "Liegt zwischen Tara und Lim.", "Bergbautradition.", "Tor zur Tara-Schlucht."],
      hu: ["Az 1916-os csata helyszíne.", "A Tara és Lim között fekszik.", "Bányászati hagyományok.", "Kapu a Tara-kanyonhoz."],
      ro: ["Locul bătăliei din 1916.", "Situat între râurile Tara și Lim.", "Tradiție minieră.", "Poarta spre Canionul Tara."],
      en: ["Site of the 1916 battle.", "Located between Tara and Lim.", "Mining tradition.", "Gateway to the Tara Canyon."]
    }
  },
  // ME-018: Cetinje
  {
    id: "me-018-lovcen",
    name: { de: "Nationalpark Lovćen", hu: "Lovćen Nemzeti Park", ro: "Parcul Național Lovćen", en: "Lovćen National Park" },
    type: "landmark",
    coords: [18.8333, 42.4000],
    parent: "ME-018",
    description: {
      de: "Ein heiliger Berg für Montenegriner mit Panoramablick.",
      hu: "A montenegróiak szent hegye panorámás kilátással.",
      ro: "Un munte sfânt pentru muntenegreni, cu vederi panoramice.",
      en: "A sacred mountain for Montenegrins with panoramic views."
    },
    facts: {
      de: ["Heimat des Njegoš-Mausoleums.", "Symbol der Freiheit.", "Reich an Heilpflanzen.", "Einzigartiges Klima."],
      hu: ["Itt található a Njegoš-mauzóleum.", "A szabadság szimbóluma.", "Gyógynövényekben gazdag.", "Egyedülálló klíma."],
      ro: ["Găzduiește Mausoleul lui Njegoš.", "Simbol al libertății.", "Bogat în plante medicinale.", "Climat unic."],
      en: ["Home to the Njegoš Mausoleum.", "Symbol of freedom.", "Rich in medicinal plants.", "Unique climate."]
    }, image: "/poi-images/me-018-lovcen.webp"},
  // ME-019: Šavnik
  {
    id: "me-019-city",
    name: { de: "Šavnik", hu: "Šavnik", ro: "Šavnik", en: "Šavnik" },
    type: "city",
    coords: [19.0967, 42.9564],
    parent: "ME-019",
    description: {
      de: "Eine kleine Stadt am Zusammenfluss dreier Flüsse.",
      hu: "Kisváros három folyó összefolyásánál.",
      ro: "Un oraș mic la confluența a trei râuri.",
      en: "A small town at the confluence of three rivers."
    },
    facts: {
      de: ["Kleinste Gemeindehauptstadt.", "Liegt in einem tiefen Tal.", "Umgeben von Hochgebirge.", "Früher ein Handelsplatz."],
      hu: ["A legkisebb községközpont.", "Mély völgyben fekszik.", "Magas hegyek veszik körül.", "Korábban kereskedelmi hely."],
      ro: ["Cea mai mică reședință de comună.", "Situat într-o vale adâncă.", "Înconjurat de munți înalți.", "Fost loc de schimb comercial."],
      en: ["Smallest municipal center.", "Located in a deep valley.", "Surrounded by high mountains.", "Formerly a trading post."]
    }
  },
  {
    id: "me-019-nevidio",
    name: { de: "Nevidio-Schlucht", hu: "Nevidio-kanyon", ro: "Canionul Nevidio", en: "Nevidio Canyon" },
    type: "landmark",
    coords: [19.0667, 42.9833],
    parent: "ME-019",
    description: {
      de: "Die letzte entdeckte Schlucht in Europa, ein Abenteuerziel.",
      hu: "Európa utolsóként felfedezett kanyonja, kalandvágyók célpontja.",
      ro: "Ultimul canion descoperit în Europa, o destinație de aventură.",
      en: "The last discovered canyon in Europe, an adventure destination."
    },
    facts: {
      de: ["Name bedeutet 'Nicht gesehen'.", "Extrem schmal und tief.", "Nur mit Guide begehbar.", "Spektakuläre Wasserfälle."],
      hu: ["A neve azt jelenti: 'nem látott'.", "Rendkívül szűk és mély.", "Csak vezetővel látogatható.", "Látványos vízesések."],
      ro: ["Numele înseamnă „Nevăzutul”.", "Extrem de îngust și adânc.", "Accesibil doar cu ghid.", "Cascade spectaculoase."],
      en: ["Name means 'Unseen'.", "Extremely narrow and deep.", "Accessible only with a guide.", "Spectacular waterfalls."]
    }, image: "/poi-images/me-019-nevidio.webp"},
  // ME-020: Kolašin
  {
    id: "me-020-city",
    name: { de: "Kolašin", hu: "Kolašin", ro: "Kolašin", en: "Kolašin" },
    type: "city",
    coords: [19.5214, 42.8225],
    parent: "ME-020",
    description: {
      de: "Ein beliebtes Zentrum für Berg- und Wintersport im Norden.",
      hu: "Népszerű hegyi és téli sportközpont északon.",
      ro: "Un centru popular pentru sporturi montane și de iarnă din nord.",
      en: "A popular center for mountain and winter sports in the north."
    },
    facts: {
      de: ["Gegründet von Osmanen.", "Liegt am Fluss Tara.", "Zentrum für Skifahren.", "Luftkurort-Qualitäten."],
      hu: ["Oszmánok alapították.", "A Tara folyó partján fekszik.", "Síelési központ.", "Klimatikus gyógyhely."],
      ro: ["Fondat de otomani.", "Situat pe râul Tara.", "Centru pentru schi.", "Calități de stațiune climatică."],
      en: ["Founded by Ottomans.", "Located by the Tara River.", "Center for skiing.", "Climatic health resort qualities."]
    }
  },
  {
    id: "me-020-bjelasica",
    name: { de: "Bjelasica", hu: "Bjelasica", ro: "Bjelasica", en: "Bjelasica" },
    type: "mountain",
    coords: [19.6667, 42.8667],
    parent: "ME-020",
    description: {
      de: "Ein sanfteres Gebirge, ideal zum Wandern und Skifahren.",
      hu: "Lankásabb hegyvidék, ideális túrázáshoz és síeléshez.",
      ro: "Un munte cu pante mai domoale, ideal pentru drumeții și schi.",
      en: "A gentler mountain range, ideal for hiking and skiing."
    },
    facts: {
      de: ["Vulkanischen Ursprungs.", "Reich an Seen und Wäldern.", "Sitz großer Skizentren.", "Leicht zugängliche Gipfel."],
      hu: ["Vulkanikus eredetű.", "Tavakban és erdőkben gazdag.", "Nagy síközpontok helyszíne.", "Könnyen elérhető csúcsok."],
      ro: ["De origine vulcanică.", "Bogat în lacuri și păduri.", "Găzduiește mari centre de schi.", "Vârfuri ușor accesibile."],
      en: ["Of volcanic origin.", "Rich in lakes and forests.", "Home to major ski centers.", "Easily accessible peaks."]
    }, image: "/poi-images/me-020-bjelasica.webp"},
  // ME-021: Danilovgrad
  {
    id: "me-021-city",
    name: { de: "Danilovgrad", hu: "Danilovgrad", ro: "Danilovgrad", en: "Danilovgrad" },
    type: "city",
    coords: [19.1467, 42.5900],
    parent: "ME-021",
    description: {
      de: "Eine Stadt im Bjelopavlići-Tal, benannt nach Fürst Danilo.",
      hu: "Város a Bjelopavlići-völgyben, Danilo fejedelemről elnevezve.",
      ro: "Un oraș în valea Bjelopavlići, numit după prințul Danilo.",
      en: "A town in the Bjelopavlići valley, named after Prince Danilo."
    },
    facts: {
      de: ["Geplant als Landeshauptstadt.", "Bekannt für Steinmetzkunst.", "Liegt am Fluss Zeta.", "Zentrum der Landwirtschaft."],
      hu: ["Fővárosnak tervezték.", "Kőfaragó művészetéről híres.", "A Zeta folyó partján fekszik.", "Mezőgazdasági központ."],
      ro: ["Planificat a fi capitală.", "Cunoscut pentru arta pietrei.", "Situat pe râul Zeta.", "Centru agricol."],
      en: ["Planned to be the capital.", "Known for stonemasonry.", "Located on the Zeta River.", "Agricultural center."]
    }
  },
];
