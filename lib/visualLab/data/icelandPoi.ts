import type { POI } from "./poi";
import { poiExtraIcelandCities } from "./poiExtraIcelandCities";
export const icelandCountry: POI = {
  id: "country-iceland",
  type: "country",
  parent: "europe",
  coords: [-19.0208, 64.9631],
  name: {
    de: "Island",
    hu: "Izland",
    ro: "Islanda",
    en: "Iceland"
  },
  description: {
    de: "Island ist ein Land der extremen Kontraste, bekannt als das 'Land von Feuer und Eis', mit Gletschern, Geysiren und Vulkanen.",
    hu: "Izland a szélsőséges kontrasztok országa, a 'tűz és jég földje', gleccserekkel, gejzírekkel és vulkánokkal.",
    ro: "Islanda este o țară a contrastelor extreme, cunoscută sub numele de „țara focului și a gheții”, cu ghețari, gheizere și vulcani.",
    en: "Iceland is a land of extreme contrasts, known as the 'Land of Fire and Ice', featuring glaciers, geysers, and volcanoes."
  },
  descriptionAdvanced: {
    de: "Island, eine Inselnation im Nordatlantik, ist berühmt für seine dramatische Landschaft mit Vulkanen, Geysiren, Thermalquellen und Lavafeldern. Massive Gletscher sind in den Nationalparks Vatnajökull und Snæfellsjökull geschützt. Die meisten Einwohner leben in der Hauptstadt Reykjavík, die mit Erdwärme betrieben wird und das National- und Saga-Museum beherbergt, die Islands Wikingergeschichte nachzeichnen.",
    hu: "Izland, az észak-atlanti szigetország, drámai tájairól híres, vulkánokkal, gejzírekkel, hőforrásokkal és lávamezőkkel. A hatalmas gleccsereket a Vatnajökull és a Snæfellsjökull Nemzeti Parkok védik. A lakosság többsége a fővárosban, Reykjavíkban él, amely geotermikus energiával működik, és itt található a Nemzeti és a Saga Múzeum is, amelyek Izland viking történelmét mutatják be.",
    ro: "Islanda, o națiune insulară din Atlanticul de Nord, este renumită pentru peisajul său dramatic cu vulcani, gheizere, izvoare termale și câmpuri de lavă. Ghețarii masivi sunt protejați în parcurile naționale Vatnajökull și Snæfellsjökull. Majoritatea populației trăiește în capitala Reykjavík, care funcționează cu energie geotermală și găzduiește muzeele Național și Saga, care retrăiesc istoria vikingă a Islandei.",
    en: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavík, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history."
  },
  facts: {
    de: [
      "Island hat keine Schienenwege (Züge).",
      "Es ist eines der wenigen Länder ohne Mücken.",
      "Mehr als 60% der Bevölkerung leben in Reykjavík.",
      "Island hat über 30 aktive Vulkansysteme.",
      "Das Land nutzt fast zu 100% erneuerbare Energien.",
      "Die Althingi (Islands Parlament) ist das älteste bestehende Parlament der Welt (gegründet 930).",
      "Es gibt mehr Schafe als Menschen in Island.",
      "Bier war in Island bis 1989 verboten.",
      "Island hat keinen Waldanteil; die meisten Bäume wurden von den Wikingern abgeholzt.",
      "Viele Isländer glauben noch heute an Elfen und Trolle."
    ],
    hu: [
      "Izlandon nincsenek vasútvonalak.",
      "Ez azon kevés országok egyike, ahol nincsenek szúnyogok.",
      "A lakosság több mint 60%-a Reykjavíkban él.",
      "Izlandon több mint 30 aktív vulkánrendszer található.",
      "Az ország szinte 100%-ban megújuló energiát használ.",
      "Az Althingi (az izlandi parlament) a világ legrégebbi létező parlamentje (930-ban alapították).",
      "Izlandon több juh él, mint ember.",
      "A sör 1989-ig be volt tiltva Izlandon.",
      "Izlandnak szinte nincs erdős területe; a legtöbb fát a vikingek vágták ki.",
      "Sok izlandi ma is hisz az elfekben és a trollokban."
    ],
    ro: [
      "Islanda nu are căi ferate (trenuri).",
      "Este una dintre puținele țări fără țânțari.",
      "Mai mult de 60% din populație trăiește în Reykjavík.",
      "Islanda are peste 30 de sisteme vulcanice active.",
      "Țara folosește aproape 100% energie regenerabilă.",
      "Althingi (parlamentul Islandei) este cel mai vechi parlament existent din lume (fondat în 930).",
      "Există mai multe oi decât oameni în Islanda.",
      "Berea a fost interzisă în Islanda până în 1989.",
      "Islanda nu are păduri; majoritatea copacilor au fost tăiați de vikingi.",
      "Mulți islandezi cred și astăzi în elfi și troli."
    ],
    en: [
      "Iceland has no public railways.",
      "It is one of the few countries in the world with no mosquitoes.",
      "More than 60% of the population lives in Reykjavík.",
      "Iceland has over 30 active volcanic systems.",
      "The country uses almost 100% renewable energy.",
      "The Althingi (Iceland's parliament) is the oldest surviving parliament in the world (founded in 930).",
      "There are more sheep than people in Iceland.",
      "Beer was banned in Iceland until 1989.",
      "Iceland has very few forests; most trees were cut down by Vikings.",
      "Many Icelanders still believe in elves and trolls."
    ]
  },
  factsAdvanced: {
    de: [],
    hu: [
      "Izland geológiailag a Közép-Atlanti-hátságon fekszik, ami a vulkáni és geotermikus tevékenység fő oka.",
      "Az ország villamosenergia-termelésének kb. 73%-a vízerőművekből, 27%-a pedig geotermikus erőművekből származik.",
      "Az izlandi nyelv rendkívül konzervatív, és nagyon közel áll az óészaki nyelvhez, amelyet a vikingek beszéltek.",
      "Az izlandiaknak nincs hagyományos vezetéknevük; a gyermekek apjuk (vagy anyjuk) keresztnevéből képzett nevet kapnak '-son' (fiú) vagy '-dóttir' (lány) végződéssel.",
      "A 2008-as pénzügyi válság súlyosan érintette az országot, de azóta gazdasága nagymértékben helyreállt, részben a turizmusnak köszönhetően.",
      "A lunda (puffin) Izland nem hivatalos madara, a világ lundapopulációjának több mint fele itt fészkel.",
      "A híres izlandi pulóver, a 'lopapeysa', jellegzetes mintázatú, és helyi gyapjúból készül, amely kiváló hőszigetelő tulajdonságokkal rendelkezik."
    ],
    ro: [
      "Islanda are o populație de aproximativ 370.000 de locuitori, fiind una dintre cele mai slab populate țări din Europa.",
      "Energia geotermală asigură încălzirea a peste 90% din locuințele islandeze.",
      "Limba islandeză a rămas aproape neschimbată de la vechea limbă nordică vorbită de vikingi.",
      "Cascada Dettifoss este cea mai puternică cascadă din Europa, cu un debit mediu de 193 de metri cubi pe secundă.",
      "Islanda nu are o armată permanentă.",
      "Consumul de Coca-Cola pe cap de locuitor este mai mare în Islanda decât în orice altă țară.",
      "Parcul Național Vatnajökull acoperă aproximativ 14% din suprafața totală a țării.",
      "Prima femeie președinte aleasă democratic din lume a fost Vigdís Finnbogadóttir din Islanda, în 1980."
    ],
    en: [
      "Geologically, Iceland sits on the Mid-Atlantic Ridge, the primary reason for its intense volcanic and geothermal activity.",
      "The Icelandic language is exceptionally conservative, remaining very close to the Old Norse spoken by the Vikings.",
      "Icelanders use a patronymic (or matronymic) system; children's last names are derived from their father's (or mother's) first name, suffixed with '-son' (son) or '-dóttir' (daughter).",
      "The 2008 financial crisis severely impacted the country, but its economy has since recovered significantly, partly due to a tourism boom.",
      "The Atlantic Puffin is the unofficial bird of Iceland, with over half of the world's puffin population nesting here during summer.",
      "The iconic Icelandic sweater, the 'lopapeysa', is made from the wool of local sheep and has a distinctive yoke pattern.",
      "About 73% of the country's electricity is generated by hydropower, and 27% comes from geothermal power.",
      "Iceland does not have a standing army, navy, or air force."
    ]
  },
  image: "/geo-images/iceland/country-iceland.webp"
};

