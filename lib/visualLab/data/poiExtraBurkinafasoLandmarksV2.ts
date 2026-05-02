import type { POI } from "./poi";

export const poiExtraBurkinafasoLandmarksV2: POI[] = [
  {
    id: "bf-monument-heros-nationaux",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.4988, 12.3168],
    name: {
      de: "Monument der Nationalhelden",
      hu: "Nemzeti Hősök Emlékműve",
      ro: "Monumentul Eroilor Naționali",
      en: "Monument of National Heroes"
    },
    description: {
      de: "Dieses imposante Denkmal im Stadtteil Ouaga 2000 ehrt die Helden Burkina Fasos. Es ist ein markantes Bauwerk mit moderner Architektur.",
      hu: "Ez a lenyűgöző emlékmű Ouaga 2000 negyedében tiszteleg Burkina Faso hősei előtt. Feltűnő építmény modern építészettel.",
      ro: "Acest monument impresionant din cartierul Ouaga 2000 onorează eroii Burkinei Faso. Este o structură proeminentă cu arhitectură modernă.",
      en: "This imposing monument in the Ouaga 2000 district honors the heroes of Burkina Faso. It is a striking structure with modern architecture."
    },
    facts: {
      de: ["Erbaut im Stadtteil Ouaga 2000.", "Ehrt die Unabhängigkeitskämpfer.", "Höhe von mehreren Dutzend Metern.", "Wichtiges nationales Symbol."],
      hu: ["Az Ouaga 2000 negyedben épült.", "A függetlenségi harcosokat tiszteli.", "Több tucat méter magas.", "Fontos nemzeti szimbólum."],
      ro: ["Construit în cartierul Ouaga 2000.", "Onorează luptătorii pentru independență.", "Are o înălțime de zeci de metri.", "Simbol național important."],
      en: ["Built in the Ouaga 2000 district.", "Honors independence fighters.", "Dozens of meters in height.", "Important national symbol."]
    }
  },
  {
    id: "bf-stade-4-aout",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.554, 12.3686],
    name: {
      de: "Stadion des 4. August",
      hu: "Augusztus 4. Stadion",
      ro: "Stadionul 4 August",
      en: "August 4 Stadium"
    },
    description: {
      de: "Das größte Sportstadion in Ouagadougou. Es wurde 1984 eröffnet und ist der Hauptaustragungsort für die Spiele der Nationalmannschaft.",
      hu: "A legnagyobb sportstadion Ouagadougou-ban. 1984-ben nyitották meg, és a nemzeti válogatott mérkőzéseinek fő helyszíne.",
      ro: "Cel mai mare stadion sportiv din Ouagadougou. A fost deschis în 1984 și este locația principală pentru meciurile echipei naționale.",
      en: "The largest sports stadium in Ouagadougou. Opened in 1984, it is the main venue for the national team's matches."
    },
    facts: {
      de: ["Fasst über 35.000 Zuschauer.", "Eröffnet im Jahr 1984.", "Austragungsort der Fußball-Afrikameisterschaft 1998.", "Heimstadion von Etoile Filante."],
      hu: ["Több mint 35 000 néző befogadására alkalmas.", "1984-ben nyitották meg.", "Az 1998-as Afrikai Nemzetek Kupája helyszíne.", "Az Etoile Filante hazai pályája."],
      ro: ["Capacitate de peste 35.000 de spectatori.", "Deschis în anul 1984.", "Locație pentru Cupa Africii pe Națiuni 1998.", "Stadionul de acasă al Etoile Filante."],
      en: ["Holds over 35,000 spectators.", "Opened in the year 1984.", "Host of the 1998 African Cup of Nations.", "Home stadium of Etoile Filante."]
    }
  },
  {
    id: "bf-memorial-sankara",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5173, 12.3789],
    name: {
      de: "Thomas-Sankara-Gedenkstätte",
      hu: "Thomas Sankara Emlékhely",
      ro: "Memorialul Thomas Sankara",
      en: "Thomas Sankara Memorial"
    },
    description: {
      de: "Ein Komplex in Ouagadougou, der dem ehemaligen Präsidenten Thomas Sankara gewidmet ist. Er umfasst eine große Bronzestatue des Anführers.",
      hu: "Egy komplexum Ouagadougou-ban, amelyet Thomas Sankara egykori elnöknek szenteltek. Magában foglalja a vezető nagy bronzszobrát.",
      ro: "Un complex în Ouagadougou dedicat fostului președinte Thomas Sankara. Include o mare statuie din bronz a liderului.",
      en: "A complex in Ouagadougou dedicated to former President Thomas Sankara. It includes a large bronze statue of the leader."
    },
    facts: {
      de: ["Eingeweiht im Jahr 2019.", "Beinhaltet eine riesige Bronzestatue.", "Erinnert an den Revolutionsführer.", "Wichtiger politischer Pilgerort."],
      hu: ["2019-ben avatták fel.", "Egy hatalmas bronzszobrot tartalmaz.", "A forradalmi vezetőre emlékezik.", "Fontos politikai zarándokhely."],
      ro: ["Inaugurat în anul 2019.", "Include o statuie uriașă de bronz.", "Comemorează liderul revoluționar.", "Loc de pelerinaj politic important."],
      en: ["Inaugurated in 2019.", "Includes a giant bronze statue.", "Commemorates the revolutionary leader.", "Important political pilgrimage site."]
    }
  },
  {
    id: "bf-grande-mosquee-ouaga",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5303, 12.3713],
    name: {
      de: "Große Moschee von Ouagadougou",
      hu: "Ouagadougoui Nagymecset",
      ro: "Marea Moschee din Ouagadougou",
      en: "Grand Mosque of Ouagadougou"
    },
    description: {
      de: "Die zentrale Moschee der Hauptstadt mit ihrer beeindruckenden modernen islamischen Architektur. Sie ist ein spirituelles Zentrum der Stadt.",
      hu: "A főváros központi mecsete lenyűgöző modern iszlám építészetével. A város szellemi központja.",
      ro: "Moscheea centrală a capitalei, cu arhitectura sa islamică modernă impresionantă. Este un centru spiritual al orașului.",
      en: "The central mosque of the capital with its impressive modern Islamic architecture. It is a spiritual center of the city."
    },
    facts: {
      de: ["Größte Moschee der Hauptstadt.", "Befindet sich im Stadtzentrum.", "Ort für große Freitagsgebete.", "Auffällige Minarette."],
      hu: ["A főváros legnagyobb mecsete.", "A városközpontban található.", "A nagy pénteki imák helyszíne.", "Feltűnő minaretekkel rendelkezik."],
      ro: ["Cea mai mare moschee din capitală.", "Situată în centrul orașului.", "Loc pentru marile rugăciuni de vineri.", "Minarete atrăgătoare."],
      en: ["Largest mosque in the capital.", "Located in the city center.", "Site for large Friday prayers.", "Striking minarets."]
    }
  },
  {
    id: "bf-place-cineastes",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5283, 12.3739],
    name: {
      de: "Platz der Filmemacher",
      hu: "A Filmkészítők Tere",
      ro: "Piața Cineaștilor",
      en: "Filmmakers' Square"
    },
    description: {
      de: "Ein bekannter Platz in Ouagadougou mit einem Denkmal, das an das FESPACO-Filmfestival erinnert. Das Monument zeigt Filmrollen und Kameras.",
      hu: "Egy híres tér Ouagadougou-ban, amelynek emlékműve a FESPACO filmfesztiválra emlékeztet. Az emlékmű filmtekercseket és kamerákat ábrázol.",
      ro: "O piață faimoasă din Ouagadougou cu un monument care amintește de festivalul de film FESPACO. Monumentul prezintă role de film și camere.",
      en: "A famous square in Ouagadougou with a monument commemorating the FESPACO film festival. The monument features film reels and cameras."
    },
    facts: {
      de: ["Zentrum des afrikanischen Kinos.", "Austragungsort des FESPACO.", "Denkmal in Form von Filmrollen.", "Wichtiger Treffpunkt."],
      hu: ["Az afrikai mozi központja.", "A FESPACO helyszíne.", "Filmtekercsek formájú emlékmű.", "Fontos találkozóhely."],
      ro: ["Centrul cinematografiei africane.", "Locația FESPACO.", "Monument sub formă de role de film.", "Punct de întâlnire important."],
      en: ["Center of African cinema.", "Host site of FESPACO.", "Monument in the shape of film reels.", "Important meeting point."]
    }
  },
  {
    id: "bf-monument-martyrs",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.492, 12.311],
    name: {
      de: "Denkmal der Märtyrer",
      hu: "Mártírok Emlékműve",
      ro: "Monumentul Martirilor",
      en: "Monument of the Martyrs"
    },
    description: {
      de: "Dieses Denkmal im Viertel Ouaga 2000 ist den Helden gewidmet, die für Demokratie und Freiheit in Burkina Faso gekämpft haben.",
      hu: "Ez az emlékmű az Ouaga 2000 negyedben azoknak a hősöknek állít emléket, akik Burkina Faso demokráciájáért és szabadságáért harcoltak.",
      ro: "Acest monument din cartierul Ouaga 2000 este dedicat eroilor care au luptat pentru democrație și libertate în Burkina Faso.",
      en: "This monument in the Ouaga 2000 district is dedicated to the heroes who fought for democracy and freedom in Burkina Faso."
    },
    facts: {
      de: ["Erinnert an die Opfer des Aufstands.", "Architektonisch modernes Design.", "Teil des Regierungsviertels.", "Symbol des Widerstands."],
      hu: ["A felkelés áldozataira emlékezik.", "Építészetileg modern dizájn.", "A kormányzati negyed része.", "Az ellenállás szimbóluma."],
      ro: ["Amintește de victimele revoltei.", "Design arhitectural modern.", "Parte a cartierului guvernamental.", "Simbol al rezistenței."],
      en: ["Commemorates the uprising's victims.", "Architecturally modern design.", "Part of the government district.", "Symbol of resistance."]
    }
  },
  {
    id: "bf-tour-bceao",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5305, 12.3688],
    name: {
      de: "BCEAO-Turm",
      hu: "BCEAO Torony",
      ro: "Turnul BCEAO",
      en: "BCEAO Tower"
    },
    description: {
      de: "Das höchste Gebäude in Ouagadougou und Sitz der Zentralbank der westafrikanischen Staaten. Es prägt die Skyline der Hauptstadt.",
      hu: "Ouagadougou legmagasabb épülete és a Nyugat-afrikai Államok Központi Bankjának székhelye. Meghatározza a főváros látképét.",
      ro: "Cea mai înaltă clădire din Ouagadougou și sediul Băncii Centrale a Statelor din Africa de Vest. Domină orizontul capitalei.",
      en: "The tallest building in Ouagadougou and the headquarters of the Central Bank of West African States. It dominates the capital's skyline."
    },
    facts: {
      de: ["Zentralbank der Region.", "Eines der höchsten Gebäude des Landes.", "Markante Architektur.", "Wichtiges Finanzzentrum."],
      hu: ["A régió központi bankja.", "Az ország egyik legmagasabb épülete.", "Különleges építészet.", "Fontos pénzügyi központ."],
      ro: ["Banca centrală a regiunii.", "Una dintre cele mai înalte clădiri din țară.", "Arhitectură distinctivă.", "Centru financiar important."],
      en: ["Central bank of the region.", "One of the tallest buildings in the country.", "Distinctive architecture.", "Important financial center."]
    }
  },
  {
    id: "bf-palais-kosyam",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.4936, 12.3025],
    name: {
      de: "Kosyam-Palast",
      hu: "Kosyam Palota",
      ro: "Palatul Kosyam",
      en: "Kosyam Palace"
    },
    description: {
      de: "Der offizielle Sitz des Präsidenten von Burkina Faso in Ouaga 2000. Der prächtige Palast spiegelt die moderne Macht des Staates wider.",
      hu: "Burkina Faso elnökének hivatalos székhelye az Ouaga 2000 negyedben. A pompás palota az állam modern hatalmát tükrözi.",
      ro: "Sediul oficial al președintelui Burkinei Faso din Ouaga 2000. Palatul magnific reflectă puterea modernă a statului.",
      en: "The official residence of the President of Burkina Faso in Ouaga 2000. The magnificent palace reflects the modern power of the state."
    },
    facts: {
      de: ["Sitz des Präsidenten.", "Erbaut Anfang der 2000er Jahre.", "Streng gesicherter Bereich.", "Zentrum der politischen Macht."],
      hu: ["Az elnök székhelye.", "A 2000-es évek elején épült.", "Szigorúan őrzött terület.", "A politikai hatalom központja."],
      ro: ["Sediul președintelui.", "Construit la începutul anilor 2000.", "Zonă strict securizată.", "Centrul puterii politice."],
      en: ["Seat of the President.", "Built in the early 2000s.", "Strictly secured area.", "Center of political power."]
    }
  },
  {
    id: "bf-siao-pavilions",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.4886, 12.3551],
    name: {
      de: "SIAO-Pavillons",
      hu: "SIAO Pavilonok",
      ro: "Pavilioanele SIAO",
      en: "SIAO Pavilions"
    },
    description: {
      de: "Das Messegelände für die internationale Kunsthandwerksmesse (SIAO). Es ist der größte Markt für afrikanische Handwerkskunst auf dem Kontinent.",
      hu: "A Nemzetközi Kézműves Vásár (SIAO) kiállítási központja. Ez a legnagyobb afrikai kézműves piac a kontinensen.",
      ro: "Centrul de expoziții pentru Târgul Internațional de Artizanat (SIAO). Este cea mai mare piață de artizanat african de pe continent.",
      en: "The exhibition center for the International Arts and Crafts Fair (SIAO). It is the largest market for African crafts on the continent."
    },
    facts: {
      de: ["Findet alle zwei Jahre statt.", "Tausende Aussteller aus ganz Afrika.", "Riesige Messehallen.", "Wirtschaftlicher Motor."],
      hu: ["Kétévente rendezik meg.", "Több ezer kiállító egész Afrikából.", "Hatalmas kiállítási csarnokok.", "Gazdasági motor."],
      ro: ["Are loc o dată la doi ani.", "Mii de expozanți din întreaga Africă.", "Săli de expoziție uriașe.", "Motor economic."],
      en: ["Takes place every two years.", "Thousands of exhibitors from across Africa.", "Huge exhibition halls.", "Economic engine."]
    }
  },
  {
    id: "bf-maison-du-peuple",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5247, 12.3683],
    name: {
      de: "Haus des Volkes",
      hu: "A Nép Háza",
      ro: "Casa Poporului",
      en: "House of the People"
    },
    description: {
      de: "Ein wichtiges kulturelles und politisches Versammlungszentrum in Ouagadougou. Es zeichnet sich durch seine außergewöhnliche Dachkonstruktion aus.",
      hu: "Fontos kulturális és politikai gyülekezési központ Ouagadougou-ban. Különleges tetőszerkezete teszi egyedivé.",
      ro: "Un important centru de adunare culturală și politică din Ouagadougou. Se distinge prin structura sa excepțională a acoperișului.",
      en: "An important cultural and political gathering center in Ouagadougou. It is distinguished by its exceptional roof structure."
    },
    facts: {
      de: ["Einzigartige Architektur.", "Veranstaltungsort für Konzerte.", "Historischer Versammlungsort.", "Zentral gelegen."],
      hu: ["Egyedi építészet.", "Koncertek helyszíne.", "Történelmi gyülekezőhely.", "Központi elhelyezkedésű."],
      ro: ["Arhitectură unică.", "Locație pentru concerte.", "Loc istoric de adunare.", "Situată central."],
      en: ["Unique architecture.", "Venue for concerts.", "Historical gathering place.", "Centrally located."]
    }
  },
  {
    id: "bf-cathedrale-lourdes-bobo",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.2965, 11.1818],
    name: {
      de: "Kathedrale Unserer Lieben Frau von Lourdes",
      hu: "Lourdes-i Miasszonyunk Katedrális",
      ro: "Catedrala Maicii Domnului din Lourdes",
      en: "Cathedral of Our Lady of Lourdes"
    },
    description: {
      de: "Diese katholische Hauptkirche in Bobo-Dioulasso ist ein markantes Bauwerk aus der Kolonialzeit. Sie vereint europäische und lokale Baustile.",
      hu: "Ez a katolikus főtemplom Bobo-Dioulassóban egy feltűnő gyarmati korszakbeli épület. Az európai és a helyi építészeti stílusokat ötvözi.",
      ro: "Această biserică catolică principală din Bobo-Dioulasso este o clădire impresionantă din epoca colonială. Combină stilurile arhitecturale europene și locale.",
      en: "This main Catholic church in Bobo-Dioulasso is a striking colonial-era building. It combines European and local architectural styles."
    },
    facts: {
      de: ["Wichtige katholische Kirche in Bobo.", "Erbaut in den 1960er Jahren.", "Zentrale Lage in der Stadt.", "Auffälliger Kirchturm."],
      hu: ["Fontos katolikus templom Bobóban.", "A 60-as években épült.", "Központi elhelyezkedés a városban.", "Feltűnő templomtorony."],
      ro: ["Biserică catolică importantă din Bobo.", "Construită în anii 1960.", "Locație centrală în oraș.", "Turn de biserică impresionant."],
      en: ["Important Catholic church in Bobo.", "Built in the 1960s.", "Central location in the city.", "Striking church tower."]
    }
  },
  {
    id: "bf-monument-bataille-rail",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.3013, 11.1785],
    name: {
      de: "Denkmal der Eisenschlacht",
      hu: "A Vasút Csata Emlékműve",
      ro: "Monumentul Bătăliei Căilor Ferate",
      en: "Monument of the Battle of the Rail"
    },
    description: {
      de: "Ein bedeutendes Denkmal in Bobo-Dioulasso, das an den Bau der Eisenbahn und die damit verbundenen Opfer erinnert. Es ist ein Symbol der Industrialisierung.",
      hu: "Jelentős emlékmű Bobo-Dioulassóban, amely a vasútépítésre és az azzal járó áldozatokra emlékeztet. Az iparosodás szimbóluma.",
      ro: "Un monument semnificativ în Bobo-Dioulasso care comemorează construcția căii ferate și sacrificiile asociate. Este un simbol al industrializării.",
      en: "A significant monument in Bobo-Dioulasso commemorating the construction of the railway and the associated sacrifices. It is a symbol of industrialization."
    },
    facts: {
      de: ["Erinnert an die Eisenbahnarbeiter.", "Wichtiges historisches Monument.", "Befindet sich am Bahnhofsplatz.", "Einweihung im 20. Jahrhundert."],
      hu: ["A vasúti munkásokra emlékezik.", "Fontos történelmi emlékmű.", "A vasútállomás terén található.", "A 20. században avatták fel."],
      ro: ["Comemorează lucrătorii feroviari.", "Monument istoric important.", "Situat în piața gării.", "Inaugurat în secolul XX."],
      en: ["Commemorates the railway workers.", "Important historical monument.", "Located at the station square.", "Inaugurated in the 20th century."]
    }
  },
  {
    id: "bf-stade-wobi",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.2954, 11.1712],
    name: {
      de: "Wobi-Stadion",
      hu: "Wobi Stadion",
      ro: "Stadionul Wobi",
      en: "Wobi Stadium"
    },
    description: {
      de: "Das zweite große Fußballstadion in Bobo-Dioulasso. Es wird häufig für lokale Meisterschaftsspiele und Gemeindeereignisse genutzt.",
      hu: "A második nagy futballstadion Bobo-Dioulassóban. Gyakran használják helyi bajnoki mérkőzésekre és közösségi eseményekre.",
      ro: "Al doilea stadion de fotbal ca mărime din Bobo-Dioulasso. Este adesea folosit pentru meciurile campionatului local și evenimente comunitare.",
      en: "The second major football stadium in Bobo-Dioulasso. It is frequently used for local championship matches and community events."
    },
    facts: {
      de: ["Wichtiges Stadion in Bobo-Dioulasso.", "Heimat lokaler Fußballvereine.", "Kapazität für tausende Fans.", "Regelmäßige Sportveranstaltungen."],
      hu: ["Fontos stadion Bobo-Dioulassóban.", "Helyi futballklubok otthona.", "Több ezer szurkoló befogadására alkalmas.", "Rendszeres sportesemények."],
      ro: ["Stadion important din Bobo-Dioulasso.", "Casa cluburilor locale de fotbal.", "Capacitate pentru mii de fani.", "Evenimente sportive regulate."],
      en: ["Important stadium in Bobo-Dioulasso.", "Home to local football clubs.", "Capacity for thousands of fans.", "Regular sporting events."]
    }
  },
  {
    id: "bf-monument-naaba-koom",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5364, 12.3703],
    name: {
      de: "Naaba Koom-Denkmal",
      hu: "Naaba Koom Emlékmű",
      ro: "Monumentul Naaba Koom",
      en: "Naaba Koom Monument"
    },
    description: {
      de: "Eine Statue am Bahnhof in Ouagadougou, die Naaba Koom darstellt. Die Statue begrüßt Reisende und symbolisiert Gastfreundschaft.",
      hu: "Az ouagadougoui vasútállomásnál található szobor Naaba Koomot ábrázolja. A szobor üdvözli az utazókat, és a vendégszeretetet szimbolizálja.",
      ro: "O statuie din gara Ouagadougou care îl reprezintă pe Naaba Koom. Statuia întâmpină călătorii și simbolizează ospitalitatea.",
      en: "A statue at the Ouagadougou railway station depicting Naaba Koom. The statue welcomes travelers and symbolizes hospitality."
    },
    facts: {
      de: ["Zeigt eine traditionelle Figur.", "Befindet sich am Bahnhof Ouagadougou.", "Eine Frau, die Wasser gießt.", "Symbol für Frieden."],
      hu: ["Egy hagyományos alakot ábrázol.", "Az ouagadougoui vasútállomáson található.", "Egy nőt ábrázol, aki vizet önt.", "A béke szimbóluma."],
      ro: ["Arată o figură tradițională.", "Situată la gara din Ouagadougou.", "O femeie turnând apă.", "Simbol al păcii."],
      en: ["Shows a traditional figure.", "Located at Ouagadougou train station.", "A woman pouring water.", "Symbol of peace."]
    }
  },
  {
    id: "bf-village-artisanal",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.4883, 12.3582],
    name: {
      de: "Handwerksdorf von Ouagadougou",
      hu: "Ouagadougou Kézműves Falu",
      ro: "Satul Artizanal din Ouagadougou",
      en: "Artisanal Village of Ouagadougou"
    },
    description: {
      de: "Ein Zentrum, in dem lokale Künstler und Handwerker traditionelle burkinische Kunstwerke herstellen. Es ist ein wichtiger Ort für die Förderung der Kultur.",
      hu: "Egy központ, ahol a helyi művészek és kézművesek hagyományos burkinai műalkotásokat készítenek. A kultúra népszerűsítésének fontos helyszíne.",
      ro: "Un centru în care artiștii și artizanii locali creează opere de artă tradiționale burkineze. Este un loc important pentru promovarea culturii.",
      en: "A center where local artists and artisans create traditional Burkinabe artworks. It is an important place for promoting culture."
    },
    facts: {
      de: ["Fördert lokales Handwerk.", "Zahlreiche Werkstätten.", "Beliebt bei Touristen.", "Bronze-, Leder- und Holzarbeiten."],
      hu: ["Támogatja a helyi kézművességet.", "Számos műhely.", "Népszerű a turisták körében.", "Bronz-, bőr- és famunkák."],
      ro: ["Promovează meșteșugurile locale.", "Numeroase ateliere.", "Popular printre turiști.", "Lucrări din bronz, piele și lemn."],
      en: ["Promotes local crafts.", "Numerous workshops.", "Popular with tourists.", "Bronze, leather, and wood works."]
    }
  },
  {
    id: "bf-monument-femme",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5234, 12.382],
    name: {
      de: "Denkmal für die Frau",
      hu: "A Nő Emlékműve",
      ro: "Monumentul Femeii",
      en: "Monument to the Woman"
    },
    description: {
      de: "Ein bedeutendes Denkmal, das der Rolle der burkinischen Frauen in der Gesellschaft gewidmet ist. Es symbolisiert Stärke und landwirtschaftliche Arbeit.",
      hu: "Jelentős emlékmű, amelyet a burkinai nők társadalomban betöltött szerepének szenteltek. Az erőt és a mezőgazdasági munkát szimbolizálja.",
      ro: "Un monument semnificativ dedicat rolului femeilor burkineze în societate. Simbolizează forța și munca agricolă.",
      en: "A significant monument dedicated to the role of Burkinabe women in society. It symbolizes strength and agricultural work."
    },
    facts: {
      de: ["Ehrung der Frauen des Landes.", "Zeigt Frauen bei der täglichen Arbeit.", "Zentrale Lage.", "Architektonisch beeindruckend."],
      hu: ["Az ország nőinek tisztelete.", "A nőket napi munka közben ábrázolja.", "Központi elhelyezkedésű.", "Építészetileg lenyűgöző."],
      ro: ["Onoare adusă femeilor din țară.", "Arată femeile în timpul muncii zilnice.", "Locație centrală.", "Impresionant din punct de vedere arhitectural."],
      en: ["Honoring the country's women.", "Shows women during daily work.", "Central location.", "Architecturally impressive."]
    }
  },
  {
    id: "bf-basilique-yagma",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.6441, 12.4578],
    name: {
      de: "Basilika von Yagma",
      hu: "Yagma Bazilika",
      ro: "Bazilica din Yagma",
      en: "Basilica of Yagma"
    },
    description: {
      de: "Ein großer katholischer Schrein, der der Jungfrau Maria gewidmet ist. Er wurde von Papst Johannes Paul II. gesegnet und ist ein nationaler Wallfahrtsort.",
      hu: "A Szűz Máriának szentelt nagy katolikus kegyhely. II. János Pál pápa áldotta meg, és nemzeti zarándokhely.",
      ro: "Un mare altar catolic dedicat Fecioarei Maria. A fost binecuvântat de Papa Ioan Paul al II-lea și este un loc național de pelerinaj.",
      en: "A large Catholic shrine dedicated to the Virgin Mary. It was blessed by Pope John Paul II and is a national pilgrimage site."
    },
    facts: {
      de: ["Wichtiger Wallfahrtsort.", "Der Jungfrau Maria gewidmet.", "Papstbesuch im Jahr 1990.", "Zieht Tausende Gläubige an."],
      hu: ["Fontos zarándokhely.", "Szűz Máriának szentelték.", "Pápai látogatás 1990-ben.", "Hívők ezreit vonzza."],
      ro: ["Loc important de pelerinaj.", "Dedicat Fecioarei Maria.", "Vizita papală în 1990.", "Atrage mii de credincioși."],
      en: ["Important pilgrimage site.", "Dedicated to the Virgin Mary.", "Papal visit in 1990.", "Attracts thousands of faithful."]
    }
  },
  {
    id: "bf-hotel-de-ville-ouaga",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5273, 12.3705],
    name: {
      de: "Rathaus von Ouagadougou",
      hu: "Ouagadougou Városháza",
      ro: "Primăria din Ouagadougou",
      en: "City Hall of Ouagadougou"
    },
    description: {
      de: "Das Verwaltungszentrum der Hauptstadt. Ein imposantes Gebäude im Stadtzentrum, das die städtische Verwaltung beherbergt.",
      hu: "A főváros közigazgatási központja. Egy impozáns épület a városközpontban, amely a városi önkormányzatnak ad otthont.",
      ro: "Centrul administrativ al capitalei. O clădire impunătoare din centrul orașului care găzduiește administrația municipală.",
      en: "The administrative center of the capital. An imposing building in the city center that houses the municipal administration."
    },
    facts: {
      de: ["Sitz des Bürgermeisters.", "Befindet sich im Zentrum.", "Kolonialer bis moderner Baustil.", "Verwaltungszentrum."],
      hu: ["A polgármester székhelye.", "A központban található.", "Gyarmati és modern építészeti stílus.", "Adminisztratív központ."],
      ro: ["Sediul primarului.", "Situată în centru.", "Stil arhitectural colonial spre modern.", "Centru administrativ."],
      en: ["Seat of the Mayor.", "Located in the center.", "Colonial to modern architectural style.", "Administrative center."]
    }
  },
  {
    id: "bf-grande-mosquee-dedougou",
    type: "landmark",
    parent: "BF-01",
    coords: [-3.4616, 12.4631],
    name: {
      de: "Große Moschee von Dédougou",
      hu: "Dédougou Nagymecset",
      ro: "Marea Moschee din Dédougou",
      en: "Grand Mosque of Dédougou"
    },
    description: {
      de: "Die wichtigste islamische Kultstätte in der Region Boucle du Mouhoun. Sie ist bekannt für ihre traditionelle sudanesisch-sahelische Architektur.",
      hu: "A Boucle du Mouhoun régió legfontosabb iszlám istentiszteleti helye. Hagyományos szudáni-szaheli építészetéről ismert.",
      ro: "Cel mai important lăcaș de cult islamic din regiunea Boucle du Mouhoun. Este cunoscut pentru arhitectura sa tradițională sudanezo-saheliană.",
      en: "The most important Islamic place of worship in the Boucle du Mouhoun region. It is known for its traditional Sudano-Sahelian architecture."
    },
    facts: {
      de: ["Sudanesisch-sahelischer Stil.", "Lehmbauweise.", "Spirituelles Zentrum der Region.", "Ein Wahrzeichen von Dédougou."],
      hu: ["Szudáni-szaheli stílus.", "Vályogépítés.", "A régió szellemi központja.", "Dédougou nevezetessége."],
      ro: ["Stil sudanezo-sahelian.", "Construcție din noroi.", "Centru spiritual al regiunii.", "Un punct de reper din Dédougou."],
      en: ["Sudano-Sahelian style.", "Mud-brick construction.", "Spiritual center of the region.", "A landmark of Dédougou."]
    }
  },
  {
    id: "bf-stade-sangoule-lamizana",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.3164, 11.1648],
    name: {
      de: "Stadion Sangoulé Lamizana",
      hu: "Sangoulé Lamizana Stadion",
      ro: "Stadionul Sangoulé Lamizana",
      en: "Sangoulé Lamizana Stadium"
    },
    description: {
      de: "Das größte Stadion in Bobo-Dioulasso, benannt nach dem ehemaligen Präsidenten. Es war einer der Austragungsorte des Afrika-Cups 1998.",
      hu: "A legnagyobb stadion Bobo-Dioulassóban, a volt elnökről elnevezve. Az 1998-as Afrika-kupa egyik helyszíne volt.",
      ro: "Cel mai mare stadion din Bobo-Dioulasso, numit după fostul președinte. A fost una dintre locațiile Cupei Africii pe Națiuni din 1998.",
      en: "The largest stadium in Bobo-Dioulasso, named after the former president. It was one of the venues for the 1998 African Cup of Nations."
    },
    facts: {
      de: ["Erbaut für den Afrika-Cup 1998.", "Kapazität von 30.000 Zuschauern.", "Sitz des Vereins RCB.", "Benannt nach einem Ex-Präsidenten."],
      hu: ["Az 1998-as Afrika-kupára épült.", "30 000 néző befogadóképessége.", "Az RCB klub székhelye.", "Egy volt elnökről nevezték el."],
      ro: ["Construit pentru Cupa Africii din 1998.", "Capacitate de 30.000 de spectatori.", "Sediul clubului RCB.", "Numit după un fost președinte."],
      en: ["Built for the 1998 African Cup.", "Capacity of 30,000 spectators.", "Home of the RCB club.", "Named after a former president."]
    }
  },
  {
    id: "bf-palais-justice-ouaga",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.52, 12.365],
    name: {
      de: "Justizpalast von Ouagadougou",
      hu: "Ouagadougou Igazságügyi Palotája",
      ro: "Palatul de Justiție din Ouagadougou",
      en: "Palace of Justice of Ouagadougou"
    },
    description: {
      de: "Ein monumentales Gebäude im Stadtzentrum, in dem die höchsten Gerichte des Landes tagen. Es ist das Zentrum der Rechtsprechung.",
      hu: "Egy monumentális épület a városközpontban, ahol az ország legfelsőbb bíróságai üléseznek. Ez a joghatóság központja.",
      ro: "O clădire monumentală în centrul orașului unde se întrunesc cele mai înalte instanțe ale țării. Este centrul jurisdicției.",
      en: "A monumental building in the city center where the highest courts of the country meet. It is the center of jurisdiction."
    },
    facts: {
      de: ["Sitz des Obersten Gerichtshofs.", "Befindet sich im Regierungsviertel.", "Imposante Fassade.", "Wichtig für das Rechtssystem."],
      hu: ["A Legfelsőbb Bíróság székhelye.", "A kormányzati negyedben található.", "Impozáns homlokzat.", "Fontos az igazságszolgáltatási rendszer számára."],
      ro: ["Sediul Curții Supreme.", "Situat în cartierul guvernamental.", "Fațadă impunătoare.", "Important pentru sistemul de justiție."],
      en: ["Seat of the Supreme Court.", "Located in the government district.", "Imposing facade.", "Important for the justice system."]
    }
  },
  {
    id: "bf-monument-cinquantenaire-bobo",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.305, 11.18],
    name: {
      de: "Denkmal des 50. Jahrestages",
      hu: "Az 50. Évforduló Emlékműve",
      ro: "Monumentul a 50 de Ani",
      en: "Monument of the 50th Anniversary"
    },
    description: {
      de: "Ein Denkmal in Bobo-Dioulasso, das an den 50. Jahrestag der Unabhängigkeit Burkina Fasos erinnert. Es ist ein moderner Wahrzeichen der Stadt.",
      hu: "Emlékmű Bobo-Dioulassóban, amely Burkina Faso függetlenségének 50. évfordulójára emlékeztet. A város modern nevezetessége.",
      ro: "Un monument din Bobo-Dioulasso care comemorează 50 de ani de la independența Burkinei Faso. Este un punct de reper modern al orașului.",
      en: "A monument in Bobo-Dioulasso commemorating the 50th anniversary of Burkina Faso's independence. It is a modern landmark of the city."
    },
    facts: {
      de: ["Zur 50-jährigen Unabhängigkeit erbaut.", "Eingeweiht im Jahr 2010.", "Moderner architektonischer Stil.", "Befindet sich in Bobo-Dioulasso."],
      hu: ["Az 50 éves függetlenségre épült.", "2010-ben avatták fel.", "Modern építészeti stílus.", "Bobo-Dioulassóban található."],
      ro: ["Construit pentru 50 de ani de independență.", "Inaugurat în anul 2010.", "Stil arhitectural modern.", "Situat în Bobo-Dioulasso."],
      en: ["Built for 50 years of independence.", "Inaugurated in the year 2010.", "Modern architectural style.", "Located in Bobo-Dioulasso."]
    }
  },
  {
    id: "bf-cathedrale-koudougou",
    type: "landmark",
    parent: "BF-06",
    coords: [-2.361, 12.2486],
    name: {
      de: "Kathedrale von Koudougou",
      hu: "Koudougoui Katedrális",
      ro: "Catedrala din Koudougou",
      en: "Cathedral of Koudougou"
    },
    description: {
      de: "Die Hauptkirche des Bistums Koudougou. Sie zeichnet sich durch ihre großzügige Architektur und ihre Bedeutung für die lokale christliche Gemeinde aus.",
      hu: "A koudougoui egyházmegye főtemploma. Tágas építészete és a helyi keresztény közösség számára betöltött jelentősége jellemzi.",
      ro: "Biserica principală a diecezei de Koudougou. Se remarcă prin arhitectura sa spațioasă și importanța sa pentru comunitatea creștină locală.",
      en: "The main church of the Diocese of Koudougou. It is characterized by its spacious architecture and its importance to the local Christian community."
    },
    facts: {
      de: ["Sitz des Bischofs von Koudougou.", "Zentrum der christlichen Gemeinde.", "Imposante Struktur.", "Historisches Kirchengebäude."],
      hu: ["A koudougoui püspök székhelye.", "A keresztény közösség központja.", "Impozáns szerkezet.", "Történelmi templomépület."],
      ro: ["Sediul episcopului de Koudougou.", "Centrul comunității creștine.", "Structură impunătoare.", "Clădire istorică a bisericii."],
      en: ["Seat of the Bishop of Koudougou.", "Center of the Christian community.", "Imposing structure.", "Historical church building."]
    }
  },
  {
    id: "bf-mairie-bobo",
    type: "landmark",
    parent: "BF-09",
    coords: [-4.298, 11.176],
    name: {
      de: "Rathaus von Bobo-Dioulasso",
      hu: "Bobo-Dioulasso Városháza",
      ro: "Primăria din Bobo-Dioulasso",
      en: "City Hall of Bobo-Dioulasso"
    },
    description: {
      de: "Ein schönes Kolonialgebäude, das als Sitz der Stadtverwaltung der zweitgrößten Stadt des Landes dient.",
      hu: "Egy gyönyörű gyarmati épület, amely az ország második legnagyobb városának önkormányzati székhelyeként szolgál.",
      ro: "O frumoasă clădire colonială care servește drept sediu al guvernului municipal din al doilea oraș ca mărime al țării.",
      en: "A beautiful colonial building that serves as the seat of the municipal government of the country's second largest city."
    },
    facts: {
      de: ["Architektur aus der Kolonialzeit.", "Verwaltungssitz der Region.", "Befindet sich im Stadtzentrum.", "Kulturelles Erbe."],
      hu: ["A gyarmati korszakból származó építészet.", "A régió közigazgatási székhelye.", "A városközpontban található.", "Kulturális örökség."],
      ro: ["Arhitectură din perioada colonială.", "Sediul administrativ al regiunii.", "Situată în centrul orașului.", "Patrimoniu cultural."],
      en: ["Architecture from the colonial era.", "Administrative seat of the region.", "Located in the city center.", "Cultural heritage."]
    }
  },
  {
    id: "bf-grande-mosquee-banfora",
    type: "landmark",
    parent: "BF-02",
    coords: [-4.76, 10.63],
    name: {
      de: "Große Moschee von Banfora",
      hu: "Banfora Nagymecset",
      ro: "Marea Moschee din Banfora",
      en: "Grand Mosque of Banfora"
    },
    description: {
      de: "Die wichtigste Moschee in Banfora. Sie dient als spiritueller Treffpunkt für die mehrheitlich muslimische Bevölkerung der Region Cascades.",
      hu: "Banfora legfontosabb mecsete. A Cascades régió többségében muszlim lakosságának szellemi találkozóhelye.",
      ro: "Cea mai importantă moschee din Banfora. Servește ca punct de întâlnire spirituală pentru populația majoritar musulmană din regiunea Cascades.",
      en: "The most important mosque in Banfora. It serves as a spiritual meeting place for the majority Muslim population of the Cascades region."
    },
    facts: {
      de: ["Hauptmoschee der Region Cascades.", "Ort der großen Freitagsgebete.", "Zentrale Lage in Banfora.", "Charakteristische Minarette."],
      hu: ["A Cascades régió fő mecsete.", "A nagy pénteki imák helyszíne.", "Központi elhelyezkedés Banforában.", "Jellegzetes minaretek."],
      ro: ["Moscheea principală din regiunea Cascades.", "Loc pentru marile rugăciuni de vineri.", "Locație centrală în Banfora.", "Minarete caracteristice."],
      en: ["Main mosque of the Cascades region.", "Site of the major Friday prayers.", "Central location in Banfora.", "Characteristic minarets."]
    }
  },
  {
    id: "bf-pont-kadiogo",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.53, 12.39],
    name: {
      de: "Brücke am Kadiogo-Damm",
      hu: "Híd a Kadiogo-gáton",
      ro: "Podul de la Barajul Kadiogo",
      en: "Bridge at the Kadiogo Dam"
    },
    description: {
      de: "Ein wichtiges Infrastrukturbauwerk in Ouagadougou, das den Verkehr über die Stauseen der Stadt leitet. Es verbindet wichtige Stadtviertel.",
      hu: "Fontos infrastrukturális építmény Ouagadougou-ban, amely a forgalmat a város víztározói felett vezeti. Fontos városrészeket köt össze.",
      ro: "O importantă structură de infrastructură din Ouagadougou care direcționează traficul peste rezervoarele orașului. Conectează cartiere importante.",
      en: "An important infrastructure structure in Ouagadougou that directs traffic over the city's reservoirs. It connects important neighborhoods."
    },
    facts: {
      de: ["Überquert die städtischen Stauseen.", "Wichtige Verkehrsader.", "Bietet Ausblicke auf das Wasser.", "Verbindet Nord und Süd."],
      hu: ["Keresztezi a városi víztározókat.", "Fontos közlekedési artéria.", "Kilátást nyújt a vízre.", "Északot és Délt köti össze."],
      ro: ["Traversează rezervoarele orașului.", "Arteră de trafic importantă.", "Oferă vedere la apă.", "Conectează nordul și sudul."],
      en: ["Crosses the urban reservoirs.", "Important traffic artery.", "Offers views of the water.", "Connects North and South."]
    }
  },
  {
    id: "bf-centre-artisanat-art",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.515, 12.37],
    name: {
      de: "Nationales Kunsthandwerkszentrum",
      hu: "Nemzeti Kézműves Központ",
      ro: "Centrul Național de Meșteșuguri",
      en: "National Arts and Crafts Center"
    },
    description: {
      de: "Das CNAA in Ouagadougou ist eine Institution zur Bewahrung und Lehre traditioneller Handwerkstechniken. Besucher können Künstlern bei der Arbeit zusehen.",
      hu: "Az ouagadougoui CNAA a hagyományos kézműves technikák megőrzését és oktatását szolgáló intézmény. A látogatók munka közben figyelhetik meg a művészeket.",
      ro: "CNAA din Ouagadougou este o instituție pentru conservarea și predarea tehnicilor meșteșugărești tradiționale. Vizitatorii îi pot urmări pe artiști la lucru.",
      en: "The CNAA in Ouagadougou is an institution for preserving and teaching traditional craft techniques. Visitors can watch artists at work."
    },
    facts: {
      de: ["Ausbildungsstätte für Künstler.", "Spezialisiert auf Bronze und Leder.", "Verkaufsgalerie vor Ort.", "Kultureller Knotenpunkt."],
      hu: ["Művészek képzési központja.", "Bronzra és bőrre specializálódott.", "Helyszíni értékesítési galéria.", "Kulturális csomópont."],
      ro: ["Centru de formare pentru artiști.", "Specializat în bronz și piele.", "Galerie de vânzare la fața locului.", "Centru cultural."],
      en: ["Training center for artists.", "Specializes in bronze and leather.", "On-site sales gallery.", "Cultural hub."]
    }
  },
  {
    id: "bf-gare-ouagadougou",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.536, 12.372],
    name: {
      de: "Bahnhof von Ouagadougou",
      hu: "Ouagadougou Vasútállomás",
      ro: "Gara din Ouagadougou",
      en: "Ouagadougou Train Station"
    },
    description: {
      de: "Der historische Endbahnhof der Abidjan-Niger-Bahn in Ouagadougou. Seine charakteristische Kolonialarchitektur ist ein Wahrzeichen der Stadt.",
      hu: "Az Abidjan-Niger vasútvonal történelmi végállomása Ouagadougou-ban. Jellegzetes gyarmati építészete a város nevezetessége.",
      ro: "Gara istorică terminală a căii ferate Abidjan-Niger din Ouagadougou. Arhitectura sa colonială caracteristică este un punct de reper al orașului.",
      en: "The historic terminus of the Abidjan-Niger railway in Ouagadougou. Its characteristic colonial architecture is a city landmark."
    },
    facts: {
      de: ["Erbaut in der Kolonialzeit.", "Verbindet Burkina Faso mit der Elfenbeinküste.", "Auffälliges Hauptgebäude.", "Historisch bedeutender Ort."],
      hu: ["A gyarmati időszakban épült.", "Burkina Fasót köti össze Elefántcsontparttal.", "Feltűnő főépület.", "Történelmileg jelentős hely."],
      ro: ["Construită în perioada colonială.", "Conectează Burkina Faso cu Coasta de Fildeș.", "Clădire principală atractivă.", "Loc semnificativ istoric."],
      en: ["Built in the colonial era.", "Connects Burkina Faso with Ivory Coast.", "Striking main building.", "Historically significant place."]
    }
  },
  {
    id: "bf-palais-culture-guingane",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.54, 12.355],
    name: {
      de: "Kulturpalast Jean-Pierre Guingané",
      hu: "Jean-Pierre Guingané Kulturpalota",
      ro: "Palatul Culturii Jean-Pierre Guingané",
      en: "Jean-Pierre Guingané Palace of Culture"
    },
    description: {
      de: "Ein wichtiges Theater- und Kulturzentrum in Ouagadougou, das nach dem berühmten burkinischen Dramatiker benannt wurde. Es fördert darstellende Künste.",
      hu: "Fontos színházi és kulturális központ Ouagadougou-ban, amelyet a híres burkinai drámaíróról neveztek el. Támogatja az előadóművészeteket.",
      ro: "Un important centru teatral și cultural din Ouagadougou, numit după celebrul dramaturg burkinez. Promovează artele spectacolului.",
      en: "An important theater and cultural center in Ouagadougou named after the famous Burkinabe playwright. It promotes performing arts."
    },
    facts: {
      de: ["Nach einem berühmten Dramatiker benannt.", "Zentrum für darstellende Künste.", "Austragungsort von Theaterfestivals.", "Großer Veranstaltungssaal."],
      hu: ["Egy híres drámaíróról nevezték el.", "Előadóművészeti központ.", "Színházi fesztiválok helyszíne.", "Nagy rendezvényterem."],
      ro: ["Numit după un dramaturg celebru.", "Centru de arte ale spectacolului.", "Locație pentru festivaluri de teatru.", "Sală mare de evenimente."],
      en: ["Named after a famous playwright.", "Center for performing arts.", "Venue for theater festivals.", "Large event hall."]
    }
  },
  {
    id: "bf-hotel-independance-ouaga",
    type: "landmark",
    parent: "BF-03",
    coords: [-1.5255, 12.368],
    name: {
      de: "Unabhängigkeitshotel",
      hu: "Függetlenség Szálloda",
      ro: "Hotelul Independenței",
      en: "Independence Hotel"
    },
    description: {
      de: "Ein historisches und markantes Hotel im Zentrum von Ouagadougou. Es war über Jahrzehnte ein wichtiges Zentrum für internationale Gäste und Konferenzen.",
      hu: "Egy történelmi és ikonikus szálloda Ouagadougou központjában. Évtizedekig fontos központja volt a nemzetközi vendégeknek és konferenciáknak.",
      ro: "Un hotel istoric și distinctiv din centrul orașului Ouagadougou. Timp de decenii a fost un centru important pentru oaspeți internaționali și conferințe.",
      en: "A historic and distinctive hotel in the center of Ouagadougou. For decades it was an important center for international guests and conferences."
    },
    facts: {
      de: ["Wichtiges historisches Gebäude.", "Zentral im Geschäftsviertel.", "Ort politischer Treffen.", "Meilenstein der Stadtgeschichte."],
      hu: ["Fontos történelmi épület.", "Központi helyen az üzleti negyedben.", "Politikai találkozók helyszíne.", "A várostörténet mérföldköve."],
      ro: ["Clădire istorică importantă.", "Situat central în cartierul de afaceri.", "Loc de întâlniri politice.", "Piatră de hotar în istoria orașului."],
      en: ["Important historical building.", "Central in the business district.", "Site of political meetings.", "Milestone in city history."]
    }
  }
];
