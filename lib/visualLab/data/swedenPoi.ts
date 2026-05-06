// @ts-nocheck
import type { POI } from "./poi";

export const swedenCountry: POI = {
  id: "sweden",
  type: "country",
  parent: "EU",
  coords: [18.0686, 59.3293],
  name: { de: "Schweden", hu: "Svédország", ro: "Suedia", en: "Sweden" },
  description: {
    de: "Schweden ist das größte skandinavische Land, bekannt für seine unberührte Natur, tausende Küsteninseln, innovatives Design und eine hohe Lebensqualität.",
    hu: "Svédország a legnagyobb skandináv ország, amely érintetlen természetéről, több ezer tengerparti szigetéről, innovatív dizájnjáról és magas életminőségéről ismert.",
    ro: "Suedia este cea mai mare țară scandinavă, cunoscută pentru natura sa virgină, mii de insule de coastă, designul inovator și calitatea ridicată a vieții.",
    en: "Sweden is the largest Scandinavian country, known for its pristine nature, thousands of coastal islands, innovative design, and high quality of life."
  },
  descriptionAdvanced: {
    de: "Schweden, offiziell das Königreich Schweden, ist ein faszinierendes Land im Norden Europas, das für seine atemberaubende natürliche Schönheit, seine progressive Gesellschaft und seine weltweit führende Rolle in Innovation und Nachhaltigkeit bekannt ist. Als flächenmäßig größtes Land Skandinaviens bietet Schweden eine beeindruckende landschaftliche Vielfalt: von den fruchtbaren Ebenen und sanften Hügeln des Südens über die dichten Nadelwälder und glitzernden Seen Mittelschwedens bis hin zur wilden, arktischen Tundra Lapplands im hohen Norden. Schweden grenzt an Norwegen und Finnland und ist durch die Öresundbrücke mit Dänemark verbunden. Die schwedische Identität ist tief in der Natur verwurzelt; das 'Allemansrätt' (Jedermannsrecht) erlaubt es jedem, sich frei in der Natur zu bewegen und deren Früchte zu genießen. Die Hauptstadt Stockholm, erbaut auf 14 Inseln, gilt als eine der schönsten Hauptstädte der Welt und verbindet historisches Erbe mit modernem urbanem Lifestyle. Kulturell hat Schweden die Welt mit Ikonen wie ABBA, Astrid Lindgren und Ingmar Bergman sowie mit globalen Marken wie IKEA, Spotify und Volvo geprägt. Ein zentraler Aspekt des sozialen Gefüges ist das Konzept von 'Lagom' – das Streben nach dem richtigen Maß, nicht zu viel und nicht zu wenig. Kulinarisch ist Schweden für seine Köttbullar, frischen Fisch und die gemütliche Kaffeepause 'Fika' bekannt. Heute ist Schweden ein Vorreiter in Sachen Umweltschutz und erneuerbare Energien und setzt weltweit Maßstäbe für soziale Gerechtigkeit und Gleichberechtigung. Ob man die magischen Polarlichter in Lappland bestaunt, durch den Stockholmer Schärengarten segelt oder die Ruhe an einem der über 100.000 Seen genießt – Schweden empfängt seine Besucher mit einer Mischung aus nordischer Gelassenheit, technologischer Brillanz und herzlicher Gastfreundschaft.",
    hu: "",
    ro: "Suedia, regatul nordic aflat în inima Europei de Nord, este un tărâm al contrastelor spectaculoase, unde modernitatea tehnologică se îmbină armonios cu tradițiile străvechi. De la arhipelagurile stâncoase ale Mării Baltice până la vastitatea sălbatică a Laponiei, țara oferă o diversitate geografică uimitoare, fiind un pionier mondial în sustenabilitate și inovație socială. Conceptul de „lagom” – echilibrul perfect în toate – definește stilul de viață suedez, promovând moderația și bunăstarea. Istoria țării, marcată de perioada vikingilor și de puterea imperiului regal, se oglindește astăzi în arhitectura elegantă a orașelor sale, precum Stockholm. Suedia este o destinație esențială pentru iubitorii de natură, design și cultură scandinavă autentică.",
    en: "Sweden, officially the Kingdom of Sweden, is a fascinating country in Northern Europe, known for its breathtaking natural beauty, progressive society, and world-leading role in innovation and sustainability. As the largest country in Scandinavia, Sweden offers an impressive variety of landscapes: from the fertile plains and gentle hills of the south to the dense coniferous forests and sparkling lakes of central Sweden, and the wild, arctic tundra of Lapland in the far north. Sweden shares borders with Norway and Finland and is connected to Denmark by the Øresund Bridge. The Swedish identity is deeply rooted in nature; the 'Allemansrätt' (Right of Public Access) allows everyone to move freely in nature and enjoy its fruits. The capital, Stockholm, built on 14 islands, is one of the world's most beautiful capitals, blending historic heritage with a modern urban lifestyle."
  },
  facts: {
    de: [],
    hu: [],
    ro: [],
    en: []
  },
  factsAdvanced: {
    de: ["Schweden besitzt mehr Inseln als jedes andere Land der Welt, mit über 267.000 registrierten Inseln.", "Mit einer Fläche von rund 450.000 km² ist Schweden das drittgrößte Land der Europäischen Union.", "Die schwedische Geschichte ist eng mit dem Wikingerzeitalter verknüpft, das von etwa 793 bis 1066 n. Chr. andauerte.", "Schweden ist weltweit für sein Konzept der 'Lagom'-Lebensweise bekannt, das Ausgeglichenheit und Mäßigung betont.", "Das schwedische Allemansrätt ist gesetzlich verankert und erlaubt es Menschen, sich auf privatem Land aufzuhalten, solange sie die Natur respektieren."],
    hu: [],
    ro: ["Suedia are peste 267.000 de insule, mai mult decât orice altă țară din lume.", "Cu o suprafață de circa 450.000 km², este a treia țară ca mărime din Uniunea Europeană.", "Istoria suedeză este strâns legată de epoca vikingilor, care a durat între anii 793 și 1066 d.Hr.", "Conceptul suedez de „lagom”, care înseamnă echilibru și moderație, este recunoscut și admirat la nivel mondial.", "Dreptul public de acces, cunoscut sub numele de „Allemansrätt”, permite oricui să exploreze natura liber, cu condiția respectării mediului."],
    en: [
      "Sweden has more islands than any other country in the world, with over 267,000 registered.",
      "With an area of around 450,000 km², it is the third-largest country in the European Union.",
      "Swedish history is closely linked to the Viking Age, which lasted from approximately 793 to 1066 AD.",
      "Sweden is known worldwide for its concept of 'Lagom', which emphasizes balance and moderation.",
      "The Swedish 'Allemansrätt' is legally enshrined, allowing people to access private land for recreation as long as nature is respected."
    ]
  },
  image: "/geo-images/sweden/sweden-main.webp",
};