export const icelandRegions: POI[] = [
  {
    id: "IS-001",
    type: "region",
    parent: "country-iceland",
    coords: [-14.5, 65.0],
    name: { de: "Austurland", hu: "Austurland", ro: "Austurland", en: "Austurland" },
    description: {
      de: "Die Region der Ostfjorde, geprägt von tiefen Fjorden, steilen Bergen und abgelegenen Fischerdörfern.",
      hu: "A Keleti-fjordok régiója, mély fjordok, meredek hegyek és elszigetelt halászfalvak jellemzik.",
      ro: "Regiunea fiordurilor de est, caracterizată prin fiorduri adânci, munți abrupți și sate de pescari izolate.",
      en: "The East Fjords region, characterized by deep fjords, steep mountains, and remote fishing villages."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Austurland, vagyis a Keleti-fjordok vidéke, Izland egyik legkevésbé sűrűn lakott, ám annál drámaibb tájakkal rendelkező régiója. A partvonalat mélyen bevágódó, keskeny fjordok szabdalják, melyek között magas, meredek hegyek emelkednek, gyakran egészen a tengerig lefutva. Ez a vidék ad otthont apró, festői halászfalvaknak, mint például Seyðisfjörður, ahol a színes, történelmi faházak egyedi hangulatot teremtenek. A régió természeti kincsei közé tartoznak a vadon élő rénszarvascsordák, amelyek az országban egyedül itt találhatóak meg. A túrázók számára a Keleti-fjordok számtalan ösvényt kínálnak, amelyek eldugott vízesésekhez és lélegzetelállító kilátópontokhoz vezetnek.",
      ro: "Austurland, cunoscută ca Fiordurile de Est, este o regiune care captivează prin sălbăticia și izolarea sa. Spre deosebire de coasta de sud mai aglomerată, aici peisajul este dominat de fiorduri înguste și adânci, care se strecoară printre munți cu versanți abrupți ce plonjează direct în Atlantic. Satele pescărești, precum Seyðisfjörður, sunt bijuterii arhitecturale cu case colorate din lemn, păstrând o atmosferă de la începutul secolului XX. Regiunea este un paradis pentru drumeții, oferind trasee mai puțin umblate către cascade ascunse și colonii de pufini. De asemenea, este singurul loc din Islanda unde se pot întâlni turme de reni în sălbăticie, aduși inițial în secolul al XVIII-lea.",
      en: "Austurland, the East Fjords, is a region of dramatic, raw beauty and tranquil isolation. Its coastline is deeply indented by narrow fjords flanked by steep-sided mountains that plunge directly into the sea. This sparsely populated area is home to tiny, picturesque fishing villages like Seyðisfjörður, with its distinctive colorful wooden houses creating a unique atmosphere. A key natural treasure of the region is its wild reindeer population, the only one in Iceland. For hikers, the East Fjords offer countless trails leading to secluded waterfalls, breathtaking viewpoints, and encounters with diverse birdlife. The geology here is among the oldest in the country, adding to the region's rugged, ancient character."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Ez az egyetlen régió Izlandon, ahol vadon élő rénszarvasok élnek.",
        "A partvonal teljes hossza a fjordok miatt meghaladja az 1100 kilométert.",
        "A régióban található Izland legnagyobb erdeje, a Hallormsstaðaskógur.",
        "A térség geológiailag az egyik legrégebbi Izlandon, a kőzetek akár 16 millió évesek is lehetnek.",
        "Seyðisfjörður ad otthont a Dániából és a Feröer-szigetekről érkező nemzetközi kompnak.",
        "A Petra's Stone Collection egy híres helyi múzeum, ami egyetlen nő lenyűgöző ásványgyűjteményét mutatja be.",
        "A téli hónapokban a régió útjai a zord időjárás miatt gyakran nehezen járhatóak.",
        "A 'Hengifoss' vízesés különlegessége a vörös agyagrétegekkel tarkított bazaltsziklafal."
      ],
      ro: [
        "Regiunea găzduiește cel mai mare ghețar din Europa, Vatnajökull, în partea sa sudică.",
        "Pădurea Hallormsstaðaskógur este cea mai mare pădure din Islanda, acoperind 740 de hectare.",
        "Singurul feribot internațional, Norröna, care leagă Islanda de Danemarca și Insulele Feroe, acostează în Seyðisfjörður.",
        "Muntele Búlandstindur, lângă Djúpivogur, are o formă piramidală distinctă și este considerat un loc cu energie specială.",
        "În regiune se găsesc numeroase minerale, inclusiv zeoliți și jasp, atrăgând geologi amatori.",
        "Satul Djúpivogur este membru al mișcării internaționale 'Cittaslow', care promovează un ritm de viață mai lent.",
        "Pufinii pot fi observați în număr mare la Borgarfjörður Eystri, una dintre cele mai accesibile locații din țară.",
        "Temperatura medie în timpul iernii în fiorduri este surprinzător de blândă pentru latitudinea sa, rar scăzând sub -3°C."
      ],
      en: [
        "This is the only region in Iceland where you can find wild reindeer.",
        "The region is home to Iceland's largest forest, Hallormsstaðaskógur.",
        "Geologically, the East Fjords are one of the oldest parts of Iceland, with rocks dating back 16 million years.",
        "The international ferry connecting Iceland to Denmark and the Faroe Islands docks in Seyðisfjörður.",
        "The Hengifoss waterfall is famous for its basalt cliff face striped with red clay layers.",
        "Petra's Stone Collection in Stöðvarfjörður is a remarkable local museum showcasing a lifetime's collection of minerals.",
        "Due to the jagged coastline, the total length of the shoreline exceeds 1,100 kilometers.",
        "The village of Djúpivogur is a member of the 'Cittaslow' movement, promoting a slower pace of life."
      ]
    }
  },
  {
    id: "IS-002",
    type: "region",
    parent: "country-iceland",
    coords: [-19.0, 64.0],
    name: { de: "Suðurland", hu: "Suðurland", ro: "Suðurland", en: "Suðurland" },
    description: {
      de: "Südisland beherbergt einige der berühmtesten Attraktionen des Landes, darunter den Golden Circle und riesige Wasserfälle.",
      hu: "Dél-Izland ad otthont az ország leghíresebb látnivalóinak, köztük az Arany körútnak és hatalmas vízeséseknek.",
      ro: "Islanda de Sud găzduiește unele dintre cele mai faimoase atracții ale țării, inclusiv Cercul de Aur și cascade uriașe.",
      en: "South Iceland is home to some of the country's most famous attractions, including the Golden Circle and massive waterfalls."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Suðurland, vagyis Dél-Izland, az ország leglátogatottabb és legismertebb turisztikai célpontjait tömörítő régió. Itt található a híres Arany körút (Golden Circle), amely a Þingvellir Nemzeti Parkot, a Gullfoss vízesést és a Gejzír geotermikus területet foglalja magában. A déli partvidék drámai fekete homokos strandjairól, mint a Reynisfjara, és hatalmas vízeséseiről, mint a Seljalandsfoss és a Skógafoss, híres. A régióban emelkedik több hírhedt vulkán is, például az Eyjafjallajökull és a Hekla. A hatalmas Vatnajökull gleccser pereménél fekszik a Jökulsárlón gleccserlagúna, ahol úszó jéghegyek nyújtanak felejthetetlen látványt. A termékeny síkságoknak köszönhetően ez a vidék Izland mezőgazdaságának központja is.",
      ro: "Suðurland, sau Coasta de Sud, este cea mai vizitată regiune a Islandei, un adevărat 'best of' al peisajelor iconice. Aici se găsește faimosul traseu turistic 'Cercul de Aur', care include Parcul Național Þingvellir, cascada Gullfoss și zona geotermală Geysir. Peisajul este incredibil de divers, variind de la plaje cu nisip negru vulcanic precum Reynisfjara, la lagune glaciare spectaculoase ca Jökulsárlón și cascade impunătoare precum Skógafoss și Seljalandsfoss. Regiunea este flancată de ghețari impresionanți, inclusiv Eyjafjallajökull și Mýrdalsjökull, sub care se ascund vulcani activi. Fertilitatea văilor, udate de râuri glaciare, face din Suðurland și o importantă zonă agricolă a țării.",
      en: "Suðurland, or South Iceland, is the country's most visited region, concentrating a stunning variety of iconic landscapes. It hosts the famous Golden Circle route, which includes Þingvellir National Park, Gullfoss waterfall, and the Geysir geothermal area. The south coast is renowned for its dramatic black sand beaches like Reynisfjara, and magnificent waterfalls such as Seljalandsfoss and Skógafoss. The region is also dominated by infamous glacier-volcanoes, including Eyjafjallajökull and Hekla. On its eastern edge lies the Jökulsárlón glacier lagoon, where icebergs calve from Vatnajökull glacier and drift out to sea. Thanks to its fertile lowlands, this region is also the agricultural heartland of Iceland, with numerous farms dotting the landscape."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Itt található az 'Arany körút', Izland legnépszerűbb turistaútvonala.",
        "Az Eyjafjallajökull vulkán 2010-es kitörése megbénította az európai légiközlekedést.",
        "A Seljalandsfoss vízesés mögé egy ösvényen be lehet sétálni.",
        "A Reynisfjara strand fekete homokját a vulkáni kőzetek eróziója hozta létre.",
        "A Þingvellir Nemzeti Park a világörökség része, itt távolodik egymástól az észak-amerikai és az eurázsiai kőzetlemez.",
        "A Jökulsárlón Izland legmélyebb tava, mélysége eléri a 248 métert.",
        "A régióban található a legtöbb üvegház, melyeket geotermikus energiával fűtenek.",
        "A Hekla Izland egyik legaktívabb vulkánja, a középkorban 'a Pokol kapujának' nevezték."
      ],
      ro: [
        "Plaja Reynisfjara a fost clasată de National Geographic printre cele mai frumoase 10 plaje non-tropicale din lume.",
        "În Þingvellir se poate face scufundări sau snorkeling în fisura Silfra, direct între plăcile tectonice nord-americană și eurasiatică.",
        "Ghețarul Eyjafjallajökull a devenit faimos la nivel mondial în 2010, când erupția sa a perturbat traficul aerian în întreaga Europă.",
        "Laguna glaciară Jökulsárlón este cel mai adânc lac din Islanda, atingând adâncimi de peste 248 de metri.",
        "Satele din regiune, precum Vík, sunt adesea amenințate de inundații glaciare catastrofale, cunoscute sub numele de 'jökulhlaup'.",
        "Suðurland este casa majorității cailor islandezi, o rasă unică, cunoscută pentru cele cinci mersuri ale sale.",
        "Arhipelagul Vestmannaeyjar (Insulele Westman), parte a regiunii, este un important loc de cuibărit pentru pufini.",
        "Cercul de Aur este cel mai popular traseu turistic din Islanda, parcurs de sute de mii de vizitatori anual."
      ],
      en: [
        "It contains the 'Golden Circle', Iceland's most popular tourist route.",
        "The 2010 eruption of the Eyjafjallajökull volcano famously disrupted air traffic across Europe.",
        "A path allows visitors to walk directly behind the Seljalandsfoss waterfall.",
        "Reynisfjara beach's black sand is the result of erosion from volcanic basalt rocks.",
        "Þingvellir National Park, a UNESCO World Heritage site, is where the North American and Eurasian tectonic plates are drifting apart.",
        "Jökulsárlón is Iceland's deepest lake, with a depth reaching 248 meters.",
        "The region has numerous greenhouses heated by geothermal energy, growing vegetables and flowers year-round.",
        "Hekla, one of Iceland's most active volcanoes, was known in the Middle Ages as the 'Gateway to Hell'."
      ]
    }
  },
  {
    id: "IS-003",
    type: "region",
    parent: "country-iceland",
    coords: [-22.5, 63.9],
    name: { de: "Suðurnes", hu: "Suðurnes", ro: "Suðurnes", en: "Suðurnes" },
    description: {
      de: "Die Halbinsel Reykjanes, bekannt für ihre geothermische Aktivität und den internationalen Flughafen Keflavík.",
      hu: "A Reykjanes-félsziget, amely geotermikus aktivitásáról és a keflavíki nemzetközi repülőtérről ismert.",
      ro: "Peninsula Reykjanes, cunoscută pentru activitatea sa geotermală și aeroportul internațional Keflavík.",
      en: "The Reykjanes Peninsula, known for its geothermal activity and the Keflavík International Airport."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Suðurnes, más néven a Reykjanes-félsziget, egy geológiailag rendkívül aktív terület Izland délnyugati csücskében. Ez a régió az első, amivel a legtöbb látogató találkozik, hiszen itt található a Keflavík Nemzetközi Repülőtér. A tájat holdbéli lávamezők, gőzölgő geotermikus területek és a híres Kék Lagúna (Blue Lagoon) határozzák meg. A félsziget a Közép-Atlanti-hátságon fekszik, ahol az észak-amerikai és az eurázsiai kőzetlemezek látványosan távolodnak egymástól. Ezt a jelenséget a 'Híd a kontiensek között' (Bridge Between Continents) szimbolikus építményénél lehet a legközvetlenebbül megtapasztalni. A partvidéken meredek sziklák és erőteljes hullámverés jellemző.",
      ro: "Suðurnes, peninsula Reykjanes, este adesea primul contact al vizitatorilor cu Islanda, deoarece găzduiește Aeroportul Internațional Keflavík. Peisajul său pare desprins de pe altă planetă, dominat de câmpuri de lavă acoperite de mușchi și o activitate geotermală intensă. Aici se află celebra Lagună Albastră, un spa geotermal de renume mondial. Regiunea face parte din Dorsala Atlantică, fiind un loc unde plăcile tectonice se despart activ, creând fisuri, izvoare termale și vulcani. Podul dintre Continente simbolizează această separare, permițând vizitatorilor să treacă pe jos de la placa eurasiatică la cea nord-americană. Orașele, precum Grindavík, sunt centre pescărești importante, cu o istorie bogată legată de mare.",
      en: "Suðurnes, also known as the Reykjanes Peninsula, is a highly geologically active area in the southwestern corner of Iceland. It's the first region most visitors experience, as it hosts Keflavík International Airport. The landscape is defined by moon-like lava fields, steaming geothermal areas, and the famous Blue Lagoon. The peninsula lies on the Mid-Atlantic Ridge, where the North American and Eurasian tectonic plates are visibly pulling apart. This phenomenon can be directly experienced at the 'Bridge Between Continents'. The coastline features steep cliffs and powerful waves. Recent volcanic eruptions near Grindavík since 2021 have reshaped parts of this dynamic landscape, underscoring its raw, untamed power."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Itt található a világhírű Kék Lagúna geotermikus fürdő.",
        "A Keflavík Nemzetközi Repülőtér (KEF) Izland fő légikikötője.",
        "A Gunnuhver geotermikus területen forró iszapfortyogókat és gőzölgő fumarolákat lehet látni.",
        "A régióban több világítótorony is található, köztük a Reykjanesviti, az ország legrégebbi világítótornya.",
        "A 'Híd a kontinensek között' egy gyaloghíd, amely az észak-amerikai és eurázsiai tektonikus lemezek közötti hasadék felett ível át.",
        "A félsziget az elmúlt években (2021-től) ismét intenzív vulkáni tevékenységet mutatott a Fagradalsfjall területén.",
        "A Krýsuvík geotermikus terület színes, kénlerakódásokkal borított dombjairól ismert.",
        "A régióban található az Izlandi Rock 'n' Roll Múzeum is."
      ],
      ro: [
        "Peninsula Reykjanes este un Geoparc Global UNESCO, recunoscut pentru peisajul său vulcanic unic.",
        "Farul Reykjanesviti este cel mai vechi far din Islanda, construit inițial în 1878.",
        "Zona geotermală Gunnuhver conține cel mai mare bazin de noroi fierbinte din Islanda, cu un diametru de 20 de metri.",
        "Aeroportul Internațional Keflavík a fost construit de armata americană în timpul celui de-al Doilea Război Mondial și a servit ca bază NATO până în 2006.",
        "Lacul Kleifarvatn este unul dintre cele mai mari lacuri din sudul Islandei și este cunoscut pentru plajele sale negre.",
        "În Grindavík se află Centrul islandez al peștelui sărat, care celebrează istoria exportului de cod sărat.",
        "Sistemul vulcanic Krýsuvík este format din mai multe câmpuri geotermale, inclusiv Seltún.",
        "Regiunea a fost afectată de activitate vulcanică recentă, cu erupții în apropiere de Grindavík începând din 2021."
      ],
      en: [
        "It is home to the world-famous Blue Lagoon geothermal spa.",
        "Keflavík International Airport (KEF), Iceland's main air hub, is located here.",
        "The Gunnuhver geothermal area features hot mud pots and steaming fumaroles.",
        "The 'Bridge Between Continents' is a footbridge spanning the rift between the North American and Eurasian tectonic plates.",
        "The peninsula has experienced intense, renewed volcanic activity in the Fagradalsfjall area starting in 2021.",
        "The Krýsuvík geothermal area is known for its colorful, sulfur-stained hills.",
        "The Reykjanesviti lighthouse is the oldest lighthouse in the country.",
        "The region is designated as a UNESCO Global Geopark for its unique volcanic landscapes."
      ]
    }
  },
  {
    id: "IS-004",
    type: "region",
    parent: "country-iceland",
    coords: [-21.9, 64.1],
    name: { de: "Reykjavík", hu: "Reykjavík", ro: "Reykjavík", en: "Reykjavík" },
    description: {
      de: "Die Hauptstadtregion Reykjavík, das wirtschaftliche und kulturelle Zentrum Islands.",
      hu: "Reykjavík fővárosi régiója, Izland gazdasági és kulturális központja.",
      ro: "Regiunea capitalei Reykjavík, centrul economic și cultural al Islandei.",
      en: "The Reykjavík capital region, the economic and cultural hub of Iceland."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Reykjavík régiója, hivatalos nevén Höfuðborgarsvæðið (Fővárosi Régió), Izland lüktető szíve. Bár területileg az egyik legkisebb, az ország lakosságának több mint 60%-a él itt. Maga Reykjavík a világ legészakibb fővárosa, egyben Izland politikai, gazdasági, kulturális és oktatási központja. A régió magában foglalja a fővárost és a körülötte lévő elővárosokat, mint Kópavogur és Hafnarfjörður. A városkép a modern építészet és a hagyományos, színesre festett faházak egyedi keveréke. A geotermikus energia széleskörű használatának köszönhetően Reykjavík a világ egyik legtisztább levegőjű fővárosa. Pezsgő éjszakai élete, múzeumai és galériái miatt kedvelt célpont.",
      ro: "Regiunea Capitalei, sau Höfuðborgarsvæðið, este inima vibrantă a Islandei. Dominată de orașul Reykjavík, cea mai nordică capitală a lumii, această zonă metropolitană găzduiește peste 60% din populația țării. Este un amestec fascinant de case colorate, design scandinav modern, o scenă artistică înfloritoare și o viață de noapte energică. Regiunea este un centru de putere economică, guvernamentală și culturală, cu muzee de top, galerii de artă, teatre și sala de concerte Harpa. În ciuda caracterului său urban, natura nu este niciodată departe; peninsula Seltjarnarnes oferă vederi spectaculoase ale oceanului și aurorelor boreale, iar muntele Esja, vizibil din tot orașul, este o destinație populară pentru drumeții.",
      en: "The Reykjavík region, officially Höfuðborgarsvæðið (the Capital Region), is the pulsating heart of Iceland. Although one of the smallest regions by area, it is home to over 60% of the country's population. Reykjavík itself is the world's northernmost capital, serving as Iceland's political, economic, cultural, and educational center. The cityscape is a unique mix of modern architecture and traditional, colorfully painted wooden houses. Thanks to the extensive use of geothermal energy, Reykjavík is one of the cleanest capital cities in the world. Its vibrant nightlife, numerous museums, and art galleries make it a popular destination. Despite its urban character, nature is never far away, with Mount Esja providing a stunning backdrop and a popular hiking destination."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Itt él Izland lakosságának több mint kétharmada.",
        "Reykjavík neve 'Füstös-öblöt' jelent, utalva a part menti hőforrások gőzére.",
        "A fűtést és a meleg vizet szinte teljes egészében geotermikus energia biztosítja.",
        "A város jelképe a Hallgrímskirkja templom, melynek tornyából kiváló kilátás nyílik.",
        "A Harpa koncertterem egy modern építészeti remekmű, üveg homlokzatát a bazaltoszlopok ihlették.",
        "A városban számos szabadtéri, geotermikus fűtésű medence található, amelyek télen is nyitva tartanak.",
        "Az első állandó viking telepes, Ingólfur Arnarson itt alapította meg birtokát 874 körül.",
        "A Perlan épülete egy üvegkupolás csoda, ami forróvizes tartályokra épült."
      ],
      ro: [
        "Reykjavík se traduce prin 'Golful Fumului', un nume dat de primii coloniști vikingi datorită aburilor geotermali.",
        "Orașul este încălzit aproape în totalitate cu apă geotermală, fiind unul dintre cele mai curate orașe din lume.",
        "Biserica Hallgrímskirkja, cea mai înaltă clădire din Reykjavík, a avut nevoie de 41 de ani pentru a fi construită (1945-1986).",
        "Peste 100 de pub-uri și cluburi se găsesc în centrul orașului, majoritatea pe strada Laugavegur.",
        "Perlan, o clădire-cupolă, este construită pe șase rezervoare uriașe care stochează apa caldă pentru oraș.",
        "Lacul Tjörnin din centrul orașului este un loc popular pentru observarea păsărilor, găzduind peste 40 de specii.",
        "Primarul Reykjavíkului din 2010 până în 2014 a fost Jón Gnarr, un comediant care a format 'Cel Mai Bun Partid' ca o satiră politică.",
        "În regiune se află și Bessastaðir, reședința oficială a Președintelui Islandei."
      ],
      en: [
        "More than two-thirds of Iceland's population lives here.",
        "Reykjavík's name means 'Smoky Bay', referring to the steam from coastal hot springs.",
        "Heating and hot water are supplied almost entirely by geothermal energy.",
        "The city's symbol is the Hallgrímskirkja church, whose tower offers excellent views.",
        "The Harpa concert hall is a modern architectural masterpiece with a glass facade inspired by basalt columns.",
        "The city has numerous outdoor geothermal swimming pools that are open year-round.",
        "The first permanent Viking settler, Ingólfur Arnarson, established his homestead here around 874.",
        "The Perlan building is a glass-domed wonder built on top of hot water storage tanks."
      ]
    }
  },
  {
    id: "IS-005",
    type: "region",
    parent: "country-iceland",
    coords: [-21.8, 64.1],
    name: { de: "Höfuðborgarsvæði", hu: "Höfuðborgarsvæði", ro: "Höfuðborgarsvæði", en: "Höfuðborgarsvæði" },
    description: {
      de: "Die Metropolregion um Reykjavík, in der der Großteil der isländischen Bevölkerung lebt.",
      hu: "A Reykjavík környéki agglomeráció, ahol az izlandi lakosság többsége él.",
      ro: "Regiunea metropolitană din jurul Reykjavík, unde trăiește majoritatea populației islandeze.",
      en: "The metropolitan area around Reykjavík, where the majority of the Icelandic population resides."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Höfuðborgarsvæðið, vagyis a Fővárosi Régió, Izland adminisztratív, gazdasági és népességi központja. Ez a régió foglalja magában magát Reykjavíkot és az azt körülvevő önkormányzatokat: Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær, Seltjarnarnes és Kjósarhreppur. Az ország teljes népességének mintegy kétharmada koncentrálódik ezen a viszonylag kis területen. A régió dinamikusan fejlődik, modern infrastruktúrával, kiterjedt szolgáltatásokkal és pezsgő kulturális élettel rendelkezik. Bár erősen urbanizált, a természet közelsége itt is érezhető: a várost hegyek veszik körül, a partvonal pedig könnyen elérhető. Ez a kettősség – a városi élet és a lenyűgöző izlandi táj közelsége – adja a régió egyedi vonzerejét.",
      ro: "Höfuðborgarsvæði, Regiunea Capitalei, este cea mai dens populată zonă a Islandei, un conglomerat de șapte municipalități centrate în jurul Reykjavíkului. Acestea includ Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær, Seltjarnarnes și Álftanes. Deși fiecare oraș are propria sa identitate, împreună funcționează ca o zonă metropolitană unică. Hafnarfjörður este cunoscut ca 'orașul elfilor', construit pe câmpuri de lavă unde se spune că locuiesc aceste creaturi. Kópavogur, al doilea oraș ca mărime, este un centru comercial modern, în timp ce Mosfellsbær este renumit pentru peisajele sale naturale și ca fiind casa laureatului Nobel Halldór Laxness. Această regiune combină facilitățile urbane cu accesul rapid la natură, fiind un exemplu de dezvoltare suburbană nordică.",
      en: "Höfuðborgarsvæðið, the Capital Region, is Iceland's administrative, economic, and demographic center. It comprises Reykjavík and its surrounding municipalities: Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær, Seltjarnarnes, and Kjósarhreppur. About two-thirds of the country's total population is concentrated in this relatively small area. The region is dynamically developing with modern infrastructure, extensive services, and a vibrant cultural life. Although heavily urbanized, the proximity to nature is palpable: the city is surrounded by mountains, and the coastline is easily accessible. This duality—urban life and the proximity of the stunning Icelandic landscape—gives the region its unique appeal. Hafnarfjörður is famously known as 'the town of elves', built on lava fields where these creatures are said to dwell."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A régió hét önkormányzatból áll.",
        "Itt található az Izlandi Egyetem (Háskóli Íslands), az ország legnagyobb felsőoktatási intézménye.",
        "Hafnarfjörður városa a 'rejtett nép' (huldufólk), vagyis az elfek és trollok legendáiról ismert.",
        "A régióban található az elnöki rezidencia, a Bessastaðir.",
        "Mosfellsbær ad otthont a Nobel-díjas író, Halldór Laxness egykori otthonának, amely ma múzeum.",
        "Kópavogur Izland második legnépesebb városa.",
        "A Seltjarnarnes-félsziget kiváló hely a sarki fény megfigyelésére a város közelsége ellenére.",
        "A régióban található az Árbæjarsafn, egy szabadtéri néprajzi múzeum."
      ],
      ro: [
        "Aproximativ 233.000 de oameni locuiesc în Höfuðborgarsvæði, reprezentând aproximativ 63% din populația totală a Islandei.",
        "Hafnarfjörður găzduiește un festival viking anual, care atrage participanți din întreaga lume.",
        "În Kópavogur se află Smáralind, unul dintre cele mai mari centre comerciale din Islanda.",
        "Garðabær este cunoscut pentru studiourile sale de film, unde au fost filmate părți din serialul 'Urzeala Tronurilor'.",
        "Valea Elliðaár din Reykjavík este un spațiu verde popular, cu un râu bogat în somon care traversează inima zonei urbane.",
        "Seltjarnarnes, cea mai mică municipalitate, este renumită pentru rezervația sa naturală și pentru observarea păsărilor.",
        "Mosfellsbær este punctul de plecare pentru drumeții către muntele Esja.",
        "Temperatura apei la plaja geotermală Nauthólsvík din Reykjavík este menținută artificial la 15-19°C vara."
      ],
      en: [
        "The region consists of seven municipalities.",
        "The University of Iceland (Háskóli Íslands), the country's largest higher education institution, is located here.",
        "The town of Hafnarfjörður is known for its legends of the 'hidden people' (huldufólk), or elves and trolls.",
        "The official residence of the President of Iceland, Bessastaðir, is in this region.",
        "Mosfellsbær is home to the former residence of Nobel laureate writer Halldór Laxness, which is now a museum.",
        "Kópavogur is Iceland's second most populous city.",
        "The Seltjarnarnes peninsula is an excellent spot for observing the Northern Lights despite its proximity to the city.",
        "Árbæjarsafn, an open-air historical museum, is located within the region."
      ]
    }
  },
  {
    id: "IS-006",
    type: "region",
    parent: "country-iceland",
    coords: [-22.0, 64.8],
    name: { de: "Vesturland", hu: "Vesturland", ro: "Vesturland", en: "Vesturland" },
    description: {
      de: "Westisland, bekannt für die vielfältigen Landschaften der Halbinsel Snæfellsnes und historische Sagas.",
      hu: "Nyugat-Izland, amely a Snæfellsnes-félsziget változatos tájairól és történelmi szagáiról ismert.",
      ro: "Islanda de Vest, cunoscută pentru peisajele diverse ale peninsulei Snæfellsnes și saga istorice.",
      en: "West Iceland, known for the diverse landscapes of the Snæfellsnes Peninsula and historical sagas."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Vesturland, azaz Nyugat-Izland, egy rendkívül változatos régió, amelyet gyakran 'Izland miniatűrben' néven emlegetnek. Legismertebb része a Snæfellsnes-félsziget, ahol megtalálható szinte minden, ami Izlandot jellemzi: a gleccserrel borított Snæfellsjökull vulkán, fekete homokos strandok, bazaltoszlopok (Gerduberg), festői halászfalvak (Arnarstapi, Hellnar) és a híres, sokat fotózott Kirkjufell hegy. A régió történelmileg is jelentős, számos izlandi saga (ősi történet) játszódik itt, például az Egils saga. A Borgarfjörður területén található Európa legnagyobb vízhozamú hőforrása, a Deildartunguhver, valamint a Hraunfossar és Barnafoss vízesések. A régió a sagák földje, ahol a történelem és a mitológia minden lépésnél megelevenedik.",
      ro: "Vesturland, sau Islanda de Vest, este adesea descrisă ca 'Islanda în miniatură' datorită diversității peisajelor sale. Regiunea este dominată de peninsula Snæfellsnes, cu emblematicul său vulcan acoperit de ghețar, Snæfellsjökull, imortalizat de Jules Verne în 'O călătorie spre centrul Pământului'. Aici se găsesc plaje cu nisip negru, stânci bazaltice, sate pescărești pitorești și câmpuri de lavă. Vesturland este, de asemenea, o regiune cu o importanță istorică deosebită, fiind locul de desfășurare a multor saga islandeze, precum Saga lui Egil. Izvoarele termale Deildartunguhver, cele mai puternice din Europa, și cascadele Hraunfossar și Barnafoss sunt alte atracții naturale remarcabile.",
      en: "Vesturland, or West Iceland, is an incredibly diverse region often called 'Iceland in Miniature'. Its most famous part is the Snæfellsnes Peninsula, which contains nearly every type of landscape Iceland offers: the glacier-capped Snæfellsjökull volcano, black sand beaches, basalt columns (Gerduberg), picturesque fishing villages (Arnarstapi, Hellnar), and the iconic, much-photographed Kirkjufell mountain. The region is also historically significant, serving as the setting for numerous Icelandic Sagas, such as Egil's Saga. In the Borgarfjörður area, you'll find Europe's most powerful hot spring, Deildartunguhver, as well as the unique Hraunfossar and Barnafoss waterfalls. This is the land of sagas, where history and mythology come alive at every turn."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Snæfellsjökull vulkán ihlette Jules Verne 'Utazás a Föld középpontja felé' című regényét.",
        "A Deildartunguhver hőforrás másodpercenként 180 liter 97°C-os vizet ad.",
        "A Hraunfossar vízesések egyedülálló módon egy lávamező alól bukkannak elő.",
        "A régió központja Borgarnes, ahol a Honfoglalás Múzeum (Settlement Center) található.",
        "A Kirkjufell hegy a 'Trónok harca' sorozatban is feltűnt, mint a 'Nyílhegy-hegy'.",
        "A Glymur vízesés 198 méteres magasságával sokáig Izland legmagasabb vízesésének számított.",
        "Reykholtban élt és alkotott Snorri Sturluson, a középkori Izland legjelentősebb történésze és költője.",
        "A Langjökull, Izland második legnagyobb gleccsere, részben ebben a régióban található, és jégbarlang-túrákat is szerveznek bele."
      ],
      ro: [
        "Deildartunguhver, cel mai puternic izvor termal din Europa, are un debit de 180 de litri de apă clocotită pe secundă.",
        "Hraunfossar este o serie de cascade care izvorăsc direct dintr-un câmp de lavă pe o distanță de peste 900 de metri.",
        "Muntele Kirkjufell de pe peninsula Snæfellsnes este considerat cel mai fotografiat munte din Islanda.",
        "În Stykkishólmur se află 'Biblioteca Apei', o instalație de artă creată de Roni Horn, cu 24 de coloane de sticlă umplute cu apă de la ghețarii islandezi.",
        "Peștera de lavă Víðgelmir este cea mai mare din Islanda, cu o lungime de aproape 1.600 de metri.",
        "La Bjarnarhöfn se află un muzeu dedicat rechinului, unde vizitatorii pot gusta 'hákarl', o specialitate locală controversată.",
        "Borgarnes este orașul principal al regiunii și găzduiește Centrul de Colonizare, un muzeu dedicat primilor vikingi.",
        "Istoricul Snorri Sturluson, una dintre cele mai importante figuri din literatura nordică, a locuit în Reykholt."
      ],
      en: [
        "The Snæfellsjökull volcano inspired Jules Verne's novel 'Journey to the Center of the Earth'.",
        "The Deildartunguhver hot spring has a flow rate of 180 liters (50 gallons) per second of 97°C (207°F) water.",
        "The Hraunfossar waterfalls uniquely emerge from beneath a lava field.",
        "The region's main town, Borgarnes, is home to the Settlement Center museum.",
        "Kirkjufell mountain was featured in the 'Game of Thrones' series as 'Arrowhead Mountain'.",
        "Glymur waterfall, at 198 meters, was considered Iceland's tallest waterfall for a long time.",
        "Snorri Sturluson, the most important historian and poet of medieval Iceland, lived and wrote in Reykholt.",
        "Langjökull, Iceland's second-largest glacier, is partly in this region and offers ice cave tours."
      ]
    }
  },
  {
    id: "IS-007",
    type: "region",
    parent: "country-iceland",
    coords: [-23.0, 65.8],
    name: { de: "Vestfirðir", hu: "Vestfirðir", ro: "Vestfirðir", en: "Vestfirðir" },
    description: {
      de: "Die Westfjorde, eine der am dünnsten besiedelten und wildesten Regionen Islands.",
      hu: "A Nyugati-fjordok, Izland egyik legritkábban lakott és legvadabb vidéke.",
      ro: "Fiordurile de Vest, una dintre cele mai puțin populate și mai sălbatice regiuni ale Islandei.",
      en: "The Westfjords, one of the most sparsely populated and wildest regions of Iceland."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Vestfirðir, vagyis a Nyugati-fjordok, Izland legelszigeteltebb és legérintetlenebb része. Ez a hatalmas félsziget egy drámaian csipkézett partvonallal rendelkezik, ahol a meredek hegyek egyenesen a tengerbe zuhannak. A régió rendkívül ritkán lakott, a települések apró halászfalvak, amelyek a fjordok mélyén bújnak meg. A fővárostól való távolsága és a télen gyakran nehezen járható utak miatt a tömegturizmus elkerülte, így megőrizte vad, autentikus karakterét. Itt található a Látrabjarg, Európa egyik legnagyobb madársziklája, ahol madarak milliói, köztük lundák tízezrei fészkelnek. A régió a csend, a nyugalom és a természet monumentalitásának otthona, ideális azok számára, akik a járatlan utakat keresik.",
      ro: "Vestfirðir, Fiordurile de Vest, reprezintă cea mai veche, mai îndepărtată și, probabil, cea mai spectaculoasă regiune a Islandei. Caracterizată de o coastă zimțată, cu fiorduri adânci care pătrund în interiorul unui platou muntos, această peninsulă este legată de restul țării printr-un istm îngust. Datorită izolării sale, regiunea și-a păstrat un caracter autentic, cu sate pescărești liniștite și o natură copleșitoare. Aici se află Látrabjarg, una dintre cele mai mari stânci cu păsări din lume și cel mai vestic punct al Europei. Cascada Dynjandi, cu forma sa trapezoidală unică, este considerată de mulți cea mai frumoasă din țară. Vestfirðir este un refugiu pentru cei care caută liniște, peisaje dramatice și o faună bogată, inclusiv vulpi polare.",
      en: "The Vestfirðir, or Westfjords, is Iceland's most isolated and untouched region. This vast peninsula features a dramatically indented coastline where steep mountains fall directly into the sea. The region is extremely sparsely populated, with settlements consisting of tiny fishing villages tucked deep within the fjords. Its distance from the capital and often difficult road conditions in winter have kept mass tourism at bay, preserving its wild, authentic character. It is home to Látrabjarg, one of Europe's largest bird cliffs, where millions of seabirds, including tens of thousands of puffins, nest. The region is a haven of silence, tranquility, and the raw monumentality of nature, ideal for those seeking the path less traveled."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Látrabjarg sziklafal Európa legnyugatibb pontja (a szigeteket nem számítva).",
        "A régióban él a sarki róka, Izland egyetlen őshonos szárazföldi emlőse.",
        "A Dynjandi (más néven Fjallfoss) egy lépcsőzetes, legyező alakú vízesés, a Nyugati-fjordok egyik jelképe.",
        "Ísafjörður a régió legnagyobb települése és adminisztratív központja.",
        "A partvonal annyira tagolt, hogy Izland teljes partvonalának közel egyharmadát teszi ki.",
        "A Hornstrandir természetvédelmi terület egy lakatlan, érintetlen vadon, ahol nincsenek utak.",
        "A Rauðasandur egy különleges, vöröses-arany színű homokos tengerpart.",
        "A régióban számos elhagyatott farm és halászfalu található, amelyek a múlt nehéz életkörülményeiről tanúskodnak."
      ],
      ro: [
        "Doar aproximativ 7.000 de persoane locuiesc în Vestfirðir, reprezentând sub 2% din populația Islandei.",
        "Stâncile Látrabjarg au o lungime de 14 kilometri și o înălțime de până la 441 de metri, găzduind milioane de păsări marine.",
        "Vulpea polară, singurul mamifer terestru nativ al Islandei, este protejată și poate fi observată frecvent în Rezervația Naturală Hornstrandir.",
        "Cascada Dynjandi este de fapt un sistem de șapte cascade, cu o înălțime totală de 100 de metri.",
        "În secolele XVII și XVIII, regiunea a fost un centru al vânătorii de vrăjitoare în Islanda, un muzeu în Hólmavík comemorând această perioadă.",
        "Drumurile din Vestfirðir sunt adesea închise iarna din cauza zăpezii abundente, izolând complet unele comunități.",
        "Piscina Krossneslaug este o piscină geotermală situată pe o plajă izolată, oferind vederi directe la Oceanul Arctic.",
        "Ísafjörður, cel mai mare oraș din regiune, are unul dintre cele mai vechi cartiere de case din lemn din Islanda."
      ],
      en: [
        "The Látrabjarg cliff is the westernmost point of Europe (excluding islands like the Azores).",
        "The region is home to the Arctic Fox, Iceland's only native land mammal.",
        "Dynjandi (also known as Fjallfoss) is a tiered, fan-shaped waterfall, a symbol of the Westfjords.",
        "Ísafjörður is the region's largest settlement and administrative center.",
        "The coastline is so indented that it accounts for nearly a third of Iceland's total coastline.",
        "The Hornstrandir Nature Reserve is an uninhabited, pristine wilderness with no roads.",
        "Rauðasandur is a unique beach with reddish-golden sand.",
        "The region is home to the Museum of Icelandic Sorcery and Witchcraft in Hólmavík."
      ]
    }
  },
  {
    id: "IS-008",
    type: "region",
    parent: "country-iceland",
    coords: [-20.0, 65.5],
    name: { de: "Norðurland vestra", hu: "Norðurland vestra", ro: "Norðurland vestra", en: "Norðurland vestra" },
    description: {
      de: "Der Nordwesten Islands, geprägt von Landwirtschaft, Pferdezucht und weiten Tälern.",
      hu: "Izland északnyugati része, mezőgazdaság, lótenyésztés és tágas völgyek jellemzik.",
      ro: "Islanda de Nord-Vest, caracterizată prin agricultură, creșterea cailor și văi largi.",
      en: "Northwest Iceland, characterized by agriculture, horse breeding, and wide valleys."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Norðurland vestra, az Északnyugati régió, Izland 'lótenyésztő fővárosa'. A tájat széles, termékeny völgyek, lankás dombok és a Skagafjörður fjord határozzák meg. Ez a vidék mélyen gyökerezik az izlandi történelemben és a lovas kultúrában. Itt található Glaumbær, egy gyönyörűen megőrzött tőzegmohás farm, amely bepillantást enged a múltbeli izlandi életbe. A régió a sagák földje is, a Grettis saga nagy része például itt játszódik. A tengerparton fókakolóniákat lehet megfigyelni, különösen a Vatnsnes-félszigeten. A terület kevésbé zsúfolt, mint a déli part, így ideális a nyugodtabb utazásra, a lovaglásra és a hagyományos izlandi vidéki élet felfedezésére.",
      ro: "Norðurland Vestra, sau Islanda de Nord-Vest, este o regiune a tradițiilor, unde agricultura și creșterea cailor joacă un rol central. Peisajul este mai blând decât în Vestfirðir, cu văi largi și fertile, dealuri ondulate și o coastă marcată de peninsule precum Vatnsnes și Skagi. Regiunea este considerată inima creșterii cailor islandezi, cu numeroase ferme care oferă tururi și spectacole ecvestre. Peninsula Vatnsnes este renumită pentru coloniile sale de foci și pentru stânca bazaltică Hvítserkur, o formațiune impresionantă de 15 metri înălțime. Istoria este, de asemenea, prezentă, cu situri precum muzeul de case de turbă de la Glaumbær, care oferă o imagine vie a vieții rurale islandeze din secolele trecute.",
      en: "Norðurland vestra, the Northwest Region, is Iceland's 'horse breeding capital'. The landscape is defined by wide, fertile valleys, gentle hills, and the Skagafjörður fjord. This area is deeply rooted in Icelandic history and equestrian culture. It is home to Glaumbær, a beautifully preserved turf farm museum that offers a glimpse into historic Icelandic life. The region is also saga territory, with much of Grettir's Saga taking place here. Seal colonies can be observed along the coast, especially on the Vatnsnes Peninsula. The area is less crowded than the south coast, making it ideal for a more relaxed journey, horseback riding, and exploring traditional Icelandic rural life."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Skagafjörður régió híres a magas lópopulációjáról; a mondás szerint itt több a ló, mint az ember.",
        "A Hvítserkur egy 15 méter magas, sárkányra vagy orrszarvúra emlékeztető bazaltszikla a tengerben.",
        "A Glaumbær skanzen tőzegtetős házai a 18-19. századi vidéki életet mutatják be.",
        "A régió központja Sauðárkrókur, egy fontos halászati és szolgáltató központ.",
        "A Drangey-sziget egy meredek sziklafalú sziget a Skagafjörðurban, amely madarak ezreinek ad otthont, és a Grettis saga egyik fontos helyszíne.",
        "A Vatnsnes-félsziget Izland legjobb fókamegfigyelő helyeinek egyike.",
        "A Hofsós településen található az Izlandi Emigrációs Központ.",
        "A régióban található a legrégebbi izlandi kőépület, a Víðimýrarkirkja tőzegtemplom."
      ],
      ro: [
        "La Glaumbær, casa principală de turbă este formată din 13 clădiri interconectate, cea mai veche datând din secolul al XVIII-lea.",
        "Stânca Hvítserkur, conform legendei, este un trol pietrificat care a uitat să se ascundă de soare.",
        "Skagafjörður este singurul district din Islanda cu trei insule: Málmey, Drangey și Lundey.",
        "Anual, în apropiere de Sauðárkrókur, are loc 'Laufskálarétt', unul dintre cele mai mari și mai faimoase evenimente de strângere a cailor din Islanda.",
        "Insula Drangey este o fortăreață naturală, faimoasă din Saga lui Grettir ca fiind ultimul refugiu al proscrisului.",
        "Hólar, odinioară un important centru episcopal și cultural, rivalizând cu Skálholt din sud, găzduiește astăzi o universitate agricolă.",
        "Se estimează că în regiunea Skagafjörður există un cal la fiecare locuitor uman.",
        "Craterul Grábrók, situat lângă șoseaua principală, poate fi urcat cu ușurință pentru o vedere panoramică asupra zonei."
      ],
      en: [
        "The Skagafjörður area is famous for its high horse population; it's said that horses outnumber people here.",
        "Hvítserkur is a 15-meter high basalt stack that resembles a dragon or rhinoceros drinking from the sea.",
        "The Glaumbær museum showcases turf-roofed houses from the 18th and 19th centuries.",
        "The region's center is Sauðárkrókur, an important fishing and service hub.",
        "Drangey island, a steep-sided rock in Skagafjörður, is home to thousands of birds and is a key location in Grettir's Saga.",
        "The Vatnsnes peninsula is one of Iceland's best seal-watching spots.",
        "The Icelandic Emigration Center is located in the town of Hofsós.",
        "The historic turf church Víðimýrarkirkja is one of the few remaining examples of its kind."
      ]
    }
  },
  {
    id: "IS-009",
    type: "region",
    parent: "country-iceland",
    coords: [-17.5, 65.5],
    name: { de: "Norðurland eystra", hu: "Norðurland eystra", ro: "Norðurland eystra", en: "Norðurland eystra" },
    description: {
      de: "Der Nordosten Islands mit der Stadt Akureyri und spektakulären vulkanischen Gebieten um Mývatn.",
      hu: "Izland északkeleti része Akureyri városával és a Mývatn körüli látványos vulkáni területekkel.",
      ro: "Islanda de Nord-Est, cu orașul Akureyri și zone vulcanice spectaculoase în jurul Mývatn.",
      en: "Northeast Iceland, featuring the town of Akureyri and spectacular volcanic areas around Mývatn."
    },
    descriptionAdvanced: {
      de: "",
      hu: "Norðurland eystra, azaz az Északkeleti régió, Izland egyik legváltozatosabb és leglátványosabb területe. Központja Akureyri, az 'Észak Fővárosa', egy bájos város az Eyjafjörður partján. A régió igazi geológiai csodavilág, itt található a Mývatn-tó környéke, amely aktív vulkáni tevékenységéről, pszeudokrátereiről (Skútustaðagígar), lávamezőiről (Dimmuborgir) és gőzölgő geotermikus mezőiről (Hverir) híres. Itt zúdul le a Dettifoss, Európa legnagyobb vízhozamú vízesése, valamint a patkó alakú Goðafoss, az 'Istenek vízesése'. A régió partjainál fekvő Húsavík 'Európa bálnaleső fővárosaként' ismert. A táj a zord felföldi sivatagoktól a zöldellő völgyekig terjed, felejthetetlen élményt nyújtva.",
      ro: "Norðurland Eystra, Islanda de Nord-Est, este o regiune a contrastelor puternice, de la agitația urbană a 'Capitalei Nordului', Akureyri, la peisajele selenare din jurul lacului Mývatn. Akureyri, al doilea cel mai mare oraș din Islanda, este un centru cultural și economic vibrant, situat la capătul unui fiord lung. Spre est, regiunea devine un muzeu geologic în aer liber: lacul Mývatn, cu formațiunile sale de lavă, pseudocraterele și abundența de păsări, zona geotermală Hverir, cu bazinele sale de noroi clocotind, și vulcanul Krafla. Aici se găsesc și unele dintre cele mai puternice cascade ale Europei, Dettifoss și Goðafoss. Orașul Húsavík și-a câștigat renumele de 'capitală europeană a observării balenelor', oferind tururi de succes în golful Skjálfandi.",
      en: "Norðurland eystra, the Northeast Region, is one of Iceland's most diverse and spectacular areas. Its center is Akureyri, the 'Capital of the North,' a charming town on the shores of Eyjafjörður. The region is a geological wonderland, featuring the Lake Mývatn area, famous for its active volcanism, pseudo-craters (Skútustaðagígar), lava fields (Dimmuborgir), and steaming geothermal fields (Hverir). Here, you'll find Dettifoss, Europe's most powerful waterfall by volume, and the horseshoe-shaped Goðafoss, the 'Waterfall of the Gods'. The coastal town of Húsavík is known as the 'Whale Watching Capital of Europe'. The landscape ranges from harsh highland deserts to lush valleys, offering an unforgettable experience."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Itt található Akureyri, Izland második legnagyobb városa.",
        "A Dettifoss Európa legnagyobb vízhozamú vízesése, átlagosan 193 köbméter/másodperc.",
        "A Mývatn-tó a madárvilág paradicsoma, különösen a különféle récefajoké.",
        "A Goðafoss vízesés arról kapta a nevét, hogy 1000-ben Þorgeir Ljósvetningagoði itt dobta a vízbe a pogány istenek szobrait.",
        "Húsavík a bálnaleső túrák központja, ahol nagy eséllyel lehet látni púpos bálnákat.",
        "Az Ásbyrgi-kanyon egy hatalmas, patkó alakú szurdok, a legenda szerint Odin lovának, Sleipnirnek a patanyoma.",
        "A Krafla vulkánrendszerben található a Víti ('Pokol') kráter, benne egy türkizkék tóval.",
        "A Dimmuborgir ('Sötét Várak') egy kaotikus lávamező furcsa sziklaformációkkal."
      ],
      ro: [
        "Akureyri are una dintre cele mai nordice grădini botanice din lume, unde cresc peste 7.000 de specii de plante.",
        "Cascada Goðafoss ('Cascada Zeilor') și-a primit numele în anul 1000, când un lider păgân a aruncat idolii nordici în apele sale, simbolizând convertirea la creștinism.",
        "Lacul Mývatn s-a format în urma unei erupții vulcanice masive acum aproximativ 2.300 de ani.",
        "Dettifoss este cea mai puternică cascadă din Europa în ceea ce privește volumul de apă, cu un debit mediu de 193 m³/s.",
        "În Húsavík, șansele de a vedea balene în timpul unui tur de vară sunt adesea de peste 98%.",
        "Formațiunile de lavă de la Dimmuborgir ('Cetățile Întunecate') sunt considerate în folclor a fi casa 'Moș Crăciunilor' islandezi (Yule Lads).",
        "Canionul Ásbyrgi, în formă de potcoavă, are o lungime de 3,5 km și o lățime de 1,1 km. Legenda spune că este urma copitei calului lui Odin, Sleipnir.",
        "Craterul Víti din sistemul vulcanic Krafla conține un lac opac de culoare verde-albăstruie, cu o temperatură de aproximativ 25°C."
      ],
      en: [
        "Akureyri, Iceland's second-largest urban area, is located here.",
        "Dettifoss is Europe's most powerful waterfall by volume, with an average flow of 193 cubic meters per second.",
        "Lake Mývatn is a paradise for birdwatchers, especially for its diverse duck species.",
        "Goðafoss waterfall is named after the event in AD 1000 when pagan idols were thrown into it.",
        "Húsavík is the center of whale watching tours, with a high probability of seeing humpback whales.",
        "Ásbyrgi canyon is a massive, horseshoe-shaped gorge, said to be the footprint of Odin's horse, Sleipnir.",
        "The Krafla volcanic system includes the Víti ('Hell') crater, with its turquoise lake.",
        "Dimmuborgir ('Dark Castles') is a chaotic lava field with strange rock formations."
      ]
    }
  }
];

