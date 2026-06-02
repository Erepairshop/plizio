// @ts-nocheck
import { POI } from "./poi";
import { poiExtraMexicoCitiesV2 } from "./poiExtraMexicoCitiesV2";
import { poiExtraMexicoHistoryV2 } from "./poiExtraMexicoHistoryV2";
import { poiExtraMexicoLifeV2 } from "./poiExtraMexicoLifeV2";
import { poiExtraMexicoReliefV2 } from "./poiExtraMexicoReliefV2";

export const mexicoCities: POI[] = [
  {
    id: "mex_cap",
    name: { de: "Mexico City", hu: "Mexico City", ro: "Mexico City", en: "Mexico City" },
    descriptionAdvanced: {
      de: "Mexiko-Stadt, die pulsierende Metropole im Hochtal von Mexiko, steht auf den geschichtsträchtigen Fundamenten der aztekischen Hauptstadt Tenochtitlan. Seit der spanischen Eroberung im Jahr 1521 hat sich die Stadt zu einem der bedeutendsten wirtschaftlichen und kulturellen Zentren Lateinamerikas entwickelt. Das historische Zentrum rund um den Zócalo beeindruckt durch die monumentale Kathedrale und den Nationalpalast, während moderne Wolkenkratzer wie die Torre Latinoamericana das Stadtbild prägen. Geografisch liegt die Stadt auf etwa 2240 Metern Höhe, umgeben von imposanten Vulkanen wie dem Popocatépetl, was oft zu klimatischen Herausforderungen führt. Die kulturelle Vielfalt spiegelt sich in Stadtteilen wie Coyoacán wider, wo das Erbe von Frida Kahlo lebendig bleibt, sowie im weitläufigen Park Chapultepec, der als grüne Lunge der Megacity fungiert. Als Schmelztiegel von Tradition und Moderne vereint Mexiko-Stadt präkolumbianische Ruinen, koloniale Prachtbauten und avantgardistische Architektur zu einem einzigartigen urbanen Gefüge, das trotz seiner enormen Größe und der ökologischen Probleme eine faszinierende Dynamik ausstrahlt.",
      hu: "Mexikóváros a világ egyik legnépesebb világvárosa, amely egykor az azték birodalom központja, Tenochtitlan romjaira épült a Mexikói-völgyben. A 2240 méteres tengerszint feletti magasságban fekvő település kulturális és gazdasági szempontból is Latin-Amerika megkerülhetetlen központja, ahol a prekolumbián múlt, a spanyol gyarmati építészet és a modern felhőkarcolók látványa keveredik. A város szíve a hatalmas Zócalo tér, ahol az impozáns Metropolitan katedrális és a Nemzeti Palota hirdeti a múlt dicsőségét, míg a Templo Mayor romjai közvetlen betekintést engednek az azték rituálék világába. A Bosque de Chapultepec, a kontinens egyik legnagyobb városi parkja nemcsak pihenőhely, hanem számos világhírű múzeumnak, köztük az Antropológiai Múzeumnak is otthont ad. A város negyedei, mint a bohém Coyoacán vagy az elegáns Polanco, sajátos karakterrel rendelkeznek, bemutatva a mexikói identitás sokszínűségét. Noha a süllyedő talaj és a légszennyezés komoly kihívást jelent, a város gasztronómiai gazdagsága és lüktető művészeti élete folyamatosan vonzza az utazókat a világ minden tájáról.",
      ro: "Ciudad de México este o metropolă fascinantă situată în inima Văii Mexicului, fiind una dintre cele mai vechi și mai populate așezări urbane din emisfera vestică. Fondată inițial de azteci sub numele de Tenochtitlan în 1325, orașul a fost reconstruit de spanioli după 1521, devenind capitala Noii Spanii și ulterior a statului mexican modern. Centrul istoric, inclus în patrimoniul mondial UNESCO, este dominat de Plaza de la Constitución, cunoscută sub numele de Zócalo, unde Catedrala Metropolitană și Palatul Național impresionează prin arhitectura lor monumentală. Orașul este situat la o altitudine de peste 2200 de metri, fiind înconjurat de munți și vulcani maiestuoși, ceea ce îi conferă un cadru geografic spectaculos, deși complex din punct de vedere seismic și ecologic. Diversitatea culturală este vizibilă la tot pasul, de la piețele tradiționale pline de culoare până la muzeele de clasă mondială, cum ar fi Muzeul Național de Antropologie sau Casa Azul a Fridei Kahlo. Ciudad de México nu este doar un hub financiar major, ci și un centru gastronomic de referință, unde aromele ancestrale se întâlnesc cu inovația culinară contemporană într-un ritm urban neobosit.",
      en: "Mexico City, a sprawling high-altitude megalopolis, stands as a testament to centuries of layered history, built atop the ancient Aztec capital of Tenochtitlan. Situated in the Valley of Mexico at an elevation of 2,240 meters, it is surrounded by the Trans-Mexican Volcanic Belt, including the iconic Popocatépetl. Since its colonial redesign following the Spanish conquest in 1521, it has evolved into a global alpha city and the primary financial hub of Latin America. The Zócalo, one of the world's largest public squares, anchors the historic center with the Metropolitan Cathedral and the ruins of the Templo Mayor, showcasing the clash and eventual blending of indigenous and European civilizations. Beyond its historic core, districts like the artistic Coyoacán and the upscale Polanco offer a glimpse into the city's sophisticated cultural and economic life. The Bosque de Chapultepec, a vast urban park, serves as a crucial ecological refuge and a cultural precinct housing the world-renowned National Museum of Anthropology. Despite facing modern challenges like land subsidence and rapid urbanization, the city remains a vibrant epicenter of muralism, innovative gastronomy, and a relentless energy that defines the Mexican national identity.",
    },
    factsAdvanced: {
      de: ["Die Stadt liegt auf einer Höhe von 2.240 Metern.", "Das historische Zentrum wurde auf dem ehemaligen Texcoco-See errichtet.", "Der Zócalo ist einer der größten öffentlichen Plätze der Welt.", "Die Metropolregion zählt über 20 Millionen Einwohner.", "Das Stadtgebiet umfasst über 1.400 Quadratkilometer.", "Es gibt über 150 Museen in der gesamten Stadt.", "Der Chapultepec-Park ist doppelt so groß wie der Central Park in New York.", "Die Stadt sinkt durch den hohen Wasserverbrauch jährlich ab."],
      hu: ["A metropolisz 2240 méter tengerszint feletti magasságban helyezkedik el.", "A történelmi városmag az egykori Texcoco-tó medrére épült.", "A Zócalo tér a világ egyik legnagyobb közösségi tere.", "Több mint 20 millió lakos él a fővárosi régióban.", "A városi terület meghaladja az 1400 négyzetkilométert.", "Több mint 150 múzeum található a városban.", "A Chapultepec-park területe kétszerese a New York-i Central Parkénak.", "A talajvíz-kitermelés miatt a város évente több centimétert süllyed."],
      ro: [
        "Orașul este situat la o altitudine de 2.240 de metri.",
        "Centrul istoric a fost construit pe fostul lac Texcoco.",
        "Zócalo este una dintre cele mai mari piețe publice din lume.",
        "Zona metropolitană are peste 20 de milioane de locuitori.",
        "Zona urbană acoperă peste 1.400 de kilometri pătrați.",
        "Există peste 150 de muzee în tot orașul.",
        "Parcul Chapultepec este de două ori mai mare decât Central Park din New York.",
        "Orașul se scufundă anual din cauza consumului ridicat de apă."
      ],
      en: [
        "Located at an altitude of 2,240 meters.",
        "Built on the site of the former Lake Texcoco.",
        "Zócalo is one of the world's largest public squares.",
        "Metropolitan area exceeds 20 million residents.",
        "Urban footprint spans over 1,400 square kilometers.",
        "Home to more than 150 museums.",
        "Chapultepec Park is twice the size of New York's Central Park.",
        "The city subsides annually due to groundwater extraction."
      ],
      es: ["La ciudad se encuentra a una altitud de 2.240 metros.", "El centro histórico fue construido sobre el antiguo lago de Texcoco.", "El Zócalo es una de las plazas públicas más grandes del mundo.", "La zona metropolitana cuenta con más de 20 millones de habitantes.", "El área urbana abarca más de 1.400 kilómetros cuadrados.", "Hay más de 150 museos en toda la ciudad.", "El parque de Chapultepec es el doble de grande que el Central Park de Nueva York.", "La ciudad se hunde anualmente debido al alto consumo de agua."],
      pt: ["A cidade situa-se a uma altitude de 2.240 metros.", "O centro histórico foi construído sobre o antigo lago de Texcoco.", "O Zócalo é uma das maiores praças públicas do mundo.", "A região metropolitana conta com mais de 20 milhões de habitantes.", "A área urbana abrange mais de 1.400 quilómetros quadrados.", "Existem mais de 150 museus em toda a cidade.", "O parque Chapultepec é duas vezes maior do que o Central Park em Nova Iorque.", "A cidade afunda-se anualmente devido ao elevado consumo de água."],
      fr: ["La ville est située à une altitude de 2 240 mètres.", "Le centre historique a été édifié sur l'ancien lac Texcoco.", "Le Zócalo est l'une des plus grandes places publiques au monde.", "La zone métropolitaine compte plus de 20 millions d'habitants.", "Le territoire urbain s'étend sur plus de 1 400 kilomètres carrés.", "La ville compte plus de 150 musées.", "Le parc de Chapultepec est deux fois plus grand que Central Park à New York.", "La ville s'enfonce chaque année en raison de la forte consommation d'eau."],
    },
    description: { de: "Capital of Mexico", hu: "Capital of Mexico", ro: "Capital of Mexico", en: "Capital of Mexico" , es: "Capital de México.", pt: "Capital do México.", fr: "Capitale du Mexique."},
    facts: {
      de: ["Höchste Stadt Nordamerikas", "Erbaut auf einem See", "Über 150 Museen", "UNESCO Weltkulturerbe"],
      hu: ["Észak-Amerika legmagasabb városa", "Egy tóra épült", "Több mint 150 múzeum", "UNESCO Világörökség"],
      ro: ["Cel mai înalt oraș din America de Nord", "Construit pe un lac", "Peste 150 de muzee", "Patrimoniu Mondial UNESCO"],
      en: ["Highest city in North America", "Built on a lake", "Over 150 museums", "UNESCO World Heritage Site"],
      es: ["Ciudad más alta de Norteamérica", "Construida sobre un lago", "Más de 150 museos", "Patrimonio de la Humanidad por la UNESCO"],
      pt: ["Cidade mais alta da América do Norte", "Construída sobre um lago", "Mais de 150 museus", "Património Mundial da UNESCO"],
      fr: ["Ville la plus haute d'Amérique du Nord", "Bâtie sur un lac", "Plus de 150 musées", "Patrimoine mondial de l'UNESCO"],
    },
    elevation: 2240, historyYear: 1325, historyPeriod: "modern",
    coords: [-99.1332, 19.4326], type: 'landmark', parent: 'MX', image: "/poi-images/mex_cap.webp"},
  {
    id: "mex_gua",
    name: { de: "Guadalajara", hu: "Guadalajara", ro: "Guadalajara", en: "Guadalajara" },
    descriptionAdvanced: {
      de: "Guadalajara, die Hauptstadt des Bundesstaates Jalisco, wird oft als das kulturelle Herz Mexikos und die Perle des Westens bezeichnet. Die 1542 gegründete Stadt ist die Geburtsstätte zahlreicher nationaler Symbole, darunter die Mariachi-Musik, der Tequila und der traditionelle Sombrero-Tanz Jarabe Tapatío. Das historische Zentrum besticht durch prachtvolle koloniale Architektur, allen voran die Kathedrale mit ihren ikonischen neugotischen Türmen und der Palacio de Gobierno. Ein besonderes kulturelles Juwel ist das Hospicio Cabañas, ein UNESCO-Weltkulturerbe, das für die monumentalen Wandgemälde von José Clemente Orozco berühmt ist. Geografisch liegt die Stadt in einer gemäßigten Zone auf etwa 1566 Metern Höhe, was ihr ein angenehmes Frühlingsklima beschert. In der Moderne hat sich Guadalajara zum technologischen Zentrum Mexikos entwickelt, weshalb es oft als das Silicon Valley des Landes bezeichnet wird. Diese Mischung aus tief verwurzelten Traditionen, handwerklicher Meisterschaft in Stadtteilen wie Tlaquepaque und zukunftsorientierter Industrie macht Guadalajara zu einer der dynamischsten und lebenswertesten Städte des amerikanischen Kontinents.",
      hu: "Guadalajara Jalisco állam fővárosa és Mexikó második legfontosabb városa, amelyet méltán neveznek a Nyugat Gyöngyének. Az 1542-ben alapított település a leginkább mexikóinak tartott hagyományok, mint a mariachi zene, a tequila és a charrería (mexikói rodeó) bölcsője. A város történelmi központjában a katedrális különleges, sárga színű neogótikus tornyai uralják a látképet, míg a közeli tereken a spanyol gyarmati múlt eleganciája tükröződik. Kiemelkedő látnivaló az UNESCO védelme alatt álló Hospicio Cabañas, ahol José Clemente Orozco drámai falfestményei a mexikói muralizmus csúcsát képviselik. Guadalajara nemcsak a kultúra, hanem az innováció központja is; a szoftverfejlesztés és az elektronikai ipar koncentrációja miatt gyakran hivatkoznak rá Mexikó Szilícium-völgyeként. A közeli Tlaquepaque és Tonalá negyedek a hagyományos kézművesség, a kerámia és az üvegfúvás központjai, ahol a látogatók közvetlen kapcsolatba kerülhetnek a helyi művészekkel. A város mérsékelt éghajlata és vendégszerető légköre garantálja, hogy Guadalajara a mexikói identitás egyik legélőbb és legvonzóbb bástyája maradjon.",
      ro: "Guadalajara, capitala statului Jalisco, este considerată perla culturală a Mexicului, fiind locul unde s-au născut cele mai emblematice tradiții naționale. Fondat definitiv în 1542, orașul este renumit ca fiind patria muzicii mariachi, a tequilei și a dansului folcloric Jarabe Tapatío, elemente care definesc identitatea mexicană la nivel global. Centrul istoric al orașului este o capodoperă a urbanismului colonial, având Catedrala cu turnurile sale ascuțite ca punct central de reper, înconjurată de patru piețe mari dispuse în formă de cruce. O atracție de o importanță excepțională este Hospicio Cabañas, inclus în patrimoniul UNESCO, care adăpostește frescele vizionare ale pictorului José Clemente Orozco, una dintre cele mai mari realizări ale artei murale mexicane. În prezent, Guadalajara este și un motor economic major, fiind supranumit Silicon Valley al Mexicului datorită numeroaselor companii de tehnologie care își au sediul aici. Orașul reușește să păstreze un echilibru perfect între conservarea valorilor istorice, meșteșugurile rafinate din districte precum Tlaquepaque și impulsul modernizării industriale, oferind o experiență autentică și vibrantă fiecărui vizitator.",
      en: "Guadalajara, the capital of Jalisco, is widely celebrated as the cultural soul of Mexico and the Pearl of the West. Established in its current location in 1542, the city is the birthplace of the most iconic elements of Mexican heritage, including Mariachi music, the wide-brimmed sombrero, and the traditional Tequila industry from the nearby highlands. The historic center is characterized by a unique layout of four main squares surrounding the twin-towered Metropolitan Cathedral, a masterpiece of colonial and neo-Gothic design. A site of immense cultural significance is the Hospicio Cabañas, a UNESCO World Heritage site that features the powerful murals of José Clemente Orozco, specifically his masterpiece The Man of Fire. Geographically, the city sits on a temperate plateau at 1,566 meters, providing a mild climate throughout the year. Beyond its folkloric charm, Guadalajara has emerged as Mexico's leading technological hub, earning the nickname of the Mexican Silicon Valley due to its booming software and electronics sectors. The nearby artisanal suburbs of Tlaquepaque and Tonalá further enrich the city's appeal, showcasing a vibrant tradition of pottery, glasswork, and textile arts that remains central to the region's identity.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1542 durch Cristóbal de Oñate.", "Die Stadt beherbergt die größte Universität Westmexikos.", "Die Kathedrale von Guadalajara hat zwei ikonische neugotische Türme.", "Das Hospicio Cabañas ist ein UNESCO-Weltkulturerbe.", "Die Stadt ist eine Hochburg der mexikanischen Technologieindustrie.", "Es gibt fünf historische Plätze rund um die Kathedrale.", "Guadalajara wurde 2022 zur 'World Book Capital' ernannt.", "Das jährliche Internationale Filmfestival ist eines der bedeutendsten in Lateinamerika."],
      hu: ["A várost 1542-ben alapította Cristóbal de Oñate.", "Itt található Nyugat-Mexikó legnagyobb egyeteme.", "A székesegyház neogótikus tornyai a város jelképei.", "A Hospicio Cabañas az UNESCO világörökség része.", "A régió a mexikói elektronikai ipar egyik fellegvára.", "A katedrálist öt nagy történelmi tér veszi körül.", "2022-ben elnyerte a 'Világ Könyvfővárosa' címet.", "Nemzetközi filmfesztiválja Latin-Amerika egyik legrangosabb eseménye."],
      ro: [
        "Fondat în anul 1542 de către Cristóbal de Oñate.",
        "Orașul găzduiește cea mai mare universitate din vestul Mexicului.",
        "Catedrala din Guadalajara are două turnuri neogotice iconice.",
        "Hospicio Cabañas este un sit din Patrimoniul Mondial UNESCO.",
        "Orașul este un bastion al industriei tehnologice mexicane.",
        "Există cinci piețe istorice în jurul catedralei.",
        "Guadalajara a fost desemnată \\\"Capitala Mondială a Cărții\\\" în 2022.",
        "Festivalul Internațional de Film anual este unul dintre cele mai importante din America Latină."
      ],
      en: [
        "Founded in 1542 by Cristóbal de Oñate.",
        "Hosts the largest university in western Mexico.",
        "Cathedral features iconic neo-Gothic towers.",
        "Hospicio Cabañas is a UNESCO World Heritage site.",
        "A major hub for the Mexican electronics industry.",
        "Surrounded by five significant historical plazas.",
        "Named the 'World Book Capital' in 2022.",
        "Hosts one of Latin America's top film festivals."
      ],
      es: ["Fundada en el año 1542 por Cristóbal de Oñate.", "La ciudad alberga la universidad más grande del occidente de México.", "La catedral de Guadalajara tiene dos icónicas torres neogóticas.", "El Hospicio Cabañas es Patrimonio de la Humanidad por la UNESCO.", "La ciudad es un bastión de la industria tecnológica mexicana.", "Hay cinco plazas históricas alrededor de la catedral.", "Guadalajara fue nombrada 'Capital Mundial del Libro' en 2022.", "El Festival Internacional de Cine anual es uno de los más importantes de América Latina."],
      pt: ["Fundada no ano de 1542 por Cristóbal de Oñate.", "A cidade alberga a maior universidade do oeste do México.", "A catedral de Guadalajara tem duas torres neogóticas icónicas.", "O Hospicio Cabañas é Património Mundial da UNESCO.", "A cidade é um baluarte da indústria tecnológica mexicana.", "Existem cinco praças históricas ao redor da catedral.", "Guadalajara foi nomeada 'Capital Mundial do Livro' em 2022.", "O festival internacional de cinema anual é um dos mais importantes da América Latina."],
      fr: ["Fondée en 1542 par Cristóbal de Oñate.", "La ville abrite la plus grande université de l'ouest du Mexique.", "La cathédrale de Guadalajara possède deux tours néogothiques emblématiques.", "L'Hospicio Cabañas est inscrit au patrimoine mondial de l'UNESCO.", "La ville est un bastion de l'industrie technologique mexicaine.", "Il existe cinq places historiques autour de la cathédrale.", "Guadalajara a été nommée 'Capitale mondiale du livre' en 2022.", "Le festival international du film annuel est l'un des plus importants d'Amérique latine."],
    },
    description: { de: "Major city in Jalisco", hu: "Major city in Jalisco", ro: "Major city in Jalisco", en: "Major city in Jalisco" , es: "Ciudad importante en Jalisco.", pt: "Cidade importante em Jalisco.", fr: "Ville majeure du Jalisco."},
    facts: {
      de: ["Heimat der Mariachi-Musik", "Zweitgrößte Stadt Mexikos", "Berühmt für Tequila", "Prächtige Kathedrale"],
      hu: ["A mariachi zene hazája", "Mexikó második legnagyobb városa", "Híres a tequiláról", "Pompás katedrális"],
      ro: ["Patria muzicii Mariachi", "Al doilea oraș ca mărime din Mexic", "Faimos pentru tequila", "Catedrală magnifică"],
      en: ["Home of Mariachi music", "Second largest city in Mexico", "Famous for tequila", "Magnificent cathedral"],
      es: ["Cuna de la música mariachi", "Segunda ciudad más grande de México", "Famosa por el tequila", "Magnífica catedral"],
      pt: ["Berço da música mariachi", "Segunda maior cidade do México", "Famosa pela tequila", "Catedral magnífica"],
      fr: ["Berceau de la musique mariachi", "Deuxième ville du Mexique", "Célèbre pour la tequila", "Magnifique cathédrale"],
    },
    elevation: 1566, historyYear: 1542, historyPeriod: "modern",
    coords: [-103.3496, 20.6597], type: 'landmark', parent: 'MX',
    image: "/poi-images/mex_gua.webp",
  }
];

export const mexicoAllPoi: POI[] = [...mexicoCities, ...poiExtraMexicoCitiesV2, ...poiExtraMexicoHistoryV2, ...poiExtraMexicoLifeV2, ...poiExtraMexicoReliefV2];

