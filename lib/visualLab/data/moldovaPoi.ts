import { POI } from "./poi";

export const moldovaAllPoi: POI[] = [
  // --- Főváros és Városok ---
  {
    id: "md-bender",
    parent: "MD",
    type: "city",
    coords: [29.4731, 46.8258],
    name: {
      de: "Bender (Tighina)",
      hu: "Bender (Tighina)",
      ro: "Bender (Tighina)",
      en: "Bender (Tighina)",
    },
    description: {
      de: "Eine historisch bedeutende Stadt am rechten Ufer des Flusses Dnister.",
      hu: "Történelmileg jelentős város a Dnyeszter folyó jobb partján.",
      ro: "Un oraș de importanță istorică situat pe malul drept al fluviului Nistru.",
      en: "A historically significant city located on the right bank of the Dniester river.",
    },
  },
  // --- Történelmi és Látnivalók ---
  {
    id: "md-orheiul-vechi",
    parent: "MD",
    type: "historical",
    coords: [28.9725, 47.3033],
    name: {
      de: "Orheiul Vechi",
      hu: "Orheiul Vechi (Ó-Orhei)",
      ro: "Orheiul Vechi",
      en: "Orheiul Vechi (Old Orhei)",
    },
    description: {
      de: "Ein spektakulärer archäologischer Komplex mit Höhlenklöstern, geschnitzt in die Kalksteinklippen des Răut-Tals.",
      hu: "Látványos régészeti komplexum a Răut-folyó mészkőszikláiba vájt barlangkolostorokkal.",
      ro: "Un complex arheologic spectaculos, cu mănăstiri rupestre săpate în stâncile de calcar ale văii Răutului.",
      en: "A spectacular archaeological complex with cave monasteries carved into the limestone cliffs of the Răut River valley.",
    },
  },
  {
    id: "md-soroca-fortress",
    parent: "MD",
    type: "historical",
    coords: [28.3038, 48.1585],
    name: {
      de: "Festung Soroca",
      hu: "Soroca erőd",
      ro: "Cetatea Soroca",
      en: "Soroca Fortress",
    },
    description: {
      de: "Eine sehr gut erhaltene historische Festung am Ufer des Dnister, erbaut von Stefan dem Großen.",
      hu: "Egy kiválóan fennmaradt történelmi erőd a Dnyeszter partján, amelyet Nagy István (Ștefan cel Mare) építtetett.",
      ro: "O cetate istorică foarte bine conservată pe malul Nistrului, construită de Ștefan cel Mare.",
      en: "A very well-preserved historical fortress on the bank of the Dniester River, built by Stephen the Great.",
    },
  },
  {
    id: "md-cricova",
    parent: "MD",
    type: "landmark",
    coords: [28.8617, 47.1357],
    name: {
      de: "Weinkeller Cricova",
      hu: "Cricova pincészet",
      ro: "Crama Cricova",
      en: "Cricova Winery",
    },
    description: {
      de: "Ein riesiger unterirdischer Weinkeller-Komplex und eine echte 'Weinstadt' unter der Erde.",
      hu: "Hatalmas, föld alatti borospincék hálózata, amely valóságos 'borvárost' alkot.",
      ro: "Un complex imens de crame subterane, formând un adevărat 'oraș al vinului'.",
      en: "A massive underground wine cellar complex, essentially an underground 'wine city'.",
    },
  },
  {
    id: "md-milestii-mici",
    parent: "MD",
    type: "landmark",
    coords: [28.8055, 46.9100],
    name: {
      de: "Mileștii Mici",
      hu: "Mileștii Mici pincészet",
      ro: "Mileștii Mici",
      en: "Mileștii Mici Winery",
    },
    description: {
      de: "Eingetragen im Guinness-Buch der Rekorde für die größte Weinsammlung der Welt.",
      hu: "A világ legnagyobb borgyűjteményeként bekerült a Guinness Rekordok Könyvébe.",
      ro: "Înscrisă în Cartea Recordurilor Guinness pentru cea mai mare colecție de vinuri din lume.",
      en: "Registered in the Guinness Book of Records for having the largest wine collection in the world.",
    },
  },
  {
    id: "md-tighina-fortress",
    parent: "MD",
    type: "historical",
    coords: [29.4883, 46.8306],
    name: {
      de: "Festung Tighina",
      hu: "Tighina erőd (Bender)",
      ro: "Cetatea Tighina",
      en: "Tighina Fortress",
    },
    description: {
      de: "Eine bedeutende osmanische Festung des 16. Jahrhunderts am Dnister in der Stadt Bender.",
      hu: "Egy 16. századi jelentős oszmán erőd a Dnyeszter partján, Bender városában.",
      ro: "O importantă cetate otomană din secolul al XVI-lea pe Nistru, în orașul Bender.",
      en: "An important 16th-century Ottoman fortress on the Dniester River in the city of Bender.",
    },
  },
  {
    id: "md-manuc-bei",
    parent: "MD",
    type: "historical",
    coords: [28.5830, 46.8288],
    name: {
      de: "Schloss Manuc Bei",
      hu: "Manuc Bei kastély",
      ro: "Conacul Manuc Bei",
      en: "Manuc Bei Mansion",
    },
    description: {
      de: "Ein elegantes architektonisches Herrenhaus in Hîncești, entworfen im französischen Stil.",
      hu: "Elegáns, francia stílusban tervezett kastélykomplexum Hînceștiben.",
      ro: "Un complex arhitectural elegant din Hîncești, proiectat în stil francez.",
      en: "An elegant architectural mansion in Hîncești, designed in a French style.",
    },
  },

  // --- Természeti Látnivalók ---
  {
    id: "md-padurea-domneasca",
    parent: "MD",
    type: "landmark",
    coords: [27.4000, 47.6166],
    name: {
      de: "Pădurea Domnească",
      hu: "Pădurea Domnească (Fejedelmi erdő)",
      ro: "Rezervația Pădurea Domnească",
      en: "Pădurea Domnească Nature Reserve",
    },
    description: {
      de: "Das größte Naturreservat der Republik Moldau, bekannt für seine Wisent-Population.",
      hu: "Moldova legnagyobb természetvédelmi területe, amely az ott élő európai bölényekről is híres.",
      ro: "Cea mai mare rezervație naturală din Republica Moldova, cunoscută pentru populația sa de zimbri.",
      en: "The largest nature reserve in Moldova, well known for its population of European bison.",
    },
  },
  {
    id: "md-codru",
    parent: "MD",
    type: "landmark",
    coords: [28.4027, 47.0750],
    name: {
      de: "Codru-Reservat",
      hu: "Codru Természetvédelmi Terület",
      ro: "Rezervația Codru",
      en: "Codru Nature Reserve",
    },
    description: {
      de: "Ein altes Waldgebiet im Zentrum Moldaus, Heimat vieler seltener Pflanzen- und Tierarten.",
      hu: "Ősi erdőség Moldova központjában, számos ritka növény- és állatfaj otthona.",
      ro: "O pădure veche în centrul Moldovei, adăpost pentru multe specii rare de plante și animale.",
      en: "An ancient forested area in central Moldova, home to many rare plant and animal species.",
    },
  },
  {
    id: "md-prutul-de-jos",
    parent: "MD",
    type: "landmark",
    coords: [28.1666, 45.5833],
    name: {
      de: "Biosphärenreservat Unterer Prut",
      hu: "Alsó-Prut Bioszféra Rezervátum",
      ro: "Prutul de Jos",
      en: "Lower Prut Biosphere Reserve",
    },
    description: {
      de: "Ein Feuchtgebiet von internationaler Bedeutung, das den natürlichen See Beleu umfasst.",
      hu: "Nemzetközi jelentőségű vizes élőhely, mely magába foglalja a Beleu természetes tavat.",
      ro: "O zonă umedă de importanță internațională, care include lacul natural Beleu.",
      en: "A wetland of international importance, encompassing the natural Lake Beleu.",
    },
  },
  {
    id: "md-dniester-river",
    parent: "MD",
    type: "landmark",
    coords: [29.1333, 47.2500],
    name: {
      de: "Dnister",
      hu: "Dnyeszter",
      ro: "Fluviul Nistru",
      en: "Dniester River",
    },
    description: {
      de: "Der größte Fluss in der Republik Moldau, der die natürliche Grenze zu Transnistrien bildet.",
      hu: "Moldova legnagyobb folyója, amely a Dnyeszter Menti Köztársaság természetes határát is képezi.",
      ro: "Cel mai mare fluviu din Republica Moldova, formând granița naturală cu Transnistria.",
      en: "The largest river in Moldova, forming the natural border with Transnistria.",
    },
  },
  {
    id: "md-prut-river",
    parent: "MD",
    type: "landmark",
    coords: [27.2666, 47.9000],
    name: {
      de: "Pruth",
      hu: "Prut",
      ro: "Râul Prut",
      en: "Prut River",
    },
    description: {
      de: "Ein wichtiger Fluss, der die natürliche Grenze zwischen der Republik Moldau und Rumänien bildet.",
      hu: "Jelentős folyó, amely Moldova és Románia közötti természetes határvonalat alkotja.",
      ro: "Un râu important care formează granița naturală dintre Republica Moldova și România.",
      en: "A major river that forms the natural border between Moldova and Romania.",
    },
  },

  // --- Kulturális ---
  {
    id: "md-gagauzia",
    parent: "MD",
    type: "landmark",
    coords: [28.6000, 46.1500],
    name: {
      de: "Gagausien",
      hu: "Gagauzia",
      ro: "Găgăuzia",
      en: "Gagauzia",
    },
    description: {
      de: "Eine autonome territoriale Einheit mit einer einzigartigen turksprachigen, orthodox-christlichen Bevölkerung.",
      hu: "Autonóm terület, ahol egy egyedülálló, török nyelvű, ortodox keresztény kisebbség él.",
      ro: "O unitate teritorială autonomă cu o populație unică de origine turcică și religie creștin-ortodoxă.",
      en: "An autonomous territorial unit with a unique Turkic-speaking, Orthodox Christian population.",
    },
  },
  {
    id: "md-castel-mimi",
    parent: "MD",
    type: "landmark",
    coords: [29.2833, 46.8833],
    name: {
      de: "Castel Mimi",
      hu: "Castel Mimi",
      ro: "Castel Mimi",
      en: "Castel Mimi",
    },
    description: {
      de: "Ein historisches Weinschloss, das wunderschön restauriert wurde und die Weinkultur des Landes repräsentiert.",
      hu: "Történelmi borkastély, melyet gyönyörűen felújítottak, az ország borkultúrájának szimbóluma.",
      ro: "Un castel viticol istoric frumos restaurat, reprezentând cultura vinului din țară.",
      en: "A historical wine chateau that has been beautifully restored, representing the country's wine culture.",
    },
  },
  // MD-001: Briceni
  {
    id: "MD-001-briceni-city",
    type: "city",
    parent: "MD-001",
    coords: [27.0803, 48.3611],
    name: { de: "Briceni", hu: "Briceni", ro: "Briceni", en: "Briceni" },
    description: { de: "Eine Stadt im Norden Moldaus, Verwaltungszentrum des gleichnamigen Rajons.", hu: "Város Moldova északi részén, az azonos nevű járás központja.", ro: "Un oraș în nordul Moldovei, centrul administrativ al raionului cu același nume.", en: "A city in northern Moldova, the administrative center of the district of the same name." },
    facts: { de: ["Nördlichste Stadt Moldaus.","Wichtiger Grenzpunkt zur Ukraine.","Bekannt für seine Apfelplantagen."], hu: ["Moldova legészakibb városa.","Fontos határátkelőhely Ukrajna felé.","Almaültetvényeiről ismert."], ro: ["Cel mai nordic oraș din Moldova.","Punct de frontieră important cu Ucraina.","Cunoscut pentru livezile de meri."], en: ["Northernmost city in Moldova.","Important border point with Ukraine.","Known for its apple orchards."] }
  },
  {
    id: "MD-001-criva-cave",
    type: "landmark",
    parent: "MD-001",
    coords: [26.6394, 48.2672],
    name: { de: "Emil-Racoviță-Höhle", hu: "Emil Racoviță-barlang", ro: "Peștera Emil Racoviță", en: "Emil Racoviță Cave" },
    description: { de: "Eine der weltweit größten Gipshöhlen, gelegen bei Criva.", hu: "A világ egyik legnagyobb gipszbarlangja, Criva közelében található.", ro: "Una dintre cele mai mari peșteri de ghips din lume, situată lângă Criva.", en: "One of the world's largest gypsum caves, located near Criva." },
    facts: { de: ["Über 90 km lange Galerien.","Drittgrößte Gipshöhle der Welt.","Auch als 'Aschenputtel-Höhle' bekannt."], hu: ["Több mint 90 km hosszú járatrendszer.","A világ harmadik legnagyobb gipszbarlangja.","'Hamupipőke-barlang' néven is ismert."], ro: ["Galerii de peste 90 km lungime.","A treia cea mai mare peșteră de ghips din lume.","Cunoscută și sub numele de 'Peștera Cenușăreasa'."], en: ["Galleries over 90 km long.","Third largest gypsum cave in the world.","Also known as the 'Cinderella Cave'."] }
  },
  // MD-002: Edineţ
  {
    id: "MD-002-edinet-city",
    type: "city",
    parent: "MD-002",
    coords: [27.3050, 48.1725],
    name: { de: "Edineț", hu: "Edineț", ro: "Edineț", en: "Edineț" },
    description: { de: "Ein bedeutendes wirtschaftliches Zentrum im Norden Moldaus.", hu: "Jelentős gazdasági központ Moldova északi részén.", ro: "Un centru economic important în nordul Moldovei.", en: "A significant economic center in northern Moldova." },
    facts: { de: ["Berühmt für seinen Stadtpark.","Historischer Marktplatz.","Zentrum der lokalen Lebensmittelindustrie."], hu: ["Híres a városi parkjáról.","Történelmi piactér.","A helyi élelmiszeripar központja."], ro: ["Faimos pentru parcul său orășenesc.","Piață istorică.","Centrul industriei alimentare locale."], en: ["Famous for its city park.","Historical marketplace.","Center of the local food industry."] }
  },
  {
    id: "MD-002-fetesti-nature",
    type: "landmark",
    parent: "MD-002",
    coords: [27.1189, 48.1636],
    name: { de: "Fetești-Landschaft", hu: "Fetești tájvédelmi körzet", ro: "Rezervația peisajistică Fetești", en: "Fetești Landscape Reserve" },
    description: { de: "Bekannt als 'Kleine Schweiz' Moldaus aufgrund seiner Kalksteinformationen.", hu: "Moldova 'Kis Svájcaként' ismert a mészkősziklái miatt.", ro: "Cunoscută sub numele de 'Mica Elveție' a Moldovei datorită formațiunilor de calcar.", en: "Known as the 'Little Switzerland' of Moldova due to its limestone formations." },
    facts: { de: ["Einzigartige Kalksteinfelsen (Toltre).","Tiefe Schluchten des Pruth-Nebenflusses.","Heimat seltener Steppenpflanzen."], hu: ["Egyedülálló mészkősziklák (Toltre).","A Prut mellékfolyójának mély szurdokai.","Ritka pusztai növények élőhelye."], ro: ["Stânci de calcar unice (Toltre).","Defileele adânci ale afluentului Prutului.","Adăpost pentru plante rare de stepă."], en: ["Unique limestone cliffs (Toltre).","Deep gorges of the Prut tributary.","Home to rare steppe plants."] }
  },
  // MD-003: Rîşcani
  {
    id: "MD-003-riscani-city",
    type: "city",
    parent: "MD-003",
    coords: [27.2536, 47.9547],
    name: { de: "Rîșcani", hu: "Rîșcani", ro: "Rîșcani", en: "Rîșcani" },
    description: { de: "Eine Kleinstadt am Ufer des Flusses Copăceanca.", hu: "Kisváros a Copăceanca-folyó partján.", ro: "Un orășel pe malul râului Copăceanca.", en: "A small town on the banks of the Copăceanca River." },
    facts: { de: ["Gegründet im Jahr 1602.","Wichtiger Agrarstandort.","Besitzt eine markante orthodoxe Kathedrale."], hu: ["1602-ben alapították.","Fontos mezőgazdasági központ.","Jellegzetes ortodox székesegyházzal rendelkezik."], ro: ["Fondat în anul 1602.","Locație agricolă importantă.","Deține o catedrală ortodoxă marcantă."], en: ["Founded in 1602.","Important agricultural site.","Features a prominent Orthodox cathedral."] }
  },
  {
    id: "MD-003-costesti-dam",
    type: "landmark",
    parent: "MD-003",
    coords: [27.2344, 47.8633],
    name: { de: "Costești-Stînca Talsperre", hu: "Costești-Stînca víztározó", ro: "Barajul Costești-Stînca", en: "Costești-Stînca Dam" },
    description: { de: "Ein großes Wasserkraftwerk und Stausee an der Grenze zu Rumänien.", hu: "Hatalmas vízerőmű és víztározó a román határon.", ro: "O hidrocentrală mare și un lac de acumulare la granița cu România.", en: "A large hydroelectric power station and reservoir on the border with Romania." },
    facts: { de: ["Zweitgrößter Stausee Moldaus.","Gemeinsames Projekt mit Rumänien.","Beliebtes Gebiet zum Angeln."], hu: ["Moldova második legnagyobb víztározója.","Romániával közös projekt.","Népszerű horgászhely."], ro: ["Al doilea cel mai mare lac de acumulare din Moldova.","Proiect comun cu România.","Zonă populară pentru pescuit."], en: ["Second largest reservoir in Moldova.","Joint project with Romania.","Popular area for fishing."] }
  },
  // MD-004: Glodeni
  {
    id: "MD-004-glodeni-city",
    type: "city",
    parent: "MD-004",
    coords: [27.3144, 47.7711],
    name: { de: "Glodeni", hu: "Glodeni", ro: "Glodeni", en: "Glodeni" },
    description: { de: "Verwaltungszentrum des Rajons Glodeni im Nordwesten.", hu: "Glodeni járás közigazgatási központja északnyugaton.", ro: "Centrul administrativ al raionului Glodeni, situat în nord-vest.", en: "Administrative center of Glodeni district in the northwest." },
    facts: { de: ["Zentrum der Zuckerindustrie.","Tor zum Naturreservat Pădurea Domnească.","Multikulturelle Bevölkerung."], hu: ["Cukoripar központja.","A Pădurea Domnească természetvédelmi terület kapuja.","Multikulturális lakosság."], ro: ["Centrul industriei zahărului.","Poarta către rezervația Pădurea Domnească.","Populație multiculturală."], en: ["Center of the sugar industry.","Gateway to the Pădurea Domnească nature reserve.","Multicultural population."] }
  },
  {
    id: "MD-004-suta-de-movile",
    type: "landmark",
    parent: "MD-004",
    coords: [27.2889, 47.8211],
    name: { de: "Suta de Movile", hu: "Száz halom (Suta de Movile)", ro: "Suta de Movile", en: "Hundred Mounds" },
    description: { de: "Ein einzigartiges geologisches Phänomen mit über 3.500 Hügeln.", hu: "Egyedülálló földtani jelenség több mint 3500 halommal.", ro: "Un fenomen geologic unic cu peste 3.500 de movile.", en: "A unique geological phenomenon with over 3,500 mounds." },
    facts: { de: ["Entstehung ist wissenschaftlich umstritten.","Teil des Pruth-Tals.","Erstreckt sich über 1.600 Hektar."], hu: ["Kialakulása tudományosan vitatott.","A Prut-völgy része.","1600 hektáron terül el."], ro: ["Originea este disputată științific.","Parte a văii Prutului.","Se întinde pe 1.600 de hectare."], en: ["Scientific origin is disputed.","Part of the Prut valley.","Covers over 1,600 hectares."] }
  },
  // MD-005: Făleşti
  {
    id: "MD-005-falesti-city",
    type: "city",
    parent: "MD-005",
    coords: [27.7125, 47.5744],
    name: { de: "Fălești", hu: "Fălești", ro: "Fălești", en: "Fălești" },
    description: { de: "Eine Stadt mit reicher Geschichte im Westen Moldaus.", hu: "Gazdag történelmi múltú város Moldova nyugati részén.", ro: "Un oraș cu o istorie bogată în vestul Moldovei.", en: "A city with a rich history in western Moldova." },
    facts: { de: ["Wichtiges regionales Kulturzentrum.","Besitzt ein Museum für Geschichte und Ethnographie.","Verkehrsknotenpunkt an der Bahnstrecke."], hu: ["Fontos regionális kulturális központ.","Történeti és néprajzi múzeuma van.","Vasúti közlekedési csomópont."], ro: ["Centru cultural regional important.","Deține un muzeu de istorie și etnografie.","Nod de transport feroviar."], en: ["Important regional cultural center.","Has a museum of history and ethnography.","Railway transport hub."] }
  },
  {
    id: "MD-005-gura-cainarului",
    type: "landmark",
    parent: "MD-005",
    coords: [28.1889, 47.7111],
    name: { de: "Quellen von Gura Căinarului", hu: "Gura Căinarului forrásai", ro: "Izvoarele de la Gura Căinarului", en: "Gura Căinarului Springs" },
    description: { de: "Bekannt für seine Mineralwasserquellen und natürliche Schönheit.", hu: "Ásványvízforrásairól és természeti szépségéről ismert.", ro: "Cunoscut pentru izvoarele sale de apă minerală și frumusețea naturală.", en: "Known for its mineral water springs and natural beauty." },
    facts: { de: ["Beliebtes Ausflugsziel.","Heilwasserquellen.","Typische Waldsteppen-Landschaft."], hu: ["Népszerű kirándulóhely.","Gyógyvízforrások.","Tipikus erdős sztyepp táj."], ro: ["Destinație populară pentru excursii.","Izvoare de apă curativă.","Peisaj tipic de silvostepă."], en: ["Popular excursion destination.","Healing water springs.","Typical forest-steppe landscape."] }
  },
  // MD-006: Ungheni
  {
    id: "MD-006-ungheni-city",
    type: "city",
    parent: "MD-006",
    coords: [27.8000, 47.2111],
    name: { de: "Ungheni", hu: "Ungheni", ro: "Ungheni", en: "Ungheni" },
    description: { de: "Eine der größten Städte Moldaus, direkt an der Grenze zu Rumänien.", hu: "Moldova egyik legnagyobb városa, közvetlenül a román határon.", ro: "Unul dintre cele mai mari orașe din Moldova, situat direct la granița cu România.", en: "One of the largest cities in Moldova, located right on the Romanian border." },
    facts: { de: ["Wichtigster Eisenbahngrenzübergang.","Zentrum der Teppichherstellung.","Liegt an einer markanten Pruth-Schleife."], hu: ["Legfontosabb vasúti határátkelőhely.","Szőnyeggyártás központja.","A Prut egyik jellegzetes kanyarulatában fekszik."], ro: ["Cel mai important punct de trecere a frontierei feroviare.","Centrul producției de covoare.","Situat pe o cotitură marcată a Prutului."], en: ["Most important railway border crossing.","Center of carpet manufacturing.","Located on a prominent loop of the Prut River."] }
  },
  {
    id: "MD-006-eiffel-bridge",
    type: "landmark",
    parent: "MD-006",
    coords: [27.7875, 47.2003],
    name: { de: "Eiffel-Brücke", hu: "Eiffel-híd", ro: "Podul Eiffel", en: "Eiffel Bridge" },
    description: { de: "Eine von Gustave Eiffel entworfene Eisenbahnbrücke über den Pruth.", hu: "Gustave Eiffel által tervezett vasúti híd a Prut folyó felett.", ro: "Un pod feroviar peste Prut, proiectat de Gustave Eiffel.", en: "A railway bridge over the Prut River, designed by Gustave Eiffel." },
    facts: { de: ["Baujahr 1877.","Verbindet Moldau mit Rumänien.","Architektonisches Wahrzeichen der Stadt."], hu: ["1877-ben épült.","Moldovát köti össze Romániával.","A város építészeti jelképe."], ro: ["Construit în anul 1877.","Lega Moldova de România.","Simbol arhitectural al orașului."], en: ["Built in 1877.","Connects Moldova with Romania.","Architectural landmark of the city."] }
  },
  // MD-007: Nisporeni
  {
    id: "MD-007-nisporeni-city",
    type: "city",
    parent: "MD-007",
    coords: [28.1783, 47.0814],
    name: { de: "Nisporeni", hu: "Nisporeni", ro: "Nisporeni", en: "Nisporeni" },
    description: { de: "Eine hügelige Stadt im Zentrum des Landes, bekannt für Weinbau.", hu: "Dombvidéki város az ország közepén, borászatáról ismert.", ro: "Un oraș deluros în centrul țării, cunoscut pentru viticultură.", en: "A hilly town in the center of the country, known for viticulture." },
    facts: { de: ["Bekannt für die Herstellung von Pflaumen-Schnaps.","Umgeben von Weinbergen.","Wichtiger Standort der Lebensmittelindustrie."], hu: ["Szilvapálinka készítéséről híres.","Szőlőültetvényekkel van körülvéve.","Az élelmiszeripar fontos helyszíne."], ro: ["Cunoscut pentru producția de țuică de prune.","Înconjurat de podgorii.","Locație importantă a industriei alimentare."], en: ["Known for plum brandy production.","Surrounded by vineyards.","Important food industry site."] }
  },
  {
    id: "MD-007-balanesti-hill",
    type: "mountain",
    parent: "MD-007",
    coords: [28.0833, 47.2167],
    name: { de: "Bălănești-Hügel", hu: "Bălănești-domb", ro: "Dealul Bălănești", en: "Bălănești Hill" },
    description: { de: "Der höchste Punkt der Republik Moldau.", hu: "Moldova legmagasabb pontja.", ro: "Cel mai înalt punct din Republica Moldova.", en: "The highest point in the Republic of Moldova." },
    facts: { de: ["Höhe: 429 Meter.","Teil der moldauischen Hochebene.","Bietet weite Panoramablicke."], hu: ["Magassága: 429 méter.","A moldovai fennsík része.","Széles panorámát nyújt a környékre."], ro: ["Altitudine: 429 metri.","Parte a podișului Moldovei Centrale.","Oferă vederi panoramice vaste."], en: ["Height: 429 meters.","Part of the Central Moldovan Plateau.","Offers vast panoramic views."] }
  },
  // MD-008: Hîncesti
  {
    id: "MD-008-hincesti-city",
    type: "city",
    parent: "MD-008",
    coords: [28.5900, 46.8283],
    name: { de: "Hîncești", hu: "Hîncești", ro: "Hîncești", en: "Hîncești" },
    description: { de: "Ein bedeutendes Zentrum im Zentrum-Süden Moldaus.", hu: "Jelentős központ Moldova középső-déli részén.", ro: "Un centru important în zona de centru-sud a Moldovei.", en: "A significant center in the south-central part of Moldova." },
    facts: { de: ["Früherer Name: Kotowsk.","Zentrum eines wichtigen Weinbaugebiets.","Sitz des Manuc-Bei-Herrenhauses."], hu: ["Korábbi neve: Kotovszk.","Fontos borvidék központja.","Itt található a Manuc Bei kastély."], ro: ["Fostul nume: Kotovsk.","Centrul unei regiuni viticole importante.","Sediul conacului Manuc Bei."], en: ["Former name: Kotovsk.","Center of an important wine-growing region.","Home to the Manuc Bei Mansion."] }
  },
  {
    id: "MD-008-hincesti-forest",
    type: "landmark",
    parent: "MD-008",
    coords: [28.5000, 46.8500],
    name: { de: "Landschaftsreservat Hîncești", hu: "Hîncești tájvédelmi körzet", ro: "Rezervația peisajistică Hîncești", en: "Hîncești Landscape Reserve" },
    description: { de: "Ein geschütztes Waldgebiet mit alten Eichenbeständen.", hu: "Védett erdőség öreg tölgyesekkel.", ro: "O zonă forestieră protejată cu stejari seculari.", en: "A protected forest area with old oak stands." },
    facts: { de: ["Teil des Codru-Waldes.","Reiche Artenvielfalt.","Ideal zum Wandern und Beobachten der Natur."], hu: ["A Codru-erdők része.","Gazdag élővilág.","Ideális túrázásra és természetjárásra."], ro: ["Parte a codrilor Moldovei.","Biodiversitate bogată.","Ideal pentru drumeții și observarea naturii."], en: ["Part of the Codru forests.","Rich biodiversity.","Ideal for hiking and nature observation."] }
  },
  // MD-009: Leova
  {
    id: "MD-009-leova-city",
    type: "city",
    parent: "MD-009",
    coords: [28.2519, 46.4831],
    name: { de: "Leova", hu: "Leova", ro: "Leova", en: "Leova" },
    description: { de: "Eine Hafenstadt am Ufer des Pruth.", hu: "Kikötőváros a Prut folyó partján.", ro: "Un oraș portuar pe malul Prutului.", en: "A port city on the banks of the Prut River." },
    facts: { de: ["Historischer Flusshafen.","Zentrum der lokalen Verwaltung.","Gegründet im 15. Jahrhundert."], hu: ["Történelmi folyami kikötő.","A helyi közigazgatás központja.","A 15. században alapították."], ro: ["Port fluvial istoric.","Centru al administrației locale.","Fondat în secolul al XV-lea."], en: ["Historical river port.","Center of local administration.","Founded in the 15th century."] }
  },
  {
    id: "MD-009-tigheci-forest",
    type: "landmark",
    parent: "MD-009",
    coords: [28.3500, 46.4000],
    name: { de: "Tigheci-Wald", hu: "Tigheci-erdő", ro: "Codrii Tigheciului", en: "Tigheci Forest" },
    description: { de: "Ein hügeliges Waldgebiet im Süden Moldaus.", hu: "Dombvidéki erdőség Moldova déli részén.", ro: "O zonă forestieră deluroasă în sudul Moldovei.", en: "A hilly forested area in southern Moldova." },
    facts: { de: ["Höchstgelegener Punkt im Süden Moldaus.","Bedeutendes Waldreservat.","Heimat vieler Wildtierarten."], hu: ["Moldova déli részének legmagasabb pontja.","Fontos erdőrezervátum.","Számos vadfaj otthona."], ro: ["Cel mai înalt punct din sudul Moldovei.","Rezervație forestieră importantă.","Adăpost pentru multe specii de animale sălbatice."], en: ["Highest point in southern Moldova.","Significant forest reserve.","Home to many wildlife species."] }
  },
  // MD-010: Cantemir
  {
    id: "MD-010-cantemir-city",
    type: "city",
    parent: "MD-010",
    coords: [28.2014, 46.2800],
    name: { de: "Cantemir", hu: "Cantemir", ro: "Cantemir", en: "Cantemir" },
    description: { de: "Die jüngste Rajon-Stadt Moldaus, benannt nach Dimitrie Cantemir.", hu: "Moldova legfiatalabb járási városa, Dimitrie Cantemir után elnevezve.", ro: "Cel mai tânăr oraș raional din Moldova, numit după Dimitrie Cantemir.", en: "The youngest district town in Moldova, named after Dimitrie Cantemir." },
    facts: { de: ["Gegründet 1973.","Zentrum der Wein- und Konservenindustrie.","Moderne Stadtplanung."], hu: ["1973-ban alapították.","Bor- és konzervipar központja.","Modern várostervezés."], ro: ["Fondat în 1973.","Centrul industriei vinului și conservelor.","Planificare urbană modernă."], en: ["Founded in 1973.","Center of the wine and canning industry.","Modern urban planning."] }
  },
  {
    id: "MD-010-stoianovca-nature",
    type: "landmark",
    parent: "MD-010",
    coords: [28.1667, 46.1833],
    name: { de: "Stoianovca-Reservat", hu: "Stoianovca rezervátum", ro: "Rezervația Stoianovca", en: "Stoianovca Reserve" },
    description: { de: "Ein Schutzgebiet am Unterlauf des Pruth.", hu: "Természetvédelmi terület a Prut alsó folyásánál.", ro: "O zonă protejată în cursul inferior al Prutului.", en: "A protected area on the lower course of the Prut River." },
    facts: { de: ["Wichtiger Rastplatz für Zugvögel.","Auenlandschaft.","Beliebt für Ökotourismus."], hu: ["Fontos pihenőhely költöző madaraknak.","Ártéri táj.","Népszerű ökoturisztikai célpont."], ro: ["Loc de popas important pentru păsările migratoare.","Peisaj de luncă.","Popular pentru ecoturism."], en: ["Important stopover for migratory birds.","Floodplain landscape.","Popular for ecotourism."] }
  },
  // MD-011: Cahul
  {
    id: "MD-011-cahul-city",
    type: "city",
    parent: "MD-011",
    coords: [28.1900, 45.9100],
    name: { de: "Cahul", hu: "Cahul", ro: "Cahul", en: "Cahul" },
    description: { de: "Ein bedeutender Kurort und Kulturzentrum im Süden Moldaus.", hu: "Jelentős fürdőváros és kulturális központ Moldova déli részén.", ro: "O stațiune balneară și un centru cultural important în sudul Moldovei.", en: "A significant spa town and cultural center in southern Moldova." },
    facts: { de: ["Bekannt für seine Heilbäder und Thermalwässer.","Gastgeber des Folklorefestivals 'Faces of Friends'.","Wichtiger Universitätsstandort."], hu: ["Gyógyfürdőiről és termálvizeiről ismert.","A 'Barátok arcai' népzenei fesztivál házigazdája.","Fontos egyetemi központ."], ro: ["Cunoscut pentru băile curative și apele termale.","Gazda festivalului de folclor 'Faces of Friends'.","Centru universitar important."], en: ["Known for its healing spas and thermal waters.","Host of the 'Faces of Friends' folklore festival.","Important university center."] }
  },
  {
    id: "MD-011-valeni-village",
    type: "landmark",
    parent: "MD-011",
    coords: [28.1833, 45.6111],
    name: { de: "Văleni", hu: "Văleni", ro: "Văleni", en: "Văleni" },
    description: { de: "Ein malerisches Dorf, bekannt für seine kulturellen Traditionen.", hu: "Festői falu, amely kulturális hagyományairól híres.", ro: "Un sat pitoresc, cunoscut pentru tradițiile sale culturale.", en: "A picturesque village known for its cultural traditions." },
    facts: { de: ["Berühmt für die 'Trommel-Oma'.","Gelegen am Rande des Beleu-Sees.","Zentrum des lokalen Tourismus."], hu: ["Híres a 'dobos nagymamáról'.","A Beleu-tó partján fekszik.","A helyi turizmus központja."], ro: ["Faimos pentru 'Bunica bate doba'.","Situat pe malul lacului Beleu.","Centrul turismului local."], en: ["Famous for 'Grandma beats the drum'.","Located on the shores of Lake Beleu.","Center of local tourism."] }
  },
  // MD-012: Ocniţa
  {
    id: "MD-012-ocnita-city",
    type: "city",
    parent: "MD-012",
    coords: [27.4833, 48.4111],
    name: { de: "Ocnița", hu: "Ocnița", ro: "Ocnița", en: "Ocnița" },
    description: { de: "Eine Grenzstadt im hohen Norden Moldaus with wichtiger Eisenbahnverbindung.", hu: "Határváros Moldova legészakibb részén, fontos vasúti összeköttetéssel.", ro: "Un oraș de frontieră în extremul nord al Moldovei, cu o legătură feroviară importantă.", en: "A border town in the far north of Moldova with an important railway link." },
    facts: { de: ["Wichtiger Knotenpunkt für Züge nach Ukraine.","Multikulturelles Erbe.","Wirtschaftszentrum des nördlichsten Rajons."], hu: ["Fontos csomópont az Ukrajnába tartó vonatoknak.","Multikulturális örökség.","A legészakibb járás gazdasági központja."], ro: ["Nod important pentru trenurile spre Ucraina.","Moștenire multiculturală.","Centrul economic al celui mai nordic raion."], en: ["Important hub for trains to Ukraine.","Multicultural heritage.","Economic center of the northernmost district."] }
  },
  {
    id: "MD-012-naslavcea-view",
    type: "landmark",
    parent: "MD-012",
    coords: [27.5833, 48.4611],
    name: { de: "Naslavcea", hu: "Naslavcea", ro: "Naslavcea", en: "Naslavcea" },
    description: { de: "Der northernmost Ort Moldaus mit spektakulärem Blick auf den Dnister.", hu: "Moldova legészakibb települése, látványos kilátással a Dnyeszterre.", ro: "Cea mai nordică localitate din Moldova, cu o vedere spectaculoasă asupra Nistrului.", en: "The northernmost settlement in Moldova, with a spectacular view of the Dniester River." },
    facts: { de: ["Blick auf eine herzförmige Insel im Dnister.","Tektonische Verwerfungen in der Nähe.","Einzigartige geologische Landschaften."], hu: ["Kilátás egy szív alakú szigetre a Dnyeszteren.","Tektonikus törésvonalak a közelben.","Egyedülálló geológiai tájak."], ro: ["Vedere spre o insulă în formă de inimă pe Nistru.","Falii tectonice în apropiere.","Peisaje geologice unice."], en: ["View of a heart-shaped island in the Dniester.","Tectonic faults nearby.","Unique geological landscapes."] }
  },
  // MD-013: Donduseni
  {
    id: "MD-013-donduseni-city",
    type: "city",
    parent: "MD-013",
    coords: [27.6103, 48.2428],
    name: { de: "Dondușeni", hu: "Dondușeni", ro: "Dondușeni", en: "Dondușeni" },
    description: { de: "Eine Verwaltungsstadt im Norden Moldaus.", hu: "Közigazgatási város Moldova északi részén.", ro: "Un oraș administrativ în nordul Moldovei.", en: "An administrative town in northern Moldova." },
    facts: { de: ["Zentrum für die Verarbeitung landwirtschaftlicher Produkte.","Wichtiger Bahnhof im Norden.","Gute Verkehrsanbindung."], hu: ["Mezőgazdasági termékek feldolgozó központja.","Fontos északi vasútállomás.","Jó közlekedési kapcsolatok."], ro: ["Centru pentru procesarea produselor agricole.","Gara importantă în nord.","Bune conexiuni de transport."], en: ["Center for processing agricultural products.","Important northern railway station.","Good transport connections."] }
  },
  {
    id: "MD-013-taul-park",
    type: "landmark",
    parent: "MD-013",
    coords: [27.6711, 48.2250],
    name: { de: "Țaul-Park", hu: "Țaul-park", ro: "Parcul Țaul", en: "Țaul Park" },
    description: { de: "Der größte dendrologische Park Moldaus mit dem Pommer-Herrenhaus.", hu: "Moldova legnagyobb dendrológiai parkja a Pommer-kastéllyal.", ro: "Cel mai mare parc dendrologic din Moldova, care găzduiește conacul Pommer.", en: "The largest dendrological park in Moldova, housing the Pommer Mansion." },
    facts: { de: ["Über 150 Baum- und Straucharten.","Historisches Herrenhaus im Zentrum.","Gepflanzt zu Beginn des 20. Jahrhunderts."], hu: ["Több mint 150 fa- és cserjefaj.","Történelmi kúria a közepén.","A 20. század elején telepítették."], ro: ["Peste 150 de specii de arbori și arbuști.","Conac istoric în centru.","Plantat la începutul secolului XX."], en: ["Over 150 species of trees and shrubs.","Historical manor in the center.","Planted at the beginning of the 20th century."] }
  },
  // MD-014: Soroca
  {
    id: "MD-014-soroca-city",
    type: "city",
    parent: "MD-014",
    coords: [28.2849, 48.1564],
    name: { de: "Soroca", hu: "Soroca", ro: "Soroca", en: "Soroca" },
    description: { de: "Historische Stadt am Dnister, bekannt als die 'Roma-Hauptstadt'.", hu: "Történelmi város a Dnyeszter partján, a 'romák fővárosaként' is ismert.", ro: "Oraș istoric pe Nistru, cunoscut drept 'capitala romilor'.", en: "Historical city on the Dniester, known as the 'Roma capital'." },
    facts: { de: ["Berühmt für das Roma-Viertel 'Gypsy Hill'.","Strategische Lage am Fluss.","Reiches kulturelles Erbe."], hu: ["Híres a 'Cigánydomb' negyedről.","Stratégiai elhelyezkedés a folyónál.","Gazdag kulturális örökség."], ro: ["Faimos pentru cartierul 'Dealul Țiganilor'.","Poziție strategică pe râu.","Moștenire culturală bogată."], en: ["Famous for the 'Gypsy Hill' district.","Strategic location on the river.","Rich cultural heritage."] }
  },
  {
    id: "MD-014-candle-gratitude",
    type: "landmark",
    parent: "MD-014",
    coords: [28.2989, 48.1358],
    name: { de: "Kerze der Dankbarkeit", hu: "Hála gyertyája", ro: "Lumânarea Recunoștinței", en: "Candle of Gratitude" },
    description: { de: "Ein monumentales Bauwerk auf einem Hügel über dem Dnister.", hu: "Monumentális építmény a Dnyeszter feletti dombon.", ro: "O structură monumentală pe un deal deasupra Nistrului.", en: "A candle of Gratitude." },
    facts: { de: ["Bietet einen weiten Blick über Moldau und Ukraine.","Ein Symbol der moldauischen Einheit.","Über 600 Stufen führen hinauf."], hu: ["Széles kilátást nyújt Moldovára és Ukrajnára.","A moldovai egység szimbóluma.","Több mint 600 lépcső vezet fel."], ro: ["Oferă o vedere panoramică asupra Moldovei și Ucrainei.","Un simbol al unității moldovenești.","Peste 600 de trepte duc până sus."], en: ["Offers a wide view over Moldova and Ukraine.","A symbol of Moldovan unity.","Over 600 steps lead to the top."] }
  },
  // MD-015: Camenca
  {
    id: "MD-015-camenca-city",
    type: "city",
    parent: "MD-015",
    coords: [28.7000, 48.0311],
    name: { de: "Camenca", hu: "Camenca", ro: "Camenca", en: "Camenca" },
    description: { de: "Eine malerische Stadt im Norden Transnistriens.", hu: "Festői város Dnyeszter Menti Köztársaság északi részén.", ro: "Un oraș pitoresc în nordul Transnistriei.", en: "A picturesque city in the north of Transnistria." },
    facts: { de: ["Bekannt für sein Sanatorium 'Dnestr'.","Gegründet im frühen 17. Jahrhundert.","Umgeben von Weinbergen und Hügeln."], hu: ["A 'Dnyeszter' szanatóriumáról ismert.","A 17. század elején alapították.","Szőlőültetvényekkel és dombokkal van körülvéve."], ro: ["Cunoscut pentru sanatoriul 'Nistru'.","Fondat la începutul secolului al XVII-lea.","Înconjurat de podgorii și dealuri."], en: ["Known for its 'Dnestr' sanatorium.","Founded in the early 17th century.","Surrounded by vineyards and hills."] }
  },
  {
    id: "MD-015-rascov-cliffs",
    type: "landmark",
    parent: "MD-015",
    coords: [28.8411, 47.9422],
    name: { de: "Rașcov-Felsen", hu: "Rașcov-sziklák", ro: "Stâncile de la Rașcov", en: "Rașcov Cliffs" },
    description: { de: "Spektakuläre Kalksteinfelsen und Ruinen in einem historischen Dorf.", hu: "Látványos mészkősziklák és romok egy történelmi faluban.", ro: "Stânci spectaculoase de calcar și ruine într-un sat istoric.", en: "Spectacular limestone cliffs and ruins in a historical village." },
    facts: { de: ["Heimat einer alten Synagoge und polnischer Kirchen.","Einzigartige Mikroklima.","Wichtiges geologisches Denkmal."], hu: ["Egy régi zsinagóga és lengyel templomok otthona.","Egyedülálló mikroklíma.","Fontos geológiai emlék."], ro: ["Adăpostește o veche sinagogă și biserici poloneze.","Microclimat unic.","Monument geologic important."], en: ["Home to an old synagogue and Polish churches.","Unique microclimate.","Important geological monument."] }
  },
  // MD-016: Rezina
  {
    id: "MD-016-rezina-city",
    type: "city",
    parent: "MD-016",
    coords: [28.9622, 47.7492],
    name: { de: "Rezina", hu: "Rezina", ro: "Rezina", en: "Rezina" },
    description: { de: "Eine Industriestadt am rechten Ufer des Dnister.", hu: "Ipari város a Dnyeszter jobb partján.", ro: "Un oraș industrial pe malul drept al Nistrului.", en: "An industrial city on the right bank of the Dniester River." },
    facts: { de: ["Zentrum der Zementherstellung.","Verknüpft durch eine Brücke mit Rîbnița.","Bedeutender Flusshafen."], hu: ["Cementgyártás központja.","Híd köti össze Rîbnițával.","Jelentős folyami kikötő."], ro: ["Centrul producției de ciment.","Conectat prin pod de Rîbnița.","Port fluvial important."], en: ["Center of cement production.","Connected by a bridge to Rîbnița.","Significant river port."] }
  },
  {
    id: "MD-016-saharna-monastery",
    type: "historical",
    parent: "MD-016",
    coords: [28.9722, 47.6961],
    name: { de: "Kloster Saharna", hu: "Saharna kolostor", ro: "Mănăstirea Saharna", en: "Saharna Monastery" },
    description: { de: "Ein bedeutendes religiöses Zentrum in einer malerischen Schlucht.", hu: "Fontos vallási központ egy festői szurdokban.", ro: "Un centru religios important situat într-un defileu pitoresc.", en: "An important religious center in a picturesque gorge." },
    facts: { de: ["Bekannt für seine Wasserfälle.","Besitzt ein Felsenkloster.","Wichtiger Wallfahrtsort."], hu: ["Vízeséseiről ismert.","Sziklakolostora van.","Fontos zarándokhely."], ro: ["Cunoscut pentru cascadele sale.","Deține o mănăstire rupestră.","Loc important de pelerinaj."], en: ["Known for its waterfalls.","Features a rock monastery.","Important pilgrimage site."] }
  },
  // MD-017: Stîngă Nistrului (Dubasari part)
  {
    id: "MD-017-dubasari-city",
    type: "city",
    parent: "MD-017",
    coords: [29.1558, 47.2661],
    name: { de: "Dubăsari", hu: "Dubăsari", ro: "Dubăsari", en: "Dubăsari" },
    description: { de: "Eine Stadt am Dnister unter transnistrischer Verwaltung.", hu: "Dnyeszter menti város transznisztriai igazgatás alatt.", ro: "Un oraș pe Nistru sub administrație transnistreană.", en: "A city on the Dniester under Transnistrian administration." },
    facts: { de: ["Besitzt ein bedeutendes Wasserkraftwerk.","Schöner Stausee in der Nähe.","Historischer Grenzpunkt."], hu: ["Jelentős vízerőműve van.","Szép víztározó a közelben.","Történelmi határpont."], ro: ["Deține o hidrocentrală importantă.","Lac de acumulare frumos în apropiere.","Punct istoric de frontieră."], en: ["Has a significant hydroelectric power plant.","Beautiful reservoir nearby.","Historical border point."] }
  },
  {
    id: "MD-017-dubasari-dam",
    type: "landmark",
    parent: "MD-017",
    coords: [29.1189, 47.2344],
    name: { de: "Dubăsari-Staudamm", hu: "Dubăsari-gát", ro: "Barajul Dubăsari", en: "Dubăsari Dam" },
    description: { de: "Ein imposanter Staudamm, der den Dubăsari-Stausee bildet.", hu: "Impozáns gát, amely a Dubăsari-víztározót alkotja.", ro: "Un baraj impunător care formează lacul de acumulare Dubăsari.", en: "An impressive dam forming the Dubăsari reservoir." },
    facts: { de: ["Ältester Staudamm am Dnister.","Wichtige Energiequelle der Region.","Erzeugt einen großen künstlichen See."], hu: ["A Dnyeszter legrégebbi gátja.","A régió fontos energiaforrása.","Nagy mesterséges tavat hoz létre."], ro: ["Cel mai vechi baraj de pe Nistru.","Sursă importantă de energie pentru regiune.","Creează un lac artificial mare."], en: ["Oldest dam on the Dniester.","Important energy source for the region.","Creates a large artificial lake."] }
  },
  // MD-018: Grigoriopol
  {
    id: "MD-018-grigoriopol-city",
    type: "city",
    parent: "MD-018",
    coords: [29.3000, 47.1500],
    name: { de: "Grigoriopol", hu: "Grigoriopol", ro: "Grigoriopol", en: "Grigoriopol" },
    description: { de: "Eine Stadt im zentralen Transnistrien mit armenischem Erbe.", hu: "Város Transznisztria középső részén, örmény gyökerekkel.", ro: "Un oraș în centrul Transnistriei, cu moștenire armeană.", en: "A city in central Transnistria with Armenian heritage." },
    facts: { de: ["Gegründet von armenischen Siedlern.","Bekannt für sein kulturelles Festival.","Landwirtschaftliches Zentrum."], hu: ["Örmény telepesek alapították.","Kulturális fesztiváljáról ismert.","Mezőgazdasági központ."], ro: ["Fondat de coloniști armeni.","Cunoscut pentru festivalul său cultural.","Centru agricol."], en: ["Founded by Armenian settlers.","Known for its cultural festival.","Agricultural center."] }
  },
  {
    id: "MD-018-doibani-winery",
    type: "agriculture",
    parent: "MD-018",
    coords: [29.2000, 47.3833],
    name: { de: "Doibani-Weinkeller", hu: "Doibani borászat", ro: "Vinăria Doibani", en: "Doibani Winery" },
    description: { de: "Ein bedeutender Weinproduzent in der Region Grigoriopol.", hu: "Jelentős bortermelő Grigoriopol régiójában.", ro: "Un producător important de vin din regiunea Grigoriopol.", en: "A significant wine producer in the Grigoriopol region." },
    facts: { de: ["Lieferant für die KVINT-Destillerie.","Große Weinbauflächen.","Modernisierte Produktion."], hu: ["A KVINT lepárló beszállítója.","Nagy szőlőterületek.","Modernizált termelés."], ro: ["Furnizor pentru distileria KVINT.","Suprafețe mari de viță de vie.","Producție modernizată."], en: ["Supplier for the KVINT distillery.","Large vineyard areas.","Modernized production."] }
  },
  // MD-019: Bender
  {
    id: "MD-019-bender-city",
    type: "city",
    parent: "MD-019",
    coords: [29.4731, 46.8258],
    name: { de: "Bender", hu: "Bender", ro: "Bender", en: "Bender" },
    description: { de: "Eine historisch bedeutsame Stadt am rechten Ufer des Dnister.", hu: "Történelmileg jelentős város a Dnyeszter jobb partján.", ro: "Un oraș de importanță istorică situat pe malul drept al Nistrului.", en: "A historically significant city located on the right bank of the Dniester River." },
    facts: { de: ["Auch bekannt als Tighina.","Ort wichtiger historischer Schlachten.","Besitzt eine gut erhaltene Altstadt."], hu: ["Tighina néven is ismert.","Fontos történelmi csaták helyszíne.","Jól megőrzött óvárosa van."], ro: ["Cunoscut și sub numele de Tighina.","Locul unor bătălii istorice importante.","Deține un oraș vechi bine conservat."], en: ["Also known as Tighina.","Site of important historical battles.","Has a well-preserved old town."] }
  },
  {
    id: "MD-019-bender-fortress",
    type: "historical",
    parent: "MD-019",
    coords: [29.4883, 46.8306],
    name: { de: "Festung Bender", hu: "Bender erőd", ro: "Cetatea Bender", en: "Bender Fortress" },
    description: { de: "Eine massive osmanische Festung aus dem 16. Jahrhundert.", hu: "Hatalmas, 16. századi oszmán erőd.", ro: "O cetate otomană masivă din secolul al XVI-lea.", en: "A massive 16th-century Ottoman fortress." },
    facts: { de: ["Entworfen von Sinan.","Beherbergt ein Militärmuseum.","Eine der Top-Touristenattraktionen Moldaus."], hu: ["Sinan tervezte.","Katonai múzeumnak ad otthont.","Moldova egyik legfőbb turisztikai látványossága."], ro: ["Proiectată de Sinan.","Găzduiește un muzeu militar.","Una dintre atracțiile turistice de top din Moldova."], en: ["Designed by Sinan.","Houses a military museum.","One of the top tourist attractions in Moldova."] }
  },
  // MD-020: Ștefan Vodă
  {
    id: "MD-020-stefan-voda-city",
    type: "city",
    parent: "MD-020",
    coords: [29.6617, 46.5133],
    name: { de: "Ștefan Vodă", hu: "Ștefan Vodă", ro: "Ștefan Vodă", en: "Ștefan Vodă" },
    description: { de: "Eine Verwaltungsstadt im Südosten Moldaus, benannt nach Stefan dem Großen.", hu: "Közigazgatási város Moldova délkeleti részén, Nagy István után elnevezve.", ro: "Un oraș administrativ în sud-estul Moldovei, numit după Ștefan cel Mare.", en: "An administrative city in southeastern Moldova, named after Stephen the Great." },
    facts: { de: ["Früher Suworow genannt.","Zentrum einer bedeutenden Weinregion.","Moderner Stadtpark."], hu: ["Korábban Szuvorovnak hívták.","Fontos borvidék központja.","Modern városi park."], ro: ["Numit anterior Suvorov.","Centrul unei regiuni viticole importante.","Parc orășenesc modern."], en: ["Formerly called Suvorov.","Center of an important wine region.","Modern city park."] }
  },
  {
    id: "MD-020-purcari-winery",
    type: "agriculture",
    parent: "MD-020",
    coords: [29.8667, 46.5333],
    name: { de: "Weingut Purcari", hu: "Purcari borászat", ro: "Vinăria Purcari", en: "Purcari Winery" },
    description: { de: "Eines der ältesten und renommiertesten Weingüter Moldaus.", hu: "Moldova egyik legrégebbi és legnevesebb borászata.", ro: "Una dintre cele mai vechi și renumite vinării din Moldova.", en: "One of the oldest and most prestigious wineries in Moldova." },
    facts: { de: ["Berühmt für den Wein 'Negru de Purcari'.","Gegründet 1827.","Beliefert europäische Königshäuser."], hu: ["Híres a 'Negru de Purcari' borról.","1827-ben alapították.","Európai királyi udvarok beszállítója."], ro: ["Faimoasă pentru vinul 'Negru de Purcari'.","Fondată în 1827.","Furnizor al caselor regale din Europa."], en: ["Famous for 'Negru de Purcari' wine.","Founded in 1827.","Supplier to European royal courts."] }
  },
  // MD-021: Causeni
  {
    id: "MD-021-causeni-city",
    type: "city",
    parent: "MD-021",
    coords: [29.4125, 46.6406],
    name: { de: "Căușeni", hu: "Căușeni", ro: "Căușeni", en: "Căușeni" },
    description: { de: "Eine Stadt mit tiefen historischen Wurzeln im Südosten.", hu: "Mély történelmi gyökerekkel rendelkező város délkeleten.", ro: "Un oraș cu rădăcini istorice adânci în sud-est.", en: "A city with deep historical roots in the southeast." },
    facts: { de: ["Historisches Handelszentrum.","Zentrum der Agrarindustrie.","Gute Bahnanbindung."], hu: ["Történelmi kereskedelmi központ.","Agráripari központ.","Jó vasúti összeköttetés."], ro: ["Centru comercial istoric.","Centrul industriei agricole.","Bune conexiuni feroviare."], en: ["Historical trade center.","Agricultural industry center.","Good railway connections."] }
  },
  {
    id: "MD-021-assumption-church",
    type: "historical",
    parent: "MD-021",
    coords: [29.4100, 46.6450],
    name: { de: "Mariä-Entschlafens-Kirche", hu: "Mária elszenderülése templom", ro: "Biserica Adormirea Maicii Domnului", en: "Assumption of the Virgin Mary Church" },
    description: { de: "Eine einzigartige, halb im Boden versenkte mittelalterliche Kirche.", hu: "Egyedülálló, félig földbe süllyesztett középkori templom.", ro: "O biserică medievală unică, pe jumătate îngropată în pământ.", en: "A unique, semi-buried medieval church." },
    facts: { de: ["Einzigartige Fresken aus dem 18. Jahrhundert.","Architektonische Besonderheit aufgrund osmanischer Vorschriften.","Nationales Kulturdenkmal."], hu: ["Egyedülálló 18. századi freskók.","Építészeti különlegesség az oszmán szabályozás miatt.","Nemzeti kulturális műemlék."], ro: ["Fresce unice din secolul al XVIII-lea.","Particularitate arhitecturală din cauza restricțiilor otomane.","Monument cultural național."], en: ["Unique 18th-century frescoes.","Architectural curiosity due to Ottoman restrictions.","National cultural monument."] }
  },
  // MD-022: Cimişlia
  {
    id: "MD-022-cimislia-city",
    type: "city",
    parent: "MD-022",
    coords: [28.7600, 46.5200],
    name: { de: "Cimișlia", hu: "Cimișlia", ro: "Cimișlia", en: "Cimișlia" },
    description: { de: "Eine Stadt an der Kreuzung wichtiger Handelswege im Süden.", hu: "Város fontos dél-moldovai kereskedelmi utak kereszteződésében.", ro: "Un oraș situat la intersecția unor drumuri comerciale importante din sud.", en: "A city at the crossroads of important trade routes in the south." },
    facts: { de: ["Bedeutendes Zentrum der Wein- und Käseproduktion.","Historischer Marktplatz.","Verwaltungssitz des Rajons."], hu: ["Jelentős bor- és sajttermelő központ.","Történelmi piactér.","A járás közigazgatási székhelye."], ro: ["Centru important de producție a vinului și brânzei.","Piață istorică.","Reședința administrativă a raionului."], en: ["Significant center for wine and cheese production.","Historical marketplace.","Administrative seat of the district."] }
  },
  {
    id: "MD-022-gradistea-nature",
    type: "landmark",
    parent: "MD-022",
    coords: [28.7500, 46.6000],
    name: { de: "Gradistea-Landschaft", hu: "Gradistea tájvédelmi terület", ro: "Rezervația peisajistică Grădiștea", en: "Gradistea Landscape Reserve" },
    description: { de: "Ein malerisches Naturschutzgebiet mit archäologischen Spuren.", hu: "Festői természetvédelmi terület régészeti maradványokkal.", ro: "O rezervație peisajistică pitorească cu urme arheologice.", en: "A picturesque landscape reserve with archaeological remains." },
    facts: { de: ["Überreste antiker Befestigungen.","Vielfältige Flora und Fauna.","Beliebt für ländlichen Tourismus."], hu: ["Ókori erődítmények maradványai.","Változatos növény- és állatvilág.","Népszerű a falusi turizmus körében."], ro: ["Rămășițe ale unor fortificații antice.","Floră și faună diversă.","Populară pentru turismul rural."], en: ["Remains of ancient fortifications.","Diverse flora and fauna.","Popular for rural tourism."] }
  },
  // MD-023: Basarabeasca
  {
    id: "MD-023-basarabeasca-city",
    type: "city",
    parent: "MD-023",
    coords: [28.9667, 46.3333],
    name: { de: "Basarabeasca", hu: "Basarabeasca", ro: "Basarabeasca", en: "Basarabeasca" },
    description: { de: "Eine Stadt an der Grenze zur Ukraine, bekannt für ihre Eisenbahngeschichte.", hu: "Város az ukrán határon, vasúttörténetéről ismert.", ro: "Un oraș la granița cu Ucraina, cunoscut pentru istoria sa feroviară.", en: "A city on the Ukrainian border, known for its railway history." },
    facts: { de: ["Wichtiger Eisenbahnknotenpunkt.","Gegründet als Bahnhofssiedlung.","Multikulturelle Grenzgemeinde."], hu: ["Fontos vasúti csomópont.","Vasúti településként alapították.","Multikulturális határmenti közösség."], ro: ["Nod feroviar important.","Fondat ca așezare feroviară.","Comunitate de frontieră multiculturală."], en: ["Important railway junction.","Founded as a railway settlement.","Multicultural border community."] }
  },
  {
    id: "MD-023-abaclia-village",
    type: "landmark",
    parent: "MD-023",
    coords: [28.9333, 46.3500],
    name: { de: "Abaclia", hu: "Abaclia", ro: "Abaclia", en: "Abaclia" },
    description: { de: "Ein großes historisches Dorf mit starken landwirtschaftlichen Traditionen.", hu: "Nagy történelmi falu erős mezőgazdasági hagyományokkal.", ro: "Un sat istoric mare, cu tradiții agricole puternice.", en: "A large historical village with strong agricultural traditions." },
    facts: { de: ["Bekannt für seine Weinberge.","Historische Kirche im Zentrum.","Traditionelle moldauische Feste."], hu: ["Szőlőültetvényeiről ismert.","Történelmi templom a központban.","Hagyományos moldovai ünnepek."], ro: ["Cunoscut pentru podgoriile sale.","Biserică istorică în centru.","Sărbători tradiționale moldovenești."], en: ["Known for its vineyards.","Historical church in the center.","Traditional Moldovan festivals."] }
  },
  // MD-024: Taraclia
  {
    id: "MD-024-taraclia-city",
    type: "city",
    parent: "MD-024",
    coords: [28.6667, 45.9000],
    name: { de: "Taraclia", hu: "Taraclia", ro: "Taraclia", en: "Taraclia" },
    description: { de: "Das Zentrum der bulgarischen Minderheit in Moldau.", hu: "A moldovai bolgár kisebbség központja.", ro: "Centrul minorității bulgare din Moldova.", en: "The center of the Bulgarian minority in Moldova." },
    facts: { de: ["Sitz einer bulgarischen Universität.","Bekannt für bulgarische Folklore und Küche.","Bedeutendes Weinbauzentrum."], hu: ["Bolgár egyetem székhelye.","Bolgár folklórjáról és konyhájáról ismert.","Jelentős borászati központ."], ro: ["Sediul unei universități bulgare.","Cunoscut pentru folclorul și bucătăria bulgară.","Centru viticol important."], en: ["Seat of a Bulgarian university.","Known for Bulgarian folklore and cuisine.","Significant wine-growing center."] }
  },
  {
    id: "MD-024-taraclia-reservoir",
    type: "landmark",
    parent: "MD-024",
    coords: [28.6000, 45.9500],
    name: { de: "Taraclia-Stausee", hu: "Taracliai-víztározó", ro: "Lacul de acumulare Taraclia", en: "Taraclia Reservoir" },
    description: { de: "Ein großer künstlicher See zur Bewässerung im Süden.", hu: "Nagy mesterséges tó öntözési célokra délen.", ro: "Un lac artificial mare pentru irigații în sud.", en: "A large artificial lake for irrigation in the south." },
    facts: { de: ["Beliebter Ort zum Angeln.","Wichtige Wasserquelle für die Landwirtschaft.","Naturbeobachtung am Ufer."], hu: ["Népszerű horgászhely.","Fontos vízforrás a mezőgazdaság számára.","Természetfigyelés a parton."], ro: ["Loc popular pentru pescuit.","Sursă importantă de apă pentru agricultură.","Observarea naturii pe mal."], en: ["Popular spot for fishing.","Important water source for agriculture.","Nature watching on the shores."] }
  },
  // MD-025: Comrat
  {
    id: "MD-025-comrat-city",
    type: "city",
    parent: "MD-025",
    coords: [28.6575, 46.3006],
    name: { de: "Comrat", hu: "Comrat", ro: "Comrat", en: "Comrat" },
    description: { de: "Die Hauptstadt der Autonomen Region Gagausien.", hu: "Gagauzia autonóm régió fővárosa.", ro: "Capitala Regiunii Autonome Găgăuzia.", en: "The capital of the Autonomous Region of Gagauzia." },
    facts: { de: ["Zentrum der gagausischen Kultur.","Besitzt eine eigene Universität.","Wichtiger Wirtschaftsstandort im Süden."], hu: ["A gagauz kultúra központja.","Saját egyeteme van.","Fontos déli gazdasági központ."], ro: ["Centrul culturii găgăuze.","Deține propria universitate.","Locație economică importantă în sud."], en: ["Center of Gagauzian culture.","Has its own university.","Important economic hub in the south."] }
  },
  {
    id: "MD-025-besalma-museum",
    type: "historical",
    parent: "MD-025",
    coords: [28.6511, 46.1733],
    name: { de: "Nationalmuseum für gagausische Geschichte", hu: "Gagauz Történeti és Néprajzi Múzeum", ro: "Muzeul Național de Istorie și Etnografie din Beșalma", en: "Besalma National Museum of Gagauz History" },
    description: { de: "Ein bedeutendes Museum, das die Geschichte der Gagausen bewahrt.", hu: "Fontos múzeum, amely a gagauzok történelmét őrzi.", ro: "Un muzeum important care conservă istoria găgăuzilor.", en: "An important museum preserving the history of the Gagauz people." },
    facts: { de: ["Gegründet von Dmitri Kara-Tschoban.","Umfangreiche ethnographische Sammlung.","Gelegen im traditionellen Dorf Beșalma."], hu: ["Dmitri Kara-Csoban alapította.","Kiterjedt néprajzi gyűjtemény.","A tradicionális Beșalma faluban található."], ro: ["Fondat de Dmitri Kara-Cioban.","Colecție etnografică vastă.","Situat în satul tradițional Beșalma."], en: ["Founded by Dmitri Kara-Cioban.","Extensive ethnographic collection.","Located in the traditional village of Besalma."] }
  },
  // MD-026: Criuleni
  {
    id: "MD-026-criuleni-city",
    type: "city",
    parent: "MD-026",
    coords: [29.1558, 47.2131],
    name: { de: "Criuleni", hu: "Criuleni", ro: "Criuleni", en: "Criuleni" },
    description: { de: "Eine Stadt am rechten Ufer des Dnister, nördlich von Chișinău.", hu: "Város a Dnyeszter jobb partján, Chișinăutól északra.", ro: "Un oraș pe malul drept al Nistrului, la nord de Chișinău.", en: "A city on the right bank of the Dniester River, north of Chișinău." },
    facts: { de: ["Bekannt für seinen Flusshafen.","Zentrum der lokalen Verwaltung.","Beliebtes Erholungsgebiet am Fluss."], hu: ["Folyami kikötőjéről ismert.","A helyi közigazgatás központja.","Népszerű üdülőhely a folyónál."], ro: ["Cunoscut pentru portul său fluvial.","Centru al administrației locale.","Zonă de recreere populară pe râu."], en: ["Known for its river port.","Center of local administration.","Popular recreation area by the river."] }
  },
  {
    id: "MD-026-surprise-cave",
    type: "landmark",
    parent: "MD-026",
    coords: [29.1500, 47.2333],
    name: { de: "Höhle der Überraschungen", hu: "Meglepetések barlangja", ro: "Peștera Surprizelor", en: "Cave of Surprises" },
    description: { de: "Die zweitgrößte Höhle Moldaus, gelegen im Dnister-Tal.", hu: "Moldova második legnagyobb barlangja a Dnyeszter-völgyben.", ro: "A doua cea mai mare peșteră din Moldova, situată în valea Nistrului.", en: "The second largest cave in Moldova, located in the Dniester valley." },
    facts: { de: ["Über 1.700 Meter lang.","Entstanden durch tektonische Bewegungen.","Beliebt bei Höhlenforschern."], hu: ["Több mint 1700 méter hosszú.","Tektonikus mozgások hozták létre.","Barlangkutatók kedvelt helye."], ro: ["Peste 1.700 de metri lungime.","Formată prin mișcări tectonice.","Populară printre speologi."], en: ["Over 1,700 meters long.","Formed by tectonic movements.","Popular with cavers."] }
  },
  // MD-027: Străşeni
  {
    id: "MD-027-straseni-city",
    type: "city",
    parent: "MD-027",
    coords: [28.6103, 47.1414],
    name: { de: "Strășeni", hu: "Strășeni", ro: "Strășeni", en: "Strășeni" },
    description: { de: "Ein Industriezentrum im Herzen des Codru-Waldes.", hu: "Ipari központ a Codru-erdő szívében.", ro: "Un centru industrial în inima pădurii Codru.", en: "An industrial center in the heart of the Codru forest." },
    facts: { de: ["Wichtiges Zentrum der Möbel- und Holzindustrie.","Liegt an der Hauptstrecke nach Chișinău.","Umgeben von üppiger Natur."], hu: ["Bútor- és faipar fontos központja.","A Chișinăuba vezető főút mentén fekszik.","Dús természet veszi körül."], ro: ["Centru important al industriei de mobilier și prelucrare a lemnului.","Situat pe ruta principală spre Chișinău.","Înconjurat de o natură bogată."], en: ["Important center of the furniture and wood industry.","Located on the main route to Chișinău.","Surrounded by lush nature."] }
  },
  {
    id: "MD-027-capriana-monastery",
    type: "historical",
    parent: "MD-027",
    coords: [28.3000, 47.1167],
    name: { de: "Kloster Căpriana", hu: "Căpriana kolostor", ro: "Mănăstirea Căpriana", en: "Căpriana Monastery" },
    description: { de: "Eines der ältesten und bedeutendsten Klöster Moldaus.", hu: "Moldova egyik legrégebbi és legjelentősebb kolostora.", ro: "Una dintre cele mai vechi și mai importante mănăstiri din Moldova.", en: "One of the oldest and most important monasteries in Moldova." },
    facts: { de: ["Gegründet im 15. Jahrhundert.","Lange Zeit Sitz des moldauischen Metropoliten.","Meisterwerk der moldauischen Architektur."], hu: ["A 15. században alapították.","Hosszú ideig a moldovai metropolita székhelye volt.","A moldovai építészet remekműve."], ro: ["Fondată în secolul al XV-lea.","Mult timp reședința mitropolitului Moldovei.","Capodoperă a arhitecturii moldovenești."], en: ["Founded in the 15th century.\",\"Long-time seat of the Moldovan Metropolitan.","Masterpiece of Moldovan architecture."] }
  },
  // MD-028: Anenii Noi
  {
    id: "MD-028-anenii-noi-city",
    type: "city",
    parent: "MD-028",
    coords: [29.2333, 46.8833],
    name: { de: "Anenii Noi", hu: "Anenii Noi", ro: "Anenii Noi", en: "Anenii Noi" },
    description: { de: "Eine strategisch günstig gelegene Stadt östlich der Hauptstadt.", hu: "Stratégiai elhelyezkedésű város a fővárostól keletre.", ro: "Un oraș situat strategic la est de capitală.", en: "A strategically located city east of the capital." },
    facts: { de: ["Wichtiger Verkehrsknotenpunkt.","Zentrum der Lebensmittelindustrie.","Multikulturelle Bevölkerung."], hu: ["Fontos közlekedési csomópont.","Élelmiszeripar központja.","Multikulturális lakosság."], ro: ["Nod important de transport.","Centrul industriei alimentare.","Populație multiculturală."], en: ["Important transport hub.","Center of the food industry.","Multicultural population."] }
  },
  {
    id: "MD-028-serpeni-bridgehead",
    type: "historical",
    parent: "MD-028",
    coords: [29.3511, 47.0222],
    name: { de: "Gedenkstätte Șerpeni", hu: "Șerpeni emlékmű", ro: "Complexul Memorial Capul de Pod Șerpeni", en: "Șerpeni Bridgehead Memorial" },
    description: { de: "Ein bedeutendes Denkmal zur Erinnerung an die Schlachten des Zweiten Weltkriegs.", hu: "Jelentős emlékmű a második világháborús csaták emlékére.", ro: "Un monument important în memoria bătăliilor din Al Doilea Război Mondial.", en: "A significant memorial commemorating the battles of World War II." },
    facts: { de: ["Ort einer der blutigsten Offensiven 1944.","Bietet einen weiten Blick über den Dnister.","Eindrucksvolle Architektur."], hu: ["1944 egyik legvéresebb offenzívájának helyszíne.","Széles kilátást nyújt a Dnyeszterre.","Lenyűgöző építészet."], ro: ["Locul uneia dintre cele mai sângeroase ofensive din 1944.","Oferă o vedere panoramică asupra Nistrului.","Arhitectură impresionantă."], en: ["Site of one of the bloodiest offensives in 1944.","Offers a vast view over the Dniester River.","Impressive architecture."] }
  },
  // MD-029: Orhei
  {
    id: "MD-029-orhei-city",
    type: "city",
    parent: "MD-029",
    coords: [28.8167, 47.3833],
    name: { de: "Orhei", hu: "Orhei", ro: "Orhei", en: "Orhei" },
    description: { de: "Eine dynamische Stadt mit reichen historischen Wurzeln.", hu: "Dinamikus város gazdag történelmi gyökerekkel.", ro: "Un oraș dinamic cu rădăcini istorice bogate.", en: "A dynamic city with rich historical roots." },
    facts: { de: ["Wirtschaftliches Zentrum Zentralmoldaus.","Historische St.-Dumitru-Kirche.","Berühmt für lokale Wein- und Kulturfeste."], hu: ["Közép-Moldova gazdasági központja.","Történelmi Szent Dumitru templom.","Híres a helyi bor- és kulturális fesztiválokról."], ro: ["Centrul economic al Moldovei Centrale.","Biserica istorică Sf. Dumitru.","Faimos pentru festivalurile locale de vin și cultură."], en: ["Economic center of Central Moldova.","Historical St. Dumitru Church.","Famous for local wine and cultural festivals."] }
  },
  {
    id: "MD-029-curchi-monastery",
    type: "historical",
    parent: "MD-029",
    coords: [28.6500, 47.3333],
    name: { de: "Kloster Curchi", hu: "Curchi kolostor", ro: "Mănăstirea Curchi", en: "Curchi Monastery" },
    description: { de: "Eines der schönsten architektonischen Ensembles Moldaus.", hu: "Moldova egyik legszebb építészeti együttese.", ro: "Unul dintre cele mai frumoase ansambluri arhitecturale din Moldova.", en: "One of the most beautiful architectural ensembles in Moldova." },
    facts: { de: ["Bekannt für die rote Kathedrale.","Gelegen in einer malerischen Waldlandschaft.","Umfassend restauriert."], hu: ["Vörös katedrálisáról ismert.","Festői erdei környezetben található.","Teljeskörűen felújították."], ro: ["Cunoscută pentru catedrala roșie.","Situată într-un cadru forestier pitoresc.","Restaurată în totalitate."], en: ["Known for its red cathedral.","Located in a picturesque forest setting.","Extensively restored."] }
  },
  // MD-030: Transnistria (Tiraspol part)
  {
    id: "MD-030-tiraspol-city",
    type: "city",
    parent: "MD-030",
    coords: [29.6322, 46.8353],
    name: { de: "Tiraspol", hu: "Tiraszpol", ro: "Tiraspol", en: "Tiraspol" },
    description: { de: "Die Hauptstadt Transnistriens, geprägt von sowjetischer Architektur.", hu: "Transznisztria fővárosa, szovjet kori építészet jellemzi.", ro: "Capitala Transnistriei, caracterizată de arhitectura sovietică.", en: "The capital of Transnistria, characterized by Soviet-era architecture." },
    facts: { de: ["Gegründet von Alexander Suworow.","Zentrum der transnistrischen Regierung.","Bekannt für den Fußballverein Sheriff Tiraspol."], hu: ["Alekszandr Szuvorov alapította.","A transznisztriai kormányzat központja.","A Sheriff Tiraspol focicsapatáról is ismert."], ro: ["Fondat de Alexandr Suvorov.","Centrul guvernului transnistrean.","Cunoscut pentru echipa de fotbal Sheriff Tiraspol."], en: ["Founded by Alexander Suvorov.","Center of the Transnistrian government.","Known for the Sheriff Tiraspol football club."] }
  },
  {
    id: "MD-030-kvint-distillery",
    type: "landmark",
    parent: "MD-030",
    coords: [29.6289, 46.8383],
    name: { de: "KVINT-Destillerie", hu: "KVINT lepárló", ro: "Distileria KVINT", en: "KVINT Distillery" },
    description: { de: "Ein weltweit bekannter Produzent von Weinbrand (Divin).", hu: "Világszerte ismert borpárlat (Divin) gyártó.", ro: "Un producător de brandy (Divin) cunoscut în întreaga lume.", en: "A world-renowned producer of brandy (Divin)." },
    facts: { de: ["Älteste Fabrik der Region (seit 1897).","Umfangreiche Kelleranlagen.","Über 20 Millionen Flaschen Jahresproduktion."], hu: ["A régió legrégebbi üzeme (1897 óta).","Kiterjedt pincérendszer.","Évi több mint 20 millió palackos termelés."], ro: ["Cea mai veche fabrică din regiune (din 1897).","Instalații de pivniță vaste.","Producție anuală de peste 20 de milioane de sticle."], en: ["Oldest factory in the region (since 1897).","Extensive cellar facilities.","Annual production of over 20 million bottles."] }
  },
  // MD-031: Chişinău
  {
    id: "MD-031-chisinau-city",
    type: "city",
    parent: "MD-031",
    coords: [28.8638, 47.0105],
    name: { de: "Chișinău", hu: "Chișinău", ro: "Chișinău", en: "Chișinău" },
    description: { de: "Das pulsierende Herz Moldaus, eine grüne und moderne Hauptstadt.", hu: "Moldova lüktető szíve, zöld és modern főváros.", ro: "Inima vibrantă a Moldovei, o capitală verde și modernă.", en: "The vibrant heart of Moldova, a green and modern capital." },
    facts: { de: ["Größte Stadt des Landes.","Bekannt als 'Stadt aus weißem Stein'.","Wichtigstes politisches und kulturelles Zentrum."], hu: ["Az ország legnagyobb városa.","'Fehér kő városa' néven is ismert.","Legfontosabb politikai és kulturális központ."], ro: ["Cel mai mare oraș din țară.","Cunoscut sub numele de 'orașul din piatră albă'.","Cel mai important centru politic și cultural."], en: ["Largest city in the country.","Known as the 'City of White Stone'.","Most important political and cultural center."] }
  },
  {
    id: "MD-031-triumphal-arch",
    type: "landmark",
    parent: "MD-031",
    coords: [28.8319, 47.0244],
    name: { de: "Triumphbogen", hu: "Diadalív", ro: "Arcul de Triumf", en: "Triumphal Arch" },
    description: { de: "Ein markantes Wahrzeichen im Stadtzentrum von Chișinău.", hu: "Jellegzetes jelkép Chișinău városközpontjában.", ro: "Un monument emblematic în centrul Chișinăului.", en: "A prominent landmark in the center of Chișinău." },
    facts: { de: ["Errichtet 1840 zum Sieg über die Osmanen.","Beherbergt eine riesige Glocke.","Liegt gegenüber der Kathedrale."], hu: ["1840-ben emelték az oszmánok feletti győzelem emlékére.","Egy hatalmas harangnak ad otthont.","A katedrálissal szemben található."], ro: ["Ridicat în 1840 pentru a marca victoria asupra otomanilor.","Adăpostește un clopot uriaș.","Situat vizavi de Catedrală."], en: ["Built in 1840 to commemorate victory over the Ottomans.","Houses a huge bell.","Located opposite the Cathedral."] }
  },
  // MD-032: Teleneşti
  {
    id: "MD-032-telenesti-city",
    type: "city",
    parent: "MD-032",
    coords: [28.3611, 47.5000],
    name: { de: "Telenești", hu: "Telenești", ro: "Telenești", en: "Telenești" },
    description: { de: "Eine Stadt im Zentrum Moldaus mit historischer Bedeutung.", hu: "Történelmi jelentőségű város Moldova középső részén.", ro: "Un oraș de importanță istorică în centrul Moldovei.", en: "A city of historical importance in central Moldova." },
    facts: { de: ["Früher ein wichtiges jüdisches Zentrum (Schtetl).","Agrarisch geprägte Region.","Gute Straßenanbindung nach Norden."], hu: ["Korábban fontos zsidó központ (stetl).","Mezőgazdasági jellegű régió.","Jó közúti kapcsolat észak felé."], ro: ["Fost centru evreiesc important (ștetl).","Regiune cu profil agricol.","Bune legături rutiere spre nord."], en: ["Formerly an important Jewish center (shtetl).","Agriculturally oriented region.","Good road links to the north."] }
  },
  {
    id: "MD-032-inesti-nature",
    type: "landmark",
    parent: "MD-032",
    coords: [28.4000, 47.4833],
    name: { de: "Inești-Landschaft", hu: "Inești tájvédelmi körzet", ro: "Rezervația peisajistică Inești", en: "Inești Landscape Reserve" },
    description: { de: "Ein malerisches Naturschutzgebiet in der Nähe von Telenești.", hu: "Festői természetvédelmi terület Telenești közelében.", ro: "O rezervație peisajistică pitorească lângă Telenești.", en: "A picturesque landscape reserve near Telenești." },
    facts: { de: ["Sanft geschwungene Hügel.","Reiche Waldflora.","Beliebt für ländliche Spaziergänge."], hu: ["Lágy lankás dombok.","Gazdag erdei flóra.","Népszerű a vidéki sétákhoz."], ro: ["Dealuri cu pante line.","Floră forestieră bogată.","Populară pentru plimbări rurale."], en: ["Gently rolling hills.","Rich forest flora.","Popular for rural walks."] }
  },
  // MD-033: Şoldăneşti
  {
    id: "MD-033-soldanesti-city",
    type: "city",
    parent: "MD-033",
    coords: [28.8000, 47.8167],
    name: { de: "Șoldănești", hu: "Șoldănești", ro: "Șoldănești", en: "Șoldănești" },
    description: { de: "Eine kleine Stadt im Nordosten Moldaus am Dnister-Einzugsgebiet.", hu: "Kisváros Moldova északkeleti részén, a Dnyeszter vízgyűjtő területén.", ro: "Un oraș mic în nord-estul Moldovei, în bazinul Nistrului.", en: "A small town in northeastern Moldova in the Dniester catchment area." },
    facts: { de: ["Zentrum des gleichnamigen Rajons.","Wichtiger Bahnhof an der Nordstrecke.","Region mit vielversprechendem Tourismuspotential."], hu: ["Az azonos nevű járás központja.","Fontos északi vasútállomás.","Ígéretes turisztikai potenciállal rendelkező régió."], ro: ["Centrul raionului cu același nume.","Gara importantă pe ruta de nord.","Regiune cu potențial turistic promițător."], en: ["Center of the district of the same name.","Important northern railway station.","Region with promising tourism potential."] }
  },
  {
    id: "MD-033-poiana-curtii",
    type: "landmark",
    parent: "MD-033",
    coords: [28.7167, 47.7833],
    name: { de: "Poiana-Curții-Wald", hu: "Poiana Curții erdő", ro: "Pădurea Poiana Curții", en: "Poiana Curții Forest" },
    description: { de: "Ein geschütztes Waldgebiet mit wertvollen Baumarten.", hu: "Védett erdőség értékes fafajokkal.", ro: "O zonă forestieră protejată cu specii de arbori valoroase.", en: "A protected forest area with valuable tree species." },
    facts: { de: ["Teil des moldauischen Nationalerbes.","Seltener Bestand an Traubeneichen.","Rückzugsort für viele Waldtiere."], hu: ["A moldovai nemzeti örökség része.","Ritka kocsánytalan tölgyes.","Számos erdei állat menedéke."], ro: ["Parte a patrimoniului național moldovenesc.","Specimen rar de gorun.","Refugiu pentru multe animale de pădure."], en: ["Part of the Moldovan national heritage.","Rare stand of sessile oaks.","Refuge for many forest animals."] }
  },
  // MD-034: Floreşti
  {
    id: "MD-034-floresti-city",
    type: "city",
    parent: "MD-034",
    coords: [28.3011, 47.8933],
    name: { de: "Florești", hu: "Florești", ro: "Florești", en: "Florești" },
    description: { de: "Eine bedeutende Industriestadt im Norden am Fluss Răut.", hu: "Jelentős ipari város északon, a Răut-folyó partján.", ro: "Un oraș industrial important în nord, pe râul Răut.", en: "A significant industrial city in the north on the Răut River." },
    facts: { de: ["Großer Eisenbahnknotenpunkt.","Zentrum der Glas- und Lebensmittelindustrie.","Multikulturelle Gemeinde."], hu: ["Nagy vasúti csomópont.","Üveg- és élelmiszeripar központja.","Multikulturális közösség."], ro: ["Nod feroviar mare.","Centrul industriei sticlei și alimentare.","Comunitate multiculturală."], en: ["Large railway junction.","Center of the glass and food industries.","Multicultural community."] }
  },
  {
    id: "MD-034-japca-monastery",
    type: "historical",
    parent: "MD-034",
    coords: [28.7100, 47.9900],
    name: { de: "Kloster Japca", hu: "Japca kolostor", ro: "Mănăstirea Japca", en: "Japca Monastery" },
    description: { de: "Ein Frauenkloster am Dnister, bekannt für seine Beständigkeit.", hu: "Női kolostor a Dnyeszter partján, állhatatosságáról ismert.", ro: "O mănăstire de maici pe Nistru, cunoscută pentru continuitatea sa.", en: "A nunnery on the Dniester, known for its persistence." },
    facts: { de: ["Einziges Kloster, das während der Sowjetzeit nie geschlossen wurde.","Beherbergt ein Felsenkloster.","Hübsche Quellen in der Umgebung."], hu: ["Az egyetlen kolostor, amelyet a szovjet időkben sosem zártak be.","Sziklakolostora is van.","Szép források a környéken."], ro: ["Singura mănăstire care nu a fost închisă niciodată în perioada sovietică.","Deține o mănăstire rupestră.","Izvoare frumoase în împrejurimi."], en: ["The only monastery that was never closed during the Soviet era.","Features a rock monastery.","Pretty springs in the vicinity."] }
  },
  // MD-035: Rezina (Duplicate ID, providing additional POIs)
  {
    id: "MD-035-tipova-monastery",
    type: "historical",
    parent: "MD-035",
    coords: [28.9800, 47.6000],
    name: { de: "Felsenkloster Țipova", hu: "Țipova sziklakolostor", ro: "Mănăstirea rupestră Țipova", en: "Țipova Cave Monastery" },
    description: { de: "Eines der größten und spektakulärsten Felsenklöster in Osteuropa.", hu: "Kelet-Európa egyik legnagyobb és leglátványosabb sziklakolostora.", ro: "Una dintre cele mai mari și spectaculoase mănăstiri rupestre din Europa de Est.", en: "One of the largest and most spectacular cave monasteries in Eastern Europe." },
    facts: { de: ["In die Klippen über dem Dnister gehauen.","Legenden verbinden es mit Orpheus.","Besteht aus drei religiösen Komplexen."], hu: ["A Dnyeszter feletti sziklákba vájták.","Legendák kötik Orfeuszhoz.","Három vallási komplexumból áll."], ro: ["Săpată în stâncile de deasupra Nistrului.","Legendele o leagă de Orfeu.","Formată din trei complexe religioase."], en: ["Carved into the cliffs above the Dniester.","Legends associate it with Orpheus.","Consists of three religious complexes."] }
  },
  {
    id: "MD-035-horodiste-village",
    type: "landmark",
    parent: "MD-035",
    coords: [28.9500, 47.6000],
    name: { de: "Horodiște", hu: "Horodiște", ro: "Horodiște", en: "Horodiște" },
    description: { de: "Ein historisches Dorf, bekannt für seine malerische Lage und Weinherstellung.", hu: "Történelmi falu, festői fekvéséről és bortermeléséről ismert.", ro: "Un sat istoric, cunoscut pentru așezarea sa pitorească și producția de vin.", en: "A historical village known for its picturesque location and wine production." },
    facts: { de: ["Gelegen in der Nähe der Țipova-Wasserfälle.","Zentrum für Ökotourismus.","Traditionelle moldauische Architektur."], hu: ["A Țipova-vízesések közelében található.","Ökoturisztikai központ.","Hagyományos moldovai építészet."], ro: ["Situat lângă cascadele Țipova.","Centru pentru ecoturism.","Arhitectură tradițională moldovenească."], en: ["Located near the Țipova waterfalls.","Center for ecotourism.","Traditional Moldovan architecture."] }
  },
  // MD-036: Ialoveni
  {
    id: "MD-036-ialoveni-city",
    type: "city",
    parent: "MD-036",
    coords: [28.7778, 46.9425],
    name: { de: "Ialoveni", hu: "Ialoveni", ro: "Ialoveni", en: "Ialoveni" },
    description: { de: "Eine moderne Stadt direkt südlich der Hauptstadt Chișinău.", hu: "Modern város közvetlenül a fővárostól, Chișinăutól délre.", ro: "Un oraș modern situat imediat la sud de capitala Chișinău.", en: "A modern city located just south of the capital, Chișinău." },
    facts: { de: ["Zentrum der Sherry-Weinproduktion.","Beliebte Wohngegend für Pendler.","Großer Stadtsee."], hu: ["A sherry-típusú bortermelés központja.","Népszerű lakóhely az ingázók számára.","Nagy városi tó."], ro: ["Centrul producției de vin de tip Sherry.","Zonă rezidențială populară pentru navetiști.","Lac orășenesc mare."], en: ["Center of Sherry-style wine production.","Popular residential area for commuters.","Large city lake."] }
  },
  {
    id: "MD-036-suruceni-monastery",
    type: "historical",
    parent: "MD-036",
    coords: [28.6750, 46.9833],
    name: { de: "Kloster Suruceni", hu: "Suruceni kolostor", ro: "Mănăstirea Suruceni", en: "Suruceni Monastery" },
    description: { de: "Ein elegantes Frauenkloster mit einer charakteristischen rosa Kirche.", hu: "Elegáns női kolostor jellegzetes rózsaszín templommal.", ro: "O mănăstire de maici elegantă, cu o biserică roz caracteristică.", en: "An elegant nunnery with a characteristic pink church." },
    facts: { de: ["Gegründet im 18. Jahrhundert.","Architektur im neoklassizistischen Stil.","Gepflegte Gartenanlagen."], hu: ["A 18. században alapították.","Neoklasszicista stílusú építészet.","Gondozott kertrendszer."], ro: ["Fondată în secolul al XVIII-lea.","Arhitectură în stil neoclasic.","Grădini bine întreținute."], en: ["Founded in the 18th century.","Neoclassical style architecture.","Well-maintained gardens."] }
  },
  // MD-037: Călărași
  {
    id: "MD-037-calarasi-city",
    type: "city",
    parent: "MD-037",
    coords: [28.3103, 47.2514],
    name: { de: "Călărași", hu: "Călărași", ro: "Călărași", en: "Călărași" },
    description: { de: "Eine Stadt im Herzen der Codru-Region, bekannt für Weinbrand.", hu: "Város a Codru régió szívében, borpárlatáról ismert.", ro: "Un oraș în inima regiunii Codru, cunoscut pentru divin (brandy).", en: "A city in the heart of the Codru region, known for brandy." },
    facts: { de: ["Berühmt für die Destillerie 'Călărași Divin'.","Gegründet im 15. Jahrhundert.","Wichtiger Knotenpunkt der Bahnstrecke Chișinău-Iași."], hu: ["Híres a 'Călărași Divin' lepárlóról.","A 15. században alapították.","Fontos csomópont a Chișinău-Jászvásár vasútvonalon."], ro: ["Faimos pentru distileria 'Călărași Divin'.","Fondat în secolul al XV-lea.","Nod important pe linia feroviară Chișinău-Iași."], en: ["Famous for the 'Călărași Divin' distillery.","Founded in the 15th century.","Important hub on the Chișinău-Iași railway line."] }
  },
  {
    id: "MD-037-frumoasa-monastery",
    type: "historical",
    parent: "MD-037",
    coords: [28.3333, 47.2550],
    name: { de: "Kloster Frumoasa", hu: "Frumoasa kolostor", ro: "Mănăstirea Frumoasa", en: "Frumoasa Monastery" },
    description: { de: "Ein malerisches Kloster, dessen Name 'Die Schöne' bedeutet.", hu: "Festői kolostor, amelynek neve 'A szépet' jelenti.", ro: "O mănăstire pitorească al cărei nume înseamnă 'Frumoasa'.", en: "A picturesque monastery whose name means 'The Beautiful'." },
    facts: { de: ["Gelegen in den bewaldeten Hügeln von Călărași.","Besitzt eine wertvolle Ikonensammlung.","Ort der Ruhe und Spiritualität."], hu: ["Călărași erdős dombjai között található.","Értékes ikongyűjteménye van.","A nyugalom és spiritualitás helye."], ro: ["Situată în dealurile împădurite ale Călărașiului.","Deține o colecție valoroasă de icoane.","Loc de liniște și spiritualitate."], en: ["Located in the forested hills of Călărași.","Has a valuable collection of icons.","Place of peace and spirituality."] }
  },
  // MD-038: Drochia
  {
    id: "MD-038-drochia-city",
    type: "city",
    parent: "MD-038",
    coords: [27.7511, 48.0350],
    name: { de: "Drochia", hu: "Drochia", ro: "Drochia", en: "Drochia" },
    description: { de: "Eine Stadt im Norden Moldaus, bekannt für ihre moderne Kathedrale.", hu: "Város Moldova északi részén, modern székesegyházáról ismert.", ro: "Un oraș în nordul Moldovei, cunoscut pentru catedrala sa modernă.", en: "A city in northern Moldova, known for its modern cathedral." },
    facts: { de: ["Besitzt die markante rosa Kathedrale 'Gottesmutter der Freude'.","Zentrum der Zuckerproduktion.","Wichtiger regionaler Verkehrsknoten."], hu: ["Itt található a jellegzetes rózsaszín 'Istenszülő öröme' székesegyház.","Cukorgyártás központja.","Fontos regionális közlekedési csomópont."], ro: ["Găzduiește catedrala roz 'Maica Domnului a Bucuriei'.","Centrul producției de zahăr.","Nod de transport regional important."], en: ["Home to the distinctive pink 'Mother of God of Joy' Cathedral.","Center of sugar production.","Important regional transport hub."] }
  },
  {
    id: "MD-038-drochia-cathedral",
    type: "landmark",
    parent: "MD-038",
    coords: [27.7500, 48.0333],
    name: { de: "Kathedrale der Gottesmutter", hu: "Istenszülő székesegyház", ro: "Catedrala Maica Domnului", en: "Mother of God Cathedral" },
    description: { de: "Ein architektonisches Wahrzeichen der Stadt Drochia.", hu: "Drochia városának építészeti jelképe.", ro: "Un simbol arhitectural al orașului Drochia.", en: "An architectural symbol of the city of Drochia." },
    facts: { de: ["Einzigartige Architektur in Moldau.","Fünf Kuppeln.","Wichtiger religiöser Treffpunkt im Norden."], hu: ["Egyedülálló építészet Moldovában.","Öt kupolával rendelkezik.","Fontos északi vallási találkozóhely."], ro: ["Arhitectură unică în Moldova.","Cinci cupole.","Loc important de întâlnire religioasă în nord."], en: ["Unique architecture in Moldova.","Features five domes.","Important religious meeting place in the north."] }
  },
  // MD-039: Sîngerei
  {
    id: "MD-039-singerei-city",
    type: "city",
    parent: "MD-039",
    coords: [28.1403, 47.6350],
    name: { de: "Sîngerei", hu: "Sîngerei", ro: "Sîngerei", en: "Sîngerei" },
    description: { de: "Eine Stadt im Norden Moldaus, strategisch an der Hauptstraße nach Bălți gelegen.", hu: "Város Moldova északi részén, stratégiai helyen a Bălți felé vezető főút mentén.", ro: "Un oraș în nordul Moldovei, situat strategic pe ruta principală spre Bălți.", en: "A city in northern Moldova, strategically located on the main route to Bălți." },
    facts: { de: ["Wichtiges Agrarzentrum.","Bekannt für seine Gastfreundschaft.","Früherer Name: Lasowsk."], hu: ["Fontos mezőgazdasági központ.","Vendégszeretetéről ismert.","Korábbi neve: Lazovszk."], ro: ["Centru agricol important.","Cunoscut pentru ospitalitatea sa.","Fostul nume: Lazovsk."], en: ["Important agricultural center.","Known for its hospitality.","Former name: Lazovsk."] }
  },
  {
    id: "MD-039-bilicenii-vechi",
    type: "landmark",
    parent: "MD-039",
    coords: [28.0500, 47.6500],
    name: { de: "Bilicenii Vechi", hu: "Bilicenii Vechi", ro: "Bilicenii Vechi", en: "Bilicenii Vechi" },
    description: { de: "Ein historisches Dorf mit gut erhaltenen Traditionen.", hu: "Történelmi falu jól megőrzött hagyományokkal.", ro: "Un sat istoric cu tradiții bine conservate.", en: "A historical village with well-preserved traditions." },
    facts: { de: ["Bekannt für traditionelles Handwerk.","Malerische Hügellandschaft.","Archäologische Fundstätte in der Nähe."], hu: ["Hagyományos kézművességéről ismert.","Festői dombos táj.","Régészeti lelőhely a közelben."], ro: ["Cunoscut pentru meșteșugurile tradiționale.","Peisaj deluros pitoresc.","Situl arheologic din apropiere."], en: ["Known for traditional crafts.","Picturesque hilly landscape.","Archaeological site nearby."] }
  },
  // MD-040: Bălţi
  {
    id: "MD-040-balti-city",
    type: "city",
    parent: "MD-040",
    coords: [27.9289, 47.7617],
    name: { de: "Bălți", hu: "Bălți", ro: "Bălți", en: "Bălți" },
    description: { de: "Die zweitgrößte Stadt Moldaus, oft als 'nördliche Hauptstadt' bezeichnet.", hu: "Moldova második legnagyobb városa, gyakran az 'északi fővárosnak' nevezik.", ro: "Al doilea cel mai mare oraș din Moldova, numit adesea 'capitala de nord'.", en: "The second largest city in Moldova, often referred to as the 'northern capital'." },
    facts: { de: ["Wirtschaftliches und kulturelles Zentrum des Nordens.","Besitzt eine renommierte Universität.","Vielseitiges kulturelles Leben."], hu: ["Észak gazdasági és kulturális központja.","Neves egyeteme van.","Sokszínű kulturális élet."], ro: ["Centrul economic și cultural al nordului.","Deține o universitate renumită.","Viață culturală diversificată."], en: ["Economic and cultural center of the north.","Has a prestigious university.","Diverse cultural life."] }
  },
  {
    id: "MD-040-balti-theatre",
    type: "landmark",
    parent: "MD-040",
    coords: [27.9250, 47.7600],
    name: { de: "Vasile-Alecsandri-Theater", hu: "Vasile Alecsandri színház", ro: "Teatrul Național Vasile Alecsandri", en: "Vasile Alecsandri National Theatre" },
    description: { de: "Eines der bedeutendsten Theater Moldaus.", hu: "Moldova egyik legjelentősebb színháza.", ro: "Unul dintre cele mai importante teatre din Moldova.", en: "One of the most important theatres in Moldova." },
    facts: { de: ["Erstes Nationaltheater in Moldau.","Gegründet 1957.","Architektonisches Zentrum der Stadt."], hu: ["Az első nemzeti színház Moldovában.","1957-ben alapították.","A város építészeti központja."], ro: ["Primul teatru național din Moldova.","Fondat în 1957.","Centrul arhitectural al orașului."], en: ["First national theatre in Moldova.","Founded in 1957.","Architectural center of the city."] }
  }
];
