import type { POI } from "./poi";

export const mkPoisPart6: POI[] = [
  // MK-051: Čaška
  {
    id: "MK-051-solunska-glava",
    type: "mountain",
    parent: "MK-051",
    coords: [21.4167, 41.6667],
    name: { de: "Solunska Glava", hu: "Szolunszka Glava", ro: "Solunska Glava", en: "Solunska Glava" },
    description: {
      de: "Der höchste Gipfel des Jakupica-Massivs, bekannt für seine spektakuläre Aussicht.",
      hu: "A Jakupica-masszívum legmagasabb csúcsa, látványos kilátásáról ismert.",
      ro: "Cel mai înalt vârf din masivul Jakupica, cunoscut pentru vederea sa spectaculoasă.",
      en: "The highest peak of the Jakupica massif, known for its spectacular views."
    },
    facts: {
      de: ["Höhe von 2.540 Metern.", "An klaren Tagen kann man angeblich bis Thessaloniki sehen.", "Ein beliebtes Ziel für erfahrene Alpinisten."],
      hu: ["2540 méter magas.", "Tiszta napokon állítólag Szalonikiig is el lehet látni.", "A tapasztalt hegymászók kedvelt célpontja."],
      ro: ["Altitudine de 2.540 de metri.", "În zilele senine, se spune că se poate vedea până la Salonic.", "O destinație populară pentru alpiniștii experimentați."],
      en: ["Elevation of 2,540 meters.", "On clear days, it's said one can see as far as Thessaloniki.", "A popular destination for experienced alpinists."]
    }
  },
  {
    id: "MK-051-babuna-river-source",
    type: "river",
    parent: "MK-051",
    coords: [21.4333, 41.6000],
    name: { de: "Babuna-Quelle", hu: "Babuna-forrás", ro: "Izvorul râului Babuna", en: "Babuna River Source" },
    description: {
      de: "Die Quelle des Flusses Babuna am Fuße des Jakupica-Gebirges.",
      hu: "A Babuna folyó forrása a Jakupica-hegység lábánál.",
      ro: "Izvorul râului Babuna la poalele munților Jakupica.",
      en: "The source of the Babuna river at the foot of the Jakupica mountains."
    },
    facts: {
      de: ["Bekannt für seine natürliche Schönheit.", "In der Nähe gibt es beeindruckende Höhlen.", "Das Wasser ist eiskalt und klar."],
      hu: ["Természeti szépségéről ismert.", "A közelben lenyűgöző barlangok találhatók.", "A víz jéghideg és tiszta."],
      ro: ["Cunoscut pentru frumusețea sa naturală.", "Există peșteri impresionante în apropiere.", "Apa este rece ca gheața și limpede."],
      en: ["Known for its natural beauty.", "Features impressive caves nearby.", "The water is ice-cold and clear."]
    }
  },
  // MK-052: Rosoman
  {
    id: "MK-052-stobi-archaeological-site",
    type: "historical",
    parent: "MK-052",
    coords: [21.9472, 41.5519],
    name: { de: "Stobi", hu: "Stobi", ro: "Stobi", en: "Stobi" },
    description: {
      de: "Die bedeutendste archäologische Stätte in Nordmazedonien, eine antike Stadt an der Kreuzung wichtiger Handelswege.",
      hu: "Észak-Macedónia legjelentősebb régészeti lelőhelye, ókori város fontos kereskedelmi utak kereszteződésében.",
      ro: "Cel mai important sit arheologic din Macedonia de Nord, un oraș antic la intersecția unor rute comerciale importante.",
      en: "The most significant archaeological site in North Macedonia, an ancient city at the crossroads of important trade routes."
    },
    facts: {
      de: ["Hauptstadt der römischen Provinz Macedonia Salutaris.", "Bekannt für seine gut erhaltenen Mosaike und das Amphitheater.", "Liegt am Zusammenfluss von Erigon und Axius (Crna und Vardar)."],
      hu: ["Macedonia Salutaris római provincia fővárosa volt.", "Jól megőrzött mozaikjairól és amfiteátrumáról ismert.", "Az Erigon és Axius (Crna és Vardar) folyók találkozásánál fekszik."],
      ro: ["Capitala provinciei romane Macedonia Salutaris.", "Cunoscut pentru mozaicurile sale bine conservate și amfiteatru.", "Situat la confluența râurilor Erigon și Axius (Crna și Vardar)."],
      en: ["Capital of the Roman province Macedonia Salutaris.", "Famous for its well-preserved mosaics and amphitheater.", "Located at the confluence of the Erigon and Axius (Crna and Vardar) rivers."]
    }
  },
  {
    id: "MK-052-rosoman-orchards",
    type: "nature",
    parent: "MK-052",
    coords: [21.9000, 41.5167],
    name: { de: "Rosoman-Obstgärten", hu: "Rosomani gyümölcsösök", ro: "Livezile din Rosoman", en: "Rosoman Orchards" },
    description: {
      de: "Das Herz der Pfirsich- und Aprikosenproduktion des Landes.",
      hu: "Az ország őszibarack- és sárgabarack-termelésének szíve.",
      ro: "Inima producției de piersici și caise a țării.",
      en: "The heart of the country's peach and apricot production."
    },
    facts: {
      de: ["Bekannt für die hohe Qualität der Früchte.", "Prägt das Landschaftsbild durch weite Plantagen.", "Wichtiger Wirtschaftsfaktor für die Gemeinde."],
      hu: ["A gyümölcsök kiváló minőségéről ismert.", "A tájképet hatalmas ültetvények határozzák meg.", "A község fontos gazdasági tényezője."],
      ro: ["Cunoscute pentru calitatea ridicată a fructelor.", "Modelează peisajul prin plantații vaste.", "Factor economic important pentru municipalitate."],
      en: ["Known for the high quality of the fruit.", "Shapes the landscape with vast plantations.", "Key economic factor for the municipality."]
    }
  },
  // MK-053: Negotino
  {
    id: "MK-053-negotino-clock-tower",
    type: "landmark",
    parent: "MK-053",
    coords: [22.0917, 41.4842],
    name: { de: "Uhrturm von Negotino", hu: "Negotinói óratorony", ro: "Turnul cu ceas din Negotino", en: "Negotino Clock Tower" },
    description: {
      de: "Ein historisches Bauwerk im Zentrum von Negotino, erbaut im frühen 19. Jahrhundert.",
      hu: "Történelmi épület Negotino központjában, a 19. század elején épült.",
      ro: "O structură istorică în centrul orașului Negotino, construită la începutul secolului al XIX-lea.",
      en: "A historic structure in the center of Negotino, built in the early 19th century."
    },
    facts: {
      de: ["Das bekannteste Wahrzeichen der Stadt.", "Diente ursprünglich als Wachturm.", "Wurde nach einem Brand restauriert."],
      hu: ["A város legismertebb jelképe.", "Eredetileg őrtoronyként szolgált.", "Egy tűzvész után restaurálták."],
      ro: ["Cel mai cunoscut simbol al orașului.", "A servit inițial ca turn de pază.", "A fost restaurat după un incendiu."],
      en: ["The most famous landmark of the city.", "Originally served as a watchtower.", "Restored after a fire."]
    }
  },
  {
    id: "MK-053-antigona-archaeological-site",
    type: "historical",
    parent: "MK-053",
    coords: [22.1167, 41.4667],
    name: { de: "Antigoneia", hu: "Antigonéia", ro: "Antigoneia", en: "Antigoneia" },
    description: {
      de: "Die Ruinen einer antiken mazedonischen Stadt, gegründet von Antigonos Gonatas.",
      hu: "Egy ókori macedón város romjai, II. Antigonosz Gonatasz alapította.",
      ro: "Ruinele unui oraș antic macedonean, fondat de Antigonos Gonatas.",
      en: "The ruins of an ancient Macedonian city founded by Antigonos Gonatas."
    },
    facts: {
      de: ["War eine wichtige Festung an der Straße zum Süden.", "Archäologische Funde belegen eine reiche Geschichte.", "Liegt in der Nähe des modernen Negotino."],
      hu: ["Fontos erőd volt a délre vezető úton.", "A régészeti leletek gazdag történelmet bizonyítanak.", "A modern Negotino közelében található."],
      ro: ["A fost o fortăreață importantă pe drumul spre sud.", "Descoperirile arheologice atestă o istorie bogată.", "Situat în apropierea orașului modern Negotino."],
      en: ["Was an important fortress on the road to the south.", "Archaeological finds prove a rich history.", "Located near modern Negotino."]
    }
  },
  // MK-054: Drugovo
  {
    id: "MK-054-monastery-kicevo-annunciation",
    type: "historical",
    parent: "MK-054",
    coords: [20.9167, 41.4500],
    name: { de: "Kloster Sveti Bogorodica Prečista", hu: "Kičevói Szent Szűzanya-kolostor", ro: "Mănăstirea Sf. Maria Prečista", en: "Monastery of the Most Pure Mother of God" },
    description: {
      de: "Ein bedeutendes Kloster nahe Kičevo, bekannt für seine spirituelle Ausstrahlung.",
      hu: "Jelentős kolostor Kičevo közelében, szellemi kisugárzásáról ismert.",
      ro: "O mănăstire importantă lângă Kičevo, cunoscută pentru aura sa spirituală.",
      en: "A significant monastery near Kičevo, known for its spiritual atmosphere."
    },
    facts: {
      de: ["Wurde mehrfach zerstört und wieder aufgebaut.", "Beherbergt eine wundertätige Ikone.", "Ein Zentrum für religiöse Versammlungen."],
      hu: ["Többször elpusztult és újjáépült.", "Egy csodatevő ikont őriznek itt.", "Vallási gyülekezetek központja."],
      ro: ["A fost distrusă și reconstruită de mai multe ori.", "Adăpostește o icoană făcătoare de minuni.", "Un centru pentru adunări religioase."],
      en: ["Destroyed and rebuilt multiple times.", "Houses a miraculous icon.", "A center for religious gatherings."]
    }
  },
  {
    id: "MK-054-treska-river-canyon",
    type: "nature",
    parent: "MK-054",
    coords: [20.9500, 41.4833],
    name: { de: "Treska-Schlucht bei Drugovo", hu: "Treszka-szurdok Drugovónál", ro: "Canionul râului Treska lângă Drugovo", en: "Treska River Canyon near Drugovo" },
    description: {
      de: "Ein malerischer Abschnitt des Flusses Treska, der durch felsiges Gelände fließt.",
      hu: "A Treszka-folyó festői szakasza, amely sziklás terepen folyik keresztül.",
      ro: "O secțiune pitorească a râului Treska, care traversează un teren stâncos.",
      en: "A scenic section of the Treska river flowing through rocky terrain."
    },
    facts: {
      de: ["Beliebt für Naturfotografie.", "Bietet ruhige Plätze zum Nachdenken.", "Reich an lokaler Flora."],
      hu: ["Népszerű a természetfotósok körében.", "Csendes helyeket kínál az elmélkedéshez.", "Gazdag helyi flórában."],
      ro: ["Popular pentru fotografia de natură.", "Oferă locuri liniștite pentru reflecție.", "Bogat în floră locală."],
      en: ["Popular for nature photography.", "Offers quiet spots for reflection.", "Rich in local flora."]
    }
  },
  // MK-055: Gazi Baba
  {
    id: "MK-055-gazi-baba-park",
    type: "nature",
    parent: "MK-055",
    coords: [21.4500, 42.0083],
    name: { de: "Waldpark Gazi Baba", hu: "Gazi Baba erdőpark", ro: "Parcul forestier Gazi Baba", en: "Gazi Baba Forest Park" },
    description: {
      de: "Einer der größten Waldparks in Skopje, 'die Lunge' des östlichen Teils der Stadt.",
      hu: "Szkopje egyik legnagyobb erdőparkja, a város keleti részének 'tüdeje'.",
      ro: "Unul dintre cele mai mari parcuri forestiere din Skopje, 'plămânul' părții de est a orașului.",
      en: "One of the largest forest parks in Skopje, the 'lungs' of the city's eastern part."
    },
    facts: {
      de: ["Ein beliebtes Ziel für Jogger und Radfahrer.", "Bietet einen Rückzugsort vom städtischen Lärm.", "Wichtig für die Luftqualität in Skopje."],
      hu: ["Kocogók és kerékpárosok kedvelt célpontja.", "Menedéket nyújt a városi zaj elől.", "Fontos Szkopje levegőminősége szempontjából."],
      ro: ["O destinație populară pentru joggeri și bicicliști.", "Oferă un refugiu de zgomotul urban.", "Important pentru calitatea aerului din Skopje."],
      en: ["A popular destination for joggers and cyclists.", "Offers a retreat from urban noise.", "Crucial for the air quality in Skopje."]
    }
  },
  {
    id: "MK-055-skopje-fair",
    type: "landmark",
    parent: "MK-055",
    coords: [21.4550, 42.0028],
    name: { de: "Messe Skopje", hu: "Szkopjei Vásár", ro: "Târgul din Skopje", en: "Skopje Fair" },
    description: {
      de: "Ein bedeutendes Zentrum für Ausstellungen und Messen in der Hauptstadt.",
      hu: "Jelentős kiállítási és vásárközpont a fővárosban.",
      ro: "Un centru important pentru expoziții și târguri din capitală.",
      en: "A significant center for exhibitions and fairs in the capital."
    },
    facts: {
      de: ["Ort zahlreicher internationaler Veranstaltungen.", "Wichtiger Treffpunkt für Geschäftsleute.", "Trägt zur wirtschaftlichen Entwicklung bei."],
      hu: ["Számos nemzetközi esemény helyszíne.", "Fontos találkozóhely az üzleti élet szereplői számára.", "Hozzájárul a gazdasági fejlődéshez."],
      ro: ["Locul a numeroase evenimente internaționale.", "Un punct de întâlnire important pentru oamenii de afaceri.", "Contribuie la dezvoltarea economică."],
      en: ["Venue for numerous international events.", "Important meeting point for business people.", "Contributes to economic development."]
    }
  },
  // MK-056: Kruševo
  {
    id: "MK-056-makedonium",
    type: "historical",
    parent: "MK-056",
    coords: [21.2483, 41.3789],
    name: { de: "Makedonium", hu: "Makedónium", ro: "Makedonium", en: "Makedonium" },
    description: {
      de: "Ein monumentales Denkmal zur Erinnerung an den Ilinden-Aufstand, das Wahrzeichen von Kruševo.",
      hu: "Monumentális emlékmű az Ilinden-felkelés emlékére, Kruševo jelképe.",
      ro: "Un monument monumental care comemorează răscoala de Ilinden, simbolul orașului Kruševo.",
      en: "A monumental memorial commemorating the Ilinden Uprising, the landmark of Kruševo."
    },
    facts: {
      de: ["Seine futuristische Architektur ist weltweit bekannt.", "Dem mazedonischen Kampf für die Freiheit gewidmet.", "Bietet einen Blick auf die höchstgelegene Stadt des Balkans."],
      hu: ["Futurisztikus építészete világszerte ismert.", "A macedón szabadságharcnak szentelve.", "Kilátást nyújt a Balkán legmagasabban fekvő városára."],
      ro: ["Arhitectura sa futuristă este cunoscută în întreaga lume.", "Dedicat luptei macedonene pentru libertate.", "Oferă o vedere asupra celui mai înalt oraș din Balcani."],
      en: ["Its futuristic architecture is world-renowned.", "Dedicated to the Macedonian struggle for freedom.", "Overlooks the highest town in the Balkans."]
    }
  },
  {
    id: "MK-056-tose-proeski-memorial",
    type: "landmark",
    parent: "MK-056",
    coords: [21.2467, 41.3700],
    name: { de: "Toše-Proeski-Gedenkstätte", hu: "Toše Proeski emlékház", ro: "Casa memorială Toše Proeski", en: "Toše Proeski Memorial House" },
    description: {
      de: "Ein Museum zu Ehren des berühmtesten Sängers Mazedoniens, Toše Proeski, in seinem Geburtsort.",
      hu: "Macedónia leghíresebb énekese, Toše Proeski tiszteletére létrehozott múzeum a szülővárosában.",
      ro: "Un muzeu în onoarea celui mai faimos cântăreț macedonean, Toše Proeski, în orașul său natal.",
      en: "A museum dedicated to Macedonia's most famous singer, Toše Proeski, in his hometown."
    },
    facts: {
      de: ["Toše Proeski galt als 'Elvis des Balkans'.", "Die Gedenkstätte zieht Fans aus der ganzen Region an.", "Beherbergt persönliche Gegenstände und Auszeichnungen."],
      hu: ["Toše Proeskit a 'Balkán Elvisének' tartották.", "Az emlékhely az egész régióból vonzza a rajongókat.", "Személyes tárgyakat és kitüntetéseket őriznek itt."],
      ro: ["Toše Proeski a fost considerat 'Elvis al Balcanilor'.", "Casa memorială atrage fani din întreaga regiune.", "Adăpostește obiecte personale și premii."],
      en: ["Toše Proeski was regarded as the 'Elvis of the Balkans'.", "The memorial attracts fans from the entire region.", "Houses personal items and awards."]
    }
  },
  // MK-057: Demir Hisar
  {
    id: "MK-057-monastery-slepce",
    type: "historical",
    parent: "MK-057",
    coords: [21.1500, 41.2333],
    name: { de: "Kloster Sveti Jovan Preteča - Slepče", hu: "Szlepcséi Keresztelő Szent János-kolostor", ro: "Mănăstirea Sf. Ioan Botezătorul - Slepče", en: "Saint John the Baptist Monastery - Slepče" },
    description: {
      de: "Eines der größten und historisch bedeutendsten mittelalterlichen Klöster in der Region.",
      hu: "A régió egyik legnagyobb és történelmileg legjelentősebb középkori kolostora.",
      ro: "Una dintre cele mai mari și mai importante mănăstiri medievale din regiune.",
      en: "One of the largest and historically most significant medieval monasteries in the region."
    },
    facts: {
      de: ["Bekannt für seine literarische Schule im Mittelalter.", "Wichtiges Zentrum für die Bewahrung der mazedonischen Kultur.", "Bietet Ruhe und geistliche Erneuerung."],
      hu: ["Középkori irodalmi iskolájáról ismert.", "A macedón kultúra megőrzésének fontos központja.", "Nyugalmat és lelki felfrissülést kínál."],
      ro: ["Cunoscută pentru școala sa literară din evul mediu.", "Centru important pentru păstrarea culturii macedonene.", "Oferă liniște și reînnoire spirituală."],
      en: ["Known for its literary school in the Middle Ages.", "Significant center for the preservation of Macedonian culture.", "Offers peace and spiritual renewal."]
    }
  },
  {
    id: "MK-057-zeleznicka-monastery",
    type: "historical",
    parent: "MK-057",
    coords: [21.1167, 41.2833],
    name: { de: "Kloster Železnec", hu: "Zseleznici kolostor", ro: "Mănăstirea Železnec", en: "Železnec Monastery" },
    description: {
      de: "Ein altes Kloster in der malerischen Gegend von Železnec.",
      hu: "Régi kolostor Zseleznici festői környezetében.",
      ro: "O mănăstire veche în zona pitorească Železnec.",
      en: "An old monastery located in the scenic area of Železnec."
    },
    facts: {
      de: ["Liegt in der Nähe der Quelle des Flusses Crna.", "Umgeben von unberührter Natur.", "Ein Ort mit reicher Geschichte."],
      hu: ["A Crna-folyó forrásának közelében található.", "Érintetlen természet veszi körül.", "Gazdag történelemmel rendelkező hely."],
      ro: ["Situată în apropierea izvorului râului Crna.", "Înconjurată de natură virgină.", "Un loc cu o istorie bogată."],
      en: ["Located near the source of the Crna river.", "Surrounded by untouched nature.", "A place with a rich history."]
    }
  },
  // MK-058: Aerodrom
  {
    id: "MK-058-jane-sandanski-arena",
    type: "landmark",
    parent: "MK-058",
    coords: [21.4667, 41.9889],
    name: { de: "Jane-Sandanski-Arena", hu: "Jane Sandanski Aréna", ro: "Arena Jane Sandanski", en: "Jane Sandanski Arena" },
    description: {
      de: "Eine moderne Mehrzweck-Sporthalle, Heimstätte des Handballclubs Vardar.",
      hu: "Modern többcélú sportcsarnok, a Vardar kézilabdacsapat otthona.",
      ro: "O sală de sport polivalentă modernă, casa clubului de handbal Vardar.",
      en: "A modern multi-purpose sports hall, home to the Vardar handball club."
    },
    facts: {
      de: ["Austragungsort vieler internationaler Handballspiele.", "Zentrum des Sports in der Gemeinde Aerodrom.", "Bietet exzellente Einrichtungen für Athleten."],
      hu: ["Számos nemzetközi kézilabda-mérkőzés helyszíne.", "Aerodrom község sportéletének központja.", "Kiváló létesítményeket kínál a sportolók számára."],
      ro: ["Locul de desfășurare a multor meciuri internaționale de handbal.", "Centrul sportului în municipalitatea Aerodrom.", "Oferă facilități excelente pentru sportivi."],
      en: ["Venue for many international handball matches.", "Center of sports in the Aerodrom municipality.", "Provides excellent facilities for athletes."]
    }
  },
  {
    id: "MK-058-park-of-airplanes",
    type: "landmark",
    parent: "MK-058",
    coords: [21.4611, 41.9833],
    name: { de: "Flugzeugpark (Park na aviončeto)", hu: "Repülős park", ro: "Parcul avioanelor", en: "Airplane Park" },
    description: {
      de: "Ein markanter Park in Aerodrom mit einem ausgestellten alten Flugzeug.",
      hu: "Jellegzetes park Aerodromban, ahol egy régi repülőgép van kiállítva.",
      ro: "Un parc distinctiv în Aerodrom, cu un avion vechi expus.",
      en: "A prominent park in Aerodrom featuring an old airplane on display."
    },
    facts: {
      de: ["Ein beliebter Treffpunkt für Anwohner.", "Symbolisiert den Namen der Gemeinde (Aerodrom = Flugplatz).", "Bietet grüne Flächen zur Entspannung."],
      hu: ["A helyiek népszerű találkozóhelye.", "A község nevét szimbolizálja (Aerodrom = repülőtér).", "Zöld területeket kínál a kikapcsolódáshoz."],
      ro: ["Un loc de întâlnire popular pentru localnici.", "Simbolizează numele municipalității (Aerodrom = aeroport).", "Oferă spații verzi pentru relaxare."],
      en: ["A popular meeting spot for residents.", "Symbolizes the municipality's name (Aerodrom = airfield).", "Provides green spaces for relaxation."]
    }
  },
  // MK-059: Studeničani
  {
    id: "MK-059-marjan-mountain",
    type: "mountain",
    parent: "MK-059",
    coords: [21.4500, 41.8667],
    name: { de: "Dorfberg Studeničani", hu: "Studeničani-hegy", ro: "Muntele Studeničani", en: "Studeničani Hill" },
    description: {
      de: "Die hügelige Landschaft über dem Verwaltungszentrum der Gemeinde.",
      hu: "Dombos táj a község közigazgatási központja felett.",
      ro: "Peisajul colinar deasupra centrului administrativ al municipalității.",
      en: "The hilly landscape above the administrative center of the municipality."
    },
    facts: {
      de: ["Bietet einen Blick auf das Flusstal.", "Ideal für kurze Spaziergänge in der Natur.", "Prägt den Charakter des Ortes."],
      hu: ["Kilátást nyújt a folyóvölgyre.", "Ideális rövid természetjáró sétákhoz.", "Meghatározza a település karakterét."],
      ro: ["Oferă o vedere asupra văii râului.", "Ideal pentru scurte plimbări în natură.", "Definește caracterul localității."],
      en: ["Provides a view of the river valley.", "Ideal for short nature walks.", "Shapes the character of the settlement."]
    }
  },
  {
    id: "MK-059-kadina-river-valley",
    type: "river",
    parent: "MK-059",
    coords: [21.5000, 41.8333],
    name: { de: "Kadina-Tal", hu: "Kadina-völgy", ro: "Valea râului Kadina", en: "Kadina River Valley" },
    description: {
      de: "Ein malerisches Flusstal, bekannt für seine unberührte Natur.",
      hu: "Festői folyóvölgy, amely érintetlen természetéről ismert.",
      ro: "O vale pitorească a râului, cunoscută pentru natura sa virgină.",
      en: "A scenic river valley known for its untouched nature."
    },
    facts: {
      de: ["Beliebt bei Anglern und Campern.", "Bietet klares Wasser und frische Luft.", "Ein Ort der Ruhe abseits der Stadt."],
      hu: ["Népszerű a horgászok és a kempingezők körében.", "Tiszta vizet és friss levegőt kínál.", "Nyugodt hely távol a várostól."],
      ro: ["Populară printre pescari și excursioniști.", "Oferă apă limpede și aer curat.", "Un loc de liniște departe de oraș."],
      en: ["Popular among anglers and campers.", "Offers clear water and fresh air.", "A place of tranquility away from the city."]
    }
  },
  // MK-060: Kisela Voda
  {
    id: "MK-060-mineral-water-spring",
    type: "nature",
    parent: "MK-060",
    coords: [21.4444, 41.9806],
    name: { de: "Mineralquelle Kisela Voda", hu: "Kiszela Vodai ásványvízforrás", ro: "Izvorul de apă minerală Kisela Voda", en: "Kisela Voda Mineral Spring" },
    description: {
      de: "Die natürliche Quelle, die der Gemeinde ihren Namen gab (Kisela Voda = Saures Wasser).",
      hu: "A természetes forrás, amelyről a község a nevét kapta (Kiszela Voda = savanyú víz).",
      ro: "Izvorul natural care a dat numele municipalității (Kisela Voda = apă acidulată).",
      en: "The natural spring that gave the municipality its name (Kisela Voda = sour water)."
    },
    facts: {
      de: ["Bekannt für den hohen Mineralgehalt des Wassers.", "Wird seit langem von der lokalen Bevölkerung genutzt.", "Ein Wahrzeichen des Viertels."],
      hu: ["A víz magas ásványianyag-tartalmáról ismert.", "A helyi lakosság régóta használja.", "A negyed egyik jelképe."],
      ro: ["Cunoscut pentru conținutul ridicat de minerale al apei.", "Utilizat de mult timp de populația locală.", "Un simbol al cartierului."],
      en: ["Known for the high mineral content of the water.", "Long used by the local population.", "A landmark of the neighborhood."]
    }
  },
  {
    id: "MK-060-st-george-monastery-kisela-voda",
    type: "historical",
    parent: "MK-060",
    coords: [21.4583, 41.9667],
    name: { de: "Kloster Sveti Gjorgji", hu: "Szent György-kolostor", ro: "Mănăstirea Sf. Gheorghe", en: "Saint George Monastery" },
    description: {
      de: "Ein kleines Kloster am Rande von Kisela Voda, ein Ort des Gebets.",
      hu: "Kis kolostor Kiszela Voda szélén, az ima helye.",
      ro: "O mică mănăstire la marginea cartierului Kisela Voda, un loc de rugăciune.",
      en: "A small monastery on the outskirts of Kisela Voda, a place for prayer."
    },
    facts: {
      de: ["Bietet einen Ort der Besinnung für die Gemeinde.", "Bekannt für seine ruhige Atmosphäre.", "Ort traditioneller religiöser Feiern."],
      hu: ["Az elmélkedés helyszíne a közösség számára.", "Nyugodt légköréről ismert.", "Hagyományos vallási ünnepek helyszíne."],
      ro: ["Oferă un loc de reflecție pentru comunitate.", "Cunoscută pentru atmosfera sa liniștită.", "Locul unor sărbători religioase tradiționale."],
      en: ["Provides a place of reflection for the community.", "Known for its peaceful atmosphere.", "Venue for traditional religious celebrations."]
    }
  }
];
