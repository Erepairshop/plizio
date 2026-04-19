import type { POI } from "./poi";

export const spainCountry: POI[] = [
  {
    id: "ES",
    type: "country",
    parent: "EU",
    coords: [-3.7, 40.4],
    name: {"de": "Spanien", "hu": "Spanyolország", "ro": "Spania", "en": "Spain"},
    image: "/geo-images/spain/spain.webp",
    description: {"de": "Land in Südwesteuropa auf der Iberischen Halbinsel, bekannt für seine Kultur, Strände und Geschichte.", "hu": "Délnyugat-európai ország az Ibériai-félszigeten, amely kultúrájáról, strandjairól és történelméről ismert.", "ro": "Țară din sud-vestul Europei, în Peninsula Iberică, cunoscută pentru cultură, plaje și istorie.", "en": "Country in southwestern Europe on the Iberian Peninsula, known for its culture, beaches, and history."},
    facts: {"de": ["Hauptstadt: Madrid.", "Einwohner: ca. 48 Millionen.", "Währung: Euro."], "hu": ["Főváros: Madrid.", "Népesség: kb. 48 millió.", "Pénznem: Euró."], "ro": ["Capitala: Madrid.", "Populație: aprox. 48 milioane.", "Monedă: Euro."], "en": ["Capital: Madrid.", "Population: approx. 48 million.", "Currency: Euro."]}
  }
];