export const icelandCities: POI[] = [
  {
    id: "city-reykjavik",
    type: "city",
    parent: "IS-004",
    coords: [-21.9426, 64.1466],
    name: { de: "Reykjavík", hu: "Reykjavík", ro: "Reykjavík", en: "Reykjavík" },
    description: {
      de: "Die nördlichste Hauptstadt der Welt, bekannt für ihre bunte Architektur und lebendige Kulturszene.",
      hu: "A világ legészakibb fővárosa, színes építészetéről és pezsgő kulturális életéről ismert.",
      ro: "Cea mai nordică capitală a lumii, cunoscută pentru arhitectura sa colorată și scena culturală vibrantă.",
      en: "The world's northernmost capital city, known for its colorful architecture and vibrant cultural scene."
    },
    facts: {
      de: ["Name bedeutet 'Rauchbucht'.", "Wird fast vollständig mit Geothermie beheizt.", "Heimat der markanten Hallgrímskirkja."],
      hu: ["A neve 'füstös öblöt' jelent.", "Szinte teljesen geotermikus energiával fűtik.", "Itt található a jellegzetes Hallgrímskirkja templom."],
      ro: ["Numele înseamnă „Golful fumului”.", "Este încălzit aproape în întregime prin geotermie.", "Găzduiește emblematica biserică Hallgrímskirkja."],
      en: ["The name means 'Smoky Bay'.", "Runs almost entirely on geothermal energy.", "Home to the striking Hallgrímskirkja church."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Reykjavík, inima culturală și economică a Islandei, este o capitală plină de energie, artă și istorie. Deși este cea mai nordică capitală suverană din lume, atmosfera sa este caldă și primitoare. Centrul orașului este un labirint de străzi cu case din tablă ondulată vopsite în culori vii, buticuri de designer, galerii de artă și cafenele cochete. Viața de noapte, în special în weekend, este legendară. Clădiri iconice precum sala de concerte Harpa, cu fațada sa de sticlă inspirată de bazalt, și impunătoarea biserică Hallgrímskirkja, definesc orizontul orașului. Reykjavík este un oraș verde, încălzit de energia geotermală, și este poarta de acces către minunile naturale ale Islandei, fiind în același timp un centru cosmopolit.",
      en: "Reykjavík, Iceland's cultural and economic heart, is a capital brimming with energy, art, and history. Despite being the world's northernmost sovereign capital, its atmosphere is warm and welcoming. The city center is a maze of streets with colorful corrugated iron houses, designer boutiques, art galleries, and cozy cafes. The nightlife, especially on weekends, is legendary. Iconic buildings like the Harpa concert hall, with its basalt-inspired glass facade, and the towering Hallgrímskirkja church define the city skyline. Reykjavík is a green city, heated by geothermal energy, and serves as the gateway to Iceland's natural wonders while being a cosmopolitan center in its own right."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost fondat de Ingólfur Arnarson, primul colonist permanent al Islandei, în jurul anului 874 d.Hr.",
        "Populația zonei metropolitane Reykjavík este de aproximativ 233.000 de locuitori, adică două treimi din populația totală a țării.",
        "În Reykjavík se află Muzeul Falologic Islandez, singurul muzeu din lume care conține specimene de penis de la toate mamiferele din țară.",
        "Orașul are numeroase piscine în aer liber încălzite geotermal, care sunt populare pe tot parcursul anului.",
        "Imagine Peace Tower, un memorial dedicat lui John Lennon de către Yoko Ono, este situat pe insula Viðey, lângă Reykjavík.",
        "Festivalul de muzică Iceland Airwaves, care are loc anual în noiembrie, atrage artiști și fani din întreaga lume.",
        "Primăria este construită parțial pe lacul Tjörnin și găzduiește o hartă topografică mare, tridimensională, a Islandei.",
        "Consumul de hot-dog de la standul Bæjarins Beztu Pylsur este considerat o experiență culturală esențială."
      ],
      en: [
        "It was founded by Ingólfur Arnarson, Iceland's first permanent settler, around 874 AD.",
        "The population of the greater Reykjavík area is about 233,000, roughly two-thirds of the country's total population.",
        "Reykjavík is home to the Icelandic Phallological Museum, the world's only museum housing penis specimens from all mammals in a country.",
        "The city has numerous outdoor geothermal swimming pools that are popular year-round.",
        "The Imagine Peace Tower, a memorial to John Lennon by Yoko Ono, is located on Viðey Island near Reykjavík.",
        "The Iceland Airwaves music festival, held annually in November, attracts artists and fans from around the world.",
        "City Hall is partially built on Lake Tjörnin and houses a large, three-dimensional topographical map of Iceland.",
        "Eating a hot dog from the Bæjarins Beztu Pylsur stand is considered an essential cultural experience."
      ]
    },
    image: "/geo-images/iceland/city-reykjavik.webp"
  },
  {
    id: "city-akureyri",
    type: "city",
    parent: "IS-009",
    coords: [-18.0878, 65.6835],
    name: { de: "Akureyri", hu: "Akureyri", ro: "Akureyri", en: "Akureyri" },
    description: {
      de: "Die 'Hauptstadt des Nordens', am Ende des Eyjafjörður-Fjords gelegen.",
      hu: "Az 'észak fővárosa', az Eyjafjörður-fjord végén található.",
      ro: "„Capitala Nordului”, situată la capătul fiordului Eyjafjörður.",
      en: "The 'Capital of the North', situated at the base of Eyjafjörður Fjord."
    },
    facts: {
      de: ["Zweitgrößtes Stadtgebiet Islands.", "Hat einen der nördlichsten botanischen Gärten der Welt.", "Wichtiger Fischereihafen."],
      hu: ["Izland második legnagyobb városi területe.", "Itt található a világ egyik legészakibb botanikus kertje.", "Fontos halászkikötő."],
      ro: ["A doua cea mai mare zonă urbană din Islanda.", "Are una dintre cele mai nordice grădini botanice din lume.", "Port pescăresc important."],
      en: ["Second largest urban area in Iceland.", "Has one of the northernmost botanical gardens in the world.", "Important fishing port."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Akureyri, autoproclamata 'Capitală a Nordului', este un oraș surprinzător de cosmopolit, așezat la capătul celui mai lung fiord din Islanda, Eyjafjörður. Deși se află la mai puțin de 100 km de Cercul Polar, orașul are o climă relativ blândă și o grădină botanică luxuriantă. Centrul său este fermecător, cu case din lemn de la începutul secolului XX și o biserică impunătoare, Akureyrarkirkja, proiectată de același arhitect ca și Hallgrímskirkja din Reykjavík. Akureyri este un centru important pentru educație, cultură și servicii în nordul Islandei. Este, de asemenea, o bază excelentă pentru explorarea atracțiilor din apropiere, precum Lacul Mývatn, cascadele Goðafoss și Dettifoss, și pentru tururile de observare a balenelor.",
      en: "Akureyri, the self-proclaimed 'Capital of the North', is a surprisingly cosmopolitan town nestled at the head of Iceland's longest fjord, Eyjafjörður. Although it lies less than 100 km from the Arctic Circle, the town boasts a relatively mild climate and a lush botanical garden. Its center is charming, with early 20th-century wooden houses and an imposing church, Akureyrarkirkja, designed by the same architect as Reykjavík's Hallgrímskirkja. Akureyri is a major center for education, culture, and services in North Iceland. It also serves as an excellent base for exploring nearby attractions like Lake Mývatn, Goðafoss and Dettifoss waterfalls, and for whale watching tours."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Akureyri este al patrulea cel mai mare oraș din Islanda, după Reykjavík, Kópavogur și Hafnarfjörður.",
        "O particularitate a orașului sunt semafoarele în formă de inimă roșie, o inițiativă locală pentru a ridica moralul după criza financiară din 2008.",
        "Grădina Botanică din Akureyri (Lystigarðurinn) conține aproape toate plantele native din Islanda și peste 7.000 de specii străine.",
        "Orașul are propria sa stațiune de schi, Hlíðarfjall, considerată una dintre cele mai bune din țară.",
        "Biserica Akureyrarkirkja conține un vitraliu care a supraviețuit bombardamentelor din Catedrala Coventry, Anglia, în timpul celui de-al Doilea Război Mondial.",
        "Akureyri are cea mai mare fabrică de procesare a peștelui din Islanda.",
        "Universitatea din Akureyri este o instituție importantă, specializată în studii arctice și științe sociale.",
        "În timpul verii, orașul găzduiește Festivalul de Artă de la Akureyri, un eveniment cultural major."
      ],
      en: [
        "Akureyri is the fourth-largest town in Iceland, after Reykjavík, Kópavogur, and Hafnarfjörður.",
        "A unique feature of the town is its red heart-shaped traffic lights, a local initiative to boost morale after the 2008 financial crisis.",
        "The Akureyri Botanical Garden (Lystigarðurinn) contains nearly every plant native to Iceland and over 7,000 foreign species.",
        "The town has its own ski resort, Hlíðarfjall, considered one of the best in the country.",
        "Akureyrarkirkja church contains a stained-glass window that survived the bombing of Coventry Cathedral, England, during WWII.",
        "The University of Akureyri is an important institution, specializing in Arctic studies and social sciences.",
        "During the summer, the town hosts the Akureyri Art Festival, a major cultural event.",
        "Its location at the end of a long fjord gives it a sheltered climate, one of the warmest in Iceland."
      ]
    }
  },
  {
    id: "city-keflavik",
    type: "city",
    parent: "IS-003",
    coords: [-22.5624, 64.0049],
    name: { de: "Keflavík", hu: "Keflavík", ro: "Keflavík", en: "Keflavík" },
    description: {
      de: "Bekannt als Standort des internationalen Flughafens und für seine Musikgeschichte.",
      hu: "A nemzetközi repülőtérről és zenei történelméről ismert város.",
      ro: "Cunoscut pentru aeroportul internațional și istoria sa muzicală.",
      en: "Known for hosting the international airport and its music history."
    },
    facts: {
      de: ["Früher ein wichtiger US-Militärstützpunkt.", "Wird oft als 'Stadt des Rock 'n' Roll' bezeichnet.", "Tor für die meisten Besucher Islands."],
      hu: ["Korábban fontos amerikai katonai bázis volt.", "Gyakran nevezik a 'rock 'n' roll városának'.", "A legtöbb látogató kapuja Izlandra."],
      ro: ["Fostă bază militară importantă a SUA.", "Deseori numit „Orașul Rock 'n' Roll-ului”.", "Poarta de intrare pentru majoritatea vizitatorilor Islandei."],
      en: ["Formerly a major US military base.", "Often called the 'Town of Rock 'n' Roll'.", "Gateway for most visitors to Iceland."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Keflavík, parte a municipalității Reykjanesbær, este poarta principală de intrare în Islanda, găzduind Aeroportul Internațional Keflavík. Istoria sa modernă este strâns legată de prezența militară americană, care a durat din Al Doilea Război Mondial până în 2006. Această influență a transformat Keflavík într-un creuzet cultural, aducând rock 'n' roll-ul și cultura americană în Islanda, ceea ce i-a adus porecla de 'Orașul Beat-ului' (bítlabærinn). Astăzi, este un oraș în expansiune, beneficiind de proximitatea față de aeroport și de atracții precum Laguna Albastră. Muzeul 'Lumea Vikingilor' este o atracție notabilă, găzduind o replică exactă a unei corăbii vikinge, Íslendingur, care a navigat până în America de Nord.",
      en: "Keflavík, part of the Reykjanesbær municipality, is the main gateway to Iceland as it hosts Keflavík International Airport. Its modern history is closely tied to the American military presence, which lasted from World War II until 2006. This influence turned Keflavík into a cultural melting pot, introducing rock 'n' roll and American culture to Iceland, earning it the nickname 'the Beatle Town' (bítlabærinn). Today, it's a growing town benefiting from its proximity to the airport and attractions like the Blue Lagoon. The Viking World museum is a notable attraction, housing an exact replica of a Viking ship, the Íslendingur, which sailed to North America."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Keflavík și orașul vecin Njarðvík au fuzionat în 1994 pentru a forma municipalitatea Reykjanesbær.",
        "Aeroportul Internațional Keflavík (KEF) gestionează peste 98% din traficul internațional de pasageri al Islandei.",
        "Prezența bazei NATO a făcut ca orașul să aibă o influență americană puternică, inclusiv posturi de radio și TV americane.",
        "Multe trupe islandeze de succes din anii '60 și '70, precum Hljómar, provin din Keflavík.",
        "Muzeul 'Lumea Vikingilor' (Víkingaheimar) a fost deschis în 2009 și este proiectat de arhitectul Guðmundur Jónsson.",
        "Stânca Duus, o formațiune de coastă, este un punct de reper local și găzduiește complexul cultural Duus Hús.",
        "Orașul este un centru important pentru industria pescuitului în Peninsula Reykjanes.",
        "Keflavík se află într-o zonă extrem de activă vulcanic, fiind aproape de siturile recente de erupție."
      ],
      en: [
        "Keflavík and the neighboring town of Njarðvík merged in 1994 to form the municipality of Reykjanesbær.",
        "Keflavík International Airport (KEF) handles over 98% of Iceland's international passenger traffic.",
        "The presence of the NATO base gave the town a strong American influence, including US radio and TV stations.",
        "Many successful Icelandic bands from the 60s and 70s, such as Hljómar, originated in Keflavík.",
        "The Viking World museum (Víkingaheimar) opened in 2009 and was designed by architect Guðmundur Jónsson.",
        "The Duus Rock, a coastal formation, is a local landmark and home to the Duus Hús cultural complex.",
        "The town is a significant hub for the fishing industry on the Reykjanes Peninsula.",
        "Keflavík is located in a highly active volcanic zone, close to recent eruption sites."
      ]
    }
  },
  {
    id: "city-isafjordur",
    type: "city",
    parent: "IS-007",
    coords: [-23.1274, 66.0747],
    name: { de: "Ísafjörður", hu: "Ísafjörður", ro: "Ísafjörður", en: "Ísafjörður" },
    description: {
      de: "Die größte Stadt der Westfjorde, umgeben von steilen Bergen.",
      hu: "A Westfjords (Nyugati fjordok) legnagyobb városa, meredek hegyekkel körülvéve.",
      ro: "Cel mai mare oraș din Westfjords, înconjurat de munți abrupți.",
      en: "The largest town in the Westfjords, surrounded by towering mountains."
    },
    facts: {
      de: ["Zentrum für Handel und Fischerei in der Region.", "Bekannt für seine alten Holzhäuser.", "Austragungsort des 'Aldrei fór ég suður' Musikfestivals."],
      hu: ["A régió kereskedelmi és halászati központja.", "Régi faházairól ismert.", "Itt rendezik az 'Aldrei fór ég suður' zenei fesztivált."],
      ro: ["Centru pentru comerț și pescuit în regiune.", "Cunoscut pentru casele sale vechi din lemn.", "Găzduiește festivalul de muzică „Aldrei fór ég suður”."],
      en: ["Regional center for trade and fishing.", "Known for its old wooden houses.", "Hosts the 'Aldrei fór ég suður' music festival."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Ísafjörður, capitala neoficială a Fiordurilor de Vest, este un oraș pitoresc situat pe o limbă de nisip în mijlocul fiordului Skutulsfjörður. Este înconjurat de munți abrupți care se înalță dramatic din mare, creând un peisaj spectaculos și o senzație de izolare. Istoria sa este legată de pescuit, fiind unul dintre cele mai importante centre pescărești ale Islandei timp de secole. Centrul vechi al orașului, Neðstikaupstaður, conține unele dintre cele mai vechi case din lemn din Islanda, datând din secolul al XVIII-lea, care acum fac parte din Muzeul Patrimoniului din Westfjords. În ciuda dimensiunilor sale reduse, Ísafjörður are o viață culturală surprinzător de bogată, găzduind festivaluri de muzică renumite și o universitate specializată în managementul costier.",
      en: "Ísafjörður, the unofficial capital of the Westfjords, is a picturesque town situated on a sand spit in the middle of the Skutulsfjörður fjord. It's surrounded by steep mountains that rise dramatically from the sea, creating a spectacular landscape and a sense of isolation. Its history is tied to fishing, having been one of Iceland's most important fishing centers for centuries. The old town center, Neðstikaupstaður, contains some of the oldest wooden houses in Iceland, dating from the 18th century, which are now part of the Westfjords Heritage Museum. Despite its small size, Ísafjörður has a surprisingly rich cultural life, hosting renowned music festivals and a university specializing in coastal management."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Ísafjörður are o populație de aproximativ 2.600 de locuitori, fiind cea mai mare așezare din Westfjords.",
        "Festivalul de muzică 'Aldrei fór ég suður' (Nu am fost niciodată în sud) este un eveniment gratuit care are loc în fiecare an de Paște.",
        "Muzeul Patrimoniului din Westfjords este găzduit în patru dintre cele mai vechi clădiri din Islanda, inclusiv Tjöruhúsið, acum un renumit restaurant de pește.",
        "Aeroportul din Ísafjörður este cunoscut pentru una dintre cele mai dificile apropieri din Europa, necesitând un viraj strâns în interiorul fiordului.",
        "Orașul este o bază populară pentru explorarea Rezervației Naturale Hornstrandir, o zonă complet nelocuită.",
        "Un arc triumfal din os de balenă, ridicat în 1937, stă la intrarea în cimitirul orașului.",
        "Universitatea din Ísafjörður oferă programe de master în Managementul Marin și Costier.",
        "Vara, orașul este o destinație populară pentru navele de croazieră, în ciuda accesului dificil."
      ],
      en: [
        "Ísafjörður has a population of about 2,600, making it the largest settlement in the Westfjords.",
        "The music festival 'Aldrei fór ég suður' (I never went south) is a free event held every Easter.",
        "The Westfjords Heritage Museum is housed in four of Iceland's oldest buildings, including Tjöruhúsið, now a famous fish restaurant.",
        "The airport in Ísafjörður is known for one of the most challenging approaches in Europe, requiring a sharp turn within the fjord.",
        "The town is a popular base for exploring the Hornstrandir Nature Reserve, a completely uninhabited area.",
        "A triumphal arch made of whalebone, erected in 1937, stands at the entrance to the town's cemetery.",
        "The University Centre of the Westfjords offers master's programs in Coastal and Marine Management.",
        "In summer, the town is a popular destination for cruise ships, despite its difficult access."
      ]
    }
  },
  {
    id: "city-selfoss",
    type: "city",
    parent: "IS-002",
    coords: [-21.0011, 63.9331],
    name: { de: "Selfoss", hu: "Selfoss", ro: "Selfoss", en: "Selfoss" },
    description: {
      de: "Ein wichtiges Dienstleistungszentrum im Süden Islands am Fluss Ölfusá.",
      hu: "Fontos szolgáltató központ Dél-Izlandon, az Ölfusá-folyó partján.",
      ro: "Un centru important de servicii în sudul Islandei, pe râul Ölfusá.",
      en: "A major service center in South Iceland on the banks of the Ölfusá River."
    },
    facts: {
      de: ["Größte Stadt im Süden.", "Wichtiges Zentrum der Milchindustrie.", "Liegt an der Ringstraße (Hringvegur)."],
      hu: ["A legnagyobb város délen.", "A tejipar fontos központja.", "A gyűrűs úton (Hringvegur) található."],
      ro: ["Cel mai mare oraș din sud.", "Centru important al industriei lactatelor.", "Situat pe drumul principal (Ring Road)."],
      en: ["Largest town in the south.", "Major hub for the dairy industry.", "Located on the Ring Road."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Selfoss este cel mai mare oraș din sudul Islandei și un centru vital pentru comerț, servicii și agricultură în regiune. Situat pe malurile râului glaciar Ölfusá, orașul este un nod de transport esențial, fiind traversat de șoseaua principală a Islandei (Ring Road). Spre deosebire de multe orașe islandeze cu porturi pitorești, Selfoss este un oraș continental, a cărui dezvoltare a fost impulsionată de construcția primului pod peste râul Ölfusá în 1891. Este un oraș modern, funcțional, care servește drept bază pentru turiștii care explorează Coasta de Sud și Cercul de Aur. Un proiect recent a revitalizat centrul orașului, reconstruind clădiri istorice și creând o nouă piață vibrantă.",
      en: "Selfoss is the largest town in South Iceland and a vital center for trade, services, and agriculture in the region. Situated on the banks of the glacial river Ölfusá, the town is an essential transportation hub, traversed by Iceland's main Ring Road. Unlike many Icelandic towns with picturesque harbors, Selfoss is an inland town whose development was spurred by the construction of the first bridge over the Ölfusá river in 1891. It is a modern, functional town that serves as a base for tourists exploring the South Coast and the Golden Circle. A recent project has revitalized the town center, reconstructing historic buildings and creating a vibrant new market square."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Podul peste Ölfusá a fost o minune a ingineriei la vremea sa și a deschis calea pentru dezvoltarea economică a întregului sud.",
        "Selfoss este sediul principal al Mjólkursamsalan (MS), cea mai mare companie de produse lactate din Islanda.",
        "Bobby Fischer, controversatul campion mondial la șah, a locuit în Selfoss în ultimii săi ani și este înmormântat în apropiere.",
        "Orașul a fost grav avariat de un cutremur cu magnitudinea de 6,3 grade pe scara Richter în mai 2008.",
        "Noul centru al orașului (Miðbær Selfoss) include replici a 30 de clădiri istorice din diverse locuri din Islanda.",
        "Râul Ölfusá are cel mai mare debit mediu dintre toate râurile din Islanda, de 423 metri cubi pe secundă.",
        "Biblioteca publică din Selfoss găzduiește o expoziție permanentă despre istoria șahului în Islanda.",
        "În fiecare an, în august, orașul găzduiește festivalul 'Kótilettan' (Cotletul), o sărbătoare a muzicii și a grătarului."
      ],
      en: [
        "The bridge over Ölfusá was an engineering marvel of its time and opened up economic development for the entire south.",
        "Selfoss is the headquarters of Mjólkursamsalan (MS), Iceland's largest dairy company.",
        "Bobby Fischer, the controversial world chess champion, lived in Selfoss in his final years and is buried nearby.",
        "The town was severely damaged by a 6.3 magnitude earthquake in May 2008.",
        "The new town center (Miðbær Selfoss) includes replicas of 30 historic buildings from various places in Iceland.",
        "The Ölfusá river has the largest average flow of any river in Iceland, at 423 cubic meters per second.",
        "The public library in Selfoss hosts a permanent exhibition on the history of chess in Iceland.",
        "Every year in August, the town hosts the 'Kótilettan' (The Chop) festival, a celebration of music and barbecue."
      ]
    }
  },
  {
    id: "city-seydisfjordur",
    type: "city",
    parent: "IS-001",
    coords: [-14.0101, 65.2598],
    name: { de: "Seyðisfjörður", hu: "Seyðisfjörður", ro: "Seyðisfjörður", en: "Seyðisfjörður" },
    description: {
      de: "Ein malerisches Fischerdorf in den Ostfjorden, bekannt für seine bunten Holzhäuser und seine Kunstszene.",
      hu: "Festői halászfalu a Keleti-fjordokban, színes faházairól és művészeti életéről ismert.",
      ro: "Un sat de pescari pitoresc din fiordurile de est, cunoscut pentru casele sale colorate din lemn și scena sa artistică.",
      en: "A picturesque fishing village in the East Fjords, known for its colorful wooden houses and art scene."
    },
    facts: {
      de: ["Ankunftsort der Fähre aus Dänemark und den Färöern.", "Bekannt für die blaue Kirche und den Regenbogenweg.", "Umgeben von steilen Bergen und Wasserfällen."],
      hu: ["A Dániából és Feröer-szigetekről érkező komp kikötőhelye.", "Híres a kék templomáról és a szivárványos útjáról.", "Meredek hegyek és vízesések veszik körül."],
      ro: ["Punctul de sosire a feribotului din Danemarca și Insulele Feroe.", "Cunoscut pentru biserica albastră și drumul curcubeului.", "Înconjurat de munți abrupți și cascade."],
      en: ["Arrival point for the ferry from Denmark and the Faroe Islands.", "Famous for its blue church and rainbow-painted street.", "Surrounded by steep mountains and waterfalls."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Seyðisfjörður este considerat unul dintre cele mai frumoase orașe din Islanda, un sat pescăresc idilic, cuibărit la capătul unui fiord lung de 17 kilometri. Este renumit pentru colecția sa unică de case din lemn bine conservate, viu colorate, care creează o atmosferă de basm. Orașul este, de asemenea, un centru artistic vibrant, atrăgând artiști din întreaga lume și găzduind un program de rezidență artistică. Biserica albastră, de un albastru pal, și strada curcubeu care duce la ea, au devenit imagini iconice ale orașului. Seyðisfjörður este poarta de intrare maritimă a Islandei către Europa, fiind portul de destinație pentru feribotul Norröna. Înconjurat de munți înalți și cascade, orașul este un punct de plecare excelent pentru drumeții.",
      en: "Seyðisfjörður is considered one of Iceland's most beautiful towns, an idyllic fishing village nestled at the end of a 17-kilometer-long fjord. It's renowned for its unique collection of well-preserved, brightly colored wooden houses that create a storybook atmosphere. The town is also a vibrant arts hub, attracting artists from around the world and hosting an artist residency program. The pale blue church and the rainbow-painted street leading to it have become iconic images of the town. Seyðisfjörður is Iceland's maritime gateway to Europe, serving as the port for the Norröna ferry. Surrounded by high mountains and waterfalls, the town is an excellent starting point for hikes."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Multe dintre casele istorice din lemn au fost kituri prefabricate aduse din Norvegia în jurul anului 1900.",
        "Feribotul MS Norröna, care leagă Islanda de Insulele Feroe și Danemarca, acostează aici o dată pe săptămână.",
        "Strada curcubeu (Regnbogavegur) a fost pictată inițial în 2016 ca parte a festivalului local de mândrie LGBTQ+.",
        "Orașul a fost unul dintre principalele locuri de filmare pentru serialul islandez de succes 'Trapped' (Capcană).",
        "Centrul de arte vizuale Skaftfell este o instituție culturală importantă în estul Islandei.",
        "În timpul celui de-al Doilea Război Mondial, Seyðisfjörður a fost o importantă bază navală britanică și americană.",
        "Drumul care leagă Seyðisfjörður de restul Islandei trece peste un platou montan înalt (Fjarðarheiði), care este adesea închis iarna.",
        "Instalația sonoră 'Tvisöngur', creată de artistul german Lukas Kühne, este situată pe un deal deasupra orașului și constă în cinci cupole de beton interconectate."
      ],
      en: [
        "Many of the historic wooden houses were prefabricated kits brought from Norway around 1900.",
        "The MS Norröna ferry, connecting Iceland to the Faroe Islands and Denmark, docks here once a week.",
        "The rainbow street (Regnbogavegur) was first painted in 2016 as part of the local LGBTQ+ pride festival.",
        "The town was a primary filming location for the successful Icelandic TV series 'Trapped'.",
        "The Skaftfell Center for Visual Art is a significant cultural institution in East Iceland.",
        "During WWII, Seyðisfjörður served as an important British and American naval base.",
        "The road connecting Seyðisfjörður to the rest of Iceland crosses a high mountain pass (Fjarðarheiði), which is often closed in winter.",
        "The sound sculpture 'Tvisöngur' by German artist Lukas Kühne is located on a hill above the town."
      ]
    }
  }
];

