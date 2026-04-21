import type { POI } from "./poi";

export const portugalCountry: POI = {
  id: "portugal",
  type: "country",
  parent: "EU",
  coords: [-8.2245, 39.3999],
  name: { de: "Portugal", hu: "Portugália", ro: "Portugalia", en: "Portugal" },
  description: {
    en: "Portugal is a coastal country in Southwestern Europe, located on the Iberian Peninsula. It is known for its rich maritime history, stunning Atlantic coastline, and vibrant culture. As one of the oldest nations in Europe, it boasts a wealth of historic sites, from Roman ruins to Moorish castles and Manueline architecture. Portugal is famous for its Fado music, world-class wines like Port, and delicious seafood. Its diverse landscape includes the lush green valleys of the north, the rolling plains of the Alentejo, and the sun-drenched beaches of the Algarve.",
    de: "Portugal ist ein Küstenland in Südwesteuropa auf der Iberischen Halbinsel. Es ist bekannt für seine reiche Seefahrtsgeschichte, die atemberaubende Atlantikküste und eine lebendige Kultur. Als eine der ältesten Nationen Europas verfügt es über eine Fülle historischer Stätten, von römischen Ruinen über maurische Burgen bis hin zur manuelinischen Architektur. Portugal ist berühmt für seine Fado-Musik, erstklassige Weine wie Portwein und köstliche Meeresfrüchte. Seine vielfältige Landschaft umfasst die üppigen grünen Täler des Nordens, die sanften Ebenen des Alentejo und die sonnenverwöhnten Strände der Algarve.",
    hu: "Portugália egy tengerparti ország Délnyugat-Európában, az Ibériai-félszigeten. Gazdag tengeri történelméről, lenyűgöző atlanti-óceáni partvidékéről és vibráló kultúrájáról ismert. Európa egyik legrégebbi nemzeteként rengeteg történelmi helyszínnel büszkélkedhet, a római romoktól a mór várakon át a mánuel stílusú építészetig. Portugália híres a fado zenéről, a világszínvonalú borokról, mint a portói, és az ízletes tengeri ételekről. Változatos tájai közé tartoznak az északi buja zöld völgyek, az Alentejo lankás síkságai és az Algarve napsütötte strandjai.",
    ro: "Portugalia este o țară de coastă din sud-vestul Europei, situată în Peninsula Iberică. Este cunoscută pentru istoria sa maritimă bogată, coasta atlantică uimitoare și cultura vibrantă. Fiind una dintre cele mai vechi națiuni din Europa, se mândrește cu o multitudine de situri istorice, de la ruine romane la castele maure și arhitectură manuelină. Portugalia este faimoasă pentru muzica Fado, vinurile de talie mondială precum Portul și fructele de mare delicioase. Peisajul său divers include văile verzi luxuriante din nord, câmpiile ondulate din Alentejo și plajele însorite din Algarve."
  },
  facts: {
    en: [
      "Portugal is the oldest country in Europe with the same borders since 1139.",
      "Portuguese is the official language of nine countries.",
      "The country is the world's largest producer of cork.",
      "Lisbon is older than Rome, dating back to around 1200 BC.",
      "The Vasco da Gama Bridge in Lisbon is one of the longest in Europe.",
      "Portugal was the first colonial power to abolish slavery.",
      "The University of Coimbra, established in 1290, is one of the oldest in the world.",
      "Portugal has the largest solar farm in Europe."
    ],
    de: [
      "Portugal ist das älteste Land Europas mit denselben Grenzen seit 1139.",
      "Portugiesisch ist die Amtssprache in neun Ländern.",
      "Das Land ist der weltweit größte Produzent von Kork.",
      "Lissabon ist älter als Rom und geht auf die Zeit um 1200 v. Chr. zurück.",
      "Die Vasco-da-Gama-Brücke in Lissabon ist eine der längsten Europas.",
      "Portugal war die erste Kolonialmacht, die die Sklaverei abschaffte.",
      "Die Universität Coimbra, gegründet 1290, ist eine der ältesten der Welt.",
      "Portugal besitzt den größten Solarpark Europas."
    ],
    hu: [
      "Portugália Európa legrégebbi országa, határai 1139 óta változatlanok.",
      "A portugál kilenc ország hivatalos nyelve.",
      "Az ország a világ legnagyobb parafa-termelője.",
      "Lisszabon régebbi, mint Róma, alapítása i. e. 1200 körülre tehető.",
      "A lisszaboni Vasco da Gama híd Európa egyik leghosszabb hídja.",
      "Portugália volt az első gyarmattartó hatalom, amely eltörölte a rabszolgaságot.",
      "Az 1290-ben alapított Coimbrai Egyetem a világ egyik legrégebbi egyeteme.",
      "Portugáliában található Európa legnagyobb naperőműve."
    ],
    ro: [
      "Portugalia este cea mai veche țară din Europa cu aceleași granițe din 1139.",
      "Portugheza este limba oficială în nouă țări.",
      "Țara este cel mai mare producător de plută din lume.",
      "Lisabona este mai veche decât Roma, datând din jurul anului 1200 î.Hr.",
      "Podul Vasco da Gama din Lisabona este unul dintre cele mai lungi din Europa.",
      "Portugalia a fost prima putere colonială care a abolit sclavie.",
      "Universitatea din Coimbra, înființată în 1290, este una dintre cele mai vechi din lume.",
      "Portugalia are cea mai mare fermă solară din Europa."
    ]
  },
  image: "/geo-images/portugal/portugal-main.webp",
};

export const portugalRegions: POI[] = [
  {
    id: "city-lisbon",
    type: "city",
    parent: "portugal",
    coords: [-9.1393, 38.7223],
    name: { de: "Lissabon", hu: "Lisszabon", ro: "Lisabona", en: "Lisbon" },
    description: {
      en: "Lisbon is the stunning capital of Portugal, built on seven hills overlooking the Tagus River. It is a city of contrasts, where historic neighborhoods like Alfama meet modern architecture and a thriving tech scene. Known for its yellow trams, tiled facades, and melancholic Fado music, Lisbon offers a unique atmosphere. Visitors can explore grand monuments, enjoy panoramic views from numerous 'miradouros', and taste the famous Pastéis de Belém.",
      de: "Lissabon ist die beeindruckende Hauptstadt Portugals, erbaut auf sieben Hügeln mit Blick auf den Tejo. Es ist eine Stadt der Kontraste, in der historische Viertel wie Alfama auf moderne Architektur und eine florierende Tech-Szene treffen. Bekannt für seine gelben Straßenbahnen, gefliesten Fassaden und die melancholische Fado-Musik, bietet Lissabon eine einzigartige Atmosphäre. Besucher können prächtige Denkmäler erkunden, Panoramablicke von zahlreichen 'Miradouros' genießen und die berühmten Pastéis de Belém probieren.",
      hu: "Lisszabon Portugália lenyűgöző fővárosa, amely hét dombra épült a Tejo-folyó partján. Az ellentétek városa, ahol az olyan történelmi negyedek, mint az Alfama, találkoznak a modern építészettel és a virágzó technológiai szférával. Sárga villamosairól, csempézett homlokzatairól és melankolikus fado zenéjéről ismert Lisszabon egyedülálló hangulatot áraszt. A látogatók felfedezhetik a nagyszerű műemlékeket, élvezhetik a panorámát a számos 'miradouro'-ról, és megkóstolhatják a híres Pastéis de Belém-et.",
      ro: "Lisabona este capitala uimitoare a Portugaliei, construită pe șapte dealuri cu vedere la râul Tagus. Este un oraș al contrastelor, unde cartierele istorice precum Alfama se întâlnesc cu arhitectura modernă și o scenă tehnologică înfloritoare. Cunoscută pentru tramvaiele sale galbene, fațadele cu plăci ceramice și muzica melancolică Fado, Lisabona oferă o atmosferă unică. Vizitatorii pot explora monumente grandioase, se pot bucura de vederi panoramice de la numeroasele 'miradouros' și pot gusta faimoasele Pastéis de Belém."
    },
    facts: {
      en: ["Lisbon is one of the oldest cities in the world.","The city was almost completely destroyed by an earthquake in 1755.","The iconic Tram 28 is a popular way to see the historic districts.","Lisbon's oceanarium is one of the largest in Europe."],
      de: ["Lissabon ist eine der ältesten Städte der Welt.","Die Stadt wurde 1755 durch ein Erdbeben fast vollständig zerstört.","Die ikonische Straßenbahn 28 ist eine beliebte Art, die historischen Viertel zu sehen.","Das Ozeanarium von Lissabon ist eines der größten in Europa."],
      hu: ["Lisszabon a világ egyik legrégebbi városa.","A várost 1755-ben egy földrengés szinte teljesen elpusztította.","Az ikonikus 28-as villamos népszerű módja a történelmi negyedek megtekintésének.","Lisszabon óceanáriuma az egyik legnagyobb Európában."],
      ro: ["Lisabona este unul dintre cele mai vechi orașe din lume.","Orașul a fost aproape complet distrus de un cutremur în 1755.","Iconicul tramvai 28 este o modalitate populară de a vedea districtele istorice.","Oceanariul din Lisabona este unul dintre cele mai mari din Europa."]
    },
    image: "/geo-images/portugal/lisbon.webp",
  },
  {
    id: "city-porto",
    type: "city",
    parent: "portugal",
    coords: [-8.6291, 41.1579],
    name: { de: "Porto", hu: "Porto", ro: "Porto", en: "Porto" },
    description: {
      en: "Porto is the second-largest city in Portugal, located along the Douro River estuary in Northern Portugal. It is famous for its production of Port wine, which is stored in the vast cellars of Vila Nova de Gaia. The city's historic center, Ribeira, is a UNESCO World Heritage site known for its narrow cobbled streets and colorful houses. Porto is also home to stunning bridges, such as the Dom Luís I Bridge, and beautiful churches decorated with blue azulejos.",
      de: "Porto ist die zweitgrößte Stadt Portugals und liegt an der Mündung des Douro im Norden des Landes. Sie ist berühmt für die Herstellung von Portwein, der in den riesigen Kellern von Vila Nova de Gaia gelagert wird. Das historische Zentrum der Stadt, Ribeira, ist ein UNESCO-Weltkulturerbe, bekannt für seine engen Kopfsteinpflastergassen und bunten Häuser. Porto beherbergt auch beeindruckende Brücken wie die Dom-Luís-I-Brücke und wunderschöne Kirchen, die mit blauen Azulejos verziert sind.",
      hu: "Porto Portugália második legnagyobb városa, a Douro-folyó torkolatánál fekszik Észak-Portugáliában. Híres a portói bor termeléséről, amelyet Vila Nova de Gaia hatalmas pincéiben tárolnak. A város történelmi központja, a Ribeira, az UNESCO Világörökség része, szűk macskaköves utcáiról és színes házairól ismert. Porto lenyűgöző hidaknak is otthont ad, mint például a Dom Luís I. híd, valamint gyönyörű, kék azulejókkal díszített templomoknak.",
      ro: "Porto este al doilea oraș ca mărime din Portugalia, situat de-a lungul estuarului râului Douro în nordul Portugaliei. Este faimos pentru producția de vin de Porto, care este depozitat în vastele pivnițe din Vila Nova de Gaia. Centrul istoric al orașului, Ribeira, este un sit al Patrimoniului Mondial UNESCO, cunoscut pentru străzile sale înguste cu piatră cubică și casele colorate. Porto găzduiește, de asemenea, poduri uimitoare, cum ar fi Podul Dom Luís I, și biserici frumoase decorate cu azulejos albastre."
    },
    facts: {
      en: ["The city gave its name to Portugal and Port wine.","Livraria Lello is often cited as one of the most beautiful bookstores in the world.","The São Bento Railway Station is famous for its tile panels.","Porto's traditional dish is the Francesinha sandwich."],
      de: ["Die Stadt gab Portugal und dem Portwein ihren Namen.","Die Livraria Lello wird oft als eine der schönsten Buchhandlungen der Welt bezeichnet.","Der Bahnhof São Bento ist berühmt für seine Kachelpaneele.","Portos traditionelles Gericht ist das Francesinha-Sandwich."],
      hu: ["A város adta a nevét Portugáliának és a portói bornak.","A Livraria Lello-t gyakran a világ egyik legszebb könyvesboltjaként emlegetik.","A São Bento vasútállomás híres csempepaneljeiről.","Porto hagyományos étele a Francesinha szendvics."],
      ro: ["Orașul a dat numele Portugaliei și vinului de Porto.","Livraria Lello este adesea citată ca fiind una dintre cele mai frumoase librării din lume.","Gara São Bento este faimoasă pentru panourile sale de faianță.","Mâncarea tradițională din Porto este sandvișul Francesinha."]
    },
    image: "/geo-images/portugal/porto.webp",
  },
  {
    id: "reg-algarve",
    type: "region",
    parent: "portugal",
    coords: [-7.93, 37.02],
    name: { de: "Algarve", hu: "Algarve", ro: "Algarve", en: "Algarve" },
    description: {
      en: "The Algarve is the southernmost region of mainland Portugal, famous for its Mediterranean climate, stunning limestone cliffs, and golden beaches. It is a popular tourist destination offering world-class golf courses, charming fishing villages, and vibrant nightlife. The region's coastline is dotted with sea caves, including the famous Benagil Cave. The Algarve also has a rich history, with Moorish influences visible in its architecture and local traditions.",
      de: "Die Algarve ist die südlichste Region des portugiesischen Festlandes, berühmt für ihr mediterranes Klima, beeindruckende Kalksteinfelsen und goldene Strände. Sie ist ein beliebtes Touristenziel mit erstklassigen Golfplätzen, charmanten Fischerdörfern und einem lebhaften Nachtleben. Die Küste der Region ist gespickt mit Meereshöhlen, darunter die berühmte Benagil-Höhle. Die Algarve hat auch eine reiche Geschichte, wobei maurische Einflüsse in der Architektur und den lokalen Traditionen sichtbar sind.",
      hu: "Az Algarve Portugália legdélebbi régiója, amely mediterrán éghajlatáról, lenyűgöző mészkőszikláiról és aranyló strandjairól híres. Népszerű turisztikai célpont, amely világszínvonalú golfpályákat, bájos halászfalvakat és vibráló éjszakai életet kínál. A régió partvidékét tengeri barlangok tarkítják, köztük a híres Benagil-barlang. Az Algarve gazdag történelemmel is rendelkezik, a mór hatások jól láthatóak építészetében és helyi hagyományaiban.",
      ro: "Algarve este regiunea cea mai sudică a Portugaliei continentale, faimoasă pentru climatul său mediteranean, stâncile uimitoare de calcar și plajele aurii. Este o destinație turistică populară care oferă terenuri de golf de talie mondială, sate de pescari fermecătoare și o viață de noapte vibrantă. Coasta regiunii este presărată cu peșteri marine, inclusiv faimoasa peșteră Benagil. Algarve are, de asemenea, o istorie bogată, cu influențe maure vizibile în arhitectura sa și în tradițiile locale."
    },
    facts: {
      en: ["Faro is the capital of the Algarve region.","The region is known for its almond and fig trees.","Sagres was the site of Prince Henry the Navigator's school of navigation.","The Algarve has some of the best surfing spots in Europe."],
      de: ["Faro ist die Hauptstadt der Region Algarve.","Die Region ist bekannt für ihre Mandel- und Feigenbäume.","Sagres war der Standort der Seefahrtsschule von Heinrich dem Seefahrer.","Die Algarve bietet einige der besten Surfspots in Europa."],
      hu: ["Faro az Algarve régió fővárosa.","A régió mandula- és fügefáiról ismert.","Sagresben volt Tengerész Henrik navigációs iskolája.","Az Algarve rendelkezik Európa legjobb szörfhelyeivel."],
      ro: ["Faro este capitala regiunii Algarve.","Regiunea este cunoscută pentru migdalii și smochinii săi.","Sagres a fost locul școlii de navigație a Prințului Henric Navigatorul.","Algarve are unele dintre cele mai bune locuri de surf din Europa."]
    },
    image: "/geo-images/portugal/algarve.webp",
  }
];