export const swedenRegions: POI[] = [
  {
    id: "city-stockholm",
    type: "city",
    parent: "sweden",
    coords: [18.0686, 59.3293],
    name: { de: "Stockholm", hu: "Stockholm", ro: "Stockholm", en: "Stockholm" },
    description: {
      de: "Stockholm ist die Hauptstadt Schwedens, eine elegante Stadt auf 14 Inseln, bekannt für ihre gut erhaltene Altstadt Gamla Stan, erstklassige Museen und viel Wasser.",
      hu: "Stockholm Svédország fővárosa, egy elegáns város 14 szigeten, amely jól megőrzött óvárosáról (Gamla Stan), világszínvonalú múzeumairól és rengeteg vizéről ismert.",
      ro: "Stockholm este capitala Suediei, un oraș elegant construit pe 14 insule, cunoscut pentru orașul său vechi bine conservat Gamla Stan, muzeele de talie mondială și abundența apei.",
      en: "Stockholm is the capital of Sweden, an elegant city built on 14 islands, known for its well-preserved old town Gamla Stan, world-class museums, and abundant water."
    ,
    descriptionAdvanced: {
      de: "Stockholm, die Hauptstadt Schwedens, ist auf 14 Inseln erbaut, die durch über 50 Brücken verbunden sind. Bekannt als 'Venedig des Nordens', ist es eine Stadt mit beeindruckender Architektur, sauberem Wasser und zahlreichen Grünflächen. Die historische Altstadt Gamla Stan besticht durch Kopfsteinpflasterstraßen und bunte Gebäude, während die Stadt auch erstklassige Museen wie das Vasa-Museum und das ABBA-Museum beherbergt. Stockholm ist ein globales Zentrum für Technologie, Design und Mode. Geografie K8.",
      hu: "Stockholm, Svédország fővárosa, 14 szigeten épült, melyeket több mint 50 híd köt össze. A „Észak Velencéje” néven is ismert város lenyűgöző építészetével, tiszta vizeivel és számos zöldterületével vonzza a látogatókat. A történelmi Gamla Stan óvárosa a szűk, macskaköves utcáival és színes épületeivel a középkori hangulatot idézi, míg a város modern arculata a technológia, a dizájn és a fenntartható életmód ötvözetét tükrözi. A város világszínvonalú múzeumoknak, mint a Vasa Múzeum, otthona. Földrajz K8."
    },
    factsAdvanced: {
      hu: ["A stockholmi metróhálózat több mint 110 kilométer hosszú, és 90 díszített állomásával a világ leghosszabb művészeti galériájának számít.", "A város 14 szigeten terül el, amelyeket 57 híd köt össze egy komplex rendszerben.", "A stockholmi Királyi Palota több mint 600 szobával rendelkezik, és a világ egyik legnagyobb működő királyi palotája.", "A Vasa Múzeum a 17. századi, 1961-ben kiemelt Vasa hadihajónak ad otthont, amely 333 évet töltött a víz alatt.", "A város területének egyharmadát zöldterületek teszik ki, Stockholm az egyik legzöldebb főváros."]
    },
    factsAdvanced: {
      de: ["Die Stockholmer U-Bahn erstreckt sich über 110 Kilometer und ist mit über 90 gestalteten Stationen die längste Kunstgalerie der Welt.", "Stockholm verteilt sich auf 14 Inseln, die durch ein komplexes Netzwerk von 57 Brücken verbunden sind.", "Der Stockholmer Königspalast verfügt über mehr als 600 Zimmer und ist einer der größten aktiven königlichen Paläste weltweit.", "Das Vasa-Museum beherbergt das einzige nahezu intakte Schiff des 17. Jahrhunderts, das 1961 nach 333 Jahren Unterwasserzeit geborgen wurde.", "Die Stadt ist für ihren hohen Anteil an öffentlichen Grünflächen bekannt, die etwa ein Drittel der gesamten Stadtfläche ausmachen."]
    }
  },
    descriptionAdvanced: {
      de: "Stockholm, die Hauptstadt Schwedens, ist auf 14 Inseln erbaut, die durch über 50 Brücken verbunden sind. Bekannt als 'Venedig des Nordens', ist es eine Stadt mit beeindruckender Architektur, sauberem Wasser und zahlreichen Grünflächen. Die historische Altstadt Gamla Stan besticht durch Kopfsteinpflasterstraßen und bunte Gebäude, während die Stadt auch erstklassige Museen wie das Vasa-Museum und das ABBA-Museum beherbergt. Stockholm ist ein globales Zentrum für Technologie, Design und Mode. Geografie K8.",
      hu: "",
      ro: "Stockholm, capitala Suediei, este o metropolă vibrantă construită pe 14 insule conectate prin peste 50 de poduri, fiind adesea numită „Veneția Nordului”. Orașul vechi, Gamla Stan, este un labirint de străzi pietruite și clădiri colorate, unde se află Palatul Regal și Catedrala din Stockholm. Stockholm este un centru global pentru tehnologie, design și modă, găzduind muzee de talie mondială precum Muzeul Vasa, care expune o navă de război din secolul al XVII-lea aproape intactă, și Muzeul ABBA. Orașul îmbină perfect istoria bogată cu un stil de viață modern și un angajament puternic față de sustenabilitate. Geografie K8.",
      en: "Stockholm, the capital of Sweden, is built on 14 islands connected by over 50 bridges. Known as the 'Venice of the North', it is a city of impressive architecture, clean water, and numerous green spaces. The historic old town, Gamla Stan, features narrow cobblestone streets and colorful buildings, while the city also hosts world-class museums such as the Vasa Museum and the ABBA Museum. Stockholm is a global center for technology, design, and fashion, consistently ranking high for its urban quality of life. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Stockholmer U-Bahn erstreckt sich über 110 Kilometer und ist mit über 90 gestalteten Stationen die längste Kunstgalerie der Welt.", "Stockholm verteilt sich auf 14 Inseln, die durch ein komplexes Netzwerk von 57 Brücken verbunden sind.", "Der Stockholmer Königspalast verfügt über mehr als 600 Zimmer und ist einer der größten aktiven königlichen Paläste weltweit.", "Das Vasa-Museum beherbergt das einzige nahezu intakte Schiff des 17. Jahrhunderts, das 1961 nach 333 Jahren Unterwasserzeit geborgen wurde."],
      hu: [],
      ro: ["Metroul din Stockholm este considerat cea mai lungă galerie de artă din lume, cu peste 90 de stații decorate de artiști.","Palatul Regal din Stockholm este reședința oficială a monarhului suedez și are peste 600 de camere.","Ericsson Globe (Avicii Arena) este cea mai mare clădire sferică din lume și găzduiește evenimente sportive și concerte majore.","Stockholm a fost primul oraș care a primit titlul de Capitală Verde Europeană în 2010.","Parcul Național Regal Urban este primul parc național urban din lume, acoperind o mare parte din oraș.","Apa din oraș este atât de curată încât se poate pescui și chiar înota în centrul său.","Premiile Nobel sunt decernate anual în Stockholm la 10 decembrie, cu excepția Premiului Nobel pentru Pace."],
      en: [
        "The Stockholm Metro spans over 110 kilometers and, with over 90 artistically designed stations, is the longest art gallery in the world.",
        "Stockholm is spread across 14 islands, connected by a complex network of 57 bridges.",
        "The Royal Palace of Stockholm has over 600 rooms and is one of the largest active royal palaces in the world.",
        "The Vasa Museum houses the only nearly intact 17th-century ship, salvaged in 1961 after 333 years underwater."
      ]
    },
    image: "/geo-images/sweden/stockholm.webp",
  },
  {
    id: "city-gothenburg",
    type: "city",
    parent: "sweden",
    coords: [11.9746, 57.7089],
    name: { de: "Göteborg", hu: "Göteborg", ro: "Göteborg", en: "Gothenburg" },
    description: {
      de: "Göteborg ist die zweitgrößte Stadt Schwedens, eine charmante Hafenstadt an der Westküste, bekannt für ihre Kanäle, erstklassige Meeresfrüchte und den Vergnügungspark Liseberg.",
      hu: "Göteborg Svédország második legnagyobb városa, egy bájos kikötőváros a nyugati parton, amely csatornáiról, kiváló tengeri ételeiről és a Liseberg vidámparkról ismert.",
      ro: "Göteborg este al doilea oraș ca mărime din Suedia, un oraș portuar fermecător pe coasta de vest, cunoscut pentru canalele sale, fructele de mare de primă clasă și parcul de distracții Liseberg.",
      en: "Gothenburg is the second-largest city in Sweden, a charming port city on the west coast known for its canals, world-class seafood, and the Liseberg amusement park."
    ,
    descriptionAdvanced: {
      de: "Göteborg an der Westküste Schwedens ist die zweitgrößte Stadt des Landes und sein wichtigster Hafen. Sie ist bekannt für ihre freundliche Atmosphäre, ihre schönen Kanäle und ihre lebendige kulinarische Szene, insbesondere für frische Meeresfrüchte. Die Stadt beherbergt Liseberg, den größten Vergnügungspark Skandinaviens, und das Wissenschaftszentrum Universeum. Göteborg bietet eine Mischung aus städtischer Kultur und einfachem Zugang zum beeindruckenden südlichen Schärengarten. Geografie K7.",
      en: "Gothenburg, located on Sweden's west coast, is the country's second-largest city and home to its busiest port. Known for its charming 17th-century canals, lush green parks, and lively culinary scene, it is particularly celebrated for its fresh seafood. The city is a major hub for automotive industry innovation, being the birthplace of Volvo. Gothenburg is home to Liseberg, Scandinavia's largest amusement park, which attracts millions of visitors annually. It also provides easy access to the stunning southern archipelago, where small islands are reachable by ferry. Geography K7.",
      hu: "Göteborg, Svédország nyugati partján fekvő második legnagyobb városa, egyben az ország legforgalmasabb kikötője. A holland stílusú csatornákról, buja parkjairól és élénk kulináris kínálatáról ismert, különösen híres friss tengeri ételeiről. A város a Volvo autógyár otthonaként fontos ipari és innovációs központ. A Liseberg vidámpark, Skandinávia legnagyobbja, évente turisták millióit vonzza. A közeli szigetvilág hajóval könnyen elérhető, ideális kirándulóhely. Földrajz K7."
    },
    factsAdvanced: {
      hu: ["Göteborg városát 1621-ben alapították királyi oklevéllel, stratégiai kereskedelmi központként.", "A Volvo vállalatot 1627-ben Göteborgban alapították, és központja ma is itt található.", "A Gothia Kupa, a világ legnagyobb ifjúsági labdarúgótornája, minden évben itt kerül megrendezésre.", "Liseberg 1923-ban nyílt meg, azóta Skandinávia leglátogatottabb vidámparkja.", "A Feskekörka (Haltemplom) egy különleges piac, amelynek épülete egy gótikus templomra emlékeztet."]
    },
    factsAdvanced: {
      en: ["Gothenburg was founded in 1621 by King Gustavus Adolphus as a trade center.", "The city's canal system was inspired by Dutch urban planning due to the city's terrain.", "Volvo was founded in Gothenburg in 1927 and continues to be a central part of the city's industrial identity.", "Liseberg, opened in 1923, is one of the most visited amusement parks in Scandinavia.", "The Gothenburg Archipelago features over 20 islands, each with unique landscapes and accessible by public ferry.", "The Universeum is the largest science center in Scandinavia, covering seven floors of interactive exhibits.", "Gothenburg is considered a global leader in sustainable public transport, with a comprehensive tram network."]
    },
    factsAdvanced: {
      de: ["Die Stadt Göteborg wurde im Jahr 1621 mit einem königlichen Freibrief gegründet, um als strategisch wichtiger Handelsposten zu fungieren.", "Das Unternehmen Volvo wurde 1927 in Göteborg gegründet und hat dort noch immer einen seiner wichtigsten Hauptsitze.", "Der Gothia Cup in Göteborg gilt als das größte Jugendfußballturnier der Welt und begrüßt jährlich zehntausende Spieler aus über 80 Nationen.", "Liseberg ist der am meisten besuchte Vergnügungspark in Skandinavien und wurde 1923 eröffnet.", "Das Göteborg Naturhistoriska Museum beherbergt eine der weltweit größten Wal-Ausstellungen."]
    }
  },
    descriptionAdvanced: {
      de: "Göteborg an der Westküste Schwedens ist die zweitgrößte Stadt des Landes und sein wichtigster Hafen. Sie ist bekannt für ihre freundliche Atmosphäre, ihre schönen Kanäle und ihre lebendige kulinarische Szene, insbesondere für frische Meeresfrüchte. Die Stadt beherbergt Liseberg, den größten Vergnügungspark Skandinaviens, und das Wissenschaftszentrum Universeum. Göteborg bietet eine Mischung aus städtischer Kultur und einfachem Zugang zum beeindruckenden südlichen Schärengarten. Geografie K7.",
      hu: "",
      ro: "Göteborg, al doilea oraș ca mărime din Suedia, este un port important pe coasta de vest, renumit pentru atmosfera sa prietenoasă și canalele pitorești de inspirație olandeză. Orașul este un centru cultural vibrant, găzduind numeroase evenimente, inclusiv Festivalul de Film de la Göteborg, cel mai mare din Scandinavia. Parcul de distracții Liseberg este o atracție majoră pentru familii, în timp ce cartierul Haga este faimos pentru casele sale din lemn și cafenelele primitoare. Göteborg este, de asemenea, un lider în sustenabilitate și inovație, cu un arhipelag impresionant la mică distanță. Geografie K7.",
      en: "Gothenburg, on the west coast of Sweden, is the country's second-largest city and its most important port. Known for its friendly atmosphere, beautiful canals, and vibrant culinary scene—particularly its fresh seafood—Gothenburg is a destination of contrasts. It houses Liseberg, the largest amusement park in Scandinavia, and the Universeum science center. The city offers a unique mix of urban culture and easy access to the stunning southern archipelago, making it a lively and welcoming hub. Geography K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Stadt Göteborg wurde im Jahr 1621 mit einem königlichen Freibrief gegründet, um als strategisch wichtiger Handelsposten zu fungieren.", "Das Unternehmen Volvo wurde 1927 in Göteborg gegründet und hat dort noch immer einen seiner wichtigsten Hauptsitze.", "Der Gothia Cup in Göteborg gilt als das größte Jugendfußballturnier der Welt und begrüßt jährlich zehntausende Spieler aus über 80 Nationen.", "Liseberg ist der am meisten besuchte Vergnügungspark in Skandinavien und wurde 1923 eröffnet."],
      hu: [],
      ro: ["Compania Volvo a fost fondată în Göteborg în 1927 și își menține aici sediul central.","Arhipelagul Göteborg este format din peste 20 de insule, ușor accesibile cu feribotul din oraș.","Feskekörka, sau „biserica peștelui”, este o piață de pește interioară renumită, a cărei clădire seamănă cu o biserică gotică.","Grădina Botanică din Göteborg este una dintre cele mai mari din Europa și are o colecție impresionantă de orhidee.","Gothia Cup, cel mai mare turneu de fotbal pentru tineret din lume, are loc anual în Göteborg.","Centrul de Știință Universeum include o pădure tropicală interioară și acvarii uriașe.","Bulevardul principal, Kungsportsavenyn, cunoscut ca Avenyn, este plin de magazine, restaurante și teatre."],
      en: [
        "The city of Gothenburg was founded in 1621 with a royal charter to serve as a strategically important trading post.",
        "The company Volvo was founded in Gothenburg in 1927 and still maintains one of its main headquarters there.",
        "The Gothia Cup in Gothenburg is considered the largest youth football tournament in the world, welcoming tens of thousands of players annually.",
        "Liseberg is the most visited amusement park in Scandinavia and first opened in 1923."
      ]
    },
    image: "/geo-images/sweden/gothenburg.webp",
  },
  {
    id: "city-malmo",
    type: "city",
    parent: "sweden",
    coords: [13.0038, 55.6050],
    name: { de: "Malmö", hu: "Malmö", ro: "Malmö", en: "Malmö" },
    description: {
      de: "Malmö ist die drittgrößte Stadt Schwedens, eine multikulturelle Metropole im Süden, bekannt für den Turning Torso, die Öresundbrücke und ihre innovative Nachhaltigkeit.",
      hu: "Malmö Svédország harmadik legnagyobb városa, egy multikulturális metropolisz délen, amely a Turning Torso felhőkarcolóról, az Öresund hídról és innovatív fenntarthatóságáról ismert.",
      ro: "Malmö este al treilea oraș ca mărime din Suedia, o metropolă multiculturală în sud, cunoscută pentru zgârie-norul Turning Torso, Podul Øresund și sustenabilitatea sa inovatoare.",
      en: "Malmö is the third-largest city in Sweden, a multicultural metropolis in the south known for the Turning Torso, the Øresund Bridge, and its innovative sustainability."
    ,
    descriptionAdvanced: {
      de: "Malmö ist die drittgrößte Stadt Schwedens und liegt in der südlichsten Provinz Schonen. Es ist eine vielfältige und multikulturelle Stadt, die durch die ikonische Öresundbrücke mit Kopenhagen verbunden ist. Malmö ist bekannt für seine innovative Architektur, wie den Wolkenkratzer Turning Torso, und sein Engagement für Nachhaltigkeit. Die Stadt bietet schöne Parks, ein lebendiges Uferviertel namens Västra Hamnen und ein reiches Kulturleben mit vielen Festivals und Veranstaltungen. Sachkunde K5.",
      hu: "Malmö Svédország harmadik legnagyobb városa, Skåne tartományban fekszik. A város multikulturális metropolisszá vált, melyet az Öresund híd közvetlenül kapcsol össze Koppenhágával. Az innovatív építészet egyik kiemelkedő példája a Turning Torso felhőkarcoló, amely a város modernkori fejlődését jelképezi. Malmö sikeresen alakult át ipari központból fenntartható, modern lakónegyeddé, mint amilyen a Västra Hamnen. A város gazdag kulturális élettel, fesztiválokkal és kiterjedt kerékpárút-hálózattal várja a látogatókat. Sachkunde K5."
    },
    factsAdvanced: {
      hu: ["Az Öresund híd 7,8 kilométeres hosszával köti össze Svédországot Dániával.", "A Turning Torso felhőkarcoló 190 méter magas, és 90 fokos csavarodással épült az alapjától a csúcsáig.", "Malmö lakosai több mint 170 nemzetből érkeztek, ezzel az egyik legváltozatosabb svéd város.", "A Malmöhus kastély a legrégebbi reneszánsz erőd Skandináviában, amely ma több múzeumnak is otthont ad.", "A városban több mint 500 kilométernyi kerékpárút található, ami a világ egyik legbarátságosabb kerékpáros városává teszi."]
    },
    factsAdvanced: {
      de: ["Die Öresundbrücke verbindet Schweden mit Dänemark und ist insgesamt 7,8 Kilometer lang.", "Der Wolkenkratzer 'Turning Torso' ist 190 Meter hoch und weist eine Verdrehung von 90 Grad von der Basis bis zur Spitze auf.", "Malmö wandelt sich durch das Projekt 'Västra Hamnen' von einer Industriegemeinde zu einem nachhaltigen, modernen Wohnviertel.", "Mit Bewohnern aus über 170 Nationen gilt Malmö als eine der diversesten Städte Schwedens.", "Das Malmöhus-Schloss ist die älteste erhaltene Renaissance-Festung Skandinaviens."]
    }
  },
    descriptionAdvanced: {
      de: "Malmö ist die drittgrößte Stadt Schwedens und liegt in der südlichsten Provinz Schonen. Es ist eine vielfältige und multikulturelle Stadt, die durch die ikonische Öresundbrücke mit Kopenhagen verbunden ist. Malmö ist bekannt für seine innovative Architektur, wie den Wolkenkratzer Turning Torso, und sein Engagement für Nachhaltigkeit. Die Stadt bietet schöne Parks, ein lebendiges Uferviertel namens Västra Hamnen und ein reiches Kulturleben mit vielen Festivals und Veranstaltungen. Sachkunde K5.",
      hu: "",
      ro: "Malmö, situat în sudul Suediei, este un oraș dinamic și multicultural, conectat de Copenhaga prin impresionantul Pod Øresund. Simbolul modern al orașului este zgârie-norul Turning Torso, proiectat de Santiago Calatrava, care este cea mai înaltă clădire din Scandinavia. Malmö a trecut printr-o transformare remarcabilă, de la un oraș industrial la un centru de tehnologie și sustenabilitate. Cartierul Västra Hamnen (Portul de Vest) este un exemplu de dezvoltare urbană durabilă, alimentat 100% cu energie regenerabilă. Orașul oferă parcuri frumoase, plaje și o scenă artistică și culinară înfloritoare. Sachkunde K5.",
      en: "Malmö is Sweden's third-largest city, located in the southernmost province of Skåne. It is a diverse and multicultural metropolis, directly connected to Copenhagen by the iconic Øresund Bridge. Malmö is famous for its innovative architecture, such as the Turning Torso skyscraper, and its firm commitment to sustainability. Visitors can explore beautiful parks, the vibrant Västra Hamnen waterfront district, and a rich cultural scene marked by numerous festivals. Sachkunde K5."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Öresundbrücke verbindet Schweden mit Dänemark und ist insgesamt 7,8 Kilometer lang.", "Der Wolkenkratzer 'Turning Torso' ist 190 Meter hoch und weist eine Verdrehung von 90 Grad von der Basis bis zur Spitze auf.", "Malmö wandelt sich durch das Projekt 'Västra Hamnen' von einer Industriegemeinde zu einem nachhaltigen, modernen Wohnviertel.", "Mit Bewohnern aus über 170 Nationen gilt Malmö als eine der diversesten Städte Schwedens."],
      hu: [],
      ro: ["Podul Øresund, finalizat în 2000, este o minune inginerească combinată de pod și tunel, cu o lungime de aproape 16 km.","Clădirea Turning Torso se rotește la 90 de grade de la bază la vârf.","Malmö are o populație foarte tânără, aproape jumătate dintre locuitori având sub 35 de ani.","Piața Möllevångstorget este un centru vibrant multicultural, cu o piață plină de produse din întreaga lume.","Castelul Malmöhus este cea mai veche fortăreață renascentistă din Scandinavia și găzduiește mai multe muzee.","Malmö este considerat unul dintre cele mai prietenoase orașe pentru bicicliști din lume, cu peste 500 km de piste dedicate.","Biblioteca orașului Malmö este o capodoperă arhitecturală, combinând o clădire veche cu o structură modernă de sticlă."],
      en: [
        "The Øresund Bridge, connecting Sweden to Denmark, has a total length of 7.8 kilometers.",
        "The 'Turning Torso' skyscraper is 190 meters high and features a 90-degree twist from base to top.",
        "Malmö is transforming from an industrial center into a sustainable residential district through the 'Västra Hamnen' project.",
        "With residents from over 170 nations, Malmö is considered one of Sweden's most diverse cities."
      ]
    },
    image: "/geo-images/sweden/malmo.webp",
  },
  {
    id: "city-uppsala",
    type: "city",
    parent: "sweden",
    coords: [17.6389, 59.8586],
    name: { de: "Uppsala", hu: "Uppsala", ro: "Uppsala", en: "Uppsala" },
    description: {
      en: "Uppsala is a historic city located north of Stockholm, famous for its prestigious university, which is the oldest in Scandinavia. The city is dominated by the magnificent Uppsala Cathedral, the largest church in the Nordic countries, and the historic Uppsala Castle. Uppsala has a rich academic and religious history, and it remains a vibrant center for education, research, and culture, with many museums and botanical gardens.",
      de: "Uppsala ist eine historische Stadt nördlich von Stockholm, berühmt für ihre renommierte Universität, die älteste in Skandinavien. Die Stadt wird vom prächtigen Dom zu Uppsala, der größten Kirche der nordischen Länder, und dem historischen Schloss Uppsala dominiert. Uppsala hat eine reiche akademische und religiöse Geschichte und ist nach wie vor ein lebendiges Zentrum für Bildung, Forschung und Kultur mit vielen Museen und botanischen Gärten.",
      hu: "Uppsala egy történelmi város Stockholmtól északra, amely rangos egyeteméről híres, amely Skandinávia legrégebbi egyeteme. A várost a lenyűgöző uppsalai székesegyház, az északi országok legnagyobb temploma és a történelmi uppsalai vár uralja. Uppsala gazdag akadémiai és vallási múlttal rendelkezik, és továbbra is az oktatás, a kutatás és a kultúra vibráló központja, számos múzeummal és botanikus kerttel.",
      ro: "Uppsala este un oraș istoric situat la nord de Stockholm, faimos pentru prestigioasa sa universitate, care este cea mai veche din Scandinavia. Orașul este dominat de magnifica Catedrală din Uppsala, cea mai mare biserică din țările nordice, și de istoricul Castel Uppsala. Uppsala are o bogată istorie academică și religioasă și rămâne un centru vibrant pentru educație, cercetare și cultură, cu multe muzee și grădini botanice."
    ,
    descriptionAdvanced: {
      de: "Uppsala ist eine historische Stadt nördlich von Stockholm, berühmt für ihre renommierte Universität, die älteste in Skandinavien. Die Stadt wird vom prächtigen Dom zu Uppsala, der größten Kirche der nordischen Länder, und dem historischen Schloss Uppsala dominiert. Uppsala hat eine reiche akademische und religiöse Geschichte und ist nach wie vor ein lebendiges Zentrum für Bildung, Forschung und Kultur mit vielen Museen und botanischen Gärten. Geschichte K6.",
      hu: "Uppsala történelmi városa Stockholmtól északra fekszik, rangos egyeteméről ismert, amely Skandinávia legrégebbi felsőoktatási intézménye. A várost a hatalmas Uppsalai Székesegyház uralja, amely a skandináv országok legnagyobb temploma. A Fyris-folyó által átszelt város gazdag történelmi emlékekkel, köztük az Uppsalai várral rendelkezik, ahonnan csodás panoráma nyílik. A város Carl Linnaeus botanikus otthona is volt, botanikus kertjei ma is látogathatók. A hallgatói közösség vibráló hangulatot kölcsönöz a történelmi városnak. Istorie K6."
    },
    factsAdvanced: {
      hu: ["Az Uppsalai Egyetemet 1477-ben alapították, ezzel a skandináv országok legrégebbi egyeteme.", "Carl Linnaeus, a modern rendszertan atyja, Uppsalában dolgozott; egykori lakhelye ma botanikai múzeum.", "Az Uppsalai Székesegyház 118,7 méteres tornyaival Skandinávia legmagasabb templomépülete.", "A Carolina Rediviva könyvtár őrzi a Codex Argenteust, az értékes 6. századi gótikus ezüstbibliát.", "Valborg (Walpurgis-éj) minden év április 30-án a hallgatók nagy ünnepe máglyákkal és rendezvényekkel."]
    },
    factsAdvanced: {
      de: ["Die Universität Uppsala wurde bereits 1477 gegründet und ist damit die älteste Universität in den skandinavischen Ländern.", "Carl von Linné, der Begründer der modernen Taxonomie, arbeitete in Uppsala; sein ehemaliger Wohnsitz ist heute ein botanisches Museum.", "Der Dom zu Uppsala ist das höchste Kirchengebäude in den nordischen Ländern und beherbergt die Gräber vieler schwedischer Könige.", "Die Universitätsbibliothek 'Carolina Rediviva' beherbergt den 'Codex Argenteus', eine berühmte gotische Silberbibel aus dem 6. Jahrhundert.", "Die Walpurgisnacht am 30. April ist in Uppsala ein großes studentisches Fest mit Fackelzügen und traditionellen Gesängen."]
    }
  },
    descriptionAdvanced: {
      de: "Uppsala ist eine historische Stadt nördlich von Stockholm, berühmt für ihre renommierte Universität, die älteste in Skandinavien. Die Stadt wird vom prächtigen Dom zu Uppsala, der größten Kirche der nordischen Länder, und dem historischen Schloss Uppsala dominiert. Uppsala hat eine reiche akademische und religiöse Geschichte und ist nach wie vor ein lebendiges Zentrum für Bildung, Forschung und Kultur mit vielen Museen und botanischen Gärten. Geschichte K6.",
      hu: "",
      ro: "Uppsala, unul dintre cele mai vechi orașe din Suedia, este un centru academic și ecleziastic de prestigiu. Aici se află Universitatea din Uppsala, fondată în 1477, cea mai veche instituție de învățământ superior din Scandinavia, și impunătoarea Catedrală din Uppsala, cea mai mare din țările nordice. Orașul este traversat de râul Fyris și este plin de situri istorice, inclusiv Castelul Uppsala, care oferă o priveliște panoramică. Uppsala a fost și casa faimosului botanist Carl Linnaeus, ale cărui grădini pot fi vizitate și astăzi. Este un oraș plin de viață, cu o atmosferă vibrantă datorită numeroșilor studenți. Istorie K6.",
      en: "Uppsala is a historic city north of Stockholm, famous for its prestigious university, the oldest in Scandinavia. The city is dominated by the magnificent Uppsala Cathedral, the largest church in the Nordic countries, and the historic Uppsala Castle. With a profound academic and religious history, Uppsala remains a vibrant center for education, research, and culture, offering numerous museums and impressive botanical gardens. History K6."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Universität Uppsala wurde bereits 1477 gegründet und ist damit die älteste Universität in den skandinavischen Ländern.", "Carl von Linné, der Begründer der modernen Taxonomie, arbeitete in Uppsala; sein ehemaliger Wohnsitz ist heute ein botanisches Museum.", "Der Dom zu Uppsala ist das höchste Kirchengebäude in den nordischen Ländern und beherbergt die Gräber vieler schwedischer Könige.", "Die Universitätsbibliothek 'Carolina Rediviva' beherbergt den 'Codex Argenteus', eine berühmte gotische Silberbibel aus dem 6. Jahrhundert."],
      hu: [],
      ro: ["Catedrala din Uppsala are turnuri de 118,7 metri, fiind cea mai înaltă biserică din Scandinavia.","Biblioteca Universității din Uppsala, Carolina Rediviva, deține prețiosul Codex Argenteus (Biblia de Argint) din secolul al VI-lea.","Gamla Uppsala (Vechea Uppsala), situată la nord de oraș, este un sit arheologic major cu movile funerare regale datând din secolele V și VI.","Noaptea de Walpurgis (Valborg), pe 30 aprilie, este sărbătorită cu entuziasm de studenți, cu evenimente publice și focuri de tabără.","Grădina Botanică Linnaeus este cea mai veche grădină botanică din Suedia.","Uppsala este un centru important pentru industria biotehnologiei în Suedia.","Personajul de desene animate Pelle Svanslös (Pelle Fără Coadă) este originar din Uppsala."],
      en: [
        "Uppsala University was founded in 1477, making it the oldest university in the Scandinavian countries.",
        "Carl Linnaeus, the father of modern taxonomy, worked in Uppsala; his former residence is now a botanical museum.",
        "Uppsala Cathedral is the tallest church building in the Nordic countries and houses the tombs of many Swedish kings.",
        "The 'Carolina Rediviva' university library holds the 'Codex Argenteus', a famous 6th-century Gothic silver bible."
      ]
    },
    image: "/geo-images/sweden/uppsala.webp",
  },
  {
    id: "reg-lapland",
    type: "region",
    parent: "sweden",
    coords: [19.0000, 67.0000],
    name: { de: "Lappland", hu: "Lappföld", ro: "Laponia", en: "Lapland" },
    description: {
      en: "Swedish Lapland is a vast wilderness area in the far north of the country, characterized by Arctic landscapes, mountains, and rivers. It is the land of the Midnight Sun in summer and the Northern Lights in winter. The region is home to the indigenous Sámi people and offers unique experiences such as dog sledding, reindeer herding, and staying in the world-famous Ice Hotel in Jukkasjärvi. Lapland is a paradise for nature lovers and adventurers.",
      de: "Schwedisch-Lappland ist ein riesiges Wildnisgebiet im hohen Norden des Landes, geprägt von arktischen Landschaften, Bergen und Flüssen. Es ist das Land der Mitternachtssonne im Sommer und der Polarlichter im Winter. Die Region ist die Heimat des indigenen Volkes der Samen und bietet einzigartige Erlebnisse wie Hundeschlittenfahrten, Rentierzucht und Übernachtungen im weltberühmten Eishotel in Jukkasjärvi. Lappland ist ein Paradies für Naturliebhaber und Abenteurer.",
      hu: "A svéd Lappföld egy hatalmas vadon az ország távoli északi részén, amelyet sarkvidéki tájak, hegyek és folyók jellemeznek. Ez az éjféli nap földje nyáron és az északi fényé télen. A régió az őshonos számi nép otthona, és olyan egyedülálló élményeket kínál, mint a kutyaszánozás, a rénszarvaspásztorkodás és a jukkasjärvi világhírű jéghotelben való tartózkodás. Lappföld a természetbarátok és a kalandvágyók paradiseoma.",
      ro: "Laponia suedeză este o zonă vastă de sălbăticie în nordul îndepărtat al țării, caracterizată prin peisaje arctice, munți și râuri. Este țara Soarelui de la Miezul Noptții vara și a Aurorei Boreale iarna. Regiunea găzduiește poporul indigen Sámi și oferă experiențe unice, cum ar fi saniile trase de câini, păstoritul renilor și cazarea în faimosul Hotel de Gheață din Jukkasjärvi. Laponia este un paradis pentru iubitorii de natură și aventurieri."
    ,
    descriptionAdvanced: {
      hu: "Svéd Lappföld egy hatalmas vadon az ország északi részén, amelyet sarkvidéki tájak, fenséges hegyek és kristálytiszta folyók jellemeznek. Ez az éjféli nap földje nyáron és az északi fényé a téli éjszakákon. A régió az őshonos számi nép otthona, akik évezredek óta hagyományos rénszarvastartással foglalkoznak. Lappföld olyan egyedülálló élményeket kínál, mint a kutyaszánozás, a rénszarvas-pásztorkodás vagy a Jukkasjärvi Jéghotelben való tartózkodás. A természet és a kaland szerelmeseinek igazi paradicsoma. Erdkunde K8."
    },
    factsAdvanced: {
      hu: ["Lappföld Svédország területének körülbelül 25%-át teszi ki, ugyanakkor rendkívül ritkán lakott.", "A számi nép rénszarvastartása mélyen beépült Lappföld kultúrájába, és évezredes hagyományokat őriz.", "A Torne-folyó adja a jeget a faimos Jég Hotel számára, amelynek szobáit minden évben nemzetközi művészek tervezik újra.", "A régió híres az „éjféli napról”, amikor a nap a nyári hónapokban nem bukik le a horizont alá.", "A régió változatos arktikus állatvilágnak ad otthont, beleértve az elanokat, rénszarvasokat és wolverinokat."]
    }
  },
    descriptionAdvanced: {
      de: "Schwedisch-Lappland ist ein riesiges Wildnisgebiet im hohen Norden des Landes, geprägt von arktischen Landschaften, Bergen und Flüssen. Es ist das Land der Mitternachtssonne im Sommer und der Polarlichter im Winter. Die Region ist die Heimat des indigenen Volkes der Samen und bietet einzigartige Erlebnisse wie Hundeschlittenfahrten, Rentierzucht und Übernachtungen im weltberühmten Eishotel in Jukkasjärvi. Lappland ist ein Paradies für Naturliebhaber und Abenteurer. Erdkunde K8.",
      hu: "",
      ro: "Laponia suedeză este o vastă zonă de sălbăticie în nordul extrem al țării, definit prin peisaje arctice impresionante, munți maiestuoși și râuri cristaline. Este tărâmul Soarelui de la Miezul Nopții pe timpul verii și al Aurorei Boreale în nopțile de iarnă. Regiunea este patria poporului indigen Sámi, oferind experiențe unice precum saniile trase de câini, păstoritul renilor și sejururi în faimosul Hotel de Gheață din Jukkasjärvi. Este un adevărat paradis pentru iubitorii de natură și aventurieri. Erdkunde K8.",
      en: "Swedish Lapland is a vast wilderness area in the far north of the country, defined by stunning Arctic landscapes, majestic mountains, and crystal-clear rivers. It is the realm of the Midnight Sun in summer and the Northern Lights in winter nights. The region is the homeland of the indigenous Sámi people, offering unique experiences like dog sledding, reindeer herding, and stays in the world-famous Icehotel in Jukkasjärvi. It is a true paradise for nature lovers and adventurers alike. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Lappland umfasst etwa 25 % der schwedischen Landesfläche, ist aber sehr dünn besiedelt.", "Das indigene Volk der Samen bewahrt in Lappland bis heute traditionelle Lebensweisen, insbesondere durch die Rentierzucht.", "Der Torne-Fluss liefert das Eis für das Eishotel, dessen Zimmer jedes Jahr neu von internationalen Künstlern entworfen werden.", "Die Region ist berühmt für die 'Mitternachtssonne', bei der die Sonne im Sommer den ganzen Tag über dem Horizont bleibt."],
      hu: [],
      ro: ["Laponia acoperă aproximativ 25% din suprafața Suediei, fiind însă foarte puțin populată.", "Poporul indigen Sámi își păstrează până astăzi stilul de viață tradițional, în special prin creșterea renilor.", "Râul Torne furnizează gheața necesară pentru faimosul Hotel de Gheață, ale cărui camere sunt create anual de artiști internaționali.", "Regiunea este celebră pentru „Soarele de la Miezul Noptții”, când soarele rămâne deasupra orizontului pe tot parcursul zilei în timpul verii."],
      en: [
        "Lapland covers approximately 25% of Sweden's land area, yet it is very sparsely populated.",
        "The indigenous Sámi people maintain traditional lifestyles in Lapland to this day, particularly through reindeer herding.",
        "The Torne River provides the ice for the famous Icehotel, whose rooms are redesigned annually by international artists.",
        "The region is famous for the 'Midnight Sun', where the sun remains above the horizon throughout the day during summer."
      ]
    },
    image: "/geo-images/sweden/lapland.webp",
  }
];