export const icelandNature: POI[] = [
  {
    id: "nature-thingvellir",
    type: "landmark",
    parent: "IS-002",
    coords: [-21.1295, 64.2559],
    name: { de: "Þingvellir Nationalpark", hu: "Þingvellir Nemzeti Park", ro: "Parcul Național Þingvellir", en: "Þingvellir National Park" },
    description: {
      de: "UNESCO-Welterbe, wo die nordamerikanische und die eurasische Erdplatte auseinanderdriften.",
      hu: "UNESCO világörökség, ahol az észak-amerikai és az eurázsiai kőzetlemezek távolodnak egymástól.",
      ro: "Patrimoniu Mondial UNESCO, unde plăcile tectonice nord-americană și eurasiatică se despart.",
      en: "UNESCO World Heritage site where the North American and Eurasian tectonic plates drift apart."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Þingvellir (Thingvellir) este un loc de o imensă importanță geologică și istorică pentru Islanda. Din punct de vedere geologic, parcul este situat direct pe Dorsala Atlantică, unde plăcile tectonice nord-americană și eurasiatică se despart cu o viteză de aproximativ 2,5 cm pe an. Acest proces a creat un peisaj dramatic de fisuri, canioane și câmpuri de lavă. Istoric, Þingvellir este locul de naștere al națiunii islandeze; aici a fost fondat Alþingi, parlamentul național, în anul 930 d.Hr. Timp de secole, liderii vikingi s-au adunat aici pentru a legifera și a judeca. Datorită acestei duble semnificații, Þingvellir a fost inclus pe lista Patrimoniului Mondial UNESCO.",
      en: "Þingvellir (Thingvellir) is a site of immense geological and historical importance to Iceland. Geologically, the park sits directly on the Mid-Atlantic Ridge, where the North American and Eurasian tectonic plates are pulling apart at a rate of about 2.5 cm per year. This process has created a dramatic landscape of fissures, canyons, and lava fields. Historically, Þingvellir is the birthplace of the Icelandic nation; it was here that the Alþingi, the national parliament, was founded in 930 AD. For centuries, Viking chieftains gathered here to make laws and dispense justice. Due to this dual significance, Þingvellir has been designated a UNESCO World Heritage site."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Alþingi este considerat cel mai vechi parlament continuu existent din lume.",
        "Fisura Silfra, umplută cu apă glaciară cristalină, oferă o vizibilitate subacvatică de peste 100 de metri.",
        "Lögberg (Stânca Legii) era punctul central unde se recitau legile în fața adunării.",
        "Lacul Þingvallavatn, cel mai mare lac natural din Islanda, se află în parc.",
        "Cascada Öxarárfoss este o cascadă artificială, creată prin devierea râului Öxará pentru a alimenta adunarea cu apă.",
        "Unele scene din serialul 'Urzeala Tronurilor' au fost filmate la Þingvellir.",
        "Parcul a fost înființat în 1930 pentru a celebra 1000 de ani de la fondarea Alþingi.",
        "Numele 'Þingvellir' se traduce prin 'Câmpiile Parlamentului'."
      ],
      en: [
        "The Alþingi is considered the oldest surviving parliament in the world.",
        "The Silfra fissure, filled with crystal-clear glacial water, offers over 100 meters of underwater visibility for divers and snorkelers.",
        "Lögberg (Law Rock) was the central point where laws were recited to the assembly.",
        "Þingvallavatn, Iceland's largest natural lake, is located within the park.",
        "Öxarárfoss waterfall is a man-made waterfall, created by diverting the river Öxará to provide water for the assembly.",
        "Several scenes from the TV series 'Game of Thrones' were filmed at Þingvellir.",
        "The park was established in 1930 to celebrate the 1000th anniversary of the Alþingi.",
        "The name 'Þingvellir' translates to 'Parliament Plains'."
      ]
    }
  },
  {
    id: "nature-gullfoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-20.1202, 64.3271],
    name: { de: "Gullfoss", hu: "Gullfoss", ro: "Gullfoss", en: "Gullfoss" },
    description: {
      de: "Der 'Goldene Wasserfall', einer der bekanntesten Wasserfälle Islands.",
      hu: "Az 'arany vízesés', Izland egyik legismertebb vízesése.",
      ro: "„Cascada de Aur”, una dintre cele mai cunoscute cascade din Islanda.",
      en: "The 'Golden Waterfall', one of Iceland's most famous waterfalls."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Gullfoss, sau 'Cascada de Aur', este una dintre cele mai spectaculoase și mai iubite cascade din Islanda. Parte a faimosului traseu 'Cercul de Aur', cascada este alimentată de râul glaciar Hvítá. Apa se prăbușește într-un canion adânc în două trepte distincte: prima are 11 metri, iar a doua 21 de metri, creând un spectacol asurzitor și o ceață densă. Numele său provine de la nuanța aurie pe care apa o capătă în zilele însorite. La începutul secolului XX, cascada a fost pe punctul de a fi exploatată pentru energie hidroelectrică, dar a fost salvată datorită eforturilor unei localnice pe nume Sigríður Tómasdóttir, considerată prima ecologistă a Islandei.",
      en: "Gullfoss, or the 'Golden Waterfall', is one of Iceland's most spectacular and beloved waterfalls. Part of the famous 'Golden Circle' route, the waterfall is fed by the glacial river Hvítá. The water plummets into a deep canyon in two distinct tiers: the first is 11 meters, and the second is 21 meters, creating a thunderous spectacle and dense mist. Its name comes from the golden hue the water takes on in sunny weather. In the early 20th century, the waterfall was at risk of being harnessed for hydroelectric power but was saved through the efforts of a local woman named Sigríður Tómasdóttir, considered Iceland's first environmentalist."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Debitul mediu al cascadei este de aproximativ 140 de metri cubi pe secundă vara și 80 iarna.",
        "Canionul în care cade apa are o adâncime de până la 70 de metri.",
        "În zilele însorite, curcubeele sunt o priveliște obișnuită deasupra cascadei.",
        "O potecă permite vizitatorilor să se apropie foarte mult de marginea cascadei, dar poate fi închisă iarna din cauza gheții.",
        "Sigríður Tómasdóttir, salvatoarea cascadei, a mers pe jos de mai multe ori până la Reykjavík (peste 100 km) pentru a protesta.",
        "Un monument dedicat lui Sigríður se află în apropierea cascadei.",
        "Gullfoss este protejată ca rezervație naturală din 1979.",
        "Apa râului Hvítá provine din topirea ghețarului Langjökull, al doilea ca mărime din Islanda."
      ],
      en: [
        "The average flow of the waterfall is about 140 cubic meters per second in summer and 80 in winter.",
        "The canyon the water falls into is up to 70 meters deep.",
        "On sunny days, rainbows are a common sight above the waterfall.",
        "A path allows visitors to get very close to the edge of the falls, but it can be closed in winter due to ice.",
        "Sigríður Tómasdóttir, the savior of the falls, walked to Reykjavík (over 100 km) multiple times to protest.",
        "A memorial to Sigríður is located near the waterfall.",
        "Gullfoss has been protected as a nature reserve since 1979.",
        "The water of the Hvítá river originates from the melting of Langjökull, Iceland's second-largest glacier."
      ]
    }
  },
  {
    id: "nature-geysir",
    type: "landmark",
    parent: "IS-002",
    coords: [-20.3023, 64.3104],
    name: { de: "Geysir-Heißquellengebiet", hu: "Gejzír-hőforrásvidék", ro: "Zona geotermală Geysir", en: "Geysir Hot Spring Area" },
    description: {
      de: "Das Gebiet, nach dem alle Geysire benannt sind.",
      hu: "A terület, amelyről az összes gejzírt elnevezték.",
      ro: "Zona după care sunt numite toate gheizerele.",
      en: "The area that gave its name to all geysers."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Zona geotermală Geysir, situată în valea Haukadalur, este un fenomen natural fascinant și locul de origine al cuvântului 'gheizăr'. Aici, Marele Geysir (Stori-Geysir), care a dat numele tuturor celorlalte, erupe acum foarte rar. Cu toate acestea, vecinul său, Strokkur, oferă un spectacol fiabil la fiecare 5-10 minute, aruncând o coloană de apă fierbinte la înălțimi de până la 30 de metri. Întreaga zonă este presărată cu izvoare termale, bazine de noroi clocotind (fumarole) și depozite de minerale colorate. Mirosul distinct de sulf plutește în aer, amintind vizitatorilor de puterea geotermală imensă care se află chiar sub picioarele lor. Este o oprire esențială pe traseul Cercului de Aur.",
      en: "The Geysir geothermal area, located in the Haukadalur valley, is a fascinating natural phenomenon and the origin of the word 'geyser'. Here, the Great Geysir (Stori-Geysir), which gave its name to all others, now erupts very rarely. However, its neighbor, Strokkur, provides a reliable show every 5-10 minutes, hurling a column of hot water up to 30 meters high. The entire area is dotted with hot springs, bubbling mud pots (fumaroles), and colorful mineral deposits. The distinct smell of sulfur hangs in the air, reminding visitors of the immense geothermal power just beneath their feet. It is an essential stop on the Golden Circle route."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Cuvântul 'geysir' provine de la verbul islandez 'gjósa', care înseamnă 'a erupe'.",
        "Erupțiile lui Strokkur sunt declanșate de scăderea presiunii în conducta subterană, ceea ce face ca apa supraîncălzită să se transforme instantaneu în abur.",
        "Marele Geysir a fost primul gheizăr descris într-o sursă tipărită din Europa, în secolul al XVII-lea.",
        "Temperatura apei în conducta lui Strokkur atinge aproximativ 120°C înainte de erupție.",
        "În zonă se află și un mic gheizăr numit Litli-Geysir ('Micul Geysir').",
        "Culoarea albastră-lăptoasă a apei din unele bazine este datorată siliciului dizolvat.",
        "Zona a fost una dintre primele atracții turistice din Islanda, vizitatorii venind aici încă din secolul al XVIII-lea.",
        "Activitatea Marelui Geysir poate fi uneori stimulată de cutremure."
      ],
      en: [
        "The word 'geyser' comes from the Icelandic verb 'gjósa', which means 'to erupt'.",
        "Strokkur's eruptions are triggered by a decrease in pressure in the underground conduit, causing superheated water to flash into steam.",
        "The Great Geysir was the first geyser described in a printed source in Europe, in the 17th century.",
        "The water temperature in Strokkur's conduit reaches about 120°C before an eruption.",
        "There is also a small geyser in the area called Litli-Geysir ('Little Geyser').",
        "The milky-blue color of the water in some pools is due to dissolved silica.",
        "The area was one of Iceland's first tourist attractions, with visitors coming since the 18th century.",
        "The activity of the Great Geysir can sometimes be stimulated by earthquakes."
      ]
    }
  },
  {
    id: "nature-vatnajokull",
    type: "landmark",
    parent: "IS-001",
    coords: [-17.2, 64.4],
    name: { de: "Vatnajökull", hu: "Vatnajökull", ro: "Vatnajökull", en: "Vatnajökull" },
    description: {
      de: "Der größte Gletscher Islands und Europas außerhalb des Polargebiets.",
      hu: "Izland és Európa legnagyobb gleccserje a sarkvidéken kívül.",
      ro: "Cel mai mare ghețar din Islanda și din Europa în afara regiunii polare.",
      en: "The largest glacier in Iceland and Europe outside the Arctic."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Vatnajökull este o calotă glaciară colosală, cea mai mare din Europa ca volum și a doua ca suprafață. Acoperind peste 8.100 de kilometri pătrați, acest gigant de gheață domină sud-estul Islandei. Sub stratul său gros de gheață, care atinge pe alocuri 1.000 de metri, se ascunde o lume a contrastelor, cu unii dintre cei mai activi vulcani ai țării, precum Grímsvötn și Bárðarbunga. Această interacțiune dintre foc și gheață dă naștere unor fenomene unice, cum ar fi peșterile de gheață cristalină, care se formează în fiecare iarnă, și inundațiile glaciare catastrofale (jökulhlaup). Întregul ghețar și zona înconjurătoare formează Parcul Național Vatnajökull, cel mai mare parc național din Europa.",
      en: "Vatnajökull is a colossal ice cap, the largest in Europe by volume and second by area. Covering over 8,100 square kilometers, this ice giant dominates southeastern Iceland. Beneath its thick ice sheet, which reaches up to 1,000 meters in places, lies a world of contrasts, with some of the country's most active volcanoes, such as Grímsvötn and Bárðarbunga. This interaction between fire and ice gives rise to unique phenomena like crystal ice caves, which form each winter, and catastrophic glacial floods (jökulhlaup). The entire glacier and its surrounding area form Vatnajökull National Park, the largest national park in Europe."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Vatnajökull acoperă aproximativ 8% din suprafața totală a Islandei.",
        "Gheața are o vechime medie de câteva sute de ani, dar în profunzime poate atinge și câteva mii de ani.",
        "Parcul Național Vatnajökull este un sit al Patrimoniului Mondial UNESCO.",
        "Vârful Hvannadalshnjúkur, situat la marginea sudică a ghețarului, este cel mai înalt punct din Islanda (2.110 m).",
        "Erupția vulcanului Grímsvötn din 2011 a produs un nor de cenușă care a ajuns la o altitudine de 20 km.",
        "Peșterile de gheață sunt accesibile doar iarna și locația lor se schimbă în fiecare an.",
        "Ghețarul alimentează numeroase râuri și lagune glaciare, inclusiv faimoasa Jökulsárlón.",
        "Din cauza încălzirii globale, Vatnajökull pierde anual un volum semnificativ de gheață."
      ],
      en: [
        "Vatnajökull covers about 8% of Iceland's total land area.",
        "The ice has an average age of a few hundred years, but at depth, it can reach several thousand years.",
        "Vatnajökull National Park is a UNESCO World Heritage site.",
        "The Hvannadalshnjúkur peak, on the southern edge of the glacier, is the highest point in Iceland (2,110 m).",
        "The 2011 eruption of the Grímsvötn volcano produced an ash cloud that reached an altitude of 20 km.",
        "The ice caves are only accessible in winter, and their location changes every year.",
        "The glacier feeds numerous rivers and glacial lagoons, including the famous Jökulsárlón.",
        "Due to global warming, Vatnajökull is losing a significant volume of ice annually."
      ]
    }
  },
  {
    id: "nature-jokulsarlon",
    type: "landmark",
    parent: "IS-001",
    coords: [-16.1793, 64.0484],
    name: { de: "Jökulsárlón", hu: "Jökulsárlón", ro: "Jökulsárlón", en: "Jökulsárlón" },
    description: {
      de: "Eine Gletscherlagune mit schwimmenden Eisbergen.",
      hu: "Gleccserlagúna úszó jéghegyekkel.",
      ro: "O lagună glaciară cu iceberguri plutitoare.",
      en: "A glacier lagoon filled with floating icebergs."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Jökulsárlón este una dintre bijuteriile coroanei Islandei, o lagună glaciară spectaculoasă situată la poalele ghețarului Breiðamerkurjökull, o limbă a marelui Vatnajökull. Laguna este plină cu aisberguri care se desprind constant de pe frontul ghețarului, creând un peisaj mereu în schimbare. Aisbergurile, de un albastru electric, alb pur sau cu dungi de cenușă vulcanică, plutesc lent prin lagună spre ocean. Când ajung la mare, multe sunt aruncate de valuri pe plaja de nisip negru din apropiere, creând 'Plaja de Diamante'. Laguna este un habitat important pentru foci, care pot fi adesea văzute odihnindu-se pe aisberguri sau pescuind în apele reci.",
      en: "Jökulsárlón is one of the crown jewels of Iceland, a spectacular glacial lagoon at the foot of the Breiðamerkurjökull glacier, an outlet of the great Vatnajökull. The lagoon is filled with icebergs that constantly break off the glacier's front, creating an ever-changing landscape. The icebergs, in shades of electric blue, pure white, or streaked with volcanic ash, float slowly through the lagoon towards the ocean. When they reach the sea, many are washed ashore onto the nearby black sand beach, creating the 'Diamond Beach'. The lagoon is an important habitat for seals, which can often be seen resting on icebergs or fishing in the cold waters."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Jökulsárlón este un lac relativ tânăr, formându-se abia în anii 1930, pe măsură ce ghețarul a început să se retragă.",
        "Este cel mai adânc lac din Islanda, cu o adâncime maximă de aproximativ 248 de metri.",
        "Dimensiunea lagunei s-a cvadruplat din anii 1970.",
        "Aici au fost filmate scene din mai multe filme de la Hollywood, inclusiv 'Die Another Day' și 'A View to a Kill' (din seria James Bond), 'Tomb Raider' și 'Batman Begins'.",
        "Culoarea albastră intensă a ghetii este rezultatul compresiei și a lipsei de bule de aer.",
        "Tururile cu barca amfibie sau cu zodiacul permit vizitatorilor să navigheze printre aisberguri.",
        "Viteza cu care aisbergurile se deplasează depinde de maree și de vânt.",
        "Sunetul produs de spargerea sau răsturnarea unui aisberg poate fi asurzitor."
      ],
      en: [
        "Jökulsárlón is a relatively young lake, having only formed in the 1930s as the glacier began to retreat.",
        "It is the deepest lake in Iceland, with a maximum depth of about 248 meters.",
        "The size of the lagoon has quadrupled since the 1970s.",
        "Scenes from several Hollywood movies have been filmed here, including 'Die Another Day', 'A View to a Kill', 'Tomb Raider', and 'Batman Begins'.",
        "The intense blue color of the ice is a result of compression and the lack of air bubbles.",
        "Amphibious boat and Zodiac tours allow visitors to navigate among the icebergs.",
        "The speed at which the icebergs move depends on the tides and wind.",
        "The sound of an iceberg cracking or flipping over can be deafening."
      ]
    }
  },
  {
    id: "nature-skogafoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.5113, 63.532],
    name: { de: "Skógafoss", hu: "Skógafoss", ro: "Skógafoss", en: "Skógafoss" },
    description: {
      de: "Ein gewaltiger Wasserfall im Süden, bekannt für seine perfekte Rechtecksform.",
      hu: "Hatalmas vízesés délen, tökéletes téglalap alakjáról ismert.",
      ro: "O cascadă masivă în sud, cunoscută pentru forma sa dreptunghiulară perfectă.",
      en: "A massive waterfall in the south, famous for its perfect rectangular shape."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Skógafoss este o cascadă clasică, de o frumusețe copleșitoare, situată pe fosta linie de coastă a Islandei. Apa râului Skógá cade de la o înălțime de 60 de metri pe o lățime de 25 de metri, formând o perdea de apă aproape perfect rectangulară. Puterea cascadei produce o cantitate enormă de ceață, care, în zilele însorite, creează aproape întotdeauna un curcubeu simplu sau dublu, un spectacol vizual de neuitat. O scară cu 527 de trepte urcă pe partea dreaptă a cascadei, oferind o priveliște amețitoare de sus. La baza cascadei, terenul plat permite vizitatorilor să se apropie foarte mult de peretele de apă, simțind puterea sa brută.",
      en: "Skógafoss is a classic waterfall of overwhelming beauty, situated on Iceland's former coastline. The water of the Skógá River drops 60 meters over a 25-meter width, forming an almost perfectly rectangular curtain of water. The power of the falls produces a huge amount of mist, which, on sunny days, almost always creates a single or double rainbow, an unforgettable visual spectacle. A staircase with 527 steps climbs the right side of the waterfall, offering a dizzying view from the top. At the base of the falls, the flat terrain allows visitors to get very close to the wall of water, feeling its raw power."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Conform unei legende locale, primul colonist viking din zonă, Þrasi Þórólfsson, a ascuns o comoară într-o peșteră în spatele cascadei.",
        "Stâncile de pe care cade apa reprezentau odinioară falezele oceanului; de atunci, coasta s-a retras cu aproximativ 5 km.",
        "Skógafoss marchează începutul (sau sfârșitul) faimosului traseu de drumeție Fimmvörðuháls, care duce la Þórsmörk.",
        "Cascada a apărut în filme precum 'Thor: The Dark World' și 'The Secret Life of Walter Mitty'.",
        "Râul Skógá este cunoscut pentru populația sa de somon și păstrăv arctic.",
        "În apropiere se află Muzeul Skógar, unul dintre cele mai bune muzee folclorice din Islanda.",
        "Numele 'Skógafoss' înseamnă 'Cascada Pădurii'.",
        "Solul din jurul cascadei este extrem de fertil datorită umidității constante."
      ],
      en: [
        "According to local legend, the first Viking settler in the area, Þrasi Þórólfsson, hid a treasure in a cave behind the waterfall.",
        "The cliffs from which the water falls were once the sea cliffs; the coastline has since retreated about 5 km.",
        "Skógafoss marks the beginning (or end) of the famous Fimmvörðuháls hiking trail, which leads to Þórsmörk.",
        "The waterfall has appeared in films such as 'Thor: The Dark World' and 'The Secret Life of Walter Mitty'.",
        "The Skógá River is known for its population of salmon and Arctic char.",
        "Nearby is the Skógar Museum, one of the best folk museums in Iceland.",
        "The name 'Skógafoss' means 'Forest Waterfall'.",
        "The soil around the waterfall is extremely fertile due to the constant moisture."
      ]
    }
  },
  {
    id: "nature-seljalandsfoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.9885, 63.6156],
    name: { de: "Seljalandsfoss", hu: "Seljalandsfoss", ro: "Seljalandsfoss", en: "Seljalandsfoss" },
    description: {
      de: "Ein Wasserfall, hinter dem man entlanglaufen kann.",
      hu: "Vízesés, amely mögött el lehet sétálni.",
      ro: "O cascadă în spatele căreia poți merge.",
      en: "A waterfall that you can walk behind."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Seljalandsfoss este una dintre cele mai faimoase și mai fotografiate cascade din Islanda, în special datorită caracteristicii sale unice: o potecă permite vizitatorilor să meargă complet în spatele perdelei de apă. Această experiență oferă o perspectivă total diferită și spectaculoasă asupra cascadei și a peisajului înconjurător. Cascada are o cădere elegantă de 60 de metri de pe o fostă faleză maritimă, apa provenind din topirea ghețarului Eyjafjallajökull. Este deosebit de frumoasă la apus sau la răsărit, când lumina soarelui se filtrează prin perdea de apă. Fiind situată chiar lângă șoseaua principală, este o oprire obligatorie pentru oricine călătorește de-a lungul Coastei de Sud.",
      en: "Seljalandsfoss is one of Iceland's most famous and photographed waterfalls, primarily due to its unique feature: a path that allows visitors to walk completely behind the curtain of water. This experience offers a completely different and spectacular perspective of the waterfall and the surrounding landscape. The waterfall has an elegant 60-meter drop from a former sea cliff, with its water originating from the Eyjafjallajökull glacier-volcano. It is particularly beautiful at sunset or sunrise when the sunlight filters through the water curtain. Located right next to the Ring Road, it is a mandatory stop for anyone traveling along the South Coast."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Poteca din spatele cascadei poate fi foarte alunecoasă și este adesea închisă iarna din cauza formării gheții.",
        "La câteva sute de metri de Seljalandsfoss se află o altă cascadă, Gljúfrabúi ('Locuitorul Canionului'), ascunsă într-o mică peșteră.",
        "Cascada este alimentată de râul Seljalandsá, care își are originea în vulcanul-ghețar Eyjafjallajökull.",
        "În timpul nopților de iarnă senine, cascada este iluminată, creând o imagine feerică, mai ales dacă apare și aurora boreală.",
        "A apărut într-un videoclip al lui Justin Bieber, ceea ce i-a crescut exponențial popularitatea.",
        "Numele 'Seljalandsfoss' se traduce prin 'Cascada Râului Seljaland'.",
        "Face parte dintr-o serie de cascade care se prăbușesc de pe aceeași escarpament, fosta linie de coastă.",
        "Lățimea cascadei este relativ mică, ceea ce îi conferă aspectul său zvelt și elegant."
      ],
      en: [
        "The path behind the waterfall can be very slippery and is often closed in winter due to ice formation.",
        "A few hundred meters from Seljalandsfoss is another waterfall, Gljúfrabúi ('Canyon Dweller'), hidden in a small cave.",
        "The waterfall is fed by the Seljalandsá river, which originates from the Eyjafjallajökull glacier-volcano.",
        "During clear winter nights, the waterfall is illuminated, creating a magical scene, especially if the Northern Lights appear.",
        "It was featured in a Justin Bieber music video, which exponentially increased its popularity.",
        "The name 'Seljalandsfoss' translates to 'Seljaland River's Waterfall'.",
        "It is part of a series of waterfalls that cascade from the same escarpment, the former coastline.",
        "The waterfall's width is relatively narrow, giving it a slender and elegant appearance."
      ]
    }
  },
  {
    id: "nature-reynisdrangar",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.032, 63.402],
    name: { de: "Reynisfjara & Reynisdrangar", hu: "Reynisfjara és Reynisdrangar", ro: "Reynisfjara și Reynisdrangar", en: "Reynisfjara & Reynisdrangar" },
    description: {
      de: "Schwarzer Sandstrand und markante Basaltsäulen im Meer.",
      hu: "Fekete homokos tengerpart és különleges bazaltoszlopok a tengerben.",
      ro: "Plajă cu nisip negru și coloane de bazalt distinctive în mare.",
      en: "Black sand beach and striking basalt sea stacks."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Reynisfjara este cea mai faimoasă plajă cu nisip negru din Islanda, un loc de o frumusețe dramatică și periculoasă. Nisipul său negru, format din rocă vulcanică erodată, creează un contrast izbitor cu spuma albă a valurilor Atlanticului de Nord. Plaja este flancată de o faleză impresionantă de coloane de bazalt hexagonale, numită Hálsanefshellir, care seamănă cu o orgă gigantică. În larg, stâncile ascuțite Reynisdrangar se înalță din mare. Peisajul este completat de arcul Dyrhólaey vizibil în depărtare. Vizitatorii trebuie să fie extrem de precauți, deoarece valurile puternice și imprevizibile ('sneaker waves') pot fi mortale.",
      en: "Reynisfjara is Iceland's most famous black sand beach, a place of dramatic and dangerous beauty. Its black sand, formed from eroded volcanic rock, creates a striking contrast with the white foam of the North Atlantic waves. The beach is flanked by an impressive cliff of hexagonal basalt columns, called Hálsanefshellir, which resembles a giant organ. Offshore, the jagged Reynisdrangar sea stacks rise from the ocean. The landscape is completed by the Dyrhólaey arch visible in the distance. Visitors must be extremely cautious, as the powerful and unpredictable 'sneaker waves' can be deadly."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Legenda spune că stâncile Reynisdrangar sunt troli pietrificați care au fost surprinși de lumina soarelui în timp ce încercau să tragă o navă la țărm.",
        "Coloanele de bazalt s-au format prin răcirea lentă a lavei.",
        "În 1991, National Geographic a votat Reynisfjara ca fiind una dintre cele mai frumoase 10 plaje non-tropicale din lume.",
        "Pe stânci cuibăresc numeroase păsări marine, inclusiv pufini, fulmari și cormorani.",
        "A fost un loc de filmare popular pentru filme și seriale, inclusiv 'Urzeala Tronurilor' (ca 'Eastwatch-by-the-Sea').",
        "Culoarea neagră a nisipului se datorează faptului că este compus în întregime din bazalt erodat.",
        "Valurile 'sneaker waves' sunt deosebit de periculoase deoarece pot apărea brusc, fără avertisment, chiar și în zilele calme.",
        "Satul din apropiere, Vík í Mýrdal, este cea mai sudică așezare de pe insula principală a Islandei."
      ],
      en: [
        "Legend says the Reynisdrangar stacks are petrified trolls who were caught by the sunlight while trying to drag a ship to shore.",
        "The basalt columns were formed by the slow cooling of lava.",
        "In 1991, National Geographic voted Reynisfjara as one of the 10 most beautiful non-tropical beaches in the world.",
        "Numerous seabirds nest on the cliffs, including puffins, fulmars, and guillemots.",
        "It has been a popular filming location for movies and series, including 'Game of Thrones' (as Eastwatch-by-the-Sea).",
        "The black color of the sand is because it is composed entirely of eroded basalt.",
        "The 'sneaker waves' are particularly dangerous as they can appear suddenly without warning, even on calm days.",
        "The nearby village, Vík í Mýrdal, is the southernmost settlement on the Icelandic mainland."
      ]
    }
  },
  {
    id: "nature-landmannalaugar",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.0608, 63.9908],
    name: { de: "Landmannalaugar", hu: "Landmannalaugar", ro: "Landmannalaugar", en: "Landmannalaugar" },
    description: {
      de: "Bunte Rhyolithberge und heiße Quellen im Hochland.",
      hu: "Színes riolit-hegyek és meleg források a felföldön.",
      ro: "Munți de riolit colorați și izvoare termale în zonele muntoase.",
      en: "Colorful rhyolite mountains and hot springs in the Highlands."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Landmannalaugar, situat în Rezervația Naturală Fjallabak din zonele muntoase ale Islandei, este un peisaj suprarealist, renumit pentru munții săi de riolit în culori vibrante. Nuanțele de roșu, roz, verde, albastru și galben auriu se schimbă constant în funcție de lumină, creând o priveliște uluitoare. Această paletă de culori este rezultatul activității vulcanice și a compoziției minerale a rocii. Numele, care se traduce prin 'Băile Oamenilor', provine de la izvoarele geotermale naturale de la marginea câmpului de lavă Laugahraun, unde călătorii se opreau pentru a se relaxa. Landmannalaugar este, de asemenea, punctul de plecare nordic pentru Laugavegur, unul dintre cele mai populare trasee de drumeție din Islanda.",
      en: "Landmannalaugar, located in the Fjallabak Nature Reserve in Iceland's Highlands, is a surreal landscape famous for its vibrant rhyolite mountains. Shades of red, pink, green, blue, and golden yellow constantly shift depending on the light, creating a breathtaking view. This color palette is the result of volcanic activity and the mineral composition of the rock. The name, which translates to 'The People's Pools', comes from the natural geothermal springs at the edge of the Laugahraun lava field, where travelers would stop to relax. Landmannalaugar is also the northern starting point for the Laugavegur, one of Iceland's most popular hiking trails."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Riolitul este o rocă vulcanică bogată în siliciu, care se formează când magma se răcește lent.",
        "Accesul la Landmannalaugar este posibil doar în timpul verii (din iunie până în septembrie) și necesită un vehicul 4x4.",
        "Traseul Laugavegur se întinde pe 55 km de la Landmannalaugar la Þórsmörk.",
        "Câmpul de lavă Laugahraun s-a format în urma unei erupții în jurul anului 1477.",
        "Izvoarele termale naturale permit vizitatorilor să facă baie într-un pârâu cald pe tot parcursul anului, dacă drumul este deschis.",
        "Craterul Ljótipollur ('Balta Urâtă'), aflat în apropiere, este de fapt un lac de crater de un albastru cobalt uimitor.",
        "Zona face parte din sistemul vulcanic Torfajökull.",
        "În ciuda peisajului aparent steril, în zonă cresc diverse plante arctice și alpine rezistente."
      ],
      en: [
        "Rhyolite is a silica-rich volcanic rock that forms when magma cools slowly.",
        "Access to Landmannalaugar is only possible during the summer (from June to September) and requires a 4x4 vehicle.",
        "The Laugavegur trail stretches for 55 km from Landmannalaugar to Þórsmörk.",
        "The Laugahraun lava field was formed in an eruption around the year 1477.",
        "The natural hot springs allow visitors to bathe in a warm stream year-round, if the road is open.",
        "The nearby Ljótipollur ('Ugly Puddle') crater is actually a stunning cobalt-blue crater lake.",
        "The area is part of the Torfajökull volcanic system.",
        "Despite the seemingly barren landscape, various hardy arctic and alpine plants grow in the area."
      ]
    }
  },
  {
    id: "nature-dettifoss",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.3846, 65.8147],
    name: { de: "Dettifoss", hu: "Dettifoss", ro: "Dettifoss", en: "Dettifoss" },
    description: {
      de: "Der leistungsstärkste Wasserfall Europas.",
      hu: "Európa legnagyobb vízhozamú vízesése.",
      ro: "Cea mai puternică cascadă din Europa.",
      en: "The most powerful waterfall in Europe."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Dettifoss este o demonstrație copleșitoare a puterii brute a naturii, fiind considerată cea mai puternică cascadă din Europa în ceea ce privește volumul de apă. Situată în Parcul Național Vatnajökull din nord-estul Islandei, cascada este alimentată de râul glaciar Jökulsá á Fjöllum. Apa, încărcată cu sedimente gri, se prăbușește de la o înălțime de 44 de metri într-un canion magnific, Jökulsárgljúfur. Forța este atât de mare încât solul din jur vibrează, iar zgomotul este asurzitor. Puterea sa imensă și peisajul selenar din jur i-au adus porecla 'Bestia', în contrast cu 'Frumusețea' (cascada Goðafoss). Poate fi vizitată de pe ambele maluri, fiecare oferind o perspectivă diferită.",
      en: "Dettifoss is an overwhelming display of nature's raw power, considered the most powerful waterfall in Europe by water volume. Located in Vatnajökull National Park in Northeast Iceland, the waterfall is fed by the glacial river Jökulsá á Fjöllum. The water, laden with grey sediment, plummets 44 meters into the magnificent Jökulsárgljúfur canyon. The force is so great that the surrounding ground vibrates, and the noise is deafening. Its immense power and the surrounding lunar landscape have earned it the nickname 'The Beast', in contrast to 'The Beauty' (Goðafoss waterfall). It can be visited from both banks, each offering a different perspective."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Debitul mediu este de 193 de metri cubi pe secundă, dar poate crește dramatic în timpul inundațiilor.",
        "Cascada are o lățime de 100 de metri.",
        "Dettifoss a apărut în scena de deschidere a filmului SF 'Prometheus' (2012).",
        "Râul Jökulsá á Fjöllum își are originea în ghețarul Vatnajökull.",
        "La aproximativ 1 km în amonte se află o altă cascadă, Selfoss, iar la 2 km în aval se află Hafragilsfoss.",
        "Malul estic este mai ușor accesibil, cu o infrastructură mai bună, în timp ce malul vestic oferă o priveliște mai apropiată, dar pe un drum mai dificil.",
        "Canionul Jökulsárgljúfur are o lungime de 25 km.",
        "Numele 'Dettifoss' înseamnă 'Cascada care se Prăbușește'."
      ],
      en: [
        "The average flow rate is 193 cubic meters per second, but it can increase dramatically during floods.",
        "The waterfall is 100 meters wide.",
        "Dettifoss was featured in the opening scene of the sci-fi movie 'Prometheus' (2012).",
        "The Jökulsá á Fjöllum river originates from the Vatnajökull glacier.",
        "About 1 km upstream is another waterfall, Selfoss, and 2 km downstream is Hafragilsfoss.",
        "The east bank is more easily accessible with better infrastructure, while the west bank offers a closer view but on a more difficult road.",
        "The Jökulsárgljúfur canyon is 25 km long.",
        "The name 'Dettifoss' means 'The Collapsing Waterfall'."
      ]
    }
  },
  {
    id: "nature-myvatn",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.9961, 65.6039],
    name: { de: "Mývatn", hu: "Mývatn", ro: "Mývatn", en: "Mývatn" },
    description: {
      de: "Ein flacher See im Norden, umgeben von vulkanischen Phänomenen.",
      hu: "Sekély tó északon, vulkáni jelenségekkel körülvéve.",
      ro: "Un lac puțin adânc în nord, înconjurat de fenomene vulcanice.",
      en: "A shallow lake in the north, surrounded by volcanic features."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Mývatn este un lac puțin adânc, dar de o importanță ecologică și geologică extraordinară, situat într-o zonă extrem de activă vulcanic din nordul Islandei. Numele său, 'Lacul Muștelor', provine de la roiurile imense de insecte (care nu înțeapă) ce apar vara și constituie o sursă vitală de hrană pentru păsări. Zona din jurul lacului este un catalog de fenomene vulcanice: pseudocratere (Skútustaðagígar), formate de explozii de abur când lava a curs peste zone umede, formațiuni de lavă bizare (Dimmuborgir), și vulcanul Krafla, cu câmpurile sale de lavă încă fumegânde. Abundența de păsări, în special diverse specii de rațe, face din Mývatn un paradis pentru ornitologi.",
      en: "Mývatn is a shallow lake of extraordinary ecological and geological importance, located in a highly active volcanic area in northern Iceland. Its name, 'Midge Lake', comes from the immense swarms of (non-biting) insects that emerge in summer and provide a vital food source for birds. The area around the lake is a catalog of volcanic phenomena: pseudo-craters (Skútustaðagígar), formed by steam explosions when lava flowed over wetlands; bizarre lava formations (Dimmuborgir); and the Krafla volcano with its still-steaming lava fields. The abundance of birdlife, especially various species of ducks, makes Mývatn a paradise for ornithologists."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Mývatn este al patrulea cel mai mare lac din Islanda, dar are o adâncime medie de doar 2,5 metri.",
        "Zona este renumită pentru că găzduiește mai multe specii de rațe decât oricare alt loc de pe Pământ.",
        "Pseudocraterele de la Skútustaðagígar sunt atât de asemănătoare cu craterele lunare, încât astronauții programului Apollo s-au antrenat aici.",
        "Dimmuborgir ('Cetățile Întunecate') este un câmp de lavă cu stâlpi, peșteri și arcuri neobișnuite.",
        "Băile Naturale Mývatn sunt o alternativă mai mică și mai puțin aglomerată la Laguna Albastră.",
        "Vulcanul Krafla a erupt de 9 ori între 1975 și 1984, creând câmpul de lavă Leirhnjúkshraun.",
        "Lacul și zonele umede din jur sunt protejate ca rezervație naturală din 1974.",
        "Vara, este recomandat să purtați o plasă de protecție pentru față din cauza numărului mare de insecte."
      ],
      en: [
        "Mývatn is the fourth-largest lake in Iceland, but has an average depth of only 2.5 meters.",
        "The area is renowned for hosting more species of ducks than any other place on Earth.",
        "The pseudo-craters at Skútustaðagígar are so similar to lunar craters that Apollo astronauts trained here.",
        "Dimmuborgir ('Dark Castles') is a lava field with unusual pillars, caves, and arches.",
        "The Mývatn Nature Baths are a smaller, less crowded alternative to the Blue Lagoon.",
        "The Krafla volcano erupted 9 times between 1975 and 1984, creating the Leirhnjúkshraun lava field.",
        "The lake and its surrounding wetlands have been protected as a nature reserve since 1974.",
        "In summer, it is recommended to wear a head net because of the large number of midges."
      ]
    }
  },
  {
    id: "nature-snaefellsjokull",
    type: "landmark",
    parent: "IS-006",
    coords: [-23.7766, 64.8081],
    name: { de: "Snæfellsjökull", hu: "Snæfellsjökull", ro: "Snæfellsjökull", en: "Snæfellsjökull" },
    description: {
      de: "Ein vergletscherter Vulkan an der Spitze der Halbinsel Snæfellsnes.",
      hu: "Gleccserrel fedett vulkán a Snæfellsnes-félsziget csúcsán.",
      ro: "Un vulcan acoperit de ghețari în vârful peninsulei Snæfellsnes.",
      en: "A glacier-capped volcano at the tip of the Snæfellsnes Peninsula."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Snæfellsjökull este un stratovulcan magnific, acoperit de un ghețar, care domină vârful peninsulei Snæfellsnes din vestul Islandei. A devenit faimos la nivel mondial ca fiind poarta de intrare în lumea subterană în romanul clasic al lui Jules Verne, 'O călătorie spre centrul Pământului'. Chiar și astăzi, vulcanul este înconjurat de o aură de mister și spiritualitate, unii considerându-l unul dintre punctele energetice ale Pământului. Vulcanul, cu o vechime de 700.000 de ani, nu a mai erupt de la aproximativ anul 200 d.Hr. Întreaga zonă din jurul său este protejată ca Parcul Național Snæfellsjökull, singurul parc național din Islanda care se întinde de la țărmul mării până la vârful unui munte.",
      en: "Snæfellsjökull is a magnificent, glacier-capped stratovolcano that dominates the tip of the Snæfellsnes Peninsula in West Iceland. It gained worldwide fame as the gateway to the subterranean world in Jules Verne's classic novel, 'Journey to the Center of the Earth'. Even today, the volcano is surrounded by an aura of mystery and spirituality, with some considering it one of Earth's energy points. The 700,000-year-old volcano has not erupted since around 200 AD. The entire surrounding area is protected as Snæfellsjökull National Park, the only national park in Iceland that stretches from the seashore to a mountaintop."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Vârful vulcanului atinge o altitudine de 1.446 de metri.",
        "În zilele senine, Snæfellsjökull poate fi văzut de la Reykjavík, aflat la o distanță de peste 120 km.",
        "Parcul Național Snæfellsjökull a fost înființat în 2001.",
        "Peninsula Snæfellsnes este adesea numită 'Islanda în miniatură' datorită diversității peisajelor sale.",
        "În romanul lui Jules Verne, intrarea în lumea subterană se făcea prin craterul vulcanului.",
        "Ghețarul s-a micșorat considerabil în ultimele decenii din cauza schimbărilor climatice.",
        "La poalele vulcanului se află plaje cu nisip negru (Djúpalónssandur) și sate pescărești pitorești (Arnarstapi, Hellnar).",
        "Se crede că ultima erupție a produs câmpul de lavă masiv care acoperă o mare parte din peninsulă."
      ],
      en: [
        "The summit of the volcano reaches an altitude of 1,446 meters.",
        "On clear days, Snæfellsjökull can be seen from Reykjavík, over 120 km away.",
        "Snæfellsjökull National Park was established in 2001.",
        "The Snæfellsnes Peninsula is often called 'Iceland in Miniature' due to its diverse landscapes.",
        "In Jules Verne's novel, the entrance to the subterranean world was through the volcano's crater.",
        "The glacier has shrunk considerably in recent decades due to climate change.",
        "At the foot of the volcano are black sand beaches (Djúpalónssandur) and picturesque fishing villages (Arnarstapi, Hellnar).",
        "The last eruption is believed to have produced the massive lava field that covers much of the peninsula."
      ]
    }
  },
  {
    id: "nature-kirkjufell",
    type: "landmark",
    parent: "IS-006",
    coords: [-23.3113, 64.9417],
    name: { de: "Kirkjufell", hu: "Kirkjufell", ro: "Kirkjufell", en: "Kirkjufell" },
    description: {
      de: "Ein markanter Berg, der oft als der meistfotografierte Berg Islands bezeichnet wird.",
      hu: "Jellegzetes hegy, amelyet gyakran Izland legtöbet fényképezett hegyének neveznek.",
      ro: "Un munte distinctiv, adesea numit cel mai fotografiat munte din Islanda.",
      en: "A distinctively shaped mountain, often called the most photographed mountain in Iceland."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Kirkjufell, situat pe coasta de nord a peninsulei Snæfellsnes, este, fără îndoială, cel mai emblematic și mai fotografiat munte din Islanda. Forma sa conică, aproape perfect simetrică, și poziția sa izolată, ieșind în mare, îl fac instantaneu recunoscut. Numele său înseamnă 'Muntele Bisericii' datorită asemănării cu un acoperiș de biserică. Popularitatea sa a explodat după ce a apărut în serialul 'Urzeala Tronurilor' ca 'muntele în formă de vârf de săgeată'. Imaginea clasică a muntelui este surprinsă de peste drum, cu mica cascadă Kirkjufellsfoss în prim-plan. Deși pare atrăgător, urcarea pe munte este extrem de periculoasă și este recomandată doar alpiniștilor experimentați cu ghid.",
      en: "Kirkjufell, located on the north coast of the Snæfellsnes Peninsula, is arguably the most iconic and most photographed mountain in Iceland. Its conical shape, almost perfectly symmetrical, and its isolated position jutting out into the sea, make it instantly recognizable. Its name means 'Church Mountain' due to its resemblance to a church steeple. Its popularity skyrocketed after it was featured in the 'Game of Thrones' series as the 'Arrowhead Mountain'. The classic image of the mountain is captured from across the road, with the small Kirkjufellsfoss waterfall in the foreground. While it looks appealing, climbing the mountain is extremely dangerous and is only recommended for experienced climbers with a guide."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Kirkjufell are o înălțime de 463 de metri.",
        "Muntele este un 'nunatak', adică un vârf care a rămas deasupra ghețarilor în timpul Erei Glaciare, fiind modelat de aceștia.",
        "Este format din straturi de roci sedimentare și lavă.",
        "În 'Urzeala Tronurilor', apare atât în viziunile lui Bran, cât și în scenele de la nord de Zid.",
        "Orașul din apropiere este Grundarfjörður, un port pescăresc liniștit.",
        "În timpul iernii, este un loc popular pentru a fotografia aurora boreală deasupra muntelui.",
        "Există fosile marine în straturile superioare ale muntelui, dovadă că s-a format sub nivelul mării.",
        "Traseul de urcare este foarte abrupt și a înregistrat mai multe accidente fatale de-a lungul anilor."
      ],
      en: [
        "Kirkjufell stands at a height of 463 meters.",
        "The mountain is a 'nunatak', meaning it was a peak that remained above the glaciers during the Ice Age, being shaped by them.",
        "It is composed of layers of sedimentary rock and lava.",
        "In 'Game of Thrones', it appears in both Bran's visions and in scenes north of the Wall.",
        "The nearby town is Grundarfjörður, a quiet fishing port.",
        "During winter, it is a popular spot to photograph the Northern Lights above the mountain.",
        "Marine fossils are found in the upper layers of the mountain, evidence that it was formed below sea level.",
        "The climbing route is very steep and has recorded several fatal accidents over the years."
      ]
    }
  },
  {
    id: "nature-godafoss",
    type: "landmark",
    parent: "IS-009",
    coords: [-17.5502, 65.6828],
    name: { de: "Goðafoss", hu: "Goðafoss", ro: "Goðafoss", en: "Goðafoss" },
    description: {
      de: "Der 'Wasserfall der Götter', einer der spektakulärsten Wasserfälle Islands.",
      hu: "Az 'istenek vízesése', Izland egyik leglátványosabb vízesése.",
      ro: "„Cascada Zeilor”, una dintre cele mai spectaculoase cascade din Islanda.",
      en: "The 'Waterfall of the Gods', one of Iceland's most spectacular waterfalls."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Goðafoss, 'Cascada Zeilor', este una dintre cele mai frumoase și mai semnificative cascade din punct de vedere istoric din Islanda. Situată în nordul țării, cascada este formată de râul Skjálfandafljót, care cade de la o înălțime de 12 metri peste o formațiune semicirculară de roci, cu o lățime de 30 de metri. Numele său este legat de un eveniment crucial din istoria Islandei: în anul 1000, liderul parlamentului (Alþingi), Þorgeir Ljósvetningagoði, a decis ca Islanda să adopte creștinismul. Legenda spune că, la întoarcerea acasă, el a aruncat simbolic statuile zeilor săi păgâni nordici în cascadă, pecetluind astfel convertirea națiunii.",
      en: "Goðafoss, the 'Waterfall of the Gods', is one of Iceland's most beautiful and historically significant waterfalls. Located in the north of the country, the waterfall is formed by the river Skjálfandafljót, which falls 12 meters over a 30-meter wide semicircular rock formation. Its name is tied to a pivotal event in Icelandic history: in the year 1000, the lawspeaker of the Alþingi, Þorgeir Ljósvetningagoði, decided that Iceland should adopt Christianity. Legend has it that upon returning home, he symbolically threw the statues of his Norse pagan gods into the waterfall, thus sealing the nation's conversion."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Cascada este împărțită în două secțiuni principale de o stâncă mare în mijloc.",
        "Este ușor accesibilă de pe ambele maluri, fiind situată chiar lângă șoseaua principală (Ring Road).",
        "Râul Skjálfandafljót este al patrulea cel mai lung râu din Islanda.",
        "Deși nu este foarte înaltă, frumusețea cascadei constă în forma sa elegantă, de potcoavă, și în volumul mare de apă.",
        "Evenimentul istoric al aruncării idolilor este descris în Íslendingabók (Cartea Islandezilor).",
        "Un vitraliu din biserica Akureyrarkirkja înfățișează scena aruncării idolilor în Goðafoss.",
        "În timpul iernii, gheața formează structuri spectaculoase în jurul cascadei.",
        "Culoarea apei poate varia de la un albastru-verzui clar la un gri-lăptos, în funcție de sedimentele glaciare."
      ],
      en: [
        "The waterfall is divided into two main sections by a large rock in the middle.",
        "It is easily accessible from both banks, located right next to the main Ring Road.",
        "The Skjálfandafljót River is the fourth-longest river in Iceland.",
        "Although not very high, the beauty of the waterfall lies in its elegant horseshoe shape and large volume of water.",
        "The historical event of the idols being thrown is described in the Íslendingabók (The Book of Icelanders).",
        "A stained-glass window in the Akureyrarkirkja church depicts the scene of the idols being thrown into Goðafoss.",
        "During winter, ice forms spectacular structures around the waterfall.",
        "The color of the water can vary from a clear blue-green to a milky gray, depending on glacial sediment."
      ]
    }
  },
  {
    id: "nature-askja",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.75, 65.0333],
    name: { de: "Askja-Vulkan", hu: "Askja-vulkán", ro: "Vulcanul Askja", en: "Askja Volcano" },
    description: {
      de: "Eine riesige Caldera im zentralen Hochland mit einem tiefen See.",
      hu: "Hatalmas kaldera a központi felföldön, mély tóval.",
      ro: "O calderă uriașă în zonele muntoase centrale, cu un lac adânc.",
      en: "A massive caldera in the central Highlands with a deep lake."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Askja este o calderă vulcanică masivă, situată în inima izolată a zonelor muntoase din nordul Islandei. Peisajul său arid și selenar este atât de nepământean, încât astronauții NASA din programul Apollo s-au antrenat aici pentru misiunile lunare. Caldera principală are o suprafață de aproximativ 50 de kilometri pătrați. În interiorul ei se află Lacul Öskjuvatn, al doilea cel mai adânc lac din Islanda, format în urma unei erupții masive în 1875. Lângă acest lac rece și adânc se află craterul mai mic, Víti ('Iadul'), care conține apă geotermală caldă, de un albastru-opac, în care vizitatorii pot face baie. Accesul la Askja este dificil, necesitând un vehicul 4x4 și traversarea unor râuri glaciare.",
      en: "Askja is a massive volcanic caldera located in the isolated heart of the northern Icelandic Highlands. Its arid, lunar landscape is so otherworldly that NASA's Apollo astronauts trained here for their moon missions. The main caldera has an area of about 50 square kilometers. Within it lies Lake Öskjuvatn, Iceland's second-deepest lake, formed in the aftermath of a massive eruption in 1875. Next to this cold, deep lake is the smaller crater, Víti ('Hell'), which contains warm, opaque-blue geothermal water where visitors can bathe. Access to Askja is difficult, requiring a 4x4 vehicle and the crossing of glacial rivers."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Erupția din 1875 a fost atât de puternică, încât cenușa a ajuns până în Suedia și Norvegia, provocând otrăvirea solului în estul Islandei și un val de emigrație.",
        "Lacul Öskjuvatn are o adâncime de aproximativ 220 de metri.",
        "Temperatura apei din craterul Víti este de obicei între 20-30°C, fiind potrivită pentru scăldat.",
        "Doi oameni de știință germani au dispărut în mod misterios pe Lacul Öskjuvatn în 1907, iar soarta lor nu a fost niciodată elucidată.",
        "Askja face parte dintr-un sistem vulcanic care se întinde pe 150 km.",
        "Zona este accesibilă doar în lunile de vară, de obicei de la sfârșitul lui iunie până la începutul lui octombrie.",
        "Peisajul este caracterizat de câmpuri de lavă de tip 'pāhoehoe' și 'ʻaʻā'.",
        "Numele 'Askja' înseamnă 'Cutie' sau 'Casetă' în islandeză, referindu-se la forma calderei."
      ],
      en: [
        "The 1875 eruption was so powerful that ash reached Sweden and Norway, causing soil poisoning in East Iceland and a wave of emigration.",
        "Lake Öskjuvatn has a depth of about 220 meters.",
        "The water temperature in the Víti crater is usually between 20-30°C, suitable for bathing.",
        "Two German scientists mysteriously disappeared on Lake Öskjuvatn in 1907, and their fate has never been explained.",
        "Askja is part of a volcanic system that stretches for 150 km.",
        "The area is only accessible during the summer months, usually from late June to early October.",
        "The landscape is characterized by both 'pāhoehoe' and 'ʻaʻā' lava fields.",
        "The name 'Askja' means 'Box' or 'Casket' in Icelandic, referring to the caldera's shape."
      ]
    }
  },
  {
    id: "nature-husavik",
    type: "landmark",
    parent: "IS-009",
    coords: [-17.3383, 66.0449],
    name: { de: "Húsavík", hu: "Húsavík", ro: "Húsavík", en: "Húsavík" },
    description: {
      de: "Die 'Walbeobachtungshauptstadt Europas' im Norden Islands.",
      hu: "Európa 'bálnaleső fővárosa' Izland északi részén.",
      ro: "„Capitala europeană a observării balenelor” în nordul Islandei.",
      en: "The 'Whale Watching Capital of Europe' in northern Iceland."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Húsavík este un oraș pescăresc fermecător situat pe malul golfului Skjálfandi, care și-a câștigat pe bună dreptate renumele de 'Capitala observării balenelor' din Islanda, și chiar din Europa. Condițiile favorabile din golf atrag o varietate impresionantă de cetacee în timpul lunilor de vară, inclusiv balene cu cocoașă, balene minke, delfini cu bot alb și chiar balene albastre, cel mai mare animal de pe Pământ. Succesul tururilor este excepțional de mare. Orașul în sine este pitoresc, cu un port plin de viață și o biserică din lemn frumoasă. Popularitatea sa a crescut și mai mult după ce a fost prezentat în filmul Netflix 'Eurovision Song Contest: The Story of Fire Saga', care a dus chiar la o campanie locală pentru un premiu Oscar.",
      en: "Húsavík is a charming fishing town on the shores of Skjálfandi Bay, which has rightly earned its reputation as the 'Whale Watching Capital' of Iceland, and even Europe. Favorable conditions in the bay attract an impressive variety of cetaceans during the summer months, including humpback whales, minke whales, white-beaked dolphins, and even blue whales, the largest animal on Earth. The success rate of tours is exceptionally high. The town itself is picturesque, with a lively harbor and a beautiful wooden church. Its popularity grew even more after being featured in the Netflix movie 'Eurovision Song Contest: The Story of Fire Saga', which even led to a local campaign for an Oscar."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Se crede că Húsavík este locul primei așezări din Islanda, fondată de vikingul suedez Garðar Svavarsson în anul 870 d.Hr.",
        "Muzeul Balenelor din Húsavík este unul dintre cele mai cuprinzătoare muzee de acest gen, cu schelete complete de balenă.",
        "Șansele de a vedea balene într-un tur de vară depășesc adesea 98%.",
        "Barul 'Jaja Ding Dong' din filmul Eurovision a fost inspirat de un bar local, iar acum există un bar tematic în oraș.",
        "Băile marine GeoSea, situate pe o faleză deasupra golfului, oferă vederi spectaculoase și folosesc apă de mare încălzită geotermal.",
        "În apropiere se află Muzeul Explorării, care celebrează istoria exploratorilor, de la vikingi la astronauții Apollo.",
        "Biserica din lemn, Húsavíkurkirkja, a fost construită în 1907.",
        "Peste 10 specii diferite de balene și delfini sunt observate în mod regulat în golful Skjálfandi."
      ],
      en: [
        "Húsavík is believed to be the site of the first settlement in Iceland, founded by the Swedish Viking Garðar Svavarsson in 870 AD.",
        "The Húsavík Whale Museum is one of the most comprehensive of its kind, featuring full whale skeletons.",
        "The chances of seeing whales on a summer tour often exceed 98%.",
        "The 'Jaja Ding Dong' bar from the Eurovision movie was inspired by a local bar, and a themed bar now exists in town.",
        "The GeoSea sea baths, located on a cliff above the bay, offer spectacular views and use geothermally heated seawater.",
        "Nearby is the Exploration Museum, which celebrates the history of explorers from Vikings to Apollo astronauts.",
        "The wooden church, Húsavíkurkirkja, was built in 1907.",
        "Over 10 different species of whales and dolphins are regularly spotted in Skjálfandi Bay."
      ]
    }
  },
  {
    id: "nature-dyrholaey",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.1272, 63.3995],
    name: { de: "Dyrhólaey", hu: "Dyrhólaey", ro: "Dyrhólaey", en: "Dyrhólaey" },
    description: {
      de: "Eine markante Landzunge mit einem riesigen natürlichen Felsentor.",
      hu: "Jellegzetes félsziget egy hatalmas, természetes sziklakapuval.",
      ro: "Un promontoriu distinctiv cu o arcadă de piatră naturală uriașă.",
      en: "A striking promontory featuring a massive natural stone arch."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Dyrhólaey, 'insula cu gaura în ușă', este un mic promontoriu de origine vulcanică, renumit pentru arcul său masiv erodat de ocean. Situat lângă satul Vík, este cel mai sudic punct de pe insula principală a Islandei. Peisajul de aici este dramatic, oferind vederi panoramice în toate direcțiile: la nord spre ghețarul Mýrdalsjökull, la est spre stâncile Reynisdrangar și la vest de-a lungul întregii coaste sudice. În timpul verii, Dyrhólaey este un paradis pentru iubitorii de păsări, fiind un important loc de cuibărit pentru mii de pufini. Un far pitoresc, în formă de castel, se află în vârful promontoriului, adăugând la farmecul locului.",
      en: "Dyrhólaey, 'the island with the door hole', is a small promontory of volcanic origin, famous for its massive arch eroded by the ocean. Located near the village of Vík, it is the southernmost point on the Icelandic mainland. The scenery here is dramatic, offering panoramic views in all directions: north to the Mýrdalsjökull glacier, east to the Reynisdrangar sea stacks, and west along the entire south coast. In summer, Dyrhólaey is a paradise for bird lovers, serving as a major nesting site for thousands of puffins. A picturesque, castle-shaped lighthouse sits atop the promontory, adding to the charm of the location."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Arcul are o înălțime de 120 de metri.",
        "În 1993, un pilot cascador a zburat cu un avion mic prin arcadă.",
        "Pufinii cuibăresc aici din mai până la începutul lunii august.",
        "Accesul la anumite părți ale promontoriului este restricționat în timpul sezonului de cuibărit (mai-iunie) pentru a proteja păsările.",
        "Dyrhólaey a fost o insulă separată până când s-a conectat la uscat prin acumularea de sedimente.",
        "Farul actual a fost construit în 1927.",
        "Numele provine din limba nordică veche și se traduce literal prin 'Insula dealului cu ușă'.",
        "Formațiunea este vizibilă de la mulți kilometri distanță de-a lungul coastei."
      ],
      en: [
        "The arch stands 120 meters high.",
        "In 1993, a stunt pilot flew a small plane through the arch.",
        "Puffins nest here from May to early August.",
        "Access to certain parts of the promontory is restricted during the nesting season (May-June) to protect the birds.",
        "Dyrhólaey was a separate island until it connected to the mainland through sediment accumulation.",
        "The current lighthouse was built in 1927.",
        "The name comes from Old Norse and literally translates to 'Door Hill Island'.",
        "The formation is visible from many kilometers away along the coast."
      ]
    }
  },
  {
    id: "nature-hverir",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.8089, 65.6415],
    name: { de: "Hverir", hu: "Hverir", ro: "Hverir", en: "Hverir" },
    description: {
      de: "Ein geothermisches Gebiet mit blubbernden Schlammtöpfen und zischenden Fumarolen.",
      hu: "Geotermikus terület bugyogó iszapmedencékkel és sziszegő fumarolákkal.",
      ro: "O zonă geotermală cu bazine de noroi bolborosind și fumarole șuierătoare.",
      en: "A geothermal area with bubbling mud pools and hissing fumaroles."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Hverir, cunoscut și sub numele de Námaskarð, este un peisaj extraterestru, una dintre cele mai mari și mai active zone geotermale din Islanda. Situat la poalele muntelui Námafjall, în apropiere de Lacul Mývatn, câmpul geotermal este complet lipsit de vegetație din cauza acidității solului și a temperaturilor ridicate. Aici, Pământul este viu: bazine de noroi gri clocotesc, fumarole (guri de abur) șuieră zgomotos eliberând gaze sulfuroase, iar solul este pictat în nuanțe de galben, roșu și verde de la depozitele de minerale. Mirosul puternic de sulf (asemănător cu ouăle clocite) este omniprezent. Poteci marcate permit vizitatorilor să se plimbe în siguranță prin acest peisaj periculos, dar fascinant.",
      en: "Hverir, also known as Námaskarð, is an otherworldly landscape, one of the largest and most active geothermal areas in Iceland. Located at the foot of Námafjall mountain, near Lake Mývatn, the geothermal field is completely devoid of vegetation due to soil acidity and high temperatures. Here, the Earth is alive: gray mud pools boil, fumaroles (steam vents) hiss loudly releasing sulfurous gases, and the ground is painted in shades of yellow, red, and green from mineral deposits. The strong smell of sulfur (like rotten eggs) is pervasive. Marked paths allow visitors to walk safely through this dangerous but fascinating landscape."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Temperaturile la suprafața solului pot atinge 100°C.",
        "Culoarea galbenă intensă provine de la cristalele de sulf.",
        "În trecut, sulful din această zonă era extras și exportat pentru fabricarea prafului de pușcă.",
        "Zona face parte din sistemul vulcanic Krafla.",
        "Este esențial să se respecte potecile marcate, deoarece solul poate fi instabil și extrem de fierbinte.",
        "Aburul eliberat este în principal vapori de apă, dar conține și gaze precum hidrogen sulfurat și dioxid de carbon.",
        "Peisajul este adesea comparat cu cel de pe planeta Marte.",
        "Zgomotul produs de fumarole poate fi surprinzător de puternic."
      ],
      en: [
        "Ground surface temperatures can reach 100°C (212°F).",
        "The intense yellow color comes from sulfur crystals.",
        "In the past, sulfur from this area was mined and exported for gunpowder manufacturing.",
        "The area is part of the Krafla volcanic system.",
        "It is essential to stay on the marked paths, as the ground can be unstable and extremely hot.",
        "The steam released is mostly water vapor but also contains gases like hydrogen sulfide and carbon dioxide.",
        "The landscape is often compared to that of the planet Mars.",
        "The noise produced by the fumaroles can be surprisingly loud."
      ]
    }
  },
  {
    id: "nature-latrabjarg",
    type: "landmark",
    parent: "IS-007",
    coords: [-24.53, 65.5],
    name: { de: "Látrabjarg", hu: "Látrabjarg", ro: "Látrabjarg", en: "Látrabjarg" },
    description: {
      de: "Die westlichste Klippe Europas und eine der größten Vogelklippen der Welt.",
      hu: "Európa legnyugatibb sziklafala, a világ egyik legnagyobb madárfészkelő helye.",
      ro: "Cea mai vestică faleză a Europei și una dintre cele mai mari stânci de păsări din lume.",
      en: "The westernmost point of Europe and one of the world's largest bird cliffs."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Látrabjarg, situată în extremitatea vestică a Fiordurilor de Vest, este o faleză monumentală și un paradis pentru iubitorii de păsări. Întinzându-se pe 14 kilometri și atingând înălțimi de până la 441 de metri, este una dintre cele mai mari stânci cu păsări din Europa. În timpul verii, stâncile găzduiesc milioane de păsări marine, inclusiv cea mai mare colonie de alce nordice din lume. Totuși, atracția principală sunt pufinii. Datorită faptului că sunt protejați și obișnuiți cu prezența umană, pufinii de la Látrabjarg sunt incredibil de docili, permițând fotografilor să se apropie la doar câțiva metri. Pe lângă importanța sa ecologică, Látrabjarg este și cel mai vestic punct al Europei (dacă se exclud Azorele).",
      en: "Látrabjarg, located at the westernmost tip of the Westfjords, is a monumental cliff and a paradise for bird lovers. Stretching for 14 kilometers and reaching heights of up to 441 meters, it is one of the largest bird cliffs in Europe. During the summer, the cliffs host millions of seabirds, including the world's largest colony of razorbills. However, the main attraction is the puffins. Because they are protected and accustomed to human presence, the puffins at Látrabjarg are incredibly tame, allowing photographers to get within just a few meters. Besides its ecological importance, Látrabjarg is also the westernmost point of Europe (excluding the Azores)."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Se estimează că aproximativ 40% din populația mondială de alce nordice cuibărește la Látrabjarg.",
        "Faleza este atât de abruptă, încât marginile superioare sunt acoperite de iarbă și permit mersul în siguranță (cu prudență).",
        "Pe lângă pufini și alce, aici cuibăresc și cormorani, fulmari și alte specii de păsări marine.",
        "Stânca este renumită pentru un incident eroic din 1947, când fermierii locali au coborât pe stânci pentru a salva 12 supraviețuitori ai unui trauler britanic naufragiat.",
        "Cel mai bun moment pentru a vedea pufinii este dimineața devreme sau seara târziu, când se întorc de la pescuit.",
        "Drumul către Látrabjarg este anevoios și neasfaltat în mare parte, dar peisajul merită efortul.",
        "De la farul Bjargtangar, cel mai vestic punct, până în America de Nord sunt aproximativ 2.800 km.",
        "Ouăle de păsări marine de pe stânci au fost o sursă tradițională de hrană pentru localnici."
      ],
      en: [
        "An estimated 40% of the world's razorbill population nests at Látrabjarg.",
        "The cliff is so steep that its upper edges are covered in grass, allowing for safe walking (with caution).",
        "Besides puffins and razorbills, cormorants, fulmars, and other seabird species also nest here.",
        "The cliff is famous for a heroic incident in 1947 when local farmers abseiled down the cliffs to rescue 12 survivors from a shipwrecked British trawler.",
        "The best time to see puffins is early in the morning or late in the evening when they return from fishing.",
        "The road to Látrabjarg is rough and largely unpaved, but the scenery is worth the effort.",
        "From the Bjargtangar lighthouse, the westernmost point, it is approximately 2,800 km to North America.",
        "Seabird eggs from the cliffs were a traditional food source for locals."
      ]
    }
  },
  {
    id: "nature-fjaðrárgljúfur",
    type: "landmark",
    parent: "IS-002",
    coords: [-18.1717, 63.7712],
    name: { de: "Fjaðrárgljúfur", hu: "Fjaðrárgljúfur", ro: "Fjaðrárgljúfur", en: "Fjaðrárgljúfur" },
    description: {
      de: "Ein gewundener und tiefer Canyon im Südosten Islands.",
      hu: "Kanyargós és mély szurdok Izland délkeleti részén.",
      ro: "Un canion șerpuitor și adânc în sud-estul Islandei.",
      en: "A winding and deep canyon in Southeast Iceland."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Fjaðrárgljúfur este un canion magnific și sinuos, sculptat de-a lungul a mii de ani de râul Fjaðrá. Situat în sud-estul Islandei, canionul are o adâncime de până la 100 de metri și o lungime de aproximativ 2 kilometri. Pereții săi abrupți și formațiunile stâncoase neobișnuite creează un peisaj de o frumusețe eterică. O potecă bine întreținută șerpuiește de-a lungul marginii superioare a canionului, oferind puncte de belvedere spectaculoase. Popularitatea canionului a crescut exponențial după ce a apărut într-un videoclip al lui Justin Bieber în 2015, ceea ce a dus la o presiune turistică imensă și la închideri temporare pentru a permite refacerea vegetației fragile.",
      en: "Fjaðrárgljúfur is a magnificent and winding canyon, carved over thousands of years by the Fjaðrá river. Located in Southeast Iceland, the canyon is up to 100 meters deep and about 2 kilometers long. Its steep walls and unusual rock formations create a landscape of ethereal beauty. A well-maintained path winds along the upper edge of the canyon, offering spectacular viewpoints. The canyon's popularity skyrocketed after it was featured in a 2015 Justin Bieber music video, which led to immense tourist pressure and temporary closures to allow the fragile vegetation to recover."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Se crede că canionul s-a format la sfârșitul ultimei Ere Glaciare, acum aproximativ 9.000 de ani.",
        "Eroziunea a fost cauzată de apa provenită din topirea unui lac glaciar.",
        "Numele 'Fjaðrárgljúfur' se traduce prin 'Canionul Râului cu Pene'.",
        "Râul Fjaðrá, care curge prin canion, este relativ mic, ceea ce face ca dimensiunea canionului să fie și mai impresionantă.",
        "Videoclipul piesei 'I'll Show You' de Justin Bieber a fost filmat aici.",
        "Afluxul de turiști a cauzat daune semnificative ecosistemului, forțând autoritățile să implementeze măsuri de protecție.",
        "Este posibil să se meargă prin canion, prin albia râului, în perioadele cu debit scăzut, dar necesită echipament adecvat.",
        "Canionul este situat la o scurtă distanță de șoseaua principală (Ring Road)."
      ],
      en: [
        "The canyon is believed to have formed at the end of the last Ice Age, about 9,000 years ago.",
        "The erosion was caused by water from a melting glacial lake.",
        "The name 'Fjaðrárgljúfur' translates to 'Feather River Canyon'.",
        "The Fjaðrá river, which flows through the canyon, is relatively small, making the canyon's size even more impressive.",
        "The music video for Justin Bieber's 'I'll Show You' was filmed here.",
        "The influx of tourists caused significant damage to the ecosystem, forcing authorities to implement protective measures.",
        "It is possible to walk through the canyon in the riverbed during periods of low water, but it requires appropriate gear.",
        "The canyon is located a short distance from the main Ring Road."
      ]
    }
  },
  {
    id: "nature-viti",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.757, 65.047],
    name: { de: "Víti-Krater", hu: "Víti-kráter", ro: "Craterul Víti", en: "Víti Crater" },
    description: {
      de: "Ein kleinerer Explosionskrater in der Askja-Caldera mit milchig-blauem, warmem Wasser.",
      hu: "Kisebb robbanásos kráter az Askja-kalderában, tejszerű kék, meleg vízzel.",
      ro: "Un crater de explozie mai mic în caldera Askja, cu apă caldă albastru-lăptoasă.",
      en: "A smaller explosion crater in the Askja caldera with milky-blue warm water."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Craterul Víti ('Iadul' în islandeză) este un crater de explozie (maar) situat în interiorul calderei vulcanului Askja, în zonele muntoase ale Islandei. S-a format în timpul erupției cataclismice din 1875. Craterul are un diametru de aproximativ 150 de metri și conține un lac geotermal. Apa sa are o culoare izbitoare, un albastru-opac, datorită conținutului ridicat de siliciu și alte minerale. Temperatura apei variază, dar este adesea între 20 și 30 de grade Celsius, permițând vizitatorilor curajoși să facă o baie memorabilă într-un vulcan activ. Mirosul de sulf este puternic, iar coborârea spre lac poate fi abruptă și alunecoasă.",
      en: "The Víti crater ('Hell' in Icelandic) is an explosion crater (maar) located within the Askja volcano's caldera in the Icelandic Highlands. It was formed during the cataclysmic eruption of 1875. The crater has a diameter of about 150 meters and contains a geothermal lake. Its water has a striking, opaque-blue color due to its high silica and mineral content. The water temperature varies but is often between 20 and 30 degrees Celsius, allowing brave visitors to take a memorable bath in an active volcano. The smell of sulfur is strong, and the descent to the lake can be steep and slippery."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Numele 'Víti' (Iadul) este comun pentru mai multe cratere vulcanice din Islanda, probabil din cauza mirosului de sulf și a activității geotermale.",
        "Adâncimea lacului este de aproximativ 7 metri.",
        "Culoarea apei este uneori comparată cu cea de la Laguna Albastră, deși este complet naturală.",
        "Baia în Víti este o experiență populară, dar se face pe propria răspundere din cauza gazelor vulcanice și a fundului noroios.",
        "Se află chiar lângă Lacul Öskjuvatn, un lac adânc și rece format în aceeași erupție.",
        "Pentru a ajunge la Víti, este necesară o drumeție de aproximativ 45 de minute de la parcare.",
        "Este diferit de un alt crater faimos numit Víti, situat în sistemul vulcanic Krafla.",
        "Zona este complet acoperită de zăpadă timp de aproximativ 9 luni pe an."
      ],
      en: [
        "The name 'Víti' (Hell) is common for several volcanic craters in Iceland, likely due to the smell of sulfur and geothermal activity.",
        "The lake's depth is about 7 meters.",
        "The water's color is sometimes compared to that of the Blue Lagoon, although it is completely natural.",
        "Bathing in Víti is a popular experience but is done at one's own risk due to volcanic gases and a muddy bottom.",
        "It is located right next to Lake Öskjuvatn, a deep, cold lake formed in the same eruption.",
        "To reach Víti, a hike of about 45 minutes from the parking area is required.",
        "It is different from another famous crater named Víti, located in the Krafla volcanic system.",
        "The area is completely covered in snow for about 9 months of the year."
      ]
    }
  },
  {
    id: "nature-hvitserkur",
    type: "landmark",
    parent: "IS-008",
    coords: [-20.6352, 65.6063],
    name: { de: "Hvítserkur", hu: "Hvítserkur", ro: "Hvítserkur", en: "Hvítserkur" },
    description: {
      de: "Ein 15 Meter hoher Basaltfelsen vor der Küste, der wie ein Drache oder ein Elefant aussieht.",
      hu: "15 méter magas bazaltszikla a part közelében, amely sárkányra vagy elefántra emlékeztet.",
      ro: "O stâncă de bazalt înaltă de 15 metri în largul coastei, care arată ca un dragon sau un elefant.",
      en: "A 15-meter high basalt rock offshore that resembles a dragon or an elephant."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Hvítserkur este o stâncă monolitică de bazalt, înaltă de 15 metri, care se ridică din mare pe coasta de est a peninsulei Vatnsnes. Forma sa bizară, cu două găuri la bază, a dat naștere la diverse interpretări, unii văzând un dragon care bea apă, alții un elefant sau un dinozaur. Legenda locală spune că este un trol care a fost pietrificat de razele soarelui în timp ce încerca să distrugă clopotele unei mănăstiri din apropiere. Numele său înseamnă 'Cămașă Albă' și provine de la culoarea dată de guano (excremente de păsări), deoarece stânca este un loc de cuibărit pentru cormorani și fulmari. Baza stâncii a fost întărită cu beton pentru a o proteja de eroziunea constantă a mării.",
      en: "Hvítserkur is a 15-meter high basalt monolith that rises from the sea on the eastern coast of the Vatnsnes Peninsula. Its bizarre shape, with two holes at its base, has given rise to various interpretations, with some seeing a drinking dragon, others an elephant or a dinosaur. Local legend says it is a troll who was petrified by the sun's rays while trying to destroy the bells of a nearby convent. Its name means 'White Shirt' and comes from the color given by guano (bird droppings), as the rock is a nesting site for cormorants and fulmars. The base of the rock has been reinforced with concrete to protect it from constant sea erosion."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Hvítserkur este de fapt rămășița erodată a unui coș vulcanic.",
        "La reflux, este posibil să se meargă pe jos până la baza stâncii.",
        "Peninsula Vatnsnes este una dintre cele mai bune locații din Islanda pentru a observa foci.",
        "Stânca este un subiect extrem de popular pentru fotografi, mai ales la răsărit și apus, sau când apare aurora boreală.",
        "Cele două găuri de la bază au fost create de valurile care au erodat roca.",
        "Face parte din 'Arctic Coast Way', un traseu turistic care explorează nordul Islandei.",
        "În apropiere se află fortăreața Borgarvirki, o altă formațiune vulcanică despre care se crede că a fost folosită ca fortăreață în epoca vikingă.",
        "Culoarea stâncii se schimbă constant în funcție de lumină și de prezența păsărilor."
      ],
      en: [
        "Hvítserkur is actually the eroded remnant of a volcanic plug.",
        "At low tide, it is possible to walk to the base of the rock.",
        "The Vatnsnes Peninsula is one of the best locations in Iceland for seal watching.",
        "The rock is an extremely popular subject for photographers, especially at sunrise and sunset, or when the Northern Lights appear.",
        "The two holes at the base were created by the waves eroding the rock.",
        "It is part of the 'Arctic Coast Way', a tourist route exploring North Iceland.",
        "Nearby is the Borgarvirki fortress, another volcanic formation believed to have been used as a fortress in the Viking Age.",
        "The color of the rock constantly changes depending on the light and the presence of birds."
      ]
    }
  },
  {
    id: "nature-perlan",
    type: "landmark",
    parent: "IS-005",
    coords: [-21.9189, 64.1294],
    name: { de: "Perlan", hu: "Perlan", ro: "Perlan", en: "Perlan" },
    description: {
      de: "Ein markantes Gebäude in Reykjavík mit einer Glaskuppel, das auf Warmwasserspeichern errichtet wurde.",
      hu: "Jellegzetes üvegkupolás épület Reykjavíkban, amely melegvíz-tározókra épült.",
      ro: "O clădire distinctivă din Reykjavík cu o cupolă de sticlă, construită pe rezervoare de apă caldă.",
      en: "A landmark building in Reykjavík with a glass dome, built on top of hot water storage tanks."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Perlan ('Perla') este una dintre cele mai emblematice clădiri din Reykjavík, o structură unică situată pe dealul Öskjuhlíð. Clădirea constă dintr-un dom gigantic de sticlă așezat pe șase rezervoare uriașe de apă caldă, care în trecut stocau apa geotermală pentru oraș. Astăzi, Perlan a fost transformată într-un centru cultural și expozițional spectaculos. Găzduiește expoziții interactive despre minunile naturale ale Islandei, inclusiv o replică realistă a unei peșteri de gheață și un planetariu de ultimă generație. Platforma de observație de la 360 de grade, situată la etajul patru, oferă unele dintre cele mai bune vederi panoramice asupra orașului Reykjavík, a oceanului și a munților din jur.",
      en: "Perlan ('The Pearl') is one of Reykjavík's most iconic buildings, a unique structure located on Öskjuhlíð hill. The building consists of a giant glass dome placed on top of six huge hot water storage tanks that once stored the city's geothermal water. Today, Perlan has been transformed into a spectacular cultural and exhibition center. It hosts interactive exhibits on Iceland's natural wonders, including a realistic replica of an ice cave and a state-of-the-art planetarium. The 360-degree observation deck on the fourth floor offers some of the best panoramic views of Reykjavík, the ocean, and the surrounding mountains."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Cele șase rezervoare pot stoca până la 24 de milioane de litri de apă caldă.",
        "Peștera de gheață artificială are o lungime de 100 de metri și este făcută din peste 350 de tone de zăpadă și gheață.",
        "Planetariul prezintă un spectacol imersiv despre aurora boreală.",
        "La etajul superior se află un restaurant rotativ, care oferă o masă cu vederi în continuă schimbare.",
        "Clădirea a fost proiectată de arhitectul Ingimundur Sveinsson și a fost deschisă în 1991.",
        "Noaptea, domul este iluminat și poate fi văzut din tot orașul.",
        "Dealul Öskjuhlíð, pe care se află Perlan, este o zonă de agrement populară, cu păduri plantate și trasee de mers pe jos.",
        "Unul dintre rezervoare a fost golit și găzduiește acum diverse expoziții."
      ],
      en: [
        "The six tanks can store up to 24 million liters of hot water.",
        "The artificial ice cave is 100 meters long and made from over 350 tons of snow and ice.",
        "The planetarium presents an immersive show about the Northern Lights.",
        "There is a rotating restaurant on the top floor, offering a meal with ever-changing views.",
        "The building was designed by architect Ingimundur Sveinsson and opened in 1991.",
        "At night, the dome is illuminated and can be seen from all over the city.",
        "Öskjuhlíð hill, where Perlan is located, is a popular recreational area with planted forests and walking paths.",
        "One of the tanks has been emptied and now houses various exhibitions."
      ]
    }
  }
];

