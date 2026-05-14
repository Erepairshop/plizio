import type { POI } from "./poi";

export const poiExtraTurkmenistanReliefV2: POI[] = [
  {
    id: "karakum-desert-relief-v2",
    type: "desert",
    parent: "TM-A",
    coords: [59.0, 39.0],
    name: { de: "Karakum-Wüste", hu: "Karakum-sivatag", ro: "Deșertul Karakum", en: "Karakum Desert"},
    image: "/poi-images/karakum-desert-relief-v2.webp",
    description: {
      de: "Eine riesige Sandwüste, die mehr als siebzig Prozent der Fläche Turkmenistans bedeckt. Sie ist bekannt für ihre extremen Temperaturen und trockenen Landschaften.",
      hu: "Hatalmas homoksivatag, amely Türkmenisztán területének több mint hetven százalékát borítja. Szélsőséges hőmérsékleteiről és száraz tájairól ismert.",
      ro: "Un deșert vast de nisip care acoperă mai mult de șaptezeci la sută din suprafața Turkmenistanului. Este cunoscut pentru temperaturile sale extreme și peisajele aride.",
      en: "A vast sand desert that covers more than seventy percent of the area of Turkmenistan. It is known for its extreme temperatures and arid landscapes."
    },
    facts: {
      de: ["Bedeckt über 350.000 Quadratkilometer.", "Der Name bedeutet Schwarzer Sand."],
      hu: ["Több mint 350 000 négyzetkilométert borít.", "A neve azt jelenti, fekete homok."],
      ro: ["Acoperă peste 350.000 de kilometri pătrați.", "Numele înseamnă nisip negru."],
      en: ["Covers over 350,000 square kilometers.", "The name translates to Black Sand."]
    }, image: "/poi-images/karakum-desert-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Karakum-Wüste (Schwarzer Sand) bedeckt etwa 350.000 km², das sind rund 70 % der Fläche Turkmenistans. Sie erstreckt sich vom Kaspischen Meer bis zum Amudarya und wird in drei Hauptregionen unterteilt: Zaunguz, Zentral und Südost. Die Wüste besteht aus Sanddünen, Takyr (Tonflächen) und Salzwüsten. Der Untergrund enthält große Erdgas- und Erdölvorkommen. Die Karakum ist eine der trockensten Wüsten der Welt mit jährlichen Niederschlägen unter 100 mm. Trotz extremer Bedingungen leben hier Tiere wie Kropfgazellen, Springmäuse und Skorpione. Der Karakum-Kanal, einer der längsten Bewässerungskanäle der Welt, durchquert die Wüste.",
      hu: "A Karakum-sivatag (Fekete Homok) körülbelül 350.000 km²-t fed le, ami Türkmenisztán területének 70%-a. A Kaszpi-tengertől az Amudarjáig húzódik, és három fő részre osztják: Zaunguz, Középső és Délkeleti. Homokdűnékből, takírokból (agyagfelületek) és só-sivatagokból áll. Alatta hatalmas földgáz- és kőolajkészletek találhatók. A Karakum a világ egyik legszárazabb sivataga, éves csapadék 100 mm alatt. Az extrém körülmények ellenére élnek itt golyvás gazellák, ugróegerek és skorpiók. A Karakum-csatorna, a világ egyik leghosszabb öntözőcsatornája, átszeli a sivatagot.",
      ro: "Deșertul Karakum (Nisip Negru) acoperă aproximativ 350.000 km², reprezentând circa 70% din suprafața Turkmenistanului. Se întinde de la Marea Caspică până la Amudarya și este împărțit în trei regiuni principale: Zaunguz, Central și Sud-Est. Deșertul este format din dune de nisip, takyr (suprafețe argiloase) și saline. Subsolul conține mari rezerve de gaze naturale și petrol. Karakum este unul dintre cele mai uscate deșerturi, cu precipitații anuale sub 100 mm. În ciuda condițiilor extreme, trăiesc aici gazele, șoarecii săritori și scorpioni. Canalul Karakum, unul dintre cele mai lungi canale de irigație din lume, traversează deșertul.",
      en: "The Karakum Desert (Black Sand) covers approximately 350,000 km², about 70% of Turkmenistan's area. It stretches from the Caspian Sea to the Amudarya River and is divided into three main regions: Zaunguz, Central, and Southeastern. The desert consists of sand dunes, takyrs (clay pans), and salt flats. Underlying it are vast natural gas and petroleum reserves. The Karakum is one of the driest deserts, with annual precipitation below 100 mm. Despite extreme conditions, it supports wildlife such as goitered gazelles, jerboas, and scorpions. The Karakum Canal, one of the longest irrigation canals in the world, crosses the desert.",
    },
    factsAdvanced: {
      de: ["Fläche 350.000 km²", "Anteil an Turkmenistan: 70%", "Länge: 800 km (Ost-West)", "Breite: 600 km (Nord-Süd)", "Jährlicher Niederschlag: unter 100 mm", "Karakum-Kanal: 1.375 km lang"],
      hu: ["Terület: 350.000 km²", "Türkmenisztán 70%-a", "Hossz: 800 km (K-Ny)", "Szélesség: 600 km (É-D)", "Éves csapadék: 100 mm alatt", "Karakum-csatorna: 1375 km hosszú"],
      ro: ["Suprafață: 350.000 km²", "Procent din Turkmenistan: 70%", "Lungime: 800 km (E-V)", "Lățime: 600 km (N-S)", "Precipitații anuale: sub 100 mm", "Canalul Karakum: 1.375 km lungime"],
      en: ["Area: 350,000 km²", "Percentage of Turkmenistan: 70%", "Length: 800 km (E-W)", "Width: 600 km (N-S)", "Annual precipitation: below 100 mm", "Karakum Canal: 1,375 km long"],
    },
  },
  {
    id: "zaunguz-karakum-relief-v2",
    type: "desert",
    parent: "TM-D",
    coords: [59.5, 40.5],
    name: { de: "Zaunguz-Karakum", hu: "Zaunguz-Karakum", ro: "Karakumul Zaunguz", en: "Zaunguz Karakum"},
    image: "/poi-images/zaunguz-karakum-relief-v2.webp",
    description: {
      de: "Der nördlichste Teil der Karakum-Wüste, der durch die Unguz-Senke vom restlichen Wüstengebiet getrennt ist. Diese Region ist durch steile Klippen und raue Landschaften geprägt.",
      hu: "A Karakum-sivatag legészakibb része, amelyet az Unguz-mélyedés választ el a sivatag többi részétől. Ezt a régiót meredek sziklák és zord tájak jellemzik.",
      ro: "Partea cea mai nordică a deșertului Karakum, separată de restul deșertului prin depresiunea Unguz. Această regiune se caracterizează prin stânci abrupte și peisaje aspre.",
      en: "The northernmost part of the Karakum Desert, separated from the rest of the desert by the Unguz depression. This region is characterized by steep cliffs and rugged landscapes."
    },
    facts: {
      de: ["Zeigt deutliche Höhenunterschiede zur zentralen Wüste.", "Besteht aus alten, verdichteten Sanddünen."],
      hu: ["Jelentős magasságkülönbséget mutat a központi sivataghoz képest.", "Ősi, tömörített homokdűnékből áll."],
      ro: ["Prezintă diferențe clare de altitudine față de deșertul central.", "Constă din dune de nisip vechi, compactate."],
      en: ["Shows clear elevation differences to the central desert.", "Consists of ancient, compacted sand dunes."]
    }, image: "/poi-images/zaunguz-karakum-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Zaunguz-Karakum (auch Nördliche Karakum) ist der nördlichste Teil der Karakum-Wüste und erstreckt sich zwischen dem Ustyurt-Plateau und dem Amudarya-Tal. Sie bedeckt etwa 100.000 km² mit vorherrschenden Kies- und Schotterebenen, die von Sanddünen unterbrochen werden. Die Höhenlage liegt zwischen 80 und 200 Metern. Die Region weist eine spärliche Vegetation aus Saxaul und Wermut auf. Die durchschnittliche jährliche Niederschlagsmenge beträgt 80 mm. Es gibt einige Salzseen wie den Zaman-Baba. Die Zaunguz ist bekannt für ihre archäologischen Stätten aus der Jungsteinzeit.",
      hu: "A Zaunguz-Karakum (más néven Északi Karakum) a Karakum-sivatag legészakibb része, az Usztjurt-fennsík és az Amudarja-völgy között terül el. Körülbelül 100.000 km²-t fed le, jellemzően kavicsos és törmelékes síkságokkal, amelyeket homokdűnék szakítanak meg. A tengerszint feletti magasság 80-200 m. A terület növényzete szegényes, szaxaul és üröm alkotja. Az éves csapadék átlagosan 80 mm. Néhány sós tó, mint a Zaman-Baba található. A Zaunguz neolitikus régészeti lelőhelyeiről ismert.",
      ro: "Zaunguz Karakum (sau Karakumul de Nord) este partea cea mai nordică a deșertului Karakum, situată între Podișul Ustyurt și Valea Amudarya. Acoperă aproximativ 100.000 km², cu câmpii de pietriș și prundiș întrerupte de dune de nisip. Altitudinea variază între 80 și 200 de metri. Vegetația este rară, formată din saxaul și pelin. Precipitațiile medii anuale sunt de 80 mm. Există câteva lacuri sărate, precum Zaman-Baba. Zaunguz este cunoscut pentru siturile arheologice neolitice.",
      en: "Zaunguz Karakum (Northern Karakum) is the northernmost part of the Karakum Desert, lying between the Ustyurt Plateau and the Amudarya Valley. It covers about 100,000 km², dominated by gravel and pebble plains interspersed with sand dunes. Elevation ranges from 80 to 200 meters. Vegetation is sparse, consisting of saxaul and wormwood. Average annual precipitation is 80 mm. There are several salt lakes, such as Zaman-Baba. Zaunguz is known for Neolithic archaeological sites.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 100.000 km²", "Höhenlage 80-200 m", "Niederschlag: 80 mm/Jahr", "Kies- und Schotterebenen", "Salzsee Zaman-Baba", "Neolithische Fundstätten"],
      hu: ["Terület: kb. 100.000 km²", "Magasság 80-200 m", "Csapadék: 80 mm/év", "Kavicsos síkságok", "Zaman-Baba sós tó", "Neolitikus lelőhelyek"],
      ro: ["Suprafață: aprox. 100.000 km²", "Altitudine: 80-200 m", "Precipitații: 80 mm/an", "Câmpii de pietriș", "Lacul sărat Zaman-Baba", "Situri neolitice"],
      en: ["Area: approx. 100,000 km²", "Elevation: 80-200 m", "Precipitation: 80 mm/year", "Gravel and pebble plains", "Salt lake Zaman-Baba", "Neolithic sites"],
    },
  },
  {
    id: "central-karakum-relief-v2",
    type: "desert",
    parent: "TM-A",
    coords: [58.5, 39.5],
    name: { de: "Zentrale Karakum", hu: "Közép-Karakum", ro: "Karakumul Central", en: "Central Karakum"},
    image: "/poi-images/central-karakum-relief-v2.webp",
    description: {
      de: "Das Herzstück der Karakum-Wüste, geprägt von endlosen Sanddünen und spärlicher Vegetation. Es ist eine der lebensfeindlichsten, aber faszinierendsten Regionen des Landes.",
      hu: "A Karakum-sivatag szíve, amelyet végtelen homokdűnék és ritka növényzet jellemez. Az ország egyik legbarátságtalanabb, de leglenyűgözőbb vidéke.",
      ro: "Inima deșertului Karakum, caracterizată prin dune de nisip nesfârșite și vegetație rară. Este una dintre cele mai neprimitoare, dar fascinante regiuni ale țării.",
      en: "The heart of the Karakum Desert, characterized by endless sand dunes and sparse vegetation. It is one of the most hostile yet fascinating regions of the country."
    },
    facts: {
      de: ["Geprägt von großen, wandernden Barchan-Dünen.", "Besitzt ein extrem trockenes Kontinentalklima."],
      hu: ["Nagy, vándorló barkán dűnék jellemzik.", "Rendkívül száraz kontinentális éghajlatú."],
      ro: ["Caracterizat de dune barchan mari, mișcătoare.", "Are o climă continentală extrem de uscată."],
      en: ["Characterized by large, shifting barchan dunes.", "Has an extremely dry continental climate."]
    },
    descriptionAdvanced: {
      de: "Die Central Karakum (Mittlere Karakum) ist die zentrale Region der Karakum-Wüste und umfasst etwa 150.000 km². Sie ist geprägt von großen Sanddünen, die bis zu 70 Meter hoch werden können. In dieser Zone liegen die berühmten Darvaza-Gaskrater („Tor zur Hölle“). Das Relief ist wellig mit zahlreichen Takyr (Tonpfannen). Die Vegetation besteht hauptsächlich aus Saxaul und dornigen Sträuchern. Die Region hat sehr geringe Niederschläge (ca. 70 mm/Jahr) und extreme Temperaturen. Der Central Karakum ist dünn besiedelt, es gibt einige Beduinenlager. Unter der Oberfläche lagern bedeutende Erdgasreserven.",
      hu: "A Középső Karakum a Karakum-sivatag központi része, körülbelül 150.000 km². Jellemzőek a nagy homokdűnék, melyek akár 70 méter magasak is lehetnek. Itt találhatók a híres Darvaza-gázkráterek („Pokol kapuja”). A felszín hullámos, számos takírral (agyagfelület). Növényzete szaxaulból és tövises bokrokból áll. A csapadék nagyon alacsony (kb. 70 mm/év), a hőmérséklet szélsőséges. A terület gyéren lakott, néhány nomád táborral. A felszín alatt jelentős földgázkészletek találhatók.",
      ro: "Karakumul Central este regiunea centrală a deșertului Karakum, cuprinzând aproximativ 150.000 km². Este caracterizată de dune mari de nisip, care pot atinge 70 de metri înălțime. Aici se află faimoasele cratere de gaz Darvaza („Porțile Iadului”). Relief ondulat, cu numeroase takyr-uri. Vegetația constă în principal din saxaul și arbuști spinoși. Precipitațiile sunt foarte scăzute (circa 70 mm/an), iar temperaturile extreme. Regiunea este slab populată, cu câteva tabere de nomazi. Subsolul conține mari rezerve de gaze naturale.",
      en: "The Central Karakum is the central region of the Karakum Desert, covering about 150,000 km². It features large sand dunes reaching up to 70 meters in height. This zone contains the famous Darvaza gas craters („Gates of Hell”). The relief is undulating with numerous takyrs (clay pans). Vegetation is primarily saxaul and thorny shrubs. The region has very low precipitation (around 70 mm/year) and extreme temperatures. It is sparsely populated, with few nomadic camps. Significant natural gas reserves lie beneath the surface.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 150.000 km²", "Maximale Dünenhöhe: 70 m", "Niederschlag: 70 mm/Jahr", "Darvaza-Krater: 1971 entzündet", "Takyr-Flächen: 30% der Region", "Erdgasreserven: geschätzt 1.000 km³"],
      hu: ["Terület: kb. 150.000 km²", "Maximális dűnemagasság: 70 m", "Csapadék: 70 mm/év", "Darvaza-kráter: 1971-ben gyulladt ki", "Takírok: a régió 30%-a", "Földgázkészlet: kb. 1000 km³"],
      ro: ["Suprafață: aprox. 150.000 km²", "Înălțimea maximă a dunelor: 70 m", "Precipitații: 70 mm/an", "Craterele Darvaza: aprinse în 1971", "Suprafețe takyr: 30% din regiune", "Rezerve de gaze: estimat 1.000 km³"],
      en: ["Area: approx. 150,000 km²", "Max dune height: 70 m", "Precipitation: 70 mm/year", "Darvaza craters ignited in 1971", "Takyr surfaces: 30% of the region", "Gas reserves: estimated 1,000 km³"],
    },
  },
  {
    id: "southeastern-karakum-relief-v2",
    type: "desert",
    parent: "TM-M",
    coords: [61.0, 38.0],
    name: { de: "Südöstliche Karakum", hu: "Délkeleti-Karakum", ro: "Karakumul de Sud-Est", en: "Southeastern Karakum"},
    image: "/poi-images/southeastern-karakum-relief-v2.webp",
    description: {
      de: "Dieser Teil der Wüste liegt in der Nähe der Oasen von Mary und wird vom Murgab-Fluss beeinflusst. Historisch war es ein wichtiges Durchzugsgebiet für Karawanen.",
      hu: "A sivatag ezen része Mary oázisai közelében fekszik, és a Murgáb-folyó befolyása alatt áll. Történelmileg fontos tranzitterület volt a karavánok számára.",
      ro: "Această parte a deșertului este situată în apropierea oazelor din Mary și este influențată de râul Murghab. Istoric a fost o zonă importantă de tranzit pentru caravane.",
      en: "This part of the desert is located near the oases of Mary and is influenced by the Murghab River. Historically, it was an important transit area for caravans."
    },
    facts: {
      de: ["Beherbergt Reste antiker Seidenstraßen-Routen.", "Geht langsam in Steppenlandschaften über."],
      hu: ["Ősi selyemút útvonalak maradványait rejti.", "Lassan sztyeppés tájakba megy át."],
      ro: ["Găzduiește rămășițele vechilor rute ale Drumului Mătăsii.", "Trece încet în peisaje de stepă."],
      en: ["Hosts remains of ancient Silk Road routes.", "Slowly transitions into steppe landscapes."]
    },
    descriptionAdvanced: {
      de: "Die Southeastern Karakum (Südöstliche Karakum) erstreckt sich über etwa 100.000 km² entlang der Grenze zu Afghanistan. Diese Region ist durch niedrige Sanddünen und Salzwüsten geprägt. Der Amudarya hat hier Schwemmfächer gebildet. Das Klima ist extrem trocken mit Niederschlägen unter 150 mm. Im Frühling blühen kurzlebige Pflanzen wie Tulpen. Die Region ist landwirtschaftlich bedeutsam, mit Bewässerung aus dem Amudarya. Hier liegen die Städte Atamurat und Kerki. Die Southeastern Karakum ist Teil des wichtigen Migrationskorridors für Vögel zwischen Zentralasien und Südasien.",
      hu: "A Délkeleti Karakum körülbelül 100.000 km²-en terül el Afganisztán határa mentén. Alacsony homokdűnék és só-sivatagok jellemzik. Az Amudarja hordalékkúpokat épített itt. Az éghajlat rendkívül száraz, csapadék 150 mm alatt. Tavasszal rövid életű növények, mint a tulipánok, virágoznak. A terület mezőgazdaságilag fontos, az Amudarja vizével öntöznek. Itt található Atamurat és Kerki városa. A Délkeleti Karakum része a Közép-Ázsia és Dél-Ázsia közötti fontos madárvonulási útvonalnak.",
      ro: "Karakumul de Sud-Est se întinde pe aproximativ 100.000 km² de-a lungul graniței cu Afganistanul. Regiunea este caracterizată de dune de nisip joase și saline. Amudarya a format aici conuri de dejecție. Clima este extrem de uscată, cu precipitații sub 150 mm. Primăvara înfloresc plante efemere precum lalelele. Zona este importantă agricol, cu irigații din Amudarya. Aici se află orașele Atamurat și Kerki. Karakumul de Sud-Est face parte din coridorul major de migrație al păsărilor între Asia Centrală și Asia de Sud.",
      en: "The Southeastern Karakum covers about 100,000 km² along the border with Afghanistan. This region is characterized by low sand dunes and salt flats. The Amudarya has built alluvial fans here. The climate is extremely dry, with precipitation under 150 mm. In spring, ephemeral plants like tulips bloom. The area is agriculturally important, with irrigation from the Amudarya. It contains the towns of Atamurat and Kerki. The Southeastern Karakum is part of a major bird migration corridor between Central Asia and South Asia.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 100.000 km²", "Niederschlag: unter 150 mm/Jahr", "Längster Fluss: Amudarya", "Bewässerte Fläche: 20.000 km²", "Städte: Atamurat, Kerki", "Vogelzugroute: 500 Arten"],
      hu: ["Terület: kb. 100.000 km²", "Csapadék: 150 mm alatt/év", "Leghosszabb folyó: Amudarja", "Öntözött terület: 20.000 km²", "Városok: Atamurat, Kerki", "Madárvonulás: 500 faj"],
      ro: ["Suprafață: aprox. 100.000 km²", "Precipitații: sub 150 mm/an", "Cel mai lung râu: Amudarya", "Suprafață irigată: 20.000 km²", "Orașe: Atamurat, Kerki", "Rută de migrație: 500 specii"],
      en: ["Area: approx. 100,000 km²", "Precipitation: under 150 mm/year", "Longest river: Amudarya", "Irrigated area: 20,000 km²", "Towns: Atamurat, Kerki", "Bird migration route: 500 species"],
    },
  },
  {
    id: "sundukli-desert-relief-v2",
    type: "desert",
    parent: "TM-L",
    coords: [65.0, 37.5],
    name: { de: "Sundukli-Wüste", hu: "Szundukli-sivatag", ro: "Deșertul Sundukli", en: "Sundukli Desert"},
    image: "/poi-images/sundukli-desert-relief-v2.webp",
    description: {
      de: "Eine kleinere Wüstenregion im Osten Turkmenistans, die an den Amudarja-Fluss grenzt. Sie ist bekannt für ihre einzigartigen Sandformationen und Wüstenfauna.",
      hu: "Kisebb sivatagi régió Türkmenisztán keleti részén, amely az Amu-darja folyóval határos. Különleges homokformációiról és sivatagi faunájáról ismert.",
      ro: "O regiune deșertică mai mică din estul Turkmenistanului, la granița cu râul Amu Daria. Este cunoscută pentru formațiunile sale unice de nisip și fauna deșertică.",
      en: "A smaller desert region in eastern Turkmenistan, bordering the Amu Darya river. It is known for its unique sand formations and desert fauna."
    },
    facts: {
      de: ["Grenzt direkt an das Flusstal des Amudarja.", "Besitzt eine reiche Artenvielfalt an Reptilien."],
      hu: ["Közvetlenül az Amu-darja folyóvölgyével határos.", "Gazdag hüllő fajgazdagsággal rendelkezik."],
      ro: ["Se învecinează direct cu valea râului Amu Daria.", "Are o bogată diversitate de specii de reptile."],
      en: ["Borders directly on the river valley of the Amu Darya.", "Has a rich biodiversity of reptiles."]
    }, image: "/poi-images/sundukli-desert-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Sundukli-Wüste ist eine Sandwüste im Nordwesten Turkmenistans, die Teil der nördlichen Karakum-Region ist. Sie erstreckt sich über etwa 50.000 km² zwischen dem Ustyurt-Plateau und dem Amudarya. Das Relief besteht aus barchanischen Dünen und festgelegten Sandrücken. Die Vegetation umfasst Saxaul, Wermut und Gramenhafer. Die Sundukli ist nahezu unbewohnt, mit wenigen Brunnen für die Nomaden. Das Gebiet ist bekannt für seine Winderosion und Sandstürme. Die durchschnittliche Höhe liegt bei 100 m. Der Untergrund enthält Grundwasservorkommen, die durch Karakum-Kanal genutzt werden.",
      hu: "A Sundukli-sivatag egy homoksivatag Türkmenisztán északnyugati részén, az északi Karakum része. Körülbelül 50.000 km² területen fekszik az Usztjurt-fennsík és az Amudarja között. Felszínét barchan dűnék és rögzült homokgerincek alkotják. Növényzete szaxaul, üröm és árvalányhaj. A Sundukli szinte lakatlan, néhány nomád kúttal. Ismert széleróziójáról és homokviharairól. Az átlagos magasság 100 m. A felszín alatt talajvíz található, melyet a Karakum-csatorna hasznosít.",
      ro: "Deșertul Sundukli este un deșert de nisip din nord-vestul Turkmenistanului, parte a Karakumului de Nord. Se întinde pe aproximativ 50.000 km² între Podișul Ustyurt și Amudarya. Relieful este format din dune barchane și creste de nisip fixate. Vegetația include saxaul, pelin și păiuș. Sundukli este aproape nelocuit, cu câteva fântâni pentru nomazi. Zona este cunoscută pentru eroziunea eoliană și furtunile de nisip. Altitudinea medie este de 100 m. Subsolul conține ape subterane utilizate de Canalul Karakum.",
      en: "The Sundukli Desert is a sandy desert in northwestern Turkmenistan, part of the northern Karakum. It covers about 50,000 km² between the Ustyurt Plateau and the Amudarya. The relief consists of barchan dunes and fixed sand ridges. Vegetation includes saxaul, wormwood, and feathergrass. Sundukli is nearly uninhabited, with a few wells for nomads. The area is known for wind erosion and sandstorms. Average elevation is around 100 m. There are groundwater reserves tapped by the Karakum Canal.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 50.000 km²", "Lage zwischen Ustyurt und Amudarya", "Max. Dünenhöhe: 30 m", "Durchschnittliche Höhe 100 m", "Jährliche Sandsturmtage: 50", "Bewässerungspotenzial: 100 Mio. m³ Grundwasser"],
      hu: ["Terület: kb. 50.000 km²", "Usztjurt és Amudarja között", "Max. dűnemagasság: 30 m", "Átlagos magasság 100 m", "Évi homokviharos napok: 50", "Öntözési potenciál: 100 millió m³ talajvíz"],
      ro: ["Suprafață: aprox. 50.000 km²", "Situat între Ustyurt și Amudarya", "Înălțimea maximă a dunei: 30 m", "Altitudine medie 100 m", "Zile cu furtuni de nisip pe an: 50", "Potențial de irigare: 100 mil. m³ apă subterană"],
      en: ["Area: approx. 50,000 km²", "Located between Ustyurt and Amudarya", "Max dune height: 30 m", "Average elevation 100 m", "Annual sandstorm days: 50", "Irrigation potential: 100 million m³ groundwater"],
    },
  },
  {
    id: "ustyurt-plateau-tm-relief-v2",
    type: "plateau",
    parent: "TM-D",
    coords: [56.0, 41.5],
    name: { de: "Üstjurt-Plateau", hu: "Üsztyurt-fennsík", ro: "Podișul Ustiurt", en: "Ustyurt Plateau"},
    image: "/poi-images/ustyurt-plateau-tm-relief-v2.webp",
    description: {
      de: "Eine riesige, lebensfeindliche Hochebene aus Kalkstein, die sich über den Nordwesten Turkmenistans erstreckt. Das Plateau fällt oft in dramatischen, steilen Klippen ab.",
      hu: "Hatalmas, barátságtalan mészkőfennsík, amely Türkmenisztán északnyugati részén húzódik. A fennsík gyakran drámai, meredek sziklákban végződik.",
      ro: "Un platou vast și neospitalier de calcar care se întinde în nord-vestul Turkmenistanului. Platoul coboară adesea în stânci dramatice și abrupte.",
      en: "A vast, inhospitable limestone plateau stretching across northwestern Turkmenistan. The plateau often drops off in dramatic, steep cliffs."
    },
    facts: {
      de: ["Besteht hauptsächlich aus verwittertem Kalkstein.", "War einst der Grund eines prähistorischen Ozeans."],
      hu: ["Főleg mállott mészkőből áll.", "Egykor egy történelem előtti óceán feneke volt."],
      ro: ["Constă în principal din calcar erodat.", "A fost odată fundul unui ocean preistoric."],
      en: ["Consists mainly of weathered limestone.", "Was once the bottom of a prehistoric ocean."]
    }, image: "/poi-images/ustyurt-plateau-tm-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Ustyurt-Plateau ist eine ausgedehnte Hochebene, die sich über 200.000 km² in Turkmenistan, Kasachstan und Usbekistan erstreckt. Der turkmenische Teil liegt im Nordwesten des Landes, in der Balkan-Provinz, und bedeckt etwa 60.000 km². Das Plateau besteht aus Kalkstein und Mergel, die tiefe Schluchten (z.B. die Kaplankyr-Schlucht) geformt haben. Die Vegetation ist spärlich mit Saxaul und Salzkräutern. Das Ustyurt-Plateau ist bekannt für seine zahlreichen archäologischen Stätten wie Nekropolen und Felszeichnungen. Die durchschnittliche Höhe beträgt 150-200 m. Es gibt Vorkommen von Erdgas.",
      hu: "Az Usztjurt-fennsík egy hatalmas fennsík, amely 200.000 km²-en terül el Türkmenisztánban, Kazahsztánban és Üzbegisztánban. A türkmenisztáni rész az ország északnyugati részén, a Balkan tartományban található, és kb. 60.000 km²-t fed le. Mészkőből és márgából áll, melyek mély szurdokokat (pl. Kaplankyr-szurdok) formáltak. Növényzete szegényes, szaxaul és sófű. Az Usztjurt-fennsík számos régészeti lelőhelyéről ismert, mint nekropoliszok és sziklafaragások. Átlagmagasság 150-200 m. Földgázelőfordulások is vannak.",
      ro: "Podișul Ustyurt este un platou vast care se întinde pe 200.000 km² în Turkmenistan, Kazahstan și Uzbekistan. Partea turkmenă se află în nord-vestul țării, în provincia Balkan, acoperind aproximativ 60.000 km². Platoul este format din calcar și marnă, care au creat chei adânci (de exemplu, Cheile Kaplankyr). Vegetația este rară, cu saxaul și plante sărate. Podișul Ustyurt este cunoscut pentru numeroasele situri arheologice, precum necropole și petroglife. Altitudinea medie este de 150-200 m. Există depozite de gaze naturale.",
      en: "The Ustyurt Plateau is a vast highland spanning about 200,000 km² across Turkmenistan, Kazakhstan, and Uzbekistan. The Turkmen section lies in the northwest, in Balkan Province, covering around 60,000 km². The plateau is composed of limestone and marl, shaped into deep canyons (e.g., Kaplankyr Canyon). Vegetation is sparse, with saxaul and saltworts. Ustyurt is known for numerous archaeological sites, including necropolises and rock carvings. Average elevation is 150-200 m. There are natural gas deposits.",
    },
    factsAdvanced: {
      de: ["Gesamtfläche 200.000 km²", "Türkmenischer Teil: 60.000 km²", "Durchschnittliche Höhe 150-200 m", "Tiefste Schlucht: Kaplankyr, bis 100 m tief", "Bekannte Archäologie: 500 Stätten", "Erdgasreserven: 100 Mrd. m³"],
      hu: ["Teljes terület: 200.000 km²", "Türkmen rész: 60.000 km²", "Átlagmagasság: 150-200 m", "Legmélyebb szurdok: Kaplankyr, 100 m mély", "Ismert régészeti lelőhelyek száma: 500", "Földgázkészlet: 100 milliárd m³"],
      ro: ["Suprafață totală: 200.000 km²", "Partea turkmenă: 60.000 km²", "Altitudine medie: 150-200 m", "Cea mai adâncă cheie: Kaplankyr, până la 100 m adâncime", "Situri arheologice: 500", "Rezerve de gaze: 100 miliarde m³"],
      en: ["Total area: 200,000 km²", "Turkmen portion: 60,000 km²", "Average elevation: 150-200 m", "Deepest canyon: Kaplankyr, up to 100 m deep", "Known archaeological sites: 500", "Natural gas reserves: 100 billion m³"],
    },
  },
  {
    id: "kaplankyr-plateau-relief-v2",
    type: "plateau",
    parent: "TM-D",
    coords: [56.5, 40.8],
    name: { de: "Kaplankyr-Plateau", hu: "Kaplankir-fennsík", ro: "Podișul Kaplankîr", en: "Kaplankyr Plateau"},
    image: "/poi-images/kaplankyr-plateau-relief-v2.webp",
    description: {
      de: "Dieses raue Plateau bildet einen südlichen Ausläufer des Üstjurt-Plateaus. Es ist Heimat seltener Wüstenhuftiere wie der Saiga-Antilope.",
      hu: "Ez a zord fennsík az Üsztyurt-fennsík déli nyúlványa. Ritka sivatagi patások, például a szajga antilop otthona.",
      ro: "Acest platou accidentat formează un pinten sudic al platoului Ustiurt. Este adăpostul unor ungulate rare din deșert, precum antilopa saiga.",
      en: "This rugged plateau forms a southern spur of the Ustyurt Plateau. It is home to rare desert ungulates like the saiga antelope."
    },
    facts: {
      de: ["Das Terrain ist von tiefen Senken durchzogen.", "Wichtiger Lebensraum für Wüstengazellen."],
      hu: ["A terepet mély mélyedések szelik át.", "Fontos élőhelye a sivatagi gazelláknak."],
      ro: ["Terenul este intersectat de depresiuni adânci.", "Habitat important pentru gazelele de deșert."],
      en: ["The terrain is crisscrossed by deep depressions.", "Important habitat for desert gazelles."]
    }, image: "/poi-images/kaplankyr-plateau-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Kaplankyr-Plateau ist ein Teil des Ustyurt-Plateaus im Nordwesten Turkmenistans, in der Balkan-Provinz. Es erstreckt sich über etwa 20.000 km² und ist durch tiefe Schluchten und Tafelberge gekennzeichnet. Die berühmte Kaplankyr-Schlucht ist bis zu 100 Meter tief und erstreckt sich über 50 km. Das Plateau besteht aus tertiären Sedimentgesteinen. Die Vegetation ist wüstenhaft mit Saxaul und Halophyten. Der Kaplankyr ist ein wichtiges Naturschutzgebiet mit seltenen Vogelarten wie dem Steinadler. Archäologische Funde umfassen Reste von Siedlungen aus dem Mittelalter. Die Region ist dünn besiedelt.",
      hu: "A Kaplankyr-fennsík az Usztjurt-fennsík része Türkmenisztán északnyugati részén, a Balkan tartományban. Körülbelül 20.000 km²-t foglal el, mély szurdokok és asztalhegyek jellemzik. A híres Kaplankyr-szurdok akár 100 méter mély és 50 km hosszú. A fennsík harmadidőszaki üledékes kőzetekből áll. Növényzete sivatagos, szaxaul és sókedvelő növények. A Kaplankyr fontos madárvédelmi terület, ritka fajokkal, mint a szirti sas. A középkori települések régészeti maradványai is előkerültek. A terület gyéren lakott.",
      ro: "Podișul Kaplankyr este o parte a Podișului Ustyurt din nord-vestul Turkmenistanului, în provincia Balkan. Se întinde pe aproximativ 20.000 km² și se caracterizează prin chei adânci și platouri. Faimoasa Cheie Kaplankyr are până la 100 de metri adâncime și 50 km lungime. Platoul este format din roci sedimentare terțiare. Vegetația este deșertică, cu saxaul și halofite. Kaplankyr este o zonă importantă pentru păsări, incluzând acvila de stâncă. S-au găsit vestigii arheologice medievale. Regiunea este slab populată.",
      en: "The Kaplankyr Plateau is a part of the Ustyurt Plateau in northwestern Turkmenistan, Balkan Province. It covers about 20,000 km², characterized by deep canyons and mesas. The famous Kaplankyr Canyon reaches up to 100 meters deep and extends 50 km. The plateau consists of Tertiary sedimentary rocks. Vegetation is desert-like, with saxaul and halophytes. Kaplankyr is an important bird area, hosting golden eagles. Archaeological remains include medieval settlements. The region is sparsely populated.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 20.000 km²", "Kaplankyr-Schlucht: 50 km lang, 100 m tief", "Besteht aus tertiären Sedimenten", "Höhe: 150-250 m", "Vorkommen von Steinadlern", "Mittelalterliche Siedlungsreste"],
      hu: ["Terület: kb. 20.000 km²", "Kaplankyr-szurdok: 50 km hosszú, 100 m mély", "Harmadidőszaki üledékek", "Magasság: 150-250 m", "Szirti sas előfordulása", "Középkori településmaradványok"],
      ro: ["Suprafață: aprox. 20.000 km²", "Cheile Kaplankyr: 50 km lungime, 100 m adâncime", "Format din roci sedimentare terțiare", "Altitudine: 150-250 m", "Prezența acvilei de stâncă", "Vestigii medievale"],
      en: ["Area: approx. 20,000 km²", "Kaplankyr Canyon: 50 km long, 100 m deep", "Composed of Tertiary sediments", "Elevation: 150-250 m", "Golden eagle population", "Medieval settlement remains"],
    },
  },
  {
    id: "krasnovodsk-plateau-relief-v2",
    type: "plateau",
    parent: "TM-B",
    coords: [53.5, 40.2],
    name: { de: "Krasnowodsk-Plateau", hu: "Krasznovodszk-fennsík", ro: "Podișul Krasnovodsk", en: "Krasnovodsk Plateau"},
    image: "/poi-images/krasnovodsk-plateau-relief-v2.webp",
    description: {
      de: "Eine karge Hochebene im Westen des Landes, die an das Kaspische Meer grenzt. Das Plateau bietet atemberaubende Ausblicke auf die Küstenlandschaft.",
      hu: "Kopár fennsík az ország nyugati részén, amely a Kaszpi-tengerrel határos. A fennsík lenyűgöző kilátást nyújt a tengerparti tájra.",
      ro: "Un platou arid în vestul țării, la granița cu Marea Caspică. Platoul oferă vederi uluitoare ale peisajului de coastă.",
      en: "A barren plateau in the west of the country bordering the Caspian Sea. The plateau offers stunning views of the coastal landscape."
    },
    facts: {
      de: ["Erhebt sich direkt östlich des Kaspischen Meeres.", "Verfügt über erdöl- und erdgasreiche Bodenschichten."],
      hu: ["Közvetlenül a Kaszpi-tengertől keletre emelkedik.", "Kőolajban és földgázban gazdag talajrétegekkel rendelkezik."],
      ro: ["Se înalță direct la est de Marea Caspică.", "Are straturi de sol bogate în petrol și gaze naturale."],
      en: ["Rises directly east of the Caspian Sea.", "Has soil layers rich in oil and natural gas."]
    },
    descriptionAdvanced: {
      de: "Das Krasnovodsk-Plateau liegt in der Balkan-Provinz entlang der Ostküste des Kaspischen Meeres, südlich der Stadt Türkmenbaşy (früher Krasnovodsk). Es ist eine hügelige Hochebene mit Höhen von 50 bis 200 Metern. Das Plateau besteht aus neogenen und quartären Ablagerungen, die von Tälern und Schluchten durchschnitten werden. Die Vegetation ist typisch für die Wüste mit Saxaul und verschiedenen Sträuchern. Das Klima ist trocken mit maritimen Einflüssen. In der Region gibt es Erdölraffinerien und den Hafen von Türkmenbaşy. Auf dem Plateau finden sich paläontologische Funde von fossilen Meerestieren.",
      hu: "A Krasznovodszki-fennsík a Balkan tartományban található, a Kaszpi-tenger keleti partja mentén, Türkmenbaşy (korábban Krasznovodszk) városától délre. Egy dombos fennsík 50-200 méteres magassággal. Neogén és negyedidőszaki üledékekből áll, melyeket völgyek és szurdokok szabdalnak. Növényzete sivatagi, szaxaullal és bokrokkal. Az éghajlat száraz, tengeri hatásokkal. A régióban olajfinomítók és a Türkmenbaşy-i kikötő található. A fennsíkon fosszilis tengeri állatok maradványai kerülnek elő.",
      ro: "Podișul Krasnovodsk este situat în provincia Balkan, de-a lungul coastei de est a Mării Caspice, la sud de orașul Türkmenbaşy (fost Krasnovodsk). Este un platou deluros cu altitudini între 50 și 200 de metri. Format din depozite neogene și cuaternare, străbătut de văi și chei. Vegetația este deșertică, cu saxaul și arbuști. Clima este uscată, cu influențe marine. În zonă se află rafinării de petrol și portul Türkmenbaşy. Pe platou se găsesc fosile de animale marine.",
      en: "The Krasnovodsk Plateau is located in Balkan Province along the eastern coast of the Caspian Sea, south of the city of Türkmenbaşy (formerly Krasnovodsk). It is a hilly plateau with elevations ranging from 50 to 200 meters. The plateau consists of Neogene and Quaternary deposits, dissected by valleys and gorges. Vegetation is desert-like, with saxaul and shrubs. The climate is dry with maritime influences. The region hosts oil refineries and the port of Türkmenbaşy. Paleontological finds include fossil marine animals.",
    },
    factsAdvanced: {
      de: ["Höhenlage: 50-200 m", "Ausdehnung: ca. 15.000 km²", "Neogene und quartäre Ablagerungen", "Hafen von Türkmenbaşy: 5 Mio. Tonnen Umschlag/Jahr", "Erdölraffineriekapazität: 10 Mio. Tonnen/Jahr", "Fossile Meerestiere aus dem Miozän"],
      hu: ["Magasság: 50-200 m", "Kiterjedés: kb. 15.000 km²", "Neogén és negyedidőszaki üledékek", "Türkmenbaşy kikötő: 5 millió tonna/év", "Olajfinomító kapacitás: 10 millió tonna/év", "Mio cén tengeri fosszíliák"],
      ro: ["Altitudine: 50-200 m", "Întindere: aprox. 15.000 km²", "Depozite neogene și cuaternare", "Portul Türkmenbaşy: 5 mil. tone/an", "Capacitate rafinărie: 10 mil. tone/an", "Fosile marine miocene"],
      en: ["Elevation: 50-200 m", "Extent: approx. 15,000 km²", "Neogene and Quaternary deposits", "Port of Türkmenbaşy: 5 million tons/year", "Oil refinery capacity: 10 million tons/year", "Miocene marine fossils"],
    },
  },
  {
    id: "karabil-plateau-relief-v2",
    type: "plateau",
    parent: "TM-M",
    coords: [62.5, 36.5],
    name: { de: "Garabil-Hochebene", hu: "Garabil-fennsík", ro: "Podișul Garabil", en: "Garabil Plateau"},
    image: "/poi-images/karabil-plateau-relief-v2.webp",
    description: {
      de: "Eine sanft abfallende Hochebene im Südosten Turkmenistans, nahe der Grenze zu Afghanistan. Die Region ist von Steppenvegetation bedeckt und wird traditionell als Weideland genutzt.",
      hu: "Enyhén lejtős fennsík Türkmenisztán délkeleti részén, az afgán határ közelében. A régiót sztyeppei növényzet borítja, és hagyományosan legelőként használják.",
      ro: "Un platou ușor înclinat în sud-estul Turkmenistanului, aproape de granița cu Afganistanul. Regiunea este acoperită de vegetație de stepă și este folosită tradițional ca pășune.",
      en: "A gently sloping plateau in southeastern Turkmenistan, near the border with Afghanistan. The region is covered with steppe vegetation and is traditionally used as pastureland."
    },
    facts: {
      de: ["Gilt als hervorragendes Weidegebiet im Frühling.", "Liegt auf einer Höhe von 500 bis 900 Metern."],
      hu: ["Tavasszal kiváló legelőként tartják számon.", "500-900 méteres magasságban fekszik."],
      ro: ["Este considerat o pășune excelentă primăvara.", "Se află la o altitudine de 500 până la 900 de metri."],
      en: ["Considered an excellent pasture area in spring.", "Lies at an altitude of 500 to 900 meters."]
    }, image: "/poi-images/karabil-plateau-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Garabil-Plateau (auch Karabil) liegt im Südosten Turkmenistans, in der Provinz Mary, nahe der Grenze zu Afghanistan. Es ist ein hügeliges Plateau mit einer Höhe von 300 bis 600 Metern und einer Fläche von etwa 30.000 km². Das Plateau besteht aus mesozoischen und paläogenen Sedimenten. Die Vegetation ist eine Mischung aus Wüstensteppe mit Pistazienbäumen und Wermut. Das Garabil-Plateau ist bekannt für seine Wildtierpopulation, darunter Kropfgazellen und Wölfe. In der Region gibt es Erdgasvorkommen. Das Gebiet wird von Nomadenstämmen zur Beweidung genutzt und enthält bedeutende archäologische Stätten aus der Bronzezeit.",
      hu: "A Garabil-fennsík (más néven Karabil) Türkmenisztán délkeleti részén, Mary tartományban, Afganisztán határa közelében fekszik. Egy dombos fennsík 300-600 méteres magassággal, területe kb. 30.000 km². Mezozoos és paleogén üledékekből áll. Növényzete sivatagi sztyepp, pisztáciafákkal és ürömmel. A Garabil-fennsík híres vadvilágáról, golyvás gazellák és farkasok élnek itt. Földgázelőfordulások is találhatók. A területet nomád törzsek használják legeltetésre, és bronzkori régészeti lelőhelyeket is rejt.",
      ro: "Podișul Garabil (sau Karabil) este situat în sud-estul Turkmenistanului, în provincia Mary, aproape de granița cu Afganistanul. Este un platou deluros cu altitudini de 300-600 de metri, având o suprafață de aproximativ 30.000 km². Platoul este format din sedimente mezozoice și paleogene. Vegetația este stepă deșertică, cu fistic și pelin. Podișul Garabil este cunoscut pentru fauna sălbatică, inclusiv gazele și lupi. Există zăcăminte de gaze naturale. Zona este folosită pentru pășunat de triburile nomade și conține situri arheologice din epoca bronzului.",
      en: "The Garabil Plateau (also Karabil) is located in southeastern Turkmenistan, Mary Province, near the border with Afghanistan. It is a hilly plateau with elevations of 300 to 600 meters, covering about 30,000 km². The plateau consists of Mesozoic and Paleogene sediments. Vegetation is a mix of desert steppe with pistachio trees and wormwood. Garabil is known for its wildlife, including goitered gazelles and wolves. There are natural gas deposits. The area is used for grazing by nomadic tribes and contains significant Bronze Age archaeological sites.",
    },
    factsAdvanced: {
      de: ["Fläche ca. 30.000 km²", "Höhe 300-600 m", "Sedimentgesteine aus Mesozoikum und Paläogen", "Pistazienwälder auf 5.000 ha", "Erdgasreserven: geschätzt 50 Mrd. m³", "Bronzezeitliche Siedlungen: 17 Stätten"],
      hu: ["Terület: kb. 30.000 km²", "Magasság: 300-600 m", "Mezozoos és paleogén üledékek", "Pisztáciaerdők: 5000 ha", "Földgázkészlet: kb. 50 milliárd m³", "Bronzkori települések: 17 lelőhely"],
      ro: ["Suprafață: aprox. 30.000 km²", "Altitudine: 300-600 m", "Roci sedimentare mezozoice și paleogene", "Păduri de fistic: 5.000 ha", "Rezerve de gaze: estimat 50 miliarde m³", "Așezări din epoca bronzului: 17 situri"],
      en: ["Area: approx. 30,000 km²", "Elevation: 300-600 m", "Mesozoic and Paleogene sedimentary rocks", "Pistachio forests: 5,000 ha", "Natural gas reserves: estimated 50 billion m³", "Bronze Age settlements: 17 sites"],
    },
  },
  {
    id: "badhyz-hills-relief-v2",
    type: "plateau",
    parent: "TM-M",
    coords: [61.5, 35.8],
    name: { de: "Badchys-Hügelland", hu: "Badhiz-dombság", ro: "Colinele Badhîz", en: "Badhyz Hills"},
    image: "/poi-images/badhyz-hills-relief-v2.webp",
    description: {
      de: "Eine wellige, von Trockenheit geprägte Hügellandschaft im Süden Turkmenistans. Diese einzigartige Hochebene ist für ihre wilden Pistazienwälder bekannt.",
      hu: "Hullámzó, szárazság jellemezte dombság Türkmenisztán déli részén. Ez a különleges fennsík vad pisztáciaerdeiről ismert.",
      ro: "Un peisaj deluros ondulat, caracterizat de secetă, în sudul Turkmenistanului. Acest platou unic este cunoscut pentru pădurile sale de fistic sălbatic.",
      en: "A rolling, drought-prone hilly landscape in southern Turkmenistan. This unique plateau is known for its wild pistachio forests."
    },
    facts: {
      de: ["Besitzt riesige Haine von wilden Pistazienbäumen.", "Heimat des gefährdeten asiatischen Halbesels (Kulan)."],
      hu: ["Hatalmas vad pisztáciafaligetekkel rendelkezik.", "A veszélyeztetett ázsiai vadszamár (kulan) otthona."],
      ro: ["Are plantații uriașe de fistic sălbatic.", "Căminul măgarului sălbatic asiatic pe cale de dispariție (kulan)."],
      en: ["Features huge groves of wild pistachio trees.", "Home to the endangered Asian wild ass (Kulan)."]
    }, image: "/poi-images/badhyz-hills-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Badhyz-Hügel (Badhyz Hills) sind eine Hügelkette im Süden Turkmenistans in der Provinz Mary, die sich als Teil des Badhyz-Plateaus erstrecken. Die Hügel erreichen Höhen von 500 bis 800 Metern und bestehen aus tertiären Sedimenten. Die Landschaft ist geprägt von Tafelbergen und tiefen Tälern. Die Vegetation umfasst Pistazienwälder, Federgras und Sträucher. In den Badhyz-Hügeln liegt das Badhyz-State-Reserve, das die seltene Kropfgazelle und den Turkmenischer Kulan schützt. Die Region hat ein kontinentales Klima mit heißen Sommern und kalten Wintern. Die Hügel sind ein wichtiges Wassereinzugsgebiet für den Tejen-Fluss.",
      hu: "A Badhyz-dombság (Badhyz Hills) egy dombvonulat Türkmenisztán déli részén, Mary tartományban, ami a Badhyz-fennsík része. A dombok 500-800 méter magasak, harmadidőszaki üledékekből állnak. A tájat asztalhegyek és mély völgyek jellemzik. Növényzete pisztáciaerdőkből, tollfűből és bokrokból áll. Itt található a Badhyz Állami Rezervátum, amely a golyvás gazellát és a türkmén kulant védi. Az éghajlat kontinentális, forró nyarakkal és hideg telekkel. A dombok fontos vízgyűjtő területet jelentenek a Tedzsen folyó számára.",
      ro: "Dealurile Badhyz (Badhyz Hills) sunt un lanț deluros din sudul Turkmenistanului, în provincia Mary, parte a Podișului Badhyz. Dealurile ating înălțimi de 500-800 de metri și sunt formate din sedimente terțiare. Peisajul este caracterizat de platouri și văi adânci. Vegetația include păduri de fistic, iarbă de stepă și arbuști. În Dealurile Badhyz se află Rezervația Naturală Badhyz, care protejează gazela cu gușă și kulanul turkmen. Clima este continentală, cu veri fierbinți și ierni reci. Dealurile constituie un important bazin hidrografic pentru râul Tejen.",
      en: "The Badhyz Hills are a range of hills in southern Turkmenistan, Mary Province, forming part of the Badhyz Plateau. They reach heights of 500 to 800 meters and are composed of Tertiary sediments. The landscape features mesas and deep valleys. Vegetation includes pistachio woodlands, feathergrass, and shrubs. The Badhyz State Reserve is located here, protecting goitered gazelles and Turkmenian kulan. The climate is continental, with hot summers and cold winters. The hills are an important watershed for the Tejen River.",
    },
    factsAdvanced: {
      de: ["Höhenlage 500-800 m", "Länge der Hügelkette: 100 km", "Teil des Badhyz-Plateaus", "Badhyz-Reservat: 87.000 ha", "Kulan-Population: 500 Tiere", "Wassereinzugsgebiet Tejen: 2.000 km²"],
      hu: ["Magasság: 500-800 m", "A dombvonulat hossza: 100 km", "A Badhyz-fennsík része", "Badhyz rezervátum: 87.000 ha", "Kulan populáció: 500 egyed", "Tedzsen vízgyűjtő: 2000 km²"],
      ro: ["Altitudine: 500-800 m", "Lungimea lanțului: 100 km", "Parte a Podișului Badhyz", "Rezervația Badhyz: 87.000 ha", "Populația de kulan: 500 de indivizi", "Bazin hidrografic Tejen: 2.000 km²"],
      en: ["Elevation: 500-800 m", "Length of hills: 100 km", "Part of Badhyz Plateau", "Badhyz Reserve: 87,000 ha", "Kulan population: 500 individuals", "Tejen watershed: 2,000 km²"],
    },
  },
  {
    id: "koytendag-range-relief-v2",
    type: "mountain",
    parent: "TM-L",
    coords: [66.5, 37.8],
    name: { de: "Köýtendag-Gebirge", hu: "Kugitangtau-hegység", ro: "Munții Köýtendag", en: "Köýtendag Range"},
    image: "/poi-images/koytendag-range-relief-v2.webp",
    description: {
      de: "Ein markanter Gebirgszug im äußersten Osten Turkmenistans, der die höchsten Gipfel des Landes beherbergt. Hier finden sich spektakuläre Höhlensysteme und tiefe Schluchten.",
      hu: "Kiemelkedő hegylánc Türkmenisztán legkeletibb részén, amely az ország legmagasabb csúcsainak ad otthont. Látványos barlangrendszerek és mély szurdokok találhatók itt.",
      ro: "Un lanț muntos proeminent în extremitatea estică a Turkmenistanului, găzduind cele mai înalte vârfuri ale țării. Aici pot fi găsite sisteme spectaculoase de peșteri și chei adânci.",
      en: "A prominent mountain range in the far east of Turkmenistan, hosting the country's highest peaks. Spectacular cave systems and deep gorges can be found here."
    },
    facts: {
      de: ["Beherbergt den Berg Aýrybaba (3.139 m).", "Ausläufer des Pamir-Alai-Gebirgssystems."],
      hu: ["Itt található az Aýrybaba hegy (3139 m).", "A Pamír-Alaj hegységrendszer nyúlványa."],
      ro: ["Găzduiește Muntele Aýrybaba (3.139 m).", "Pinten al sistemului muntos Pamir-Alai."],
      en: ["Hosts Mount Aýrybaba (3,139 m).", "Spur of the Pamir-Alai mountain system."]
    }, image: "/poi-images/koytendag-range-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Köýtendag (auch Kugitangtau) ist ein Gebirgszug im äußersten Osten Turkmenistans an der Grenze zu Usbekistan. Er erstreckt sich über etwa 200 km in nord-südlicher Richtung und erreicht im Gipfel Ayrybaba eine Höhe von 3.138 m. Das Gebirge besteht hauptsächlich aus Kalkstein und Mergel aus dem Jura und der Kreidezeit. Aufgrund seiner Höhe und isolierten Lage beherbergt es eine einzigartige Flora und Fauna, darunter mehrere endemische Pflanzenarten. Die Region ist auch für ihre Höhlen bekannt, wie die Karlyuk-Höhlen, die bedeutende paläontologische Funde enthalten. Wirtschaftlich wird das Gebirge durch den Abbau von Schwefel und anderen Mineralien genutzt. Die Bergkette spielt eine wichtige Rolle für die Wasserversorgung der umliegenden Täler durch Schneeschmelze.",
      hu: "A Köýtendag (más néven Kugitangtau) Türkmenisztán legkeletibb részén, Üzbegisztán határán húzódó hegylánc. Geológiai szempontból a Pamír-hegységrendszer része, és főként jura és kréta kori mészkőből, dolomitból és homokkőből épül fel. A hegység kiemelkedően gazdag ásványkincsekben: itt található a világ egyik legnagyobb kénlelőhelye, valamint ólom-, cink- és baritércek. A területet erős karsztosodás jellemzi, számos barlangrendszerrel, mint például a Karlyuk-barlangok, amelyekben ősemberi leleteket is találtak. Az éghajlat kontinentális, száraz nyarakkal és hideg telekkel, a magasabb részeken állandó hó is előfordul. A Koytendag-hegység a helyi közösségek számára fontos legeltetési és vízforrás.",
      ro: "Lanțul muntos Köýtendag (cunoscut și sub numele de Kugitangtau) este situat în extremitatea estică a Turkmenistanului, la granița cu Uzbekistanul. Are o lungime de aproximativ 200 km și o lățime de până la 50 km, cu cel mai înalt vârf, Ayrybaba, atingând 3.138 m. Din punct de vedere geologic, este compus predominant din roci sedimentare (calcare, gresii și șisturi) din Jurasic și Cretacic. Regiunea este cunoscută pentru rezervația naturală Köýtendag, înființată în 1986, care protejează specii rare precum leopardul de zăpadă și argali. De asemenea, aici se găsesc numeroase izvoare termale și cascade. Economia locală se bazează pe mineritul sulfului, exploatat în cariere deschise. Accesul în regiune este dificil din cauza reliefului accidentat și a lipsei infrastructurii rutiere.",
      en: "The Köýtendag Range, also known as Kugitangtau, is a mountain range in eastern Turkmenistan, forming part of the border with Uzbekistan. It runs roughly north-south for about 200 km and reaches its highest point at Ayrybaba (3,138 m). Geologically, the range consists of Jurassic and Cretaceous limestones, dolomites, and sandstones, with significant karst formations, including caves like Karlyuk and Kap-Kotan. The latter contains the world's largest known gypsum cave. The area is ecologically important, hosting a unique montane ecosystem with endemic species such as the Koytendag mountain lizard. The range also holds substantial mineral deposits, including sulfur, lead, and zinc. Conservation efforts include the Köýtendag State Reserve, established in 1986, which covers 271 km².",
    },
    factsAdvanced: {
      de: ["Der höchste Gipfel ist der Ayrybaba mit 3.138 Metern.", "Die Gebirgskette erstreckt sich über eine Länge von etwa 200 km.", "Das Gebirge besteht zu 80% aus Kalkstein und Mergel.", "Die Karlyuk-Höhlen enthalten Fossilien von Säugetieren aus dem Pleistozän.", "Jährlich fallen in den Höhenlagen über 600 mm Niederschlag.", "Die Region ist die Heimat von über 100 endemischen Pflanzenarten."],
      hu: ["A legmagasabb pont a 3138 m magas Ayrybaba.", "A hegylánc körülbelül 200 km hosszú és 50 km széles.", "A világ egyik legnagyobb kéntelepe itt található, éves kitermelése meghaladja az 500 000 tonnát.", "A Karlyuk-barlangrendszer teljes hossza meghaladja a 60 km-t.", "A rezervátum területe 271 négyzetkilométer.", "A legmelegebb nyári hónapokban a hőmérséklet elérheti a 40 °C-ot a lábánál."],
      ro: ["Altitudinea maximă este vârful Ayrybaba, cu 3.138 m.", "Lungimea lanțului muntos este de aproximativ 200 km.", "Rezervația naturală Köýtendag acoperă 271 km².", "Peștera Kap-Kotan este cea mai mare peșteră de gips din lume, cu un volum de peste 1,5 milioane m³.", "În zonă au fost identificate peste 1.000 de specii de plante vasculare.", "Exploatarea sulfului a început în anii 1930 și continuă și astăzi."],
      en: ["Highest peak: Ayrybaba at 3,138 meters above sea level.", "The range extends 200 km in length and up to 50 km in width.", "The Köýtendag State Reserve, established in 1986, covers 271 km².", "Kap-Kotan Cave is the largest gypsum cave in the world, with a volume of over 1.5 million m³.", "The area hosts over 100 endemic plant species.", "Annual precipitation at higher elevations exceeds 600 mm."],
    },
  },
  {
    id: "uly-balkan-relief-v2",
    type: "mountain",
    parent: "TM-B",
    coords: [54.5, 39.6],
    name: { de: "Großer Balkan", hu: "Nagy-Balkán-hegység", ro: "Munții Balcani Mari", en: "Great Balkan Range"},
    image: "/poi-images/uly-balkan-relief-v2.webp",
    description: {
      de: "Ein isoliertes Bergmassiv in der westlichen Wüstenlandschaft Turkmenistans. Die trockenen, felsigen Hänge erheben sich dramatisch aus der umliegenden flachen Steppe.",
      hu: "Elszigetelt hegymasszívum Türkmenisztán nyugati sivatagi táján. A száraz, sziklás lejtők drámaian emelkednek ki a környező lapos sztyeppéből.",
      ro: "Un masiv muntos izolat în peisajul deșertic vestic al Turkmenistanului. Pantele aride și stâncoase se ridică dramatic din stepa plană din jur.",
      en: "An isolated mountain massif in the western desert landscape of Turkmenistan. The dry, rocky slopes rise dramatically from the surrounding flat steppe."
    },
    facts: {
      de: ["Der höchste Gipfel ist der Berg Arlan mit 1.880 m.", "Es gibt hier keine dauerhaften Flüsse."],
      hu: ["Legmagasabb csúcsa az Arlan-hegy (1880 m).", "Nincsenek itt állandó folyók."],
      ro: ["Cel mai înalt vârf este Muntele Arlan cu 1.880 m.", "Aici nu există râuri permanente."],
      en: ["The highest peak is Mount Arlan at 1,880 m.", "There are no permanent rivers here."]
    }, image: "/poi-images/uly-balkan-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Große Balkan (Uly Balkan) ist ein Gebirgszug im Westen Turkmenistans, der sich über 200 Kilometer erstreckt. Der höchste Gipfel erreicht 1.880 Meter. Das Gebirge besteht aus Kalkstein und Sandstein. Es ist Teil des Balkan-Gebirgssystems. Die Region ist trocken mit spärlicher Vegetation. An den Hängen gibt es Schaf- und Ziegenweiden. Das Gebirge ist reich an Mineralien wie Gips und Salz.",
      hu: "A Nagy-Balkán (Uly Balkan) egy hegylánc Türkmenisztán nyugati részén, 200 km hosszúságú. Legmagasabb csúcsa 1 880 méter. Mészkőből és homokkőből áll. A Balkán-hegység része. Száraz, ritka növényzettel. Lejtőin juhokat és kecskéket legeltetnek. Ásványkincsekben gazdag, mint gipsz és só.",
      ro: "Marele Balkan (Uly Balkan) este un lanț muntos din vestul Turkmenistanului, care se întinde pe 200 km. Cel mai înalt vârf atinge 1.880 de metri. Este format din calcar și gresie. Face parte din sistemul muntos Balkan. Regiunea este aridă, cu vegetație rară. Pantele sunt folosite pentru pășunatul oilor și caprelor. Bogat în minerale precum gips și sare.",
      en: "The Great Balkan Range (Uly Balkan) is a mountain range in western Turkmenistan, stretching over 200 km. Its highest peak reaches 1,880 meters. The range is composed of limestone and sandstone, with arid climate and sparse vegetation. It is part of the larger Balkan Mountains system. The area is used for livestock grazing, and it contains mineral deposits including gypsum and salt. The range is sparsely populated.",
    },
    factsAdvanced: {
      de: ["Länge: 200 km", "Höchster Gipfel: 1.880 m", "Gestein: Kalkstein, Sandstein", "Niederschlag: <200 mm/Jahr", "Bevölkerungsdichte: <1 pro km²", "Gipsvorkommen: 50 Mio. Tonnen"],
      hu: ["Hossz: 200 km", "Legmagasabb csúcs: 1 880 m", "Kőzet: mészkő, homokkő", "Csapadék: <200 mm/év", "Népsűrűség: <1 fő/km²", "Gipszkészlet: 50 millió tonna"],
      ro: ["Lungime: 200 km", "Cel mai înalt vârf: 1.880 m", "Rocă: calcar, gresie", "Precipitații: <200 mm/an", "Densitate populație: <1/km²", "Rezerve de gips: 50 milioane tone"],
      en: ["Length: 200 km", "Highest peak: 1,880 m", "Rock type: limestone, sandstone", "Precipitation: <200 mm/year", "Population density: <1 per km²", "Gypsum reserves: 50 million tonnes"],
    },
  },
  {
    id: "kici-balkan-relief-v2",
    type: "mountain",
    parent: "TM-B",
    coords: [54.8, 39.3],
    name: { de: "Kleiner Balkan", hu: "Kis-Balkán-hegység", ro: "Munții Balcani Mici", en: "Little Balkan Range"},
    image: "/poi-images/kici-balkan-relief-v2.webp",
    description: {
      de: "Der kleinere Zwillingsbruder des Großen Balkans liegt südlich davon. Das Gebirge ist für seine komplexen geologischen Faltungen und Fossilienfunde bekannt.",
      hu: "A Nagy-Balkán-hegység kisebb ikertestvére tőle délre található. A hegység összetett geológiai gyűrődéseiről és fosszília leleteiről ismert.",
      ro: "Fratele geamăn mai mic al Balcanilor Mari se află la sud de aceștia. Munții sunt cunoscuți pentru pliurile lor geologice complexe și descoperirile de fosile.",
      en: "The smaller twin brother of the Great Balkan Range is located to its south. The mountains are known for their complex geological folds and fossil finds."
    },
    facts: {
      de: ["Erreicht eine maximale Höhe von rund 777 Metern.", "Trennt die nördliche Wüste vom Kopet-Dag-Vorland."],
      hu: ["Körülbelül 777 méteres maximális magasságot ér el.", "Elválasztja az északi sivatagot a Kopet-dag előterétől."],
      ro: ["Atinge o altitudine maximă de aproximativ 777 de metri.", "Separă deșertul nordic de poalele Kopet-Dag."],
      en: ["Reaches a maximum altitude of around 777 meters.", "Separates the northern desert from the Kopet-Dag foothills."]
    }, image: "/poi-images/kici-balkan-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Kleine Balkan (Kici Balkan) ist ein niedrigerer Gebirgszug in Westturkmenistan, parallel zum Großen Balkan. Die maximale Höhe beträgt etwa 1.000 Meter. Das Gebirge ist stark erodiert und von Schluchten durchzogen. Die Vegetation ist wüstenhaft mit Saxaul-Büschen. Das Gebiet wird kaum landwirtschaftlich genutzt. Es gibt einige Erdölvorkommen in der Umgebung. Die Berge sind geologisch gefaltet.",
      hu: "A Kis-Balkán (Kici Balkan) egy alacsonyabb hegylánc Nyugat-Türkmenisztánban, párhuzamosan a Nagy-Balkánnal. Maximális magassága kb. 1 000 méter. Erősen erodált, szurdokokkal tagolt. Növényzete sivatagi, szaxaul bokrokkal. Mezőgazdasági hasznosítása csekély. A környéken kőolajlelőhelyek vannak. A hegyek geológiailag gyűrődtek.",
      ro: "Micul Balkan (Kici Balkan) este un lanț muntos mai scund din vestul Turkmenistanului, paralel cu Marele Balkan. Altitudinea maximă este de aproximativ 1.000 de metri. Este puternic erodat, cu chei adânci. Vegetația este deșertică, cu tufișuri de saxaul. Zona este puțin utilizată agricol. În jur se găsesc zăcăminte de petrol. Munții sunt pliați tectonic.",
      en: "The Little Balkan Range (Kici Balkan) is a lower mountain range in western Turkmenistan, running parallel to the Great Balkan. Its maximum elevation is about 1,000 meters. The range is heavily eroded, with deep gorges. Vegetation is desert-adapted, featuring saxaul shrubs. The area has limited agricultural use. Nearby oil fields contribute to regional economy. The range is geologically folded.",
    },
    factsAdvanced: {
      de: ["Höhe: max. 1.000 m", "Länge: 150 km", "Gestein: Sandstein, Ton", "Niederschlag: 100 mm/Jahr", "Ölfelder: 2 in der Nähe", "Erosionsrate: hoch"],
      hu: ["Magasság: max. 1 000 m", "Hossz: 150 km", "Kőzet: homokkő, agyag", "Csapadék: 100 mm/év", "Olajmezők: 2 a közelben", "Erózió mértéke: magas"],
      ro: ["Altitudine maximă: 1.000 m", "Lungime: 150 km", "Rocă: gresie, argilă", "Precipitații: 100 mm/an", "Câmpuri petrolifere: 2 în apropiere", "Rata de eroziune: ridicată"],
      en: ["Maximum height: 1,000 m", "Length: 150 km", "Rock type: sandstone, clay", "Precipitation: 100 mm/year", "Oil fields: 2 nearby", "Erosion rate: high"],
    },
  },
  {
    id: "syunt-peak-relief-v2",
    type: "mountain",
    parent: "TM-B",
    coords: [56.2, 38.5],
    name: { de: "Berg Sünt", hu: "Szünt-hegy", ro: "Muntele Sünt", en: "Mount Syunt"},
    image: "/poi-images/syunt-peak-relief-v2.webp",
    description: {
      de: "Ein markanter Berggipfel im westlichen Teil des Kopet-Dag-Gebirges. Diese Region zeichnet sich durch eine erstaunliche Pflanzenvielfalt und raue Bergpanoramen aus.",
      hu: "Jellegzetes hegycsúcs a Kopet-dag hegység nyugati részén. Ezt a régiót lenyűgöző növényi sokféleség és zord hegyi panorámák jellemzik.",
      ro: "Un vârf montan proeminent în partea de vest a munților Kopet-Dag. Această regiune este caracterizată de o diversitate uimitoare de plante și panorame montane aspre.",
      en: "A prominent mountain peak in the western part of the Kopet-Dag Mountains. This region is characterized by amazing plant diversity and rugged mountain panoramas."
    },
    facts: {
      de: ["Zentrum des Naturschutzes in der Region.", "Überragt das fruchtbare Sumbar-Tal."],
      hu: ["A régió természetvédelmének központja.", "A termékeny Szumbar-völgy fölé magasodik."],
      ro: ["Centrul conservării naturii din regiune.", "Domină valea fertilă Sumbar."],
      en: ["Center of nature conservation in the region.", "Towers over the fertile Sumbar Valley."]
    }, image: "/poi-images/syunt-peak-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Syunt (auch Mount Syunt) ist ein Gipfel im Kopet-Dag-Gebirge in Turkmenistan. Er erreicht eine Höhe von 2.192 Metern und ist damit einer der höchsten Punkte des Landes. Der Berg liegt im Syunt-Hasardag-Naturreservat. Die Hänge sind mit Wacholder und wilden Obstbäumen bewachsen. Die Besteigung ist anspruchsvoll, aber bei Wanderern beliebt. Von oben bietet sich ein weiter Blick bis zum Kaspischen Meer.",
      hu: "A Syunt-hegy (Mount Syunt) egy csúcs a Kopet-Dag hegységben, Türkmenisztánban. Magassága 2 192 méter, az ország egyik legmagasabb pontja. A Syunt-Hasardag Természetvédelmi Területen található. Lejtőit boróka és vad gyümölcsfák borítják. A megmászása nehéz, de népszerű a túrázók körében. A csúcsról messzire ellátni, egészen a Kaszpi-tengerig.",
      ro: "Muntele Syunt (Mount Syunt) este un vârf din munții Kopet-Dag din Turkmenistan. Are o altitudine de 2.192 de metri, fiind unul dintre cele mai înalte puncte ale țării. Se află în Rezervația naturală Syunt-Hasardag. Pantele sunt acoperite cu ienupăr și pomi fructiferi sălbatici. Ascensiunea este dificilă, dar populară printre drumeți. De pe vârf se vede până la Marea Caspică.",
      en: "Mount Syunt (Syunt Peak) is a summit in the Kopet Dag Mountains of Turkmenistan, rising to 2,192 meters, making it one of the country's highest peaks. It lies within the Syunt-Hasardag Nature Reserve. The slopes are covered with juniper trees and wild fruit trees. The climb is challenging but offers rewarding views, including glimpses of the Caspian Sea on clear days. The peak is a key landmark for hikers.",
    },
    factsAdvanced: {
      de: ["Höhe: 2.192 m", "Lage: 38°N 56°O", "Teil des Kopet-Dag", "Schutzgebiet seit 1978", "Erstbesteigung: unbekannt", "Niederschlag: 400 mm/Jahr"],
      hu: ["Magasság: 2 192 m", "Elhelyezkedés: 38°É 56°K", "Kopet-Dag része", "Védett terület 1978 óta", "Első megmászás: ismeretlen", "Csapadék: 400 mm/év"],
      ro: ["Altitudine: 2.192 m", "Coordonate: 38°N 56°E", "Parte a Kopet-Dag", "Arie protejată din 1978", "Prima ascensiune: necunoscută", "Precipitații: 400 mm/an"],
      en: ["Elevation: 2,192 m", "Coordinates: 38°N 56°E", "Part of Kopet Dag range", "Protected area since 1978", "First ascent: unknown", "Precipitation: 400 mm/year"],
    },
  },
  {
    id: "hasardag-peak-relief-v2",
    type: "mountain",
    parent: "TM-B",
    coords: [56.3, 38.4],
    name: { de: "Hasardag-Gebirge", hu: "Haszardag-hegység", ro: "Muntele Hasardag", en: "Hasardag Range"},
    image: "/poi-images/hasardag-peak-relief-v2.webp",
    description: {
      de: "Ein schroffer Bergkamm, der mit dem Sünt-Gipfel ein wichtiges ökologisches Refugium bildet. Die steilen Hänge bieten Lebensraum für zahlreiche seltene Tier- und Pflanzenarten.",
      hu: "Zord hegygerinc, amely a Szünt-csúccsal együtt fontos ökológiai menedéket alkot. A meredek lejtők számos ritka állat- és növényfajnak adnak otthont.",
      ro: "O creastă muntoasă abruptă care, împreună cu vârful Sünt, formează un important refugiu ecologic. Pantele abrupte oferă habitat pentru numeroase specii rare de animale și plante.",
      en: "A rugged mountain ridge that, together with the Syunt peak, forms an important ecological refuge. The steep slopes provide habitat for numerous rare animal and plant species."
    },
    facts: {
      de: ["Teil des Sünt-Hasardag-Ökosystems.", "Die Hänge sind oft mit wilden Obstbäumen bewachsen."],
      hu: ["A Szünt-Haszardag ökoszisztéma része.", "A lejtőket gyakran vad gyümölcsfák borítják."],
      ro: ["Parte a ecosistemului Sünt-Hasardag.", "Pantele sunt adesea acoperite cu pomi fructiferi sălbatici."],
      en: ["Part of the Syunt-Hasardag ecosystem.", "The slopes are often covered with wild fruit trees."]
    }, image: "/poi-images/hasardag-peak-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Hasardag-Gebirgszug liegt im zentralasiatischen Turkmenistan und erstreckt sich über eine Länge von etwa 150 Kilometern. Die höchste Erhebung erreicht 3.127 Meter und ist Teil des Kopet-Dag-Systems. Die Region ist geologisch aktiv mit zahlreichen Verwerfungen und Erdbeben. Die Vegetation variiert von Wüstensteppen am Fuß bis zu alpinen Matten in höheren Lagen. Historisch diente das Gebirge als natürliche Barriere zwischen der Kaspischen Senke und dem iranischen Hochland. Heute ist es ein Ziel für Trekking und wissenschaftliche Expeditionen zur Erforschung der endemischen Flora und Fauna.",
      hu: "A Hasardag-hegység Türkmenisztán déli részén, az iráni határ közelében található. A hegylánc mintegy 2000 méteres átlagmagassággal rendelkezik, legmagasabb csúcsa a 3127 méteres Hasardag. A terület geológiai szempontból jelentős, mivel itt találkozik a Turáni-lemez és az Iráni-lemez. A hegység gazdag ásványkincsekben, például ólom- és cinkércekben. A helyi nomád pásztorok évszázadok óta használják a legelőket. Az éghajlat kontinentális, forró nyarakkal és hideg telekkel. A csapadék évi mennyisége 200-400 mm között változik.",
      ro: "Lanțul muntos Hasardag este situat în sudul Turkmenistanului, în apropierea graniței cu Iranul. Altitudinea maximă este de 3.127 metri, iar lungimea totală a masivului este de aproximativ 120 de kilometri. Din punct de vedere geologic, zona face parte din orogenul alpin, fiind formată în principal din roci sedimentare și metamorfice. Clima este aridă, cu precipitații medii anuale sub 300 mm. Fauna include specii rare precum capra de munte și vulturul auriu. Exploatările miniere din regiune au scos la iveală zăcăminte de wolfram și mercur.",
      en: "The Hasardag Range is a mountain system in southern Turkmenistan, part of the greater Kopet Dag region. Its highest peak reaches 3,127 meters above sea level, while the range spans roughly 150 kilometers from northwest to southeast. The area is characterized by steep slopes and deep valleys, with limited vegetation due to the arid climate. Geologically, it sits on the boundary between the Eurasian and Arabian tectonic plates, resulting in frequent seismic activity. The mountains serve as a habitat for the endangered Persian leopard and various endemic plant species. Agriculture is minimal, mostly confined to limited irrigated areas at lower elevations.",
    },
    factsAdvanced: {
      de: ["Höchster Gipfel: 3.127 Meter über dem Meeresspiegel", "Länge des Gebirgszugs: ca. 150 km", "Durchschnittliche Niederschlagsmenge: 200-400 mm/Jahr", "Bekannte Gesteinsarten: Kalkstein, Schiefer, Sandstein", "Anzahl endemischer Pflanzenarten: über 50", "Erdbebenaktivität: durchschnittlich 3-4 Beben der Stärke 4+ pro Jahr"],
      hu: ["Legmagasabb csúcs: 3127 m", "Hegység hossza: 120 km", "Átlagos csapadék: 250 mm/év", "Legfontosabb ásványkincs: ólom-cink érc", "Leggyakoribb kőzet: mészkő", "Lakosság a környéken: kb. 5000 fő"],
      ro: ["Altitudine maximă: 3.127 m", "Lungime totală: 120 km", "Precipitații medii: 300 mm/an", "Zăcăminte: wolfram și mercur", "Specie endemică: iedul sălbatic (Capra aegagrus)", "Frecvență cutremure: 5-6 pe deceniu"],
      en: ["Highest elevation: 3,127 m", "Total length: 150 km", "Annual precipitation: 200-400 mm", "Tectonic boundary: Eurasian and Arabian plates", "Number of endemic plant species: 50+", "Seismic events per year (magnitude 4+): 3-4"],
    },
  },
  {
    id: "uzboy-valley-relief-v2",
    type: "valley",
    parent: "TM-B",
    coords: [54.5, 39.0],
    name: { de: "Uzboy-Tal", hu: "Uzboj-völgy", ro: "Valea Uzboi", en: "Uzboy Valley"},
    image: "/poi-images/uzboy-valley-relief-v2.webp",
    description: {
      de: "Das trockene Flussbett eines historischen Wasserlaufs, der einst den Amudarja mit dem Kaspischen Meer verband. Heute schlängelt sich das Tal als dramatische Senke durch die Wüste.",
      hu: "Egy történelmi vízfolyás kiszáradt medre, amely egykor az Amu-darját kötötte össze a Kaszpi-tengerrel. Ma a völgy drámai mélyedésként kanyarog át a sivatagon.",
      ro: "Albia uscată a unui curs de apă istoric care odată lega Amu Daria de Marea Caspică. Astăzi, valea șerpuiește prin deșert ca o depresiune dramatică.",
      en: "The dry riverbed of a historic watercourse that once connected the Amu Darya with the Caspian Sea. Today, the valley meanders through the desert as a dramatic depression."
    },
    facts: {
      de: ["Führte bis ins 16. Jahrhundert noch Wasser.", "Hinterließ eine Kette von Salzseen."],
      hu: ["A 16. századig még vizet szállított.", "Sós tavak láncolatát hagyta hátra."],
      ro: ["A purtat apă până în secolul al XVI-lea.", "A lăsat în urmă un lanț de lacuri sărate."],
      en: ["Carried water until the 16th century.", "Left behind a chain of salt lakes."]
    }, image: "/poi-images/uzboy-valley-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Uzboy-Tal ist ein altes Flusstal im Nordwesten Turkmenistans, das einst den Amudarja mit dem Kaspischen Meer verband. Heute ist es eine trockene Rinne, die sich über etwa 500 km erstreckt. Das Tal ist von großer archäologischer Bedeutung, da es entlang der historischen Seidenstraße verlief und zahlreiche Ruinen alter Siedlungen beherbergt. Geologisch besteht der Untergrund aus alluvialen Ablagerungen und Sandstein. Die Region ist extrem trocken mit weniger als 100 mm Jahresniederschlag. An manchen Stellen gibt es jedoch Grundwasservorkommen, die Oasenbildung ermöglichen. Das Uzboy-Tal ist ein wichtiges Gebiet für die Erforschung des Paläoklimas und der Flussgeschichte Zentralasiens.",
      hu: "Az Uzboy-völgy egy ősi folyómeder Türkmenisztán északnyugati részén, amely egykor az Amudarját kötötte össze a Kaszpi-tengerrel. A mintegy 500 km hosszú, ma már száraz völgy fontos régészeti lelőhely, ahol a Selyemút mentén virágzó középkori városok maradványai találhatók. A völgy geológiáját alluviális üledékek és homokkövek alkotják. Az éghajlat rendkívül száraz, évi 100 mm alatti csapadékkal. A talajvíz helyenként felszínre tör, lehetővé téve kicsi oázisok kialakulását. Az Uzboy-völgy ökológiai szempontból is jelentős, mivel számos madárfaj számára nyújt átvonulási útvonalat. A területet néha nomád pásztorok használják legeltetésre.",
      ro: "Valea Uzboy este o fostă albie fluvială în nord-vestul Turkmenistanului, care lega odinioară Amudaria de Marea Caspică. În prezent, este o vale uscată care se întinde pe aproximativ 500 km. Valea are o importanță arheologică majoră, de-a lungul ei găsindu-se ruine ale unor orașe medievale de pe Drumul Mătăsii. Geologic, este formată din depozite aluvionare și gresii. Clima este hiper-aridă, cu precipitații anuale sub 100 mm. Cu toate acestea, în unele locuri, apa freatică iese la suprafață, formând oaze mici. Vegetația este dominată de plante halofile și tufișuri de deșert. Valea Uzboy este o rută importantă pentru păsările migratoare.",
      en: "The Uzboy Valley is an ancient riverbed in northwestern Turkmenistan, formerly connecting the Amu Darya to the Caspian Sea. Today it is a dry channel stretching about 500 km. The valley is archaeologically significant, with ruins of medieval cities along the Silk Road, such as Goklen and Shakhsenem. Geologically, it consists of alluvial deposits and sandstones. The climate is hyper-arid, with less than 100 mm annual precipitation. Groundwater seeps create small oases with tamarisk and sedge. The valley serves as a migration corridor for birds and is used by nomads for grazing. The Uzboy is a key site for studying the paleogeography of Central Asia.",
    },
    factsAdvanced: {
      de: ["Das Uzboy-Tal erstreckt sich über etwa 500 km.", "Der jährliche Niederschlag beträgt weniger als 100 mm.", "Entlang des Tals liegen Ruinen von über 10 mittelalterlichen Städten.", "Die Breite des Tals variiert zwischen 1 und 5 km.", "Der ehemalige Fluss versiegte um das 16. Jahrhundert.", "Im Tal gibt es Salzkrusten, die auf die Verdunstung des Grundwassers zurückgehen."],
      hu: ["Az Uzboy-völgy hossza kb. 500 km.", "Az éves csapadék kevesebb, mint 100 mm.", "A völgyben található a középkori Dehistan romváros.", "A völgy szélessége 1 és 5 km között változik.", "Az Uzboy medre körülbelül a 16. században száradt ki.", "A terület fontos élőhely a túzoknak (Otis tarda)."],
      ro: ["Lungimea văii Uzboy este de aproximativ 500 km.", "Precipitațiile anuale sunt sub 100 mm.", "În vale se află ruinele orașului medieval Dehistan.", "Lățimea văii variază între 1 și 5 km.", "Fluxul fluviului a încetat în jurul secolului al XVI-lea.", "Valea este utilizată pentru pășunat de către nomazi."],
      en: ["Length: approximately 500 km.", "Annual precipitation less than 100 mm.", "Contains ruins of over 10 medieval settlements.", "Width varies from 1 to 5 km.", "The river dried up around the 16th century.", "Salt crusts form due to groundwater evaporation."],
    },
  },
  {
    id: "sumbar-valley-relief-v2",
    type: "valley",
    parent: "TM-B",
    coords: [56.0, 38.3],
    name: { de: "Sumbar-Tal", hu: "Szumbar-völgy", ro: "Valea Sumbar", en: "Sumbar Valley"},
    image: "/poi-images/sumbar-valley-relief-v2.webp",
    description: {
      de: "Ein malerisches Flusstal im Südwesten, bekannt für sein mildes Mikroklima. Es wird intensiv für Landwirtschaft und Obstbau, wie Granatapfel- und Feigenhaine, genutzt.",
      hu: "Festői folyóvölgy délnyugaton, amely enyhe mikroklímájáról ismert. Intenzíven használják mezőgazdaságra és gyümölcstermesztésre, például gránátalma- és fügeligetekre.",
      ro: "O vale pitorească a râului în sud-vest, cunoscută pentru microclimatul său blând. Este folosită intens pentru agricultură și pomicultură, cum ar fi livezile de rodii și smochini.",
      en: "A picturesque river valley in the southwest, known for its mild microclimate. It is used intensively for agriculture and fruit growing, such as pomegranate and fig groves."
    },
    facts: {
      de: ["Gilt als eine der grünsten Regionen Turkmenistans.", "Verfügt über warme subtropische Einflüsse."],
      hu: ["Türkmenisztán egyik legzöldebb régiójának számít.", "Meleg szubtrópusi hatásokkal rendelkezik."],
      ro: ["Considerată una dintre cele mai verzi regiuni din Turkmenistan.", "Are influențe calde subtropicale."],
      en: ["Considered one of the greenest regions in Turkmenistan.", "Features warm subtropical influences."]
    },
    descriptionAdvanced: {
      de: "Das Sumbar-Tal liegt im Westen Turkmenistans im Kopet-Dag-Gebirge und erstreckt sich entlang des gleichnamigen Flusses, der in den Iran fließt. Der Fluss Sumbar ist etwa 150 km lang und entspringt in den Höhen des Kopet-Dag. Das Tal ist bekannt für seine üppige Vegetation, die von Walnuss- und Feigenbäumen dominiert wird. Die Region hat ein subtropisches Mikroklima mit milden Wintern und feuchten Sommern. In der Umgebung werden Wein und Obst angebaut. Das Tal ist auch für seine reiche Vogelwelt bekannt. Es gibt mehrere Dörfer, die landwirtschaftlich geprägt sind. Der Sumbar ist der letzte noch wasserführende Fluss der Region, der nicht vollständig reguliert ist.",
      hu: "A Szumbár-völgy (Sumbar) Türkmenisztán nyugati részén, a Kopet-dag hegységben található, a Szumbár folyó mentén. A folyó hossza kb. 150 km, és Iránba folyik. A völgy termékeny, köszönhetően a viszonylag bőséges csapadéknak és a folyó vízének. Jellegzetes növényei a diófa, füge és gránátalma. A mikroklíma szubtrópusi a Kopet-dag védelmében. A völgyben számos gyümölcsöst és szőlőültetvényt találni. A terület madárvilága gazdag, többek között fácánok és harkályok élnek itt. A Szumbár-völgy fontos ökológiai folyosó a Kaszpi-tenger és a Kopet-dag között. A helyi gazdaság a mezőgazdaságra és a turizmusra épül.",
      ro: "Valea Sumbar este situată în vestul Turkmenistanului, în munții Kopet-Dag, de-a lungul râului Sumbar, care curge aproximativ 150 km spre Iran. Valea are un microclimat subtropical, cu precipitații anuale de 400-600 mm, permițând o vegetație luxuriantă. Aici se cultivă nuci, smochine, rodii și struguri. Râul Sumbar este unul dintre puținele cursuri de apă permanente din regiune. Valea găzduiește păduri galerii de plopi și sălcii, fiind un habitat important pentru păsări migratoare. Din punct de vedere economic, agricultura și apicultura sunt predominante. De asemenea, valea este cunoscută pentru peșterile sale calcaroase, cum ar fi Peștera Sumbar.",
      en: "The Sumbar Valley is located in western Turkmenistan within the Kopet-Dag mountains, following the Sumbar River, which flows into Iran. The river is about 150 km long. The valley benefits from a subtropical microclimate with 400-600 mm annual precipitation, supporting lush riparian forests of walnut, fig, and pomegranate. It is one of the few permanently flowing rivers in the region. The valley hosts diverse birdlife, including pheasants and woodpeckers. Agriculture is the main economic activity, with orchards and vineyards. The valley also contains limestone caves, such as Sumbar Cave, with stalactite formations. It serves as a green corridor for wildlife between the Caspian coast and the mountains.",
    },
    factsAdvanced: {
      de: ["Der Fluss Sumbar ist etwa 150 km lang.", "Die jährliche Niederschlagsmenge beträgt 400–600 mm.", "Die Höhe des Tals liegt zwischen 200 und 800 Metern.", "Die Landwirtschaft produziert hauptsächlich Walnüsse und Feigen.", "Die durchschnittliche Temperatur im Januar liegt bei 5 °C.", "Die Region ist bekannt für ihre Kalksteinhöhlen, darunter die Sumbar-Höhle."],
      hu: ["A Szumbár folyó hossza kb. 150 km.", "Az éves csapadék 400–600 mm.", "A völgy magassága 200 és 800 méter között van.", "A mezőgazdaságban a dió, füge és gránátalma dominál.", "A januári átlaghőmérséklet 5 °C.", "A völgyben található a Szumbár-barlang, amely cseppköveiről híres."],
      ro: ["Lungimea râului Sumbar: aproximativ 150 km.", "Precipitațiile medii anuale: 400–600 mm.", "Altitudinea văii: între 200 și 800 m.", "Culturile principale: nuci, smochine, rodii.", "Temperatura medie în ianuarie: 5°C.", "Valea adăpostește păduri galerii de plopi și sălcii."],
      en: ["Sumbar River length: approximately 150 km.", "Annual precipitation: 400–600 mm.", "Valley elevation: 200–800 m.", "Major crops: walnuts, figs, pomegranates.", "Average January temperature: 5°C.", "Contains limestone caves like Sumbar Cave."],
    },
  },
  {
    id: "murghab-valley-relief-v2",
    type: "valley",
    parent: "TM-M",
    coords: [61.5, 37.5],
    name: { de: "Murgab-Tal", hu: "Murgáb-völgy", ro: "Valea Murghab", en: "Murghab Valley"},
    image: "/poi-images/murghab-valley-relief-v2.webp",
    description: {
      de: "Dieses fruchtbare Flusstal bildet eine wichtige Oase inmitten der trockenen Karakum-Wüste. Historisch war das Tal das Zentrum der mächtigen antiken Stadt Merw.",
      hu: "Ez a termékeny folyóvölgy egy fontos oázist alkot a száraz Karakum-sivatag közepén. Történelmileg a völgy a hatalmas ókori Merv városának központja volt.",
      ro: "Această vale fertilă a râului formează o oază importantă în mijlocul deșertului arid Karakum. Istoric, valea a fost centrul puternicului oraș antic Merv.",
      en: "This fertile river valley forms an important oasis in the middle of the arid Karakum Desert. Historically, the valley was the center of the powerful ancient city of Merv."
    },
    facts: {
      de: ["Wichtige Region für den Baumwollanbau.", "Das Flusswasser versickert in einem großen Binnendelta."],
      hu: ["Fontos pamuttermesztő régió.", "A folyó vize egy nagy szárazföldi deltában szivárog el."],
      ro: ["Regiune importantă pentru cultivarea bumbacului.", "Apa râului se scurge într-o deltă interioară vastă."],
      en: ["Important region for cotton cultivation.", "The river water seeps into a large inland delta."]
    }, image: "/poi-images/murghab-valley-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Murghab-Tal (auch Murgab) liegt im Südosten Turkmenistans und wird vom Fluss Murghab durchflossen, der aus Afghanistan kommt. Der Fluss ist etwa 850 km lang und endet in der Wüste Karakum. Das Tal ist eine wichtige landwirtschaftliche Region, die von Bewässerungssystemen abhängt. Historisch war die Oase Merv (heute Mary) ein bedeutendes Zentrum. Der Untergrund besteht aus alluvialen Ablagerungen. Die Vegetation umfasst Wüstenbüsche und kultivierte Felder mit Baumwolle und Weizen. Die Region hat extreme Temperaturschwankungen. Heute ist das Murghab-Tal eines der am dichtesten besiedelten Gebiete Turkmenistans.",
      hu: "A Murghab-völgy (Murgab) Türkmenisztán délkeleti részén található, a Murghab folyó mentén, amely Afganisztánból ered. A folyó hossza kb. 850 km, és a Karakum-sivatagba torkollik. A völgy termékeny öntözéses mezőgazdasági terület, ahol gyapotot, búzát és gyümölcsöket termesztenek. Történelmi szempontból itt volt Merv ókori oázisvárosa, amely a Selyemút egyik legfontosabb állomása volt. A Murghab deltája kedvező feltételeket biztosított a civilizáció számára. A mai napig a völgy az ország egyik legsűrűbben lakott része, köszönhetően a rendelkezésre álló víznek. A területen található a Karakum-csatorna is, amely tovább bővíti az öntözhető területeket.",
      ro: "Valea Murghab (Murgab) se află în sud-estul Turkmenistanului, de-a lungul râului Murghab, care provine din Afganistan. Râul are aproximativ 850 km lungime și se pierde în deșertul Karakum. Valea este o zonă agricolă intens irigată, culturile principale fiind bumbacul, grâul și fructele. Din punct de vedere istoric, aici se afla oaza Merv (Mary), un centru major al Drumului Mătăsii. Geologic, valea este formată din sedimente aluvionare. Clima este continentală aridă, cu precipitații anuale sub 200 mm. Populația este concentrată în orașe precum Mary și Baýramaly. Valea beneficiază de Canalul Karakum pentru irigații.",
      en: "The Murghab Valley (Murgab) is a fertile region in southeastern Turkmenistan, following the Murghab River, which originates in Afghanistan. The river runs about 850 km and ends in the Karakum Desert. The valley is a key agricultural area, irrigated by the Murghab and the Karakum Canal, producing cotton, wheat, and fruits. Historically, it was the site of the ancient oasis of Merv, a major Silk Road city. The soil is alluvial. The climate is continental arid, with less than 200 mm annual precipitation. The valley hosts the cities of Mary and Baýramaly. It is one of Turkmenistan's most densely populated regions, relying on river water for survival.",
    },
    factsAdvanced: {
      de: ["Der Fluss Murghab ist etwa 850 km lang.", "Die jährliche Niederschlagsmenge beträgt weniger als 200 mm.", "Das Tal beherbergt die antike Stadt Merv, ein UNESCO-Weltkulturerbe seit 1999.", "Die landwirtschaftliche Fläche umfasst etwa 200.000 Hektar.", "Die durchschnittliche Temperatur im Juli liegt über 30 °C.", "Der Karakum-Kanal transportiert Wasser aus dem Amudarja in die Region."],
      hu: ["A Murghab folyó hossza kb. 850 km.", "Az éves csapadék kevesebb, mint 200 mm.", "A völgyben található Merv romvárosa, az UNESCO világörökség része.", "A mezőgazdasági terület kb. 200 000 hektár.", "A júliusi átlaghőmérséklet meghaladja a 30 °C-ot.", "A Karakum-csatorna az Amudarja vizét hozza a völgybe."],
      ro: ["Lungimea râului Murghab: 850 km.", "Precipitațiile anuale sub 200 mm.", "Valea include situl arheologic Merv, UNESCO din 1999.", "Suprafața agricolă irigată: 200.000 ha.", "Temperatura medie în iulie: peste 30°C.", "Canalul Karakum aduce apă din Amudaria."],
      en: ["Murghab River length: 850 km.", "Annual precipitation: less than 200 mm.", "Hosts the ancient city of Merv, a UNESCO World Heritage site since 1999.", "Irrigated agricultural area: 200,000 hectares.", "Average July temperature: above 30°C.", "Water supplied by the Karakum Canal from the Amu Darya."],
    },
  },
  {
    id: "garabogazkol-coast-relief-v2",
    type: "coast",
    parent: "TM-B",
    coords: [53.0, 41.5],
    name: { de: "Gara-Bogas-Gol-Küste", hu: "Kara-Bogaz-Gol partvidék", ro: "Coasta Garabogazköl", en: "Garabogazköl Coast"},
    image: "/poi-images/garabogazkol-coast-relief-v2.webp",
    description: {
      de: "Eine isolierte Küstenregion an der flachen Lagune des Kaspischen Meeres. Das Gebiet ist extrem salzhaltig und von weißen, kristallinen Stränden geprägt.",
      hu: "Elszigetelt partvidék a Kaszpi-tenger sekély lagúnájánál. A terület rendkívül sós, és fehér, kristályos strandok jellemzik.",
      ro: "O regiune de coastă izolată pe laguna puțin adâncă a Mării Caspice. Zona este extrem de salină și caracterizată de plaje albe, cristaline.",
      en: "An isolated coastal region on the shallow lagoon of the Caspian Sea. The area is extremely saline and characterized by white, crystalline beaches."
    },
    facts: {
      de: ["Das Wasser hier hat einen viel höheren Salzgehalt als das Kaspische Meer.", "Bedeutende Region für den Abbau von Mirabilit."],
      hu: ["Az itteni víz sótartalma sokkal magasabb, mint a Kaszpi-tengeré.", "Fontos régió a mirabilit bányászatához."],
      ro: ["Apa de aici are o salinitate mult mai mare decât Marea Caspică.", "Regiune importantă pentru extracția de mirabilit."],
      en: ["The water here has a much higher salinity than the Caspian Sea.", "Important region for the mining of mirabilite."]
    }, image: "/poi-images/garabogazkol-coast-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Küste des Garabogazköl (Kara-Bogaz-Gol) liegt im Nordwesten Turkmenistans am Kaspischen Meer. Es handelt sich um eine große, flache Bucht, die nur durch eine schmale Meerenge mit dem Kaspischen Meer verbunden ist. Die Bucht hat eine extrem hohe Salzkonzentration (bis zu 35 %), die durch starke Verdunstung entsteht. In den 1980er Jahren wurde die Meerenge abgedämmt, was zu einer Austrocknung der Bucht führte; später wurde die Verbindung wiederhergestellt. Heute dient der Garabogazköl der industriellen Salzgewinnung, insbesondere von Mirabilit (Glaubersalz) und anderen Mineralien. Die Küstenlinie ist von Salzwüsten und Schlammflächen geprägt. Das Gebiet ist nahezu unbewohnt, beherbergt aber eine einzigartige Salzwasserfauna.",
      hu: "A Garabogazköl (Kara-Bogaz-Gol) partja Türkmenisztán északnyugati részén, a Kaszpi-tenger partján található. Ez egy nagy, sekély öböl, amelyet egy keskeny szoros köt össze a Kaszpi-tengerrel. Az öböl rendkívül magas sótartalmú (akár 35%-os), a párolgás miatt. Az 1980-as években gátat építettek, ami az öböl kiszáradásához vezetett; később a kapcsolatot helyreállították. Ma az ipari sókitermelés fontos helyszíne, különösen mirabilit (Glauber-só) kinyerése. A partvonalat sósivatagok és iszapos területek jellemzik. A térség szinte lakatlan, de egyedülálló sósvízi élővilágnak ad otthont, például sóigényeknek és baktériumoknak.",
      ro: "Coasta Garabogazköl (Kara-Bogaz-Gol) se află în nord-vestul Turkmenistanului, la Marea Caspică. Acesta este un golf mare și puțin adânc, conectat la Marea Caspică printr-o strâmtoare îngustă. Golful are o salinitate extrem de ridicată (până la 35%) din cauza evaporării intense. În anii 1980, strâmtoarea a fost barată, ceea ce a dus la uscarea golfului; ulterior, conexiunea a fost restabilită Astăzi, Garabogazköl este o sursă majoră de sare industrială, în special mirabilit. Coasta este formată din deșerturi sărate și câmpii noroioase. Regiunea este aproape nelocuită, dar găzduiește microorganisme halofile unice.",
      en: "The Garabogazköl coast is a large, shallow lagoon in northwestern Turkmenistan, connected to the Caspian Sea by a narrow strait. The lagoon has extreme salinity (up to 35%) due to high evaporation. In the 1980s, the strait was dammed, causing the lagoon to dry up; the connection was later restored. Today, it is a major site for industrial salt extraction, particularly mirabilite (Glauber's salt). The coastline consists of salt flats and mudflats. The area is virtually uninhabited but supports unique halophilic organisms. The lagoon's water level fluctuates with Caspian Sea levels.",
    },
    factsAdvanced: {
      de: ["Die Salzkonzentration erreicht bis zu 35 %.", "Die Fläche der Bucht beträgt etwa 18.000 km².", "Die Meerenge ist etwa 200 m breit und 10 km lang.", "Die jährliche Verdunstung beträgt über 1.000 mm.", "Die Bucht enthält Vorräte von über 20 Milliarden Tonnen Salz.", "Die maximale Tiefe beträgt weniger als 10 m."],
      hu: ["A sótartalom elérheti a 35%-ot.", "Az öböl területe kb. 18 000 km².", "A szoros szélessége kb. 200 m, hossza 10 km.", "Az éves párolgás meghaladja az 1000 mm-t.", "Az öböl több mint 20 milliárd tonna sót tartalmaz.", "A maximális mélység kevesebb, mint 10 m."],
      ro: ["Salinitatea maximă: 35%.", "Suprafața golfului: aproximativ 18.000 km².", "Strâmtoarea: 200 m lățime, 10 km lungime.", "Evaporația anuală: peste 1.000 mm.", "Rezervele de sare depășesc 20 de miliarde de tone.", "Adâncimea maximă: sub 10 m."],
      en: ["Maximum salinity: 35%.", "Lagoon area: approximately 18,000 km².", "Strait width: 200 m; length: 10 km.", "Annual evaporation: over 1,000 mm.", "Salt reserves: over 20 billion tons.", "Maximum depth: less than 10 m."],
    },
  },
  {
    id: "turkmenbashi-gulf-coast-relief-v2",
    type: "coast",
    parent: "TM-B",
    coords: [53.0, 39.9],
    name: { de: "Türkmenbaşy-Küste", hu: "Türkmenbaşy-öböl partvidéke", ro: "Coasta Golfului Türkmenbașî", en: "Türkmenbaşy Gulf Coast"},
    image: "/poi-images/turkmenbashi-gulf-coast-relief-v2.webp",
    description: {
      de: "Dieser Küstenabschnitt am Kaspischen Meer zeichnet sich durch geschützte Buchten und wichtige Feuchtgebiete aus. Er bietet eine Raststätte für Millionen von Zugvögeln.",
      hu: "Ez a Kaszpi-tenger menti partszakasz védett öblökkel és fontos vizes élőhelyekkel rendelkezik. Vonuló madarak millióinak nyújt pihenőhelyet.",
      ro: "Această porțiune de coastă de pe Marea Caspică se caracterizează prin golfuri protejate și zone umede importante. Oferă un loc de odihnă pentru milioane de păsări migratoare.",
      en: "This stretch of coast on the Caspian Sea is characterized by sheltered bays and important wetlands. It provides a resting place for millions of migratory birds."
    },
    facts: {
      de: ["Umfasst das geschützte Hazar-Naturreservat.", "Wichtiger Überwinterungsort für Flamingos."],
      hu: ["Magában foglalja a védett Hazar Természetvédelmi Területet.", "Fontos telelőhely a flamingók számára."],
      ro: ["Include Rezervația Naturală protejată Hazar.", "Loc important de iernare pentru flamingo."],
      en: ["Includes the protected Hazar Nature Reserve.", "Important wintering spot for flamingos."]
    },
    descriptionAdvanced: {
      de: "Die Küste des Turkmenbashi-Golfs (auch Krasnowodsk-Golf) liegt im Westen Turkmenistans am Kaspischen Meer. Der Golf erstreckt sich über etwa 150 km Länge und ist bis zu 40 km breit. Die Stadt Turkmenbashi (früher Krasnowodsk) liegt an seiner Nordküste und ist ein wichtiger Hafen. Die Küstenlinie ist stark gegliedert mit Buchten und Halbinseln. Das Klima ist semiarid mit warmen Sommern und milden Wintern. Die Vegetation besteht aus Wüstensträuchern und Salzpflanzen. Wirtschaftlich ist der Golf von Bedeutung für die Schifffahrt, Fischerei und Ölindustrie. In den Gewässern leben Störfische, die für Kaviar bekannt sind. Die Küste ist auch ein Erholungsgebiet mit Stränden.",
      hu: "A Türkmenbaşy-öböl (Krasznovodszki-öböl) Türkmenisztán nyugati részén, a Kaszpi-tenger partján húzódik. Az öböl kb. 150 km hosszú és 40 km széles. Az északi parton fekszik Türkmenbaşy városa, az ország egyik fő kikötője. A partvonalat öblök és félszigetek tagolják. Az éghajlat száraz kontinentális, forró nyarakkal és enyhe telekkel. A növényzet sivatagi cserjékből és sótűrő növényekből áll. Gazdasági szempontból fontos a hajózás, a halászat és a kőolajipar. Az öbölben tokhalak élnek, amelyek a kaviárról híresek. A part számos stranddal rendelkezik, és üdülőhelyként szolgál.",
      ro: "Coasta Golfului Türkmenbaşy (fostul Golf Krasnovodsk) se află în vestul Turkmenistanului, la Marea Caspică. Golful are aproximativ 150 km lungime și până la 40 km lățime. Orașul Türkmenbaşy (fost Krasnovodsk) este situat pe coasta de nord și este un port major. Linia de coastă este neregulată, cu golfuri și peninsule. Clima este semiaridă, cu veri calde și ierni blânde. Vegetația include arbuști deșertici și plante halofile. Economic, golful este important pentru transport maritim, pescuit și industria petrolieră. Apele găzduiesc sturioni, renumiți pentru caviar. Coasta are plaje și este o destinație turistică locală.",
      en: "The Türkmenbaşy Gulf coast (formerly Krasnovodsk Gulf) is located in western Turkmenistan on the Caspian Sea. The gulf stretches about 150 km in length and up to 40 km in width. The city of Türkmenbaşy lies on its northern shore, serving as a major port and industrial hub. The coastline is irregular with several bays and peninsulas. The climate is semiarid, with hot summers and mild winters. Vegetation is sparse, consisting of desert shrubs and salt-tolerant plants. The gulf supports shipping, fishing, and offshore oil extraction. Sturgeon species in these waters produce caviar. The coast has sandy beaches used for recreation.",
    },
    factsAdvanced: {
      de: ["Die Länge des Golfs beträgt etwa 150 km.", "Die maximale Breite beträgt 40 km.", "Die Stadt Turkmenbashi hat etwa 100.000 Einwohner.", "Die Wassertiefe beträgt durchschnittlich 10–15 m.", "Der Hafen von Turkmenbashi wickelt 80 % des turkmenischen Seehandels ab.", "Die Wassertemperatur erreicht im Sommer bis zu 28 °C."],
      hu: ["Az öböl hossza kb. 150 km.", "Maximális szélessége 40 km.", "Türkmenbaşy városának lakossága kb. 100 000 fő.", "Az átlagos vízmélység 10-15 m.", "A kikötő kezeli Türkmenisztán tengeri kereskedelmének 80%-át.", "A nyári vízhőmérséklet eléri a 28 °C-ot."],
      ro: ["Lungimea golfului: aproximativ 150 km.", "Lățimea maximă: 40 km.", "Populația orașului Türkmenbaşy: ~100.000 locuitori.", "Adâncimea medie: 10-15 m.", "Portul Turkmenbaşy gestionează 80% din comerțul maritim al țării.", "Temperatura apei vara: până la 28°C."],
      en: ["Gulf length: approximately 150 km.", "Maximum width: 40 km.", "Population of Türkmenbaşy: ~100,000.", "Average water depth: 10–15 m.", "Port handles 80% of Turkmenistan's maritime trade.", "Summer water temperature up to 28°C."],
    },
  }