export const swedenCities: POI[] = [
  {
    id: "city-kiruna",
    type: "city",
    parent: "sweden",
    coords: [20.2234, 67.8558],
    name: { de: "Kiruna", hu: "Kiruna", ro: "Kiruna", en: "Kiruna" },
    description: {
      de: "Kiruna ist die nördlichste Stadt Schwedens, bekannt für das weltgrößte Eisenerzbergwerk, das Eishotel und als Tor zum arktischen Lappland.",
      hu: "Kiruna Svédország legészakibb városa, amely a világ legnagyobb vasércbányájáról, a Jéghotelről és az arktikus Lappföld kapujaként ismert.",
      ro: "Kiruna este cel mai nordic oraș din Suedia, cunoscut pentru cea mai mare mină de minereu de fier din lume, Hotelul de Gheață și ca poartă către Laponia arctică.",
      en: "Kiruna is the northernmost city in Sweden, known for the world's largest iron ore mine, the Icehotel, and as a gateway to Arctic Lapland."
    ,
    descriptionAdvanced: {
      de: "Kiruna ist die nördlichste Stadt Schwedens und liegt in der Provinz Lappland. Sie ist bekannt für das weltweit größte unterirdische Eisenerzbergwerk sowie für ihre Nähe zum Abisko-Nationalpark und zum Eishotel. Die Stadt wird derzeit im Rahmen eines massiven Umsiedlungsprojekts verlegt, um zu verhindern, dass sie vom expandierenden Bergwerk verschluckt wird. Erdkunde K8."
    },
    factsAdvanced: {
      de: ["Aufgrund des Bergbaus muss die gesamte Stadt Kiruna um etwa 3 Kilometer verlegt werden, ein weltweit beispielloses Bauvorhaben.", "Die Erzgrube in Kiruna produziert jährlich Millionen Tonnen Eisenerz und ist essenziell für die europäische Stahlindustrie.", "Die Kiruna-Kirche, ein Meisterwerk der Holzarchitektur, wurde beim Umzug der Stadt originalgetreu versetzt.", "Kiruna liegt nördlich des Polarkreises, was spektakuläre Polarlichter im Winter und die Mitternachtssonne im Sommer ermöglicht.", "Die Stadt ist der wichtigste Stützpunkt für die schwedische Raumfahrtforschung im Esrange Space Center."]
    }
  },
    descriptionAdvanced: {
      de: "Kiruna ist die nördlichste Stadt Schwedens und liegt in der Provinz Lappland. Sie ist bekannt für das weltweit größte unterirdische Eisenerzbergwerk sowie für ihre Nähe zum Abisko-Nationalpark und zum Eishotel. Die Stadt wird derzeit im Rahmen eines massiven Umsiedlungsprojekts verlegt, um zu verhindern, dass sie vom expandierenden Bergwerk verschluckt wird. Erdkunde K8.",
      hu: "",
      ro: "Kiruna este cel mai nordic oraș al Suediei, situat în provincia Laponia. Este faimos pentru cea mai mare mină subterană de minereu de fier din lume, precum și pentru proximitatea față de Parcul Național Abisko și faimosul Hotel de Gheață. În prezent, orașul trece printr-un proiect masiv de relocare, o inițiativă fără precedent pentru a preveni prăbușirea acestuia din cauza expansiunii activității miniere. Erdkunde K8.",
      en: "Kiruna is Sweden's northernmost city, located in the province of Lapland. It is famous for the world's largest underground iron ore mine, as well as its proximity to Abisko National Park and the famous Icehotel. Currently, the city is undergoing a massive relocation project—an unprecedented initiative to prevent its collapse due to the expansion of mining operations. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Aufgrund des Bergbaus muss die gesamte Stadt Kiruna um etwa 3 Kilometer verlegt werden, ein weltweit beispielloses Bauvorhaben.", "Die Erzgrube in Kiruna produziert jährlich Millionen Tonnen Eisenerz und ist essenziell für die europäische Stahlindustrie.", "Die Kiruna-Kirche, ein Meisterwerk der Holzarchitektur, wurde beim Umzug der Stadt originalgetreu versetzt."],
      hu: [],
      ro: ["Din cauza exploatării miniere, întregul oraș Kiruna este mutat la aproximativ 3 kilometri distanță, un proiect de construcție fără precedent.", "Mina de fier din Kiruna produce milioane de tone anual, fiind esențială pentru industria siderurgică europeană.", "Biserica din Kiruna, o capodoperă a arhitecturii din lemn, a fost mutată intactă în noul amplasament al orașului."],
      en: [
        "Due to mining operations, the entire city of Kiruna is being moved approximately 3 kilometers, an unprecedented construction project.",
        "The iron mine in Kiruna produces millions of tons annually, making it essential to the European steel industry.",
        "The Kiruna Church, a masterpiece of wooden architecture, was moved intact to the new city site."
      ]
    },
    image: "/geo-images/sweden/kiruna.webp",
  }
  ,
  {
    id: "city-umea",
    type: "city",
    parent: "sweden",
    coords: [20.2630, 63.8258],
    name: { de: "Umeå", hu: "Umeå", ro: "Umeå", en: "Umeå" },
    description: {
      de: "Umeå ist eine dynamische Universitätsstadt in Nordschweden, bekannt für ihre lebendige Kulturszene, ihre Birkenalleen und als Zentrum für Innovation.",
      hu: "Umeå egy dinamikus egyetemi város Észak-Svédországban, amely vibráló kulturális életéről, nyírfasorairól és innovációs központjáról ismert.",
      ro: "Umeå este un oraș universitar dinamic din nordul Suediei, cunoscut pentru scena sa culturală vibrantă, aleile sale de mesteacăn și ca centru de inovare.",
      en: "Umeå is a dynamic university city in northern Sweden, known for its vibrant cultural scene, birch-lined avenues, and as a hub for innovation."
    ,
    descriptionAdvanced: {
      de: "Umeå ist eine schnell wachsende Universitätsstadt am Umeälven in Nordschweden. Sie ist bekannt für ihre kreative Energie, ihre starken öffentlichen Dienste und den leichten Zugang zu Wäldern und Küste in Västerbotten. Die Stadt erhielt 2014 als Europäische Kulturhauptstadt internationale Aufmerksamkeit. Umeå verbindet modernes Stadtleben mit einer klaren nordschwedischen Identität. Sachkunde K7."
    },
    factsAdvanced: {
      de: ["Umeå trägt den Beinamen 'Stadt der Birken', da nach einem Stadtbrand im Jahr 1888 tausende Birken gepflanzt wurden, um Feuer zu verhindern.", "Im Jahr 2014 wurde Umeå gemeinsam mit Riga zur Europäischen Kulturhauptstadt ernannt.", "Die Universität Umeå ist ein bedeutendes Forschungszentrum und beherbergt eine der größten Medizinfakultäten des Landes.", "Die Stadt ist bekannt für ihre lebendige Musik- und Kunstszene, die tief in der nordschwedischen Kultur verwurzelt ist.", "Umeå ist ein wichtiges Zentrum für Filmproduktion im Norden und beheimatet ein jährliches Filmfestival."]
    }
  },
    descriptionAdvanced: {
      de: "Umeå ist eine schnell wachsende Universitätsstadt am Umeälven in Nordschweden. Sie ist bekannt für ihre kreative Energie, ihre starken öffentlichen Dienste und den leichten Zugang zu Wäldern und Küste in Västerbotten. Die Stadt erhielt 2014 als Europäische Kulturhauptstadt internationale Aufmerksamkeit. Umeå verbindet modernes Stadtleben mit einer klaren nordschwedischen Identität. Sachkunde K7.",
      hu: "",
      ro: "Umeå este un oraș universitar cu o creștere rapidă, situat pe malul râului Umeälven în nordul Suediei. Este recunoscut pentru energia sa creativă, serviciile publice de înaltă calitate și accesul facil către pădurile și coasta provinciei Västerbotten. În 2014, orașul a atras atenția internațională ca Capitală Europeană a Culturii. Umeå îmbină perfect viața urbană modernă cu o identitate nordică autentică și distinctivă. Sachkunde K7.",
      en: "Umeå is a rapidly growing university city located on the Ume River in northern Sweden. It is recognized for its creative energy, high-quality public services, and easy access to the forests and coast of Västerbotten province. In 2014, the city gained international attention as a European Capital of Culture. Umeå perfectly blends modern urban life with a distinct and authentic northern Swedish identity. Sachkunde K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Umeå trägt den Beinamen 'Stadt der Birken', da nach einem Stadtbrand im Jahr 1888 tausende Birken gepflanzt wurden, um Feuer zu verhindern.", "Im Jahr 2014 wurde Umeå gemeinsam mit Riga zur Europäischen Kulturhauptstadt ernannt.", "Die Universität Umeå ist ein bedeutendes Forschungszentrum und beherbergt eine der größten Medizinfakultäten des Landes."],
      hu: [],
      ro: ["Umeå este poreclit „Orașul Mestecenilor”, deoarece după un incendiu devastator din 1888 au fost plantați mii de mesteceni pentru a preveni extinderea focului.", "În 2014, Umeå a fost desemnată Capitală Europeană a Culturii, alături de Riga.", "Universitatea din Umeå este un important centru de cercetare și găzduiește una dintre cele mai mari facultăți de medicină din țară."],
      en: [
        "Umeå is nicknamed the 'City of Birches' because thousands of birch trees were planted after a devastating fire in 1888 to prevent the spread of fire.",
        "In 2014, Umeå was designated a European Capital of Culture, alongside Riga.",
        "Umeå University is a major research center and houses one of the country's largest medical schools."
      ]
    },
    image: "/geo-images/sweden/umea.webp",
  },
  {
    id: "city-lund",
    type: "city",
    parent: "sweden",
    coords: [13.1910, 55.7047],
    name: { de: "Lund", hu: "Lund", ro: "Lund", en: "Lund" },
    description: {
      de: "Lund ist eine der ältesten Städte Schwedens, eine bedeutende Universitätsstadt im Süden, bekannt für ihren prächtigen romanischen Dom und ihre akademische Tradition.",
      hu: "Lund Svédország egyik legrégebbi városa, egy jelentős egyetemi város délen, amely pompás román stílusú székesegyházáról és akadémiai hagyományairól ismert.",
      ro: "Lund este unul dintre cele mai vechi orașe din Suedia, un oraș universitar important în sud, cunoscut pentru catedrala sa romanică magnifică și tradiția sa academică.",
      en: "Lund is one of the oldest cities in Sweden, a major university city in the south known for its magnificent Romanesque cathedral and academic tradition."
    ,
    descriptionAdvanced: {
      de: "Lund ist eine der ältesten und intellektuellsten Städte Schwedens, geprägt von Dom und Universität. Sie liegt im südlichen Schonen und zieht das ganze Jahr über Studierende, Forscher und Besucher an. Das kompakte Zentrum lässt sich leicht zu Fuß erkunden und ist voller historischer Straßen, Cafés und fahrradfreundlicher Wege. Lund ist auch ein wichtiger Standort für Wirtschaft und Innovation in der größeren Öresund-Region. Geschichte K6."
    },
    factsAdvanced: {
      de: ["Die Universität Lund gehört regelmäßig zu den 100 besten Universitäten der Welt und ist ein zentraler Akteur in der Öresund-Region.", "Der Dom von Lund wurde im 12. Jahrhundert errichtet und gilt als einer der wichtigsten Bauwerke der Romanik in Skandinavien.", "Mit einem hohen Anteil an Studierenden an der Gesamtbevölkerung bietet Lund eine lebendige, junge Atmosphäre und eine sehr hohe Dichte an Cafés.", "Lund ist ein Zentrum für High-Tech-Forschung, insbesondere in den Bereichen Biowissenschaften und Nanotechnologie.", "Der Botanische Garten in Lund umfasst über 7.000 Arten und ist einer der ältesten und vielfältigsten in Schweden."]
    }
  },
    descriptionAdvanced: {
      de: "Lund ist eine der ältesten und intellektuellsten Städte Schwedens, geprägt von Dom und Universität. Sie liegt im südlichen Schonen und zieht das ganze Jahr über Studierende, Forscher und Besucher an. Das kompakte Zentrum lässt sich leicht zu Fuß erkunden und ist voller historischer Straßen, Cafés und fahrradfreundlicher Wege. Lund ist auch ein wichtiger Standort für Wirtschaft und Innovation in der größeren Öresund-Region. Geschichte K6.",
      hu: "",
      ro: "Lund este unul dintre cele mai vechi și mai intelectuale orașe din Suedia, definit prin catedrala sa și universitatea prestigioasă. Situat în sudul provinciei Skåne, orașul atrage studenți, cercetători și vizitatori pe tot parcursul anului. Centrul său compact este ușor de explorat la pas, fiind plin de străzi istorice, cafenele primitoare și alei prietenoase pentru bicicliști. Lund este, de asemenea, un centru crucial pentru economie și inovație în regiunea mai largă Øresund. Istorie K6.",
      en: "Lund is one of Sweden's oldest and most intellectual cities, defined by its cathedral and prestigious university. Located in southern Skåne province, the city attracts students, researchers, and visitors year-round. Its compact center is easy to explore on foot, filled with historic streets, welcoming cafes, and bicycle-friendly paths. Lund is also a crucial hub for economy and innovation in the wider Øresund region. History K6."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Universität Lund gehört regelmäßig zu den 100 besten Universitäten der Welt und ist ein zentraler Akteur in der Öresund-Region.", "Der Dom von Lund wurde im 12. Jahrhundert errichtet und gilt als einer der wichtigsten Bauwerke der Romanik in Skandinavien.", "Mit einem hohen Anteil an Studierenden an der Gesamtbevölkerung bietet Lund eine lebendige, junge Atmosphäre und eine sehr hohe Dichte an Cafés."],
      hu: [],
      ro: ["Universitatea din Lund este clasată constant printre cele mai bune 100 de universități din lume, fiind un actor central în regiunea Øresund.", "Catedrala din Lund, construită în secolul al XII-lea, este considerată una dintre cele mai importante construcții romanice din Scandinavia.", "Datorită proporției mari de studenți din populația totală, Lund oferă o atmosferă vibrantă, tânără și o densitate ridicată de cafenele."],
      en: [
        "Lund University consistently ranks among the top 100 universities in the world and is a central player in the Øresund region.",
        "Lund Cathedral, built in the 12th century, is considered one of the most important Romanesque structures in Scandinavia.",
        "Due to the high proportion of students in its total population, Lund offers a vibrant, youthful atmosphere and a high density of cafes."
      ]
    },
    image: "/geo-images/sweden/lund.webp",
  },
  {
    id: "city-linkoping",
    type: "city",
    parent: "sweden",
    coords: [15.6214, 58.4108],
    name: { de: "Linköping", hu: "Linköping", ro: "Linköping", en: "Linköping" },
    description: {
      de: "Linköping ist eine bedeutende Stadt in Zentralschweden, bekannt für ihre Luftfahrtindustrie, die beeindruckende Kathedrale und ihre renommierte Universität.",
      hu: "Linköping egy jelentős város Közép-Svédországban, amely repülőgépiparáról, lenyűgöző székesegyházáról és neves egyeteméről ismert.",
      ro: "Linköping este un oraș important din centrul Suediei, cunoscut pentru industria sa aeronautică, catedrala impresionantă și universitatea sa renumită.",
      en: "Linköping is a major city in central Sweden, known for its aviation industry, impressive cathedral, and renowned university."
    ,
    descriptionAdvanced: {
      de: "Linköping ist eine wichtige Stadt in Ost-Zentralschweden und bekannt für Luftfahrt, Logistik und Technologie. Sie verbindet ein starkes Wirtschaftsprofil mit einer historischen Innenstadt und einer lebendigen Studentenatmosphäre. In der Stadt befinden sich das bekannte Schwedische Luftwaffenmuseum und der große Campus der Universität Linköping. Besucher nutzen Linköping als Tor nach Östergötland und in die klassische schwedische Landschaft. Erdkunde K7."
    },
    factsAdvanced: {
      de: ["Die Stadt ist das Zentrum des schwedischen Luftfahrt-Clusters, maßgeblich geprägt durch Unternehmen wie Saab, das hier Kampfflugzeuge entwickelt.", "Das Schwedische Luftwaffenmuseum zeigt eine umfangreiche Sammlung von Flugzeugen aus verschiedenen Epochen der schwedischen Geschichte.", "Die Universität Linköping wurde 1975 gegründet und ist heute eng mit der lokalen High-Tech-Industrie verzahnt.", "Der Dom zu Linköping ist eine der am besten erhaltenen mittelalterlichen Kathedralen Schwedens und markantes Wahrzeichen der Stadt.", "Linköping ist für seine Fahrradfreundlichkeit bekannt, mit einem der besten Radwegenetze in Schweden."]
    }
  },
    descriptionAdvanced: {
      de: "Linköping ist eine wichtige Stadt in Ost-Zentralschweden und bekannt für Luftfahrt, Logistik und Technologie. Sie verbindet ein starkes Wirtschaftsprofil mit einer historischen Innenstadt und einer lebendigen Studentenatmosphäre. In der Stadt befinden sich das bekannte Schwedische Luftwaffenmuseum und der große Campus der Universität Linköping. Besucher nutzen Linköping als Tor nach Östergötland und in die klassische schwedische Landschaft. Erdkunde K7.",
      hu: "",
      ro: "Linköping este un oraș important din estul Suediei centrale, renumit pentru aviație, logistică și tehnologie. Acesta combină un profil economic solid cu un centru istoric fermecător și o atmosferă universitară vibrantă. În oraș se află celebrul Muzeu al Forțelor Aeriene Suedeze și campusul principal al Universității din Linköping. Vizitatorii folosesc Linköping ca poartă către provincia Östergötland și peisajele suedeze clasice. Erdkunde K7.",
      en: "Linköping is an important city in eastern central Sweden, renowned for aviation, logistics, and technology. It combines a strong economic profile with a charming historic downtown and a vibrant university atmosphere. The city houses the famous Swedish Air Force Museum and the main campus of Linköping University. Visitors use Linköping as a gateway to the Östergötland province and classic Swedish landscapes. Geography K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Stadt ist das Zentrum des schwedischen Luftfahrt-Clusters, maßgeblich geprägt durch Unternehmen wie Saab, das hier Kampfflugzeuge entwickelt.", "Das Schwedische Luftwaffenmuseum zeigt eine umfangreiche Sammlung von Flugzeugen aus verschiedenen Epochen der schwedischen Geschichte.", "Die Universität Linköping wurde 1975 gegründet und ist heute eng mit der lokalen High-Tech-Industrie verzahnt."],
      hu: [],
      ro: ["Orașul este centrul clusterului suedez de aviație, dominat de compania Saab, care dezvoltă aici avioane de luptă.", "Muzeul Forțelor Aeriene Suedeze găzduiește o colecție impresionantă de avioane din diferite epoci ale istoriei suedeze.", "Universitatea din Linköping, fondată în 1975, este strâns legată de industria locală de înaltă tehnologie."],
      en: [
        "The city is the center of the Swedish aviation cluster, largely shaped by companies like Saab, which develops fighter jets here.",
        "The Swedish Air Force Museum displays an extensive collection of aircraft from different eras of Swedish history.",
        "Linköping University, founded in 1975, is closely integrated with the local high-tech industry."
      ]
    },
    image: "/geo-images/sweden/linkoping.webp",
  },
  {
    id: "city-vasteras",
    type: "city",
    parent: "sweden",
    coords: [16.5448, 59.6114],
    name: { de: "Västerås", hu: "Västerås", ro: "Västerås", en: "Västerås" },
    description: {
      de: "Västerås ist eine historische Stadt am Mälarensee, bekannt für ihr industrielles Erbe, den modernen Yachthafen und ihre Nähe zu Stockholm.",
      hu: "Västerås egy történelmi város a Mälaren-tó partján, amely ipari örökségéről, modern jachtkikötőjéről és Stockholm közelségéről ismert.",
      ro: "Västerås este un oraș istoric pe malul lacului Mälaren, cunoscut pentru moștenirea sa industrială, portul de agrement modern și proximitatea de Stockholm.",
      en: "Västerås is a historic city on Lake Mälaren, known for its industrial heritage, modern marina, and proximity to Stockholm."
    ,
    descriptionAdvanced: {
      de: "Västerås ist eine historische Stadt am Mälarensee mit einer starken industriellen Basis und moderner Uferidentität. Sie wuchs durch Handel, Schifffahrt und später durch fortschrittlichen Maschinenbau, was die lokale Wirtschaft bis heute prägt. Die Stadt ist von Stockholm aus leicht erreichbar und eignet sich gut als regionales Zentrum für Geschäfts- und Familienreisen. Västerås bietet außerdem Erholung am See, alte Kirchen und eine kompakte Innenstadt. Erdkunde K7."
    },
    factsAdvanced: {
      de: ["Die Wurzeln von Västerås reichen bis in die Wikingerzeit zurück, was es zu einer der historisch bedeutendsten Städte Schwedens macht.", "Västerås gilt als 'Mälaren-Stadt' und nutzt den See als zentralen Erholungs- und Wirtschaftsfaktor.", "Der Dom von Västerås stammt aus dem 13. Jahrhundert und ist ein herausragendes Beispiel mittelalterlicher Kirchenbaukunst.", "Das Kokpunkten Actionbad in Västerås ist ein innovatives Erlebnisbad, das in einem ehemaligen Kraftwerksgebäude untergebracht ist.", "Västerås ist ein wichtiger Standort für erneuerbare Energietechnologien und intelligente Energienetze."]
    }
  },
    descriptionAdvanced: {
      de: "Västerås ist eine historische Stadt am Mälarensee mit einer starken industriellen Basis und moderner Uferidentität. Sie wuchs durch Handel, Schifffahrt und später durch fortschrittlichen Maschinenbau, was die lokale Wirtschaft bis heute prägt. Die Stadt ist von Stockholm aus leicht erreichbar und eignet sich gut als regionales Zentrum für Geschäfts- und Familienreisen. Västerås bietet außerdem Erholung am See, alte Kirchen und eine kompakte Innenstadt. Erdkunde K7.",
      hu: "",
      ro: "Västerås este un oraș istoric situat pe malul lacului Mälaren, având o bază industrială solidă și o identitate modernă. S-a dezvoltat prin comerț, transport naval și, ulterior, prin inginerie avansată, domenii care modelează economia locală și astăzi. Orașul este ușor accesibil din Stockholm, fiind un centru regional excelent pentru călătoriile de afaceri și vacanțe în familie. Västerås oferă relaxare lângă lac, biserici vechi și un centru urban compact. Erdkunde K7.",
      en: "Västerås is a historic city on Lake Mälaren with a strong industrial base and a modern waterfront identity. It grew through trade, shipping, and later through advanced mechanical engineering, fields that continue to shape the local economy today. The city is easily accessible from Stockholm, making it an excellent regional center for business travel and family vacations. Västerås offers lakeside relaxation, old churches, and a compact urban center. Geography K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Wurzeln von Västerås reichen bis in die Wikingerzeit zurück, was es zu einer der historisch bedeutendsten Städte Schwedens macht.", "Västerås gilt als 'Mälaren-Stadt' und nutzt den See als zentralen Erholungs- und Wirtschaftsfaktor.", "Der Dom von Västerås stammt aus dem 13. Jahrhundert und ist ein herausragendes Beispiel mittelalterlicher Kirchenbaukunst."],
      hu: [],
      ro: ["Rădăcinile orașului Västerås datează din epoca vikingilor, fiind unul dintre cele mai importante orașe din punct de vedere istoric în Suedia.", "Västerås este cunoscut drept un „oraș al lacului Mälaren”, folosind lacul ca factor economic și de recreere central.", "Catedrala din Västerås datează din secolul al XIII-lea, fiind un exemplu remarcabil de arhitectură medievală."],
      en: [
        "Västerås' roots date back to the Viking Age, making it one of the most historically significant cities in Sweden.",
        "Västerås is known as a 'Mälaren city', using the lake as a central recreational and economic factor.",
        "Västerås Cathedral dates back to the 13th century and is an outstanding example of medieval ecclesiastical architecture."
      ]
    },
    image: "/geo-images/sweden/vasteras.webp",
  },
  {
    id: "city-orebro",
    type: "city",
    parent: "sweden",
    coords: [15.2066, 59.2753],
    name: { de: "Örebro", hu: "Örebro", ro: "Örebro", en: "Örebro" },
    description: {
      de: "Örebro ist eine charmante Stadt in Zentralschweden, bekannt für ihr majestätisches mittelalterliches Schloss, ihre lebendige Universität und ihre Rolle als wichtiger Verkehrsknotenpunkt.",
      hu: "Örebro egy bájos város Közép-Svédországban, amely fenséges középkori váráról, vibráló egyeteméről és fontos közlekedési csomópontként betöltött szerepéről ismert.",
      ro: "Örebro este un oraș fermecător din centrul Suediei, cunoscut pentru castelul său medieval maiestuos, universitatea sa vibrantă și rolul său de nod important de transport.",
      en: "Örebro is a charming city in central Sweden, known for its majestic medieval castle, vibrant university, and role as a major transport hub."
    ,
    descriptionAdvanced: {
      de: "Örebro ist eine zentral schwedische Stadt, die von einer Burg, einer großen Universität und einer lebendigen Dienstleistungswirtschaft geprägt ist. Ihre Lage macht sie zu einem wichtigen Knotenpunkt für Bahn- und Straßenreisen im ganzen Land. Das Stadtzentrum ist fußläufig und verbindet Einkauf, Restaurants und Flusslandschaft. Örebro ist außerdem für die Mischung aus Geschichte, Bildung und praktischen Regionalfunktionen bekannt. Sachkunde K5."
    },
    factsAdvanced: {
      de: ["Das Schloss Örebro wurde im 14. Jahrhundert als Verteidigungsfestung erbaut und diente später als königliche Residenz.", "Örebro beherbergt eine Universität mit rund 15.000 Studierenden, die ein wichtiger Motor für Innovation in der Region ist.", "Der Fluss Svartån durchquert das Stadtzentrum und bietet einen pittoresken Anblick, besonders im Sommer.", "Das Open-Air-Museum Wadköping zeigt historische Gebäude aus der Stadtgeschichte und bewahrt so das kulturelle Erbe von Örebro.", "Örebro ist ein bedeutendes Zentrum für die schwedische Lebensmittelindustrie und Logistik."]
    }
  },
    descriptionAdvanced: {
      de: "Örebro ist eine zentral schwedische Stadt, die von einer Burg, einer großen Universität und einer lebendigen Dienstleistungswirtschaft geprägt ist. Ihre Lage macht sie zu einem wichtigen Knotenpunkt für Bahn- und Straßenreisen im ganzen Land. Das Stadtzentrum ist fußläufig und verbindet Einkauf, Restaurants und Flusslandschaft. Örebro ist außerdem für die Mischung aus Geschichte, Bildung und praktischen Regionalfunktionen bekannt. Sachkunde K5.",
      hu: "",
      ro: "Örebro este un oraș din centrul Suediei, definit prin castelul său medieval, o universitate importantă și o economie de servicii vibrantă. Locația sa îl face un nod esențial pentru călătoriile pe calea ferată și rutiere din întreaga țară. Centrul orașului este ușor de parcurs la pas, combinând cumpărăturile, restaurantele și peisajul râului. Örebro este recunoscut, de asemenea, pentru combinația sa reușită de istorie, educație și funcții regionale practice. Sachkunde K5.",
      en: "Örebro is a central Swedish city defined by its medieval castle, major university, and vibrant service economy. Its location makes it an essential hub for rail and road travel across the country. The city center is easily walkable, combining shopping, restaurants, and river landscapes. Örebro is also recognized for its successful blend of history, education, and practical regional functions. Sachkunde K5."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Das Schloss Örebro wurde im 14. Jahrhundert als Verteidigungsfestung erbaut und diente später als königliche Residenz.", "Örebro beherbergt eine Universität mit rund 15.000 Studierenden, die ein wichtiger Motor für Innovation in der Region ist.", "Der Fluss Svartån durchquert das Stadtzentrum und bietet einen pittoresken Anblick, besonders im Sommer."],
      hu: [],
      ro: ["Castelul din Örebro a fost construit în secolul al XIV-lea ca fortăreață defensivă, servind ulterior drept reședință regală.", "Örebro găzduiește o universitate cu aproximativ 15.000 de studenți, un motor important pentru inovație în regiune.", "Râul Svartån traversează centrul orașului, oferind un peisaj pitoresc, în special în timpul verii."],
      en: [
        "Örebro Castle was built in the 14th century as a defensive fortress, later serving as a royal residence.",
        "Örebro hosts a university with about 15,000 students, a major engine for innovation in the region.",
        "The Svartån River runs through the city center, providing a picturesque view, especially in the summer."
      ]
    },
    image: "/geo-images/sweden/orebro.webp",
  },
  {
    id: "city-halmstad",
    type: "city",
    parent: "sweden",
    coords: [12.8578, 56.6745],
    name: { de: "Halmstad", hu: "Halmstad", ro: "Halmstad", en: "Halmstad" },
    description: {
      de: "Halmstad ist eine beliebte Küstenstadt an der schwedischen Westküste, bekannt für ihre wunderschönen Sandstrände, erstklassige Golfplätze und ihre entspannte Urlaubsatmosphäre.",
      hu: "Halmstad egy népszerű tengerparti város Svédország nyugati partján, amely gyönyörű homokos strandjairól, világszínvonalú golfpályáiról és laza nyaralóhangulatáról ismert.",
      ro: "Halmstad este un oraș de coastă popular pe coasta de vest a Suediei, cunoscut pentru plajele sale frumoase de nisip, terenurile de golf de clasă mondială și atmosfera sa relaxată de vacanță.",
      en: "Halmstad is a popular coastal city on Sweden's west coast, known for its beautiful sandy beaches, world-class golf courses, and relaxed holiday atmosphere."
    ,
    descriptionAdvanced: {
      de: "Halmstad ist eine Küstenstadt an der schwedischen Westküste mit langer Geschichte im Handel und im Seetourismus. Sie ist besonders im Sommer beliebt dank Stränden, Golf und entspannter Hafenatmosphäre. Die Stadt dient außerdem als regionales Zentrum für Verwaltung, Einzelhandel und Verkehr in Halland. Halmstad verbindet Altstadtcharakter mit einem starken modernen Urlaubsgefühl. Geografie K6."
    },
    factsAdvanced: {
      de: ["Der Stadtstrand Tylösand gilt als einer der schönsten Sandstrände in ganz Schweden und ist ein beliebtes Ziel für Touristen.", "Halmstad ist bekannt für seine hohe Dichte an exzellenten Golfplätzen, die Besucher aus ganz Europa anziehen.", "Die historische Altstadt hat Teile ihrer Befestigungsanlagen bewahrt und verleiht Halmstad einen ganz besonderen, altmodischen Charme.", "Das Halland-Kunstmuseum zeigt umfangreiche Sammlungen zur regionalen Geschichte und Kunst.", "Halmstad ist für seine lebendige Live-Musik-Szene bekannt, die in den Sommermonaten durch zahlreiche Konzerte am Strand geprägt ist."]
    }
  },
    descriptionAdvanced: {
      de: "Halmstad ist eine Küstenstadt an der schwedischen Westküste mit langer Geschichte im Handel und im Seetourismus. Sie ist besonders im Sommer beliebt dank Stränden, Golf und entspannter Hafenatmosphäre. Die Stadt dient außerdem als regionales Zentrum für Verwaltung, Einzelhandel und Verkehr in Halland. Halmstad verbindet Altstadtcharakter mit einem starken modernen Urlaubsgefühl. Geografie K6.",
      hu: "",
      ro: "Halmstad este un oraș de coastă situat pe coasta de vest a Suediei, cu o lungă istorie în comerț și turism maritim. Este deosebit de popular în timpul verii datorită plajelor sale, facilităților de golf și atmosferei portuare relaxate. Orașul servește, de asemenea, ca centru regional pentru administrație, retail și transport în provincia Halland. Halmstad îmbină caracterul de oraș vechi cu o stare de spirit modernă de vacanță. Geografie K6.",
      en: "Halmstad is a coastal city on Sweden's west coast with a long history in trade and marine tourism. It is particularly popular in the summer thanks to its beaches, golf facilities, and relaxed harbor atmosphere. The city also serves as a regional center for administration, retail, and transportation in the Halland province. Halmstad blends old-town character with a modern holiday state of mind. Geography K6."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Der Stadtstrand Tylösand gilt als einer der schönsten Sandstrände in ganz Schweden und ist ein beliebtes Ziel für Touristen.", "Halmstad ist bekannt für seine hohe Dichte an exzellenten Golfplätzen, die Besucher aus ganz Europa anziehen.", "Die historische Altstadt hat Teile ihrer Befestigungsanlagen bewahrt und verleiht Halmstad einen ganz besonderen, altmodischen Charme."],
      hu: [],
      ro: ["Plaja Tylösand este considerată una dintre cele mai frumoase plaje cu nisip din toată Suedia, fiind o destinație populară pentru turiști.", "Halmstad este renumit pentru densitatea sa ridicată de terenuri de golf excelente, care atrag vizitatori din întreaga Europă.", "Orașul vechi istoric și-a păstrat părți din fortificații, oferind orașului Halmstad un farmec aparte, tradițional."],
      en: [
        "Tylösand city beach is considered one of the most beautiful sandy beaches in all of Sweden and is a popular destination for tourists.",
        "Halmstad is renowned for its high density of excellent golf courses, attracting visitors from across Europe.",
        "The historic old town has preserved parts of its fortifications, giving Halmstad a distinctive, traditional charm."
      ]
    },
    image: "/geo-images/sweden/halmstad.webp",
  },
  {
    id: "city-sundsvall",
    type: "city",
    parent: "sweden",
    coords: [17.3069, 62.3908],
    name: { de: "Sundsvall", hu: "Sundsvall", ro: "Sundsvall", en: "Sundsvall" },
    description: {
      de: "Sundsvall ist eine beeindruckende Küstenstadt in Nordschweden, bekannt für ihre prächtige Steinarchitektur ('Stenstaden'), die nach einem großen Brand im 19. Jahrhundert entstand.",
      hu: "Sundsvall egy lenyűgöző tengerparti város Észak-Svédországban, amely a 19. századi nagy tűzvész után épült pompás kőépítészetéről („Stenstaden”) ismert.",
      ro: "Sundsvall este un oraș de coastă impresionant din nordul Suediei, cunoscut pentru arhitectura sa magnifică din piatră („Stenstaden”), apărută după un mare incendiu în secolul al XIX-lea.",
      en: "Sundsvall is an impressive coastal city in northern Sweden, known for its magnificent stone architecture ('Stenstaden') that emerged after a great fire in the 19th century."
    ,
    descriptionAdvanced: {
      de: "Sundsvall ist eine nördliche Küstenstadt, die für ihre Steinarchitektur und ihr industrielles Erbe bekannt ist. Nach dem Großbrand von 1888 wurde sie in einem monumentalen Stil neu aufgebaut, der das Stadtzentrum bis heute prägt. Heute ist sie eine Mischung aus Regionalverwaltung, Bildung, digitalen Diensten und altem Industriecharakter. Sundsvall ist auch ein praktischer Halt für Reisende zwischen Mittel- und Nordschweden. Geschichte K7."
    },
    factsAdvanced: {
      de: ["Nach dem verheerenden Brand von 1888 wurde das Stadtzentrum massiv aus Stein gebaut, was dem Beinamen 'Stenstaden' (Steinstadt) seinen Ursprung gab.", "Die Architektur von Sundsvall gilt als eines der schönsten Beispiele für städtische Planung im späten 19. Jahrhundert.", "Durch seine Lage am Bottnischen Meerbusen war Sundsvall ein Zentrum der schwedischen Forstindustrie und des Holzexports.", "Der Södra Berget bietet einen beeindruckenden Panoramablick über die Stadt und ist ein beliebtes Ziel für Outdoor-Aktivitäten zu jeder Jahreszeit.", "Sundsvall ist heute ein wachsendes Zentrum für IT-Dienstleistungen und digitale Medien."]
    }
  },
    descriptionAdvanced: {
      de: "Sundsvall ist eine nördliche Küstenstadt, die für ihre Steinarchitektur und ihr industrielles Erbe bekannt ist. Nach dem Großbrand von 1888 wurde sie in einem monumentalen Stil neu aufgebaut, der das Stadtzentrum bis heute prägt. Heute ist sie eine Mischung aus Regionalverwaltung, Bildung, digitalen Diensten und altem Industriecharakter. Sundsvall ist auch ein praktischer Halt für Reisende zwischen Mittel- und Nordschweden. Geschichte K7.",
      hu: "",
      ro: "Sundsvall este un oraș de coastă nordic, faimos pentru arhitectura sa de piatră și moștenirea industrială. După incendiul devastator din 1888, a fost reconstruit într-un stil monumental care definește și astăzi centrul orașului. Astăzi, acesta reprezintă un amestec de administrație regională, educație, servicii digitale și caracter industrial istoric. Sundsvall este, de asemenea, un punct de oprire practic pentru călătorii dintre centrul și nordul Suediei. Istorie K7.",
      en: "Sundsvall is a northern coastal city, famous for its stone architecture and industrial heritage. After the devastating fire of 1888, it was rebuilt in a monumental style that still defines the city center today. Today, it represents a blend of regional administration, education, digital services, and historic industrial character. Sundsvall is also a practical stop for travelers between central and northern Sweden. History K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Nach dem verheerenden Brand von 1888 wurde das Stadtzentrum massiv aus Stein gebaut, was dem Beinamen 'Stenstaden' (Steinstadt) seinen Ursprung gab.", "Die Architektur von Sundsvall gilt als eines der schönsten Beispiele für städtische Planung im späten 19. Jahrhundert.", "Durch seine Lage am Bottnischen Meerbusen war Sundsvall ein Zentrum der schwedischen Forstindustrie und des Holzexports."],
      hu: [],
      ro: ["După incendiul devastator din 1888, centrul orașului a fost construit masiv din piatră, de unde provine porecla „Stenstaden” (Orașul de Piatră).", "Arhitectura din Sundsvall este considerată unul dintre cele mai frumoase exemple de planificare urbană de la sfârșitul secolului al XIX-lea.", "Datorită locației sale la Golful Botnic, Sundsvall a fost un centru al industriei forestiere suedeze și al exportului de cherestea."],
      en: [
        "After the devastating fire of 1888, the city center was built massively of stone, which gave rise to the nickname 'Stenstaden' (Stone City).",
        "Sundsvall's architecture is considered one of the finest examples of late 19th-century urban planning.",
        "Due to its location on the Gulf of Bothnia, Sundsvall was a center of the Swedish forestry industry and timber exports."
      ]
    },
    image: "/geo-images/sweden/sundsvall.webp",
  },
  {
    id: "city-lulea",
    type: "city",
    parent: "sweden",
    coords: [22.1547, 65.5848],
    name: { de: "Luleå", hu: "Luleå", ro: "Luleå", en: "Luleå" },
    description: {
      de: "Luleå ist die Hauptstadt von Schwedisch-Lappland, bekannt für ihren bedeutenden Hafen, das arktische Klima und die zum UNESCO-Welterbe gehörende Kirchenstadt Gammelstad.",
      hu: "Luleå Svéd Lappföld fővárosa, amely jelentős kikötőjéről, arktikus klímájáról és az UNESCO Világörökség részét képező Gammelstad templomvárosról ismert.",
      ro: "Luleå este capitala Laponiei suedeze, cunoscută pentru portul său important, clima arctică și satul bisericesc Gammelstad, inclus în Patrimoniul Mondial UNESCO.",
      en: "Luleå is the capital of Swedish Lapland, known for its major port, Arctic climate, and the UNESCO World Heritage-listed Gammelstad Church Town."
    ,
    descriptionAdvanced: {
      de: "Luleå ist die Hauptstadt von Schwedisch-Lappland am Bottnischen Meerbusen. Sie verbindet Hafenaktivität im Norden, arktisches Klima und wachsende technische Infrastruktur in kompakter urbaner Form. Die Stadt ist berühmt für ihre UNESCO-geschützte Kirchenstadt, ihre Universitätspraxis und ihre Rolle in der regionalen Wirtschaft. Luleå ist ein starker Ausgangspunkt für Wintertourismus, Küstenreisen und Nordindustrie. Erdkunde K8."
    },
    factsAdvanced: {
      de: ["Gammelstad ist die am besten erhaltene Kirchenstadt Schwedens und zeigt, wie Menschen aus der Umgebung früher reisten, um Gottesdienste zu besuchen.", "Luleå hat sich zu einem Zentrum für digitale Infrastruktur und grüne Technologie entwickelt, insbesondere durch die Nähe zu kostengünstigen und nachhaltigen Energiequellen.", "Der Hafen von Luleå ist essenziell für den Export von Eisenerz aus den nahegelegenen Minen.", "Die Schären vor Luleå bestehen aus über 1.300 Inseln, die im Winter oft über Eisstraßen erreichbar sind.", "Luleå ist bekannt für seine starke Forschung im Bereich der Technik und Materialwissenschaften."]
    }
  },
    descriptionAdvanced: {
      de: "Luleå ist die Hauptstadt von Schwedisch-Lappland am Bottnischen Meerbusen. Sie verbindet Hafenaktivität im Norden, arktisches Klima und wachsende technische Infrastruktur in kompakter urbaner Form. Die Stadt ist berühmt für ihre UNESCO-geschützte Kirchenstadt, ihre Universitätspraxis und ihre Rolle in der regionalen Wirtschaft. Luleå ist ein starker Ausgangspunkt für Wintertourismus, Küstenreisen und Nordindustrie. Erdkunde K8.",
      hu: "",
      ro: "Luleå este capitala Laponiei suedeze, situată pe malul Golfului Botnic. Combină activitatea portuară din nord, clima arctică și o infrastructură tehnică în plină dezvoltare într-o formă urbană compactă. Orașul este celebru pentru satul bisericesc Gammelstad, inclus în patrimoniul UNESCO, universitatea sa și rolul crucial în economia regională. Luleå reprezintă un punct de plecare excelent pentru turismul de iarnă, călătoriile pe coastă și industria nordică. Erdkunde K8.",
      en: "Luleå is the capital of Swedish Lapland, situated on the Gulf of Bothnia. It combines northern port activity, an Arctic climate, and a growing technical infrastructure in a compact urban form. The city is famous for Gammelstad Church Town, an UNESCO World Heritage site, its university, and its crucial role in the regional economy. Luleå is an excellent starting point for winter tourism, coastal travel, and northern industry. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Gammelstad ist die am besten erhaltene Kirchenstadt Schwedens und zeigt, wie Menschen aus der Umgebung früher reisten, um Gottesdienste zu besuchen.", "Luleå hat sich zu einem Zentrum für digitale Infrastruktur und grüne Technologie entwickelt, insbesondere durch die Nähe zu kostengünstigen und nachhaltigen Energiequellen.", "Der Hafen von Luleå ist essenziell für den Export von Eisenerz aus den nahegelegenen Minen."],
      hu: [],
      ro: ["Gammelstad este cel mai bine conservat sat bisericesc din Suedia, ilustrând modul în care oamenii călătoreau în trecut pentru a participa la serviciile religioase.", "Luleå a devenit un centru pentru infrastructură digitală și tehnologie verde, datorită accesului la surse de energie ieftine și durabile.", "Portul Luleå este esențial pentru exportul minereului de fier provenit din minele din apropiere."],
      en: [
        "Gammelstad is the best-preserved church town in Sweden, illustrating how people used to travel to attend church services.",
        "Luleå has become a hub for digital infrastructure and green technology, thanks to access to cheap and sustainable energy sources.",
        "The Port of Luleå is essential for exporting iron ore from nearby mines."
      ]
    },
    image: "/geo-images/sweden/lulea.webp",
  },
  {
    id: "city-karlstad",
    type: "city",
    parent: "sweden",
    coords: [13.5036, 59.3793],
    name: { de: "Karlstad", hu: "Karlstad", ro: "Karlstad", en: "Karlstad" },
    description: {
      de: "Karlstad ist eine freundliche Stadt am Nordufer des Vänernsees, bekannt für ihre sonnige Atmosphäre, ihre Lage am Klarälven-Delta und ihre hohe Lebensqualität.",
      hu: "Karlstad egy barátságos város a Vänern-tó északi partján, amely napfényes hangulatáról, a Klarälven-deltában fekvő elhelyezkedéséről és magas életminőségéről ismert.",
      ro: "Karlstad este un oraș prietenos pe malul nordic al lacului Vänern, cunoscut pentru atmosfera sa însorită, locația sa în delta Klarälven și calitatea ridicată a vieții.",
      en: "Karlstad is a friendly city on the northern shore of Lake Vänern, known for its sunny atmosphere, its location at the Klarälven delta, and high quality of life."
    ,
    descriptionAdvanced: {
      de: "Karlstad liegt dort, wo der Klarälven in den Vänernsee mündet, und ist eine der angenehmsten Regionalstädte Westschwedens. Sie ist bekannt für ihre hellen Wasserwege, ihr ruhiges Tempo und ihre starke Rolle in Verwaltung und Handel. Die Stadt hat den Ruf von viel Sonne, offenen Plätzen und einfachem Zugang zur Binnenlandschaft. Karlstad eignet sich gut als Reisebasis für Värmland und das Seenland. Sachkunde K5."
    },
    factsAdvanced: {
      de: ["Karlstad wird aufgrund einer populären Kellnerin namens 'Sola i Karlstad' (Die Sonne in Karlstad) oft als besonders sonnige Stadt bezeichnet.", "Durch die Lage im Mündungsdelta des Klarälven ist Karlstad ein Paradies für Wassersportler und Naturliebhaber.", "Als Sitz der Universität Karlstad ist die Stadt ein bedeutender Bildungsknotenpunkt in Mittelschweden.", "Das Värmland-Museum in Karlstad bietet exzellente Einblicke in die Kunst und kulturelle Geschichte der Region.", "Karlstad ist ein wichtiger Knotenpunkt für den Schienenverkehr in der westlichen Region des Vänernsees."]
    }
  },
    descriptionAdvanced: {
      de: "Karlstad liegt dort, wo der Klarälven in den Vänernsee mündet, und ist eine der angenehmsten Regionalstädte Westschwedens. Sie ist bekannt für ihre hellen Wasserwege, ihr ruhiges Tempo und ihre starke Rolle in Verwaltung und Handel. Die Stadt hat den Ruf von viel Sonne, offenen Plätzen und einfachem Zugang zur Binnenlandschaft. Karlstad eignet sich gut als Reisebasis für Värmland und das Seenland. Sachkunde K5.",
      hu: "",
      ro: "Karlstad este situat la confluența râului Klarälven cu lacul Vänern, fiind unul dintre cele mai plăcute orașe regionale din vestul Suediei. Este faimos pentru căile sale navigabile luminoase, ritmul calm și rolul său solid în administrație și comerț. Orașul are reputația de a fi însorit, cu piețe deschise și acces ușor către peisajul interior. Karlstad reprezintă o bază excelentă pentru explorarea provinciei Värmland și a ținutului lacurilor. Sachkunde K5.",
      en: "Karlstad is situated at the confluence of the Klarälven River and Lake Vänern, making it one of the most pleasant regional cities in western Sweden. It is famous for its bright waterways, calm pace, and strong role in administration and trade. The city has a reputation for being sunny, with open squares and easy access to the interior landscape. Karlstad is an excellent travel base for exploring Värmland and the lake country. Sachkunde K5."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Karlstad wird aufgrund einer populären Kellnerin namens 'Sola i Karlstad' (Die Sonne in Karlstad) oft als besonders sonnige Stadt bezeichnet.", "Durch die Lage im Mündungsdelta des Klarälven ist Karlstad ein Paradies für Wassersportler und Naturliebhaber.", "Als Sitz der Universität Karlstad ist die Stadt ein bedeutender Bildungsknotenpunkt in Mittelschweden."],
      hu: [],
      ro: ["Karlstad este adesea numit un oraș deosebit de însorit datorită popularității unei chelnerițe locale numite „Sola i Karlstad” (Soarele din Karlstad).", "Datorită locației sale în delta râului Klarälven, Karlstad este un paradis pentru iubitorii de sporturi nautice și natură.", "Ca sediu al Universității Karlstad, orașul este un important nod educațional în centrul Suediei."],
      en: [
        "Karlstad is often called a particularly sunny city due to the popularity of a local waitress named 'Sola i Karlstad' (The Sun in Karlstad).",
        "Due to its location in the Klarälven river delta, Karlstad is a paradise for water sports enthusiasts and nature lovers.",
        "As the seat of Karlstad University, the city is a major educational hub in central Sweden."
      ]
    },
    image: "/geo-images/sweden/karlstad.webp",
  },
  {
    id: "city-jonkoping",
    type: "city",
    parent: "sweden",
    coords: [14.1618, 57.7826],
    name: { de: "Jönköping", hu: "Jönköping", ro: "Jönköping", en: "Jönköping" },
    description: {
      de: "Jönköping ist eine strategisch gelegene Stadt am Südufer des Vätternsees, bekannt für ihre Rolle als Logistikzentrum, ihre Messen und ihre schöne Lage am Wasser.",
      hu: "Jönköping egy stratégiai fekvésű város a Vättern-tó déli partján, amely logisztikai központként betöltött szerepéről, vásárairól és gyönyörű vízparti fekvéséről ismert.",
      ro: "Jönköping este un oraș situat strategic pe malul sudic al lacului Vättern, cunoscut pentru rolul său de centru logistic, târgurile sale și locația sa superbă pe malul apei.",
      en: "Jönköping is a strategically located city on the southern shore of Lake Vättern, known for its role as a logistics hub, its trade fairs, and its beautiful waterfront setting."
    ,
    descriptionAdvanced: {
      de: "Jönköping ist eine strategisch gelegene Binnenstadt am südlichen Ufer des Vätternsees. Sie entwickelte sich zu einem Handels-, Produktions- und Verkehrszentrum und spielt bis heute eine starke regionale Rolle. Die Stadt ist bekannt für Messen, Logistik und gute Verbindungen zum Rest Südschwedens. Jönköping bietet Besuchern außerdem eine gute Mischung aus Seeblick, Stadtdiensten und naher Landschaft. Erdkunde K7."
    },
    factsAdvanced: {
      de: ["Jönköping war früher weltweit als 'Zündholz-Hauptstadt' bekannt, da das Unternehmen 'Svenska Tändsticks AB' dort seinen Sitz hatte.", "Die Stadt ist ein bedeutender Knotenpunkt für den Güterverkehr in Schweden, da sich hier wichtige Autobahnrouten kreuzen.", "Der Vätternsee sorgt für ein mildes Klima und bietet eine wunderschöne Kulisse für die gesamte Stadt.", "Das Tändsticksmuseet in Jönköping ist eines der wenigen Museen weltweit, das sich der Geschichte der Zündholzherstellung widmet.", "Die Jönköping University ist bekannt für ihre starke Ausrichtung auf unternehmerische Studiengänge."]
    }
  },
    descriptionAdvanced: {
      de: "Jönköping ist eine strategisch gelegene Binnenstadt am südlichen Ufer des Vätternsees. Sie entwickelte sich zu einem Handels-, Produktions- und Verkehrszentrum und spielt bis heute eine starke regionale Rolle. Die Stadt ist bekannt für Messen, Logistik und gute Verbindungen zum Rest Südschwedens. Jönköping bietet Besuchern außerdem eine gute Mischung aus Seeblick, Stadtdiensten und naher Landschaft. Erdkunde K7.",
      hu: "",
      ro: "Jönköping este un oraș strategic situat pe malul sudic al lacului Vättern. S-a dezvoltat ca un centru de comerț, producție și transport, menținându-și și astăzi un rol regional important. Orașul este renumit pentru târguri, logistică și conexiunile excelente cu restul Suediei de sud. Jönköping oferă vizitatorilor un amestec reușit de vedere la lac, servicii urbane și peisaje naturale în apropiere. Erdkunde K7.",
      en: "Jönköping is a strategically located inland city on the southern shore of Lake Vättern. It developed into a hub for trade, production, and transport, maintaining a strong regional role today. The city is known for trade fairs, logistics, and excellent connections to the rest of southern Sweden. Jönköping offers visitors a successful blend of lakeside views, urban services, and nearby nature. Geography K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Jönköping war früher weltweit als 'Zündholz-Hauptstadt' bekannt, da das Unternehmen 'Svenska Tändsticks AB' dort seinen Sitz hatte.", "Die Stadt ist ein bedeutender Knotenpunkt für den Güterverkehr in Schweden, da sich hier wichtige Autobahnrouten kreuzen.", "Der Vätternsee sorgt für ein mildes Klima und bietet eine wunderschöne Kulisse für die gesamte Stadt."],
      hu: [],
      ro: ["Jönköping era cunoscut anterior la nivel mondial drept „Capitala Chibriturilor”, deoarece compania „Svenska Tändsticks AB” își avea sediul aici.", "Orașul este un nod important pentru transportul de mărfuri în Suedia, unde se intersectează rute rutiere vitale.", "Lacul Vättern oferă un climat blând și un decor superb pentru întreg orașul."],
      en: [
        "Jönköping was formerly known worldwide as the 'Matchstick Capital', as the company 'Svenska Tändsticks AB' was based there.",
        "The city is a major hub for freight transport in Sweden, where important highway routes intersect.",
        "Lake Vättern provides a mild climate and a superb backdrop for the entire city."
      ]
    },
    image: "/geo-images/sweden/jonkoping.webp",
  }
];