export const portugalCulture: POI[] = [
  {
    id: "cult-belem-tower",
    type: "landmark",
    parent: "city-lisbon",
    coords: [-9.2159, 38.6916],
    name: { de: "Turm von Belém", hu: "Belém-torony", ro: "Turnul Belém", en: "Belém Tower" },
    description: {
      en: "The Belém Tower is a 16th-century fortification located in Lisbon that served as a ceremonial gateway to the city and a defense system for the Tagus River. It is a masterpiece of the Manueline style, incorporating maritime elements and intricate stone carvings. As a UNESCO World Heritage site, it is a symbol of Portugal's Age of Discovery, from where many explorers set sail to find new worlds.",
      de: "Der Turm von Belém ist eine Befestigungsanlage aus dem 16. Jahrhundert in Lissabon, die als zeremonielles Tor zur Stadt und als Verteidigungssystem für den Tejo diente. Er ist ein Meisterwerk des manuelinischen Stils und enthält maritime Elemente sowie kunstvolle Steinmetzarbeiten. Als UNESCO-Weltkulturerbe ist er ein Symbol für das Zeitalter der Entdeckungen Portugals, von dem aus viele Entdecker in See stachen, um neue Welten zu finden.",
      hu: "A Belém-torony egy 16. századi erődítmény Lisszabonban, amely a város ünnepélyes kapujaként és a Tejo-folyó védelmi rendszereként szolgált. A mánuel stílus remekműve, tengeri elemeket és bonyolult kőfaragásokat ötvöz. UNESCO Világörökségi helyszínként a portugál felfedezések korának szimbóluma, ahonnan számos felfedező indult útnak új világok felkutatására.",
      ro: "Turnul Belém este o fortificație din secolul al XVI-lea situată în Lisabona, care a servit ca poartă ceremonială a orașului și sistem de apărare pentru râul Tagus. Este o capodoperă a stilului manuelin, încorporând elemente maritime și sculpturi complicate în piatră. Ca sit al Patrimoniului Mondial UNESCO, este un simbol al Epocii Descoperirilor din Portugalia, de unde mulți exploratori au pornit la drum pentru a găsi lumi noi."
    },
    facts: {
      en: ["It was built between 1514 and 1520.","The tower is made of lioz limestone.","It features the first stone carving of a rhinoceros in Europe.","The tower has four stories and a terrace."],
      de: ["Er wurde zwischen 1514 und 1520 erbaut.","Der Turm besteht aus Lioz-Kalkstein.","Er zeigt die erste Steinmetzarbeit eines Nashorns in Europa.","Der Turm hat vier Stockwerke und eine Terrasse."],
      hu: ["1514 és 1520 között épült.","A torony lioz mészkőből készült.","Itt található az első orrszarvút ábrázoló kőfaragás Európában.","A torony négy emelettel és egy terasszal rendelkezik."],
      ro: ["A fost construit între 1514 și 1520.","Turnul este realizat din calcar lioz.","Prezintă prima sculptură în piatră a unui rinocer din Europa.","Turnul are patru etaje și o terasă."]
    },
    image: "/geo-images/portugal/belem-tower.webp",
  },
  {
    id: "cult-sintra",
    type: "landmark",
    parent: "portugal",
    coords: [-9.3906, 38.7993],
    name: { de: "Sintra", hu: "Sintra", ro: "Sintra", en: "Sintra" },
    description: {
      en: "Sintra is a picturesque town located in the foothills of the Sintra Mountains, near Lisbon. It is famous for its Romanticist palaces, historic estates, and lush gardens. The town's most iconic landmark is the colorful Pena Palace, which sits atop a hill and offers breathtaking views. Sintra's unique microclimate and mystical atmosphere have inspired poets and writers for centuries, making it a UNESCO World Heritage cultural landscape.",
      de: "Sintra ist eine malerische Stadt in den Ausläufern des Sintra-Gebirges in der Nähe von Lissabon. Sie ist berühmt für ihre romantischen Paläste, historischen Anwesen und üppigen Gärten. Das bekannteste Wahrzeichen der Stadt ist der farbenfrohe Palácio Nacional da Pena, der auf einem Hügel thront und atemberaubende Ausblicke bietet. Sintras einzigartiges Mikroklima und seine mystische Atmosphäre haben Dichter und Schriftsteller über Jahrhunderte inspiriert und es zu einer UNESCO-Weltkulturerbe-Kulturlandschaft gemacht.",
      hu: "Sintra egy festői város a Sintra-hegység lábánál, Lisszabon közelében. Romantikus palotáiról, történelmi birtokairól és buja kertjeiről híres. A város legikonikusabb látnivalója a színes Pena-palota, amely egy dombtetőn ülve lélegzetelállító kilátást nyújt. Sintra egyedülálló mikroklímája és misztikus hangulata évszázadok óta inspirálja a költőket és írókat, így az UNESCO Világörökség részét képező kultúrtáj.",
      ro: "Sintra este un oraș pitoresc situat la poalele Munților Sintra, lângă Lisabona. Este faimos pentru palatele sale romantice, proprietățile istorice și grădinile luxuriante. Cel mai iconic punct de reper al orașului este coloratul Palat Pena, care se află pe vârful unui deal și oferă vederi uluitoare. Microclimatul unic și atmosfera mistică din Sintra au inspirat poeți și scriitori timp de secole, făcându-l un peisaj cultural al Patrimoniului Mondial UNESCO."
    },
    facts: {
      en: ["Pena Palace is one of the Seven Wonders of Portugal.","The Quinta da Regaleira is known for its mystical initiation wells.","Sintra was a longtime royal sanctuary.","The Moorish Castle offers views of the Atlantic coast."],
      de: ["Der Palácio da Pena ist eines der sieben Wunder Portugals.","Die Quinta da Regaleira ist bekannt für ihre mystischen Einweihungsbrunnen.","Sintra war lange Zeit ein königlicher Zufluchtsort.","Die maurische Burg bietet Ausblicke auf die Atlantikküste."],
      hu: ["A Pena-palota Portugália hét csodájának egyike.","A Quinta da Regaleira misztikus beavatási kútjairól ismert.","Sintra sokáig királyi menedékhely volt.","A Mór vár kilátást nyújt az atlanti partvidékre."],
      ro: ["Palatul Pena este una dintre cele Șapte Minuni ale Portugaliei.","Quinta da Regaleira este cunoscută pentru fântânile sale mistice de inițiere.","Sintra a fost mult timp un sanctuar regal.","Castelul Maur oferă vederi ale coastei atlantice."]
    },
    image: "/geo-images/portugal/sintra.webp",
  },
  {
    id: "cult-jeronimos",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.2057, 38.6978],
    name: { de: "Hieronymus-Kloster", hu: "Jerónimos kolostor", ro: "Mănăstirea Jerónimos", en: "Jerónimos Monastery" },
    description: {
      de: "Das Hieronymus-Kloster in Lissabon ist ein herausragendes Beispiel der manuelinischen Architektur. Als UNESCO-Welterbe symbolisiert es den Reichtum Portugals während des Zeitalters der Entdeckungen.",
      hu: "A lisszaboni Jerónimos kolostor a mánuel stílusú építészet kiemelkedő példája. UNESCO világörökségi helyszínként Portugália gazdagságát jelképezi a felfedezések korában.",
      ro: "Mănăstirea Jerónimos din Lisabona este un exemplu remarcabil de arhitectură manuelină. Ca sit UNESCO, simbolizează bogăția Portugaliei în timpul Epocii Descoperirilor.",
      en: "The Jerónimos Monastery in Lisbon is an outstanding example of Manueline architecture. As a UNESCO World Heritage site, it symbolizes Portugal's wealth during the Age of Discovery."
    },
    facts: {
      de: ["Das Kloster wurde 1501 begonnen.", "Vasco da Gama ist hier begraben.", "Es wurde aus goldenem Kalkstein erbaut.", "Das Kloster überstand das Erdbeben von 1755 fast unbeschadet.", "Der Kreuzgang gilt als einer der schönsten der Welt."],
      hu: ["A kolostor építését 1501-ben kezdték el.", "Vasco da Gama itt van eltemetve.", "Aranybarna mészkőből épült.", "A kolostor szinte sértetlenül túlélte az 1755-ös földrengést.", "A kolostor udvara a világ egyik legszebbjének számít."],
      ro: ["Construcția mănăstirii a început în 1501.", "Vasco da Gama este înmormântat aici.", "A fost construită din calcar auriu.", "Mănăstirea a supraviețuit aproape intactă cutremurului din 1755.", "Cloastrul este considerat unul dintre cele mai frumoase din lume."],
      en: ["Construction of the monastery began in 1501.", "Vasco da Gama is buried here.", "It was built from golden limestone.", "The monastery survived the 1755 earthquake almost undamaged.", "The cloister is considered one of the most beautiful in the world."]
    },
    image: "/geo-images/portugal/cult-jeronimos.webp"
  },
  {
    id: "cult-torre-belem",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.2159, 38.6916],
    name: { de: "Turm von Belém", hu: "Torre de Belém", ro: "Turnul Belém", en: "Belém Tower" },
    description: {
      de: "Der Turm von Belém ist ein Festungsturm im manuelinischen Stil in Lissabon. Er diente als Ausgangspunkt für viele Entdeckungsreisen und ist heute ein Wahrzeichen der Stadt.",
      hu: "A Belém-torony egy mánuel stílusú erődtorony Lisszabonban. Számos felfedezőút kiindulópontjaként szolgált, és ma a város egyik jelképe.",
      ro: "Turnul Belém este un turn fortificat în stil manuelin din Lisabona. A servit ca punct de plecare pentru multe călătorii de descoperire și este astăzi un simbol al orașului.",
      en: "The Belém Tower is a Manueline-style fortified tower in Lisbon. It served as the starting point for many voyages of discovery and is now a landmark of the city."
    },
    facts: {
      de: ["Der Turm wurde im 16. Jahrhundert erbaut.", "Er war ursprünglich von Wasser umgeben.", "Der Turm ist reich an maritimen Verzierungen.", "Er gehört zum UNESCO-Welterbe.", "Er diente auch als Gefängnis."],
      hu: ["A torony a 16. században épült.", "Eredetileg teljesen víz vette körül.", "A torony gazdagon díszített tengeri motívumokkal.", "Az UNESCO világörökség része.", "Börtönként is szolgált."],
      ro: ["Turnul a fost construit în secolul al XVI-lea.", "Inițial era complet înconjurat de apă.", "Turnul este bogat decorat cu motive maritime.", "Face parte din patrimoniul UNESCO.", "A servit și ca închisoare."],
      en: ["The tower was built in the 16th century.", "It was originally completely surrounded by water.", "The tower is richly decorated with maritime motifs.", "It is part of the UNESCO World Heritage.", "It also served as a prison."]
    },
    image: "/geo-images/portugal/cult-torre-belem.webp"
  },
  {
    id: "cult-batalha",
    type: "landmark",
    parent: "portugal",
    coords: [-8.8254, 39.6599],
    name: { de: "Kloster Batalha", hu: "Batalha kolostor", ro: "Mănăstirea Batalha", en: "Batalha Monastery" },
    description: {
      de: "Das Kloster Batalha ist ein Meisterwerk der portugiesischen Gotik und des Manuelismus. Es wurde zum Gedenken an den Sieg Portugals über Kastilien in der Schlacht von Aljubarrota errichtet.",
      hu: "A Batalha kolostor a portugál gótika és a mánuel stílus remekműve. Az Aljubarrotai csatában Kasztília felett aratott portugál győzelem emlékére épült.",
      ro: "Mănăstirea Batalha este o capodoperă a goticului portughez și a stilului manuelin. A fost construită pentru a comemora victoria Portugaliei asupra Castiliei în bătălia de la Aljubarrota.",
      en: "The Batalha Monastery is a masterpiece of Portuguese Gothic and Manueline style. It was built to commemorate the Portuguese victory over Castile in the Battle of Aljubarrota."
    },
    facts: {
      de: ["Der offizielle Name ist Kloster Santa Maria da Vitória.", "Die Bauzeit betrug über 150 Jahre.", "Die 'Unvollendeten Kapellen' sind besonders berühmt.", "Es ist ein UNESCO-Welterbe.", "Das Grab von Heinrich dem Seefahrer befindet sich hier."],
      hu: ["Hivatalos neve Santa Maria da Vitória kolostor.", "Az építkezés több mint 150 évig tartott.", "A 'Befejezetlen kápolnák' különösen híresek.", "Az UNESCO világörökség része.", "Itt található Tengerész Henrik sírja."],
      ro: ["Numele oficial este Mănăstirea Santa Maria da Vitória.", "Construcția a durat peste 150 de ani.", "'Capela Neterminată' este deosebit de faimoasă.", "Este un sit UNESCO.", "Mormântul lui Henric Navigatorul se află aici."],
      en: ["The official name is Monastery of Santa Maria da Vitória.", "Construction lasted over 150 years.", "The 'Unfinished Chapels' are particularly famous.", "It is a UNESCO World Heritage site.", "The tomb of Henry the Navigator is located here."]
    },
    image: "/geo-images/portugal/cult-batalha.webp"
  },
  {
    id: "cult-guimaraes",
    type: "landmark",
    parent: "portugal",
    coords: [-8.2908, 41.4412],
    name: { de: "Guimarães Altstadt", hu: "Guimarães óváros", ro: "Orașul vechi Guimarães", en: "Guimarães Old Town" },
    description: {
      de: "Die historische Altstadt von Guimarães gilt als die 'Wiege der Nation' Portugals. Die mittelalterlichen Gassen und das markante Schloss sind Symbole der Entstehung des portugiesischen Königreichs.",
      hu: "Guimarães történelmi óvárosa Portugália 'bölcsőjeként' ismert. A középkori utcák és a jellegzetes vár a portugál királyság születésének szimbólumai.",
      ro: "Orașul vechi istoric din Guimarães este considerat 'leagănul națiunii' portugheze. Străzile medievale și castelul distinctiv sunt simboluri ale nașterii regatului portughez.",
      en: "The historic old town of Guimarães is known as the 'cradle of the nation' of Portugal. The medieval streets and the striking castle are symbols of the birth of the Portuguese kingdom."
    },
    facts: {
      de: ["Hier wurde der erste König Portugals, Afonso Henriques, geboren.", "Das Zentrum gehört zum UNESCO-Welterbe.", "Guimarães war die erste Hauptstadt Portugals.", "An einer Stadtmauer steht: 'Hier wurde Portugal geboren'.", "Die Stadt bewahrt eine authentische mittelalterliche Atmosphäre."],
      hu: ["Itt született Portugália első királya, I. Alfonz.", "A városközpont az UNESCO világörökség része.", "Guimarães volt Portugália első fővárosa.", "Az egyik városfalon ez áll: 'Itt született Portugália'.", "A város autentikus középkori hangulatot áraszt."],
      ro: ["Aici s-a născut primul rege al Portugaliei, Afonso Henriques.", "Centrul face parte din patrimoniul UNESCO.", "Guimarães a fost prima capitală a Portugaliei.", "Pe un zid al orașului scrie: 'Aici s-a născut Portugalia'.", "Orașul păstrează o atmosferă medievală autentică."],
      en: ["The first king of Portugal, Afonso Henriques, was born here.", "The center is part of the UNESCO World Heritage.", "Guimarães was the first capital of Portugal.", "A city wall states: 'Portugal was born here'.", "The city preserves an authentic medieval atmosphere."]
    },
    image: "/geo-images/portugal/cult-guimaraes.webp"
  },
  {
    id: "cult-pena",
    type: "landmark",
    parent: "cult-sintra",
    coords: [-9.3905, 38.7876],
    name: { de: "Pena-Palast", hu: "Pena palota Sintra", ro: "Palatul Pena", en: "Pena Palace" },
    description: {
      de: "Der Palácio Nacional da Pena in Sintra ist eines der besten Beispiele für den Romantikstil des 19. Jahrhunderts. Mit seinen bunten Farben und der Lage auf einem Berggipfel wirkt er wie aus einem Märchen.",
      hu: "A sintrai Pena palota a 19. századi romantika egyik legszebb példája. Élénk színeivel és hegytetőn való elhelyezkedésével olyan, mintha egy meséből lépett volna elő.",
      ro: "Palatul Pena din Sintra este unul dintre cele mai bune exemple de romantism din secolul al XIX-lea. Cu culorile sale vii și locația pe vârful muntelui, pare desprins dintr-un basm.",
      en: "The Pena Palace in Sintra is one of the finest examples of 19th-century Romanticism. With its bright colors and mountaintop location, it looks like something out of a fairy tale."
    },
    facts: {
      de: ["Der Palast wurde auf den Ruinen eines Klosters erbaut.", "Er wurde von König Ferdinand II. in Auftrag gegeben.", "Die Farben markieren verschiedene Bereiche des Palastes.", "Er ist von einem weitläufigen Park umgeben.", "Der Palast gehört zu den Sieben Wundern Portugals."],
      hu: ["A palota egy kolostor romjaira épült.", "II. Ferdinánd király rendelte meg az építését.", "A színek a palota különböző részeit jelölik.", "Egy hatalmas park veszi körül.", "A palota Portugália hét csodájának egyike."],
      ro: ["Palatul a fost construit pe ruinele unei mănăstiri.", "A fost comandat de regele Ferdinand al II-lea.", "Culorile marchează diferite zone ale palatului.", "Este înconjurat de un parc vast.", "Palatul face parte din Cele Șapte Minuni ale Portugaliei."],
      en: ["The palace was built on the ruins of a monastery.", "It was commissioned by King Ferdinand II.", "The colors mark different areas of the palace.", "It is surrounded by a vast park.", "The palace is one of the Seven Wonders of Portugal."]
    },
    image: "/geo-images/portugal/cult-pena.webp"
  },
  {
    id: "cult-alcobaca",
    type: "landmark",
    parent: "portugal",
    coords: [-8.98, 39.548],
    name: { de: "Kloster Alcobaça", hu: "Alcobaça kolostor", ro: "Mănăstirea Alcobaça", en: "Alcobaça Monastery" },
    description: {
      de: "Das Kloster Alcobaça ist ein UNESCO-gelistetes Zisterzienserkloster und eines der wichtigsten mittelalterlichen Denkmäler Portugals. Es ist berühmt für die Gräber von Pedro und Inês.",
      hu: "Az Alcobaça kolostor egy UNESCO-listás ciszterci kolostor és Portugália egyik legfontosabb középkori műemléke. Pedro és Inês síremlékeiről híres.",
      ro: "Mănăstirea Alcobaça este o mănăstire cisterciană inclusă în UNESCO și unul dintre cele mai importante monumente medievale ale Portugaliei. Este celebră pentru mormintele lui Pedro și Inês.",
      en: "The Alcobaça Monastery is a UNESCO-listed Cistercian monastery and one of Portugal's most important medieval monuments. It is famous for the tombs of Pedro and Inês."
    },
    facts: {
      de: ["Sie wurde im 12. Jahrhundert gegründet.", "Die Kirche ist ein Beispiel für klare Zisterzienserarchitektur.", "Pedro und Inês liegen hier begraben.", "Das Kloster gehört zum UNESCO-Welterbe."],
      hu: ["A 12. században alapították.", "A templom a letisztult ciszterci építészet példája.", "Pedro és Inês itt nyugszanak.", "A kolostor az UNESCO világörökség része."],
      ro: ["A fost fondată în secolul al XII-lea.", "Biserica este un exemplu de arhitectură cisterciană sobră.", "Pedro și Inês sunt înmormântați aici.", "Mănăstirea face parte din patrimoniul UNESCO."],
      en: ["It was founded in the 12th century.", "The church is a fine example of austere Cistercian architecture.", "Pedro and Inês are buried here.", "The monastery is part of the UNESCO World Heritage."]
    },
    image: "/geo-images/portugal/cult-alcobaca.webp"
  },
  {
    id: "cult-tomar",
    type: "landmark",
    parent: "portugal",
    coords: [-8.42, 39.604],
    name: { de: "Templerburg Tomar", hu: "Tomar templomos vár", ro: "Castelul templier din Tomar", en: "Tomar Templar Castle" },
    description: {
      de: "Die Templerburg von Tomar ist eng mit dem Orden der Tempelritter verbunden und gehört zum UNESCO-Welterbe. Die Anlage wurde ab 1160 entwickelt und später von den Johannitern ausgebaut.",
      hu: "A Tomar templomos vára szorosan kapcsolódik a templomos lovagrendhez, és az UNESCO világörökség része. Az erődítmény építése 1160 körül kezdődött, majd a johanniták bővítették tovább.",
      ro: "Castelul templier din Tomar este strâns legat de Ordinul Templierilor și face parte din patrimoniul UNESCO. Ansamblul a început să fie dezvoltat în jurul anului 1160, apoi a fost extins de ioaniți.",
      en: "The Tomar Templar Castle is closely linked to the Knights Templar and is part of the UNESCO World Heritage. The complex began to develop around 1160 and was later expanded by the Knights of Christ."
    },
    facts: {
      de: ["Es war eine wichtige Templerfestung in Portugal.", "Später übernahmen die Johanniter die Anlage.", "Das Convento de Cristo gehört zum UNESCO-Welterbe.", "Die Rotunde ist von der Grabeskirche inspiriert."],
      hu: ["Fontos templomos erőd volt Portugáliában.", "Később a johanniták vették át az erődöt.", "A Convento de Cristo az UNESCO világörökség része.", "A rotunda a Szent Sír-templomot idézi."],
      ro: ["A fost o fortăreață importantă a templierilor în Portugalia.", "Mai târziu, ioaniții au preluat ansamblul.", "Convento de Cristo face parte din patrimoniul UNESCO.", "Rotonda este inspirată de Biserica Sfântului Mormânt."],
      en: ["It was an important Templar fortress in Portugal.", "The Knights of Christ later took over the complex.", "The Convent of Christ is a UNESCO World Heritage site.", "The rotunda was inspired by the Church of the Holy Sepulchre."]
    },
    image: "/geo-images/portugal/cult-tomar.webp"
  },
  {
    id: "cult-pena-palace",
    type: "landmark",
    parent: "cult-sintra",
    coords: [-9.39, 38.787],
    name: { de: "Pena-Palast Sintra", hu: "Pena palota Sintra", ro: "Palatul Pena din Sintra", en: "Pena Palace, Sintra" },
    description: {
      de: "Der Pena-Palast in Sintra ist ein ikonisches Beispiel der romantischen Architektur des 19. Jahrhunderts. Seine farbigen Fassaden und die Lage auf einem Hügel machen ihn zu einem der bekanntesten Wahrzeichen Portugals.",
      hu: "A sintrai Pena palota a 19. századi romantikus építészet ikonikus példája. Színes homlokzatai és dombtetőn álló helyzete Portugália egyik legismertebb jelképévé teszik.",
      ro: "Palatul Pena din Sintra este un exemplu iconic de arhitectură romantică din secolul al XIX-lea. Fațadele sale colorate și amplasarea pe un deal îl fac unul dintre cele mai cunoscute repere ale Portugaliei.",
      en: "Pena Palace in Sintra is an iconic example of 19th-century Romantic architecture. Its colorful facades and hilltop setting make it one of Portugal's best-known landmarks."
    },
    facts: {
      de: ["Der Palast gehört zum UNESCO-Welterbe.", "Er ist ein Höhepunkt der Romantik in Portugal.", "Die kräftigen Farben sind weltberühmt.", "Er liegt hoch über der Stadt Sintra."],
      hu: ["A palota az UNESCO világörökség része.", "A romantika portugál csúcspontjai közé tartozik.", "Az élénk színei világhírűek.", "Magasan Sintra fölött emelkedik."],
      ro: ["Palatul face parte din patrimoniul UNESCO.", "Este un vârf al romantismului portughez.", "Culorile sale puternice sunt faimoase în întreaga lume.", "Se află deasupra orașului Sintra."],
      en: ["The palace is part of the UNESCO World Heritage.", "It is a peak example of Portuguese Romanticism.", "Its vivid colors are world-famous.", "It sits high above the town of Sintra."]
    },
    image: "/geo-images/portugal/cult-pena-palace.webp"
  },
  {
    id: "cult-livraria-lello",
    type: "landmark",
    parent: "city-porto",
    coords: [-8.615, 41.146],
    name: { de: "Livraria Lello", hu: "Livraria Lello Porto", ro: "Livraria Lello Porto", en: "Livraria Lello, Porto" },
    description: {
      de: "Die Livraria Lello in Porto ist eine neogotische Buchhandlung aus dem Jahr 1906. Ihr reich verziertes Interieur macht sie zu einem der bekanntesten literarischen Orte Portugals.",
      hu: "A portói Livraria Lello 1906-ból származó neogótikus könyvesbolt. Gazdagon díszített belső tere Portugália egyik legismertebb irodalmi helyszínévé teszi.",
      ro: "Livraria Lello din Porto este o librărie neogotică din 1906. Interiorul său bogat ornamentat o face unul dintre cele mai cunoscute locuri literare din Portugalia.",
      en: "Livraria Lello in Porto is a neo-Gothic bookstore from 1906. Its richly decorated interior makes it one of Portugal's most famous literary landmarks."
    },
    facts: {
      de: ["Die Buchhandlung wurde 1906 eröffnet.", "Sie ist für ihre spektakuläre Treppe bekannt.", "Sie wird oft mit Harry Potter in Verbindung gebracht.", "Sie zählt zu den schönsten Buchläden der Welt."],
      hu: ["A könyvesbolt 1906-ban nyílt meg.", "A látványos lépcsője híres.", "Gyakran hozzák összefüggésbe a Harry Potterrel.", "A világ egyik legszebb könyvesboltjai között tartják számon."],
      ro: ["Librăria a fost deschisă în 1906.", "Este cunoscută pentru scara sa spectaculoasă.", "Este adesea asociată cu Harry Potter.", "Este considerată una dintre cele mai frumoase librării din lume."],
      en: ["The bookstore opened in 1906.", "It is known for its spectacular staircase.", "It is often associated with Harry Potter.", "It is considered one of the world's most beautiful bookstores."]
    },
    image: "/geo-images/portugal/cult-livraria-lello.webp"
  },
  {
    id: "cult-capela-ossos",
    type: "landmark",
    parent: "portugal",
    coords: [-7.908, 38.569],
    name: { de: "Knochenkapelle Évora", hu: "Capela dos Ossos Évora", ro: "Capela dos Ossos din Évora", en: "Chapel of Bones, Évora" },
    description: {
      de: "Die Capela dos Ossos in Évora ist eine eindrucksvolle Knochenkapelle, deren Wände mit menschlichen Gebeinen verziert sind. Sie wurde von Franziskanern als Mahnung an die Vergänglichkeit des Lebens geschaffen.",
      hu: "Az Évorában található Capela dos Ossos egy megrázó csontkápolna, amelynek falait emberi maradványok díszítik. Ferences szerzetesek hozták létre az élet mulandóságára figyelmeztető emlékként.",
      ro: "Capela dos Ossos din Évora este o capelă a oaselor impresionantă, ale cărei pereți sunt decorați cu resturi umane. A fost creată de franciscani ca un memento al efemerității vieții.",
      en: "The Chapel of Bones in Évora is a striking bone chapel whose walls are decorated with human remains. It was created by Franciscans as a reminder of life's transience."
    },
    facts: {
      de: ["Die Kapelle befindet sich in der Kirche São Francisco.", "Ihre Wände sind mit Tausenden von Knochen geschmückt.", "Über dem Eingang steht eine eindringliche Warnung.", "Sie gehört zu den bekanntesten Sehenswürdigkeiten Évoras."],
      hu: ["A kápolna a São Francisco templomban található.", "Falait több ezer csont díszíti.", "A bejárat fölött egy erős figyelmeztetés olvasható.", "Évora egyik legismertebb látványossága."],
      ro: ["Capela se află în biserica São Francisco.", "Pereții ei sunt decorați cu mii de oase.", "Deasupra intrării există un avertisment puternic.", "Este una dintre cele mai cunoscute atracții din Évora."],
      en: ["The chapel is located inside the Church of São Francisco.", "Its walls are decorated with thousands of bones.", "There is a powerful warning above the entrance.", "It is one of Évora's best-known sights."]
    },
    image: "/geo-images/portugal/cult-capela-ossos.webp"
  }
  ,
  {
    id: "hist-obidos-castle",
    type: "historical",
    parent: "portugal",
    coords: [-9.1568, 39.3606],
    name: { de: "Burg Óbidos", hu: "Óbidos vára", ro: "Castelul Óbidos", en: "Obidos Castle" },
    description: {
      de: "Die Burg von Óbidos ist eines der bekanntesten mittelalterlichen Wahrzeichen Portugals. Die weiß getünchte Stadt und die Mauern bilden ein starkes historisches Ensemble. Besucher finden hier Burgtürme, Stadtmauern und enge Gassen mit viel Atmosphäre. Óbidos ist ein SEO-starker Name für Burgurlaub, Mittelalter und Zentralportugal.",
      hu: "Az Óbidos-i vár Portugália egyik legismertebb középkori jelképe. A fehérre meszelt város és a falak erős történelmi együttest alkotnak. A látogatók tornyokat, városfalakat és hangulatos szűk utcákat találnak itt. Óbidos erős SEO-név a várak, a középkor és Közép-Portugália témájában.",
      ro: "Castelul din Óbidos este unul dintre cele mai cunoscute simboluri medievale ale Portugaliei. Orașul văruit în alb și zidurile formează un ansamblu istoric foarte puternic. Vizitatorii găsesc turnuri, fortificații și străzi înguste pline de atmosferă. Óbidos este un nume SEO puternic pentru castele, Evul Mediu și Portugalia centrală.",
      en: "Obidos Castle is one of Portugal's best-known medieval landmarks. The whitewashed town and its walls create a strong historic ensemble. Visitors find towers, fortifications, and narrow streets with plenty of atmosphere. Obidos is a strong SEO name for castle trips, medieval history, and central Portugal."
    },
    facts: {
      de: ["Die Burg dominiert die Altstadt.", "Óbidos war über Jahrhunderte eine königliche Stadt.", "Die Mauern sind begehbar.", "Das Ensemble gehört zu den meistfotografierten Orten Portugals.", "Die Stadt ist für ihre historischen Feste bekannt."],
      hu: ["A vár uralja az óvárost.", "Óbidos évszázadokon át királyi város volt.", "A városfalak bejárhatók.", "Az együttes Portugália egyik legtöbbet fotózott helye.", "A város híres történelmi fesztiváljairól."],
      ro: ["Castelul domină orașul vechi.", "Óbidos a fost timp de secole un oraș regal.", "Zidurile pot fi parcurse pe jos.", "Ansamblul este unul dintre cele mai fotografiate din Portugalia.", "Orașul este cunoscut pentru festivalurile sale istorice."],
      en: ["The castle dominates the old town.", "Obidos was a royal town for centuries.", "The walls can be walked on.", "The ensemble is one of Portugal's most photographed places.", "The town is known for its historic festivals."]
    },
    image: "/geo-images/portugal/hist-obidos-castle.webp"
  },
  {
    id: "hist-marvao-castle",
    type: "historical",
    parent: "portugal",
    coords: [-7.3747, 39.3934],
    name: { de: "Burg Marvão", hu: "Marvão vára", ro: "Castelul Marvão", en: "Marvao Castle" },
    description: {
      de: "Die Burg Marvão thront spektakulär auf einem Felsplateau nahe der spanischen Grenze. Die Höhenlage machte sie zu einer wichtigen Grenzfestung im Alentejo. Heute ist sie ein eindrucksvolles Ziel für Geschichts- und Panoramareisen. Marvão ist ein starker SEO-Ort für Burgen, Aussicht und portugiesische Grenzgeschichte.",
      hu: "A Marvão-i vár látványosan egy sziklás fennsíkon emelkedik a spanyol határ közelében. A magas fekvés az Alentejo fontos határerődjévé tette. Ma történelmi és panorámautak látványos célpontja. Marvão erős SEO-helyszín a várak, a kilátás és a portugál határtörténet témájában.",
      ro: "Castelul Marvão se ridică spectaculos pe un platou stâncos, aproape de granița cu Spania. Altitudinea l-a transformat într-o fortăreață de frontieră importantă în Alentejo. Astăzi este o destinație impresionantă pentru istorie și panorame. Marvão este o locație SEO puternică pentru castele, priveliști și istoria de frontieră a Portugaliei.",
      en: "Marvao Castle rises dramatically on a rocky plateau near the Spanish border. Its high position made it an important frontier fortress in Alentejo. Today it is an impressive destination for history and panoramic travel. Marvao is a strong SEO location for castles, views, and Portuguese border history."
    },
    facts: {
      de: ["Die Burg liegt in extremer Höhenlage.", "Sie schützte lange die Grenze zu Spanien.", "Von hier sieht man weit ins Alentejo.", "Die Anlage ist sehr gut erhalten.", "Marvão gehört zu den schönsten Bergdörfern Portugals."],
      hu: ["A vár rendkívül magas fekvésű.", "Hosszú ideig védte a spanyol határt.", "Innen messzire ellátni az Alentejóba.", "Az erődítmény nagyon jó állapotú.", "Marvão Portugália egyik legszebb hegyi falva."],
      ro: ["Castelul se află la mare altitudine.", "A apărat mult timp granița cu Spania.", "De aici se vede departe în Alentejo.", "Ansamblul este foarte bine conservat.", "Marvão este unul dintre cele mai frumoase sate montane din Portugalia."],
      en: ["The castle sits at a very high elevation.", "It long protected the border with Spain.", "You can see far into Alentejo from here.", "The fortress is very well preserved.", "Marvao is one of Portugal's most beautiful mountain villages."]
    },
    image: "/geo-images/portugal/hist-marvao-castle.webp"
  }
  ,
  {
    id: "hist-aljubarrota-battlefield",
    type: "historical",
    parent: "portugal",
    coords: [-8.8175, 39.5748],
    name: { de: "Schlachtfeld Aljubarrota", hu: "Aljubarrota csatamező", ro: "Câmpul de luptă Aljubarrota", en: "Aljubarrota Battlefield" },
    description: {
      de: "Das Schlachtfeld von Aljubarrota erinnert an einen der entscheidendsten Momente der portugiesischen Geschichte. Hier festigte Portugal 1385 seine Unabhängigkeit gegen Kastilien. Die Gedenkstätte verbindet nationale Erinnerung, Landschaft und historische Interpretation. Für SEO zu Portugal ist Aljubarrota ein starkes Schlüsselwort für Schlachten, Identität und Mittelalter.",
      hu: "Az Aljubarrota csatamező Portugália történelmének egyik legdöntőbb pillanatára emlékeztet. Itt erősítette meg Portugália 1385-ben függetlenségét Kasztília ellen. Az emlékhely nemzeti emlékezetet, tájat és történelmi magyarázatot kapcsol össze. Portugáliai SEO-ban Aljubarrota erős kulcsszó a csaták, az identitás és a középkor témájában.",
      ro: "Câmpul de luptă de la Aljubarrota amintește de unul dintre cele mai decisive momente din istoria Portugaliei. Aici Portugalia și-a consolidat independența împotriva Castiliei în 1385. Memorialul combină memoria națională, peisajul și interpretarea istorică. Pentru SEO despre Portugalia, Aljubarrota este un cuvânt-cheie puternic pentru bătălii, identitate și Evul Mediu.",
      en: "The Aljubarrota battlefield marks one of the most decisive moments in Portuguese history. Here Portugal secured its independence against Castile in 1385. The memorial combines national memory, landscape, and historical interpretation. For Portugal SEO, Aljubarrota is a strong keyword for battles, identity, and the Middle Ages."
    },
    facts: {
      de: ["Die Schlacht fand 1385 statt.", "Sie stärkte die portugiesische Unabhängigkeit.", "Der Ort ist mit einem Denkmal markiert.", "Aljubarrota gehört zur Nationalgeschichte.", "Das Gelände ist Teil von historischen Routen."],
      hu: ["A csata 1385-ben zajlott.", "Erősítette a portugál függetlenséget.", "A helyszínt emlékmű jelöli.", "Aljubarrota a nemzeti történelem része.", "A terület történelmi útvonalak része."],
      ro: ["Bătălia a avut loc în 1385.", "A întărit independența Portugaliei.", "Locul este marcat de un memorial.", "Aljubarrota face parte din istoria națională.", "Zona este inclusă în rute istorice."],
      en: ["The battle took place in 1385.", "It strengthened Portuguese independence.", "The site is marked by a memorial.", "Aljubarrota is part of national history.", "The area is included in historic routes."]
    },
    image: "/geo-images/portugal/hist-aljubarrota-battlefield.webp"
  },
  {
    id: "hist-roman-temple-evora",
    type: "historical",
    parent: "city-evora",
    coords: [-7.9113, 38.5717],
    name: { de: "Römischer Tempel Évora", hu: "Évori római templom", ro: "Templul roman din Évora", en: "Roman Temple of Evora" },
    description: {
      de: "Der römische Tempel von Évora ist eines der berühmtesten antiken Denkmäler Portugals. Die Säulen und das Podium erinnern an die römische Präsenz auf der Iberischen Halbinsel. Das Monument steht im Zentrum einer UNESCO-geprägten Stadt und ist ein starkes Symbol für Altertum und Kontinuität. Für Portugal-Reisen ist es ein SEO-Magnet für Antike, Évora und historischen Städtetourismus.",
      hu: "Az évorai római templom Portugália egyik leghíresebb ókori emléke. Oszlopai és talapzata az Ibériai-félsziget római jelenlétére emlékeztet. Az emlékmű UNESCO-hatású városközpontban áll, és erős jelképe az ókornak és a folytonosságnak. Portugáliai utazásokhoz erős SEO-mágnes az ókor, Évora és a történelmi városlátogatás témájában.",
      ro: "Templul roman din Évora este unul dintre cele mai faimoase monumente antice ale Portugaliei. Coloanele și podiumul său amintesc de prezența romană în Peninsula Iberică. Monumentul se află în centrul unui oraș cu puternică aură UNESCO și simbolizează antichitatea și continuitatea. Pentru turismul din Portugalia, este un magnet SEO pentru antichitate, Évora și city break-uri istorice.",
      en: "The Roman Temple of Evora is one of Portugal's most famous ancient monuments. Its columns and podium recall the Roman presence on the Iberian Peninsula. The monument stands in a UNESCO-shaped city center and symbolizes antiquity and continuity. For Portugal travel, it is a strong SEO magnet for antiquity, Evora, and historic city tourism."
    },
    facts: {
      de: ["Das Monument steht im Zentrum von Évora.", "Es stammt aus der römischen Zeit.", "Die Säulen sind das bekannteste Bildmotiv.", "Der Tempel ist eines der Symbole der Stadt.", "Er gehört zu den wichtigsten antiken Stätten Portugals."],
      hu: ["Az emlékmű Évora központjában áll.", "A római korból származik.", "Az oszlopok a legismertebb képi elemei.", "A templom a város egyik jelképe.", "Portugália egyik legfontosabb ókori helyszíne."],
      ro: ["Monumentul se află în centrul orașului Évora.", "Datează din epoca romană.", "Coloanele sunt cel mai cunoscut element vizual.", "Templul este unul dintre simbolurile orașului.", "Este unul dintre cele mai importante situri antice din Portugalia."],
      en: ["The monument stands in the center of Evora.", "It dates from Roman times.", "The columns are its best-known visual element.", "The temple is one of the city's symbols.", "It is one of Portugal's most important ancient sites."]
    },
    image: "/geo-images/portugal/hist-roman-temple-evora.webp"
  },
  {
    id: "hist-mafra-national-palace",
    type: "historical",
    parent: "portugal",
    coords: [-9.3235, 38.9369],
    name: { de: "Nationalpalast Mafra", hu: "Mafra nemzeti palota", ro: "Palatul Național Mafra", en: "Mafra National Palace" },
    description: {
      de: "Der Nationalpalast von Mafra ist ein monumentaler Barockkomplex in der Nähe von Lissabon. Palast, Basilika und Kloster bilden zusammen eines der größten historischen Ensembles Portugals. Die Anlage steht für königliche Macht, Kunst und große Architektur des 18. Jahrhunderts. Mafra ist ein SEO-starker Name für Paläste, Barock und Tagesausflüge ab Lissabon.",
      hu: "A Mafra nemzeti palota monumentális barokk együttes Lisszabon közelében. A palota, a bazilika és a kolostor együtt Portugália egyik legnagyobb történelmi komplexumát alkotják. Az épületegyüttes a királyi hatalmat, a művészetet és a 18. századi nagy építészetet képviseli. Mafra erős SEO-név a paloták, a barokk és a lisszaboni egynapos kirándulások témájában.",
      ro: "Palatul Național Mafra este un ansamblu baroc monumental lângă Lisabona. Palatul, bazilica și mănăstirea formează unul dintre cele mai mari complexe istorice din Portugalia. Ansamblul simbolizează puterea regală, arta și arhitectura grandioasă a secolului al XVIII-lea. Mafra este un nume SEO puternic pentru palate, baroc și excursii de o zi din Lisabona.",
      en: "Mafra National Palace is a monumental Baroque complex near Lisbon. The palace, basilica, and monastery together form one of Portugal's largest historic ensembles. The complex represents royal power, art, and grand 18th-century architecture. Mafra is a strong SEO name for palaces, Baroque style, and day trips from Lisbon."
    },
    facts: {
      de: ["Der Bau begann im 18. Jahrhundert.", "Der Komplex umfasst Palast und Basilika.", "Die Anlage gehört zum UNESCO-Welterbe.", "Die Bibliothek ist besonders berühmt.", "Mafra ist eines der größten Barockprojekte Portugals."],
      hu: ["Az építés a 18. században kezdődött.", "A komplexum palotát és bazilikát is magában foglal.", "Az együttes az UNESCO világörökség része.", "A könyvtár különösen híres.", "Mafra Portugália egyik legnagyobb barokk projektje."],
      ro: ["Construcția a început în secolul al XVIII-lea.", "Ansamblul include palat și bazilică.", "Face parte din patrimoniul mondial UNESCO.", "Biblioteca este deosebit de celebră.", "Mafra este unul dintre cele mai mari proiecte baroce din Portugalia."],
      en: ["Construction began in the 18th century.", "The complex includes a palace and basilica.", "The ensemble is part of the UNESCO World Heritage.", "The library is especially famous.", "Mafra is one of Portugal's largest Baroque projects."]
    },
    image: "/geo-images/portugal/hist-mafra-national-palace.webp"
  }
  ,
  {
    id: "hist-conimbriga-ruins",
    type: "historical",
    parent: "portugal",
    coords: [-8.94, 40.1006],
    name: { de: "Ruinen von Conímbriga", hu: "Conímbriga romjai", ro: "Ruinele de la Conímbriga", en: "Conimbriga Ruins" },
    description: {
      de: "Conímbriga ist die bekannteste römische Ausgrabungsstätte Portugals. Die Ruinen zeigen Villen, Mosaike, Straßen und Badeanlagen aus der Antike. Die Stätte vermittelt eindrucksvoll das Leben in einer römischen Stadt auf der Iberischen Halbinsel. Conímbriga ist ein SEO-starker historischer Ort für Archäologie, Rom und Zentralportugal.",
      hu: "Conímbriga Portugália legismertebb római régészeti helyszíne. A romok villákat, mozaikokat, utcákat és fürdőket mutatnak be az ókorból. A helyszín látványosan idézi meg egy római város életét az Ibériai-félszigeten. Conímbriga erős SEO-történelmi hely az archeológia, Róma és Közép-Portugália témájában.",
      ro: "Conímbriga este cel mai cunoscut sit arheologic roman din Portugalia. Ruinele prezintă vile, mozaicuri, străzi și băi din Antichitate. Situl oferă o imagine foarte clară a vieții într-un oraș roman din Peninsula Iberică. Conimbriga este o locație istorică SEO puternică pentru arheologie, Roma și Portugalia centrală.",
      en: "Conimbriga is Portugal's best-known Roman archaeological site. The ruins show villas, mosaics, streets, and baths from antiquity. The site vividly presents life in a Roman city on the Iberian Peninsula. Conimbriga is a strong SEO history stop for archaeology, Rome, and central Portugal."
    },
    facts: {
      de: ["Es liegt nahe Coimbra.", "Die Mosaike sind besonders gut erhalten.", "Conímbriga war eine bedeutende römische Stadt.", "Das Museum ergänzt die Ausgrabungen.", "Die Stätte gehört zu den wichtigsten antiken Funden des Landes."],
      hu: ["Coimbra közelében található.", "A mozaikok különösen jó állapotúak.", "Conímbriga fontos római város volt.", "A múzeum kiegészíti az ásatásokat.", "Az ország egyik legfontosabb ókori leletegyüttese."],
      ro: ["Se află lângă Coimbra.", "Mozaicurile sunt foarte bine păstrate.", "Conímbriga a fost un oraș roman important.", "Muzeul completează situl arheologic.", "Este unul dintre cele mai importante descoperiri antice ale țării."],
      en: ["It lies near Coimbra.", "The mosaics are especially well preserved.", "Conimbriga was an important Roman city.", "The museum complements the excavations.", "It is one of the country's most important ancient sites."]
    },
    image: "/geo-images/portugal/hist-conimbriga-ruins.webp"
  },
  {
    id: "hist-almourol-castle",
    type: "historical",
    parent: "portugal",
    coords: [-8.3831, 39.4672],
    name: { de: "Burg Almourol", hu: "Almourol vára", ro: "Castelul Almourol", en: "Almourol Castle" },
    description: {
      de: "Die Burg Almourol steht auf einer Insel im Tejo und ist eines der fotogensten Burgen Portugals. Ihre Lage auf dem Fluss macht sie zu einer fast märchenhaften Festung. Die Burg ist eng mit der christlichen Rückeroberung und der Templergeschichte verbunden. Almourol ist ein SEO-starker Ort für Ritter, Flussschlösser und romantische Landschaften.",
      hu: "Az Almourol-vár a Tejo egy szigetén áll, és Portugália egyik legfotogénebb vára. Folyami fekvése szinte mesebeli erőddé teszi. A vár szorosan kapcsolódik a keresztény visszahódításhoz és a templomos történelemhez. Almourol erős SEO-helyszín lovagok, folyami várak és romantikus tájak témájában.",
      ro: "Castelul Almourol se află pe o insulă din râul Tagus și este unul dintre cele mai fotogenice castele ale Portugaliei. Poziția sa pe apă îl face să pară o fortăreață de basm. Castelul este strâns legat de Reconquista și de istoria templierilor. Almourol este o locație SEO puternică pentru cavaleri, castele pe râu și peisaje romantice.",
      en: "Almourol Castle stands on an island in the Tagus River and is one of Portugal's most photogenic castles. Its river setting makes it look like a fairytale fortress. The castle is closely linked to the Reconquista and Templar history. Almourol is a strong SEO stop for knights, river castles, and romantic scenery."
    },
    facts: {
      de: ["Die Burg liegt auf einer Flussinsel.", "Sie war eine wichtige Templerfestung.", "Der Zugang erfolgt per Boot.", "Das Bildmotiv ist international bekannt.", "Almourol ist ein Symbol für die Mittelalterroute."],
      hu: ["A vár egy folyami szigeten áll.", "Fontos templomos erőd volt.", "Megközelítése hajóval történik.", "A látványa nemzetközileg ismert.", "Almourol a középkori útvonal egyik jelképe."],
      ro: ["Castelul se află pe o insulă fluvială.", "A fost o fortăreață templieră importantă.", "Accesul se face cu barca.", "Imaginea sa este cunoscută internațional.", "Almourol este un simbol al rutelor medievale."],
      en: ["The castle sits on a river island.", "It was an important Templar fortress.", "Access is by boat.", "Its image is known internationally.", "Almourol is a symbol of the medieval route."]
    },
    image: "/geo-images/portugal/hist-almourol-castle.webp"
  },
  {
    id: "hist-silves-castle",
    type: "historical",
    parent: "portugal",
    coords: [-8.4394, 37.1881],
    name: { de: "Burg Silves", hu: "Silves vára", ro: "Castelul Silves", en: "Silves Castle" },
    description: {
      de: "Die Burg Silves ist die bedeutendste maurische Festung der Algarve. Ihre roten Sandsteinmauern erinnern an die islamische Vergangenheit Südportugals. Das Schloss sitzt über der Stadt und bietet weite Ausblicke über den Fluss Arade. Silves ist ein SEO-starker historischer Begriff für Algarve, Burgen und maurisches Erbe.",
      hu: "A Silves-i vár az Algarve legfontosabb mór erődje. Vörös homokkő falai Portugália déli részének iszlám múltját idézik. A vár a város fölött áll, és széles kilátást nyújt az Arade folyóra. Silves erős SEO-történelmi kifejezés az Algarve, a várak és a mór örökség témájában.",
      ro: "Castelul Silves este cea mai importantă fortăreață maură din Algarve. Zidurile sale din gresie roșie amintesc de trecutul islamic al sudului Portugaliei. Castelul domină orașul și oferă vederi largi asupra râului Arade. Silves este un termen istoric SEO puternic pentru Algarve, castele și patrimoniul maur.",
      en: "Silves Castle is the most important Moorish fortress in the Algarve. Its red sandstone walls recall the Islamic past of southern Portugal. The castle sits above the town and offers wide views over the Arade River. Silves is a strong SEO history term for the Algarve, castles, and Moorish heritage."
    },
    facts: {
      de: ["Die Burg ist ein Symbol der Algarve-Geschichte.", "Ihre Mauern bestehen aus rotem Sandstein.", "Silves war einst eine wichtige maurische Stadt.", "Das Schloss liegt über dem Fluss Arade.", "Die Anlage ist eine der bekanntesten Festungen Südportugals."],
      hu: ["A vár az Algarve történelmének jelképe.", "Falai vörös homokkőből készültek.", "Silves egykor fontos mór város volt.", "A vár az Arade folyó fölött áll.", "Az erőd Dél-Portugália egyik legismertebb erődje."],
      ro: ["Castelul este un simbol al istoriei Algarvei.", "Zidurile sale sunt din gresie roșie.", "Silves a fost odinioară un oraș maur important.", "Castelul se află deasupra râului Arade.", "Ansamblul este una dintre cele mai cunoscute fortărețe din sudul Portugaliei."],
      en: ["The castle is a symbol of Algarve history.", "Its walls are made of red sandstone.", "Silves was once an important Moorish city.", "The castle sits above the Arade River.", "The fortress is one of southern Portugal's best-known strongholds."]
    },
    image: "/geo-images/portugal/hist-silves-castle.webp"
  }
  ,
  {
    id: "land-maat-lisbon",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.1997, 38.6979],
    name: { de: "MAAT Lissabon", hu: "MAAT Lisszabon", ro: "MAAT Lisabona", en: "MAAT Lisbon" },
    description: {
      de: "Das MAAT ist eines der modernsten Wahrzeichen Lissabons und verbindet Kunst, Architektur und Technologie. Das Gebäude sitzt direkt am Tejo und zieht mit seiner geschwungenen Dachlandschaft sofort Aufmerksamkeit auf sich. Es ist ein starker Ankerpunkt für zeitgenössische Kultur in Portugal. Für SEO rund um Lissabon und Museen ist MAAT ein wichtiger Name.",
      hu: "A MAAT Lisszabon egyik legmodernebb jelképe, amely a művészetet, az építészetet és a technológiát köti össze. Az épület közvetlenül a Tejo partján áll, és ívelt tetőformájával azonnal magára vonja a figyelmet. A kortárs portugál kultúra fontos központja. Lisszaboni és múzeumi SEO szempontból a MAAT kulcsnév.",
      ro: "MAAT este unul dintre cele mai moderne repere ale Lisabonei și combină arta, arhitectura și tehnologia. Clădirea se află chiar pe malul Tagusului și atrage imediat atenția prin forma acoperișului curbat. Este un punct important pentru cultura contemporană din Portugalia. Pentru SEO despre Lisabona și muzee, MAAT este un nume esențial.",
      en: "MAAT is one of Lisbon's most modern landmarks and combines art, architecture, and technology. The building sits right on the Tagus riverfront and stands out with its curved roofline. It is a key hub for contemporary culture in Portugal. For Lisbon and museum SEO, MAAT is an important name."
    },
    facts: {
      de: ["MAAT liegt am Flussufer.", "Es verbindet Museum und Architektur.", "Das Dach ist begehbar.", "Die Anlage ist Teil der modernen Lissaboner Kulturszene.", "Der Standort ist touristisch sehr stark."],
      hu: ["A MAAT a folyóparton áll.", "Múzeumot és építészetet kapcsol össze.", "A tető bejárható.", "Az épület a modern lisszaboni kulturális szcéna része.", "A helyszín turisztikailag nagyon erős."],
      ro: ["MAAT se află pe malul râului.", "Combină muzeul cu arhitectura.", "Acoperișul poate fi parcurs pe jos.", "Ansamblul face parte din scena culturală modernă a Lisabonei.", "Locația este foarte atractivă pentru turiști."],
      en: ["MAAT sits on the riverfront.", "It combines museum and architecture.", "The roof is walkable.", "The site is part of Lisbon's modern cultural scene.", "The location is very tourist-friendly."]
    },
    image: "/geo-images/portugal/land-maat-lisbon.webp"
  },
  {
    id: "land-oceanario-lisboa",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.0938, 38.7637],
    name: { de: "Ozeanarium Lissabon", hu: "Lisszaboni óceanárium", ro: "Oceanariul din Lisabona", en: "Lisbon Oceanarium" },
    description: {
      de: "Das Ozeanarium von Lissabon ist eines der größten Aquarien Europas und ein Top-Highlight für Familien. Die Hauptanlage zeigt Meeresökosysteme aus verschiedenen Weltregionen in einer eindrucksvollen zentralen Halle. Es stärkt Lissabons Ruf als moderne Hauptstadt mit Bildungs- und Freizeitzielen. Für SEO zu Portugal und Kindern ist das Oceanário ein starker Magnet.",
      hu: "A lisszaboni óceanárium Európa egyik legnagyobb akváriuma, és kiemelt családi látnivaló. A főcsarnok a világ különböző tengeri ökoszisztémáit mutatja be lenyűgöző formában. Erősíti Lisszabon hírnevét mint modern főváros, amely oktatási és szabadidős célpontokat is kínál. Portugáliai és gyerekbarát SEO-ban az Oceanário erős vonzerő.",
      ro: "Oceanariul din Lisabona este unul dintre cele mai mari acvarii din Europa și o atracție de top pentru familii. Sala principală prezintă ecosisteme marine din diferite regiuni ale lumii într-un mod impresionant. Întărește reputația Lisabonei ca capitală modernă cu obiective educative și de agrement. Pentru SEO despre Portugalia și copii, Oceanário este un magnet puternic.",
      en: "Lisbon Oceanarium is one of Europe's largest aquariums and a top family attraction. The main tank presents marine ecosystems from different world regions in an impressive central hall. It strengthens Lisbon's image as a modern capital with education and leisure appeal. For Portugal and kid-friendly SEO, the Oceanário is a strong magnet."
    },
    facts: {
      de: ["Es gehört zu den größten Aquarien Europas.", "Die Hauptausstellung ist sehr berühmt.", "Das Ozeanarium liegt im Parque das Nações.", "Es ist ein beliebtes Ziel für Familien.", "Der Fokus liegt auf Meeresbildung und Naturschutz."],
      hu: ["Európa egyik legnagyobb akváriuma.", "A fő kiállítás nagyon híres.", "Az óceanárium a Parque das Nações területén található.", "Népszerű családi célpont.", "A fókusz a tengeri oktatás és a természetvédelem."],
      ro: ["Este unul dintre cele mai mari acvarii din Europa.", "Expoziția principală este foarte faimoasă.", "Oceanariul se află în Parque das Nações.", "Este o destinație populară pentru familii.", "Accentul este pe educație marină și conservare."],
      en: ["It is one of Europe's largest aquariums.", "The main exhibition is very famous.", "The oceanarium is in Parque das Nações.", "It is a popular family destination.", "Its focus is marine education and conservation."]
    },
    image: "/geo-images/portugal/land-oceanario-lisboa.webp"
  },
  {
    id: "land-padrao-descobrimentos",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.1994, 38.6936],
    name: { de: "Padrão dos Descobrimentos", hu: "A felfedezések emlékműve", ro: "Monumentul Descoperirilor", en: "Monument to the Discoveries" },
    description: {
      de: "Der Padrão dos Descobrimentos ist eines der ikonischsten Denkmäler Lissabons am Tejo-Ufer. Das Monument feiert Portugals Zeitalter der Entdeckungen und die großen Seefahrer des Landes. Seine monumentale Form macht es zu einem starken Bildmotiv für Stadt- und Kulturtourismus. Für Portugal SEO ist es ein unverzichtbares Wahrzeichen.",
      hu: "A Padrão dos Descobrimentos Lisszabon egyik legikonikusabb emlékműve a Tejo partján. Az alkotás Portugália felfedezések korát és nagy hajósait ünnepli. Monumentális formája erős képi motívummá teszi a város- és kultúrturizmusban. Portugál SEO-ban megkerülhetetlen jelkép.",
      ro: "Padrão dos Descobrimentos este unul dintre cele mai iconice monumente ale Lisabonei, pe malul Tagusului. Monumentul celebrează Epoca Descoperirilor și marii navigatori ai Portugaliei. Forma sa monumentală îl face un motiv vizual puternic pentru turismul urban și cultural. Pentru SEO despre Portugalia, este un reper indispensabil.",
      en: "The Monument to the Discoveries is one of Lisbon's most iconic monuments on the Tagus waterfront. It celebrates Portugal's Age of Discovery and the country's great navigators. Its monumental form makes it a powerful visual motif for city and cultural tourism. For Portugal SEO, it is an essential landmark."
    },
    facts: {
      de: ["Es steht direkt am Fluss.", "Das Denkmal wurde im 20. Jahrhundert errichtet.", "Es ehrt Seefahrer und Entdecker.", "Die Aussicht über Belém ist ausgezeichnet.", "Es ist eines der bekanntesten Symbole Lissabons."],
      hu: ["Közvetlenül a folyóparton áll.", "Az emlékmű a 20. században épült.", "Tengerészeket és felfedezőket tisztel.", "A kilátás Belémre kiváló.", "Lisszabon egyik legismertebb szimbóluma."],
      ro: ["Se află chiar pe malul râului.", "Monumentul a fost ridicat în secolul XX.", "Omagiază navigatorii și exploratorii.", "Priveliștea spre Belém este excelentă.", "Este unul dintre cele mai cunoscute simboluri ale Lisabonei."],
      en: ["It stands right on the riverfront.", "The monument was built in the 20th century.", "It honors navigators and explorers.", "The view over Belém is excellent.", "It is one of Lisbon's best-known symbols."]
    },
    image: "/geo-images/portugal/land-padrao-descobrimentos.webp"
  },
  {
    id: "land-casa-musica",
    type: "landmark",
    parent: "city-porto",
    coords: [-8.6308, 41.1607],
    name: { de: "Casa da Música", hu: "Casa da Música", ro: "Casa da Música", en: "Casa da Musica" },
    description: {
      de: "Die Casa da Música ist eines der modernsten Wahrzeichen von Porto und ein Symbol zeitgenössischer Architektur. Ihr kantiger Bau hebt sich deutlich vom historischen Stadtbild ab. Das Haus ist Heimat für Konzerte, Veranstaltungen und kulturelle Produktion. Für SEO zu Porto, Architektur und Musik ist es ein Schlüsselort.",
      hu: "A Casa da Música Porto egyik legmodernebb jelképe és a kortárs építészet szimbóluma. Szögletes formája erősen elüt a történelmi városképtől. Az épület koncertek, események és kulturális produkciók otthona. Porto, építészet és zene SEO-kulcsszóként kiemelkedő helyszín.",
      ro: "Casa da Música este unul dintre cele mai moderne repere din Porto și un simbol al arhitecturii contemporane. Forma sa angulară se distinge puternic de centrul istoric. Clădirea găzduiește concerte, evenimente și producție culturală. Pentru SEO despre Porto, arhitectură și muzică, este o locație esențială.",
      en: "Casa da Musica is one of Porto's most modern landmarks and a symbol of contemporary architecture. Its angular form stands out strongly from the historic cityscape. The building hosts concerts, events, and cultural production. For Porto, architecture, and music SEO, it is an essential location."
    },
    facts: {
      de: ["Das Gebäude wurde für Porto 2001 entworfen.", "Es ist ein Symbol moderner Architektur.", "Die Fassade ist geometrisch sehr markant.", "Hier finden internationale Konzerte statt.", "Es liegt im westlichen Teil von Porto."],
      hu: ["Az épületet Porto 2001-re tervezték.", "A modern építészet szimbóluma.", "Homlokzata nagyon karakteres és geometrikus.", "Nemzetközi koncertek helyszíne.", "Porto nyugati részén található."],
      ro: ["Clădirea a fost proiectată pentru Porto 2001.", "Este un simbol al arhitecturii moderne.", "Fațada este foarte geometrică și distinctivă.", "Aici au loc concerte internaționale.", "Se află în partea vestică a orașului Porto."],
      en: ["The building was designed for Porto 2001.", "It is a symbol of modern architecture.", "The facade is highly geometric and distinctive.", "International concerts are held here.", "It sits in the western part of Porto."]
    },
    image: "/geo-images/portugal/land-casa-musica.webp"
  }
  ,
  {
    id: "land-bom-jesus-do-monte",
    type: "landmark",
    parent: "city-braga",
    coords: [-8.3756, 41.5535],
    name: { de: "Bom Jesus do Monte", hu: "Bom Jesus do Monte", ro: "Bom Jesus do Monte", en: "Bom Jesus do Monte" },
    description: {
      de: "Bom Jesus do Monte ist das berühmteste Heiligtum von Braga und ein großartiges Barockensemble. Die monumentale Treppe macht den Ort zu einer der bekanntesten Pilgerstätten Portugals. Von oben öffnet sich ein Panorama über Braga und die umliegende Landschaft. Für SEO zu Braga, Pilgerreisen und Sehenswürdigkeiten ist Bom Jesus ein Top-Begriff.",
      hu: "A Bom Jesus do Monte Braga leghíresebb szentélye és egy lenyűgöző barokk együttes. A monumentális lépcsősor Portugália egyik legismertebb zarándokhelyévé teszi. Fentről panoráma nyílik Bragára és a környező tájra. Braga, zarándoklat és látnivalók SEO-jában a Bom Jesus kiemelt kulcsszó.",
      ro: "Bom Jesus do Monte este cel mai faimos sanctuar din Braga și un ansamblu baroc impresionant. Scara monumentală îl transformă într-unul dintre cele mai cunoscute locuri de pelerinaj din Portugalia. De sus se deschide o panoramă peste Braga și împrejurimi. Pentru SEO despre Braga, pelerinaje și obiective turistice, Bom Jesus este un termen de top.",
      en: "Bom Jesus do Monte is Braga's most famous sanctuary and a magnificent Baroque ensemble. Its monumental staircase makes it one of Portugal's best-known pilgrimage sites. From the top, you get a panorama over Braga and the surrounding landscape. For Braga, pilgrimage, and sightseeing SEO, Bom Jesus is a top keyword."
    },
    facts: {
      de: ["Die Treppe ist das berühmteste Element.", "Das Heiligtum liegt oberhalb von Braga.", "Der Ort ist ein Pilgerziel.", "Die Anlage gehört zum UNESCO-Welterbe.", "Die Aussicht ist ein großer Anziehungspunkt."],
      hu: ["A lépcsősor a legismertebb elem.", "A szentély Braga fölött található.", "A hely zarándokcélpont.", "Az együttes az UNESCO világörökség része.", "A kilátás nagy vonzerő."],
      ro: ["Scara este elementul cel mai faimos.", "Sanctuarul se află deasupra orașului Braga.", "Locul este o destinație de pelerinaj.", "Ansamblul face parte din patrimoniul UNESCO.", "Priveliștea este un mare punct de atracție."],
      en: ["The staircase is the most famous element.", "The sanctuary sits above Braga.", "The site is a pilgrimage destination.", "The ensemble is part of the UNESCO World Heritage.", "The view is a major attraction."]
    },
    image: "/geo-images/portugal/land-bom-jesus-do-monte.webp"
  },
  {
    id: "land-dom-luis-bridge",
    type: "landmark",
    parent: "city-porto",
    coords: [-8.611, 41.1397],
    name: { de: "Dom-Luís-I-Brücke", hu: "Dom Luís I híd", ro: "Podul Dom Luís I", en: "Dom Luis I Bridge" },
    description: {
      de: "Die Dom-Luís-I-Brücke ist Portos berühmteste Brücke und ein sofort erkennbares Symbol der Stadt. Ihre zweigeteilte Konstruktion verbindet Geschichte, Ingenieurskunst und starke Postkartenmotive. Sie überspannt den Douro und verbindet Porto mit Vila Nova de Gaia. Für SEO zu Porto, Brücken und Aussichtspunkten ist sie unverzichtbar.",
      hu: "A Dom Luís I híd Porto legismertebb hídja és azonnal felismerhető városi szimbóluma. Kettős szerkezete a történelmet, a mérnöki tudást és az erős képeslapszerű látványt kapcsolja össze. A Douro felett ível át, és összeköti Portót Vila Nova de Gaiával. Porto, hidak és kilátópontok SEO-jában nélkülözhetetlen.",
      ro: "Podul Dom Luís I este cel mai faimos pod din Porto și un simbol imediat recognoscibil al orașului. Structura sa pe două niveluri combină istoria, ingineria și imagini de carte poștală. Traversează Douro și leagă Porto de Vila Nova de Gaia. Pentru SEO despre Porto, poduri și puncte de belvedere, este indispensabil.",
      en: "The Dom Luis I Bridge is Porto's most famous bridge and an instantly recognizable city symbol. Its two-level structure combines history, engineering, and postcard imagery. It spans the Douro and links Porto with Vila Nova de Gaia. For Porto, bridges, and viewpoints SEO, it is essential."
    },
    facts: {
      de: ["Die Brücke wurde im 19. Jahrhundert eröffnet.", "Sie verbindet Porto mit Gaia.", "Der obere Steg bietet starke Ausblicke.", "Sie ist ein Wahrzeichen des Douro-Ufers.", "Das Metallgerüst ist architektonisch ikonisch."],
      hu: ["A híd a 19. században nyílt meg.", "Portót köti össze Gaiával.", "A felső szint erős kilátást nyújt.", "A Douro-part egyik jelképe.", "Fém váza építészetileg ikonikus."],
      ro: ["Podul a fost inaugurat în secolul al XIX-lea.", "Leagă Porto de Gaia.", "Nivelul superior oferă priveliști puternice.", "Este un simbol al malului Douro.", "Structura metalică este iconică din punct de vedere arhitectural."],
      en: ["The bridge opened in the 19th century.", "It connects Porto with Gaia.", "The upper deck offers strong views.", "It is a symbol of the Douro waterfront.", "Its metal framework is architecturally iconic."]
    },
    image: "/geo-images/portugal/land-dom-luis-bridge.webp"
  },
  {
    id: "land-university-coimbra",
    type: "landmark",
    parent: "city-coimbra",
    coords: [-8.425, 40.2069],
    name: { de: "Universität Coimbra", hu: "Coimbrai Egyetem", ro: "Universitatea din Coimbra", en: "University of Coimbra" },
    description: {
      de: "Die Universität Coimbra ist eines der ältesten und renommiertesten Bildungsdenkmäler Portugals. Ihre Gebäude, Höfe und Bibliotheken machen sie zu einem zentralen Symbol akademischer Tradition. Der Campus auf dem Hügel prägt die Silhouette der Stadt und zieht internationale Besucher an. Für SEO zu Coimbra, Bildung und Kultur ist die Universität ein Kernbegriff.",
      hu: "A Coimbrai Egyetem Portugália egyik legrégibb és legtekintélyesebb oktatási jelképe. Épületei, udvarai és könyvtárai az akadémiai hagyomány központi szimbólumává teszik. A dombtetőn álló campus meghatározza a város sziluettjét, és nemzetközi látogatókat vonz. Coimbra, oktatás és kultúra SEO-jában az egyetem központi kulcsszó.",
      ro: "Universitatea din Coimbra este unul dintre cele mai vechi și mai prestigioase simboluri educaționale ale Portugaliei. Clădirile, curțile și bibliotecile sale o fac un simbol central al tradiției academice. Campusul de pe colină definește silueta orașului și atrage vizitatori internaționali. Pentru SEO despre Coimbra, educație și cultură, universitatea este un termen-cheie central.",
      en: "The University of Coimbra is one of Portugal's oldest and most prestigious educational landmarks. Its buildings, courtyards, and libraries make it a central symbol of academic tradition. The hilltop campus shapes the city skyline and attracts international visitors. For Coimbra, education, and culture SEO, the university is a core keyword."
    },
    facts: {
      de: ["Sie gehört zum UNESCO-Welterbe.", "Die Universität wurde im 13. Jahrhundert gegründet.", "Die Biblioteca Joanina ist berühmt.", "Der Campus liegt auf einem Hügel.", "Coimbra wird stark von Studenten geprägt."],
      hu: ["Az UNESCO világörökség része.", "Az egyetemet a 13. században alapították.", "A Biblioteca Joanina híres.", "A campus egy dombon található.", "Coimbrát erősen meghatározzák a diákok."],
      ro: ["Face parte din patrimoniul UNESCO.", "Universitatea a fost fondată în secolul al XIII-lea.", "Biblioteca Joanina este faimoasă.", "Campusul se află pe o colină.", "Coimbra este puternic influențată de studenți."],
      en: ["It is part of the UNESCO World Heritage.", "The university was founded in the 13th century.", "The Biblioteca Joanina is famous.", "The campus sits on a hill.", "Students strongly shape Coimbra's identity."]
    },
    image: "/geo-images/portugal/land-university-coimbra.webp"
  },
  {
    id: "land-sao-bento-station",
    type: "landmark",
    parent: "city-porto",
    coords: [-8.6109, 41.1457],
    name: { de: "Bahnhof São Bento", hu: "São Bento pályaudvar", ro: "Gara São Bento", en: "Sao Bento Station" },
    description: {
      de: "Der Bahnhof São Bento in Porto ist berühmt für seine riesigen Azulejo-Paneele. Die Bahnhofshalle erzählt mit Keramikbildern wichtige Szenen der portugiesischen Geschichte. Er ist sowohl ein Verkehrsknotenpunkt als auch ein kulturelles Wahrzeichen. Für SEO zu Porto, Azulejos und Architektur ist São Bento besonders stark.",
      hu: "A portói São Bento pályaudvar híres hatalmas azulejo-falairól. A csarnok kerámia képekkel mesél Portugália fontos történelmi jeleneteiről. Egyszerre közlekedési csomópont és kulturális jelkép. Porto, azulejo és építészet SEO-jában São Bento különösen erős.",
      ro: "Gara São Bento din Porto este faimoasă pentru panourile sale uriașe de azulejos. Sala gării povestește scene importante din istoria Portugaliei prin imagini ceramice. Este atât un nod de transport, cât și un reper cultural. Pentru SEO despre Porto, azulejos și arhitectură, São Bento este foarte puternic.",
      en: "Sao Bento Station in Porto is famous for its huge azulejo panels. The station hall tells key scenes of Portuguese history through ceramic artwork. It is both a transport hub and a cultural landmark. For Porto, azulejos, and architecture SEO, Sao Bento is especially strong."
    },
    facts: {
      de: ["Die Halle ist mit Azulejos bedeckt.", "Der Bahnhof liegt im Zentrum von Porto.", "Die Bilder zeigen portugiesische Geschichte.", "São Bento ist ein viel fotografierter Ort.", "Er verbindet Alltag und Kunst."],
      hu: ["A csarnok azulejókkal borított.", "Az állomás Porto központjában található.", "A képek portugál történelmet ábrázolnak.", "São Bento sokat fotózott hely.", "A mindennapi közlekedést és a művészetet kapcsolja össze."],
      ro: ["Sala este acoperită de azulejos.", "Gara se află în centrul orașului Porto.", "Imaginile prezintă istoria Portugaliei.", "São Bento este un loc foarte fotografiat.", "Leagă viața de zi cu zi de artă."],
      en: ["The hall is covered in azulejos.", "The station is in central Porto.", "The images depict Portuguese history.", "Sao Bento is a heavily photographed spot.", "It connects everyday travel with art."]
    },
    image: "/geo-images/portugal/land-sao-bento-station.webp"
  }
  ,
  {
    id: "port-sines",
    type: "port",
    parent: "portugal",
    coords: [-8.8694, 37.9567],
    name: { de: "Hafen Sines", hu: "Sines kikötő", ro: "Portul Sines", en: "Port of Sines" },
    description: {
      de: "Der Hafen von Sines ist Portugals wichtigster Tiefwasserhafen und ein zentraler Logistikknoten. Er spielt eine große Rolle im internationalen Handel, in der Energie und im Containerverkehr. Die Lage an der Westküste macht ihn strategisch extrem wertvoll. Für SEO zu Portugal, Häfen und Industrie ist Sines ein Spitzenbegriff.",
      hu: "A Sines-i kikötő Portugália legfontosabb mélyvízi kikötője és központi logisztikai csomópontja. Nagy szerepet játszik a nemzetközi kereskedelemben, az energiában és a konténerforgalomban. A nyugati parton fekvő helyzete stratégiailag rendkívül értékes. Portugália, kikötők és ipar SEO-jában Sines kiemelt kulcsszó.",
      ro: "Portul Sines este cel mai important port de adâncime al Portugaliei și un nod logistic central. Joacă un rol major în comerțul internațional, energie și transportul de containere. Locația sa pe coasta de vest îl face strategic foarte valoros. Pentru SEO despre Portugalia, porturi și industrie, Sines este un termen de top.",
      en: "The Port of Sines is Portugal's most important deep-water port and a central logistics hub. It plays a major role in international trade, energy, and container traffic. Its position on the west coast makes it strategically very valuable. For Portugal, ports, and industry SEO, Sines is a top keyword."
    },
    facts: {
      de: ["Sines ist ein Tiefwasserhafen.", "Der Hafen ist für Container wichtig.", "Er liegt an der Atlantikküste.", "Die Logistikfunktion ist national bedeutsam.", "Die Lage eignet sich für Großschiffe."],
      hu: ["Sines mélyvízi kikötő.", "A kikötő fontos a konténerszállításban.", "Az Atlanti-óceán partján fekszik.", "Logisztikai szerepe országos jelentőségű.", "A helyszín nagy hajók fogadására alkalmas."],
      ro: ["Sines este un port de adâncime.", "Portul este important pentru containere.", "Se află pe coasta Atlanticului.", "Rolul logistic este important la nivel național.", "Locația este potrivită pentru nave mari."],
      en: ["Sines is a deep-water port.", "The port is important for containers.", "It sits on the Atlantic coast.", "Its logistics role is nationally important.", "The location suits very large ships."]
    },
    image: "/geo-images/portugal/port-sines.webp"
  },
  {
    id: "port-leixoes",
    type: "port",
    parent: "portugal",
    coords: [-8.6918, 41.185],
    name: { de: "Hafen Leixões", hu: "Leixões kikötő", ro: "Portul Leixões", en: "Port of Leixoes" },
    description: {
      de: "Der Hafen Leixões ist der wichtigste Seehafen im Raum Porto und ein Motor für Handel und Industrie. Er verbindet die Nordregion mit internationalen Schifffahrtsrouten. Die Hafenanlagen sind ein gutes Beispiel für moderne maritime Infrastruktur. Für SEO zu Porto und Wirtschaft ist Leixões ein starker Hafenbegriff.",
      hu: "A Leixões kikötő Porto térségének legfontosabb tengeri kikötője és a kereskedelem, valamint az ipar motorja. Az északi régiót nemzetközi hajózási útvonalakkal köti össze. A létesítmények jó példái a modern tengeri infrastruktúrának. Porto és gazdaság SEO-jában Leixões erős kikötői kulcsszó.",
      ro: "Portul Leixões este cel mai important port maritim din zona Porto și un motor pentru comerț și industrie. Leagă nordul Portugaliei de rutele maritime internaționale. Facilitățile portuare sunt un bun exemplu de infrastructură maritimă modernă. Pentru SEO despre Porto și economie, Leixões este un termen portuar puternic.",
      en: "The Port of Leixoes is the most important seaport in the Porto area and a driver of trade and industry. It connects the northern region with international shipping routes. The port facilities are a good example of modern maritime infrastructure. For Porto and economy SEO, Leixoes is a strong port keyword."
    },
    facts: {
      de: ["Der Hafen liegt nördlich von Porto.", "Er unterstützt den Handel im Norden.", "Leixões ist ein großer Industriehafen.", "Die Anbindung an die Stadt ist sehr wichtig.", "Er ist ein zentraler Knotenpunkt für den Atlantikverkehr."],
      hu: ["A kikötő Porto északi részén található.", "Támogatja az északi kereskedelmet.", "Leixões nagy ipari kikötő.", "A városhoz való kapcsolata nagyon fontos.", "Az atlanti forgalom központi csomópontja."],
      ro: ["Portul se află la nord de Porto.", "Sprijină comerțul din nord.", "Leixões este un mare port industrial.", "Conectarea cu orașul este foarte importantă.", "Este un nod central pentru traficul atlantic."],
      en: ["The port lies north of Porto.", "It supports trade in the north.", "Leixoes is a major industrial port.", "Its connection to the city is very important.", "It is a central node for Atlantic traffic."]
    },
    image: "/geo-images/portugal/port-leixoes.webp"
  },
  {
    id: "port-setubal",
    type: "port",
    parent: "portugal",
    coords: [-8.8925, 38.5248],
    name: { de: "Hafen Setúbal", hu: "Setúbal kikötő", ro: "Portul Setubal", en: "Port of Setubal" },
    description: {
      de: "Der Hafen von Setúbal ist eng mit Fischerei, Handel und der Industrie im Sado-Gebiet verbunden. Er ergänzt die touristische Identität der Stadt um eine echte maritime Wirtschaftsseite. Die Nähe zu Lissabon und zur Halbinsel Tróia macht den Standort besonders relevant. Für SEO zu Häfen, Küstenwirtschaft und Setúbal ist er ein sehr guter Eintrag.",
      hu: "A Setúbal-i kikötő szorosan kapcsolódik a halászathoz, a kereskedelemhez és a Sado térségének iparához. A város turisztikai arculatát egy valódi tengeri gazdasági oldallal egészíti ki. Lisszabon és a Tróia-félsziget közelsége különösen fontossá teszi a helyet. Kikötők, tengerparti gazdaság és Setúbal SEO-jában nagyon jó bejegyzés.",
      ro: "Portul Setubal este strâns legat de pescuit, comerț și industria din zona Sado. Completează identitatea turistică a orașului cu o adevărată dimensiune economică maritimă. Apropierea de Lisabona și de peninsula Tróia îl face deosebit de relevant. Pentru SEO despre porturi, economie litorală și Setubal, este o intrare foarte bună.",
      en: "The Port of Setubal is closely tied to fishing, trade, and industry in the Sado area. It adds a real maritime economy side to the city's tourism identity. Its proximity to Lisbon and the Troia peninsula makes the location especially relevant. For ports, coastal economy, and Setubal SEO, it is a very solid entry."
    },
    facts: {
      de: ["Der Hafen liegt am Sado.", "Fischerei bleibt ein wichtiger Sektor.", "Setúbal verbindet Stadt und Wirtschaft.", "Die Lage ist nah an Lissabon.", "Der Hafen unterstützt regionale Logistik."],
      hu: ["A kikötő a Sado mentén található.", "A halászat továbbra is fontos ágazat.", "Setúbal összeköti a várost és a gazdaságot.", "A helyszín közel van Lisszabonhoz.", "A kikötő támogatja a regionális logisztikát."],
      ro: ["Portul se află pe Sado.", "Pescuitul rămâne un sector important.", "Setubal leagă orașul de economie.", "Locația este aproape de Lisabona.", "Portul sprijină logistica regională."],
      en: ["The port sits on the Sado estuary.", "Fishing remains an important sector.", "Setubal links city life and the economy.", "The location is close to Lisbon.", "The port supports regional logistics."]
    },
    image: "/geo-images/portugal/port-setubal.webp"
  }
  ,
  {
    id: "agri-douro-vineyards",
    type: "agriculture",
    parent: "portugal",
    coords: [-7.57, 41.13],
    name: { de: "Douro-Weinberge", hu: "Douro-szőlőültetvények", ro: "Podgorii Douro", en: "Douro Vineyards" },
    description: {
      de: "Die Douro-Weinberge gehören zu den bekanntesten Agrarlandschaften Portugals und prägen das Bild des Nordens. Terrassen, Quintas und steile Hänge schaffen eine einzigartige Weinbaukulisse. Die Region steht für Portwein, Tourismus und jahrhundertealte Landwirtschaft. Für SEO zu Douro, Wein und Portugal ist sie ein außergewöhnlich starker Begriff.",
      hu: "A Douro-szőlőültetvények Portugália legismertebb agrártájai közé tartoznak, és meghatározzák az ország északi részének arculatát. A teraszok, quinták és meredek domboldalak egyedülálló borvidéki környezetet alkotnak. A régió a portói borról, a turizmusról és a sok évszázados mezőgazdaságról ismert. Douro, bor és Portugália SEO-jában kivételesen erős kulcsszó.",
      ro: "Podgoriile Douro sunt printre cele mai cunoscute peisaje agricole din Portugalia și definesc imaginea nordului. Terasele, quintas și versanții abrupți creează un cadru viticol unic. Regiunea este asociată cu vinul de Porto, turismul și agricultura veche de secole. Pentru SEO despre Douro, vin și Portugalia, este un termen extraordinar de puternic.",
      en: "The Douro vineyards are among Portugal's best-known agricultural landscapes and define the look of the north. Terraces, quintas, and steep slopes create a unique wine-growing setting. The region stands for Port wine, tourism, and centuries of agriculture. For Douro, wine, and Portugal SEO, it is an exceptionally strong keyword."
    },
    facts: {
      de: ["Das Gebiet ist UNESCO-anerkannt.", "Hier wird Portwein erzeugt.", "Die Hänge sind terrassiert.", "Quintas sind Teil der Kulturlandschaft.", "Die Landwirtschaft prägt die lokale Identität."],
      hu: ["A terület UNESCO által elismert.", "Itt készül a portói bor.", "A domboldalak teraszosak.", "A quinták a kultúrtáj részei.", "A mezőgazdaság meghatározza a helyi identitást."],
      ro: ["Zona este recunoscută de UNESCO.", "Aici se produce vin de Porto.", "Versanții sunt terasati.", "Quintas fac parte din peisajul cultural.", "Agricultura definește identitatea locală."],
      en: ["The area has UNESCO recognition.", "Port wine is produced here.", "The slopes are terraced.", "Quintas are part of the cultural landscape.", "Agriculture defines the local identity."]
    },
    image: "/geo-images/portugal/agri-douro-vineyards.webp"
  },
  {
    id: "agri-coruche-cork-oaks",
    type: "agriculture",
    parent: "portugal",
    coords: [-8.525, 38.953],
    name: { de: "Korkeichen von Coruche", hu: "Coruche-i paratölgyek", ro: "Stejarii de plută din Coruche", en: "Coruche Cork Oaks" },
    description: {
      de: "Coruche ist ein Zentrum der portugiesischen Korkwirtschaft und der Korkeichen-Landschaft im Alentejo. Die Region steht für nachhaltige Landwirtschaft, traditionelle Nutzung und Exportwissen. Korkbäume prägen hier das typische, warme Landschaftsbild. Für SEO zu Portugal, Kork und Agrarkultur ist Coruche sehr relevant.",
      hu: "Coruche a portugál parafaipar és az alentejói paratölgy-táj egyik központja. A régió a fenntartható mezőgazdaságot, a hagyományos használatot és az exporttudást képviseli. A tájat itt jellegzetesen a parafák formálják. Portugália, parafa és agrárkultúra SEO-jában Coruche nagyon releváns.",
      ro: "Coruche este un centru al industriei portugheze a plutei și al peisajului cu stejari de plută din Alentejo. Regiunea reprezintă agricultura durabilă, utilizarea tradițională și know-how-ul de export. Arborii de plută dau peisajului un aspect foarte specific. Pentru SEO despre Portugalia, plută și cultură agricolă, Coruche este foarte relevant.",
      en: "Coruche is a center of Portugal's cork industry and the cork oak landscape in Alentejo. The region represents sustainable agriculture, traditional use, and export know-how. Cork trees shape the area's distinctive warm landscape. For Portugal, cork, and agricultural culture SEO, Coruche is highly relevant."
    },
    facts: {
      de: ["Coruche ist ein Korkzentrum.", "Korkeichen prägen die Landschaft.", "Die Region liegt im Alentejo.", "Portugal ist Weltmarktführer bei Kork.", "Die Nutzung ist nachhaltig und traditionell."],
      hu: ["Coruche a parafa központja.", "A paratölgyek formálják a tájat.", "A régió az Alentejóban található.", "Portugália a parafa világszintű vezetője.", "A hasznosítás fenntartható és hagyományos."],
      ro: ["Coruche este un centru al plutei.", "Stejarii de plută definesc peisajul.", "Regiunea se află în Alentejo.", "Portugalia este lider mondial la plută.", "Utilizarea este durabilă și tradițională."],
      en: ["Coruche is a cork center.", "Cork oaks define the landscape.", "The region lies in Alentejo.", "Portugal is a world leader in cork.", "The use is sustainable and traditional."]
    },
    image: "/geo-images/portugal/agri-coruche-cork-oaks.webp"
  },
  {
    id: "industry-autoeuropa-palmela",
    type: "industry",
    parent: "portugal",
    coords: [-8.5708, 38.5722],
    name: { de: "Autoeuropa Palmela", hu: "Autoeuropa Palmela", ro: "Autoeuropa Palmela", en: "Autoeuropa Palmela" },
    description: {
      de: "Autoeuropa in Palmela ist eines der bekanntesten Industrieprojekte Portugals und ein Symbol moderner Fertigung. Der Standort steht für Automobilproduktion, Exportkraft und technische Fachkompetenz. Seine Nähe zu Setúbal und Lissabon macht ihn wirtschaftlich besonders wichtig. Für SEO zu Industrie, Portugal und Investitionen ist Autoeuropa ein klarer Treffer.",
      hu: "A Palmelában működő Autoeuropa Portugália egyik legismertebb ipari projektje és a modern gyártás jelképe. A helyszín az autógyártást, az exporterejét és a műszaki szakértelmet képviseli. Setúbalhoz és Lisszabonhoz való közelsége gazdaságilag különösen fontossá teszi. Ipar, Portugália és befektetések SEO-jában az Autoeuropa biztos találat.",
      ro: "Autoeuropa din Palmela este unul dintre cele mai cunoscute proiecte industriale din Portugalia și un simbol al producției moderne. Locația reprezintă producția auto, forța de export și competența tehnică. Apropierea de Setubal și Lisabona îl face deosebit de important economic. Pentru SEO despre industrie, Portugalia și investiții, Autoeuropa este un termen clar.",
      en: "Autoeuropa in Palmela is one of Portugal's best-known industrial projects and a symbol of modern manufacturing. The site represents car production, export power, and technical expertise. Its proximity to Setubal and Lisbon makes it economically especially important. For industry, Portugal, and investment SEO, Autoeuropa is a clear winner."
    },
    facts: {
      de: ["Der Standort liegt in Palmela.", "Automobilproduktion ist der Schwerpunkt.", "Er ist eng mit Exporten verbunden.", "Die Region profitiert wirtschaftlich stark.", "Das Werk steht für moderne Industrie."],
      hu: ["A telephely Palmelában található.", "A fő tevékenység az autógyártás.", "Erősen kötődik az exporthoz.", "A régió gazdaságilag sokat profitál.", "Az üzem a modern ipart képviseli."],
      ro: ["Locația se află în Palmela.", "Producția auto este activitatea principală.", "Este strâns legată de exporturi.", "Regiunea beneficiază economic foarte mult.", "Uzina reprezintă industria modernă."],
      en: ["The site is in Palmela.", "Car production is the main focus.", "It is strongly tied to exports.", "The region benefits economically.", "The plant stands for modern industry."]
    },
    image: "/geo-images/portugal/industry-autoeuropa-palmela.webp"
  },
  {
    id: "hist-convent-christ-tomar",
    type: "historical",
    parent: "portugal",
    coords: [-8.4292, 39.6034],
    name: { de: "Convento de Cristo", hu: "Convento de Cristo", ro: "Convento de Cristo", en: "Convent of Christ" },
    description: {
      de: "Der Convento de Cristo in Tomar ist eines der wichtigsten historischen Monumente Portugals. Die Anlage war einst mit den Tempelrittern verbunden und spÃ¤ter mit dem Christusorden. Romanik, Gotik, Manuelinik und Renaissance liegen hier dicht beieinander. FÃ¼r Portugal-Historie, KlÃ¶ster und UNESCO-SEO ist dieser Ort ein SchlÃ¼sselbegriff.",
      hu: "A tomari Convento de Cristo PortugÃ¡lia egyik legfontosabb tÃ¶rtÃ©nelmi emlÃ©khelye. A komplexum egykor a templomosokhoz, kÃ©sÅ‘bb a Krisztus-rendhez kapcsolÃ³dott. Itt a romanika, a gÃ³tika, a mÃ¡nuel stÃ­lus Ã©s a reneszÃ¡nsz kÃ¶zel kerÃ¼l egymÃ¡shoz. PortugÃ¡lia-tÃ¶rtÃ©nelemhez, kolostorokhoz Ã©s UNESCO SEO-hoz ez alapvetÅ‘ kulcsszÃ³.",
      ro: "Convento de Cristo din Tomar este unul dintre cele mai importante monumente istorice ale Portugaliei. Complexul a fost legat mai Ã®ntÃ¢i de Templieri È™i apoi de Ordinul lui Hristos. Romanicul, goticul, stilul manuelin È™i RenaÈ™terea se aflÄƒ aici foarte aproape unele de altele. Pentru istoria Portugaliei, mÄƒnÄƒstiri È™i SEO UNESCO, acest loc este un termen-cheie.",
      en: "The Convent of Christ in Tomar is one of Portugal's most important historic monuments. The complex was first linked to the Knights Templar and later to the Order of Christ. Romanesque, Gothic, Manueline, and Renaissance styles sit close together here. For Portugal history, monasteries, and UNESCO SEO, this place is a key term."
    },
    facts: {
      de: ["Der Ort war ein Templerzentrum.", "Der Komplex gehÃ¶rt zum UNESCO-Welterbe.", "Die Runde Kirche ist besonders bekannt.", "Tomar und das Monument sind eng verbunden.", "Die Architektur zeigt mehrere Epochen."],
      hu: ["A hely templomos központ volt.", "A komplexum az UNESCO világerökség része.", "A körtemplom különösen híres.", "Tomar és az emlékhely szorosan összekapcsolódik.", "Az építészet több korszakot mutat."],
      ro: ["Locul a fost un centru al Templierilor.", "Complexul face parte din patrimoniul UNESCO.", "Biserica rotundă este deosebit de cunoscută.", "Tomar și monumentul sunt strâns legate.", "Arhitectura arată mai multe epoci."],
      en: ["The site was a Templar center.", "The complex is part of UNESCO World Heritage.", "The round church is especially famous.", "Tomar and the monument are closely linked.", "The architecture shows several eras."]
    },
    image: "/geo-images/portugal/hist-convent-christ-tomar.webp"
  },
  {
    id: "hist-peniche-fortress",
    type: "historical",
    parent: "portugal",
    coords: [-9.3805, 39.3553],
    name: { de: "Festung Peniche", hu: "Peniche erőd", ro: "Cetatea Peniche", en: "Peniche Fortress" },
    description: {
      de: "Die Festung Peniche bewacht die felsige Halbinsel an der Westküste Portugals. Der Ort war lange ein militärischer Stützpunkt und spÃ¤ter auch ein Symbol politischer Haft. Heute verbindet er Meeresblick, Geschichte und GedÃ¤chtniskultur. FÃ¼r Portugal-Reisen ist Peniche ein starker Name fÃ¼r Festungen, KÃ¼ste und Zeitgeschichte.",
      hu: "A Peniche erőd Portugália nyugati partján, a sziklás félszigeten áll. A hely hosszú ideig katonai támaszpont volt, később pedig a politikai fogva tartás egyik szimbóluma. Ma a tengerre néző panorámát, a történelmet és az emlékezetkultúrát köti össze. Portugáliai utazáshoz Peniche erős név az erődök, a part és a közelmúlt történelme témájában.",
      ro: "Cetatea Peniche păzește peninsula stâncoasă de pe coasta vestică a Portugaliei. Locul a fost mult timp o bază militară și mai târziu un simbol al detenției politice. Astăzi combină priveliștile spre mare, istoria și memoria colectivă. Pentru călătoriile în Portugalia, Peniche este un nume puternic pentru forturi, coastă și istorie recentă.",
      en: "Peniche Fortress guards the rocky peninsula on Portugal's west coast. The site was long a military base and later a symbol of political imprisonment. Today it combines sea views, history, and memory culture. For Portugal travel, Peniche is a strong name for forts, coast, and modern history."
    },
    facts: {
      de: ["Die Festung liegt am Atlantik.", "Sie war ein wichtiger Militärpunkt.", "Später diente sie als Gefängnis.", "Peniche ist mit Erinnerungskultur verbunden.", "Die Lage macht sie landschaftlich auffällig."],
      hu: ["Az erőd az Atlanti-óceán partján áll.", "Fontos katonai pont volt.", "Később börtönként is szolgált.", "Peniche az emlékezetkultúrához kapcsolódik.", "A fekvése miatt tájképi szempontból is látványos."],
      ro: ["Cetatea se află pe Atlantic.", "A fost un punct militar important.", "Mai târziu a servit ca închisoare.", "Peniche este legată de memoria colectivă.", "Poziția o face foarte vizibilă peisagistic."],
      en: ["The fortress sits on the Atlantic.", "It was an important military point.", "Later it served as a prison.", "Peniche is tied to memory culture.", "Its location makes it highly visible."]
    },
    image: "/geo-images/portugal/hist-peniche-fortress.webp"
  },
  {
    id: "hist-national-tile-museum",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.1136, 38.7252],
    name: { de: "Nationales Azulejo-Museum", hu: "Azulejo Nemzeti Múzeum", ro: "Muzeul Național al Azulejo", en: "National Tile Museum" },
    description: {
      de: "Das Nationale Azulejo-Museum in Lissabon widmet sich der portugiesischen Fliesenkunst. Es zeigt, wie Azulejos Architektur, Alltag und visuelle IdentitÃ¤t geprÃ¤gt haben. Das Museum liegt in einem ehemaligen Kloster und hat selbst hohen historischen Wert. FÃ¼r Kultur-SEO zu Lissabon, Keramik und portugiesischem Design ist es sehr stark.",
      hu: "A lisszaboni Azulejo Nemzeti Múzeum a portugál csempekultúrát mutatja be. A kiállítás megmutatja, hogyan formálták az azulejók az építészetet, a hétköznapokat és a vizuális identitást. A múzeum egy egykori kolostorban működik, így önmagában is történelmi érték. Lisszabon, kerámia és portugál dizájn SEO-jához nagyon erős helyszín.",
      ro: "Muzeul Național al Azulejo din Lisabona este dedicat artei portugheze a faianței. Expoziția arată cum azulejos au modelat arhitectura, viața de zi cu zi și identitatea vizuală. Muzeul funcționează într-o fostă mănăstire și are, prin el însuși, valoare istorică. Pentru SEO despre Lisabona, ceramică și design portughez, este un loc foarte puternic.",
      en: "The National Tile Museum in Lisbon is dedicated to Portuguese tile art. It shows how azulejos shaped architecture, everyday life, and visual identity. The museum sits in a former convent and has its own historic value. For SEO about Lisbon, ceramics, and Portuguese design, it is a very strong place."
    },
    facts: {
      de: ["Azulejos sind ein zentrales Symbol Portugals.", "Das Museum befindet sich in einem Kloster.", "Es dokumentiert Jahrhunderte von Keramikkunst.", "Lissabon ist der beste Standort für dieses Thema.", "Die Sammlung ist fÃ¼r Designreisen wichtig."],
      hu: ["Azulejók Portugália egyik fő szimbólumai.", "A múzeum egy kolostorban működik.", "Évszázadok kerámiaművészetét mutatja be.", "Lisszabon a téma legjobb helyszíne.", "A gyűjtemény fontos a dizájnutazásokhoz."],
      ro: ["Azulejos sunt un simbol central al Portugaliei.", "Muzeul se află într-o fostă mănăstire.", "Documentează secole de artă ceramică.", "Lisabona este cel mai bun loc pentru acest subiect.", "Colecția este importantă pentru tururile de design."],
      en: ["Azulejos are a central symbol of Portugal.", "The museum is in a former convent.", "It documents centuries of ceramic art.", "Lisbon is the best location for this theme.", "The collection matters for design travel."]
    },
    image: "/geo-images/portugal/hist-national-tile-museum.webp"
  },
  {
    id: "land-sao-jorge-castle",
    type: "landmark",
    parent: "city-lisboa",
    coords: [-9.1334, 38.7139],
    name: { de: "Burg São Jorge", hu: "Szent György vára", ro: "Castelul São Jorge", en: "São Jorge Castle" },
    description: {
      de: "Die Burg São Jorge Ã¼berragt das historische Zentrum von Lissabon. Ihre Mauern erinnern an maurische und mittelalterliche Schichten der Stadtgeschichte. Von oben sieht man den Tejo, die Altstadt und die HÃ¼gel der Hauptstadt. FÃ¼r SEO zu Lissabon, Burgen und Aussichtspunkten ist sie ein starker Begriff.",
      hu: "A São Jorge-vár Lisszabon történelmi központja fölé magasodik. Falai a várostörténet mór és középkori rétegeire emlékeztetnek. Fentről jól látható a Tejo, az óváros és a főváros dombjai. Lisszabon, várak és kilátópontok SEO-jához erős kulcsszó.",
      ro: "Castelul São Jorge domină centrul istoric al Lisabonei. Zidurile sale amintesc de straturile maure și medievale ale orașului. De sus se văd Tejo, orașul vechi și colinele capitalei. Pentru SEO despre Lisabona, castele și puncte de belvedere, este un termen puternic.",
      en: "São Jorge Castle overlooks Lisbon's historic center. Its walls recall the Moorish and medieval layers of the city. From the top you can see the Tagus, the old town, and the capital's hills. For SEO about Lisbon, castles, and viewpoints, it is a strong term."
    },
    facts: {
      de: ["Die Burg ist ein Symbol Lissabons.", "Sie liegt auf einem der hÃ¶chsten HÃ¼gel.", "Die Aussicht auf den Tejo ist berÃ¼hmt.", "Der Ort verbindet maurische und portugiesische Geschichte.", "Die Mauern sind bis heute markant."],
      hu: ["A vár Lisszabon egyik jelképe.", "A város egyik legmagasabb dombján áll.", "A Tejóra nyíló kilátás híres.", "A hely mór és portugál történelmet kapcsol össze.", "A falak ma is meghatározóak."],
      ro: ["Castelul este un simbol al Lisabonei.", "Se află pe unul dintre cele mai înalte dealuri.", "Priveliștea spre Tejo este celebră.", "Locul combină istoria maură și portugheză.", "Zidurile sunt și astăzi foarte vizibile."],
      en: ["The castle is a symbol of Lisbon.", "It sits on one of the highest hills.", "The view over the Tagus is famous.", "The site combines Moorish and Portuguese history.", "The walls remain highly distinctive."]
    },
    image: "/geo-images/portugal/land-sao-jorge-castle.webp"
  }
];