export const spainRegions: POI[] = [
  {
    id: "ES-GA",
    type: "region",
    parent: "ES",
    coords: [-8.0, 42.5],
    name: {"de": "Galicien", "hu": "Galícia", "ro": "Galicia", "en": "Galicia"},
    image: "/geo-images/spain/galicia.webp",
    description: {"de": "Autonome Gemeinschaft im Nordwesten Spaniens.", "hu": "Autonóm közösség Spanyolország északnyugati részén.", "ro": "Comunitate autonomă în nord-vestul Spaniei.", "en": "Autonomous community in northwestern Spain."}
  },
  {
    id: "ES-AS",
    type: "region",
    parent: "ES",
    coords: [-6.0, 43.3],
    name: {"de": "Asturien", "hu": "Asztúria", "ro": "Asturia", "en": "Asturias"},
    image: "/geo-images/spain/asturias.webp",
    description: {"de": "Grüne und gebirgige Region im Norden Spaniens.", "hu": "Zöld és hegyvidéki régió Észak-Spanyolországban.", "ro": "Regiune verde și muntoasă din nordul Spaniei.", "en": "Green and mountainous region in northern Spain."}
  },
  {
    id: "ES-CB",
    type: "region",
    parent: "ES",
    coords: [-4.0, 43.2],
    name: {"de": "Kantabrien", "hu": "Kantábria", "ro": "Cantabria", "en": "Cantabria"},
    image: "/geo-images/spain/cantabria.webp",
    description: {"de": "Region an der Nordküste Spaniens mit reicher prähistorischer Kunst.", "hu": "Régió Spanyolország északi partján, gazdag őskori művészettel.", "ro": "Regiune pe coasta de nord a Spaniei cu artă preistorică bogată.", "en": "Region on the northern coast of Spain with rich prehistoric art."}
  },
  {
    id: "ES-PV",
    type: "region",
    parent: "ES",
    coords: [-2.5, 43.0],
    name: {"de": "Baskenland", "hu": "Baszkföld", "ro": "Țara Bascilor", "en": "Basque Country"},
    image: "/geo-images/spain/basque-country.webp",
    description: {"de": "Region mit eigener Sprache und Kultur im Norden Spaniens.", "hu": "Saját nyelvvel és kultúrával rendelkező régió Észak-Spanyolországban.", "ro": "Regiune cu limbă și cultură proprie în nordul Spaniei.", "en": "Region with its own language and culture in northern Spain."}
  },
  {
    id: "ES-NC",
    type: "region",
    parent: "ES",
    coords: [-1.5, 42.8],
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    image: "/geo-images/spain/navarre.webp",
    description: {"de": "Autonome Gemeinschaft im Norden, bekannt für das San Fermín-Fest.", "hu": "Északi autonóm közösség, amely a San Fermín fesztiválról ismert.", "ro": "Comunitate autonomă în nord, cunoscută pentru festivalul San Fermín.", "en": "Autonomous community in the north, known for the San Fermín festival."}
  },
  {
    id: "ES-RI",
    type: "region",
    parent: "ES",
    coords: [-2.5, 42.3],
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    image: "/geo-images/spain/la-rioja.webp",
    description: {"de": "Kleine Region, die weltweit für ihren Wein berühmt ist.", "hu": "Kis régió, amely világhírű a boráról.", "ro": "Regiune mică faimoasă în lume pentru vinul său.", "en": "Small region world-famous for its wine."}
  },
  {
    id: "ES-AR",
    type: "region",
    parent: "ES",
    coords: [-0.5, 41.5],
    name: {"de": "Aragonien", "hu": "Aragónia", "ro": "Aragon", "en": "Aragon"},
    image: "/geo-images/spain/aragon.webp",
    description: {"de": "Binnenlandregion in Nordostspanien mit vielfältiger Landschaft.", "hu": "Belföldi régió Északkelet-Spanyolországban változatos tájakkal.", "ro": "Regiune interioară în nord-estul Spaniei cu peisaje diverse.", "en": "Inland region in northeastern Spain with diverse landscapes."}
  },
  {
    id: "ES-CT",
    type: "region",
    parent: "ES",
    coords: [1.5, 41.5],
    name: {"de": "Katalonien", "hu": "Katalónia", "ro": "Catalonia", "en": "Catalonia"},
    image: "/geo-images/spain/catalonia.webp",
    description: {"de": "Region im Nordosten mit starker Identität und eigener Sprache.", "hu": "Északkeleti régió erős identitással és saját nyelvvel.", "ro": "Regiune în nord-est cu o identitate puternică și limbă proprie.", "en": "Region in the northeast with a strong identity and its own language."}
  },
  {
    id: "ES-CL",
    type: "region",
    parent: "ES",
    coords: [-4.5, 41.5],
    name: {"de": "Kastilien und León", "hu": "Kasztília és León", "ro": "Castilia și León", "en": "Castile and León"},
    image: "/geo-images/spain/castile-and-le-n.webp",
    description: {"de": "Die größte autonome Gemeinschaft Spaniens.", "hu": "Spanyolország legnagyobb autonóm közössége.", "ro": "Cea mai mare comunitate autonomă din Spania.", "en": "The largest autonomous community in Spain."}
  },
  {
    id: "ES-MD",
    type: "region",
    parent: "ES",
    coords: [-3.7, 40.5],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    image: "/geo-images/spain/madrid.webp",
    description: {"de": "Die Hauptstadtregion und das wirtschaftliche Zentrum Spaniens.", "hu": "Spanyolország fővárosi régiója és gazdasági központja.", "ro": "Regiunea capitalei și centrul economic al Spaniei.", "en": "The capital region and economic center of Spain."}
  },
  {
    id: "ES-CM",
    type: "region",
    parent: "ES",
    coords: [-3.0, 39.5],
    name: {"de": "Kastilien-La Mancha", "hu": "Kasztília-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    image: "/geo-images/spain/castilla-la-mancha.webp",
    description: {"de": "Zentralspanische Region, bekannt für Don Quijote.", "hu": "Közép-spanyolországi régió, Don Quijote hazája.", "ro": "Regiune centrală a Spaniei, cunoscută pentru Don Quijote.", "en": "Central Spanish region, famous for Don Quixote."}
  },
  {
    id: "ES-EX",
    type: "region",
    parent: "ES",
    coords: [-6.0, 39.5],
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    image: "/geo-images/spain/extremadura.webp",
    description: {"de": "Region im Westen Spaniens mit reichem römischen Erbe.", "hu": "Spanyolország nyugati régiója, gazdag római örökséggel.", "ro": "Regiune din vestul Spaniei cu o bogată moștenire romană.", "en": "Region in western Spain with rich Roman heritage."}
  },
  {
    id: "ES-VC",
    type: "region",
    parent: "ES",
    coords: [-0.5, 39.5],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    image: "/geo-images/spain/valencian-community.webp",
    description: {"de": "Küstenregion im Osten, bekannt für Paella.", "hu": "Keleti parti régió, a paella hazája.", "ro": "Regiune de coastă în est, cunoscută pentru paella.", "en": "Coastal region in the east, known for paella."}
  },
  {
    id: "ES-AN",
    type: "region",
    parent: "ES",
    coords: [-4.5, 37.5],
    name: {"de": "Andalusien", "hu": "Andalúzia", "ro": "Andaluzia", "en": "Andalusia"},
    image: "/geo-images/spain/andalusia.webp",
    description: {"de": "Südlichste Region mit maurischer Architektur und Flamenco.", "hu": "A legdélibb régió, mór építészettel és flamencóval.", "ro": "Cea mai sudică regiune, cu arhitectură maură și flamenco.", "en": "Southernmost region with Moorish architecture and flamenco."}
  },
  {
    id: "ES-MU",
    type: "region",
    parent: "ES",
    coords: [-1.5, 38.0],
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    image: "/geo-images/spain/murcia.webp",
    description: {"de": "Region im Südosten, bekannt für Landwirtschaft und Strände.", "hu": "Délkeleti régió, mezőgazdaságáról és strandjairól ismert.", "ro": "Regiune în sud-est, cunoscută pentru agricultură și plaje.", "en": "Southeastern region, known for agriculture and beaches."}
  },
  {
    id: "ES-IB",
    type: "region",
    parent: "ES",
    coords: [3.0, 39.5],
    name: {"de": "Balearen", "hu": "Baleár-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    image: "/geo-images/spain/balearic-islands.webp",
    description: {"de": "Inselgruppe im Mittelmeer.", "hu": "Szigetcsoport a Földközi-tengeren.", "ro": "Arhipelag în Marea Mediterană.", "en": "Archipelago in the Mediterranean Sea."}
  },
  {
    id: "ES-CN",
    type: "region",
    parent: "ES",
    coords: [-15.5, 28.0],
    name: {"de": "Kanarische Inseln", "hu": "Kanári-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    image: "/geo-images/spain/canary-islands.webp",
    description: {"de": "Inselgruppe im Atlantischen Ozean vor der Küste Afrikas.", "hu": "Szigetcsoport az Atlanti-óceánban Afrika partjainál.", "ro": "Arhipelag în Oceanul Atlantic în largul coastei Africii.", "en": "Archipelago in the Atlantic Ocean off the coast of Africa."}
  }
];

export const spainCities: POI[] = [
  {
    id: "es-madrid", type: "city", parent: "ES-MD", coords: [-3.7038, 40.4168],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    
    description: {
          "de": "Madrid ist die pulsierende Hauptstadt Spaniens und liegt im Herzen der Iberischen Halbinsel. Die Stadt ist weltberühmt für ihre reiche Kunstgeschichte, insbesondere für den Paseo del Arte mit seinen erstklassigen Museen. Madrid bietet eine perfekte Mischung aus historischer Architektur, wie dem prachtvollen Königspalast, und modernem urbanen Leben. Die lebendigen Plätze, wie die Puerta del Sol und die Plaza Mayor, sind das Zentrum des gesellschaftlichen Lebens. Besucher lieben die Stadt auch für ihre authentische Tapas-Kultur und das aufregende Nachtleben.",
          "hu": "Madrid Spanyolország lüktető fővárosa, amely az Ibériai-félsziget szívében fekszik. A város világszerte ismert gazdag művészettörténetéről, különösen a Paseo del Arte kiváló múzeumairól. Madrid a történelmi építészet, például a pompás Királyi Palota és a modern városi élet tökéletes keverékét kínálja. Az élénk terek, mint a Puerta del Sol és a Plaza Mayor, a társadalmi élet központjai. A látogatók a várost az autentikus tapas-kultúrája és az izgalmas éjszakai élete miatt is imádják.",
          "ro": "Madrid este capitala vibrantă a Spaniei, situată în inima Peninsulei Iberice. Orașul este renumit în întreaga lume pentru istoria sa bogată în artă, în special pentru Paseo del Arte cu muzeele sale de primă clasă. Madrid oferă un amestec perfect de arhitectură istorică, cum ar fi magnificul Palat Regal, și viață urbană modernă. Piețele pline de viață, cum ar fi Puerta del Sol și Plaza Mayor, sunt centrul vieții sociale. Vizitatorii iubesc orașul și pentru cultura sa autentică de tapas și viața de noapte interesantă.",
          "en": "Madrid is the vibrant capital of Spain, located in the heart of the Iberian Peninsula. The city is world-renowned for its rich art history, particularly the Paseo del Arte with its world-class museums. Madrid offers a perfect blend of historic architecture, such as the magnificent Royal Palace, and modern urban life. Lively squares like the Puerta del Sol and Plaza Mayor are the center of social life. Visitors also love the city for its authentic tapas culture and exciting nightlife."
    },
    facts: {
          "de": [
                "Es ist die drittgrößte Stadt in der Europäischen Union.",
                "Beherbergt das berühmte Museo del Prado mit Meisterwerken von Velázquez und Goya.",
                "Der Palacio Real ist der flächenmäßig größte königliche Palast in Europa.",
                "Madrid liegt auf einer Hochebene und ist die am höchsten gelegene Hauptstadt Europas.",
                "Der Retiro-Park bietet eine grüne Oase mit einem großen künstlichen See.",
                "Die Stadt ist Heimat der weltbekannten Fußballvereine Real Madrid und Atlético Madrid.",
                "Die Puerta del Sol ist der symbolische Mittelpunkt (Kilometer Null) Spaniens.",
                "Madrid hat eines der größten U-Bahn-Netze in Europa."
          ],
          "hu": [
                "Ez az Európai Unió harmadik legnagyobb városa.",
                "Itt található a híres Prado Múzeum Velázquez és Goya remekműveivel.",
                "A Palacio Real a legnagyobb alapterületű királyi palota Európában.",
                "Madrid egy fennsíkon fekszik, és Európa legmagasabban fekvő fővárosa.",
                "A Retiro park zöld oázist kínál egy nagy mesterséges tóval.",
                "A város a világhírű Real Madrid és Atlético Madrid futballklubok otthona.",
                "A Puerta del Sol Spanyolország szimbolikus középpontja (nulladik kilométerkő).",
                "Madrid rendelkezik Európa egyik legnagyobb metróhálózatával."
          ],
          "ro": [
                "Este al treilea oraș ca mărime din Uniunea Europeană.",
                "Găzduiește faimosul Muzeu Prado cu capodopere de Velázquez și Goya.",
                "Palacio Real este cel mai mare palat regal din Europa ca suprafață.",
                "Madrid este situat pe un platou și este cea mai înaltă capitală din Europa.",
                "Parcul Retiro oferă o oază de verdeață cu un mare lac artificial.",
                "Orașul este casa renumitelor cluburi de fotbal Real Madrid și Atlético Madrid.",
                "Puerta del Sol este centrul simbolic (kilometrul zero) al Spaniei.",
                "Madrid are una dintre cele mai mari rețele de metrou din Europa."
          ],
          "en": [
                "It is the third-largest city in the European Union.",
                "Houses the famous Prado Museum featuring masterpieces by Velázquez and Goya.",
                "The Palacio Real is the largest royal palace in Europe by floor area.",
                "Madrid is situated on a plateau and is the highest capital city in Europe.",
                "El Retiro Park offers a green oasis complete with a large artificial lake.",
                "The city is home to the world-renowned football clubs Real Madrid and Atlético Madrid.",
                "The Puerta del Sol is the symbolic center (Kilometer Zero) of Spain.",
                "Madrid has one of the most extensive metro networks in Europe."
          ]
    },
    image: "/geo-images/spain/madrid.webp",
    
  },
  {
    id: "es-barcelona", type: "city", parent: "ES-CT", coords: [2.1686, 41.3874],
    name: {"de": "Barcelona", "hu": "Barcelona", "ro": "Barcelona", "en": "Barcelona"},
    
    description: {
          "de": "Barcelona ist die faszinierende Hauptstadt Kataloniens und liegt direkt an der sonnigen Mittelmeerküste. Die Stadt ist ein architektonisches Wunderwerk, maßgeblich geprägt durch die unverkennbaren Werke von Antoni Gaudí. Sie vereint geschickt mittelalterliche Viertel wie das Gotische Viertel mit moderner Stadtplanung. Barcelona bietet nicht nur Weltklasse-Kultur und Kunst, sondern auch lebhafte Stadtstrände und eine exzellente Gastronomie. Diese einzigartige Kombination aus Strandleben und Metropolenflair macht sie zu einem der beliebtesten Reiseziele Europas.",
          "hu": "Barcelona Katalónia lenyűgöző fővárosa, amely közvetlenül a napfényes Földközi-tenger partján fekszik. A város építészeti csoda, amelyet jelentősen meghatároznak Antoni Gaudí összetéveszthetetlen alkotásai. Ügyesen ötvözi a középkori negyedeket, mint a Gótikus negyed, a modern várostervezéssel. Barcelona nemcsak világklasszis kultúrát és művészetet kínál, hanem nyüzsgő városi strandokat és kiváló gasztronómiát is. A tengerparti élet és a metropolisz hangulatának ez az egyedülálló kombinációja Európa egyik legnépszerűbb úti céljává teszi.",
          "ro": "Barcelona este capitala fascinantă a Cataloniei, situată chiar pe coasta însorită a Mării Mediterane. Orașul este o minune arhitecturală, influențat semnificativ de lucrările inconfundabile ale lui Antoni Gaudí. Combină cu pricepere cartierele medievale, cum ar fi Cartierul Gotic, cu planificarea urbană modernă. Barcelona oferă nu doar cultură și artă de talie mondială, ci și plaje urbane pline de viață și o gastronomie excelentă. Această combinație unică de viață la plajă și fler metropolitan o face una dintre cele mai populare destinații din Europa.",
          "en": "Barcelona is the fascinating capital of Catalonia, located right on the sunny Mediterranean coast. The city is an architectural marvel, heavily influenced by the unmistakable works of Antoni Gaudí. It cleverly combines medieval neighborhoods like the Gothic Quarter with modern urban planning. Barcelona offers not only world-class culture and art but also lively city beaches and excellent gastronomy. This unique combination of beach life and metropolitan flair makes it one of the most popular destinations in Europe."
    },
    facts: {
          "de": [
                "Berühmt für die noch unvollendete Basilika Sagrada Família von Antoni Gaudí.",
                "Der Park Güell bietet bunte Mosaike und einen tollen Blick über die Stadt.",
                "Las Ramblas ist die bekannteste Flaniermeile, die zum Hafen führt.",
                "Die Stadt hat mehrere Kilometer an künstlich angelegten Sandstränden.",
                "Das Camp Nou ist das größte Fußballstadion Europas und Heimat des FC Barcelona.",
                "Das Gotische Viertel ist eines der besterhaltenen mittelalterlichen Stadtzentren Europas.",
                "Barcelona war der stolze Gastgeber der Olympischen Sommerspiele 1992.",
                "Die katalanische Küche glänzt mit Gerichten wie Fideuà und Crema Catalana."
          ],
          "hu": [
                "Híres Antoni Gaudí még befejezetlen bazilikájáról, a Sagrada Famíliáról.",
                "A Güell park színes mozaikokat és nagyszerű kilátást kínál a városra.",
                "A Las Ramblas a legismertebb sétálóutca, amely a kikötőhöz vezet.",
                "A város több kilométernyi mesterségesen kialakított homokos stranddal rendelkezik.",
                "A Camp Nou Európa legnagyobb futballstadionja és az FC Barcelona otthona.",
                "A Gótikus negyed Európa egyik legjobb állapotban fennmaradt középkori városközpontja.",
                "Barcelona volt az 1992-es nyári olimpiai játékok büszke házigazdája.",
                "A katalán konyha olyan ételekkel jeleskedik, mint a fideuà és a crema catalana."
          ],
          "ro": [
                "Renumită pentru bazilica încă neterminată Sagrada Família a lui Antoni Gaudí.",
                "Parcul Güell oferă mozaicuri colorate și o vedere excelentă asupra orașului.",
                "Las Ramblas este cea mai faimoasă promenadă, care duce spre port.",
                "Orașul are câțiva kilometri de plaje artificiale cu nisip.",
                "Camp Nou este cel mai mare stadion de fotbal din Europa și casa FC Barcelona.",
                "Cartierul Gotic este unul dintre cele mai bine conservate centre medievale din Europa.",
                "Barcelona a fost gazda mândră a Jocurilor Olimpice de vară din 1992.",
                "Bucătăria catalană strălucește cu preparate precum fideuà și crema catalana."
          ],
          "en": [
                "Famous for Antoni Gaudí's still unfinished Sagrada Família basilica.",
                "Park Güell features colorful mosaics and great views over the city.",
                "Las Ramblas is the most famous pedestrian street leading to the port.",
                "The city boasts several kilometers of artificially created sandy beaches.",
                "Camp Nou is the largest football stadium in Europe and home to FC Barcelona.",
                "The Gothic Quarter is one of the best-preserved medieval city centers in Europe.",
                "Barcelona was the proud host of the 1992 Summer Olympic Games.",
                "Catalan cuisine shines with dishes such as fideuà and crema catalana."
          ]
    },
    image: "/geo-images/spain/barcelona.webp",
    
  },
  {
    id: "es-valencia", type: "city", parent: "ES-VC", coords: [-0.3763, 39.4699],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencia"},
    
    description: {
          "de": "Valencia ist Spaniens drittgrößte Stadt und verbindet historischen Charme auf wunderbare Weise mit futuristischer Architektur. Sie liegt an der Mittelmeerküste und profitiert von einem sonnigen Klima und ausgedehnten Sandstränden. Das weltberühmte Gericht Paella hat hier seinen Ursprung und ist fester Bestandteil der lokalen Identität. Im Herzen der Stadt verläuft der Turia-Park, ein grüner Streifen im ausgetrockneten Flussbett, der Sportler und Spaziergänger anzieht. Valencia ist auch bekannt für das spektakuläre Frühlingsfest Las Fallas, bei dem riesige Skulpturen verbrannt werden.",
          "hu": "Valencia Spanyolország harmadik legnagyobb városa, amely csodálatosan ötvözi a történelmi bájokat a futurisztikus építészettel. A Földközi-tenger partján fekszik, napos éghajlattal és kiterjedt homokos strandokkal rendelkezik. A világhírű paella étel innen származik, és a helyi identitás szerves része. A város szívében húzódik a Turia park, egy zöld sáv a kiszáradt folyómederben, amely vonzza a sportolókat és a sétálókat. Valencia ismert a látványos Las Fallas tavaszi fesztiválról is, ahol hatalmas szobrokat égetnek el.",
          "ro": "Valencia este al treilea oraș ca mărime din Spania și combină minunat farmecul istoric cu arhitectura futuristă. Este situat pe coasta Mării Mediterane și beneficiază de un climat însorit și plaje întinse cu nisip. Renumitul fel de mâncare paella este originar de aici și este o parte integrantă a identității locale. În inima orașului se află Parcul Turia, o fâșie verde în albia secată a râului, care atrage sportivi și plimbăreți. Valencia este cunoscută și pentru spectaculosul festival de primăvară Las Fallas, unde sunt arse sculpturi uriașe.",
          "en": "Valencia is Spain's third-largest city, beautifully blending historical charm with futuristic architecture. Located on the Mediterranean coast, it benefits from a sunny climate and extensive sandy beaches. The world-famous dish paella originated here and is an integral part of the local identity. In the heart of the city runs the Turia Park, a green ribbon in the dried-up riverbed that attracts athletes and walkers. Valencia is also known for the spectacular Las Fallas spring festival, where giant sculptures are burned."
    },
    facts: {
          "de": [
                "Heimat der avantgardistischen Stadt der Künste und Wissenschaften.",
                "Das historische Zentrum beherbergt die Seidenbörse La Lonja de la Seda.",
                "Die Paella Valenciana wird traditionell mit Kaninchen, Huhn und Bohnen zubereitet.",
                "Der Kathedrale von Valencia wird nachgesagt, den echten Heiligen Gral zu beherbergen.",
                "Das Oceanogràfic in Valencia ist das größte Aquarium Europas.",
                "Der Turia-Park ist mit über 9 Kilometern Länge einer der größten Stadtparks Spaniens.",
                "Das Las Fallas Fest ist als UNESCO-immaterielles Kulturerbe anerkannt.",
                "Die lebhafte Markthalle Mercado Central gilt als Meisterwerk des Modernismus."
          ],
          "hu": [
                "A futurisztikus Művészetek és Tudományok Városának otthona.",
                "A történelmi központban található a La Lonja de la Seda Selyembörze.",
                "A Paella Valenciana hagyományosan nyúllal, csirkével és babbal készül.",
                "A valenciai katedrálisról úgy tartják, hogy ott őrzik az igazi Szent Grált.",
                "A valenciai Oceanogràfic Európa legnagyobb akváriuma.",
                "A több mint 9 kilométer hosszú Turia park Spanyolország egyik legnagyobb városi parkja.",
                "A Las Fallas fesztivált az UNESCO szellemi kulturális örökségként ismeri el.",
                "A nyüzsgő Mercado Central vásárcsarnok a modernizmus remekműve."
          ],
          "ro": [
                "Găzduiește avangardistul Oraș al Artelor și Științelor.",
                "Centrul istoric adăpostește Bursa de Mătase La Lonja de la Seda.",
                "Paella Valenciana este preparată tradițional cu iepure, pui și fasole.",
                "Se spune că Catedrala din Valencia adăpostește adevăratul Sfânt Graal.",
                "Oceanogràfic din Valencia este cel mai mare acvariu din Europa.",
                "Cu o lungime de peste 9 kilometri, Parcul Turia este unul dintre cele mai mari parcuri urbane din Spania.",
                "Festivalul Las Fallas este recunoscut ca patrimoniu cultural imaterial UNESCO.",
                "Piața plină de viață Mercado Central este considerată o capodoperă a modernismului."
          ],
          "en": [
                "Home to the avant-garde City of Arts and Sciences.",
                "The historic center houses the La Lonja de la Seda Silk Exchange.",
                "Paella Valenciana is traditionally prepared with rabbit, chicken, and beans.",
                "The Valencia Cathedral is said to house the authentic Holy Grail.",
                "The Oceanogràfic in Valencia is the largest aquarium in Europe.",
                "At over 9 kilometers long, Turia Park is one of the largest urban parks in Spain.",
                "The Las Fallas festival is recognized as a UNESCO Intangible Cultural Heritage.",
                "The lively Mercado Central market hall is considered a masterpiece of Modernism."
          ]
    },
    image: "/geo-images/spain/valencia.webp",
    
  },
  {
    id: "es-sevilla", type: "city", parent: "ES-AN", coords: [-5.9845, 37.3891],
    name: {"de": "Sevilla", "hu": "Sevilla", "ro": "Sevilia", "en": "Seville"},
    
    description: {
          "de": "Sevilla, die Hauptstadt Andalusiens, ist das schlagende Herz der südspanischen Kultur. Die Stadt ist der Geburtsort des Flamenco und fasziniert mit einer Architektur, die maurische und christliche Einflüsse meisterhaft vereint. Die engen, gewundenen Gassen des Barrio Santa Cruz laden zum Erkunden ein, während der Duft von Orangenblüten die Luft erfüllt. Sevilla ist auch bekannt für seine epischen Osterprozessionen und die farbenfrohe Feria de Abril. Die Hitze im Sommer ist legendär, doch die lebhafte Atmosphäre der Stadt zieht das ganze Jahr über Besucher in ihren Bann.",
          "hu": "Sevilla, Andalúzia fővárosa, a dél-spanyol kultúra lüktető szíve. A város a flamenco szülőhelye, és olyan építészettel nyűgöz le, amely mesterien ötvözi a mór és a keresztény hatásokat. A Barrio Santa Cruz szűk, kanyargós utcái felfedezésre hívnak, miközben a narancsvirág illata betölti a levegőt. Sevilla híres az epikus húsvéti körmeneteiről és a színpompás Feria de Abril fesztiválról is. A nyári hőség legendás, de a város nyüzsgő atmoszférája egész évben rabul ejti a látogatókat.",
          "ro": "Sevilia, capitala Andaluziei, este inima care bate a culturii spaniole de sud. Orașul este locul de naștere al flamenco-ului și fascinează cu o arhitectură care combină cu măiestrie influențele maure și creștine. Străzile înguste și șerpuite din Barrio Santa Cruz invită la explorare, în timp ce parfumul florilor de portocal umple aerul. Sevilia este, de asemenea, cunoscută pentru procesiunile sale epice de Paște și pentru colorata Feria de Abril. Căldura verii este legendară, dar atmosfera plină de viață a orașului captivează vizitatorii pe tot parcursul anului.",
          "en": "Seville, the capital of Andalusia, is the beating heart of southern Spanish culture. The city is the birthplace of flamenco and fascinates with architecture that masterfully combines Moorish and Christian influences. The narrow, winding streets of the Barrio Santa Cruz invite exploration, while the scent of orange blossoms fills the air. Seville is also known for its epic Easter processions and the colorful Feria de Abril. The summer heat is legendary, yet the lively atmosphere of the city captivates visitors year-round."
    },
    facts: {
          "de": [
                "Die Kathedrale von Sevilla ist die größte gotische Kathedrale der Welt.",
                "Der Alcázar von Sevilla ist ein atemberaubender königlicher Palast im Mudéjar-Stil.",
                "Der Giralda-Turm, einst ein Minarett, ist das Wahrzeichen der Stadt.",
                "Das Barrio Santa Cruz war das ehemalige jüdische Viertel von Sevilla.",
                "Die Plaza de España ist ein monumentaler, halbrunder Platz, erbaut für die Expo 1929.",
                "Sevilla liegt am schiffbaren Fluss Guadalquivir.",
                "Das Grab von Christoph Kolumbus befindet sich in der Kathedrale.",
                "Tapas wie Jamón Ibérico und Salmorejo sind hier allgegenwärtig."
          ],
          "hu": [
                "A sevillai katedrális a világ legnagyobb gótikus katedrálisa.",
                "A sevillai Alcázar egy lélegzetelállító, mudéjar stílusú királyi palota.",
                "A Giralda torony, egykori minaret, a város jelképe.",
                "A Barrio Santa Cruz Sevilla egykori zsidó negyede volt.",
                "A Plaza de España egy monumentális, félkör alakú tér, amely az 1929-es expóra épült.",
                "Sevilla a hajózható Guadalquivir folyó partján fekszik.",
                "Kolumbusz Kristóf sírja a katedrálisban található.",
                "Az olyan tapasok, mint a Jamón Ibérico és a Salmorejo, itt mindennaposak."
          ],
          "ro": [
                "Catedrala din Sevilia este cea mai mare catedrală gotică din lume.",
                "Alcázarul din Sevilia este un palat regal uluitor în stil Mudéjar.",
                "Turnul Giralda, odinioară minaret, este reperul orașului.",
                "Barrio Santa Cruz a fost fostul cartier evreiesc din Sevilia.",
                "Plaza de España este o piață monumentală, semicirculară, construită pentru Expoziția din 1929.",
                "Sevilia este situată pe râul navigabil Guadalquivir.",
                "Mormântul lui Cristofor Columb se află în catedrală.",
                "Tapas precum Jamón Ibérico și Salmorejo sunt omniprezente aici."
          ],
          "en": [
                "Seville Cathedral is the largest Gothic cathedral in the world.",
                "The Alcázar of Seville is a breathtaking royal palace in the Mudéjar style.",
                "The Giralda tower, once a minaret, is the city's iconic landmark.",
                "The Barrio Santa Cruz was the former Jewish quarter of Seville.",
                "The Plaza de España is a monumental, semicircular square built for the 1929 Expo.",
                "Seville is situated on the navigable Guadalquivir River.",
                "The tomb of Christopher Columbus is located inside the cathedral.",
                "Tapas such as Jamón Ibérico and Salmorejo are ubiquitous here."
          ]
    },
    image: "/geo-images/spain/seville.webp",
    
  },
  {
    id: "es-zaragoza", type: "city", parent: "ES-AR", coords: [-0.8877, 41.6497],
    name: {"de": "Zaragoza", "hu": "Zaragoza", "ro": "Zaragoza", "en": "Zaragoza"},
    
    description: {
          "de": "Zaragoza ist eine faszinierende historische Stadt, die strategisch günstig zwischen Madrid und Barcelona am Ufer des Ebro liegt. Die Stadt ist ein Schmelztiegel der Kulturen und spiegelt über 2000 Jahre Geschichte wider, von römischen Ruinen bis zu islamischer und christlicher Architektur. Ihr bekanntestes Wahrzeichen ist die beeindruckende Basilika Nuestra Señora del Pilar, die Pilger aus aller Welt anzieht. Zaragoza bietet eine authentische spanische Erfahrung abseits des Massentourismus. Die lebhafte Tapas-Szene im El Tubo-Viertel ist ein Traum für jeden Feinschmecker.",
          "hu": "Zaragoza egy lenyűgöző történelmi város, amely stratégiailag kiváló helyen, Madrid és Barcelona között, az Ebro folyó partján fekszik. A város a kultúrák olvasztótégelye, amely több mint 2000 év történelmét tükrözi, a római romoktól kezdve az iszlám és keresztény építészetig. Legismertebb nevezetessége a lenyűgöző Nuestra Señora del Pilar bazilika, amely a világ minden tájáról vonzza a zarándokokat. Zaragoza hiteles spanyol élményt nyújt, távol a tömegturizmustól. Az El Tubo negyed pezsgő tapas-kínálata minden ínyenc álma.",
          "ro": "Zaragoza este un oraș istoric fascinant, situat strategic între Madrid și Barcelona, pe malurile râului Ebro. Orașul este un creuzet al culturilor, reflectând peste 2000 de ani de istorie, de la ruine romane la arhitectura islamică și creștină. Cel mai faimos reper al său este impresionanta Bazilică Nuestra Señora del Pilar, care atrage pelerini din întreaga lume. Zaragoza oferă o experiență spaniolă autentică, departe de turismul de masă. Scena animată de tapas din cartierul El Tubo este visul oricărui gurmand.",
          "en": "Zaragoza is a fascinating historic city strategically located between Madrid and Barcelona on the banks of the Ebro River. The city is a melting pot of cultures, reflecting over 2,000 years of history, from Roman ruins to Islamic and Christian architecture. Its most famous landmark is the impressive Basilica of Nuestra Señora del Pilar, which attracts pilgrims from all over the world. Zaragoza offers an authentic Spanish experience away from mass tourism. The lively tapas scene in the El Tubo district is a foodie's dream."
    },
    facts: {
          "de": [
                "Zaragoza ist die fünftgrößte Stadt in Spanien.",
                "Die Basilika del Pilar beherbergt Fresken des berühmten Malers Francisco de Goya.",
                "Der Aljafería-Palast ist ein prächtiges Beispiel der islamischen Mudéjar-Architektur.",
                "Die Stadt veranstaltete die Expo 2008 zum Thema 'Wasser und nachhaltige Entwicklung'.",
                "Zaragoza bewahrt bedeutende Reste des römischen Cäsaraugusta, darunter ein Theater.",
                "Das jährliche Fiestas del Pilar-Fest im Oktober dauert zehn Tage.",
                "Die Puente de Piedra ist eine historische Brücke über den Fluss Ebro.",
                "Das El Tubo-Viertel ist berühmt für seine dichten Gassen voller Tapas-Bars."
          ],
          "hu": [
                "Zaragoza Spanyolország ötödik legnagyobb városa.",
                "A Pilar-bazilika a híres festő, Francisco de Goya freskóit őrzi.",
                "Az Aljafería palota az iszlám mudéjar építészet csodálatos példája.",
                "A város adott otthont a 2008-as Expónak, amelynek témája a 'Víz és fenntartható fejlődés' volt.",
                "Zaragoza megőrizte a római Caesaraugusta jelentős maradványait, köztük egy színházat.",
                "Az éves Fiestas del Pilar fesztivál októberben tíz napig tart.",
                "A Puente de Piedra egy történelmi híd az Ebro folyó felett.",
                "Az El Tubo negyed híres a tapas bárokkal teli sűrű utcáiról."
          ],
          "ro": [
                "Zaragoza este al cincilea oraș ca mărime din Spania.",
                "Bazilica del Pilar adăpostește fresce ale celebrului pictor Francisco de Goya.",
                "Palatul Aljafería este un exemplu magnific al arhitecturii islamice Mudéjar.",
                "Orașul a găzduit Expo 2008 pe tema 'Apă și dezvoltare durabilă'.",
                "Zaragoza păstrează vestigii semnificative din Caesaraugusta romană, inclusiv un teatru.",
                "Festivalul anual Fiestas del Pilar din octombrie durează zece zile.",
                "Puente de Piedra este un pod istoric peste râul Ebro.",
                "Cartierul El Tubo este faimos pentru străduțele sale pline de baruri de tapas."
          ],
          "en": [
                "Zaragoza is the fifth-largest city in Spain.",
                "The Basilica del Pilar houses frescoes by the famous painter Francisco de Goya.",
                "The Aljafería Palace is a magnificent example of Islamic Mudéjar architecture.",
                "The city hosted Expo 2008 with the theme 'Water and Sustainable Development'.",
                "Zaragoza preserves significant remains of the Roman Caesaraugusta, including a theater.",
                "The annual Fiestas del Pilar festival in October lasts for ten days.",
                "The Puente de Piedra is a historic bridge across the Ebro River.",
                "The El Tubo district is famous for its dense streets full of tapas bars."
          ]
    },
    image: "/geo-images/spain/zaragoza.webp",
    
  },
  {
    id: "es-malaga", type: "city", parent: "ES-AN", coords: [-4.4214, 36.7213],
    name: {"de": "Málaga", "hu": "Málaga", "ro": "Málaga", "en": "Málaga"},
    
    description: {
          "de": "Málaga ist eine dynamische Hafenstadt an der sonnenverwöhnten Costa del Sol in Andalusien. Als Geburtsort von Pablo Picasso atmet die Stadt Kunst und Kultur, was sich in zahlreichen erstklassigen Museen wie dem Museo Picasso widerspiegelt. Die historische Architektur wird gekrönt von der imposanten maurischen Festung Alcazaba und der nahegelegenen Burg Gibralfaro, die einen Panoramablick bieten. Málaga verbindet eine reiche, jahrtausendealte Geschichte nahtlos mit einem modernen, entspannten Strandleben. Die lebendige Hafenpromenade und das ausgezeichnete Meeresfrüchte-Angebot machen sie zu einem unvergesslichen Erlebnis.",
          "hu": "Málaga egy dinamikus kikötőváros Andalúziában, a napsütötte Costa del Sol partján. Pablo Picasso szülőhelyeként a város a művészetet és a kultúrát lélegzi, ami számos első osztályú múzeumban, például a Museo Picassóban is megmutatkozik. A történelmi építészetet az impozáns mór erőd, az Alcazaba és a közeli Gibralfaro vár koronázza meg, ahonnan panorámás kilátás nyílik. Málaga zökkenőmentesen ötvözi a gazdag, évezredes történelmet a modern, nyugodt tengerparti élettel. A nyüzsgő kikötői sétány és a kiváló tengeri ételek felejthetetlen élménnyé teszik.",
          "ro": "Málaga este un oraș portuar dinamic pe însorita Costa del Sol din Andaluzia. Ca loc de naștere al lui Pablo Picasso, orașul respiră artă și cultură, ceea ce se reflectă în numeroase muzee de primă clasă, cum ar fi Museo Picasso. Arhitectura istorică este încoronată de impunătoarea cetate maură Alcazaba și de Castelul Gibralfaro din apropiere, care oferă vederi panoramice. Málaga îmbină perfect o istorie bogată de milenii cu o viață modernă și relaxată la plajă. Promenada plină de viață a portului și oferta excelentă de fructe de mare o fac o experiență de neuitat.",
          "en": "Málaga is a dynamic port city on the sun-drenched Costa del Sol in Andalusia. As the birthplace of Pablo Picasso, the city breathes art and culture, reflected in numerous first-class museums such as the Museo Picasso. The historic architecture is crowned by the imposing Moorish fortress Alcazaba and the nearby Gibralfaro Castle, offering panoramic views. Málaga seamlessly blends a rich, millennial history with modern, relaxed beach life. The lively harbor promenade and excellent seafood offerings make it an unforgettable experience."
    },
    facts: {
          "de": [
                "Málaga ist eine der ältesten Städte Europas, gegründet von den Phöniziern um 770 v. Chr.",
                "Die Stadt beheimatet ein römisches Theater direkt am Fuße der Festung Alcazaba.",
                "Die Kathedrale von Málaga wird oft 'La Manquita' (die Einarmige) genannt, da ihr zweiter Turm nie fertiggestellt wurde.",
                "Málaga ist berühmt für 'Espetos', traditionelle Sardinenspieße, die am Strand gegrillt werden.",
                "Die Calle Larios ist die berühmteste und eleganteste Einkaufsstraße der Stadt.",
                "Das Centre Pompidou Málaga ist die erste Auslandsniederlassung des Pariser Museums.",
                "Das jährliche Filmfestival von Málaga ist das wichtigste für das spanische Kino.",
                "Der Hafen von Málaga ist ein beliebter Anlaufpunkt für große internationale Kreuzfahrtschiffe."
          ],
          "hu": [
                "Málaga Európa egyik legrégebbi városa, amelyet a föníciaiak alapítottak i. e. 770 körül.",
                "A városban található egy római színház közvetlenül az Alcazaba erőd lábánál.",
                "A málagai katedrálist gyakran 'La Manquita'-nak (az egykarúnak) hívják, mivel a második tornya sosem készült el.",
                "Málaga híres az 'Espetos'-ról, a tengerparton grillezett hagyományos szardínianyársakról.",
                "A Calle Larios a város leghíresebb és legelegánsabb bevásárlóutcája.",
                "A Centre Pompidou Málaga a párizsi múzeum első külföldi fiókintézménye.",
                "Az éves Málagai Filmfesztivál a spanyol mozi legfontosabb eseménye.",
                "A málagai kikötő a nagy nemzetközi tengerjáró hajók népszerű kikötőhelye."
          ],
          "ro": [
                "Málaga este unul dintre cele mai vechi orașe din Europa, fondat de fenicieni în jurul anului 770 î.Hr.",
                "Orașul găzduiește un teatru roman chiar la poalele cetății Alcazaba.",
                "Catedrala din Málaga este adesea numită 'La Manquita' (ciunga), deoarece al doilea turn nu a fost niciodată finalizat.",
                "Málaga este renumită pentru 'Espetos', frigărui tradiționale de sardine prăjite pe plajă.",
                "Calle Larios este cea mai faimoasă și elegantă stradă comercială din oraș.",
                "Centre Pompidou Málaga este prima filială de peste hotare a muzeului parizian.",
                "Festivalul anual de film de la Málaga este cel mai important pentru cinematografia spaniolă.",
                "Portul din Málaga este un punct de oprire popular pentru marile nave de croazieră internaționale."
          ],
          "en": [
                "Málaga is one of the oldest cities in Europe, founded by the Phoenicians around 770 BC.",
                "The city is home to a Roman theater right at the foot of the Alcazaba fortress.",
                "The Cathedral of Málaga is often called 'La Manquita' (the one-armed lady) because its second tower was never finished.",
                "Málaga is famous for 'Espetos', traditional sardine skewers grilled on the beach.",
                "Calle Larios is the most famous and elegant shopping street in the city.",
                "The Centre Pompidou Málaga is the first overseas branch of the Parisian museum.",
                "The annual Málaga Film Festival is the most important event for Spanish cinema.",
                "The Port of Málaga is a popular port of call for large international cruise ships."
          ]
    },
    image: "/geo-images/spain/m-laga.webp",
    
  },
  {
    id: "es-bilbao", type: "city", parent: "ES-PV", coords: [-2.9350, 43.2630],
    name: {"de": "Bilbao", "hu": "Bilbao", "ro": "Bilbao", "en": "Bilbao"},
    
    description: {
          "de": "Bilbao ist das pulsierende Herz des Baskenlandes und ein weltweites Paradebeispiel für gelungene urbane Erneuerung. Einst eine graue Industriestadt, erlebte sie durch den Bau des spektakulären Guggenheim-Museums eine kulturelle Wiedergeburt. Die Stadt liegt reizvoll eingebettet zwischen grünen Hügeln am Ufer des Flusses Nervión. Die charmante Altstadt (Casco Viejo) mit ihren engen Gassen und lebhaften Plätzen bildet einen tollen Kontrast zur futuristischen Architektur. Bilbao ist zudem ein Paradies für Feinschmecker, berühmt für seine köstlichen Pintxos (baskische Tapas).",
          "hu": "Bilbao Baszkföld lüktető szíve és a sikeres városrehabilitáció világszintű példája. Az egykori szürke iparváros a látványos Guggenheim Múzeum felépítésével kulturális újjászületést élt át. A város varázslatosan fekszik zöld dombok között, a Nervión folyó partján. A bájos óváros (Casco Viejo) szűk utcáival és nyüzsgő tereivel nagyszerű kontrasztot alkot a futurisztikus építészettel. Bilbao emellett a gasztronómia paradicsoma is, amely híres ízletes pintxosairól (baszk tapasokról).",
          "ro": "Bilbao este inima vibrantă a Țării Bascilor și un prim exemplu global de reînnoire urbană de succes. Odată un oraș industrial gri, a experimentat o renaștere culturală prin construirea spectaculosului Muzeu Guggenheim. Orașul este frumos situat între dealuri verzi, pe malurile râului Nervión. Fermecătorul oraș vechi (Casco Viejo), cu străzile sale înguste și piețele pline de viață, oferă un contrast deosebit cu arhitectura futuristă. Bilbao este, de asemenea, un paradis pentru gurmanzi, renumit pentru pintxos delicioase (tapas basce).",
          "en": "Bilbao is the vibrant heart of the Basque Country and a global prime example of successful urban renewal. Once a gray industrial city, it experienced a cultural rebirth with the construction of the spectacular Guggenheim Museum. The city is beautifully nestled between green hills on the banks of the Nervión River. The charming old town (Casco Viejo) with its narrow streets and lively squares provides a great contrast to the futuristic architecture. Bilbao is also a paradise for foodies, famous for its delicious pintxos (Basque tapas)."
    },
    facts: {
          "de": [
                "Das Guggenheim-Museum Bilbao wurde vom Stararchitekten Frank Gehry entworfen.",
                "Die Stadt wird oft mit dem 'Bilbao-Effekt' in Verbindung gebracht, der die Aufwertung durch Kultur beschreibt.",
                "Der Mercado de la Ribera ist eine der größten überdachten Markthallen in Europa.",
                "Die Puente de Vizcaya, eine Schwebefähre nahe Bilbao, ist UNESCO-Weltkulturerbe.",
                "Bilbaos U-Bahn-Stationen, von Norman Foster entworfen, werden von den Einheimischen 'Fosteritos' genannt.",
                "Das Casco Viejo ist bekannt für seine 'Siete Calles' (Sieben Straßen), den ältesten Teil der Stadt.",
                "Athletic Bilbao, der lokale Fußballclub, nimmt traditionell nur Spieler mit baskischen Wurzeln auf.",
                "Die Zubizuri-Brücke ist die älteste Schwebefähre der Welt und noch immer in Betrieb."
          ],
          "hu": [
                "A bilbaói Guggenheim Múzeumot a sztárépítész, Frank Gehry tervezte.",
                "A várost gyakran hozzák összefüggésbe a 'Bilbao-effektussal', amely a kultúra általi felértékelődést írja le.",
                "A Mercado de la Ribera Európa egyik legnagyobb fedett vásárcsarnoka.",
                "A Puente de Vizcaya, egy Bilbao melletti lebegőkomp, az UNESCO világörökség része.",
                "A Norman Foster által tervezett bilbaói metróállomásokat a helyiek 'Fosteritos'-nak hívják.",
                "A Casco Viejo a 'Siete Calles' (Hét utca) nevű részéről, a város legrégebbi negyedéről ismert.",
                "Az Athletic Bilbao, a helyi futballklub hagyományosan csak baszk gyökerekkel rendelkező játékosokat fogad be.",
                "A Zubizuri híd a világ legrégebbi lebegőkompja, amely ma is üzemel."
          ],
          "ro": [
                "Muzeul Guggenheim din Bilbao a fost proiectat de arhitectul vedetă Frank Gehry.",
                "Orașul este adesea asociat cu 'Efectul Bilbao', care descrie revitalizarea prin cultură.",
                "Mercado de la Ribera este una dintre cele mai mari piețe acoperite din Europa.",
                "Puente de Vizcaya, un pod transportor lângă Bilbao, este în Patrimoniul Mondial UNESCO.",
                "Stațiile de metrou din Bilbao, proiectate de Norman Foster, sunt numite de localnici 'Fosteritos'.",
                "Casco Viejo este cunoscut pentru 'Siete Calles' (Șapte Străzi), cea mai veche parte a orașului.",
                "Athletic Bilbao, clubul de fotbal local, acceptă în mod tradițional doar jucători cu rădăcini basce.",
                "Podul Zubizuri este cel mai vechi pod transportor din lume, încă în funcțiune."
          ],
          "en": [
                "The Guggenheim Museum Bilbao was designed by star architect Frank Gehry.",
                "The city is often associated with the 'Bilbao Effect', describing revitalization through culture.",
                "The Mercado de la Ribera is one of the largest covered market halls in Europe.",
                "The Puente de Vizcaya, a transporter bridge near Bilbao, is a UNESCO World Heritage site.",
                "Bilbao's metro stations, designed by Norman Foster, are affectionately called 'Fosteritos' by locals.",
                "The Casco Viejo is known for its 'Siete Calles' (Seven Streets), the oldest part of the city.",
                "Athletic Bilbao, the local football club, traditionally only recruits players with Basque roots.",
                "The Zubizuri bridge is the oldest transporter bridge in the world and still in operation."
          ]
    },
    image: "/geo-images/spain/bilbao.webp",
    
  },
  {
    id: "es-granada", type: "city", parent: "ES-AN", coords: [-3.5986, 37.1773],
    name: {"de": "Granada", "hu": "Granada", "ro": "Granada", "en": "Granada"},
    
    description: {
          "de": "Granada liegt am Fuße der majestätischen Sierra Nevada in Andalusien und ist ein Ort voller Magie und Geschichte. Die Stadt war das letzte Bollwerk der Mauren in Spanien und diese reiche islamische Vergangenheit ist noch heute an jeder Ecke spürbar. Weltbekannt ist Granada für die atemberaubende Alhambra, einen Festungs- und Palastkomplex von unvergleichlicher Schönheit. Das alte arabische Viertel Albaicín besticht durch seine weiß getünchten Häuser, schmalen Gassen und den herrlichen Ausblick auf die Alhambra. Granada besitzt zudem eine lebhafte Studentenszene und bewahrt die Tradition der kostenlosen Tapas.",
          "hu": "Granada az andalúziai Sierra Nevada fenséges lábánál fekszik, és varázslattal és történelemmel teli hely. A város volt a mórok utolsó bástyája Spanyolországban, és ez a gazdag iszlám múlt ma is minden sarkon érezhető. Granada világhírű a lélegzetelállító Alhambráról, a páratlan szépségű erőd- és palotakomplexumról. A régi arab negyed, az Albaicín lenyűgöz fehérre meszelt házaival, szűk utcáival és az Alhambrára nyíló csodálatos kilátással. Granada emellett pezsgő diákélettel rendelkezik, és őrzi az ingyenes tapasok hagyományát.",
          "ro": "Granada este situată la poalele maiestuoasei Sierra Nevada din Andaluzia și este un loc plin de magie și istorie. Orașul a fost ultimul bastion al maurilor din Spania, iar acest trecut islamic bogat poate fi simțit și astăzi la fiecare colț. Granada este renumită în întreaga lume pentru uluitoarea Alhambra, un complex de fortărețe și palate de o frumusețe incomparabilă. Vechiul cartier arab Albaicín captivează prin casele sale văruite în alb, străzile înguste și vederea magnifică la Alhambra. Granada are, de asemenea, o scenă studențească plină de viață și păstrează tradiția tapas-urilor gratuite.",
          "en": "Granada is located at the foot of the majestic Sierra Nevada in Andalusia and is a place full of magic and history. The city was the last stronghold of the Moors in Spain, and this rich Islamic past can still be felt on every corner today. Granada is world-famous for the breathtaking Alhambra, a fortress and palace complex of incomparable beauty. The old Arab quarter Albaicín captivates with its whitewashed houses, narrow streets, and magnificent views of the Alhambra. Granada also has a lively student scene and preserves the tradition of free tapas."
    },
    facts: {
          "de": [
                "Die Alhambra ist eines der bedeutendsten Meisterwerke der maurischen Baukunst und UNESCO-Welterbe.",
                "In Granada ist es noch üblich, zu jedem Getränk eine kostenlose Tapa zu servieren.",
                "Die Kathedrale von Granada beherbergt die Gräber der Katholischen Könige Isabella und Ferdinand.",
                "Der Mirador de San Nicolás bietet den berühmtesten Aussichtspunkt auf die Alhambra beim Sonnenuntergang.",
                "Der Generalife war der prächtige Sommerpalast und Landsitz der Nasriden-Sultane.",
                "Granada fiel im Jahr 1492 als letztes Emirat auf der Iberischen Halbinsel an die Christen.",
                "Die Stadt beheimatet eine der ältesten und prestigeträchtigsten Universitäten Spaniens.",
                "Das Sacromonte-Viertel ist bekannt für Flamenco-Aufführungen in traditionellen Höhlenwohnungen."
          ],
          "hu": [
                "Az Alhambra a mór építészet egyik legjelentősebb remekműve és az UNESCO világörökség része.",
                "Granadában még ma is szokás minden italhoz ingyenes tapast felszolgálni.",
                "A granadai katedrálisban található a katolikus királyok, Izabella és Ferdinánd sírja.",
                "A Mirador de San Nicolás a leghíresebb kilátópont az Alhambrára naplementekor.",
                "A Generalife volt a Naszrid szultánok pompás nyári palotája és vidéki birtoka.",
                "Granada volt az utolsó emírség az Ibériai-félszigeten, amely 1492-ben a keresztények kezére került.",
                "A városban működik Spanyolország egyik legrégebbi és legrangosabb egyeteme.",
                "A Sacromonte negyed híres a hagyományos barlanglakásokban tartott flamenco-előadásokról."
          ],
          "ro": [
                "Alhambra este una dintre cele mai importante capodopere ale arhitecturii maure și este un sit al Patrimoniului Mondial UNESCO.",
                "În Granada, este încă obișnuit să se servească un tapas gratuit cu fiecare băutură.",
                "Catedrala din Granada adăpostește mormintele Monarhilor Catolici Isabela și Ferdinand.",
                "Mirador de San Nicolás oferă cel mai faimos punct de observație asupra Alhambrei la apus.",
                "Generalife a fost palatul magnific de vară și moșia sultanilor din dinastia Nasrid.",
                "Granada a căzut în fața creștinilor în 1492, fiind ultimul emirat de pe Peninsula Iberică.",
                "Orașul găzduiește una dintre cele mai vechi și prestigioase universități din Spania.",
                "Cartierul Sacromonte este cunoscut pentru spectacolele de flamenco din locuințele tradiționale rupestre."
          ],
          "en": [
                "The Alhambra is one of the most important masterpieces of Moorish architecture and a UNESCO World Heritage site.",
                "In Granada, it is still customary to serve a free tapa with every drink ordered.",
                "The Cathedral of Granada houses the tombs of the Catholic Monarchs Isabella and Ferdinand.",
                "The Mirador de San Nicolás offers the most famous viewpoint of the Alhambra at sunset.",
                "The Generalife was the magnificent summer palace and country estate of the Nasrid Sultans.",
                "Granada fell to the Christians in 1492, the last emirate on the Iberian Peninsula to do so.",
                "The city is home to one of the oldest and most prestigious universities in Spain.",
                "The Sacromonte neighborhood is known for flamenco performances held in traditional cave dwellings."
          ]
    },
    image: "/geo-images/spain/granada.webp",
    
  },
  {
    id: "es-cordoba", type: "city", parent: "ES-AN", coords: [-4.7794, 37.8882],
    name: {"de": "Córdoba", "hu": "Córdoba", "ro": "Córdoba", "en": "Córdoba"},
    
    description: {
          "de": "Córdoba ist eine geschichtsträchtige Stadt in Andalusien und war einst eine der größten und fortschrittlichsten Metropolen der Welt. Im 10. Jahrhundert strahlte sie als Hauptstadt des islamischen Kalifats unvergleichlichen Reichtum und Wissen aus. Das absolute Highlight der Stadt ist die Mezquita-Catedral, eine atemberaubende Moschee, in deren Zentrum später eine christliche Kathedrale erbaut wurde. Die charmanten Altstadtgassen von Córdoba sind berühmt für ihre weiß getünchten Wände und die liebevoll mit Blumen geschmückten Patios (Innenhöfe). Ein Spaziergang über die Römische Brücke runden das romantische Bild der Stadt ab.",
          "hu": "Córdoba egy történelmi andalúziai város, amely egykor a világ egyik legnagyobb és legfejlettebb metropolisza volt. A 10. században, az iszlám kalifátus fővárosaként páratlan gazdagságot és tudást sugárzott. A város abszolút fénypontja a Mezquita-Catedral, egy lélegzetelállító mecset, amelynek közepébe később keresztény katedrálist építettek. Córdoba bájos óvárosi utcái híresek fehérre meszelt falaikról és a szeretettel virágokkal díszített teraszokról (patiók). A Római hídon tett séta teszi teljessé a város romantikus képét.",
          "ro": "Córdoba este un oraș istoric din Andaluzia și a fost cândva una dintre cele mai mari și mai avansate metropole din lume. În secolul al X-lea, ca și capitală a Califatului Islamic, a radiat o bogăție și o cunoaștere incomparabile. Punctul de atracție absolut al orașului este Mezquita-Catedral, o moschee uluitoare în centrul căreia a fost construită mai târziu o catedrală creștină. Străduțele fermecătoare ale orașului vechi din Córdoba sunt renumite pentru pereții lor văruiți în alb și curțile interioare (patios) decorate cu dragoste cu flori. O plimbare pe Podul Roman completează imaginea romantică a orașului.",
          "en": "Córdoba is a historic city in Andalusia and was once one of the largest and most advanced metropolises in the world. In the 10th century, as the capital of the Islamic Caliphate, it radiated unparalleled wealth and knowledge. The absolute highlight of the city is the Mezquita-Catedral, a breathtaking mosque with a Christian cathedral later built directly in its center. The charming old town streets of Córdoba are famous for their whitewashed walls and affectionately flower-decorated patios (courtyards). A walk across the Roman Bridge completes the romantic image of the city."
    },
    facts: {
          "de": [
                "Das historische Zentrum von Córdoba ist komplett als UNESCO-Weltkulturerbe deklariert.",
                "Die Mezquita ist berühmt für ihren Wald aus 856 Säulen und den rot-weißen Doppelbögen.",
                "Córdoba veranstaltet jedes Jahr im Mai ein buntes Festival der Innenhöfe (Fiesta de los Patios).",
                "Die Medina Azahara am Stadtrand war einst eine prächtige mittelalterliche Palaststadt.",
                "Die Römische Brücke (Puente Romano) wurde ursprünglich im 1. Jahrhundert v. Chr. erbaut.",
                "Die Stadt war die Heimat bedeutender Philosophen wie Averroes und Maimonides.",
                "Die Judería ist das alte jüdische Viertel mit einer der wenigen erhaltenen Synagogen Spaniens.",
                "Salmorejo, eine dickflüssige, kalte Tomatensuppe, ist die bekannteste lokale Spezialität."
          ],
          "hu": [
                "Córdoba történelmi központját teljes egészében az UNESCO világörökség részévé nyilvánították.",
                "A Mezquita híres a 856 oszlopból álló erdejéről és a piros-fehér kettős ívekről.",
                "Córdoba minden év májusában színes belsőudvar-fesztivált (Fiesta de los Patios) rendez.",
                "A város szélén található Medina Azahara egykor pompás középkori palotaváros volt.",
                "A Római hidat (Puente Romano) eredetileg i. e. az 1. században építették.",
                "A város olyan jelentős filozófusok otthona volt, mint Averroës és Maimonidész.",
                "A Judería a régi zsidó negyed, Spanyolország egyik kevés fennmaradt zsinagógájával.",
                "A salmorejo, egy sűrű, hideg paradicsomleves, a legismertebb helyi specialitás."
          ],
          "ro": [
                "Centrul istoric din Córdoba este declarat în întregime un sit al Patrimoniului Mondial UNESCO.",
                "Mezquita este renumită pentru pădurea sa de 856 de coloane și arcadele duble roșii și albe.",
                "Córdoba găzduiește anual în luna mai un festival plin de culoare al curților (Fiesta de los Patios).",
                "Medina Azahara de la periferia orașului a fost cândva un magnific oraș-palat medieval.",
                "Podul Roman (Puente Romano) a fost construit inițial în secolul I î.Hr.",
                "Orașul a fost casa unor filozofi importanți, precum Averroes și Maimonide.",
                "Judería este vechiul cartier evreiesc cu una dintre puținele sinagogi supraviețuitoare din Spania.",
                "Salmorejo, o supă rece și deasă de roșii, este cea mai faimoasă specialitate locală."
          ],
          "en": [
                "The historic center of Córdoba is entirely declared a UNESCO World Heritage site.",
                "The Mezquita is famous for its forest of 856 columns and red-and-white double arches.",
                "Córdoba hosts a colorful festival of courtyards (Fiesta de los Patios) every year in May.",
                "Medina Azahara on the outskirts of the city was once a magnificent medieval palace-city.",
                "The Roman Bridge (Puente Romano) was originally built in the 1st century BC.",
                "The city was home to significant philosophers such as Averroes and Maimonides.",
                "The Judería is the old Jewish quarter, home to one of Spain's few surviving synagogues.",
                "Salmorejo, a thick, cold tomato soup, is the most famous local culinary specialty."
          ]
    },
    image: "/geo-images/spain/c-rdoba.webp",
    
  },
  {
    id: "es-salamanca", type: "city", parent: "ES-CL", coords: [-5.6635, 40.9701],
    name: {"de": "Salamanca", "hu": "Salamanca", "ro": "Salamanca", "en": "Salamanca"},
    
    description: {
          "de": "Salamanca, gelegen im Westen Spaniens in der Region Kastilien und León, ist eine der ältesten und ehrwürdigsten Universitätsstädte Europas. Die Stadt erstrahlt im goldenen Licht des einzigartigen Villamayor-Sandsteins, der fast alle historischen Gebäude ziert. Im Zentrum des Lebens steht die beeindruckende Plaza Mayor, die als einer der schönsten Plätze ganz Spaniens gilt. Salamanca verfügt über zwei Kathedralen, die alte und die neue, die direkt aneinander gebaut wurden. Das jugendliche, lebendige Flair der tausenden Studenten mischt sich hier auf charmante Weise mit tief verwurzelter akademischer Geschichte.",
          "hu": "A Nyugat-Spanyolországban, Kasztília és León régióban fekvő Salamanca Európa egyik legrégebbi és legtekintélyesebb egyetemvárosa. A város az egyedülálló Villamayor homokkő aranyló fényében ragyog, amely szinte minden történelmi épületet díszít. Az élet középpontjában a lenyűgöző Plaza Mayor áll, amelyet egész Spanyolország egyik legszebb terének tartanak. Salamancának két katedrálisa is van, a régi és az új, amelyeket közvetlenül egymás mellé építettek. Több ezer diák fiatalos, élénk hangulata itt bájos módon keveredik a mélyen gyökerező akadémiai történelemmel.",
          "ro": "Salamanca, situată în vestul Spaniei în regiunea Castilia și León, este una dintre cele mai vechi și venerabile orașe universitare din Europa. Orașul strălucește în lumina aurie a gresiei unice de Villamayor, care împodobește aproape toate clădirile istorice. În centrul vieții se află impresionanta Plaza Mayor, care este considerată una dintre cele mai frumoase piețe din toată Spania. Salamanca are două catedrale, cea veche și cea nouă, care au fost construite una lângă alta. Flerul tineresc și plin de viață al miilor de studenți se amestecă aici într-un mod fermecător cu istoria academică profund înrădăcinată.",
          "en": "Salamanca, located in western Spain in the region of Castile and León, is one of Europe's oldest and most venerable university cities. The city glows in the golden light of the unique Villamayor sandstone, which adorns almost all of its historic buildings. At the center of life is the impressive Plaza Mayor, considered one of the most beautiful squares in all of Spain. Salamanca has two cathedrals, the old and the new, which were built directly adjacent to each other. The youthful, lively flair of thousands of students mixes charmingly here with deeply rooted academic history."
    },
    facts: {
          "de": [
                "Die Universität von Salamanca wurde 1218 gegründet und ist die älteste Spaniens.",
                "Das historische Zentrum von Salamanca ist seit 1988 UNESCO-Weltkulturerbe.",
                "Die Fassade der Universität ist berühmt für einen versteckten steinernen Frosch auf einem Totenkopf.",
                "Das Casa de las Conchas ist ein Palast, dessen Fassade mit über 300 Muscheln geschmückt ist.",
                "Die Plaza Mayor wurde im 18. Jahrhundert im barocken Stil erbaut.",
                "Der Astronautenfriedhof an der Neuen Kathedrale ist eine moderne Steinmetz-Ergänzung von 1992.",
                "Die Brücke Puente Romano über den Fluss Tormes stammt aus dem 1. Jahrhundert.",
                "Die Stadt ist ein beliebtes Zentrum für Sprachschüler aus aller Welt, die Spanisch lernen."
          ],
          "hu": [
                "A Salamancai Egyetemet 1218-ban alapították, és Spanyolország legrégebbi egyeteme.",
                "Salamanca történelmi központja 1988 óta az UNESCO világörökség része.",
                "Az egyetem homlokzata híres egy koponyán megbúvó kőbékáról.",
                "A Casa de las Conchas egy palota, amelynek homlokzatát több mint 300 kagyló díszíti.",
                "A Plaza Mayor a 18. században épült barokk stílusban.",
                "Az Új Katedrálison lévő asztronauta egy modern, 1992-es kőfaragó kiegészítés.",
                "A Tormes folyón átívelő Puente Romano híd az 1. századból származik.",
                "A város népszerű központja a spanyolul tanuló diákoknak a világ minden tájáról."
          ],
          "ro": [
                "Universitatea din Salamanca a fost fondată în 1218 și este cea mai veche din Spania.",
                "Centrul istoric al Salamancăi este în Patrimoniul Mondial UNESCO din 1988.",
                "Fațada universității este renumită pentru o broască de piatră ascunsă pe un craniu.",
                "Casa de las Conchas este un palat a cărui fațadă este decorată cu peste 300 de scoici.",
                "Plaza Mayor a fost construită în secolul al XVIII-lea în stil baroc.",
                "Astronautul de pe Noua Catedrală este o adăugire modernă a cioplitorilor în piatră din 1992.",
                "Podul Puente Romano peste râul Tormes datează din secolul I.",
                "Orașul este un centru popular pentru studenții la limbi străine din întreaga lume care învață spaniola."
          ],
          "en": [
                "The University of Salamanca was founded in 1218 and is the oldest in Spain.",
                "The historic center of Salamanca has been a UNESCO World Heritage site since 1988.",
                "The facade of the university is famous for a hidden stone frog resting on a skull.",
                "The Casa de las Conchas is a palace whose facade is decorated with over 300 shells.",
                "The Plaza Mayor was built in the 18th century in the Baroque style.",
                "The astronaut carving on the New Cathedral is a modern stonemason's addition from 1992.",
                "The Puente Romano bridge over the Tormes river dates back to the 1st century.",
                "The city is a popular hub for language students from all over the world learning Spanish."
          ]
    },
    image: "/geo-images/spain/salamanca.webp",
    
  },
  {
    id: "es-toledo", type: "city", parent: "ES-CM", coords: [-4.0273, 39.8628],
    name: {"de": "Toledo", "hu": "Toledo", "ro": "Toledo", "en": "Toledo"},
    
    description: {
          "de": "Toledo, majestätisch auf einem Hügel über dem Fluss Tajo gelegen, ist als 'Stadt der drei Kulturen' weltberühmt. Über Jahrhunderte lebten hier Christen, Muslime und Juden friedlich zusammen und hinterließen ein unvergleichliches architektonisches Erbe. Die gesamte historische Altstadt ist ein UNESCO-Weltkulturerbe und gleicht einem lebendigen Freilichtmuseum. Prachtvolle Bauwerke wie die gotische Kathedrale, der Alcázar und die Synagoge El Tránsito zeugen von der reichen Vergangenheit. Toledo ist auch berühmt für seine traditionelle Handwerkskunst, insbesondere die Herstellung von Damaszener-Schmuck und Toledo-Schwertern.",
          "hu": "A Tajo folyó feletti dombon fenségesen elhelyezkedő Toledo a 'Három kultúra városaként' világhírű. Évszázadokon át keresztények, muszlimok és zsidók éltek itt békében egymás mellett, és páratlan építészeti örökséget hagytak hátra. Az egész történelmi óváros UNESCO világörökség, és egy élő szabadtéri múzeumhoz hasonlít. Olyan pompás építmények tanúskodnak a gazdag múltról, mint a gótikus katedrális, az Alcázar és az El Tránsito zsinagóga. Toledo híres hagyományos kézművességéről is, különösen a damaszkuszi ékszerek és a toledói kardok készítéséről.",
          "ro": "Toledo, situat maiestuos pe un deal deasupra râului Tajo, este renumit în lume ca 'Orașul celor trei culturi'. Timp de secole, creștinii, musulmanii și evreii au trăit aici pașnic împreună, lăsând în urmă o moștenire arhitecturală incomparabilă. Întregul oraș vechi istoric este un sit al Patrimoniului Mondial UNESCO și se aseamănă cu un muzeu viu în aer liber. Clădiri magnifice precum catedrala gotică, Alcázar și sinagoga El Tránsito stau mărturie a trecutului bogat. Toledo este renumit și pentru meșteșugurile sale tradiționale, în special pentru fabricarea de bijuterii de Damasc și a săbiilor de Toledo.",
          "en": "Toledo, majestically situated on a hill above the Tagus River, is world-famous as the 'City of Three Cultures'. For centuries, Christians, Muslims, and Jews lived together peacefully here, leaving behind an incomparable architectural heritage. The entire historic old town is a UNESCO World Heritage site and resembles a living open-air museum. Magnificent buildings such as the Gothic cathedral, the Alcázar, and the El Tránsito synagogue bear witness to the rich past. Toledo is also famous for its traditional craftsmanship, especially the production of Damascene jewelry and Toledo swords."
    },
    facts: {
          "de": [
                "Toledo war einst die Hauptstadt des spanischen Reiches, bis Madrid 1561 diese Rolle übernahm.",
                "Die Kathedrale von Toledo gilt als eine der größten und prachtvollsten gotischen Kathedralen der Welt.",
                "Der berühmte Maler El Greco lebte in Toledo, und viele seiner Werke sind hier ausgestellt.",
                "Die Stadt ist bekannt für Marzipan, eine süße Köstlichkeit arabischen Ursprungs.",
                "Toledo-Stahl war im Mittelalter für seine Härte berühmt und begehrt bei Schwertschmieden.",
                "Die Synagoge Santa María la Blanca ist eines der ältesten erhaltenen jüdischen Bauwerke in Europa.",
                "Das Stadtbild wird von der massiven Festung des Alcázar von Toledo dominiert.",
                "Die römische Brücke Puente de Alcántara ist einer der Hauptzugänge zur Altstadt."
          ],
          "hu": [
                "Toledo egykor a Spanyol Birodalom fővárosa volt, amíg Madrid 1561-ben át nem vette ezt a szerepet.",
                "A toledói katedrális a világ egyik legnagyobb és legpompásabb gótikus katedrálisa.",
                "A híres festő, El Greco Toledóban élt, és számos műve itt van kiállítva.",
                "A város ismert a marcipánról, egy arab eredetű édes finomságról.",
                "A toledói acél a középkorban híres volt keménységéről, és nagyon keresett volt a kardkovácsok körében.",
                "A Santa María la Blanca zsinagóga az egyik legrégebbi fennmaradt zsidó építmény Európában.",
                "A városképet a toledói Alcázar masszív erődítménye uralja.",
                "Az Alcántara római híd az óváros egyik fő bejárata."
          ],
          "ro": [
                "Toledo a fost odată capitala Imperiului Spaniol, până când Madridul a preluat acest rol în 1561.",
                "Catedrala din Toledo este considerată una dintre cele mai mari și mai magnifice catedrale gotice din lume.",
                "Celebrul pictor El Greco a trăit în Toledo, iar multe dintre operele sale sunt expuse aici.",
                "Orașul este cunoscut pentru marțipan, o delicatesă dulce de origine arabă.",
                "Oțelul de Toledo a fost faimos în Evul Mediu pentru duritatea sa și era foarte căutat de fierarii de săbii.",
                "Sinagoga Santa María la Blanca este una dintre cele mai vechi structuri evreiești supraviețuitoare din Europa.",
                "Peisajul urban este dominat de fortăreața masivă Alcázar din Toledo.",
                "Podul roman Puente de Alcántara este unul dintre principalele puncte de acces în orașul vechi."
          ],
          "en": [
                "Toledo was once the capital of the Spanish Empire until Madrid took over this role in 1561.",
                "The Cathedral of Toledo is considered one of the largest and most magnificent Gothic cathedrals in the world.",
                "The famous painter El Greco lived in Toledo, and many of his works are exhibited here.",
                "The city is known for marzipan, a sweet delicacy of Arab origin.",
                "Toledo steel was famous in the Middle Ages for its hardness and was highly sought after by swordsmiths.",
                "The Santa María la Blanca Synagogue is one of the oldest surviving Jewish structures in Europe.",
                "The cityscape is dominated by the massive fortress of the Alcázar of Toledo.",
                "The Roman bridge Puente de Alcántara is one of the main access points to the old town."
          ]
    },
    image: "/geo-images/spain/toledo.webp",
    
  },
  {
    id: "es-santiago", type: "city", parent: "ES-GA", coords: [-8.5448, 42.8782],
    name: {"de": "Santiago de Compostela", "hu": "Santiago de Compostela", "ro": "Santiago de Compostela", "en": "Santiago de Compostela"},
    
    description: {
          "de": "Santiago de Compostela in Galicien ist eines der bedeutendsten Pilgerziele der christlichen Welt. Als Endpunkt des berühmten Jakobswegs (Camino de Santiago) empfängt die Stadt jährlich hunderttausende Pilger und Reisende, die sich vor der beeindruckenden Kathedrale versammeln. Die gesamte Altstadt, mit ihren gepflasterten Straßen, Arkadengängen und Granitgebäuden, gehört zum UNESCO-Weltkulturerbe. Das feuchte, ozeanische Klima Galiciens sorgt für eine üppig grüne Umgebung, die einen schönen Kontrast zur steinernen Architektur bildet. Die Stadt ist zudem berühmt für die lebhafte Atmosphäre der Universität Santiago und eine exzellente Meeresfrüchte-Küche.",
          "hu": "A galíciai Santiago de Compostela a keresztény világ egyik legjelentősebb zarándokcélpontja. A híres Szent Jakab-út (Camino de Santiago) végpontjaként a város évente zarándokok és utazók százezreit fogadja, akik a lenyűgöző katedrális előtt gyűlnek össze. Az egész óváros macskaköves utcáival, árkádsoraival és gránitépületeivel az UNESCO világörökség része. Galícia nedves, óceáni éghajlata buja, zöld környezetet biztosít, amely gyönyörű kontrasztot alkot a kőépítészettel. A város híres a Santiago-i Egyetem nyüzsgő hangulatáról és a kiváló tengeri ételeiről is.",
          "ro": "Santiago de Compostela din Galicia este una dintre cele mai importante destinații de pelerinaj din lumea creștină. Ca punct final al faimosului Camino de Santiago, orașul primește anual sute de mii de pelerini și călători care se adună în fața impresionantei catedrale. Întregul oraș vechi, cu străzile sale pietruite, arcadele și clădirile din granit, este în Patrimoniul Mondial UNESCO. Clima oceanică și umedă a Galiciei oferă un mediu verde luxuriant, care contrastează frumos cu arhitectura din piatră. Orașul este renumit și pentru atmosfera plină de viață a Universității din Santiago și pentru bucătăria excelentă cu fructe de mare.",
          "en": "Santiago de Compostela in Galicia is one of the most important pilgrimage destinations in the Christian world. As the end point of the famous Camino de Santiago (Way of St. James), the city annually welcomes hundreds of thousands of pilgrims and travelers who gather in front of the impressive cathedral. The entire old town, with its cobbled streets, arcades, and granite buildings, is a UNESCO World Heritage site. Galicia's damp, oceanic climate provides a lush green environment that beautifully contrasts with the stone architecture. The city is also famous for the lively atmosphere of the University of Santiago and its excellent seafood cuisine."
    },
    facts: {
          "de": [
                "Das Grab des Apostels Jakobus soll sich in der Krypta der Kathedrale befinden.",
                "Das riesige Weihrauchfass (Botafumeiro) der Kathedrale wird zu besonderen Anlässen durch das Querschiff geschwungen.",
                "Das Hostal de los Reyes Católicos am Obradoiro-Platz ist heute ein luxuriöses Parador-Hotel.",
                "Die Universität von Santiago de Compostela wurde 1495 gegründet und ist eine der ältesten der Welt.",
                "Die Tarta de Santiago, ein Mandelkuchen, ist die bekannteste süße Spezialität der Region.",
                "Der Jakobsweg zieht jährlich über 300.000 registrierte Pilger an.",
                "Pulpo a la gallega (Krake nach galicischer Art) ist das emblematischste Gericht der lokalen Gastronomie.",
                "Galicien hat eine eigene Sprache, das Galicische (Galego), das dem Portugiesischen ähnlich ist."
          ],
          "hu": [
                "A hagyomány szerint Jakab apostol sírja a katedrális kriptájában található.",
                "A katedrális hatalmas füstölőjét (Botafumeiro) különleges alkalmakkor lengetik a kereszthajóban.",
                "Az Obradoiro téren álló Hostal de los Reyes Católicos ma luxus Parador szálloda.",
                "A Santiago de Compostela-i Egyetemet 1495-ben alapították, és a világ egyik legrégebbi egyeteme.",
                "A Tarta de Santiago, egy mandulatorta, a régió legismertebb édes specialitása.",
                "A Szent Jakab-út évente több mint 300 000 regisztrált zarándokot vonz.",
                "A Pulpo a la gallega (galíciai polip) a helyi gasztronómia legemblematikusabb étele.",
                "Galícia saját nyelvvel rendelkezik, a galíciaival (galego), amely hasonlít a portugálra."
          ],
          "ro": [
                "Se spune că mormântul Apostolului Iacob se află în cripta catedralei.",
                "Uriașa cădelniță (Botafumeiro) a catedralei este balansată prin transept la ocazii speciale.",
                "Hostal de los Reyes Católicos din Piața Obradoiro este astăzi un hotel Parador de lux.",
                "Universitatea din Santiago de Compostela a fost fondată în 1495 și este una dintre cele mai vechi din lume.",
                "Tarta de Santiago, o prăjitură cu migdale, este cea mai faimoasă specialitate dulce a regiunii.",
                "Camino de Santiago atrage anual peste 300.000 de pelerini înregistrați.",
                "Pulpo a la gallega (caracatiță în stil galician) este cel mai emblematic fel de mâncare al gastronomiei locale.",
                "Galicia are propria sa limbă, galiciana (galego), care este asemănătoare cu portugheza."
          ],
          "en": [
                "The tomb of the Apostle James is said to be located in the crypt of the cathedral.",
                "The cathedral's giant censer (Botafumeiro) is swung through the transept on special occasions.",
                "The Hostal de los Reyes Católicos on the Obradoiro square is today a luxurious Parador hotel.",
                "The University of Santiago de Compostela was founded in 1495 and is one of the oldest in the world.",
                "Tarta de Santiago, an almond cake, is the most famous sweet specialty of the region.",
                "The Camino de Santiago attracts over 300,000 registered pilgrims annually.",
                "Pulpo a la gallega (Galician-style octopus) is the most emblematic dish of the local gastronomy.",
                "Galicia has its own language, Galician (Galego), which is similar to Portuguese."
          ]
    },
    image: "/geo-images/spain/santiago-de-compostela.webp",
    
  },
  {
    id: "es-alhambra", type: "landmark", parent: "ES-AN", coords: [-3.5896, 37.1760],
    name: {"de": "Alhambra", "hu": "Alhambra", "ro": "Alhambra", "en": "Alhambra"},
    
    description: {
          "de": "Die Alhambra in Granada ist zweifellos das beeindruckendste Monument der maurischen Kultur in Europa. Diese auf dem Sabikah-Hügel thronende Stadtfestung ist ein architektonisches Meisterwerk aus dem 13. und 14. Jahrhundert. Die Paläste der Nasriden-Sultane faszinieren mit filigranen Stuckarbeiten, feinen Mosaiken und ruhigen Innenhöfen, in denen das sanfte Plätschern von Wasserfontänen die Luft erfüllt. Direkt neben den Palästen liegen die wunderschönen Gärten des Generalife, der ehemaligen Sommerresidenz. Die Alhambra ist nicht nur ein Palast, sondern ein vollkommener Ausdruck der islamischen Kunst und Philosophie.",
          "hu": "A granadai Alhambra kétségtelenül a mór kultúra leglenyűgözőbb műemléke Európában. A Sabikah-hegyen trónoló város-erőd a 13. és 14. századból származó építészeti mestermű. A Naszrid szultánok palotái filigrán stukkómunkákkal, finom mozaikokkal és csendes belső udvarokkal nyűgöznek le, ahol a szökőkutak lágy csobogása tölti be a levegőt. A paloták közvetlen közelében találhatók a Generalife, az egykori nyári rezidencia gyönyörű kertjei. Az Alhambra nem pusztán egy palota, hanem az iszlám művészet és filozófia tökéletes kifejeződése.",
          "ro": "Alhambra din Granada este, fără îndoială, cel mai impresionant monument al culturii maure din Europa. Acest oraș-fortăreață care tronează pe dealul Sabikah este o capodoperă arhitecturală din secolele al XIII-lea și al XIV-lea. Palatele sultanilor Nasrid fascinează cu stucaturi filigranate, mozaicuri fine și curți interioare liniștite, unde susurul blând al fântânilor cu apă umple aerul. Chiar lângă palate se află frumoasele grădini ale Generalife, fosta reședință de vară. Alhambra nu este doar un palat, ci o expresie perfectă a artei și filosofiei islamice.",
          "en": "The Alhambra in Granada is undoubtedly the most impressive monument of Moorish culture in Europe. Perched on the Sabikah hill, this city-fortress is an architectural masterpiece from the 13th and 14th centuries. The palaces of the Nasrid Sultans fascinate with filigree stucco work, fine mosaics, and tranquil courtyards where the gentle babble of water fountains fills the air. Right next to the palaces are the beautiful gardens of the Generalife, the former summer residence. The Alhambra is not just a palace but a perfect expression of Islamic art and philosophy."
    },
    facts: {
          "de": [
                "Der Name 'Alhambra' leitet sich vom Arabischen 'al-Qal'a al-Hamra' ab, was 'die rote Festung' bedeutet.",
                "Die Nasridenpaläste, wie der Myrtenhof, sind das architektonische Herzstück der Anlage.",
                "Der Palast Karls V. wurde später im Renaissance-Stil mitten in die Alhambra gebaut.",
                "Ein ausgeklügeltes Hydrauliksystem versorgte die gesamte Festung schon im Mittelalter mit Wasser.",
                "In den Wänden sind tausende poetische Inschriften und Koranverse in kunstvoller Kalligrafie eingraviert.",
                "Die Alhambra wurde 1984 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
                "Der Generalife, der Sommerpalast, liegt etwas höher als die Alhambra und bot eine kühle Zuflucht.",
                "Heute ist die Alhambra eine der meistbesuchten Touristenattraktionen Spaniens."
          ],
          "hu": [
                "Az 'Alhambra' név az arab 'al-Qal'a al-Hamra' szóból származik, amely 'vörös erődöt' jelent.",
                "A Naszrid-paloták, például a Mirtusz-udvar, az épületegyüttes építészeti központjai.",
                "V. Károly palotáját később reneszánsz stílusban építették az Alhambra közepére.",
                "Egy ötletes hidraulikus rendszer már a középkorban vízzel látta el az egész erődöt.",
                "A falakba több ezer költői feliratot és Korán-verset véstek művészi kalligráfiával.",
                "Az Alhambrát 1984-ben vették fel az UNESCO világörökségi listájára.",
                "A Generalife, a nyári palota valamivel magasabban fekszik, mint az Alhambra, és hűvös menedéket nyújtott.",
                "Ma az Alhambra Spanyolország egyik leglátogatottabb turisztikai látványossága."
          ],
          "ro": [
                "Numele 'Alhambra' derivă din arabă 'al-Qal'a al-Hamra', care înseamnă 'fortăreața roșie'.",
                "Palatele Nasrid, cum ar fi Curtea Mirților, sunt piesa centrală arhitecturală a complexului.",
                "Palatul lui Carol al V-lea a fost construit mai târziu în stil renascentist chiar în mijlocul Alhambrei.",
                "Un sistem hidraulic ingenios a furnizat apă întregii fortărețe încă din Evul Mediu.",
                "Mii de inscripții poetice și versete din Coran sunt gravate în pereți cu o caligrafie artistică.",
                "Alhambra a fost adăugată pe lista Patrimoniului Mondial UNESCO în 1984.",
                "Generalife, palatul de vară, este situat puțin mai sus decât Alhambra și oferea un refugiu răcoros.",
                "Astăzi, Alhambra este una dintre cele mai vizitate atracții turistice din Spania."
          ],
          "en": [
                "The name 'Alhambra' derives from the Arabic 'al-Qal'a al-Hamra', which means 'the red fortress'.",
                "The Nasrid Palaces, such as the Court of the Myrtles, are the architectural centerpiece of the complex.",
                "The Palace of Charles V was built later in the Renaissance style right in the middle of the Alhambra.",
                "An ingenious hydraulic system supplied the entire fortress with water as early as the Middle Ages.",
                "Thousands of poetic inscriptions and Quranic verses are engraved into the walls in artistic calligraphy.",
                "The Alhambra was added to the UNESCO World Heritage list in 1984.",
                "The Generalife, the summer palace, is located slightly higher than the Alhambra and provided a cool retreat.",
                "Today, the Alhambra is one of the most visited tourist attractions in Spain."
          ]
    },
    image: "/geo-images/spain/alhambra.webp",
    
  },
  {
    id: "es-sagrada-familia", type: "landmark", parent: "ES-CT", coords: [2.1744, 41.4036],
    name: {"de": "Sagrada Familia", "hu": "Sagrada Família", "ro": "Sagrada Familia", "en": "Sagrada Familia"},
    
    description: {
          "de": "Die Basílica i Temple Expiatori de la Sagrada Família in Barcelona ist das Lebenswerk des visionären Architekten Antoni Gaudí. Sie ist zweifellos eine der außergewöhnlichsten und faszinierendsten Kirchen der Welt. Der Bau begann 1882 und ist bis heute unvollendet, wobei Gaudí seine letzten 40 Lebensjahre ausschließlich diesem Projekt widmete. Die Architektur verbindet auf organische Weise Gotik, Art Nouveau und von der Natur inspirierte Formen. Der Innenraum erinnert an einen gewaltigen Wald aus verästelten Steinsäulen, durchflutet vom Licht bunter Glasfenster. Die Fertigstellung der Sagrada Família wird weltweit mit großer Spannung erwartet.",
          "hu": "A barcelonai Basílica i Temple Expiatori de la Sagrada Família Antoni Gaudí látnok építész életműve. Kétségtelenül a világ egyik legkülönlegesebb és leglenyűgözőbb temploma. Építése 1882-ben kezdődött és a mai napig befejezetlen, Gaudí élete utolsó 40 évét kizárólag ennek a projektnek szentelte. Az építészet szervesen ötvözi a gótikát, a szecessziót és a természet ihlette formákat. A belső tér egy hatalmas, elágazó kőoszlopokból álló erdőre emlékeztet, amelyet színes ólomüveg ablakok fénye áraszt el. A Sagrada Família befejezését világszerte nagy várakozás övezi.",
          "ro": "Basílica i Temple Expiatori de la Sagrada Família din Barcelona este munca de o viață a arhitectului vizionar Antoni Gaudí. Este, fără îndoială, una dintre cele mai extraordinare și fascinante biserici din lume. Construcția a început în 1882 și este încă neterminată, Gaudí dedicându-și ultimii 40 de ani din viață exclusiv acestui proiect. Arhitectura combină în mod organic goticul, Art Nouveau și formele inspirate din natură. Interiorul amintește de o pădure masivă de stâlpi de piatră ramificați, inundată de lumina vitraliilor colorate. Finalizarea Sagrada Família este așteptată cu mare nerăbdare în întreaga lume.",
          "en": "The Basílica i Temple Expiatori de la Sagrada Família in Barcelona is the life's work of the visionary architect Antoni Gaudí. It is undoubtedly one of the most extraordinary and fascinating churches in the world. Construction began in 1882 and remains unfinished to this day, with Gaudí dedicating the last 40 years of his life exclusively to this project. The architecture organically combines Gothic, Art Nouveau, and nature-inspired forms. The interior resembles a massive forest of branching stone columns, flooded with light from colorful stained glass windows. The completion of the Sagrada Família is eagerly anticipated worldwide."
    },
    facts: {
          "de": [
                "Der Bau wird ausschließlich durch Spenden und Eintrittsgelder finanziert.",
                "Nach Fertigstellung wird sie mit 172,5 Metern die höchste Kirche der Welt sein.",
                "Gaudí entwarf 18 Türme, die Jesus, Maria, die Evangelisten und die Apostel repräsentieren.",
                "Die Krypta und die Geburtsfassade wurden 2005 zum UNESCO-Weltkulturerbe erklärt.",
                "Gaudí wurde nach seinem tragischen Tod 1926 in der Krypta der Kirche beigesetzt.",
                "Der zentrale Turm, der Jesus gewidmet ist, wird von einem riesigen Kreuz gekrönt werden.",
                "Die Architekten streben eine Fertigstellung zum 100. Todestag von Gaudí im Jahr 2026 an.",
                "Die detaillierten Steinarbeiten an den Fassaden erzählen komplexe biblische Geschichten."
          ],
          "hu": [
                "Az építkezést kizárólag adományokból és belépődíjakból finanszírozzák.",
                "Befejezésekor 172,5 méterrel a világ legmagasabb temploma lesz.",
                "Gaudí 18 tornyot tervezett, amelyek Jézust, Máriát, az evangélistákat és az apostolokat jelképezik.",
                "A kriptát és a Születés homlokzatát 2005-ben az UNESCO világörökség részévé nyilvánították.",
                "Gaudít 1926-os tragikus halála után a templom kriptájában temették el.",
                "A Jézusnak szentelt központi tornyot egy hatalmas kereszt fogja megkoronázni.",
                "Az építészek a befejezést Gaudí halálának 100. évfordulójára, 2026-ra tervezik.",
                "A homlokzatok részletgazdag kőfaragásai összetett bibliai történeteket mesélnek el."
          ],
          "ro": [
                "Construcția este finanțată exclusiv din donații și taxe de intrare.",
                "Odată finalizată, va fi cea mai înaltă biserică din lume, cu 172,5 metri.",
                "Gaudí a proiectat 18 turnuri, reprezentându-i pe Iisus, Maria, evangheliști și apostoli.",
                "Cripta și Fațada Nașterii au fost declarate Patrimoniu Mondial UNESCO în 2005.",
                "Gaudí a fost înmormântat în cripta bisericii după moartea sa tragică din 1926.",
                "Turnul central, dedicat lui Iisus, va fi încoronat de o cruce uriașă.",
                "Arhitecții vizează finalizarea pentru a marca a 100-a comemorare a morții lui Gaudí, în 2026.",
                "Sculpturile detaliate în piatră de pe fațade spun povești biblice complexe."
          ],
          "en": [
                "The construction is entirely funded by private donations and entrance fees.",
                "Upon completion, it will be the tallest church in the world at 172.5 meters.",
                "Gaudí designed 18 towers representing Jesus, Mary, the Evangelists, and the Apostles.",
                "The crypt and the Nativity facade were declared a UNESCO World Heritage site in 2005.",
                "Gaudí was buried in the crypt of the church following his tragic death in 1926.",
                "The central tower, dedicated to Jesus, will be crowned with a giant cross.",
                "The architects aim for completion to mark the 100th anniversary of Gaudí's death in 2026.",
                "The detailed stonework on the facades tells complex biblical stories."
          ]
    },
    image: "/geo-images/spain/sagrada-familia.webp",
    
  },
  {
    id: "es-park-guell", type: "landmark", parent: "ES-CT", coords: [2.1527, 41.4145],
    name: {"de": "Park Güell", "hu": "Güell park", "ro": "Parcul Güell", "en": "Park Güell"},
    
    description: {
          "de": "Der Park Güell, hoch oben auf dem Hügel Carmel gelegen, ist ein weiteres Meisterwerk von Antoni Gaudí und ein ikonisches Symbol Barcelonas. Ursprünglich als exklusive Gartenstadt konzipiert, wurde das Projekt nie vollendet und schließlich in einen öffentlichen Park umgewandelt. Der Park ist berühmt für seine organischen Architekturformen, farbenfrohen Mosaike (Trencadís) und fantasievollen Pavillons. Das Herzstück ist die große Terrasse mit der geschwungenen, mit Kacheln verzierten Bank, die einen spektakulären Blick auf die Stadt und das Mittelmeer bietet. Der Park Güell wirkt wie ein Spaziergang durch ein surrealistisches Märchenland.",
          "hu": "A Carmel-hegy tetején fekvő Güell park Antoni Gaudí újabb remekműve és Barcelona ikonikus szimbóluma. Eredetileg exkluzív kertvárosnak tervezték, a projekt sosem fejeződött be, és végül nyilvános parkká alakították. A park organikus építészeti formáiról, színes mozaikjairól (trencadís) és fantáziadús pavilonjairól híres. A központi eleme a nagy terasz a hullámos, csempézett paddal, ahonnan látványos kilátás nyílik a városra és a Földközi-tengerre. A Güell parkban tett séta olyan, mintha egy szürrealista meseországban járnánk.",
          "ro": "Parcul Güell, situat sus pe dealul Carmel, este o altă capodoperă a lui Antoni Gaudí și un simbol iconic al Barcelonei. Conceput inițial ca un oraș-grădină exclusivist, proiectul nu a fost niciodată finalizat și a fost în cele din urmă transformat într-un parc public. Parcul este renumit pentru formele sale arhitecturale organice, mozaicurile colorate (trencadís) și pavilioanele fanteziste. Piesa centrală este marea terasă cu banca șerpuită, decorată cu plăci ceramice, care oferă vederi spectaculoase asupra orașului și Mării Mediterane. Parcul Güell pare ca o plimbare printr-un tărâm de basm suprarealist.",
          "en": "Park Güell, perched high on Carmel Hill, is another masterpiece by Antoni Gaudí and an iconic symbol of Barcelona. Originally conceived as an exclusive garden city, the project was never completed and was eventually converted into a public park. The park is famous for its organic architectural forms, colorful mosaics (trencadís), and imaginative pavilions. The centerpiece is the main terrace with its undulating, tile-decorated bench, offering spectacular views of the city and the Mediterranean Sea. Park Güell feels like a stroll through a surreal fairytale land."
    },
    facts: {
          "de": [
                "Der Park ist nach dem Unternehmer Eusebi Güell benannt, Gaudís wichtigstem Mäzen.",
                "Der Park Güell wurde 1984 von der UNESCO zum Weltkulturerbe erklärt.",
                "Am Eingang werden Besucher von dem berühmten bunten Salamander (oder Drachen) begrüßt.",
                "Die große Terrasse wird von 86 dorischen Säulen gestützt, die einen Marktplatz bilden.",
                "Gaudí lebte 20 Jahre lang in einem der wenigen fertiggestellten Häuser im Park.",
                "Das Haus, in dem Gaudí lebte, ist heute das Casa Museu Gaudí.",
                "Die Architektur des Parks integriert sich nahezu nahtlos in die natürliche Umgebung.",
                "Um Überfüllung zu vermeiden, ist der Zugang zum Monumentalbereich des Parks mittlerweile begrenzt."
          ],
          "hu": [
                "A parkot Eusebi Güell vállalkozóról, Gaudí legfontosabb mecénásáról nevezték el.",
                "A Güell parkot 1984-ben az UNESCO világörökség részévé nyilvánították.",
                "A bejáratnál a híres színes szalamandra (vagy sárkány) fogadja a látogatókat.",
                "A nagy teraszt 86 dór oszlop tartja, amelyek egy piacteret alkotnak.",
                "Gaudí 20 évig élt a park egyik kevés befejezett házában.",
                "A ház, ahol Gaudí élt, ma a Casa Museu Gaudí (Gaudí Múzeum).",
                "A park építészete szinte zökkenőmentesen illeszkedik a természetes környezetbe.",
                "A túlzsúfoltság elkerülése érdekében a park műemléki területére a belépés ma már korlátozott."
          ],
          "ro": [
                "Parcul este numit după antreprenorul Eusebi Güell, cel mai important mecena al lui Gaudí.",
                "Parcul Güell a fost declarat Patrimoniu Mondial UNESCO în 1984.",
                "La intrare, vizitatorii sunt întâmpinați de celebra salamandră (sau dragon) colorată.",
                "Terasa mare este susținută de 86 de coloane dorice care formează o piață.",
                "Gaudí a locuit timp de 20 de ani într-una dintre puținele case finalizate din parc.",
                "Casa în care a trăit Gaudí este acum Casa Museu Gaudí.",
                "Arhitectura parcului se integrează aproape perfect în mediul natural.",
                "Pentru a evita supraaglomerarea, accesul în zona monumentală a parcului este acum limitat."
          ],
          "en": [
                "The park is named after the entrepreneur Eusebi Güell, Gaudí's most important patron.",
                "Park Güell was declared a UNESCO World Heritage site in 1984.",
                "At the entrance, visitors are greeted by the famous colorful salamander (or dragon).",
                "The main terrace is supported by 86 Doric columns that form a marketplace.",
                "Gaudí lived in one of the few completed houses in the park for 20 years.",
                "The house where Gaudí lived is now the Casa Museu Gaudí.",
                "The park's architecture integrates almost seamlessly into the natural environment.",
                "To prevent overcrowding, access to the monumental zone of the park is now limited."
          ]
    },
    image: "/geo-images/spain/park-g-ell.webp",
    
  },
  {
    id: "es-prado", type: "landmark", parent: "ES-MD", coords: [-3.6922, 40.4138],
    name: {"de": "Museo del Prado", "hu": "Prado Múzeum", "ro": "Muzeul Prado", "en": "Prado Museum"},
    
    description: {
          "de": "Das Museo del Prado in Madrid ist eines der bedeutendsten und meistbesuchten Kunstmuseen der Welt. Eröffnet im Jahr 1819, beherbergt das prachtvolle neoklassizistische Gebäude eine der weltweit feinsten Sammlungen europäischer Kunst, die vom 12. Jahrhundert bis ins frühe 20. Jahrhundert reicht. Der Prado ist berühmt für seine unvergleichlichen Meisterwerke spanischer Künstler wie Velázquez, Goya und El Greco, aber auch für herausragende Werke von Tizian, Rubens und Bosch. Ein Rundgang durch den Prado ist eine faszinierende Reise durch die europäische Kunst- und Kulturgeschichte. Es ist das kronjuwelartige Zentrum des sogenannten goldenen Kunstdreiecks in Madrid.",
          "hu": "A madridi Prado Múzeum a világ egyik legjelentősebb és leglátogatottabb művészeti múzeuma. Az 1819-ben megnyílt, pompás neoklasszicista épület az európai művészet egyik legfinomabb gyűjteményének ad otthont, amely a 12. századtól a 20. század elejéig terjed. A Prado olyan spanyol művészek páratlan remekműveiről híres, mint Velázquez, Goya és El Greco, de Tiziano, Rubens és Bosch kiemelkedő alkotásait is őrzi. A Pradóban tett séta lenyűgöző utazás az európai művészet és kultúrtörténet világába. Ez a madridi úgynevezett arany művészeti háromszög koronaékszerhez hasonló központja.",
          "ro": "Muzeul Prado din Madrid este unul dintre cele mai importante și mai vizitate muzee de artă din lume. Deschis în 1819, clădirea magnifică neoclasică găzduiește una dintre cele mai bune colecții de artă europeană din lume, datând din secolul al XII-lea până la începutul secolului al XX-lea. Prado este renumit pentru capodoperele sale incomparabile ale artiștilor spanioli precum Velázquez, Goya și El Greco, dar și pentru lucrările remarcabile ale lui Titian, Rubens și Bosch. Un tur al Prado este o călătorie fascinantă prin istoria artei și culturii europene. Este centrul asemenea unei bijuterii al așa-numitului Triunghi de Aur al Artei din Madrid.",
          "en": "The Museo del Prado in Madrid is one of the most important and most visited art museums in the world. Opened in 1819, the magnificent neoclassical building houses one of the world's finest collections of European art, dating from the 12th century to the early 20th century. The Prado is famous for its incomparable masterpieces by Spanish artists such as Velázquez, Goya, and El Greco, but also for outstanding works by Titian, Rubens, and Bosch. A tour of the Prado is a fascinating journey through European art and cultural history. It is the jewel-like center of the so-called Golden Triangle of Art in Madrid."
    },
    facts: {
          "de": [
                "Das Gebäude wurde ursprünglich als naturwissenschaftliches Kabinett von Juan de Villanueva entworfen.",
                "Der Prado besitzt die umfassendste Sammlung spanischer Malerei weltweit.",
                "Zu den bekanntesten Gemälden gehört Velázquez' Meisterwerk 'Las Meninas'.",
                "Die Sammlung von Francisco de Goya im Prado ist die größte der Welt.",
                "Das Museum zeigt auch Hieronymus Boschs berühmtes Triptychon 'Der Garten der Lüste'.",
                "Insgesamt umfasst die Sammlung des Museums rund 8.600 Gemälde und über 700 Skulpturen.",
                "Der Prado feierte 2019 sein zweihundertjähriges Bestehen mit großen Ausstellungen.",
                "Zusammen mit dem Thyssen-Bornemisza und dem Reina Sofía bildet er das Madrider Kunstdreieck."
          ],
          "hu": [
                "Az épületet eredetileg Juan de Villanueva tervezte természettudományi kabinetként.",
                "A Prado rendelkezik a spanyol festészet legátfogóbb gyűjteményével a világon.",
                "A legismertebb festmények közé tartozik Velázquez remekműve, a 'Las Meninas'.",
                "Francisco de Goya Prado-beli gyűjteménye a legnagyobb a világon.",
                "A múzeumban látható Hieronymus Bosch híres triptichonja, a 'Gyönyörök kertje' is.",
                "A múzeum gyűjteménye összesen mintegy 8600 festményt és több mint 700 szobrot tartalmaz.",
                "A Prado 2019-ben nagyszabású kiállításokkal ünnepelte fennállásának kétszázadik évfordulóját.",
                "A Thyssen-Bornemisza és a Reina Sofía múzeumokkal együtt alkotja a madridi művészeti háromszöget."
          ],
          "ro": [
                "Clădirea a fost inițial concepută ca un cabinet de științe naturale de către Juan de Villanueva.",
                "Prado deține cea mai cuprinzătoare colecție de pictură spaniolă din lume.",
                "Printre cele mai faimoase picturi se numără capodopera lui Velázquez 'Las Meninas'.",
                "Colecția lui Francisco de Goya de la Prado este cea mai mare din lume.",
                "Muzeul expune, de asemenea, celebrul triptic al lui Hieronymus Bosch, 'Grădina deliciilor pământești'.",
                "În total, colecția muzeului include aproximativ 8.600 de picturi și peste 700 de sculpturi.",
                "Prado și-a sărbătorit bicentenarul în 2019 cu expoziții majore.",
                "Împreună cu Thyssen-Bornemisza și Reina Sofía, formează Triunghiul Artei din Madrid."
          ],
          "en": [
                "The building was originally designed as a natural science cabinet by Juan de Villanueva.",
                "The Prado holds the most comprehensive collection of Spanish painting in the world.",
                "Among the most famous paintings is Velázquez's masterpiece 'Las Meninas'.",
                "The Francisco de Goya collection in the Prado is the largest in the world.",
                "The museum also displays Hieronymus Bosch's famous triptych 'The Garden of Earthly Delights'.",
                "In total, the museum's collection includes around 8,600 paintings and over 700 sculptures.",
                "The Prado celebrated its bicentenary in 2019 with major exhibitions.",
                "Together with the Thyssen-Bornemisza and Reina Sofía, it forms Madrid's Golden Triangle of Art."
          ]
    },
    image: "/geo-images/spain/prado-museum.webp",
    
  },
  {
    id: "es-santiago-bernabeu", type: "landmark", parent: "ES-MD", coords: [-3.6883, 40.4531],
    name: {"de": "Santiago Bernabéu Stadion", "hu": "Santiago Bernabéu Stadion", "ro": "Stadionul Santiago Bernabéu", "en": "Santiago Bernabéu Stadium"},
    
    description: {
          "de": "Das Estadio Santiago Bernabéu im Herzen von Madrid ist ein wahrer Tempel des Weltfußballs. Es ist die stolze Heimat des legendären Vereins Real Madrid und Schauplatz zahlreicher epischer Fußballschlachten. Seit seiner Eröffnung im Jahr 1947 wurde das Stadion mehrfach modernisiert und ausgebaut, um den wachsenden Anforderungen gerecht zu werden. Mit seiner beeindruckenden Architektur und der steilen Anordnung der Zuschauerränge erzeugt das Bernabéu eine ohrenbetäubende Atmosphäre bei jedem Spiel. Für Fußballfans ist ein Besuch, der eine Tour durch die Trophäensäle und Spielerkabinen beinhaltet, ein unvergessliches Erlebnis.",
          "hu": "A madridi Estadio Santiago Bernabéu a világ labdarúgásának igazi szentélye. A legendás Real Madrid futballklub büszke otthona, és számos epikus futballcsata helyszíne. 1947-es megnyitása óta a stadiont többször korszerűsítették és bővítették a növekvő igényeknek megfelelően. Lenyűgöző építészetével és a nézőtéri sorok meredek elrendezésével a Bernabéu minden mérkőzésen fülsiketítő hangulatot teremt. A futballrajongók számára egy felejthetetlen élmény a látogatás, amely magában foglalja a trófeatermek és a játékosöltözők megtekintését is.",
          "ro": "Estadio Santiago Bernabéu, situat în inima Madridului, este un adevărat templu al fotbalului mondial. Este casa mândră a legendarului club Real Madrid și scena a numeroase bătălii epice de fotbal. De la deschiderea sa în 1947, stadionul a fost modernizat și extins de mai multe ori pentru a satisface cerințele tot mai mari. Cu arhitectura sa impresionantă și dispunerea abruptă a tribunelor, Bernabéu creează o atmosferă asurzitoare la fiecare meci. Pentru fanii fotbalului, o vizită care include un tur al sălilor cu trofee și al vestiarelor jucătorilor este o experiență de neuitat.",
          "en": "The Estadio Santiago Bernabéu in the heart of Madrid is a true temple of world football. It is the proud home of the legendary Real Madrid football club and the scene of numerous epic football battles. Since its opening in 1947, the stadium has been modernized and expanded several times to meet growing demands. With its impressive architecture and the steep arrangement of the spectator tiers, the Bernabéu creates a deafening atmosphere at every match. For football fans, a visit that includes a tour of the trophy rooms and player changing rooms is an unforgettable experience."
    },
    facts: {
          "de": [
                "Das Stadion ist nach dem ehemaligen Präsidenten von Real Madrid, Santiago Bernabéu, benannt.",
                "Es hat eine Kapazität von über 81.000 Zuschauern.",
                "Das Bernabéu war Gastgeber von vier Endspielen des Europapokals/der Champions League.",
                "Es war der Austragungsort des legendären WM-Finales 1982 zwischen Italien und Deutschland.",
                "Die Stadion-Tour beinhaltet den Zugang zum Spielfeldrand und zur Präsidentenloge.",
                "Das Museum von Real Madrid im Stadion ist das am dritthäufigsten besuchte Museum Madrids.",
                "Aktuell durchläuft das Stadion einen massiven Umbau, der ihm ein futuristisches Aussehen verleihen wird.",
                "Es war das erste Stadion in Europa, das ein UEFA-5-Sterne-Zertifikat erhielt."
          ],
          "hu": [
                "A stadiont a Real Madrid egykori elnökéről, Santiago Bernabéuról nevezték el.",
                "Befogadóképessége több mint 81 000 néző.",
                "A Bernabéu négy Bajnokcsapatok Európa Kupája / Bajnokok Ligája döntőnek adott otthont.",
                "Itt rendezték az 1982-es labdarúgó-világbajnokság legendás, Olaszország és Németország közötti döntőjét.",
                "A stadiontúra magában foglalja a pálya szélére és az elnöki páholyba való belépést is.",
                "A stadionban található Real Madrid múzeum Madrid harmadik leglátogatottabb múzeuma.",
                "A stadion jelenleg masszív átépítés alatt áll, amely futurisztikus megjelenést kölcsönöz neki.",
                "Ez volt az első stadion Európában, amely megkapta az UEFA 5 csillagos minősítését."
          ],
          "ro": [
                "Stadionul este numit după fostul președinte al lui Real Madrid, Santiago Bernabéu.",
                "Are o capacitate de peste 81.000 de spectatori.",
                "Bernabéu a găzduit patru finale ale Cupei Europene / Ligii Campionilor.",
                "A fost locul de desfășurare al legendarei finale a Cupei Mondiale din 1982 dintre Italia și Germania.",
                "Turul stadionului include acces la marginea terenului și la loja prezidențială.",
                "Muzeul Real Madrid de pe stadion este al treilea cel mai vizitat muzeu din Madrid.",
                "În prezent, stadionul trece printr-o reconstrucție masivă care îi va oferi un aspect futurist.",
                "A fost primul stadion din Europa care a primit o certificare de 5 stele UEFA."
          ],
          "en": [
                "The stadium is named after the former president of Real Madrid, Santiago Bernabéu.",
                "It has a seating capacity of over 81,000 spectators.",
                "The Bernabéu has hosted four European Cup/Champions League finals.",
                "It was the venue for the legendary 1982 World Cup final between Italy and West Germany.",
                "The stadium tour includes access to the edge of the pitch and the presidential box.",
                "The Real Madrid museum inside the stadium is the third most visited museum in Madrid.",
                "The stadium is currently undergoing a massive renovation that will give it a futuristic look.",
                "It was the first stadium in Europe to receive a UEFA 5-star certification."
          ]
    },
    image: "/geo-images/spain/santiago-bernab-u-stadium.webp",
    
  },
  {
    id: "es-camp-nou", type: "landmark", parent: "ES-CT", coords: [2.1228, 41.3809],
    name: {"de": "Camp Nou", "hu": "Camp Nou", "ro": "Camp Nou", "en": "Camp Nou"},
    
    description: {
          "de": "Das Camp Nou, majestätisch in Barcelona gelegen, ist das größte Fußballstadion Europas. Als stolzes Heimstadion des FC Barcelona ist es ein Ort voller Leidenschaft, katalanischer Identität und fußballerischer Exzellenz. Das 1957 eingeweihte Stadion hat im Laufe der Jahrzehnte einige der talentiertesten Spieler der Fußballgeschichte gesehen. Die Atmosphäre bei Spielen, besonders während des berühmten 'El Clásico' gegen Real Madrid, ist elektrisierend und weltweit bekannt. Das angeschlossene FC Barcelona Museum zieht jedes Jahr Millionen von Besuchern an und lässt die ruhmreiche Vereinsgeschichte lebendig werden.",
          "hu": "A barcelonai Camp Nou méltóságteljesen magasodik a város fölé, mint Európa legnagyobb futballstadionja. Az FC Barcelona büszke otthonaként a szenvedély, a katalán identitás és a futballkiválóság színhelye. Az 1957-ben felavatott stadion az évtizedek során a futballtörténelem legtehetségesebb játékosait látta játszani. A mérkőzések hangulata, különösen a Real Madrid elleni híres 'El Clásico' alatt, felvillanyozó és világszerte ismert. A stadionhoz tartozó FC Barcelona Múzeum évente látogatók millióit vonzza, és megeleveníti a klub dicsőséges történelmét.",
          "ro": "Camp Nou, situat maiestuos în Barcelona, este cel mai mare stadion de fotbal din Europa. Fiind casa mândră a clubului FC Barcelona, este un loc plin de pasiune, identitate catalană și excelență fotbalistică. Inaugurat în 1957, stadionul a văzut de-a lungul deceniilor unii dintre cei mai talentați jucători din istoria fotbalului. Atmosfera de la meciuri, în special în timpul celebrului 'El Clásico' împotriva lui Real Madrid, este electrizantă și cunoscută în întreaga lume. Muzeul FC Barcelona atașat atrage milioane de vizitatori în fiecare an și dă viață istoriei glorioase a clubului.",
          "en": "Camp Nou, majestically situated in Barcelona, is the largest football stadium in Europe. As the proud home stadium of FC Barcelona, it is a place full of passion, Catalan identity, and footballing excellence. Inaugurated in 1957, the stadium has seen some of the most talented players in football history over the decades. The atmosphere during matches, especially during the famous 'El Clásico' against Real Madrid, is electrifying and known worldwide. The attached FC Barcelona Museum attracts millions of visitors every year and brings the club's glorious history to life."
    },
    facts: {
          "de": [
                "Camp Nou hat eine beeindruckende Zuschauerkapazität von fast 100.000 Plätzen.",
                "Der Name 'Camp Nou' ist Katalanisch und bedeutet wörtlich übersetzt 'Neues Feld'.",
                "Das Stadion beherbergte das Eröffnungsspiel der Fußball-Weltmeisterschaft 1982.",
                "Das Motto des FC Barcelona 'Més que un club' (Mehr als ein Verein) prangt groß auf den Tribünen.",
                "Das FC Barcelona Museum ist das meistbesuchte Museum in ganz Katalonien.",
                "1999 hielt Papst Johannes Paul II. auf dem Rasen des Camp Nou eine Messe ab.",
                "Die Stadiontour ermöglicht es den Besuchern, durch den Spielertunnel auf das Spielfeld zu gehen.",
                "Derzeit wird das Stadion unter dem Projekt 'Espai Barça' umfassend modernisiert und erweitert."
          ],
          "hu": [
                "A Camp Nou lenyűgöző, majdnem 100 000 fős befogadóképességgel rendelkezik.",
                "A 'Camp Nou' név katalán eredetű, szó szerinti fordításban 'Új Mezőt' jelent.",
                "A stadion adott otthont az 1982-es labdarúgó-világbajnokság nyitómérkőzésének.",
                "Az FC Barcelona mottója, a 'Més que un club' (Több mint egy klub) nagy betűkkel virít a lelátókon.",
                "Az FC Barcelona Múzeum a leglátogatottabb múzeum egész Katalóniában.",
                "1999-ben II. János Pál pápa misét tartott a Camp Nou gyepén.",
                "A stadiontúra lehetővé teszi a látogatók számára, hogy a játékoskijárón keresztül lépjenek a pályára.",
                "A stadiont jelenleg az 'Espai Barça' projekt keretében átfogóan korszerűsítik és bővítik."
          ],
          "ro": [
                "Camp Nou are o capacitate impresionantă de aproape 100.000 de locuri.",
                "Numele 'Camp Nou' este catalan și se traduce literalmente ca 'Câmp Nou'.",
                "Stadionul a găzduit meciul de deschidere al Cupei Mondiale FIFA din 1982.",
                "Motto-ul FC Barcelona 'Més que un club' (Mai mult decât un club) este afișat cu litere mari pe tribune.",
                "Muzeul FC Barcelona este cel mai vizitat muzeu din toată Catalonia.",
                "În 1999, Papa Ioan Paul al II-lea a ținut o slujbă pe gazonul de la Camp Nou.",
                "Turul stadionului permite vizitatorilor să iasă pe teren prin tunelul jucătorilor.",
                "În prezent, stadionul este în curs de modernizare și extindere prin proiectul 'Espai Barça'."
          ],
          "en": [
                "Camp Nou has an impressive seating capacity of almost 100,000.",
                "The name 'Camp Nou' is Catalan and literally translates to 'New Field'.",
                "The stadium hosted the opening match of the 1982 FIFA World Cup.",
                "FC Barcelona's motto 'Més que un club' (More than a club) is prominently displayed on the stands.",
                "The FC Barcelona Museum is the most visited museum in all of Catalonia.",
                "In 1999, Pope John Paul II held a mass on the pitch of Camp Nou.",
                "The stadium tour allows visitors to walk onto the pitch through the players' tunnel.",
                "The stadium is currently undergoing comprehensive modernization and expansion under the 'Espai Barça' project."
          ]
    },
    image: "/geo-images/spain/camp-nou.webp",
    
  },
  {
    id: "es-ibiza", type: "landmark", parent: "ES-IB", coords: [1.4322, 38.9067],
    name: {"de": "Ibiza", "hu": "Ibiza", "ro": "Ibiza", "en": "Ibiza"},
    
    description: {
          "de": "Ibiza, eine der Baleareninseln im Mittelmeer, ist weltweit als die unangefochtene Hauptstadt der elektronischen Tanzmusik und des Nachtlebens bekannt. In den Sommermonaten pilgern renommierte DJs und Partyurlauber aus aller Welt auf die Insel, um in den legendären Clubs zu feiern. Doch Ibiza ist viel mehr als nur eine Partyhochburg. Die Insel besticht durch ihre idyllischen, versteckten Buchten, kristallklares Wasser und entspannte Hippie-Märkte. Die historische Altstadt von Ibiza-Stadt, Dalt Vila, ist ein faszinierendes UNESCO-Weltkulturerbe. Ibiza vereint perfekt pulsierendes Nachtleben mit ruhiger, mediterraner Naturschönheit.",
          "hu": "Ibiza, a Földközi-tenger egyik Baleár-szigete, világszerte az elektronikus tánczene és az éjszakai élet vitathatatlan fővárosaként ismert. A nyári hónapokban neves DJ-k és bulizni vágyók zarándokolnak a szigetre a világ minden tájáról, hogy a legendás klubokban ünnepeljenek. Ibiza azonban sokkal több, mint egy buliközpont. A sziget idilli, rejtett öblökkel, kristálytiszta vízzel és nyugodt hippi piacokkal varázsolja el a látogatókat. Ibiza városának történelmi óvárosa, a Dalt Vila lenyűgöző UNESCO világörökség. Ibiza tökéletesen ötvözi a pezsgő éjszakai életet a nyugodt, mediterrán természeti szépségekkel.",
          "ro": "Ibiza, una dintre insulele Baleare din Marea Mediterană, este cunoscută la nivel mondial ca fiind capitala incontestabilă a muzicii dance electronice și a vieții de noapte. În lunile de vară, DJ renumiți și petrecăreți din întreaga lume fac un pelerinaj pe insulă pentru a petrece în cluburile legendare. Cu toate acestea, Ibiza este mult mai mult decât o fortăreață a petrecerilor. Insula captivează prin golfurile sale idilice și ascunse, apa cristalină și piețele hippie relaxate. Orașul vechi istoric din Ibiza, Dalt Vila, este un fascinant sit al Patrimoniului Mondial UNESCO. Ibiza combină perfect viața de noapte vibrantă cu frumusețea naturală calmă, mediteraneană.",
          "en": "Ibiza, one of the Balearic Islands in the Mediterranean, is known worldwide as the undisputed capital of electronic dance music and nightlife. During the summer months, renowned DJs and partygoers from all over the world make a pilgrimage to the island to celebrate in its legendary clubs. Yet Ibiza is much more than just a party stronghold. The island captivates with its idyllic, hidden coves, crystal-clear waters, and relaxed hippie markets. The historic old town of Ibiza Town, Dalt Vila, is a fascinating UNESCO World Heritage site. Ibiza perfectly combines vibrant nightlife with tranquil Mediterranean natural beauty."
    },
    facts: {
          "de": [
                "Ibiza wird wegen ihrer weißen Architektur oft die 'Weiße Insel' (Isla Blanca) genannt.",
                "Die Insel verfügt über einige der berühmtesten Superclubs der Welt wie Pacha, Amnesia und Ushuaïa.",
                "Ibiza war in den 1960er und 70er Jahren ein wichtiges Ziel der Hippie-Bewegung.",
                "Der Hippie-Markt von Punta Arabí ist einer der größten und ältesten der Insel.",
                "Nahe Ibiza liegt die unbewohnte Felseninsel Es Vedrà, die viele Mythen und Legenden umgeben.",
                "Die Inselregierung legt großen Wert auf den Erhalt der geschützten Seegraswiesen (Posidonia).",
                "Neben Party bietet Ibiza zahlreiche ruhige Strände wie Cala Salada und Cala Comte.",
                "Café del Mar in San Antonio ist weltbekannt für chillige Musik zum Sonnenuntergang."
          ],
          "hu": [
                "Ibizát fehér építészete miatt gyakran 'Fehér Szigetnek' (Isla Blanca) is nevezik.",
                "A szigeten olyan világhírű szuperklubok találhatók, mint a Pacha, az Amnesia és az Ushuaïa.",
                "Ibiza a 60-as és 70-es években a hippimozgalom egyik legfontosabb célpontja volt.",
                "A Punta Arabí hippipiac a sziget egyik legnagyobb és legrégebbi piaca.",
                "Ibiza közelében fekszik a lakatlan Es Vedrà sziklasziget, amelyet számos mítosz és legenda övez.",
                "A szigeti önkormányzat nagy hangsúlyt fektet a védett tengerifűrétek (Posidonia) megőrzésére.",
                "A bulik mellett Ibiza számos csendes strandot is kínál, mint a Cala Salada és a Cala Comte.",
                "A San Antonió-i Café del Mar világszerte ismert a naplementéhez játszott chill-out zenéjéről."
          ],
          "ro": [
                "Ibiza este adesea numită 'Insula Albă' (Isla Blanca) datorită arhitecturii sale albe.",
                "Insula are unele dintre cele mai faimoase supercluburi din lume, cum ar fi Pacha, Amnesia și Ushuaïa.",
                "Ibiza a fost o destinație importantă a mișcării hippie în anii '60 și '70.",
                "Piața hippie de la Punta Arabí este una dintre cele mai mari și mai vechi de pe insulă.",
                "Lângă Ibiza se află insula stâncoasă nelocuită Es Vedrà, înconjurată de multe mituri și legende.",
                "Guvernul insulei acordă o mare importanță conservării pajiștilor protejate cu iarbă de mare (Posidonia).",
                "Pe lângă petreceri, Ibiza oferă numeroase plaje liniștite precum Cala Salada și Cala Comte.",
                "Café del Mar din San Antonio este cunoscut în întreaga lume pentru muzica chill-out la apus."
          ],
          "en": [
                "Ibiza is often called the 'White Island' (Isla Blanca) because of its white architecture.",
                "The island boasts some of the most famous superclubs in the world, such as Pacha, Amnesia, and Ushuaïa.",
                "Ibiza was a major destination for the hippie movement in the 1960s and 70s.",
                "The hippie market of Punta Arabí is one of the largest and oldest on the island.",
                "Near Ibiza lies the uninhabited rocky island of Es Vedrà, surrounded by many myths and legends.",
                "The island's government places great importance on preserving the protected seagrass meadows (Posidonia).",
                "Besides partying, Ibiza offers numerous quiet beaches like Cala Salada and Cala Comte.",
                "Café del Mar in San Antonio is world-renowned for chill-out music at sunset."
          ]
    },
    image: "/geo-images/spain/ibiza.webp",
    
  },
  {
    id: "es-mallorca", type: "landmark", parent: "ES-IB", coords: [2.9862, 39.6151],
    name: {"de": "Mallorca", "hu": "Mallorca", "ro": "Mallorca", "en": "Mallorca"},
    
    description: {
          "de": "Mallorca ist die größte der Baleareninseln und ein unbestrittenes Juwel im Mittelmeer. Sie lockt jährlich Millionen von Urlaubern mit ihrer beeindruckenden landschaftlichen Vielfalt. Während der Süden mit lebhaften Stränden und der dynamischen Hauptstadt Palma aufwartet, besticht der Nordwesten durch die wilde, zerklüftete Gebirgskette der Serra de Tramuntana. Hier finden sich malerische Bergdörfer wie Valldemossa und Deià. Mallorca bietet perfekte Bedingungen für Radfahrer, Wanderer und Naturliebhaber. Abseits der belebten Küstenorte findet man unberührte Natur, idyllische Mandelhaine und eine ruhige, authentische mallorquinische Lebensart.",
          "hu": "Mallorca a Baleár-szigetek legnagyobbika, és a Földközi-tenger vitathatatlan ékköve. Lenyűgöző táji sokszínűségével évente turisták millióit vonzza. Míg a déli rész nyüzsgő strandokkal és a dinamikus Palma fővárossal büszkélkedhet, addig az északnyugati oldalt a Serra de Tramuntana vad, csipkézett hegylánca uralja. Itt festői hegyi falvak találhatók, mint Valldemossa és Deià. Mallorca tökéletes feltételeket kínál a kerékpárosok, túrázók és természetbarátok számára. A nyüzsgő tengerparti üdülőhelyektől távol érintetlen természet, idilli mandulaligetek és nyugodt, autentikus mallorcai életmód várja a látogatókat.",
          "ro": "Mallorca este cea mai mare dintre insulele Baleare și o bijuterie incontestabilă a Mării Mediterane. Atrage milioane de turiști anual cu diversitatea sa pitorească impresionantă. În timp ce sudul se mândrește cu plaje pline de viață și capitala dinamică Palma, nord-vestul este dominat de lanțul muntos sălbatic și accidentat Serra de Tramuntana. Aici veți găsi sate de munte pitorești precum Valldemossa și Deià. Mallorca oferă condiții perfecte pentru bicicliști, excursioniști și iubitori de natură. Departe de stațiunile de coastă aglomerate, veți găsi natură neatinsă, livezi idilice de migdali și un mod de viață liniștit, autentic mallorcan.",
          "en": "Mallorca is the largest of the Balearic Islands and an undisputed jewel in the Mediterranean. It attracts millions of holidaymakers annually with its impressive scenic diversity. While the south boasts lively beaches and the dynamic capital Palma, the northwest is characterized by the wild, rugged mountain range of the Serra de Tramuntana. Here you will find picturesque mountain villages like Valldemossa and Deià. Mallorca offers perfect conditions for cyclists, hikers, and nature lovers. Away from the busy coastal resorts, you will find untouched nature, idyllic almond groves, and a tranquil, authentic Mallorcan way of life."
    },
    facts: {
          "de": [
                "Das Gebirge Serra de Tramuntana wurde von der UNESCO zum Weltnaturerbe erklärt.",
                "Mallorca ist weltberühmt für die Herstellung hochwertiger künstlicher Perlen.",
                "Frédéric Chopin verbrachte einen berühmten Winter im Kartäuserkloster von Valldemossa.",
                "Die Tropfsteinhöhlen Cuevas del Drach in Porto Cristo beherbergen einen der größten unterirdischen Seen der Welt.",
                "Der rote Zug 'Roter Blitz' verbindet seit 1912 Palma spektakulär mit Sóller.",
                "Die traditionelle mallorquinische Wurst Sobrasada ist ein lokales kulinarisches Highlight.",
                "Das Cap de Formentor bietet dramatische Steilklippen am nördlichsten Punkt der Insel.",
                "Im Frühjahr lockt die berühmte Mandelblüte Tausende von Touristen auf die Insel."
          ],
          "hu": [
                "A Serra de Tramuntana hegységet az UNESCO a világörökség részévé nyilvánította.",
                "Mallorca világhírű a kiváló minőségű mesterséges gyöngyök gyártásáról.",
                "Frédéric Chopin egy híres telet töltött a valldemossai karthauzi kolostorban.",
                "A Porto Cristo-i Cuevas del Drach cseppkőbarlangban található a világ egyik legnagyobb földalatti tava.",
                "A 'Vörös Villám' (Roter Blitz) nevű piros vonat 1912 óta köti össze látványosan Palmát Sóllerrel.",
                "A hagyományos mallorcai Sobrasada kolbász egy helyi kulináris különlegesség.",
                "A Cap de Formentor drámai sziklafalakat kínál a sziget legészakibb pontján.",
                "Tavasszal a híres mandulavirágzás turisták ezreit vonzza a szigetre."
          ],
          "ro": [
                "Lanțul muntos Serra de Tramuntana a fost declarat Patrimoniu Natural Mondial de către UNESCO.",
                "Mallorca este renumită în întreaga lume pentru producția de perle artificiale de înaltă calitate.",
                "Frédéric Chopin a petrecut o iarnă faimoasă la mănăstirea cartuziană din Valldemossa.",
                "Peșterile cu stalactite Cuevas del Drach din Porto Cristo găzduiesc unul dintre cele mai mari lacuri subterane din lume.",
                "Trenul roșu 'Fulgerul Roșu' conectează spectaculos Palma cu Sóller din 1912.",
                "Cârnatul tradițional mallorcan Sobrasada este o atracție culinară locală.",
                "Cap de Formentor oferă stânci dramatice în cel mai nordic punct al insulei.",
                "Primăvara, faimoșii migdali înfloriți atrag mii de turiști pe insulă."
          ],
          "en": [
                "The Serra de Tramuntana mountain range has been declared a World Natural Heritage site by UNESCO.",
                "Mallorca is world-famous for the production of high-quality artificial pearls.",
                "Frédéric Chopin spent a famous winter at the Carthusian monastery in Valldemossa.",
                "The Cuevas del Drach dripstone caves in Porto Cristo house one of the largest underground lakes in the world.",
                "The red train 'Red Lightning' has spectacularly connected Palma with Sóller since 1912.",
                "The traditional Mallorcan sausage Sobrasada is a local culinary highlight.",
                "Cap de Formentor offers dramatic cliffs at the northernmost point of the island.",
                "In spring, the famous almond blossom attracts thousands of tourists to the island."
          ]
    },
    image: "/geo-images/spain/mallorca.webp",
    
  },
  {
    id: "es-tenerife", type: "landmark", parent: "ES-CN", coords: [-16.6291, 28.2916],
    name: {"de": "Teneriffa", "hu": "Tenerife", "ro": "Tenerife", "en": "Tenerife"},
    
    description: {
          "de": "Teneriffa ist die größte und bevölkerungsreichste der Kanarischen Inseln und liegt majestätisch im Atlantischen Ozean vor der Küste Afrikas. Sie wird oft als 'Insel des ewigen Frühlings' bezeichnet und bietet das ganze Jahr über ein perfektes Klima. Teneriffas Landschaft ist von starken Kontrasten geprägt: vom feuchteren, grünen Norden mit seinen alten Lorbeerwäldern bis zum trockenen, sonnigen Süden, der Badegäste anzieht. In der Mitte thront der gewaltige Vulkan Pico del Teide, Spaniens höchster Berg. Die Insel bietet zudem wunderschöne koloniale Architektur in Orten wie La Laguna und La Orotava.",
          "hu": "Tenerife a Kanári-szigetek legnagyobb és legnépesebb tagja, amely méltóságteljesen fekszik az Atlanti-óceánban, Afrika partjainál. Gyakran az 'örök tavasz szigetének' is nevezik, mivel egész évben tökéletes éghajlatot kínál. Tenerife táját éles kontrasztok jellemzik: a nedvesebb, zöldebb északi rész ősi babérerdőitől a száraz, napos déli részig, amely a fürdőzőket vonzza. Középen magasodik a hatalmas Pico del Teide vulkán, Spanyolország legmagasabb hegye. A sziget emellett gyönyörű gyarmati építészetet is kínál olyan városokban, mint La Laguna és La Orotava.",
          "ro": "Tenerife este cea mai mare și mai populată dintre Insulele Canare, situată maiestuos în Oceanul Atlantic în largul coastei Africii. Este adesea numită 'Insula primăverii veșnice', oferind o climă perfectă pe tot parcursul anului. Peisajul din Tenerife se caracterizează prin contraste puternice: de la nordul mai umed și verde cu pădurile sale de lauri străvechi, până la sudul uscat și însorit care atrage scăldătorii. În centru tronează uriașul vulcan Pico del Teide, cel mai înalt munte din Spania. Insula oferă, de asemenea, arhitectură colonială frumoasă în orașe precum La Laguna și La Orotava.",
          "en": "Tenerife is the largest and most populous of the Canary Islands, lying majestically in the Atlantic Ocean off the coast of Africa. It is often called the 'Island of Eternal Spring', offering a perfect climate all year round. Tenerife's landscape is characterized by stark contrasts: from the wetter, green north with its ancient laurel forests to the dry, sunny south that attracts beachgoers. In the center towers the massive Pico del Teide volcano, Spain's highest mountain. The island also offers beautiful colonial architecture in towns such as La Laguna and La Orotava."
    },
    facts: {
          "de": [
                "Der Pico del Teide ist mit 3.715 Metern der höchste Berg Spaniens.",
                "Teneriffa beheimatet zwei UNESCO-Weltkulturerbestätten: den Teide-Nationalpark und die Stadt San Cristóbal de La Laguna.",
                "Der Loro Parque im Norden der Insel ist einer der bekanntesten und größten Tierparks der Welt.",
                "Die Insel ist berühmt für ihren farbenprächtigen Karneval in Santa Cruz, der zweitgrößte nach Rio de Janeiro.",
                "Teneriffa hat schwarze Sandstrände vulkanischen Ursprungs und weiße Strände aus Sahara-Sand.",
                "Die endemische Kanarische Kiefer prägt weite Teile der bewaldeten Inselgebiete.",
                "Im Meer zwischen Teneriffa und La Gomera kann man das ganze Jahr über Wale und Delfine beobachten.",
                "Die Insel verfügt über ein erstklassiges Observatorium (Observatorio del Teide) aufgrund des klaren Sternenhimmels."
          ],
          "hu": [
                "A Pico del Teide a maga 3715 méterével Spanyolország legmagasabb hegye.",
                "Tenerife két UNESCO világörökségi helyszínnek ad otthont: a Teide Nemzeti Parknak és San Cristóbal de La Laguna városának.",
                "A sziget északi részén található Loro Parque a világ egyik legismertebb és legnagyobb állatparkja.",
                "A sziget híres a színpompás Santa Cruz-i karneválról, amely a második legnagyobb Rio de Janeiro után.",
                "Tenerifének vannak vulkanikus eredetű fekete homokos strandjai, és szaharai homokból álló fehér strandjai is.",
                "Az endemikus kanári fenyő a fás szigetterületek nagy részét meghatározza.",
                "A Tenerife és La Gomera közötti tengeren egész évben megfigyelhetők bálnák és delfinek.",
                "A sziget kiváló csillagvizsgálóval (Observatorio del Teide) rendelkezik a tiszta éjszakai égbolt miatt."
          ],
          "ro": [
                "La 3.715 metri, Pico del Teide este cel mai înalt munte din Spania.",
                "Tenerife găzduiește două situri ale Patrimoniului Mondial UNESCO: Parcul Național Teide și orașul San Cristóbal de La Laguna.",
                "Loro Parque, din nordul insulei, este una dintre cele mai cunoscute și mai mari grădini zoologice din lume.",
                "Insula este faimoasă pentru carnavalul său colorat din Santa Cruz, al doilea ca mărime după Rio de Janeiro.",
                "Tenerife are plaje cu nisip negru de origine vulcanică și plaje albe cu nisip saharian.",
                "Pinul endemic canarian modelează mari părți din zonele împădurite ale insulei.",
                "În oceanul dintre Tenerife și La Gomera pot fi observate balene și delfini pe tot parcursul anului.",
                "Insula are un observator astronomic de primă clasă (Observatorio del Teide) datorită cerului său instelat clar."
          ],
          "en": [
                "At 3,715 meters, the Pico del Teide is the highest mountain in Spain.",
                "Tenerife is home to two UNESCO World Heritage sites: Teide National Park and the city of San Cristóbal de La Laguna.",
                "Loro Parque in the north of the island is one of the most famous and largest animal parks in the world.",
                "The island is famous for its colorful carnival in Santa Cruz, the second largest after Rio de Janeiro.",
                "Tenerife has black sand beaches of volcanic origin and white beaches made of Saharan sand.",
                "The endemic Canary Island pine shapes large parts of the forested island areas.",
                "In the ocean between Tenerife and La Gomera, whales and dolphins can be observed all year round.",
                "The island has a first-class observatory (Observatorio del Teide) due to its clear starry skies."
          ]
    },
    image: "/geo-images/spain/tenerife.webp",
    
  },
  {
    id: "es-gran-canaria", type: "landmark", parent: "ES-CN", coords: [-15.5997, 27.9202],
    name: {"de": "Gran Canaria", "hu": "Gran Canaria", "ro": "Gran Canaria", "en": "Gran Canaria"},
    
    description: {
          "de": "Gran Canaria, die drittgrößte der Kanarischen Inseln, wird oft als 'Miniaturkontinent' bezeichnet. Grund dafür ist ihre unglaubliche klimatische und landschaftliche Vielfalt auf vergleichsweise kleinem Raum. Die Insel bietet alles: von saftig grünen Tälern und tiefen Schluchten im Landesinneren über ausgedehnte Pinienwälder bis hin zu spektakulären Wüstenlandschaften wie den berühmten Sanddünen von Maspalomas im Süden. Die lebhafte Hauptstadt Las Palmas de Gran Canaria besticht durch ihre wunderschöne koloniale Altstadt (Vegueta). Gran Canaria ist ein Paradies für Sonnenanbeter, Surfer und Wanderer gleichermaßen.",
          "hu": "Gran Canariát, a Kanári-szigetek harmadik legnagyobbikát gyakran 'miniatűr kontinensnek' is nevezik. Ennek oka a viszonylag kis területen tapasztalható hihetetlen éghajlati és táji sokszínűség. A sziget mindent kínál: a buja zöld völgyektől és a szárazföld belsejében lévő mély szurdokoktól kezdve a kiterjedt fenyőerdőkön át a látványos sivatagi tájakig, mint a híres maspalomasi homokdűnék délen. A nyüzsgő főváros, Las Palmas de Gran Canaria gyönyörű gyarmati óvárosával (Vegueta) bűvöl el. Gran Canaria a napimádók, a szörfösök és a túrázók paradicsoma egyaránt.",
          "ro": "Gran Canaria, a treia ca mărime dintre Insulele Canare, este adesea numită 'continent în miniatură'. Motivul pentru aceasta este incredibila sa diversitate climatică și peisagistică într-un spațiu relativ mic. Insula oferă de toate: de la văi verzi luxuriante și defileuri adânci în interior, la păduri extinse de pini și peisaje deșertice spectaculoase, cum ar fi faimoasele dune de nisip din Maspalomas în sud. Capitala plină de viață, Las Palmas de Gran Canaria, captivează cu frumosul său oraș vechi colonial (Vegueta). Gran Canaria este un paradis pentru iubitorii de soare, surferi și excursioniști deopotrivă.",
          "en": "Gran Canaria, the third largest of the Canary Islands, is often referred to as a 'miniature continent'. The reason for this is its incredible climatic and scenic diversity in a relatively small area. The island offers everything: from lush green valleys and deep ravines in the interior, to extensive pine forests, to spectacular desert landscapes like the famous sand dunes of Maspalomas in the south. The lively capital Las Palmas de Gran Canaria captivates with its beautiful colonial old town (Vegueta). Gran Canaria is a paradise for sun worshipers, surfers, and hikers alike."
    },
    facts: {
          "de": [
                "Der Roque Nublo ist mit 1.813 Metern das markante vulkanische Wahrzeichen im Zentrum der Insel.",
                "Die Insel wurde 2005 von der UNESCO zum Biosphärenreservat erklärt.",
                "Las Palmas de Gran Canaria ist, neben Santa Cruz de Tenerife, eine der beiden Hauptstädte der Kanaren.",
                "Die Dünen von Maspalomas wandern ständig und verändern ihre Form durch den Wind.",
                "Gran Canaria ist bekannt für den Anbau von Bananen, Tomaten und sogar Kaffee.",
                "Der Risco Caído und die heiligen Berge von Gran Canaria sind UNESCO-Weltkulturerbe.",
                "Die Insel war eine wichtige Zwischenstation für Christoph Kolumbus auf seinen Reisen nach Amerika.",
                "Im charmanten Fischerdorf Puerto de Mogán wird aufgrund seiner Kanäle auch vom 'Klein-Venedig' gesprochen."
          ],
          "hu": [
                "A Roque Nublo a maga 1813 méterével a sziget központjának jellegzetes vulkanikus szimbóluma.",
                "A szigetet 2005-ben az UNESCO bioszféra-rezervátummá nyilvánította.",
                "Las Palmas de Gran Canaria, Santa Cruz de Tenerife mellett, a Kanári-szigetek két fővárosának egyike.",
                "A maspalomasi dűnék a szél miatt folyamatosan vándorolnak és változtatják az alakjukat.",
                "Gran Canaria ismert a banán-, a paradicsom- és még a kávétermesztésről is.",
                "A Risco Caído és Gran Canaria szent hegyei az UNESCO világörökség részét képezik.",
                "A sziget fontos megállóhely volt Kolumbusz Kristóf számára az Amerikába vezető útjain.",
                "Puerto de Mogán bájos halászfaluját csatornái miatt 'Kis Velencének' is nevezik."
          ],
          "ro": [
                "Roque Nublo, la 1.813 metri, este reperul vulcanic izbitor din centrul insulei.",
                "Insula a fost declarată Rezervație a Biosferei de către UNESCO în 2005.",
                "Las Palmas de Gran Canaria este, alături de Santa Cruz de Tenerife, una dintre cele două capitale ale Canarelor.",
                "Dunele din Maspalomas migrează constant și își schimbă forma din cauza vântului.",
                "Gran Canaria este cunoscută pentru cultivarea bananelor, roșiilor și chiar a cafelei.",
                "Risco Caído și Munții Sacri din Gran Canaria sunt un sit al Patrimoniului Mondial UNESCO.",
                "Insula a fost o escală importantă pentru Cristofor Columb în călătoriile sale spre America.",
                "Fermecătorul sat de pescari Puerto de Mogán este numit și 'Mica Veneție' datorită canalelor sale."
          ],
          "en": [
                "Roque Nublo, at 1,813 meters, is the striking volcanic landmark in the center of the island.",
                "The island was declared a Biosphere Reserve by UNESCO in 2005.",
                "Las Palmas de Gran Canaria is, along with Santa Cruz de Tenerife, one of the two capitals of the Canaries.",
                "The dunes of Maspalomas are constantly migrating and changing their shape due to the wind.",
                "Gran Canaria is known for the cultivation of bananas, tomatoes, and even coffee.",
                "Risco Caído and the Sacred Mountains of Gran Canaria are a UNESCO World Heritage site.",
                "The island was an important stopover for Christopher Columbus on his voyages to the Americas.",
                "The charming fishing village of Puerto de Mogán is also called 'Little Venice' due to its canals."
          ]
    },
    image: "/geo-images/spain/gran-canaria.webp",
    
  },
  {
    id: "es-pyrenees", type: "landmark", parent: "ES-AR", coords: [-0.0763, 42.6687],
    name: {"de": "Pyrenäen", "hu": "Pireneusok", "ro": "Pirinei", "en": "Pyrenees"},
    
    description: {
          "de": "Die Pyrenäen bilden eine natürliche, schroffe Gebirgsgrenze zwischen Spanien und Frankreich, die sich über mehr als 400 Kilometer vom Atlantischen Ozean bis zum Mittelmeer erstreckt. Diese spektakuläre Bergkette ist geprägt von schneebedeckten Gipfeln von über 3.000 Metern Höhe, tiefen Gletschertälern, tosenden Wasserfällen und dichten Wäldern. Auf der spanischen Seite erstrecken sich die Pyrenäen über Navarra, Aragonien und Katalonien und bieten einige der spektakulärsten Nationalparks Europas, wie den Ordesa y Monte Perdido. Es ist ein erstklassiges Ziel für Bergsteiger, Skifahrer und Naturliebhaber, die Ruhe und alpine Herausforderungen suchen.",
          "hu": "A Pireneusok természetes, zord hegyvidéki határt képeznek Spanyolország és Franciaország között, amely több mint 400 kilométeren át húzódik az Atlanti-óceántól a Földközi-tengerig. Ezt a látványos hegyláncot 3000 métert is meghaladó hófödte csúcsok, mély gleccservölgyek, dübörgő vízesések és sűrű erdők jellemzik. A spanyol oldalon a Pireneusok Navarrán, Aragónián és Katalónián ívelnek át, és Európa leglátványosabb nemzeti parkjait kínálják, mint például az Ordesa y Monte Perdido. Első osztályú célpont a hegymászók, síelők és a természet szerelmesei számára, akik nyugalmat és alpesi kihívásokat keresnek.",
          "ro": "Pirineii formează o graniță muntoasă naturală și accidentată între Spania și Franța, care se întinde pe mai mult de 400 de kilometri de la Oceanul Atlantic până la Marea Mediterană. Acest lanț muntos spectaculos este caracterizat de vârfuri acoperite de zăpadă de peste 3.000 de metri înălțime, văi adânci glaciare, cascade vijelioase și păduri dese. Pe partea spaniolă, Pirineii se întind pe Navarra, Aragon și Catalonia și oferă unele dintre cele mai spectaculoase parcuri naționale din Europa, cum ar fi Ordesa y Monte Perdido. Este o destinație de primă clasă pentru alpiniști, schiori și iubitori de natură care caută liniște și provocări alpine.",
          "en": "The Pyrenees form a natural, rugged mountain border between Spain and France, stretching for more than 400 kilometers from the Atlantic Ocean to the Mediterranean Sea. This spectacular mountain range is characterized by snow-capped peaks over 3,000 meters high, deep glacial valleys, roaring waterfalls, and dense forests. On the Spanish side, the Pyrenees stretch across Navarre, Aragon, and Catalonia, offering some of Europe's most spectacular national parks, such as Ordesa y Monte Perdido. It is a premier destination for mountaineers, skiers, and nature lovers seeking tranquility and alpine challenges."
    },
    facts: {
          "de": [
                "Der Pico de Aneto ist mit 3.404 Metern der höchste Berg der Pyrenäen.",
                "Der Nationalpark Ordesa y Monte Perdido in Aragonien ist ein UNESCO-Weltnaturerbe.",
                "Die Pyrenäen beherbergen noch kleine, schrumpfende Gletscher an ihren höchsten Gipfeln.",
                "Im Gebirge liegt der Zwergstaat Andorra, eingeklemmt zwischen Spanien und Frankreich.",
                "Die Berge sind ein wichtiger Lebensraum für den seltenen Pyrenäenbären und Bartgeier.",
                "Zahlreiche renommierte Skiresorts, wie Baqueira-Beret, befinden sich auf spanischer Seite.",
                "Der Fernwanderweg GR 11 durchquert die gesamten spanischen Pyrenäen von Küste zu Küste.",
                "Historisch gesehen bildeten die Pyrenäen eine bedeutende kulturelle und politische Barriere in Europa."
          ],
          "hu": [
                "A Pico de Aneto 3404 méterével a Pireneusok legmagasabb hegye.",
                "Az aragóniai Ordesa y Monte Perdido Nemzeti Park az UNESCO világörökség része.",
                "A Pireneusok legmagasabb csúcsain még ma is találhatók kis, zsugorodó gleccserek.",
                "A hegységben fekszik Andorra törpeállama, beszorítva Spanyolország és Franciaország közé.",
                "A hegyek fontos élőhelyei a ritka pireneusi barna medvének és a szakállas keselyűnek.",
                "Számos neves síközpont, például a Baqueira-Beret található a spanyol oldalon.",
                "A GR 11 távolsági túraútvonal átszeli a teljes spanyol Pireneusokat parttól partig.",
                "Történelmileg a Pireneusok jelentős kulturális és politikai akadályt képeztek Európában."
          ],
          "ro": [
                "Pico de Aneto, la 3.404 metri, este cel mai înalt munte din Pirinei.",
                "Parcul Național Ordesa y Monte Perdido din Aragon este un sit al Patrimoniului Natural Mondial UNESCO.",
                "Pirineii încă mai adăpostesc ghețari mici, în scădere, pe cele mai înalte vârfuri ale lor.",
                "Microstatul Andorra este situat în munți, prins între Spania și Franța.",
                "Munții sunt un habitat important pentru rarul urs brun de Pirinei și zăgan.",
                "Numeroase stațiuni de schi renumite, cum ar fi Baqueira-Beret, sunt situate pe partea spaniolă.",
                "Traseul de drumeții pe distanțe lungi GR 11 traversează toți Pirineii spanioli de la coastă la coastă.",
                "Din punct de vedere istoric, Pirineii au format o barieră culturală și politică semnificativă în Europa."
          ],
          "en": [
                "The Pico de Aneto, at 3,404 meters, is the highest mountain in the Pyrenees.",
                "The Ordesa y Monte Perdido National Park in Aragon is a UNESCO World Natural Heritage site.",
                "The Pyrenees still host small, shrinking glaciers on their highest peaks.",
                "The microstate of Andorra is located in the mountains, wedged between Spain and France.",
                "The mountains are an important habitat for the rare Pyrenean brown bear and bearded vulture.",
                "Numerous renowned ski resorts, such as Baqueira-Beret, are located on the Spanish side.",
                "The GR 11 long-distance hiking trail crosses the entire Spanish Pyrenees from coast to coast.",
                "Historically, the Pyrenees formed a significant cultural and political barrier in Europe."
          ]
    },
    image: "/geo-images/spain/pyrenees.webp",
    
  },
  {
    id: "es-sierra-nevada", type: "landmark", parent: "ES-AN", coords: [-3.3000, 37.0500],
    name: {"de": "Sierra Nevada", "hu": "Sierra Nevada", "ro": "Sierra Nevada", "en": "Sierra Nevada"},
    
    description: {
          "de": "Die Sierra Nevada, wörtlich das 'schneebedeckte Gebirge', ist eine atemberaubende Bergkette im Süden Spaniens, hauptsächlich in der Provinz Granada. Sie ist das zweithöchste Gebirgsmassiv Westeuropas nach den Alpen und weist mit dem Mulhacén den höchsten Gipfel des spanischen Festlands auf. Bemerkenswert ist der starke Kontrast: Während man oben auf den Gletschern skifahren kann, leuchten unten an der Costa Tropical die Palmen im Sonnenschein. Der Großteil des Gebirges ist als Nationalpark und UNESCO-Biosphärenreservat geschützt und beheimatet eine unglaubliche Vielfalt an Flora und Fauna, darunter viele endemische Arten.",
          "hu": "A Sierra Nevada, szó szerint 'hófödte hegység', egy lélegzetelállító hegylánc Dél-Spanyolországban, főként Granada tartományban. Az Alpok után Nyugat-Európa második legmagasabb hegymasszívuma, és a Mulhacénnel a spanyol szárazföld legmagasabb csúcsával büszkélkedhet. A heles kontraszt figyelemre méltó: miközben odafent a gleccsereken síelni lehet, lent a Costa Tropical partján pálmafák sütkéreznek a napsütésben. A hegység nagy része nemzeti parkként és UNESCO bioszféra-rezervátumként védett, és hihetetlenül gazdag növény- és állatvilágnak, köztük számos endemikus fajnak ad otthont.",
          "ro": "Sierra Nevada, literalmente 'lanțul muntos înzăpezit', este un lanț muntos uluitor în sudul Spaniei, situat în principal în provincia Granada. Este al doilea cel mai înalt masiv muntos din Europa de Vest după Alpi și se mândrește cu cel mai înalt vârf din Spania continentală, Mulhacén. Contrastul puternic este remarcabil: în timp ce se poate schia pe ghețarii de sus, palmierii strălucesc în soare jos, pe Costa Tropical. Cea mai mare parte a lanțului muntos este protejată ca parc național și rezervație a biosferei UNESCO și găzduiește o varietate incredibilă de floră și faună, inclusiv multe specii endemice.",
          "en": "The Sierra Nevada, literally the 'snow-covered mountain range', is a breathtaking mountain range in southern Spain, mainly in the province of Granada. It is the second highest mountain massif in Western Europe after the Alps and boasts the highest peak in mainland Spain, the Mulhacén. The stark contrast is remarkable: while one can ski on the glaciers above, palm trees shine in the sun below on the Costa Tropical. Most of the mountain range is protected as a national park and UNESCO biosphere reserve and is home to an incredible variety of flora and fauna, including many endemic species."
    },
    facts: {
          "de": [
                "Der Mulhacén ist mit 3.482 Metern der höchste Berg der Iberischen Halbinsel.",
                "Die Sierra Nevada beherbergt das südlichste Skigebiet Europas.",
                "Die Fahrt von den Skipisten zu den Stränden des Mittelmeers dauert oft weniger als zwei Stunden.",
                "Das Gebirge wurde 1986 von der UNESCO zum Biosphärenreservat erklärt.",
                "Es gibt über 2.100 erfasste Pflanzenarten, wovon mehr als 60 nur hier vorkommen.",
                "Das Observatorium der Sierra Nevada nutzt die saubere Bergluft für astronomische Forschungen.",
                "Die Region Las Alpujarras an den Südhängen ist berühmt für ihre weißen Dörfer und Berberarchitektur.",
                "Im Sommer ist das Gebiet ein Paradies für anspruchsvolle Mountainbiker und Wanderer."
          ],
          "hu": [
                "A Mulhacén 3482 méterével az Ibériai-félsziget legmagasabb hegye.",
                "A Sierra Nevadában található Európa legdélebbi síterepe.",
                "A sípályáktól a Földközi-tenger strandjaiig tartó út gyakran kevesebb mint két órát vesz igénybe.",
                "A hegységet 1986-ban az UNESCO bioszféra-rezervátummá nyilvánította.",
                "Több mint 2100 regisztrált növényfaj él itt, amelyek közül több mint 60 csak ezen a területen található meg.",
                "A Sierra Nevada Obszervatórium a tiszta hegyi levegőt használja csillagászati kutatásokhoz.",
                "A déli lejtőkön elterülő Las Alpujarras régió híres fehér falvairól és berber építészetéről.",
                "Nyáron a terület a kihívásokat kereső hegyikerékpárosok és túrázók paradicsoma."
          ],
          "ro": [
                "Mulhacén, la 3.482 de metri, este cel mai înalt munte din Peninsula Iberică.",
                "Sierra Nevada găzduiește cea mai sudică stațiune de schi din Europa.",
                "Călătoria de la pârtiile de schi la plajele Mării Mediterane durează adesea mai puțin de două ore.",
                "Lanțul muntos a fost declarat rezervație a biosferei de către UNESCO în 1986.",
                "Există peste 2.100 de specii de plante înregistrate, dintre care peste 60 se găsesc doar aici.",
                "Observatorul din Sierra Nevada folosește aerul curat de munte pentru cercetări astronomice.",
                "Regiunea Las Alpujarras de pe versanții sudici este renumită pentru satele sale albe și arhitectura berberă.",
                "Vara, zona este un paradis pentru cicliștii de munte și drumeții exigenți."
          ],
          "en": [
                "The Mulhacén is the highest mountain on the Iberian Peninsula at 3,482 meters.",
                "The Sierra Nevada is home to Europe's southernmost ski resort.",
                "The drive from the ski slopes to the beaches of the Mediterranean often takes less than two hours.",
                "The mountain range was declared a biosphere reserve by UNESCO in 1986.",
                "There are over 2,100 recorded plant species, more than 60 of which are found only here.",
                "The Sierra Nevada Observatory uses the clean mountain air for astronomical research.",
                "The Las Alpujarras region on the southern slopes is famous for its white villages and Berber architecture.",
                "In summer, the area is a paradise for demanding mountain bikers and hikers."
          ]
    },
    image: "/geo-images/spain/sierra-nevada.webp",
    
  },
  {
    id: "es-picos-europa", type: "landmark", parent: "ES-AS", coords: [-4.8458, 43.1979],
    name: {"de": "Picos de Europa", "hu": "Picos de Europa", "ro": "Picos de Europa", "en": "Picos de Europa"},
    
    description: {
          "de": "Die Picos de Europa ('Gipfel Europas') bilden ein spektakuläres, zerklüftetes Kalksteinmassiv im Kantabrischen Gebirge in Nordspanien. Das Gebirge erstreckt sich über die Regionen Asturien, Kantabrien und Kastilien und León. Die Landschaft ist wild und dramatisch, geprägt von tiefen Schluchten, gähnenden Abgründen wie der Cares-Schlucht und hoch aufragenden, fast senkrechten Felswänden, die bei Kletterern aus aller Welt begehrt sind. Neben der rauen Geologie zeichnet sich der Nationalpark durch unberührte Buchen- und Eichenwälder, malerische Bergseen (die Lagos de Covadonga) und eine reiche, ursprüngliche Tierwelt aus. Es ist ein echtes Paradies für Abenteurer und Naturliebhaber.",
          "hu": "A Picos de Europa ('Európa csúcsai') egy látványos, csipkézett mészkőmasszívum Észak-Spanyolországban, a Kantábriai-hegységben. A hegység Asztúria, Kantábria, valamint Kasztília és León régiókon ível át. A táj vad és drámai, mély szurdokok, tátongó szakadékok, mint a Cares-szurdok, és magasba törő, szinte függőleges sziklafalak jellemzik, amelyek a sziklamászók kedvencei szerte a világon. A zord geológia mellett a nemzeti parkot érintetlen bükk- és tölgyerdők, festői hegyi tavak (a Lagos de Covadonga) és gazdag, eredeti állatvilág jellemzi. Igazi paradicsom a kalandorok és a természet szerelmesei számára.",
          "ro": "Picos de Europa ('Vârfurile Europei') formează un masiv de calcar spectaculos și accidentat în Munții Cantabrici din nordul Spaniei. Munții se întind pe regiunile Asturia, Cantabria și Castilia și León. Peisajul este sălbatic și dramatic, caracterizat prin defileuri adânci, prăpăstii căscate, precum Defileul Cares, și pereți de stâncă falnici, aproape verticali, foarte căutați de alpiniștii din întreaga lume. Pe lângă geologia aspră, parcul național este caracterizat de păduri virgine de fag și stejar, lacuri de munte pitorești (Lagos de Covadonga) și o viață sălbatică bogată și originală. Este un adevărat paradis pentru aventurieri și iubitori de natură.",
          "en": "The Picos de Europa ('Peaks of Europe') form a spectacular, rugged limestone massif in the Cantabrian Mountains of northern Spain. The mountains stretch across the regions of Asturias, Cantabria, and Castile and León. The landscape is wild and dramatic, characterized by deep gorges, yawning abysses like the Cares Gorge, and towering, almost vertical rock walls that are highly sought after by climbers from all over the world. In addition to the harsh geology, the national park features pristine beech and oak forests, picturesque mountain lakes (the Lagos de Covadonga), and a rich, original wildlife. It is a true paradise for adventurers and nature lovers."
    },
    facts: {
          "de": [
                "Der Nationalpark Picos de Europa, 1918 gegründet, war der erste Nationalpark Spaniens.",
                "Der Torre de Cerredo ist mit 2.650 Metern der höchste Gipfel des Massivs.",
                "Der Naranjo de Bulnes (Picu Urriellu) ist ein markanter Kalksteinmonolith und ein Mekka für Kletterer.",
                "Die Schlucht 'Garganta del Cares' bietet eine der berühmtesten und atemberaubendsten Wanderrouten Spaniens.",
                "In den Bergen wird in Naturhöhlen der berühmte Blauschimmelkäse 'Cabrales' gereift.",
                "Das Gebiet ist ein Refugium für bedrohte Tierarten wie den Kantabrischen Braunbären und den iberischen Wolf.",
                "Die Höhle und Basilika von Covadonga sind ein wichtiger historischer und religiöser Ort für Spanien.",
                "Es gibt eine Seilbahn bei Fuente Dé, die Besucher in wenigen Minuten auf über 1.800 Meter Höhe bringt."
          ],
          "hu": [
                "Az 1918-ban alapított Picos de Europa Nemzeti Park volt Spanyolország első nemzeti parkja.",
                "A Torre de Cerredo 2650 méterével a masszívum legmagasabb csúcsa.",
                "A Naranjo de Bulnes (Picu Urriellu) egy jellegzetes mészkőmonolit, a sziklamászók mekkája.",
                "A 'Garganta del Cares' szurdok Spanyolország egyik leghíresebb és leglélegzetelállítóbb túraútvonalát kínálja.",
                "A hegyek természetes barlangjaiban érlelik a híres 'Cabrales' kéksajtot.",
                "A terület olyan veszélyeztetett állatfajok menedéke, mint a kantábriai barna medve és az ibériai farkas.",
                "Covadonga barlangja és bazilikája fontos történelmi és vallási helyszín Spanyolország számára.",
                "Fuente Dénél található egy drótkötélpálya, amely percek alatt több mint 1800 méteres magasságba viszi a látogatókat."
          ],
          "ro": [
                "Parcul Național Picos de Europa, înființat în 1918, a fost primul parc național din Spania.",
                "Torre de Cerredo este cel mai înalt vârf al masivului, la 2.650 de metri.",
                "Naranjo de Bulnes (Picu Urriellu) este un monolit izbitor de calcar și o mecca pentru alpiniști.",
                "Defileul 'Garganta del Cares' oferă unul dintre cele mai faimoase și mai uluitoare trasee de drumeții din Spania.",
                "Faimoasa brânză cu mucegai albastru 'Cabrales' este maturată în peșteri naturale din munți.",
                "Zona este un refugiu pentru specii pe cale de dispariție, cum ar fi ursul brun cantabric și lupul iberic.",
                "Peștera și bazilica din Covadonga sunt un important sit istoric și religios pentru Spania.",
                "Există o telecabină la Fuente Dé care duce vizitatorii la peste 1.800 de metri altitudine în câteva minute."
          ],
          "en": [
                "The Picos de Europa National Park, established in 1918, was Spain's first national park.",
                "The Torre de Cerredo is the highest peak of the massif at 2,650 meters.",
                "The Naranjo de Bulnes (Picu Urriellu) is a striking limestone monolith and a mecca for climbers.",
                "The 'Garganta del Cares' gorge offers one of the most famous and breathtaking hiking trails in Spain.",
                "The famous 'Cabrales' blue cheese is matured in natural caves in the mountains.",
                "The area is a refuge for endangered species such as the Cantabrian brown bear and the Iberian wolf.",
                "The cave and basilica of Covadonga are an important historical and religious site for Spain.",
                "There is a cable car at Fuente Dé that takes visitors to an altitude of over 1,800 meters in just a few minutes."
          ]
    },
    image: "/geo-images/spain/picos-de-europa.webp",
    
  },
  {
    id: "es-costa-brava", type: "landmark", parent: "ES-CT", coords: [3.1235, 41.9750],
    name: {"de": "Costa Brava", "hu": "Costa Brava", "ro": "Costa Brava", "en": "Costa Brava"},
    
    description: {
          "de": "Die Costa Brava, die 'Wilde Küste', erstreckt sich entlang der nordöstlichen Küste Kataloniens von Blanes bis zur französischen Grenze. Ihren Namen verdankt sie der rauen, zerklüfteten Felsküste, die abrupt ins tiefblaue Mittelmeer abfällt. Versteckt zwischen diesen Klippen liegen unzählige malerische, pinienumsäumte Buchten (Calas) mit kristallklarem Wasser. Entlang der Küste finden sich bezaubernde mittelalterliche Dörfer wie Pals, traditionelle Fischerorte wie Cadaqués und antike griechisch-römische Ruinen bei Empúries. Die Costa Brava zog schon immer Künstler an, allen voran Salvador Dalí, dessen Erbe die Region bis heute prägt.",
          "hu": "A Costa Brava, a 'Vad part', Katalónia északkeleti partvidékén húzódik Blanestől egészen a francia határig. Nevét a zord, csipkézett sziklás partvonalról kapta, amely hirtelen szakad a mélykék Földközi-tengerbe. E sziklák között megbújva számtalan festői, fenyőfákkal szegélyezett öböl (Cala) található kristálytiszta vízzel. A part mentén elbűvölő középkori falvak, mint Pals, hagyományos halászfalvak, mint Cadaqués, és ókori görög-római romok (Empúries) találhatók. A Costa Brava mindig is vonzotta a művészeket, legfőképpen Salvador Dalít, akinek öröksége a mai napig meghatározza a régiót.",
          "ro": "Costa Brava, 'Coasta Sălbatică', se întinde de-a lungul coastei de nord-est a Cataloniei, de la Blanes până la granița cu Franța. Își datorează numele coastei stâncoase aspre, accidentate, care cade brusc în adâncul Mării Mediterane albastre. Ascunse printre aceste stânci se află nenumărate golfuri pitorești, mărginite de pini (Calas), cu ape cristaline. De-a lungul coastei veți găsi sate medievale fermecătoare precum Pals, sate tradiționale de pescari precum Cadaqués și ruine antice greco-romane lângă Empúries. Costa Brava a atras întotdeauna artiști, mai ales pe Salvador Dalí, a cărui moștenire continuă să modeleze regiunea și astăzi.",
          "en": "The Costa Brava, the 'Wild Coast', stretches along the northeastern coast of Catalonia from Blanes to the French border. It owes its name to the rough, rugged rocky coastline that drops abruptly into the deep blue Mediterranean Sea. Hidden among these cliffs are countless picturesque, pine-fringed coves (Calas) with crystal-clear water. Along the coast, you will find charming medieval villages like Pals, traditional fishing villages like Cadaqués, and ancient Greco-Roman ruins near Empúries. The Costa Brava has always attracted artists, most notably Salvador Dalí, whose legacy continues to shape the region today."
    },
    facts: {
          "de": [
                "Der berühmte surrealistische Maler Salvador Dalí lebte lange in Portlligat nahe Cadaqués.",
                "Das Teatre-Museu Dalí in Figueres ist das größte surrealistische Objekt der Welt.",
                "Die Ruinen von Empúries sind die einzige Stätte der iberischen Halbinsel, an der griechische und römische Reste vereint sind.",
                "Ein wunderschöner Küstenwanderweg (Camí de Ronda) verbindet fast die gesamte Costa Brava.",
                "Die Medes-Inseln vor der Küste sind ein geschütztes Meeresreservat und ein Taucherparadies.",
                "Die Region besitzt eine exzellente Gastronomie und mehrere Michelin-Sterne-Restaurants.",
                "Der Botanische Garten Marimurtra in Blanes bietet atemberaubende Klippenaussichten.",
                "Die Costa Brava war in den 1950er Jahren der Beginn des spanischen Massentourismus-Booms."
          ],
          "hu": [
                "A híres szürrealista festő, Salvador Dalí sokáig a Cadaqués melletti Portlligatban élt.",
                "A figueresi Teatre-Museu Dalí a világ legnagyobb szürrealista létesítménye.",
                "Az empúries-i romok az egyetlen hely az Ibériai-félszigeten, ahol a görög és római maradványok egyesülnek.",
                "Egy gyönyörű tengerparti túraútvonal (Camí de Ronda) szinte az egész Costa Bravát összeköti.",
                "A part menti Medes-szigetek védett tengeri rezervátum és a búvárok paradicsoma.",
                "A régió kiváló gasztronómiával és számos Michelin-csillagos étteremmel büszkélkedhet.",
                "A blanesi Marimurtra botanikus kert lélegzetelállító kilátást nyújt a sziklákra.",
                "Az 1950-es években a Costa Brava indította el a spanyol tömegturizmus fellendülését."
          ],
          "ro": [
                "Faimosul pictor suprarealist Salvador Dalí a locuit mult timp în Portlligat, lângă Cadaqués.",
                "Teatre-Museu Dalí din Figueres este cel mai mare obiect suprarealist din lume.",
                "Ruinele de la Empúries sunt singurul loc din Peninsula Iberică unde sunt combinate vestigii grecești și romane.",
                "O frumoasă potecă de coastă pentru drumeții (Camí de Ronda) conectează aproape întreaga Costa Brava.",
                "Insulele Medes din largul coastei sunt o rezervație marină protejată și un paradis pentru scafandri.",
                "Regiunea se mândrește cu o gastronomie excelentă și mai multe restaurante cu stele Michelin.",
                "Grădina Botanică Marimurtra din Blanes oferă vederi uimitoare ale stâncilor.",
                "În anii 1950, Costa Brava a fost începutul boom-ului turismului de masă din Spania."
          ],
          "en": [
                "The famous surrealist painter Salvador Dalí lived in Portlligat near Cadaqués for a long time.",
                "The Teatre-Museu Dalí in Figueres is the largest surrealist object in the world.",
                "The ruins of Empúries are the only site on the Iberian Peninsula where Greek and Roman remains are combined.",
                "A beautiful coastal hiking trail (Camí de Ronda) connects almost the entire Costa Brava.",
                "The Medes Islands off the coast are a protected marine reserve and a paradise for divers.",
                "The region boasts excellent gastronomy and several Michelin-starred restaurants.",
                "The Marimurtra Botanical Garden in Blanes offers breathtaking cliff views.",
                "In the 1950s, the Costa Brava was the start of the Spanish mass tourism boom."
          ]
    },
    image: "/geo-images/spain/costa-brava.webp",
    
  },
  {
    id: "es-costa-del-sol", type: "landmark", parent: "ES-AN", coords: [-4.6318, 36.5360],
    name: {"de": "Costa del Sol", "hu": "Costa del Sol", "ro": "Costa del Sol", "en": "Costa del Sol"},
    
    description: {
          "de": "Die Costa del Sol, die 'Sonnenküste', ist Spaniens berühmtester Küstenstreifen im Süden Andalusiens, zentriert um die Stadt Málaga. Mit über 320 Sonnentagen im Jahr macht sie ihrem Namen alle Ehre und zieht Besucher aus ganz Europa an. Das Landschaftsbild reicht von langen, goldenen Sandstränden bis zu dramatischen Bergen direkt im Hinterland. Während mondäne Ferienorte wie Marbella mit luxuriösen Yachthäfen (Puerto Banús), teuren Boutiquen und Golfplätzen protzen, versprühen traditionelle 'Weiße Dörfer' (Pueblos Blancos) in den Bergen authentischen andalusischen Charme. Die Costa del Sol ist eine perfekte Destination für Strandurlaub, Nachtleben und Freizeitsport.",
          "hu": "A Costa del Sol, a 'Napos part', Spanyolország leghíresebb partvonala Andalúzia déli részén, Málaga városa körül. Az évi több mint 320 napsütéses nappal méltó a nevére, és egész Európából vonzza a látogatókat. A táj hosszú, aranyhomokos strandoktól kezdve közvetlenül a hátországban húzódó drámai hegyekig terjed. Míg az olyan divatos üdülőhelyek, mint Marbella luxusjachtkikötőkkel (Puerto Banús), drága butikokkal és golfpályákkal büszkélkedhetnek, addig a hegyekben lévő hagyományos 'Fehér falvak' (Pueblos Blancos) autentikus andalúz bájt árasztanak. A Costa del Sol tökéletes célpont a tengerparti nyaraláshoz, az éjszakai élethez és a szabadidős sportokhoz.",
          "ro": "Costa del Sol, 'Coasta Soarelui', este cea mai faimoasă porțiune de coastă a Spaniei din sudul Andaluziei, centrată în jurul orașului Málaga. Cu peste 320 de zile de soare pe an, își respectă numele și atrage vizitatori din toată Europa. Peisajul variază de la plaje lungi cu nisip auriu la munți dramatici chiar în interior. În timp ce stațiunile la modă, cum ar fi Marbella, se mândresc cu porturi de lux pentru iahturi (Puerto Banús), buticuri scumpe și terenuri de golf, „Satele Albe” (Pueblos Blancos) tradiționale din munți emană un farmec andaluz autentic. Costa del Sol este o destinație perfectă pentru vacanțe la plajă, viață de noapte și sporturi de agrement.",
          "en": "The Costa del Sol, the 'Sun Coast', is Spain's most famous stretch of coastline in southern Andalusia, centered around the city of Málaga. With over 320 days of sunshine a year, it lives up to its name and attracts visitors from all over Europe. The landscape ranges from long, golden sandy beaches to dramatic mountains right in the hinterland. While fashionable resorts like Marbella boast luxurious yacht marinas (Puerto Banús), expensive boutiques, and golf courses, traditional 'White Villages' (Pueblos Blancos) in the mountains exude authentic Andalusian charm. The Costa del Sol is a perfect destination for beach holidays, nightlife, and leisure sports."
    },
    facts: {
          "de": [
                "Aufgrund der außergewöhnlich hohen Dichte an Golfplätzen wird die Region auch oft 'Costa del Golf' genannt.",
                "Puerto Banús in Marbella ist einer der exklusivsten und teuersten Yachthäfen Europas.",
                "Nerja ist ein beliebtes Küstenstädtchen, das für seinen Aussichtspunkt 'Balkon von Europa' bekannt ist.",
                "Mijas ist ein typisches, malerisches weißes Bergdorf, das Touristen Esel-Taxis anbietet.",
                "Die Küste wurde in den 1960er und 70er Jahren stark für den Tourismus ausgebaut.",
                "Die riesigen Tropfsteinhöhlen von Nerja beherbergen Spuren prähistorischer Kunst.",
                "Das Hinterland bietet hervorragende Wanderwege in Naturparks wie der Sierra de las Nieves.",
                "Die Region ist berühmt für frittierten Fisch ('Pescaito Frito'), der in kleinen Strandrestaurants (Chiringuitos) serviert wird."
          ],
          "hu": [
                "A golfpályák kivételesen nagy sűrűsége miatt a régiót gyakran 'Costa del Golf'-nak is hívják.",
                "A marbellai Puerto Banús Európa egyik legexkluzívabb és legdrágább jachtkikötője.",
                "Nerja egy népszerű tengerparti kisváros, amely az 'Európa erkélye' kilátópontról ismert.",
                "Mijas egy tipikus, festői fehér hegyi falu, amely szamártaxit kínál a turistáknak.",
                "A tengerpartot az 1960-as és 70-es években erősen beépítették a turizmus számára.",
                "A hatalmas nerjai cseppkőbarlangokban őskori művészet nyomai találhatók.",
                "A hátország kiváló túraútvonalakat kínál olyan natúrparkokban, mint a Sierra de las Nieves.",
                "A régió híres a kis parti éttermekben (chiringuitos) felszolgált sült halról ('Pescaito Frito')."
          ],
          "ro": [
                "Datorită densității excepțional de mari de terenuri de golf, regiunea este adesea numită și 'Costa del Golf'.",
                "Puerto Banús din Marbella este unul dintre cele mai exclusiviste și scumpe porturi de iahturi din Europa.",
                "Nerja este un oraș de coastă popular, cunoscut pentru punctul său de belvedere 'Balconul Europei'.",
                "Mijas este un sat de munte alb tipic și pitoresc, care oferă taxiuri trase de măgari pentru turiști.",
                "Coasta a fost puternic dezvoltată pentru turism în anii 1960 și '70.",
                "Uriașele peșteri cu stalactite din Nerja adăpostesc urme de artă preistorică.",
                "Interiorul oferă trasee excelente de drumeții în parcuri naturale precum Sierra de las Nieves.",
                "Regiunea este renumită pentru peștele prăjit ('Pescaito Frito'), servit în mici restaurante pe plajă (chiringuitos)."
          ],
          "en": [
                "Due to the exceptionally high density of golf courses, the region is also often called 'Costa del Golf'.",
                "Puerto Banús in Marbella is one of the most exclusive and expensive yacht marinas in Europe.",
                "Nerja is a popular coastal town known for its 'Balcony of Europe' viewpoint.",
                "Mijas is a typical, picturesque white mountain village that offers donkey taxis to tourists.",
                "The coast was heavily developed for tourism in the 1960s and 70s.",
                "The huge dripstone caves of Nerja house traces of prehistoric art.",
                "The hinterland offers excellent hiking trails in natural parks such as the Sierra de las Nieves.",
                "The region is famous for fried fish ('Pescaito Frito') served in small beach restaurants (chiringuitos)."
          ]
    },
    image: "/geo-images/spain/costa-del-sol.webp",
    
  },
{
  "id": "es-gaudi-casa-batllo",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.165,
    41.392
  ],
  "name": {
    "de": "Casa Batlló",
    "hu": "Casa Batlló",
    "ro": "Casa Batlló",
    "en": "Casa Batlló"
  },
  "image": "/geo-images/spain/gaudi-casa-batllo.webp",
  "description": {
    "de": "Casa Batlló ist ein Meisterwerk des Architekten Antoni Gaudí in Barcelona. Es zeichnet sich durch seine organischen Formen und die farbenfrohe Mosaikfassade aus. Das Gebäude wurde zwischen 1904 und 1906 umfassend umgebaut und ist heute ein UNESCO-Weltkulturerbe.",
    "hu": "A Casa Batlló Antoni Gaudí építész egyik barcelonai remekműve. Szerves formáiról és színes mozaikhomlokzatáról híres. Az épületet 1904 és 1906 között építették át, és ma az UNESCO világörökség része.",
    "ro": "Casa Batlló este o capodoperă a arhitectului Antoni Gaudí din Barcelona. Este renumită pentru formele sale organice și fațada colorată din mozaic. Clădirea a fost reconstruită între 1904 și 1906 și este astăzi în Patrimoniul Mondial UNESCO.",
    "en": "Casa Batlló is a masterpiece by the architect Antoni Gaudí in Barcelona. It is famous for its organic forms and colorful mosaic facade. The building was rebuilt between 1904 and 1906 and is now a UNESCO World Heritage Site."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Befindet sich am Passeig de Gràcia.",
      "Wird lokal 'Haus der Knochen' genannt.",
      "Das Dach stellt einen Drachenrücken dar.",
      "Verfügt über bunte Keramikmosaike (Trencadís).",
      "Gehört seit 2005 zum UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "A Passeig de Gràcia utcában található.",
      "A helyiek 'Csontok házának' hívják.",
      "A tető egy sárkány hátát ábrázolja.",
      "Színes kerámiamozaikokkal (trencadís) díszített.",
      "2005 óta az UNESCO világörökség része."
    ],
    "ro": [
      "Proiectată de Antoni Gaudí.",
      "Se află pe Passeig de Gràcia.",
      "Numită local 'Casa Oaselor'.",
      "Acoperișul reprezintă spatele unui dragon.",
      "Decorată cu mozaicuri ceramice colorate (trencadís).",
      "Face parte din Patrimoniul UNESCO din 2005."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Located on the Passeig de Gràcia.",
      "Locally called the 'House of Bones'.",
      "The roof represents a dragon's back.",
      "Decorated with colorful ceramic mosaics (trencadís).",
      "Part of the UNESCO World Heritage since 2005."
    ]
  }
},
{
  "id": "es-gaudi-casa-mila",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.162,
    41.395
  ],
  "name": {
    "de": "Casa Milà (La Pedrera)",
    "hu": "Casa Milà (La Pedrera)",
    "ro": "Casa Milà (La Pedrera)",
    "en": "Casa Milà (La Pedrera)"
  },
  "image": "/geo-images/spain/gaudi-casa-mila.webp",
  "description": {
    "de": "Casa Milà, auch bekannt als La Pedrera, ist ein weiteres ikonisches Werk von Antoni Gaudí. Es war das letzte private Wohnhaus, das der Architekt entwarf. Die unkonventionelle steinerne Fassade und die schmiedeeisernen Balkone machen es zu einem Meisterwerk des Modernismus.",
    "hu": "A Casa Milà, más néven La Pedrera, Antoni Gaudí újabb ikonikus alkotása. Ez volt az építész által tervezett utolsó magánlakás. A rendhagyó kőhomlokzat és a kovácsoltvas erkélyek a modernizmus mesterművévé teszik.",
    "ro": "Casa Milà, cunoscută și sub numele de La Pedrera, este o altă lucrare iconică a lui Antoni Gaudí. A fost ultima reședință privată proiectată de arhitect. Fațada sa neconvențională din piatră și balcoanele din fier forjat o fac o capodoperă a modernismului.",
    "en": "Casa Milà, also known as La Pedrera, is another iconic work by Antoni Gaudí. It was the last private residence designed by the architect. Its unconventional stone facade and wrought iron balconies make it a masterpiece of Modernism."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Erbaut zwischen 1906 und 1912.",
      "La Pedrera bedeutet 'der Steinbruch'.",
      "Bekannt für seine surrealen Schornsteine auf dem Dach.",
      "Hat keine tragenden Wände, nur Säulen.",
      "Seit 1984 UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "1906 és 1912 között épült.",
      "A La Pedrera jelentése 'a kőbánya'.",
      "A tetőn lévő szürreális kéményekről ismert.",
      "Nincsenek teherhordó falai, csak oszlopai.",
      "1984 óta UNESCO világörökség."
    ],
    "ro": [
      "Proiectată de Antoni Gaudí.",
      "Construită între 1906 și 1912.",
      "La Pedrera înseamnă 'cariera de piatră'.",
      "Renumită pentru coșurile de fum suprarealiste de pe acoperiș.",
      "Nu are pereți portanți, ci doar stâlpi.",
      "Patrimoniu Mondial UNESCO din 1984."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Built between 1906 and 1912.",
      "La Pedrera means 'the stone quarry'.",
      "Famous for its surreal chimneys on the roof.",
      "Has no load-bearing walls, only columns.",
      "UNESCO World Heritage site since 1984."
    ]
  }
},
{
  "id": "es-picasso-museum",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.18,
    41.385
  ],
  "name": {
    "de": "Picasso-Museum",
    "hu": "Picasso Múzeum",
    "ro": "Muzeul Picasso",
    "en": "Picasso Museum Barcelona"
  },
  "image": "/geo-images/spain/picasso-museum.webp",
  "description": {
    "de": "Das Picasso-Museum in Barcelona beherbergt eine der umfangreichsten Sammlungen von Kunstwerken von Pablo Picasso. Es konzentriert sich besonders auf seine frühen Werke und seine prägenden Jahre in der Stadt. Das Museum befindet sich in fünf mittelalterlichen Palästen im Viertel El Born.",
    "hu": "A barcelonai Picasso Múzeum Pablo Picasso műveinek egyik legkiterjedtebb gyűjteményének ad otthont. Különös hangsúlyt fektet korai műveire és a városban töltött meghatározó éveire. A múzeum öt középkori palotában kapott helyet az El Born negyedben.",
    "ro": "Muzeul Picasso din Barcelona găzduiește una dintre cele mai vaste colecții de opere de artă ale lui Pablo Picasso. Se concentrează în special pe lucrările sale timpurii și pe anii săi de formare în oraș. Muzeul este situat în cinci palate medievale din cartierul El Born.",
    "en": "The Picasso Museum in Barcelona houses one of the most extensive collections of artworks by Pablo Picasso. It focuses particularly on his early works and his formative years in the city. The museum is located in five medieval palaces in the El Born district."
  },
  "facts": {
    "de": [
      "Eröffnet im Jahr 1963.",
      "Beherbergt über 4.000 Werke von Picasso.",
      "Erstes Museum, das Picasso gewidmet wurde.",
      "Untergebracht in fünf zusammenhängenden gotischen Palästen.",
      "Zeigt Picassos Serie 'Las Meninas'.",
      "Veranschaulicht Picassos tiefe Verbundenheit mit Barcelona."
    ],
    "hu": [
      "1963-ban nyílt meg.",
      "Több mint 4000 Picasso-művet őriz.",
      "Az első Picassónak szentelt múzeum volt.",
      "Öt egymásba nyíló gótikus palotában található.",
      "Kiállítják itt a 'Las Meninas' sorozatát.",
      "Bemutatja Picasso mély kötődését Barcelonához."
    ],
    "ro": [
      "Deschis în 1963.",
      "Găzduiește peste 4.000 de lucrări ale lui Picasso.",
      "Primul muzeu dedicat lui Picasso.",
      "Găzduit în cinci palate gotice interconectate.",
      "Expune seria 'Las Meninas' a lui Picasso.",
      "Ilustrează legătura profundă a lui Picasso cu Barcelona."
    ],
    "en": [
      "Opened in 1963.",
      "Houses over 4,000 works by Picasso.",
      "First museum dedicated to Picasso.",
      "Housed in five interconnected Gothic palaces.",
      "Displays Picasso's 'Las Meninas' series.",
      "Illustrates Picasso's deep connection with Barcelona."
    ]
  }
},
{
  "id": "es-montserrat",
  "type": "mountain",
  "parent": "ES-CT",
  "coords": [
    1.836,
    41.604
  ],
  "name": {
    "de": "Kloster Montserrat",
    "hu": "Montserrat kolostor",
    "ro": "Mănăstirea Montserrat",
    "en": "Montserrat monastery"
  },
  "image": "/geo-images/spain/montserrat.webp",
  "description": {
    "de": "Das Kloster Montserrat liegt spektakulär eingebettet in den gezackten Felsen des gleichnamigen Gebirges in Katalonien. Es ist ein wichtiges spirituelles Zentrum und beherbergt die berühmte Schwarze Madonna. Besucher genießen sowohl die religiöse Bedeutung als auch die atemberaubende Aussicht.",
    "hu": "A Montserrat kolostor látványosan bújik meg a névadó hegyvidék csipkézett sziklái között Katalóniában. Fontos szellemi központ, és a híres Fekete Madonna otthona. A látogatók a vallási jelentőségét és a lélegzetelállító kilátást egyaránt élvezik.",
    "ro": "Mănăstirea Montserrat este spectaculos înconjurată de stâncile zimțate ale lanțului muntos cu același nume din Catalonia. Este un centru spiritual important și adăpostește celebra Madonă Neagră. Vizitatorii se bucură atât de semnificația sa religioasă, cât și de priveliștile uimitoare.",
    "en": "The Montserrat Monastery is spectacularly nestled in the jagged rocks of the mountain range of the same name in Catalonia. It is an important spiritual center and houses the famous Black Madonna. Visitors enjoy both its religious significance and breathtaking views."
  },
  "facts": {
    "de": [
      "Gegründet im 11. Jahrhundert.",
      "Liegt auf etwa 720 Metern Höhe.",
      "Heimat der 'La Moreneta' (Schwarze Madonna).",
      "Verfügt über einen der ältesten Knabenchöre Europas, die Escolania.",
      "Bietet Zugang über eine Seilbahn und eine Zahnradbahn.",
      "Ein beliebtes Ziel für Pilger und Wanderer."
    ],
    "hu": [
      "A 11. században alapították.",
      "Körülbelül 720 méteres magasságban fekszik.",
      "A 'La Moreneta' (Fekete Madonna) otthona.",
      "Itt működik Európa egyik legrégebbi fiúkórusa, az Escolania.",
      "Drótkötélpályán és fogaskerekűn is megközelíthető.",
      "Népszerű célpont zarándokok és túrázók számára."
    ],
    "ro": [
      "Fondată în secolul al XI-lea.",
      "Situată la aproximativ 720 de metri altitudine.",
      "Casa 'La Moreneta' (Madona Neagră).",
      "Găzduiește unul dintre cele mai vechi coruri de băieți din Europa, Escolania.",
      "Accesibilă cu o telecabină și o cale ferată cu cremalieră.",
      "O destinație populară pentru pelerini și drumeți."
    ],
    "en": [
      "Founded in the 11th century.",
      "Located at about 720 meters altitude.",
      "Home to 'La Moreneta' (Black Madonna).",
      "Features one of Europe's oldest boys' choirs, the Escolania.",
      "Offers access via a cable car and a rack railway.",
      "A popular destination for pilgrims and hikers."
    ]
  }
},
{
  "id": "es-valencia-oceanografic",
  "type": "kid-landmark",
  "parent": "ES-VC",
  "coords": [
    -0.352,
    39.453
  ],
  "name": {
    "de": "Oceanogràfic Valencia",
    "hu": "Oceanogràfic Valencia",
    "ro": "Oceanogràfic Valencia",
    "en": "Oceanogràfic Valencia"
  },
  "image": "/geo-images/spain/valencia-oceanografic.webp",
  "description": {
    "de": "Das Oceanogràfic in Valencia ist das größte Aquarium in Europa und ein Paradies für Meeresliebhaber. Es beherbergt tausende von Tieren aus verschiedenen marinen Ökosystemen auf der ganzen Welt. Besonders beeindruckend ist der Unterwassertunnel, in dem man Haie und Rochen hautnah erleben kann.",
    "hu": "A valenciai Oceanogràfic Európa legnagyobb akváriuma és a tenger szerelmeseinek paradicsoma. Több ezer állatnak ad otthont a világ különböző tengeri ökoszisztémáiból. Különösen lenyűgöző a víz alatti alagút, ahol cápákat és rájákat láthatunk testközelből.",
    "ro": "Oceanogràfic din Valencia este cel mai mare acvariu din Europa și un paradis pentru iubitorii de mare. Găzduiește mii de animale din diverse ecosisteme marine din întreaga lume. Deosebit de impresionant este tunelul subacvatic, unde puteți vedea rechini și pisici de mare de aproape.",
    "en": "The Oceanogràfic in Valencia is the largest aquarium in Europe and a paradise for marine lovers. It houses thousands of animals from various marine ecosystems around the world. Especially impressive is the underwater tunnel where you can experience sharks and rays up close."
  },
  "facts": {
    "de": [
      "Größtes Aquarium in Europa.",
      "Beherbergt über 45.000 Tiere aus 500 Arten.",
      "Architektur von Félix Candela entworfen.",
      "Umfasst arktische, antarktische und tropische Lebensräume.",
      "Besitzt ein großes Delfinarium.",
      "Bietet Programme zum Schutz der Meerestiere an."
    ],
    "hu": [
      "Európa legnagyobb akváriuma.",
      "Több mint 500 faj 45 000 egyedének ad otthont.",
      "Az épületet Félix Candela tervezte.",
      "Sarkvidéki, antarktiszi és trópusi élőhelyeket is bemutat.",
      "Nagy delfináriummal is rendelkezik.",
      "Tengeri állatvédelmi programokat működtet."
    ],
    "ro": [
      "Cel mai mare acvariu din Europa.",
      "Găzduiește peste 45.000 de animale din 500 de specii.",
      "Arhitectură proiectată de Félix Candela.",
      "Include habitate arctice, antarctice și tropicale.",
      "Are un delfinariu mare.",
      "Oferă programe de conservare marină."
    ],
    "en": [
      "Largest aquarium in Europe.",
      "Houses over 45,000 animals from 500 species.",
      "Architecture designed by Félix Candela.",
      "Includes Arctic, Antarctic, and tropical habitats.",
      "Features a large dolphinarium.",
      "Offers marine conservation programs."
    ]
  }
},
{
  "id": "es-valencia-city-of-arts",
  "type": "landmark",
  "parent": "ES-VC",
  "coords": [
    -0.354,
    39.454
  ],
  "name": {
    "de": "Stadt der Künste und Wissenschaften",
    "hu": "Művészetek és Tudományok Városa",
    "ro": "Orașul Artelor și Științelor",
    "en": "City of Arts and Sciences"
  },
  "image": "/geo-images/spain/valencia-city-of-arts.webp",
  "description": {
    "de": "Die Stadt der Künste und Wissenschaften ist ein futuristischer Gebäudekomplex in Valencia. Entworfen von Santiago Calatrava, vereint sie Wissenschaft, Kunst und Unterhaltung in einer einzigartigen architektonischen Landschaft. Es ist das moderne Wahrzeichen der Stadt.",
    "hu": "A Művészetek és Tudományok Városa egy futurisztikus épületkomplexum Valenciában. A Santiago Calatrava által tervezett együttes a tudományt, a művészetet és a szórakozást ötvözi egyedülálló építészeti környezetben. Ez a város modern jelképe.",
    "ro": "Orașul Artelor și Științelor este un complex de clădiri futuriste din Valencia. Proiectat de Santiago Calatrava, combină știința, arta și divertismentul într-un peisaj arhitectural unic. Este reperul modern al orașului.",
    "en": "The City of Arts and Sciences is a futuristic building complex in Valencia. Designed by Santiago Calatrava, it combines science, art, and entertainment in a unique architectural landscape. It is the modern landmark of the city."
  },
  "facts": {
    "de": [
      "Erbaut im ehemaligen Flussbett des Turia.",
      "Entworfen vom Stararchitekten Santiago Calatrava.",
      "Enthält ein IMAX-Kino (L'Hemisfèric).",
      "Umfasst ein interaktives Wissenschaftsmuseum.",
      "Der Palau de les Arts beherbergt das Opernhaus.",
      "Beliebte Kulisse für Science-Fiction-Filme und Serien."
    ],
    "hu": [
      "A Turia folyó kiszáradt medrében épült.",
      "A sztárépítész, Santiago Calatrava tervezte.",
      "Itt található az L'Hemisfèric IMAX mozi.",
      "Interaktív tudományos múzeumot is magában foglal.",
      "A Palau de les Arts ad otthont az operaháznak.",
      "Népszerű forgatási helyszín sci-fi filmekhez és sorozatokhoz."
    ],
    "ro": [
      "Construit în fosta albie a râului Turia.",
      "Proiectat de arhitectul vedetă Santiago Calatrava.",
      "Conține un cinematograf IMAX (L'Hemisfèric).",
      "Include un muzeu interactiv de știință.",
      "Palau de les Arts găzduiește opera.",
      "Decor popular pentru filme și seriale SF."
    ],
    "en": [
      "Built in the former riverbed of the Turia.",
      "Designed by star architect Santiago Calatrava.",
      "Contains an IMAX cinema (L'Hemisfèric).",
      "Includes an interactive science museum.",
      "The Palau de les Arts houses the opera house.",
      "Popular backdrop for sci-fi movies and series."
    ]
  }
},
{
  "id": "es-mallorca-palma",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    2.65,
    39.569
  ],
  "name": {
    "de": "Palma de Mallorca",
    "hu": "Palma de Mallorca",
    "ro": "Palma de Mallorca",
    "en": "Palma de Mallorca"
  },
  "image": "/geo-images/spain/mallorca-palma.webp",
  "description": {
    "de": "Palma ist die Hauptstadt der Baleareninsel Mallorca. Die Stadt beeindruckt durch ihre gewaltige gotische Kathedrale La Seu, die direkt am Meer thront. Neben historischen Sehenswürdigkeiten bietet Palma eine lebhafte Altstadt und wunderschöne Strände in der Nähe.",
    "hu": "Palma Mallorca szigetének fővárosa. A város egyik fő látványossága a közvetlenül a tengerparton magasodó hatalmas gótikus katedrális, a La Seu. A történelmi látnivalók mellett Palma nyüzsgő óvárossal és gyönyörű közeli strandokkal büszkélkedhet.",
    "ro": "Palma este capitala insulei baleare Mallorca. Orașul impresionează prin masiva sa catedrală gotică La Seu, situată chiar pe malul mării. Pe lângă atracțiile istorice, Palma oferă un oraș vechi plin de viață și plaje frumoase în apropiere.",
    "en": "Palma is the capital of the Balearic island of Mallorca. The city impresses with its massive Gothic cathedral, La Seu, which sits right on the seafront. In addition to historical sights, Palma offers a lively old town and beautiful nearby beaches."
  },
  "facts": {
    "de": [
      "Hauptstadt der Autonomen Gemeinschaft der Balearen.",
      "Heimat der Kathedrale La Seu (Baubeginn 1229).",
      "Castell de Bellver ist eine seltene runde Burg.",
      "Verfügt über einen großen internationalen Flughafen.",
      "Malerische Altstadt mit engen Gassen.",
      "Beliebtes Ziel für europäischen Tourismus."
    ],
    "hu": [
      "A Baleár-szigetek autonóm közösség fővárosa.",
      "A La Seu katedrális otthona (építése 1229-ben kezdődött).",
      "A Castell de Bellver egy ritka, kerek alaprajzú vár.",
      "Nagy nemzetközi repülőtérrel rendelkezik.",
      "Festői óvárosa szűk utcácskákkal van tele.",
      "Az európai turizmus egyik legnépszerűbb célpontja."
    ],
    "ro": [
      "Capitala comunității autonome a Insulelor Baleare.",
      "Casa catedralei La Seu (începută în 1229).",
      "Castell de Bellver este un castel rotund rar.",
      "Are un aeroport internațional mare.",
      "Oraș vechi pitoresc, cu străzi înguste.",
      "Destinație populară pentru turismul european."
    ],
    "en": [
      "Capital of the autonomous community of the Balearic Islands.",
      "Home to the La Seu Cathedral (begun in 1229).",
      "Castell de Bellver is a rare circular castle.",
      "Features a large international airport.",
      "Picturesque old town with narrow streets.",
      "Popular destination for European tourism."
    ]
  }
},
{
  "id": "es-ibiza-town",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    1.433,
    38.906
  ],
  "name": {
    "de": "Ibiza-Stadt",
    "hu": "Ibiza város",
    "ro": "Orașul Ibiza",
    "en": "Ibiza Town"
  },
  "image": "/geo-images/spain/ibiza-town.webp",
  "description": {
    "de": "Ibiza-Stadt, katalanisch Eivissa, ist weltbekannt für ihr pulsierendes Nachtleben und die historische Altstadt Dalt Vila. Die befestigte Oberstadt, umgeben von Renaissance-Mauern, gehört zum UNESCO-Weltkulturerbe. Die Stadt zieht sowohl Partygänger als auch Kulturliebhaber an.",
    "hu": "Ibiza városa (katalánul Eivissa) világszerte ismert pezsgő éjszakai életéről és történelmi óvárosáról, a Dalt Viláról. A reneszánsz falakkal körülvett erődített felsőváros az UNESCO világörökség része. A város a bulizni vágyókat és a kultúra szerelmeseit egyaránt vonzza.",
    "ro": "Orașul Ibiza, în catalană Eivissa, este faimos în întreaga lume pentru viața de noapte vibrantă și orașul vechi istoric Dalt Vila. Orașul de sus fortificat, înconjurat de ziduri renascentiste, este un sit al Patrimoniului Mondial UNESCO. Orașul atrage atât petrecăreți, cât și iubitori de cultură.",
    "en": "Ibiza Town, natively Eivissa, is world-renowned for its vibrant nightlife and the historic Dalt Vila old town. The fortified upper town, surrounded by Renaissance walls, is a UNESCO World Heritage site. The city attracts both partygoers and culture lovers."
  },
  "facts": {
    "de": [
      "Lokaler Name ist Eivissa.",
      "Die Altstadt Dalt Vila ist UNESCO-Weltkulturerbe.",
      "Berühmt für weltbekannte Nachtclubs wie Pacha.",
      "Besitzt wichtige archäologische phönizische Stätten.",
      "Der Hafen zieht viele Luxusyachten an.",
      "Beliebte Urlaubsdestination im Mittelmeer."
    ],
    "hu": [
      "Helyi neve Eivissa.",
      "A Dalt Vila óváros UNESCO világörökség.",
      "Olyan világhírű éjszakai klubokról ismert, mint a Pacha.",
      "Jelentős föníciai régészeti lelőhelyekkel rendelkezik.",
      "A kikötő számos luxusjachtot vonz.",
      "Népszerű nyaralóhely a Földközi-tengeren."
    ],
    "ro": [
      "Numele local este Eivissa.",
      "Orașul vechi Dalt Vila este în Patrimoniul Mondial UNESCO.",
      "Faimos pentru cluburi de noapte de renume mondial precum Pacha.",
      "Are situri arheologice feniciene importante.",
      "Portul atrage multe iahturi de lux.",
      "Destinație populară de vacanță în Marea Mediterană."
    ],
    "en": [
      "Local name is Eivissa.",
      "The old town Dalt Vila is a UNESCO World Heritage site.",
      "Famous for world-renowned nightclubs like Pacha.",
      "Has important Phoenician archaeological sites.",
      "The harbor attracts many luxury yachts.",
      "Popular holiday destination in the Mediterranean."
    ]
  }
},
{
  "id": "es-tenerife-teide",
  "type": "mountain",
  "parent": "ES-CN",
  "coords": [
    -16.644,
    28.273
  ],
  "name": {
    "de": "Pico del Teide",
    "hu": "Teide",
    "ro": "Muntele Teide",
    "en": "Mount Teide"
  },
  "image": "/geo-images/spain/tenerife-teide.webp",
  "description": {
    "de": "Der Pico del Teide auf der Insel Teneriffa ist der höchste Berg Spaniens. Dieser imposante Schichtvulkan bildet das Zentrum des Teide-Nationalparks, der eine einzigartige Mondlandschaft aufweist. Besucher können mit einer Seilbahn bis fast an den Gipfel fahren.",
    "hu": "A Tenerife szigetén magasodó Teide Spanyolország legmagasabb hegye. Ez az impozáns rétegvulkán alkotja a Teide Nemzeti Park központját, amely egyedülálló, holdszerű tájjal rendelkezik. A látogatók drótkötélpályán majdnem a csúcsig feljuthatnak.",
    "ro": "Muntele Teide de pe insula Tenerife este cel mai înalt munte din Spania. Acest stratovulcan impunător formează centrul Parcului Național Teide, care prezintă un peisaj lunar unic. Vizitatorii pot urca cu telecabina aproape de vârf.",
    "en": "Mount Teide on the island of Tenerife is the highest mountain in Spain. This imposing stratovolcano forms the center of the Teide National Park, which features a unique lunar landscape. Visitors can take a cable car almost to the summit."
  },
  "facts": {
    "de": [
      "Höchster Berg Spaniens (3.715 Meter).",
      "Dritthöchster Vulkan der Erde (vom Meeresgrund gemessen).",
      "Teide-Nationalpark ist UNESCO-Weltnaturerbe.",
      "Letzter Ausbruch in der Teide-Region war 1909.",
      "Eine Seilbahn führt bis auf 3.555 Meter Höhe.",
      "Beliebtes Ziel für Sternenbeobachter."
    ],
    "hu": [
      "Spanyolország legmagasabb hegye (3715 méter).",
      "A világ harmadik legmagasabb vulkánja (a tengerfenéktől mérve).",
      "A Teide Nemzeti Park az UNESCO világörökség része.",
      "Utolsó kitörése a Teide régióban 1909-ben volt.",
      "A drótkötélpálya 3555 méteres magasságig visz fel.",
      "A csillagászok és csillagnézők kedvelt célpontja."
    ],
    "ro": [
      "Cel mai înalt munte din Spania (3.715 metri).",
      "Al treilea vulcan ca înălțime din lume (măsurat de la fundul oceanului).",
      "Parcul Național Teide este Patrimoniu Mondial UNESCO.",
      "Ultima erupție în regiunea Teide a fost în 1909.",
      "O telecabină urcă până la 3.555 de metri.",
      "O destinație populară pentru observarea stelelor."
    ],
    "en": [
      "Highest mountain in Spain (3,715 meters).",
      "Third highest volcano on Earth (measured from the ocean floor).",
      "Teide National Park is a UNESCO World Heritage site.",
      "Last eruption in the Teide region was in 1909.",
      "A cable car goes up to 3,555 meters.",
      "A popular destination for stargazers."
    ]
  }
},
{
  "id": "es-gran-canaria-dunes",
  "type": "landmark",
  "parent": "ES-CN",
  "coords": [
    -15.566,
    27.737
  ],
  "name": {
    "de": "Dünen von Maspalomas",
    "hu": "Maspalomas homokdűnéi",
    "ro": "Dunele din Maspalomas",
    "en": "Maspalomas Dunes"
  },
  "image": "/geo-images/spain/gran-canaria-dunes.webp",
  "description": {
    "de": "Die Dünen von Maspalomas sind ein faszinierendes Naturschutzgebiet im Süden Gran Canarias. Sie bieten eine spektakuläre Wüstenlandschaft direkt am Atlantischen Ozean. Das Gebiet umfasst auch eine Oase und einen Palmenhain, die eine reiche Vogelwelt anziehen.",
    "hu": "A maspalomasi dűnék lenyűgöző természetvédelmi területet alkotnak Gran Canaria déli részén. Látványos sivatagi tájat kínálnak közvetlenül az Atlanti-óceán partján. A terület egy oázist és egy pálmaligetet is magában foglal, amelyek gazdag madárvilágot vonzanak.",
    "ro": "Dunele din Maspalomas sunt o rezervație naturală fascinantă în sudul insulei Gran Canaria. Oferă un peisaj deșertic spectaculos chiar la Oceanul Atlantic. Zona include, de asemenea, o oază și o plantație de palmieri care atrag numeroase păsări.",
    "en": "The Maspalomas Dunes are a fascinating nature reserve in the south of Gran Canaria. They offer a spectacular desert landscape right on the Atlantic Ocean. The area also includes an oasis and a palm grove that attract a rich birdlife."
  },
  "facts": {
    "de": [
      "Naturschutzgebiet seit 1987.",
      "Umfasst rund 400 Hektar Fläche.",
      "Die Dünen wandern ständig durch den Wind.",
      "Ein 68 Meter hoher Leuchtturm (Faro) steht in der Nähe.",
      "Die Charca-Oase ist wichtig für Zugvögel.",
      "Beliebter Ort für Touristen und Fotografen."
    ],
    "hu": [
      "1987 óta természetvédelmi terület.",
      "Körülbelül 400 hektáron terül el.",
      "A dűnék a szél miatt folyamatosan vándorolnak.",
      "A közelben áll egy 68 méter magas világítótorony (Faro).",
      "A Charca oázis fontos megálló a költöző madaraknak.",
      "Népszerű hely a turisták és fotósok körében."
    ],
    "ro": [
      "Rezervație naturală din 1987.",
      "Acoperă aproximativ 400 de hectare.",
      "Dunele se mișcă constant din cauza vântului.",
      "Un far de 68 de metri (Faro) se află în apropiere.",
      "Oaza Charca este importantă pentru păsările migratoare.",
      "Loc popular pentru turiști și fotografi."
    ],
    "en": [
      "Nature reserve since 1987.",
      "Covers around 400 hectares.",
      "The dunes are constantly shifting due to the wind.",
      "A 68-meter-high lighthouse (Faro) stands nearby.",
      "The Charca oasis is important for migratory birds.",
      "Popular spot for tourists and photographers."
    ]
  }
},
{
  "id": "es-santander",
  "type": "city",
  "parent": "ES-CB",
  "coords": [
    -3.8,
    43.463
  ],
  "name": {
    "de": "Santander",
    "hu": "Santander",
    "ro": "Santander",
    "en": "Santander"
  },
  "image": "/geo-images/spain/santander.webp",
  "description": {
    "de": "Santander ist die elegante Hauptstadt von Kantabrien an der nordspanischen Küste. Sie ist bekannt für ihre weite Bucht, historische Seebäder und den königlichen Palacio de la Magdalena. Die Stadt kombiniert reiches maritimes Erbe mit moderner Architektur.",
    "hu": "Santander Kantábria elegáns fővárosa Spanyolország északi partján. Tágas öbléről, történelmi tengerparti üdülőhelyeiről és a királyi Palacio de la Magdalena palotáról ismert. A város ötvözi a gazdag tengerészeti örökséget a modern építészettel.",
    "ro": "Santander este eleganta capitală a Cantabriei, pe coasta de nord a Spaniei. Este cunoscută pentru golful său larg, stațiunile balneare istorice și palatul regal Palacio de la Magdalena. Orașul combină o bogată moștenire maritimă cu arhitectura modernă.",
    "en": "Santander is the elegant capital of Cantabria on the northern Spanish coast. It is known for its sweeping bay, historic seaside resorts, and the royal Palacio de la Magdalena. The city combines a rich maritime heritage with modern architecture."
  },
  "facts": {
    "de": [
      "Hauptstadt der Region Kantabrien.",
      "Sitz der historischen Banco Santander.",
      "Der Palacio de la Magdalena war Sommerresidenz der Könige.",
      "Großer Brand im Jahr 1941 zerstörte das historische Zentrum.",
      "Bietet schöne Strände wie den Playa del Sardinero.",
      "Das Centro Botín ist ein neues modernes Kunstzentrum."
    ],
    "hu": [
      "Kantábria régió fővárosa.",
      "A történelmi Banco Santander székhelye.",
      "A Palacio de la Magdalena a királyok nyári rezidenciája volt.",
      "Egy 1941-es nagy tűzvész elpusztította a történelmi központot.",
      "Olyan gyönyörű strandokat kínál, mint a Playa del Sardinero.",
      "A Centro Botín a város új modern művészeti központja."
    ],
    "ro": [
      "Capitala regiunii Cantabria.",
      "Sediul băncii istorice Banco Santander.",
      "Palacio de la Magdalena a fost reședința de vară a regilor.",
      "Un mare incendiu în 1941 a distrus centrul istoric.",
      "Oferă plaje frumoase precum Playa del Sardinero.",
      "Centro Botín este un nou centru de artă modernă."
    ],
    "en": [
      "Capital of the Cantabria region.",
      "Headquarters of the historic Banco Santander.",
      "The Palacio de la Magdalena was the summer residence of kings.",
      "A great fire in 1941 destroyed the historic center.",
      "Offers beautiful beaches like Playa del Sardinero.",
      "The Centro Botín is a new modern art center."
    ]
  }
},
{
  "id": "es-oviedo",
  "type": "city",
  "parent": "ES-AS",
  "coords": [
    -5.844,
    43.362
  ],
  "name": {
    "de": "Oviedo",
    "hu": "Oviedo",
    "ro": "Oviedo",
    "en": "Oviedo"
  },
  "image": "/geo-images/spain/oviedo.webp",
  "description": {
    "de": "Oviedo ist die historische Hauptstadt des Fürstentums Asturien. Die Stadt ist berühmt für ihre einzigartige präromanische Architektur, darunter beeindruckende Kirchen aus dem 9. Jahrhundert. Ihre charmante Altstadt lädt zum Flanieren und Genießen von asturischem Apfelwein (Sidra) ein.",
    "hu": "Oviedo az Asztúriai Hercegség történelmi fővárosa. A város egyedülálló preromán építészetéről, köztük a 9. századból származó lenyűgöző templomairól híres. Hangulatos óvárosa ideális sétákra és a hagyományos asztúriai almabor (sidra) kóstolására.",
    "ro": "Oviedo este capitala istorică a Principatului Asturiei. Orașul este faimos pentru arhitectura sa preromanică unică, inclusiv biserici impresionante din secolul al IX-lea. Orașul său vechi fermecător vă invită să vă plimbați și să vă bucurați de cidrul asturian (sidra).",
    "en": "Oviedo is the historic capital of the Principality of Asturias. The city is famous for its unique pre-Romanesque architecture, including impressive 9th-century churches. Its charming old town invites you to stroll and enjoy Asturian cider (sidra)."
  },
  "facts": {
    "de": [
      "Hauptstadt von Asturien.",
      "Heimat präromanischer Denkmäler (UNESCO-Welterbe).",
      "Bekannt für seine Apfelwein-Kultur (Sidrerías).",
      "Wichtige Station auf dem nördlichen Jakobsweg.",
      "Verleiht jährlich die renommierten Prinzessin-von-Asturien-Preise.",
      "Viele Skulpturen zieren die Fußgängerzonen."
    ],
    "hu": [
      "Asztúria fővárosa.",
      "Preromán műemlékek (UNESCO világörökség) otthona.",
      "Almabor-kultúrájáról (sidrerías) ismert.",
      "Az Északi Szent Jakab-út fontos állomása.",
      "Itt adják át évente az Asztúria Hercegnője díjakat.",
      "Sétálóutcáit számos szobor díszíti."
    ],
    "ro": [
      "Capitala Asturiei.",
      "Acasă la monumentele preromanice (Patrimoniu UNESCO).",
      "Cunoscut pentru cultura cidrului (sidrerías).",
      "Oprire importantă pe ruta nordică a Camino de Santiago.",
      "Acordă anual prestigioasele premii Prințesa Asturiei.",
      "Multe sculpturi împodobesc zonele pietonale."
    ],
    "en": [
      "Capital of Asturias.",
      "Home to pre-Romanesque monuments (UNESCO World Heritage).",
      "Known for its cider culture (sidrerías).",
      "Important stop on the northern Camino de Santiago.",
      "Annually awards the prestigious Princess of Asturias Awards.",
      "Many sculptures adorn the pedestrian zones."
    ]
  }
},
{
  "id": "es-pamplona-bull",
  "type": "city",
  "parent": "ES-NC",
  "coords": [
    -1.645,
    42.817
  ],
  "name": {
    "de": "Pamplona",
    "hu": "Pamplona",
    "ro": "Pamplona",
    "en": "Pamplona"
  },
  "image": "/geo-images/spain/pamplona-bull.webp",
  "description": {
    "de": "Pamplona ist die historische Hauptstadt der Region Navarra im Norden Spaniens. Sie ist weltweit berühmt für das San-Fermín-Fest mit dem traditionellen Stierlauf (Encierro). Jenseits dieses Spektakels bietet die Stadt gut erhaltene Stadtmauern und eine gotische Kathedrale.",
    "hu": "Pamplona az észak-spanyolországi Navarra régió történelmi fővárosa. Világszerte a San Fermín fesztiválról és a hagyományos bikafuttatásról (encierro) híres. Ezen a látványosságon túl a város jó állapotban fennmaradt városfalakkal és egy gótikus katedrálissal büszkélkedhet.",
    "ro": "Pamplona este capitala istorică a regiunii Navarra din nordul Spaniei. Este faimoasă în întreaga lume pentru festivalul San Fermín, cu tradiționala cursă de tauri (encierro). Dincolo de acest spectacol, orașul oferă ziduri bine conservate și o catedrală gotică.",
    "en": "Pamplona is the historic capital of the Navarre region in northern Spain. It is world-famous for the San Fermín festival featuring the traditional running of the bulls (encierro). Beyond this spectacle, the city offers well-preserved city walls and a Gothic cathedral."
  },
  "facts": {
    "de": [
      "Berühmt für das San-Fermín-Fest im Juli.",
      "Bekannt gemacht durch Ernest Hemingways Roman 'Fiesta'.",
      "Wichtige Station auf dem französischen Jakobsweg.",
      "Besitzt eine der am besten erhaltenen Zitadellen Europas.",
      "Gegründet um 74 v. Chr. vom römischen General Pompejus.",
      "Verfügt über viele Grünflächen und Parks."
    ],
    "hu": [
      "Híres a júliusi San Fermín fesztiválról.",
      "Ernest Hemingway 'Fiesta' című regénye tette világszerte ismertté.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "Itt található Európa egyik legjobb állapotban lévő fellegvára.",
      "Kr. e. 74 körül alapította Pompeius római hadvezér.",
      "Sok zöldterülettel és parkkal rendelkezik."
    ],
    "ro": [
      "Faimos pentru festivalul San Fermín din iulie.",
      "Făcut cunoscut de romanul lui Ernest Hemingway, 'Fiesta'.",
      "Oprire importantă pe Calea Franceză a Camino de Santiago.",
      "Are una dintre cele mai bine conservate cetăți din Europa.",
      "Fondat în jurul anului 74 î.Hr. de generalul roman Pompei.",
      "Are multe zone verzi și parcuri."
    ],
    "en": [
      "Famous for the San Fermín festival in July.",
      "Made known by Ernest Hemingway's novel 'The Sun Also Rises'.",
      "Important stop on the French Way of the Camino de Santiago.",
      "Has one of the best-preserved citadels in Europe.",
      "Founded around 74 BC by the Roman general Pompey.",
      "Features many green spaces and parks."
    ]
  }
},
{
  "id": "es-zaragoza-pilar",
  "type": "landmark",
  "parent": "ES-AR",
  "coords": [
    -0.878,
    41.656
  ],
  "name": {
    "de": "Basílica del Pilar",
    "hu": "Pilar-bazilika",
    "ro": "Basílica del Pilar",
    "en": "Basílica del Pilar Zaragoza"
  },
  "image": "/geo-images/spain/zaragoza-pilar.webp",
  "description": {
    "de": "Die Basílica de Nuestra Señora del Pilar ist eine prachtvolle Barockkirche in Zaragoza. Sie thront majestätisch am Ufer des Flusses Ebro und zieht jährlich Millionen Pilger an. Der Legende nach erschien hier die Jungfrau Maria dem Apostel Jakobus auf einer Säule (Pilar).",
    "hu": "A Nuestra Señora del Pilar bazilika egy csodálatos barokk templom Zaragozában. Fenségesen magasodik az Ebro folyó partján, és évente zarándokok millióit vonzza. A legenda szerint itt jelent meg Szűz Mária Jakab apostolnak egy oszlopon (pilar).",
    "ro": "Basílica de Nuestra Señora del Pilar este o magnifică biserică barocă din Zaragoza. Se înalță maiestuos pe malul râului Ebro și atrage milioane de pelerini în fiecare an. Potrivit legendei, Fecioara Maria i-a apărut aici apostolului Iacob pe un stâlp (pilar).",
    "en": "The Basílica de Nuestra Señora del Pilar is a magnificent Baroque church in Zaragoza. It sits majestically on the banks of the Ebro River and attracts millions of pilgrims annually. According to legend, the Virgin Mary appeared here to the Apostle James on a pillar (pilar)."
  },
  "facts": {
    "de": [
      "Gilt als das erste Marienheiligtum der Christenheit.",
      "Die heutige Barockkirche wurde im 17. Jahrhundert begonnen.",
      "Einige der Kuppelfresken stammen von Francisco de Goya.",
      "Befindet sich am Ufer des Flusses Ebro.",
      "Die Fiesta del Pilar wird jeden Oktober groß gefeiert.",
      "Zwei Fliegerbomben aus dem Spanischen Bürgerkrieg schlugen ein, explodierten aber nicht."
    ],
    "hu": [
      "A kereszténység első Mária-kegyhelyének tartják.",
      "A mai barokk templom építése a 17. században kezdődött.",
      "Néhány kupolafreskót Francisco de Goya festett.",
      "Az Ebro folyó partján található.",
      "A Fiesta del Pilar fesztivált minden októberben ünneplik.",
      "A spanyol polgárháborúban két légibomba is eltalálta, de nem robbantak fel."
    ],
    "ro": [
      "Considerat primul altar marian din creștinătate.",
      "Actuala biserică barocă a fost începută în secolul al XVII-lea.",
      "Unele dintre frescele de pe dom au fost pictate de Francisco de Goya.",
      "Situată pe malul râului Ebro.",
      "Festivalul Fiesta del Pilar este sărbătorit în fiecare octombrie.",
      "Două bombe din Războiul Civil Spaniol au lovit-o, dar nu au explodat."
    ],
    "en": [
      "Considered the first Marian shrine in Christianity.",
      "The current Baroque church was begun in the 17th century.",
      "Some of the dome frescoes were painted by Francisco de Goya.",
      "Located on the banks of the Ebro River.",
      "The Fiesta del Pilar is heavily celebrated every October.",
      "Two aerial bombs from the Spanish Civil War hit it but failed to explode."
    ]
  }
},
{
  "id": "es-malaga-alcazaba",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [
    -4.418,
    36.722
  ],
  "name": {
    "de": "Alcazaba von Málaga",
    "hu": "Málagai Alcazaba",
    "ro": "Alcazaba din Málaga",
    "en": "Alcazaba Málaga"
  },
  "image": "/geo-images/spain/malaga-alcazaba.webp",
  "description": {
    "de": "Die Alcazaba von Málaga ist eine maurische Palastanlage aus dem 11. Jahrhundert. Sie thront auf einem Hügel über der Stadt und bot eine hervorragende Verteidigungsposition. Die Festung beeindruckt mit ihren verzierten Gärten, Innenhöfen und der weiten Aussicht auf das Meer.",
    "hu": "A málagai Alcazaba egy 11. századi mór palotaerőd. A város feletti dombon magasodva kiváló védelmi pozíciót nyújtott. Az erőd díszes kertjeivel, belső udvaraival és a tengerre nyíló széles kilátással nyűgözi le a látogatókat.",
    "ro": "Alcazaba din Málaga este o fortăreață palat maură din secolul al XI-lea. Este așezată pe un deal deasupra orașului, oferind o poziție defensivă excelentă. Fortăreața impresionează prin grădinile sale ornamentate, curțile interioare și priveliștea largă spre mare.",
    "en": "The Alcazaba of Málaga is an 11th-century Moorish palace fortress. Perched on a hill above the city, it offered an excellent defensive position. The fortress impresses with its ornate gardens, courtyards, and sweeping views of the sea."
  },
  "facts": {
    "de": [
      "Erbaut von der Hammudiden-Dynastie im frühen 11. Jahrhundert.",
      "Eine der besterhaltenen Alcazabas in Spanien.",
      "Liegt oberhalb der Überreste eines antiken römischen Theaters.",
      "Durch einen gemauerten Gang mit der Burg Gibralfaro verbunden.",
      "Kombiniert militärische Befestigung mit Palastarchitektur.",
      "Verfügt über ein ausgeklügeltes Bewässerungssystem."
    ],
    "hu": [
      "A Hammúdida-dinasztia építette a 11. század elején.",
      "Spanyolország egyik legjobb állapotban fennmaradt alcazabája.",
      "Egy ókori római színház romjai felett fekszik.",
      "Egy falazott folyosó köti össze a Gibralfaro várral.",
      "A katonai erődítményt palotaépítészettel ötvözi.",
      "Kifinomult öntözőrendszerrel rendelkezik."
    ],
    "ro": [
      "Construit de dinastia Hammudid la începutul secolului al XI-lea.",
      "Una dintre cele mai bine conservate alcazaba din Spania.",
      "Situat deasupra ruinelor unui vechi teatru roman.",
      "Conectată la Castelul Gibralfaro printr-un coridor cu ziduri.",
      "Combină fortificația militară cu arhitectura de palat.",
      "Are un sistem de irigare sofisticat."
    ],
    "en": [
      "Built by the Hammudid dynasty in the early 11th century.",
      "One of the best-preserved alcazabas in Spain.",
      "Situated above the remains of an ancient Roman theater.",
      "Connected to the Gibralfaro Castle by a walled corridor.",
      "Combines military fortification with palace architecture.",
      "Features a sophisticated irrigation system."
    ]
  }
},
{
  "id": "es-ronda",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.164,
    36.742
  ],
  "name": {
    "de": "Ronda",
    "hu": "Ronda",
    "ro": "Ronda",
    "en": "Ronda"
  },
  "image": "/geo-images/spain/ronda.webp",
  "description": {
    "de": "Ronda ist eine der spektakulärsten Städte Andalusiens, berühmt für ihre Lage auf einem Felsplateau, das durch eine tiefe Schlucht (El Tajo) geteilt wird. Die beeindruckende Brücke Puente Nuevo verbindet die Altstadt mit den neueren Vierteln. Ronda ist auch eine der Wiegen des modernen Stierkampfs.",
    "hu": "Ronda Andalúzia egyik leglátványosabb városa, amely egy mély szurdok (El Tajo) által kettészelt sziklafennsíkon fekszik. A lenyűgöző Puente Nuevo híd köti össze az óvárost az újabb negyedekkel. Ronda egyben a modern bikaviadalok egyik bölcsője is.",
    "ro": "Ronda este unul dintre cele mai spectaculoase orașe din Andaluzia, faimos pentru locația sa pe un platou stâncos împărțit de un defileu adânc (El Tajo). Impresionantul pod Puente Nuevo face legătura între orașul vechi și cartierele mai noi. Ronda este, de asemenea, unul dintre leagănele luptelor cu tauri moderne.",
    "en": "Ronda is one of the most spectacular cities in Andalusia, famous for its location on a rocky plateau divided by a deep gorge (El Tajo). The impressive Puente Nuevo bridge connects the old town with the newer districts. Ronda is also one of the cradles of modern bullfighting."
  },
  "facts": {
    "de": [
      "Die Schlucht El Tajo ist über 100 Meter tief.",
      "Die Puente Nuevo wurde im späten 18. Jahrhundert fertiggestellt.",
      "Die Stierkampfarena Plaza de Toros gehört zu den ältesten Spaniens.",
      "Ernest Hemingway und Orson Welles verbrachten hier viel Zeit.",
      "Wichtiger Ort auf der Route der 'Weißen Dörfer' (Pueblos Blancos).",
      "Besitzt gut erhaltene arabische Bäder aus dem 13. Jahrhundert."
    ],
    "hu": [
      "Az El Tajo szurdok több mint 100 méter mély.",
      "A Puente Nuevo (Új Híd) a 18. század végén készült el.",
      "A Plaza de Toros bikaviadal-aréna Spanyolország egyik legrégebbi ilyen épülete.",
      "Ernest Hemingway és Orson Welles sok időt töltött itt.",
      "A 'Fehér falvak' (Pueblos Blancos) útvonalának fontos állomása.",
      "Jó állapotban fennmaradt, 13. századi arab fürdőkkel rendelkezik."
    ],
    "ro": [
      "Defileul El Tajo are o adâncime de peste 100 de metri.",
      "Podul Puente Nuevo a fost finalizat la sfârșitul secolului al XVIII-lea.",
      "Arena de tauri Plaza de Toros este una dintre cele mai vechi din Spania.",
      "Ernest Hemingway și Orson Welles au petrecut mult timp aici.",
      "Un loc important pe traseul 'Satelor Albe' (Pueblos Blancos).",
      "Are băi arabe bine conservate din secolul al XIII-lea."
    ],
    "en": [
      "The El Tajo gorge is over 100 meters deep.",
      "The Puente Nuevo bridge was completed in the late 18th century.",
      "The Plaza de Toros is one of the oldest bullrings in Spain.",
      "Ernest Hemingway and Orson Welles spent a lot of time here.",
      "An important town on the route of the 'White Villages' (Pueblos Blancos).",
      "Features well-preserved Arab baths from the 13th century."
    ]
  }
},
{
  "id": "es-setenil-de-las-bodegas",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.18,
    36.857
  ],
  "name": {
    "de": "Setenil de las Bodegas",
    "hu": "Setenil de las Bodegas",
    "ro": "Setenil de las Bodegas",
    "en": "Setenil de las Bodegas"
  },
  "image": "/geo-images/spain/setenil-de-las-bodegas.webp",
  "description": {
    "de": "Setenil de las Bodegas ist ein einzigartiges andalusisches Dorf. Viele seiner weiß getünchten Häuser sind direkt in die steilen Felswände einer Flussschlucht hineingebaut. Diese ungewöhnliche Höhlenarchitektur spendet im heißen Sommer Schatten und Kühle.",
    "hu": "Setenil de las Bodegas egy egyedülálló andalúz falu. Számos fehérre meszelt házát közvetlenül egy folyószurdok meredek sziklafalaiba vájták. Ez a szokatlan barlangépítészet hűvöset és árnyékot nyújt a forró nyárban.",
    "ro": "Setenil de las Bodegas este un sat andaluz unic. Multe dintre casele sale văruite în alb sunt construite direct în stâncile abrupte ale unui defileu al râului. Această arhitectură de peșteră neobișnuită oferă umbră și răcoare în verile fierbinți.",
    "en": "Setenil de las Bodegas is a unique Andalusian village. Many of its whitewashed houses are built directly into the steep cliffs of a river gorge. This unusual cave architecture provides shade and coolness during the hot summers."
  },
  "facts": {
    "de": [
      "Gehört zu den 'Pueblos Blancos' (Weißen Dörfern) Andalusiens.",
      "Häuser sind teilweise komplett vom überhängenden Felsen bedeckt.",
      "Der Fluss Trejo hat die Schlucht geformt.",
      "Der Name 'Bodegas' stammt von ehemaligen Weinkellereien.",
      "Bekannt für lokale Produkte wie Olivenöl und Chorizo.",
      "War eine stark umkämpfte Festung während der Reconquista."
    ],
    "hu": [
      "Az andalúziai 'Pueblos Blancos' (Fehér falvak) egyike.",
      "A házak egy részét teljesen beborítják a kinyúló sziklák.",
      "A szurdokot a Trejo folyó vájta ki.",
      "A 'Bodegas' név a korábbi borászatokra utal.",
      "Helyi termékeiről, például olívaolajáról és chorizójáról is ismert.",
      "Sokat vitatott erődítmény volt a Reconquista idején."
    ],
    "ro": [
      "Aparține de 'Pueblos Blancos' (Satele Albe) din Andaluzia.",
      "Casele sunt parțial acoperite complet de stânca surplombantă.",
      "Râul Trejo a sculptat defileul.",
      "Numele 'Bodegas' provine de la fostele crame.",
      "Cunoscut pentru produsele locale precum uleiul de măsline și chorizo.",
      "A fost o fortăreață puternic contestată în timpul Reconquistei."
    ],
    "en": [
      "Belongs to the 'Pueblos Blancos' (White Villages) of Andalusia.",
      "Houses are sometimes completely covered by the overhanging rock.",
      "The Trejo river carved the gorge.",
      "The name 'Bodegas' comes from former wineries.",
      "Known for local products like olive oil and chorizo.",
      "Was a heavily contested fortress during the Reconquista."
    ]
  }
},
{
  "id": "es-sierra-nevada-np",
  "type": "mountain",
  "parent": "ES-AN",
  "coords": [
    -3.367,
    37.055
  ],
  "name": {
    "de": "Sierra Nevada Nationalpark",
    "hu": "Sierra Nevada Nemzeti Park",
    "ro": "Parcul Național Sierra Nevada",
    "en": "Sierra Nevada NP"
  },
  "image": "/geo-images/spain/sierra-nevada-np.webp",
  "description": {
    "de": "Der Sierra Nevada Nationalpark in Südspanien umfasst das höchste Gebirge der Iberischen Halbinsel. Er bietet im Winter exzellente Möglichkeiten zum Skifahren und im Sommer großartige Wanderwege. Die einzigartige Flora und Fauna macht ihn zu einem wertvollen Biosphärenreservat.",
    "hu": "A dél-spanyolországi Sierra Nevada Nemzeti Park az Ibériai-félsziget legmagasabb hegységét foglalja magában. Télen kiváló síelési lehetőségeket, nyáron pedig nagyszerű túraútvonalakat kínál. Egyedülálló növény- és állatvilága értékes bioszféra-rezervátummá teszi.",
    "ro": "Parcul Național Sierra Nevada din sudul Spaniei cuprinde cel mai înalt lanț muntos din Peninsula Iberică. Oferă oportunități excelente de schi iarna și trasee grozave de drumeții vara. Flora și fauna sa unică îl fac o valoroasă rezervație a biosferei.",
    "en": "The Sierra Nevada National Park in southern Spain encompasses the highest mountain range on the Iberian Peninsula. It offers excellent skiing opportunities in winter and great hiking trails in summer. Its unique flora and fauna make it a valuable biosphere reserve."
  },
  "facts": {
    "de": [
      "Beinhaltet den Mulhacén (3.482 m), den höchsten Gipfel des Festlands.",
      "Südlichstes Skigebiet Europas.",
      "Seit 1986 UNESCO-Biosphärenreservat.",
      "Heimat vieler endemischer Pflanzenarten.",
      "Ganz in der Nähe der Stadt Granada gelegen.",
      "Bekannt für seine klaren Nächte, ideal für astronomische Observatorien."
    ],
    "hu": [
      "Itt található a Mulhacén (3482 m), a spanyol szárazföld legmagasabb csúcsa.",
      "Európa legdélebbi síterepe.",
      "1986 óta UNESCO bioszféra-rezervátum.",
      "Számos endemikus (csak itt élő) növényfaj otthona.",
      "Nagyon közel fekszik Granada városához.",
      "Tiszta éjszakáiról ismert, így ideális a csillagászati obszervatóriumok számára."
    ],
    "ro": [
      "Include Mulhacén (3.482 m), cel mai înalt vârf de pe continent.",
      "Cea mai sudică stațiune de schi din Europa.",
      "Rezervație a biosferei UNESCO din 1986.",
      "Găzduiește multe specii de plante endemice.",
      "Situat foarte aproape de orașul Granada.",
      "Cunoscut pentru nopțile senine, ideale pentru observatoarele astronomice."
    ],
    "en": [
      "Includes Mulhacén (3,482 m), the highest peak in mainland Spain.",
      "Europe's southernmost ski resort.",
      "UNESCO Biosphere Reserve since 1986.",
      "Home to many endemic plant species.",
      "Located very close to the city of Granada.",
      "Known for clear nights, ideal for astronomical observatories."
    ]
  }
},
{
  "id": "es-picos-de-europa",
  "type": "mountain",
  "parent": "ES-AS",
  "coords": [
    -4.942,
    43.195
  ],
  "name": {
    "de": "Picos de Europa",
    "hu": "Picos de Europa",
    "ro": "Picos de Europa",
    "en": "Picos de Europa"
  },
  "image": "/geo-images/spain/picos-de-europa.webp",
  "description": {
    "de": "Die Picos de Europa sind ein markantes Kalksteinmassiv im Norden Spaniens. Sie bieten dramatische Gipfel, tiefe Schluchten und malerische Bergseen wie die Lagos de Covadonga. Die raue Landschaft ist ein Paradies für Kletterer, Wanderer und Naturliebhaber.",
    "hu": "A Picos de Europa egy jellegzetes mészkőmasszívum Észak-Spanyolországban. Drámai hegycsúcsokat, mély szurdokokat és festői hegyi tavakat kínál, mint például a Lagos de Covadonga. A zord táj a hegymászók, túrázók és természetbarátok paradicsoma.",
    "ro": "Picos de Europa sunt un masiv izbitor de calcar din nordul Spaniei. Oferă vârfuri dramatice, defileuri adânci și lacuri montane pitorești precum Lagos de Covadonga. Peisajul accidentat este un paradis pentru alpiniști, drumeți și iubitori de natură.",
    "en": "The Picos de Europa is a striking limestone massif in northern Spain. It offers dramatic peaks, deep gorges, and picturesque mountain lakes like the Lagos de Covadonga. The rugged landscape is a paradise for climbers, hikers, and nature lovers."
  },
  "facts": {
    "de": [
      "Spaniens erster Nationalpark, gegründet 1918.",
      "Besteht aus drei Hauptmassiven aus Kalkstein.",
      "Der Naranjo de Bulnes (Picu Urriellu) ist ein berühmter Kletterberg.",
      "Heimat von Braunbären und Wölfen.",
      "Erstreckt sich über Asturien, Kantabrien und Kastilien und León.",
      "Die Cares-Schlucht ist ein beliebter Wanderweg."
    ],
    "hu": [
      "Spanyolország első, 1918-ban alapított nemzeti parkja.",
      "Három fő mészkőmasszívumból áll.",
      "A Naranjo de Bulnes (Picu Urriellu) híres hegymászó célpont.",
      "Barnamedvék és farkasok élőhelye.",
      "Asztúria, Kantábria és Kasztília és León területén húzódik.",
      "A Cares-szurdok népszerű túraútvonal."
    ],
    "ro": [
      "Primul parc național al Spaniei, fondat în 1918.",
      "Este format din trei masive principale de calcar.",
      "Naranjo de Bulnes (Picu Urriellu) este un munte faimos pentru cățărat.",
      "Casa urșilor bruni și a lupilor.",
      "Se întinde pe Asturias, Cantabria și Castilia și León.",
      "Defileul Cares este un traseu popular de drumeții."
    ],
    "en": [
      "Spain's first national park, founded in 1918.",
      "Consists of three main limestone massifs.",
      "The Naranjo de Bulnes (Picu Urriellu) is a famous climbing peak.",
      "Home to brown bears and wolves.",
      "Spans across Asturias, Cantabria, and Castile and León.",
      "The Cares Gorge is a popular hiking trail."
    ]
  }
},
{
  "id": "es-gibraltar-rock",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [
    -5.349,
    36.143
  ],
  "name": {
    "de": "Fels von Gibraltar",
    "hu": "Gibraltár sziklája",
    "ro": "Stânca Gibraltarului",
    "en": "Rock of Gibraltar (view from Spain)"
  },
  "image": "/geo-images/spain/gibraltar-rock.webp",
  "description": {
    "de": "Der imposante Fels von Gibraltar überblickt die schmale Meerenge zwischen Europa und Afrika. Obwohl Gibraltar ein britisches Überseegebiet ist, prägt der mächtige Kalksteinfels die andalusische Küstenlinie eindrucksvoll. Er ist berühmt für seine strategische Lage und die wild lebenden Berberaffen.",
    "hu": "A lenyűgöző Gibraltár sziklája az Európa és Afrika közötti szűk szorosra néz. Bár Gibraltár brit tengerentúli terület, a hatalmas mészkőszikla meghatározza az andalúz partvonalat. Különösen stratégiai fekvéséről és vadon élő berber makákóiról ismert.",
    "ro": "Impresionanta Stâncă a Gibraltarului are vedere spre strâmtoarea îngustă dintre Europa și Africa. Deși Gibraltar este un teritoriu britanic de peste mări, uriașa stâncă de calcar domină coasta andaluză. Este faimoasă pentru locația sa strategică și macacii berberi sălbatici.",
    "en": "The imposing Rock of Gibraltar overlooks the narrow strait between Europe and Africa. Although Gibraltar is a British Overseas Territory, the massive limestone rock heavily shapes the Andalusian coastline. It is famous for its strategic location and wild Barbary macaques."
  },
  "facts": {
    "de": [
      "Britisches Überseegebiet, umgeben von spanischem Terrain.",
      "Etwa 426 Meter hoher monolithischer Kalksteinfels.",
      "Heimat der einzigen wild lebenden Affenpopulation in Europa.",
      "Bekannt als eine der 'Säulen des Herakles' in der Antike.",
      "Verfügt über ein ausgedehntes Tunnelnetzwerk aus dem Zweiten Weltkrieg.",
      "Bietet bei klarem Wetter einen Blick bis nach Nordafrika."
    ],
    "hu": [
      "Brit tengerentúli terület, spanyol szárazfölddel körülvéve.",
      "Körülbelül 426 méter magas monolit mészkőszikla.",
      "Európa egyetlen vadon élő majompopulációjának otthona.",
      "Az ókorban 'Héraklész oszlopai' egyikeként ismerték.",
      "Kiterjedt, második világháborús alagútrendszerrel rendelkezik.",
      "Tiszta időben egészen Észak-Afrikáig el lehet látni."
    ],
    "ro": [
      "Teritoriu britanic de peste mări, înconjurat de teren spaniol.",
      "Stâncă monolitică de calcar înaltă de aproximativ 426 de metri.",
      "Găzduiește singura populație de maimuțe sălbatice din Europa.",
      "Cunoscut ca unul dintre „Stâlpii lui Hercule” din antichitate.",
      "Are o rețea extinsă de tuneluri din al Doilea Război Mondial.",
      "Oferă priveliști până în Africa de Nord în zilele senine."
    ],
    "en": [
      "British Overseas Territory surrounded by Spanish land.",
      "Approximately 426-meter high monolithic limestone rock.",
      "Home to the only wild monkey population in Europe.",
      "Known as one of the 'Pillars of Hercules' in antiquity.",
      "Features an extensive network of World War II tunnels.",
      "Offers views as far as North Africa on clear days."
    ]
  }
},
{
  "id": "es-salamanca-university",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [
    -5.666,
    40.961
  ],
  "name": {
    "de": "Altstadt von Salamanca",
    "hu": "Salamanca óvárosa",
    "ro": "Orașul vechi Salamanca",
    "en": "Salamanca Old City"
  },
  "image": "/geo-images/spain/salamanca-university.webp",
  "description": {
    "de": "Die goldene Stadt Salamanca ist berühmt für ihre alte Universität, eine der ältesten in Europa. Die historische Altstadt ist ein architektonisches Juwel im plateresken Stil, geprägt vom goldenen Sandstein (Villamayor-Stein). Der belebte Plaza Mayor ist das Herzstück der Stadt.",
    "hu": "Salamanca, az „arany város” az ősi egyeteméről híres, amely az egyik legrégebbi Európában. A történelmi óváros a platereszk stílus építészeti ékköve, amelyet a helyi arany homokkő határoz meg. A nyüzsgő Plaza Mayor a város lüktető szíve.",
    "ro": "Orașul auriu Salamanca este faimos pentru vechea sa universitate, una dintre cele mai vechi din Europa. Orașul vechi istoric este o bijuterie arhitecturală în stil plateresc, caracterizată de gresie aurie (piatră de Villamayor). Animata Plaza Mayor este inima orașului.",
    "en": "The golden city of Salamanca is famous for its ancient university, one of the oldest in Europe. The historic old town is an architectural jewel in the Plateresque style, characterized by golden sandstone. The bustling Plaza Mayor is the heart of the city."
  },
  "facts": {
    "de": [
      "Die Universität wurde 1218 gegründet.",
      "Seit 1988 ist die Altstadt UNESCO-Weltkulturerbe.",
      "Besitzt eine 'Alte' und eine 'Neue' Kathedrale, die miteinander verbunden sind.",
      "Der Plaza Mayor gilt als einer der schönsten Plätze Spaniens.",
      "Touristen suchen traditionell den Frosch (La Rana) an der Universitätsfassade.",
      "Bekannt für den goldenen Glanz der Gebäude bei Sonnenuntergang."
    ],
    "hu": [
      "Az egyetemet 1218-ban alapították.",
      "Az óváros 1988 óta az UNESCO világörökség része.",
      "Egy 'Régi' és egy 'Új' katedrálissal is rendelkezik, amelyek egybeépültek.",
      "A Plaza Mayort Spanyolország egyik legszebb terének tartják.",
      "A turisták hagyományosan a békát (La Rana) keresik az egyetem homlokzatán.",
      "Ismert az épületek naplementekor látható aranyos ragyogásáról."
    ],
    "ro": [
      "Universitatea a fost fondată în 1218.",
      "Din 1988, orașul vechi este în Patrimoniul Mondial UNESCO.",
      "Are o catedrală „Veche” și una „Nouă”, care sunt conectate.",
      "Plaza Mayor este considerată una dintre cele mai frumoase piețe din Spania.",
      "Turiștii caută în mod tradițional broasca (La Rana) pe fațada universității.",
      "Cunoscut pentru strălucirea aurie a clădirilor la apus."
    ],
    "en": [
      "The university was founded in 1218.",
      "The old town has been a UNESCO World Heritage site since 1988.",
      "Has an 'Old' and a 'New' Cathedral that are joined together.",
      "The Plaza Mayor is considered one of the most beautiful squares in Spain.",
      "Tourists traditionally look for the frog (La Rana) on the university facade.",
      "Known for the golden glow of its buildings at sunset."
    ]
  }
},
{
  "id": "es-burgos-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -3.704,
    42.341
  ],
  "name": {
    "de": "Kathedrale von Burgos",
    "hu": "Burgosi katedrális",
    "ro": "Catedrala din Burgos",
    "en": "Burgos Cathedral"
  },
  "image": "/geo-images/spain/burgos-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Burgos ist ein Meisterwerk der spanischen Gotik. Mit ihren filigranen Türmen und der reichen Innenausstattung dominiert sie die historische Stadt in Kastilien. Sie ist nicht nur ein architektonisches Wunder, sondern beherbergt auch das Grab des legendären Nationalhelden El Cid.",
    "hu": "A burgosi katedrális a spanyol gótika mesterműve. Csipkézett tornyaival és gazdag belső terével uralja a kasztíliai történelmi várost. Nemcsak építészeti csoda, hanem itt található a legendás nemzeti hős, El Cid sírja is.",
    "ro": "Catedrala din Burgos este o capodoperă a goticului spaniol. Cu turnurile sale filigranate și interiorul bogat, domină orașul istoric din Castilia. Nu este doar o minune arhitecturală, ci adăpostește și mormântul legendarului erou național El Cid.",
    "en": "The Burgos Cathedral is a masterpiece of Spanish Gothic architecture. With its filigree spires and rich interior, it dominates the historic city in Castile. It is not only an architectural marvel but also houses the tomb of the legendary national hero El Cid."
  },
  "facts": {
    "de": [
      "Baubeginn im Jahr 1221.",
      "Als einzige spanische Kathedrale eigenständig UNESCO-Weltkulturerbe.",
      "Hervorragendes Beispiel der französischen Gotik in Spanien.",
      "Beherbergt das Grab von El Cid und seiner Frau Doña Jimena.",
      "Wichtige Station auf dem Camino Francés (Jakobsweg).",
      "Bekannt für die goldene Treppe (Escalera Dorada)."
    ],
    "hu": [
      "Az építkezés 1221-ben kezdődött.",
      "Az egyetlen spanyol katedrális, amely önállóan is UNESCO világörökség.",
      "A francia gótika kiemelkedő példája Spanyolországban.",
      "Itt található El Cid és felesége, Doña Jimena sírja.",
      "A Francia Szent Jakab-út (Camino Francés) fontos állomása.",
      "Híres az Arany lépcsőjéről (Escalera Dorada)."
    ],
    "ro": [
      "Construcția a început în 1221.",
      "Singura catedrală spaniolă care este un sit independent al Patrimoniului Mondial UNESCO.",
      "Un exemplu remarcabil al goticului francez în Spania.",
      "Adăpostește mormântul lui El Cid și al soției sale Doña Jimena.",
      "Oprire importantă pe Camino Francés (Calea Sfântului Iacob).",
      "Cunoscută pentru scara de aur (Escalera Dorada)."
    ],
    "en": [
      "Construction began in 1221.",
      "The only Spanish cathedral independently designated a UNESCO World Heritage site.",
      "An outstanding example of French Gothic in Spain.",
      "Houses the tomb of El Cid and his wife Doña Jimena.",
      "An important stop on the Camino Francés (Way of St. James).",
      "Known for the Golden Staircase (Escalera Dorada)."
    ]
  }
},
{
  "id": "es-leon-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -5.567,
    42.599
  ],
  "name": {
    "de": "Kathedrale von León",
    "hu": "Leóni katedrális",
    "ro": "Catedrala din León",
    "en": "León Cathedral"
  },
  "image": "/geo-images/spain/leon-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von León, auch bekannt als 'Haus des Lichts', ist eines der feinsten Beispiele der Hochgotik. Ihre außergewöhnlich großen Buntglasfenster tauchen das Innere in ein faszinierendes Lichtspiel. Sie ist ein spiritueller Höhepunkt auf dem Pilgerweg nach Santiago de Compostela.",
    "hu": "A leóni katedrális, amelyet 'A Fény Házaként' is ismernek, az érett gótika egyik legszebb példája. Kivételesen nagy ólomüveg ablakai lenyűgöző fényjátékba öltöztetik a belső teret. A Santiago de Compostelába vezető zarándokút egyik spirituális csúcspontja.",
    "ro": "Catedrala din León, cunoscută și sub numele de „Casa Luminii”, este unul dintre cele mai fine exemple de arhitectură gotică înaltă. Vitraliile sale excepțional de mari scaldă interiorul într-un joc fascinant de lumini. Este un punct culminant spiritual pe traseul de pelerinaj spre Santiago de Compostela.",
    "en": "The León Cathedral, also known as the 'House of Light', is one of the finest examples of High Gothic architecture. Its exceptionally large stained-glass windows bathe the interior in a fascinating play of light. It is a spiritual highlight on the pilgrimage route to Santiago de Compostela."
  },
  "facts": {
    "de": [
      "Gebaut auf den Ruinen römischer Bäder.",
      "Besitzt über 1.700 Quadratmeter historische Buntglasfenster.",
      "Das Mauerwerk wurde extrem reduziert, um riesige Fenster zu ermöglichen.",
      "Wird oft mit der französischen Kathedrale von Amiens verglichen.",
      "Die Fenster stammen größtenteils aus dem 13. bis 16. Jahrhundert.",
      "Beherbergt ein bedeutendes Diözesanmuseum."
    ],
    "hu": [
      "Római fürdők romjaira épült.",
      "Több mint 1700 négyzetméternyi történelmi ólomüveg ablakkal rendelkezik.",
      "A falazatot a minimumra csökkentették a hatalmas ablakok érdekében.",
      "Gyakran hasonlítják a francia amiens-i katedrálishoz.",
      "Az ablakok többsége a 13. és a 16. század között készült.",
      "Jelentős egyházmegyei múzeumnak ad otthont."
    ],
    "ro": [
      "Construită pe ruinele unor băi romane.",
      "Are peste 1.700 de metri pătrați de vitralii istorice.",
      "Zidăria a fost redusă la extrem pentru a permite ferestre uriașe.",
      "Adesea comparată cu catedrala franceză din Amiens.",
      "Ferestrele datează în mare parte din secolele XIII - XVI.",
      "Găzduiește un important muzeu eparhial."
    ],
    "en": [
      "Built over the ruins of Roman baths.",
      "Features over 1,700 square meters of historic stained-glass windows.",
      "Masonry was reduced to a minimum to allow for huge windows.",
      "Often compared to the French Cathedral of Amiens.",
      "The windows mostly date from the 13th to the 16th century.",
      "Houses an important diocesan museum."
    ]
  }
},
{
  "id": "es-camino-santiago",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -8.547,
    42.881
  ],
  "name": {
    "de": "Jakobsweg",
    "hu": "Szent Jakab-út",
    "ro": "Camino de Santiago",
    "en": "Camino de Santiago"
  },
  "image": "/geo-images/spain/camino-santiago.webp",
  "description": {
    "de": "Der Jakobsweg (Camino de Santiago) ist ein historisches Netzwerk von Pilgerwegen, die alle zum Grab des Apostels Jakobus in Santiago de Compostela führen. Pilger aus aller Welt wandern wochenlang durch Nordspanien. Diese spirituelle und kulturelle Reise prägt die Identität ganzer Regionen.",
    "hu": "A Szent Jakab-út (Camino de Santiago) zarándokutak történelmi hálózata, amelyek mindegyike Jakab apostol Santiago de Compostela-i sírjához vezet. A világ minden tájáról érkező zarándokok heteken át gyalogolnak Észak-Spanyolországon keresztül. Ez a spirituális és kulturális utazás egész régiók identitását határozza meg.",
    "ro": "Camino de Santiago este o rețea istorică de rute de pelerinaj, toate ducând la mormântul Apostolului Iacob din Santiago de Compostela. Pelerini din toată lumea merg pe jos prin nordul Spaniei timp de săptămâni. Această călătorie spirituală și culturală conturează identitatea unor regiuni întregi.",
    "en": "The Camino de Santiago is a historic network of pilgrimage routes, all leading to the tomb of the Apostle James in Santiago de Compostela. Pilgrims from all over the world hike through northern Spain for weeks. This spiritual and cultural journey shapes the identity of entire regions."
  },
  "facts": {
    "de": [
      "Der 'Camino Francés' ist die populärste Route.",
      "Das Symbol der Pilger ist die Jakobsmuschel.",
      "Die Wege sind UNESCO-Weltkulturerbe.",
      "Pilger erhalten am Ziel die Urkunde 'Compostela'.",
      "Man muss mindestens 100 km wandern, um die Urkunde zu erhalten.",
      "Fördert einen starken internationalen Kulturaustausch."
    ],
    "hu": [
      "A legnépszerűbb útvonal a 'Camino Francés'.",
      "A zarándokok szimbóluma a fésűkagyló.",
      "Az útvonalak az UNESCO világörökség részét képezik.",
      "A zarándokok a célban megkapják a 'Compostela' oklevelet.",
      "Legalább 100 km-t kell gyalogolni az oklevél megszerzéséhez.",
      "Erős nemzetközi kulturális cserét mozdít elő."
    ],
    "ro": [
      "'Camino Francés' este cea mai populară rută.",
      "Simbolul pelerinilor este scoica scallop.",
      "Traseele sunt în Patrimoniul Mondial UNESCO.",
      "Pelerinii primesc certificatul 'Compostela' la destinație.",
      "Trebuie să mergi pe jos cel puțin 100 km pentru a primi certificatul.",
      "Promovează un puternic schimb cultural internațional."
    ],
    "en": [
      "The 'Camino Francés' is the most popular route.",
      "The symbol of the pilgrims is the scallop shell.",
      "The routes are a UNESCO World Heritage site.",
      "Pilgrims receive the 'Compostela' certificate upon arrival.",
      "You must walk at least 100 km to earn the certificate.",
      "Fosters strong international cultural exchange."
    ]
  }
},
{
  "id": "es-galicia-coast",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -9.289,
    42.901
  ],
  "name": {
    "de": "Cíes-Inseln",
    "hu": "Cíes-szigetek",
    "ro": "Insulele Cíes",
    "en": "Cíes Islands"
  },
  "image": "/geo-images/spain/galicia-coast.webp",
  "description": {
    "de": "Die Cíes-Inseln vor der galicischen Küste sind ein streng geschütztes Naturparadies. Sie bieten einige der schönsten Strände der Welt, wie den Playa de Rodas, mit weißem Sand und kristallklarem Wasser. Es gibt hier keine Autos, sondern nur unberührte Natur und Wanderwege.",
    "hu": "A galíciai partoknál fekvő Cíes-szigetek szigorúan védett természeti paradicsom. A világ legszebb strandjai közé tartoznak az itt találhatóak, mint például a fehér homokos, kristálytiszta vizű Playa de Rodas. Itt nincsenek autók, csak érintetlen természet és túraútvonalak.",
    "ro": "Insulele Cíes de pe coasta Galiciei sunt un paradis natural strict protejat. Oferă unele dintre cele mai frumoase plaje din lume, precum Playa de Rodas, cu nisip alb și ape cristaline. Nu există mașini aici, doar natură neatinsă și trasee de drumeții.",
    "en": "The Cíes Islands off the Galician coast are a strictly protected natural paradise. They offer some of the most beautiful beaches in the world, such as Playa de Rodas, with white sand and crystal-clear water. There are no cars here, only pristine nature and hiking trails."
  },
  "facts": {
    "de": [
      "Teil des Nationalparks Atlantische Inseln von Galicien.",
      "Die Inseln waren in der Vergangenheit Zufluchtsorte für Piraten.",
      "Der Playa de Rodas wurde oft zum besten Strand der Welt gewählt.",
      "Tägliche Besucherzahlen sind streng limitiert, um die Natur zu schützen.",
      "Beherbergen die weltweit größte Möwenkolonie.",
      "Das Wasserbleibt selbst im Hochsommer sehr erfrischend kalt."
    ],
    "hu": [
      "A Galíciai Atlanti-szigetek Nemzeti Park része.",
      "A múltban a szigetek kalózok menedékhelyéül szolgáltak.",
      "A Playa de Rodast gyakran a világ legjobb strandjának választják.",
      "A napi látogatók száma a természet védelme érdekében szigorúan korlátozott.",
      "A világ legnagyobb sirálykolóniájának adnak otthont.",
      "A víz még nyár közepén is frissítően hideg marad."
    ],
    "ro": [
      "Parte a Parcului Național Insulele Atlantice din Galicia.",
      "În trecut, insulele au fost refugii pentru pirați.",
      "Playa de Rodas a fost adesea votată cea mai bună plajă din lume.",
      "Numărul de vizitatori zilnici este strict limitat pentru a proteja natura.",
      "Găzduiesc cea mai mare colonie de pescăruși din lume.",
      "Apa rămâne foarte rece și revigorantă chiar și la mijlocul verii."
    ],
    "en": [
      "Part of the Atlantic Islands of Galicia National Park.",
      "The islands were pirate hideouts in the past.",
      "Playa de Rodas has often been voted the best beach in the world.",
      "Daily visitor numbers are strictly limited to protect nature.",
      "Home to the world's largest seagull colony.",
      "The water remains refreshingly cold even in midsummer."
    ]
  }
},
{
  "id": "es-merida-roman",
  "type": "historical",
  "parent": "ES-EX",
  "coords": [
    -6.343,
    38.916
  ],
  "name": {
    "de": "Römisches Theater Mérida",
    "hu": "Méridai római színház",
    "ro": "Teatrul roman din Mérida",
    "en": "Mérida Roman Theatre"
  },
  "image": "/geo-images/spain/merida-roman.webp",
  "description": {
    "de": "Das Römische Theater in Mérida ist eines der prächtigsten noch erhaltenen Bauwerke aus der Zeit des Römischen Reiches auf der iberischen Halbinsel. Die antike Hauptstadt Lusitanias beeindruckt mit ihrer reich verzierten Bühnenwand. Noch heute wird es jeden Sommer für klassische Theaterfestivals genutzt.",
    "hu": "A méridai római színház a Római Birodalom korának egyik legcsodálatosabb, épségben fennmaradt építménye az Ibériai-félszigeten. Lusitania egykori fővárosa lenyűgözően díszített színpadi falával nyűgözi le a látogatókat. Minden nyáron ma is klasszikus színházi fesztiválok helyszíne.",
    "ro": "Teatrul roman din Mérida este una dintre cele mai magnifice structuri supraviețuitoare din perioada Imperiului Roman din Peninsula Iberică. Fosta capitală a Lusitaniei impresionează prin peretele scenic bogat ornamentat. Chiar și astăzi este folosit în fiecare vară pentru festivaluri de teatru clasic.",
    "en": "The Roman Theatre in Mérida is one of the most magnificent surviving structures from the Roman Empire period on the Iberian Peninsula. The ancient capital of Lusitania impresses with its richly decorated stage wall. It is still used every summer for classical theater festivals."
  },
  "facts": {
    "de": [
      "Erbaut um die Jahre 16 bis 15 v. Chr.",
      "Bot Platz für etwa 6.000 Zuschauer.",
      "Teil des Archäologischen Ensembles von Mérida (UNESCO-Welterbe).",
      "Die Bühne wird von korinthischen Marmorsäulen geschmückt.",
      "Befindet sich neben einem fast ebenso gut erhaltenen Amphitheater.",
      "War jahrhundertelang unter Erde und Schutt begraben."
    ],
    "hu": [
      "Kr. e. 16 és 15 körül épült.",
      "Körülbelül 6000 néző számára biztosított helyet.",
      "A méridai régészeti együttes (UNESCO világörökség) része.",
      "A színpadot korinthoszi márványoszlopok díszítik.",
      "Közvetlenül egy szintén jó állapotú amfiteátrum mellett található.",
      "Évszázadokon át föld és törmelék borította."
    ],
    "ro": [
      "Construit în jurul anilor 16 - 15 î.Hr.",
      "Oferea locuri pentru aproximativ 6.000 de spectatori.",
      "Parte a Ansamblului Arheologic de la Mérida (Patrimoniu UNESCO).",
      "Scena este decorată cu coloane corintice de marmură.",
      "Situat lângă un amfiteatru aproape la fel de bine conservat.",
      "A fost îngropat sub pământ și dărâmături timp de secole."
    ],
    "en": [
      "Built around 16 to 15 BC.",
      "Provided seating for about 6,000 spectators.",
      "Part of the Archaeological Ensemble of Mérida (UNESCO World Heritage).",
      "The stage is decorated with Corinthian marble columns.",
      "Located next to an almost equally well-preserved amphitheater.",
      "Was buried under earth and rubble for centuries."
    ]
  }
},
{
  "id": "es-toledo-cathedral",
  "type": "historical",
  "parent": "ES-CM",
  "coords": [
    -4.024,
    39.857
  ],
  "name": {
    "de": "Kathedrale von Toledo",
    "hu": "Toledói katedrális",
    "ro": "Catedrala din Toledo",
    "en": "Toledo Cathedral"
  },
  "image": "/geo-images/spain/toledo-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Toledo ist eine prachtvolle gotische Kirche von immenser historischer Bedeutung in Spanien. Die 'Primas-Kathedrale' spiegelt mit ihrem monumentalen Hauptaltar, dem reich verzierten Chor und Gemälden von El Greco großen Reichtum wider. Sie wurde an der Stelle einer ehemaligen großen Moschee errichtet.",
    "hu": "A toledói katedrális egy pompás gótikus templom, amely hatalmas történelmi jelentőséggel bír Spanyolországban. A 'Prímás katedrális' hatalmas főoltárával, gazdagon díszített kórusával és El Greco festményeivel mérhetetlen gazdagságot tükröz. Egy korábbi nagymecset helyére épült.",
    "ro": "Catedrala din Toledo este o biserică gotică magnifică de o importanță istorică imensă în Spania. „Catedrala Primat” reflectă o mare bogăție cu altarul său principal monumental, corul ornamentat și picturile lui El Greco. A fost construită pe locul unei foste mari moschei.",
    "en": "The Toledo Cathedral is a magnificent Gothic church of immense historical significance in Spain. The 'Primate Cathedral' reflects vast wealth with its monumental main altar, ornate choir, and paintings by El Greco. It was built on the site of a former great mosque."
  },
  "facts": {
    "de": [
      "Gilt als das Opus Magnum der spanischen Gotik.",
      "Baubeginn war im Jahr 1226 unter Ferdinand III.",
      "Das gotische Gebäude enthält auch Mudéjar-Elemente.",
      "Der beeindruckende Hauptaltar (Retablo) zeigt Szenen aus dem Leben Christi.",
      "Die Sakristei ist eine Kunstgalerie mit Werken von Tizian und Goya.",
      "El Grecos berühmtes Gemälde 'Die Entkleidung Christi' hängt hier."
    ],
    "hu": [
      "A spanyol gótika mesterművének (Opus Magnum) tartják.",
      "Építése 1226-ban kezdődött III. Ferdinánd alatt.",
      "A gótikus épület mudéjar stíluselemeket is tartalmaz.",
      "A lenyűgöző főoltár (retablo) Krisztus életének jeleneteit ábrázolja.",
      "A sekrestye valóságos művészeti galéria Tiziano és Goya műveivel.",
      "Itt található El Greco híres festménye, 'Krisztus megfosztása ruháitól'."
    ],
    "ro": [
      "Considerată „Opus Magnum” a goticului spaniol.",
      "Construcția a început în 1226 sub Ferdinand al III-lea.",
      "Clădirea gotică conține și elemente mudéjar.",
      "Altarul principal impresionant (retablo) arată scene din viața lui Hristos.",
      "Sacristia este o galerie de artă cu lucrări de Titian și Goya.",
      "Faimosul tablou al lui El Greco „Dezbrăcarea lui Hristos” atârnă aici."
    ],
    "en": [
      "Considered the 'Opus Magnum' of Spanish Gothic architecture.",
      "Construction began in 1226 under Ferdinand III.",
      "The Gothic building also features Mudéjar elements.",
      "The impressive main altar (retablo) shows scenes from the life of Christ.",
      "The sacristy is an art gallery with works by Titian and Goya.",
      "El Greco's famous painting 'The Disrobing of Christ' hangs here."
    ]
  }
},
{
  "id": "es-cuenca-hanging",
  "type": "landmark",
  "parent": "ES-CM",
  "coords": [
    -2.134,
    40.076
  ],
  "name": {
    "de": "Hängende Häuser von Cuenca",
    "hu": "Cuenca függőházai",
    "ro": "Casele suspendate din Cuenca",
    "en": "Cuenca Hanging Houses"
  },
  "image": "/geo-images/spain/cuenca-hanging.webp",
  "description": {
    "de": "Die Hängenden Häuser (Casas Colgadas) von Cuenca sind ein architektonisches Wunder der mittelalterlichen Stadt. Sie kleben scheinbar schwerelos an den steilen Klippen über der Schlucht des Flusses Huécar. Heute sind sie das bekannteste Symbol der Stadt, die zum UNESCO-Weltkulturerbe gehört.",
    "hu": "Cuenca függőházai (Casas Colgadas) a középkori város építészeti csodái. Szinte súlytalannak tűnve tapadnak a Huécar folyó szurdoka feletti meredek sziklákhoz. Ma ezek jelentik az UNESCO világörökség részét képező város legismertebb szimbólumát.",
    "ro": "Casele suspendate (Casas Colgadas) din Cuenca sunt o minune arhitecturală a orașului medieval. Se agață aparent fără greutate de stâncile abrupte de deasupra defileului râului Huécar. Astăzi sunt cel mai faimos simbol al orașului, care este un sit al Patrimoniului Mondial UNESCO.",
    "en": "The Hanging Houses (Casas Colgadas) of Cuenca are an architectural marvel of the medieval city. They cling seemingly weightlessly to the steep cliffs above the Huécar river gorge. Today they are the most famous symbol of the city, which is a UNESCO World Heritage site."
  },
  "facts": {
    "de": [
      "Nur wenige der ursprünglichen hängenden Häuser existieren noch.",
      "Sie wurden vermutlich im 15. Jahrhundert erbaut.",
      "Ihre Holzbalkone ragen dramatisch über den Abgrund.",
      "Eines der Häuser beherbergt das Museum für abstrakte spanische Kunst.",
      "Cuenca liegt spektakulär zwischen den Flüssen Júcar und Huécar.",
      "Die Brücke San Pablo bietet die beste Aussicht auf die Häuser."
    ],
    "hu": [
      "Az eredeti függőházakból már csak kevés maradt fenn.",
      "Feltehetően a 15. században épültek.",
      "Fából készült erkélyeik drámaian nyúlnak a szakadék fölé.",
      "Az egyik házban működik a Spanyol Absztrakt Művészeti Múzeum.",
      "Cuenca látványos helyen, a Júcar és a Huécar folyók között fekszik.",
      "A San Pablo hídról nyílik a legjobb kilátás a házakra."
    ],
    "ro": [
      "Doar câteva dintre casele suspendate originale mai există.",
      "Probabil au fost construite în secolul al XV-lea.",
      "Balcoanele lor de lemn se întind dramatic peste prăpastie.",
      "Una dintre case găzduiește Muzeul de Artă Abstractă Spaniolă.",
      "Cuenca este situată spectaculos între râurile Júcar și Huécar.",
      "Podul San Pablo oferă cea mai bună vedere asupra caselor."
    ],
    "en": [
      "Only a few of the original hanging houses still exist.",
      "They were probably built in the 15th century.",
      "Their wooden balconies protrude dramatically over the abyss.",
      "One of the houses hosts the Museum of Spanish Abstract Art.",
      "Cuenca is spectacularly situated between the Júcar and Huécar rivers.",
      "The San Pablo bridge offers the best view of the houses."
    ]
  }
},
{
  "id": "es-murcia-cathedral",
  "type": "landmark",
  "parent": "ES-MU",
  "coords": [
    -1.13,
    37.983
  ],
  "name": {
    "de": "Kathedrale von Murcia",
    "hu": "Murciai katedrális",
    "ro": "Catedrala din Murcia",
    "en": "Murcia Cathedral"
  },
  "image": "/geo-images/spain/murcia-cathedral.webp",
  "description": {
    "de": "Die Kathedrale Santa María in Murcia ist das architektonische Meisterwerk der Region. Ihre faszinierende Hauptfassade ist ein herausragendes Beispiel des spanischen Barocks. Der hohe Glockenturm und die Mischung aus Gotik, Renaissance und Barock machen das Bauwerk einzigartig.",
    "hu": "A murciai Santa María katedrális a régió építészeti mesterműve. Lenyűgöző főhomlokzata a spanyol barokk egyik kiemelkedő példája. Magas harangtornya, valamint a gótika, a reneszánsz és a barokk stílusjegyek keveredése teszi egyedülállóvá az építményt.",
    "ro": "Catedrala Santa María din Murcia este capodopera arhitecturală a regiunii. Fațada sa principală fascinantă este un exemplu remarcabil al barocului spaniol. Turnul său înalt al clopotniței și amestecul de stiluri gotic, renascentist și baroc fac din clădire una unică.",
    "en": "The Cathedral of Santa María in Murcia is the architectural masterpiece of the region. Its fascinating main facade is an outstanding example of Spanish Baroque. Its high bell tower and the mix of Gothic, Renaissance, and Baroque styles make the building unique."
  },
  "facts": {
    "de": [
      "Der Bau begann 1394 auf den Grundmauern einer Moschee.",
      "Die barocke Hauptfassade wurde im 18. Jahrhundert fertiggestellt.",
      "Der Glockenturm ist mit 90 Metern der zweithöchste Spaniens.",
      "Die Vélez-Kapelle besticht durch prächtige Spätgotik.",
      "Beherbergt in der Hauptkapelle das Herz von König Alfons X.",
      "Das Glockenspiel hat 25 Glocken, jede mit einem eigenen Namen."
    ],
    "hu": [
      "Építése 1394-ben kezdődött egy mecset alapjain.",
      "A barokk főhomlokzat a 18. században készült el.",
      "A 90 méter magas harangtorony Spanyolország második legmagasabbja.",
      "A Vélez-kápolna káprázatos késő gótikus stílusával hódít.",
      "A fő kápolnában őrzik X. Alfonz király szívét.",
      "Harangjátéka 25 harangból áll, melyek mindegyike saját nevet visel."
    ],
    "ro": [
      "Construcția a început în 1394 pe fundațiile unei moschei.",
      "Fațada principală barocă a fost finalizată în secolul al XVIII-lea.",
      "Turnul clopotniței de 90 de metri este al doilea cel mai înalt din Spania.",
      "Capela Vélez impresionează prin goticul său târziu magnific.",
      "Găzduiește inima regelui Alfonso X în capela principală.",
      "Carilonul are 25 de clopote, fiecare cu propriul nume."
    ],
    "en": [
      "Construction began in 1394 on the foundations of a mosque.",
      "The Baroque main facade was completed in the 18th century.",
      "The 90-meter bell tower is the second highest in Spain.",
      "The Vélez Chapel impresses with its magnificent late Gothic style.",
      "Houses the heart of King Alfonso X in the main chapel.",
      "The carillon has 25 bells, each with its own name."
    ]
  }
},
{
  "id": "es-logrono-wine",
  "type": "city",
  "parent": "ES-RI",
  "coords": [
    -2.445,
    42.466
  ],
  "name": {
    "de": "Logroño",
    "hu": "Logroño",
    "ro": "Logroño",
    "en": "Logroño (wine)"
  },
  "image": "/geo-images/spain/logrono-wine.webp",
  "description": {
    "de": "Logroño ist die Hauptstadt der Region La Rioja und ein Zentrum der spanischen Weinkultur. Die Stadt ist weltweit für ihre exzellenten Rotweine bekannt. Ein Highlight für Besucher ist die Calle del Laurel, eine Straße voller Tapas-Bars, in denen man lokale Weine und Spezialitäten probiert.",
    "hu": "Logroño a La Rioja régió fővárosa és a spanyol borkultúra központja. A város világszerte ismert kiváló vörösborairól. A látogatók számára kiemelkedő élményt nyújt a Calle del Laurel, a tapas bárokkal teli utca, ahol helyi borokat és különlegességeket kóstolhatnak.",
    "ro": "Logroño este capitala regiunii La Rioja și un centru al culturii vinului spaniol. Orașul este cunoscut în întreaga lume pentru vinurile sale roșii excelente. Un punct culminant pentru vizitatori este Calle del Laurel, o stradă plină de baruri de tapas unde se pot degusta vinuri și specialități locale.",
    "en": "Logroño is the capital of the La Rioja region and a center of Spanish wine culture. The city is known worldwide for its excellent red wines. A highlight for visitors is the Calle del Laurel, a street full of tapas bars where you can taste local wines and specialties."
  },
  "facts": {
    "de": [
      "Hauptstadt der kleinsten autonomen Region Spaniens (La Rioja).",
      "Wichtiger Halt auf dem französischen Jakobsweg.",
      "Die Calle del Laurel bietet über 60 Tapas-Bars.",
      "Jedes Jahr im September findet das Weinlesefest San Mateo statt.",
      "Umgeben von Hunderten von renommierten Weingütern (Bodegas).",
      "Der Fluss Ebro fließt malerisch durch die Stadt."
    ],
    "hu": [
      "Spanyolország legkisebb autonóm régiójának (La Rioja) fővárosa.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "A Calle del Laurel több mint 60 tapas bárral várja a vendégeket.",
      "Minden szeptemberben megrendezik a San Mateo szüreti fesztivált.",
      "Több száz neves borászat (bodegas) veszi körül.",
      "Az Ebro folyó festőien folyik át a városon."
    ],
    "ro": [
      "Capitala celei mai mici comunități autonome din Spania (La Rioja).",
      "Oprire importantă pe ruta franceză Camino de Santiago.",
      "Calle del Laurel oferă peste 60 de baruri de tapas.",
      "În fiecare septembrie are loc festivalul recoltei de vin San Mateo.",
      "Înconjurat de sute de crame renumite (bodegas).",
      "Râul Ebro curge pitoresc prin oraș."
    ],
    "en": [
      "Capital of Spain's smallest autonomous community (La Rioja).",
      "Important stop on the French route of the Camino de Santiago.",
      "Calle del Laurel offers over 60 tapas bars.",
      "The San Mateo wine harvest festival takes place every September.",
      "Surrounded by hundreds of renowned wineries (bodegas).",
      "The Ebro River flows picturesquely through the city."
    ]
  }
}
];

export const spainAllPoi: POI[] = [...spainCountry, ...spainRegions, ...spainCities];