export const icelandHistorical: POI[] = [
  {
    id: "hist-althingi",
    type: "historical",
    parent: "IS-002",
    coords: [-21.129, 64.256],
    name: { de: "Lögberg (Gesetzesberg)", hu: "Lögberg (Törvényszikla)", ro: "Lögberg", en: "Lögberg (Law Rock)" },
    description: {
      de: "Der historische Ort in Þingvellir, an dem das isländische Parlament (Althingi) zusammenkam.",
      hu: "A Þingvellirben található történelmi helyszín, ahol az izlandi parlament (Althingi) ülésezett.",
      ro: "Locul istoric din Þingvellir unde se aduna parlamentul islandez (Althingi).",
      en: "The historic site in Þingvellir where the Icelandic parliament (Althingi) met."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Lögberg, sau 'Stânca Legii', este nucleul istoric al Parcului Național Þingvellir și unul dintre cele mai sacre locuri pentru națiunea islandeză. Acesta era punctul exact unde, începând cu anul 930 d.Hr., se aduna Alþingi, adunarea națională a vikingilor. De pe această stâncă, 'lögsögumaður' (Vorbitorul Legii) recita legile țării în fața tuturor șefilor de clan adunați. Era centrul legislativ și judiciar al Commonwealth-ului Islandez timp de peste 300 de ani. Deși locația exactă a Lögberg este încă dezbătută de istorici, se crede că era o proeminență stâncoasă în defileul Almannagjá. Astăzi, un steag islandez marchează zona prezumată, simbolizând nașterea democrației islandeze.",
      en: "Lögberg, or 'Law Rock', is the historical heart of Þingvellir National Park and one of the most sacred sites for the Icelandic nation. This was the exact spot where, starting in 930 AD, the Alþingi, the national assembly of the Vikings, would convene. From this rock, the 'lögsögumaður' (Law-speaker) would recite the country's laws to all the gathered chieftains. It was the legislative and judicial center of the Icelandic Commonwealth for over 300 years. Although the exact location of Lögberg is still debated by historians, it is believed to have been a rocky outcrop in the Almannagjá gorge. Today, an Icelandic flag marks the presumed area, symbolizing the birth of Icelandic democracy."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Vorbitorul Legii era singurul 'angajat' plătit al Commonwealth-ului și trebuia să recite o treime din legile țării în fiecare an, din memorie.",
        "Toți oamenii liberi aveau dreptul de a participa la adunare.",
        "Aici a fost luată decizia de a adopta creștinismul ca religie oficială în anul 1000.",
        "Adunările Alþingi s-au ținut la Þingvellir până în 1798.",
        "Locul nu avea clădiri permanente; participanții locuiau în tabere temporare (búðir) în timpul adunării anuale de două săptămâni.",
        "Proclamarea independenței Republicii Islanda în 1944 a avut loc tot la Þingvellir, pentru a onora acest loc istoric.",
        "Lögberg oferea o acustică naturală excelentă, permițând vorbitorului să fie auzit de mulțime.",
        "Pe lângă funcțiile legislative, Alþingi era și un important eveniment social, unde se aranjau căsătorii și se schimbau știri."
      ],
      en: [
        "The Law-speaker was the only paid 'employee' of the Commonwealth and had to recite one-third of the country's laws each year from memory.",
        "All free men had the right to attend the assembly.",
        "The decision to adopt Christianity as the official religion was made here in the year 1000.",
        "The Alþingi assemblies were held at Þingvellir until 1798.",
        "The site had no permanent buildings; participants lived in temporary camps (búðir) during the annual two-week assembly.",
        "The proclamation of the independence of the Republic of Iceland in 1944 also took place at Þingvellir to honor this historic site.",
        "Lögberg offered excellent natural acoustics, allowing the speaker to be heard by the crowd.",
        "Besides its legislative functions, the Alþingi was also an important social event where marriages were arranged and news was exchanged."
      ]
    }
  },
  {
    id: "hist-skalholt",
    type: "historical",
    parent: "IS-002",
    coords: [-20.5255, 64.1259],
    name: { de: "Skálholt", hu: "Skálholt", ro: "Skálholt", en: "Skálholt" },
    description: {
      de: "Über Jahrhunderte einer der wichtigsten geistigen und kulturellen Orte Islands.",
      hu: "Évszázadokon át Izland egyik legfontosabb szellemi és kulturális központja.",
      ro: "Unul dintre cele mai importante locuri spirituale și culturale din Islanda timp de secole.",
      en: "One of the most significant spiritual and cultural sites in Iceland for centuries."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Skálholt a fost, timp de peste 700 de ani, capitala religioasă, culturală și politică a Islandei. În 1056, a devenit sediul primului episcopat al țării, transformându-se într-un centru de putere și învățătură care a rivalizat doar cu Hólar din nord. Aici a fost înființată prima școală oficială din Islanda, iar Scriptorium-ul de la Skálholt a fost responsabil pentru scrierea și copierea multor saga și manuscrise importante. De-a lungul secolelor, au existat mai multe biserici pe acest loc, cea mai mare fiind o catedrală medievală din lemn. După Reformă, Skálholt a rămas un centru luteran important. Astăzi, pe sit se înalță o catedrală modernă, inaugurată în 1963, care servește ca centru cultural și spiritual, găzduind concerte și evenimente.",
      en: "For over 700 years, Skálholt was the religious, cultural, and political capital of Iceland. In 1056, it became the seat of the country's first bishopric, transforming into a center of power and learning that rivaled only Hólar in the north. Iceland's first official school was established here, and the Skálholt Scriptorium was responsible for writing and copying many important sagas and manuscripts. Over the centuries, several churches stood on this site, the largest being a medieval wooden cathedral. After the Reformation, Skálholt remained an important Lutheran center. Today, a modern cathedral, inaugurated in 1963, stands on the site, serving as a cultural and spiritual center hosting concerts and events."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Primul episcop de Skálholt, Ísleifur Gissurarson, a fost numit în 1056.",
        "Jón Arason, ultimul episcop catolic al Islandei, a fost executat aici împreună cu fiii săi în 1550, marcând victoria finală a Reformei Protestante.",
        "Catedrala actuală este a zecea biserică construită pe acest sit.",
        "Săpăturile arheologice au scos la iveală un sarcofag de piatră care se crede că a aparținut unui episcop din secolul al XIII-lea, Páll Jónsson.",
        "Mozaicul mare din spatele altarului, creat de artista Nína Tryggvadóttir, îl înfățișează pe Hristos.",
        "În fiecare vară, Skálholt găzduiește un festival renumit de muzică clasică.",
        "O copie a primei Biblii tipărite în întregime în islandeză, Biblia Guðbrandur din 1584, este expusă aici.",
        "Declinul importanței Skálholtului a început după o serie de dezastre naturale la sfârșitul secolului al XVIII-lea."
      ],
      en: [
        "The first bishop of Skálholt, Ísleifur Gissurarson, was appointed in 1056.",
        "Jón Arason, the last Catholic bishop of Iceland, was executed here with his sons in 1550, marking the final victory of the Protestant Reformation.",
        "The current cathedral is the tenth church built on this site.",
        "Archaeological excavations have unearthed a stone sarcophagus believed to have belonged to a 13th-century bishop, Páll Jónsson.",
        "The large mosaic behind the altar, created by artist Nína Tryggvadóttir, depicts Christ.",
        "Every summer, Skálholt hosts a renowned classical music festival.",
        "A copy of the first complete Bible printed in Icelandic, the Guðbrandur's Bible of 1584, is on display here.",
        "Skálholt's decline in importance began after a series of natural disasters in the late 18th century."
      ]
    }
  },
  {
    id: "hist-hofsstadir",
    type: "historical",
    parent: "IS-009",
    coords: [-17.15, 65.6],
    name: { de: "Hofstaðir", hu: "Hofstaðir", ro: "Hofstaðir", en: "Hofstaðir" },
    description: {
      de: "Bedeutende archäologische Ausgrabungsstätte eines Wikinger-Langhauses.",
      hu: "Fontos régészeti lelőhely egy viking hosszúház maradványaival.",
      ro: "Situl arheologic important al unei case lungi vikinge.",
      en: "A significant archaeological site of a Viking Age longhouse."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Hofstaðir, situat în apropierea lacului Mývatn, este unul dintre cele mai importante situri arheologice din Epoca Vikingă din Islanda. Aici au fost excavate ruinele uneia dintre cele mai mari case lungi (longhouse) descoperite vreodată în țară. Casa avea o lungime de peste 40 de metri și o sală de ospețe excepțional de mare. Descoperirile, inclusiv un număr mare de cranii de vite, sugerează că Hofstaðir nu era doar o fermă, ci și un important centru comunitar și religios, unde aveau loc mari ospețe sezoniere, posibil de natură păgână. Situl oferă o perspectivă valoroasă asupra vieții sociale și a practicilor rituale ale primilor coloniști islandezi. Astăzi, conturul casei este marcat pe teren, permițând vizitatorilor să-și imagineze dimensiunea sa impresionantă.",
      en: "Hofstaðir, located near Lake Mývatn, is one of the most important Viking Age archaeological sites in Iceland. The ruins of one of the largest longhouses ever discovered in the country have been excavated here. The house was over 40 meters long and had an exceptionally large feasting hall. Discoveries, including a large number of cattle skulls, suggest that Hofstaðir was not just a farm, but also an important community and religious center where large seasonal feasts, possibly of a pagan nature, took place. The site offers valuable insight into the social life and ritual practices of the first Icelandic settlers. Today, the outline of the house is marked on the ground, allowing visitors to imagine its impressive size."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Situl a fost locuit pentru prima dată în secolul al X-lea.",
        "A fost abandonat în mod neobișnuit în secolul al XI-lea, relativ curând după colonizare.",
        "Săpăturile au început la începutul secolului XX și au fost reluate în anii 1990.",
        "S-au găsit dovezi ale prelucrării fierului la scară largă.",
        "Lipsa obiectelor de uz casnic sugerează că funcția sa principală era una publică, nu domestică.",
        "Se crede că aici se țineau sărbători (blót) în cinstea zeilor nordici.",
        "Amplasarea sa strategică lângă Mývatn, o zonă bogată în resurse, subliniază importanța sa.",
        "Un pavilion modern de vizitare oferă informații despre descoperirile arheologice."
      ],
      en: [
        "The site was first inhabited in the 10th century.",
        "It was unusually abandoned in the 11th century, relatively soon after settlement.",
        "Excavations began in the early 20th century and were resumed in the 1990s.",
        "Evidence of large-scale iron processing has been found.",
        "The lack of household items suggests that its primary function was public, not domestic.",
        "It is believed that feasts (blót) in honor of the Norse gods were held here.",
        "Its strategic location near Mývatn, a resource-rich area, underscores its importance.",
        "A modern visitor pavilion provides information about the archaeological findings."
      ]
    }
  },
  {
    id: "hist-glaumbaer",
    type: "historical",
    parent: "IS-008",
    coords: [-19.505, 65.61],
    name: { de: "Glaumbær", hu: "Glaumbær", ro: "Glaumbær", en: "Glaumbær" },
    description: {
      de: "Ein gut erhaltenes Ensemble aus traditionellen isländischen Torfhäusern.",
      hu: "Jól megőrzött hagyományos izlandi tőzegmohás házak együttese.",
      ro: "Un ansamblu bine conservat de case tradiționale islandeze din turbă.",
      en: "A well-preserved ensemble of traditional Icelandic turf houses."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Muzeul Fermei de la Glaumbær, din regiunea Skagafjörður, oferă o imagine autentică și fascinantă a vieții rurale din Islanda secolelor trecute. Complexul este format dintr-un ansamblu de 13 case de turbă, interconectate printr-un coridor central. Această metodă de construcție, folosind piatră, lemn și blocuri de turbă (gazon), oferea o izolație excelentă împotriva climei aspre. Fiecare cameră avea un scop specific: bucătărie, cămară, dormitoare comune (baðstofa) etc. Clădirile actuale datează din secolul al XVIII-lea și al XIX-lea, dar locul a fost locuit încă din Epoca Colonizării. Vizitând Glaumbær, pășești înapoi în timp, înțelegând cum trăiau, munceau și supraviețuiau islandezii de rând.",
      en: "The Glaumbær Farm Museum in the Skagafjörður region offers an authentic and fascinating glimpse into rural life in past centuries in Iceland. The complex consists of an ensemble of 13 turf houses, interconnected by a central corridor. This construction method, using stone, wood, and blocks of turf (sod), provided excellent insulation against the harsh climate. Each room had a specific purpose: kitchen, pantry, common sleeping quarters (baðstofa), etc. The current buildings date from the 18th and 19th centuries, but the site has been inhabited since the Age of Settlement. Visiting Glaumbær is like stepping back in time, understanding how ordinary Icelanders lived, worked, and survived."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Ferma a fost locuită continuu până în 1947, când a devenit muzeu.",
        "Baðstofa era camera principală, unde familia dormea, mânca și lucra la diverse meșteșuguri în timpul iernilor lungi.",
        "Acoperișurile din turbă necesitau întreținere constantă.",
        "Se crede că Snorri Þorfinnsson, primul european născut în America (în Vinland), a locuit la Glaumbær în secolul al XI-lea.",
        "Muzeul face parte din Muzeul Național al Islandei.",
        "Pe lângă ferma de turbă, situl include și două case din lemn din secolul al XIX-lea și o ceainărie.",
        "Construcția de case din turbă a fost o practică comună în Islanda până la începutul secolului XX.",
        "Fiecare casă din complex a fost adăugată într-o perioadă diferită, reflectând evoluția fermei."
      ],
      en: [
        "The farm was continuously inhabited until 1947, when it became a museum.",
        "The 'baðstofa' was the main room where the family slept, ate, and worked on various crafts during the long winters.",
        "The turf roofs required constant maintenance.",
        "It is believed that Snorri Þorfinnsson, the first European born in America (in Vinland), lived at Glaumbær in the 11th century.",
        "The museum is part of the National Museum of Iceland.",
        "Besides the turf farm, the site also includes two 19th-century wooden houses and a tea room.",
        "Turf house construction was a common practice in Iceland until the early 20th century.",
        "Each house in the complex was added at a different time, reflecting the farm's evolution."
      ]
    }
  },
  {
    id: "hist-videy",
    type: "historical",
    parent: "IS-005",
    coords: [-21.85, 64.16],
    name: { de: "Insel Viðey", hu: "Viðey-sziget", ro: "Insula Viðey", en: "Viðey Island" },
    description: {
      de: "Eine historische Insel vor der Küste von Reykjavík, bekannt für Kunst und Geschichte.",
      hu: "Történelmi sziget Reykjavík partjainál, művészetéről és történelméről ismert.",
      ro: "O insulă istorică în largul coastei Reykjavík, cunoscută pentru artă și istorie.",
      en: "A historic island off the coast of Reykjavík, known for its art and history."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Insula Viðey, situată la doar o scurtă călătorie cu feribotul de Reykjavík, este o oază de liniște, istorie și artă. Pe insulă se află Viðeyjarstofa, una dintre cele mai vechi clădiri din piatră din Islanda, construită în secolul al XVIII-lea pentru Skúli Magnússon, 'Părintele Reykjavíkului'. Tot aici se găsește și o mică biserică, una dintre cele mai vechi din țară. În timpurile moderne, Viðey a devenit faimoasă pentru operele de artă contemporană. Cea mai cunoscută este 'Imagine Peace Tower', o instalație luminoasă creată de Yoko Ono în memoria lui John Lennon, care proiectează o coloană de lumină pe cer în fiecare an, între 9 octombrie și 8 decembrie. Insula este, de asemenea, un loc popular pentru plimbări, ciclism și observarea păsărilor.",
      en: "Viðey Island, just a short ferry ride from Reykjavík, is an oasis of tranquility, history, and art. The island is home to Viðeyjarstofa, one of Iceland's oldest stone buildings, constructed in the 18th century for Skúli Magnússon, the 'Father of Reykjavík'. A small church, one of the oldest in the country, is also located here. In modern times, Viðey has become famous for its contemporary artworks. The most well-known is the 'Imagine Peace Tower', a light installation created by Yoko Ono in memory of John Lennon, which projects a column of light into the sky each year between October 9th and December 8th. The island is also a popular spot for walking, cycling, and bird watching."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Viðeyjarstofa, finalizată în 1755, a fost reședința primului trezorier islandez.",
        "Turnul 'Imagine Peace' este format din 15 reflectoare care proiectează lumină de la o bază pe care sunt inscripționate cuvintele 'Imagine Peace' în 24 de limbi.",
        "Pe insulă se află și 'Milestones', o operă de artă a sculptorului Richard Serra.",
        "Viðey a găzduit o mănăstire augustiniană din 1225 până la Reformă, în secolul al XVI-lea.",
        "Insula are o suprafață de 1,7 kilometri pătrați.",
        "Nu există locuitori permanenți pe insulă.",
        "Feriboturile operează regulat din portul Skarfabakki din Reykjavík.",
        "Peste 30 de specii de păsări au fost observate cuibărind pe Viðey."
      ],
      en: [
        "Viðeyjarstofa, completed in 1755, was the residence of the first Icelandic treasurer.",
        "The 'Imagine Peace Tower' consists of 15 searchlights that project light from a base inscribed with the words 'Imagine Peace' in 24 languages.",
        "The island also features 'Milestones', a work of art by sculptor Richard Serra.",
        "Viðey hosted an Augustinian monastery from 1225 until the Reformation in the 16th century.",
        "The island has an area of 1.7 square kilometers.",
        "There are no permanent residents on the island.",
        "Ferries operate regularly from the Skarfabakki port in Reykjavík.",
        "Over 30 species of birds have been observed nesting on Viðey."
      ]
    }
  }
];