export const portugalNature: POI[] = [
  {
    id: "nat-douro-valley",
    type: "landmark",
    parent: "portugal",
    coords: [-7.5, 41.1],
    name: { de: "Douro-Tal", hu: "Douro-völgy", ro: "Valea Douro", en: "Douro Valley" },
    description: {
      en: "The Douro Valley is a stunning region in Northern Portugal, famous for being the oldest demarcated wine region in the world. The river Douro winds through steep hillsides covered in terraced vineyards, creating a unique and beautiful landscape. It is the birthplace of Port wine and offers visitors the chance to visit historic wine estates (quintas), enjoy river cruises, and experience traditional Portuguese hospitality.",
      de: "Das Douro-Tal ist eine beeindruckende Region in Nordportugal, bekannt als das älteste abgegrenzte Weinbaugebiet der Welt. Der Fluss Douro windet sich durch steile Hänge, die mit terrassierten Weinbergen bedeckt sind, und schafft so eine einzigartige und wunderschöne Landschaft. Es ist die Geburtsstätte des Portweins und bietet Besuchern die Möglichkeit, historische Weingüter (Quintas) zu besuchen, Flusskreuzfahrten zu unternehmen und traditionelle portugiesische Gastfreundschaft zu erleben.",
      hu: "A Douro-völgy egy lenyűgöző régió Észak-Portugáliában, amely arról híres, hogy a világ legrégebbi kijelölt borvidéke. A Douro-folyó teraszos szőlőültetvényekkel borított meredek domboldalak között kanyarog, egyedülálló és gyönyörű tájat alkotva. Ez a portói bor szülőhelye, és lehetőséget kínál a látogatóknak történelmi borbirtokok (quinták) meglátogatására, folyami hajóutakra és a hagyományos portugál vendégszeretet megtapasztalására.",
      ro: "Valea Douro este o regiune uimitoare din nordul Portugaliei, faimoasă pentru că este cea mai veche regiune viticolă demarcată din lume. Râul Douro șerpuiește prin versanți abrupți acoperiți cu podgorii terasate, creând un peisaj unic și frumos. Este locul de naștere al vinului de Porto și oferă vizitatorilor șansa de a vizita proprietăți viticole istorice (quintas), de a se bucura de croaziere pe râu și de a experimenta ospitalitatea tradițională portugheză."
    },
    facts: {
      en: ["The Alto Douro Wine Region is a UNESCO World Heritage site.","The river flows from Spain to Porto.","The harvest season (vindima) is a major cultural event.","The region is also known for its olive oil and almonds."],
      de: ["Die Weinregion Alto Douro ist ein UNESCO-Weltkulturerbe.","Der Fluss fließt von Spanien nach Porto.","Die Erntezeit (Vindima) ist ein bedeutendes kulturelles Ereignis.","Die Region ist auch für ihr Olivenöl und ihre Mandeln bekannt."],
      hu: ["Az Alto Douro borvidék az UNESCO Világörökség része.","A folyó Spanyolországból folyik Porto felé.","A szüreti szezon (vindima) jelentős kulturális esemény.","A régió olívaolajáról és mandulájáról is ismert."],
      ro: ["Regiunea viticolă Alto Douro este un sit al Patrimoniului Mondial UNESCO.","Râul curge din Spania spre Porto.","Sezonul recoltei (vindima) este un eveniment cultural major.","Regiunea este cunoscută și pentru uleiul de măsline și migdale."]
    },
    image: "/geo-images/portugal/douro-valley.webp",
  },
  {
    id: "nat-douro",
    type: "landmark",
    parent: "portugal",
    coords: [-7.8, 41.2],
    name: { de: "Douro-Region", hu: "Douro-völgy", ro: "Regiunea Douro", en: "Douro Valley" },
    description: {
      de: "Die Douro-Region ist das älteste abgegrenzte Weinbaugebiet der Welt und gehört zum UNESCO-Welterbe. Die terrassierten Hänge entlang des Flusses bieten eine atemberaubende Kulisse für den Weinbau.",
      hu: "A Douro-völgy a világ legrégebbi kijelölt borvidéke és az UNESCO világörökség része. A folyó menti teraszos domboldalak lélegzetelállító hátteret biztosítanak a szőlőtermesztéshez.",
      ro: "Regiunea Douro este cea mai veche regiune viticolă demarcată din lume și face parte din patrimoniul UNESCO. Versanții terasați de-a lungul râului oferă un decor uluitor pentru viticultură.",
      en: "The Douro Valley is the oldest demarcated wine region in the world and a UNESCO World Heritage site. The terraced hillsides along the river provide a breathtaking backdrop for viticulture."
    },
    facts: {
      de: ["Wein wird hier seit über 2.000 Jahren angebaut.", "Es ist die Heimat des Portweins.", "Die Landschaft wurde über Jahrhunderte von Menschenhand geformt.", "Der Fluss entspringt in Spanien.", "Schifffahrten auf dem Douro sind sehr beliebt."],
      hu: ["Több mint 2000 éve termelnek itt bort.", "Ez a portói bor hazája.", "A tájat évszázadok alatt emberi kéz formálta.", "A folyó Spanyolországban ered.", "A Douro-folyón való hajózás nagyon népszerű."],
      ro: ["Vinul este produs aici de peste 2.000 de ani.", "Este patria vinului de Porto.", "Peisajul a fost modelat de mâna omului de-a lungul secolelor.", "Râul izvorăște din Spania.", "Croazierele pe Douro sunt foarte populare."],
      en: ["Wine has been produced here for over 2,000 years.", "It is the home of Port wine.", "The landscape has been shaped by human hands over centuries.", "The river rises in Spain.", "Boat trips on the Douro are very popular."]
    },
    image: "/geo-images/portugal/nat-douro.webp"
  },
  {
    id: "nat-serra-estrela",
    type: "landmark",
    parent: "portugal",
    coords: [-7.6167, 40.3217],
    name: { de: "Serra da Estrela", hu: "Serra da Estrela", ro: "Serra da Estrela", en: "Serra da Estrela" },
    description: {
      de: "Die Serra da Estrela ist das höchste Gebirge auf dem portugiesischen Festland. Es ist ein bedeutendes Naturschutzgebiet und bietet im Winter die einzige Möglichkeit zum Skifahren in Portugal.",
      hu: "A Serra da Estrela Portugália szárazföldi részének legmagasabb hegysége. Fontos természetvédelmi terület, és télen az egyetlen síelési lehetőséget kínálja az országban.",
      ro: "Serra da Estrela este cel mai înalt lanț muntos din Portugalia continentală. Este o rezervație naturală importantă și oferă singura posibilitate de schi din Portugalia în timpul iernii.",
      en: "Serra da Estrela is the highest mountain range in mainland Portugal. It is an important nature reserve and offers the only opportunity for skiing in Portugal during winter."
    },
    facts: {
      de: ["Der höchste Punkt ist der Torre mit 1.993 Metern.", "Die Region ist berühmt für ihren Schafskäse (Queijo Serra da Estrela).", "Es gibt hier eine eigene Hunderasse (Cão da Serra da Estrela).", "Das Gebirge ist Teil eines Geoparks.", "Es gibt zahlreiche Gletschertäler zu entdecken."],
      hu: ["Legmagasabb pontja a Torre, 1993 méter.", "A régió híres juhsajtjáról (Queijo Serra da Estrela).", "Saját kutyafajtája van (Cão da Serra da Estrela).", "A hegység egy geopark része.", "Számos gleccservölgy fedezhető fel itt."],
      ro: ["Cel mai înalt punct este Torre, cu 1.993 de metri.", "Regiunea este celebră pentru brânza de oaie (Queijo Serra da Estrela).", "Există o rasă proprie de câini (Cão da Serra da Estrela).", "Munții fac parte dintr-un geoparc.", "Există numeroase văi glaciare de descoperit."],
      en: ["The highest point is Torre, at 1,993 meters.", "The region is famous for its sheep cheese (Queijo Serra da Estrela).", "It has its own dog breed (Cão da Serra da Estrela).", "The mountain range is part of a geopark.", "There are numerous glacial valleys to discover."]
    },
    image: "/geo-images/portugal/nat-serra-estrela.webp"
  },
  {
    id: "nat-ria-formosa",
    type: "landmark",
    parent: "reg-algarve",
    coords: [-7.85, 37.05],
    name: { de: "Ria Formosa", hu: "Ria Formosa Algarve", ro: "Ria Formosa", en: "Ria Formosa" },
    description: {
      de: "Die Ria Formosa an der Algarve ist ein weitläufiges System von Lagunen und Inseln. Es ist eines der wichtigsten Feuchtgebiete für Zugvögel und ein wertvolles Ökosystem.",
      hu: "Az algarvei Ria Formosa egy kiterjedt lagúna- és szigetrendszer. A vándormadarak egyik legfontosabb vizes élőhelye és értékes ökoszisztéma.",
      ro: "Ria Formosa din Algarve este un sistem vast de lagune și insule. Este una dintre cele mai importante zone umede pentru păsările migratoare și un ecosistem valoros.",
      en: "The Ria Formosa in the Algarve is a vast system of lagoons and islands. It is one of the most important wetlands for migratory birds and a valuable ecosystem."
    },
    facts: {
      de: ["Es wurde zu einem der Sieben Naturwunder Portugals gewählt.", "Das Gebiet erstreckt sich über 60 Kilometer Küstenlinie.", "Es ist bekannt für seine Seepferdchen-Population.", "Traditionelle Salzgewinnung wird hier noch betrieben.", "Es ist ein Schutzgebiet für das Purpurhuhn."],
      hu: ["Portugália hét természeti csodájának egyikévé választották.", "A terület 60 kilométernyi partvonal mentén húzódik.", "Híres a csikóhal-populációjáról.", "Még ma is folyik itt hagyományos sólepárlás.", "A kék fú védett élőhelye."],
      ro: ["A fost aleasă una dintre Cele Șapte Minuni Naturale ale Portugaliei.", "Zona se întinde pe 60 de kilometri de coastă.", "Este cunoscută pentru populația sa de căluți de mare.", "Încă se practică extracția tradițională de sare.", "Este o arie protejată pentru găinușa albastră."],
      en: ["It was elected one of the Seven Natural Wonders of Portugal.", "The area extends along 60 kilometers of coastline.", "It is known for its seahorse population.", "Traditional salt production is still practiced here.", "It is a protected area for the purple swamphen."]
    },
    image: "/geo-images/portugal/nat-ria-formosa.webp"
  },
  {
    id: "nat-benagil",
    type: "landmark",
    parent: "reg-algarve",
    coords: [-8.4263, 37.0914],
    name: { de: "Benagil-Höhle", hu: "Benagil barlang", ro: "Peștera Benagil", en: "Benagil Cave" },
    description: {
      de: "Die Benagil-Höhle ist eine spektakuläre Meereshöhle an der Algarveküste, bekannt für ihre kreisrunde Deckenöffnung. Sie ist nur über das Meer erreichbar und ein Highlight jeder Küstentour.",
      hu: "A Benagil-barlang egy látványos tengeri barlang az Algarve-parton, amely kör alakú mennyezeti nyílásáról híres. Csak a tenger felől érhető el, és minden parti túra fénypontja.",
      ro: "Peștera Benagil este o peșteră marină spectaculoasă de pe coasta Algarve, cunoscută pentru deschiderea sa circulară din tavan. Este accesibilă doar pe mare și este un punct culminant al oricărui tur de coastă.",
      en: "The Benagil Cave is a spectacular sea cave on the Algarve coast, famous for its circular ceiling opening. It is only accessible by sea and is a highlight of any coastal tour."
    },
    facts: {
      de: ["Das Loch in der Decke wird 'Auge' genannt.", "Im Inneren der Höhle befindet sich ein kleiner Sandstrand.", "Sie wurde durch Meereserosion geformt.", "Der beste Weg dorthin ist mit dem Boot oder Kajak.", "Sie gehört zu den meistfotografierten Orten Portugals."],
      hu: ["A mennyezeten lévő nyílást 'szemnek' nevezik.", "A barlang belsejében egy kis homokos strand található.", "A tengeri erózió formálta.", "Legjobban hajóval vagy kajakkal közelíthető meg.", "Portugália egyik legtöbbet fotózott helyszíne."],
      ro: ["Deschiderea din tavan este numită 'ochi'.", "În interiorul peșterii se află o mică plajă cu nisip.", "A fost formată prin eroziune marină.", "Cea mai bună cale de a ajunge acolo este cu barca sau caiacul.", "Este unul dintre cele mai fotografiate locuri din Portugalia."],
      en: ["The hole in the ceiling is called the 'eye'.", "Inside the cave is a small sandy beach.", "It was formed by sea erosion.", "The best way to get there is by boat or kayak.", "It is one of the most photographed places in Portugal."]
    },
    image: "/geo-images/portugal/nat-benagil.webp"
  },
  {
    id: "nat-sintra-cascais",
    type: "landmark",
    parent: "portugal",
    coords: [-9.4208, 38.7940],
    name: { de: "Sintra-Cascais NP", hu: "Sintra-Cascais NP", ro: "Parcul Natural Sintra-Cascais", en: "Sintra-Cascais NP" },
    description: {
      de: "Der Naturpark Sintra-Cascais erstreckt sich von den bewaldeten Bergen von Sintra bis zur zerklüfteten Atlantikküste. Er umfasst das Cabo da Roca, den westlichsten Punkt des europäischen Festlands.",
      hu: "A Sintra-Cascais natúrpark Sintra erdős hegyeitől az Atlanti-óceán csipkés partjáig terjed. Magában foglalja a Cabo da Rocát, az európai szárazföld legnyugatibb pontját.",
      ro: "Parcul Natural Sintra-Cascais se întinde de la munții împăduriți din Sintra până la coasta accidentată a Atlanticului. Acesta include Cabo da Roca, cel mai vestic punct al Europei continentale.",
      en: "The Sintra-Cascais Natural Park extends from the forested mountains of Sintra to the rugged Atlantic coast. It includes Cabo da Roca, the westernmost point of mainland Europe."
    },
    facts: {
      de: ["Cabo da Roca ist ein Teil des Parks.", "Die Region hat ein einzigartiges Mikroklima.", "Es gibt hier seltene Pflanzen- und Tierarten.", "Die Klippen bieten spektakuläre Ausblicke auf den Ozean.", "Der Park ist ein beliebtes Ziel für Wanderer."],
      hu: ["A Cabo da Roca a park része.", "A régiónak egyedülálló mikroklímája van.", "Ritka növény- és állatfajok élnek itt.", "A sziklák látványos kilátást nyújtanak az óceánra.", "A park a túrázók népszerű célpontja."],
      ro: ["Cabo da Roca face parte din parc.", "Regiunea are un microclimat unic.", "Există specii rare de plante și animale aici.", "Stâncile oferă vederi spectaculoase asupra oceanului.", "Parcul este o destinatie populară pentru drumeții."],
      en: ["Cabo da Roca is part of the park.", "The region has a unique microclimate.", "There are rare plant and animal species here.", "The cliffs offer spectacular views of the ocean.", "The park is a popular destination for hikers."]
    },
    image: "/geo-images/portugal/nat-sintra-cascais.webp"
  },
  {
    id: "nat-peneda-geres",
    type: "landmark",
    parent: "portugal",
    coords: [-8.15, 41.73],
    name: { de: "Peneda-Gerês NP", hu: "Peneda-Gerês NP", ro: "Parcul Național Peneda-Gerês", en: "Peneda-Gerês NP" },
    description: {
      de: "Der Nationalpark Peneda-Gerês ist Portugals einziger Nationalpark. Er schützt wilde Gebirgslandschaften, alte Dörfer und seltene Tierarten wie wilde Pferde.",
      hu: "A Peneda-Gerês Nemzeti Park Portugália egyetlen nemzeti parkja. Vad hegyi tájakat, régi falvakat és ritka állatfajokat, például vadlovakat véd.",
      ro: "Parcul Național Peneda-Gerês este singurul parc național al Portugaliei. Protejează peisaje montane sălbatice, sate vechi și specii rare, precum caii sălbatici.",
      en: "Peneda-Gerês National Park is Portugal's only national park. It protects wild mountain landscapes, old villages, and rare animals such as wild horses."
    },
    facts: {
      de: ["Es ist der einzige Nationalpark Portugals.", "Der Park liegt im Norden des Landes.", "Er beherbergt wilde Pferde und andere seltene Arten.", "Traditionelle Bergdörfer sind Teil der Landschaft."],
      hu: ["Ez Portugália egyetlen nemzeti parkja.", "A park az ország északi részén található.", "Vadlovak és más ritka fajok élnek itt.", "Hagyományos hegyi falvak is a táj részét képezik."],
      ro: ["Este singurul parc național al Portugaliei.", "Parcul se află în nordul țării.", "Adăpostește cai sălbatici și alte specii rare.", "Satele montane tradiționale fac parte din peisaj."],
      en: ["It is Portugal's only national park.", "The park is in the north of the country.", "It is home to wild horses and other rare species.", "Traditional mountain villages are part of the landscape."]
    },
    image: "/geo-images/portugal/nat-peneda-geres.webp"
  },
  ,
  {
    id: "nat-serra-da-estrela",
    type: "mountain",
    parent: "portugal",
    coords: [-7.614, 40.325],
    name: { de: "Serra da Estrela", hu: "Serra da Estrela", ro: "Serra da Estrela", en: "Serra da Estrela" },
    description: {
      de: "Die Serra da Estrela ist das höchste Gebirge des portugiesischen Festlands und ein wichtiges Naturziel im Inland. Die Region bietet alpine Landschaften, Gletscherformen, Dörfer und Wintertourismus. Im Sommer locken Wanderwege und Panoramen, im Winter oft Schnee. Serra da Estrela ist ein starker SEO-Begriff für Berge, Natur und Zentralportugal.",
      hu: "A Serra da Estrela Portugália szárazföldjének legmagasabb hegysége és fontos természeti célpont a belső területeken. A régió alpesi tájakat, gleccserformákat, falvakat és téli turizmust kínál. Nyáron túraösvények és panorámák, télen gyakran hó várja az utazókat. Serra da Estrela erős SEO-kulcsszó a hegyek, a természet és Közép-Portugália témájában.",
      ro: "Serra da Estrela este cel mai înalt lanț muntos al Portugaliei continentale și o destinație naturală importantă în interior. Regiunea oferă peisaje alpine, forme glaciare, sate și turism de iarnă. Vara atrage prin trasee de drumeție și panorame, iar iarna apare adesea zăpada. Serra da Estrela este un cuvânt-cheie SEO puternic pentru munți, natură și Portugalia centrală.",
      en: "Serra da Estrela is the highest mountain range on mainland Portugal and an important inland nature destination. The region offers alpine scenery, glacial landforms, villages, and winter tourism. In summer it attracts hikers and panoramas, while in winter it often gets snow. Serra da Estrela is a strong SEO keyword for mountains, nature, and central Portugal."
    },
    facts: {
      de: ["Hier liegt der höchste Punkt des Festlands.", "Die Region ist im Winter oft schneereich.", "Sie ist berühmt für den Serra-Käse.", "Es gibt viele Wanderwege.", "Der Naturpark schützt die Landschaft."],
      hu: ["Itt található a szárazföld legmagasabb pontja.", "A régió télen gyakran havas.", "Híres a Serra sajtról.", "Sok túraútvonal található itt.", "A természetvédelmi park védi a tájat."],
      ro: ["Aici se află cel mai înalt punct al continentului.", "Regiunea are adesea zăpadă iarna.", "Este faimoasă pentru brânza Serra.", "Există multe trasee de drumeție.", "Parcul natural protejează peisajul."],
      en: ["It holds the mainland's highest point.", "The region often gets snow in winter.", "It is famous for Serra cheese.", "There are many hiking trails.", "The natural park protects the landscape."]
    },
    image: "/geo-images/portugal/nat-serra-da-estrela.webp"
  },
  {
    id: "nat-pico-mountain",
    type: "mountain",
    parent: "portugal",
    coords: [-28.3934, 38.4698],
    name: { de: "Pico Berg", hu: "Pico-hegy", ro: "Muntele Pico", en: "Pico Mountain" },
    description: {
      de: "Der Pico ist der höchste Berg Portugals und das dramatischste Naturwahrzeichen der Azoren. Der Vulkankegel ragt weit über den Atlantik hinaus und prägt die Insel Pico. Die Landschaft ist vulkanisch, rau und fotografisch sehr stark. Pico Mountain ist ein SEO-Topbegriff für Bergtouren, Azoren und Inselnatur.",
      hu: "A Pico Portugália legmagasabb hegye és az Azori-szigetek legdrámaibb természeti jelképe. A vulkáni kúp messze kiemelkedik az Atlanti-óceán fölé, és meghatározza Pico szigetét. A táj vulkanikus, vad és nagyon fotogén. A Pico-hegy kiemelt SEO-kulcsszó hegyi túrákhoz, azori szigetekhez és szigettermészethez.",
      ro: "Pico este cel mai înalt munte al Portugaliei și cel mai dramatic reper natural al Azorelor. Conul vulcanic se ridică mult deasupra Atlanticului și definește insula Pico. Peisajul este vulcanic, sălbatic și foarte fotogenic. Pico Mountain este un termen SEO de top pentru drumeții montane, Azore și natură insulară.",
      en: "Pico is Portugal's highest mountain and the Azores' most dramatic natural landmark. The volcanic cone rises far above the Atlantic and defines Pico Island. The landscape is volcanic, rugged, and highly photogenic. Pico Mountain is a top SEO term for mountain hiking, the Azores, and island nature."
    },
    facts: {
      de: ["Pico ist Portugals höchster Berg.", "Er liegt auf den Azoren.", "Der Vulkan dominiert die Insel Pico.", "Die Landschaft ist lava- und vulkanisch geprägt.", "Wanderer nutzen ihn als Gipfelziel."],
      hu: ["A Pico Portugália legmagasabb hegye.", "Az Azori-szigeteken található.", "A vulkán uralja Pico szigetét.", "A tájat láva és vulkanikus formák jellemzik.", "A túrázók csúcscélpontként használják."],
      ro: ["Pico este cel mai înalt munte al Portugaliei.", "Se află în Azore.", "Vulcanul domină insula Pico.", "Peisajul este marcat de lavă și forme vulcanice.", "Drumeții îl folosesc drept obiectiv de vârf."],
      en: ["Pico is Portugal's highest mountain.", "It is in the Azores.", "The volcano dominates Pico Island.", "The landscape is shaped by lava and volcanic forms.", "Hikers use it as a summit goal."]
    },
    image: "/geo-images/portugal/nat-pico-mountain.webp"
  },
  {
    id: "nat-sete-cidades-lake",
    type: "lake",
    parent: "portugal",
    coords: [-25.76, 37.864],
    name: { de: "Lagoa das Sete Cidades", hu: "Sete Cidades tava", ro: "Lacul Sete Cidades", en: "Sete Cidades Lake" },
    description: {
      de: "Die Lagoa das Sete Cidades ist einer der berühmtesten Kraterseen der Azoren und ein Symbol der Insel São Miguel. Die Zwillingsfarben des Wassers und die vulkanische Caldera machen den Ort weltbekannt. Aussichtspunkte, Wanderungen und ruhige Dörfer prägen die Umgebung. Sete Cidades ist ein SEO-starker Begriff für Seen, Azoren und Naturreisen.",
      hu: "A Lagoa das Sete Cidades az Azori-szigetek egyik leghíresebb krátertava és São Miguel jelképe. A víz két színe és a vulkanikus kaldera világszerte ismertté teszi. Kilátópontok, túrák és nyugodt falvak jellemzik a környéket. A Sete Cidades erős SEO-kulcsszó tavakhoz, azori szigetekhez és természeti utazásokhoz.",
      ro: "Lagoa das Sete Cidades este unul dintre cele mai faimoase lacuri de crater din Azore și un simbol al insulei São Miguel. Culorile diferite ale apei și caldera vulcanică îl fac celebru în lume. Punctele de belvedere, traseele și satele liniștite definesc zona. Sete Cidades este un termen SEO puternic pentru lacuri, Azore și călătorii în natură.",
      en: "Sete Cidades Lake is one of the Azores' most famous crater lakes and a symbol of São Miguel. The water's twin colors and the volcanic caldera make it world-famous. Viewpoints, hikes, and quiet villages define the area. Sete Cidades is a strong SEO keyword for lakes, the Azores, and nature travel."
    },
    facts: {
      de: ["Der See liegt in einer Vulkancaldera.", "Er ist ein Wahrzeichen von São Miguel.", "Aussichtspunkte sind sehr beliebt.", "Die Landschaft ist oft wolkenreich und fotogen.", "Es gibt viele Wanderoptionen."],
      hu: ["A tó egy vulkáni kalderában fekszik.", "São Miguel jelképe.", "A kilátópontok nagyon népszerűek.", "A táj gyakran felhős és fotogén.", "Sok túralehetőség van."],
      ro: ["Lacul se află într-o calderă vulcanică.", "Este un simbol al insulei São Miguel.", "Punctele de belvedere sunt foarte populare.", "Peisajul este adesea înnorat și fotogenic.", "Există multe opțiuni de drumeție."],
      en: ["The lake sits in a volcanic caldera.", "It is a symbol of São Miguel.", "Viewpoints are very popular.", "The scenery is often cloudy and photogenic.", "There are many hiking options."]
    },
    image: "/geo-images/portugal/nat-sete-cidades-lake.webp"
  },
  {
    id: "nat-lagoa-do-fogo",
    type: "lake",
    parent: "portugal",
    coords: [-25.508, 37.753],
    name: { de: "Lagoa do Fogo", hu: "Lagoa do Fogo", ro: "Lagoa do Fogo", en: "Lagoa do Fogo" },
    description: {
      de: "Die Lagoa do Fogo ist ein geschützter Kratersee im Inneren von São Miguel auf den Azoren. Das Gebiet wirkt wild, grün und oft von Nebel eingerahmt. Es ist ein Paradies für Wanderer, Naturfotografen und ruhige Inselreisen. Lagoa do Fogo ist ein SEO-starker Name für Azoren, Seen und Vulkanlandschaften.",
      hu: "A Lagoa do Fogo egy védett krátertó São Miguel belsejében, az Azori-szigeteken. A terület vad, zöld és gyakran ködbe burkolózik. A túrázók, természetfotósok és csendes szigetutazások paradicsoma. A Lagoa do Fogo erős SEO-név az Azori-szigetek, tavak és vulkanikus tájak témájában.",
      ro: "Lagoa do Fogo este un lac de crater protejat în interiorul insulei São Miguel, în Azore. Zona pare sălbatică, verde și adesea învăluită în ceață. Este un paradis pentru drumeți, fotografi de natură și călătorii liniștite pe insule. Lagoa do Fogo este un nume SEO puternic pentru Azore, lacuri și peisaje vulcanice.",
      en: "Lagoa do Fogo is a protected crater lake in the interior of São Miguel in the Azores. The area feels wild, green, and often wrapped in mist. It is a paradise for hikers, nature photographers, and quiet island travel. Lagoa do Fogo is a strong SEO name for the Azores, lakes, and volcanic landscapes."
    },
    facts: {
      de: ["Der See ist ein Schutzgebiet.", "Er liegt auf São Miguel.", "Wanderwege führen in die Höhenzone.", "Die Landschaft ist vulkanisch geprägt.", "Der Ort ist für Fotos sehr beliebt."],
      hu: ["A tó védett terület.", "São Miguel szigetén található.", "Túraútvonalak vezetnek a magasabbi zónába.", "A táj vulkanikus eredetű.", "A hely nagyon népszerű fotózásra."],
      ro: ["Lacul este o zonă protejată.", "Se află pe São Miguel.", "Traseele duc în zona înaltă.", "Peisajul este de origine vulcanică.", "Locul este foarte popular pentru fotografii."],
      en: ["The lake is protected.", "It is on São Miguel.", "Trails lead into the high zone.", "The landscape is volcanic.", "The spot is very popular for photos."]
    },
    image: "/geo-images/portugal/nat-lagoa-do-fogo.webp"
  }
  ,
  {
    id: "nat-douro-river",
    type: "river",
    parent: "portugal",
    coords: [-7.55, 41.16],
    name: { de: "Douro", hu: "Douro", ro: "Douro", en: "Douro River" },
    description: {
      de: "Der Douro ist einer der großen Flüsse der Iberischen Halbinsel und ein prägendes Element Nordportugals. Er schneidet tiefe Täler durch Weinlandschaften und führt bis nach Porto. Flusskreuzfahrten, Weinberge und historische Städte machen ihn touristisch besonders stark. Douro ist ein SEO-Leitbegriff für Flüsse, Wein und Portugal-Reisen.",
      hu: "A Douro az Ibériai-félsziget egyik nagy folyója és Észak-Portugália meghatározó eleme. Mély völgyeket vág át a borvidékeken, és egészen Portóig vezet. A folyami hajóutak, a szőlőültetvények és a történelmi városok különösen erőssé teszik turisztikailag. A Douro kulcsszó a folyók, a bor és a portugáliai utazások témájában.",
      ro: "Douro este unul dintre marile fluvii ale Peninsulei Iberice și un element definitoriu al nordului Portugaliei. Taie văi adânci prin peisaje viticole și ajunge până la Porto. Croazierele pe râu, podgoriile și orașele istorice îl fac foarte puternic turistic. Douro este un termen SEO important pentru râuri, vin și călătorii în Portugalia.",
      en: "The Douro is one of the great rivers of the Iberian Peninsula and a defining feature of northern Portugal. It cuts deep valleys through wine country and flows all the way to Porto. River cruises, vineyards, and historic towns make it especially strong for tourism. Douro is a key SEO term for rivers, wine, and Portugal travel."
    },
    facts: {
      de: ["Der Fluss mündet bei Porto in den Atlantik.", "Der Douro prägt das Weinland des Nordens.", "Am Fluss liegen viele historische Orte.", "River Cruises sind sehr beliebt.", "Die Landschaft gehört zu Portugals bekanntesten Bildern."],
      hu: ["A folyó Portónál ömlik az Atlanti-óceánba.", "A Douro meghatározza az északi borvidéket.", "A folyó mentén sok történelmi hely van.", "A folyami hajóutak nagyon népszerűek.", "A táj Portugália legismertebb képei közé tartozik."],
      ro: ["Fluviul se varsă în Atlantic la Porto.", "Douro definește regiunea viticolă din nord.", "De-a lungul lui se află multe locuri istorice.", "Croazierele pe râu sunt foarte populare.", "Peisajul este printre cele mai cunoscute imagini ale Portugaliei."],
      en: ["The river reaches the Atlantic at Porto.", "The Douro defines the northern wine region.", "Many historic places sit along the river.", "River cruises are very popular.", "The landscape is one of Portugal's best-known images."]
    },
    image: "/geo-images/portugal/nat-douro-river.webp"
  },
  {
    id: "nat-tejo-river",
    type: "river",
    parent: "portugal",
    coords: [-9.08, 38.78],
    name: { de: "Tejo", hu: "Tejo", ro: "Tagus", en: "Tagus River" },
    description: {
      de: "Der Tejo ist der längste Fluss der Iberischen Halbinsel und prägt das Leben rund um Lissabon. Seine Mündung bildet eine der wichtigsten Wasserachsen Portugals. Der Fluss verbindet Geschichte, Hafenwirtschaft und Stadtkultur auf eindrucksvolle Weise. Tagus ist ein SEO-starker Name für Flüsse, Lissabon und portugiesische Küstenlandschaften.",
      hu: "A Tejo az Ibériai-félsziget leghosszabb folyója és Lisszabon környékének meghatározó eleme. Torkolata Portugália egyik legfontosabb vízi tengelyét alkotja. A folyó látványosan kapcsolja össze a történelmet, a kikötői gazdaságot és a városi kultúrát. A Tagus erős SEO-név a folyók, Lisszabon és a portugál tengerparti tájak témájában.",
      ro: "Tagus este cel mai lung fluviu al Peninsulei Iberice și definește viața din jurul Lisabonei. Estuarul său formează una dintre cele mai importante axe de apă ale Portugaliei. Fluviul leagă într-un mod impresionant istoria, economia portuară și cultura urbană. Tagus este un nume SEO puternic pentru râuri, Lisabona și peisaje de coastă portugheze.",
      en: "The Tagus is the longest river on the Iberian Peninsula and defines life around Lisbon. Its estuary forms one of Portugal's most important waterways. The river powerfully connects history, harbor economy, and city culture. Tagus is a strong SEO name for rivers, Lisbon, and Portuguese coastal scenery."
    },
    facts: {
      de: ["Lissabon liegt an der Tejo-Mündung.", "Der Fluss ist für Portugal historisch zentral.", "Er unterstützt Hafen- und Stadträume.", "Die Ufer sind touristisch wichtig.", "Der Tejo ist ein nationales Symbol."],
      hu: ["Lisszabon a Tejo torkolatánál fekszik.", "A folyó történelmileg központi Portugália számára.", "Kikötői és városi tereket támogat.", "A partjai turisztikailag fontosak.", "A Tejo nemzeti szimbólum."],
      ro: ["Lisabona se află la estuarul Tagusului.", "Fluviul este central în istoria Portugaliei.", "Sprijină zonele portuare și urbane.", "Malurile sale sunt importante turistic.", "Tagus este un simbol național."],
      en: ["Lisbon sits on the Tagus estuary.", "The river is historically central to Portugal.", "It supports harbor and urban spaces.", "Its banks matter greatly for tourism.", "The Tagus is a national symbol."]
    },
    image: "/geo-images/portugal/nat-tejo-river.webp"
  },
  {
    id: "nat-berlengas-island",
    type: "island",
    parent: "portugal",
    coords: [-9.511, 39.406],
    name: { de: "Berlengas", hu: "Berlengas", ro: "Berlengas", en: "Berlengas Islands" },
    description: {
      de: "Die Berlengas sind eine kleine Inselgruppe vor der Westküste Portugals und ein geschütztes Naturparadies. Steile Klippen, klares Wasser und eine wilde Atlantiklandschaft machen sie besonders reizvoll. Die Inseln sind beliebt für Bootsausflüge, Vogelbeobachtung und ruhige Naturerlebnisse. Berlengas ist ein SEO-starker Begriff für Inseln, Küste und Portugal-Natur.",
      hu: "A Berlengas egy kis szigetcsoport Portugália nyugati partjainál és védett természeti paradicsom. Meredek sziklák, tiszta víz és vad atlanti táj teszi különösen vonzóvá. A szigetek népszerűek hajókirándulásokhoz, madármegfigyeléshez és csendes természeti élményekhez. Berlengas erős SEO-kulcsszó szigetekhez, partvidékhez és portugál természethez.",
      ro: "Berlengas este un mic arhipelag în largul coastei de vest a Portugaliei și un paradis natural protejat. Stâncile abrupte, apa limpede și peisajul sălbatic atlantic îl fac foarte atractiv. Insulele sunt populare pentru excursii cu barca, observarea păsărilor și experiențe liniștite în natură. Berlengas este un termen SEO puternic pentru insule, coastă și natură portugheză.",
      en: "The Berlengas are a small island group off Portugal's west coast and a protected natural paradise. Steep cliffs, clear water, and wild Atlantic scenery make them especially appealing. The islands are popular for boat trips, birdwatching, and quiet nature experiences. Berlengas is a strong SEO keyword for islands, coastline, and Portuguese nature."
    },
    facts: {
      de: ["Die Inseln liegen vor Peniche.", "Es gibt geschützte Meereslebensräume.", "Bootsausflüge sind die Hauptaktivität.", "Die Landschaft ist rau und atlantisch.", "Berlengas sind ein Naturschutzsymbol."],
      hu: ["A szigetek Peniche előtt fekszenek.", "Védett tengeri élőhelyek találhatók itt.", "A hajókirándulások a fő programok.", "A táj vad és atlanti jellegű.", "A Berlengas a természetvédelem jelképe."],
      ro: ["Insulele se află în largul Peniche.", "Există habitate marine protejate.", "Excursiile cu barca sunt activitatea principală.", "Peisajul este sălbatic și atlantic.", "Berlengas este un simbol al conservării naturii."],
      en: ["The islands lie off Peniche.", "There are protected marine habitats.", "Boat trips are the main activity.", "The scenery is rugged and Atlantic.", "Berlengas is a symbol of nature conservation."]
    },
    image: "/geo-images/portugal/nat-berlengas-island.webp"
  },
  {
    id: "nat-madeira-laurisilva",
    type: "forest",
    parent: "portugal",
    coords: [-17.05, 32.78],
    name: { de: "Laurisilva von Madeira", hu: "Madeira lauriszilva erdő", ro: "Laurisilva din Madeira", en: "Madeira Laurisilva" },
    description: {
      de: "Die Laurisilva von Madeira ist ein einzigartiger immergrüner Lorbeerwald und ein UNESCO-geschütztes Naturerbe. Der Wald zeigt eine uralte, feuchte Vegetation mit starkem Inselmikroklima. Wanderwege und Nebelwälder machen ihn zu einem ikonischen Ziel für Öko-Reisen. Laurisilva ist ein SEO-starker Begriff für Wald, Madeira und Naturtourismus.",
      hu: "A madeirai lauriszilva egy egyedülálló örökzöld babérerdő és UNESCO által védett természeti örökség. Az erdő ősi, nedves növényzetet mutat be erős szigeti mikroklímával. Túraútvonalak és köderdők teszik ikonikus ökoturisztikai célponttá. A lauriszilva erős SEO-kulcsszó az erdő, Madeira és a természetturizmus témájában.",
      ro: "Laurisilva din Madeira este o pădure de lauri veșnic verde unică și un patrimoniu natural protejat de UNESCO. Pădurea arată o vegetație veche și umedă, cu un microclimat insular puternic. Traseele și pădurile de ceață o fac o destinație iconică pentru ecoturism. Laurisilva este un termen SEO puternic pentru pădure, Madeira și turismul în natură.",
      en: "Madeira Laurisilva is a unique evergreen laurel forest and a UNESCO-protected natural heritage site. The forest shows ancient, humid vegetation with a strong island microclimate. Trails and mist forests make it an iconic eco-travel destination. Laurisilva is a strong SEO keyword for forest, Madeira, and nature tourism."
    },
    facts: {
      de: ["Der Wald ist UNESCO-geschützt.", "Er ist auf Madeira einzigartig.", "Die Vegetation ist uralt und feucht.", "Wandern ist hier sehr beliebt.", "Das Klima schafft dichte Nebelwälder."],
      hu: ["Az erdő UNESCO-védelem alatt áll.", "Madeirán egyedülálló.", "A növényzet ősi és nedves.", "A túrázás itt nagyon népszerű.", "Az éghajlat sűrű köderdőket hoz létre."],
      ro: ["Pădurea este protejată de UNESCO.", "Este unică în Madeira.", "Vegetația este veche și umedă.", "Drumețiile sunt foarte populare aici.", "Climatul creează păduri dese de ceață."],
      en: ["The forest is UNESCO protected.", "It is unique in Madeira.", "The vegetation is ancient and humid.", "Hiking is very popular here.", "The climate creates dense mist forests."]
    },
    image: "/geo-images/portugal/nat-madeira-laurisilva.webp"
  },
  {
    id: "mount-serra-do-caramulo",
    type: "mountain",
    parent: "city-viseu",
    coords: [-8.14, 40.65],
    name: { de: "Serra do Caramulo", hu: "Serra do Caramulo", ro: "Serra do Caramulo", en: "Caramulo Range" },
    description: {
      de: "Die Serra do Caramulo ist ein markantes Gebirge im Zentrum Nordportugals. Die Landschaft verbindet Felsen, Wälder und kühle Höhenlagen. Sie ist ein gutes Ziel für Panoramen, Wanderungen und ruhige Inlandreisen. Für SEO zu Bergen, Natur und Viseu-Region ist Caramulo sehr passend.",
      hu: "A Serra do Caramulo Észak-Portugália középső részének jellegzetes hegyvonulata. A táj sziklákat, erdőket és hűvös magaslatokat kapcsol össze. Jó célpont panorámákhoz, túrákhoz és nyugodt belső utazásokhoz. Hegyek, természet és a Viseu-régió SEO-jához a Caramulo nagyon megfelelő.",
      ro: "Serra do Caramulo este un masiv montan important din centrul nordic al Portugaliei. Peisajul combină stânci, păduri și altitudini răcoroase. Este o destinație bună pentru panorame, drumeții și călătorii liniștite în interior. Pentru SEO despre munți, natură și regiunea Viseu, Caramulo este foarte potrivită.",
      en: "The Serra do Caramulo is a distinctive mountain range in central northern Portugal. The landscape combines rock, forest, and cool high ground. It is a good destination for panoramas, hiking, and quiet inland travel. For SEO about mountains, nature, and the Viseu region, Caramulo fits very well."
    },
    facts: {
      de: ["Das Gebirge liegt im Zentrum Nordportugals.", "Wanderungen sind hier beliebt.", "Die Höhenlage sorgt für kühleres Klima.", "Wald und Fels wechseln sich ab.", "Die Region ist landschaftlich sehr ruhig."],
      hu: ["A hegyvidék Észak-Portugália középső részén van.", "A túrázás itt népszerű.", "A magas fekvés hűvösebb klímát ad.", "Erdő és szikla váltakozik.", "A régió tájképileg nagyon nyugodt."],
      ro: ["Masivul se află în centrul nordic al Portugaliei.", "Drumețiile sunt populare aici.", "Altitudinea oferă un climat mai răcoros.", "Pădurea și stânca se alternează.", "Regiunea este foarte liniștită peisagistic."],
      en: ["The range sits in central northern Portugal.", "Hiking is popular here.", "The altitude creates a cooler climate.", "Forest and rock alternate.", "The region feels very calm."]
    },
    image: "/geo-images/portugal/mount-serra-do-caramulo.webp"
  },
  {
    id: "mount-serra-de-montejunto",
    type: "mountain",
    parent: "city-lisboa",
    coords: [-9.063, 39.191],
    name: { de: "Serra de Montejunto", hu: "Serra de Montejunto", ro: "Serra de Montejunto", en: "Montejunto Range" },
    description: {
      de: "Die Serra de Montejunto ist ein kleines, aber markantes Gebirge nördlich von Lissabon. Der Kamm bietet Ausblicke über die Küstenebene und das Inland. Die Höhenzüge sind beliebt für Spaziergänge und ruhige Naturerlebnisse. Für SEO zu Bergen nahe Lissabon und Naturausflügen ist Montejunto sehr nützlich.",
      hu: "A Serra de Montejunto egy kicsi, de jellegzetes hegyvidék Lisszabontól északra. A gerinc kilátást ad a part menti síkságra és a belső területekre. A magaslatok népszerűek sétákhoz és nyugodt természetélményekhez. Lisszabon közeli hegyek és természetes kirándulások SEO-jához Montejunto nagyon hasznos.",
      ro: "Serra de Montejunto este un lanț montan mic, dar distinct, la nord de Lisabona. Culmea oferă priveliști asupra câmpiei de coastă și a interiorului. Altitudinile sunt populare pentru plimbări și experiențe liniștite în natură. Pentru SEO despre munți lângă Lisabona și excursii în natură, Montejunto este foarte utilă.",
      en: "The Serra de Montejunto is a small but distinctive mountain range north of Lisbon. The ridge offers views over the coastal plain and inland areas. The high ground is popular for walks and quiet nature experiences. For SEO about mountains near Lisbon and nature outings, Montejunto is very useful."
    },
    facts: {
      de: ["Die Serra liegt nördlich von Lissabon.", "Sie bietet weite Blicke auf Küste und Inland.", "Sie ist gut für kurze Naturausflüge.", "Die Gegend ist ruhig und wenig urbanisiert.", "Der Kamm ist leicht erkennbar."],
      hu: ["A hegyvonulat Lisszabontól északra van.", "Széles kilátást ad a partra és a belső vidékekre.", "Rövid természetjárásra kiváló.", "A térség nyugodt és kevéssé urbanizált.", "A gerinc könnyen felismerhető."],
      ro: ["Masivul se află la nord de Lisabona.", "Oferă priveliști largi asupra coastelor și interiorului.", "Este bun pentru excursii scurte în natură.", "Zona este liniștită și puțin urbanizată.", "Culmea este ușor de recunoscut."],
      en: ["The range lies north of Lisbon.", "It gives broad views over coast and inland.", "It is good for short nature outings.", "The area is calm and lightly urbanized.", "The ridge is easy to recognize."]
    },
    image: "/geo-images/portugal/mount-serra-de-montejunto.webp"
  },
  {
    id: "lake-lagoa-do-furnas",
    type: "lake",
    parent: "city-ponta-delgada",
    coords: [-25.31, 37.774],
    name: { de: "Lagoa das Furnas", hu: "Furnas tava", ro: "Lagoa das Furnas", en: "Furnas Lake" },
    description: {
      de: "Die Lagoa das Furnas ist ein berühmter Vulkansee auf São Miguel. Die bewaldeten Hänge und die dampfenden Erdwärmefelder schaffen eine sehr besondere Atmosphäre. Der See gehört zu den bekanntesten Naturmotiven der Azoren. Für SEO zu Seen, Vulkanlandschaften und Azoren ist er hervorragend geeignet.",
      hu: "A Lagoa das Furnas egy híres vulkáni tó São Miguelen. Az erdős lejtők és a gőzölgő geotermikus területek különleges hangulatot teremtenek. A tó az Azori-szigetek egyik legismertebb természeti motívuma. Tavakhoz, vulkanikus tájakhoz és Azori-szigetek SEO-jához kiváló.",
      ro: "Lagoa das Furnas este un faimos lac vulcanic pe São Miguel. Versanții împăduriți și zonele geotermale aburinde creează o atmosferă foarte specială. Lacul este unul dintre cele mai cunoscute motive naturale ale Azorelor. Pentru SEO despre lacuri, peisaje vulcanice și Azore, este excelentă.",
      en: "Lagoa das Furnas is a famous volcanic lake on São Miguel. The wooded slopes and steaming geothermal fields create a very special atmosphere. The lake is one of the best-known natural motifs in the Azores. For SEO about lakes, volcanic landscapes, and the Azores, it is excellent."
    },
    facts: {
      de: ["Der See liegt auf São Miguel.", "Vulkanismus prägt die Umgebung.", "Die Ufer sind stark bewaldet.", "Geothermie ist hier sichtbar.", "Der Ort ist ein Azoren-Klassiker."],
      hu: ["A tó São Miguel szigetén van.", "A környezetet a vulkanizmus formálja.", "A partok erősen erdősek.", "A geotermikus jelenségek láthatók.", "Ez egy azori klasszikus."],
      ro: ["Lacul se află pe São Miguel.", "Vulcanismul modelează zona.", "Malurile sunt puternic împădurite.", "Geotermia este vizibilă aici.", "Locul este un clasic al Azorelor."],
      en: ["The lake sits on São Miguel.", "Volcanism shapes the area.", "The shores are heavily wooded.", "Geothermal activity is visible.", "The place is an Azores classic."]
    },
    image: "/geo-images/portugal/lake-lagoa-do-furnas.webp"
  },
  {
    id: "lake-lagoa-de-albufeira",
    type: "lake",
    parent: "city-setubal",
    coords: [-9.185, 38.512],
    name: { de: "Lagoa de Albufeira", hu: "Albufeira-lagúna", ro: "Lagoa de Albufeira", en: "Albufeira Lagoon" },
    description: {
      de: "Die Lagoa de Albufeira ist eine Küstenlagune südlich von Lissabon mit ruhigem Wasser und Naturflächen. Sie ist beliebt für Vogelbeobachtung, leichte Wassersportarten und entspannte Strandtage. Der Ort verbindet Schutzgebiet, Freizeit und Küstenlandschaft. Für SEO zu Setúbal, Lagunen und Naturausflügen ist sie sehr nützlich.",
      hu: "A Lagoa de Albufeira egy parti lagúna Lisszabontól délre, nyugodt vízzel és természetes területekkel. Népszerű a madármegfigyelés, a könnyű vízi sportok és a laza strandnapok miatt. A hely védett területet, szabadidőt és parti tájat köt össze. Setúbal, lagúnák és természetjárás SEO-jához nagyon hasznos.",
      ro: "Lagoa de Albufeira este o lagună de coastă la sud de Lisabona, cu ape liniștite și zone naturale. Este populară pentru observarea păsărilor, sporturi nautice ușoare și zile relaxate pe plajă. Locul combină arie protejată, timp liber și peisaj litoral. Pentru SEO despre Setúbal, lagune și excursii în natură, este foarte utilă.",
      en: "Lagoa de Albufeira is a coastal lagoon south of Lisbon with calm water and natural areas. It is popular for birdwatching, light water sports, and relaxed beach days. The site combines protected land, leisure, and coastal scenery. For SEO about Setubal, lagoons, and nature outings, it is very useful."
    },
    facts: {
      de: ["Die Lagune liegt südlich von Lissabon.", "Vogelbeobachtung ist hier beliebt.", "Das Wasser ist meist ruhig.", "Natur und Freizeit treffen sich.", "Der Ort ist gut für kurze Ausflüge."],
      hu: ["A lagúna Lisszabontól délre található.", "A madármegfigyelés népszerű itt.", "A víz többnyire nyugodt.", "A természet és a szabadidő találkozik.", "A hely rövid kirándulásokhoz jó."],
      ro: ["Laguna se află la sud de Lisabona.", "Observarea păsărilor este populară aici.", "Apa este de obicei liniștită.", "Natura și timpul liber se întâlnesc.", "Locul e bun pentru excursii scurte."],
      en: ["The lagoon sits south of Lisbon.", "Birdwatching is popular here.", "The water is usually calm.", "Nature and leisure meet here.", "The place is good for short trips."]
    },
    image: "/geo-images/portugal/lake-lagoa-de-albufeira.webp"
  },
  {
    id: "river-rio-minho",
    type: "river",
    parent: "city-viana-do-castelo",
    coords: [-8.843, 41.915],
    name: { de: "Rio Minho", hu: "Minho folyó", ro: "Râul Minho", en: "Minho River" },
    description: {
      de: "Der Rio Minho bildet einen großen Teil der Nordgrenze Portugals. Er trennt und verbindet zugleich Portugal und Spanien und schafft ein wichtiges Flussökosystem. Die Mündung bei der Atlantikküste ist landschaftlich besonders reizvoll. Für SEO zu Flüssen, Grenzräumen und Nordportugal ist der Minho sehr stark.",
      hu: "A Rio Minho Portugália északi határának nagy részét alkotja. Egyszerre választja el és köti össze Portugáliát és Spanyolországot, és fontos folyami ökoszisztémát teremt. Az atlanti torkolat különösen látványos tájképi elem. Folyókhoz, határterületekhez és Észak-Portugáliához a Minho nagyon erős SEO-téma.",
      ro: "Râul Minho formează o mare parte din granița de nord a Portugaliei. El separă și în același timp leagă Portugalia de Spania și creează un ecosistem fluvial important. Gura de vărsare spre Atlantic este deosebit de atractivă peisagistic. Pentru SEO despre râuri, zone de frontieră și nordul Portugaliei, Minho este foarte puternic.",
      en: "The Minho River forms much of Portugal's northern border. It both separates and links Portugal and Spain while creating an important river ecosystem. Its mouth on the Atlantic coast is especially scenic. For SEO about rivers, borderlands, and northern Portugal, the Minho is very strong."
    },
    facts: {
      de: ["Der Fluss markiert die Nordgrenze.", "Er verbindet Portugal und Spanien.", "Die MÃ¼ndung ist landschaftlich stark.", "Das Ã–kosystem ist wichtig fÃ¼r die Region.", "Der Name ist eng mit Nordportugal verbunden."],
      hu: ["A folyó az északi határt jelöli.", "Portugáliát és Spanyolországot is összeköti.", "A torkolat tájképileg erős.", "Az ökoszisztéma fontos a régió számára.", "A név szorosan kötődik Észak-Portugáliához."],
      ro: ["Râul marchează granița de nord.", "Leagă Portugalia și Spania.", "Gura de vărsare este foarte atractivă peisagistic.", "Ecosistemul este important pentru regiune.", "Numele este strâns legat de nordul Portugaliei."],
      en: ["The river marks the northern border.", "It links Portugal and Spain.", "The mouth is very scenic.", "The ecosystem matters to the region.", "The name is closely tied to northern Portugal."]
    },
    image: "/geo-images/portugal/river-rio-minho.webp"
  },
  {
    id: "river-rio-mondego",
    type: "river",
    parent: "city-coimbra",
    coords: [-8.65, 40.16],
    name: { de: "Rio Mondego", hu: "Mondego folyó", ro: "Râul Mondego", en: "Mondego River" },
    description: {
      de: "Der Rio Mondego ist der längste Fluss, der vollständig in Portugal entspringt und endet. Er prägt Coimbra, das Flusstal und weite Teile Zentralportugals. Entlang seiner Ufer treffen Stadtleben, Landwirtschaft und Natur aufeinander. Für SEO zu Flüssen, Coimbra und Zentralportugal ist der Mondego sehr wichtig.",
      hu: "A Rio Mondego a leghosszabb folyó, amely teljes egészében Portugáliában ered és ér véget. Meghatározza Coimbrát, a folyóvölgyet és Közép-Portugália nagy részét. Partjai mentén a városi élet, a mezőgazdaság és a természet találkozik. Folyókhoz, Coimbrához és Közép-Portugáliához a Mondego nagyon fontos SEO-téma.",
      ro: "Râul Mondego este cel mai lung râu care izvorăște și se termină complet în Portugalia. Definește Coimbra, valea fluviului și mari părți din Portugalia centrală. De-a lungul malurilor sale se întâlnesc viața urbană, agricultura și natura. Pentru SEO despre râuri, Coimbra și Portugalia centrală, Mondego este foarte important.",
      en: "The Mondego River is the longest river that starts and ends entirely in Portugal. It shapes Coimbra, the river valley, and much of central Portugal. Along its banks, city life, agriculture, and nature meet. For SEO about rivers, Coimbra, and central Portugal, the Mondego is very important."
    },
    facts: {
      de: ["Mondego ist eng mit Coimbra verbunden.", "Der Fluss prägt Zentralportugal.", "An den Ufern treffen Natur und Stadt aufeinander.", "Er fließt vollständig durch Portugal.", "Das Tal ist landschaftlich wichtig."],
      hu: ["A Mondego szorosan kötődik Coimbrához.", "A folyó meghatározza Közép-Portugáliát.", "Partjain a természet és a város találkozik.", "Teljes egészében Portugálián keresztül folyik.", "A völgy tájképileg fontos."],
      ro: ["Mondego este strâns legat de Coimbra.", "Râul definește Portugalia centrală.", "Pe maluri se întâlnesc natura și orașul.", "Curge în întregime prin Portugalia.", "Valea are o importanță peisagistică."],
      en: ["The Mondego is closely linked to Coimbra.", "The river defines central Portugal.", "Nature and city meet on its banks.", "It flows entirely through Portugal.", "The valley matters visually."]
    },
    image: "/geo-images/portugal/river-rio-mondego.webp"
  },
  {
    id: "island-ilha-da-culatra",
    type: "island",
    parent: "reg-algarve",
    coords: [-7.808, 36.994],
    name: { de: "Insel Culatra", hu: "Culatra-sziget", ro: "Insula Culatra", en: "Culatra Island" },
    description: {
      de: "Die Ilha da Culatra ist eine der ruhigen Inseln der Ria Formosa an der Algarve. Der Ort ist bekannt für Strand, Fischerdorf-Atmosphäre und langsamen Inseltourismus. Die Insel ist nur mit Booten erreichbar und wirkt deshalb besonders entspannt. Für SEO zu Inseln, Algarve und Schutzgebieten ist Culatra sehr gut geeignet.",
      hu: "Az Ilha da Culatra a Ria Formosa egyik nyugodt szigete az Algarve térségében. A hely strandjáról, halászfalu-hangulatáról és lassú szigetturizmusáról ismert. A sziget csak hajóval érhető el, ezért különösen nyugodt. Szigetekhez, Algarve-hoz és védett területekhez SEO-ban a Culatra nagyon jó választás.",
      ro: "Ilha da Culatra este una dintre insulele liniștite ale Ria Formosa din Algarve. Locul este cunoscut pentru plajă, atmosfera de sat pescăresc și turismul insular lent. Insula este accesibilă doar cu barca, ceea ce o face deosebit de relaxantă. Pentru SEO despre insule, Algarve și arii protejate, Culatra este foarte potrivită.",
      en: "Ilha da Culatra is one of the calm islands of the Ria Formosa in the Algarve. It is known for its beach, fishing-village atmosphere, and slow island tourism. The island is only reachable by boat, which makes it especially relaxed. For SEO about islands, Algarve, and protected areas, Culatra fits very well."
    },
    facts: {
      de: ["Die Insel liegt in der Ria Formosa.", "Nur Boote bringen Besucher hin.", "Der Ort hat ein Fischerdorf-Gefühl.", "Strand und Ruhe sind die Hauptstärken.", "Die Insel gehört zur Algarve."],
      hu: ["A sziget a Ria Formosában fekszik.", "A látogatók csak hajóval jutnak oda.", "A hely halászfalu-hangulatú.", "A strand és a nyugalom a fő erényei.", "A sziget az Algarve része."],
      ro: ["Insula se află în Ria Formosa.", "Vizitatorii ajung doar cu barca.", "Locul are atmosferă de sat pescăresc.", "Plaja și liniștea sunt punctele forte.", "Insula aparține de Algarve."],
      en: ["The island sits in the Ria Formosa.", "Visitors get there only by boat.", "It has a fishing-village feel.", "Beach and calm are its main strengths.", "The island belongs to the Algarve."]
    },
    image: "/geo-images/portugal/island-ilha-da-culatra.webp"
  },
  {
    id: "forest-mata-nacional-de-leiria",
    type: "forest",
    parent: "city-leiria",
    coords: [-8.95, 39.76],
    name: { de: "Mata Nacional de Leiria", hu: "Leiria nemzeti erdeje", ro: "Mata Națională de Leiria", en: "Leiria National Forest" },
    description: {
      de: "Die Mata Nacional de Leiria ist einer der bekanntesten Küstenwälder Portugals. Sie schützt die Sanddünen und prägt das Gebiet zwischen Leiria und dem Atlantik. Der Wald ist wichtig für Erholung, Natur und ökologische Stabilität. Für SEO zu Wäldern, Leiria und Küstenlandschaften ist er sehr wertvoll.",
      hu: "A Mata Nacional de Leiria Portugália egyik legismertebb parti erdeje. Védi a homokdűnéket és meghatározza a Leiria és az Atlanti-óceán közötti területet. Az erdő fontos a pihenés, a természet és az ökológiai stabilitás szempontjából. Erdők, Leiria és part menti tájak SEO-jához nagyon értékes.",
      ro: "Mata Națională de Leiria este una dintre cele mai cunoscute păduri de coastă din Portugalia. Protejează dunele de nisip și definește zona dintre Leiria și Atlantic. Pădurea este importantă pentru relaxare, natură și stabilitate ecologică. Pentru SEO despre păduri, Leiria și peisaje de coastă, este foarte valoroasă.",
      en: "The Leiria National Forest is one of Portugal's best-known coastal forests. It protects the sand dunes and shapes the area between Leiria and the Atlantic. The forest matters for recreation, nature, and ecological stability. For SEO about forests, Leiria, and coastal landscapes, it is very valuable."
    },
    facts: {
      de: ["Die Waldzone schützt Dünen.", "Leiria ist der wichtigste Bezugspunkt.", "Der Atlantik liegt ganz nahe.", "Der Ort ist ökologisch bedeutsam.", "Er eignet sich gut für Naturspaziergänge."],
      hu: ["Az erdőzóna védi a dűnéket.", "Leiria a fő kapcsolódási pont.", "Az Atlanti-óceán nagyon közel van.", "A hely ökológiailag jelentős.", "Jó természetjáró sétákhoz."],
      ro: ["Zona împădurită protejează dunele.", "Leiria este punctul principal de referință.", "Atlanticul este foarte aproape.", "Locul are importanță ecologică.", "Este potrivit pentru plimbări în natură."],
      en: ["The forest zone protects dunes.", "Leiria is the main reference point.", "The Atlantic is very close.", "The site matters ecologically.", "It works well for nature walks."]
    },
    image: "/geo-images/portugal/forest-mata-nacional-de-leiria.webp"
  }
];

