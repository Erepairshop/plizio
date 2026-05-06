// @ts-nocheck
import type { POI } from "./poi";

export const mkPoisPart4: POI[] = [
  // MK-031: Staro Nagoričane
  {
    id: "MK-031-st-george-church",
    type: "historical",
    parent: "MK-031",
    coords: [21.8286, 42.1989],
    name: { de: "Kirche des hl. Georg - Staro Nagoričane", hu: "Staro Nagoričanei Szent György-templom", ro: "Biserica Sf. Gheorghe - Staro Nagoričane", en: "Church of Saint George - Staro Nagoričane" },
    description: {
      de: "Ein Meisterwerk der mittelalterlichen Architektur, erbaut von König Milutin.",
      hu: "A középkori építészet mesterműve, Milutin király építtette.",
      ro: "O capodoperă a arhitecturii medievale, construită de regele Milutin.",
      en: "A masterpiece of medieval architecture, built by King Milutin."
    },
    facts: {
      de: ["Bekannt für seine außergewöhnlichen Fresken aus dem 14. Jahrhundert.", "Eines der bedeutendsten byzantinischen Denkmäler.", "Besitzt eine einzigartige fünfkupplige Struktur."],
      hu: ["Kivételes 14. századi freskóiról ismert.", "Az egyik legjelentősebb bizánci műemlék.", "Egyedülálló ötkupolás szerkezettel rendelkezik."],
      ro: ["Cunoscută pentru frescele sale excepționale din secolul al XIV-lea.", "Unul dintre cele mai importante monumente bizantine.", "Are o structură unică cu cinci cupole."],
      en: ["Famous for its extraordinary 14th-century frescoes.", "One of the most important Byzantine monuments.", "Features a unique five-domed structure."]
    }
  },
  {
    id: "MK-031-zebrnjak-monument",
    type: "historical",
    parent: "MK-031",
    coords: [21.8167, 42.1333],
    name: { de: "Zebrnjak-Denkmal", hu: "Zebrnjak-emlékmű", ro: "Monumentul Zebrnjak", en: "Zebrnjak Monument" },
    description: {
      de: "Ein Denkmal zur Erinnerung an die Schlacht von Kumanovo im Ersten Balkankrieg.",
      hu: "Emlékmű a kumanovói csata emlékére, amely az első Balkán-háborúban zajlott.",
      ro: "Un monument comemorativ al bătăliei de la Kumanovo din Primul Război Balcanic.",
      en: "A monument commemorating the Battle of Kumanovo in the First Balkan War."
    },
    facts: {
      de: ["Ursprünglich ein Turm von fast 50 Metern Höhe.", "Teilweise im Zweiten Weltkrieg zerstört.", "Bietet einen weiten Blick über die Ebene."],
      hu: ["Eredetileg egy majdnem 50 méter magas torony volt.", "A második világháborúban részben megsemmisült.", "Széles kilátást nyújt a síkságra."],
      ro: ["Inițial a fost un turn de aproape 50 de metri înălțime.", "Distrus parțial în al Doilea Război Mondial.", "Oferă o vedere largă asupra câmpiei."],
      en: ["Originally a tower nearly 50 meters high.", "Partially destroyed during World War II.", "Provides an extensive view over the plain."]
    }
  },
  // MK-032: Kumanovo
  {
    id: "MK-032-kokino-observatory",
    type: "historical",
    parent: "MK-032",
    coords: [21.9472, 42.2611],
    name: { de: "Megalithisches Observatorium Kokino", hu: "Kokino megalitikus obszervatórium", ro: "Observatorul megalitic Kokino", en: "Kokino Megalithic Observatory" },
    description: {
      de: "Eine antike archäologische Stätte, die als eines der ältesten Observatorien der Welt gilt.",
      hu: "Ősi régészeti lelőhely, amelyet a világ egyik legrégebbi obszervatóriumaként tartanak számon.",
      ro: "Un sit arheologic antic, considerat unul dintre cele mai vechi observatoare din lume.",
      en: "An ancient archaeological site considered one of the oldest observatories in the world."
    },
    facts: {
      de: ["Von der UNESCO als viertältestes Observatorium eingestuft.", "Datiert aus der Bronzezeit (ca. 1800 v. Chr.).", "Besteht aus Steinmarkierungen zur Beobachtung von Himmelskörpern."],
      hu: ["Az UNESCO a negyedik legrégebbi obszervatóriumként sorolta be.", "A bronzkorból származik (i. e. 1800 körül).", "Kőjelzésekből áll az égitestek megfigyelésére."],
      ro: ["Clasificat de UNESCO drept al patrulea cel mai vechi observator.", "Datează din epoca bronzului (aprox. 1800 î.Hr.).", "Format din marcaje în piatră pentru observarea corpurilor cerești."],
      en: ["Ranked by UNESCO as the fourth oldest observatory.", "Dates from the Bronze Age (approx. 1800 BC).", "Consists of stone markers for observing celestial bodies."]
    }
  },
  {
    id: "MK-032-kumanovo-city-square",
    type: "landmark",
    parent: "MK-032",
    coords: [21.7167, 42.1333],
    name: { de: "Stadtplatz von Kumanovo", hu: "Kumanovói főtér", ro: "Piața orașului Kumanovo", en: "Kumanovo City Square" },
    description: {
      de: "Der zentrale Platz der Stadt Kumanovo, Herz des städtischen Lebens.",
      hu: "Kumanovo központi tere, a városi élet szíve.",
      ro: "Piața centrală a orașului Kumanovo, inima vieții urbane.",
      en: "The central square of the city of Kumanovo, the heart of urban life."
    },
    facts: {
      de: ["Umgeben von Cafés und Geschäften.", "Beherbergt Denkmäler für lokale Helden.", "Ort für viele kulturelle Veranstaltungen."],
      hu: ["Kávézók és üzletek veszik körül.", "Helyi hősök emlékműveinek ad otthont.", "Számos kulturális esemény helyszíne."],
      ro: ["Înconjurată de cafenele și magazine.", "Găzduiește monumente dedicate eroilor locali.", "Locul de desfășurare a multor evenimente culturale."],
      en: ["Surrounded by cafes and shops.", "Houses monuments to local heroes.", "Venue for many cultural events."]
    }
  },
  // MK-033: Delčevo
  {
    id: "MK-033-golak-mountain",
    type: "mountain",
    parent: "MK-033",
    coords: [22.7500, 41.9167],
    name: { de: "Berg Golak", hu: "Golak-hegy", ro: "Muntele Golak", en: "Golak Mountain" },
    description: {
      de: "Ein beliebtes Erholungsgebiet nahe Delčevo mit dichten Nadelwäldern.",
      hu: "Népszerű üdülőhely Delčevo közelében, sűrű fenyőerdőkkel.",
      ro: "O zonă de recreere populară lângă Delčevo, cu păduri dese de conifere.",
      en: "A popular recreation area near Delčevo with dense coniferous forests."
    },
    facts: {
      de: ["Höchster Gipfel ist Čavka (1.538 m).", "Bietet hervorragende Bedingungen für Bergluftkuren.", "Besitzt viele Wander- und Radwege."],
      hu: ["Legmagasabb csúcsa a Čavka (1538 m).", "Kiváló feltételeket kínál a hegyi levegős gyógykezelésekhez.", "Számos túra- és kerékpárúttal rendelkezik."],
      ro: ["Cel mai înalt vârf este Čavka (1.538 m).", "Oferă condiții excelente pentru cure de aer montan.", "Are multe trasee de drumeție și ciclism."],
      en: ["The highest peak is Čavka (1,538 m).", "Offers excellent conditions for mountain air treatments.", "Features many hiking and biking trails."]
    }
  },
  {
    id: "MK-033-delcevo-city-park",
    type: "nature",
    parent: "MK-033",
    coords: [22.7667, 41.9667],
    name: { de: "Stadtpark Delčevo", hu: "Delčevói városi park", ro: "Parcul orașului Delčevo", en: "Delčevo City Park" },
    description: {
      de: "Eine grüne Oase in der Stadt Delčevo am Ufer des Flusses Bregalnica.",
      hu: "Zöld oázis Delčevo városában, a Bregalnica folyó partján.",
      ro: "O oază de verdeață în orașul Delčevo, pe malul râului Bregalnica.",
      en: "A green oasis in the city of Delčevo on the banks of the Bregalnica river."
    },
    facts: {
      de: ["Beliebter Ort für Spaziergänge.", "Beherbergt Sportplätze und Spielplätze.", "Bietet Kühle im Sommer durch den Fluss."],
      hu: ["Népszerű hely a sétákhoz.", "Sportpályáknak és játszótereknek ad otthont.", "Nyáron hűvöset kínál a folyónak köszönhetően."],
      ro: ["Loc popular pentru plimbări.", "Găzduiește terenuri de sport și locuri de joacă.", "Oferă răcoare vara datorită râului."],
      en: ["Popular spot for walks.", "Houses sports fields and playgrounds.", "Provides coolness in summer due to the river."]
    }
  },
  // MK-034: Makedonska Kamenica
  {
    id: "MK-034-kalimanci-lake",
    type: "lake",
    parent: "MK-034",
    coords: [22.6000, 41.9333],
    name: { de: "Kalimanci-See", hu: "Kalimanci-tó", ro: "Lacul Kalimanci", en: "Kalimanci Lake" },
    description: {
      de: "Ein großer Stausee am Fluss Bregalnica, genutzt für Bewässerung und Stromerzeugung.",
      hu: "Hatalmas víztározó a Bregalnica folyón, öntözésre és áramtermelésre használják.",
      ro: "Un lac de acumulare mare pe râul Bregalnica, utilizat pentru irigații și generarea de energie.",
      en: "A large reservoir on the Bregalnica river, used for irrigation and power generation."
    },
    facts: {
      de: ["Bekannt für seinen Fischreichtum.", "Ein beliebtes Ziel für Angler.", "Umgeben von schöner Hügellandschaft."],
      hu: ["Halállományáról ismert.", "Népszerű célpont a horgászok körében.", "Szép dombos táj veszi körül."],
      ro: ["Cunoscut pentru abundența de pește.", "O destinație populară pentru pescari.", "Înconjurat de un peisaj colinar frumos."],
      en: ["Known for its abundance of fish.", "A popular destination for anglers.", "Surrounded by beautiful hilly landscape."]
    }
  },
  {
    id: "MK-034-sasa-mine",
    type: "landmark",
    parent: "MK-034",
    coords: [22.5167, 42.1000],
    name: { de: "Sasa-Mine", hu: "Szásza-bánya", ro: "Mina Sasa", en: "Sasa Mine" },
    description: {
      de: "Eine der größten Blei- und Zinkminen in Nordmazedonien.",
      hu: "Észak-Macedónia egyik legnagyobb ólom- és cinkbányája.",
      ro: "Una dintre cele mai mari mine de plumb și zinc din Macedonia de Nord.",
      en: "One of the largest lead and zinc mines in North Macedonia."
    },
    facts: {
      de: ["Wichtigster Wirtschaftsfaktor der Region.", "Besteht seit den 1960er Jahren.", "Trägt signifikant zum Export des Landes bei."],
      hu: ["A régió legfontosabb gazdasági tényezője.", "Az 1960-as évek óta működik.", "Jelentősen hozzájárul az ország exportjához."],
      ro: ["Cel mai important factor economic din regiune.", "Există din anii 1960.", "Contribuie semnificativ la exportul țării."],
      en: ["The region's most important economic factor.", "In operation since the 1960s.", "Contributes significantly to the country's exports."]
    }
  },
  // MK-035: Berovo
  {
    id: "MK-035-berovo-lake",
    type: "lake",
    parent: "MK-035",
    coords: [22.8833, 41.7000],
    name: { de: "Berovo-See", hu: "Berovói-tó", ro: "Lacul Berovo", en: "Berovo Lake" },
    description: {
      de: "Ein Bergsee umgeben von dichten Kiefern- und Eichenwäldern, bekannt für seine saubere Luft.",
      hu: "Sűrű fenyő- és tölgyerdőkkel körülvett hegyi tó, tiszta levegőjéről ismert.",
      ro: "Un lac montan înconjurat de păduri dese de pini și stejar, cunoscut pentru aerul curat.",
      en: "A mountain lake surrounded by dense pine and oak forests, known for its clean air."
    },
    facts: {
      de: ["Wird oft als 'Klein-Schweiz' Mazedoniens bezeichnet.", "Ein Zentrum für den Gesundheitstourismus.", "Bietet zahlreiche Rad- und Wanderwege."],
      hu: ["Gyakran Macedónia 'kis Svájcaként' emlegetik.", "Az egészségturizmus központja.", "Számos kerékpár- és túraúttal rendelkezik."],
      ro: ["Este adesea numit 'Mica Elveție' a Macedoniei.", "Un centru pentru turismul de sănătate.", "Oferă numeroase trasee de ciclism și drumeție."],
      en: ["Often referred to as the 'Little Switzerland' of Macedonia.", "A center for health tourism.", "Offers numerous biking and hiking trails."]
    }
  },
  {
    id: "MK-035-st-archangel-michael-monastery",
    type: "historical",
    parent: "MK-035",
    coords: [22.8550, 41.7033],
    name: { de: "Kloster des hl. Erzengels Michael", hu: "Szent Mihály arkangyal-kolostor", ro: "Mănăstirea Sf. Arhanghel Mihail", en: "Monastery of Saint Archangel Michael" },
    description: {
      de: "Ein Frauenkloster in Berovo, bekannt für seine Geschichte und Ikonen.",
      hu: "Női kolostor Berovóban, történetéről és ikonjairól ismert.",
      ro: "O mănăstire de maici în Berovo, cunoscută pentru istoria și icoanele sale.",
      en: "A nunnery in Berovo, known for its history and icons."
    },
    facts: {
      de: ["Gegründet im 19. Jahrhundert unter schwierigen Bedingungen.", "Bekannt für die Herstellung von Teppichen.", "Beherbergt wertvolle religiöse Artefakte."],
      hu: ["A 19. században alapították nehéz körülmények között.", "Szőnyegkészítéséről ismert.", "Értékes vallási műtárgyakat őriz."],
      ro: ["Fondată în secolul al XIX-lea în condiții dificile.", "Cunoscută pentru fabricarea covoarelor.", "Adăpostește artefacte religioase valoroase."],
      en: ["Founded in the 19th century under difficult conditions.", "Known for the production of carpets.", "Houses valuable religious artifacts."]
    }
  },
  // MK-036: Pehčevo
  {
    id: "MK-036-pehcevo-waterfalls",
    type: "nature",
    parent: "MK-036",
    coords: [22.9333, 41.7500],
    name: { de: "Pehčevo-Wasserfälle", hu: "Pehčevói-vízesések", ro: "Cascadele din Pehčevo", en: "Pehčevo Waterfalls" },
    description: {
      de: "Eine Reihe kleiner, aber wunderschöner Wasserfälle am Fluss Bregalnica.",
      hu: "Kisebb, de gyönyörű vízesések sorozata a Bregalnica folyón.",
      ro: "O serie de cascade mici, dar frumoase, pe râul Bregalnica.",
      en: "A series of small but beautiful waterfalls on the Bregalnica river."
    },
    facts: {
      de: ["Liegt in einer Gegend mit extrem sauerstoffreicher Luft.", "Erreichbar über Wanderwege durch den Wald.", "Ein verstecktes Naturjuwel im Osten."],
      hu: ["Rendkívül oxigéndús levegőjű területen található.", "Az erdőn átvezető túraösvényeken közelíthető meg.", "Rejtett természeti kincs keleten."],
      ro: ["Situat într-o zonă cu aer extrem de bogat în oxigen.", "Accesibil prin poteci de drumeție prin pădure.", "O bijuterie naturală ascunsă în est."],
      en: ["Located in an area with extremely oxygen-rich air.", "Accessible via hiking trails through the forest.", "A hidden natural gem in the east."]
    }
  },
  {
    id: "MK-036-ravna-reka",
    type: "nature",
    parent: "MK-036",
    coords: [22.9167, 41.7667],
    name: { de: "Ravna Reka", hu: "Ravna Reka", ro: "Ravna Reka", en: "Ravna Reka" },
    description: {
      de: "Ein beliebtes Picknick- und Erholungsgebiet oberhalb von Pehčevo.",
      hu: "Népszerű piknikező- és üdülőhely Pehčevo felett.",
      ro: "O zonă populară de picnic și recreere deasupra orașului Pehčevo.",
      en: "A popular picnic and recreation area above the town of Pehčevo."
    },
    facts: {
      de: ["Bekannt für seine kalten Quellen und Bergbäche.", "Bietet kühle Temperaturen im Sommer.", "Ideal für Familienausflüge."],
      hu: ["Hideg forrásairól és hegyi patakjairól ismert.", "Nyáron hűvös hőmérsékletet biztosít.", "Ideális családi kirándulásokhoz."],
      ro: ["Cunoscută pentru izvoarele sale reci și pârâurile de munte.", "Oferă temperaturi răcoroase vara.", "Ideală pentru excursii în familie."],
      en: ["Known for its cold springs and mountain streams.", "Offers cool temperatures in summer.", "Ideal for family outings."]
    }
  },
  // MK-037: Želino
  {
    id: "MK-037-zelino-bridge",
    type: "landmark",
    parent: "MK-037",
    coords: [21.0667, 41.9833],
    name: { de: "Želino-Brücke", hu: "Zselinói híd", ro: "Podul Želino", en: "Želino Bridge" },
    description: {
      de: "Eine historische Brücke über den Fluss Vardar, die für die Region von großer Bedeutung ist.",
      hu: "Történelmi híd a Vardar folyón, amely nagy jelentőséggel bír a régió számára.",
      ro: "Un pod istoric peste râul Vardar, de mare importanță pentru regiune.",
      en: "A historic bridge over the Vardar river, of great significance to the region."
    },
    facts: {
      de: ["Verbindet wichtige Verkehrswege im Polog-Tal.", "Ein Symbol für die Gemeinde Želino.", "Bietet einen Blick auf den breiten Flussverlauf."],
      hu: ["Fontos közlekedési útvonalakat köt össze a Polog-völgyben.", "Zselinó község jelképe.", "Kilátást nyújt a folyó széles medrére."],
      ro: ["Conectează rute de transport importante din valea Polog.", "Un simbol al municipalității Želino.", "Oferă o vedere asupra cursului larg al râului."],
      en: ["Connects important transport routes in the Polog valley.", "A symbol of the Želino municipality.", "Offers a view of the river's wide course."]
    }
  },
  {
    id: "MK-037-suva-gora",
    type: "mountain",
    parent: "MK-037",
    coords: [21.1333, 41.9167],
    name: { de: "Suva Gora", hu: "Szuva Gora", ro: "Suva Gora", en: "Suva Gora" },
    description: {
      de: "Ein Bergmassiv zwischen dem Polog-Tal und der Matka-Schlucht.",
      hu: "Hegytömb a Polog-völgy és a Matka-kanyon között.",
      ro: "Un masiv muntos situat între valea Polog și canionul Matka.",
      en: "A mountain massif located between the Polog valley and Matka canyon."
    },
    facts: {
      de: ["Der Name bedeutet 'trockener Berg' wegen des Mangels an Wasserquellen.", "Bietet anspruchsvolle Wanderrouten.", "Reich an Kalksteinformationen."],
      hu: ["A név 'száraz hegyet' jelent a vízforrások hiánya miatt.", "Kihívást jelentő túraútvonalakat kínál.", "Gazdag mészkőképződményekben."],
      ro: ["Numele înseamnă 'munte uscat' din cauza lipsei izvoarerelor de apă.", "Oferă rute de drumeție provocatoare.", "Bogat în formațiuni calcaroase."],
      en: ["The name means 'dry mountain' due to the lack of water springs.", "Offers challenging hiking routes.", "Rich in limestone formations."]
    }
  },
  // MK-038: Brvenica
  {
    id: "MK-038-st-athanasius-radioovce",
    type: "historical",
    parent: "MK-038",
    coords: [20.9500, 41.9167],
    name: { de: "Kirche des hl. Athanasius - Radiovce", hu: "Radiovcei Szent Atanáz-templom", ro: "Biserica Sf. Atanasie - Radiovce", en: "Church of Saint Athanasius - Radiovce" },
    description: {
      de: "Eine kleine orthodoxe Kirche im Dorf Radiovce mit lokaler Bedeutung.",
      hu: "Kis ortodox templom Radiovce faluban, helyi jelentőséggel.",
      ro: "O mică biserică ortodoxă în satul Radiovce, cu importanță locală.",
      en: "A small Orthodox church in the village of Radiovce with local significance."
    },
    facts: {
      de: ["Zentrum der Dorfgemeinschaft.", "Befindet sich in der Nähe des Vardar.", "Wird für kirchliche Feiertage genutzt."],
      hu: ["A faluközösség központja.", "A Vardar közelében található.", "Egyházi ünnepek alkalmával használják."],
      ro: ["Centrul comunității sătești.", "Situată în apropierea râului Vardar.", "Utilizată pentru sărbători religioase."],
      en: ["Center of the village community.", "Located near the Vardar river.", "Used for religious holidays."]
    }
  },
  {
    id: "MK-038-vardar-river-brvenica",
    type: "river",
    parent: "MK-038",
    coords: [21.0000, 41.9667],
    name: { de: "Vardar bei Brvenica", hu: "Vardar Brvenicánál", ro: "Vardar lângă Brvenica", en: "Vardar near Brvenica" },
    description: {
      de: "Der Fluss Vardar fließt durch die fruchtbare Ebene der Gemeinde Brvenica.",
      hu: "A Vardar folyó keresztülfolyik Brvenica község termékeny síkságán.",
      ro: "Râul Vardar traversează câmpia fertilă a municipalității Brvenica.",
      en: "The Vardar river flows through the fertile plain of the Brvenica municipality."
    },
    facts: {
      de: ["Wichtig für die Bewässerung der Felder.", "Bietet Plätze für die Freizeitgestaltung am Wasser.", "Prägt die Geografie der Gemeinde."],
      hu: ["Fontos a földek öntözéséhez.", "Helyszíneket kínál a vízparti kikapcsolódáshoz.", "Meghatározza a község földrajzát."],
      ro: ["Important pentru irigarea câmpurilor.", "Oferă locuri pentru recreere pe malul apei.", "Modelează geografia municipalității."],
      en: ["Important for irrigation of the fields.", "Offers spots for leisure activities by the water.", "Shapes the geography of the municipality."]
    }
  },
  // MK-039: Brod (Makedonski Brod)
  {
    id: "MK-039-pesna-cave",
    type: "nature",
    parent: "MK-039",
    coords: [21.2500, 41.5500],
    name: { de: "Pesna-Höhle", hu: "Peszna-barlang", ro: "Peștera Pesna", en: "Pesna Cave" },
    description: {
      de: "Eine Höhle mit einem der größten Höhleneingänge auf dem Balkan.",
      hu: "Barlang, amely a Balkán egyik legnagyobb barlangbejáratával rendelkezik.",
      ro: "O peșteră cu una dintre cele mai mari intrări din Balcani.",
      en: "A cave featuring one of the largest cave entrances in the Balkans."
    },
    facts: {
      de: ["Beherbergt Ruinen einer mittelalterlichen Festung.", "Wird mit der Legende von König Marko in Verbindung gebracht.", "Ein Naturdenkmal von großer Schönheit."],
      hu: ["Középkori erődromokat őriz.", "Marko király legendájával hozzák összefüggésbe.", "Nagy szépségű természeti emlék."],
      ro: ["Adăpostește ruinele unei cetăți medievale.", "Asociată cu legenda regelui Marko.", "Un monument al naturii de o mare frumusețe."],
      en: ["Houses ruins of a medieval fortress.", "Associated with the legend of King Marko.", "A natural monument of great beauty."]
    }
  },
  {
    id: "MK-039-st-mother-of-god-brod",
    type: "historical",
    parent: "MK-039",
    coords: [21.2167, 41.5167],
    name: { de: "Kirche der hl. Gottesmutter - Makedonski Brod", hu: "Makedonski Brodi Szent Szűzanya-templom", ro: "Biserica Sf. Născătoare de Dumnezeu - Makedonski Brod", en: "Church of the Holy Mother of God - Makedonski Brod" },
    description: {
      de: "Die Hauptkirche von Makedonski Brod, ein geistliches Zentrum der Region.",
      hu: "Makedonski Brod főtemploma, a régió szellemi központja.",
      ro: "Biserica principală din Makedonski Brod, un centru spiritual al regiunii.",
      en: "The main church of Makedonski Brod, a spiritual center of the region."
    },
    facts: {
      de: ["Bekannt für ihre schöne Ikonostase.", "Ein Ort für kulturelle und religiöse Feste.", "Besitzt eine markante Architektur."],
      hu: ["Szép ikonosztázáról ismert.", "Kulturális és vallási ünnepek helyszíne.", "Jellegzetes építészettel rendelkezik."],
      ro: ["Cunoscută pentru iconostasul său frumos.", "Un loc pentru sărbători culturale și religioase.", "Are o arhitectură distinctivă."],
      en: ["Known for its beautiful iconostasis.", "A venue for cultural and religious festivals.", "Features distinctive architecture."]
    }
  },
  // MK-040: Oslomej
  {
    id: "MK-040-oslomej-lake",
    type: "lake",
    parent: "MK-040",
    coords: [21.0000, 41.5833],
    name: { de: "Oslomej-See", hu: "Oszlomeji-tó", ro: "Lacul Oslomej", en: "Oslomej Lake" },
    description: {
      de: "Ein kleinerer künstlicher See in der Nähe des Kraftwerks Oslomej.",
      hu: "Kisebb mesterséges tó az Oszlomej erőmű közelében.",
      ro: "Un lac artificial mai mic lângă centrala electrică Oslomej.",
      en: "A smaller artificial lake near the Oslomej power plant."
    },
    facts: {
      de: ["Dient industriellen Zwecken.", "Ein Ort für lokales Angeln.", "Umgeben von hügeliger Landschaft."],
      hu: ["Ipari célokat szolgál.", "Helyi horgászhely.", "Dombos táj veszi körül."],
      ro: ["Servește în scopuri industriale.", "Un loc pentru pescuitul local.", "Înconjurat de un peisaj colinar."],
      en: ["Serves industrial purposes.", "A spot for local fishing.", "Surrounded by hilly landscape."]
    }
  },
  {
    id: "MK-040-st-george-popovjane",
    type: "historical",
    parent: "MK-040",
    coords: [21.0167, 41.6000],
    name: { de: "Kirche des hl. Georg - Popovjane", hu: "Popovjanei Szent György-templom", ro: "Biserica Sf. Gheorghe - Popovjane", en: "Church of Saint George - Popovjane" },
    description: {
      de: "Eine alte Dorfkirche im Dorf Popovjane mit historischem Wert.",
      hu: "Régi falusi templom Popovjane faluban, történelmi értékkel.",
      ro: "O veche biserică sătească în satul Popovjane, cu valoare istorică.",
      en: "An old village church in the village of Popovjane with historical value."
    },
    facts: {
      de: ["Bewahrt traditionelle religiöse Bräuche.", "Befindet sich in einer ruhigen ländlichen Umgebung.", "Besitzt lokale kunsthistorische Bedeutung."],
      hu: ["Hagyományos vallási szokásokat őriz.", "Csendes vidéki környezetben található.", "Helyi művészettörténeti jelentőséggel bír."],
      ro: ["Păstrează obiceiuri religioase tradiționale.", "Situată într-un cadru rural liniștit.", "Are o importanță istorică și artistică locală."],
      en: ["Preserves traditional religious customs.", "Located in a quiet rural setting.", "Has local art-historical significance."]
    }
  }
];

