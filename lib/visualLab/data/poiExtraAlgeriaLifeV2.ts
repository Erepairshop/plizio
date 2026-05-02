import type { POI } from "./poi";

export const poiExtraAlgeriaLifeV2: POI[] = [
  {
    id: "tassili-n-ajjer-life-v2",
    type: "animal-habitat",
    parent: "DZ-33",
    coords: [8.5, 25.0],
    name: { de: "Tassili n'Ajjer", hu: "Tassili n'Ajjer", ro: "Tassili n'Ajjer", en: "Tassili n'Ajjer" },
    description: { de: "Ein Bergplateau, das seltene Tierarten wie den Saharageparden beherbergt.", hu: "Egy hegyfennsík, amely ritka állatfajoknak, például a szaharai gepárdnak ad otthont.", ro: "Un platou montan care găzduiește specii rare precum ghepardul saharian.", en: "A mountain plateau home to rare species like the Saharan cheetah." },
    facts: {
      de: ["UNESCO-Welterbe", "Heimat des Saharageparden", "Felsmalereien vorhanden"],
      hu: ["UNESCO Világörökség", "A szaharai gepárd élőhelye", "Sziklarajzok találhatók itt"],
      ro: ["Patrimoniul Mondial UNESCO", "Habitat al ghepardului saharian", "Picturi rupestre prezente"],
      en: ["UNESCO World Heritage Site", "Home to the Saharan cheetah", "Rock paintings present"]
    }
  },
  {
    id: "hoggar-mountains-life-v2",
    type: "animal-habitat",
    parent: "DZ-11",
    coords: [5.5, 23.0],
    name: { de: "Hoggar-Gebirge", hu: "Hoggar-hegység", ro: "Munții Hoggar", en: "Hoggar Mountains" },
    description: { de: "Eine beeindruckende Gebirgsregion mit einzigartiger Wüstenfauna.", hu: "Lenyűgöző hegyvidék egyedi sivatagi állatvilággal.", ro: "O regiune muntoasă impresionantă cu o faună deșertică unică.", en: "An impressive mountain region with unique desert fauna." },
    facts: {
      de: ["Höchster Gipfel: Tahat", "Vulkanisches Gestein", "Seltene Antilopenarten"],
      hu: ["Legmagasabb csúcs: Tahat", "Vulkanikus kőzetek", "Ritka antilopfajok"],
      ro: ["Cel mai înalt vârf: Tahat", "Roci vulcanice", "Specii rare de antilope"],
      en: ["Highest peak: Tahat", "Volcanic rocks", "Rare antelope species"]
    }
  },
  {
    id: "el-kala-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-36",
    coords: [8.4, 36.8],
    name: { de: "Nationalpark El Kala", hu: "El Kala Nemzeti Park", ro: "Parcul Național El Kala", en: "El Kala National Park" },
    description: { de: "Ein Küstenpark, der wichtige Feuchtgebiete und Zugvogelrouten schützt.", hu: "Tengerparti park, amely védi a fontos vizes élőhelyeket és a költöző madarak útvonalait.", ro: "Un parc de coastă care protejează zone umede importante și rute de migrație ale păsărilor.", en: "A coastal park protecting important wetlands and migratory bird routes." },
    facts: {
      de: ["Biosphärenreservat", "Wichtige Vogelbrutgebiete", "Küstenökosystem"],
      hu: ["Bioszféra-rezervátum", "Fontos madárköltőhelyek", "Parti ökoszisztéma"],
      ro: ["Rezervație a biosferei", "Zone importante de cuibărit pentru păsări", "Ecosistem costier"],
      en: ["Biosphere reserve", "Important bird breeding grounds", "Coastal ecosystem"]
    }
  },
  {
    id: "chrea-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-09",
    coords: [2.8, 36.4],
    name: { de: "Nationalpark Chréa", hu: "Chréa Nemzeti Park", ro: "Parcul Național Chréa", en: "Chréa National Park" },
    description: { de: "Bekannt für seine Berberaffenpopulation im Atlasgebirge.", hu: "Az Atlasz-hegységben élő berber majom populációjáról ismert.", ro: "Cunoscut pentru populația sa de macaci de Berberia din Munții Atlas.", en: "Known for its Barbary macaque population in the Atlas Mountains." },
    facts: {
      de: ["Berberaffen beheimatet", "Beliebtes Wandergebiet", "Zedernwälder"],
      hu: ["Berber majmok otthona", "Népszerű túrázóhely", "Cédruserdők"],
      ro: ["Acasă pentru macacii de Berberia", "Zonă populară de drumeții", "Păduri de cedru"],
      en: ["Home to Barbary macaques", "Popular hiking area", "Cedar forests"]
    }
  },
  {
    id: "gouraya-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-06",
    coords: [5.1, 36.7],
    name: { de: "Nationalpark Gouraya", hu: "Gouraya Nemzeti Park", ro: "Parcul Național Gouraya", en: "Gouraya National Park" },
    description: { de: "Ein Park an der Mittelmeerküste mit vielfältiger Flora und Fauna.", hu: "A Földközi-tenger partján fekvő park változatos növény- és állatvilággal.", ro: "Un parc de pe coasta Mediteranei cu o floră și faună diversă.", en: "A park on the Mediterranean coast with diverse flora and fauna." },
    facts: {
      de: ["Meeresküste", "Berberaffen", "Wanderwege"],
      hu: ["Tengerpart", "Berber majmok", "Túraútvonalak"],
      ro: ["Coasta mării", "Macaci de Berberia", "Trasee de drumeție"],
      en: ["Seacoast", "Barbary macaques", "Hiking trails"]
    }
  },
  {
    id: "mitidja-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-09",
    coords: [3.0, 36.5],
    name: { de: "Mitidja-Ebene", hu: "Mitidja-alföld", ro: "Câmpia Mitidja", en: "Mitidja Plain" },
    description: { de: "Das fruchtbarste landwirtschaftliche Gebiet Algeriens, bekannt für Zitrusfrüchte.", hu: "Algéria legtermékenyebb mezőgazdasági területe, amely citrusféléiről ismert.", ro: "Cea mai fertilă zonă agricolă din Algeria, cunoscută pentru citrice.", en: "The most fertile agricultural area in Algeria, known for citrus fruits." },
    facts: {
      de: ["Zitrusfrüchteanbau", "Hauptanbaugebiet", "Reichhaltiger Boden"],
      hu: ["Citrusfélék termesztése", "Fő termőterület", "Gazdag talaj"],
      ro: ["Cultivarea citricelor", "Principală zonă de producție", "Sol bogat"],
      en: ["Citrus production", "Main farming region", "Rich soil"]
    }
  },
  {
    id: "oued-souf-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-39",
    coords: [6.8, 33.3],
    name: { de: "Oued Souf", hu: "Oued Souf", ro: "Oued Souf", en: "Oued Souf" },
    description: { de: "Bekannt für den Anbau von Dattelpalmen in der Sahara.", hu: "A Szaharában folyó datolyapálma-termesztéséről ismert.", ro: "Cunoscută pentru cultivarea curmalilor în Sahara.", en: "Known for date palm cultivation in the Sahara." },
    facts: {
      de: ["Dattelproduktion", "Oasenwirtschaft", "Traditionelle Methoden"],
      hu: ["Datolyatermesztés", "Oázisgazdálkodás", "Hagyományos módszerek"],
      ro: ["Producția de curmale", "Agricultură de oază", "Metode tradiționale"],
      en: ["Date production", "Oasis farming", "Traditional methods"]
    }
  },
  {
    id: "annaba-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-23",
    coords: [7.7, 36.9],
    name: { de: "Annaba Umland", hu: "Annaba környéke", ro: "Împrejurimile Annaba", en: "Annaba Surroundings" },
    description: { de: "Region mit intensivem Weinbau und Gemüseanbau.", hu: "Intenzív szőlőtermesztésről és zöldségtermesztésről ismert régió.", ro: "Regiune cunoscută pentru viticultură și cultivarea legumelor.", en: "Region known for intensive viticulture and vegetable farming." },
    facts: {
      de: ["Weinbaugebiet", "Gemüseanbau", "Küstenklima"],
      hu: ["Szőlőtermő vidék", "Zöldségtermesztés", "Parti klíma"],
      ro: ["Zonă viticolă", "Cultivarea legumelor", "Climat costier"],
      en: ["Viticulture area", "Vegetable farming", "Coastal climate"]
    }
  },
  {
    id: "biskra-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-07",
    coords: [5.7, 34.8],
    name: { de: "Biskra Oase", hu: "Biskra oázis", ro: "Oaza Biskra", en: "Biskra Oasis" },
    description: { de: "Zentrum für den Anbau von hochwertigen Datteln.", hu: "A kiváló minőségű datolya termesztésének központja.", ro: "Centrul pentru cultivarea curmalelor de înaltă calitate.", en: "Center for the cultivation of high-quality dates." },
    facts: {
      de: ["Deglet-Nour-Datteln", "Wüstenklima", "Bewässerung"],
      hu: ["Deglet-Nour datolya", "Sivatagi klíma", "Öntözés"],
      ro: ["Curmale Deglet-Nour", "Climat deșertic", "Irigare"],
      en: ["Deglet Nour dates", "Desert climate", "Irrigation"]
    }
  },
  {
    id: "setif-highlands-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-19",
    coords: [5.4, 36.2],
    name: { de: "Sétif Hochland", hu: "Sétif-fennsík", ro: "Podișul Sétif", en: "Sétif Highlands" },
    description: { de: "Wichtige Region für Getreideanbau im Norden Algeriens.", hu: "Fontos gabonatermesztő régió Algéria északi részén.", ro: "Regiune importantă pentru cultivarea cerealelor în nordul Algeriei.", en: "Important region for grain farming in northern Algeria." },
    facts: {
      de: ["Getreideanbau", "Hochlandklima", "Landwirtschaftliche Zentrale"],
      hu: ["Gabonatermesztés", "Fennsíki klíma", "Mezőgazdasági központ"],
      ro: ["Cultivarea cerealelor", "Climat de podiș", "Centru agricol"],
      en: ["Grain farming", "Highland climate", "Agricultural hub"]
    }
  },
  {
    id: "algiers-botanical-garden-life-v2",
    type: "kid-landmark",
    parent: "DZ-16",
    coords: [3.0, 36.7],
    name: { de: "Botanischer Garten Hamma", hu: "Hamma Botanikus Kert", ro: "Grădina Botanică Hamma", en: "Hamma Botanical Garden" },
    description: { de: "Ein grüner Park in Algier, ideal für Familien und Kinder.", hu: "Zöld park Algírban, ideális családoknak és gyerekeknek.", ro: "O grădină verde în Alger, ideală pentru familii și copii.", en: "A green park in Algiers, ideal for families and children." },
    facts: {
      de: ["Seltene Pflanzen", "Spielbereiche", "Erholungsort"],
      hu: ["Ritka növények", "Játszóterek", "Pihenőhely"],
      ro: ["Plante rare", "Zone de joacă", "Loc de relaxare"],
      en: ["Rare plants", "Play areas", "Recreation spot"]
    }
  },
  {
    id: "aquafortland-park-life-v2",
    type: "kid-landmark",
    parent: "DZ-16",
    coords: [3.2, 36.7],
    name: { de: "Aquafortland", hu: "Aquafortland", ro: "Aquafortland", en: "Aquafortland" },
    description: { de: "Ein beliebter Wasserpark für Kinder in Algier.", hu: "Népszerű vízi élménypark gyerekeknek Algírban.", ro: "Un parc acvatic popular pentru copii în Alger.", en: "A popular water park for kids in Algiers." },
    facts: {
      de: ["Wasserrutschen", "Schwimmbecken", "Familienattraktion"],
      hu: ["Csúszdák", "Medencék", "Családi attrakció"],
      ro: ["Tobogane cu apă", "Piscine", "Atracție de familie"],
      en: ["Water slides", "Swimming pools", "Family attraction"]
    }
  },
  {
    id: "dinosaur-park-setif-life-v2",
    type: "kid-landmark",
    parent: "DZ-19",
    coords: [5.3, 36.1],
    name: { de: "Dinosaurierpark Sétif", hu: "Dinoszaurusz Park Sétif", ro: "Parcul Dinozaurilor Sétif", en: "Dinosaur Park Sétif" },
    description: { de: "Ein Themenpark mit Dinosauriernachbildungen für Kinder.", hu: "Tematikus park dinoszaurusz-replikákkal gyerekeknek.", ro: "Un parc tematic cu replici de dinozauri pentru copii.", en: "A theme park with dinosaur replicas for children." },
    facts: {
      de: ["Lebensgroße Modelle", "Bildungsangebot", "Unterhaltung"],
      hu: ["Élethű modellek", "Oktató jellegű", "Szórakozás"],
      ro: ["Modele în mărime naturală", "Valoare educativă", "Divertisment"],
      en: ["Life-sized models", "Educational value", "Entertainment"]
    }
  },
  {
    id: "mostaganem-wildlife-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-27",
    coords: [0.1, 35.9],
    name: { de: "Tierpark Mostaganem", hu: "Mostaganem Állatkert", ro: "Grădina Zoologică Mostaganem", en: "Mostaganem Zoo" },
    description: { de: "Ein kleiner Zoo mit Fokus auf lokale Tierarten.", hu: "Kis állatkert, amely a helyi állatfajokra összpontosít.", ro: "O grădină zoologică mică axată pe specii locale de animale.", en: "A small zoo focusing on local animal species." },
    facts: {
      de: ["Familienbesuche", "Lokale Fauna", "Bildung"],
      hu: ["Családi látogatások", "Helyi fauna", "Oktatás"],
      ro: ["Vizite în familie", "Faună locală", "Educație"],
      en: ["Family visits", "Local fauna", "Education"]
    }
  },
  {
    id: "oran-aquarium-life-v2",
    type: "kid-landmark",
    parent: "DZ-31",
    coords: [-0.6, 35.7],
    name: { de: "Aquarium von Oran", hu: "Oráni Akvárium", ro: "Acvariul din Oran", en: "Oran Aquarium" },
    description: { de: "Ein Aquarium, das das Meeresleben des Mittelmeers zeigt.", hu: "A Földközi-tenger élővilágát bemutató akvárium.", ro: "Un acvariu care prezintă viața marină a Mediteranei.", en: "An aquarium showcasing the marine life of the Mediterranean." },
    facts: {
      de: ["Unterwasserwelt", "Bildung", "Kinderattraktion"],
      hu: ["Vízalatti világ", "Oktatás", "Gyerekattrakció"],
      ro: ["Lume subacvatică", "Educație", "Atracție pentru copii"],
      en: ["Underwater world", "Education", "Kids attraction"]
    }
  },
  {
    id: "taza-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-18",
    coords: [5.6, 36.6],
    name: { de: "Nationalpark Taza", hu: "Taza Nemzeti Park", ro: "Parcul Național Taza", en: "Taza National Park" },
    description: { de: "Ein Park, der eine große Vielfalt an Vögeln und Säugetieren schützt.", hu: "Park, amely madarak és emlősök nagy változatosságát védi.", ro: "Un parc care protejează o mare varietate de păsări și mamifere.", en: "A park protecting a great variety of birds and mammals." },
    facts: {
      de: ["Biosphärenreservat", "Küstenlandschaft", "Flora"],
      hu: ["Bioszféra-rezervátum", "Parti táj", "Növényvilág"],
      ro: ["Rezervație a biosferei", "Peisaj costier", "Floră"],
      en: ["Biosphere reserve", "Coastal landscape", "Flora"]
    }
  },
  {
    id: "belezma-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-05",
    coords: [6.1, 35.6],
    name: { de: "Nationalpark Belezma", hu: "Belezma Nemzeti Park", ro: "Parcul Național Belezma", en: "Belezma National Park" },
    description: { de: "Ein bergiger Park, bekannt für seine Atlas-Zedern.", hu: "Hegyvidéki park, amely az atlaszi cédrusairól ismert.", ro: "Un parc muntos cunoscut pentru cedrii săi din Atlas.", en: "A mountainous park known for its Atlas cedars." },
    facts: {
      de: ["Atlas-Zedern", "Wildtiere", "Wandern"],
      hu: ["Atlaszi cédrus", "Vadvilág", "Túrázás"],
      ro: ["Cedri de Atlas", "Animale sălbatice", "Drumeții"],
      en: ["Atlas cedars", "Wildlife", "Hiking"]
    }
  },
  {
    id: "djurdjura-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-10",
    coords: [4.1, 36.4],
    name: { de: "Nationalpark Djurdjura", hu: "Djurdjura Nemzeti Park", ro: "Parcul Național Djurdjura", en: "Djurdjura National Park" },
    description: { de: "Hohe Gipfel und Heimat der Berberaffen.", hu: "Magas csúcsok és a berber majmok otthona.", ro: "Vârfuri înalte și casa macacilor de Berberia.", en: "High peaks and home to Barbary macaques." },
    facts: {
      de: ["Berberaffen", "Hohe Gipfel", "Naturlandschaft"],
      hu: ["Berber majmok", "Magas csúcsok", "Természeti táj"],
      ro: ["Macaci de Berberia", "Vârfuri înalte", "Peisaj natural"],
      en: ["Barbary macaques", "High peaks", "Natural landscape"]
    }
  },
  {
    id: "theniet-el-had-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-38",
    coords: [2.0, 35.8],
    name: { de: "Nationalpark Theniet El Had", hu: "Theniet El Had Nemzeti Park", ro: "Parcul Național Theniet El Had", en: "Theniet El Had National Park" },
    description: { de: "Berühmt für seine dichten Zedernwälder.", hu: "Híres a sűrű cédruserdőiről.", ro: "Faimos pentru pădurile sale dese de cedru.", en: "Famous for its dense cedar forests." },
    facts: {
      de: ["Zedernwald", "Wanderwege", "Ruhe"],
      hu: ["Cédruserdő", "Túraútvonalak", "Nyugalom"],
      ro: ["Pădure de cedru", "Trasee de drumeție", "Liniște"],
      en: ["Cedar forest", "Hiking trails", "Tranquility"]
    }
  },
  {
    id: "tlemcen-national-park-life-v2",
    type: "animal-habitat",
    parent: "DZ-13",
    coords: [-1.3, 34.8],
    name: { de: "Nationalpark Tlemcen", hu: "Tlemcen Nemzeti Park", ro: "Parcul Național Tlemcen", en: "Tlemcen National Park" },
    description: { de: "Ein Park, der eine reiche Flora und historische Stätten umfasst.", hu: "Park, amely gazdag növényvilágot és történelmi helyszíneket foglal magában.", ro: "Un parc care cuprinde o floră bogată și situri istorice.", en: "A park that includes rich flora and historical sites." },
    facts: {
      de: ["Flora", "Tlemcen-Wasserfälle", "Natur"],
      hu: ["Növényvilág", "Tlemcen vízesések", "Természet"],
      ro: ["Floră", "Cascadele Tlemcen", "Natură"],
      en: ["Flora", "Tlemcen waterfalls", "Nature"]
    }
  },
  {
    id: "guelma-thermal-baths-life-v2",
    type: "kid-landmark",
    parent: "DZ-24",
    coords: [7.5, 36.4],
    name: { de: "Hammam Debagh", hu: "Hammam Debagh", ro: "Hammam Debagh", en: "Hammam Debagh" },
    description: { de: "Thermalquellen, die bei Familien sehr beliebt sind.", hu: "Termálforrások, amelyek nagyon népszerűek a családok körében.", ro: "Izvoare termale foarte populare printre familii.", en: "Thermal springs that are very popular among families." },
    facts: {
      de: ["Heißes Wasser", "Erholung", "Familien"],
      hu: ["Forró víz", "Pihenés", "Családok"],
      ro: ["Apă caldă", "Relaxare", "Familii"],
      en: ["Hot water", "Relaxation", "Families"]
    }
  },
  {
    id: "el-oued-palm-groves-life-v2",
    type: "agriculture",
    parent: "DZ-39",
    coords: [6.8, 33.3],
    name: { de: "Palmenhaine von El Oued", hu: "El Oued pálmaligetek", ro: "Lunzile de palmieri El Oued", en: "El Oued Palm Groves" },
    description: { de: "Traditionelle Oasen-Landwirtschaft in der Wüste.", hu: "Hagyományos oázis-mezőgazdaság a sivatagban.", ro: "Agricultură tradițională de oază în deșert.", en: "Traditional oasis farming in the desert." },
    facts: {
      de: ["Oasenbau", "Datteln", "Tradition"],
      hu: ["Oázisépítés", "Datolya", "Hagyomány"],
      ro: ["Amenajarea oazelor", "Curmale", "Tradiție"],
      en: ["Oasis farming", "Dates", "Tradition"]
    }
  },
  {
    id: "mascara-vineyards-life-v2",
    type: "agriculture",
    parent: "DZ-29",
    coords: [0.1, 35.3],
    name: { de: "Weinberge von Mascara", hu: "Mascara szőlőskertek", ro: "Podgoriile Mascara", en: "Mascara Vineyards" },
    description: { de: "Region mit langer Tradition im Weinanbau.", hu: "Hosszú hagyományokkal rendelkező régió a szőlőtermesztésben.", ro: "Regiune cu o lungă tradiție în viticultură.", en: "Region with a long tradition in viticulture." },
    facts: {
      de: ["Weinbau", "Klima", "Tradition"],
      hu: ["Szőlőtermesztés", "Klíma", "Hagyomány"],
      ro: ["Viticultură", "Climat", "Tradiție"],
      en: ["Viticulture", "Climate", "Tradition"]
    }
  },
  {
    id: "tipaza-coastal-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-42",
    coords: [2.4, 36.6],
    name: { de: "Küstenlandwirtschaft Tipaza", hu: "Tipaza parti mezőgazdasága", ro: "Agricultura costieră Tipaza", en: "Tipaza Coastal Agriculture" },
    description: { de: "Fruchtbares Land direkt am Meer.", hu: "Termékeny föld közvetlenül a tengerparton.", ro: "Pământ fertil chiar pe malul mării.", en: "Fertile land right by the sea." },
    facts: {
      de: ["Obstbau", "Gemüse", "Küstenklima"],
      hu: ["Gyümölcstermesztés", "Zöldségek", "Parti klíma"],
      ro: ["Cultivarea fructelor", "Legume", "Climat costier"],
      en: ["Fruit growing", "Vegetables", "Coastal climate"]
    }
  },
  {
    id: "ghardaia-oasis-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-47",
    coords: [3.7, 32.5],
    name: { de: "Oase Ghardaia", hu: "Ghardaia oázis", ro: "Oaza Ghardaia", en: "Ghardaia Oasis" },
    description: { de: "Einzigartige Oasen-Kultur mit traditioneller Bewässerung.", hu: "Egyedülálló oázis-kultúra hagyományos öntözéssel.", ro: "Cultură de oază unică cu irigare tradițională.", en: "Unique oasis culture with traditional irrigation." },
    facts: {
      de: ["Datteln", " Bewässerung", "Kultur"],
      hu: ["Datolya", "Öntözés", "Kultúra"],
      ro: ["Curmale", "Irigare", "Cultură"],
      en: ["Dates", "Irrigation", "Culture"]
    }
  },
  {
    id: "souk-ahras-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-41",
    coords: [7.9, 36.3],
    name: { de: "Souk Ahras Landwirtschaft", hu: "Souk Ahras mezőgazdasága", ro: "Agricultura Souk Ahras", en: "Souk Ahras Agriculture" },
    description: { de: "Region mit Fokus auf Getreide und Hülsenfrüchte.", hu: "Gabonafélékre és hüvelyesekre fókuszáló régió.", ro: "Regiune axată pe cereale și leguminoase.", en: "Region focusing on grains and legumes." },
    facts: {
      de: ["Getreide", "Hülsenfrüchte", "Klima"],
      hu: ["Gabonafélék", "Hüvelyesek", "Klíma"],
      ro: ["Cereale", "Leguminoase", "Climat"],
      en: ["Grains", "Legumes", "Climate"]
    }
  },
  {
    id: "skikda-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-21",
    coords: [6.9, 36.8],
    name: { de: "Skikda Obstbau", hu: "Skikda gyümölcstermesztése", ro: "Cultivarea fructelor Skikda", en: "Skikda Fruit Growing" },
    description: { de: "Bekannt für Erdbeeren und Zitrusfrüchte.", hu: "Eperről és citrusfélékről ismert.", ro: "Cunoscută pentru căpșuni și citrice.", en: "Known for strawberries and citrus fruits." },
    facts: {
      de: ["Erdbeeren", "Zitrusfrüchte", "Klima"],
      hu: ["Eper", "Citrusfélék", "Klíma"],
      ro: ["Căpșuni", "Citrice", "Climat"],
      en: ["Strawberries", "Citrus fruits", "Climate"]
    }
  },
  {
    id: "tindouf-agriculture-life-v2",
    type: "agriculture",
    parent: "DZ-37",
    coords: [-8.1, 27.7],
    name: { de: "Landwirtschaft in Tindouf", hu: "Mezőgazdaság Tindoufban", ro: "Agricultura în Tindouf", en: "Agriculture in Tindouf" },
    description: { de: "Kleine landwirtschaftliche Projekte in der Wüste.", hu: "Kicsi mezőgazdasági projektek a sivatagban.", ro: "Mici proiecte agricole în deșert.", en: "Small agricultural projects in the desert." },
    facts: {
      de: ["Wüstenanbau", "Resilienz", "Datteln"],
      hu: ["Sivatagi termesztés", "Rugalmasság", "Datolya"],
      ro: ["Agricultură în deșert", "Reziliență", "Curmale"],
      en: ["Desert farming", "Resilience", "Dates"]
    }
  },
  {
    id: "bejaia-botanical-garden-life-v2",
    type: "kid-landmark",
    parent: "DZ-06",
    coords: [5.1, 36.7],
    name: { de: "Botanischer Garten Béjaïa", hu: "Béjaïa Botanikus Kert", ro: "Grădina Botanică Béjaïa", en: "Béjaïa Botanical Garden" },
    description: { de: "Ein entspannender Garten für Familien in Béjaïa.", hu: "Pihentető kert családoknak Béjaïában.", ro: "O grădină relaxantă pentru familii în Béjaïa.", en: "A relaxing garden for families in Béjaïa." },
    facts: {
      de: ["Pflanzenwelt", "Ruhe", "Spaziergänge"],
      hu: ["Növényvilág", "Nyugalom", "Séták"],
      ro: ["Floră", "Liniște", "Plimbări"],
      en: ["Flora", "Tranquility", "Walks"]
    }
  },
  {
    id: "batna-amusement-park-life-v2",
    type: "kid-landmark",
    parent: "DZ-05",
    coords: [6.1, 35.5],
    name: { de: "Freizeitpark Batna", hu: "Batna Vidámpark", ro: "Parc de Distracții Batna", en: "Batna Amusement Park" },
    description: { de: "Unterhaltungspark für Kinder in Batna.", hu: "Szórakoztató park gyerekeknek Batnában.", ro: "Parc de divertisment pentru copii în Batna.", en: "Amusement park for kids in Batna." },
    facts: {
      de: ["Fahrgeschäfte", "Spiele", "Spaß"],
      hu: ["Lovaglás", "Játékok", "Szórakozás"],
      ro: ["Atracții", "Jocuri", "Distracție"],
      en: ["Rides", "Games", "Fun"]
    }
  }
];
