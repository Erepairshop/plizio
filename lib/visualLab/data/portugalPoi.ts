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
    type: "culture",
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
    type: "culture",
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
    type: "culture",
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
    type: "culture",
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
    type: "culture",
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
    type: "culture",
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
    type: "culture",
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
  }
];

export const portugalNature: POI[] = [
  {
    id: "nat-douro-valley",
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    id: "city-porto",
    type: "city",
    parent: "portugal",
    coords: [-8.6291, 41.1579],
    name: { de: "Porto", hu: "Porto", ro: "Porto", en: "Porto" },
    description: {
      de: "Porto ist die zweitgrößte Stadt Portugals und berühmt für ihre Altstadt Ribeira, die zum UNESCO-Welterbe gehört. Die Stadt ist weltweit für die Produktion von Portwein bekannt.",
      hu: "Porto Portugália második legnagyobb városa, híres az UNESCO világörökség részét képező Ribeira óvárosáról. A város világszerte ismert a portói bor termeléséről.",
      ro: "Porto este al doilea oraș ca mărime din Portugalia și este faimos pentru orașul său vechi Ribeira, inclus în patrimoniul UNESCO. Orașul este cunoscut în întreaga lume pentru producția de vin de Porto.",
      en: "Porto is the second-largest city in Portugal and is famous for its Ribeira old town, a UNESCO World Heritage site. The city is known worldwide for the production of Port wine."
    },
    facts: {
      de: ["Die Dom-Luís-I.-Brücke verbindet Porto mit Vila Nova de Gaia.", "Porto gab dem Land seinen Namen.", "Die Buchhandlung Livraria Lello gilt als eine der schönsten der Welt.", "Das Viertel Ribeira ist für seine bunten Häuser bekannt.", "Die Stadt hat eine reiche Handelsgeschichte."],
      hu: ["A Dom Luís I. híd köti össze Portót Vila Nova de Gaiával.", "Porto adott nevet az országnak.", "A Livraria Lello könyvesboltot a világ egyik legszebbjének tartják.", "A Ribeira negyed színes házairól ismert.", "A város gazdag kereskedelmi múlttal rendelkezik."],
      ro: ["Podul Dom Luís I leagă Porto de Vila Nova de Gaia.", "Porto a dat numele țării.", "Librăria Livraria Lello este considerată una dintre cele mai frumoase din lume.", "Cartierul Ribeira este cunoscut pentru casele colorate.", "Orașul are o istorie comercială bogată."],
      en: ["The Dom Luís I Bridge connects Porto with Vila Nova de Gaia.", "Porto gave the country its name.", "The Livraria Lello bookstore is considered one of the most beautiful in the world.", "The Ribeira district is known for its colorful houses.", "The city has a rich commercial history."]
    },
    image: "/geo-images/portugal/city-porto.webp"
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
];

export const portugalAllPoi: POI[] = [portugalCountry, ...portugalRegions, ...portugalCities, ...portugalCulture, ...portugalNature];

