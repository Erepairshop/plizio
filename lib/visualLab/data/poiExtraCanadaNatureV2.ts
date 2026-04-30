import type { POI } from "./poi";

export const poiExtraCanadaNatureV2: POI[] = [
  {
    id: "mount-assiniboine-nature-v2",
    type: "mountain",
    parent: "CA-BC",
    coords: [-115.6506, 50.9225],
    name: { de: "Mount Assiniboine", hu: "Mount Assiniboine", ro: "Muntele Assiniboine", en: "Mount Assiniboine" },
    description: {
      de: "Ein pyramidenförmiger Gipfel, der oft als das 'Matterhorn der Rocky Mountains' bezeichnet wird.",
      hu: "Piramis alakú hegycsúcs, melyet gyakran a 'Sziklás-hegység Matterhornjának' neveznek.",
      ro: "Un vârf piramidal adesea numit 'Matterhorn-ul Stâncoșilor'.",
      en: "A pyramidal peak often referred to as the 'Matterhorn of the Rockies'."
    },
    facts: {
      de: ["3.618 Meter hoch", "Liegt an der Grenze von BC und Alberta", "Beliebt bei Bergsteigern"],
      hu: ["3618 méter magas", "BC és Alberta határán fekszik", "Hegymászók körében népszerű"],
      ro: ["Altitudine de 3.618 metri", "Situat la granița dintre BC și Alberta", "Popular printre alpiniști"],
      en: ["3,618 meters high", "Located on the BC-Alberta border", "Popular with mountaineers"]
    }
  },
  {
    id: "south-nahanni-river-nature-v2",
    type: "river",
    parent: "CA-NT",
    coords: [-125.5858, 61.5644],
    name: { de: "South Nahanni River", hu: "South Nahanni-folyó", ro: "Râul South Nahanni", en: "South Nahanni River" },
    description: {
      de: "Ein wilder Fluss im Nahanni-Nationalpark, bekannt für seine vier großen Canyons und die Virginia Falls.",
      hu: "Egy vad folyó a Nahanni Nemzeti Parkban, amely négy nagy kanyonjáról és a Virginia-vízesésről ismert.",
      ro: "Un râu sălbatic în Parcul Național Nahanni, cunoscut pentru cele patru canioane mari și Cascada Virginia.",
      en: "A wild river in Nahanni National Park, known for its four great canyons and Virginia Falls."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Virginia Falls ist doppelt so hoch wie die Niagarafälle", "Heimat vieler Mythen und Legenden"],
      hu: ["UNESCO Világörökség", "A Virginia-vízesés kétszer magasabb a Niagaránál", "Számos mítosz és legenda övezi"],
      ro: ["Patrimoniu Mondial UNESCO", "Cascada Virginia este de două ori mai înaltă decât Niagara", "Găzduiește multe mituri și legende"],
      en: ["UNESCO World Heritage Site", "Virginia Falls is twice the height of Niagara Falls", "Home to many myths and legends"]
    }
  },
  {
    id: "great-slave-lake-nature-v2",
    type: "lake",
    parent: "CA-NT",
    coords: [-114.0, 62.0],
    name: { de: "Großer Sklavensee", hu: "Nagy-Rabszolga-tó", ro: "Marele Lac al Sclavilor", en: "Great Slave Lake" },
    description: {
      de: "Der zweitgrößte See in den Nordwest-Territorien und der tiefste See Nordamerikas.",
      hu: "Az Északnyugati területek második legnagyobb tava és Észak-Amerika legmélyebb tava.",
      ro: "Al doilea cel mai mare lac din Teritoriile de Nord-Vest și cel mai adânc lac din America de Nord.",
      en: "The second-largest lake in the Northwest Territories and the deepest lake in North America."
    },
    facts: {
      de: ["Maximale Tiefe von 614 Metern", "Im Winter komplett zugefroren", "Wichtig für die lokale Fischerei"],
      hu: ["Legnagyobb mélysége 614 méter", "Télen teljesen befagy", "Fontos a helyi halászat szempontjából"],
      ro: ["Adâncime maximă de 614 metri", "Complet înghețat iarna", "Important pentru pescuitul local"],
      en: ["Maximum depth of 614 meters", "Completely frozen in winter", "Important for local fisheries"]
    }
  },
  {
    id: "haida-gwaii-islands-nature-v2",
    type: "island",
    parent: "CA-BC",
    coords: [-132.0, 53.0],
    name: { de: "Haida Gwaii", hu: "Haida Gwaii", ro: "Haida Gwaii", en: "Haida Gwaii" },
    description: {
      de: "Ein Archipel vor der Küste von British Columbia, bekannt als 'Galapagos des Nordens' wegen seiner einzigartigen Flora und Fauna.",
      hu: "Szigetcsoport Brit Columbia partjainál, amelyet egyedülálló növény- és állatvilága miatt az 'Észak Galápagosának' is neveznek.",
      ro: "Un arhipelag în largul coastei Columbiei Britanice, cunoscut ca 'Galapagosul Nordului' pentru flora și fauna sa unică.",
      en: "An archipelago off the coast of British Columbia, known as the 'Galapagos of the North' for its unique flora and fauna."
    },
    facts: {
      de: ["Heimat des Haida-Volkes", "Uralte Regenwälder", "Reiche Meereslebewesen und Vogelpopulationen"],
      hu: ["A haida nép otthona", "Ősi esőerdők", "Gazdag tengeri élővilág és madárpopulációk"],
      ro: ["Casa poporului Haida", "Păduri tropicale antice", "Viețuitoare marine bogate și populații de păsări"],
      en: ["Home of the Haida Nation", "Ancient rainforests", "Rich marine life and bird populations"]
    }
  },
  {
    id: "pacific-rim-national-park-forest-nature-v2",
    type: "forest",
    parent: "CA-BC",
    coords: [-125.7667, 49.0333],
    name: { de: "Pacific-Rim-Nationalpark Wald", hu: "Pacific Rim Nemzeti Park erdő", ro: "Pădurea Parcului Național Pacific Rim", en: "Pacific Rim National Park Forest" },
    description: {
      de: "Umfasst gemäßigte Regenwälder mit riesigen, alten Bäumen an der Westküste von Vancouver Island.",
      hu: "Mérsékelt övi esőerdőket foglal magában óriási, ősi fákkal a Vancouver-sziget nyugati partján.",
      ro: "Include păduri tropicale temperate cu copaci uriași și vechi pe coasta de vest a Insulei Vancouver.",
      en: "Comprises temperate rainforests with giant, ancient trees on the west coast of Vancouver Island."
    },
    facts: {
      de: ["Long Beach Einheit ist berühmt", "Heimat von Sitka-Fichten und Westlichen Rotzedern", "Beliebter West Coast Trail"],
      hu: ["A Long Beach egység híres", "Sitka-lucfenyők és nyugati vörös cédrusok otthona", "Népszerű a West Coast Trail"],
      ro: ["Unitatea Long Beach este renumită", "Găzduiește molid Sitka și cedru roșu vestic", "Popularul West Coast Trail"],
      en: ["Long Beach Unit is famous", "Home to Sitka Spruce and Western Red Cedar", "Popular West Coast Trail"]
    }
  },
  {
    id: "beaufort-sea-nature-v2",
    type: "sea",
    parent: "CA-NT",
    coords: [-137.0, 72.0],
    name: { de: "Beaufortsee", hu: "Beaufort-tenger", ro: "Marea Beaufort", en: "Beaufort Sea" },
    description: {
      de: "Ein Randmeer des Arktischen Ozeans, das für einen Großteil des Jahres von Eis bedeckt ist.",
      hu: "A Jeges-tenger peremtengere, melyet az év nagy részében jég borít.",
      ro: "O mare marginală a Oceanului Arctic, acoperită de gheață în cea mai mare parte a anului.",
      en: "A marginal sea of the Arctic Ocean, covered by ice for much of the year."
    },
    facts: {
      de: ["Wichtiger Lebensraum für Belugas und Eisbären", "Bedeutende Öl- und Gasvorkommen", "Benannt nach Sir Francis Beaufort"],
      hu: ["Fontos élőhely a belugák és jegesmedvék számára", "Jelentős olaj- és gázlelőhelyek", "Sir Francis Beaufortról nevezték el"],
      ro: ["Habitat important pentru balenele beluga și urșii polari", "Rezerve semnificative de petrol și gaze", "Numită după Sir Francis Beaufort"],
      en: ["Important habitat for belugas and polar bears", "Significant oil and gas reserves", "Named after Sir Francis Beaufort"]
    }
  },
  {
    id: "mount-temple-nature-v2",
    type: "mountain",
    parent: "CA-AB",
    coords: [-116.215, 51.3486],
    name: { de: "Mount Temple", hu: "Mount Temple", ro: "Muntele Temple", en: "Mount Temple" },
    description: {
      de: "Ein markanter Berg im Banff-Nationalpark, der über dem Tal der Zehn Gipfel thront.",
      hu: "Jellegzetes hegy a Banff Nemzeti Parkban, amely a Tíz Csúcs völgye fölé magasodik.",
      ro: "Un munte proeminent în Parcul Național Banff, care domină Valea celor Zece Vârfuri.",
      en: "A prominent mountain in Banff National Park, towering over the Valley of the Ten Peaks."
    },
    facts: {
      de: ["Höhe von 3.544 Metern", "Beliebte, aber anspruchsvolle Kletterroute", "Bietet spektakuläre Aussichten"],
      hu: ["Magassága 3544 méter", "Népszerű, de kihívást jelentő mászóútvonal", "Látványos kilátást nyújt"],
      ro: ["Altitudine de 3.544 metri", "Traseu de alpinism popular, dar dificil", "Oferă priveliști spectaculoase"],
      en: ["Height of 3,544 meters", "Popular but challenging scramble route", "Offers spectacular views"]
    }
  },
  {
    id: "athabasca-river-nature-v2",
    type: "river",
    parent: "CA-AB",
    coords: [-111.15, 58.6833],
    name: { de: "Athabasca River", hu: "Athabasca-folyó", ro: "Râul Athabasca", en: "Athabasca River" },
    description: {
      de: "Entspringt dem Columbia-Eisfeld und fließt durch die Ölsandregion Albertas.",
      hu: "A Columbia-jégmezőből ered és Alberta olajhomok-régióján folyik keresztül.",
      ro: "Izvorăște din Câmpul de Gheață Columbia și curge prin regiunea nisipurilor petrolifere din Alberta.",
      en: "Originates from the Columbia Icefield and flows through the oil sands region of Alberta."
    },
    facts: {
      de: ["Längster Fluss Albertas", "Wichtiger Transportweg in der Pelzhandelszeit", "Spektakuläre Athabasca-Fälle"],
      hu: ["Alberta leghosszabb folyója", "Fontos szállítási útvonal a szőrmekereskedelem idején", "Látványos Athabasca-vízesés"],
      ro: ["Cel mai lung râu din Alberta", "Ruta de transport importantă în epoca comerțului cu blănuri", "Spectaculoasa Cascadă Athabasca"],
      en: ["Longest river in Alberta", "Major transportation route during the fur trade era", "Spectacular Athabasca Falls"]
    }
  },
  {
    id: "lake-superior-nature-v2",
    type: "lake",
    parent: "CA-ON",
    coords: [-87.5, 48.0],
    name: { de: "Oberer See", hu: "Felső-tó", ro: "Lacul Superior", en: "Lake Superior" },
    description: {
      de: "Der größte der Großen Seen und der flächenmäßig größte Süßwassersee der Welt.",
      hu: "A Nagy-tavak legnagyobbika és a világ legnagyobb területű édesvizű tava.",
      ro: "Cel mai mare dintre Marile Lacuri și cel mai mare lac de apă dulce din lume după suprafață.",
      en: "The largest of the Great Lakes and the world's largest freshwater lake by surface area."
    },
    facts: {
      de: ["Grenzt an Kanada und die USA", "Enthält 10% des weltweiten Oberflächensüßwassers", "Bekannt für seine rauen Stürme"],
      hu: ["Kanada és az USA határán fekszik", "A világ felszíni édesvízkészletének 10%-át tartalmazza", "Híres a heves viharairól"],
      ro: ["Se învecinează cu Canada și SUA", "Conține 10% din apa dulce de suprafață a lumii", "Cunoscut pentru furtunile sale violente"],
      en: ["Borders Canada and the US", "Contains 10% of the world's surface fresh water", "Known for its harsh storms"]
    }
  },
  {
    id: "magdalen-islands-nature-v2",
    type: "island",
    parent: "CA-QC",
    coords: [-61.85, 47.3833],
    name: { de: "Magdalenen-Inseln", hu: "Magdalen-szigetek", ro: "Insulele Magdalena", en: "Magdalen Islands" },
    description: {
      de: "Ein Archipel im Sankt-Lorenz-Golf, bekannt für seine Sanddünen und roten Klippen.",
      hu: "Szigetcsoport a Szent Lőrinc-öbölben, homokdűnéiről és vörös szikláiról ismert.",
      ro: "Un arhipelag în Golful Sfântul Laurențiu, cunoscut pentru dunele de nisip și stâncile roșii.",
      en: "An archipelago in the Gulf of Saint Lawrence, known for its sand dunes and red cliffs."
    },
    facts: {
      de: ["Einzigartige Akadische Kultur", "Wichtiges Brutgebiet für Robben", "Paradies für Kitesurfer"],
      hu: ["Egyedi akádiai kultúra", "Fontos fókaszaporodó hely", "A kiteszörfösök paradicsoma"],
      ro: ["Cultură acadiană unică", "Zonă importantă de reproducere pentru foci", "Paradis pentru kitesurfing"],
      en: ["Unique Acadian culture", "Important seal breeding ground", "Kitesurfing paradise"]
    }
  },
  {
    id: "boreal-forest-nature-v2",
    type: "forest",
    parent: "CA-ON",
    coords: [-85.0, 52.0],
    name: { de: "Borealer Nadelwald Kanadas", hu: "Kanadai boreális erdő", ro: "Pădurea boreală canadiană", en: "Canadian Boreal Forest" },
    description: {
      de: "Ein riesiges Waldgebiet, das sich über einen Großteil Kanadas erstreckt und eine entscheidende Rolle für das globale Klima spielt.",
      hu: "Hatalmas erdőség, amely Kanada nagy részén átível, és döntő szerepet játszik a globális éghajlatban.",
      ro: "O zonă forestieră vastă care se întinde pe o mare parte a Canadei și joacă un rol crucial în climatul global.",
      en: "A vast forest area stretching across much of Canada, playing a crucial role in the global climate."
    },
    facts: {
      de: ["Einer der größten intakten Wälder der Welt", "Wichtiger Kohlenstoffspeicher", "Heimat von Karibus und Luchsen"],
      hu: ["A világ egyik legnagyobb érintetlen erdősége", "Fontos szén-dioxid-elnyelő", "Karibuk és hiúzok otthona"],
      ro: ["Una dintre cele mai mari păduri intacte din lume", "Rezervor important de carbon", "Găzduiește caribu și râși"],
      en: ["One of the world's largest intact forests", "Important carbon sink", "Home to caribou and lynx"]
    }
  },
  {
    id: "hudson-bay-nature-v2",
    type: "sea",
    parent: "CA-MB",
    coords: [-85.0, 60.0],
    name: { de: "Hudson Bay", hu: "Hudson-öböl", ro: "Golful Hudson", en: "Hudson Bay" },
    description: {
      de: "Ein großes Binnenmeer in Ostkanada, das im Winter zufriert und für Eisbärenwanderungen bekannt ist.",
      hu: "Nagy beltenger Kelet-Kanadában, amely télen befagy, és a jegesmedve-vándorlásról ismert.",
      ro: "O mare interioară mare în estul Canadei, care îngheață iarna și este cunoscută pentru migrațiile urșilor polari.",
      en: "A large inland sea in eastern Canada that freezes in winter and is known for polar bear migrations."
    },
    facts: {
      de: ["Zweitgrößte Bucht der Welt", "Verbunden mit dem Atlantik und dem Arktischen Ozean", "Wichtiges Gebiet für Zugvögel"],
      hu: ["A világ második legnagyobb öble", "Az Atlanti- és a Jeges-tengerrel is összeköttetésben áll", "Fontos terület a vonuló madarak számára"],
      ro: ["Al doilea cel mai mare golf din lume", "Conectat la Oceanul Atlantic și Oceanul Arctic", "Zonă importantă pentru păsările migratoare"],
      en: ["Second largest bay in the world", "Connected to the Atlantic and Arctic Oceans", "Important area for migratory birds"]
    }
  },
  {
    id: "mount-waddington-nature-v2",
    type: "mountain",
    parent: "CA-BC",
    coords: [-125.263, 51.371],
    name: { de: "Mount Waddington", hu: "Mount Waddington", ro: "Muntele Waddington", en: "Mount Waddington" },
    description: {
      de: "Der höchste Gipfel der Coast Mountains in British Columbia, bekannt für sein extremes Wetter.",
      hu: "A Parti-hegység legmagasabb csúcsa Brit Kolumbiában, szélsőséges időjárásáról ismert.",
      ro: "Cel mai înalt vârf din Munții Coastei din Columbia Britanică, cunoscut pentru vremea sa extremă.",
      en: "The highest peak in the Coast Mountains of British Columbia, known for its extreme weather."
    },
    facts: {
      de: ["4.019 Meter hoch", "Stark vergletschert", "Sehr anspruchsvolle Besteigung"],
      hu: ["4019 méter magas", "Erősen gleccseresedett", "Nagyon kihívást jelentő megmászás"],
      ro: ["Altitudine de 4.019 metri", "Foarte glaciarizat", "Ascensiune foarte dificilă"],
      en: ["4,019 meters high", "Heavily glaciated", "Very challenging climb"]
    }
  },
  {
    id: "churchill-river-saskatchewan-nature-v2",
    type: "river",
    parent: "CA-SK",
    coords: [-94.1667, 58.7833],
    name: { de: "Churchill River (Saskatchewan)", hu: "Churchill-folyó (Saskatchewan)", ro: "Râul Churchill (Saskatchewan)", en: "Churchill River (Saskatchewan)" },
    description: {
      de: "Ein historischer Fluss mit unzähligen Seen und Stromschnellen, eine wichtige Route für Kanuten.",
      hu: "Történelmi folyó számtalan tóval és zúgóval, fontos útvonal a kenusok számára.",
      ro: "Un râu istoric cu nenumărate lacuri și repezișuri, o rută importantă pentru canotaj.",
      en: "A historic river with countless lakes and rapids, a major route for canoeists."
    },
    facts: {
      de: ["Wichtige Pelzhandelsroute", "Fließt in die Hudson Bay", "Teil des Prekambrischen Schilds"],
      hu: ["Fontos szőrmekereskedelmi útvonal", "A Hudson-öbölbe ömlik", "A kanadai pajzs része"],
      ro: ["Ruta importantă a comerțului cu blănuri", "Se varsă în Golful Hudson", "Parte a Scutului Canadian"],
      en: ["Important fur trade route", "Flows into Hudson Bay", "Part of the Precambrian Shield"]
    }
  },
  {
    id: "lake-winnipeg-nature-v2",
    type: "lake",
    parent: "CA-MB",
    coords: [-97.5, 52.5],
    name: { de: "Winnipegsee", hu: "Winnipeg-tó", ro: "Lacul Winnipeg", en: "Lake Winnipeg" },
    description: {
      de: "Ein sehr großer, aber relativ flacher See in Manitoba, Überbleibsel des prähistorischen Agassizsees.",
      hu: "Nagyon nagy, de viszonylag sekély tó Manitobában, a történelem előtti Agassiz-tó maradványa.",
      ro: "Un lac foarte mare, dar relativ puțin adânc în Manitoba, un vestigiu al lacului preistoric Agassiz.",
      en: "A very large but relatively shallow lake in Manitoba, a remnant of prehistoric Lake Agassiz."
    },
    facts: {
      de: ["Sechstgrößter See in Kanada", "Großes Einzugsgebiet", "Leidet unter Algenblüten"],
      hu: ["Kanada hatodik legnagyobb tava", "Nagy vízgyűjtő terület", "Algavirágzástól szenved"],
      ro: ["Al șaselea cel mai mare lac din Canada", "Bazin hidrografic mare", "Suferă de înfloriri algale"],
      en: ["Sixth largest lake in Canada", "Large watershed", "Suffers from algae blooms"]
    }
  },
  {
    id: "prince-edward-island-nature-v2",
    type: "island",
    parent: "CA-PE",
    coords: [-63.0, 46.5],
    name: { de: "Prince Edward Island", hu: "Prince Edward-sziget", ro: "Insula Prince Edward", en: "Prince Edward Island" },
    description: {
      de: "Kanadas kleinste Provinz, bekannt für ihre sanften Hügel, roten Sandstrände und die Geschichten von Anne auf Green Gables.",
      hu: "Kanada legkisebb tartománya, lankás dombjairól, vörös homokos strandjairól és az Anne a Zöld Oromból történeteiről ismert.",
      ro: "Cea mai mică provincie a Canadei, cunoscută pentru dealurile sale domoale, plajele cu nisip roșu și poveștile lui Anne de la Green Gables.",
      en: "Canada's smallest province, known for its rolling hills, red-sand beaches, and the stories of Anne of Green Gables."
    },
    facts: {
      de: ["'Garten des Golfs'", "Confederation Bridge verbindet mit dem Festland", "Fruchtbarer Boden für Kartoffelanbau"],
      hu: ["'Az öböl kertje'", "A Confederation híd köti össze a szárazfölddel", "Termékeny talaj a burgonyatermesztéshez"],
      ro: ["'Grădina Golfului'", "Podul Confederației o leagă de continent", "Sol fertil pentru cultivarea cartofilor"],
      en: ["'Garden of the Gulf'", "Confederation Bridge links to mainland", "Fertile soil for potato farming"]
    }
  },
  {
    id: "carmanah-walbran-provincial-park-forest-nature-v2",
    type: "forest",
    parent: "CA-BC",
    coords: [-124.6, 48.7],
    name: { de: "Carmanah Walbran Provincial Park Wald", hu: "Carmanah Walbran Tartományi Park erdő", ro: "Pădurea Parcului Provincial Carmanah Walbran", en: "Carmanah Walbran Provincial Park Forest" },
    description: {
      de: "Schützt einen Teil des größten alten gemäßigten Regenwaldes auf Vancouver Island.",
      hu: "A Vancouver-sziget legnagyobb ősi mérsékelt övi esőerdőjének egy részét védi.",
      ro: "Protejează o parte din cea mai mare pădure tropicală temperată veche de pe Insula Vancouver.",
      en: "Protects a portion of the largest ancient temperate rainforest on Vancouver Island."
    },
    facts: {
      de: ["Heimat von riesigen Sitka-Fichten", "Wichtiges ökologisches Reservat", "Entlegene Wildnis"],
      hu: ["Hatalmas Sitka-lucfenyők otthona", "Fontos ökológiai rezervátum", "Távoli vadon"],
      ro: ["Găzduiește molizi Sitka uriași", "Rezervație ecologică importantă", "Sălbăticie izolată"],
      en: ["Home to giant Sitka Spruce trees", "Important ecological reserve", "Remote wilderness"]
    }
  },
  {
    id: "mount-assiniboine-park-forest-nature-v2",
    type: "forest",
    parent: "CA-BC",
    coords: [-115.6, 50.9],
    name: { de: "Mount Assiniboine Park Wald", hu: "Mount Assiniboine Park erdő", ro: "Pădurea Parcului Mount Assiniboine", en: "Mount Assiniboine Park Forest" },
    description: {
      de: "Alpine und subalpine Wälder, die den berühmten Gipfel umgeben.",
      hu: "Alpesi és szubalpesi erdők, melyek a híres hegycsúcsot veszik körül.",
      ro: "Păduri alpine și subalpine care înconjoară faimosul vârf.",
      en: "Alpine and subalpine forests surrounding the famous peak."
    },
    facts: {
      de: ["Lärchenwälder leuchten im Herbst", "Teil des UNESCO-Welterbes", "Kein Straßenzugang zum Park"],
      hu: ["A vörösfenyő-erdők ősszel ragyognak", "Az UNESCO Világörökség része", "Nincs közúti hozzáférés a parkhoz"],
      ro: ["Pădurile de zadă strălucesc toamna", "Parte a Patrimoniului Mondial UNESCO", "Fără acces rutier în parc"],
      en: ["Larch forests glow in autumn", "Part of a UNESCO World Heritage site", "No road access to the park"]
    }
  },
  {
    id: "gwaii-haanas-national-park-reserve-forest-nature-v2",
    type: "forest",
    parent: "CA-BC",
    coords: [-131.5, 52.4],
    name: { de: "Gwaii Haanas Nationalpark Wald", hu: "Gwaii Haanas Nemzeti Park erdő", ro: "Pădurea Parcului Național Gwaii Haanas", en: "Gwaii Haanas National Park Forest" },
    description: {
      de: "Ein reicher Regenwald, der mit der Haida-Kultur verflochten ist und uralte Totempfähle beherbergt.",
      hu: "Gazdag esőerdő, amely összefonódik a haida kultúrával és ősi totemoszlopoknak ad otthont.",
      ro: "O pădure tropicală bogată, împletită cu cultura Haida și care găzduiește stâlpi totemici antici.",
      en: "A rich rainforest intertwined with Haida culture, home to ancient totem poles."
    },
    facts: {
      de: ["Schützt Land und Meer", "UNESCO-Weltkulturerbe (SGang Gwaay)", "Von den 'Haida Watchmen' überwacht"],
      hu: ["Védi a szárazföldet és a tengert", "UNESCO Világörökség (SGang Gwaay)", "A 'Haida Őrszemek' felügyelik"],
      ro: ["Protejează uscatul și marea", "Patrimoniu Mondial UNESCO (SGang Gwaay)", "Supravegheat de 'Paznicii Haida'"],
      en: ["Protects both land and sea", "UNESCO World Heritage Site (SGang Gwaay)", "Monitored by Haida Watchmen"]
    }
  },
  {
    id: "mount-columbia-nature-v2",
    type: "mountain",
    parent: "CA-AB",
    coords: [-117.884, 52.148],
    name: { de: "Mount Columbia", hu: "Mount Columbia", ro: "Muntele Columbia", en: "Mount Columbia" },
    description: {
      de: "Der höchste Punkt in Alberta, gelegen auf dem Columbia-Eisfeld.",
      hu: "Alberta legmagasabb pontja, a Columbia-jégmezőn található.",
      ro: "Cel mai înalt punct din Alberta, situat pe Câmpul de Gheață Columbia.",
      en: "The highest point in Alberta, located on the Columbia Icefield."
    },
    facts: {
      de: ["3.747 Meter hoch", "Liegt an der Kontinentalscheide", "Schwierige Besteigung aufgrund der Abgelegenheit"],
      hu: ["3747 méter magas", "A kontinentális vízválasztón fekszik", "Nehéz megmászni a távoli fekvése miatt"],
      ro: ["Altitudine de 3.747 metri", "Situat pe Diviziunea Continentală", "Ascensiune dificilă datorită izolării"],
      en: ["3,747 meters high", "Sits on the Continental Divide", "Difficult climb due to remoteness"]
    }
  },
  {
    id: "peace-river-nature-v2",
    type: "river",
    parent: "CA-BC",
    coords: [-111.433, 59.0],
    name: { de: "Peace River", hu: "Peace-folyó", ro: "Râul Peace", en: "Peace River" },
    description: {
      de: "Ein großer Fluss, der durch British Columbia und Alberta fließt und für die Landwirtschaft in der Region von großer Bedeutung ist.",
      hu: "Nagy folyó, amely Brit Columbián és Albertán folyik keresztül, és nagy jelentőséggel bír a régió mezőgazdasága szempontjából.",
      ro: "Un râu mare care curge prin Columbia Britanică și Alberta, de mare importanță pentru agricultura din regiune.",
      en: "A large river flowing through British Columbia and Alberta, vital for the region's agriculture."
    },
    facts: {
      de: ["Einer der längsten Flüsse Kanadas", "Entsteht im Williston Lake", "Mündet in den Slave River"],
      hu: ["Kanada egyik leghosszabb folyója", "A Williston-tóból ered", "A Slave-folyóba ömlik"],
      ro: ["Unul dintre cele mai lungi râuri din Canada", "Izvorăște din Lacul Williston", "Se varsă în Râul Slave"],
      en: ["One of Canada's longest rivers", "Originates in Williston Lake", "Flows into the Slave River"]
    }
  },
  {
    id: "lake-athabasca-nature-v2",
    type: "lake",
    parent: "CA-SK",
    coords: [-109.0, 59.0],
    name: { de: "Athabascasee", hu: "Athabasca-tó", ro: "Lacul Athabasca", en: "Lake Athabasca" },
    description: {
      de: "Ein großer See in Saskatchewan und Alberta, bekannt für seine Sanddünen und den Uranabbau.",
      hu: "Nagy tó Saskatchewanban és Albertában, homokdűnéiről és uránbányászatáról ismert.",
      ro: "Un lac mare în Saskatchewan și Alberta, cunoscut pentru dunele sale de nisip și mineritul de uraniu.",
      en: "A large lake in Saskatchewan and Alberta, known for its sand dunes and uranium mining."
    },
    facts: {
      de: ["Achtgrößter See Kanadas", "Die Athabasca-Sanddünen sind ein einzigartiges Ökosystem", "Wichtig für die Welturanproduktion"],
      hu: ["Kanada nyolcadik legnagyobb tava", "Az Athabasca-homokdűnék egyedülálló ökoszisztéma", "Fontos a világ urántermelése szempontjából"],
      ro: ["Al optulea cel mai mare lac din Canada", "Dunele de nisip Athabasca sunt un ecosistem unic", "Important pentru producția mondială de uraniu"],
      en: ["Eighth largest lake in Canada", "The Athabasca Sand Dunes are a unique ecosystem", "Important for world uranium production"]
    }
  },
  {
    id: "cape-breton-island-nature-v2",
    type: "island",
    parent: "CA-NS",
    coords: [-60.75, 46.25],
    name: { de: "Kap-Breton-Insel", hu: "Cape Breton-sziget", ro: "Insula Cape Breton", en: "Cape Breton Island" },
    description: {
      de: "Eine Insel in Nova Scotia, berühmt für den Cabot Trail, eine der landschaftlich reizvollsten Strecken der Welt.",
      hu: "Sziget Új-Skóciában, híres a Cabot Trail-ről, a világ egyik legfestőibb útvonaláról.",
      ro: "O insulă în Nova Scotia, renumită pentru Cabot Trail, unul dintre cele mai pitorești trasee din lume.",
      en: "An island in Nova Scotia, famous for the Cabot Trail, one of the world's most scenic drives."
    },
    facts: {
      de: ["Reiche schottische und akadische Kultur", "Bras d'Or Lake ist ein Binnenmeer", "Spektakuläre Küstenlandschaft"],
      hu: ["Gazdag skót és akádiai kultúra", "A Bras d'Or-tó egy beltenger", "Látványos partvidéki táj"],
      ro: ["Cultură scoțiană și acadiană bogată", "Lacul Bras d'Or este o mare interioară", "Peisaj de coastă spectaculos"],
      en: ["Rich Scottish and Acadian culture", "Bras d'Or Lake is an inland sea", "Spectacular coastal scenery"]
    }
  },
  {
    id: "manitoulin-island-nature-v2",
    type: "island",
    parent: "CA-ON",
    coords: [-82.5, 45.75],
    name: { de: "Manitoulin Island", hu: "Manitoulin-sziget", ro: "Insula Manitoulin", en: "Manitoulin Island" },
    description: {
      de: "Die größte in einem See gelegene Insel der Welt, im Huronsee.",
      hu: "A világ legnagyobb, tóban fekvő szigete a Huron-tóban.",
      ro: "Cea mai mare insulă lacustră din lume, situată în Lacul Huron.",
      en: "The largest freshwater island in the world, located in Lake Huron."
    },
    facts: {
      de: ["Hat zahlreiche eigene Seen", "Wichtiges Zentrum der Anishinaabe-Kultur", "Beliebtes Sommerreiseziel"],
      hu: ["Számos saját tava van", "Az Anishinaabe kultúra fontos központja", "Népszerű nyári úti cél"],
      ro: ["Are numeroase lacuri proprii", "Centru important al culturii Anishinaabe", "Destinație populară de vară"],
      en: ["Has numerous lakes of its own", "Important center of Anishinaabe culture", "Popular summer destination"]
    }
  },
  {
    id: "yukon-river-nature-v2",
    type: "river",
    parent: "CA-YT",
    coords: [-135.0, 60.7],
    name: { de: "Yukon River", hu: "Yukon-folyó", ro: "Fluviul Yukon", en: "Yukon River" },
    description: {
      de: "Ein legendärer Fluss, der für seine Rolle im Klondike-Goldrausch berühmt ist.",
      hu: "Legendás folyó, amely a Klondike-i aranylázban játszott szerepéről híres.",
      ro: "Un fluviu legendar, faimos pentru rolul său în Goana după aur din Klondike.",
      en: "A legendary river, famous for its role in the Klondike Gold Rush."
    },
    facts: {
      de: ["Drittlängster Fluss Nordamerikas", "Fließt durch Yukon und Alaska", "Wichtige Lachswanderungen"],
      hu: ["Észak-Amerika harmadik leghosszabb folyója", "Yukonon és Alaszkán folyik keresztül", "Fontos lazacvonulási útvonal"],
      ro: ["Al treilea cel mai lung fluviu din America de Nord", "Curge prin Yukon și Alaska", "Migrații importante de somon"],
      en: ["Third longest river in North America", "Flows through Yukon and Alaska", "Major salmon runs"]
    }
  },
  {
    id: "mount-foraker-nature-v2",
    type: "mountain",
    parent: "CA-YT",
    coords: [-140.40, 60.56],
    name: { de: "Mount St. Elias", hu: "Mount St. Elias", ro: "Muntele Saint Elias", en: "Mount St. Elias" },
    description: {
      de: "Der zweithöchste Berg in Kanada und den Vereinigten Staaten, an der Grenze zwischen Yukon und Alaska.",
      hu: "Kanada és az Egyesült Államok második legmagasabb hegye, a Yukon és Alaszka határán.",
      ro: "Al doilea cel mai înalt munte din Canada și Statele Unite, la granița dintre Yukon și Alaska.",
      en: "The second highest mountain in both Canada and the United States, on the border of Yukon and Alaska."
    },
    facts: {
      de: ["5.489 Meter hoch", "Teil des größten subpolaren Eisfeldes der Welt", "Extrem schwierig zu besteigen"],
      hu: ["5489 méter magas", "A világ legnagyobb szubpoláris jégmezőjének része", "Rendkívül nehéz megmászni"],
      ro: ["Altitudine de 5.489 metri", "Parte a celui mai mare câmp de gheață subpolar din lume", "Extrem de dificil de escaladat"],
      en: ["5,489 meters high", "Part of the world's largest subpolar icefield", "Extremely difficult to climb"]
    }
  },
  {
    id: "saint-john-river-nature-v2",
    type: "river",
    parent: "CA-NB",
    coords: [-66.06, 45.27],
    name: { de: "Saint John River", hu: "Saint John-folyó", ro: "Râul Saint John", en: "Saint John River" },
    description: {
      de: "Ein großer Fluss, der durch New Brunswick fließt und für seine 'Reversing Falls' in Saint John bekannt ist.",
      hu: "Nagy folyó, amely New Brunswick-en folyik keresztül, és a Saint John-i 'Fordított vízesésről' ismert.",
      ro: "Un râu mare care curge prin New Brunswick, cunoscut pentru 'Cascadele Inversate' din Saint John.",
      en: "A major river flowing through New Brunswick, known for its Reversing Falls in Saint John."
    },
    facts: {
      de: ["'Rhein Nordamerikas'", "Fließt durch Maine (USA) und Quebec/New Brunswick (Kanada)", "Wichtige Route für Loyalisten"],
      hu: ["'Észak-Amerika Rajnája'", "Maine-en (USA), Québec-en és New Brunswick-en (Kanada) folyik keresztül", "Fontos útvonal volt a lojalisták számára"],
      ro: ["'Rinul Americii de Nord'", "Curge prin Maine (SUA) și Quebec/New Brunswick (Canada)", "Ruta importantă pentru loialiști"],
      en: ["'Rhine of North America'", "Flows through Maine (US) and Quebec/New Brunswick (Canada)", "Important route for Loyalists"]
    }
  },
  {
    id: "malgne-lake-nature-v2",
    type: "lake",
    parent: "CA-AB",
    coords: [-116.95, 52.66],
    name: { de: "Maligne Lake", hu: "Maligne-tó", ro: "Lacul Maligne", en: "Maligne Lake" },
    description: {
      de: "Ein malerischer See im Jasper-Nationalpark, berühmt für die winzige Spirit Island.",
      hu: "Festői tó a Jasper Nemzeti Parkban, híres az apró Spirit-szigetről.",
      ro: "Un lac pitoresc în Parcul Național Jasper, renumit pentru mica insulă Spirit.",
      en: "A picturesque lake in Jasper National Park, famous for the tiny Spirit Island."
    },
    facts: {
      de: ["Längster natürlicher See in den kanadischen Rockies", "Spirit Island ist eines der meistfotografierten Motive", "Gletschergespeist"],
      hu: ["A Kanadai-Sziklás-hegység leghosszabb természetes tava", "A Spirit-sziget az egyik legtöbbet fotózott motívum", "Gleccserek táplálják"],
      ro: ["Cel mai lung lac natural din Stâncoșii Canadieni", "Insula Spirit este unul dintre cele mai fotografiate subiecte", "Alimentat de ghețari"],
      en: ["Longest natural lake in the Canadian Rockies", "Spirit Island is one of the most photographed scenes", "Glacier-fed"]
    }
  },
  {
    id: "bow-river-nature-v2",
    type: "river",
    parent: "CA-AB",
    coords: [-114.07, 51.05],
    name: { de: "Bow River", hu: "Bow-folyó", ro: "Râul Bow", en: "Bow River" },
    description: {
      de: "Ein Fluss in Alberta, der aus den Rocky Mountains kommt und durch Calgary fließt.",
      hu: "Folyó Albertában, amely a Sziklás-hegységből ered és Calgaryn folyik keresztül.",
      ro: "Un râu în Alberta care izvorăște din Munții Stâncoși și curge prin Calgary.",
      en: "A river in Alberta that originates in the Rocky Mountains and flows through Calgary."
    },
    facts: {
      de: ["Quelle ist der Bow-Gletscher", "Weltklasse-Revier für Fliegenfischen", "Wichtige Wasserquelle für Calgary"],
      hu: ["Forrása a Bow-gleccser", "Világszínvonalú legyezőhorgász-terület", "Fontos vízforrás Calgary számára"],
      ro: ["Izvorul este Ghețarul Bow", "Zonă de clasă mondială pentru pescuitul cu muscă", "Sursă importantă de apă pentru Calgary"],
      en: ["Source is the Bow Glacier", "World-class fly-fishing destination", "Major water source for Calgary"]
    }
  }
];
