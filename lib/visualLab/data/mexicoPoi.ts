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
      de: "Mexiko-Stadt liegt in einem hochgelegenen Becken, das von vulkanischen Bergen umgeben ist, was die Stadt anfällig für Erdbeben und eine besondere klimatische Dynamik macht. Die Architektur der Stadt spiegelt eine faszinierende Mischung aus aztekischen Fundamenten, kolonialer Pracht und moderner Urbanität wider, die weltweit ihresgleichen sucht.",
      hu: "Mexikóváros a Mexikói-fennsík központjában, 2240 méteres magasságban fekszik, vulkanikus hegyek gyűrűjében, ami különleges klímát biztosít számára. Az urbanizáció során az ősi Tenochtitlan alapjaira épült rá a spanyol gyarmati stílus, majd a modern felhőkarcolók, így a város egy élő történelmi múzeumként funkcionál. A város növekedése és a folyamatos felszíni süllyedés ma komoly mérnöki kihívásokat jelent a városüzemeltetés számára. Földrajz K7 — magasföldi urbanizáció.",
      ro: "Mexico City este situat într-un bazin muntos de mare altitudine, înconjurat de munți vulcanici, ceea ce face orașul vulnerabil la cutremure și creează o dinamică climatică unică. Arhitectura orașului reflectă un amestec fascinant de fundații aztece, splendoare colonială și urbanitate modernă, neavând pereche în lume.",
      en: "Mexico City is situated in a high-altitude basin surrounded by volcanic peaks, which creates unique climatic conditions and presents challenges related to seismic activity. The city serves as a sprawling architectural museum, where ancient Aztec ruins are layered beneath Spanish colonial architecture and modern skyscrapers. As the economic and cultural hub of Mexico, the city features an extensive urban fabric that houses millions, driven by a history that predates many European capitals. Geography K7 — high-altitude urban centers.",
      es: "Ciudad de México está situada en una cuenca de gran altitud rodeada de montañas volcánicas, lo que la hace vulnerable a terremotos y le confiere una dinámica climática especial. La arquitectura de la ciudad refleja una mezcla fascinante de cimientos aztecas, esplendor colonial y urbanidad moderna que no tiene parangón en el mundo.",
      pt: "A Cidade do México situa-se numa bacia de elevada altitude rodeada por montanhas vulcânicas, o que torna a cidade vulnerável a terramotos e lhe confere uma dinâmica climática especial. A arquitetura da cidade reflete uma mistura fascinante de fundações astecas, esplendor colonial e urbanidade moderna, sem paralelo no mundo.",
      fr: "La ville de Mexico est située dans un bassin d'altitude entouré de montagnes volcaniques, ce qui la rend vulnérable aux tremblements de terre et lui confère une dynamique climatique particulière. L'architecture de la ville reflète un mélange fascinant de fondations aztèques, de splendeur coloniale et d'urbanité moderne, unique au monde.",
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
      de: "Guadalajara ist das Zentrum der Region Bajío und ein kulturelles Kraftzentrum, das tief in der mexikanischen Identität verwurzelt ist. Während die Stadt ihre traditionellen Wurzeln wie den Mariachi-Stil pflegt, ist sie gleichzeitig ein global bedeutendes Innovationszentrum, das als 'Silicon Valley Mexikos' bekannt ist.",
      hu: "Guadalajara a mexikói Bajío régió kulturális és gazdasági központja, amely büszkén őrzi a mariachi zene és a tequila tradicionális gyökereit. A város technológiai fejlődése révén ma már Mexikó \\\"Szilícium-völgyeként\\\" ismert, ahol a modern elektronikai ipar és a klasszikus gyarmati építészet békésen megfér egymás mellett. A katedrális ikertornyai és a város körüli történelmi terek betekintést nyújtanak a gazdag mexikói identitásba. Történelem K8 — technológiai fejlődés és hagyomány.",
      ro: "Guadalajara este centrul regiunii Bajío și un motor cultural profund înrădăcinat în identitatea mexicană. În timp ce orașul își cultivă rădăcinile tradiționale, precum stilul Mariachi, este totodată un centru de inovare important la nivel mondial, cunoscut drept \\\"Silicon Valley\\\" al Mexicului.",
      en: "Guadalajara serves as a key cultural anchor in the Bajío region and is deeply tied to quintessential Mexican traditions like Mariachi music and tequila production. Beyond its heritage, the city has evolved into a major technological powerhouse, frequently referred to as the 'Silicon Valley of Mexico' due to its flourishing electronics and software industries. Its historical center remains preserved, while its surrounding metropolitan area continues to push forward with rapid industrial and academic growth. Geography K7 — culture and regional development.",
      es: "Guadalajara es el centro de la región del Bajío y un motor cultural profundamente arraigado en la identidad mexicana. Mientras la ciudad preserva sus raíces tradicionales, como el estilo mariachi, es al mismo tiempo un centro de innovación de importancia mundial, conocido como el 'Silicon Valley de México'.",
      pt: "Guadalajara é o centro da região do Bajío e um centro cultural profundamente enraizado na identidade mexicana. Embora a cidade preserve as suas raízes tradicionais, como o estilo mariachi, é simultaneamente um centro de inovação de importância mundial, conhecido como o 'Silicon Valley do México'.",
      fr: "Guadalajara est le cœur de la région du Bajío et un centre culturel profondément ancré dans l'identité mexicaine. Tout en cultivant ses racines traditionnelles, comme la musique mariachi, elle est aussi un pôle d'innovation d'importance mondiale, surnommé la 'Silicon Valley du Mexique'.",
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

