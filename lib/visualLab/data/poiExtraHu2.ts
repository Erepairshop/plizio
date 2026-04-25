import type { POI } from "./poi";

export const poiExtraHu2: POI[] = [
  // HU-BU: Budapest
  {
    id: "mountain-janos-hegy-extra",
    type: "mountain",
    parent: "HU-BU",
    coords: [18.959, 47.518],
    name: { de: "Janos-Berg", hu: "János-hegy", ro: "Dealul János", en: "Janos Hill" },
    description: {
      de: "Der höchste Punkt von Budapest mit der Erzsébet-Aussichtswarte.",
      hu: "Budapest legmagasabb pontja, amelyen az Erzsébet-kilátó áll.",
      ro: "Cel mai înalt punct din Budapesta, unde se află turnul de observație Erzsébet.",
      en: "The highest point of Budapest, featuring the Erzsébet Lookout Tower."
    },
    facts: {
      de: ["Höhe: 527 Meter.", "Beliebtes Ausflugsziel.", "Erreichbar mit der Libegő-Seilbahn."],
      hu: ["Magassága: 527 méter.", "Népszerű kirándulóhely.", "A Libegővel is megközelíthető."],
      ro: ["Înălțime: 527 metri.", "Destinație populară de excursie.", "Accesibil cu telescaunul Libegő."],
      en: ["Height: 527 meters.", "Popular excursion destination.", "Accessible by the Libegő chairlift."]
    }
  },
  {
    id: "mountain-harmashatar-hegy-extra",
    type: "mountain",
    parent: "HU-BU",
    coords: [19.002, 47.555],
    name: { de: "Drei-Grenzen-Berg", hu: "Hármashatár-hegy", ro: "Dealul Hármashatár", en: "Harmashatar Hill" },
    description: {
      de: "Ein markanter Berg in den Budaer Bergen, bekannt für seine Rundsicht.",
      hu: "A Budai-hegység egyik meghatározó csúcsa, körpanorámájáról híres.",
      ro: "Un vârf proeminent din munții Buda, faimos pentru panorama sa circulară.",
      en: "A prominent peak in the Buda Mountains, famous for its circular panorama."
    },
    facts: {
      de: ["Höhe: 495 Meter.", "Zentrum für Segelflugzeuge.", "Name bezieht sich auf drei historische Grenzen."],
      hu: ["Magassága: 495 méter.", "Vitorlázórepülő központ.", "Neve három történelmi határra utal."],
      ro: ["Înălțime: 495 metri.", "Centru pentru planoare.", "Numele se referă la trei frontiere istorice."],
      en: ["Height: 495 meters.", "Gliding center.", "Name refers to three historic borders."]
    }
  },
  {
    id: "mountain-sas-hegy-extra",
    type: "mountain",
    parent: "HU-BU",
    coords: [19.018, 47.482],
    name: { de: "Adlerberg", hu: "Sas-hegy", ro: "Dealul Sas", en: "Sas Hill" },
    description: {
      de: "Ein Naturschutzgebiet im Herzen von Buda mit einzigartiger Flora.",
      hu: "Természetvédelmi terület Buda szívében, egyedülálló növényvilággal.",
      ro: "O rezervație naturală în inima Budei, cu o floră unică.",
      en: "A nature reserve in the heart of Buda with unique flora."
    },
    facts: {
      de: ["Wichtiger Lebensraum für seltene Pflanzen.", "Lehrpfad für Besucher.", "Bietet Blick auf das Gellért-Gebiet."],
      hu: ["Ritka növények fontos élőhelye.", "Tanösvény a látogatóknak.", "Kilátást nyújt a Gellért-hegy környékére."],
      ro: ["Habitat important pentru plante rare.", "Traseu didactic pentru vizitatori.", "Oferă vedere spre zona Gellért."],
      en: ["Important habitat for rare plants.", "Educational trail for visitors.", "Offers view of the Gellért area."]
    }
  },
  {
    id: "lake-naplas-to-extra",
    type: "lake",
    parent: "HU-BU",
    coords: [19.252, 47.505],
    name: { de: "Naplas-See", hu: "Naplás-tó", ro: "Lacul Naplás", en: "Lake Naplas" },
    description: {
      de: "Der größte See von Budapest, ein wichtiges ökologisches Gebiet.",
      hu: "Budapest legnagyobb kiterjedésű állóvize, fontos ökológiai terület.",
      ro: "Cea mai mare întindere de apă din Budapesta, o zonă ecologică importantă.",
      en: "The largest body of standing water in Budapest, an important ecological area."
    },
    facts: {
      de: ["Naturschutzgebiet.", "Besitzt eine neue Aussichtswarte.", "Heimat vieler Sumpfschildkröten."],
      hu: ["Természetvédelmi terület.", "Új kilátóval rendelkezik.", "Számos mocsári teknős élőhelye."],
      ro: ["Rezervație naturală.", "Deține un nou turn de observare.", "Habitat pentru multe țestoase de mlaștină."],
      en: ["Nature reserve.", "Features a new lookout tower.", "Home to many pond turtles."]
    }
  },
  {
    id: "river-soroksari-duna-extra",
    type: "river",
    parent: "HU-BU",
    coords: [19.100, 47.400],
    name: { de: "Soroksar-Donau", hu: "Soroksári-Duna", ro: "Brațul Soroksár al Dunării", en: "Soroksar Danube" },
    description: {
      de: "Ein Nebenarm der Donau mit ruhigem Wasser und reicher Natur.",
      hu: "A Duna egyik mellékága nyugodt vízzel és gazdag természettel.",
      ro: "Un braț lateral al Dunării cu ape liniștite și natură bogată.",
      en: "A side arm of the Danube with calm water and rich nature."
    },
    facts: {
      de: ["Beliebt bei Anglern und Ruderern.", "Besitzt schwimmende Moore.", "Wichtiger Teil des Csepel-Gebiets."],
      hu: ["Horgászok és evezősök kedvelt helye.", "Úszólápok találhatók rajta.", "A Csepel-sziget mentén húzódik."],
      ro: ["Loc preferat de pescari și canotiști.", "Deține mlaștini plutitoare.", "Parte importantă a zonei Csepel."],
      en: ["Favorite place for anglers and rowers.", "Features floating bogs.", "Important part of the Csepel area."]
    }
  },
  // HU-BA: Baranya
  {
    id: "mountain-zengo-extra",
    type: "mountain",
    parent: "HU-BA",
    coords: [18.465, 46.174],
    name: { de: "Zengő", hu: "Zengő", ro: "Zengő", en: "Zengő" },
    description: {
      de: "Der höchste Gipfel des Mecsek-Gebirges in Südungarn.",
      hu: "A Mecsek-hegység legmagasabb csúcsa Dél-Magyarországon.",
      ro: "Cel mai înalt vârf al munților Mecsek din sudul Ungariei.",
      en: "The highest peak of the Mecsek Mountains in southern Hungary."
    },
    facts: {
      de: ["Höhe: 682 Meter.", "Standort einer modernen Aussichtswarte.", "Bedeutendes Wanderziel."],
      hu: ["Magassága: 682 méter.", "Modern kilátó található rajta.", "Jelentős túracélpont."],
      ro: ["Înălțime: 682 metri.", "Locația unui turn de observație modern.", "Destinație importantă de drumeție."],
      en: ["Height: 682 meters.", "Site of a modern lookout tower.", "Significant hiking destination."]
    }
  },
  {
    id: "mountain-tubes-extra",
    type: "mountain",
    parent: "HU-BA",
    coords: [18.204, 46.134],
    name: { de: "Tubes", hu: "Tubes", ro: "Tubes", en: "Tubes" },
    description: {
      de: "Ein markanter Gipfel im Mecsek über der Stadt Pécs.",
      hu: "A Mecsek egyik meghatározó csúcsa Pécs városa felett.",
      ro: "Un vârf proeminent în munții Mecsek, deasupra orașului Pécs.",
      en: "A prominent peak in the Mecsek Mountains above the city of Pécs."
    },
    facts: {
      de: ["Höhe: 611 Meter.", "Besitzt die János-Aussichtswarte.", "Bietet Blick auf das Dráva-Tal."],
      hu: ["Magassága: 611 méter.", "Itt található a János-kilátó.", "Kilátást nyújt a Dráva völgyére."],
      ro: ["Înălțime: 611 metri.", "Deține turnul de observație János.", "Oferă vedere spre valea râului Dráva."],
      en: ["Height: 611 meters.", "Features the János Lookout Tower.", "Offers view of the Dráva Valley."]
    }
  },
  {
    id: "mountain-jakab-hegy-extra",
    type: "mountain",
    parent: "HU-BA",
    coords: [18.140, 46.096],
    name: { de: "Jakobsberg", hu: "Jakab-hegy", ro: "Dealul Jakab", en: "Jakab Hill" },
    description: {
      de: "Ein geschichtsträchtiger Berg bei Pécs mit prähistorischen Wällen.",
      hu: "Történelmi jelentőségű hegy Pécs mellett, őskori sáncokkal.",
      ro: "Un deal cu semnificație istorică lângă Pécs, cu metereze preistorice.",
      en: "A mountain of historic significance near Pécs with prehistoric ramparts."
    },
    facts: {
      de: ["Besteht aus rotem Sandstein.", "Ruinen eines Paulinerklosters.", "Eindrucksvolle Felsformationen."],
      hu: ["Vörös homokkőből épül fel.", "Pálos kolostor romjai találhatók itt.", "Látványos sziklaalakzatok."],
      ro: ["Format din gresie roșie.", "Ruine ale unei mănăstiri pauline.", "Formațiuni stâncoase impresionante."],
      en: ["Composed of red sandstone.", "Ruins of a Pauline monastery.", "Spectacular rock formations."]
    }
  },
  {
    id: "river-fekete-viz-extra",
    type: "river",
    parent: "HU-BA",
    coords: [18.150, 45.850],
    name: { de: "Schwarzbach", hu: "Fekete-víz", ro: "Fekete-víz", en: "Fekete-viz River" },
    description: {
      de: "Ein kleiner Fluss in der Baranya-Ebene, ein wichtiger Entwässerer.",
      hu: "Kis folyó a Baranyai-síkságon, a térség fontos vízgyűjtője.",
      ro: "Un râu mic în Câmpia Baranya, un colector de apă important.",
      en: "A small river in the Baranya Plain, an important drainage for the area."
    },
    facts: {
      de: ["Fließt in die Drau.", "Prägt die Sumpflandschaft Ormánság.", "Reich an Kleinfauna."],
      hu: ["A Drávába torkollik.", "Meghatározza az Ormánság mocsaras táját.", "Gazdag apróállat-világ."],
      ro: ["Se varsă în Dráva.", "Definește peisajul mlaștinos din Ormánság.", "Bogat în faună mică."],
      en: ["Flows into the Drava.", "Defines the marshy landscape of Ormánság.", "Rich in small fauna."]
    }
  },
  {
    id: "lake-orfui-to-extra",
    type: "lake",
    parent: "HU-BA",
    coords: [18.150, 46.150],
    name: { de: "Orfu-See", hu: "Orfűi-tó", ro: "Lacul Orfű", en: "Lake Orfu" },
    description: {
      de: "Ein künstliches Seensystem im Mecsek, ein beliebtes Freizeitzentrum.",
      hu: "Mesterséges tórendszer a Mecsekben, népszerű szabadidőközpont.",
      ro: "Un sistem de lacuri artificiale în Mecsek, un centru popular de recreere.",
      en: "A system of artificial lakes in the Mecsek, a popular leisure center."
    },
    facts: {
      de: ["Besteht aus vier Einzelseen.", "Ort des Musikfestivals 'Fishing on Orfű'.", "Wichtiger Ort für Wassersport."],
      hu: ["Négy különálló tóból áll.", "A 'Fishing on Orfű' fesztivál helyszíne.", "Vízisportok fontos helyszíne."],
      ro: ["Format din patru lacuri individuale.", "Locul festivalului de muzică 'Fishing on Orfű'.", "Loc important pentru sporturi nautice."],
      en: ["Consists of four individual lakes.", "Site of the 'Fishing on Orfű' music festival.", "Important site for water sports."]
    }
  },
  // HU-BK: Bács-Kiskun
  {
    id: "lake-kunfeher-to-extra",
    type: "lake",
    parent: "HU-BK",
    coords: [19.410, 46.360],
    name: { de: "Kunfeher-See", hu: "Kunfehértói-tó", ro: "Lacul Kunfehértó", en: "Lake Kunfeherto" },
    description: {
      de: "Ein Naturbadestee im Komitat Bács-Kiskun mit heilender Wirkung.",
      hu: "Természetes fürdőtó Bács-Kiskun vármegyében, gyógyhatással.",
      ro: "Un lac natural pentru scăldat în județul Bács-Kiskun, cu efecte curative.",
      en: "A natural bathing lake in Bács-Kiskun county with healing properties."
    },
    facts: {
      de: ["Bekannt für seinen Waldstrand.", "Salzhaltiges Wasser.", "Beliebtes Urlaubsziel."],
      hu: ["Erdős strandjáról ismert.", "Sós vizű tó.", "Kedvelt nyaralóhely."],
      ro: ["Cunoscut pentru plaja sa împădurită.", "Apă sărată.", "Destinație preferată de vacanță."],
      en: ["Known for its forest beach.", "Salty water lake.", "Popular holiday destination."]
    }
  },
  {
    id: "lake-szelidi-to-extra",
    type: "lake",
    parent: "HU-BK",
    coords: [19.050, 46.630],
    name: { de: "Szelider See", hu: "Szelidi-tó", ro: "Lacul Szelid", en: "Lake Szelid" },
    description: {
      de: "Der fünftgrößte See Ungarns, ein ehemaliger Altarm der Donau.",
      hu: "Magyarország ötödik legnagyobb tava, a Duna egykori holtága.",
      ro: "Al cincilea cel mai mare lac din Ungaria, un fost braț mort al Dunării.",
      en: "Hungary's fifth largest lake, a former dead arm of the Danube."
    },
    facts: {
      de: ["Besitzt heilendes Natronwasser.", "Länge: 5 Kilometer.", "Beliebt für Sommerferien."],
      hu: ["Gyógyhatású szikes vize van.", "Hossza: 5 kilométer.", "Népszerű nyári üdülőhely."],
      ro: ["Deține apă alcalină curativă.", "Lungime: 5 kilometri.", "Stațiune populară de vară."],
      en: ["Has curative alkaline water.", "Length: 5 kilometers.", "Popular summer resort."]
    }
  },
  {
    id: "lake-kolon-to-extra",
    type: "lake",
    parent: "HU-BK",
    coords: [19.250, 46.780],
    name: { de: "Kolon-See", hu: "Kolon-tó", ro: "Lacul Kolon", en: "Lake Kolon" },
    description: {
      de: "Ein wichtiger Sumpfsee im Kiskunság-Nationalpark.",
      hu: "Fontos mocsári tó a Kiskunsági Nemzeti Park területén.",
      ro: "Un lac mlaștinos important în Parcul Național Kiskunság.",
      en: "An important marsh lake in the Kiskunság National Park."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat.", "Bedeutendes Vogelschutzgebiet.", "Besitzt Aussichtstürme zur Beobachtung."],
      hu: ["UNESCO bioszféra-rezervátum.", "Jelentős madárvédelmi terület.", "Kilátók segítik a megfigyelést."],
      ro: ["Rezervație a biosferei UNESCO.", "Zonă importantă de protecție a păsărilor.", "Turnuri de observație pentru vizitatori."],
      en: ["UNESCO Biosphere Reserve.", "Significant bird sanctuary.", "Lookout towers for observation."]
    }
  },
  {
    id: "forest-bugaci-puszta-extra",
    type: "forest",
    parent: "HU-BK",
    coords: [19.650, 46.680],
    name: { de: "Bugac-Puszta", hu: "Bugaci puszta", ro: "Bugac puszta", en: "Bugac Puszta" },
    description: {
      de: "Ein Teil des Kiskunság-Nationalparks, berühmt für seine Reitertraditionen.",
      hu: "A Kiskunsági Nemzeti Park része, híres lovas hagyományairól.",
      ro: "Parte a Parcului Național Kiskunság, faimoasă pentru tradițiile de călărie.",
      en: "Part of the Kiskunság National Park, famous for its equestrian traditions."
    },
    facts: {
      de: ["Heimat des ungarischen Graurinds.", "Traditionelle Hirtenkultur.", "Ort der Kurultáj-Versammlung."],
      hu: ["A magyar szürkemarha otthona.", "Hagyományos pásztorkultúra.", "A Kurultáj találkozó helyszíne."],
      ro: ["Patria vitelor sure maghiare.", "Cultură pastorală tradițională.", "Locul întâlnirii Kurultáj."],
      en: ["Home to the Hungarian Grey Cattle.", "Traditional shepherd culture.", "Venue of the Kurultáj gathering."]
    }
  },
  {
    id: "river-csatorna-duna-tisza-extra",
    type: "river",
    parent: "HU-BK",
    coords: [19.500, 46.500],
    name: { de: "Donau-Theiß-Kanal", hu: "Duna-Tisza-csatorna", ro: "Canalul Dunăre-Tisa", en: "Danube-Tisza Canal" },
    description: {
      de: "Ein unvollendetes Kanalprojekt zur Verbindung der beiden größten Flüsse.",
      hu: "Befejezetlen csatornaterv a két legnagyobb folyó összekötésére.",
      ro: "Un proiect de canal neterminat pentru conectarea celor mai mari două râuri.",
      en: "An unfinished canal project to connect the two largest rivers."
    },
    facts: {
      de: ["Wichtiger Be- und Entwässerer.", "Prägt die Tiefebene.", "Beliebtes Angelrevier."],
      hu: ["Fontos öntöző és vízelvezető.", "Meghatározza az Alföld táját.", "Népszerű horgászvíz."],
      ro: ["Sursă importantă de irigații.", "Definește peisajul Câmpiei Ungare.", "Zonă populară de pescuit."],
      en: ["Important irrigation and drainage channel.", "Defines the landscape of the Great Plain.", "Popular fishing water."]
    }
  },
  // HU-BE: Békés
  {
    id: "river-harmas-koros-extra",
    type: "river",
    parent: "HU-BE",
    coords: [20.500, 46.900],
    name: { de: "Drei-Kreisch", hu: "Hármas-Körös", ro: "Crișul Triplu", en: "Harmas-Koros" },
    description: {
      de: "Ein malerischer Fluss in Südostungarn, entstanden aus der Vereinigung von drei Kreisch-Armen.",
      hu: "Festői folyó Délkelet-Magyarországon, három Körös-ág egyesüléséből jön létre.",
      ro: "Un râu pitoresc din sud-estul Ungariei, format prin unirea a trei brațe ale Crișului.",
      en: "A picturesque river in southeastern Hungary, formed by the union of three Koros branches."
    },
    facts: {
      de: ["Mündet in die Theiß.", "Bekannt für seine Altwasserarme.", "Reich an Fischarten."],
      hu: ["A Tiszába torkollik.", "Holtágairól nevezetes.", "Halfajokban gazdag."],
      ro: ["Se varsă în Tisa.", "Renumit pentru brațele sale moarte.", "Bogat în specii de pești."],
      en: ["Flows into the Tisza.", "Famous for its oxbow lakes.", "Rich in fish species."]
    }
  },
  {
    id: "river-sebes-koros-extra",
    type: "river",
    parent: "HU-BE",
    coords: [21.200, 46.950],
    name: { de: "Schnelle Kreisch", hu: "Sebes-Körös", ro: "Crișul Repede", en: "Sebes-Koros" },
    description: {
      de: "Ein Fluss, der aus Siebenbürgen kommt und durch Békés fließt.",
      hu: "Erdélyből érkező folyó, amely Békés vármegyén keresztülfolyik.",
      ro: "Un râu care vine din Transilvania și traversează județul Békés.",
      en: "A river coming from Transylvania and flowing through Bekes county."
    },
    facts: {
      de: ["Fließt durch die Stadt Gyomaendrőd.", "Sehr sauberes Wasser.", "Wichtiges Habitat für Wasservögel."],
      hu: ["Gyomaendrőd városán folyik keresztül.", "Nagyon tiszta vízű.", "Fontos élőhely vízimadaraknak."],
      ro: ["Traversează orașul Gyomaendrőd.", "Apă foarte curată.", "Habitat important pentru păsări de apă."],
      en: ["Flows through the town of Gyomaendrőd.", "Very clean water.", "Important habitat for water birds."]
    }
  },
  {
    id: "lake-biharugrai-tavak-extra",
    type: "lake",
    parent: "HU-BE",
    coords: [21.580, 46.930],
    name: { de: "Biharugraer Teiche", hu: "Biharugrai-tavak", ro: "Iazurile de la Biharugra", en: "Biharugra Ponds" },
    description: {
      de: "Das zweitgrößte künstliche Teichsystem Ungarns.",
      hu: "Magyarország második legnagyobb mesterséges halastórendszere.",
      ro: "Al doilea cel mai mare sistem de iazuri artificiale din Ungaria.",
      en: "The second largest artificial fishpond system in Hungary."
    },
    facts: {
      de: ["Teil des Körös-Maros-Nationalparks.", "International bedeutendes Vogelparadies.", "Wichtige Fischzucht."],
      hu: ["A Körös-Maros Nemzeti Park része.", "Nemzetközileg jelentős madárparadicsom.", "Fontos haltenyésztő hely."],
      ro: ["Parte a Parcului Național Criș-Mureș.", "Paradis al păsărilor de importanță internațională.", "Loc important de piscicultură."],
      en: ["Part of the Koros-Maros National Park.", "Internationally significant bird paradise.", "Important fish farming site."]
    }
  },
  {
    id: "forest-malyvadi-erdo-extra",
    type: "forest",
    parent: "HU-BE",
    coords: [21.350, 46.650],
    name: { de: "Malyvader Wald", hu: "Mályvádi-erdő", ro: "Pădurea Mályvád", en: "Malyvadi Forest" },
    description: {
      de: "Eines der größten geschlossenen Waldgebiete in der Tiefebene.",
      hu: "Az Alföld egyik legnagyobb összefüggő erdőterülete.",
      ro: "Una dintre cele mai mari zone forestiere compacte din Câmpia Ungară.",
      en: "One of the largest continuous forest areas in the Great Plain."
    },
    facts: {
      de: ["Besteht hauptsächlich aus Eichen.", "Reicher Wildbestand.", "Wichtiges ökologisches Refugium."],
      hu: ["Főleg tölgyfákból áll.", "Gazdag vadállomány.", "Fontos ökológiai menedékhely."],
      ro: ["Format în principal din stejari.", "Vânat bogat.", "Refugiu ecologic important."],
      en: ["Mainly composed of oaks.", "Rich wildlife.", "Important ecological refuge."]
    }
  },
  {
    id: "river-kettos-koros-extra",
    type: "river",
    parent: "HU-BE",
    coords: [21.150, 46.750],
    name: { de: "Doppel-Kreisch", hu: "Kettős-Körös", ro: "Crișul Dublu", en: "Kettos-Koros" },
    description: {
      de: "Entsteht durch den Zusammenfluss der Weißen und Schwarzen Kreisch.",
      hu: "A Fehér- és a Fekete-Körös összefolyásából keletkezik.",
      ro: "Format prin confluența Crișului Alb și a Crișului Negru.",
      en: "Formed by the confluence of the White and Black Koros rivers."
    },
    facts: {
      de: ["Fließt durch Békés.", "Beliebt für Bootstouren.", "Schöne Uferwälder."],
      hu: ["Békés városán folyik keresztül.", "Kedvelt csónaktúrázó hely.", "Szép ártéri erdők."],
      ro: ["Traversează orașul Békés.", "Loc preferat pentru excursii cu barca.", "Păduri de luncă frumoase."],
      en: ["Flows through the town of Bekes.", "Popular for boat tours.", "Beautiful floodplain forests."]
    }
  },
  // HU-BZ: Borsod-Abaúj-Zemplén
  {
    id: "mountain-istallos-ko-extra",
    type: "mountain",
    parent: "HU-BZ",
    coords: [20.428, 48.071],
    name: { de: "Istallos-ko", hu: "Istállós-kő", ro: "Istállós-kő", en: "Istallos-ko" },
    description: {
      de: "Einer der höchsten Gipfel des Bükk-Gebirges.",
      hu: "A Bükk-hegység egyik legmagasabb csúcsa.",
      ro: "Unul dintre cele mai înalte vârfuri ale munților Bükk.",
      en: "One of the highest peaks of the Bükk Mountains."
    },
    facts: {
      de: ["Höhe: 959 Meter.", "Bekannt für seine Steinzeithöhle.", "Teil des Nationalparks."],
      hu: ["Magassága: 959 méter.", "Híres az őskori barlangjáról.", "A nemzeti park része."],
      ro: ["Înălțime: 959 metri.", "Faimos pentru peștera sa preistorică.", "Parte a parcului național."],
      en: ["Height: 959 meters.", "Famous for its prehistoric cave.", "Part of the national park."]
    }
  },
  {
    id: "river-sajo-extra",
    type: "river",
    parent: "HU-BZ",
    coords: [20.900, 48.000],
    name: { de: "Sajo", hu: "Sajó", ro: "Șieu", en: "Sajo River" },
    description: {
      de: "Ein bedeutender Fluss in Nordungarn, der in die Theiß mündet.",
      hu: "Észak-Magyarország jelentős folyója, amely a Tiszába torkollik.",
      ro: "Un râu important din nordul Ungariei, care se varsă în Tisa.",
      en: "A significant river in northern Hungary, flowing into the Tisza."
    },
    facts: {
      de: ["Kommt aus der Slowakei.", "Wichtige Industriegeschichte.", "Fließt durch Miskolc."],
      hu: ["Szlovákiából érkezik.", "Fontos ipartörténeti múlt.", "Miskolcon keresztülfolyik."],
      ro: ["Vine din Slovacia.", "Istorie industrială importantă.", "Traversează orașul Miskolc."],
      en: ["Comes from Slovakia.", "Important industrial history.", "Flows through Miskolc."]
    }
  },
  {
    id: "river-hernad-extra",
    type: "river",
    parent: "HU-BZ",
    coords: [20.950, 48.150],
    name: { de: "Hernad", hu: "Hernád", ro: "Hernád", en: "Hernad River" },
    description: {
      de: "Ein unberührter Fluss im Nordosten, beliebt bei Kanufahrern.",
      hu: "Érintetlen folyó az északkeleti részen, a kajakosok kedvence.",
      ro: "Un râu sălbatic în nord-est, preferat de canotiști.",
      en: "An untouched river in the northeast, a favorite for canoeists."
    },
    facts: {
      de: ["Grenzfluss auf Teilstrecken.", "Steile Lösswände.", "Reich an seltenen Vogelarten."],
      hu: ["Szakaszonként határfolyó.", "Meredek löszfalak jellemzik.", "Ritka madárfajokban gazdag."],
      ro: ["Râu de frontieră pe anumite porțiuni.", "Pereți de loess abrupți.", "Bogat în specii de păsări rare."],
      en: ["Border river in some sections.", "Characterized by steep loess walls.", "Rich in rare bird species."]
    }
  },
  {
    id: "lake-lazberci-viztarozo-extra",
    type: "lake",
    parent: "HU-BZ",
    coords: [20.420, 48.180],
    name: { de: "Lazbercer Stausee", hu: "Lázbérci-víztározó", ro: "Lacul Lázbérc", en: "Lazberci Reservoir" },
    description: {
      de: "Ein malerischer Stausee im Bükk-Gebirge, ein Trinkwasserschutzgebiet.",
      hu: "Festői víztározó a Bükkben, ivóvízvédelmi terület.",
      ro: "Un lac de acumulare pitoresc în munții Bükk, zonă de protecție a apei potabile.",
      en: "A picturesque reservoir in the Bükk, a drinking water protection area."
    },
    facts: {
      de: ["Baden verboten.", "Wunderschönes Wandergebiet.", "Fischreich."],
      hu: ["Fürödni tilos.", "Gyönyörű túrázó hely.", "Halakban gazdag."],
      ro: ["Scăldatul este interzis.", "Zonă de drumeție superbă.", "Bogat în pește."],
      en: ["Bathing prohibited.", "Beautiful hiking area.", "Rich in fish."]
    }
  },
  {
    id: "river-bodrog-extra",
    type: "river",
    parent: "HU-BZ",
    coords: [21.400, 48.200],
    name: { de: "Bodrog", hu: "Bodrog", ro: "Bodrog", en: "Bodrog River" },
    description: {
      de: "Ein Fluss in der Weinregion Tokaj, bekannt für seine geringe Strömung.",
      hu: "Folyó a Tokaji borvidéken, lassú folyásáról ismert.",
      ro: "Un râu în regiunea viticolă Tokaj, cunoscut pentru curentul său lent.",
      en: "A river in the Tokaj wine region, known for its slow flow."
    },
    facts: {
      de: ["Mündet bei Tokaj in die Theiß.", "Ideal für Kanuanfänger.", "Heimat vieler Wasservögel."],
      hu: ["Tokajnál ömlik a Tiszába.", "Ideális kezdő vízitúrázóknak.", "Számos vízimadár otthona."],
      ro: ["Se varsă în Tisa la Tokaj.", "Ideal pentru canotiști începători.", "Casa multor păsări de apă."],
      en: ["Flows into the Tisza at Tokaj.", "Ideal for beginner canoeists.", "Home to many water birds."]
    }
  },
  // HU-CS: Csongrád-Csanád
  {
    id: "lake-feher-to-szeged-extra",
    type: "lake",
    parent: "HU-CS",
    coords: [20.100, 46.330],
    name: { de: "Szegeder Weißer See", hu: "Szegedi Fehér-tó", ro: "Lacul Alb Szeged", en: "Szeged White Lake" },
    description: {
      de: "Ungarns größter Alkalisee, ein Paradies für Ornithologen.",
      hu: "Magyarország legnagyobb szikes tava, az ornitológusok paradicsoma.",
      ro: "Cel mai mare lac alcalin din Ungaria, un paradis pentru ornitologi.",
      en: "Hungary's largest alkali lake, a paradise for ornithologists."
    },
    facts: {
      de: ["Wichtiger Rastplatz für Kraniche.", "Teil des Nationalparks.", "Historisches Fischteichsystem."],
      hu: ["Fontos pihenőhely a darvak számára.", "A nemzeti park része.", "Történelmi halastórendszer."],
      ro: ["Loc important de odihnă pentru cocori.", "Parte a parcului național.", "Sistem istoric de iazuri piscicole."],
      en: ["Important resting place for cranes.", "Part of the national park.", "Historic fishpond system."]
    }
  },
  {
    id: "river-maros-torkolat-extra",
    type: "river",
    parent: "HU-CS",
    coords: [20.180, 46.250],
    name: { de: "Maros-Mündung", hu: "Maros-torkolat", ro: "Gura de vărsare a Mureșului", en: "Mures Confluence" },
    description: {
      de: "Die Stelle, an der die Maros bei Szeged in die Theiß mündet.",
      hu: "Az a hely, ahol a Maros Szegednél a Tiszába torkollik.",
      ro: "Locul unde Mureșul se varsă în Tisa la Szeged.",
      en: "The spot where the Mures river flows into the Tisza at Szeged."
    },
    facts: {
      de: ["Beliebtes Ausflugsgebiet.", "Auenwälder.", "Wichtiger ökologischer Korridor."],
      hu: ["Kedvelt kirándulóhely.", "Ártéri erdők jellemzik.", "Fontos ökológiai folyosó."],
      ro: ["Zonă populară de excursie.", "Păduri de luncă.", "Coridor ecologic important."],
      en: ["Popular excursion area.", "Floodplain forests.", "Important ecological corridor."]
    }
  },
  {
    id: "lake-csaj-to-extra",
    type: "lake",
    parent: "HU-CS",
    coords: [20.050, 46.550],
    name: { de: "Csaj-See", hu: "Csaj-tó", ro: "Lacul Csaj", en: "Lake Csaj" },
    description: {
      de: "Ein ausgedehntes Teichsystem im Pusztaszer-Naturschutzgebiet.",
      hu: "Kiterjedt halastórendszer a Pusztaszeri Tájvédelmi Körzetben.",
      ro: "Un sistem extins de iazuri în rezervația naturală Pusztaszer.",
      en: "An extensive pond system in the Pusztaszer Nature Reserve."
    },
    facts: {
      de: ["Bedeutendes Brutgebiet für Wasservögel.", "Geführte Touren möglich.", "In der Nähe von Ópusztaszer."],
      hu: ["Jelentős fészkelőhely vízimadaraknak.", "Vezetett túrák kérhetők.", "Ópusztaszer közelében található."],
      ro: ["Loc de cuibărit important pentru păsări de apă.", "Tururi ghidate disponibile.", "Situat lângă Ópusztaszer."],
      en: ["Significant nesting site for water birds.", "Guided tours available.", "Located near Ópusztaszer."]
    }
  },
  {
    id: "river-tisza-martely-extra",
    type: "river",
    parent: "HU-CS",
    coords: [20.210, 46.430],
    name: { de: "Theiß bei Martely", hu: "Mártélyi Holt-Tisza", ro: "Brațul mort Mártély al Tisei", en: "Martely Dead-Tisza" },
    description: {
      de: "Ein malerischer Altarm der Theiß mit reicher Künstlergeschichte.",
      hu: "A Tisza festői holtága, gazdag művészmúlttal.",
      ro: "Un braț mort pitoresc al Tisei, cu un trecut artistic bogat.",
      en: "A picturesque oxbow of the Tisza with a rich artistic history."
    },
    facts: {
      de: ["Beliebtes Motiv für Maler.", "Naturschutzgebiet.", "Idealer Ort für Wassersport."],
      hu: ["Festők kedvelt témája.", "Természetvédelmi terület.", "Ideális vízisportokra."],
      ro: ["Subiect preferat al pictorilor.", "Rezervație naturală.", "Ideal pentru sporturi nautice."],
      en: ["Favorite subject for painters.", "Nature reserve.", "Ideal for water sports."]
    }
  },
  {
    id: "forest-pusztaszeri-erdo-extra",
    type: "forest",
    parent: "HU-CS",
    coords: [20.100, 46.500],
    name: { de: "Pusztaszerer Wald", hu: "Pusztaszeri-erdő", ro: "Pădurea Pusztaszer", en: "Pusztaszeri Forest" },
    description: {
      de: "Ein bedeutendes Waldgebiet in der Puszta-Region.",
      hu: "Jelentős erdőterület a pusztai régióban.",
      ro: "O zonă forestieră importantă în regiunea de puszta.",
      en: "A significant forest area in the Puszta region."
    },
    facts: {
      de: ["Wichtiger Jagdort.", "Reich an Eichen.", "Teil des Naturschutzgebiets."],
      hu: ["Fontos vadászterület.", "Tölgyfákban gazdag.", "A tájvédelmi körzet része."],
      ro: ["Zonă importantă de vânătoare.", "Bogat în stejari.", "Parte a rezervației naturale."],
      en: ["Important hunting ground.", "Rich in oak trees.", "Part of the nature reserve."]
    }
  },
  // HU-FE: Fejér
  {
    id: "river-sarviz-extra",
    type: "river",
    parent: "HU-FE",
    coords: [18.500, 47.000],
    name: { de: "Sarviz", hu: "Sárvíz", ro: "Sárvíz", en: "Sarviz River" },
    description: {
      de: "Ein künstlich regulierter Wasserlauf, der durch die Fejér-Ebene fließt.",
      hu: "Mesterségesen szabályozott vízfolyás, amely a Fejér-síkságon halad át.",
      ro: "Un curs de apă reglat artificial care traversează Câmpia Fejér.",
      en: "A-man made regulated watercourse flowing through the Fejér Plain."
    },
    facts: {
      de: ["Wichtig für die Be- und Entwässerung.", "Historische Melioration.", "Fischreich."],
      hu: ["Fontos az öntözés és vízelvezetés szempontjából.", "Történelmi vízrendezés.", "Halban gazdag."],
      ro: ["Important pentru irigații și drenaj.", "Ameliorare istorică a solului.", "Bogat în pește."],
      en: ["Important for irrigation and drainage.", "Historic water management.", "Rich in fish."]
    }
  },
  {
    id: "river-gaja-patak-extra",
    type: "river",
    parent: "HU-FE",
    coords: [18.250, 47.250],
    name: { de: "Gaja-Bach", hu: "Gaja-patak", ro: "Pârâul Gaja", en: "Gaja Brook" },
    description: {
      de: "Ein malerischer Bach, der eine tiefe Schlucht im Bakony-Gebirge gegraben hat.",
      hu: "Festői patak, amely mély szurdokot vájt a Bakonyba.",
      ro: "Un pârâu pitoresc care a săpat un defileu adânc în munții Bakony.",
      en: "A picturesque brook that carved a deep gorge in the Bakony Mountains."
    },
    facts: {
      de: ["Besitzt die Sobri-Jóska-Höhle.", "Beliebtes Wanderziel.", "Sehr klares Wasser."],
      hu: ["Itt található a Sobri Jóska-barlang.", "Kedvelt túracélpont.", "Nagyon tiszta vízű."],
      ro: ["Găzduiește peștera Sobri Jóska.", "Destinație preferată de drumeție.", "Apă foarte curată."],
      en: ["Home to the Sobri Jóska Cave.", "Favorite hiking destination.", "Very clear water."]
    }
  },
  {
    id: "forest-alcsuti-arboretum-extra",
    type: "forest",
    parent: "HU-FE",
    coords: [18.600, 47.420],
    name: { de: "Alcsuter Arboretum", hu: "Alcsúti Arborétum", ro: "Arboretumul Alcsút", en: "Alcsut Arboretum" },
    description: {
      de: "Einer der ältesten Landschaftsgärten Ungarns, gegründet von Erzherzog Joseph.",
      hu: "Magyarország egyik legrégebbi tájképi kertje, József főherceg alapította.",
      ro: "Una dintre cele mai vechi grădini peisagistice din Ungaria, fondată de arhiducele Iosif.",
      en: "One of the oldest landscape gardens in Hungary, founded by Archduke Joseph."
    },
    facts: {
      de: ["Bekannt für das Schneeglöckchenfest.", "Besitzt eine Schloßruine.", "Über 540 Baumarten."],
      hu: ["Híres a hóvirágünnepéről.", "Kastélyrom található benne.", "Több mint 540 fafaj."],
      ro: ["Faimos pentru sărbătoarea ghiocelului.", "Deține o ruină de castel.", "Peste 540 specii de arbori."],
      en: ["Famous for its snowdrop festival.", "Contains a castle ruin.", "Over 540 species of trees."]
    }
  },
  {
    id: "mountain-veres-hegy-extra",
    type: "mountain",
    parent: "HU-FE",
    coords: [18.350, 47.380],
    name: { de: "Veres-Berg", hu: "Veres-hegy", ro: "Muntele Veres", en: "Veres Hill" },
    description: {
      de: "Ein Gipfel im Vértes-Gebirge mit schöner Aussicht.",
      hu: "A Vértes-hegység egyik csúcsa szép kilátással.",
      ro: "Un vârf din munții Vértes cu o vedere frumoasă.",
      en: "A peak in the Vértes Mountains with a beautiful view."
    },
    facts: {
      de: ["Dolomitgestein.", "Typische Karstvegetation.", "In der Nähe von Csákvár."],
      hu: ["Dolomit kőzet építi fel.", "Jellemző karsztos növényzet.", "Csákvár közelében található."],
      ro: ["Roci de dolomită.", "Vegetație carstică tipică.", "Lângă Csákvár."],
      en: ["Composed of dolomite rock.", "Typical karst vegetation.", "Located near Csákvár."]
    }
  },
  {
    id: "lake-pazmandi-to-extra",
    type: "lake",
    parent: "HU-FE",
    coords: [18.650, 47.300],
    name: { de: "Pazmander See", hu: "Pázmándi-tó", ro: "Lacul Pázmánd", en: "Lake Pazmand" },
    description: {
      de: "Ein kleiner, ruhiger See am Fuße des Velence-Gebirges.",
      hu: "Kis méretű, nyugodt tó a Velencei-hegység lábánál.",
      ro: "Un lac mic și liniștit la poalele munților Velence.",
      en: "A small, quiet lake at the foot of the Velence Mountains."
    },
    facts: {
      de: ["Beliebt bei Anglern.", "In der Nähe der Wassermühle.", "Malerische Umgebung."],
      hu: ["Horgászok kedvelt helye.", "A vízimalom közelében található.", "Festői környezet."],
      ro: ["Loc preferat de pescari.", "Situat lângă moara de apă.", "Cadru pitoresc."],
      en: ["Favorite spot for anglers.", "Located near the watermill.", "Picturesque surroundings."]
    }
  },
  // HU-GS: Győr-Moson-Sopron
  {
    id: "forest-hansag-extra",
    type: "forest",
    parent: "HU-GS",
    coords: [17.150, 47.700],
    name: { de: "Hansag", hu: "Hanság", ro: "Hanság", en: "Hansag" },
    description: {
      de: "Ein ehemaliges Sumpfgebiet, das heute ein bedeutendes Naturschutzgebiet ist.",
      hu: "Egykori mocsárvilág, amely ma jelentős természetvédelmi terület.",
      ro: "O fostă zonă mlaștinoasă, care astăzi este o rezervație naturală importantă.",
      en: "A former marshland that is today a significant nature reserve."
    },
    facts: {
      de: ["Teil des Nationalparks Fertő-Hanság.", "Heimat der Großtrappe.", "Reich an Mooren."],
      hu: ["A Fertő-Hanság Nemzeti Park része.", "A túzok fontos élőhelye.", "Lápokban gazdag."],
      ro: ["Parte a Parcului Național Fertő-Hanság.", "Habitat al dropiei.", "Bogat în turbării."],
      en: ["Part of the Fertő-Hanság National Park.", "Home to the great bustard.", "Rich in bogs."]
    }
  },
  {
    id: "river-rabca-extra",
    type: "river",
    parent: "HU-GS",
    coords: [17.300, 47.650],
    name: { de: "Rabca", hu: "Rábca", ro: "Rábca", en: "Rabca River" },
    description: {
      de: "Ein Fluss, der den Hanság entwässert und bei Győr in die Moson-Donau mündet.",
      hu: "A Hanságot lecsapoló folyó, amely Győrnél torkollik a Mosoni-Dunába.",
      ro: "Un râu care drenează Hanságul și se varsă în Dunărea de la Moson la Győr.",
      en: "A river draining the Hanság and flowing into the Moson Danube at Győr."
    },
    facts: {
      de: ["Fließt durch fruchtbares Ackerland.", "Wichtig für den Hochwasserschutz.", "Sehr fischreich."],
      hu: ["Termékeny mezőgazdasági területen folyik át.", "Fontos árvízvédelmi szerep.", "Nagyon fischgazdag."],
      ro: ["Traversează terenuri agricole fertile.", "Rol important în protecția împotriva inundațiilor.", "Foarte bogat în pește."],
      en: ["Flows through fertile farmland.", "Important for flood protection.", "Very rich in fish."]
    }
  },
  {
    id: "river-marcal-extra",
    type: "river",
    parent: "HU-GS",
    coords: [17.550, 47.650],
    name: { de: "Marcal", hu: "Marcal", ro: "Marcal", en: "Marcal River" },
    description: {
      de: "Ein rechter Nebenfluss der Raab, der durch den Bakony und die Kemenesalja fließt.",
      hu: "A Rába jobb oldali mellékfolyója, amely a Bakony és a Kemenesalja felől érkezik.",
      ro: "Un afluent de dreapta al râului Rába, care vine dinspre Bakony și Kemenesalja.",
      en: "A right tributary of the Raba river, arriving from the Bakony and Kemenesalja."
    },
    facts: {
      de: ["Wurde nach einer Umweltkatastrophe renaturiert.", "Langsamer Flusslauf.", "Beliebt bei Anglern."],
      hu: ["Környezeti katasztrófa után rehabilitálták.", "Lassú folyású.", "Horgászok kedvelik."],
      ro: ["Reabilitat după o catastrofă ecologică.", "Curs lent.", "Preferat de pescari."],
      en: ["Rehabilitated after an environmental disaster.", "Slow flow.", "Favored by anglers."]
    }
  },
  {
    id: "river-repce-extra",
    type: "river",
    parent: "HU-GS",
    coords: [16.900, 47.450],
    name: { de: "Repce", hu: "Répce", ro: "Répce", en: "Repce River" },
    description: {
      de: "Ein kleiner Fluss im Westen, der später als Rábca weiterfließt.",
      hu: "Nyugati kis folyó, amely később Rábca néven folytatódik.",
      ro: "Un râu mic în vest, care continuă ulterior sub numele de Rábca.",
      en: "A small western river that later continues as the Rabca."
    },
    facts: {
      de: ["Prägt die Region Rábaköz.", "Durchfließt feuchte Wiesen.", "Wichtiger ökologischer Raum."],
      hu: ["Meghatározza a Rábaköz vidékét.", "Nedves réteken kanyarog keresztül.", "Fontos ökológiai terület."],
      ro: ["Definește regiunea Rábaköz.", "Șerpuiește prin pajiști umede.", "Spațiu ecologic important."],
      en: ["Defines the Rábaköz region.", "Meanders through wet meadows.", "Important ecological area."]
    }
  },
  {
    id: "forest-szigetkoz-erdo-extra",
    type: "forest",
    parent: "HU-GS",
    coords: [17.400, 47.850],
    name: { de: "Szigetkozer Wald", hu: "Szigetközi-erdő", ro: "Pădurea Szigetköz", en: "Szigetkozer Forest" },
    description: {
      de: "Einzigartige Auenwälder in der Szigetköz-Region (Schüttinsel).",
      hu: "Egyedülálló ártéri erdők a Szigetköz vidékén.",
      ro: "Păduri de luncă unice în regiunea Szigetköz.",
      en: "Unique floodplain forests in the Szigetköz region."
    },
    facts: {
      de: ["Reich an Weiden und Pappeln.", "Idealer Ort für Kanutouren durch den Wald.", "Besitzt eine reiche Fauna."],
      hu: ["Füzekben és nyárfákban gazdag.", "Ideális hely erdei csónaktúrákhoz.", "Gazdag állatvilággal rendelkezik."],
      ro: ["Bogat în sălcii și plopi.", "Loc ideal pentru excursii cu barca prin pădure.", "Deține o faună bogată."],
      en: ["Rich in willows and poplars.", "Ideal place for boat trips through the forest.", "Has a rich fauna."]
    }
  },
  // HU-HB: Hajdú-Bihar
  {
    id: "river-berettyo-extra",
    type: "river",
    parent: "HU-HB",
    coords: [21.450, 47.200],
    name: { de: "Berettyo", hu: "Berettyó", ro: "Barcău", en: "Berettyo River" },
    description: {
      de: "Ein Fluss, der aus Siebenbürgen kommt und die Bihar-Ebene prägt.",
      hu: "Erdélyből érkező folyó, amely a Bihari-síkságot határozza meg.",
      ro: "Un râu care vine din Transilvania și definește Câmpia Bihorului.",
      en: "A river coming from Transylvania that defines the Bihar Plain."
    },
    facts: {
      de: ["Fließt durch Berettyóújfalu.", "Regulierter Flusslauf.", "Wichtig für die Landwirtschaft."],
      hu: ["Berettyóújfalun keresztülfolyik.", "Szabályozott meder jellemzi.", "Fontos a mezőgazdaság számára."],
      ro: ["Traversează orașul Berettyóújfalu.", "Caracterizat de albie reglată.", "Important pentru agricultură."],
      en: ["Flows through Berettyóújfalu.", "Characterized by a regulated bed.", "Important for agriculture."]
    }
  },
  {
    id: "lake-vekeri-to-extra",
    type: "lake",
    parent: "HU-HB",
    coords: [21.750, 47.480],
    name: { de: "Vekeri-See", hu: "Vekeri-tó", ro: "Lacul Vekeri", en: "Lake Vekeri" },
    description: {
      de: "Ein künstlicher See bei Debrecen, ein Zentrum für Erholung.",
      hu: "Mesterséges tó Debrecen közelében, pihenőközpont.",
      ro: "Un lac artificial lângă Debrecen, un centru de recreere.",
      en: "An artificial lake near Debrecen, a center for recreation."
    },
    facts: {
      de: ["Beliebtes Ausflugsziel der Städter.", "Bootsverleih vorhanden.", "Mitten in der Puszta-Wald-Region."],
      hu: ["A városiak kedvelt kirándulóhelye.", "Csónakbérlési lehetőség.", "Az Erdőspuszták szívében fekszik."],
      ro: ["Loc de excursie preferat de orășeni.", "Posibilitate de închiriere bărci.", "Situat în inima regiunii de pădure și puszta."],
      en: ["Favorite excursion spot for city dwellers.", "Boat rental available.", "Located in the heart of the forest-puszta region."]
    }
  },
  {
    id: "forest-erdo-pusztak-extra",
    type: "forest",
    parent: "HU-HB",
    coords: [21.750, 47.550],
    name: { de: "Erdőpusztak", hu: "Erdőspuszták", ro: "Erdőspuszták", en: "Erdospusztak" },
    description: {
      de: "Ein Gürtel aus Wäldern und Seen, der Debrecen im Osten umschließt.",
      hu: "Erdőkből és tavakból álló övezet, amely Debrecent keletről övezi.",
      ro: "O centură de păduri și lacuri care înconjoară orașul Debrecen la est.",
      en: "A belt of forests and lakes surrounding Debrecen from the east."
    },
    facts: {
      de: ["Besteht aus Eichen und Robinien.", "Reich an Wanderwegen.", "Besitzt einen botanischen Garten."],
      hu: ["Tölgyesekből és akácosokból áll.", "Túraútvonalakban gazdag.", "Botanikus kerttel is rendelkezik."],
      ro: ["Format din stejari și salcâmi.", "Bogat în trasee de drumeție.", "Deține și o grădină botanică."],
      en: ["Composed of oaks and acacias.", "Rich in hiking trails.", "Also features a botanical garden."]
    }
  },
  {
    id: "river-hortobagy-folyo-extra",
    type: "river",
    parent: "HU-HB",
    coords: [21.150, 47.550],
    name: { de: "Hortobagy-Fluss", hu: "Hortobágy-folyó", ro: "Râul Hortobágy", en: "Hortobagy River" },
    description: {
      de: "Der namensgebende Fluss der berühmten Puszta-Region.",
      hu: "A híres pusztai táj névadó folyója.",
      ro: "Râul care dă numele faimoasei regiuni de puszta.",
      en: "The namesake river of the famous Puszta region."
    },
    facts: {
      de: ["Wird von der Neunbögigen Brücke überspannt.", "Sehr ruhiges Wasser.", "Wichtige Tränke für das Vieh."],
      hu: ["A Kilenclyukú híd ível át felette.", "Nagyon lassú folyású víz.", "Fontos itatóhely az állatoknak."],
      ro: ["Este traversat de Podul cu Nouă Arcuri.", "Apă cu curgere foarte lentă.", "Loc important de adăpare pentru animale."],
      en: ["Spanned by the Nine-arched Bridge.", "Very slow-flowing water.", "Important watering place for livestock."]
    }
  },
  {
    id: "lake-fancsika-to-extra",
    type: "lake",
    parent: "HU-HB",
    coords: [21.720, 47.520],
    name: { de: "Fancsika-See", hu: "Fancsika-tó", ro: "Lacul Fancsika", en: "Lake Fancsika" },
    description: {
      de: "Ein beliebtes Angel- und Erholungsgebiet bei Debrecen.",
      hu: "Népszerű horgász- és pihenőhely Debrecen határában.",
      ro: "Loc popular de pescuit și recreere la marginea orașului Debrecen.",
      en: "Popular fishing and recreation spot on the outskirts of Debrecen."
    },
    facts: {
      de: ["Künstlich angelegtes Teichsystem.", "Umgeben von Wäldern.", "Heimat vieler Wasservögel."],
      hu: ["Mesterségesen kialakított tórendszer.", "Erdők veszik körül.", "Számos vízimadár otthona."],
      ro: ["Sistem de lacuri creat artificial.", "Înconjurat de păduri.", "Habitat pentru multe păsări de apă."],
      en: ["Man-made lake system.", "Surrounded by forests.", "Home to many water birds."]
    }
  },
  // HU-HE: Heves
  {
    id: "mountain-galyateto-extra",
    type: "mountain",
    parent: "HU-HE",
    coords: [19.916, 47.915],
    name: { de: "Galyatető", hu: "Galyatető", ro: "Galyatető", en: "Galyateto" },
    description: {
      de: "Der zweithöchste Gipfel der Mátra, ein berühmter Luftkurort.",
      hu: "A Mátra második legmagasabb csúcsa, híres klimatikus üdülőhely.",
      ro: "Al doilea cel mai înalt vârf din Mátra, o celebră stațiune climaterică.",
      en: "The second highest peak of the Matra, a famous climatic resort."
    },
    facts: {
      de: ["Höhe: 964 Meter.", "Besitzt eine spektakulär renovierte Aussichtswarte.", "Beliebt für Höhenkuren."],
      hu: ["Magassága: 964 méter.", "Látványosan felújított kilátója van.", "Népszerű magaslati üdülőhely."],
      ro: ["Înălțime: 964 metri.", "Deține un turn de observație renovat spectaculos.", "Stațiune montană populară."],
      en: ["Height: 964 meters.", "Features a spectacularly renovated lookout tower.", "Popular high-altitude resort."]
    }
  },
  {
    id: "mountain-sar-hegy-extra",
    type: "mountain",
    parent: "HU-HE",
    coords: [19.950, 47.790],
    name: { de: "Sar-Berg", hu: "Sár-hegy", ro: "Muntele Sár", en: "Sar Hill" },
    description: {
      de: "Ein vulkanischer Berg bei Gyöngyös, bekannt für seine Weine.",
      hu: "Vulkanikus hegy Gyöngyös mellett, borairól ismert.",
      ro: "Un munte vulcanic lângă Gyöngyös, cunoscut pentru vinurile sale.",
      en: "A volcanic hill near Gyöngyös, known for its wines."
    },
    facts: {
      de: ["Besitzt einen kleinen Kratersee.", "Reiche Steppenvegetation.", "Bietet Blick auf das Mátra-Vorland."],
      hu: ["Egy kis krátertó található rajta.", "Gazdag sztyeppei növényzet.", "Kilátást nyújt a Mátraaljára."],
      ro: ["Deține un mic lac de crater.", "Vegetație de stepă bogată.", "Oferă vedere spre zona Mátraalja."],
      en: ["Features a small crater lake.", "Rich steppe vegetation.", "Offers view of the Matra-foothills."]
    }
  },
  {
    id: "river-tarna-extra",
    type: "river",
    parent: "HU-HE",
    coords: [20.200, 47.650],
    name: { de: "Tarna", hu: "Tarna", ro: "Tarna", en: "Tarna River" },
    description: {
      de: "Ein Fluss, der aus der Mátra kommt und die Heves-Ebene durchquert.",
      hu: "A Mátrából érkező folyó, amely Heves síkságát szeli át.",
      ro: "Un râu care vine din Mátra și traversează Câmpia Heves.",
      en: "A river coming from the Matra, crossing the Heves Plain."
    },
    facts: {
      de: ["Mündet in die Zagyva.", "Prägt die lokale Landwirtschaft.", "Wichtig für den Naturschutz."],
      hu: ["A Zagyvába torkollik.", "Meghatározza a helyi mezőgazdaságot.", "Fontos természetvédelmi szempontból."],
      ro: ["Se varsă în Zagyva.", "Definește agricultura locală.", "Important pentru protecția naturii."],
      en: ["Flows into the Zagyva.", "Defines local agriculture.", "Important for nature conservation."]
    }
  },
  {
    id: "river-eger-patak-extra",
    type: "river",
    parent: "HU-HE",
    coords: [20.380, 47.850],
    name: { de: "Eger-Bach", hu: "Eger-patak", ro: "Pârâul Eger", en: "Eger Brook" },
    description: {
      de: "Ein Bach, der durch die Barockstadt Eger fließt.",
      hu: "Patak, amely a barokk Eger városán folyik keresztül.",
      ro: "Un pârâu care traversează orașul baroc Eger.",
      en: "A brook that flows through the Baroque city of Eger."
    },
    facts: {
      de: ["Fließt durch das malerische Eger-Tal.", "Wichtig für die Wasserversorgung der Stadt.", "Mündet in den Theiß-See."],
      hu: ["A festői Egri-völgyben halad.", "Fontos a város vízellátásában.", "A Tisza-tóba torkollik."],
      ro: ["Traversează valea pitorească Eger.", "Important pentru alimentarea cu apă a orașului.", "Se varsă în lacul Tisa."],
      en: ["Flows through the picturesque Eger Valley.", "Important for the city's water supply.", "Flows into Lake Tisza."]
    }
  },
  {
    id: "forest-matrai-tazvedelmi-extra",
    type: "forest",
    parent: "HU-HE",
    coords: [19.900, 47.880],
    name: { de: "Mátra-Wälder", hu: "Mátrai-erdő", ro: "Pădurile Mátra", en: "Matra Forest" },
    description: {
      de: "Ausgedehnte Buchen- und Eichenwälder im höchsten Gebirge Ungarns.",
      hu: "Kiterjedt bükkösök és tölgyesek Magyarország legmagasabb hegységében.",
      ro: "Păduri vaste de fag și stejar în cel mai înalt munte din Ungaria.",
      en: "Extensive beech and oak forests in Hungary's highest mountain range."
    },
    facts: {
      de: ["Heimat von Mufflons.", "Reich an Heilquellen.", "Bedeutendes Erholungsgebiet."],
      hu: ["Muflonok élőhelye.", "Gyógyforrásokban gazdag.", "Jelentős rekreációs övezet."],
      ro: ["Habitat al muflonilor.", "Bogat în izvoare curative.", "Zonă de recreere importantă."],
      en: ["Habitat of mouflons.", "Rich in healing springs.", "Significant recreation area."]
    }
  },
  // HU-JN: Jász-Nagykun-Szolnok
  {
    id: "river-zagyva-szolnok-extra",
    type: "river",
    parent: "HU-JN",
    coords: [20.180, 47.180],
    name: { de: "Zagyva", hu: "Zagyva", ro: "Zagyva", en: "Zagyva River" },
    description: {
      de: "Ein bedeutender Nebenfluss der Theiß, der in Szolnok mündet.",
      hu: "A Tisza jelentős mellékfolyója, amely Szolnoknál torkollik be.",
      ro: "Un afluent important al Tisei, care se varsă la Szolnok.",
      en: "A significant tributary of the Tisza, which flows in at Szolnok."
    },
    facts: {
      de: ["Bekannt für seine Anglerplätze.", "Prägt die Jászság-Region.", "Fließt durch weite Ebenen."],
      hu: ["Horgászhelyeiről ismert.", "Meghatározza a Jászság vidékét.", "Tágas rónaságokon halad át."],
      ro: ["Cunoscut pentru locurile de pescuit.", "Definește regiunea Jászság.", "Traversează câmpii vaste."],
      en: ["Known for its fishing spots.", "Defines the Jászság region.", "Flows through wide plains."]
    }
  },
  {
    id: "river-hortobagy-berettyo-extra",
    type: "river",
    parent: "HU-JN",
    coords: [20.600, 47.150],
    name: { de: "Hortobagy-Berettyo", hu: "Hortobágy-Berettyó", ro: "Hortobágy-Barcău", en: "Hortobagy-Berettyo" },
    description: {
      de: "Ein Fluss, der die Hortobágy-Puszta mit dem Berettyó verbindet.",
      hu: "A Hortobágyi pusztát és a Berettyót összekötő folyó.",
      ro: "Râul care conectează puszta Hortobágy cu Barcăul.",
      en: "A river connecting the Hortobágy Puszta with the Berettyo."
    },
    facts: {
      de: ["Wichtiger Entwässerungskanal.", "Reich an Schilfgebieten.", "Besitzt eine einzigartige Flora."],
      hu: ["Fontos belvízelvezető csatorna.", "Nádasokban gazdag.", "Egyedülálló növényvilággal bír."],
      ro: ["Canal important de drenaj.", "Bogat în stufărișuri.", "Deține o floră unică."],
      en: ["Important drainage channel.", "Rich in reed beds.", "Possesses a unique flora."]
    }
  },
  {
    id: "lake-nagykunsagi-viztarozo-extra",
    type: "lake",
    parent: "HU-JN",
    coords: [20.500, 47.300],
    name: { de: "Nagykunsager Speicher", hu: "Nagykunsági-víztározó", ro: "Rezervorul Nagykunság", en: "Nagykunsagi Reservoir" },
    description: {
      de: "Ein großes Speicherbecken zur Bewässerung der Tiefebene.",
      hu: "Hatalmas tározó az Alföld öntözésének biztosítására.",
      ro: "Un rezervor imens pentru asigurarea irigațiilor în Câmpia Ungară.",
      en: "A huge reservoir to ensure irrigation in the Great Plain."
    },
    facts: {
      de: ["Künstliches Gewässer.", "Wichtig für die Landwirtschaft.", "Bietet Lebensraum für Fische."],
      hu: ["Mesterséges vízfelület.", "Fontos a mezőgazdaság számára.", "Élőhelyet biztosít a halaknak."],
      ro: ["Luciu de apă artificial.", "Important pentru agricultură.", "Asigură habitat pentru pești."],
      en: ["Man-made water surface.", "Important for agriculture.", "Provides habitat for fish."]
    }
  },
  {
    id: "river-tisza-szajol-extra",
    type: "river",
    parent: "HU-JN",
    coords: [20.280, 47.170],
    name: { de: "Theiß bei Szajol", hu: "Tisza Szajolnál", ro: "Tisa la Szajol", en: "Tisza at Szajol" },
    description: {
      de: "Ein schöner Abschnitt der Theiß in der Nähe von Szolnok.",
      hu: "A Tisza szép szakasza Szolnok közelében.",
      ro: "O porțiune frumoasă a Tisei în apropiere de Szolnok.",
      en: "A beautiful section of the Tisza near Szolnok."
    },
    facts: {
      de: ["Wichtiger Eisenbahnübergang.", "Schöne Auenlandschaft.", "Häufiges Hochwassergebiet."],
      hu: ["Fontos vasúti átkelőhely.", "Szép ártéri táj.", "Gyakori árvízi terület."],
      ro: ["Punct important de trecere feroviară.", "Peisaj de luncă frumos.", "Zonă frecvent inundabilă."],
      en: ["Important railway crossing.", "Beautiful floodplain landscape.", "Frequent flood area."]
    }
  },
  {
    id: "forest-tiszakurei-arboretum-extra",
    type: "forest",
    parent: "HU-JN",
    coords: [20.100, 46.930],
    name: { de: "Tiszakurener Arboretum", hu: "Tiszakürti Arborétum", ro: "Arboretumul Tiszakürt", en: "Tiszakurt Arboretum" },
    description: {
      de: "Ein wunderschöner Park am Ufer der Theiß mit seltenen Baumarten.",
      hu: "Gyönyörű park a Tisza partján, ritka fafajokkal.",
      ro: "Un parc frumos pe malul Tisei, cu specii de arbori rare.",
      en: "A beautiful park on the banks of the Tisza, with rare tree species."
    },
    facts: {
      de: ["Ehemaliger Schlossgarten.", "Prächtige Sumpfzypressen.", "Beliebt für Naturfotografie."],
      hu: ["Egykori kastélykert.", "Pompás mocsári ciprusok.", "Természetfotósok kedvelt helye."],
      ro: ["Fostă grădină a castelului.", "Cipruși de mlaștină superbi.", "Loc preferat de fotografii de natură."],
      en: ["Former castle garden.", "Splendid bald cypresses.", "Favorite spot for nature photographers."]
    }
  },
  // HU-KE: Komárom-Esztergom
  {
    id: "lake-bokodi-to-extra",
    type: "lake",
    parent: "HU-KE",
    coords: [18.280, 47.500],
    name: { de: "Bokoder See", hu: "Bokodi-tó", ro: "Lacul Bokod", en: "Lake Bokod" },
    description: {
      de: "Berühmt für sein 'schwimmendes Dorf' aus Anglerhütten.",
      hu: "Híres a horgászházakból álló 'lebegő falujáról'.",
      ro: "Faimos pentru „satul plutitor” format din căsuțe de pescari.",
      en: "Famous for its 'floating village' of fishing huts."
    },
    facts: {
      de: ["Kühlteich eines Kraftwerks.", "Wasser friert nie ein.", "Weltweit bekanntes Fotomotiv."],
      hu: ["Erőmű hűtőtava.", "Vize sosem fagy be.", "Világszerte ismert fotótéma."],
      ro: ["Lac de răcire al unei centrale.", "Apa nu îngheață niciodată.", "Subiect fotografic cunoscut mondial."],
      en: ["Cooling pond for a power plant.", "The water never freezes.", "World-famous photo subject."]
    }
  },
  {
    id: "river-altal-er-extra",
    type: "river",
    parent: "HU-KE",
    coords: [18.350, 47.600],
    name: { de: "Altal-Bach", hu: "Által-ér", ro: "Által-ér", en: "Altal-er River" },
    description: {
      de: "Ein wichtiger Wasserlauf, der durch Tata fließt und den Öreg-See speist.",
      hu: "Fontos vízfolyás, amely Tatán halad keresztül és az Öreg-tavat táplálja.",
      ro: "Un curs de apă important care traversează Tata și alimentează lacul Öreg.",
      en: "An important watercourse flowing through Tata and feeding Lake Öreg."
    },
    facts: {
      de: ["Prägt das Stadtbild von Tata.", "Wichtig für den Naturschutz.", "Fließt in die Donau."],
      hu: ["Meghatározza Tata városképét.", "Fontos természetvédelmi szerep.", "A Dunába torkollik."],
      ro: ["Definește peisajul urban din Tata.", "Rol important în protecția naturii.", "Se varsă în Dunăre."],
      en: ["Defines the cityscape of Tata.", "Important role in nature conservation.", "Flows into the Danube."]
    }
  },
  {
    id: "mountain-pilis-tető-extra",
    type: "mountain",
    parent: "HU-KE",
    coords: [18.870, 47.690],
    name: { de: "Pilis-Gipfel", hu: "Pilis-tető", ro: "Vârful Pilis", en: "Pilis Peak" },
    description: {
      de: "Der höchste Punkt des Pilis-Gebirges.",
      hu: "A Pilis-hegység legmagasabb pontja.",
      ro: "Cel mai înalt punct al munților Pilis.",
      en: "The highest point of the Pilis Mountains."
    },
    facts: {
      de: ["Höhe: 756 Meter.", "Besitzt eine neue Aussichtswarte.", "Historisches Zentrum der Pauliner."],
      hu: ["Magassága: 756 méter.", "Új kilátó található rajta.", "A pálosok történelmi központja."],
      ro: ["Înălțime: 756 metri.", "Deține un nou turn de observație.", "Centru istoric al paulinilor."],
      en: ["Height: 756 meters.", "Features a new lookout tower.", "Historic center of the Paulines."]
    }
  },
  {
    id: "forest-gerecse-erdo-extra",
    type: "forest",
    parent: "HU-KE",
    coords: [18.450, 47.680],
    name: { de: "Gerecse-Wald", hu: "Gerecse-erdő", ro: "Pădurea Gerecse", en: "Gerecse Forest" },
    description: {
      de: "Ausgedehnte Wälder im Kalksteingebirge des Gerecse.",
      hu: "Kiterjedt erdőségek a Gerecse mészkőhegységében.",
      ro: "Păduri vaste în munții calcaroși Gerecse.",
      en: "Extensive forests in the limestone mountains of the Gerecse."
    },
    facts: {
      de: ["Bekannt für seltene Greifvögel.", "Reich an Höhlen.", "Hervorragendes Wandergebiet."],
      hu: ["Ritka ragadozó madarakról ismert.", "Barlangokban gazdag.", "Kiváló túrázó terep."],
      ro: ["Cunoscut pentru păsări de pradă rare.", "Bogat în peșteri.", "Teritoriu excelent pentru drumeții."],
      en: ["Known for rare birds of prey.", "Rich in caves.", "Excellent hiking terrain."]
    }
  },
  {
    id: "mountain-vertes-kozma-extra",
    type: "mountain",
    parent: "HU-KE",
    coords: [18.420, 47.450],
    name: { de: "Vértes-Gipfel bei Kozma", hu: "Vértesi csúcsok", ro: "Vârfurile Vértes", en: "Vertes Peaks" },
    description: {
      de: "Hügelige Landschaft im nördlichen Vértes-Gebirge.",
      hu: "Dombos táj az északi Vértes-hegységben.",
      ro: "Peisaj deluros în nordul munților Vértes.",
      en: "Hilly landscape in the northern Vértes Mountains."
    },
    facts: {
      de: ["Besitzt Karstformen.", "Typische Buchenwälder.", "Ruheoase für Wanderer."],
      hu: ["Karsztformák jellemzik.", "Jellemző bükkerdők.", "A nyugalom szigete a túrázóknak."],
      ro: ["Caracterizat prin forme carstice.", "Păduri de fag tipice.", "Oază de liniște pentru drumeți."],
      en: ["Characterized by karst forms.", "Typical beech forests.", "Oasis of peace for hikers."]
    }
  },
  // HU-NO: Nógrád
  {
    id: "river-ipoly-szakas-extra",
    type: "river",
    parent: "HU-NO",
    coords: [19.100, 48.050],
    name: { de: "Ipoly", hu: "Ipoly", ro: "Ipoly", en: "Ipoly River" },
    description: {
      de: "Ein Grenzfluss zwischen Ungarn und der Slowakei mit vielen Windungen.",
      hu: "Magyarország és Szlovákia közötti határfolyó, sok kanyarulattal.",
      ro: "Un râu de frontieră între Ungaria și Slovacia, cu multe coturi.",
      en: "A border river between Hungary and Slovakia with many meanders."
    },
    facts: {
      de: ["Sehr naturbelassen.", "Beliebt für Kanutouren.", "Teil des Duna-Ipoly Nationalparks."],
      hu: ["Nagyon természetközeli állapotú.", "Kedvelt vízitúrázó hely.", "A Duna-Ipoly Nemzeti Park része."],
      ro: ["Stare foarte naturală.", "Loc preferat pentru excursii cu caiacul.", "Parte a Parcului Național Dunăre-Ipoly."],
      en: ["Very close to its natural state.", "Favorite spot for canoeing.", "Part of the Danube-Ipoly National Park."]
    }
  },
  {
    id: "mountain-medves-fennsik-extra",
    type: "mountain",
    parent: "HU-NO",
    coords: [19.850, 48.160],
    name: { de: "Medves-Plateau", hu: "Medves-fennsík", ro: "Podișul Medves", en: "Medves Plateau" },
    description: {
      de: "Das größte Basaltplateau Mitteleuropas an der Staatsgrenze.",
      hu: "Közép-Európa legnagyobb bazaltfennsíkja az államhatáron.",
      ro: "Cel mai mare podiș de bazalt din Europa Centrală la granița de stat.",
      en: "Central Europe's largest basalt plateau on the state border."
    },
    facts: {
      de: ["Vulkanischen Ursprungs.", "Bietet weite Grasebenen.", "Wunderschönes Rundpanorama."],
      hu: ["Vulkanikus eredetű.", "Tágas füves síkságok jellemzik.", "Csodás körpanoráma."],
      ro: ["Origine vulcanică.", "Caracterizat prin câmpii vaste înierbate.", "Panoramă circulară minunată."],
      en: ["Volcanic origin.", "Characterized by wide grassy plains.", "Wonderful circular panorama."]
    }
  },
  {
    id: "river-galga-forras-extra",
    type: "river",
    parent: "HU-NO",
    coords: [19.350, 47.900],
    name: { de: "Galga", hu: "Galga", ro: "Galga", en: "Galga River" },
    description: {
      de: "Ein kleiner Fluss, der im Cserhát entspringt und die Region Galgamente prägt.",
      hu: "A Cserhátban eredő folyó, amely a Galgamente vidékét határozza meg.",
      ro: "Un râu care izvorăște în Cserhát și definește regiunea Galgamente.",
      en: "A small river originating in the Cserhát and defining the Galgamente region."
    },
    facts: {
      de: ["Prägt die lokale Volkskunde.", "Langsamer Wasserlauf.", "Wichtiges ökologisches Tal."],
      hu: ["Meghatározza a helyi néprajzot.", "Lassú vízfolyás.", "Fontos ökológiai völgy."],
      ro: ["Definește etnografia locală.", "Curs de apă lent.", "Vale ecologică importantă."],
      en: ["Defines local ethnography.", "Slow watercourse.", "Important ecological valley."]
    }
  },
  {
    id: "forest-cserhat-erdo-extra",
    type: "forest",
    parent: "HU-NO",
    coords: [19.450, 47.950],
    name: { de: "Cserhat-Wälder", hu: "Cserháti-erdő", ro: "Pădurile Cserhát", en: "Cserhat Forest" },
    description: {
      de: "Ruhige Waldgebiete im Cserhát-Hügelland, fernab vom Massentourismus.",
      hu: "Nyugodt erdőségek a Cserhát dombjai között, távol a tömegturizmustól.",
      ro: "Păduri liniștite printre dealurile Cserhát, departe de turismul de masă.",
      en: "Quiet forests among the Cserhát hills, far from mass tourism."
    },
    facts: {
      de: ["Reich an Eichenwäldern.", "Viele versteckte Dörfer.", "Idealer Ort für Stille."],
      hu: ["Tölgyerdőkben gazdag.", "Számos eldugott falu a közelben.", "A csendre vágyók ideális helye."],
      ro: ["Bogat în păduri de stejar.", "Multe sate ascunse în apropiere.", "Loc ideal pentru cei care caută liniște."],
      en: ["Rich in oak forests.", "Many hidden villages nearby.", "Ideal place for those seeking silence."]
    }
  },
  {
    id: "mountain-szandavar-hegy-extra",
    type: "mountain",
    parent: "HU-NO",
    coords: [19.410, 47.910],
    name: { de: "Szandavar-Berg", hu: "Szandavár-hegy", ro: "Muntele Szandavár", en: "Szandavar Hill" },
    description: {
      de: "Ein markanter Gipfel mit einer mittelalterlichen Burgruine.",
      hu: "Jellegzetes csúcs középkori várrommal a tetején.",
      ro: "Un vârf distinctiv cu o ruină de cetate medievală în vârf.",
      en: "A distinctive peak with a medieval castle ruin on top."
    },
    facts: {
      de: ["Vulkanischer Andesitkegel.", "Bietet 360-Grad-Aussicht.", "Geologisches Denkmal."],
      hu: ["Vulkanikus andezitkúp.", "360 fokos kilátást nyújt.", "Geológiai értéket képvisel."],
      ro: ["Con de andezit vulcanic.", "Oferă o vedere de 360 de grade.", "Reprezintă o valoare geologică."],
      en: ["Volcanic andesite cone.", "Offers 360-degree view.", "Represents geological value."]
    }
  },
  // HU-PE: Pest
  {
    id: "mountain-visegradi-hegyseg-extra",
    type: "mountain",
    parent: "HU-PE",
    coords: [18.950, 47.750],
    name: { de: "Visegrader Gebirge", hu: "Visegrádi-hegység", ro: "Munții Visegrád", en: "Visegrád Mountains" },
    description: {
      de: "Ein Gebirge vulkanischen Ursprungs am Donauknie.",
      hu: "Vulkanikus eredetű hegység a Dunakanyar mentén.",
      ro: "Munți de origine vulcanică de-a lungul Cotului Dunării.",
      en: "A mountain range of volcanic origin along the Danube Bend."
    },
    facts: {
      de: ["Besitzt spektakuläre Schluchten.", "Hervorragende Wanderwege.", "Angrenzend an die Donau."],
      hu: ["Látványos szurdokokkal rendelkezik.", "Kiváló túraútvonalak.", "Közvetlenül a Duna mellett fekszik."],
      ro: ["Deține defilee spectaculoase.", "Trasee de drumeție excelente.", "Situat chiar lângă Dunăre."],
      en: ["Has spectacular gorges.", "Excellent hiking trails.", "Located right next to the Danube."]
    }
  },
  {
    id: "mountain-dobogoko-extra",
    type: "mountain",
    parent: "HU-PE",
    coords: [18.890, 47.710],
    name: { de: "Dobogoko", hu: "Dobogókő", ro: "Dobogókő", en: "Dobogoko" },
    description: {
      de: "Ein spiritueller Ort und beliebter Aussichtspunkt im Pilis-Gebirge.",
      hu: "Szakrális hely és népszerű kilátópont a Pilisben.",
      ro: "Un loc sacru și un punct de observație popular în Pilis.",
      en: "A sacred place and popular lookout point in the Pilis."
    },
    facts: {
      de: ["Höchster Punkt des Visegrader Gebirges (700 m).", "Zentrum des ungarischen Wandertourismus.", "Bester Blick auf das Donauknie."],
      hu: ["A Visegrádi-hegység legmagasabb pontja (700 m).", "A magyar túrázás bölcsője.", "Legjobb kilátás a Dunakanyarra."],
      ro: ["Cel mai înalt punct al munților Visegrád (700 m).", "Leagănul drumețiilor maghiare.", "Cea mai bună vedere asupra Cotului Dunării."],
      en: ["Highest point of the Visegrád Mountains (700 m).", "Cradle of Hungarian hiking.", "Best view of the Danube Bend."]
    }
  },
  {
    id: "forest-godolloi-arboretum-extra",
    type: "forest",
    parent: "HU-PE",
    coords: [19.370, 47.580],
    name: { de: "Godolloer Arboretum", hu: "Gödöllői Arborétum", ro: "Arboretumul Gödöllő", en: "Godollo Arboretum" },
    description: {
      de: "Ein weitläufiger Park mit einer Sammlung seltener Nadelbäume.",
      hu: "Hatalmas park ritka tűlevelű fák gyűjteményével.",
      ro: "Un parc vast cu o colecție de conifere rare.",
      en: "A huge park with a collection of rare coniferous trees."
    },
    facts: {
      de: ["Gegründet im Jahr 1902.", "Besteht aus über 150 Baumarten.", "Ideal für Familienausflüge."],
      hu: ["1902-ben alapították.", "Több mint 150 fafaj található itt.", "Ideális családi kirándulásokhoz."],
      ro: ["Fondat în anul 1902.", "Peste 150 de specii de arbori se găsesc aici.", "Ideal pentru excursii în familie."],
      en: ["Founded in 1902.", "More than 150 tree species can be found here.", "Ideal for family trips."]
    }
  },
  {
    id: "lake-garancsi-to-extra",
    type: "lake",
    parent: "HU-PE",
    coords: [18.850, 47.610],
    name: { de: "Garancsi-See", hu: "Garancsi-tó", ro: "Lacul Garancsi", en: "Lake Garancsi" },
    description: {
      de: "Ein kleiner, idyllischer See im Zsámbék-Becken.",
      hu: "Kisméretű, idilli tó a Zsámbéki-medencében.",
      ro: "Un lac mic și idilic în bazinul Zsámbék.",
      en: "A small, idyllic lake in the Zsámbék Basin."
    },
    facts: {
      de: ["Bekannt als Drehort ungarischer Filme.", "Schöne Ufervegetation.", "In der Nähe von Piliscsaba."],
      hu: ["Magyar filmek forgatási helyszíneként ismert.", "Szép parti növényzet.", "Piliscsaba közelében fekszik."],
      ro: ["Cunoscut ca loc de filmare pentru filme maghiare.", "Vegetație de mal frumoasă.", "Situat lângă Piliscsaba."],
      en: ["Known as a filming location for Hungarian movies.", "Beautiful shore vegetation.", "Located near Piliscsaba."]
    }
  },
  {
    id: "mountain-naszaly-extra",
    type: "mountain",
    parent: "HU-PE",
    coords: [19.150, 47.830],
    name: { de: "Naszaly", hu: "Naszály", ro: "Naszály", en: "Naszaly" },
    description: {
      de: "Ein markanter Kalksteinberg nördlich von Vác am Donauufer.",
      hu: "Jellegzetes mészkőhegy Váctól északra, a Duna partján.",
      ro: "Un munte calcaros distinctiv la nord de Vác, pe malul Dunării.",
      en: "A distinctive limestone mountain north of Vác, on the banks of the Danube."
    },
    facts: {
      de: ["Höhe: 652 Meter.", "Besitzt zahlreiche Höhlen.", "Hervorragender Aussichtspunkt."],
      hu: ["Magassága: 652 méter.", "Számos barlang található benne.", "Kiváló kilátópont."],
      ro: ["Înălțime: 652 metri.", "Conține numeroase peșteri.", "Punct de observație excelent."],
      en: ["Height: 652 meters.", "Contains numerous caves.", "Excellent lookout point."]
    }
  },
  // HU-SO: Somogy
  {
    id: "river-kapos-extra",
    type: "river",
    parent: "HU-SO",
    coords: [17.850, 46.400],
    name: { de: "Kapos", hu: "Kapos", ro: "Kapos", en: "Kapos River" },
    description: {
      de: "Ein bedeutender Fluss in Südtransdanubien, der durch Kaposvár fließt.",
      hu: "Dél-Dunántúl jelentős folyója, amely Kaposváron is keresztülhalad.",
      ro: "Un râu important din sudul Transdanubiei, care traversează și Kaposvár.",
      en: "A significant river in Southern Transdanubia, also passing through Kaposvár."
    },
    facts: {
      de: ["Entwässert die Somogy-Hügel.", "Mündet in die Sió.", "Reich an Auenlandschaften."],
      hu: ["A Somogyi-dombság vizeit gyűjti össze.", "A Sióba torkollik.", "Ártéri tájakban gazdag."],
      ro: ["Colectează apele dealurilor Somogy.", "Se varsă în Sió.", "Bogat în peisaje de luncă."],
      en: ["Collects the waters of the Somogy Hills.", "Flows into the Sió.", "Rich in floodplain landscapes."]
    }
  },
  {
    id: "lake-deseda-to-extra",
    type: "lake",
    parent: "HU-SO",
    coords: [17.830, 46.400],
    name: { de: "Deseda-See", hu: "Deseda-tó", ro: "Lacul Deseda", en: "Lake Deseda" },
    description: {
      de: "Der längste künstliche See Ungarns, ein beliebtes Erholungsgebiet.",
      hu: "Magyarország leghosszabb mesterséges tava, népszerű üdülőhely.",
      ro: "Cel mai lung lac artificial din Ungaria, o stațiune populară.",
      en: "Hungary's longest man-made lake, a popular resort area."
    },
    facts: {
      de: ["Besitzt ein modernes Besucherzentrum.", "Wichtiger Ort für Angler.", "Länge: 8 Kilometer."],
      hu: ["Modern látogatóközponttal rendelkezik.", "Fontos helyszín a horgászoknak.", "Hossza: 8 kilométer."],
      ro: ["Deține un centru de vizitare modern.", "Loc important pentru pescari.", "Lungime: 8 kilometri."],
      en: ["Features a modern visitor center.", "Important site for anglers.", "Length: 8 kilometers."]
    }
  },
  {
    id: "forest-boronka-melleki-extra",
    type: "forest",
    parent: "HU-SO",
    coords: [17.450, 46.450],
    name: { de: "Boronka-Wälder", hu: "Boronka-melléki erdő", ro: "Pădurea Boronka", en: "Boronka Forest" },
    description: {
      de: "Ein geschütztes Wald- und Feuchtgebiet im inneren Somogy.",
      hu: "Védett erdős és vizes élőhely Belső-Somogyban.",
      ro: "O zonă forestieră și umedă protejată în interiorul Somogy.",
      en: "A protected forest and wetland area in inner Somogy."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat.", "Heimat des Seeadlers.", "Reich an Erlenwäldern."],
      hu: ["UNESCO bioszféra-rezervátum része.", "A rétisas fontos fészkelőhelye.", "Égererdőkben gazdag."],
      ro: ["Parte a rezervației biosferei UNESCO.", "Loc de cuibărit important pentru vulturul codalb.", "Bogat în păduri de anin."],
      en: ["Part of the UNESCO Biosphere Reserve.", "Important nesting site for the white-tailed eagle.", "Rich in alder forests."]
    }
  },
  {
    id: "river-koppany-extra",
    type: "river",
    parent: "HU-SO",
    coords: [18.100, 46.600],
    name: { de: "Koppany", hu: "Koppány", ro: "Koppány", en: "Koppany River" },
    description: {
      de: "Ein kleiner Fluss, der die Grenze zwischen Somogy und Tolna prägt.",
      hu: "Kis folyó, amely Somogy és Tolna határvidékét határozza meg.",
      ro: "Un râu mic care definește zona de frontieră între Somogy și Tolna.",
      en: "A small river defining the border area between Somogy and Tolna."
    },
    facts: {
      de: ["Mündet in die Kapos.", "Fließt durch ein malerisches Tal.", "Besitzt eine reiche Fischfauna."],
      hu: ["A Kaposba torkollik.", "Festői völgyben halad keresztül.", "Gazdag halfaunával rendelkezik."],
      ro: ["Se varsă în Kapos.", "Traversează o vale pitorească.", "Deține o faună piscicolă bogată."],
      en: ["Flows into the Kapos.", "Passes through a picturesque valley.", "Has a rich fish fauna."]
    }
  },
  {
    id: "lake-balatonszentgyorgy-extra",
    type: "lake",
    parent: "HU-SO",
    coords: [17.300, 46.680],
    name: { de: "Balatonszentgyörgyer Mumpf", hu: "Balatonszentgyörgyi-mocsár", ro: "Mlaștina Balatonszentgyörgy", en: "Balatonszentgyörgy Marsh" },
    description: {
      de: "Ein wertvolles Feuchtgebiet am südwestlichen Zipfel des Balaton.",
      hu: "Értékes vizes élőhely a Balaton délnyugati sarkánál.",
      ro: "O zonă umedă valoroasă la colțul sud-vestic al Balatonului.",
      en: "A valuable wetland at the southwestern corner of Lake Balaton."
    },
    facts: {
      de: ["Teil des Nationalparks.", "Bedeutendes Vogelhabitat.", "Besitzt eine Sternwarte in der Nähe."],
      hu: ["A nemzeti park része.", "Jelentős madárélőhely.", "Csillagvizsgáló található a közelében."],
      ro: ["Parte a parcului național.", "Habitat important pentru păsări.", "Observator astronomic situat în apropiere."],
      en: ["Part of the national park.", "Significant bird habitat.", "Astronomical observatory located nearby."]
    }
  },
  // HU-SZ: Szabolcs-Szatmár-Bereg
  {
    id: "river-szamos-extra",
    type: "river",
    parent: "HU-SZ",
    coords: [22.400, 48.000],
    name: { de: "Szamos", hu: "Szamos", ro: "Someș", en: "Szamos River" },
    description: {
      de: "Ein großer Fluss, der aus Siebenbürgen kommt und in die Theiß mündet.",
      hu: "Erdélyből érkező nagy folyó, amely a Tiszába torkollik.",
      ro: "Râu mare care vine din Transilvania și se varsă în Tisa.",
      en: "A large river coming from Transylvania, flowing into the Tisza."
    },
    facts: {
      de: ["Durchfließt Szatmár.", "Bekannt für seine starken Strömungen.", "Reich an Welsen."],
      hu: ["Áthalad a Szatmári-síkságon.", "Erős sodrásáról ismert.", "Harcsaállománya jelentős."],
      ro: ["Traversează Câmpia Sătmarului.", "Cunoscut pentru curenții săi puternici.", "Efectiv de somn semnificativ."],
      en: ["Passes through the Szatmár Plain.", "Known for its strong currents.", "Significant catfish population."]
    }
  },
  {
    id: "river-tur-extra",
    type: "river",
    parent: "HU-SZ",
    coords: [22.650, 48.050],
    name: { de: "Tur", hu: "Túr", ro: "Tur", en: "Tur River" },
    description: {
      de: "Ein kleiner, kurvenreicher Fluss im äußersten Nordosten.",
      hu: "Kis méretű, kanyargós folyó a távoli északkeleten.",
      ro: "Râu mic și șerpuitor în extremul nord-est.",
      en: "A small, winding river in the far northeast."
    },
    facts: {
      de: ["Bekannt für die Wasserfälle bei Sonkád.", "Beliebt für Kanutouren.", "Sehr sauberes Wasser."],
      hu: ["Híres a sonkádi vízeséséről.", "Vízitúrázók kedvelt helye.", "Nagyon tiszta vízű."],
      ro: ["Faimos pentru cascada de la Sonkád.", "Loc preferat de canotiști.", "Apă foarte curată."],
      en: ["Famous for its waterfall at Sonkád.", "Favorite spot for canoeists.", "Very clean water."]
    }
  },
  {
    id: "river-kraszna-extra",
    type: "river",
    parent: "HU-SZ",
    coords: [22.350, 48.100],
    name: { de: "Kraszna", hu: "Kraszna", ro: "Crasna", en: "Kraszna River" },
    description: {
      de: "Ein Nebenfluss der Theiß, der durch den östlichen Teil des Komitats fließt.",
      hu: "A Tisza mellékfolyója, amely a vármegye keleti részén halad át.",
      ro: "Un afluent al Tisei, care traversează partea de est a județului.",
      en: "A tributary of the Tisza, passing through the eastern part of the county."
    },
    facts: {
      de: ["Langsamer Lauf.", "Wichtig für die Be- und Entwässerung.", "Naturnahe Ufer."],
      hu: ["Lassú folyású meder.", "Fontos öntözési szerep.", "Természetközeli partok."],
      ro: ["Curs lent.", "Rol important în irigații.", "Maluri naturale."],
      en: ["Slow-flowing bed.", "Important for irrigation.", "Natural shores."]
    }
  },
  {
    id: "forest-baktaloranthaza-erdo-extra",
    type: "forest",
    parent: "HU-SZ",
    coords: [22.050, 47.980],
    name: { de: "Baktaloranthaza-Wald", hu: "Baktalórántházi-erdő", ro: "Pădurea Baktalórántháza", en: "Baktaloranthaza Forest" },
    description: {
      de: "Eines der wertvollsten Waldgebiete des Nyírség.",
      hu: "A Nyírség egyik legértékesebb erdőterülete.",
      ro: "Una dintre cele mai valoroase zone forestiere din Nyírség.",
      en: "One of the most valuable forest areas of the Nyírség."
    },
    facts: {
      de: ["Besteht aus alten Eichen.", "Besitzt einen Lehrpfad.", "Wichtiges Habitat für Insekten."],
      hu: ["Öreg tölgyesekből áll.", "Tanösvény várja a látogatókat.", "Fontos rovarélőhely."],
      ro: ["Format din stejari bătrâni.", "Traseu didactic disponibil.", "Habitat important pentru insecte."],
      en: ["Composed of old oaks.", "Educational trail for visitors.", "Important insect habitat."]
    }
  },
  {
    id: "lake-vajai-to-extra",
    type: "lake",
    parent: "HU-SZ",
    coords: [22.150, 47.980],
    name: { de: "Vajaer See", hu: "Vajai-tó", ro: "Lacul Vaja", en: "Lake Vaja" },
    description: {
      de: "Ein Naturschutzsee im Nyírség, bekannt für seine schwimmenden Inseln.",
      hu: "Természetvédelmi tó a Nyírségben, lebegő szigeteiről ismert.",
      ro: "Lac protejat în Nyírség, cunoscut pentru insulele sale plutitoare.",
      en: "Nature protected lake in the Nyírség, known for its floating islands."
    },
    facts: {
      de: ["Seltener Sumpf-Eichenbestand.", "Reich an Seerosen.", "Bedeutendes Feuchtgebiet."],
      hu: ["Ritka mocsári tölgyek.", "Tündérrózsákban gazdag.", "Jelentős vizes élőhely."],
      ro: ["Stejari de mlaștină rari.", "Bogat în nuferi.", "Zonă umedă semnificativă."],
      en: ["Rare swamp oaks.", "Rich in water lilies.", "Significant wetland."]
    }
  },
  // HU-TO: Tolna
  {
    id: "mountain-szekszardi-dombsag-extra",
    type: "mountain",
    parent: "HU-TO",
    coords: [18.650, 46.350],
    name: { de: "Szekszarder Hügelland", hu: "Szekszárdi-dombság", ro: "Dealurile Szekszárd", en: "Szekszárd Hills" },
    description: {
      de: "Eine sanfte Hügellandschaft, berühmt für ihren Rotwein.",
      hu: "Lankás dombvidék, amely vörösborairól híres.",
      ro: "Zonă deluroasă blândă, renumită pentru vinurile sale roșii.",
      en: "Gentle hilly landscape, famous for its red wines."
    },
    facts: {
      de: ["Besteht aus Löss.", "Malerische Weinkeller.", "Hervorragendes Wandergebiet."],
      hu: ["Löszös talaj jellemzi.", "Festői borospincék.", "Kiváló túrázó hely."],
      ro: ["Sol loessos.", "Crame pitorești.", "Zonă excelentă pentru drumeții."],
      en: ["Loess soil.", "Picturesque wine cellars.", "Excellent hiking area."]
    }
  },
  {
    id: "lake-pacsmagi-tavak-extra",
    type: "lake",
    parent: "HU-TO",
    coords: [18.380, 46.620],
    name: { de: "Pacsmager Teiche", hu: "Pacsmagi-tavak", ro: "Iazurile Pacsmag", en: "Pacsmagi Ponds" },
    description: {
      de: "Ein bedeutendes Naturschutzgebiet für Vögel in Südtransdanubien.",
      hu: "Dél-Dunántúl jelentős madárvédelmi területe.",
      ro: "Zonă importantă de protecție a păsărilor din sudul Transdanubiei.",
      en: "Significant bird protection area in Southern Transdanubia."
    },
    facts: {
      de: ["System aus mehreren Fischteichen.", "Rastplatz für Tausende von Zugvögeln.", "Geführte Naturtouren."],
      hu: ["Több halastóból álló rendszer.", "Vonuló madarak ezreinek pihenőhelye.", "Szakvezetéses túrák."],
      ro: ["Sistem format din mai multe iazuri.", "Loc de odihnă pentru mii de păsări migratoare.", "Tururi ghidate."],
      en: ["System of several fishponds.", "Resting place for thousands of migratory birds.", "Guided tours."]
    }
  },
  {
    id: "forest-gemenci-erdo-extra",
    type: "forest",
    parent: "HU-TO",
    coords: [18.850, 46.250],
    name: { de: "Gemencer Wald", hu: "Gemenci-erdő", ro: "Pădurea Gemenc", en: "Gemenc Forest" },
    description: {
      de: "Das größte zusammenhängende Auenwaldgebiet Mitteleuropas.",
      hu: "Közép-Európa legnagyobb összefüggő ártéri erdőterülete.",
      ro: "Cea mai mare zonă compactă de pădure de luncă din Europa Centrală.",
      en: "The largest continuous floodplain forest in Central Europe."
    },
    facts: {
      de: ["Heimat von kapitalen Rothirschen.", "Besitzt eine Schmalspurbahn.", "Häufig überflutet."],
      hu: ["Kapitális gímszarvasok otthona.", "Erdei kisvasút halad át rajta.", "Gyakran víz alá kerül."],
      ro: ["Patria cerbilor gímsuar capitali.", "Traversată de o cale ferată îngustă.", "Inundată frecvent."],
      en: ["Home to trophy red deer.", "Forest narrow-gauge railway passes through it.", "Frequently flooded."]
    }
  },
  {
    id: "river-kapos-torkolat-extra",
    type: "river",
    parent: "HU-TO",
    coords: [18.750, 46.380],
    name: { de: "Kapos-Mündung", hu: "Kapos-torkolat", ro: "Gura de vărsare a Kaposului", en: "Kapos Mouth" },
    description: {
      de: "Die Mündungsregion des Kapos in die Sió bei Szekszárd.",
      hu: "A Kapos folyó torkolatvidéke a Sióba Szekszárd közelében.",
      ro: "Zona de vărsare a râului Kapos în Sió lângă Szekszárd.",
      en: "The confluence region of the Kapos river into the Sió near Szekszárd."
    },
    facts: {
      de: ["Wichtiger wasserbaulicher Knoten.", "Reich an Auenvegetation.", "Beliebt bei Naturbeobachtern."],
      hu: ["Fontos vízügyi csomópont.", "Gazdag ártéri növényzet.", "Természetmegfigyelők kedvelt helye."],
      ro: ["Nod hidrologic important.", "Vegetație de luncă bogată.", "Loc preferat de observatorii naturii."],
      en: ["Important hydraulic junction.", "Rich floodplain vegetation.", "Favorite spot for nature observers."]
    }
  },
  {
    id: "mountain-tolnai-hegyhat-extra",
    type: "mountain",
    parent: "HU-TO",
    coords: [18.400, 46.550],
    name: { de: "Tolnaer Bergrücken", hu: "Tolnai-hegyhát", ro: "Dealurile Tolnei", en: "Tolnai-hegyhat Hills" },
    description: {
      de: "Eine ruhige Hügellandschaft mit tiefen Tälern im Zentrum von Tolna.",
      hu: "Nyugodt dombvidék mély völgyekkel Tolna vármegye közepén.",
      ro: "Zonă deluroasă liniștită cu văi adânci în centrul județului Tolna.",
      en: "Quiet hilly landscape with deep valleys in the center of Tolna county."
    },
    facts: {
      de: ["Reich an Waldgebieten.", "Kultur der Donauschwaben.", "Besitzt viele historische Kirchen."],
      hu: ["Erdőségekben gazdag.", "A dunai svábok kultúrája jellemzi.", "Számos történelmi templom."],
      ro: ["Bogat în zone împădurite.", "Cultura șvabilor dunăreni.", "Multe biserici istorice."],
      en: ["Rich in forested areas.", "Culture of Danube Swabians.", "Numerous historic churches."]
    }
  },
  // HU-VA: Vas
  {
    id: "river-raba-extra",
    type: "river",
    parent: "HU-VA",
    coords: [16.800, 47.100],
    name: { de: "Raab", hu: "Rába", ro: "Rába", en: "Raba River" },
    description: {
      de: "Der wildeste Fluss Westungarns, beliebt für anspruchsvolle Kanutouren.",
      hu: "Nyugat-Magyarország legvadabb folyója, a vízitúrázók kedvence.",
      ro: "Cel mai sălbatic râu din vestul Ungariei, preferat de canotiști.",
      en: "The wildest river in Western Hungary, a favorite for canoeists."
    },
    facts: {
      de: ["Entspringt in Österreich.", "Viele gefährliche Strudel.", "Unberührte Auenlandschaften."],
      hu: ["Ausztriában ered.", "Sok veszélyes örvény jellemzi.", "Érintetlen ártéri tájak."],
      ro: ["Izvorăște în Austria.", "Caracterizat prin multe vârtejuri periculoase.", "Peisaje de luncă virgine."],
      en: ["Originates in Austria.", "Characterized by many dangerous eddies.", "Untouched floodplain landscapes."]
    }
  },
  {
    id: "mountain-koszegi-hegyseg-extra",
    type: "mountain",
    parent: "HU-VA",
    coords: [16.480, 47.380],
    name: { de: "Günscher Gebirge", hu: "Kőszegi-hegység", ro: "Munții Kőszeg", en: "Koszegi Mountains" },
    description: {
      de: "Ein Gebirge an der Grenze zu Österreich, bekannt für sein alpines Klima.",
      hu: "Hegység az osztrák határon, alpesi klímájáról ismert.",
      ro: "Munți la granița cu Austria, cunoscuți pentru climatul alpin.",
      en: "Mountains on the Austrian border, known for their alpine climate."
    },
    facts: {
      de: ["Höchster Punkt Transdanubiens (Írott-kő).", "Reich an Quellen.", "Hervorragende Wanderwege."],
      hu: ["Dunántúl legmagasabb pontja (Írott-kő).", "Forrásokban gazdag.", "Kiváló túraútvonalak."],
      ro: ["Cel mai înalt punct din Transdanubia (Írott-kő).", "Bogat în izvoare.", "Trasee de drumeție excelente."],
      en: ["Highest point in Transdanubia (Írott-kő).", "Rich in springs.", "Excellent hiking trails."]
    }
  },
  {
    id: "forest-orsegi-erdo-extra",
    type: "forest",
    parent: "HU-VA",
    coords: [16.350, 46.900],
    name: { de: "Orseger Wald", hu: "Őrségi-erdő", ro: "Pădurea Őrség", en: "Orseg Forest" },
    description: {
      de: "Mystische Wälder im Őrség-Nationalpark mit reicher Flora.",
      hu: "Misztikus erdők az Őrségi Nemzeti Parkban, gazdag növényvilággal.",
      ro: "Păduri mistice în Parcul Național Őrség, cu o floră bogată.",
      en: "Mystical forests in the Őrség National Park with rich flora."
    },
    facts: {
      de: ["Besitzt seltene Torfmoose.", "Pilzreiches Gebiet.", "Historische Grenzschutzwälder."],
      hu: ["Ritka tőzegmohalápok találhatók itt.", "Gombákban gazdag terület.", "Történelmi határőrizeti erdők."],
      ro: ["Turbării rare de mușchi se găsesc aici.", "Zonă bogată în ciuperci.", "Păduri istorice de pază a frontierei."],
      en: ["Rare peat moss bogs found here.", "Area rich in mushrooms.", "Historic border guard forests."]
    }
  },
  {
    id: "river-gyongyos-patak-extra",
    type: "river",
    parent: "HU-VA",
    coords: [16.600, 47.300],
    name: { de: "Güns", hu: "Gyöngyös-patak", ro: "Pârâul Gyöngyös", en: "Gyongyos Brook" },
    description: {
      de: "Ein Bach, der durch Kőszeg und Szombathely fließt.",
      hu: "Patak, amely Kőszegen és Szombathelyen is keresztülfolyik.",
      ro: "Pârâu care traversează și Kőszeg și Szombathely.",
      en: "A brook that flows through both Kőszeg and Szombathely."
    },
    facts: {
      de: ["Wurde historisch für Mühlen genutzt.", "Fließt in die Raab.", "Schöne Uferwege."],
      hu: ["Történelmileg malmokat hajtott.", "A Rábába torkollik.", "Szép parti sétányok."],
      ro: ["Istoric a acționat mori.", "Se varsă în Rába.", "Promenade frumoase pe mal."],
      en: ["Historically powered mills.", "Flows into the Raba.", "Beautiful shore promenades."]
    }
  },
  {
    id: "mountain-irott-ko-extra",
    type: "mountain",
    parent: "HU-VA",
    coords: [16.430, 47.350],
    name: { de: "Geschriebenstein", hu: "Írott-kő", ro: "Írott-kő", en: "Irott-ko" },
    description: {
      de: "Der höchste Punkt Transdanubiens direkt auf der Grenze.",
      hu: "A Dunántúl legmagasabb pontja közvetlenül a határon.",
      ro: "Cel mai înalt punct din Transdanubia chiar pe frontieră.",
      en: "The highest point of Transdanubia right on the border."
    },
    facts: {
      de: ["Höhe: 884 Meter.", "Die Aussichtswarte wird geteilt.", "Nördlicher Endpunkt des Blauen Pfades."],
      hu: ["Magassága: 884 méter.", "A kilátót kettévágja a határ.", "Az Országos Kéktúra egyik végpontja."],
      ro: ["Înălțime: 884 metri.", "Turnul de observație este divizat de graniță.", "Unul dintre capetele Traseului Albastru."],
      en: ["Height: 884 meters.", "The lookout tower is divided by the border.", "One of the terminuses of the National Blue Trail."]
    }
  },
  // HU-VE: Veszprém
  {
    id: "mountain-somlo-extra",
    type: "mountain",
    parent: "HU-VE",
    coords: [17.370, 47.140],
    name: { de: "Somlo", hu: "Somló", ro: "Somló", en: "Somlo" },
    description: {
      de: "Ein isolierter Zeugenberg, bekannt für seine exzellenten Weißweine.",
      hu: "Magányos tanúhegy, kiváló fehérborairól nevezetes.",
      ro: "Deal martor izolat, renumit pentru vinurile sale albe excelente.",
      en: "An isolated witness hill, famous for its excellent white wines."
    },
    facts: {
      de: ["Besitzt eine Burgruine.", "Kleinste Weinregion Ungarns.", "Vulkanischen Ursprungs."],
      hu: ["Várrom található a tetején.", "Magyarország legkisebb borvidéke.", "Vulkanikus eredetű."],
      ro: ["Deține o ruină de cetate.", "Cea mai mică regiune viticolă din Ungaria.", "Origine vulcanică."],
      en: ["Features a castle ruin.", "Hungary's smallest wine region.", "Volcanic origin."]
    }
  },
  {
    id: "mountain-szent-gyorgy-hegy-extra",
    type: "mountain",
    parent: "HU-VE",
    coords: [17.450, 46.840],
    name: { de: "Sankt-Georgs-Berg", hu: "Szent György-hegy", ro: "Muntele Sfântul Gheorghe", en: "Saint George Hill" },
    description: {
      de: "Berühmt für seine gewaltigen Basaltsäulen, die 'Basaltorgeln'.",
      hu: "Híres hatalmas bazaltoszlopairól, a 'bazaltorgonákról'.",
      ro: "Faimos pentru coloanele sale uriașe de bazalt, „orgile de bazalt”.",
      en: "Famous for its massive basalt columns, the 'basalt organs'."
    },
    facts: {
      de: ["Hervorragende Weine.", "Besitzt eine Kapelle von 1760.", "Eindrucksvolles Panorama."],
      hu: ["Kiváló bortermő hely.", "1760-as években épült kápolnája van.", "Lenyűgöző panoráma."],
      ro: ["Loc excelent de producție a vinului.", "Deține o capelă construită în anii 1760.", "Panoramă impresionantă."],
      en: ["Excellent wine-growing location.", "Has a chapel built in the 1760s.", "Impressive panorama."]
    }
  },
  {
    id: "lake-tapolca-tavasbarlang-extra",
    type: "lake",
    parent: "HU-VE",
    coords: [17.440, 46.880],
    name: { de: "See-Höhle Tapolca", hu: "Tapolcai-tavasbarlang", ro: "Peștera cu lac Tapolca", en: "Tapolca Lake Cave" },
    description: {
      de: "Ein einzigartiges unterirdisches Seesystem, das man mit dem Boot erkunden kann.",
      hu: "Egyedülálló föld alatti tórendszer, amely csónakkal bejárható.",
      ro: "Un sistem unic de lacuri subterane, care poate fi explorat cu barca.",
      en: "A unique underground lake system that can be explored by boat."
    },
    facts: {
      de: ["Karsthöhle.", "Heilendes Mikroklima.", "Mitten in der Stadt Tapolca."],
      hu: ["Karsztbarlang.", "Gyógyhatású mikroklíma.", "Tapolca városának szívében található."],
      ro: ["Peșteră carstică.", "Microclimat curativ.", "Situată în inima orașului Tapolca."],
      en: ["Karst cave.", "Healing microclimate.", "Located in the heart of Tapolca city."]
    }
  },
  {
    id: "river-cuha-patak-extra",
    type: "river",
    parent: "HU-VE",
    coords: [17.850, 47.350],
    name: { de: "Cuha-Bach", hu: "Cuha-patak", ro: "Pârâul Cuha", en: "Cuha Brook" },
    description: {
      de: "Ein wildromantischer Bach im Bakony mit einer spektakulären Bahntrasse daneben.",
      hu: "Vadregényes patak a Bakonyban, mellette látványos vasútvonallal.",
      ro: "Un pârâu sălbatic în Bakony, cu o linie ferată spectaculoasă alături.",
      en: "A wild and romantic brook in the Bakony, with a spectacular railway line next to it."
    },
    facts: {
      de: ["Besitzt viele Furtübergänge.", "Teil einer UNESCO-Bahnstrecke.", "Beliebtes Wanderziel."],
      hu: ["Számos gázlón halad át.", "UNESCO-jelölt vasútvonal mentén.", "Népszerű túracélpont."],
      ro: ["Traversează numeroase vaduri.", "De-a lungul unei linii ferate candidate UNESCO.", "Destinație populară de drumeție."],
      en: ["Passes through numerous fords.", "Along a UNESCO-candidate railway line.", "Popular hiking destination."]
    }
  },
  {
    id: "mountain-kab-hegy-extra",
    type: "mountain",
    parent: "HU-VE",
    coords: [17.650, 47.050],
    name: { de: "Kab-Berg", hu: "Kab-hegy", ro: "Muntele Kab", en: "Kab Hill" },
    description: {
      de: "Der höchste Punkt des südlichen Bakony mit einem Fernsehturm.",
      hu: "A Déli-Bakony legmagasabb pontja tévétoronnyal.",
      ro: "Cel mai înalt punct din Bakony de Sud, cu un turn TV.",
      en: "The highest point of the Southern Bakony with a TV tower."
    },
    facts: {
      de: ["Höhe: 599 Meter.", "Vulkanischer Ursprung.", "Besitzt eine große Funkstation."],
      hu: ["Magassága: 599 méter.", "Vulkanikus eredetű.", "Hatalmas rádióállomás található rajta."],
      ro: ["Înălțime: 599 metri.", "Origine vulcanică.", "Deține o stație radio imensă."],
      en: ["Height: 599 meters.", "Volcanic origin.", "Features a large radio station."]
    }
  },
  // HU-ZA: Zala
  {
    id: "river-mura-extra",
    type: "river",
    parent: "HU-ZA",
    coords: [16.700, 46.400],
    name: { de: "Mur", hu: "Mura", ro: "Mura", en: "Mura River" },
    description: {
      de: "Ein Grenzfluss zwischen Ungarn und Kroatien mit unberührter Natur.",
      hu: "Magyarország és Horvátország közötti határfolyó érintetlen természettel.",
      ro: "Un râu de frontieră între Ungaria și Croația, cu natură virgină.",
      en: "A border river between Hungary and Croatia with untouched nature."
    },
    facts: {
      de: ["Mündet in die Drau.", "Goldwaschen war hier früher üblich.", "Wichtiger ökologischer Korridor."],
      hu: ["A Drávába torkollik.", "Régebben aranyat mostak benne.", "Fontos ökológiai folyosó."],
      ro: ["Se varsă în Dráva.", "În trecut se spăla aur aici.", "Coridor ecologic important."],
      en: ["Flows into the Drava.", "Gold panning was common here in the past.", "Important ecological corridor."]
    }
  },
  {
    id: "river-zala-folyo-extra",
    type: "river",
    parent: "HU-ZA",
    coords: [17.000, 46.800],
    name: { de: "Zala", hu: "Zala", ro: "Zala", en: "Zala River" },
    description: {
      de: "Der Hauptzufluss des Balaton, der den See mit Frischwasser versorgt.",
      hu: "A Balaton legjelentősebb vízutánpótlását biztosító folyó.",
      ro: "Cel mai important râu care asigură alimentarea cu apă a Balatonului.",
      en: "The most significant river providing water supply to Lake Balaton."
    },
    facts: {
      de: ["Prägt das Komitat Zala.", "Wichtige Rolle beim Kis-Balaton.", "Fischreich."],
      hu: ["Meghatározza Zala vármegye táját.", "Fontos szerep a Kis-Balatonnál.", "Halban gazdag."],
      ro: ["Definește peisajul județului Zala.", "Rol important la Micul Balaton.", "Bogat în pește."],
      en: ["Defines the landscape of Zala county.", "Important role at the Little Balaton.", "Rich in fish."]
    }
  },
  {
    id: "river-kerka-extra",
    type: "river",
    parent: "HU-ZA",
    coords: [16.550, 46.600],
    name: { de: "Kerka", hu: "Kerka", ro: "Kerka", en: "Kerka River" },
    description: {
      de: "Ein kleiner Fluss im Südwesten, der durch das Hetés-Gebiet fließt.",
      hu: "Délnyugati folyó, amely a Hetés vidékén halad keresztül.",
      ro: "Un râu din sud-vest, care traversează regiunea Hetés.",
      en: "A southwestern river passing through the Hetés region."
    },
    facts: {
      de: ["Reich an Altwasserarmen.", "Wichtiger Lebensraum für Krebse.", "Mündet in die Mura."],
      hu: ["Holtágakban gazdag.", "Fontos rákélőhely.", "A Murába torkollik."],
      ro: ["Bogat în brațe moarte.", "Habitat important pentru raci.", "Se varsă în Mura."],
      en: ["Rich in oxbow lakes.", "Important crayfish habitat.", "Flows into the Mura."]
    }
  },
  {
    id: "forest-gocseji-erdo-extra",
    type: "forest",
    parent: "HU-ZA",
    coords: [16.700, 46.750],
    name: { de: "Gocsej-Wälder", hu: "Göcseji-erdő", ro: "Pădurea Göcsej", en: "Gocsej Forest" },
    description: {
      de: "Dichte Kiefern- und Buchenwälder in der hügeligen Göcsej-Region.",
      hu: "Sűrű fenyvesek és bükkösök a dombos Göcsej vidékén.",
      ro: "Păduri dese de pini și fagi în regiunea deluroasă Göcsej.",
      en: "Dense pine and beech forests in the hilly Göcsej region."
    },
    facts: {
      de: ["Reich an Pilzen.", "Typische transdanubische Flora.", "Viele Quellen."],
      hu: ["Gombákban rendkívül gazdag.", "Jellemző dunántúli növényvilág.", "Számos forrás."],
      ro: ["Extrem de bogat în ciuperci.", "Floră transdanubiană tipică.", "Numeroase izvoare."],
      en: ["Extremely rich in mushrooms.", "Typical transdanubian flora.", "Numerous springs."]
    }
  },
  {
    id: "lake-zalacsanyi-to-extra",
    type: "lake",
    parent: "HU-ZA",
    coords: [17.100, 46.810],
    name: { de: "Zalacsanyer See", hu: "Zalacsányi-tó", ro: "Lacul Zalacsány", en: "Lake Zalacsany" },
    description: {
      de: "Ein malerischer Angel- und Erholungssee im Herzen von Zala.",
      hu: "Festői horgász- és pihenőhely Zala szívében.",
      ro: "Loc pitoresc de pescuit și odihnă în inima județului Zala.",
      en: "Picturesque fishing and recreation spot in the heart of Zala."
    },
    facts: {
      de: ["Künstlich angelegt.", "Umgeben von bewaldeten Hügeln.", "Besitzt einen Freizeitpark in der Nähe."],
      hu: ["Mesterségesen kialakított.", "Erdős dombok övezik.", "Szabadidőpark található a közelében."],
      ro: ["Creat artificial.", "Înconjurat de dealuri împădurite.", "Parc de agrement situat în apropiere."],
      en: ["Man-made lake.", "Surrounded by wooded hills.", "Leisure park located nearby."]
    }
  }
];