export const swedenCulture: POI[] = [
  {
    id: "cult-visby",
    type: "historical",
    parent: "sweden",
    coords: [18.2948, 57.6348],
    name: { de: "Visby", hu: "Visby", ro: "Visby", en: "Visby" },
    description: {
      de: "Visby ist eine bemerkenswert gut erhaltene mittelalterliche Hansestadt auf der Insel Gotland, bekannt für ihre beeindruckende Stadtmauer und ihre charmanten Rosenhäuser.",
      hu: "Visby egy figyelemre méltóan jó állapotban fennmaradt középkori hanza-város Gotland szigetén, amely lenyűgöző városfaláról és bájos, rózsákkal borított házairól ismert.",
      ro: "Visby este un oraș hanseatic medieval remarcabil de bine conservat pe insula Gotland, cunoscut pentru zidul său impresionant și căsuțele sale fermecătoare cu trandafiri.",
      en: "Visby is a remarkably well-preserved medieval Hanseatic town on the island of Gotland, known for its impressive town wall and charming rose-covered cottages."
    },
    descriptionAdvanced: {
      de: "Visby auf der Insel Gotland ist eine bemerkenswert gut erhaltene mittelalterliche Hansestadt und UNESCO-Weltkulturerbe. Sie ist berühmt für ihre beeindruckende Stadtmauer aus dem 13. Jahrhundert, ihre Kopfsteinpflasterstraßen und ihre charmanten, rosenumrankten Häuser. Visby hat eine reiche Geschichte als bedeutendes Handelszentrum in der Ostsee und ist Gastgeber der jährlichen Mittelalterwoche, in der die Stadt mit Märkten, Turnieren und historischen Kostümen zum Leben erwacht. Geschichte K6.",
      hu: "",
      ro: "Visby, pe insula Gotland, este un oraș hanseatic medieval remarcabil de bine conservat, inclus în patrimoniul UNESCO. Este renumit pentru zidul său de apărare impresionant din secolul al XIII-lea, străzile pietruite și căsuțele fermecătoare acoperite cu trandafiri. Visby are o istorie bogată ca centru comercial major la Marea Baltică și găzduiește anual „Săptămâna Medievală”, când orașul prinde viață prin piețe, turniruri și costume istorice. Istorie K6.",
      en: "Visby, on the island of Gotland, is a remarkably well-preserved medieval Hanseatic town and a UNESCO World Heritage site. It is famous for its impressive 13th-century town wall, cobblestone streets, and charming rose-covered houses. Visby has a rich history as a major Baltic Sea trading center and hosts the annual 'Medieval Week', when the city comes alive with markets, tournaments, and historical costumes. History K6."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die Stadtmauer von Visby ist die am besten erhaltene mittelalterliche Stadtbefestigung in ganz Skandinavien.", "Während der Mittelalterwoche im August verwandelt sich die Stadt in ein riesiges Fest mit historischem Flair, Marktständen und mittelalterlichen Wettkämpfen.", "Gotland war in der Wikingerzeit ein wichtiger Handelsplatz, wovon unzählige Silberschatzfunde zeugen."],
      hu: [],
      ro: ["Zidul orașului Visby este cea mai bine conservată fortificație medievală din toată Scandinavia.", "În timpul „Săptămânii Medievale” din august, orașul se transformă într-un festival uriaș, cu atmosferă istorică, piețe și competiții medievale.", "Gotland a fost un punct comercial important în epoca vikingilor, lucru dovedit de nenumăratele comori de argint descoperite."],
      en: [
        "The Visby town wall is the best-preserved medieval city fortification in all of Scandinavia.",
        "During 'Medieval Week' in August, the city turns into a huge festival with historical flair, market stalls, and medieval competitions.",
        "Gotland was an important trading post during the Viking Age, as evidenced by countless silver treasure finds."
      ]
    },
    image: "/geo-images/sweden/visby.webp",
  },
  {
    id: "cult-vasa-museum",
    type: "historical",
    parent: "sweden",
    coords: [18.0914, 59.3281],
    name: { de: "Vasa-Museum", hu: "Vasa Múzeum", ro: "Muzeul Vasa", en: "Vasa Museum" },
    description: {
      de: "Das Vasa-Museum in Stockholm beherbergt das weltweit einzige fast vollständig erhaltene Schiff aus dem 17. Jahrhundert, das 1628 auf seiner Jungfernfahrt sank.",
      hu: "A stockholmi Vasa Múzeum a világ egyetlen szinte teljesen épen maradt 17. századi hadihajójának ad otthont, amely 1628-ban süllyedt el első útján.",
      ro: "Muzeul Vasa din Stockholm găzduiește singura navă din secolul al XVII-lea din lume conservată aproape integral, care s-a scufundat în călătoria sa inaugurală în 1628.",
      en: "The Vasa Museum in Stockholm houses the world's only almost fully intact 17th-century ship, which sank on its maiden voyage in 1628."
    },
    descriptionAdvanced: {
      de: "Das Vasa-Museum ist ein Schifffahrtsmuseum in Stockholm auf der Insel Djurgården. Es zeigt das fast vollständig intakte Schiff Vasa aus dem 17. Jahrhundert, das 1628 auf seiner Jungfernfahrt sank und 1961 geborgen wurde. Es ist das meistbesuchte Museum Skandinaviens und bietet einen einzigartigen Einblick in die schwedische Marinegeschichte und die Handwerkskunst des 17. Jahrhunderts. Geschichte K7.",
      hu: "",
      ro: "Muzeul Vasa este un muzeu maritim din Stockholm, situat pe insula Djurgården. Acesta expune nava Vasa din secolul al XVII-lea, conservată aproape intactă, care s-a scufundat în călătoria sa inaugurală în 1628 și a fost recuperată în 1961. Este cel mai vizitat muzeu din Scandinavia, oferind o perspectivă unică asupra istoriei marine suedeze și a măiestriei artizanale din secolul al XVII-lea. Istorie K7.",
      en: "The Vasa Museum is a maritime museum in Stockholm on the island of Djurgården. It displays the nearly intact 17th-century ship Vasa, which sank on its maiden voyage in 1628 and was salvaged in 1961. It is the most visited museum in Scandinavia, offering a unique insight into Swedish naval history and 17th-century craftsmanship. History K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Das Schiff Vasa war bei seinem Bau eines der am schwersten bewaffneten Schiffe, was zur Instabilität bei starkem Wind führte.", "Die Bergung im Jahr 1961 erforderte technische Pionierarbeit, da das Schiff fast 333 Jahre lang konserviert im Schlamm gelegen hatte.", "Das Vasa-Museum ist architektonisch so konzipiert, dass das Schiff aus verschiedenen Blickwinkeln besichtigt werden kann."],
      hu: [],
      ro: ["Nava Vasa era una dintre cele mai puternic înarmate nave la momentul construcției, ceea ce a dus la instabilitatea sa în condiții de vânt puternic.", "Recuperarea navei în 1961 a necesitat o pionierat tehnic, deoarece aceasta fusese conservată în noroi timp de aproape 333 de ani.", "Muzeul Vasa este proiectat arhitectural astfel încât nava să poată fi admirată din multiple perspective."],
      en: [
        "The Vasa ship was one of the most heavily armed ships at the time of its construction, which led to its instability in strong winds.",
        "The 1961 salvage required pioneering technical work, as the ship had been preserved in mud for nearly 333 years.",
        "The Vasa Museum is architecturally designed so that the ship can be viewed from multiple angles."
      ]
    },
    image: "/geo-images/sweden/vasa-museum.webp",
  },
  {
    id: "cult-gamla-stan",
    type: "historical",
    parent: "sweden",
    coords: [18.0715, 59.3259],
    name: { de: "Gamla Stan", hu: "Gamla Stan", ro: "Gamla Stan", en: "Gamla Stan" },
    description: {
      de: "Gamla Stan ist die historische Altstadt von Stockholm, eines der am besten erhaltenen mittelalterlichen Stadtzentren Europas, bekannt für seine bunten Häuser und engen Gassen.",
      hu: "Gamla Stan Stockholm történelmi óvárosa, Európa egyik legjobb állapotban fennmaradt középkori városközpontja, amely színes házairól és szűk utcáiról ismert.",
      ro: "Gamla Stan este centrul istoric al orașului Stockholm, unul dintre cele mai bine conservate centre medievale din Europa, cunoscut pentru casele sale colorate și străzile înguste.",
      en: "Gamla Stan is the historic old town of Stockholm, one of the best-preserved medieval city centers in Europe, known for its colorful buildings and narrow cobblestone streets."
    },
    descriptionAdvanced: {
      de: "Gamla Stan, die Altstadt von Stockholm, ist eines der größten und am besten erhaltenen mittelalterlichen Stadtzentren Europas. Sie wurde 1252 gegründet und zeichnet sich durch enge, gewundene Kopfsteinpflasterstraßen, bunte Gebäude und historische Stätten wie den Königspalast und den Stockholmer Dom aus. Es ist ein lebendiges Viertel voller Geschäfte, Restaurants und Museen, das seinen mittelalterlichen Charakter bewahrt hat. Geschichte K6.",
      hu: "",
      ro: "Gamla Stan, orașul vechi din Stockholm, este unul dintre cele mai mari și mai bine conservate centre medievale din Europa. Fondat în 1252, acesta este caracterizat prin străzi înguste și șerpuite, clădiri colorate și situri istorice precum Palatul Regal și Catedrala din Stockholm. Este un cartier plin de viață, plin de magazine, restaurante și muzee, care și-a păstrat cu mândrie caracterul medieval de-a lungul secolelor. Istorie K6.",
      en: "Gamla Stan, Stockholm's old town, is one of the largest and best-preserved medieval city centers in Europe. Founded in 1252, it features narrow, winding cobblestone streets, colorful buildings, and historical sites such as the Royal Palace and Stockholm Cathedral. It is a vibrant district full of shops, restaurants, and museums, which has proudly preserved its medieval character through the centuries. History K6."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die schmalste Gasse der Stadt, Mårten Trotzigs Gränd, hat eine Breite von nur 90 Zentimetern an ihrer engsten Stelle.", "Das Stortorget ist der älteste Platz Stockholms und war Schauplatz des 'Stockholmer Blutbads' von 1520, ein zentrales Ereignis der schwedischen Unabhängigkeitsbewegung.", "In Gamla Stan befinden sich Gebäude aus dem 15. Jahrhundert, die auch heute noch intensiv für Wohnzwecke und Gastronomie genutzt werden."],
      hu: [],
      ro: ["Cea mai îngustă stradă a orașului, Mårten Trotzigs Gränd, are o lățime de doar 90 de centimetri în punctul său cel mai îngust.", "Stortorget este cea mai veche piață din Stockholm și a fost locul „Baiei de sânge din Stockholm” din 1520, un eveniment central în mișcarea de independență suedeză.", "În Gamla Stan există clădiri din secolul al XV-lea, care sunt utilizate intens și astăzi pentru scopuri rezidențiale și gastronomice."],
      en: [
        "The city's narrowest alley, Mårten Trotzigs Gränd, is only 90 centimeters wide at its narrowest point.",
        "Stortorget is Stockholm's oldest square and was the site of the 'Stockholm Bloodbath' of 1520, a central event in the Swedish independence movement.",
        "Gamla Stan contains buildings dating back to the 15th century, which are still actively used today for residential and gastronomic purposes."
      ]
    },
    image: "/geo-images/sweden/gamla-stan.webp",
  },
  {
    id: "cult-drottningholm",
    type: "landmark",
    parent: "sweden",
    coords: [17.8857, 59.3219],
    name: { de: "Schloss Drottningholm", hu: "Drottningholm palota", ro: "Palatul Drottningholm", en: "Drottningholm Palace" },
    description: {
      de: "Schloss Drottningholm ist die Privatresidenz der schwedischen Königsfamilie, ein prächtiges Barockschloss am Mälarensee und UNESCO-Weltkulturerbe.",
      hu: "A Drottningholm palota a svéd királyi család magánrezidenciája, egy pompás barokk kastély a Mälaren-tó partján és az UNESCO Világörökség része.",
      ro: "Palatul Drottningholm este reședința privată a familiei regale suedeze, un magnific palat baroc pe malul lacului Mälaren și sit al Patrimoniului Mondial UNESCO.",
      en: "Drottningholm Palace is the private residence of the Swedish royal family, a magnificent Baroque palace on Lake Mälaren and a UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Schloss Drottningholm ist die Privatresidenz der schwedischen Königsfamilie und gehört zum UNESCO-Weltkulturerbe. Das im 17. Jahrhundert erbaute Schloss wurde nach französischem Vorbild wie Versailles gestaltet und verfügt über ein prächtiges Schlosstheater und wunderschöne Gärten. Es ist das beste Beispiel nordeuropäischer Barockarchitektur. Kunst K7.",
      hu: "",
      ro: "Palatul Drottningholm este reședința privată a familiei regale suedeze și face parte din Patrimoniul Mondial UNESCO. Construit în secolul al XVII-lea, palatul a fost proiectat după modelul francez de la Versailles și dispune de un teatru magnific și grădini spectaculoase. Acesta reprezintă cel mai bun exemplu de arhitectură barocă nord-europeană. Artă K7.",
      en: "Drottningholm Palace is the private residence of the Swedish royal family and a UNESCO World Heritage site. Built in the 17th century, the palace was designed on the French model of Versailles and features a magnificent palace theater and beautiful gardens. It is the finest example of North European Baroque architecture. Art K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Das Schlosstheater von Drottningholm ist eines der am besten erhaltenen Theater des 18. Jahrhunderts und wird noch heute für Aufführungen genutzt.", "Die Schlossanlage kombiniert einen strengen französischen Barockgarten mit einem locker gestalteten englischen Landschaftspark.", "Der Chinesische Pavillon wurde im 18. Jahrhundert als exklusives Geschenk an die Königin errichtet und zeigt den damaligen Zeitgeist europäischer Herrscher."],
      hu: [],
      ro: ["Teatrul palatului Drottningholm este unul dintre cele mai bine conservate teatre din secolul al XVIII-lea și este utilizat și astăzi pentru spectacole.", "Complexul palatului combină o grădină barocă franceză strictă cu un parc peisagistic englezesc mai liber.", "Pavilionul Chinezesc a fost construit în secolul al XVIII-lea ca un cadou exclusiv pentru regină, reflectând spiritul epocii monarhilor europeni."],
      en: [
        "The Drottningholm Palace Theater is one of the best-preserved theaters of the 18th century and is still used for performances today.",
        "The palace grounds combine a strict French Baroque garden with a more relaxed English landscape park.",
        "The Chinese Pavilion was built in the 18th century as an exclusive gift to the Queen, reflecting the spirit of the age of European monarchs."
      ]
    },
    image: "/geo-images/sweden/drottningholm.webp",
  },
  {
    id: "cult-icehotel",
    type: "landmark",
    parent: "sweden",
    coords: [20.5956, 67.8508],
    name: { de: "Eishotel Jukkasjärvi", hu: "Icehotel Jukkasjärvi", ro: "Icehotel Jukkasjärvi", en: "Icehotel Jukkasjärvi" },
    description: {
      de: "Das Eishotel in Jukkasjärvi war das weltweit erste Hotel aus Eis und Schnee, ein vergängliches Kunstwerk, das jedes Jahr von Künstlern neu erschaffen wird.",
      hu: "A jukkasjärvi Jéghotel volt a világ első jégből és hóból készült szállodája, egy mulandó műalkotás, amelyet minden évben művészek építenek újjá.",
      ro: "Icehotel din Jukkasjärvi a fost primul hotel din lume realizat din gheață și zăpadă, o operă de artă efemeră recreată în fiecare an de artiști.",
      en: "The Icehotel in Jukkasjärvi was the world's first hotel made of ice and snow, an ephemeral work of art recreated every year by artists."
    },
    descriptionAdvanced: {
      de: "Das in Jukkasjärvi gelegene Eishotel war das weltweit erste Hotel, das vollständig aus Eis und Schnee gebaut wurde. Jedes Jahr kommen Künstler aus aller Welt zusammen, um die Zimmer und Gemeinschaftsbereiche des Hotels mit Eis aus dem nahen Fluss Torne zu gestalten. Es bietet ein einzigartiges arktisches Erlebnis mit konstanten Minustemperaturen im Inneren, ergänzt durch die Icebar. Sachkunde K5.",
      hu: "",
      ro: "Icehotel din Jukkasjärvi a fost primul hotel din lume construit complet din gheață și zăpadă. În fiecare an, artiști din întreaga lume se reunesc pentru a crea camerele și zonele comune folosind gheață din râul Torne din apropiere. Acesta oferă o experiență arctică unică, cu temperaturi constante sub zero grade la interior, completată de faimosul Icebar. Sachkunde K5.",
      en: "The Icehotel in Jukkasjärvi was the world's first hotel built entirely from ice and snow. Every year, artists from all over the world come together to design the hotel's rooms and common areas using ice from the nearby Torne River. It offers a unique Arctic experience with constant sub-zero temperatures inside, complemented by the famous Icebar. Sachkunde K5."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Das gesamte Eis wird dem Torne-Fluss entnommen, da dessen fließendes Wasser eine außergewöhnliche Reinheit und Durchsichtigkeit gewährleistet.", "Jeden Winter wird das Eishotel von internationalen Künstlern völlig neu gestaltet, sodass es jedes Mal ein Unikat darstellt.", "Trotz der Eistemperaturen sind die Hotelbetten mit speziellen Rentierfellen und hochwertigen Schlafsäcken ausgestattet."],
      hu: [],
      ro: ["Toată gheața este extrasă din râul Torne, deoarece apa sa curgătoare asigură o puritate și o transparență excepționale.", "În fiecare iarnă, Icehotel este complet reproiectat de artiști internaționali, făcând ca fiecare ediție să fie unică.", "În ciuda temperaturilor scăzute, paturile hotelului sunt echipate cu blănuri speciale de ren și saci de dormit de înaltă calitate."],
      en: [
        "All ice is taken from the Torne River, as its flowing water ensures exceptional purity and transparency.",
        "Every winter, the Icehotel is completely redesigned by international artists, making each edition a one-of-a-kind creation.",
        "Despite the icy temperatures, the hotel beds are equipped with special reindeer hides and high-quality sleeping bags."
      ]
    },
    image: "/geo-images/sweden/icehotel.webp",
  },
  {
    id: "cult-dalarna",
    type: "landmark",
    parent: "sweden",
    coords: [14.5390, 60.9923],
    name: { de: "Dalarna (Dala-Pferd)", hu: "Dalarna (Dala-ló)", ro: "Dalarna (Calul Dala)", en: "Dalarna (Dala Horse)" },
    description: {
      de: "Dalarna ist das kulturelle Herz Schwedens, bekannt für seine tief verwurzelte Folklore, die roten Holzhäuser und das ikonische Dala-Pferd.",
      hu: "Dalarna Svédország kulturális szíve, amely mélyen gyökerező folklórjáról, vörös faházairól és az ikonikus dala-lóról ismert.",
      ro: "Dalarna este inima culturală a Suediei, cunoscută pentru folclorul său profund înrădăcinat, casele de lemn roșii și emblematicul cal Dala.",
      en: "Dalarna is the cultural heart of Sweden, known for its deep-rooted folklore, red wooden houses, and the iconic Dala horse."
    },
    descriptionAdvanced: {
      de: "Dalarna ist eine Provinz in Mittelschweden, bekannt für ihre tief verwurzelte Folklore, traditionelle rot gestrichene Häuser und das ikonische Dala-Pferd. Mora ist das Zentrum der Dala-Pferd-Produktion, eines handgeschnitzten und bemalten Holzpferdes, das zum Symbol Schwedens geworden ist. Die Region ist auch berühmt für den Vasaloppet, das älteste und längste Skilanglaufrennen der Welt. Geschichte K8.",
      hu: "",
      ro: "Dalarna este o provincie din centrul Suediei, renumită pentru folclorul său profund, casele tradiționale vopsite în roșu și emblematicul cal Dala. Mora este centrul producției de cai Dala, acele figurine din lemn sculptate și pictate manual, devenite simbolul Suediei. Regiunea este de asemenea celebră pentru Vasaloppet, cea mai veche și mai lungă cursă de schi fond din lume. Istorie K8.",
      en: "Dalarna is a province in central Sweden, known for its deep-rooted folklore, traditional red-painted wooden houses, and the iconic Dala horse. Mora is the center of Dala horse production, featuring hand-carved and painted wooden horses that have become a symbol of Sweden. The region is also famous for the Vasaloppet, the oldest and longest cross-country ski race in the world. History K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die berühmte Kurbits-Malerei, mit der Dala-Pferde verziert werden, hat ihre Wurzeln im 18. Jahrhundert und spiegelt schwedische Folklore wider.", "Der Vasaloppet in Dalarna erinnert an die Flucht von Gustav Vasa vor dänischen Truppen und zieht jährlich zehntausende Skifahrer an.", "Die charakteristischen roten Holzhäuser in Dalarna sind das Ergebnis einer Farbe, die früher ein Nebenprodukt des Bergbaus war."],
      hu: [],
      ro: ["Faimoasa pictură „Kurbits”, cu care sunt decorați caii Dala, are rădăcini în secolul al XVIII-lea și reflectă folclorul suedez.", "Vasaloppet din Dalarna comemorează fuga lui Gustav Vasa de trupele daneze și atrage anual zeci de mii de schiori.", "Casele caracteristice din lemn roșu din Dalarna sunt rezultatul unei vopsele care era, în trecut, un subprodus al mineritului."],
      en: [
        "The famous 'Kurbits' painting used to decorate Dala horses has its roots in the 18th century and reflects Swedish folklore.",
        "The Vasaloppet in Dalarna commemorates Gustav Vasa's escape from Danish troops and attracts tens of thousands of skiers annually.",
        "The characteristic red wooden houses in Dalarna are the result of a paint that was formerly a byproduct of mining."
      ]
    },
    image: "/geo-images/sweden/dalarna.webp",
  }
];

