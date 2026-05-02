import type { POI } from "./poi";

export const poiExtraZambiaReliefV2: POI[] = [
  {
    id: "luangwa-rift-valley-relief-v2",
    type: "relief",
    parent: "ZM-05",
    coords: [32.0, -13.5],
    name: { de: "Luangwa-Grabenbruch", hu: "Luangwa-árok", ro: "Valea Riftului Luangwa", en: "Luangwa Rift Valley" },
    description: { de: "Ein Teil des Ostafrikanischen Grabenbruchsystems mit steilen Hängen.", hu: "A Kelet-afrikai árokrendszer része meredek lejtőkkel.", ro: "Parte a sistemului de rift est-african cu versanți abrupți.", en: "Part of the East African Rift system with steep slopes." },
    facts: {
      de: ["Tiefer Graben mit einzigartiger Geologie.", "Grenzt an das Muchinga-Gebirge."],
      hu: ["Mély árok egyedülálló geológiával.", "Határos a Muchinga-hegységgel."],
      ro: ["Rift adânc cu o geologie unică.", "Se învecinează cu Munții Muchinga."],
      en: ["Deep rift with unique geology.", "Borders the Muchinga Mountains."]
    }
  },
  {
    id: "muchinga-mountains-relief-v2",
    type: "mountain",
    parent: "ZM-04",
    coords: [31.5, -11.0],
    name: { de: "Muchinga-Gebirge", hu: "Muchinga-hegység", ro: "Munții Muchinga", en: "Muchinga Mountains" },
    description: { de: "Ein bedeutendes Gebirge, das die Wasserscheide zwischen Sambesi und Kongo bildet.", hu: "Jelentős hegység, amely a vízválasztót képezi a Zambézi és a Kongó között.", ro: "Munți importanți care formează cumpăna apelor între Zambezi și Congo.", en: "Significant mountains forming the watershed between the Zambezi and Congo." },
    facts: {
      de: ["Erstreckt sich über den Nordosten Sambias.", "Hohe Plateaus und tiefe Täler."],
      hu: ["Zambia északkeleti részén húzódik.", "Magas fennsíkok és mély völgyek."],
      ro: ["Se întinde pe nord-estul Zambiei.", "Platouri înalte și văi adânci."],
      en: ["Stretches across northeastern Zambia.", "High plateaus and deep valleys."]
    }
  },
  {
    id: "tanganyika-plateau-relief-v2",
    type: "relief",
    parent: "ZM-08",
    coords: [31.0, -9.0],
    name: { de: "Tanganjika-Plateau", hu: "Tanganyika-fennsík", ro: "Platoul Tanganyika", en: "Tanganyika Plateau" },
    description: { de: "Eine ausgedehnte Hochebene oberhalb des Tanganjikasees.", hu: "Kiterjedt fennsík a Tanganyika-tó felett.", ro: "Un platou extins deasupra Lacului Tanganyika.", en: "An extensive plateau above Lake Tanganyika." },
    facts: {
      de: ["Bietet spektakuläre Ausblicke auf den See.", "Geologisch stabil und alt."],
      hu: ["Látványos kilátást nyújt a tóra.", "Geológiailag stabil és öreg."],
      ro: ["Oferă priveliști spectaculoase asupra lacului.", "Din punct de vedere geologic stabil și vechi."],
      en: ["Offers spectacular views of the lake.", "Geologically stable and old."]
    }
  },
  {
    id: "kafue-flats-relief-v2",
    type: "relief",
    parent: "ZM-07",
    coords: [27.5, -15.5],
    name: { de: "Kafue-Flutebene", hu: "Kafue-ártér", ro: "Câmpia inundabilă Kafue", en: "Kafue Flats" },
    description: { de: "Eine riesige, saisonal überschwemmte Schwemmebene.", hu: "Hatalmas, szezonálisan elárasztott ártéri síkság.", ro: "O câmpie aluvială vastă, inundată sezonier.", en: "A vast, seasonally flooded alluvial plain." },
    facts: {
      de: ["Flaches Terrain mit hohem Wasserstand.", "Wichtig für die lokale Ökologie."],
      hu: ["Lapos terep magas vízszinttel.", "Fontos a helyi ökológia számára."],
      ro: ["Teren plat cu nivel ridicat al apei.", "Important pentru ecologia locală."],
      en: ["Flat terrain with high water level.", "Important for local ecology."]
    }
  },
  {
    id: "bangweulu-basin-relief-v2",
    type: "relief",
    parent: "ZM-04",
    coords: [29.5, -11.0],
    name: { de: "Bangweulu-Becken", hu: "Bangweulu-medence", ro: "Bazinul Bangweulu", en: "Bangweulu Basin" },
    description: { de: "Ein großes flaches Becken, das den Bangweulusee beherbergt.", hu: "Nagy, lapos medence, amely a Bangweulu-tavat foglalja magában.", ro: "Un bazin plat mare care găzduiește Lacul Bangweulu.", en: "A large flat basin that hosts Lake Bangweulu." },
    facts: {
      de: ["Sehr flache Uferlandschaften.", "Entstand durch tektonische Absenkung."],
      hu: ["Nagyon lapos parti tájak.", "Tektonikus süllyedéssel keletkezett."],
      ro: ["Peisaje costiere foarte plate.", "Format prin subsidență tectonică."],
      en: ["Very flat shoreline landscapes.", "Formed by tectonic subsidence."]
    }
  },
  {
    id: "nyika-plateau-relief-v2",
    type: "mountain",
    parent: "ZM-05",
    coords: [33.5, -10.5],
    name: { de: "Nyika-Plateau", hu: "Nyika-fennsík", ro: "Platoul Nyika", en: "Nyika Plateau" },
    description: { de: "Ein hochgelegenes Grasland-Plateau mit kühlem Klima.", hu: "Magasan fekvő füves fennsík hűvös klímával.", ro: "Un platou cu pajiști la altitudine cu un climat răcoros.", en: "A high-altitude grassland plateau with cool climate." },
    facts: {
      de: ["Grenzt an Malawi.", "Rolllandschaft mit sanften Hügeln."],
      hu: ["Határos Malawival.", "Gördülő táj lágy dombokkal."],
      ro: ["Se învecinează cu Malawi.", "Peisaj valonat cu dealuri domoale."],
      en: ["Borders Malawi.", "Rolling landscape with gentle hills."]
    }
  },
  {
    id: "zambezi-valley-relief-v2",
    type: "relief",
    parent: "ZM-05",
    coords: [29.0, -16.0],
    name: { de: "Sambesi-Tal", hu: "Zambézi-völgy", ro: "Valea Zambezi", en: "Zambezi Valley" },
    description: { de: "Ein breites Tal, durch das der Sambesi-Fluss strömt.", hu: "Széles völgy, amelyen keresztülfolyik a Zambézi folyó.", ro: "O vale largă prin care curge râul Zambezi.", en: "A wide valley through which the Zambezi River flows." },
    facts: {
      de: ["Heißes und trockenes Klima im Tal.", "Fruchtbare Alluvialböden."],
      hu: ["Forró és száraz klíma a völgyben.", "Termékeny hordalékos talajok."],
      ro: ["Climat cald și uscat în vale.", "Soluri aluviale fertile."],
      en: ["Hot and dry climate in the valley.", "Fertile alluvial soils."]
    }
  },
  {
    id: "kabwe-plateau-relief-v2",
    type: "relief",
    parent: "ZM-07",
    coords: [28.5, -14.5],
    name: { de: "Kabwe-Plateau", hu: "Kabwe-fennsík", ro: "Platoul Kabwe", en: "Kabwe Plateau" },
    description: { de: "Eine zentrale Hochebene, auf der Lusaka liegt.", hu: "Központi fennsík, ahol Lusaka fekszik.", ro: "Un platou central unde se află Lusaka.", en: "A central plateau where Lusaka lies." },
    facts: {
      de: ["Durchschnittshöhe von etwa 1200 Metern.", "Typische Savannenlandschaft."],
      hu: ["Átlagos magasság körülbelül 1200 méter.", "Tipikus szavannai táj."],
      ro: ["Altitudine medie de aproximativ 1200 de metri.", "Peisaj tipic de savană."],
      en: ["Average height of about 1200 meters.", "Typical savanna landscape."]
    }
  },
  {
    id: "northwestern-highlands-relief-v2",
    type: "mountain",
    parent: "ZM-06",
    coords: [25.0, -12.0],
    name: { de: "Nordwest-Hochland", hu: "Északnyugati felföld", ro: "Podișul de nord-vest", en: "Northwestern Highlands" },
    description: { de: "Hügeliges Gelände im Nordwesten Sambias.", hu: "Hilly terület Zambia északnyugati részén.", ro: "Teren deluros în nord-vestul Zambiei.", en: "Hilly terrain in northwestern Zambia." },
    facts: {
      de: ["Wichtiger Wasserspeicher für Flüsse.", "Sehr regenreich."],
      hu: ["Fontos víztároló a folyók számára.", "Nagyon csapadékos."],
      ro: ["Rezervor de apă important pentru râuri.", "Foarte ploios."],
      en: ["Important water reservoir for rivers.", "Very rainy."]
    }
  },
  {
    id: "barotse-floodplain-relief-v2",
    type: "relief",
    parent: "ZM-09",
    coords: [23.5, -15.0],
    name: { de: "Barotse-Flutebene", hu: "Barotse-ártér", ro: "Câmpia inundabilă Barotse", en: "Barotse Floodplain" },
    description: { de: "Ein ikonisches Flutgebiet des oberen Sambesi.", hu: "Ikonikus ártéri terület a felső-Zambézin.", ro: "O zonă inundabilă iconică a Zambezi-ului superior.", en: "An iconic floodplain of the upper Zambezi." },
    facts: {
      de: ["Das Wasser steigt und fällt jährlich.", "Kulturell bedeutend für die Lozi."],
      hu: ["A víz évente emelkedik és süllyed.", "Kulturálisan jelentős a Lozi nép számára."],
      ro: ["Apa crește și scade anual.", "Cultural important pentru poporul Lozi."],
      en: ["The water rises and falls annually.", "Culturally significant for the Lozi."]
    }
  },
  {
    id: "luapula-valley-relief-v2",
    type: "relief",
    parent: "ZM-04",
    coords: [29.0, -10.0],
    name: { de: "Luapula-Tal", hu: "Luapula-völgy", ro: "Valea Luapula", en: "Luapula Valley" },
    description: { de: "Ein Tal, das dem Lauf des Luapula-Flusses folgt.", hu: "Völgy, amely követi a Luapula folyó útját.", ro: "O vale care urmează cursul râului Luapula.", en: "A valley following the course of the Luapula River." },
    facts: {
      de: ["Fruchtbare Böden entlang des Flusses.", "Wichtig für die Landwirtschaft."],
      hu: ["Termékeny talajok a folyó mentén.", "Fontos a mezőgazdaság számára."],
      ro: ["Soluri fertile de-a lungul râului.", "Important pentru agricultură."],
      en: ["Fertile soils along the river.", "Important for agriculture."]
    }
  },
  {
    id: "mporokoso-plateau-relief-v2",
    type: "relief",
    parent: "ZM-08",
    coords: [30.0, -9.5],
    name: { de: "Mporokoso-Plateau", hu: "Mporokoso-fennsík", ro: "Platoul Mporokoso", en: "Mporokoso Plateau" },
    description: { de: "Ein Plateau im Norden mit vielen Wasserfällen.", hu: "Fennsík az északi részen, sok vízeséssel.", ro: "Un platou în nord cu multe cascade.", en: "A plateau in the north with many waterfalls." },
    facts: {
      de: ["Hohe Niederschlagsmengen.", "Wasserreiches Gebiet."],
      hu: ["Magas csapadékmennyiség.", "Vízben gazdag terület."],
      ro: ["Precipitații ridicate.", "Zonă bogată în apă."],
      en: ["High rainfall.", "Water-rich area."]
    }
  },
  {
    id: "serenje-hills-relief-v2",
    type: "mountain",
    parent: "ZM-04",
    coords: [30.5, -13.5],
    name: { de: "Serenje-Hügel", hu: "Serenje-dombság", ro: "Dealurile Serenje", en: "Serenje Hills" },
    description: { de: "Eine hügelige Landschaft im Herzen Sambias.", hu: "Hilly táj Zambia szívében.", ro: "Un peisaj deluros în inima Zambiei.", en: "A hilly landscape in the heart of Zambia." },
    facts: {
      de: ["Gehört zum Muchinga-Gürtel.", "Ideal für Wanderungen."],
      hu: ["A Muchinga-övezethez tartozik.", "Ideális túrázáshoz."],
      ro: ["Face parte din centura Muchinga.", "Ideal pentru drumeții."],
      en: ["Part of the Muchinga belt.", "Ideal for hiking."]
    }
  },
  {
    id: "mutinondo-wilderness-relief-v2",
    type: "relief",
    parent: "ZM-04",
    coords: [31.0, -12.5],
    name: { de: "Mutinondo-Wildnis", hu: "Mutinondo vadon", ro: "Sălbăticia Mutinondo", en: "Mutinondo Wilderness" },
    description: { de: "Ein felsiges Gebiet mit markanten Granit-Inselbergen.", hu: "Sziklás terület feltűnő gránit-szigethegyekkel.", ro: "O zonă stâncoasă cu inselberguri de granit marcante.", en: "A rocky area with striking granite inselbergs." },
    facts: {
      de: ["Bekannt für geologische Formationen.", "Atemberaubende Aussichtspunkte."],
      hu: ["Ismert geológiai képződményeiről.", "Lélegzetelállító kilátópontok."],
      ro: ["Cunoscută pentru formațiuni geologice.", "Puncte de belvedere uluitoare."],
      en: ["Known for geological formations.", "Breathtaking viewpoints."]
    }
  },
  {
    id: "chambeshi-flats-relief-v2",
    type: "relief",
    parent: "ZM-04",
    coords: [31.0, -11.5],
    name: { de: "Chambeshi-Flutebene", hu: "Chambeshi-ártér", ro: "Câmpia inundabilă Chambeshi", en: "Chambeshi Floodplain" },
    description: { de: "Ein Feuchtgebiet entlang des Chambeshi-Flusses.", hu: "Vizes élőhely a Chambeshi folyó mentén.", ro: "O zonă umedă de-a lungul râului Chambeshi.", en: "A wetland along the Chambeshi River." },
    facts: {
      de: ["Saisonale Überschwemmungen.", "Wichtiger Brutraum."],
      hu: ["Szezonális áradások.", "Fontos költőhely."],
      ro: ["Inundații sezoniere.", "Loc de cuibărit important."],
      en: ["Seasonal flooding.", "Important breeding area."]
    }
  },
  {
    id: "luangwa-escarpment-relief-v2",
    type: "mountain",
    parent: "ZM-05",
    coords: [31.5, -14.0],
    name: { de: "Luangwa-Steilabfall", hu: "Luangwa-lépcső", ro: "Povârnișul Luangwa", en: "Luangwa Escarpment" },
    description: { de: "Eine dramatische Abbruchkante zum Luangwa-Tal.", hu: "Drámai perem a Luangwa-völgy felé.", ro: "O margine dramatică spre Valea Luangwa.", en: "A dramatic cliff edge to the Luangwa Valley." },
    facts: {
      de: ["Großer Höhenunterschied.", "Herausforderndes Gelände."],
      hu: ["Nagy szintkülönbség.", "Kihívást jelentő terep."],
      ro: ["Diferență mare de nivel.", "Teren dificil."],
      en: ["Great height difference.", "Challenging terrain."]
    }
  },
  {
    id: "kabwe-escarpment-relief-v2",
    type: "mountain",
    parent: "ZM-07",
    coords: [28.0, -14.0],
    name: { de: "Kabwe-Steilabfall", hu: "Kabwe-lépcső", ro: "Povârnișul Kabwe", en: "Kabwe Escarpment" },
    description: { de: "Eine topographische Stufe, die das zentrale Plateau begrenzt.", hu: "Topográfiai lépcső, amely határolja a központi fennsíkot.", ro: "O treaptă topografică care limitează platoul central.", en: "A topographical step that limits the central plateau." },
    facts: {
      de: ["Natürliche Grenze zwischen Regionen.", "Auffällige Geländekante."],
      hu: ["Természetes határ régiók között.", "Figyelemre méltó terepél."],
      ro: ["Graniță naturală între regiuni.", "Margine de teren remarcabilă."],
      en: ["Natural border between regions.", "Striking terrain edge."]
    }
  },
  {
    id: "chola-hills-relief-v2",
    type: "mountain",
    parent: "ZM-08",
    coords: [31.5, -9.5],
    name: { de: "Chola-Hügel", hu: "Chola-dombság", ro: "Dealurile Chola", en: "Chola Hills" },
    description: { de: "Eine Bergkette im Nordosten.", hu: "Hegylánc északkeleten.", ro: "Un lanț muntos în nord-est.", en: "A mountain range in the northeast." },
    facts: {
      de: ["Bewaldete Hänge.", "Relativ abgelegen."],
      hu: ["Erdős lejtők.", "Viszonylag távoli."],
      ro: ["Versanți împăduriți.", "Relativ izolat."],
      en: ["Forested slopes.", "Relatively remote."]
    }
  },
  {
    id: "lupande-basin-relief-v2",
    type: "relief",
    parent: "ZM-05",
    coords: [32.0, -13.5],
    name: { de: "Lupande-Becken", hu: "Lupande-medence", ro: "Bazinul Lupande", en: "Lupande Basin" },
    description: { de: "Ein Nebenflusstal des Luangwa.", hu: "Mellékfolyóvölgy a Luangwához.", ro: "O vale a unui afluent al Luangwa.", en: "A tributary valley of the Luangwa." },
    facts: {
      de: ["Saisonale Trockenflüsse.", "Wichtige Wildkorridore."],
      hu: ["Szezonális száraz folyók.", "Fontos vadfolyosók."],
      ro: ["Râuri secate sezonier.", "Coridoare importante pentru animale sălbatice."],
      en: ["Seasonal dry rivers.", "Important wildlife corridors."]
    }
  },
  {
    id: "zambezi-gorge-relief-v2",
    type: "relief",
    parent: "ZM-02",
    coords: [25.8, -17.9],
    name: { de: "Sambesi-Schlucht", hu: "Zambézi-szurdok", ro: "Cheile Zambezi", en: "Zambezi Gorge" },
    description: { de: "Die tiefe Schlucht unterhalb der Viktoriafälle.", hu: "A mély szurdok a Viktória-vízesés alatt.", ro: "Cheile adânci de sub Cascada Victoria.", en: "The deep gorge below Victoria Falls." },
    facts: {
      de: ["Tektonisch geformt.", "Spektakuläre Tiefe."],
      hu: ["Tektonikusan formált.", "Látványos mélység."],
      ro: ["Format tectonic.", "Adâncime spectaculoasă."],
      en: ["Tectonically formed.", "Spectacular depth."]
    }
  },
  {
    id: "katanga-plateau-extension-relief-v2",
    type: "relief",
    parent: "ZM-06",
    coords: [26.0, -11.0],
    name: { de: "Katanga-Plateau-Ausläufer", hu: "Katanga-fennsík nyúlványa", ro: "Prelungirea Platoului Katanga", en: "Katanga Plateau Extension" },
    description: { de: "Ein nördlicher Ausläufer des Katanga-Plateaus.", hu: "A Katanga-fennsík északi nyúlványa.", ro: "O prelungire nordică a Platoului Katanga.", en: "A northern extension of the Katanga Plateau." },
    facts: {
      de: ["Reich an Mineralien.", "Hügeliges Gelände."],
      hu: ["Ásványokban gazdag.", "Hilly terep."],
      ro: ["Bogată în minerale.", "Teren deluros."],
      en: ["Rich in minerals.", "Hilly terrain."]
    }
  },
  {
    id: "kabwe-lowlands-relief-v2",
    type: "relief",
    parent: "ZM-07",
    coords: [28.0, -14.8],
    name: { de: "Kabwe-Tiefland", hu: "Kabwe-alföld", ro: "Câmpia joasă Kabwe", en: "Kabwe Lowlands" },
    description: { de: "Tiefer gelegene Flächen südlich des Plateaus.", hu: "Alacsonyabban fekvő területek a fennsíktól délre.", ro: "Zone de altitudine joasă la sud de platou.", en: "Lower lying areas south of the plateau." },
    facts: {
      de: ["Wärmeres Klima.", "Dichte Vegetation."],
      hu: ["Melegebb klíma.", "Sűrű növényzet."],
      ro: ["Climat mai cald.", "Vegetație densă."],
      en: ["Warmer climate.", "Dense vegetation."]
    }
  },
  {
    id: "lusaka-hills-relief-v2",
    type: "mountain",
    parent: "ZM-01",
    coords: [28.3, -15.4],
    name: { de: "Lusaka-Hügel", hu: "Lusaka-dombság", ro: "Dealurile Lusaka", en: "Lusaka Hills" },
    description: { de: "Sanfte Erhebungen rund um die Hauptstadt.", hu: "Lágy kiemelkedések a főváros körül.", ro: "Elevații domoale în jurul capitalei.", en: "Gentle elevations around the capital." },
    facts: {
      de: ["Prägen das Stadtbild.", "Ideal für kurze Ausflüge."],
      hu: ["Meghatározza a városképet.", "Ideális rövid kirándulásokhoz."],
      ro: ["Definește peisajul urban.", "Ideal pentru excursii scurte."],
      en: ["Define the cityscape.", "Ideal for short trips."]
    }
  },
  {
    id: "mbala-highlands-relief-v2",
    type: "mountain",
    parent: "ZM-08",
    coords: [31.2, -8.8],
    name: { de: "Mbala-Hochland", hu: "Mbala-felföld", ro: "Podișul Mbala", en: "Mbala Highlands" },
    description: { de: "Ein Hochlandgebiet nahe der Grenze zu Tansania.", hu: "Felföldi terület a Tanzániai határ közelében.", ro: "Zonă de podiș aproape de granița cu Tanzania.", en: "Highland area near the border with Tanzania." },
    facts: {
      de: ["Kühles, angenehmes Wetter.", "Landwirtschaftliches Zentrum."],
      hu: ["Hűvös, kellemes idő.", "Mezőgazdasági központ."],
      ro: ["Vreme răcoroasă, plăcută.", "Centru agricol."],
      en: ["Cool, pleasant weather.", "Agricultural center."]
    }
  },
  {
    id: "kafue-escarpment-relief-v2",
    type: "mountain",
    parent: "ZM-07",
    coords: [27.0, -16.0],
    name: { de: "Kafue-Steilabfall", hu: "Kafue-lépcső", ro: "Povârnișul Kafue", en: "Kafue Escarpment" },
    description: { de: "Die Kante, die das Kafue-Tal vom zentralen Plateau trennt.", hu: "A perem, amely elválasztja a Kafue-völgyet a központi fennsíktól.", ro: "Marginea care separă Valea Kafue de platoul central.", en: "The edge that separates the Kafue Valley from the central plateau." },
    facts: {
      de: ["Spektakuläre kurvige Straßen.", "Hohe Biodiversität."],
      hu: ["Látványos kanyargós utak.", "Magas biodiverzitás."],
      ro: ["Drumuri spectaculoase și șerpuite.", "Biodiversitate ridicată."],
      en: ["Spectacular winding roads.", "High biodiversity."]
    }
  }
];