export const portugalCities: POI[] = [
  {
    id: "city-lisboa",
    type: "city",
    parent: "portugal",
    coords: [-9.1393, 38.7223],
    name: { de: "Lissabon", hu: "Lisszabon", ro: "Lisabona", en: "Lisbon" },
    description: {
      de: "Lissabon, die Hauptstadt Portugals, ist bekannt für ihre historischen Viertel wie Alfama und Baixa. Die Stadt liegt an der Mündung des Tejo und bietet eine Mischung aus Tradition und Moderne.",
      hu: "Lisszabon Portugália fővárosa, amely az Alfama és Baixa negyedek történelmi hangulatáról ismert. A Tejo folyó torkolatánál fekvő város a hagyomány és a modernitás különleges keverékét nyújtja.",
      ro: "Lisabona, capitala Portugaliei, este cunoscută pentru cartierele sale istorice precum Alfama și Baixa. Orașul este situat la gura de vărsare a râului Tagus și oferă un amestec de tradiție și modernitate.",
      en: "Lisbon, the capital of Portugal, is famous for its historic districts like Alfama and Baixa. Situated at the mouth of the Tagus River, the city offers a unique blend of tradition and modernity."
    },
    facts: {
      de: ["Lissabon ist eine der ältesten Städte Westeuropas.", "Die Stadt ist berühmt für ihre gelben Straßenbahnen.", "Das Viertel Alfama überstand das große Erdbeben von 1755.", "Die Stadt ist auf sieben Hügeln erbaut.", "Lissabon ist die Heimat des Fado-Gesangs."],
      hu: ["Lisszabon Nyugat-Európa egyik legrégebbi városa.", "A város híres a sárga villamosairól.", "Az Alfama negyed túlélte az 1755-ös nagy földrengést.", "A város hét dombra épült.", "Lisszabon a fado ének hazája."],
      ro: ["Lisabona este unul dintre cele mai vechi orașe din Europa de Vest.", "Orașul este faimos pentru tramvaiele sale galbene.", "Cartierul Alfama a supraviețuit marelui cutremur din 1755.", "Orașul este construit pe șapte dealuri.", "Lisabona este patria cântului Fado."],
      en: ["Lisbon is one of the oldest cities in Western Europe.", "The city is famous for its yellow trams.", "The Alfama district survived the great earthquake of 1755.", "The city is built on seven hills.", "Lisbon is the home of Fado singing."]
    },
    image: "/geo-images/portugal/city-lisboa.webp"
  },
  {
    id: "city-coimbra",
    type: "city",
    parent: "portugal",
    coords: [-8.4103, 40.2033],
    name: { de: "Coimbra", hu: "Coimbra", ro: "Coimbra", en: "Coimbra" },
    description: {
      de: "Coimbra war einst die Hauptstadt Portugals und beherbergt eine der ältesten Universitäten der Welt. Die Stadt am Fluss Mondego ist reich an Geschichte und akademischen Traditionen.",
      hu: "Coimbra egykor Portugália fővárosa volt, és a világ egyik legrégebbi egyetemének ad otthont. A Mondego-folyó partján fekvő város gazdag történelemben és akadémiai hagyományokban.",
      ro: "Coimbra a fost odinioară capitala Portugaliei și găzduiește una dintre cele mai vechi universități din lume. Orașul de pe râul Mondego este bogat în istorie și tradiții academice.",
      en: "Coimbra was once the capital of Portugal and is home to one of the oldest universities in the world. The city on the Mondego River is rich in history and academic traditions."
    },
    facts: {
      de: ["Die Universität von Coimbra wurde 1290 gegründet.", "Die Biblioteca Joanina ist eine prächtige Barockbibliothek.", "Die Stadt hat einen eigenen Fado-Stil.", "Coimbra war im Mittelalter die Hauptstadt des Landes.", "Das Portugal dos Pequenitos ist ein berühmter Themenpark."],
      hu: ["A Coimbrai Egyetemet 1290-ben alapították.", "A Biblioteca Joanina egy pompás barokk könyvtár.", "A városnak saját fado stílusa van.", "Coimbra a középkorban az ország fővárosa volt.", "A Portugal dos Pequenitos egy híres tematikus park."],
      ro: ["Universitatea din Coimbra a fost fondată în 1290.", "Biblioteca Joanina este o bibliotecă barocă splendidă.", "Orașul are propriul stil de Fado.", "Coimbra a fost capitala țării în Evul Mediu.", "Portugal dos Pequenitos este un parc tematic faimos."],
      en: ["The University of Coimbra was founded in 1290.", "The Biblioteca Joanina is a magnificent Baroque library.", "The city has its own style of Fado.", "Coimbra was the country's capital in the Middle Ages.", "Portugal dos Pequenitos is a famous theme park."]
    },
    image: "/geo-images/portugal/city-coimbra.webp"
  },
  {
    id: "city-braga",
    type: "city",
    parent: "portugal",
    coords: [-8.4265, 41.5454],
    name: { de: "Braga", hu: "Braga", ro: "Braga", en: "Braga" },
    description: {
      de: "Braga ist eine der ältesten Städte Portugals und gilt als das religiöse Zentrum des Landes. Die Stadt ist bekannt für ihre zahlreichen Kirchen, darunter die berühmte Wallfahrtskirche Bom Jesus do Monte.",
      hu: "Braga Portugália egyik legrégebbi városa, és az ország vallási központjaként tartják számon. A város számos templomáról ismert, köztük a híres Bom Jesus do Monte zarándokhelyről.",
      ro: "Braga este unul dintre cele mai vechi orașe din Portugalia și este considerat centrul religios al țării. Orașul este cunoscut pentru numeroasele sale biserici, inclusiv faimosul sanctuar Bom Jesus do Monte.",
      en: "Braga is one of the oldest cities in Portugal and is considered the country's religious center. The city is known for its numerous churches, including the famous Bom Jesus do Monte sanctuary."
    },
    facts: {
      de: ["Braga wurde vor über 2.000 Jahren von den Römern gegründet.", "Die Kathedrale von Braga ist die älteste des Landes.", "Das Heiligtum Bom Jesus do Monte hat eine beeindruckende barocke Treppe.", "Die Stadt wird oft als 'Portugals Rom' bezeichnet.", "Braga ist eine lebendige Universitätsstadt."],
      hu: ["Bragát több mint 2000 éve alapították a rómaiak.", "A bragai katedrális az ország legrégebbi székesegyháza.", "A Bom Jesus do Monte szentélynek lenyűgöző barokk lépcsősora van.", "A várost gyakran 'Portugália Rómájaként' emlegetik.", "Braga egy életteli egyetemi város."],
      ro: ["Braga a fost fondată de romani acum mai bine de 2.000 de ani.", "Catedrala din Braga este cea mai veche din țară.", "Sanctuarul Bom Jesus do Monte are o scară barocă impresionantă.", "Orașul este adesea numit 'Roma Portugaliei'.", "Braga este un oraș universitar plin de viață."],
      en: ["Braga was founded by the Romans over 2,000 years ago.", "The Braga Cathedral is the oldest in the country.", "The Bom Jesus do Monte staircase is an impressive Baroque masterpiece.", "The city is often called 'Portugal's Rome'.", "Braga is a lively university city."]
    },
    image: "/geo-images/portugal/city-braga.webp"
  },
  {
    id: "city-faro",
    type: "city",
    parent: "portugal",
    coords: [-7.9304, 37.0193],
    name: { de: "Faro", hu: "Faro", ro: "Faro", en: "Faro" },
    description: {
      de: "Faro ist die Hauptstadt der Algarve und dient als Tor zum Süden Portugals. Die Stadt besitzt eine charmante Altstadt (Vila Adentro) und liegt direkt am Naturpark Ria Formosa.",
      hu: "Faro az Algarve fővárosa, és kapuként szolgál Portugália déli részéhez. A város bűbájos óvárossal (Vila Adentro) rendelkezik, és közvetlenül a Ria Formosa natúrpark mellett fekszik.",
      ro: "Faro este capitala regiunii Algarve și servește drept poartă către sudul Portugaliei. Orașul are un oraș vechi fermecător (Vila Adentro) și este situat direct lângă Parcul Natural Ria Formosa.",
      en: "Faro is the capital of the Algarve and serves as the gateway to southern Portugal. The city has a charming old town (Vila Adentro) and is located right next to the Ria Formosa Natural Park."
    },
    facts: {
      de: ["Faro hat eine gut erhaltene maurische Stadtmauer.", "Die Kathedrale von Faro stammt aus dem 13. Jahrhundert.", "Der Naturpark Ria Formosa ist ein Paradies für Vogelbeobachter.", "Die Stadt hat eine entspannte Atmosphäre im Vergleich zu anderen Touristenorten.", "Faro besitzt einen internationalen Flughafen."],
      hu: ["Farónak jól megőrzött mór városfala van.", "A farói katedrális a 13. századból származik.", "A Ria Formosa natúrpark a madármegfigyelők paradicsoma.", "A városnak nyugodtabb a légköre más turisztikai helyszínekhez képest.", "Faro nemzetközi repülőtérrel rendelkezik."],
      ro: ["Faro are un zid maur bine conservat.", "Catedrala din Faro datează din secolul al XIII-lea.", "Parcul Natural Ria Formosa este un paradis pentru observatorii de păsări.", "Orașul are o atmosferă relaxată în comparație cu alte locuri turistice.", "Faro are un aeroport internațional."],
      en: ["Faro has a well-preserved Moorish city wall.", "The Faro Cathedral dates back to the 13th century.", "The Ria Formosa Natural Park is a paradise for birdwatchers.", "The city has a relaxed atmosphere compared to other tourist spots.", "Faro has an international airport."]
    },
    image: "/geo-images/portugal/city-faro.webp"
  }
  ,
  {
    id: "city-setubal",
    type: "city",
    parent: "portugal",
    coords: [-8.8928, 38.5244],
    name: { de: "Setúbal", hu: "Setúbal", ro: "Setúbal", en: "Setubal" },
    description: {
      de: "Setúbal ist eine lebendige Hafenstadt am Sado-Ästuar und ein starkes Tor zur Arrábida-Küste. Die Stadt verbindet Fischerei, maritime Logistik und sonnigen Küstentourismus mit einem echten portugiesischen Hafenflair. Ihr historisches Zentrum, die Restaurants und die Nähe zu Delfinbeobachtungen machen sie für Portugal-Reisen besonders attraktiv. Setúbal ist ein SEO-starker Ort für Besucher, die Atlantik, Natur und Stadtleben in einem Ziel suchen.",
      hu: "Setúbal egy élénk kikötőváros a Sado-torkolatnál, és az Arrábida-part kapuja. A város a halászatot, a tengeri logisztikát és a napfényes tengerparti turizmust igazi portugál kikötői hangulattal ötvözi. Történelmi központja, éttermei és a delfinles lehetőségei különösen vonzóvá teszik az utazók számára. Setúbal erős SEO-célpont azoknak, akik az Atlanti-óceán, a természet és a városi élet kombinációját keresik.",
      ro: "Setubal este un oraș-port viu, pe estuarul Sado, și o poartă importantă spre coasta Arrábida. Orașul combină pescuitul, logistica maritimă și turismul de litoral cu o atmosferă autentică de port portughez. Centrul istoric, restaurantele și excursiile pentru observarea delfinilor îl fac foarte atractiv pentru călătorii din Portugalia. Setubal este o destinație SEO puternică pentru cei care caută Atlanticul, natura și viața urbană într-un singur loc.",
      en: "Setubal is a lively port city on the Sado estuary and a gateway to the Arrabida coast. The city combines fishing, maritime logistics, and sunny seaside tourism with a real Portuguese harbor atmosphere. Its historic center, seafood restaurants, and dolphin-watching trips make it highly attractive for Portugal travel. Setubal is a strong SEO destination for visitors who want the Atlantic, nature, and city life in one stop."
    },
    facts: {
      de: ["Die Stadt liegt südlich von Lissabon.", "Der Sado ist bekannt für seine Delfinpopulation.", "Setúbal ist berühmt für frischen Fisch und Muscheln.", "Die Serra da Arrábida liegt direkt vor der Stadt.", "Der Hafen spielt eine wichtige wirtschaftliche Rolle."],
      hu: ["A város Lisszabontól délre fekszik.", "A Sado híres delfinpopulációjáról.", "Setúbal friss halairól és kagylóiról ismert.", "Az Arrábida-hegység közvetlenül a város mellett található.", "A kikötő fontos gazdasági szerepet tölt be."],
      ro: ["Orașul se află la sud de Lisabona.", "Sado este cunoscut pentru populația sa de delfini.", "Setubal este faimos pentru peștele proaspăt și fructele de mare.", "Serra da Arrábida se află chiar lângă oraș.", "Portul are un rol economic important."],
      en: ["The city lies south of Lisbon.", "The Sado estuary is known for its dolphin population.", "Setubal is famous for fresh fish and shellfish.", "The Arrabida hills sit right beside the city.", "The harbor plays an important economic role."]
    },
    image: "/geo-images/portugal/city-setubal.webp"
  },
  {
    id: "city-evora",
    type: "city",
    parent: "portugal",
    coords: [-7.9069, 38.5717],
    name: { de: "Évora", hu: "Évora", ro: "Évora", en: "Evora" },
    description: {
      de: "Évora ist die historische Hauptstadt des Alentejo und eine der wichtigsten Kulturstädte Portugals. Die Altstadt ist reich an römischen, maurischen und mittelalterlichen Spuren. Enge Gassen, weiße Häuser und Monumente wie der römische Tempel prägen das Stadtbild. Für Portugal-Reisen ist Évora ein starkes Schlüsselwort für Geschichte, Architektur und UNESCO-Atmosphäre.",
      hu: "Évora az Alentejo történelmi fővárosa és Portugália egyik legfontosabb kulturális városa. Az óváros római, mór és középkori nyomokban gazdag. Szűk utcák, fehér házak és olyan emlékek, mint a római templom, adják a város karakterét. Portugáliai utazáshoz Évora erős kulcsszó a történelem, az építészet és az UNESCO-hangulat miatt.",
      ro: "Évora este capitala istorică a Alentejoului și unul dintre cele mai importante orașe culturale din Portugalia. Centrul vechi este plin de urme romane, maure și medievale. Străzile înguste, casele albe și monumente precum templul roman definesc imaginea orașului. Pentru turismul din Portugalia, Évora este un cuvânt-cheie puternic pentru istorie, arhitectură și atmosferă UNESCO.",
      en: "Evora is the historic capital of Alentejo and one of Portugal's most important cultural cities. Its old town is rich in Roman, Moorish, and medieval traces. Narrow streets, white houses, and monuments like the Roman temple define the cityscape. For Portugal travel, Evora is a strong SEO keyword for history, architecture, and UNESCO atmosphere."
    },
    facts: {
      de: ["Die Altstadt gehört zum UNESCO-Welterbe.", "Der römische Tempel ist eines der Wahrzeichen der Stadt.", "Évora war ein wichtiges Zentrum der Gelehrsamkeit.", "Die Stadt ist für ihre weiß getünchten Häuser bekannt.", "Der Alentejo prägt Küche und Lebensrhythmus."],
      hu: ["Az óváros az UNESCO világörökség része.", "A római templom a város egyik jelképe.", "Évora fontos tudományos központ volt.", "A város fehérre meszelt házairól ismert.", "Az Alentejo a konyhát és az életritmust is meghatározza."],
      ro: ["Centrul vechi face parte din patrimoniul mondial UNESCO.", "Templul roman este unul dintre simbolurile orașului.", "Évora a fost un centru important al învățăturii.", "Orașul este cunoscut pentru casele sale văruite în alb.", "Alentejo influențează bucătăria și ritmul vieții."],
      en: ["The old town is part of the UNESCO World Heritage.", "The Roman temple is one of the city's symbols.", "Evora was an important center of learning.", "The city is known for its whitewashed houses.", "Alentejo shapes both the cuisine and daily rhythm."]
    },
    image: "/geo-images/portugal/city-evora.webp"
  },
  {
    id: "city-aveiro",
    type: "city",
    parent: "portugal",
    coords: [-8.6538, 40.6405],
    name: { de: "Aveiro", hu: "Aveiro", ro: "Aveiro", en: "Aveiro" },
    description: {
      de: "Aveiro ist die berühmte Lagunenstadt Portugals und wird oft als das Venedig des Landes vermarktet. Bunte Moliceiro-Boote, Kanäle und Jugendstilfassaden prägen das Stadtzentrum. Die Stadt ist auch für Salz, Süßigkeiten und die Nähe zur Atlantikküste bekannt. Aveiro ist ein SEO-starker Reisetipp für Städte, Wasserwege und authentisches Nordportugal.",
      hu: "Aveiro Portugália híres lagúnavárosa, amelyet gyakran az ország Velencéjeként emlegetnek. A színes moliceiro csónakok, a csatornák és a szecessziós homlokzatok határozzák meg a központot. A város a sóról, az édességekről és az Atlanti-óceán közelségéről is ismert. Aveiro erős SEO-ajánlat a városnézés, a vízi utak és az autentikus északi Portugália témájában.",
      ro: "Aveiro este celebrul oraș al lagunei din Portugalia și este adesea promovat drept Veneția țării. Bărcile moliceiro colorate, canalele și fațadele Art Nouveau definesc centrul orașului. Orașul este cunoscut și pentru sare, dulciuri și apropierea de coasta Atlanticului. Aveiro este o recomandare SEO puternică pentru city break, canale și Portugalia de nord autentică.",
      en: "Aveiro is Portugal's famous lagoon city and is often marketed as the country's Venice. Colorful moliceiro boats, canals, and Art Nouveau facades define the center. The city is also known for salt, sweets, and its proximity to the Atlantic coast. Aveiro is a strong SEO pick for city trips, waterways, and authentic northern Portugal."
    },
    facts: {
      de: ["Die Stadt liegt an einer Lagune.", "Moliceiro-Boote sind das bekannteste Fotomotiv.", "Aveiro ist berühmt für Ovos Moles.", "Der Jugendstil ist im Zentrum sehr sichtbar.", "Die Nähe zum Strand ist ein großer Vorteil."],
      hu: ["A város egy lagúna mellett fekszik.", "A moliceiro csónakok a legismertebb fotótéma.", "Aveiro híres az Ovos Moles édességről.", "A szecesszió erősen jelen van a belvárosban.", "A strand közelsége nagy előny."],
      ro: ["Orașul se află lângă o lagună.", "Bărcile moliceiro sunt cel mai cunoscut subiect foto.", "Aveiro este faimos pentru Ovos Moles.", "Stilul Art Nouveau este foarte vizibil în centru.", "Apropierea de plajă este un mare avantaj."],
      en: ["The city sits beside a lagoon.", "Moliceiro boats are its best-known photo subject.", "Aveiro is famous for Ovos Moles sweets.", "Art Nouveau is highly visible downtown.", "The nearby beach access is a major bonus."]
    },
    image: "/geo-images/portugal/city-aveiro.webp"
  },
  {
    id: "city-viseu",
    type: "city",
    parent: "portugal",
    coords: [-7.9125, 40.661],
    name: { de: "Viseu", hu: "Viseu", ro: "Viseu", en: "Viseu" },
    description: {
      de: "Viseu ist eine elegante Stadt im Landesinneren von Portugal mit starker Wein- und Kunstszene. Das historische Zentrum ist kompakt, begehbar und voller Plätze, Museen und Kathedralen. Die Stadt gilt als gutes Reiseziel für Kultur, Gastronomie und die Regionen Dão und Beira Alta. Für SEO rund um Portugal verbindet Viseu Authentizität, Wein und ein ruhiges Stadtgefühl.",
      hu: "Viseu egy elegáns portugál belső város erős bor- és művészeti élettel. A történelmi központ kompakt, könnyen bejárható, és tele van terekkel, múzeumokkal és katedrálisokkal. A város jó úti cél a kultúra, a gasztronómia és a Dão illetve Beira Alta régiók felfedezéséhez. Portugáliás SEO szempontból Viseu az autentikusságot, a bort és a nyugodt városi hangulatot köti össze.",
      ro: "Viseu este un oraș elegant din interiorul Portugaliei, cu o scenă puternică a vinului și a artei. Centrul istoric este compact, ușor de parcurs și plin de piețe, muzee și catedrale. Orașul este o destinație bună pentru cultură, gastronomie și regiunile Dão și Beira Alta. Pentru SEO despre Portugalia, Viseu combină autenticitatea, vinul și o atmosferă urbană liniștită.",
      en: "Viseu is an elegant inland Portuguese city with a strong wine and arts scene. Its historic center is compact, walkable, and full of squares, museums, and cathedrals. The city is a good destination for culture, gastronomy, and the Dão and Beira Alta regions. For Portugal SEO, Viseu combines authenticity, wine, and a calm city feel."
    },
    facts: {
      de: ["Viseu liegt im Zentrum des Dão-Weingebiets.", "Die Kathedrale prägt das historische Zentrum.", "Die Stadt hat ein starkes Museumserbe.", "Viseu ist für Lebensqualität bekannt.", "Der Wein des Dão ist ein lokaler Stolz."],
      hu: ["Viseu a Dão borvidék központjában fekszik.", "A katedrális meghatározza a történelmi központot.", "A városnak erős múzeumi öröksége van.", "Viseu az életminőségéről ismert.", "A Dão bor helyi büszkeség."],
      ro: ["Viseu se află în centrul regiunii viticole Dão.", "Catedrala definește centrul istoric.", "Orașul are un patrimoniu muzeal puternic.", "Viseu este cunoscut pentru calitatea vieții.", "Vinul Dão este o mândrie locală."],
      en: ["Viseu sits in the heart of the Dão wine region.", "The cathedral defines the historic center.", "The city has a strong museum heritage.", "Viseu is known for quality of life.", "Dão wine is a local point of pride."]
    },
    image: "/geo-images/portugal/city-viseu.webp"
  },
  {
    id: "city-beja",
    type: "city",
    parent: "portugal",
    coords: [-7.8632, 38.0151],
    name: { de: "Beja", hu: "Beja", ro: "Beja", en: "Beja" },
    description: {
      de: "Beja ist eine historische Stadt im südlichen Alentejo mit ruhiger Atmosphäre und weitem Horizont. Die Stadt ist für ihr Burgviertel, ihre Museen und ihre tief verwurzelte landwirtschaftliche Kultur bekannt. Hier treffen römische Spuren, mittelalterliche Architektur und der Rhythmus der Ebene aufeinander. Beja ist ein starkes Ziel für Portugal-Reisen, die das authentische Inland erleben wollen.",
      hu: "Beja egy történelmi város a dél-alentejói vidéken, nyugodt hangulattal és tágas horizonttal. A város várnegyedéről, múzeumairól és mélyen gyökerező mezőgazdasági kultúrájáról ismert. Itt a római nyomok, a középkori építészet és a síkság ritmusa találkozik. Beja erős célpont a Portugáliát felfedező utazóknak, akik az autentikus belső területeket keresik.",
      ro: "Beja este un oraș istoric din sudul Alentejoului, cu o atmosferă liniștită și orizonturi largi. Orașul este cunoscut pentru zona castelului, muzeele sale și cultura agricolă profund înrădăcinată. Aici se întâlnesc urme romane, arhitectura medievală și ritmul câmpiei. Beja este o destinație puternică pentru cei care vor să descopere Portugalia autentică din interior.",
      en: "Beja is a historic city in southern Alentejo with a calm atmosphere and wide horizons. The city is known for its castle quarter, museums, and deep agricultural culture. Roman traces, medieval architecture, and the rhythm of the plains meet here. Beja is a strong destination for Portugal travelers seeking the authentic inland."
    },
    facts: {
      de: ["Beja liegt im Herzen des Alentejo.", "Die Burg ist das markanteste Wahrzeichen.", "Die Stadt hat starke landwirtschaftliche Wurzeln.", "Beja ist mit weiten Ebenen umgeben.", "Das Museumserbe ist für die Region wichtig."],
      hu: ["Beja az Alentejo szívében fekszik.", "A vár a legmarkánsabb jelképe.", "A városnak erős mezőgazdasági gyökerei vannak.", "Beját széles síkságok veszik körül.", "A múzeumi örökség fontos a régió számára."],
      ro: ["Beja se află în inima Alentejoului.", "Castelul este simbolul cel mai vizibil.", "Orașul are rădăcini agricole puternice.", "Beja este înconjurat de câmpii largi.", "Patrimoniul muzeal este important pentru regiune."],
      en: ["Beja lies in the heart of Alentejo.", "The castle is its most visible symbol.", "The city has strong agricultural roots.", "Beja is surrounded by broad plains.", "Its museum heritage matters to the region."]
    },
    image: "/geo-images/portugal/city-beja.webp"
  },
  {
    id: "city-braganca",
    type: "city",
    parent: "portugal",
    coords: [-6.7592, 41.8061],
    name: { de: "Bragança", hu: "Bragança", ro: "Bragança", en: "Braganca" },
    description: {
      de: "Bragança ist eine nordöstliche Grenzstadt mit starker mittelalterlicher Identität. Die Zitadelle, die Stadtmauern und die Berglandschaft geben ihr ein markantes Profil. Sie ist ein wichtiger Ausgangspunkt für Reisen in den Naturpark Montesinho und für den Norden Portugals. Bragança ist ein guter SEO-Ort für Grenzgeschichte, Burgen und abgelegene portugiesische Landschaften.",
      hu: "Bragança egy északkeleti határváros erős középkori karakterrel. A citadella, a városfalak és a hegyvidéki táj különleges profilt adnak neki. Fontos kiindulópont a Montesinho natúrpark és Észak-Portugália felfedezéséhez. Bragança jó SEO-helyszín a határtörténet, a várak és az eldugott portugál tájak témájában.",
      ro: "Bragança este un oraș de frontieră din nord-est, cu o identitate medievală puternică. Citadela, zidurile orașului și peisajul montan îi dau un profil distinct. Este un punct de plecare important pentru Parcul Natural Montesinho și pentru nordul Portugaliei. Braganca este o locație SEO bună pentru istoria de frontieră, castele și peisaje portugheze izolate.",
      en: "Braganca is a northeastern border city with a strong medieval identity. The citadel, city walls, and mountain landscape give it a distinctive profile. It is an important base for exploring Montesinho Natural Park and northern Portugal. Braganca is a good SEO location for border history, castles, and remote Portuguese scenery."
    },
    facts: {
      de: ["Die Stadt ist nahe der spanischen Grenze.", "Die Burganlage dominiert das Stadtbild.", "Bragança verbindet Geschichte und Gebirge.", "Der Montesinho-Park liegt in Reichweite.", "Die Altstadt bewahrt mittelalterliche Strukturen."],
      hu: ["A város közel van a spanyol határhoz.", "A várkomplexum uralja a városképet.", "Bragança a történelmet és a hegyvidéket köti össze.", "A Montesinho park könnyen elérhető.", "Az óváros középkori szerkezetet őriz."],
      ro: ["Orașul este aproape de granița cu Spania.", "Ansamblul fortificat domină peisajul urban.", "Braganca combină istoria cu munții.", "Parcul Montesinho este ușor accesibil.", "Centrul vechi păstrează structura medievală."],
      en: ["The city sits close to the Spanish border.", "The castle complex dominates the skyline.", "Braganca combines history and mountain scenery.", "Montesinho Park is within easy reach.", "The old town preserves its medieval layout."]
    },
    image: "/geo-images/portugal/city-braganca.webp"
  },
  {
    id: "city-leiria",
    type: "city",
    parent: "portugal",
    coords: [-8.807, 39.7436],
    name: { de: "Leiria", hu: "Leiria", ro: "Leiria", en: "Leiria" },
    description: {
      de: "Leiria ist eine zentralportugiesische Stadt, die für ihr Schloss auf dem Hügel und den Fluss Lis bekannt ist. Sie verbindet historische Bausubstanz mit einem modernen, lebendigen Stadtkern. Die Lage zwischen Küste und Inland macht sie zu einem praktischen Reiseziel. Leiria eignet sich gut für SEO rund um mittelalterliche Städte, Schlösser und Zentralportugal.",
      hu: "Leiria egy közép-portugál város, amely dombtetőn álló váráról és a Lis folyóról ismert. Történelmi épületeket és modern, élénk városközpontot kapcsol össze. A tengerpart és a belső területek közötti fekvése praktikus úti céllá teszi. Leiria jó SEO-téma középkori városok, várak és Közép-Portugália kapcsán.",
      ro: "Leiria este un oraș din centrul Portugaliei, cunoscut pentru castelul de pe colină și râul Lis. El combină patrimoniul istoric cu un centru urban modern și activ. Poziția dintre coastă și interior îl face o destinație practică. Leiria este potrivit pentru SEO despre orașe medievale, castele și Portugalia centrală.",
      en: "Leiria is a central Portuguese city known for its hilltop castle and the Lis River. It blends historic buildings with a modern and lively city center. Its location between the coast and inland areas makes it a practical travel stop. Leiria works well for SEO about medieval cities, castles, and central Portugal."
    },
    facts: {
      de: ["Das Schloss von Leiria überragt die Stadt.", "Der Fluss Lis gibt dem Ort den Namen.", "Leiria liegt zwischen Küste und Inland.", "Die Stadt hat ein lebendiges Zentrum.", "Sie ist ein guter Zwischenstopp auf Reisen."],
      hu: ["Leiria vára a város fölé magasodik.", "A Lis folyó adja a település nevét.", "Leiria a tengerpart és a belső vidék között fekszik.", "A városközpont élénk és pezsgő.", "Jó megállóhely utazások során."],
      ro: ["Castelul Leiria domină orașul.", "Râul Lis dă numele localității.", "Leiria se află între coastă și interior.", "Centrul orașului este animat.", "Este o oprire bună în timpul călătoriilor."],
      en: ["Leiria Castle overlooks the city.", "The Lis River gives the city its name.", "Leiria sits between the coast and inland.", "The city center is lively.", "It is a useful stop on a road trip."]
    },
    image: "/geo-images/portugal/city-leiria.webp"
  },
  {
    id: "city-portimao",
    type: "city",
    parent: "portugal",
    coords: [-8.5401, 37.1367],
    name: { de: "Portimão", hu: "Portimão", ro: "Portimão", en: "Portimao" },
    description: {
      de: "Portimão ist eine bekannte Küstenstadt an der westlichen Algarve mit großen Stränden und einem aktiven Hafen. Die Stadt ist ein Tor zu Praia da Rocha und zu Bootsausflügen entlang der Felsalgarve. Sie verbindet Tourismus, Fischerei und moderne Dienstleistungen. Portimão ist ein starkes SEO-Ziel für Strandurlaub, Algarve und maritimes Portugal.",
      hu: "Portimão a nyugati Algarve ismert tengerparti városa, nagy strandokkal és aktív kikötővel. Kapu a Praia da Rocha felé, és kiindulópont a sziklás Algarve menti hajókirándulásokhoz. A város a turizmust, a halászatot és a modern szolgáltatásokat ötvözi. Portimão erős SEO-célpont a strandnyaralás, az Algarve és a tengeri Portugália témájában.",
      ro: "Portimão este un oraș de coastă cunoscut din vestul Algarve, cu plaje mari și un port activ. Orașul este poarta către Praia da Rocha și către excursiile cu barca de-a lungul coastei stâncoase. Combină turismul, pescuitul și serviciile moderne. Portimao este o țintă SEO puternică pentru vacanțe la plajă, Algarve și Portugalia maritimă.",
      en: "Portimao is a well-known coastal city in western Algarve with large beaches and an active harbor. It is a gateway to Praia da Rocha and to boat trips along the cliff coast. The city combines tourism, fishing, and modern services. Portimao is a strong SEO target for beach holidays, the Algarve, and maritime Portugal."
    },
    facts: {
      de: ["Praia da Rocha ist das bekannteste Strandgebiet.", "Der Hafen unterstützt die lokale Wirtschaft.", "Portimão ist stark touristisch geprägt.", "Die Stadt liegt an der Algarve-Küste.", "Bootstouren sind hier besonders beliebt."],
      hu: ["A Praia da Rocha a legismertebb partszakasz.", "A kikötő támogatja a helyi gazdaságot.", "Portimão erősen turisztikai város.", "A település az Algarve partján fekszik.", "A hajókirándulások itt különösen népszerűek."],
      ro: ["Praia da Rocha este cea mai cunoscută zonă de plajă.", "Portul susține economia locală.", "Portimão are un profil turistic puternic.", "Orașul se află pe coasta Algarve.", "Excursiile cu barca sunt foarte populare aici."],
      en: ["Praia da Rocha is the best-known beach area.", "The harbor supports the local economy.", "Portimao has a strong tourism profile.", "The city sits on the Algarve coast.", "Boat trips are especially popular here."]
    },
    image: "/geo-images/portugal/city-portimao.webp"
  },
  {
    id: "city-ponta-delgada",
    type: "city",
    parent: "portugal",
    coords: [-25.6687, 37.7412],
    name: { de: "Ponta Delgada", hu: "Ponta Delgada", ro: "Ponta Delgada", en: "Ponta Delgada" },
    description: {
      de: "Ponta Delgada ist die wichtigste Stadt der Azoren und das wirtschaftliche Zentrum von São Miguel. Die Stadt verbindet Inselatmosphäre, Hafenleben und direkten Zugang zu Vulkanlandschaften. Historische Kirchen, schwarze Basaltfassaden und eine gute Gastronomie machen sie für Reisende attraktiv. Ponta Delgada ist ein SEO-starker Ort für Azoren, Inselurlaub und Atlantikabenteuer.",
      hu: "Ponta Delgada az Azori-szigetek legfontosabb városa és São Miguel gazdasági központja. A város szigetvilágot, kikötői életet és közvetlen hozzáférést kínál a vulkanikus tájakhoz. Történelmi templomai, fekete bazalt homlokzatai és jó gasztronómiája vonzóvá teszik az utazók számára. Ponta Delgada erős SEO-helyszín az Azori-szigetek, a szigetnyaralás és az atlanti kaland témájában.",
      ro: "Ponta Delgada este cel mai important oraș al Azorelor și centrul economic al insulei São Miguel. Orașul combină atmosfera insulară, viața de port și accesul direct la peisaje vulcanice. Bisericile istorice, fațadele din bazalt negru și gastronomia bună îl fac atractiv pentru călători. Ponta Delgada este o locație SEO puternică pentru Azore, vacanțe pe insule și aventuri în Atlantic.",
      en: "Ponta Delgada is the main city of the Azores and the economic center of São Miguel. The city combines island atmosphere, harbor life, and direct access to volcanic landscapes. Historic churches, black basalt facades, and good food make it attractive to travelers. Ponta Delgada is a strong SEO location for the Azores, island holidays, and Atlantic adventure."
    },
    facts: {
      de: ["Sie liegt auf der Insel São Miguel.", "Der Hafen ist für die Azoren wichtig.", "Die Stadt ist ein Tor zu Vulkanseen.", "Ponta Delgada hat markante Basaltarchitektur.", "Sie ist die größte Stadt der Azoren."],
      hu: ["São Miguel szigetén található.", "A kikötő fontos az Azori-szigetek számára.", "A város a vulkáni tavak kapuja.", "Ponta Delgada jellegzetes bazaltépítészettel rendelkezik.", "Ez az Azori-szigetek legnagyobb városa."],
      ro: ["Se află pe insula São Miguel.", "Portul este important pentru Azore.", "Orașul este poarta către lacurile vulcanice.", "Ponta Delgada are o arhitectură distinctă din bazalt.", "Este cel mai mare oraș din Azore."],
      en: ["It sits on São Miguel island.", "The harbor is important for the Azores.", "The city is a gateway to volcanic lakes.", "Ponta Delgada has distinctive basalt architecture.", "It is the largest city in the Azores."]
    },
    image: "/geo-images/portugal/city-ponta-delgada.webp"
  },
  {
    id: "city-funchal",
    type: "city",
    parent: "portugal",
    coords: [-16.9288, 32.6669],
    name: { de: "Funchal", hu: "Funchal", ro: "Funchal", en: "Funchal" },
    description: {
      de: "Funchal ist die Hauptstadt Madeiras und eine der bekanntesten Inselstädte Portugals. Die Lage zwischen Bergen und Meer macht die Stadt landschaftlich besonders reizvoll. Märkte, Gärten, Seilbahnen und eine starke Hotelinfrastruktur prägen das Reiseerlebnis. Funchal ist ein SEO-starker Name für Madeira, Atlantikinseln und ganzjährigen Urlaub.",
      hu: "Funchal Madeira fővárosa és Portugália egyik legismertebb szigetvárosa. A hegyek és a tenger közötti fekvése különösen látványossá teszi. Piacok, kertek, felvonók és erős szállodai infrastruktúra határozzák meg az élményt. Funchal erős SEO-név Madeira, atlanti szigetek és egész éves nyaralás témájában.",
      ro: "Funchal este capitala Madeirei și unul dintre cele mai cunoscute orașe-insulă ale Portugaliei. Poziția dintre munți și mare îl face deosebit de atractiv. Piețele, grădinile, telecabinele și infrastructura hotelieră puternică definesc experiența de călătorie. Funchal este un nume SEO puternic pentru Madeira, insulele Atlanticului și vacanțe pe tot parcursul anului.",
      en: "Funchal is Madeira's capital and one of Portugal's best-known island cities. Its position between mountains and sea makes it especially scenic. Markets, gardens, cable cars, and strong hotel infrastructure define the visitor experience. Funchal is a strong SEO name for Madeira, Atlantic islands, and year-round holidays."
    },
    facts: {
      de: ["Funchal ist die Hauptstadt Madeiras.", "Die Stadt liegt an einer geschützten Bucht.", "Seilbahnen verbinden das Zentrum mit den Hängen.", "Die Markthalle ist ein beliebter Besuchspunkt.", "Das Klima ist das ganze Jahr mild."],
      hu: ["Funchal Madeira fővárosa.", "A város egy védett öböl partján fekszik.", "Felvonók kötik össze a központot a domboldalakkal.", "A piaccsarnok népszerű látnivaló.", "Az éghajlat egész évben enyhe."],
      ro: ["Funchal este capitala Madeirei.", "Orașul se află într-un golf protejat.", "Telecabinele leagă centrul de versanți.", "Hala pieței este un punct de vizită popular.", "Clima este blândă tot anul."],
      en: ["Funchal is the capital of Madeira.", "The city sits on a sheltered bay.", "Cable cars link the center to the slopes.", "The market hall is a popular stop.", "The climate is mild year-round."]
    },
    image: "/geo-images/portugal/city-funchal.webp"
  },
  {
    id: "city-mafra",
    type: "city",
    parent: "portugal",
    coords: [-9.3273, 38.9411],
    name: { de: "Mafra", hu: "Mafra", ro: "Mafra", en: "Mafra" },
    description: {
      de: "Mafra ist eine historische Stadt nordwestlich von Lissabon mit starkem barockem Erbe. Der Ort ist vor allem wegen des gewaltigen Nationalpalasts und der königlichen Parklandschaft bekannt. Die Lage zwischen Hauptstadt und Atlantikküste macht Mafra zu einem praktischen Zwischenstopp. Für Portugal-Reisen ist die Stadt ein guter Begriff für Palastarchitektur, Kultur und kurze Ausflüge.",
      hu: "Mafra egy tÃ¶rtÃ©nelmi vÃ¡ros LisszabontÃ³l Ã©szaknyugatra, erÅ‘s barokk Ã¶rÃ¶ksÃ©ggel. A telepÃ¼lÃ©s leginkÃ¡bb a hatalmas nemzeti palotÃ¡rÃ³l Ã©s a kirÃ¡lyi parkterÃ¼letekrÅ‘l ismert. A fÅ‘vÃ¡ros Ã©s az atlanti part kÃ¶zÃ¶tti fekvÃ©s praktikus megÃ¡llÃ³vÃ¡ teszi. PortugÃ¡liai utazÃ¡shoz Mafra erÅ‘s kulcsszÃ³ a palotaÃ©pÃ­tÃ©szet, a kultÃºra Ã©s a rÃ¶vid kirÃ¡ndulÃ¡sok tÃ©mÃ¡jÃ¡ban.",
      ro: "Mafra este un oraÈ™ istoric la nord-vest de Lisabona, cu un patrimoniu baroc puternic. Localitatea este cunoscutÄƒ mai ales pentru uriaÈ™ul Palat NaÈ›ional È™i pentru parcul regal din jur. PoziÈ›ia dintre capitalÄƒ È™i coasta Atlanticului Ã®l face o oprire practicÄƒ. Pentru cÄƒlÄƒtorii Ã®n Portugalia, Mafra este un termen bun pentru arhitectura palatului, culturÄƒ È™i excursii scurte.",
      en: "Mafra is a historic town northwest of Lisbon with a strong Baroque heritage. It is best known for the huge National Palace and its royal parkland. Its position between the capital and the Atlantic coast makes it a practical stop. For Portugal travel, Mafra is a strong keyword for palace architecture, culture, and short day trips."
    },
    facts: {
      de: ["Der Palast von Mafra ist das Hauptwahrzeichen.", "Die Stadt liegt nahe der AtlantikkÃ¼ste.", "Mafra verbindet Hofgeschichte und Inlandsruhe.", "Die Gegend eignet sich fÃ¼r TagesausflÃ¼ge von Lissabon aus.", "Das Barockbild prÃ¤gt die Stadt bis heute."],
      hu: ["A mafrai palota a fÅ‘ jelkÃ©p.", "A vÃ¡ros kÃ¶zel fekszik az atlanti parthoz.", "Mafra az udvari tÃ¶rtÃ©nelmet Ã©s a nyugodt belsÅ‘ vidÃ©ket kÃ¶ti Ã¶ssze.", "A terÃ¼let jÃ³ egynapos kirÃ¡ndulÃ¡s LisszabonbÃ³l.", "A barokk arculat ma is meghatÃ¡rozza a vÃ¡rost."],
      ro: ["Palatul din Mafra este simbolul principal.", "OraÈ™ul se aflÄƒ aproape de coasta Atlanticului.", "Mafra combinÄƒ istoria curÈ›ii cu liniÈ™tea din interior.", "Zona este bunÄƒ pentru excursii de o zi din Lisabona.", "Imaginea barocÄƒ defineÈ™te oraÈ™ul È™i astÄƒzi."],
      en: ["The Mafra Palace is the main symbol.", "The town sits close to the Atlantic coast.", "Mafra combines court history with inland calm.", "The area works well for day trips from Lisbon.", "Its Baroque identity still defines the town."]
    },
    image: "/geo-images/portugal/city-mafra.webp"
  },
  {
    id: "city-obidos",
    type: "city",
    parent: "portugal",
    coords: [-9.1578, 39.3606],
    name: { de: "Óbidos", hu: "Óbidos", ro: "Óbidos", en: "Obidos" },
    description: {
      de: "Óbidos ist eine ummauerte Kleinstadt im Westen Portugals und eines der fotogensten Reiseziele des Landes. Die weiß getünchten Häuser und engen Gassen schaffen eine starke historische Atmosphäre. Die Lage nahe der Nordwestküste macht Óbidos zu einem beliebten Tagesziel. Für SEO zu Mittelalter, Stadtmauern und Kleinstädten in Portugal ist Óbidos ideal.",
      hu: "Óbidos egy fallal körülvett kisváros Portugália nyugati részén, és az ország egyik legfotogénebb úti célja. A fehérre meszelt házak és a szűk utcák erős történelmi hangulatot teremtenek. Az északnyugati part közelében fekvő város népszerű egynapos kirándulási célpont. Portugáliai SEO-ban a középkor, a városfalak és a kisvárosok témájához Óbidos kiváló választás.",
      ro: "Óbidos este un mic oraÈ™ fortificat din vestul Portugaliei È™i una dintre cele mai fotogenice destinaÈ›ii ale È›Äƒrii. Casele vÄƒruite Ã®n alb È™i strÄƒduÈ›ele Ã®nguste creeazÄƒ o atmosferÄƒ istoricÄƒ puternicÄƒ. PoziÈ›ia aproape de coasta nord-vesticÄƒ Ã®l face o destinaÈ›ie popularÄƒ pentru excursii de o zi. Pentru SEO despre Evul Mediu, ziduri È™i oraÈ™e mici din Portugalia, Óbidos este ideal.",
      en: "Obidos is a walled small town in western Portugal and one of the country's most photogenic destinations. Whitewashed houses and narrow lanes create a strong historic atmosphere. Its position near the northwest coast makes it a popular day-trip stop. For SEO about medieval towns, city walls, and small places in Portugal, Obidos is ideal."
    },
    facts: {
      de: ["Óbidos ist von Stadtmauern umgeben.", "Die Altstadt ist sehr kompakt und gut begehbar.", "Der Ort liegt nahe der AtlantikkÃ¼ste.", "Hier finden viele Kulturfestivals statt.", "Die Stadt ist fÃ¼r ihre romantische Stimmung bekannt."],
      hu: ["Óbidos városfalakkal körülvett település.", "Az óváros kompakt és könnyen bejárható.", "A hely közel van az atlanti parthoz.", "Sok kulturális fesztivált rendeznek itt.", "A város romantikus hangulatáról ismert."],
      ro: ["Óbidos este înconjurat de ziduri.", "Centrul vechi este compact și ușor de parcurs.", "Localitatea se află aproape de coasta Atlanticului.", "Aici au loc multe festivaluri culturale.", "Orașul este cunoscut pentru atmosfera romantică."],
      en: ["Obidos is surrounded by city walls.", "The old town is compact and easy to walk.", "The town sits close to the Atlantic coast.", "Many cultural festivals happen here.", "The town is known for its romantic mood."]
    },
    image: "/geo-images/portugal/city-obidos.webp"
  },
  {
    id: "city-tomar",
    type: "city",
    parent: "portugal",
    coords: [-8.4114, 39.6032],
    name: { de: "Tomar", hu: "Tomar", ro: "Tomar", en: "Tomar" },
    description: {
      de: "Tomar ist eine geschichtsträchtige Stadt in Zentralportugal mit enger Verbindung zu den Tempelrittern. Die Altstadt und der Hügel mit dem Convento de Cristo geben dem Ort ein starkes Profil. Der Fluss Nabão sorgt für eine angenehme Stadtkulisse. Tomar ist ein guter SEO-Ort für Ritterorden, Klöster und das Landesinnere Portugals.",
      hu: "Tomar egy történelmi város Közép-Portugáliában, szorosan kapcsolódva a templomos lovagokhoz. Az óváros és a Convento de Cristo dombja erős karaktert ad a helynek. A Nabão folyó kellemes városi környezetet teremt. Tomar jó SEO-helyszín a lovagrendek, a kolostorok és Portugália belső területei témájában.",
      ro: "Tomar este un oraș încărcat de istorie din Portugalia centrală, strâns legat de Cavalerii Templieri. Centrul vechi și dealul cu Convento de Cristo îi dau un profil foarte puternic. Râul Nabão creează un cadru urban plăcut. Tomar este o locație SEO bună pentru ordine cavalerești, mănăstiri și interiorul Portugaliei.",
      en: "Tomar is a historic city in central Portugal closely linked to the Knights Templar. The old town and the hill with the Convento de Cristo give it a strong profile. The Nabão River adds a pleasant urban setting. Tomar is a good SEO location for knightly orders, monasteries, and inland Portugal."
    },
    facts: {
      de: ["Tomar war ein wichtiges Tempelritter-Zentrum.", "Der Convento de Cristo ist das Hauptsymbol.", "Der Nabão-Fluss prägt das Stadtbild.", "Die Stadt verbindet Geschichte und Ruhe.", "Sie ist ein Kernort der mittelportugiesischen Kultur."],
      hu: ["Tomar fontos templomos központ volt.", "A Convento de Cristo a fő jelkép.", "A Nabão folyó meghatározza a városképet.", "A város a történelmet és a nyugalmat köti össze.", "Közép-Portugália kultúrájának egyik kulcspontja."],
      ro: ["Tomar a fost un centru important al Templierilor.", "Convento de Cristo este simbolul principal.", "Râul Nabão definește peisajul urban.", "Orașul combină istoria cu liniștea.", "Este un punct-cheie al culturii din Portugalia centrală."],
      en: ["Tomar was an important Templar center.", "The Convento de Cristo is its main symbol.", "The Nabão River shapes the cityscape.", "The city combines history and calm.", "It is a key place in central Portugal."]
    },
    image: "/geo-images/portugal/city-tomar.webp"
  },
  {
    id: "city-viana-do-castelo",
    type: "city",
    parent: "portugal",
    coords: [-8.8291, 41.6932],
    name: { de: "Viana do Castelo", hu: "Viana do Castelo", ro: "Viana do Castelo", en: "Viana do Castelo" },
    description: {
      de: "Viana do Castelo ist eine elegante Stadt im Norden Portugals zwischen Fluss, Meer und Berg. Die Stadt ist für ihre Altstadt, Schiffstradition und die Aussicht vom Monte de Santa Luzia bekannt. Der Ort verbindet Atlantikküste und nördliche Kultur auf engem Raum. Für SEO zu Nordportugal, Küstenstädten und Festtraditionen ist Viana do Castelo sehr stark.",
      hu: "Viana do Castelo egy elegáns város Észak-Portugáliában, folyó, tenger és hegy között. A város az óvárosáról, hajózási hagyományairól és a Santa Luzia-hegyről nyíló kilátásról ismert. A település kis területen köti össze az atlanti partot és az északi kultúrát. SEO-ban Észak-Portugália, tengerparti városok és fesztiválhagyományok témájához Viana do Castelo nagyon erős.",
      ro: "Viana do Castelo este un oraș elegant din nordul Portugaliei, între râu, mare și munte. Orașul este cunoscut pentru centrul vechi, tradiția maritimă și priveliștea de pe Monte de Santa Luzia. Localitatea combină coasta atlantică cu cultura nordului într-un spațiu compact. Pentru SEO despre nordul Portugaliei, orașe de coastă și tradiții festivalice, Viana do Castelo este foarte puternic.",
      en: "Viana do Castelo is an elegant city in northern Portugal between river, sea, and mountain. It is known for its old town, shipbuilding tradition, and the view from Monte de Santa Luzia. The city combines Atlantic coast and northern culture in a compact area. For SEO about northern Portugal, coastal cities, and festival traditions, Viana do Castelo is very strong."
    },
    facts: {
      de: ["Die Stadt blickt auf den Lima-Fluss.", "Der Monte de Santa Luzia ist ein berühmter Aussichtspunkt.", "Viana hat starke maritime Traditionen.", "Das Zentrum bewahrt viele historische Fassaden.", "Feste und Trachten sind Teil der Identität."],
      hu: ["A város a Lima folyóra néz.", "A Monte de Santa Luzia híres kilátópont.", "Viana erős tengeri hagyományokkal bír.", "A központ sok történelmi homlokzatot őriz.", "Az ünnepek és népviseletek az identitás részei."],
      ro: ["Orașul privește spre râul Lima.", "Monte de Santa Luzia este un punct de belvedere faimos.", "Viana are tradiții maritime puternice.", "Centrul păstrează multe fațade istorice.", "Festivalurile și costumele populare fac parte din identitate."],
      en: ["The city overlooks the Lima River.", "Monte de Santa Luzia is a famous viewpoint.", "Viana has strong maritime traditions.", "The center keeps many historic facades.", "Festivals and folk costumes are part of its identity."]
    },
    image: "/geo-images/portugal/city-viana-do-castelo.webp"
  },
  {
    id: "city-tavira",
    type: "city",
    parent: "portugal",
    coords: [-7.6486, 37.1272],
    name: { de: "Tavira", hu: "Tavira", ro: "Tavira", en: "Tavira" },
    description: {
      de: "Tavira ist eine charmante Stadt im Osten der Algarve mit Fluss, Brücken und ruhigem Stadtbild. Die historischen Kirchen und die Lage nahe dem Naturpark Ria Formosa geben dem Ort viel Anziehungskraft. Tavira verbindet Strandzugang mit einer authentischen Kleinstadtatmosphäre. Für Algarve-Reisen, Altstädte und Südküste SEO ist Tavira ein starker Name.",
      hu: "Tavira a keleti Algarve bájos városa, folyóval, hidakkal és nyugodt városképpel. A történelmi templomok és a Ria Formosa natúrpark közelsége sok vonzerőt ad a helynek. Tavira a strandközeli életet autentikus kisvárosi hangulattal ötvözi. Algarve-utazásokhoz, óvárosokhoz és déli partvidék SEO-jához Tavira erős név.",
      ro: "Tavira este un oraș fermecător din estul Algarve, cu râu, poduri și un peisaj urban liniștit. Bisericile istorice și apropierea de Parcul Natural Ria Formosa îi dau mult farmec. Tavira combină accesul la plajă cu atmosfera autentică de mic oraș. Pentru călătorii în Algarve, centre istorice și SEO despre coasta sudică, Tavira este un nume puternic.",
      en: "Tavira is a charming town in eastern Algarve with a river, bridges, and a calm townscape. Historic churches and its proximity to the Ria Formosa Natural Park give it strong appeal. Tavira combines beach access with an authentic small-town atmosphere. For Algarve travel, old towns, and southern coast SEO, Tavira is a strong name."
    },
    facts: {
      de: ["Der Fluss Gilão prägt das Zentrum.", "Tavira liegt nahe der Ria Formosa.", "Die Stadt hat viele Kirchen und Plätze.", "Sie ist ruhiger als viele westliche Algarve-Orte.", "Der Strandzugang ist per Fähre gut erreichbar."],
      hu: ["A Gilão folyó alakítja a központot.", "Tavira közel fekszik a Ria Formosához.", "A városban sok templom és tér található.", "Nyugodtabb, mint sok nyugati algarvei település.", "A strandok komppal jól elérhetők."],
      ro: ["Râul Gilão definește centrul.", "Tavira se află aproape de Ria Formosa.", "Orașul are multe biserici și piețe.", "Este mai liniștit decât multe locuri din vestul Algarve.", "Accesul la plajă se face ușor cu feribotul."],
      en: ["The Gilão River shapes the center.", "Tavira sits near Ria Formosa.", "The town has many churches and squares.", "It is quieter than many western Algarve places.", "Beach access is easy by ferry."]
    },
    image: "/geo-images/portugal/city-tavira.webp"
  },
  {
    id: "city-loule",
    type: "city",
    parent: "portugal",
    coords: [-8.0093, 37.1372],
    name: { de: "Loulé", hu: "Loulé", ro: "Loulé", en: "Loule" },
    description: {
      de: "Loulé ist eine lebhafte Marktstadt im Zentrum der Algarve mit starkem Alltagscharakter. Die Stadt ist bekannt für ihre überdachte Markthalle, ihr Handwerk und ihre Nähe zu den Ferienorten der Küste. Gleichzeitig bewahrt Loulé eine alte Stadtstruktur mit Gassen und Mauerspuren. Für SEO zu lokaler Algarve-Kultur, Märkten und Stadtleben ist Loulé sehr nützlich.",
      hu: "Loulé egy élénk piactérváros az Algarve központjában, erős mindennapi karakterrel. A város fedett piacáról, kézművességéről és a tengerparti üdülőhelyek közelségéről ismert. Ugyanakkor régi utcahálózatot és falmaradványokat is őriz. SEO-ban a helyi algarvei kultúra, piacok és városi élet témájához Loulé nagyon hasznos.",
      ro: "Loulé este un oraș de piață animat din centrul Algarve, cu un caracter local puternic. Localitatea este cunoscută pentru hala de piață, meșteșuguri și apropierea de stațiunile de pe coastă. În același timp, păstrează o structură veche cu străduțe și urme de ziduri. Pentru SEO despre cultura locală din Algarve, piețe și viață urbană, Loulé este foarte util.",
      en: "Loule is a lively market town in the center of Algarve with a strong everyday character. It is known for its covered market, crafts, and proximity to the coastal resorts. At the same time, it preserves an old street pattern and traces of walls. For SEO about local Algarve culture, markets, and city life, Loule is very useful."
    },
    facts: {
      de: ["Der Markt ist ein zentrales Wahrzeichen.", "Loulé liegt im Herzen der Algarve.", "Die Stadt verbindet Handwerk und Handel.", "Die Altstadt hat eine lange Geschichte.", "Feste machen den Ort zusätzlich bekannt."],
      hu: ["A piac a fő jelkép.", "Loulé az Algarve szívében fekszik.", "A város a kézművességet és a kereskedelmet kapcsolja össze.", "Az óváros hosszú múltra tekint vissza.", "A fesztiválok tovább erősítik az ismertségét."],
      ro: ["Piața acoperită este simbolul principal.", "Loulé se află în inima Algarve.", "Orașul combină meșteșugurile și comerțul.", "Centrul vechi are o istorie lungă.", "Festivalurile îi sporesc renumele."],
      en: ["The market is the main symbol.", "Loule sits in the heart of Algarve.", "The town combines crafts and trade.", "The old town has a long history.", "Festivals add to its reputation."]
    },
    image: "/geo-images/portugal/city-loule.webp"
  },
  {
    id: "city-silves",
    type: "city",
    parent: "portugal",
    coords: [-8.4406, 37.1894],
    name: { de: "Silves", hu: "Silves", ro: "Silves", en: "Silves" },
    description: {
      de: "Silves ist eine historische Stadt im Hinterland der Algarve mit starkem maurischem Erbe. Die rote Burg auf dem Hügel ist das markanteste Bild des Ortes. Der Fluss Arade und die Zitruslandschaft verleihen Silves einen warmen, regionalen Charakter. Für SEO rund um Algarve-Geschichte, Burgen und Flusstäler ist Silves sehr stark.",
      hu: "Silves egy történelmi város az Algarve belső területein, erős mór örökséggel. A dombon álló vörös vár a hely legjellemzőbb képe. Az Arade folyó és a citrusültetvények meleg, regionális karaktert adnak Silvesnek. Algarve-történelemhez, várakhoz és folyóvölgyekhez SEO-ban Silves nagyon erős.",
      ro: "Silves este un oraș istoric din interiorul Algarve, cu un patrimoniu maur puternic. Cetatea roșie de pe deal este imaginea cea mai cunoscută a locului. Râul Arade și livezile de citrice îi dau un caracter regional cald. Pentru SEO despre istoria Algarve, castele și văi de râu, Silves este foarte puternic.",
      en: "Silves is a historic city in the Algarve hinterland with a strong Moorish heritage. The red castle on the hill is the town's most iconic image. The Arade River and citrus landscape give Silves a warm regional character. For Algarve history, castles, and river valleys SEO, Silves is very strong."
    },
    facts: {
      de: ["Die Burg von Silves dominiert die Skyline.", "Der Ort war einst ein maurisches Zentrum.", "Der Arade verbindet Stadt und Landschaft.", "Silves liegt abseits des Küstentrubels.", "Die Zitrusproduktion ist regional wichtig."],
      hu: ["Silves vára uralja a látképet.", "A település egykor mór központ volt.", "Az Arade összeköti a várost és a tájat.", "Silves távolabb van a part tömegétől.", "A citrustermelés regionálisan fontos."],
      ro: ["Castelul din Silves domină orizontul.", "Localitatea a fost cândva un centru maur.", "Arade leagă orașul de peisaj.", "Silves este departe de aglomerația de pe coastă.", "Producția de citrice este importantă regional."],
      en: ["Silves Castle dominates the skyline.", "The town was once a Moorish center.", "The Arade links the city and landscape.", "Silves sits away from the coastal crowds.", "Citrus production matters regionally."]
    },
    image: "/geo-images/portugal/city-silves.webp"
  },
  {
    id: "city-santarem",
    type: "city",
    parent: "portugal",
    coords: [-8.6865, 39.2362],
    name: { de: "Santarém", hu: "Santarém", ro: "Santarém", en: "Santarem" },
    description: {
      de: "Santarém liegt hoch über dem Tejo und ist eine der wichtigsten Städte im Ribatejo. Die Lage auf dem Plateau gibt weite Ausblicke über die Flussebene. Die Stadt ist stark mit Landwirtschaft, Pferdekultur und regionalem Handel verbunden. Für SEO zu Tejo, Ribatejo und dem portugiesischen Inland ist Santarém sehr passend.",
      hu: "Santarém magasabban fekszik a Tejo fölött, és Ribatejo egyik legfontosabb városa. A fennsíki fekvés széles kilátást ad a folyó síkságára. A város erősen kötődik a mezőgazdasághoz, a lovaskultúrához és a regionális kereskedelemhez. SEO-ban a Tejo, a Ribatejo és Portugália belső vidéke témáiban Santarém nagyon találó.",
      ro: "Santarém se află deasupra râului Tejo și este unul dintre cele mai importante orașe din Ribatejo. Poziția pe platou oferă panorame largi asupra câmpiei fluviale. Orașul este strâns legat de agricultură, cultura calului și comerțul regional. Pentru SEO despre Tejo, Ribatejo și interiorul Portugaliei, Santarém este foarte potrivit.",
      en: "Santarem sits above the Tagus River and is one of the key cities of Ribatejo. Its plateau position gives wide views over the river plain. The city is strongly linked to agriculture, horse culture, and regional trade. For SEO about the Tagus, Ribatejo, and inland Portugal, Santarem fits very well."
    },
    facts: {
      de: ["Die Lage über dem Tejo ist charakteristisch.", "Santarém gehört zum Ribatejo.", "Die Stadt ist für Pferde und Landwirtschaft bekannt.", "Das Plateau bietet weite Ausblicke.", "Der Ort hat einen starken Regionalmarkt."],
      hu: ["A Tejo fölötti fekvés a legjellemzőbb.", "Santarém Ribatejo része.", "A város lovairól és mezőgazdaságáról ismert.", "A fennsík széles panorámát nyújt.", "A település erős regionális piacot tart fenn."],
      ro: ["Poziția deasupra Tejoului este caracteristică.", "Santarém face parte din Ribatejo.", "Orașul este cunoscut pentru cai și agricultură.", "Platoul oferă panorame largi.", "Localitatea are o piață regională puternică."],
      en: ["Its position above the Tagus is distinctive.", "Santarem belongs to Ribatejo.", "The city is known for horses and farming.", "The plateau offers wide panoramas.", "The town has a strong regional market."]
    },
    image: "/geo-images/portugal/city-santarem.webp"
  },
  {
    id: "city-guarda",
    type: "city",
    parent: "portugal",
    coords: [-7.2659, 40.5373],
    name: { de: "Guarda", hu: "Guarda", ro: "Guarda", en: "Guarda" },
    description: {
      de: "Guarda ist die höchstgelegene Stadt des portugiesischen Festlands und ein markanter Ort im Osten des Landes. Die frische Bergluft und die steinerne Altstadt prägen den Charakter der Stadt. Guarda ist ein Tor zur Serra da Estrela und zu den Grenzregionen im Inland. Für SEO zu Höhenlage, Bergen und kontinentalem Portugal ist Guarda eine starke Wahl.",
      hu: "Guarda a portugál szárazföld legmagasabban fekvő városa, és az ország keleti részének fontos pontja. A friss hegyi levegő és a kőből épült óváros meghatározza a város karakterét. Guarda kapu a Serra da Estrela és a határvidékek felé. SEO-ban a magasság, a hegyek és a szárazföldi Portugália témájához Guarda erős választás.",
      ro: "Guarda este cel mai înalt oraș de pe continentul portughez și un punct important în estul țării. Aerul de munte și centrul vechi din piatră definesc caracterul orașului. Guarda este o poartă către Serra da Estrela și către zonele de frontieră din interior. Pentru SEO despre altitudine, munți și Portugalia continentală, Guarda este o alegere puternică.",
      en: "Guarda is the highest city on mainland Portugal and an important point in the east of the country. Fresh mountain air and a stone old town define its character. Guarda is a gateway to Serra da Estrela and inland border regions. For SEO about altitude, mountains, and mainland Portugal, Guarda is a strong choice."
    },
    facts: {
      de: ["Guarda ist die höchstgelegene Festlandsstadt.", "Die Stadt liegt nahe der Serra da Estrela.", "Die Altstadt ist von Steinarchitektur geprägt.", "Das Klima ist im Winter oft kalt.", "Der Ort ist ein strategisches Inlandstor."],
      hu: ["Guarda a szárazföld legmagasabban fekvő városa.", "A település közel van a Serra da Estrelához.", "Az óvárost a kőépítészet jellemzi.", "Télen gyakran hideg az idő.", "A város stratégiai belső kapu."],
      ro: ["Guarda este cel mai înalt oraș de pe continent.", "Localitatea se află aproape de Serra da Estrela.", "Centrul vechi este definit de piatră.", "Iarna este adesea frig.", "Orașul este o poartă strategică spre interior."],
      en: ["Guarda is the highest mainland city.", "The town sits near Serra da Estrela.", "The old town is shaped by stone architecture.", "Winters are often cold.", "The city is a strategic inland gateway."]
    },
    image: "/geo-images/portugal/city-guarda.webp"
  },
  {
    id: "city-chaves",
    type: "city",
    parent: "portugal",
    coords: [-7.4688, 41.7402],
    name: { de: "Chaves", hu: "Chaves", ro: "Chaves", en: "Chaves" },
    description: {
      de: "Chaves liegt im Norden nahe der spanischen Grenze und ist für seine Thermen und Brücken bekannt. Die Stadt verbindet römische Vergangenheit mit einem lebendigen regionalen Alltag. Der Tâmega-Fluss schafft eine angenehme Flusslandschaft mitten im Inland. Für SEO zu Grenzstädten, Thermalkultur und Nordportugal ist Chaves sehr stark.",
      hu: "Chaves az északi határ közelében fekszik, és termálfürdőiről, valamint hídjairól ismert. A város a római múltat és az élénk regionális mindennapokat kapcsolja össze. A Tâmega folyó kellemes folyóparti környezetet teremt a belső vidéken. Határvárosok, termálkultúra és Észak-Portugália SEO-jához Chaves nagyon erős.",
      ro: "Chaves se află în nord, aproape de granița cu Spania, și este cunoscut pentru băile termale și podurile sale. Orașul combină trecutul roman cu viața regională de zi cu zi. Râul Tâmega creează un cadru plăcut de mal de râu în interiorul țării. Pentru SEO despre orașe de frontieră, cultură termală și nordul Portugaliei, Chaves este foarte puternic.",
      en: "Chaves sits in the north near the Spanish border and is known for its thermal baths and bridges. The city combines Roman history with a lively regional everyday life. The Tâmega River creates a pleasant river setting in the inland area. For SEO about border towns, thermal culture, and northern Portugal, Chaves is very strong."
    },
    facts: {
      de: ["Chaves ist für Thermen berühmt.", "Die römische Brücke ist ein Wahrzeichen.", "Die Stadt liegt nahe Spanien.", "Der Tâmega prägt den Ort.", "Chaves hat starke regionale Identität."],
      hu: ["Chaves híres a termálfürdőiről.", "A római híd a város jelképe.", "A település közel van Spanyolországhoz.", "A Tâmega meghatározza a várost.", "Chaves erős regionális identitással bír."],
      ro: ["Chaves este faimos pentru băile termale.", "Podul roman este un simbol.", "Orașul este aproape de Spania.", "Tâmega definește localitatea.", "Chaves are o identitate regională puternică."],
      en: ["Chaves is famous for thermal baths.", "The Roman bridge is a symbol.", "The town is close to Spain.", "The Tâmega defines the city.", "Chaves has a strong regional identity."]
    },
    image: "/geo-images/portugal/city-chaves.webp"
  },
  {
    id: "city-elvas",
    type: "city",
    parent: "portugal",
    coords: [-7.163, 38.8816],
    name: { de: "Elvas", hu: "Elvas", ro: "Elvas", en: "Elvas" },
    description: {
      de: "Elvas ist eine Grenzstadt im Alentejo mit mächtigen Befestigungen und klarer Militärgeschichte. Die sternförmigen Stadtwerke gehören zu den eindrucksvollsten in Portugal. Elvas liegt nahe der spanischen Grenze und ist deshalb historisch sehr bedeutend. Für SEO zu Festungsstädten, Grenzland und Alentejo ist Elvas ein Top-Begriff.",
      hu: "Elvas egy határváros az Alentejóban, erőteljes erődítményekkel és egyértelmű katonai múlttal. A csillag alakú városvédművek Portugália leglátványosabbjai közé tartoznak. A település közel fekszik a spanyol határhoz, ezért történelmileg különösen fontos. Erődvárosok, határvidék és Alentejo SEO-jához Elvas top kulcsszó.",
      ro: "Elvas este un oraș de frontieră din Alentejo, cu fortificații puternice și o istorie militară clară. Zidurile în formă de stea se numără printre cele mai impresionante din Portugalia. Localitatea se află aproape de granița cu Spania și este foarte importantă istoric. Pentru SEO despre orașe-fortăreață, zone de frontieră și Alentejo, Elvas este un termen de top.",
      en: "Elvas is a border city in Alentejo with powerful fortifications and a clear military history. Its star-shaped defenses are among the most impressive in Portugal. The town sits close to the Spanish border, which makes it historically very important. For SEO about fortress towns, borderlands, and Alentejo, Elvas is a top term."
    },
    facts: {
      de: ["Elvas ist für seine Festung bekannt.", "Die Stadt liegt an der spanischen Grenze.", "Die Befestigungen sind UNESCO-geschützt.", "Das Militärerbe prägt den Ort stark.", "Elvas ist ein Schlüsselort im Alentejo."],
      hu: ["Elvas az erődjéről híres.", "A város a spanyol határon fekszik.", "A védművek UNESCO-védelem alatt állnak.", "A katonai örökség erősen meghatározza a helyet.", "Elvas az Alentejo egyik kulcspontja."],
      ro: ["Elvas este cunoscut pentru cetatea sa.", "Orașul se află la granița cu Spania.", "Fortificațiile sunt protejate de UNESCO.", "Moștenirea militară definește puternic locul.", "Elvas este un punct-cheie al Alentejoului."],
      en: ["Elvas is known for its fortress.", "The city sits on the Spanish border.", "The defenses are protected by UNESCO.", "Military heritage strongly defines the place.", "Elvas is a key point in Alentejo."]
    },
    image: "/geo-images/portugal/city-elvas.webp"
  },
  {
    id: "city-portalegre",
    type: "city",
    parent: "portugal",
    coords: [-7.4313, 39.2967],
    name: { de: "Portalegre", hu: "Portalegre", ro: "Portalegre", en: "Portalegre" },
    description: {
      de: "Portalegre ist eine ruhige Stadt im nördlichen Alentejo mit Textil- und Grenzgeschichte. Der Ort liegt nahe der Serra de São Mamede und ist von Hügeln und Wald geprägt. Die Altstadt bewahrt ein traditionelles, inlandtypisches Portugal-Bild. Für SEO zu Alentejo, Handwerk und Bergnähe ist Portalegre sehr passend.",
      hu: "Portalegre egy nyugodt város az északi Alentejóban, textil- és határtörténeti múlttal. A település közel fekszik a Serra de São Mamede-hez, és dombok, valamint erdők veszik körül. Az óváros hagyományos, belső portugál képet őriz. Alentejo, kézművesség és hegyközeli városok SEO-jához Portalegre nagyon megfelelő.",
      ro: "Portalegre este un oraș liniștit din nordul Alentejoului, cu istorie textilă și de frontieră. Localitatea se află aproape de Serra de São Mamede și este înconjurată de dealuri și păduri. Centrul vechi păstrează imaginea tradițională a Portugaliei din interior. Pentru SEO despre Alentejo, meșteșug și apropierea de munte, Portalegre este foarte potrivit.",
      en: "Portalegre is a calm city in northern Alentejo with textile and border history. The town sits near Serra de São Mamede and is surrounded by hills and forest. Its old town preserves a traditional inland Portuguese feel. For SEO about Alentejo, crafts, and mountain proximity, Portalegre fits very well."
    },
    facts: {
      de: ["Portalegre liegt im nördlichen Alentejo.", "Die Stadt ist für Textilien bekannt.", "Die Serra de São Mamede liegt nahebei.", "Der Ort hat ein ruhiges Stadtbild.", "Historische Handelsspuren sind noch sichtbar."],
      hu: ["Portalegre az északi Alentejóban fekszik.", "A város textiliparáról ismert.", "A Serra de São Mamede közel van.", "A település nyugodt városképet őriz.", "A történelmi kereskedelmi nyomok ma is látszanak."],
      ro: ["Portalegre se află în nordul Alentejoului.", "Orașul este cunoscut pentru textile.", "Serra de São Mamede este aproape.", "Localitatea are un peisaj urban liniștit.", "Urmele comerciale istorice sunt încă vizibile."],
      en: ["Portalegre sits in northern Alentejo.", "The city is known for textiles.", "Serra de São Mamede is nearby.", "The town keeps a calm cityscape.", "Historic trade traces are still visible."]
    },
    image: "/geo-images/portugal/city-portalegre.webp"
  },
  {
    id: "city-castelo-branco",
    type: "city",
    parent: "portugal",
    coords: [-7.49, 39.8222],
    name: { de: "Castelo Branco", hu: "Castelo Branco", ro: "Castelo Branco", en: "Castelo Branco" },
    description: {
      de: "Castelo Branco ist eine zentrale Stadt im Osten Portugals mit klarem inlandtypischem Charakter. Die Gärten, das alte Zentrum und die Nähe zu Berg- und Grenzlandschaften prägen ihren Wert. Der Ort ist ein guter Ausgangspunkt für Reisen durch Beira Baixa. Für SEO zu Zentralportugal, Gärten und Grenzregionen ist Castelo Branco stark.",
      hu: "Castelo Branco Portugália keleti középső részének városa, erős belső területi karakterrel. A kertek, az óközpont és a hegyvidéki, illetve határvidéki tájak közelsége adják értékét. A település jó kiindulópont Beira Baixa felfedezéséhez. Közép-Portugália, kertek és határvidékek SEO-jában Castelo Branco erős.",
      ro: "Castelo Branco este un oraș central din estul Portugaliei, cu un caracter clar de interior. Grădinile, centrul vechi și apropierea de zone montane și de frontieră îi dau valoare. Localitatea este un bun punct de plecare pentru explorarea Beira Baixa. Pentru SEO despre Portugalia centrală, grădini și zone de frontieră, Castelo Branco este puternic.",
      en: "Castelo Branco is a central city in eastern Portugal with a clear inland character. Its gardens, old center, and proximity to mountain and border landscapes define its value. The town is a good base for exploring Beira Baixa. For SEO about central Portugal, gardens, and border regions, Castelo Branco is strong."
    },
    facts: {
      de: ["Die Stadt liegt in Beira Baixa.", "Gärten gehören zu ihrem Profil.", "Die Lage ist für Inlandreisen praktisch.", "Der Ort verbindet Ruhe und Regionalität.", "Grenzlandschaften liegen in Reichweite."],
      hu: ["A város Beira Baixában fekszik.", "A kertek részei az arculatának.", "A fekvés praktikus belső utazásokhoz.", "A hely a nyugalmat és a regionalitást köti össze.", "A határvidéki tájak könnyen elérhetők."],
      ro: ["Orașul se află în Beira Baixa.", "Grădinile fac parte din profilul său.", "Poziția este practică pentru călătorii în interior.", "Locul combină liniștea și identitatea regională.", "Peisajele de frontieră sunt la îndemână."],
      en: ["The city lies in Beira Baixa.", "Gardens are part of its profile.", "The location works well for inland trips.", "The town combines calm and regional identity.", "Border landscapes are within reach."]
    },
    image: "/geo-images/portugal/city-castelo-branco.webp"
  },
  {
    id: "city-vila-real",
    type: "city",
    parent: "portugal",
    coords: [-7.7441, 41.3006],
    name: { de: "Vila Real", hu: "Vila Real", ro: "Vila Real", en: "Vila Real" },
    description: {
      de: "Vila Real liegt im Norden Portugals zwischen Douro und Gebirge. Die Stadt ist ein guter Ausgangspunkt für das Douro-Tal, das Marão-Gebirge und das Inland des Nordens. Das urbane Leben bleibt überschaubar und regional geprägt. Für SEO zu Nordportugal, Bergen und Weinkulturlandschaften ist Vila Real sehr nützlich.",
      hu: "Vila Real Portugália északi részén fekszik, a Douro és a hegyek között. A város jó kiindulópont a Douro-völgy, a Marão-hegység és az északi belső vidék felfedezéséhez. A városi élet itt mérsékelt és erősen regionális. Észak-Portugália, hegyek és borvidékek SEO-jához Vila Real nagyon hasznos.",
      ro: "Vila Real se află în nordul Portugaliei, între Douro și munți. Orașul este un bun punct de plecare pentru Valea Douro, Munții Marão și interiorul nordic. Viața urbană rămâne aici moderată și puternic regională. Pentru SEO despre nordul Portugaliei, munți și peisaje viticole, Vila Real este foarte util.",
      en: "Vila Real sits in northern Portugal between the Douro and the mountains. The city is a good base for the Douro Valley, the Marão range, and inland north Portugal. Urban life here stays modest and strongly regional. For SEO about northern Portugal, mountains, and wine landscapes, Vila Real is very useful."
    },
    facts: {
      de: ["Vila Real liegt zwischen Douro und Bergen.", "Die Stadt ist ein guter Ausgangspunkt fürs Inland.", "Die Region ist eng mit Wein verbunden.", "Der Ort hat ein ruhiges Regionalzentrum.", "Nordportugal ist hier gut erreichbar."],
      hu: ["Vila Real a Douro és a hegyek között fekszik.", "A város jó kiindulópont a belső vidékhez.", "A régió szorosan kapcsolódik a borhoz.", "A település nyugodt regionális központ.", "Észak-Portugália innen jól elérhető."],
      ro: ["Vila Real se află între Douro și munți.", "Orașul este un bun punct de plecare spre interior.", "Regiunea este strâns legată de vin.", "Localitatea are un centru regional liniștit.", "Nordul Portugaliei este ușor accesibil de aici."],
      en: ["Vila Real sits between the Douro and the mountains.", "The city is a good base for inland travel.", "The region is closely linked to wine.", "The town has a calm regional center.", "Northern Portugal is easy to reach from here."]
    },
    image: "/geo-images/portugal/city-vila-real.webp"
  },
  {
    id: "city-covilha",
    type: "city",
    parent: "portugal",
    coords: [-7.5026, 40.2806],
    name: { de: "Covilhã", hu: "Covilhã", ro: "Covilhã", en: "Covilha" },
    description: {
      de: "Covilhã ist eine Bergstadt am Rand der Serra da Estrela und hat eine starke Textilgeschichte. Die Lage zwischen Tal und Hochgebirge verleiht ihr ein klares Profil. Der Ort ist für Wintertourismus, Aussichtspunkte und Inlandreisen interessant. Für SEO zu Bergen, Industriegeschichte und Zentralportugal ist Covilhã sehr wertvoll.",
      hu: "Covilhã egy hegyvidéki város a Serra da Estrela peremén, erős textilörökséggel. A völgy és a magashegy közötti fekvés egyértelmű karaktert ad neki. A település érdekes a téli turizmus, a kilátópontok és a belső utazások számára. SEO-ban a hegyek, ipartörténet és Közép-Portugália témáiban Covilhã nagyon értékes.",
      ro: "Covilhã este un oraș de munte la marginea Serra da Estrela și are o puternică istorie textilă. Poziția dintre vale și muntele înalt îi dă un profil clar. Localitatea este interesantă pentru turismul de iarnă, puncte de belvedere și călătorii în interior. Pentru SEO despre munți, istorie industrială și Portugalia centrală, Covilhã este foarte valoroasă.",
      en: "Covilha is a mountain city on the edge of Serra da Estrela with a strong textile history. Its position between valley and high mountain gives it a clear profile. The town is interesting for winter tourism, viewpoints, and inland travel. For SEO about mountains, industrial history, and central Portugal, Covilha is very valuable."
    },
    facts: {
      de: ["Covilhã liegt am Rand der Serra da Estrela.", "Die Stadt ist historisch textil geprägt.", "Die Höhenlage sorgt für frische Luft.", "Der Ort ist wichtig für Bergtourismus.", "Tal und Gipfel liegen nah beieinander."],
      hu: ["Covilhã a Serra da Estrela peremén fekszik.", "A város történetileg textilipari központ.", "A magas fekvés friss levegőt ad.", "A település fontos a hegyi turizmusban.", "A völgy és a csúcsok közel vannak egymáshoz."],
      ro: ["Covilhã se află la marginea Serra da Estrela.", "Orașul are o istorie textilă puternică.", "Altitudinea aduce aer curat.", "Locul este important pentru turismul montan.", "Valea și vârfurile sunt foarte apropiate."],
      en: ["Covilha sits on the edge of Serra da Estrela.", "The city has a strong textile history.", "Its altitude brings fresh air.", "The town matters for mountain tourism.", "The valley and peaks are close together."]
    },
    image: "/geo-images/portugal/city-covilha.webp"
  },
  {
    id: "land-sao-francisco-church-porto",
    type: "landmark",
    parent: "city-porto",
    coords: [-8.6135, 41.1416],
    name: { de: "Kirche São Francisco", hu: "São Francisco templom", ro: "Biserica São Francisco", en: "Church of São Francisco" },
    description: {
      de: "Die Kirche São Francisco in Porto ist berühmt für ihr reich vergoldetes Barockinterieur. Von außen wirkt sie eher schlicht, innen zeigt sie große dekorative Kraft. Der Ort verbindet sakrale Kunst, Stadtgeschichte und starke Besucherwirkung. Für Porto, Kirchen und Barock-SEO ist diese Kirche ein sehr wertvoller Eintrag.",
      hu: "A portói São Francisco-templom híres gazdagon aranyozott barokk belső teréről. Kívül visszafogott, belül viszont rendkívül díszes és látványos. A hely a szakrális művészetet, a várostörténetet és az erős látogatói élményt köti össze. Porto, templomok és barokk SEO-jához ez nagyon értékes bejegyzés.",
      ro: "Biserica São Francisco din Porto este faimoasă pentru interiorul său baroc bogat aurit. La exterior pare simplă, dar în interior are o forță decorativă mare. Locul combină arta sacră, istoria orașului și un impact puternic asupra vizitatorilor. Pentru Porto, biserici și SEO baroc, acest lăcaș este foarte valoros.",
      en: "The Church of São Francisco in Porto is famous for its richly gilded Baroque interior. It looks modest from the outside, but inside it has strong decorative power. The site combines sacred art, city history, and strong visitor appeal. For Porto, churches, and Baroque SEO, this church is very valuable."
    },
    facts: {
      de: ["Das Innere ist stark vergoldet.", "Die Kirche liegt in der Altstadt von Porto.", "Das Äußere wirkt bewusst schlicht.", "Barockkunst ist hier besonders präsent.", "Der Ort ist ein Besucherhighlight der Stadt."],
      hu: ["A belső tér erősen aranyozott.", "A templom Porto óvárosában található.", "A külső szándékosan visszafogott.", "A barokk művészet itt különösen erős.", "A hely a város egyik kiemelt látnivalója."],
      ro: ["Interiorul este puternic aurit.", "Biserica se află în centrul vechi al Porto.", "Exteriorul este intenționat sobru.", "Arta barocă este foarte prezentă aici.", "Locul este un punct de atracție major al orașului."],
      en: ["The interior is heavily gilded.", "The church sits in Porto's old town.", "The exterior is intentionally plain.", "Baroque art is strongly present here.", "The site is a major city highlight."]
    },
    image: "/geo-images/portugal/land-sao-francisco-church-porto.webp"
  },
  {
    id: "land-santa-luzia-sanctuary",
    type: "landmark",
    parent: "city-viana-do-castelo",
    coords: [-8.8387, 41.6975],
    name: { de: "Santuário de Santa Luzia", hu: "Santa Luzia-szentély", ro: "Sanctuarul Santa Luzia", en: "Santa Luzia Sanctuary" },
    description: {
      de: "Das Santuário de Santa Luzia liegt über Viana do Castelo und ist ein ikonischer Aussichtspunkt. Die Anlage verbindet Pilgertradition mit einer der besten Panoramen Nordportugals. Der Ort eignet sich ideal für Bildsuche, Reiseplanung und Küstenblicke. Für Nordportugal, Heiligtümer und Aussicht SEO ist er ein sehr gutes Ziel.",
      hu: "A Santuário de Santa Luzia Viana do Castelo fölött fekszik, és ikonikus kilátópont. A hely a zarándokhagyományt Észak-Portugália egyik legszebb panorámájával köti össze. Kifejezetten alkalmas képi keresésekhez, utazástervezéshez és part menti nézőpontokhoz. Észak-Portugália, szentélyek és kilátás SEO-jához nagyon jó célpont.",
      ro: "Sanctuarul Santa Luzia se află deasupra orașului Viana do Castelo și este un punct de belvedere iconic. Ansamblul combină tradiția pelerinajului cu una dintre cele mai bune panorame din nordul Portugaliei. Locul este ideal pentru căutări de imagini, planificare de călătorie și priveliști de coastă. Pentru SEO despre nordul Portugaliei, sanctuare și panorame, este o alegere foarte bună.",
      en: "The Santa Luzia Sanctuary sits above Viana do Castelo and is an iconic viewpoint. The complex combines pilgrimage tradition with one of the best panoramas in northern Portugal. It is ideal for image search, trip planning, and coastal views. For northern Portugal, sanctuaries, and viewpoint SEO, it is a very good target."
    },
    facts: {
      de: ["Der Blick über Stadt und Meer ist berühmt.", "Der Ort gehört zu Viana do Castelo.", "Pilger und Besucher nutzen denselben Aussichtspunkt.", "Die Anlage ist stark fotogen.", "Sie prägt das Image der Stadt."],
      hu: ["A városra és a tengerre nyíló kilátás híres.", "A hely Viana do Castelo része.", "Zarándokok és látogatók ugyanazt a kilátópontot használják.", "Az épületegyüttes nagyon fotogén.", "Meghatározza a város arculatát."],
      ro: ["Vederea spre oraș și mare este celebră.", "Locul aparține de Viana do Castelo.", "Pelerinii și vizitatorii folosesc același punct de belvedere.", "Ansamblul este foarte fotogenic.", "Definește imaginea orașului."],
      en: ["The view over the city and sea is famous.", "The site belongs to Viana do Castelo.", "Pilgrims and visitors use the same viewpoint.", "The complex is highly photogenic.", "It shapes the city's image."]
    },
    image: "/geo-images/portugal/land-santa-luzia-sanctuary.webp"
  },
  {
    id: "hist-milreu-ruins",
    type: "historical",
    parent: "city-faro",
    coords: [-7.9206, 37.1095],
    name: { de: "Römische Ruinen von Milreu", hu: "Milreu római romok", ro: "Ruinele romane de la Milreu", en: "Milreu Roman Ruins" },
    description: {
      de: "Die römischen Ruinen von Milreu liegen bei Faro und zeigen die antike Geschichte der Algarve. Der Ort bewahrt Mauerreste, Wohnstrukturen und wichtige archäologische Spuren. Er ergänzt das Bild der Region weit über Strandurlaub hinaus. Für Faro, Archäologie und historische Algarve ist Milreu ein sehr guter SEO-Ort.",
      hu: "A Milreu római romok Faro közelében találhatók, és az Algarve ókori történelmét mutatják be. A hely falmaradványokat, lakóstruktúrákat és fontos régészeti nyomokat őriz. Jóval a strandturizmuson túlmutató képet ad a régióról. Faro, régészet és történelmi Algarve SEO-jához Milreu nagyon jó helyszín.",
      ro: "Ruinele romane de la Milreu se află lângă Faro și arată istoria antică a Algarve. Situl păstrează ziduri, structuri de locuire și urme arheologice importante. Completează imaginea regiunii dincolo de turismul de plajă. Pentru Faro, arheologie și Algarve istoric, Milreu este un loc SEO foarte bun.",
      en: "The Roman ruins of Milreu are near Faro and show the ancient history of the Algarve. The site preserves walls, domestic structures, and important archaeological traces. It adds depth to the region well beyond beach tourism. For Faro, archaeology, and historic Algarve SEO, Milreu is a very good place."
    },
    facts: {
      de: ["Der Ort liegt nahe Faro.", "Milreu zeigt rÃ¶mische Algarve-Geschichte.", "ArchÃ¤ologie ist hier der Schwerpunkt.", "Die Ruinen ergÃ¤nzen das KÃ¼stenbild der Region.", "Der Platz ist fÃ¼r Bildung und Tourismus wichtig."],
      hu: ["A hely Faro közelében van.", "Milreu a római Algarve-történelmet mutatja.", "A régészet a fő vonzerő.", "A romok kiegészítik a régió tengerparti képét.", "A hely oktatási és turisztikai szempontból is fontos."],
      ro: ["Situl se află lângă Faro.", "Milreu arată istoria romană a Algarve.", "Arheologia este atracția principală.", "Ruinele completează imaginea litorală a regiunii.", "Locul este important educațional și turistic."],
      en: ["The site sits near Faro.", "Milreu shows Roman Algarve history.", "Archaeology is the main attraction.", "The ruins add depth to the region's coastal image.", "The place matters for education and tourism."]
    },
    image: "/geo-images/portugal/hist-milreu-ruins.webp"
  },
  {
    id: "hist-elvas-fortifications",
    type: "historical",
    parent: "city-elvas",
    coords: [-7.1664, 38.8819],
    name: { de: "Befestigungen von Elvas", hu: "Elvas erődítményei", ro: "Fortificațiile din Elvas", en: "Elvas Fortifications" },
    description: {
      de: "Die Befestigungen von Elvas gehören zu den beeindruckendsten Militäranlagen Portugals. Die Bastionen, Wälle und Außenwerke zeigen die strategische Rolle der Grenzstadt. Das Ensemble steht für Technik, Verteidigung und historische Stadtplanung. Für Alentejo, Festungen und UNESCO-SEO ist Elvas ein sehr starkes Motiv.",
      hu: "Az Elvas-i erődítmények Portugália leglátványosabb katonai létesítményei közé tartoznak. A bástyák, földsáncok és külső művek a határváros stratégiai szerepét mutatják. Az együttes a technikát, a védekezést és a történeti várostervezést képviseli. Az Alentejo, erődök és UNESCO SEO-jában Elvas nagyon erős motívum.",
      ro: "Fortificațiile din Elvas se numără printre cele mai impresionante ansambluri militare ale Portugaliei. Bastioanele, valurile și lucrările exterioare arată rolul strategic al orașului de frontieră. Ansamblul reprezintă tehnică, apărare și planificare urbană istorică. Pentru Alentejo, forturi și SEO UNESCO, Elvas este un motiv foarte puternic.",
      en: "The Elvas fortifications are among Portugal's most impressive military structures. The bastions, walls, and outer works show the strategic role of the border city. The ensemble represents engineering, defense, and historic urban planning. For Alentejo, forts, and UNESCO SEO, Elvas is a very strong theme."
    },
    facts: {
      de: ["Elvas war ein Grenzverteidigungspunkt.", "Die Anlage ist UNESCO-geschützt.", "Bastionen bestimmen das Stadtbild.", "Die Befestigungen sind weit sichtbar.", "Militärgeschichte ist hier zentral."],
      hu: ["Elvas határvédelmi pont volt.", "Az együttes UNESCO-védelem alatt áll.", "A bástyák meghatározzák a városképet.", "Az erődítmények messziről látszanak.", "A katonai történelem itt központi téma."],
      ro: ["Elvas a fost un punct de apărare a frontierei.", "Ansamblul este protejat de UNESCO.", "Bastioanele definesc peisajul urban.", "Fortificațiile sunt vizibile de departe.", "Istoria militară este aici centrală."],
      en: ["Elvas was a border defense point.", "The ensemble is protected by UNESCO.", "The bastions define the cityscape.", "The fortifications are visible from afar.", "Military history is central here."]
    },
    image: "/geo-images/portugal/hist-elvas-fortifications.webp"
  },
  {
    id: "agri-vinho-verde-minho",
    type: "agriculture",
    parent: "city-braga",
    coords: [-8.56, 41.53],
    name: { de: "Vinho-Verde-Region", hu: "Vinho Verde régió", ro: "Regiunea Vinho Verde", en: "Vinho Verde Region" },
    description: {
      de: "Die Vinho-Verde-Region im Norden Portugals ist ein wichtiges Weinbaugebiet mit frischen, leichten Weinen. Die grünen Landschaften und kleinen Parzellen prägen das Bild zwischen Braga und dem Minho. Hier verbinden sich Landwirtschaft, Tourismus und regionale Identität. Für SEO zu Nordportugal, Wein und Agrarkultur ist Vinho Verde sehr stark.",
      hu: "A Vinho Verde régió Észak-Portugália fontos borvidéke, friss és könnyű borokkal. A zöld táj és a kis parcellák Braga és a Minho között határozzák meg az arculatot. Itt a mezőgazdaság, a turizmus és a regionális identitás összekapcsolódik. Észak-Portugália, bor és agrárkultúra SEO-jához a Vinho Verde nagyon erős.",
      ro: "Regiunea Vinho Verde din nordul Portugaliei este o zonă viticolă importantă, cu vinuri proaspete și ușoare. Peisajele verzi și parcelele mici definesc imaginea dintre Braga și Minho. Aici se îmbină agricultura, turismul și identitatea regională. Pentru SEO despre nordul Portugaliei, vin și cultură agricolă, Vinho Verde este foarte puternic.",
      en: "The Vinho Verde region in northern Portugal is an important wine-growing area with fresh, light wines. Green landscapes and small plots define the area between Braga and the Minho. Agriculture, tourism, and regional identity come together here. For SEO about northern Portugal, wine, and agricultural culture, Vinho Verde is very strong."
    },
    facts: {
      de: ["Vinho Verde ist ein nordportugiesischer Klassiker.", "Die Weine sind leicht und frisch.", "Braga und Minho prägen die Region.", "Die Landschaft ist stark landwirtschaftlich.", "Die Region ist auch touristisch relevant."],
      hu: ["A Vinho Verde észak-portugál klasszikus.", "A borok könnyűek és frissek.", "Braga és a Minho meghatározzák a régiót.", "A táj erősen mezőgazdasági.", "A régió turisztikailag is fontos."],
      ro: ["Vinho Verde este un clasic al nordului Portugaliei.", "Vinurile sunt ușoare și proaspete.", "Braga și Minho definesc regiunea.", "Peisajul este puternic agricol.", "Regiunea este importantă și turistic."],
      en: ["Vinho Verde is a northern Portugal classic.", "The wines are light and fresh.", "Braga and the Minho shape the region.", "The landscape is strongly agricultural.", "The region is also important for tourism."]
    },
    image: "/geo-images/portugal/agri-vinho-verde-minho.webp"
  },
  {
    id: "agri-dao-vineyards",
    type: "agriculture",
    parent: "city-viseu",
    coords: [-7.89, 40.67],
    name: { de: "Dão-Weinberge", hu: "Dão szőlőültetvények", ro: "Podgoriile Dão", en: "Dão Vineyards" },
    description: {
      de: "Die Dão-Weinberge gehören zu den renommiertesten Weinlandschaften Zentralportugals. Zwischen Hügeln und Granitböden entstehen elegante, strukturierte Weine. Die Region ist eng mit Viseu und der lokalen Landwirtschaft verbunden. Für SEO zu portugiesischem Wein, Inland und Agrartourismus ist Dão sehr wertvoll.",
      hu: "A Dão szőlőültetvények Közép-Portugália legelismertebb borvidékei közé tartoznak. Dombok és gránitos talajok között elegáns, szerkezetes borok születnek. A régió szorosan kapcsolódik Viseuhoz és a helyi mezőgazdasághoz. Portugál bor, belső vidék és agrárturizmus SEO-jában a Dão nagyon értékes.",
      ro: "Podgoriile Dão se numără printre cele mai respectate peisaje viticole din Portugalia centrală. Între dealuri și soluri de granit se obțin vinuri elegante și bine structurate. Regiunea este strâns legată de Viseu și de agricultura locală. Pentru SEO despre vin portughez, interior și agroturism, Dão este foarte valoros.",
      en: "The Dão vineyards are among central Portugal's most respected wine landscapes. Between hills and granite soils, elegant and structured wines are produced. The region is closely linked to Viseu and local farming. For Portuguese wine, inland travel, and agritourism SEO, Dão is very valuable."
    },
    facts: {
      de: ["Dão ist ein Premium-Weingebiet.", "Die Böden sind oft granithaltig.", "Viseu ist der wichtigste Bezugspunkt.", "Die Landschaft verbindet Wein und Hügel.", "Agritourismus gewinnt hier an Bedeutung."],
      hu: ["A Dão prémium borvidék.", "A talaj gyakran gránitos.", "Viseu a legfontosabb kapcsolódási pont.", "A táj a bort és a dombokat köti össze.", "Az agrárturizmus itt egyre fontosabb."],
      ro: ["Dão este o regiune viticolă premium.", "Solurile sunt adesea granitice.", "Viseu este principalul punct de referință.", "Peisajul combină vinul și dealurile.", "Agroturismul devine tot mai important."],
      en: ["Dão is a premium wine region.", "The soils are often granite-based.", "Viseu is the main reference point.", "The landscape combines wine and hills.", "Agritourism is becoming more important."]
    },
    image: "/geo-images/portugal/agri-dao-vineyards.webp"
  },
  {
    id: "agri-alentejo-olive-groves",
    type: "agriculture",
    parent: "city-evora",
    coords: [-7.72, 38.57],
    name: { de: "Olivenhaine des Alentejo", hu: "Alentejo olajfaligetei", ro: "Livezile de măslini din Alentejo", en: "Alentejo Olive Groves" },
    description: {
      de: "Die Olivenhaine des Alentejo prägen die weiten Ebenen des Südens. Hier spielen Olivenöl, Landwirtschaft und mediterrane Landschaften eine große Rolle. Die Region verbindet traditionelle Produktion mit moderner Qualität. Für SEO zu Alentejo, Landwirtschaft und portugiesischem Olivenöl ist sie ideal.",
      hu: "Az Alentejo olajfaligetei meghatározzák a dél nagy síkságait. Itt az olívaolaj, a mezőgazdaság és a mediterrán táj kap nagy szerepet. A régió a hagyományos termelést modern minőséggel kapcsolja össze. Alentejo, mezőgazdaság és portugál olívaolaj SEO-jához ideális.",
      ro: "Livezile de măslini din Alentejo definesc câmpiile vaste ale sudului. Aici uleiul de măsline, agricultura și peisajele mediteraneene au un rol mare. Regiunea combină producția tradițională cu calitatea modernă. Pentru SEO despre Alentejo, agricultură și ulei portughez de măsline, este ideală.",
      en: "The olive groves of Alentejo define the wide plains of the south. Olive oil, farming, and Mediterranean landscapes all play a major role here. The region combines traditional production with modern quality. For SEO about Alentejo, agriculture, and Portuguese olive oil, it is ideal."
    },
    facts: {
      de: ["Olivenöl ist ein Kernprodukt des Alentejo.", "Die Landschaft ist weit und sonnig.", "Die Produktion verbindet Tradition und Qualität.", "Évora liegt im Zentrum dieser Kultur.", "Die Haine prägen das regionale Bild."],
      hu: ["Az olívaolaj az Alentejo egyik fő terméke.", "A táj tágas és napfényes.", "A termelés a hagyományt és a minőséget kapcsolja össze.", "Évora ennek a kultúrának a központjában áll.", "A ligetek meghatározzák a régió arculatát."],
      ro: ["Uleiul de măsline este un produs-cheie al Alentejoului.", "Peisajul este vast și însorit.", "Producția combină tradiția și calitatea.", "Évora se află în centrul acestei culturi.", "Livezile definesc imaginea regională."],
      en: ["Olive oil is a key product of Alentejo.", "The landscape is wide and sunny.", "Production combines tradition and quality.", "Évora sits at the center of this culture.", "The groves define the regional image."]
    },
    image: "/geo-images/portugal/agri-alentejo-olive-groves.webp"
  },
  {
    id: "industry-sines-petrochemical-complex",
    type: "industry",
    parent: "portugal",
    coords: [-8.86, 37.96],
    name: { de: "Industriekomplex Sines", hu: "Sines ipari komplexum", ro: "Complexul industrial Sines", en: "Sines Petrochemical Complex" },
    description: {
      de: "Der Industriekomplex von Sines ist einer der wichtigsten Energiestandorte Portugals. Der Hafen, die Logistik und die petrochemischen Anlagen verbinden den Ort mit globalen Lieferketten. Sines hat dadurch eine weit über die Stadtgrenze hinausreichende Bedeutung. Für SEO zu Industrie, Häfen und moderner portugiesischer Wirtschaft ist Sines ein starker Begriff.",
      hu: "A Sines-i ipari komplexum Portugália egyik legfontosabb energiahelyszíne. A kikötő, a logisztika és a petrolkémiai létesítmények globális ellátási láncokhoz kapcsolják a helyet. Sines jelentősége messze túlmutat a város határain. Ipar, kikötők és modern portugál gazdaság SEO-jához Sines erős kulcsszó.",
      ro: "Complexul industrial din Sines este unul dintre cele mai importante noduri energetice ale Portugaliei. Portul, logistica și instalațiile petrochimice leagă locul de lanțuri globale de aprovizionare. Sines are astfel o importanță care depășește cu mult limitele orașului. Pentru SEO despre industrie, porturi și economia modernă a Portugaliei, Sines este un termen puternic.",
      en: "The Sines industrial complex is one of Portugal's most important energy sites. The port, logistics, and petrochemical facilities connect it to global supply chains. Sines therefore has importance far beyond the city's limits. For SEO about industry, ports, and modern Portuguese economy, Sines is a strong keyword."
    },
    facts: {
      de: ["Sines ist ein Energiestandort.", "Der Hafen ist fÃ¼r die Industrie wichtig.", "Die Logistik ist international ausgerichtet.", "Der Ort hat strategische KÃ¼stenlage.", "Moderne Wirtschaft prÃ¤gt das Bild."],
      hu: ["Sines energiahelyszín.", "A kikötő fontos az ipar számára.", "A logisztika nemzetközi irányultságú.", "A hely stratégiai tengerparti fekvésű.", "A modern gazdaság határozza meg a képet."],
      ro: ["Sines este un nod energetic.", "Portul este important pentru industrie.", "Logistica are orientare internațională.", "Locația are poziție strategică la coastă.", "Economia modernă definește imaginea."],
      en: ["Sines is an energy site.", "The port matters for industry.", "Its logistics are international in scope.", "The place has a strategic coastal position.", "Modern economy defines the image."]
    },
    image: "/geo-images/portugal/industry-sines-petrochemical-complex.webp"
  },
  {
    id: "industry-barcelos-ceramics",
    type: "industry",
    parent: "city-braga",
    coords: [-8.615, 41.533],
    name: { de: "Keramik von Barcelos", hu: "Barcelos kerámiaipar", ro: "Ceramica din Barcelos", en: "Barcelos Ceramics" },
    description: {
      de: "Die Keramik von Barcelos steht für eine starke nordportugiesische Handwerks- und Produktionskultur. Der Ort ist bekannt für farbige Keramik, lokale Werkstätten und die Verbindung von Tradition und Vermarktung. Barcelos profitiert zudem von seinem ikonischen Galo-Symbol. Für SEO zu Kunsthandwerk, Industrie und Nordportugal ist dieser Eintrag sehr passend.",
      hu: "A Barcelos-i kerámia az észak-portugál kézműves és termelési kultúra erős része. A hely színes kerámiájáról, helyi műhelyeiről és a hagyomány, valamint az értékesítés összekapcsolásáról ismert. Barcelos az ikonikus kakas-szimbólumból is profitál. Kézművesség, ipar és Észak-Portugália SEO-jához ez nagyon jó bejegyzés.",
      ro: "Ceramica din Barcelos reprezintă o cultură puternică de meșteșug și producție din nordul Portugaliei. Locul este cunoscut pentru ceramica colorată, atelierele locale și legătura dintre tradiție și comercializare. Barcelos beneficiază și de simbolul său iconic Galo. Pentru SEO despre artizanat, industrie și nordul Portugaliei, această intrare este foarte potrivită.",
      en: "Barcelos ceramics represent a strong craft and production culture in northern Portugal. The town is known for colorful ceramics, local workshops, and the link between tradition and marketing. Barcelos also benefits from its iconic rooster symbol. For SEO about crafts, industry, and northern Portugal, this entry fits very well."
    },
    facts: {
      de: ["Keramik ist Teil der StadtidentitÃ¤t.", "Barcelos ist bekannt fÃ¼r den Galo.", "Lokale WerkstÃ¤tten bleiben aktiv.", "Tradition und Verkauf greifen ineinander.", "Nordportugal profitiert vom Image."],
      hu: ["A kerámia a város identitásának része.", "Barcelos híres a kakasról.", "A helyi műhelyek ma is aktívak.", "A hagyomány és az értékesítés összekapcsolódik.", "Észak-Portugália profitál az imázsból."],
      ro: ["Ceramica face parte din identitatea orașului.", "Barcelos este cunoscut pentru cocoș.", "Atelierele locale rămân active.", "Tradiția și vânzarea merg împreună.", "Nordul Portugaliei profită de acest brand."],
      en: ["Ceramics are part of the city's identity.", "Barcelos is known for the rooster.", "Local workshops remain active.", "Tradition and sales work together.", "Northern Portugal benefits from the image."]
    },
    image: "/geo-images/portugal/industry-barcelos-ceramics.webp"
  },
  {
    id: "kid-oceanario-lisbon",
    type: "kid-landmark",
    parent: "city-lisboa",
    coords: [-9.0898, 38.7637],
    name: { de: "Ozeanarium Lissabon", hu: "Lisszaboni Óceanárium", ro: "Oceanariul din Lisabona", en: "Lisbon Oceanarium" },
    description: {
      de: "Das Ozeanarium von Lissabon ist eine der beliebtesten Familienattraktionen Portugals. Die große Unterwasserwelt macht Meeresbiologie für Kinder und Erwachsene leicht zugänglich. Durch die Lage im modernen Ost-Lissabon passt es gut in eine Stadttour mit Freizeitfaktor. Für SEO zu Lissabon, Kindern und Atlantik-Tierwelt ist es sehr stark.",
      hu: "A lisszaboni óceanárium Portugália egyik legnépszerűbb családi attrakciója. A nagy víz alatti világ könnyen érthetővé teszi a tengeri biológiát gyerekek és felnőttek számára. A modern kelet-lisszaboni fekvés jól illik egy városi, szabadidős programba. Lisszabon, gyerekek és atlanti állatvilág SEO-jához nagyon erős.",
      ro: "Oceanariul din Lisabona este una dintre cele mai populare atracții de familie din Portugalia. Lumea subacvatică mare face biologia marină ușor de înțeles pentru copii și adulți. Poziția în estul modern al Lisabonei se potrivește bine într-un tur urban cu timp de relaxare. Pentru SEO despre Lisabona, copii și fauna Atlanticului, este foarte puternic.",
      en: "Lisbon Oceanarium is one of Portugal's most popular family attractions. Its large underwater world makes marine biology easy to understand for children and adults. The modern eastern Lisbon location fits well into a city tour with leisure time. For SEO about Lisbon, kids, and Atlantic wildlife, it is very strong."
    },
    facts: {
      de: ["Es gehört zu den bekanntesten Familienzielen der Stadt.", "Meerestiere stehen im Mittelpunkt.", "Der Standort liegt im modernen Ost-Lissabon.", "Das Aquarium ist ganzjährig attraktiv.", "Es verbindet Lernen und Spaß."],
      hu: ["A város egyik legismertebb családi célpontja.", "A tengeri állatok állnak a középpontban.", "A helyszín a modern kelet-lisszaboni részen van.", "Az akvárium egész évben vonzó.", "Összeköti a tanulást és a szórakozást."],
      ro: ["Este una dintre cele mai cunoscute destinații de familie.", "Animalele marine sunt în centrul atenției.", "Locația este în estul modern al Lisabonei.", "Acvariul este atractiv tot anul.", "Îmbină învățarea și distracția."],
      en: ["It is one of the city's best-known family stops.", "Marine animals are the focus.", "The site is in modern eastern Lisbon.", "The aquarium is attractive year-round.", "It combines learning and fun."]
    },
    image: "/geo-images/portugal/kid-oceanario-lisbon.webp"
  },
  {
    id: "kid-zoomarine-algarve",
    type: "kid-landmark",
    parent: "reg-algarve",
    coords: [-8.319, 37.1283],
    name: { de: "Zoomarine Algarve", hu: "Zoomarine Algarve", ro: "Zoomarine Algarve", en: "Zoomarine Algarve" },
    description: {
      de: "Zoomarine Algarve ist ein großer Freizeit- und Tierpark für Familien an der Südküste. Die Mischung aus Shows, Wassererlebnis und Tierwelt macht den Ort besonders kinderfreundlich. Durch die Lage im Feriengebiet eignet er sich gut für einen Urlaubstag außerhalb des Strandes. Für Algarve, Kinder und Freizeit-SEO ist Zoomarine ein klarer Treffer.",
      hu: "A Zoomarine Algarve egy nagy családi élménypark és állatpark a déli parton. A műsorok, a vizes élmények és az állatvilág keveréke különösen gyerekbaráttá teszi. Az üdülőövezeti fekvés miatt jól beilleszthető egy strandmentes nap programjába. Algarve, gyerekek és szabadidő SEO-jához a Zoomarine egyértelmű találat.",
      ro: "Zoomarine Algarve este un mare parc de agrement și faună pentru familii, pe coasta sudică. Combinația de spectacole, experiențe acvatice și animale îl face foarte prietenos pentru copii. Poziția în zona de vacanță îl face potrivit pentru o zi fără plajă. Pentru SEO despre Algarve, copii și timp liber, Zoomarine este o alegere clară.",
      en: "Zoomarine Algarve is a large family leisure and animal park on the southern coast. The mix of shows, water experiences, and wildlife makes it especially child-friendly. Its resort-area location makes it a good non-beach day option. For Algarve, kids, and leisure SEO, Zoomarine is a clear winner."
    },
    facts: {
      de: ["Shows und Tiere sind hier zentral.", "Der Park liegt in der Algarve.", "Familien nutzen ihn als Tagesziel.", "Wasser- und Freizeitangebote mischen sich.", "Der Ort ergänzt den Strandurlaub."],
      hu: ["A műsorok és az állatok állnak a középpontban.", "A park az Algarve területén van.", "A családok egynapos célpontként használják.", "A vizes és szabadidős élmények keverednek.", "A hely kiegészíti a strandnyaralást."],
      ro: ["Spectacolele și animalele sunt în centru.", "Parcul se află în Algarve.", "Familiile îl folosesc ca destinație de o zi.", "Experiențele acvatice și de agrement se combină.", "Locul completează vacanța la plajă."],
      en: ["Shows and animals are central here.", "The park sits in the Algarve.", "Families use it as a day destination.", "Water and leisure experiences are mixed.", "The place complements a beach holiday."]
    },
    image: "/geo-images/portugal/kid-zoomarine-algarve.webp"
  },
  {
    id: "kid-zoo-santo-inacio",
    type: "kid-landmark",
    parent: "city-porto",
    coords: [-8.5581, 41.072],
    name: { de: "Zoo Santo Inácio", hu: "Santo Inácio állatkert", ro: "Zoo Santo Inácio", en: "Zoo Santo Inacio" },
    description: {
      de: "Der Zoo Santo Inácio ist eine der besten Familienattraktionen im Großraum Porto. Er bietet Tiere, grüne Flächen und gute Lernmöglichkeiten für Kinder. Die Lage in der Nähe der Stadt macht ihn leicht in eine Wochenendreise integrierbar. Für Porto, Kinder und Zoo-SEO ist er ein starker Eintrag.",
      hu: "A Zoo Santo Inácio a Portó környék egyik legjobb családi attrakciója. Állatokkal, zöld területekkel és gyerekeknek szóló tanulási lehetőségekkel vár. A városhoz közeli fekvés miatt könnyen beilleszthető egy hétvégi programba. Porto, gyerekek és állatkert SEO-jához erős bejegyzés.",
      ro: "Zoo Santo Inácio este una dintre cele mai bune atracții de familie din zona Porto. Oferă animale, spații verzi și oportunități bune de învățare pentru copii. Poziția aproape de oraș îl face ușor de integrat într-o excursie de weekend. Pentru Porto, copii și SEO despre grădini zoologice, este o intrare puternică.",
      en: "Zoo Santo Inacio is one of the best family attractions in the Porto area. It offers animals, green spaces, and good learning opportunities for children. Its near-city location makes it easy to include in a weekend trip. For Porto, kids, and zoo SEO, it is a strong entry."
    },
    facts: {
      de: ["Der Zoo liegt nahe Porto.", "Er ist familienfreundlich angelegt.", "Kinder können viel lernen.", "Grünflächen machen den Besuch angenehm.", "Er passt gut in einen Wochenendausflug."],
      hu: ["Az állatkert Porto közelében van.", "Családbarát kialakítású.", "A gyerekek sokat tanulhatnak.", "A zöld területek kellemesebbé teszik a látogatást.", "Jól illik egy hétvégi kirándulásba."],
      ro: ["Grădina zoologică este aproape de Porto.", "Este proiectată pentru familii.", "Copiii pot învăța multe.", "Spațiile verzi fac vizita plăcută.", "Se potrivește bine într-o excursie de weekend."],
      en: ["The zoo sits near Porto.", "It is designed for families.", "Children can learn a lot.", "Green spaces make the visit pleasant.", "It fits well into a weekend trip."]
    },
    image: "/geo-images/portugal/kid-zoo-santo-inacio.webp"
  },
  {
    id: "kid-badoca-safari-park",
    type: "kid-landmark",
    parent: "city-setubal",
    coords: [-8.784, 38.0088],
    name: { de: "Badoca Safari Park", hu: "Badoca Safari Park", ro: "Badoca Safari Park", en: "Badoca Safari Park" },
    description: {
      de: "Der Badoca Safari Park bei Setúbal ist ein beliebtes Ziel für Familien mit Kindern. Tiere, offene Flächen und ein safariähnliches Erlebnis sorgen für einen abwechslungsreichen Besuch. Die Nähe zu Lissabon und Arrábida macht den Park auch für kurze Trips interessant. Für Kinder, Safari und Setúbal SEO ist er sehr wertvoll.",
      hu: "A Setúbal melletti Badoca Safari Park népszerű családi célpont. Az állatok, a tágas terek és a szafarijelleg változatos élményt adnak. Lisszabon és az Arrábida közelsége miatt rövid kirándulásra is kiváló. Gyerekek, safari és Setúbal SEO-jához nagyon értékes.",
      ro: "Badoca Safari Park de lângă Setúbal este o destinație populară pentru familiile cu copii. Animalele, spațiile deschise și experiența de tip safari oferă o vizită variată. Apropierea de Lisabona și Arrábida îl face potrivit și pentru excursii scurte. Pentru SEO despre copii, safari și Setúbal, este foarte valoros.",
      en: "Badoca Safari Park near Setubal is a popular destination for families with children. Animals, open spaces, and a safari-style experience make the visit varied. Its proximity to Lisbon and Arrabida also makes it good for short trips. For kids, safari, and Setubal SEO, it is very valuable."
    },
    facts: {
      de: ["Der Park liegt bei Setúbal.", "Das Konzept erinnert an eine Safari.", "Er ist für Familien ausgelegt.", "Die Lage ist für Kurztrips gut.", "Kinder erleben Tiere und Natur nah zusammen."],
      hu: ["A park Setúbal közelében van.", "A koncepció szafariszerű.", "Családokra van szabva.", "A fekvése rövid kirándulásokra is jó.", "A gyerekek közelről élhetik meg az állatokat és a természetet."],
      ro: ["Parcul se află lângă Setúbal.", "Conceptul amintește de un safari.", "Este gândit pentru familii.", "Poziția e bună pentru excursii scurte.", "Copiii descoperă animalele și natura de aproape."],
      en: ["The park sits near Setubal.", "The concept feels safari-like.", "It is designed for families.", "Its location works well for short trips.", "Children experience animals and nature up close."]
    },
    image: "/geo-images/portugal/kid-badoca-safari-park.webp"
  }
];

export const portugalAllPoi: POI[] = [portugalCountry, ...portugalRegions, ...portugalCities, ...portugalCulture, ...portugalNature];