export const swedenNature: POI[] = [
  {
    id: "nat-abisko",
    type: "landmark",
    parent: "sweden",
    coords: [18.8312, 68.3495],
    name: { de: "Abisko Nationalpark", hu: "Abisko Nemzeti Park", ro: "Parcul Național Abisko", en: "Abisko National Park" },
    description: {
      de: "Der Abisko-Nationalpark in Schwedisch-Lappland ist weltberühmt für seine spektakulären Polarlichter, den Kungsleden-Wanderweg und seine unberührte arktische Wildnis.",
      hu: "A svéd Lappföldön található Abisko Nemzeti Park világhírű látványos sarki fényeiről, a Kungsleden túraútvonalról és érintetlen arktikus vadonjáról.",
      ro: "Parcul Național Abisko din Laponia suedeză este renumit în întreaga lume pentru aurorele sale boreale spectaculoase, traseul de drumeție Kungsleden și sălbăticia sa arctică virgină.",
      en: "Abisko National Park in Swedish Lapland is world-famous for its spectacular Northern Lights, the Kungsleden hiking trail, and its pristine Arctic wilderness."
    },
    descriptionAdvanced: {
      de: "Der Abisko-Nationalpark liegt im Herzen von Schwedisch-Lappland und ist bekannt für seine beeindruckende arktische Landschaft und seine vielfältige Tierwelt. Aufgrund des klaren Himmels und der minimalen Lichtverschmutzung ist er einer der besten Orte der Welt, um Polarlichter zu sehen. Der Park bietet hervorragende Wanderwege, darunter den Beginn des berühmten Kungsleden (Königsweg), und beherbergt den wunderschönen Abisko-Canyon und den See Torneträsk. Erdkunde K8.",
      hu: "",
      ro: "Parcul Național Abisko se află în inima Laponiei suedeze și este renumit pentru peisajul arctic spectaculos și fauna diversă. Datorită cerului clar și a poluării luminoase minime, acesta este unul dintre cele mai bune locuri din lume pentru observarea aurorei boreale. Parcul oferă trasee excelente de drumeție, inclusiv punctul de plecare al celebrului Kungsleden (Calea Regelui), și găzduiește frumosul Canion Abisko și lacul Torneträsk. Erdkunde K8.",
      en: "Abisko National Park is located in the heart of Swedish Lapland and is known for its impressive Arctic landscape and diverse wildlife. Due to the clear sky and minimal light pollution, it is one of the best places in the world to see the Northern Lights. The park offers excellent hiking trails, including the start of the famous Kungsleden (King's Trail), and hosts the beautiful Abisko Canyon and Lake Torneträsk. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Das 'Blaue Loch' von Abisko ist ein Phänomen, bei dem der Himmel über der Station oft klar bleibt, während die Umgebung wolkenverhangen ist – ein Grund für die exzellente Sicht auf Polarlichter.", "Der Kungsleden (Königsweg) führt insgesamt etwa 440 Kilometer durch einige der schönsten Berglandschaften Lapplands.", "Abisko war einer der ersten Orte in Schweden, der den Status eines Nationalparks erhielt, um diese einzigartige Natur vor industrieller Nutzung zu schützen."],
      hu: [],
      ro: ["„Gaura Albastră” din Abisko este un fenomen prin care cerul deasupra stației rămâne adesea senin, în timp ce zona din jur este înnorată, explicând vizibilitatea excelentă a aurorei boreale.", "Kungsleden (Calea Regelui) se întinde pe aproximativ 440 de kilometri prin unele dintre cele mai frumoase peisaje montane din Laponia.", "Abisko a fost printre primele locuri din Suedia care a primit statutul de parc național, pentru a proteja natura unică de exploatarea industrială."],
      en: [
        "The 'Blue Hole' of Abisko is a phenomenon where the sky above the station often remains clear while the surrounding area is cloudy—a reason for the excellent view of Northern Lights.",
        "The Kungsleden (King's Trail) spans a total of about 440 kilometers through some of the most beautiful mountain landscapes in Lapland.",
        "Abisko was one of the first places in Sweden to receive National Park status, protecting this unique nature from industrial use."
      ]
    },
    image: "/geo-images/sweden/abisko.webp",
  },
  {
    id: "nat-gotland",
    type: "landmark",
    parent: "sweden",
    coords: [18.2948, 57.6348],
    name: { de: "Gotland und Visby", hu: "Gotland és Visby", ro: "Gotland și Visby", en: "Gotland and Visby" },
    description: {
      de: "Gotland ist Schwedens größte Insel, bekannt für die mittelalterliche Hansestadt Visby, ihre einzigartigen Kalksteinfelsen ('Raukar') und ihre reiche Wikingergeschichte.",
      hu: "Gotland Svédország legnagyobb szigete, amely a középkori hanza-városról, Visbyről, egyedülálló mészkőoszlopairól („raukar”) és gazdag viking történelméről ismert.",
      ro: "Gotland este cea mai mare insulă a Suediei, cunoscută pentru orașul hanseatic medieval Visby, stâncile sale de calcar unice („raukar”) și istoria sa bogată a vikingilor.",
      en: "Gotland is Sweden's largest island, known for the medieval Hanseatic town of Visby, its unique limestone stacks ('raukar'), and rich Viking history."
    },
    descriptionAdvanced: {
      de: "Gotland ist die größte Insel Schwedens in der Ostsee, mit der mittelalterlichen Stadt Visby als Hauptzentrum. Visby gehört zum UNESCO-Weltkulturerbe und ist berühmt für seine Stadtmauer aus dem 13. Jahrhundert und die gut erhaltene mittelalterliche Architektur. Die Landschaft der Insel ist geprägt von einzigartigen Kalksteinformationen, den 'Raukar', und wunderschönen Sandstränden. Erdkunde K7.",
      hu: "",
      ro: "Gotland este cea mai mare insulă a Suediei în Marea Baltică, având orașul medieval Visby drept centru principal. Visby face parte din patrimoniul mondial UNESCO și este faimos pentru zidul său de apărare din secolul al XIII-lea și arhitectura medievală bine conservată. Peisajul insulei este definit prin formațiuni de calcar unice, numite „raukar”, și plaje superbe de nisip. Erdkunde K7.",
      en: "Gotland is Sweden's largest island in the Baltic Sea, with the medieval town of Visby as its main center. Visby is a UNESCO World Heritage site and is famous for its 13th-century town wall and well-preserved medieval architecture. The island's landscape is defined by unique limestone formations called 'raukar' and beautiful sandy beaches. Geography K7."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Die 'Raukar' genannten Kalksteinformationen sind durch Erosion entstanden und bilden eine der markantesten Küstenlandschaften der Ostsee.", "Gotland war während der Wikingerzeit ein zentraler Ort für Fernhandel und Silberhortung, was heute zu zahlreichen archäologischen Funden führt.", "Über die Insel verteilt stehen 92 mittelalterliche Kirchen, die den enormen Reichtum Gotlands im Mittelalter bezeugen."],
      hu: [],
      ro: ["Formațiunile de calcar numite „raukar” au fost create prin eroziune, formând unul dintre cele mai distincte peisaje de coastă din Marea Baltică.", "Gotland a fost un centru vital pentru comerțul la distanță și tezaurizarea argintului în epoca vikingilor, ceea ce duce astăzi la numeroase descoperiri arheologice.", "Pe insulă există 92 de biserici medievale, care atestă bogăția imensă a Gotlandului în perioada medievală."],
      en: [
        "The limestone formations called 'raukar' were created by erosion, forming one of the most distinctive coastal landscapes in the Baltic Sea.",
        "Gotland was a central place for long-distance trade and silver hoarding during the Viking Age, which leads to numerous archaeological findings today.",
        "Spread across the island are 92 medieval churches, which attest to Gotland's enormous wealth in the Middle Ages."
      ]
    },
    image: "/geo-images/sweden/gotland.webp",
  },
  {
    id: "se-laponia",
    type: "landmark",
    parent: "sweden",
    coords: [18.7, 67.3],
    name: { de: "Laponia-Region", hu: "Laponia régió", ro: "Regiunea Laponia", en: "Laponia Region" },
    description: {
      de: "Die Laponia-Region ist eine gewaltige arktische Wildnis und UNESCO-Welterbe, die Heimat des Volkes der Samen und ein Ort von außergewöhnlicher natürlicher Schönheit.",
      hu: "Laponia vidéke egy hatalmas arktikus vadon és UNESCO Világörökség, a számi nép otthona és rendkívüli természeti szépségű terület.",
      ro: "Regiunea Laponia este o vastă sălbăticie arctică și sit UNESCO, casa poporului Sámi și un loc de o frumusețe naturală extraordinară.",
      en: "The Laponia region is a vast Arctic wilderness and UNESCO World Heritage site, home to the Sámi people and a place of extraordinary natural beauty."
    },
    descriptionAdvanced: {
      de: "Das Gebiet Laponia in Schwedisch-Lappland ist eine gewaltige Wildnis und UNESCO-Weltkulturerbe, das sowohl für seine natürliche Schönheit als auch für seine kulturelle Bedeutung anerkannt ist. Es ist die Heimat der Samen, die hier seit Jahrhunderten traditionelle Rentierzucht betreiben. Die Region umfasst vier Nationalparks und zwei Naturschutzgebiete mit spektakulären Bergen, Gletschern und alten Wäldern. Geografie K8.",
      hu: "",
      ro: "Regiunea Laponia din nordul Suediei este o vastă sălbăticie și sit UNESCO, recunoscută atât pentru frumusețea sa naturală, cât și pentru semnificația culturală. Este patria poporului Sámi, care practică aici de secole creșterea tradițională a renilor. Regiunea include patru parcuri naționale și două rezervații naturale, cu munți spectaculoși, ghețari și păduri străvechi. Geografie K8.",
      en: "The Laponia area in Swedish Lapland is a vast wilderness and UNESCO World Heritage site, recognized for both its natural beauty and cultural significance. It is home to the Sámi people, who have practiced traditional reindeer herding here for centuries. The region includes four national parks and two nature reserves with spectacular mountains, glaciers, and ancient forests. Geography K8."
    },
    facts: {
      en: [], de: [], hu: [], ro: []
    },
    factsAdvanced: {
      de: ["Laponia umfasst eine Gesamtfläche von über 9.400 Quadratkilometern und ist damit eines der größten zusammenhängenden Wildnisgebiete Europas.", "Die Rentierzucht der Samen ist ein integraler Bestandteil der Kultur in Lappland und wird durch jahrtausendealte Wissenstraditionen gepflegt.", "Die Region bietet Lebensraum für eine Vielzahl von arktischen Tieren, darunter Elche, Rentiere, Vielfraße und seltene Vogelarten."],
      hu: [],
      ro: ["Laponia acoperă o suprafață totală de peste 9.400 de kilometri pătrați, fiind una dintre cele mai mari zone sălbatice continue din Europa.", "Creșterea renilor de către poporul Sámi este o parte integrantă a culturii din Laponia, păstrată prin tradiții milenare.", "Regiunea oferă habitat pentru numeroase animale arctice, inclusiv elani, reni, wolverini și specii rare de păsări."],
      en: [
        "Laponia covers a total area of over 9,400 square kilometers, making it one of the largest contiguous wilderness areas in Europe.",
        "Reindeer herding by the Sámi is an integral part of Lapland's culture and is maintained through thousands of years of traditional knowledge.",
        "The region provides habitat for a variety of Arctic animals, including moose, reindeer, wolverines, and rare bird species."
      ]
    },
    image: "/geo-images/sweden/laponia-unesco.webp",
  }
];

export const swedenAllPoi: POI[] = [swedenCountry, ...swedenRegions, ...swedenCities, ...swedenCulture, ...swedenNature];

