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
  }
];

export const portugalAllPoi: POI[] = [portugalCountry, ...portugalRegions, ...portugalCulture, ...portugalNature];