,
  {
    id: "turkmenistan-gyzyl-gaya-relief-v2",
    type: "valley",
    name: { de: "Gyzyl-Gaya Schluchten", hu: "Gyzyl-Gaya kanyonok", ro: "Canyoanele Gyzyl-Gaya", en: "Gyzyl-Gaya Canyons" },
    coordinates: { lat: 40.0167, lng: 55.4833 },
    description: {
      de: "Diese markanten roten Felsformationen befinden sich im Nordwesten Turkmenistans. Sie zeichnen sich durch ihre tiefen Erosionseinschnitte und leuchtenden Farbtöne aus.",
      hu: "Ezek a jellegzetes vörös sziklaalakzatok Türkmenisztán északnyugati részén találhatók. Mély eróziós bevágások és élénk színek jellemzik a tájat.",
      ro: "Aceste formațiuni stâncoase roșii distinctive sunt situate în nord-vestul Turkmenistanului. Se caracterizează prin tăieturi adânci de eroziune și nuanțe vii.",
      en: "These striking red rock formations are located in northwestern Turkmenistan. They are characterized by deep erosional cuts and vibrant hues.",
    },
    facts: {
      de: ["Die Felsen bestehen aus Sedimentgestein mit hohem Eisenoxidgehalt.", "Die Region liegt in der Nähe der Stadt Gyzylgaya im Balkan-Distrikt.", "Erosion durch Wind und Wasser schuf die heutige zerklüftete Form.", "Das Gebiet ist ein wichtiges geologisches Forschungsfeld für Kreideablagerungen."],
      hu: ["A sziklák magas vas-oxid tartalmú üledékes kőzetből állnak.", "A régió a Balkan tartományban, Gyzylgaya városának közelében fekszik.", "A szél és a víz eróziója alakította ki a mai tagolt formákat.", "A terület a kréta kori lerakódások fontos geológiai kutatóhelye."],
      ro: ["Stâncile sunt compuse din roci sedimentare cu conținut ridicat de oxid de fier.", "Regiunea este situată lângă orașul Gyzylgaya din districtul Balkan.", "Eroziunea vântului și a apei a creat forma accidentată de astăzi.", "Zona este un câmp important de cercetare geologică pentru depozitele cretacice."],
      en: ["The rocks consist of sedimentary stone with high iron oxide content.", "The region is located near the town of Gyzylgaya in Balkan district.", "Wind and water erosion created the current jagged topographic form.", "The area is an important geological research field for Cretaceous deposits."],
    },
    imageHint: "Red sedimentary canyons of Gyzyl-Gaya under blue sky",
  },
  {
    id: "turkmenistan-misrian-plateau-relief-v2",
    type: "landmark",
    name: { de: "Misrian-Plateau", hu: "Miszrián-fennsík", ro: "Podișul Misrian", en: "Misrian Plateau" },
    coordinates: { lat: 38.3121, lng: 54.6122 },
    description: {
      de: "Dieses aride Plateau im Südwesten Turkmenistans ist eine karge Ebene mit historischer Bedeutung. Es bildet eine natürliche Terrasse zwischen den Bergen und dem Meer.",
      hu: "Ez a délnyugat-türkmenisztáni száraz fennsík egy történelmi jelentőségű kopár síkság. Természetes teraszt alkot a hegyek és a tenger között.",
      ro: "Acest podiș arid din sud-vestul Turkmenistanului este o câmpie stearpă cu importanță istorică. Formează o terasă naturală între munți și mare.",
      en: "This arid plateau in southwestern Turkmenistan is a barren plain with historical significance. It forms a natural terrace between the mountains and the sea.",
    },
    facts: {
      de: ["Das Plateau ist Teil der größeren Misrian-Ebene im Balkan-Distrikt.", "Das Klima ist extrem trocken, was die Vegetation auf Wüstensträucher begrenzt.", "Das Gebiet beherbergt die Überreste der antiken Stadt Dehistan.", "Die Bodenstruktur besteht hauptsächlich aus sandigem Lehm und Kalkstein."],
      hu: ["A fennsík a Balkan tartományban található nagyobb Miszrián-síkság része.", "Az éghajlat rendkívül száraz, a növényzet sivatagi cserjékre korlátozódik.", "A területen találhatók az ősi Dehisztán városának maradványai.", "A talajszerkezet főként homokos agyagból és mészkőből áll."],
      ro: ["Podișul face parte din câmpia mai mare Misrian din districtul Balkan.", "Climatul este extrem de uscat, limitând vegetația la arbuști de deșert.", "Zona găzduiește rămășițele orașului antic Dehistan.", "Structura solului constă în principal din lut nisipos și calcar."],
      en: ["The plateau is part of the larger Misrian Plain in the Balkan district.", "The climate is extremely dry, limiting vegetation to desert shrubs.", "The area hosts the remains of the ancient city of Dehistan.", "The soil structure consists primarily of sandy loam and limestone."],
    },
    imageHint: "Arid Misrian Plateau landscape with distant ruins",
  },
  {
    id: "turkmenistan-ak-gaya-cliffs-relief-v2",
    type: "landmark",
    name: { de: "Ak-Gaya Klippen", hu: "Ak-Gaya sziklák", ro: "Falezele Ak-Gaya", en: "Ak-Gaya Cliffs" },
    coordinates: { lat: 40.2333, lng: 55.2667 },
    description: {
      de: "Diese strahlend weißen Kalksteinklippen bieten einen starken Kontrast zur umliegenden Wüstenlandschaft. Sie liegen am Rande des Karabogasgol-Beckens.",
      hu: "Ezek a vakítóan fehér mészkősziklák erős kontrasztot alkotnak a környező sivatagi tájjal. A Karabogas-gol medencéjének szélén találhatók.",
      ro: "Aceste faleze de calcar de un alb strălucitor oferă un contrast puternic cu peisajul deșertic din jur. Se află la marginea bazinului Garabogazköl.",
      en: "These brilliant white limestone cliffs provide a sharp contrast to the surrounding desert landscape. They are situated at the edge of the Garabogazköl basin.",
    },
    facts: {
      de: ["Der Name 'Ak-Gaya' bedeutet übersetzt 'Weißer Fels'.", "Die Klippen entstanden durch Rückzug des Urmeeres Tethys.", "Man findet hier oft fossile Überreste von Meereslebewesen aus der Kreidezeit.", "Die Formationen erstrecken sich über mehrere Kilometer entlang einer Abbruchkante."],
      hu: ["Az 'Ak-Gaya' név fordítása 'Fehér szikla'.", "A sziklák az egykori Tethys-óceán visszahúzódása során jöttek létre.", "Gyakran találnak itt kréta kori tengeri élőlények fosszilis maradványait.", "A formációk több kilométer hosszan húzódnak egy törésvonal mentén."],
      ro: ["Numele 'Ak-Gaya' se traduce prin 'Stânca Albă'.", "Falezele s-au format prin retragerea oceanului primordial Tethys.", "Aici se găsesc adesea resturi fosile de creaturi marine din perioada cretacică.", "Formațiunile se întind pe câțiva kilometri de-a lungul unei margini de ruptură."],
      en: ["The name 'Ak-Gaya' translates from Turkmen as 'White Rock'.", "The cliffs were formed by the retreat of the ancient Tethys Ocean.", "Fossilized remains of Cretaceous marine life are frequently found here.", "The formations extend for several kilometers along a major fault scarp."],
    },
    imageHint: "White limestone cliffs of Ak-Gaya in Turkmenistan",
  },
  {
    id: "turkmenistan-kara-shor-depression-relief-v2",
    type: "valley",
    name: { de: "Kara-Shor-Senke", hu: "Kara-Shor-mélyföld", ro: "Depresiunea Kara-Shor", en: "Kara-Shor Depression" },
    coordinates: { lat: 40.35, lng: 58.2167 },
    description: {
      de: "Die Kara-Shor-Senke ist ein tief liegendes Becken in der zentralen Karakum-Wüste. Sie ist heute der Standort für den künstlichen Altyn-Asyr-See.",
      hu: "A Kara-Shor-mélyföld egy mélyen fekvő medence a központi Karakum-sivatagban. Ma itt található a mesterséges Altyn Asyr-tó.",
      ro: "Depresiunea Kara-Shor este un bazin situat la joasă altitudine în deșertul Karakum central. Astăzi este locul lacului artificial Altyn Asyr.",
      en: "The Kara-Shor Depression is a low-lying basin in the central Karakum Desert. It is now the site for the artificial Altyn Asyr Lake.",
    },
    facts: {
      de: ["Die Senke liegt etwa 28 Meter unter dem Meeresspiegel.", "Sie erstreckt sich über eine Länge von etwa 120 Kilometern.", "Ursprünglich war sie eine natürliche Salzpfanne (Shor) ohne Abfluss.", "Sie dient nun als Sammelbecken für landwirtschaftliche Abwässer."],
      hu: ["A mélyföld körülbelül 28 méterrel fekszik a tengerszint alatt.", "Hosszúsága megközelítőleg 120 kilométer.", "Eredetileg egy lefolyástalan természetes szikes medence (shor) volt.", "Jelenleg a mezőgazdasági elfolyó vizek gyűjtőmedencéjeként szolgál."],
      ro: ["Depresiunea se află la aproximativ 28 de metri sub nivelul mării.", "Se întinde pe o lungime de aproximativ 120 de kilometri.", "Inițial a fost o depresiune salină naturală (shor) fără scurgere.", "Acum servește ca bazin de colectare pentru apele reziduale agricole."],
      en: ["The depression sits about 28 meters below sea level at its lowest point.", "It extends for a total length of approximately 120 kilometers.", "Originally, it was a natural endorheic salt flat known as a shor.", "It now serves as the main reservoir for agricultural drainage waters."],
    },
    imageHint: "Large arid depression Kara-Shor with distant water",
  },
  {
    id: "turkmenistan-tuerkhir-plateau-relief-v2",
    type: "landmark",
    name: { de: "Tuerkhir-Plateau", hu: "Tuerkhir-fennsík", ro: "Podișul Tuerkhir", en: "Tuerkhir Plateau" },
    coordinates: { lat: 41.25, lng: 54.55 },
    description: {
      de: "Dieses Plateau liegt im Norden Turkmenistans nahe der Grenze zu Usbekistan. Es ist ein Teil der größeren Ustyurt-Struktur und besitzt steile Ränder.",
      hu: "Ez a fennsík Észak-Türkmenisztánban, az üzbég határ közelében található. A nagyobb Usztyurt-szerkezet része, meredek peremekkel.",
      ro: "Acest podiș este situat în nordul Turkmenistanului, lângă granița cu Uzbekistanul. Face parte din structura mai mare Ustyurt și are margini abrupte.",
      en: "This plateau is located in northern Turkmenistan near the border with Uzbekistan. It is a part of the larger Ustyurt structure and features steep edges.",
    },
    facts: {
      de: ["Das Plateau erreicht Höhen von bis zu 250 Metern über dem Umland.", "Die Oberfläche ist extrem steinig und weist kaum Oberflächenwasser auf.", "Die Kanten des Plateaus werden lokal als 'Chink' bezeichnet.", "Es ist ein wichtiger Lebensraum für die seltene Urial-Wildschafe."],
      hu: ["A fennsík magassága eléri a 250 métert a környező terület felett.", "Felszíne rendkívül köves, és szinte alig található rajta felszíni víz.", "A fennsík peremeit helyileg 'csink'-nek nevezik.", "Fontos élőhelye a ritka arkal vadjuhoknak."],
      ro: ["Podișul atinge înălțimi de până la 250 de metri deasupra zonei înconjurătoare.", "Suprafața este extrem de pietroasă și are foarte puțină apă de suprafață.", "Marginile podișului sunt denumite local 'chink'.", "Este un habitat important pentru oile sălbatice rare Urial."],
      en: ["The plateau reaches elevations of up to 250 meters above the surrounding land.", "The surface is extremely stony with almost no permanent surface water.", "The steep edges of the plateau are locally referred to as a 'chink'.", "It is a critical habitat for the rare Urial wild sheep population."],
    },
    imageHint: "Rocky plateau edge Tuerkhir under desert sun",
  },
  {
    id: "turkmenistan-erbent-dunes-relief-v2",
    type: "landmark",
    name: { de: "Erbent-Sanddünen", hu: "Erbent-homokdűnék", ro: "Dunele de nisip Erbent", en: "Erbent Sand Dunes" },
    coordinates: { lat: 39.3167, lng: 58.6167 },
    description: {
      de: "Diese massiven Wanderdünen umgeben die Oasensiedlung Erbent im Herzen der Karakum-Wüste. Sie bilden ein klassisches Bild der turkmenischen Wüstenreliefs.",
      hu: "Ezek a hatalmas vándorló homokdűnék Erbent oázisát veszik körül a Karakum-sivatag szívében. A türkmenisztáni sivatagi domborzat klasszikus képét adják.",
      ro: "Aceste dune masive de nisip mișcătoare înconjoară așezarea oază Erbent în inima deșertului Karakum. Formează o imagine clasică a reliefului deșertic turkmen.",
      en: "These massive shifting sand dunes surround the Erbent oasis settlement in the heart of the Karakum Desert. They provide a classic view of Turkmen desert relief.",
    },
    facts: {
      de: ["Die Dünen können Höhen von über 20 Metern erreichen.", "Starke Winde verändern ständig die Form und Position der Sicheldünen.", "Die Region zeigt den extremen Kampf gegen die fortschreitende Desertifikation.", "In den Tälern zwischen den Dünen wachsen widerstandsfähige Saxaul-Bäume."],
      hu: ["A dűnék magassága meghaladhatja a 20 métert.", "Az erős szelek folyamatosan változtatják a dűnék alakját és helyzetét.", "A régió a sivatagosodás elleni extrém küzdelem példája.", "A dűnék közötti völgyekben ellenálló szakszaul fák nőnek."],
      ro: ["Dunele pot atinge înălțimi de peste 20 de metri.", "Vânturile puternice schimbă constant forma și poziția dunelor.", "Regiunea ilustrează lupta extremă împotriva deșertificării progresive.", "În văile dintre dune cresc arbori de saxaul rezistenți."],
      en: ["The dunes can reach heights exceeding 20 meters from the valley floor.", "Strong winds constantly alter the shape and position of the barchan dunes.", "The region showcases the extreme struggle against advancing desertification.", "Resilient saxaul trees grow in the depressions between the sand ridges."],
    },
    imageHint: "High golden sand dunes surrounding Erbent village",
  },
  {
    id: "turkmenistan-kelif-uzboy-relief-v2",
    type: "valley",
    name: { de: "Kelif-Uzboy-Tal", hu: "Kelif-Uzboy-völgy", ro: "Valea Kelif-Uzboy", en: "Kelif Uzboy Valley" },
    coordinates: { lat: 37.5833, lng: 66.0167 },
    description: {
      de: "Das Kelif-Uzboy ist ein fossiles Flusstal im Südosten Turkmenistans. Es war einst Teil eines antiken Kanalsystems, das den Amudarja mit dem Kaspischen Meer verband.",
      hu: "A Kelif-Uzboy egy fosszilis folyóvölgy Türkmenisztán délkeleti részén. Valaha egy ősi csatornarendszer része volt, amely az Amu-darját kötötte össze a Kaszpi-tengerrel.",
      ro: "Kelif-Uzboy este o vale fluvială fosilă în sud-estul Turkmenistanului. A fost odată parte a unui sistem antic de canale care lega Amu Darya de Marea Caspică.",
      en: "Kelif Uzboy is a fossil river valley in southeastern Turkmenistan. It was once part of an ancient canal system connecting the Amu Darya to the Caspian Sea.",
    },
    facts: {
      de: ["Das Tal erstreckt sich über Hunderte von Kilometern durch die Wüste.", "Heute beherbergt es eine Kette von Seen, die durch Drainage entstehen.", "Es ist ein wichtiges Überwinterungsgebiet für wandernde Wasservögel.", "Das Relief ist durch steile Uferwände und flache Becken geprägt."],
      hu: ["A völgy több száz kilométer hosszan húzódik keresztül a sivatagon.", "Ma tavak láncolatának ad otthont, amelyeket a csatornavizek táplálnak.", "Fontos telelőhelye a vándorló vízimadaraknak.", "A domborzatot meredek partfalak és lapos medencék jellemzik."],
      ro: ["Valea se întinde pe sute de kilometri prin deșert.", "Astăzi găzduiește un lanț de lacuri formate prin drenaj.", "Este o zonă importantă de iernare pentru păsările migratoare de apă.", "Relieful este marcat de maluri abrupte și bazine plate."],
      en: ["The valley stretches for hundreds of kilometers across the desert landscape.", "Today it hosts a chain of lakes formed by agricultural drainage water.", "It serves as a vital wintering ground for various migratory waterbirds.", "The relief is characterized by steep banks and shallow basin depressions."],
    },
    imageHint: "Dry fossil riverbed with occasional lakes in Kelif Uzboy",
  },
  {
    id: "turkmenistan-mount-shahshah-relief-v2",
    type: "peak",
    name: { de: "Berg Schahschah", hu: "Shahshah-hegy", ro: "Muntele Shahshah", en: "Mount Shahshah" },
    coordinates: { lat: 37.8667, lng: 58.1167 },
    description: {
      de: "Der Berg Shahshah liegt im zentralen Teil des Kopet-Dag-Gebirges. Er zeichnet sich durch seine zerklüfteten Kalksteinformationen und tiefen Schluchten aus.",
      hu: "A Shahshah-hegy a Kopet-dag központi részén található. Tagolt mészkőformációk és mély szurdokok jellemzik.",
      ro: "Muntele Shahshah este situat în partea centrală a munților Kopet Dag. Se remarcă prin formațiunile sale calcaroase accidentate și cheile adânci.",
      en: "Mount Shahshah is located in the central part of the Kopet Dag range. It is distinguished by its rugged limestone formations and deep gorges.",
    },
    facts: {
      de: ["Der Berg erreicht eine Höhe von über 2.000 Metern.", "Er ist von zahlreichen Karsthöhlen und unterirdischen Wasserläufen durchzogen.", "Die Flora umfasst viele endemische Arten, die nur in diesem Gebirge vorkommen.", "Früher verliefen wichtige Handelswege durch die Pässe nahe diesem Gipfel."],
      hu: ["A hegy magassága meghaladja a 2000 métert.", "Számos karsztbarlang és föld alatti vízfolyás hálózza be.", "Flórája sok endemikus fajt tartalmaz, amelyek csak itt élnek.", "Korábban fontos kereskedelmi útvonalak haladtak át a csúcs közeli hágókon."],
      ro: ["Muntele atinge o înălțime de peste 2.000 de metri.", "Este străbătut de numeroase peșteri carstice și cursuri de apă subterane.", "Flora include multe specii endemice care se găsesc doar în acești munți.", "În trecut, rute comerciale importante treceau prin pasurile de lângă acest vârf."],
      en: ["The mountain reaches an elevation of more than 2,000 meters.", "It is honeycombed with numerous karst caves and underground waterways.", "The flora includes many endemic species found only in the Kopet Dag range.", "Important trade routes formerly traversed the mountain passes near this peak."],
    },
    imageHint: "Rugged limestone slopes of Mount Shahshah",
  },
  {
    id: "turkmenistan-gaurdak-karst-relief-v2",
    type: "landmark",
    name: { de: "Gaurdak-Hochland", hu: "Gaurdak-fennsík", ro: "Podișul Gaurdak", en: "Gaurdak Highlands" },
    coordinates: { lat: 37.8167, lng: 66.4333 },
    description: {
      de: "Dieses Hochland im äußersten Osten Turkmenistans ist für seine spektakulären Karstlandschaften bekannt. Es beherbergt riesige Gipsvorkommen und Höhlensysteme.",
      hu: "Ez a Türkmenisztán távoli keleti részén fekvő fennsík látványos karsztvidékéről ismert. Hatalmas gipszkészleteknek és barlangrendszereknek ad otthont.",
      ro: "Acest podiș din extremul est al Turkmenistanului este cunoscut pentru peisajele sale carstice spectaculoase. Găzduiește depozite uriașe de ghips și sisteme de peșteri.",
      en: "These highlands in extreme eastern Turkmenistan are famous for their spectacular karst landscapes. They host massive gypsum deposits and cave systems.",
    },
    facts: {
      de: ["Die Region ist Teil der westlichen Ausläufer des Hissar-Gebirges.", "Die Stadt Magdanly (ehemals Gaurdak) ist das Zentrum des Bergbaus hier.", "Die Kap-Kutan-Höhle ist eine der längsten Gipshöhlen der Welt.", "Man findet hier bizarre Gipsnadeln und Erosionssäulen."],
      hu: ["A régió a Hisszar-hegység nyugati nyúlványainak része.", "Magdanly városa (korábban Gaurdak) a helyi bányászat központja.", "A Kap-Kutan barlang a világ egyik leghosszabb gipszbarlangja.", "Bizarr gipsztűk és eróziós oszlopok találhatók a területen."],
      ro: ["Regiunea face parte din poalele vestice ale munților Hissar.", "Orașul Magdanly (fostul Gaurdak) este centrul minier al acestei zone.", "Peștera Kap-Kutan este una dintre cele mai lungi peșteri de ghips din lume.", "Aici pot fi găsite ace de ghips bizare și coloane de eroziune."],
      en: ["The region is part of the western foothills of the Hissar mountain range.", "The town of Magdanly (formerly Gaurdak) is the local mining hub.", "Kap-Kutan cave is among the longest gypsum caves in the entire world.", "The area features bizarre gypsum needles and distinctive erosion pillars."],
    },
    imageHint: "Bizarre karst rock formations in the Gaurdak Highlands",
  },
  {
    id: "turkmenistan-gezgyadyk-pass-relief-v2",
    type: "landmark",
    name: { de: "Gezgyadyk-Pass", hu: "Gezgyadyk-hágó", ro: "Pasul Gezgyadyk", en: "Gezgyadyk Pass" },
    coordinates: { lat: 38.0333, lng: 57.1667 },
    description: {
      de: "Der Gezgyadyk-Pass ist ein strategisch wichtiger Übergang im Kopet-Dag-Gebirge. Er verbindet die Küstenebene mit den inneren Hochtälern des Gebirges.",
      hu: "A Gezgyadyk-hágó stratégiai fontosságú átkelőhely a Kopet-dag hegységben. Összeköti a tengerparti síkságot a hegység belső magashegyi völgyeivel.",
      ro: "Pasul Gezgyadyk este o trecătoare strategică importantă în munții Kopet Dag. Conectează câmpia de coastă cu văile înalte interioare ale munților.",
      en: "Gezgyadyk Pass is a strategically important mountain pass in the Kopet Dag range. It connects the coastal plain with the interior high valleys of the range.",
    },
    facts: {
      de: ["Der Pass liegt auf einer Höhe von etwa 1.400 Metern.", "Er wurde historisch von Karawanen auf dem Weg nach Persien genutzt.", "Die Umgebung ist durch steile Felswände und Schutthalden geprägt.", "Im Winter kann der Pass durch Schneefall unpassierbar werden."],
      hu: ["A hágó körülbelül 1400 méteres magasságban található.", "Történelmileg a Perzsia felé tartó karavánok használták.", "A környezetet meredek sziklafalak és törmeléklejtők jellemzik.", "Télen a hágó a hóesés miatt járhatatlanná válhat."],
      ro: ["Pasul este situat la o altitudine de aproximativ 1.400 de metri.", "A fost folosit istoric de caravanele aflate în drum spre Persia.", "Împrejurimile sunt marcate de pereți stâncoși abrupți și grohotișuri.", "Iarna, trecătoarea poate deveni impracticabilă din cauza ninsorilor."],
      en: ["The pass is situated at an elevation of approximately 1,400 meters.", "It was historically used by caravans traveling toward Persia.", "The surroundings are characterized by steep rock faces and scree slopes.", "During winter, the pass can become impassable due to heavy snowfall."],
    },
    imageHint: "Winding road through the steep Gezgyadyk mountain pass",
  },
  {
    id: "turkmenistan-khorezm-lowland-relief-v2",
    type: "valley",
    name: { de: "Khorezm-Niederung", hu: "Horezm-alföld", ro: "Câmpia Khorezm", en: "Khorezm Lowland" },
    coordinates: { lat: 41.8333, lng: 59.8333 },
    description: {
      de: "Die Khorezm-Niederung ist eine fruchtbare Schwemmlandebene im Norden Turkmenistans entlang des Amudarja. Sie bildet eine grüne Oase inmitten der Wüste.",
      hu: "A Horezm-alföld egy termékeny hordaléksíkság Észak-Türkmenisztánban, az Amu-darja mentén. Zöld oázist alkot a sivatag közepén.",
      ro: "Câmpia Khorezm este o câmpie aluvială fertilă în nordul Turkmenistanului, de-a lungul râului Amu Darya. Formează o oază verde în mijlocul deșertului.",
      en: "The Khorezm Lowland is a fertile alluvial plain in northern Turkmenistan along the Amu Darya. It forms a green oasis in the middle of the desert.",
    },
    facts: {
      de: ["Das Relief ist sehr flach mit zahlreichen Bewässerungskanälen.", "Die Region ist das historische Zentrum der choresmischen Zivilisation.", "Der Boden besteht aus fruchtbarem Löss und Flusssedimenten.", "Sie liegt am südlichen Rand des ehemaligen Aralsee-Beckens."],
      hu: ["A domborzat nagyon sík, számos öntözőcsatornával átszőve.", "A régió a horezmi civilizáció történelmi központja.", "A talaj termékeny löszből és folyami üledékekből áll.", "Az egykori Aral-tó medencéjének déli peremén fekszik."],
      ro: ["Relieful este foarte plat, cu numeroase canale de irigații.", "Regiunea este centrul istoric al civilizației horezmiene.", "Solul constă din loess fertil și sedimente fluviale.", "Se află la marginea sudică a fostului bazin al Mării Aral."],
      en: ["The relief is extremely flat and interlaced with irrigation canals.", "The region is the historical heartland of the Khorezmian civilization.", "The soil consists of fertile loess and river-borne sediments.", "It is located at the southern margin of the former Aral Sea basin."],
    },
    imageHint: "Flat green agricultural lowland of Khorezm",
  }
];