export const icelandCulture: POI[] = [
  {
    id: "cult-hallgrimskirkja",
    type: "landmark",
    parent: "IS-004",
    coords: [-21.9266, 64.1417],
    name: { de: "Hallgrímskirkja", hu: "Hallgrímskirkja", ro: "Hallgrímskirkja", en: "Hallgrímskirkja" },
    description: {
      de: "Die markante Kirche in Reykjavík, deren Design an Basaltsäulen erinnert.",
      hu: "Reykjavík jellegzetes temploma, amelynek kialakítása bazaltoszlopokra emlékeztet.",
      ro: "Biserica distinctivă din Reykjavík, al cărei design amintește de coloanele de bazalt.",
      en: "Reykjavík's landmark church, designed to resemble basalt lava columns."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Hallgrímskirkja este cea mai înaltă și mai recunoscută clădire din Reykjavík, un simbol iconic al capitalei islandeze. Această biserică luterană, cu designul său expresionist unic, domină orizontul orașului. Arhitectura sa, creată de Guðjón Samúelsson, este inspirată de formele naturale ale Islandei, în special de coloanele de bazalt care se formează la răcirea lavei. Construcția a durat 41 de ani, din 1945 până în 1986. Turnul înalt de 74,5 metri oferă o platformă de observație cu vederi panoramice de neegalat asupra orașului și a împrejurimilor. Interiorul este sobru, dar impresionant, dominat de o orgă gigantică cu 5.275 de tuburi. În fața bisericii se află o statuie a exploratorului viking Leif Erikson.",
      en: "Hallgrímskirkja is the tallest and most recognizable building in Reykjavík, an iconic symbol of the Icelandic capital. This Lutheran church, with its unique expressionist design, dominates the city's skyline. Its architecture, created by Guðjón Samúelsson, is inspired by Iceland's natural forms, particularly the basalt columns that form when lava cools. Construction took 41 years, from 1945 to 1986. The 74.5-meter high tower offers an observation deck with unparalleled panoramic views of the city and its surroundings. The interior is sober but impressive, dominated by a gigantic organ with 5,275 pipes. In front of the church stands a statue of the Viking explorer Leif Erikson."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Este numită după Hallgrímur Pétursson, un cleric și poet islandez din secolul al XVII-lea.",
        "Designul a fost foarte controversat la vremea sa, fiind considerat un amestec de stiluri.",
        "Este cea mai mare biserică din Islanda, cu o capacitate de 1.200 de locuri.",
        "Liftul duce vizitatorii până în vârful turnului pentru o vedere de 360 de grade.",
        "Statuia lui Leif Erikson a fost un cadou din partea Statelor Unite în 1930, pentru a comemora 1000 de ani de la fondarea parlamentului Alþingi.",
        "Orga, construită în Germania, a fost inaugurată în 1992.",
        "Biserica este încă o parohie activă și găzduiește regulat concerte și evenimente culturale.",
        "Este vizibilă din aproape orice punct al orașului."
      ],
      en: [
        "It is named after Hallgrímur Pétursson, a 17th-century Icelandic clergyman and poet.",
        "The design was highly controversial at the time, considered a blend of styles.",
        "It is the largest church in Iceland, with a seating capacity of 1,200.",
        "An elevator takes visitors to the top of the tower for a 360-degree view.",
        "The statue of Leif Erikson was a gift from the United States in 1930 to commemorate the 1000th anniversary of the Alþingi parliament.",
        "The organ, built in Germany, was inaugurated in 1992.",
        "The church is still an active parish and regularly hosts concerts and cultural events.",
        "It is visible from almost every point in the city."
      ]
    }
  },
  {
    id: "cult-harpa",
    type: "landmark",
    parent: "IS-004",
    coords: [-21.9325, 64.1504],
    name: { de: "Harpa Konzerthaus", hu: "Harpa Koncertterem", ro: "Harpa", en: "Harpa Concert Hall" },
    description: {
      de: "Ein modernes Konzerthaus und Konferenzzentrum am Hafen von Reykjavík.",
      hu: "Modern koncertterem és konferenciaközpont Reykjavík kikötőjében.",
      ro: "O sală de concerte modernă și un centru de conferințe în portul Reykjavík.",
      en: "A modern concert hall and conference center at Reykjavík's old harbor."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Harpa este o bijuterie arhitecturală modernă, o sală de concerte și un centru de conferințe situat în portul vechi din Reykjavík. Inaugurată în 2011, clădirea a devenit rapid un simbol al renașterii culturale a Islandei după criza financiară din 2008. Fațada sa spectaculoasă, proiectată de artistul Ólafur Elíasson, este compusă din mii de panouri de sticlă geometrice, care reflectă lumina și peisajul înconjurător, amintind de coloanele de bazalt și de aurora boreală. Interiorul este la fel de impresionant, cu patru săli de spectacol, fiecare cu un design și o acustică distinctă. Harpa este reședința Orchestrei Simfonice a Islandei și a Operei Islandeze, găzduind o gamă largă de evenimente, de la concerte de muzică clasică la festivaluri rock.",
      en: "Harpa is a modern architectural jewel, a concert hall and conference center located in Reykjavík's old harbor. Inaugurated in 2011, the building quickly became a symbol of Iceland's cultural rebirth after the 2008 financial crisis. Its spectacular facade, designed by artist Ólafur Elíasson, is composed of thousands of geometric glass panels that reflect light and the surrounding landscape, reminiscent of basalt columns and the Northern Lights. The interior is just as impressive, with four performance halls, each with a distinct design and acoustics. Harpa is the home of the Iceland Symphony Orchestra and the Icelandic Opera, hosting a wide range of events, from classical music concerts to rock festivals."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A câștigat Premiul Mies van der Rohe al Uniunii Europene pentru Arhitectură Contemporană în 2013.",
        "Construcția clădirii a fost oprită în timpul crizei financiare din 2008, dar guvernul a decis să finalizeze proiectul ca un simbol al speranței.",
        "Numele 'Harpa' are o dublă semnificație: este un instrument muzical și, în vechea limbă nordică, se referă la o perioadă a primăverii.",
        "Fațada conține și panouri LED, care permit crearea unor spectacole de lumină dinamice pe timpul nopții.",
        "Sala principală de concerte, Eldborg ('Fortăreața de Foc'), este renumită pentru acustica sa de clasă mondială.",
        "Clădirea este deschisă publicului, permițând vizitatorilor să exploreze arhitectura sa chiar dacă nu participă la un concert.",
        "A apărut în diverse filme și seriale TV, inclusiv în episodul 'Black Museum' din 'Black Mirror'.",
        "Designul fațadei a fost inspirat de un concept numit 'quasi-brick', dezvoltat de Einar Thorsteinn."
      ],
      en: [
        "It won the European Union's Mies van der Rohe Award for Contemporary Architecture in 2013.",
        "The building's construction was halted during the 2008 financial crisis, but the government decided to complete the project as a symbol of hope.",
        "The name 'Harpa' has a dual meaning: it is a musical instrument and, in Old Norse, refers to a period of spring.",
        "The facade also contains LED panels, allowing for dynamic light shows at night.",
        "The main concert hall, Eldborg ('Fire Fortress'), is renowned for its world-class acoustics.",
        "The building is open to the public, allowing visitors to explore its architecture even if not attending a concert.",
        "It has appeared in various films and TV series, including the 'Black Museum' episode of 'Black Mirror'.",
        "The facade's design was inspired by a concept called 'quasi-brick', developed by Einar Thorsteinn."
      ]
    }
  },
  {
    id: "cult-blue-lagoon",
    type: "landmark",
    parent: "IS-003",
    coords: [-22.4497, 63.8804],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein Geothermalbad auf der Halbinsel Reykjanes, bekannt für sein milchig-blaues Wasser.",
      hu: "Geotermikus gyógyfürdő a Reykjanes-félszigeten, tejszerű kék vizéről ismert.",
      ro: "Un spa geotermal pe peninsula Reykjanes, cunoscut pentru apa sa albastru-lăptos.",
      en: "A geothermal spa on the Reykjanes Peninsula, famous for its milky-blue water."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Laguna Albastră este, fără îndoială, cea mai faimoasă atracție turistică din Islanda, un spa geotermal de renume mondial situat într-un câmp de lavă din peninsula Reykjanes. Apa sa caldă și bogată în minerale provine din scurgerea centralei geotermale Svartsengi din apropiere. Culoarea sa unică, un albastru-lăptos, este dată de conținutul ridicat de siliciu, care reflectă lumina soarelui. Apa, cu o temperatură medie de 37-39°C, este renumită pentru proprietățile sale curative, în special pentru afecțiunile pielii precum psoriazisul. Vizitatorii se pot relaxa în apele calde, pot beneficia de măști faciale cu nămol de siliciu și pot admira peisajul vulcanic din jur. Este o experiență de lux și relaxare, unică în lume.",
      en: "The Blue Lagoon is arguably Iceland's most famous tourist attraction, a world-renowned geothermal spa located in a lava field on the Reykjanes Peninsula. Its warm, mineral-rich water comes from the runoff of the nearby Svartsengi geothermal power plant. Its unique milky-blue color is due to the high silica content, which reflects sunlight. The water, with an average temperature of 37-39°C, is famous for its healing properties, especially for skin conditions like psoriasis. Visitors can relax in the warm waters, enjoy silica mud masks, and admire the surrounding volcanic landscape. It is a unique experience of luxury and relaxation."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Laguna nu este un fenomen natural; s-a format în 1976.",
        "Apa din lagună se reînnoiește complet la fiecare 48 de ore.",
        "National Geographic a numit Laguna Albastră una dintre cele 25 de minuni ale lumii.",
        "Siliciul, algele și mineralele din apă sunt ingredientele active care îi conferă proprietățile benefice.",
        "Complexul include, pe lângă lagună, restaurante, un hotel de lux și o clinică dermatologică.",
        "Adâncimea medie a apei este de 1,2 metri.",
        "Datorită popularității sale, este esențială rezervarea biletelor cu mult timp în avans.",
        "Apa care intră în lagună are o temperatură mult mai ridicată și este răcită înainte de a ajunge la public."
      ],
      en: [
        "The lagoon is not a natural phenomenon; it formed in 1976.",
        "The water in the lagoon completely renews itself every 48 hours.",
        "National Geographic named the Blue Lagoon one of the 25 wonders of the world.",
        "Silica, algae, and minerals in the water are the active ingredients that give it its beneficial properties.",
        "The complex includes restaurants, a luxury hotel, and a dermatology clinic in addition to the lagoon.",
        "The average depth of the water is 1.2 meters.",
        "Due to its popularity, booking tickets well in advance is essential.",
        "The water entering the lagoon has a much higher temperature and is cooled before reaching the public."
      ]
    }
  }
];

export const icelandPois: POI[] = [
  icelandCountry,
  ...icelandRegions,
  ...icelandCities,
  ...icelandNature,
  ...icelandHistorical,
  ...icelandCulture
, ...poiExtraIcelandCities];
